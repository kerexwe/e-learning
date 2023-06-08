import React, { useContext, useEffect, useState } from 'react'
import scss from './List.module.scss'
import ListCard from './ListCard/ListCard'
import axios from 'axios'
import Pagination from './Pagination/Pagination';
import { SearchContext } from '../../CoursesList';
import Skeleton from './ListCard/Skeleton/Skeleton';


function List() {
  const { searchValue } = useContext<any>(SearchContext)
  const [cards, setCards] = useState([])
  const [currentPage, setCurrentPage] = useState(1)
  const [isLoading, setIsLoading] = useState(true)


  useEffect(() => {
    const search = searchValue ? `&search=${searchValue}` : ''

    axios.get(`https://6450eaace1f6f1bb22a274b1.mockapi.io/cards?page=${currentPage}&limit=8&${search}`
    )
      .then(res => {
        setCards(res.data);
        setIsLoading(false)
      })
  }, [searchValue, currentPage])
  return (
    <div className={scss.cards}>
      {/* {
        cards.map((item:any) => 
          <ListCard key={item.id} {...item} />)
      } */}

      {
        isLoading ? [...new Array(6)].map((_, index) => <Skeleton key={index} />) : cards.map((item: any) =>
          <ListCard key={item.id} {...item} />)
      }


      <Pagination onChangePage={(number: number) => setCurrentPage(number)} />
    </div>
  )
}

export default List
