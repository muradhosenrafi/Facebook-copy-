

const Image = ({src,alt,className}) => {
  return (
    <div>
        <img className={`max-w-full h-auto ${className}`} src={src} alt={alt} />
    </div>
  )
}

export default Image