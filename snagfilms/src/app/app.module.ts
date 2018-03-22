import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomepageComponent } from './home/homepage/homepage.component';
import { CarouselComponent } from './home/carousel/carousel.component';
import { CarouselFiveComponent } from './home/carousel-five/carousel-five.component';
import { FooterComponent } from './footer/footer.component';

import { Ng2CarouselamosModule } from 'ng2-carouselamos';
import { ServerService } from './server.service';
import { HttpModule } from '@angular/http';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomepageComponent,
    CarouselComponent,
    CarouselFiveComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    Ng2CarouselamosModule,
    HttpModule
  ],
  providers: [ServerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
