import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateAddressDto } from './dto/create-address.dto';
import { UpdateAddressDto } from './dto/update-address.dto';

@Injectable()
export class AddressService {
  constructor(private readonly prisma: PrismaService) {}

  create(createAddressDto: CreateAddressDto) {
    return this.prisma.address.create({
      data: createAddressDto,
      include: {
        user: true,
      },
    });
  }

  findAll() {
    return this.prisma.address.findMany({
      include: {
        user: true,
      },
    });
  }

  findOne(id: string) {
    return this.prisma.address.findUnique({
      where: { id },
      include: {
        user: true,
      },
    });
  }

  update(id: string, updateAddressDto: UpdateAddressDto) {
    return this.prisma.address.update({
      where: { id },
      data: updateAddressDto,
      include: {
        user: true,
      },
    });
  }

  remove(id: string) {
    return this.prisma.address.delete({
      where: { id },
    });
  }
}
