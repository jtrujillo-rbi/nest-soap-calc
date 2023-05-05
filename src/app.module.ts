import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatsModule } from './cats/cats.module';
import { CalculatorModule } from './calculator/calculator.module';

@Module({
  imports: [CatsModule, CalculatorModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
