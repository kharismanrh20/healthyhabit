import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tipssehat',
  templateUrl: './tipssehat.component.html',
  styleUrls: ['./tipssehat.component.scss']
})
export class TipssehatComponent implements OnInit {
title:any;
  constructor() { }

  ngOnInit(): void {
    this.title='Tips Sehat';
  }

}
