
export interface CampaignStats {
  target: number;
  current: number;
}

export interface SectionContent {
  title: string;
  subtitle?: string;
  content: string;
}

export type ActionType = 'DONATE' | 'VOLUNTEER' | 'EXPERT';
