import { Module } from '@nestjs/common';
import { PelangganModule } from './pelanggan/pelanggan.module';
import { ProdukModule } from './produk/produk.module';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    MongooseModule.forRoot(process.env.MONGGO_CONNECTION!),
    PelangganModule,
    ProdukModule,
  ],
})
export class AppModule {}
