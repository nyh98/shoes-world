import React, { useContext } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import LoginContext from './context/LoginContext';
import { QueryClient, QueryClientProvider } from 'react-query';
import WishListData from './pages/wish-list-data/WishListData';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
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
        element: <>메인 페이지</>,
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
        element: <>아이템 관리 페이지</>,
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
