/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class HealthCheckService {
    /**
     * Get health check
     * @returns any Success
     * @throws ApiError
     */
    public static get(): CancelablePromise<{
        success: boolean;
        message: string;
        responseObject?: any;
        statusCode: number;
    }> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/',
        });
    }
}