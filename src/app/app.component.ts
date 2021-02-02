import { Component } from '@angular/core';
import { FirebaseDatabase } from 'angularfire2';
import { AngularFireDatabase } from 'angularfire2/database';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  courses: any[]= [];
  constructor(private db: AngularFireDatabase){
    this.courses.push( this.db.list<any>('/courses').query.get());
    console.log(this.courses, "nosso courses");

  }
  title = 'firebase-demo';




}// end class
