import { useEffect } from 'react';
import { ThemeProvider } from 'styled-components';
import './App.css';
import Content from './components/Content';
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
import GlobalStyles from './utils/GlobalStyles';
import theme from './utils/theme';
import LoginForm from './components/Login/LoginForm';
import ForgotPassword from './components/Login/ForgotPassword';
import { useAppSelector } from './redux/store';
import SignUpForm from './components/Login/SignUpForm';

function App() {
  const themeRedux = useAppSelector(state=>state.themeReducer)
 
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Router>
          <Routes>
            <Route path='/sign-in' element={<LoginForm />} />
            <Route path='/sign-up' element={<SignUpForm/>} />
            <Route path='/forgot-password' element={<ForgotPassword/>} />
            <Route path='*' element={<Content />} />
          </Routes>
        </Router>
        <GlobalStyles themeState={themeRedux} />
      </ThemeProvider>
    </div>
  );
}

export default App;
