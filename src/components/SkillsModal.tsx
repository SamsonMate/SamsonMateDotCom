import React, { useState } from 'react';
import Modal from 'react-modal';
import './SkillsModal.css';

// For accessibility – set the root element of your app
Modal.setAppElement('#root');

interface SkillsModalProps {
    title?: string;
    description?: string;
    className?: string;
}

const SkillsModal: React.FC<SkillsModalProps> = ({
    title = 'Skills Modal',
    description = 'This Modal is currently incomplete :(',
    className,
}) => {
    const [isOpen, setIsOpen] = useState(false);
    const openModal = () => setIsOpen(true);
    const closeModal = () => setIsOpen(false);

    return (
        <>
        <button onClick={openModal} className="open-modal-btn">
            {title}
        </button>
        
        <Modal
            isOpen={isOpen}
            onRequestClose={closeModal}
            contentLabel={title}
            className={`custom-modal ${className || ''}`}
            overlayClassName="custom-overlay"
        >
            <div className="modal-header">
            <h2>{title}</h2>
                <button onClick={closeModal} className="close-button">&times;</button>
            </div>
            <div className="modal-body">
                <p>{description}</p>
            </div>
            <div className="modal-footer">
                <button onClick={closeModal}>Close</button>
            </div>
        </Modal>
        </>
);
};

export default SkillsModal;
