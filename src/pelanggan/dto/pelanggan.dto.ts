import { ApiProperty } from '@nestjs/swagger';

export class PelangganDto {
  @ApiProperty({ required: true })
  namaPerusahaan: string;

  @ApiProperty({ required: true })
  namaLengkap: string;

  @ApiProperty({ required: true })
  noHp: string;

  @ApiProperty({ required: true })
  alamat: string;

  @ApiProperty({ required: true })
  keterangan: string;
}
