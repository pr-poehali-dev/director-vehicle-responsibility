import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
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
            <Icon name="ShoppingCart" size={28} className="text-primary" />
            <h1 className="text-2xl font-bold text-primary">ЭТП Метрики</h1>
          </div>
          <nav className="hidden md:flex gap-6">
            {[
              { id: "home", label: "Главная" },
              { id: "metrics", label: "Метрики" },
              { id: "technical", label: "Технические" },
              { id: "financial", label: "Финансовые" },
              { id: "comparison", label: "Сравнение" },
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  activeSection === item.id ? "text-primary" : "text-foreground/60"
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>
        </div>
      </header>

      <section id="home" className="py-20 bg-gradient-to-b from-primary/5 to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-5xl font-bold mb-6 text-foreground">
              Метрики выбора электронной торговой площадки
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Комплексная система показателей для принятия обоснованного решения при выборе ЭТП для вашего бизнеса
            </p>
            <Button
              size="lg"
              onClick={() => scrollToSection("metrics")}
              className="bg-primary hover:bg-primary/90"
            >
              Изучить метрики
            </Button>
          </div>
        </div>
      </section>

      <section id="metrics" className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold mb-8 text-center">Ключевые метрики выбора</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="border-border hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <Icon name="Users" size={24} className="text-primary" />
                  </div>
                  <CardTitle>Охват аудитории</CardTitle>
                  <CardDescription>
                    Количество зарегистрированных покупателей и поставщиков
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <Icon name="ChevronRight" size={16} className="mt-0.5 flex-shrink-0" />
                      <span>Активная база покупателей</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Icon name="ChevronRight" size={16} className="mt-0.5 flex-shrink-0" />
                      <span>География участников</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Icon name="ChevronRight" size={16} className="mt-0.5 flex-shrink-0" />
                      <span>Отраслевая специализация</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-border hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <Icon name="TrendingUp" size={24} className="text-primary" />
                  </div>
                  <CardTitle>Объем торгов</CardTitle>
                  <CardDescription>
                    Годовой оборот и количество проведенных процедур
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <Icon name="ChevronRight" size={16} className="mt-0.5 flex-shrink-0" />
                      <span>Общий объем торгов за год</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Icon name="ChevronRight" size={16} className="mt-0.5 flex-shrink-0" />
                      <span>Количество завершенных сделок</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Icon name="ChevronRight" size={16} className="mt-0.5 flex-shrink-0" />
                      <span>Средний чек сделки</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-border hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <Icon name="Award" size={24} className="text-primary" />
                  </div>
                  <CardTitle>Репутация площадки</CardTitle>
                  <CardDescription>
                    Рейтинг, отзывы и время работы на рынке
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <Icon name="ChevronRight" size={16} className="mt-0.5 flex-shrink-0" />
                      <span>Срок работы на рынке</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Icon name="ChevronRight" size={16} className="mt-0.5 flex-shrink-0" />
                      <span>Рейтинг и отзывы участников</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Icon name="ChevronRight" size={16} className="mt-0.5 flex-shrink-0" />
                      <span>Аккредитация и сертификаты</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-border hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <Icon name="Shield" size={24} className="text-primary" />
                  </div>
                  <CardTitle>Безопасность</CardTitle>
                  <CardDescription>
                    Защита данных и соответствие стандартам
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <Icon name="ChevronRight" size={16} className="mt-0.5 flex-shrink-0" />
                      <span>Сертификаты безопасности (SSL, ЭЦП)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Icon name="ChevronRight" size={16} className="mt-0.5 flex-shrink-0" />
                      <span>Защита персональных данных</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Icon name="ChevronRight" size={16} className="mt-0.5 flex-shrink-0" />
                      <span>История инцидентов</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-border hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <Icon name="Headphones" size={24} className="text-primary" />
                  </div>
                  <CardTitle>Поддержка</CardTitle>
                  <CardDescription>
                    Качество и доступность технической поддержки
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <Icon name="ChevronRight" size={16} className="mt-0.5 flex-shrink-0" />
                      <span>Доступность 24/7</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Icon name="ChevronRight" size={16} className="mt-0.5 flex-shrink-0" />
                      <span>Каналы связи (чат, телефон, email)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Icon name="ChevronRight" size={16} className="mt-0.5 flex-shrink-0" />
                      <span>Среднее время ответа</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-border hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <Icon name="FileCheck" size={24} className="text-primary" />
                  </div>
                  <CardTitle>Функциональность</CardTitle>
                  <CardDescription>
                    Доступные инструменты и типы торгов
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <Icon name="ChevronRight" size={16} className="mt-0.5 flex-shrink-0" />
                      <span>Типы процедур (223-ФЗ, 44-ФЗ, коммерческие)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Icon name="ChevronRight" size={16} className="mt-0.5 flex-shrink-0" />
                      <span>Инструменты аналитики и отчетности</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Icon name="ChevronRight" size={16} className="mt-0.5 flex-shrink-0" />
                      <span>Интеграция с внешними системами</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section id="technical" className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold mb-8 text-center">Технические метрики</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="border-border">
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon name="Gauge" size={24} className="text-primary" />
                    </div>
                    <div>
                      <CardTitle>Производительность системы</CardTitle>
                      <CardDescription className="mt-2">
                        <div className="space-y-2 mt-3">
                          <div className="flex justify-between items-center">
                            <span className="text-sm">Uptime (доступность)</span>
                            <span className="font-semibold text-primary">≥ 99.5%</span>
                          </div>
                          <div className="flex justify-between items-center">
                            <span className="text-sm">Скорость загрузки страниц</span>
                            <span className="font-semibold text-primary">{"<"} 3 сек</span>
                          </div>
                          <div className="flex justify-between items-center">
                            <span className="text-sm">Пропускная способность</span>
                            <span className="font-semibold text-primary">1000+ одновременных пользователей</span>
                          </div>
                        </div>
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
              </Card>

              <Card className="border-border">
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon name="Smartphone" size={24} className="text-primary" />
                    </div>
                    <div>
                      <CardTitle>Удобство интерфейса</CardTitle>
                      <CardDescription className="mt-2">
                        <ul className="space-y-2 mt-3 text-sm">
                          <li className="flex items-start gap-2">
                            <Icon name="Check" size={16} className="mt-0.5 text-primary flex-shrink-0" />
                            <span>Адаптивный дизайн (мобильные устройства)</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <Icon name="Check" size={16} className="mt-0.5 text-primary flex-shrink-0" />
                            <span>Интуитивная навигация</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <Icon name="Check" size={16} className="mt-0.5 text-primary flex-shrink-0" />
                            <span>Поиск и фильтрация процедур</span>
                          </li>
                        </ul>
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
              </Card>

              <Card className="border-border">
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon name="Link" size={24} className="text-primary" />
                    </div>
                    <div>
                      <CardTitle>Интеграционные возможности</CardTitle>
                      <CardDescription className="mt-2">
                        <ul className="space-y-2 mt-3 text-sm">
                          <li className="flex items-start gap-2">
                            <Icon name="Check" size={16} className="mt-0.5 text-primary flex-shrink-0" />
                            <span>API для интеграции с 1С, SAP</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <Icon name="Check" size={16} className="mt-0.5 text-primary flex-shrink-0" />
                            <span>Экспорт данных (Excel, XML, JSON)</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <Icon name="Check" size={16} className="mt-0.5 text-primary flex-shrink-0" />
                            <span>Подключение к ЕИС, ЕРУЗ</span>
                          </li>
                        </ul>
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
              </Card>

              <Card className="border-border">
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon name="Database" size={24} className="text-primary" />
                    </div>
                    <div>
                      <CardTitle>Хранение и архивация</CardTitle>
                      <CardDescription className="mt-2">
                        <ul className="space-y-2 mt-3 text-sm">
                          <li className="flex items-start gap-2">
                            <Icon name="Check" size={16} className="mt-0.5 text-primary flex-shrink-0" />
                            <span>Срок хранения документов (минимум 3 года)</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <Icon name="Check" size={16} className="mt-0.5 text-primary flex-shrink-0" />
                            <span>Резервное копирование</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <Icon name="Check" size={16} className="mt-0.5 text-primary flex-shrink-0" />
                            <span>Доступ к архиву в любое время</span>
                          </li>
                        </ul>
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section id="financial" className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold mb-8 text-center">Финансовые метрики</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="border-border hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <Icon name="DollarSign" size={24} className="text-primary" />
                  </div>
                  <CardTitle>Стоимость участия</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-sm">
                    <li className="flex justify-between items-center">
                      <span className="text-muted-foreground">Регистрация</span>
                      <span className="font-semibold">0 - 50 000 ₽</span>
                    </li>
                    <li className="flex justify-between items-center">
                      <span className="text-muted-foreground">Годовое обслуживание</span>
                      <span className="font-semibold">10 000 - 300 000 ₽</span>
                    </li>
                    <li className="flex justify-between items-center">
                      <span className="text-muted-foreground">Комиссия за сделку</span>
                      <span className="font-semibold">0.1% - 3%</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-border hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <Icon name="Calculator" size={24} className="text-primary" />
                  </div>
                  <CardTitle>Модель ценообразования</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <Icon name="ChevronRight" size={16} className="mt-0.5 flex-shrink-0" />
                      <span>Фиксированная абонплата</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Icon name="ChevronRight" size={16} className="mt-0.5 flex-shrink-0" />
                      <span>Комиссия от оборота</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Icon name="ChevronRight" size={16} className="mt-0.5 flex-shrink-0" />
                      <span>Оплата за процедуру</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Icon name="ChevronRight" size={16} className="mt-0.5 flex-shrink-0" />
                      <span>Смешанная модель</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-border hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <Icon name="PiggyBank" size={24} className="text-primary" />
                  </div>
                  <CardTitle>Экономия затрат</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <Icon name="ChevronRight" size={16} className="mt-0.5 flex-shrink-0" />
                      <span>Снижение цены закупки (до 30%)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Icon name="ChevronRight" size={16} className="mt-0.5 flex-shrink-0" />
                      <span>Сокращение времени процедур</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Icon name="ChevronRight" size={16} className="mt-0.5 flex-shrink-0" />
                      <span>Автоматизация процессов</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Icon name="ChevronRight" size={16} className="mt-0.5 flex-shrink-0" />
                      <span>ROI за первый год</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section id="comparison" className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold mb-8 text-center">Сравнительный анализ</h2>
            <Card className="border-border">
              <CardContent className="p-6">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b">
                        <th className="text-left py-3 px-4 font-semibold">Критерий</th>
                        <th className="text-center py-3 px-4 font-semibold">Вес (%)</th>
                        <th className="text-center py-3 px-4 font-semibold">Описание</th>
                      </tr>
                    </thead>
                    <tbody className="text-sm">
                      <tr className="border-b hover:bg-muted/50">
                        <td className="py-3 px-4">Охват аудитории</td>
                        <td className="text-center py-3 px-4">20%</td>
                        <td className="py-3 px-4 text-muted-foreground">Количество активных участников и география</td>
                      </tr>
                      <tr className="border-b hover:bg-muted/50">
                        <td className="py-3 px-4">Функциональность</td>
                        <td className="text-center py-3 px-4">18%</td>
                        <td className="py-3 px-4 text-muted-foreground">Доступные типы торгов и инструменты</td>
                      </tr>
                      <tr className="border-b hover:bg-muted/50">
                        <td className="py-3 px-4">Стоимость</td>
                        <td className="text-center py-3 px-4">15%</td>
                        <td className="py-3 px-4 text-muted-foreground">Общая стоимость владения (TCO)</td>
                      </tr>
                      <tr className="border-b hover:bg-muted/50">
                        <td className="py-3 px-4">Безопасность</td>
                        <td className="text-center py-3 px-4">15%</td>
                        <td className="py-3 px-4 text-muted-foreground">Защита данных и соответствие стандартам</td>
                      </tr>
                      <tr className="border-b hover:bg-muted/50">
                        <td className="py-3 px-4">Техническая поддержка</td>
                        <td className="text-center py-3 px-4">12%</td>
                        <td className="py-3 px-4 text-muted-foreground">Качество и доступность поддержки</td>
                      </tr>
                      <tr className="border-b hover:bg-muted/50">
                        <td className="py-3 px-4">Репутация</td>
                        <td className="text-center py-3 px-4">10%</td>
                        <td className="py-3 px-4 text-muted-foreground">Время на рынке, отзывы, рейтинги</td>
                      </tr>
                      <tr className="border-b hover:bg-muted/50">
                        <td className="py-3 px-4">Интеграция</td>
                        <td className="text-center py-3 px-4">10%</td>
                        <td className="py-3 px-4 text-muted-foreground">Возможности интеграции с внешними системами</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>

            <div className="mt-8 grid md:grid-cols-2 gap-6">
              <Card className="border-border">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <Icon name="CheckCircle" size={24} className="text-green-500" />
                    <CardTitle>Преимущества лидеров рынка</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <Icon name="Plus" size={16} className="mt-0.5 text-green-500 flex-shrink-0" />
                      <span>Широкая база поставщиков и покупателей</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Icon name="Plus" size={16} className="mt-0.5 text-green-500 flex-shrink-0" />
                      <span>Стабильная техническая платформа</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Icon name="Plus" size={16} className="mt-0.5 text-green-500 flex-shrink-0" />
                      <span>Развитая экосистема услуг</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Icon name="Plus" size={16} className="mt-0.5 text-green-500 flex-shrink-0" />
                      <span>Регулярные обновления и улучшения</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-border">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <Icon name="AlertCircle" size={24} className="text-orange-500" />
                    <CardTitle>На что обратить внимание</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <Icon name="AlertTriangle" size={16} className="mt-0.5 text-orange-500 flex-shrink-0" />
                      <span>Скрытые комиссии и дополнительные платежи</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Icon name="AlertTriangle" size={16} className="mt-0.5 text-orange-500 flex-shrink-0" />
                      <span>Ограничения в функционале базовых тарифов</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Icon name="AlertTriangle" size={16} className="mt-0.5 text-orange-500 flex-shrink-0" />
                      <span>Сложность миграции данных при переходе</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Icon name="AlertTriangle" size={16} className="mt-0.5 text-orange-500 flex-shrink-0" />
                      <span>Зависимость от одной площадки</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-8 border-t bg-muted/10">
        <div className="container mx-auto px-4">
          <div className="text-center text-sm text-muted-foreground">
            <p>© 2024 ЭТП Метрики. Аналитический портал для выбора электронных торговых площадок</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
