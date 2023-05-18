import "./styles.css";
import { Tree, NodeRendererProps } from "react-arborist";
import { generateTree, imageData, Node as NodeShape } from "./data";
import React, { useState } from "react";


function Node({ node, style, dragHandle, ...rest }: NodeRendererProps<any>) {

  const updatedStyle = { ...style, marginTop: 10};
  

const hasChildren = node.children && node.children.length > 0;

const buttonStyle = {
  backgroundColor: node.isClosed ? "#75d075" : "#f17979",
  opacity: hasChildren ? 1 : 0,
};

return (
  <div
    className="node-tree"
    style={updatedStyle}
    ref={dragHandle}
    >
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <button 
          className="expand-btn" 
          style={buttonStyle}
          disabled={!hasChildren}
          onClick={() => node.isClosed ? node.open() : node.close() }>
            {node.isClosed ? '+' : '-' }
          </button>
        <div style={{ border: "1px solid", width: 10 }}></div>
      </div>
    <div className="node-container">
      <div className="node-img">
        <img src={ imageData[node.level]}/>
      </div>
      <div className="node-container">
      <div className="node-label">
        <span className="node-title">{node.data.name}</span>
        <span className="node-subtitle">{node.data.desc}</span>
      </div>
      <div style={{ marginRight: 3, textAlign: 'right' }}>
        <button className="toolbar-btn" >
        ⋮
        </button>
      </div>
      </div>
    </div>
  </div>
);
}

export default function App() {

  const [data, setData] = useState<NodeShape[]>([]);

  React.useEffect(() => {
    setData(generateTree());
  }, []);
  if (!data.length) return <p>...loading</p>;
  
    return (
      <div className="container" style={{ marginLeft: 10}}>
        <Tree className="node" initialData={data} rowHeight={62} height={1000} width={500}>
          {Node}
          </Tree>
      </div>
      );
    }