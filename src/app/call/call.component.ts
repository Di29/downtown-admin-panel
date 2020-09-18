import { Component, OnInit } from '@angular/core';
import { Call } from '../_models/call';
import { CallService } from 'src/app/_services/call.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-call',
  templateUrl: './call.component.html',
  styleUrls: ['./call.component.css']
})
export class CallComponent implements OnInit {
  calls: Observable<Call[]>;

  constructor(
    private callService: CallService
  ) { }

  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    this.calls =  this.callService.getAllCalls();
  }



}
