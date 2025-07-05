<<<<<<< HEAD
import { Test, TestingModule } from '@nestjs/testing';
import { PelangganService } from './pelanggan.service';

describe('PelangganService', () => {
  let service: PelangganService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PelangganService],
    }).compile();

    service = module.get<PelangganService>(PelangganService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
=======
import { Test, TestingModule } from '@nestjs/testing';
import { PelangganService } from './pelanggan.service';

describe('PelangganService', () => {
  let service: PelangganService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PelangganService],
    }).compile();

    service = module.get<PelangganService>(PelangganService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
>>>>>>> f12a02456ca5cf74bfd9ff097b05f5fc1034f98a
