import { APIRequest, APIResponse } from "@playwright/test";

export interface apiCatelogue {

    GET: APIResponse,
    PUT: APIResponse,
    POST: APIResponse,
    DELETE: APIResponse

}