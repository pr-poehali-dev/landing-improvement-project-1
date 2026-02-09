import { useState, ChangeEvent, FormEvent } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

interface FormData {
  name: string;
  age: string;
  question: string;
  contact: string;
  receipt: string;
}

const ReadingForm = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    age: '',
    question: '',
    contact: '',
    receipt: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: 'success' | 'error' | null;
    message: string;
  }>({ type: null, message: '' });

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onloadend = () => {
      const base64String = reader.result as string;
      const base64Data = base64String.split(',')[1];
      setFormData((prev) => ({ ...prev, receipt: base64Data }));
    };
    reader.readAsDataURL(file);
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: '' });

    try {
      const response = await fetch(
        'https://functions.poehali.dev/45cd65ca-4dcf-4c0f-9191-947c479e3ab3',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        }
      );

      const data = await response.json();

      if (response.ok) {
        setSubmitStatus({
          type: 'success',
          message: data.message || 'Заявка успешно отправлена!',
        });
        setFormData({
          name: '',
          age: '',
          question: '',
          contact: '',
          receipt: '',
        });
        
        setTimeout(() => {
          setSubmitStatus({ type: null, message: '' });
        }, 8000);
      } else {
        setSubmitStatus({
          type: 'error',
          message: data.error || 'Произошла ошибка при отправке',
        });
      }
    } catch (error) {
      setSubmitStatus({
        type: 'error',
        message: 'Не удалось отправить заявку. Проверьте интернет-соединение.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="order" className="py-20 px-4">
      <div className="container mx-auto max-w-3xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Заказать <span className="text-primary">расклад</span>
          </h2>
          <p className="text-foreground/70 text-lg">
            Заполните форму, и я свяжусь с вами в ближайшее время
          </p>
        </div>

        <Card className="bg-[#1A1F2C]/50 border-primary/20">
          <CardContent className="p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium mb-2"
                >
                  Ваше имя <span className="text-primary">*</span>
                </label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Как к вам обращаться?"
                  className="bg-background/50 border-primary/30"
                />
              </div>

              <div>
                <label
                  htmlFor="age"
                  className="block text-sm font-medium mb-2"
                >
                  Возраст <span className="text-primary">*</span>
                </label>
                <Input
                  id="age"
                  name="age"
                  type="number"
                  required
                  min="1"
                  max="120"
                  value={formData.age}
                  onChange={handleInputChange}
                  placeholder="Сколько вам лет?"
                  className="bg-background/50 border-primary/30"
                />
              </div>

              <div>
                <label
                  htmlFor="question"
                  className="block text-sm font-medium mb-2"
                >
                  Ваш вопрос <span className="text-primary">*</span>
                </label>
                <Textarea
                  id="question"
                  name="question"
                  required
                  value={formData.question}
                  onChange={handleInputChange}
                  placeholder="Опишите ситуацию или задайте вопрос..."
                  rows={5}
                  className="bg-background/50 border-primary/30 resize-none"
                />
              </div>

              <div>
                <label
                  htmlFor="contact"
                  className="block text-sm font-medium mb-2"
                >
                  Обратная связь <span className="text-primary">*</span>
                </label>
                <Input
                  id="contact"
                  name="contact"
                  type="text"
                  required
                  value={formData.contact}
                  onChange={handleInputChange}
                  placeholder="Telegram, WhatsApp, email..."
                  className="bg-background/50 border-primary/30"
                />
              </div>

              <div>
                <label
                  htmlFor="receipt"
                  className="block text-sm font-medium mb-2"
                >
                  Чек об оплате (необязательно)
                </label>
                <div className="flex items-center gap-3">
                  <Input
                    id="receipt"
                    name="receipt"
                    type="file"
                    accept="image/*"
                    onChange={handleFileChange}
                    className="bg-background/50 border-primary/30"
                  />
                  {formData.receipt && (
                    <Icon name="Check" className="text-green-500" size={24} />
                  )}
                </div>
                <p className="text-xs text-foreground/50 mt-2">
                  Прикрепите скриншот или фото чека после оплаты
                </p>
              </div>

              {submitStatus.type && (
                <div
                  className={`p-6 rounded-lg flex flex-col items-center gap-3 animate-fade-in ${
                    submitStatus.type === 'success'
                      ? 'bg-green-500/10 border-2 border-green-500/30'
                      : 'bg-red-500/10 border-2 border-red-500/30'
                  }`}
                >
                  <div className={`w-16 h-16 rounded-full flex items-center justify-center ${
                    submitStatus.type === 'success'
                      ? 'bg-green-500/20'
                      : 'bg-red-500/20'
                  }`}>
                    <Icon
                      name={submitStatus.type === 'success' ? 'CheckCircle2' : 'XCircle'}
                      size={40}
                      className={submitStatus.type === 'success' ? 'text-green-500' : 'text-red-500'}
                    />
                  </div>
                  <p className={`text-lg font-semibold text-center ${
                    submitStatus.type === 'success' ? 'text-green-500' : 'text-red-500'
                  }`}>
                    {submitStatus.type === 'success' ? '✨ Заявка отправлена!' : 'Ошибка отправки'}
                  </p>
                  <p className="text-sm text-center text-foreground/70">
                    {submitStatus.message}
                  </p>
                  {submitStatus.type === 'success' && (
                    <p className="text-xs text-center text-foreground/50 mt-2">
                      Свяжусь с вами в ближайшее время 🔮
                    </p>
                  )}
                </div>
              )}

              <Button
                type="submit"
                size="lg"
                disabled={isSubmitting}
                className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
              >
                {isSubmitting ? (
                  <>
                    <Icon name="Loader2" className="animate-spin mr-2" size={20} />
                    Отправка...
                  </>
                ) : (
                  <>
                    <Icon name="Send" className="mr-2" size={20} />
                    Отправить заявку
                  </>
                )}
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default ReadingForm;