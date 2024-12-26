/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class FileService {
    /**
     * Get all files
     * @returns any Success
     * @throws ApiError
     */
    public static getFiles(): CancelablePromise<{
        success: boolean;
        message: string;
        responseObject?: Array<{
            uuid: string;
            filePath?: string;
            tags: string;
            fileName?: string;
            fileText?: string;
            views?: string;
            userId?: string;
            createdAt?: string;
            updatedAt?: string;
        }>;
        statusCode: number;
    }> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/files',
        });
    }
    /**
     * Get a single file
     * @param id
     * @returns any Success
     * @throws ApiError
     */
    public static getFiles1(
        id: string,
    ): CancelablePromise<{
        success: boolean;
        message: string;
        responseObject?: {
            uuid: string;
            filePath?: string;
            tags: string;
            fileName?: string;
            fileText?: string;
            views?: string;
            userId?: string;
            createdAt?: string;
            updatedAt?: string;
        };
        statusCode: number;
    }> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/files/{id}',
            path: {
                'id': id,
            },
        });
    }
    /**
     * @param id
     * @param formData
     * @returns any File updated Successfully
     * @throws ApiError
     */
    public static putFiles(
        id: string,
        formData?: {
            filePath?: string;
            tags: string;
            fileName?: string;
            fileText?: string;
            views?: string;
            userId?: string;
            /**
             * The file to upload
             */
            file?: Blob;
        },
    ): CancelablePromise<{
        success: boolean;
        message: string;
        responseObject?: {
            filePath?: string;
            tags: string;
            fileName?: string;
            fileText?: string;
            views?: string;
            userId?: string;
            /**
             * The file to upload
             */
            file?: Blob;
        };
        statusCode: number;
    }> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/files/{id}',
            path: {
                'id': id,
            },
            formData: formData,
            mediaType: 'multipart/form-data',
        });
    }
    /**
     * Delete file
     * @param id
     * @returns any File deleted Successfully
     * @throws ApiError
     */
    public static deleteFiles(
        id: string,
    ): CancelablePromise<{
        success: boolean;
        message: string;
        responseObject?: any;
        statusCode: number;
    }> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/files/{id}',
            path: {
                'id': id,
            },
        });
    }
    /**
     * @param formData
     * @returns any File uploaded Successfully
     * @throws ApiError
     */
    public static postFilesUpload(
        formData?: {
            filePath?: string;
            tags: string;
            fileName?: string;
            fileText?: string;
            views?: string;
            userId?: string;
            /**
             * The file to upload
             */
            file?: Blob;
        },
    ): CancelablePromise<{
        success: boolean;
        message: string;
        responseObject?: {
            filePath?: string;
            tags: string;
            fileName?: string;
            fileText?: string;
            views?: string;
            userId?: string;
            /**
             * The file to upload
             */
            file?: Blob;
        };
        statusCode: number;
    }> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/files/upload',
            formData: formData,
            mediaType: 'multipart/form-data',
        });
    }
}
