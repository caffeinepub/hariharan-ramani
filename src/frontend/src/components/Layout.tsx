import { type ReactNode } from 'react';

interface LayoutProps {
  children: ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className="w-full">
      <main className="w-full">{children}</main>
    </div>
  );
}
