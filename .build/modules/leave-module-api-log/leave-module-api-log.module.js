"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LeaveModuleApiLogModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const database_1 = require("../../core/database");
const leave_module_api_log_service_1 = require("./leave-module-api-log.service");
const queues_1 = require("./queues");
let LeaveModuleApiLogModule = class LeaveModuleApiLogModule {
};
exports.LeaveModuleApiLogModule = LeaveModuleApiLogModule;
exports.LeaveModuleApiLogModule = LeaveModuleApiLogModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([database_1.LeaveModuleApiLogEntity])],
        providers: [leave_module_api_log_service_1.LeaveModuleApiLogService, queues_1.LeaveModuleApiLogConsumer],
    })
], LeaveModuleApiLogModule);
//# sourceMappingURL=leave-module-api-log.module.js.map