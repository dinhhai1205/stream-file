import { IMulterFileUploaded } from '../../common/interfaces/multer-file-uploaded.interface';
export declare class MulterFileUploadedDto implements Omit<IMulterFileUploaded, 'fieldname' | 'encoding'> {
    size: number;
    originalname: string;
    mimetype: string;
    buffer: Buffer;
}