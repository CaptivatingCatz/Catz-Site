import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContentComponent } from './content/content.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { YoutubeComponent } from './youtube/youtube.component';
import { LivestreamsComponent } from './livestreams/livestreams.component';
import { BannerComponent } from './banner/banner.component';
import { AccentBarComponent } from './accent-bar/accent-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    ContentComponent,
    HeaderComponent,
    FooterComponent,
    YoutubeComponent,
    LivestreamsComponent,
    BannerComponent,
    AccentBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
