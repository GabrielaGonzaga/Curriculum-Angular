import { Component } from '@angular/core';

@Component({
  selector: 'ProfileComponent',
  templateUrl: 'ProfileComponent/index.html',
  styleUrls: ['ProfileComponent/style.css'],
})
export class ProfileComponent {
  name = 'Gabriela Gonzaga';
}

@Component({
  selector: 'CardComponent',
  templateUrl: 'CardComponent/index.html',
  styleUrls: ['CardComponent/style.css'],
})
export class CardComponent {
  name = 'Gabriela Gonzaga';
}


// @Component({
//   selector: 'ProfileComponent',
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.css'],
// })
// export class AppComponent {
//   name = 'Gabriela Gonzaga';
// }
