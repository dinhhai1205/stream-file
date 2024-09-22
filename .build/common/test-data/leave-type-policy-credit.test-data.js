"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.leaveTypePolicyCreditTestData = void 0;
const defaultRelations = {
    leaveTypeId: 0,
    leavePolicy: {},
    employee: {},
    employeePolicy: {},
    carryForward: 0,
    creditTrxs: [],
};
exports.leaveTypePolicyCreditTestData = [
    {
        id: 1678,
        uuid: 'f56e69cf-49b8-49f1-afa5-b2c8ba932125',
        leavePolicyId: 119,
        employeeId: 4171,
        companyId: 162,
        credit: 4.26,
        creditRemaining: 4.26,
        creditedOn: new Date('2023-11-30T18:00:00Z'),
        carryForwardRemaining: 0,
        carryForwardOn: undefined,
        expiresOn: undefined,
        isDeleted: false,
        createdBy: 'cronjob@hrforte.com',
        updatedBy: 'cronjob@hrforte.com',
        createdOn: new Date('2023-09-21T18:00:02Z'),
        updatedOn: new Date('2023-12-01T06:56:47T'),
        ...defaultRelations,
    },
    {
        id: 1425,
        uuid: '0baea870-aa22-4a3b-adfc-d7c11b097c04',
        leavePolicyId: 117,
        employeeId: 4163,
        companyId: 162,
        credit: 5,
        creditRemaining: 5,
        creditedOn: new Date('2023-11-30T18:00:00Z'),
        carryForwardRemaining: 0,
        carryForwardOn: undefined,
        expiresOn: undefined,
        isDeleted: false,
        createdBy: 'cronjob@hrforte.com',
        updatedBy: 'cronjob@hrforte.com',
        createdOn: new Date('2023-08-09T18:00:00Z'),
        updatedOn: new Date('2023-12-01T06:42:49T'),
        ...defaultRelations,
    },
    {
        id: 1679,
        uuid: '867ddec5-6765-4ac0-a00b-c3ad213218b6',
        leavePolicyId: 118,
        employeeId: 4169,
        companyId: 162,
        credit: 3.99,
        creditRemaining: 3.99,
        creditedOn: new Date('2023-11-30T18:00:00Z'),
        carryForwardRemaining: 0,
        carryForwardOn: undefined,
        expiresOn: undefined,
        isDeleted: false,
        createdBy: 'cronjob@hrforte.com',
        updatedBy: 'cronjob@hrforte.com',
        createdOn: new Date('2023-09-21T18:00:02Z'),
        updatedOn: new Date('2023-12-01T06:56:47T'),
        ...defaultRelations,
    },
];
//# sourceMappingURL=leave-type-policy-credit.test-data.js.map