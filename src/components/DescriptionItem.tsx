
type DescriptiveProp = {
    title: string
    description: string
}
const DescriptionItem = ({title, description}:DescriptiveProp) => {
  return (
    <div className="flex items-center space-x-2">
        <span className="inline-block text-base font-medium text-[#303B54]">{title}</span> :
        <span className="inline-block text-base font-medium text-[#434854]">{description}</span>
    </div>
  )
}

export default DescriptionItem