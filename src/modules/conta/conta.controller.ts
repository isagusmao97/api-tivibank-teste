import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { contaDto } from './conta.dto';
import { ContaService } from './conta.service';


@Controller('conta')
export class ContaController {
  constructor(private readonly contaService: ContaService) {} 

  @Get('saldo/:id')
    async getSaldo(@Param('id') id:string):Promise<number>{
      return await this.contaService.getSaldo(id);  
    }

    @Post('deposito/:id')
    async deposito(@Param('id') id:string, @Body()data:contaDto){
      return await this.contaService.deposito(id,data.saldo) 
    }

    @Put('saque/:id')
    async saque (@Param('id') id:string, @Body()data:contaDto){
      return await this.contaService.saque(id,data.saldo) 
      
    }
}
