import { Injectable } from '@angular/core';
import { HttpClient ,HttpHeaders} from '@angular/common/http';
import { character } from '../data-type';

@Injectable({
  providedIn: 'root'
})
export class Googlesheetf2Service {

  constructor(private http:HttpClient) { }
  private range = 'Sheet2!A:Z';

  saveFormData(character: any) {
    const requestUrl = `https://sheets.googleapis.com/v4/spreadsheets/1yf-JTqXJ3j6yl7XTrusl3GoriX_nQQdzG4j84Irho1Y/values/${this.range}:append?valueInputOption=USER_ENTERED&alt=json&key=AIzaSyCRlHzRq8b8RKf0_5agbsV2X9xj4NVWLno`;

    const requestBody = {
      values: [[character.fname, character.lname, character.email, character.phone,character.test,character.op1,character.op2,character.op3,character.op4,character.op5,character.op6,character.op7,character.text1,character.text2,character.text3]]
    };
    console.log([requestUrl, requestBody])

    let headers: HttpHeaders = new HttpHeaders().append('Authorization', 'Bearer ya29.a0AfB_byC6RXjCoUai3zCXVr3eV-pEhSKvtW3IN9MuJKuv4cF3NAbHEXlwbFoFtDGOC3IorMWSm1GvEmljRcid0KaNJT2Lt9fnKxiUU8xEVtH_a2fGONPrlOJeSDlMbULsbiFTcE6cimjBmJKboateRbjAiCO5qKrljl1yaCgYKAdcSARESFQGOcNnCzjIbfU6HsFDVCD1rd8ElEA0171')


    return this.http.post<any>(requestUrl, requestBody, {
      headers: headers
    });

}
}
