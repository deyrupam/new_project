import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';

import{HttpModule} from '@angular/http';
import { ProductComponent } from './product/product.component';
import { MembersComponent } from './members/members.component';
import {RouterModule} from '@angular/router';
import {MyDataService} from './my-data.service';



@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    MembersComponent,
],
  imports: [
    BrowserModule,
    ReactiveFormsModule,HttpModule,
    RouterModule.forRoot([
     { path: 'member',
      component:MembersComponent
     },
     { path: 'product',
      component:ProductComponent
     }
    ])
  ],
  providers: [
    // no need to place any providers due to the `providedIn` flag...
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
