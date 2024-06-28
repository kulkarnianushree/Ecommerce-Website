import { Button } from 'react-bootstrap'
import './ToursItem.css'

const ToursItem = () => {
    const ToursArr = [
        { id: 1, date: 'JUL 16', name: 'DETROIT, MI', location: 'DTE ENERGY MUSIC THEATRE' },
        { id: 2, date: 'JUL 19', name: 'TORONTO, ON', location: 'BUDWEISER STAGE' },
        { id: 3, date: 'JUL 22', name: 'BRISTOW, VA', location: 'JIGGY LUBE LIVE' },
        { id: 4, date: 'JUL 27', name: 'PHOENIX, AZ', location: 'AK-CHIN PAVILION' },
        { id: 5, date: 'AUG 2', name: 'LAS VEGAS, NV', location: 'T-MOBILE ARENA' },
        { id: 6, date: 'AUG 7', name: 'CONCORD, CA', location: 'CONCORD PAVILION' },
    ]

    return (
        <div className='table-container'>
            <table className='tours-table'>
           
                <tbody>
                    {ToursArr.map((item) => (
                        <tr key={item.id}>
                            <td>{item.date}</td>
                            <td>{item.name}</td>
                            <td>{item.location}</td>
                            <td>
                                <Button variant='info'>BUY TICKETS</Button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default ToursItem
