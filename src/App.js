// react router
import { Route, Routes, Link } from 'react-router-dom';
import Main from '@templates/Main';
import Confirm from '@templates/Admin/Confirm';
import Reservation from '@templates/Reservation';
import '@styles/main.css';

import theme from '@styles/theme';
import { ThemeProvider } from 'styled-components';
import { ModalProvider } from '@modules/Modal/ModalContext';
import Button from '@atoms/Button';

function App() {
  return (
    <div className="App">
      <ModalProvider>
        <ThemeProvider theme={theme}>
          <Link to="/">
            <Button $outline>홈</Button>
          </Link>
          <Link to="/admin/confirm">
            <Button color="red">관리자 화면</Button>
          </Link>

          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/reservation" element={<Reservation />} />
            <Route path="/admin/confirm" element={<Confirm />} />
          </Routes>
        </ThemeProvider>
      </ModalProvider>
    </div>
  );
}

export default App;
