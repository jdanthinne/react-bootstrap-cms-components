import React from "react";
interface TitleProps {
    text: string;
    subText?: string;
    action?: {
        title: string;
        route: string;
    };
    back?: {
        title: string;
        route: string;
    };
}
declare const Title: React.FC<TitleProps>;
export default Title;
