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
import { CulturalPracticeWhereInput } from "./CulturalPracticeWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { CulturalPracticeOrderByInput } from "./CulturalPracticeOrderByInput";

@ArgsType()
class CulturalPracticeFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => CulturalPracticeWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => CulturalPracticeWhereInput, { nullable: true })
  @Type(() => CulturalPracticeWhereInput)
  where?: CulturalPracticeWhereInput;

  @ApiProperty({
    required: false,
    type: [CulturalPracticeOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [CulturalPracticeOrderByInput], { nullable: true })
  @Type(() => CulturalPracticeOrderByInput)
  orderBy?: Array<CulturalPracticeOrderByInput>;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  skip?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  take?: number;
}

export { CulturalPracticeFindManyArgs as CulturalPracticeFindManyArgs };
