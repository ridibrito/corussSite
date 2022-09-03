import Card from '../card/index'

export default function List({ data, index: listIndex }){
    return(
<>
<div className='dark:text-gray-400 basis-80 grow-0 shrink-0 '> 
<h2 className='font-bold text-lg py-5'>{data.title}</h2>

 <ul>
  { data.cards.map((card, index) => (
  <Card
   key={card.id} 
   data={card} 
   listIndex={listIndex}
   index={index}
   />
   )) } 
</ul>


</div>




</>
 )
}