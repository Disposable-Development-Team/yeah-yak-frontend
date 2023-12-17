import { useContext } from 'react';
import { ThemeContext } from 'styled-components';
import Select from 'react-select';

const customStyles = theme => ({
  control: (provided, state) => ({
    ...provided,
    borderColor: state.isFocused ? theme.colors.deepgreen : theme.colors.deepgreen,
    boxShadow: state.isFocused ? `0 0 10px ${theme.colors.deepgreen}` : `none`,
    '&:hover': {
      borderColor: state.isFocused ? theme.colors.deepgreen : theme.colors.green,
    },
  }),
  option: (provided, state) => ({
    ...provided,
    background: state.isFocused ? theme.colors.deepgreen : 'white', // 옵션에 hover 효과 추가
    color: state.isFocused ? 'white' : 'black',
    '&:hover': {
      background: theme.colors.deepgreen,
      color: 'white',
    },
  }),
});

function SelectList(props) {
  const theme = useContext(ThemeContext);

  return <Select styles={customStyles(theme)} {...props} />;
}

export default SelectList;
