import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-catatan-detail',
  templateUrl: './catatan-detail.component.html',
  styleUrls: ['./catatan-detail.component.scss']
})
export class CatatanDetailComponent implements OnInit {

  constructor(
    public dialogRef:MatDialogRef<CatatanDetailComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  ngOnInit(): void {
  }
  saveData()
  {
    this.dialogRef.close(this.data);
  }
}
