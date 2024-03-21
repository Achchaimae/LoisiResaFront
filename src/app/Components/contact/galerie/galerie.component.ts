import { Component, Input, OnInit } from '@angular/core'; // Import OnInit interface
import { ActivityRespDTO } from 'src/app/core/model/ActivityRespDTO.model';
import { ActivityService } from 'src/app/core/service/activity.service';

@Component({
  selector: 'app-galerie',
  templateUrl: './galerie.component.html',
  styleUrls: ['./galerie.component.css']
})
export class GalerieComponent implements OnInit { // Implement OnInit interface
  @Input() activityId: number | undefined;
  activity: ActivityRespDTO | undefined; // Declare activity property

  constructor(private activityService: ActivityService) {}

  ngOnInit(): void {
    if (this.activityId) {
      this.getActivityDetails();
    } else {
      console.error('Activity ID is undefined.');
    }
  }

  getActivityDetails(): void {
    this.activityService.getActivityById(this.activityId!)
      .subscribe(
        (data: ActivityRespDTO) => {
          this.activity = data;
          console.log('Activity Details:', this.activity);
        },
        error => {
          console.error('Error fetching activity details:', error);
        }
      );
  }
}
