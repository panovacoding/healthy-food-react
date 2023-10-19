import React from "react";

type Props = {
  text: string
};

const SectionSubtitle = ({ text }: Props) => {
  return <p className="section-subtitle">{text}</p>;
};

export default SectionSubtitle;
