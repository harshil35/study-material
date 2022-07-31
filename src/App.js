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
          <Route path="/mail" element={<Mail/>}/>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/EM" element={<EM/>}/>
          <Route path="/EM/PastPapers" element={<ShowLinks/>}/>
          <Route path="/EM/Notes" element={<ShowLinks/>}/>
          <Route path="/EM/Books" element={<ShowLinks/>}/>

          <Route path="/M1" element={<EM/>}/>
          <Route path="/M1/PastPapers" element={<ShowLinks/>}/>
          <Route path="/M1/Notes" element={<ShowLinks/>}/>
          <Route path="/M1/Books" element={<ShowLinks/>}/>

          <Route path="/EG" element={<EM/>}/>
          <Route path="/EG/PastPapers" element={<ShowLinks/>}/>
          <Route path="/EG/Notes" element={<ShowLinks/>}/>
          <Route path="/EG/Books" element={<ShowLinks/>}/>
       
          <Route path="/CHEM" element={<EM/>}/>
          <Route path="/CHEM/PastPapers" element={<ShowLinks/>}/>
          <Route path="/CHEM/Notes" element={<ShowLinks/>}/>
          <Route path="/CHEM/Books" element={<ShowLinks/>}/>

          <Route path="/BEE" element={<EM/>}/>
          <Route path="/BEE/PastPapers" element={<ShowLinks/>}/>
          <Route path="/BEE/Notes" element={<ShowLinks/>}/>
          <Route path="/BEE/Books" element={<ShowLinks/>}/>

          <Route path="/BME" element={<EM/>}/>
          <Route path="/BME/PastPapers" element={<ShowLinks/>}/>
          <Route path="/BME/Notes" element={<ShowLinks/>}/>
          <Route path="/BME/Books" element={<ShowLinks/>}/>

          <Route path="/PHY" element={<EM/>}/>
          <Route path="/PHY/PastPapers" element={<ShowLinks/>}/>
          <Route path="/PHY/Notes" element={<ShowLinks/>}/>
          <Route path="/PHY/Books" element={<ShowLinks/>}/>

          <Route path="/BLE" element={<EM/>}/>
          <Route path="/BLE/PastPapers" element={<ShowLinks/>}/>
          <Route path="/BLE/Notes" element={<ShowLinks/>}/>
          <Route path="/BLE/Books" element={<ShowLinks/>}/>

          <Route path="/ENG" element={<EM/>}/>
          <Route path="/ENG/PastPapers" element={<ShowLinks/>}/>
          <Route path="/ENG/Notes" element={<ShowLinks/>}/>
          <Route path="/ENG/Books" element={<ShowLinks/>}/>

          <Route path="/ESE" element={<EM/>}/>
          <Route path="/ESE/PastPapers" element={<ShowLinks/>}/>
          <Route path="/ESE/Notes" element={<ShowLinks/>}/>
          <Route path="/ESE/Books" element={<ShowLinks/>}/>

          <Route path="/PSCP" element={<EM/>}/>
          <Route path="/PSCP/PastPapers" element={<ShowLinks/>}/>
          <Route path="/PSCP/Notes" element={<ShowLinks/>}/>
          <Route path="/PSCP/Books" element={<ShowLinks/>}/>

          <Route path="/M2" element={<EM/>}/>
          <Route path="/M2/PastPapers" element={<ShowLinks/>}/>
          <Route path="/M2/Notes" element={<ShowLinks/>}/>
          <Route path="/M2/Books" element={<ShowLinks/>}/>

          <Route path="/DLD" element={<EM/>}/>
          <Route path="/DLD/PastPapers" element={<ShowLinks/>}/>
          <Route path="/DLD/Notes" element={<ShowLinks/>}/>
          <Route path="/DLD/Books" element={<ShowLinks/>}/>

          <Route path="/DM" element={<EM/>}/>
          <Route path="/DM/PastPapers" element={<ShowLinks/>}/>
          <Route path="/DM/Notes" element={<ShowLinks/>}/>
          <Route path="/DM/Books" element={<ShowLinks/>}/>

          <Route path="/DSA" element={<EM/>}/>
          <Route path="/DSA/PastPapers" element={<ShowLinks/>}/>
          <Route path="/DSA/Notes" element={<ShowLinks/>}/>
          <Route path="/DSA/Books" element={<ShowLinks/>}/>

          <Route path="/NA" element={<EM/>}/>
          <Route path="/NA/PastPapers" element={<ShowLinks/>}/>
          <Route path="/NA/Notes" element={<ShowLinks/>}/>
          <Route path="/NA/Books" element={<ShowLinks/>}/>

          <Route path="/PSQT" element={<EM/>}/>
          <Route path="/PSQT/PastPapers" element={<ShowLinks/>}/>
          <Route path="/PSQT/Notes" element={<ShowLinks/>}/>
          <Route path="/PSQT/Books" element={<ShowLinks/>}/>

          <Route path="/UTP" element={<EM/>}/>
          <Route path="/UTP/PastPapers" element={<ShowLinks/>}/>
          <Route path="/UTP/Notes" element={<ShowLinks/>}/>
          <Route path="/UTP/Books" element={<ShowLinks/>}/>

          <Route path="/DBMS" element={<EM/>}/>
          <Route path="/DBMS/PastPapers" element={<ShowLinks/>}/>
          <Route path="/DBMS/Notes" element={<ShowLinks/>}/>
          <Route path="/DBMS/Books" element={<ShowLinks/>}/>

          <Route path="/MOT" element={<EM/>}/>
          <Route path="/MOT/PastPapers" element={<ShowLinks/>}/>
          <Route path="/MOT/Notes" element={<ShowLinks/>}/>
          <Route path="/MOT/Books" element={<ShowLinks/>}/>

          <Route path="/ICA" element={<EM/>}/>
          <Route path="/ICA/PastPapers" element={<ShowLinks/>}/>
          <Route path="/ICA/Notes" element={<ShowLinks/>}/>
          <Route path="/ICA/Books" element={<ShowLinks/>}/>

          <Route path="/OOP" element={<EM/>}/>
          <Route path="/OOP/PastPapers" element={<ShowLinks/>}/>
          <Route path="/OOP/Notes" element={<ShowLinks/>}/>
          <Route path="/OOP/Books" element={<ShowLinks/>}/>

          <Route path="/CA" element={<EM/>}/>
          <Route path="/CA/PastPapers" element={<ShowLinks/>}/>
          <Route path="/CA/Notes" element={<ShowLinks/>}/>
          <Route path="/CA/Books" element={<ShowLinks/>}/>

          <Route path="/DAA" element={<EM/>}/>
          <Route path="/DAA/PastPapers" element={<ShowLinks/>}/>
          <Route path="/DAA/Notes" element={<ShowLinks/>}/>
          <Route path="/DAA/Books" element={<ShowLinks/>}/>

      </Routes>
    </HashRouter>
  );
}

export default App;
