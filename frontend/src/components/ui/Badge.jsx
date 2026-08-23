import './ui.css'

const Badge = ({
    children,
    variant = 'neutral',
    size = 'md',
    dot = false,
    className = '',
    ...props
}) => {
    const classes = [
        'mr-badge',
        `mr-badge--${variant}`,
        `mr-badge--${size}`,
        className
    ]
        .filter(Boolean)
        .join(' ')

    return (
        <span className={classes} {...props}>
            {dot && <span className="mr-badge__dot" />}
            {children}
        </span>
    )
}

export default Badge