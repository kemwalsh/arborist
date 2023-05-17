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
          onClick={handleToggle}>{Sign}
          </button>
        <div style={{ border: "1px solid" }}
          onClick={() => {
            if (node.isLeaf) return;
            handleToggle();
          }}
        ></div>
      </div>
    <div style={{ border: "1px solid", display: 'flex', alignItems: 'center', paddingRight: '40px', borderRadius: "7px 10px 10px 7px" }}>
      <img
        style={{ width:'30px', height:'100%', borderRight: "2px solid", marginRight: 10, borderRadius: "7px 0 0 7px" }}
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