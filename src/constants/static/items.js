const moment = require('moment');
moment.locale('ru');

export const items = [
  {
    id: 1,
    image: {
      url: 'https://image.flaticon.com/icons/png/512/1/1560.png',
      width: '35px',
      height: '35px',
      alt: 'image for blog item 1'
    },
    text: 'Test text 1',
    metaData: {
      author: {
        name: 'User 1',
        country: 'ru'
      },
      dateCreate: moment('2013-02-01').format('LL'),
      dateEdit: moment('2013-02-02').format('LL'),
      likes: 1
    }
  },
  {
    id: 2,
    image: {
      url: 'https://image.flaticon.com/icons/png/512/1/1561.png',
      width: '35px',
      height: '35px',
      alt: 'image for blog item 2'
    },
    text: 'Test text 2',
    metaData: {
      author: {
        name: 'User 2',
        country: 'us'
      },
      dateCreate: moment('2014-03-02').format('LL'),
      dateEdit: moment('2014-03-03').format('LL'),
      likes: 2
    }
  },
  {
    id: 3,
    image: {
      url: 'https://image.flaticon.com/icons/png/512/1/1562.png',
      width: '35px',
      height: '35px',
      alt: 'image for blog item 3'
    },
    text: 'Test text 3',
    metaData: {
      author: {
        name: 'User 3',
        country: 'france'
      },
      dateCreate: moment('2015-04-03').format('LL'),
      dateEdit: moment('2015-04-04').format('LL'),
      likes: 2
    }
  },
  {}
];