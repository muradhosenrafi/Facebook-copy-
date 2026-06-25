

const Image = ({src,alt,className,onClick}) => {
  return (
    <div>
        <img onClick={onClick} className={`max-w-full h-auto ${className}`} src={src} alt={alt} />
    </div>
  )
}

export default Image