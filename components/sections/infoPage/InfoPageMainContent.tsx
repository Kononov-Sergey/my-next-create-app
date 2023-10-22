import { FC, PropsWithChildren } from "react";
import AlgorithmCard from "../../ui/algorithmCard";

const InfoPageMainContent: FC<PropsWithChildren> = () => {
  return (
    <main className="container mx-auto flex flex-col gap-4">
      <h1>Main title</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur
        eaque eos esse harum mollitia natus obcaecati repellendus similique
        tempora voluptatum?
      </p>
      <AlgorithmCard
        imageSrc="/header-logo.png"
        title="test"
        previewText="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur
        eaque eos esse harum mollitia natus obcaecati repellendus similique
        tempora voluptatum?"
        link="A"
      />
      <AlgorithmCard
        imageSrc="/header-logo.png"
        title="test"
        previewText="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur
        eaque eos esse harum mollitia natus obcaecati repellendus similique
        tempora voluptatum?"
        link="A"
      />
    </main>
  );
};

export default InfoPageMainContent;
