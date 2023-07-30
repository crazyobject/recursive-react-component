import React from "react";

const ShowFiles = (props) => {
  const { files, margin, dirName } = props;

  const filesDom = files.map((file) => {
    return (
      <div style={{ marginLeft: `${margin + 10}px` }}>{file.fileName}</div>
    );
  });
  return (
    <>
      <div style={{ marginLeft: `${margin}px`, fontWeight: 'bold' }}>
        {dirName}
      </div>
      {filesDom}
    </>
  );
};

export default ShowFiles;