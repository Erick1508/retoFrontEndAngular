import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument} from '@angular/fire/firestore';
import { ClientInterface } from '../models/clientinterface';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RestClientService {

  clientsCollection: AngularFirestoreCollection<ClientInterface>;
  clients: Observable<ClientInterface[]>;
  clientDoc: AngularFirestoreDocument<ClientInterface>;

  constructor(public afs:AngularFirestore) { 
    //this.cursos = afs.collection('cursos').valueChanges();
    this.clientsCollection = afs.collection<ClientInterface>('clientes');
    this.clients = this.clientsCollection.snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as ClientInterface;
        const id = a.payload.doc.id;
        return {id, ... data};
      }))
    );
  }

  getClients(){
    return this.clients;
  }

  addClient(client: ClientInterface){
    this.clientsCollection.add(client);
  }

  deleteClient(client: ClientInterface){
    this.clientDoc = this.afs.doc(`clientes/${client.id}`);
    this.clientDoc.delete();
    return false;
  }

  updateClient(client: ClientInterface){
    this.clientDoc = this.afs.doc(`clientes/${client.id}`);
    this.clientDoc.update(client);
  }
  
}

