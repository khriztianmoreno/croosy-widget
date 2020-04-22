import React from 'react'
import ContentLoader from 'react-content-loader'

const ActivityLoader = () => (
  <ContentLoader
    speed={2}
    width="100%"
    height={160}
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
  >
    <rect x="61" y="11" rx="3" ry="3" width="800" height="14" />
    <rect x="62" y="34" rx="3" ry="3" width="800" height="8" />
    <rect x="4" y="78" rx="3" ry="3" width="800" height="6" />
    <rect x="4" y="94" rx="3" ry="3" width="800" height="6" />
    <rect x="4" y="9" rx="0" ry="3" width="40" height="54" />
    <rect x="31" y="107" rx="0" ry="0" width="0" height="20" />
  </ContentLoader>
)

export default ActivityLoader
