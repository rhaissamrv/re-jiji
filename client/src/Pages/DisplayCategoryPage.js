import React from 'react';
import { useParams } from 'react-router-dom';
import DisplayListingsByCategory from './DisplayListingsByCategory';

const DisplayCategoryPage = () => {
    const { category } = useParams();

    console.log("CATEGORY", category)

    return (
        <div>
            <DisplayListingsByCategory category={category} />
        </div>
    )
}

export default DisplayCategoryPage;
