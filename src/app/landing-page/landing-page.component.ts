import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AppRouting } from '../app-routing.module';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent {
  constructor(private router:Router){

  }
  onChanger():void{
    this.router.navigateByUrl('facesnaps');
  }
}
