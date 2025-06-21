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
  }
}
