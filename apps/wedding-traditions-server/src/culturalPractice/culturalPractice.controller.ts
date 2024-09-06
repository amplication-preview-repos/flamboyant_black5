import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { CulturalPracticeService } from "./culturalPractice.service";
import { CulturalPracticeControllerBase } from "./base/culturalPractice.controller.base";

@swagger.ApiTags("culturalPractices")
@common.Controller("culturalPractices")
export class CulturalPracticeController extends CulturalPracticeControllerBase {
  constructor(
    protected readonly service: CulturalPracticeService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
