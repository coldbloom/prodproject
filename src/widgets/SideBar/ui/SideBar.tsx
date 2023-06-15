import {classNames} from "shared/lib/classNames/ClassNames";
import cls from './SideBar.module.scss'
import React, {useState} from "react";
import {ThemeSwitcher} from "widgets/ThemeSwitcher";

interface SideBarProps {
    className?: string;
}
export const SideBar = ({className}: SideBarProps) => {
    const [collapsed, setCollapsed] = useState(false)
    const onToggle = () => {
        setCollapsed(pre => !pre)
    }
    return (
        <div
            className={classNames(cls.SideBar, {[cls.collapsed]: collapsed}, [])}
        >
           <button onClick={onToggle}>toggle</button>
            <div className={cls.switchers}>
                <ThemeSwitcher/>
                {/*<LangSwitcher />*/}
            </div>
        </div>
    );
};
