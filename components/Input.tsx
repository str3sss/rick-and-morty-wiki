export const Input = forwardRef((props, ref) => {
  return (
    <input type="text"
      inputRef={ref}
      fullWidth
      {...props}
    />
  );
});