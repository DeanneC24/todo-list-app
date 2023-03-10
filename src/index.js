import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'
import TodoApp from './App'
import PageNotFound from './App'
import Main from './App'
import reportWebVitals from './reportWebVitals';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";

const client = new ApolloClient({
  // uri: 'http://127.0.0.1:8000/graphql/', // refactor to remove hardcoding once hosted
  uri: 'http://18.134.150.15:8000/graphql/', // refactor to remove hardcoding once hosted
  cache: new InMemoryCache(),
});
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ApolloProvider client={client}>
    <TodoApp />
  </ApolloProvider>
);


// export default function TodoListApp() {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path="/" element={<Main />}>
//         <Route path= "*" element={<PageNotFound/ >}/>
//         </Route>
//       </Routes>
//     </BrowserRouter>
//   )
// }
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
