import './App.css';
import {BrowserRouter as Router, Route,Routes} from "react-router-dom";
import HomePage from './pages/home/index';
import EM from './pages/EM/index';
import PastPapers from './aboutsubject/pastpapers';
import Notes from './aboutsubject/notes';
import Books from './aboutsubject/books';
import ShowLinks from './showlinks';
import Mail from './pages/mail/index';
import {HashRouter} from 'react-router-dom';
function App() {
  return (
    <HashRouter>
      <Routes>
          <Route path="/study-material/mail" element={<Mail/>}/>
          <Route path="/study-material" element={<HomePage/>}/>
          <Route path="/study-material/EM" element={<EM/>}/>
          <Route path="/study-material/EM/PastPapers" element={<ShowLinks/>}/>
          <Route path="/study-material/EM/Notes" element={<ShowLinks/>}/>
          <Route path="/study-material/EM/Books" element={<ShowLinks/>}/>

          <Route path="/study-material/M1" element={<EM/>}/>
          <Route path="/study-material/M1/PastPapers" element={<ShowLinks/>}/>
          <Route path="/study-material/M1/Notes" element={<ShowLinks/>}/>
          <Route path="/study-material/M1/Books" element={<ShowLinks/>}/>

          <Route path="/study-material/EG" element={<EM/>}/>
          <Route path="/study-material/EG/PastPapers" element={<ShowLinks/>}/>
          <Route path="/study-material/EG/Notes" element={<ShowLinks/>}/>
          <Route path="/study-material/EG/Books" element={<ShowLinks/>}/>
       
          <Route path="/study-material/CHEM" element={<EM/>}/>
          <Route path="/study-material/CHEM/PastPapers" element={<ShowLinks/>}/>
          <Route path="/study-material/CHEM/Notes" element={<ShowLinks/>}/>
          <Route path="/study-material/CHEM/Books" element={<ShowLinks/>}/>

          <Route path="/BEE" element={<EM/>}/>
          <Route path="/BEE/PastPapers" element={<ShowLinks/>}/>
          <Route path="/BEE/Notes" element={<ShowLinks/>}/>
          <Route path="/BEE/Books" element={<ShowLinks/>}/>

          <Route path="/study-material/study-material/BME" element={<EM/>}/>
          <Route path="/study-material/BME/PastPapers" element={<ShowLinks/>}/>
          <Route path="/study-material/BME/Notes" element={<ShowLinks/>}/>
          <Route path="/study-material/BME/Books" element={<ShowLinks/>}/>

          <Route path="/study-material/PHY" element={<EM/>}/>
          <Route path="/study-material/PHY/PastPapers" element={<ShowLinks/>}/>
          <Route path="/study-material/PHY/Notes" element={<ShowLinks/>}/>
          <Route path="/study-material/PHY/Books" element={<ShowLinks/>}/>

          <Route path="/study-material/BLE" element={<EM/>}/>
          <Route path="/study-material/BLE/PastPapers" element={<ShowLinks/>}/>
          <Route path="/study-material/BLE/Notes" element={<ShowLinks/>}/>
          <Route path="/study-material/BLE/Books" element={<ShowLinks/>}/>

          <Route path="/study-material/ENG" element={<EM/>}/>
          <Route path="/study-material/ENG/PastPapers" element={<ShowLinks/>}/>
          <Route path="/study-material/ENG/Notes" element={<ShowLinks/>}/>
          <Route path="/study-material/ENG/Books" element={<ShowLinks/>}/>

          <Route path="/study-material/ESE" element={<EM/>}/>
          <Route path="/study-material/ESE/PastPapers" element={<ShowLinks/>}/>
          <Route path="/study-material/ESE/Notes" element={<ShowLinks/>}/>
          <Route path="/study-material/ESE/Books" element={<ShowLinks/>}/>

          <Route path="/study-material/PSCP" element={<EM/>}/>
          <Route path="/study-material/PSCP/PastPapers" element={<ShowLinks/>}/>
          <Route path="/study-material/PSCP/Notes" element={<ShowLinks/>}/>
          <Route path="/study-material/PSCP/Books" element={<ShowLinks/>}/>

          <Route path="/study-material/M2" element={<EM/>}/>
          <Route path="/study-material/M2/PastPapers" element={<ShowLinks/>}/>
          <Route path="/study-material/M2/Notes" element={<ShowLinks/>}/>
          <Route path="/study-material/M2/Books" element={<ShowLinks/>}/>

          <Route path="/study-material/DLD" element={<EM/>}/>
          <Route path="/study-material/DLD/PastPapers" element={<ShowLinks/>}/>
          <Route path="/study-material/DLD/Notes" element={<ShowLinks/>}/>
          <Route path="/study-material/DLD/Books" element={<ShowLinks/>}/>

          <Route path="/study-material/DM" element={<EM/>}/>
          <Route path="/study-material/DM/PastPapers" element={<ShowLinks/>}/>
          <Route path="/study-material/DM/Notes" element={<ShowLinks/>}/>
          <Route path="/study-material/DM/Books" element={<ShowLinks/>}/>

          <Route path="/study-material/DSA" element={<EM/>}/>
          <Route path="/study-material/DSA/PastPapers" element={<ShowLinks/>}/>
          <Route path="/study-material/DSA/Notes" element={<ShowLinks/>}/>
          <Route path="/study-material/DSA/Books" element={<ShowLinks/>}/>

          <Route path="/study-material/NA" element={<EM/>}/>
          <Route path="/study-material/NA/PastPapers" element={<ShowLinks/>}/>
          <Route path="/study-material/NA/Notes" element={<ShowLinks/>}/>
          <Route path="/study-material/NA/Books" element={<ShowLinks/>}/>

          <Route path="/study-material/PSQT" element={<EM/>}/>
          <Route path="/study-material/PSQT/PastPapers" element={<ShowLinks/>}/>
          <Route path="/study-material/PSQT/Notes" element={<ShowLinks/>}/>
          <Route path="/study-material/PSQT/Books" element={<ShowLinks/>}/>

          <Route path="/study-material/UTP" element={<EM/>}/>
          <Route path="/study-material/UTP/PastPapers" element={<ShowLinks/>}/>
          <Route path="/study-material/UTP/Notes" element={<ShowLinks/>}/>
          <Route path="/study-material/UTP/Books" element={<ShowLinks/>}/>

          <Route path="/study-material/DBMS" element={<EM/>}/>
          <Route path="/study-material/DBMS/PastPapers" element={<ShowLinks/>}/>
          <Route path="/study-material/DBMS/Notes" element={<ShowLinks/>}/>
          <Route path="/study-material/DBMS/Books" element={<ShowLinks/>}/>

          <Route path="/study-material/MOT" element={<EM/>}/>
          <Route path="/study-material/MOT/PastPapers" element={<ShowLinks/>}/>
          <Route path="/study-material/MOT/Notes" element={<ShowLinks/>}/>
          <Route path="/study-material/MOT/Books" element={<ShowLinks/>}/>

          <Route path="/study-material/ICA" element={<EM/>}/>
          <Route path="/study-material/ICA/PastPapers" element={<ShowLinks/>}/>
          <Route path="/study-material/ICA/Notes" element={<ShowLinks/>}/>
          <Route path="/study-material/ICA/Books" element={<ShowLinks/>}/>

          <Route path="/study-material/OOP" element={<EM/>}/>
          <Route path="/study-material/OOP/PastPapers" element={<ShowLinks/>}/>
          <Route path="/study-material/OOP/Notes" element={<ShowLinks/>}/>
          <Route path="/study-material/OOP/Books" element={<ShowLinks/>}/>

          <Route path="/study-material/CA" element={<EM/>}/>
          <Route path="/study-material/CA/PastPapers" element={<ShowLinks/>}/>
          <Route path="/study-material/CA/Notes" element={<ShowLinks/>}/>
          <Route path="/study-material/CA/Books" element={<ShowLinks/>}/>

          <Route path="/study-material/DAA" element={<EM/>}/>
          <Route path="/study-material/DAA/PastPapers" element={<ShowLinks/>}/>
          <Route path="/study-material/DAA/Notes" element={<ShowLinks/>}/>
          <Route path="/study-material/DAA/Books" element={<ShowLinks/>}/>

      </Routes>
    </HashRouter>
  );
}

export default App;
