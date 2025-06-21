import { Module } from '@nestjs/common';
import { PelangganModule } from './pelanggan/pelanggan.module';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    MongooseModule.forRoot(
      'mongodb+srv://ariansyahakbaratech:xQINxrEBFGHlf21p@crm-praktek.mwrrrpi.mongodb.net/crm-praktek',
    ),
    PelangganModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
