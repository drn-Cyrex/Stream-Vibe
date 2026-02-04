import './Plans.scss'
import Section from '@/layouts/Section/Section'
import Grid from '@/components/Grid/Grid'
import plansGroups from './plansGroups'
import PlanCard from '@/components/PlanCard/PlanCard'
import TabsNavigation from '@/components/Tabs/components/TabsNavigation/TabsNavigation'
import Tabs from '@/components/Tabs/Tabs'

const Plans = () => {
   const tabsTitle = 'plans-tabs'
   const tabsNavigationId = 'plans-tabs-navigation'

   return (
      <Section
         title="Choose the plan that's right for you"
         titleId="plans-id"
         description="Join StreamVibe and select from our flexible subscription options tailored to suit your viewing preferences. Get ready for non-stop entertainment!"
         actions={(
            <TabsNavigation
               id={tabsNavigationId}
               title={tabsTitle}
               items={plansGroups}
            />
         )}
      >
         <Tabs
            title={tabsTitle}
            navigationTargetElementId={tabsNavigationId}
            items={plansGroups.map((planGroup) => ({
               title: planGroup.title,
               isActive: planGroup.isActive,
               children: (
                  <Grid columns={3}>
                     {planGroup.items.map((planItem, index) => (
                        <PlanCard
                           {...planItem}
                           key={index}
                        />
                     ))}
                  </Grid>
               )
            }))}
         />
      </Section>
   )
}

export default Plans

