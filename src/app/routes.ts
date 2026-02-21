export const routes = {
  home: '/',
  pets: '/pets',
  petDetail: (id: number) => `/pets/${id}`,
  news: '/news',
  newsDetail: (id: number) => `/news/${id}`,
};
