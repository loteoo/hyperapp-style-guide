
export default ({ label, placeholder, name, error, ...props }) => (
  <div class={{
    'nice-input': true,
    [name]: true,
    error: !!error
  }}>
    <input
      type="text"
      placeholder={label || placeholder || name}
      name={name}
      {...props}
    />
    <button class="square-button" type="button">go</button>
    {error && <small class="error">{error}</small>}
  </div>
)
