// Array of projects
const projects = [
  {
    title: "Sea Level Predictor",
    image: "./sea_level_plot.png",
    link: "https://freecodecam-boilerplate-7xy4fyc2vvu.ws-eu111.gitpod.io/",
    alt: "Graph showing sea level rise over time",
  },
  {
    title: "Time Series Visualizer",
    image: "./bar_plot.png",
    link: "https://freecodecam-boilerplate-yjjzplwmhsz.ws-eu111.gitpod.io/",
    alt: "Time series data visualization",
  },
  {
    title: "Medical Data Visualizer",
    image: "./catplot.png",
    link: "https://freecodecam-boilerplate-5dqrp8vqgfx.ws-eu111.gitpod.io/",
    alt: "Medical data visualization",
  },
  {
    title: "Technical Doc Page",
    image: "./Screenshot 2024-05-01 052406.png",
    link: "https://tumelobasi.github.io/Technical-Documentation-Page/",
    alt: "Technical documentation page",
  },
  {
    title: "Survey Form",
    image: "./Screenshot 2024-05-01 052406.png",
    link: "https://tumelobasi.github.io/Survey-Form/",
    alt: "Survey form project",
  },
];

// Function to render projects
function renderProjects() {
  const projectsGrid = document.getElementById("projects-grid");

  projects.forEach((project) => {
    const projectElement = document.createElement("a");
    projectElement.href = project.link;
    projectElement.target = "_blank";
    projectElement.className = "project";

    const imageElement = document.createElement("img");
    imageElement.src = project.image;
    imageElement.alt = project.alt;
    imageElement.className = "project-image";
    imageElement.loading = "lazy";

    const titleElement = document.createElement("p");
    titleElement.className = "project-title";
    titleElement.innerHTML = `<span class="code">&lt;</span> ${project.title} <span class="code">&gt;</span>`;

    projectElement.appendChild(imageElement);
    projectElement.appendChild(titleElement);

    projectsGrid.appendChild(projectElement);
  });

  // Add "See More" button
  const seeMoreButton = document.createElement("a");
  seeMoreButton.href = "https://www.freecodecamp.org/tumelobasi";
  seeMoreButton.target = "_blank";
  seeMoreButton.className = "btn btn-show-all";

  const seeMoreText = document.createElement("p");
  seeMoreText.className = "project-title";
  seeMoreText.innerHTML = `See more <i class="fas fa-chevron-right"></i>`;

  seeMoreButton.appendChild(seeMoreText);
  projectsGrid.appendChild(seeMoreButton);
}

// Render projects when the page loads
document.addEventListener("DOMContentLoaded", renderProjects);

// Back to Top Button
const backToTopButton = document.getElementById("back-to-top");

window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    backToTopButton.style.display = "block";
  } else {
    backToTopButton.style.display = "none";
  }
});

backToTopButton.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
