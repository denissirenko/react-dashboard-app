import { useSelector, useDispatch } from 'react-redux';
import { Badge } from 'UI/Badge';
import { Card } from 'UI/Card';
import { Stack } from 'UI/Stack';

import { removeFilter, clearFilter, selectFitlers } from './filter-slice';

const FilterPanel = () => {
  const dispatch = useDispatch();
  const currentFilters = useSelector(selectFitlers);
  if (currentFilters.length === 0) {
    return null;
  }
  return (
    <Card className="filter-panel">
      <div className="filter-panel-wrapper">
        <Stack>
          {currentFilters.map((filter) => (
            <Badge onClear={() => dispatch(removeFilter(filter))} key={filter} variant="clearable">
              {filter}
            </Badge>
          ))}
        </Stack>

        <button onClick={() => dispatch(clearFilter())} className="link">
          Clear
        </button>
      </div>
    </Card>
  );
};

export { FilterPanel };
