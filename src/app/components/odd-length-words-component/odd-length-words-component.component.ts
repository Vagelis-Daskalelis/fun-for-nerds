import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-odd-length-words-component',
  standalone: true,
  imports: [],
  templateUrl: './odd-length-words-component.component.html',
  styleUrl: './odd-length-words-component.component.css'
})
export class OddLengthWordsComponentComponent implements OnInit{

 @Input() input: string = '';
 @Input()  list2: any[] = [];

  ngOnInit(): void {
    
  }
}
