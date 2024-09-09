declare module 'jszip-utils' {
    export function getBinaryContent(
      path: string,
      callback: (error: any, data: any) => void
    ): void;
  }