import { v4 as uuidv4 } from 'uuid';
import ProjectImg from '../images/projectImg.png';
import UTrackerImg from '../images/utracker.jpg';
import GreenCtgImg from '../images/greenctg.jpg';
import CoinTrackerImg from '../images/cointracker.jpg';
import CavinImg from '../images/cavinimg.jpg';

const projects = [
  {
    id: uuidv4(),
    name: 'Mstore',
    desc:
      'Online e-commerce platform - which was the final project of the front end course',
    img: UTrackerImg,
  },
  {
    id: uuidv4(),
    name: 'Task tracker',
    desc: 'An app to help people to note their tasks. My first react app',
    img: GreenCtgImg,
  },
  {
    id: uuidv4(),
    name: 'Weather App',
    desc:
      'Weather App with location search that show`s you the weather - created using API`s',
    img: CoinTrackerImg,
  },
  {
    id: uuidv4(),
    name: "Mihai's Portfolio",
    desc: 'My first portfolio website',
    img: CavinImg,
  },
  {
    id: uuidv4(),
    name: 'Book List',
    desc:
      'An website with an form that allow you to add or remove items into a table',
    img: ProjectImg,
  },
];

export default projects;
