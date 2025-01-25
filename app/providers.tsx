/**
 * @author orangeboyChen
 * @version 1.0
 * @date 2025/1/24 22:52
 */
import { HeroUIProvider } from "@heroui/system";
import { ReactNode } from "react";

export function Providers({ children }: { children: ReactNode }) {
  return <HeroUIProvider>{children}</HeroUIProvider>;
}
