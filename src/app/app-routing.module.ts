import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { CatzNFTComponent } from './catz-nft/catz-nft.component';
import { ContactComponent } from './contact/contact.component';

import { HomeComponent } from './home';
import { LoginComponent } from './login';
import { MintComponent } from './mint';
import { PortfolioComponent } from './portfolio';
import { RegisterComponent } from './register';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'portfolio', component: PortfolioComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'mint', component: MintComponent },
  { path: 'catz-nft', component: CatzNFTComponent },

  // otherwise redirect to home
  { path: '**', redirectTo: '' }
];

export const appRoutingModule = RouterModule.forRoot(routes);

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
