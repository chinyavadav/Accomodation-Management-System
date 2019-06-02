import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { HttpModule} from '@angular/http';
import { IonicStorageModule } from '@ionic/storage';
import { Camera } from '@ionic-native/camera';
import { File } from  '@ionic-native/file';
import { FileTransfer } from  '@ionic-native/file-transfer';
import { CallNumber } from '@ionic-native/call-number';
import { RelativeTimePipe } from '../pipes/relative-time/relative-time';

import { MyApp } from './app.component';
import { AccessLevelPage } from '../pages/access-level/access-level';
import { AddApartmentPage } from '../pages/add-apartment/add-apartment';
import { ApartmentPage } from '../pages/apartment/apartment';
import { ApartmentsPage } from '../pages/apartments/apartments';
import { BookingsPage } from '../pages/bookings/bookings';
import { ChatPage } from '../pages/chat/chat';
import { ChatsPage } from '../pages/chats/chats';
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { MyApartmentsPage } from '../pages/my-apartments/my-apartments';
import { ProspectivePage } from '../pages/prospective/prospective';
import { RegisterPage } from '../pages/register/register';
import { SettingsPage } from '../pages/settings/settings';
import { TenantsPage } from '../pages/tenants/tenants';
import { ProfilePage } from '../pages/profile/profile';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { GlobalProvider } from '../providers/global/global';
import { ChatServiceProvider } from '../providers/chat-service/chat-service';

@NgModule({
  declarations: [
    MyApp,    
    AccessLevelPage,
    AddApartmentPage,
    ApartmentPage,
    ApartmentsPage,
    BookingsPage,
    ChatPage,
    ChatsPage,
    HomePage,
    LoginPage,
    MyApartmentsPage,
    ProfilePage,
    ProspectivePage,
    RegisterPage,
    SettingsPage,
    TenantsPage,
    RelativeTimePipe
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot(),
    HttpModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AccessLevelPage,
    AddApartmentPage,
    ApartmentPage,
    ApartmentsPage,
    BookingsPage,
    ChatPage,
    ChatsPage,
    HomePage,
    LoginPage,
    MyApartmentsPage,
    ProfilePage,
    ProspectivePage,
    RegisterPage,
    SettingsPage,
    TenantsPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Camera,
    File,
    FileTransfer,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    GlobalProvider,
    CallNumber,
    ChatServiceProvider
  ]
})
export class AppModule {}
