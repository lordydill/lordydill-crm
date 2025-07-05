import { Body, Controller, Get, Post } from '@nestjs/common';
import { PelangganService } from '../services/pelanggan.service';
import { ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { PelangganDto } from '../dto/pelanggan.dto';

@ApiTags('Pelanggan') // Untuk dokumentasi Swagger
@Controller('pelanggan') // path endpoint: /pelanggan
export class PelangganController {
  constructor(private readonly pelangganService: PelangganService) {}

  // Endpoint untuk menyimpan data pelanggan ke database
  @Post()
  @ApiOkResponse({ description: 'Sukses menyimpan data pelanggan' })
  simpanDataPelanggan(@Body() payload: PelangganDto): Promise<void> {
    return this.pelangganService.simpanDataPelanggan(payload);
  }

  // Endpoint untuk mengambil semua data pelanggan dari database
  @Get('list')
  @ApiOkResponse({ description: 'Sukses mengambil daftar pelanggan dari DB' })
  getDaftarPelanggan(): Promise<any[]> {
    return this.pelangganService.ambilSemuaPelanggan();
  }

  // Endpoint untuk dummy data pelanggan (testing lokal)
  @Get()
  @ApiOkResponse({
    description: 'Sukses memanggil dummy pelanggan',
  })
  getPelangganController(): any {
    return this.pelangganService.getNamaPelanggan();
  }
}
