import React from 'react';
import '../discover/Gender.css';

const genderArray = [
  { id: 28, name: 'Ação' },
  { id: 12, name: 'Aventura' },
  { id: 16, name: 'Animação' },
  { id: 35, name: 'Comédia' },
  { id: 80, name: 'Crime' },
  { id: 99, name: 'Documentário' },
  { id: 18, name: 'Drama' },
  { id: 10751, name: 'Família' },
  { id: 14, name: 'Fantasia' },
  { id: 36, name: 'História' },
  { id: 27, name: 'Terror' },
  { id: 10402, name: 'Música' },
  { id: 9648, name: 'Mistério' },
  { id: 10749, name: 'Romance' },
  { id: 878, name: 'Ficção científica' },
  { id: 10770, name: 'Cinema TV' },
  { id: 53, name: 'Thriller' },
  { id: 10752, name: 'Guerra' },
  { id: 37, name: 'Faroeste' },
];
const Gender = ({ genders, setGenders, check, setCheck }) => {
  const addAtive = e => {
    if (check) {
      genders = genders.filter(item => item === e.target.value);
      setGenders([genders]);
    }
    if (!genders.includes(e.target.value)) {
      setGenders([...genders, e.target.value]);
      e.target.classList.add('active_gender_search');
    } else {
      console.log('oi');
      genders = genders.filter(item => item !== e.target.value);
      setGenders(genders);
      e.target.classList.remove('active_gender_search');
    }
    setCheck(false);
  };

  return (
    <div className='border'>
      Gênero:
      <ul className='grid grid-cols-2 p-2 gap-1 items-center'>
        {genderArray.map(item => (
          <li
            key={item.name}
            onClick={addAtive}
            value={item.id}
            className='border hover:bg-sky-700 hover:text-white rounded text-sm opacity-75'
          >
            {item.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Gender;
