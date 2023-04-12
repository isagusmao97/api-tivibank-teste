import { Body, Controller, Get, Param, Put } from '@nestjs/common';
import { contaDto } from './conta.dto';
import { ContaService } from './conta.service';


@Controller('conta')
export class ContaController {
  constructor(private readonly contaService: ContaService) {} 

  @Get('dados')
    async getConta():Promise<any>{
      return await this.contaService.getConta();  
    }

    @Put('deposito/:id')
    async deposito(@Param('id') id:string, @Body()data:contaDto){
      return await this.contaService.deposito(id,data.saldo) 
    }

    @Put('saque/:id')
    async saque (@Param('id') id:string, @Body()data:contaDto){
      return await this.contaService.saque(id,data.saldo) 
      
    }
}
