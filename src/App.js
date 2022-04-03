import './App.css';
// import axios from 'axios'
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import {Routes, Route, Link } from 'react-router-dom';
import Upload from './pages/Upload'
import ViewPDF from './pages/ViewPDF'
import {DataProvider} from './context/DataContext'
import OpenFileError from './pages/handlers/OpenFileError'
import PageNotFound from './pages/handlers/PageNotFound'
import DownLoadPanel from './pages/handlers/DownLoadPanel'
import ModalDownload from './pages/handlers/ModalDownload'


// import pdfjsLib from "pdfjs-dist/build/pdf";
// import pdfjsWorker from "pdfjs-dist/build/pdf.worker.entry";



function App() {

  // const canvasRef = useRef();
  // pdfjsLib.GlobalWorkerOptions.workerSrc = pdfjsWorker;

  const themeLight = createMuiTheme({
    palette: {
      background: {
        default: "#e4f0e2"
      }
    }
  });
  
  const themeDark = createMuiTheme({
    palette: {
      background: {
        default: "white"
      },
      text: {
        primary: "black"
      }
    },
    typography:{
      fontFamily:[
        'Lato',
        'Poppins'
      ]
    }
  });


  return (
    <DataProvider>
      <MuiThemeProvider theme={themeDark}>
        <CssBaseline />
          <Routes>
            <Route exact path='/' element={< Upload />}></Route>
            <Route exact path='/PageNotFound' element={<PageNotFound />}></Route>
            <Route exact path='/view' element={< ViewPDF />}></Route>
            <Route path="*" element={<PageNotFound />} ></Route>
          </Routes>
      </MuiThemeProvider>
    </DataProvider>
  );
}

export default App;
