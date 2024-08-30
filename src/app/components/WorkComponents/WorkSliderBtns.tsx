"use client";

import { useSwiper } from "swiper/react";
import { PiCaretLeftBold, PiCaretRightBold } from "react-icons/pi"

type Props = {
    containerStyles: string
    iconStyles: string
    btnStyles: string
}

const WorkSliderBtns = ({ containerStyles, iconStyles, btnStyles }: Props) => {
    const swiper = useSwiper()
    return (
        <div className={containerStyles}>
            <button className={btnStyles}>
                <PiCaretLeftBold
                    className={iconStyles}
                    onClick={() => swiper.slidePrev()}
                />
            </button>
            <button className={btnStyles}>
                <PiCaretRightBold
                    className={iconStyles}
                    onClick={() => swiper.slideNext()}
                />
            </button>
        </div>
    )
}

export default WorkSliderBtns