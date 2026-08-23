import './ui.css'

const Spinner = ({
    size = 'md',
    className = ''
}) => {
    const classes = [
        'mr-spinner',
        `mr-spinner--${size}`,
        className
    ]
        .filter(Boolean)
        .join(' ')

    return (
        <span
            className={classes}
            role="status"
            aria-label="Loading"
        />
    )
}

export default Spinner