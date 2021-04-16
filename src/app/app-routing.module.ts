import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegistrationComponent } from './components/user/registration/registration.component';
import { LoginComponent } from './components/user/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { AuthGuard } from './auth/auth.guard';
import { ProductComponent } from './components/product/product.component';
import { NewsComponent } from './components/news/news.component';
import { HistoryComponent } from './components/history/history.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { NewsDetailComponent } from './components/news-detail/news-detail.component';
import { AdminPanelComponent } from './components/admin-panel/admin-panel.component';
import { AdminAuthGuard } from './auth/admin-auth.guard';
import { ProductAPPComponent } from './components/product/product-app/product-app.component';
import { ProductANComponent } from './components/product/product-an/product-an.component';
import { ProductASComponent } from './components/product/product-as/product-as.component';
import { ItemProdComponent } from './components/product/item-prod/item-prod.component';
import { ProductAllComponent } from './components/product/product-all/product-all.component';
import { ContactComponent } from './components/contact/contact.component';
import { CreateNewsComponent } from './components/admin-panel/create-news/create-news.component';
import { ViewAllNewsComponent } from './components/admin-panel/view-all-news/view-all-news.component';
import { CreateVacanciesComponent } from './components/admin-panel/create-vacancies/create-vacancies.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'user/registr', component: RegistrationComponent },
  { path: 'user/login', component: LoginComponent },
  {
    path: 'product', component: ProductComponent,
    children:
      [
        { path: 'all-prod', component: ProductAllComponent },
        { path: 'app-prod', component: ProductAPPComponent },
        { path: 'an-prod', component: ProductANComponent },
        { path: 'as-prod', component: ProductASComponent }
      ]
  },
  { path: 'product/:id', component: ItemProdComponent },
  { path: 'news', component: NewsComponent },
  { path: 'news/:id', component: NewsDetailComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'history', component: HistoryComponent },
  { path: 'home', component: HomeComponent },
  { path: 'userProf', component: UserProfileComponent, canActivate: [AuthGuard] },
  {
    path: 'admin', children:
      [
        { path: 'create-news', component: CreateNewsComponent },
        { path: 'review-news', component: ViewAllNewsComponent },
        { path: 'create-vacancies', component: CreateVacanciesComponent }

      ], component: AdminPanelComponent, canActivate: [AdminAuthGuard]
  },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
