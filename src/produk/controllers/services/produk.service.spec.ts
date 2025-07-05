import { Test, TestingModule } from '@nestjs/testing';
import { ProdukService } from '../../services/produk.service'; // perbaiki path relatif ke service

describe('ProdukService', () => {
  let service: ProdukService;

  // Inisialisasi module testing sebelum setiap test
  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ProdukService],
    }).compile();

    service = module.get<ProdukService>(ProdukService);
  });

  // Test dasar untuk memastikan service terdefinisi
  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
