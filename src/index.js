<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <title>Andres Villamizar | Full Stack Developer</title>
  <link rel="stylesheet" href="styles.css">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css">
</head>

<body>
  <!-- Header with navigation, contact button, and social links -->
  <header>
    <div class="container">
      <div class="logo">
        <a href="#top" style="text-decoration: inherit; color: inherit;">
          <h1>Andres Villamizar</h1>
        </a>
      </div>
      <input type="checkbox" id="nav-toggle" class="nav-toggle">
      <nav>
        <ul>
          <li><a href="#about">About Me</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#certifications">Certifications</a></li>
          <li><a href="#contact">Contact</a></li>
          <li><a href="#contact" class="btn contact-btn">Contact Me</a></li>
        </ul>
      </nav>
      <div class="header-social-links">
        <a href="https://www.linkedin.com/in/andres-felipe-villamizar/" target="_blank">
          <i class="fab fa-linkedin"></i>
        </a>
        <a href="https://github.com/Felipevipa" target="_blank">
          <i class="fab fa-github"></i>
        </a>
      </div>
      <label for="nav-toggle" class="nav-toggle-label">
        <span></span>
      </label>
    </div>
  </header>

  <!-- Main content -->
  <main>
    <section id="hero">
      <div class="hero-content">
        <h2>Hi, I'm Andres Villamizar</h2>
        <p>Full Stack Developer |
          <i class="fab fa-python"></i> Python |
          <i class="fab fa-react"></i> React |
          <i class="fab fa-angular"></i> Angular |
          <i class="fab fa-node-js"></i> Typescript |
          <i class="fab fa-microsoft"></i> .NET |
          <i class="fab fa-docker"></i> Docker |
          <i class="fas fa-database"></i> PL/SQL |
          <i class="fab fa-java"></i> Java
        </p>
        <a href="#projects" class="btn">View My Work</a>
      </div>
    </section>

    <!-- About section -->
    <section id="about" class="section">
      <h2>About Me</h2>
      <p>Hi, I'm Andres Villamizar, a full-stack developer passionate about creating web applications using cutting-edge technologies. I have experience in Java, Angular, Python, React, .NET, and more!</p>
    </section>

    <!-- Skills section -->
    <section id="skills" class="section">
      <h2>Skills</h2>
      <ul class="skills-list">
        <li><i class="fab fa-python"></i> Python</li>
        <li><i class="fab fa-react"></i> React</li>
        <li><i class="fab fa-angular"></i> Angular</li>
        <li><i class="fab fa-node-js"></i> Typescript</li>
        <li><i class="fab fa-microsoft"></i> .NET</li>
        <li><i class="fab fa-docker"></i> Docker</li>
        <li><i class="fas fa-database"></i> PL/SQL</li>
        <li><i class="fab fa-java"></i> Java</li>
      </ul>
    </section>

    <!-- Certifications & Awards section -->
    <section id="certifications" class="section">
      <h2>Certifications & Awards</h2>
      <ul class="certifications-list">
        <li>
          <a href="https://www.freecodecamp.org/certification/felipevipa/foundational-c-sharp-with-microsoft" target="_blank" style="text-decoration: inherit; color: inherit;">
            <i class="fas fa-certificate"></i>
            <span>Foundational C# with Microsoft - 2024</span>
          </a>
        </li>
        <li>
          <a href="https://www.freecodecamp.org/certification/felipevipa/front-end-development-libraries" target="_blank" style="text-decoration: inherit; color: inherit;">
            <i class="fas fa-certificate"></i>
            <span>Front End Development Libraries</span>
          </a>
        </li>
        <li>
          <a href="https://www.freecodecamp.org/certification/felipevipa/javascript-algorithms-and-data-structures" target="_blank" style="text-decoration: inherit; color: inherit;">
            <i class="fas fa-certificate"></i>
            <span>Legacy JavaScript Algorithms and Data Structures</span>
          </a>
        </li>
        <li>
          <a href="https://www.credential.net/130eeda4-67cf-4cff-aed2-abffd795ab3c" target="_blank" style="text-decoration: inherit; color: inherit;">
            <i class="fas fa-trophy"></i>
            <span>DS4A / Colombia 6.0: Graduated with Honors</span>
          </a>
        </li>
                <li>
          <a href="https://www.credential.net/7f221754-30f7-4719-ae8b-3a8bf6c1b0ec" target="_blank" style="text-decoration: inherit; color: inherit;">
            <i class="fas fa-certificate"></i>
            <span>Formación en ciencia de datos DS4A / Colombia 6.0</span>
          </a>
        </li>
      </ul>
    </section>

    <!-- Contact section -->
    <section id="contact" class="section">
      <h2>Contact Me</h2>
      <form id="contactForm">
        <label for="name">Name</label>
        <input type="text" id="name" name="name" required>

        <label for="email">Email</label>
        <input type="email" id="email" name="email" required>

        <label for="message">Message</label>
        <textarea id="message" name="message" rows="4" required></textarea>

        <button type="submit" class="btn">Send</button>
      </form>
    </section>
  </main>

  <!-- Footer with social links -->
  <footer>
    <div class="social-links">
      <a href="https://www.linkedin.com/in/andres-felipe-villamizar/" target="_blank" class="social-link">
        <i class="fab fa-linkedin"></i> LinkedIn
      </a>
      <a href="https://github.com/Felipevipa" target="_blank" class="social-link">
        <i class="fab fa-github"></i> GitHub
      </a>
    </div>
    <p>&copy; 2024 Andres Villamizar. All rights reserved.</p>
  </footer>

  <script src="script.js"></script>
</body>

</html>
