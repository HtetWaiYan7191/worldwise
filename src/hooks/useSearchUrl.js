import React from 'react'
import { useSearchParams } from 'react-router-dom';

export default function useSearchUrl() {
    const [searchParam, setSearchParams] = useSearchParams();
    const lat = searchParam.get('lat');
    const lng = searchParam.get('lng');
    return {lat, lng}
}
