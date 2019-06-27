import { Component, Inject } from '@angular/core';
import { RestService } from './rest.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name;city;data
constructor(@Inject(RestService) public ser){this.fun_data()}

fun_data(){
  this.ser.fun_get_data().subscribe(dt=>{
  this.data=dt.msg
  })
}

}
