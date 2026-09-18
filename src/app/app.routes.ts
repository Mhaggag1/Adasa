import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Blogs } from './blogs/blogs';
import { BlogDetails } from './blog-details/blog-details';
import { NotFound } from './not-found/not-found';
import { About } from './about/about';
import { Light } from './light/light';
import { Equip } from './equip/equip';
import { Natutre } from './natutre/natutre';
import { Portrait } from './portrait/portrait';
import { Tech } from './tech/tech';
import { AllBlogs } from './all-blogs/all-blogs';
import { Allblogsbars } from './allblogsbars/allblogsbars';

export const routes: Routes = [
  {
    path: 'home',
    component: Home,
    title: 'الصفحة الرئيسية',
  },
  {
    path: 'blogs',
    component: Blogs,

    title: 'المدونات',
    children: [
      {
        path: 'light',
        component: Light,
      },
      {
        path: 'equip',
        component: Equip,
      },
      {
        path: 'nature',
        component: Natutre,
      },
      {
        path: 'portrait',
        component: Portrait,
      },
      {
        path: 'tech',
        component: Tech,
      },
      {
        path: 'allBlogs',
        component: AllBlogs,
      },
      { path: 'blogdetails', component: BlogDetails },
    ],
  },
  {
    path: 'blogdetails',
    component: BlogDetails,
  },
  {
    path: 'about',
    component: About,
    title: 'من نحن',
  },

  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: '**',
    component: NotFound,
  },
];
