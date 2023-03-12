import clinicaimg from '../assets/images/clinicarc.png';
import clinicaTwo from '../assets/images/clinicarctwo.png';
import movieImg from '../assets/images/movie.png';
import movieTwo from '../assets/images/movietwo.png';
import weather from '../assets/images/weather.png';
import weatherTwo from '../assets/images/weathertwo.png';

export const projects = [
  {
    id: 1,
    image: clinicaimg,
    imageTwo: clinicaTwo,
    title: 'Clinica Rc 24i',
    description: 'Page made in a group with its own backend using MongoDB and on the front with React. ',
    status: 'Completed',
    tools: ['React-Calendar', 'React Hook Form', 'React Hook Form', 'Bootsrap', 'React-Router-Dom', 'MongoDB', 'Mongoose', 'Express', 'NodeJS'],
    github: 'https://github.com/marcosarias21/proyecto-clinica',
    githubBackend: 'https://github.com/LMBarthaburu/proyecto-clinica-backend',
    demo: 'https://clinica-rc-24i.netlify.app',
  },
  {
    id: 2,
    image: weather,
    imageTwo: weatherTwo,
    title: 'Weather App',
    description: 'Weather application made with the Weather API in which it shows a video depending on the weather.',
    tools: ['React Marquee', 'Context', 'Bootsrap', 'React-Router-Dom', 'Sass', 'Axios'],
    status: 'Completed',
    github: 'https://github.com/marcosarias21/weather-app',
    demo: 'https://weather-app-ffdm.netlify.app',
  },
  {
    id: 3,
    image: movieImg,
    imageTwo: movieTwo,
    title: 'MovieDB App',
    description: 'Movies application made with the api provided by moviedb. In this project I learned how to use Framer-Motion and I tried to make the code as clean as possible.',
    status: 'In progress...',
    tools: ['Context', 'Sass', 'Bootsrap', 'React-Router-Dom', 'Axios', 'Framer-Motion', 'Swiper Js'],
    github: 'https://github.com/marcosarias21/moviedb-app',
    demo: '',
  },
];
