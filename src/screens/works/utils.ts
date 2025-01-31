import empf1 from "~/assets/empf/empf1.png";
import shop1 from "~/assets/shop/shop1.png";
import lps from "~/assets/images/lenovo-pccw.png";
import taskDash from "~/assets/project3/task-dashboard.png";
import pokemonCard from "~/assets/project3/pokemon-card.png";

export const projectsList = [
  {
    image: empf1,
    title: "EMPF",
    tech: ["MUI", "React", "Typescript", "Mysql", "Springboot"],
  },
  {
    image: shop1,
    title: "Shop E-Commerce Design",
    tech: ["React", "Typescript", "Json-Server", "Tailwind", "Daisy UI"],
  },
  {
    image: taskDash,
    title: "Task Tracker",
    tech: ["React", "Javascript", "Node Js", "Express TS", "Tailwind"],
  },
  {
    image: pokemonCard,
    title: "Pokemon Flip Card Game",
    tech: ["React", "Javascript", "Tailwind", "Daisy UI", "Axios"],
  },
  {
    image:
      "https://img.freepik.com/free-vector/coming-soon-text-grunge-background_91128-1643.jpg",
    title: "Coming Soon!",
    tech: ["React", "Typescript", "Json-Server", "Tailwind"],
  },
];

export const workData = [
  {
    jobTitle: "Solutions Developer",
    company: "Lenovo PCCW Solutions",
    imageSrc: lps,
    employmentDateStart: " March 21, 2022",
    employmentDateEnd: "March 27, 2024",
    address:
      "10th Floor, The 30th Corporate Center, #30 Meralco Avenue, Brgy. Ugong, Pasig City, Philippines 1605",
  },
];
