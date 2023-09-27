import React, {Component, useState} from 'react';
import {SafeAreaView, Text} from 'react-native';
import StarRating from 'react-native-star-rating';

const Index = () => {
    const [starRating, setStarRating] = useState(2.5);

    const changeStarRating = (ratingVal) => {
        setStarRating(ratingVal);
    }


    return (
        <SafeAreaView>
            <StarRating
                disabled={false}
                maxStars={5}
                rating={starRating}
                // emptyStar={'ios-star-outline'}
                // fullStar={'ios-star'}
                // halfStar={'ios-star-half'}
                // iconSet={'Ionicons'}
                selectedStar={(rating) => changeStarRating(rating)}
                fullStarColor={"green"}
            />
        </SafeAreaView>
    )
}

export default Index;
