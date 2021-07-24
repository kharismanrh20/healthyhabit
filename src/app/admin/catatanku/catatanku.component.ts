import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
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
  books:any=[];
  userData: any={};
  constructor(
    public dialog:MatDialog,
    public api:ApiService,
    public db: AngularFirestore,
    public auth: AngularFireAuth
  ) { }

  ngOnInit(): void {
    this.title='Catatanku';
    this.auth.user.subscribe(user=>{
      this.userData = user;
      this.getBooks();
    });
  }
  loading!: boolean;
getBooks()
{
  this.loading=true;
  this.db.collection('books', ref=>{
    return ref.where('uid','==', this.userData.uid);
  }).valueChanges({idField : 'id'}).subscribe(res=>{
    console.log(res);
    this.books=res;
    this.loading=false;
  },err=>{
    this.loading=false;
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
    this.db.collection('books').doc(id).delete().then(res=>{
      this.books.splice(idx,1);
      this.loadingDelete[idx]=false;
    }).catch(err=>{
      this.loadingDelete[idx]=false;
      alert('Tidak dapat menghapus data');
    });
  }

}
}
