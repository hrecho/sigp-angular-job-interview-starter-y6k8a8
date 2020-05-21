import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { MatToolbarModule } from '@angular/material';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HomeModule } from './home/home.module';
import { HomeComponent } from './home/home.component';
import { DetailComponent } from './detail/detail.component';
import { ListComponent } from './list/list.component';
import { ListModule } from './list/list.module';
import { DetailModule } from './detail/detail.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { LogoComponent } from './logo/logo.component';

const appRoutes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    component: HomeComponent,
  },
/*
  {
    path: 'list/:ID',
    loadChildren: './detail/detail.module#DetailModule',
  },

  {
    path: 'list',
    pathMatch: 'full',
    loadChildren: './list/list.module#ListModule',    
  },
*/
  {
    path: 'list/:ID',
    component: DetailComponent
  },
  {
    path: 'list',
    component: ListComponent
  },
];

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,

    MatToolbarModule,

    HomeModule,
    ListModule,
    DetailModule
  ],
  providers: [

  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
