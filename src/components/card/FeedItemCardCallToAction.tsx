import { Button } from 'antd-mobile';
import { FC, useState } from 'react';
import Lottie from 'react-lottie';
import { ReactSVG } from 'react-svg';
import animationData from '@/assets/animation/animationLike.json';

interface IProps {
    list: string;
    avatarSrc: string;
    loading?: boolean;
}
const FeedItemCardCallToAction: FC<IProps> = () => {
    const [isStopped, setIsStopped] = useState(true);
    const [direction, setDirection] = useState(-1);

    const onOpen = () => {};
    const defaultOptions = {
        loop: false,
        autoplay: false,
        animationData: animationData,
    };

    const onLikeClick = () => {
        setIsStopped(!isStopped);
        setDirection(direction * -1);
    };

    return (
        <>
            <div
                style={{
                    display: 'flex',
                    width: '100%',
                    marginTop: '8px',
                }}
            >
                <div
                    style={{
                        display: 'flex',
                        width: '100%',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}
                >
                    <div onClick={onLikeClick}>
                        <Lottie
                            direction={direction}
                            options={defaultOptions}
                            isStopped={isStopped}
                            width="36px"
                            height="37px"
                        />
                    </div>
                    <ReactSVG
                        onClick={onOpen}
                        src={'/src/assets/icons/ic_feed_actionbar_comment.svg'}
                        wrapper="svg"
                        width="24px"
                        height="24px"
                        style={{ marginLeft: '8px' }}
                    />
                    <ReactSVG
                        onClick={onOpen}
                        src={'/src/assets/icons/ic_feed_actionbar_comment.svg'}
                        wrapper="svg"
                        width="24px"
                        height="24px"
                        style={{ marginLeft: '13px' }}
                    />
                    <div style={{ flex: 1 }} />
                    <Button
                        color="primary"
                        fill="outline"
                        size="mini"
                        style={{
                            height: '24px',
                            marginLeft: 'auto',
                        }}
                        onClick={async () => {}}
                    >
                        Catch details
                    </Button>
                </div>
            </div>
            <div style={{ display: 'flex', width: '100%' }}>
                <ReactSVG
                    onClick={onOpen}
                    src={'/src/assets/icons/ic_reaction_like.svg'}
                    wrapper="svg"
                    width="18px"
                    height="18px"
                    style={{ fill: 'rgb(6, 29, 51)' }}
                />
                <abbr style={{ fontSize: '12px' }}>2 like</abbr>
            </div>
            {/* <Stack direction={'column'}>
                <div>dddd</div>
                <div>GGGG</div>
            </Stack> */}
        </>
    );
};

export default FeedItemCardCallToAction;
