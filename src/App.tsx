import "./styles.css";
import { Tree, NodeRendererProps } from "react-arborist";
import { data, imageData } from "./data";
import { useState } from "react";


function Node({ node, style, dragHandle, ...rest }: NodeRendererProps<any>) {

  const updatedStyle = { ...style, marginTop: 10};

  const [Sign, setSign] = useState("+");

  const handleToggle = () => {
    node.toggle();
    setSign(Sign === "+" ? "-" : "+");

  };

const hasChildren = node.children && node.children.length > 0;

const buttonStyle = {
  backgroundColor: Sign === "+" ? "#75d075" : "#f17979",
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
          className="btn" 
          style={buttonStyle}
          disabled={!hasChildren}
          onClick={handleToggle}>{Sign}
          </button>
        <div style={{ border: "1px solid" }}
          onClick={() => {
            if (node.isLeaf) return;
            handleToggle();
          }}
        ></div>
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

      </div>
    </div>
  </div>
);
}

export default function App() {
  return (
  <div className="container" style={{ marginLeft: 10}}>
    <Tree className="node" initialData={data} rowHeight={62}>
      {Node}
      </Tree>
      </div>
    );
  }