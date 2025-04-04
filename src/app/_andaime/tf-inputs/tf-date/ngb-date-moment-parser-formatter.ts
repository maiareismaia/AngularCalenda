import { NgbDateParserFormatter, NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import moment from 'moment';
import { Injectable } from '@angular/core';

@Injectable()

export class NgbDateMomentParserFormatter extends NgbDateParserFormatter {
  private momentFormat = 'DD/MM/YYYY';
  constructor() {
    super();
  }
  format(date: NgbDateStruct): string {
    if (date === null) {
      return '';
    }
    let d = moment({ year: date.year, month: date.month - 1, date: date.day });
    return d.isValid() ? d.format(this.momentFormat) : '';
  }

  parse(value: string): NgbDateStruct {
    if (!value) {
      return null;
    }
    let d = moment(value, this.momentFormat);
    return d.isValid()
      ? { year: d.year(), month: d.month() + 1, day: d.date() }
      : null;
  }

}