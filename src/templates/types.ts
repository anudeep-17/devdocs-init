export type ProjectType = 'personal' | 'college' | 'freelance';

export interface TemplateFile {
  /** Path relative to the docs directory. */
  path: string;
  /** File contents before placeholder replacement. */
  content: string;
}

export interface SectionToggle {
  product: boolean;
  requirements: boolean;
  architecture: boolean;
  adr: boolean;
  qa: boolean;
  ops: boolean;
  process: boolean;
}
