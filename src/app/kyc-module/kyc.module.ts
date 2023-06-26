import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { KycComponent } from './kyc/kyc.component';
import { RouterModule, Routes } from '@angular/router';

export const KYC_ROUTES: Routes = [
  {
    path: '',
    component: KycComponent,
    pathMatch:'full'
  }
];

@NgModule({
  declarations: [
    KycComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(KYC_ROUTES)
  ],
  exports:[
    KycComponent
  ]
})
export class KycModule { }
