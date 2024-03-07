import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './app/Layout/Header';
import { store } from './Redux/store';
import { Provider } from 'react-redux';
import Counter from './app/component/Counter';
import DestinationList from './app/component/DestinationList';
import DestinationFact from './app/component/DestinationFact';
import ResetApp from './app/component/ResetApp';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
    <Header/>
    <ResetApp/>
    <Counter/>
    <div className='p-4 border text-center'>
    <h4 className='text-success'>Destination List</h4> 
    <DestinationList/>
    <DestinationFact/>
    </div>
 
   
    </Provider>
    
  </React.StrictMode>
);


