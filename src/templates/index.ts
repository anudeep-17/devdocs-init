import { ProjectType, SectionToggle, TemplateFile } from './types';
import { getPersonalProductTemplates } from './personal/product';
import { getPersonalRequirementsTemplates } from './personal/requirements';
import { getPersonalArchitectureTemplates } from './personal/architecture';
import { getPersonalQATemplates } from './personal/qa';
import { getPersonalOpsTemplates } from './personal/ops';
import { getPersonalProcessTemplates } from './personal/process';
import { getPersonalAdrTemplates } from './personal/adr';
import { getCollegeProductTemplates } from './college/product';
import { getCollegeRequirementsTemplates } from './college/requirements';
import { getCollegeArchitectureTemplates } from './college/architecture';
import { getCollegeProcessTemplates } from './college/process';
import { getCollegeQATemplates } from './college/qa';
import { getCollegeOpsTemplates } from './college/ops';
import { getFreelanceProductTemplates } from './freelance/product';
import { getFreelanceRequirementsTemplates } from './freelance/requirements';
import { getFreelanceArchitectureTemplates } from './freelance/architecture';
import { getFreelanceProcessTemplates } from './freelance/process';
import { getFreelanceQATemplates } from './freelance/qa';
import { getFreelanceOpsTemplates } from './freelance/ops';
import { getFreelanceAdrTemplates } from './freelance/adr';

function getSectionTemplates(projectType: ProjectType, section: keyof SectionToggle): TemplateFile[] {
  const personal = {
    product: getPersonalProductTemplates,
    requirements: getPersonalRequirementsTemplates,
    architecture: getPersonalArchitectureTemplates,
    adr: getPersonalAdrTemplates,
    qa: getPersonalQATemplates,
    ops: getPersonalOpsTemplates,
    process: getPersonalProcessTemplates
  } as const;

  const college = {
    product: getCollegeProductTemplates,
    requirements: getCollegeRequirementsTemplates,
    architecture: getCollegeArchitectureTemplates,
    adr: getPersonalAdrTemplates,
    qa: getCollegeQATemplates,
    ops: getCollegeOpsTemplates,
    process: getCollegeProcessTemplates
  } as const;

  const freelance = {
    product: getFreelanceProductTemplates,
    requirements: getFreelanceRequirementsTemplates,
    architecture: getFreelanceArchitectureTemplates,
    adr: getFreelanceAdrTemplates,
    qa: getFreelanceQATemplates,
    ops: getFreelanceOpsTemplates,
    process: getFreelanceProcessTemplates
  } as const;

  const mapping: Record<ProjectType, Record<keyof SectionToggle, () => TemplateFile[]>> = {
    personal,
    college,
    freelance
  };

  return mapping[projectType][section]();
}

export function collectTemplates(projectType: ProjectType, toggles: SectionToggle): TemplateFile[] {
  const templates: TemplateFile[] = [];

  (Object.keys(toggles) as Array<keyof SectionToggle>).forEach((section) => {
    if (toggles[section]) {
      templates.push(...getSectionTemplates(projectType, section));
    }
  });

  return templates;
}
