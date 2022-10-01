import { FC } from 'react'

import {
  Erc20Amount,
  GlobalProtocolStats as GlobalProtocolStatsType,
} from '@use-lens/react-apollo';
import { Card } from './UI/Card'
import { getTokenImage } from '../lib'

export const GlobalProtocolStats: FC<{ data: GlobalProtocolStatsType }> = ({ data }) => {
  const {
    totalBurntProfiles,
    totalCollects,
    totalComments,
    totalFollows,
    totalMirrors,
    totalPosts,
    totalProfiles,
    totalRevenue,
  } = data

  const statClassName = 'mb-3 font-normal text-gray-700 dark:text-gray-400'

  return (
    <Card className="container">
      <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        Global Protocol Stats
      </h5>
      <div className={statClassName}>Total Burnt Profiles: {totalBurntProfiles}</div>
      <div className={statClassName}>Total Collects: {totalCollects}</div>
      <div className={statClassName}>Total Comments: {totalComments}</div>
      <div className={statClassName}>Total Follows: {totalFollows}</div>
      <div className={statClassName}>Total Mirrors: {totalMirrors}</div>
      <div className={statClassName}>Total Posts: {totalPosts}</div>
      <div className={statClassName}>Total Profiles: {totalProfiles}</div>
      <div className={statClassName}>
        Total Revenue:
        {totalRevenue.map((revenue: Erc20Amount) => (
          <div key={revenue.asset.address} className="flex items-center space-x-1">
            <img className="w-5 h-5" src={getTokenImage(revenue.asset.symbol)} alt={revenue.asset.symbol} />
            <span>
              <b>{revenue.value}</b> {revenue.asset.symbol}
            </span>
          </div>
        ))}
      </div>
    </Card>
  )
}
