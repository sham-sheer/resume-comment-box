var Resume = React.createClass({
  render: function() {
    return (
      <div className="Body">
        <Header />
        <About />
        <Experience />
        <Projects />
        <Skills />
      </div>
    )
  }
});

var Header = React.createClass({
  render: function() {
    return (
          <ul id="menu" class="shadow">
            <li>
                <a href="#about">About</a>
            </li>
            <li>
                <a href="#experience">Experience</a>
            </li>
            <li>
                <a href="#education">Education</a>
            </li>
            <li>
                <a href="#projects">Projects</a>
            </li>
            <li>
                <a href="#skills">Skills</a>
            </li>
            <li>
                <a href="#contact">Contact</a>
            </li>
        </ul>
      );
  }
});

var About = React.createClass({
  render: function() {
    return (
      <div id="about">
          <div class="container">
              <div class="row">
                  <div class="col-md-4">
                      <h2 class="heading">About Me</h2>
                  </div>
                  <div class="col-md-8">
                      <p>
                          Upcoming NUS graduate offering a strong foundation in software engineering and programming principles across multiple platforms.
                          Experienced in object-oriented programming; front-end and back-end web development; developing, testing and debugging code; designing interfaces;
                          and administering systems. Quickly learn and master new technologies; successful working in both team and self-directed settings.
                      </p>
                  </div>
              </div>
          </div>
      </div>
    );
  }
});

var Experience = React.createClass({
  render: function() {
    return (
      <div id="experience" class="background-alt">
        <h2 class="heading">Experience</h2>
        <div id="experience-timeline">
          <div data-date="December 2017 – Feburary 2018">
            <h3>Fulfilled</h3>
            <h4>Software Engineering Intern</h4>
            <p>
                - Built reusable RESTful APIs in the back-end to handle clients payments
                </p>
            <p>
              - Wrote service classes that communicates with Stripe’s API to ensure successful 3-Secure Card Payments for the clients.
              </p>
            <p>
              - Adopting a test driven development environment, wrote and implemented RSpec Test Suites that allow for fast corrective actions and potential cost savings
              (More details in Appendix A of Resume)
              </p>
              </div>
          </div>
        </div>
    );
  }
});

var Skills = React.createClass({
  render: function() {
    return (
      <div id="skills">
        <h2 class="heading">Skills</h2>
        <ul>
            <li>JavaScript</li>
            <li>Python</li>
            <li>Ruby</li>
            <li>Ruby on Rails</li>
            <li>Node.js</li>
            <li>MeteorJS</li>
            <li>React</li>
            <li>Java</li>
            <li>C</li>
            <li>C++</li>
            <li>Assembly</li>
            <li>MATLAB</li>
            <li>CSS</li>
            <li>HTML</li>
            <li>MongoDB</li>
            <li>MySQL</li>
            <li>SQL</li>
            <li>Less</li>
            <li>Bootstrap</li>
            <li>Verilog</li>
            <li>Arduino</li>
            <li>Circuit design</li>
            <li>Raspberry Pi</li>
            <li>Sketch</li>
            <li>Adobe CS6 Photoshop Suite</li>
        </ul>
    </div>
    )
  }
});

var Projects = React.createClass({
  render: function() {
    return(
      <div id="projects" class="background-alt">
        <h2 class="heading">Projects</h2>
        <div class="container">
            <div class="row">
                <div class="project shadow-large">
                    <div class="project-info">
                        <h3>NUSMeets</h3>
                        <p>
                          Independent Software Development Project (NUSMeets)
                          -  Designed and Implemented a Events database page using MeteorJS and Herokuapp to
                          provide a platform for NUS students to view and interact with other students going NUS events.
                          Used to MongoDB for our Back-end infrastructure.

                        </p>
                        <a href="https://github.com/sham-sheer/NUSMeets" target="_blank">View Project</a>
                    </div>
                </div>

                <div class="project shadow-large">
                    <div class="project-info">
                        <h3>CollegeZone</h3>
                        <p>
                          The main reasons NUS freshmen choose to stay in Residential College  is to forge new friendships
                          and to perform well in their studies. CollegeZone aims to aid in RC residents tasks management
                          and maintaining the friendships forged in RC4.
                        </p>
                        <a href="https://github.com/sham-sheer/main/blob/master/docs/UserGuide.adoc" target="_blank">View Project</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
  }
});

React.render(
  <Resume />,
  document.getElementById('root')
);
