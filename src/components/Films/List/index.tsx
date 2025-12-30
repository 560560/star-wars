import React from 'react'
import { NavLink } from 'react-router-dom'

import { getPageId } from '../../../utils'

interface IListItem {
  name?: string
  title?: string
  url: string
}

interface IListProps {
  isLinked?: boolean
  items?: IListItem[]
  to: string
}

export const List: React.FC<IListProps> = ({ isLinked = true, items, to }) => {
  if (!items || items.length === 0) {
    return <div>No data available</div>
  }

  return (
    <div className="flex flex-wrap">
      {items.map(({ url, name, title }) => (
        <div key={url} className="w-6/12 sm:w-6/12 lg:w-4/12 px-3 mt-1 mb-1">
          {isLinked ? (
            <NavLink className="link" to={`/${to}/${getPageId(url)}`}>
              {name || title || 'Unknown'}
            </NavLink>
          ) : (
            <span>{name || title || 'Unknown'}</span>
          )}
        </div>
      ))}
    </div>
  )
}
