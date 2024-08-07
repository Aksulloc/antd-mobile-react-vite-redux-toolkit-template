import { useColorMode } from '@/context/color-mode';
import { ActionSheet, List, NavBar, Popup } from 'antd-mobile';
import type {
    Action,
    ActionSheetShowHandler,
} from 'antd-mobile/es/components/action-sheet';
import { motion } from 'framer-motion';
import { Dispatch, SetStateAction, useRef, useState } from 'react';
import style from './SettingList.module.less';
import { ReactSVG } from 'react-svg';

interface Props {
    setVisible: Dispatch<SetStateAction<boolean>>;
}

function SettingList(props: Props) {
    const { colorMode, setColorMode } = useColorMode();
    const [settingPopupVisible, setSettingPopupVisible] = useState(false);

    const variantsContent = {
        anthor: () => ({
            x: 0,
        }),
        slideLeftAnimation: () => ({
            x: -100,
        }),
    };

    const content = [
        {
            describedContent: 'Verify your Fishbrain account',
            icon: '/src/assets/icons/ic_info_exclamation.svg',
        },
        {
            describedContent: 'Edit Profile',
            icon: '/src/assets/icons/ic_profile.svg',
        },
        {
            describedContent: 'Notification settings',
            icon: '/src/assets/icons/ic_bell.svg',
        },
        {
            describedContent: 'Feed Preferences',
            icon: '/src/assets/icons/ic_settings.svg',
        },
        {
            describedContent: 'Message privacy',
            icon: '/src/assets/icons/ic_map_location.svg',
        },
        {
            describedContent: 'Dark mode',
            icon: '/src/assets/icons/ic_night.svg',
        },
        {
            describedContent: 'Blocked users',
            icon: '/src/assets/icons/ic_close_round.svg',
        },
        {
            describedContent: 'Mobile data & media',
            icon: '/src/assets/icons/ic_autoplay_video.svg',
        },
        {
            describedContent: 'Units & measurements',
            icon: '/src/assets/icons/ic_ruler.svg',
        },
        {
            describedContent: 'Get Pro',
            icon: '/src/assets/icons/ic_pro_rounded_star.svg',
        },
        { describedContent: 'Legal', icon: '/src/assets/icons/ic_flag.svg' },
        {
            describedContent: 'Support',
            icon: '/src/assets/icons/ic_legal_consent.svg',
        },
        { describedContent: 'Log out', icon: '' },
    ];
    const handler = useRef<ActionSheetShowHandler>();

    const handleClickItem = (item: string) => () => {
        if ('Dark mode' === item) {
            const actions: Action[] = [
                {
                    text: 'System default',
                    key: 'System default',
                },
                {
                    text: 'Light',
                    key: 'Light',
                    onClick: () => {
                        console.log(colorMode);
                        setColorMode('light');
                        handler.current?.close();
                    },
                },
                {
                    text: 'Dark',
                    key: 'Dark',
                    onClick: () => {
                        console.log(colorMode);
                        setColorMode('dark');
                        handler.current?.close();
                    },
                },
            ];
            handler.current = ActionSheet.show({
                actions,
                cancelText: 'Cancel',
            });
            return;
        }
        setSettingPopupVisible(true);
        console.log(`Clicked ${item}`);
    };

    return (
        <>
            <Popup
                visible={settingPopupVisible}
                onMaskClick={() => {
                    setSettingPopupVisible(false);
                }}
                onClose={() => {
                    setSettingPopupVisible(false);
                }}
                position="right"
                bodyStyle={{
                    marginTop: '10vh',
                    height: '90vh',
                    width: '100vw',
                }}
            >
                {/* <SettingList /> */}
            </Popup>
            <motion.div
                variants={variantsContent}
                animate={settingPopupVisible ? 'slideLeftAnimation' : 'anthor'}
                className={style.container}
            >
                <List
                    header={
                        <NavBar
                            backArrow=""
                            right={
                                <div
                                    onClick={() => {
                                        props.setVisible(false);
                                    }}
                                >
                                    Done
                                </div>
                            }
                        >
                            <div>Settings</div>
                        </NavBar>
                    }
                >
                    {content.map((item) => (
                        <List.Item
                            key={item.describedContent}
                            prefix={
                                item.icon && (
                                    <ReactSVG
                                        wrapper="svg"
                                        width="20px"
                                        height="20px"
                                        src={item.icon}
                                        style={{
                                            fill: 'black',
                                            stroke: 'White',
                                        }}
                                        onClick={() => {
                                            setSettingPopupVisible(true);
                                        }}
                                    />
                                )
                            }
                            onClick={handleClickItem(item.describedContent)}
                        >
                            {item.describedContent}
                        </List.Item>
                    ))}
                </List>
            </motion.div>
        </>
    );
}
export default SettingList;
