import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { FlexLayoutModule } from '@angular/flex-layout';

import { CoreModule } from '@app/core';
import { SharedModule } from '@app/shared';
import { MaterialModule } from '@app/material.module';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { QuoteService } from './quote.service';
import { YoutubePlayerModule } from 'ngx-youtube-player';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';

export const environment = {
  production: false,
  firebase: {
    apiKey: 'AIzaSyBpXeQ2nQumOdCsnHafEgqmaLbVBTMcSWk',
  authDomain: 'myst3000-747da.firebaseapp.com',
  databaseURL: 'https://myst3000-747da.firebaseio.com',
  projectId: 'myst3000-747da',
  storageBucket: 'myst3000-747da.appspot.com',
  messagingSenderId: '1030299121794'
  }
};

@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
    CoreModule,
    SharedModule,
    FlexLayoutModule,
    MaterialModule,
    HomeRoutingModule,
    YoutubePlayerModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule
  ],
  declarations: [
    HomeComponent
  ],
  providers: [
    QuoteService
  ]
})
export class HomeModule { }
