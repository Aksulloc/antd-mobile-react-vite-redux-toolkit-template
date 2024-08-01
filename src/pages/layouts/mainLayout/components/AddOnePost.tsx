import { addActionType } from '@/constants/addActionType';
import { Mask, Image } from 'antd-mobile';
import { AddOutline } from 'antd-mobile-icons';
import { motion } from 'framer-motion';
import { Dispatch, Fragment, SetStateAction } from 'react';
import style from './AddOnePost.module.less';
interface Props {
    bgfill: string;
    centerStroke: string;
    visible: boolean;
    setVisible: Dispatch<SetStateAction<boolean>>;
}

const AddOnePost = ({ bgfill, centerStroke, visible, setVisible }: Props) => {
    const variantsLi = {
        open: (i: number) => ({
            opacity: 1,
            transition: {
                delay: 0.4 - i * 0.1,
                y: { stiffness: 1000, velocity: -100 },
            },
        }),
        closed: (i: number) => ({
            opacity: 0 * i,
        }),
    };

    return (
        <Fragment>
            <div
                style={{
                    width: '48px',
                    height: '48px',
                    visibility: visible ? 'hidden' : 'visible',
                }}
            >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48">
                    <path
                        strokeLinejoin="round"
                        strokeWidth="4"
                        fill={bgfill}
                        d="M24 44c11.046 0 20-8.954 20-20S35.046 4 24 4 4 12.954 4 24s8.954 20 20 20Z"
                    />
                    <path
                        strokeLinejoin="round"
                        strokeLinecap="round"
                        strokeWidth="4"
                        stroke={centerStroke}
                        d="M24 16v16M16 24h16"
                    />
                </svg>
            </div>

            <Mask
                visible={visible}
                onMaskClick={() => {
                    console.log('click mask');
                    setVisible(!visible);
                }}
                className={style['mask']}
            >
                <div
                    className={style['content']}
                    onClick={() => {
                        setVisible(!visible);
                    }}
                >
                    {addActionType.map((actionType, i) => (
                        <motion.div
                            tabIndex={-1}
                            key={i}
                            custom={i}
                            variants={variantsLi}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                            animate={visible ? 'open' : 'closed'}
                            className={style['motion_item']}
                        >
                            <div tabIndex={0} className={style['img_div']}>
                                <Image
                                    className={style['img']}
                                    src={actionType.imgURL}
                                />
                            </div>

                            <div className={style['tv_item']} color={'white'}>
                                {actionType.label}
                            </div>
                        </motion.div>
                    ))}

                    <motion.div
                        onClick={() => {
                            setVisible(!visible);
                        }}
                        className={style['clos_div']}
                        whileInView={{
                            rotate: 45,
                        }}
                    >
                        <AddOutline
                            className={style['clos_icon']}
                            fill="white"
                        />
                    </motion.div>
                </div>
            </Mask>
        </Fragment>
    );
};

export default AddOnePost;
