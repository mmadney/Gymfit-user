import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { NavComponent } from './nav/nav.component';
import { RegisterComponent } from './register/register.component';
import { AuthGuard } from './login/auth.guard';
import { ProgramsComponent } from './programs/programs.component';
import { CoachesComponent } from './coaches/coaches.component';
import { ProductsComponent } from './products/products.component';
import { LoginComponent } from './login/login.component';
import { GymService } from './_services/gym.service';
import { GymsComponent } from './gyms/gyms.component';

export const routes: Routes =[
  {
    path: 'Login',
    component: LoginComponent
  },
  {
    path: 'Register',
    component: RegisterComponent
  },
  {
    path: 'Products',
    component: ProductsComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'Programs',
    component: ProgramsComponent
  },
  {
    path: 'Gyms',
    component: GymsComponent
  },
  {
    path: '**',
    redirectTo: 'Login',
    pathMatch: 'full'
  }
];
