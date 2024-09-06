import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { CulturalPracticeModuleBase } from "./base/culturalPractice.module.base";
import { CulturalPracticeService } from "./culturalPractice.service";
import { CulturalPracticeController } from "./culturalPractice.controller";
import { CulturalPracticeResolver } from "./culturalPractice.resolver";

@Module({
  imports: [CulturalPracticeModuleBase, forwardRef(() => AuthModule)],
  controllers: [CulturalPracticeController],
  providers: [CulturalPracticeService, CulturalPracticeResolver],
  exports: [CulturalPracticeService],
})
export class CulturalPracticeModule {}
