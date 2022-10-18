import logo from './logo.svg';
import './App.css';
import './reper.css';
import './style.css';
import unknown from "./assets/unknown.png";

function App() {
const jsToggling = () => {
  const jstoggle = document.getElementById('js-toggle');

  if(jstoggle) {
    jstoggle.addEventListener('click', () => {
      const animations = document.querySelectorAll('[data-animation');
      animations.forEach(animation => {
        const running = animation.style.animationPlayState || 'running';
        animation.style.animationPlayState = running === 'running' ? 'paused' : 'running';
      })
    });
  }
}
  return (
    <div className="App">
     <>
  <p />
  <p> Top 3 Leadership Creeds I used after the summer </p>
  <p>
    {" "}
    1. I will think outside the box. When I was short on ideas or solution I
    began to consider ideas that are unorthodox, this has surprisingly done me
    quite well.
  </p>
  <p>
    {" "}
    2. I will not lie cheat or steal. At first I usually do all 3 as a small
    joke then fess up shortly after. After pretty much integrating this creed
    into my daily life it feels bad to even consider trying to as a joke
    anymore.
  </p>
  <p>
    {" "}
    3. I believe nothing is hard just a lot of work. Personally this is
    painfully true from someone who used to terribly procrastinate. I still do
    to a lesser degree though I'm trying to root it out as much as possible
    before it becomes a detriment.
  </p>
  <img src={unknown} alt="Reper Bottles" />
 
  
          <button onClick={jsToggling} id="js-toggle" className="btn" type="button">Toggle</button>
      

        <div className="circle a-slide" data-animation="slow" style={{bgc: 'tan', animdel: '500ms'}}/>

</>
    </div>
)
}


export default App;