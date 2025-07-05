import { Module } from '@nestjs/common';
<<<<<<< HEAD
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
=======
import { PelangganService } from './services/pelanggan.service';
import { PelangganController } from './controllers/pelanggan.controller';

@Module({
>>>>>>> f12a02456ca5cf74bfd9ff097b05f5fc1034f98a
  controllers: [PelangganController],
  providers: [PelangganService],
})
export class PelangganModule {}
