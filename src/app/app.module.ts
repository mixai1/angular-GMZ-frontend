import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'; 
import { HttpClientModule } from '@angular/common/http';

import { ToastrModule } from 'ngx-toastr';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistrationComponent } from './user/registration/registration.component';
import { LoginComponent } from './user/login/login.component';

import { NavbarComponent } from './layout/navbar/navbar.component';
import { UserService } from './shared/user.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './layout/footer/footer.component';
import { CarouselComponent } from './element/carousel/carousel.component';
import { ProductComponent } from './product/product.component';
import { NewsComponent } from './news/news.component';
import { ContactComponent } from './contact/contact.component';
import { HistoryComponent } from './history/history.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { LoaderComponent } from './element/loader/loader.component';
import { ContactModule } from './contact/contact.module';
import { HistoryModule } from './history/history.module';
import { UserProfileModule } from './user-profile/user-profile.module';
import { NewsModule } from './news/news.module';
import { UserModule } from './user/user.module';
import { AdminPanelModule } from './admin-panel/admin-panel.module';
import { ProductModule } from './product/product.module';
import { HomeModule } from './home/home.module';
import { ElementModule } from './element/element.module';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    NotFoundComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
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
  exports: [LoaderComponent]
})
export class AppModule { }
