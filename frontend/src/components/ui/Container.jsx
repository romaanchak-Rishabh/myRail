import './ui.css'

const Container = ({
    children,
    size = 'default',
    className = ''
}) => {
    const classes = [
        'mr-container-component',
        `mr-container-component--${size}`,
        className
    ]
        .filter(Boolean)
        .join(' ')

    return (
        <div className={classes}>
            {children}
        </div>
    )
}

export default Container