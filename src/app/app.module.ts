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
import { AboutComponent } from './about/about.component';
import { EmailListComponent } from './email-list/email-list.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from "@angular/common/http";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CatzNFTComponent } from './catz-nft/catz-nft.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { MintComponent } from './mint/mint.component';
import { ContactComponent } from './contact/contact.component';
import { AssetObservatoryComponent } from './asset-observatory/asset-observatory.component';
import { ChaoticnightstudiosComponent } from './chaoticnightstudios/chaoticnightstudios.component';
import { GamesComponent } from './games/games.component';
import { HighlightsComponent } from './highlights/highlights.component';
import { UpdatesComponent } from './updates/updates.component';


@NgModule({
  declarations: [
    AppComponent,
    ContentComponent,
    HeaderComponent,
    FooterComponent,
    YoutubeComponent,
    LivestreamsComponent,
    BannerComponent,
    AccentBarComponent,
    AboutComponent,
    EmailListComponent,
    CatzNFTComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    PortfolioComponent,
    MintComponent,
    ContactComponent,
    AssetObservatoryComponent,
    ChaoticnightstudiosComponent,
    GamesComponent,
    HighlightsComponent,
    UpdatesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
