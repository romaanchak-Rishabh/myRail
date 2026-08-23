import { useEffect } from 'react'
import { X } from 'lucide-react'
import './ui.css'

const Modal = ({
    open,
    onClose,
    title,
    description,
    children,
    size = 'md',
    showClose = true
}) => {
    useEffect(() => {
        if (!open) return

        const handleEscape = (event) => {
            if (event.key === 'Escape') {
                onClose()
            }
        }

        document.addEventListener('keydown', handleEscape)

        return () => {
            document.removeEventListener('keydown', handleEscape)
        }
    }, [open, onClose])

    useEffect(() => {
        if (!open) return

        const originalOverflow = document.body.style.overflow
        document.body.style.overflow = 'hidden'

        return () => {
            document.body.style.overflow = originalOverflow
        }
    }, [open])

    if (!open) return null

    return (
        <div
            className="mr-modal-overlay"
            onMouseDown={(event) => {
                if (event.target === event.currentTarget) {
                    onClose()
                }
            }}
        >
            <div
                className={`mr-modal mr-modal--${size}`}
                role="dialog"
                aria-modal="true"
                aria-labelledby={title ? 'mr-modal-title' : undefined}
            >
                {(title || showClose) && (
                    <header className="mr-modal__header">
                        <div>
                            {title && (
                                <h2 id="mr-modal-title">
                                    {title}
                                </h2>
                            )}

                            {description && (
                                <p>{description}</p>
                            )}
                        </div>

                        {showClose && (
                            <button
                                type="button"
                                className="mr-modal__close"
                                onClick={onClose}
                                aria-label="Close"
                            >
                                <X size={18} />
                            </button>
                        )}
                    </header>
                )}

                <div className="mr-modal__content">
                    {children}
                </div>
            </div>
        </div>
    )
}

export default Modal