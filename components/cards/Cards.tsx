interface CardProps {
    children: React.ReactNode
}

const Cards: React.FC<CardProps> = ({children}) => {
    return ( 
        <section className="w-[200px] h-[300px] border-[2px] rounded-lg overflow-hidden">
            {children}
        </section>
     );
}
 
export default Cards;