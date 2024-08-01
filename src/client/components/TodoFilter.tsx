import React from 'react'
import * as Tabs from '@radix-ui/react-tabs'

interface TodoFilterProps {
  selectedTab: string
  onTabChange: (tab: string) => void
}

export const TodoFilter: React.FC<TodoFilterProps> = ({
  selectedTab,
  onTabChange,
}) => {
  return (
    <Tabs.Root value={selectedTab} onValueChange={onTabChange}>
      <Tabs.List className="flex space-x-2.5">
        <Tabs.Trigger
          value="all"
          className={`rounded-full px-6 py-3 ${
            selectedTab === 'all'
              ? 'bg-gray-800 text-white'
              : 'border border-gray-300 bg-white text-[#334155]'
          }`}
        >
          All
        </Tabs.Trigger>
        <Tabs.Trigger
          value="pending"
          className={`rounded-full px-6 py-3 ${
            selectedTab === 'pending'
              ? 'bg-gray-800 text-white'
              : 'border border-gray-300 bg-white text-[#334155]'
          }`}
        >
          Pending
        </Tabs.Trigger>
        <Tabs.Trigger
          value="completed"
          className={`rounded-full px-6 py-3 ${
            selectedTab === 'completed'
              ? 'bg-gray-800 text-white'
              : 'border border-gray-300 bg-white text-[#334155]'
          }`}
        >
          Completed
        </Tabs.Trigger>
      </Tabs.List>
    </Tabs.Root>
  )
}
