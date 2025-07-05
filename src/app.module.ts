import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';

import { PelangganModule } from './pelanggan/pelanggan.module';
import { ProdukModule } from './produk/produk.module';

@Module({
  imports: [
    // Membaca .env dan menjadikan variabelnya global
    ConfigModule.forRoot({
      isGlobal: true,
    }),

    // Koneksi ke MongoDB
    MongooseModule.forRoot(
      'mongodb+srv://ariansyahakbaratech:xQINxrEBFGHlf21p@crm-praktek.mwrrrpi.mongodb.net/crm-praktek',
    ),

    // Module internal aplikasi
    PelangganModule,
    ProdukModule,
  ],
})
export class AppModule {}
