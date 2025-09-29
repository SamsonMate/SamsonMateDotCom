import './App.css'
import WireframeBG from './components/WireframeIcosahedron'
import SkillsTable from './components/SkillsTable'
import { languages, frontEndSkills, backEndSkills, networkingSkills, interpersonalSkills } from './utils/skills'

function App() {
  return (
    <div className="flex-container">
      <section className="nav">
        <h1>Welcome.</h1>
        <ul>
          <li><a className="navButton" href="#">&lt;&gt; Home</a></li>
          <li><a className="navButton" href="#skills">&lt;&gt; Skills</a></li>
          <li><a className="navButton" href="#projects">&lt;&gt; Projects</a></li>
          <li><a className="navButton" href="#contact">&lt;&gt; Contact Me</a></li>
        </ul>
        <WireframeBG className="bg-canvas" />
      </section>

      <section className="content">
        <h1>About me</h1>
        <p>
          Hey, my name is Samson Mate, born in Newfoundland in 2005.
          I am a Computer Science student at SMU and I'm hoping to get
          into IT and Cybersecurity after I get my degree. I also enjoy
          game development which I intend to (eventually) put here.
          This website is meant to be a personal portfolio/website,
          and a place to centralize all my work.
        </p>

        <h1 id="skills">Skills (CURRENTLY JUST AN AI TEMPLATE)</h1>
        <SkillsTable 
        languages={languages}
        frontEndSkills={frontEndSkills}
        backEndSkills={backEndSkills}
        networkingSkills={networkingSkills}
        interpersonalSkills={interpersonalSkills}
        ></SkillsTable>

        <h1 id="projects">Projects</h1>
        <p>
          I don't have any public projects right now, but I do have some
          private ones. If you want to see them, please contact me.
        </p>

        <h1 id="contact">Contact Me</h1> {/* Thinking I'll make a cool thing for these */}
        <ul>
          <li><a href="https://github.com/SamsonMate">GitHub</a></li>
          <li>samsonpmate@gmail.com -&gt; <a href="mailto:samsonpmate%40gmail.com?subject=&body=Hello,\n\n">Click me to send an Email!</a></li>
        </ul>
      </section>
    </div>
  )
}

export default App
