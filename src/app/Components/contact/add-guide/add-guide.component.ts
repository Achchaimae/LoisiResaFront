
import { ChangeDetectorRef, Component, Input } from '@angular/core';
import { GuideRespDTO } from 'src/app/core/model/GuideRespDTO.model';
import { GuideService } from 'src/app/core/service/guide.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-guide',
  templateUrl: './add-guide.component.html',
  styleUrls: ['./add-guide.component.css']
})
export class AddGuideComponent {
  guides: GuideRespDTO[] = [];
  selectedGuideId: number | undefined; // Change the type to number
  selectedGuide: GuideRespDTO | undefined;
  open = false;
  @Input() clubId: number | undefined;

  constructor(public guideService: GuideService, private cdr: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.getGuides();
  }

  toggle() {
    this.open = !this.open;
    this.cdr.detectChanges(); // Force change detection
  }

  getGuides() {
    this.guideService.getGuides(0).subscribe(
      (data: any) => {
        console.log("Data received:", data);
        if (data && data.content && Array.isArray(data.content)) {
          this.guides = data.content;
        } else {
          console.error("Invalid data format received.");
        }
      },
      error => {
        console.error("Error fetching guides:", error);
      }
    );
  }

  selectGuide(guide: GuideRespDTO) {
    this.selectedGuide = guide;
    this.selectedGuideId = Number(guide.id); // Convert the id to a number
    console.log(this.selectedGuideId);

    
    this.open = false;
  }

  addGuideToClub() {
    if (this.selectedGuideId !== undefined && this.clubId !== undefined) {
      this.guideService.addGuideToClub(this.selectedGuideId, this.clubId).subscribe(
        (response: GuideRespDTO) => {
          console.log('Guide added to club:', response);
          Swal.fire({
            icon: 'success',
            title: 'Guide added to club successfully',
            showConfirmButton: false,
            timer: 1500
          });
          console.log(this.selectGuide);
          console.log(this.selectedGuideId);
          console.log(this.clubId);
          
          
          
        },
        (error) => {
          console.error('Error adding guide to club:', error);
          Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'Failed to add guide to club',
            showConfirmButton: false,
            timer: 1500
            
          });
          console.log(this.selectGuide);
          console.log(this.selectedGuideId);
          console.log(this.clubId);
        }
      );
    } else {
      console.error('No guide selected or club ID is missing.');
    }
  }
}


