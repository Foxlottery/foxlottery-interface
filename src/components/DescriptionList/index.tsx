import DescripionList from 'app/types/DescripionList'
import Item from 'app/types/Item'
import React, { FC } from 'react'

interface Props {
  descripionList: DescripionList
}

const DescriptionList: FC<Props> = ({ descripionList }) => {
  return (
    <div className="overflow-hidden bg-white shadow w-3xl sm:rounded-lg">
      <div className="px-4 py-5 sm:px-6">
        <h3 className="text-lg font-medium leading-6 text-gray-900">{descripionList.title}</h3>
        <p className="max-w-2xl mt-1 text-sm text-gray-500">{descripionList.subTitle}</p>
      </div>
      <div className="w-full px-4 py-5 border-t border-gray-200 sm:p-0">
        {descripionList.items.map((item: Item, index: number) => (
          <dl key={index} className="sm:divide-y sm:divide-gray-200">
            <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">{item.key}</dt>
              <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{item.value}</dd>
            </div>
          </dl>
        ))}
      </div>
    </div>
  )
}

export default DescriptionList
