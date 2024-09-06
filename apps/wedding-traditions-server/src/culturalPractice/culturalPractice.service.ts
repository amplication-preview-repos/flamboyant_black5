import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { CulturalPracticeServiceBase } from "./base/culturalPractice.service.base";

@Injectable()
export class CulturalPracticeService extends CulturalPracticeServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
