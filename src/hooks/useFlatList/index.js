import { useRef, useCallback } from 'react';
import { useRequest } from '@umijs/hooks';

const useFlatlist = (service, options) => {
  const request = useRequest(service, options);

  const onEndReachedCalledDuringMomentum = useRef(true);

  const onMomentumScrollBegin = useCallback(() => {
    onEndReachedCalledDuringMomentum.current = false;
  }, []);

  const onEndReached = useCallback(() => {
    if (!onEndReachedCalledDuringMomentum.current) {
      request?.loadMore();
      onEndReachedCalledDuringMomentum.current = true;
    }
  }, [request]);

  const keyExtractor = useCallback((item) => `${item.id}`, []);

  const flatListProps = {
    onMomentumScrollBegin,
    keyExtractor,
    onEndReached,
    refreshing: request?.loading,
    onRefresh: request?.refresh,
    data: request?.data?.list,
    onEndReachedThreshold: 0.5,
  };

  return { ...request, flatListProps };
};

export default useFlatlist;
