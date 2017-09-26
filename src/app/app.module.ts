import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
 
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home.original';
import { EmailComposer } from '@ionic-native/email-composer';
import { HttpModule } from '@angular/http';
import { SwingModule } from 'angular2-swing';


 
@NgModule({
  declarations: [
    MyApp,
    //EmailComposer,
    HomePage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    SwingModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    //EmailSender,
    HomePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    EmailComposer,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}