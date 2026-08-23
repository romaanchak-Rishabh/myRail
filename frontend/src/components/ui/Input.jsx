import './ui.css'

const Input = ({
    label,
    error,
    hint,
    icon,
    value,
    onChange,
    placeholder,
    type = 'text',
    disabled = false,
    required = false,
    fullWidth = true,
    className = '',
    ...props
}) => {
    const classes = [
        'mr-input',
        error && 'mr-input--error',
        fullWidth && 'mr-input--full',
        className
    ]
        .filter(Boolean)
        .join(' ')

    return (
        <div className="mr-input-field">
            {label && (
                <label className="mr-input-field__label">
                    {label}
                    {required && (
                        <span className="mr-input-field__required">
                            *
                        </span>
                    )}
                </label>
            )}

            <div className="mr-input-wrapper">
                {icon && (
                    <span className="mr-input__icon">
                        {icon}
                    </span>
                )}

                <input
                    type={type}
                    className={classes}
                    value={value}
                    onChange={onChange}
                    placeholder={placeholder}
                    disabled={disabled}
                    required={required}
                    {...props}
                />
            </div>

            {error ? (
                <span className="mr-input-field__error">
                    {error}
                </span>
            ) : hint ? (
                <span className="mr-input-field__hint">
                    {hint}
                </span>
            ) : null}
        </div>
    )
}

export default Input