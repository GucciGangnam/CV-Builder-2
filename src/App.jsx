import { useState } from 'react';
import "./App.css"

// import components
import { ToolBar } from './Components/ToolBar';
import { InputSection } from './Components/InputSection';


const App = () => {


  return (
    <div className='App'>

      <ToolBar/>
      <InputSection/>

    </div>
  );
};

export default App;