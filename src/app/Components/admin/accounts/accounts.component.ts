import { Component } from '@angular/core';
import { User } from 'src/app/core/model/User.model';
import { UserResp } from 'src/app/core/model/UserResp.model';
import { AuthService } from 'src/app/core/service/auth.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-accounts',
  templateUrl: './accounts.component.html',
  styleUrls: ['./accounts.component.css']
})
export class AccountsComponent {
  accounts:UserResp[]=[];
  constructor(public authService :AuthService){}
  ngOnInit(){
    this.getData();
    console.log(this.accounts);
    
  }

 
  getData() {
    this.authService.getUserBystatus(1).subscribe(
      data => {
        console.log("Data received:", data); // Log the received data
  
        if (Array.isArray(data)) {
          this.accounts = data;
        } else if (data instanceof Object) {
          this.accounts = [data]; // Convert the object to an array with a single element
        } else {
          console.error("Invalid data format:", data); // Log error for invalid data format
        }
      },
      error => {
        console.error("Error fetching members:", error); // Log any errors that occur during the request
      }
    );
  }

  updateRole(account: UserResp) {
    Swal.fire({
      title: 'Select new role',
      input: 'select',
      inputOptions: {
        'client': 'client',
        'guide': 'guide',
        'contact': 'contact'
      },
      showCancelButton: true,
      confirmButtonText: 'Update',
      cancelButtonText: 'Cancel',
      showLoaderOnConfirm: true,
      preConfirm: (newRole) => {
        return this.authService.updateUserRole(account.id, newRole).toPromise()
          .then(() => {
            return newRole;
          })
          .catch(error => {
            Swal.showValidationMessage(
              `Update failed: ${error.message}`
            );
          });
      },
      allowOutsideClick: () => !Swal.isLoading()
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          icon: 'success',
          title: 'Role updated successfully',
          showConfirmButton: false,
          timer: 1500
        });
      }
    });
    this.getData()
  }

  refuseRequest(account: UserResp) {
    this.authService.refuseRequest(account.id).subscribe(
      () => {
        Swal.fire({
          icon: 'success',
          title: 'Request refused successfully',
          showConfirmButton: false,
          timer: 1500
        });
        this.getData();
      },
      error => {
        console.error('Error refusing request:', error);
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: 'Failed to refuse request'
        });
      }
    );
  }
  
}
