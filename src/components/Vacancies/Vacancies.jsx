import React, { useState } from 'react';
import classes from './Vacancies.module.scss';

const Vacancies = () => {
  // Приклад списку вакансій
  const [vacancies, setVacancies] = useState([
    { id: 1, title: 'Solo guitar', category: 'Guitar' },
    { id: 2, title: 'Drum', category: 'Drum' },
    { id: 3, title: 'Hard vocal', category: 'Vocal' },
    // Додайте інші вакансії за необхідності
  ]);

  // Приклад списку категорій
  const categories = ['All', 'Guitar', 'Vocal', 'Drum']; // Додайте більше категорій, якщо потрібно

  // Фільтрація вакансій за категорією
  const [selectedCategory, setSelectedCategory] = useState('All');
  const filteredVacancies = selectedCategory === 'All' ? vacancies : vacancies.filter(vacancy => vacancy.category === selectedCategory);

  return (
    <div className={classes.vacancies}>
      <div className={classes.vacancies__filter}>
        <nav>
          <ul>
            {categories.map(category => (
              <li key={category}>
                <button
                  className={selectedCategory === category ? classes.active : ''}
                  onClick={() => setSelectedCategory(category)}
                >
                  {category}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <div className={classes.vacancies__content}>
        {filteredVacancies.map(vacancy => (
          <div key={vacancy.id} className={classes.vacancy}>
            <h3>{vacancy.title}</h3>
            <p>Category: {vacancy.category}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Vacancies;
