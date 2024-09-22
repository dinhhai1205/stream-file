"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.leaveTrxTestData = void 0;
const enums_1 = require("../enums");
const defaultRelations = {
    updatedBy: null,
    updatedOn: null,
    currentPolicySetting: null,
    previousPolicySetting: null,
    company: {},
    leaveType: {},
    leaveTypePolicy: {},
    employee: {},
    leaveTypeBalance: {},
};
exports.leaveTrxTestData = [
    {
        id: 5937,
        isDeleted: false,
        companyId: 162,
        leaveTypeId: 839,
        policyId: 0,
        employeeId: 4171,
        employeeRef: '',
        joinDate: new Date('1800-01-01T00:00:00Z'),
        effDate: new Date('1800-01-01T00:00:00Z'),
        date: new Date('2023-11-08T00:00:00Z'),
        type: enums_1.EHistoryType.MANUAL,
        sign: 1,
        unit: 1.42,
        balance: 4.25,
        createdBy: 'triln@zigvy.com',
        createdOn: new Date('2023-11-08T02:45:45.571Z'),
        ...defaultRelations,
    },
    {
        id: 5941,
        isDeleted: false,
        companyId: 162,
        leaveTypeId: 855,
        policyId: 0,
        employeeId: 4171,
        employeeRef: '',
        joinDate: new Date('1800-01-01T00:00:00Z'),
        effDate: new Date('1800-01-01T00:00:00Z'),
        date: new Date('2023-11-08T00:00:00Z'),
        type: enums_1.EHistoryType.MANUAL,
        sign: -1,
        unit: 30,
        balance: 0,
        createdBy: 'triln@zigvy.com',
        createdOn: new Date('2023-11-08T02:46:12.711Z'),
        ...defaultRelations,
    },
    {
        id: 5992,
        isDeleted: false,
        companyId: 162,
        leaveTypeId: 839,
        policyId: 119,
        employeeId: 4171,
        employeeRef: '00835028',
        joinDate: new Date('2013-08-01T00:00:00Z'),
        effDate: new Date('2023-08-01T00:00:00Z'),
        date: new Date('2023-11-30T00:00:00Z'),
        type: enums_1.EHistoryType.CREDIT_PRORATE,
        sign: 1,
        unit: 1.42,
        balance: 5.67,
        createdBy: 'cronjob@hrforte.com',
        createdOn: new Date('2023-12-01T06:56:47.325664Z'),
        ...defaultRelations,
    },
    {
        id: 5940,
        isDeleted: false,
        companyId: 162,
        leaveTypeId: 839,
        policyId: 0,
        employeeId: 4169,
        employeeRef: '',
        joinDate: new Date('1800-01-01T00:00:00Z'),
        effDate: new Date('1800-01-01T00:00:00Z'),
        date: new Date('2023-11-08T00:00:00Z'),
        type: enums_1.EHistoryType.MANUAL,
        sign: 1,
        unit: 1.33,
        balance: 4,
        createdBy: 'triln@zigvy.com',
        createdOn: new Date('2023-11-08T02:46:08.063Z'),
        ...defaultRelations,
    },
    {
        id: 5993,
        isDeleted: false,
        companyId: 162,
        leaveTypeId: 839,
        policyId: 118,
        employeeId: 4169,
        employeeRef: '01008388',
        joinDate: new Date('2018-08-20T00:00:00Z'),
        effDate: new Date('2023-08-20T00:00:00Z'),
        date: new Date('2023-11-30T00:00:00Z'),
        type: enums_1.EHistoryType.CREDIT_PRORATE,
        sign: 1,
        unit: 1.33,
        balance: 5.33,
        createdBy: 'cronjob@hrforte.com',
        createdOn: new Date('2023-12-01T06:56:47.325664Z'),
        ...defaultRelations,
    },
    {
        id: 5946,
        isDeleted: false,
        companyId: 162,
        leaveTypeId: 839,
        policyId: 0,
        employeeId: 4163,
        employeeRef: '',
        joinDate: new Date('1800-01-01T00:00:00Z'),
        effDate: new Date('1800-01-01T00:00:00Z'),
        date: new Date('2023-11-08T00:00:00Z'),
        type: enums_1.EHistoryType.MANUAL,
        sign: 1,
        unit: 1.25,
        balance: 3.75,
        createdBy: 'triln@zigvy.com',
        createdOn: new Date('2023-11-08T02:46:45.527Z'),
        ...defaultRelations,
    },
    {
        id: 5990,
        isDeleted: false,
        companyId: 162,
        leaveTypeId: 839,
        policyId: 117,
        employeeId: 4163,
        employeeRef: '01027232',
        joinDate: new Date('2023-01-03T00:00:00Z'),
        effDate: new Date('2023-01-04T00:00:00Z'),
        date: new Date('2023-11-30T00:00:00Z'),
        type: enums_1.EHistoryType.CREDIT_PRORATE,
        sign: 1,
        unit: 1.25,
        balance: 5,
        createdBy: 'cronjob@hrforte.com',
        createdOn: new Date('2023-12-01T06:42:49.690189Z'),
        ...defaultRelations,
    },
];
//# sourceMappingURL=leave-trx.test-data.js.map