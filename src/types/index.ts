import { ReactElement } from "react";

export interface SuspenseWrapperProps {
    children: ReactElement;
  }
export interface LazyComponent {
    component: React.LazyExoticComponent<React.ComponentType<any>>;
  }