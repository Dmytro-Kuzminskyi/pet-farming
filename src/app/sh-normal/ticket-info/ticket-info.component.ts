import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ticket-info',
  templateUrl: './ticket-info.component.html',
  styleUrls: ['./ticket-info.component.css']
})
export class TicketInfoComponent implements OnInit {

  basicTickets: number = 10;
  redeemCount: number = 0;

  constructor() { }

  ngOnInit() {
  }

}
