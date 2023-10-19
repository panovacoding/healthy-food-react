import React from "react";

type Props = {
  text: string
};

const SectionTitle = ({ text }: Props) => {
  return <h2 className="section-title">{text}</h2>;
};

export default SectionTitle;
