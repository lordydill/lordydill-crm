import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({ timestamps: true })
export class Pelanggan extends Document {
  @Prop({ required: true })
  namaPerusahaan: string;

  @Prop({ required: true })
  namaLengkap: string;

  @Prop({ required: true })
  noHp: string;

  @Prop({ required: true })
  alamat: string;

  @Prop({ required: true })
  keterangan: string;
}

export const PelangganSchema = SchemaFactory.createForClass(Pelanggan);
