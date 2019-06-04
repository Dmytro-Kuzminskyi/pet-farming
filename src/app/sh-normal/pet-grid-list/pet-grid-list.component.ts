import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { EditPetInfoComponent } from '../edit-pet-info/edit-pet-info.component';
import PETS from '../../../assets/data/sh-normal-pets.json';

@Component({
  selector: 'app-pet-grid-list',
  templateUrl: './pet-grid-list.component.html',
  styleUrls: ['./pet-grid-list.component.css']
})
export class PetGridListComponent {

  pets: any[];
  currentPet: any;
  editMode = false;

  constructor(public dialog: MatDialog) { 
    this.pets = PETS;
  }

  openDialog(pet: any): void {
    if (this.editMode) {
      this.currentPet = pet;
      console.log(this.currentPet);
      const dialogRef = this.dialog.open(EditPetInfoComponent, {
        width: '250px',
        data: this.currentPet
      });
      dialogRef.afterClosed().subscribe(result => {
        console.log(result);
      });
    }
  }
}
