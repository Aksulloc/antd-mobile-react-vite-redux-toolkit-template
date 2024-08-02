import { List, NavBar, Popup } from 'antd-mobile';
import { motion } from 'framer-motion';
import style from './SettingList.module.less';
import { Dispatch, SetStateAction, useState } from 'react';

interface Props {
    setVisible: Dispatch<SetStateAction<boolean>>;
}

function SettingList(props: Props) {
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

    const handleClickItem = (item: string) => () => {
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
