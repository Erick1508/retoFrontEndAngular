import { Component, OnInit } from '@angular/core';
import { ClientInterface } from 'src/app/models/clientinterface';
import { NgForm } from '@angular/forms';
import { RestClientService } from 'src/app/services/rest-client.service';

@Component({
  selector: 'app-add-client',
  templateUrl: './add-client.component.html',
  styleUrls: ['./add-client.component.css']
})
export class AddClientComponent implements OnInit {

  client: ClientInterface = {
    name: '',
    lastname: '',
    age: 0,
    birthday: null
  };

  constructor(private restClient: RestClientService) { }

  ngOnInit(): void {
  }

  onSaveClient(myFomr: NgForm){
    this.restClient.addClient(this.client);
    myFomr.resetForm();
  }

}
