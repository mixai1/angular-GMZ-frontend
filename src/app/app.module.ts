import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'; 
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {AngularFireModule} from '@angular/fire';
import {AngularFireStorageModule} from '@angular/fire/storage';
import {AngularFireDatabaseModule} from '@angular/fire/database';

import { ToastrModule } from 'ngx-toastr';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/layout/navbar/navbar.component';
import { UserService } from './services/user/user.service';
import { FooterComponent } from './components/layout/footer/footer.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { HistoryModule } from './components/history/history.module';
import { UserProfileModule } from './components/user-profile/user-profile.module';
import { NewsModule } from './components/news/news.module';
import { UserModule } from './components/user/user.module';
import { AdminPanelModule } from './components/admin-panel/admin-panel.module';
import { ProductModule } from './components/product/product.module';
import { HomeModule } from './components/home/home.module';
import { ElementModule } from './components/element/element.module';
import { AngularFileUploaderModule } from 'angular-file-uploader';
import { ContactModule } from './components/contact/contact.module';
import { environment } from '../environments/environment.prod';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    NotFoundComponent
  ],
  imports: [
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireStorageModule,
    AngularFireDatabaseModule,
    BrowserModule,
    FormsModule,
    AngularFileUploaderModule,
    ReactiveFormsModule,
    AppRoutingModule,
    NgbModule,
    ElementModule,
    HttpClientModule,
    CommonModule,
    HomeModule,
    NewsModule,
    ProductModule,
    AdminPanelModule,
    UserProfileModule,
    UserModule,
    ContactModule,
    HistoryModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      progressBar: true,
      timeOut:5000
    }),
  ],
  providers: [UserService],
  bootstrap: [AppComponent],
  exports: []
})
export class AppModule { }
