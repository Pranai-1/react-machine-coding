
import { Routes,Route,BrowserRouter as Router } from "react-router-dom";
import Folder from "./FolderComponent/Folder";


function App() {
  return (
   <Router>
    <Routes>
      <Route path="/folder" element={<Folder/>}/>
    </Routes>
   </Router>
  );
}

export default App;
