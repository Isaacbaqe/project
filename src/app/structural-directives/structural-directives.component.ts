import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-structural-directives',
  templateUrl: './structural-directives.component.html',
  styleUrls: ['./structural-directives.component.scss']
})
export class StructuralDirectivesComponent implements OnInit {
  test=true
  name="ITI"
car="logan"

colors=["red","blue","yelow","black"]

  constructor() { }

  ngOnInit(): void {
  }

}
