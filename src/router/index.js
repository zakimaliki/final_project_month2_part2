import Home from "../components/HomePage.vue";
import HomeHorror from "../components/HomeHorrorPage.vue";
import HomeAction from "../components/HomeActionPage.vue";
import HomeComedy from "../components/HomeComedyPage.vue";
import HomeAdventure from "../components/HomeAdventurePage.vue";
import HomeFantasy from "../components/HomeFantasyPage.vue";
import HomeRomance from "../components/HomeRomancePage.vue";
import HomeScience from "../components/HomeSciencePage.vue";
import HomeThriller from "../components/HomeThrillerPage.vue";
import InputPage from "../components/InputPage.vue";
import DetailPage from "../components/DetailPage.vue";



export const routes = [
  {
    path: "/",
    name: "home",
    component: Home
  },
  {
    path: "/horror",
    name: "horror",
    component: HomeHorror
  },
  {
    path: "/action",
    name: "action",
    component: HomeAction
  },
  {
    path: "/comedy",
    name: "comedy",
    component: HomeComedy
  },
  {
    path: "/adventure",
    name: "adventure",
    component: HomeAdventure
  },
  {
    path: "/fantasy",
    name: "fantasy",
    component: HomeFantasy
  },
  {
    path: "/romance",
    name: "romance",
    component: HomeRomance
  },
  {
    path: "/science",
    name: "science",
    component: HomeScience
  },
  {
    path: "/thriller",
    name: "thriller",
    component: HomeThriller
  },
  {
    path: '/input',
    name: 'inputpage',
    component: InputPage
  },
  {
    path: '/detail/:id',
    name: 'detailPage',
    component: DetailPage
  },
  // {
  //   path: '/detail/:id',
  //   name: 'detailPage',
  //   component: DetailPage
  // },
];
