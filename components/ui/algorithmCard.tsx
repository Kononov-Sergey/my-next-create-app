import { FC, PropsWithChildren } from "react";
import Image from "next/image";
import Link from "next/link";

interface AlgorithmCardProps {
  imageSrc: string;
  title: string;
  previewText: string;
  link: string;
}

const AlgorithmCard: FC<PropsWithChildren<AlgorithmCardProps>> = ({
  imageSrc,
  title,
  previewText,
  link,
}) => {
  return (
    <div className="flex gap-5 w-full px-5 py-4 bg-color-secondary-bg rounded">
      <Image alt="hi" src={imageSrc} width={70} height={70} />
      <div className="flex flex-col gap-4">
        <h2>
          <Link href={`/info/${link}`} type="button">
            {title}
          </Link>
        </h2>
        <p>{previewText}</p>
      </div>
    </div>
  );
};

export default AlgorithmCard;
