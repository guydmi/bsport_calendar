import './App.css';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import Page from './Page';
import { LocalizationProvider } from '@mui/x-date-pickers';

function App() {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Page></Page>
    </LocalizationProvider>
  );
}

export default App;
