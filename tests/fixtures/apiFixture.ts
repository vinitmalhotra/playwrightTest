
import { test as base, } from '@playwright/test';
import { apiCatelogue } from '../interfaces/apiCatelogue';

export const apiTest = base.extend<apiCatelogue>(

    {
        GET: async ({ request }, use) => {
            const response = await request.get('https://jsonplaceholder.typicode.com/posts', { 'ignoreHTTPSErrors': true });
            use(response);
        }
    }
)