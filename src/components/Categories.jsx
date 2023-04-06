import React from 'react'
import {CategoryApi} from '../apifolder/CategoryApi'
import Category from '../components/Category'
const Categories = () => {
    return (
        <div className='category flex justify-between items-center p-5'>
            {CategoryApi.map((category, index) => {
                return (
                    <Category
                        item={category}
                        key={index}
                        src={category.src}
                        title={category.title}
                    />
                )
            })}
        </div>
    )
}

export default Categories
