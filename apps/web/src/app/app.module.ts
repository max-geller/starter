import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
// import { CoreModule } from './core/core.module';
// import { SharedModule } from './shared/shared.module';
// import { AppRoutes } from './app.routes';
// import { AuthModule } from './auth/auth.module';
// import { AuthService } from './core/services/auth.service';
// import { environment } from '../environments/environment.dev';

import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireStorageModule } from '@angular/fire/storage';

import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';

import { NgxSpinnerModule } from 'ngx-spinner';

import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule,
    HttpClientModule,
    NgxSpinnerModule,
    AngularFireModule,
    AngularFirestoreModule,
    AngularFireAuthModule,
    AngularFireStorageModule,


  ],
  providers: [
    ,

  ],
  schemas: [],
  bootstrap: [
    AppComponent,
  ],
})
export class AppModule {}
