import styles from './Modal.module.css';
import { Fragment } from 'react';
import ReactDOM from 'react-dom';

const Backdrop = () => {
    return (
        <div className={styles.backdrop}></div>
    );

}

const ModalDialog = (props) => {
    return (
        <div className={styles.modal}>
            <div>
                {props.children}
            </div>
        </div>
    );
}

const Modal = (props) => {

    const overlayPortal = document.getElementById('overlays');

    return (
        <Fragment>
            {ReactDOM.createPortal(<ModalDialog>
                <div className={styles['modal-body']}>
                    <button className={styles.close} onClick={props.onHideModal}>&times;</button>
                    {props.children}
                </div>
            </ModalDialog>, overlayPortal)}
            {ReactDOM.createPortal(<Backdrop />, overlayPortal)}
        </Fragment>
    );
}
export default Modal;