/* eslint-disable max-classes-per-file */
let overlayWindowId: string | null;

const getHost = () => /HOST_PORT=(ws?:\/\/.+)/.exec(window.location.search);

class ActWebsocketInterface {
  uri: any;

  id: string | null;

  activate: boolean;

  websocket: any;

  constructor(uri: string, path = 'MiniParse') {
    // url check
    const querySet = this.getQuerySet();
    if (typeof querySet.HOST_PORT !== 'undefined') {
      uri = querySet.HOST_PORT + path;
    }
    this.uri = uri;
    this.id = null;
    this.activate = false;

    document.addEventListener('onBroadcastMessage', (evt: Event) => this.onBroadcastMessage(evt));

    document.addEventListener('onRecvMessage', (evt) => this.onRecvMessage(evt));

    window.addEventListener('message', (e) => {
      if (e.data.type === 'onBroadcastMessage') {
        this.onBroadcastMessage(e.data);
      }
      if (e.data.type === 'onRecvMessage') {
        this.onRecvMessage(e.data);
      }
    });
  }

  connect() {
    if (typeof this.websocket !== 'undefined' && this.websocket !== null) {
      this.close();
    }
    this.activate = true;
    this.websocket = new WebSocket(this.uri);
    this.websocket.onopen = () => {
      this.onopen();
    };
    this.websocket.onmessage = (evt: Event) => {
      this.onmessage(evt);
    };
    this.websocket.onclose = () => {
      this.onclose();
    };
    this.websocket.onerror = () => {
      this.onerror();
    };
  }

  close() {
    this.activate = false;
    if (this.websocket !== null && typeof this.websocket !== 'undefined') {
      this.websocket.close();
    }
  }

  onopen() {
    // get id from useragent
    if (this.id !== null && typeof this.id !== 'undefined') {
      this.set_id(this.id);
    } else if (typeof overlayWindowId !== 'undefined') {
      this.set_id(overlayWindowId);
    } else {
      const r = new RegExp(
        '[a-fA-F0-9]{8}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{12}'
      );
      const id = r.exec(navigator.userAgent);
      if (id !== null && id.length === 1) {
        this.set_id(id[0]);
      }
    }
  }

  onclose() {
    this.websocket = null;
    if (this.activate) {
      setTimeout(() => {
        this.connect();
      }, 5000);
    }
  }

  onmessage(evt: any) {
    if (evt.data === '.') {
      this.websocket.send('.');
    } else {
      try {
        const obj = JSON.parse(evt.data);
        const { type } = obj;
        if (type === 'broadcast') {
          document.dispatchEvent(new CustomEvent('onBroadcastMessage', { detail: obj }));
        }
        if (type === 'send') {
          document.dispatchEvent(new CustomEvent('onRecvMessage', { detail: obj }));
        }
        if (type === 'set_id') {
          document.dispatchEvent(new CustomEvent('onIdChanged', { detail: obj }));
        }
      } catch (e) {
        console.error(e);
      }
    }
  }

  onerror() {
    this.websocket.close();
  }

  getQuerySet() {
    const querySet: { [p: string]: string } = {};
    // get query
    const query = window.location.search.substring(1);
    const vars = query.split('&');
    for (let i = 0; i < vars.length; i++) {
      try {
        const pair = vars[i].split('=');
        querySet[decodeURIComponent(pair[0])] = decodeURIComponent(pair[1]);
      } catch (e) {
        console.error(e);
      }
    }
    return querySet;
  }

  broadcast(type: string, msg: string) {
    if (typeof overlayWindowId !== 'undefined' && this.id !== overlayWindowId) {
      this.set_id(overlayWindowId);
    }
    this.websocket.send(
      JSON.stringify({
        type: 'broadcast',
        msgType: type,
        msg
      })
    );
  }

  send(to: string, type: string, msg: string) {
    if (typeof overlayWindowId !== 'undefined' && this.id !== overlayWindowId) {
      this.set_id(overlayWindowId);
    }
    const obj = {
      type: 'send',
      msgType: type,
      to,
      msg
    };
    this.websocket.send(JSON.stringify(obj));
  }

  overlayAPI(type: string, msg: string) {
    const obj = {} as { type: string; to: string | null; msgtype: string; msg: string };
    if (typeof overlayWindowId !== 'undefined' && this.id !== overlayWindowId) {
      this.set_id(overlayWindowId);
    }
    obj.type = 'overlayAPI';
    obj.to = overlayWindowId;
    obj.msgtype = type;
    obj.msg = msg;
    this.websocket.send(JSON.stringify(obj));
  }

  set_id(id: any) {
    const obj = { type: 'set_id', id };
    this.id = overlayWindowId;
    this.websocket.send(JSON.stringify(obj));
  }

  onRecvMessage(_e: any) {}

  onBroadcastMessage(_e: any) {}
}

class WebSocketImpl extends ActWebsocketInterface {
  constructor(uri: string, path = 'MiniParse') {
    super(uri, path);
  }

  // send(to, type, msg)
  // broadcast(type, msg)
  // onRecvMessage() {}

  onBroadcastMessage(e: any) {
    if (e.detail.msgtype === 'CombatData') {
      document.dispatchEvent(new CustomEvent('onOverlayDataUpdate', e));
    }
  }
}

export default function initActWebSocket() {
  if (!getHost()) {
    return;
  }
  let webs: WebSocketImpl;
  const url = new URLSearchParams(window.location.search);
  const wsUri = `${url.get('HOST_PORT')}MiniParse` || undefined;
  if (wsUri) {
    webs = new WebSocketImpl(wsUri);
    try {
      webs.connect();
    } catch (e) {
      console.error(e);
    }
    window.onbeforeunload = () => {
      webs.close();
    };
    window.addEventListener(
      'unload',
      () => {
        webs.close();
      },
      false
    );
  }
}
