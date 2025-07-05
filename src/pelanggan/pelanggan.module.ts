import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { PelangganController } from './controllers/pelanggan.controller';
import { PelangganService } from './services/pelanggan.service';
import { Pelanggan, PelangganSchema } from './schema/pelanggan.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Pelanggan.name, schema: PelangganSchema },
    ]),
  ],
  controllers: [PelangganController],
  providers: [PelangganService],
})
export class PelangganModule {}
