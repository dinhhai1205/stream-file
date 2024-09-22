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
exports.FolderEntity = void 0;
const typeorm_1 = require("typeorm");
const constants_1 = require("../constants");
const enums_1 = require("../enums");
const base_app_entity_1 = require("./base-app.entity");
const document_entity_1 = require("./document.entity");
let FolderEntity = class FolderEntity extends base_app_entity_1.BaseAppEntity {
};
exports.FolderEntity = FolderEntity;
__decorate([
    (0, typeorm_1.Column)(constants_1.BIGINT_COLUMN_TYPE),
    __metadata("design:type", Number)
], FolderEntity.prototype, "companyId", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], FolderEntity.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => document_entity_1.DocumentEntity, document => document.folder),
    __metadata("design:type", Array)
], FolderEntity.prototype, "documents", void 0);
exports.FolderEntity = FolderEntity = __decorate([
    (0, typeorm_1.Entity)({ name: enums_1.ETableName.FOLDER }),
    (0, typeorm_1.Index)('idx_folder_is_deleted_company_id', ['isDeleted', 'companyId']),
    (0, typeorm_1.Index)('idx_folder_order_created_on_by_desc', obj => ({
        [obj['createdOn']]: -1,
        [obj['id']]: 1,
    }))
], FolderEntity);
//# sourceMappingURL=folder.entity.js.map