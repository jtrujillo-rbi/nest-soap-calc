import { Body, Controller, Get, Post } from '@nestjs/common';
import { CalculatorService } from './calculator.service';
import { TwoOperandsDto } from './dto/two-operands.dto';

@Controller('calculator')
export class CalculatorController {
  constructor(private readonly calculatorService: CalculatorService) {}
  @Get()
  async getTwoPlusTwo(): Promise<any> {
    const sum = await this.calculatorService.getSum(2, 2);
    console.log(sum);
    return '2 + 2 = ' + sum[0].AddResult;
  }

  @Post()
  async getSum(@Body() twoOperandsDto: TwoOperandsDto): Promise<any> {
    const x = twoOperandsDto.x;
    const y = twoOperandsDto.y;
    const sum = await this.calculatorService.getSum(x, y);
    console.log(sum);
    return `${x} + ${y} = ${sum[0].AddResult}`;
  }
}
