import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ApiService } from 'src/app/services/api.service';
import { CatatanDetailComponent } from '../catatan-detail/catatan-detail.component';

@Component({
  selector: 'app-catatanku',
  templateUrl: './catatanku.component.html',
  styleUrls: ['./catatanku.component.scss']
})
export class CatatankuComponent implements OnInit {
  title:any;
  book:any={};
  books:any=[];
  constructor(
    public dialog:MatDialog,
    public api:ApiService
  ) { }

  ngOnInit(): void {
  }
  loading!: boolean;
getBooks()
{
  this.loading=true;
  this.api.get('books').subscribe(result=>{
    this.books=result;
    this.loading=false;
  }, error=>{
    this.loading=false;
    alert('Tidak dapat mengambil data');
  })
}
catatanDetail(data: any, idx: any) {
  let dialog = this.dialog.open(CatatanDetailComponent, {
    width: '400px',
    data: data
  });
  dialog.afterClosed().subscribe(res => {
    if (res) {
      //jika idx=-1 (penambahan data baru) maka tambahkan data
      if (idx == -1) this.books.push(res);
      //jika tidak maka perbarui data
      else this.books[idx] = data;
    }
  })
}
loadingDelete:any={};
deleteCatatan(id: any, idx:any)
{
  var conf=confirm('Delete item?');
  if(conf)
  {
    this.loadingDelete[idx]=true;
    this.api.delete('books/'+id).subscribe(res=>{
      this.books.splice(idx,1);
      this.loadingDelete[idx]=false;
    }, error=>{
      this.loadingDelete[idx]=false;
      alert('Tidak dapat menghapus data');
    });
  }

}
}
