export default {
  time: 0,
  lifes: [0, 1, 1],
  type: 2,
  questions: [
    {
      question: 'Угадай, фото или рисунок?',
      type: 2,
      wide: true,
      answers: [
        {
          image: 'http://placehold.it/705x455',
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
    'wrong',
    'unknown',
    'slow',
    'unknown',
    'fast',
    'unknown'
  ]
};
