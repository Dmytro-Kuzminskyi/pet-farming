import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

export interface PetStarsPieces {
  stars: number;
  pieces: number;
}

@Component({
  selector: 'app-edit-pet-info',
  templateUrl: './edit-pet-info.component.html',
  styleUrls: ['./edit-pet-info.component.css']
})
export class EditPetInfoComponent {

  petInfo: PetStarsPieces = { stars: 0, pieces: 0 };

  constructor(public dialogRef: MatDialogRef<EditPetInfoComponent>, 
    @Inject(MAT_DIALOG_DATA) public data:any) { 
      this.petInfo.stars = data.starCount;
      this.petInfo.pieces = data.pieceCount;
    }

  onCancelClick():void {
    this.dialogRef.close();
  }

  checkInput(e: KeyboardEvent) {
    if ([46, 8, 9, 27, 13, 110, 190].indexOf(e.keyCode) !== -1 ||
        // Allow: Ctrl+A
        (e.keyCode == 65 && e.ctrlKey === true) ||
        // Allow: Ctrl+C
        (e.keyCode == 67 && e.ctrlKey === true) ||
        // Allow: Ctrl+V
        (e.keyCode == 86 && e.ctrlKey === true) ||
        // Allow: Ctrl+X
        (e.keyCode == 88 && e.ctrlKey === true) ||
        // Allow: home, end, left, right
        (e.keyCode >= 35 && e.keyCode <= 39)) {
          // let it happen, don't do anything
          return;
        }
  }

  checkInputStars(e:KeyboardEvent) {
    this.checkInput(e);
    let inputChar = String.fromCharCode(e.keyCode);
    let regExp = new RegExp('^[0-5]*$');
    if (regExp.test(inputChar)) 
      return;
    else
      e.preventDefault();
  }

  checkInputPieces(e:KeyboardEvent) {
    this.checkInput(e);
    let inputChar = String.fromCharCode(e.keyCode);
    let regExp = new RegExp('^[0-9]*$');
    if (regExp.test(inputChar)) 
      return;
    else
      e.preventDefault();
  }

  inputStars() {
    this.petInfo.stars = null;
  }

  inputPieces() {
    this.petInfo.pieces = null;
  }

  updateStars(value: string) {
    if (value.length == 0) 
      this.petInfo.stars = 0;
    this.data.starCount = this.petInfo.stars;
  }

  updatePieces(value: string) {
    if (value.length == 0)
      this.petInfo.pieces = 0;
    else {
      if (this.petInfo.stars == 0 && parseInt(value) > 9)
        this.petInfo.pieces = 0;
      if (this.petInfo.stars == 1 && parseInt(value) > 19)
        this.petInfo.pieces = 0;
      if (this.petInfo.stars == 2 && parseInt(value) > 49)
        this.petInfo.pieces = 0;
      if (this.petInfo.stars == 3 && parseInt(value) > 99)
        this.petInfo.pieces = 0;
      if (this.petInfo.stars == 4 && parseInt(value) > 149)
        this.petInfo.pieces = 0;
    }
    this.data.pieceCount = this.petInfo.pieces;
  }
}
