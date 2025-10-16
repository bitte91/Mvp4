import React from 'react';
import { Search } from 'lucide-react';
import { cn } from '@/lib/utils';

export interface SearchBarProps extends React.InputHTMLAttributes<HTMLInputElement> {}

const SearchBar = React.forwardRef<HTMLInputElement, SearchBarProps>(
  ({ className, ...props }, ref) => {
    return (
      <div className={cn('relative w-full', className)}>
        <input
          type="search"
          className="w-full h-12 pl-12 pr-4 rounded-lg border border-gray-200 bg-white focus:ring-2 focus:ring-primary focus:outline-none shadow-soft"
          ref={ref}
          {...props}
        />
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
      </div>
    );
  }
);
SearchBar.displayName = 'SearchBar';

export { SearchBar };
