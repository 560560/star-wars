import React from 'react'
import { NavLink } from 'react-router-dom'

import { getPageId } from '../../../utils'

interface ListItem {
  name?: string
  title?: string
  url: string
}

interface ListProps {
  items?: ListItem[]
  to: string
}

export const List: React.FC<ListProps> = ({ items, to }) => {
  if (!items || items.length === 0) {
    return <div>No data available</div>
  }

  return (
    <div className="flex flex-wrap">
      {items.map(({ url, name, title }) => (
        <div key={url} className="w-6/12 sm:w-6/12 lg:w-4/12 px-3 mt-1 mb-1">
          <NavLink className="link" to={`/${to}/${getPageId(url)}`}>
            {name || title || 'Unknown'}
          </NavLink>
        </div>
      ))}
    </div>
  )
}
