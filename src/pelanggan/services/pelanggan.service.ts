import { Injectable } from '@nestjs/common';

@Injectable()
export class PelangganService {
  getnamapelanggan(): object {
    const pelanggan = {
      namaLengkap: 'Ahmad Fadil',
      nomerHp: '082337277506',
      keterangan: 'pelanggan pertama',
    };
    console.log('nama pelanggan saya adalah:', pelanggan);
    return { pelanggan };
  }
}
