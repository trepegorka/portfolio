import { classNames } from 'src/shared/helpers/classNames/classNames';
import cls from './HamburgerMenu.module.scss';
import { useNavbarClose } from 'src/app/providers/NavBarProvider/lib/useNavbarClose.tsx';

interface HamburgerMenuProps {
    className?: string;
}

export const HamburgerMenu = ({ className }: HamburgerMenuProps) => {
    const { isClose, changeClose } = useNavbarClose();

    return (
        <div className={classNames(cls.header__mainHamMenuCont, {}, [className])}>
            <input type="checkbox" id="checkbox" className={cls.checkbox} onChange={changeClose} checked={!isClose} />
            <label htmlFor="checkbox" className={cls.toggle}>
                <div className={cls.bars}></div>
                <div className={cls.bars}></div>
                <div className={cls.bars}></div>
            </label>
        </div>
    );
};
