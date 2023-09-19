// NavigationService.js

import { createNavigationContainerRef } from '@react-navigation/native';

export const navigationRef = createNavigationContainerRef();

export function navigate(name, params) {

    if (navigationRef.isReady()) {
        setTimeout(function (){
            navigationRef.navigate(name, params);
        }, 100);
    }
}
