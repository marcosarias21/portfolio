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
    description: 'Page made in a group with its own backend using MongoDB and on the front with React. Tools and libraries used: React-Calendar, React Hook Form, Bootstrap, React Router Dom.',
    status: 'Completed',
    github: 'https://github.com/marcosarias21/proyecto-clinica',
    githubBackend: 'https://github.com/LMBarthaburu/proyecto-clinica-backend',
    demo: 'https://clinica-rc-24i.netlify.app',
  },
  {
    id: 2,
    image: weather,
    imageTwo: weatherTwo,
    title: 'Weather App',
    description: 'Weather application made with the Weather API in which it shows a video depending on the weather. Tools and libraries used: React Marquee, Context, Bootstrap, Sass, Axios, Eslint.',
    status: 'Completed',
    github: 'https://github.com/marcosarias21/weather-app',
    demo: 'https://weather-app-ffdm.netlify.app',
  },
  {
    id: 3,
    image: movieImg,
    imageTwo: movieTwo,
    title: 'MovieDB App',
    description: 'Movies application made with the api provided by moviedb. In this project I learned how to use Framer-Motion and I tried to make the code as clean as possible. Tools and libraries used: Context, Sass, Bootstrap, Axios, Eslint, React Router Dom, Framer-Motion, Swiper Js.',
    status: 'In progress...',
    github: 'https://github.com/marcosarias21/moviedb-app',
    demo: '',
  },
];
