import React from 'react'
import SearchTwitterBox from '../components/searchTwitterBox'
import TopicstofollowCard from '../components/topicstofollowCard'
import WhatshappeningCard from '../components/whatshappeningCard'
import WhotofollowCard from '../components/whotofollowCard'

const RightsideBar = () => {
  return (
    <>
      <SearchTwitterBox />
      <WhatshappeningCard />
      <WhotofollowCard />
      <TopicstofollowCard />
    </>
  )
}

export default RightsideBar