import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-catatan-detail',
  templateUrl: './catatan-detail.component.html',
  styleUrls: ['./catatan-detail.component.scss']
})
export class CatatanDetailComponent implements OnInit {

  constructor(
    public dialogRef:MatDialogRef<CatatanDetailComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public api:ApiService
  ) { }

  ngOnInit(): void {
  }
  loading!: boolean;
  saveData()
  {
    this.loading=true;
    if(this.data.id == undefined)
    {
      this.api.post('books', this.data).subscribe(result=>{
        this.dialogRef.close(result);
        this.loading=false;
    }, error=>{
      this.loading=false;
      alert('Tidak dapat menyimpan data');
    });   
  }else{
    this.api.put('books/'+this.data.id,this.data).subscribe(result=>{
      this.dialogRef.close(result);
      this.loading=false;
  }, error=>{
    this.loading=false;
    alert('Tidak dapat memperbarui data');
  })
}
  }
}