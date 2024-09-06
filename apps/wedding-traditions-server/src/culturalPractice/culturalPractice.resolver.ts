import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { CulturalPracticeResolverBase } from "./base/culturalPractice.resolver.base";
import { CulturalPractice } from "./base/CulturalPractice";
import { CulturalPracticeService } from "./culturalPractice.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => CulturalPractice)
export class CulturalPracticeResolver extends CulturalPracticeResolverBase {
  constructor(
    protected readonly service: CulturalPracticeService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
