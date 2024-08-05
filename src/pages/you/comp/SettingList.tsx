import { useColorMode } from '@/context/color-mode';
import { ActionSheet, List, NavBar, Popup } from 'antd-mobile';
import type {
    Action,
    ActionSheetShowHandler,
} from 'antd-mobile/es/components/action-sheet';
import { motion } from 'framer-motion';
import { Dispatch, SetStateAction, useRef, useState } from 'react';
import style from './SettingList.module.less';

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
        'Verify your Fishbrain account',
        'Edit Profile',
        'Notification settings',
        'Feed Preferences',
        'Message privacy',
        'Dark mode',
        'Blocked users',
        'Mobile data & media',
        'Units & measurements',
        'Get Pro',
        'Legal',
        'Support',
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
                        <List.Item key={item} onClick={handleClickItem(item)}>
                            {item}
                        </List.Item>
                    ))}
                </List>
            </motion.div>
        </>
    );
}
export default SettingList;
