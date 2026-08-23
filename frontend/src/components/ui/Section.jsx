import './ui.css'

const Section = ({
    children,
    spacing = 'md',
    className = ''
}) => {
    const classes = [
        'mr-section-component',
        `mr-section-component--${spacing}`,
        className
    ]
        .filter(Boolean)
        .join(' ')

    return (
        <section className={classes}>
            {children}
        </section>
    )
}

export default Section