import { Component } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { EditPetInfoComponent } from '../edit-pet-info/edit-pet-info.component';
import PETS from '../../../assets/data/sh-normal-pets.json';

interface Pet {
  id: number;
  name: string;
  starCount: number;
  pieceCount: number;
  imagePath: string;
}

@Component({
  selector: 'app-pet-grid-list',
  templateUrl: './pet-grid-list.component.html',
  styleUrls: ['./pet-grid-list.component.css']
})
export class PetGridListComponent {

  pets: Pet[];
  currentPet: Pet;
  editMode = false;

  constructor(public dialog: MatDialog) { 
    this.pets = PETS;
  }

  openDialog(pet: Pet) {
    if (this.editMode) {
      this.currentPet = pet;
      const dialogConfig = new MatDialogConfig();
      dialogConfig.disableClose = true;
      dialogConfig.autoFocus = true;
      dialogConfig.maxWidth = '250px';
      dialogConfig.data = this.currentPet;
      const dialogRef = this.dialog.open(EditPetInfoComponent, dialogConfig);

      dialogRef.afterClosed().subscribe(data => {
        if (data != undefined) {
          if (data.starCountInput != null && data.pieceCountInput != null) {
            this.currentPet.starCount = data.starCountInput;
            this.currentPet.pieceCount = data.pieceCountInput;
          }
        }
        console.log(this.currentPet);
      });
    }
  }
}
