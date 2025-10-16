import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Icon from "@/components/ui/icon";
import { useState } from "react";

const Index = () => {
  const [activeSection, setActiveSection] = useState("home");

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          <div className="flex items-center gap-2">
            <Icon name="Scale" size={28} className="text-primary" />
            <h1 className="text-2xl font-bold text-primary">ЮрКонсалт</h1>
          </div>
          <nav className="hidden md:flex gap-6">
            {[
              { id: "home", label: "Главная" },
              { id: "responsibility", label: "Ответственность" },
              { id: "legislation", label: "Законодательство" },
              { id: "practice", label: "Практика" },
              { id: "contact", label: "Контакты" },
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  activeSection === item.id ? "text-primary" : "text-secondary"
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>
        </div>
      </header>

      <section id="home" className="py-20 bg-gradient-to-b from-muted/50 to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-5xl font-bold mb-6 text-foreground">
              Ответственность директора за сотрудника, управляющего транспортным средством
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Комплексная юридическая информация о нормах законодательства и судебной практике
            </p>
            <Button
              size="lg"
              onClick={() => scrollToSection("responsibility")}
              className="bg-primary hover:bg-primary/90"
            >
              Узнать подробнее
            </Button>
          </div>
        </div>
      </section>

      <section id="responsibility" className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-8 text-center">Ответственность</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="border-border hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <Icon name="AlertTriangle" size={24} className="text-primary" />
                  </div>
                  <CardTitle>Административная ответственность</CardTitle>
                  <CardDescription>
                    Директор несет ответственность за нарушения, совершенные сотрудником при управлении служебным транспортом
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <Icon name="ChevronRight" size={16} className="mt-0.5 flex-shrink-0" />
                      <span>КоАП РФ Статья 2.6.1 - ответственность владельца транспортного средства</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Icon name="ChevronRight" size={16} className="mt-0.5 flex-shrink-0" />
                      <span>Штрафы за нарушения ПДД фиксируются на организацию</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Icon name="ChevronRight" size={16} className="mt-0.5 flex-shrink-0" />
                      <span>Возможность регресса к сотруднику при умышленных нарушениях</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-border hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <Icon name="FileText" size={24} className="text-primary" />
                  </div>
                  <CardTitle>Гражданская ответственность</CardTitle>
                  <CardDescription>
                    Компенсация ущерба третьим лицам при ДТП с участием служебного транспорта
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <Icon name="ChevronRight" size={16} className="mt-0.5 flex-shrink-0" />
                      <span>ГК РФ Статья 1068 - ответственность работодателя за работника</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Icon name="ChevronRight" size={16} className="mt-0.5 flex-shrink-0" />
                      <span>Обязательное страхование ОСАГО</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Icon name="ChevronRight" size={16} className="mt-0.5 flex-shrink-0" />
                      <span>Возмещение сверх лимита страховки за счет организации</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-border hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <Icon name="ShieldAlert" size={24} className="text-primary" />
                  </div>
                  <CardTitle>Уголовная ответственность</CardTitle>
                  <CardDescription>
                    Наступает при тяжких последствиях ДТП с участием служебного транспорта
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <Icon name="ChevronRight" size={16} className="mt-0.5 flex-shrink-0" />
                      <span>УК РФ Статья 264 - нарушение ПДД с тяжкими последствиями</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Icon name="ChevronRight" size={16} className="mt-0.5 flex-shrink-0" />
                      <span>Ответственность водителя, допустившего нарушение</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Icon name="ChevronRight" size={16} className="mt-0.5 flex-shrink-0" />
                      <span>Потенциальная ответственность руководителя при грубых нарушениях</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-border hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <Icon name="ClipboardCheck" size={24} className="text-primary" />
                  </div>
                  <CardTitle>Профилактические меры</CardTitle>
                  <CardDescription>
                    Рекомендации по снижению рисков и минимизации ответственности
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <Icon name="ChevronRight" size={16} className="mt-0.5 flex-shrink-0" />
                      <span>Регулярные медосмотры и проверка квалификации водителей</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Icon name="ChevronRight" size={16} className="mt-0.5 flex-shrink-0" />
                      <span>Контроль технического состояния транспорта</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Icon name="ChevronRight" size={16} className="mt-0.5 flex-shrink-0" />
                      <span>Инструктажи по безопасности дорожного движения</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section id="legislation" className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-8 text-center">Законодательство</h2>
            <div className="space-y-4">
              <Card className="border-border">
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon name="BookOpen" size={24} className="text-primary" />
                    </div>
                    <div>
                      <CardTitle>Кодекс об административных правонарушениях (КоАП РФ)</CardTitle>
                      <CardDescription className="mt-2">
                        Статья 2.6.1 устанавливает, что к административной ответственности за нарушения в области дорожного движения, зафиксированные работающими в автоматическом режиме специальными техническими средствами, привлекается собственник транспортного средства.
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
              </Card>

              <Card className="border-border">
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon name="Scale" size={24} className="text-primary" />
                    </div>
                    <div>
                      <CardTitle>Гражданский кодекс РФ (ГК РФ)</CardTitle>
                      <CardDescription className="mt-2">
                        Статья 1068: Юридическое лицо либо гражданин возмещает вред, причиненный его работником при исполнении трудовых (служебных, должностных) обязанностей. Работодатель вправе предъявить регрессное требование к работнику в случаях, предусмотренных Трудовым кодексом.
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
              </Card>

              <Card className="border-border">
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon name="Gavel" size={24} className="text-primary" />
                    </div>
                    <div>
                      <CardTitle>Уголовный кодекс РФ (УК РФ)</CardTitle>
                      <CardDescription className="mt-2">
                        Статья 264: Нарушение лицом, управляющим автомобилем, правил дорожного движения, повлекшее по неосторожности причинение тяжкого вреда здоровью человека или смерть, влечет уголовную ответственность водителя.
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
              </Card>

              <Card className="border-border">
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon name="FileCheck" size={24} className="text-primary" />
                    </div>
                    <div>
                      <CardTitle>Трудовой кодекс РФ (ТК РФ)</CardTitle>
                      <CardDescription className="mt-2">
                        Статья 238: Работник обязан возместить работодателю причиненный ему прямой действительный ущерб. Неполученные доходы (упущенная выгода) взысканию с работника не подлежат. Статья 241: За причиненный ущерб работник несет материальную ответственность в пределах своего среднего месячного заработка.
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section id="practice" className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-8 text-center">Судебная практика</h2>
            <div className="space-y-6">
              <Card className="border-border hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <CardTitle className="text-xl">
                        Определение Верховного Суда РФ от 15.08.2018 № 41-КГ18-21
                      </CardTitle>
                      <CardDescription className="mt-2">
                        Работодатель несет ответственность за вред, причиненный его работником
                      </CardDescription>
                    </div>
                    <Icon name="FileText" size={32} className="text-primary flex-shrink-0" />
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    Суд подтвердил, что организация-работодатель обязана возместить вред, причиненный водителем служебного автомобиля третьим лицам при ДТП, произошедшем в рабочее время. После возмещения работодатель вправе предъявить регрессное требование к работнику в размере прямого действительного ущерба.
                  </p>
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <Icon name="Calendar" size={14} />
                    <span>15 августа 2018</span>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-border hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <CardTitle className="text-xl">
                        Постановление Пленума ВС РФ от 26.01.2010 № 1
                      </CardTitle>
                      <CardDescription className="mt-2">
                        О применении судами гражданского законодательства в делах о компенсации морального вреда
                      </CardDescription>
                    </div>
                    <Icon name="FileText" size={32} className="text-primary flex-shrink-0" />
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    Разъяснения о том, что юридическое лицо возмещает вред, причиненный жизни или здоровью гражданина источником повышенной опасности (автомобилем), независимо от вины, если не докажет, что вред возник вследствие непреодолимой силы или умысла потерпевшего.
                  </p>
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <Icon name="Calendar" size={14} />
                    <span>26 января 2010</span>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-border hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <CardTitle className="text-xl">
                        Апелляционное определение Московского городского суда от 12.03.2019
                      </CardTitle>
                      <CardDescription className="mt-2">
                        Ограничение материальной ответственности водителя
                      </CardDescription>
                    </div>
                    <Icon name="FileText" size={32} className="text-primary flex-shrink-0" />
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    Суд указал, что при регрессном иске работодателя к водителю размер взыскания ограничен средним месячным заработком работника (ТК РФ ст. 241), за исключением случаев умышленного причинения ущерба или причинения ущерба в состоянии опьянения.
                  </p>
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <Icon name="Calendar" size={14} />
                    <span>12 марта 2019</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-4xl font-bold mb-8 text-center">Контакты</h2>
            <Card className="border-border">
              <CardHeader>
                <CardTitle>Запрос консультации</CardTitle>
                <CardDescription>
                  Заполните форму, и мы свяжемся с вами для предоставления юридической консультации
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium">
                      Имя
                    </label>
                    <Input id="name" placeholder="Введите ваше имя" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">
                      Email
                    </label>
                    <Input id="email" type="email" placeholder="your@email.com" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="phone" className="text-sm font-medium">
                      Телефон
                    </label>
                    <Input id="phone" type="tel" placeholder="+7 (___) ___-__-__" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium">
                      Сообщение
                    </label>
                    <Textarea
                      id="message"
                      placeholder="Опишите вашу ситуацию..."
                      rows={4}
                    />
                  </div>
                  <Button type="submit" className="w-full bg-primary hover:bg-primary/90">
                    Отправить запрос
                  </Button>
                </form>
              </CardContent>
            </Card>

            <div className="mt-8 grid md:grid-cols-3 gap-6 text-center">
              <div className="flex flex-col items-center gap-2">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Icon name="Mail" size={24} className="text-primary" />
                </div>
                <h3 className="font-semibold">Email</h3>
                <p className="text-sm text-muted-foreground">info@yurkonsalt.ru</p>
              </div>
              <div className="flex flex-col items-center gap-2">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Icon name="Phone" size={24} className="text-primary" />
                </div>
                <h3 className="font-semibold">Телефон</h3>
                <p className="text-sm text-muted-foreground">+7 (495) 123-45-67</p>
              </div>
              <div className="flex flex-col items-center gap-2">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Icon name="MapPin" size={24} className="text-primary" />
                </div>
                <h3 className="font-semibold">Адрес</h3>
                <p className="text-sm text-muted-foreground">Москва, ул. Примерная, д. 1</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-8 border-t bg-muted/10">
        <div className="container mx-auto px-4">
          <div className="text-center text-sm text-muted-foreground">
            <p>© 2024 ЮрКонсалт. Все права защищены.</p>
            <p className="mt-2">Информационный юридический портал</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
