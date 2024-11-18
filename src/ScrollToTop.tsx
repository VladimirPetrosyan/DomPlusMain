import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0); // Сбрасываем позицию скролла в начало страницы
    }, [pathname]); // Срабатывает при изменении маршрута

    return null;
};

export default ScrollToTop;