import React from "react";
import { cn } from "../../lib/utils";

interface AuroraBackgroundProps {
  children: React.ReactNode;
  className?: string;
  containerClassName?: string;
}

export const AuroraBackground: React.FC<AuroraBackgroundProps> = ({
  children,
  className,
  containerClassName,
}) => {
  return (
    <div
      className={cn(
        "relative flex flex-col items-center justify-center w-full overflow-hidden rounded-lg",
        containerClassName
      )}
    >
      <div
        className={cn(
          "absolute inset-0 overflow-hidden rounded-lg",
          "before:absolute before:inset-0 before:bg-[size:180%_180%] before:bg-[position:50%_50%] before:bg-[image:linear-gradient(115deg,#00A79D,#30EBD6,#242F40,#00A79D)] before:opacity-100 before:animate-aurora",
          "after:absolute after:inset-0 after:bg-[size:110%_110%] after:bg-[position:50%_50%] after:bg-[image:linear-gradient(to_right,#00A79D,#30EBD6,#242F40,#00A79D)] after:opacity-50 after:animate-aurora after:blur-xl after:[animation-delay:-5s]",
          className
        )}
      />
      <div className="relative flex flex-col items-center justify-center w-full h-full px-4 py-8 md:py-12">
        {children}
      </div>
    </div>
  );
};
