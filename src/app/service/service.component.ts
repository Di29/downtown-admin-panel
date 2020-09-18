import { Component, OnInit } from '@angular/core';
import { Service } from '../_models/service';
import { Observable } from 'rxjs';
import { ServiceService } from '../_services/service.service';
import { Router } from '@angular/router';
import { AlertifyService } from '../_services/alertify.service';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.css']
})
export class ServiceComponent implements OnInit {
  services: Observable<Service[]>;

  constructor(
    private serviceService: ServiceService,
    private alertify: AlertifyService,
    private router: Router) { }

  ngOnInit(){
    this.reloadData();
  }

  reloadData() {
    this.services = this.serviceService.getAllServices();
  }

  deleteService(id: number) {
    this.alertify.confirm(
      "Вы уверены что хотите удалить?" , () => {
        this.serviceService.deleteService(id).subscribe(
          data => {
            this.alertify.success(data);
            this.reloadData();
          },
          error => { 
          this.alertify.success("Сервис успешно удален");
          this.reloadData();
          }
        );
      }
    )
  }

  updateService(id: number) {
    this.router.navigate(['service/service-upsert', id]);
  }

  createService() {
    this.router.navigate(['service/service-upsert']);
  }

}
