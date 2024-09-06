/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";

import {
  Prisma,
  Registration as PrismaRegistration,
  Payment as PrismaPayment,
  Wedding as PrismaWedding,
} from "@prisma/client";

export class RegistrationServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.RegistrationCountArgs, "select">
  ): Promise<number> {
    return this.prisma.registration.count(args);
  }

  async registrations(
    args: Prisma.RegistrationFindManyArgs
  ): Promise<PrismaRegistration[]> {
    return this.prisma.registration.findMany(args);
  }
  async registration(
    args: Prisma.RegistrationFindUniqueArgs
  ): Promise<PrismaRegistration | null> {
    return this.prisma.registration.findUnique(args);
  }
  async createRegistration(
    args: Prisma.RegistrationCreateArgs
  ): Promise<PrismaRegistration> {
    return this.prisma.registration.create(args);
  }
  async updateRegistration(
    args: Prisma.RegistrationUpdateArgs
  ): Promise<PrismaRegistration> {
    return this.prisma.registration.update(args);
  }
  async deleteRegistration(
    args: Prisma.RegistrationDeleteArgs
  ): Promise<PrismaRegistration> {
    return this.prisma.registration.delete(args);
  }

  async findPayments(
    parentId: string,
    args: Prisma.PaymentFindManyArgs
  ): Promise<PrismaPayment[]> {
    return this.prisma.registration
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .payments(args);
  }

  async getWedding(parentId: string): Promise<PrismaWedding | null> {
    return this.prisma.registration
      .findUnique({
        where: { id: parentId },
      })
      .wedding();
  }
}
