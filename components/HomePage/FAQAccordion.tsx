import React, { ReactNode } from "react";

interface IAccordionProps {
  children: ReactNode;
  number: number;
}

interface IAccordion {
  (props: IAccordionProps): JSX.Element;
  Title: React.FC<TitleProps>;
  Body: React.FC<BodyProps>;
}

interface TitleProps {
  children: ReactNode;
}

interface BodyProps {
  children: ReactNode;
}

const FAQAccordion: IAccordion = ({ children, number }) => (
  <div className="panel">{children}</div>
);

const Title: React.FC<TitleProps> = ({ children }) => (
  <div className="title">{children}</div>
);

const Body: React.FC<BodyProps> = ({ children }) => (
  <div className="body">{children}</div>
);

FAQAccordion.Title = Title;
FAQAccordion.Body = Body;

export default FAQAccordion;
