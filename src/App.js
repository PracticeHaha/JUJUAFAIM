import pic1 from './photos/1.jpg';
import pic2 from './photos/2.jpg';
import pic3 from './photos/3.jpg';
import './App.css';
import { useState } from 'react';

function App() {
  const [click, setClick] = useState(0); 
  const [password, setPassword] = useState("");
  const [isCodeValid, setIsCodeValid] = useState(false);
  const images = [pic1, pic2, pic3];
  const acceptedPassword = "jujuafaim";

  const clicked = (operator) => {
    if (click < (images.length - 1) && operator === "n") {
    setClick(click + 1);
    }else if (click > 0 && operator === "b") {
    setClick(click - 1);
    }
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsCodeValid(password.toLowerCase() === acceptedPassword? true : false)
  }
  
  return (
    <div className="App">
      <header className="App-header">
        { isCodeValid? 
        <div
        className="images">
          <img className="image" src={images[click]} alt={"HAHAHAH"} />
          {click < (images.length - 1)? <button className="button-right" onClick={e => clicked("n")}>></button> : null}
          {click > 0? <button className="button-left" onClick={e => clicked("b")}>{"<"}</button> : null}
          
        </div>
        :
        <form method="post" onSubmit={handleSubmit}>
          <label>
            <p>Mot de passe</p>
            <input name="myInput" className="Input-text-original"     defaultValue={password} onChange={e => setPassword(e.target.value)}/>
          </label>
          <button type="submit" className="submit-btn">Go</button>
        </form>
        
        }
      </header>
    </div>
  );
}

export default App;
