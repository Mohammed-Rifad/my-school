import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AppRoutingModule,RoutingModules } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { PhotoComponent } from './photo/photo.component';

@NgModule({
  declarations: [
   RoutingModules,
   PhotoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [HomeComponent]
})
export class AppModule { }
