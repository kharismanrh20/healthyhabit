import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tipsdietsehat',
  templateUrl: './tipsdietsehat.component.html',
  styleUrls: ['./tipsdietsehat.component.scss']
})
export class TipsdietsehatComponent implements OnInit {
  title:any;
  constructor() { }

  ngOnInit(): void {
    this.title='Tips Diet Sehat';
  }

}
