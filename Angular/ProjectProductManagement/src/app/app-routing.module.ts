import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListProductComponent } from './list-product/list-product.component'
import { EditProductComponent } from './edit-product/edit-product.component'
import { CreateProductComponent } from './create-product/create-product.component'
import { AppComponent } from './app.component'


const routes: Routes = [
  { path: 'productList', component: ListProductComponent },
  { path: 'createProduct', component: CreateProductComponent },
  { path: 'editProduct' , component: EditProductComponent},
  // { path: '', component: AppComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
