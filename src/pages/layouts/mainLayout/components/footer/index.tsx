import { mainRoutes } from '@/config/routesConfig';
import { TabBar } from 'antd-mobile';
import { memo, useState, type FC } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import AddOnePost from '../AddOnePost';
import style from './footer.module.less';
import { IconOutline } from '@/components/icon/IconOutline';
import { useColorModeValue } from '@/context/color-mode';

const BottomBar: FC = () => {
    const [visible, setVisible] = useState(false);

    const history = useNavigate();
    const location = useLocation();
    const { pathname } = location;

    const sufaceColor = useColorModeValue('White', 'black');
    const sufaceColorInverse = useColorModeValue('black', 'White');
    const setRouteActive = (value: string) => {
        if (value === 'add') {
            if (navigator.vibrate) {
                navigator.vibrate(16);
            }
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
                bgfill={sufaceColorInverse}
                centerStroke={sufaceColor}
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
                        style={{ background: sufaceColor }}
                        key={item.pathname}
                        icon={
                            typeof item.icon === 'string' ? (
                                <IconOutline
                                    src={
                                        location.pathname !==
                                        item.meta.fullPathname
                                            ? item.icon
                                            : item.iconSelected
                                    }
                                    height={'24px'}
                                    width={'24px'}
                                    fiilLightColor={
                                        location.pathname !==
                                        item.meta.fullPathname
                                            ? 'White'
                                            : 'black'
                                    }
                                    strokeLightColor={'black'}
                                    fiilDarkColor={
                                        location.pathname !==
                                        item.meta.fullPathname
                                            ? 'black'
                                            : 'White'
                                    }
                                    strokeDarkColor={'White'}
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
