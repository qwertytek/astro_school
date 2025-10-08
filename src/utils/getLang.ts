export type LangType = 'pt' | 'en';

export type LangTypeSchemaObject = { [k in LangType]: string }

export const getLang = (params: Record<string, string | undefined>): LangType => (
  params.lang === 'en' ? 'en' : 'pt'
);
