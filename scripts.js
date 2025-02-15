// Array of projects
const projects = [
  {
    title: "Sea Level Predictor",
    image: "./projectImages/sea_level_plot.png",
    link: "https://freecodecam-boilerplate-7xy4fyc2vvu.ws-eu111.gitpod.io/",
    alt: "Graph showing sea level rise over time",
    description:
      "A data visualization project analyzing sea level trends using Python and Matplotlib.",
  },
  {
    title: "Time Series Visualizer",
    image: "./projectImages/bar_plot.png",
    link: "https://freecodecam-boilerplate-yjjzplwmhsz.ws-eu111.gitpod.io/",
    alt: "Time series data visualization",
    description:
      "A project visualizing time series data using Python and Seaborn.",
  },
  {
    title: "Medical Data Visualizer",
    image: "./projectImages/catplot.png",
    link: "https://freecodecam-boilerplate-5dqrp8vqgfx.ws-eu111.gitpod.io/",
    alt: "Medical data visualization",
    description:
      "A project analyzing and visualizing medical data using Python and Pandas.",
  },
  {
    title: "Technical Doc Page",
    image: "./projectImages/Screenshot 2024-05-01 052406.png",
    link: "https://tumelobasi.github.io/Technical-Documentation-Page/",
    alt: "Technical documentation page",
    description:
      "A responsive technical documentation page built with HTML and CSS.",
  },
  {
    title: "Survey Form",
    image: "./projectImages/Screenshot 2024-05-01 052406.png",
    link: "https://tumelobasi.github.io/Survey-Form/",
    alt: "Survey form project",
    description: "A responsive survey form built with HTML and CSS.",
  },
];

const skills = [
  "HTML",
  "CSS",
  "JavaScript",
  "Python",
  "Data Visualization",
  "JIRA",
  "Agile Methodologies",
  "Problem Solving",
  "Communication",
  "Leadership",
];

// Array of experiences
const experiences = [
  {
    title: "Software Testing Specialist - iLAB · Internship",
    duration: "Aug 2024 - Present · 6 mos",
    location: "Pretoria, Gauteng, South Africa · Hybrid",
    description:
      "Contributed to delivering high-quality software solutions by conducting comprehensive testing, bug identification, and reporting throughout the development lifecycle.",
    achievements: [
      "Developed and executed detailed test cases, scenarios, and scripts for functional, regression, and exploratory testing.",
      "Identified, documented, and tracked software defects using tools like JIRA, collaborating closely with developers for timely resolutions.",
      "Ensured software met user and business requirements by performing UI, usability, and compatibility testing across different platforms.",
      "Gained hands-on experience with Agile methodologies, participating in sprint planning and daily stand-ups.",
      "Contributed to continuous improvement by providing feedback to enhance product quality and development processes.",
    ],
  },
  {
    title: "Student Assistant - North-West University",
    duration: "Feb 2022 - Dec 2023 · 1 yr 11 mos",
    location: "Vanderbijlpark, Gauteng, South Africa · On-site",
    description:
      "Supported faculty and peers in delivering and understanding complex concepts across mathematics and programming courses, fostering a collaborative and productive learning environment.",
    achievements: [
      "Provided one-on-one and group tutoring sessions, simplifying challenging topics such as calculus, linear algebra, data structures, and algorithms.",
      "Assisted in preparing learning materials, reviewing assignments, and offering feedback to enhance students' comprehension.",
      "Conducted coding demos and supported programming labs in languages like Python and Java, ensuring students grasp problem-solving strategies and code optimization techniques.",
      "Fostered a positive and inclusive learning space to encourage student engagement.",
    ],
  },
  {
    title: "Academic Officer - Faculty Of Natural Science and Agriculture",
    duration: "Sep 2022 - Oct 2023 · 1 yr 2 mos",
    location: "Part-time",
    description:
      "As the Academic Officer and Deputy Chairperson of the Faculty Of Natural Science and Agriculture Academic Student Chapters, I led initiatives to enhance academic excellence and student engagement. I organised workshops, seminars, and mentorship programs, connecting students with faculty and industry experts to bridge theoretical knowledge with practical skills. Collaborating with the Chairperson, I managed chapter operations, planned large-scale events like conferences and hackathons, and led a team of volunteers to ensure smooth execution.",
    achievements: [
      "Increased event participation by 40% through targeted outreach and engagement strategies.",
      "Secured sponsorships to support chapter activities and events.",
      "Implemented a feedback system to improve program quality and student satisfaction.",
      "Strengthened leadership, organizational, and communication skills through hands-on experience.",
      "Fostered a culture of collaboration and accountability within the team.",
    ],
  },
];

