import React from "react";
import ShowFiles from "./ShowFiles";

const ShowFilesInDirectory = (props) => {
  const { directoryMeta, mymargin } = props;

  return (
    <div>
      {directoryMeta.map((directory) => {
        let margin = mymargin ? mymargin : 10;
        return (
          <>
            <ShowFiles
              files={directory.files}
              margin={margin}
              dirName={directory.dirname}
            />
            {directory?.directories?.length > 0 ? (
              <ShowFilesInDirectory
                directoryMeta={directory.directories}
                mymargin={margin + 30}
              />
            ) : (
              <></>
            )}
          </>
        );
      })}
    </div>
  );
};

export default ShowFilesInDirectory;