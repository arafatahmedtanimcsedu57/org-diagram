export interface ChildNodeProps {
  relation?: string;
  childId?: string;
  children?: ChildNodeProps[];
  subId?: string;
  subs?: ChildNodeProps[];
}

export interface RelationProps {
  [key: string]: string;
}
