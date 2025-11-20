'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

// Данные товара (в реальном приложении получались бы по ID)
const productData = {
  id: 1,
  name: "CRM система ProSales",
  description: "Автоматизация продаж и ведение клиентской базы", 
  price: "от 1 490 ₽/мес",
  trial: "14 дней бесплатно"
};

export default function DemoRequestPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    company: '',
    name: '',
    phone: '',
    email: '',
    employees: '',
    message: ''
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    if (errors[name as keyof typeof errors]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors: { [key: string]: string } = {};

    if (!formData.company.trim()) {
      newErrors.company = 'Название компании обязательно';
    }

    if (!formData.name.trim()) {
      newErrors.name = 'Имя обязательно';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Телефон обязателен';
    } else if (!/^[\+]?[78][-(]?\d{3}\)?-?\d{3}-?\d{2}-?\d{2}$/.test(formData.phone)) {
      newErrors.phone = 'Введите корректный номер телефона';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email обязателен';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Введите корректный email';
    }

    if (!formData.employees) {
      newErrors.employees = 'Укажите количество сотрудников';
    }

    return newErrors;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors = validateForm();
    
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setIsSubmitting(true);

    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      const demoRequests = JSON.parse(localStorage.getItem('demoRequests') || '[]');
      demoRequests.push({
        ...formData,
        productId: productData.id,
        product: productData.name,
        date: new Date().toISOString(),
        status: 'new'
      });
      localStorage.setItem('demoRequests', JSON.stringify(demoRequests));

      alert('Заявка на демо-доступ успешно отправлена!');
      router.push(`/product/${productData.id}`);
    } catch (error) {
      alert('Произошла ошибка при отправке формы');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold text-gray-800">TechConnect Pro</div>
          <nav className="flex space-x-6">
            <a href="/" className="text-gray-600 hover:text-blue-600">Главная</a>
            <a href="#" className="text-gray-600 hover:text-blue-600">Поиск</a>
            <a href="#" className="text-gray-600 hover:text-blue-600">Профиль</a>
            <a href="#" className="text-gray-600 hover:text-blue-600">Корзина</a>
          </nav>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <nav className="flex items-center space-x-2 text-sm text-gray-600 mb-8">
          <a href="/" className="hover:text-blue-600">Главная</a>
          <span>›</span>
          <a href={`/product/${productData.id}`} className="hover:text-blue-600">{productData.name}</a>
          <span>›</span>
          <span className="text-gray-900">Запрос демо-доступа</span>
        </nav>

        <div className="max-w-2xl mx-auto">
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h1 className="text-2xl font-bold text-gray-900 mb-2">
              Запрос демо-доступа
            </h1>
            <p className="text-gray-600 mb-8">
              {productData.name} • {productData.trial}
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Компания *
                  </label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                      errors.company ? 'border-red-500' : 'border-gray-300'
                    }`}
                    placeholder="Название вашей компании"
                  />
                  {errors.company && (
                    <p className="mt-1 text-sm text-red-600">{errors.company}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Количество сотрудников *
                  </label>
                  <select
                    name="employees"
                    value={formData.employees}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                      errors.employees ? 'border-red-500' : 'border-gray-300'
                    }`}
                  >
                    <option value="">Выберите количество</option>
                    <option value="1-10">1-10 сотрудников</option>
                    <option value="11-50">11-50 сотрудников</option>
                    <option value="51-200">51-200 сотрудников</option>
                    <option value="201-500">201-500 сотрудников</option>
                    <option value="500+">Более 500 сотрудников</option>
                  </select>
                  {errors.employees && (
                    <p className="mt-1 text-sm text-red-600">{errors.employees}</p>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Ваше имя *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                      errors.name ? 'border-red-500' : 'border-gray-300'
                    }`}
                    placeholder="Иван Иванов"
                  />
                  {errors.name && (
                    <p className="mt-1 text-sm text-red-600">{errors.name}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Телефон *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                      errors.phone ? 'border-red-500' : 'border-gray-300'
                    }`}
                    placeholder="+7 (999) 999-99-99"
                  />
                  {errors.phone && (
                    <p className="mt-1 text-sm text-red-600">{errors.phone}</p>
                  )}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                    errors.email ? 'border-red-500' : 'border-gray-300'
                  }`}
                  placeholder="ivan@company.ru"
                />
                {errors.email && (
                  <p className="mt-1 text-sm text-red-600">{errors.email}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Дополнительная информация
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Расскажите о ваших задачах или особых требованиях..."
                />
              </div>

              <div className="flex items-center justify-between pt-6 border-t">
                <button
                  type="button"
                  onClick={() => router.push(`/product/${productData.id}`)}
                  className="px-6 py-3 text-gray-700 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors font-medium"
                >
                  Назад к товару
                </button>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="px-8 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Отправка...' : 'Отправить запрос'}
                </button>
              </div>
            </form>
          </div>
        </div>
      </main>
    </div>
  );
}