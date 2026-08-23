import { useEffect, useRef, useState } from 'react'
import { ChevronDown } from 'lucide-react'
import './ui.css'

const Dropdown = ({
    trigger,
    children,
    align = 'left',
    className = ''
}) => {
    const [open, setOpen] = useState(false)
    const ref = useRef(null)

    useEffect(() => {
        const handleOutsideClick = (event) => {
            if (
                ref.current &&
                !ref.current.contains(event.target)
            ) {
                setOpen(false)
            }
        }

        document.addEventListener('mousedown', handleOutsideClick)

        return () => {
            document.removeEventListener(
                'mousedown',
                handleOutsideClick
            )
        }
    }, [])

    return (
        <div
            ref={ref}
            className={`mr-dropdown ${className}`}
        >
            <button
                type="button"
                className="mr-dropdown__trigger"
                onClick={() => setOpen((value) => !value)}
                aria-expanded={open}
            >
                {trigger}
                <ChevronDown
                    size={15}
                    className={`mr-dropdown__chevron ${
                        open ? 'mr-dropdown__chevron--open' : ''
                    }`}
                />
            </button>

            {open && (
                <div
                    className={`mr-dropdown__menu mr-dropdown__menu--${align}`}
                >
                    {children}
                </div>
            )}
        </div>
    )
}

export default Dropdown