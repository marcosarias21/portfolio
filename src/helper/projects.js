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
    type: 'Full Stack',
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
    type: 'Only React',
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
    type: 'Only React',
    imageTwo: movieTwo,
    title: 'MovieDB App',
    description: 'Movies application made with the api provided by moviedb. In this project I learned how to use Framer-Motion and I tried to make the code as clean as possible.',
    status: 'Completed',
    tools: ['Context', 'Sass', 'Bootsrap', 'React-Router-Dom', 'Axios', 'Framer-Motion', 'Swiper Js'],
    github: 'https://github.com/marcosarias21/moviedb-app',
    demo: 'https://movie-db-marcosariasdev.netlify.app/',
  },
  {
    id: 4,
    image: movieImg,
    type: 'Full Stack',
    imageTwo: movieTwo,
    title: 'Reserve Your Order',
    description: 'Project for a restaurant applying precisely these technologies. It is a web page that presents a detailed list of menus so that the clients of that place can make their reservations online quickly and easily. In addition, it includes a list of clients for different companies. This project also allows the administrator to select which menu will appear for each particular company. In addition, to be able to create new menus and see a record of customers and orders made with the reservation date.',
    status: 'Completed',
    tools: ['React', 'MongoDB', 'Express', 'NodeJs', 'React-Context', 'React-Hook-Form', 'SweetAlert', 'React-Select', 'React-Icons'],
    github: 'https://github.com/marcosarias21/reservar-pedido',
    githubBackend: 'https://github.com/marcosarias21/reservar-pedido-be',
    demo: '',
  },
  {
    id: 5,
    image: movieImg,
    type: 'React Native',
    imageTwo: movieTwo,
    title: 'E-commerce Mobile App',
    description: 'E-commerce made with the api provided by FakestoreApi. This project I put in practice React Native w/Expo and I tried to make the code as clean as possible.',
    status: 'Completed',
    tools: ['Expo', 'React Native Paper', 'Stack Navigator', 'Axios', 'Redux-Toolkit'],
    github: 'https://github.com/marcosarias21/ecommerce-r-native',
    demo: 'https://github.com/marcosarias21/ecommerce-r-native',
  },
];
