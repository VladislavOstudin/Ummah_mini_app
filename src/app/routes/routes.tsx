import { createBrowserRouter } from 'react-router-dom';
import Intro from './intro';
import DoorChoice from './door-choice';
import Light from './light';
import Corner from './corner';
import CatQuestion from './cat-question';

export const routes = createBrowserRouter([
  { path: '/', element: <Intro /> },
  { path: '/door-choice', element: <DoorChoice /> },
  { path: '/light', element: <Light /> },
  { path: '/corner', element: <Corner /> },
  { path: '/cat-question', element: <CatQuestion /> },
]);