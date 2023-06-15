import {classNames} from "shared/lib/classNames/ClassNames";
import cls from './Button.module.scss'
import {ButtonHTMLAttributes, FC} from "react";

export enum ThemeButton {
    CLEAR = 'clear',
}

interface ButtonProps extends  ButtonHTMLAttributes<HTMLButtonElement>{
    className?: string;
    theme?: ThemeButton;
}
export const Button: FC<ButtonProps> = (props) => {
    const {
        theme,
        className,
        children,
        ...otherProps
    } = props
    return (
        <button
            className={classNames(cls.Button, {}, [cls[theme]])}
            {...otherProps}
        >
            {children}
        </button>
    );
};
