import { Component, OnInit } from '@angular/core';
import { EvenLengthWordsComponentComponent } from '../even-length-words-component/even-length-words-component.component';
import { OddLengthWordsComponentComponent } from '../odd-length-words-component/odd-length-words-component.component';

@Component({
  selector: 'app-fun-nerd-event',
  standalone: true,
  imports: [EvenLengthWordsComponentComponent, OddLengthWordsComponentComponent],
  templateUrl: './fun-nerd-event.component.html',
  styleUrl: './fun-nerd-event.component.css'
})
export class FunNerdEventComponent implements OnInit{
  input: string = '';
  display1: string = '';
  display2: string = '';
  list1: any[] = [];
  list2: any[] = [];

  oninput(event :Event){
    const value = (event.target as HTMLInputElement).value;
    this.input = value;
  }

  // submit1(value: string){
  //   this.display1=value
  // }

  // submit2(value: string){
  //   this.display2=value
  // }

  addTask1(item: string) {
    this.list1.push({id:this.list1.length, name:item})
  }

  addTask2(item: string) {
    this.list2.push({id:this.list2.length, name:item})
  }

  ngOnInit(): void {
    
  }

}
