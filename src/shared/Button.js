import { Fragment } from 'react';
import styles from './Button.module.css';

const Button = props => {
    return (
        <Fragment>
            <button className={styles['btn-brand']} onClick={props.clickHandler}>{props.btnText}</button>
        </Fragment>
    );
}
export default Button;