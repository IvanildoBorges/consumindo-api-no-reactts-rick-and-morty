import { useRef } from "react";
import { NavLink, Outlet } from "react-router-dom";
import styles from "./style.module.css";

const Layout = () => {
    const ano = new Date().getFullYear();
    const navListRef = useRef<HTMLUListElement>(null);
    const buttonCloseMenuRef = useRef<HTMLButtonElement>(null);

    const ativarMenu = () => {
        if (navListRef.current && buttonCloseMenuRef.current) {
            buttonCloseMenuRef.current.classList.toggle(styles.active);
            navListRef.current.classList.toggle(styles.active);
        }
    };

    return (
        <>
            <header className={styles.cabecalho}>
                <h1 className={styles.titulo1}>Rick & Mort API</h1>
                <ul className={styles.menu} ref={navListRef}>
                    <li>
                        <NavLink to="/" onClick={ativarMenu}>Inicio</NavLink>
                    </li>
                    <li>
                        <NavLink to="/episodios" onClick={ativarMenu}>Episódios</NavLink>
                    </li>
                    <li>
                        <NavLink to="/personagens" onClick={ativarMenu}>Personagens</NavLink>
                    </li>
                    <li>
                        <NavLink to="/about" onClick={ativarMenu}>About</NavLink>
                    </li>
                    <li>
                        <NavLink to="https://www.linkedin.com/in/IvanildoBorges" target="_blank" onClick={ativarMenu}>Contact</NavLink>
                    </li>
                </ul>
                <button
                    className={styles["close-menu"]}
                    onClick={ativarMenu}
                    ref={buttonCloseMenuRef}
                >
                    ☰
                </button>
            </header>
            <Outlet />
            <footer className={styles.rodape}>
                <p className="copy">© {ano} Ivanildo Borges - Todos os direitos reservados.</p>
            </footer>
        </>
    );
}

export default Layout;