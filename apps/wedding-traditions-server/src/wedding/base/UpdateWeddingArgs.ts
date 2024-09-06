/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { WeddingWhereUniqueInput } from "./WeddingWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { WeddingUpdateInput } from "./WeddingUpdateInput";

@ArgsType()
class UpdateWeddingArgs {
  @ApiProperty({
    required: true,
    type: () => WeddingWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => WeddingWhereUniqueInput)
  @Field(() => WeddingWhereUniqueInput, { nullable: false })
  where!: WeddingWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => WeddingUpdateInput,
  })
  @ValidateNested()
  @Type(() => WeddingUpdateInput)
  @Field(() => WeddingUpdateInput, { nullable: false })
  data!: WeddingUpdateInput;
}

export { UpdateWeddingArgs as UpdateWeddingArgs };
