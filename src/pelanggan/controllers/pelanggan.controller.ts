import { Controller, Get } from '@nestjs/common';
import { PelangganService } from '../services/pelanggan.service';
import { ApiOkResponse } from '@nestjs/swagger';

@Controller({ path: 'pelanggan' })
export class PelangganController {
  constructor(private readonly PelangganService: PelangganService) {}

  @ApiOkResponse({
    description: 'sukses memanggil pelanggan',
  })
  @Get()
  getpelanggancontroller(): object {
    return this.PelangganService.getnamapelanggan();
  }
}
