import { useColorModeValue } from '@/context/color-mode';
import { useRef, type FC } from 'react';
import { ReactSVG } from 'react-svg';
import { Props } from 'react-svg';
export type IconOutlineProps = Props & {
    fiilLightColor: string;
    fiilDarkColor: string;
    strokeLightColor: string;
    strokeDarkColor: string;
};
export const IconOutline: FC<IconOutlineProps> = ({
    fiilLightColor,
    fiilDarkColor,
    strokeLightColor,
    strokeDarkColor,
    ...props
}) => {
    const fillColor = useColorModeValue(fiilLightColor, fiilDarkColor);
    const strokeColor = useColorModeValue(strokeLightColor, strokeDarkColor);
    const { wrapper = 'svg', style } = props;
    delete props.style;
    delete props.wrapper;
    const childRef = useRef(null);
    return (
        <ReactSVG
            wrapper={wrapper}
            style={{
                ...style,
                fill: fillColor,
                stroke: strokeColor,
            }}
            {...props}
            ref={childRef}
        />
    );
};
