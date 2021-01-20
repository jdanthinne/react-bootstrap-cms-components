import React from "react";

export interface InstructionsProps {
  message: string;
}

const Instructions: React.FC<InstructionsProps> = ({ message }) => {
  return (
    <div className="alert alert-info" role="alert">
      {message}
    </div>
  );
};

export default Instructions;
