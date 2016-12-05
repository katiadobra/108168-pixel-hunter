export default {
  time: 0,
  lifes: [0, 1, 1],
  type: 1,
  questions: [
    {
      question: 'Угадайте для каждого изображения фото или рисунок?',
      type: 1,
      answers: [
        {
          image: 'http://placehold.it/468x458',
          variants: [
            {
              type: 'photo',
              value: 'Фото'
            },
            {
              type: 'paint',
              value: 'Рисунок'
            }
          ]
        },
        {
          image: 'http://placehold.it/468x458',
          variants: [
            {
              type: 'photo',
              value: 'Фото'
            },
            {
              type: 'paint',
              value: 'Рисунок'
            }
          ]
        }
      ]
    }
  ],
  stats: [
    'wrong',
    'slow',
    'fast',
    'correct',
    'unknown',
    'unknown',
    'unknown',
    'unknown',
    'unknown',
    'unknown'
  ]
};
