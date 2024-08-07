import { FC, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Button, Toast } from 'antd-mobile';
// import { login } from '@/utils/userLogin';

import style from './login.module.less';
import store from '@/store';
import { setUserInfo } from '@/store/features/userSlice';

const Index: FC = () => {
    const [loading, setLoading] = useState<boolean>(false);
    const location = useLocation();
    const navigate = useNavigate();

    function handlerLogin() {
        if (loading) return;

        setLoading(true);
        // login('Q仔', '123456')
        //     .then((res) => {
        //         if (res) {
        //             Toast.show({
        //                 icon: 'success',
        //                 content: '登录成功',
        //             });
        //             const { state } = location;
        //             const path = (state as any)?.redirect || '/index';
        //             navigate(path);
        //         }
        //     })
        //     .finally(() => {
        //         setLoading(false);
        //     });
        new Promise((resolve) => {
            setTimeout(() => {
                const token = 'data';
                localStorage.setItem('ACCESS_TOKEN', token);
                store.dispatch(setUserInfo({ token }));
                resolve(true);
            }, 100);
        }).then((res) => {
            if (res) {
                Toast.show({
                    icon: 'success',
                    content: '登录成功',
                });
                const { state } = location;
                const path = (state as any)?.redirect || '/index';
                navigate(path);
            }
        });
    }

    return (
        <div className={style['login-container']}>
            <Button
                className={style['login-styl']}
                color="primary"
                onClick={() => {
                    handlerLogin();
                }}
            >
                一键登录
            </Button>
            <p className={style['login-desc']}>App自动授权，无需填充账号密码</p>
        </div>
    );
};

export default Index;
