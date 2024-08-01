import { memo, useEffect, useState, type FC } from 'react';
import { mainRoutes } from '@/config/routesConfig';
import { TabBar } from 'antd-mobile';
import { useNavigate, useLocation } from 'react-router-dom';

import { ReactSVG } from 'react-svg';
import AddOnePost from '../AddOnePost';
import style from './footer.module.less';

const BottomBar: FC = () => {
    const [visible, setVisible] = useState(false);

    const history = useNavigate();
    const location = useLocation();
    const { pathname } = location;
    const [enableDarkMode] = useState(true);
    const setRouteActive = (value: string) => {
        if (value === 'add') {
            // document.documentElement.setAttribute(
            //     'data-prefers-color-scheme',
            //     enableDarkMode ? 'dark' : 'light'
            // );
            if (navigator.vibrate) {
                navigator.vibrate(100);
            }

            // setEnableDarkMode(!enableDarkMode);
            setVisible(!visible);
            return;
        }

        history(value);
    };

    const middleIndex = Math.floor(mainRoutes.length / 2);
    const addItem = {
        pathname: 'add',
        name: 'add',
        title: undefined,
        badge: undefined,
        icon: undefined,
        iconSelected: undefined,
        meta: {
            fullPathname: '/main/add',
        },
        element: (
            <AddOnePost
                bgfill={'white'}
                centerStroke={'black'}
                visible={visible}
                setVisible={setVisible}
            />
        ),
    };
    const newArray = [
        ...mainRoutes.slice(0, middleIndex),
        addItem,
        ...mainRoutes.slice(middleIndex),
    ];

    useEffect(() => {
        document.documentElement.setAttribute(
            'data-prefers-color-scheme',
            enableDarkMode ? 'dark' : 'light'
        );
    }, [enableDarkMode]);

    return (
        <>
            <TabBar
                className={style['tab-bar']}
                safeArea
                activeKey={pathname}
                onChange={(value) => setRouteActive(value)}
            >
                {newArray.map((item) => (
                    <TabBar.Item
                        className={style['bottom']}
                        key={item.pathname}
                        icon={
                            typeof item.icon === 'string' ? (
                                <ReactSVG
                                    wrapper="svg"
                                    width="20px"
                                    height="20px"
                                    src={
                                        location.pathname !==
                                        item.meta.fullPathname
                                            ? item.icon
                                            : item.iconSelected
                                    }
                                    style={{
                                        fill:
                                            location.pathname !== item.pathname
                                                ? 'White'
                                                : 'black',
                                        stroke: 'black',
                                    }}
                                />
                            ) : (
                                item.element
                            )
                        }
                        title={item.title}
                        badge={item.badge}
                    />
                ))}
            </TabBar>
        </>
    );
};

export default memo(BottomBar);
