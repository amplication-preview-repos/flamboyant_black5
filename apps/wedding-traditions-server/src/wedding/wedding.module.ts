import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { WeddingModuleBase } from "./base/wedding.module.base";
import { WeddingService } from "./wedding.service";
import { WeddingController } from "./wedding.controller";
import { WeddingResolver } from "./wedding.resolver";

@Module({
  imports: [WeddingModuleBase, forwardRef(() => AuthModule)],
  controllers: [WeddingController],
  providers: [WeddingService, WeddingResolver],
  exports: [WeddingService],
})
export class WeddingModule {}
