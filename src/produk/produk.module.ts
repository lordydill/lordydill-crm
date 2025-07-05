import { Module } from '@nestjs/common';
import { ProdukController } from './controllers/produk.controller';
import { ProdukService } from './services/produk.service';

@Module({
  controllers: [ProdukController],
  providers: [ProdukService],
})
export class ProdukModule {}
