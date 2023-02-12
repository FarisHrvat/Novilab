// lab-notebook.component.ts
import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-lab-notebook',
  templateUrl: './lab-notebook.component.html',
  styleUrls: ['./lab-notebook.component.css']
})
export class LabNotebookComponent implements OnInit {
  notes: Observable<any[]>;
  newNote: string;

  constructor(private db: AngularFireDatabase) {
    this.notes = db.list('notes').valueChanges();
  }

  ngOnInit(): void {
  }

  addNote() {
    this.db.list('notes').push(this.newNote);
    this.newNote = '';
  }

  deleteAll() {
    this.db.list('notes').remove();
  }
}
