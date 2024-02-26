import DOMPurify from "isomorphic-dompurify";
import React from "react";

const Wyswig = ({ data }: { data: string }) => {
  const sanitizedData = DOMPurify.sanitize(data);

  return (
    <div
      className="wyswig-block common-padding"
      dangerouslySetInnerHTML={{ __html: sanitizedData }}
    />
  );
};

export default Wyswig;
