import React, { FC } from 'react'
import { PageProps } from 'gatsby'

import Layout from '../Layout'
import TourHeader from '../components/Tour/TourHeader/TourHeader.component'
import TourDescription from '../components/Tour/TourDescription/TourDescription.component'
import { Tour as TourType } from '../models/tourModel'

interface TourProps extends PageProps {
  pageContext: {
    tour: TourType
  }
}

const Tour: FC<TourProps> = props => {
  const { pageContext: { tour } } = props

  return (
    <Layout>
      <TourHeader
        name={tour.name}
        imageCover={tour.imageCover}
        duration={tour.duration}
        description={tour.startLocation.description}
      />
      <TourDescription
        date={tour.startDates[0]}
        difficulty={tour.difficulty}
        maxGroupSize={tour.maxGroupSize}
        ratingsAverage={tour.ratingsAverage}
        description={tour.description}
        guides={tour.guides}
      />
    </Layout>
  )
}

export default Tour
