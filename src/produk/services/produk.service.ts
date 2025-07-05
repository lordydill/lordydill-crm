import { Injectable } from '@nestjs/common';

@Injectable()
export class ProdukService {
  getNamaProduk(): object {
    const produk = {
      namaProduk: 'baju manchester united',
      hargabaju: 1000000000, // Anda bisa ubah ke angka sesuai yang benar
      keterangan: 'ini dia baju king mu yang tidak pernah terkalahkan',
    };
    console.log('Produk saya adalah:', produk);
    return { produk };
  }
}
