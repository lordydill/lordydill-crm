import { Module } from '@nestjs/common';
import { PelangganService } from './services/pelanggan.service';
import { PelangganController } from './controllers/pelanggan.controller';

@Module({
  controllers: [PelangganController],
  providers: [PelangganService],
})
export class PelangganModule {}
