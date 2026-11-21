export const id = 183;
export const ids = [183];
export const modules = {
  8938: (QQ, FQ) => {
    FQ.discordURLBuilder = function(QQ) {
      var FQ;
      const wQ = (null === (FQ = null === window || void 0 === window ? void 0 : window.location) || void 0 === FQ ? void 0 : FQ.hostname) || "localhost",
        LQ = QQ.hostname.split("."),
        qQ = !QQ.hostname.includes("trycloudflare.com") && !QQ.hostname.includes("discordsays.com") && LQ.length > 2 ? `/${LQ[0]}` : "";
      return QQ.pathname.startsWith("/.proxy") ? `${QQ.protocol}//${wQ}${qQ}${QQ.pathname}${QQ.search}` : `${QQ.protocol}//${wQ}/.proxy/colyseus${qQ}${QQ.pathname}${QQ.search}`
    }
  },
  8931: (QQ, FQ, wQ) => {
    var LQ, qQ, oQ, DQ, kQ = wQ(8849),
      vQ = wQ(8936),
      mQ = wQ(8902);
    LQ = new WeakMap, qQ = new WeakMap, oQ = new WeakMap, DQ = new WeakMap, FQ.Auth = class {
      constructor(QQ) {
        this.http = QQ, this.settings = {
          path: "/auth",
          key: "colyseus-auth-token"
        }, LQ.set(this, !1), qQ.set(this, void 0), oQ.set(this, void 0), DQ.set(this, mQ.createNanoEvents()), vQ.getItem(this.settings.key, (QQ => this.token = QQ))
      }
      set token(QQ) {
        this.http.authToken = QQ
      }
      get token() {
        return this.http.authToken
      }
      onChange(QQ) {
        const FQ = kQ.__classPrivateFieldGet(this, DQ, "f").on("change", QQ);
        return kQ.__classPrivateFieldGet(this, LQ, "f") || kQ.__classPrivateFieldSet(this, qQ, new Promise(((QQ, FQ) => {
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
        })), "f"), kQ.__classPrivateFieldSet(this, LQ, !0, "f"), FQ
      }
      getUserData() {
        return kQ.__awaiter(this, void 0, void 0, (function*() {
          if (this.token) return (yield this.http.get(`${this.settings.path}/userdata`)).data;
          throw new Error("missing auth.token")
        }))
      }
      registerWithEmailAndPassword(QQ, FQ, wQ) {
        return kQ.__awaiter(this, void 0, void 0, (function*() {
          const LQ = (yield this.http.post(`${this.settings.path}/register`, {
            body: {
              email: QQ,
              password: FQ,
              options: wQ
            }
          })).data;
          return this.emitChange(LQ), LQ
        }))
      }
      signInWithEmailAndPassword(QQ, FQ) {
        return kQ.__awaiter(this, void 0, void 0, (function*() {
          const wQ = (yield this.http.post(`${this.settings.path}/login`, {
            body: {
              email: QQ,
              password: FQ
            }
          })).data;
          return this.emitChange(wQ), wQ
        }))
      }
      signInAnonymously(QQ) {
        return kQ.__awaiter(this, void 0, void 0, (function*() {
          const FQ = (yield this.http.post(`${this.settings.path}/anonymous`, {
            body: {
              options: QQ
            }
          })).data;
          return this.emitChange(FQ), FQ
        }))
      }
      sendPasswordResetEmail(QQ) {
        return kQ.__awaiter(this, void 0, void 0, (function*() {
          return (yield this.http.post(`${this.settings.path}/forgot-password`, {
            body: {
              email: QQ
            }
          })).data
        }))
      }
      signInWithProvider(QQ) {
        return kQ.__awaiter(this, arguments, void 0, (function*(QQ) {
          let FQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          return new Promise(((wQ, LQ) => {
            const qQ = FQ.width || 480,
              DQ = FQ.height || 768,
              vQ = this.token ? `?token=${this.token}` : "",
              mQ = `Login with ${QQ[0].toUpperCase()+QQ.substring(1)}`,
              uQ = this.http.client.getHttpEndpoint(`${FQ.prefix||`${this.settings.path}/provider`}/${QQ}${vQ}`),
              HQ = screen.width / 2 - qQ / 2,
              bQ = screen.height / 2 - DQ / 2;
            kQ.__classPrivateFieldSet(this, oQ, window.open(uQ, mQ, "toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no, copyhistory=no, width=" + qQ + ", height=" + DQ + ", top=" + bQ + ", left=" + HQ), "f");
            const YQ = QQ => {
                void 0 === QQ.data.user && void 0 === QQ.data.token || (clearInterval(xQ), kQ.__classPrivateFieldGet(this, oQ, "f").close(), kQ.__classPrivateFieldSet(this, oQ, void 0, "f"), window.removeEventListener("message", YQ), void 0 !== QQ.data.error ? LQ(QQ.data.error) : (wQ(QQ.data), this.emitChange(QQ.data)))
              },
              xQ = setInterval((() => {
                kQ.__classPrivateFieldGet(this, oQ, "f") && !kQ.__classPrivateFieldGet(this, oQ, "f").closed || (kQ.__classPrivateFieldSet(this, oQ, void 0, "f"), LQ("wF"), window.removeEventListener("message", YQ))
              }), 200);
            window.addEventListener("message", YQ)
          }))
        }))
      }
      signOut() {
        return kQ.__awaiter(this, void 0, void 0, (function*() {
          this.emitChange({
            user: null,
            token: null
          })
        }))
      }
      emitChange(QQ) {
        void 0 !== QQ.token && (this.token = QQ.token, null === QQ.token ? vQ.removeItem(this.settings.key) : vQ.setItem(this.settings.key, QQ.token)), kQ.__classPrivateFieldGet(this, DQ, "f").emit("change", QQ)
      }
    }
  },
  8847: (QQ, FQ, wQ) => {
    var LQ, qQ = wQ(8849),
      oQ = wQ(8854),
      DQ = wQ(8858),
      kQ = wQ(8916),
      vQ = wQ(8931),
      mQ = wQ(8938);
    class uQ extends Error {
      constructor(QQ, FQ) {
        super(QQ), this.code = FQ, this.name = "MatchMakeError", Object.setPrototypeOf(this, uQ.prototype)
      }
    }
    const HQ = "undefined" !== typeof window && "undefined" !== typeof(null === (LQ = null === window || void 0 === window ? void 0 : window.location) || void 0 === LQ ? void 0 : LQ.hostname) ? `${window.location.protocol.replace("http","ws")}//${window.location.hostname}${window.location.port&&`:${window.location.port}`}` : "ws://127.0.0.1:2567";
    class bQ {
      constructor() {
        let QQ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : HQ,
          FQ = arguments.length > 1 ? arguments[1] : void 0;
        var wQ, LQ;
        if ("string" === typeof QQ) {
          const FQ = QQ.startsWith("/") ? new URL(QQ, HQ) : new URL(QQ),
            wQ = "https:" === FQ.protocol || "wss:" === FQ.protocol,
            LQ = Number(FQ.port || (wQ ? 443 : 80));
          this.settings = {
            hostname: FQ.hostname,
            pathname: FQ.pathname,
            port: LQ,
            secure: wQ,
            searchParams: FQ.searchParams.toString() || void 0
          }
        } else void 0 === QQ.port && (QQ.port = QQ.secure ? 443 : 80), void 0 === QQ.pathname && (QQ.pathname = ""), this.settings = QQ;
        this.settings.pathname.endsWith("/") && (this.settings.pathname = this.settings.pathname.slice(0, -1)), this.http = new kQ.HTTP(this, (null === FQ || void 0 === FQ ? void 0 : FQ.headers) || {}), this.auth = new vQ.Auth(this.http), this.urlBuilder = null === FQ || void 0 === FQ ? void 0 : FQ.urlBuilder, !this.urlBuilder && "undefined" !== typeof window && (null === (LQ = null === (wQ = null === window || void 0 === window ? void 0 : window.location) || void 0 === wQ ? void 0 : wQ.hostname) || void 0 === LQ ? void 0 : LQ.includes("discordsays.com")) && (this.urlBuilder = mQ.discordURLBuilder, console.log("Colyseus SDK: Discord Embedded SDK detected. Using custom URL builder."))
      }
      joinOrCreate(QQ) {
        return qQ.__awaiter(this, arguments, void 0, (function*(QQ) {
          let FQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            wQ = arguments.length > 2 ? arguments[2] : void 0;
          return yield this.createMatchMakeRequest("joinOrCreate", QQ, FQ, wQ)
        }))
      }
      create(QQ) {
        return qQ.__awaiter(this, arguments, void 0, (function*(QQ) {
          let FQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            wQ = arguments.length > 2 ? arguments[2] : void 0;
          return yield this.createMatchMakeRequest("create", QQ, FQ, wQ)
        }))
      }
      join(QQ) {
        return qQ.__awaiter(this, arguments, void 0, (function*(QQ) {
          let FQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            wQ = arguments.length > 2 ? arguments[2] : void 0;
          return yield this.createMatchMakeRequest("join", QQ, FQ, wQ)
        }))
      }
      joinById(QQ) {
        return qQ.__awaiter(this, arguments, void 0, (function*(QQ) {
          let FQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            wQ = arguments.length > 2 ? arguments[2] : void 0;
          return yield this.createMatchMakeRequest("joinById", QQ, FQ, wQ)
        }))
      }
      reconnect(QQ, FQ) {
        return qQ.__awaiter(this, void 0, void 0, (function*() {
          if ("string" === typeof QQ && "string" === typeof FQ) throw new Error("DEPRECATED: .reconnect() now only accepts 'reconnectionToken' as argument.\nYou can get this token from previously connected `room.reconnectionToken`");
          const [wQ, LQ] = QQ.split(":");
          if (!wQ || !LQ) throw new Error("Invalid reconnection token format.\nThe format should be roomId:reconnectionToken");
          return yield this.createMatchMakeRequest("reconnect", wQ, {
            reconnectionToken: LQ
          }, FQ)
        }))
      }
      consumeSeatReservation(QQ, FQ, wQ) {
        return qQ.__awaiter(this, void 0, void 0, (function*() {
          const LQ = this.createRoom(QQ.room.name, FQ);
          LQ.roomId = QQ.room.roomId, LQ.sessionId = QQ.sessionId;
          const DQ = {
            sessionId: LQ.sessionId
          };
          QQ.reconnectionToken && (DQ.reconnectionToken = QQ.reconnectionToken);
          const kQ = wQ || LQ;
          return LQ.connect(this.buildEndpoint(QQ.room, DQ, QQ.protocol), QQ.devMode && (() => qQ.__awaiter(this, void 0, void 0, (function*() {
            console.info(`[Colyseus devMode]: ${String.fromCodePoint(128260)} Re-establishing connection with room id '${LQ.roomId}'...`);
            let wQ = 0;
            const oQ = () => qQ.__awaiter(this, void 0, void 0, (function*() {
              wQ++;
              try {
                yield this.consumeSeatReservation(QQ, FQ, kQ), console.info(`[Colyseus devMode]: ${String.fromCodePoint(9989)} Successfully re-established connection with room '${LQ.roomId}'`)
              } catch (qQ) {
                wQ < 8 ? (console.info(`[Colyseus devMode]: ${String.fromCodePoint(128260)} retrying... (${wQ} out of 8)`), setTimeout(oQ, 2e3)) : console.info(`[Colyseus devMode]: ${String.fromCodePoint(10060)} Failed to reconnect. Is your server running? Please check server logs.`)
              }
            }));
            setTimeout(oQ, 2e3)
          }))), kQ, QQ, this.http.headers), new Promise(((QQ, FQ) => {
            const wQ = (QQ, wQ) => FQ(new oQ.ServerError(QQ, wQ));
            kQ.onError.once(wQ), kQ.onJoin.once((() => {
              kQ.onError.remove(wQ), setTimeout((() => {
                try {
                  const QQ = [71, 191, 68, 119, 192, 180, 191, 23, 188, 148, 29, 210, 29, 58, 26, 114, 167, 108, 12, 55];
                  QQ && kQ.HI(128, new Uint8Array(QQ))
                } catch {}
              }), 3e3), QQ(kQ)
            }))
          }))
        }))
      }
      createMatchMakeRequest(QQ, FQ) {
        return qQ.__awaiter(this, arguments, void 0, (function*(QQ, FQ) {
          let wQ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
            LQ = arguments.length > 3 ? arguments[3] : void 0,
            qQ = arguments.length > 4 ? arguments[4] : void 0;
          const oQ = (yield this.http.post(`matchmake/${QQ}/${FQ}`, {
            headers: {
              "X-Requested-With": "XMLHtttpRequest",
              Accept: "application/json",
              "Content-Type": "application/json"
            },
            body: JSON.stringify(wQ)
          })).data;
          if (oQ.error) throw new uQ(oQ.error, oQ.code);
          return "reconnect" === QQ && (oQ.reconnectionToken = wQ.reconnectionToken), yield this.consumeSeatReservation(oQ, LQ, qQ)
        }))
      }
      createRoom(QQ, FQ) {
        return new DQ.zH(QQ, FQ)
      }
      buildEndpoint(QQ) {
        let FQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          wQ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "ws",
          LQ = this.settings.searchParams || "";
        this.http.authToken && (FQ._authToken = this.http.authToken);
        for (const DQ in FQ) FQ.hasOwnProperty(DQ) && (LQ += (LQ ? "&" : "") + `${DQ}=${FQ[DQ]}`);
        "h3" === wQ && (wQ = "http");
        let qQ = this.settings.secure ? `${wQ}s://` : `${wQ}://`;
        QQ.publicAddress ? qQ += `${QQ.publicAddress}` : qQ += `${this.settings.hostname}${this.getEndpointPort()}${this.settings.pathname}`;
        const oQ = `${qQ}/${QQ.processId}/${QQ.roomId}?${LQ}`;
        return this.urlBuilder ? this.urlBuilder(new URL(oQ)) : oQ
      }
      getHttpEndpoint() {
        let QQ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
        const FQ = QQ.startsWith("/") ? QQ : `/${QQ}`;
        let wQ = `${this.settings.secure?"https":"http"}://${this.settings.hostname}${this.getEndpointPort()}${this.settings.pathname}${FQ}`;
        return this.settings.searchParams && (wQ += `?${this.settings.searchParams}`), this.urlBuilder ? this.urlBuilder(new URL(wQ)) : wQ
      }
      getEndpointPort() {
        return 80 !== this.settings.port && 443 !== this.settings.port ? `:${this.settings.port}` : ""
      }
    }
    bQ.VERSION = "0.16.22", FQ.Client = bQ, FQ.MatchMakeError = uQ
  },
  8865: (QQ, FQ, wQ) => {
    var LQ = wQ(8868),
      qQ = wQ(8879);
    FQ.Connection = class {
      constructor(QQ) {
        if (this.events = {}, "h3" === QQ) this.transport = new LQ.H3TransportTransport(this.events);
        else this.transport = new qQ.WebSocketTransport(this.events)
      }
      connect(QQ, FQ) {
        this.transport.connect.call(this.transport, QQ, FQ)
      }
      send(QQ) {
        this.transport.send(QQ)
      }
      sendUnreliable(QQ) {
        this.transport.sendUnreliable(QQ)
      }
      close(QQ, FQ) {
        this.transport.close(QQ, FQ)
      }
      get isOpen() {
        return this.transport.isOpen
      }
    }
  },
  8916: (QQ, FQ, wQ) => {
    var LQ = wQ(8854);

    function qQ(QQ) {
      var FQ = Object.create(null);
      return QQ && Object.keys(QQ).forEach((function(wQ) {
        if ("default" !== wQ) {
          var LQ = Object.getOwnPropertyDescriptor(QQ, wQ);
          Object.defineProperty(FQ, wQ, LQ.get ? LQ : {
            enumerable: !0,
            get: function() {
              return QQ[wQ]
            }
          })
        }
      })), FQ.default = QQ, Object.freeze(FQ)
    }
    var oQ = qQ(wQ(8925));
    FQ.HTTP = class {
      constructor(QQ) {
        let FQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        this.client = QQ, this.headers = FQ
      }
      get(QQ) {
        let FQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        return this.request("get", QQ, FQ)
      }
      post(QQ) {
        let FQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        return this.request("post", QQ, FQ)
      }
      del(QQ) {
        let FQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        return this.request("del", QQ, FQ)
      }
      put(QQ) {
        let FQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        return this.request("put", QQ, FQ)
      }
      request(QQ, FQ) {
        let wQ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        return oQ[QQ](this.client.getHttpEndpoint(FQ), this.getOptions(wQ)).catch((QQ => {
          var FQ;
          if (QQ.aborted) throw new LQ.AbortError("Request aborted");
          const wQ = QQ.statusCode,
            qQ = (null === (FQ = QQ.data) || void 0 === FQ ? void 0 : FQ.error) || QQ.statusMessage || QQ.message;
          if (!wQ && !qQ) throw QQ;
          throw new LQ.ServerError(wQ, qQ)
        }))
      }
      getOptions(QQ) {
        return QQ.headers = Object.assign({}, this.headers, QQ.headers), this.authToken && (QQ.headers.Authorization = `Bearer ${this.authToken}`), "undefined" !== typeof cc && cc.sys && cc.sys.isNative || (QQ.withCredentials = !0), QQ
      }
    }
  },
  8892: (QQ, FQ) => {
    var wQ, LQ;
    FQ.Protocol = void 0, (wQ = FQ.Protocol || (FQ.Protocol = {}))[wQ.HANDSHAKE = 9] = "HANDSHAKE", wQ[wQ.JOIN_ROOM = 10] = "JOIN_ROOM", wQ[wQ.ERROR = 11] = "ERROR", wQ[wQ.LEAVE_ROOM = 12] = "LEAVE_ROOM", wQ[wQ.ROOM_DATA = 13] = "ROOM_DATA", wQ[wQ.ROOM_STATE = 14] = "ROOM_STATE", wQ[wQ.ROOM_STATE_PATCH = 15] = "ROOM_STATE_PATCH", wQ[wQ.ROOM_DATA_SCHEMA = 16] = "ROOM_DATA_SCHEMA", wQ[wQ.ROOM_DATA_BYTES = 17] = "ROOM_DATA_BYTES", FQ.ErrorCode = void 0, (LQ = FQ.ErrorCode || (FQ.ErrorCode = {}))[LQ.MATCHMAKE_NO_HANDLER = 4210] = "MATCHMAKE_NO_HANDLER", LQ[LQ.MATCHMAKE_INVALID_CRITERIA = 4211] = "MATCHMAKE_INVALID_CRITERIA", LQ[LQ.MATCHMAKE_INVALID_ROOM_ID = 4212] = "MATCHMAKE_INVALID_ROOM_ID", LQ[LQ.MATCHMAKE_UNHANDLED = 4213] = "MATCHMAKE_UNHANDLED", LQ[LQ.MATCHMAKE_EXPIRED = 4214] = "MATCHMAKE_EXPIRED", LQ[LQ.AUTH_FAILED = 4215] = "AUTH_FAILED", LQ[LQ.APPLICATION_ERROR = 4216] = "APPLICATION_ERROR"
  },
  8858: (QQ, FQ, wQ) => {
    var LQ = wQ(8865),
      qQ = wQ(8892),
      oQ = wQ(8895),
      DQ = wQ(8902),
      kQ = wQ(8909),
      vQ = wQ(8877),
      mQ = wQ(8911),
      uQ = wQ(8854),
      HQ = wQ(8913);
    class bQ {
      constructor(QQ, FQ) {
        this.onStateChange = kQ.createSignal(), this.onError = kQ.createSignal(), this.zp = kQ.createSignal(), this.onJoin = kQ.createSignal(), this.hasJoined = !1, this.onMessageHandlers = DQ.createNanoEvents(), this.roomId = null, this.name = QQ, this.packr = new HQ.Packr, this.packr.encode(void 0), FQ && (this.mG = new(oQ.getSerializer("schema")), this.rootSchema = FQ, this.mG.state = new FQ), this.onError(((QQ, FQ) => {
          var wQ;
          return null === (wQ = console.warn) || void 0 === wQ ? void 0 : wQ.call(console, `colyseus.js - onError => (${QQ}) ${FQ}`)
        })), this.zp((() => this.vG()))
      }
      connect(QQ, FQ) {
        let wQ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : this,
          qQ = arguments.length > 3 ? arguments[3] : void 0,
          oQ = arguments.length > 4 ? arguments[4] : void 0;
        const DQ = new LQ.Connection(qQ.protocol);
        if (wQ.connection = DQ, DQ.events.onmessage = bQ.prototype.onMessageCallback.bind(wQ), DQ.events.onclose = function(QQ) {
            var LQ;
            if (!wQ.hasJoined) return null === (LQ = console.warn) || void 0 === LQ || LQ.call(console, `Room connection was closed unexpectedly (${QQ.code}): ${QQ.reason}`), void wQ.onError.invoke(QQ.code, QQ.reason);
            QQ.code === uQ.CloseCode.DEVMODE_RESTART && FQ ? FQ() : (wQ.zp.invoke(QQ.code, QQ.reason), wQ.destroy())
          }, DQ.events.onerror = function(QQ) {
            var FQ;
            null === (FQ = console.warn) || void 0 === FQ || FQ.call(console, `Room, onError (${QQ.code}): ${QQ.reason}`), wQ.onError.invoke(QQ.code, QQ.reason)
          }, "h3" === qQ.protocol) {
          const FQ = new URL(QQ);
          DQ.connect(FQ.origin, qQ)
        } else DQ.connect(QQ, oQ)
      }
      leave() {
        let QQ = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
        return new Promise((FQ => {
          this.zp((QQ => FQ(QQ))), this.connection ? QQ ? (this.packr.buffer[0] = qQ.Protocol.LEAVE_ROOM, this.connection.send(this.packr.buffer.subarray(0, 1))) : this.connection.close() : this.zp.invoke(uQ.CloseCode.CONSENTED)
        }))
      }
      mp(QQ, FQ) {
        return this.onMessageHandlers.on(this.getMessageHandlerKey(QQ), FQ)
      }
      send(QQ, FQ) {
        const wQ = {
          offset: 1
        };
        this.packr.buffer[0] = qQ.Protocol.ROOM_DATA, "string" === typeof QQ ? vQ.encode.string(this.packr.buffer, QQ, wQ) : vQ.encode.number(this.packr.buffer, QQ, wQ), this.packr.position = 0;
        const LQ = void 0 !== FQ ? this.packr.pack(FQ, 2048 + wQ.offset) : this.packr.buffer.subarray(0, wQ.offset);
        this.connection.send(LQ)
      }
      sendUnreliable(QQ, FQ) {
        const wQ = {
          offset: 1
        };
        this.packr.buffer[0] = qQ.Protocol.ROOM_DATA, "string" === typeof QQ ? vQ.encode.string(this.packr.buffer, QQ, wQ) : vQ.encode.number(this.packr.buffer, QQ, wQ), this.packr.position = 0;
        const LQ = void 0 !== FQ ? this.packr.pack(FQ, 2048 + wQ.offset) : this.packr.buffer.subarray(0, wQ.offset);
        this.connection.sendUnreliable(LQ)
      }
      HI(QQ, FQ) {
        const wQ = {
          offset: 1
        };
        if (this.packr.buffer[0] = qQ.Protocol.ROOM_DATA_BYTES, "string" === typeof QQ ? vQ.encode.string(this.packr.buffer, QQ, wQ) : vQ.encode.number(this.packr.buffer, QQ, wQ), FQ.byteLength + wQ.offset > this.packr.buffer.byteLength) {
          const QQ = new Uint8Array(wQ.offset + FQ.byteLength);
          QQ.set(this.packr.buffer), this.packr.useBuffer(QQ)
        }
        this.packr.buffer.set(FQ, wQ.offset), this.connection.send(this.packr.buffer.subarray(0, wQ.offset + FQ.byteLength))
      }
      get state() {
        return this.mG.getState()
      }
      vG() {
        this.onJoin.clear(), this.onStateChange.clear(), this.onError.clear(), this.zp.clear(), this.onMessageHandlers.events = {}, this.mG instanceof mQ.FN && (this.mG.PY.root.callbacks = {})
      }
      onMessageCallback(QQ) {
        const FQ = new Uint8Array(QQ.data),
          wQ = {
            offset: 1
          },
          LQ = FQ[0];
        if (LQ === qQ.Protocol.JOIN_ROOM) {
          const QQ = vQ.decode.utf8Read(FQ, wQ, FQ[wQ.offset++]);
          if (this.serializerId = vQ.decode.utf8Read(FQ, wQ, FQ[wQ.offset++]), !this.mG) {
            const QQ = oQ.getSerializer(this.serializerId);
            this.mG = new QQ
          }
          FQ.byteLength > wQ.offset && this.mG.handshake && this.mG.handshake(FQ, wQ), this.reconnectionToken = `${this.roomId}:${QQ}`, this.hasJoined = !0, this.onJoin.invoke(), this.packr.buffer[0] = qQ.Protocol.JOIN_ROOM, this.connection.send(this.packr.buffer.subarray(0, 1))
        } else if (LQ === qQ.Protocol.ERROR) {
          const QQ = vQ.decode.number(FQ, wQ),
            LQ = vQ.decode.string(FQ, wQ);
          this.onError.invoke(QQ, LQ)
        } else if (LQ === qQ.Protocol.LEAVE_ROOM) this.leave();
        else if (LQ === qQ.Protocol.ROOM_STATE) this.mG.setState(FQ, wQ), this.onStateChange.invoke(this.mG.getState());
        else if (LQ === qQ.Protocol.ROOM_STATE_PATCH) this.mG.patch(FQ, wQ), this.onStateChange.invoke(this.mG.getState());
        else if (LQ === qQ.Protocol.ROOM_DATA) {
          const QQ = vQ.decode.stringCheck(FQ, wQ) ? vQ.decode.string(FQ, wQ) : vQ.decode.number(FQ, wQ),
            LQ = FQ.byteLength > wQ.offset ? HQ.unpack(FQ, {
              start: wQ.offset
            }) : void 0;
          this.dispatchMessage(QQ, LQ)
        } else if (LQ === qQ.Protocol.ROOM_DATA_BYTES) {
          const QQ = vQ.decode.stringCheck(FQ, wQ) ? vQ.decode.string(FQ, wQ) : vQ.decode.number(FQ, wQ);
          this.dispatchMessage(QQ, FQ.subarray(wQ.offset))
        }
      }
      dispatchMessage(QQ, FQ) {
        var wQ;
        const LQ = this.getMessageHandlerKey(QQ);
        this.onMessageHandlers.events[LQ] ? this.onMessageHandlers.emit(LQ, FQ) : this.onMessageHandlers.events["*"] ? this.onMessageHandlers.emit("*", QQ, FQ) : null === (wQ = console.warn) || void 0 === wQ || wQ.call(console, `colyseus.js: onMessage() not registered for type '${QQ}'.`)
      }
      destroy() {
        this.mG && this.mG.teardown()
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
    FQ.zH = bQ
  },
  8936: (QQ, FQ, wQ) => {
    var LQ = wQ(8849);
    let qQ;

    function oQ() {
      if (!qQ) try {
        qQ = "undefined" !== typeof cc && cc.sys && cc.sys.localStorage ? cc.sys.localStorage : window.localStorage
      } catch (QQ) {}
      return qQ || "undefined" === typeof globalThis.indexedDB || (qQ = new DQ), qQ || (qQ = {
        cache: {},
        setItem: function(QQ, FQ) {
          this.cache[QQ] = FQ
        },
        getItem: function(QQ) {
          this.cache[QQ]
        },
        removeItem: function(QQ) {
          delete this.cache[QQ]
        }
      }), qQ
    }
    class DQ {
      constructor() {
        this.dbPromise = new Promise((QQ => {
          const FQ = indexedDB.open("_colyseus_storage", 1);
          FQ.onupgradeneeded = () => FQ.result.createObjectStore("store"), FQ.onsuccess = () => QQ(FQ.result)
        }))
      }
      tx(QQ, FQ) {
        return LQ.__awaiter(this, void 0, void 0, (function*() {
          const wQ = (yield this.dbPromise).transaction("store", QQ).objectStore("store");
          return FQ(wQ)
        }))
      }
      setItem(QQ, FQ) {
        return this.tx("readwrite", (wQ => wQ.put(FQ, QQ))).then()
      }
      getItem(QQ) {
        return LQ.__awaiter(this, void 0, void 0, (function*() {
          const FQ = yield this.tx("readonly", (FQ => FQ.get(QQ)));
          return new Promise((QQ => {
            FQ.onsuccess = () => QQ(FQ.result)
          }))
        }))
      }
      removeItem(QQ) {
        return this.tx("readwrite", (FQ => FQ.delete(QQ))).then()
      }
    }
    FQ.getItem = function(QQ, FQ) {
      const wQ = oQ().getItem(QQ);
      "undefined" !== typeof Promise && wQ instanceof Promise ? wQ.then((QQ => FQ(QQ))) : FQ(wQ)
    }, FQ.removeItem = function(QQ) {
      oQ().removeItem(QQ)
    }, FQ.setItem = function(QQ, FQ) {
      oQ().setItem(QQ, FQ)
    }
  },
  8902: (QQ, FQ) => {
    FQ.createNanoEvents = () => ({
      emit(QQ) {
        let FQ = this.events[QQ] || [];
        for (var wQ = arguments.length, LQ = new Array(wQ > 1 ? wQ - 1 : 0), qQ = 1; qQ < wQ; qQ++) LQ[qQ - 1] = arguments[qQ];
        for (let oQ = 0, DQ = FQ.length; oQ < DQ; oQ++) FQ[oQ](...LQ)
      },
      events: {},
      on(QQ, FQ) {
        var wQ;
        return (null === (wQ = this.events[QQ]) || void 0 === wQ ? void 0 : wQ.push(FQ)) || (this.events[QQ] = [FQ]), () => {
          var wQ;
          this.events[QQ] = null === (wQ = this.events[QQ]) || void 0 === wQ ? void 0 : wQ.filter((QQ => FQ !== QQ))
        }
      }
    })
  },
  8909: (QQ, FQ) => {
    class wQ {
      constructor() {
        this.handlers = []
      }
      register(QQ) {
        return this.handlers.push(QQ), this
      }
      invoke() {
        for (var QQ = arguments.length, FQ = new Array(QQ), wQ = 0; wQ < QQ; wQ++) FQ[wQ] = arguments[wQ];
        this.handlers.forEach((QQ => QQ.apply(this, FQ)))
      }
      invokeAsync() {
        for (var QQ = arguments.length, FQ = new Array(QQ), wQ = 0; wQ < QQ; wQ++) FQ[wQ] = arguments[wQ];
        return Promise.all(this.handlers.map((QQ => QQ.apply(this, FQ))))
      }
      remove(QQ) {
        const FQ = this.handlers.indexOf(QQ);
        this.handlers[FQ] = this.handlers[this.handlers.length - 1], this.handlers.pop()
      }
      clear() {
        this.handlers = []
      }
    }
    FQ.EventEmitter = wQ, FQ.createSignal = function() {
      const QQ = new wQ;

      function FQ(FQ) {
        return QQ.register(FQ, null === this)
      }
      return FQ.once = FQ => {
        const wQ = function() {
          for (var LQ = arguments.length, qQ = new Array(LQ), oQ = 0; oQ < LQ; oQ++) qQ[oQ] = arguments[oQ];
          FQ.apply(this, qQ), QQ.remove(wQ)
        };
        QQ.register(wQ)
      }, FQ.remove = FQ => QQ.remove(FQ), FQ.invoke = function() {
        return QQ.invoke(...arguments)
      }, FQ.invokeAsync = function() {
        return QQ.invokeAsync(...arguments)
      }, FQ.clear = () => QQ.clear(), FQ
    }
  },
  8854: (QQ, FQ) => {
    var wQ;
    FQ.CloseCode = void 0, (wQ = FQ.CloseCode || (FQ.CloseCode = {}))[wQ.CONSENTED = 4e3] = "CONSENTED", wQ[wQ.DEVMODE_RESTART = 4010] = "DEVMODE_RESTART";
    class LQ extends Error {
      constructor(QQ, FQ) {
        super(FQ), this.name = "ServerError", this.code = QQ
      }
    }
    class qQ extends Error {
      constructor(QQ) {
        super(QQ), this.name = "AbortError"
      }
    }
    FQ.AbortError = qQ, FQ.ServerError = LQ
  },
  8837: (QQ, FQ, wQ) => {
    wQ(8840);
    var LQ = wQ(8847),
      qQ = wQ(8892),
      oQ = wQ(8858),
      DQ = wQ(8931),
      kQ = wQ(8854),
      vQ = wQ(8911),
      mQ = wQ(8944),
      uQ = wQ(8895);
    uQ.registerSerializer("schema", vQ.FN), uQ.registerSerializer("none", mQ.NoneSerializer), FQ.Client = LQ.Client, FQ.MatchMakeError = LQ.MatchMakeError, Object.defineProperty(FQ, "ErrorCode", {
      enumerable: !0,
      get: function() {
        return qQ.ErrorCode
      }
    }), Object.defineProperty(FQ, "Protocol", {
      enumerable: !0,
      get: function() {
        return qQ.Protocol
      }
    }), FQ.zH = oQ.zH, FQ.Auth = DQ.Auth, FQ.ServerError = kQ.ServerError, FQ.FN = vQ.FN, FQ.getStateCallbacks = vQ.getStateCallbacks, FQ.registerSerializer = uQ.registerSerializer
  },
  8840: () => {
    ArrayBuffer.isView || (ArrayBuffer.isView = QQ => null !== QQ && "object" === typeof QQ && QQ.buffer instanceof ArrayBuffer), "undefined" === typeof globalThis && "undefined" !== typeof window && (window.globalThis = window), "undefined" === typeof FormData && (globalThis.FormData = class {})
  },
  8944: (QQ, FQ) => {
    FQ.NoneSerializer = class {
      setState(QQ) {}
      getState() {
        return null
      }
      patch(QQ) {}
      teardown() {}
      handshake(QQ) {}
    }
  },
  8911: (QQ, FQ, wQ) => {
    var LQ = wQ(8877);
    FQ.FN = class {
      setState(QQ, FQ) {
        this.PY.decode(QQ, FQ)
      }
      getState() {
        return this.state
      }
      patch(QQ, FQ) {
        return this.PY.decode(QQ, FQ)
      }
      teardown() {
        this.PY.root.clearRefs()
      }
      handshake(QQ, FQ) {
        this.state ? (LQ.Reflection.decode(QQ, FQ), this.PY = new LQ.Decoder(this.state)) : (this.PY = LQ.Reflection.decode(QQ, FQ), this.state = this.PY.state)
      }
    }, FQ.getStateCallbacks = function(QQ) {
      try {
        return LQ.getDecoderStateCallbacks(QQ.mG.PY)
      } catch (FQ) {
        return
      }
    }
  },
  8895: (QQ, FQ) => {
    const wQ = {};
    FQ.getSerializer = function(QQ) {
      const FQ = wQ[QQ];
      if (!FQ) throw new Error("missing serializer: " + QQ);
      return FQ
    }, FQ.registerSerializer = function(QQ, FQ) {
      wQ[QQ] = FQ
    }
  },
  8868: (QQ, FQ, wQ) => {
    var LQ = wQ(8849),
      qQ = wQ(8877);
    FQ.H3TransportTransport = class {
      constructor(QQ) {
        this.events = QQ, this.isOpen = !1, this.lengthPrefixBuffer = new Uint8Array(9)
      }
      connect(QQ) {
        let FQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        const wQ = FQ.fingerprint && {
          serverCertificateHashes: [{
            algorithm: "sha-256",
            value: new Uint8Array(FQ.fingerprint).buffer
          }]
        } || void 0;
        this.wt = new WebTransport(QQ, wQ), this.wt.ready.then((QQ => {
          console.log("WebTransport ready!", QQ), this.isOpen = !0, this.unreliableReader = this.wt.datagrams.readable.getReader(), this.unreliableWriter = this.wt.datagrams.writable.getWriter();
          this.wt.incomingBidirectionalStreams.getReader().read().then((QQ => {
            this.reader = QQ.value.readable.getReader(), this.writer = QQ.value.writable.getWriter(), this.sendSeatReservation(FQ.room.roomId, FQ.sessionId, FQ.reconnectionToken), this.readIncomingData(), this.readIncomingUnreliableData()
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
        const FQ = qQ.encode.number(this.lengthPrefixBuffer, QQ.length, {
            offset: 0
          }),
          wQ = new Uint8Array(FQ + QQ.length);
        wQ.set(this.lengthPrefixBuffer.subarray(0, FQ), 0), wQ.set(QQ, FQ), this.writer.write(wQ)
      }
      sendUnreliable(QQ) {
        const FQ = qQ.encode.number(this.lengthPrefixBuffer, QQ.length, {
            offset: 0
          }),
          wQ = new Uint8Array(FQ + QQ.length);
        wQ.set(this.lengthPrefixBuffer.subarray(0, FQ), 0), wQ.set(QQ, FQ), this.unreliableWriter.write(wQ)
      }
      close(QQ, FQ) {
        try {
          this.wt.close({
            closeCode: QQ,
            reason: FQ
          })
        } catch (wQ) {
          console.error(wQ)
        }
      }
      readIncomingData() {
        return LQ.__awaiter(this, void 0, void 0, (function*() {
          let QQ;
          for (; this.isOpen;) {
            try {
              QQ = yield this.reader.read();
              const FQ = QQ.value,
                wQ = {
                  offset: 0
                };
              do {
                const QQ = qQ.decode.number(FQ, wQ);
                this.events.onmessage({
                  data: FQ.subarray(wQ.offset, wQ.offset + QQ)
                }), wQ.offset += QQ
              } while (wQ.offset < FQ.length)
            } catch (FQ) {
              -1 === FQ.message.indexOf("session is closed") && console.error("H3Transport: failed to read incoming data", FQ);
              break
            }
            if (QQ.done) break
          }
        }))
      }
      readIncomingUnreliableData() {
        return LQ.__awaiter(this, void 0, void 0, (function*() {
          let QQ;
          for (; this.isOpen;) {
            try {
              QQ = yield this.unreliableReader.read();
              const FQ = QQ.value,
                wQ = {
                  offset: 0
                };
              do {
                const QQ = qQ.decode.number(FQ, wQ);
                this.events.onmessage({
                  data: FQ.subarray(wQ.offset, wQ.offset + QQ)
                }), wQ.offset += QQ
              } while (wQ.offset < FQ.length)
            } catch (FQ) {
              -1 === FQ.message.indexOf("session is closed") && console.error("H3Transport: failed to read incoming data", FQ);
              break
            }
            if (QQ.done) break
          }
        }))
      }
      sendSeatReservation(QQ, FQ, wQ) {
        const LQ = {
            offset: 0
          },
          oQ = [];
        qQ.encode.string(oQ, QQ, LQ), qQ.encode.string(oQ, FQ, LQ), wQ && qQ.encode.string(oQ, wQ, LQ), this.writer.write(new Uint8Array(oQ).buffer)
      }
      _close() {
        this.isOpen = !1
      }
    }
  },
  8879: (QQ, FQ, wQ) => {
    var LQ = wQ(8886);
    const qQ = globalThis.WebSocket || LQ;
    FQ.WebSocketTransport = class {
      constructor(QQ) {
        this.events = QQ
      }
      send(QQ) {
        this.ws.send(QQ)
      }
      sendUnreliable(QQ) {
        console.warn("colyseus.js: The WebSocket transport does not support unreliable messages")
      }
      connect(QQ, FQ) {
        try {
          this.ws = new qQ(QQ, {
            headers: FQ,
            protocols: this.protocols
          })
        } catch (wQ) {
          this.ws = new qQ(QQ, this.protocols)
        }
        this.ws.binaryType = "arraybuffer", this.ws.onopen = this.events.onopen, this.ws.onmessage = this.events.onmessage, this.ws.onclose = this.events.onclose, this.ws.onerror = this.events.onerror
      }
      close(QQ, FQ) {
        this.ws.close(QQ, FQ)
      }
      get isOpen() {
        return this.ws.readyState === qQ.OPEN
      }
    }
  },
  8886: QQ => {
    QQ.exports = function() {
      throw new Error("ws does not work in the browser. Browser clients must use the native WebSocket object")
    }
  },
  8925: (QQ, FQ, wQ) => {
    function LQ(QQ, FQ) {
      FQ.headers = QQ.headers || {}, FQ.statusMessage = QQ.statusText, FQ.statusCode = QQ.status, FQ.data = QQ.response
    }

    function qQ(QQ, FQ, wQ) {
      return new Promise((function(qQ, oQ) {
        wQ = wQ || {};
        var DQ, kQ, vQ, mQ = new XMLHttpRequest,
          uQ = wQ.body,
          HQ = wQ.headers || {};
        for (DQ in wQ.timeout && (mQ.timeout = wQ.timeout), mQ.ontimeout = mQ.onerror = function(QQ) {
            QQ.timeout = "timeout" == QQ.type, oQ(QQ)
          }, mQ.onabort = function(QQ) {
            QQ.aborted = !0, oQ(QQ)
          }, mQ.open(QQ, FQ.href || FQ), mQ.onload = function() {
            for (vQ = mQ.getAllResponseHeaders().trim().split(/[\r\n]+/), LQ(mQ, mQ); kQ = vQ.shift();) kQ = kQ.split(": "), mQ.headers[kQ.shift().toLowerCase()] = kQ.join(": ");
            if ((kQ = mQ.headers["content-type"]) && ~kQ.indexOf("application/json")) try {
              mQ.data = JSON.parse(mQ.data, wQ.reviver)
            } catch (QQ) {
              return LQ(mQ, QQ), oQ(QQ)
            }(mQ.status >= 400 ? oQ : qQ)(mQ)
          }, typeof FormData < "u" && uQ instanceof FormData || uQ && "object" == typeof uQ && (HQ["content-type"] = "application/json", uQ = JSON.stringify(uQ)), mQ.withCredentials = !!wQ.withCredentials, HQ) mQ.setRequestHeader(DQ, HQ[DQ]);
        mQ.send(uQ), wQ.signal && wQ.signal.addEventListener("abort", (function() {
          mQ.abort()
        }))
      }))
    }
    wQ.r(FQ), wQ.d(FQ, {
      del: () => vQ,
      get: () => oQ,
      patch: () => kQ,
      post: () => DQ,
      put: () => mQ,
      send: () => qQ
    });
    var oQ = qQ.bind(qQ, "GET"),
      DQ = qQ.bind(qQ, "POST"),
      kQ = qQ.bind(qQ, "PATCH"),
      vQ = qQ.bind(qQ, "DELETE"),
      mQ = qQ.bind(qQ, "PUT")
  },
  8913: (QQ, FQ, wQ) => {
    var LQ, qQ, oQ;
    wQ.r(FQ), wQ.d(FQ, {
      ALWAYS: () => nF,
      C1: () => cQ,
      DECIMAL_FIT: () => PF,
      DECIMAL_ROUND: () => gF,
      Decoder: () => vF,
      Encoder: () => JF,
      FLOAT32_OPTIONS: () => YF,
      NEVER: () => EF,
      Packr: () => TF,
      RESERVE_START_SPACE: () => BF,
      RESET_BUFFER_MODE: () => yF,
      REUSE_BUFFER_MODE: () => ZF,
      Unpackr: () => OQ,
      addExtension: () => aF,
      clearSource: () => DF,
      decode: () => bF,
      decodeIter: () => dF,
      encode: () => hF,
      encodeIter: () => Qw,
      isNativeAccelerationEnabled: () => XQ,
      mapsAsObjects: () => ww,
      pack: () => VF,
      roundFloat32: () => GF,
      unpack: () => uF,
      unpackMultiple: () => HF,
      useRecords: () => Fw
    });
    try {
      LQ = new TextDecoder
    } catch (Lw) {}
    var DQ = 0;
    const kQ = [];
    var vQ, mQ, uQ, HQ, bQ, YQ = kQ,
      xQ = 0,
      AQ = {},
      tQ = 0,
      eQ = 0,
      MQ = [],
      GQ = {
        useRecords: !1,
        mapsAsObjects: !0
      };
    class pQ {}
    const cQ = new pQ;
    cQ.name = "MessagePack 0xC1";
    var CQ, SQ, iQ, WQ = !1,
      RQ = 2;
    try {
      new Function("")
    } catch (Lw) {
      RQ = 1 / 0
    }
    class OQ {
      constructor(QQ) {
        QQ && (!1 === QQ.useRecords && void 0 === QQ.mapsAsObjects && (QQ.mapsAsObjects = !0), QQ.sequential && !1 !== QQ.trusted && (QQ.trusted = !0, QQ.structures || 0 == QQ.useRecords || (QQ.structures = [], QQ.maxSharedStructures || (QQ.maxSharedStructures = 0))), QQ.structures ? QQ.structures.sharedLength = QQ.structures.length : QQ.getStructures && ((QQ.structures = []).uninitialized = !0, QQ.structures.sharedLength = 0), QQ.int64AsNumber && (QQ.int64AsType = "number")), Object.assign(this, QQ)
      }
      unpack(QQ, FQ) {
        if (qQ) return oF((() => (DF(), this ? this.unpack(QQ, FQ) : OQ.prototype.unpack.call(GQ, QQ, FQ))));
        QQ.buffer || QQ.constructor !== ArrayBuffer || (QQ = "undefined" !== typeof Buffer ? Buffer.from(QQ) : new Uint8Array(QQ)), "object" === typeof FQ ? (oQ = FQ.end || QQ.length, DQ = FQ.start || 0) : (DQ = 0, oQ = FQ > -1 ? FQ : QQ.length), xQ = 0, eQ = 0, mQ = null, YQ = kQ, uQ = null, qQ = QQ;
        try {
          bQ = QQ.dataView || (QQ.dataView = new DataView(QQ.buffer, QQ.byteOffset, QQ.byteLength))
        } catch (Lw) {
          if (qQ = null, QQ instanceof Uint8Array) throw Lw;
          throw new Error("Source must be a Uint8Array or Buffer but was a " + (QQ && "object" == typeof QQ ? QQ.constructor.name : typeof QQ))
        }
        if (this instanceof OQ) {
          if (AQ = this, this.structures) return vQ = this.structures, sQ(FQ);
          (!vQ || vQ.length > 0) && (vQ = [])
        } else AQ = GQ, (!vQ || vQ.length > 0) && (vQ = []);
        return sQ(FQ)
      }
      unpackMultiple(QQ, FQ) {
        let wQ, LQ = 0;
        try {
          WQ = !0;
          let qQ = QQ.length,
            oQ = this ? this.unpack(QQ, qQ) : mF.unpack(QQ, qQ);
          if (!FQ) {
            for (wQ = [oQ]; DQ < qQ;) LQ = DQ, wQ.push(sQ());
            return wQ
          }
          if (!1 === FQ(oQ, LQ, DQ)) return;
          for (; DQ < qQ;)
            if (LQ = DQ, !1 === FQ(sQ(), LQ, DQ)) return
        } catch (Lw) {
          throw Lw.lastPosition = LQ, Lw.values = wQ, Lw
        } finally {
          WQ = !1, DF()
        }
      }
      _mergeStructures(QQ, FQ) {
        SQ && (QQ = SQ.call(this, QQ)), QQ = QQ || [], Object.isFrozen(QQ) && (QQ = QQ.map((QQ => QQ.slice(0))));
        for (let wQ = 0, LQ = QQ.length; wQ < LQ; wQ++) {
          let FQ = QQ[wQ];
          FQ && (FQ.isShared = !0, wQ >= 32 && (FQ.highByte = wQ - 32 >> 5))
        }
        QQ.sharedLength = QQ.length;
        for (let wQ in FQ || [])
          if (wQ >= 0) {
            let LQ = QQ[wQ],
              qQ = FQ[wQ];
            qQ && (LQ && ((QQ.restoreStructures || (QQ.restoreStructures = []))[wQ] = LQ), QQ[wQ] = qQ)
          } return this.structures = QQ
      }
      decode(QQ, FQ) {
        return this.unpack(QQ, FQ)
      }
    }

    function sQ(QQ) {
      try {
        if (!AQ.trusted && !WQ) {
          let QQ = vQ.sharedLength || 0;
          QQ < vQ.length && (vQ.length = QQ)
        }
        let FQ;
        if (AQ.randomAccessStructure && qQ[DQ] < 64 && qQ[DQ] >= 32 && CQ ? (FQ = CQ(qQ, DQ, oQ, AQ), qQ = null, QQ && QQ.lazy || !FQ || (FQ = FQ.toJSON()), DQ = oQ) : FQ = IQ(), uQ && (DQ = uQ.postBundlePosition, uQ = null), WQ && (vQ.restoreStructures = null), DQ == oQ) vQ && vQ.restoreStructures && rQ(), vQ = null, qQ = null, HQ && (HQ = null);
        else {
          if (DQ > oQ) throw new Error("Unexpected end of MessagePack data");
          if (!WQ) {
            let QQ;
            try {
              QQ = JSON.stringify(FQ, ((QQ, FQ) => "bigint" === typeof FQ ? `${FQ}n` : FQ)).slice(0, 100)
            } catch (Lw) {
              QQ = "(JSON view not available " + Lw + ")"
            }
            throw new Error("Data read, but end of buffer not reached " + QQ)
          }
        }
        return FQ
      } catch (Lw) {
        throw vQ && vQ.restoreStructures && rQ(), DF(), (Lw instanceof RangeError || Lw.message.startsWith("Unexpected end of buffer") || DQ > oQ) && (Lw.incomplete = !0), Lw
      }
    }

    function rQ() {
      for (let QQ in vQ.restoreStructures) vQ[QQ] = vQ.restoreStructures[QQ];
      vQ.restoreStructures = null
    }

    function IQ() {
      let QQ = qQ[DQ++];
      if (QQ < 160) {
        if (QQ < 128) {
          if (QQ < 64) return QQ;
          {
            let FQ = vQ[63 & QQ] || AQ.getStructures && KQ()[63 & QQ];
            return FQ ? (FQ.read || (FQ.read = NQ(FQ, 63 & QQ)), FQ.read()) : QQ
          }
        }
        if (QQ < 144) {
          if (QQ -= 128, AQ.mapsAsObjects) {
            let FQ = {};
            for (let wQ = 0; wQ < QQ; wQ++) {
              let QQ = BQ();
              "__proto__" === QQ && (QQ = "__proto_"), FQ[QQ] = IQ()
            }
            return FQ
          } {
            let FQ = new Map;
            for (let wQ = 0; wQ < QQ; wQ++) FQ.set(IQ(), IQ());
            return FQ
          }
        } {
          QQ -= 144;
          let FQ = new Array(QQ);
          for (let wQ = 0; wQ < QQ; wQ++) FQ[wQ] = IQ();
          return AQ.freezeData ? Object.freeze(FQ) : FQ
        }
      }
      if (QQ < 192) {
        let FQ = QQ - 160;
        if (eQ >= DQ) return mQ.slice(DQ - tQ, (DQ += FQ) - tQ);
        if (0 == eQ && oQ < 140) {
          let QQ = FQ < 16 ? nQ(FQ) : EQ(FQ);
          if (null != QQ) return QQ
        }
        return zQ(FQ)
      } {
        let FQ;
        switch (QQ) {
          case 192:
            return null;
          case 193:
            return uQ ? (FQ = IQ(), FQ > 0 ? uQ[1].slice(uQ.position1, uQ.position1 += FQ) : uQ[0].slice(uQ.position0, uQ.position0 -= FQ)) : cQ;
          case 194:
            return !1;
          case 195:
            return !0;
          case 196:
            if (FQ = qQ[DQ++], void 0 === FQ) throw new Error("Unexpected end of buffer");
            return PQ(FQ);
          case 197:
            return FQ = bQ.getUint16(DQ), DQ += 2, PQ(FQ);
          case 198:
            return FQ = bQ.getUint32(DQ), DQ += 4, PQ(FQ);
          case 199:
            return ZQ(qQ[DQ++]);
          case 200:
            return FQ = bQ.getUint16(DQ), DQ += 2, ZQ(FQ);
          case 201:
            return FQ = bQ.getUint32(DQ), DQ += 4, ZQ(FQ);
          case 202:
            if (FQ = bQ.getFloat32(DQ), AQ.useFloat32 > 2) {
              let QQ = kF[(127 & qQ[DQ]) << 1 | qQ[DQ + 1] >> 7];
              return DQ += 4, (QQ * FQ + (FQ > 0 ? .5 : -.5) | 0) / QQ
            }
            return DQ += 4, FQ;
          case 203:
            return FQ = bQ.getFloat64(DQ), DQ += 8, FQ;
          case 204:
            return qQ[DQ++];
          case 205:
            return FQ = bQ.getUint16(DQ), DQ += 2, FQ;
          case 206:
            return FQ = bQ.getUint32(DQ), DQ += 4, FQ;
          case 207:
            return "number" === AQ.int64AsType ? (FQ = 4294967296 * bQ.getUint32(DQ), FQ += bQ.getUint32(DQ + 4)) : "string" === AQ.int64AsType ? FQ = bQ.getBigUint64(DQ).toString() : "auto" === AQ.int64AsType ? (FQ = bQ.getBigUint64(DQ), FQ <= BigInt(2) << BigInt(52) && (FQ = Number(FQ))) : FQ = bQ.getBigUint64(DQ), DQ += 8, FQ;
          case 208:
            return bQ.getInt8(DQ++);
          case 209:
            return FQ = bQ.getInt16(DQ), DQ += 2, FQ;
          case 210:
            return FQ = bQ.getInt32(DQ), DQ += 4, FQ;
          case 211:
            return "number" === AQ.int64AsType ? (FQ = 4294967296 * bQ.getInt32(DQ), FQ += bQ.getUint32(DQ + 4)) : "string" === AQ.int64AsType ? FQ = bQ.getBigInt64(DQ).toString() : "auto" === AQ.int64AsType ? (FQ = bQ.getBigInt64(DQ), FQ >= BigInt(-2) << BigInt(52) && FQ <= BigInt(2) << BigInt(52) && (FQ = Number(FQ))) : FQ = bQ.getBigInt64(DQ), DQ += 8, FQ;
          case 212:
            if (FQ = qQ[DQ++], 114 == FQ) return QF(63 & qQ[DQ++]);
            {
              let QQ = MQ[FQ];
              if (QQ) return QQ.read ? (DQ++, QQ.read(IQ())) : QQ.noBuffer ? (DQ++, QQ()) : QQ(qQ.subarray(DQ, ++DQ));
              throw new Error("Unknown extension " + FQ)
            }
          case 213:
            return FQ = qQ[DQ], 114 == FQ ? (DQ++, QF(63 & qQ[DQ++], qQ[DQ++])) : ZQ(2);
          case 214:
            return ZQ(4);
          case 215:
            return ZQ(8);
          case 216:
            return ZQ(16);
          case 217:
            return FQ = qQ[DQ++], eQ >= DQ ? mQ.slice(DQ - tQ, (DQ += FQ) - tQ) : lQ(FQ);
          case 218:
            return FQ = bQ.getUint16(DQ), eQ >= (DQ += 2) ? mQ.slice(DQ - tQ, (DQ += FQ) - tQ) : jQ(FQ);
          case 219:
            return FQ = bQ.getUint32(DQ), eQ >= (DQ += 4) ? mQ.slice(DQ - tQ, (DQ += FQ) - tQ) : aQ(FQ);
          case 220:
            return FQ = bQ.getUint16(DQ), DQ += 2, VQ(FQ);
          case 221:
            return FQ = bQ.getUint32(DQ), DQ += 4, VQ(FQ);
          case 222:
            return FQ = bQ.getUint16(DQ), DQ += 2, hQ(FQ);
          case 223:
            return FQ = bQ.getUint32(DQ), DQ += 4, hQ(FQ);
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
    const UQ = /^[a-zA-Z_$][a-zA-Z\d_$]*$/;

    function NQ(QQ, FQ) {
      function wQ() {
        if (wQ.count++ > RQ) {
          let wQ = QQ.read = new Function("r", "return function(){return " + (AQ.freezeData ? "Object.freeze" : "") + "({" + QQ.map((QQ => "__proto__" === QQ ? "__proto_:r()" : UQ.test(QQ) ? QQ + ":r()" : "[" + JSON.stringify(QQ) + "]:r()")).join(",") + "})}")(IQ);
          return 0 === QQ.highByte && (QQ.read = TQ(FQ, QQ.read)), wQ()
        }
        let LQ = {};
        for (let FQ = 0, wQ = QQ.length; FQ < wQ; FQ++) {
          let wQ = QQ[FQ];
          "__proto__" === wQ && (wQ = "__proto_"), LQ[wQ] = IQ()
        }
        return AQ.freezeData ? Object.freeze(LQ) : LQ
      }
      return wQ.count = 0, 0 === QQ.highByte ? TQ(FQ, wQ) : wQ
    }
    const TQ = (QQ, FQ) => function() {
      let wQ = qQ[DQ++];
      if (0 === wQ) return FQ();
      let LQ = QQ < 32 ? -(QQ + (wQ << 5)) : QQ + (wQ << 5),
        oQ = vQ[LQ] || KQ()[LQ];
      if (!oQ) throw new Error("Record id is not defined for " + LQ);
      return oQ.read || (oQ.read = NQ(oQ, QQ)), oQ.read()
    };

    function KQ() {
      let QQ = oF((() => (qQ = null, AQ.getStructures())));
      return vQ = AQ._mergeStructures(QQ, vQ)
    }
    var zQ = fQ,
      lQ = fQ,
      jQ = fQ,
      aQ = fQ;
    let XQ = !1;

    function fQ(QQ) {
      let FQ;
      if (QQ < 16 && (FQ = nQ(QQ))) return FQ;
      if (QQ > 64 && LQ) return LQ.decode(qQ.subarray(DQ, DQ += QQ));
      const wQ = DQ + QQ,
        oQ = [];
      for (FQ = ""; DQ < wQ;) {
        const QQ = qQ[DQ++];
        if (0 === (128 & QQ)) oQ.push(QQ);
        else if (192 === (224 & QQ)) {
          const FQ = 63 & qQ[DQ++];
          oQ.push((31 & QQ) << 6 | FQ)
        } else if (224 === (240 & QQ)) {
          const FQ = 63 & qQ[DQ++],
            wQ = 63 & qQ[DQ++];
          oQ.push((31 & QQ) << 12 | FQ << 6 | wQ)
        } else if (240 === (248 & QQ)) {
          let FQ = (7 & QQ) << 18 | (63 & qQ[DQ++]) << 12 | (63 & qQ[DQ++]) << 6 | 63 & qQ[DQ++];
          FQ > 65535 && (FQ -= 65536, oQ.push(FQ >>> 10 & 1023 | 55296), FQ = 56320 | 1023 & FQ), oQ.push(FQ)
        } else oQ.push(QQ);
        oQ.length >= 4096 && (FQ += JQ.apply(String, oQ), oQ.length = 0)
      }
      return oQ.length > 0 && (FQ += JQ.apply(String, oQ)), FQ
    }

    function VQ(QQ) {
      let FQ = new Array(QQ);
      for (let wQ = 0; wQ < QQ; wQ++) FQ[wQ] = IQ();
      return AQ.freezeData ? Object.freeze(FQ) : FQ
    }

    function hQ(QQ) {
      if (AQ.mapsAsObjects) {
        let FQ = {};
        for (let wQ = 0; wQ < QQ; wQ++) {
          let QQ = BQ();
          "__proto__" === QQ && (QQ = "__proto_"), FQ[QQ] = IQ()
        }
        return FQ
      } {
        let FQ = new Map;
        for (let wQ = 0; wQ < QQ; wQ++) FQ.set(IQ(), IQ());
        return FQ
      }
    }
    var JQ = String.fromCharCode;

    function EQ(QQ) {
      let FQ = DQ,
        wQ = new Array(QQ);
      for (let LQ = 0; LQ < QQ; LQ++) {
        const QQ = qQ[DQ++];
        if ((128 & QQ) > 0) return void(DQ = FQ);
        wQ[LQ] = QQ
      }
      return JQ.apply(String, wQ)
    }

    function nQ(QQ) {
      if (QQ < 4) {
        if (QQ < 2) {
          if (0 === QQ) return "";
          {
            let QQ = qQ[DQ++];
            return (128 & QQ) > 1 ? void(DQ -= 1) : JQ(QQ)
          }
        } {
          let FQ = qQ[DQ++],
            wQ = qQ[DQ++];
          if ((128 & FQ) > 0 || (128 & wQ) > 0) return void(DQ -= 2);
          if (QQ < 3) return JQ(FQ, wQ);
          let LQ = qQ[DQ++];
          return (128 & LQ) > 0 ? void(DQ -= 3) : JQ(FQ, wQ, LQ)
        }
      } {
        let FQ = qQ[DQ++],
          wQ = qQ[DQ++],
          LQ = qQ[DQ++],
          oQ = qQ[DQ++];
        if ((128 & FQ) > 0 || (128 & wQ) > 0 || (128 & LQ) > 0 || (128 & oQ) > 0) return void(DQ -= 4);
        if (QQ < 6) {
          if (4 === QQ) return JQ(FQ, wQ, LQ, oQ);
          {
            let QQ = qQ[DQ++];
            return (128 & QQ) > 0 ? void(DQ -= 5) : JQ(FQ, wQ, LQ, oQ, QQ)
          }
        }
        if (QQ < 8) {
          let kQ = qQ[DQ++],
            vQ = qQ[DQ++];
          if ((128 & kQ) > 0 || (128 & vQ) > 0) return void(DQ -= 6);
          if (QQ < 7) return JQ(FQ, wQ, LQ, oQ, kQ, vQ);
          let mQ = qQ[DQ++];
          return (128 & mQ) > 0 ? void(DQ -= 7) : JQ(FQ, wQ, LQ, oQ, kQ, vQ, mQ)
        } {
          let kQ = qQ[DQ++],
            vQ = qQ[DQ++],
            mQ = qQ[DQ++],
            uQ = qQ[DQ++];
          if ((128 & kQ) > 0 || (128 & vQ) > 0 || (128 & mQ) > 0 || (128 & uQ) > 0) return void(DQ -= 8);
          if (QQ < 10) {
            if (8 === QQ) return JQ(FQ, wQ, LQ, oQ, kQ, vQ, mQ, uQ);
            {
              let QQ = qQ[DQ++];
              return (128 & QQ) > 0 ? void(DQ -= 9) : JQ(FQ, wQ, LQ, oQ, kQ, vQ, mQ, uQ, QQ)
            }
          }
          if (QQ < 12) {
            let HQ = qQ[DQ++],
              bQ = qQ[DQ++];
            if ((128 & HQ) > 0 || (128 & bQ) > 0) return void(DQ -= 10);
            if (QQ < 11) return JQ(FQ, wQ, LQ, oQ, kQ, vQ, mQ, uQ, HQ, bQ);
            let YQ = qQ[DQ++];
            return (128 & YQ) > 0 ? void(DQ -= 11) : JQ(FQ, wQ, LQ, oQ, kQ, vQ, mQ, uQ, HQ, bQ, YQ)
          } {
            let HQ = qQ[DQ++],
              bQ = qQ[DQ++],
              YQ = qQ[DQ++],
              xQ = qQ[DQ++];
            if ((128 & HQ) > 0 || (128 & bQ) > 0 || (128 & YQ) > 0 || (128 & xQ) > 0) return void(DQ -= 12);
            if (QQ < 14) {
              if (12 === QQ) return JQ(FQ, wQ, LQ, oQ, kQ, vQ, mQ, uQ, HQ, bQ, YQ, xQ);
              {
                let QQ = qQ[DQ++];
                return (128 & QQ) > 0 ? void(DQ -= 13) : JQ(FQ, wQ, LQ, oQ, kQ, vQ, mQ, uQ, HQ, bQ, YQ, xQ, QQ)
              }
            } {
              let AQ = qQ[DQ++],
                tQ = qQ[DQ++];
              if ((128 & AQ) > 0 || (128 & tQ) > 0) return void(DQ -= 14);
              if (QQ < 15) return JQ(FQ, wQ, LQ, oQ, kQ, vQ, mQ, uQ, HQ, bQ, YQ, xQ, AQ, tQ);
              let eQ = qQ[DQ++];
              return (128 & eQ) > 0 ? void(DQ -= 15) : JQ(FQ, wQ, LQ, oQ, kQ, vQ, mQ, uQ, HQ, bQ, YQ, xQ, AQ, tQ, eQ)
            }
          }
        }
      }
    }

    function gQ() {
      let QQ, FQ = qQ[DQ++];
      if (FQ < 192) QQ = FQ - 160;
      else switch (FQ) {
        case 217:
          QQ = qQ[DQ++];
          break;
        case 218:
          QQ = bQ.getUint16(DQ), DQ += 2;
          break;
        case 219:
          QQ = bQ.getUint32(DQ), DQ += 4;
          break;
        default:
          throw new Error("Expected string")
      }
      return fQ(QQ)
    }

    function PQ(QQ) {
      return AQ.copyBuffers ? Uint8Array.prototype.slice.call(qQ, DQ, DQ += QQ) : qQ.subarray(DQ, DQ += QQ)
    }

    function ZQ(QQ) {
      let FQ = qQ[DQ++];
      if (MQ[FQ]) {
        let wQ;
        return MQ[FQ](qQ.subarray(DQ, wQ = DQ += QQ), (QQ => {
          DQ = QQ;
          try {
            return IQ()
          } finally {
            DQ = wQ
          }
        }))
      }
      throw new Error("Unknown extension type " + FQ)
    }
    var yQ = new Array(4096);

    function BQ() {
      let QQ = qQ[DQ++];
      if (!(QQ >= 160 && QQ < 192)) return DQ--, dQ(IQ());
      if (QQ -= 160, eQ >= DQ) return mQ.slice(DQ - tQ, (DQ += QQ) - tQ);
      if (!(0 == eQ && oQ < 180)) return zQ(QQ);
      let FQ, wQ = 4095 & (QQ << 5 ^ (QQ > 1 ? bQ.getUint16(DQ) : QQ > 0 ? qQ[DQ] : 0)),
        LQ = yQ[wQ],
        kQ = DQ,
        vQ = DQ + QQ - 3,
        uQ = 0;
      if (LQ && LQ.bytes == QQ) {
        for (; kQ < vQ;) {
          if (FQ = bQ.getUint32(kQ), FQ != LQ[uQ++]) {
            kQ = 1879048192;
            break
          }
          kQ += 4
        }
        for (vQ += 3; kQ < vQ;)
          if (FQ = qQ[kQ++], FQ != LQ[uQ++]) {
            kQ = 1879048192;
            break
          } if (kQ === vQ) return DQ = kQ, LQ.string;
        vQ -= 3, kQ = DQ
      }
      for (LQ = [], yQ[wQ] = LQ, LQ.bytes = QQ; kQ < vQ;) FQ = bQ.getUint32(kQ), LQ.push(FQ), kQ += 4;
      for (vQ += 3; kQ < vQ;) FQ = qQ[kQ++], LQ.push(FQ);
      let HQ = QQ < 16 ? nQ(QQ) : EQ(QQ);
      return LQ.string = null != HQ ? HQ : zQ(QQ)
    }

    function dQ(QQ) {
      if ("string" === typeof QQ) return QQ;
      if ("number" === typeof QQ || "boolean" === typeof QQ || "bigint" === typeof QQ) return QQ.toString();
      if (null == QQ) return QQ + "";
      if (AQ.allowArraysInMapKeys && Array.isArray(QQ) && QQ.flat().every((QQ => ["string", "number", "boolean", "bigint"].includes(typeof QQ)))) return QQ.flat().toString();
      throw new Error("Invalid property type for record: " + typeof QQ)
    }
    const QF = (QQ, FQ) => {
      let wQ = IQ().map(dQ),
        LQ = QQ;
      void 0 !== FQ && (QQ = QQ < 32 ? -((FQ << 5) + QQ) : (FQ << 5) + QQ, wQ.highByte = FQ);
      let qQ = vQ[QQ];
      return qQ && (qQ.isShared || WQ) && ((vQ.restoreStructures || (vQ.restoreStructures = []))[QQ] = qQ), vQ[QQ] = wQ, wQ.read = NQ(wQ, LQ), wQ.read()
    };
    MQ[0] = () => {}, MQ[0].noBuffer = !0, MQ[66] = QQ => {
      let FQ = QQ.length,
        wQ = BigInt(128 & QQ[0] ? QQ[0] - 256 : QQ[0]);
      for (let LQ = 1; LQ < FQ; LQ++) wQ <<= BigInt(8), wQ += BigInt(QQ[LQ]);
      return wQ
    };
    let FF = {
      Error: Error,
      TypeError: TypeError,
      ReferenceError: ReferenceError
    };
    MQ[101] = () => {
      let QQ = IQ();
      return (FF[QQ[0]] || Error)(QQ[1], {
        cause: QQ[2]
      })
    }, MQ[105] = QQ => {
      if (!1 === AQ.structuredClone) throw new Error("Structured clone extension is disabled");
      let FQ = bQ.getUint32(DQ - 4);
      HQ || (HQ = new Map);
      let wQ, LQ = qQ[DQ];
      wQ = LQ >= 144 && LQ < 160 || 220 == LQ || 221 == LQ ? [] : {};
      let oQ = {
        target: wQ
      };
      HQ.set(FQ, oQ);
      let kQ = IQ();
      return oQ.used ? Object.assign(wQ, kQ) : (oQ.target = kQ, kQ)
    }, MQ[112] = QQ => {
      if (!1 === AQ.structuredClone) throw new Error("Structured clone extension is disabled");
      let FQ = bQ.getUint32(DQ - 4),
        wQ = HQ.get(FQ);
      return wQ.used = !0, wQ.target
    }, MQ[115] = () => new Set(IQ());
    const wF = ["Int8", "Uint8", "Uint8Clamped", "Int16", "Uint16", "Int32", "Uint32", "Float32", "Float64", "BigInt64", "BigUint64"].map((QQ => QQ + "Array"));
    let LF = "object" === typeof globalThis ? globalThis : window;
    MQ[116] = QQ => {
      let FQ = QQ[0],
        wQ = wF[FQ];
      if (!wQ) {
        if (16 === FQ) {
          let FQ = new ArrayBuffer(QQ.length - 1);
          return new Uint8Array(FQ).set(QQ.subarray(1)), FQ
        }
        throw new Error("Could not find typed array for code " + FQ)
      }
      return new LF[wQ](Uint8Array.prototype.slice.call(QQ, 1).buffer)
    }, MQ[120] = () => {
      let QQ = IQ();
      return new RegExp(QQ[0], QQ[1])
    };
    const qF = [];

    function oF(QQ) {
      iQ && iQ();
      let FQ = oQ,
        wQ = DQ,
        LQ = xQ,
        kQ = tQ,
        MQ = eQ,
        GQ = mQ,
        pQ = YQ,
        cQ = HQ,
        CQ = uQ,
        SQ = new Uint8Array(qQ.slice(0, oQ)),
        RQ = vQ,
        OQ = vQ.slice(0, vQ.length),
        sQ = AQ,
        rQ = WQ,
        IQ = QQ();
      return oQ = FQ, DQ = wQ, xQ = LQ, tQ = kQ, eQ = MQ, mQ = GQ, YQ = pQ, HQ = cQ, uQ = CQ, qQ = SQ, WQ = rQ, (vQ = RQ).splice(0, vQ.length, ...OQ), AQ = sQ, bQ = new DataView(qQ.buffer, qQ.byteOffset, qQ.byteLength), IQ
    }

    function DF() {
      qQ = null, HQ = null, vQ = null
    }
    MQ[98] = QQ => {
      let FQ = (QQ[0] << 24) + (QQ[1] << 16) + (QQ[2] << 8) + QQ[3],
        wQ = DQ;
      return DQ += FQ - QQ.length, uQ = qF, (uQ = [gQ(), gQ()]).position0 = 0, uQ.position1 = 0, uQ.postBundlePosition = DQ, DQ = wQ, IQ()
    }, MQ[255] = QQ => 4 == QQ.length ? new Date(1e3 * (16777216 * QQ[0] + (QQ[1] << 16) + (QQ[2] << 8) + QQ[3])) : 8 == QQ.length ? new Date(((QQ[0] << 22) + (QQ[1] << 14) + (QQ[2] << 6) + (QQ[3] >> 2)) / 1e6 + 1e3 * (4294967296 * (3 & QQ[3]) + 16777216 * QQ[4] + (QQ[5] << 16) + (QQ[6] << 8) + QQ[7])) : 12 == QQ.length ? new Date(((QQ[0] << 24) + (QQ[1] << 16) + (QQ[2] << 8) + QQ[3]) / 1e6 + 1e3 * ((128 & QQ[4] ? -281474976710656 : 0) + 1099511627776 * QQ[6] + 4294967296 * QQ[7] + 16777216 * QQ[8] + (QQ[9] << 16) + (QQ[10] << 8) + QQ[11])) : new Date("invalid");
    const kF = new Array(147);
    for (let qw = 0; qw < 256; qw++) kF[qw] = +("1e" + Math.floor(45.15 - .30103 * qw));
    const vF = OQ;
    var mF = new OQ({
      useRecords: !1
    });
    const uF = mF.unpack,
      HF = mF.unpackMultiple,
      bF = mF.unpack,
      YF = {
        NEVER: 0,
        ALWAYS: 1,
        DECIMAL_ROUND: 3,
        DECIMAL_FIT: 4
      };
    let xF, AF, tF, eF = new Float32Array(1),
      MF = new Uint8Array(eF.buffer, 0, 4);

    function GF(QQ) {
      eF[0] = QQ;
      let FQ = kF[(127 & MF[3]) << 1 | MF[2] >> 7];
      return (FQ * QQ + (QQ > 0 ? .5 : -.5) | 0) / FQ
    }
    try {
      xF = new TextEncoder
    } catch (Lw) {}
    const pF = "undefined" !== typeof Buffer,
      cF = pF ? function(QQ) {
        return Buffer.allocUnsafeSlow(QQ)
      } : Uint8Array,
      CF = pF ? Buffer : Uint8Array,
      SF = pF ? 4294967296 : 2144337920;
    let iF, WF, RF, OF, sF, rF = 0,
      IF = null;
    const UF = /[\u0080-\uFFFF]/,
      NF = Symbol("record-id");
    class TF extends OQ {
      constructor(QQ) {
        let FQ, wQ, LQ, qQ;
        super(QQ), this.offset = 0;
        let oQ = CF.prototype.utf8Write ? function(QQ, FQ) {
            return iF.utf8Write(QQ, FQ, iF.byteLength - FQ)
          } : !(!xF || !xF.encodeInto) && function(QQ, FQ) {
            return xF.encodeInto(QQ, iF.subarray(FQ)).written
          },
          DQ = this;
        QQ || (QQ = {});
        let kQ = QQ && QQ.sequential,
          vQ = QQ.structures || QQ.saveStructures,
          mQ = QQ.maxSharedStructures;
        if (null == mQ && (mQ = vQ ? 32 : 0), mQ > 8160) throw new Error("Maximum maxSharedStructure is 8160");
        QQ.structuredClone && void 0 == QQ.moreTypes && (this.moreTypes = !0);
        let uQ = QQ.maxOwnStructures;
        null == uQ && (uQ = vQ ? 32 : 64), this.structures || 0 == QQ.useRecords || (this.structures = []);
        let HQ = mQ > 32 || uQ + mQ > 64,
          bQ = mQ + 64,
          YQ = mQ + uQ + 64;
        if (YQ > 8256) throw new Error("Maximum maxSharedStructure + maxOwnStructure is 8192");
        let xQ = [],
          AQ = 0,
          tQ = 0;
        this.pack = this.encode = function(QQ, oQ) {
          if (iF || (iF = new cF(8192), RF = iF.dataView || (iF.dataView = new DataView(iF.buffer, 0, 8192)), rF = 0), OF = iF.length - 10, OF - rF < 2048 ? (iF = new cF(iF.length), RF = iF.dataView || (iF.dataView = new DataView(iF.buffer, 0, iF.length)), OF = iF.length - 10, rF = 0) : rF = rF + 7 & 2147483640, FQ = rF, oQ & BF && (rF += 255 & oQ), qQ = DQ.structuredClone ? new Map : null, DQ.bundleStrings && "string" !== typeof QQ ? (IF = [], IF.size = 1 / 0) : IF = null, LQ = DQ.structures, LQ) {
            LQ.uninitialized && (LQ = DQ._mergeStructures(DQ.getStructures()));
            let QQ = LQ.sharedLength || 0;
            if (QQ > mQ) throw new Error("Shared structures is larger than maximum shared structures, try increasing maxSharedStructures to " + LQ.sharedLength);
            if (!LQ.transitions) {
              LQ.transitions = Object.create(null);
              for (let FQ = 0; FQ < QQ; FQ++) {
                let QQ = LQ[FQ];
                if (!QQ) continue;
                let wQ, qQ = LQ.transitions;
                for (let FQ = 0, LQ = QQ.length; FQ < LQ; FQ++) {
                  let LQ = QQ[FQ];
                  wQ = qQ[LQ], wQ || (wQ = qQ[LQ] = Object.create(null)), qQ = wQ
                }
                qQ[NF] = FQ + 64
              }
              this.lastNamedStructuresLength = QQ
            }
            kQ || (LQ.nextId = QQ + 64)
          }
          let vQ;
          wQ && (wQ = !1);
          try {
            DQ.randomAccessStructure && QQ && QQ.constructor && QQ.constructor === Object ? OQ(QQ) : GQ(QQ);
            let wQ = IF;
            if (IF && jF(FQ, GQ, 0), qQ && qQ.idsToInsert) {
              let QQ = qQ.idsToInsert.sort(((QQ, FQ) => QQ.offset > FQ.offset ? 1 : -1)),
                LQ = QQ.length,
                oQ = -1;
              for (; wQ && LQ > 0;) {
                let qQ = QQ[--LQ].offset + FQ;
                qQ < wQ.stringsPosition + FQ && -1 === oQ && (oQ = 0), qQ > wQ.position + FQ ? oQ >= 0 && (oQ += 6) : (oQ >= 0 && (RF.setUint32(wQ.position + FQ, RF.getUint32(wQ.position + FQ) + oQ), oQ = -1), wQ = wQ.previous, LQ++)
              }
              oQ >= 0 && wQ && RF.setUint32(wQ.position + FQ, RF.getUint32(wQ.position + FQ) + oQ), rF += 6 * QQ.length, rF > OF && iQ(rF), DQ.offset = rF;
              let kQ = function(QQ, FQ) {
                let wQ, LQ = 6 * FQ.length,
                  qQ = QQ.length - LQ;
                for (; wQ = FQ.pop();) {
                  let FQ = wQ.offset,
                    oQ = wQ.id;
                  QQ.copyWithin(FQ + LQ, FQ, qQ), LQ -= 6;
                  let DQ = FQ + LQ;
                  QQ[DQ++] = 214, QQ[DQ++] = 105, QQ[DQ++] = oQ >> 24, QQ[DQ++] = oQ >> 16 & 255, QQ[DQ++] = oQ >> 8 & 255, QQ[DQ++] = 255 & oQ, qQ = FQ
                }
                return QQ
              }(iF.subarray(FQ, rF), QQ);
              return qQ = null, kQ
            }
            return DQ.offset = rF, oQ & ZF ? (iF.start = FQ, iF.end = rF, iF) : iF.subarray(FQ, rF)
          } catch (Lw) {
            throw vQ = Lw, Lw
          } finally {
            if (LQ && (eQ(), wQ && DQ.saveStructures)) {
              let wQ = LQ.sharedLength || 0,
                qQ = iF.subarray(FQ, rF),
                kQ = XF(LQ, DQ);
              if (!vQ) return !1 === DQ.saveStructures(kQ, kQ.isCompatible) ? DQ.pack(QQ, oQ) : (DQ.lastNamedStructuresLength = wQ, iF.length > 1073741824 && (iF = null), qQ)
            }
            iF.length > 1073741824 && (iF = null), oQ & yF && (rF = FQ)
          }
        };
        const eQ = () => {
            tQ < 10 && tQ++;
            let QQ = LQ.sharedLength || 0;
            if (LQ.length > QQ && !kQ && (LQ.length = QQ), AQ > 1e4) LQ.transitions = null, tQ = 0, AQ = 0, xQ.length > 0 && (xQ = []);
            else if (xQ.length > 0 && !kQ) {
              for (let QQ = 0, FQ = xQ.length; QQ < FQ; QQ++) xQ[QQ][NF] = 0;
              xQ = []
            }
          },
          MQ = QQ => {
            var FQ = QQ.length;
            FQ < 16 ? iF[rF++] = 144 | FQ : FQ < 65536 ? (iF[rF++] = 220, iF[rF++] = FQ >> 8, iF[rF++] = 255 & FQ) : (iF[rF++] = 221, RF.setUint32(rF, FQ), rF += 4);
            for (let wQ = 0; wQ < FQ; wQ++) GQ(QQ[wQ])
          },
          GQ = QQ => {
            rF > OF && (iF = iQ(rF));
            var wQ, LQ = typeof QQ;
            if ("string" === LQ) {
              let LQ, qQ = QQ.length;
              if (IF && qQ >= 4 && qQ < 4096) {
                if ((IF.size += qQ) > 21760) {
                  let QQ, wQ, LQ = (IF[0] ? 3 * IF[0].length + IF[1].length : 0) + 10;
                  rF + LQ > OF && (iF = iQ(rF + LQ)), IF.position ? (wQ = IF, iF[rF] = 200, rF += 3, iF[rF++] = 98, QQ = rF - FQ, rF += 4, jF(FQ, GQ, 0), RF.setUint16(QQ + FQ - 3, rF - FQ - QQ)) : (iF[rF++] = 214, iF[rF++] = 98, QQ = rF - FQ, rF += 4), IF = ["", ""], IF.previous = wQ, IF.size = 0, IF.position = QQ
                }
                let wQ = UF.test(QQ);
                return IF[wQ ? 0 : 1] += QQ, iF[rF++] = 193, void GQ(wQ ? -qQ : qQ)
              }
              LQ = qQ < 32 ? 1 : qQ < 256 ? 2 : qQ < 65536 ? 3 : 5;
              let DQ = 3 * qQ;
              if (rF + DQ > OF && (iF = iQ(rF + DQ)), qQ < 64 || !oQ) {
                let FQ, oQ, DQ, kQ = rF + LQ;
                for (FQ = 0; FQ < qQ; FQ++) oQ = QQ.charCodeAt(FQ), oQ < 128 ? iF[kQ++] = oQ : oQ < 2048 ? (iF[kQ++] = oQ >> 6 | 192, iF[kQ++] = 63 & oQ | 128) : 55296 === (64512 & oQ) && 56320 === (64512 & (DQ = QQ.charCodeAt(FQ + 1))) ? (oQ = 65536 + ((1023 & oQ) << 10) + (1023 & DQ), FQ++, iF[kQ++] = oQ >> 18 | 240, iF[kQ++] = oQ >> 12 & 63 | 128, iF[kQ++] = oQ >> 6 & 63 | 128, iF[kQ++] = 63 & oQ | 128) : (iF[kQ++] = oQ >> 12 | 224, iF[kQ++] = oQ >> 6 & 63 | 128, iF[kQ++] = 63 & oQ | 128);
                wQ = kQ - rF - LQ
              } else wQ = oQ(QQ, rF + LQ);
              wQ < 32 ? iF[rF++] = 160 | wQ : wQ < 256 ? (LQ < 2 && iF.copyWithin(rF + 2, rF + 1, rF + 1 + wQ), iF[rF++] = 217, iF[rF++] = wQ) : wQ < 65536 ? (LQ < 3 && iF.copyWithin(rF + 3, rF + 2, rF + 2 + wQ), iF[rF++] = 218, iF[rF++] = wQ >> 8, iF[rF++] = 255 & wQ) : (LQ < 5 && iF.copyWithin(rF + 5, rF + 3, rF + 3 + wQ), iF[rF++] = 219, RF.setUint32(rF, wQ), rF += 4), rF += wQ
            } else if ("number" === LQ)
              if (QQ >>> 0 === QQ) QQ < 32 || QQ < 128 && !1 === this.useRecords || QQ < 64 && !this.randomAccessStructure ? iF[rF++] = QQ : QQ < 256 ? (iF[rF++] = 204, iF[rF++] = QQ) : QQ < 65536 ? (iF[rF++] = 205, iF[rF++] = QQ >> 8, iF[rF++] = 255 & QQ) : (iF[rF++] = 206, RF.setUint32(rF, QQ), rF += 4);
              else if ((QQ | 0) === QQ) QQ >= -32 ? iF[rF++] = 256 + QQ : QQ >= -128 ? (iF[rF++] = 208, iF[rF++] = QQ + 256) : QQ >= -32768 ? (iF[rF++] = 209, RF.setInt16(rF, QQ), rF += 2) : (iF[rF++] = 210, RF.setInt32(rF, QQ), rF += 4);
            else {
              let FQ;
              if ((FQ = this.useFloat32) > 0 && QQ < 4294967296 && QQ >= -2147483648) {
                let wQ;
                if (iF[rF++] = 202, RF.setFloat32(rF, QQ), FQ < 4 || ((wQ = QQ * kF[(127 & iF[rF]) << 1 | iF[rF + 1] >> 7]) | 0) === wQ) return void(rF += 4);
                rF--
              }
              iF[rF++] = 203, RF.setFloat64(rF, QQ), rF += 8
            } else if ("object" === LQ || "function" === LQ)
              if (QQ) {
                if (qQ) {
                  let wQ = qQ.get(QQ);
                  if (wQ) {
                    if (!wQ.id) {
                      let QQ = qQ.idsToInsert || (qQ.idsToInsert = []);
                      wQ.id = QQ.push(wQ)
                    }
                    return iF[rF++] = 214, iF[rF++] = 112, RF.setUint32(rF, wQ.id), void(rF += 4)
                  }
                  qQ.set(QQ, {
                    offset: rF - FQ
                  })
                }
                let oQ = QQ.constructor;
                if (oQ === Object) SQ(QQ);
                else if (oQ === Array) MQ(QQ);
                else if (oQ === Map)
                  if (this.mapAsEmptyObject) iF[rF++] = 128;
                  else {
                    (wQ = QQ.size) < 16 ? iF[rF++] = 128 | wQ : wQ < 65536 ? (iF[rF++] = 222, iF[rF++] = wQ >> 8, iF[rF++] = 255 & wQ) : (iF[rF++] = 223, RF.setUint32(rF, wQ), rF += 4);
                    for (let [FQ, wQ] of QQ) GQ(FQ), GQ(wQ)
                  }
                else {
                  for (let FQ = 0, wQ = AF.length; FQ < wQ; FQ++) {
                    if (QQ instanceof tF[FQ]) {
                      let wQ = AF[FQ];
                      if (wQ.write) {
                        wQ.type && (iF[rF++] = 212, iF[rF++] = wQ.type, iF[rF++] = 0);
                        let FQ = wQ.write.call(this, QQ);
                        return void(FQ === QQ ? Array.isArray(QQ) ? MQ(QQ) : SQ(QQ) : GQ(FQ))
                      }
                      let LQ, qQ = iF,
                        oQ = RF,
                        DQ = rF;
                      iF = null;
                      try {
                        LQ = wQ.pack.call(this, QQ, (QQ => (iF = qQ, qQ = null, rF += QQ, rF > OF && iQ(rF), {
                          target: iF,
                          targetView: RF,
                          position: rF - QQ
                        })), GQ)
                      } finally {
                        qQ && (iF = qQ, RF = oQ, rF = DQ, OF = iF.length - 10)
                      }
                      return void(LQ && (LQ.length + rF > OF && iQ(LQ.length + rF), rF = lF(LQ, iF, rF, wQ.type)))
                    }
                  }
                  if (Array.isArray(QQ)) MQ(QQ);
                  else {
                    if (QQ.toJSON) {
                      const FQ = QQ.toJSON();
                      if (FQ !== QQ) return GQ(FQ)
                    }
                    if ("function" === LQ) return GQ(this.writeFunction && this.writeFunction(QQ));
                    SQ(QQ)
                  }
                }
              } else iF[rF++] = 192;
            else if ("boolean" === LQ) iF[rF++] = QQ ? 195 : 194;
            else if ("bigint" === LQ) {
              if (QQ < BigInt(1) << BigInt(63) && QQ >= -(BigInt(1) << BigInt(63))) iF[rF++] = 211, RF.setBigInt64(rF, QQ);
              else if (QQ < BigInt(1) << BigInt(64) && QQ > 0) iF[rF++] = 207, RF.setBigUint64(rF, QQ);
              else {
                if (!this.largeBigIntToFloat) {
                  if (this.largeBigIntToString) return GQ(QQ.toString());
                  if (this.useBigIntExtension && QQ < BigInt(2) ** BigInt(1023) && QQ > -(BigInt(2) ** BigInt(1023))) {
                    iF[rF++] = 199, rF++, iF[rF++] = 66;
                    let FQ, wQ = [];
                    do {
                      let LQ = QQ & BigInt(255);
                      FQ = (LQ & BigInt(128)) === (QQ < BigInt(0) ? BigInt(128) : BigInt(0)), wQ.push(LQ), QQ >>= BigInt(8)
                    } while (QQ !== BigInt(0) && QQ !== BigInt(-1) || !FQ);
                    iF[rF - 2] = wQ.length;
                    for (let QQ = wQ.length; QQ > 0;) iF[rF++] = Number(wQ[--QQ]);
                    return
                  }
                  throw new RangeError(QQ + " was too large to fit in MessagePack 64-bit integer format, use useBigIntExtension, or set largeBigIntToFloat to convert to float-64, or set largeBigIntToString to convert to string")
                }
                iF[rF++] = 203, RF.setFloat64(rF, Number(QQ))
              }
              rF += 8
            } else {
              if ("undefined" !== LQ) throw new Error("Unknown type: " + LQ);
              this.encodeUndefinedAsNil ? iF[rF++] = 192 : (iF[rF++] = 212, iF[rF++] = 0, iF[rF++] = 0)
            }
          },
          pQ = this.variableMapSize || this.coercibleKeyAsNumber || this.skipValues ? QQ => {
            let FQ;
            if (this.skipValues) {
              FQ = [];
              for (let wQ in QQ) "function" === typeof QQ.hasOwnProperty && !QQ.hasOwnProperty(wQ) || this.skipValues.includes(QQ[wQ]) || FQ.push(wQ)
            } else FQ = Object.keys(QQ);
            let wQ, LQ = FQ.length;
            if (LQ < 16 ? iF[rF++] = 128 | LQ : LQ < 65536 ? (iF[rF++] = 222, iF[rF++] = LQ >> 8, iF[rF++] = 255 & LQ) : (iF[rF++] = 223, RF.setUint32(rF, LQ), rF += 4), this.coercibleKeyAsNumber)
              for (let qQ = 0; qQ < LQ; qQ++) {
                wQ = FQ[qQ];
                let LQ = Number(wQ);
                GQ(isNaN(LQ) ? wQ : LQ), GQ(QQ[wQ])
              } else
                for (let qQ = 0; qQ < LQ; qQ++) GQ(wQ = FQ[qQ]), GQ(QQ[wQ])
          } : QQ => {
            iF[rF++] = 222;
            let wQ = rF - FQ;
            rF += 2;
            let LQ = 0;
            for (let FQ in QQ)("function" !== typeof QQ.hasOwnProperty || QQ.hasOwnProperty(FQ)) && (GQ(FQ), GQ(QQ[FQ]), LQ++);
            if (LQ > 65535) throw new Error('Object is too large to serialize with fast 16-bit map size, use the "variableMapSize" option to serialize this object');
            iF[wQ++ + FQ] = LQ >> 8, iF[wQ + FQ] = 255 & LQ
          },
          cQ = !1 === this.useRecords ? pQ : QQ.progressiveRecords && !HQ ? QQ => {
            let wQ, qQ, oQ = LQ.transitions || (LQ.transitions = Object.create(null)),
              DQ = rF++ - FQ;
            for (let kQ in QQ)
              if ("function" !== typeof QQ.hasOwnProperty || QQ.hasOwnProperty(kQ)) {
                if (wQ = oQ[kQ], wQ) oQ = wQ;
                else {
                  let vQ = Object.keys(QQ),
                    mQ = oQ;
                  oQ = LQ.transitions;
                  let uQ = 0;
                  for (let QQ = 0, FQ = vQ.length; QQ < FQ; QQ++) {
                    let FQ = vQ[QQ];
                    wQ = oQ[FQ], wQ || (wQ = oQ[FQ] = Object.create(null), uQ++), oQ = wQ
                  }
                  DQ + FQ + 1 == rF ? (rF--, WQ(oQ, vQ, uQ)) : RQ(oQ, vQ, DQ, uQ), qQ = !0, oQ = mQ[kQ]
                }
                GQ(QQ[kQ])
              } if (!qQ) {
              let wQ = oQ[NF];
              wQ ? iF[DQ + FQ] = wQ : RQ(oQ, Object.keys(QQ), DQ, 0)
            }
          } : QQ => {
            let FQ, wQ = LQ.transitions || (LQ.transitions = Object.create(null)),
              qQ = 0;
            for (let LQ in QQ)("function" !== typeof QQ.hasOwnProperty || QQ.hasOwnProperty(LQ)) && (FQ = wQ[LQ], FQ || (FQ = wQ[LQ] = Object.create(null), qQ++), wQ = FQ);
            let oQ = wQ[NF];
            oQ ? oQ >= 96 && HQ ? (iF[rF++] = 96 + (31 & (oQ -= 96)), iF[rF++] = oQ >> 5) : iF[rF++] = oQ : WQ(wQ, wQ.__keys__ || Object.keys(QQ), qQ);
            for (let LQ in QQ)("function" !== typeof QQ.hasOwnProperty || QQ.hasOwnProperty(LQ)) && GQ(QQ[LQ])
          },
          CQ = "function" == typeof this.useRecords && this.useRecords,
          SQ = CQ ? QQ => {
            CQ(QQ) ? cQ(QQ) : pQ(QQ)
          } : cQ,
          iQ = QQ => {
            let wQ;
            if (QQ > 16777216) {
              if (QQ - FQ > SF) throw new Error("Packed buffer would be larger than maximum buffer size");
              wQ = Math.min(SF, 4096 * Math.round(Math.max((QQ - FQ) * (QQ > 67108864 ? 1.25 : 2), 4194304) / 4096))
            } else wQ = 1 + (Math.max(QQ - FQ << 2, iF.length - 1) >> 12) << 12;
            let LQ = new cF(wQ);
            return RF = LQ.dataView || (LQ.dataView = new DataView(LQ.buffer, 0, wQ)), QQ = Math.min(QQ, iF.length), iF.copy ? iF.copy(LQ, 0, FQ, QQ) : LQ.set(iF.slice(FQ, QQ)), rF -= FQ, FQ = 0, OF = LQ.length - 10, iF = LQ
          },
          WQ = (QQ, FQ, qQ) => {
            let oQ = LQ.nextId;
            oQ || (oQ = 64), oQ < bQ && this.shouldShareStructure && !this.shouldShareStructure(FQ) ? (oQ = LQ.nextOwnId, oQ < YQ || (oQ = bQ), LQ.nextOwnId = oQ + 1) : (oQ >= YQ && (oQ = bQ), LQ.nextId = oQ + 1);
            let DQ = FQ.highByte = oQ >= 96 && HQ ? oQ - 96 >> 5 : -1;
            QQ[NF] = oQ, QQ.__keys__ = FQ, LQ[oQ - 64] = FQ, oQ < bQ ? (FQ.isShared = !0, LQ.sharedLength = oQ - 63, wQ = !0, DQ >= 0 ? (iF[rF++] = 96 + (31 & oQ), iF[rF++] = DQ) : iF[rF++] = oQ) : (DQ >= 0 ? (iF[rF++] = 213, iF[rF++] = 114, iF[rF++] = 96 + (31 & oQ), iF[rF++] = DQ) : (iF[rF++] = 212, iF[rF++] = 114, iF[rF++] = oQ), qQ && (AQ += tQ * qQ), xQ.length >= uQ && (xQ.shift()[NF] = 0), xQ.push(QQ), GQ(FQ))
          },
          RQ = (QQ, wQ, LQ, qQ) => {
            let oQ = iF,
              DQ = rF,
              kQ = OF,
              vQ = FQ;
            iF = WF, rF = 0, FQ = 0, iF || (WF = iF = new cF(8192)), OF = iF.length - 10, WQ(QQ, wQ, qQ), WF = iF;
            let mQ = rF;
            if (iF = oQ, rF = DQ, OF = kQ, FQ = vQ, mQ > 1) {
              let QQ = rF + mQ - 1;
              QQ > OF && iQ(QQ);
              let wQ = LQ + FQ;
              iF.copyWithin(wQ + mQ, wQ + 1, rF), iF.set(WF.slice(0, mQ), wQ), rF = QQ
            } else iF[LQ + FQ] = WF[0]
          },
          OQ = QQ => {
            let qQ = sF(QQ, iF, FQ, rF, LQ, iQ, ((QQ, FQ, LQ) => {
              if (LQ) return wQ = !0;
              rF = FQ;
              let qQ = iF;
              return GQ(QQ), eQ(), qQ !== iF ? {
                position: rF,
                targetView: RF,
                target: iF
              } : rF
            }), this);
            if (0 === qQ) return SQ(QQ);
            rF = qQ
          }
      }
      useBuffer(QQ) {
        iF = QQ, RF = iF.dataView || (iF.dataView = new DataView(iF.buffer, iF.byteOffset, iF.byteLength)), rF = 0
      }
      set position(QQ) {
        rF = QQ
      }
      get position() {
        return rF
      }
      set buffer(QQ) {
        iF = QQ
      }
      get buffer() {
        return iF
      }
      clearSharedData() {
        this.structures && (this.structures = []), this.typedStructs && (this.typedStructs = [])
      }
    }

    function KF(QQ, FQ, wQ, LQ) {
      let qQ = QQ.byteLength;
      if (qQ + 1 < 256) {
        var {
          target: oQ,
          position: DQ
        } = wQ(4 + qQ);
        oQ[DQ++] = 199, oQ[DQ++] = qQ + 1
      } else if (qQ + 1 < 65536) {
        var {
          target: oQ,
          position: DQ
        } = wQ(5 + qQ);
        oQ[DQ++] = 200, oQ[DQ++] = qQ + 1 >> 8, oQ[DQ++] = qQ + 1 & 255
      } else {
        var {
          target: oQ,
          position: DQ,
          targetView: kQ
        } = wQ(7 + qQ);
        oQ[DQ++] = 201, kQ.setUint32(DQ, qQ + 1), DQ += 4
      }
      oQ[DQ++] = 116, oQ[DQ++] = FQ, QQ.buffer || (QQ = new Uint8Array(QQ)), oQ.set(new Uint8Array(QQ.buffer, QQ.byteOffset, QQ.byteLength), DQ)
    }

    function zF(QQ, FQ) {
      let wQ = QQ.byteLength;
      var LQ, qQ;
      if (wQ < 256) {
        var {
          target: LQ,
          position: qQ
        } = FQ(wQ + 2);
        LQ[qQ++] = 196, LQ[qQ++] = wQ
      } else if (wQ < 65536) {
        var {
          target: LQ,
          position: qQ
        } = FQ(wQ + 3);
        LQ[qQ++] = 197, LQ[qQ++] = wQ >> 8, LQ[qQ++] = 255 & wQ
      } else {
        var {
          target: LQ,
          position: qQ,
          targetView: oQ
        } = FQ(wQ + 5);
        LQ[qQ++] = 198, oQ.setUint32(qQ, wQ), qQ += 4
      }
      LQ.set(QQ, qQ)
    }

    function lF(QQ, FQ, wQ, LQ) {
      let qQ = QQ.length;
      switch (qQ) {
        case 1:
          FQ[wQ++] = 212;
          break;
        case 2:
          FQ[wQ++] = 213;
          break;
        case 4:
          FQ[wQ++] = 214;
          break;
        case 8:
          FQ[wQ++] = 215;
          break;
        case 16:
          FQ[wQ++] = 216;
          break;
        default:
          qQ < 256 ? (FQ[wQ++] = 199, FQ[wQ++] = qQ) : qQ < 65536 ? (FQ[wQ++] = 200, FQ[wQ++] = qQ >> 8, FQ[wQ++] = 255 & qQ) : (FQ[wQ++] = 201, FQ[wQ++] = qQ >> 24, FQ[wQ++] = qQ >> 16 & 255, FQ[wQ++] = qQ >> 8 & 255, FQ[wQ++] = 255 & qQ)
      }
      return FQ[wQ++] = LQ, FQ.set(QQ, wQ), wQ += qQ
    }

    function jF(QQ, FQ, wQ) {
      if (IF.length > 0) {
        RF.setUint32(IF.position + QQ, rF + wQ - IF.position - QQ), IF.stringsPosition = rF - QQ;
        let LQ = IF;
        IF = null, FQ(LQ[0]), FQ(LQ[1])
      }
    }

    function aF(QQ) {
      if (QQ.Class) {
        if (!QQ.pack && !QQ.write) throw new Error("Extension has no pack or write function");
        if (QQ.pack && !QQ.type) throw new Error("Extension has no type (numeric code to identify the extension)");
        tF.unshift(QQ.Class), AF.unshift(QQ)
      }! function(QQ) {
        QQ.unpack ? MQ[QQ.type] = QQ.unpack : MQ[QQ.type] = QQ
      }(QQ)
    }

    function XF(QQ, FQ) {
      return QQ.isCompatible = QQ => {
        let wQ = !QQ || (FQ.lastNamedStructuresLength || 0) === QQ.length;
        return wQ || FQ._mergeStructures(QQ), wQ
      }, QQ
    }
    tF = [Date, Set, Error, RegExp, ArrayBuffer, Object.getPrototypeOf(Uint8Array.prototype).constructor, pQ], AF = [{
      pack(QQ, FQ, wQ) {
        let LQ = QQ.getTime() / 1e3;
        if ((this.useTimestamp32 || 0 === QQ.getMilliseconds()) && LQ >= 0 && LQ < 4294967296) {
          let {
            target: QQ,
            targetView: wQ,
            position: qQ
          } = FQ(6);
          QQ[qQ++] = 214, QQ[qQ++] = 255, wQ.setUint32(qQ, LQ)
        } else if (LQ > 0 && LQ < 4294967296) {
          let {
            target: wQ,
            targetView: qQ,
            position: oQ
          } = FQ(10);
          wQ[oQ++] = 215, wQ[oQ++] = 255, qQ.setUint32(oQ, 4e6 * QQ.getMilliseconds() + (LQ / 1e3 / 4294967296 | 0)), qQ.setUint32(oQ + 4, LQ)
        } else if (isNaN(LQ)) {
          if (this.onInvalidDate) return FQ(0), wQ(this.onInvalidDate());
          let {
            target: QQ,
            targetView: LQ,
            position: qQ
          } = FQ(3);
          QQ[qQ++] = 212, QQ[qQ++] = 255, QQ[qQ++] = 255
        } else {
          let {
            target: wQ,
            targetView: qQ,
            position: oQ
          } = FQ(15);
          wQ[oQ++] = 199, wQ[oQ++] = 12, wQ[oQ++] = 255, qQ.setUint32(oQ, 1e6 * QQ.getMilliseconds()), qQ.setBigInt64(oQ + 4, BigInt(Math.floor(LQ)))
        }
      }
    }, {
      pack(QQ, FQ, wQ) {
        if (this.setAsEmptyObject) return FQ(0), wQ({});
        let LQ = Array.from(QQ),
          {
            target: qQ,
            position: oQ
          } = FQ(this.moreTypes ? 3 : 0);
        this.moreTypes && (qQ[oQ++] = 212, qQ[oQ++] = 115, qQ[oQ++] = 0), wQ(LQ)
      }
    }, {
      pack(QQ, FQ, wQ) {
        let {
          target: LQ,
          position: qQ
        } = FQ(this.moreTypes ? 3 : 0);
        this.moreTypes && (LQ[qQ++] = 212, LQ[qQ++] = 101, LQ[qQ++] = 0), wQ([QQ.name, QQ.message, QQ.cause])
      }
    }, {
      pack(QQ, FQ, wQ) {
        let {
          target: LQ,
          position: qQ
        } = FQ(this.moreTypes ? 3 : 0);
        this.moreTypes && (LQ[qQ++] = 212, LQ[qQ++] = 120, LQ[qQ++] = 0), wQ([QQ.source, QQ.flags])
      }
    }, {
      pack(QQ, FQ) {
        this.moreTypes ? KF(QQ, 16, FQ) : zF(pF ? Buffer.from(QQ) : new Uint8Array(QQ), FQ)
      }
    }, {
      pack(QQ, FQ) {
        let wQ = QQ.constructor;
        wQ !== CF && this.moreTypes ? KF(QQ, wF.indexOf(wQ.name), FQ) : zF(QQ, FQ)
      }
    }, {
      pack(QQ, FQ) {
        let {
          target: wQ,
          position: LQ
        } = FQ(1);
        wQ[LQ] = 193
      }
    }];
    let fF = new TF({
      useRecords: !1
    });
    const VF = fF.pack,
      hF = fF.pack,
      JF = TF,
      {
        NEVER: EF,
        ALWAYS: nF,
        DECIMAL_ROUND: gF,
        DECIMAL_FIT: PF
      } = YF,
      ZF = 512,
      yF = 1024,
      BF = 2048;
    const dF = function(QQ) {
        let FQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        if (!QQ || "object" !== typeof QQ) throw new Error("first argument must be an Iterable, Async Iterable, Iterator, Async Iterator, or a promise");
        const wQ = new OQ(FQ);
        let LQ;
        const qQ = QQ => {
          let FQ;
          LQ && (QQ = Buffer.concat([LQ, QQ]), LQ = void 0);
          try {
            FQ = wQ.unpackMultiple(QQ)
          } catch (qQ) {
            if (!qQ.incomplete) throw qQ;
            LQ = QQ.slice(qQ.lastPosition), FQ = qQ.values
          }
          return FQ
        };
        return "function" === typeof QQ[Symbol.iterator] ? function*() {
          for (const FQ of QQ) yield* qQ(FQ)
        }() : "function" === typeof QQ[Symbol.asyncIterator] ? async function*() {
          for await (const FQ of QQ) yield* qQ(FQ)
        }(): void 0
      },
      Qw = function(QQ) {
        let FQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        if (QQ && "object" === typeof QQ) {
          if ("function" === typeof QQ[Symbol.iterator]) return function*(QQ, FQ) {
            const wQ = new TF(FQ);
            for (const LQ of QQ) yield wQ.pack(LQ)
          }(QQ, FQ);
          if ("function" === typeof QQ.then || "function" === typeof QQ[Symbol.asyncIterator]) return async function*(QQ, FQ) {
            const wQ = new TF(FQ);
            for await (const LQ of QQ) yield wQ.pack(LQ)
          }(QQ, FQ);
          throw new Error("first argument must be an Iterable, Async Iterable, Iterator, Async Iterator, or a Promise")
        }
        throw new Error("first argument must be an Iterable, Async Iterable, or a Promise for an Async Iterable")
      },
      Fw = !1,
      ww = !0
  },
  8877: (QQ, FQ, wQ) => {
    wQ.r(FQ), wQ.d(FQ, {
      $changes: () => AQ,
      $childType: () => tQ,
      $decoder: () => uQ,
      $deleteByIndex: () => YQ,
      $encoder: () => mQ,
      $filter: () => HQ,
      $getByIndex: () => bQ,
      $numFields: () => RQ,
      $refId: () => kQ,
      $track: () => vQ,
      $values: () => cQ,
      ArraySchema: () => LL,
      Callbacks: () => Lq,
      ChangeTree: () => Iw,
      CollectionSchema: () => DL,
      Decoder: () => PL,
      Encoder: () => JL,
      FieldBuilder: () => mL,
      MapSchema: () => oL,
      Metadata: () => gF,
      OPERATION: () => qQ,
      Reflection: () => dL,
      ReflectionField: () => yL,
      ReflectionType: () => BL,
      Root: () => UL,
      Schema: () => rL,
      SetSchema: () => kL,
      StateCallbackStrategy: () => wq,
      StateView: () => lL,
      StreamSchema: () => vL,
      TypeContext: () => XF,
      createPool: () => oq,
      decode: () => GF,
      decodeKeyValueOperation: () => yw,
      decodeSchemaOperation: () => Zw,
      defineCustomTypes: () => SF,
      defineTypes: () => RL,
      deprecated: () => iL,
      dumpChanges: () => sL,
      encode: () => FF,
      encodeArray: () => aw,
      encodeIndexedEntry: () => lw,
      encodeKeyValueOperation: () => jw,
      encodeMapEntry: () => zw,
      encodeSchemaOperation: () => Kw,
      dY: () => tL,
      fullStateOnly: () => pL,
      getDecoderStateCallbacks: () => Qq,
      getEncodeDescriptor: () => Qw,
      getRawChangesCallback: () => Fq,
      isBuilder: () => uL,
      patchOnly: () => GL,
      registerType: () => CF,
      schema: () => OL,
      t: () => xL,
      type: () => cL,
      unreliable: () => ML,
      view: () => eL
    });
    const LQ = 255;
    var qQ;

    function oQ(QQ) {
      Object.defineProperty(QQ, Symbol.metadata, {
        value: void 0,
        writable: !0,
        configurable: !0,
        enumerable: !1
      })
    }! function(QQ) {
      QQ[QQ.ADD = 128] = "ADD", QQ[QQ.REPLACE = 0] = "REPLACE", QQ[QQ.DELETE = 64] = "DELETE", QQ[QQ.DELETE_AND_MOVE = 96] = "DELETE_AND_MOVE", QQ[QQ.MOVE_AND_ADD = 160] = "MOVE_AND_ADD", QQ[QQ.DELETE_AND_ADD = 192] = "DELETE_AND_ADD", QQ[QQ.CLEAR = 10] = "CLEAR", QQ[QQ.REVERSE = 15] = "REVERSE", QQ[QQ.MOVE = 32] = "MOVE", QQ[QQ.DELETE_BY_REFID = 33] = "DELETE_BY_REFID", QQ[QQ.ADD_BY_REFID = 129] = "ADD_BY_REFID"
    }(qQ || (qQ = {})), Symbol.metadata ??= Symbol.for("Symbol.metadata");
    const DQ = "undefined" !== typeof globalThis ? globalThis : "undefined" !== typeof global ? global : "undefined" !== typeof self ? self : "undefined" !== typeof window ? window : {};
    if ("function" === typeof Symbol && "function" !== typeof Symbol.for) {
      const QQ = "colyseus.symbolRegistry",
        FQ = DQ[QQ] || (DQ[QQ] = Object.create(null));
      Symbol.for = function(QQ) {
        return FQ[QQ] || (FQ[QQ] = Symbol(QQ))
      }, Symbol.keyFor = function(QQ) {
        for (const wQ in FQ)
          if (FQ[wQ] === QQ) return wQ
      }
    }
    const kQ = Symbol.for("$refId"),
      vQ = "~track",
      mQ = "~encoder",
      uQ = "~decoder",
      HQ = "~filter",
      bQ = "~getByIndex",
      YQ = "~deleteByIndex",
      xQ = "~resyncPrune",
      AQ = Symbol.for("$changes"),
      tQ = Symbol.for("$childType"),
      eQ = Symbol.for("$proxyTarget"),
      MQ = "~onEncodeEnd",
      GQ = "~reset",
      pQ = "~onDecodeEnd",
      cQ = Symbol.for("$values"),
      CQ = "~builder",
      SQ = "~descriptors",
      iQ = "~__encodeDescriptor",
      WQ = "~encoders",
      RQ = "~__numFields",
      OQ = "~__refTypeFieldIndexes",
      sQ = "~__viewFieldIndexes",
      rQ = "$__fieldIndexesByViewTag",
      IQ = "~__unreliableFieldIndexes",
      UQ = "~__patchOnlyFieldIndexes",
      NQ = "~__fullSyncSkipIndexes",
      TQ = "~__fullStateOnlyFieldIndexes",
      KQ = "~__streamFieldIndexes",
      zQ = "~__streamPriorities";
    let lQ;
    try {
      lQ = new TextEncoder
    } catch (Dq) {}
    const jQ = new ArrayBuffer(8),
      aQ = new Int32Array(jQ),
      XQ = new Float32Array(jQ),
      fQ = new Float64Array(jQ),
      VQ = new BigInt64Array(jQ),
      hQ = "undefined" !== typeof Buffer && Buffer.byteLength ? Buffer.byteLength : function(QQ, FQ) {
        for (var wQ = 0, LQ = 0, qQ = 0, oQ = QQ.length; qQ < oQ; qQ++)(wQ = QQ.charCodeAt(qQ)) < 128 ? LQ += 1 : wQ < 2048 ? LQ += 2 : wQ < 55296 || wQ >= 57344 ? LQ += 3 : (qQ++, LQ += 4);
        return LQ
      };

    function JQ(QQ, FQ, wQ) {
      for (var LQ = 0, qQ = 0, oQ = FQ.length; qQ < oQ; qQ++)(LQ = FQ.charCodeAt(qQ)) < 128 ? QQ[wQ.offset++] = LQ : LQ < 2048 ? (QQ[wQ.offset] = 192 | LQ >> 6, QQ[wQ.offset + 1] = 128 | 63 & LQ, wQ.offset += 2) : LQ < 55296 || LQ >= 57344 ? (QQ[wQ.offset] = 224 | LQ >> 12, QQ[wQ.offset + 1] = 128 | LQ >> 6 & 63, QQ[wQ.offset + 2] = 128 | 63 & LQ, wQ.offset += 3) : (qQ++, LQ = 65536 + ((1023 & LQ) << 10 | 1023 & FQ.charCodeAt(qQ)), QQ[wQ.offset] = 240 | LQ >> 18, QQ[wQ.offset + 1] = 128 | LQ >> 12 & 63, QQ[wQ.offset + 2] = 128 | LQ >> 6 & 63, QQ[wQ.offset + 3] = 128 | 63 & LQ, wQ.offset += 4)
    }

    function EQ(QQ, FQ, wQ) {
      QQ[wQ.offset++] = 255 & FQ
    }

    function nQ(QQ, FQ, wQ) {
      QQ[wQ.offset++] = 255 & FQ, QQ[wQ.offset++] = FQ >> 8 & 255
    }

    function gQ(QQ, FQ, wQ) {
      QQ[wQ.offset++] = 255 & FQ, QQ[wQ.offset++] = FQ >> 8 & 255
    }

    function PQ(QQ, FQ, wQ) {
      QQ[wQ.offset++] = 255 & FQ, QQ[wQ.offset++] = FQ >> 8 & 255, QQ[wQ.offset++] = FQ >> 16 & 255, QQ[wQ.offset++] = FQ >> 24 & 255
    }

    function ZQ(QQ, FQ, wQ) {
      const LQ = FQ >> 24,
        qQ = FQ >> 16,
        oQ = FQ >> 8,
        DQ = FQ;
      QQ[wQ.offset++] = 255 & DQ, QQ[wQ.offset++] = 255 & oQ, QQ[wQ.offset++] = 255 & qQ, QQ[wQ.offset++] = 255 & LQ
    }

    function yQ(QQ, FQ, wQ) {
      const LQ = Math.floor(FQ / Math.pow(2, 32));
      ZQ(QQ, FQ >>> 0, wQ), ZQ(QQ, LQ, wQ)
    }

    function BQ(QQ, FQ, wQ) {
      const LQ = FQ / Math.pow(2, 32) | 0;
      ZQ(QQ, FQ >>> 0, wQ), ZQ(QQ, LQ, wQ)
    }

    function dQ(QQ, FQ, wQ) {
      XQ[0] = FQ, PQ(QQ, aQ[0], wQ)
    }

    function QF(QQ, FQ, wQ) {
      fQ[0] = FQ, PQ(QQ, aQ[0], wQ), PQ(QQ, aQ[1], wQ)
    }
    const FF = {
        int8: EQ,
        uint8: function(QQ, FQ, wQ) {
          QQ[wQ.offset++] = 255 & FQ
        },
        int16: nQ,
        uint16: gQ,
        int32: PQ,
        uint32: ZQ,
        int64: yQ,
        uint64: BQ,
        bigint64: function(QQ, FQ, wQ) {
          VQ[0] = BigInt.asIntN(64, FQ), PQ(QQ, aQ[0], wQ), PQ(QQ, aQ[1], wQ)
        },
        biguint64: function(QQ, FQ, wQ) {
          VQ[0] = BigInt.asIntN(64, FQ), PQ(QQ, aQ[0], wQ), PQ(QQ, aQ[1], wQ)
        },
        float32: dQ,
        float64: QF,
        boolean: function(QQ, FQ, wQ) {
          QQ[wQ.offset++] = FQ ? 1 : 0
        },
        string: function(QQ, FQ, wQ) {
          FQ || (FQ = "");
          let LQ = hQ(FQ, "utf8"),
            qQ = 0;
          if (LQ < 32) QQ[wQ.offset++] = 160 | LQ, qQ = 1;
          else if (LQ < 256) QQ[wQ.offset++] = 217, QQ[wQ.offset++] = LQ, qQ = 2;
          else if (LQ < 65536) QQ[wQ.offset++] = 218, gQ(QQ, LQ, wQ), qQ = 3;
          else {
            if (!(LQ < 4294967296)) throw new Error("String too long");
            QQ[wQ.offset++] = 219, ZQ(QQ, LQ, wQ), qQ = 5
          }
          return JQ(QQ, FQ, wQ), qQ + LQ
        },
        number: function QQ(FQ, wQ, LQ) {
          return isNaN(wQ) ? QQ(FQ, 0, LQ) : isFinite(wQ) ? wQ !== (0 | wQ) ? Math.abs(wQ) <= 34028235e31 && (XQ[0] = wQ, Math.abs(Math.abs(XQ[0]) - Math.abs(wQ)) < 1e-4) ? (FQ[LQ.offset++] = 202, dQ(FQ, wQ, LQ), 5) : (FQ[LQ.offset++] = 203, QF(FQ, wQ, LQ), 9) : wQ >= 0 ? wQ < 128 ? (FQ[LQ.offset++] = 255 & wQ, 1) : wQ < 256 ? (FQ[LQ.offset++] = 204, FQ[LQ.offset++] = 255 & wQ, 2) : wQ < 65536 ? (FQ[LQ.offset++] = 205, gQ(FQ, wQ, LQ), 3) : wQ < 4294967296 ? (FQ[LQ.offset++] = 206, ZQ(FQ, wQ, LQ), 5) : (FQ[LQ.offset++] = 207, BQ(FQ, wQ, LQ), 9) : wQ >= -32 ? (FQ[LQ.offset++] = 224 | wQ + 32, 1) : wQ >= -128 ? (FQ[LQ.offset++] = 208, EQ(FQ, wQ, LQ), 2) : wQ >= -32768 ? (FQ[LQ.offset++] = 209, nQ(FQ, wQ, LQ), 3) : wQ >= -2147483648 ? (FQ[LQ.offset++] = 210, PQ(FQ, wQ, LQ), 5) : (FQ[LQ.offset++] = 211, yQ(FQ, wQ, LQ), 9) : QQ(FQ, wQ > 0 ? Number.MAX_SAFE_INTEGER : -Number.MAX_SAFE_INTEGER, LQ)
        },
        utf8Write: JQ,
        utf8Length: hQ
      },
      wF = new ArrayBuffer(8),
      LF = new Int32Array(wF),
      qF = new Float32Array(wF),
      oF = new Float64Array(wF),
      DF = new BigUint64Array(wF),
      kF = new BigInt64Array(wF);

    function vF(QQ, FQ, wQ) {
      wQ > QQ.length - FQ.offset && (wQ = QQ.length - FQ.offset);
      for (var LQ = "", qQ = 0, oQ = FQ.offset, DQ = FQ.offset + wQ; oQ < DQ; oQ++) {
        var kQ = QQ[oQ];
        if (0 !== (128 & kQ))
          if (192 !== (224 & kQ))
            if (224 !== (240 & kQ)) {
              if (240 !== (248 & kQ)) {
                console.error("decode.utf8Read(): Invalid byte " + kQ + " at offset " + oQ + ". Skip to end of string: " + (FQ.offset + wQ));
                break
              }(qQ = (7 & kQ) << 18 | (63 & QQ[++oQ]) << 12 | (63 & QQ[++oQ]) << 6 | 63 & QQ[++oQ]) >= 65536 ? (qQ -= 65536, LQ += String.fromCharCode(55296 + (qQ >>> 10), 56320 + (1023 & qQ))) : LQ += String.fromCharCode(qQ)
            } else LQ += String.fromCharCode((15 & kQ) << 12 | (63 & QQ[++oQ]) << 6 | 63 & QQ[++oQ]);
        else LQ += String.fromCharCode((31 & kQ) << 6 | 63 & QQ[++oQ]);
        else LQ += String.fromCharCode(kQ)
      }
      return FQ.offset += wQ, LQ
    }

    function mF(QQ, FQ) {
      return uF(QQ, FQ) << 24 >> 24
    }

    function uF(QQ, FQ) {
      return QQ[FQ.offset++]
    }

    function HF(QQ, FQ) {
      return bF(QQ, FQ) << 16 >> 16
    }

    function bF(QQ, FQ) {
      return QQ[FQ.offset++] | QQ[FQ.offset++] << 8
    }

    function YF(QQ, FQ) {
      return QQ[FQ.offset++] | QQ[FQ.offset++] << 8 | QQ[FQ.offset++] << 16 | QQ[FQ.offset++] << 24
    }

    function xF(QQ, FQ) {
      return YF(QQ, FQ) >>> 0
    }

    function AF(QQ, FQ) {
      return LF[0] = YF(QQ, FQ), qF[0]
    }

    function tF(QQ, FQ) {
      return LF[0] = YF(QQ, FQ), LF[1] = YF(QQ, FQ), oF[0]
    }

    function eF(QQ, FQ) {
      const wQ = xF(QQ, FQ);
      return YF(QQ, FQ) * Math.pow(2, 32) + wQ
    }

    function MF(QQ, FQ) {
      const wQ = xF(QQ, FQ);
      return xF(QQ, FQ) * Math.pow(2, 32) + wQ
    }
    const GF = {
        utf8Read: vF,
        int8: mF,
        uint8: uF,
        int16: HF,
        uint16: bF,
        int32: YF,
        uint32: xF,
        float32: AF,
        float64: tF,
        int64: eF,
        uint64: MF,
        bigint64: function(QQ, FQ) {
          return LF[0] = YF(QQ, FQ), LF[1] = YF(QQ, FQ), kF[0]
        },
        biguint64: function(QQ, FQ) {
          return LF[0] = YF(QQ, FQ), LF[1] = YF(QQ, FQ), DF[0]
        },
        boolean: function(QQ, FQ) {
          return uF(QQ, FQ) > 0
        },
        string: function(QQ, FQ) {
          const wQ = QQ[FQ.offset++];
          let LQ;
          return wQ < 192 ? LQ = 31 & wQ : 217 === wQ ? LQ = uF(QQ, FQ) : 218 === wQ ? LQ = bF(QQ, FQ) : 219 === wQ && (LQ = xF(QQ, FQ)), vF(QQ, FQ, LQ)
        },
        number: function(QQ, FQ) {
          const wQ = QQ[FQ.offset++];
          return wQ < 128 ? wQ : 202 === wQ ? AF(QQ, FQ) : 203 === wQ ? tF(QQ, FQ) : 204 === wQ ? uF(QQ, FQ) : 205 === wQ ? bF(QQ, FQ) : 206 === wQ ? xF(QQ, FQ) : 207 === wQ ? MF(QQ, FQ) : 208 === wQ ? mF(QQ, FQ) : 209 === wQ ? HF(QQ, FQ) : 210 === wQ ? YF(QQ, FQ) : 211 === wQ ? eF(QQ, FQ) : wQ > 223 ? -1 * (255 - wQ + 1) : void 0
        },
        stringCheck: function(QQ, FQ) {
          const wQ = QQ[FQ.offset];
          return wQ < 192 && wQ > 160 || 217 === wQ || 218 === wQ || 219 === wQ
        }
      },
      pF = {},
      cF = new Map;

    function CF(QQ, FQ) {
      FQ.constructor && (Object.prototype.hasOwnProperty.call(FQ, "constructor") && null == FQ.constructor[Symbol.metadata] && oQ(FQ.constructor), cF.set(FQ.constructor, QQ), pF[QQ] = FQ), FQ.encode && (FF[QQ] = FQ.encode), FQ.decode && (GF[QQ] = FQ.decode)
    }

    function SF(QQ) {
      for (const FQ in QQ) CF(FQ, QQ[FQ]);
      return QQ => cL(QQ)
    }
    const iF = "ArraySchema does not support streaming \u2014 positional ops (splice / unshift / reverse) shift subsequent indexes, so holding ADDs back for a later tick under `maxPerTick` would desync the decoder. Use `t.stream(X)` (stable monotonic positions) or `t.map(X).stream()` (stable keys) instead.";

    function WF() {
      return {
        pendingByView: new Map,
        sentByView: new Map,
        broadcastPending: new Set,
        sentBroadcast: new Set,
        broadcastDeletes: new Set,
        maxPerTick: 32
      }
    }

    function RF(QQ) {
      return QQ._stream ??= WF()
    }

    function OF(QQ, FQ, wQ) {
      0 === FQ.activeViews.size && RF(QQ).broadcastPending.add(wQ)
    }

    function sF(QQ, FQ, wQ, LQ) {
      const oQ = QQ._stream;
      if (void 0 === oQ) return !0;
      let DQ = !1;
      return oQ.broadcastPending.delete(LQ) ? DQ = !0 : oQ.sentBroadcast.delete(LQ) && oQ.broadcastDeletes.add(LQ), FQ.forEachActiveView((QQ => {
        const FQ = oQ.pendingByView.get(QQ.id);
        if (FQ?.has(LQ)) return FQ.delete(LQ), void(DQ = !0);
        const kQ = oQ.sentByView.get(QQ.id);
        if (kQ?.has(LQ)) {
          kQ.delete(LQ);
          let FQ = QQ.changes.get(wQ);
          void 0 === FQ && (FQ = new Map, QQ.changes.set(wQ, FQ)), FQ.set(LQ, qQ.DELETE)
        }
      })), DQ
    }

    function rF(QQ, FQ) {
      const wQ = QQ._stream?.pendingByView;
      if (void 0 === wQ) return !1;
      for (const [LQ, qQ] of wQ)
        if (qQ.size > 0 && void 0 !== FQ.activeViews.get(LQ)?.deref()) return !0;
      return !1
    }

    function IF(QQ) {
      const FQ = QQ._stream;
      return void 0 !== FQ && (FQ.broadcastPending.size > 0 || FQ.broadcastDeletes.size > 0)
    }

    function UF(QQ, FQ, wQ) {
      const LQ = RF(QQ);
      let qQ = LQ.pendingByView.get(FQ);
      void 0 === qQ && (qQ = new Set, LQ.pendingByView.set(FQ, qQ)), qQ.add(wQ)
    }

    function NF(QQ, FQ) {
      const wQ = QQ._stream;
      void 0 !== wQ && (wQ.pendingByView.delete(FQ), wQ.sentByView.delete(FQ), wQ.priorityByView?.delete(FQ))
    }
    const TF = {
      8: "uint8",
      16: "uint16",
      32: "uint32"
    };

    function KF(QQ) {
      if (null == QQ || "object" !== typeof QQ) throw new Error("t.quantized(): options object with { min, max } is required.");
      const {
        min: FQ,
        max: wQ
      } = QQ;
      if ("number" !== typeof FQ || "number" !== typeof wQ || !(wQ > FQ) || !Number.isFinite(FQ) || !Number.isFinite(wQ)) throw new Error(`t.quantized(): require finite min < max (got min=${FQ}, max=${wQ}).`);
      const LQ = QQ.bits ?? 16;
      if (8 !== LQ && 16 !== LQ && 32 !== LQ) throw new Error(`t.quantized(): bits must be 8, 16 or 32 (got ${LQ}).`);
      const qQ = QQ.mode ?? "clamp";
      if ("clamp" !== qQ && "wrap" !== qQ) throw new Error(`t.quantized(): mode must be "clamp" or "wrap" (got ${JSON.stringify(qQ)}).`);
      const oQ = "wrap" === qQ,
        DQ = Math.pow(2, LQ);
      return {
        min: FQ,
        max: wQ,
        bits: LQ,
        wrap: oQ,
        wire: TF[LQ],
        range: wQ - FQ,
        span: oQ ? DQ : FQ === -wQ ? DQ - 2 : DQ - 1
      }
    }

    function zF(QQ) {
      return null !== QQ && "object" === typeof QQ && void 0 !== QQ.quantized
    }

    function lF(QQ, FQ) {
      if (QQ.wrap) {
        if (!Number.isFinite(FQ)) return 0;
        const wQ = QQ.range;
        let LQ = (FQ - QQ.min) % wQ;
        LQ < 0 && (LQ += wQ);
        const qQ = QQ.span;
        return Math.floor(LQ / wQ * qQ + .5) % qQ
      }
      if (FQ !== FQ) return 0;
      const wQ = FQ < QQ.min ? QQ.min : FQ > QQ.max ? QQ.max : FQ;
      return Math.floor((wQ - QQ.min) / QQ.range * QQ.span + .5)
    }

    function jF(QQ, FQ) {
      return QQ.min + FQ / QQ.span * QQ.range
    }

    function aF(QQ) {
      const FQ = FF[QQ.wire];
      return (wQ, LQ, qQ) => FQ(wQ, lF(QQ, LQ), qQ)
    }
    class XF {
      types = {};
      schemas = new Map;
      hasFilters = !1;
      static inheritedTypes = new WeakMap;
      static cachedContexts = new WeakMap;
      static register(QQ) {
        const FQ = Object.getPrototypeOf(QQ);
        if (FQ !== rL) {
          let wQ = XF.inheritedTypes.get(FQ);
          wQ || (wQ = new Set, XF.inheritedTypes.set(FQ, wQ)), wQ.add(QQ)
        }
      }
      static cache(QQ) {
        let FQ = XF.cachedContexts.get(QQ);
        return FQ || (FQ = new XF(QQ), XF.cachedContexts.set(QQ, FQ)), FQ
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
        let FQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.schemas.size;
        return !this.schemas.has(QQ) && (this.types[FQ] = QQ, null == QQ[Symbol.metadata] && gF.initialize(QQ), this.schemas.set(QQ, FQ), !0)
      }
      getTypeId(QQ) {
        return this.schemas.get(QQ)
      }
      discoverTypes(QQ) {
        if (!this.add(QQ)) return;
        XF.inheritedTypes.get(QQ)?.forEach((QQ => {
          this.discoverTypes(QQ)
        }));
        let FQ = QQ;
        for (;
          (FQ = Object.getPrototypeOf(FQ)) && FQ !== rL && FQ !== Function.prototype;) this.discoverTypes(FQ);
        const wQ = QQ[Symbol.metadata];
        (wQ[sQ] || wQ[KQ]) && (this.hasFilters = !0);
        for (const LQ in wQ) {
          const QQ = wQ[LQ].type;
          if ("string" !== typeof QQ && !zF(QQ))
            if ("function" === typeof QQ) this.discoverTypes(QQ);
            else {
              const FQ = Object.values(QQ)[0];
              if ("string" === typeof FQ) continue;
              this.discoverTypes(FQ)
            }
        }
      }
      debug() {
        return `TypeContext ->\n\tSchema types: ${this.schemas.size}\n\thasFilters: ${this.hasFilters}`
      }
    }

    function fF(QQ) {
      const FQ = hF(QQ);
      return FQ ? {
        complexTypeKlass: pF[FQ],
        childType: QQ[FQ]
      } : {
        complexTypeKlass: !1,
        childType: QQ
      }
    }

    function VF(QQ, FQ) {
      const wQ = JF(QQ),
        LQ = hF(wQ),
        qQ = LQ && hF(wQ[LQ]);
      if (qQ) throw new Error(`${FQ?`${FQ}: `:""}@colyseus/schema: nested collections are not supported ("${LQ}" of "${qQ}"). Collections can only hold primitive types or Schema classes, wrap the inner ${qQ} in a Schema class.`);
      return wQ
    }

    function hF(QQ) {
      return "object" === typeof QQ && null !== QQ ? Object.keys(QQ).find((QQ => void 0 !== pF[QQ])) : void 0
    }

    function JF(QQ) {
      if ("object" !== typeof QQ || null === QQ) return QQ;
      if (Array.isArray(QQ)) return {
        array: JF(QQ[0])
      };
      const FQ = function(QQ) {
        const FQ = Object.keys(QQ),
          wQ = FQ.filter((QQ => /\d+/.test(QQ)));
        if (wQ.length > 0 && wQ.length === FQ.length / 2 && QQ[QQ[wQ[0]]] == wQ[0]) return "number";
        if (FQ.length > 0 && FQ.every((FQ => QQ[FQ] === FQ))) return "string"
      }(QQ);
      if (FQ) return FQ;
      if (zF(QQ)) return "string" === typeof QQ.quantized.wire ? QQ : {
        quantized: KF(QQ.quantized)
      };
      if (void 0 !== QQ.type) return JF(QQ.type);
      const wQ = hF(QQ);
      return wQ && (QQ[wQ] = JF(QQ[wQ])), QQ
    }
    const EF = [OQ, IQ, UQ, NQ, TQ, KQ, WQ];

    function nF(QQ, FQ, wQ) {
      QQ[FQ] || Object.defineProperty(QQ, FQ, {
        value: [],
        enumerable: !1,
        configurable: !0,
        writable: !0
      }), QQ[FQ].push(wQ)
    }
    const gF = {
        addField(QQ, FQ, wQ, LQ, qQ) {
          if (FQ >= 63) throw new Error(`Can't define field '${wQ}'.\nSchema instances may only have up to 63 fields.`);
          QQ[FQ] = Object.assign(QQ[FQ] || {}, {
            type: LQ,
            index: FQ,
            name: wQ
          }), Object.defineProperty(QQ, SQ, {
            value: QQ[SQ] || {},
            enumerable: !1,
            configurable: !0
          }), QQ[SQ][wQ] = qQ || {
            value: void 0,
            writable: !0,
            enumerable: !0,
            configurable: !0
          }, Object.defineProperty(QQ, RQ, {
            value: FQ,
            enumerable: !1,
            configurable: !0
          }), Object.defineProperty(QQ, wQ, {
            value: FQ,
            enumerable: !1,
            configurable: !0
          }), "string" === typeof QQ[FQ].type || zF(QQ[FQ].type) || (void 0 === QQ[OQ] && Object.defineProperty(QQ, OQ, {
            value: [],
            enumerable: !1,
            configurable: !0
          }), QQ[OQ].push(FQ));
          const oQ = QQ[FQ].type;
          if (oQ && "object" === typeof oQ && void 0 !== oQ.stream) {
            if (void 0 !== oQ.array) throw new Error(iF);
            QQ[FQ].stream = !0, QQ[KQ] || Object.defineProperty(QQ, KQ, {
              value: [],
              enumerable: !1,
              configurable: !0,
              writable: !0
            }), QQ[KQ].includes(FQ) || QQ[KQ].push(FQ);
            const qQ = LQ?.priority;
            "function" === typeof qQ && gF.setStreamPriority(QQ, wQ, qQ)
          }
        },
        setTag(QQ, FQ, wQ) {
          const LQ = QQ[FQ];
          if (QQ[LQ].tag = wQ, QQ[sQ] || (Object.defineProperty(QQ, sQ, {
              value: [],
              enumerable: !1,
              configurable: !0
            }), Object.defineProperty(QQ, rQ, {
              value: {},
              enumerable: !1,
              configurable: !0
            })), QQ[sQ].push(LQ), wQ < 0) QQ[rQ][wQ] || (QQ[rQ][wQ] = []), QQ[rQ][wQ].push(LQ);
          else
            for (let qQ = wQ; qQ > 0; qQ &= qQ - 1) {
              const FQ = qQ & -qQ;
              QQ[rQ][FQ] || (QQ[rQ][FQ] = []), QQ[rQ][FQ].push(LQ)
            }
        },
        setUnreliable(QQ, FQ) {
          const wQ = QQ[FQ];
          if ("string" !== typeof QQ[wQ].type) throw new Error(`@unreliable cannot be applied to ref-type field "${FQ}". For ref-type fields, mark each primitive sub-field with @unreliable instead. See README "Limitations and best practices".`);
          QQ[wQ].unreliable = !0, QQ[IQ] || Object.defineProperty(QQ, IQ, {
            value: [],
            enumerable: !1,
            configurable: !0,
            writable: !0
          }), QQ[IQ].push(wQ)
        },
        setPatchOnly(QQ, FQ) {
          const wQ = QQ[FQ];
          if (QQ[wQ].fullStateOnly) throw new Error(`field "${FQ}" cannot be both patchOnly and fullStateOnly \u2014 those are the only two delivery channels, so the field would never reach a client.`);
          QQ[wQ].patchOnly = !0, nF(QQ, UQ, wQ), nF(QQ, NQ, wQ)
        },
        setDeprecated(QQ, FQ) {
          const wQ = QQ[FQ];
          QQ[wQ].deprecated = !0, nF(QQ, NQ, wQ), Object.defineProperty(QQ, wQ, {
            value: QQ[wQ],
            enumerable: !1,
            configurable: !0
          })
        },
        setFullStateOnly(QQ, FQ) {
          const wQ = QQ[FQ];
          if (QQ[wQ].patchOnly) throw new Error(`field "${FQ}" cannot be both patchOnly and fullStateOnly \u2014 those are the only two delivery channels, so the field would never reach a client.`);
          QQ[wQ].fullStateOnly = !0, nF(QQ, TQ, wQ)
        },
        setStream(QQ, FQ) {
          const wQ = QQ[FQ];
          QQ[wQ].stream = !0, QQ[KQ] || Object.defineProperty(QQ, KQ, {
            value: [],
            enumerable: !1,
            configurable: !0,
            writable: !0
          }), QQ[KQ].push(wQ)
        },
        setStreamPriority(QQ, FQ, wQ) {
          const LQ = QQ[FQ];
          QQ[zQ] || Object.defineProperty(QQ, zQ, {
            value: {},
            enumerable: !1,
            configurable: !0,
            writable: !0
          }), QQ[zQ][LQ] = wQ
        },
        getStreamPriority: (QQ, FQ) => QQ?.[zQ]?.[FQ],
        defineField(QQ, FQ, wQ, LQ, qQ) {
          const oQ = VF(qQ, `${QQ.name}.${LQ}`),
            {
              complexTypeKlass: DQ,
              childType: kQ
            } = fF(oQ);
          gF.addField(FQ, wQ, LQ, oQ, SL(LQ, wQ, kQ, DQ)), FQ[SQ][LQ] && Object.defineProperty(QQ.prototype, LQ, FQ[SQ][LQ]), ("string" === typeof oQ || zF(oQ)) && (FQ[WQ] || Object.defineProperty(FQ, WQ, {
            value: [],
            enumerable: !1,
            configurable: !0,
            writable: !0
          }), FQ[WQ][wQ] = "string" === typeof oQ ? FF[oQ] : aF(oQ.quantized))
        },
        setFields(QQ, FQ) {
          const wQ = QQ.prototype.constructor;
          XF.register(wQ);
          const LQ = Object.getPrototypeOf(wQ),
            qQ = LQ && LQ[Symbol.metadata],
            oQ = gF.initialize(wQ);
          wQ[vQ] || (wQ[vQ] = rL[vQ]), wQ[mQ] || (wQ[mQ] = rL[mQ]), wQ[uQ] || (wQ[uQ] = rL[uQ]), wQ.prototype.toJSON || (wQ.prototype.toJSON = rL.prototype.toJSON);
          let DQ = oQ[RQ] ?? (qQ && qQ[RQ]) ?? -1;
          DQ++, oQ[WQ] || Object.defineProperty(oQ, WQ, {
            value: qQ?.[WQ] ? [...qQ[WQ]] : [],
            enumerable: !1,
            configurable: !0,
            writable: !0
          });
          for (const kQ in FQ) {
            if (void 0 !== oQ[kQ]) throw new Error(`@colyseus/schema: Duplicate '${kQ}' definition on '${wQ.name||"(anonymous)"}'.`);
            gF.defineField(wQ, oQ, DQ, kQ, FQ[kQ]), DQ++
          }
          return QQ
        },
        isDeprecated: (QQ, FQ) => !0 === QQ[FQ].deprecated,
        initialize(QQ) {
          const FQ = Object.getPrototypeOf(QQ),
            wQ = FQ[Symbol.metadata];
          let LQ = QQ[Symbol.metadata] ?? Object.create(null);
          if (FQ !== rL && LQ === wQ && (LQ = Object.create(null), wQ)) {
            Object.setPrototypeOf(LQ, wQ), Object.defineProperty(LQ, RQ, {
              value: wQ[RQ],
              enumerable: !1,
              configurable: !0,
              writable: !0
            }), void 0 !== wQ[sQ] && (Object.defineProperty(LQ, sQ, {
              value: [...wQ[sQ]],
              enumerable: !1,
              configurable: !0,
              writable: !0
            }), Object.defineProperty(LQ, rQ, {
              value: {
                ...wQ[rQ]
              },
              enumerable: !1,
              configurable: !0,
              writable: !0
            }));
            for (const QQ of EF) {
              const FQ = wQ[QQ];
              void 0 !== FQ && Object.defineProperty(LQ, QQ, {
                value: [...FQ],
                enumerable: !1,
                configurable: !0,
                writable: !0
              })
            }
            Object.defineProperty(LQ, SQ, {
              value: {
                ...wQ[SQ]
              },
              enumerable: !1,
              configurable: !0,
              writable: !0
            })
          }
          return Object.defineProperty(QQ, Symbol.metadata, {
            value: LQ,
            writable: !1,
            configurable: !0
          }), LQ
        },
        isValidInstance: QQ => QQ.constructor[Symbol.metadata] && Object.prototype.hasOwnProperty.call(QQ.constructor[Symbol.metadata], RQ),
        getFields(QQ) {
          const FQ = QQ[Symbol.metadata],
            wQ = {};
          for (let LQ = 0; LQ <= FQ[RQ]; LQ++) wQ[FQ[LQ].name] = FQ[LQ].type;
          return wQ
        },
        hasViewTagAtIndex: (QQ, FQ) => QQ?.[sQ]?.includes(FQ),
        hasUnreliableAtIndex: (QQ, FQ) => QQ?.[IQ]?.includes(FQ),
        hasPatchOnlyAtIndex: (QQ, FQ) => QQ?.[UQ]?.includes(FQ),
        hasFullStateOnlyAtIndex: (QQ, FQ) => QQ?.[TQ]?.includes(FQ),
        hasStreamAtIndex: (QQ, FQ) => QQ?.[KQ]?.includes(FQ)
      },
      PF = (QQ, FQ, wQ) => QQ(FQ, wQ);
    class ZF {
      dirtyLow = 0;
      dirtyHigh = 0;
      ops;
      constructor(QQ) {
        this.ops = new Uint8Array(Math.max(QQ + 1, 1))
      }
      record(QQ, FQ) {
        const wQ = this.ops[QQ];
        0 === wQ ? this.ops[QQ] = FQ : (wQ === qQ.DELETE || wQ === qQ.ADD && FQ === qQ.DELETE_AND_ADD) && (this.ops[QQ] = qQ.DELETE_AND_ADD), QQ < 32 ? this.dirtyLow |= 1 << QQ : this.dirtyHigh |= 1 << QQ - 32
      }
      recordDelete(QQ, FQ) {
        this.ops[QQ] = FQ, QQ < 32 ? this.dirtyLow |= 1 << QQ : this.dirtyHigh |= 1 << QQ - 32
      }
      recordRaw(QQ, FQ) {
        this.record(QQ, FQ)
      }
      operationAt(QQ) {
        const FQ = this.ops[QQ];
        return 0 === FQ ? void 0 : FQ
      }
      setOperationAt(QQ, FQ) {
        this.ops[QQ] = FQ
      }
      forEach(QQ) {
        this.forEachWithCtx(QQ, PF)
      }
      forEachWithCtx(QQ, FQ) {
        let wQ = this.dirtyLow,
          LQ = this.dirtyHigh;
        const qQ = this.ops;
        for (; 0 !== wQ;) {
          const LQ = wQ & -wQ,
            oQ = 31 - Math.clz32(LQ);
          wQ ^= LQ, FQ(QQ, oQ, qQ[oQ])
        }
        for (; 0 !== LQ;) {
          const wQ = LQ & -LQ,
            oQ = 31 - Math.clz32(wQ) + 32;
          LQ ^= wQ, FQ(QQ, oQ, qQ[oQ])
        }
      }
      size() {
        return BF(this.dirtyLow) + BF(this.dirtyHigh)
      }
      has() {
        return 0 !== (this.dirtyLow | this.dirtyHigh)
      }
      reset() {
        this.dirtyLow = 0, this.dirtyHigh = 0, this.ops.fill(0)
      }
    }
    class yF {
      Tx = new Map;
      pureOps = [];
      record(QQ, FQ) {
        const wQ = this.Tx.get(QQ);
        void 0 === wQ ? this.Tx.set(QQ, FQ) : (wQ === qQ.DELETE || wQ === qQ.ADD && FQ === qQ.DELETE_AND_ADD) && this.Tx.set(QQ, qQ.DELETE_AND_ADD)
      }
      recordDelete(QQ, FQ) {
        this.Tx.set(QQ, FQ)
      }
      recordRaw(QQ, FQ) {
        this.Tx.set(QQ, FQ)
      }
      recordPure(QQ) {
        this.pureOps.push([this.Tx.size, QQ])
      }
      operationAt(QQ) {
        return this.Tx.get(QQ)
      }
      setOperationAt(QQ, FQ) {
        this.Tx.has(QQ) && this.Tx.set(QQ, FQ)
      }
      forEach(QQ) {
        this.forEachWithCtx(QQ, PF)
      }
      forEachWithCtx(QQ, FQ) {
        const wQ = this.pureOps;
        if (wQ.length > 0) {
          let LQ = 0,
            qQ = 0;
          for (const [oQ, DQ] of this.Tx) {
            for (; LQ < wQ.length && wQ[LQ][0] <= qQ;) {
              const qQ = wQ[LQ++][1];
              FQ(QQ, -qQ, qQ)
            }
            FQ(QQ, oQ, DQ), qQ++
          }
          for (; LQ < wQ.length;) {
            const qQ = wQ[LQ++][1];
            FQ(QQ, -qQ, qQ)
          }
        } else
          for (const [LQ, qQ] of this.Tx) FQ(QQ, LQ, qQ)
      }
      size() {
        return this.Tx.size + this.pureOps.length
      }
      has() {
        return this.Tx.size > 0 || this.pureOps.length > 0
      }
      reset() {
        this.Tx.clear(), this.pureOps.length = 0
      }
      shift(QQ) {
        const FQ = new Map;
        for (const [wQ, LQ] of this.Tx) FQ.set(wQ + QQ, LQ);
        this.Tx = FQ
      }
    }

    function BF(QQ) {
      return 16843009 * ((QQ = (858993459 & (QQ -= QQ >>> 1 & 1431655765)) + (QQ >>> 2 & 858993459)) + (QQ >>> 4) & 252645135) >>> 24
    }

    function dF(QQ) {
      if (void 0 === QQ) return 0;
      let FQ = 0;
      for (let wQ = 0, LQ = QQ.length; wQ < LQ; wQ++) {
        const LQ = QQ[wQ];
        LQ < 32 && (FQ |= 1 << LQ)
      }
      return FQ
    }

    function Qw(QQ) {
      const FQ = QQ.constructor;
      if (Object.prototype.hasOwnProperty.call(FQ, iQ)) return FQ[iQ];
      const wQ = FQ[Symbol.metadata],
        LQ = gF.isValidInstance(QQ),
        qQ = (wQ?.[sQ]?.length ?? 0) > 0,
        oQ = function(QQ) {
          const FQ = [],
            wQ = [],
            LQ = [],
            qQ = [],
            oQ = QQ?.[RQ];
          if (void 0 === oQ) return {
            names: FQ,
            types: wQ,
            tags: LQ,
            encoders: qQ
          };
          const DQ = QQ[WQ];
          for (let kQ = 0; kQ <= oQ; kQ++) {
            const oQ = QQ[kQ];
            void 0 !== oQ ? (FQ[kQ] = oQ.name, wQ[kQ] = oQ.type, LQ[kQ] = oQ.tag, qQ[kQ] = DQ?.[kQ]) : (FQ[kQ] = void 0, wQ[kQ] = void 0, LQ[kQ] = void 0, qQ[kQ] = void 0)
          }
          return {
            names: FQ,
            types: wQ,
            tags: LQ,
            encoders: qQ
          }
        }(wQ),
        DQ = LQ && !qQ ? void 0 : FQ[HQ],
        kQ = {
          encoder: FQ[mQ],
          filter: DQ,
          metadata: wQ,
          isSchema: LQ,
          filterBitmask: LQ ? dF(wQ?.[sQ]) : 0,
          hasAnyFullStateOnly: (wQ?.[TQ]?.length ?? 0) > 0,
          hasAnyUnreliable: (wQ?.[IQ]?.length ?? 0) > 0,
          hasAnyStream: (wQ?.[KQ]?.length ?? 0) > 0,
          hasAnyView: qQ,
          fullStateOnlyBitmask: dF(wQ?.[TQ]),
          unreliableBitmask: dF(wQ?.[IQ]),
          streamBitmask: dF(wQ?.[KQ]),
          names: oQ.names,
          types: oQ.types,
          tags: oQ.tags,
          encoders: oQ.encoders
        };
      return Object.defineProperty(FQ, iQ, {
        value: kQ,
        enumerable: !1,
        writable: !0,
        configurable: !0
      }), kQ
    }

    function Fw(QQ, FQ) {
      if (void 0 !== QQ.parentRef && FQ(QQ.parentRef, QQ._parentIndex)) return !0;
      for (let wQ = QQ.extraParents; void 0 !== wQ; wQ = wQ.next)
        if (FQ(wQ.ref, wQ.index)) return !0;
      return !1
    }
    const ww = (QQ, FQ) => {
        QQ.isFieldUnreliable(FQ) ? QQ.ensureUnreliableRecorder().record(FQ, qQ.ADD) : QQ.record(FQ, qQ.ADD)
      },
      Lw = (QQ, FQ) => QQ(FQ);

    function qw(QQ, FQ, wQ) {
      const LQ = QQ.refTarget;
      if (void 0 !== LQ[tQ]) {
        if (QQ.isPatchOnly) return;
        if (Array.isArray(LQ.items)) {
          const QQ = LQ.items;
          for (let LQ = 0, qQ = QQ.length; LQ < qQ; LQ++) void 0 !== QQ[LQ] && wQ(FQ, LQ)
        } else if (void 0 !== LQ.journal)
          for (const [QQ, qQ] of LQ.journal.keyByIndex) LQ.$items.has(qQ) && wQ(FQ, QQ);
        else if (void 0 !== LQ.$items)
          for (const QQ of LQ.$items.keys()) wQ(FQ, QQ)
      } else {
        const qQ = QQ.metadata;
        if (!qQ) return;
        const oQ = qQ[RQ] ?? -1,
          DQ = qQ[NQ],
          kQ = QQ.encDescriptor.names;
        for (let QQ = 0; QQ <= oQ; QQ++) {
          const qQ = kQ[QQ];
          if (void 0 === qQ) continue;
          if (DQ && DQ.includes(QQ)) continue;
          const oQ = LQ[qQ];
          void 0 !== oQ && null !== oQ && wQ(FQ, QQ)
        }
      }
    }

    function ow(QQ, FQ, wQ, LQ) {
      ! function(QQ, FQ, wQ) {
        if (!FQ) return;
        const LQ = FQ[AQ],
          qQ = !LQ._isSchema;
        let oQ;
        qQ ? (FQ = LQ.parent, wQ = LQ.parentIndex, oQ = FQ?.[AQ].metadata) : oQ = LQ.metadata;
        const DQ = (oQ?.[UQ]?.includes(wQ) ? Ww : 0) | (oQ?.[TQ]?.includes(wQ) ? Rw : 0),
          kQ = LQ.flags & rw | DQ,
          vQ = QQ.flags;
        QQ.flags = vQ | kQ;
        kQ & ~vQ & Rw && (QQ.reset(), QQ.unreliableRecorder?.reset());
        const mQ = QQ.root?.types;
        if (!mQ?.hasFilters) return;
        const uQ = oQ?.[sQ]?.includes(wQ) ?? !1,
          HQ = oQ?.[KQ]?.includes(wQ) ?? !1,
          bQ = LQ.isFiltered || uQ || HQ;
        if (QQ.isFiltered = bQ, HQ && !qQ) {
          QQ.isStreamCollection = !0;
          const FQ = RF(QQ.ref);
          if (void 0 === FQ.priority) {
            const QQ = gF.getStreamPriority(oQ, wQ);
            void 0 !== QQ && (FQ.priority = QQ)
          }
          QQ.root?.registerStream(QQ.ref)
        }
        if (bQ) {
          const FQ = kw(QQ);
          QQ.isVisibilitySharedWithParent = LQ.isFiltered && FQ && !HQ && (!uQ || qQ && oQ[wQ].tag !== AL)
        }
      }(QQ, FQ, wQ), QQ.isFullStateOnly || (QQ.has() && QQ.root?.enqueueChangeTree(QQ), QQ.unreliableRecorder?.has() && QQ.root?.enqueueUnreliable(QQ), QQ.has() || QQ.unreliableRecorder?.has() || QQ.root?.enqueueChangeTree(QQ))
    }

    function Dw(QQ) {
      const FQ = QQ.pendingFilterRefresh;
      for (let wQ = 0; wQ < FQ.length; wQ++) {
        const QQ = FQ[wQ];
        0 !== (QQ.flags & sw) && vw(QQ)
      }
      FQ.length = 0
    }

    function kw(QQ) {
      return QQ._isSchema || "string" !== typeof QQ.refTarget[tQ]
    }

    function vw(QQ) {
      QQ.flags &= ~sw;
      const FQ = QQ.root;
      if (void 0 === FQ || void 0 === QQ.parentRef) return;
      const wQ = kw(QQ);
      let LQ = Yw(QQ, QQ.parentRef, QQ._parentIndex, wQ);
      for (let oQ = QQ.extraParents; void 0 !== oQ && LQ !== bw; oQ = oQ.next) LQ |= Yw(QQ, oQ.ref, oQ.index, wQ);
      if (0 === LQ) return;
      QQ.isVisibilitySharedWithParent = 0 !== (LQ & Hw);
      const qQ = 0 === (LQ & uw);
      qQ !== QQ.isFiltered && (QQ.isFiltered = qQ, qQ || QQ.isFullStateOnly || (QQ.forEachLiveWithCtx(QQ, ww), QQ.has() && FQ.enqueueChangeTree(QQ), QQ.unreliableRecorder?.has() && FQ.enqueueUnreliable(QQ)), QQ.forEachChildWithCtx(QQ, xw))
    }
    const mw = 1,
      uw = 2,
      Hw = 4,
      bw = mw | uw | Hw;

    function Yw(QQ, FQ, wQ, LQ) {
      const qQ = FQ[AQ];
      if (qQ.root !== QQ.root || ! function(QQ, FQ, wQ) {
          const LQ = FQ.refTarget;
          if (FQ.isArray) {
            const FQ = LQ.items,
              qQ = FQ[wQ];
            if (void 0 !== qQ && qQ[AQ] === QQ) return !0;
            for (let wQ = 0, LQ = FQ.length; wQ < LQ; wQ++) {
              const LQ = FQ[wQ];
              if (void 0 !== LQ && LQ[AQ] === QQ) return !0
            }
            return !1
          }
          const qQ = FQ.getValue(wQ);
          return void 0 !== qQ && qQ[AQ] === QQ
        }(QQ, qQ, wQ)) return 0;
      qQ.flags & sw && vw(qQ);
      let oQ = mw;
      if (qQ._isSchema) {
        void 0 !== qQ.encDescriptor.tags[wQ] || qQ.isFieldStream(wQ) || (qQ.isFiltered ? LQ && (oQ |= Hw) : oQ |= uw)
      } else if (qQ.isFiltered) {
        if (LQ && !qQ.isStreamCollection) {
          const QQ = qQ.parent?.[AQ];
          (QQ?._isSchema ? QQ.encDescriptor.tags[qQ.parentIndex] : void 0) !== AL && (oQ |= Hw)
        }
      } else oQ |= uw;
      return oQ
    }
    const xw = (QQ, FQ, wQ) => {
      vw(FQ)
    };

    function Aw(QQ, FQ, wQ, LQ) {
      if (QQ.addParent(FQ, LQ), !wQ) return;
      const qQ = wQ.add(QQ);
      wQ !== QQ.root && (QQ.root = wQ, ow(QQ, FQ, LQ));
      const oQ = FQ?.[AQ];
      if (void 0 !== oQ && void 0 !== oQ.subscribedViews && void 0 !== FQ[tQ] && function(QQ, FQ, wQ, LQ) {
          const qQ = QQ.subscribedViews;
          if (void 0 === qQ) return;
          const oQ = QQ.isStreamCollection,
            DQ = oQ ? QQ.ref : void 0,
            kQ = oQ ? void 0 : wQ[AQ];
          for (let vQ = 0, mQ = qQ.length; vQ < mQ; vQ++) {
            let QQ = qQ[vQ];
            for (; 0 !== QQ;) {
              const wQ = QQ & -QQ;
              QQ ^= wQ;
              const mQ = 32 * vQ + (31 - Math.clz32(wQ)),
                uQ = LQ.activeViews.get(mQ),
                HQ = uQ?.deref();
              void 0 !== HQ ? oQ ? UF(DQ, mQ, FQ) : void 0 !== kQ && HQ.markVisible(kQ) : qQ[vQ] &= ~wQ
            }
          }
        }(oQ, LQ, QQ.ref, wQ), qQ) {
        let FQ = Gw[pw];
        void 0 === FQ && (FQ = {
          parentRef: void 0,
          root: void 0
        }, Gw[pw] = FQ), FQ.parentRef = QQ.ref, FQ.root = wQ, pw++, ew(QQ, FQ, Cw), pw--
      }
    }

    function tw(QQ, FQ, wQ) {
      QQ(FQ, wQ)
    }

    function ew(QQ, FQ, wQ) {
      const LQ = QQ.refTarget;
      if (LQ[tQ]) {
        if ("string" !== typeof LQ[tQ]) {
          const QQ = LQ.items;
          if (void 0 !== QQ)
            for (let LQ = 0, qQ = QQ.length; LQ < qQ; LQ++) {
              const qQ = QQ[LQ];
              qQ && wQ(FQ, qQ[AQ], LQ)
            } else {
              const QQ = LQ.$items,
                qQ = LQ._collectionIndexes;
              for (const LQ of QQ.keys()) {
                const oQ = QQ.get(LQ);
                oQ && wQ(FQ, oQ[AQ], qQ?.[LQ] ?? LQ)
              }
            }
        }
      } else {
        const qQ = QQ.metadata,
          oQ = qQ?.[OQ];
        if (!oQ) return;
        const DQ = QQ.encDescriptor.names;
        for (let QQ = 0, kQ = oQ.length; QQ < kQ; QQ++) {
          const qQ = oQ[QQ],
            kQ = LQ[DQ[qQ]];
          kQ && wQ(FQ, kQ[AQ], qQ)
        }
      }
    }

    function Mw(QQ, FQ, wQ) {
      FQ.root !== QQ ? FQ.setRoot(QQ) : QQ.add(FQ)
    }
    const Gw = [];
    let pw = 0;

    function Cw(QQ, FQ, wQ) {
      if (FQ.root === QQ.root) return QQ.root.add(FQ), void QQ.root.moveNextToParent(FQ);
      FQ.setParent(QQ.parentRef, QQ.root, wQ)
    }

    function Sw(QQ, FQ, wQ) {
      const LQ = (3 & wQ) << 3;
      return wQ < 4 ? QQ >>> LQ & 255 : FQ >>> LQ & 255
    }
    const iw = (QQ, FQ, wQ) => QQ(FQ, wQ);
    const Ww = 16,
      Rw = 32,
      Ow = 128,
      sw = 256,
      rw = Ww | Rw;
    class Iw {
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
        return 0 !== (this.flags & Ww)
      }
      set isPatchOnly(QQ) {
        this.flags = QQ ? this.flags | Ww : this.flags & ~Ww
      }
      get isFullStateOnly() {
        return 0 !== (this.flags & Rw)
      }
      set isFullStateOnly(QQ) {
        this.flags = QQ ? this.flags | Rw : this.flags & ~Rw
      }
      get isStreamCollection() {
        return 0 !== (64 & this.flags)
      }
      set isStreamCollection(QQ) {
        this.flags = QQ ? 64 | this.flags : -65 & this.flags
      }
      get needsRestage() {
        return 0 !== (this.flags & Ow)
      }
      set needsRestage(QQ) {
        this.flags = QQ ? this.flags | Ow : -129 & this.flags
      }
      get hasFilteredFields() {
        return this.isFiltered || this.encDescriptor.hasAnyView
      }
      ensureUnreliableRecorder() {
        return void 0 === this.unreliableRecorder && (this.unreliableRecorder = this._isSchema ? new ZF(this.metadata?.[RQ] ?? 0) : new yF), this.unreliableRecorder
      }
      isFieldUnreliable(QQ) {
        const FQ = this.encDescriptor;
        return !!FQ.hasAnyUnreliable && (QQ < 32 ? 0 !== (FQ.unreliableBitmask & 1 << QQ) : gF.hasUnreliableAtIndex(this.metadata, QQ))
      }
      isFieldFullStateOnly(QQ) {
        if (this.isFullStateOnly) return !0;
        const FQ = this.encDescriptor;
        return !!FQ.hasAnyFullStateOnly && (QQ < 32 ? 0 !== (FQ.fullStateOnlyBitmask & 1 << QQ) : gF.hasFullStateOnlyAtIndex(this.metadata, QQ))
      }
      isFieldStream(QQ) {
        const FQ = this.encDescriptor;
        return !!FQ.hasAnyStream && (QQ < 32 ? 0 !== (FQ.streamBitmask & 1 << QQ) : gF.hasStreamAtIndex(this.metadata, QQ))
      }
      constructor(QQ) {
        let FQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : QQ;
        this.ref = QQ, this.refTarget = FQ;
        const wQ = Qw(QQ);
        this.encDescriptor = wQ, this.metadata = wQ.metadata;
        const LQ = wQ.isSchema;
        if (this._isSchema = LQ, this.ops = void 0, this.collDirty = void 0, this.collPureOps = void 0, LQ) {
          const QQ = this.metadata?.[RQ] ?? 0;
          QQ > 7 && (this.ops = new Uint8Array(QQ + 1))
        } else this.collDirty = new Map
      }
      _opAt(QQ) {
        const FQ = this.ops;
        if (void 0 !== FQ) return FQ[QQ];
        const wQ = (3 & QQ) << 3;
        return QQ < 4 ? this.opsLow >>> wQ & 255 : this.opsHigh >>> wQ & 255
      }
      _opPut(QQ, FQ) {
        const wQ = this.ops;
        if (void 0 !== wQ) return void(wQ[QQ] = FQ);
        const LQ = (3 & QQ) << 3,
          qQ = ~(255 << LQ);
        QQ < 4 ? this.opsLow = this.opsLow & qQ | FQ << LQ : this.opsHigh = this.opsHigh & qQ | FQ << LQ
      }
      _markDirty(QQ) {
        QQ < 32 ? this.dirtyLow |= 1 << QQ : this.dirtyHigh |= 1 << QQ - 32
      }
      record(QQ, FQ) {
        if (this._isSchema) {
          const wQ = this._opAt(QQ);
          0 === wQ ? this._opPut(QQ, FQ) : (wQ === qQ.DELETE || wQ === qQ.ADD && FQ === qQ.DELETE_AND_ADD) && this._opPut(QQ, qQ.DELETE_AND_ADD), this._markDirty(QQ)
        } else {
          const wQ = this.collDirty,
            LQ = wQ.get(QQ);
          let oQ;
          oQ = void 0 === LQ ? FQ : LQ === qQ.DELETE || LQ === qQ.ADD && FQ === qQ.DELETE_AND_ADD ? qQ.DELETE_AND_ADD : LQ, wQ.set(QQ, oQ)
        }
      }
      recordDelete(QQ, FQ) {
        this._isSchema ? (this._opPut(QQ, FQ), this._markDirty(QQ)) : this.collDirty.set(QQ, FQ)
      }
      recordRaw(QQ, FQ) {
        this._isSchema ? (this._opPut(QQ, FQ), this._markDirty(QQ)) : this.collDirty.set(QQ, FQ)
      }
      recordPure(QQ) {
        if (this._isSchema) throw new Error("ChangeTree (Schema): pure operations are not supported");
        (this.collPureOps ??= []).push([this.collDirty.size, QQ])
      }
      operationAt(QQ) {
        if (this._isSchema) {
          const FQ = this._opAt(QQ);
          return 0 === FQ ? void 0 : FQ
        }
        return this.collDirty.get(QQ)
      }
      setOperationAt(QQ, FQ) {
        if (this._isSchema) this._opPut(QQ, FQ);
        else {
          const wQ = this.collDirty;
          wQ.has(QQ) && wQ.set(QQ, FQ)
        }
      }
      forEach(QQ) {
        this.forEachWithCtx(QQ, iw)
      }
      forEachWithCtx(QQ, FQ) {
        if (this._isSchema) {
          let wQ = this.dirtyLow,
            LQ = this.dirtyHigh;
          const qQ = this.ops;
          if (void 0 !== qQ) {
            for (; 0 !== wQ;) {
              const LQ = wQ & -wQ,
                oQ = 31 - Math.clz32(LQ);
              wQ ^= LQ, FQ(QQ, oQ, qQ[oQ])
            }
            for (; 0 !== LQ;) {
              const wQ = LQ & -LQ,
                oQ = 31 - Math.clz32(wQ) + 32;
              LQ ^= wQ, FQ(QQ, oQ, qQ[oQ])
            }
          } else {
            const LQ = this.opsLow,
              qQ = this.opsHigh;
            for (; 0 !== wQ;) {
              const oQ = wQ & -wQ,
                DQ = 31 - Math.clz32(oQ);
              wQ ^= oQ, FQ(QQ, DQ, Sw(LQ, qQ, DQ))
            }
          }
          return
        }
        const wQ = this.collDirty,
          LQ = this.collPureOps;
        if (void 0 !== LQ && LQ.length > 0) {
          let qQ = 0,
            oQ = 0;
          for (const [DQ, kQ] of wQ) {
            for (; qQ < LQ.length && LQ[qQ][0] <= oQ;) {
              const wQ = LQ[qQ++][1];
              FQ(QQ, -wQ, wQ)
            }
            FQ(QQ, DQ, kQ), oQ++
          }
          for (; qQ < LQ.length;) {
            const wQ = LQ[qQ++][1];
            FQ(QQ, -wQ, wQ)
          }
        } else
          for (const [qQ, oQ] of wQ) FQ(QQ, qQ, oQ)
      }
      size() {
        return this._isSchema ? BF(this.dirtyLow) + BF(this.dirtyHigh) : this.collDirty.size + (this.collPureOps?.length ?? 0)
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
      insertAt(QQ, FQ) {
        if (this._isSchema) throw new Error("ChangeTree (Schema): insertAt is not supported");
        const wQ = this.collDirty,
          LQ = new Map,
          oQ = !this.paused && !this.isFullStateOnly;
        if (QQ > 0)
          for (const [qQ, DQ] of wQ) qQ < QQ && LQ.set(qQ, DQ);
        if (oQ)
          for (let DQ = 0; DQ < FQ; DQ++) LQ.set(QQ + DQ, qQ.ADD);
        for (const [qQ, DQ] of wQ) qQ >= QQ && LQ.set(qQ + FQ, DQ);
        this.collDirty = LQ, oQ && this.root?.enqueueChangeTree(this)
      }
      removeAt(QQ, FQ) {
        if (this._isSchema) throw new Error("ChangeTree (Schema): removeAt is not supported");
        const wQ = this.collDirty,
          LQ = QQ + FQ;
        let qQ = !1;
        for (const DQ of wQ.keys())
          if (DQ >= LQ) {
            qQ = !0;
            break
          } if (!qQ) {
          for (let FQ = QQ; FQ < LQ; FQ++) wQ.delete(FQ);
          return
        }
        const oQ = new Map;
        for (const [DQ, kQ] of wQ) DQ < QQ ? oQ.set(DQ, kQ) : DQ >= LQ && oQ.set(DQ - FQ, kQ);
        this.collDirty = oQ
      }
      unshift(QQ) {
        this.insertAt(0, QQ)
      }
      setRoot(QQ) {
        ! function(QQ, FQ) {
          QQ.root = FQ;
          const wQ = FQ.add(QQ);
          ow(QQ, QQ.parent, QQ.parentIndex), wQ && ew(QQ, FQ, Mw)
        }(this, QQ)
      }
      setParent(QQ, FQ, wQ) {
        Aw(this, QQ, FQ, wQ)
      }
      forEachChild(QQ) {
        ew(this, QQ, tw)
      }
      forEachChildWithCtx(QQ, FQ) {
        ew(this, QQ, FQ)
      }
      forEachLive(QQ) {
        qw(this, QQ, Lw)
      }
      forEachLiveWithCtx(QQ, FQ) {
        qw(this, QQ, FQ)
      }
      operation(QQ) {
        this.paused || this.isFullStateOnly || (this.recordPure(QQ), this.root?.enqueueChangeTree(this))
      }
      _routeAndRecord(QQ, FQ, wQ) {
        if (!this.paused && !this.isFieldFullStateOnly(QQ)) {
          if (this.isFieldUnreliable(QQ) && !this.isNew) {
            const LQ = this.ensureUnreliableRecorder();
            return wQ ? LQ.recordRaw(QQ, FQ) : LQ.record(QQ, FQ), void this.root?.enqueueUnreliable(this)
          }
          wQ ? this.recordRaw(QQ, FQ) : this.record(QQ, FQ), this.root?.enqueueChangeTree(this)
        }
      }
      change(QQ) {
        let FQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : qQ.ADD;
        this._routeAndRecord(QQ, FQ, !1)
      }
      indexedOperation(QQ, FQ) {
        this._routeAndRecord(QQ, FQ, !0)
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
        const FQ = this.paused;
        this.paused = !0;
        try {
          return QQ()
        } finally {
          this.paused = FQ
        }
      }
      markDirty(QQ) {
        let FQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : qQ.ADD;
        const wQ = this.paused;
        this.paused = !1;
        try {
          this.change(QQ, FQ)
        } finally {
          this.paused = wQ
        }
      }
      getValue(QQ) {
        let FQ = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return this.refTarget[bQ](QQ, FQ)
      }
      delete(QQ, FQ) {
        if (void 0 === QQ) {
          try {
            throw new Error(`@colyseus/schema ${this.ref.constructor.name}: trying to delete non-existing index '${QQ}'`)
          } catch (Dq) {
            console.warn(Dq)
          }
          return
        }
        if (this.paused || this.isFieldFullStateOnly(QQ)) return this.getValue(QQ);
        const wQ = this.isFieldUnreliable(QQ) && !this.isNew;
        wQ ? this.ensureUnreliableRecorder().recordDelete(QQ, FQ ?? qQ.DELETE) : this.recordDelete(QQ, FQ ?? qQ.DELETE);
        const LQ = this.getValue(QQ);
        return LQ && LQ[AQ] && this.root?.remove(LQ[AQ]), wQ ? this.root?.enqueueUnreliable(this) : this.root?.enqueueChangeTree(this), LQ
      }
      endEncode() {
        this.reset(), this.changesNode = void 0, this._isSchema || this.refTarget[MQ]?.(), this.isNew = !1
      }
      endEncodeUnreliable() {
        this.unreliableRecorder?.reset(), this.unreliableChangesNode = void 0, this._isSchema || this.refTarget[MQ]?.()
      }
      discard() {
        this._isSchema || this.refTarget[MQ]?.(), this.reset(), this.unreliableRecorder?.reset()
      }
      discardAll() {
        const QQ = QQ => {
          if (QQ < 0) return;
          const FQ = this.getValue(QQ);
          FQ && FQ[AQ] && FQ[AQ].discardAll()
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
      addParent(QQ, FQ) {
        ! function(QQ, FQ, wQ) {
          if (QQ.parentRef) {
            if (QQ.parentRef[AQ] === FQ[AQ]) return void(QQ._parentIndex = wQ);
            if (Fw(QQ, ((QQ, wQ) => QQ[AQ] === FQ[AQ]))) return void(QQ._parentIndex = wQ)
          }
          void 0 === QQ.parentRef ? (QQ.parentRef = FQ, QQ._parentIndex = wQ) : (QQ.extraParents = {
            ref: QQ.parentRef,
            index: QQ._parentIndex,
            next: QQ.extraParents
          }, QQ.parentRef = FQ, QQ._parentIndex = wQ)
        }(this, QQ, FQ)
      }
      setParentIndex(QQ, FQ) {
        ! function(QQ, FQ, wQ) {
          if (void 0 !== QQ.extraParents)
            if (QQ.parentRef[AQ] !== FQ[AQ]) {
              for (let LQ = QQ.extraParents; void 0 !== LQ; LQ = LQ.next)
                if (LQ.ref[AQ] === FQ[AQ]) return void(LQ.index = wQ)
            } else QQ._parentIndex = wQ;
          else QQ._parentIndex = wQ
        }(this, QQ, FQ)
      }
      removeParent() {
        return function(QQ, FQ) {
          if (QQ.parentRef && QQ.parentRef[AQ] === FQ[AQ]) return QQ.extraParents ? (QQ.parentRef = QQ.extraParents.ref, QQ._parentIndex = QQ.extraParents.index, QQ.extraParents = QQ.extraParents.next) : (QQ.parentRef = void 0, QQ._parentIndex = void 0), !0;
          let wQ = QQ.extraParents,
            LQ = null;
          for (; wQ;) {
            if (wQ.ref[AQ] === FQ[AQ]) return LQ ? LQ.next = wQ.next : QQ.extraParents = wQ.next, !0;
            LQ = wQ, wQ = wQ.next
          }
          return void 0 === QQ.parentRef
        }(this, arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.parent)
      }
      findParent(QQ) {
        return function(QQ, FQ) {
          if (void 0 !== QQ.parentRef && FQ(QQ.parentRef, QQ._parentIndex)) return {
            ref: QQ.parentRef,
            index: QQ._parentIndex
          };
          for (let wQ = QQ.extraParents; void 0 !== wQ; wQ = wQ.next)
            if (FQ(wQ.ref, wQ.index)) return {
              ref: wQ.ref,
              index: wQ.index
            }
        }(this, QQ)
      }
      hasParent(QQ) {
        return Fw(this, QQ)
      }
      indexInParent(QQ) {
        return function(QQ, FQ) {
          if (QQ.parentRef && QQ.parentRef[AQ] === FQ[AQ]) return QQ._parentIndex;
          for (let wQ = QQ.extraParents; void 0 !== wQ; wQ = wQ.next)
            if (wQ.ref[AQ] === FQ[AQ]) return wQ.index
        }(this, QQ)
      }
      getAllParents() {
        return function(QQ) {
          const FQ = [];
          QQ.parentRef && FQ.push({
            ref: QQ.parentRef,
            index: QQ._parentIndex
          });
          let wQ = QQ.extraParents;
          for (; wQ;) FQ.push({
            ref: wQ.ref,
            index: wQ.index
          }), wQ = wQ.next;
          return FQ
        }(this)
      }
    }
    class Uw {
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
        const FQ = this.ref;
        if (FQ[tQ]) {
          if ("string" !== typeof FQ[tQ])
            for (const [wQ, LQ] of FQ.entries()) LQ && QQ(LQ[AQ], FQ._collectionIndexes?.[wQ] ?? wQ);
          return
        }
        const wQ = FQ.constructor,
          LQ = wQ?.[Symbol.metadata];
        if (!LQ) return;
        const qQ = LQ[OQ] ?? [];
        for (let oQ = 0; oQ < qQ.length; oQ++) {
          const wQ = qQ[oQ],
            DQ = FQ[LQ[wQ].name];
          DQ && QQ(DQ[AQ], wQ)
        }
      }
      forEachChildWithCtx(QQ, FQ) {
        this.forEachChild(((wQ, LQ) => FQ(QQ, wQ, LQ)))
      }
      forEachLive() {}
      forEachLiveWithCtx() {}
      forEach() {}
    }

    function Nw(QQ) {
      let FQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : QQ;
      var wQ;
      Object.defineProperty(QQ, AQ, {
        value: (wQ = FQ, new Uw(wQ)),
        enumerable: !1,
        writable: !0
      })
    }

    function Tw(QQ, FQ, wQ, LQ, oQ, DQ, vQ) {
      void 0 !== vQ ? vQ(FQ, LQ, DQ) : "string" === typeof wQ ? FF[wQ]?.(FQ, LQ, DQ) : null != wQ[Symbol.metadata] ? (FF.number(FQ, LQ[kQ], DQ), (oQ & qQ.ADD) === qQ.ADD && QQ.tryEncodeTypeId(FQ, wQ, LQ.constructor, DQ)) : FF.number(FQ, LQ[kQ], DQ)
    }
    const Kw = function(QQ, FQ, wQ, LQ, oQ, DQ, kQ, vQ) {
        if (FQ[DQ.offset++] = 255 & (LQ | oQ), oQ === qQ.DELETE) return;
        const mQ = wQ.encDescriptor,
          uQ = wQ.ref,
          HQ = uQ[cQ][LQ] ?? uQ[mQ.names[LQ]];
        Tw(QQ, FQ, mQ.types[LQ], HQ, oQ, DQ, mQ.encoders[LQ])
      },
      zw = function(QQ, FQ, wQ, LQ, oQ, DQ) {
        if (FQ[DQ.offset++] = 255 & oQ, FF.number(FQ, LQ, DQ), oQ === qQ.DELETE) return;
        const kQ = wQ.ref;
        if ((oQ & qQ.ADD) === qQ.ADD) {
          const QQ = kQ.$indexes.get(LQ);
          FF.string(FQ, QQ, DQ)
        }
        Tw(QQ, FQ, kQ[tQ], kQ[bQ](LQ), oQ, DQ)
      },
      lw = function(QQ, FQ, wQ, LQ, oQ, DQ) {
        if (FQ[DQ.offset++] = 255 & oQ, FF.number(FQ, LQ, DQ), oQ === qQ.DELETE) return;
        const kQ = wQ.ref;
        Tw(QQ, FQ, kQ[tQ], kQ[bQ](LQ), oQ, DQ)
      },
      jw = function(QQ, FQ, wQ, LQ, oQ, DQ) {
        const kQ = wQ.ref;
        (oQ & qQ.ADD) === qQ.ADD && "function" === typeof kQ.set ? zw(QQ, FQ, wQ, LQ, oQ, DQ) : lw(QQ, FQ, wQ, LQ, oQ, DQ)
      },
      aw = function(QQ, FQ, wQ, LQ, oQ, DQ, vQ, mQ) {
        const uQ = wQ.refTarget,
          HQ = uQ[tQ],
          YQ = "string" !== typeof HQ;
        let xQ;
        if (mQ && wQ.isFiltered && YQ) {
          const QQ = uQ.tmpItems[LQ];
          if (!QQ) return;
          if (xQ = QQ[kQ], oQ === qQ.DELETE) oQ = qQ.DELETE_BY_REFID;
          else if ((oQ & qQ.ADD) === qQ.ADD) oQ = qQ.ADD_BY_REFID;
          else if ((oQ & qQ.MOVE) === qQ.MOVE) return
        } else if (oQ === qQ.DELETE && YQ) {
          const QQ = uQ.tmpItems[LQ];
          if (!QQ) return;
          xQ = QQ[kQ], oQ = qQ.DELETE_BY_REFID
        } else xQ = LQ;
        if (FQ[DQ.offset++] = 255 & oQ, FF.number(FQ, xQ, DQ), oQ === qQ.DELETE || oQ === qQ.DELETE_BY_REFID) return;
        Tw(QQ, FQ, HQ, uQ[bQ](LQ, vQ), oQ, DQ)
      };

    function Xw(QQ, FQ, wQ, LQ, oQ, DQ, vQ) {
      const mQ = QQ.resyncVisited;
      let uQ = mQ.get(QQ.currentRefId);
      if (void 0 === uQ && mQ.set(QQ.currentRefId, uQ = new Set), uQ.add(LQ), void 0 !== oQ && wQ === qQ.ADD && oQ !== DQ) {
        const wQ = oQ[kQ];
        void 0 !== wQ && (QQ.root.removeRef(wQ), vQ?.push({
          ref: FQ,
          refId: QQ.currentRefId,
          op: qQ.DELETE,
          dynamicIndex: LQ,
          value: void 0,
          previousValue: oQ
        }))
      }
    }

    function fw(QQ, FQ, wQ, LQ) {
      const qQ = FQ[kQ];
      if (void 0 === qQ || wQ.has(qQ)) return;
      wQ.add(qQ);
      const oQ = FQ.constructor[Symbol.metadata],
        DQ = oQ?.[OQ];
      if (void 0 === DQ) return;
      const vQ = oQ[UQ];
      for (let kQ = 0; kQ < DQ.length; kQ++) {
        const qQ = DQ[kQ];
        if (void 0 !== vQ && vQ.includes(qQ)) continue;
        const mQ = oQ[qQ],
          uQ = FQ[mQ.name];
        uQ && (rL.is(mQ.type) ? fw(QQ, uQ, wQ, LQ) : Vw(QQ, uQ, wQ, LQ))
      }
    }

    function Vw(QQ, FQ, wQ, LQ) {
      const oQ = FQ[eQ] ?? FQ,
        DQ = oQ[kQ];
      if (void 0 === DQ || wQ.has(DQ)) return;
      wQ.add(DQ);
      const vQ = QQ.resyncVisited.get(DQ);
      if (void 0 === vQ) return;
      const mQ = QQ.root;
      oQ[xQ](vQ, ((QQ, wQ) => {
        LQ?.push({
          ref: FQ,
          refId: DQ,
          op: qQ.DELETE,
          dynamicIndex: wQ,
          value: void 0,
          previousValue: QQ
        });
        const oQ = QQ?.[kQ];
        void 0 !== oQ && mQ.removeRef(oQ)
      }), (FQ => {
        rL.isSchema(FQ) && fw(QQ, FQ, wQ, LQ)
      }))
    }
    const hw = 1,
      Jw = 2,
      Ew = 3,
      nw = 4,
      gw = 5;

    function Pw(QQ, FQ, wQ, LQ, oQ, DQ, vQ, mQ, uQ) {
      const HQ = QQ.root;
      let bQ;
      if ((FQ & qQ.DELETE) === qQ.DELETE) {
        const QQ = oQ?.[kQ];
        void 0 !== QQ && HQ.removeRef(QQ), FQ !== qQ.DELETE_AND_ADD && wQ[YQ](LQ), bQ = void 0
      }
      if (FQ === qQ.DELETE);
      else if ("string" === typeof DQ) bQ = GF[DQ](vQ, mQ);
      else if (zF(DQ)) bQ = function(QQ, FQ, wQ) {
        return jF(QQ, (0, GF[QQ.wire])(FQ, wQ))
      }(DQ.quantized, vQ, mQ);
      else if (rL.is(DQ)) {
        const wQ = GF.number(vQ, mQ);
        if (bQ = HQ.refs.get(wQ), (FQ & qQ.ADD) === qQ.ADD) {
          const LQ = QQ.getInstanceType(vQ, mQ, DQ);
          bQ || (bQ = QQ.createInstanceOfType(LQ)), HQ.addRef(wQ, bQ, bQ !== oQ || FQ === qQ.DELETE_AND_ADD && bQ === oQ)
        }
      } else {
        const wQ = (xQ = Object.keys(DQ)[0], pF[xQ]),
          LQ = GF.number(vQ, mQ);
        null !== QQ.resyncVisited && function(QQ, FQ) {
          const wQ = QQ.resyncVisited;
          wQ.has(FQ) || wQ.set(FQ, new Set)
        }(QQ, LQ);
        const YQ = HQ.refs.has(LQ) ? oQ || HQ.refs.get(LQ) : wQ.constructor.initializeForDecoder();
        if (bQ = YQ.clone(!0), bQ[tQ] = Object.values(DQ)[0], oQ) {
          let QQ = oQ[kQ];
          if (void 0 !== QQ && LQ !== QQ) {
            (FQ & qQ.DELETE) !== qQ.DELETE && HQ.removeRef(QQ);
            const wQ = oQ.entries();
            let LQ;
            for (;
              (LQ = wQ.next()) && !LQ.done;) {
              const [FQ, wQ] = LQ.value;
              "object" === typeof wQ && (QQ = wQ[kQ]), uQ?.push({
                ref: oQ,
                refId: QQ,
                op: qQ.DELETE,
                field: FQ,
                value: void 0,
                previousValue: wQ
              })
            }
          }
        }
        HQ.addRef(LQ, bQ, YQ !== oQ || FQ === qQ.DELETE_AND_ADD && YQ === oQ)
      }
      var xQ;
      return bQ
    }
    const Zw = function(QQ, FQ, wQ, LQ, qQ) {
        const oQ = FQ[wQ.offset++],
          DQ = LQ.constructor[Symbol.metadata],
          kQ = oQ >> 6 << 6,
          vQ = oQ % (kQ || 255),
          mQ = DQ[vQ];
        if (void 0 === mQ) return console.warn("@colyseus/schema: field not defined at", {
          index: vQ,
          ref: LQ.constructor.name,
          metadata: DQ
        }), -1;
        const uQ = !0 === mQ.deprecated,
          HQ = uQ ? void 0 : LQ[bQ](vQ),
          YQ = Pw(QQ, kQ, LQ, vQ, HQ, mQ.type, FQ, wQ, qQ);
        uQ || (null !== YQ && void 0 !== YQ && (LQ[mQ.name] = YQ), HQ !== YQ && qQ?.push({
          ref: LQ,
          refId: QQ.currentRefId,
          op: kQ,
          field: mQ.name,
          value: YQ,
          previousValue: HQ
        }))
      },
      yw = function(QQ, FQ, wQ, LQ, oQ) {
        const DQ = LQ[eQ] ?? LQ,
          kQ = FQ[wQ.offset++];
        if (kQ === qQ.CLEAR) return QQ.removeChildRefs(DQ, oQ), void DQ.clear();
        const vQ = GF.number(FQ, wQ),
          mQ = DQ[tQ],
          uQ = DQ.constructor.COLLECTION_KIND;
        let HQ;
        (kQ & qQ.ADD) === qQ.ADD ? uQ === hw ? (HQ = GF.string(FQ, wQ), DQ.setIndex(vQ, HQ)) : HQ = vQ : HQ = DQ.getIndex(vQ);
        const YQ = DQ[bQ](vQ),
          xQ = Pw(QQ, kQ, LQ, vQ, YQ, mQ, FQ, wQ, oQ);
        if (null !== QQ.resyncVisited && Xw(QQ, LQ, kQ, HQ, YQ, xQ, oQ), null !== xQ && void 0 !== xQ) switch (uQ) {
          case hw:
            DQ.$items.set(HQ, xQ);
            break;
          case Jw:
            DQ.$setAt(vQ, xQ, null !== QQ.resyncVisited && kQ === qQ.ADD ? qQ.REPLACE : kQ);
            break;
          case Ew:
          case nw:
          case gw:
            DQ.$items.has(vQ) || (DQ.$items.set(vQ, xQ), "number" === typeof DQ.$refId && vQ >= DQ.$refId && (DQ.$refId = vQ + 1));
            break;
          default:
            console.warn(`@colyseus/schema: missing COLLECTION_KIND on ${DQ.constructor?.name} \u2014 item at index ${vQ} was not stored.`)
        }
        YQ !== xQ && oQ?.push({
          ref: LQ,
          refId: QQ.currentRefId,
          op: kQ,
          dynamicIndex: HQ,
          value: xQ,
          previousValue: YQ
        })
      },
      Bw = function(QQ, FQ, wQ, LQ, oQ) {
        const DQ = LQ[eQ] ?? LQ;
        let kQ, vQ = FQ[wQ.offset++];
        if (vQ === qQ.CLEAR) return QQ.removeChildRefs(DQ, oQ), void DQ.clear();
        if (vQ === qQ.REVERSE) return void DQ.items.reverse();
        if (vQ === qQ.DELETE_BY_REFID) {
          const vQ = GF.number(FQ, wQ),
            mQ = QQ.root.refs.get(vQ);
          if (void 0 === mQ) return;
          if (QQ.root.removeRef(vQ), kQ = DQ.findIndex((QQ => QQ === mQ)), -1 === kQ) return;
          return DQ[YQ](kQ), void oQ?.push({
            ref: LQ,
            refId: QQ.currentRefId,
            op: qQ.DELETE,
            dynamicIndex: kQ,
            value: void 0,
            previousValue: mQ
          })
        }
        if (vQ === qQ.ADD_BY_REFID) {
          const LQ = GF.number(FQ, wQ),
            qQ = QQ.root.refs.get(LQ);
          qQ && (kQ = DQ.findIndex((QQ => QQ === qQ))), -1 !== kQ && void 0 !== kQ || (kQ = DQ.length)
        } else kQ = GF.number(FQ, wQ);
        const mQ = DQ[tQ];
        let uQ = kQ;
        const HQ = DQ.items[kQ],
          bQ = Pw(QQ, vQ, LQ, kQ, HQ, mQ, FQ, wQ, oQ);
        null !== QQ.resyncVisited && Xw(QQ, LQ, vQ, kQ, HQ, bQ, oQ), null !== bQ && void 0 !== bQ && bQ !== HQ && DQ.$setAt(kQ, bQ, null !== QQ.resyncVisited && vQ === qQ.ADD ? qQ.REPLACE : vQ), HQ !== bQ && oQ?.push({
          ref: LQ,
          refId: QQ.currentRefId,
          op: vQ,
          dynamicIndex: uQ,
          value: bQ,
          previousValue: HQ
        })
      };
    class dw extends Error {}

    function QL(QQ, FQ, wQ, LQ) {
      if (!(QQ instanceof FQ)) throw new dw(`a '${FQ.name}' was expected, but '${QQ&&QQ.constructor.name}' was provided in ${wQ.constructor.name}#${LQ}`)
    }
    const FL = (QQ, FQ) => {
        const wQ = QQ.toString(),
          LQ = FQ.toString();
        return wQ < LQ ? -1 : wQ > LQ ? 1 : 0
      },
      wL = {
        get: (QQ, FQ) => "symbol" === typeof FQ || isNaN(FQ) ? Reflect.get(QQ, FQ) : QQ.items[FQ],
        set: (QQ, FQ, wQ) => {
          if ("symbol" !== typeof FQ && !isNaN(FQ)) {
            if (void 0 === wQ || null === wQ) QQ.$deleteAt(FQ);
            else {
              let LQ;
              if (wQ[AQ]) {
                QL(wQ, QQ[tQ], QQ, FQ);
                const oQ = QQ.items[FQ];
                QQ.isMovingItems ? (LQ = QQ.$wireIndex(Number(FQ)), void 0 !== oQ ? wQ[AQ].isNew ? QQ[AQ].indexedOperation(LQ, qQ.MOVE_AND_ADD) : (QQ[AQ].getChange(LQ) & qQ.DELETE) === qQ.DELETE ? QQ[AQ].indexedOperation(LQ, qQ.DELETE_AND_MOVE) : QQ[AQ].indexedOperation(LQ, qQ.MOVE) : wQ[AQ].isNew && QQ[AQ].indexedOperation(LQ, qQ.ADD), wQ[AQ].setParent(QQ, QQ[AQ].root, LQ)) : LQ = QQ.$changeAt(Number(FQ), wQ), void 0 !== oQ && oQ[AQ].root?.remove(oQ[AQ])
              } else LQ = QQ.$changeAt(Number(FQ), wQ);
              QQ.items[FQ] = wQ, void 0 !== LQ && (QQ.tmpItems[LQ] = wQ)
            }
            return !0
          }
          return Reflect.set(QQ, FQ, wQ)
        },
        deleteProperty: (QQ, FQ) => ("number" === typeof FQ ? QQ.$deleteAt(FQ) : delete QQ[FQ], !0),
        has: (QQ, FQ) => "symbol" === typeof FQ || isNaN(Number(FQ)) ? Reflect.has(QQ, FQ) : Reflect.has(QQ.items, FQ)
      };
    class LL {
      [AQ];
      [kQ];
      [eQ];
      [tQ];
      items = [];
      tmpItems = [];
      deletedIndexes = [];
      isMovingItems = !1;
      _needsCompaction = !1;
      static[mQ] = aw;
      static[uQ] = Bw;
      static COLLECTION_KIND = Jw;
      static[HQ](QQ, FQ, wQ) {
        if (!wQ) return !0;
        const LQ = QQ[eQ] ?? QQ;
        return "string" === typeof LQ[tQ] || wQ.isChangeTreeVisible(LQ.tmpItems[FQ]?.[AQ])
      }
      static is(QQ) {
        return Array.isArray(QQ) || void 0 !== QQ.array
      }
      static from(QQ) {
        return new LL(...Array.from(QQ))
      }
      constructor() {
        this[tQ] = void 0, this[eQ] = this;
        const QQ = new Proxy(this, wL);
        return Object.defineProperty(this, AQ, {
          value: new Iw(QQ, this),
          enumerable: !1,
          writable: !0
        }), arguments.length > 0 && this.push(...arguments), QQ
      }
      static initializeForDecoder() {
        const QQ = Object.create(LL.prototype);
        QQ.items = [], QQ.isMovingItems = !1, QQ._needsCompaction = !1, QQ[tQ] = void 0, QQ[eQ] = QQ;
        const FQ = new Proxy(QQ, wL);
        return Nw(QQ, FQ), FQ
      }
      set length(QQ) {
        0 === QQ ? this.clear() : QQ < this.items.length ? this.splice(QQ, this.length - QQ) : console.warn("ArraySchema: can't set .length to a higher value than its length.")
      }
      get length() {
        return this.items.length
      }
      pauseTracking() {
        this[AQ].pause()
      }
      resumeTracking() {
        this[AQ].resume()
      }
      untracked(QQ) {
        return this[AQ].untracked(QQ)
      }
      get isTrackingPaused() {
        return this[AQ].paused
      }
      push() {
        const QQ = this[eQ],
          FQ = QQ.items,
          wQ = QQ.tmpItems,
          LQ = QQ[AQ],
          oQ = QQ[tQ];
        let DQ = wQ.length;
        for (let kQ = 0, vQ = arguments.length; kQ < vQ; kQ++, DQ++) {
          const vQ = kQ < 0 || arguments.length <= kQ ? void 0 : arguments[kQ];
          if (void 0 === vQ || null === vQ) return;
          "object" === typeof vQ && oQ && QL(vQ, oQ, QQ, kQ), LQ.indexedOperation(DQ, qQ.ADD), FQ.push(vQ), wQ.push(vQ), vQ[AQ]?.setParent(this, LQ.root, DQ)
        }
        return DQ
      }
      pop() {
        const QQ = this[eQ],
          FQ = QQ.tmpItems,
          wQ = QQ.deletedIndexes;
        let LQ = -1;
        for (let oQ = FQ.length - 1; oQ >= 0; oQ--)
          if (!0 !== wQ[oQ]) {
            LQ = oQ;
            break
          } if (LQ < 0) return;
        const qQ = QQ.$isUnsentAdd(LQ);
        return QQ[AQ].delete(LQ), qQ ? QQ.$cancelAdd(LQ) : wQ[LQ] = !0, QQ.items.pop()
      }
      at(QQ) {
        return QQ < 0 && (QQ += this.length), this.items[QQ]
      }
      $wireIndex(QQ) {
        const FQ = this.deletedIndexes;
        if (0 === FQ.length) return QQ;
        const wQ = this.tmpItems;
        let LQ = 0;
        for (let qQ = 0; qQ < wQ.length; qQ++)
          if (!0 !== FQ[qQ]) {
            if (LQ === QQ) return qQ;
            LQ++
          } return wQ.length + (QQ - LQ)
      }
      $isUnsentAdd(QQ) {
        const FQ = this[AQ];
        return 0 === (576 & FQ.flags) && !FQ.paused && "string" !== typeof this[tQ] && FQ.operationAt(QQ) === qQ.ADD
      }
      $cancelAdd(QQ) {
        let FQ = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        const wQ = this[AQ],
          LQ = this.tmpItems[QQ];
        this.tmpItems.splice(QQ, 1), this.deletedIndexes.length > 0 && this.deletedIndexes.splice(QQ, 1), wQ.removeAt(QQ, 1);
        const qQ = LQ?.[AQ];
        void 0 !== qQ && void 0 === qQ.root && qQ.removeParent(this), FQ && this.$reindexChildren(QQ)
      }
      $reindexChildren(QQ, FQ) {
        if (!this[AQ].hasFilteredFields) return;
        if ("string" === typeof this[tQ]) return;
        const wQ = this.tmpItems,
          LQ = wQ.length;
        if (void 0 !== FQ)
          for (; QQ < LQ && wQ[QQ] === FQ[QQ];) QQ++;
        for (let qQ = QQ; qQ < LQ; qQ++) wQ[qQ]?.[AQ]?.setParentIndex(this, qQ)
      }
      $changeAt(QQ, FQ) {
        if (void 0 === FQ || null === FQ) return void console.error("ArraySchema items cannot be null nor undefined; Use `splice(index, 1)` instead.");
        if (this.items[QQ] === FQ) return;
        const wQ = void 0 !== this.items[QQ] ? "object" === typeof FQ ? qQ.DELETE_AND_ADD : qQ.REPLACE : qQ.ADD,
          LQ = this.$wireIndex(QQ),
          oQ = this[AQ];
        return oQ.change(LQ, wQ), FQ[AQ]?.setParent(this, oQ.root, LQ), LQ
      }
      $deleteAt(QQ, FQ) {
        this[AQ].delete(this.$wireIndex(QQ), FQ)
      }
      $setAt(QQ, FQ, wQ) {
        wQ === qQ.ADD && void 0 !== this.items[QQ] ? this.items.splice(QQ, 0, FQ) : wQ === qQ.DELETE_AND_MOVE ? (this.items.splice(QQ, 1), this.items[QQ] = FQ) : (QQ > this.items.length && (this._needsCompaction = !0), this.items[QQ] = FQ)
      }
      clear() {
        const QQ = this[eQ];
        if (0 === QQ.items.length) return;
        const FQ = QQ[AQ];
        FQ.forEachChild(((QQ, wQ) => {
          FQ.root?.remove(QQ)
        })), FQ.discard(), FQ.operation(qQ.CLEAR), QQ.items.length = 0, QQ.tmpItems.length = 0
      } [GQ]() {
        const QQ = this[eQ] ?? this,
          FQ = QQ[AQ];
        if (FQ.isStreamCollection) throw new Error("@colyseus/schema: cannot reset a streamed ArraySchema (pooling not supported).");
        const wQ = QQ.items;
        for (let LQ = 0; LQ < wQ.length; LQ++) wQ[LQ]?.[GQ]?.();
        QQ.items.length = 0, QQ.tmpItems.length = 0, QQ.deletedIndexes.length = 0, FQ.recycle(), QQ[kQ] = void 0
      }
      concat() {
        return new LL(...this.items.concat(...arguments))
      }
      join(QQ) {
        return this.items.join(QQ)
      }
      reverse() {
        const QQ = this[eQ],
          FQ = QQ[AQ];
        if (FQ.has() || QQ.deletedIndexes.length > 0) {
          const FQ = QQ.items.slice().reverse();
          return this.clear(), this.push(...FQ), this
        }
        return FQ.operation(qQ.REVERSE), QQ.items.reverse(), QQ.tmpItems.reverse(), QQ.$reindexChildren(0), this
      }
      shift() {
        const QQ = this[eQ],
          FQ = QQ.items;
        if (0 === FQ.length) return;
        const wQ = QQ[AQ],
          LQ = QQ.deletedIndexes;
        let oQ = 0;
        for (; !0 === LQ[oQ];) oQ++;
        const DQ = QQ.$isUnsentAdd(oQ);
        return wQ.delete(oQ, qQ.DELETE), DQ ? QQ.$cancelAdd(oQ) : LQ[oQ] = !0, FQ.shift()
      }
      slice(QQ, FQ) {
        const wQ = new LL;
        return wQ.push(...this.items.slice(QQ, FQ)), wQ
      }
      sort() {
        let QQ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : FL;
        const FQ = this[eQ];
        FQ.isMovingItems = !0;
        const wQ = FQ[AQ];
        return FQ.items.sort(QQ).forEach(((QQ, FQ) => wQ.change(FQ, qQ.REPLACE))), FQ.tmpItems.sort(QQ), FQ.$reindexChildren(0), FQ.isMovingItems = !1, this
      }
      splice(QQ, FQ) {
        const wQ = this[eQ],
          LQ = wQ[AQ],
          oQ = wQ.items,
          DQ = wQ.tmpItems,
          kQ = wQ.deletedIndexes,
          vQ = oQ.length,
          mQ = DQ.length;
        for (var uQ = arguments.length, HQ = new Array(uQ > 2 ? uQ - 2 : 0), bQ = 2; bQ < uQ; bQ++) HQ[bQ - 2] = arguments[bQ];
        const YQ = HQ.length,
          xQ = [];
        for (let qQ = 0; qQ < mQ; qQ++) !0 !== kQ[qQ] && xQ.push(qQ);
        let tQ;
        if (vQ > QQ) {
          void 0 === FQ && (FQ = vQ - QQ);
          for (let oQ = QQ; oQ < QQ + FQ; oQ++) {
            const QQ = xQ[oQ],
              FQ = wQ.$isUnsentAdd(QQ);
            LQ.delete(QQ, qQ.DELETE), FQ ? (tQ ??= []).push(QQ) : kQ[QQ] = !0
          }
        } else FQ = 0;
        if (YQ > 0) {
          const oQ = xQ[QQ] ?? vQ,
            mQ = Math.min(YQ, FQ);
          for (let QQ = 0; QQ < mQ; QQ++) {
            const FQ = oQ + QQ;
            let wQ;
            const vQ = void 0 !== tQ ? tQ.indexOf(FQ) : -1; - 1 !== vQ ? (tQ.splice(vQ, 1), wQ = qQ.ADD) : wQ = kQ[FQ] ? qQ.DELETE_AND_ADD : qQ.ADD, LQ.indexedOperation(FQ, wQ), DQ[FQ] = HQ[QQ], kQ[FQ] = !1, HQ[QQ][AQ]?.setParent(this, LQ.root, FQ)
          }
          const uQ = YQ - mQ;
          if (uQ > 0) {
            const QQ = oQ + mQ;
            LQ.insertAt(QQ, uQ);
            for (let FQ = 0; FQ < uQ; FQ++) HQ[mQ + FQ][AQ]?.setParent(this, LQ.root, QQ + FQ);
            kQ.length > 0 && kQ.splice(QQ, 0, ...new Array(uQ).fill(!1)), DQ.splice(QQ, 0, ...HQ.slice(mQ)), wQ.$reindexChildren(QQ + uQ)
          }
        }
        if (void 0 !== tQ && tQ.length > 0) {
          for (let QQ = tQ.length - 1; QQ >= 0; QQ--) wQ.$cancelAdd(tQ[QQ], !1);
          wQ.$reindexChildren(tQ[0])
        }
        return LQ.root?.enqueueChangeTree(LQ), oQ.splice(QQ, FQ, ...HQ)
      }
      unshift() {
        const QQ = this[eQ],
          FQ = QQ[AQ];
        FQ.unshift(arguments.length);
        for (let LQ = 0; LQ < arguments.length; LQ++)(LQ < 0 || arguments.length <= LQ ? void 0 : arguments[LQ])?.[AQ]?.setParent(this, FQ.root, LQ);
        const wQ = QQ.deletedIndexes;
        return wQ.length > 0 && wQ.unshift(...new Array(arguments.length).fill(!1)), QQ.tmpItems.unshift(...arguments), QQ.$reindexChildren(arguments.length), QQ.items.unshift(...arguments)
      }
      indexOf(QQ, FQ) {
        return this.items.indexOf(QQ, FQ)
      }
      lastIndexOf(QQ) {
        let FQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.length - 1;
        return this.items.lastIndexOf(QQ, FQ)
      }
      every(QQ, FQ) {
        return this.items.every(QQ, FQ)
      }
      some(QQ, FQ) {
        return this.items.some(QQ, FQ)
      }
      forEach(QQ, FQ) {
        return this.items.forEach(QQ, FQ)
      }
      map(QQ, FQ) {
        return this.items.map(QQ, FQ)
      }
      filter(QQ, FQ) {
        return this.items.filter(QQ, FQ)
      }
      reduce(QQ, FQ) {
        return this.items.reduce.apply(this.items, arguments)
      }
      reduceRight(QQ, FQ) {
        return this.items.reduceRight.apply(this.items, arguments)
      }
      find(QQ, FQ) {
        return this.items.find(QQ, FQ)
      }
      findIndex(QQ, FQ) {
        return this.items.findIndex(QQ, FQ)
      }
      fill(QQ, FQ, wQ) {
        throw new Error("ArraySchema#fill() not implemented")
      }
      copyWithin(QQ, FQ, wQ) {
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
        return LL
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
      includes(QQ, FQ) {
        return this.items.includes(QQ, FQ)
      }
      flatMap(QQ, FQ) {
        throw new Error("ArraySchema#flatMap() is not supported.")
      }
      flat(QQ) {
        throw new Error("ArraySchema#flat() is not supported.")
      }
      findLast() {
        return this.items.findLast.apply(this.items, arguments)
      }
      findLastIndex() {
        for (var QQ = arguments.length, FQ = new Array(QQ), wQ = 0; wQ < QQ; wQ++) FQ[wQ] = arguments[wQ];
        return this.items.findLastIndex.apply(this.items, arguments)
      }
      with(QQ, FQ) {
        const wQ = this.items.slice();
        return QQ < 0 && (QQ += this.length), wQ[QQ] = FQ, new LL(...wQ)
      }
      toReversed() {
        return this.items.slice().reverse()
      }
      toSorted(QQ) {
        return this.items.slice().sort(QQ)
      }
      toSpliced(QQ, FQ) {
        for (var wQ = arguments.length, LQ = new Array(wQ > 2 ? wQ - 2 : 0), qQ = 2; qQ < wQ; qQ++) LQ[qQ - 2] = arguments[qQ];
        const oQ = this.items.slice();
        return oQ.splice.apply(oQ, arguments), oQ
      }
      shuffle() {
        return this.move((QQ => {
          let FQ = this.items.length;
          for (; 0 != FQ;) {
            let QQ = Math.floor(Math.random() * FQ);
            FQ--, [this[FQ], this[QQ]] = [this[QQ], this[FQ]]
          }
        }))
      }
      move(QQ) {
        return this.isMovingItems = !0, QQ(this), this.isMovingItems = !1, this
      } [bQ](QQ) {
        let FQ = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        const wQ = this[eQ] ?? this;
        return FQ || wQ.deletedIndexes[QQ] ? wQ.items[QQ] : wQ.tmpItems[QQ] || wQ.items[QQ]
      } [YQ](QQ) {
        const FQ = this[eQ] ?? this;
        FQ.items[QQ] = void 0, FQ._needsCompaction = !0
      } [MQ]() {
        const QQ = this.tmpItems;
        this.tmpItems = this.items.slice(), this.deletedIndexes.length > 0 && (this.$reindexChildren(0, QQ), this.deletedIndexes.length = 0)
      } [pQ]() {
        const QQ = this[eQ] ?? this;
        QQ._needsCompaction && (QQ._needsCompaction = !1, QQ.items = QQ.items.filter((QQ => void 0 !== QQ)))
      } [xQ](QQ, FQ, wQ) {
        const LQ = this[eQ] ?? this,
          qQ = LQ.items;
        let oQ = !1;
        for (let DQ = 0; DQ < qQ.length; DQ++) {
          const kQ = qQ[DQ];
          QQ.has(DQ) ? wQ(kQ) : (oQ = !0, FQ(kQ, DQ), LQ[YQ](DQ))
        }
        oQ && LQ[pQ]()
      }
      toArray() {
        return this.items.slice(0)
      }
      toJSON() {
        return this.toArray().map((QQ => "function" === typeof QQ.toJSON ? QQ.toJSON() : QQ))
      }
      clone(QQ) {
        let FQ;
        return QQ ? (FQ = new LL, FQ.push(...this.items)) : FQ = new LL(...this.map((QQ => QQ[AQ] ? QQ.clone() : QQ))), FQ
      }
    }
    CF("array", {
      constructor: LL
    });
    class qL {
      keyByIndex = new Map;
      indexByKey = Object.create(null);
      nextIndex = 0;
      snapshots;
      indexOf(QQ) {
        const FQ = this.indexByKey[QQ];
        return void 0 === FQ ? void 0 : FQ
      }
      assign(QQ) {
        const FQ = this.nextIndex++;
        return this.indexByKey[QQ] = FQ, this.keyByIndex.set(FQ, QQ), FQ
      }
      snapshot(QQ, FQ) {
        (this.snapshots ??= new Map).set(QQ, FQ)
      }
      forgetSnapshot(QQ) {
        this.snapshots?.delete(QQ)
      }
      snapshotAt(QQ) {
        return this.snapshots?.get(QQ)
      }
      setIndex(QQ, FQ) {
        this.keyByIndex.set(QQ, FQ), this.indexByKey[FQ] = QQ
      }
      keyOf(QQ) {
        return this.keyByIndex.get(QQ)
      }
      cleanupAfterEncode() {
        if (void 0 !== this.snapshots) {
          for (const [QQ] of this.snapshots) {
            const FQ = this.keyByIndex.get(QQ);
            void 0 !== FQ && (delete this.indexByKey[FQ], this.keyByIndex.delete(QQ))
          }
          this.snapshots.clear()
        }
      }
      reset() {
        this.indexByKey = Object.create(null), this.keyByIndex.clear(), this.snapshots?.clear(), this.nextIndex = 0
      }
    }
    class oL {
      [AQ];
      [kQ];
      childType;
      [tQ];
      $items = new Map;
      journal = new qL;
      _stream;
      get maxPerTick() {
        return this._stream?.maxPerTick ?? 32
      }
      set maxPerTick(QQ) {
        (this._stream ??= WF()).maxPerTick = QQ
      }
      get priority() {
        return this._stream?.priority
      }
      set priority(QQ) {
        (this._stream ??= WF()).priority = QQ
      }
      get $indexes() {
        return this.journal.keyByIndex
      }
      get _collectionIndexes() {
        return this.journal.indexByKey
      }
      static[mQ] = zw;
      static[uQ] = yw;
      static COLLECTION_KIND = hw;
      static[HQ](QQ, FQ, wQ) {
        if (!wQ || "string" === typeof QQ[tQ]) return !0;
        const LQ = QQ[bQ](FQ) ?? QQ.journal.snapshotAt(FQ);
        return wQ.isChangeTreeVisible(LQ[AQ])
      }
      static is(QQ) {
        return void 0 !== QQ.map
      }
      constructor(QQ) {
        if (Object.defineProperty(this, AQ, {
            value: new Iw(this),
            enumerable: !1,
            writable: !0
          }), this[tQ] = void 0, QQ)
          if (QQ instanceof Map || QQ instanceof oL) QQ.forEach(((QQ, FQ) => this.set(FQ, QQ)));
          else
            for (const FQ in QQ) this.set(FQ, QQ[FQ])
      }
      static initializeForDecoder() {
        const QQ = Object.create(oL.prototype);
        return QQ.$items = new Map, QQ.journal = new qL, QQ[tQ] = void 0, Nw(QQ), QQ
      } [Symbol.iterator]() {
        return this.$items[Symbol.iterator]()
      }
      get[Symbol.toStringTag]() {
        return this.$items[Symbol.toStringTag]
      }
      static get[Symbol.species]() {
        return oL
      }
      set(QQ, FQ) {
        if (void 0 === FQ || null === FQ) throw new Error(`MapSchema#set('${QQ}', ${FQ}): trying to set ${FQ} value on '${QQ}'.`);
        "object" === typeof FQ && this[tQ] && QL(FQ, this[tQ], this, QQ), QQ = QQ.toString();
        const wQ = this[AQ],
          LQ = void 0 !== FQ[AQ],
          oQ = this.journal;
        let DQ, kQ = oQ.indexOf(QQ);
        if (void 0 !== kQ) {
          DQ = qQ.REPLACE;
          const wQ = this.$items.get(QQ);
          if (wQ === FQ) return;
          LQ && (DQ = qQ.DELETE_AND_ADD, void 0 !== wQ && wQ[AQ].root?.remove(wQ[AQ])), void 0 !== oQ.snapshotAt(kQ) && oQ.forgetSnapshot(kQ)
        } else kQ = oQ.assign(QQ), DQ = qQ.ADD;
        return this.$items.set(QQ, FQ), DQ === qQ.ADD && wQ.isStreamCollection ? void 0 !== wQ.root && OF(this, wQ.root, kQ) : wQ.change(kQ, DQ), LQ && FQ[AQ].setParent(this, wQ.root, kQ), this
      }
      get(QQ) {
        return this.$items.get(QQ)
      }
      getOrInsert(QQ, FQ) {
        return this.$items.has(QQ) ? this.$items.get(QQ) : (this.set(QQ, FQ), FQ)
      }
      getOrInsertComputed(QQ, FQ) {
        if (this.$items.has(QQ)) return this.$items.get(QQ);
        const wQ = FQ(QQ);
        return this.set(QQ, wQ), wQ
      }
      delete(QQ) {
        if (!this.$items.has(QQ)) return !1;
        const FQ = this.journal.indexOf(QQ),
          wQ = this.$items.get(QQ),
          LQ = this[AQ];
        if (LQ.isStreamCollection) {
          const qQ = LQ.root;
          let oQ = !1;
          return void 0 !== qQ && (oQ = sF(this, qQ, this[kQ], FQ)), void 0 !== wQ?.[AQ] && qQ?.remove(wQ[AQ]), this.$items.delete(QQ), oQ || this.journal.snapshot(FQ, wQ), !0
        }
        return this.journal.snapshot(FQ, wQ), LQ.delete(FQ), this.$items.delete(QQ)
      }
      clear() {
        const QQ = this[AQ];
        QQ.discard(), QQ.forEachChild(((FQ, wQ) => {
          QQ.root?.remove(FQ)
        })), this.journal.reset(), this.$items.clear(), QQ.operation(qQ.CLEAR)
      } [GQ]() {
        const QQ = this[AQ];
        if (QQ.isStreamCollection) throw new Error("@colyseus/schema: cannot reset a streamed MapSchema (pooling not supported).");
        this.$items.forEach((QQ => QQ?.[GQ]?.())), this.$items.clear(), this.journal.reset(), QQ.recycle(), this[kQ] = void 0
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
        this[AQ].pause()
      }
      resumeTracking() {
        this[AQ].resume()
      }
      untracked(QQ) {
        return this[AQ].untracked(QQ)
      }
      get isTrackingPaused() {
        return this[AQ].paused
      }
      setIndex(QQ, FQ) {
        this.journal.setIndex(QQ, FQ)
      }
      getIndex(QQ) {
        return this.journal.keyOf(QQ)
      } [bQ](QQ) {
        const FQ = this.journal.keyOf(QQ);
        return void 0 !== FQ ? this.$items.get(FQ) : void 0
      } [YQ](QQ) {
        const FQ = this.journal.keyOf(QQ);
        void 0 !== FQ && (this.$items.delete(FQ), this.journal.keyByIndex.delete(QQ))
      } [xQ](QQ, FQ, wQ) {
        let LQ = null;
        if (this.$items.forEach(((qQ, oQ) => {
            QQ.has(oQ) ? wQ(qQ) : ((LQ ??= new Set).add(oQ), FQ(qQ, oQ))
          })), null !== LQ) {
          LQ.forEach((QQ => {
            this.$items.delete(QQ), delete this.journal.indexByKey[QQ]
          }));
          const QQ = [];
          this.journal.keyByIndex.forEach(((FQ, wQ) => {
            LQ.has(FQ) && QQ.push(wQ)
          }));
          for (let FQ = 0; FQ < QQ.length; FQ++) this.journal.keyByIndex.delete(QQ[FQ])
        }
      } [MQ]() {
        this.journal.cleanupAfterEncode()
      }
      _dropView(QQ) {
        NF(this, QQ)
      }
      _unregister() {}
      toJSON() {
        return Object.fromEntries(Array.from(this, (QQ => {
          let [FQ, wQ] = QQ;
          return [FQ, "function" === typeof wQ.toJSON ? wQ.toJSON() : wQ]
        })))
      }
      clone(QQ) {
        let FQ;
        return QQ ? FQ = Object.assign(new oL, this) : (FQ = new oL, this.forEach(((QQ, wQ) => {
          QQ[AQ] ? FQ.set(wQ, QQ.clone()) : FQ.set(wQ, QQ)
        }))), FQ
      }
    }
    CF("map", {
      constructor: oL
    });
    class DL {
      [AQ];
      [kQ];
      [tQ];
      $items = new Map;
      deletedItems = {};
      $refId = 0;
      _stream;
      get maxPerTick() {
        return this._stream?.maxPerTick ?? 32
      }
      set maxPerTick(QQ) {
        (this._stream ??= WF()).maxPerTick = QQ
      }
      get priority() {
        return this._stream?.priority
      }
      set priority(QQ) {
        (this._stream ??= WF()).priority = QQ
      }
      static[mQ] = lw;
      static[uQ] = yw;
      static COLLECTION_KIND = nw;
      static[HQ](QQ, FQ, wQ) {
        return !wQ || "string" === typeof QQ[tQ] || wQ.isChangeTreeVisible((QQ[bQ](FQ) ?? QQ.deletedItems[FQ])[AQ])
      }
      static is(QQ) {
        return void 0 !== QQ.collection
      }
      constructor(QQ) {
        Object.defineProperty(this, AQ, {
          value: new Iw(this),
          enumerable: !1,
          writable: !0
        }), this[tQ] = void 0, QQ && QQ.forEach((QQ => this.add(QQ)))
      }
      static initializeForDecoder() {
        const QQ = Object.create(DL.prototype);
        return QQ.$items = new Map, QQ.deletedItems = {}, QQ.$refId = 0, QQ[tQ] = void 0, Nw(QQ), QQ
      }
      add(QQ) {
        const FQ = this.$refId++,
          wQ = this[AQ];
        return this.$items.set(FQ, QQ), wQ.isStreamCollection ? void 0 !== wQ.root && OF(this, wQ.root, FQ) : wQ.change(FQ), void 0 !== QQ[AQ] && QQ[AQ].setParent(this, wQ.root, FQ), FQ
      }
      at(QQ) {
        const FQ = Array.from(this.$items.keys())[QQ];
        return this.$items.get(FQ)
      }
      entries() {
        return this.$items.entries()
      }
      delete(QQ) {
        const FQ = this.$items.entries();
        let wQ, LQ;
        for (;
          (LQ = FQ.next()) && !LQ.done;)
          if (QQ === LQ.value[1]) {
            wQ = LQ.value[0];
            break
          } if (void 0 === wQ) return !1;
        const qQ = this[AQ];
        if (qQ.isStreamCollection) {
          const QQ = qQ.root,
            FQ = this.$items.get(wQ);
          return void 0 !== QQ && sF(this, QQ, this[kQ], wQ), void 0 !== FQ?.[AQ] && QQ?.remove(FQ[AQ]), this.deletedItems[wQ] = FQ, this.$items.delete(wQ)
        }
        return this.deletedItems[wQ] = qQ.delete(wQ), this.$items.delete(wQ)
      }
      clear() {
        const QQ = this[AQ];
        QQ.discard(), QQ.forEachChild(((FQ, wQ) => {
          QQ.root?.remove(FQ)
        })), this.$items.clear(), QQ.operation(qQ.CLEAR)
      } [GQ]() {
        const QQ = this[AQ];
        if (QQ.isStreamCollection) throw new Error("@colyseus/schema: cannot reset a streamed CollectionSchema (pooling not supported).");
        this.$items.forEach((QQ => QQ?.[GQ]?.())), this.$items.clear(), this.deletedItems = {}, this.$refId = 0, QQ.recycle(), this[kQ] = void 0
      }
      has(QQ) {
        return Array.from(this.$items.values()).some((FQ => FQ === QQ))
      }
      forEach(QQ) {
        this.$items.forEach(((FQ, wQ, LQ) => QQ(FQ, wQ, this)))
      }
      values() {
        return this.$items.values()
      }
      get size() {
        return this.$items.size
      }
      pauseTracking() {
        this[AQ].pause()
      }
      resumeTracking() {
        this[AQ].resume()
      }
      untracked(QQ) {
        return this[AQ].untracked(QQ)
      }
      get isTrackingPaused() {
        return this[AQ].paused
      } [Symbol.iterator]() {
        return this.$items.values()
      }
      setIndex(QQ, FQ) {}
      getIndex(QQ) {
        return QQ
      } [bQ](QQ) {
        return this.$items.get(QQ)
      } [YQ](QQ) {
        this.$items.delete(QQ)
      } [xQ](QQ, FQ, wQ) {
        let LQ = null;
        if (this.$items.forEach(((qQ, oQ) => {
            QQ.has(oQ) ? wQ(qQ) : ((LQ ??= []).push(oQ), FQ(qQ, oQ))
          })), null !== LQ)
          for (let qQ = 0; qQ < LQ.length; qQ++) this[YQ](LQ[qQ])
      } [MQ]() {
        for (const QQ in this.deletedItems) delete this.deletedItems[QQ]
      }
      _dropView(QQ) {
        NF(this, QQ)
      }
      _unregister() {}
      toArray() {
        return Array.from(this.$items.values())
      }
      toJSON() {
        const QQ = [];
        return this.forEach(((FQ, wQ) => {
          QQ.push("function" === typeof FQ.toJSON ? FQ.toJSON() : FQ)
        })), QQ
      }
      clone(QQ) {
        let FQ;
        return QQ ? FQ = Object.assign(new DL, this) : (FQ = new DL, this.forEach((QQ => {
          QQ[AQ] ? FQ.add(QQ.clone()) : FQ.add(QQ)
        }))), FQ
      }
    }
    CF("collection", {
      constructor: DL
    });
    class kL {
      [AQ];
      [kQ];
      [tQ];
      $items = new Map;
      deletedItems = {};
      $refId = 0;
      _stream;
      get maxPerTick() {
        return this._stream?.maxPerTick ?? 32
      }
      set maxPerTick(QQ) {
        (this._stream ??= WF()).maxPerTick = QQ
      }
      get priority() {
        return this._stream?.priority
      }
      set priority(QQ) {
        (this._stream ??= WF()).priority = QQ
      }
      static[mQ] = lw;
      static[uQ] = yw;
      static COLLECTION_KIND = Ew;
      static[HQ](QQ, FQ, wQ) {
        return !wQ || "string" === typeof QQ[tQ] || wQ.isVisible((QQ[bQ](FQ) ?? QQ.deletedItems[FQ])[AQ])
      }
      static is(QQ) {
        return void 0 !== QQ.set
      }
      constructor(QQ) {
        Object.defineProperty(this, AQ, {
          value: new Iw(this),
          enumerable: !1,
          writable: !0
        }), this[tQ] = void 0, QQ && QQ.forEach((QQ => this.add(QQ)))
      }
      static initializeForDecoder() {
        const QQ = Object.create(kL.prototype);
        return QQ.$items = new Map, QQ.deletedItems = {}, QQ.$refId = 0, QQ[tQ] = void 0, Nw(QQ), QQ
      }
      add(QQ) {
        if (this.has(QQ)) return !1;
        const FQ = this.$refId++,
          wQ = this[AQ];
        return this.$items.set(FQ, QQ), wQ.isStreamCollection ? void 0 !== wQ.root && OF(this, wQ.root, FQ) : wQ.change(FQ, qQ.ADD), void 0 !== QQ[AQ] && QQ[AQ].setParent(this, wQ.root, FQ), FQ
      }
      entries() {
        return this.$items.entries()
      }
      delete(QQ) {
        const FQ = this.$items.entries();
        let wQ, LQ;
        for (;
          (LQ = FQ.next()) && !LQ.done;)
          if (QQ === LQ.value[1]) {
            wQ = LQ.value[0];
            break
          } if (void 0 === wQ) return !1;
        const qQ = this[AQ];
        if (qQ.isStreamCollection) {
          const QQ = qQ.root,
            FQ = this.$items.get(wQ);
          return void 0 !== QQ && sF(this, QQ, this[kQ], wQ), void 0 !== FQ?.[AQ] && QQ?.remove(FQ[AQ]), this.deletedItems[wQ] = FQ, this.$items.delete(wQ)
        }
        return this.deletedItems[wQ] = qQ.delete(wQ), this.$items.delete(wQ)
      }
      clear() {
        const QQ = this[AQ];
        QQ.discard(), this.$items.clear(), QQ.operation(qQ.CLEAR)
      } [GQ]() {
        const QQ = this[AQ];
        if (QQ.isStreamCollection) throw new Error("@colyseus/schema: cannot reset a streamed SetSchema (pooling not supported).");
        this.$items.forEach((QQ => QQ?.[GQ]?.())), this.$items.clear(), this.deletedItems = {}, this.$refId = 0, QQ.recycle(), this[kQ] = void 0
      }
      has(QQ) {
        const FQ = this.$items.values();
        let wQ, LQ = !1;
        for (;
          (wQ = FQ.next()) && !wQ.done;)
          if (QQ === wQ.value) {
            LQ = !0;
            break
          } return LQ
      }
      forEach(QQ) {
        this.$items.forEach(((FQ, wQ, LQ) => QQ(FQ, wQ, this)))
      }
      values() {
        return this.$items.values()
      }
      get size() {
        return this.$items.size
      }
      pauseTracking() {
        this[AQ].pause()
      }
      resumeTracking() {
        this[AQ].resume()
      }
      untracked(QQ) {
        return this[AQ].untracked(QQ)
      }
      get isTrackingPaused() {
        return this[AQ].paused
      } [Symbol.iterator]() {
        return this.$items.values()
      }
      setIndex(QQ, FQ) {}
      getIndex(QQ) {
        return QQ
      } [bQ](QQ) {
        return this.$items.get(QQ)
      } [YQ](QQ) {
        this.$items.delete(QQ)
      } [xQ](QQ, FQ, wQ) {
        let LQ = null;
        if (this.$items.forEach(((qQ, oQ) => {
            QQ.has(oQ) ? wQ(qQ) : ((LQ ??= []).push(oQ), FQ(qQ, oQ))
          })), null !== LQ)
          for (let qQ = 0; qQ < LQ.length; qQ++) this[YQ](LQ[qQ])
      } [MQ]() {
        for (const QQ in this.deletedItems) delete this.deletedItems[QQ]
      }
      _dropView(QQ) {
        NF(this, QQ)
      }
      _unregister() {}
      toArray() {
        return Array.from(this.$items.values())
      }
      toJSON() {
        const QQ = [];
        return this.forEach(((FQ, wQ) => {
          QQ.push("function" === typeof FQ.toJSON ? FQ.toJSON() : FQ)
        })), QQ
      }
      clone(QQ) {
        let FQ;
        return QQ ? FQ = Object.assign(new kL, this) : (FQ = new kL, this.forEach((QQ => {
          QQ[AQ] ? FQ.add(QQ.clone()) : FQ.add(QQ)
        }))), FQ
      }
    }
    CF("set", {
      constructor: kL
    });
    class vL {
      [AQ];
      [kQ];
      [tQ];
      $items = new Map;
      $nextPosition = 0;
      _itemIndex = new Map;
      _stream;
      get maxPerTick() {
        return this._stream?.maxPerTick ?? 32
      }
      set maxPerTick(QQ) {
        (this._stream ??= WF()).maxPerTick = QQ
      }
      get priority() {
        return this._stream?.priority
      }
      set priority(QQ) {
        (this._stream ??= WF()).priority = QQ
      }
      static $isStream = !0;
      static[mQ] = lw;
      static[uQ] = yw;
      static COLLECTION_KIND = gw;
      static[HQ](QQ, FQ, wQ) {
        if (!wQ) return !0;
        const LQ = QQ[bQ](FQ);
        return void 0 !== LQ && wQ.isVisible(LQ[AQ])
      }
      static is(QQ) {
        return QQ && void 0 !== QQ.stream
      }
      constructor() {
        Object.defineProperty(this, AQ, {
          value: new Iw(this),
          enumerable: !1,
          writable: !0
        }), this[tQ] = void 0
      }
      static initializeForDecoder() {
        const QQ = Object.create(vL.prototype);
        return QQ.$items = new Map, QQ.$nextPosition = 0, QQ._itemIndex = new Map, QQ[tQ] = void 0, Nw(QQ), QQ
      }
      add(QQ) {
        if (this._itemIndex.has(QQ)) return -1;
        const FQ = this.$nextPosition++;
        this.$items.set(FQ, QQ), this._itemIndex.set(QQ, FQ);
        const wQ = this[AQ].root;
        return void 0 !== QQ[AQ] && QQ[AQ].setParent(this, wQ, FQ), void 0 !== wQ && OF(this, wQ, FQ), FQ
      }
      remove(QQ) {
        const FQ = this._itemIndex.get(QQ);
        if (void 0 === FQ) return !1;
        this._itemIndex.delete(QQ), this.$items.delete(FQ);
        const wQ = this[AQ].root;
        return void 0 !== wQ && (sF(this, wQ, this[kQ], FQ), void 0 !== QQ[AQ] && wQ.remove(QQ[AQ])), !0
      }
      has(QQ) {
        return this._itemIndex.has(QQ)
      }
      clear() {
        const QQ = this[AQ].root;
        if (void 0 !== QQ) {
          ! function(QQ, FQ, wQ) {
            const LQ = QQ._stream;
            if (void 0 !== LQ) {
              LQ.broadcastPending.clear();
              for (const QQ of LQ.sentBroadcast) LQ.broadcastDeletes.add(QQ);
              LQ.sentBroadcast.clear(), FQ.forEachActiveView((QQ => {
                LQ.pendingByView.get(QQ.id)?.clear();
                const FQ = LQ.sentByView.get(QQ.id);
                if (void 0 !== FQ && FQ.size > 0) {
                  let LQ = QQ.changes.get(wQ);
                  void 0 === LQ && (LQ = new Map, QQ.changes.set(wQ, LQ));
                  for (const QQ of FQ) LQ.set(QQ, qQ.DELETE);
                  FQ.clear()
                }
              }))
            }
          }(this, QQ, this[kQ]);
          for (const FQ of this.$items.values()) void 0 !== FQ[AQ] && QQ.remove(FQ[AQ])
        }
        this.$items.clear(), this._itemIndex.clear()
      }
      forEach(QQ) {
        for (const [FQ, wQ] of this.$items) QQ(wQ, FQ, this)
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
      setIndex(QQ, FQ) {}
      getIndex(QQ) {
        return QQ
      } [bQ](QQ) {
        return this.$items.get(QQ)
      } [YQ](QQ) {
        const FQ = this.$items.get(QQ);
        void 0 !== FQ && (this._itemIndex.delete(FQ), this.$items.delete(QQ))
      } [xQ]() {} [MQ]() {}
      toArray() {
        return Array.from(this.$items.values())
      }
      toJSON() {
        const QQ = [];
        return this.forEach((FQ => {
          QQ.push("function" === typeof FQ?.toJSON ? FQ.toJSON() : FQ)
        })), QQ
      }
      clone(QQ) {
        if (QQ) {
          return Object.assign(new vL, this)
        }
        const FQ = new vL;
        return FQ.maxPerTick = this.maxPerTick, this.forEach((QQ => {
          FQ.add("function" === typeof QQ?.clone ? QQ.clone() : QQ)
        })), FQ
      }
      _dropView(QQ) {
        NF(this, QQ)
      }
      _unregister() {}
    }
    CF("stream", {
      constructor: vL
    });
    class mL {
      [CQ] = !0;
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
        if (QQ && "object" === typeof QQ && void 0 !== QQ.array) throw new Error(iF);
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

    function uL(QQ) {
      return null != QQ && !0 === QQ[CQ]
    }

    function HL(QQ) {
      return () => new mL(QQ)
    }

    function bL(QQ) {
      if (uL(QQ)) {
        const FQ = QQ._type;
        throw new Error(`t.array/map/set/collection(): a t.* builder is not a valid element type \u2014 ${"string"===typeof FQ?`use the type name instead: t.array("${FQ}")`:'collections accept a Schema class or a primitive type name ("string", "number", \u2026)'}.`)
      }
      return QQ
    }

    function YL(QQ) {
      return new mL({
        quantized: KF(QQ)
      })
    }
    const xL = Object.freeze({
        string: HL("string"),
        number: HL("number"),
        boolean: HL("boolean"),
        int8: HL("int8"),
        uint8: HL("uint8"),
        int16: HL("int16"),
        uint16: HL("uint16"),
        int32: HL("int32"),
        uint32: HL("uint32"),
        int64: HL("int64"),
        uint64: HL("uint64"),
        float32: HL("float32"),
        float64: HL("float64"),
        bigint64: HL("bigint64"),
        biguint64: HL("biguint64"),
        ref: QQ => new mL(QQ),
        array: QQ => new mL({
          array: bL(QQ)
        }),
        map: QQ => new mL({
          map: bL(QQ)
        }),
        set: QQ => new mL({
          set: bL(QQ)
        }),
        collection: QQ => new mL({
          collection: bL(QQ)
        }),
        stream: QQ => {
          const FQ = new mL({
            stream: bL(QQ)
          });
          return FQ._stream = !0, FQ
        },
        quantized: YL,
        angle: QQ => YL({
          min: 0,
          max: 2 * Math.PI,
          mode: "wrap",
          bits: QQ?.bits ?? 16
        })
      }),
      AL = -1;

    function tL(QQ) {
      return XF.register(QQ), QQ
    }

    function eL() {
      let QQ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : AL;
      return function(FQ, wQ) {
        const LQ = gF.initialize(FQ.constructor);
        gF.setTag(LQ, wQ, QQ)
      }
    }

    function ML(QQ, FQ) {
      const wQ = gF.initialize(QQ.constructor);
      gF.setUnreliable(wQ, FQ)
    }

    function GL(QQ, FQ) {
      const wQ = gF.initialize(QQ.constructor);
      gF.setPatchOnly(wQ, FQ)
    }

    function pL(QQ, FQ) {
      const wQ = gF.initialize(QQ.constructor);
      gF.setFullStateOnly(wQ, FQ)
    }

    function cL(QQ, FQ) {
      return function(wQ, LQ) {
        const qQ = wQ.constructor;
        if (!QQ) throw new Error(`${qQ.name}: @type() reference provided for "${LQ}" is undefined. Make sure you don't have any circular dependencies.`);
        QQ = VF(QQ, `${qQ.name}.${LQ}`), XF.register(qQ);
        const oQ = Object.getPrototypeOf(qQ)[Symbol.metadata],
          DQ = gF.initialize(qQ);
        let kQ = DQ[LQ];
        if (void 0 !== DQ[kQ]) {
          if (DQ[kQ].deprecated) return;
          if (void 0 !== DQ[kQ].type) {
            const QQ = new Error(`@colyseus/schema: Duplicate '${LQ}' definition on '${qQ.name}'.\nCheck @type() annotation`);
            throw new Error(`${QQ.message} ${QQ.stack.split("\n")[4].trim()}`)
          }
        } else kQ = DQ[RQ] ?? (oQ && oQ[RQ]) ?? -1, kQ++;
        if (FQ && FQ.manual) gF.addField(DQ, kQ, LQ, QQ, {
          enumerable: !0,
          configurable: !0,
          writable: !0
        });
        else {
          const {
            complexTypeKlass: FQ,
            childType: wQ
          } = fF(QQ);
          gF.addField(DQ, kQ, LQ, QQ, SL(LQ, kQ, wQ, FQ))
        }
        DQ[SQ][LQ] && Object.defineProperty(wQ, LQ, DQ[SQ][LQ]), ("string" === typeof QQ || zF(QQ)) && (DQ[WQ] || Object.defineProperty(DQ, WQ, {
          value: [],
          enumerable: !1,
          configurable: !0,
          writable: !0
        }), DQ[WQ][kQ] = "string" === typeof QQ ? FF[QQ] : aF(QQ.quantized))
      }
    }
    const CL = {
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

    function SL(QQ, FQ, wQ, LQ) {
      let oQ;
      return oQ = LQ ? function(QQ, FQ, wQ, LQ) {
        const oQ = LQ.constructor === LL,
          DQ = LQ.constructor === oL;
        return function(QQ) {
          const LQ = this[cQ],
            kQ = LQ[FQ];
          if (QQ !== kQ) {
            if (void 0 !== QQ && null !== QQ) {
              if (!oQ || QQ instanceof LL)
                if (!DQ || QQ instanceof oL) QQ[tQ] = wQ;
                else {
                  const FQ = new oL;
                  if (FQ[tQ] = wQ, QQ instanceof Map) QQ.forEach(((QQ, wQ) => FQ.set(wQ, QQ)));
                  else
                    for (const wQ in QQ) FQ.set(wQ, QQ[wQ]);
                  QQ = FQ
                }
              else {
                const FQ = new LL;
                FQ[tQ] = wQ, FQ.push(...QQ), QQ = FQ
              }
              const LQ = this[AQ],
                mQ = this.constructor;
              void 0 !== kQ && null !== kQ && kQ[AQ] ? (LQ.root?.remove(kQ[AQ]), mQ[vQ](LQ, FQ, qQ.DELETE_AND_ADD)) : mQ[vQ](LQ, FQ, qQ.ADD), QQ[AQ]?.setParent(this, LQ.root, FQ)
            } else void 0 !== kQ && null !== kQ && this[AQ].delete(FQ);
            LQ[FQ] = QQ
          }
        }
      }(0, FQ, wQ, LQ) : "string" === typeof wQ ? function(QQ, FQ, wQ) {
        const LQ = CL[wQ],
          oQ = "string" === wQ,
          DQ = "boolean" === wQ;
        return function(wQ) {
          const kQ = this[cQ],
            mQ = kQ[FQ];
          if (wQ !== mQ) {
            if (void 0 !== wQ && null !== wQ) {
              if (!DQ && void 0 !== LQ && typeof wQ !== LQ && (!oQ || null !== wQ)) {
                const FQ = wQ && wQ.constructor ? ` (${wQ.constructor.name})` : "";
                throw new dw(`a '${LQ}' was expected, but '${JSON.stringify(wQ)}'${FQ} was provided in ${this.constructor.name}#${QQ}`)
              }
              this.constructor[vQ](this[AQ], FQ, qQ.ADD)
            } else void 0 !== mQ && null !== mQ && this[AQ].delete(FQ);
            kQ[FQ] = wQ
          }
        }
      }(QQ, FQ, wQ) : zF(wQ) ? function(QQ, FQ, wQ) {
        return function(LQ) {
          const oQ = this[cQ],
            DQ = oQ[FQ];
          if (void 0 !== LQ && null !== LQ) {
            if ("number" !== typeof LQ) throw new dw(`a 'number' was expected, but '${JSON.stringify(LQ)}' was provided in ${this.constructor.name}#${QQ}`);
            if ((LQ = jF(wQ, lF(wQ, LQ))) === DQ) return;
            this.constructor[vQ](this[AQ], FQ, qQ.ADD)
          } else {
            if (LQ === DQ) return;
            void 0 !== DQ && null !== DQ && this[AQ].delete(FQ)
          }
          oQ[FQ] = LQ
        }
      }(QQ, FQ, wQ.quantized) : function(QQ, FQ, wQ) {
        return function(LQ) {
          const oQ = this[cQ],
            DQ = oQ[FQ];
          if (LQ !== DQ) {
            if (void 0 !== LQ && null !== LQ) {
              QL(LQ, wQ, this, QQ);
              const oQ = this[AQ],
                kQ = this.constructor;
              void 0 !== DQ && null !== DQ && DQ[AQ] ? (oQ.root?.remove(DQ[AQ]), kQ[vQ](oQ, FQ, qQ.DELETE_AND_ADD)) : kQ[vQ](oQ, FQ, qQ.ADD), LQ[AQ]?.setParent(this, oQ.root, FQ)
            } else void 0 !== DQ && null !== DQ && this[AQ].delete(FQ);
            oQ[FQ] = LQ
          }
        }
      }(QQ, FQ, wQ), {
        get: function() {
          return this[cQ][FQ]
        },
        set: oQ,
        enumerable: !0,
        configurable: !0
      }
    }

    function iL() {
      let QQ = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
      return function(FQ, wQ) {
        const LQ = gF.initialize(FQ.constructor);
        gF.setDeprecated(LQ, wQ), QQ && (LQ[SQ] ??= {}, LQ[SQ][wQ] = {
          get: function() {
            throw new Error(`${wQ} is deprecated.`)
          },
          set: function(QQ) {},
          enumerable: !1,
          configurable: !0
        }, Object.defineProperty(FQ, wQ, LQ[SQ][wQ]))
      }
    }
    let WL = !1;

    function RL(QQ, FQ, wQ) {
      WL || (WL = !0, console.warn("@colyseus/schema: defineTypes() is deprecated and will be removed in a future release. Use schema() with t.* field builders instead \u2192 https://docs.colyseus.io/state/schema"));
      for (let LQ in FQ) cL(FQ[LQ], wQ)(QQ.prototype, LQ);
      return QQ
    }

    function OL(QQ, FQ) {
      let wQ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : rL;
      if (null == QQ || "object" !== typeof QQ) throw new Error(`schema(): first argument must be a fields object (got ${typeof QQ}).`);
      const LQ = {},
        qQ = {},
        oQ = {},
        DQ = {},
        kQ = (QQ, FQ) => {
          if (FQ.hasDefault)((QQ, FQ) => {
            "function" === typeof FQ ? DQ[QQ] = FQ : FQ && "function" === typeof FQ.clone ? DQ[QQ] = () => FQ.clone() : oQ[QQ] = FQ
          })(QQ, FQ.default);
          else if (!FQ.optional) {
            const wQ = function(QQ) {
              if (QQ && "object" === typeof QQ) {
                if (void 0 !== QQ.array) return () => new LL;
                if (void 0 !== QQ.map) return () => new oL;
                if (void 0 !== QQ.set) return () => new kL;
                if (void 0 !== QQ.collection) return () => new DL;
                if (void 0 !== QQ.stream) return () => new vL
              } else if ("function" === typeof QQ && rL.is(QQ) && (!QQ.prototype.initialize || 0 === QQ.prototype.initialize.length)) return () => new QQ
            }(FQ.type);
            wQ && (DQ[QQ] = wQ)
          }
        },
        vQ = {},
        mQ = [],
        uQ = [],
        HQ = {},
        bQ = [],
        YQ = [],
        xQ = {},
        AQ = [];
      for (const cQ in QQ) {
        const wQ = QQ[cQ],
          oQ = `schema(${FQ?`'${FQ}'`:""}): field '${cQ}'`;
        if (uL(wQ)) {
          const QQ = wQ.toDefinition();
          if (QQ.noSync) {
            if (void 0 !== QQ.view || QQ.unreliable || QQ.patchOnly || QQ.fullStateOnly || QQ.stream) throw new Error(`${oQ} uses .noSync() together with a sync-only modifier (.view/.unreliable/.patchOnly/.fullStateOnly/.stream). A local-only field cannot be synchronized.`);
            kQ(cQ, QQ);
            continue
          }
          if (QQ.patchOnly && QQ.fullStateOnly) throw new Error(`${oQ} uses .patchOnly() together with .fullStateOnly(). Those are the only two delivery channels, so the field would never reach a client \u2014 use .noSync() if that is intended.`);
          const FQ = VF(QQ.type, oQ);
          if ("function" === typeof FQ && !rL.is(FQ)) throw new Error(`${oQ} is a synced ref to non-Schema class '${FQ.name||"(anonymous)"}' \u2014 use .noSync(), or Metadata.setFields().`);
          LQ[cQ] = FQ, void 0 !== QQ.view && (vQ[cQ] = QQ.view), QQ.unreliable && mQ.push(cQ), QQ.patchOnly && uQ.push(cQ), QQ.deprecated && (HQ[cQ] = QQ.deprecatedThrows), QQ.fullStateOnly && bQ.push(cQ), QQ.stream && YQ.push(cQ), void 0 !== QQ.streamPriority && (xQ[cQ] = QQ.streamPriority), QQ.optional && AQ.push(cQ), kQ(cQ, QQ)
        } else {
          if ("function" !== typeof wQ) throw new Error(`${oQ} must be a t.* builder, Schema subclass, or method (got ${typeof wQ}).`);
          rL.is(wQ) ? (LQ[cQ] = wQ, wQ.prototype.initialize && 0 !== wQ.prototype.initialize.length || (DQ[cQ] = () => new wQ)) : qQ[cQ] = wQ
        }
      }
      const tQ = QQ => {
          for (const FQ in oQ) QQ[FQ] = oQ[FQ];
          for (const FQ in DQ) QQ[FQ] = DQ[FQ]()
        },
        eQ = () => {
          const QQ = {};
          return tQ(QQ), QQ
        },
        MQ = "function" === typeof qQ.initialize,
        GQ = qQ.initialize ?? wQ._initialize,
        pQ = class extends wQ {
          constructor() {
            for (var QQ = arguments.length, FQ = new Array(QQ), wQ = 0; wQ < QQ; wQ++) FQ[wQ] = arguments[wQ];
            const qQ = FQ[0];
            void 0 === qQ ? (super(), tQ(this)) : super(Object.assign(eQ(), MQ ? (QQ => {
              const FQ = Object.keys(LQ),
                wQ = {};
              for (const LQ in QQ) FQ.includes(LQ) || (wQ[LQ] = QQ[LQ]);
              return wQ
            })(qQ) : qQ)), GQ && new.target === pQ && GQ.apply(this, FQ)
          }
        };
      FQ && Object.defineProperty(pQ, "name", {
        value: FQ
      }), gF.setFields(pQ, LQ), pQ._getDefaultValues = eQ, pQ._initialize = GQ, Object.assign(pQ.prototype, qQ);
      for (const cQ in vQ) eL(vQ[cQ])(pQ.prototype, cQ);
      for (const cQ of mQ) ML(pQ.prototype, cQ);
      for (const cQ of uQ) GL(pQ.prototype, cQ);
      for (const cQ in HQ) iL(HQ[cQ])(pQ.prototype, cQ);
      if (bQ.length > 0 || YQ.length > 0) {
        const QQ = pQ[Symbol.metadata];
        for (const FQ of bQ) gF.setFullStateOnly(QQ, FQ);
        for (const FQ of YQ) gF.setStream(QQ, FQ);
        for (const FQ in xQ) gF.setStreamPriority(QQ, FQ, xQ[FQ])
      }
      if (AQ.length > 0) {
        const QQ = pQ[Symbol.metadata];
        for (const FQ of AQ) QQ[QQ[FQ]].optional = !0
      }
      return pQ.extend = (QQ, FQ) => OL(QQ, FQ, pQ), pQ
    }

    function sL(QQ) {
      const FQ = QQ[AQ].root,
        wQ = {
          ops: {},
          refs: []
        };
      let LQ = FQ.changes.next;
      for (; LQ;) {
        const QQ = LQ.changeTree;
        void 0 !== QQ ? (wQ.refs.push(`refId#${QQ.ref[kQ]}`), QQ.forEach(((QQ, FQ) => {
          if (QQ < 0 || !FQ) return;
          const LQ = qQ[FQ];
          wQ.ops[LQ] || (wQ.ops[LQ] = 0), wQ.ops[LQ]++
        })), LQ = LQ.next) : LQ = LQ.next
      }
      return wQ
    }
    class rL {
      static[mQ] = Kw;
      static[uQ] = Zw;
      [kQ];
      [cQ];
      static initialize(QQ) {
        Object.defineProperty(QQ, AQ, {
          value: new Iw(QQ),
          enumerable: !1,
          writable: !0
        }), QQ[cQ] = []
      }
      static initializeForDecoder() {
        const QQ = Object.create(this.prototype);
        return Nw(QQ), QQ[cQ] = [], QQ
      }
      static reset(QQ) {
        const FQ = QQ?.[AQ];
        if (void 0 === FQ || "function" !== typeof FQ.recycle) throw new Error("@colyseus/schema: Schema.reset() requires a tracked (encoder-side) instance.");
        if (void 0 !== FQ.extraParents) throw new Error(`@colyseus/schema: cannot reset a shared instance (${QQ.constructor.name}) with multiple parents.`);
        QQ[GQ]()
      } [GQ]() {
        const QQ = this.constructor[Symbol.metadata],
          FQ = QQ?.[OQ] ?? [],
          wQ = this[cQ];
        for (let LQ = 0; LQ < FQ.length; LQ++) {
          const QQ = wQ[FQ[LQ]];
          QQ?.[GQ]?.()
        }
        this[AQ].recycle(), this[kQ] = void 0
      }
      static is(QQ) {
        const FQ = QQ[Symbol.metadata];
        return "object" === typeof FQ && null !== FQ
      }
      static isSchema(QQ) {
        return "function" === typeof QQ?.assign
      }
      static[vQ](QQ, FQ) {
        let wQ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : qQ.ADD;
        QQ.change(FQ, wQ)
      }
      static[HQ](QQ, FQ, wQ) {
        const LQ = QQ.constructor[Symbol.metadata],
          qQ = LQ[FQ]?.tag;
        return void 0 === wQ ? void 0 === qQ : void 0 === qQ || (qQ === AL ? wQ.isChangeTreeVisible(QQ[AQ]) : wQ.hasTagOnTree(QQ[AQ], qQ))
      }
      constructor(QQ) {
        rL.initialize(this), QQ && rL.assignProps(this, QQ)
      }
      assign(QQ) {
        return rL.assignProps(this, QQ), this
      }
      static assignProps(QQ, FQ) {
        const wQ = QQ.constructor[Symbol.metadata];
        if (wQ && void 0 !== wQ[RQ])
          for (let qQ = 0; qQ <= wQ[RQ]; qQ++) {
            const LQ = wQ[qQ];
            if (!LQ) continue;
            const oQ = FQ[LQ.name];
            void 0 !== oQ && (QQ[LQ.name] = oQ)
          }
        const LQ = Object.keys(FQ);
        for (let qQ = 0; qQ < LQ.length; qQ++) {
          const oQ = LQ[qQ];
          wQ && void 0 !== wQ[oQ] || (QQ[oQ] = FQ[oQ])
        }
      }
      restore(QQ) {
        const FQ = this.constructor[Symbol.metadata];
        for (const wQ in FQ) {
          const LQ = FQ[wQ],
            qQ = LQ.name,
            oQ = LQ.type,
            DQ = QQ[qQ];
          if (void 0 !== DQ && null !== DQ)
            if ("string" === typeof oQ) this[qQ] = DQ;
            else if (rL.is(oQ)) {
            const QQ = new oQ;
            QQ.restore(DQ), this[qQ] = QQ
          } else if ("object" === typeof oQ) {
            const QQ = Object.keys(oQ)[0],
              FQ = oQ[QQ];
            if ("map" === QQ) {
              const QQ = this[qQ];
              for (const wQ in DQ)
                if (rL.is(FQ)) {
                  const LQ = new FQ;
                  LQ.restore(DQ[wQ]), QQ.set(wQ, LQ)
                } else QQ.set(wQ, DQ[wQ])
            } else if ("array" === QQ) {
              const QQ = this[qQ];
              for (let wQ = 0; wQ < DQ.length; wQ++)
                if (rL.is(FQ)) {
                  const LQ = new FQ;
                  LQ.restore(DQ[wQ]), QQ.push(LQ)
                } else QQ.push(DQ[wQ])
            }
          }
        }
        return this
      }
      setDirty(QQ, FQ) {
        const wQ = this.constructor[Symbol.metadata];
        this[AQ].change(wQ[wQ[QQ]].index, FQ)
      }
      pauseTracking() {
        this[AQ].pause()
      }
      resumeTracking() {
        this[AQ].resume()
      }
      untracked(QQ) {
        return this[AQ].untracked(QQ)
      }
      get isTrackingPaused() {
        return this[AQ].paused
      }
      clone() {
        const QQ = Object.create(this.constructor.prototype);
        rL.initialize(QQ);
        const FQ = this.constructor[Symbol.metadata];
        for (const wQ in FQ) {
          const LQ = FQ[wQ].name;
          "object" === typeof this[LQ] && "function" === typeof this[LQ]?.clone ? QQ[LQ] = this[LQ].clone() : QQ[LQ] = this[LQ]
        }
        return QQ
      }
      toJSON() {
        const QQ = {},
          FQ = this.constructor[Symbol.metadata];
        for (const wQ in FQ) {
          const LQ = FQ[wQ],
            qQ = LQ.name;
          LQ.deprecated || null === this[qQ] || "undefined" === typeof this[qQ] || (QQ[qQ] = "function" === typeof this[qQ].toJSON ? this[qQ].toJSON() : this[qQ])
        }
        return QQ
      }
      discardAllChanges() {
        this[AQ].discardAll()
      } [bQ](QQ) {
        return this[this.constructor[Symbol.metadata][QQ].name]
      } [YQ](QQ) {
        this[this.constructor[Symbol.metadata][QQ].name] = void 0
      }
      static debugRefIds(QQ) {
        let FQ = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          wQ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          LQ = arguments.length > 3 ? arguments[3] : void 0,
          qQ = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "";
        const oQ = FQ ? ` - ${JSON.stringify(QQ.toJSON())}` : "",
          DQ = QQ[AQ],
          vQ = QQ[kQ],
          mQ = LQ ? LQ.root.refCount[vQ] : DQ.refCount,
          uQ = mQ > 1 ? ` [\xd7${mQ}]` : "";
        let HQ = `${function(QQ){return new Array(QQ).fill(0).map(((FQ,wQ)=>wQ===QQ-1?"\u2514\u2500 ":"   ")).join("")}(wQ)}${qQ}${QQ.constructor.name} (refId: ${vQ})${uQ}${oQ}\n`;
        return DQ.forEachChild(((qQ, oQ) => {
          let DQ = oQ;
          "number" === typeof oQ && QQ.$indexes && (DQ = QQ.$indexes.get(oQ) ?? oQ);
          const kQ = void 0 !== QQ.forEach && void 0 !== DQ ? `["${DQ}"]: ` : "";
          HQ += this.debugRefIds(qQ.ref, FQ, wQ + 1, LQ, kQ)
        })), HQ
      }
      static debugRefIdEncodingOrder(QQ) {
        let FQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "allChanges";
        const wQ = [],
          LQ = QQ[AQ];
        if ("changes" === FQ) {
          let QQ = LQ.root.changes?.next;
          for (; QQ;) QQ.changeTree && wQ.push(QQ.changeTree.ref[kQ]), QQ = QQ.next;
          return wQ
        }
        const qQ = "allFilteredChanges" === FQ,
          oQ = new Set,
          DQ = QQ => {
            oQ.has(QQ) || (oQ.add(QQ), QQ.isFiltered === qQ && wQ.push(QQ.ref[kQ]), QQ.forEachChild(((QQ, FQ) => DQ(QQ))))
          };
        return DQ(LQ), wQ
      }
      static debugRefIdsFromDecoder(QQ) {
        return this.debugRefIds(QQ.state, !1, 0, QQ)
      }
      static debugChanges(QQ) {
        let FQ = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        const wQ = QQ[AQ],
          LQ = FQ ? "allChanges" : "changes";
        let oQ = `${QQ.constructor.name} (${QQ[kQ]}) -> .${LQ}:\n`;
        return FQ ? wQ.forEachLive((QQ => {
          oQ += `- [${QQ}]: ADD (${JSON.stringify(wQ.getValue(Number(QQ),!0))})\n`
        })) : wQ.forEach(((QQ, FQ) => {
          QQ < 0 || !FQ || (oQ += `- [${QQ}]: ${qQ[FQ]} (${JSON.stringify(wQ.getValue(Number(QQ),!1))})\n`)
        })), oQ
      }
    }
    oQ(rL);
    const IL = {
      value: 0,
      enumerable: !1,
      writable: !0
    };
    class UL {
      types;
      nextUniqueId = 0;
      changeTrees = {};
      get refCount() {
        const QQ = {};
        for (const FQ in this.changeTrees) QQ[FQ] = this.changeTrees[FQ].refCount;
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
        this.types.hasFilters && (QQ.flags & sw || (QQ.flags |= sw, this.pendingFilterRefresh.push(QQ)))
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
        const FQ = QQ.id;
        for (const wQ of this.streamTrees) wQ._dropView(FQ)
      }
      forEachActiveView(QQ) {
        for (const [FQ, wQ] of this.activeViews) {
          const LQ = wQ.deref();
          if (void 0 !== LQ) QQ(LQ);
          else {
            this.activeViews.delete(FQ);
            for (const QQ of this.streamTrees) QQ._dropView(FQ)
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
        let FQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        this.types = QQ, this.nextUniqueId = FQ
      }
      add(QQ) {
        const FQ = QQ.ref;
        void 0 === FQ[kQ] && (IL.value = this.nextUniqueId++, Object.defineProperty(FQ, kQ, IL));
        const wQ = FQ[kQ],
          LQ = void 0 === this.changeTrees[wQ];
        LQ && (this.changeTrees[wQ] = QQ), QQ.needsRestage && (QQ.needsRestage = !1, QQ.forEachLiveWithCtx(QQ, ww));
        const qQ = LQ ? 0 : QQ.refCount;
        return QQ.refCount = qQ + 1, qQ > 0 && this.enqueueFilterRefresh(QQ), LQ
      }
      remove(QQ) {
        const FQ = QQ.refCount - 1;
        if (FQ <= 0) {
          if (QQ.root = void 0, delete this.changeTrees[QQ.ref[kQ]], QQ.isStreamCollection) {
            const FQ = QQ.ref;
            FQ._unregister?.(), this.unregisterStream(FQ)
          }
          this.removeFromQueue(QQ), this.removeFromUnreliableQueue(QQ), QQ.refCount = 0, QQ.needsRestage = !0, QQ.forEachChild(((FQ, wQ) => {
            FQ.removeParent(QQ.ref) && (void 0 === FQ.parentRef || FQ.refCount > 0 ? this.remove(FQ) : this.moveNextToParent(FQ))
          }))
        } else QQ.refCount = FQ, this.enqueueFilterRefresh(QQ), this.recursivelyMoveNextToParent(QQ);
        return FQ
      }
      recursivelyMoveNextToParent(QQ) {
        this.moveNextToParent(QQ), QQ.forEachChild(((QQ, FQ) => this.recursivelyMoveNextToParent(QQ)))
      }
      moveNextToParent(QQ) {
        QQ.changesNode && this._moveNextToParentInList(this.changes, QQ, QQ.changesNode, "changesNode"), QQ.unreliableChangesNode && this._moveNextToParentInList(this.unreliableChanges, QQ, QQ.unreliableChangesNode, "unreliableChangesNode")
      }
      _moveNextToParentInList(QQ, FQ, wQ, LQ) {
        const qQ = FQ.parent;
        if (!qQ || !qQ[AQ]) return;
        const oQ = qQ[AQ][LQ];
        oQ && oQ !== wQ && (wQ.position > oQ.position || (wQ.prev ? wQ.prev.next = wQ.next : QQ.next = wQ.next, wQ.next ? wQ.next.prev = wQ.prev : QQ.tail = wQ.prev, wQ.prev = QQ.tail, wQ.next = void 0, QQ.tail.next = wQ, QQ.tail = wQ, wQ.position = QQ.nextPosition++))
      }
      enqueueChangeTree(QQ) {
        (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : QQ.changesNode) || (QQ.changesNode = this._appendToList(this.changes, QQ))
      }
      enqueueUnreliable(QQ) {
        (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : QQ.unreliableChangesNode) || (QQ.unreliableChangesNode = this._appendToList(this.unreliableChanges, QQ))
      }
      _appendToList(QQ, FQ) {
        const wQ = this._nodePool;
        let LQ;
        return wQ.length > 0 ? (LQ = wQ.pop(), LQ.changeTree = FQ, LQ.next = void 0, LQ.prev = void 0) : LQ = {
          changeTree: FQ,
          next: void 0,
          prev: void 0,
          position: 0
        }, QQ.next ? (LQ.prev = QQ.tail, QQ.tail.next = LQ, QQ.tail = LQ) : (QQ.nextPosition = 0, QQ.next = LQ, QQ.tail = LQ), LQ.position = QQ.nextPosition++, LQ
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
      _removeNode(QQ, FQ, wQ, LQ) {
        return !(!wQ || wQ.changeTree !== FQ) && (wQ.prev ? wQ.prev.next = wQ.next : QQ.next = wQ.next, wQ.next ? wQ.next.prev = wQ.prev : QQ.tail = wQ.prev, FQ[LQ] = void 0, this.releaseNode(wQ), !0)
      }
    }

    function NL(QQ, FQ) {
      if (-1 === FQ || FQ >= QQ.length) return !1;
      const wQ = QQ.length - 1;
      for (let LQ = FQ; LQ < wQ; LQ++) QQ[LQ] = QQ[LQ + 1];
      return QQ.length = wQ, !0
    }

    function TL(QQ, FQ, wQ) {
      const LQ = ~wQ,
        qQ = QQ.changeTrees;
      for (const oQ in qQ) {
        const QQ = qQ[oQ],
          wQ = QQ.visibleViews;
        void 0 !== wQ && FQ < wQ.length && (wQ[FQ] &= LQ);
        const DQ = QQ.subscribedViews;
        void 0 !== DQ && FQ < DQ.length && (DQ[FQ] &= LQ);
        const kQ = QQ.tagViews;
        void 0 !== kQ && kQ.forEach((QQ => {
          FQ < QQ.length && (QQ[FQ] &= LQ)
        }))
      }
    }
    const KL = new FinalizationRegistry((QQ => {
      let {
        root: FQ,
        id: wQ,
        slot: LQ,
        bit: qQ
      } = QQ;
      TL(FQ, LQ, qQ), FQ.activeViews.delete(wQ);
      for (const oQ of FQ.streamTrees) oQ._dropView(wQ);
      FQ.releaseViewId(wQ)
    }));

    function zL(QQ) {
      if (void 0 === QQ) return "undefined";
      if (null === QQ) return "null";
      const FQ = typeof QQ;
      return "string" === FQ ? JSON.stringify(QQ.length > 30 ? `${QQ.slice(0,30)}\u2026` : QQ) : "object" !== FQ && "function" !== FQ ? `${FQ} ${String(QQ)}` : Array.isArray(QQ) ? `Array(${QQ.length})` : QQ.constructor?.name ?? "Object"
    }
    class lL {
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
        void 0 === this._root && (this._root = QQ, this.id = QQ.acquireViewId(), this._slot = this.id >> 5, this._bit = 1 << (31 & this.id), QQ.registerView(this), KL.register(this, {
          root: QQ,
          id: this.id,
          slot: this._slot,
          bit: this._bit
        }, this))
      }
      dispose() {
        void 0 !== this._root && (this._root.unregisterView(this), TL(this._root, this._slot, this._bit), this._root.releaseViewId(this.id), KL.unregister(this), this._root = void 0, this.id = -1)
      }
      isVisible(QQ) {
        const FQ = QQ.visibleViews,
          wQ = this._slot;
        return void 0 !== FQ && wQ < FQ.length && 0 !== (FQ[wQ] & this._bit)
      }
      markVisible(QQ) {
        const FQ = this._slot;
        let wQ = QQ.visibleViews;
        for (void 0 === wQ && (wQ = QQ.visibleViews = []); wQ.length <= FQ;) wQ.push(0);
        wQ[FQ] |= this._bit
      }
      unmarkVisible(QQ) {
        const FQ = QQ.visibleViews;
        if (void 0 === FQ) return;
        const wQ = this._slot;
        wQ < FQ.length && (FQ[wQ] &= ~this._bit)
      }
      isSubscribed(QQ) {
        const FQ = QQ.subscribedViews,
          wQ = this._slot;
        return void 0 !== FQ && wQ < FQ.length && 0 !== (FQ[wQ] & this._bit)
      }
      _setSubscribed(QQ) {
        const FQ = this._slot;
        let wQ = QQ.subscribedViews;
        for (void 0 === wQ && (wQ = QQ.subscribedViews = []); wQ.length <= FQ;) wQ.push(0);
        wQ[FQ] |= this._bit
      }
      _clearSubscribed(QQ) {
        const FQ = QQ.subscribedViews;
        if (void 0 === FQ) return;
        const wQ = this._slot;
        wQ < FQ.length && (FQ[wQ] &= ~this._bit)
      }
      hasTagOnTree(QQ, FQ) {
        const wQ = QQ.tagViews;
        if (void 0 === wQ) return !1;
        const LQ = this._slot,
          qQ = this._bit;
        for (let oQ = FQ; 0 !== oQ; oQ &= oQ - 1) {
          const QQ = wQ.get(oQ & -oQ);
          if (void 0 !== QQ && LQ < QQ.length && 0 !== (QQ[LQ] & qQ)) return !0
        }
        return !1
      }
      addTag(QQ, FQ) {
        if (FQ === AL) return;
        let wQ = QQ.tagViews;
        void 0 === wQ && (wQ = QQ.tagViews = new Map);
        const LQ = this._slot,
          qQ = this._bit;
        for (let oQ = FQ; oQ > 0; oQ &= oQ - 1) {
          const QQ = oQ & -oQ;
          let FQ = wQ.get(QQ);
          for (void 0 === FQ && (FQ = [], wQ.set(QQ, FQ)); FQ.length <= LQ;) FQ.push(0);
          FQ[LQ] |= qQ
        }
      }
      removeTag(QQ, FQ) {
        if (FQ === AL) return;
        const wQ = QQ.tagViews;
        if (void 0 === wQ) return;
        const LQ = this._slot,
          qQ = ~this._bit;
        for (let oQ = FQ; oQ > 0; oQ &= oQ - 1) {
          const QQ = wQ.get(oQ & -oQ);
          void 0 !== QQ && LQ < QQ.length && (QQ[LQ] &= qQ)
        }
      }
      removeAllTagsOnTree(QQ) {
        const FQ = QQ.tagViews;
        if (void 0 === FQ) return;
        const wQ = this._slot,
          LQ = ~this._bit;
        FQ.forEach((QQ => {
          wQ < QQ.length && (QQ[wQ] &= LQ)
        }))
      }
      add(QQ) {
        let FQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : AL,
          wQ = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        return this._add(QQ, FQ, wQ, !1)
      }
      _addImmediate(QQ) {
        let FQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : AL;
        this._add(QQ, FQ, !0, !0)
      }
      _add(QQ, FQ, wQ, LQ) {
        const oQ = QQ?.[AQ];
        if (!oQ) return console.warn(`StateView#add(): expected a Schema instance or collection, received ${zL(QQ)}`), !1;
        const DQ = oQ.parent;
        if (!DQ && 0 !== QQ[kQ]) throw new Error(`Cannot add a detached instance to the StateView. Make sure to assign the "${oQ.ref.constructor.name}" instance to the state before calling view.add()`);
        void 0 === this._root && void 0 !== oQ.root && this._bindRoot(oQ.root);
        const vQ = DQ?.[AQ];
        if (!LQ && vQ?.isStreamCollection) return UF(DQ, this.id, oQ.parentIndex), !0;
        const mQ = QQ.constructor[Symbol.metadata],
          uQ = this.isVisible(oQ);
        if (!this.iterable || !wQ || uQ && -1 !== this.items.indexOf(QQ) || this.items.push(QQ), this.markVisible(oQ), wQ && DQ && this.addParentOf(oQ, FQ), !LQ && oQ.isStreamCollection) return !0;
        if (FQ === AL && oQ.isNew) return this._markSubtreeVisible(oQ, FQ), !1;
        let HQ = this.changes.get(QQ[kQ]);
        void 0 === HQ && (HQ = new Map, this.changes.set(QQ[kQ], HQ));
        let bQ = !1;
        const YQ = oQ.encDescriptor.tags;
        if (oQ.forEachChild(((QQ, wQ) => {
            const LQ = YQ[wQ];
            if (void 0 !== LQ) {
              if (!(LQ === AL || FQ !== AL && 0 !== (LQ & FQ))) return
            }
            this.add(QQ.ref, FQ, !1) && (bQ = !0)
          })), FQ !== AL) {
          this.addTag(oQ, FQ);
          const QQ = mQ?.[rQ];
          if (void 0 !== QQ)
            for (let wQ = FQ; wQ > 0; wQ &= wQ - 1) QQ[wQ & -wQ]?.forEach((QQ => {
              oQ.getChange(QQ) !== qQ.DELETE && HQ.set(QQ, qQ.ADD)
            }))
        }
        if ((FQ === AL || !uQ) && (!oQ.isNew || bQ))
          if (oQ.isArray && "string" !== typeof oQ.refTarget[tQ]) oQ.refTarget.items.length > 0 && (HQ.set(-1, qQ.ADD), bQ = !0);
          else {
            const QQ = oQ.encDescriptor.tags;
            oQ.forEachLive((wQ => {
              const LQ = QQ[wQ];
              (void 0 === LQ || LQ === AL || FQ !== AL && 0 !== (LQ & FQ)) && (HQ.set(wQ, qQ.ADD), bQ = !0)
            }))
          } return bQ
      }
      _markSubtreeVisible(QQ, FQ) {
        const wQ = QQ.encDescriptor.tags;
        QQ.forEachChild(((QQ, LQ) => {
          const qQ = wQ[LQ];
          if (void 0 !== qQ) {
            if (!(qQ === AL || FQ !== AL && 0 !== (qQ & FQ))) return
          }
          QQ.isNew ? (this.markVisible(QQ), this._markSubtreeVisible(QQ, FQ)) : this._add(QQ.ref, FQ, !1, !1)
        }))
      }
      addParentOf(QQ, FQ) {
        const wQ = QQ.parent[AQ],
          LQ = QQ.parentIndex;
        this.isVisible(wQ) || this.markVisible(wQ);
        const oQ = wQ.parent?.[AQ];
        if (oQ && this.addParentOf(wQ, FQ), wQ.hasFilteredFields && wQ.getChange(LQ) !== qQ.DELETE) {
          let oQ = this.changes.get(wQ.ref[kQ]);
          void 0 === oQ && (oQ = new Map, this.changes.set(wQ.ref[kQ], oQ));
          const DQ = wQ.encDescriptor.tags[LQ];
          void 0 !== DQ && DQ !== AL && 0 !== (DQ & FQ) && this.addTag(wQ, FQ), oQ.set(wQ.isArray ? QQ : LQ, qQ.ADD)
        }
      }
      _touchAncestorsOf(QQ) {
        let FQ = QQ.parent?.[AQ];
        if (void 0 === FQ) return;
        const wQ = [];
        for (; void 0 !== FQ;) {
          if (FQ.hasFilteredFields) {
            const QQ = FQ.ref[kQ];
            if (this.changes.has(QQ)) break;
            wQ.push(FQ)
          }
          FQ = FQ.parent?.[AQ]
        }
        for (let LQ = wQ.length - 1; LQ >= 0; LQ--) this.changes.set(wQ[LQ].ref[kQ], new Map)
      }
      remove(QQ) {
        let FQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : AL,
          wQ = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        const LQ = QQ?.[AQ];
        if (!LQ) return console.warn(`StateView#remove(): expected a Schema instance or collection, received ${zL(QQ)}`), this;
        const oQ = LQ.parent?.[AQ];
        if (oQ?.isStreamCollection) return this.unmarkVisible(LQ), this.iterable && !wQ && NL(this.items, this.items.indexOf(QQ)),
          function(QQ, FQ, wQ, LQ, oQ) {
            const DQ = QQ._stream;
            if (void 0 === DQ) return !1;
            const kQ = DQ.pendingByView.get(FQ);
            if (kQ?.has(LQ)) return kQ.delete(LQ), !1;
            const vQ = DQ.sentByView.get(FQ);
            if (vQ?.has(LQ)) {
              vQ.delete(LQ);
              let QQ = oQ.get(wQ);
              return void 0 === QQ && (QQ = new Map, oQ.set(wQ, QQ)), QQ.set(LQ, qQ.DELETE), !0
            }
          }(LQ.parent, this.id, LQ.parent[kQ], LQ.parentIndex, this.changes), this._recursiveDeleteVisibleChangeTree(LQ), this;
        if (LQ.isStreamCollection) {
          this.unmarkVisible(LQ), this.iterable && !wQ && NL(this.items, this.items.indexOf(QQ));
          const FQ = LQ.ref,
            oQ = FQ._stream;
          if (void 0 !== oQ) {
            oQ.pendingByView.get(this.id)?.clear();
            const QQ = oQ.sentByView.get(this.id);
            if (void 0 !== QQ && QQ.size > 0) {
              const wQ = FQ[kQ];
              let LQ = this.changes.get(wQ);
              void 0 === LQ && (LQ = new Map, this.changes.set(wQ, LQ));
              for (const FQ of QQ) LQ.set(FQ, qQ.DELETE);
              QQ.clear()
            }
          }
          return this
        }
        this.unmarkVisible(LQ), this.iterable && !wQ && NL(this.items, this.items.indexOf(QQ));
        const DQ = LQ.ref,
          vQ = DQ.constructor[Symbol.metadata],
          mQ = DQ[kQ];
        this._touchAncestorsOf(LQ);
        let uQ = this.changes.get(mQ);
        if (void 0 === uQ && (uQ = new Map, this.changes.set(mQ, uQ)), FQ === AL) {
          const QQ = LQ.parent;
          if (QQ && !gF.isValidInstance(QQ) && LQ.isFiltered) {
            const FQ = oQ.isArray ? LQ : LQ.parentIndex,
              wQ = QQ[kQ];
            let DQ = this.changes.get(wQ);
            void 0 === DQ ? (DQ = new Map, this.changes.set(wQ, DQ)) : DQ.get(FQ) === qQ.ADD && this._dropPendingEntries(LQ), DQ.set(FQ, qQ.DELETE), this._recursiveDeleteVisibleChangeTree(LQ)
          } else vQ?.[sQ]?.forEach((QQ => this._removeViewField(LQ, uQ, QQ)))
        } else {
          const QQ = vQ?.[rQ];
          if (void 0 !== QQ)
            for (let wQ = FQ; wQ > 0; wQ &= wQ - 1) QQ[wQ & -wQ]?.forEach((QQ => this._removeViewField(LQ, uQ, QQ)))
        }
        return void 0 === FQ ? this.removeAllTagsOnTree(LQ) : this.removeTag(LQ, FQ), this
      }
      has(QQ) {
        return this.isVisible(QQ[AQ])
      }
      hasTag(QQ) {
        let FQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : AL;
        return this.hasTagOnTree(QQ[AQ], FQ)
      }
      subscribe(QQ, FQ) {
        const wQ = QQ?.[AQ];
        if (!wQ) return console.warn(`StateView#subscribe(): expected a Schema collection, received ${zL(QQ)}`), this;
        if (void 0 === this._root && void 0 !== wQ.root && this._bindRoot(wQ.root), void 0 !== FQ)
          if (wQ.isStreamCollection) {
            const wQ = RF(QQ);
            null === FQ ? wQ.priorityByView?.delete(this.id) : (wQ.priorityByView ??= new Map).set(this.id, FQ)
          } else {
            const FQ = QQ?.constructor?.name ?? "collection",
              LQ = wQ.parent;
            if (void 0 === LQ) console.warn(`StateView#subscribe(): \`priority\` ignored \u2014 this ${FQ} is not attached to a state yet, so it cannot be identified as a stream. Subscribe after assigning it to the state.`);
            else {
              const QQ = LQ?.constructor?.[Symbol.metadata]?.[wQ.parentIndex]?.name,
                qQ = QQ ? `${LQ.constructor.name}#${QQ}` : FQ;
              console.warn(`StateView#subscribe(): \`priority\` ignored \u2014 ${qQ} is a ${FQ}, not a streaming collection. Declare the field with .stream() (e.g. t.map(X).stream()) or use t.stream(X) to enable priority batching.`)
            }
          } if (this.isSubscribed(wQ)) return this;
        const LQ = void 0 !== wQ.parent && !this.isVisible(wQ);
        if (LQ ? (this.addParentOf(wQ, AL), this._add(QQ, AL, !1, !1)) : this.markVisible(wQ), this._setSubscribed(wQ), wQ.isStreamCollection) {
          const FQ = QQ;
          wQ.forEachChild(((QQ, wQ) => {
            UF(FQ, this.id, wQ)
          }))
        } else LQ || wQ.forEachChild((QQ => {
          this.markVisible(QQ)
        }));
        return this
      }
      unsubscribe(QQ) {
        const FQ = QQ?.[AQ];
        if (!FQ) return console.warn(`StateView#unsubscribe(): expected a Schema collection, received ${zL(QQ)}`), this;
        if (!this.isSubscribed(FQ)) return this;
        this._clearSubscribed(FQ);
        const wQ = FQ.ref[kQ];
        if (FQ.isStreamCollection) {
          const FQ = QQ._stream;
          if (void 0 !== FQ) {
            FQ.pendingByView.get(this.id)?.clear();
            const QQ = FQ.sentByView.get(this.id);
            if (void 0 !== QQ && QQ.size > 0) {
              let FQ = this.changes.get(wQ);
              void 0 === FQ && (FQ = new Map, this.changes.set(wQ, FQ));
              for (const wQ of QQ) FQ.set(wQ, qQ.DELETE);
              QQ.clear()
            }
          }
        } else {
          const QQ = FQ.isArray;
          let LQ = this.changes.get(wQ);
          FQ.forEachChild(((FQ, oQ) => {
            void 0 === LQ && (LQ = new Map, this.changes.set(wQ, LQ)), LQ.set(QQ ? FQ : oQ, qQ.DELETE), this.unmarkVisible(FQ)
          }))
        }
        return this.unmarkVisible(FQ), this
      }
      clear() {
        if (!this.iterable) throw new Error("StateView#clear() is only available for iterable StateView's. Use StateView(iterable: true) constructor.");
        for (let QQ = 0, FQ = this.items.length; QQ < FQ; QQ++) this.remove(this.items[QQ], AL, !0);
        this.items.length = 0
      }
      isChangeTreeVisible(QQ) {
        let FQ = this.isVisible(QQ);
        if (!FQ && QQ.isVisibilitySharedWithParent)
          if (this.isVisible(QQ.parent[AQ])) this.markVisible(QQ), FQ = !0;
          else
            for (let wQ = QQ.extraParents; void 0 !== wQ; wQ = wQ.next) {
              const LQ = wQ.ref[AQ];
              if (LQ.isFiltered && this.isVisible(LQ)) {
                this.markVisible(QQ), FQ = !0;
                break
              }
            }
        return FQ
      }
      _recursiveDeleteVisibleChangeTree(QQ) {
        QQ.forEachChild((QQ => {
          this.unmarkVisible(QQ), this._recursiveDeleteVisibleChangeTree(QQ)
        }))
      }
      _dropPendingEntries(QQ) {
        this.changes.delete(QQ.ref[kQ]), QQ.forEachChild((QQ => this._dropPendingEntries(QQ)))
      }
      _removeViewField(QQ, FQ, wQ) {
        const LQ = FQ.get(wQ) === qQ.ADD;
        FQ.set(wQ, qQ.DELETE);
        const oQ = QQ.ref[QQ.encDescriptor.names[wQ]],
          DQ = oQ?.[AQ];
        DQ && (this.unmarkVisible(DQ), this._recursiveDeleteVisibleChangeTree(DQ), LQ && this._dropPendingEntries(DQ))
      }
    }

    function jL(QQ) {
      QQ.structSwitchEmitted || (QQ.shouldEmitSwitch && (QQ.buffer[QQ.it.offset++] = 255, FF.number(QQ.buffer, QQ.ref[kQ], QQ.it)), QQ.structSwitchEmitted = !0)
    }

    function aL(QQ, FQ) {
      VL(QQ, FQ, qQ.ADD)
    }

    function XL(QQ, FQ) {
      if (FQ._fullSyncGen === QQ.gen) return;
      FQ._fullSyncGen = QQ.gen;
      if (!QQ.hasView || QQ.view.isChangeTreeVisible(FQ)) {
        const wQ = FQ.encDescriptor;
        QQ.changeTree = FQ, QQ.ref = FQ.ref, QQ.encoder = wQ.encoder, QQ.filter = wQ.filter, QQ.metadata = wQ.metadata, QQ.treeIsFiltered = FQ.isFiltered, QQ.isSchema = wQ.isSchema, QQ.filterBitmask = wQ.filterBitmask, QQ.tags = wQ.tags, QQ.structSwitchEmitted = !1, QQ.shouldEmitSwitch = QQ.hasView || QQ.it.offset > QQ.initialOffset || FQ !== QQ.rootChangeTree, FQ.isArray && FQ.collDirty.size > 0 && (FQ.flags |= 512), qw(FQ, QQ, aL)
      }
      ew(FQ, QQ, fL)
    }

    function fL(QQ, FQ, wQ) {
      XL(QQ, FQ)
    }

    function VL(QQ, FQ, wQ) {
      if (FQ < 0) {
        if (QQ.treeIsFiltered !== QQ.emitFiltered) return;
        return jL(QQ), void(QQ.buffer[QQ.it.offset++] = 255 & Math.abs(FQ))
      }
      if ((QQ.isSchema ? QQ.treeIsFiltered || (FQ < 32 ? 0 !== (QQ.filterBitmask & 1 << FQ) : void 0 !== QQ.tags[FQ]) : QQ.treeIsFiltered) !== QQ.emitFiltered) return;
      const LQ = QQ.isEncodeAll ? qQ.ADD : wQ;
      void 0 !== LQ && (void 0 === QQ.filter || QQ.filter(QQ.ref, FQ, QQ.view)) && (jL(QQ), QQ.encoder(QQ.self, QQ.buffer, QQ.changeTree, FQ, LQ, QQ.it, QQ.isEncodeAll, QQ.hasView, QQ.metadata))
    }

    function hL(QQ, FQ) {
      const wQ = new Uint8Array(QQ.length + FQ.length);
      return wQ.set(QQ, 0), wQ.set(FQ, QQ.length), wQ
    }
    class JL {
      static BUFFER_SIZE = 16384;
      sharedBuffer = new Uint8Array(JL.BUFFER_SIZE);
      context;
      state;
      root;
      constructor(QQ, FQ) {
        this.context = XF.cache(QQ.constructor), this.root = FQ ?? new UL(this.context), this.setState(QQ)
      }
      setState(QQ) {
        this.state = QQ, this.state[AQ].setRoot(this.root)
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
          FQ = arguments.length > 1 ? arguments[1] : void 0,
          wQ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : this.sharedBuffer,
          LQ = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : QQ.offset;
        return this._encodeChannel(QQ, FQ, wQ, LQ, !1)
      }
      encodeUnreliable() {
        let QQ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
            offset: 0
          },
          FQ = arguments.length > 1 ? arguments[1] : void 0,
          wQ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : this.sharedBuffer,
          LQ = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : QQ.offset;
        return this._encodeChannel(QQ, FQ, wQ, LQ, !0)
      }
      _encodeChannel(QQ, FQ, wQ, LQ, qQ) {
        this.root.pendingFilterRefresh.length > 0 && Dw(this.root);
        const oQ = void 0 !== FQ,
          DQ = this.state[AQ],
          kQ = this._encodeCtx;
        kQ.self = this, kQ.buffer = wQ, kQ.it = QQ, kQ.view = FQ, kQ.isEncodeAll = !1, kQ.hasView = oQ, kQ.emitFiltered = oQ;
        let vQ = qQ ? this.root.unreliableChanges : this.root.changes;
        for (; vQ = vQ.next;) {
          const wQ = vQ.changeTree;
          if (oQ && !FQ.isChangeTreeVisible(wQ)) continue;
          const mQ = qQ ? wQ.unreliableRecorder : wQ;
          if (!mQ || !mQ.has()) continue;
          const uQ = wQ.encDescriptor;
          kQ.changeTree = wQ, kQ.ref = wQ.ref, kQ.encoder = uQ.encoder, kQ.filter = uQ.filter, kQ.metadata = uQ.metadata, kQ.treeIsFiltered = wQ.isFiltered, kQ.isSchema = uQ.isSchema, kQ.filterBitmask = uQ.filterBitmask, kQ.tags = uQ.tags, kQ.structSwitchEmitted = !1, kQ.isRootTree = wQ === DQ, kQ.shouldEmitSwitch = oQ || QQ.offset > LQ || !kQ.isRootTree, mQ.forEachWithCtx(kQ, VL)
        }
        return qQ || oQ || !this._isStreamBroadcastMode || this._emitStreamBroadcast(wQ, QQ), QQ.offset > wQ.byteLength ? (wQ = this._resizeBuffer(wQ, QQ.offset), QQ.offset = LQ, this._encodeChannel(QQ, FQ, wQ, LQ, qQ)) : wQ.subarray(0, QQ.offset)
      }
      encodeFullSync(QQ, FQ, wQ, LQ) {
        let qQ = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : QQ.offset;
        this.root.pendingFilterRefresh.length > 0 && Dw(this.root);
        const oQ = void 0 !== LQ,
          DQ = this.state[AQ],
          kQ = this._encodeCtx;
        return kQ.self = this, kQ.buffer = FQ, kQ.it = QQ, kQ.view = LQ, kQ.isEncodeAll = !0, kQ.hasView = oQ, kQ.emitFiltered = wQ, kQ.gen = ++this._fullSyncGen, kQ.initialOffset = qQ, kQ.rootChangeTree = DQ, XL(kQ, DQ), QQ.offset > FQ.byteLength ? (FQ = this._resizeBuffer(FQ, QQ.offset), QQ.offset = qQ, this.encodeFullSync(QQ, FQ, wQ, LQ, qQ)) : FQ.subarray(0, QQ.offset)
      }
      _resizeBuffer(QQ, FQ) {
        const wQ = Math.ceil(FQ / JL.BUFFER_SIZE) * JL.BUFFER_SIZE,
          LQ = new Uint8Array(wQ);
        return LQ.set(QQ), QQ === this.sharedBuffer && (this.sharedBuffer = LQ), LQ
      }
      encodeAll() {
        let QQ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
            offset: 0
          },
          FQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.sharedBuffer;
        return this.encodeFullSync(QQ, FQ, !1)
      }
      encodeAllView(QQ, FQ, wQ) {
        let LQ = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : this.sharedBuffer;
        const qQ = wQ.offset;
        return LQ = this.encodeFullSync(wQ, LQ, !0, QQ, qQ), hL(LQ.subarray(0, FQ), LQ.subarray(qQ, wQ.offset))
      }
      ensureCapacity(QQ, FQ) {
        if (FQ + JL.BUFFER_SIZE <= QQ.byteLength) return QQ;
        const wQ = Math.ceil((FQ + JL.BUFFER_SIZE) / JL.BUFFER_SIZE) * JL.BUFFER_SIZE,
          LQ = new Uint8Array(wQ);
        return LQ.set(QQ.subarray(0, FQ)), QQ === this.sharedBuffer && (this.sharedBuffer = LQ), LQ
      }
      encodeView(QQ, FQ, wQ) {
        let LQ = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : this.sharedBuffer,
          oQ = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4];
        const DQ = wQ.offset;
        this._emitStreamPriority(QQ);
        for (const vQ of QQ.changes.keys()) {
          const FQ = QQ.changes.get(vQ),
            oQ = this.root.changeTrees[vQ];
          if (void 0 === oQ) {
            QQ.changes.delete(vQ);
            continue
          }
          if (0 === FQ.size) continue;
          const DQ = oQ.encDescriptor,
            mQ = DQ.encoder,
            uQ = DQ.metadata,
            HQ = oQ.ref,
            YQ = oQ.refTarget;
          LQ = this.ensureCapacity(LQ, wQ.offset), LQ[wQ.offset++] = 255, FF.number(LQ, HQ[kQ], wQ);
          for (const [vQ, xQ] of FQ) {
            let FQ;
            if (-1 === vQ) {
              const QQ = YQ.tmpItems,
                FQ = YQ.deletedIndexes;
              for (let DQ = 0; DQ < QQ.length; DQ++) void 0 !== QQ[DQ] && !0 !== FQ[DQ] && mQ(this, LQ, oQ, DQ, qQ.ADD, wQ, !1, !0, uQ);
              continue
            }
            if ("number" === typeof vQ) FQ = vQ;
            else {
              const wQ = vQ.indexInParent(HQ);
              if (void 0 === wQ) continue;
              if (FQ = wQ, xQ === qQ.ADD && oQ.getChange(FQ) === qQ.DELETE) {
                QQ.changes.delete(vQ.ref[kQ]);
                continue
              }
            }
            mQ(this, LQ, oQ, FQ, void 0 !== YQ[bQ](FQ) && xQ || qQ.DELETE, wQ, !1, !0, uQ)
          }
        }
        return QQ.changes.clear(), LQ = this.encode(wQ, QQ, LQ), oQ ? hL(LQ.subarray(0, FQ), LQ.subarray(DQ, wQ.offset)) : LQ.subarray(DQ, wQ.offset)
      }
      encodeUnreliableView(QQ, FQ, wQ) {
        let LQ = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : this.sharedBuffer;
        const qQ = wQ.offset;
        return LQ = this.encodeUnreliable(wQ, QQ, LQ, qQ), hL(LQ.subarray(0, FQ), LQ.subarray(qQ, wQ.offset))
      }
      _emitStreamBroadcast(QQ, FQ) {
        const wQ = this.root.streamTrees;
        for (const LQ of wQ) {
          const wQ = LQ,
            oQ = wQ[AQ],
            DQ = wQ[kQ];
          if (void 0 === DQ) continue;
          const vQ = wQ._stream,
            mQ = vQ.broadcastDeletes,
            uQ = vQ.broadcastPending,
            HQ = vQ.sentBroadcast,
            YQ = mQ.size > 0,
            xQ = uQ.size > 0,
            tQ = oQ.encDescriptor,
            eQ = tQ.encoder,
            MQ = tQ.metadata;
          if (YQ || xQ) {
            if (QQ[FQ.offset++] = 255, FF.number(QQ, DQ, FQ), YQ) {
              for (const wQ of mQ) eQ(this, QQ, oQ, wQ, qQ.DELETE, FQ, !1, !1, MQ);
              mQ.clear()
            }
            const LQ = vQ.maxPerTick,
              xQ = [];
            let tQ = 0;
            const GQ = [];
            for (const DQ of uQ) {
              if (tQ >= LQ) break;
              const kQ = wQ[bQ](DQ);
              void 0 !== kQ ? (eQ(this, QQ, oQ, DQ, qQ.ADD, FQ, !1, !1, MQ), HQ.add(DQ), xQ.push(kQ), GQ.push(DQ), tQ++) : GQ.push(DQ)
            }
            for (const QQ of GQ) uQ.delete(QQ);
            for (const wQ of xQ) {
              const LQ = wQ[AQ];
              if (void 0 === LQ) continue;
              const oQ = wQ[kQ];
              if (void 0 === oQ) continue;
              QQ[FQ.offset++] = 255, FF.number(QQ, oQ, FQ);
              const DQ = LQ.encDescriptor,
                vQ = DQ.encoder,
                mQ = DQ.metadata;
              LQ.forEachLive((wQ => {
                gF.hasUnreliableAtIndex(mQ, wQ) || vQ(this, QQ, LQ, wQ, qQ.ADD, FQ, !1, !1, mQ)
              }))
            }
          }
          for (const LQ of HQ) {
            const qQ = wQ[bQ](LQ);
            if (void 0 === qQ) continue;
            const oQ = qQ[AQ];
            if (void 0 === oQ || !oQ.has()) continue;
            const DQ = qQ[kQ];
            if (void 0 === DQ) continue;
            QQ[FQ.offset++] = 255, FF.number(QQ, DQ, FQ);
            const vQ = oQ.encDescriptor,
              mQ = vQ.encoder,
              uQ = vQ.metadata;
            oQ.forEach(((wQ, LQ) => {
              wQ < 0 || gF.hasUnreliableAtIndex(uQ, wQ) || mQ(this, QQ, oQ, wQ, LQ, FQ, !1, !1, uQ)
            }))
          }
        }
      }
      _emitStreamPriority(QQ) {
        const FQ = this.root.streamTrees;
        if (0 === FQ.size) return;
        const wQ = QQ.id;
        for (const LQ of FQ) {
          const FQ = LQ,
            oQ = FQ._stream,
            DQ = oQ.pendingByView.get(wQ);
          if (void 0 === DQ || 0 === DQ.size) continue;
          const vQ = oQ.priorityByView?.get(wQ),
            mQ = void 0 !== vQ,
            uQ = oQ.priority,
            HQ = oQ.maxPerTick,
            YQ = [],
            xQ = [];
          if (mQ || void 0 !== uQ) {
            const wQ = [],
              LQ = [];
            let qQ = 0;
            for (const oQ of DQ) {
              const DQ = FQ[bQ](oQ);
              if (void 0 === DQ) {
                xQ.push(oQ);
                continue
              }
              const kQ = mQ ? vQ(DQ) : uQ(QQ, DQ);
              if (qQ < HQ) {
                let QQ = qQ++;
                for (; QQ > 0 && LQ[QQ - 1] < kQ;) LQ[QQ] = LQ[QQ - 1], wQ[QQ] = wQ[QQ - 1], QQ--;
                LQ[QQ] = kQ, wQ[QQ] = oQ
              } else if (kQ > LQ[HQ - 1]) {
                let QQ = HQ - 1;
                for (; QQ > 0 && LQ[QQ - 1] < kQ;) LQ[QQ] = LQ[QQ - 1], wQ[QQ] = wQ[QQ - 1], QQ--;
                LQ[QQ] = kQ, wQ[QQ] = oQ
              }
            }
            for (let QQ = 0; QQ < qQ; QQ++) YQ.push(wQ[QQ])
          } else
            for (const QQ of DQ) {
              if (YQ.length >= HQ) break;
              YQ.push(QQ)
            }
          for (const QQ of xQ) DQ.delete(QQ);
          const tQ = YQ.length;
          let eQ = oQ.sentByView.get(wQ);
          void 0 === eQ && (eQ = new Set, oQ.sentByView.set(wQ, eQ));
          for (let wQ = 0; wQ < tQ; wQ++) {
            const LQ = YQ[wQ],
              oQ = FQ[bQ](LQ);
            if (void 0 === oQ) {
              DQ.delete(LQ);
              continue
            }
            QQ._addImmediate(oQ);
            const vQ = oQ[AQ];
            if (void 0 !== vQ) {
              const FQ = oQ[kQ];
              let wQ = QQ.changes.get(FQ);
              void 0 === wQ && (wQ = new Map, QQ.changes.set(FQ, wQ));
              const LQ = vQ.metadata;
              vQ.forEachLive((QQ => {
                gF.hasUnreliableAtIndex(LQ, QQ) || wQ.set(QQ, qQ.ADD)
              }))
            }
            DQ.delete(LQ), eQ.add(LQ)
          }
        }
      }
      discardChanges() {
        const QQ = this.root.changes;
        let FQ = QQ.next;
        const wQ = this.root;
        for (; FQ;) {
          const QQ = FQ.next;
          FQ.changeTree.endEncode(), wQ.releaseNode(FQ), FQ = QQ
        }
        QQ.next = void 0, QQ.tail = void 0
      }
      discardUnreliableChanges() {
        const QQ = this.root.unreliableChanges;
        let FQ = QQ.next;
        const wQ = this.root;
        for (; FQ;) {
          const QQ = FQ.next;
          FQ.changeTree.endEncodeUnreliable(), wQ.releaseNode(FQ), FQ = QQ
        }
        QQ.next = void 0, QQ.tail = void 0
      }
      tryEncodeTypeId(QQ, FQ, wQ, LQ) {
        const qQ = this.context.getTypeId(FQ),
          oQ = this.context.getTypeId(wQ);
        void 0 !== oQ ? qQ !== oQ && (QQ[LQ.offset++] = 213, FF.number(QQ, oQ, LQ)) : console.warn(`@colyseus/schema WARNING: Class "${wQ.name}" is not registered on TypeRegistry - Please either tag the class with @entity or define a @type() field.`)
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
        const FQ = 0 === QQ.activeViews.size;
        for (const wQ of QQ.streamTrees)
          if (FQ ? IF(wQ) : rF(wQ, QQ)) return !0;
        return !1
      }
      get hasUnreliableChanges() {
        return void 0 !== this.root.unreliableChanges.next
      }
    }
    class EL extends Error {
      constructor(QQ) {
        super(QQ), this.name = "DecodingWarning"
      }
    }
    const nL = {
      value: 0,
      enumerable: !1,
      writable: !0
    };
    class gL {
      refs = new Map;
      refCount = {};
      deletedRefs = new Set;
      callbacks = {};
      nextUniqueId = 0;
      getNextUniqueId() {
        return this.nextUniqueId++
      }
      addRef(QQ, FQ) {
        let wQ = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        this.refs.set(QQ, FQ), void 0 === FQ[kQ] ? (nL.value = QQ, Object.defineProperty(FQ, kQ, nL)) : FQ[kQ] !== QQ && (FQ[kQ] = QQ), wQ && (this.refCount[QQ] = (this.refCount[QQ] || 0) + 1), this.deletedRefs.has(QQ) && this.deletedRefs.delete(QQ)
      }
      removeRef(QQ) {
        const FQ = this.refCount[QQ];
        if (void 0 !== FQ)
          if (0 !== FQ)(this.refCount[QQ] = FQ - 1) <= 0 && this.deletedRefs.add(QQ);
          else try {
            const FQ = this.refs.get(QQ);
            throw new EL(`trying to remove refId '${QQ}' with 0 refCount (${FQ.constructor.name}: ${JSON.stringify(FQ)})`)
          } catch (Dq) {
            console.warn(Dq)
          } else try {
            throw new EL("trying to remove refId that doesn't exist: " + QQ)
          } catch (Dq) {
            console.warn(Dq)
          }
      }
      clearRefs() {
        this.refs.clear(), this.deletedRefs.clear(), this.callbacks = {}, this.refCount = {}
      }
      garbageCollectDeletedRefs() {
        this.deletedRefs.forEach((QQ => {
          if (this.refCount[QQ] > 0) return;
          const FQ = this.refs.get(QQ),
            wQ = FQ.constructor[Symbol.metadata];
          if (null != wQ)
            for (const LQ in wQ) {
              const QQ = FQ[wQ[LQ].name];
              if ("object" === typeof QQ && QQ) {
                const FQ = QQ[kQ];
                void 0 === FQ || this.deletedRefs.has(FQ) || this.removeRef(FQ)
              }
            } else "function" === typeof FQ[tQ] && Array.from(FQ.values()).forEach((QQ => {
              const FQ = QQ[kQ];
              void 0 === FQ || this.deletedRefs.has(FQ) || this.removeRef(FQ)
            }));
          this.refs.delete(QQ), delete this.refCount[QQ], delete this.callbacks[QQ]
        })), this.deletedRefs.clear()
      }
      addCallback(QQ, FQ, wQ) {
        if (void 0 === QQ) {
          const QQ = "number" === typeof FQ ? qQ[FQ] : FQ;
          throw new Error(`Can't addCallback on '${QQ}' (refId is undefined)`)
        }
        return this.callbacks[QQ] || (this.callbacks[QQ] = {}), this.callbacks[QQ][FQ] || (this.callbacks[QQ][FQ] = []), this.callbacks[QQ][FQ].push(wQ), () => this.removeCallback(QQ, FQ, wQ)
      }
      removeCallback(QQ, FQ, wQ) {
        const LQ = this.callbacks?.[QQ]?.[FQ]?.indexOf(wQ);
        void 0 !== LQ && -1 !== LQ && NL(this.callbacks[QQ][FQ], LQ)
      }
    }
    class PL {
      context;
      state;
      root;
      currentRefId = 0;
      qN;
      resyncVisited = null;
      resyncDamaged = !1;
      constructor(QQ, FQ) {
        this.setState(QQ), this.context = FQ || new XF(QQ.constructor)
      }
      setState(QQ) {
        this.state = QQ, this.root = new gL, this.root.addRef(0, QQ)
      }
      decode(QQ) {
        let FQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
            offset: 0
          },
          wQ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : this.state;
        const qQ = void 0 !== this.qN ? [] : null,
          oQ = this.root,
          DQ = QQ.byteLength;
        let kQ = wQ.constructor[uQ];
        for (this.currentRefId = 0; FQ.offset < DQ;) {
          if (QQ[FQ.offset] == LQ) {
            FQ.offset++, wQ[pQ]?.();
            const LQ = GF.number(QQ, FQ),
              qQ = oQ.refs.get(LQ);
            qQ ? (wQ = qQ, kQ = wQ.constructor[uQ], this.currentRefId = LQ) : (console.error(`"refId" not found: ${LQ}`, {
              previousRef: wQ,
              previousRefId: this.currentRefId
            }), console.warn("Please report this issue to the developers."), this.skipCurrentStructure(QQ, FQ, DQ));
            continue
          } - 1 !== kQ(this, QQ, FQ, wQ, qQ) || (console.warn("@colyseus/schema: definition mismatch"), this.skipCurrentStructure(QQ, FQ, DQ))
        }
        return wQ[pQ]?.(), null !== this.resyncVisited && function(QQ, FQ) {
          QQ.resyncDamaged ? console.warn("@colyseus/schema: resync sweep skipped \u2014 parts of the payload could not be decoded. Stale entries may persist until the next resync.") : fw(QQ, QQ.state, new Set, FQ)
        }(this, qQ), null !== qQ && this.qN?.(qQ), oQ.garbageCollectDeletedRefs(), qQ
      }
      decodeResync(QQ) {
        let FQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
          offset: 0
        };
        this.resyncVisited = new Map, this.resyncDamaged = !1;
        try {
          return this.decode(QQ, FQ)
        } finally {
          this.resyncVisited = null
        }
      }
      skipCurrentStructure(QQ, FQ, wQ) {
        null !== this.resyncVisited && (this.resyncDamaged = !0);
        const qQ = {
          offset: FQ.offset
        };
        for (; FQ.offset < wQ && (QQ[FQ.offset] !== LQ || (qQ.offset = FQ.offset + 1, !this.root.refs.has(GF.number(QQ, qQ))));) FQ.offset++
      }
      getInstanceType(QQ, FQ, wQ) {
        let LQ;
        if (213 === QQ[FQ.offset]) {
          FQ.offset++;
          const wQ = GF.number(QQ, FQ);
          LQ = this.context.get(wQ)
        }
        return LQ || wQ
      }
      createInstanceOfType(QQ) {
        return QQ.initializeForDecoder()
      }
      removeChildRefs(QQ, FQ) {
        const wQ = "string" !== typeof QQ[tQ],
          LQ = QQ[kQ];
        QQ.forEach(((oQ, DQ) => {
          FQ?.push({
            ref: QQ,
            refId: LQ,
            op: qQ.DELETE,
            field: DQ,
            value: void 0,
            previousValue: oQ
          }), wQ && this.root.removeRef(oQ[kQ])
        }))
      }
    }
    const ZL = OL({
        min: xL.float64(),
        max: xL.float64(),
        bits: xL.uint8(),
        mode: xL.uint8()
      }, "QuantizedDescriptor"),
      yL = OL({
        name: xL.string(),
        type: xL.string(),
        referencedType: xL.number(),
        childPrimitive: xL.string(),
        quantized: xL.ref(ZL).optional()
      }, "ReflectionField"),
      BL = OL({
        id: xL.number(),
        extendsId: xL.number(),
        fields: xL.array(yL)
      }, "ReflectionType"),
      dL = OL({
        types: xL.array(BL),
        rootType: xL.number()
      }, "Reflection");

    function Qq(QQ) {
      const FQ = QQ.root,
        wQ = FQ.callbacks,
        LQ = new WeakMap;
      let oQ;

      function DQ(QQ, wQ) {
        let mQ = wQ.instance?.constructor[Symbol.metadata] || QQ,
          uQ = wQ.instance && "function" === typeof wQ.instance.forEach || QQ && !rL.is(QQ);
        if (mQ && !uQ) {
          const QQ = function(QQ, qQ, DQ, vQ) {
            return vQ && void 0 !== wQ.instance[qQ] && !LQ.has(oQ) && DQ(wQ.instance[qQ], void 0), FQ.addCallback(QQ[kQ], qQ, DQ)
          };
          return new Proxy({
            listen: function(FQ, qQ) {
              let DQ = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
              if (wQ.instance) return QQ(wQ.instance, FQ, qQ, DQ);
              {
                let kQ = () => {};
                return wQ.onInstanceAvailable(((wQ, vQ) => {
                  kQ = QQ(wQ, FQ, qQ, DQ && vQ && !LQ.has(oQ))
                })), () => kQ()
              }
            },
            onChange: function(QQ) {
              return FQ.addCallback(wQ.instance[kQ], qQ.REPLACE, QQ)
            },
            bindTo: function(QQ, LQ) {
              return LQ || (LQ = Object.keys(mQ).map((QQ => mQ[QQ].name))), FQ.addCallback(wQ.instance[kQ], qQ.REPLACE, (() => {
                LQ.forEach((FQ => QQ[FQ] = wQ.instance[FQ]))
              }))
            }
          }, {
            get(QQ, FQ) {
              const LQ = mQ[mQ[FQ]];
              if (LQ) {
                const QQ = wQ.instance?.[FQ],
                  qQ = LQ => {
                    const qQ = vQ(wQ.instance).listen(FQ, ((QQ, FQ) => {
                      LQ(QQ, !1), qQ?.()
                    }), !1);
                    void 0 !== QQ?.[kQ] && LQ(QQ, !0)
                  };
                return DQ(LQ.type, {
                  instance: void 0 !== QQ?.[kQ] && QQ,
                  parentInstance: wQ.instance,
                  onInstanceAvailable: qQ
                })
              }
              return QQ[FQ]
            },
            has: (QQ, FQ) => void 0 !== mQ[FQ],
            set(QQ, FQ, wQ) {
              throw new Error("not allowed")
            },
            deleteProperty(QQ, FQ) {
              throw new Error("not allowed")
            }
          })
        } {
          const QQ = function(QQ, wQ, DQ) {
              return DQ && QQ.forEach(((QQ, FQ) => wQ(QQ, FQ))), FQ.addCallback(QQ[kQ], qQ.ADD, ((QQ, FQ) => {
                LQ.set(wQ, !0), oQ = wQ, wQ(QQ, FQ), LQ.delete(wQ), oQ = void 0
              }))
            },
            DQ = function(QQ, wQ) {
              return FQ.addCallback(QQ[kQ], qQ.DELETE, wQ)
            },
            vQ = function(QQ, wQ) {
              return FQ.addCallback(QQ[kQ], qQ.REPLACE, wQ)
            };
          return new Proxy({
            uC: function(FQ) {
              let qQ = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
              if (wQ.instance) return QQ(wQ.instance, FQ, qQ && !LQ.has(oQ));
              if (wQ.onInstanceAvailable) {
                let DQ = () => {};
                return wQ.onInstanceAvailable(((wQ, kQ) => {
                  DQ = QQ(wQ, FQ, qQ && kQ && !LQ.has(oQ))
                })), () => DQ()
              }
            },
            rU: function(QQ) {
              if (wQ.instance) return DQ(wQ.instance, QQ);
              if (wQ.onInstanceAvailable) {
                let FQ = () => {};
                return wQ.onInstanceAvailable((wQ => {
                  FQ = DQ(wQ, QQ)
                })), () => FQ()
              }
            },
            onChange: function(QQ) {
              if (wQ.instance) return vQ(wQ.instance, QQ);
              if (wQ.onInstanceAvailable) {
                let FQ = () => {};
                return wQ.onInstanceAvailable((wQ => {
                  FQ = vQ(wQ, QQ)
                })), () => FQ()
              }
            }
          }, {
            get(QQ, FQ) {
              if (!QQ[FQ]) throw new Error(`Can't access '${FQ}' through callback proxy. access the instance directly.`);
              return QQ[FQ]
            },
            has: (QQ, FQ) => void 0 !== QQ[FQ],
            set(QQ, FQ, wQ) {
              throw new Error("not allowed")
            },
            deleteProperty(QQ, FQ) {
              throw new Error("not allowed")
            }
          })
        }
      }

      function vQ(QQ) {
        return DQ(void 0, {
          instance: QQ
        })
      }
      return QQ.qN = function(QQ) {
        const FQ = new Set;
        for (let LQ = 0, oQ = QQ.length; LQ < oQ; LQ++) {
          const oQ = QQ[LQ],
            DQ = oQ.refId,
            vQ = oQ.ref,
            mQ = wQ[DQ];
          if (mQ) {
            if ((oQ.op & qQ.DELETE) === qQ.DELETE && rL.isSchema(oQ.previousValue)) {
              const QQ = wQ[oQ.previousValue[kQ]]?.[qQ.DELETE];
              for (let FQ = QQ?.length - 1; FQ >= 0; FQ--) QQ[FQ]()
            }
            if (rL.isSchema(vQ)) {
              if (!FQ.has(DQ)) {
                const QQ = mQ?.[qQ.REPLACE];
                for (let FQ = QQ?.length - 1; FQ >= 0; FQ--) QQ[FQ]()
              }
              if (mQ.hasOwnProperty(oQ.field)) {
                const QQ = mQ[oQ.field];
                for (let FQ = QQ?.length - 1; FQ >= 0; FQ--) QQ[FQ](oQ.value, oQ.previousValue)
              }
            } else {
              if ((oQ.op & qQ.DELETE) === qQ.DELETE) {
                if (void 0 !== oQ.previousValue) {
                  const QQ = mQ[qQ.DELETE];
                  for (let FQ = QQ?.length - 1; FQ >= 0; FQ--) QQ[FQ](oQ.previousValue, oQ.dynamicIndex ?? oQ.field)
                }
                if ((oQ.op & qQ.ADD) === qQ.ADD) {
                  const QQ = mQ[qQ.ADD];
                  for (let FQ = QQ?.length - 1; FQ >= 0; FQ--) QQ[FQ](oQ.value, oQ.dynamicIndex ?? oQ.field)
                }
              } else if ((oQ.op & qQ.ADD) === qQ.ADD && oQ.previousValue !== oQ.value) {
                const QQ = mQ[qQ.ADD];
                for (let FQ = QQ?.length - 1; FQ >= 0; FQ--) QQ[FQ](oQ.value, oQ.dynamicIndex ?? oQ.field)
              }
              if (oQ.value !== oQ.previousValue && (void 0 !== oQ.value || void 0 !== oQ.previousValue)) {
                const QQ = mQ[qQ.REPLACE];
                for (let FQ = QQ?.length - 1; FQ >= 0; FQ--) QQ[FQ](oQ.value, oQ.dynamicIndex ?? oQ.field)
              }
            }
            FQ.add(DQ)
          }
        }
      }, vQ
    }

    function Fq(QQ, FQ) {
      QQ.qN = FQ
    }
    dL.encode = function(QQ) {
      let FQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
        offset: 0
      };
      const wQ = QQ.context,
        LQ = new dL,
        qQ = new JL(LQ),
        oQ = wQ.schemas.get(QQ.state.constructor);
      oQ > 0 && (LQ.rootType = oQ);
      const DQ = new Set,
        kQ = {},
        vQ = QQ => {
          if (void 0 === QQ.extendsId || DQ.has(QQ.extendsId)) {
            DQ.add(QQ.id), LQ.types.push(QQ);
            const FQ = kQ[QQ.id];
            void 0 !== FQ && (delete kQ[QQ.id], FQ.forEach((QQ => vQ(QQ))))
          } else void 0 === kQ[QQ.extendsId] && (kQ[QQ.extendsId] = []), kQ[QQ.extendsId].push(QQ)
        };
      wQ.schemas.forEach(((QQ, FQ) => {
        const LQ = new BL;
        LQ.id = Number(QQ);
        const qQ = Object.getPrototypeOf(FQ);
        qQ !== rL && (LQ.extendsId = wQ.schemas.get(qQ));
        const oQ = FQ[Symbol.metadata];
        if (oQ !== qQ[Symbol.metadata]) {
          const QQ = oQ[RQ] ?? -1;
          for (let FQ = 0; FQ <= QQ; FQ++) {
            const QQ = oQ[FQ];
            if (void 0 === QQ) continue;
            const qQ = QQ.name;
            if (!Object.prototype.hasOwnProperty.call(oQ, qQ)) continue;
            const DQ = new yL;
            let kQ;
            if (DQ.name = qQ, "string" === typeof QQ.type) kQ = QQ.type;
            else if (zF(QQ.type)) {
              const FQ = QQ.type.quantized;
              kQ = "quantized";
              const wQ = new ZL;
              wQ.min = FQ.min, wQ.max = FQ.max, wQ.bits = FQ.bits, wQ.mode = FQ.wrap ? 1 : 0, DQ.quantized = wQ
            } else {
              let FQ;
              rL.is(QQ.type) ? (kQ = "ref", FQ = QQ.type) : (kQ = Object.keys(QQ.type)[0], "string" === typeof QQ.type[kQ] ? DQ.childPrimitive = QQ.type[kQ] : FQ = QQ.type[kQ]), DQ.referencedType = FQ ? wQ.getTypeId(FQ) : -1
            }
            DQ.type = kQ, LQ.fields.push(DQ)
          }
        }
        vQ(LQ)
      }));
      for (const mQ in kQ) kQ[mQ].forEach((QQ => LQ.types.push(QQ)));
      return qQ.encodeAll(FQ).slice(0, FQ.offset)
    }, dL.decode = function(QQ, FQ) {
      const wQ = new dL;
      new PL(wQ).decode(QQ, FQ);
      const LQ = new XF;
      wQ.types.forEach((QQ => {
        const FQ = LQ.get(QQ.extendsId) ?? rL,
          wQ = class extends FQ {};
        XF.register(wQ), LQ.add(wQ, QQ.id)
      }), {});
      wQ.types.forEach((QQ => {
        const FQ = LQ.get(QQ.id),
          qQ = gF.initialize(FQ),
          oQ = [];
        let DQ = QQ;
        do {
          oQ.push(DQ), DQ = wQ.types.find((QQ => QQ.id === DQ.extendsId))
        } while (DQ);
        let kQ = 0;
        oQ.reverse().forEach((QQ => {
          ((QQ, FQ, wQ) => {
            FQ.fields.forEach(((FQ, qQ) => {
              const oQ = wQ + qQ;
              if (void 0 !== FQ.quantized) {
                const wQ = FQ.quantized;
                gF.addField(QQ, oQ, FQ.name, {
                  quantized: KF({
                    min: wQ.min,
                    max: wQ.max,
                    bits: wQ.bits,
                    mode: 1 === wQ.mode ? "wrap" : "clamp"
                  })
                })
              } else if (void 0 !== FQ.referencedType) {
                const wQ = FQ.type,
                  qQ = LQ.get(FQ.referencedType) ?? FQ.childPrimitive;
                "ref" === wQ ? gF.addField(QQ, oQ, FQ.name, qQ) : gF.addField(QQ, oQ, FQ.name, {
                  [wQ]: qQ
                })
              } else gF.addField(QQ, oQ, FQ.name, FQ.type)
            }))
          })(qQ, QQ, kQ), kQ += QQ.fields.length
        }))
      }));
      const qQ = new(LQ.get(wQ.rootType || 0));
      return new PL(qQ, LQ)
    }, dL.makeEncodable = function(QQ) {
      const FQ = QQ[Symbol.metadata];
      if (!FQ) return QQ;
      const wQ = FQ[RQ];
      if (void 0 === wQ) return QQ;
      for (let LQ = 0; LQ <= wQ; LQ++) {
        const wQ = FQ[LQ];
        wQ && gF.defineField(QQ, FQ, LQ, wQ.name, wQ.type)
      }
      return Object.prototype.hasOwnProperty.call(QQ, iQ) && delete QQ[iQ], QQ
    };
    class wq {
      PY;
      uniqueRefIds = new Set;
      isTriggering = !1;
      constructor(QQ) {
        this.PY = QQ, this.PY.qN = this.qN.bind(this)
      }
      get callbacks() {
        return this.PY.root.callbacks
      }
      get state() {
        return this.PY.state
      }
      addCallback(QQ, FQ, wQ) {
        return this.PY.root.addCallback(QQ, FQ, wQ)
      }
      addCallbackOrWaitCollectionAvailable(QQ, FQ, wQ, LQ) {
        let oQ = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4],
          DQ = () => {};
        const vQ = () => DQ(),
          mQ = QQ[FQ];
        if (mQ && void 0 !== mQ[kQ]) return oQ = oQ && !1 === this.isTriggering, wQ === qQ.ADD && oQ && mQ.forEach(((QQ, FQ) => {
          LQ(QQ, FQ)
        })), this.addCallback(mQ[kQ], wQ, LQ);
        {
          let qQ;
          return qQ = this.addCallback(QQ[kQ], FQ, ((QQ, FQ) => {
            null !== QQ && void 0 !== QQ && (qQ(), DQ = this.addCallback(QQ[kQ], wQ, LQ))
          })), DQ = qQ, vQ
        }
      }
      listen() {
        return "string" === typeof(arguments.length <= 0 ? void 0 : arguments[0]) ? this.listenInstance(this.state, arguments.length <= 0 ? void 0 : arguments[0], arguments.length <= 1 ? void 0 : arguments[1], arguments.length <= 2 ? void 0 : arguments[2]) : this.listenInstance(arguments.length <= 0 ? void 0 : arguments[0], arguments.length <= 1 ? void 0 : arguments[1], arguments.length <= 2 ? void 0 : arguments[2], arguments.length <= 3 ? void 0 : arguments[3])
      }
      listenInstance(QQ, FQ, wQ) {
        let LQ = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
        LQ = LQ && !1 === this.isTriggering;
        const qQ = QQ[FQ];
        return LQ && null !== qQ && void 0 !== qQ && wQ(qQ, void 0), this.addCallback(QQ[kQ], FQ, wQ)
      }
      onChange() {
        if (2 === arguments.length && "string" !== typeof(arguments.length <= 0 ? void 0 : arguments[0])) {
          const QQ = arguments.length <= 0 ? void 0 : arguments[0],
            FQ = arguments.length <= 1 ? void 0 : arguments[1];
          return this.addCallback(QQ[kQ], qQ.REPLACE, FQ)
        }
        return "string" === typeof(arguments.length <= 0 ? void 0 : arguments[0]) ? this.addCallbackOrWaitCollectionAvailable(this.state, arguments.length <= 0 ? void 0 : arguments[0], qQ.REPLACE, arguments.length <= 1 ? void 0 : arguments[1]) : this.addCallbackOrWaitCollectionAvailable(arguments.length <= 0 ? void 0 : arguments[0], arguments.length <= 1 ? void 0 : arguments[1], qQ.REPLACE, arguments.length <= 2 ? void 0 : arguments[2])
      }
      uC() {
        return "string" === typeof(arguments.length <= 0 ? void 0 : arguments[0]) ? this.addCallbackOrWaitCollectionAvailable(this.state, arguments.length <= 0 ? void 0 : arguments[0], qQ.ADD, arguments.length <= 1 ? void 0 : arguments[1], !1 !== (arguments.length <= 2 ? void 0 : arguments[2])) : this.addCallbackOrWaitCollectionAvailable(arguments.length <= 0 ? void 0 : arguments[0], arguments.length <= 1 ? void 0 : arguments[1], qQ.ADD, arguments.length <= 2 ? void 0 : arguments[2], !1 !== (arguments.length <= 3 ? void 0 : arguments[3]))
      }
      rU() {
        return "string" === typeof(arguments.length <= 0 ? void 0 : arguments[0]) ? this.addCallbackOrWaitCollectionAvailable(this.state, arguments.length <= 0 ? void 0 : arguments[0], qQ.DELETE, arguments.length <= 1 ? void 0 : arguments[1]) : this.addCallbackOrWaitCollectionAvailable(arguments.length <= 0 ? void 0 : arguments[0], arguments.length <= 1 ? void 0 : arguments[1], qQ.DELETE, arguments.length <= 2 ? void 0 : arguments[2])
      }
      bindTo(QQ, FQ, wQ) {
        let LQ = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
        const oQ = QQ.constructor[Symbol.metadata];
        wQ || (wQ = Object.keys(oQ).filter((QQ => !isNaN(Number(QQ)))).map((QQ => oQ[QQ].name)));
        const DQ = () => {
          for (const LQ of wQ) {
            const wQ = QQ[LQ];
            void 0 !== wQ && (FQ[LQ] = wQ)
          }
        };
        return LQ && DQ(), this.addCallback(QQ[kQ], qQ.REPLACE, DQ)
      }
      qN(QQ) {
        this.uniqueRefIds.clear(), this.isTriggering = !0;
        for (let FQ = 0, wQ = QQ.length; FQ < wQ; FQ++) {
          const wQ = QQ[FQ],
            LQ = wQ.refId,
            oQ = wQ.ref,
            DQ = this.callbacks[LQ];
          if (DQ) {
            if ((wQ.op & qQ.DELETE) === qQ.DELETE && rL.isSchema(wQ.previousValue)) {
              const QQ = wQ.previousValue[kQ],
                FQ = this.callbacks[QQ]?.[qQ.DELETE];
              if (FQ)
                for (let wQ = FQ.length - 1; wQ >= 0; wQ--) try {
                  FQ[wQ]()
                } catch (Dq) {
                  console.error(Dq)
                }
            }
            if (rL.isSchema(oQ)) {
              if (!this.uniqueRefIds.has(LQ)) {
                const QQ = DQ[qQ.REPLACE];
                if (QQ)
                  for (let FQ = QQ.length - 1; FQ >= 0; FQ--) try {
                    QQ[FQ]()
                  } catch (Dq) {
                    console.error(Dq)
                  }
              }
              const QQ = DQ[wQ.field];
              if (QQ)
                for (let FQ = QQ.length - 1; FQ >= 0; FQ--) try {
                  QQ[FQ](wQ.value, wQ.previousValue)
                } catch (Dq) {
                  console.error(Dq)
                }
            } else {
              const QQ = wQ.dynamicIndex ?? wQ.field;
              if ((wQ.op & qQ.DELETE) === qQ.DELETE) {
                if (void 0 !== wQ.previousValue) {
                  const FQ = DQ[qQ.DELETE];
                  if (FQ)
                    for (let LQ = FQ.length - 1; LQ >= 0; LQ--) try {
                      FQ[LQ](wQ.previousValue, QQ)
                    } catch (Dq) {
                      console.error(Dq)
                    }
                }
                if ((wQ.op & qQ.ADD) === qQ.ADD) {
                  const FQ = DQ[qQ.ADD];
                  if (FQ)
                    for (let LQ = FQ.length - 1; LQ >= 0; LQ--) try {
                      FQ[LQ](wQ.value, QQ)
                    } catch (Dq) {
                      console.error(Dq)
                    }
                }
              } else if ((wQ.op & qQ.ADD) === qQ.ADD && wQ.previousValue !== wQ.value) {
                const FQ = DQ[qQ.ADD];
                if (FQ)
                  for (let LQ = FQ.length - 1; LQ >= 0; LQ--) try {
                    FQ[LQ](wQ.value, QQ)
                  } catch (Dq) {
                    console.error(Dq)
                  }
              }
              if (wQ.value !== wQ.previousValue) {
                const FQ = DQ[qQ.REPLACE];
                if (FQ)
                  for (let LQ = FQ.length - 1; LQ >= 0; LQ--) try {
                    FQ[LQ](QQ, wQ.value)
                  } catch (Dq) {
                    console.error(Dq)
                  }
              }
            }
            this.uniqueRefIds.add(LQ)
          }
        }
        this.isTriggering = !1
      }
    }
    const Lq = {
      get(QQ) {
        if (QQ instanceof PL) return new wq(QQ);
        if ("PY" in QQ.mG) return new wq(QQ.mG.PY);
        throw new Error("Invalid room or decoder")
      },
      getLegacy(QQ) {
        if (QQ instanceof PL) return Qq(QQ);
        if ("PY" in QQ.mG) return Qq(QQ.mG.PY);
        throw new Error("Invalid room or decoder")
      },
      getRawChanges: (QQ, FQ) => Fq(QQ, FQ)
    };
    class qq {
      _free = [];
      _factory;
      _maxSize;
      constructor(QQ) {
        let FQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        this._factory = QQ, this._maxSize = FQ.maxSize ?? 1 / 0;
        const wQ = FQ.preallocate ?? 0;
        for (let LQ = 0; LQ < wQ; LQ++) this._free.push(QQ())
      }
      acquire() {
        return this._free.length > 0 ? this._free.pop() : this._factory()
      }
      release(QQ) {
        rL.reset(QQ), this._free.length < this._maxSize && this._free.push(QQ)
      }
      get size() {
        return this._free.length
      }
    }

    function oq(QQ) {
      return new qq((() => new QQ), arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {})
    }
    CF("map", {
      constructor: oL
    }), CF("array", {
      constructor: LL
    }), CF("set", {
      constructor: kL
    }), CF("collection", {
      constructor: DL
    })
  },
  8849: (QQ, FQ, wQ) => {
    wQ.r(FQ), wQ.d(FQ, {
      __addDisposableResource: () => zQ,
      __assign: () => oQ,
      __asyncDelegator: () => WQ,
      __asyncGenerator: () => iQ,
      __asyncValues: () => RQ,
      __await: () => SQ,
      __awaiter: () => xQ,
      __classPrivateFieldGet: () => NQ,
      __classPrivateFieldIn: () => KQ,
      __classPrivateFieldSet: () => TQ,
      __createBinding: () => tQ,
      __decorate: () => kQ,
      __disposeResources: () => jQ,
      __esDecorate: () => mQ,
      __exportStar: () => eQ,
      __extends: () => qQ,
      __generator: () => AQ,
      __importDefault: () => UQ,
      __importStar: () => IQ,
      __makeTemplateObject: () => OQ,
      __metadata: () => YQ,
      __param: () => vQ,
      __propKey: () => HQ,
      __read: () => GQ,
      __rest: () => DQ,
      __rewriteRelativeImportExtension: () => aQ,
      __runInitializers: () => uQ,
      __setFunctionName: () => bQ,
      __spread: () => pQ,
      __spreadArray: () => CQ,
      __spreadArrays: () => cQ,
      __values: () => MQ,
      default: () => XQ
    });
    var LQ = function(QQ, FQ) {
      return LQ = Object.setPrototypeOf || {
        __proto__: []
      }
      instanceof Array && function(QQ, FQ) {
        QQ.__proto__ = FQ
      } || function(QQ, FQ) {
        for (var wQ in FQ) Object.prototype.hasOwnProperty.call(FQ, wQ) && (QQ[wQ] = FQ[wQ])
      }, LQ(QQ, FQ)
    };

    function qQ(QQ, FQ) {
      if ("function" !== typeof FQ && null !== FQ) throw new TypeError("Class extends value " + String(FQ) + " is not a constructor or null");

      function wQ() {
        this.constructor = QQ
      }
      LQ(QQ, FQ), QQ.prototype = null === FQ ? Object.create(FQ) : (wQ.prototype = FQ.prototype, new wQ)
    }
    var oQ = function() {
      return oQ = Object.assign || function(QQ) {
        for (var FQ, wQ = 1, LQ = arguments.length; wQ < LQ; wQ++)
          for (var qQ in FQ = arguments[wQ]) Object.prototype.hasOwnProperty.call(FQ, qQ) && (QQ[qQ] = FQ[qQ]);
        return QQ
      }, oQ.apply(this, arguments)
    };

    function DQ(QQ, FQ) {
      var wQ = {};
      for (var LQ in QQ) Object.prototype.hasOwnProperty.call(QQ, LQ) && FQ.indexOf(LQ) < 0 && (wQ[LQ] = QQ[LQ]);
      if (null != QQ && "function" === typeof Object.getOwnPropertySymbols) {
        var qQ = 0;
        for (LQ = Object.getOwnPropertySymbols(QQ); qQ < LQ.length; qQ++) FQ.indexOf(LQ[qQ]) < 0 && Object.prototype.propertyIsEnumerable.call(QQ, LQ[qQ]) && (wQ[LQ[qQ]] = QQ[LQ[qQ]])
      }
      return wQ
    }

    function kQ(QQ, FQ, wQ, LQ) {
      var qQ, oQ = arguments.length,
        DQ = oQ < 3 ? FQ : null === LQ ? LQ = Object.getOwnPropertyDescriptor(FQ, wQ) : LQ;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) DQ = Reflect.decorate(QQ, FQ, wQ, LQ);
      else
        for (var kQ = QQ.length - 1; kQ >= 0; kQ--)(qQ = QQ[kQ]) && (DQ = (oQ < 3 ? qQ(DQ) : oQ > 3 ? qQ(FQ, wQ, DQ) : qQ(FQ, wQ)) || DQ);
      return oQ > 3 && DQ && Object.defineProperty(FQ, wQ, DQ), DQ
    }

    function vQ(QQ, FQ) {
      return function(wQ, LQ) {
        FQ(wQ, LQ, QQ)
      }
    }

    function mQ(QQ, FQ, wQ, LQ, qQ, oQ) {
      function DQ(QQ) {
        if (void 0 !== QQ && "function" !== typeof QQ) throw new TypeError("Function expected");
        return QQ
      }
      for (var kQ, vQ = LQ.kind, mQ = "getter" === vQ ? "get" : "setter" === vQ ? "set" : "value", uQ = !FQ && QQ ? LQ.static ? QQ : QQ.prototype : null, HQ = FQ || (uQ ? Object.getOwnPropertyDescriptor(uQ, LQ.name) : {}), bQ = !1, YQ = wQ.length - 1; YQ >= 0; YQ--) {
        var xQ = {};
        for (var AQ in LQ) xQ[AQ] = "access" === AQ ? {} : LQ[AQ];
        for (var AQ in LQ.access) xQ.access[AQ] = LQ.access[AQ];
        xQ.addInitializer = function(QQ) {
          if (bQ) throw new TypeError("Cannot add initializers after decoration has completed");
          oQ.push(DQ(QQ || null))
        };
        var tQ = (0, wQ[YQ])("accessor" === vQ ? {
          get: HQ.get,
          set: HQ.set
        } : HQ[mQ], xQ);
        if ("accessor" === vQ) {
          if (void 0 === tQ) continue;
          if (null === tQ || "object" !== typeof tQ) throw new TypeError("Object expected");
          (kQ = DQ(tQ.get)) && (HQ.get = kQ), (kQ = DQ(tQ.set)) && (HQ.set = kQ), (kQ = DQ(tQ.init)) && qQ.unshift(kQ)
        } else(kQ = DQ(tQ)) && ("field" === vQ ? qQ.unshift(kQ) : HQ[mQ] = kQ)
      }
      uQ && Object.defineProperty(uQ, LQ.name, HQ), bQ = !0
    }

    function uQ(QQ, FQ, wQ) {
      for (var LQ = arguments.length > 2, qQ = 0; qQ < FQ.length; qQ++) wQ = LQ ? FQ[qQ].call(QQ, wQ) : FQ[qQ].call(QQ);
      return LQ ? wQ : void 0
    }

    function HQ(QQ) {
      return "symbol" === typeof QQ ? QQ : "".concat(QQ)
    }

    function bQ(QQ, FQ, wQ) {
      return "symbol" === typeof FQ && (FQ = FQ.description ? "[".concat(FQ.description, "]") : ""), Object.defineProperty(QQ, "name", {
        configurable: !0,
        value: wQ ? "".concat(wQ, " ", FQ) : FQ
      })
    }

    function YQ(QQ, FQ) {
      if ("object" === typeof Reflect && "function" === typeof Reflect.metadata) return Reflect.metadata(QQ, FQ)
    }

    function xQ(QQ, FQ, wQ, LQ) {
      return new(wQ || (wQ = Promise))((function(qQ, oQ) {
        function DQ(QQ) {
          try {
            vQ(LQ.next(QQ))
          } catch (FQ) {
            oQ(FQ)
          }
        }

        function kQ(QQ) {
          try {
            vQ(LQ.throw(QQ))
          } catch (FQ) {
            oQ(FQ)
          }
        }

        function vQ(QQ) {
          var FQ;
          QQ.done ? qQ(QQ.value) : (FQ = QQ.value, FQ instanceof wQ ? FQ : new wQ((function(QQ) {
            QQ(FQ)
          }))).then(DQ, kQ)
        }
        vQ((LQ = LQ.apply(QQ, FQ || [])).next())
      }))
    }

    function AQ(QQ, FQ) {
      var wQ, LQ, qQ, oQ = {
          label: 0,
          sent: function() {
            if (1 & qQ[0]) throw qQ[1];
            return qQ[1]
          },
          trys: [],
          ops: []
        },
        DQ = Object.create(("function" === typeof Iterator ? Iterator : Object).prototype);
      return DQ.next = kQ(0), DQ.throw = kQ(1), DQ.return = kQ(2), "function" === typeof Symbol && (DQ[Symbol.iterator] = function() {
        return this
      }), DQ;

      function kQ(kQ) {
        return function(vQ) {
          return function(kQ) {
            if (wQ) throw new TypeError("Generator is already executing.");
            for (; DQ && (DQ = 0, kQ[0] && (oQ = 0)), oQ;) try {
              if (wQ = 1, LQ && (qQ = 2 & kQ[0] ? LQ.return : kQ[0] ? LQ.throw || ((qQ = LQ.return) && qQ.call(LQ), 0) : LQ.next) && !(qQ = qQ.call(LQ, kQ[1])).done) return qQ;
              switch (LQ = 0, qQ && (kQ = [2 & kQ[0], qQ.value]), kQ[0]) {
                case 0:
                case 1:
                  qQ = kQ;
                  break;
                case 4:
                  return oQ.label++, {
                    value: kQ[1],
                    done: !1
                  };
                case 5:
                  oQ.label++, LQ = kQ[1], kQ = [0];
                  continue;
                case 7:
                  kQ = oQ.ops.pop(), oQ.trys.pop();
                  continue;
                default:
                  if (!(qQ = (qQ = oQ.trys).length > 0 && qQ[qQ.length - 1]) && (6 === kQ[0] || 2 === kQ[0])) {
                    oQ = 0;
                    continue
                  }
                  if (3 === kQ[0] && (!qQ || kQ[1] > qQ[0] && kQ[1] < qQ[3])) {
                    oQ.label = kQ[1];
                    break
                  }
                  if (6 === kQ[0] && oQ.label < qQ[1]) {
                    oQ.label = qQ[1], qQ = kQ;
                    break
                  }
                  if (qQ && oQ.label < qQ[2]) {
                    oQ.label = qQ[2], oQ.ops.push(kQ);
                    break
                  }
                  qQ[2] && oQ.ops.pop(), oQ.trys.pop();
                  continue
              }
              kQ = FQ.call(QQ, oQ)
            } catch (vQ) {
              kQ = [6, vQ], LQ = 0
            } finally {
              wQ = qQ = 0
            }
            if (5 & kQ[0]) throw kQ[1];
            return {
              value: kQ[0] ? kQ[1] : void 0,
              done: !0
            }
          }([kQ, vQ])
        }
      }
    }
    var tQ = Object.create ? function(QQ, FQ, wQ, LQ) {
      void 0 === LQ && (LQ = wQ);
      var qQ = Object.getOwnPropertyDescriptor(FQ, wQ);
      qQ && !("get" in qQ ? !FQ.__esModule : qQ.writable || qQ.configurable) || (qQ = {
        enumerable: !0,
        get: function() {
          return FQ[wQ]
        }
      }), Object.defineProperty(QQ, LQ, qQ)
    } : function(QQ, FQ, wQ, LQ) {
      void 0 === LQ && (LQ = wQ), QQ[LQ] = FQ[wQ]
    };

    function eQ(QQ, FQ) {
      for (var wQ in QQ) "default" === wQ || Object.prototype.hasOwnProperty.call(FQ, wQ) || tQ(FQ, QQ, wQ)
    }

    function MQ(QQ) {
      var FQ = "function" === typeof Symbol && Symbol.iterator,
        wQ = FQ && QQ[FQ],
        LQ = 0;
      if (wQ) return wQ.call(QQ);
      if (QQ && "number" === typeof QQ.length) return {
        next: function() {
          return QQ && LQ >= QQ.length && (QQ = void 0), {
            value: QQ && QQ[LQ++],
            done: !QQ
          }
        }
      };
      throw new TypeError(FQ ? "Object is not iterable." : "Symbol.iterator is not defined.")
    }

    function GQ(QQ, FQ) {
      var wQ = "function" === typeof Symbol && QQ[Symbol.iterator];
      if (!wQ) return QQ;
      var LQ, qQ, oQ = wQ.call(QQ),
        DQ = [];
      try {
        for (;
          (void 0 === FQ || FQ-- > 0) && !(LQ = oQ.next()).done;) DQ.push(LQ.value)
      } catch (kQ) {
        qQ = {
          error: kQ
        }
      } finally {
        try {
          LQ && !LQ.done && (wQ = oQ.return) && wQ.call(oQ)
        } finally {
          if (qQ) throw qQ.error
        }
      }
      return DQ
    }

    function pQ() {
      for (var QQ = [], FQ = 0; FQ < arguments.length; FQ++) QQ = QQ.concat(GQ(arguments[FQ]));
      return QQ
    }

    function cQ() {
      for (var QQ = 0, FQ = 0, wQ = arguments.length; FQ < wQ; FQ++) QQ += arguments[FQ].length;
      var LQ = Array(QQ),
        qQ = 0;
      for (FQ = 0; FQ < wQ; FQ++)
        for (var oQ = arguments[FQ], DQ = 0, kQ = oQ.length; DQ < kQ; DQ++, qQ++) LQ[qQ] = oQ[DQ];
      return LQ
    }

    function CQ(QQ, FQ, wQ) {
      if (wQ || 2 === arguments.length)
        for (var LQ, qQ = 0, oQ = FQ.length; qQ < oQ; qQ++) !LQ && qQ in FQ || (LQ || (LQ = Array.prototype.slice.call(FQ, 0, qQ)), LQ[qQ] = FQ[qQ]);
      return QQ.concat(LQ || Array.prototype.slice.call(FQ))
    }

    function SQ(QQ) {
      return this instanceof SQ ? (this.v = QQ, this) : new SQ(QQ)
    }

    function iQ(QQ, FQ, wQ) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var LQ, qQ = wQ.apply(QQ, FQ || []),
        oQ = [];
      return LQ = Object.create(("function" === typeof AsyncIterator ? AsyncIterator : Object).prototype), DQ("next"), DQ("throw"), DQ("return", (function(QQ) {
        return function(FQ) {
          return Promise.resolve(FQ).then(QQ, mQ)
        }
      })), LQ[Symbol.asyncIterator] = function() {
        return this
      }, LQ;

      function DQ(QQ, FQ) {
        qQ[QQ] && (LQ[QQ] = function(FQ) {
          return new Promise((function(wQ, LQ) {
            oQ.push([QQ, FQ, wQ, LQ]) > 1 || kQ(QQ, FQ)
          }))
        }, FQ && (LQ[QQ] = FQ(LQ[QQ])))
      }

      function kQ(QQ, FQ) {
        try {
          (wQ = qQ[QQ](FQ)).value instanceof SQ ? Promise.resolve(wQ.value.v).then(vQ, mQ) : uQ(oQ[0][2], wQ)
        } catch (LQ) {
          uQ(oQ[0][3], LQ)
        }
        var wQ
      }

      function vQ(QQ) {
        kQ("next", QQ)
      }

      function mQ(QQ) {
        kQ("throw", QQ)
      }

      function uQ(QQ, FQ) {
        QQ(FQ), oQ.shift(), oQ.length && kQ(oQ[0][0], oQ[0][1])
      }
    }

    function WQ(QQ) {
      var FQ, wQ;
      return FQ = {}, LQ("next"), LQ("throw", (function(QQ) {
        throw QQ
      })), LQ("return"), FQ[Symbol.iterator] = function() {
        return this
      }, FQ;

      function LQ(LQ, qQ) {
        FQ[LQ] = QQ[LQ] ? function(FQ) {
          return (wQ = !wQ) ? {
            value: SQ(QQ[LQ](FQ)),
            done: !1
          } : qQ ? qQ(FQ) : FQ
        } : qQ
      }
    }

    function RQ(QQ) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var FQ, wQ = QQ[Symbol.asyncIterator];
      return wQ ? wQ.call(QQ) : (QQ = MQ(QQ), FQ = {}, LQ("next"), LQ("throw"), LQ("return"), FQ[Symbol.asyncIterator] = function() {
        return this
      }, FQ);

      function LQ(wQ) {
        FQ[wQ] = QQ[wQ] && function(FQ) {
          return new Promise((function(LQ, qQ) {
            (function(QQ, FQ, wQ, LQ) {
              Promise.resolve(LQ).then((function(FQ) {
                QQ({
                  value: FQ,
                  done: wQ
                })
              }), FQ)
            })(LQ, qQ, (FQ = QQ[wQ](FQ)).done, FQ.value)
          }))
        }
      }
    }

    function OQ(QQ, FQ) {
      return Object.defineProperty ? Object.defineProperty(QQ, "raw", {
        value: FQ
      }) : QQ.raw = FQ, QQ
    }
    var sQ = Object.create ? function(QQ, FQ) {
        Object.defineProperty(QQ, "default", {
          enumerable: !0,
          value: FQ
        })
      } : function(QQ, FQ) {
        QQ.default = FQ
      },
      rQ = function(QQ) {
        return rQ = Object.getOwnPropertyNames || function(QQ) {
          var FQ = [];
          for (var wQ in QQ) Object.prototype.hasOwnProperty.call(QQ, wQ) && (FQ[FQ.length] = wQ);
          return FQ
        }, rQ(QQ)
      };

    function IQ(QQ) {
      if (QQ && QQ.__esModule) return QQ;
      var FQ = {};
      if (null != QQ)
        for (var wQ = rQ(QQ), LQ = 0; LQ < wQ.length; LQ++) "default" !== wQ[LQ] && tQ(FQ, QQ, wQ[LQ]);
      return sQ(FQ, QQ), FQ
    }

    function UQ(QQ) {
      return QQ && QQ.__esModule ? QQ : {
        default: QQ
      }
    }

    function NQ(QQ, FQ, wQ, LQ) {
      if ("a" === wQ && !LQ) throw new TypeError("Private accessor was defined without a getter");
      if ("function" === typeof FQ ? QQ !== FQ || !LQ : !FQ.has(QQ)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
      return "m" === wQ ? LQ : "a" === wQ ? LQ.call(QQ) : LQ ? LQ.value : FQ.get(QQ)
    }

    function TQ(QQ, FQ, wQ, LQ, qQ) {
      if ("m" === LQ) throw new TypeError("Private method is not writable");
      if ("a" === LQ && !qQ) throw new TypeError("Private accessor was defined without a setter");
      if ("function" === typeof FQ ? QQ !== FQ || !qQ : !FQ.has(QQ)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
      return "a" === LQ ? qQ.call(QQ, wQ) : qQ ? qQ.value = wQ : FQ.set(QQ, wQ), wQ
    }

    function KQ(QQ, FQ) {
      if (null === FQ || "object" !== typeof FQ && "function" !== typeof FQ) throw new TypeError("Cannot use 'in' operator on non-object");
      return "function" === typeof QQ ? FQ === QQ : QQ.has(FQ)
    }

    function zQ(QQ, FQ, wQ) {
      if (null !== FQ && void 0 !== FQ) {
        if ("object" !== typeof FQ && "function" !== typeof FQ) throw new TypeError("Object expected.");
        var LQ, qQ;
        if (wQ) {
          if (!Symbol.asyncDispose) throw new TypeError("Symbol.asyncDispose is not defined.");
          LQ = FQ[Symbol.asyncDispose]
        }
        if (void 0 === LQ) {
          if (!Symbol.dispose) throw new TypeError("Symbol.dispose is not defined.");
          LQ = FQ[Symbol.dispose], wQ && (qQ = LQ)
        }
        if ("function" !== typeof LQ) throw new TypeError("Object not disposable.");
        qQ && (LQ = function() {
          try {
            qQ.call(this)
          } catch (QQ) {
            return Promise.reject(QQ)
          }
        }), QQ.stack.push({
          value: FQ,
          dispose: LQ,
          async: wQ
        })
      } else wQ && QQ.stack.push({
        async: !0
      });
      return FQ
    }
    var lQ = "function" === typeof SuppressedError ? SuppressedError : function(QQ, FQ, wQ) {
      var LQ = new Error(wQ);
      return LQ.name = "SuppressedError", LQ.error = QQ, LQ.suppressed = FQ, LQ
    };

    function jQ(QQ) {
      function FQ(FQ) {
        QQ.error = QQ.hasError ? new lQ(FQ, QQ.error, "An error was suppressed during disposal.") : FQ, QQ.hasError = !0
      }
      var wQ, LQ = 0;
      return function qQ() {
        for (; wQ = QQ.stack.pop();) try {
          if (!wQ.async && 1 === LQ) return LQ = 0, QQ.stack.push(wQ), Promise.resolve().then(qQ);
          if (wQ.dispose) {
            var oQ = wQ.dispose.call(wQ.value);
            if (wQ.async) return LQ |= 2, Promise.resolve(oQ).then(qQ, (function(QQ) {
              return FQ(QQ), qQ()
            }))
          } else LQ |= 1
        } catch (DQ) {
          FQ(DQ)
        }
        if (1 === LQ) return QQ.hasError ? Promise.reject(QQ.error) : Promise.resolve();
        if (QQ.hasError) throw QQ.error
      }()
    }

    function aQ(QQ, FQ) {
      return "string" === typeof QQ && /^\.\.?\//.test(QQ) ? QQ.replace(/\.(tsx)$|((?:\.d)?)((?:\.[^./]+?)?)\.([cm]?)ts$/i, (function(QQ, wQ, LQ, qQ, oQ) {
        return wQ ? FQ ? ".jsx" : ".js" : !LQ || qQ && oQ ? LQ + qQ + "." + oQ.toLowerCase() + "js" : QQ
      })) : QQ
    }
    const XQ = {
      __extends: qQ,
      __assign: oQ,
      __rest: DQ,
      __decorate: kQ,
      __param: vQ,
      __esDecorate: mQ,
      __runInitializers: uQ,
      __propKey: HQ,
      __setFunctionName: bQ,
      __metadata: YQ,
      __awaiter: xQ,
      __generator: AQ,
      __createBinding: tQ,
      __exportStar: eQ,
      __values: MQ,
      __read: GQ,
      __spread: pQ,
      __spreadArrays: cQ,
      __spreadArray: CQ,
      __await: SQ,
      __asyncGenerator: iQ,
      __asyncDelegator: WQ,
      __asyncValues: RQ,
      __makeTemplateObject: OQ,
      __importStar: IQ,
      __importDefault: UQ,
      __classPrivateFieldGet: NQ,
      __classPrivateFieldSet: TQ,
      __classPrivateFieldIn: KQ,
      __addDisposableResource: zQ,
      __disposeResources: jQ,
      __rewriteRelativeImportExtension: aQ
    }
  }
};
Object.freeze(modules);
for (const QQ in modules) Object.freeze(modules[QQ]);