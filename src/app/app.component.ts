import { Component, OnDestroy } from '@angular/core';
import { AngularFireDatabase, AngularFireObject } from 'angularfire2/database';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent  {
  courses$: Observable<any[]>;//todo retorno do metodo List é um Observable<any[]>
  courses$New: AngularFireObject<any>;
  courses$Add: Observable<any>;
  courses$04: Observable<any>;
  author: Observable<any>;
  courses: any[] = [];
  subscrition:Subscription;

  constructor(private db: AngularFireDatabase) {
   this.subscrition = this.db
    .list('/courses')
    .valueChanges()
    .subscribe((data) => {
      (this.courses = data)});

    this.courses$ = this.db.list('/courses').valueChanges();
    this.courses$04 = this.db.object('/courses/4').valueChanges();
    this.author = this.db.object('courses/author/1').valueChanges();
    this.courses$New = this.db.object('/courses');
    this.courses$Add = this.courses$New.valueChanges();

   };

   add(data: HTMLInputElement){
     console.log(data.value)
     this.courses$New.set({value: data.value});
     this.courses$

     data.value = '';

   }


} // end class
