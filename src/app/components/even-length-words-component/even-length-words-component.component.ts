import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-even-length-words-component',
  standalone: true,
  imports: [],
  templateUrl: './even-length-words-component.component.html',
  styleUrl: './even-length-words-component.component.css'
})
export class EvenLengthWordsComponentComponent implements OnInit{


  @Input() input: string = '';
  @Input() list1: any[] = [];

  ngOnInit(): void {
    
  }
}
