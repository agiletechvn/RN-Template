interface Options {
  loadMore: boolean;
  refreshDeps: any[];
  debounceInterval: number;
  isNoMore: boolean;
  loadingDelay: number;
}

interface DataResult {
  list: Array<any>;
  total: number;
}

interface Result {
  flatListProps;
  loading;
  data: DataResult;
  refresh;
  loadMore;
  loadingMore;
}

export default function useFlatList(service: Promise, options: Options): Result;
