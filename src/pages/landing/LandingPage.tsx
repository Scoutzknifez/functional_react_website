import { useNavigate } from 'react-router-dom';
import { AppRoute } from '../../utils/AppRoute';
import styles from './LandingPage.module.scss';

export const LandingPage = () => {
    const navigate = useNavigate();

    function goToPage(path: string) {
        navigate(path);
    }

    return (
        <div className={styles.background}>
            <h1 className={styles.header}>YO</h1>
            <button onClick={() => goToPage(AppRoute.WindowSizing.fullPath)}>CLICK ME</button>
        </div>
    );
};
