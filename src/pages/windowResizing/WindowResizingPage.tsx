import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AppRoute } from '../../utils/AppRoute';
import styles from './WindowResizingPage.module.scss';

enum ScreenResizingType {
    GROWING = 'GROWING',
    SHRINKING = 'SHRINKING',
    NONE = 'NONE'
}

type ScreenSize = {
    width: number;
    height: number;
};

type ScreenSizingDisplay = {
    width: number;
    height: number;
    screenResizingState: ScreenResizingType;
};

export const WindowResizingPage = () => {
    const [screenSizingDisplay, setScreenSizingDisplay] = useState<ScreenSizingDisplay>({ width: 0, height: 0, screenResizingState: ScreenResizingType.NONE });

    const screenSize = useRef<ScreenSize>({ width: 0, height: 0 });
    const screenResizingStateDisplayTimeout = useRef<NodeJS.Timeout>();

    const navigate = useNavigate();

    function onResize() {
        const newScreenSize = { width: window.innerWidth, height: window.innerHeight };

        const oldScreenSpace = screenSize.current.width * screenSize.current.height;
        const newScreenSpace = window.innerWidth * window.innerHeight;

        screenSize.current = newScreenSize;

        let screenResizingState = ScreenResizingType.NONE;

        if (newScreenSpace > oldScreenSpace) {
            screenResizingState = ScreenResizingType.GROWING;
        } else if (newScreenSpace < oldScreenSpace) {
            screenResizingState = ScreenResizingType.SHRINKING;
        }

        setScreenSizingDisplay({ width: newScreenSize.width, height: newScreenSize.height, screenResizingState });

        clearTimeout(screenResizingStateDisplayTimeout.current);
        screenResizingStateDisplayTimeout.current = setTimeout(() => {
            setScreenSizingDisplay({ width: newScreenSize.width, height: newScreenSize.height, screenResizingState: ScreenResizingType.NONE });
        }, 500);
    }

    useEffect(() => {
        setScreenSizingDisplay({ width: window.innerWidth, height: window.innerHeight, screenResizingState: ScreenResizingType.NONE });

        window.addEventListener('resize', onResize);

        return () => {
            window.removeEventListener('resize', onResize);
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <div className={styles.background}>
            <div className={styles.border}>
                {/* TODO FIX THIS */}
                <div className={styles.backButton} onClick={() => navigate(AppRoute.Landing.fullPath)}>
                    <svg className={styles.backArrow} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" width={50} height={50}>
                        <path d="M10 25 L30 5 L30 15 L45 15 L45 35 L30 35 L30 45 Z" />{' '}
                    </svg>
                </div>
                <div className={styles.textArea}>
                    <div className={styles.screenSizeText}>
                        {screenSizingDisplay.width} x {screenSizingDisplay.height}
                    </div>
                    <div className={styles.screenResizingState}>{screenSizingDisplay.screenResizingState}</div>
                </div>
            </div>
        </div>
    );
};
