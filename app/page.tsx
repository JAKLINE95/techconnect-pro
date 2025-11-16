export default function Home() {
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

      {/* Герой-блок */}
      <main className="container mx-auto px-4 py-16">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Открой для себя B2B решения
          </h1>
          <p className="text-xl text-gray-600 mb-12">
            Оптимизируйте процесс поиска и покупки решений. Свяжитесь с проверенными поставщиками, 
            сравните характеристики и быстрее принимайте обоснованные решения.
          </p>
          
          {/* Строка поиска */}
          <div className="bg-white rounded-lg shadow-lg p-2 mb-16">
            <div className="flex gap-2">
              <input 
                type="text" 
                placeholder="Найдите SaaS, CRM, ERP решения..." 
                className="flex-1 px-4 py-3 border-none focus:outline-none"
              />
              <button className="bg-blue-600 text-white px-8 py-3 rounded-md hover:bg-blue-700 transition-colors">
                Найти
              </button>
            </div>
          </div>

          {/* Призыв к действию */}
          <div className="bg-white rounded-2xl shadow-xl p-8">
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
        </div>
      </main>
    </div>
  );
}