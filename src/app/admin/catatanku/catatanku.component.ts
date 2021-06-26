import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CatatanDetailComponent } from '../catatan-detail/catatan-detail.component';

@Component({
  selector: 'app-catatanku',
  templateUrl: './catatanku.component.html',
  styleUrls: ['./catatanku.component.scss']
})
export class CatatankuComponent implements OnInit {
  title:any;
  note:any={};
  notes:any=[];
  constructor(
    public dialog:MatDialog
  ) { }

  ngOnInit(): void {
    this.title='Catatanku';
    this.note={
      week:'pertama',
      activity:'olahraga',
      progress:'tubuh lebih sehat dan bugar'
    };
    this.getNotes();
  }
getNotes()
{
  this.notes=[
    {
      week:'pertama',
      activity:'olahraga',
      progress:'tubuh lebih sehat dan bugar'
    },
    {
      week:'kedua',
      activity:'makan makanan bernutrisi',
      progress:'berat badan sedikit menurun'
    }
  ];
}
catatanDetail(data: any, idx: any) {
  let dialog = this.dialog.open(CatatanDetailComponent, {
    width: '400px',
    data: data
  });
  dialog.afterClosed().subscribe(res => {
    if (res) {
      //jika idx=-1 (penambahan data baru) maka tambahkan data
      if (idx == -1) this.notes.push(res);
      //jika tidak maka perbarui data
      else this.notes[idx] = data;
    }
  })
}
deleteCatatan(idx:any)
{
  var conf=confirm('Delete item?');
  if(conf)
  this.notes.splice(idx,1);
}
}
