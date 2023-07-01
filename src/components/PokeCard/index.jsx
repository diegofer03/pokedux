import { StarFilled, StarOutlined } from '@ant-design/icons'
import {Button, Card} from 'antd'
import Meta from 'antd/lib/card/Meta'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setFavorite } from '../../actions'

const PokeCard = ({poke}) => {
    const pokelist = useSelector(state => state.pokemons.pokemons)
    const dispatch = useDispatch()
    const Icon = poke.isFavorite ? StarFilled : StarOutlined 
    const handleFavorite = () => {
        const newValues = pokelist.map((element) =>
            element.id === poke.id
            ? { ...element, isFavorite: !element.isFavorite }
            : element
        );
        dispatch(setFavorite(newValues))
    }
    return <Card 
        title={poke.name}
        cover={<img src={poke.sprites?.front_default} alt={poke.name}/>}
        extra={<Button icon={<Icon />} type="text" style={{color: '#ffd666'}} onClick={handleFavorite}/>}
    >
        <Meta description={poke.types?.map(pok => (
            <span key={pok.slot}>{pok.type.name} </span>
        ))}/>
    </Card>
}

export default React.memo(PokeCard, (prevProps, nextProps) => {
    return prevProps.poke.isFavorite === nextProps.poke.isFavorite
}) 