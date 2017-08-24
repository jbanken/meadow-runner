import { Pipe, PipeTransform } from '@angular/core';
@Pipe({name: 'phone'})
export class PhonePipe implements PipeTransform {
  transform(val, args) {
      let i = 0;
        let s2 = (""+val).replace(/\D/g, '');
        let m = s2.match(/^(\d{3})(\d{3})(\d{4})$/);
        return (!m) ? null : "(" + m[1] + ") " + m[2] + "-" + m[3];
    }
}