declare interface Window {
    jsData: {
        LANGUAGE: string;
    } & any;
    ENVIRONMENT: string | undefined;
    RELEASE_VERSION: string | undefined;
}

declare module 'tailwindcss/resolveConfig';
