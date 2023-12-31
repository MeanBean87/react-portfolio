import "./ProjectsStyles.css";

import ProjectCard from "../../components/ProjectCard/ProjectCard";

import weatherAppImg from "../../assets/images/projects/weather.png";
import wealthWiseImg from "../../assets/images/projects/WealthWise.png";
import deploymentCheatsheetReactImg from "../../assets/images/projects/deployment-cheatsheet-react.png";
import diceWebgameImg from "../../assets/images/projects/dice-webgame.png";
import myFirstPortfolioImg from "../../assets/images/projects/my-first-portfolio.png";
import nutriDiaryImg from "../../assets/images/projects/NutriDiary.png";
import logoMarketplaceImg from "../../assets/images/projects/LogoMarketPlace.png";

// Object to store information about each project. Add new projects here and import the image above.
const webpageInfo = [
  {
    img: weatherAppImg,
    deployedUrl: "https://meanbean87.github.io/city-weather-webapp/",
    repoUrl: "https://github.com/MeanBean87/city-weather-webapp",
    title: "City Weather Webapp",
  },
  {
    img: wealthWiseImg,
    deployedUrl: "https://wealthwise-project2-1bf71934d0b7.herokuapp.com/",
    repoUrl: "https://github.com/MeanBean87/WealthWise-deployed",
    title: "WealthWise",
  },
  {
    img: deploymentCheatsheetReactImg,
    deployedUrl: "https://meanbean87.github.io/de-cheatsheet-react/",
    repoUrl: "https://github.com/MeanBean87/de-cheatsheet-react",
    title: "Deployment Cheatsheet React",
  },
  {
    img: diceWebgameImg,
    deployedUrl: "https://meanbean87.github.io/Dice-Webgame/",
    repoUrl: "https://github.com/MeanBean87/Dice-Webgame",
    title: "Dice Webgame",
  },
  {
    img: myFirstPortfolioImg,
    deployedUrl: "https://meanbean87.github.io/personal-webpage/",
    repoUrl: "https://github.com/MeanBean87/personal-webpage",
    title: "My First Portfolio",
  },
  {
    img: nutriDiaryImg,
    deployedUrl: "https://meanbean87.github.io/ucb-project-one/",
    repoUrl: "https://github.com/MeanBean87/ucb-project-one",
    title: "NutriDiary",
  },
  {
    img: logoMarketplaceImg,
    deployedUrl: "https://logo-marketplace-f9aad311ca28.herokuapp.com/",
    repoUrl: "https://github.com/joellongaresjr/Logo-Marketplace",
    title: "Logo Marketplace",
  }
];

// Projects section renders the Projects page and displays the projects.
const Projects = () => {
  return (
    <div className="projects">
      {webpageInfo.map((webpage, index) => (
        <ProjectCard key={index} webpage={webpage} />
      ))}
    </div>
  );
};


export default Projects;
