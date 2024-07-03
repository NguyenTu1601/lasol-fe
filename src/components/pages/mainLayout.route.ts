export default function init(routes: any[]) {
  const defaultRoute = {
    path: '/',
    component: () => import('@/components/layouts/mainLayout/MainLayout.vue'),
    children: [
      {
        path: '/',
        name: 'home',
        component: () => import('@/components/pages/home/HomePage.vue'),
      },
      {
        path: '/products',
        name: 'products',
        component: () => import('@/components/pages/products/AllProducts.vue'),
      },
      {
        path: '/product/:id',
        name: 'product',
        component: () => import('@/components/pages/product/ProductDetail.vue'),
      }
    ],
  };

  routes.push(defaultRoute);
}
