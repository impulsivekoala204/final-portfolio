import logo from './logo.svg';
import './App.css';
import pgif from './pivo.gif'
import bgif from './bake.gif'
import tgif from './yc.gif'
import fgif from './storyp.gif'

function App() {
  return (
    <div className="App">
      <div class = "upper">
        <div class = "Text">
          <h2 class = "name">IMPULSIVE KOALA</h2><br/>
          <h1 class = "heading">UX Researcher passionate about <span class = "btext"><i>solving problems</i></span> by understanding interfaces and<br/>examining how <span class = "btext"><i>people interact with them</i></span>.</h1><br/><br/>
          <br/><br/>
          <a class = "check" href = "#this">PROJECTS</a>
        </div>
      </div>
      <div class = "grid">
        <div class = "tile one" id = "this">
          <div class = "image">
            <img src = {pgif} alt = "gif" width="30%" class = "gif none" />
          </div>
          <div class = "txtone">
            <h1 class = "sub-heading">Pivo Technologies Redesign</h1>
            <p class = "sub-one">Africa has experienced robust macroeconomic growth over the last five years and was the second fastest growing region in 2019 with a GDP of $2.6T, a 3.7% increase on 2018. Nigeria makes up $0.5T, 50% of which comes from Small and Medium Enterprises (SME).
            </p>
            <a class = "visit" href = "https://impulsivekoala204.github.io/pivo/main"><b>VISIT PROJECT</b></a><br/><br/>
          </div>
        </div><br/>
        <div class = "tile two">
          <div class = "txttwo">
            <h1 class = "thead">React Bakery App</h1>
            <p class = "sub-one">Africa has experienced robust macroeconomic growth over the last five years and was the second fastest growing region in 2019 with a GDP of $2.6T, a 3.7% increase on 2018. Nigeria makes up $0.5T, 50% of which comes from Small and Medium Enterprises (SMEs).
            </p>
            <a class = "vtwo" href = "https://impulsivekoala204.github.io/devt-react/main"><b>VISIT PROJECT</b></a><br/>
          </div>
          <div class = "image itwo">
            <img src = {bgif} alt = "gif" width="30%" class = "gif none" />
          </div>
        </div>
        <div class = "tilel three">
          <div class = "ithree">
            <img src = {tgif} alt = "gif" width="30%" class = "gif none" />
          </div>
          <h1 class = "tthead">Responsive Redesign</h1>
          <a class = "vthree" href = "https://impulsivekoala204.github.io/Responsive-Redesign/main"><b>VISIT PROJECT</b></a><br/>
        </div>
        <div class = "tilel four">
          <div class = "ifour">
            <img src = {fgif} alt = "gif" width="30%" class = "gif none" />
          </div>
          <h1 class = "fhead">Personas and Storyboarding</h1>
          <a class = "vfour" href="https://impulsivekoala204.github.io/Personas-and-Storyboarding/"><b>VISIT PROJECT</b></a><br/>
        </div>
      </div><br/><br/>
      <div class = "contact">
        <div class = "contact-text">
          <p class = "actxt">I'm always looking for new challenges, don't hesitate to reach out to me at</p>
          <h1 class = "ctxt"><i>contact@impulsive.koala</i> &middot; <i>401-569-2023</i></h1><br/>
        </div>
        <ul>
            <li>LinkedIn</li>
            <li>GitHub</li>
            <li>Behance</li>
          </ul>
      </div>
    </div>
  );
}

export default App;
