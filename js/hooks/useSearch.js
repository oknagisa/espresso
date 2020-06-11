import {useState} from 'react';
export function useSearch(searchKey){
    const [list, setList] = useState([])
    const [search, setSearch] = useState('')
    const [loading, setLoading] = useState(false)
    
    if (search !== searchKey){
        setLoading(true)̥̥
        setSearch(searchKey)
        setTimeout(() =>
        {
        setList([{
                id: 'test',
                name: 'Kurkute Farms',
                description: 'From the house of Kurkutwadi, seeped from the fresh waters of Kurkute dam. Best fruits and veggies in the whole wide world',
                country: 'India',
                industry: 'Agro'
            }])
            setLoading(false)
         } , 2000)
    } 
    return { loading, list }
}