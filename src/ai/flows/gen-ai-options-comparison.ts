
'use server';
/**
 * @fileOverview A Genkit flow for comparing two career paths and generating AI-powered insights.
 *
 * - compareCareers - A function that handles the comparison of two careers using AI.
 * - CompareCareersInput - The input type for the compareCareers function.
 * - CompareCareersOutput - The return type for the compareCareers function.
 */

import { ai } from '@/ai/genkit';
import { z } from 'genkit';

const CareerDetailSchema = z.object({
  title: z.string().describe('The title of the career.'),
  category: z.string().describe('The category of the career (e.g., Technology, Healthcare).'),
  description: z.string().describe('A brief description or tagline for the career.'),
  dayToDayActivities: z.array(z.string()).describe('A list of typical day-to-day activities for this career.'),
  keySkills: z.array(z.string()).describe('A list of essential skills required for this career.'),
  competitiveExams: z.array(z.string()).describe('A list of competitive exams relevant to this career.'),
  salaryRanges: z.object({
    entryLevel: z.string().describe('Entry-level salary range.'),
    seniorLevel: z.string().describe('Senior-level salary range.'),
  }).describe('Salary ranges for entry and senior levels.'),
  globalOpportunities: z.string().describe('Description of global opportunities in this career.'),
  roadmapSteps: z.array(z.string()).describe('An 8-step roadmap to success for this career.'),
});

const CompareCareersInputSchema = z.object({
  career1: CareerDetailSchema,
  career2: CareerDetailSchema,
});
export type CompareCareersInput = z.infer<typeof CompareCareersInputSchema>;

const CompareCareersOutputSchema = z.object({
  career1Insights: z.object({
    pros: z.array(z.string()).describe('A list of unique pros for Career 1 when compared to Career 2.'),
    cons: z.array(z.string()).describe('A list of unique cons for Career 1 when compared to Career 2.'),
  }).describe('Insights for Career 1 relative to Career 2.'),
  career2Insights: z.object({
    pros: z.array(z.string()).describe('A list of unique pros for Career 2 when compared to Career 1.'),
    cons: z.array(z.string()).describe('A list of unique cons for Career 2 when compared to Career 1.'),
  }).describe('Insights for Career 2 relative to Career 1.'),
  overallSummary: z.string().describe('A concise overall summary highlighting the main differences and suitability of each career based on typical aspirations.'),
});
export type CompareCareersOutput = z.infer<typeof CompareCareersOutputSchema>;

export async function compareCareers(input: CompareCareersInput): Promise<CompareCareersOutput> {
  return compareCareersFlow(input);
}

const comparisonPrompt = ai.definePrompt({
  name: 'careerComparisonPrompt',
  input: { schema: CompareCareersInputSchema },
  output: { schema: CompareCareersOutputSchema },
  config: {
    temperature: 0.3,
  },
  prompt: `You are an expert career counselor. Your task is to compare two career paths and provide unique insights for each, focusing on their differences and relative strengths/weaknesses.

Identify unique pros and cons for Career 1 *in relation to* Career 2, and vice-versa. Think about what makes each career distinct and potentially more or less suitable for someone based on their characteristics compared to the other option. Provide 3-5 pros and 3-5 cons for each.

Finally, provide an overall summary highlighting the main differences and suitability of each career based on typical aspirations.

Career 1 Details:
Title: {{{career1.title}}}
Category: {{{career1.category}}}
Description: {{{career1.description}}}
Day-to-day activities: {{{career1.dayToDayActivities}}}
Key skills: {{{career1.keySkills}}}
Competitive exams: {{{career1.competitiveExams}}}
Salary ranges: Entry - {{{career1.salaryRanges.entryLevel}}}, Senior - {{{career1.salaryRanges.seniorLevel}}}
Global opportunities: {{{career1.globalOpportunities}}}
Roadmap steps: {{{career1.roadmapSteps}}}

Career 2 Details:
Title: {{{career2.title}}}
Category: {{{career2.category}}}
Description: {{{career2.description}}}
Day-to-day activities: {{{career2.dayToDayActivities}}}
Key skills: {{{career2.keySkills}}}
Competitive exams: {{{career2.competitiveExams}}}
Salary ranges: Entry - {{{career2.salaryRanges.entryLevel}}}, Senior - {{{career2.salaryRanges.seniorLevel}}}
Global opportunities: {{{career2.globalOpportunities}}}
Roadmap steps: {{{career2.roadmapSteps}}}
`,
});

const compareCareersFlow = ai.defineFlow(
  {
    name: 'compareCareersFlow',
    inputSchema: CompareCareersInputSchema,
    outputSchema: CompareCareersOutputSchema,
  },
  async (input) => {
    const { output } = await comparisonPrompt(input);
    return output!;
  }
);
