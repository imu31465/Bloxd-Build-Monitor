export const id = 189;
export const ids = [189];
export const modules = {
  9562: (QQ, WQ) => {
    WQ.discordURLBuilder = function(QQ) {
      var WQ;
      const XQ = (null === (WQ = null === window || void 0 === window ? void 0 : window.location) || void 0 === WQ ? void 0 : WQ.hostname) || "localhost",
        wQ = QQ.hostname.split("."),
        qQ = !QQ.hostname.includes("trycloudflare.com") && !QQ.hostname.includes("discordsays.com") && wQ.length > 2 ? `/${wQ[0]}` : "";
      return QQ.pathname.startsWith("/.proxy") ? `${QQ.protocol}//${XQ}${qQ}${QQ.pathname}${QQ.search}` : `${QQ.protocol}//${XQ}/.proxy/colyseus${qQ}${QQ.pathname}${QQ.search}`
    }
  },
  9552: (QQ, WQ, XQ) => {
    var wQ, qQ, TQ, zQ, sQ = XQ(9476),
      FQ = XQ(9554),
      PQ = XQ(9528);
    wQ = new WeakMap, qQ = new WeakMap, TQ = new WeakMap, zQ = new WeakMap, WQ.Auth = class {
      constructor(QQ) {
        this.http = QQ, this.settings = {
          path: "/auth",
          key: "colyseus-auth-token"
        }, wQ.set(this, !1), qQ.set(this, void 0), TQ.set(this, void 0), zQ.set(this, PQ.createNanoEvents()), FQ.getItem(this.settings.key, (QQ => this.token = QQ))
      }
      set token(QQ) {
        this.http.authToken = QQ
      }
      get token() {
        return this.http.authToken
      }
      onChange(QQ) {
        const WQ = sQ.__classPrivateFieldGet(this, zQ, "f").on("change", QQ);
        return sQ.__classPrivateFieldGet(this, wQ, "f") || sQ.__classPrivateFieldSet(this, qQ, new Promise(((QQ, WQ) => {
          this.getUserData().then((QQ => {
            this.emitChange(Object.assign(Object.assign({}, QQ), {
              token: this.token
            }))
          })).catch((QQ => {
            this.emitChange({
              user: null,
              token: void 0
            })
          })).finally((() => {
            QQ()
          }))
        })), "f"), sQ.__classPrivateFieldSet(this, wQ, !0, "f"), WQ
      }
      getUserData() {
        return sQ.__awaiter(this, void 0, void 0, (function*() {
          if (this.token) return (yield this.http.get(`${this.settings.path}/userdata`)).data;
          throw new Error("missing auth.token")
        }))
      }
      registerWithEmailAndPassword(QQ, WQ, XQ) {
        return sQ.__awaiter(this, void 0, void 0, (function*() {
          const wQ = (yield this.http.post(`${this.settings.path}/register`, {
            body: {
              email: QQ,
              password: WQ,
              options: XQ
            }
          })).data;
          return this.emitChange(wQ), wQ
        }))
      }
      signInWithEmailAndPassword(QQ, WQ) {
        return sQ.__awaiter(this, void 0, void 0, (function*() {
          const XQ = (yield this.http.post(`${this.settings.path}/login`, {
            body: {
              email: QQ,
              password: WQ
            }
          })).data;
          return this.emitChange(XQ), XQ
        }))
      }
      signInAnonymously(QQ) {
        return sQ.__awaiter(this, void 0, void 0, (function*() {
          const WQ = (yield this.http.post(`${this.settings.path}/anonymous`, {
            body: {
              options: QQ
            }
          })).data;
          return this.emitChange(WQ), WQ
        }))
      }
      sendPasswordResetEmail(QQ) {
        return sQ.__awaiter(this, void 0, void 0, (function*() {
          return (yield this.http.post(`${this.settings.path}/forgot-password`, {
            body: {
              email: QQ
            }
          })).data
        }))
      }
      signInWithProvider(QQ) {
        return sQ.__awaiter(this, arguments, void 0, (function*(QQ) {
          let WQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          return new Promise(((XQ, wQ) => {
            const qQ = WQ.width || 480,
              zQ = WQ.height || 768,
              FQ = this.token ? `?token=${this.token}` : "",
              PQ = `Login with ${QQ[0].toUpperCase()+QQ.substring(1)}`,
              gQ = this.http.client.getHttpEndpoint(`${WQ.prefix||`${this.settings.path}/provider`}/${QQ}${FQ}`),
              JQ = screen.width / 2 - qQ / 2,
              rQ = screen.height / 2 - zQ / 2;
            sQ.__classPrivateFieldSet(this, TQ, window.open(gQ, PQ, "toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no, copyhistory=no, width=" + qQ + ", height=" + zQ + ", top=" + rQ + ", left=" + JQ), "f");
            const IQ = QQ => {
                void 0 === QQ.data.user && void 0 === QQ.data.token || (clearInterval(jQ), sQ.__classPrivateFieldGet(this, TQ, "f").close(), sQ.__classPrivateFieldSet(this, TQ, void 0, "f"), window.removeEventListener("message", IQ), void 0 !== QQ.data.error ? wQ(QQ.data.error) : (XQ(QQ.data), this.emitChange(QQ.data)))
              },
              jQ = setInterval((() => {
                sQ.__classPrivateFieldGet(this, TQ, "f") && !sQ.__classPrivateFieldGet(this, TQ, "f").closed || (sQ.__classPrivateFieldSet(this, TQ, void 0, "f"), wQ("fX"), window.removeEventListener("message", IQ))
              }), 200);
            window.addEventListener("message", IQ)
          }))
        }))
      }
      signOut() {
        return sQ.__awaiter(this, void 0, void 0, (function*() {
          this.emitChange({
            user: null,
            token: null
          })
        }))
      }
      emitChange(QQ) {
        void 0 !== QQ.token && (this.token = QQ.token, null === QQ.token ? FQ.removeItem(this.settings.key) : FQ.setItem(this.settings.key, QQ.token)), sQ.__classPrivateFieldGet(this, zQ, "f").emit("change", QQ)
      }
    }
  },
  9471: (QQ, WQ, XQ) => {
    var wQ, qQ = XQ(9476),
      TQ = XQ(9482),
      zQ = XQ(9484),
      sQ = XQ(9546),
      FQ = XQ(9552),
      PQ = XQ(9562);
    class gQ extends Error {
      constructor(QQ, WQ) {
        super(QQ), this.code = WQ, this.name = "MatchMakeError", Object.setPrototypeOf(this, gQ.prototype)
      }
    }
    const JQ = "undefined" !== typeof window && "undefined" !== typeof(null === (wQ = null === window || void 0 === window ? void 0 : window.location) || void 0 === wQ ? void 0 : wQ.hostname) ? `${window.location.protocol.replace("http","ws")}//${window.location.hostname}${window.location.port&&`:${window.location.port}`}` : "ws://127.0.0.1:2567";
    class rQ {
      constructor() {
        let QQ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : JQ,
          WQ = arguments.length > 1 ? arguments[1] : void 0;
        var XQ, wQ;
        if ("string" === typeof QQ) {
          const WQ = QQ.startsWith("/") ? new URL(QQ, JQ) : new URL(QQ),
            XQ = "https:" === WQ.protocol || "wss:" === WQ.protocol,
            wQ = Number(WQ.port || (XQ ? 443 : 80));
          this.settings = {
            hostname: WQ.hostname,
            pathname: WQ.pathname,
            port: wQ,
            secure: XQ,
            searchParams: WQ.searchParams.toString() || void 0
          }
        } else void 0 === QQ.port && (QQ.port = QQ.secure ? 443 : 80), void 0 === QQ.pathname && (QQ.pathname = ""), this.settings = QQ;
        this.settings.pathname.endsWith("/") && (this.settings.pathname = this.settings.pathname.slice(0, -1)), this.http = new sQ.HTTP(this, (null === WQ || void 0 === WQ ? void 0 : WQ.headers) || {}), this.auth = new FQ.Auth(this.http), this.urlBuilder = null === WQ || void 0 === WQ ? void 0 : WQ.urlBuilder, !this.urlBuilder && "undefined" !== typeof window && (null === (wQ = null === (XQ = null === window || void 0 === window ? void 0 : window.location) || void 0 === XQ ? void 0 : XQ.hostname) || void 0 === wQ ? void 0 : wQ.includes("discordsays.com")) && (this.urlBuilder = PQ.discordURLBuilder, console.log("Colyseus SDK: Discord Embedded SDK detected. Using custom URL builder."))
      }
      joinOrCreate(QQ) {
        return qQ.__awaiter(this, arguments, void 0, (function*(QQ) {
          let WQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            XQ = arguments.length > 2 ? arguments[2] : void 0;
          return yield this.createMatchMakeRequest("joinOrCreate", QQ, WQ, XQ)
        }))
      }
      create(QQ) {
        return qQ.__awaiter(this, arguments, void 0, (function*(QQ) {
          let WQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            XQ = arguments.length > 2 ? arguments[2] : void 0;
          return yield this.createMatchMakeRequest("create", QQ, WQ, XQ)
        }))
      }
      join(QQ) {
        return qQ.__awaiter(this, arguments, void 0, (function*(QQ) {
          let WQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            XQ = arguments.length > 2 ? arguments[2] : void 0;
          return yield this.createMatchMakeRequest("join", QQ, WQ, XQ)
        }))
      }
      joinById(QQ) {
        return qQ.__awaiter(this, arguments, void 0, (function*(QQ) {
          let WQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            XQ = arguments.length > 2 ? arguments[2] : void 0;
          return yield this.createMatchMakeRequest("joinById", QQ, WQ, XQ)
        }))
      }
      reconnect(QQ, WQ) {
        return qQ.__awaiter(this, void 0, void 0, (function*() {
          if ("string" === typeof QQ && "string" === typeof WQ) throw new Error("DEPRECATED: .reconnect() now only accepts 'reconnectionToken' as argument.\nYou can get this token from previously connected `room.reconnectionToken`");
          const [XQ, wQ] = QQ.split(":");
          if (!XQ || !wQ) throw new Error("Invalid reconnection token format.\nThe format should be roomId:reconnectionToken");
          return yield this.createMatchMakeRequest("reconnect", XQ, {
            reconnectionToken: wQ
          }, WQ)
        }))
      }
      consumeSeatReservation(QQ, WQ, XQ) {
        return qQ.__awaiter(this, void 0, void 0, (function*() {
          const wQ = this.createRoom(QQ.room.name, WQ);
          wQ.roomId = QQ.room.roomId, wQ.sessionId = QQ.sessionId;
          const zQ = {
            sessionId: wQ.sessionId
          };
          QQ.reconnectionToken && (zQ.reconnectionToken = QQ.reconnectionToken);
          const sQ = XQ || wQ;
          return wQ.connect(this.buildEndpoint(QQ.room, zQ, QQ.protocol), QQ.devMode && (() => qQ.__awaiter(this, void 0, void 0, (function*() {
            console.info(`[Colyseus devMode]: ${String.fromCodePoint(128260)} Re-establishing connection with room id '${wQ.roomId}'...`);
            let XQ = 0;
            const TQ = () => qQ.__awaiter(this, void 0, void 0, (function*() {
              XQ++;
              try {
                yield this.consumeSeatReservation(QQ, WQ, sQ), console.info(`[Colyseus devMode]: ${String.fromCodePoint(9989)} Successfully re-established connection with room '${wQ.roomId}'`)
              } catch (qQ) {
                XQ < 8 ? (console.info(`[Colyseus devMode]: ${String.fromCodePoint(128260)} retrying... (${XQ} out of 8)`), setTimeout(TQ, 2e3)) : console.info(`[Colyseus devMode]: ${String.fromCodePoint(10060)} Failed to reconnect. Is your server running? Please check server logs.`)
              }
            }));
            setTimeout(TQ, 2e3)
          }))), sQ, QQ, this.http.headers), new Promise(((QQ, WQ) => {
            const XQ = (QQ, XQ) => WQ(new TQ.ServerError(QQ, XQ));
            sQ.onError.once(XQ), sQ.onJoin.once((() => {
              sQ.onError.remove(XQ), setTimeout((() => {
                try {
                  const QQ = [2, 221, 78, 205, 170, 100, 227, 105, 7, 11, 168, 73, 160, 189, 207, 237, 124, 173, 184, 99];
                  QQ && sQ.ZH(128, new Uint8Array(QQ))
                } catch {}
              }), 3e3), QQ(sQ)
            }))
          }))
        }))
      }
      createMatchMakeRequest(QQ, WQ) {
        return qQ.__awaiter(this, arguments, void 0, (function*(QQ, WQ) {
          let XQ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
            wQ = arguments.length > 3 ? arguments[3] : void 0,
            qQ = arguments.length > 4 ? arguments[4] : void 0;
          const TQ = (yield this.http.post(`matchmake/${QQ}/${WQ}`, {
            headers: {
              "X-Requested-With": "XMLHtttpRequest",
              Accept: "application/json",
              "Content-Type": "application/json"
            },
            body: JSON.stringify(XQ)
          })).data;
          if (TQ.error) throw new gQ(TQ.error, TQ.code);
          return "reconnect" === QQ && (TQ.reconnectionToken = XQ.reconnectionToken), yield this.consumeSeatReservation(TQ, wQ, qQ)
        }))
      }
      createRoom(QQ, WQ) {
        return new zQ.EJ(QQ, WQ)
      }
      buildEndpoint(QQ) {
        let WQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          XQ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "ws",
          wQ = this.settings.searchParams || "";
        this.http.authToken && (WQ._authToken = this.http.authToken);
        for (const zQ in WQ) WQ.hasOwnProperty(zQ) && (wQ += (wQ ? "&" : "") + `${zQ}=${WQ[zQ]}`);
        "h3" === XQ && (XQ = "http");
        let qQ = this.settings.secure ? `${XQ}s://` : `${XQ}://`;
        QQ.publicAddress ? qQ += `${QQ.publicAddress}` : qQ += `${this.settings.hostname}${this.getEndpointPort()}${this.settings.pathname}`;
        const TQ = `${qQ}/${QQ.processId}/${QQ.roomId}?${wQ}`;
        return this.urlBuilder ? this.urlBuilder(new URL(TQ)) : TQ
      }
      getHttpEndpoint() {
        let QQ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
        const WQ = QQ.startsWith("/") ? QQ : `/${QQ}`;
        let XQ = `${this.settings.secure?"https":"http"}://${this.settings.hostname}${this.getEndpointPort()}${this.settings.pathname}${WQ}`;
        return this.settings.searchParams && (XQ += `?${this.settings.searchParams}`), this.urlBuilder ? this.urlBuilder(new URL(XQ)) : XQ
      }
      getEndpointPort() {
        return 80 !== this.settings.port && 443 !== this.settings.port ? `:${this.settings.port}` : ""
      }
    }
    rQ.VERSION = "0.16.22", WQ.Client = rQ, WQ.MatchMakeError = gQ
  },
  9491: (QQ, WQ, XQ) => {
    var wQ = XQ(9497),
      qQ = XQ(9506);
    WQ.Connection = class {
      constructor(QQ) {
        if (this.events = {}, "h3" === QQ) this.transport = new wQ.H3TransportTransport(this.events);
        else this.transport = new qQ.WebSocketTransport(this.events)
      }
      connect(QQ, WQ) {
        this.transport.connect.call(this.transport, QQ, WQ)
      }
      send(QQ) {
        this.transport.send(QQ)
      }
      sendUnreliable(QQ) {
        this.transport.sendUnreliable(QQ)
      }
      close(QQ, WQ) {
        this.transport.close(QQ, WQ)
      }
      get isOpen() {
        return this.transport.isOpen
      }
    }
  },
  9546: (QQ, WQ, XQ) => {
    var wQ = XQ(9482);

    function qQ(QQ) {
      var WQ = Object.create(null);
      return QQ && Object.keys(QQ).forEach((function(XQ) {
        if ("default" !== XQ) {
          var wQ = Object.getOwnPropertyDescriptor(QQ, XQ);
          Object.defineProperty(WQ, XQ, wQ.get ? wQ : {
            enumerable: !0,
            get: function() {
              return QQ[XQ]
            }
          })
        }
      })), WQ.default = QQ, Object.freeze(WQ)
    }
    var TQ = qQ(XQ(9548));
    WQ.HTTP = class {
      constructor(QQ) {
        let WQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        this.client = QQ, this.headers = WQ
      }
      get(QQ) {
        let WQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        return this.request("get", QQ, WQ)
      }
      post(QQ) {
        let WQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        return this.request("post", QQ, WQ)
      }
      del(QQ) {
        let WQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        return this.request("del", QQ, WQ)
      }
      put(QQ) {
        let WQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        return this.request("put", QQ, WQ)
      }
      request(QQ, WQ) {
        let XQ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        return TQ[QQ](this.client.getHttpEndpoint(WQ), this.getOptions(XQ)).catch((QQ => {
          var WQ;
          if (QQ.aborted) throw new wQ.AbortError("Request aborted");
          const XQ = QQ.statusCode,
            qQ = (null === (WQ = QQ.data) || void 0 === WQ ? void 0 : WQ.error) || QQ.statusMessage || QQ.message;
          if (!XQ && !qQ) throw QQ;
          throw new wQ.ServerError(XQ, qQ)
        }))
      }
      getOptions(QQ) {
        return QQ.headers = Object.assign({}, this.headers, QQ.headers), this.authToken && (QQ.headers.Authorization = `Bearer ${this.authToken}`), "undefined" !== typeof cc && cc.sys && cc.sys.isNative || (QQ.withCredentials = !0), QQ
      }
    }
  },
  9516: (QQ, WQ) => {
    var XQ, wQ;
    WQ.Protocol = void 0, (XQ = WQ.Protocol || (WQ.Protocol = {}))[XQ.HANDSHAKE = 9] = "HANDSHAKE", XQ[XQ.JOIN_ROOM = 10] = "JOIN_ROOM", XQ[XQ.ERROR = 11] = "ERROR", XQ[XQ.LEAVE_ROOM = 12] = "LEAVE_ROOM", XQ[XQ.ROOM_DATA = 13] = "ROOM_DATA", XQ[XQ.ROOM_STATE = 14] = "ROOM_STATE", XQ[XQ.ROOM_STATE_PATCH = 15] = "ROOM_STATE_PATCH", XQ[XQ.ROOM_DATA_SCHEMA = 16] = "ROOM_DATA_SCHEMA", XQ[XQ.ROOM_DATA_BYTES = 17] = "ROOM_DATA_BYTES", WQ.ErrorCode = void 0, (wQ = WQ.ErrorCode || (WQ.ErrorCode = {}))[wQ.MATCHMAKE_NO_HANDLER = 4210] = "MATCHMAKE_NO_HANDLER", wQ[wQ.MATCHMAKE_INVALID_CRITERIA = 4211] = "MATCHMAKE_INVALID_CRITERIA", wQ[wQ.MATCHMAKE_INVALID_ROOM_ID = 4212] = "MATCHMAKE_INVALID_ROOM_ID", wQ[wQ.MATCHMAKE_UNHANDLED = 4213] = "MATCHMAKE_UNHANDLED", wQ[wQ.MATCHMAKE_EXPIRED = 4214] = "MATCHMAKE_EXPIRED", wQ[wQ.AUTH_FAILED = 4215] = "AUTH_FAILED", wQ[wQ.APPLICATION_ERROR = 4216] = "APPLICATION_ERROR"
  },
  9484: (QQ, WQ, XQ) => {
    var wQ = XQ(9491),
      qQ = XQ(9516),
      TQ = XQ(9524),
      zQ = XQ(9528),
      sQ = XQ(9534),
      FQ = XQ(9499),
      PQ = XQ(9536),
      gQ = XQ(9482),
      JQ = XQ(9541);
    class rQ {
      constructor(QQ, WQ) {
        this.onStateChange = sQ.createSignal(), this.onError = sQ.createSignal(), this.mV = sQ.createSignal(), this.onJoin = sQ.createSignal(), this.hasJoined = !1, this.onMessageHandlers = zQ.createNanoEvents(), this.roomId = null, this.name = QQ, this.packr = new JQ.Packr, this.packr.encode(void 0), WQ && (this.VV = new(TQ.getSerializer("schema")), this.rootSchema = WQ, this.VV.state = new WQ), this.onError(((QQ, WQ) => {
          var XQ;
          return null === (XQ = console.warn) || void 0 === XQ ? void 0 : XQ.call(console, `colyseus.js - onError => (${QQ}) ${WQ}`)
        })), this.mV((() => this.yV()))
      }
      connect(QQ, WQ) {
        let XQ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : this,
          qQ = arguments.length > 3 ? arguments[3] : void 0,
          TQ = arguments.length > 4 ? arguments[4] : void 0;
        const zQ = new wQ.Connection(qQ.protocol);
        if (XQ.connection = zQ, zQ.events.onmessage = rQ.prototype.onMessageCallback.bind(XQ), zQ.events.onclose = function(QQ) {
            var wQ;
            if (!XQ.hasJoined) return null === (wQ = console.warn) || void 0 === wQ || wQ.call(console, `Room connection was closed unexpectedly (${QQ.code}): ${QQ.reason}`), void XQ.onError.invoke(QQ.code, QQ.reason);
            QQ.code === gQ.CloseCode.DEVMODE_RESTART && WQ ? WQ() : (XQ.mV.invoke(QQ.code, QQ.reason), XQ.destroy())
          }, zQ.events.onerror = function(QQ) {
            var WQ;
            null === (WQ = console.warn) || void 0 === WQ || WQ.call(console, `Room, onError (${QQ.code}): ${QQ.reason}`), XQ.onError.invoke(QQ.code, QQ.reason)
          }, "h3" === qQ.protocol) {
          const WQ = new URL(QQ);
          zQ.connect(WQ.origin, qQ)
        } else zQ.connect(QQ, TQ)
      }
      leave() {
        let QQ = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
        return new Promise((WQ => {
          this.mV((QQ => WQ(QQ))), this.connection ? QQ ? (this.packr.buffer[0] = qQ.Protocol.LEAVE_ROOM, this.connection.send(this.packr.buffer.subarray(0, 1))) : this.connection.close() : this.mV.invoke(gQ.CloseCode.CONSENTED)
        }))
      }
      KV(QQ, WQ) {
        return this.onMessageHandlers.on(this.getMessageHandlerKey(QQ), WQ)
      }
      send(QQ, WQ) {
        const XQ = {
          offset: 1
        };
        this.packr.buffer[0] = qQ.Protocol.ROOM_DATA, "string" === typeof QQ ? FQ.encode.string(this.packr.buffer, QQ, XQ) : FQ.encode.number(this.packr.buffer, QQ, XQ), this.packr.position = 0;
        const wQ = void 0 !== WQ ? this.packr.pack(WQ, 2048 + XQ.offset) : this.packr.buffer.subarray(0, XQ.offset);
        this.connection.send(wQ)
      }
      sendUnreliable(QQ, WQ) {
        const XQ = {
          offset: 1
        };
        this.packr.buffer[0] = qQ.Protocol.ROOM_DATA, "string" === typeof QQ ? FQ.encode.string(this.packr.buffer, QQ, XQ) : FQ.encode.number(this.packr.buffer, QQ, XQ), this.packr.position = 0;
        const wQ = void 0 !== WQ ? this.packr.pack(WQ, 2048 + XQ.offset) : this.packr.buffer.subarray(0, XQ.offset);
        this.connection.sendUnreliable(wQ)
      }
      ZH(QQ, WQ) {
        const XQ = {
          offset: 1
        };
        if (this.packr.buffer[0] = qQ.Protocol.ROOM_DATA_BYTES, "string" === typeof QQ ? FQ.encode.string(this.packr.buffer, QQ, XQ) : FQ.encode.number(this.packr.buffer, QQ, XQ), WQ.byteLength + XQ.offset > this.packr.buffer.byteLength) {
          const QQ = new Uint8Array(XQ.offset + WQ.byteLength);
          QQ.set(this.packr.buffer), this.packr.useBuffer(QQ)
        }
        this.packr.buffer.set(WQ, XQ.offset), this.connection.send(this.packr.buffer.subarray(0, XQ.offset + WQ.byteLength))
      }
      get state() {
        return this.VV.getState()
      }
      yV() {
        this.onJoin.clear(), this.onStateChange.clear(), this.onError.clear(), this.mV.clear(), this.onMessageHandlers.events = {}, this.VV instanceof PQ.pR && (this.VV.ZI.root.callbacks = {})
      }
      onMessageCallback(QQ) {
        const WQ = new Uint8Array(QQ.data),
          XQ = {
            offset: 1
          },
          wQ = WQ[0];
        if (wQ === qQ.Protocol.JOIN_ROOM) {
          const QQ = FQ.decode.utf8Read(WQ, XQ, WQ[XQ.offset++]);
          if (this.serializerId = FQ.decode.utf8Read(WQ, XQ, WQ[XQ.offset++]), !this.VV) {
            const QQ = TQ.getSerializer(this.serializerId);
            this.VV = new QQ
          }
          WQ.byteLength > XQ.offset && this.VV.handshake && this.VV.handshake(WQ, XQ), this.reconnectionToken = `${this.roomId}:${QQ}`, this.hasJoined = !0, this.onJoin.invoke(), this.packr.buffer[0] = qQ.Protocol.JOIN_ROOM, this.connection.send(this.packr.buffer.subarray(0, 1))
        } else if (wQ === qQ.Protocol.ERROR) {
          const QQ = FQ.decode.number(WQ, XQ),
            wQ = FQ.decode.string(WQ, XQ);
          this.onError.invoke(QQ, wQ)
        } else if (wQ === qQ.Protocol.LEAVE_ROOM) this.leave();
        else if (wQ === qQ.Protocol.ROOM_STATE) this.VV.setState(WQ, XQ), this.onStateChange.invoke(this.VV.getState());
        else if (wQ === qQ.Protocol.ROOM_STATE_PATCH) this.VV.patch(WQ, XQ), this.onStateChange.invoke(this.VV.getState());
        else if (wQ === qQ.Protocol.ROOM_DATA) {
          const QQ = FQ.decode.stringCheck(WQ, XQ) ? FQ.decode.string(WQ, XQ) : FQ.decode.number(WQ, XQ),
            wQ = WQ.byteLength > XQ.offset ? JQ.unpack(WQ, {
              start: XQ.offset
            }) : void 0;
          this.dispatchMessage(QQ, wQ)
        } else if (wQ === qQ.Protocol.ROOM_DATA_BYTES) {
          const QQ = FQ.decode.stringCheck(WQ, XQ) ? FQ.decode.string(WQ, XQ) : FQ.decode.number(WQ, XQ);
          this.dispatchMessage(QQ, WQ.subarray(XQ.offset))
        }
      }
      dispatchMessage(QQ, WQ) {
        var XQ;
        const wQ = this.getMessageHandlerKey(QQ);
        this.onMessageHandlers.events[wQ] ? this.onMessageHandlers.emit(wQ, WQ) : this.onMessageHandlers.events["*"] ? this.onMessageHandlers.emit("*", QQ, WQ) : null === (XQ = console.warn) || void 0 === XQ || XQ.call(console, `colyseus.js: onMessage() not registered for type '${QQ}'.`)
      }
      destroy() {
        this.VV && this.VV.teardown()
      }
      getMessageHandlerKey(QQ) {
        switch (typeof QQ) {
          case "string":
            return QQ;
          case "number":
            return `i${QQ}`;
          default:
            throw new Error("invalid message type.")
        }
      }
    }
    WQ.EJ = rQ
  },
  9554: (QQ, WQ, XQ) => {
    var wQ = XQ(9476);
    let qQ;

    function TQ() {
      if (!qQ) try {
        qQ = "undefined" !== typeof cc && cc.sys && cc.sys.localStorage ? cc.sys.localStorage : window.localStorage
      } catch (QQ) {}
      return qQ || "undefined" === typeof globalThis.indexedDB || (qQ = new zQ), qQ || (qQ = {
        cache: {},
        setItem: function(QQ, WQ) {
          this.cache[QQ] = WQ
        },
        getItem: function(QQ) {
          this.cache[QQ]
        },
        removeItem: function(QQ) {
          delete this.cache[QQ]
        }
      }), qQ
    }
    class zQ {
      constructor() {
        this.dbPromise = new Promise((QQ => {
          const WQ = indexedDB.open("_colyseus_storage", 1);
          WQ.onupgradeneeded = () => WQ.result.createObjectStore("store"), WQ.onsuccess = () => QQ(WQ.result)
        }))
      }
      tx(QQ, WQ) {
        return wQ.__awaiter(this, void 0, void 0, (function*() {
          const XQ = (yield this.dbPromise).transaction("store", QQ).objectStore("store");
          return WQ(XQ)
        }))
      }
      setItem(QQ, WQ) {
        return this.tx("readwrite", (XQ => XQ.put(WQ, QQ))).then()
      }
      getItem(QQ) {
        return wQ.__awaiter(this, void 0, void 0, (function*() {
          const WQ = yield this.tx("readonly", (WQ => WQ.get(QQ)));
          return new Promise((QQ => {
            WQ.onsuccess = () => QQ(WQ.result)
          }))
        }))
      }
      removeItem(QQ) {
        return this.tx("readwrite", (WQ => WQ.delete(QQ))).then()
      }
    }
    WQ.getItem = function(QQ, WQ) {
      const XQ = TQ().getItem(QQ);
      "undefined" !== typeof Promise && XQ instanceof Promise ? XQ.then((QQ => WQ(QQ))) : WQ(XQ)
    }, WQ.removeItem = function(QQ) {
      TQ().removeItem(QQ)
    }, WQ.setItem = function(QQ, WQ) {
      TQ().setItem(QQ, WQ)
    }
  },
  9528: (QQ, WQ) => {
    WQ.createNanoEvents = () => ({
      emit(QQ) {
        let WQ = this.events[QQ] || [];
        for (var XQ = arguments.length, wQ = new Array(XQ > 1 ? XQ - 1 : 0), qQ = 1; qQ < XQ; qQ++) wQ[qQ - 1] = arguments[qQ];
        for (let TQ = 0, zQ = WQ.length; TQ < zQ; TQ++) WQ[TQ](...wQ)
      },
      events: {},
      on(QQ, WQ) {
        var XQ;
        return (null === (XQ = this.events[QQ]) || void 0 === XQ ? void 0 : XQ.push(WQ)) || (this.events[QQ] = [WQ]), () => {
          var XQ;
          this.events[QQ] = null === (XQ = this.events[QQ]) || void 0 === XQ ? void 0 : XQ.filter((QQ => WQ !== QQ))
        }
      }
    })
  },
  9534: (QQ, WQ) => {
    class XQ {
      constructor() {
        this.handlers = []
      }
      register(QQ) {
        return this.handlers.push(QQ), this
      }
      invoke() {
        for (var QQ = arguments.length, WQ = new Array(QQ), XQ = 0; XQ < QQ; XQ++) WQ[XQ] = arguments[XQ];
        this.handlers.forEach((QQ => QQ.apply(this, WQ)))
      }
      invokeAsync() {
        for (var QQ = arguments.length, WQ = new Array(QQ), XQ = 0; XQ < QQ; XQ++) WQ[XQ] = arguments[XQ];
        return Promise.all(this.handlers.map((QQ => QQ.apply(this, WQ))))
      }
      remove(QQ) {
        const WQ = this.handlers.indexOf(QQ);
        this.handlers[WQ] = this.handlers[this.handlers.length - 1], this.handlers.pop()
      }
      clear() {
        this.handlers = []
      }
    }
    WQ.EventEmitter = XQ, WQ.createSignal = function() {
      const QQ = new XQ;

      function WQ(WQ) {
        return QQ.register(WQ, null === this)
      }
      return WQ.once = WQ => {
        const XQ = function() {
          for (var wQ = arguments.length, qQ = new Array(wQ), TQ = 0; TQ < wQ; TQ++) qQ[TQ] = arguments[TQ];
          WQ.apply(this, qQ), QQ.remove(XQ)
        };
        QQ.register(XQ)
      }, WQ.remove = WQ => QQ.remove(WQ), WQ.invoke = function() {
        return QQ.invoke(...arguments)
      }, WQ.invokeAsync = function() {
        return QQ.invokeAsync(...arguments)
      }, WQ.clear = () => QQ.clear(), WQ
    }
  },
  9482: (QQ, WQ) => {
    var XQ;
    WQ.CloseCode = void 0, (XQ = WQ.CloseCode || (WQ.CloseCode = {}))[XQ.CONSENTED = 4e3] = "CONSENTED", XQ[XQ.DEVMODE_RESTART = 4010] = "DEVMODE_RESTART";
    class wQ extends Error {
      constructor(QQ, WQ) {
        super(WQ), this.name = "ServerError", this.code = QQ
      }
    }
    class qQ extends Error {
      constructor(QQ) {
        super(QQ), this.name = "AbortError"
      }
    }
    WQ.AbortError = qQ, WQ.ServerError = wQ
  },
  9463: (QQ, WQ, XQ) => {
    XQ(9468);
    var wQ = XQ(9471),
      qQ = XQ(9516),
      TQ = XQ(9484),
      zQ = XQ(9552),
      sQ = XQ(9482),
      FQ = XQ(9536),
      PQ = XQ(9565),
      gQ = XQ(9524);
    gQ.registerSerializer("schema", FQ.pR), gQ.registerSerializer("none", PQ.NoneSerializer), WQ.Client = wQ.Client, WQ.MatchMakeError = wQ.MatchMakeError, Object.defineProperty(WQ, "ErrorCode", {
      enumerable: !0,
      get: function() {
        return qQ.ErrorCode
      }
    }), Object.defineProperty(WQ, "Protocol", {
      enumerable: !0,
      get: function() {
        return qQ.Protocol
      }
    }), WQ.EJ = TQ.EJ, WQ.Auth = zQ.Auth, WQ.ServerError = sQ.ServerError, WQ.pR = FQ.pR, WQ.getStateCallbacks = FQ.getStateCallbacks, WQ.registerSerializer = gQ.registerSerializer
  },
  9468: () => {
    ArrayBuffer.isView || (ArrayBuffer.isView = QQ => null !== QQ && "object" === typeof QQ && QQ.buffer instanceof ArrayBuffer), "undefined" === typeof globalThis && "undefined" !== typeof window && (window.globalThis = window), "undefined" === typeof FormData && (globalThis.FormData = class {})
  },
  9565: (QQ, WQ) => {
    WQ.NoneSerializer = class {
      setState(QQ) {}
      getState() {
        return null
      }
      patch(QQ) {}
      teardown() {}
      handshake(QQ) {}
    }
  },
  9536: (QQ, WQ, XQ) => {
    var wQ = XQ(9499);
    WQ.pR = class {
      setState(QQ, WQ) {
        this.ZI.decode(QQ, WQ)
      }
      getState() {
        return this.state
      }
      patch(QQ, WQ) {
        return this.ZI.decode(QQ, WQ)
      }
      teardown() {
        this.ZI.root.clearRefs()
      }
      handshake(QQ, WQ) {
        this.state ? (wQ.Reflection.decode(QQ, WQ), this.ZI = new wQ.Decoder(this.state)) : (this.ZI = wQ.Reflection.decode(QQ, WQ), this.state = this.ZI.state)
      }
    }, WQ.getStateCallbacks = function(QQ) {
      try {
        return wQ.getDecoderStateCallbacks(QQ.VV.ZI)
      } catch (WQ) {
        return
      }
    }
  },
  9524: (QQ, WQ) => {
    const XQ = {};
    WQ.getSerializer = function(QQ) {
      const WQ = XQ[QQ];
      if (!WQ) throw new Error("missing serializer: " + QQ);
      return WQ
    }, WQ.registerSerializer = function(QQ, WQ) {
      XQ[QQ] = WQ
    }
  },
  9497: (QQ, WQ, XQ) => {
    var wQ = XQ(9476),
      qQ = XQ(9499);
    WQ.H3TransportTransport = class {
      constructor(QQ) {
        this.events = QQ, this.isOpen = !1, this.lengthPrefixBuffer = new Uint8Array(9)
      }
      connect(QQ) {
        let WQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        const XQ = WQ.fingerprint && {
          serverCertificateHashes: [{
            algorithm: "sha-256",
            value: new Uint8Array(WQ.fingerprint).buffer
          }]
        } || void 0;
        this.wt = new WebTransport(QQ, XQ), this.wt.ready.then((QQ => {
          console.log("WebTransport ready!", QQ), this.isOpen = !0, this.unreliableReader = this.wt.datagrams.readable.getReader(), this.unreliableWriter = this.wt.datagrams.writable.getWriter();
          this.wt.incomingBidirectionalStreams.getReader().read().then((QQ => {
            this.reader = QQ.value.readable.getReader(), this.writer = QQ.value.writable.getWriter(), this.sendSeatReservation(WQ.room.roomId, WQ.sessionId, WQ.reconnectionToken), this.readIncomingData(), this.readIncomingUnreliableData()
          })).catch((QQ => {
            console.error("failed to read incoming stream", QQ), console.error("TODO: close the connection")
          }))
        })).catch((QQ => {
          console.log("WebTransport not ready!", QQ), this._close()
        })), this.wt.closed.then((QQ => {
          console.log("WebTransport closed w/ success", QQ), this.events.onclose({
            code: QQ.closeCode,
            reason: QQ.reason
          })
        })).catch((QQ => {
          console.log("WebTransport closed w/ error", QQ), this.events.onerror(QQ), this.events.onclose({
            code: QQ.closeCode,
            reason: QQ.reason
          })
        })).finally((() => {
          this._close()
        }))
      }
      send(QQ) {
        const WQ = qQ.encode.number(this.lengthPrefixBuffer, QQ.length, {
            offset: 0
          }),
          XQ = new Uint8Array(WQ + QQ.length);
        XQ.set(this.lengthPrefixBuffer.subarray(0, WQ), 0), XQ.set(QQ, WQ), this.writer.write(XQ)
      }
      sendUnreliable(QQ) {
        const WQ = qQ.encode.number(this.lengthPrefixBuffer, QQ.length, {
            offset: 0
          }),
          XQ = new Uint8Array(WQ + QQ.length);
        XQ.set(this.lengthPrefixBuffer.subarray(0, WQ), 0), XQ.set(QQ, WQ), this.unreliableWriter.write(XQ)
      }
      close(QQ, WQ) {
        try {
          this.wt.close({
            closeCode: QQ,
            reason: WQ
          })
        } catch (XQ) {
          console.error(XQ)
        }
      }
      readIncomingData() {
        return wQ.__awaiter(this, void 0, void 0, (function*() {
          let QQ;
          for (; this.isOpen;) {
            try {
              QQ = yield this.reader.read();
              const WQ = QQ.value,
                XQ = {
                  offset: 0
                };
              do {
                const QQ = qQ.decode.number(WQ, XQ);
                this.events.onmessage({
                  data: WQ.subarray(XQ.offset, XQ.offset + QQ)
                }), XQ.offset += QQ
              } while (XQ.offset < WQ.length)
            } catch (WQ) {
              -1 === WQ.message.indexOf("session is closed") && console.error("H3Transport: failed to read incoming data", WQ);
              break
            }
            if (QQ.done) break
          }
        }))
      }
      readIncomingUnreliableData() {
        return wQ.__awaiter(this, void 0, void 0, (function*() {
          let QQ;
          for (; this.isOpen;) {
            try {
              QQ = yield this.unreliableReader.read();
              const WQ = QQ.value,
                XQ = {
                  offset: 0
                };
              do {
                const QQ = qQ.decode.number(WQ, XQ);
                this.events.onmessage({
                  data: WQ.subarray(XQ.offset, XQ.offset + QQ)
                }), XQ.offset += QQ
              } while (XQ.offset < WQ.length)
            } catch (WQ) {
              -1 === WQ.message.indexOf("session is closed") && console.error("H3Transport: failed to read incoming data", WQ);
              break
            }
            if (QQ.done) break
          }
        }))
      }
      sendSeatReservation(QQ, WQ, XQ) {
        const wQ = {
            offset: 0
          },
          TQ = [];
        qQ.encode.string(TQ, QQ, wQ), qQ.encode.string(TQ, WQ, wQ), XQ && qQ.encode.string(TQ, XQ, wQ), this.writer.write(new Uint8Array(TQ).buffer)
      }
      _close() {
        this.isOpen = !1
      }
    }
  },
  9506: (QQ, WQ, XQ) => {
    var wQ = XQ(9513);
    const qQ = globalThis.WebSocket || wQ;
    WQ.WebSocketTransport = class {
      constructor(QQ) {
        this.events = QQ
      }
      send(QQ) {
        this.ws.send(QQ)
      }
      sendUnreliable(QQ) {
        console.warn("colyseus.js: The WebSocket transport does not support unreliable messages")
      }
      connect(QQ, WQ) {
        try {
          this.ws = new qQ(QQ, {
            headers: WQ,
            protocols: this.protocols
          })
        } catch (XQ) {
          this.ws = new qQ(QQ, this.protocols)
        }
        this.ws.binaryType = "arraybuffer", this.ws.onopen = this.events.onopen, this.ws.onmessage = this.events.onmessage, this.ws.onclose = this.events.onclose, this.ws.onerror = this.events.onerror
      }
      close(QQ, WQ) {
        this.ws.close(QQ, WQ)
      }
      get isOpen() {
        return this.ws.readyState === qQ.OPEN
      }
    }
  },
  9513: QQ => {
    QQ.exports = function() {
      throw new Error("ws does not work in the browser. Browser clients must use the native WebSocket object")
    }
  },
  9548: (QQ, WQ, XQ) => {
    function wQ(QQ, WQ) {
      WQ.headers = QQ.headers || {}, WQ.statusMessage = QQ.statusText, WQ.statusCode = QQ.status, WQ.data = QQ.response
    }

    function qQ(QQ, WQ, XQ) {
      return new Promise((function(qQ, TQ) {
        XQ = XQ || {};
        var zQ, sQ, FQ, PQ = new XMLHttpRequest,
          gQ = XQ.body,
          JQ = XQ.headers || {};
        for (zQ in XQ.timeout && (PQ.timeout = XQ.timeout), PQ.ontimeout = PQ.onerror = function(QQ) {
            QQ.timeout = "timeout" == QQ.type, TQ(QQ)
          }, PQ.onabort = function(QQ) {
            QQ.aborted = !0, TQ(QQ)
          }, PQ.open(QQ, WQ.href || WQ), PQ.onload = function() {
            for (FQ = PQ.getAllResponseHeaders().trim().split(/[\r\n]+/), wQ(PQ, PQ); sQ = FQ.shift();) sQ = sQ.split(": "), PQ.headers[sQ.shift().toLowerCase()] = sQ.join(": ");
            if ((sQ = PQ.headers["content-type"]) && ~sQ.indexOf("application/json")) try {
              PQ.data = JSON.parse(PQ.data, XQ.reviver)
            } catch (QQ) {
              return wQ(PQ, QQ), TQ(QQ)
            }(PQ.status >= 400 ? TQ : qQ)(PQ)
          }, typeof FormData < "u" && gQ instanceof FormData || gQ && "object" == typeof gQ && (JQ["content-type"] = "application/json", gQ = JSON.stringify(gQ)), PQ.withCredentials = !!XQ.withCredentials, JQ) PQ.setRequestHeader(zQ, JQ[zQ]);
        PQ.send(gQ), XQ.signal && XQ.signal.addEventListener("abort", (function() {
          PQ.abort()
        }))
      }))
    }
    XQ.r(WQ), XQ.d(WQ, {
      del: () => FQ,
      get: () => TQ,
      patch: () => sQ,
      post: () => zQ,
      put: () => PQ,
      send: () => qQ
    });
    var TQ = qQ.bind(qQ, "GET"),
      zQ = qQ.bind(qQ, "POST"),
      sQ = qQ.bind(qQ, "PATCH"),
      FQ = qQ.bind(qQ, "DELETE"),
      PQ = qQ.bind(qQ, "PUT")
  },
  9541: (QQ, WQ, XQ) => {
    var wQ, qQ, TQ;
    XQ.r(WQ), XQ.d(WQ, {
      ALWAYS: () => YW,
      C1: () => UQ,
      DECIMAL_FIT: () => ZW,
      DECIMAL_ROUND: () => NW,
      Decoder: () => FW,
      Encoder: () => nW,
      FLOAT32_OPTIONS: () => IW,
      NEVER: () => xW,
      Packr: () => EW,
      RESERVE_START_SPACE: () => mW,
      RESET_BUFFER_MODE: () => KW,
      REUSE_BUFFER_MODE: () => OW,
      Unpackr: () => lQ,
      addExtension: () => fW,
      clearSource: () => zW,
      decode: () => rW,
      decodeIter: () => MW,
      encode: () => eW,
      encodeIter: () => QX,
      isNativeAccelerationEnabled: () => SQ,
      mapsAsObjects: () => XX,
      pack: () => oW,
      roundFloat32: () => pW,
      unpack: () => gW,
      unpackMultiple: () => JW,
      useRecords: () => WX
    });
    try {
      wQ = new TextDecoder
    } catch (wX) {}
    var zQ = 0;
    const sQ = [];
    var FQ, PQ, gQ, JQ, rQ, IQ = sQ,
      jQ = 0,
      BQ = {},
      yQ = 0,
      VQ = 0,
      DQ = [],
      pQ = {
        useRecords: !1,
        mapsAsObjects: !0
      };
    class GQ {}
    const UQ = new GQ;
    UQ.name = "MessagePack 0xC1";
    var bQ, vQ, dQ, HQ = !1,
      aQ = 2;
    try {
      new Function("")
    } catch (wX) {
      aQ = 1 / 0
    }
    class lQ {
      constructor(QQ) {
        QQ && (!1 === QQ.useRecords && void 0 === QQ.mapsAsObjects && (QQ.mapsAsObjects = !0), QQ.sequential && !1 !== QQ.trusted && (QQ.trusted = !0, QQ.structures || 0 == QQ.useRecords || (QQ.structures = [], QQ.maxSharedStructures || (QQ.maxSharedStructures = 0))), QQ.structures ? QQ.structures.sharedLength = QQ.structures.length : QQ.getStructures && ((QQ.structures = []).uninitialized = !0, QQ.structures.sharedLength = 0), QQ.int64AsNumber && (QQ.int64AsType = "number")), Object.assign(this, QQ)
      }
      unpack(QQ, WQ) {
        if (qQ) return TW((() => (zW(), this ? this.unpack(QQ, WQ) : lQ.prototype.unpack.call(pQ, QQ, WQ))));
        QQ.buffer || QQ.constructor !== ArrayBuffer || (QQ = "undefined" !== typeof Buffer ? Buffer.from(QQ) : new Uint8Array(QQ)), "object" === typeof WQ ? (TQ = WQ.end || QQ.length, zQ = WQ.start || 0) : (zQ = 0, TQ = WQ > -1 ? WQ : QQ.length), jQ = 0, VQ = 0, PQ = null, IQ = sQ, gQ = null, qQ = QQ;
        try {
          rQ = QQ.dataView || (QQ.dataView = new DataView(QQ.buffer, QQ.byteOffset, QQ.byteLength))
        } catch (wX) {
          if (qQ = null, QQ instanceof Uint8Array) throw wX;
          throw new Error("Source must be a Uint8Array or Buffer but was a " + (QQ && "object" == typeof QQ ? QQ.constructor.name : typeof QQ))
        }
        if (this instanceof lQ) {
          if (BQ = this, this.structures) return FQ = this.structures, hQ(WQ);
          (!FQ || FQ.length > 0) && (FQ = [])
        } else BQ = pQ, (!FQ || FQ.length > 0) && (FQ = []);
        return hQ(WQ)
      }
      unpackMultiple(QQ, WQ) {
        let XQ, wQ = 0;
        try {
          HQ = !0;
          let qQ = QQ.length,
            TQ = this ? this.unpack(QQ, qQ) : PW.unpack(QQ, qQ);
          if (!WQ) {
            for (XQ = [TQ]; zQ < qQ;) wQ = zQ, XQ.push(hQ());
            return XQ
          }
          if (!1 === WQ(TQ, wQ, zQ)) return;
          for (; zQ < qQ;)
            if (wQ = zQ, !1 === WQ(hQ(), wQ, zQ)) return
        } catch (wX) {
          throw wX.lastPosition = wQ, wX.values = XQ, wX
        } finally {
          HQ = !1, zW()
        }
      }
      _mergeStructures(QQ, WQ) {
        vQ && (QQ = vQ.call(this, QQ)), QQ = QQ || [], Object.isFrozen(QQ) && (QQ = QQ.map((QQ => QQ.slice(0))));
        for (let XQ = 0, wQ = QQ.length; XQ < wQ; XQ++) {
          let WQ = QQ[XQ];
          WQ && (WQ.isShared = !0, XQ >= 32 && (WQ.highByte = XQ - 32 >> 5))
        }
        QQ.sharedLength = QQ.length;
        for (let XQ in WQ || [])
          if (XQ >= 0) {
            let wQ = QQ[XQ],
              qQ = WQ[XQ];
            qQ && (wQ && ((QQ.restoreStructures || (QQ.restoreStructures = []))[XQ] = wQ), QQ[XQ] = qQ)
          } return this.structures = QQ
      }
      decode(QQ, WQ) {
        return this.unpack(QQ, WQ)
      }
    }

    function hQ(QQ) {
      try {
        if (!BQ.trusted && !HQ) {
          let QQ = FQ.sharedLength || 0;
          QQ < FQ.length && (FQ.length = QQ)
        }
        let WQ;
        if (BQ.randomAccessStructure && qQ[zQ] < 64 && qQ[zQ] >= 32 && bQ ? (WQ = bQ(qQ, zQ, TQ, BQ), qQ = null, QQ && QQ.lazy || !WQ || (WQ = WQ.toJSON()), zQ = TQ) : WQ = cQ(), gQ && (zQ = gQ.postBundlePosition, gQ = null), HQ && (FQ.restoreStructures = null), zQ == TQ) FQ && FQ.restoreStructures && iQ(), FQ = null, qQ = null, JQ && (JQ = null);
        else {
          if (zQ > TQ) throw new Error("Unexpected end of MessagePack data");
          if (!HQ) {
            let QQ;
            try {
              QQ = JSON.stringify(WQ, ((QQ, WQ) => "bigint" === typeof WQ ? `${WQ}n` : WQ)).slice(0, 100)
            } catch (wX) {
              QQ = "(JSON view not available " + wX + ")"
            }
            throw new Error("Data read, but end of buffer not reached " + QQ)
          }
        }
        return WQ
      } catch (wX) {
        throw FQ && FQ.restoreStructures && iQ(), zW(), (wX instanceof RangeError || wX.message.startsWith("Unexpected end of buffer") || zQ > TQ) && (wX.incomplete = !0), wX
      }
    }

    function iQ() {
      for (let QQ in FQ.restoreStructures) FQ[QQ] = FQ.restoreStructures[QQ];
      FQ.restoreStructures = null
    }

    function cQ() {
      let QQ = qQ[zQ++];
      if (QQ < 160) {
        if (QQ < 128) {
          if (QQ < 64) return QQ;
          {
            let WQ = FQ[63 & QQ] || BQ.getStructures && CQ()[63 & QQ];
            return WQ ? (WQ.read || (WQ.read = RQ(WQ, 63 & QQ)), WQ.read()) : QQ
          }
        }
        if (QQ < 144) {
          if (QQ -= 128, BQ.mapsAsObjects) {
            let WQ = {};
            for (let XQ = 0; XQ < QQ; XQ++) {
              let QQ = mQ();
              "__proto__" === QQ && (QQ = "__proto_"), WQ[QQ] = cQ()
            }
            return WQ
          } {
            let WQ = new Map;
            for (let XQ = 0; XQ < QQ; XQ++) WQ.set(cQ(), cQ());
            return WQ
          }
        } {
          QQ -= 144;
          let WQ = new Array(QQ);
          for (let XQ = 0; XQ < QQ; XQ++) WQ[XQ] = cQ();
          return BQ.freezeData ? Object.freeze(WQ) : WQ
        }
      }
      if (QQ < 192) {
        let WQ = QQ - 160;
        if (VQ >= zQ) return PQ.slice(zQ - yQ, (zQ += WQ) - yQ);
        if (0 == VQ && TQ < 140) {
          let QQ = WQ < 16 ? YQ(WQ) : xQ(WQ);
          if (null != QQ) return QQ
        }
        return uQ(WQ)
      } {
        let WQ;
        switch (QQ) {
          case 192:
            return null;
          case 193:
            return gQ ? (WQ = cQ(), WQ > 0 ? gQ[1].slice(gQ.position1, gQ.position1 += WQ) : gQ[0].slice(gQ.position0, gQ.position0 -= WQ)) : UQ;
          case 194:
            return !1;
          case 195:
            return !0;
          case 196:
            if (WQ = qQ[zQ++], void 0 === WQ) throw new Error("Unexpected end of buffer");
            return ZQ(WQ);
          case 197:
            return WQ = rQ.getUint16(zQ), zQ += 2, ZQ(WQ);
          case 198:
            return WQ = rQ.getUint32(zQ), zQ += 4, ZQ(WQ);
          case 199:
            return OQ(qQ[zQ++]);
          case 200:
            return WQ = rQ.getUint16(zQ), zQ += 2, OQ(WQ);
          case 201:
            return WQ = rQ.getUint32(zQ), zQ += 4, OQ(WQ);
          case 202:
            if (WQ = rQ.getFloat32(zQ), BQ.useFloat32 > 2) {
              let QQ = sW[(127 & qQ[zQ]) << 1 | qQ[zQ + 1] >> 7];
              return zQ += 4, (QQ * WQ + (WQ > 0 ? .5 : -.5) | 0) / QQ
            }
            return zQ += 4, WQ;
          case 203:
            return WQ = rQ.getFloat64(zQ), zQ += 8, WQ;
          case 204:
            return qQ[zQ++];
          case 205:
            return WQ = rQ.getUint16(zQ), zQ += 2, WQ;
          case 206:
            return WQ = rQ.getUint32(zQ), zQ += 4, WQ;
          case 207:
            return "number" === BQ.int64AsType ? (WQ = 4294967296 * rQ.getUint32(zQ), WQ += rQ.getUint32(zQ + 4)) : "string" === BQ.int64AsType ? WQ = rQ.getBigUint64(zQ).toString() : "auto" === BQ.int64AsType ? (WQ = rQ.getBigUint64(zQ), WQ <= BigInt(2) << BigInt(52) && (WQ = Number(WQ))) : WQ = rQ.getBigUint64(zQ), zQ += 8, WQ;
          case 208:
            return rQ.getInt8(zQ++);
          case 209:
            return WQ = rQ.getInt16(zQ), zQ += 2, WQ;
          case 210:
            return WQ = rQ.getInt32(zQ), zQ += 4, WQ;
          case 211:
            return "number" === BQ.int64AsType ? (WQ = 4294967296 * rQ.getInt32(zQ), WQ += rQ.getUint32(zQ + 4)) : "string" === BQ.int64AsType ? WQ = rQ.getBigInt64(zQ).toString() : "auto" === BQ.int64AsType ? (WQ = rQ.getBigInt64(zQ), WQ >= BigInt(-2) << BigInt(52) && WQ <= BigInt(2) << BigInt(52) && (WQ = Number(WQ))) : WQ = rQ.getBigInt64(zQ), zQ += 8, WQ;
          case 212:
            if (WQ = qQ[zQ++], 114 == WQ) return QW(63 & qQ[zQ++]);
            {
              let QQ = DQ[WQ];
              if (QQ) return QQ.read ? (zQ++, QQ.read(cQ())) : QQ.noBuffer ? (zQ++, QQ()) : QQ(qQ.subarray(zQ, ++zQ));
              throw new Error("Unknown extension " + WQ)
            }
          case 213:
            return WQ = qQ[zQ], 114 == WQ ? (zQ++, QW(63 & qQ[zQ++], qQ[zQ++])) : OQ(2);
          case 214:
            return OQ(4);
          case 215:
            return OQ(8);
          case 216:
            return OQ(16);
          case 217:
            return WQ = qQ[zQ++], VQ >= zQ ? PQ.slice(zQ - yQ, (zQ += WQ) - yQ) : LQ(WQ);
          case 218:
            return WQ = rQ.getUint16(zQ), VQ >= (zQ += 2) ? PQ.slice(zQ - yQ, (zQ += WQ) - yQ) : kQ(WQ);
          case 219:
            return WQ = rQ.getUint32(zQ), VQ >= (zQ += 4) ? PQ.slice(zQ - yQ, (zQ += WQ) - yQ) : fQ(WQ);
          case 220:
            return WQ = rQ.getUint16(zQ), zQ += 2, oQ(WQ);
          case 221:
            return WQ = rQ.getUint32(zQ), zQ += 4, oQ(WQ);
          case 222:
            return WQ = rQ.getUint16(zQ), zQ += 2, eQ(WQ);
          case 223:
            return WQ = rQ.getUint32(zQ), zQ += 4, eQ(WQ);
          default:
            if (QQ >= 224) return QQ - 256;
            if (void 0 === QQ) {
              let QQ = new Error("Unexpected end of MessagePack data");
              throw QQ.incomplete = !0, QQ
            }
            throw new Error("Unknown MessagePack token " + QQ)
        }
      }
    }
    const AQ = /^[a-zA-Z_$][a-zA-Z\d_$]*$/;

    function RQ(QQ, WQ) {
      function XQ() {
        if (XQ.count++ > aQ) {
          let XQ = QQ.read = new Function("r", "return function(){return " + (BQ.freezeData ? "Object.freeze" : "") + "({" + QQ.map((QQ => "__proto__" === QQ ? "__proto_:r()" : AQ.test(QQ) ? QQ + ":r()" : "[" + JSON.stringify(QQ) + "]:r()")).join(",") + "})}")(cQ);
          return 0 === QQ.highByte && (QQ.read = EQ(WQ, QQ.read)), XQ()
        }
        let wQ = {};
        for (let WQ = 0, XQ = QQ.length; WQ < XQ; WQ++) {
          let XQ = QQ[WQ];
          "__proto__" === XQ && (XQ = "__proto_"), wQ[XQ] = cQ()
        }
        return BQ.freezeData ? Object.freeze(wQ) : wQ
      }
      return XQ.count = 0, 0 === QQ.highByte ? EQ(WQ, XQ) : XQ
    }
    const EQ = (QQ, WQ) => function() {
      let XQ = qQ[zQ++];
      if (0 === XQ) return WQ();
      let wQ = QQ < 32 ? -(QQ + (XQ << 5)) : QQ + (XQ << 5),
        TQ = FQ[wQ] || CQ()[wQ];
      if (!TQ) throw new Error("Record id is not defined for " + wQ);
      return TQ.read || (TQ.read = RQ(TQ, QQ)), TQ.read()
    };

    function CQ() {
      let QQ = TW((() => (qQ = null, BQ.getStructures())));
      return FQ = BQ._mergeStructures(QQ, FQ)
    }
    var uQ = tQ,
      LQ = tQ,
      kQ = tQ,
      fQ = tQ;
    let SQ = !1;

    function tQ(QQ) {
      let WQ;
      if (QQ < 16 && (WQ = YQ(QQ))) return WQ;
      if (QQ > 64 && wQ) return wQ.decode(qQ.subarray(zQ, zQ += QQ));
      const XQ = zQ + QQ,
        TQ = [];
      for (WQ = ""; zQ < XQ;) {
        const QQ = qQ[zQ++];
        if (0 === (128 & QQ)) TQ.push(QQ);
        else if (192 === (224 & QQ)) {
          const WQ = 63 & qQ[zQ++];
          TQ.push((31 & QQ) << 6 | WQ)
        } else if (224 === (240 & QQ)) {
          const WQ = 63 & qQ[zQ++],
            XQ = 63 & qQ[zQ++];
          TQ.push((31 & QQ) << 12 | WQ << 6 | XQ)
        } else if (240 === (248 & QQ)) {
          let WQ = (7 & QQ) << 18 | (63 & qQ[zQ++]) << 12 | (63 & qQ[zQ++]) << 6 | 63 & qQ[zQ++];
          WQ > 65535 && (WQ -= 65536, TQ.push(WQ >>> 10 & 1023 | 55296), WQ = 56320 | 1023 & WQ), TQ.push(WQ)
        } else TQ.push(QQ);
        TQ.length >= 4096 && (WQ += nQ.apply(String, TQ), TQ.length = 0)
      }
      return TQ.length > 0 && (WQ += nQ.apply(String, TQ)), WQ
    }

    function oQ(QQ) {
      let WQ = new Array(QQ);
      for (let XQ = 0; XQ < QQ; XQ++) WQ[XQ] = cQ();
      return BQ.freezeData ? Object.freeze(WQ) : WQ
    }

    function eQ(QQ) {
      if (BQ.mapsAsObjects) {
        let WQ = {};
        for (let XQ = 0; XQ < QQ; XQ++) {
          let QQ = mQ();
          "__proto__" === QQ && (QQ = "__proto_"), WQ[QQ] = cQ()
        }
        return WQ
      } {
        let WQ = new Map;
        for (let XQ = 0; XQ < QQ; XQ++) WQ.set(cQ(), cQ());
        return WQ
      }
    }
    var nQ = String.fromCharCode;

    function xQ(QQ) {
      let WQ = zQ,
        XQ = new Array(QQ);
      for (let wQ = 0; wQ < QQ; wQ++) {
        const QQ = qQ[zQ++];
        if ((128 & QQ) > 0) return void(zQ = WQ);
        XQ[wQ] = QQ
      }
      return nQ.apply(String, XQ)
    }

    function YQ(QQ) {
      if (QQ < 4) {
        if (QQ < 2) {
          if (0 === QQ) return "";
          {
            let QQ = qQ[zQ++];
            return (128 & QQ) > 1 ? void(zQ -= 1) : nQ(QQ)
          }
        } {
          let WQ = qQ[zQ++],
            XQ = qQ[zQ++];
          if ((128 & WQ) > 0 || (128 & XQ) > 0) return void(zQ -= 2);
          if (QQ < 3) return nQ(WQ, XQ);
          let wQ = qQ[zQ++];
          return (128 & wQ) > 0 ? void(zQ -= 3) : nQ(WQ, XQ, wQ)
        }
      } {
        let WQ = qQ[zQ++],
          XQ = qQ[zQ++],
          wQ = qQ[zQ++],
          TQ = qQ[zQ++];
        if ((128 & WQ) > 0 || (128 & XQ) > 0 || (128 & wQ) > 0 || (128 & TQ) > 0) return void(zQ -= 4);
        if (QQ < 6) {
          if (4 === QQ) return nQ(WQ, XQ, wQ, TQ);
          {
            let QQ = qQ[zQ++];
            return (128 & QQ) > 0 ? void(zQ -= 5) : nQ(WQ, XQ, wQ, TQ, QQ)
          }
        }
        if (QQ < 8) {
          let sQ = qQ[zQ++],
            FQ = qQ[zQ++];
          if ((128 & sQ) > 0 || (128 & FQ) > 0) return void(zQ -= 6);
          if (QQ < 7) return nQ(WQ, XQ, wQ, TQ, sQ, FQ);
          let PQ = qQ[zQ++];
          return (128 & PQ) > 0 ? void(zQ -= 7) : nQ(WQ, XQ, wQ, TQ, sQ, FQ, PQ)
        } {
          let sQ = qQ[zQ++],
            FQ = qQ[zQ++],
            PQ = qQ[zQ++],
            gQ = qQ[zQ++];
          if ((128 & sQ) > 0 || (128 & FQ) > 0 || (128 & PQ) > 0 || (128 & gQ) > 0) return void(zQ -= 8);
          if (QQ < 10) {
            if (8 === QQ) return nQ(WQ, XQ, wQ, TQ, sQ, FQ, PQ, gQ);
            {
              let QQ = qQ[zQ++];
              return (128 & QQ) > 0 ? void(zQ -= 9) : nQ(WQ, XQ, wQ, TQ, sQ, FQ, PQ, gQ, QQ)
            }
          }
          if (QQ < 12) {
            let JQ = qQ[zQ++],
              rQ = qQ[zQ++];
            if ((128 & JQ) > 0 || (128 & rQ) > 0) return void(zQ -= 10);
            if (QQ < 11) return nQ(WQ, XQ, wQ, TQ, sQ, FQ, PQ, gQ, JQ, rQ);
            let IQ = qQ[zQ++];
            return (128 & IQ) > 0 ? void(zQ -= 11) : nQ(WQ, XQ, wQ, TQ, sQ, FQ, PQ, gQ, JQ, rQ, IQ)
          } {
            let JQ = qQ[zQ++],
              rQ = qQ[zQ++],
              IQ = qQ[zQ++],
              jQ = qQ[zQ++];
            if ((128 & JQ) > 0 || (128 & rQ) > 0 || (128 & IQ) > 0 || (128 & jQ) > 0) return void(zQ -= 12);
            if (QQ < 14) {
              if (12 === QQ) return nQ(WQ, XQ, wQ, TQ, sQ, FQ, PQ, gQ, JQ, rQ, IQ, jQ);
              {
                let QQ = qQ[zQ++];
                return (128 & QQ) > 0 ? void(zQ -= 13) : nQ(WQ, XQ, wQ, TQ, sQ, FQ, PQ, gQ, JQ, rQ, IQ, jQ, QQ)
              }
            } {
              let BQ = qQ[zQ++],
                yQ = qQ[zQ++];
              if ((128 & BQ) > 0 || (128 & yQ) > 0) return void(zQ -= 14);
              if (QQ < 15) return nQ(WQ, XQ, wQ, TQ, sQ, FQ, PQ, gQ, JQ, rQ, IQ, jQ, BQ, yQ);
              let VQ = qQ[zQ++];
              return (128 & VQ) > 0 ? void(zQ -= 15) : nQ(WQ, XQ, wQ, TQ, sQ, FQ, PQ, gQ, JQ, rQ, IQ, jQ, BQ, yQ, VQ)
            }
          }
        }
      }
    }

    function NQ() {
      let QQ, WQ = qQ[zQ++];
      if (WQ < 192) QQ = WQ - 160;
      else switch (WQ) {
        case 217:
          QQ = qQ[zQ++];
          break;
        case 218:
          QQ = rQ.getUint16(zQ), zQ += 2;
          break;
        case 219:
          QQ = rQ.getUint32(zQ), zQ += 4;
          break;
        default:
          throw new Error("Expected string")
      }
      return tQ(QQ)
    }

    function ZQ(QQ) {
      return BQ.copyBuffers ? Uint8Array.prototype.slice.call(qQ, zQ, zQ += QQ) : qQ.subarray(zQ, zQ += QQ)
    }

    function OQ(QQ) {
      let WQ = qQ[zQ++];
      if (DQ[WQ]) {
        let XQ;
        return DQ[WQ](qQ.subarray(zQ, XQ = zQ += QQ), (QQ => {
          zQ = QQ;
          try {
            return cQ()
          } finally {
            zQ = XQ
          }
        }))
      }
      throw new Error("Unknown extension type " + WQ)
    }
    var KQ = new Array(4096);

    function mQ() {
      let QQ = qQ[zQ++];
      if (!(QQ >= 160 && QQ < 192)) return zQ--, MQ(cQ());
      if (QQ -= 160, VQ >= zQ) return PQ.slice(zQ - yQ, (zQ += QQ) - yQ);
      if (!(0 == VQ && TQ < 180)) return uQ(QQ);
      let WQ, XQ = 4095 & (QQ << 5 ^ (QQ > 1 ? rQ.getUint16(zQ) : QQ > 0 ? qQ[zQ] : 0)),
        wQ = KQ[XQ],
        sQ = zQ,
        FQ = zQ + QQ - 3,
        gQ = 0;
      if (wQ && wQ.bytes == QQ) {
        for (; sQ < FQ;) {
          if (WQ = rQ.getUint32(sQ), WQ != wQ[gQ++]) {
            sQ = 1879048192;
            break
          }
          sQ += 4
        }
        for (FQ += 3; sQ < FQ;)
          if (WQ = qQ[sQ++], WQ != wQ[gQ++]) {
            sQ = 1879048192;
            break
          } if (sQ === FQ) return zQ = sQ, wQ.string;
        FQ -= 3, sQ = zQ
      }
      for (wQ = [], KQ[XQ] = wQ, wQ.bytes = QQ; sQ < FQ;) WQ = rQ.getUint32(sQ), wQ.push(WQ), sQ += 4;
      for (FQ += 3; sQ < FQ;) WQ = qQ[sQ++], wQ.push(WQ);
      let JQ = QQ < 16 ? YQ(QQ) : xQ(QQ);
      return wQ.string = null != JQ ? JQ : uQ(QQ)
    }

    function MQ(QQ) {
      if ("string" === typeof QQ) return QQ;
      if ("number" === typeof QQ || "boolean" === typeof QQ || "bigint" === typeof QQ) return QQ.toString();
      if (null == QQ) return QQ + "";
      if (BQ.allowArraysInMapKeys && Array.isArray(QQ) && QQ.flat().every((QQ => ["string", "number", "boolean", "bigint"].includes(typeof QQ)))) return QQ.flat().toString();
      throw new Error("Invalid property type for record: " + typeof QQ)
    }
    const QW = (QQ, WQ) => {
      let XQ = cQ().map(MQ),
        wQ = QQ;
      void 0 !== WQ && (QQ = QQ < 32 ? -((WQ << 5) + QQ) : (WQ << 5) + QQ, XQ.highByte = WQ);
      let qQ = FQ[QQ];
      return qQ && (qQ.isShared || HQ) && ((FQ.restoreStructures || (FQ.restoreStructures = []))[QQ] = qQ), FQ[QQ] = XQ, XQ.read = RQ(XQ, wQ), XQ.read()
    };
    DQ[0] = () => {}, DQ[0].noBuffer = !0, DQ[66] = QQ => {
      let WQ = QQ.length,
        XQ = BigInt(128 & QQ[0] ? QQ[0] - 256 : QQ[0]);
      for (let wQ = 1; wQ < WQ; wQ++) XQ <<= BigInt(8), XQ += BigInt(QQ[wQ]);
      return XQ
    };
    let WW = {
      Error: Error,
      TypeError: TypeError,
      ReferenceError: ReferenceError
    };
    DQ[101] = () => {
      let QQ = cQ();
      return (WW[QQ[0]] || Error)(QQ[1], {
        cause: QQ[2]
      })
    }, DQ[105] = QQ => {
      if (!1 === BQ.structuredClone) throw new Error("Structured clone extension is disabled");
      let WQ = rQ.getUint32(zQ - 4);
      JQ || (JQ = new Map);
      let XQ, wQ = qQ[zQ];
      XQ = wQ >= 144 && wQ < 160 || 220 == wQ || 221 == wQ ? [] : {};
      let TQ = {
        target: XQ
      };
      JQ.set(WQ, TQ);
      let sQ = cQ();
      return TQ.used ? Object.assign(XQ, sQ) : (TQ.target = sQ, sQ)
    }, DQ[112] = QQ => {
      if (!1 === BQ.structuredClone) throw new Error("Structured clone extension is disabled");
      let WQ = rQ.getUint32(zQ - 4),
        XQ = JQ.get(WQ);
      return XQ.used = !0, XQ.target
    }, DQ[115] = () => new Set(cQ());
    const XW = ["Int8", "Uint8", "Uint8Clamped", "Int16", "Uint16", "Int32", "Uint32", "Float32", "Float64", "BigInt64", "BigUint64"].map((QQ => QQ + "Array"));
    let wW = "object" === typeof globalThis ? globalThis : window;
    DQ[116] = QQ => {
      let WQ = QQ[0],
        XQ = XW[WQ];
      if (!XQ) {
        if (16 === WQ) {
          let WQ = new ArrayBuffer(QQ.length - 1);
          return new Uint8Array(WQ).set(QQ.subarray(1)), WQ
        }
        throw new Error("Could not find typed array for code " + WQ)
      }
      return new wW[XQ](Uint8Array.prototype.slice.call(QQ, 1).buffer)
    }, DQ[120] = () => {
      let QQ = cQ();
      return new RegExp(QQ[0], QQ[1])
    };
    const qW = [];

    function TW(QQ) {
      dQ && dQ();
      let WQ = TQ,
        XQ = zQ,
        wQ = jQ,
        sQ = yQ,
        DQ = VQ,
        pQ = PQ,
        GQ = IQ,
        UQ = JQ,
        bQ = gQ,
        vQ = new Uint8Array(qQ.slice(0, TQ)),
        aQ = FQ,
        lQ = FQ.slice(0, FQ.length),
        hQ = BQ,
        iQ = HQ,
        cQ = QQ();
      return TQ = WQ, zQ = XQ, jQ = wQ, yQ = sQ, VQ = DQ, PQ = pQ, IQ = GQ, JQ = UQ, gQ = bQ, qQ = vQ, HQ = iQ, (FQ = aQ).splice(0, FQ.length, ...lQ), BQ = hQ, rQ = new DataView(qQ.buffer, qQ.byteOffset, qQ.byteLength), cQ
    }

    function zW() {
      qQ = null, JQ = null, FQ = null
    }
    DQ[98] = QQ => {
      let WQ = (QQ[0] << 24) + (QQ[1] << 16) + (QQ[2] << 8) + QQ[3],
        XQ = zQ;
      return zQ += WQ - QQ.length, gQ = qW, (gQ = [NQ(), NQ()]).position0 = 0, gQ.position1 = 0, gQ.postBundlePosition = zQ, zQ = XQ, cQ()
    }, DQ[255] = QQ => 4 == QQ.length ? new Date(1e3 * (16777216 * QQ[0] + (QQ[1] << 16) + (QQ[2] << 8) + QQ[3])) : 8 == QQ.length ? new Date(((QQ[0] << 22) + (QQ[1] << 14) + (QQ[2] << 6) + (QQ[3] >> 2)) / 1e6 + 1e3 * (4294967296 * (3 & QQ[3]) + 16777216 * QQ[4] + (QQ[5] << 16) + (QQ[6] << 8) + QQ[7])) : 12 == QQ.length ? new Date(((QQ[0] << 24) + (QQ[1] << 16) + (QQ[2] << 8) + QQ[3]) / 1e6 + 1e3 * ((128 & QQ[4] ? -281474976710656 : 0) + 1099511627776 * QQ[6] + 4294967296 * QQ[7] + 16777216 * QQ[8] + (QQ[9] << 16) + (QQ[10] << 8) + QQ[11])) : new Date("invalid");
    const sW = new Array(147);
    for (let qX = 0; qX < 256; qX++) sW[qX] = +("1e" + Math.floor(45.15 - .30103 * qX));
    const FW = lQ;
    var PW = new lQ({
      useRecords: !1
    });
    const gW = PW.unpack,
      JW = PW.unpackMultiple,
      rW = PW.unpack,
      IW = {
        NEVER: 0,
        ALWAYS: 1,
        DECIMAL_ROUND: 3,
        DECIMAL_FIT: 4
      };
    let jW, BW, yW, VW = new Float32Array(1),
      DW = new Uint8Array(VW.buffer, 0, 4);

    function pW(QQ) {
      VW[0] = QQ;
      let WQ = sW[(127 & DW[3]) << 1 | DW[2] >> 7];
      return (WQ * QQ + (QQ > 0 ? .5 : -.5) | 0) / WQ
    }
    try {
      jW = new TextEncoder
    } catch (wX) {}
    const GW = "undefined" !== typeof Buffer,
      UW = GW ? function(QQ) {
        return Buffer.allocUnsafeSlow(QQ)
      } : Uint8Array,
      bW = GW ? Buffer : Uint8Array,
      vW = GW ? 4294967296 : 2144337920;
    let dW, HW, aW, lW, hW, iW = 0,
      cW = null;
    const AW = /[\u0080-\uFFFF]/,
      RW = Symbol("record-id");
    class EW extends lQ {
      constructor(QQ) {
        let WQ, XQ, wQ, qQ;
        super(QQ), this.offset = 0;
        let TQ = bW.prototype.utf8Write ? function(QQ, WQ) {
            return dW.utf8Write(QQ, WQ, dW.byteLength - WQ)
          } : !(!jW || !jW.encodeInto) && function(QQ, WQ) {
            return jW.encodeInto(QQ, dW.subarray(WQ)).written
          },
          zQ = this;
        QQ || (QQ = {});
        let sQ = QQ && QQ.sequential,
          FQ = QQ.structures || QQ.saveStructures,
          PQ = QQ.maxSharedStructures;
        if (null == PQ && (PQ = FQ ? 32 : 0), PQ > 8160) throw new Error("Maximum maxSharedStructure is 8160");
        QQ.structuredClone && void 0 == QQ.moreTypes && (this.moreTypes = !0);
        let gQ = QQ.maxOwnStructures;
        null == gQ && (gQ = FQ ? 32 : 64), this.structures || 0 == QQ.useRecords || (this.structures = []);
        let JQ = PQ > 32 || gQ + PQ > 64,
          rQ = PQ + 64,
          IQ = PQ + gQ + 64;
        if (IQ > 8256) throw new Error("Maximum maxSharedStructure + maxOwnStructure is 8192");
        let jQ = [],
          BQ = 0,
          yQ = 0;
        this.pack = this.encode = function(QQ, TQ) {
          if (dW || (dW = new UW(8192), aW = dW.dataView || (dW.dataView = new DataView(dW.buffer, 0, 8192)), iW = 0), lW = dW.length - 10, lW - iW < 2048 ? (dW = new UW(dW.length), aW = dW.dataView || (dW.dataView = new DataView(dW.buffer, 0, dW.length)), lW = dW.length - 10, iW = 0) : iW = iW + 7 & 2147483640, WQ = iW, TQ & mW && (iW += 255 & TQ), qQ = zQ.structuredClone ? new Map : null, zQ.bundleStrings && "string" !== typeof QQ ? (cW = [], cW.size = 1 / 0) : cW = null, wQ = zQ.structures, wQ) {
            wQ.uninitialized && (wQ = zQ._mergeStructures(zQ.getStructures()));
            let QQ = wQ.sharedLength || 0;
            if (QQ > PQ) throw new Error("Shared structures is larger than maximum shared structures, try increasing maxSharedStructures to " + wQ.sharedLength);
            if (!wQ.transitions) {
              wQ.transitions = Object.create(null);
              for (let WQ = 0; WQ < QQ; WQ++) {
                let QQ = wQ[WQ];
                if (!QQ) continue;
                let XQ, qQ = wQ.transitions;
                for (let WQ = 0, wQ = QQ.length; WQ < wQ; WQ++) {
                  let wQ = QQ[WQ];
                  XQ = qQ[wQ], XQ || (XQ = qQ[wQ] = Object.create(null)), qQ = XQ
                }
                qQ[RW] = WQ + 64
              }
              this.lastNamedStructuresLength = QQ
            }
            sQ || (wQ.nextId = QQ + 64)
          }
          let FQ;
          XQ && (XQ = !1);
          try {
            zQ.randomAccessStructure && QQ && QQ.constructor && QQ.constructor === Object ? lQ(QQ) : pQ(QQ);
            let XQ = cW;
            if (cW && kW(WQ, pQ, 0), qQ && qQ.idsToInsert) {
              let QQ = qQ.idsToInsert.sort(((QQ, WQ) => QQ.offset > WQ.offset ? 1 : -1)),
                wQ = QQ.length,
                TQ = -1;
              for (; XQ && wQ > 0;) {
                let qQ = QQ[--wQ].offset + WQ;
                qQ < XQ.stringsPosition + WQ && -1 === TQ && (TQ = 0), qQ > XQ.position + WQ ? TQ >= 0 && (TQ += 6) : (TQ >= 0 && (aW.setUint32(XQ.position + WQ, aW.getUint32(XQ.position + WQ) + TQ), TQ = -1), XQ = XQ.previous, wQ++)
              }
              TQ >= 0 && XQ && aW.setUint32(XQ.position + WQ, aW.getUint32(XQ.position + WQ) + TQ), iW += 6 * QQ.length, iW > lW && dQ(iW), zQ.offset = iW;
              let sQ = function(QQ, WQ) {
                let XQ, wQ = 6 * WQ.length,
                  qQ = QQ.length - wQ;
                for (; XQ = WQ.pop();) {
                  let WQ = XQ.offset,
                    TQ = XQ.id;
                  QQ.copyWithin(WQ + wQ, WQ, qQ), wQ -= 6;
                  let zQ = WQ + wQ;
                  QQ[zQ++] = 214, QQ[zQ++] = 105, QQ[zQ++] = TQ >> 24, QQ[zQ++] = TQ >> 16 & 255, QQ[zQ++] = TQ >> 8 & 255, QQ[zQ++] = 255 & TQ, qQ = WQ
                }
                return QQ
              }(dW.subarray(WQ, iW), QQ);
              return qQ = null, sQ
            }
            return zQ.offset = iW, TQ & OW ? (dW.start = WQ, dW.end = iW, dW) : dW.subarray(WQ, iW)
          } catch (wX) {
            throw FQ = wX, wX
          } finally {
            if (wQ && (VQ(), XQ && zQ.saveStructures)) {
              let XQ = wQ.sharedLength || 0,
                qQ = dW.subarray(WQ, iW),
                sQ = SW(wQ, zQ);
              if (!FQ) return !1 === zQ.saveStructures(sQ, sQ.isCompatible) ? zQ.pack(QQ, TQ) : (zQ.lastNamedStructuresLength = XQ, dW.length > 1073741824 && (dW = null), qQ)
            }
            dW.length > 1073741824 && (dW = null), TQ & KW && (iW = WQ)
          }
        };
        const VQ = () => {
            yQ < 10 && yQ++;
            let QQ = wQ.sharedLength || 0;
            if (wQ.length > QQ && !sQ && (wQ.length = QQ), BQ > 1e4) wQ.transitions = null, yQ = 0, BQ = 0, jQ.length > 0 && (jQ = []);
            else if (jQ.length > 0 && !sQ) {
              for (let QQ = 0, WQ = jQ.length; QQ < WQ; QQ++) jQ[QQ][RW] = 0;
              jQ = []
            }
          },
          DQ = QQ => {
            var WQ = QQ.length;
            WQ < 16 ? dW[iW++] = 144 | WQ : WQ < 65536 ? (dW[iW++] = 220, dW[iW++] = WQ >> 8, dW[iW++] = 255 & WQ) : (dW[iW++] = 221, aW.setUint32(iW, WQ), iW += 4);
            for (let XQ = 0; XQ < WQ; XQ++) pQ(QQ[XQ])
          },
          pQ = QQ => {
            iW > lW && (dW = dQ(iW));
            var XQ, wQ = typeof QQ;
            if ("string" === wQ) {
              let wQ, qQ = QQ.length;
              if (cW && qQ >= 4 && qQ < 4096) {
                if ((cW.size += qQ) > 21760) {
                  let QQ, XQ, wQ = (cW[0] ? 3 * cW[0].length + cW[1].length : 0) + 10;
                  iW + wQ > lW && (dW = dQ(iW + wQ)), cW.position ? (XQ = cW, dW[iW] = 200, iW += 3, dW[iW++] = 98, QQ = iW - WQ, iW += 4, kW(WQ, pQ, 0), aW.setUint16(QQ + WQ - 3, iW - WQ - QQ)) : (dW[iW++] = 214, dW[iW++] = 98, QQ = iW - WQ, iW += 4), cW = ["", ""], cW.previous = XQ, cW.size = 0, cW.position = QQ
                }
                let XQ = AW.test(QQ);
                return cW[XQ ? 0 : 1] += QQ, dW[iW++] = 193, void pQ(XQ ? -qQ : qQ)
              }
              wQ = qQ < 32 ? 1 : qQ < 256 ? 2 : qQ < 65536 ? 3 : 5;
              let zQ = 3 * qQ;
              if (iW + zQ > lW && (dW = dQ(iW + zQ)), qQ < 64 || !TQ) {
                let WQ, TQ, zQ, sQ = iW + wQ;
                for (WQ = 0; WQ < qQ; WQ++) TQ = QQ.charCodeAt(WQ), TQ < 128 ? dW[sQ++] = TQ : TQ < 2048 ? (dW[sQ++] = TQ >> 6 | 192, dW[sQ++] = 63 & TQ | 128) : 55296 === (64512 & TQ) && 56320 === (64512 & (zQ = QQ.charCodeAt(WQ + 1))) ? (TQ = 65536 + ((1023 & TQ) << 10) + (1023 & zQ), WQ++, dW[sQ++] = TQ >> 18 | 240, dW[sQ++] = TQ >> 12 & 63 | 128, dW[sQ++] = TQ >> 6 & 63 | 128, dW[sQ++] = 63 & TQ | 128) : (dW[sQ++] = TQ >> 12 | 224, dW[sQ++] = TQ >> 6 & 63 | 128, dW[sQ++] = 63 & TQ | 128);
                XQ = sQ - iW - wQ
              } else XQ = TQ(QQ, iW + wQ);
              XQ < 32 ? dW[iW++] = 160 | XQ : XQ < 256 ? (wQ < 2 && dW.copyWithin(iW + 2, iW + 1, iW + 1 + XQ), dW[iW++] = 217, dW[iW++] = XQ) : XQ < 65536 ? (wQ < 3 && dW.copyWithin(iW + 3, iW + 2, iW + 2 + XQ), dW[iW++] = 218, dW[iW++] = XQ >> 8, dW[iW++] = 255 & XQ) : (wQ < 5 && dW.copyWithin(iW + 5, iW + 3, iW + 3 + XQ), dW[iW++] = 219, aW.setUint32(iW, XQ), iW += 4), iW += XQ
            } else if ("number" === wQ)
              if (QQ >>> 0 === QQ) QQ < 32 || QQ < 128 && !1 === this.useRecords || QQ < 64 && !this.randomAccessStructure ? dW[iW++] = QQ : QQ < 256 ? (dW[iW++] = 204, dW[iW++] = QQ) : QQ < 65536 ? (dW[iW++] = 205, dW[iW++] = QQ >> 8, dW[iW++] = 255 & QQ) : (dW[iW++] = 206, aW.setUint32(iW, QQ), iW += 4);
              else if ((QQ | 0) === QQ) QQ >= -32 ? dW[iW++] = 256 + QQ : QQ >= -128 ? (dW[iW++] = 208, dW[iW++] = QQ + 256) : QQ >= -32768 ? (dW[iW++] = 209, aW.setInt16(iW, QQ), iW += 2) : (dW[iW++] = 210, aW.setInt32(iW, QQ), iW += 4);
            else {
              let WQ;
              if ((WQ = this.useFloat32) > 0 && QQ < 4294967296 && QQ >= -2147483648) {
                let XQ;
                if (dW[iW++] = 202, aW.setFloat32(iW, QQ), WQ < 4 || ((XQ = QQ * sW[(127 & dW[iW]) << 1 | dW[iW + 1] >> 7]) | 0) === XQ) return void(iW += 4);
                iW--
              }
              dW[iW++] = 203, aW.setFloat64(iW, QQ), iW += 8
            } else if ("object" === wQ || "function" === wQ)
              if (QQ) {
                if (qQ) {
                  let XQ = qQ.get(QQ);
                  if (XQ) {
                    if (!XQ.id) {
                      let QQ = qQ.idsToInsert || (qQ.idsToInsert = []);
                      XQ.id = QQ.push(XQ)
                    }
                    return dW[iW++] = 214, dW[iW++] = 112, aW.setUint32(iW, XQ.id), void(iW += 4)
                  }
                  qQ.set(QQ, {
                    offset: iW - WQ
                  })
                }
                let TQ = QQ.constructor;
                if (TQ === Object) vQ(QQ);
                else if (TQ === Array) DQ(QQ);
                else if (TQ === Map)
                  if (this.mapAsEmptyObject) dW[iW++] = 128;
                  else {
                    (XQ = QQ.size) < 16 ? dW[iW++] = 128 | XQ : XQ < 65536 ? (dW[iW++] = 222, dW[iW++] = XQ >> 8, dW[iW++] = 255 & XQ) : (dW[iW++] = 223, aW.setUint32(iW, XQ), iW += 4);
                    for (let [WQ, XQ] of QQ) pQ(WQ), pQ(XQ)
                  }
                else {
                  for (let WQ = 0, XQ = BW.length; WQ < XQ; WQ++) {
                    if (QQ instanceof yW[WQ]) {
                      let XQ = BW[WQ];
                      if (XQ.write) {
                        XQ.type && (dW[iW++] = 212, dW[iW++] = XQ.type, dW[iW++] = 0);
                        let WQ = XQ.write.call(this, QQ);
                        return void(WQ === QQ ? Array.isArray(QQ) ? DQ(QQ) : vQ(QQ) : pQ(WQ))
                      }
                      let wQ, qQ = dW,
                        TQ = aW,
                        zQ = iW;
                      dW = null;
                      try {
                        wQ = XQ.pack.call(this, QQ, (QQ => (dW = qQ, qQ = null, iW += QQ, iW > lW && dQ(iW), {
                          target: dW,
                          targetView: aW,
                          position: iW - QQ
                        })), pQ)
                      } finally {
                        qQ && (dW = qQ, aW = TQ, iW = zQ, lW = dW.length - 10)
                      }
                      return void(wQ && (wQ.length + iW > lW && dQ(wQ.length + iW), iW = LW(wQ, dW, iW, XQ.type)))
                    }
                  }
                  if (Array.isArray(QQ)) DQ(QQ);
                  else {
                    if (QQ.toJSON) {
                      const WQ = QQ.toJSON();
                      if (WQ !== QQ) return pQ(WQ)
                    }
                    if ("function" === wQ) return pQ(this.writeFunction && this.writeFunction(QQ));
                    vQ(QQ)
                  }
                }
              } else dW[iW++] = 192;
            else if ("boolean" === wQ) dW[iW++] = QQ ? 195 : 194;
            else if ("bigint" === wQ) {
              if (QQ < BigInt(1) << BigInt(63) && QQ >= -(BigInt(1) << BigInt(63))) dW[iW++] = 211, aW.setBigInt64(iW, QQ);
              else if (QQ < BigInt(1) << BigInt(64) && QQ > 0) dW[iW++] = 207, aW.setBigUint64(iW, QQ);
              else {
                if (!this.largeBigIntToFloat) {
                  if (this.largeBigIntToString) return pQ(QQ.toString());
                  if (this.useBigIntExtension && QQ < BigInt(2) ** BigInt(1023) && QQ > -(BigInt(2) ** BigInt(1023))) {
                    dW[iW++] = 199, iW++, dW[iW++] = 66;
                    let WQ, XQ = [];
                    do {
                      let wQ = QQ & BigInt(255);
                      WQ = (wQ & BigInt(128)) === (QQ < BigInt(0) ? BigInt(128) : BigInt(0)), XQ.push(wQ), QQ >>= BigInt(8)
                    } while (QQ !== BigInt(0) && QQ !== BigInt(-1) || !WQ);
                    dW[iW - 2] = XQ.length;
                    for (let QQ = XQ.length; QQ > 0;) dW[iW++] = Number(XQ[--QQ]);
                    return
                  }
                  throw new RangeError(QQ + " was too large to fit in MessagePack 64-bit integer format, use useBigIntExtension, or set largeBigIntToFloat to convert to float-64, or set largeBigIntToString to convert to string")
                }
                dW[iW++] = 203, aW.setFloat64(iW, Number(QQ))
              }
              iW += 8
            } else {
              if ("undefined" !== wQ) throw new Error("Unknown type: " + wQ);
              this.encodeUndefinedAsNil ? dW[iW++] = 192 : (dW[iW++] = 212, dW[iW++] = 0, dW[iW++] = 0)
            }
          },
          GQ = this.variableMapSize || this.coercibleKeyAsNumber || this.skipValues ? QQ => {
            let WQ;
            if (this.skipValues) {
              WQ = [];
              for (let XQ in QQ) "function" === typeof QQ.hasOwnProperty && !QQ.hasOwnProperty(XQ) || this.skipValues.includes(QQ[XQ]) || WQ.push(XQ)
            } else WQ = Object.keys(QQ);
            let XQ, wQ = WQ.length;
            if (wQ < 16 ? dW[iW++] = 128 | wQ : wQ < 65536 ? (dW[iW++] = 222, dW[iW++] = wQ >> 8, dW[iW++] = 255 & wQ) : (dW[iW++] = 223, aW.setUint32(iW, wQ), iW += 4), this.coercibleKeyAsNumber)
              for (let qQ = 0; qQ < wQ; qQ++) {
                XQ = WQ[qQ];
                let wQ = Number(XQ);
                pQ(isNaN(wQ) ? XQ : wQ), pQ(QQ[XQ])
              } else
                for (let qQ = 0; qQ < wQ; qQ++) pQ(XQ = WQ[qQ]), pQ(QQ[XQ])
          } : QQ => {
            dW[iW++] = 222;
            let XQ = iW - WQ;
            iW += 2;
            let wQ = 0;
            for (let WQ in QQ)("function" !== typeof QQ.hasOwnProperty || QQ.hasOwnProperty(WQ)) && (pQ(WQ), pQ(QQ[WQ]), wQ++);
            if (wQ > 65535) throw new Error('Object is too large to serialize with fast 16-bit map size, use the "variableMapSize" option to serialize this object');
            dW[XQ++ + WQ] = wQ >> 8, dW[XQ + WQ] = 255 & wQ
          },
          UQ = !1 === this.useRecords ? GQ : QQ.progressiveRecords && !JQ ? QQ => {
            let XQ, qQ, TQ = wQ.transitions || (wQ.transitions = Object.create(null)),
              zQ = iW++ - WQ;
            for (let sQ in QQ)
              if ("function" !== typeof QQ.hasOwnProperty || QQ.hasOwnProperty(sQ)) {
                if (XQ = TQ[sQ], XQ) TQ = XQ;
                else {
                  let FQ = Object.keys(QQ),
                    PQ = TQ;
                  TQ = wQ.transitions;
                  let gQ = 0;
                  for (let QQ = 0, WQ = FQ.length; QQ < WQ; QQ++) {
                    let WQ = FQ[QQ];
                    XQ = TQ[WQ], XQ || (XQ = TQ[WQ] = Object.create(null), gQ++), TQ = XQ
                  }
                  zQ + WQ + 1 == iW ? (iW--, HQ(TQ, FQ, gQ)) : aQ(TQ, FQ, zQ, gQ), qQ = !0, TQ = PQ[sQ]
                }
                pQ(QQ[sQ])
              } if (!qQ) {
              let XQ = TQ[RW];
              XQ ? dW[zQ + WQ] = XQ : aQ(TQ, Object.keys(QQ), zQ, 0)
            }
          } : QQ => {
            let WQ, XQ = wQ.transitions || (wQ.transitions = Object.create(null)),
              qQ = 0;
            for (let wQ in QQ)("function" !== typeof QQ.hasOwnProperty || QQ.hasOwnProperty(wQ)) && (WQ = XQ[wQ], WQ || (WQ = XQ[wQ] = Object.create(null), qQ++), XQ = WQ);
            let TQ = XQ[RW];
            TQ ? TQ >= 96 && JQ ? (dW[iW++] = 96 + (31 & (TQ -= 96)), dW[iW++] = TQ >> 5) : dW[iW++] = TQ : HQ(XQ, XQ.__keys__ || Object.keys(QQ), qQ);
            for (let wQ in QQ)("function" !== typeof QQ.hasOwnProperty || QQ.hasOwnProperty(wQ)) && pQ(QQ[wQ])
          },
          bQ = "function" == typeof this.useRecords && this.useRecords,
          vQ = bQ ? QQ => {
            bQ(QQ) ? UQ(QQ) : GQ(QQ)
          } : UQ,
          dQ = QQ => {
            let XQ;
            if (QQ > 16777216) {
              if (QQ - WQ > vW) throw new Error("Packed buffer would be larger than maximum buffer size");
              XQ = Math.min(vW, 4096 * Math.round(Math.max((QQ - WQ) * (QQ > 67108864 ? 1.25 : 2), 4194304) / 4096))
            } else XQ = 1 + (Math.max(QQ - WQ << 2, dW.length - 1) >> 12) << 12;
            let wQ = new UW(XQ);
            return aW = wQ.dataView || (wQ.dataView = new DataView(wQ.buffer, 0, XQ)), QQ = Math.min(QQ, dW.length), dW.copy ? dW.copy(wQ, 0, WQ, QQ) : wQ.set(dW.slice(WQ, QQ)), iW -= WQ, WQ = 0, lW = wQ.length - 10, dW = wQ
          },
          HQ = (QQ, WQ, qQ) => {
            let TQ = wQ.nextId;
            TQ || (TQ = 64), TQ < rQ && this.shouldShareStructure && !this.shouldShareStructure(WQ) ? (TQ = wQ.nextOwnId, TQ < IQ || (TQ = rQ), wQ.nextOwnId = TQ + 1) : (TQ >= IQ && (TQ = rQ), wQ.nextId = TQ + 1);
            let zQ = WQ.highByte = TQ >= 96 && JQ ? TQ - 96 >> 5 : -1;
            QQ[RW] = TQ, QQ.__keys__ = WQ, wQ[TQ - 64] = WQ, TQ < rQ ? (WQ.isShared = !0, wQ.sharedLength = TQ - 63, XQ = !0, zQ >= 0 ? (dW[iW++] = 96 + (31 & TQ), dW[iW++] = zQ) : dW[iW++] = TQ) : (zQ >= 0 ? (dW[iW++] = 213, dW[iW++] = 114, dW[iW++] = 96 + (31 & TQ), dW[iW++] = zQ) : (dW[iW++] = 212, dW[iW++] = 114, dW[iW++] = TQ), qQ && (BQ += yQ * qQ), jQ.length >= gQ && (jQ.shift()[RW] = 0), jQ.push(QQ), pQ(WQ))
          },
          aQ = (QQ, XQ, wQ, qQ) => {
            let TQ = dW,
              zQ = iW,
              sQ = lW,
              FQ = WQ;
            dW = HW, iW = 0, WQ = 0, dW || (HW = dW = new UW(8192)), lW = dW.length - 10, HQ(QQ, XQ, qQ), HW = dW;
            let PQ = iW;
            if (dW = TQ, iW = zQ, lW = sQ, WQ = FQ, PQ > 1) {
              let QQ = iW + PQ - 1;
              QQ > lW && dQ(QQ);
              let XQ = wQ + WQ;
              dW.copyWithin(XQ + PQ, XQ + 1, iW), dW.set(HW.slice(0, PQ), XQ), iW = QQ
            } else dW[wQ + WQ] = HW[0]
          },
          lQ = QQ => {
            let qQ = hW(QQ, dW, WQ, iW, wQ, dQ, ((QQ, WQ, wQ) => {
              if (wQ) return XQ = !0;
              iW = WQ;
              let qQ = dW;
              return pQ(QQ), VQ(), qQ !== dW ? {
                position: iW,
                targetView: aW,
                target: dW
              } : iW
            }), this);
            if (0 === qQ) return vQ(QQ);
            iW = qQ
          }
      }
      useBuffer(QQ) {
        dW = QQ, aW = dW.dataView || (dW.dataView = new DataView(dW.buffer, dW.byteOffset, dW.byteLength)), iW = 0
      }
      set position(QQ) {
        iW = QQ
      }
      get position() {
        return iW
      }
      set buffer(QQ) {
        dW = QQ
      }
      get buffer() {
        return dW
      }
      clearSharedData() {
        this.structures && (this.structures = []), this.typedStructs && (this.typedStructs = [])
      }
    }

    function CW(QQ, WQ, XQ, wQ) {
      let qQ = QQ.byteLength;
      if (qQ + 1 < 256) {
        var {
          target: TQ,
          position: zQ
        } = XQ(4 + qQ);
        TQ[zQ++] = 199, TQ[zQ++] = qQ + 1
      } else if (qQ + 1 < 65536) {
        var {
          target: TQ,
          position: zQ
        } = XQ(5 + qQ);
        TQ[zQ++] = 200, TQ[zQ++] = qQ + 1 >> 8, TQ[zQ++] = qQ + 1 & 255
      } else {
        var {
          target: TQ,
          position: zQ,
          targetView: sQ
        } = XQ(7 + qQ);
        TQ[zQ++] = 201, sQ.setUint32(zQ, qQ + 1), zQ += 4
      }
      TQ[zQ++] = 116, TQ[zQ++] = WQ, QQ.buffer || (QQ = new Uint8Array(QQ)), TQ.set(new Uint8Array(QQ.buffer, QQ.byteOffset, QQ.byteLength), zQ)
    }

    function uW(QQ, WQ) {
      let XQ = QQ.byteLength;
      var wQ, qQ;
      if (XQ < 256) {
        var {
          target: wQ,
          position: qQ
        } = WQ(XQ + 2);
        wQ[qQ++] = 196, wQ[qQ++] = XQ
      } else if (XQ < 65536) {
        var {
          target: wQ,
          position: qQ
        } = WQ(XQ + 3);
        wQ[qQ++] = 197, wQ[qQ++] = XQ >> 8, wQ[qQ++] = 255 & XQ
      } else {
        var {
          target: wQ,
          position: qQ,
          targetView: TQ
        } = WQ(XQ + 5);
        wQ[qQ++] = 198, TQ.setUint32(qQ, XQ), qQ += 4
      }
      wQ.set(QQ, qQ)
    }

    function LW(QQ, WQ, XQ, wQ) {
      let qQ = QQ.length;
      switch (qQ) {
        case 1:
          WQ[XQ++] = 212;
          break;
        case 2:
          WQ[XQ++] = 213;
          break;
        case 4:
          WQ[XQ++] = 214;
          break;
        case 8:
          WQ[XQ++] = 215;
          break;
        case 16:
          WQ[XQ++] = 216;
          break;
        default:
          qQ < 256 ? (WQ[XQ++] = 199, WQ[XQ++] = qQ) : qQ < 65536 ? (WQ[XQ++] = 200, WQ[XQ++] = qQ >> 8, WQ[XQ++] = 255 & qQ) : (WQ[XQ++] = 201, WQ[XQ++] = qQ >> 24, WQ[XQ++] = qQ >> 16 & 255, WQ[XQ++] = qQ >> 8 & 255, WQ[XQ++] = 255 & qQ)
      }
      return WQ[XQ++] = wQ, WQ.set(QQ, XQ), XQ += qQ
    }

    function kW(QQ, WQ, XQ) {
      if (cW.length > 0) {
        aW.setUint32(cW.position + QQ, iW + XQ - cW.position - QQ), cW.stringsPosition = iW - QQ;
        let wQ = cW;
        cW = null, WQ(wQ[0]), WQ(wQ[1])
      }
    }

    function fW(QQ) {
      if (QQ.Class) {
        if (!QQ.pack && !QQ.write) throw new Error("Extension has no pack or write function");
        if (QQ.pack && !QQ.type) throw new Error("Extension has no type (numeric code to identify the extension)");
        yW.unshift(QQ.Class), BW.unshift(QQ)
      }! function(QQ) {
        QQ.unpack ? DQ[QQ.type] = QQ.unpack : DQ[QQ.type] = QQ
      }(QQ)
    }

    function SW(QQ, WQ) {
      return QQ.isCompatible = QQ => {
        let XQ = !QQ || (WQ.lastNamedStructuresLength || 0) === QQ.length;
        return XQ || WQ._mergeStructures(QQ), XQ
      }, QQ
    }
    yW = [Date, Set, Error, RegExp, ArrayBuffer, Object.getPrototypeOf(Uint8Array.prototype).constructor, GQ], BW = [{
      pack(QQ, WQ, XQ) {
        let wQ = QQ.getTime() / 1e3;
        if ((this.useTimestamp32 || 0 === QQ.getMilliseconds()) && wQ >= 0 && wQ < 4294967296) {
          let {
            target: QQ,
            targetView: XQ,
            position: qQ
          } = WQ(6);
          QQ[qQ++] = 214, QQ[qQ++] = 255, XQ.setUint32(qQ, wQ)
        } else if (wQ > 0 && wQ < 4294967296) {
          let {
            target: XQ,
            targetView: qQ,
            position: TQ
          } = WQ(10);
          XQ[TQ++] = 215, XQ[TQ++] = 255, qQ.setUint32(TQ, 4e6 * QQ.getMilliseconds() + (wQ / 1e3 / 4294967296 | 0)), qQ.setUint32(TQ + 4, wQ)
        } else if (isNaN(wQ)) {
          if (this.onInvalidDate) return WQ(0), XQ(this.onInvalidDate());
          let {
            target: QQ,
            targetView: wQ,
            position: qQ
          } = WQ(3);
          QQ[qQ++] = 212, QQ[qQ++] = 255, QQ[qQ++] = 255
        } else {
          let {
            target: XQ,
            targetView: qQ,
            position: TQ
          } = WQ(15);
          XQ[TQ++] = 199, XQ[TQ++] = 12, XQ[TQ++] = 255, qQ.setUint32(TQ, 1e6 * QQ.getMilliseconds()), qQ.setBigInt64(TQ + 4, BigInt(Math.floor(wQ)))
        }
      }
    }, {
      pack(QQ, WQ, XQ) {
        if (this.setAsEmptyObject) return WQ(0), XQ({});
        let wQ = Array.from(QQ),
          {
            target: qQ,
            position: TQ
          } = WQ(this.moreTypes ? 3 : 0);
        this.moreTypes && (qQ[TQ++] = 212, qQ[TQ++] = 115, qQ[TQ++] = 0), XQ(wQ)
      }
    }, {
      pack(QQ, WQ, XQ) {
        let {
          target: wQ,
          position: qQ
        } = WQ(this.moreTypes ? 3 : 0);
        this.moreTypes && (wQ[qQ++] = 212, wQ[qQ++] = 101, wQ[qQ++] = 0), XQ([QQ.name, QQ.message, QQ.cause])
      }
    }, {
      pack(QQ, WQ, XQ) {
        let {
          target: wQ,
          position: qQ
        } = WQ(this.moreTypes ? 3 : 0);
        this.moreTypes && (wQ[qQ++] = 212, wQ[qQ++] = 120, wQ[qQ++] = 0), XQ([QQ.source, QQ.flags])
      }
    }, {
      pack(QQ, WQ) {
        this.moreTypes ? CW(QQ, 16, WQ) : uW(GW ? Buffer.from(QQ) : new Uint8Array(QQ), WQ)
      }
    }, {
      pack(QQ, WQ) {
        let XQ = QQ.constructor;
        XQ !== bW && this.moreTypes ? CW(QQ, XW.indexOf(XQ.name), WQ) : uW(QQ, WQ)
      }
    }, {
      pack(QQ, WQ) {
        let {
          target: XQ,
          position: wQ
        } = WQ(1);
        XQ[wQ] = 193
      }
    }];
    let tW = new EW({
      useRecords: !1
    });
    const oW = tW.pack,
      eW = tW.pack,
      nW = EW,
      {
        NEVER: xW,
        ALWAYS: YW,
        DECIMAL_ROUND: NW,
        DECIMAL_FIT: ZW
      } = IW,
      OW = 512,
      KW = 1024,
      mW = 2048;
    const MW = function(QQ) {
        let WQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        if (!QQ || "object" !== typeof QQ) throw new Error("first argument must be an Iterable, Async Iterable, Iterator, Async Iterator, or a promise");
        const XQ = new lQ(WQ);
        let wQ;
        const qQ = QQ => {
          let WQ;
          wQ && (QQ = Buffer.concat([wQ, QQ]), wQ = void 0);
          try {
            WQ = XQ.unpackMultiple(QQ)
          } catch (qQ) {
            if (!qQ.incomplete) throw qQ;
            wQ = QQ.slice(qQ.lastPosition), WQ = qQ.values
          }
          return WQ
        };
        return "function" === typeof QQ[Symbol.iterator] ? function*() {
          for (const WQ of QQ) yield* qQ(WQ)
        }() : "function" === typeof QQ[Symbol.asyncIterator] ? async function*() {
          for await (const WQ of QQ) yield* qQ(WQ)
        }(): void 0
      },
      QX = function(QQ) {
        let WQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        if (QQ && "object" === typeof QQ) {
          if ("function" === typeof QQ[Symbol.iterator]) return function*(QQ, WQ) {
            const XQ = new EW(WQ);
            for (const wQ of QQ) yield XQ.pack(wQ)
          }(QQ, WQ);
          if ("function" === typeof QQ.then || "function" === typeof QQ[Symbol.asyncIterator]) return async function*(QQ, WQ) {
            const XQ = new EW(WQ);
            for await (const wQ of QQ) yield XQ.pack(wQ)
          }(QQ, WQ);
          throw new Error("first argument must be an Iterable, Async Iterable, Iterator, Async Iterator, or a Promise")
        }
        throw new Error("first argument must be an Iterable, Async Iterable, or a Promise for an Async Iterable")
      },
      WX = !1,
      XX = !0
  },
  9499: (QQ, WQ, XQ) => {
    XQ.r(WQ), XQ.d(WQ, {
      $changes: () => BQ,
      $childType: () => yQ,
      $decoder: () => gQ,
      $deleteByIndex: () => IQ,
      $encoder: () => PQ,
      $filter: () => JQ,
      $getByIndex: () => rQ,
      $numFields: () => aQ,
      $refId: () => sQ,
      $track: () => FQ,
      $values: () => UQ,
      ArraySchema: () => Xw,
      Callbacks: () => wq,
      ChangeTree: () => iX,
      CollectionSchema: () => Tw,
      Decoder: () => Zw,
      Encoder: () => nw,
      FieldBuilder: () => Fw,
      MapSchema: () => qw,
      Metadata: () => NW,
      OPERATION: () => qQ,
      Reflection: () => Mw,
      ReflectionField: () => Kw,
      ReflectionType: () => mw,
      Root: () => Aw,
      Schema: () => hw,
      SetSchema: () => zw,
      StateCallbackStrategy: () => Xq,
      StateView: () => Lw,
      StreamSchema: () => sw,
      TypeContext: () => SW,
      createPool: () => Tq,
      decode: () => pW,
      decodeKeyValueOperation: () => OX,
      decodeSchemaOperation: () => ZX,
      defineCustomTypes: () => vW,
      defineTypes: () => Hw,
      deprecated: () => vw,
      dumpChanges: () => lw,
      encode: () => WW,
      encodeArray: () => kX,
      encodeIndexedEntry: () => uX,
      encodeKeyValueOperation: () => LX,
      encodeMapEntry: () => CX,
      encodeSchemaOperation: () => EX,
      MI: () => Bw,
      fullStateOnly: () => pw,
      getDecoderStateCallbacks: () => Qq,
      getEncodeDescriptor: () => QX,
      getRawChangesCallback: () => Wq,
      isBuilder: () => Pw,
      patchOnly: () => Dw,
      registerType: () => bW,
      schema: () => aw,
      t: () => Iw,
      type: () => Gw,
      unreliable: () => Vw,
      view: () => yw
    });
    const wQ = 255;
    var qQ;

    function TQ(QQ) {
      Object.defineProperty(QQ, Symbol.metadata, {
        value: void 0,
        writable: !0,
        configurable: !0,
        enumerable: !1
      })
    }! function(QQ) {
      QQ[QQ.ADD = 128] = "ADD", QQ[QQ.REPLACE = 0] = "REPLACE", QQ[QQ.DELETE = 64] = "DELETE", QQ[QQ.DELETE_AND_MOVE = 96] = "DELETE_AND_MOVE", QQ[QQ.MOVE_AND_ADD = 160] = "MOVE_AND_ADD", QQ[QQ.DELETE_AND_ADD = 192] = "DELETE_AND_ADD", QQ[QQ.CLEAR = 10] = "CLEAR", QQ[QQ.REVERSE = 15] = "REVERSE", QQ[QQ.MOVE = 32] = "MOVE", QQ[QQ.DELETE_BY_REFID = 33] = "DELETE_BY_REFID", QQ[QQ.ADD_BY_REFID = 129] = "ADD_BY_REFID"
    }(qQ || (qQ = {})), Symbol.metadata ??= Symbol.for("Symbol.metadata");
    const zQ = "undefined" !== typeof globalThis ? globalThis : "undefined" !== typeof global ? global : "undefined" !== typeof self ? self : "undefined" !== typeof window ? window : {};
    if ("function" === typeof Symbol && "function" !== typeof Symbol.for) {
      const QQ = "colyseus.symbolRegistry",
        WQ = zQ[QQ] || (zQ[QQ] = Object.create(null));
      Symbol.for = function(QQ) {
        return WQ[QQ] || (WQ[QQ] = Symbol(QQ))
      }, Symbol.keyFor = function(QQ) {
        for (const XQ in WQ)
          if (WQ[XQ] === QQ) return XQ
      }
    }
    const sQ = Symbol.for("$refId"),
      FQ = "~track",
      PQ = "~encoder",
      gQ = "~decoder",
      JQ = "~filter",
      rQ = "~getByIndex",
      IQ = "~deleteByIndex",
      jQ = "~resyncPrune",
      BQ = Symbol.for("$changes"),
      yQ = Symbol.for("$childType"),
      VQ = Symbol.for("$proxyTarget"),
      DQ = "~onEncodeEnd",
      pQ = "~reset",
      GQ = "~onDecodeEnd",
      UQ = Symbol.for("$values"),
      bQ = "~builder",
      vQ = "~descriptors",
      dQ = "~__encodeDescriptor",
      HQ = "~encoders",
      aQ = "~__numFields",
      lQ = "~__refTypeFieldIndexes",
      hQ = "~__viewFieldIndexes",
      iQ = "$__fieldIndexesByViewTag",
      cQ = "~__unreliableFieldIndexes",
      AQ = "~__patchOnlyFieldIndexes",
      RQ = "~__fullSyncSkipIndexes",
      EQ = "~__fullStateOnlyFieldIndexes",
      CQ = "~__streamFieldIndexes",
      uQ = "~__streamPriorities";
    let LQ;
    try {
      LQ = new TextEncoder
    } catch (zq) {}
    const kQ = new ArrayBuffer(8),
      fQ = new Int32Array(kQ),
      SQ = new Float32Array(kQ),
      tQ = new Float64Array(kQ),
      oQ = new BigInt64Array(kQ),
      eQ = "undefined" !== typeof Buffer && Buffer.byteLength ? Buffer.byteLength : function(QQ, WQ) {
        for (var XQ = 0, wQ = 0, qQ = 0, TQ = QQ.length; qQ < TQ; qQ++)(XQ = QQ.charCodeAt(qQ)) < 128 ? wQ += 1 : XQ < 2048 ? wQ += 2 : XQ < 55296 || XQ >= 57344 ? wQ += 3 : (qQ++, wQ += 4);
        return wQ
      };

    function nQ(QQ, WQ, XQ) {
      for (var wQ = 0, qQ = 0, TQ = WQ.length; qQ < TQ; qQ++)(wQ = WQ.charCodeAt(qQ)) < 128 ? QQ[XQ.offset++] = wQ : wQ < 2048 ? (QQ[XQ.offset] = 192 | wQ >> 6, QQ[XQ.offset + 1] = 128 | 63 & wQ, XQ.offset += 2) : wQ < 55296 || wQ >= 57344 ? (QQ[XQ.offset] = 224 | wQ >> 12, QQ[XQ.offset + 1] = 128 | wQ >> 6 & 63, QQ[XQ.offset + 2] = 128 | 63 & wQ, XQ.offset += 3) : (qQ++, wQ = 65536 + ((1023 & wQ) << 10 | 1023 & WQ.charCodeAt(qQ)), QQ[XQ.offset] = 240 | wQ >> 18, QQ[XQ.offset + 1] = 128 | wQ >> 12 & 63, QQ[XQ.offset + 2] = 128 | wQ >> 6 & 63, QQ[XQ.offset + 3] = 128 | 63 & wQ, XQ.offset += 4)
    }

    function xQ(QQ, WQ, XQ) {
      QQ[XQ.offset++] = 255 & WQ
    }

    function YQ(QQ, WQ, XQ) {
      QQ[XQ.offset++] = 255 & WQ, QQ[XQ.offset++] = WQ >> 8 & 255
    }

    function NQ(QQ, WQ, XQ) {
      QQ[XQ.offset++] = 255 & WQ, QQ[XQ.offset++] = WQ >> 8 & 255
    }

    function ZQ(QQ, WQ, XQ) {
      QQ[XQ.offset++] = 255 & WQ, QQ[XQ.offset++] = WQ >> 8 & 255, QQ[XQ.offset++] = WQ >> 16 & 255, QQ[XQ.offset++] = WQ >> 24 & 255
    }

    function OQ(QQ, WQ, XQ) {
      const wQ = WQ >> 24,
        qQ = WQ >> 16,
        TQ = WQ >> 8,
        zQ = WQ;
      QQ[XQ.offset++] = 255 & zQ, QQ[XQ.offset++] = 255 & TQ, QQ[XQ.offset++] = 255 & qQ, QQ[XQ.offset++] = 255 & wQ
    }

    function KQ(QQ, WQ, XQ) {
      const wQ = Math.floor(WQ / Math.pow(2, 32));
      OQ(QQ, WQ >>> 0, XQ), OQ(QQ, wQ, XQ)
    }

    function mQ(QQ, WQ, XQ) {
      const wQ = WQ / Math.pow(2, 32) | 0;
      OQ(QQ, WQ >>> 0, XQ), OQ(QQ, wQ, XQ)
    }

    function MQ(QQ, WQ, XQ) {
      SQ[0] = WQ, ZQ(QQ, fQ[0], XQ)
    }

    function QW(QQ, WQ, XQ) {
      tQ[0] = WQ, ZQ(QQ, fQ[0], XQ), ZQ(QQ, fQ[1], XQ)
    }
    const WW = {
        int8: xQ,
        uint8: function(QQ, WQ, XQ) {
          QQ[XQ.offset++] = 255 & WQ
        },
        int16: YQ,
        uint16: NQ,
        int32: ZQ,
        uint32: OQ,
        int64: KQ,
        uint64: mQ,
        bigint64: function(QQ, WQ, XQ) {
          oQ[0] = BigInt.asIntN(64, WQ), ZQ(QQ, fQ[0], XQ), ZQ(QQ, fQ[1], XQ)
        },
        biguint64: function(QQ, WQ, XQ) {
          oQ[0] = BigInt.asIntN(64, WQ), ZQ(QQ, fQ[0], XQ), ZQ(QQ, fQ[1], XQ)
        },
        float32: MQ,
        float64: QW,
        boolean: function(QQ, WQ, XQ) {
          QQ[XQ.offset++] = WQ ? 1 : 0
        },
        string: function(QQ, WQ, XQ) {
          WQ || (WQ = "");
          let wQ = eQ(WQ, "utf8"),
            qQ = 0;
          if (wQ < 32) QQ[XQ.offset++] = 160 | wQ, qQ = 1;
          else if (wQ < 256) QQ[XQ.offset++] = 217, QQ[XQ.offset++] = wQ, qQ = 2;
          else if (wQ < 65536) QQ[XQ.offset++] = 218, NQ(QQ, wQ, XQ), qQ = 3;
          else {
            if (!(wQ < 4294967296)) throw new Error("String too long");
            QQ[XQ.offset++] = 219, OQ(QQ, wQ, XQ), qQ = 5
          }
          return nQ(QQ, WQ, XQ), qQ + wQ
        },
        number: function QQ(WQ, XQ, wQ) {
          return isNaN(XQ) ? QQ(WQ, 0, wQ) : isFinite(XQ) ? XQ !== (0 | XQ) ? Math.abs(XQ) <= 34028235e31 && (SQ[0] = XQ, Math.abs(Math.abs(SQ[0]) - Math.abs(XQ)) < 1e-4) ? (WQ[wQ.offset++] = 202, MQ(WQ, XQ, wQ), 5) : (WQ[wQ.offset++] = 203, QW(WQ, XQ, wQ), 9) : XQ >= 0 ? XQ < 128 ? (WQ[wQ.offset++] = 255 & XQ, 1) : XQ < 256 ? (WQ[wQ.offset++] = 204, WQ[wQ.offset++] = 255 & XQ, 2) : XQ < 65536 ? (WQ[wQ.offset++] = 205, NQ(WQ, XQ, wQ), 3) : XQ < 4294967296 ? (WQ[wQ.offset++] = 206, OQ(WQ, XQ, wQ), 5) : (WQ[wQ.offset++] = 207, mQ(WQ, XQ, wQ), 9) : XQ >= -32 ? (WQ[wQ.offset++] = 224 | XQ + 32, 1) : XQ >= -128 ? (WQ[wQ.offset++] = 208, xQ(WQ, XQ, wQ), 2) : XQ >= -32768 ? (WQ[wQ.offset++] = 209, YQ(WQ, XQ, wQ), 3) : XQ >= -2147483648 ? (WQ[wQ.offset++] = 210, ZQ(WQ, XQ, wQ), 5) : (WQ[wQ.offset++] = 211, KQ(WQ, XQ, wQ), 9) : QQ(WQ, XQ > 0 ? Number.MAX_SAFE_INTEGER : -Number.MAX_SAFE_INTEGER, wQ)
        },
        utf8Write: nQ,
        utf8Length: eQ
      },
      XW = new ArrayBuffer(8),
      wW = new Int32Array(XW),
      qW = new Float32Array(XW),
      TW = new Float64Array(XW),
      zW = new BigUint64Array(XW),
      sW = new BigInt64Array(XW);

    function FW(QQ, WQ, XQ) {
      XQ > QQ.length - WQ.offset && (XQ = QQ.length - WQ.offset);
      for (var wQ = "", qQ = 0, TQ = WQ.offset, zQ = WQ.offset + XQ; TQ < zQ; TQ++) {
        var sQ = QQ[TQ];
        if (0 !== (128 & sQ))
          if (192 !== (224 & sQ))
            if (224 !== (240 & sQ)) {
              if (240 !== (248 & sQ)) {
                console.error("decode.utf8Read(): Invalid byte " + sQ + " at offset " + TQ + ". Skip to end of string: " + (WQ.offset + XQ));
                break
              }(qQ = (7 & sQ) << 18 | (63 & QQ[++TQ]) << 12 | (63 & QQ[++TQ]) << 6 | 63 & QQ[++TQ]) >= 65536 ? (qQ -= 65536, wQ += String.fromCharCode(55296 + (qQ >>> 10), 56320 + (1023 & qQ))) : wQ += String.fromCharCode(qQ)
            } else wQ += String.fromCharCode((15 & sQ) << 12 | (63 & QQ[++TQ]) << 6 | 63 & QQ[++TQ]);
        else wQ += String.fromCharCode((31 & sQ) << 6 | 63 & QQ[++TQ]);
        else wQ += String.fromCharCode(sQ)
      }
      return WQ.offset += XQ, wQ
    }

    function PW(QQ, WQ) {
      return gW(QQ, WQ) << 24 >> 24
    }

    function gW(QQ, WQ) {
      return QQ[WQ.offset++]
    }

    function JW(QQ, WQ) {
      return rW(QQ, WQ) << 16 >> 16
    }

    function rW(QQ, WQ) {
      return QQ[WQ.offset++] | QQ[WQ.offset++] << 8
    }

    function IW(QQ, WQ) {
      return QQ[WQ.offset++] | QQ[WQ.offset++] << 8 | QQ[WQ.offset++] << 16 | QQ[WQ.offset++] << 24
    }

    function jW(QQ, WQ) {
      return IW(QQ, WQ) >>> 0
    }

    function BW(QQ, WQ) {
      return wW[0] = IW(QQ, WQ), qW[0]
    }

    function yW(QQ, WQ) {
      return wW[0] = IW(QQ, WQ), wW[1] = IW(QQ, WQ), TW[0]
    }

    function VW(QQ, WQ) {
      const XQ = jW(QQ, WQ);
      return IW(QQ, WQ) * Math.pow(2, 32) + XQ
    }

    function DW(QQ, WQ) {
      const XQ = jW(QQ, WQ);
      return jW(QQ, WQ) * Math.pow(2, 32) + XQ
    }
    const pW = {
        utf8Read: FW,
        int8: PW,
        uint8: gW,
        int16: JW,
        uint16: rW,
        int32: IW,
        uint32: jW,
        float32: BW,
        float64: yW,
        int64: VW,
        uint64: DW,
        bigint64: function(QQ, WQ) {
          return wW[0] = IW(QQ, WQ), wW[1] = IW(QQ, WQ), sW[0]
        },
        biguint64: function(QQ, WQ) {
          return wW[0] = IW(QQ, WQ), wW[1] = IW(QQ, WQ), zW[0]
        },
        boolean: function(QQ, WQ) {
          return gW(QQ, WQ) > 0
        },
        string: function(QQ, WQ) {
          const XQ = QQ[WQ.offset++];
          let wQ;
          return XQ < 192 ? wQ = 31 & XQ : 217 === XQ ? wQ = gW(QQ, WQ) : 218 === XQ ? wQ = rW(QQ, WQ) : 219 === XQ && (wQ = jW(QQ, WQ)), FW(QQ, WQ, wQ)
        },
        number: function(QQ, WQ) {
          const XQ = QQ[WQ.offset++];
          return XQ < 128 ? XQ : 202 === XQ ? BW(QQ, WQ) : 203 === XQ ? yW(QQ, WQ) : 204 === XQ ? gW(QQ, WQ) : 205 === XQ ? rW(QQ, WQ) : 206 === XQ ? jW(QQ, WQ) : 207 === XQ ? DW(QQ, WQ) : 208 === XQ ? PW(QQ, WQ) : 209 === XQ ? JW(QQ, WQ) : 210 === XQ ? IW(QQ, WQ) : 211 === XQ ? VW(QQ, WQ) : XQ > 223 ? -1 * (255 - XQ + 1) : void 0
        },
        stringCheck: function(QQ, WQ) {
          const XQ = QQ[WQ.offset];
          return XQ < 192 && XQ > 160 || 217 === XQ || 218 === XQ || 219 === XQ
        }
      },
      GW = {},
      UW = new Map;

    function bW(QQ, WQ) {
      WQ.constructor && (Object.prototype.hasOwnProperty.call(WQ, "constructor") && null == WQ.constructor[Symbol.metadata] && TQ(WQ.constructor), UW.set(WQ.constructor, QQ), GW[QQ] = WQ), WQ.encode && (WW[QQ] = WQ.encode), WQ.decode && (pW[QQ] = WQ.decode)
    }

    function vW(QQ) {
      for (const WQ in QQ) bW(WQ, QQ[WQ]);
      return QQ => Gw(QQ)
    }
    const dW = "ArraySchema does not support streaming \u2014 positional ops (splice / unshift / reverse) shift subsequent indexes, so holding ADDs back for a later tick under `maxPerTick` would desync the decoder. Use `t.stream(X)` (stable monotonic positions) or `t.map(X).stream()` (stable keys) instead.";

    function HW() {
      return {
        pendingByView: new Map,
        sentByView: new Map,
        broadcastPending: new Set,
        sentBroadcast: new Set,
        broadcastDeletes: new Set,
        maxPerTick: 32
      }
    }

    function aW(QQ) {
      return QQ._stream ??= HW()
    }

    function lW(QQ, WQ, XQ) {
      0 === WQ.activeViews.size && aW(QQ).broadcastPending.add(XQ)
    }

    function hW(QQ, WQ, XQ, wQ) {
      const TQ = QQ._stream;
      if (void 0 === TQ) return !0;
      let zQ = !1;
      return TQ.broadcastPending.delete(wQ) ? zQ = !0 : TQ.sentBroadcast.delete(wQ) && TQ.broadcastDeletes.add(wQ), WQ.forEachActiveView((QQ => {
        const WQ = TQ.pendingByView.get(QQ.id);
        if (WQ?.has(wQ)) return WQ.delete(wQ), void(zQ = !0);
        const sQ = TQ.sentByView.get(QQ.id);
        if (sQ?.has(wQ)) {
          sQ.delete(wQ);
          let WQ = QQ.changes.get(XQ);
          void 0 === WQ && (WQ = new Map, QQ.changes.set(XQ, WQ)), WQ.set(wQ, qQ.DELETE)
        }
      })), zQ
    }

    function iW(QQ, WQ) {
      const XQ = QQ._stream?.pendingByView;
      if (void 0 === XQ) return !1;
      for (const [wQ, qQ] of XQ)
        if (qQ.size > 0 && void 0 !== WQ.activeViews.get(wQ)?.deref()) return !0;
      return !1
    }

    function cW(QQ) {
      const WQ = QQ._stream;
      return void 0 !== WQ && (WQ.broadcastPending.size > 0 || WQ.broadcastDeletes.size > 0)
    }

    function AW(QQ, WQ, XQ) {
      const wQ = aW(QQ);
      let qQ = wQ.pendingByView.get(WQ);
      void 0 === qQ && (qQ = new Set, wQ.pendingByView.set(WQ, qQ)), qQ.add(XQ)
    }

    function RW(QQ, WQ) {
      const XQ = QQ._stream;
      void 0 !== XQ && (XQ.pendingByView.delete(WQ), XQ.sentByView.delete(WQ), XQ.priorityByView?.delete(WQ))
    }
    const EW = {
      8: "uint8",
      16: "uint16",
      32: "uint32"
    };

    function CW(QQ) {
      if (null == QQ || "object" !== typeof QQ) throw new Error("t.quantized(): options object with { min, max } is required.");
      const {
        min: WQ,
        max: XQ
      } = QQ;
      if ("number" !== typeof WQ || "number" !== typeof XQ || !(XQ > WQ) || !Number.isFinite(WQ) || !Number.isFinite(XQ)) throw new Error(`t.quantized(): require finite min < max (got min=${WQ}, max=${XQ}).`);
      const wQ = QQ.bits ?? 16;
      if (8 !== wQ && 16 !== wQ && 32 !== wQ) throw new Error(`t.quantized(): bits must be 8, 16 or 32 (got ${wQ}).`);
      const qQ = QQ.mode ?? "clamp";
      if ("clamp" !== qQ && "wrap" !== qQ) throw new Error(`t.quantized(): mode must be "clamp" or "wrap" (got ${JSON.stringify(qQ)}).`);
      const TQ = "wrap" === qQ,
        zQ = Math.pow(2, wQ);
      return {
        min: WQ,
        max: XQ,
        bits: wQ,
        wrap: TQ,
        wire: EW[wQ],
        range: XQ - WQ,
        span: TQ ? zQ : WQ === -XQ ? zQ - 2 : zQ - 1
      }
    }

    function uW(QQ) {
      return null !== QQ && "object" === typeof QQ && void 0 !== QQ.quantized
    }

    function LW(QQ, WQ) {
      if (QQ.wrap) {
        if (!Number.isFinite(WQ)) return 0;
        const XQ = QQ.range;
        let wQ = (WQ - QQ.min) % XQ;
        wQ < 0 && (wQ += XQ);
        const qQ = QQ.span;
        return Math.floor(wQ / XQ * qQ + .5) % qQ
      }
      if (WQ !== WQ) return 0;
      const XQ = WQ < QQ.min ? QQ.min : WQ > QQ.max ? QQ.max : WQ;
      return Math.floor((XQ - QQ.min) / QQ.range * QQ.span + .5)
    }

    function kW(QQ, WQ) {
      return QQ.min + WQ / QQ.span * QQ.range
    }

    function fW(QQ) {
      const WQ = WW[QQ.wire];
      return (XQ, wQ, qQ) => WQ(XQ, LW(QQ, wQ), qQ)
    }
    class SW {
      types = {};
      schemas = new Map;
      hasFilters = !1;
      static inheritedTypes = new WeakMap;
      static cachedContexts = new WeakMap;
      static register(QQ) {
        const WQ = Object.getPrototypeOf(QQ);
        if (WQ !== hw) {
          let XQ = SW.inheritedTypes.get(WQ);
          XQ || (XQ = new Set, SW.inheritedTypes.set(WQ, XQ)), XQ.add(QQ)
        }
      }
      static cache(QQ) {
        let WQ = SW.cachedContexts.get(QQ);
        return WQ || (WQ = new SW(QQ), SW.cachedContexts.set(QQ, WQ)), WQ
      }
      constructor(QQ) {
        QQ && this.discoverTypes(QQ)
      }
      has(QQ) {
        return this.schemas.has(QQ)
      }
      get(QQ) {
        return this.types[QQ]
      }
      add(QQ) {
        let WQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.schemas.size;
        return !this.schemas.has(QQ) && (this.types[WQ] = QQ, null == QQ[Symbol.metadata] && NW.initialize(QQ), this.schemas.set(QQ, WQ), !0)
      }
      getTypeId(QQ) {
        return this.schemas.get(QQ)
      }
      discoverTypes(QQ) {
        if (!this.add(QQ)) return;
        SW.inheritedTypes.get(QQ)?.forEach((QQ => {
          this.discoverTypes(QQ)
        }));
        let WQ = QQ;
        for (;
          (WQ = Object.getPrototypeOf(WQ)) && WQ !== hw && WQ !== Function.prototype;) this.discoverTypes(WQ);
        const XQ = QQ[Symbol.metadata];
        (XQ[hQ] || XQ[CQ]) && (this.hasFilters = !0);
        for (const wQ in XQ) {
          const QQ = XQ[wQ].type;
          if ("string" !== typeof QQ && !uW(QQ))
            if ("function" === typeof QQ) this.discoverTypes(QQ);
            else {
              const WQ = Object.values(QQ)[0];
              if ("string" === typeof WQ) continue;
              this.discoverTypes(WQ)
            }
        }
      }
      debug() {
        return `TypeContext ->\n\tSchema types: ${this.schemas.size}\n\thasFilters: ${this.hasFilters}`
      }
    }

    function tW(QQ) {
      const WQ = eW(QQ);
      return WQ ? {
        complexTypeKlass: GW[WQ],
        childType: QQ[WQ]
      } : {
        complexTypeKlass: !1,
        childType: QQ
      }
    }

    function oW(QQ, WQ) {
      const XQ = nW(QQ),
        wQ = eW(XQ),
        qQ = wQ && eW(XQ[wQ]);
      if (qQ) throw new Error(`${WQ?`${WQ}: `:""}@colyseus/schema: nested collections are not supported ("${wQ}" of "${qQ}"). Collections can only hold primitive types or Schema classes, wrap the inner ${qQ} in a Schema class.`);
      return XQ
    }

    function eW(QQ) {
      return "object" === typeof QQ && null !== QQ ? Object.keys(QQ).find((QQ => void 0 !== GW[QQ])) : void 0
    }

    function nW(QQ) {
      if ("object" !== typeof QQ || null === QQ) return QQ;
      if (Array.isArray(QQ)) return {
        array: nW(QQ[0])
      };
      const WQ = function(QQ) {
        const WQ = Object.keys(QQ),
          XQ = WQ.filter((QQ => /\d+/.test(QQ)));
        if (XQ.length > 0 && XQ.length === WQ.length / 2 && QQ[QQ[XQ[0]]] == XQ[0]) return "number";
        if (WQ.length > 0 && WQ.every((WQ => QQ[WQ] === WQ))) return "string"
      }(QQ);
      if (WQ) return WQ;
      if (uW(QQ)) return "string" === typeof QQ.quantized.wire ? QQ : {
        quantized: CW(QQ.quantized)
      };
      if (void 0 !== QQ.type) return nW(QQ.type);
      const XQ = eW(QQ);
      return XQ && (QQ[XQ] = nW(QQ[XQ])), QQ
    }
    const xW = [lQ, cQ, AQ, RQ, EQ, CQ, HQ];

    function YW(QQ, WQ, XQ) {
      QQ[WQ] || Object.defineProperty(QQ, WQ, {
        value: [],
        enumerable: !1,
        configurable: !0,
        writable: !0
      }), QQ[WQ].push(XQ)
    }
    const NW = {
        addField(QQ, WQ, XQ, wQ, qQ) {
          if (WQ >= 63) throw new Error(`Can't define field '${XQ}'.\nSchema instances may only have up to 63 fields.`);
          QQ[WQ] = Object.assign(QQ[WQ] || {}, {
            type: wQ,
            index: WQ,
            name: XQ
          }), Object.defineProperty(QQ, vQ, {
            value: QQ[vQ] || {},
            enumerable: !1,
            configurable: !0
          }), QQ[vQ][XQ] = qQ || {
            value: void 0,
            writable: !0,
            enumerable: !0,
            configurable: !0
          }, Object.defineProperty(QQ, aQ, {
            value: WQ,
            enumerable: !1,
            configurable: !0
          }), Object.defineProperty(QQ, XQ, {
            value: WQ,
            enumerable: !1,
            configurable: !0
          }), "string" === typeof QQ[WQ].type || uW(QQ[WQ].type) || (void 0 === QQ[lQ] && Object.defineProperty(QQ, lQ, {
            value: [],
            enumerable: !1,
            configurable: !0
          }), QQ[lQ].push(WQ));
          const TQ = QQ[WQ].type;
          if (TQ && "object" === typeof TQ && void 0 !== TQ.stream) {
            if (void 0 !== TQ.array) throw new Error(dW);
            QQ[WQ].stream = !0, QQ[CQ] || Object.defineProperty(QQ, CQ, {
              value: [],
              enumerable: !1,
              configurable: !0,
              writable: !0
            }), QQ[CQ].includes(WQ) || QQ[CQ].push(WQ);
            const qQ = wQ?.priority;
            "function" === typeof qQ && NW.setStreamPriority(QQ, XQ, qQ)
          }
        },
        setTag(QQ, WQ, XQ) {
          const wQ = QQ[WQ];
          if (QQ[wQ].tag = XQ, QQ[hQ] || (Object.defineProperty(QQ, hQ, {
              value: [],
              enumerable: !1,
              configurable: !0
            }), Object.defineProperty(QQ, iQ, {
              value: {},
              enumerable: !1,
              configurable: !0
            })), QQ[hQ].push(wQ), XQ < 0) QQ[iQ][XQ] || (QQ[iQ][XQ] = []), QQ[iQ][XQ].push(wQ);
          else
            for (let qQ = XQ; qQ > 0; qQ &= qQ - 1) {
              const WQ = qQ & -qQ;
              QQ[iQ][WQ] || (QQ[iQ][WQ] = []), QQ[iQ][WQ].push(wQ)
            }
        },
        setUnreliable(QQ, WQ) {
          const XQ = QQ[WQ];
          if ("string" !== typeof QQ[XQ].type) throw new Error(`@unreliable cannot be applied to ref-type field "${WQ}". For ref-type fields, mark each primitive sub-field with @unreliable instead. See README "Limitations and best practices".`);
          QQ[XQ].unreliable = !0, QQ[cQ] || Object.defineProperty(QQ, cQ, {
            value: [],
            enumerable: !1,
            configurable: !0,
            writable: !0
          }), QQ[cQ].push(XQ)
        },
        setPatchOnly(QQ, WQ) {
          const XQ = QQ[WQ];
          if (QQ[XQ].fullStateOnly) throw new Error(`field "${WQ}" cannot be both patchOnly and fullStateOnly \u2014 those are the only two delivery channels, so the field would never reach a client.`);
          QQ[XQ].patchOnly = !0, YW(QQ, AQ, XQ), YW(QQ, RQ, XQ)
        },
        setDeprecated(QQ, WQ) {
          const XQ = QQ[WQ];
          QQ[XQ].deprecated = !0, YW(QQ, RQ, XQ), Object.defineProperty(QQ, XQ, {
            value: QQ[XQ],
            enumerable: !1,
            configurable: !0
          })
        },
        setFullStateOnly(QQ, WQ) {
          const XQ = QQ[WQ];
          if (QQ[XQ].patchOnly) throw new Error(`field "${WQ}" cannot be both patchOnly and fullStateOnly \u2014 those are the only two delivery channels, so the field would never reach a client.`);
          QQ[XQ].fullStateOnly = !0, YW(QQ, EQ, XQ)
        },
        setStream(QQ, WQ) {
          const XQ = QQ[WQ];
          QQ[XQ].stream = !0, QQ[CQ] || Object.defineProperty(QQ, CQ, {
            value: [],
            enumerable: !1,
            configurable: !0,
            writable: !0
          }), QQ[CQ].push(XQ)
        },
        setStreamPriority(QQ, WQ, XQ) {
          const wQ = QQ[WQ];
          QQ[uQ] || Object.defineProperty(QQ, uQ, {
            value: {},
            enumerable: !1,
            configurable: !0,
            writable: !0
          }), QQ[uQ][wQ] = XQ
        },
        getStreamPriority: (QQ, WQ) => QQ?.[uQ]?.[WQ],
        defineField(QQ, WQ, XQ, wQ, qQ) {
          const TQ = oW(qQ, `${QQ.name}.${wQ}`),
            {
              complexTypeKlass: zQ,
              childType: sQ
            } = tW(TQ);
          NW.addField(WQ, XQ, wQ, TQ, bw(wQ, XQ, sQ, zQ)), WQ[vQ][wQ] && Object.defineProperty(QQ.prototype, wQ, WQ[vQ][wQ]), ("string" === typeof TQ || uW(TQ)) && (WQ[HQ] || Object.defineProperty(WQ, HQ, {
            value: [],
            enumerable: !1,
            configurable: !0,
            writable: !0
          }), WQ[HQ][XQ] = "string" === typeof TQ ? WW[TQ] : fW(TQ.quantized))
        },
        setFields(QQ, WQ) {
          const XQ = QQ.prototype.constructor;
          SW.register(XQ);
          const wQ = Object.getPrototypeOf(XQ),
            qQ = wQ && wQ[Symbol.metadata],
            TQ = NW.initialize(XQ);
          XQ[FQ] || (XQ[FQ] = hw[FQ]), XQ[PQ] || (XQ[PQ] = hw[PQ]), XQ[gQ] || (XQ[gQ] = hw[gQ]), XQ.prototype.toJSON || (XQ.prototype.toJSON = hw.prototype.toJSON);
          let zQ = TQ[aQ] ?? (qQ && qQ[aQ]) ?? -1;
          zQ++, TQ[HQ] || Object.defineProperty(TQ, HQ, {
            value: qQ?.[HQ] ? [...qQ[HQ]] : [],
            enumerable: !1,
            configurable: !0,
            writable: !0
          });
          for (const sQ in WQ) {
            if (void 0 !== TQ[sQ]) throw new Error(`@colyseus/schema: Duplicate '${sQ}' definition on '${XQ.name||"(anonymous)"}'.`);
            NW.defineField(XQ, TQ, zQ, sQ, WQ[sQ]), zQ++
          }
          return QQ
        },
        isDeprecated: (QQ, WQ) => !0 === QQ[WQ].deprecated,
        initialize(QQ) {
          const WQ = Object.getPrototypeOf(QQ),
            XQ = WQ[Symbol.metadata];
          let wQ = QQ[Symbol.metadata] ?? Object.create(null);
          if (WQ !== hw && wQ === XQ && (wQ = Object.create(null), XQ)) {
            Object.setPrototypeOf(wQ, XQ), Object.defineProperty(wQ, aQ, {
              value: XQ[aQ],
              enumerable: !1,
              configurable: !0,
              writable: !0
            }), void 0 !== XQ[hQ] && (Object.defineProperty(wQ, hQ, {
              value: [...XQ[hQ]],
              enumerable: !1,
              configurable: !0,
              writable: !0
            }), Object.defineProperty(wQ, iQ, {
              value: {
                ...XQ[iQ]
              },
              enumerable: !1,
              configurable: !0,
              writable: !0
            }));
            for (const QQ of xW) {
              const WQ = XQ[QQ];
              void 0 !== WQ && Object.defineProperty(wQ, QQ, {
                value: [...WQ],
                enumerable: !1,
                configurable: !0,
                writable: !0
              })
            }
            Object.defineProperty(wQ, vQ, {
              value: {
                ...XQ[vQ]
              },
              enumerable: !1,
              configurable: !0,
              writable: !0
            })
          }
          return Object.defineProperty(QQ, Symbol.metadata, {
            value: wQ,
            writable: !1,
            configurable: !0
          }), wQ
        },
        isValidInstance: QQ => QQ.constructor[Symbol.metadata] && Object.prototype.hasOwnProperty.call(QQ.constructor[Symbol.metadata], aQ),
        getFields(QQ) {
          const WQ = QQ[Symbol.metadata],
            XQ = {};
          for (let wQ = 0; wQ <= WQ[aQ]; wQ++) XQ[WQ[wQ].name] = WQ[wQ].type;
          return XQ
        },
        hasViewTagAtIndex: (QQ, WQ) => QQ?.[hQ]?.includes(WQ),
        hasUnreliableAtIndex: (QQ, WQ) => QQ?.[cQ]?.includes(WQ),
        hasPatchOnlyAtIndex: (QQ, WQ) => QQ?.[AQ]?.includes(WQ),
        hasFullStateOnlyAtIndex: (QQ, WQ) => QQ?.[EQ]?.includes(WQ),
        hasStreamAtIndex: (QQ, WQ) => QQ?.[CQ]?.includes(WQ)
      },
      ZW = (QQ, WQ, XQ) => QQ(WQ, XQ);
    class OW {
      dirtyLow = 0;
      dirtyHigh = 0;
      ops;
      constructor(QQ) {
        this.ops = new Uint8Array(Math.max(QQ + 1, 1))
      }
      record(QQ, WQ) {
        const XQ = this.ops[QQ];
        0 === XQ ? this.ops[QQ] = WQ : (XQ === qQ.DELETE || XQ === qQ.ADD && WQ === qQ.DELETE_AND_ADD) && (this.ops[QQ] = qQ.DELETE_AND_ADD), QQ < 32 ? this.dirtyLow |= 1 << QQ : this.dirtyHigh |= 1 << QQ - 32
      }
      recordDelete(QQ, WQ) {
        this.ops[QQ] = WQ, QQ < 32 ? this.dirtyLow |= 1 << QQ : this.dirtyHigh |= 1 << QQ - 32
      }
      recordRaw(QQ, WQ) {
        this.record(QQ, WQ)
      }
      operationAt(QQ) {
        const WQ = this.ops[QQ];
        return 0 === WQ ? void 0 : WQ
      }
      setOperationAt(QQ, WQ) {
        this.ops[QQ] = WQ
      }
      forEach(QQ) {
        this.forEachWithCtx(QQ, ZW)
      }
      forEachWithCtx(QQ, WQ) {
        let XQ = this.dirtyLow,
          wQ = this.dirtyHigh;
        const qQ = this.ops;
        for (; 0 !== XQ;) {
          const wQ = XQ & -XQ,
            TQ = 31 - Math.clz32(wQ);
          XQ ^= wQ, WQ(QQ, TQ, qQ[TQ])
        }
        for (; 0 !== wQ;) {
          const XQ = wQ & -wQ,
            TQ = 31 - Math.clz32(XQ) + 32;
          wQ ^= XQ, WQ(QQ, TQ, qQ[TQ])
        }
      }
      size() {
        return mW(this.dirtyLow) + mW(this.dirtyHigh)
      }
      has() {
        return 0 !== (this.dirtyLow | this.dirtyHigh)
      }
      reset() {
        this.dirtyLow = 0, this.dirtyHigh = 0, this.ops.fill(0)
      }
    }
    class KW {
      ij = new Map;
      pureOps = [];
      record(QQ, WQ) {
        const XQ = this.ij.get(QQ);
        void 0 === XQ ? this.ij.set(QQ, WQ) : (XQ === qQ.DELETE || XQ === qQ.ADD && WQ === qQ.DELETE_AND_ADD) && this.ij.set(QQ, qQ.DELETE_AND_ADD)
      }
      recordDelete(QQ, WQ) {
        this.ij.set(QQ, WQ)
      }
      recordRaw(QQ, WQ) {
        this.ij.set(QQ, WQ)
      }
      recordPure(QQ) {
        this.pureOps.push([this.ij.size, QQ])
      }
      operationAt(QQ) {
        return this.ij.get(QQ)
      }
      setOperationAt(QQ, WQ) {
        this.ij.has(QQ) && this.ij.set(QQ, WQ)
      }
      forEach(QQ) {
        this.forEachWithCtx(QQ, ZW)
      }
      forEachWithCtx(QQ, WQ) {
        const XQ = this.pureOps;
        if (XQ.length > 0) {
          let wQ = 0,
            qQ = 0;
          for (const [TQ, zQ] of this.ij) {
            for (; wQ < XQ.length && XQ[wQ][0] <= qQ;) {
              const qQ = XQ[wQ++][1];
              WQ(QQ, -qQ, qQ)
            }
            WQ(QQ, TQ, zQ), qQ++
          }
          for (; wQ < XQ.length;) {
            const qQ = XQ[wQ++][1];
            WQ(QQ, -qQ, qQ)
          }
        } else
          for (const [wQ, qQ] of this.ij) WQ(QQ, wQ, qQ)
      }
      size() {
        return this.ij.size + this.pureOps.length
      }
      has() {
        return this.ij.size > 0 || this.pureOps.length > 0
      }
      reset() {
        this.ij.clear(), this.pureOps.length = 0
      }
      shift(QQ) {
        const WQ = new Map;
        for (const [XQ, wQ] of this.ij) WQ.set(XQ + QQ, wQ);
        this.ij = WQ
      }
    }

    function mW(QQ) {
      return 16843009 * ((QQ = (858993459 & (QQ -= QQ >>> 1 & 1431655765)) + (QQ >>> 2 & 858993459)) + (QQ >>> 4) & 252645135) >>> 24
    }

    function MW(QQ) {
      if (void 0 === QQ) return 0;
      let WQ = 0;
      for (let XQ = 0, wQ = QQ.length; XQ < wQ; XQ++) {
        const wQ = QQ[XQ];
        wQ < 32 && (WQ |= 1 << wQ)
      }
      return WQ
    }

    function QX(QQ) {
      const WQ = QQ.constructor;
      if (Object.prototype.hasOwnProperty.call(WQ, dQ)) return WQ[dQ];
      const XQ = WQ[Symbol.metadata],
        wQ = NW.isValidInstance(QQ),
        qQ = (XQ?.[hQ]?.length ?? 0) > 0,
        TQ = function(QQ) {
          const WQ = [],
            XQ = [],
            wQ = [],
            qQ = [],
            TQ = QQ?.[aQ];
          if (void 0 === TQ) return {
            names: WQ,
            types: XQ,
            tags: wQ,
            encoders: qQ
          };
          const zQ = QQ[HQ];
          for (let sQ = 0; sQ <= TQ; sQ++) {
            const TQ = QQ[sQ];
            void 0 !== TQ ? (WQ[sQ] = TQ.name, XQ[sQ] = TQ.type, wQ[sQ] = TQ.tag, qQ[sQ] = zQ?.[sQ]) : (WQ[sQ] = void 0, XQ[sQ] = void 0, wQ[sQ] = void 0, qQ[sQ] = void 0)
          }
          return {
            names: WQ,
            types: XQ,
            tags: wQ,
            encoders: qQ
          }
        }(XQ),
        zQ = wQ && !qQ ? void 0 : WQ[JQ],
        sQ = {
          encoder: WQ[PQ],
          filter: zQ,
          metadata: XQ,
          isSchema: wQ,
          filterBitmask: wQ ? MW(XQ?.[hQ]) : 0,
          hasAnyFullStateOnly: (XQ?.[EQ]?.length ?? 0) > 0,
          hasAnyUnreliable: (XQ?.[cQ]?.length ?? 0) > 0,
          hasAnyStream: (XQ?.[CQ]?.length ?? 0) > 0,
          hasAnyView: qQ,
          fullStateOnlyBitmask: MW(XQ?.[EQ]),
          unreliableBitmask: MW(XQ?.[cQ]),
          streamBitmask: MW(XQ?.[CQ]),
          names: TQ.names,
          types: TQ.types,
          tags: TQ.tags,
          encoders: TQ.encoders
        };
      return Object.defineProperty(WQ, dQ, {
        value: sQ,
        enumerable: !1,
        writable: !0,
        configurable: !0
      }), sQ
    }

    function WX(QQ, WQ) {
      if (void 0 !== QQ.parentRef && WQ(QQ.parentRef, QQ._parentIndex)) return !0;
      for (let XQ = QQ.extraParents; void 0 !== XQ; XQ = XQ.next)
        if (WQ(XQ.ref, XQ.index)) return !0;
      return !1
    }
    const XX = (QQ, WQ) => {
        QQ.isFieldUnreliable(WQ) ? QQ.ensureUnreliableRecorder().record(WQ, qQ.ADD) : QQ.record(WQ, qQ.ADD)
      },
      wX = (QQ, WQ) => QQ(WQ);

    function qX(QQ, WQ, XQ) {
      const wQ = QQ.refTarget;
      if (void 0 !== wQ[yQ]) {
        if (QQ.isPatchOnly) return;
        if (Array.isArray(wQ.items)) {
          const QQ = wQ.items;
          for (let wQ = 0, qQ = QQ.length; wQ < qQ; wQ++) void 0 !== QQ[wQ] && XQ(WQ, wQ)
        } else if (void 0 !== wQ.journal)
          for (const [QQ, qQ] of wQ.journal.keyByIndex) wQ.$items.has(qQ) && XQ(WQ, QQ);
        else if (void 0 !== wQ.$items)
          for (const QQ of wQ.$items.keys()) XQ(WQ, QQ)
      } else {
        const qQ = QQ.metadata;
        if (!qQ) return;
        const TQ = qQ[aQ] ?? -1,
          zQ = qQ[RQ],
          sQ = QQ.encDescriptor.names;
        for (let QQ = 0; QQ <= TQ; QQ++) {
          const qQ = sQ[QQ];
          if (void 0 === qQ) continue;
          if (zQ && zQ.includes(QQ)) continue;
          const TQ = wQ[qQ];
          void 0 !== TQ && null !== TQ && XQ(WQ, QQ)
        }
      }
    }

    function TX(QQ, WQ, XQ, wQ) {
      ! function(QQ, WQ, XQ) {
        if (!WQ) return;
        const wQ = WQ[BQ],
          qQ = !wQ._isSchema;
        let TQ;
        qQ ? (WQ = wQ.parent, XQ = wQ.parentIndex, TQ = WQ?.[BQ].metadata) : TQ = wQ.metadata;
        const zQ = (TQ?.[AQ]?.includes(XQ) ? dX : 0) | (TQ?.[EQ]?.includes(XQ) ? HX : 0),
          sQ = wQ.flags & hX | zQ,
          FQ = QQ.flags;
        QQ.flags = FQ | sQ;
        sQ & ~FQ & HX && (QQ.reset(), QQ.unreliableRecorder?.reset());
        const PQ = QQ.root?.types;
        if (!PQ?.hasFilters) return;
        const gQ = TQ?.[hQ]?.includes(XQ) ?? !1,
          JQ = TQ?.[CQ]?.includes(XQ) ?? !1,
          rQ = wQ.isFiltered || gQ || JQ;
        if (QQ.isFiltered = rQ, JQ && !qQ) {
          QQ.isStreamCollection = !0;
          const WQ = aW(QQ.ref);
          if (void 0 === WQ.priority) {
            const QQ = NW.getStreamPriority(TQ, XQ);
            void 0 !== QQ && (WQ.priority = QQ)
          }
          QQ.root?.registerStream(QQ.ref)
        }
        if (rQ) {
          const WQ = sX(QQ);
          QQ.isVisibilitySharedWithParent = wQ.isFiltered && WQ && !JQ && (!gQ || qQ && TQ[XQ].tag !== jw)
        }
      }(QQ, WQ, XQ), QQ.isFullStateOnly || (QQ.has() && QQ.root?.enqueueChangeTree(QQ), QQ.unreliableRecorder?.has() && QQ.root?.enqueueUnreliable(QQ), QQ.has() || QQ.unreliableRecorder?.has() || QQ.root?.enqueueChangeTree(QQ))
    }

    function zX(QQ) {
      const WQ = QQ.pendingFilterRefresh;
      for (let XQ = 0; XQ < WQ.length; XQ++) {
        const QQ = WQ[XQ];
        0 !== (QQ.flags & lX) && FX(QQ)
      }
      WQ.length = 0
    }

    function sX(QQ) {
      return QQ._isSchema || "string" !== typeof QQ.refTarget[yQ]
    }

    function FX(QQ) {
      QQ.flags &= ~lX;
      const WQ = QQ.root;
      if (void 0 === WQ || void 0 === QQ.parentRef) return;
      const XQ = sX(QQ);
      let wQ = IX(QQ, QQ.parentRef, QQ._parentIndex, XQ);
      for (let TQ = QQ.extraParents; void 0 !== TQ && wQ !== rX; TQ = TQ.next) wQ |= IX(QQ, TQ.ref, TQ.index, XQ);
      if (0 === wQ) return;
      QQ.isVisibilitySharedWithParent = 0 !== (wQ & JX);
      const qQ = 0 === (wQ & gX);
      qQ !== QQ.isFiltered && (QQ.isFiltered = qQ, qQ || QQ.isFullStateOnly || (QQ.forEachLiveWithCtx(QQ, XX), QQ.has() && WQ.enqueueChangeTree(QQ), QQ.unreliableRecorder?.has() && WQ.enqueueUnreliable(QQ)), QQ.forEachChildWithCtx(QQ, jX))
    }
    const PX = 1,
      gX = 2,
      JX = 4,
      rX = PX | gX | JX;

    function IX(QQ, WQ, XQ, wQ) {
      const qQ = WQ[BQ];
      if (qQ.root !== QQ.root || ! function(QQ, WQ, XQ) {
          const wQ = WQ.refTarget;
          if (WQ.isArray) {
            const WQ = wQ.items,
              qQ = WQ[XQ];
            if (void 0 !== qQ && qQ[BQ] === QQ) return !0;
            for (let XQ = 0, wQ = WQ.length; XQ < wQ; XQ++) {
              const wQ = WQ[XQ];
              if (void 0 !== wQ && wQ[BQ] === QQ) return !0
            }
            return !1
          }
          const qQ = WQ.getValue(XQ);
          return void 0 !== qQ && qQ[BQ] === QQ
        }(QQ, qQ, XQ)) return 0;
      qQ.flags & lX && FX(qQ);
      let TQ = PX;
      if (qQ._isSchema) {
        void 0 !== qQ.encDescriptor.tags[XQ] || qQ.isFieldStream(XQ) || (qQ.isFiltered ? wQ && (TQ |= JX) : TQ |= gX)
      } else if (qQ.isFiltered) {
        if (wQ && !qQ.isStreamCollection) {
          const QQ = qQ.parent?.[BQ];
          (QQ?._isSchema ? QQ.encDescriptor.tags[qQ.parentIndex] : void 0) !== jw && (TQ |= JX)
        }
      } else TQ |= gX;
      return TQ
    }
    const jX = (QQ, WQ, XQ) => {
      FX(WQ)
    };

    function BX(QQ, WQ, XQ, wQ) {
      if (QQ.addParent(WQ, wQ), !XQ) return;
      const qQ = XQ.add(QQ);
      XQ !== QQ.root && (QQ.root = XQ, TX(QQ, WQ, wQ));
      const TQ = WQ?.[BQ];
      if (void 0 !== TQ && void 0 !== TQ.subscribedViews && void 0 !== WQ[yQ] && function(QQ, WQ, XQ, wQ) {
          const qQ = QQ.subscribedViews;
          if (void 0 === qQ) return;
          const TQ = QQ.isStreamCollection,
            zQ = TQ ? QQ.ref : void 0,
            sQ = TQ ? void 0 : XQ[BQ];
          for (let FQ = 0, PQ = qQ.length; FQ < PQ; FQ++) {
            let QQ = qQ[FQ];
            for (; 0 !== QQ;) {
              const XQ = QQ & -QQ;
              QQ ^= XQ;
              const PQ = 32 * FQ + (31 - Math.clz32(XQ)),
                gQ = wQ.activeViews.get(PQ),
                JQ = gQ?.deref();
              void 0 !== JQ ? TQ ? AW(zQ, PQ, WQ) : void 0 !== sQ && JQ.markVisible(sQ) : qQ[FQ] &= ~XQ
            }
          }
        }(TQ, wQ, QQ.ref, XQ), qQ) {
        let WQ = pX[GX];
        void 0 === WQ && (WQ = {
          parentRef: void 0,
          root: void 0
        }, pX[GX] = WQ), WQ.parentRef = QQ.ref, WQ.root = XQ, GX++, VX(QQ, WQ, UX), GX--
      }
    }

    function yX(QQ, WQ, XQ) {
      QQ(WQ, XQ)
    }

    function VX(QQ, WQ, XQ) {
      const wQ = QQ.refTarget;
      if (wQ[yQ]) {
        if ("string" !== typeof wQ[yQ]) {
          const QQ = wQ.items;
          if (void 0 !== QQ)
            for (let wQ = 0, qQ = QQ.length; wQ < qQ; wQ++) {
              const qQ = QQ[wQ];
              qQ && XQ(WQ, qQ[BQ], wQ)
            } else {
              const QQ = wQ.$items,
                qQ = wQ._collectionIndexes;
              for (const wQ of QQ.keys()) {
                const TQ = QQ.get(wQ);
                TQ && XQ(WQ, TQ[BQ], qQ?.[wQ] ?? wQ)
              }
            }
        }
      } else {
        const qQ = QQ.metadata,
          TQ = qQ?.[lQ];
        if (!TQ) return;
        const zQ = QQ.encDescriptor.names;
        for (let QQ = 0, sQ = TQ.length; QQ < sQ; QQ++) {
          const qQ = TQ[QQ],
            sQ = wQ[zQ[qQ]];
          sQ && XQ(WQ, sQ[BQ], qQ)
        }
      }
    }

    function DX(QQ, WQ, XQ) {
      WQ.root !== QQ ? WQ.setRoot(QQ) : QQ.add(WQ)
    }
    const pX = [];
    let GX = 0;

    function UX(QQ, WQ, XQ) {
      if (WQ.root === QQ.root) return QQ.root.add(WQ), void QQ.root.moveNextToParent(WQ);
      WQ.setParent(QQ.parentRef, QQ.root, XQ)
    }

    function bX(QQ, WQ, XQ) {
      const wQ = (3 & XQ) << 3;
      return XQ < 4 ? QQ >>> wQ & 255 : WQ >>> wQ & 255
    }
    const vX = (QQ, WQ, XQ) => QQ(WQ, XQ);
    const dX = 16,
      HX = 32,
      aX = 128,
      lX = 256,
      hX = dX | HX;
    class iX {
      ref;
      refTarget;
      get isArray() {
        return this.refTarget !== this.ref
      }
      metadata;
      encDescriptor;
      root;
      parentRef;
      _parentIndex;
      extraParents;
      flags = 4;
      refCount = 0;
      _fullSyncGen = 0;
      _isSchema = !1;
      dirtyLow = 0;
      dirtyHigh = 0;
      opsLow = 0;
      opsHigh = 0;
      ops;
      collDirty;
      collPureOps;
      unreliableRecorder;
      paused = !1;
      changesNode;
      unreliableChangesNode;
      visibleViews;
      tagViews;
      subscribedViews;
      get isFiltered() {
        return 0 !== (1 & this.flags)
      }
      set isFiltered(QQ) {
        this.flags = QQ ? 1 | this.flags : -2 & this.flags
      }
      get isVisibilitySharedWithParent() {
        return 0 !== (2 & this.flags)
      }
      set isVisibilitySharedWithParent(QQ) {
        this.flags = QQ ? 2 | this.flags : -3 & this.flags
      }
      get isNew() {
        return 0 !== (4 & this.flags)
      }
      set isNew(QQ) {
        this.flags = QQ ? 4 | this.flags : -5 & this.flags
      }
      get isUnreliable() {
        return 0 !== (8 & this.flags)
      }
      set isUnreliable(QQ) {
        this.flags = QQ ? 8 | this.flags : -9 & this.flags
      }
      get isPatchOnly() {
        return 0 !== (this.flags & dX)
      }
      set isPatchOnly(QQ) {
        this.flags = QQ ? this.flags | dX : this.flags & ~dX
      }
      get isFullStateOnly() {
        return 0 !== (this.flags & HX)
      }
      set isFullStateOnly(QQ) {
        this.flags = QQ ? this.flags | HX : this.flags & ~HX
      }
      get isStreamCollection() {
        return 0 !== (64 & this.flags)
      }
      set isStreamCollection(QQ) {
        this.flags = QQ ? 64 | this.flags : -65 & this.flags
      }
      get needsRestage() {
        return 0 !== (this.flags & aX)
      }
      set needsRestage(QQ) {
        this.flags = QQ ? this.flags | aX : -129 & this.flags
      }
      get hasFilteredFields() {
        return this.isFiltered || this.encDescriptor.hasAnyView
      }
      ensureUnreliableRecorder() {
        return void 0 === this.unreliableRecorder && (this.unreliableRecorder = this._isSchema ? new OW(this.metadata?.[aQ] ?? 0) : new KW), this.unreliableRecorder
      }
      isFieldUnreliable(QQ) {
        const WQ = this.encDescriptor;
        return !!WQ.hasAnyUnreliable && (QQ < 32 ? 0 !== (WQ.unreliableBitmask & 1 << QQ) : NW.hasUnreliableAtIndex(this.metadata, QQ))
      }
      isFieldFullStateOnly(QQ) {
        if (this.isFullStateOnly) return !0;
        const WQ = this.encDescriptor;
        return !!WQ.hasAnyFullStateOnly && (QQ < 32 ? 0 !== (WQ.fullStateOnlyBitmask & 1 << QQ) : NW.hasFullStateOnlyAtIndex(this.metadata, QQ))
      }
      isFieldStream(QQ) {
        const WQ = this.encDescriptor;
        return !!WQ.hasAnyStream && (QQ < 32 ? 0 !== (WQ.streamBitmask & 1 << QQ) : NW.hasStreamAtIndex(this.metadata, QQ))
      }
      constructor(QQ) {
        let WQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : QQ;
        this.ref = QQ, this.refTarget = WQ;
        const XQ = QX(QQ);
        this.encDescriptor = XQ, this.metadata = XQ.metadata;
        const wQ = XQ.isSchema;
        if (this._isSchema = wQ, this.ops = void 0, this.collDirty = void 0, this.collPureOps = void 0, wQ) {
          const QQ = this.metadata?.[aQ] ?? 0;
          QQ > 7 && (this.ops = new Uint8Array(QQ + 1))
        } else this.collDirty = new Map
      }
      _opAt(QQ) {
        const WQ = this.ops;
        if (void 0 !== WQ) return WQ[QQ];
        const XQ = (3 & QQ) << 3;
        return QQ < 4 ? this.opsLow >>> XQ & 255 : this.opsHigh >>> XQ & 255
      }
      _opPut(QQ, WQ) {
        const XQ = this.ops;
        if (void 0 !== XQ) return void(XQ[QQ] = WQ);
        const wQ = (3 & QQ) << 3,
          qQ = ~(255 << wQ);
        QQ < 4 ? this.opsLow = this.opsLow & qQ | WQ << wQ : this.opsHigh = this.opsHigh & qQ | WQ << wQ
      }
      _markDirty(QQ) {
        QQ < 32 ? this.dirtyLow |= 1 << QQ : this.dirtyHigh |= 1 << QQ - 32
      }
      record(QQ, WQ) {
        if (this._isSchema) {
          const XQ = this._opAt(QQ);
          0 === XQ ? this._opPut(QQ, WQ) : (XQ === qQ.DELETE || XQ === qQ.ADD && WQ === qQ.DELETE_AND_ADD) && this._opPut(QQ, qQ.DELETE_AND_ADD), this._markDirty(QQ)
        } else {
          const XQ = this.collDirty,
            wQ = XQ.get(QQ);
          let TQ;
          TQ = void 0 === wQ ? WQ : wQ === qQ.DELETE || wQ === qQ.ADD && WQ === qQ.DELETE_AND_ADD ? qQ.DELETE_AND_ADD : wQ, XQ.set(QQ, TQ)
        }
      }
      recordDelete(QQ, WQ) {
        this._isSchema ? (this._opPut(QQ, WQ), this._markDirty(QQ)) : this.collDirty.set(QQ, WQ)
      }
      recordRaw(QQ, WQ) {
        this._isSchema ? (this._opPut(QQ, WQ), this._markDirty(QQ)) : this.collDirty.set(QQ, WQ)
      }
      recordPure(QQ) {
        if (this._isSchema) throw new Error("ChangeTree (Schema): pure operations are not supported");
        (this.collPureOps ??= []).push([this.collDirty.size, QQ])
      }
      operationAt(QQ) {
        if (this._isSchema) {
          const WQ = this._opAt(QQ);
          return 0 === WQ ? void 0 : WQ
        }
        return this.collDirty.get(QQ)
      }
      setOperationAt(QQ, WQ) {
        if (this._isSchema) this._opPut(QQ, WQ);
        else {
          const XQ = this.collDirty;
          XQ.has(QQ) && XQ.set(QQ, WQ)
        }
      }
      forEach(QQ) {
        this.forEachWithCtx(QQ, vX)
      }
      forEachWithCtx(QQ, WQ) {
        if (this._isSchema) {
          let XQ = this.dirtyLow,
            wQ = this.dirtyHigh;
          const qQ = this.ops;
          if (void 0 !== qQ) {
            for (; 0 !== XQ;) {
              const wQ = XQ & -XQ,
                TQ = 31 - Math.clz32(wQ);
              XQ ^= wQ, WQ(QQ, TQ, qQ[TQ])
            }
            for (; 0 !== wQ;) {
              const XQ = wQ & -wQ,
                TQ = 31 - Math.clz32(XQ) + 32;
              wQ ^= XQ, WQ(QQ, TQ, qQ[TQ])
            }
          } else {
            const wQ = this.opsLow,
              qQ = this.opsHigh;
            for (; 0 !== XQ;) {
              const TQ = XQ & -XQ,
                zQ = 31 - Math.clz32(TQ);
              XQ ^= TQ, WQ(QQ, zQ, bX(wQ, qQ, zQ))
            }
          }
          return
        }
        const XQ = this.collDirty,
          wQ = this.collPureOps;
        if (void 0 !== wQ && wQ.length > 0) {
          let qQ = 0,
            TQ = 0;
          for (const [zQ, sQ] of XQ) {
            for (; qQ < wQ.length && wQ[qQ][0] <= TQ;) {
              const XQ = wQ[qQ++][1];
              WQ(QQ, -XQ, XQ)
            }
            WQ(QQ, zQ, sQ), TQ++
          }
          for (; qQ < wQ.length;) {
            const XQ = wQ[qQ++][1];
            WQ(QQ, -XQ, XQ)
          }
        } else
          for (const [qQ, TQ] of XQ) WQ(QQ, qQ, TQ)
      }
      size() {
        return this._isSchema ? mW(this.dirtyLow) + mW(this.dirtyHigh) : this.collDirty.size + (this.collPureOps?.length ?? 0)
      }
      has() {
        return this._isSchema ? 0 !== (this.dirtyLow | this.dirtyHigh) : this.collDirty.size > 0 || void 0 !== this.collPureOps && this.collPureOps.length > 0
      }
      reset() {
        if (this._isSchema) return this.dirtyLow = 0, this.dirtyHigh = 0, void(void 0 !== this.ops ? this.ops.fill(0) : (this.opsLow = 0, this.opsHigh = 0));
        this.collDirty.clear(), void 0 !== this.collPureOps && (this.collPureOps.length = 0), this.flags &= -513
      }
      recycle() {
        if (void 0 !== this.root) throw new Error(`@colyseus/schema: cannot recycle an attached ChangeTree (${this.ref?.constructor?.name}). Remove the instance from its parent collection before releasing it to a pool.`);
        this.reset(), this.unreliableRecorder?.reset(), this.flags = 132, this._fullSyncGen = 0, this.parentRef = void 0, this._parentIndex = void 0, this.extraParents = void 0, this.changesNode = void 0, this.unreliableChangesNode = void 0, this.paused = !1, this.visibleViews = void 0, this.tagViews = void 0, this.subscribedViews = void 0
      }
      insertAt(QQ, WQ) {
        if (this._isSchema) throw new Error("ChangeTree (Schema): insertAt is not supported");
        const XQ = this.collDirty,
          wQ = new Map,
          TQ = !this.paused && !this.isFullStateOnly;
        if (QQ > 0)
          for (const [qQ, zQ] of XQ) qQ < QQ && wQ.set(qQ, zQ);
        if (TQ)
          for (let zQ = 0; zQ < WQ; zQ++) wQ.set(QQ + zQ, qQ.ADD);
        for (const [qQ, zQ] of XQ) qQ >= QQ && wQ.set(qQ + WQ, zQ);
        this.collDirty = wQ, TQ && this.root?.enqueueChangeTree(this)
      }
      removeAt(QQ, WQ) {
        if (this._isSchema) throw new Error("ChangeTree (Schema): removeAt is not supported");
        const XQ = this.collDirty,
          wQ = QQ + WQ;
        let qQ = !1;
        for (const zQ of XQ.keys())
          if (zQ >= wQ) {
            qQ = !0;
            break
          } if (!qQ) {
          for (let WQ = QQ; WQ < wQ; WQ++) XQ.delete(WQ);
          return
        }
        const TQ = new Map;
        for (const [zQ, sQ] of XQ) zQ < QQ ? TQ.set(zQ, sQ) : zQ >= wQ && TQ.set(zQ - WQ, sQ);
        this.collDirty = TQ
      }
      unshift(QQ) {
        this.insertAt(0, QQ)
      }
      setRoot(QQ) {
        ! function(QQ, WQ) {
          QQ.root = WQ;
          const XQ = WQ.add(QQ);
          TX(QQ, QQ.parent, QQ.parentIndex), XQ && VX(QQ, WQ, DX)
        }(this, QQ)
      }
      setParent(QQ, WQ, XQ) {
        BX(this, QQ, WQ, XQ)
      }
      forEachChild(QQ) {
        VX(this, QQ, yX)
      }
      forEachChildWithCtx(QQ, WQ) {
        VX(this, QQ, WQ)
      }
      forEachLive(QQ) {
        qX(this, QQ, wX)
      }
      forEachLiveWithCtx(QQ, WQ) {
        qX(this, QQ, WQ)
      }
      operation(QQ) {
        this.paused || this.isFullStateOnly || (this.recordPure(QQ), this.root?.enqueueChangeTree(this))
      }
      _routeAndRecord(QQ, WQ, XQ) {
        if (!this.paused && !this.isFieldFullStateOnly(QQ)) {
          if (this.isFieldUnreliable(QQ) && !this.isNew) {
            const wQ = this.ensureUnreliableRecorder();
            return XQ ? wQ.recordRaw(QQ, WQ) : wQ.record(QQ, WQ), void this.root?.enqueueUnreliable(this)
          }
          XQ ? this.recordRaw(QQ, WQ) : this.record(QQ, WQ), this.root?.enqueueChangeTree(this)
        }
      }
      change(QQ) {
        let WQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : qQ.ADD;
        this._routeAndRecord(QQ, WQ, !1)
      }
      indexedOperation(QQ, WQ) {
        this._routeAndRecord(QQ, WQ, !0)
      }
      getChange(QQ) {
        return this.operationAt(QQ)
      }
      pause() {
        this.paused = !0
      }
      resume() {
        this.paused = !1
      }
      untracked(QQ) {
        const WQ = this.paused;
        this.paused = !0;
        try {
          return QQ()
        } finally {
          this.paused = WQ
        }
      }
      markDirty(QQ) {
        let WQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : qQ.ADD;
        const XQ = this.paused;
        this.paused = !1;
        try {
          this.change(QQ, WQ)
        } finally {
          this.paused = XQ
        }
      }
      getValue(QQ) {
        let WQ = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return this.refTarget[rQ](QQ, WQ)
      }
      delete(QQ, WQ) {
        if (void 0 === QQ) {
          try {
            throw new Error(`@colyseus/schema ${this.ref.constructor.name}: trying to delete non-existing index '${QQ}'`)
          } catch (zq) {
            console.warn(zq)
          }
          return
        }
        if (this.paused || this.isFieldFullStateOnly(QQ)) return this.getValue(QQ);
        const XQ = this.isFieldUnreliable(QQ) && !this.isNew;
        XQ ? this.ensureUnreliableRecorder().recordDelete(QQ, WQ ?? qQ.DELETE) : this.recordDelete(QQ, WQ ?? qQ.DELETE);
        const wQ = this.getValue(QQ);
        return wQ && wQ[BQ] && this.root?.remove(wQ[BQ]), XQ ? this.root?.enqueueUnreliable(this) : this.root?.enqueueChangeTree(this), wQ
      }
      endEncode() {
        this.reset(), this.changesNode = void 0, this._isSchema || this.refTarget[DQ]?.(), this.isNew = !1
      }
      endEncodeUnreliable() {
        this.unreliableRecorder?.reset(), this.unreliableChangesNode = void 0, this._isSchema || this.refTarget[DQ]?.()
      }
      discard() {
        this._isSchema || this.refTarget[DQ]?.(), this.reset(), this.unreliableRecorder?.reset()
      }
      discardAll() {
        const QQ = QQ => {
          if (QQ < 0) return;
          const WQ = this.getValue(QQ);
          WQ && WQ[BQ] && WQ[BQ].discardAll()
        };
        this.forEach(QQ), this.unreliableRecorder?.forEach(QQ), this.discard()
      }
      get changed() {
        return this.has() || (this.unreliableRecorder?.has() ?? !1)
      }
      get parent() {
        return this.parentRef
      }
      get parentIndex() {
        return this._parentIndex
      }
      addParent(QQ, WQ) {
        ! function(QQ, WQ, XQ) {
          if (QQ.parentRef) {
            if (QQ.parentRef[BQ] === WQ[BQ]) return void(QQ._parentIndex = XQ);
            if (WX(QQ, ((QQ, XQ) => QQ[BQ] === WQ[BQ]))) return void(QQ._parentIndex = XQ)
          }
          void 0 === QQ.parentRef ? (QQ.parentRef = WQ, QQ._parentIndex = XQ) : (QQ.extraParents = {
            ref: QQ.parentRef,
            index: QQ._parentIndex,
            next: QQ.extraParents
          }, QQ.parentRef = WQ, QQ._parentIndex = XQ)
        }(this, QQ, WQ)
      }
      setParentIndex(QQ, WQ) {
        ! function(QQ, WQ, XQ) {
          if (void 0 !== QQ.extraParents)
            if (QQ.parentRef[BQ] !== WQ[BQ]) {
              for (let wQ = QQ.extraParents; void 0 !== wQ; wQ = wQ.next)
                if (wQ.ref[BQ] === WQ[BQ]) return void(wQ.index = XQ)
            } else QQ._parentIndex = XQ;
          else QQ._parentIndex = XQ
        }(this, QQ, WQ)
      }
      removeParent() {
        return function(QQ, WQ) {
          if (QQ.parentRef && QQ.parentRef[BQ] === WQ[BQ]) return QQ.extraParents ? (QQ.parentRef = QQ.extraParents.ref, QQ._parentIndex = QQ.extraParents.index, QQ.extraParents = QQ.extraParents.next) : (QQ.parentRef = void 0, QQ._parentIndex = void 0), !0;
          let XQ = QQ.extraParents,
            wQ = null;
          for (; XQ;) {
            if (XQ.ref[BQ] === WQ[BQ]) return wQ ? wQ.next = XQ.next : QQ.extraParents = XQ.next, !0;
            wQ = XQ, XQ = XQ.next
          }
          return void 0 === QQ.parentRef
        }(this, arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.parent)
      }
      findParent(QQ) {
        return function(QQ, WQ) {
          if (void 0 !== QQ.parentRef && WQ(QQ.parentRef, QQ._parentIndex)) return {
            ref: QQ.parentRef,
            index: QQ._parentIndex
          };
          for (let XQ = QQ.extraParents; void 0 !== XQ; XQ = XQ.next)
            if (WQ(XQ.ref, XQ.index)) return {
              ref: XQ.ref,
              index: XQ.index
            }
        }(this, QQ)
      }
      hasParent(QQ) {
        return WX(this, QQ)
      }
      indexInParent(QQ) {
        return function(QQ, WQ) {
          if (QQ.parentRef && QQ.parentRef[BQ] === WQ[BQ]) return QQ._parentIndex;
          for (let XQ = QQ.extraParents; void 0 !== XQ; XQ = XQ.next)
            if (XQ.ref[BQ] === WQ[BQ]) return XQ.index
        }(this, QQ)
      }
      getAllParents() {
        return function(QQ) {
          const WQ = [];
          QQ.parentRef && WQ.push({
            ref: QQ.parentRef,
            index: QQ._parentIndex
          });
          let XQ = QQ.extraParents;
          for (; XQ;) WQ.push({
            ref: XQ.ref,
            index: XQ.index
          }), XQ = XQ.next;
          return WQ
        }(this)
      }
    }
    class cX {
      ref;
      root = void 0;
      parentRef = void 0;
      paused = !1;
      isNew = !1;
      flags = 0;
      constructor(QQ) {
        this.ref = QQ
      }
      change() {}
      delete() {}
      indexedOperation() {}
      operation() {}
      setParent() {}
      addParent() {}
      setParentIndex() {}
      removeParent() {
        return !1
      }
      getChange() {
        return 0
      }
      discard() {}
      discardAll() {}
      pause() {}
      resume() {}
      untracked(QQ) {
        return QQ()
      }
      markDirty() {}
      forEachChild(QQ) {
        const WQ = this.ref;
        if (WQ[yQ]) {
          if ("string" !== typeof WQ[yQ])
            for (const [XQ, wQ] of WQ.entries()) wQ && QQ(wQ[BQ], WQ._collectionIndexes?.[XQ] ?? XQ);
          return
        }
        const XQ = WQ.constructor,
          wQ = XQ?.[Symbol.metadata];
        if (!wQ) return;
        const qQ = wQ[lQ] ?? [];
        for (let TQ = 0; TQ < qQ.length; TQ++) {
          const XQ = qQ[TQ],
            zQ = WQ[wQ[XQ].name];
          zQ && QQ(zQ[BQ], XQ)
        }
      }
      forEachChildWithCtx(QQ, WQ) {
        this.forEachChild(((XQ, wQ) => WQ(QQ, XQ, wQ)))
      }
      forEachLive() {}
      forEachLiveWithCtx() {}
      forEach() {}
    }

    function AX(QQ) {
      let WQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : QQ;
      var XQ;
      Object.defineProperty(QQ, BQ, {
        value: (XQ = WQ, new cX(XQ)),
        enumerable: !1,
        writable: !0
      })
    }

    function RX(QQ, WQ, XQ, wQ, TQ, zQ, FQ) {
      void 0 !== FQ ? FQ(WQ, wQ, zQ) : "string" === typeof XQ ? WW[XQ]?.(WQ, wQ, zQ) : null != XQ[Symbol.metadata] ? (WW.number(WQ, wQ[sQ], zQ), (TQ & qQ.ADD) === qQ.ADD && QQ.tryEncodeTypeId(WQ, XQ, wQ.constructor, zQ)) : WW.number(WQ, wQ[sQ], zQ)
    }
    const EX = function(QQ, WQ, XQ, wQ, TQ, zQ, sQ, FQ) {
        if (WQ[zQ.offset++] = 255 & (wQ | TQ), TQ === qQ.DELETE) return;
        const PQ = XQ.encDescriptor,
          gQ = XQ.ref,
          JQ = gQ[UQ][wQ] ?? gQ[PQ.names[wQ]];
        RX(QQ, WQ, PQ.types[wQ], JQ, TQ, zQ, PQ.encoders[wQ])
      },
      CX = function(QQ, WQ, XQ, wQ, TQ, zQ) {
        if (WQ[zQ.offset++] = 255 & TQ, WW.number(WQ, wQ, zQ), TQ === qQ.DELETE) return;
        const sQ = XQ.ref;
        if ((TQ & qQ.ADD) === qQ.ADD) {
          const QQ = sQ.$indexes.get(wQ);
          WW.string(WQ, QQ, zQ)
        }
        RX(QQ, WQ, sQ[yQ], sQ[rQ](wQ), TQ, zQ)
      },
      uX = function(QQ, WQ, XQ, wQ, TQ, zQ) {
        if (WQ[zQ.offset++] = 255 & TQ, WW.number(WQ, wQ, zQ), TQ === qQ.DELETE) return;
        const sQ = XQ.ref;
        RX(QQ, WQ, sQ[yQ], sQ[rQ](wQ), TQ, zQ)
      },
      LX = function(QQ, WQ, XQ, wQ, TQ, zQ) {
        const sQ = XQ.ref;
        (TQ & qQ.ADD) === qQ.ADD && "function" === typeof sQ.set ? CX(QQ, WQ, XQ, wQ, TQ, zQ) : uX(QQ, WQ, XQ, wQ, TQ, zQ)
      },
      kX = function(QQ, WQ, XQ, wQ, TQ, zQ, FQ, PQ) {
        const gQ = XQ.refTarget,
          JQ = gQ[yQ],
          IQ = "string" !== typeof JQ;
        let jQ;
        if (PQ && XQ.isFiltered && IQ) {
          const QQ = gQ.tmpItems[wQ];
          if (!QQ) return;
          if (jQ = QQ[sQ], TQ === qQ.DELETE) TQ = qQ.DELETE_BY_REFID;
          else if ((TQ & qQ.ADD) === qQ.ADD) TQ = qQ.ADD_BY_REFID;
          else if ((TQ & qQ.MOVE) === qQ.MOVE) return
        } else if (TQ === qQ.DELETE && IQ) {
          const QQ = gQ.tmpItems[wQ];
          if (!QQ) return;
          jQ = QQ[sQ], TQ = qQ.DELETE_BY_REFID
        } else jQ = wQ;
        if (WQ[zQ.offset++] = 255 & TQ, WW.number(WQ, jQ, zQ), TQ === qQ.DELETE || TQ === qQ.DELETE_BY_REFID) return;
        RX(QQ, WQ, JQ, gQ[rQ](wQ, FQ), TQ, zQ)
      };

    function fX(QQ, WQ, XQ, wQ, TQ, zQ, FQ) {
      const PQ = QQ.resyncVisited;
      let gQ = PQ.get(QQ.currentRefId);
      if (void 0 === gQ && PQ.set(QQ.currentRefId, gQ = new Set), gQ.add(wQ), void 0 !== TQ && XQ === qQ.ADD && TQ !== zQ) {
        const XQ = TQ[sQ];
        void 0 !== XQ && (QQ.root.removeRef(XQ), FQ?.push({
          ref: WQ,
          refId: QQ.currentRefId,
          op: qQ.DELETE,
          dynamicIndex: wQ,
          value: void 0,
          previousValue: TQ
        }))
      }
    }

    function SX(QQ, WQ, XQ, wQ) {
      const qQ = WQ[sQ];
      if (void 0 === qQ || XQ.has(qQ)) return;
      XQ.add(qQ);
      const TQ = WQ.constructor[Symbol.metadata],
        zQ = TQ?.[lQ];
      if (void 0 === zQ) return;
      const FQ = TQ[AQ];
      for (let sQ = 0; sQ < zQ.length; sQ++) {
        const qQ = zQ[sQ];
        if (void 0 !== FQ && FQ.includes(qQ)) continue;
        const PQ = TQ[qQ],
          gQ = WQ[PQ.name];
        gQ && (hw.is(PQ.type) ? SX(QQ, gQ, XQ, wQ) : tX(QQ, gQ, XQ, wQ))
      }
    }

    function tX(QQ, WQ, XQ, wQ) {
      const TQ = WQ[VQ] ?? WQ,
        zQ = TQ[sQ];
      if (void 0 === zQ || XQ.has(zQ)) return;
      XQ.add(zQ);
      const FQ = QQ.resyncVisited.get(zQ);
      if (void 0 === FQ) return;
      const PQ = QQ.root;
      TQ[jQ](FQ, ((QQ, XQ) => {
        wQ?.push({
          ref: WQ,
          refId: zQ,
          op: qQ.DELETE,
          dynamicIndex: XQ,
          value: void 0,
          previousValue: QQ
        });
        const TQ = QQ?.[sQ];
        void 0 !== TQ && PQ.removeRef(TQ)
      }), (WQ => {
        hw.isSchema(WQ) && SX(QQ, WQ, XQ, wQ)
      }))
    }
    const oX = 1,
      eX = 2,
      nX = 3,
      xX = 4,
      YX = 5;

    function NX(QQ, WQ, XQ, wQ, TQ, zQ, FQ, PQ, gQ) {
      const JQ = QQ.root;
      let rQ;
      if ((WQ & qQ.DELETE) === qQ.DELETE) {
        const QQ = TQ?.[sQ];
        void 0 !== QQ && JQ.removeRef(QQ), WQ !== qQ.DELETE_AND_ADD && XQ[IQ](wQ), rQ = void 0
      }
      if (WQ === qQ.DELETE);
      else if ("string" === typeof zQ) rQ = pW[zQ](FQ, PQ);
      else if (uW(zQ)) rQ = function(QQ, WQ, XQ) {
        return kW(QQ, (0, pW[QQ.wire])(WQ, XQ))
      }(zQ.quantized, FQ, PQ);
      else if (hw.is(zQ)) {
        const XQ = pW.number(FQ, PQ);
        if (rQ = JQ.refs.get(XQ), (WQ & qQ.ADD) === qQ.ADD) {
          const wQ = QQ.getInstanceType(FQ, PQ, zQ);
          rQ || (rQ = QQ.createInstanceOfType(wQ)), JQ.addRef(XQ, rQ, rQ !== TQ || WQ === qQ.DELETE_AND_ADD && rQ === TQ)
        }
      } else {
        const XQ = (jQ = Object.keys(zQ)[0], GW[jQ]),
          wQ = pW.number(FQ, PQ);
        null !== QQ.resyncVisited && function(QQ, WQ) {
          const XQ = QQ.resyncVisited;
          XQ.has(WQ) || XQ.set(WQ, new Set)
        }(QQ, wQ);
        const IQ = JQ.refs.has(wQ) ? TQ || JQ.refs.get(wQ) : XQ.constructor.initializeForDecoder();
        if (rQ = IQ.clone(!0), rQ[yQ] = Object.values(zQ)[0], TQ) {
          let QQ = TQ[sQ];
          if (void 0 !== QQ && wQ !== QQ) {
            (WQ & qQ.DELETE) !== qQ.DELETE && JQ.removeRef(QQ);
            const XQ = TQ.entries();
            let wQ;
            for (;
              (wQ = XQ.next()) && !wQ.done;) {
              const [WQ, XQ] = wQ.value;
              "object" === typeof XQ && (QQ = XQ[sQ]), gQ?.push({
                ref: TQ,
                refId: QQ,
                op: qQ.DELETE,
                field: WQ,
                value: void 0,
                previousValue: XQ
              })
            }
          }
        }
        JQ.addRef(wQ, rQ, IQ !== TQ || WQ === qQ.DELETE_AND_ADD && IQ === TQ)
      }
      var jQ;
      return rQ
    }
    const ZX = function(QQ, WQ, XQ, wQ, qQ) {
        const TQ = WQ[XQ.offset++],
          zQ = wQ.constructor[Symbol.metadata],
          sQ = TQ >> 6 << 6,
          FQ = TQ % (sQ || 255),
          PQ = zQ[FQ];
        if (void 0 === PQ) return console.warn("@colyseus/schema: field not defined at", {
          index: FQ,
          ref: wQ.constructor.name,
          metadata: zQ
        }), -1;
        const gQ = !0 === PQ.deprecated,
          JQ = gQ ? void 0 : wQ[rQ](FQ),
          IQ = NX(QQ, sQ, wQ, FQ, JQ, PQ.type, WQ, XQ, qQ);
        gQ || (null !== IQ && void 0 !== IQ && (wQ[PQ.name] = IQ), JQ !== IQ && qQ?.push({
          ref: wQ,
          refId: QQ.currentRefId,
          op: sQ,
          field: PQ.name,
          value: IQ,
          previousValue: JQ
        }))
      },
      OX = function(QQ, WQ, XQ, wQ, TQ) {
        const zQ = wQ[VQ] ?? wQ,
          sQ = WQ[XQ.offset++];
        if (sQ === qQ.CLEAR) return QQ.removeChildRefs(zQ, TQ), void zQ.clear();
        const FQ = pW.number(WQ, XQ),
          PQ = zQ[yQ],
          gQ = zQ.constructor.COLLECTION_KIND;
        let JQ;
        (sQ & qQ.ADD) === qQ.ADD ? gQ === oX ? (JQ = pW.string(WQ, XQ), zQ.setIndex(FQ, JQ)) : JQ = FQ : JQ = zQ.getIndex(FQ);
        const IQ = zQ[rQ](FQ),
          jQ = NX(QQ, sQ, wQ, FQ, IQ, PQ, WQ, XQ, TQ);
        if (null !== QQ.resyncVisited && fX(QQ, wQ, sQ, JQ, IQ, jQ, TQ), null !== jQ && void 0 !== jQ) switch (gQ) {
          case oX:
            zQ.$items.set(JQ, jQ);
            break;
          case eX:
            zQ.$setAt(FQ, jQ, null !== QQ.resyncVisited && sQ === qQ.ADD ? qQ.REPLACE : sQ);
            break;
          case nX:
          case xX:
          case YX:
            zQ.$items.has(FQ) || (zQ.$items.set(FQ, jQ), "number" === typeof zQ.$refId && FQ >= zQ.$refId && (zQ.$refId = FQ + 1));
            break;
          default:
            console.warn(`@colyseus/schema: missing COLLECTION_KIND on ${zQ.constructor?.name} \u2014 item at index ${FQ} was not stored.`)
        }
        IQ !== jQ && TQ?.push({
          ref: wQ,
          refId: QQ.currentRefId,
          op: sQ,
          dynamicIndex: JQ,
          value: jQ,
          previousValue: IQ
        })
      },
      KX = function(QQ, WQ, XQ, wQ, TQ) {
        const zQ = wQ[VQ] ?? wQ;
        let sQ, FQ = WQ[XQ.offset++];
        if (FQ === qQ.CLEAR) return QQ.removeChildRefs(zQ, TQ), void zQ.clear();
        if (FQ === qQ.REVERSE) return void zQ.items.reverse();
        if (FQ === qQ.DELETE_BY_REFID) {
          const FQ = pW.number(WQ, XQ),
            PQ = QQ.root.refs.get(FQ);
          if (void 0 === PQ) return;
          if (QQ.root.removeRef(FQ), sQ = zQ.findIndex((QQ => QQ === PQ)), -1 === sQ) return;
          return zQ[IQ](sQ), void TQ?.push({
            ref: wQ,
            refId: QQ.currentRefId,
            op: qQ.DELETE,
            dynamicIndex: sQ,
            value: void 0,
            previousValue: PQ
          })
        }
        if (FQ === qQ.ADD_BY_REFID) {
          const wQ = pW.number(WQ, XQ),
            qQ = QQ.root.refs.get(wQ);
          qQ && (sQ = zQ.findIndex((QQ => QQ === qQ))), -1 !== sQ && void 0 !== sQ || (sQ = zQ.length)
        } else sQ = pW.number(WQ, XQ);
        const PQ = zQ[yQ];
        let gQ = sQ;
        const JQ = zQ.items[sQ],
          rQ = NX(QQ, FQ, wQ, sQ, JQ, PQ, WQ, XQ, TQ);
        null !== QQ.resyncVisited && fX(QQ, wQ, FQ, sQ, JQ, rQ, TQ), null !== rQ && void 0 !== rQ && rQ !== JQ && zQ.$setAt(sQ, rQ, null !== QQ.resyncVisited && FQ === qQ.ADD ? qQ.REPLACE : FQ), JQ !== rQ && TQ?.push({
          ref: wQ,
          refId: QQ.currentRefId,
          op: FQ,
          dynamicIndex: gQ,
          value: rQ,
          previousValue: JQ
        })
      };
    class mX extends Error {}

    function MX(QQ, WQ, XQ, wQ) {
      if (!(QQ instanceof WQ)) throw new mX(`a '${WQ.name}' was expected, but '${QQ&&QQ.constructor.name}' was provided in ${XQ.constructor.name}#${wQ}`)
    }
    const Qw = (QQ, WQ) => {
        const XQ = QQ.toString(),
          wQ = WQ.toString();
        return XQ < wQ ? -1 : XQ > wQ ? 1 : 0
      },
      Ww = {
        get: (QQ, WQ) => "symbol" === typeof WQ || isNaN(WQ) ? Reflect.get(QQ, WQ) : QQ.items[WQ],
        set: (QQ, WQ, XQ) => {
          if ("symbol" !== typeof WQ && !isNaN(WQ)) {
            if (void 0 === XQ || null === XQ) QQ.$deleteAt(WQ);
            else {
              let wQ;
              if (XQ[BQ]) {
                MX(XQ, QQ[yQ], QQ, WQ);
                const TQ = QQ.items[WQ];
                QQ.isMovingItems ? (wQ = QQ.$wireIndex(Number(WQ)), void 0 !== TQ ? XQ[BQ].isNew ? QQ[BQ].indexedOperation(wQ, qQ.MOVE_AND_ADD) : (QQ[BQ].getChange(wQ) & qQ.DELETE) === qQ.DELETE ? QQ[BQ].indexedOperation(wQ, qQ.DELETE_AND_MOVE) : QQ[BQ].indexedOperation(wQ, qQ.MOVE) : XQ[BQ].isNew && QQ[BQ].indexedOperation(wQ, qQ.ADD), XQ[BQ].setParent(QQ, QQ[BQ].root, wQ)) : wQ = QQ.$changeAt(Number(WQ), XQ), void 0 !== TQ && TQ[BQ].root?.remove(TQ[BQ])
              } else wQ = QQ.$changeAt(Number(WQ), XQ);
              QQ.items[WQ] = XQ, void 0 !== wQ && (QQ.tmpItems[wQ] = XQ)
            }
            return !0
          }
          return Reflect.set(QQ, WQ, XQ)
        },
        deleteProperty: (QQ, WQ) => ("number" === typeof WQ ? QQ.$deleteAt(WQ) : delete QQ[WQ], !0),
        has: (QQ, WQ) => "symbol" === typeof WQ || isNaN(Number(WQ)) ? Reflect.has(QQ, WQ) : Reflect.has(QQ.items, WQ)
      };
    class Xw {
      [BQ];
      [sQ];
      [VQ];
      [yQ];
      items = [];
      tmpItems = [];
      deletedIndexes = [];
      isMovingItems = !1;
      _needsCompaction = !1;
      static[PQ] = kX;
      static[gQ] = KX;
      static COLLECTION_KIND = eX;
      static[JQ](QQ, WQ, XQ) {
        if (!XQ) return !0;
        const wQ = QQ[VQ] ?? QQ;
        return "string" === typeof wQ[yQ] || XQ.isChangeTreeVisible(wQ.tmpItems[WQ]?.[BQ])
      }
      static is(QQ) {
        return Array.isArray(QQ) || void 0 !== QQ.array
      }
      static from(QQ) {
        return new Xw(...Array.from(QQ))
      }
      constructor() {
        this[yQ] = void 0, this[VQ] = this;
        const QQ = new Proxy(this, Ww);
        return Object.defineProperty(this, BQ, {
          value: new iX(QQ, this),
          enumerable: !1,
          writable: !0
        }), arguments.length > 0 && this.push(...arguments), QQ
      }
      static initializeForDecoder() {
        const QQ = Object.create(Xw.prototype);
        QQ.items = [], QQ.isMovingItems = !1, QQ._needsCompaction = !1, QQ[yQ] = void 0, QQ[VQ] = QQ;
        const WQ = new Proxy(QQ, Ww);
        return AX(QQ, WQ), WQ
      }
      set length(QQ) {
        0 === QQ ? this.clear() : QQ < this.items.length ? this.splice(QQ, this.length - QQ) : console.warn("ArraySchema: can't set .length to a higher value than its length.")
      }
      get length() {
        return this.items.length
      }
      pauseTracking() {
        this[BQ].pause()
      }
      resumeTracking() {
        this[BQ].resume()
      }
      untracked(QQ) {
        return this[BQ].untracked(QQ)
      }
      get isTrackingPaused() {
        return this[BQ].paused
      }
      push() {
        const QQ = this[VQ],
          WQ = QQ.items,
          XQ = QQ.tmpItems,
          wQ = QQ[BQ],
          TQ = QQ[yQ];
        let zQ = XQ.length;
        for (let sQ = 0, FQ = arguments.length; sQ < FQ; sQ++, zQ++) {
          const FQ = sQ < 0 || arguments.length <= sQ ? void 0 : arguments[sQ];
          if (void 0 === FQ || null === FQ) return;
          "object" === typeof FQ && TQ && MX(FQ, TQ, QQ, sQ), wQ.indexedOperation(zQ, qQ.ADD), WQ.push(FQ), XQ.push(FQ), FQ[BQ]?.setParent(this, wQ.root, zQ)
        }
        return zQ
      }
      pop() {
        const QQ = this[VQ],
          WQ = QQ.tmpItems,
          XQ = QQ.deletedIndexes;
        let wQ = -1;
        for (let TQ = WQ.length - 1; TQ >= 0; TQ--)
          if (!0 !== XQ[TQ]) {
            wQ = TQ;
            break
          } if (wQ < 0) return;
        const qQ = QQ.$isUnsentAdd(wQ);
        return QQ[BQ].delete(wQ), qQ ? QQ.$cancelAdd(wQ) : XQ[wQ] = !0, QQ.items.pop()
      }
      at(QQ) {
        return QQ < 0 && (QQ += this.length), this.items[QQ]
      }
      $wireIndex(QQ) {
        const WQ = this.deletedIndexes;
        if (0 === WQ.length) return QQ;
        const XQ = this.tmpItems;
        let wQ = 0;
        for (let qQ = 0; qQ < XQ.length; qQ++)
          if (!0 !== WQ[qQ]) {
            if (wQ === QQ) return qQ;
            wQ++
          } return XQ.length + (QQ - wQ)
      }
      $isUnsentAdd(QQ) {
        const WQ = this[BQ];
        return 0 === (576 & WQ.flags) && !WQ.paused && "string" !== typeof this[yQ] && WQ.operationAt(QQ) === qQ.ADD
      }
      $cancelAdd(QQ) {
        let WQ = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        const XQ = this[BQ],
          wQ = this.tmpItems[QQ];
        this.tmpItems.splice(QQ, 1), this.deletedIndexes.length > 0 && this.deletedIndexes.splice(QQ, 1), XQ.removeAt(QQ, 1);
        const qQ = wQ?.[BQ];
        void 0 !== qQ && void 0 === qQ.root && qQ.removeParent(this), WQ && this.$reindexChildren(QQ)
      }
      $reindexChildren(QQ, WQ) {
        if (!this[BQ].hasFilteredFields) return;
        if ("string" === typeof this[yQ]) return;
        const XQ = this.tmpItems,
          wQ = XQ.length;
        if (void 0 !== WQ)
          for (; QQ < wQ && XQ[QQ] === WQ[QQ];) QQ++;
        for (let qQ = QQ; qQ < wQ; qQ++) XQ[qQ]?.[BQ]?.setParentIndex(this, qQ)
      }
      $changeAt(QQ, WQ) {
        if (void 0 === WQ || null === WQ) return void console.error("ArraySchema items cannot be null nor undefined; Use `splice(index, 1)` instead.");
        if (this.items[QQ] === WQ) return;
        const XQ = void 0 !== this.items[QQ] ? "object" === typeof WQ ? qQ.DELETE_AND_ADD : qQ.REPLACE : qQ.ADD,
          wQ = this.$wireIndex(QQ),
          TQ = this[BQ];
        return TQ.change(wQ, XQ), WQ[BQ]?.setParent(this, TQ.root, wQ), wQ
      }
      $deleteAt(QQ, WQ) {
        this[BQ].delete(this.$wireIndex(QQ), WQ)
      }
      $setAt(QQ, WQ, XQ) {
        XQ === qQ.ADD && void 0 !== this.items[QQ] ? this.items.splice(QQ, 0, WQ) : XQ === qQ.DELETE_AND_MOVE ? (this.items.splice(QQ, 1), this.items[QQ] = WQ) : (QQ > this.items.length && (this._needsCompaction = !0), this.items[QQ] = WQ)
      }
      clear() {
        const QQ = this[VQ];
        if (0 === QQ.items.length) return;
        const WQ = QQ[BQ];
        WQ.forEachChild(((QQ, XQ) => {
          WQ.root?.remove(QQ)
        })), WQ.discard(), WQ.operation(qQ.CLEAR), QQ.items.length = 0, QQ.tmpItems.length = 0
      } [pQ]() {
        const QQ = this[VQ] ?? this,
          WQ = QQ[BQ];
        if (WQ.isStreamCollection) throw new Error("@colyseus/schema: cannot reset a streamed ArraySchema (pooling not supported).");
        const XQ = QQ.items;
        for (let wQ = 0; wQ < XQ.length; wQ++) XQ[wQ]?.[pQ]?.();
        QQ.items.length = 0, QQ.tmpItems.length = 0, QQ.deletedIndexes.length = 0, WQ.recycle(), QQ[sQ] = void 0
      }
      concat() {
        return new Xw(...this.items.concat(...arguments))
      }
      join(QQ) {
        return this.items.join(QQ)
      }
      reverse() {
        const QQ = this[VQ],
          WQ = QQ[BQ];
        if (WQ.has() || QQ.deletedIndexes.length > 0) {
          const WQ = QQ.items.slice().reverse();
          return this.clear(), this.push(...WQ), this
        }
        return WQ.operation(qQ.REVERSE), QQ.items.reverse(), QQ.tmpItems.reverse(), QQ.$reindexChildren(0), this
      }
      shift() {
        const QQ = this[VQ],
          WQ = QQ.items;
        if (0 === WQ.length) return;
        const XQ = QQ[BQ],
          wQ = QQ.deletedIndexes;
        let TQ = 0;
        for (; !0 === wQ[TQ];) TQ++;
        const zQ = QQ.$isUnsentAdd(TQ);
        return XQ.delete(TQ, qQ.DELETE), zQ ? QQ.$cancelAdd(TQ) : wQ[TQ] = !0, WQ.shift()
      }
      slice(QQ, WQ) {
        const XQ = new Xw;
        return XQ.push(...this.items.slice(QQ, WQ)), XQ
      }
      sort() {
        let QQ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Qw;
        const WQ = this[VQ];
        WQ.isMovingItems = !0;
        const XQ = WQ[BQ];
        return WQ.items.sort(QQ).forEach(((QQ, WQ) => XQ.change(WQ, qQ.REPLACE))), WQ.tmpItems.sort(QQ), WQ.$reindexChildren(0), WQ.isMovingItems = !1, this
      }
      splice(QQ, WQ) {
        const XQ = this[VQ],
          wQ = XQ[BQ],
          TQ = XQ.items,
          zQ = XQ.tmpItems,
          sQ = XQ.deletedIndexes,
          FQ = TQ.length,
          PQ = zQ.length;
        for (var gQ = arguments.length, JQ = new Array(gQ > 2 ? gQ - 2 : 0), rQ = 2; rQ < gQ; rQ++) JQ[rQ - 2] = arguments[rQ];
        const IQ = JQ.length,
          jQ = [];
        for (let qQ = 0; qQ < PQ; qQ++) !0 !== sQ[qQ] && jQ.push(qQ);
        let yQ;
        if (FQ > QQ) {
          void 0 === WQ && (WQ = FQ - QQ);
          for (let TQ = QQ; TQ < QQ + WQ; TQ++) {
            const QQ = jQ[TQ],
              WQ = XQ.$isUnsentAdd(QQ);
            wQ.delete(QQ, qQ.DELETE), WQ ? (yQ ??= []).push(QQ) : sQ[QQ] = !0
          }
        } else WQ = 0;
        if (IQ > 0) {
          const TQ = jQ[QQ] ?? FQ,
            PQ = Math.min(IQ, WQ);
          for (let QQ = 0; QQ < PQ; QQ++) {
            const WQ = TQ + QQ;
            let XQ;
            const FQ = void 0 !== yQ ? yQ.indexOf(WQ) : -1; - 1 !== FQ ? (yQ.splice(FQ, 1), XQ = qQ.ADD) : XQ = sQ[WQ] ? qQ.DELETE_AND_ADD : qQ.ADD, wQ.indexedOperation(WQ, XQ), zQ[WQ] = JQ[QQ], sQ[WQ] = !1, JQ[QQ][BQ]?.setParent(this, wQ.root, WQ)
          }
          const gQ = IQ - PQ;
          if (gQ > 0) {
            const QQ = TQ + PQ;
            wQ.insertAt(QQ, gQ);
            for (let WQ = 0; WQ < gQ; WQ++) JQ[PQ + WQ][BQ]?.setParent(this, wQ.root, QQ + WQ);
            sQ.length > 0 && sQ.splice(QQ, 0, ...new Array(gQ).fill(!1)), zQ.splice(QQ, 0, ...JQ.slice(PQ)), XQ.$reindexChildren(QQ + gQ)
          }
        }
        if (void 0 !== yQ && yQ.length > 0) {
          for (let QQ = yQ.length - 1; QQ >= 0; QQ--) XQ.$cancelAdd(yQ[QQ], !1);
          XQ.$reindexChildren(yQ[0])
        }
        return wQ.root?.enqueueChangeTree(wQ), TQ.splice(QQ, WQ, ...JQ)
      }
      unshift() {
        const QQ = this[VQ],
          WQ = QQ[BQ];
        WQ.unshift(arguments.length);
        for (let wQ = 0; wQ < arguments.length; wQ++)(wQ < 0 || arguments.length <= wQ ? void 0 : arguments[wQ])?.[BQ]?.setParent(this, WQ.root, wQ);
        const XQ = QQ.deletedIndexes;
        return XQ.length > 0 && XQ.unshift(...new Array(arguments.length).fill(!1)), QQ.tmpItems.unshift(...arguments), QQ.$reindexChildren(arguments.length), QQ.items.unshift(...arguments)
      }
      indexOf(QQ, WQ) {
        return this.items.indexOf(QQ, WQ)
      }
      lastIndexOf(QQ) {
        let WQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.length - 1;
        return this.items.lastIndexOf(QQ, WQ)
      }
      every(QQ, WQ) {
        return this.items.every(QQ, WQ)
      }
      some(QQ, WQ) {
        return this.items.some(QQ, WQ)
      }
      forEach(QQ, WQ) {
        return this.items.forEach(QQ, WQ)
      }
      map(QQ, WQ) {
        return this.items.map(QQ, WQ)
      }
      filter(QQ, WQ) {
        return this.items.filter(QQ, WQ)
      }
      reduce(QQ, WQ) {
        return this.items.reduce.apply(this.items, arguments)
      }
      reduceRight(QQ, WQ) {
        return this.items.reduceRight.apply(this.items, arguments)
      }
      find(QQ, WQ) {
        return this.items.find(QQ, WQ)
      }
      findIndex(QQ, WQ) {
        return this.items.findIndex(QQ, WQ)
      }
      fill(QQ, WQ, XQ) {
        throw new Error("ArraySchema#fill() not implemented")
      }
      copyWithin(QQ, WQ, XQ) {
        throw new Error("ArraySchema#copyWithin() not implemented")
      }
      toString() {
        return this.items.toString()
      }
      toLocaleString() {
        return this.items.toLocaleString()
      } [Symbol.iterator]() {
        return this.items[Symbol.iterator]()
      }
      static get[Symbol.species]() {
        return Xw
      } [Symbol.unscopables];
      entries() {
        return this.items.entries()
      }
      keys() {
        return this.items.keys()
      }
      values() {
        return this.items.values()
      }
      includes(QQ, WQ) {
        return this.items.includes(QQ, WQ)
      }
      flatMap(QQ, WQ) {
        throw new Error("ArraySchema#flatMap() is not supported.")
      }
      flat(QQ) {
        throw new Error("ArraySchema#flat() is not supported.")
      }
      findLast() {
        return this.items.findLast.apply(this.items, arguments)
      }
      findLastIndex() {
        for (var QQ = arguments.length, WQ = new Array(QQ), XQ = 0; XQ < QQ; XQ++) WQ[XQ] = arguments[XQ];
        return this.items.findLastIndex.apply(this.items, arguments)
      }
      with(QQ, WQ) {
        const XQ = this.items.slice();
        return QQ < 0 && (QQ += this.length), XQ[QQ] = WQ, new Xw(...XQ)
      }
      toReversed() {
        return this.items.slice().reverse()
      }
      toSorted(QQ) {
        return this.items.slice().sort(QQ)
      }
      toSpliced(QQ, WQ) {
        for (var XQ = arguments.length, wQ = new Array(XQ > 2 ? XQ - 2 : 0), qQ = 2; qQ < XQ; qQ++) wQ[qQ - 2] = arguments[qQ];
        const TQ = this.items.slice();
        return TQ.splice.apply(TQ, arguments), TQ
      }
      shuffle() {
        return this.move((QQ => {
          let WQ = this.items.length;
          for (; 0 != WQ;) {
            let QQ = Math.floor(Math.random() * WQ);
            WQ--, [this[WQ], this[QQ]] = [this[QQ], this[WQ]]
          }
        }))
      }
      move(QQ) {
        return this.isMovingItems = !0, QQ(this), this.isMovingItems = !1, this
      } [rQ](QQ) {
        let WQ = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        const XQ = this[VQ] ?? this;
        return WQ || XQ.deletedIndexes[QQ] ? XQ.items[QQ] : XQ.tmpItems[QQ] || XQ.items[QQ]
      } [IQ](QQ) {
        const WQ = this[VQ] ?? this;
        WQ.items[QQ] = void 0, WQ._needsCompaction = !0
      } [DQ]() {
        const QQ = this.tmpItems;
        this.tmpItems = this.items.slice(), this.deletedIndexes.length > 0 && (this.$reindexChildren(0, QQ), this.deletedIndexes.length = 0)
      } [GQ]() {
        const QQ = this[VQ] ?? this;
        QQ._needsCompaction && (QQ._needsCompaction = !1, QQ.items = QQ.items.filter((QQ => void 0 !== QQ)))
      } [jQ](QQ, WQ, XQ) {
        const wQ = this[VQ] ?? this,
          qQ = wQ.items;
        let TQ = !1;
        for (let zQ = 0; zQ < qQ.length; zQ++) {
          const sQ = qQ[zQ];
          QQ.has(zQ) ? XQ(sQ) : (TQ = !0, WQ(sQ, zQ), wQ[IQ](zQ))
        }
        TQ && wQ[GQ]()
      }
      toArray() {
        return this.items.slice(0)
      }
      toJSON() {
        return this.toArray().map((QQ => "function" === typeof QQ.toJSON ? QQ.toJSON() : QQ))
      }
      clone(QQ) {
        let WQ;
        return QQ ? (WQ = new Xw, WQ.push(...this.items)) : WQ = new Xw(...this.map((QQ => QQ[BQ] ? QQ.clone() : QQ))), WQ
      }
    }
    bW("array", {
      constructor: Xw
    });
    class ww {
      keyByIndex = new Map;
      indexByKey = Object.create(null);
      nextIndex = 0;
      snapshots;
      indexOf(QQ) {
        const WQ = this.indexByKey[QQ];
        return void 0 === WQ ? void 0 : WQ
      }
      assign(QQ) {
        const WQ = this.nextIndex++;
        return this.indexByKey[QQ] = WQ, this.keyByIndex.set(WQ, QQ), WQ
      }
      snapshot(QQ, WQ) {
        (this.snapshots ??= new Map).set(QQ, WQ)
      }
      forgetSnapshot(QQ) {
        this.snapshots?.delete(QQ)
      }
      snapshotAt(QQ) {
        return this.snapshots?.get(QQ)
      }
      setIndex(QQ, WQ) {
        this.keyByIndex.set(QQ, WQ), this.indexByKey[WQ] = QQ
      }
      keyOf(QQ) {
        return this.keyByIndex.get(QQ)
      }
      cleanupAfterEncode() {
        if (void 0 !== this.snapshots) {
          for (const [QQ] of this.snapshots) {
            const WQ = this.keyByIndex.get(QQ);
            void 0 !== WQ && (delete this.indexByKey[WQ], this.keyByIndex.delete(QQ))
          }
          this.snapshots.clear()
        }
      }
      reset() {
        this.indexByKey = Object.create(null), this.keyByIndex.clear(), this.snapshots?.clear(), this.nextIndex = 0
      }
    }
    class qw {
      [BQ];
      [sQ];
      childType;
      [yQ];
      $items = new Map;
      journal = new ww;
      _stream;
      get maxPerTick() {
        return this._stream?.maxPerTick ?? 32
      }
      set maxPerTick(QQ) {
        (this._stream ??= HW()).maxPerTick = QQ
      }
      get priority() {
        return this._stream?.priority
      }
      set priority(QQ) {
        (this._stream ??= HW()).priority = QQ
      }
      get $indexes() {
        return this.journal.keyByIndex
      }
      get _collectionIndexes() {
        return this.journal.indexByKey
      }
      static[PQ] = CX;
      static[gQ] = OX;
      static COLLECTION_KIND = oX;
      static[JQ](QQ, WQ, XQ) {
        if (!XQ || "string" === typeof QQ[yQ]) return !0;
        const wQ = QQ[rQ](WQ) ?? QQ.journal.snapshotAt(WQ);
        return XQ.isChangeTreeVisible(wQ[BQ])
      }
      static is(QQ) {
        return void 0 !== QQ.map
      }
      constructor(QQ) {
        if (Object.defineProperty(this, BQ, {
            value: new iX(this),
            enumerable: !1,
            writable: !0
          }), this[yQ] = void 0, QQ)
          if (QQ instanceof Map || QQ instanceof qw) QQ.forEach(((QQ, WQ) => this.set(WQ, QQ)));
          else
            for (const WQ in QQ) this.set(WQ, QQ[WQ])
      }
      static initializeForDecoder() {
        const QQ = Object.create(qw.prototype);
        return QQ.$items = new Map, QQ.journal = new ww, QQ[yQ] = void 0, AX(QQ), QQ
      } [Symbol.iterator]() {
        return this.$items[Symbol.iterator]()
      }
      get[Symbol.toStringTag]() {
        return this.$items[Symbol.toStringTag]
      }
      static get[Symbol.species]() {
        return qw
      }
      set(QQ, WQ) {
        if (void 0 === WQ || null === WQ) throw new Error(`MapSchema#set('${QQ}', ${WQ}): trying to set ${WQ} value on '${QQ}'.`);
        "object" === typeof WQ && this[yQ] && MX(WQ, this[yQ], this, QQ), QQ = QQ.toString();
        const XQ = this[BQ],
          wQ = void 0 !== WQ[BQ],
          TQ = this.journal;
        let zQ, sQ = TQ.indexOf(QQ);
        if (void 0 !== sQ) {
          zQ = qQ.REPLACE;
          const XQ = this.$items.get(QQ);
          if (XQ === WQ) return;
          wQ && (zQ = qQ.DELETE_AND_ADD, void 0 !== XQ && XQ[BQ].root?.remove(XQ[BQ])), void 0 !== TQ.snapshotAt(sQ) && TQ.forgetSnapshot(sQ)
        } else sQ = TQ.assign(QQ), zQ = qQ.ADD;
        return this.$items.set(QQ, WQ), zQ === qQ.ADD && XQ.isStreamCollection ? void 0 !== XQ.root && lW(this, XQ.root, sQ) : XQ.change(sQ, zQ), wQ && WQ[BQ].setParent(this, XQ.root, sQ), this
      }
      get(QQ) {
        return this.$items.get(QQ)
      }
      getOrInsert(QQ, WQ) {
        return this.$items.has(QQ) ? this.$items.get(QQ) : (this.set(QQ, WQ), WQ)
      }
      getOrInsertComputed(QQ, WQ) {
        if (this.$items.has(QQ)) return this.$items.get(QQ);
        const XQ = WQ(QQ);
        return this.set(QQ, XQ), XQ
      }
      delete(QQ) {
        if (!this.$items.has(QQ)) return !1;
        const WQ = this.journal.indexOf(QQ),
          XQ = this.$items.get(QQ),
          wQ = this[BQ];
        if (wQ.isStreamCollection) {
          const qQ = wQ.root;
          let TQ = !1;
          return void 0 !== qQ && (TQ = hW(this, qQ, this[sQ], WQ)), void 0 !== XQ?.[BQ] && qQ?.remove(XQ[BQ]), this.$items.delete(QQ), TQ || this.journal.snapshot(WQ, XQ), !0
        }
        return this.journal.snapshot(WQ, XQ), wQ.delete(WQ), this.$items.delete(QQ)
      }
      clear() {
        const QQ = this[BQ];
        QQ.discard(), QQ.forEachChild(((WQ, XQ) => {
          QQ.root?.remove(WQ)
        })), this.journal.reset(), this.$items.clear(), QQ.operation(qQ.CLEAR)
      } [pQ]() {
        const QQ = this[BQ];
        if (QQ.isStreamCollection) throw new Error("@colyseus/schema: cannot reset a streamed MapSchema (pooling not supported).");
        this.$items.forEach((QQ => QQ?.[pQ]?.())), this.$items.clear(), this.journal.reset(), QQ.recycle(), this[sQ] = void 0
      }
      has(QQ) {
        return this.$items.has(QQ)
      }
      forEach(QQ) {
        this.$items.forEach(QQ)
      }
      entries() {
        return this.$items.entries()
      }
      keys() {
        return this.$items.keys()
      }
      values() {
        return this.$items.values()
      }
      get size() {
        return this.$items.size
      }
      pauseTracking() {
        this[BQ].pause()
      }
      resumeTracking() {
        this[BQ].resume()
      }
      untracked(QQ) {
        return this[BQ].untracked(QQ)
      }
      get isTrackingPaused() {
        return this[BQ].paused
      }
      setIndex(QQ, WQ) {
        this.journal.setIndex(QQ, WQ)
      }
      getIndex(QQ) {
        return this.journal.keyOf(QQ)
      } [rQ](QQ) {
        const WQ = this.journal.keyOf(QQ);
        return void 0 !== WQ ? this.$items.get(WQ) : void 0
      } [IQ](QQ) {
        const WQ = this.journal.keyOf(QQ);
        void 0 !== WQ && (this.$items.delete(WQ), this.journal.keyByIndex.delete(QQ))
      } [jQ](QQ, WQ, XQ) {
        let wQ = null;
        if (this.$items.forEach(((qQ, TQ) => {
            QQ.has(TQ) ? XQ(qQ) : ((wQ ??= new Set).add(TQ), WQ(qQ, TQ))
          })), null !== wQ) {
          wQ.forEach((QQ => {
            this.$items.delete(QQ), delete this.journal.indexByKey[QQ]
          }));
          const QQ = [];
          this.journal.keyByIndex.forEach(((WQ, XQ) => {
            wQ.has(WQ) && QQ.push(XQ)
          }));
          for (let WQ = 0; WQ < QQ.length; WQ++) this.journal.keyByIndex.delete(QQ[WQ])
        }
      } [DQ]() {
        this.journal.cleanupAfterEncode()
      }
      _dropView(QQ) {
        RW(this, QQ)
      }
      _unregister() {}
      toJSON() {
        return Object.fromEntries(Array.from(this, (QQ => {
          let [WQ, XQ] = QQ;
          return [WQ, "function" === typeof XQ.toJSON ? XQ.toJSON() : XQ]
        })))
      }
      clone(QQ) {
        let WQ;
        return QQ ? WQ = Object.assign(new qw, this) : (WQ = new qw, this.forEach(((QQ, XQ) => {
          QQ[BQ] ? WQ.set(XQ, QQ.clone()) : WQ.set(XQ, QQ)
        }))), WQ
      }
    }
    bW("map", {
      constructor: qw
    });
    class Tw {
      [BQ];
      [sQ];
      [yQ];
      $items = new Map;
      deletedItems = {};
      $refId = 0;
      _stream;
      get maxPerTick() {
        return this._stream?.maxPerTick ?? 32
      }
      set maxPerTick(QQ) {
        (this._stream ??= HW()).maxPerTick = QQ
      }
      get priority() {
        return this._stream?.priority
      }
      set priority(QQ) {
        (this._stream ??= HW()).priority = QQ
      }
      static[PQ] = uX;
      static[gQ] = OX;
      static COLLECTION_KIND = xX;
      static[JQ](QQ, WQ, XQ) {
        return !XQ || "string" === typeof QQ[yQ] || XQ.isChangeTreeVisible((QQ[rQ](WQ) ?? QQ.deletedItems[WQ])[BQ])
      }
      static is(QQ) {
        return void 0 !== QQ.collection
      }
      constructor(QQ) {
        Object.defineProperty(this, BQ, {
          value: new iX(this),
          enumerable: !1,
          writable: !0
        }), this[yQ] = void 0, QQ && QQ.forEach((QQ => this.add(QQ)))
      }
      static initializeForDecoder() {
        const QQ = Object.create(Tw.prototype);
        return QQ.$items = new Map, QQ.deletedItems = {}, QQ.$refId = 0, QQ[yQ] = void 0, AX(QQ), QQ
      }
      add(QQ) {
        const WQ = this.$refId++,
          XQ = this[BQ];
        return this.$items.set(WQ, QQ), XQ.isStreamCollection ? void 0 !== XQ.root && lW(this, XQ.root, WQ) : XQ.change(WQ), void 0 !== QQ[BQ] && QQ[BQ].setParent(this, XQ.root, WQ), WQ
      }
      at(QQ) {
        const WQ = Array.from(this.$items.keys())[QQ];
        return this.$items.get(WQ)
      }
      entries() {
        return this.$items.entries()
      }
      delete(QQ) {
        const WQ = this.$items.entries();
        let XQ, wQ;
        for (;
          (wQ = WQ.next()) && !wQ.done;)
          if (QQ === wQ.value[1]) {
            XQ = wQ.value[0];
            break
          } if (void 0 === XQ) return !1;
        const qQ = this[BQ];
        if (qQ.isStreamCollection) {
          const QQ = qQ.root,
            WQ = this.$items.get(XQ);
          return void 0 !== QQ && hW(this, QQ, this[sQ], XQ), void 0 !== WQ?.[BQ] && QQ?.remove(WQ[BQ]), this.deletedItems[XQ] = WQ, this.$items.delete(XQ)
        }
        return this.deletedItems[XQ] = qQ.delete(XQ), this.$items.delete(XQ)
      }
      clear() {
        const QQ = this[BQ];
        QQ.discard(), QQ.forEachChild(((WQ, XQ) => {
          QQ.root?.remove(WQ)
        })), this.$items.clear(), QQ.operation(qQ.CLEAR)
      } [pQ]() {
        const QQ = this[BQ];
        if (QQ.isStreamCollection) throw new Error("@colyseus/schema: cannot reset a streamed CollectionSchema (pooling not supported).");
        this.$items.forEach((QQ => QQ?.[pQ]?.())), this.$items.clear(), this.deletedItems = {}, this.$refId = 0, QQ.recycle(), this[sQ] = void 0
      }
      has(QQ) {
        return Array.from(this.$items.values()).some((WQ => WQ === QQ))
      }
      forEach(QQ) {
        this.$items.forEach(((WQ, XQ, wQ) => QQ(WQ, XQ, this)))
      }
      values() {
        return this.$items.values()
      }
      get size() {
        return this.$items.size
      }
      pauseTracking() {
        this[BQ].pause()
      }
      resumeTracking() {
        this[BQ].resume()
      }
      untracked(QQ) {
        return this[BQ].untracked(QQ)
      }
      get isTrackingPaused() {
        return this[BQ].paused
      } [Symbol.iterator]() {
        return this.$items.values()
      }
      setIndex(QQ, WQ) {}
      getIndex(QQ) {
        return QQ
      } [rQ](QQ) {
        return this.$items.get(QQ)
      } [IQ](QQ) {
        this.$items.delete(QQ)
      } [jQ](QQ, WQ, XQ) {
        let wQ = null;
        if (this.$items.forEach(((qQ, TQ) => {
            QQ.has(TQ) ? XQ(qQ) : ((wQ ??= []).push(TQ), WQ(qQ, TQ))
          })), null !== wQ)
          for (let qQ = 0; qQ < wQ.length; qQ++) this[IQ](wQ[qQ])
      } [DQ]() {
        for (const QQ in this.deletedItems) delete this.deletedItems[QQ]
      }
      _dropView(QQ) {
        RW(this, QQ)
      }
      _unregister() {}
      toArray() {
        return Array.from(this.$items.values())
      }
      toJSON() {
        const QQ = [];
        return this.forEach(((WQ, XQ) => {
          QQ.push("function" === typeof WQ.toJSON ? WQ.toJSON() : WQ)
        })), QQ
      }
      clone(QQ) {
        let WQ;
        return QQ ? WQ = Object.assign(new Tw, this) : (WQ = new Tw, this.forEach((QQ => {
          QQ[BQ] ? WQ.add(QQ.clone()) : WQ.add(QQ)
        }))), WQ
      }
    }
    bW("collection", {
      constructor: Tw
    });
    class zw {
      [BQ];
      [sQ];
      [yQ];
      $items = new Map;
      deletedItems = {};
      $refId = 0;
      _stream;
      get maxPerTick() {
        return this._stream?.maxPerTick ?? 32
      }
      set maxPerTick(QQ) {
        (this._stream ??= HW()).maxPerTick = QQ
      }
      get priority() {
        return this._stream?.priority
      }
      set priority(QQ) {
        (this._stream ??= HW()).priority = QQ
      }
      static[PQ] = uX;
      static[gQ] = OX;
      static COLLECTION_KIND = nX;
      static[JQ](QQ, WQ, XQ) {
        return !XQ || "string" === typeof QQ[yQ] || XQ.isVisible((QQ[rQ](WQ) ?? QQ.deletedItems[WQ])[BQ])
      }
      static is(QQ) {
        return void 0 !== QQ.set
      }
      constructor(QQ) {
        Object.defineProperty(this, BQ, {
          value: new iX(this),
          enumerable: !1,
          writable: !0
        }), this[yQ] = void 0, QQ && QQ.forEach((QQ => this.add(QQ)))
      }
      static initializeForDecoder() {
        const QQ = Object.create(zw.prototype);
        return QQ.$items = new Map, QQ.deletedItems = {}, QQ.$refId = 0, QQ[yQ] = void 0, AX(QQ), QQ
      }
      add(QQ) {
        if (this.has(QQ)) return !1;
        const WQ = this.$refId++,
          XQ = this[BQ];
        return this.$items.set(WQ, QQ), XQ.isStreamCollection ? void 0 !== XQ.root && lW(this, XQ.root, WQ) : XQ.change(WQ, qQ.ADD), void 0 !== QQ[BQ] && QQ[BQ].setParent(this, XQ.root, WQ), WQ
      }
      entries() {
        return this.$items.entries()
      }
      delete(QQ) {
        const WQ = this.$items.entries();
        let XQ, wQ;
        for (;
          (wQ = WQ.next()) && !wQ.done;)
          if (QQ === wQ.value[1]) {
            XQ = wQ.value[0];
            break
          } if (void 0 === XQ) return !1;
        const qQ = this[BQ];
        if (qQ.isStreamCollection) {
          const QQ = qQ.root,
            WQ = this.$items.get(XQ);
          return void 0 !== QQ && hW(this, QQ, this[sQ], XQ), void 0 !== WQ?.[BQ] && QQ?.remove(WQ[BQ]), this.deletedItems[XQ] = WQ, this.$items.delete(XQ)
        }
        return this.deletedItems[XQ] = qQ.delete(XQ), this.$items.delete(XQ)
      }
      clear() {
        const QQ = this[BQ];
        QQ.discard(), this.$items.clear(), QQ.operation(qQ.CLEAR)
      } [pQ]() {
        const QQ = this[BQ];
        if (QQ.isStreamCollection) throw new Error("@colyseus/schema: cannot reset a streamed SetSchema (pooling not supported).");
        this.$items.forEach((QQ => QQ?.[pQ]?.())), this.$items.clear(), this.deletedItems = {}, this.$refId = 0, QQ.recycle(), this[sQ] = void 0
      }
      has(QQ) {
        const WQ = this.$items.values();
        let XQ, wQ = !1;
        for (;
          (XQ = WQ.next()) && !XQ.done;)
          if (QQ === XQ.value) {
            wQ = !0;
            break
          } return wQ
      }
      forEach(QQ) {
        this.$items.forEach(((WQ, XQ, wQ) => QQ(WQ, XQ, this)))
      }
      values() {
        return this.$items.values()
      }
      get size() {
        return this.$items.size
      }
      pauseTracking() {
        this[BQ].pause()
      }
      resumeTracking() {
        this[BQ].resume()
      }
      untracked(QQ) {
        return this[BQ].untracked(QQ)
      }
      get isTrackingPaused() {
        return this[BQ].paused
      } [Symbol.iterator]() {
        return this.$items.values()
      }
      setIndex(QQ, WQ) {}
      getIndex(QQ) {
        return QQ
      } [rQ](QQ) {
        return this.$items.get(QQ)
      } [IQ](QQ) {
        this.$items.delete(QQ)
      } [jQ](QQ, WQ, XQ) {
        let wQ = null;
        if (this.$items.forEach(((qQ, TQ) => {
            QQ.has(TQ) ? XQ(qQ) : ((wQ ??= []).push(TQ), WQ(qQ, TQ))
          })), null !== wQ)
          for (let qQ = 0; qQ < wQ.length; qQ++) this[IQ](wQ[qQ])
      } [DQ]() {
        for (const QQ in this.deletedItems) delete this.deletedItems[QQ]
      }
      _dropView(QQ) {
        RW(this, QQ)
      }
      _unregister() {}
      toArray() {
        return Array.from(this.$items.values())
      }
      toJSON() {
        const QQ = [];
        return this.forEach(((WQ, XQ) => {
          QQ.push("function" === typeof WQ.toJSON ? WQ.toJSON() : WQ)
        })), QQ
      }
      clone(QQ) {
        let WQ;
        return QQ ? WQ = Object.assign(new zw, this) : (WQ = new zw, this.forEach((QQ => {
          QQ[BQ] ? WQ.add(QQ.clone()) : WQ.add(QQ)
        }))), WQ
      }
    }
    bW("set", {
      constructor: zw
    });
    class sw {
      [BQ];
      [sQ];
      [yQ];
      $items = new Map;
      $nextPosition = 0;
      _itemIndex = new Map;
      _stream;
      get maxPerTick() {
        return this._stream?.maxPerTick ?? 32
      }
      set maxPerTick(QQ) {
        (this._stream ??= HW()).maxPerTick = QQ
      }
      get priority() {
        return this._stream?.priority
      }
      set priority(QQ) {
        (this._stream ??= HW()).priority = QQ
      }
      static $isStream = !0;
      static[PQ] = uX;
      static[gQ] = OX;
      static COLLECTION_KIND = YX;
      static[JQ](QQ, WQ, XQ) {
        if (!XQ) return !0;
        const wQ = QQ[rQ](WQ);
        return void 0 !== wQ && XQ.isVisible(wQ[BQ])
      }
      static is(QQ) {
        return QQ && void 0 !== QQ.stream
      }
      constructor() {
        Object.defineProperty(this, BQ, {
          value: new iX(this),
          enumerable: !1,
          writable: !0
        }), this[yQ] = void 0
      }
      static initializeForDecoder() {
        const QQ = Object.create(sw.prototype);
        return QQ.$items = new Map, QQ.$nextPosition = 0, QQ._itemIndex = new Map, QQ[yQ] = void 0, AX(QQ), QQ
      }
      add(QQ) {
        if (this._itemIndex.has(QQ)) return -1;
        const WQ = this.$nextPosition++;
        this.$items.set(WQ, QQ), this._itemIndex.set(QQ, WQ);
        const XQ = this[BQ].root;
        return void 0 !== QQ[BQ] && QQ[BQ].setParent(this, XQ, WQ), void 0 !== XQ && lW(this, XQ, WQ), WQ
      }
      remove(QQ) {
        const WQ = this._itemIndex.get(QQ);
        if (void 0 === WQ) return !1;
        this._itemIndex.delete(QQ), this.$items.delete(WQ);
        const XQ = this[BQ].root;
        return void 0 !== XQ && (hW(this, XQ, this[sQ], WQ), void 0 !== QQ[BQ] && XQ.remove(QQ[BQ])), !0
      }
      has(QQ) {
        return this._itemIndex.has(QQ)
      }
      clear() {
        const QQ = this[BQ].root;
        if (void 0 !== QQ) {
          ! function(QQ, WQ, XQ) {
            const wQ = QQ._stream;
            if (void 0 !== wQ) {
              wQ.broadcastPending.clear();
              for (const QQ of wQ.sentBroadcast) wQ.broadcastDeletes.add(QQ);
              wQ.sentBroadcast.clear(), WQ.forEachActiveView((QQ => {
                wQ.pendingByView.get(QQ.id)?.clear();
                const WQ = wQ.sentByView.get(QQ.id);
                if (void 0 !== WQ && WQ.size > 0) {
                  let wQ = QQ.changes.get(XQ);
                  void 0 === wQ && (wQ = new Map, QQ.changes.set(XQ, wQ));
                  for (const QQ of WQ) wQ.set(QQ, qQ.DELETE);
                  WQ.clear()
                }
              }))
            }
          }(this, QQ, this[sQ]);
          for (const WQ of this.$items.values()) void 0 !== WQ[BQ] && QQ.remove(WQ[BQ])
        }
        this.$items.clear(), this._itemIndex.clear()
      }
      forEach(QQ) {
        for (const [WQ, XQ] of this.$items) QQ(XQ, WQ, this)
      }
      values() {
        return this.$items.values()
      }
      entries() {
        return this.$items.entries()
      } [Symbol.iterator]() {
        return this.$items.values()
      }
      get size() {
        return this.$items.size
      }
      get length() {
        return this.$items.size
      }
      setIndex(QQ, WQ) {}
      getIndex(QQ) {
        return QQ
      } [rQ](QQ) {
        return this.$items.get(QQ)
      } [IQ](QQ) {
        const WQ = this.$items.get(QQ);
        void 0 !== WQ && (this._itemIndex.delete(WQ), this.$items.delete(QQ))
      } [jQ]() {} [DQ]() {}
      toArray() {
        return Array.from(this.$items.values())
      }
      toJSON() {
        const QQ = [];
        return this.forEach((WQ => {
          QQ.push("function" === typeof WQ?.toJSON ? WQ.toJSON() : WQ)
        })), QQ
      }
      clone(QQ) {
        if (QQ) {
          return Object.assign(new sw, this)
        }
        const WQ = new sw;
        return WQ.maxPerTick = this.maxPerTick, this.forEach((QQ => {
          WQ.add("function" === typeof QQ?.clone ? QQ.clone() : QQ)
        })), WQ
      }
      _dropView(QQ) {
        RW(this, QQ)
      }
      _unregister() {}
    }
    bW("stream", {
      constructor: sw
    });
    class Fw {
      [bQ] = !0;
      _type;
      _default = void 0;
      _hasDefault = !1;
      _view = void 0;
      _unreliable = !1;
      _patchOnly = !1;
      _deprecated = !1;
      _deprecatedThrows = !0;
      _fullStateOnly = !1;
      _stream = !1;
      _optional = !1;
      _noSync = !1;
      _streamPriority = void 0;
      constructor(QQ) {
        this._type = QQ
      }
      default (QQ) {
        return this._default = QQ, this._hasDefault = !0, this
      }
      view(QQ) {
        return this._view = QQ ?? -1, this
      }
      unreliable() {
        return this._unreliable = !0, this
      }
      patchOnly() {
        return this._patchOnly = !0, this
      }
      fullStateOnly() {
        return this._fullStateOnly = !0, this
      }
      noSync() {
        return this._noSync = !0, this
      }
      stream() {
        const QQ = this._type;
        if (QQ && "object" === typeof QQ && void 0 !== QQ.array) throw new Error(dW);
        return this._stream = !0, this
      }
      priority(QQ) {
        return this._streamPriority = QQ, this
      }
      deprecated() {
        let QQ = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
        return this._deprecated = !0, this._deprecatedThrows = QQ, this
      }
      optional() {
        return this._optional = !0, this
      }
      toDefinition() {
        return {
          type: this._type,
          default: this._default,
          hasDefault: this._hasDefault,
          view: this._view,
          unreliable: this._unreliable,
          patchOnly: this._patchOnly,
          deprecated: this._deprecated,
          deprecatedThrows: this._deprecatedThrows,
          fullStateOnly: this._fullStateOnly,
          stream: this._stream,
          optional: this._optional,
          noSync: this._noSync,
          streamPriority: this._streamPriority
        }
      }
    }

    function Pw(QQ) {
      return null != QQ && !0 === QQ[bQ]
    }

    function gw(QQ) {
      return () => new Fw(QQ)
    }

    function Jw(QQ) {
      if (Pw(QQ)) {
        const WQ = QQ._type;
        throw new Error(`t.array/map/set/collection(): a t.* builder is not a valid element type \u2014 ${"string"===typeof WQ?`use the type name instead: t.array("${WQ}")`:'collections accept a Schema class or a primitive type name ("string", "number", \u2026)'}.`)
      }
      return QQ
    }

    function rw(QQ) {
      return new Fw({
        quantized: CW(QQ)
      })
    }
    const Iw = Object.freeze({
        string: gw("string"),
        number: gw("number"),
        boolean: gw("boolean"),
        int8: gw("int8"),
        uint8: gw("uint8"),
        int16: gw("int16"),
        uint16: gw("uint16"),
        int32: gw("int32"),
        uint32: gw("uint32"),
        int64: gw("int64"),
        uint64: gw("uint64"),
        float32: gw("float32"),
        float64: gw("float64"),
        bigint64: gw("bigint64"),
        biguint64: gw("biguint64"),
        ref: QQ => new Fw(QQ),
        array: QQ => new Fw({
          array: Jw(QQ)
        }),
        map: QQ => new Fw({
          map: Jw(QQ)
        }),
        set: QQ => new Fw({
          set: Jw(QQ)
        }),
        collection: QQ => new Fw({
          collection: Jw(QQ)
        }),
        stream: QQ => {
          const WQ = new Fw({
            stream: Jw(QQ)
          });
          return WQ._stream = !0, WQ
        },
        quantized: rw,
        angle: QQ => rw({
          min: 0,
          max: 2 * Math.PI,
          mode: "wrap",
          bits: QQ?.bits ?? 16
        })
      }),
      jw = -1;

    function Bw(QQ) {
      return SW.register(QQ), QQ
    }

    function yw() {
      let QQ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : jw;
      return function(WQ, XQ) {
        const wQ = NW.initialize(WQ.constructor);
        NW.setTag(wQ, XQ, QQ)
      }
    }

    function Vw(QQ, WQ) {
      const XQ = NW.initialize(QQ.constructor);
      NW.setUnreliable(XQ, WQ)
    }

    function Dw(QQ, WQ) {
      const XQ = NW.initialize(QQ.constructor);
      NW.setPatchOnly(XQ, WQ)
    }

    function pw(QQ, WQ) {
      const XQ = NW.initialize(QQ.constructor);
      NW.setFullStateOnly(XQ, WQ)
    }

    function Gw(QQ, WQ) {
      return function(XQ, wQ) {
        const qQ = XQ.constructor;
        if (!QQ) throw new Error(`${qQ.name}: @type() reference provided for "${wQ}" is undefined. Make sure you don't have any circular dependencies.`);
        QQ = oW(QQ, `${qQ.name}.${wQ}`), SW.register(qQ);
        const TQ = Object.getPrototypeOf(qQ)[Symbol.metadata],
          zQ = NW.initialize(qQ);
        let sQ = zQ[wQ];
        if (void 0 !== zQ[sQ]) {
          if (zQ[sQ].deprecated) return;
          if (void 0 !== zQ[sQ].type) {
            const QQ = new Error(`@colyseus/schema: Duplicate '${wQ}' definition on '${qQ.name}'.\nCheck @type() annotation`);
            throw new Error(`${QQ.message} ${QQ.stack.split("\n")[4].trim()}`)
          }
        } else sQ = zQ[aQ] ?? (TQ && TQ[aQ]) ?? -1, sQ++;
        if (WQ && WQ.manual) NW.addField(zQ, sQ, wQ, QQ, {
          enumerable: !0,
          configurable: !0,
          writable: !0
        });
        else {
          const {
            complexTypeKlass: WQ,
            childType: XQ
          } = tW(QQ);
          NW.addField(zQ, sQ, wQ, QQ, bw(wQ, sQ, XQ, WQ))
        }
        zQ[vQ][wQ] && Object.defineProperty(XQ, wQ, zQ[vQ][wQ]), ("string" === typeof QQ || uW(QQ)) && (zQ[HQ] || Object.defineProperty(zQ, HQ, {
          value: [],
          enumerable: !1,
          configurable: !0,
          writable: !0
        }), zQ[HQ][sQ] = "string" === typeof QQ ? WW[QQ] : fW(QQ.quantized))
      }
    }
    const Uw = {
      number: "number",
      int8: "number",
      uint8: "number",
      int16: "number",
      uint16: "number",
      int32: "number",
      uint32: "number",
      int64: "number",
      uint64: "number",
      float32: "number",
      float64: "number",
      bigint64: "bigint",
      biguint64: "bigint",
      string: "string",
      boolean: "boolean"
    };

    function bw(QQ, WQ, XQ, wQ) {
      let TQ;
      return TQ = wQ ? function(QQ, WQ, XQ, wQ) {
        const TQ = wQ.constructor === Xw,
          zQ = wQ.constructor === qw;
        return function(QQ) {
          const wQ = this[UQ],
            sQ = wQ[WQ];
          if (QQ !== sQ) {
            if (void 0 !== QQ && null !== QQ) {
              if (!TQ || QQ instanceof Xw)
                if (!zQ || QQ instanceof qw) QQ[yQ] = XQ;
                else {
                  const WQ = new qw;
                  if (WQ[yQ] = XQ, QQ instanceof Map) QQ.forEach(((QQ, XQ) => WQ.set(XQ, QQ)));
                  else
                    for (const XQ in QQ) WQ.set(XQ, QQ[XQ]);
                  QQ = WQ
                }
              else {
                const WQ = new Xw;
                WQ[yQ] = XQ, WQ.push(...QQ), QQ = WQ
              }
              const wQ = this[BQ],
                PQ = this.constructor;
              void 0 !== sQ && null !== sQ && sQ[BQ] ? (wQ.root?.remove(sQ[BQ]), PQ[FQ](wQ, WQ, qQ.DELETE_AND_ADD)) : PQ[FQ](wQ, WQ, qQ.ADD), QQ[BQ]?.setParent(this, wQ.root, WQ)
            } else void 0 !== sQ && null !== sQ && this[BQ].delete(WQ);
            wQ[WQ] = QQ
          }
        }
      }(0, WQ, XQ, wQ) : "string" === typeof XQ ? function(QQ, WQ, XQ) {
        const wQ = Uw[XQ],
          TQ = "string" === XQ,
          zQ = "boolean" === XQ;
        return function(XQ) {
          const sQ = this[UQ],
            PQ = sQ[WQ];
          if (XQ !== PQ) {
            if (void 0 !== XQ && null !== XQ) {
              if (!zQ && void 0 !== wQ && typeof XQ !== wQ && (!TQ || null !== XQ)) {
                const WQ = XQ && XQ.constructor ? ` (${XQ.constructor.name})` : "";
                throw new mX(`a '${wQ}' was expected, but '${JSON.stringify(XQ)}'${WQ} was provided in ${this.constructor.name}#${QQ}`)
              }
              this.constructor[FQ](this[BQ], WQ, qQ.ADD)
            } else void 0 !== PQ && null !== PQ && this[BQ].delete(WQ);
            sQ[WQ] = XQ
          }
        }
      }(QQ, WQ, XQ) : uW(XQ) ? function(QQ, WQ, XQ) {
        return function(wQ) {
          const TQ = this[UQ],
            zQ = TQ[WQ];
          if (void 0 !== wQ && null !== wQ) {
            if ("number" !== typeof wQ) throw new mX(`a 'number' was expected, but '${JSON.stringify(wQ)}' was provided in ${this.constructor.name}#${QQ}`);
            if ((wQ = kW(XQ, LW(XQ, wQ))) === zQ) return;
            this.constructor[FQ](this[BQ], WQ, qQ.ADD)
          } else {
            if (wQ === zQ) return;
            void 0 !== zQ && null !== zQ && this[BQ].delete(WQ)
          }
          TQ[WQ] = wQ
        }
      }(QQ, WQ, XQ.quantized) : function(QQ, WQ, XQ) {
        return function(wQ) {
          const TQ = this[UQ],
            zQ = TQ[WQ];
          if (wQ !== zQ) {
            if (void 0 !== wQ && null !== wQ) {
              MX(wQ, XQ, this, QQ);
              const TQ = this[BQ],
                sQ = this.constructor;
              void 0 !== zQ && null !== zQ && zQ[BQ] ? (TQ.root?.remove(zQ[BQ]), sQ[FQ](TQ, WQ, qQ.DELETE_AND_ADD)) : sQ[FQ](TQ, WQ, qQ.ADD), wQ[BQ]?.setParent(this, TQ.root, WQ)
            } else void 0 !== zQ && null !== zQ && this[BQ].delete(WQ);
            TQ[WQ] = wQ
          }
        }
      }(QQ, WQ, XQ), {
        get: function() {
          return this[UQ][WQ]
        },
        set: TQ,
        enumerable: !0,
        configurable: !0
      }
    }

    function vw() {
      let QQ = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
      return function(WQ, XQ) {
        const wQ = NW.initialize(WQ.constructor);
        NW.setDeprecated(wQ, XQ), QQ && (wQ[vQ] ??= {}, wQ[vQ][XQ] = {
          get: function() {
            throw new Error(`${XQ} is deprecated.`)
          },
          set: function(QQ) {},
          enumerable: !1,
          configurable: !0
        }, Object.defineProperty(WQ, XQ, wQ[vQ][XQ]))
      }
    }
    let dw = !1;

    function Hw(QQ, WQ, XQ) {
      dw || (dw = !0, console.warn("@colyseus/schema: defineTypes() is deprecated and will be removed in a future release. Use schema() with t.* field builders instead \u2192 https://docs.colyseus.io/state/schema"));
      for (let wQ in WQ) Gw(WQ[wQ], XQ)(QQ.prototype, wQ);
      return QQ
    }

    function aw(QQ, WQ) {
      let XQ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : hw;
      if (null == QQ || "object" !== typeof QQ) throw new Error(`schema(): first argument must be a fields object (got ${typeof QQ}).`);
      const wQ = {},
        qQ = {},
        TQ = {},
        zQ = {},
        sQ = (QQ, WQ) => {
          if (WQ.hasDefault)((QQ, WQ) => {
            "function" === typeof WQ ? zQ[QQ] = WQ : WQ && "function" === typeof WQ.clone ? zQ[QQ] = () => WQ.clone() : TQ[QQ] = WQ
          })(QQ, WQ.default);
          else if (!WQ.optional) {
            const XQ = function(QQ) {
              if (QQ && "object" === typeof QQ) {
                if (void 0 !== QQ.array) return () => new Xw;
                if (void 0 !== QQ.map) return () => new qw;
                if (void 0 !== QQ.set) return () => new zw;
                if (void 0 !== QQ.collection) return () => new Tw;
                if (void 0 !== QQ.stream) return () => new sw
              } else if ("function" === typeof QQ && hw.is(QQ) && (!QQ.prototype.initialize || 0 === QQ.prototype.initialize.length)) return () => new QQ
            }(WQ.type);
            XQ && (zQ[QQ] = XQ)
          }
        },
        FQ = {},
        PQ = [],
        gQ = [],
        JQ = {},
        rQ = [],
        IQ = [],
        jQ = {},
        BQ = [];
      for (const UQ in QQ) {
        const XQ = QQ[UQ],
          TQ = `schema(${WQ?`'${WQ}'`:""}): field '${UQ}'`;
        if (Pw(XQ)) {
          const QQ = XQ.toDefinition();
          if (QQ.noSync) {
            if (void 0 !== QQ.view || QQ.unreliable || QQ.patchOnly || QQ.fullStateOnly || QQ.stream) throw new Error(`${TQ} uses .noSync() together with a sync-only modifier (.view/.unreliable/.patchOnly/.fullStateOnly/.stream). A local-only field cannot be synchronized.`);
            sQ(UQ, QQ);
            continue
          }
          if (QQ.patchOnly && QQ.fullStateOnly) throw new Error(`${TQ} uses .patchOnly() together with .fullStateOnly(). Those are the only two delivery channels, so the field would never reach a client \u2014 use .noSync() if that is intended.`);
          const WQ = oW(QQ.type, TQ);
          if ("function" === typeof WQ && !hw.is(WQ)) throw new Error(`${TQ} is a synced ref to non-Schema class '${WQ.name||"(anonymous)"}' \u2014 use .noSync(), or Metadata.setFields().`);
          wQ[UQ] = WQ, void 0 !== QQ.view && (FQ[UQ] = QQ.view), QQ.unreliable && PQ.push(UQ), QQ.patchOnly && gQ.push(UQ), QQ.deprecated && (JQ[UQ] = QQ.deprecatedThrows), QQ.fullStateOnly && rQ.push(UQ), QQ.stream && IQ.push(UQ), void 0 !== QQ.streamPriority && (jQ[UQ] = QQ.streamPriority), QQ.optional && BQ.push(UQ), sQ(UQ, QQ)
        } else {
          if ("function" !== typeof XQ) throw new Error(`${TQ} must be a t.* builder, Schema subclass, or method (got ${typeof XQ}).`);
          hw.is(XQ) ? (wQ[UQ] = XQ, XQ.prototype.initialize && 0 !== XQ.prototype.initialize.length || (zQ[UQ] = () => new XQ)) : qQ[UQ] = XQ
        }
      }
      const yQ = QQ => {
          for (const WQ in TQ) QQ[WQ] = TQ[WQ];
          for (const WQ in zQ) QQ[WQ] = zQ[WQ]()
        },
        VQ = () => {
          const QQ = {};
          return yQ(QQ), QQ
        },
        DQ = "function" === typeof qQ.initialize,
        pQ = qQ.initialize ?? XQ._initialize,
        GQ = class extends XQ {
          constructor() {
            for (var QQ = arguments.length, WQ = new Array(QQ), XQ = 0; XQ < QQ; XQ++) WQ[XQ] = arguments[XQ];
            const qQ = WQ[0];
            void 0 === qQ ? (super(), yQ(this)) : super(Object.assign(VQ(), DQ ? (QQ => {
              const WQ = Object.keys(wQ),
                XQ = {};
              for (const wQ in QQ) WQ.includes(wQ) || (XQ[wQ] = QQ[wQ]);
              return XQ
            })(qQ) : qQ)), pQ && new.target === GQ && pQ.apply(this, WQ)
          }
        };
      WQ && Object.defineProperty(GQ, "name", {
        value: WQ
      }), NW.setFields(GQ, wQ), GQ._getDefaultValues = VQ, GQ._initialize = pQ, Object.assign(GQ.prototype, qQ);
      for (const UQ in FQ) yw(FQ[UQ])(GQ.prototype, UQ);
      for (const UQ of PQ) Vw(GQ.prototype, UQ);
      for (const UQ of gQ) Dw(GQ.prototype, UQ);
      for (const UQ in JQ) vw(JQ[UQ])(GQ.prototype, UQ);
      if (rQ.length > 0 || IQ.length > 0) {
        const QQ = GQ[Symbol.metadata];
        for (const WQ of rQ) NW.setFullStateOnly(QQ, WQ);
        for (const WQ of IQ) NW.setStream(QQ, WQ);
        for (const WQ in jQ) NW.setStreamPriority(QQ, WQ, jQ[WQ])
      }
      if (BQ.length > 0) {
        const QQ = GQ[Symbol.metadata];
        for (const WQ of BQ) QQ[QQ[WQ]].optional = !0
      }
      return GQ.extend = (QQ, WQ) => aw(QQ, WQ, GQ), GQ
    }

    function lw(QQ) {
      const WQ = QQ[BQ].root,
        XQ = {
          ops: {},
          refs: []
        };
      let wQ = WQ.changes.next;
      for (; wQ;) {
        const QQ = wQ.changeTree;
        void 0 !== QQ ? (XQ.refs.push(`refId#${QQ.ref[sQ]}`), QQ.forEach(((QQ, WQ) => {
          if (QQ < 0 || !WQ) return;
          const wQ = qQ[WQ];
          XQ.ops[wQ] || (XQ.ops[wQ] = 0), XQ.ops[wQ]++
        })), wQ = wQ.next) : wQ = wQ.next
      }
      return XQ
    }
    class hw {
      static[PQ] = EX;
      static[gQ] = ZX;
      [sQ];
      [UQ];
      static initialize(QQ) {
        Object.defineProperty(QQ, BQ, {
          value: new iX(QQ),
          enumerable: !1,
          writable: !0
        }), QQ[UQ] = []
      }
      static initializeForDecoder() {
        const QQ = Object.create(this.prototype);
        return AX(QQ), QQ[UQ] = [], QQ
      }
      static reset(QQ) {
        const WQ = QQ?.[BQ];
        if (void 0 === WQ || "function" !== typeof WQ.recycle) throw new Error("@colyseus/schema: Schema.reset() requires a tracked (encoder-side) instance.");
        if (void 0 !== WQ.extraParents) throw new Error(`@colyseus/schema: cannot reset a shared instance (${QQ.constructor.name}) with multiple parents.`);
        QQ[pQ]()
      } [pQ]() {
        const QQ = this.constructor[Symbol.metadata],
          WQ = QQ?.[lQ] ?? [],
          XQ = this[UQ];
        for (let wQ = 0; wQ < WQ.length; wQ++) {
          const QQ = XQ[WQ[wQ]];
          QQ?.[pQ]?.()
        }
        this[BQ].recycle(), this[sQ] = void 0
      }
      static is(QQ) {
        const WQ = QQ[Symbol.metadata];
        return "object" === typeof WQ && null !== WQ
      }
      static isSchema(QQ) {
        return "function" === typeof QQ?.assign
      }
      static[FQ](QQ, WQ) {
        let XQ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : qQ.ADD;
        QQ.change(WQ, XQ)
      }
      static[JQ](QQ, WQ, XQ) {
        const wQ = QQ.constructor[Symbol.metadata],
          qQ = wQ[WQ]?.tag;
        return void 0 === XQ ? void 0 === qQ : void 0 === qQ || (qQ === jw ? XQ.isChangeTreeVisible(QQ[BQ]) : XQ.hasTagOnTree(QQ[BQ], qQ))
      }
      constructor(QQ) {
        hw.initialize(this), QQ && hw.assignProps(this, QQ)
      }
      assign(QQ) {
        return hw.assignProps(this, QQ), this
      }
      static assignProps(QQ, WQ) {
        const XQ = QQ.constructor[Symbol.metadata];
        if (XQ && void 0 !== XQ[aQ])
          for (let qQ = 0; qQ <= XQ[aQ]; qQ++) {
            const wQ = XQ[qQ];
            if (!wQ) continue;
            const TQ = WQ[wQ.name];
            void 0 !== TQ && (QQ[wQ.name] = TQ)
          }
        const wQ = Object.keys(WQ);
        for (let qQ = 0; qQ < wQ.length; qQ++) {
          const TQ = wQ[qQ];
          XQ && void 0 !== XQ[TQ] || (QQ[TQ] = WQ[TQ])
        }
      }
      restore(QQ) {
        const WQ = this.constructor[Symbol.metadata];
        for (const XQ in WQ) {
          const wQ = WQ[XQ],
            qQ = wQ.name,
            TQ = wQ.type,
            zQ = QQ[qQ];
          if (void 0 !== zQ && null !== zQ)
            if ("string" === typeof TQ) this[qQ] = zQ;
            else if (hw.is(TQ)) {
            const QQ = new TQ;
            QQ.restore(zQ), this[qQ] = QQ
          } else if ("object" === typeof TQ) {
            const QQ = Object.keys(TQ)[0],
              WQ = TQ[QQ];
            if ("map" === QQ) {
              const QQ = this[qQ];
              for (const XQ in zQ)
                if (hw.is(WQ)) {
                  const wQ = new WQ;
                  wQ.restore(zQ[XQ]), QQ.set(XQ, wQ)
                } else QQ.set(XQ, zQ[XQ])
            } else if ("array" === QQ) {
              const QQ = this[qQ];
              for (let XQ = 0; XQ < zQ.length; XQ++)
                if (hw.is(WQ)) {
                  const wQ = new WQ;
                  wQ.restore(zQ[XQ]), QQ.push(wQ)
                } else QQ.push(zQ[XQ])
            }
          }
        }
        return this
      }
      setDirty(QQ, WQ) {
        const XQ = this.constructor[Symbol.metadata];
        this[BQ].change(XQ[XQ[QQ]].index, WQ)
      }
      pauseTracking() {
        this[BQ].pause()
      }
      resumeTracking() {
        this[BQ].resume()
      }
      untracked(QQ) {
        return this[BQ].untracked(QQ)
      }
      get isTrackingPaused() {
        return this[BQ].paused
      }
      clone() {
        const QQ = Object.create(this.constructor.prototype);
        hw.initialize(QQ);
        const WQ = this.constructor[Symbol.metadata];
        for (const XQ in WQ) {
          const wQ = WQ[XQ].name;
          "object" === typeof this[wQ] && "function" === typeof this[wQ]?.clone ? QQ[wQ] = this[wQ].clone() : QQ[wQ] = this[wQ]
        }
        return QQ
      }
      toJSON() {
        const QQ = {},
          WQ = this.constructor[Symbol.metadata];
        for (const XQ in WQ) {
          const wQ = WQ[XQ],
            qQ = wQ.name;
          wQ.deprecated || null === this[qQ] || "undefined" === typeof this[qQ] || (QQ[qQ] = "function" === typeof this[qQ].toJSON ? this[qQ].toJSON() : this[qQ])
        }
        return QQ
      }
      discardAllChanges() {
        this[BQ].discardAll()
      } [rQ](QQ) {
        return this[this.constructor[Symbol.metadata][QQ].name]
      } [IQ](QQ) {
        this[this.constructor[Symbol.metadata][QQ].name] = void 0
      }
      static debugRefIds(QQ) {
        let WQ = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          XQ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          wQ = arguments.length > 3 ? arguments[3] : void 0,
          qQ = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "";
        const TQ = WQ ? ` - ${JSON.stringify(QQ.toJSON())}` : "",
          zQ = QQ[BQ],
          FQ = QQ[sQ],
          PQ = wQ ? wQ.root.refCount[FQ] : zQ.refCount,
          gQ = PQ > 1 ? ` [\xd7${PQ}]` : "";
        let JQ = `${function(QQ){return new Array(QQ).fill(0).map(((WQ,XQ)=>XQ===QQ-1?"\u2514\u2500 ":"   ")).join("")}(XQ)}${qQ}${QQ.constructor.name} (refId: ${FQ})${gQ}${TQ}\n`;
        return zQ.forEachChild(((qQ, TQ) => {
          let zQ = TQ;
          "number" === typeof TQ && QQ.$indexes && (zQ = QQ.$indexes.get(TQ) ?? TQ);
          const sQ = void 0 !== QQ.forEach && void 0 !== zQ ? `["${zQ}"]: ` : "";
          JQ += this.debugRefIds(qQ.ref, WQ, XQ + 1, wQ, sQ)
        })), JQ
      }
      static debugRefIdEncodingOrder(QQ) {
        let WQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "allChanges";
        const XQ = [],
          wQ = QQ[BQ];
        if ("changes" === WQ) {
          let QQ = wQ.root.changes?.next;
          for (; QQ;) QQ.changeTree && XQ.push(QQ.changeTree.ref[sQ]), QQ = QQ.next;
          return XQ
        }
        const qQ = "allFilteredChanges" === WQ,
          TQ = new Set,
          zQ = QQ => {
            TQ.has(QQ) || (TQ.add(QQ), QQ.isFiltered === qQ && XQ.push(QQ.ref[sQ]), QQ.forEachChild(((QQ, WQ) => zQ(QQ))))
          };
        return zQ(wQ), XQ
      }
      static debugRefIdsFromDecoder(QQ) {
        return this.debugRefIds(QQ.state, !1, 0, QQ)
      }
      static debugChanges(QQ) {
        let WQ = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        const XQ = QQ[BQ],
          wQ = WQ ? "allChanges" : "changes";
        let TQ = `${QQ.constructor.name} (${QQ[sQ]}) -> .${wQ}:\n`;
        return WQ ? XQ.forEachLive((QQ => {
          TQ += `- [${QQ}]: ADD (${JSON.stringify(XQ.getValue(Number(QQ),!0))})\n`
        })) : XQ.forEach(((QQ, WQ) => {
          QQ < 0 || !WQ || (TQ += `- [${QQ}]: ${qQ[WQ]} (${JSON.stringify(XQ.getValue(Number(QQ),!1))})\n`)
        })), TQ
      }
    }
    TQ(hw);
    const iw = {
      value: 0,
      enumerable: !1,
      writable: !0
    };
    class Aw {
      types;
      nextUniqueId = 0;
      changeTrees = {};
      get refCount() {
        const QQ = {};
        for (const WQ in this.changeTrees) QQ[WQ] = this.changeTrees[WQ].refCount;
        return QQ
      }
      changes = {
        next: void 0,
        tail: void 0,
        nextPosition: 0
      };
      unreliableChanges = {
        next: void 0,
        tail: void 0,
        nextPosition: 0
      };
      pendingFilterRefresh = [];
      enqueueFilterRefresh(QQ) {
        this.types.hasFilters && (QQ.flags & lX || (QQ.flags |= lX, this.pendingFilterRefresh.push(QQ)))
      }
      _nodePool = [];
      _nextViewId = 0;
      _freeViewIds = [];
      acquireViewId() {
        return this._freeViewIds.length > 0 ? this._freeViewIds.pop() : this._nextViewId++
      }
      releaseViewId(QQ) {
        this._freeViewIds.push(QQ)
      }
      activeViews = new Map;
      streamTrees = new Set;
      registerView(QQ) {
        this.activeViews.set(QQ.id, new WeakRef(QQ))
      }
      unregisterView(QQ) {
        this.activeViews.delete(QQ.id);
        const WQ = QQ.id;
        for (const XQ of this.streamTrees) XQ._dropView(WQ)
      }
      forEachActiveView(QQ) {
        for (const [WQ, XQ] of this.activeViews) {
          const wQ = XQ.deref();
          if (void 0 !== wQ) QQ(wQ);
          else {
            this.activeViews.delete(WQ);
            for (const QQ of this.streamTrees) QQ._dropView(WQ)
          }
        }
      }
      registerStream(QQ) {
        this.streamTrees.add(QQ)
      }
      unregisterStream(QQ) {
        this.streamTrees.delete(QQ)
      }
      constructor(QQ) {
        let WQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        this.types = QQ, this.nextUniqueId = WQ
      }
      add(QQ) {
        const WQ = QQ.ref;
        void 0 === WQ[sQ] && (iw.value = this.nextUniqueId++, Object.defineProperty(WQ, sQ, iw));
        const XQ = WQ[sQ],
          wQ = void 0 === this.changeTrees[XQ];
        wQ && (this.changeTrees[XQ] = QQ), QQ.needsRestage && (QQ.needsRestage = !1, QQ.forEachLiveWithCtx(QQ, XX));
        const qQ = wQ ? 0 : QQ.refCount;
        return QQ.refCount = qQ + 1, qQ > 0 && this.enqueueFilterRefresh(QQ), wQ
      }
      remove(QQ) {
        const WQ = QQ.refCount - 1;
        if (WQ <= 0) {
          if (QQ.root = void 0, delete this.changeTrees[QQ.ref[sQ]], QQ.isStreamCollection) {
            const WQ = QQ.ref;
            WQ._unregister?.(), this.unregisterStream(WQ)
          }
          this.removeFromQueue(QQ), this.removeFromUnreliableQueue(QQ), QQ.refCount = 0, QQ.needsRestage = !0, QQ.forEachChild(((WQ, XQ) => {
            WQ.removeParent(QQ.ref) && (void 0 === WQ.parentRef || WQ.refCount > 0 ? this.remove(WQ) : this.moveNextToParent(WQ))
          }))
        } else QQ.refCount = WQ, this.enqueueFilterRefresh(QQ), this.recursivelyMoveNextToParent(QQ);
        return WQ
      }
      recursivelyMoveNextToParent(QQ) {
        this.moveNextToParent(QQ), QQ.forEachChild(((QQ, WQ) => this.recursivelyMoveNextToParent(QQ)))
      }
      moveNextToParent(QQ) {
        QQ.changesNode && this._moveNextToParentInList(this.changes, QQ, QQ.changesNode, "changesNode"), QQ.unreliableChangesNode && this._moveNextToParentInList(this.unreliableChanges, QQ, QQ.unreliableChangesNode, "unreliableChangesNode")
      }
      _moveNextToParentInList(QQ, WQ, XQ, wQ) {
        const qQ = WQ.parent;
        if (!qQ || !qQ[BQ]) return;
        const TQ = qQ[BQ][wQ];
        TQ && TQ !== XQ && (XQ.position > TQ.position || (XQ.prev ? XQ.prev.next = XQ.next : QQ.next = XQ.next, XQ.next ? XQ.next.prev = XQ.prev : QQ.tail = XQ.prev, XQ.prev = QQ.tail, XQ.next = void 0, QQ.tail.next = XQ, QQ.tail = XQ, XQ.position = QQ.nextPosition++))
      }
      enqueueChangeTree(QQ) {
        (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : QQ.changesNode) || (QQ.changesNode = this._appendToList(this.changes, QQ))
      }
      enqueueUnreliable(QQ) {
        (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : QQ.unreliableChangesNode) || (QQ.unreliableChangesNode = this._appendToList(this.unreliableChanges, QQ))
      }
      _appendToList(QQ, WQ) {
        const XQ = this._nodePool;
        let wQ;
        return XQ.length > 0 ? (wQ = XQ.pop(), wQ.changeTree = WQ, wQ.next = void 0, wQ.prev = void 0) : wQ = {
          changeTree: WQ,
          next: void 0,
          prev: void 0,
          position: 0
        }, QQ.next ? (wQ.prev = QQ.tail, QQ.tail.next = wQ, QQ.tail = wQ) : (QQ.nextPosition = 0, QQ.next = wQ, QQ.tail = wQ), wQ.position = QQ.nextPosition++, wQ
      }
      releaseNode(QQ) {
        QQ.changeTree = void 0, QQ.prev = void 0, QQ.next = void 0, this._nodePool.push(QQ)
      }
      removeFromQueue(QQ) {
        return this._removeNode(this.changes, QQ, QQ.changesNode, "changesNode")
      }
      removeFromUnreliableQueue(QQ) {
        return this._removeNode(this.unreliableChanges, QQ, QQ.unreliableChangesNode, "unreliableChangesNode")
      }
      _removeNode(QQ, WQ, XQ, wQ) {
        return !(!XQ || XQ.changeTree !== WQ) && (XQ.prev ? XQ.prev.next = XQ.next : QQ.next = XQ.next, XQ.next ? XQ.next.prev = XQ.prev : QQ.tail = XQ.prev, WQ[wQ] = void 0, this.releaseNode(XQ), !0)
      }
    }

    function Rw(QQ, WQ) {
      if (-1 === WQ || WQ >= QQ.length) return !1;
      const XQ = QQ.length - 1;
      for (let wQ = WQ; wQ < XQ; wQ++) QQ[wQ] = QQ[wQ + 1];
      return QQ.length = XQ, !0
    }

    function Ew(QQ, WQ, XQ) {
      const wQ = ~XQ,
        qQ = QQ.changeTrees;
      for (const TQ in qQ) {
        const QQ = qQ[TQ],
          XQ = QQ.visibleViews;
        void 0 !== XQ && WQ < XQ.length && (XQ[WQ] &= wQ);
        const zQ = QQ.subscribedViews;
        void 0 !== zQ && WQ < zQ.length && (zQ[WQ] &= wQ);
        const sQ = QQ.tagViews;
        void 0 !== sQ && sQ.forEach((QQ => {
          WQ < QQ.length && (QQ[WQ] &= wQ)
        }))
      }
    }
    const Cw = new FinalizationRegistry((QQ => {
      let {
        root: WQ,
        id: XQ,
        slot: wQ,
        bit: qQ
      } = QQ;
      Ew(WQ, wQ, qQ), WQ.activeViews.delete(XQ);
      for (const TQ of WQ.streamTrees) TQ._dropView(XQ);
      WQ.releaseViewId(XQ)
    }));

    function uw(QQ) {
      if (void 0 === QQ) return "undefined";
      if (null === QQ) return "null";
      const WQ = typeof QQ;
      return "string" === WQ ? JSON.stringify(QQ.length > 30 ? `${QQ.slice(0,30)}\u2026` : QQ) : "object" !== WQ && "function" !== WQ ? `${WQ} ${String(QQ)}` : Array.isArray(QQ) ? `Array(${QQ.length})` : QQ.constructor?.name ?? "Object"
    }
    class Lw {
      iterable;
      items;
      id = -1;
      _root;
      _slot = 0;
      _bit = 0;
      changes = new Map;
      constructor() {
        let QQ = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        this.iterable = QQ, QQ && (this.items = [])
      }
      _bindRoot(QQ) {
        void 0 === this._root && (this._root = QQ, this.id = QQ.acquireViewId(), this._slot = this.id >> 5, this._bit = 1 << (31 & this.id), QQ.registerView(this), Cw.register(this, {
          root: QQ,
          id: this.id,
          slot: this._slot,
          bit: this._bit
        }, this))
      }
      dispose() {
        void 0 !== this._root && (this._root.unregisterView(this), Ew(this._root, this._slot, this._bit), this._root.releaseViewId(this.id), Cw.unregister(this), this._root = void 0, this.id = -1)
      }
      isVisible(QQ) {
        const WQ = QQ.visibleViews,
          XQ = this._slot;
        return void 0 !== WQ && XQ < WQ.length && 0 !== (WQ[XQ] & this._bit)
      }
      markVisible(QQ) {
        const WQ = this._slot;
        let XQ = QQ.visibleViews;
        for (void 0 === XQ && (XQ = QQ.visibleViews = []); XQ.length <= WQ;) XQ.push(0);
        XQ[WQ] |= this._bit
      }
      unmarkVisible(QQ) {
        const WQ = QQ.visibleViews;
        if (void 0 === WQ) return;
        const XQ = this._slot;
        XQ < WQ.length && (WQ[XQ] &= ~this._bit)
      }
      isSubscribed(QQ) {
        const WQ = QQ.subscribedViews,
          XQ = this._slot;
        return void 0 !== WQ && XQ < WQ.length && 0 !== (WQ[XQ] & this._bit)
      }
      _setSubscribed(QQ) {
        const WQ = this._slot;
        let XQ = QQ.subscribedViews;
        for (void 0 === XQ && (XQ = QQ.subscribedViews = []); XQ.length <= WQ;) XQ.push(0);
        XQ[WQ] |= this._bit
      }
      _clearSubscribed(QQ) {
        const WQ = QQ.subscribedViews;
        if (void 0 === WQ) return;
        const XQ = this._slot;
        XQ < WQ.length && (WQ[XQ] &= ~this._bit)
      }
      hasTagOnTree(QQ, WQ) {
        const XQ = QQ.tagViews;
        if (void 0 === XQ) return !1;
        const wQ = this._slot,
          qQ = this._bit;
        for (let TQ = WQ; 0 !== TQ; TQ &= TQ - 1) {
          const QQ = XQ.get(TQ & -TQ);
          if (void 0 !== QQ && wQ < QQ.length && 0 !== (QQ[wQ] & qQ)) return !0
        }
        return !1
      }
      addTag(QQ, WQ) {
        if (WQ === jw) return;
        let XQ = QQ.tagViews;
        void 0 === XQ && (XQ = QQ.tagViews = new Map);
        const wQ = this._slot,
          qQ = this._bit;
        for (let TQ = WQ; TQ > 0; TQ &= TQ - 1) {
          const QQ = TQ & -TQ;
          let WQ = XQ.get(QQ);
          for (void 0 === WQ && (WQ = [], XQ.set(QQ, WQ)); WQ.length <= wQ;) WQ.push(0);
          WQ[wQ] |= qQ
        }
      }
      removeTag(QQ, WQ) {
        if (WQ === jw) return;
        const XQ = QQ.tagViews;
        if (void 0 === XQ) return;
        const wQ = this._slot,
          qQ = ~this._bit;
        for (let TQ = WQ; TQ > 0; TQ &= TQ - 1) {
          const QQ = XQ.get(TQ & -TQ);
          void 0 !== QQ && wQ < QQ.length && (QQ[wQ] &= qQ)
        }
      }
      removeAllTagsOnTree(QQ) {
        const WQ = QQ.tagViews;
        if (void 0 === WQ) return;
        const XQ = this._slot,
          wQ = ~this._bit;
        WQ.forEach((QQ => {
          XQ < QQ.length && (QQ[XQ] &= wQ)
        }))
      }
      add(QQ) {
        let WQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : jw,
          XQ = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        return this._add(QQ, WQ, XQ, !1)
      }
      _addImmediate(QQ) {
        let WQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : jw;
        this._add(QQ, WQ, !0, !0)
      }
      _add(QQ, WQ, XQ, wQ) {
        const TQ = QQ?.[BQ];
        if (!TQ) return console.warn(`StateView#add(): expected a Schema instance or collection, received ${uw(QQ)}`), !1;
        const zQ = TQ.parent;
        if (!zQ && 0 !== QQ[sQ]) throw new Error(`Cannot add a detached instance to the StateView. Make sure to assign the "${TQ.ref.constructor.name}" instance to the state before calling view.add()`);
        void 0 === this._root && void 0 !== TQ.root && this._bindRoot(TQ.root);
        const FQ = zQ?.[BQ];
        if (!wQ && FQ?.isStreamCollection) return AW(zQ, this.id, TQ.parentIndex), !0;
        const PQ = QQ.constructor[Symbol.metadata],
          gQ = this.isVisible(TQ);
        if (!this.iterable || !XQ || gQ && -1 !== this.items.indexOf(QQ) || this.items.push(QQ), this.markVisible(TQ), XQ && zQ && this.addParentOf(TQ, WQ), !wQ && TQ.isStreamCollection) return !0;
        if (WQ === jw && TQ.isNew) return this._markSubtreeVisible(TQ, WQ), !1;
        let JQ = this.changes.get(QQ[sQ]);
        void 0 === JQ && (JQ = new Map, this.changes.set(QQ[sQ], JQ));
        let rQ = !1;
        const IQ = TQ.encDescriptor.tags;
        if (TQ.forEachChild(((QQ, XQ) => {
            const wQ = IQ[XQ];
            if (void 0 !== wQ) {
              if (!(wQ === jw || WQ !== jw && 0 !== (wQ & WQ))) return
            }
            this.add(QQ.ref, WQ, !1) && (rQ = !0)
          })), WQ !== jw) {
          this.addTag(TQ, WQ);
          const QQ = PQ?.[iQ];
          if (void 0 !== QQ)
            for (let XQ = WQ; XQ > 0; XQ &= XQ - 1) QQ[XQ & -XQ]?.forEach((QQ => {
              TQ.getChange(QQ) !== qQ.DELETE && JQ.set(QQ, qQ.ADD)
            }))
        }
        if ((WQ === jw || !gQ) && (!TQ.isNew || rQ))
          if (TQ.isArray && "string" !== typeof TQ.refTarget[yQ]) TQ.refTarget.items.length > 0 && (JQ.set(-1, qQ.ADD), rQ = !0);
          else {
            const QQ = TQ.encDescriptor.tags;
            TQ.forEachLive((XQ => {
              const wQ = QQ[XQ];
              (void 0 === wQ || wQ === jw || WQ !== jw && 0 !== (wQ & WQ)) && (JQ.set(XQ, qQ.ADD), rQ = !0)
            }))
          } return rQ
      }
      _markSubtreeVisible(QQ, WQ) {
        const XQ = QQ.encDescriptor.tags;
        QQ.forEachChild(((QQ, wQ) => {
          const qQ = XQ[wQ];
          if (void 0 !== qQ) {
            if (!(qQ === jw || WQ !== jw && 0 !== (qQ & WQ))) return
          }
          QQ.isNew ? (this.markVisible(QQ), this._markSubtreeVisible(QQ, WQ)) : this._add(QQ.ref, WQ, !1, !1)
        }))
      }
      addParentOf(QQ, WQ) {
        const XQ = QQ.parent[BQ],
          wQ = QQ.parentIndex;
        this.isVisible(XQ) || this.markVisible(XQ);
        const TQ = XQ.parent?.[BQ];
        if (TQ && this.addParentOf(XQ, WQ), XQ.hasFilteredFields && XQ.getChange(wQ) !== qQ.DELETE) {
          let TQ = this.changes.get(XQ.ref[sQ]);
          void 0 === TQ && (TQ = new Map, this.changes.set(XQ.ref[sQ], TQ));
          const zQ = XQ.encDescriptor.tags[wQ];
          void 0 !== zQ && zQ !== jw && 0 !== (zQ & WQ) && this.addTag(XQ, WQ), TQ.set(XQ.isArray ? QQ : wQ, qQ.ADD)
        }
      }
      _touchAncestorsOf(QQ) {
        let WQ = QQ.parent?.[BQ];
        if (void 0 === WQ) return;
        const XQ = [];
        for (; void 0 !== WQ;) {
          if (WQ.hasFilteredFields) {
            const QQ = WQ.ref[sQ];
            if (this.changes.has(QQ)) break;
            XQ.push(WQ)
          }
          WQ = WQ.parent?.[BQ]
        }
        for (let wQ = XQ.length - 1; wQ >= 0; wQ--) this.changes.set(XQ[wQ].ref[sQ], new Map)
      }
      remove(QQ) {
        let WQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : jw,
          XQ = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        const wQ = QQ?.[BQ];
        if (!wQ) return console.warn(`StateView#remove(): expected a Schema instance or collection, received ${uw(QQ)}`), this;
        const TQ = wQ.parent?.[BQ];
        if (TQ?.isStreamCollection) return this.unmarkVisible(wQ), this.iterable && !XQ && Rw(this.items, this.items.indexOf(QQ)),
          function(QQ, WQ, XQ, wQ, TQ) {
            const zQ = QQ._stream;
            if (void 0 === zQ) return !1;
            const sQ = zQ.pendingByView.get(WQ);
            if (sQ?.has(wQ)) return sQ.delete(wQ), !1;
            const FQ = zQ.sentByView.get(WQ);
            if (FQ?.has(wQ)) {
              FQ.delete(wQ);
              let QQ = TQ.get(XQ);
              return void 0 === QQ && (QQ = new Map, TQ.set(XQ, QQ)), QQ.set(wQ, qQ.DELETE), !0
            }
          }(wQ.parent, this.id, wQ.parent[sQ], wQ.parentIndex, this.changes), this._recursiveDeleteVisibleChangeTree(wQ), this;
        if (wQ.isStreamCollection) {
          this.unmarkVisible(wQ), this.iterable && !XQ && Rw(this.items, this.items.indexOf(QQ));
          const WQ = wQ.ref,
            TQ = WQ._stream;
          if (void 0 !== TQ) {
            TQ.pendingByView.get(this.id)?.clear();
            const QQ = TQ.sentByView.get(this.id);
            if (void 0 !== QQ && QQ.size > 0) {
              const XQ = WQ[sQ];
              let wQ = this.changes.get(XQ);
              void 0 === wQ && (wQ = new Map, this.changes.set(XQ, wQ));
              for (const WQ of QQ) wQ.set(WQ, qQ.DELETE);
              QQ.clear()
            }
          }
          return this
        }
        this.unmarkVisible(wQ), this.iterable && !XQ && Rw(this.items, this.items.indexOf(QQ));
        const zQ = wQ.ref,
          FQ = zQ.constructor[Symbol.metadata],
          PQ = zQ[sQ];
        this._touchAncestorsOf(wQ);
        let gQ = this.changes.get(PQ);
        if (void 0 === gQ && (gQ = new Map, this.changes.set(PQ, gQ)), WQ === jw) {
          const QQ = wQ.parent;
          if (QQ && !NW.isValidInstance(QQ) && wQ.isFiltered) {
            const WQ = TQ.isArray ? wQ : wQ.parentIndex,
              XQ = QQ[sQ];
            let zQ = this.changes.get(XQ);
            void 0 === zQ ? (zQ = new Map, this.changes.set(XQ, zQ)) : zQ.get(WQ) === qQ.ADD && this._dropPendingEntries(wQ), zQ.set(WQ, qQ.DELETE), this._recursiveDeleteVisibleChangeTree(wQ)
          } else FQ?.[hQ]?.forEach((QQ => this._removeViewField(wQ, gQ, QQ)))
        } else {
          const QQ = FQ?.[iQ];
          if (void 0 !== QQ)
            for (let XQ = WQ; XQ > 0; XQ &= XQ - 1) QQ[XQ & -XQ]?.forEach((QQ => this._removeViewField(wQ, gQ, QQ)))
        }
        return void 0 === WQ ? this.removeAllTagsOnTree(wQ) : this.removeTag(wQ, WQ), this
      }
      has(QQ) {
        return this.isVisible(QQ[BQ])
      }
      hasTag(QQ) {
        let WQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : jw;
        return this.hasTagOnTree(QQ[BQ], WQ)
      }
      subscribe(QQ, WQ) {
        const XQ = QQ?.[BQ];
        if (!XQ) return console.warn(`StateView#subscribe(): expected a Schema collection, received ${uw(QQ)}`), this;
        if (void 0 === this._root && void 0 !== XQ.root && this._bindRoot(XQ.root), void 0 !== WQ)
          if (XQ.isStreamCollection) {
            const XQ = aW(QQ);
            null === WQ ? XQ.priorityByView?.delete(this.id) : (XQ.priorityByView ??= new Map).set(this.id, WQ)
          } else {
            const WQ = QQ?.constructor?.name ?? "collection",
              wQ = XQ.parent;
            if (void 0 === wQ) console.warn(`StateView#subscribe(): \`priority\` ignored \u2014 this ${WQ} is not attached to a state yet, so it cannot be identified as a stream. Subscribe after assigning it to the state.`);
            else {
              const QQ = wQ?.constructor?.[Symbol.metadata]?.[XQ.parentIndex]?.name,
                qQ = QQ ? `${wQ.constructor.name}#${QQ}` : WQ;
              console.warn(`StateView#subscribe(): \`priority\` ignored \u2014 ${qQ} is a ${WQ}, not a streaming collection. Declare the field with .stream() (e.g. t.map(X).stream()) or use t.stream(X) to enable priority batching.`)
            }
          } if (this.isSubscribed(XQ)) return this;
        const wQ = void 0 !== XQ.parent && !this.isVisible(XQ);
        if (wQ ? (this.addParentOf(XQ, jw), this._add(QQ, jw, !1, !1)) : this.markVisible(XQ), this._setSubscribed(XQ), XQ.isStreamCollection) {
          const WQ = QQ;
          XQ.forEachChild(((QQ, XQ) => {
            AW(WQ, this.id, XQ)
          }))
        } else wQ || XQ.forEachChild((QQ => {
          this.markVisible(QQ)
        }));
        return this
      }
      unsubscribe(QQ) {
        const WQ = QQ?.[BQ];
        if (!WQ) return console.warn(`StateView#unsubscribe(): expected a Schema collection, received ${uw(QQ)}`), this;
        if (!this.isSubscribed(WQ)) return this;
        this._clearSubscribed(WQ);
        const XQ = WQ.ref[sQ];
        if (WQ.isStreamCollection) {
          const WQ = QQ._stream;
          if (void 0 !== WQ) {
            WQ.pendingByView.get(this.id)?.clear();
            const QQ = WQ.sentByView.get(this.id);
            if (void 0 !== QQ && QQ.size > 0) {
              let WQ = this.changes.get(XQ);
              void 0 === WQ && (WQ = new Map, this.changes.set(XQ, WQ));
              for (const XQ of QQ) WQ.set(XQ, qQ.DELETE);
              QQ.clear()
            }
          }
        } else {
          const QQ = WQ.isArray;
          let wQ = this.changes.get(XQ);
          WQ.forEachChild(((WQ, TQ) => {
            void 0 === wQ && (wQ = new Map, this.changes.set(XQ, wQ)), wQ.set(QQ ? WQ : TQ, qQ.DELETE), this.unmarkVisible(WQ)
          }))
        }
        return this.unmarkVisible(WQ), this
      }
      clear() {
        if (!this.iterable) throw new Error("StateView#clear() is only available for iterable StateView's. Use StateView(iterable: true) constructor.");
        for (let QQ = 0, WQ = this.items.length; QQ < WQ; QQ++) this.remove(this.items[QQ], jw, !0);
        this.items.length = 0
      }
      isChangeTreeVisible(QQ) {
        let WQ = this.isVisible(QQ);
        if (!WQ && QQ.isVisibilitySharedWithParent)
          if (this.isVisible(QQ.parent[BQ])) this.markVisible(QQ), WQ = !0;
          else
            for (let XQ = QQ.extraParents; void 0 !== XQ; XQ = XQ.next) {
              const wQ = XQ.ref[BQ];
              if (wQ.isFiltered && this.isVisible(wQ)) {
                this.markVisible(QQ), WQ = !0;
                break
              }
            }
        return WQ
      }
      _recursiveDeleteVisibleChangeTree(QQ) {
        QQ.forEachChild((QQ => {
          this.unmarkVisible(QQ), this._recursiveDeleteVisibleChangeTree(QQ)
        }))
      }
      _dropPendingEntries(QQ) {
        this.changes.delete(QQ.ref[sQ]), QQ.forEachChild((QQ => this._dropPendingEntries(QQ)))
      }
      _removeViewField(QQ, WQ, XQ) {
        const wQ = WQ.get(XQ) === qQ.ADD;
        WQ.set(XQ, qQ.DELETE);
        const TQ = QQ.ref[QQ.encDescriptor.names[XQ]],
          zQ = TQ?.[BQ];
        zQ && (this.unmarkVisible(zQ), this._recursiveDeleteVisibleChangeTree(zQ), wQ && this._dropPendingEntries(zQ))
      }
    }

    function kw(QQ) {
      QQ.structSwitchEmitted || (QQ.shouldEmitSwitch && (QQ.buffer[QQ.it.offset++] = 255, WW.number(QQ.buffer, QQ.ref[sQ], QQ.it)), QQ.structSwitchEmitted = !0)
    }

    function fw(QQ, WQ) {
      ow(QQ, WQ, qQ.ADD)
    }

    function Sw(QQ, WQ) {
      if (WQ._fullSyncGen === QQ.gen) return;
      WQ._fullSyncGen = QQ.gen;
      if (!QQ.hasView || QQ.view.isChangeTreeVisible(WQ)) {
        const XQ = WQ.encDescriptor;
        QQ.changeTree = WQ, QQ.ref = WQ.ref, QQ.encoder = XQ.encoder, QQ.filter = XQ.filter, QQ.metadata = XQ.metadata, QQ.treeIsFiltered = WQ.isFiltered, QQ.isSchema = XQ.isSchema, QQ.filterBitmask = XQ.filterBitmask, QQ.tags = XQ.tags, QQ.structSwitchEmitted = !1, QQ.shouldEmitSwitch = QQ.hasView || QQ.it.offset > QQ.initialOffset || WQ !== QQ.rootChangeTree, WQ.isArray && WQ.collDirty.size > 0 && (WQ.flags |= 512), qX(WQ, QQ, fw)
      }
      VX(WQ, QQ, tw)
    }

    function tw(QQ, WQ, XQ) {
      Sw(QQ, WQ)
    }

    function ow(QQ, WQ, XQ) {
      if (WQ < 0) {
        if (QQ.treeIsFiltered !== QQ.emitFiltered) return;
        return kw(QQ), void(QQ.buffer[QQ.it.offset++] = 255 & Math.abs(WQ))
      }
      if ((QQ.isSchema ? QQ.treeIsFiltered || (WQ < 32 ? 0 !== (QQ.filterBitmask & 1 << WQ) : void 0 !== QQ.tags[WQ]) : QQ.treeIsFiltered) !== QQ.emitFiltered) return;
      const wQ = QQ.isEncodeAll ? qQ.ADD : XQ;
      void 0 !== wQ && (void 0 === QQ.filter || QQ.filter(QQ.ref, WQ, QQ.view)) && (kw(QQ), QQ.encoder(QQ.self, QQ.buffer, QQ.changeTree, WQ, wQ, QQ.it, QQ.isEncodeAll, QQ.hasView, QQ.metadata))
    }

    function ew(QQ, WQ) {
      const XQ = new Uint8Array(QQ.length + WQ.length);
      return XQ.set(QQ, 0), XQ.set(WQ, QQ.length), XQ
    }
    class nw {
      static BUFFER_SIZE = 16384;
      sharedBuffer = new Uint8Array(nw.BUFFER_SIZE);
      context;
      state;
      root;
      constructor(QQ, WQ) {
        this.context = SW.cache(QQ.constructor), this.root = WQ ?? new Aw(this.context), this.setState(QQ)
      }
      setState(QQ) {
        this.state = QQ, this.state[BQ].setRoot(this.root)
      }
      _encodeCtx = {
        self: void 0,
        buffer: void 0,
        it: void 0,
        changeTree: void 0,
        ref: void 0,
        encoder: void 0,
        filter: void 0,
        metadata: void 0,
        view: void 0,
        isEncodeAll: !1,
        hasView: !1,
        treeIsFiltered: !1,
        isSchema: !1,
        emitFiltered: !1,
        filterBitmask: 0,
        tags: void 0,
        structSwitchEmitted: !1,
        isRootTree: !1,
        shouldEmitSwitch: !1,
        gen: 0,
        initialOffset: 0,
        rootChangeTree: void 0
      };
      _fullSyncGen = 0;
      encode() {
        let QQ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
            offset: 0
          },
          WQ = arguments.length > 1 ? arguments[1] : void 0,
          XQ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : this.sharedBuffer,
          wQ = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : QQ.offset;
        return this._encodeChannel(QQ, WQ, XQ, wQ, !1)
      }
      encodeUnreliable() {
        let QQ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
            offset: 0
          },
          WQ = arguments.length > 1 ? arguments[1] : void 0,
          XQ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : this.sharedBuffer,
          wQ = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : QQ.offset;
        return this._encodeChannel(QQ, WQ, XQ, wQ, !0)
      }
      _encodeChannel(QQ, WQ, XQ, wQ, qQ) {
        this.root.pendingFilterRefresh.length > 0 && zX(this.root);
        const TQ = void 0 !== WQ,
          zQ = this.state[BQ],
          sQ = this._encodeCtx;
        sQ.self = this, sQ.buffer = XQ, sQ.it = QQ, sQ.view = WQ, sQ.isEncodeAll = !1, sQ.hasView = TQ, sQ.emitFiltered = TQ;
        let FQ = qQ ? this.root.unreliableChanges : this.root.changes;
        for (; FQ = FQ.next;) {
          const XQ = FQ.changeTree;
          if (TQ && !WQ.isChangeTreeVisible(XQ)) continue;
          const PQ = qQ ? XQ.unreliableRecorder : XQ;
          if (!PQ || !PQ.has()) continue;
          const gQ = XQ.encDescriptor;
          sQ.changeTree = XQ, sQ.ref = XQ.ref, sQ.encoder = gQ.encoder, sQ.filter = gQ.filter, sQ.metadata = gQ.metadata, sQ.treeIsFiltered = XQ.isFiltered, sQ.isSchema = gQ.isSchema, sQ.filterBitmask = gQ.filterBitmask, sQ.tags = gQ.tags, sQ.structSwitchEmitted = !1, sQ.isRootTree = XQ === zQ, sQ.shouldEmitSwitch = TQ || QQ.offset > wQ || !sQ.isRootTree, PQ.forEachWithCtx(sQ, ow)
        }
        return qQ || TQ || !this._isStreamBroadcastMode || this._emitStreamBroadcast(XQ, QQ), QQ.offset > XQ.byteLength ? (XQ = this._resizeBuffer(XQ, QQ.offset), QQ.offset = wQ, this._encodeChannel(QQ, WQ, XQ, wQ, qQ)) : XQ.subarray(0, QQ.offset)
      }
      encodeFullSync(QQ, WQ, XQ, wQ) {
        let qQ = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : QQ.offset;
        this.root.pendingFilterRefresh.length > 0 && zX(this.root);
        const TQ = void 0 !== wQ,
          zQ = this.state[BQ],
          sQ = this._encodeCtx;
        return sQ.self = this, sQ.buffer = WQ, sQ.it = QQ, sQ.view = wQ, sQ.isEncodeAll = !0, sQ.hasView = TQ, sQ.emitFiltered = XQ, sQ.gen = ++this._fullSyncGen, sQ.initialOffset = qQ, sQ.rootChangeTree = zQ, Sw(sQ, zQ), QQ.offset > WQ.byteLength ? (WQ = this._resizeBuffer(WQ, QQ.offset), QQ.offset = qQ, this.encodeFullSync(QQ, WQ, XQ, wQ, qQ)) : WQ.subarray(0, QQ.offset)
      }
      _resizeBuffer(QQ, WQ) {
        const XQ = Math.ceil(WQ / nw.BUFFER_SIZE) * nw.BUFFER_SIZE,
          wQ = new Uint8Array(XQ);
        return wQ.set(QQ), QQ === this.sharedBuffer && (this.sharedBuffer = wQ), wQ
      }
      encodeAll() {
        let QQ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
            offset: 0
          },
          WQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.sharedBuffer;
        return this.encodeFullSync(QQ, WQ, !1)
      }
      encodeAllView(QQ, WQ, XQ) {
        let wQ = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : this.sharedBuffer;
        const qQ = XQ.offset;
        return wQ = this.encodeFullSync(XQ, wQ, !0, QQ, qQ), ew(wQ.subarray(0, WQ), wQ.subarray(qQ, XQ.offset))
      }
      ensureCapacity(QQ, WQ) {
        if (WQ + nw.BUFFER_SIZE <= QQ.byteLength) return QQ;
        const XQ = Math.ceil((WQ + nw.BUFFER_SIZE) / nw.BUFFER_SIZE) * nw.BUFFER_SIZE,
          wQ = new Uint8Array(XQ);
        return wQ.set(QQ.subarray(0, WQ)), QQ === this.sharedBuffer && (this.sharedBuffer = wQ), wQ
      }
      encodeView(QQ, WQ, XQ) {
        let wQ = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : this.sharedBuffer,
          TQ = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4];
        const zQ = XQ.offset;
        this._emitStreamPriority(QQ);
        for (const FQ of QQ.changes.keys()) {
          const WQ = QQ.changes.get(FQ),
            TQ = this.root.changeTrees[FQ];
          if (void 0 === TQ) {
            QQ.changes.delete(FQ);
            continue
          }
          if (0 === WQ.size) continue;
          const zQ = TQ.encDescriptor,
            PQ = zQ.encoder,
            gQ = zQ.metadata,
            JQ = TQ.ref,
            IQ = TQ.refTarget;
          wQ = this.ensureCapacity(wQ, XQ.offset), wQ[XQ.offset++] = 255, WW.number(wQ, JQ[sQ], XQ);
          for (const [FQ, jQ] of WQ) {
            let WQ;
            if (-1 === FQ) {
              const QQ = IQ.tmpItems,
                WQ = IQ.deletedIndexes;
              for (let zQ = 0; zQ < QQ.length; zQ++) void 0 !== QQ[zQ] && !0 !== WQ[zQ] && PQ(this, wQ, TQ, zQ, qQ.ADD, XQ, !1, !0, gQ);
              continue
            }
            if ("number" === typeof FQ) WQ = FQ;
            else {
              const XQ = FQ.indexInParent(JQ);
              if (void 0 === XQ) continue;
              if (WQ = XQ, jQ === qQ.ADD && TQ.getChange(WQ) === qQ.DELETE) {
                QQ.changes.delete(FQ.ref[sQ]);
                continue
              }
            }
            PQ(this, wQ, TQ, WQ, void 0 !== IQ[rQ](WQ) && jQ || qQ.DELETE, XQ, !1, !0, gQ)
          }
        }
        return QQ.changes.clear(), wQ = this.encode(XQ, QQ, wQ), TQ ? ew(wQ.subarray(0, WQ), wQ.subarray(zQ, XQ.offset)) : wQ.subarray(zQ, XQ.offset)
      }
      encodeUnreliableView(QQ, WQ, XQ) {
        let wQ = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : this.sharedBuffer;
        const qQ = XQ.offset;
        return wQ = this.encodeUnreliable(XQ, QQ, wQ, qQ), ew(wQ.subarray(0, WQ), wQ.subarray(qQ, XQ.offset))
      }
      _emitStreamBroadcast(QQ, WQ) {
        const XQ = this.root.streamTrees;
        for (const wQ of XQ) {
          const XQ = wQ,
            TQ = XQ[BQ],
            zQ = XQ[sQ];
          if (void 0 === zQ) continue;
          const FQ = XQ._stream,
            PQ = FQ.broadcastDeletes,
            gQ = FQ.broadcastPending,
            JQ = FQ.sentBroadcast,
            IQ = PQ.size > 0,
            jQ = gQ.size > 0,
            yQ = TQ.encDescriptor,
            VQ = yQ.encoder,
            DQ = yQ.metadata;
          if (IQ || jQ) {
            if (QQ[WQ.offset++] = 255, WW.number(QQ, zQ, WQ), IQ) {
              for (const XQ of PQ) VQ(this, QQ, TQ, XQ, qQ.DELETE, WQ, !1, !1, DQ);
              PQ.clear()
            }
            const wQ = FQ.maxPerTick,
              jQ = [];
            let yQ = 0;
            const pQ = [];
            for (const zQ of gQ) {
              if (yQ >= wQ) break;
              const sQ = XQ[rQ](zQ);
              void 0 !== sQ ? (VQ(this, QQ, TQ, zQ, qQ.ADD, WQ, !1, !1, DQ), JQ.add(zQ), jQ.push(sQ), pQ.push(zQ), yQ++) : pQ.push(zQ)
            }
            for (const QQ of pQ) gQ.delete(QQ);
            for (const XQ of jQ) {
              const wQ = XQ[BQ];
              if (void 0 === wQ) continue;
              const TQ = XQ[sQ];
              if (void 0 === TQ) continue;
              QQ[WQ.offset++] = 255, WW.number(QQ, TQ, WQ);
              const zQ = wQ.encDescriptor,
                FQ = zQ.encoder,
                PQ = zQ.metadata;
              wQ.forEachLive((XQ => {
                NW.hasUnreliableAtIndex(PQ, XQ) || FQ(this, QQ, wQ, XQ, qQ.ADD, WQ, !1, !1, PQ)
              }))
            }
          }
          for (const wQ of JQ) {
            const qQ = XQ[rQ](wQ);
            if (void 0 === qQ) continue;
            const TQ = qQ[BQ];
            if (void 0 === TQ || !TQ.has()) continue;
            const zQ = qQ[sQ];
            if (void 0 === zQ) continue;
            QQ[WQ.offset++] = 255, WW.number(QQ, zQ, WQ);
            const FQ = TQ.encDescriptor,
              PQ = FQ.encoder,
              gQ = FQ.metadata;
            TQ.forEach(((XQ, wQ) => {
              XQ < 0 || NW.hasUnreliableAtIndex(gQ, XQ) || PQ(this, QQ, TQ, XQ, wQ, WQ, !1, !1, gQ)
            }))
          }
        }
      }
      _emitStreamPriority(QQ) {
        const WQ = this.root.streamTrees;
        if (0 === WQ.size) return;
        const XQ = QQ.id;
        for (const wQ of WQ) {
          const WQ = wQ,
            TQ = WQ._stream,
            zQ = TQ.pendingByView.get(XQ);
          if (void 0 === zQ || 0 === zQ.size) continue;
          const FQ = TQ.priorityByView?.get(XQ),
            PQ = void 0 !== FQ,
            gQ = TQ.priority,
            JQ = TQ.maxPerTick,
            IQ = [],
            jQ = [];
          if (PQ || void 0 !== gQ) {
            const XQ = [],
              wQ = [];
            let qQ = 0;
            for (const TQ of zQ) {
              const zQ = WQ[rQ](TQ);
              if (void 0 === zQ) {
                jQ.push(TQ);
                continue
              }
              const sQ = PQ ? FQ(zQ) : gQ(QQ, zQ);
              if (qQ < JQ) {
                let QQ = qQ++;
                for (; QQ > 0 && wQ[QQ - 1] < sQ;) wQ[QQ] = wQ[QQ - 1], XQ[QQ] = XQ[QQ - 1], QQ--;
                wQ[QQ] = sQ, XQ[QQ] = TQ
              } else if (sQ > wQ[JQ - 1]) {
                let QQ = JQ - 1;
                for (; QQ > 0 && wQ[QQ - 1] < sQ;) wQ[QQ] = wQ[QQ - 1], XQ[QQ] = XQ[QQ - 1], QQ--;
                wQ[QQ] = sQ, XQ[QQ] = TQ
              }
            }
            for (let QQ = 0; QQ < qQ; QQ++) IQ.push(XQ[QQ])
          } else
            for (const QQ of zQ) {
              if (IQ.length >= JQ) break;
              IQ.push(QQ)
            }
          for (const QQ of jQ) zQ.delete(QQ);
          const yQ = IQ.length;
          let VQ = TQ.sentByView.get(XQ);
          void 0 === VQ && (VQ = new Set, TQ.sentByView.set(XQ, VQ));
          for (let XQ = 0; XQ < yQ; XQ++) {
            const wQ = IQ[XQ],
              TQ = WQ[rQ](wQ);
            if (void 0 === TQ) {
              zQ.delete(wQ);
              continue
            }
            QQ._addImmediate(TQ);
            const FQ = TQ[BQ];
            if (void 0 !== FQ) {
              const WQ = TQ[sQ];
              let XQ = QQ.changes.get(WQ);
              void 0 === XQ && (XQ = new Map, QQ.changes.set(WQ, XQ));
              const wQ = FQ.metadata;
              FQ.forEachLive((QQ => {
                NW.hasUnreliableAtIndex(wQ, QQ) || XQ.set(QQ, qQ.ADD)
              }))
            }
            zQ.delete(wQ), VQ.add(wQ)
          }
        }
      }
      discardChanges() {
        const QQ = this.root.changes;
        let WQ = QQ.next;
        const XQ = this.root;
        for (; WQ;) {
          const QQ = WQ.next;
          WQ.changeTree.endEncode(), XQ.releaseNode(WQ), WQ = QQ
        }
        QQ.next = void 0, QQ.tail = void 0
      }
      discardUnreliableChanges() {
        const QQ = this.root.unreliableChanges;
        let WQ = QQ.next;
        const XQ = this.root;
        for (; WQ;) {
          const QQ = WQ.next;
          WQ.changeTree.endEncodeUnreliable(), XQ.releaseNode(WQ), WQ = QQ
        }
        QQ.next = void 0, QQ.tail = void 0
      }
      tryEncodeTypeId(QQ, WQ, XQ, wQ) {
        const qQ = this.context.getTypeId(WQ),
          TQ = this.context.getTypeId(XQ);
        void 0 !== TQ ? qQ !== TQ && (QQ[wQ.offset++] = 213, WW.number(QQ, TQ, wQ)) : console.warn(`@colyseus/schema WARNING: Class "${XQ.name}" is not registered on TypeRegistry - Please either tag the class with @entity or define a @type() field.`)
      }
      get hasChanges() {
        return void 0 !== this.root.changes.next || this._hasStreamBacklog()
      }
      get _isStreamBroadcastMode() {
        return 0 === this.root.activeViews.size && this.root.streamTrees.size > 0
      }
      _hasStreamBacklog() {
        const QQ = this.root;
        if (0 === QQ.streamTrees.size) return !1;
        const WQ = 0 === QQ.activeViews.size;
        for (const XQ of QQ.streamTrees)
          if (WQ ? cW(XQ) : iW(XQ, QQ)) return !0;
        return !1
      }
      get hasUnreliableChanges() {
        return void 0 !== this.root.unreliableChanges.next
      }
    }
    class xw extends Error {
      constructor(QQ) {
        super(QQ), this.name = "DecodingWarning"
      }
    }
    const Yw = {
      value: 0,
      enumerable: !1,
      writable: !0
    };
    class Nw {
      refs = new Map;
      refCount = {};
      deletedRefs = new Set;
      callbacks = {};
      nextUniqueId = 0;
      getNextUniqueId() {
        return this.nextUniqueId++
      }
      addRef(QQ, WQ) {
        let XQ = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        this.refs.set(QQ, WQ), void 0 === WQ[sQ] ? (Yw.value = QQ, Object.defineProperty(WQ, sQ, Yw)) : WQ[sQ] !== QQ && (WQ[sQ] = QQ), XQ && (this.refCount[QQ] = (this.refCount[QQ] || 0) + 1), this.deletedRefs.has(QQ) && this.deletedRefs.delete(QQ)
      }
      removeRef(QQ) {
        const WQ = this.refCount[QQ];
        if (void 0 !== WQ)
          if (0 !== WQ)(this.refCount[QQ] = WQ - 1) <= 0 && this.deletedRefs.add(QQ);
          else try {
            const WQ = this.refs.get(QQ);
            throw new xw(`trying to remove refId '${QQ}' with 0 refCount (${WQ.constructor.name}: ${JSON.stringify(WQ)})`)
          } catch (zq) {
            console.warn(zq)
          } else try {
            throw new xw("trying to remove refId that doesn't exist: " + QQ)
          } catch (zq) {
            console.warn(zq)
          }
      }
      clearRefs() {
        this.refs.clear(), this.deletedRefs.clear(), this.callbacks = {}, this.refCount = {}
      }
      garbageCollectDeletedRefs() {
        this.deletedRefs.forEach((QQ => {
          if (this.refCount[QQ] > 0) return;
          const WQ = this.refs.get(QQ),
            XQ = WQ.constructor[Symbol.metadata];
          if (null != XQ)
            for (const wQ in XQ) {
              const QQ = WQ[XQ[wQ].name];
              if ("object" === typeof QQ && QQ) {
                const WQ = QQ[sQ];
                void 0 === WQ || this.deletedRefs.has(WQ) || this.removeRef(WQ)
              }
            } else "function" === typeof WQ[yQ] && Array.from(WQ.values()).forEach((QQ => {
              const WQ = QQ[sQ];
              void 0 === WQ || this.deletedRefs.has(WQ) || this.removeRef(WQ)
            }));
          this.refs.delete(QQ), delete this.refCount[QQ], delete this.callbacks[QQ]
        })), this.deletedRefs.clear()
      }
      addCallback(QQ, WQ, XQ) {
        if (void 0 === QQ) {
          const QQ = "number" === typeof WQ ? qQ[WQ] : WQ;
          throw new Error(`Can't addCallback on '${QQ}' (refId is undefined)`)
        }
        return this.callbacks[QQ] || (this.callbacks[QQ] = {}), this.callbacks[QQ][WQ] || (this.callbacks[QQ][WQ] = []), this.callbacks[QQ][WQ].push(XQ), () => this.removeCallback(QQ, WQ, XQ)
      }
      removeCallback(QQ, WQ, XQ) {
        const wQ = this.callbacks?.[QQ]?.[WQ]?.indexOf(XQ);
        void 0 !== wQ && -1 !== wQ && Rw(this.callbacks[QQ][WQ], wQ)
      }
    }
    class Zw {
      context;
      state;
      root;
      currentRefId = 0;
      bR;
      resyncVisited = null;
      resyncDamaged = !1;
      constructor(QQ, WQ) {
        this.setState(QQ), this.context = WQ || new SW(QQ.constructor)
      }
      setState(QQ) {
        this.state = QQ, this.root = new Nw, this.root.addRef(0, QQ)
      }
      decode(QQ) {
        let WQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
            offset: 0
          },
          XQ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : this.state;
        const qQ = void 0 !== this.bR ? [] : null,
          TQ = this.root,
          zQ = QQ.byteLength;
        let sQ = XQ.constructor[gQ];
        for (this.currentRefId = 0; WQ.offset < zQ;) {
          if (QQ[WQ.offset] == wQ) {
            WQ.offset++, XQ[GQ]?.();
            const wQ = pW.number(QQ, WQ),
              qQ = TQ.refs.get(wQ);
            qQ ? (XQ = qQ, sQ = XQ.constructor[gQ], this.currentRefId = wQ) : (console.error(`"refId" not found: ${wQ}`, {
              previousRef: XQ,
              previousRefId: this.currentRefId
            }), console.warn("Please report this issue to the developers."), this.skipCurrentStructure(QQ, WQ, zQ));
            continue
          } - 1 !== sQ(this, QQ, WQ, XQ, qQ) || (console.warn("@colyseus/schema: definition mismatch"), this.skipCurrentStructure(QQ, WQ, zQ))
        }
        return XQ[GQ]?.(), null !== this.resyncVisited && function(QQ, WQ) {
          QQ.resyncDamaged ? console.warn("@colyseus/schema: resync sweep skipped \u2014 parts of the payload could not be decoded. Stale entries may persist until the next resync.") : SX(QQ, QQ.state, new Set, WQ)
        }(this, qQ), null !== qQ && this.bR?.(qQ), TQ.garbageCollectDeletedRefs(), qQ
      }
      decodeResync(QQ) {
        let WQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
          offset: 0
        };
        this.resyncVisited = new Map, this.resyncDamaged = !1;
        try {
          return this.decode(QQ, WQ)
        } finally {
          this.resyncVisited = null
        }
      }
      skipCurrentStructure(QQ, WQ, XQ) {
        null !== this.resyncVisited && (this.resyncDamaged = !0);
        const qQ = {
          offset: WQ.offset
        };
        for (; WQ.offset < XQ && (QQ[WQ.offset] !== wQ || (qQ.offset = WQ.offset + 1, !this.root.refs.has(pW.number(QQ, qQ))));) WQ.offset++
      }
      getInstanceType(QQ, WQ, XQ) {
        let wQ;
        if (213 === QQ[WQ.offset]) {
          WQ.offset++;
          const XQ = pW.number(QQ, WQ);
          wQ = this.context.get(XQ)
        }
        return wQ || XQ
      }
      createInstanceOfType(QQ) {
        return QQ.initializeForDecoder()
      }
      removeChildRefs(QQ, WQ) {
        const XQ = "string" !== typeof QQ[yQ],
          wQ = QQ[sQ];
        QQ.forEach(((TQ, zQ) => {
          WQ?.push({
            ref: QQ,
            refId: wQ,
            op: qQ.DELETE,
            field: zQ,
            value: void 0,
            previousValue: TQ
          }), XQ && this.root.removeRef(TQ[sQ])
        }))
      }
    }
    const Ow = aw({
        min: Iw.float64(),
        max: Iw.float64(),
        bits: Iw.uint8(),
        mode: Iw.uint8()
      }, "QuantizedDescriptor"),
      Kw = aw({
        name: Iw.string(),
        type: Iw.string(),
        referencedType: Iw.number(),
        childPrimitive: Iw.string(),
        quantized: Iw.ref(Ow).optional()
      }, "ReflectionField"),
      mw = aw({
        id: Iw.number(),
        extendsId: Iw.number(),
        fields: Iw.array(Kw)
      }, "ReflectionType"),
      Mw = aw({
        types: Iw.array(mw),
        rootType: Iw.number()
      }, "Reflection");

    function Qq(QQ) {
      const WQ = QQ.root,
        XQ = WQ.callbacks,
        wQ = new WeakMap;
      let TQ;

      function zQ(QQ, XQ) {
        let PQ = XQ.instance?.constructor[Symbol.metadata] || QQ,
          gQ = XQ.instance && "function" === typeof XQ.instance.forEach || QQ && !hw.is(QQ);
        if (PQ && !gQ) {
          const QQ = function(QQ, qQ, zQ, FQ) {
            return FQ && void 0 !== XQ.instance[qQ] && !wQ.has(TQ) && zQ(XQ.instance[qQ], void 0), WQ.addCallback(QQ[sQ], qQ, zQ)
          };
          return new Proxy({
            listen: function(WQ, qQ) {
              let zQ = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
              if (XQ.instance) return QQ(XQ.instance, WQ, qQ, zQ);
              {
                let sQ = () => {};
                return XQ.onInstanceAvailable(((XQ, FQ) => {
                  sQ = QQ(XQ, WQ, qQ, zQ && FQ && !wQ.has(TQ))
                })), () => sQ()
              }
            },
            onChange: function(QQ) {
              return WQ.addCallback(XQ.instance[sQ], qQ.REPLACE, QQ)
            },
            bindTo: function(QQ, wQ) {
              return wQ || (wQ = Object.keys(PQ).map((QQ => PQ[QQ].name))), WQ.addCallback(XQ.instance[sQ], qQ.REPLACE, (() => {
                wQ.forEach((WQ => QQ[WQ] = XQ.instance[WQ]))
              }))
            }
          }, {
            get(QQ, WQ) {
              const wQ = PQ[PQ[WQ]];
              if (wQ) {
                const QQ = XQ.instance?.[WQ],
                  qQ = wQ => {
                    const qQ = FQ(XQ.instance).listen(WQ, ((QQ, WQ) => {
                      wQ(QQ, !1), qQ?.()
                    }), !1);
                    void 0 !== QQ?.[sQ] && wQ(QQ, !0)
                  };
                return zQ(wQ.type, {
                  instance: void 0 !== QQ?.[sQ] && QQ,
                  parentInstance: XQ.instance,
                  onInstanceAvailable: qQ
                })
              }
              return QQ[WQ]
            },
            has: (QQ, WQ) => void 0 !== PQ[WQ],
            set(QQ, WQ, XQ) {
              throw new Error("not allowed")
            },
            deleteProperty(QQ, WQ) {
              throw new Error("not allowed")
            }
          })
        } {
          const QQ = function(QQ, XQ, zQ) {
              return zQ && QQ.forEach(((QQ, WQ) => XQ(QQ, WQ))), WQ.addCallback(QQ[sQ], qQ.ADD, ((QQ, WQ) => {
                wQ.set(XQ, !0), TQ = XQ, XQ(QQ, WQ), wQ.delete(XQ), TQ = void 0
              }))
            },
            zQ = function(QQ, XQ) {
              return WQ.addCallback(QQ[sQ], qQ.DELETE, XQ)
            },
            FQ = function(QQ, XQ) {
              return WQ.addCallback(QQ[sQ], qQ.REPLACE, XQ)
            };
          return new Proxy({
            PD: function(WQ) {
              let qQ = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
              if (XQ.instance) return QQ(XQ.instance, WQ, qQ && !wQ.has(TQ));
              if (XQ.onInstanceAvailable) {
                let zQ = () => {};
                return XQ.onInstanceAvailable(((XQ, sQ) => {
                  zQ = QQ(XQ, WQ, qQ && sQ && !wQ.has(TQ))
                })), () => zQ()
              }
            },
            JA: function(QQ) {
              if (XQ.instance) return zQ(XQ.instance, QQ);
              if (XQ.onInstanceAvailable) {
                let WQ = () => {};
                return XQ.onInstanceAvailable((XQ => {
                  WQ = zQ(XQ, QQ)
                })), () => WQ()
              }
            },
            onChange: function(QQ) {
              if (XQ.instance) return FQ(XQ.instance, QQ);
              if (XQ.onInstanceAvailable) {
                let WQ = () => {};
                return XQ.onInstanceAvailable((XQ => {
                  WQ = FQ(XQ, QQ)
                })), () => WQ()
              }
            }
          }, {
            get(QQ, WQ) {
              if (!QQ[WQ]) throw new Error(`Can't access '${WQ}' through callback proxy. access the instance directly.`);
              return QQ[WQ]
            },
            has: (QQ, WQ) => void 0 !== QQ[WQ],
            set(QQ, WQ, XQ) {
              throw new Error("not allowed")
            },
            deleteProperty(QQ, WQ) {
              throw new Error("not allowed")
            }
          })
        }
      }

      function FQ(QQ) {
        return zQ(void 0, {
          instance: QQ
        })
      }
      return QQ.bR = function(QQ) {
        const WQ = new Set;
        for (let wQ = 0, TQ = QQ.length; wQ < TQ; wQ++) {
          const TQ = QQ[wQ],
            zQ = TQ.refId,
            FQ = TQ.ref,
            PQ = XQ[zQ];
          if (PQ) {
            if ((TQ.op & qQ.DELETE) === qQ.DELETE && hw.isSchema(TQ.previousValue)) {
              const QQ = XQ[TQ.previousValue[sQ]]?.[qQ.DELETE];
              for (let WQ = QQ?.length - 1; WQ >= 0; WQ--) QQ[WQ]()
            }
            if (hw.isSchema(FQ)) {
              if (!WQ.has(zQ)) {
                const QQ = PQ?.[qQ.REPLACE];
                for (let WQ = QQ?.length - 1; WQ >= 0; WQ--) QQ[WQ]()
              }
              if (PQ.hasOwnProperty(TQ.field)) {
                const QQ = PQ[TQ.field];
                for (let WQ = QQ?.length - 1; WQ >= 0; WQ--) QQ[WQ](TQ.value, TQ.previousValue)
              }
            } else {
              if ((TQ.op & qQ.DELETE) === qQ.DELETE) {
                if (void 0 !== TQ.previousValue) {
                  const QQ = PQ[qQ.DELETE];
                  for (let WQ = QQ?.length - 1; WQ >= 0; WQ--) QQ[WQ](TQ.previousValue, TQ.dynamicIndex ?? TQ.field)
                }
                if ((TQ.op & qQ.ADD) === qQ.ADD) {
                  const QQ = PQ[qQ.ADD];
                  for (let WQ = QQ?.length - 1; WQ >= 0; WQ--) QQ[WQ](TQ.value, TQ.dynamicIndex ?? TQ.field)
                }
              } else if ((TQ.op & qQ.ADD) === qQ.ADD && TQ.previousValue !== TQ.value) {
                const QQ = PQ[qQ.ADD];
                for (let WQ = QQ?.length - 1; WQ >= 0; WQ--) QQ[WQ](TQ.value, TQ.dynamicIndex ?? TQ.field)
              }
              if (TQ.value !== TQ.previousValue && (void 0 !== TQ.value || void 0 !== TQ.previousValue)) {
                const QQ = PQ[qQ.REPLACE];
                for (let WQ = QQ?.length - 1; WQ >= 0; WQ--) QQ[WQ](TQ.value, TQ.dynamicIndex ?? TQ.field)
              }
            }
            WQ.add(zQ)
          }
        }
      }, FQ
    }

    function Wq(QQ, WQ) {
      QQ.bR = WQ
    }
    Mw.encode = function(QQ) {
      let WQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
        offset: 0
      };
      const XQ = QQ.context,
        wQ = new Mw,
        qQ = new nw(wQ),
        TQ = XQ.schemas.get(QQ.state.constructor);
      TQ > 0 && (wQ.rootType = TQ);
      const zQ = new Set,
        sQ = {},
        FQ = QQ => {
          if (void 0 === QQ.extendsId || zQ.has(QQ.extendsId)) {
            zQ.add(QQ.id), wQ.types.push(QQ);
            const WQ = sQ[QQ.id];
            void 0 !== WQ && (delete sQ[QQ.id], WQ.forEach((QQ => FQ(QQ))))
          } else void 0 === sQ[QQ.extendsId] && (sQ[QQ.extendsId] = []), sQ[QQ.extendsId].push(QQ)
        };
      XQ.schemas.forEach(((QQ, WQ) => {
        const wQ = new mw;
        wQ.id = Number(QQ);
        const qQ = Object.getPrototypeOf(WQ);
        qQ !== hw && (wQ.extendsId = XQ.schemas.get(qQ));
        const TQ = WQ[Symbol.metadata];
        if (TQ !== qQ[Symbol.metadata]) {
          const QQ = TQ[aQ] ?? -1;
          for (let WQ = 0; WQ <= QQ; WQ++) {
            const QQ = TQ[WQ];
            if (void 0 === QQ) continue;
            const qQ = QQ.name;
            if (!Object.prototype.hasOwnProperty.call(TQ, qQ)) continue;
            const zQ = new Kw;
            let sQ;
            if (zQ.name = qQ, "string" === typeof QQ.type) sQ = QQ.type;
            else if (uW(QQ.type)) {
              const WQ = QQ.type.quantized;
              sQ = "quantized";
              const XQ = new Ow;
              XQ.min = WQ.min, XQ.max = WQ.max, XQ.bits = WQ.bits, XQ.mode = WQ.wrap ? 1 : 0, zQ.quantized = XQ
            } else {
              let WQ;
              hw.is(QQ.type) ? (sQ = "ref", WQ = QQ.type) : (sQ = Object.keys(QQ.type)[0], "string" === typeof QQ.type[sQ] ? zQ.childPrimitive = QQ.type[sQ] : WQ = QQ.type[sQ]), zQ.referencedType = WQ ? XQ.getTypeId(WQ) : -1
            }
            zQ.type = sQ, wQ.fields.push(zQ)
          }
        }
        FQ(wQ)
      }));
      for (const PQ in sQ) sQ[PQ].forEach((QQ => wQ.types.push(QQ)));
      return qQ.encodeAll(WQ).slice(0, WQ.offset)
    }, Mw.decode = function(QQ, WQ) {
      const XQ = new Mw;
      new Zw(XQ).decode(QQ, WQ);
      const wQ = new SW;
      XQ.types.forEach((QQ => {
        const WQ = wQ.get(QQ.extendsId) ?? hw,
          XQ = class extends WQ {};
        SW.register(XQ), wQ.add(XQ, QQ.id)
      }), {});
      XQ.types.forEach((QQ => {
        const WQ = wQ.get(QQ.id),
          qQ = NW.initialize(WQ),
          TQ = [];
        let zQ = QQ;
        do {
          TQ.push(zQ), zQ = XQ.types.find((QQ => QQ.id === zQ.extendsId))
        } while (zQ);
        let sQ = 0;
        TQ.reverse().forEach((QQ => {
          ((QQ, WQ, XQ) => {
            WQ.fields.forEach(((WQ, qQ) => {
              const TQ = XQ + qQ;
              if (void 0 !== WQ.quantized) {
                const XQ = WQ.quantized;
                NW.addField(QQ, TQ, WQ.name, {
                  quantized: CW({
                    min: XQ.min,
                    max: XQ.max,
                    bits: XQ.bits,
                    mode: 1 === XQ.mode ? "wrap" : "clamp"
                  })
                })
              } else if (void 0 !== WQ.referencedType) {
                const XQ = WQ.type,
                  qQ = wQ.get(WQ.referencedType) ?? WQ.childPrimitive;
                "ref" === XQ ? NW.addField(QQ, TQ, WQ.name, qQ) : NW.addField(QQ, TQ, WQ.name, {
                  [XQ]: qQ
                })
              } else NW.addField(QQ, TQ, WQ.name, WQ.type)
            }))
          })(qQ, QQ, sQ), sQ += QQ.fields.length
        }))
      }));
      const qQ = new(wQ.get(XQ.rootType || 0));
      return new Zw(qQ, wQ)
    }, Mw.makeEncodable = function(QQ) {
      const WQ = QQ[Symbol.metadata];
      if (!WQ) return QQ;
      const XQ = WQ[aQ];
      if (void 0 === XQ) return QQ;
      for (let wQ = 0; wQ <= XQ; wQ++) {
        const XQ = WQ[wQ];
        XQ && NW.defineField(QQ, WQ, wQ, XQ.name, XQ.type)
      }
      return Object.prototype.hasOwnProperty.call(QQ, dQ) && delete QQ[dQ], QQ
    };
    class Xq {
      ZI;
      uniqueRefIds = new Set;
      isTriggering = !1;
      constructor(QQ) {
        this.ZI = QQ, this.ZI.bR = this.bR.bind(this)
      }
      get callbacks() {
        return this.ZI.root.callbacks
      }
      get state() {
        return this.ZI.state
      }
      addCallback(QQ, WQ, XQ) {
        return this.ZI.root.addCallback(QQ, WQ, XQ)
      }
      addCallbackOrWaitCollectionAvailable(QQ, WQ, XQ, wQ) {
        let TQ = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4],
          zQ = () => {};
        const FQ = () => zQ(),
          PQ = QQ[WQ];
        if (PQ && void 0 !== PQ[sQ]) return TQ = TQ && !1 === this.isTriggering, XQ === qQ.ADD && TQ && PQ.forEach(((QQ, WQ) => {
          wQ(QQ, WQ)
        })), this.addCallback(PQ[sQ], XQ, wQ);
        {
          let qQ;
          return qQ = this.addCallback(QQ[sQ], WQ, ((QQ, WQ) => {
            null !== QQ && void 0 !== QQ && (qQ(), zQ = this.addCallback(QQ[sQ], XQ, wQ))
          })), zQ = qQ, FQ
        }
      }
      listen() {
        return "string" === typeof(arguments.length <= 0 ? void 0 : arguments[0]) ? this.listenInstance(this.state, arguments.length <= 0 ? void 0 : arguments[0], arguments.length <= 1 ? void 0 : arguments[1], arguments.length <= 2 ? void 0 : arguments[2]) : this.listenInstance(arguments.length <= 0 ? void 0 : arguments[0], arguments.length <= 1 ? void 0 : arguments[1], arguments.length <= 2 ? void 0 : arguments[2], arguments.length <= 3 ? void 0 : arguments[3])
      }
      listenInstance(QQ, WQ, XQ) {
        let wQ = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
        wQ = wQ && !1 === this.isTriggering;
        const qQ = QQ[WQ];
        return wQ && null !== qQ && void 0 !== qQ && XQ(qQ, void 0), this.addCallback(QQ[sQ], WQ, XQ)
      }
      onChange() {
        if (2 === arguments.length && "string" !== typeof(arguments.length <= 0 ? void 0 : arguments[0])) {
          const QQ = arguments.length <= 0 ? void 0 : arguments[0],
            WQ = arguments.length <= 1 ? void 0 : arguments[1];
          return this.addCallback(QQ[sQ], qQ.REPLACE, WQ)
        }
        return "string" === typeof(arguments.length <= 0 ? void 0 : arguments[0]) ? this.addCallbackOrWaitCollectionAvailable(this.state, arguments.length <= 0 ? void 0 : arguments[0], qQ.REPLACE, arguments.length <= 1 ? void 0 : arguments[1]) : this.addCallbackOrWaitCollectionAvailable(arguments.length <= 0 ? void 0 : arguments[0], arguments.length <= 1 ? void 0 : arguments[1], qQ.REPLACE, arguments.length <= 2 ? void 0 : arguments[2])
      }
      PD() {
        return "string" === typeof(arguments.length <= 0 ? void 0 : arguments[0]) ? this.addCallbackOrWaitCollectionAvailable(this.state, arguments.length <= 0 ? void 0 : arguments[0], qQ.ADD, arguments.length <= 1 ? void 0 : arguments[1], !1 !== (arguments.length <= 2 ? void 0 : arguments[2])) : this.addCallbackOrWaitCollectionAvailable(arguments.length <= 0 ? void 0 : arguments[0], arguments.length <= 1 ? void 0 : arguments[1], qQ.ADD, arguments.length <= 2 ? void 0 : arguments[2], !1 !== (arguments.length <= 3 ? void 0 : arguments[3]))
      }
      JA() {
        return "string" === typeof(arguments.length <= 0 ? void 0 : arguments[0]) ? this.addCallbackOrWaitCollectionAvailable(this.state, arguments.length <= 0 ? void 0 : arguments[0], qQ.DELETE, arguments.length <= 1 ? void 0 : arguments[1]) : this.addCallbackOrWaitCollectionAvailable(arguments.length <= 0 ? void 0 : arguments[0], arguments.length <= 1 ? void 0 : arguments[1], qQ.DELETE, arguments.length <= 2 ? void 0 : arguments[2])
      }
      bindTo(QQ, WQ, XQ) {
        let wQ = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
        const TQ = QQ.constructor[Symbol.metadata];
        XQ || (XQ = Object.keys(TQ).filter((QQ => !isNaN(Number(QQ)))).map((QQ => TQ[QQ].name)));
        const zQ = () => {
          for (const wQ of XQ) {
            const XQ = QQ[wQ];
            void 0 !== XQ && (WQ[wQ] = XQ)
          }
        };
        return wQ && zQ(), this.addCallback(QQ[sQ], qQ.REPLACE, zQ)
      }
      bR(QQ) {
        this.uniqueRefIds.clear(), this.isTriggering = !0;
        for (let WQ = 0, XQ = QQ.length; WQ < XQ; WQ++) {
          const XQ = QQ[WQ],
            wQ = XQ.refId,
            TQ = XQ.ref,
            zQ = this.callbacks[wQ];
          if (zQ) {
            if ((XQ.op & qQ.DELETE) === qQ.DELETE && hw.isSchema(XQ.previousValue)) {
              const QQ = XQ.previousValue[sQ],
                WQ = this.callbacks[QQ]?.[qQ.DELETE];
              if (WQ)
                for (let XQ = WQ.length - 1; XQ >= 0; XQ--) try {
                  WQ[XQ]()
                } catch (zq) {
                  console.error(zq)
                }
            }
            if (hw.isSchema(TQ)) {
              if (!this.uniqueRefIds.has(wQ)) {
                const QQ = zQ[qQ.REPLACE];
                if (QQ)
                  for (let WQ = QQ.length - 1; WQ >= 0; WQ--) try {
                    QQ[WQ]()
                  } catch (zq) {
                    console.error(zq)
                  }
              }
              const QQ = zQ[XQ.field];
              if (QQ)
                for (let WQ = QQ.length - 1; WQ >= 0; WQ--) try {
                  QQ[WQ](XQ.value, XQ.previousValue)
                } catch (zq) {
                  console.error(zq)
                }
            } else {
              const QQ = XQ.dynamicIndex ?? XQ.field;
              if ((XQ.op & qQ.DELETE) === qQ.DELETE) {
                if (void 0 !== XQ.previousValue) {
                  const WQ = zQ[qQ.DELETE];
                  if (WQ)
                    for (let wQ = WQ.length - 1; wQ >= 0; wQ--) try {
                      WQ[wQ](XQ.previousValue, QQ)
                    } catch (zq) {
                      console.error(zq)
                    }
                }
                if ((XQ.op & qQ.ADD) === qQ.ADD) {
                  const WQ = zQ[qQ.ADD];
                  if (WQ)
                    for (let wQ = WQ.length - 1; wQ >= 0; wQ--) try {
                      WQ[wQ](XQ.value, QQ)
                    } catch (zq) {
                      console.error(zq)
                    }
                }
              } else if ((XQ.op & qQ.ADD) === qQ.ADD && XQ.previousValue !== XQ.value) {
                const WQ = zQ[qQ.ADD];
                if (WQ)
                  for (let wQ = WQ.length - 1; wQ >= 0; wQ--) try {
                    WQ[wQ](XQ.value, QQ)
                  } catch (zq) {
                    console.error(zq)
                  }
              }
              if (XQ.value !== XQ.previousValue) {
                const WQ = zQ[qQ.REPLACE];
                if (WQ)
                  for (let wQ = WQ.length - 1; wQ >= 0; wQ--) try {
                    WQ[wQ](QQ, XQ.value)
                  } catch (zq) {
                    console.error(zq)
                  }
              }
            }
            this.uniqueRefIds.add(wQ)
          }
        }
        this.isTriggering = !1
      }
    }
    const wq = {
      get(QQ) {
        if (QQ instanceof Zw) return new Xq(QQ);
        if ("ZI" in QQ.VV) return new Xq(QQ.VV.ZI);
        throw new Error("Invalid room or decoder")
      },
      getLegacy(QQ) {
        if (QQ instanceof Zw) return Qq(QQ);
        if ("ZI" in QQ.VV) return Qq(QQ.VV.ZI);
        throw new Error("Invalid room or decoder")
      },
      getRawChanges: (QQ, WQ) => Wq(QQ, WQ)
    };
    class qq {
      _free = [];
      _factory;
      _maxSize;
      constructor(QQ) {
        let WQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        this._factory = QQ, this._maxSize = WQ.maxSize ?? 1 / 0;
        const XQ = WQ.preallocate ?? 0;
        for (let wQ = 0; wQ < XQ; wQ++) this._free.push(QQ())
      }
      acquire() {
        return this._free.length > 0 ? this._free.pop() : this._factory()
      }
      release(QQ) {
        hw.reset(QQ), this._free.length < this._maxSize && this._free.push(QQ)
      }
      get size() {
        return this._free.length
      }
    }

    function Tq(QQ) {
      return new qq((() => new QQ), arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {})
    }
    bW("map", {
      constructor: qw
    }), bW("array", {
      constructor: Xw
    }), bW("set", {
      constructor: zw
    }), bW("collection", {
      constructor: Tw
    })
  },
  9476: (QQ, WQ, XQ) => {
    XQ.r(WQ), XQ.d(WQ, {
      __addDisposableResource: () => uQ,
      __assign: () => TQ,
      __asyncDelegator: () => HQ,
      __asyncGenerator: () => dQ,
      __asyncValues: () => aQ,
      __await: () => vQ,
      __awaiter: () => jQ,
      __classPrivateFieldGet: () => RQ,
      __classPrivateFieldIn: () => CQ,
      __classPrivateFieldSet: () => EQ,
      __createBinding: () => yQ,
      __decorate: () => sQ,
      __disposeResources: () => kQ,
      __esDecorate: () => PQ,
      __exportStar: () => VQ,
      __extends: () => qQ,
      __generator: () => BQ,
      __importDefault: () => AQ,
      __importStar: () => cQ,
      __makeTemplateObject: () => lQ,
      __metadata: () => IQ,
      __param: () => FQ,
      __propKey: () => JQ,
      __read: () => pQ,
      __rest: () => zQ,
      __rewriteRelativeImportExtension: () => fQ,
      __runInitializers: () => gQ,
      __setFunctionName: () => rQ,
      __spread: () => GQ,
      __spreadArray: () => bQ,
      __spreadArrays: () => UQ,
      __values: () => DQ,
      default: () => SQ
    });
    var wQ = function(QQ, WQ) {
      return wQ = Object.setPrototypeOf || {
        __proto__: []
      }
      instanceof Array && function(QQ, WQ) {
        QQ.__proto__ = WQ
      } || function(QQ, WQ) {
        for (var XQ in WQ) Object.prototype.hasOwnProperty.call(WQ, XQ) && (QQ[XQ] = WQ[XQ])
      }, wQ(QQ, WQ)
    };

    function qQ(QQ, WQ) {
      if ("function" !== typeof WQ && null !== WQ) throw new TypeError("Class extends value " + String(WQ) + " is not a constructor or null");

      function XQ() {
        this.constructor = QQ
      }
      wQ(QQ, WQ), QQ.prototype = null === WQ ? Object.create(WQ) : (XQ.prototype = WQ.prototype, new XQ)
    }
    var TQ = function() {
      return TQ = Object.assign || function(QQ) {
        for (var WQ, XQ = 1, wQ = arguments.length; XQ < wQ; XQ++)
          for (var qQ in WQ = arguments[XQ]) Object.prototype.hasOwnProperty.call(WQ, qQ) && (QQ[qQ] = WQ[qQ]);
        return QQ
      }, TQ.apply(this, arguments)
    };

    function zQ(QQ, WQ) {
      var XQ = {};
      for (var wQ in QQ) Object.prototype.hasOwnProperty.call(QQ, wQ) && WQ.indexOf(wQ) < 0 && (XQ[wQ] = QQ[wQ]);
      if (null != QQ && "function" === typeof Object.getOwnPropertySymbols) {
        var qQ = 0;
        for (wQ = Object.getOwnPropertySymbols(QQ); qQ < wQ.length; qQ++) WQ.indexOf(wQ[qQ]) < 0 && Object.prototype.propertyIsEnumerable.call(QQ, wQ[qQ]) && (XQ[wQ[qQ]] = QQ[wQ[qQ]])
      }
      return XQ
    }

    function sQ(QQ, WQ, XQ, wQ) {
      var qQ, TQ = arguments.length,
        zQ = TQ < 3 ? WQ : null === wQ ? wQ = Object.getOwnPropertyDescriptor(WQ, XQ) : wQ;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) zQ = Reflect.decorate(QQ, WQ, XQ, wQ);
      else
        for (var sQ = QQ.length - 1; sQ >= 0; sQ--)(qQ = QQ[sQ]) && (zQ = (TQ < 3 ? qQ(zQ) : TQ > 3 ? qQ(WQ, XQ, zQ) : qQ(WQ, XQ)) || zQ);
      return TQ > 3 && zQ && Object.defineProperty(WQ, XQ, zQ), zQ
    }

    function FQ(QQ, WQ) {
      return function(XQ, wQ) {
        WQ(XQ, wQ, QQ)
      }
    }

    function PQ(QQ, WQ, XQ, wQ, qQ, TQ) {
      function zQ(QQ) {
        if (void 0 !== QQ && "function" !== typeof QQ) throw new TypeError("Function expected");
        return QQ
      }
      for (var sQ, FQ = wQ.kind, PQ = "getter" === FQ ? "get" : "setter" === FQ ? "set" : "value", gQ = !WQ && QQ ? wQ.static ? QQ : QQ.prototype : null, JQ = WQ || (gQ ? Object.getOwnPropertyDescriptor(gQ, wQ.name) : {}), rQ = !1, IQ = XQ.length - 1; IQ >= 0; IQ--) {
        var jQ = {};
        for (var BQ in wQ) jQ[BQ] = "access" === BQ ? {} : wQ[BQ];
        for (var BQ in wQ.access) jQ.access[BQ] = wQ.access[BQ];
        jQ.addInitializer = function(QQ) {
          if (rQ) throw new TypeError("Cannot add initializers after decoration has completed");
          TQ.push(zQ(QQ || null))
        };
        var yQ = (0, XQ[IQ])("accessor" === FQ ? {
          get: JQ.get,
          set: JQ.set
        } : JQ[PQ], jQ);
        if ("accessor" === FQ) {
          if (void 0 === yQ) continue;
          if (null === yQ || "object" !== typeof yQ) throw new TypeError("Object expected");
          (sQ = zQ(yQ.get)) && (JQ.get = sQ), (sQ = zQ(yQ.set)) && (JQ.set = sQ), (sQ = zQ(yQ.init)) && qQ.unshift(sQ)
        } else(sQ = zQ(yQ)) && ("field" === FQ ? qQ.unshift(sQ) : JQ[PQ] = sQ)
      }
      gQ && Object.defineProperty(gQ, wQ.name, JQ), rQ = !0
    }

    function gQ(QQ, WQ, XQ) {
      for (var wQ = arguments.length > 2, qQ = 0; qQ < WQ.length; qQ++) XQ = wQ ? WQ[qQ].call(QQ, XQ) : WQ[qQ].call(QQ);
      return wQ ? XQ : void 0
    }

    function JQ(QQ) {
      return "symbol" === typeof QQ ? QQ : "".concat(QQ)
    }

    function rQ(QQ, WQ, XQ) {
      return "symbol" === typeof WQ && (WQ = WQ.description ? "[".concat(WQ.description, "]") : ""), Object.defineProperty(QQ, "name", {
        configurable: !0,
        value: XQ ? "".concat(XQ, " ", WQ) : WQ
      })
    }

    function IQ(QQ, WQ) {
      if ("object" === typeof Reflect && "function" === typeof Reflect.metadata) return Reflect.metadata(QQ, WQ)
    }

    function jQ(QQ, WQ, XQ, wQ) {
      return new(XQ || (XQ = Promise))((function(qQ, TQ) {
        function zQ(QQ) {
          try {
            FQ(wQ.next(QQ))
          } catch (WQ) {
            TQ(WQ)
          }
        }

        function sQ(QQ) {
          try {
            FQ(wQ.throw(QQ))
          } catch (WQ) {
            TQ(WQ)
          }
        }

        function FQ(QQ) {
          var WQ;
          QQ.done ? qQ(QQ.value) : (WQ = QQ.value, WQ instanceof XQ ? WQ : new XQ((function(QQ) {
            QQ(WQ)
          }))).then(zQ, sQ)
        }
        FQ((wQ = wQ.apply(QQ, WQ || [])).next())
      }))
    }

    function BQ(QQ, WQ) {
      var XQ, wQ, qQ, TQ = {
          label: 0,
          sent: function() {
            if (1 & qQ[0]) throw qQ[1];
            return qQ[1]
          },
          trys: [],
          ops: []
        },
        zQ = Object.create(("function" === typeof Iterator ? Iterator : Object).prototype);
      return zQ.next = sQ(0), zQ.throw = sQ(1), zQ.return = sQ(2), "function" === typeof Symbol && (zQ[Symbol.iterator] = function() {
        return this
      }), zQ;

      function sQ(sQ) {
        return function(FQ) {
          return function(sQ) {
            if (XQ) throw new TypeError("Generator is already executing.");
            for (; zQ && (zQ = 0, sQ[0] && (TQ = 0)), TQ;) try {
              if (XQ = 1, wQ && (qQ = 2 & sQ[0] ? wQ.return : sQ[0] ? wQ.throw || ((qQ = wQ.return) && qQ.call(wQ), 0) : wQ.next) && !(qQ = qQ.call(wQ, sQ[1])).done) return qQ;
              switch (wQ = 0, qQ && (sQ = [2 & sQ[0], qQ.value]), sQ[0]) {
                case 0:
                case 1:
                  qQ = sQ;
                  break;
                case 4:
                  return TQ.label++, {
                    value: sQ[1],
                    done: !1
                  };
                case 5:
                  TQ.label++, wQ = sQ[1], sQ = [0];
                  continue;
                case 7:
                  sQ = TQ.ops.pop(), TQ.trys.pop();
                  continue;
                default:
                  if (!(qQ = (qQ = TQ.trys).length > 0 && qQ[qQ.length - 1]) && (6 === sQ[0] || 2 === sQ[0])) {
                    TQ = 0;
                    continue
                  }
                  if (3 === sQ[0] && (!qQ || sQ[1] > qQ[0] && sQ[1] < qQ[3])) {
                    TQ.label = sQ[1];
                    break
                  }
                  if (6 === sQ[0] && TQ.label < qQ[1]) {
                    TQ.label = qQ[1], qQ = sQ;
                    break
                  }
                  if (qQ && TQ.label < qQ[2]) {
                    TQ.label = qQ[2], TQ.ops.push(sQ);
                    break
                  }
                  qQ[2] && TQ.ops.pop(), TQ.trys.pop();
                  continue
              }
              sQ = WQ.call(QQ, TQ)
            } catch (FQ) {
              sQ = [6, FQ], wQ = 0
            } finally {
              XQ = qQ = 0
            }
            if (5 & sQ[0]) throw sQ[1];
            return {
              value: sQ[0] ? sQ[1] : void 0,
              done: !0
            }
          }([sQ, FQ])
        }
      }
    }
    var yQ = Object.create ? function(QQ, WQ, XQ, wQ) {
      void 0 === wQ && (wQ = XQ);
      var qQ = Object.getOwnPropertyDescriptor(WQ, XQ);
      qQ && !("get" in qQ ? !WQ.__esModule : qQ.writable || qQ.configurable) || (qQ = {
        enumerable: !0,
        get: function() {
          return WQ[XQ]
        }
      }), Object.defineProperty(QQ, wQ, qQ)
    } : function(QQ, WQ, XQ, wQ) {
      void 0 === wQ && (wQ = XQ), QQ[wQ] = WQ[XQ]
    };

    function VQ(QQ, WQ) {
      for (var XQ in QQ) "default" === XQ || Object.prototype.hasOwnProperty.call(WQ, XQ) || yQ(WQ, QQ, XQ)
    }

    function DQ(QQ) {
      var WQ = "function" === typeof Symbol && Symbol.iterator,
        XQ = WQ && QQ[WQ],
        wQ = 0;
      if (XQ) return XQ.call(QQ);
      if (QQ && "number" === typeof QQ.length) return {
        next: function() {
          return QQ && wQ >= QQ.length && (QQ = void 0), {
            value: QQ && QQ[wQ++],
            done: !QQ
          }
        }
      };
      throw new TypeError(WQ ? "Object is not iterable." : "Symbol.iterator is not defined.")
    }

    function pQ(QQ, WQ) {
      var XQ = "function" === typeof Symbol && QQ[Symbol.iterator];
      if (!XQ) return QQ;
      var wQ, qQ, TQ = XQ.call(QQ),
        zQ = [];
      try {
        for (;
          (void 0 === WQ || WQ-- > 0) && !(wQ = TQ.next()).done;) zQ.push(wQ.value)
      } catch (sQ) {
        qQ = {
          error: sQ
        }
      } finally {
        try {
          wQ && !wQ.done && (XQ = TQ.return) && XQ.call(TQ)
        } finally {
          if (qQ) throw qQ.error
        }
      }
      return zQ
    }

    function GQ() {
      for (var QQ = [], WQ = 0; WQ < arguments.length; WQ++) QQ = QQ.concat(pQ(arguments[WQ]));
      return QQ
    }

    function UQ() {
      for (var QQ = 0, WQ = 0, XQ = arguments.length; WQ < XQ; WQ++) QQ += arguments[WQ].length;
      var wQ = Array(QQ),
        qQ = 0;
      for (WQ = 0; WQ < XQ; WQ++)
        for (var TQ = arguments[WQ], zQ = 0, sQ = TQ.length; zQ < sQ; zQ++, qQ++) wQ[qQ] = TQ[zQ];
      return wQ
    }

    function bQ(QQ, WQ, XQ) {
      if (XQ || 2 === arguments.length)
        for (var wQ, qQ = 0, TQ = WQ.length; qQ < TQ; qQ++) !wQ && qQ in WQ || (wQ || (wQ = Array.prototype.slice.call(WQ, 0, qQ)), wQ[qQ] = WQ[qQ]);
      return QQ.concat(wQ || Array.prototype.slice.call(WQ))
    }

    function vQ(QQ) {
      return this instanceof vQ ? (this.v = QQ, this) : new vQ(QQ)
    }

    function dQ(QQ, WQ, XQ) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var wQ, qQ = XQ.apply(QQ, WQ || []),
        TQ = [];
      return wQ = Object.create(("function" === typeof AsyncIterator ? AsyncIterator : Object).prototype), zQ("next"), zQ("throw"), zQ("return", (function(QQ) {
        return function(WQ) {
          return Promise.resolve(WQ).then(QQ, PQ)
        }
      })), wQ[Symbol.asyncIterator] = function() {
        return this
      }, wQ;

      function zQ(QQ, WQ) {
        qQ[QQ] && (wQ[QQ] = function(WQ) {
          return new Promise((function(XQ, wQ) {
            TQ.push([QQ, WQ, XQ, wQ]) > 1 || sQ(QQ, WQ)
          }))
        }, WQ && (wQ[QQ] = WQ(wQ[QQ])))
      }

      function sQ(QQ, WQ) {
        try {
          (XQ = qQ[QQ](WQ)).value instanceof vQ ? Promise.resolve(XQ.value.v).then(FQ, PQ) : gQ(TQ[0][2], XQ)
        } catch (wQ) {
          gQ(TQ[0][3], wQ)
        }
        var XQ
      }

      function FQ(QQ) {
        sQ("next", QQ)
      }

      function PQ(QQ) {
        sQ("throw", QQ)
      }

      function gQ(QQ, WQ) {
        QQ(WQ), TQ.shift(), TQ.length && sQ(TQ[0][0], TQ[0][1])
      }
    }

    function HQ(QQ) {
      var WQ, XQ;
      return WQ = {}, wQ("next"), wQ("throw", (function(QQ) {
        throw QQ
      })), wQ("return"), WQ[Symbol.iterator] = function() {
        return this
      }, WQ;

      function wQ(wQ, qQ) {
        WQ[wQ] = QQ[wQ] ? function(WQ) {
          return (XQ = !XQ) ? {
            value: vQ(QQ[wQ](WQ)),
            done: !1
          } : qQ ? qQ(WQ) : WQ
        } : qQ
      }
    }

    function aQ(QQ) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var WQ, XQ = QQ[Symbol.asyncIterator];
      return XQ ? XQ.call(QQ) : (QQ = DQ(QQ), WQ = {}, wQ("next"), wQ("throw"), wQ("return"), WQ[Symbol.asyncIterator] = function() {
        return this
      }, WQ);

      function wQ(XQ) {
        WQ[XQ] = QQ[XQ] && function(WQ) {
          return new Promise((function(wQ, qQ) {
            (function(QQ, WQ, XQ, wQ) {
              Promise.resolve(wQ).then((function(WQ) {
                QQ({
                  value: WQ,
                  done: XQ
                })
              }), WQ)
            })(wQ, qQ, (WQ = QQ[XQ](WQ)).done, WQ.value)
          }))
        }
      }
    }

    function lQ(QQ, WQ) {
      return Object.defineProperty ? Object.defineProperty(QQ, "raw", {
        value: WQ
      }) : QQ.raw = WQ, QQ
    }
    var hQ = Object.create ? function(QQ, WQ) {
        Object.defineProperty(QQ, "default", {
          enumerable: !0,
          value: WQ
        })
      } : function(QQ, WQ) {
        QQ.default = WQ
      },
      iQ = function(QQ) {
        return iQ = Object.getOwnPropertyNames || function(QQ) {
          var WQ = [];
          for (var XQ in QQ) Object.prototype.hasOwnProperty.call(QQ, XQ) && (WQ[WQ.length] = XQ);
          return WQ
        }, iQ(QQ)
      };

    function cQ(QQ) {
      if (QQ && QQ.__esModule) return QQ;
      var WQ = {};
      if (null != QQ)
        for (var XQ = iQ(QQ), wQ = 0; wQ < XQ.length; wQ++) "default" !== XQ[wQ] && yQ(WQ, QQ, XQ[wQ]);
      return hQ(WQ, QQ), WQ
    }

    function AQ(QQ) {
      return QQ && QQ.__esModule ? QQ : {
        default: QQ
      }
    }

    function RQ(QQ, WQ, XQ, wQ) {
      if ("a" === XQ && !wQ) throw new TypeError("Private accessor was defined without a getter");
      if ("function" === typeof WQ ? QQ !== WQ || !wQ : !WQ.has(QQ)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
      return "m" === XQ ? wQ : "a" === XQ ? wQ.call(QQ) : wQ ? wQ.value : WQ.get(QQ)
    }

    function EQ(QQ, WQ, XQ, wQ, qQ) {
      if ("m" === wQ) throw new TypeError("Private method is not writable");
      if ("a" === wQ && !qQ) throw new TypeError("Private accessor was defined without a setter");
      if ("function" === typeof WQ ? QQ !== WQ || !qQ : !WQ.has(QQ)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
      return "a" === wQ ? qQ.call(QQ, XQ) : qQ ? qQ.value = XQ : WQ.set(QQ, XQ), XQ
    }

    function CQ(QQ, WQ) {
      if (null === WQ || "object" !== typeof WQ && "function" !== typeof WQ) throw new TypeError("Cannot use 'in' operator on non-object");
      return "function" === typeof QQ ? WQ === QQ : QQ.has(WQ)
    }

    function uQ(QQ, WQ, XQ) {
      if (null !== WQ && void 0 !== WQ) {
        if ("object" !== typeof WQ && "function" !== typeof WQ) throw new TypeError("Object expected.");
        var wQ, qQ;
        if (XQ) {
          if (!Symbol.asyncDispose) throw new TypeError("Symbol.asyncDispose is not defined.");
          wQ = WQ[Symbol.asyncDispose]
        }
        if (void 0 === wQ) {
          if (!Symbol.dispose) throw new TypeError("Symbol.dispose is not defined.");
          wQ = WQ[Symbol.dispose], XQ && (qQ = wQ)
        }
        if ("function" !== typeof wQ) throw new TypeError("Object not disposable.");
        qQ && (wQ = function() {
          try {
            qQ.call(this)
          } catch (QQ) {
            return Promise.reject(QQ)
          }
        }), QQ.stack.push({
          value: WQ,
          dispose: wQ,
          async: XQ
        })
      } else XQ && QQ.stack.push({
        async: !0
      });
      return WQ
    }
    var LQ = "function" === typeof SuppressedError ? SuppressedError : function(QQ, WQ, XQ) {
      var wQ = new Error(XQ);
      return wQ.name = "SuppressedError", wQ.error = QQ, wQ.suppressed = WQ, wQ
    };

    function kQ(QQ) {
      function WQ(WQ) {
        QQ.error = QQ.hasError ? new LQ(WQ, QQ.error, "An error was suppressed during disposal.") : WQ, QQ.hasError = !0
      }
      var XQ, wQ = 0;
      return function qQ() {
        for (; XQ = QQ.stack.pop();) try {
          if (!XQ.async && 1 === wQ) return wQ = 0, QQ.stack.push(XQ), Promise.resolve().then(qQ);
          if (XQ.dispose) {
            var TQ = XQ.dispose.call(XQ.value);
            if (XQ.async) return wQ |= 2, Promise.resolve(TQ).then(qQ, (function(QQ) {
              return WQ(QQ), qQ()
            }))
          } else wQ |= 1
        } catch (zQ) {
          WQ(zQ)
        }
        if (1 === wQ) return QQ.hasError ? Promise.reject(QQ.error) : Promise.resolve();
        if (QQ.hasError) throw QQ.error
      }()
    }

    function fQ(QQ, WQ) {
      return "string" === typeof QQ && /^\.\.?\//.test(QQ) ? QQ.replace(/\.(tsx)$|((?:\.d)?)((?:\.[^./]+?)?)\.([cm]?)ts$/i, (function(QQ, XQ, wQ, qQ, TQ) {
        return XQ ? WQ ? ".jsx" : ".js" : !wQ || qQ && TQ ? wQ + qQ + "." + TQ.toLowerCase() + "js" : QQ
      })) : QQ
    }
    const SQ = {
      __extends: qQ,
      __assign: TQ,
      __rest: zQ,
      __decorate: sQ,
      __param: FQ,
      __esDecorate: PQ,
      __runInitializers: gQ,
      __propKey: JQ,
      __setFunctionName: rQ,
      __metadata: IQ,
      __awaiter: jQ,
      __generator: BQ,
      __createBinding: yQ,
      __exportStar: VQ,
      __values: DQ,
      __read: pQ,
      __spread: GQ,
      __spreadArrays: UQ,
      __spreadArray: bQ,
      __await: vQ,
      __asyncGenerator: dQ,
      __asyncDelegator: HQ,
      __asyncValues: aQ,
      __makeTemplateObject: lQ,
      __importStar: cQ,
      __importDefault: AQ,
      __classPrivateFieldGet: RQ,
      __classPrivateFieldSet: EQ,
      __classPrivateFieldIn: CQ,
      __addDisposableResource: uQ,
      __disposeResources: kQ,
      __rewriteRelativeImportExtension: fQ
    }
  }
};
Object.freeze(modules);
for (const QQ in modules) Object.freeze(modules[QQ]);