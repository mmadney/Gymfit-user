import { Component, OnInit } from '@angular/core';
import { Gym } from 'app/_Models/Gym';
import { GymService } from 'app/_services/gym.service';

@Component({
  selector: 'app-gyms',
  templateUrl: './gyms.component.html',
  styleUrls: ['./gyms.component.scss']
})
export class GymsComponent implements OnInit {
  gyms:Gym[];
  constructor(public gymService:GymService) { }

  ngOnInit() {
    this.gymService.getGyms().subscribe(res => {
      this.gyms = res['Gyms'];
    });
  }

}
