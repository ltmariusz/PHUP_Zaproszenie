import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InvitePendingPageComponent } from './invite-pending-page/invite-pending-page.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes =[
  {path: '', component: InvitePendingPageComponent}
]

@NgModule({
  declarations: [
    InvitePendingPageComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class InvitePendingPageModule { }
