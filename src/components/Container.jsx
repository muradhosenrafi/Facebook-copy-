

const Container = ({children,className}) => {
  return (
    <div className={` w-full max-w-[420px] mx-auto ${className}`}>{children}</div>
  )
}

export default Container