import logo from './images/logo.svg'; 
// import Sitelogo from '../public/logo192.png'; 
import './App.css';
import { Routes,Route,Link, BrowserRouter } from 'react-router-dom';
// import { globalStyles } from './Components/constants';
import {HomePage} from './Pages/HomePage';
import {Apple} from './Pages/Apple';
import {NotFound} from './Pages/NotFound';
import {ThemeProvider} from '@emotion/react';
import {theme} from './styles';
const App=() => {
  return(
    <>
    <ThemeProvider theme={theme}>
      {/* <Button>font-size: 1rem</Button> */}
    <img src={'${process.env.REACT_APP_HOSTED_URL}logo192.png'} alt="React logo"/>
    {/* <img src={logo} alt="image"/> */}
    <BrowserRouter>
    <div  
      // style={{padding:25, display: 'flex', columnGap:10}}
      className='nav' 
      // style={{...globalStyles.nav,}}
    >
      <Link to='/'
      style={{
        marginLeft: 5,
      }}>
        Home</Link>
      <Link to='/apple'
      style={{ 
        marginLeft: 10,
      }}>
        Apple</Link>
        <Link to='/applet'
      style={{
        marginLeft: 15,
      }}>
        Applet</Link>
    </div>
    <Routes >
      <Route path='/' element={<HomePage/>}></Route>
      <Route path='/apple' element={<Apple/>}></Route>
      <Route path='*' element={<NotFound/>}></Route>
    </Routes>
  </BrowserRouter>
  </ThemeProvider>
  </>
  );
};

export default App;
