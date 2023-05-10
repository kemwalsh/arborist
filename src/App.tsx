import "./styles.css";
import { Tree } from "react-arborist";
import { data } from "./data";
import { NodeRendererProps } from "react-arborist";

function Node({ node, style, dragHandle }: NodeRendererProps<any>) {
  const updatedStyle = {
    ...style
  };
  console.log(style);

  return (
    <div style={updatedStyle} ref={dragHandle} onClick={() => node.toggle()}>
      <div style={{ border: "1px solid" }}>
        {node.isLeaf ? "👷🏻‍♀️" : "👷🏼"} {node.data.name}
      </div>
    </div>
  );
}

export default function App() {
  return (
    <div className="App">
      <Tree className="node" initialData={data} rowHeight={35}>
        {Node}
      </Tree>
    </div>
  );
}
