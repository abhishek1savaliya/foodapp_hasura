import { Client, cacheExchange, fetchExchange } from 'urql';

const client = new Client({
    url: process.env.NEXT_PUBLIC_HASURA_PROJECT_ENDPOINT as string,
    exchanges: [cacheExchange, fetchExchange],
    fetchOptions: () => {
        return {
            headers: {
                "x-hasura-admin-secret": process.env.HASURA_ADMIN_SECRET as string
            },
        };
    },
});

export default client