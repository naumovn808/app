import { HtmlHTMLAttributes, ReactNode } from "react";

export interface HeadlingProps extends HtmlHTMLAttributes<HTMLHeadingElement> {
    children: ReactNode;
}