



const ContentCard = ({title,hedding,icon}) => {
  return (
    <div className="py-2">
      <div>
<div className="flex gap-5 px-5 pb-5">
              <div className="w-[44px] h-[44px] justify-center items-center flex text-navtext text-2xl bg-[#F2F8F7] rounded-full">{icon}</div>
          
          <div className="items-center justify-center  flex-col">
            <h3 className="font-bold text-base font-robo ">{hedding}</h3>
            <p className="font-normal text-xs font-robot py-1 text-navtext">{title}</p>
          </div>

</div>
         <div className="justify-end flex px-5">
              <div className="w-[345px] h-[1px]  bg-line"></div>
         </div>
        </div>
    </div>
  )
}

export default ContentCard