import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import Icon from '@/components/ui/icon';
import ReadingForm from '@/components/ReadingForm';

const Index = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const closeMenu = () => setMobileMenuOpen(false);

  const services = [
    {
      icon: 'Sparkles',
      title: 'Расклад Таро на один вопрос',
      price: '500 ₽',
      description: 'Быстрый и точный ответ на ваш конкретный вопрос. Получите ясность в волнующей ситуации.',
    },
    {
      icon: 'BookOpen',
      title: 'Подробный расклад',
      price: '1000 ₽',
      description: 'Глубокий анализ ситуации с детальным толкованием карт и практическими рекомендациями.',
    },
    {
      icon: 'Heart',
      title: 'Оплата по сердцу',
      price: 'По желанию',
      description: 'Вы сами определяете стоимость консультации исходя из своих возможностей и ценности полученной помощи.',
    },
  ];

  const questions = [
    'Была ли измена?',
    'Что он/она чувствует и думает обо мне?',
    'Вернётся ли он/она?',
    'Когда встречу свою любовь?',
    'Почему не получается с деньгами?',
    'Что меня ждёт в ближайшее время?',
    'Моё ли это предназначение?',
    'Стоит ли переезжать?',
  ];

  const testimonials = [
    {
      name: 'Мария',
      position: '32 года',
      text: 'Расклад помог мне понять истинные причины ситуации. Всё сбылось именно так, как было предсказано. Очень благодарна за поддержку и мудрые советы.',
      avatar: '🌸',
    },
    {
      name: 'Александра',
      position: '28 лет',
      text: 'Получила чёткие ответы на свои вопросы без навязывания и страшных прогнозов. Карты показали то, что я чувствовала, но боялась признать.',
      avatar: '✨',
    },
    {
      name: 'Екатерина',
      position: '35 лет',
      text: 'Работа очень деликатная и глубокая. Таролог не просто раскладывает карты, а помогает увидеть ситуацию целиком и принять правильное решение.',
      avatar: '🌙',
    },
  ];

  const faqs = [
    {
      question: 'Как проходит расклад?',
      answer: 'Вы задаёте свой вопрос, указываете имя и возраст. Я провожу расклад карт Таро, анализирую их значение и отправляю вам подробное толкование с рекомендациями.',
    },
    {
      question: 'Сколько времени занимает ответ?',
      answer: 'Обычно расклад готов в течение 24 часов. В особых случаях может потребоваться немного больше времени для глубокого анализа.',
    },
    {
      question: 'Можно ли задать несколько вопросов?',
      answer: 'Да, для этого выбирайте подробный расклад за 1000 рублей. Он позволяет рассмотреть ситуацию с разных сторон и получить развёрнутые ответы.',
    },
    {
      question: 'Дадите ли вы страшные предсказания?',
      answer: 'Нет, я работаю бережно и без давления. Карты показывают возможности и тенденции, а не неизбежную судьбу. Вы всегда можете изменить ситуацию.',
    },
    {
      question: 'Как оплатить консультацию?',
      answer: 'Оплата возможна любым удобным способом: по карте, через СБП или по системе «оплата по сердцу» — сумму определяете вы сами.',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#1A1F2C] via-[#1e1640] to-[#1A1F2C]">
      <nav className="fixed top-0 w-full z-50 bg-[#1A1F2C]/80 backdrop-blur-md border-b border-primary/20">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold text-primary">Таролог-ясновидец</div>
          
          <div className="hidden md:flex gap-6">
            <a href="#services" className="text-foreground/80 hover:text-primary transition-colors">
              Услуги
            </a>
            <a href="#questions" className="text-foreground/80 hover:text-primary transition-colors">
              Вопросы
            </a>
            <a href="#testimonials" className="text-foreground/80 hover:text-primary transition-colors">
              Отзывы
            </a>
            <a href="#faq" className="text-foreground/80 hover:text-primary transition-colors">
              FAQ
            </a>
            <a href="#contact" className="text-foreground/80 hover:text-primary transition-colors">
              Контакты
            </a>
          </div>
          
          <Button className="hidden md:flex bg-secondary text-secondary-foreground hover:bg-secondary/90">
            Консультация
          </Button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-primary p-2"
            aria-label="Toggle menu"
          >
            <Icon name={mobileMenuOpen ? 'X' : 'Menu'} size={28} />
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden bg-[#1A1F2C] border-t border-primary/20 animate-fade-in">
            <div className="container mx-auto px-4 py-6 flex flex-col gap-4">
              <a
                href="#services"
                onClick={closeMenu}
                className="text-foreground/80 hover:text-primary transition-colors py-2 text-lg"
              >
                Услуги
              </a>
              <a
                href="#questions"
                onClick={closeMenu}
                className="text-foreground/80 hover:text-primary transition-colors py-2 text-lg"
              >
                Вопросы
              </a>
              <a
                href="#testimonials"
                onClick={closeMenu}
                className="text-foreground/80 hover:text-primary transition-colors py-2 text-lg"
              >
                Отзывы
              </a>
              <a
                href="#faq"
                onClick={closeMenu}
                className="text-foreground/80 hover:text-primary transition-colors py-2 text-lg"
              >
                FAQ
              </a>
              <a
                href="#contact"
                onClick={closeMenu}
                className="text-foreground/80 hover:text-primary transition-colors py-2 text-lg"
              >
                Контакты
              </a>
              <Button className="mt-2 bg-secondary text-secondary-foreground hover:bg-secondary/90">
                Консультация
              </Button>
            </div>
          </div>
        )}
      </nav>

      <section className="pt-32 pb-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary/30 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>
        
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h1 className="text-5xl md:text-7xl font-bold mb-6 text-balance">
                Гадание по картам <span className="text-primary">Таро</span>
              </h1>
              <p className="text-xl text-foreground/80 mb-8">
                Помогу увидеть истинные причины происходящего через расклады карт Таро. Работаю бережно, без давления и страшных прогнозов.
              </p>
              <div className="flex gap-4">
                <Button 
                  size="lg" 
                  className="bg-primary text-primary-foreground hover:bg-primary/90 hover-glow"
                  onClick={() => document.getElementById('order')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Заказать расклад
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-primary/50 text-primary hover:bg-primary/10"
                  onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Обо мне
                </Button>
              </div>
            </div>
            <div className="animate-slide-up">
              <img
                src="https://cdn.poehali.dev/projects/14515480-37e5-4355-998d-e470df304a32/bucket/7a37de46-c3b8-4514-a7c2-5fadf548a4ea.jpeg"
                alt="Карты Таро и свечи"
                className="rounded-2xl shadow-2xl shadow-primary/20 hover-glow"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-20 px-4 bg-gradient-to-b from-transparent to-[#1A1F2C]">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Услуги</h2>
            <p className="text-xl text-foreground/70">Индивидуальный подход к каждому клиенту</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <Card
                key={index}
                className="bg-card/50 backdrop-blur-sm border-primary/20 hover-glow transition-all duration-300 hover:scale-105 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mb-4">
                    <Icon name={service.icon} size={32} className="text-primary" />
                  </div>
                  <h3 className="text-2xl font-semibold mb-3">{service.title}</h3>
                  <p className="text-3xl font-bold text-secondary mb-3">{service.price}</p>
                  <p className="text-foreground/70">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="questions" className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">С чем обращаются</h2>
            <p className="text-xl text-foreground/70">Типичные вопросы клиентов</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {questions.map((question, index) => (
              <Card
                key={index}
                className="bg-card/50 backdrop-blur-sm border-primary/20 hover-glow transition-all duration-300 hover:scale-105 animate-fade-in"
                style={{ animationDelay: `${index * 0.08}s` }}
              >
                <CardContent className="p-6 flex items-center gap-3">
                  <Icon name="Sparkles" size={20} className="text-secondary flex-shrink-0" />
                  <p className="text-foreground/90">{question}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="testimonials" className="py-20 px-4 bg-gradient-to-b from-transparent to-[#1e1640]">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Отзывы клиентов</h2>
            <p className="text-xl text-foreground/70">Что говорят о нашей работе</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card
                key={index}
                className="bg-card/50 backdrop-blur-sm border-primary/20 hover-glow transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-8">
                  <div className="text-6xl mb-4">{testimonial.avatar}</div>
                  <p className="text-foreground/80 mb-6 italic">"{testimonial.text}"</p>
                  <div>
                    <p className="font-semibold text-primary">{testimonial.name}</p>
                    <p className="text-sm text-foreground/60">{testimonial.position}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="faq" className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Часто задаваемые вопросы</h2>
            <p className="text-xl text-foreground/70">Ответы на популярные вопросы</p>
          </div>
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card/50 backdrop-blur-sm border border-primary/20 rounded-lg px-6 animate-fade-in"
                style={{ animationDelay: `${index * 0.08}s` }}
              >
                <AccordionTrigger className="text-left text-lg font-medium hover:text-primary">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-foreground/70">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <section id="contact" className="py-20 px-4 bg-gradient-to-b from-[#1e1640] to-[#1A1F2C]">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Контакты</h2>
            <p className="text-xl text-foreground/70">Закажите расклад или задайте вопрос</p>
          </div>
          <Card className="bg-card/50 backdrop-blur-sm border-primary/20 animate-fade-in">
            <CardContent className="p-8">
              <div className="grid md:grid-cols-2 gap-12">
                <div className="space-y-8">
                  <div>
                    <h3 className="text-2xl font-semibold mb-6 text-center">Связаться со мной</h3>
                    <div className="space-y-4">
                      <a href="https://t.me/romanpalaris" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 p-4 bg-background/50 rounded-lg border border-primary/20 hover:border-secondary hover-glow transition-all">
                        <Icon name="Send" size={24} className="text-primary" />
                        <div>
                          <p className="font-medium">Telegram</p>
                          <p className="text-sm text-foreground/70">@romanpalaris</p>
                        </div>
                      </a>
                      <a href="https://wa.me/89262031206" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 p-4 bg-background/50 rounded-lg border border-primary/20 hover:border-secondary hover-glow transition-all">
                        <Icon name="MessageCircle" size={24} className="text-primary" />
                        <div>
                          <p className="font-medium">WhatsApp</p>
                          <p className="text-sm text-foreground/70">+7 926 203-12-06</p>
                        </div>
                      </a>
                      <a href="tel:+79262031206" className="flex items-center gap-3 p-4 bg-background/50 rounded-lg border border-primary/20 hover:border-secondary hover-glow transition-all">
                        <Icon name="Phone" size={24} className="text-primary" />
                        <div>
                          <p className="font-medium">Телефон</p>
                          <p className="text-sm text-foreground/70">+7 926 203-12-06</p>
                        </div>
                      </a>
                      <a href="mailto:palaris@inbox.ru" className="flex items-center gap-3 p-4 bg-background/50 rounded-lg border border-primary/20 hover:border-secondary hover-glow transition-all">
                        <Icon name="Mail" size={24} className="text-primary" />
                        <div>
                          <p className="font-medium">Email</p>
                          <p className="text-sm text-foreground/70">palaris@inbox.ru</p>
                        </div>
                      </a>
                    </div>
                  </div>
                  <div className="text-center pt-4">
                    <img src="https://cdn.poehali.dev/projects/14515480-37e5-4355-998d-e470df304a32/bucket/27faa474-653a-4a0c-baee-000f352c7a62.jpeg" alt="QR код Telegram" className="w-48 h-48 mx-auto rounded-lg shadow-lg" />
                    <p className="text-sm text-foreground/70 mt-3">Сканируйте для связи в Telegram</p>
                  </div>
                </div>
                <div className="flex flex-col items-center justify-center">
                  <h3 className="text-2xl font-semibold mb-6 text-center">Оплата консультации</h3>
                  <img src="https://cdn.poehali.dev/projects/14515480-37e5-4355-998d-e470df304a32/bucket/9cb9675c-4a9a-4ca8-b337-b205826e61f5.png" alt="QR код для оплаты" className="w-64 h-64 rounded-lg shadow-lg" />
                  <p className="text-sm text-foreground/70 mt-4 text-center">Сканируйте для оплаты расклада</p>
                  <div className="mt-6 p-4 bg-secondary/10 rounded-lg border border-secondary/30">
                    <p className="text-center text-foreground/80"><span className="font-semibold">Базовый расклад:</span> 500₽</p>
                    <p className="text-center text-foreground/80"><span className="font-semibold">Подробный расклад:</span> 1000₽</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <ReadingForm />

      <footer className="py-8 px-4 border-t border-primary/20">
        <div className="container mx-auto text-center">
          <p className="text-foreground/60">© 2024 Таролог-ясновидец. Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;