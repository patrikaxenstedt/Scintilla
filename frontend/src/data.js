import img1 from './assets/mountain.jpg';

const allShips = [
  {
    sys: {
      id: '1',
    },
    fields: {
      name: 'Falcon 9',
      slug: 'Falcon 999',
      type: 'single',
      price: 100,
      size: 200,
      capacity: 1,
      pets: false,
      breakfast: false,
      featured: false,
      description: 'Lorem ipsum',
      extras: ['Extras', 'Extras', 'Extras'],
      images: [
        {
          fields: {
            file: {
              url: img1,
            },
          },
        },
        {
          fields: {
            file: {
              url: img1,
            },
          },
        },
        {
          fields: {
            file: {
              url: img1,
            },
          },
        },
        {
          fields: {
            file: {
              url: img1,
            },
          },
        },
      ],
    },
  },
];

export default allShips;
