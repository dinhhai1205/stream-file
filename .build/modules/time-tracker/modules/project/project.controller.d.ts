import { IMulterFileUploaded } from '../../../../common/interfaces';
import { ProjectService } from './project.service';
import { AddNewAssigneeDto, AssigneesProjectQueryDto, CreateProjectBodyDto, DeleteProjectsDto, ProjectResponseDto, ProjectStatusResponseDto, RemoveAssigneesDto, UpdateProjectInfoDto } from './dtos';
import { TimeTrackerMapping } from '../../common/decorators/type';
import { PaginationQueryDto } from '../../common';
import { BaseParamDto } from '../../../../common/dto';
export declare class ProjectController {
    private projectService;
    constructor(projectService: ProjectService);
    createProject({ name, description, locationId, clientId, code }: CreateProjectBodyDto, file: IMulterFileUploaded, { timeTrackerCompanyId }: TimeTrackerMapping): Promise<ProjectResponseDto>;
    addNewAssignee({ companyId }: BaseParamDto, projectId: string, addNewAssigneeDto: AddNewAssigneeDto, { timeTrackerCompanyId }: TimeTrackerMapping): Promise<ProjectStatusResponseDto>;
    removeMultipleAssignees({ companyId }: BaseParamDto, projectId: string, removeAssigneesDto: RemoveAssigneesDto, { timeTrackerCompanyId }: TimeTrackerMapping): Promise<ProjectStatusResponseDto>;
    updateProject(projectId: string, file: IMulterFileUploaded, updateProjectInfoDto: UpdateProjectInfoDto, { timeTrackerCompanyId }: TimeTrackerMapping): Promise<ProjectResponseDto>;
    deleteProject(projectId: string, { timeTrackerCompanyId }: TimeTrackerMapping): Promise<ProjectResponseDto>;
    deleteProjects(deleteProjectsDto: DeleteProjectsDto, { timeTrackerCompanyId }: TimeTrackerMapping): Promise<ProjectResponseDto>;
    getAllProjectsByCompanyId({ companyId }: BaseParamDto, paginationQueryDto: PaginationQueryDto, { timeTrackerCompanyId }: TimeTrackerMapping): Promise<{
        data: {
            assigneeEmployees: {
                employeeId: number | undefined;
                employee: {
                    id: number | undefined;
                    companyId: string;
                    workScheduleId: string;
                    groupWorkScheduleId: string;
                    userId: string;
                    roleId: string;
                    roleName: import("../../common").RoleName;
                    email: string;
                    firstName: string;
                    lastName: string;
                    avatar: string;
                    phone: string;
                    address: string;
                    age: number;
                    gender: string;
                    country: string;
                    timezone: string;
                    active: boolean;
                    isDeleted: boolean;
                    createdBy: string;
                    createdOn: Date;
                    updatedBy?: string;
                    updatedOn?: Date;
                };
                projectId: string;
                project: ProjectResponseDto;
                id: string;
                isDeleted: boolean;
                companyId?: string;
                createdBy: string;
                createdOn: Date;
                updatedBy?: string;
                updatedOn?: Date;
            }[];
            assigneeGroups: {
                groupId: number | undefined;
                group: {
                    id: number | undefined;
                    workScheduleId: string;
                    name: string;
                    description: string;
                    active: boolean;
                    members: import("../member/dtos").MemberResponseDto[];
                    isDeleted: boolean;
                    companyId?: string;
                    createdBy: string;
                    createdOn: Date;
                    updatedBy?: string;
                    updatedOn?: Date;
                };
                projectId: string;
                project: ProjectResponseDto;
                id: string;
                isDeleted: boolean;
                companyId?: string;
                createdBy: string;
                createdOn: Date;
                updatedBy?: string;
                updatedOn?: Date;
            }[];
            name: string;
            logo: string;
            description: string;
            code: string;
            active: boolean;
            clientId: string;
            locationId: string;
            id: number;
            isDeleted: boolean;
            companyId: number;
            createdBy: string;
            createdOn: Date;
            updatedBy?: string;
            updatedOn?: Date;
        }[];
        page: number;
        take: number;
        itemCount: number;
        pageCount: number;
        hasPreviousPage: boolean;
        hasNextPage: boolean;
    }>;
    getAllEmployeeAssigneesByProjectId({ companyId }: BaseParamDto, projectId: string, { timeTrackerCompanyId }: TimeTrackerMapping, paginationQueryDto: AssigneesProjectQueryDto): Promise<{
        data: {
            id: string;
            createdOn: string;
            employeeId: string;
            projectId: string;
            employee: {
                id: string;
                roleName: string;
                email: string;
                firstName: string;
                lastName: string;
            };
        }[] | {
            employeeId: number | undefined;
            employee: {
                id: number | undefined;
                roleName: string;
                email: string;
                firstName: string;
                lastName: string;
            };
            id: string;
            createdOn: string;
            projectId: string;
        }[];
        page: number;
        take: number;
        itemCount: number;
        pageCount: number;
        hasPreviousPage: boolean;
        hasNextPage: boolean;
    }>;
    getAllGroupAssigneesByProjectId({ companyId }: BaseParamDto, projectId: string, { timeTrackerCompanyId }: TimeTrackerMapping, paginationQueryDto: AssigneesProjectQueryDto): Promise<{
        data: {
            id: string;
            name: string;
            parentName?: string;
        }[] | {
            id: number | undefined;
            name: string;
            parentName?: string;
        }[];
        page: number;
        take: number;
        itemCount: number;
        pageCount: number;
        hasPreviousPage: boolean;
        hasNextPage: boolean;
    }>;
    getProjectById({ companyId }: BaseParamDto, projectId: string, { timeTrackerCompanyId }: TimeTrackerMapping): Promise<{
        logo: string | null;
        assigneeEmployees: {
            employeeId: string | number;
            employee: {
                id: string | number;
                companyId: string;
                workScheduleId: string;
                groupWorkScheduleId: string;
                userId: string;
                roleId: string;
                roleName: import("../../common").RoleName;
                email: string;
                firstName: string;
                lastName: string;
                avatar: string;
                phone: string;
                address: string;
                age: number;
                gender: string;
                country: string;
                timezone: string;
                active: boolean;
                isDeleted: boolean;
                createdBy: string;
                createdOn: Date;
                updatedBy?: string;
                updatedOn?: Date;
            };
            projectId: string;
            project: ProjectResponseDto;
            id: string;
            isDeleted: boolean;
            companyId?: string;
            createdBy: string;
            createdOn: Date;
            updatedBy?: string;
            updatedOn?: Date;
        }[];
        assigneeGroups: {
            groupId: string | number;
            group: {
                id: string | number;
                workScheduleId: string;
                name: string;
                description: string;
                active: boolean;
                members: import("../member/dtos").MemberResponseDto[];
                isDeleted: boolean;
                companyId?: string;
                createdBy: string;
                createdOn: Date;
                updatedBy?: string;
                updatedOn?: Date;
            };
            projectId: string;
            project: ProjectResponseDto;
            id: string;
            isDeleted: boolean;
            companyId?: string;
            createdBy: string;
            createdOn: Date;
            updatedBy?: string;
            updatedOn?: Date;
        }[];
        name: string;
        description: string;
        code: string;
        active: boolean;
        clientId: string;
        locationId: string;
        id: number;
        isDeleted: boolean;
        companyId: number;
        createdBy: string;
        createdOn: Date;
        updatedBy?: string;
        updatedOn?: Date;
    }>;
}