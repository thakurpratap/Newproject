import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { UserProvider } from './components/UserContext';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>

//   <UserProvider>
//   <App />
// </UserProvider>,

<QueryClientProvider client={queryClient}>
<UserProvider>
  <App />
</UserProvider>
</QueryClientProvider>
);

reportWebVitals();
