import './ui.css'

const Skeleton = ({
    width,
    height,
    radius = 'sm',
    className = ''
}) => {
    const style = {
        width,
        height
    }

    const classes = [
        'mr-skeleton',
        `mr-skeleton--${radius}`,
        className
    ]
        .filter(Boolean)
        .join(' ')

    return (
        <div
            className={classes}
            style={style}
            aria-hidden="true"
        />
    )
}

export default Skeleton