import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'; 
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ToastrModule } from 'ngx-toastr';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { UserService } from './shared/user.service';
import { FooterComponent } from './layout/footer/footer.component';
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
