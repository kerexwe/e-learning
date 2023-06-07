import React, { createContext, useState } from "react"
import Filter from "./components/Filter/Filter"
import List from "./components/List/List"
import scss from './CoursesList.module.scss'
import filter from './assets/OVERLAY COLOR.svg'


interface SearchContextValue {
    searchValue: string;
    setSearch: React.Dispatch<React.SetStateAction<string>>;
}


export const SearchContext = createContext<SearchContextValue | undefined>(undefined);
const CoursesList: React.FC = () => {
    const [searchValue, setSearch] = useState<any>()
    console.log(searchValue);


    return (
        <section className="container">
            <SearchContext.Provider value={{ searchValue, setSearch }}>
                <div className={scss.wrap}>
                    <div className={scss.header}>
                        <h2>Courses</h2>
                        <div className={scss.filter}>
                            <img src={filter} alt="" />
                            <a className='secondary_text' href="#open-modal">Filters</a>
                        </div>
                    </div>
                    <div id="open-modal" className={scss.modalWindow}>
                        <div>
                            <a href="#" title="Close" className={scss.modalClose}>Close</a>
                            <h1>Voilà!</h1>
                            <div>A CSS-only modal based on the :target pseudo-class. Hope you find it helpful.</div>
                        </div>
                    </div>

                    <div className={scss.wrapper}>
                        <Filter />
                        <List />
                    </div>
                </div>
            </SearchContext.Provider>
        </section>
    )
}
export default CoursesList