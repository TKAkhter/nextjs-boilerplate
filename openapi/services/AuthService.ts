/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class AuthService {
    /**
     * @param requestBody
     * @returns any Login Successfully
     * @throws ApiError
     */
    public static postAuthLogin(
        requestBody?: {
            email: string;
            password: string;
        },
    ): CancelablePromise<{
        success: boolean;
        message: string;
        responseObject?: {
            email: string;
            password: string;
        };
        statusCode: number;
    }> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/auth/login',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * @param requestBody
     * @returns any Register Successfully
     * @throws ApiError
     */
    public static postAuthRegister(
        requestBody?: {
            name: string;
            username: string;
            email: string;
            password: string;
            confirmPassword: string;
        },
    ): CancelablePromise<{
        success: boolean;
        message: string;
        responseObject?: {
            name: string;
            username: string;
            email: string;
            password: string;
            confirmPassword: string;
        };
        statusCode: number;
    }> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/auth/register',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * @param requestBody
     * @returns any Token Extended Successfully
     * @throws ApiError
     */
    public static postAuthExtendToken(
        requestBody?: {
            token: string;
        },
    ): CancelablePromise<{
        success: boolean;
        message: string;
        responseObject?: {
            token: string;
        };
        statusCode: number;
    }> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/auth/extend-token',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * @param requestBody
     * @returns any Logout Successfully
     * @throws ApiError
     */
    public static postAuthLogout(
        requestBody?: any,
    ): CancelablePromise<{
        success: boolean;
        message: string;
        responseObject?: {
            success: boolean;
        };
        statusCode: number;
    }> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/auth/logout',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
}
