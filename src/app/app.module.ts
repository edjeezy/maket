import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { FormsModule } from '@angular/forms'
import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { SellpagePage } from '../pages/sellpage/sellpage'
import { TabsPage } from '../pages/tabs/tabs';
import { FabComponent } from "../components/fab-nav";
import { FabLoadingComponent } from "../components/fab-loading";
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { Camera } from '@ionic-native/camera';
import { LoginPage } from '../pages/login/login';
import { Facebook } from '@ionic-native/facebook';

export const firebaseConfig ={
    apiKey: "AIzaSyAHLJ9VBoM844UP3hyscOOc_xtuYTl9IyE",
    authDomain: "snapshop-3c404.firebaseapp.com",
    databaseURL: "https://snapshop-3c404.firebaseio.com",
    projectId: "snapshop-3c404",
    storageBucket: "snapshop-3c404.appspot.com",
    messagingSenderId: "686144988779"
}

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    SellpagePage,
    FabComponent,
    FabLoadingComponent,
    LoginPage
  ],
  imports: [
    BrowserModule,
    FormsModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    SellpagePage,
    FabLoadingComponent,
    LoginPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    Camera,
    Facebook
  ]
})
export class AppModule {}
