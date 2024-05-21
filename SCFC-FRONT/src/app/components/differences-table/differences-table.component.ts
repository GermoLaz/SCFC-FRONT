import { DifferenceService } from './../../services/difference.service';
import { Component, OnInit } from '@angular/core';
import { Difference } from '../../models/difference.model';

@Component({
  selector: 'app-differences-table',
  templateUrl: './differences-table.component.html',
  styleUrls: ['./differences-table.component.css']
})
export class DifferenceTableComponent implements OnInit {
  differencesFromFile1: Difference[] = [];
  differencesFromFile2: Difference[] = [];

  constructor(private differenceService: DifferenceService) { }

  ngOnInit(): void {
    this.differenceService.currentDifferences.subscribe(differences => {
      this.differencesFromFile1 = differences.differencesFromFile1;
      this.differencesFromFile2 = differences.differencesFromFile2;
    });
  }


}
