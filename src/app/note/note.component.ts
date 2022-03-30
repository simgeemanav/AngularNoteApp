import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.css']
})
export class NoteComponent implements OnInit {

  noteTitle = ''
  noteDetail= ''
  notes :any[] = []

  constructor() {
   this.fncAllDataLocal()

   }

  ngOnInit(): void {
  }
   //insert
   fncInsert(){
     const nt = {
       noteTitle: this.noteTitle,
       noteDetail: this.noteDetail
     }

     const ntItem =JSON.stringify(nt)
      this.fncAddLocal(ntItem)
      this.fncAllDataLocal()

   }

   //LocalStorage

   fncAddLocal( item: string) {
     const local = localStorage.getItem("notes")
     if( local ){
       const arr = JSON.parse(local);
       arr.push( JSON.parse(item) )
       localStorage.setItem('notes', JSON.stringify(arr))

     }else{
       localStorage.setItem("notes", '['+item+']')
     }
   }

   //data result
   fncAllDataLocal(){
     const st = localStorage.getItem ( 'notes' )
     if( st ){
        this.notes = JSON.parse(st);
     }
   }

   //data remove
   fncDataRemove( index:number){
     //dizi elemanı silme
     const alert = confirm ('Are you sure you want to delete?')
     if( alert==true){
      this.notes.splice(index,1)
      localStorage.setItem('notes', JSON.stringify(this.notes))
     }
     
   }

   //data update - select
   index = -1
    fncDataUpdate (index:number){
      this.index = index 
      const item = this.notes[index]
      this.noteTitle = item ['noteTitle']
      this.noteDetail = item ['noteDetail']

    }
    fncUpdate(){
      const item = {
        noteTitle: this.noteTitle,
        noteDetail: this.noteDetail
      }
      this.notes[this.index] = item
      localStorage.setItem('notes', JSON.stringify(this.notes))
      this.fncAllDataLocal()
      this.index = -1
      this.noteTitle = ''
      this.noteDetail = ''

    }
   }


