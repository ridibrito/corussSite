type Props = {
    title: string
    value: number
}

export const ResumeItem = ({ title, value }: Props) => {
    return(
        <div>
            <h1 className="text-xl text-center text-gray-700 font-bold" >{title}</h1>
            <h1 className="font-normal text-xl">R$ {value}</h1>
        </div>
    )
}