import { Component, OnInit } from '@angular/core';
import { Register } from 'src/app/model/register';
import { Observable } from 'rxjs';
import { RegisterService } from 'src/app/service/register.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Signup } from 'src/app/model/signup';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  reg: Register;
  msg: string;
  isNew: boolean;
  signup =new Signup(0,"","","");
  constructor(private registerService: RegisterService,
    private actRoute: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    let userId = this.actRoute.snapshot.params.id;

    if (userId) {
      this.isNew = false;
      this.registerService.getById(userId).subscribe(
        (data) => {
          this.reg = data;
        }
      );
    } else {
      this.isNew = true;
      this.reg = {
        userId: 0,
        userName: '',
        password: '',
        role: ''
      };
    }
  }

  save() {
    let ob: Observable<Register>;

    if (this.isNew) {
      ob = this.registerService.add(this.reg);
    }
    ob.subscribe(
      (data) => {
        
        this.router.navigateByUrl("/home");
      },
      (errResponse) => {
        this.msg = errResponse.error;

      }
    );
  }
}
