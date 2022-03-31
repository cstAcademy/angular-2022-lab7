import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeaturesRoutingModule } from './features-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';

//Material
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';

@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    FeaturesRoutingModule,

    //Material
    MatButtonModule,
    MatTableModule,
  ],
})
export class FeaturesModule {}
