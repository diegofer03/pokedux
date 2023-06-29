import { PokeCard } from "../PokeCard";
import './pokeList.css'
const PokeList = ({pokes}) => {
    return (
        <div className="pokelist">
            {pokes.map((poke, index)=>{
                return <PokeCard key={index} poke={poke}/>
            })}
        </div>
    )
}

PokeList.defaultProps = {
    pokes: Array(10).fill('')
}

export {PokeList}