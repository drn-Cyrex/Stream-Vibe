import './Collections.scss'
import { Children } from 'react'
import Tabs from '@/components/Tabs/Tabs'
import collectionsGroups from './collectionsGroups'
import getIdFromTitle from '@/utils/getIdFromTitle'
import Section from '@/layouts/Section/Section'
import SliderNavigation from '@/components/Slider/components/SliderNavigation/SliderNavigation'
import Slider from '@/components/Slider/Slider'
import CategoryCard from '@/components/CategoryCard/CategoryCard'
import MovieCard from '@/components/MovieCard/MovieCard'

const Collections = () => {
   return (
      <Tabs
         className="collections container"
         title="collections"
         isEnableOnlyOnMobile
         items={collectionsGroups.map((collectionGroup) => ({
            isActive: collectionGroup.isActive,
            title: collectionGroup.title,
            children: (
               <div className="collections__group">
                  <p className="collections__title  hidden-mobile">
                     {collectionGroup.title}
                  </p>
                  {collectionGroup.items.map((collectionItem, index) => {
                     const {
                        title,
                        categoryItems,
                        movieItems,
                        sliderParams,
                     } = collectionItem

                     const titleFormatted = `${getIdFromTitle(collectionGroup.title)}-${getIdFromTitle(title)}`

                     const titleId = `${titleFormatted}-title`
                     const sliderNavigationId = `${titleFormatted}-slider-navigation`

                     return (
                        <Section
                           className="collections__section"
                           title={title}
                           titleId={titleId}
                           actions={(
                              <SliderNavigation
                                 id={sliderNavigationId}
                                 mode="tile"
                              />
                           )}
                           isActionsHiddenOnMobile
                           key={index}
                        >
                           <Slider
                              sliderParams={sliderParams}
                              navigationTargetElementId={sliderNavigationId}
                              isBeyondTheViewportOnMobileS
                           >
                              {categoryItems?.map((categoryItem, index) => (
                                 <CategoryCard {...categoryItem} key={index} />
                              )) ?? movieItems?.map((movieItem, index) => (
                                 <MovieCard {...movieItem} key={index} />
                              ))}
                           </Slider>
                        </Section>
                     )
                  })}
               </div>
            )
         }))}
      />
   )
}

export default Collections