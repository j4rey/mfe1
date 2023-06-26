import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { KycModule } from './kyc-module/kyc.module';
import { KycComponent } from './kyc-module/kyc/kyc.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    KycModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
