import './ui.css'

const Button = ({
    children,
    variant = 'primary',
    size = 'md',
    type = 'button',
    disabled = false,
    loading = false,
    icon = null,
    iconPosition = 'left',
    fullWidth = false,
    className = '',
    onClick,
    ...props
}) => {
    const classes = [
        'mr-button',
        `mr-button--${variant}`,
        `mr-button--${size}`,
        fullWidth && 'mr-button--full',
        loading && 'mr-button--loading',
        className
    ]
        .filter(Boolean)
        .join(' ')

    return (
        <button
            type={type}
            className={classes}
            disabled={disabled || loading}
            onClick={onClick}
            {...props}
        >
            {loading ? (
                <span
                    className="mr-button__spinner"
                    aria-hidden="true"
                />
            ) : (
                <>
                    {icon && iconPosition === 'left' && (
                        <span className="mr-button__icon">
                            {icon}
                        </span>
                    )}

                    {children && (
                        <span className="mr-button__content">
                            {children}
                        </span>
                    )}

                    {icon && iconPosition === 'right' && (
                        <span className="mr-button__icon">
                            {icon}
                        </span>
                    )}
                </>
            )}
        </button>
    )
}

export default Button