import { Inject, Injectable } from '@nestjs/common';
import { Client } from 'nestjs-soap';

@Injectable()
export class CalculatorService {
  constructor(
    @Inject('MY_SOAP_CLIENT') private readonly mySoapClient: Client,
  ) {}

  getSum(x: number, y: number): Promise<any> {
    return this.mySoapClient.AddAsync({ intA: x, intB: y });
  }
}
