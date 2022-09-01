import CardList from "../card/cardList"

export default function ListList({ data }){
    return(
        <>
        <div className='pb-2'> 
        
        
         <ul> 
          { data.cards.map((card) => (
          <CardList
           key={CardList.id} 
           data={card} 
           />
           )) } 
        </ul>
        
        
        </div>
        
        
        
        
        </>
         )
        }