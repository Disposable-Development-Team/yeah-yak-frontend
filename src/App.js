import theme from '@styles/theme';
import { ThemeProvider } from 'styled-components';
import Button from '@atoms/Button';

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <header className="App-header"></header>
        <div>
          <Button>버튼1</Button>
          <Button color="green">버튼2</Button>
          <Button color="yellow">버튼3</Button>
          <Button color="red">버튼4</Button>
          <Button outline>버튼5</Button>
        </div>
      </ThemeProvider>
    </div>
  );
}

export default App;
