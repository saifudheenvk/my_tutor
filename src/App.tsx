import { ThemeProvider } from 'styled-components';
import { ConfigProvider, theme as antd_theme } from 'antd';
import './App.css';
import Content from './components/Content';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import GlobalStyles from './utils/GlobalStyles';
import LoginForm from './components/Login/LoginForm';
import ForgotPassword from './components/Login/ForgotPassword';
import { useAppSelector } from './redux/store';
import SignUpForm from './components/Login/SignUpForm';
import { FC } from 'react';
import theme from './utils/theme';
import { getThemes } from './themes';

interface IProps {

}
const App: FC<IProps> = props => {
  const themeRedux = useAppSelector(state => state.themeReducer)

  return (
    <div className="App">
      <ConfigProvider theme={getThemes(themeRedux)}>
        <ThemeProvider theme={theme}>
          <Router>
            <Routes>
              <Route path='/sign-in' element={<LoginForm />} />
              <Route path='/sign-up' element={<SignUpForm />} />
              <Route path='/forgot-password' element={<ForgotPassword />} />
              <Route path='*' element={<Content />} />
            </Routes>
          </Router>
          <GlobalStyles themeState={themeRedux} />
        </ThemeProvider>
      </ConfigProvider>
    </div>
  );
}

export default App;
