import { Component, OnDestroy } from '@angular/core';
import { AngularFireDatabase, AngularFireObject } from 'angularfire2/database';
import * as firebase from 'firebase';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent  {
  courses$: Observable<any[]>;//todo retorno do metodo List é um Observable<any[]>
  itemRef: AngularFireObject<any>;



  constructor(private db: AngularFireDatabase) {
     this.courses$ =  db.list('/courses').valueChanges();
     console.log(this.courses$);
     this.itemRef = this.db.object('/courses');
   };

   add(data: HTMLInputElement){
     console.log(data.value);
     this.itemRef.set({name: data.value, isPremium: false, student: 10000});
    // this.itemRef.
     data.value = '';
    }
   update(course){
     this.itemRef.update({name:' Tony o novo nome'})
   }

} // end class
