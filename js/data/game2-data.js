export default {
  time: 0,
  lives: [0, 1, 1],
  questions: [
    {
      task: 'Угадай, фото или рисунок?',
      wide: true,
      answers: [
        {
          image: 'https://placehold.it/705x455',
          imageWidth: 705,
          imageHeight: 455,
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
