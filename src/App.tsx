import { useEffect } from 'react';
import { ThemeProvider } from 'styled-components';
import './App.css';
import Content from './components/Content';
import { changeTheme } from './redux/actions/theme';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useAppDispatch } from './redux/store';
import GlobalStyles from './utils/GlobalStyles';
import theme from './utils/theme';
import theme_two from './theme_two';
import theme_one from './theme_one';

declare const window: any;

function App() {

  const dispatch = useAppDispatch();

  const themeSelector = (themeState: string) => {
    if (themeState !== 'white') {
      dispatch(changeTheme('dark'));
      window.less
        .modifyVars({
          ...theme_two,
        })
        .then(() => {
          console.log('success');
        })
        .catch(() => {
          console.log('fail');
        });
    } else {
      dispatch(changeTheme('white'));
      window.less
        .modifyVars({
          ...theme_one,
        })
        .then(() => {
          console.log('success');
        })
        .catch(() => {
          console.log('fail');
        });
    }
  };

  useEffect(() => {
    const themeState = localStorage.getItem('app_theme');
    themeSelector(themeState || "dark")
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Router>
          <Routes>
            <Route path='/sign-in' element={<div>Sign In</div>} />
            <Route path='/sign-up' element={<div>Sign Up</div>} />
            <Route path='/forgot-password' element={<div>Forgot Password</div>} />
            <Route path='*' element={<Content />} />
          </Routes>
        </Router>
        <GlobalStyles />
      </ThemeProvider>
    </div>
  );
}

export default App;
