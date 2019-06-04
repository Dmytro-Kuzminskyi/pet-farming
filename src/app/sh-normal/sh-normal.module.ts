import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ShNormalRoutingModule } from './sh-normal-routing.module';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ShNormalComponent } from './sh-normal.component';
import { DataService } from '../data.service';
import { PetGridListComponent } from './pet-grid-list/pet-grid-list.component';
import { EditPetInfoComponent } from './edit-pet-info/edit-pet-info.component';

@NgModule({
  entryComponents: [
    EditPetInfoComponent
  ],
  declarations: [
    ShNormalComponent, 
    PetGridListComponent,
    EditPetInfoComponent,
  ],
  imports: [
    CommonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatGridListModule,
    MatCheckboxModule,
    MatButtonModule,
    MatInputModule,
    FormsModule,
    ShNormalRoutingModule
  ],
  exports: [
    ShNormalComponent
  ],
  providers: [
    DataService
  ]
})
export class ShNormalModule { }
