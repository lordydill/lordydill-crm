import { Injectable } from '@nestjs/common';

@Injectable()
export class ProdukService {
  getNamaProduk(): object {
    const produk = {
      namaProduk: 'baju manchester united',
<<<<<<< HEAD
      hargabaju: 1000000000,
=======
      hargabaju: 100000000000,
>>>>>>> a958699 (Initial commit)
      keterangan: 'ini dia baju king mu yang tidak pernah terkalahkan',
    };
    console.log('Produk saya adalah:', produk);
    return { produk };
  }
}
