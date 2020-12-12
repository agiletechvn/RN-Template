import React, { useRef, useCallback } from 'react';
import { ActivityIndicator } from 'react-native';
import { useRequest } from '@umijs/hooks';

const useFlatlist = (service, options) => {
  const request = useRequest(service, {
    loadMore: true,
    debounceInterval: 250,
    isNoMore: (e) => {
      return e?.list && e?.total && e?.list?.length < e?.total;
    },
    ...options,
  });

  const onEndReachedCalledDuringMomentum = useRef(false);

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
    scrollEventThrottle: 16,
    keyExtractor,
    onEndReached,
    refreshing: request?.loading,
    onRefresh: request?.refresh,
    data: request?.data?.list,
    onEndReachedThreshold: 0.5,
    ListFooterComponent: request?.loadingMore && <ActivityIndicator />,
  };

  return { ...request, flatListProps };
};

export default useFlatlist;
