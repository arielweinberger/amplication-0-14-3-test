/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/docs/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as apollo from "apollo-server-express";
import * as nestAccessControl from "nest-access-control";
import { GqlDefaultAuthGuard } from "../../auth/gqlDefaultAuth.guard";
import * as gqlACGuard from "../../auth/gqlAC.guard";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { CreateRecipeArgs } from "./CreateRecipeArgs";
import { UpdateRecipeArgs } from "./UpdateRecipeArgs";
import { DeleteRecipeArgs } from "./DeleteRecipeArgs";
import { RecipeFindManyArgs } from "./RecipeFindManyArgs";
import { RecipeFindUniqueArgs } from "./RecipeFindUniqueArgs";
import { Recipe } from "./Recipe";
import { IngredientFindManyArgs } from "../../ingredient/base/IngredientFindManyArgs";
import { Ingredient } from "../../ingredient/base/Ingredient";
import { RecipeService } from "../recipe.service";

@graphql.Resolver(() => Recipe)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class RecipeResolverBase {
  constructor(
    protected readonly service: RecipeService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "Recipe",
    action: "read",
    possession: "any",
  })
  async _recipesMeta(
    @graphql.Args() args: RecipeFindManyArgs
  ): Promise<MetaQueryPayload> {
    const results = await this.service.count({
      ...args,
      skip: undefined,
      take: undefined,
    });
    return {
      count: results,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [Recipe])
  @nestAccessControl.UseRoles({
    resource: "Recipe",
    action: "read",
    possession: "any",
  })
  async recipes(@graphql.Args() args: RecipeFindManyArgs): Promise<Recipe[]> {
    return this.service.findMany(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => Recipe, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "Recipe",
    action: "read",
    possession: "own",
  })
  async recipe(
    @graphql.Args() args: RecipeFindUniqueArgs
  ): Promise<Recipe | null> {
    const result = await this.service.findOne(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Recipe)
  @nestAccessControl.UseRoles({
    resource: "Recipe",
    action: "create",
    possession: "any",
  })
  async createRecipe(@graphql.Args() args: CreateRecipeArgs): Promise<Recipe> {
    return await this.service.create({
      ...args,
      data: args.data,
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Recipe)
  @nestAccessControl.UseRoles({
    resource: "Recipe",
    action: "update",
    possession: "any",
  })
  async updateRecipe(
    @graphql.Args() args: UpdateRecipeArgs
  ): Promise<Recipe | null> {
    try {
      return await this.service.update({
        ...args,
        data: args.data,
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new apollo.ApolloError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => Recipe)
  @nestAccessControl.UseRoles({
    resource: "Recipe",
    action: "delete",
    possession: "any",
  })
  async deleteRecipe(
    @graphql.Args() args: DeleteRecipeArgs
  ): Promise<Recipe | null> {
    try {
      return await this.service.delete(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new apollo.ApolloError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => [Ingredient])
  @nestAccessControl.UseRoles({
    resource: "Ingredient",
    action: "read",
    possession: "any",
  })
  async ingredients(
    @graphql.Parent() parent: Recipe,
    @graphql.Args() args: IngredientFindManyArgs
  ): Promise<Ingredient[]> {
    const results = await this.service.findIngredients(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }
}
