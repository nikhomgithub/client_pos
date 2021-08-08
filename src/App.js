import React from 'react';

import {Route,Switch,Redirect} from 'react-router-dom';

import Bill from './page/bill/Bill'
import Product from './page/product/Product'
import ShopWelcome from './page/shop/ShopWelcome'
import UserWelcome from './page/user/UserWelcome'
import Navbar from './component/navbar/Navbar'
import Transaction from './page/transaction/Transaction'
import Partner from './page/partner/Partner'

import PageComponent from './component/pageComponent/PageComponent';

import {MainContext} from './context/MainContext';
import './App2.css'


/*
import Navbar from './component/navbar/Navbar'

import Home from './page/home/Home'
import ShopWelcome from './page/shop/ShopWelcome'
import UserWelcome from './page/user/UserWelcome'
import BasicData from './page/basicdata/BasicData'
import Partner from './page/partner/Partner'
import Transaction from './page/transaction/Transaction'
import TransactionLog from './page/transaction/TransactionLog'
import Product from './page/product/Product'
import AppNewGroupComponent from './render/renderTree/AppNewGroupComponent';

import AppTree from './render/renderTree/NewGroupComponent';
import mycar from 'mycar'

import {MainContext} from './context/MainContext';

*/


function App() {

console.log('App')

const {basicData,tokenSt,setReloadCheckToken}=React.useContext(MainContext)

const {reloadCheckToken,haveShopToken,haveUserToken,userName}=tokenSt

let temp=window.location.href.split("/")
const home=`${temp[0]}//${temp[2]}/home`

return(
<div className="bgc-lightGray bd-red" 
     style={{width:"100vw",height:"100vh",overflow:"auto"}}>

   <div className="hide-on-print" style={{height:"7%"}}>
      <Navbar/>   
   </div>

   <div className="w-100" style={{height:"93%"}}>
      <Route exact path="/shop" component={haveShopToken?UserWelcome:ShopWelcome}/>
      <Route exact path="/user" component={haveShopToken?UserWelcome:ShopWelcome}/> 
      <Route exact path="/transaction" component={Transaction}/> 
      <Route exact path="/transactionlog" component={Bill}/> 

      <Route exact path="/product" component={Product}/> 
      <Route exact path="/partner" component={Partner}/> 
   </div>
  
   
</div>
)

}
export default App;
/*


*/

