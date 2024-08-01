import {
    Children,
    FC,
    ReactElement,
    ReactNode,
    isValidElement,
    useEffect,
    useMemo,
    useRef,
    useState,
} from 'react';
import styles from './HScroll.module.less';
import { BScrollConstructor } from '@better-scroll/core/dist/types/BScroll';
import BScroll from '@better-scroll/core';

function getValidChildren(children: ReactNode) {
    return Children.toArray(children).filter((child) =>
        isValidElement(child)
    ) as ReactElement[];
}

export interface HScrollProps {
    children: ReactNode;
}

const HScroll: FC<HScrollProps> = ({ children }) => {
    const clones = useMemo(() => {
        return getValidChildren(children).map((child, index) => {
            const key = typeof child.key !== 'undefined' ? child.key : index;
            return (
                <div className={styles['scroll-item']} key={key}>
                    {child}
                </div>
            );
        });
    }, [children]);

    const scroll = useRef<HTMLDivElement>(null);
    const [scrollObj, setscrollObj] = useState<BScrollConstructor>();
    const initBScroll = () => {
        setscrollObj(
            new BScroll(scroll.current as HTMLDivElement, {
                probetype: 2,
                //  可以使用原生的点击
                click: false,
                //  检测dom变化
                observeDOM: true,
                //  鼠标滚轮设置
                mouseWheel: {
                    speed: 20,
                    invert: false,
                    easeTime: 300,
                },
                scrollX: true,
                // 禁止外层滚动
                stopPropagation: true,
                // 允许上下滑动
                eventPassthrough: 'vertical',
                //  过度动画, 在下载更多的时候滚动条会有个过度动画
                useTransition: false,
            })
        );
    };
    useEffect(() => {
        initBScroll();
        // 3秒后刷新滚动条
        setTimeout(() => {
            console.log('onScrollRefresh');
            scrollObj?.refresh();
        }, 3000);
        return () => {
            scrollObj?.destroy();
        };
    }, []);

    return (
        <div className={styles['horizontal-container']}>
            <div className={styles['scroll-wrapper']} ref={scroll}>
                <div className={styles['scroll-content']}>{clones}</div>
            </div>
        </div>
    );
};

export default HScroll;
