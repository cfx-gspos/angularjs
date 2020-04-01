import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';


import { AppComponent } from './app.component';
import { NewsComponent } from './components/news/news.component';
import { HeaderComponent } from './components/header/header.component';
import {FormsModule} from '@angular/forms';
import { FormComponent } from './components/form/form.component';
import { SearchComponent } from './components/search/search.component';
import { TodolistComponent } from './components/todolist/todolist.component';
import {StorageService}  from './services/storage.service';
import { HomeComponent } from './components/home/home.component';
import { TransitionComponent } from './components/transition/transition.component';
import { ParentComponent } from './components/parent/parent.component';
import { ChildComponent } from './components/child/child.component';

@NgModule({
  declarations: [
    AppComponent,
    NewsComponent,
    HeaderComponent,
    FormComponent,
    SearchComponent,
    TodolistComponent,
    HomeComponent,
    TransitionComponent,
    ParentComponent,
    ChildComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [StorageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
