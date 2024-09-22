"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetAllDocumentAuditsQueryDto = void 0;
const enums_1 = require("../../../enums");
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
const dto_1 = require("../../../../../common/dto");
class GetAllDocumentAuditsQueryDto extends dto_1.PaginationQueryDto {
}
exports.GetAllDocumentAuditsQueryDto = GetAllDocumentAuditsQueryDto;
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ enum: enums_1.DocumentOperationType }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsEnum)(enums_1.DocumentOperationType),
    __metadata("design:type", String)
], GetAllDocumentAuditsQueryDto.prototype, "filterOperationType", void 0);
//# sourceMappingURL=get-all-document-audits-query.dto.js.map