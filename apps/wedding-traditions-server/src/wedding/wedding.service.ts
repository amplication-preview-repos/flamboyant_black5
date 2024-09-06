import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { WeddingServiceBase } from "./base/wedding.service.base";

@Injectable()
export class WeddingService extends WeddingServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
