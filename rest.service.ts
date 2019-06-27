import { Injectable, Inject } from '@angular/core';
import{HttpClient} from "@angular/common/http"


@Injectable({
  providedIn: 'root'
})
export class RestService {

  constructor(@Inject(HttpClient) public ht) {}
  fun_get_data(){
  return(  this.ht.get("/get_data") );
     alert("in service working")
  }


}
