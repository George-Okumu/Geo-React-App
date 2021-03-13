import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';



// ReactDOM.render(
//   // <React.StrictMode>
//   //   <App />
//   // </React.StrictMode>,
//   showedName,
//   document.getElementById('root')
// );

// functional component
function Item(props){
return <div className="item">
  <b>Name: {props.name}</b> <br></br>
  <div>
  <b>Price: {props.price}</b>
  </div>
</div>

}


function PriceOfItems(){
  return <div>
    <Item name = "Apple" price = " 560 @ 2kg"/>
    <Item name = "Ovacado" price = " 900 @ 2kg"/>
    <Item name = "Oranges" price = " 500 @ 2kg"/>

  </div>

}

ReactDOM.render(
  <PriceOfItems></PriceOfItems>,
  document.getElementById('root')
);



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals


