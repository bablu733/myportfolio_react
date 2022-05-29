import { Container } from "./styles";
import githubIcon from "../../assets/github-icon.svg";
import externalLinkIcon from "../../assets/external-link-icon.svg";
import ScrollAnimation from "react-animate-on-scroll";
import profileImage from "../../assets/profile-image.jpg";
import bablu1 from "../../assets/bablu1.jpg";
import bablu2 from "../../assets/bablu2.jpg";


export function Portfolio(){
  return(
    <Container id="portfolio">
      <h2>menu portfólio</h2>
      <div className="projects">
      
       <ScrollAnimation animateIn="flipInX">
        <div className="project">
          <header>
          <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b " stroke-width="1" stroke-linecap="round" stroke-linejoin="round" ><title>Folder</title><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
          <div className="project-links">
            <a href="https://github.com/bablu733" target="_blank" rel="noreferrer">
              <img src={githubIcon} alt="GitHub" />
            </a>
          </div>
          </header>
          <div className="body">
            <h3>FCallendar</h3>
            <p>i'm everyday java coding practice on hackerrank <a href="https://www.hackerrank.com/bablubhaidablu"> Hackerrank Profile</a>. My Every day practice going very well you can see profile details.
            </p>
          </div>
          <footer>
            <ul className="tech-list">
              <li>Node</li>
              <li>JAVA</li>
              <li>MySql</li>
              <li>React</li>
            </ul>
          </footer>
        </div>
      </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
            <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b " stroke-width="1" stroke-linecap="round" stroke-linejoin="round" ><title>Folder</title><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
            <div className="project-links">
              <a href="https://github.com/" target="_blank" rel="bablukumar">
                <img src={githubIcon} alt="GitHub" />
              </a>
              <a href="https://github.com/bablu733" target="_blank" rel="noreferrer">
                <img src={externalLinkIcon} alt="Visitar site" />
              </a>
            </div>
            </header>
            <div className="body">
              <h3>Github Searcher</h3>
              <p> This is my github account there are many repository i uploading in my account every month new project.
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>React</li>
                <li>Typescript</li>
                <li>Styled Components</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
            <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b " stroke-width="1" stroke-linecap="round" stroke-linejoin="round" ><title>Folder</title><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
            <div className="project-links">
              <a href="https://www.javatpoint.com/java-tutorial" target="_blank" rel="bablukumar">
                <img src={githubIcon} alt="GitHub" />
              </a>
              <a href="https://www.youtube.com/c/DurgaSoftwareSolutions/playlists" target="_blank" rel="noreferrer">
                <img src={externalLinkIcon} alt="Visitar site" />
              </a>
            </div>
            </header>
            <div className="body">
              <h3>JAVA MATERIAL</h3>
              <p> Java is most popular programing language it is fully 100% given security that's why we need java.
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>React</li>
                <li>Typescript</li>
                <li>Styled Components</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>                       

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
            <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b " stroke-width="1" stroke-linecap="round" stroke-linejoin="round" ><title>Folder</title><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
            <div className="project-links">
              <a href="https://www.javatpoint.com/what-is-database" target="_blank" rel="bablukumar">
                <img src={githubIcon} alt="GitHub" />
              </a>
              <a href="https://www.youtube.com/c/GateSmashers/playlists" target="_blank" rel="noreferrer">
                <img src={externalLinkIcon} alt="Visitar site" />
              </a>
            </div>
            </header>
            <div className="body">
              <h3>DATABASE MATERIAL</h3>
              <p> In computing, a database is an organized collection of data stored and accessed electronically. Small databases can be stored on a file system, while large databases are hosted on computer clusters or cloud storage.
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>React</li>
                <li>Typescript</li>
                <li>Styled Components</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>  

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
            <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b " stroke-width="1" stroke-linecap="round" stroke-linejoin="round" ><title>Folder</title><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
            <div className="Database link">
              <a href="https://www.javatpoint.com/what-is-database" target="_blank" rel="bablukumar">
                <img src={githubIcon} alt="GitHub" />
              </a>
              <a href="https://www.youtube.com/c/GateSmashers/playlists" target="_blank" rel="noreferrer">
                <img src={externalLinkIcon} alt="Visitar site" />
              </a>
            </div>
            </header>
            <div className="body">
              <h3>SPRING BOOT MATERIAL</h3>
              <p> it is a fream-work of java fully 100% given security and Auto biring condition also including here.
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>React</li>
                <li>Typescript</li>
                <li>Styled Components</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>  

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
            <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b " stroke-width="1" stroke-linecap="round" stroke-linejoin="round" ><title>Folder</title><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
            <div className="React link">
              <a href="https://www.javatpoint.com/reactjs-tutorial" target="_blank" rel="bablukumar">
                <img src={githubIcon} alt="GitHub" />
              </a>
              <a href="https://www.youtube.com/c/Codevolution" target="_blank" rel="noreferrer">
                <img src={externalLinkIcon} alt="Visitar site" />
              </a>
            </div>
            </header>
            <div className="body">
              <h3>REACT-JS MATERIAL</h3>
              <p> React is a free and open-source front-end JavaScript library for building user interfaces based on UI components. It is maintained by Meta and a community of individual developers and companies.
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>React</li>
                <li>Typescript</li>
                <li>Styled Components</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>  

        <header>
      <ScrollAnimation animateIn="flipInx">
          <div className="image">
          <img src={profileImage} alt="profile-image.jpg"/>
          </div> 
      </ScrollAnimation>
      </header>

      <header>
      <ScrollAnimation animateIn="flipInx">
          <div className="image">
          <img src={bablu1} alt="bablu1.jpg"/>
          </div> 
      </ScrollAnimation>
      </header>

      <header>
      <ScrollAnimation animateIn="flipInx">
          <div className="image">
          <img src={bablu2} alt="bablu2.jpg"/>
          </div> 
      </ScrollAnimation>
      </header>

      </div>
    </Container>
  );
}