import React, { useCallback, useContext, useRef, useState } from 'react'
import scss from './Filter.module.scss'
import search1 from './assets/ic_search.svg'
import x from './assets/free-icon-x-button-458595.png'
import { SearchContext } from '../../CoursesList'
import debounce from 'lodash.debounce'


function Filter() {
    const [value, setValue] = useState('')
    const { searchValue, setSearch } = useContext<any>(SearchContext)
    const inputRef = useRef<HTMLInputElement>(null)

    const onClickClear = () => {
        setSearch('');
        searchValue('');
        inputRef.current?.focus();
    }

    const updateSearchValue = useCallback(
        debounce((str:string) => {
            setSearch(str);
        }, 500),
        [],
    )

    const onChangeInput = (event: any) => {
        setValue(event.target.value)
        updateSearchValue(event.target.value)
    }

    return (
        <div className={scss.filter}>
            <div className={scss.filter__search}>
                <img src={search1} alt="" />
                <input
                    ref={inputRef}
                    value={value}
                    onChange={onChangeInput}
                    type="text"
                    placeholder='Search...' />
                {value && (
                    <img
                        onClick={onClickClear}
                        id={scss.img1}
                        src={x}
                        alt="" />
                )}
            </div>
            <div className={scss.filter__categories}>
                <p className='secondary_small_text'>z</p>
            </div>
            <div className={scss.filter__categories}>
                <p className='secondary_small_text'>Duration</p>
                <select>
                    <option value="0">All Duration</option>
                    <option value="1">100 hours</option>
                    <option value="2">80 hours</option>
                    <option value="3">60 hours</option>
                    <option value="4">40 hours</option>
                </select>
            </div>
            <div className={scss.filter__categories}>
                <p className='secondary_small_text'>Category</p>
                <select>
                    <option value="0">All category</option>
                    <option value="1">Management</option>
                    <option value="2">Design</option>
                    <option value="3">Web Development</option>
                    <option value="4">Python</option>
                </select>
            </div>
            <div className={scss.filter__categories}>
                <p className='secondary_small_text'>Level</p>
                <select>
                    <option value="0">All Level</option>
                    <option value="1">Beginner</option>
                    <option value="2">intermediate</option>
                    <option value="3">Advanced</option>
                </select>
            </div>
            <div className={scss.filter__categories}>
                <p className='secondary_small_text'>Duration</p>
                <select>
                    <option value="0">All category</option>
                    <option value="1">Management</option>
                    <option value="2">Design</option>
                    <option value="3">Web Development</option>
                    <option value="4">Python</option>
                </select>
            </div>
            <div className={scss.filter__categories}>
                <p className='secondary_small_text'>Fee</p>
                <select>
                    <option value="0">All Fee</option>
                    <option value="1">Paid</option>
                </select>
            </div>
            <div className={scss.filter__categories}>
                <p className='secondary_small_text'>Language</p>
                <select>
                    <option value="0">All Language</option>
                    <option value="1">English</option>
                    <option value="2">Spain</option>
                    <option value="3">Russian</option>
                </select>
            </div>
        </div>
    )
}

export default Filter
