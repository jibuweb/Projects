import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductComponent } from './product/product.component';
import { MystoreComponent } from './mystore/mystore.component';
import { ContactusComponent } from './contactus/contactus.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'allproducts', component: ProductComponent},
  {path: 'mystore', component: MystoreComponent},
  {path: 'contactUs', component: ContactusComponent},
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [ 
        HomeComponent, 
        ProductComponent, 
        MystoreComponent,
        ContactusComponent,
        PageNotFoundComponent         
      ]
