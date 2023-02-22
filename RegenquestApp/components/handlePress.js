import React, { useCallback } from 'react'


function handlePress(nextLocation, navigation) {
    return useCallback(() => {
        navigation.navigate(nextLocation);
    }, [navigation]);
}

export default handlePress;
