import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'formsTDTask';
  defaultSubscription = 'Advanced';
  subscriptions = ['Basic', 'Advanced', 'Pro'];

  user = {
    email: '',
    subscription: '',
    password: ''
  };

  onSubmit(form: NgForm) {
    this.user.email = form.value.email;
    this.user.subscription = form.value.subscription;
    this.user.password = form.value.password;
    console.log(form.value);
    form.resetForm({subscription: this.defaultSubscription});
  }
}
