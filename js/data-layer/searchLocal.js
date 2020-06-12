const data = [
  {
    id: 'test1',
    name: 'Kurkute Farms',
    description:
      'From the house of Kurkutwadi, seeped from the fresh waters of Kurkute dam. Best fruits and veggies in the whole wide world',
    country: 'India',
    industry: 'Agro'
  },
  {
    id: 'test2',
    name: 'MooTech',
    description: 'Cows develop the best tech in the industry',
    country: 'MooLand',
    industry: 'Software'
  },
  {
    id: 'test3',
    name: 'Alipapa',
    description: 'Bulk marketplace',
    country: 'China',
    industry: 'Ecom'
  }
];

export const search = searchText =>
  new Promise(res => {
    setTimeout(() => res(data.filter(ob => ob.name.includes(searchText))), 1000) 
  });
