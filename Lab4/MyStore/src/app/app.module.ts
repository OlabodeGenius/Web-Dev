<<<<<<< HEAD
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

// Import your components here
=======
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

>>>>>>> d221a398710ac1fa068f3381d0777e558bd967c4
import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
<<<<<<< HEAD
import { CardBoxComponent } from './card-box/card-box.component';
import { CategoryComponent } from './category/category.component';

// Define your routes here
const appRoutes = [
  { path: '', component: ProductListComponent },
  { path: 'products/:productId', component: ProductDetailsComponent },
  { path: 'box/', component: CardBoxComponent },
];

@NgModule({
=======

@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: '', component: ProductListComponent },
      { path: 'products/:productId', component: ProductDetailsComponent }
    ])
  ],
>>>>>>> d221a398710ac1fa068f3381d0777e558bd967c4
  declarations: [
    AppComponent,
    TopBarComponent,
    ProductListComponent,
<<<<<<< HEAD
    ProductDetailsComponent,
    CardBoxComponent,
    CategoryComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
=======
    ProductDetailsComponent
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
>>>>>>> d221a398710ac1fa068f3381d0777e558bd967c4
