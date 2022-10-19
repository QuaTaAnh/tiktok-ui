import classNames from 'classnames/bind';
import styles from './Sidebar.module.scss';

import {
    HomeIcon,
    HomeActiveIcon,
    UserGroupIcon,
    UserGroupActiveIcon,
    LiveIcon,
    LiveActiveIcon,
} from '~/components/Icons';
import Menu from './Menu/Menu';
import MenuItem from './Menu/MenuItem';
import { config, routes } from '~/config';

const cx = classNames.bind(styles);
function Sidebar() {
    return (
        <aside className={cx('wrapper')}>
            <Menu>
                <MenuItem
                    to={routes.home}
                    icon={<HomeIcon />}
                    activeIcon={<HomeActiveIcon />}
                    title="Dành cho bạn"
                />
                <MenuItem
                    to={routes.following}
                    icon={<UserGroupIcon />}
                    activeIcon={<UserGroupActiveIcon />}
                    title="Đang Follow"
                />
                <MenuItem
                    to={routes.live}
                    icon={<LiveIcon />}
                    activeIcon={<LiveActiveIcon />}
                    title="LIVE"
                />
            </Menu>
        </aside>
    );
}

export default Sidebar;
