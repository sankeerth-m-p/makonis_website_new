import clsx from "clsx"

function Button({
  children,
  variant = "dark",
  className = "",
  ...props
}) {
  const baseStyles =
    "inline-flex items-center justify-center px-5 py-2.5 text-[15px] font-semibold rounded-md transition duration-200"

  const variants = {
    dark:
      "bg-makonis-navy text-white hover:bg-makonis-navy",

    light:
      "bg-white text-makonis-navy border border-black/10 hover:border-makonis-navy hover:text-makonis-navy",
  }

  return (
    <button
      className={clsx(baseStyles, variants[variant], className)}
      {...props}
    >
      {children}
    </button>
  )
}

export default Button