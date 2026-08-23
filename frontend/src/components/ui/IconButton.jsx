import './ui.css'

const IconButton = ({
    icon,
    label,
    variant = 'ghost',
    size = 'md',
    disabled = false,
    loading = false,
    className = '',
    onClick,
    ...props
}) => {
    const classes = [
        'mr-icon-button',
        `mr-icon-button--${variant}`,
        `mr-icon-button--${size}`,
        loading && 'mr-icon-button--loading',
        className
    ]
        .filter(Boolean)
        .join(' ')

    return (
        <button
            type="button"
            className={classes}
            aria-label={label}
            title={label}
            disabled={disabled || loading}
            onClick={onClick}
            {...props}
        >
            {loading ? (
                <span className="mr-icon-button__spinner" />
            ) : (
                icon
            )}
        </button>
    )
}

export default IconButton