import "./styles.css";
import { Tree, NodeRendererProps } from "react-arborist";
import { data } from "./data";


function Node({ node, style, dragHandle }: NodeRendererProps<any>) {
  const updatedStyle = {
    ...style
  };


  return (
    <div className="node-tree" style={updatedStyle} ref={dragHandle}
    onClick={() => node.toggle()}>
      <div style={{ border: "1px solid" }}>
        {node.isLeaf ? <img style={{ width:'30px', height:'30px', borderRight: "2px solid" }}src="/static/media/crow.ba05125a.png"></img> : <img style={{ width:'30px', height:'30px', borderRight: "2px solid" }} src='/static/media/puffer.2149c31b.png'></img> } 
      </div>
      <div>
        {node.data.name}
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
