import { Workbook } from 'exceljs';
import { Repository } from 'typeorm';
import { PayCalculationMethod, TypeOrmBaseService } from '../../../../core/database';
import { PayrollTimeSheetEntity } from '../../../../core/database/entities/payroll-timesheet.entity';
import { PayRollGroupService } from '../../../payroll/modules/payroll-group/payroll-group.service';
import { PrtrxEmpService } from '../../../payroll/modules/prtrx-emp/prtrx-emp.service';
import { PrtrxHdrService } from '../../../payroll/modules/prtrx-hdr/prtrx-hdr.service';
import { EmployeeService } from '../../../user/modules/employee/employee.service';
import { IMulterFileUploaded } from '../../common/interfaces';
import { TimeSheetAdjustmentService } from '../timesheet-adjustment/services';
import { WorkScheduleService } from '../work-schedule';
import { CreateMultiPayrollTimeSheetDto, CreatePayrollByPrtrxHdrDto, CreatePayrollTimeSheetDto, QueryWithPaginationDto, UpdatePayrollTimeSheetDto } from './dtos';
export declare class PayrollTimeSheetService extends TypeOrmBaseService<PayrollTimeSheetEntity> {
    private readonly payrollTimeSheetRepository;
    private readonly timeSheetAdjustmentService;
    private readonly workScheduleService;
    private readonly employeeService;
    private readonly prtrxHdrService;
    private readonly prtrxEmpService;
    private readonly payrollGroupService;
    constructor(payrollTimeSheetRepository: Repository<PayrollTimeSheetEntity>, timeSheetAdjustmentService: TimeSheetAdjustmentService, workScheduleService: WorkScheduleService, employeeService: EmployeeService, prtrxHdrService: PrtrxHdrService, prtrxEmpService: PrtrxEmpService, payrollGroupService: PayRollGroupService);
    createPayroll(createPayrollDto: CreatePayrollTimeSheetDto, companyId: number, userEmail: string): Promise<PayrollTimeSheetEntity>;
    createMultiPayrolls(createPayrollDto: CreateMultiPayrollTimeSheetDto, companyId: number, userEmail: string): Promise<PayrollTimeSheetEntity[]>;
    createMultiPayrollsV2(createPayrollDto: CreateMultiPayrollTimeSheetDto, companyId: number, userEmail: string): Promise<PayrollTimeSheetEntity[]>;
    createPayrollsForEmployeesInPrtrxHdr(createQuery: CreatePayrollByPrtrxHdrDto, prtrxHdrId: number, companyId: number, userEmail: string): Promise<never[] | {
        data: {
            id: number;
            employeeId: number;
            fullNameLocal: string | null;
            fullNameEn: string | null;
            employeeRef: string | null;
            orgElement: string | null;
            payrollGroup: string | null;
            costCenter: string | null;
            payrollHeader: number | null;
            totalScheduledWorkDays: number | undefined;
            totalScheduledWorkHours: number | undefined;
            adjustmentDaysAdditionDays: number;
            adjustmentDaysDeductionDays: number;
            unpaidDays: number;
            totalPayrollRegularWorkDays: number;
            adjustments: import("../timesheet-adjustment/dtos").TimeSheetAdjustmentDto[];
        }[];
        page: number;
        take: number;
        itemCount: number;
        pageCount: number;
        hasPreviousPage: boolean;
        hasNextPage: boolean;
    }>;
    archivePayroll(payrollId: number, userEmail: string): Promise<PayrollTimeSheetEntity>;
    restorePayroll(payrollId: number, userEmail: string): Promise<PayrollTimeSheetEntity>;
    updatePayroll(payrollId: number, updatePayload: UpdatePayrollTimeSheetDto, userEmail: string): Promise<PayrollTimeSheetEntity>;
    getEntityUpdatePayrollRegularWorkDays(payrollId: number, companyId: number, userEmail: string): Promise<{
        id: number;
        totalPayrollRegularWorkDays: number;
        updatedBy: string;
        updatedOn: Date;
    } | null>;
    updatePayrollsWorksheduledDays(prtrxHdrId: number, companyId: number, userEmail: string): Promise<({
        id: number | undefined;
        totalScheduledWorkDays: number;
        totalScheduledWorkHours: number;
        createdBy: string | undefined;
        createdOn: Date | undefined;
        updatedBy: string | undefined;
        updatedOn: Date | undefined;
    } & PayrollTimeSheetEntity)[]>;
    getAllPayrollsOfCompany(companyId: number, payrollCalculationMethod: PayCalculationMethod | undefined, paginationQueryDto: QueryWithPaginationDto): Promise<{
        data: {
            fullNameLocal: string | null;
            fullNameEn: string | null;
            employeeRef: string | null;
            orgElement: string | null;
            payrollGroup: string | null;
            costCenter: string | null;
            totalScheduledWorkDays: number | undefined;
            totalScheduledWorkHours: number | undefined;
            adjustmentDaysAdditionDays: number;
            adjustmentDaysDeductionDays: number;
            unpaidDays: number;
            totalPayrollRegularWorkDays: number;
            adjustments: import("../timesheet-adjustment/dtos").TimeSheetAdjustmentDto[];
        }[];
        page: number;
        take: number;
        itemCount: number;
        pageCount: number;
        hasPreviousPage: boolean;
        hasNextPage: boolean;
    }>;
    getAllPayrollsOfEmployee(employeeId: number, companyId: number, payrollCalculationMethod: PayCalculationMethod | undefined, paginationQueryDto: QueryWithPaginationDto): Promise<{
        data: {
            fullNameLocal: string | null;
            fullNameEn: string | null;
            employeeRef: string | null;
            orgElement: string | null;
            payrollGroup: string | null;
            costCenter: string | null;
            totalScheduledWorkDays: number | undefined;
            totalScheduledWorkHours: number | undefined;
            adjustmentDaysAdditionDays: number;
            adjustmentDaysDeductionDays: number;
            unpaidDays: number;
            totalPayrollRegularWorkDays: number;
            adjustments: import("../timesheet-adjustment/dtos").TimeSheetAdjustmentDto[];
        }[];
        page: number;
        take: number;
        itemCount: number;
        pageCount: number;
        hasPreviousPage: boolean;
        hasNextPage: boolean;
    }>;
    getPayrollsByHeaderId(payrollHeaderId: number, companyId: number, payrollCalculationMethod: PayCalculationMethod | undefined, paginationQueryDto: QueryWithPaginationDto): Promise<{
        data: {
            id: number;
            employeeId: number;
            fullNameLocal: string | null;
            fullNameEn: string | null;
            employeeRef: string | null;
            orgElement: string | null;
            payrollGroup: string | null;
            costCenter: string | null;
            payrollHeader: number | null;
            totalScheduledWorkDays: number | undefined;
            totalScheduledWorkHours: number | undefined;
            adjustmentDaysAdditionDays: number;
            adjustmentDaysDeductionDays: number;
            unpaidDays: number;
            totalPayrollRegularWorkDays: number;
            adjustments: import("../timesheet-adjustment/dtos").TimeSheetAdjustmentDto[];
        }[];
        page: number;
        take: number;
        itemCount: number;
        pageCount: number;
        hasPreviousPage: boolean;
        hasNextPage: boolean;
    }>;
    getPayrollsByHeaderIdV2(payrollHeaderId: number, companyId: number, payrollCalculationMethod: PayCalculationMethod | undefined, paginationQueryDto: QueryWithPaginationDto): Promise<{
        data: {
            id: number;
            employeeId: number;
            fullNameLocal: string | null;
            fullNameEn: string | null;
            employeeRef: string | null;
            orgElement: string | null;
            payrollGroup: string | null;
            costCenter: string | null;
            payrollHeader: number | null;
            totalScheduledWorkDays: number | undefined;
            totalScheduledWorkHours: number | undefined;
            adjustmentDaysAdditionDays: number;
            adjustmentDaysDeductionDays: number;
            unpaidDays: number;
            totalPayrollRegularWorkDays: number;
            adjustments: import("../timesheet-adjustment/dtos").TimeSheetAdjustmentDto[];
        }[];
        page: number;
        take: number;
        itemCount: number;
        pageCount: number;
        hasPreviousPage: boolean;
        hasNextPage: boolean;
    }>;
    getPayrollsByHeaderIdWithoutPagination(payrollHeaderId: number, companyId: number, payrollCalculationMethod: PayCalculationMethod | undefined, paginationQueryDto: QueryWithPaginationDto): Promise<{
        id: number;
        employeeId: number;
        fullNameLocal: string | null;
        fullNameEn: string | null;
        employeeRef: string | null;
        orgElement: string | null;
        payrollGroup: string | null;
        costCenter: string | null;
        payrollHeader: number | null;
        totalScheduledWorkDays: number | undefined;
        totalScheduledWorkHours: number | undefined;
        adjustmentDaysAdditionDays: number;
        adjustmentDaysDeductionDays: number;
        unpaidDays: number;
        totalPayrollRegularWorkDays: number;
        adjustments: import("../timesheet-adjustment/dtos").TimeSheetAdjustmentDto[];
    }[]>;
    getAllPayrollsByHeaderId(payrollHeaderId: number, companyId: number, paginationQueryDto: QueryWithPaginationDto): Promise<{
        data: {
            id: number;
            employeeId: number;
            fullNameLocal: string | null;
            fullNameEn: string | null;
            employeeRef: string | null;
            orgElement: string | null;
            payrollGroup: string | null;
            costCenter: string | null;
            payrollHeader: number | null;
            totalScheduledWorkDays: number | undefined;
            totalScheduledWorkHours: number | undefined;
            adjustmentDaysAdditionDays: number;
            adjustmentDaysDeductionDays: number;
            unpaidDays: number;
            totalPayrollRegularWorkDays: number;
            adjustments: import("../timesheet-adjustment/dtos").TimeSheetAdjustmentDto[];
        }[];
        page: number;
        take: number;
        itemCount: number;
        pageCount: number;
        hasPreviousPage: boolean;
        hasNextPage: boolean;
    }>;
    private getDayToProrate;
    getPayrollTimesheetIdByPrtrxHdrId(prtrxHdrId: number, companyId: number): Promise<PayrollTimeSheetEntity[]>;
    getPayrollTimesheetIdByEidPrtrxHdrId(employeeIds: number[], prtrxHdrId: number): Promise<PayrollTimeSheetEntity[]>;
    handleValidateHeader(actualHeaders: string[], type: PayCalculationMethod): Promise<void>;
    handleValidateAndFormatData(companyId: number, payrollHeaderId: number, data: {
        [key: string]: any;
    }[], type: PayCalculationMethod): Promise<UpdatePayrollTimeSheetDto[]>;
    handleCreateRawFile(type: PayCalculationMethod, payrollHeaderId?: number): Promise<{
        workbook: Workbook;
        worksheet: import("exceljs").Worksheet;
        fileName: string;
    }>;
    handleCreateSampleFile(type: PayCalculationMethod, payrollHeaderId?: number): Promise<{
        workbook: Workbook;
        worksheet: import("exceljs").Worksheet;
        fileName: string;
    }>;
    handleExportFilePayrollTimesheet(companyId: number, payrollHeaderId: number, type: PayCalculationMethod, query: QueryWithPaginationDto): Promise<{
        buffer: import("exceljs").Buffer;
        fileName: string;
    }>;
    handleImportFilePayrollTimesheetFile(companyId: number, payrollHeaderId: number, file: IMulterFileUploaded, userEmail: string, type: PayCalculationMethod): Promise<{
        message: string;
    }>;
    handleGetSampleData(payrollCalculationMethod: PayCalculationMethod, companyId: number, headerId: number): Promise<{
        id: number;
        employeeId: number;
        fullNameLocal: string | null;
        fullNameEn: string | null;
        employeeRef: string | null;
        orgElement: string | null;
        payrollGroup: string | null;
        costCenter: string | null;
        payrollHeader: number | null;
        totalScheduledWorkDays: number | undefined;
        totalScheduledWorkHours: number | undefined;
        adjustmentDaysAdditionDays: number;
        adjustmentDaysDeductionDays: number;
        unpaidDays: number;
        totalPayrollRegularWorkDays: number;
        adjustments: import("../timesheet-adjustment/dtos").TimeSheetAdjustmentDto[];
    }[] | null>;
    handleGeneratePayrollTimesheetExcelFile(type: PayCalculationMethod, companyId: number, headerId: number): Promise<{
        buffer: import("exceljs").Buffer;
        fileName: string;
    }>;
    archiveAllPayrollTimesheets(prtrxHdrId: number, companyId: number, userEmail: string): Promise<import("typeorm").UpdateResult>;
    archiveMultiPayrollTimesheet(employeeIds: number[], prtrxHdrId: number, companyId: number, userEmail: string): Promise<import("typeorm").UpdateResult>;
    calculatePayrollRegularWorkDays(payrollId: number, companyId: number): Promise<number>;
}