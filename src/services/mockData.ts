import type { Section } from '../types/Section';

export const mockSection: Section = {
  templateIds: [{ root: '2.16.840.1.113883.10.20.22.2.5.1', extension: null }],
  code: {
    code: '11450-4',
    displayName: 'Problem List',
    codeSystem: '2.16.840.1.113883.6.1',
    codeSystemName: 'LOINC',
    nullFlavor: null,
    xsiType: null,
    translations: [],
  },
  title: 'Problems',
  text: null,
  entries: [
    {
      clinicalStatement: {
        entryAct: {
          classCode: 'ACT',
          moodCode: 'EVN',
          actBody: {
            templateIds: [],
            id: { root: '1.2.3.4', extension: 'problem-1' },
            code: null,
            statusCode: 'active',
            effectiveTime: { low: '20200315', high: null, nullFlavor: null, value: null },
            entryRelationships: [
              {
                typeCode: 'SUBJ',
                observation: {
                  classCode: 'OBS',
                  moodCode: 'EVN',
                  templateIds: [],
                  id: { root: '1.2.3.4', extension: 'obs-1' },
                  code: {
                    code: '55607006',
                    displayName: 'Problem',
                    codeSystem: '2.16.840.1.113883.6.96',
                    codeSystemName: 'SNOMED CT',
                    nullFlavor: null,
                    xsiType: null,
                    translations: [],
                  },
                  statusCode: 'completed',
                  text: { value: 'Type 2 Diabetes Mellitus' },
                  effectiveTime: { low: '20200315', high: null, nullFlavor: null, value: null },
                  value: {
                    code: {
                      code: '44054006',
                      displayName: 'Type 2 Diabetes Mellitus',
                      codeSystem: '2.16.840.1.113883.6.96',
                      codeSystemName: 'SNOMED CT',
                      nullFlavor: null,
                      xsiType: null,
                      translations: [],
                    },
                    originalText: { value: 'Type 2 Diabetes' },
                  },
                  author: null,
                  entryRelationships: [],
                },
              },
            ],
          },
        },
      },
    },
  ],
};