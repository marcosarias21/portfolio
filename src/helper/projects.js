import clinicaimg from '../assets/images/clinicarc.png';
import movieImg from '../assets/images/movie.png';
import weather from '../assets/images/weather.png';
import reserve from '../assets/images/reserveorder.png';
import mercadots from '../assets/images/mercadots.png';
import blog from '../assets/images/Blog.png';

export const projects = [
  {
    id: 1,
    image: clinicaimg,
    type: 'Full Stack',
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
    title: 'MovieDB App',
    description: 'Movies application made with the api provided by moviedb. In this project I learned how to use Framer-Motion and I tried to make the code as clean as possible.',
    status: 'Completed',
    tools: ['Context', 'Sass', 'Bootsrap', 'React-Router-Dom', 'Axios', 'Framer-Motion', 'Swiper Js'],
    github: 'https://github.com/marcosarias21/moviedb-app',
    demo: 'https://movie-db-marcosariasdev.netlify.app/',
  },
  {
    id: 4,
    image: reserve,
    type: 'Full Stack',
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
    title: 'E-commerce Mobile App',
    description: 'E-commerce made with the api provided by FakestoreApi. This project I put in practice React Native w/Expo and I tried to make the code as clean as possible.',
    status: 'Completed',
    tools: ['Expo', 'React Native Paper', 'Stack Navigator', 'Axios', 'Redux-Toolkit'],
    github: 'https://github.com/marcosarias21/ecommerce-r-native',
    demo: '',
  },
  {
    id: 6,
    image: mercadots,
    type: 'Only React',
    title: 'MercadoTs',
    description: 'E-commerce made with the api provided by ML api. This project I put in practice React w/Ts and I tried to make the code as clean as possible.',
    status: 'Completed',
    tools: ['React', 'Typescript', 'Zustand', 'Material UI'],
    github: 'https://github.com/marcosarias21/ecommerce-ts',
    demo: 'https://mercadots.netlify.app/',
  },
  {
    id: 6,
    image: blog,
    type: 'Full Stack',
    title: 'Blog APP',
    description: 'A full-stack blog application that allows users to create posts, like them, and leave comments. Built with React Native and Expo, following clean code principles.',
    status: 'In progress...',
    tools: ['React', 'Javascript', 'Zustand', 'Material UI', 'Apollo', 'GraphQL', 'MongoDB'],
    github: 'https://github.com/marcosarias21/blog-app',
    githubBackend: 'https://github.com/marcosarias21/blog-server-graphql',
    demo: '',
  },
];
