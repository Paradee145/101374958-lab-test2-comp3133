import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterModule, Router } from '@angular/router';
import { SpacexService } from '../../services/spacex.service';
import { Launch } from '../../models/launch.model';

@Component({
  selector: 'app-missionlist',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatToolbarModule, RouterModule],
  templateUrl: './missionlist.component.html',
  styleUrls: ['./missionlist.component.css']
})
export class MissionlistComponent implements OnInit {
  launches: Launch[] = [];

  constructor(private spacexService: SpacexService, private router: Router) {}

  ngOnInit(): void {
    this.spacexService.getAllLaunches().subscribe((data: Launch[]) => {
      this.launches = data;
    });
  }

  openDetails(flight_number: number): void {
    this.router.navigate(['/mission', flight_number]);
  }
}

