import EventEmitter from './EventEmitter';

export default class TokenManagement {
  event = null;

  isRefreshing = false;
  refreshTimeout = 3000;

  constructor({
    isTokenValid,
    getAccessToken,
    onRefreshToken,
    refreshTimeout = 3000,
  }) {
    const event = new EventEmitter();
    this.refreshTimeout = refreshTimeout;

    event.on('refresh', () => {
      (async () => {
        try {
          const token = await getAccessToken();
          if (isTokenValid(token)) {
            event.emit('refreshDone', token);
          } else {
            event.emit('refreshing');
          }
        } catch (e) {}
      })();
    });

    event.on('refreshing', () => {
      if (this.isRefreshing) {
        return;
      }

      // fetch
      this.isRefreshing = true;

      const evtFire = false;
      onRefreshToken((newToken) => {
        this.event.emit('refreshDone', newToken);
        this.isRefreshing = false;
      });

      if (this.refreshTimeout) {
        setTimeout(() => {
          if (!evtFire) {
            this.event.emit('refreshDone', null);
            this.isRefreshing = false;
          }
        }, this.refreshTimeout);
      }
    });

    this.event = event;
  }

  getToken() {
    return new Promise((resolve) => {
      let isCalled = false;

      const refreshDoneHandler = (token) => {
        resolve(token);
        isCalled = true;
      };

      this.event.once('refreshDone', refreshDoneHandler);

      if (!isCalled) {
        this.event.emit('refresh');
      }
    });
  }

  inject(service) {
    return async (...args) => {
      const token = await this.getToken();
      const response = await service(token, ...args);

      return response;
    };
  }
}
