import { useEffect, useState } from 'react';
import styles from './WindowResizingPage.module.scss';

type ScreenSize = {
    width: number;
    height: number;
};

enum ScreenResizing {
    GROWING = 'GROWING',
    SHRINKING = 'SHRINKING',
    NONE = 'NONE'
}

export const WindowResizingPage = () => {
    const [screenSize, setScreenSize] = useState<ScreenSize>({ width: 0, height: 0 });
    const [screenResizing, setScreenResizing] = useState<ScreenResizing>(ScreenResizing.NONE);

    useEffect(() => {
        function onResize() {
            const newScreenSize = { width: window.innerWidth, height: window.innerHeight };

            const oldScreenSpace = screenSize.width * screenSize.height;
            const newScreenSpace = window.innerWidth * window.innerHeight;

            if (newScreenSpace > oldScreenSpace) {
                setScreenResizing(ScreenResizing.GROWING);
            } else {
                setScreenResizing(ScreenResizing.SHRINKING);
            }

            setScreenSize(newScreenSize);
        }

        setScreenSize({ width: window.innerWidth, height: window.innerHeight });

        window.addEventListener('resize', onResize);

        return () => {
            window.removeEventListener('resize', onResize);
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    console.log(screenResizing);

    return (
        <div className={styles.background}>
            <div className={styles.border}>
                <div className={styles.middleText}>
                    {screenSize.width} x {screenSize.height}
                </div>
            </div>
        </div>
    );
};
