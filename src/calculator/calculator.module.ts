import { Module } from '@nestjs/common';
import { SoapModule } from 'nestjs-soap';
import { CalculatorService } from './calculator.service';
import { CalculatorController } from './calculator.controller';

@Module({
  imports: [
    SoapModule.register({
      clientName: 'MY_SOAP_CLIENT',
      uri: 'http://www.dneonline.com/calculator.asmx?wsdl',
    }),
  ],
  providers: [CalculatorService],
  controllers: [CalculatorController],
})
export class CalculatorModule {}
