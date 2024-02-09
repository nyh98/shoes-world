import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import LoginContext from './context/LoginContext';
import { QueryClient, QueryClientProvider } from 'react-query';
import WishListData from './pages/wish-list-data/WishListData';
import Home from './pages/home/Home';
import Shop from './pages/shop/Shop';
import ItemList from './pages/shop/item-list/ItemList';
import ItemEditor from './pages/item-editor/ItemEditor';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5,
      refetchOnWindowFocus: false,
    },
  },
});

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/wishList/:uid',
        element: <WishListData />,
      },
      {
        path: '/shoppingList/:uid',
        element: <>장바구니 페이지</>,
      },
      {
        path: '/ItemEditor/:uid',
        element: <ItemEditor />,
      },
      {
        path: '/itemDetail/:itemId',
        element: <>아이템 상세페이지</>,
      },
      {
        path: '/shop',
        element: <Shop />,
        children: [
          {
            path: '/shop/:brandName',
            element: <ItemList />,
          },
        ],
      },
    ],
  },
]);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <LoginContext>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </LoginContext>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
