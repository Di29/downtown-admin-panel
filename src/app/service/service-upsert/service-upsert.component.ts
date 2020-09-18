import { Component, OnInit } from '@angular/core';
import { Service } from 'src/app/_models/service';
import { ActivatedRoute, Router } from '@angular/router';
import { ServiceService } from 'src/app/_services/service.service';
import { AlertifyService } from 'src/app/_services/alertify.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-service-upsert',
  templateUrl: './service-upsert.component.html',
  styleUrls: ['./service-upsert.component.css']
})
export class ServiceUpsertComponent implements OnInit {
  service: Service;
  services: Observable<Service[]>;
  action: string;
  ready: boolean;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private serviceService: ServiceService,
    private alertify: AlertifyService
  ) { }

  ngOnInit() {
    this.ready = false;
    this.service = new Service();

    this.service.id = this.route.snapshot.params.id;
    this.action = 'Create';
    if (this.service.id) {
      this.load();
    }
    this.services = this.serviceService.getAllServices();
    this.ready = true;
  }

  load() {
    this.action = 'Update';
    this.serviceService.getServcie(this.service.id).subscribe(
      (service: Service) => {
        this.service = service;
      },
      (error) => {
        this.alertify.error(error);
      }
    )
  }

  updateService() {
    this.serviceService.updateService(this.service).subscribe(
      (data) => {
        console.log(data);
        this.alertify.success("Сервис успешно изменен");
      },
      (error) => {
        console.log(error);
        this.alertify.success("Сервис успешно изменен");
      }
    );
  }

  save() {
    this.serviceService.createService(this.service).subscribe( next => {
        this.alertify.success("Сервис успешно создан");
      },
      error => { 
        this.alertify.success("Сервис успешно создан");
        console.log(error);
      }
    );
    this.service = new Service();
    this.gotoList();
  }

  onSubmit() {
    if (this.service.id) {
      this.updateService();
    } else {
      this.save();
    }
  }

  gotoList() {
    this.service = new Service();
    this.router.navigate(['/services']);
  }

}
