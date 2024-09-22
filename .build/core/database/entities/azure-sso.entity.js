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
exports.AzureSSOEntity = void 0;
const typeorm_1 = require("typeorm");
const enums_1 = require("../enums");
const abstract_entity_1 = require("./abstract.entity");
let AzureSSOEntity = class AzureSSOEntity extends abstract_entity_1.AbstractEntity {
};
exports.AzureSSOEntity = AzureSSOEntity;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('increment'),
    __metadata("design:type", Number)
], AzureSSOEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Boolean)
], AzureSSOEntity.prototype, "enable", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], AzureSSOEntity.prototype, "companyId", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], AzureSSOEntity.prototype, "metadataUrl", void 0);
exports.AzureSSOEntity = AzureSSOEntity = __decorate([
    (0, typeorm_1.Entity)({ name: enums_1.ETableName.AZURE_SSO })
], AzureSSOEntity);
//# sourceMappingURL=azure-sso.entity.js.map