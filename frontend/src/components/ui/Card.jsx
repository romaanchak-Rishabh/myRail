import './ui.css'

const Card = ({
    children,
    variant = 'default',
    interactive = false,
    padding = 'md',
    className = '',
    onClick,
    ...props
}) => {
    const classes = [
        'mr-card',
        `mr-card--${variant}`,
        `mr-card--padding-${padding}`,
        interactive && 'mr-card--interactive',
        className
    ]
        .filter(Boolean)
        .join(' ')

    return (
        <div
            className={classes}
            onClick={interactive ? onClick : undefined}
            role={interactive ? 'button' : undefined}
            tabIndex={interactive ? 0 : undefined}
            {...props}
        >
            {children}
        </div>
    )
}

export default Card