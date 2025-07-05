import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Pelanggan } from '../schema/pelanggan.schema';
import { PelangganDto } from '../dto/pelanggan.dto';

@Injectable()
export class PelangganService {
  constructor(
    @InjectModel(Pelanggan.name)
    private readonly pelangganModel: Model<Pelanggan>,
  ) {}

  async simpanDataPelanggan(payload: PelangganDto): Promise<void> {
    await this.pelangganModel.create(payload);
  }

  async ambilSemuaPelanggan(): Promise<Pelanggan[]> {
    return this.pelangganModel.find().exec();
  }

  getNamaPelanggan(): object {
    const pelanggan = {
      namaLengkap: 'Ahmad Fadil',
      nomerHp: '082337277506',
      keterangan: 'Pelanggan pertama',
    };
    let namaProduk = 'Esteh';
    namaProduk = 'Es Buah'; // Overwrite
    console.log('Nama pelanggan saya adalah:', pelanggan.namaLengkap);
    return { pelanggan };
  }

  simpanNamaPelanggan(): void {
    const pelanggan = this.getNamaPelanggan();
    console.log('Ini nama pelanggan:', pelanggan);
  }
}
