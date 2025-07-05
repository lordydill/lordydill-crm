import { Body, Controller, Get, Post } from '@nestjs/common';
import { PelangganService } from '../services/pelanggan.service';
import { ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { PelangganDto } from '../dto/pelanggan.dto';

@ApiTags('Pelanggan') // Untuk dokumentasi Swagger
@Controller('pelanggan') // path endpoint: /pelanggan
export class PelangganController {
  constructor(private readonly pelangganService: PelangganService) {}

  @Post()
  @ApiOkResponse({ description: 'Sukses menyimpan data pelanggan' })
  simpanDataPelanggan(@Body() payload: PelangganDto): Promise<void> {
    return this.pelangganService.simpanDataPelanggan(payload);
  }

  @Get()
  @ApiOkResponse({ description: 'Sukses mengambil daftar pelanggan' })
  getDaftarPelanggan(): Promise<any[]> {
    return this.pelangganService.ambilSemuaPelanggan();
  }
}
