import { useNavigate } from 'react-router-dom';
import { AppRoute } from '../../utils/AppRoute';
import styles from './LandingPage.module.scss';

export const LandingPage = () => {
    const navigate = useNavigate();

    return (
        <div className={styles.background}>
            <h1 className={styles.header}>YO</h1>
            <button onClick={() => navigate(AppRoute.WindowSizing.fullPath)}>CLICK ME</button>
        </div>
    );
};
