export type User = {
  name: string;
  email: string;
  unlockedModules: number; // Highest module unlocked (starts at 1)
};

export type SectionId = 
  | 'home-intro'
  | 'how-it-works'
  | 'philosophy'
  | 'rules'
  | 'db-fiddle'
  | 'instructor'
  | 'recover'
  | 'reviews'
  | 'modules-list'
  | 'module-view';

export interface Module {
  id: number;
  title: string;
}
