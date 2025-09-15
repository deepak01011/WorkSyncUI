import { Routes } from '@angular/router';
import { EcommerceComponent } from './pages/dashboard/ecommerce/ecommerce.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { FormElementsComponent } from './pages/forms/form-elements/form-elements.component';
import { BasicTablesComponent } from './pages/tables/basic-tables/basic-tables.component';
import { BlankComponent } from './pages/blank/blank.component';
import { NotFoundComponent } from './pages/other-page/not-found/not-found.component';
import { AppLayoutComponent } from './shared/layout/app-layout/app-layout.component';
import { InvoicesComponent } from './pages/invoices/invoices.component';
import { LineChartComponent } from './pages/charts/line-chart/line-chart.component';
import { BarChartComponent } from './pages/charts/bar-chart/bar-chart.component';
import { AlertsComponent } from './pages/ui-elements/alerts/alerts.component';
import { AvatarElementComponent } from './pages/ui-elements/avatar-element/avatar-element.component';
import { BadgesComponent } from './pages/ui-elements/badges/badges.component';
import { ButtonsComponent } from './pages/ui-elements/buttons/buttons.component';
import { ImagesComponent } from './pages/ui-elements/images/images.component';
import { VideosComponent } from './pages/ui-elements/videos/videos.component';
import { SignInComponent } from './pages/auth-pages/sign-in/sign-in.component';
import { SignUpComponent } from './pages/auth-pages/sign-up/sign-up.component';
import { CalenderComponent } from './pages/calender/calender.component';
import { EmailComponent } from './pages/private/email/email.component';
import { UploadResumeComponent } from './pages/private/upload-resume/upload-resume.component';
import { ResumeComponent } from './pages/private/resume/resume.component';

export const routes: Routes = [
  {
    path: '',
    component: AppLayoutComponent,
    children: [
      {
        path: '',
        component: EcommerceComponent,
        pathMatch: 'full',
        title: 'WorkSync',
      },
      //private pages
      { 
        path: 'email', 
        component: EmailComponent, 
        title: 'WorkSync | Email' 
      },
      { 
        path: 'upload-resume', 
        component: UploadResumeComponent, 
        title: 'WorkSync | Upload Resume' 
      },
      { 
        path: 'resume', 
        component: ResumeComponent, 
        title: 'WorkSync | Resume' 
      },
      {
        path: 'calendar',
        component: CalenderComponent,
        title: 'WorkSync'
      },
      {
        path: 'profile',
        component: ProfileComponent,
        title: 'WorkSync'
      },
      {
        path: 'form-elements',
        component: FormElementsComponent,
        title: 'WorkSync'
      },
      {
        path: 'basic-tables',
        component: BasicTablesComponent,
        title: 'WorkSync'
      },
      {
        path: 'blank',
        component: BlankComponent,
        title: 'WorkSync'
      },
      // support tickets
      {
        path: 'invoice',
        component: InvoicesComponent,
        title: 'WorkSync'
      },
      {
        path: 'line-chart',
        component: LineChartComponent,
        title: 'WorkSync'
      },
      {
        path: 'bar-chart',
        component: BarChartComponent,
        title: 'WorkSync'
      },
      {
        path: 'alerts',
        component: AlertsComponent,
        title: 'WorkSync'
      },
      {
        path: 'avatars',
        component: AvatarElementComponent,
        title: 'WorkSync'
      },
      {
        path: 'badge',
        component: BadgesComponent,
        title: 'WorkSync'
      },
      {
        path: 'buttons',
        component: ButtonsComponent,
        title: 'WorkSync'
      },
      {
        path: 'images',
        component: ImagesComponent,
        title: 'WorkSync'
      },
      {
        path: 'videos',
        component: VideosComponent,
        title: 'WorkSync'
      },
    ]
  },
  // auth pages
  {
    path: 'signin',
    component: SignInComponent,
    title: 'WorkSync | Sign In'
  },
  {
    path: 'signup',
    component: SignUpComponent,
    title: 'WorkSync | Sign Up'
  },
  // error pages
  {
    path: '**',
    component: NotFoundComponent,
    title: 'WorkSync'
  },
  

];
