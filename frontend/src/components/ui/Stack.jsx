import './ui.css'

const Stack = ({
    children,
    direction = 'vertical',
    gap = 'md',
    align = 'stretch',
    justify = 'start',
    wrap = false,
    className = ''
}) => {
    const classes = [
        'mr-stack',
        `mr-stack--${direction}`,
        `mr-stack--gap-${gap}`,
        `mr-stack--align-${align}`,
        `mr-stack--justify-${justify}`,
        wrap && 'mr-stack--wrap',
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

export default Stack