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
      title: 'Стратегическое консультирование',
      description: 'Разработка индивидуальной стратегии развития бизнеса с учётом энергетических потоков и циклов роста',
    },
    {
      icon: 'Target',
      title: 'Бизнес-прогнозирование',
      description: 'Анализ перспектив и выявление оптимальных точек принятия решений для максимальной эффективности',
    },
    {
      icon: 'Compass',
      title: 'Личный коучинг',
      description: 'Индивидуальное сопровождение руководителей на пути к достижению целей и раскрытию потенциала',
    },
    {
      icon: 'Lightbulb',
      title: 'Трансформация бизнеса',
      description: 'Глубинная работа с корпоративной культурой и внутренними процессами для качественных изменений',
    },
  ];

  const portfolio = [
    {
      title: 'Технологический стартап',
      result: 'Рост выручки на 340% за 8 месяцев',
      image: 'https://cdn.poehali.dev/projects/14515480-37e5-4355-998d-e470df304a32/files/43b15bcf-bf83-41a6-8297-c09d6e7c5bf7.jpg',
    },
    {
      title: 'Ритейл-сеть',
      result: 'Открытие 12 новых точек без потери качества',
      image: 'https://cdn.poehali.dev/projects/14515480-37e5-4355-998d-e470df304a32/files/26760d96-c648-4cf3-bb18-96b1a87772f7.jpg',
    },
    {
      title: 'Консалтинговое агентство',
      result: 'Полная реструктуризация и выход на новые рынки',
      image: 'https://cdn.poehali.dev/projects/14515480-37e5-4355-998d-e470df304a32/files/6213ff6e-3eca-4d80-b2cb-7721b430343d.jpg',
    },
  ];

  const testimonials = [
    {
      name: 'Елена Соколова',
      position: 'CEO Tech Solutions',
      text: 'Работа с консультантом полностью изменила вектор развития компании. Мы не просто достигли целей — мы их превзошли.',
      avatar: '👩‍💼',
    },
    {
      name: 'Михаил Петров',
      position: 'Основатель Retail Group',
      text: 'Невероятная глубина анализа и точность рекомендаций. Каждая встреча приносила конкретные результаты.',
      avatar: '👨‍💼',
    },
    {
      name: 'Анна Волкова',
      position: 'Директор Marketing Agency',
      text: 'Уникальный подход к стратегическому планированию помог нам увидеть возможности там, где мы видели препятствия.',
      avatar: '👩‍🦰',
    },
  ];

  const faqs = [
    {
      question: 'Как проходит первая консультация?',
      answer: 'Первая встреча длится 90 минут. Мы погружаемся в текущую ситуацию, выявляем ключевые точки роста и намечаем стратегический план действий.',
    },
    {
      question: 'Сколько времени занимает работа?',
      answer: 'Минимальный цикл работы — 3 месяца. За это время происходят первые значимые трансформации. Долгосрочное сопровождение от 6 месяцев.',
    },
    {
      question: 'Какие гарантии результата?',
      answer: 'Мы работаем на результат и фиксируем конкретные метрики в начале сотрудничества. 95% клиентов достигают или превышают поставленные цели.',
    },
    {
      question: 'С какими компаниями вы работаете?',
      answer: 'Работаем с бизнесом от стартапов до крупных корпораций. Главное — готовность к изменениям и стремление к развитию.',
    },
    {
      question: 'Можно ли начать с пробной консультации?',
      answer: 'Да, мы предлагаем первую диагностическую сессию на 60 минут. Это позволит понять подход и оценить потенциал сотрудничества.',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#1A1F2C] via-[#1e1640] to-[#1A1F2C]">
      <nav className="fixed top-0 w-full z-50 bg-[#1A1F2C]/80 backdrop-blur-md border-b border-primary/20">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold text-primary">Mystical Consult</div>
          
          <div className="hidden md:flex gap-6">
            <a href="#services" className="text-foreground/80 hover:text-primary transition-colors">
              Услуги
            </a>
            <a href="#portfolio" className="text-foreground/80 hover:text-primary transition-colors">
              Портфолио
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
                href="#portfolio"
                onClick={closeMenu}
                className="text-foreground/80 hover:text-primary transition-colors py-2 text-lg"
              >
                Портфолио
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
                Трансформация через
                <span className="text-primary"> мудрость</span> и
                <span className="text-secondary"> стратегию</span>
              </h1>
              <p className="text-xl text-foreground/80 mb-8">
                Глубинное консультирование для бизнес-лидеров, готовых к качественным изменениям и достижению амбициозных целей
              </p>
              <div className="flex gap-4">
                <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 hover-glow">
                  Начать путь
                </Button>
                <Button size="lg" variant="outline" className="border-primary/50 text-primary hover:bg-primary/10">
                  Узнать больше
                </Button>
              </div>
            </div>
            <div className="animate-slide-up">
              <img
                src="https://cdn.poehali.dev/projects/14515480-37e5-4355-998d-e470df304a32/files/6213ff6e-3eca-4d80-b2cb-7721b430343d.jpg"
                alt="Mystical Consulting"
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
          <div className="grid md:grid-cols-2 gap-6">
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
                  <p className="text-foreground/70">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="portfolio" className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Портфолио</h2>
            <p className="text-xl text-foreground/70">Истории успешных трансформаций</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {portfolio.map((project, index) => (
              <Card
                key={index}
                className="bg-card/50 backdrop-blur-sm border-primary/20 overflow-hidden hover-glow transition-all duration-300 hover:scale-105 animate-fade-in"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent"></div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-secondary font-medium">{project.result}</p>
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
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Связаться с нами</h2>
            <p className="text-xl text-foreground/70">Начните свою трансформацию сегодня</p>
          </div>
          <Card className="bg-card/50 backdrop-blur-sm border-primary/20 animate-fade-in">
            <CardContent className="p-8">
              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Имя</label>
                  <Input
                    type="text"
                    placeholder="Ваше имя"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="bg-background/50 border-primary/30"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Email</label>
                  <Input
                    type="email"
                    placeholder="your@email.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="bg-background/50 border-primary/30"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Сообщение</label>
                  <Textarea
                    placeholder="Расскажите о вашем запросе..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="bg-background/50 border-primary/30 min-h-32"
                  />
                </div>
                <Button type="submit" size="lg" className="w-full bg-primary text-primary-foreground hover:bg-primary/90 hover-glow">
                  Отправить запрос
                </Button>
              </form>
              <div className="mt-8 pt-8 border-t border-primary/20 grid md:grid-cols-3 gap-6 text-center">
                <div>
                  <Icon name="Mail" size={24} className="text-primary mx-auto mb-2" />
                  <p className="text-sm text-foreground/70">info@mystical-consult.ru</p>
                </div>
                <div>
                  <Icon name="Phone" size={24} className="text-primary mx-auto mb-2" />
                  <p className="text-sm text-foreground/70">+7 (999) 123-45-67</p>
                </div>
                <div>
                  <Icon name="MapPin" size={24} className="text-primary mx-auto mb-2" />
                  <p className="text-sm text-foreground/70">Москва, Россия</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <footer className="py-8 px-4 border-t border-primary/20">
        <div className="container mx-auto text-center">
          <p className="text-foreground/60">© 2024 Mystical Consult. Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;