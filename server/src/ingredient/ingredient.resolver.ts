import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { IngredientResolverBase } from "./base/ingredient.resolver.base";
import { Ingredient } from "./base/Ingredient";
import { IngredientService } from "./ingredient.service";

@graphql.Resolver(() => Ingredient)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class IngredientResolver extends IngredientResolverBase {
  constructor(
    protected readonly service: IngredientService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
