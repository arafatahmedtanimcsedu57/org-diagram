import { ChildNodeProps } from "../const/types";
import { getValue } from "../const/lang";
import { relations } from "../const/relations";

let dataString: string = ``;
const lang = "BN";

const getSubs = (id: string, children: ChildNodeProps[]) => {
  dataString = `${dataString}
    subgraph ${id}
    direction LR
    `;
  children.forEach((child: ChildNodeProps) => {
    dataString = `${dataString}
        ${child.childId}[${getValue(child.childId as string, lang)}]`;
    if (child.children) {
      nodeTypeController(child);
    }
  });
  dataString = `${dataString}
    end`;
};

const getRelations = (parentNodeString: string, children: ChildNodeProps[]) => {
  children.forEach((child: ChildNodeProps) => {
    let relationString = child.relation
      ? `${relations[child.relation as string]}`
      : ``;

    let childNodeString = child.childId
      ? `${child.childId}[${getValue(child.childId as string, lang)}]`
      : ``;

    let subNodeString = child.subId ? child.subId : ``;

    dataString = `${dataString}
        ${parentNodeString}
        ${relationString}
        ${childNodeString}${subNodeString}
        `;

    if (child.children) {
      nodeTypeController(child);
    } else if (child.subs) {
      getSubs(child.subId as string, child.subs);
    }
  });
};

const nodeTypeController = (data: ChildNodeProps) => {
  let currentNodeString = data.childId
    ? `${data.childId}[${getValue(data.childId as string, lang)}]`
    : ``;

  if (data.children) {
    let parentNodeString = currentNodeString;
    getRelations(parentNodeString, data.children);
  }
};

const getChartData = (data: ChildNodeProps): string => {
  dataString = `graph LR`;
  nodeTypeController(data);

  return dataString;
};

export { getChartData };
