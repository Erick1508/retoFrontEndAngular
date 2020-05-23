import { Component, OnInit } from '@angular/core';
import { ClientInterface } from 'src/app/models/clientinterface';
import { NgForm } from '@angular/forms';
import { RestClientService } from 'src/app/services/rest-client.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-client',
  templateUrl: './add-client.component.html',
  styleUrls: ['./add-client.component.css']
})
export class AddClientComponent implements OnInit {

  client: ClientInterface = {
    name: ' ',
    lastname: ' ',
    age: null,
    birthday: null
  };

  constructor(
    private restClient: RestClientService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  onSaveClient(myFomr: NgForm){
    if (myFomr.valid){
      this.restClient.addClient(this.client);
      myFomr.resetForm();
      this.router.navigate(['/']);
    }
    
  }

}
