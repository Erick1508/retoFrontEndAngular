import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Route } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddClientComponent } from './components/add-client/add-client.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ClientsComponent } from './components/clients/clients.component';
import { RestClientService } from './services/rest-client.service';
import { environment } from 'src/environments/environment';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore/';

const routes: Route[] = [
  {path: 'create', component: AddClientComponent },
  {path: '', component: ClientsComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    AddClientComponent,
    NavbarComponent,
    ClientsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig, 'angulartestcrud'),
    AngularFirestoreModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [RestClientService],
  bootstrap: [AppComponent]
})
export class AppModule { }
