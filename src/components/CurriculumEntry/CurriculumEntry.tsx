import React from "react";
import Typography from "../Typography/Typography";

type Props = {
  entry:
    | string
    | {
        title: string;
        description: string;
      };
};

const CurriculumEntry: React.FC<Props> = ({ entry }) => {
  const isFlat = typeof entry === "string";
  return (
    <li>
      {isFlat ? (
        <Typography>{entry}</Typography>
      ) : (
        <div>
          <Typography>{entry.title}</Typography>
          <Typography>{entry.description}</Typography>
        </div>
      )}
    </li>
  );
};

export default CurriculumEntry;
