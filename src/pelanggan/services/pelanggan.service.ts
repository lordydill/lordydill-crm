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
}
