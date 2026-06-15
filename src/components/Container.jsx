

const Container = ({children,className}) => {
  return (
    <div className={` w-full max-w-[1440px] px-4 sm:px-6 lg:px-8 mx-auto ${className}`}>{children}</div>
  )
}

export default Container