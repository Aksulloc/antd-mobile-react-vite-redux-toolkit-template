import { FC } from 'react';
import MainContent from './components/content';
import Footer from './components/footer';
import styles from './index.module.less';

const MyLayout: FC = () => {
    return (
        <div id="main" className={styles['main-page-content']}>
            <MainContent />
            <Footer />
        </div>
    );
};

export default MyLayout;
