import { Controller, Get } from '@nestjs/common';
import { ProdukService } from '../services/produk.service';
import { ApiOkResponse } from '@nestjs/swagger';

@Controller({ path: 'produk' })
export class ProdukController {
  constructor(private readonly produkService: ProdukService) {}

  @ApiOkResponse({
    description: 'Sukses memanggil produk',
  })
  @Get()
  getProduk(): object {
    return this.produkService.getNamaProduk();
  }
}
