import {
  BsCast, BsChat, BsFillHouseDoorFill, BsStars,
} from 'react-icons/bs';
import { FaGithub } from 'react-icons/fa';

export const NavLinks = [
  {
    title: 'Home',
    path: '/home#home',
    icon: <BsFillHouseDoorFill className='mb-1' />,
  },
  {
    title: 'About',
    path: '/home#about',
    icon: <FaGithub className='mb-1' />,
  },
  {
    title: 'Skills',
    path: '/home#skills',
    icon: <BsStars className='mb-1' />,
  },
  {
    title: 'Project',
    path: '/home#projects',
    icon: <BsCast className='mb-1' />,
  },
  {
    title: 'Contact',
    path: '/home#contact',
    icon: <BsChat className='mb-1' />,
  },
];
