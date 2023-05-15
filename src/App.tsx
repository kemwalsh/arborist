import "./styles.css";
import { Tree, NodeRendererProps } from "react-arborist";
import { data, imageData } from "./data";


function Node({ node, style, dragHandle, ...rest }: NodeRendererProps<any>) {
  const updatedStyle = {
    ...style,
    marginTop: 10
  };

  return (
    <div 
      className="node-tree" 
      style={updatedStyle} 
      ref={dragHandle}
      onClick={() => node.toggle()}
    >
      <div style={{ border: "1px solid", display: 'flex', alignItems: 'center' }}>
        <img
          style={{ width:'30px', height:'100%', borderRight: "2px solid", marginRight: 10 }} 
          src={ imageData[node.level].thumbnailUrl}
        />
        {node.data.name}
      </div>
    </div>
  );
}

export default function App() {
  return (
    <div className="container" style={{ marginLeft: 10}}>
      <Tree className="node" initialData={data} rowHeight={45}>
        {Node}
      </Tree>
    </div>
  );
}