// Array of certificates (PDF format)
const certificates = [
  {
    file: "./Certificates/ISTQB/sastqb_Tumelo Maphalla_CTFL.png",
    title: "ISTQB Foundation",
  },
  {
    file: "./Certificates/iLab/Tumelo Maphalla  VB Scripting.pdf",
    title: "VB Scripting for Testers",
  },
  {
    file: "./Certificates/iLab/Tumelo Maphalla JAVA for Testers.pdf",
    title: "JAVA for Testers",
  },
  {
    file: "./Certificates/NWU/Bachelors_Certificate.pdf",
    title: "Computer Science and Statistics",
  },
  {
    file: "./Certificates/NWU/SI_Certificate.pdf",
    title: "Student Assistant",
  },
  {
    file: "./Certificates/NWU/Tutoring_Certificate .pdf",
    title: "Tutoring",
  },
  {
    file: "./Certificates/NWU/Math Olympiad Certificate .pdf",
    title: "Math Olympiad participation",
  },
  {
    file: "./Certificates/Udemy/Better Business Writing Skills Certificate.pdf",
    title: "Better Business Writing Skills",
  },
  {
    file: "./Certificates/Udemy/Business Etiquette 101- Social Skills for Success Certificate.pdf",
    title: "Business Etiquette 101- Social Skills for Success",
  },
  {
    file: "./Certificates/Udemy/Business Skills- Email Etiquette Rules Everyone Should Know.pdf",
    title: "Business Skills- Email Etiquette Rules",
  },
  {
    file: "./Certificates/Udemy/Business Writing & Technical Writing Immersion Certification.pdf",
    title: "Business Writing & Technical Writing Immersion",
  },
  {
    file: "./Certificates/Udemy/Conflict Management with Emotional Intelligence Certificate.pdf",
    title: "Conflict Management with Emotional Intelligence",
  },
  {
    file: "./Certificates/Udemy/Consulting Approach to Problem Solving Certification.pdf",
    title: "Consulting Approach to Problem Solving",
  },
  {
    file: "./Certificates/Udemy/Emotional Intelligence at Work Certificate.pdf",
    title: "Emotional Intelligence at Work",
  },
  {
    file: "./Certificates/Udemy/Fundamentals of Business Analysis Certificate.pdf",
    title: "Fundamentals of Business Analysis",
  },
  {
    file: "./Certificates/Udemy/Jenkins, From Zero To Hero Become a DevOps Jenkins Master Certificate.pdf",
    title: "Jenkins, From Zero To Hero Become a DevOps Jenkins Master",
  },
  {
    file: "./Certificates/Udemy/JIRA Test Management using ZEPHYR for TESTERS Certificate.pdf",
    title: "JIRA Test Management using ZEPHYR for TESTERS",
  },
  {
    file: "./Certificates/Udemy/Learn Risk Analysis, Evaluation & Assessment - from A to Z.pdf",
    title: "Learn Risk Analysis, Evaluation & Assessment",
  },
  {
    file: "./Certificates/Udemy/Mobile Automation Appium Cucumber for Android&iOS + Jenkins Certificate.pdf",
    title: "Mobile Automation Appium Cucumber for Android&iOS + Jenkins",
  },
  {
    file: "./Certificates/Udemy/Performance Testing using LoadRunner Certificate.pdf",
    title: "Performance Testing using LoadRunner",
  },
  {
    file: "./Certificates/Udemy/Soft Skills The Complete Guide to Become a Respected Leader Certificate.pdf",
    title: "Soft Skills The Complete Guide to Become a Respected Leader",
  },
  {
    file: "./Certificates/Udemy/The Agile Samuarai Bootcamp Certificate.pdf",
    title: "The Agile Samuarai Bootcamp",
  },
  {
    file: "./Certificates/Udemy/The Complete JavaScript Course 2024 -From Zero to Expert Certificate.pdf",
    title: "JavaScript Course 2024",
  },
  {
    file: "./Certificates/Udemy/The Complete SQL Bootcamp - Go from Zero to Hero Certificate.pdf",
    title: "The Complete SQL Bootcamp - Go from Zero to Hero",
  },
  {
    file: "./Certificates/Udemy/The Git and Github Bootcamp Certificate.pdf",
    title: "The Git and Github Bootcamp",
  },
];

