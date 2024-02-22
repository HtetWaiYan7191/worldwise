import React from 'react'
import { useParams, useSearchParams } from 'react-router-dom';

export default function CityDetail() {
  const {id} = useParams();
  const [searchParams, setSearchParams] = useSearchParams();
  const lat = searchParams.get("lat")
  const lng = searchParams.get("lng")
  return (
    <div>
      <p>{id}</p>
      <p>Position : {lat} {lng} </p>
    </div>
  )
}
