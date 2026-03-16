export const FLOWER_TYPERS = [
  {
    name: 'Poppy',
    petalColor: '#e85d4a',
    centerColor: '#1a0a00',
    petalCount: 5,
    petalShape: 'round',
    stemColor: '#4a7c59',
    leafColor: '#3d6b4a',
  },
  {
    name: 'Cosmos',
    petalColor: '#c084b8',
    centerColor: '#f5d060',
    petalCount: 8,
    petalShape: 'narrow',
    stemColor: '#5a8a5a',
    leafColor: '#4a7a4a',
  },
  {
    name: 'Daisy',
    petalColor: '#f5f0dc',
    centerColor: '#e8b84b',
    petalCount: 12,
    petalShape: 'narrow',
    stemColor: '#4d7a55',
    leafColor: '#3d6645',
  },
  {
    name: 'Tulip',
    petalColor: '#d4526e',
    centerColor: '#8a1a3a',
    petalCount: 6,
    petalShape: 'tulip',
    stemColor: '#4a7a4a',
    leafColor: '#5a8a5a',
  },
  {
    name: 'Sunflower',
    petalColor: '#f0b429',
    centerColor: '#4a2800',
    petalCount: 16,
    petalShape: 'narrow',
    stemColor: '#5a8040',
    leafColor: '#4a7035',
  },
  {
    name: 'Anemone',
    petalColor: '#6a8fd8',
    centerColor: '#1a1a4a',
    petalCount: 6,
    petalShape: 'round',
    stemColor: '#507058',
    leafColor: '#406048',
  },
  {
    name: 'Ranunculus',
    petalColor: '#f0a070',
    centerColor: '#c05830',
    petalCount: 10,
    petalShape: 'round',
    stemColor: '#508058',
    leafColor: '#406848',
  },
];

export const getRandomFlower = () => {
  return FLOWER_TYPERS[Math.floor(Math.random() * FLOWER_TYPERS.length)];
};
