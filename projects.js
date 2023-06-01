const projects = [
    {
        title: "GenaDrop",
        description: "no-code, multi-chain nft creator + marketplace on Algorand, Celo, Aurora, Polygon, Avalanche, Arbitrum, & NEAR,",
        image: "./assets/projects/dev/genadrop.png",
        liveLink: "https://genadrop.io",
        githubLink: "https://github.com/codingshot/genadrop",
    technologies: ["ReactJS", "Solidity", "SASS", "Firebase"],
    },
    {
        title: "E-commerce Shoe Site",
        description: "A fictional simple e-commerce site for shoes.",
        image: "./assets/projects/dev/shoe-site.png",
        liveLink: "https://jikugodwill.github.io/e-commerce-shoe-site/",
        githubLink: "https://github.com/Jikugodwill/e-commerce-shoe-site",
        technologies: ["HTML", "CSS", "JavaScript"],
    },
    {
        title: "Momentum Clone",
        description: "A very responsive clone of the momentum browser extension, havin its functionalities as well!",
        image: "./assets/projects/dev/momentum-clone.png",
        liveLink: "https://jikugodwill.github.io/monentum-clone/",
        githubLink: "https://github.com/Jikugodwill/monentum-clone",
        technologies: ["HTML", "CSS", "JavaScript"],
    },

];


const displayProjects = (filteredProjects) => {
    const projectsContainer = document.querySelector(".pjs .list");
    projectsContainer.innerHTML = filteredProjects.map((project) => { 
        return `<div class="project">
        <div class="project-image">
            <img src=${project.image}>
        </div>
        <div class="project-details">
            <h3 class="project-title">${project.title}</h3>
            <p class="project-description">${project.description}</p>
            <div class="pjstack">
                <h4>Project Stack</h4>
                <div class="stack-list">
                ${project.technologies.map((tech) => {
            return `<span class="pjstack-item">${tech}</span>`;
        }).join("")
                }
                </div>
            </div>
            <div class="pj-btns">
                <a class="project-link" href=${project.liveLink} target="_blank">View Project</a>
                <a class="project-link" href=${project.githubLink} target="_blank">View Code</a>
            </div>
        </div>
    </div>`;
    }).join("");
}



document.addEventListener("DOMContentLoaded", () => {
    displayProjects(projects);
});