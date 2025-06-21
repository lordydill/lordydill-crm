import { Injectable } from '@nestjs/common';

@Injectable()
export class ProdukService {
  getNamaProduk(): object {
    const produk = {
      namaProduk: 'baju manchester united',
      hargabaju: 100000000000,
      keterangan: 'ini dia baju king mu yang tidak pernah terkalahkan',
    };
    console.log('Produk saya adalah:', produk);
    return { produk };
  }
}
