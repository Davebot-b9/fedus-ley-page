interface TitleProps{
    title: string
    subtitle: string
}

const Title = (props:TitleProps) => {
    const {title, subtitle} = props

    return(
        <div className=" flex flex-col items-center">
            <h3 className="text-gray-200 text-2xl">{title}</h3>
            <h2 className="text-3xl text-blue-500">{subtitle}</h2>
        </div>
    );
}

export default Title