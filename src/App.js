import Hero from './components/Hero';
import Navbar from './components/Navbar';
import {ThemeProvider,createTheme} from '@mui/material/styles'
import { Container } from '@mui/material';
const theme=createTheme({
  palette:{
    primary:{
      main:'#864131'}
  }
})
function App() {
  return (
    <ThemeProvider theme={theme}>
     <Navbar/>
     <Container><Hero/></Container>
     
    </ThemeProvider>
  );
}

export default App;
