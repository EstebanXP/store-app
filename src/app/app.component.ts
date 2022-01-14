import { Component } from '@angular/core';


//decorator
//works to change the behavior of the component
@Component({
  selector: 'app-root',
  //app-root is the tag to use it on other components
  templateUrl: './app.component.html',

  //specific style sheets
  styleUrls: ['./app.component.css']
})

//here we put functionality
export class AppComponent {
  title = 'storeApp';
}
