import {PropertyContext} from  '../context/PropertyContext';
import { useContext } from 'react';

export const usePropertyContext = () => {
    const context = useContext(PropertyContext);

    if(!context)  {
        throw Error('useworkoutcontext must be used inside a workoutcontetxprovider')
    }

    return context
}