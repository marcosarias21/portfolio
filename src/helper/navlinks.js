import {
  BsCast, BsChat, BsFillHouseDoorFill, BsStars,
} from 'react-icons/bs';
import { FaGithub } from 'react-icons/fa';

export const NavLinks = [
  {
    title: 'Home',
    path: '#home',
    icon: <BsFillHouseDoorFill className='mb-1' />,
  },
  {
    title: 'About',
    path: '#about',
    icon: <FaGithub className='mb-1' />,
  },
  {
    title: 'Skills',
    path: '#skills',
    icon: <BsStars className='mb-1' />,
  },
  {
    title: 'Project',
    path: '#projects',
    icon: <BsCast className='mb-1' />,
  },
  {
    title: 'Contact',
    path: '#contact',
    icon: <BsChat className='mb-1' />,
  },
];
