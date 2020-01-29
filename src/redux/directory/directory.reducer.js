const initialState = [
  {
    title: 'hats',
    subtitle: 'hats',
    imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
    id: 1,
    linkUrl: 'shop/hats'
  },
  {
    title: 'jackets',
    subtitle: 'jackets',
    imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
    id: 2,
    linkUrl: 'shop/jackets'
  },
  {
    title: 'sneakers',
    subtitle: 'sneakers',
    imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
    id: 3,
    linkUrl: 'shop/sneakers'
  },
  {
    title: 'men',
    subtitle: 'men',
    imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
    id: 4,
    linkUrl: 'shop/men'
  },
  {
    title: 'women',
    subtitle: 'women',
    imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
    id: 5,
    linkUrl: 'shop/womens'
  }
];

export default (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
