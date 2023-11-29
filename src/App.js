// react router
import { Route, Routes, Link } from 'react-router-dom';
import Calendar from '@templates/Calendar';
import Confirm from '@templates/Admin/Confirm';

import theme from '@styles/theme';
import { ThemeProvider } from 'styled-components';
import Button from '@atoms/Button';

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Link to="/">
          <Button outline>홈</Button>
        </Link>
        <Link to="/reservation">
          <Button>예약하기</Button>
        </Link>
        <Link to="/admin/confirm">
          <Button color="red">관리자 화면</Button>
        </Link>

        <Routes>
          <Route path="/" element={<Calendar />} />
          <Route path="/reservation" element={<Calendar />} />
          <Route path="/admin/confirm" element={<Confirm />} />
        </Routes>
      </ThemeProvider>
    </div>
  );
}

export default App;
