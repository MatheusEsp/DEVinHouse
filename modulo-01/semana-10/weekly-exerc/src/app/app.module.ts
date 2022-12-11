import { Component, createPlatform, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NotificationListComponent } from './componentes/notification-list/notification-list.component';
import { NavbarComponent } from './componentes/navbar/navbar.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { FiltroComponent } from './componentes/filtro/filtro.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  
    {
      path: '',
      redirectTo: 'inicio', 
      pathMatch: 'full'
    },
    {
      path: "inicio",
      component: HomeComponent,
      children: [
      {
        path:"lidos",
        component: HomeComponent 
      },
      {
        path: "nao-lidos",
        component: HomeComponent
      },
      {
        path: "todos",
        component: HomeComponent
      }
      ]
    },
    {
      path: "sobre",
      component: AboutComponent
    }
]

@NgModule({
  declarations: [
    AppComponent,
    NotificationListComponent,
    NavbarComponent,
    FooterComponent,
    FiltroComponent,
    HomeComponent,
    AboutComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
