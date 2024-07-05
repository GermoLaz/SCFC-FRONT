import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import {  Difference } from '../models/differences.model';

@Injectable({
  providedIn: 'root'
})
export class DifferenceService {
  private differenceSource = new BehaviorSubject<Difference[]>([]);
  currentDifferences = this.differenceSource.asObservable();

  constructor() { }

  changeDifferences(differences: Difference[]) {
    this.differenceSource.next(differences);
  }
}
