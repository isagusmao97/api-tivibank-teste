import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class ContaService {
    private prisma = new PrismaClient();


async deposito(id:string, quantia:number){
    const conta = await this.prisma.conta.findUnique({
        where:{
            id,
        },
    });
    const newSaldo = conta.saldo + quantia;
    return this.prisma.conta.update({
        where:{
            id,
        },
        data:{
            saldo:newSaldo
        }
    })
}

async saque(id:string, quantia:number){
    const conta = await this.prisma.conta.findUnique({
        where:{
            id,
        },
    });

    const newSaldo = conta.saldo-quantia;

    if(newSaldo<0){
        throw new Error('Saldo Insuficiente');
    }
    return this.prisma.conta.update({
        where:{
            id,
        },
        data:{
            saldo:newSaldo
        },
    });
}

async getSaldo(id:string){
    const conta = await this.prisma.conta.findUnique({
        where:{
            id,
        },
    });
    return conta.saldo;
}

}