// Render Projects
function renderProjects() {
  const projectsGrid = document.getElementById("projects-grid");
  projects.forEach((project) => {
    const projectElement = document.createElement("a");
    projectElement.href = project.link;
    projectElement.target = "_blank";
    projectElement.className = "project";
    projectElement.setAttribute("aria-label", project.title);

    const imageElement = document.createElement("img");
    imageElement.src = project.image;
    imageElement.alt = project.alt;
    imageElement.className = "project-image";
    imageElement.loading = "lazy";

    const titleElement = document.createElement("p");
    titleElement.className = "project-title";
    titleElement.innerHTML = `<span class="code">&lt;</span> ${project.title} <span class="code">&gt;</span>`;

    const descriptionElement = document.createElement("p");
    descriptionElement.className = "project-description";
    descriptionElement.textContent = project.description;

    projectElement.appendChild(imageElement);
    projectElement.appendChild(titleElement);
    projectElement.appendChild(descriptionElement);
    projectsGrid.appendChild(projectElement);
  });
}

// Render Skills
function renderSkills() {
  const skillsList = document.getElementById("skills-list");
  skills.forEach((skill) => {
    const skillElement = document.createElement("span");
    skillElement.textContent = skill;
    skillsList.appendChild(skillElement);
  });
}

// Render Experiences
function renderExperiences() {
  const experienceContainer = document.getElementById("experience-container");
  experiences.forEach((experience) => {
    const experienceItem = document.createElement("div");
    experienceItem.className = "experience-item";

    const toggleButton = document.createElement("button");
    toggleButton.className = "experience-toggle-btn";
    toggleButton.textContent = experience.title;
    toggleButton.setAttribute(
      "aria-label",
      `Toggle ${experience.title} details`
    );

    const details = document.createElement("div");
    details.className = "experience-details";

    const duration = document.createElement("p");
    duration.innerHTML = `<strong>Duration:</strong> ${experience.duration}`;

    const location = document.createElement("p");
    location.innerHTML = `<strong>Location:</strong> ${experience.location}`;

    const description = document.createElement("p");
    description.textContent = experience.description;

    const achievementsHeader = document.createElement("p");
    achievementsHeader.innerHTML = `<strong>Key Achievements:</strong>`;

    const achievementsList = document.createElement("ul");
    experience.achievements.forEach((achievement) => {
      const listItem = document.createElement("li");
      listItem.textContent = achievement;
      achievementsList.appendChild(listItem);
    });

    details.appendChild(duration);
    details.appendChild(location);
    details.appendChild(description);
    details.appendChild(achievementsHeader);
    details.appendChild(achievementsList);

    experienceItem.appendChild(toggleButton);
    experienceItem.appendChild(details);
    experienceContainer.appendChild(experienceItem);
  });

  // Toggle functionality
  document.querySelectorAll(".experience-toggle-btn").forEach((button) => {
    button.addEventListener("click", () => {
      const details = button.nextElementSibling;
      details.classList.toggle("show");
      button.textContent = details.classList.contains("show")
        ? "Hide Details"
        : "Show Details";
    });
  });
}

// Render Certificates
function renderCertificates() {
  const certificatesGrid = document.getElementById("certificates-grid");
  certificates.forEach((certificate) => {
    const certificateElement = document.createElement("div");
    certificateElement.className = "certificate";

    const linkElement = document.createElement("a");
    linkElement.href = certificate.file;
    linkElement.target = "_blank";
    linkElement.className = "certificate-link";
    linkElement.setAttribute("aria-label", certificate.title);

    const iconElement = document.createElement("i");
    iconElement.className = "fas fa-file-pdf";
    iconElement.style.fontSize = "5rem";
    iconElement.style.color = "#e63946";

    const titleElement = document.createElement("p");
    titleElement.textContent = certificate.title;

    linkElement.appendChild(iconElement);
    linkElement.appendChild(titleElement);
    certificateElement.appendChild(linkElement);
    certificatesGrid.appendChild(certificateElement);
  });
}

// Back to Top Button
function setupBackToTop() {
  const backToTopButton = document.getElementById("back-to-top");
  window.addEventListener("scroll", () => {
    backToTopButton.style.display = window.scrollY > 300 ? "block" : "none";
  });
  backToTopButton.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

// Initialize all functionality
document.addEventListener("DOMContentLoaded", () => {
  renderProjects();
  renderSkills();
  renderExperiences();
  renderCertificates();
  setupBackToTop();
});
