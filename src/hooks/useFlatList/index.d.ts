interface Options {
  loadMore: boolean;
  refreshDeps: any[];
  debounceInterval: number;
  isNoMore: boolean;
  loadingDelay: number;
}

interface Result {
  flatListProps;
  loading;
  data;
  refresh;
  loadMore;
  loadingMore;
}

export default function useFlatList(service: Promise, options: Options): Result;
