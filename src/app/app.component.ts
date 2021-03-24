import { Component, OnChanges, OnInit } from '@angular/core';
import { Note } from './note';
import { NotesService } from './notes.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  errMessage: string = "";
  notes: Note = new Note();
  constructor(private noteService: NotesService) {

  }
  step = 0;

  setStep(index: number) {
    this.step = index;
  }

  nextStep() {
    this.step++;
  }

  prevStep() {
    this.step--;
  }


  //function to add note
  addNote() {
    

    if (this.notes.title == '' || this.notes.text == '') {
      this.errMessage = "Title and Text both are required fields";
      return;
    }
    


    this.noteService.addNote(this.notes).subscribe((response) => {
      // alert("Note Saved in JSON Format")
      this.getNotes()
    }, (err) => {
      this.errMessage ="Http failure response for http://localhost:3000/notes: 404 Not Found"
      return;
    })

    this.step++;

  }


  noteList: Array<Note> = []
  ngOnInit(): void {
    this.getNotes()
    
  }



    getNotes() {
    this.noteService.getNotes().subscribe((response) => {
      this.noteList = response
    }, (err) => {
      console.log(err)
      this.errMessage = "Http failure response for http://localhost:3000/notes: 404 Not Found"
      return;
    })
  }
}
