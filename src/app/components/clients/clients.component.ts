import { Component, OnInit } from '@angular/core';
import { ClientInterface } from 'src/app/models/clientinterface';
import { RestClientService } from 'src/app/services/rest-client.service';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})
export class ClientsComponent implements OnInit {
  clients: ClientInterface[];
  avegareAge: number = 0;
  standarDes: number = 0;
  
  constructor(private restClient: RestClientService) { }

  ngOnInit(): void {
    this.restClient.getClients().subscribe(clients => {
      this.clients = clients;
      let acum: number = 0;
      let acumDS: number = 0;
      for(let i= 0; i < this.clients.length; i++){
        acum += this.clients[i].age;
        let date = new Date(this.clients[i].birthday+'T00:00:00');
        this.clients[i].deathDate = 
         new Date(date.getFullYear() + 80,
                  date.getMonth(),
                  date.getDate());
        
      }
      if (this.clients.length != 0){
        this.avegareAge = acum/this.clients.length;
        for(let i= 0; i < this.clients.length; i++){
          acumDS += Math.pow(this.clients[i].age - this.avegareAge,2);
        }
        this.standarDes = Math.pow(acumDS/this.clients.length, 0.5);

      }
    });
    
    
  }



}
