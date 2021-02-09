import React, { Component, Fragment } from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Footer from "./components/Footer/Footer";
import Account_Over from "./components/Account/Account_Over";
import Account_Over2 from "./components/Account/Account_Over2";
import Account_Over_Fait from "./components/Account/Account_Over_Fait";
import Account_Over_Fait_Det from "./components/Account/Account_Over_Fait_Det";
import Api from "./components/Api/Api";
import Api_Mgmt from "./components/Api/Api_Mgmt";
import Buy_History from "./components/Buy/Buy_History";
import Careers from "./components/Careers/Careers";
import Dashboard from "./components/Dashboard/Dashboard";
import Documents from "./components/Dashboard/Documents";
import Faq from "./components/Faq/Faq";
import Invite from "./components/Invite/Invite";
import Margin_Acc from "./components/Margin/Margin_Acc";
import Market from "./components/Margin/Market";
import New_Wallet from "./components/New/New_Wallet";
import Payment from "./components/Pay/Payment";
import Pool_Acc from "./components/Pay/Pool_Acc";
import Preferences from "./components/Pay/Preferences";
import Press from "./components/Pay/Press";
import Saving_Acc from "./components/Saving/Saving_Acc";
import Security from "./components/Saving/Security";
import Send_Req from "./components/Saving/Send_Req";
import Setting from "./components/Saving/Setting";
import Sport_Widthraw from "./components/Saving/Sport_Widthraw";
import Spot_Acc from "./components/Saving/Spot_Acc";
import Support from "./components/Saving/Support";
import Task_Center from "./components/Task/Task_Center";
import Transaction_History from "./components/Task/Transaction_History";
import Zendesk from "./components/Zendesk/Zendesk";

function App() {
  return (
    <Fragment>
      <Header />
      <Switch>
          <Route exact path="/" component={Home} />
          <Route  path="/support" component={Support} />
          <Route  path="/faq" component={Faq} />
          <Route  path="/market" component={Market} />
          <Route  path="/api" component={Api} />
          <Route  path="/zendesk" component={Zendesk} />
          <Route exact path="/account_over" component={Account_Over} />
          <Route exact path="/spot_acc" component={Spot_Acc} />
          <Route exact path="/saving_acc" component={Saving_Acc} />
          <Route exact path="/transaction_history" component={Transaction_History} />
          <Route exact path="/pool_acc" component={Pool_Acc} />
          <Route exact path="/account_over2" component={Account_Over2} />
          <Route exact path="/account_over_fait" component={Account_Over_Fait} />
          <Route exact path="/account_over_fait_det" component={Account_Over_Fait_Det} />
          <Route exact path="/api_mgmt" component={Api_Mgmt} />
          <Route  path="/buy_history" component={Buy_History} />
          <Route  path="/careers" component={Careers} />
          <Route  path="/dashboard" component={Dashboard} />
          <Route exact path="/documents" component={Documents} />
          <Route  path="/invite" component={Invite} />
          <Route  path="/margin_acc" component={Margin_Acc} />
          <Route  path="/new_wallet" component={New_Wallet} />
          <Route  path="/payment" component={Payment} />
          <Route exact path="/preferences" component={Preferences} />
          <Route  path="/press" component={Press} />
          <Route  path="/security" component={Security} />
          <Route  path="/send_req" component={Send_Req} />
          <Route  path="/setting" component={Setting} />
          <Route exact path="/sport_widthraw" component={Sport_Widthraw} />
          <Route  path="/task_center" component={Task_Center} />
      </Switch>
      {/* <Zendesk /> */}
      <Footer />
    </Fragment>
  );
}

export default App;
