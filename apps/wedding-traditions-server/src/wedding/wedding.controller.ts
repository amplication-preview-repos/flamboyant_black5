import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { WeddingService } from "./wedding.service";
import { WeddingControllerBase } from "./base/wedding.controller.base";

@swagger.ApiTags("weddings")
@common.Controller("weddings")
export class WeddingController extends WeddingControllerBase {
  constructor(
    protected readonly service: WeddingService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
