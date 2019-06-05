import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormGroup, FormBuilder } from '@angular/forms';

interface Pet {
  id: number;
  name: string;
  starCount: number;
  pieceCount: number;
  imagePath: string;
}

@Component({
  selector: 'app-edit-pet-info',
  templateUrl: './edit-pet-info.component.html',
  styleUrls: ['./edit-pet-info.component.css']
})
export class EditPetInfoComponent implements OnInit{

  form: FormGroup;
  petInfo: Pet;
  starCountInput: number;
  pieceCountInput: number;


  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<EditPetInfoComponent>, 
    @Inject(MAT_DIALOG_DATA) data) { 
      this.petInfo = data;
  }

  ngOnInit() {
    this.form = this.fb.group({
      starCountInput: [this.petInfo.starCount, []],
      pieceCountInput: [this.petInfo.pieceCount, []]
    });
  }

  onCancelClick() {
    this.dialogRef.close();
  }

  onSaveClick() {
    this.dialogRef.close(this.form.value);
  }

  inputCheckStars(e: KeyboardEvent) {
    if((e.keyCode >= 48 && e.keyCode <=53) || (e.keyCode >= 96 && e.keyCode <=101) || e.keyCode == 8) { 
      return;
    } else {
      e.preventDefault();
    }
  }

  inputCheckPieces(e: KeyboardEvent) {
    if((e.keyCode >= 48 && e.keyCode <=57) || (e.keyCode >= 96 && e.keyCode <=105) || e.keyCode == 8) { 
      return;
    } else {
      e.preventDefault();
    }
  }

  onCheckPieces() {
    if (this.form.get('starCountInput').value == 0 && this.form.get('pieceCountInput').value > 9)
      this.form.setValue({
        starCountInput: this.form.get('starCountInput').value,
        pieceCountInput: 0
      });
    if (this.form.get('starCountInput').value == 1 && this.form.get('pieceCountInput').value > 19)
      this.form.setValue({
        starCountInput: this.form.get('starCountInput').value,
        pieceCountInput: 0
      });
    if (this.form.get('starCountInput').value == 2 && this.form.get('pieceCountInput').value > 49)
      this.form.setValue({
        starCountInput: this.form.get('starCountInput').value,
        pieceCountInput: 0
      });
    if (this.form.get('starCountInput').value == 3 && this.form.get('pieceCountInput').value > 99)
      this.form.setValue({
        starCountInput: this.form.get('starCountInput').value,
        pieceCountInput: 0
      });
    if (this.form.get('starCountInput').value == 4 && this.form.get('pieceCountInput').value > 149)
      this.form.setValue({
        starCountInput: this.form.get('starCountInput').value,
        pieceCountInput: 0
      });
    if (this.form.get('starCountInput').value == null)
      this.form.setValue({
        starCountInput: 0,
        pieceCountInput: this.form.get('pieceCountInput').value
      });
    if (this.form.get('pieceCountInput').value == null)
      this.form.setValue({
        starCountInput: this.form.get('starCountInput').value,
        pieceCountInput: 0
      });
  }

}
