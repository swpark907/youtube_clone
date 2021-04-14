import React, { useRef } from 'react';
import styles from '../navbar/navbar.module.css'

const Navbar = ({searchVideo}) => {

    const inputRef = useRef();

    const handleSearch = () => {
        const value = inputRef.current.value;
        searchVideo(value);
    }

    const onClick = (event) => {        
        handleSearch();        
    }

    const onKeyPress = (event) => {        
        if(event.key === 'Enter'){
            handleSearch();
        }
    }

    
    return (
        <div className={styles.navbar}>
            <div className={styles.navbarLeft}>
                <span className={styles.logo}></span>
                <h1 className={styles.title}>Youtube</h1>
            </div>
            <div className={styles.searchBar}>
                <input ref={inputRef}  type="text" className={styles.search} placeholder="Search.." onKeyPress={onKeyPress} />
                <button type="submit" onClick={onClick}>검색</button>
            </div>
            <span className={styles.toggle}></span>
        </div>
    );
};

export default Navbar;