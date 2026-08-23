import './ui.css'

const Divider = ({
    orientation = 'horizontal',
    className = ''
}) => {
    const classes = [
        'mr-divider',
        `mr-divider--${orientation}`,
        className
    ]
        .filter(Boolean)
        .join(' ')

    return (
        <div
            className={classes}
            role="separator"
            aria-orientation={orientation}
        />
    )
}

export default Divider