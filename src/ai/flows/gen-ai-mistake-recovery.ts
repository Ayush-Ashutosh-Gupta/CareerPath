
'use server';
/**
 * @fileOverview This file implements a Genkit flow for AI-guided mistake recovery.
 * It helps users who feel they've chosen the wrong academic stream by providing
 * AI-generated rationales and customized alternative career pathways.
 */

import { ai } from '@/ai/genkit';
import { z } from 'genkit';

const MistakeRecoveryInputSchema = z.object({
  mistakeType: z.string().describe('The user\'s description of their academic mistake, e.g., "I chose PCM but wanted PCB".'),
  userContextCareers: z.array(z.object({
    name: z.string(),
    category: z.string(),
    tagline: z.string(),
  })).describe('Relevant careers or context to help tailor the suggestion.'),
});
export type MistakeRecoveryInput = z.infer<typeof MistakeRecoveryInputSchema>;

const MistakeRecoveryOutputSchema = z.object({
  rationale: z.string().describe('An AI-generated explanation of the transition opportunity.'),
  alternativeCareerPathways: z.array(z.object({
    name: z.string().describe('The name of the alternative career.'),
    category: z.string().describe('The category.'),
    justification: z.string().describe('Why this is a perfect "backup" or "pivot" given the current stream.'),
  })).describe('3-5 suggested alternatives.'),
});
export type MistakeRecoveryOutput = z.infer<typeof MistakeRecoveryOutputSchema>;

export async function genAIMistakeRecovery(input: MistakeRecoveryInput): Promise<MistakeRecoveryOutput> {
  return genAIMistakeRecoveryFlow(input);
}

const mistakeRecoveryPrompt = ai.definePrompt({
  name: 'mistakeRecoveryPrompt',
  input: { schema: MistakeRecoveryInputSchema },
  output: { schema: MistakeRecoveryOutputSchema },
  config: {
    temperature: 0.3,
  },
  prompt: `You are a visionary career pivot counselor.

A student feels they have made a mistake in their academic stream: "{{{mistakeType}}}".

Your goal is to provide a "Mistake Recovery" plan. For example, if they chose PCM (MPC - Math/Physics/Chemistry) but want a Bio future, suggest careers like Biotech, Biomedical Engineering, or Computational Biology where their Math background is a massive STRENGTH, not a mistake.

Provide:
1. A supportive rationale explaining how their current "mistake" is actually an "alternate advantage".
2. A list of 3-5 specific careers that bridge their current stream with their desired interest.

Output in JSON format.`,
});

const genAIMistakeRecoveryFlow = ai.defineFlow(
  {
    name: 'genAIMistakeRecoveryFlow',
    inputSchema: MistakeRecoveryInputSchema,
    outputSchema: MistakeRecoveryOutputSchema,
  },
  async (input) => {
    const { output } = await mistakeRecoveryPrompt(input);
    return output!;
  }
);
