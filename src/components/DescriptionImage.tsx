
type ImageProps  = {
    sr: string
    alt: string
}
const DescriptionImage = ({sr, alt}:ImageProps) => {
  return (
    <div className="w-[318px] h-[450px]">
        <img src={sr} alt={alt} className="w-full h-full object-cover"/>
    </div>
  )
}

export default DescriptionImage