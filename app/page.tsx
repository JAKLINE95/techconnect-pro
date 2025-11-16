'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

// Данные примеров товаров
const sampleProducts = [
  {
    id: 1,
    name: "CRM система",
    description: "Автоматизация продаж и ведение клиентской базы",
    category: "Маркетинг и продажи",
    price: "от 1 490 ₽/мес",
    rating: 4.8,
    reviews: 124,
    isPopular: true
  },
  {
    id: 2,
    name: "Облачная бухгалтерия",
    description: "Онлайн-бухгалтерия для малого бизнеса и ИП",
    category: "Финансы и бухгалтерия", 
    price: "от 990 ₽/мес",
    rating: 4.6,
    reviews: 89,
    isPopular: true
  },
  {
    id: 3,
    name: "HR-платформа",
    description: "Подбор, онбординг и управление персоналом",
    category: "Управление персоналом (HR)",
    price: "от 2 990 ₽/мес",
    rating: 4.7,
    reviews: 67
  },
  {
    id: 4, 
    name: "Конструктор лендингов",
    description: "Создание посадочных страниц без программистов",
    category: "Маркетинг и продажи",
    price: "от 1 990 ₽/мес",
    rating: 4.5,
    reviews: 203
  },
  {
    id: 5,
    name: "Система видеоконференций",
    description: "HD-видеозвонки и совместная работа",
    category: "Коммуникации и коллаборация",
    price: "от 1 290 ₽/мес", 
    rating: 4.9,
    reviews: 156,
    isPopular: true
  },
  {
    id: 6,
    name: "BI-аналитика",
    description: "Дашборды и отчетность для бизнеса",
    category: "Аналитика и BI",
    price: "от 3 490 ₽/мес",
    rating: 4.4,
    reviews: 45
  }
];

