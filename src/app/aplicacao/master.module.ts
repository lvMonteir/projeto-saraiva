import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './pages/home/home.component';
import { InternaComponent } from './pages/interna/interna.component';
import { PagesModule } from './pages/pages.module';



@NgModule({
  declarations: [
    HomeComponent,
    InternaComponent,
  ],
  imports: [
    CommonModule,
    PagesModule
  ]
})
export class MasterModule { }
