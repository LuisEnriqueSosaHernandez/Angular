import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-callback',
  templateUrl: './callback.component.html',
  styles: [
  ]
})
export class CallbackComponent implements OnInit {

  constructor(private auth:AuthService) { }

  ngOnInit(): void {
    // this.auth.handleAuthCallback();
  }

}
