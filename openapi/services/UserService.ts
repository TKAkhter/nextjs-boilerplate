/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class UserService {
    /**
     * Get all users
     * @returns any Success
     * @throws ApiError
     */
    public static getUsers(): CancelablePromise<{
        success: boolean;
        message: string;
        responseObject?: Array<{
            uuid: string;
            name: string;
            username: string;
            email: string;
            password: string;
            bio?: string;
            phoneNumber?: string;
            createdAt: string;
            updatedAt: string;
        }>;
        statusCode: number;
    }> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/users',
        });
    }
    /**
     * @param requestBody
     * @returns any User Created Successfully
     * @throws ApiError
     */
    public static postUsers(
        requestBody?: {
            name: string;
            username: string;
            email: string;
            password: string;
            bio?: string;
            phoneNumber?: string;
        },
    ): CancelablePromise<{
        success: boolean;
        message: string;
        responseObject?: {
            name: string;
            username: string;
            email: string;
            password: string;
            bio?: string;
            phoneNumber?: string;
        };
        statusCode: number;
    }> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/users',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * @param requestBody
     * @returns any Users Deleted Successfully
     * @throws ApiError
     */
    public static deleteUsers(
        requestBody?: {
            ids: Array<string>;
        },
    ): CancelablePromise<{
        success: boolean;
        message: string;
        responseObject?: any;
        statusCode: number;
    }> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/users',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Get a single user
     * @param id
     * @returns any Success
     * @throws ApiError
     */
    public static getUsers1(
        id: string,
    ): CancelablePromise<{
        success: boolean;
        message: string;
        responseObject?: {
            uuid: string;
            name: string;
            username: string;
            email: string;
            password: string;
            bio?: string;
            phoneNumber?: string;
            createdAt: string;
            updatedAt: string;
        };
        statusCode: number;
    }> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/users/{id}',
            path: {
                'id': id,
            },
        });
    }
    /**
     * @param id
     * @param requestBody
     * @returns any User Updated Successfully
     * @throws ApiError
     */
    public static putUsers(
        id: string,
        requestBody?: {
            name: string;
            username: string;
            email: string;
            bio?: string;
            phoneNumber?: string;
        },
    ): CancelablePromise<{
        success: boolean;
        message: string;
        responseObject?: {
            name: string;
            username: string;
            email: string;
            bio?: string;
            phoneNumber?: string;
        };
        statusCode: number;
    }> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/users/{id}',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Delete user
     * @param id
     * @returns any User Deleted Successfully
     * @throws ApiError
     */
    public static deleteUsers1(
        id: string,
    ): CancelablePromise<{
        success: boolean;
        message: string;
        responseObject?: any;
        statusCode: number;
    }> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/users/{id}',
            path: {
                'id': id,
            },
        });
    }
    /**
     * Get user by email
     * @param email
     * @returns any Success
     * @throws ApiError
     */
    public static getUsersEmail(
        email: string,
    ): CancelablePromise<{
        success: boolean;
        message: string;
        responseObject?: {
            uuid: string;
            name: string;
            username: string;
            email: string;
            password: string;
            bio?: string;
            phoneNumber?: string;
            createdAt: string;
            updatedAt: string;
        };
        statusCode: number;
    }> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/users/email/{email}',
            path: {
                'email': email,
            },
        });
    }
    /**
     * @param requestBody
     * @returns any Success
     * @throws ApiError
     */
    public static postUsersFind(
        requestBody?: {
            page?: number;
            rowsPerPage?: number;
            sort?: string;
            filter?: Record<string, any>;
        },
    ): CancelablePromise<{
        success: boolean;
        message: string;
        responseObject?: Array<{
            page?: number;
            rowsPerPage?: number;
            sort?: string;
            filter?: Record<string, any>;
        }>;
        statusCode: number;
    }> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/users/find',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
}
