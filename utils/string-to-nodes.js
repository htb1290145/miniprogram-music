export function stringToNodes(keyword,keyValue) {
  const nodes = [];
  // 如果关键字在开头
  if (keyword.startsWith(keyValue)) {
    // 爱
    // slice 返回一个新数组，不修改原数组。从start开始至end结束，但不包括end——总共返回第二个参数的数字的个数参数
    const key1 = keyword.slice(0, keyValue.length);
    const node1 = {
      name: "span",
      attrs: {
        style: "color:red",
      },
      children: [{ type: "text", text: key1 }],
    };
    nodes.push(node1);
    // 人错过
    const key2 = keyword.slice(keyValue.length); // slice 只写第一个参数，默认返回从参数开始至结束
    const node2 = {
      name: "span",
      children: [{ type: "text", text: key2 }],
    };
    nodes.push(node2);
  } else {
    // 没有匹配上，全部展示关键字
    const node = {
      name: "span",
      children: [{ type: "text", text: keyword }],
    };
    nodes.push(node);
  }
  return nodes;
}
