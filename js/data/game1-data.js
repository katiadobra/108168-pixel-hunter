export default {
  time: 0,
  lives: [0, 1, 1],
  type: 1,
  questions: [
    {
      task: 'Угадайте для каждого изображения фото или рисунок?',
      type: 1,
      answers: [
        {
          image: 'https://placehold.it/468x458',
          imageWidth: 468,
          imageHeight: 458,
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
          image: 'https://placehold.it/468x458',
          imageWidth: 468,
          imageHeight: 458,
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
