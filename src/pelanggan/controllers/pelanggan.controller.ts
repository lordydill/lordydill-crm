<<<<<<< HEAD
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
=======
import { Controller, Delete, Get, Post, Put } from '@nestjs/common';
import { PelangganService } from '../services/pelanggan.service';
import { ApiOkResponse } from '@nestjs/swagger';

@Controller({ path: 'pelanggan' })
export class PelangganController {
  constructor(private readonly pelangganService: PelangganService) {}

  @ApiOkResponse({
    description: 'sukses memanggil pelanggan',
  })
  @Get()
  getPelangganController(): any {
    return this.pelangganService.simpanNamaPelanggan();
>>>>>>> f12a02456ca5cf74bfd9ff097b05f5fc1034f98a
  }
}
