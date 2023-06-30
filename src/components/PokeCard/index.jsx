import { StarOutlined } from '@ant-design/icons'
import {Card} from 'antd'
import Meta from 'antd/lib/card/Meta'

const PokeCard = ({poke}) => {

    return <Card 
        title={poke.name}
        cover={<img src={poke.sprites?.front_default} alt={poke.name}/>}
        extra={< StarOutlined />}
    >
        <Meta description='magical'/>
    </Card>
}

export {PokeCard}