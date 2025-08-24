import { Component, OnInit } from '@angular/core';
import { PollService } from '../poll.service';
import { Poll } from '../poll.models';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-poll',
  imports: [CommonModule, FormsModule],
  templateUrl: './poll.component.html',
  styleUrls: ['./poll.component.css']
})
export class PollComponent implements OnInit {
 newPoll : Poll = {
  question: '',
  options: [
    {optionText: '', voteCount: 0},
    {optionText: '', voteCount: 0}
  ]
} as Poll;   //  cast to Poll so TS accepts it

  polls : Poll[] = [];

  constructor(private pollService : PollService){}

  ngOnInit(){
    this.loadPolls();
  }

  loadPolls() {
    this.pollService.getPolls().subscribe({
      next:(data) =>{
        this.polls = data;
      }
      ,
      error: (error)=>{
        console.error("error fetching polls:" , error);
      }
      
    });  

  }

  createPoll(){
    this.pollService.createPoll(this.newPoll).subscribe({
      next:(createdPoll) =>{
        this.polls.push(createdPoll);
         //  Reset the form
        this.newPoll = {
          question: '',
          options: [
            { optionText: '', voteCount: 0 },
            { optionText: '', voteCount: 0 }
          ]
        } as Poll;
      }
      ,
      error: (error)=>{
        console.error("error creating polls:" , error);
      }   
    });
  }

  addOption(){
    this.newPoll.options.push({ optionText: '', voteCount: 0 });
  }

  vote(pollId: number, optionIndex: number){
    this.pollService.vote(pollId,optionIndex).subscribe({
         next:() =>{
          const poll = this.polls.find(p => p.id === pollId);
          if(poll){
            poll.options[optionIndex].voteCount++;
          }
        }
      ,
      error: (error)=>{
        console.error("error voting on a poll :" , error);
      }
    });
  }



  trackByIndex(index: number): number{
    return index;
  }

}
