import React from "react";

interface FeaturesCard {
  text: string;
  children: React.ReactNode;
}

const FeaturesCard: React.FC<FeaturesCard> = ({ text, children }) => {
  return <div>FeaturesCard</div>;
};
