import { FC, PropsWithChildren } from "react";
import Image from "next/image";
import Link from "next/link";
import cn from "clsx";
import { useRouter } from "next/router";

const MainHeader: FC<PropsWithChildren> = () => {
  const router = useRouter();
  return (
    <header className="p-4 bg-color-secondary-bg">
      <nav className="flex items-center justify-between container mx-auto">
        <Image
          alt="Логотип А.И.Герцена"
          src="/header-logo.png"
          height={50}
          width={50}
        />
        <div className="flex items-center gap-4">
          <Link
            className={cn(
              "px-4 py-2 rounded border-2  hover:scale-105 transition-all duration-300",
              router.pathname === "/"
                ? "text-color-button-text bg-color-button-bg border-color-button-bg "
                : "border-color-stroke"
            )}
            href="/"
          >
            Главная
          </Link>
          <Link
            className={cn(
              "px-4 py-2 rounded border-2  hover:scale-105 transition-all duration-300",
              router.pathname === "/info"
                ? "text-color-button-text bg-color-button-bg border-color-button-bg "
                : "border-color-stroke"
            )}
            href="/info"
          >
            Алгоритмы
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default MainHeader;
