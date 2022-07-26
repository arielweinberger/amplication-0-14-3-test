/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/docs/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { RecipeUpdateManyWithoutOrdersInput } from "./RecipeUpdateManyWithoutOrdersInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";
@InputType()
class OrderUpdateInput {
  @ApiProperty({
    required: false,
    type: () => RecipeUpdateManyWithoutOrdersInput,
  })
  @ValidateNested()
  @Type(() => RecipeUpdateManyWithoutOrdersInput)
  @IsOptional()
  @Field(() => RecipeUpdateManyWithoutOrdersInput, {
    nullable: true,
  })
  recipes?: RecipeUpdateManyWithoutOrdersInput;
}
export { OrderUpdateInput };
