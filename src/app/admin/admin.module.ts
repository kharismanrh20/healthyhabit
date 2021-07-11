import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin/admin.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RouterModule, Routes } from '@angular/router';
import { MaterialDesign } from '../material/material.module';
import { TipssehatComponent } from './tipssehat/tipssehat.component';
import { TipsdietsehatComponent } from './tipsdietsehat/tipsdietsehat.component';
import { CatatankuComponent } from './catatanku/catatanku.component';
import { CatatanDetailComponent } from './catatan-detail/catatan-detail.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

const routes: Routes =[
{
  path:'',
  component:AdminComponent,
  children:[
    {
      path:'dashboard',
      component:DashboardComponent
    },
    {
      path:'tipssehat',
      component:TipssehatComponent
    },
    {
      path:'tipsdietsehat',
      component:TipsdietsehatComponent
    },
    {
      path:'catatanku',
      component:CatatankuComponent
    },
    {
      path:'',
      pathMatch:'full',
      redirectTo:'/admin/dashboard'
    }
  ]
  }
]

@NgModule({
  declarations: [
    AdminComponent,
    DashboardComponent,
    TipssehatComponent,
    TipsdietsehatComponent,
    CatatankuComponent,
    CatatanDetailComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MaterialDesign,
    FormsModule,
    HttpClientModule
  ]
})
export class AdminModule { }
