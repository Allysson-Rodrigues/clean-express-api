export interface HttpResponse {
    statusCode: number;
    body: unknown;
}

export interface HttpRequest {
    body?: unknown;
    params?: unknown;
    query?: unknown;
}

export interface Controller {
    handle(httpRequest: HttpRequest): Promise<HttpResponse>;
}
