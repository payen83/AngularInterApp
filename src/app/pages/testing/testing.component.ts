import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-testing',
  templateUrl: './testing.component.html',
  styleUrls: ['./testing.component.scss']
})
export class TestingComponent implements OnInit {
  public totalVotes: number;
  constructor() { 
    this.totalVotes = 0;
  }

  upVote(){
    this.totalVotes++;
  }

  downVote(){
    this.totalVotes--;
  }

  ngOnInit(): void {
    
  }

}
