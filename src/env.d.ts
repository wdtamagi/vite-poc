interface ImportMetaEnv extends Readonly<Record<string, string>> {
  readonly VITE_GRAPHQL_URL: string;
  readonly VITE_YELP_TOKEN: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
