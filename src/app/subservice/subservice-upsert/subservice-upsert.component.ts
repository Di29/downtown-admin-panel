import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {NgbTypeahead} from '@ng-bootstrap/ng-bootstrap';
import { Observable, Subject, merge } from 'rxjs';
import {debounceTime, distinctUntilChanged, filter, map} from 'rxjs/operators';

import { ServiceService } from '../../_services/service.service';
import { Subservice } from 'src/app/_models/subservice';
import { SubserviceService } from 'src/app/_services/subservice.service';
import { AlertifyService } from 'src/app/_services/alertify.service';
import { Service } from 'src/app/_models/service';

@Component({
  selector: 'app-subservice-upsert',
  templateUrl: './subservice-upsert.component.html',
  styleUrls: ['./subservice-upsert.component.css']
})
export class SubserviceUpsertComponent implements OnInit {
  subservice: Subservice;
  subservices: Observable<Subservice[]>;
  action: string;
  ready: boolean;
  services: Observable<Service[]>;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private subserviceService: SubserviceService,
    private serviceService: ServiceService,
    private alertify: AlertifyService
  ) { }

  ngOnInit() {
    this.ready = false;
    this.subservice = new Subservice();

    this.subservice.id = this.route.snapshot.params.id;
    this.action = 'Create';
    if (this.subservice.id) {
      this.load();
    }
    this.subservices = this.subserviceService.getAllSubservices();
    this.ready = true;
    this.services = this.serviceService.getAllServices();
  }


  load() {
    this.action = 'Update';
    this.subserviceService.getSubservice(this.subservice.id).subscribe(
      (service: Subservice) => {
        this.subservice = service;
      },
      (error) => {
        this.alertify.error(error);
      }
    )
  }

  updateSubservice() {
    this.subserviceService.updateSubservice(this.subservice).subscribe(
      (data) => {
        console.log(data);
        this.alertify.success("Подсервис успешно изменен");
      },
      (error) => {
        console.log(error);
        this.alertify.success("Подсервис успешно изменен");
      }
    );
  }

  save() {
    this.subserviceService.createSubservice(this.subservice).subscribe( next => {
        this.alertify.success("Сервис успешно создан");
      },
      error => { 
        this.alertify.success("Сервис успешно создан");
        console.log(error);
      }
    );
    this.subservice = new Subservice();
    this.gotoList();
  }

  gotoList() {
    this.subservice = new Subservice();
    this.router.navigate(['/subservices']);
  }

  onSubmit() {
    if (this.subservice.id) {
      this.updateSubservice();
    } else {
      this.save();
    }
  }

}
