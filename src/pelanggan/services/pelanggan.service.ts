import { Injectable } from '@nestjs/common';

@Injectable()
export class PelangganService {
  getNamaPelanggan(): object {
    const pelanggan = {
      namaLengkap: 'Ariansyah Akbar',
      nomerHp: '089690462180',
      keterangan: 'Pelanggan pertama',
    };
    let namaProduk = 'Esteh';
    namaProduk = 'es buah';
    console.log('nama pelanggan saya adalah:', pelanggan.namaLengkap);
    return { pelanggan };
  }

  simpanNamaPelanggan(): void {
    const pelanggan = this.getNamaPelanggan();
    console.log('ini nama pelanggan', pelanggan);
  }
}
