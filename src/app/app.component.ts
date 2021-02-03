import { Component, OnDestroy } from '@angular/core';
import { FirebaseDatabase } from 'angularfire2';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent  {
  courses$: Observable<any>;
  courses$04: Observable<any>;
  courses: any[] = [];
  subscrition:Subscription;

  constructor(private db: AngularFireDatabase) {
   this.subscrition = this.db
    .list('/courses')
    .valueChanges()
    .subscribe((data) => {
      (this.courses = data), console.log(data)});
      
    this.courses$ = this.db.list('/courses').valueChanges();
    this.courses$04 = this.db.object('/courses/4').valueChanges();

   };


} // end class