export default function Home() {
  const router = useRouter();
  const [isFiltersOpen, setIsFiltersOpen] = useState(false);
  const [isAIChatOpen, setIsAIChatOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [selectedFilters, setSelectedFilters] = useState({
    industry: '',
    pricing: '', 
    cost: '',
    rating: ''
  });

  const handleFilterChange = (filterType: string, value: string) => {
    setSelectedFilters(prev => ({
      ...prev,
      [filterType]: value
    }));
  };

  const applyFilters = () => {
    console.log('Применены фильтры:', selectedFilters);
    setIsFiltersOpen(false);
  };

  // Функция для открытия AI-чата
  const openAIChat = (product: any, e: React.MouseEvent) => {
    e.stopPropagation(); // Останавливаем всплытие события
    setSelectedProduct(product);
    setIsAIChatOpen(true);
  };

  // Функция для перехода на страницу товара
  const goToProductPage = (productId: number) => {
    router.push(`/product/${productId}`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Шапка */}
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold text-gray-800">TechConnect Pro</div>
          <nav className="flex space-x-6">
            <a href="#" className="text-gray-600 hover:text-blue-600">Главная</a>
            <a href="#" className="text-gray-600 hover:text-blue-600">Поиск</a>
            <a href="#" className="text-gray-600 hover:text-blue-600">Профиль</a>
            <a href="#" className="text-gray-600 hover:text-blue-600">Корзина</a>
          </nav>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="text-center max-w-4xl mx-auto mb-12">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Открой для себя B2B решения
          </h1>
          <p className="text-xl text-gray-600 mb-12">
            Оптимизируйте процесс поиска и покупки решений. Свяжитесь с проверенными поставщиками, 
            сравните характеристики и быстрее принимайте обоснованные решения.
          </p>
          
          {/* ГЛОБАЛЬНЫЙ ПОИСК + КНОПКА ФИЛЬТРОВ */}
          <div className="bg-white rounded-lg shadow-lg p-2 mb-8">
            <div className="flex gap-2">
              <input 
                type="text" 
                placeholder="Найдите решения: Контур, 1С, Битрикс, CRM..." 
                className="flex-1 px-4 py-3 border-none focus:outline-none text-lg"
              />
              <button className="bg-blue-600 text-white px-8 py-3 rounded-md hover:bg-blue-700 transition-colors font-semibold">
                Найти
              </button>
              <button 
                onClick={() => setIsFiltersOpen(true)}
                className="bg-gray-100 text-gray-700 px-4 py-3 rounded-md hover:bg-gray-200 transition-colors border border-gray-300 font-medium flex items-center gap-2"
              >
                <div className="flex flex-col gap-1">
                  <div className="w-4 h-0.5 bg-gray-600"></div>
                  <div className="w-4 h-0.5 bg-gray-600"></div>
                  <div className="w-4 h-0.5 bg-gray-600"></div>
                </div>
                <span>Фильтры</span>
              </button>
            </div>
          </div>
        </div>

        {/* УТП - ПРЕИМУЩЕСТВА (ДОБАВЛЕНО ПЕРЕД КАРТОЧКАМИ) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white rounded-xl p-8 shadow-lg text-center">
            <h3 className="font-semibold text-gray-900 mb-3 text-lg">AI-консультант для каждого продукта</h3>
            <p className="text-gray-600">Получите персональную консультацию по любому решению</p>
          </div>
          <div className="bg-white rounded-xl p-8 shadow-lg text-center">
            <h3 className="font-semibold text-gray-900 mb-3 text-lg">Сравнение решений</h3>
            <p className="text-gray-600">Параллельное сравнение для принятия обоснованных решений</p>
          </div>
          <div className="bg-white rounded-xl p-8 shadow-lg text-center">
            <h3 className="font-semibold text-gray-900 mb-3 text-lg">Проверенные поставщики</h3>
            <p className="text-gray-600">Только качественные B2B-решения с реальными отзывами</p>
          </div>
        </div>

        {/* СЕТКА КАРТОЧЕК ТОВАРОВ */}
        <div className="mb-16">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900">
              Популярные решения
            </h2>
            <span className="text-gray-600">{sampleProducts.length} продуктов</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sampleProducts.map((product) => (
              <div 
                key={product.id} 
                onClick={() => goToProductPage(product.id)}
                className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow p-6 cursor-pointer hover:border-2 hover:border-blue-200"
              >
                {/* Фиксированное место для бейджа */}
                <div className="h-6 mb-3">
                  {product.isPopular && (
                    <div className="inline-block bg-yellow-100 text-yellow-800 text-xs font-semibold px-2 py-1 rounded-full">
                      Популярное
                    </div>
                  )}
                </div>
                
                {/* Категория */}
                <div className="text-sm text-blue-600 font-medium mb-2">
                  {product.category}
                </div>
                
                {/* Название */}
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {product.name}
                </h3>
                
                {/* Описание */}
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                  {product.description}
                </p>
                
                {/* Рейтинг */}
                <div className="flex items-center gap-2 mb-4">
                  <div className="flex text-yellow-400">
                    {'★'.repeat(5)}
                  </div>
                  <span className="text-sm text-gray-600">
                    {product.rating} ({product.reviews} отзывов)
                  </span>
                </div>
                
                {/* Цена и кнопка */}
                <div className="flex items-center justify-between">
                  <div className="text-lg font-bold text-gray-900">
                    {product.price}
                  </div>
                  <button 
                    onClick={(e) => openAIChat(product, e)}
                    className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-blue-700 transition-colors"
                  >
                    AI консультация
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* МОДАЛЬНОЕ ОКНО ФИЛЬТРОВ */}
        {isFiltersOpen && (
          <div className="fixed inset-0 bg-gray-600 bg-opacity-30 flex items-start justify-center z-50 pt-20">
            <div className="bg-white rounded-xl p-6 w-full max-w-4xl mx-4 shadow-2xl">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-xl font-semibold text-gray-900">Фильтры поиска</h3>
                <button 
                  onClick={() => setIsFiltersOpen(false)}
                  className="text-gray-500 hover:text-gray-700 text-2xl bg-gray-100 w-8 h-8 rounded-full flex items-center justify-center"
                >
                  ×
                </button>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                {/* Отрасль */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Отрасль</label>
                  <select 
                    value={selectedFilters.industry}
                    onChange={(e) => handleFilterChange('industry', e.target.value)}
                    className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 text-sm"
                  >
                    <option value="">Все отрасли</option>
                    <option value="marketing">Маркетинг</option>
                    <option value="finance">Финансы</option>
                    <option value="hr">HR</option>
                    <option value="development">Разработка</option>
                    <option value="communications">Коммуникации</option>
                    <option value="business">Бизнес-процессы</option>
                    <option value="analytics">Аналитика</option>
                    <option value="support">Поддержка</option>
                    <option value="security">Безопасность</option>
                  </select>
                </div>

                {/* Ценовая модель */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Оплата</label>
                  <select 
                    value={selectedFilters.pricing}
                    onChange={(e) => handleFilterChange('pricing', e.target.value)}
                    className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 text-sm"
                  >
                    <option value="">Любая</option>
                    <option value="subscription">Подписка</option>
                    <option value="one-time">Разовая</option>
                    <option value="free">Бесплатно</option>
                    <option value="usage">По использованию</option>
                  </select>
                </div>

                {/* Стоимость */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Бюджет</label>
                  <select 
                    value={selectedFilters.cost}
                    onChange={(e) => handleFilterChange('cost', e.target.value)}
                    className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 text-sm"
                  >
                    <option value="">Любой</option>
                    <option value="0-1000">до 1 000 ₽</option>
                    <option value="1000-5000">1-5 тыс. ₽</option>
                    <option value="5000-20000">5-20 тыс. ₽</option>
                    <option value="20000+">от 20 тыс. ₽</option>
                  </select>
                </div>

                {/* Рейтинг */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Рейтинг</label>
                  <select 
                    value={selectedFilters.rating}
                    onChange={(e) => handleFilterChange('rating', e.target.value)}
                    className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 text-sm"
                  >
                    <option value="">Любой</option>
                    <option value="5">★ 4.5+</option>
                    <option value="4">★ 4.0+</option>
                    <option value="3">★ 3.5+</option>
                  </select>
                </div>

                {/* Срок внедрения */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Внедрение</label>
                  <select className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 text-sm">
                    <option value="">Любой срок</option>
                    <option value="1week">до 1 недели</option>
                    <option value="1month">до 1 месяца</option>
                    <option value="3months">1-3 месяца</option>
                    <option value="6months">3-6 месяцев</option>
                  </select>
                </div>

                {/* Поддержка */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Поддержка</label>
                  <select className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 text-sm">
                    <option value="">Любая</option>
                    <option value="24-7">24/7</option>
                    <option value="business">В рабочие часы</option>
                    <option value="email">Email</option>
                    <option value="chat">Онлайн-чат</option>
                  </select>
                </div>

                {/* Интеграции */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Интеграции</label>
                  <select className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 text-sm">
                    <option value="">Любые</option>
                    <option value="api">API</option>
                    <option value="1c">1С</option>
                    <option value="bitrix">Битрикс24</option>
                    <option value="crm">CRM системы</option>
                  </select>
                </div>

                {/* Триал */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Тестовый период</label>
                  <select className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 text-sm">
                    <option value="">Не важно</option>
                    <option value="yes">Есть триал</option>
                    <option value="demo">Демо доступ</option>
                    <option value="no">Без триала</option>
                  </select>
                </div>
              </div>

              <div className="flex gap-3">
                <button 
                  onClick={applyFilters}
                  className="flex-1 bg-blue-600 text-white py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                >
                  Показать результаты
                </button>
                <button 
                  onClick={() => {
                    setSelectedFilters({ industry: '', pricing: '', cost: '', rating: '' });
                    setIsFiltersOpen(false);
                  }}
                  className="flex-1 bg-gray-100 text-gray-700 py-2 rounded-lg font-semibold hover:bg-gray-200 transition-colors border border-gray-300"
                >
                  Сбросить всё
                </button>
              </div>
            </div>
          </div>
        )}

        {/* ПОПАП AI-ЧАТА */}
        {isAIChatOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-xl w-full max-w-2xl max-h-[80vh] overflow-hidden">
              <div className="flex justify-between items-center p-6 border-b">
                <h3 className="text-xl font-semibold text-gray-900">
                  AI консультация по {selectedProduct?.name}
                </h3>
                <button 
                  onClick={() => setIsAIChatOpen(false)}
                  className="text-gray-500 hover:text-gray-700 text-2xl"
                >
                  ×
                </button>
              </div>
              
              <div className="p-6">
                <div className="bg-gray-50 rounded-lg p-4 mb-4">
                  <p className="text-gray-700">
                    Здравствуйте! Я ваш AI-консультант по продукту "{selectedProduct?.name}". 
                    Задайте мне любой вопрос о функциях, стоимости или внедрении.
                  </p>
                </div>
                
                <div className="space-y-4 mb-6">
                  <div className="flex justify-end">
                    <div className="bg-blue-100 rounded-lg p-3 max-w-[80%]">
                      <p>Какие основные функции есть в этом решении?</p>
                    </div>
                  </div>
                  
                  <div className="flex justify-start">
                    <div className="bg-gray-100 rounded-lg p-3 max-w-[80%]">
                      <p>Продукт "{selectedProduct?.name}" включает автоматизацию процессов, аналитику и интеграцию с популярными системами. Конкретный набор функций зависит от выбранного тарифа.</p>
                    </div>
                  </div>
                </div>
                
                <div className="flex gap-2">
                  <input 
                    type="text" 
                    placeholder="Задайте ваш вопрос..."
                    className="flex-1 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                  />
                  <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                    Отправить
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        <div className="bg-white rounded-2xl shadow-xl p-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Готовы преобразовать свои B2B-закупки?
          </h2>
          <p className="text-gray-600 mb-6">
            Присоединяйтесь к тысячам компаний, оптимизирующих процесс поиска и приобретения решений
          </p>
          <button className="bg-green-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-green-700 transition-colors">
            Начните сегодня
          </button>
        </div>
      </main>
    </div>
  );
}