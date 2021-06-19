import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-catatanku',
  templateUrl: './catatanku.component.html',
  styleUrls: ['./catatanku.component.scss']
})
export class CatatankuComponent implements OnInit {
  title:any;
  constructor() { }

  ngOnInit(): void {
    this.title='Catatanku';
  }

}
