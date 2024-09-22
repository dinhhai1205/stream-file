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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DocumentShareController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const decorators_1 = require("../../../../common/decorators");
const enums_1 = require("../../../../common/enums");
const authentication_1 = require("../../../../core/iam/authentication");
const decorators_2 = require("../../../../core/iam/decorators");
const enums_2 = require("../../../../core/iam/enums");
const constants_1 = require("../../constants");
const document_audit_interceptor_1 = require("../../modules/document-audit/document-audit.interceptor");
const create_document_share_body_dto_1 = require("../../modules/document-share/dtos/create-document-share-body.dto");
const document_share_response_dto_1 = require("../../modules/document-share/dtos/document-share-response.dto");
const get_all_document_shares_body_dto_1 = require("../../modules/document-share/dtos/get-all-document-shares-body.dto");
const document_share_service_1 = require("./document-share.service");
let DocumentShareController = class DocumentShareController {
    constructor(documentShareService) {
        this.documentShareService = documentShareService;
    }
    async createDocumentShare(companyId, documentId, { userEmail }, body) {
        return this.documentShareService.createDocumentShare({
            companyId,
            documentId,
            sharedByUser: userEmail,
            userEmail,
            ...body,
        });
    }
    async getAllDocumentShares(companyId, documentId, body, { userEmail }) {
        return this.documentShareService.getAllDocumentShares({
            ...body,
            companyId,
            userEmail,
            documentId,
        });
    }
    async deleteDocumentFile(companyId, documentId, documentShareId, { userEmail }) {
        return this.documentShareService.deleteDocumentShareById({
            documentShareId,
            companyId,
            userEmail,
            documentId,
        });
    }
};
exports.DocumentShareController = DocumentShareController;
__decorate([
    (0, common_1.Post)(),
    (0, common_1.UseInterceptors)(document_audit_interceptor_1.DocumentAuditInterceptor),
    (0, authentication_1.Auth)(enums_2.AuthType.Bearer, enums_2.AuthType.Permission),
    (0, swagger_1.ApiOperation)({ summary: 'Create new document share' }),
    (0, swagger_1.ApiResponse)({ type: document_share_response_dto_1.DocumentShareResponseDto }),
    (0, decorators_2.Permissions)(enums_1.EApiAppMode.ADMIN, enums_1.EPermissionActions.CREATE),
    __param(0, (0, common_1.Param)('companyId', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Param)('documentId', common_1.ParseIntPipe)),
    __param(2, (0, decorators_2.ActiveUser)()),
    __param(3, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number, Object, create_document_share_body_dto_1.CreateDocumentShareBodyDto]),
    __metadata("design:returntype", Promise)
], DocumentShareController.prototype, "createDocumentShare", null);
__decorate([
    (0, common_1.Get)(),
    (0, authentication_1.Auth)(enums_2.AuthType.Bearer, enums_2.AuthType.Permission),
    (0, swagger_1.ApiOperation)({ summary: 'Get all document share' }),
    (0, decorators_2.Permissions)(enums_1.EApiAppMode.ADMIN, enums_1.EPermissionActions.VIEW),
    (0, decorators_1.ApiOkResponsePaginated)(document_share_response_dto_1.DocumentShareResponseDto),
    __param(0, (0, common_1.Param)('companyId', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Param)('documentId', common_1.ParseIntPipe)),
    __param(2, (0, common_1.Body)()),
    __param(3, (0, decorators_2.ActiveUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number, get_all_document_shares_body_dto_1.GetAllDocumentSharesBodyDto, Object]),
    __metadata("design:returntype", Promise)
], DocumentShareController.prototype, "getAllDocumentShares", null);
__decorate([
    (0, common_1.Delete)(':documentShareId'),
    (0, common_1.UseInterceptors)(document_audit_interceptor_1.DocumentAuditInterceptor),
    (0, authentication_1.Auth)(enums_2.AuthType.Bearer, enums_2.AuthType.Permission),
    (0, swagger_1.ApiOperation)({ summary: 'Delete document share by documentShareId' }),
    (0, decorators_2.Permissions)(enums_1.EApiAppMode.ADMIN, enums_1.EPermissionActions.DELETE),
    __param(0, (0, common_1.Param)('companyId', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Param)('documentId', common_1.ParseIntPipe)),
    __param(2, (0, common_1.Param)('documentShareId', common_1.ParseIntPipe)),
    __param(3, (0, decorators_2.ActiveUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number, Number, Object]),
    __metadata("design:returntype", Promise)
], DocumentShareController.prototype, "deleteDocumentFile", null);
exports.DocumentShareController = DocumentShareController = __decorate([
    (0, swagger_1.ApiTags)(constants_1.DOCUMENT_SHARE_API_TAG_V1),
    (0, common_1.Controller)(constants_1.DOCUMENT_SHARE_API_PATH_V1),
    (0, decorators_2.ModuleMode)(enums_1.EApiModuleMode.ESign),
    __metadata("design:paramtypes", [document_share_service_1.DocumentShareService])
], DocumentShareController);
//# sourceMappingURL=document-share.controller.js.map