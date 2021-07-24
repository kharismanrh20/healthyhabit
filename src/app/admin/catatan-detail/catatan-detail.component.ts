import { Component, Inject, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ApiService } from 'src/app/services/api.service';


@Component({
  selector: 'app-catatan-detail',
  templateUrl: './catatan-detail.component.html',
  styleUrls: ['./catatan-detail.component.scss']
})
export class CatatanDetailComponent implements OnInit {

  userData: any={};
  constructor(
    public dialogRef:MatDialogRef<CatatanDetailComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public api:ApiService,
    public db: AngularFirestore,
    public auth: AngularFireAuth
  ) { }

  ngOnInit(): void {
    this.auth.user.subscribe(res=>{
      this.userData = res;
    });
  }
  loading!: boolean;
  saveData()
  {
    this.loading=true;
    if(this.data.id == undefined)
    {
     let doc = new Date().getTime().toString();
     this.data.uid= this.userData.uid;
     this.db.collection('books').doc(doc).set(this.data).then(res=>{
      this.dialogRef.close(this.data);
      this.loading=false;
     }).catch(er=>{
       console.log(er);
       this.loading=false;
       alert('Tidak dapat menyimpan data');
     })  
  }else{

     this.db.collection('books').doc(this.data.id).update(this.data).then(res=>{
      this.dialogRef.close(this.data);
      this.loading=false;
     }).catch(er=>{
       console.log(er);
       this.loading=false;
       alert('Tidak dapat menyimpan data');
     })  
}
  }
}