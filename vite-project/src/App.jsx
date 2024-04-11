
import Prompt from './Prompt';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Initial from './Initial';

function App() {

  return (

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Initial />}></Route>
        <Route path="/play" element={<Prompt />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
