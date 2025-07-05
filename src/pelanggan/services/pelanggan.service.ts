import { Injectable } from '@nestjs/common';
<<<<<<< HEAD
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
=======

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
>>>>>>> f12a02456ca5cf74bfd9ff097b05f5fc1034f98a
  }
}
