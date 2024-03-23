import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ActivityRespDTO } from 'src/app/core/model/ActivityRespDTO.model';
import { ActivityService } from 'src/app/core/service/activity.service';

@Component({
  selector: 'app-poste',
  templateUrl: './poste.component.html',
  styleUrls: ['./poste.component.css']
})
export class PosteComponent {
  postId!: string;
  activity: ActivityRespDTO | null = null; // Initialize activity as null

  constructor(
    private route: ActivatedRoute,
    private activityService: ActivityService
  ) {}

  ngOnInit(): void {
    // Get the ID from the route parameters
    const idParam = this.route.snapshot.paramMap.get('id');
    if (idParam !== null) {
      this.postId = idParam;
      // Call your service method to fetch activity details
      this.fetchActivityDetails();
    } else {
      console.error('ID parameter is null.');
      // Handle the case where ID parameter is null
    }
  }
  

  fetchActivityDetails(): void {
    const activityId = Number(this.postId); // Convert postId to a number if needed
    
    this.activityService.getActivityById(activityId).subscribe(
      (response) => {
        this.activity = response; // Assign the fetched activity details to the activity property
       console.log(this.activity);
       
      },
      (error) => {
        console.error('Error fetching activity details:', error);
        // Handle error if needed
      }
    );
  }
}
