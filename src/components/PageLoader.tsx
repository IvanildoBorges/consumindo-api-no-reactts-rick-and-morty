import { useEffect, useState } from 'react';
import Loading from './Loading/index';

type PageLoaderProps = {
    children: React.ReactNode;
    delay?: number;
};

const PageLoader = ({ children, delay = 1000 }: PageLoaderProps) => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const timeout = setTimeout(() => {
            setIsLoading(false);
        }, delay);
        return () => clearTimeout(timeout);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return isLoading ? <Loading /> : <>{children}</>;
};

export default PageLoader;
