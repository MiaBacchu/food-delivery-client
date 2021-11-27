import './App.css';
import { BrowserRouter, Route} from "react-router-dom";
import Area from './components/area/Area';
import Banner from './components/banner/Banner';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Review from './components/review/Review';
import Services from './components/services/Services';
import PlaceOrder from './components/placeOrder/PlaceOrder';
import Login from './components/login/Login';
import AuthProvider from './contex-api/AuthProvider';
import PrivateRoute from './private-route/PrivateRoute';
import AddService from './addService/AddService';
import MyOrder from './components/myOrder/MyOrder';
import ManageAllOrder from './components/manageAllOrder/ManageAllOrder';

function App() {
  return (
      <AuthProvider>
        <BrowserRouter>
    <Header></Header>
      <Route exact path='/'>
        <Banner></Banner>
        <Services></Services>
        <Area></Area>
        <Review></Review>
      </Route>
      <Route path='/home'>
        <Banner></Banner>
        <Services></Services>
        <Area></Area>
        <Review></Review>
      </Route>
      <PrivateRoute path="/placeOrder/:serviceId">
        <PlaceOrder></PlaceOrder>
      </PrivateRoute>
      <PrivateRoute path="/myOrder">
        <MyOrder></MyOrder>
      </PrivateRoute>
      <Route path='/manageAllOrder'>
        <ManageAllOrder></ManageAllOrder>
      </Route>
      <Route path='/addService'>
        <AddService></AddService>
      </Route>
      <Route path='/login'>
        <Login></Login>
      </Route>
      <Footer></Footer>
    </BrowserRouter>
      </AuthProvider>
  );
}

export default App;
