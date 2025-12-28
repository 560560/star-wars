import React from 'react'
import ContentLoader from 'react-content-loader'

interface ContentListLoaderProps {
  rows?: number
}

export const ContentListLoader = React.memo<ContentListLoaderProps>(
  ({ rows = 3, ...props }) => {
    const rowHeight = 60
    return (
      <ContentLoader viewBox={`0 0 1500 ${rowHeight * rows}`} {...props}>
        {new Array(rows).fill(' ').map((el, index) => {
          const contentVerticalPosition = (contentHeight: number) =>
            rows > 1 ? contentHeight + rowHeight * index : contentHeight
          return (
            // eslint-disable-next-line react/no-array-index-key
            <React.Fragment key={`loader-row-${index}`}>
              <rect
                height="20"
                rx="4"
                ry="4"
                width="40"
                x="20"
                y={`${contentVerticalPosition(20)}`}
              />
              <rect
                height="20"
                rx="10"
                ry="4"
                width="600"
                x="100"
                y={`${contentVerticalPosition(20)}`}
              />
              <rect
                height="20"
                rx="10"
                ry="4"
                width="600"
                x="750"
                y={`${contentVerticalPosition(20)}`}
              />
              <rect
                height="20"
                rx="4"
                ry="4"
                width="20"
                x="1450"
                y={`${contentVerticalPosition(20)}`}
              />
              <rect
                height="1"
                ry="10"
                width="1500"
                x="10"
                y={`${contentVerticalPosition(59)}`}
              />
            </React.Fragment>
          )
        })}
      </ContentLoader>
    )
  },
)
