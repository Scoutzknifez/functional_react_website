import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AppRoute } from '../../utils/AppRoute';
import styles from './LandingPage.module.scss';

export const LandingPage = () => {
    const [showHidden, setShowHidden] = useState(false);

    const navigate = useNavigate();

    return (
        <div className={styles.background}>
            <h1 className={styles.header}>YO</h1>
            <button onMouseUp={() => navigate(AppRoute.WindowSizing.fullPath)}>{AppRoute.WindowSizing.pageName}</button>
            <button onMouseUp={() => setShowHidden(!showHidden)}>{showHidden ? 'Hide Secrets' : 'Show Secrets'}</button>

            {showHidden && (
                <div className={styles.bottomLeftNotification}>
                    Hey
                    <div className={styles.bottomLeftNotificationX} onMouseUp={() => setShowHidden(!showHidden)}>
                        +
                    </div>
                </div>
            )}
        </div>
    );
};
