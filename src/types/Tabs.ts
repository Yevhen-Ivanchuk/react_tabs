export interface TabsType {
  tabs: Tab[];
  selectedTabId: string;
  onTabSelected: (arg: Tab) => void;
}

export type Tab = {
  id: string;
  title: string;
  content: string;
};