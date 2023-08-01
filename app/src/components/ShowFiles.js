import React from "react";
import "./ShowFiles.css"

const ShowFiles = (props) => {
  const { files, margin, dirName } = props;
  const [show,setShow] = React.useState(true);

  const filesDom = files.map((file) => {
    return (
      <div style={{ marginLeft: `${margin + 10}px` }}>{file.fileName}</div>
    );
  });
  return (
    <>
      <div style={{ marginLeft: `${margin}px` }} className="dirTitle" onClick={()=>{setShow(!show)}}>
        {dirName}
      </div>
      { show && filesDom}
    </>
  );
};

export default ShowFiles;