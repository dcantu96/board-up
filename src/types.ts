// eslint-disable-next-line @typescript-eslint/no-empty-object-type
export type PageProps<T extends Record<string, string> = {}> = {
  params: T;
  searchParams?: { [key: string]: string | string[] | undefined };
};
