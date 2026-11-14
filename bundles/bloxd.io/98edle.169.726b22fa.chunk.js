export const id = 169;
export const ids = [169];
export const modules = {
  8044: (WW, RW) => {
    RW.discordURLBuilder = function(WW) {
      var RW;
      const MW = (null === (RW = null === window || void 0 === window ? void 0 : window.location) || void 0 === RW ? void 0 : RW.hostname) || "localhost",
        wW = WW.hostname.split("."),
        CW = !WW.hostname.includes("trycloudflare.com") && !WW.hostname.includes("discordsays.com") && wW.length > 2 ? `/${wW[0]}` : "";
      return WW.pathname.startsWith("/.proxy") ? `${WW.protocol}//${MW}${CW}${WW.pathname}${WW.search}` : `${WW.protocol}//${MW}/.proxy/colyseus${CW}${WW.pathname}${WW.search}`
    }
  },
  8034: (WW, RW, MW) => {
    var wW, CW, zR, AW, bR = MW(7949),
      yR = MW(8042),
      NW = MW(8007);
    wW = new WeakMap, CW = new WeakMap, zR = new WeakMap, AW = new WeakMap, RW.Auth = class {
      constructor(WW) {
        this.http = WW, this.settings = {
          path: "/auth",
          key: "colyseus-auth-token"
        }, wW.set(this, !1), CW.set(this, void 0), zR.set(this, void 0), AW.set(this, NW.createNanoEvents()), yR.getItem(this.settings.key, (WW => this.token = WW))
      }
      set token(WW) {
        this.http.authToken = WW
      }
      get token() {
        return this.http.authToken
      }
      onChange(WW) {
        const RW = bR.__classPrivateFieldGet(this, AW, "f").on("change", WW);
        return bR.__classPrivateFieldGet(this, wW, "f") || bR.__classPrivateFieldSet(this, CW, new Promise(((WW, RW) => {
          this.getUserData().then((WW => {
            this.emitChange(Object.assign(Object.assign({}, WW), {
              token: this.token
            }))
          })).catch((WW => {
            this.emitChange({
              user: null,
              token: void 0
            })
          })).finally((() => {
            WW()
          }))
        })), "f"), bR.__classPrivateFieldSet(this, wW, !0, "f"), RW
      }
      getUserData() {
        return bR.__awaiter(this, void 0, void 0, (function*() {
          if (this.token) return (yield this.http.get(`${this.settings.path}/userdata`)).data;
          throw new Error("missing auth.token")
        }))
      }
      registerWithEmailAndPassword(WW, RW, MW) {
        return bR.__awaiter(this, void 0, void 0, (function*() {
          const wW = (yield this.http.post(`${this.settings.path}/register`, {
            body: {
              email: WW,
              password: RW,
              options: MW
            }
          })).data;
          return this.emitChange(wW), wW
        }))
      }
      signInWithEmailAndPassword(WW, RW) {
        return bR.__awaiter(this, void 0, void 0, (function*() {
          const MW = (yield this.http.post(`${this.settings.path}/login`, {
            body: {
              email: WW,
              password: RW
            }
          })).data;
          return this.emitChange(MW), MW
        }))
      }
      signInAnonymously(WW) {
        return bR.__awaiter(this, void 0, void 0, (function*() {
          const RW = (yield this.http.post(`${this.settings.path}/anonymous`, {
            body: {
              options: WW
            }
          })).data;
          return this.emitChange(RW), RW
        }))
      }
      sendPasswordResetEmail(WW) {
        return bR.__awaiter(this, void 0, void 0, (function*() {
          return (yield this.http.post(`${this.settings.path}/forgot-password`, {
            body: {
              email: WW
            }
          })).data
        }))
      }
      signInWithProvider(WW) {
        return bR.__awaiter(this, arguments, void 0, (function*(WW) {
          let RW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          return new Promise(((MW, wW) => {
            const CW = RW.width || 480,
              AW = RW.height || 768,
              yR = this.token ? `?token=${this.token}` : "",
              NW = `Login with ${WW[0].toUpperCase()+WW.substring(1)}`,
              eW = this.http.client.getHttpEndpoint(`${RW.prefix||`${this.settings.path}/provider`}/${WW}${yR}`),
              BW = screen.width / 2 - CW / 2,
              tR = screen.height / 2 - AW / 2;
            bR.__classPrivateFieldSet(this, zR, window.open(eW, NW, "toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no, copyhistory=no, width=" + CW + ", height=" + AW + ", top=" + tR + ", left=" + BW), "f");
            const TW = WW => {
                void 0 === WW.data.user && void 0 === WW.data.token || (clearInterval(gR), bR.__classPrivateFieldGet(this, zR, "f").close(), bR.__classPrivateFieldSet(this, zR, void 0, "f"), window.removeEventListener("message", TW), void 0 !== WW.data.error ? wW(WW.data.error) : (MW(WW.data), this.emitChange(WW.data)))
              },
              gR = setInterval((() => {
                bR.__classPrivateFieldGet(this, zR, "f") && !bR.__classPrivateFieldGet(this, zR, "f").closed || (bR.__classPrivateFieldSet(this, zR, void 0, "f"), wW("JA"), window.removeEventListener("message", TW))
              }), 200);
            window.addEventListener("message", TW)
          }))
        }))
      }
      signOut() {
        return bR.__awaiter(this, void 0, void 0, (function*() {
          this.emitChange({
            user: null,
            token: null
          })
        }))
      }
      emitChange(WW) {
        void 0 !== WW.token && (this.token = WW.token, null === WW.token ? yR.removeItem(this.settings.key) : yR.setItem(this.settings.key, WW.token)), bR.__classPrivateFieldGet(this, AW, "f").emit("change", WW)
      }
    }
  },
  7947: (WW, RW, MW) => {
    var wW, CW = MW(7949),
      zR = MW(7955),
      AW = MW(7959),
      bR = MW(8025),
      yR = MW(8034),
      NW = MW(8044);
    class eW extends Error {
      constructor(WW, RW) {
        super(WW), this.code = RW, this.name = "MatchMakeError", Object.setPrototypeOf(this, eW.prototype)
      }
    }
    const BW = "undefined" !== typeof window && "undefined" !== typeof(null === (wW = null === window || void 0 === window ? void 0 : window.location) || void 0 === wW ? void 0 : wW.hostname) ? `${window.location.protocol.replace("http","ws")}//${window.location.hostname}${window.location.port&&`:${window.location.port}`}` : "ws://127.0.0.1:2567";
    class tR {
      constructor() {
        let WW = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : BW,
          RW = arguments.length > 1 ? arguments[1] : void 0;
        var MW, wW;
        if ("string" === typeof WW) {
          const RW = WW.startsWith("/") ? new URL(WW, BW) : new URL(WW),
            MW = "https:" === RW.protocol || "wss:" === RW.protocol,
            wW = Number(RW.port || (MW ? 443 : 80));
          this.settings = {
            hostname: RW.hostname,
            pathname: RW.pathname,
            port: wW,
            secure: MW,
            searchParams: RW.searchParams.toString() || void 0
          }
        } else void 0 === WW.port && (WW.port = WW.secure ? 443 : 80), void 0 === WW.pathname && (WW.pathname = ""), this.settings = WW;
        this.settings.pathname.endsWith("/") && (this.settings.pathname = this.settings.pathname.slice(0, -1)), this.http = new bR.HTTP(this, (null === RW || void 0 === RW ? void 0 : RW.headers) || {}), this.auth = new yR.Auth(this.http), this.urlBuilder = null === RW || void 0 === RW ? void 0 : RW.urlBuilder, !this.urlBuilder && "undefined" !== typeof window && (null === (wW = null === (MW = null === window || void 0 === window ? void 0 : window.location) || void 0 === MW ? void 0 : MW.hostname) || void 0 === wW ? void 0 : wW.includes("discordsays.com")) && (this.urlBuilder = NW.discordURLBuilder, console.log("Colyseus SDK: Discord Embedded SDK detected. Using custom URL builder."))
      }
      joinOrCreate(WW) {
        return CW.__awaiter(this, arguments, void 0, (function*(WW) {
          let RW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            MW = arguments.length > 2 ? arguments[2] : void 0;
          return yield this.createMatchMakeRequest("joinOrCreate", WW, RW, MW)
        }))
      }
      create(WW) {
        return CW.__awaiter(this, arguments, void 0, (function*(WW) {
          let RW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            MW = arguments.length > 2 ? arguments[2] : void 0;
          return yield this.createMatchMakeRequest("create", WW, RW, MW)
        }))
      }
      join(WW) {
        return CW.__awaiter(this, arguments, void 0, (function*(WW) {
          let RW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            MW = arguments.length > 2 ? arguments[2] : void 0;
          return yield this.createMatchMakeRequest("join", WW, RW, MW)
        }))
      }
      joinById(WW) {
        return CW.__awaiter(this, arguments, void 0, (function*(WW) {
          let RW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            MW = arguments.length > 2 ? arguments[2] : void 0;
          return yield this.createMatchMakeRequest("joinById", WW, RW, MW)
        }))
      }
      reconnect(WW, RW) {
        return CW.__awaiter(this, void 0, void 0, (function*() {
          if ("string" === typeof WW && "string" === typeof RW) throw new Error("DEPRECATED: .reconnect() now only accepts 'reconnectionToken' as argument.\nYou can get this token from previously connected `room.reconnectionToken`");
          const [MW, wW] = WW.split(":");
          if (!MW || !wW) throw new Error("Invalid reconnection token format.\nThe format should be roomId:reconnectionToken");
          return yield this.createMatchMakeRequest("reconnect", MW, {
            reconnectionToken: wW
          }, RW)
        }))
      }
      consumeSeatReservation(WW, RW, MW) {
        return CW.__awaiter(this, void 0, void 0, (function*() {
          const wW = this.createRoom(WW.room.name, RW);
          wW.roomId = WW.room.roomId, wW.sessionId = WW.sessionId;
          const AW = {
            sessionId: wW.sessionId
          };
          WW.reconnectionToken && (AW.reconnectionToken = WW.reconnectionToken);
          const bR = MW || wW;
          return wW.connect(this.buildEndpoint(WW.room, AW, WW.protocol), WW.devMode && (() => CW.__awaiter(this, void 0, void 0, (function*() {
            console.info(`[Colyseus devMode]: ${String.fromCodePoint(128260)} Re-establishing connection with room id '${wW.roomId}'...`);
            let MW = 0;
            const zR = () => CW.__awaiter(this, void 0, void 0, (function*() {
              MW++;
              try {
                yield this.consumeSeatReservation(WW, RW, bR), console.info(`[Colyseus devMode]: ${String.fromCodePoint(9989)} Successfully re-established connection with room '${wW.roomId}'`)
              } catch (CW) {
                MW < 8 ? (console.info(`[Colyseus devMode]: ${String.fromCodePoint(128260)} retrying... (${MW} out of 8)`), setTimeout(zR, 2e3)) : console.info(`[Colyseus devMode]: ${String.fromCodePoint(10060)} Failed to reconnect. Is your server running? Please check server logs.`)
              }
            }));
            setTimeout(zR, 2e3)
          }))), bR, WW, this.http.headers), new Promise(((WW, RW) => {
            const MW = (WW, MW) => RW(new zR.ServerError(WW, MW));
            bR.onError.once(MW), bR.onJoin.once((() => {
              bR.onError.remove(MW), setTimeout((() => {
                try {
                  const WW = [159, 95, 149, 191, 222, 99, 192, 18, 215, 232, 71, 156, 104, 24, 205, 184, 154, 162, 16, 62];
                  WW && bR.vU(128, new Uint8Array(WW))
                } catch {}
              }), 3e3), WW(bR)
            }))
          }))
        }))
      }
      createMatchMakeRequest(WW, RW) {
        return CW.__awaiter(this, arguments, void 0, (function*(WW, RW) {
          let MW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
            wW = arguments.length > 3 ? arguments[3] : void 0,
            CW = arguments.length > 4 ? arguments[4] : void 0;
          const zR = (yield this.http.post(`matchmake/${WW}/${RW}`, {
            headers: {
              "X-Requested-With": "XMLHtttpRequest",
              Accept: "application/json",
              "Content-Type": "application/json"
            },
            body: JSON.stringify(MW)
          })).data;
          if (zR.error) throw new eW(zR.error, zR.code);
          return "reconnect" === WW && (zR.reconnectionToken = MW.reconnectionToken), yield this.consumeSeatReservation(zR, wW, CW)
        }))
      }
      createRoom(WW, RW) {
        return new AW.HW(WW, RW)
      }
      buildEndpoint(WW) {
        let RW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          MW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "ws",
          wW = this.settings.searchParams || "";
        this.http.authToken && (RW._authToken = this.http.authToken);
        for (const AW in RW) RW.hasOwnProperty(AW) && (wW += (wW ? "&" : "") + `${AW}=${RW[AW]}`);
        "h3" === MW && (MW = "http");
        let CW = this.settings.secure ? `${MW}s://` : `${MW}://`;
        WW.publicAddress ? CW += `${WW.publicAddress}` : CW += `${this.settings.hostname}${this.getEndpointPort()}${this.settings.pathname}`;
        const zR = `${CW}/${WW.processId}/${WW.roomId}?${wW}`;
        return this.urlBuilder ? this.urlBuilder(new URL(zR)) : zR
      }
      getHttpEndpoint() {
        let WW = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
        const RW = WW.startsWith("/") ? WW : `/${WW}`;
        let MW = `${this.settings.secure?"https":"http"}://${this.settings.hostname}${this.getEndpointPort()}${this.settings.pathname}${RW}`;
        return this.settings.searchParams && (MW += `?${this.settings.searchParams}`), this.urlBuilder ? this.urlBuilder(new URL(MW)) : MW
      }
      getEndpointPort() {
        return 80 !== this.settings.port && 443 !== this.settings.port ? `:${this.settings.port}` : ""
      }
    }
    tR.VERSION = "0.16.22", RW.Client = tR, RW.MatchMakeError = eW
  },
  7967: (WW, RW, MW) => {
    var wW = MW(7969),
      CW = MW(7983);
    RW.Connection = class {
      constructor(WW) {
        if (this.events = {}, "h3" === WW) this.transport = new wW.H3TransportTransport(this.events);
        else this.transport = new CW.WebSocketTransport(this.events)
      }
      connect(WW, RW) {
        this.transport.connect.call(this.transport, WW, RW)
      }
      send(WW) {
        this.transport.send(WW)
      }
      sendUnreliable(WW) {
        this.transport.sendUnreliable(WW)
      }
      close(WW, RW) {
        this.transport.close(WW, RW)
      }
      get isOpen() {
        return this.transport.isOpen
      }
    }
  },
  8025: (WW, RW, MW) => {
    var wW = MW(7955);

    function CW(WW) {
      var RW = Object.create(null);
      return WW && Object.keys(WW).forEach((function(MW) {
        if ("default" !== MW) {
          var wW = Object.getOwnPropertyDescriptor(WW, MW);
          Object.defineProperty(RW, MW, wW.get ? wW : {
            enumerable: !0,
            get: function() {
              return WW[MW]
            }
          })
        }
      })), RW.default = WW, Object.freeze(RW)
    }
    var zR = CW(MW(8029));
    RW.HTTP = class {
      constructor(WW) {
        let RW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        this.client = WW, this.headers = RW
      }
      get(WW) {
        let RW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        return this.request("get", WW, RW)
      }
      post(WW) {
        let RW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        return this.request("post", WW, RW)
      }
      del(WW) {
        let RW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        return this.request("del", WW, RW)
      }
      put(WW) {
        let RW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        return this.request("put", WW, RW)
      }
      request(WW, RW) {
        let MW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        return zR[WW](this.client.getHttpEndpoint(RW), this.getOptions(MW)).catch((WW => {
          var RW;
          if (WW.aborted) throw new wW.AbortError("Request aborted");
          const MW = WW.statusCode,
            CW = (null === (RW = WW.data) || void 0 === RW ? void 0 : RW.error) || WW.statusMessage || WW.message;
          if (!MW && !CW) throw WW;
          throw new wW.ServerError(MW, CW)
        }))
      }
      getOptions(WW) {
        return WW.headers = Object.assign({}, this.headers, WW.headers), this.authToken && (WW.headers.Authorization = `Bearer ${this.authToken}`), "undefined" !== typeof cc && cc.sys && cc.sys.isNative || (WW.withCredentials = !0), WW
      }
    }
  },
  7995: (WW, RW) => {
    var MW, wW;
    RW.Protocol = void 0, (MW = RW.Protocol || (RW.Protocol = {}))[MW.HANDSHAKE = 9] = "HANDSHAKE", MW[MW.JOIN_ROOM = 10] = "JOIN_ROOM", MW[MW.ERROR = 11] = "ERROR", MW[MW.LEAVE_ROOM = 12] = "LEAVE_ROOM", MW[MW.ROOM_DATA = 13] = "ROOM_DATA", MW[MW.ROOM_STATE = 14] = "ROOM_STATE", MW[MW.ROOM_STATE_PATCH = 15] = "ROOM_STATE_PATCH", MW[MW.ROOM_DATA_SCHEMA = 16] = "ROOM_DATA_SCHEMA", MW[MW.ROOM_DATA_BYTES = 17] = "ROOM_DATA_BYTES", RW.ErrorCode = void 0, (wW = RW.ErrorCode || (RW.ErrorCode = {}))[wW.MATCHMAKE_NO_HANDLER = 4210] = "MATCHMAKE_NO_HANDLER", wW[wW.MATCHMAKE_INVALID_CRITERIA = 4211] = "MATCHMAKE_INVALID_CRITERIA", wW[wW.MATCHMAKE_INVALID_ROOM_ID = 4212] = "MATCHMAKE_INVALID_ROOM_ID", wW[wW.MATCHMAKE_UNHANDLED = 4213] = "MATCHMAKE_UNHANDLED", wW[wW.MATCHMAKE_EXPIRED = 4214] = "MATCHMAKE_EXPIRED", wW[wW.AUTH_FAILED = 4215] = "AUTH_FAILED", wW[wW.APPLICATION_ERROR = 4216] = "APPLICATION_ERROR"
  },
  7959: (WW, RW, MW) => {
    var wW = MW(7967),
      CW = MW(7995),
      zR = MW(8001),
      AW = MW(8007),
      bR = MW(8012),
      yR = MW(7975),
      NW = MW(8015),
      eW = MW(7955),
      BW = MW(8022);
    class tR {
      constructor(WW, RW) {
        this.onStateChange = bR.createSignal(), this.onError = bR.createSignal(), this.EX = bR.createSignal(), this.onJoin = bR.createSignal(), this.hasJoined = !1, this.onMessageHandlers = AW.createNanoEvents(), this.roomId = null, this.name = WW, this.packr = new BW.Packr, this.packr.encode(void 0), RW && (this.Uy = new(zR.getSerializer("schema")), this.rootSchema = RW, this.Uy.state = new RW), this.onError(((WW, RW) => {
          var MW;
          return null === (MW = console.warn) || void 0 === MW ? void 0 : MW.call(console, `colyseus.js - onError => (${WW}) ${RW}`)
        })), this.EX((() => this.aN()))
      }
      connect(WW, RW) {
        let MW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : this,
          CW = arguments.length > 3 ? arguments[3] : void 0,
          zR = arguments.length > 4 ? arguments[4] : void 0;
        const AW = new wW.Connection(CW.protocol);
        if (MW.connection = AW, AW.events.onmessage = tR.prototype.onMessageCallback.bind(MW), AW.events.onclose = function(WW) {
            var wW;
            if (!MW.hasJoined) return null === (wW = console.warn) || void 0 === wW || wW.call(console, `Room connection was closed unexpectedly (${WW.code}): ${WW.reason}`), void MW.onError.invoke(WW.code, WW.reason);
            WW.code === eW.CloseCode.DEVMODE_RESTART && RW ? RW() : (MW.EX.invoke(WW.code, WW.reason), MW.destroy())
          }, AW.events.onerror = function(WW) {
            var RW;
            null === (RW = console.warn) || void 0 === RW || RW.call(console, `Room, onError (${WW.code}): ${WW.reason}`), MW.onError.invoke(WW.code, WW.reason)
          }, "h3" === CW.protocol) {
          const RW = new URL(WW);
          AW.connect(RW.origin, CW)
        } else AW.connect(WW, zR)
      }
      Cw() {
        let WW = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
        return new Promise((RW => {
          this.EX((WW => RW(WW))), this.connection ? WW ? (this.packr.buffer[0] = CW.Protocol.LEAVE_ROOM, this.connection.send(this.packr.buffer.subarray(0, 1))) : this.connection.close() : this.EX.invoke(eW.CloseCode.CONSENTED)
        }))
      }
      FX(WW, RW) {
        return this.onMessageHandlers.on(this.getMessageHandlerKey(WW), RW)
      }
      send(WW, RW) {
        const MW = {
          offset: 1
        };
        this.packr.buffer[0] = CW.Protocol.ROOM_DATA, "string" === typeof WW ? yR.encode.string(this.packr.buffer, WW, MW) : yR.encode.number(this.packr.buffer, WW, MW), this.packr.position = 0;
        const wW = void 0 !== RW ? this.packr.pack(RW, 2048 + MW.offset) : this.packr.buffer.subarray(0, MW.offset);
        this.connection.send(wW)
      }
      sendUnreliable(WW, RW) {
        const MW = {
          offset: 1
        };
        this.packr.buffer[0] = CW.Protocol.ROOM_DATA, "string" === typeof WW ? yR.encode.string(this.packr.buffer, WW, MW) : yR.encode.number(this.packr.buffer, WW, MW), this.packr.position = 0;
        const wW = void 0 !== RW ? this.packr.pack(RW, 2048 + MW.offset) : this.packr.buffer.subarray(0, MW.offset);
        this.connection.sendUnreliable(wW)
      }
      vU(WW, RW) {
        const MW = {
          offset: 1
        };
        if (this.packr.buffer[0] = CW.Protocol.ROOM_DATA_BYTES, "string" === typeof WW ? yR.encode.string(this.packr.buffer, WW, MW) : yR.encode.number(this.packr.buffer, WW, MW), RW.byteLength + MW.offset > this.packr.buffer.byteLength) {
          const WW = new Uint8Array(MW.offset + RW.byteLength);
          WW.set(this.packr.buffer), this.packr.useBuffer(WW)
        }
        this.packr.buffer.set(RW, MW.offset), this.connection.send(this.packr.buffer.subarray(0, MW.offset + RW.byteLength))
      }
      get state() {
        return this.Uy.getState()
      }
      aN() {
        this.onJoin.clear(), this.onStateChange.clear(), this.onError.clear(), this.EX.clear(), this.onMessageHandlers.events = {}, this.Uy instanceof NW.PRW && (this.Uy.pA.root.callbacks = {})
      }
      onMessageCallback(WW) {
        const RW = new Uint8Array(WW.data),
          MW = {
            offset: 1
          },
          wW = RW[0];
        if (wW === CW.Protocol.JOIN_ROOM) {
          const WW = yR.decode.utf8Read(RW, MW, RW[MW.offset++]);
          if (this.serializerId = yR.decode.utf8Read(RW, MW, RW[MW.offset++]), !this.Uy) {
            const WW = zR.getSerializer(this.serializerId);
            this.Uy = new WW
          }
          RW.byteLength > MW.offset && this.Uy.handshake && this.Uy.handshake(RW, MW), this.reconnectionToken = `${this.roomId}:${WW}`, this.hasJoined = !0, this.onJoin.invoke(), this.packr.buffer[0] = CW.Protocol.JOIN_ROOM, this.connection.send(this.packr.buffer.subarray(0, 1))
        } else if (wW === CW.Protocol.ERROR) {
          const WW = yR.decode.number(RW, MW),
            wW = yR.decode.string(RW, MW);
          this.onError.invoke(WW, wW)
        } else if (wW === CW.Protocol.LEAVE_ROOM) this.Cw();
        else if (wW === CW.Protocol.ROOM_STATE) this.Uy.setState(RW, MW), this.onStateChange.invoke(this.Uy.getState());
        else if (wW === CW.Protocol.ROOM_STATE_PATCH) this.Uy.patch(RW, MW), this.onStateChange.invoke(this.Uy.getState());
        else if (wW === CW.Protocol.ROOM_DATA) {
          const WW = yR.decode.stringCheck(RW, MW) ? yR.decode.string(RW, MW) : yR.decode.number(RW, MW),
            wW = RW.byteLength > MW.offset ? BW.unpack(RW, {
              start: MW.offset
            }) : void 0;
          this.dispatchMessage(WW, wW)
        } else if (wW === CW.Protocol.ROOM_DATA_BYTES) {
          const WW = yR.decode.stringCheck(RW, MW) ? yR.decode.string(RW, MW) : yR.decode.number(RW, MW);
          this.dispatchMessage(WW, RW.subarray(MW.offset))
        }
      }
      dispatchMessage(WW, RW) {
        var MW;
        const wW = this.getMessageHandlerKey(WW);
        this.onMessageHandlers.events[wW] ? this.onMessageHandlers.emit(wW, RW) : this.onMessageHandlers.events["*"] ? this.onMessageHandlers.emit("*", WW, RW) : null === (MW = console.warn) || void 0 === MW || MW.call(console, `colyseus.js: onMessage() not registered for type '${WW}'.`)
      }
      destroy() {
        this.Uy && this.Uy.teardown()
      }
      getMessageHandlerKey(WW) {
        switch (typeof WW) {
          case "string":
            return WW;
          case "number":
            return `i${WW}`;
          default:
            throw new Error("invalid message type.")
        }
      }
    }
    RW.HW = tR
  },
  8042: (WW, RW, MW) => {
    var wW = MW(7949);
    let CW;

    function zR() {
      if (!CW) try {
        CW = "undefined" !== typeof cc && cc.sys && cc.sys.localStorage ? cc.sys.localStorage : window.localStorage
      } catch (WW) {}
      return CW || "undefined" === typeof globalThis.indexedDB || (CW = new AW), CW || (CW = {
        cache: {},
        setItem: function(WW, RW) {
          this.cache[WW] = RW
        },
        getItem: function(WW) {
          this.cache[WW]
        },
        removeItem: function(WW) {
          delete this.cache[WW]
        }
      }), CW
    }
    class AW {
      constructor() {
        this.dbPromise = new Promise((WW => {
          const RW = indexedDB.open("_colyseus_storage", 1);
          RW.onupgradeneeded = () => RW.result.createObjectStore("store"), RW.onsuccess = () => WW(RW.result)
        }))
      }
      tx(WW, RW) {
        return wW.__awaiter(this, void 0, void 0, (function*() {
          const MW = (yield this.dbPromise).transaction("store", WW).objectStore("store");
          return RW(MW)
        }))
      }
      setItem(WW, RW) {
        return this.tx("readwrite", (MW => MW.put(RW, WW))).then()
      }
      getItem(WW) {
        return wW.__awaiter(this, void 0, void 0, (function*() {
          const RW = yield this.tx("readonly", (RW => RW.get(WW)));
          return new Promise((WW => {
            RW.onsuccess = () => WW(RW.result)
          }))
        }))
      }
      removeItem(WW) {
        return this.tx("readwrite", (RW => RW.delete(WW))).then()
      }
    }
    RW.getItem = function(WW, RW) {
      const MW = zR().getItem(WW);
      "undefined" !== typeof Promise && MW instanceof Promise ? MW.then((WW => RW(WW))) : RW(MW)
    }, RW.removeItem = function(WW) {
      zR().removeItem(WW)
    }, RW.setItem = function(WW, RW) {
      zR().setItem(WW, RW)
    }
  },
  8007: (WW, RW) => {
    RW.createNanoEvents = () => ({
      emit(WW) {
        let RW = this.events[WW] || [];
        for (var MW = arguments.length, wW = new Array(MW > 1 ? MW - 1 : 0), CW = 1; CW < MW; CW++) wW[CW - 1] = arguments[CW];
        for (let zR = 0, AW = RW.length; zR < AW; zR++) RW[zR](...wW)
      },
      events: {},
      on(WW, RW) {
        var MW;
        return (null === (MW = this.events[WW]) || void 0 === MW ? void 0 : MW.push(RW)) || (this.events[WW] = [RW]), () => {
          var MW;
          this.events[WW] = null === (MW = this.events[WW]) || void 0 === MW ? void 0 : MW.filter((WW => RW !== WW))
        }
      }
    })
  },
  8012: (WW, RW) => {
    class MW {
      constructor() {
        this.handlers = []
      }
      register(WW) {
        return this.handlers.push(WW), this
      }
      invoke() {
        for (var WW = arguments.length, RW = new Array(WW), MW = 0; MW < WW; MW++) RW[MW] = arguments[MW];
        this.handlers.forEach((WW => WW.apply(this, RW)))
      }
      invokeAsync() {
        for (var WW = arguments.length, RW = new Array(WW), MW = 0; MW < WW; MW++) RW[MW] = arguments[MW];
        return Promise.all(this.handlers.map((WW => WW.apply(this, RW))))
      }
      remove(WW) {
        const RW = this.handlers.indexOf(WW);
        this.handlers[RW] = this.handlers[this.handlers.length - 1], this.handlers.pop()
      }
      clear() {
        this.handlers = []
      }
    }
    RW.EventEmitter = MW, RW.createSignal = function() {
      const WW = new MW;

      function RW(RW) {
        return WW.register(RW, null === this)
      }
      return RW.once = RW => {
        const MW = function() {
          for (var wW = arguments.length, CW = new Array(wW), zR = 0; zR < wW; zR++) CW[zR] = arguments[zR];
          RW.apply(this, CW), WW.remove(MW)
        };
        WW.register(MW)
      }, RW.remove = RW => WW.remove(RW), RW.invoke = function() {
        return WW.invoke(...arguments)
      }, RW.invokeAsync = function() {
        return WW.invokeAsync(...arguments)
      }, RW.clear = () => WW.clear(), RW
    }
  },
  7955: (WW, RW) => {
    var MW;
    RW.CloseCode = void 0, (MW = RW.CloseCode || (RW.CloseCode = {}))[MW.CONSENTED = 4e3] = "CONSENTED", MW[MW.DEVMODE_RESTART = 4010] = "DEVMODE_RESTART";
    class wW extends Error {
      constructor(WW, RW) {
        super(RW), this.name = "ServerError", this.code = WW
      }
    }
    class CW extends Error {
      constructor(WW) {
        super(WW), this.name = "AbortError"
      }
    }
    RW.AbortError = CW, RW.ServerError = wW
  },
  7932: (WW, RW, MW) => {
    MW(7941);
    var wW = MW(7947),
      CW = MW(7995),
      zR = MW(7959),
      AW = MW(8034),
      bR = MW(7955),
      yR = MW(8015),
      NW = MW(8051),
      eW = MW(8001);
    eW.registerSerializer("schema", yR.PRW), eW.registerSerializer("none", NW.NoneSerializer), RW.Client = wW.Client, RW.MatchMakeError = wW.MatchMakeError, Object.defineProperty(RW, "ErrorCode", {
      enumerable: !0,
      get: function() {
        return CW.ErrorCode
      }
    }), Object.defineProperty(RW, "Protocol", {
      enumerable: !0,
      get: function() {
        return CW.Protocol
      }
    }), RW.HW = zR.HW, RW.Auth = AW.Auth, RW.ServerError = bR.ServerError, RW.PRW = yR.PRW, RW.getStateCallbacks = yR.getStateCallbacks, RW.registerSerializer = eW.registerSerializer
  },
  7941: () => {
    ArrayBuffer.isView || (ArrayBuffer.isView = WW => null !== WW && "object" === typeof WW && WW.buffer instanceof ArrayBuffer), "undefined" === typeof globalThis && "undefined" !== typeof window && (window.globalThis = window), "undefined" === typeof FormData && (globalThis.FormData = class {})
  },
  8051: (WW, RW) => {
    RW.NoneSerializer = class {
      setState(WW) {}
      getState() {
        return null
      }
      patch(WW) {}
      teardown() {}
      handshake(WW) {}
    }
  },
  8015: (WW, RW, MW) => {
    var wW = MW(7975);
    RW.PRW = class {
      setState(WW, RW) {
        this.pA.decode(WW, RW)
      }
      getState() {
        return this.state
      }
      patch(WW, RW) {
        return this.pA.decode(WW, RW)
      }
      teardown() {
        this.pA.root.clearRefs()
      }
      handshake(WW, RW) {
        this.state ? (wW.Reflection.decode(WW, RW), this.pA = new wW.Decoder(this.state)) : (this.pA = wW.Reflection.decode(WW, RW), this.state = this.pA.state)
      }
    }, RW.getStateCallbacks = function(WW) {
      try {
        return wW.getDecoderStateCallbacks(WW.Uy.pA)
      } catch (RW) {
        return
      }
    }
  },
  8001: (WW, RW) => {
    const MW = {};
    RW.getSerializer = function(WW) {
      const RW = MW[WW];
      if (!RW) throw new Error("missing serializer: " + WW);
      return RW
    }, RW.registerSerializer = function(WW, RW) {
      MW[WW] = RW
    }
  },
  7969: (WW, RW, MW) => {
    var wW = MW(7949),
      CW = MW(7975);
    RW.H3TransportTransport = class {
      constructor(WW) {
        this.events = WW, this.isOpen = !1, this.lengthPrefixBuffer = new Uint8Array(9)
      }
      connect(WW) {
        let RW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        const MW = RW.fingerprint && {
          serverCertificateHashes: [{
            algorithm: "sha-256",
            value: new Uint8Array(RW.fingerprint).buffer
          }]
        } || void 0;
        this.wt = new WebTransport(WW, MW), this.wt.ready.then((WW => {
          console.log("WebTransport ready!", WW), this.isOpen = !0, this.unreliableReader = this.wt.datagrams.readable.getReader(), this.unreliableWriter = this.wt.datagrams.writable.getWriter();
          this.wt.incomingBidirectionalStreams.getReader().read().then((WW => {
            this.reader = WW.value.readable.getReader(), this.writer = WW.value.writable.getWriter(), this.sendSeatReservation(RW.room.roomId, RW.sessionId, RW.reconnectionToken), this.readIncomingData(), this.readIncomingUnreliableData()
          })).catch((WW => {
            console.error("failed to read incoming stream", WW), console.error("TODO: close the connection")
          }))
        })).catch((WW => {
          console.log("WebTransport not ready!", WW), this._close()
        })), this.wt.closed.then((WW => {
          console.log("WebTransport closed w/ success", WW), this.events.onclose({
            code: WW.closeCode,
            reason: WW.reason
          })
        })).catch((WW => {
          console.log("WebTransport closed w/ error", WW), this.events.onerror(WW), this.events.onclose({
            code: WW.closeCode,
            reason: WW.reason
          })
        })).finally((() => {
          this._close()
        }))
      }
      send(WW) {
        const RW = CW.encode.number(this.lengthPrefixBuffer, WW.length, {
            offset: 0
          }),
          MW = new Uint8Array(RW + WW.length);
        MW.set(this.lengthPrefixBuffer.subarray(0, RW), 0), MW.set(WW, RW), this.writer.write(MW)
      }
      sendUnreliable(WW) {
        const RW = CW.encode.number(this.lengthPrefixBuffer, WW.length, {
            offset: 0
          }),
          MW = new Uint8Array(RW + WW.length);
        MW.set(this.lengthPrefixBuffer.subarray(0, RW), 0), MW.set(WW, RW), this.unreliableWriter.write(MW)
      }
      close(WW, RW) {
        try {
          this.wt.close({
            closeCode: WW,
            reason: RW
          })
        } catch (MW) {
          console.error(MW)
        }
      }
      readIncomingData() {
        return wW.__awaiter(this, void 0, void 0, (function*() {
          let WW;
          for (; this.isOpen;) {
            try {
              WW = yield this.reader.read();
              const RW = WW.value,
                MW = {
                  offset: 0
                };
              do {
                const WW = CW.decode.number(RW, MW);
                this.events.onmessage({
                  data: RW.subarray(MW.offset, MW.offset + WW)
                }), MW.offset += WW
              } while (MW.offset < RW.length)
            } catch (RW) {
              -1 === RW.message.indexOf("session is closed") && console.error("H3Transport: failed to read incoming data", RW);
              break
            }
            if (WW.done) break
          }
        }))
      }
      readIncomingUnreliableData() {
        return wW.__awaiter(this, void 0, void 0, (function*() {
          let WW;
          for (; this.isOpen;) {
            try {
              WW = yield this.unreliableReader.read();
              const RW = WW.value,
                MW = {
                  offset: 0
                };
              do {
                const WW = CW.decode.number(RW, MW);
                this.events.onmessage({
                  data: RW.subarray(MW.offset, MW.offset + WW)
                }), MW.offset += WW
              } while (MW.offset < RW.length)
            } catch (RW) {
              -1 === RW.message.indexOf("session is closed") && console.error("H3Transport: failed to read incoming data", RW);
              break
            }
            if (WW.done) break
          }
        }))
      }
      sendSeatReservation(WW, RW, MW) {
        const wW = {
            offset: 0
          },
          zR = [];
        CW.encode.string(zR, WW, wW), CW.encode.string(zR, RW, wW), MW && CW.encode.string(zR, MW, wW), this.writer.write(new Uint8Array(zR).buffer)
      }
      _close() {
        this.isOpen = !1
      }
    }
  },
  7983: (WW, RW, MW) => {
    var wW = MW(7988);
    const CW = globalThis.WebSocket || wW;
    RW.WebSocketTransport = class {
      constructor(WW) {
        this.events = WW
      }
      send(WW) {
        this.ws.send(WW)
      }
      sendUnreliable(WW) {
        console.warn("colyseus.js: The WebSocket transport does not support unreliable messages")
      }
      connect(WW, RW) {
        try {
          this.ws = new CW(WW, {
            headers: RW,
            protocols: this.protocols
          })
        } catch (MW) {
          this.ws = new CW(WW, this.protocols)
        }
        this.ws.binaryType = "arraybuffer", this.ws.onopen = this.events.onopen, this.ws.onmessage = this.events.onmessage, this.ws.onclose = this.events.onclose, this.ws.onerror = this.events.onerror
      }
      close(WW, RW) {
        this.ws.close(WW, RW)
      }
      get isOpen() {
        return this.ws.readyState === CW.OPEN
      }
    }
  },
  7988: WW => {
    WW.exports = function() {
      throw new Error("ws does not work in the browser. Browser clients must use the native WebSocket object")
    }
  },
  8029: (WW, RW, MW) => {
    function wW(WW, RW) {
      RW.headers = WW.headers || {}, RW.statusMessage = WW.statusText, RW.statusCode = WW.status, RW.data = WW.response
    }

    function CW(WW, RW, MW) {
      return new Promise((function(CW, zR) {
        MW = MW || {};
        var AW, bR, yR, NW = new XMLHttpRequest,
          eW = MW.body,
          BW = MW.headers || {};
        for (AW in MW.timeout && (NW.timeout = MW.timeout), NW.ontimeout = NW.onerror = function(WW) {
            WW.timeout = "timeout" == WW.type, zR(WW)
          }, NW.onabort = function(WW) {
            WW.aborted = !0, zR(WW)
          }, NW.open(WW, RW.href || RW), NW.onload = function() {
            for (yR = NW.getAllResponseHeaders().trim().split(/[\r\n]+/), wW(NW, NW); bR = yR.shift();) bR = bR.split(": "), NW.headers[bR.shift().toLowerCase()] = bR.join(": ");
            if ((bR = NW.headers["content-type"]) && ~bR.indexOf("application/json")) try {
              NW.data = JSON.parse(NW.data, MW.reviver)
            } catch (WW) {
              return wW(NW, WW), zR(WW)
            }(NW.status >= 400 ? zR : CW)(NW)
          }, typeof FormData < "u" && eW instanceof FormData || eW && "object" == typeof eW && (BW["content-type"] = "application/json", eW = JSON.stringify(eW)), NW.withCredentials = !!MW.withCredentials, BW) NW.setRequestHeader(AW, BW[AW]);
        NW.send(eW), MW.signal && MW.signal.addEventListener("abort", (function() {
          NW.abort()
        }))
      }))
    }
    MW.r(RW), MW.d(RW, {
      del: () => yR,
      get: () => zR,
      patch: () => bR,
      post: () => AW,
      put: () => NW,
      send: () => CW
    });
    var zR = CW.bind(CW, "GET"),
      AW = CW.bind(CW, "POST"),
      bR = CW.bind(CW, "PATCH"),
      yR = CW.bind(CW, "DELETE"),
      NW = CW.bind(CW, "PUT")
  },
  8022: (WW, RW, MW) => {
    var wW, CW, zR;
    MW.r(RW), MW.d(RW, {
      ALWAYS: () => GR,
      C1: () => lW,
      DECIMAL_FIT: () => HR,
      DECIMAL_ROUND: () => LR,
      Decoder: () => yM,
      Encoder: () => OR,
      FLOAT32_OPTIONS: () => TR,
      NEVER: () => nR,
      Packr: () => pR,
      RESERVE_START_SPACE: () => ZR,
      RESET_BUFFER_MODE: () => qM,
      REUSE_BUFFER_MODE: () => DR,
      Unpackr: () => XW,
      addExtension: () => mM,
      clearSource: () => AR,
      decode: () => tM,
      decodeIter: () => SR,
      encode: () => uR,
      encodeIter: () => WM,
      isNativeAccelerationEnabled: () => xR,
      mapsAsObjects: () => MM,
      pack: () => KR,
      roundFloat32: () => IR,
      unpack: () => eR,
      unpackMultiple: () => BR,
      useRecords: () => RM
    });
    try {
      wW = new TextDecoder
    } catch (wM) {}
    var AW = 0;
    const bR = [];
    var yR, NW, eW, BW, tR, TW = bR,
      gR = 0,
      iR = {},
      YW = 0,
      JW = 0,
      PW = [],
      IW = {
        useRecords: !1,
        mapsAsObjects: !0
      };
    class oW {}
    const lW = new oW;
    lW.name = "MessagePack 0xC1";
    var FW, fW, QW, rR = !1,
      cR = 2;
    try {
      new Function("")
    } catch (wM) {
      cR = 1 / 0
    }
    class XW {
      constructor(WW) {
        WW && (!1 === WW.useRecords && void 0 === WW.mapsAsObjects && (WW.mapsAsObjects = !0), WW.sequential && !1 !== WW.trusted && (WW.trusted = !0, WW.structures || 0 == WW.useRecords || (WW.structures = [], WW.maxSharedStructures || (WW.maxSharedStructures = 0))), WW.structures ? WW.structures.sharedLength = WW.structures.length : WW.getStructures && ((WW.structures = []).uninitialized = !0, WW.structures.sharedLength = 0), WW.int64AsNumber && (WW.int64AsType = "number")), Object.assign(this, WW)
      }
      unpack(WW, RW) {
        if (CW) return zM((() => (AR(), this ? this.unpack(WW, RW) : XW.prototype.unpack.call(IW, WW, RW))));
        WW.buffer || WW.constructor !== ArrayBuffer || (WW = "undefined" !== typeof Buffer ? Buffer.from(WW) : new Uint8Array(WW)), "object" === typeof RW ? (zR = RW.end || WW.length, AW = RW.start || 0) : (AW = 0, zR = RW > -1 ? RW : WW.length), gR = 0, JW = 0, NW = null, TW = bR, eW = null, CW = WW;
        try {
          tR = WW.dataView || (WW.dataView = new DataView(WW.buffer, WW.byteOffset, WW.byteLength))
        } catch (wM) {
          if (CW = null, WW instanceof Uint8Array) throw wM;
          throw new Error("Source must be a Uint8Array or Buffer but was a " + (WW && "object" == typeof WW ? WW.constructor.name : typeof WW))
        }
        if (this instanceof XW) {
          if (iR = this, this.structures) return yR = this.structures, jR(RW);
          (!yR || yR.length > 0) && (yR = [])
        } else iR = IW, (!yR || yR.length > 0) && (yR = []);
        return jR(RW)
      }
      unpackMultiple(WW, RW) {
        let MW, wW = 0;
        try {
          rR = !0;
          let CW = WW.length,
            zR = this ? this.unpack(WW, CW) : NR.unpack(WW, CW);
          if (!RW) {
            for (MW = [zR]; AW < CW;) wW = AW, MW.push(jR());
            return MW
          }
          if (!1 === RW(zR, wW, AW)) return;
          for (; AW < CW;)
            if (wW = AW, !1 === RW(jR(), wW, AW)) return
        } catch (wM) {
          throw wM.lastPosition = wW, wM.values = MW, wM
        } finally {
          rR = !1, AR()
        }
      }
      _mergeStructures(WW, RW) {
        fW && (WW = fW.call(this, WW)), WW = WW || [], Object.isFrozen(WW) && (WW = WW.map((WW => WW.slice(0))));
        for (let MW = 0, wW = WW.length; MW < wW; MW++) {
          let RW = WW[MW];
          RW && (RW.isShared = !0, MW >= 32 && (RW.highByte = MW - 32 >> 5))
        }
        WW.sharedLength = WW.length;
        for (let MW in RW || [])
          if (MW >= 0) {
            let wW = WW[MW],
              CW = RW[MW];
            CW && (wW && ((WW.restoreStructures || (WW.restoreStructures = []))[MW] = wW), WW[MW] = CW)
          } return this.structures = WW
      }
      decode(WW, RW) {
        return this.unpack(WW, RW)
      }
    }

    function jR(WW) {
      try {
        if (!iR.trusted && !rR) {
          let WW = yR.sharedLength || 0;
          WW < yR.length && (yR.length = WW)
        }
        let RW;
        if (iR.randomAccessStructure && CW[AW] < 64 && CW[AW] >= 32 && FW ? (RW = FW(CW, AW, zR, iR), CW = null, WW && WW.lazy || !RW || (RW = RW.toJSON()), AW = zR) : RW = aR(), eW && (AW = eW.postBundlePosition, eW = null), rR && (yR.restoreStructures = null), AW == zR) yR && yR.restoreStructures && kR(), yR = null, CW = null, BW && (BW = null);
        else {
          if (AW > zR) throw new Error("Unexpected end of MessagePack data");
          if (!rR) {
            let WW;
            try {
              WW = JSON.stringify(RW, ((WW, RW) => "bigint" === typeof RW ? `${RW}n` : RW)).slice(0, 100)
            } catch (wM) {
              WW = "(JSON view not available " + wM + ")"
            }
            throw new Error("Data read, but end of buffer not reached " + WW)
          }
        }
        return RW
      } catch (wM) {
        throw yR && yR.restoreStructures && kR(), AR(), (wM instanceof RangeError || wM.message.startsWith("Unexpected end of buffer") || AW > zR) && (wM.incomplete = !0), wM
      }
    }

    function kR() {
      for (let WW in yR.restoreStructures) yR[WW] = yR.restoreStructures[WW];
      yR.restoreStructures = null
    }

    function aR() {
      let WW = CW[AW++];
      if (WW < 160) {
        if (WW < 128) {
          if (WW < 64) return WW;
          {
            let RW = yR[63 & WW] || iR.getStructures && hW()[63 & WW];
            return RW ? (RW.read || (RW.read = dW(RW, 63 & WW)), RW.read()) : WW
          }
        }
        if (WW < 144) {
          if (WW -= 128, iR.mapsAsObjects) {
            let RW = {};
            for (let MW = 0; MW < WW; MW++) {
              let WW = ZW();
              "__proto__" === WW && (WW = "__proto_"), RW[WW] = aR()
            }
            return RW
          } {
            let RW = new Map;
            for (let MW = 0; MW < WW; MW++) RW.set(aR(), aR());
            return RW
          }
        } {
          WW -= 144;
          let RW = new Array(WW);
          for (let MW = 0; MW < WW; MW++) RW[MW] = aR();
          return iR.freezeData ? Object.freeze(RW) : RW
        }
      }
      if (WW < 192) {
        let RW = WW - 160;
        if (JW >= AW) return NW.slice(AW - YW, (AW += RW) - YW);
        if (0 == JW && zR < 140) {
          let WW = RW < 16 ? GW(RW) : nW(RW);
          if (null != WW) return WW
        }
        return UW(RW)
      } {
        let RW;
        switch (WW) {
          case 192:
            return null;
          case 193:
            return eW ? (RW = aR(), RW > 0 ? eW[1].slice(eW.position1, eW.position1 += RW) : eW[0].slice(eW.position0, eW.position0 -= RW)) : lW;
          case 194:
            return !1;
          case 195:
            return !0;
          case 196:
            if (RW = CW[AW++], void 0 === RW) throw new Error("Unexpected end of buffer");
            return HW(RW);
          case 197:
            return RW = tR.getUint16(AW), AW += 2, HW(RW);
          case 198:
            return RW = tR.getUint32(AW), AW += 4, HW(RW);
          case 199:
            return DW(CW[AW++]);
          case 200:
            return RW = tR.getUint16(AW), AW += 2, DW(RW);
          case 201:
            return RW = tR.getUint32(AW), AW += 4, DW(RW);
          case 202:
            if (RW = tR.getFloat32(AW), iR.useFloat32 > 2) {
              let WW = bM[(127 & CW[AW]) << 1 | CW[AW + 1] >> 7];
              return AW += 4, (WW * RW + (RW > 0 ? .5 : -.5) | 0) / WW
            }
            return AW += 4, RW;
          case 203:
            return RW = tR.getFloat64(AW), AW += 8, RW;
          case 204:
            return CW[AW++];
          case 205:
            return RW = tR.getUint16(AW), AW += 2, RW;
          case 206:
            return RW = tR.getUint32(AW), AW += 4, RW;
          case 207:
            return "number" === iR.int64AsType ? (RW = 4294967296 * tR.getUint32(AW), RW += tR.getUint32(AW + 4)) : "string" === iR.int64AsType ? RW = tR.getBigUint64(AW).toString() : "auto" === iR.int64AsType ? (RW = tR.getBigUint64(AW), RW <= BigInt(2) << BigInt(52) && (RW = Number(RW))) : RW = tR.getBigUint64(AW), AW += 8, RW;
          case 208:
            return tR.getInt8(AW++);
          case 209:
            return RW = tR.getInt16(AW), AW += 2, RW;
          case 210:
            return RW = tR.getInt32(AW), AW += 4, RW;
          case 211:
            return "number" === iR.int64AsType ? (RW = 4294967296 * tR.getInt32(AW), RW += tR.getUint32(AW + 4)) : "string" === iR.int64AsType ? RW = tR.getBigInt64(AW).toString() : "auto" === iR.int64AsType ? (RW = tR.getBigInt64(AW), RW >= BigInt(-2) << BigInt(52) && RW <= BigInt(2) << BigInt(52) && (RW = Number(RW))) : RW = tR.getBigInt64(AW), AW += 8, RW;
          case 212:
            if (RW = CW[AW++], 114 == RW) return WR(63 & CW[AW++]);
            {
              let WW = PW[RW];
              if (WW) return WW.read ? (AW++, WW.read(aR())) : WW.noBuffer ? (AW++, WW()) : WW(CW.subarray(AW, ++AW));
              throw new Error("Unknown extension " + RW)
            }
          case 213:
            return RW = CW[AW], 114 == RW ? (AW++, WR(63 & CW[AW++], CW[AW++])) : DW(2);
          case 214:
            return DW(4);
          case 215:
            return DW(8);
          case 216:
            return DW(16);
          case 217:
            return RW = CW[AW++], JW >= AW ? NW.slice(AW - YW, (AW += RW) - YW) : EW(RW);
          case 218:
            return RW = tR.getUint16(AW), JW >= (AW += 2) ? NW.slice(AW - YW, (AW += RW) - YW) : VW(RW);
          case 219:
            return RW = tR.getUint32(AW), JW >= (AW += 4) ? NW.slice(AW - YW, (AW += RW) - YW) : mR(RW);
          case 220:
            return RW = tR.getUint16(AW), AW += 2, KW(RW);
          case 221:
            return RW = tR.getUint32(AW), AW += 4, KW(RW);
          case 222:
            return RW = tR.getUint16(AW), AW += 2, uW(RW);
          case 223:
            return RW = tR.getUint32(AW), AW += 4, uW(RW);
          default:
            if (WW >= 224) return WW - 256;
            if (void 0 === WW) {
              let WW = new Error("Unexpected end of MessagePack data");
              throw WW.incomplete = !0, WW
            }
            throw new Error("Unknown MessagePack token " + WW)
        }
      }
    }
    const sW = /^[a-zA-Z_$][a-zA-Z\d_$]*$/;

    function dW(WW, RW) {
      function MW() {
        if (MW.count++ > cR) {
          let MW = WW.read = new Function("r", "return function(){return " + (iR.freezeData ? "Object.freeze" : "") + "({" + WW.map((WW => "__proto__" === WW ? "__proto_:r()" : sW.test(WW) ? WW + ":r()" : "[" + JSON.stringify(WW) + "]:r()")).join(",") + "})}")(aR);
          return 0 === WW.highByte && (WW.read = pW(RW, WW.read)), MW()
        }
        let wW = {};
        for (let RW = 0, MW = WW.length; RW < MW; RW++) {
          let MW = WW[RW];
          "__proto__" === MW && (MW = "__proto_"), wW[MW] = aR()
        }
        return iR.freezeData ? Object.freeze(wW) : wW
      }
      return MW.count = 0, 0 === WW.highByte ? pW(RW, MW) : MW
    }
    const pW = (WW, RW) => function() {
      let MW = CW[AW++];
      if (0 === MW) return RW();
      let wW = WW < 32 ? -(WW + (MW << 5)) : WW + (MW << 5),
        zR = yR[wW] || hW()[wW];
      if (!zR) throw new Error("Record id is not defined for " + wW);
      return zR.read || (zR.read = dW(zR, WW)), zR.read()
    };

    function hW() {
      let WW = zM((() => (CW = null, iR.getStructures())));
      return yR = iR._mergeStructures(WW, yR)
    }
    var UW = vR,
      EW = vR,
      VW = vR,
      mR = vR;
    let xR = !1;

    function vR(WW) {
      let RW;
      if (WW < 16 && (RW = GW(WW))) return RW;
      if (WW > 64 && wW) return wW.decode(CW.subarray(AW, AW += WW));
      const MW = AW + WW,
        zR = [];
      for (RW = ""; AW < MW;) {
        const WW = CW[AW++];
        if (0 === (128 & WW)) zR.push(WW);
        else if (192 === (224 & WW)) {
          const RW = 63 & CW[AW++];
          zR.push((31 & WW) << 6 | RW)
        } else if (224 === (240 & WW)) {
          const RW = 63 & CW[AW++],
            MW = 63 & CW[AW++];
          zR.push((31 & WW) << 12 | RW << 6 | MW)
        } else if (240 === (248 & WW)) {
          let RW = (7 & WW) << 18 | (63 & CW[AW++]) << 12 | (63 & CW[AW++]) << 6 | 63 & CW[AW++];
          RW > 65535 && (RW -= 65536, zR.push(RW >>> 10 & 1023 | 55296), RW = 56320 | 1023 & RW), zR.push(RW)
        } else zR.push(WW);
        zR.length >= 4096 && (RW += OW.apply(String, zR), zR.length = 0)
      }
      return zR.length > 0 && (RW += OW.apply(String, zR)), RW
    }

    function KW(WW) {
      let RW = new Array(WW);
      for (let MW = 0; MW < WW; MW++) RW[MW] = aR();
      return iR.freezeData ? Object.freeze(RW) : RW
    }

    function uW(WW) {
      if (iR.mapsAsObjects) {
        let RW = {};
        for (let MW = 0; MW < WW; MW++) {
          let WW = ZW();
          "__proto__" === WW && (WW = "__proto_"), RW[WW] = aR()
        }
        return RW
      } {
        let RW = new Map;
        for (let MW = 0; MW < WW; MW++) RW.set(aR(), aR());
        return RW
      }
    }
    var OW = String.fromCharCode;

    function nW(WW) {
      let RW = AW,
        MW = new Array(WW);
      for (let wW = 0; wW < WW; wW++) {
        const WW = CW[AW++];
        if ((128 & WW) > 0) return void(AW = RW);
        MW[wW] = WW
      }
      return OW.apply(String, MW)
    }

    function GW(WW) {
      if (WW < 4) {
        if (WW < 2) {
          if (0 === WW) return "";
          {
            let WW = CW[AW++];
            return (128 & WW) > 1 ? void(AW -= 1) : OW(WW)
          }
        } {
          let RW = CW[AW++],
            MW = CW[AW++];
          if ((128 & RW) > 0 || (128 & MW) > 0) return void(AW -= 2);
          if (WW < 3) return OW(RW, MW);
          let wW = CW[AW++];
          return (128 & wW) > 0 ? void(AW -= 3) : OW(RW, MW, wW)
        }
      } {
        let RW = CW[AW++],
          MW = CW[AW++],
          wW = CW[AW++],
          zR = CW[AW++];
        if ((128 & RW) > 0 || (128 & MW) > 0 || (128 & wW) > 0 || (128 & zR) > 0) return void(AW -= 4);
        if (WW < 6) {
          if (4 === WW) return OW(RW, MW, wW, zR);
          {
            let WW = CW[AW++];
            return (128 & WW) > 0 ? void(AW -= 5) : OW(RW, MW, wW, zR, WW)
          }
        }
        if (WW < 8) {
          let bR = CW[AW++],
            yR = CW[AW++];
          if ((128 & bR) > 0 || (128 & yR) > 0) return void(AW -= 6);
          if (WW < 7) return OW(RW, MW, wW, zR, bR, yR);
          let NW = CW[AW++];
          return (128 & NW) > 0 ? void(AW -= 7) : OW(RW, MW, wW, zR, bR, yR, NW)
        } {
          let bR = CW[AW++],
            yR = CW[AW++],
            NW = CW[AW++],
            eW = CW[AW++];
          if ((128 & bR) > 0 || (128 & yR) > 0 || (128 & NW) > 0 || (128 & eW) > 0) return void(AW -= 8);
          if (WW < 10) {
            if (8 === WW) return OW(RW, MW, wW, zR, bR, yR, NW, eW);
            {
              let WW = CW[AW++];
              return (128 & WW) > 0 ? void(AW -= 9) : OW(RW, MW, wW, zR, bR, yR, NW, eW, WW)
            }
          }
          if (WW < 12) {
            let BW = CW[AW++],
              tR = CW[AW++];
            if ((128 & BW) > 0 || (128 & tR) > 0) return void(AW -= 10);
            if (WW < 11) return OW(RW, MW, wW, zR, bR, yR, NW, eW, BW, tR);
            let TW = CW[AW++];
            return (128 & TW) > 0 ? void(AW -= 11) : OW(RW, MW, wW, zR, bR, yR, NW, eW, BW, tR, TW)
          } {
            let BW = CW[AW++],
              tR = CW[AW++],
              TW = CW[AW++],
              gR = CW[AW++];
            if ((128 & BW) > 0 || (128 & tR) > 0 || (128 & TW) > 0 || (128 & gR) > 0) return void(AW -= 12);
            if (WW < 14) {
              if (12 === WW) return OW(RW, MW, wW, zR, bR, yR, NW, eW, BW, tR, TW, gR);
              {
                let WW = CW[AW++];
                return (128 & WW) > 0 ? void(AW -= 13) : OW(RW, MW, wW, zR, bR, yR, NW, eW, BW, tR, TW, gR, WW)
              }
            } {
              let iR = CW[AW++],
                YW = CW[AW++];
              if ((128 & iR) > 0 || (128 & YW) > 0) return void(AW -= 14);
              if (WW < 15) return OW(RW, MW, wW, zR, bR, yR, NW, eW, BW, tR, TW, gR, iR, YW);
              let JW = CW[AW++];
              return (128 & JW) > 0 ? void(AW -= 15) : OW(RW, MW, wW, zR, bR, yR, NW, eW, BW, tR, TW, gR, iR, YW, JW)
            }
          }
        }
      }
    }

    function LW() {
      let WW, RW = CW[AW++];
      if (RW < 192) WW = RW - 160;
      else switch (RW) {
        case 217:
          WW = CW[AW++];
          break;
        case 218:
          WW = tR.getUint16(AW), AW += 2;
          break;
        case 219:
          WW = tR.getUint32(AW), AW += 4;
          break;
        default:
          throw new Error("Expected string")
      }
      return vR(WW)
    }

    function HW(WW) {
      return iR.copyBuffers ? Uint8Array.prototype.slice.call(CW, AW, AW += WW) : CW.subarray(AW, AW += WW)
    }

    function DW(WW) {
      let RW = CW[AW++];
      if (PW[RW]) {
        let MW;
        return PW[RW](CW.subarray(AW, MW = AW += WW), (WW => {
          AW = WW;
          try {
            return aR()
          } finally {
            AW = MW
          }
        }))
      }
      throw new Error("Unknown extension type " + RW)
    }
    var qR = new Array(4096);

    function ZW() {
      let WW = CW[AW++];
      if (!(WW >= 160 && WW < 192)) return AW--, SW(aR());
      if (WW -= 160, JW >= AW) return NW.slice(AW - YW, (AW += WW) - YW);
      if (!(0 == JW && zR < 180)) return UW(WW);
      let RW, MW = 4095 & (WW << 5 ^ (WW > 1 ? tR.getUint16(AW) : WW > 0 ? CW[AW] : 0)),
        wW = qR[MW],
        bR = AW,
        yR = AW + WW - 3,
        eW = 0;
      if (wW && wW.bytes == WW) {
        for (; bR < yR;) {
          if (RW = tR.getUint32(bR), RW != wW[eW++]) {
            bR = 1879048192;
            break
          }
          bR += 4
        }
        for (yR += 3; bR < yR;)
          if (RW = CW[bR++], RW != wW[eW++]) {
            bR = 1879048192;
            break
          } if (bR === yR) return AW = bR, wW.string;
        yR -= 3, bR = AW
      }
      for (wW = [], qR[MW] = wW, wW.bytes = WW; bR < yR;) RW = tR.getUint32(bR), wW.push(RW), bR += 4;
      for (yR += 3; bR < yR;) RW = CW[bR++], wW.push(RW);
      let BW = WW < 16 ? GW(WW) : nW(WW);
      return wW.string = null != BW ? BW : UW(WW)
    }

    function SW(WW) {
      if ("string" === typeof WW) return WW;
      if ("number" === typeof WW || "boolean" === typeof WW || "bigint" === typeof WW) return WW.toString();
      if (null == WW) return WW + "";
      if (iR.allowArraysInMapKeys && Array.isArray(WW) && WW.flat().every((WW => ["string", "number", "boolean", "bigint"].includes(typeof WW)))) return WW.flat().toString();
      throw new Error("Invalid property type for record: " + typeof WW)
    }
    const WR = (WW, RW) => {
      let MW = aR().map(SW),
        wW = WW;
      void 0 !== RW && (WW = WW < 32 ? -((RW << 5) + WW) : (RW << 5) + WW, MW.highByte = RW);
      let CW = yR[WW];
      return CW && (CW.isShared || rR) && ((yR.restoreStructures || (yR.restoreStructures = []))[WW] = CW), yR[WW] = MW, MW.read = dW(MW, wW), MW.read()
    };
    PW[0] = () => {}, PW[0].noBuffer = !0, PW[66] = WW => {
      let RW = WW.length,
        MW = BigInt(128 & WW[0] ? WW[0] - 256 : WW[0]);
      for (let wW = 1; wW < RW; wW++) MW <<= BigInt(8), MW += BigInt(WW[wW]);
      return MW
    };
    let RR = {
      Error: Error,
      TypeError: TypeError,
      ReferenceError: ReferenceError
    };
    PW[101] = () => {
      let WW = aR();
      return (RR[WW[0]] || Error)(WW[1], {
        cause: WW[2]
      })
    }, PW[105] = WW => {
      if (!1 === iR.structuredClone) throw new Error("Structured clone extension is disabled");
      let RW = tR.getUint32(AW - 4);
      BW || (BW = new Map);
      let MW, wW = CW[AW];
      MW = wW >= 144 && wW < 160 || 220 == wW || 221 == wW ? [] : {};
      let zR = {
        target: MW
      };
      BW.set(RW, zR);
      let bR = aR();
      return zR.used ? Object.assign(MW, bR) : (zR.target = bR, bR)
    }, PW[112] = WW => {
      if (!1 === iR.structuredClone) throw new Error("Structured clone extension is disabled");
      let RW = tR.getUint32(AW - 4),
        MW = BW.get(RW);
      return MW.used = !0, MW.target
    }, PW[115] = () => new Set(aR());
    const MR = ["Int8", "Uint8", "Uint8Clamped", "Int16", "Uint16", "Int32", "Uint32", "Float32", "Float64", "BigInt64", "BigUint64"].map((WW => WW + "Array"));
    let wR = "object" === typeof globalThis ? globalThis : window;
    PW[116] = WW => {
      let RW = WW[0],
        MW = MR[RW];
      if (!MW) {
        if (16 === RW) {
          let RW = new ArrayBuffer(WW.length - 1);
          return new Uint8Array(RW).set(WW.subarray(1)), RW
        }
        throw new Error("Could not find typed array for code " + RW)
      }
      return new wR[MW](Uint8Array.prototype.slice.call(WW, 1).buffer)
    }, PW[120] = () => {
      let WW = aR();
      return new RegExp(WW[0], WW[1])
    };
    const CR = [];

    function zM(WW) {
      QW && QW();
      let RW = zR,
        MW = AW,
        wW = gR,
        bR = YW,
        PW = JW,
        IW = NW,
        oW = TW,
        lW = BW,
        FW = eW,
        fW = new Uint8Array(CW.slice(0, zR)),
        cR = yR,
        XW = yR.slice(0, yR.length),
        jR = iR,
        kR = rR,
        aR = WW();
      return zR = RW, AW = MW, gR = wW, YW = bR, JW = PW, NW = IW, TW = oW, BW = lW, eW = FW, CW = fW, rR = kR, (yR = cR).splice(0, yR.length, ...XW), iR = jR, tR = new DataView(CW.buffer, CW.byteOffset, CW.byteLength), aR
    }

    function AR() {
      CW = null, BW = null, yR = null
    }
    PW[98] = WW => {
      let RW = (WW[0] << 24) + (WW[1] << 16) + (WW[2] << 8) + WW[3],
        MW = AW;
      return AW += RW - WW.length, eW = CR, (eW = [LW(), LW()]).position0 = 0, eW.position1 = 0, eW.postBundlePosition = AW, AW = MW, aR()
    }, PW[255] = WW => 4 == WW.length ? new Date(1e3 * (16777216 * WW[0] + (WW[1] << 16) + (WW[2] << 8) + WW[3])) : 8 == WW.length ? new Date(((WW[0] << 22) + (WW[1] << 14) + (WW[2] << 6) + (WW[3] >> 2)) / 1e6 + 1e3 * (4294967296 * (3 & WW[3]) + 16777216 * WW[4] + (WW[5] << 16) + (WW[6] << 8) + WW[7])) : 12 == WW.length ? new Date(((WW[0] << 24) + (WW[1] << 16) + (WW[2] << 8) + WW[3]) / 1e6 + 1e3 * ((128 & WW[4] ? -281474976710656 : 0) + 1099511627776 * WW[6] + 4294967296 * WW[7] + 16777216 * WW[8] + (WW[9] << 16) + (WW[10] << 8) + WW[11])) : new Date("invalid");
    const bM = new Array(147);
    for (let CM = 0; CM < 256; CM++) bM[CM] = +("1e" + Math.floor(45.15 - .30103 * CM));
    const yM = XW;
    var NR = new XW({
      useRecords: !1
    });
    const eR = NR.unpack,
      BR = NR.unpackMultiple,
      tM = NR.unpack,
      TR = {
        NEVER: 0,
        ALWAYS: 1,
        DECIMAL_ROUND: 3,
        DECIMAL_FIT: 4
      };
    let gM, iM, YR, JR = new Float32Array(1),
      PR = new Uint8Array(JR.buffer, 0, 4);

    function IR(WW) {
      JR[0] = WW;
      let RW = bM[(127 & PR[3]) << 1 | PR[2] >> 7];
      return (RW * WW + (WW > 0 ? .5 : -.5) | 0) / RW
    }
    try {
      gM = new TextEncoder
    } catch (wM) {}
    const oR = "undefined" !== typeof Buffer,
      lR = oR ? function(WW) {
        return Buffer.allocUnsafeSlow(WW)
      } : Uint8Array,
      FR = oR ? Buffer : Uint8Array,
      fR = oR ? 4294967296 : 2144337920;
    let QR, rM, cM, XR, jM, kM = 0,
      aM = null;
    const sR = /[\u0080-\uFFFF]/,
      dR = Symbol("record-id");
    class pR extends XW {
      constructor(WW) {
        let RW, MW, wW, CW;
        super(WW), this.offset = 0;
        let zR = FR.prototype.utf8Write ? function(WW, RW) {
            return QR.utf8Write(WW, RW, QR.byteLength - RW)
          } : !(!gM || !gM.encodeInto) && function(WW, RW) {
            return gM.encodeInto(WW, QR.subarray(RW)).written
          },
          AW = this;
        WW || (WW = {});
        let bR = WW && WW.sequential,
          yR = WW.structures || WW.saveStructures,
          NW = WW.maxSharedStructures;
        if (null == NW && (NW = yR ? 32 : 0), NW > 8160) throw new Error("Maximum maxSharedStructure is 8160");
        WW.structuredClone && void 0 == WW.moreTypes && (this.moreTypes = !0);
        let eW = WW.maxOwnStructures;
        null == eW && (eW = yR ? 32 : 64), this.structures || 0 == WW.useRecords || (this.structures = []);
        let BW = NW > 32 || eW + NW > 64,
          tR = NW + 64,
          TW = NW + eW + 64;
        if (TW > 8256) throw new Error("Maximum maxSharedStructure + maxOwnStructure is 8192");
        let gR = [],
          iR = 0,
          YW = 0;
        this.pack = this.encode = function(WW, zR) {
          if (QR || (QR = new lR(8192), cM = QR.dataView || (QR.dataView = new DataView(QR.buffer, 0, 8192)), kM = 0), XR = QR.length - 10, XR - kM < 2048 ? (QR = new lR(QR.length), cM = QR.dataView || (QR.dataView = new DataView(QR.buffer, 0, QR.length)), XR = QR.length - 10, kM = 0) : kM = kM + 7 & 2147483640, RW = kM, zR & ZR && (kM += 255 & zR), CW = AW.structuredClone ? new Map : null, AW.bundleStrings && "string" !== typeof WW ? (aM = [], aM.size = 1 / 0) : aM = null, wW = AW.structures, wW) {
            wW.uninitialized && (wW = AW._mergeStructures(AW.getStructures()));
            let WW = wW.sharedLength || 0;
            if (WW > NW) throw new Error("Shared structures is larger than maximum shared structures, try increasing maxSharedStructures to " + wW.sharedLength);
            if (!wW.transitions) {
              wW.transitions = Object.create(null);
              for (let RW = 0; RW < WW; RW++) {
                let WW = wW[RW];
                if (!WW) continue;
                let MW, CW = wW.transitions;
                for (let RW = 0, wW = WW.length; RW < wW; RW++) {
                  let wW = WW[RW];
                  MW = CW[wW], MW || (MW = CW[wW] = Object.create(null)), CW = MW
                }
                CW[dR] = RW + 64
              }
              this.lastNamedStructuresLength = WW
            }
            bR || (wW.nextId = WW + 64)
          }
          let yR;
          MW && (MW = !1);
          try {
            AW.randomAccessStructure && WW && WW.constructor && WW.constructor === Object ? XW(WW) : IW(WW);
            let MW = aM;
            if (aM && VR(RW, IW, 0), CW && CW.idsToInsert) {
              let WW = CW.idsToInsert.sort(((WW, RW) => WW.offset > RW.offset ? 1 : -1)),
                wW = WW.length,
                zR = -1;
              for (; MW && wW > 0;) {
                let CW = WW[--wW].offset + RW;
                CW < MW.stringsPosition + RW && -1 === zR && (zR = 0), CW > MW.position + RW ? zR >= 0 && (zR += 6) : (zR >= 0 && (cM.setUint32(MW.position + RW, cM.getUint32(MW.position + RW) + zR), zR = -1), MW = MW.previous, wW++)
              }
              zR >= 0 && MW && cM.setUint32(MW.position + RW, cM.getUint32(MW.position + RW) + zR), kM += 6 * WW.length, kM > XR && QW(kM), AW.offset = kM;
              let bR = function(WW, RW) {
                let MW, wW = 6 * RW.length,
                  CW = WW.length - wW;
                for (; MW = RW.pop();) {
                  let RW = MW.offset,
                    zR = MW.id;
                  WW.copyWithin(RW + wW, RW, CW), wW -= 6;
                  let AW = RW + wW;
                  WW[AW++] = 214, WW[AW++] = 105, WW[AW++] = zR >> 24, WW[AW++] = zR >> 16 & 255, WW[AW++] = zR >> 8 & 255, WW[AW++] = 255 & zR, CW = RW
                }
                return WW
              }(QR.subarray(RW, kM), WW);
              return CW = null, bR
            }
            return AW.offset = kM, zR & DR ? (QR.start = RW, QR.end = kM, QR) : QR.subarray(RW, kM)
          } catch (wM) {
            throw yR = wM, wM
          } finally {
            if (wW && (JW(), MW && AW.saveStructures)) {
              let MW = wW.sharedLength || 0,
                CW = QR.subarray(RW, kM),
                bR = xM(wW, AW);
              if (!yR) return !1 === AW.saveStructures(bR, bR.isCompatible) ? AW.pack(WW, zR) : (AW.lastNamedStructuresLength = MW, QR.length > 1073741824 && (QR = null), CW)
            }
            QR.length > 1073741824 && (QR = null), zR & qM && (kM = RW)
          }
        };
        const JW = () => {
            YW < 10 && YW++;
            let WW = wW.sharedLength || 0;
            if (wW.length > WW && !bR && (wW.length = WW), iR > 1e4) wW.transitions = null, YW = 0, iR = 0, gR.length > 0 && (gR = []);
            else if (gR.length > 0 && !bR) {
              for (let WW = 0, RW = gR.length; WW < RW; WW++) gR[WW][dR] = 0;
              gR = []
            }
          },
          PW = WW => {
            var RW = WW.length;
            RW < 16 ? QR[kM++] = 144 | RW : RW < 65536 ? (QR[kM++] = 220, QR[kM++] = RW >> 8, QR[kM++] = 255 & RW) : (QR[kM++] = 221, cM.setUint32(kM, RW), kM += 4);
            for (let MW = 0; MW < RW; MW++) IW(WW[MW])
          },
          IW = WW => {
            kM > XR && (QR = QW(kM));
            var MW, wW = typeof WW;
            if ("string" === wW) {
              let wW, CW = WW.length;
              if (aM && CW >= 4 && CW < 4096) {
                if ((aM.size += CW) > 21760) {
                  let WW, MW, wW = (aM[0] ? 3 * aM[0].length + aM[1].length : 0) + 10;
                  kM + wW > XR && (QR = QW(kM + wW)), aM.position ? (MW = aM, QR[kM] = 200, kM += 3, QR[kM++] = 98, WW = kM - RW, kM += 4, VR(RW, IW, 0), cM.setUint16(WW + RW - 3, kM - RW - WW)) : (QR[kM++] = 214, QR[kM++] = 98, WW = kM - RW, kM += 4), aM = ["", ""], aM.previous = MW, aM.size = 0, aM.position = WW
                }
                let MW = sR.test(WW);
                return aM[MW ? 0 : 1] += WW, QR[kM++] = 193, void IW(MW ? -CW : CW)
              }
              wW = CW < 32 ? 1 : CW < 256 ? 2 : CW < 65536 ? 3 : 5;
              let AW = 3 * CW;
              if (kM + AW > XR && (QR = QW(kM + AW)), CW < 64 || !zR) {
                let RW, zR, AW, bR = kM + wW;
                for (RW = 0; RW < CW; RW++) zR = WW.charCodeAt(RW), zR < 128 ? QR[bR++] = zR : zR < 2048 ? (QR[bR++] = zR >> 6 | 192, QR[bR++] = 63 & zR | 128) : 55296 === (64512 & zR) && 56320 === (64512 & (AW = WW.charCodeAt(RW + 1))) ? (zR = 65536 + ((1023 & zR) << 10) + (1023 & AW), RW++, QR[bR++] = zR >> 18 | 240, QR[bR++] = zR >> 12 & 63 | 128, QR[bR++] = zR >> 6 & 63 | 128, QR[bR++] = 63 & zR | 128) : (QR[bR++] = zR >> 12 | 224, QR[bR++] = zR >> 6 & 63 | 128, QR[bR++] = 63 & zR | 128);
                MW = bR - kM - wW
              } else MW = zR(WW, kM + wW);
              MW < 32 ? QR[kM++] = 160 | MW : MW < 256 ? (wW < 2 && QR.copyWithin(kM + 2, kM + 1, kM + 1 + MW), QR[kM++] = 217, QR[kM++] = MW) : MW < 65536 ? (wW < 3 && QR.copyWithin(kM + 3, kM + 2, kM + 2 + MW), QR[kM++] = 218, QR[kM++] = MW >> 8, QR[kM++] = 255 & MW) : (wW < 5 && QR.copyWithin(kM + 5, kM + 3, kM + 3 + MW), QR[kM++] = 219, cM.setUint32(kM, MW), kM += 4), kM += MW
            } else if ("number" === wW)
              if (WW >>> 0 === WW) WW < 32 || WW < 128 && !1 === this.useRecords || WW < 64 && !this.randomAccessStructure ? QR[kM++] = WW : WW < 256 ? (QR[kM++] = 204, QR[kM++] = WW) : WW < 65536 ? (QR[kM++] = 205, QR[kM++] = WW >> 8, QR[kM++] = 255 & WW) : (QR[kM++] = 206, cM.setUint32(kM, WW), kM += 4);
              else if ((WW | 0) === WW) WW >= -32 ? QR[kM++] = 256 + WW : WW >= -128 ? (QR[kM++] = 208, QR[kM++] = WW + 256) : WW >= -32768 ? (QR[kM++] = 209, cM.setInt16(kM, WW), kM += 2) : (QR[kM++] = 210, cM.setInt32(kM, WW), kM += 4);
            else {
              let RW;
              if ((RW = this.useFloat32) > 0 && WW < 4294967296 && WW >= -2147483648) {
                let MW;
                if (QR[kM++] = 202, cM.setFloat32(kM, WW), RW < 4 || ((MW = WW * bM[(127 & QR[kM]) << 1 | QR[kM + 1] >> 7]) | 0) === MW) return void(kM += 4);
                kM--
              }
              QR[kM++] = 203, cM.setFloat64(kM, WW), kM += 8
            } else if ("object" === wW || "function" === wW)
              if (WW) {
                if (CW) {
                  let MW = CW.get(WW);
                  if (MW) {
                    if (!MW.id) {
                      let WW = CW.idsToInsert || (CW.idsToInsert = []);
                      MW.id = WW.push(MW)
                    }
                    return QR[kM++] = 214, QR[kM++] = 112, cM.setUint32(kM, MW.id), void(kM += 4)
                  }
                  CW.set(WW, {
                    offset: kM - RW
                  })
                }
                let zR = WW.constructor;
                if (zR === Object) fW(WW);
                else if (zR === Array) PW(WW);
                else if (zR === Map)
                  if (this.mapAsEmptyObject) QR[kM++] = 128;
                  else {
                    (MW = WW.size) < 16 ? QR[kM++] = 128 | MW : MW < 65536 ? (QR[kM++] = 222, QR[kM++] = MW >> 8, QR[kM++] = 255 & MW) : (QR[kM++] = 223, cM.setUint32(kM, MW), kM += 4);
                    for (let [RW, MW] of WW) IW(RW), IW(MW)
                  }
                else {
                  for (let RW = 0, MW = iM.length; RW < MW; RW++) {
                    if (WW instanceof YR[RW]) {
                      let MW = iM[RW];
                      if (MW.write) {
                        MW.type && (QR[kM++] = 212, QR[kM++] = MW.type, QR[kM++] = 0);
                        let RW = MW.write.call(this, WW);
                        return void(RW === WW ? Array.isArray(WW) ? PW(WW) : fW(WW) : IW(RW))
                      }
                      let wW, CW = QR,
                        zR = cM,
                        AW = kM;
                      QR = null;
                      try {
                        wW = MW.pack.call(this, WW, (WW => (QR = CW, CW = null, kM += WW, kM > XR && QW(kM), {
                          target: QR,
                          targetView: cM,
                          position: kM - WW
                        })), IW)
                      } finally {
                        CW && (QR = CW, cM = zR, kM = AW, XR = QR.length - 10)
                      }
                      return void(wW && (wW.length + kM > XR && QW(wW.length + kM), kM = ER(wW, QR, kM, MW.type)))
                    }
                  }
                  if (Array.isArray(WW)) PW(WW);
                  else {
                    if (WW.toJSON) {
                      const RW = WW.toJSON();
                      if (RW !== WW) return IW(RW)
                    }
                    if ("function" === wW) return IW(this.writeFunction && this.writeFunction(WW));
                    fW(WW)
                  }
                }
              } else QR[kM++] = 192;
            else if ("boolean" === wW) QR[kM++] = WW ? 195 : 194;
            else if ("bigint" === wW) {
              if (WW < BigInt(1) << BigInt(63) && WW >= -(BigInt(1) << BigInt(63))) QR[kM++] = 211, cM.setBigInt64(kM, WW);
              else if (WW < BigInt(1) << BigInt(64) && WW > 0) QR[kM++] = 207, cM.setBigUint64(kM, WW);
              else {
                if (!this.largeBigIntToFloat) {
                  if (this.largeBigIntToString) return IW(WW.toString());
                  if (this.useBigIntExtension && WW < BigInt(2) ** BigInt(1023) && WW > -(BigInt(2) ** BigInt(1023))) {
                    QR[kM++] = 199, kM++, QR[kM++] = 66;
                    let RW, MW = [];
                    do {
                      let wW = WW & BigInt(255);
                      RW = (wW & BigInt(128)) === (WW < BigInt(0) ? BigInt(128) : BigInt(0)), MW.push(wW), WW >>= BigInt(8)
                    } while (WW !== BigInt(0) && WW !== BigInt(-1) || !RW);
                    QR[kM - 2] = MW.length;
                    for (let WW = MW.length; WW > 0;) QR[kM++] = Number(MW[--WW]);
                    return
                  }
                  throw new RangeError(WW + " was too large to fit in MessagePack 64-bit integer format, use useBigIntExtension, or set largeBigIntToFloat to convert to float-64, or set largeBigIntToString to convert to string")
                }
                QR[kM++] = 203, cM.setFloat64(kM, Number(WW))
              }
              kM += 8
            } else {
              if ("undefined" !== wW) throw new Error("Unknown type: " + wW);
              this.encodeUndefinedAsNil ? QR[kM++] = 192 : (QR[kM++] = 212, QR[kM++] = 0, QR[kM++] = 0)
            }
          },
          oW = this.variableMapSize || this.coercibleKeyAsNumber || this.skipValues ? WW => {
            let RW;
            if (this.skipValues) {
              RW = [];
              for (let MW in WW) "function" === typeof WW.hasOwnProperty && !WW.hasOwnProperty(MW) || this.skipValues.includes(WW[MW]) || RW.push(MW)
            } else RW = Object.keys(WW);
            let MW, wW = RW.length;
            if (wW < 16 ? QR[kM++] = 128 | wW : wW < 65536 ? (QR[kM++] = 222, QR[kM++] = wW >> 8, QR[kM++] = 255 & wW) : (QR[kM++] = 223, cM.setUint32(kM, wW), kM += 4), this.coercibleKeyAsNumber)
              for (let CW = 0; CW < wW; CW++) {
                MW = RW[CW];
                let wW = Number(MW);
                IW(isNaN(wW) ? MW : wW), IW(WW[MW])
              } else
                for (let CW = 0; CW < wW; CW++) IW(MW = RW[CW]), IW(WW[MW])
          } : WW => {
            QR[kM++] = 222;
            let MW = kM - RW;
            kM += 2;
            let wW = 0;
            for (let RW in WW)("function" !== typeof WW.hasOwnProperty || WW.hasOwnProperty(RW)) && (IW(RW), IW(WW[RW]), wW++);
            if (wW > 65535) throw new Error('Object is too large to serialize with fast 16-bit map size, use the "variableMapSize" option to serialize this object');
            QR[MW++ + RW] = wW >> 8, QR[MW + RW] = 255 & wW
          },
          lW = !1 === this.useRecords ? oW : WW.progressiveRecords && !BW ? WW => {
            let MW, CW, zR = wW.transitions || (wW.transitions = Object.create(null)),
              AW = kM++ - RW;
            for (let bR in WW)
              if ("function" !== typeof WW.hasOwnProperty || WW.hasOwnProperty(bR)) {
                if (MW = zR[bR], MW) zR = MW;
                else {
                  let yR = Object.keys(WW),
                    NW = zR;
                  zR = wW.transitions;
                  let eW = 0;
                  for (let WW = 0, RW = yR.length; WW < RW; WW++) {
                    let RW = yR[WW];
                    MW = zR[RW], MW || (MW = zR[RW] = Object.create(null), eW++), zR = MW
                  }
                  AW + RW + 1 == kM ? (kM--, rR(zR, yR, eW)) : cR(zR, yR, AW, eW), CW = !0, zR = NW[bR]
                }
                IW(WW[bR])
              } if (!CW) {
              let MW = zR[dR];
              MW ? QR[AW + RW] = MW : cR(zR, Object.keys(WW), AW, 0)
            }
          } : WW => {
            let RW, MW = wW.transitions || (wW.transitions = Object.create(null)),
              CW = 0;
            for (let wW in WW)("function" !== typeof WW.hasOwnProperty || WW.hasOwnProperty(wW)) && (RW = MW[wW], RW || (RW = MW[wW] = Object.create(null), CW++), MW = RW);
            let zR = MW[dR];
            zR ? zR >= 96 && BW ? (QR[kM++] = 96 + (31 & (zR -= 96)), QR[kM++] = zR >> 5) : QR[kM++] = zR : rR(MW, MW.__keys__ || Object.keys(WW), CW);
            for (let wW in WW)("function" !== typeof WW.hasOwnProperty || WW.hasOwnProperty(wW)) && IW(WW[wW])
          },
          FW = "function" == typeof this.useRecords && this.useRecords,
          fW = FW ? WW => {
            FW(WW) ? lW(WW) : oW(WW)
          } : lW,
          QW = WW => {
            let MW;
            if (WW > 16777216) {
              if (WW - RW > fR) throw new Error("Packed buffer would be larger than maximum buffer size");
              MW = Math.min(fR, 4096 * Math.round(Math.max((WW - RW) * (WW > 67108864 ? 1.25 : 2), 4194304) / 4096))
            } else MW = 1 + (Math.max(WW - RW << 2, QR.length - 1) >> 12) << 12;
            let wW = new lR(MW);
            return cM = wW.dataView || (wW.dataView = new DataView(wW.buffer, 0, MW)), WW = Math.min(WW, QR.length), QR.copy ? QR.copy(wW, 0, RW, WW) : wW.set(QR.slice(RW, WW)), kM -= RW, RW = 0, XR = wW.length - 10, QR = wW
          },
          rR = (WW, RW, CW) => {
            let zR = wW.nextId;
            zR || (zR = 64), zR < tR && this.shouldShareStructure && !this.shouldShareStructure(RW) ? (zR = wW.nextOwnId, zR < TW || (zR = tR), wW.nextOwnId = zR + 1) : (zR >= TW && (zR = tR), wW.nextId = zR + 1);
            let AW = RW.highByte = zR >= 96 && BW ? zR - 96 >> 5 : -1;
            WW[dR] = zR, WW.__keys__ = RW, wW[zR - 64] = RW, zR < tR ? (RW.isShared = !0, wW.sharedLength = zR - 63, MW = !0, AW >= 0 ? (QR[kM++] = 96 + (31 & zR), QR[kM++] = AW) : QR[kM++] = zR) : (AW >= 0 ? (QR[kM++] = 213, QR[kM++] = 114, QR[kM++] = 96 + (31 & zR), QR[kM++] = AW) : (QR[kM++] = 212, QR[kM++] = 114, QR[kM++] = zR), CW && (iR += YW * CW), gR.length >= eW && (gR.shift()[dR] = 0), gR.push(WW), IW(RW))
          },
          cR = (WW, MW, wW, CW) => {
            let zR = QR,
              AW = kM,
              bR = XR,
              yR = RW;
            QR = rM, kM = 0, RW = 0, QR || (rM = QR = new lR(8192)), XR = QR.length - 10, rR(WW, MW, CW), rM = QR;
            let NW = kM;
            if (QR = zR, kM = AW, XR = bR, RW = yR, NW > 1) {
              let WW = kM + NW - 1;
              WW > XR && QW(WW);
              let MW = wW + RW;
              QR.copyWithin(MW + NW, MW + 1, kM), QR.set(rM.slice(0, NW), MW), kM = WW
            } else QR[wW + RW] = rM[0]
          },
          XW = WW => {
            let CW = jM(WW, QR, RW, kM, wW, QW, ((WW, RW, wW) => {
              if (wW) return MW = !0;
              kM = RW;
              let CW = QR;
              return IW(WW), JW(), CW !== QR ? {
                position: kM,
                targetView: cM,
                target: QR
              } : kM
            }), this);
            if (0 === CW) return fW(WW);
            kM = CW
          }
      }
      useBuffer(WW) {
        QR = WW, cM = QR.dataView || (QR.dataView = new DataView(QR.buffer, QR.byteOffset, QR.byteLength)), kM = 0
      }
      set position(WW) {
        kM = WW
      }
      get position() {
        return kM
      }
      set buffer(WW) {
        QR = WW
      }
      get buffer() {
        return QR
      }
      clearSharedData() {
        this.structures && (this.structures = []), this.typedStructs && (this.typedStructs = [])
      }
    }

    function hR(WW, RW, MW, wW) {
      let CW = WW.byteLength;
      if (CW + 1 < 256) {
        var {
          target: zR,
          position: AW
        } = MW(4 + CW);
        zR[AW++] = 199, zR[AW++] = CW + 1
      } else if (CW + 1 < 65536) {
        var {
          target: zR,
          position: AW
        } = MW(5 + CW);
        zR[AW++] = 200, zR[AW++] = CW + 1 >> 8, zR[AW++] = CW + 1 & 255
      } else {
        var {
          target: zR,
          position: AW,
          targetView: bR
        } = MW(7 + CW);
        zR[AW++] = 201, bR.setUint32(AW, CW + 1), AW += 4
      }
      zR[AW++] = 116, zR[AW++] = RW, WW.buffer || (WW = new Uint8Array(WW)), zR.set(new Uint8Array(WW.buffer, WW.byteOffset, WW.byteLength), AW)
    }

    function UR(WW, RW) {
      let MW = WW.byteLength;
      var wW, CW;
      if (MW < 256) {
        var {
          target: wW,
          position: CW
        } = RW(MW + 2);
        wW[CW++] = 196, wW[CW++] = MW
      } else if (MW < 65536) {
        var {
          target: wW,
          position: CW
        } = RW(MW + 3);
        wW[CW++] = 197, wW[CW++] = MW >> 8, wW[CW++] = 255 & MW
      } else {
        var {
          target: wW,
          position: CW,
          targetView: zR
        } = RW(MW + 5);
        wW[CW++] = 198, zR.setUint32(CW, MW), CW += 4
      }
      wW.set(WW, CW)
    }

    function ER(WW, RW, MW, wW) {
      let CW = WW.length;
      switch (CW) {
        case 1:
          RW[MW++] = 212;
          break;
        case 2:
          RW[MW++] = 213;
          break;
        case 4:
          RW[MW++] = 214;
          break;
        case 8:
          RW[MW++] = 215;
          break;
        case 16:
          RW[MW++] = 216;
          break;
        default:
          CW < 256 ? (RW[MW++] = 199, RW[MW++] = CW) : CW < 65536 ? (RW[MW++] = 200, RW[MW++] = CW >> 8, RW[MW++] = 255 & CW) : (RW[MW++] = 201, RW[MW++] = CW >> 24, RW[MW++] = CW >> 16 & 255, RW[MW++] = CW >> 8 & 255, RW[MW++] = 255 & CW)
      }
      return RW[MW++] = wW, RW.set(WW, MW), MW += CW
    }

    function VR(WW, RW, MW) {
      if (aM.length > 0) {
        cM.setUint32(aM.position + WW, kM + MW - aM.position - WW), aM.stringsPosition = kM - WW;
        let wW = aM;
        aM = null, RW(wW[0]), RW(wW[1])
      }
    }

    function mM(WW) {
      if (WW.Class) {
        if (!WW.pack && !WW.write) throw new Error("Extension has no pack or write function");
        if (WW.pack && !WW.type) throw new Error("Extension has no type (numeric code to identify the extension)");
        YR.unshift(WW.Class), iM.unshift(WW)
      }! function(WW) {
        WW.unpack ? PW[WW.type] = WW.unpack : PW[WW.type] = WW
      }(WW)
    }

    function xM(WW, RW) {
      return WW.isCompatible = WW => {
        let MW = !WW || (RW.lastNamedStructuresLength || 0) === WW.length;
        return MW || RW._mergeStructures(WW), MW
      }, WW
    }
    YR = [Date, Set, Error, RegExp, ArrayBuffer, Object.getPrototypeOf(Uint8Array.prototype).constructor, oW], iM = [{
      pack(WW, RW, MW) {
        let wW = WW.getTime() / 1e3;
        if ((this.useTimestamp32 || 0 === WW.getMilliseconds()) && wW >= 0 && wW < 4294967296) {
          let {
            target: WW,
            targetView: MW,
            position: CW
          } = RW(6);
          WW[CW++] = 214, WW[CW++] = 255, MW.setUint32(CW, wW)
        } else if (wW > 0 && wW < 4294967296) {
          let {
            target: MW,
            targetView: CW,
            position: zR
          } = RW(10);
          MW[zR++] = 215, MW[zR++] = 255, CW.setUint32(zR, 4e6 * WW.getMilliseconds() + (wW / 1e3 / 4294967296 | 0)), CW.setUint32(zR + 4, wW)
        } else if (isNaN(wW)) {
          if (this.onInvalidDate) return RW(0), MW(this.onInvalidDate());
          let {
            target: WW,
            targetView: wW,
            position: CW
          } = RW(3);
          WW[CW++] = 212, WW[CW++] = 255, WW[CW++] = 255
        } else {
          let {
            target: MW,
            targetView: CW,
            position: zR
          } = RW(15);
          MW[zR++] = 199, MW[zR++] = 12, MW[zR++] = 255, CW.setUint32(zR, 1e6 * WW.getMilliseconds()), CW.setBigInt64(zR + 4, BigInt(Math.floor(wW)))
        }
      }
    }, {
      pack(WW, RW, MW) {
        if (this.setAsEmptyObject) return RW(0), MW({});
        let wW = Array.from(WW),
          {
            target: CW,
            position: zR
          } = RW(this.moreTypes ? 3 : 0);
        this.moreTypes && (CW[zR++] = 212, CW[zR++] = 115, CW[zR++] = 0), MW(wW)
      }
    }, {
      pack(WW, RW, MW) {
        let {
          target: wW,
          position: CW
        } = RW(this.moreTypes ? 3 : 0);
        this.moreTypes && (wW[CW++] = 212, wW[CW++] = 101, wW[CW++] = 0), MW([WW.name, WW.message, WW.cause])
      }
    }, {
      pack(WW, RW, MW) {
        let {
          target: wW,
          position: CW
        } = RW(this.moreTypes ? 3 : 0);
        this.moreTypes && (wW[CW++] = 212, wW[CW++] = 120, wW[CW++] = 0), MW([WW.source, WW.flags])
      }
    }, {
      pack(WW, RW) {
        this.moreTypes ? hR(WW, 16, RW) : UR(oR ? Buffer.from(WW) : new Uint8Array(WW), RW)
      }
    }, {
      pack(WW, RW) {
        let MW = WW.constructor;
        MW !== FR && this.moreTypes ? hR(WW, MR.indexOf(MW.name), RW) : UR(WW, RW)
      }
    }, {
      pack(WW, RW) {
        let {
          target: MW,
          position: wW
        } = RW(1);
        MW[wW] = 193
      }
    }];
    let vM = new pR({
      useRecords: !1
    });
    const KR = vM.pack,
      uR = vM.pack,
      OR = pR,
      {
        NEVER: nR,
        ALWAYS: GR,
        DECIMAL_ROUND: LR,
        DECIMAL_FIT: HR
      } = TR,
      DR = 512,
      qM = 1024,
      ZR = 2048;
    const SR = function(WW) {
        let RW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        if (!WW || "object" !== typeof WW) throw new Error("first argument must be an Iterable, Async Iterable, Iterator, Async Iterator, or a promise");
        const MW = new XW(RW);
        let wW;
        const CW = WW => {
          let RW;
          wW && (WW = Buffer.concat([wW, WW]), wW = void 0);
          try {
            RW = MW.unpackMultiple(WW)
          } catch (CW) {
            if (!CW.incomplete) throw CW;
            wW = WW.slice(CW.lastPosition), RW = CW.values
          }
          return RW
        };
        return "function" === typeof WW[Symbol.iterator] ? function*() {
          for (const RW of WW) yield* CW(RW)
        }() : "function" === typeof WW[Symbol.asyncIterator] ? async function*() {
          for await (const RW of WW) yield* CW(RW)
        }(): void 0
      },
      WM = function(WW) {
        let RW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        if (WW && "object" === typeof WW) {
          if ("function" === typeof WW[Symbol.iterator]) return function*(WW, RW) {
            const MW = new pR(RW);
            for (const wW of WW) yield MW.pack(wW)
          }(WW, RW);
          if ("function" === typeof WW.then || "function" === typeof WW[Symbol.asyncIterator]) return async function*(WW, RW) {
            const MW = new pR(RW);
            for await (const wW of WW) yield MW.pack(wW)
          }(WW, RW);
          throw new Error("first argument must be an Iterable, Async Iterable, Iterator, Async Iterator, or a Promise")
        }
        throw new Error("first argument must be an Iterable, Async Iterable, or a Promise for an Async Iterable")
      },
      RM = !1,
      MM = !0
  },
  7975: (WW, RW, MW) => {
    MW.r(RW), MW.d(RW, {
      $changes: () => iR,
      $childType: () => YW,
      $decoder: () => eW,
      $deleteByIndex: () => TW,
      $encoder: () => NW,
      $filter: () => BW,
      $getByIndex: () => tR,
      $numFields: () => cR,
      $refId: () => bR,
      $track: () => yR,
      $values: () => lW,
      ArraySchema: () => Mw,
      Callbacks: () => MC,
      ChangeTree: () => kw,
      CollectionSchema: () => zC,
      Decoder: () => Lw,
      Encoder: () => uw,
      FieldBuilder: () => yC,
      MapSchema: () => Cw,
      Metadata: () => LR,
      OPERATION: () => CW,
      Reflection: () => Zw,
      ReflectionField: () => Dw,
      ReflectionType: () => qC,
      Root: () => aC,
      Schema: () => jC,
      SetSchema: () => Aw,
      StateCallbackStrategy: () => RC,
      StateView: () => Uw,
      StreamSchema: () => bC,
      TypeContext: () => xM,
      createPool: () => CC,
      decode: () => IR,
      decodeKeyValueOperation: () => DM,
      decodeSchemaOperation: () => HM,
      defineCustomTypes: () => fR,
      defineTypes: () => rC,
      deprecated: () => fw,
      dumpChanges: () => Xw,
      encode: () => RR,
      encodeArray: () => VM,
      encodeIndexedEntry: () => UM,
      encodeKeyValueOperation: () => EM,
      encodeMapEntry: () => hM,
      encodeSchemaOperation: () => pM,
      iC: () => iC,
      fullStateOnly: () => Iw,
      getDecoderStateCallbacks: () => Sw,
      getEncodeDescriptor: () => WM,
      getRawChangesCallback: () => WC,
      isBuilder: () => Nw,
      patchOnly: () => Pw,
      registerType: () => FR,
      schema: () => cC,
      t: () => Tw,
      type: () => ow,
      unreliable: () => Jw,
      view: () => Yw
    });
    const wW = 255;
    var CW;

    function zR(WW) {
      Object.defineProperty(WW, Symbol.metadata, {
        value: void 0,
        writable: !0,
        configurable: !0,
        enumerable: !1
      })
    }! function(WW) {
      WW[WW.ADD = 128] = "ADD", WW[WW.REPLACE = 0] = "REPLACE", WW[WW.DELETE = 64] = "DELETE", WW[WW.DELETE_AND_MOVE = 96] = "DELETE_AND_MOVE", WW[WW.MOVE_AND_ADD = 160] = "MOVE_AND_ADD", WW[WW.DELETE_AND_ADD = 192] = "DELETE_AND_ADD", WW[WW.CLEAR = 10] = "CLEAR", WW[WW.REVERSE = 15] = "REVERSE", WW[WW.MOVE = 32] = "MOVE", WW[WW.DELETE_BY_REFID = 33] = "DELETE_BY_REFID", WW[WW.ADD_BY_REFID = 129] = "ADD_BY_REFID"
    }(CW || (CW = {})), Symbol.metadata ??= Symbol.for("Symbol.metadata");
    const AW = "undefined" !== typeof globalThis ? globalThis : "undefined" !== typeof global ? global : "undefined" !== typeof self ? self : "undefined" !== typeof window ? window : {};
    if ("function" === typeof Symbol && "function" !== typeof Symbol.for) {
      const WW = "colyseus.symbolRegistry",
        RW = AW[WW] || (AW[WW] = Object.create(null));
      Symbol.for = function(WW) {
        return RW[WW] || (RW[WW] = Symbol(WW))
      }, Symbol.keyFor = function(WW) {
        for (const MW in RW)
          if (RW[MW] === WW) return MW
      }
    }
    const bR = Symbol.for("$refId"),
      yR = "~track",
      NW = "~encoder",
      eW = "~decoder",
      BW = "~filter",
      tR = "~getByIndex",
      TW = "~deleteByIndex",
      gR = "~resyncPrune",
      iR = Symbol.for("$changes"),
      YW = Symbol.for("$childType"),
      JW = Symbol.for("$proxyTarget"),
      PW = "~onEncodeEnd",
      IW = "~reset",
      oW = "~onDecodeEnd",
      lW = Symbol.for("$values"),
      FW = "~builder",
      fW = "~descriptors",
      QW = "~__encodeDescriptor",
      rR = "~encoders",
      cR = "~__numFields",
      XW = "~__refTypeFieldIndexes",
      jR = "~__viewFieldIndexes",
      kR = "$__fieldIndexesByViewTag",
      aR = "~__unreliableFieldIndexes",
      sW = "~__patchOnlyFieldIndexes",
      dW = "~__fullSyncSkipIndexes",
      pW = "~__fullStateOnlyFieldIndexes",
      hW = "~__streamFieldIndexes",
      UW = "~__streamPriorities";
    let EW;
    try {
      EW = new TextEncoder
    } catch (zz) {}
    const VW = new ArrayBuffer(8),
      mR = new Int32Array(VW),
      xR = new Float32Array(VW),
      vR = new Float64Array(VW),
      KW = new BigInt64Array(VW),
      uW = "undefined" !== typeof Buffer && Buffer.byteLength ? Buffer.byteLength : function(WW, RW) {
        for (var MW = 0, wW = 0, CW = 0, zR = WW.length; CW < zR; CW++)(MW = WW.charCodeAt(CW)) < 128 ? wW += 1 : MW < 2048 ? wW += 2 : MW < 55296 || MW >= 57344 ? wW += 3 : (CW++, wW += 4);
        return wW
      };

    function OW(WW, RW, MW) {
      for (var wW = 0, CW = 0, zR = RW.length; CW < zR; CW++)(wW = RW.charCodeAt(CW)) < 128 ? WW[MW.offset++] = wW : wW < 2048 ? (WW[MW.offset] = 192 | wW >> 6, WW[MW.offset + 1] = 128 | 63 & wW, MW.offset += 2) : wW < 55296 || wW >= 57344 ? (WW[MW.offset] = 224 | wW >> 12, WW[MW.offset + 1] = 128 | wW >> 6 & 63, WW[MW.offset + 2] = 128 | 63 & wW, MW.offset += 3) : (CW++, wW = 65536 + ((1023 & wW) << 10 | 1023 & RW.charCodeAt(CW)), WW[MW.offset] = 240 | wW >> 18, WW[MW.offset + 1] = 128 | wW >> 12 & 63, WW[MW.offset + 2] = 128 | wW >> 6 & 63, WW[MW.offset + 3] = 128 | 63 & wW, MW.offset += 4)
    }

    function nW(WW, RW, MW) {
      WW[MW.offset++] = 255 & RW
    }

    function GW(WW, RW, MW) {
      WW[MW.offset++] = 255 & RW, WW[MW.offset++] = RW >> 8 & 255
    }

    function LW(WW, RW, MW) {
      WW[MW.offset++] = 255 & RW, WW[MW.offset++] = RW >> 8 & 255
    }

    function HW(WW, RW, MW) {
      WW[MW.offset++] = 255 & RW, WW[MW.offset++] = RW >> 8 & 255, WW[MW.offset++] = RW >> 16 & 255, WW[MW.offset++] = RW >> 24 & 255
    }

    function DW(WW, RW, MW) {
      const wW = RW >> 24,
        CW = RW >> 16,
        zR = RW >> 8,
        AW = RW;
      WW[MW.offset++] = 255 & AW, WW[MW.offset++] = 255 & zR, WW[MW.offset++] = 255 & CW, WW[MW.offset++] = 255 & wW
    }

    function qR(WW, RW, MW) {
      const wW = Math.floor(RW / Math.pow(2, 32));
      DW(WW, RW >>> 0, MW), DW(WW, wW, MW)
    }

    function ZW(WW, RW, MW) {
      const wW = RW / Math.pow(2, 32) | 0;
      DW(WW, RW >>> 0, MW), DW(WW, wW, MW)
    }

    function SW(WW, RW, MW) {
      xR[0] = RW, HW(WW, mR[0], MW)
    }

    function WR(WW, RW, MW) {
      vR[0] = RW, HW(WW, mR[0], MW), HW(WW, mR[1], MW)
    }
    const RR = {
        int8: nW,
        uint8: function(WW, RW, MW) {
          WW[MW.offset++] = 255 & RW
        },
        int16: GW,
        uint16: LW,
        int32: HW,
        uint32: DW,
        int64: qR,
        uint64: ZW,
        bigint64: function(WW, RW, MW) {
          KW[0] = BigInt.asIntN(64, RW), HW(WW, mR[0], MW), HW(WW, mR[1], MW)
        },
        biguint64: function(WW, RW, MW) {
          KW[0] = BigInt.asIntN(64, RW), HW(WW, mR[0], MW), HW(WW, mR[1], MW)
        },
        float32: SW,
        float64: WR,
        boolean: function(WW, RW, MW) {
          WW[MW.offset++] = RW ? 1 : 0
        },
        string: function(WW, RW, MW) {
          RW || (RW = "");
          let wW = uW(RW, "utf8"),
            CW = 0;
          if (wW < 32) WW[MW.offset++] = 160 | wW, CW = 1;
          else if (wW < 256) WW[MW.offset++] = 217, WW[MW.offset++] = wW, CW = 2;
          else if (wW < 65536) WW[MW.offset++] = 218, LW(WW, wW, MW), CW = 3;
          else {
            if (!(wW < 4294967296)) throw new Error("String too long");
            WW[MW.offset++] = 219, DW(WW, wW, MW), CW = 5
          }
          return OW(WW, RW, MW), CW + wW
        },
        number: function WW(RW, MW, wW) {
          return isNaN(MW) ? WW(RW, 0, wW) : isFinite(MW) ? MW !== (0 | MW) ? Math.abs(MW) <= 34028235e31 && (xR[0] = MW, Math.abs(Math.abs(xR[0]) - Math.abs(MW)) < 1e-4) ? (RW[wW.offset++] = 202, SW(RW, MW, wW), 5) : (RW[wW.offset++] = 203, WR(RW, MW, wW), 9) : MW >= 0 ? MW < 128 ? (RW[wW.offset++] = 255 & MW, 1) : MW < 256 ? (RW[wW.offset++] = 204, RW[wW.offset++] = 255 & MW, 2) : MW < 65536 ? (RW[wW.offset++] = 205, LW(RW, MW, wW), 3) : MW < 4294967296 ? (RW[wW.offset++] = 206, DW(RW, MW, wW), 5) : (RW[wW.offset++] = 207, ZW(RW, MW, wW), 9) : MW >= -32 ? (RW[wW.offset++] = 224 | MW + 32, 1) : MW >= -128 ? (RW[wW.offset++] = 208, nW(RW, MW, wW), 2) : MW >= -32768 ? (RW[wW.offset++] = 209, GW(RW, MW, wW), 3) : MW >= -2147483648 ? (RW[wW.offset++] = 210, HW(RW, MW, wW), 5) : (RW[wW.offset++] = 211, qR(RW, MW, wW), 9) : WW(RW, MW > 0 ? Number.MAX_SAFE_INTEGER : -Number.MAX_SAFE_INTEGER, wW)
        },
        utf8Write: OW,
        utf8Length: uW
      },
      MR = new ArrayBuffer(8),
      wR = new Int32Array(MR),
      CR = new Float32Array(MR),
      zM = new Float64Array(MR),
      AR = new BigUint64Array(MR),
      bM = new BigInt64Array(MR);

    function yM(WW, RW, MW) {
      MW > WW.length - RW.offset && (MW = WW.length - RW.offset);
      for (var wW = "", CW = 0, zR = RW.offset, AW = RW.offset + MW; zR < AW; zR++) {
        var bR = WW[zR];
        if (0 !== (128 & bR))
          if (192 !== (224 & bR))
            if (224 !== (240 & bR)) {
              if (240 !== (248 & bR)) {
                console.error("decode.utf8Read(): Invalid byte " + bR + " at offset " + zR + ". Skip to end of string: " + (RW.offset + MW));
                break
              }(CW = (7 & bR) << 18 | (63 & WW[++zR]) << 12 | (63 & WW[++zR]) << 6 | 63 & WW[++zR]) >= 65536 ? (CW -= 65536, wW += String.fromCharCode(55296 + (CW >>> 10), 56320 + (1023 & CW))) : wW += String.fromCharCode(CW)
            } else wW += String.fromCharCode((15 & bR) << 12 | (63 & WW[++zR]) << 6 | 63 & WW[++zR]);
        else wW += String.fromCharCode((31 & bR) << 6 | 63 & WW[++zR]);
        else wW += String.fromCharCode(bR)
      }
      return RW.offset += MW, wW
    }

    function NR(WW, RW) {
      return eR(WW, RW) << 24 >> 24
    }

    function eR(WW, RW) {
      return WW[RW.offset++]
    }

    function BR(WW, RW) {
      return tM(WW, RW) << 16 >> 16
    }

    function tM(WW, RW) {
      return WW[RW.offset++] | WW[RW.offset++] << 8
    }

    function TR(WW, RW) {
      return WW[RW.offset++] | WW[RW.offset++] << 8 | WW[RW.offset++] << 16 | WW[RW.offset++] << 24
    }

    function gM(WW, RW) {
      return TR(WW, RW) >>> 0
    }

    function iM(WW, RW) {
      return wR[0] = TR(WW, RW), CR[0]
    }

    function YR(WW, RW) {
      return wR[0] = TR(WW, RW), wR[1] = TR(WW, RW), zM[0]
    }

    function JR(WW, RW) {
      const MW = gM(WW, RW);
      return TR(WW, RW) * Math.pow(2, 32) + MW
    }

    function PR(WW, RW) {
      const MW = gM(WW, RW);
      return gM(WW, RW) * Math.pow(2, 32) + MW
    }
    const IR = {
        utf8Read: yM,
        int8: NR,
        uint8: eR,
        int16: BR,
        uint16: tM,
        int32: TR,
        uint32: gM,
        float32: iM,
        float64: YR,
        int64: JR,
        uint64: PR,
        bigint64: function(WW, RW) {
          return wR[0] = TR(WW, RW), wR[1] = TR(WW, RW), bM[0]
        },
        biguint64: function(WW, RW) {
          return wR[0] = TR(WW, RW), wR[1] = TR(WW, RW), AR[0]
        },
        boolean: function(WW, RW) {
          return eR(WW, RW) > 0
        },
        string: function(WW, RW) {
          const MW = WW[RW.offset++];
          let wW;
          return MW < 192 ? wW = 31 & MW : 217 === MW ? wW = eR(WW, RW) : 218 === MW ? wW = tM(WW, RW) : 219 === MW && (wW = gM(WW, RW)), yM(WW, RW, wW)
        },
        number: function(WW, RW) {
          const MW = WW[RW.offset++];
          return MW < 128 ? MW : 202 === MW ? iM(WW, RW) : 203 === MW ? YR(WW, RW) : 204 === MW ? eR(WW, RW) : 205 === MW ? tM(WW, RW) : 206 === MW ? gM(WW, RW) : 207 === MW ? PR(WW, RW) : 208 === MW ? NR(WW, RW) : 209 === MW ? BR(WW, RW) : 210 === MW ? TR(WW, RW) : 211 === MW ? JR(WW, RW) : MW > 223 ? -1 * (255 - MW + 1) : void 0
        },
        stringCheck: function(WW, RW) {
          const MW = WW[RW.offset];
          return MW < 192 && MW > 160 || 217 === MW || 218 === MW || 219 === MW
        }
      },
      oR = {},
      lR = new Map;

    function FR(WW, RW) {
      RW.constructor && (Object.prototype.hasOwnProperty.call(RW, "constructor") && null == RW.constructor[Symbol.metadata] && zR(RW.constructor), lR.set(RW.constructor, WW), oR[WW] = RW), RW.encode && (RR[WW] = RW.encode), RW.decode && (IR[WW] = RW.decode)
    }

    function fR(WW) {
      for (const RW in WW) FR(RW, WW[RW]);
      return WW => ow(WW)
    }
    const QR = "ArraySchema does not support streaming \u2014 positional ops (splice / unshift / reverse) shift subsequent indexes, so holding ADDs back for a later tick under `maxPerTick` would desync the decoder. Use `t.stream(X)` (stable monotonic positions) or `t.map(X).stream()` (stable keys) instead.";

    function rM() {
      return {
        pendingByView: new Map,
        sentByView: new Map,
        broadcastPending: new Set,
        sentBroadcast: new Set,
        broadcastDeletes: new Set,
        maxPerTick: 32
      }
    }

    function cM(WW) {
      return WW._stream ??= rM()
    }

    function XR(WW, RW, MW) {
      0 === RW.activeViews.size && cM(WW).broadcastPending.add(MW)
    }

    function jM(WW, RW, MW, wW) {
      const zR = WW._stream;
      if (void 0 === zR) return !0;
      let AW = !1;
      return zR.broadcastPending.delete(wW) ? AW = !0 : zR.sentBroadcast.delete(wW) && zR.broadcastDeletes.add(wW), RW.forEachActiveView((WW => {
        const RW = zR.pendingByView.get(WW.id);
        if (RW?.has(wW)) return RW.delete(wW), void(AW = !0);
        const bR = zR.sentByView.get(WW.id);
        if (bR?.has(wW)) {
          bR.delete(wW);
          let RW = WW.changes.get(MW);
          void 0 === RW && (RW = new Map, WW.changes.set(MW, RW)), RW.set(wW, CW.DELETE)
        }
      })), AW
    }

    function kM(WW, RW) {
      const MW = WW._stream?.pendingByView;
      if (void 0 === MW) return !1;
      for (const [wW, CW] of MW)
        if (CW.size > 0 && void 0 !== RW.activeViews.get(wW)?.deref()) return !0;
      return !1
    }

    function aM(WW) {
      const RW = WW._stream;
      return void 0 !== RW && (RW.broadcastPending.size > 0 || RW.broadcastDeletes.size > 0)
    }

    function sR(WW, RW, MW) {
      const wW = cM(WW);
      let CW = wW.pendingByView.get(RW);
      void 0 === CW && (CW = new Set, wW.pendingByView.set(RW, CW)), CW.add(MW)
    }

    function dR(WW, RW) {
      const MW = WW._stream;
      void 0 !== MW && (MW.pendingByView.delete(RW), MW.sentByView.delete(RW), MW.priorityByView?.delete(RW))
    }
    const pR = {
      8: "uint8",
      16: "uint16",
      32: "uint32"
    };

    function hR(WW) {
      if (null == WW || "object" !== typeof WW) throw new Error("t.quantized(): options object with { min, max } is required.");
      const {
        min: RW,
        max: MW
      } = WW;
      if ("number" !== typeof RW || "number" !== typeof MW || !(MW > RW) || !Number.isFinite(RW) || !Number.isFinite(MW)) throw new Error(`t.quantized(): require finite min < max (got min=${RW}, max=${MW}).`);
      const wW = WW.bits ?? 16;
      if (8 !== wW && 16 !== wW && 32 !== wW) throw new Error(`t.quantized(): bits must be 8, 16 or 32 (got ${wW}).`);
      const CW = WW.mode ?? "clamp";
      if ("clamp" !== CW && "wrap" !== CW) throw new Error(`t.quantized(): mode must be "clamp" or "wrap" (got ${JSON.stringify(CW)}).`);
      const zR = "wrap" === CW,
        AW = Math.pow(2, wW);
      return {
        min: RW,
        max: MW,
        bits: wW,
        wrap: zR,
        wire: pR[wW],
        range: MW - RW,
        span: zR ? AW : RW === -MW ? AW - 2 : AW - 1
      }
    }

    function UR(WW) {
      return null !== WW && "object" === typeof WW && void 0 !== WW.quantized
    }

    function ER(WW, RW) {
      if (WW.wrap) {
        if (!Number.isFinite(RW)) return 0;
        const MW = WW.range;
        let wW = (RW - WW.min) % MW;
        wW < 0 && (wW += MW);
        const CW = WW.span;
        return Math.floor(wW / MW * CW + .5) % CW
      }
      if (RW !== RW) return 0;
      const MW = RW < WW.min ? WW.min : RW > WW.max ? WW.max : RW;
      return Math.floor((MW - WW.min) / WW.range * WW.span + .5)
    }

    function VR(WW, RW) {
      return WW.min + RW / WW.span * WW.range
    }

    function mM(WW) {
      const RW = RR[WW.wire];
      return (MW, wW, CW) => RW(MW, ER(WW, wW), CW)
    }
    class xM {
      types = {};
      schemas = new Map;
      hasFilters = !1;
      static inheritedTypes = new WeakMap;
      static cachedContexts = new WeakMap;
      static register(WW) {
        const RW = Object.getPrototypeOf(WW);
        if (RW !== jC) {
          let MW = xM.inheritedTypes.get(RW);
          MW || (MW = new Set, xM.inheritedTypes.set(RW, MW)), MW.add(WW)
        }
      }
      static cache(WW) {
        let RW = xM.cachedContexts.get(WW);
        return RW || (RW = new xM(WW), xM.cachedContexts.set(WW, RW)), RW
      }
      constructor(WW) {
        WW && this.discoverTypes(WW)
      }
      has(WW) {
        return this.schemas.has(WW)
      }
      get(WW) {
        return this.types[WW]
      }
      add(WW) {
        let RW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.schemas.size;
        return !this.schemas.has(WW) && (this.types[RW] = WW, null == WW[Symbol.metadata] && LR.initialize(WW), this.schemas.set(WW, RW), !0)
      }
      getTypeId(WW) {
        return this.schemas.get(WW)
      }
      discoverTypes(WW) {
        if (!this.add(WW)) return;
        xM.inheritedTypes.get(WW)?.forEach((WW => {
          this.discoverTypes(WW)
        }));
        let RW = WW;
        for (;
          (RW = Object.getPrototypeOf(RW)) && RW !== jC && RW !== Function.prototype;) this.discoverTypes(RW);
        const MW = WW[Symbol.metadata];
        (MW[jR] || MW[hW]) && (this.hasFilters = !0);
        for (const wW in MW) {
          const WW = MW[wW].type;
          if ("string" !== typeof WW && !UR(WW))
            if ("function" === typeof WW) this.discoverTypes(WW);
            else {
              const RW = Object.values(WW)[0];
              if ("string" === typeof RW) continue;
              this.discoverTypes(RW)
            }
        }
      }
      debug() {
        return `TypeContext ->\n\tSchema types: ${this.schemas.size}\n\thasFilters: ${this.hasFilters}`
      }
    }

    function vM(WW) {
      const RW = uR(WW);
      return RW ? {
        complexTypeKlass: oR[RW],
        childType: WW[RW]
      } : {
        complexTypeKlass: !1,
        childType: WW
      }
    }

    function KR(WW, RW) {
      const MW = OR(WW),
        wW = uR(MW),
        CW = wW && uR(MW[wW]);
      if (CW) throw new Error(`${RW?`${RW}: `:""}@colyseus/schema: nested collections are not supported ("${wW}" of "${CW}"). Collections can only hold primitive types or Schema classes, wrap the inner ${CW} in a Schema class.`);
      return MW
    }

    function uR(WW) {
      return "object" === typeof WW && null !== WW ? Object.keys(WW).find((WW => void 0 !== oR[WW])) : void 0
    }

    function OR(WW) {
      if ("object" !== typeof WW || null === WW) return WW;
      if (Array.isArray(WW)) return {
        array: OR(WW[0])
      };
      const RW = function(WW) {
        const RW = Object.keys(WW),
          MW = RW.filter((WW => /\d+/.test(WW)));
        if (MW.length > 0 && MW.length === RW.length / 2 && WW[WW[MW[0]]] == MW[0]) return "number";
        if (RW.length > 0 && RW.every((RW => WW[RW] === RW))) return "string"
      }(WW);
      if (RW) return RW;
      if (UR(WW)) return "string" === typeof WW.quantized.wire ? WW : {
        quantized: hR(WW.quantized)
      };
      if (void 0 !== WW.type) return OR(WW.type);
      const MW = uR(WW);
      return MW && (WW[MW] = OR(WW[MW])), WW
    }
    const nR = [XW, aR, sW, dW, pW, hW, rR];

    function GR(WW, RW, MW) {
      WW[RW] || Object.defineProperty(WW, RW, {
        value: [],
        enumerable: !1,
        configurable: !0,
        writable: !0
      }), WW[RW].push(MW)
    }
    const LR = {
        addField(WW, RW, MW, wW, CW) {
          if (RW >= 63) throw new Error(`Can't define field '${MW}'.\nSchema instances may only have up to 63 fields.`);
          WW[RW] = Object.assign(WW[RW] || {}, {
            type: wW,
            index: RW,
            name: MW
          }), Object.defineProperty(WW, fW, {
            value: WW[fW] || {},
            enumerable: !1,
            configurable: !0
          }), WW[fW][MW] = CW || {
            value: void 0,
            writable: !0,
            enumerable: !0,
            configurable: !0
          }, Object.defineProperty(WW, cR, {
            value: RW,
            enumerable: !1,
            configurable: !0
          }), Object.defineProperty(WW, MW, {
            value: RW,
            enumerable: !1,
            configurable: !0
          }), "string" === typeof WW[RW].type || UR(WW[RW].type) || (void 0 === WW[XW] && Object.defineProperty(WW, XW, {
            value: [],
            enumerable: !1,
            configurable: !0
          }), WW[XW].push(RW));
          const zR = WW[RW].type;
          if (zR && "object" === typeof zR && void 0 !== zR.stream) {
            if (void 0 !== zR.array) throw new Error(QR);
            WW[RW].stream = !0, WW[hW] || Object.defineProperty(WW, hW, {
              value: [],
              enumerable: !1,
              configurable: !0,
              writable: !0
            }), WW[hW].includes(RW) || WW[hW].push(RW);
            const CW = wW?.priority;
            "function" === typeof CW && LR.setStreamPriority(WW, MW, CW)
          }
        },
        setTag(WW, RW, MW) {
          const wW = WW[RW];
          if (WW[wW].tag = MW, WW[jR] || (Object.defineProperty(WW, jR, {
              value: [],
              enumerable: !1,
              configurable: !0
            }), Object.defineProperty(WW, kR, {
              value: {},
              enumerable: !1,
              configurable: !0
            })), WW[jR].push(wW), MW < 0) WW[kR][MW] || (WW[kR][MW] = []), WW[kR][MW].push(wW);
          else
            for (let CW = MW; CW > 0; CW &= CW - 1) {
              const RW = CW & -CW;
              WW[kR][RW] || (WW[kR][RW] = []), WW[kR][RW].push(wW)
            }
        },
        setUnreliable(WW, RW) {
          const MW = WW[RW];
          if ("string" !== typeof WW[MW].type) throw new Error(`@unreliable cannot be applied to ref-type field "${RW}". For ref-type fields, mark each primitive sub-field with @unreliable instead. See README "Limitations and best practices".`);
          WW[MW].unreliable = !0, WW[aR] || Object.defineProperty(WW, aR, {
            value: [],
            enumerable: !1,
            configurable: !0,
            writable: !0
          }), WW[aR].push(MW)
        },
        setPatchOnly(WW, RW) {
          const MW = WW[RW];
          if (WW[MW].fullStateOnly) throw new Error(`field "${RW}" cannot be both patchOnly and fullStateOnly \u2014 those are the only two delivery channels, so the field would never reach a client.`);
          WW[MW].patchOnly = !0, GR(WW, sW, MW), GR(WW, dW, MW)
        },
        setDeprecated(WW, RW) {
          const MW = WW[RW];
          WW[MW].deprecated = !0, GR(WW, dW, MW), Object.defineProperty(WW, MW, {
            value: WW[MW],
            enumerable: !1,
            configurable: !0
          })
        },
        setFullStateOnly(WW, RW) {
          const MW = WW[RW];
          if (WW[MW].patchOnly) throw new Error(`field "${RW}" cannot be both patchOnly and fullStateOnly \u2014 those are the only two delivery channels, so the field would never reach a client.`);
          WW[MW].fullStateOnly = !0, GR(WW, pW, MW)
        },
        setStream(WW, RW) {
          const MW = WW[RW];
          WW[MW].stream = !0, WW[hW] || Object.defineProperty(WW, hW, {
            value: [],
            enumerable: !1,
            configurable: !0,
            writable: !0
          }), WW[hW].push(MW)
        },
        setStreamPriority(WW, RW, MW) {
          const wW = WW[RW];
          WW[UW] || Object.defineProperty(WW, UW, {
            value: {},
            enumerable: !1,
            configurable: !0,
            writable: !0
          }), WW[UW][wW] = MW
        },
        getStreamPriority: (WW, RW) => WW?.[UW]?.[RW],
        defineField(WW, RW, MW, wW, CW) {
          const zR = KR(CW, `${WW.name}.${wW}`),
            {
              complexTypeKlass: AW,
              childType: bR
            } = vM(zR);
          LR.addField(RW, MW, wW, zR, Fw(wW, MW, bR, AW)), RW[fW][wW] && Object.defineProperty(WW.prototype, wW, RW[fW][wW]), ("string" === typeof zR || UR(zR)) && (RW[rR] || Object.defineProperty(RW, rR, {
            value: [],
            enumerable: !1,
            configurable: !0,
            writable: !0
          }), RW[rR][MW] = "string" === typeof zR ? RR[zR] : mM(zR.quantized))
        },
        setFields(WW, RW) {
          const MW = WW.prototype.constructor;
          xM.register(MW);
          const wW = Object.getPrototypeOf(MW),
            CW = wW && wW[Symbol.metadata],
            zR = LR.initialize(MW);
          MW[yR] || (MW[yR] = jC[yR]), MW[NW] || (MW[NW] = jC[NW]), MW[eW] || (MW[eW] = jC[eW]), MW.prototype.toJSON || (MW.prototype.toJSON = jC.prototype.toJSON);
          let AW = zR[cR] ?? (CW && CW[cR]) ?? -1;
          AW++, zR[rR] || Object.defineProperty(zR, rR, {
            value: CW?.[rR] ? [...CW[rR]] : [],
            enumerable: !1,
            configurable: !0,
            writable: !0
          });
          for (const bR in RW) {
            if (void 0 !== zR[bR]) throw new Error(`@colyseus/schema: Duplicate '${bR}' definition on '${MW.name||"(anonymous)"}'.`);
            LR.defineField(MW, zR, AW, bR, RW[bR]), AW++
          }
          return WW
        },
        isDeprecated: (WW, RW) => !0 === WW[RW].deprecated,
        initialize(WW) {
          const RW = Object.getPrototypeOf(WW),
            MW = RW[Symbol.metadata];
          let wW = WW[Symbol.metadata] ?? Object.create(null);
          if (RW !== jC && wW === MW && (wW = Object.create(null), MW)) {
            Object.setPrototypeOf(wW, MW), Object.defineProperty(wW, cR, {
              value: MW[cR],
              enumerable: !1,
              configurable: !0,
              writable: !0
            }), void 0 !== MW[jR] && (Object.defineProperty(wW, jR, {
              value: [...MW[jR]],
              enumerable: !1,
              configurable: !0,
              writable: !0
            }), Object.defineProperty(wW, kR, {
              value: {
                ...MW[kR]
              },
              enumerable: !1,
              configurable: !0,
              writable: !0
            }));
            for (const WW of nR) {
              const RW = MW[WW];
              void 0 !== RW && Object.defineProperty(wW, WW, {
                value: [...RW],
                enumerable: !1,
                configurable: !0,
                writable: !0
              })
            }
            Object.defineProperty(wW, fW, {
              value: {
                ...MW[fW]
              },
              enumerable: !1,
              configurable: !0,
              writable: !0
            })
          }
          return Object.defineProperty(WW, Symbol.metadata, {
            value: wW,
            writable: !1,
            configurable: !0
          }), wW
        },
        isValidInstance: WW => WW.constructor[Symbol.metadata] && Object.prototype.hasOwnProperty.call(WW.constructor[Symbol.metadata], cR),
        getFields(WW) {
          const RW = WW[Symbol.metadata],
            MW = {};
          for (let wW = 0; wW <= RW[cR]; wW++) MW[RW[wW].name] = RW[wW].type;
          return MW
        },
        hasViewTagAtIndex: (WW, RW) => WW?.[jR]?.includes(RW),
        hasUnreliableAtIndex: (WW, RW) => WW?.[aR]?.includes(RW),
        hasPatchOnlyAtIndex: (WW, RW) => WW?.[sW]?.includes(RW),
        hasFullStateOnlyAtIndex: (WW, RW) => WW?.[pW]?.includes(RW),
        hasStreamAtIndex: (WW, RW) => WW?.[hW]?.includes(RW)
      },
      HR = (WW, RW, MW) => WW(RW, MW);
    class DR {
      dirtyLow = 0;
      dirtyHigh = 0;
      ops;
      constructor(WW) {
        this.ops = new Uint8Array(Math.max(WW + 1, 1))
      }
      record(WW, RW) {
        const MW = this.ops[WW];
        0 === MW ? this.ops[WW] = RW : (MW === CW.DELETE || MW === CW.ADD && RW === CW.DELETE_AND_ADD) && (this.ops[WW] = CW.DELETE_AND_ADD), WW < 32 ? this.dirtyLow |= 1 << WW : this.dirtyHigh |= 1 << WW - 32
      }
      recordDelete(WW, RW) {
        this.ops[WW] = RW, WW < 32 ? this.dirtyLow |= 1 << WW : this.dirtyHigh |= 1 << WW - 32
      }
      recordRaw(WW, RW) {
        this.record(WW, RW)
      }
      operationAt(WW) {
        const RW = this.ops[WW];
        return 0 === RW ? void 0 : RW
      }
      setOperationAt(WW, RW) {
        this.ops[WW] = RW
      }
      forEach(WW) {
        this.forEachWithCtx(WW, HR)
      }
      forEachWithCtx(WW, RW) {
        let MW = this.dirtyLow,
          wW = this.dirtyHigh;
        const CW = this.ops;
        for (; 0 !== MW;) {
          const wW = MW & -MW,
            zR = 31 - Math.clz32(wW);
          MW ^= wW, RW(WW, zR, CW[zR])
        }
        for (; 0 !== wW;) {
          const MW = wW & -wW,
            zR = 31 - Math.clz32(MW) + 32;
          wW ^= MW, RW(WW, zR, CW[zR])
        }
      }
      size() {
        return ZR(this.dirtyLow) + ZR(this.dirtyHigh)
      }
      has() {
        return 0 !== (this.dirtyLow | this.dirtyHigh)
      }
      reset() {
        this.dirtyLow = 0, this.dirtyHigh = 0, this.ops.fill(0)
      }
    }
    class qM {
      Gw = new Map;
      pureOps = [];
      record(WW, RW) {
        const MW = this.Gw.get(WW);
        void 0 === MW ? this.Gw.set(WW, RW) : (MW === CW.DELETE || MW === CW.ADD && RW === CW.DELETE_AND_ADD) && this.Gw.set(WW, CW.DELETE_AND_ADD)
      }
      recordDelete(WW, RW) {
        this.Gw.set(WW, RW)
      }
      recordRaw(WW, RW) {
        this.Gw.set(WW, RW)
      }
      recordPure(WW) {
        this.pureOps.push([this.Gw.size, WW])
      }
      operationAt(WW) {
        return this.Gw.get(WW)
      }
      setOperationAt(WW, RW) {
        this.Gw.has(WW) && this.Gw.set(WW, RW)
      }
      forEach(WW) {
        this.forEachWithCtx(WW, HR)
      }
      forEachWithCtx(WW, RW) {
        const MW = this.pureOps;
        if (MW.length > 0) {
          let wW = 0,
            CW = 0;
          for (const [zR, AW] of this.Gw) {
            for (; wW < MW.length && MW[wW][0] <= CW;) {
              const CW = MW[wW++][1];
              RW(WW, -CW, CW)
            }
            RW(WW, zR, AW), CW++
          }
          for (; wW < MW.length;) {
            const CW = MW[wW++][1];
            RW(WW, -CW, CW)
          }
        } else
          for (const [wW, CW] of this.Gw) RW(WW, wW, CW)
      }
      size() {
        return this.Gw.size + this.pureOps.length
      }
      has() {
        return this.Gw.size > 0 || this.pureOps.length > 0
      }
      reset() {
        this.Gw.clear(), this.pureOps.length = 0
      }
      shift(WW) {
        const RW = new Map;
        for (const [MW, wW] of this.Gw) RW.set(MW + WW, wW);
        this.Gw = RW
      }
    }

    function ZR(WW) {
      return 16843009 * ((WW = (858993459 & (WW -= WW >>> 1 & 1431655765)) + (WW >>> 2 & 858993459)) + (WW >>> 4) & 252645135) >>> 24
    }

    function SR(WW) {
      if (void 0 === WW) return 0;
      let RW = 0;
      for (let MW = 0, wW = WW.length; MW < wW; MW++) {
        const wW = WW[MW];
        wW < 32 && (RW |= 1 << wW)
      }
      return RW
    }

    function WM(WW) {
      const RW = WW.constructor;
      if (Object.prototype.hasOwnProperty.call(RW, QW)) return RW[QW];
      const MW = RW[Symbol.metadata],
        wW = LR.isValidInstance(WW),
        CW = (MW?.[jR]?.length ?? 0) > 0,
        zR = function(WW) {
          const RW = [],
            MW = [],
            wW = [],
            CW = [],
            zR = WW?.[cR];
          if (void 0 === zR) return {
            names: RW,
            types: MW,
            tags: wW,
            encoders: CW
          };
          const AW = WW[rR];
          for (let bR = 0; bR <= zR; bR++) {
            const zR = WW[bR];
            void 0 !== zR ? (RW[bR] = zR.name, MW[bR] = zR.type, wW[bR] = zR.tag, CW[bR] = AW?.[bR]) : (RW[bR] = void 0, MW[bR] = void 0, wW[bR] = void 0, CW[bR] = void 0)
          }
          return {
            names: RW,
            types: MW,
            tags: wW,
            encoders: CW
          }
        }(MW),
        AW = wW && !CW ? void 0 : RW[BW],
        bR = {
          encoder: RW[NW],
          filter: AW,
          metadata: MW,
          isSchema: wW,
          filterBitmask: wW ? SR(MW?.[jR]) : 0,
          hasAnyFullStateOnly: (MW?.[pW]?.length ?? 0) > 0,
          hasAnyUnreliable: (MW?.[aR]?.length ?? 0) > 0,
          hasAnyStream: (MW?.[hW]?.length ?? 0) > 0,
          hasAnyView: CW,
          fullStateOnlyBitmask: SR(MW?.[pW]),
          unreliableBitmask: SR(MW?.[aR]),
          streamBitmask: SR(MW?.[hW]),
          names: zR.names,
          types: zR.types,
          tags: zR.tags,
          encoders: zR.encoders
        };
      return Object.defineProperty(RW, QW, {
        value: bR,
        enumerable: !1,
        writable: !0,
        configurable: !0
      }), bR
    }

    function RM(WW, RW) {
      if (void 0 !== WW.parentRef && RW(WW.parentRef, WW._parentIndex)) return !0;
      for (let MW = WW.extraParents; void 0 !== MW; MW = MW.next)
        if (RW(MW.ref, MW.index)) return !0;
      return !1
    }
    const MM = (WW, RW) => {
        WW.isFieldUnreliable(RW) ? WW.ensureUnreliableRecorder().record(RW, CW.ADD) : WW.record(RW, CW.ADD)
      },
      wM = (WW, RW) => WW(RW);

    function CM(WW, RW, MW) {
      const wW = WW.refTarget;
      if (void 0 !== wW[YW]) {
        if (WW.isPatchOnly) return;
        if (Array.isArray(wW.items)) {
          const WW = wW.items;
          for (let wW = 0, CW = WW.length; wW < CW; wW++) void 0 !== WW[wW] && MW(RW, wW)
        } else if (void 0 !== wW.journal)
          for (const [WW, CW] of wW.journal.keyByIndex) wW.$items.has(CW) && MW(RW, WW);
        else if (void 0 !== wW.$items)
          for (const WW of wW.$items.keys()) MW(RW, WW)
      } else {
        const CW = WW.metadata;
        if (!CW) return;
        const zR = CW[cR] ?? -1,
          AW = CW[dW],
          bR = WW.encDescriptor.names;
        for (let WW = 0; WW <= zR; WW++) {
          const CW = bR[WW];
          if (void 0 === CW) continue;
          if (AW && AW.includes(WW)) continue;
          const zR = wW[CW];
          void 0 !== zR && null !== zR && MW(RW, WW)
        }
      }
    }

    function zw(WW, RW, MW, wW) {
      ! function(WW, RW, MW) {
        if (!RW) return;
        const wW = RW[iR],
          CW = !wW._isSchema;
        let zR;
        CW ? (RW = wW.parent, MW = wW.parentIndex, zR = RW?.[iR].metadata) : zR = wW.metadata;
        const AW = (zR?.[sW]?.includes(MW) ? QM : 0) | (zR?.[pW]?.includes(MW) ? rw : 0),
          bR = wW.flags & jw | AW,
          yR = WW.flags;
        WW.flags = yR | bR;
        bR & ~yR & rw && (WW.reset(), WW.unreliableRecorder?.reset());
        const NW = WW.root?.types;
        if (!NW?.hasFilters) return;
        const eW = zR?.[jR]?.includes(MW) ?? !1,
          BW = zR?.[hW]?.includes(MW) ?? !1,
          tR = wW.isFiltered || eW || BW;
        if (WW.isFiltered = tR, BW && !CW) {
          WW.isStreamCollection = !0;
          const RW = cM(WW.ref);
          if (void 0 === RW.priority) {
            const WW = LR.getStreamPriority(zR, MW);
            void 0 !== WW && (RW.priority = WW)
          }
          WW.root?.registerStream(WW.ref)
        }
        if (tR) {
          const RW = bw(WW);
          WW.isVisibilitySharedWithParent = wW.isFiltered && RW && !BW && (!eW || CW && zR[MW].tag !== gC)
        }
      }(WW, RW, MW), WW.isFullStateOnly || (WW.has() && WW.root?.enqueueChangeTree(WW), WW.unreliableRecorder?.has() && WW.root?.enqueueUnreliable(WW), WW.has() || WW.unreliableRecorder?.has() || WW.root?.enqueueChangeTree(WW))
    }

    function AM(WW) {
      const RW = WW.pendingFilterRefresh;
      for (let MW = 0; MW < RW.length; MW++) {
        const WW = RW[MW];
        0 !== (WW.flags & XM) && yw(WW)
      }
      RW.length = 0
    }

    function bw(WW) {
      return WW._isSchema || "string" !== typeof WW.refTarget[YW]
    }

    function yw(WW) {
      WW.flags &= ~XM;
      const RW = WW.root;
      if (void 0 === RW || void 0 === WW.parentRef) return;
      const MW = bw(WW);
      let wW = TM(WW, WW.parentRef, WW._parentIndex, MW);
      for (let zR = WW.extraParents; void 0 !== zR && wW !== tw; zR = zR.next) wW |= TM(WW, zR.ref, zR.index, MW);
      if (0 === wW) return;
      WW.isVisibilitySharedWithParent = 0 !== (wW & BM);
      const CW = 0 === (wW & eM);
      CW !== WW.isFiltered && (WW.isFiltered = CW, CW || WW.isFullStateOnly || (WW.forEachLiveWithCtx(WW, MM), WW.has() && RW.enqueueChangeTree(WW), WW.unreliableRecorder?.has() && RW.enqueueUnreliable(WW)), WW.forEachChildWithCtx(WW, gw))
    }
    const NM = 1,
      eM = 2,
      BM = 4,
      tw = NM | eM | BM;

    function TM(WW, RW, MW, wW) {
      const CW = RW[iR];
      if (CW.root !== WW.root || ! function(WW, RW, MW) {
          const wW = RW.refTarget;
          if (RW.isArray) {
            const RW = wW.items,
              CW = RW[MW];
            if (void 0 !== CW && CW[iR] === WW) return !0;
            for (let MW = 0, wW = RW.length; MW < wW; MW++) {
              const wW = RW[MW];
              if (void 0 !== wW && wW[iR] === WW) return !0
            }
            return !1
          }
          const CW = RW.getValue(MW);
          return void 0 !== CW && CW[iR] === WW
        }(WW, CW, MW)) return 0;
      CW.flags & XM && yw(CW);
      let zR = NM;
      if (CW._isSchema) {
        void 0 !== CW.encDescriptor.tags[MW] || CW.isFieldStream(MW) || (CW.isFiltered ? wW && (zR |= BM) : zR |= eM)
      } else if (CW.isFiltered) {
        if (wW && !CW.isStreamCollection) {
          const WW = CW.parent?.[iR];
          (WW?._isSchema ? WW.encDescriptor.tags[CW.parentIndex] : void 0) !== gC && (zR |= BM)
        }
      } else zR |= eM;
      return zR
    }
    const gw = (WW, RW, MW) => {
      yw(RW)
    };

    function iw(WW, RW, MW, wW) {
      if (WW.addParent(RW, wW), !MW) return;
      const CW = MW.add(WW);
      MW !== WW.root && (WW.root = MW, zw(WW, RW, wW));
      const zR = RW?.[iR];
      if (void 0 !== zR && void 0 !== zR.subscribedViews && void 0 !== RW[YW] && function(WW, RW, MW, wW) {
          const CW = WW.subscribedViews;
          if (void 0 === CW) return;
          const zR = WW.isStreamCollection,
            AW = zR ? WW.ref : void 0,
            bR = zR ? void 0 : MW[iR];
          for (let yR = 0, NW = CW.length; yR < NW; yR++) {
            let WW = CW[yR];
            for (; 0 !== WW;) {
              const MW = WW & -WW;
              WW ^= MW;
              const NW = 32 * yR + (31 - Math.clz32(MW)),
                eW = wW.activeViews.get(NW),
                BW = eW?.deref();
              void 0 !== BW ? zR ? sR(AW, NW, RW) : void 0 !== bR && BW.markVisible(bR) : CW[yR] &= ~MW
            }
          }
        }(zR, wW, WW.ref, MW), CW) {
        let RW = IM[oM];
        void 0 === RW && (RW = {
          parentRef: void 0,
          root: void 0
        }, IM[oM] = RW), RW.parentRef = WW.ref, RW.root = MW, oM++, JM(WW, RW, lM), oM--
      }
    }

    function YM(WW, RW, MW) {
      WW(RW, MW)
    }

    function JM(WW, RW, MW) {
      const wW = WW.refTarget;
      if (wW[YW]) {
        if ("string" !== typeof wW[YW]) {
          const WW = wW.items;
          if (void 0 !== WW)
            for (let wW = 0, CW = WW.length; wW < CW; wW++) {
              const CW = WW[wW];
              CW && MW(RW, CW[iR], wW)
            } else {
              const WW = wW.$items,
                CW = wW._collectionIndexes;
              for (const wW of WW.keys()) {
                const zR = WW.get(wW);
                zR && MW(RW, zR[iR], CW?.[wW] ?? wW)
              }
            }
        }
      } else {
        const CW = WW.metadata,
          zR = CW?.[XW];
        if (!zR) return;
        const AW = WW.encDescriptor.names;
        for (let WW = 0, bR = zR.length; WW < bR; WW++) {
          const CW = zR[WW],
            bR = wW[AW[CW]];
          bR && MW(RW, bR[iR], CW)
        }
      }
    }

    function PM(WW, RW, MW) {
      RW.root !== WW ? RW.setRoot(WW) : WW.add(RW)
    }
    const IM = [];
    let oM = 0;

    function lM(WW, RW, MW) {
      if (RW.root === WW.root) return WW.root.add(RW), void WW.root.moveNextToParent(RW);
      RW.setParent(WW.parentRef, WW.root, MW)
    }

    function FM(WW, RW, MW) {
      const wW = (3 & MW) << 3;
      return MW < 4 ? WW >>> wW & 255 : RW >>> wW & 255
    }
    const fM = (WW, RW, MW) => WW(RW, MW);
    const QM = 16,
      rw = 32,
      cwW = 128,
      XM = 256,
      jw = QM | rw;
    class kw {
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
      set isFiltered(WW) {
        this.flags = WW ? 1 | this.flags : -2 & this.flags
      }
      get isVisibilitySharedWithParent() {
        return 0 !== (2 & this.flags)
      }
      set isVisibilitySharedWithParent(WW) {
        this.flags = WW ? 2 | this.flags : -3 & this.flags
      }
      get isNew() {
        return 0 !== (4 & this.flags)
      }
      set isNew(WW) {
        this.flags = WW ? 4 | this.flags : -5 & this.flags
      }
      get isUnreliable() {
        return 0 !== (8 & this.flags)
      }
      set isUnreliable(WW) {
        this.flags = WW ? 8 | this.flags : -9 & this.flags
      }
      get isPatchOnly() {
        return 0 !== (this.flags & QM)
      }
      set isPatchOnly(WW) {
        this.flags = WW ? this.flags | QM : this.flags & ~QM
      }
      get isFullStateOnly() {
        return 0 !== (this.flags & rw)
      }
      set isFullStateOnly(WW) {
        this.flags = WW ? this.flags | rw : this.flags & ~rw
      }
      get isStreamCollection() {
        return 0 !== (64 & this.flags)
      }
      set isStreamCollection(WW) {
        this.flags = WW ? 64 | this.flags : -65 & this.flags
      }
      get needsRestage() {
        return 0 !== (this.flags & cwW)
      }
      set needsRestage(WW) {
        this.flags = WW ? this.flags | cwW : -129 & this.flags
      }
      get hasFilteredFields() {
        return this.isFiltered || this.encDescriptor.hasAnyView
      }
      ensureUnreliableRecorder() {
        return void 0 === this.unreliableRecorder && (this.unreliableRecorder = this._isSchema ? new DR(this.metadata?.[cR] ?? 0) : new qM), this.unreliableRecorder
      }
      isFieldUnreliable(WW) {
        const RW = this.encDescriptor;
        return !!RW.hasAnyUnreliable && (WW < 32 ? 0 !== (RW.unreliableBitmask & 1 << WW) : LR.hasUnreliableAtIndex(this.metadata, WW))
      }
      isFieldFullStateOnly(WW) {
        if (this.isFullStateOnly) return !0;
        const RW = this.encDescriptor;
        return !!RW.hasAnyFullStateOnly && (WW < 32 ? 0 !== (RW.fullStateOnlyBitmask & 1 << WW) : LR.hasFullStateOnlyAtIndex(this.metadata, WW))
      }
      isFieldStream(WW) {
        const RW = this.encDescriptor;
        return !!RW.hasAnyStream && (WW < 32 ? 0 !== (RW.streamBitmask & 1 << WW) : LR.hasStreamAtIndex(this.metadata, WW))
      }
      constructor(WW) {
        let RW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : WW;
        this.ref = WW, this.refTarget = RW;
        const MW = WM(WW);
        this.encDescriptor = MW, this.metadata = MW.metadata;
        const wW = MW.isSchema;
        if (this._isSchema = wW, this.ops = void 0, this.collDirty = void 0, this.collPureOps = void 0, wW) {
          const WW = this.metadata?.[cR] ?? 0;
          WW > 7 && (this.ops = new Uint8Array(WW + 1))
        } else this.collDirty = new Map
      }
      _opAt(WW) {
        const RW = this.ops;
        if (void 0 !== RW) return RW[WW];
        const MW = (3 & WW) << 3;
        return WW < 4 ? this.opsLow >>> MW & 255 : this.opsHigh >>> MW & 255
      }
      _opPut(WW, RW) {
        const MW = this.ops;
        if (void 0 !== MW) return void(MW[WW] = RW);
        const wW = (3 & WW) << 3,
          CW = ~(255 << wW);
        WW < 4 ? this.opsLow = this.opsLow & CW | RW << wW : this.opsHigh = this.opsHigh & CW | RW << wW
      }
      _markDirty(WW) {
        WW < 32 ? this.dirtyLow |= 1 << WW : this.dirtyHigh |= 1 << WW - 32
      }
      record(WW, RW) {
        if (this._isSchema) {
          const MW = this._opAt(WW);
          0 === MW ? this._opPut(WW, RW) : (MW === CW.DELETE || MW === CW.ADD && RW === CW.DELETE_AND_ADD) && this._opPut(WW, CW.DELETE_AND_ADD), this._markDirty(WW)
        } else {
          const MW = this.collDirty,
            wW = MW.get(WW);
          let zR;
          zR = void 0 === wW ? RW : wW === CW.DELETE || wW === CW.ADD && RW === CW.DELETE_AND_ADD ? CW.DELETE_AND_ADD : wW, MW.set(WW, zR)
        }
      }
      recordDelete(WW, RW) {
        this._isSchema ? (this._opPut(WW, RW), this._markDirty(WW)) : this.collDirty.set(WW, RW)
      }
      recordRaw(WW, RW) {
        this._isSchema ? (this._opPut(WW, RW), this._markDirty(WW)) : this.collDirty.set(WW, RW)
      }
      recordPure(WW) {
        if (this._isSchema) throw new Error("ChangeTree (Schema): pure operations are not supported");
        (this.collPureOps ??= []).push([this.collDirty.size, WW])
      }
      operationAt(WW) {
        if (this._isSchema) {
          const RW = this._opAt(WW);
          return 0 === RW ? void 0 : RW
        }
        return this.collDirty.get(WW)
      }
      setOperationAt(WW, RW) {
        if (this._isSchema) this._opPut(WW, RW);
        else {
          const MW = this.collDirty;
          MW.has(WW) && MW.set(WW, RW)
        }
      }
      forEach(WW) {
        this.forEachWithCtx(WW, fM)
      }
      forEachWithCtx(WW, RW) {
        if (this._isSchema) {
          let MW = this.dirtyLow,
            wW = this.dirtyHigh;
          const CW = this.ops;
          if (void 0 !== CW) {
            for (; 0 !== MW;) {
              const wW = MW & -MW,
                zR = 31 - Math.clz32(wW);
              MW ^= wW, RW(WW, zR, CW[zR])
            }
            for (; 0 !== wW;) {
              const MW = wW & -wW,
                zR = 31 - Math.clz32(MW) + 32;
              wW ^= MW, RW(WW, zR, CW[zR])
            }
          } else {
            const wW = this.opsLow,
              CW = this.opsHigh;
            for (; 0 !== MW;) {
              const zR = MW & -MW,
                AW = 31 - Math.clz32(zR);
              MW ^= zR, RW(WW, AW, FM(wW, CW, AW))
            }
          }
          return
        }
        const MW = this.collDirty,
          wW = this.collPureOps;
        if (void 0 !== wW && wW.length > 0) {
          let CW = 0,
            zR = 0;
          for (const [AW, bR] of MW) {
            for (; CW < wW.length && wW[CW][0] <= zR;) {
              const MW = wW[CW++][1];
              RW(WW, -MW, MW)
            }
            RW(WW, AW, bR), zR++
          }
          for (; CW < wW.length;) {
            const MW = wW[CW++][1];
            RW(WW, -MW, MW)
          }
        } else
          for (const [CW, zR] of MW) RW(WW, CW, zR)
      }
      size() {
        return this._isSchema ? ZR(this.dirtyLow) + ZR(this.dirtyHigh) : this.collDirty.size + (this.collPureOps?.length ?? 0)
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
      insertAt(WW, RW) {
        if (this._isSchema) throw new Error("ChangeTree (Schema): insertAt is not supported");
        const MW = this.collDirty,
          wW = new Map,
          zR = !this.paused && !this.isFullStateOnly;
        if (WW > 0)
          for (const [CW, AW] of MW) CW < WW && wW.set(CW, AW);
        if (zR)
          for (let AW = 0; AW < RW; AW++) wW.set(WW + AW, CW.ADD);
        for (const [CW, AW] of MW) CW >= WW && wW.set(CW + RW, AW);
        this.collDirty = wW, zR && this.root?.enqueueChangeTree(this)
      }
      removeAt(WW, RW) {
        if (this._isSchema) throw new Error("ChangeTree (Schema): removeAt is not supported");
        const MW = this.collDirty,
          wW = WW + RW;
        let CW = !1;
        for (const AW of MW.keys())
          if (AW >= wW) {
            CW = !0;
            break
          } if (!CW) {
          for (let RW = WW; RW < wW; RW++) MW.delete(RW);
          return
        }
        const zR = new Map;
        for (const [AW, bR] of MW) AW < WW ? zR.set(AW, bR) : AW >= wW && zR.set(AW - RW, bR);
        this.collDirty = zR
      }
      unshift(WW) {
        this.insertAt(0, WW)
      }
      setRoot(WW) {
        ! function(WW, RW) {
          WW.root = RW;
          const MW = RW.add(WW);
          zw(WW, WW.parent, WW.parentIndex), MW && JM(WW, RW, PM)
        }(this, WW)
      }
      setParent(WW, RW, MW) {
        iw(this, WW, RW, MW)
      }
      forEachChild(WW) {
        JM(this, WW, YM)
      }
      forEachChildWithCtx(WW, RW) {
        JM(this, WW, RW)
      }
      forEachLive(WW) {
        CM(this, WW, wM)
      }
      forEachLiveWithCtx(WW, RW) {
        CM(this, WW, RW)
      }
      operation(WW) {
        this.paused || this.isFullStateOnly || (this.recordPure(WW), this.root?.enqueueChangeTree(this))
      }
      _routeAndRecord(WW, RW, MW) {
        if (!this.paused && !this.isFieldFullStateOnly(WW)) {
          if (this.isFieldUnreliable(WW) && !this.isNew) {
            const wW = this.ensureUnreliableRecorder();
            return MW ? wW.recordRaw(WW, RW) : wW.record(WW, RW), void this.root?.enqueueUnreliable(this)
          }
          MW ? this.recordRaw(WW, RW) : this.record(WW, RW), this.root?.enqueueChangeTree(this)
        }
      }
      change(WW) {
        let RW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : CW.ADD;
        this._routeAndRecord(WW, RW, !1)
      }
      indexedOperation(WW, RW) {
        this._routeAndRecord(WW, RW, !0)
      }
      getChange(WW) {
        return this.operationAt(WW)
      }
      pause() {
        this.paused = !0
      }
      resume() {
        this.paused = !1
      }
      untracked(WW) {
        const RW = this.paused;
        this.paused = !0;
        try {
          return WW()
        } finally {
          this.paused = RW
        }
      }
      markDirty(WW) {
        let RW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : CW.ADD;
        const MW = this.paused;
        this.paused = !1;
        try {
          this.change(WW, RW)
        } finally {
          this.paused = MW
        }
      }
      getValue(WW) {
        let RW = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return this.refTarget[tR](WW, RW)
      }
      delete(WW, RW) {
        if (void 0 === WW) {
          try {
            throw new Error(`@colyseus/schema ${this.ref.constructor.name}: trying to delete non-existing index '${WW}'`)
          } catch (zz) {
            console.warn(zz)
          }
          return
        }
        if (this.paused || this.isFieldFullStateOnly(WW)) return this.getValue(WW);
        const MW = this.isFieldUnreliable(WW) && !this.isNew;
        MW ? this.ensureUnreliableRecorder().recordDelete(WW, RW ?? CW.DELETE) : this.recordDelete(WW, RW ?? CW.DELETE);
        const wW = this.getValue(WW);
        return wW && wW[iR] && this.root?.remove(wW[iR]), MW ? this.root?.enqueueUnreliable(this) : this.root?.enqueueChangeTree(this), wW
      }
      endEncode() {
        this.reset(), this.changesNode = void 0, this._isSchema || this.refTarget[PW]?.(), this.isNew = !1
      }
      endEncodeUnreliable() {
        this.unreliableRecorder?.reset(), this.unreliableChangesNode = void 0, this._isSchema || this.refTarget[PW]?.()
      }
      discard() {
        this._isSchema || this.refTarget[PW]?.(), this.reset(), this.unreliableRecorder?.reset()
      }
      discardAll() {
        const WW = WW => {
          if (WW < 0) return;
          const RW = this.getValue(WW);
          RW && RW[iR] && RW[iR].discardAll()
        };
        this.forEach(WW), this.unreliableRecorder?.forEach(WW), this.discard()
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
      addParent(WW, RW) {
        ! function(WW, RW, MW) {
          if (WW.parentRef) {
            if (WW.parentRef[iR] === RW[iR]) return void(WW._parentIndex = MW);
            if (RM(WW, ((WW, MW) => WW[iR] === RW[iR]))) return void(WW._parentIndex = MW)
          }
          void 0 === WW.parentRef ? (WW.parentRef = RW, WW._parentIndex = MW) : (WW.extraParents = {
            ref: WW.parentRef,
            index: WW._parentIndex,
            next: WW.extraParents
          }, WW.parentRef = RW, WW._parentIndex = MW)
        }(this, WW, RW)
      }
      setParentIndex(WW, RW) {
        ! function(WW, RW, MW) {
          if (void 0 !== WW.extraParents)
            if (WW.parentRef[iR] !== RW[iR]) {
              for (let wW = WW.extraParents; void 0 !== wW; wW = wW.next)
                if (wW.ref[iR] === RW[iR]) return void(wW.index = MW)
            } else WW._parentIndex = MW;
          else WW._parentIndex = MW
        }(this, WW, RW)
      }
      removeParent() {
        return function(WW, RW) {
          if (WW.parentRef && WW.parentRef[iR] === RW[iR]) return WW.extraParents ? (WW.parentRef = WW.extraParents.ref, WW._parentIndex = WW.extraParents.index, WW.extraParents = WW.extraParents.next) : (WW.parentRef = void 0, WW._parentIndex = void 0), !0;
          let MW = WW.extraParents,
            wW = null;
          for (; MW;) {
            if (MW.ref[iR] === RW[iR]) return wW ? wW.next = MW.next : WW.extraParents = MW.next, !0;
            wW = MW, MW = MW.next
          }
          return void 0 === WW.parentRef
        }(this, arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.parent)
      }
      findParent(WW) {
        return function(WW, RW) {
          if (void 0 !== WW.parentRef && RW(WW.parentRef, WW._parentIndex)) return {
            ref: WW.parentRef,
            index: WW._parentIndex
          };
          for (let MW = WW.extraParents; void 0 !== MW; MW = MW.next)
            if (RW(MW.ref, MW.index)) return {
              ref: MW.ref,
              index: MW.index
            }
        }(this, WW)
      }
      hasParent(WW) {
        return RM(this, WW)
      }
      indexInParent(WW) {
        return function(WW, RW) {
          if (WW.parentRef && WW.parentRef[iR] === RW[iR]) return WW._parentIndex;
          for (let MW = WW.extraParents; void 0 !== MW; MW = MW.next)
            if (MW.ref[iR] === RW[iR]) return MW.index
        }(this, WW)
      }
      getAllParents() {
        return function(WW) {
          const RW = [];
          WW.parentRef && RW.push({
            ref: WW.parentRef,
            index: WW._parentIndex
          });
          let MW = WW.extraParents;
          for (; MW;) RW.push({
            ref: MW.ref,
            index: MW.index
          }), MW = MW.next;
          return RW
        }(this)
      }
    }
    class aw {
      ref;
      root = void 0;
      parentRef = void 0;
      paused = !1;
      isNew = !1;
      flags = 0;
      constructor(WW) {
        this.ref = WW
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
      untracked(WW) {
        return WW()
      }
      markDirty() {}
      forEachChild(WW) {
        const RW = this.ref;
        if (RW[YW]) {
          if ("string" !== typeof RW[YW])
            for (const [MW, wW] of RW.entries()) wW && WW(wW[iR], RW._collectionIndexes?.[MW] ?? MW);
          return
        }
        const MW = RW.constructor,
          wW = MW?.[Symbol.metadata];
        if (!wW) return;
        const CW = wW[XW] ?? [];
        for (let zR = 0; zR < CW.length; zR++) {
          const MW = CW[zR],
            AW = RW[wW[MW].name];
          AW && WW(AW[iR], MW)
        }
      }
      forEachChildWithCtx(WW, RW) {
        this.forEachChild(((MW, wW) => RW(WW, MW, wW)))
      }
      forEachLive() {}
      forEachLiveWithCtx() {}
      forEach() {}
    }

    function sM(WW) {
      let RW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : WW;
      var MW;
      Object.defineProperty(WW, iR, {
        value: (MW = RW, new aw(MW)),
        enumerable: !1,
        writable: !0
      })
    }

    function dM(WW, RW, MW, wW, zR, AW, yR) {
      void 0 !== yR ? yR(RW, wW, AW) : "string" === typeof MW ? RR[MW]?.(RW, wW, AW) : null != MW[Symbol.metadata] ? (RR.number(RW, wW[bR], AW), (zR & CW.ADD) === CW.ADD && WW.tryEncodeTypeId(RW, MW, wW.constructor, AW)) : RR.number(RW, wW[bR], AW)
    }
    const pM = function(WW, RW, MW, wW, zR, AW, bR, yR) {
        if (RW[AW.offset++] = 255 & (wW | zR), zR === CW.DELETE) return;
        const NW = MW.encDescriptor,
          eW = MW.ref,
          BW = eW[lW][wW] ?? eW[NW.names[wW]];
        dM(WW, RW, NW.types[wW], BW, zR, AW, NW.encoders[wW])
      },
      hM = function(WW, RW, MW, wW, zR, AW) {
        if (RW[AW.offset++] = 255 & zR, RR.number(RW, wW, AW), zR === CW.DELETE) return;
        const bR = MW.ref;
        if ((zR & CW.ADD) === CW.ADD) {
          const WW = bR.$indexes.get(wW);
          RR.string(RW, WW, AW)
        }
        dM(WW, RW, bR[YW], bR[tR](wW), zR, AW)
      },
      UM = function(WW, RW, MW, wW, zR, AW) {
        if (RW[AW.offset++] = 255 & zR, RR.number(RW, wW, AW), zR === CW.DELETE) return;
        const bR = MW.ref;
        dM(WW, RW, bR[YW], bR[tR](wW), zR, AW)
      },
      EM = function(WW, RW, MW, wW, zR, AW) {
        const bR = MW.ref;
        (zR & CW.ADD) === CW.ADD && "function" === typeof bR.set ? hM(WW, RW, MW, wW, zR, AW) : UM(WW, RW, MW, wW, zR, AW)
      },
      VM = function(WW, RW, MW, wW, zR, AW, yR, NW) {
        const eW = MW.refTarget,
          BW = eW[YW],
          TW = "string" !== typeof BW;
        let gR;
        if (NW && MW.isFiltered && TW) {
          const WW = eW.tmpItems[wW];
          if (!WW) return;
          if (gR = WW[bR], zR === CW.DELETE) zR = CW.DELETE_BY_REFID;
          else if ((zR & CW.ADD) === CW.ADD) zR = CW.ADD_BY_REFID;
          else if ((zR & CW.MOVE) === CW.MOVE) return
        } else if (zR === CW.DELETE && TW) {
          const WW = eW.tmpItems[wW];
          if (!WW) return;
          gR = WW[bR], zR = CW.DELETE_BY_REFID
        } else gR = wW;
        if (RW[AW.offset++] = 255 & zR, RR.number(RW, gR, AW), zR === CW.DELETE || zR === CW.DELETE_BY_REFID) return;
        dM(WW, RW, BW, eW[tR](wW, yR), zR, AW)
      };

    function mw(WW, RW, MW, wW, zR, AW, yR) {
      const NW = WW.resyncVisited;
      let eW = NW.get(WW.currentRefId);
      if (void 0 === eW && NW.set(WW.currentRefId, eW = new Set), eW.add(wW), void 0 !== zR && MW === CW.ADD && zR !== AW) {
        const MW = zR[bR];
        void 0 !== MW && (WW.root.removeRef(MW), yR?.push({
          ref: RW,
          refId: WW.currentRefId,
          op: CW.DELETE,
          dynamicIndex: wW,
          value: void 0,
          previousValue: zR
        }))
      }
    }

    function xw(WW, RW, MW, wW) {
      const CW = RW[bR];
      if (void 0 === CW || MW.has(CW)) return;
      MW.add(CW);
      const zR = RW.constructor[Symbol.metadata],
        AW = zR?.[XW];
      if (void 0 === AW) return;
      const yR = zR[sW];
      for (let bR = 0; bR < AW.length; bR++) {
        const CW = AW[bR];
        if (void 0 !== yR && yR.includes(CW)) continue;
        const NW = zR[CW],
          eW = RW[NW.name];
        eW && (jC.is(NW.type) ? xw(WW, eW, MW, wW) : vw(WW, eW, MW, wW))
      }
    }

    function vw(WW, RW, MW, wW) {
      const zR = RW[JW] ?? RW,
        AW = zR[bR];
      if (void 0 === AW || MW.has(AW)) return;
      MW.add(AW);
      const yR = WW.resyncVisited.get(AW);
      if (void 0 === yR) return;
      const NW = WW.root;
      zR[gR](yR, ((WW, MW) => {
        wW?.push({
          ref: RW,
          refId: AW,
          op: CW.DELETE,
          dynamicIndex: MW,
          value: void 0,
          previousValue: WW
        });
        const zR = WW?.[bR];
        void 0 !== zR && NW.removeRef(zR)
      }), (RW => {
        jC.isSchema(RW) && xw(WW, RW, MW, wW)
      }))
    }
    const KM = 1,
      uM = 2,
      OM = 3,
      nM = 4,
      GM = 5;

    function LM(WW, RW, MW, wW, zR, AW, yR, NW, eW) {
      const BW = WW.root;
      let tR;
      if ((RW & CW.DELETE) === CW.DELETE) {
        const WW = zR?.[bR];
        void 0 !== WW && BW.removeRef(WW), RW !== CW.DELETE_AND_ADD && MW[TW](wW), tR = void 0
      }
      if (RW === CW.DELETE);
      else if ("string" === typeof AW) tR = IR[AW](yR, NW);
      else if (UR(AW)) tR = function(WW, RW, MW) {
        return VR(WW, (0, IR[WW.wire])(RW, MW))
      }(AW.quantized, yR, NW);
      else if (jC.is(AW)) {
        const MW = IR.number(yR, NW);
        if (tR = BW.refs.get(MW), (RW & CW.ADD) === CW.ADD) {
          const wW = WW.getInstanceType(yR, NW, AW);
          tR || (tR = WW.createInstanceOfType(wW)), BW.addRef(MW, tR, tR !== zR || RW === CW.DELETE_AND_ADD && tR === zR)
        }
      } else {
        const MW = (gR = Object.keys(AW)[0], oR[gR]),
          wW = IR.number(yR, NW);
        null !== WW.resyncVisited && function(WW, RW) {
          const MW = WW.resyncVisited;
          MW.has(RW) || MW.set(RW, new Set)
        }(WW, wW);
        const TW = BW.refs.has(wW) ? zR || BW.refs.get(wW) : MW.constructor.initializeForDecoder();
        if (tR = TW.clone(!0), tR[YW] = Object.values(AW)[0], zR) {
          let WW = zR[bR];
          if (void 0 !== WW && wW !== WW) {
            (RW & CW.DELETE) !== CW.DELETE && BW.removeRef(WW);
            const MW = zR.entries();
            let wW;
            for (;
              (wW = MW.next()) && !wW.done;) {
              const [RW, MW] = wW.value;
              "object" === typeof MW && (WW = MW[bR]), eW?.push({
                ref: zR,
                refId: WW,
                op: CW.DELETE,
                field: RW,
                value: void 0,
                previousValue: MW
              })
            }
          }
        }
        BW.addRef(wW, tR, TW !== zR || RW === CW.DELETE_AND_ADD && TW === zR)
      }
      var gR;
      return tR
    }
    const HM = function(WW, RW, MW, wW, CW) {
        const zR = RW[MW.offset++],
          AW = wW.constructor[Symbol.metadata],
          bR = zR >> 6 << 6,
          yR = zR % (bR || 255),
          NW = AW[yR];
        if (void 0 === NW) return console.warn("@colyseus/schema: field not defined at", {
          index: yR,
          ref: wW.constructor.name,
          metadata: AW
        }), -1;
        const eW = !0 === NW.deprecated,
          BW = eW ? void 0 : wW[tR](yR),
          TW = LM(WW, bR, wW, yR, BW, NW.type, RW, MW, CW);
        eW || (null !== TW && void 0 !== TW && (wW[NW.name] = TW), BW !== TW && CW?.push({
          ref: wW,
          refId: WW.currentRefId,
          op: bR,
          field: NW.name,
          value: TW,
          previousValue: BW
        }))
      },
      DM = function(WW, RW, MW, wW, zR) {
        const AW = wW[JW] ?? wW,
          bR = RW[MW.offset++];
        if (bR === CW.CLEAR) return WW.removeChildRefs(AW, zR), void AW.clear();
        const yR = IR.number(RW, MW),
          NW = AW[YW],
          eW = AW.constructor.COLLECTION_KIND;
        let BW;
        (bR & CW.ADD) === CW.ADD ? eW === KM ? (BW = IR.string(RW, MW), AW.setIndex(yR, BW)) : BW = yR : BW = AW.getIndex(yR);
        const TW = AW[tR](yR),
          gR = LM(WW, bR, wW, yR, TW, NW, RW, MW, zR);
        if (null !== WW.resyncVisited && mw(WW, wW, bR, BW, TW, gR, zR), null !== gR && void 0 !== gR) switch (eW) {
          case KM:
            AW.$items.set(BW, gR);
            break;
          case uM:
            AW.$setAt(yR, gR, null !== WW.resyncVisited && bR === CW.ADD ? CW.REPLACE : bR);
            break;
          case OM:
          case nM:
          case GM:
            AW.$items.has(yR) || (AW.$items.set(yR, gR), "number" === typeof AW.$refId && yR >= AW.$refId && (AW.$refId = yR + 1));
            break;
          default:
            console.warn(`@colyseus/schema: missing COLLECTION_KIND on ${AW.constructor?.name} \u2014 item at index ${yR} was not stored.`)
        }
        TW !== gR && zR?.push({
          ref: wW,
          refId: WW.currentRefId,
          op: bR,
          dynamicIndex: BW,
          value: gR,
          previousValue: TW
        })
      },
      qw = function(WW, RW, MW, wW, zR) {
        const AW = wW[JW] ?? wW;
        let bR, yR = RW[MW.offset++];
        if (yR === CW.CLEAR) return WW.removeChildRefs(AW, zR), void AW.clear();
        if (yR === CW.REVERSE) return void AW.items.reverse();
        if (yR === CW.DELETE_BY_REFID) {
          const yR = IR.number(RW, MW),
            NW = WW.root.refs.get(yR);
          if (void 0 === NW) return;
          if (WW.root.removeRef(yR), bR = AW.findIndex((WW => WW === NW)), -1 === bR) return;
          return AW[TW](bR), void zR?.push({
            ref: wW,
            refId: WW.currentRefId,
            op: CW.DELETE,
            dynamicIndex: bR,
            value: void 0,
            previousValue: NW
          })
        }
        if (yR === CW.ADD_BY_REFID) {
          const wW = IR.number(RW, MW),
            CW = WW.root.refs.get(wW);
          CW && (bR = AW.findIndex((WW => WW === CW))), -1 !== bR && void 0 !== bR || (bR = AW.length)
        } else bR = IR.number(RW, MW);
        const NW = AW[YW];
        let eW = bR;
        const BW = AW.items[bR],
          tR = LM(WW, yR, wW, bR, BW, NW, RW, MW, zR);
        null !== WW.resyncVisited && mw(WW, wW, yR, bR, BW, tR, zR), null !== tR && void 0 !== tR && tR !== BW && AW.$setAt(bR, tR, null !== WW.resyncVisited && yR === CW.ADD ? CW.REPLACE : yR), BW !== tR && zR?.push({
          ref: wW,
          refId: WW.currentRefId,
          op: yR,
          dynamicIndex: eW,
          value: tR,
          previousValue: BW
        })
      };
    class ZM extends Error {}

    function SM(WW, RW, MW, wW) {
      if (!(WW instanceof RW)) throw new ZM(`a '${RW.name}' was expected, but '${WW&&WW.constructor.name}' was provided in ${MW.constructor.name}#${wW}`)
    }
    const Ww = (WW, RW) => {
        const MW = WW.toString(),
          wW = RW.toString();
        return MW < wW ? -1 : MW > wW ? 1 : 0
      },
      Rw = {
        get: (WW, RW) => "symbol" === typeof RW || isNaN(RW) ? Reflect.get(WW, RW) : WW.items[RW],
        set: (WW, RW, MW) => {
          if ("symbol" !== typeof RW && !isNaN(RW)) {
            if (void 0 === MW || null === MW) WW.$deleteAt(RW);
            else {
              let wW;
              if (MW[iR]) {
                SM(MW, WW[YW], WW, RW);
                const zR = WW.items[RW];
                WW.isMovingItems ? (wW = WW.$wireIndex(Number(RW)), void 0 !== zR ? MW[iR].isNew ? WW[iR].indexedOperation(wW, CW.MOVE_AND_ADD) : (WW[iR].getChange(wW) & CW.DELETE) === CW.DELETE ? WW[iR].indexedOperation(wW, CW.DELETE_AND_MOVE) : WW[iR].indexedOperation(wW, CW.MOVE) : MW[iR].isNew && WW[iR].indexedOperation(wW, CW.ADD), MW[iR].setParent(WW, WW[iR].root, wW)) : wW = WW.$changeAt(Number(RW), MW), void 0 !== zR && zR[iR].root?.remove(zR[iR])
              } else wW = WW.$changeAt(Number(RW), MW);
              WW.items[RW] = MW, void 0 !== wW && (WW.tmpItems[wW] = MW)
            }
            return !0
          }
          return Reflect.set(WW, RW, MW)
        },
        deleteProperty: (WW, RW) => ("number" === typeof RW ? WW.$deleteAt(RW) : delete WW[RW], !0),
        has: (WW, RW) => "symbol" === typeof RW || isNaN(Number(RW)) ? Reflect.has(WW, RW) : Reflect.has(WW.items, RW)
      };
    class Mw {
      [iR];
      [bR];
      [JW];
      [YW];
      items = [];
      tmpItems = [];
      deletedIndexes = [];
      isMovingItems = !1;
      _needsCompaction = !1;
      static[NW] = VM;
      static[eW] = qw;
      static COLLECTION_KIND = uM;
      static[BW](WW, RW, MW) {
        if (!MW) return !0;
        const wW = WW[JW] ?? WW;
        return "string" === typeof wW[YW] || MW.isChangeTreeVisible(wW.tmpItems[RW]?.[iR])
      }
      static is(WW) {
        return Array.isArray(WW) || void 0 !== WW.array
      }
      static from(WW) {
        return new Mw(...Array.from(WW))
      }
      constructor() {
        this[YW] = void 0, this[JW] = this;
        const WW = new Proxy(this, Rw);
        return Object.defineProperty(this, iR, {
          value: new kw(WW, this),
          enumerable: !1,
          writable: !0
        }), arguments.length > 0 && this.push(...arguments), WW
      }
      static initializeForDecoder() {
        const WW = Object.create(Mw.prototype);
        WW.items = [], WW.isMovingItems = !1, WW._needsCompaction = !1, WW[YW] = void 0, WW[JW] = WW;
        const RW = new Proxy(WW, Rw);
        return sM(WW, RW), RW
      }
      set length(WW) {
        0 === WW ? this.clear() : WW < this.items.length ? this.splice(WW, this.length - WW) : console.warn("ArraySchema: can't set .length to a higher value than its length.")
      }
      get length() {
        return this.items.length
      }
      pauseTracking() {
        this[iR].pause()
      }
      resumeTracking() {
        this[iR].resume()
      }
      untracked(WW) {
        return this[iR].untracked(WW)
      }
      get isTrackingPaused() {
        return this[iR].paused
      }
      push() {
        const WW = this[JW],
          RW = WW.items,
          MW = WW.tmpItems,
          wW = WW[iR],
          zR = WW[YW];
        let AW = MW.length;
        for (let bR = 0, yR = arguments.length; bR < yR; bR++, AW++) {
          const yR = bR < 0 || arguments.length <= bR ? void 0 : arguments[bR];
          if (void 0 === yR || null === yR) return;
          "object" === typeof yR && zR && SM(yR, zR, WW, bR), wW.indexedOperation(AW, CW.ADD), RW.push(yR), MW.push(yR), yR[iR]?.setParent(this, wW.root, AW)
        }
        return AW
      }
      pop() {
        const WW = this[JW],
          RW = WW.tmpItems,
          MW = WW.deletedIndexes;
        let wW = -1;
        for (let zR = RW.length - 1; zR >= 0; zR--)
          if (!0 !== MW[zR]) {
            wW = zR;
            break
          } if (wW < 0) return;
        const CW = WW.$isUnsentAdd(wW);
        return WW[iR].delete(wW), CW ? WW.$cancelAdd(wW) : MW[wW] = !0, WW.items.pop()
      }
      at(WW) {
        return WW < 0 && (WW += this.length), this.items[WW]
      }
      $wireIndex(WW) {
        const RW = this.deletedIndexes;
        if (0 === RW.length) return WW;
        const MW = this.tmpItems;
        let wW = 0;
        for (let CW = 0; CW < MW.length; CW++)
          if (!0 !== RW[CW]) {
            if (wW === WW) return CW;
            wW++
          } return MW.length + (WW - wW)
      }
      $isUnsentAdd(WW) {
        const RW = this[iR];
        return 0 === (576 & RW.flags) && !RW.paused && "string" !== typeof this[YW] && RW.operationAt(WW) === CW.ADD
      }
      $cancelAdd(WW) {
        let RW = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        const MW = this[iR],
          wW = this.tmpItems[WW];
        this.tmpItems.splice(WW, 1), this.deletedIndexes.length > 0 && this.deletedIndexes.splice(WW, 1), MW.removeAt(WW, 1);
        const CW = wW?.[iR];
        void 0 !== CW && void 0 === CW.root && CW.removeParent(this), RW && this.$reindexChildren(WW)
      }
      $reindexChildren(WW, RW) {
        if (!this[iR].hasFilteredFields) return;
        if ("string" === typeof this[YW]) return;
        const MW = this.tmpItems,
          wW = MW.length;
        if (void 0 !== RW)
          for (; WW < wW && MW[WW] === RW[WW];) WW++;
        for (let CW = WW; CW < wW; CW++) MW[CW]?.[iR]?.setParentIndex(this, CW)
      }
      $changeAt(WW, RW) {
        if (void 0 === RW || null === RW) return void console.error("ArraySchema items cannot be null nor undefined; Use `splice(index, 1)` instead.");
        if (this.items[WW] === RW) return;
        const MW = void 0 !== this.items[WW] ? "object" === typeof RW ? CW.DELETE_AND_ADD : CW.REPLACE : CW.ADD,
          wW = this.$wireIndex(WW),
          zR = this[iR];
        return zR.change(wW, MW), RW[iR]?.setParent(this, zR.root, wW), wW
      }
      $deleteAt(WW, RW) {
        this[iR].delete(this.$wireIndex(WW), RW)
      }
      $setAt(WW, RW, MW) {
        MW === CW.ADD && void 0 !== this.items[WW] ? this.items.splice(WW, 0, RW) : MW === CW.DELETE_AND_MOVE ? (this.items.splice(WW, 1), this.items[WW] = RW) : (WW > this.items.length && (this._needsCompaction = !0), this.items[WW] = RW)
      }
      clear() {
        const WW = this[JW];
        if (0 === WW.items.length) return;
        const RW = WW[iR];
        RW.forEachChild(((WW, MW) => {
          RW.root?.remove(WW)
        })), RW.discard(), RW.operation(CW.CLEAR), WW.items.length = 0, WW.tmpItems.length = 0
      } [IW]() {
        const WW = this[JW] ?? this,
          RW = WW[iR];
        if (RW.isStreamCollection) throw new Error("@colyseus/schema: cannot reset a streamed ArraySchema (pooling not supported).");
        const MW = WW.items;
        for (let wW = 0; wW < MW.length; wW++) MW[wW]?.[IW]?.();
        WW.items.length = 0, WW.tmpItems.length = 0, WW.deletedIndexes.length = 0, RW.recycle(), WW[bR] = void 0
      }
      concat() {
        return new Mw(...this.items.concat(...arguments))
      }
      join(WW) {
        return this.items.join(WW)
      }
      reverse() {
        const WW = this[JW],
          RW = WW[iR];
        if (RW.has() || WW.deletedIndexes.length > 0) {
          const RW = WW.items.slice().reverse();
          return this.clear(), this.push(...RW), this
        }
        return RW.operation(CW.REVERSE), WW.items.reverse(), WW.tmpItems.reverse(), WW.$reindexChildren(0), this
      }
      shift() {
        const WW = this[JW],
          RW = WW.items;
        if (0 === RW.length) return;
        const MW = WW[iR],
          wW = WW.deletedIndexes;
        let zR = 0;
        for (; !0 === wW[zR];) zR++;
        const AW = WW.$isUnsentAdd(zR);
        return MW.delete(zR, CW.DELETE), AW ? WW.$cancelAdd(zR) : wW[zR] = !0, RW.shift()
      }
      slice(WW, RW) {
        const MW = new Mw;
        return MW.push(...this.items.slice(WW, RW)), MW
      }
      sort() {
        let WW = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Ww;
        const RW = this[JW];
        RW.isMovingItems = !0;
        const MW = RW[iR];
        return RW.items.sort(WW).forEach(((WW, RW) => MW.change(RW, CW.REPLACE))), RW.tmpItems.sort(WW), RW.$reindexChildren(0), RW.isMovingItems = !1, this
      }
      splice(WW, RW) {
        const MW = this[JW],
          wW = MW[iR],
          zR = MW.items,
          AW = MW.tmpItems,
          bR = MW.deletedIndexes,
          yR = zR.length,
          NW = AW.length;
        for (var eW = arguments.length, BW = new Array(eW > 2 ? eW - 2 : 0), tR = 2; tR < eW; tR++) BW[tR - 2] = arguments[tR];
        const TW = BW.length,
          gR = [];
        for (let CW = 0; CW < NW; CW++) !0 !== bR[CW] && gR.push(CW);
        let YW;
        if (yR > WW) {
          void 0 === RW && (RW = yR - WW);
          for (let zR = WW; zR < WW + RW; zR++) {
            const WW = gR[zR],
              RW = MW.$isUnsentAdd(WW);
            wW.delete(WW, CW.DELETE), RW ? (YW ??= []).push(WW) : bR[WW] = !0
          }
        } else RW = 0;
        if (TW > 0) {
          const zR = gR[WW] ?? yR,
            NW = Math.min(TW, RW);
          for (let WW = 0; WW < NW; WW++) {
            const RW = zR + WW;
            let MW;
            const yR = void 0 !== YW ? YW.indexOf(RW) : -1; - 1 !== yR ? (YW.splice(yR, 1), MW = CW.ADD) : MW = bR[RW] ? CW.DELETE_AND_ADD : CW.ADD, wW.indexedOperation(RW, MW), AW[RW] = BW[WW], bR[RW] = !1, BW[WW][iR]?.setParent(this, wW.root, RW)
          }
          const eW = TW - NW;
          if (eW > 0) {
            const WW = zR + NW;
            wW.insertAt(WW, eW);
            for (let RW = 0; RW < eW; RW++) BW[NW + RW][iR]?.setParent(this, wW.root, WW + RW);
            bR.length > 0 && bR.splice(WW, 0, ...new Array(eW).fill(!1)), AW.splice(WW, 0, ...BW.slice(NW)), MW.$reindexChildren(WW + eW)
          }
        }
        if (void 0 !== YW && YW.length > 0) {
          for (let WW = YW.length - 1; WW >= 0; WW--) MW.$cancelAdd(YW[WW], !1);
          MW.$reindexChildren(YW[0])
        }
        return wW.root?.enqueueChangeTree(wW), zR.splice(WW, RW, ...BW)
      }
      unshift() {
        const WW = this[JW],
          RW = WW[iR];
        RW.unshift(arguments.length);
        for (let wW = 0; wW < arguments.length; wW++)(wW < 0 || arguments.length <= wW ? void 0 : arguments[wW])?.[iR]?.setParent(this, RW.root, wW);
        const MW = WW.deletedIndexes;
        return MW.length > 0 && MW.unshift(...new Array(arguments.length).fill(!1)), WW.tmpItems.unshift(...arguments), WW.$reindexChildren(arguments.length), WW.items.unshift(...arguments)
      }
      indexOf(WW, RW) {
        return this.items.indexOf(WW, RW)
      }
      lastIndexOf(WW) {
        let RW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.length - 1;
        return this.items.lastIndexOf(WW, RW)
      }
      every(WW, RW) {
        return this.items.every(WW, RW)
      }
      some(WW, RW) {
        return this.items.some(WW, RW)
      }
      forEach(WW, RW) {
        return this.items.forEach(WW, RW)
      }
      map(WW, RW) {
        return this.items.map(WW, RW)
      }
      filter(WW, RW) {
        return this.items.filter(WW, RW)
      }
      reduce(WW, RW) {
        return this.items.reduce.apply(this.items, arguments)
      }
      reduceRight(WW, RW) {
        return this.items.reduceRight.apply(this.items, arguments)
      }
      find(WW, RW) {
        return this.items.find(WW, RW)
      }
      findIndex(WW, RW) {
        return this.items.findIndex(WW, RW)
      }
      fill(WW, RW, MW) {
        throw new Error("ArraySchema#fill() not implemented")
      }
      copyWithin(WW, RW, MW) {
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
        return Mw
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
      includes(WW, RW) {
        return this.items.includes(WW, RW)
      }
      flatMap(WW, RW) {
        throw new Error("ArraySchema#flatMap() is not supported.")
      }
      flat(WW) {
        throw new Error("ArraySchema#flat() is not supported.")
      }
      findLast() {
        return this.items.findLast.apply(this.items, arguments)
      }
      findLastIndex() {
        for (var WW = arguments.length, RW = new Array(WW), MW = 0; MW < WW; MW++) RW[MW] = arguments[MW];
        return this.items.findLastIndex.apply(this.items, arguments)
      }
      with(WW, RW) {
        const MW = this.items.slice();
        return WW < 0 && (WW += this.length), MW[WW] = RW, new Mw(...MW)
      }
      toReversed() {
        return this.items.slice().reverse()
      }
      toSorted(WW) {
        return this.items.slice().sort(WW)
      }
      toSpliced(WW, RW) {
        for (var MW = arguments.length, wW = new Array(MW > 2 ? MW - 2 : 0), CW = 2; CW < MW; CW++) wW[CW - 2] = arguments[CW];
        const zR = this.items.slice();
        return zR.splice.apply(zR, arguments), zR
      }
      shuffle() {
        return this.move((WW => {
          let RW = this.items.length;
          for (; 0 != RW;) {
            let WW = Math.floor(Math.random() * RW);
            RW--, [this[RW], this[WW]] = [this[WW], this[RW]]
          }
        }))
      }
      move(WW) {
        return this.isMovingItems = !0, WW(this), this.isMovingItems = !1, this
      } [tR](WW) {
        let RW = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        const MW = this[JW] ?? this;
        return RW || MW.deletedIndexes[WW] ? MW.items[WW] : MW.tmpItems[WW] || MW.items[WW]
      } [TW](WW) {
        const RW = this[JW] ?? this;
        RW.items[WW] = void 0, RW._needsCompaction = !0
      } [PW]() {
        const WW = this.tmpItems;
        this.tmpItems = this.items.slice(), this.deletedIndexes.length > 0 && (this.$reindexChildren(0, WW), this.deletedIndexes.length = 0)
      } [oW]() {
        const WW = this[JW] ?? this;
        WW._needsCompaction && (WW._needsCompaction = !1, WW.items = WW.items.filter((WW => void 0 !== WW)))
      } [gR](WW, RW, MW) {
        const wW = this[JW] ?? this,
          CW = wW.items;
        let zR = !1;
        for (let AW = 0; AW < CW.length; AW++) {
          const bR = CW[AW];
          WW.has(AW) ? MW(bR) : (zR = !0, RW(bR, AW), wW[TW](AW))
        }
        zR && wW[oW]()
      }
      toArray() {
        return this.items.slice(0)
      }
      toJSON() {
        return this.toArray().map((WW => "function" === typeof WW.toJSON ? WW.toJSON() : WW))
      }
      clone(WW) {
        let RW;
        return WW ? (RW = new Mw, RW.push(...this.items)) : RW = new Mw(...this.map((WW => WW[iR] ? WW.clone() : WW))), RW
      }
    }
    FR("array", {
      constructor: Mw
    });
    class ww {
      keyByIndex = new Map;
      indexByKey = Object.create(null);
      nextIndex = 0;
      snapshots;
      indexOf(WW) {
        const RW = this.indexByKey[WW];
        return void 0 === RW ? void 0 : RW
      }
      assign(WW) {
        const RW = this.nextIndex++;
        return this.indexByKey[WW] = RW, this.keyByIndex.set(RW, WW), RW
      }
      snapshot(WW, RW) {
        (this.snapshots ??= new Map).set(WW, RW)
      }
      forgetSnapshot(WW) {
        this.snapshots?.delete(WW)
      }
      snapshotAt(WW) {
        return this.snapshots?.get(WW)
      }
      setIndex(WW, RW) {
        this.keyByIndex.set(WW, RW), this.indexByKey[RW] = WW
      }
      keyOf(WW) {
        return this.keyByIndex.get(WW)
      }
      cleanupAfterEncode() {
        if (void 0 !== this.snapshots) {
          for (const [WW] of this.snapshots) {
            const RW = this.keyByIndex.get(WW);
            void 0 !== RW && (delete this.indexByKey[RW], this.keyByIndex.delete(WW))
          }
          this.snapshots.clear()
        }
      }
      reset() {
        this.indexByKey = Object.create(null), this.keyByIndex.clear(), this.snapshots?.clear(), this.nextIndex = 0
      }
    }
    class Cw {
      [iR];
      [bR];
      childType;
      [YW];
      $items = new Map;
      journal = new ww;
      _stream;
      get maxPerTick() {
        return this._stream?.maxPerTick ?? 32
      }
      set maxPerTick(WW) {
        (this._stream ??= rM()).maxPerTick = WW
      }
      get priority() {
        return this._stream?.priority
      }
      set priority(WW) {
        (this._stream ??= rM()).priority = WW
      }
      get $indexes() {
        return this.journal.keyByIndex
      }
      get _collectionIndexes() {
        return this.journal.indexByKey
      }
      static[NW] = hM;
      static[eW] = DM;
      static COLLECTION_KIND = KM;
      static[BW](WW, RW, MW) {
        if (!MW || "string" === typeof WW[YW]) return !0;
        const wW = WW[tR](RW) ?? WW.journal.snapshotAt(RW);
        return MW.isChangeTreeVisible(wW[iR])
      }
      static is(WW) {
        return void 0 !== WW.map
      }
      constructor(WW) {
        if (Object.defineProperty(this, iR, {
            value: new kw(this),
            enumerable: !1,
            writable: !0
          }), this[YW] = void 0, WW)
          if (WW instanceof Map || WW instanceof Cw) WW.forEach(((WW, RW) => this.set(RW, WW)));
          else
            for (const RW in WW) this.set(RW, WW[RW])
      }
      static initializeForDecoder() {
        const WW = Object.create(Cw.prototype);
        return WW.$items = new Map, WW.journal = new ww, WW[YW] = void 0, sM(WW), WW
      } [Symbol.iterator]() {
        return this.$items[Symbol.iterator]()
      }
      get[Symbol.toStringTag]() {
        return this.$items[Symbol.toStringTag]
      }
      static get[Symbol.species]() {
        return Cw
      }
      set(WW, RW) {
        if (void 0 === RW || null === RW) throw new Error(`MapSchema#set('${WW}', ${RW}): trying to set ${RW} value on '${WW}'.`);
        "object" === typeof RW && this[YW] && SM(RW, this[YW], this, WW), WW = WW.toString();
        const MW = this[iR],
          wW = void 0 !== RW[iR],
          zR = this.journal;
        let AW, bR = zR.indexOf(WW);
        if (void 0 !== bR) {
          AW = CW.REPLACE;
          const MW = this.$items.get(WW);
          if (MW === RW) return;
          wW && (AW = CW.DELETE_AND_ADD, void 0 !== MW && MW[iR].root?.remove(MW[iR])), void 0 !== zR.snapshotAt(bR) && zR.forgetSnapshot(bR)
        } else bR = zR.assign(WW), AW = CW.ADD;
        return this.$items.set(WW, RW), AW === CW.ADD && MW.isStreamCollection ? void 0 !== MW.root && XR(this, MW.root, bR) : MW.change(bR, AW), wW && RW[iR].setParent(this, MW.root, bR), this
      }
      get(WW) {
        return this.$items.get(WW)
      }
      getOrInsert(WW, RW) {
        return this.$items.has(WW) ? this.$items.get(WW) : (this.set(WW, RW), RW)
      }
      getOrInsertComputed(WW, RW) {
        if (this.$items.has(WW)) return this.$items.get(WW);
        const MW = RW(WW);
        return this.set(WW, MW), MW
      }
      delete(WW) {
        if (!this.$items.has(WW)) return !1;
        const RW = this.journal.indexOf(WW),
          MW = this.$items.get(WW),
          wW = this[iR];
        if (wW.isStreamCollection) {
          const CW = wW.root;
          let zR = !1;
          return void 0 !== CW && (zR = jM(this, CW, this[bR], RW)), void 0 !== MW?.[iR] && CW?.remove(MW[iR]), this.$items.delete(WW), zR || this.journal.snapshot(RW, MW), !0
        }
        return this.journal.snapshot(RW, MW), wW.delete(RW), this.$items.delete(WW)
      }
      clear() {
        const WW = this[iR];
        WW.discard(), WW.forEachChild(((RW, MW) => {
          WW.root?.remove(RW)
        })), this.journal.reset(), this.$items.clear(), WW.operation(CW.CLEAR)
      } [IW]() {
        const WW = this[iR];
        if (WW.isStreamCollection) throw new Error("@colyseus/schema: cannot reset a streamed MapSchema (pooling not supported).");
        this.$items.forEach((WW => WW?.[IW]?.())), this.$items.clear(), this.journal.reset(), WW.recycle(), this[bR] = void 0
      }
      has(WW) {
        return this.$items.has(WW)
      }
      forEach(WW) {
        this.$items.forEach(WW)
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
        this[iR].pause()
      }
      resumeTracking() {
        this[iR].resume()
      }
      untracked(WW) {
        return this[iR].untracked(WW)
      }
      get isTrackingPaused() {
        return this[iR].paused
      }
      setIndex(WW, RW) {
        this.journal.setIndex(WW, RW)
      }
      getIndex(WW) {
        return this.journal.keyOf(WW)
      } [tR](WW) {
        const RW = this.journal.keyOf(WW);
        return void 0 !== RW ? this.$items.get(RW) : void 0
      } [TW](WW) {
        const RW = this.journal.keyOf(WW);
        void 0 !== RW && (this.$items.delete(RW), this.journal.keyByIndex.delete(WW))
      } [gR](WW, RW, MW) {
        let wW = null;
        if (this.$items.forEach(((CW, zR) => {
            WW.has(zR) ? MW(CW) : ((wW ??= new Set).add(zR), RW(CW, zR))
          })), null !== wW) {
          wW.forEach((WW => {
            this.$items.delete(WW), delete this.journal.indexByKey[WW]
          }));
          const WW = [];
          this.journal.keyByIndex.forEach(((RW, MW) => {
            wW.has(RW) && WW.push(MW)
          }));
          for (let RW = 0; RW < WW.length; RW++) this.journal.keyByIndex.delete(WW[RW])
        }
      } [PW]() {
        this.journal.cleanupAfterEncode()
      }
      _dropView(WW) {
        dR(this, WW)
      }
      _unregister() {}
      toJSON() {
        return Object.fromEntries(Array.from(this, (WW => {
          let [RW, MW] = WW;
          return [RW, "function" === typeof MW.toJSON ? MW.toJSON() : MW]
        })))
      }
      clone(WW) {
        let RW;
        return WW ? RW = Object.assign(new Cw, this) : (RW = new Cw, this.forEach(((WW, MW) => {
          WW[iR] ? RW.set(MW, WW.clone()) : RW.set(MW, WW)
        }))), RW
      }
    }
    FR("map", {
      constructor: Cw
    });
    class zC {
      [iR];
      [bR];
      [YW];
      $items = new Map;
      deletedItems = {};
      $refId = 0;
      _stream;
      get maxPerTick() {
        return this._stream?.maxPerTick ?? 32
      }
      set maxPerTick(WW) {
        (this._stream ??= rM()).maxPerTick = WW
      }
      get priority() {
        return this._stream?.priority
      }
      set priority(WW) {
        (this._stream ??= rM()).priority = WW
      }
      static[NW] = UM;
      static[eW] = DM;
      static COLLECTION_KIND = nM;
      static[BW](WW, RW, MW) {
        return !MW || "string" === typeof WW[YW] || MW.isChangeTreeVisible((WW[tR](RW) ?? WW.deletedItems[RW])[iR])
      }
      static is(WW) {
        return void 0 !== WW.collection
      }
      constructor(WW) {
        Object.defineProperty(this, iR, {
          value: new kw(this),
          enumerable: !1,
          writable: !0
        }), this[YW] = void 0, WW && WW.forEach((WW => this.add(WW)))
      }
      static initializeForDecoder() {
        const WW = Object.create(zC.prototype);
        return WW.$items = new Map, WW.deletedItems = {}, WW.$refId = 0, WW[YW] = void 0, sM(WW), WW
      }
      add(WW) {
        const RW = this.$refId++,
          MW = this[iR];
        return this.$items.set(RW, WW), MW.isStreamCollection ? void 0 !== MW.root && XR(this, MW.root, RW) : MW.change(RW), void 0 !== WW[iR] && WW[iR].setParent(this, MW.root, RW), RW
      }
      at(WW) {
        const RW = Array.from(this.$items.keys())[WW];
        return this.$items.get(RW)
      }
      entries() {
        return this.$items.entries()
      }
      delete(WW) {
        const RW = this.$items.entries();
        let MW, wW;
        for (;
          (wW = RW.next()) && !wW.done;)
          if (WW === wW.value[1]) {
            MW = wW.value[0];
            break
          } if (void 0 === MW) return !1;
        const CW = this[iR];
        if (CW.isStreamCollection) {
          const WW = CW.root,
            RW = this.$items.get(MW);
          return void 0 !== WW && jM(this, WW, this[bR], MW), void 0 !== RW?.[iR] && WW?.remove(RW[iR]), this.deletedItems[MW] = RW, this.$items.delete(MW)
        }
        return this.deletedItems[MW] = CW.delete(MW), this.$items.delete(MW)
      }
      clear() {
        const WW = this[iR];
        WW.discard(), WW.forEachChild(((RW, MW) => {
          WW.root?.remove(RW)
        })), this.$items.clear(), WW.operation(CW.CLEAR)
      } [IW]() {
        const WW = this[iR];
        if (WW.isStreamCollection) throw new Error("@colyseus/schema: cannot reset a streamed CollectionSchema (pooling not supported).");
        this.$items.forEach((WW => WW?.[IW]?.())), this.$items.clear(), this.deletedItems = {}, this.$refId = 0, WW.recycle(), this[bR] = void 0
      }
      has(WW) {
        return Array.from(this.$items.values()).some((RW => RW === WW))
      }
      forEach(WW) {
        this.$items.forEach(((RW, MW, wW) => WW(RW, MW, this)))
      }
      values() {
        return this.$items.values()
      }
      get size() {
        return this.$items.size
      }
      pauseTracking() {
        this[iR].pause()
      }
      resumeTracking() {
        this[iR].resume()
      }
      untracked(WW) {
        return this[iR].untracked(WW)
      }
      get isTrackingPaused() {
        return this[iR].paused
      } [Symbol.iterator]() {
        return this.$items.values()
      }
      setIndex(WW, RW) {}
      getIndex(WW) {
        return WW
      } [tR](WW) {
        return this.$items.get(WW)
      } [TW](WW) {
        this.$items.delete(WW)
      } [gR](WW, RW, MW) {
        let wW = null;
        if (this.$items.forEach(((CW, zR) => {
            WW.has(zR) ? MW(CW) : ((wW ??= []).push(zR), RW(CW, zR))
          })), null !== wW)
          for (let CW = 0; CW < wW.length; CW++) this[TW](wW[CW])
      } [PW]() {
        for (const WW in this.deletedItems) delete this.deletedItems[WW]
      }
      _dropView(WW) {
        dR(this, WW)
      }
      _unregister() {}
      toArray() {
        return Array.from(this.$items.values())
      }
      toJSON() {
        const WW = [];
        return this.forEach(((RW, MW) => {
          WW.push("function" === typeof RW.toJSON ? RW.toJSON() : RW)
        })), WW
      }
      clone(WW) {
        let RW;
        return WW ? RW = Object.assign(new zC, this) : (RW = new zC, this.forEach((WW => {
          WW[iR] ? RW.add(WW.clone()) : RW.add(WW)
        }))), RW
      }
    }
    FR("collection", {
      constructor: zC
    });
    class Aw {
      [iR];
      [bR];
      [YW];
      $items = new Map;
      deletedItems = {};
      $refId = 0;
      _stream;
      get maxPerTick() {
        return this._stream?.maxPerTick ?? 32
      }
      set maxPerTick(WW) {
        (this._stream ??= rM()).maxPerTick = WW
      }
      get priority() {
        return this._stream?.priority
      }
      set priority(WW) {
        (this._stream ??= rM()).priority = WW
      }
      static[NW] = UM;
      static[eW] = DM;
      static COLLECTION_KIND = OM;
      static[BW](WW, RW, MW) {
        return !MW || "string" === typeof WW[YW] || MW.isVisible((WW[tR](RW) ?? WW.deletedItems[RW])[iR])
      }
      static is(WW) {
        return void 0 !== WW.set
      }
      constructor(WW) {
        Object.defineProperty(this, iR, {
          value: new kw(this),
          enumerable: !1,
          writable: !0
        }), this[YW] = void 0, WW && WW.forEach((WW => this.add(WW)))
      }
      static initializeForDecoder() {
        const WW = Object.create(Aw.prototype);
        return WW.$items = new Map, WW.deletedItems = {}, WW.$refId = 0, WW[YW] = void 0, sM(WW), WW
      }
      add(WW) {
        if (this.has(WW)) return !1;
        const RW = this.$refId++,
          MW = this[iR];
        return this.$items.set(RW, WW), MW.isStreamCollection ? void 0 !== MW.root && XR(this, MW.root, RW) : MW.change(RW, CW.ADD), void 0 !== WW[iR] && WW[iR].setParent(this, MW.root, RW), RW
      }
      entries() {
        return this.$items.entries()
      }
      delete(WW) {
        const RW = this.$items.entries();
        let MW, wW;
        for (;
          (wW = RW.next()) && !wW.done;)
          if (WW === wW.value[1]) {
            MW = wW.value[0];
            break
          } if (void 0 === MW) return !1;
        const CW = this[iR];
        if (CW.isStreamCollection) {
          const WW = CW.root,
            RW = this.$items.get(MW);
          return void 0 !== WW && jM(this, WW, this[bR], MW), void 0 !== RW?.[iR] && WW?.remove(RW[iR]), this.deletedItems[MW] = RW, this.$items.delete(MW)
        }
        return this.deletedItems[MW] = CW.delete(MW), this.$items.delete(MW)
      }
      clear() {
        const WW = this[iR];
        WW.discard(), this.$items.clear(), WW.operation(CW.CLEAR)
      } [IW]() {
        const WW = this[iR];
        if (WW.isStreamCollection) throw new Error("@colyseus/schema: cannot reset a streamed SetSchema (pooling not supported).");
        this.$items.forEach((WW => WW?.[IW]?.())), this.$items.clear(), this.deletedItems = {}, this.$refId = 0, WW.recycle(), this[bR] = void 0
      }
      has(WW) {
        const RW = this.$items.values();
        let MW, wW = !1;
        for (;
          (MW = RW.next()) && !MW.done;)
          if (WW === MW.value) {
            wW = !0;
            break
          } return wW
      }
      forEach(WW) {
        this.$items.forEach(((RW, MW, wW) => WW(RW, MW, this)))
      }
      values() {
        return this.$items.values()
      }
      get size() {
        return this.$items.size
      }
      pauseTracking() {
        this[iR].pause()
      }
      resumeTracking() {
        this[iR].resume()
      }
      untracked(WW) {
        return this[iR].untracked(WW)
      }
      get isTrackingPaused() {
        return this[iR].paused
      } [Symbol.iterator]() {
        return this.$items.values()
      }
      setIndex(WW, RW) {}
      getIndex(WW) {
        return WW
      } [tR](WW) {
        return this.$items.get(WW)
      } [TW](WW) {
        this.$items.delete(WW)
      } [gR](WW, RW, MW) {
        let wW = null;
        if (this.$items.forEach(((CW, zR) => {
            WW.has(zR) ? MW(CW) : ((wW ??= []).push(zR), RW(CW, zR))
          })), null !== wW)
          for (let CW = 0; CW < wW.length; CW++) this[TW](wW[CW])
      } [PW]() {
        for (const WW in this.deletedItems) delete this.deletedItems[WW]
      }
      _dropView(WW) {
        dR(this, WW)
      }
      _unregister() {}
      toArray() {
        return Array.from(this.$items.values())
      }
      toJSON() {
        const WW = [];
        return this.forEach(((RW, MW) => {
          WW.push("function" === typeof RW.toJSON ? RW.toJSON() : RW)
        })), WW
      }
      clone(WW) {
        let RW;
        return WW ? RW = Object.assign(new Aw, this) : (RW = new Aw, this.forEach((WW => {
          WW[iR] ? RW.add(WW.clone()) : RW.add(WW)
        }))), RW
      }
    }
    FR("set", {
      constructor: Aw
    });
    class bC {
      [iR];
      [bR];
      [YW];
      $items = new Map;
      $nextPosition = 0;
      _itemIndex = new Map;
      _stream;
      get maxPerTick() {
        return this._stream?.maxPerTick ?? 32
      }
      set maxPerTick(WW) {
        (this._stream ??= rM()).maxPerTick = WW
      }
      get priority() {
        return this._stream?.priority
      }
      set priority(WW) {
        (this._stream ??= rM()).priority = WW
      }
      static $isStream = !0;
      static[NW] = UM;
      static[eW] = DM;
      static COLLECTION_KIND = GM;
      static[BW](WW, RW, MW) {
        if (!MW) return !0;
        const wW = WW[tR](RW);
        return void 0 !== wW && MW.isVisible(wW[iR])
      }
      static is(WW) {
        return WW && void 0 !== WW.stream
      }
      constructor() {
        Object.defineProperty(this, iR, {
          value: new kw(this),
          enumerable: !1,
          writable: !0
        }), this[YW] = void 0
      }
      static initializeForDecoder() {
        const WW = Object.create(bC.prototype);
        return WW.$items = new Map, WW.$nextPosition = 0, WW._itemIndex = new Map, WW[YW] = void 0, sM(WW), WW
      }
      add(WW) {
        if (this._itemIndex.has(WW)) return -1;
        const RW = this.$nextPosition++;
        this.$items.set(RW, WW), this._itemIndex.set(WW, RW);
        const MW = this[iR].root;
        return void 0 !== WW[iR] && WW[iR].setParent(this, MW, RW), void 0 !== MW && XR(this, MW, RW), RW
      }
      remove(WW) {
        const RW = this._itemIndex.get(WW);
        if (void 0 === RW) return !1;
        this._itemIndex.delete(WW), this.$items.delete(RW);
        const MW = this[iR].root;
        return void 0 !== MW && (jM(this, MW, this[bR], RW), void 0 !== WW[iR] && MW.remove(WW[iR])), !0
      }
      has(WW) {
        return this._itemIndex.has(WW)
      }
      clear() {
        const WW = this[iR].root;
        if (void 0 !== WW) {
          ! function(WW, RW, MW) {
            const wW = WW._stream;
            if (void 0 !== wW) {
              wW.broadcastPending.clear();
              for (const WW of wW.sentBroadcast) wW.broadcastDeletes.add(WW);
              wW.sentBroadcast.clear(), RW.forEachActiveView((WW => {
                wW.pendingByView.get(WW.id)?.clear();
                const RW = wW.sentByView.get(WW.id);
                if (void 0 !== RW && RW.size > 0) {
                  let wW = WW.changes.get(MW);
                  void 0 === wW && (wW = new Map, WW.changes.set(MW, wW));
                  for (const WW of RW) wW.set(WW, CW.DELETE);
                  RW.clear()
                }
              }))
            }
          }(this, WW, this[bR]);
          for (const RW of this.$items.values()) void 0 !== RW[iR] && WW.remove(RW[iR])
        }
        this.$items.clear(), this._itemIndex.clear()
      }
      forEach(WW) {
        for (const [RW, MW] of this.$items) WW(MW, RW, this)
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
      setIndex(WW, RW) {}
      getIndex(WW) {
        return WW
      } [tR](WW) {
        return this.$items.get(WW)
      } [TW](WW) {
        const RW = this.$items.get(WW);
        void 0 !== RW && (this._itemIndex.delete(RW), this.$items.delete(WW))
      } [gR]() {} [PW]() {}
      toArray() {
        return Array.from(this.$items.values())
      }
      toJSON() {
        const WW = [];
        return this.forEach((RW => {
          WW.push("function" === typeof RW?.toJSON ? RW.toJSON() : RW)
        })), WW
      }
      clone(WW) {
        if (WW) {
          return Object.assign(new bC, this)
        }
        const RW = new bC;
        return RW.maxPerTick = this.maxPerTick, this.forEach((WW => {
          RW.add("function" === typeof WW?.clone ? WW.clone() : WW)
        })), RW
      }
      _dropView(WW) {
        dR(this, WW)
      }
      _unregister() {}
    }
    FR("stream", {
      constructor: bC
    });
    class yC {
      [FW] = !0;
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
      constructor(WW) {
        this._type = WW
      }
      default (WW) {
        return this._default = WW, this._hasDefault = !0, this
      }
      view(WW) {
        return this._view = WW ?? -1, this
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
        const WW = this._type;
        if (WW && "object" === typeof WW && void 0 !== WW.array) throw new Error(QR);
        return this._stream = !0, this
      }
      priority(WW) {
        return this._streamPriority = WW, this
      }
      deprecated() {
        let WW = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
        return this._deprecated = !0, this._deprecatedThrows = WW, this
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

    function Nw(WW) {
      return null != WW && !0 === WW[FW]
    }

    function ew(WW) {
      return () => new yC(WW)
    }

    function Bw(WW) {
      if (Nw(WW)) {
        const RW = WW._type;
        throw new Error(`t.array/map/set/collection(): a t.* builder is not a valid element type \u2014 ${"string"===typeof RW?`use the type name instead: t.array("${RW}")`:'collections accept a Schema class or a primitive type name ("string", "number", \u2026)'}.`)
      }
      return WW
    }

    function tC(WW) {
      return new yC({
        quantized: hR(WW)
      })
    }
    const Tw = Object.freeze({
        string: ew("string"),
        number: ew("number"),
        boolean: ew("boolean"),
        int8: ew("int8"),
        uint8: ew("uint8"),
        int16: ew("int16"),
        uint16: ew("uint16"),
        int32: ew("int32"),
        uint32: ew("uint32"),
        int64: ew("int64"),
        uint64: ew("uint64"),
        float32: ew("float32"),
        float64: ew("float64"),
        bigint64: ew("bigint64"),
        biguint64: ew("biguint64"),
        ref: WW => new yC(WW),
        array: WW => new yC({
          array: Bw(WW)
        }),
        map: WW => new yC({
          map: Bw(WW)
        }),
        set: WW => new yC({
          set: Bw(WW)
        }),
        collection: WW => new yC({
          collection: Bw(WW)
        }),
        stream: WW => {
          const RW = new yC({
            stream: Bw(WW)
          });
          return RW._stream = !0, RW
        },
        quantized: tC,
        angle: WW => tC({
          min: 0,
          max: 2 * Math.PI,
          mode: "wrap",
          bits: WW?.bits ?? 16
        })
      }),
      gC = -1;

    function iC(WW) {
      return xM.register(WW), WW
    }

    function Yw() {
      let WW = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : gC;
      return function(RW, MW) {
        const wW = LR.initialize(RW.constructor);
        LR.setTag(wW, MW, WW)
      }
    }

    function Jw(WW, RW) {
      const MW = LR.initialize(WW.constructor);
      LR.setUnreliable(MW, RW)
    }

    function Pw(WW, RW) {
      const MW = LR.initialize(WW.constructor);
      LR.setPatchOnly(MW, RW)
    }

    function Iw(WW, RW) {
      const MW = LR.initialize(WW.constructor);
      LR.setFullStateOnly(MW, RW)
    }

    function ow(WW, RW) {
      return function(MW, wW) {
        const CW = MW.constructor;
        if (!WW) throw new Error(`${CW.name}: @type() reference provided for "${wW}" is undefined. Make sure you don't have any circular dependencies.`);
        WW = KR(WW, `${CW.name}.${wW}`), xM.register(CW);
        const zR = Object.getPrototypeOf(CW)[Symbol.metadata],
          AW = LR.initialize(CW);
        let bR = AW[wW];
        if (void 0 !== AW[bR]) {
          if (AW[bR].deprecated) return;
          if (void 0 !== AW[bR].type) {
            const WW = new Error(`@colyseus/schema: Duplicate '${wW}' definition on '${CW.name}'.\nCheck @type() annotation`);
            throw new Error(`${WW.message} ${WW.stack.split("\n")[4].trim()}`)
          }
        } else bR = AW[cR] ?? (zR && zR[cR]) ?? -1, bR++;
        if (RW && RW.manual) LR.addField(AW, bR, wW, WW, {
          enumerable: !0,
          configurable: !0,
          writable: !0
        });
        else {
          const {
            complexTypeKlass: RW,
            childType: MW
          } = vM(WW);
          LR.addField(AW, bR, wW, WW, Fw(wW, bR, MW, RW))
        }
        AW[fW][wW] && Object.defineProperty(MW, wW, AW[fW][wW]), ("string" === typeof WW || UR(WW)) && (AW[rR] || Object.defineProperty(AW, rR, {
          value: [],
          enumerable: !1,
          configurable: !0,
          writable: !0
        }), AW[rR][bR] = "string" === typeof WW ? RR[WW] : mM(WW.quantized))
      }
    }
    const lw = {
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

    function Fw(WW, RW, MW, wW) {
      let zR;
      return zR = wW ? function(WW, RW, MW, wW) {
        const zR = wW.constructor === Mw,
          AW = wW.constructor === Cw;
        return function(WW) {
          const wW = this[lW],
            bR = wW[RW];
          if (WW !== bR) {
            if (void 0 !== WW && null !== WW) {
              if (!zR || WW instanceof Mw)
                if (!AW || WW instanceof Cw) WW[YW] = MW;
                else {
                  const RW = new Cw;
                  if (RW[YW] = MW, WW instanceof Map) WW.forEach(((WW, MW) => RW.set(MW, WW)));
                  else
                    for (const MW in WW) RW.set(MW, WW[MW]);
                  WW = RW
                }
              else {
                const RW = new Mw;
                RW[YW] = MW, RW.push(...WW), WW = RW
              }
              const wW = this[iR],
                NW = this.constructor;
              void 0 !== bR && null !== bR && bR[iR] ? (wW.root?.remove(bR[iR]), NW[yR](wW, RW, CW.DELETE_AND_ADD)) : NW[yR](wW, RW, CW.ADD), WW[iR]?.setParent(this, wW.root, RW)
            } else void 0 !== bR && null !== bR && this[iR].delete(RW);
            wW[RW] = WW
          }
        }
      }(0, RW, MW, wW) : "string" === typeof MW ? function(WW, RW, MW) {
        const wW = lw[MW],
          zR = "string" === MW,
          AW = "boolean" === MW;
        return function(MW) {
          const bR = this[lW],
            NW = bR[RW];
          if (MW !== NW) {
            if (void 0 !== MW && null !== MW) {
              if (!AW && void 0 !== wW && typeof MW !== wW && (!zR || null !== MW)) {
                const RW = MW && MW.constructor ? ` (${MW.constructor.name})` : "";
                throw new ZM(`a '${wW}' was expected, but '${JSON.stringify(MW)}'${RW} was provided in ${this.constructor.name}#${WW}`)
              }
              this.constructor[yR](this[iR], RW, CW.ADD)
            } else void 0 !== NW && null !== NW && this[iR].delete(RW);
            bR[RW] = MW
          }
        }
      }(WW, RW, MW) : UR(MW) ? function(WW, RW, MW) {
        return function(wW) {
          const zR = this[lW],
            AW = zR[RW];
          if (void 0 !== wW && null !== wW) {
            if ("number" !== typeof wW) throw new ZM(`a 'number' was expected, but '${JSON.stringify(wW)}' was provided in ${this.constructor.name}#${WW}`);
            if ((wW = VR(MW, ER(MW, wW))) === AW) return;
            this.constructor[yR](this[iR], RW, CW.ADD)
          } else {
            if (wW === AW) return;
            void 0 !== AW && null !== AW && this[iR].delete(RW)
          }
          zR[RW] = wW
        }
      }(WW, RW, MW.quantized) : function(WW, RW, MW) {
        return function(wW) {
          const zR = this[lW],
            AW = zR[RW];
          if (wW !== AW) {
            if (void 0 !== wW && null !== wW) {
              SM(wW, MW, this, WW);
              const zR = this[iR],
                bR = this.constructor;
              void 0 !== AW && null !== AW && AW[iR] ? (zR.root?.remove(AW[iR]), bR[yR](zR, RW, CW.DELETE_AND_ADD)) : bR[yR](zR, RW, CW.ADD), wW[iR]?.setParent(this, zR.root, RW)
            } else void 0 !== AW && null !== AW && this[iR].delete(RW);
            zR[RW] = wW
          }
        }
      }(WW, RW, MW), {
        get: function() {
          return this[lW][RW]
        },
        set: zR,
        enumerable: !0,
        configurable: !0
      }
    }

    function fw() {
      let WW = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
      return function(RW, MW) {
        const wW = LR.initialize(RW.constructor);
        LR.setDeprecated(wW, MW), WW && (wW[fW] ??= {}, wW[fW][MW] = {
          get: function() {
            throw new Error(`${MW} is deprecated.`)
          },
          set: function(WW) {},
          enumerable: !1,
          configurable: !0
        }, Object.defineProperty(RW, MW, wW[fW][MW]))
      }
    }
    let Qw = !1;

    function rC(WW, RW, MW) {
      Qw || (Qw = !0, console.warn("@colyseus/schema: defineTypes() is deprecated and will be removed in a future release. Use schema() with t.* field builders instead \u2192 https://docs.colyseus.io/state/schema"));
      for (let wW in RW) ow(RW[wW], MW)(WW.prototype, wW);
      return WW
    }

    function cC(WW, RW) {
      let MW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : jC;
      if (null == WW || "object" !== typeof WW) throw new Error(`schema(): first argument must be a fields object (got ${typeof WW}).`);
      const wW = {},
        CW = {},
        zR = {},
        AW = {},
        bR = (WW, RW) => {
          if (RW.hasDefault)((WW, RW) => {
            "function" === typeof RW ? AW[WW] = RW : RW && "function" === typeof RW.clone ? AW[WW] = () => RW.clone() : zR[WW] = RW
          })(WW, RW.default);
          else if (!RW.optional) {
            const MW = function(WW) {
              if (WW && "object" === typeof WW) {
                if (void 0 !== WW.array) return () => new Mw;
                if (void 0 !== WW.map) return () => new Cw;
                if (void 0 !== WW.set) return () => new Aw;
                if (void 0 !== WW.collection) return () => new zC;
                if (void 0 !== WW.stream) return () => new bC
              } else if ("function" === typeof WW && jC.is(WW) && (!WW.prototype.initialize || 0 === WW.prototype.initialize.length)) return () => new WW
            }(RW.type);
            MW && (AW[WW] = MW)
          }
        },
        yR = {},
        NW = [],
        eW = [],
        BW = {},
        tR = [],
        TW = [],
        gR = {},
        iR = [];
      for (const lW in WW) {
        const MW = WW[lW],
          zR = `schema(${RW?`'${RW}'`:""}): field '${lW}'`;
        if (Nw(MW)) {
          const WW = MW.toDefinition();
          if (WW.noSync) {
            if (void 0 !== WW.view || WW.unreliable || WW.patchOnly || WW.fullStateOnly || WW.stream) throw new Error(`${zR} uses .noSync() together with a sync-only modifier (.view/.unreliable/.patchOnly/.fullStateOnly/.stream). A local-only field cannot be synchronized.`);
            bR(lW, WW);
            continue
          }
          if (WW.patchOnly && WW.fullStateOnly) throw new Error(`${zR} uses .patchOnly() together with .fullStateOnly(). Those are the only two delivery channels, so the field would never reach a client \u2014 use .noSync() if that is intended.`);
          const RW = KR(WW.type, zR);
          if ("function" === typeof RW && !jC.is(RW)) throw new Error(`${zR} is a synced ref to non-Schema class '${RW.name||"(anonymous)"}' \u2014 use .noSync(), or Metadata.setFields().`);
          wW[lW] = RW, void 0 !== WW.view && (yR[lW] = WW.view), WW.unreliable && NW.push(lW), WW.patchOnly && eW.push(lW), WW.deprecated && (BW[lW] = WW.deprecatedThrows), WW.fullStateOnly && tR.push(lW), WW.stream && TW.push(lW), void 0 !== WW.streamPriority && (gR[lW] = WW.streamPriority), WW.optional && iR.push(lW), bR(lW, WW)
        } else {
          if ("function" !== typeof MW) throw new Error(`${zR} must be a t.* builder, Schema subclass, or method (got ${typeof MW}).`);
          jC.is(MW) ? (wW[lW] = MW, MW.prototype.initialize && 0 !== MW.prototype.initialize.length || (AW[lW] = () => new MW)) : CW[lW] = MW
        }
      }
      const YW = WW => {
          for (const RW in zR) WW[RW] = zR[RW];
          for (const RW in AW) WW[RW] = AW[RW]()
        },
        JW = () => {
          const WW = {};
          return YW(WW), WW
        },
        PW = "function" === typeof CW.initialize,
        IW = CW.initialize ?? MW._initialize,
        oW = class extends MW {
          constructor() {
            for (var WW = arguments.length, RW = new Array(WW), MW = 0; MW < WW; MW++) RW[MW] = arguments[MW];
            const CW = RW[0];
            void 0 === CW ? (super(), YW(this)) : super(Object.assign(JW(), PW ? (WW => {
              const RW = Object.keys(wW),
                MW = {};
              for (const wW in WW) RW.includes(wW) || (MW[wW] = WW[wW]);
              return MW
            })(CW) : CW)), IW && new.target === oW && IW.apply(this, RW)
          }
        };
      RW && Object.defineProperty(oW, "name", {
        value: RW
      }), LR.setFields(oW, wW), oW._getDefaultValues = JW, oW._initialize = IW, Object.assign(oW.prototype, CW);
      for (const lW in yR) Yw(yR[lW])(oW.prototype, lW);
      for (const lW of NW) Jw(oW.prototype, lW);
      for (const lW of eW) Pw(oW.prototype, lW);
      for (const lW in BW) fw(BW[lW])(oW.prototype, lW);
      if (tR.length > 0 || TW.length > 0) {
        const WW = oW[Symbol.metadata];
        for (const RW of tR) LR.setFullStateOnly(WW, RW);
        for (const RW of TW) LR.setStream(WW, RW);
        for (const RW in gR) LR.setStreamPriority(WW, RW, gR[RW])
      }
      if (iR.length > 0) {
        const WW = oW[Symbol.metadata];
        for (const RW of iR) WW[WW[RW]].optional = !0
      }
      return oW.extend = (WW, RW) => cC(WW, RW, oW), oW
    }

    function Xw(WW) {
      const RW = WW[iR].root,
        MW = {
          ops: {},
          refs: []
        };
      let wW = RW.changes.next;
      for (; wW;) {
        const WW = wW.changeTree;
        void 0 !== WW ? (MW.refs.push(`refId#${WW.ref[bR]}`), WW.forEach(((WW, RW) => {
          if (WW < 0 || !RW) return;
          const wW = CW[RW];
          MW.ops[wW] || (MW.ops[wW] = 0), MW.ops[wW]++
        })), wW = wW.next) : wW = wW.next
      }
      return MW
    }
    class jC {
      static[NW] = pM;
      static[eW] = HM;
      [bR];
      [lW];
      static initialize(WW) {
        Object.defineProperty(WW, iR, {
          value: new kw(WW),
          enumerable: !1,
          writable: !0
        }), WW[lW] = []
      }
      static initializeForDecoder() {
        const WW = Object.create(this.prototype);
        return sM(WW), WW[lW] = [], WW
      }
      static reset(WW) {
        const RW = WW?.[iR];
        if (void 0 === RW || "function" !== typeof RW.recycle) throw new Error("@colyseus/schema: Schema.reset() requires a tracked (encoder-side) instance.");
        if (void 0 !== RW.extraParents) throw new Error(`@colyseus/schema: cannot reset a shared instance (${WW.constructor.name}) with multiple parents.`);
        WW[IW]()
      } [IW]() {
        const WW = this.constructor[Symbol.metadata],
          RW = WW?.[XW] ?? [],
          MW = this[lW];
        for (let wW = 0; wW < RW.length; wW++) {
          const WW = MW[RW[wW]];
          WW?.[IW]?.()
        }
        this[iR].recycle(), this[bR] = void 0
      }
      static is(WW) {
        const RW = WW[Symbol.metadata];
        return "object" === typeof RW && null !== RW
      }
      static isSchema(WW) {
        return "function" === typeof WW?.assign
      }
      static[yR](WW, RW) {
        let MW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : CW.ADD;
        WW.change(RW, MW)
      }
      static[BW](WW, RW, MW) {
        const wW = WW.constructor[Symbol.metadata],
          CW = wW[RW]?.tag;
        return void 0 === MW ? void 0 === CW : void 0 === CW || (CW === gC ? MW.isChangeTreeVisible(WW[iR]) : MW.hasTagOnTree(WW[iR], CW))
      }
      constructor(WW) {
        jC.initialize(this), WW && jC.assignProps(this, WW)
      }
      assign(WW) {
        return jC.assignProps(this, WW), this
      }
      static assignProps(WW, RW) {
        const MW = WW.constructor[Symbol.metadata];
        if (MW && void 0 !== MW[cR])
          for (let CW = 0; CW <= MW[cR]; CW++) {
            const wW = MW[CW];
            if (!wW) continue;
            const zR = RW[wW.name];
            void 0 !== zR && (WW[wW.name] = zR)
          }
        const wW = Object.keys(RW);
        for (let CW = 0; CW < wW.length; CW++) {
          const zR = wW[CW];
          MW && void 0 !== MW[zR] || (WW[zR] = RW[zR])
        }
      }
      restore(WW) {
        const RW = this.constructor[Symbol.metadata];
        for (const MW in RW) {
          const wW = RW[MW],
            CW = wW.name,
            zR = wW.type,
            AW = WW[CW];
          if (void 0 !== AW && null !== AW)
            if ("string" === typeof zR) this[CW] = AW;
            else if (jC.is(zR)) {
            const WW = new zR;
            WW.restore(AW), this[CW] = WW
          } else if ("object" === typeof zR) {
            const WW = Object.keys(zR)[0],
              RW = zR[WW];
            if ("map" === WW) {
              const WW = this[CW];
              for (const MW in AW)
                if (jC.is(RW)) {
                  const wW = new RW;
                  wW.restore(AW[MW]), WW.set(MW, wW)
                } else WW.set(MW, AW[MW])
            } else if ("array" === WW) {
              const WW = this[CW];
              for (let MW = 0; MW < AW.length; MW++)
                if (jC.is(RW)) {
                  const wW = new RW;
                  wW.restore(AW[MW]), WW.push(wW)
                } else WW.push(AW[MW])
            }
          }
        }
        return this
      }
      setDirty(WW, RW) {
        const MW = this.constructor[Symbol.metadata];
        this[iR].change(MW[MW[WW]].index, RW)
      }
      pauseTracking() {
        this[iR].pause()
      }
      resumeTracking() {
        this[iR].resume()
      }
      untracked(WW) {
        return this[iR].untracked(WW)
      }
      get isTrackingPaused() {
        return this[iR].paused
      }
      clone() {
        const WW = Object.create(this.constructor.prototype);
        jC.initialize(WW);
        const RW = this.constructor[Symbol.metadata];
        for (const MW in RW) {
          const wW = RW[MW].name;
          "object" === typeof this[wW] && "function" === typeof this[wW]?.clone ? WW[wW] = this[wW].clone() : WW[wW] = this[wW]
        }
        return WW
      }
      toJSON() {
        const WW = {},
          RW = this.constructor[Symbol.metadata];
        for (const MW in RW) {
          const wW = RW[MW],
            CW = wW.name;
          wW.deprecated || null === this[CW] || "undefined" === typeof this[CW] || (WW[CW] = "function" === typeof this[CW].toJSON ? this[CW].toJSON() : this[CW])
        }
        return WW
      }
      discardAllChanges() {
        this[iR].discardAll()
      } [tR](WW) {
        return this[this.constructor[Symbol.metadata][WW].name]
      } [TW](WW) {
        this[this.constructor[Symbol.metadata][WW].name] = void 0
      }
      static debugRefIds(WW) {
        let RW = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          MW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          wW = arguments.length > 3 ? arguments[3] : void 0,
          CW = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "";
        const zR = RW ? ` - ${JSON.stringify(WW.toJSON())}` : "",
          AW = WW[iR],
          yR = WW[bR],
          NW = wW ? wW.root.refCount[yR] : AW.refCount,
          eW = NW > 1 ? ` [\xd7${NW}]` : "";
        let BW = `${function(WW){return new Array(WW).fill(0).map(((RW,MW)=>MW===WW-1?"\u2514\u2500 ":"   ")).join("")}(MW)}${CW}${WW.constructor.name} (refId: ${yR})${eW}${zR}\n`;
        return AW.forEachChild(((CW, zR) => {
          let AW = zR;
          "number" === typeof zR && WW.$indexes && (AW = WW.$indexes.get(zR) ?? zR);
          const bR = void 0 !== WW.forEach && void 0 !== AW ? `["${AW}"]: ` : "";
          BW += this.debugRefIds(CW.ref, RW, MW + 1, wW, bR)
        })), BW
      }
      static debugRefIdEncodingOrder(WW) {
        let RW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "allChanges";
        const MW = [],
          wW = WW[iR];
        if ("changes" === RW) {
          let WW = wW.root.changes?.next;
          for (; WW;) WW.changeTree && MW.push(WW.changeTree.ref[bR]), WW = WW.next;
          return MW
        }
        const CW = "allFilteredChanges" === RW,
          zR = new Set,
          AW = WW => {
            zR.has(WW) || (zR.add(WW), WW.isFiltered === CW && MW.push(WW.ref[bR]), WW.forEachChild(((WW, RW) => AW(WW))))
          };
        return AW(wW), MW
      }
      static debugRefIdsFromDecoder(WW) {
        return this.debugRefIds(WW.state, !1, 0, WW)
      }
      static debugChanges(WW) {
        let RW = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        const MW = WW[iR],
          wW = RW ? "allChanges" : "changes";
        let zR = `${WW.constructor.name} (${WW[bR]}) -> .${wW}:\n`;
        return RW ? MW.forEachLive((WW => {
          zR += `- [${WW}]: ADD (${JSON.stringify(MW.getValue(Number(WW),!0))})\n`
        })) : MW.forEach(((WW, RW) => {
          WW < 0 || !RW || (zR += `- [${WW}]: ${CW[RW]} (${JSON.stringify(MW.getValue(Number(WW),!1))})\n`)
        })), zR
      }
    }
    zR(jC);
    const kC = {
      value: 0,
      enumerable: !1,
      writable: !0
    };
    class aC {
      types;
      nextUniqueId = 0;
      changeTrees = {};
      get refCount() {
        const WW = {};
        for (const RW in this.changeTrees) WW[RW] = this.changeTrees[RW].refCount;
        return WW
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
      enqueueFilterRefresh(WW) {
        this.types.hasFilters && (WW.flags & XM || (WW.flags |= XM, this.pendingFilterRefresh.push(WW)))
      }
      _nodePool = [];
      _nextViewId = 0;
      _freeViewIds = [];
      acquireViewId() {
        return this._freeViewIds.length > 0 ? this._freeViewIds.pop() : this._nextViewId++
      }
      releaseViewId(WW) {
        this._freeViewIds.push(WW)
      }
      activeViews = new Map;
      streamTrees = new Set;
      registerView(WW) {
        this.activeViews.set(WW.id, new WeakRef(WW))
      }
      unregisterView(WW) {
        this.activeViews.delete(WW.id);
        const RW = WW.id;
        for (const MW of this.streamTrees) MW._dropView(RW)
      }
      forEachActiveView(WW) {
        for (const [RW, MW] of this.activeViews) {
          const wW = MW.deref();
          if (void 0 !== wW) WW(wW);
          else {
            this.activeViews.delete(RW);
            for (const WW of this.streamTrees) WW._dropView(RW)
          }
        }
      }
      registerStream(WW) {
        this.streamTrees.add(WW)
      }
      unregisterStream(WW) {
        this.streamTrees.delete(WW)
      }
      constructor(WW) {
        let RW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        this.types = WW, this.nextUniqueId = RW
      }
      add(WW) {
        const RW = WW.ref;
        void 0 === RW[bR] && (kC.value = this.nextUniqueId++, Object.defineProperty(RW, bR, kC));
        const MW = RW[bR],
          wW = void 0 === this.changeTrees[MW];
        wW && (this.changeTrees[MW] = WW), WW.needsRestage && (WW.needsRestage = !1, WW.forEachLiveWithCtx(WW, MM));
        const CW = wW ? 0 : WW.refCount;
        return WW.refCount = CW + 1, CW > 0 && this.enqueueFilterRefresh(WW), wW
      }
      remove(WW) {
        const RW = WW.refCount - 1;
        if (RW <= 0) {
          if (WW.root = void 0, delete this.changeTrees[WW.ref[bR]], WW.isStreamCollection) {
            const RW = WW.ref;
            RW._unregister?.(), this.unregisterStream(RW)
          }
          this.removeFromQueue(WW), this.removeFromUnreliableQueue(WW), WW.refCount = 0, WW.needsRestage = !0, WW.forEachChild(((RW, MW) => {
            RW.removeParent(WW.ref) && (void 0 === RW.parentRef || RW.refCount > 0 ? this.remove(RW) : this.moveNextToParent(RW))
          }))
        } else WW.refCount = RW, this.enqueueFilterRefresh(WW), this.recursivelyMoveNextToParent(WW);
        return RW
      }
      recursivelyMoveNextToParent(WW) {
        this.moveNextToParent(WW), WW.forEachChild(((WW, RW) => this.recursivelyMoveNextToParent(WW)))
      }
      moveNextToParent(WW) {
        WW.changesNode && this._moveNextToParentInList(this.changes, WW, WW.changesNode, "changesNode"), WW.unreliableChangesNode && this._moveNextToParentInList(this.unreliableChanges, WW, WW.unreliableChangesNode, "unreliableChangesNode")
      }
      _moveNextToParentInList(WW, RW, MW, wW) {
        const CW = RW.parent;
        if (!CW || !CW[iR]) return;
        const zR = CW[iR][wW];
        zR && zR !== MW && (MW.position > zR.position || (MW.prev ? MW.prev.next = MW.next : WW.next = MW.next, MW.next ? MW.next.prev = MW.prev : WW.tail = MW.prev, MW.prev = WW.tail, MW.next = void 0, WW.tail.next = MW, WW.tail = MW, MW.position = WW.nextPosition++))
      }
      enqueueChangeTree(WW) {
        (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : WW.changesNode) || (WW.changesNode = this._appendToList(this.changes, WW))
      }
      enqueueUnreliable(WW) {
        (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : WW.unreliableChangesNode) || (WW.unreliableChangesNode = this._appendToList(this.unreliableChanges, WW))
      }
      _appendToList(WW, RW) {
        const MW = this._nodePool;
        let wW;
        return MW.length > 0 ? (wW = MW.pop(), wW.changeTree = RW, wW.next = void 0, wW.prev = void 0) : wW = {
          changeTree: RW,
          next: void 0,
          prev: void 0,
          position: 0
        }, WW.next ? (wW.prev = WW.tail, WW.tail.next = wW, WW.tail = wW) : (WW.nextPosition = 0, WW.next = wW, WW.tail = wW), wW.position = WW.nextPosition++, wW
      }
      releaseNode(WW) {
        WW.changeTree = void 0, WW.prev = void 0, WW.next = void 0, this._nodePool.push(WW)
      }
      removeFromQueue(WW) {
        return this._removeNode(this.changes, WW, WW.changesNode, "changesNode")
      }
      removeFromUnreliableQueue(WW) {
        return this._removeNode(this.unreliableChanges, WW, WW.unreliableChangesNode, "unreliableChangesNode")
      }
      _removeNode(WW, RW, MW, wW) {
        return !(!MW || MW.changeTree !== RW) && (MW.prev ? MW.prev.next = MW.next : WW.next = MW.next, MW.next ? MW.next.prev = MW.prev : WW.tail = MW.prev, RW[wW] = void 0, this.releaseNode(MW), !0)
      }
    }

    function sw(WW, RW) {
      if (-1 === RW || RW >= WW.length) return !1;
      const MW = WW.length - 1;
      for (let wW = RW; wW < MW; wW++) WW[wW] = WW[wW + 1];
      return WW.length = MW, !0
    }

    function dw(WW, RW, MW) {
      const wW = ~MW,
        CW = WW.changeTrees;
      for (const zR in CW) {
        const WW = CW[zR],
          MW = WW.visibleViews;
        void 0 !== MW && RW < MW.length && (MW[RW] &= wW);
        const AW = WW.subscribedViews;
        void 0 !== AW && RW < AW.length && (AW[RW] &= wW);
        const bR = WW.tagViews;
        void 0 !== bR && bR.forEach((WW => {
          RW < WW.length && (WW[RW] &= wW)
        }))
      }
    }
    const pw = new FinalizationRegistry((WW => {
      let {
        root: RW,
        id: MW,
        slot: wW,
        bit: CW
      } = WW;
      dw(RW, wW, CW), RW.activeViews.delete(MW);
      for (const zR of RW.streamTrees) zR._dropView(MW);
      RW.releaseViewId(MW)
    }));

    function hw(WW) {
      if (void 0 === WW) return "undefined";
      if (null === WW) return "null";
      const RW = typeof WW;
      return "string" === RW ? JSON.stringify(WW.length > 30 ? `${WW.slice(0,30)}\u2026` : WW) : "object" !== RW && "function" !== RW ? `${RW} ${String(WW)}` : Array.isArray(WW) ? `Array(${WW.length})` : WW.constructor?.name ?? "Object"
    }
    class Uw {
      iterable;
      items;
      id = -1;
      _root;
      _slot = 0;
      _bit = 0;
      changes = new Map;
      constructor() {
        let WW = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        this.iterable = WW, WW && (this.items = [])
      }
      _bindRoot(WW) {
        void 0 === this._root && (this._root = WW, this.id = WW.acquireViewId(), this._slot = this.id >> 5, this._bit = 1 << (31 & this.id), WW.registerView(this), pw.register(this, {
          root: WW,
          id: this.id,
          slot: this._slot,
          bit: this._bit
        }, this))
      }
      dispose() {
        void 0 !== this._root && (this._root.unregisterView(this), dw(this._root, this._slot, this._bit), this._root.releaseViewId(this.id), pw.unregister(this), this._root = void 0, this.id = -1)
      }
      isVisible(WW) {
        const RW = WW.visibleViews,
          MW = this._slot;
        return void 0 !== RW && MW < RW.length && 0 !== (RW[MW] & this._bit)
      }
      markVisible(WW) {
        const RW = this._slot;
        let MW = WW.visibleViews;
        for (void 0 === MW && (MW = WW.visibleViews = []); MW.length <= RW;) MW.push(0);
        MW[RW] |= this._bit
      }
      unmarkVisible(WW) {
        const RW = WW.visibleViews;
        if (void 0 === RW) return;
        const MW = this._slot;
        MW < RW.length && (RW[MW] &= ~this._bit)
      }
      isSubscribed(WW) {
        const RW = WW.subscribedViews,
          MW = this._slot;
        return void 0 !== RW && MW < RW.length && 0 !== (RW[MW] & this._bit)
      }
      _setSubscribed(WW) {
        const RW = this._slot;
        let MW = WW.subscribedViews;
        for (void 0 === MW && (MW = WW.subscribedViews = []); MW.length <= RW;) MW.push(0);
        MW[RW] |= this._bit
      }
      _clearSubscribed(WW) {
        const RW = WW.subscribedViews;
        if (void 0 === RW) return;
        const MW = this._slot;
        MW < RW.length && (RW[MW] &= ~this._bit)
      }
      hasTagOnTree(WW, RW) {
        const MW = WW.tagViews;
        if (void 0 === MW) return !1;
        const wW = this._slot,
          CW = this._bit;
        for (let zR = RW; 0 !== zR; zR &= zR - 1) {
          const WW = MW.get(zR & -zR);
          if (void 0 !== WW && wW < WW.length && 0 !== (WW[wW] & CW)) return !0
        }
        return !1
      }
      addTag(WW, RW) {
        if (RW === gC) return;
        let MW = WW.tagViews;
        void 0 === MW && (MW = WW.tagViews = new Map);
        const wW = this._slot,
          CW = this._bit;
        for (let zR = RW; zR > 0; zR &= zR - 1) {
          const WW = zR & -zR;
          let RW = MW.get(WW);
          for (void 0 === RW && (RW = [], MW.set(WW, RW)); RW.length <= wW;) RW.push(0);
          RW[wW] |= CW
        }
      }
      removeTag(WW, RW) {
        if (RW === gC) return;
        const MW = WW.tagViews;
        if (void 0 === MW) return;
        const wW = this._slot,
          CW = ~this._bit;
        for (let zR = RW; zR > 0; zR &= zR - 1) {
          const WW = MW.get(zR & -zR);
          void 0 !== WW && wW < WW.length && (WW[wW] &= CW)
        }
      }
      removeAllTagsOnTree(WW) {
        const RW = WW.tagViews;
        if (void 0 === RW) return;
        const MW = this._slot,
          wW = ~this._bit;
        RW.forEach((WW => {
          MW < WW.length && (WW[MW] &= wW)
        }))
      }
      add(WW) {
        let RW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : gC,
          MW = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        return this._add(WW, RW, MW, !1)
      }
      _addImmediate(WW) {
        let RW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : gC;
        this._add(WW, RW, !0, !0)
      }
      _add(WW, RW, MW, wW) {
        const zR = WW?.[iR];
        if (!zR) return console.warn(`StateView#add(): expected a Schema instance or collection, received ${hw(WW)}`), !1;
        const AW = zR.parent;
        if (!AW && 0 !== WW[bR]) throw new Error(`Cannot add a detached instance to the StateView. Make sure to assign the "${zR.ref.constructor.name}" instance to the state before calling view.add()`);
        void 0 === this._root && void 0 !== zR.root && this._bindRoot(zR.root);
        const yR = AW?.[iR];
        if (!wW && yR?.isStreamCollection) return sR(AW, this.id, zR.parentIndex), !0;
        const NW = WW.constructor[Symbol.metadata],
          eW = this.isVisible(zR);
        if (!this.iterable || !MW || eW && -1 !== this.items.indexOf(WW) || this.items.push(WW), this.markVisible(zR), MW && AW && this.addParentOf(zR, RW), !wW && zR.isStreamCollection) return !0;
        if (RW === gC && zR.isNew) return this._markSubtreeVisible(zR, RW), !1;
        let BW = this.changes.get(WW[bR]);
        void 0 === BW && (BW = new Map, this.changes.set(WW[bR], BW));
        let tR = !1;
        const TW = zR.encDescriptor.tags;
        if (zR.forEachChild(((WW, MW) => {
            const wW = TW[MW];
            if (void 0 !== wW) {
              if (!(wW === gC || RW !== gC && 0 !== (wW & RW))) return
            }
            this.add(WW.ref, RW, !1) && (tR = !0)
          })), RW !== gC) {
          this.addTag(zR, RW);
          const WW = NW?.[kR];
          if (void 0 !== WW)
            for (let MW = RW; MW > 0; MW &= MW - 1) WW[MW & -MW]?.forEach((WW => {
              zR.getChange(WW) !== CW.DELETE && BW.set(WW, CW.ADD)
            }))
        }
        if ((RW === gC || !eW) && (!zR.isNew || tR))
          if (zR.isArray && "string" !== typeof zR.refTarget[YW]) zR.refTarget.items.length > 0 && (BW.set(-1, CW.ADD), tR = !0);
          else {
            const WW = zR.encDescriptor.tags;
            zR.forEachLive((MW => {
              const wW = WW[MW];
              (void 0 === wW || wW === gC || RW !== gC && 0 !== (wW & RW)) && (BW.set(MW, CW.ADD), tR = !0)
            }))
          } return tR
      }
      _markSubtreeVisible(WW, RW) {
        const MW = WW.encDescriptor.tags;
        WW.forEachChild(((WW, wW) => {
          const CW = MW[wW];
          if (void 0 !== CW) {
            if (!(CW === gC || RW !== gC && 0 !== (CW & RW))) return
          }
          WW.isNew ? (this.markVisible(WW), this._markSubtreeVisible(WW, RW)) : this._add(WW.ref, RW, !1, !1)
        }))
      }
      addParentOf(WW, RW) {
        const MW = WW.parent[iR],
          wW = WW.parentIndex;
        this.isVisible(MW) || this.markVisible(MW);
        const zR = MW.parent?.[iR];
        if (zR && this.addParentOf(MW, RW), MW.hasFilteredFields && MW.getChange(wW) !== CW.DELETE) {
          let zR = this.changes.get(MW.ref[bR]);
          void 0 === zR && (zR = new Map, this.changes.set(MW.ref[bR], zR));
          const AW = MW.encDescriptor.tags[wW];
          void 0 !== AW && AW !== gC && 0 !== (AW & RW) && this.addTag(MW, RW), zR.set(MW.isArray ? WW : wW, CW.ADD)
        }
      }
      _touchAncestorsOf(WW) {
        let RW = WW.parent?.[iR];
        if (void 0 === RW) return;
        const MW = [];
        for (; void 0 !== RW;) {
          if (RW.hasFilteredFields) {
            const WW = RW.ref[bR];
            if (this.changes.has(WW)) break;
            MW.push(RW)
          }
          RW = RW.parent?.[iR]
        }
        for (let wW = MW.length - 1; wW >= 0; wW--) this.changes.set(MW[wW].ref[bR], new Map)
      }
      remove(WW) {
        let RW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : gC,
          MW = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        const wW = WW?.[iR];
        if (!wW) return console.warn(`StateView#remove(): expected a Schema instance or collection, received ${hw(WW)}`), this;
        const zR = wW.parent?.[iR];
        if (zR?.isStreamCollection) return this.unmarkVisible(wW), this.iterable && !MW && sw(this.items, this.items.indexOf(WW)),
          function(WW, RW, MW, wW, zR) {
            const AW = WW._stream;
            if (void 0 === AW) return !1;
            const bR = AW.pendingByView.get(RW);
            if (bR?.has(wW)) return bR.delete(wW), !1;
            const yR = AW.sentByView.get(RW);
            if (yR?.has(wW)) {
              yR.delete(wW);
              let WW = zR.get(MW);
              return void 0 === WW && (WW = new Map, zR.set(MW, WW)), WW.set(wW, CW.DELETE), !0
            }
          }(wW.parent, this.id, wW.parent[bR], wW.parentIndex, this.changes), this._recursiveDeleteVisibleChangeTree(wW), this;
        if (wW.isStreamCollection) {
          this.unmarkVisible(wW), this.iterable && !MW && sw(this.items, this.items.indexOf(WW));
          const RW = wW.ref,
            zR = RW._stream;
          if (void 0 !== zR) {
            zR.pendingByView.get(this.id)?.clear();
            const WW = zR.sentByView.get(this.id);
            if (void 0 !== WW && WW.size > 0) {
              const MW = RW[bR];
              let wW = this.changes.get(MW);
              void 0 === wW && (wW = new Map, this.changes.set(MW, wW));
              for (const RW of WW) wW.set(RW, CW.DELETE);
              WW.clear()
            }
          }
          return this
        }
        this.unmarkVisible(wW), this.iterable && !MW && sw(this.items, this.items.indexOf(WW));
        const AW = wW.ref,
          yR = AW.constructor[Symbol.metadata],
          NW = AW[bR];
        this._touchAncestorsOf(wW);
        let eW = this.changes.get(NW);
        if (void 0 === eW && (eW = new Map, this.changes.set(NW, eW)), RW === gC) {
          const WW = wW.parent;
          if (WW && !LR.isValidInstance(WW) && wW.isFiltered) {
            const RW = zR.isArray ? wW : wW.parentIndex,
              MW = WW[bR];
            let AW = this.changes.get(MW);
            void 0 === AW ? (AW = new Map, this.changes.set(MW, AW)) : AW.get(RW) === CW.ADD && this._dropPendingEntries(wW), AW.set(RW, CW.DELETE), this._recursiveDeleteVisibleChangeTree(wW)
          } else yR?.[jR]?.forEach((WW => this._removeViewField(wW, eW, WW)))
        } else {
          const WW = yR?.[kR];
          if (void 0 !== WW)
            for (let MW = RW; MW > 0; MW &= MW - 1) WW[MW & -MW]?.forEach((WW => this._removeViewField(wW, eW, WW)))
        }
        return void 0 === RW ? this.removeAllTagsOnTree(wW) : this.removeTag(wW, RW), this
      }
      has(WW) {
        return this.isVisible(WW[iR])
      }
      hasTag(WW) {
        let RW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : gC;
        return this.hasTagOnTree(WW[iR], RW)
      }
      subscribe(WW, RW) {
        const MW = WW?.[iR];
        if (!MW) return console.warn(`StateView#subscribe(): expected a Schema collection, received ${hw(WW)}`), this;
        if (void 0 === this._root && void 0 !== MW.root && this._bindRoot(MW.root), void 0 !== RW)
          if (MW.isStreamCollection) {
            const MW = cM(WW);
            null === RW ? MW.priorityByView?.delete(this.id) : (MW.priorityByView ??= new Map).set(this.id, RW)
          } else {
            const RW = WW?.constructor?.name ?? "collection",
              wW = MW.parent;
            if (void 0 === wW) console.warn(`StateView#subscribe(): \`priority\` ignored \u2014 this ${RW} is not attached to a state yet, so it cannot be identified as a stream. Subscribe after assigning it to the state.`);
            else {
              const WW = wW?.constructor?.[Symbol.metadata]?.[MW.parentIndex]?.name,
                CW = WW ? `${wW.constructor.name}#${WW}` : RW;
              console.warn(`StateView#subscribe(): \`priority\` ignored \u2014 ${CW} is a ${RW}, not a streaming collection. Declare the field with .stream() (e.g. t.map(X).stream()) or use t.stream(X) to enable priority batching.`)
            }
          } if (this.isSubscribed(MW)) return this;
        const wW = void 0 !== MW.parent && !this.isVisible(MW);
        if (wW ? (this.addParentOf(MW, gC), this._add(WW, gC, !1, !1)) : this.markVisible(MW), this._setSubscribed(MW), MW.isStreamCollection) {
          const RW = WW;
          MW.forEachChild(((WW, MW) => {
            sR(RW, this.id, MW)
          }))
        } else wW || MW.forEachChild((WW => {
          this.markVisible(WW)
        }));
        return this
      }
      unsubscribe(WW) {
        const RW = WW?.[iR];
        if (!RW) return console.warn(`StateView#unsubscribe(): expected a Schema collection, received ${hw(WW)}`), this;
        if (!this.isSubscribed(RW)) return this;
        this._clearSubscribed(RW);
        const MW = RW.ref[bR];
        if (RW.isStreamCollection) {
          const RW = WW._stream;
          if (void 0 !== RW) {
            RW.pendingByView.get(this.id)?.clear();
            const WW = RW.sentByView.get(this.id);
            if (void 0 !== WW && WW.size > 0) {
              let RW = this.changes.get(MW);
              void 0 === RW && (RW = new Map, this.changes.set(MW, RW));
              for (const MW of WW) RW.set(MW, CW.DELETE);
              WW.clear()
            }
          }
        } else {
          const WW = RW.isArray;
          let wW = this.changes.get(MW);
          RW.forEachChild(((RW, zR) => {
            void 0 === wW && (wW = new Map, this.changes.set(MW, wW)), wW.set(WW ? RW : zR, CW.DELETE), this.unmarkVisible(RW)
          }))
        }
        return this.unmarkVisible(RW), this
      }
      clear() {
        if (!this.iterable) throw new Error("StateView#clear() is only available for iterable StateView's. Use StateView(iterable: true) constructor.");
        for (let WW = 0, RW = this.items.length; WW < RW; WW++) this.remove(this.items[WW], gC, !0);
        this.items.length = 0
      }
      isChangeTreeVisible(WW) {
        let RW = this.isVisible(WW);
        if (!RW && WW.isVisibilitySharedWithParent)
          if (this.isVisible(WW.parent[iR])) this.markVisible(WW), RW = !0;
          else
            for (let MW = WW.extraParents; void 0 !== MW; MW = MW.next) {
              const wW = MW.ref[iR];
              if (wW.isFiltered && this.isVisible(wW)) {
                this.markVisible(WW), RW = !0;
                break
              }
            }
        return RW
      }
      _recursiveDeleteVisibleChangeTree(WW) {
        WW.forEachChild((WW => {
          this.unmarkVisible(WW), this._recursiveDeleteVisibleChangeTree(WW)
        }))
      }
      _dropPendingEntries(WW) {
        this.changes.delete(WW.ref[bR]), WW.forEachChild((WW => this._dropPendingEntries(WW)))
      }
      _removeViewField(WW, RW, MW) {
        const wW = RW.get(MW) === CW.ADD;
        RW.set(MW, CW.DELETE);
        const zR = WW.ref[WW.encDescriptor.names[MW]],
          AW = zR?.[iR];
        AW && (this.unmarkVisible(AW), this._recursiveDeleteVisibleChangeTree(AW), wW && this._dropPendingEntries(AW))
      }
    }

    function Ew(WW) {
      WW.structSwitchEmitted || (WW.shouldEmitSwitch && (WW.buffer[WW.it.offset++] = 255, RR.number(WW.buffer, WW.ref[bR], WW.it)), WW.structSwitchEmitted = !0)
    }

    function Vw(WW, RW) {
      vC(WW, RW, CW.ADD)
    }

    function mC(WW, RW) {
      if (RW._fullSyncGen === WW.gen) return;
      RW._fullSyncGen = WW.gen;
      if (!WW.hasView || WW.view.isChangeTreeVisible(RW)) {
        const MW = RW.encDescriptor;
        WW.changeTree = RW, WW.ref = RW.ref, WW.encoder = MW.encoder, WW.filter = MW.filter, WW.metadata = MW.metadata, WW.treeIsFiltered = RW.isFiltered, WW.isSchema = MW.isSchema, WW.filterBitmask = MW.filterBitmask, WW.tags = MW.tags, WW.structSwitchEmitted = !1, WW.shouldEmitSwitch = WW.hasView || WW.it.offset > WW.initialOffset || RW !== WW.rootChangeTree, RW.isArray && RW.collDirty.size > 0 && (RW.flags |= 512), CM(RW, WW, Vw)
      }
      JM(RW, WW, xC)
    }

    function xC(WW, RW, MW) {
      mC(WW, RW)
    }

    function vC(WW, RW, MW) {
      if (RW < 0) {
        if (WW.treeIsFiltered !== WW.emitFiltered) return;
        return Ew(WW), void(WW.buffer[WW.it.offset++] = 255 & Math.abs(RW))
      }
      if ((WW.isSchema ? WW.treeIsFiltered || (RW < 32 ? 0 !== (WW.filterBitmask & 1 << RW) : void 0 !== WW.tags[RW]) : WW.treeIsFiltered) !== WW.emitFiltered) return;
      const wW = WW.isEncodeAll ? CW.ADD : MW;
      void 0 !== wW && (void 0 === WW.filter || WW.filter(WW.ref, RW, WW.view)) && (Ew(WW), WW.encoder(WW.self, WW.buffer, WW.changeTree, RW, wW, WW.it, WW.isEncodeAll, WW.hasView, WW.metadata))
    }

    function Kw(WW, RW) {
      const MW = new Uint8Array(WW.length + RW.length);
      return MW.set(WW, 0), MW.set(RW, WW.length), MW
    }
    class uw {
      static BUFFER_SIZE = 16384;
      sharedBuffer = new Uint8Array(uw.BUFFER_SIZE);
      context;
      state;
      root;
      constructor(WW, RW) {
        this.context = xM.cache(WW.constructor), this.root = RW ?? new aC(this.context), this.setState(WW)
      }
      setState(WW) {
        this.state = WW, this.state[iR].setRoot(this.root)
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
        let WW = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
            offset: 0
          },
          RW = arguments.length > 1 ? arguments[1] : void 0,
          MW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : this.sharedBuffer,
          wW = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : WW.offset;
        return this._encodeChannel(WW, RW, MW, wW, !1)
      }
      encodeUnreliable() {
        let WW = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
            offset: 0
          },
          RW = arguments.length > 1 ? arguments[1] : void 0,
          MW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : this.sharedBuffer,
          wW = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : WW.offset;
        return this._encodeChannel(WW, RW, MW, wW, !0)
      }
      _encodeChannel(WW, RW, MW, wW, CW) {
        this.root.pendingFilterRefresh.length > 0 && AM(this.root);
        const zR = void 0 !== RW,
          AW = this.state[iR],
          bR = this._encodeCtx;
        bR.self = this, bR.buffer = MW, bR.it = WW, bR.view = RW, bR.isEncodeAll = !1, bR.hasView = zR, bR.emitFiltered = zR;
        let yR = CW ? this.root.unreliableChanges : this.root.changes;
        for (; yR = yR.next;) {
          const MW = yR.changeTree;
          if (zR && !RW.isChangeTreeVisible(MW)) continue;
          const NW = CW ? MW.unreliableRecorder : MW;
          if (!NW || !NW.has()) continue;
          const eW = MW.encDescriptor;
          bR.changeTree = MW, bR.ref = MW.ref, bR.encoder = eW.encoder, bR.filter = eW.filter, bR.metadata = eW.metadata, bR.treeIsFiltered = MW.isFiltered, bR.isSchema = eW.isSchema, bR.filterBitmask = eW.filterBitmask, bR.tags = eW.tags, bR.structSwitchEmitted = !1, bR.isRootTree = MW === AW, bR.shouldEmitSwitch = zR || WW.offset > wW || !bR.isRootTree, NW.forEachWithCtx(bR, vC)
        }
        return CW || zR || !this._isStreamBroadcastMode || this._emitStreamBroadcast(MW, WW), WW.offset > MW.byteLength ? (MW = this._resizeBuffer(MW, WW.offset), WW.offset = wW, this._encodeChannel(WW, RW, MW, wW, CW)) : MW.subarray(0, WW.offset)
      }
      encodeFullSync(WW, RW, MW, wW) {
        let CW = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : WW.offset;
        this.root.pendingFilterRefresh.length > 0 && AM(this.root);
        const zR = void 0 !== wW,
          AW = this.state[iR],
          bR = this._encodeCtx;
        return bR.self = this, bR.buffer = RW, bR.it = WW, bR.view = wW, bR.isEncodeAll = !0, bR.hasView = zR, bR.emitFiltered = MW, bR.gen = ++this._fullSyncGen, bR.initialOffset = CW, bR.rootChangeTree = AW, mC(bR, AW), WW.offset > RW.byteLength ? (RW = this._resizeBuffer(RW, WW.offset), WW.offset = CW, this.encodeFullSync(WW, RW, MW, wW, CW)) : RW.subarray(0, WW.offset)
      }
      _resizeBuffer(WW, RW) {
        const MW = Math.ceil(RW / uw.BUFFER_SIZE) * uw.BUFFER_SIZE,
          wW = new Uint8Array(MW);
        return wW.set(WW), WW === this.sharedBuffer && (this.sharedBuffer = wW), wW
      }
      encodeAll() {
        let WW = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
            offset: 0
          },
          RW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.sharedBuffer;
        return this.encodeFullSync(WW, RW, !1)
      }
      encodeAllView(WW, RW, MW) {
        let wW = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : this.sharedBuffer;
        const CW = MW.offset;
        return wW = this.encodeFullSync(MW, wW, !0, WW, CW), Kw(wW.subarray(0, RW), wW.subarray(CW, MW.offset))
      }
      ensureCapacity(WW, RW) {
        if (RW + uw.BUFFER_SIZE <= WW.byteLength) return WW;
        const MW = Math.ceil((RW + uw.BUFFER_SIZE) / uw.BUFFER_SIZE) * uw.BUFFER_SIZE,
          wW = new Uint8Array(MW);
        return wW.set(WW.subarray(0, RW)), WW === this.sharedBuffer && (this.sharedBuffer = wW), wW
      }
      encodeView(WW, RW, MW) {
        let wW = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : this.sharedBuffer,
          zR = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4];
        const AW = MW.offset;
        this._emitStreamPriority(WW);
        for (const yR of WW.changes.keys()) {
          const RW = WW.changes.get(yR),
            zR = this.root.changeTrees[yR];
          if (void 0 === zR) {
            WW.changes.delete(yR);
            continue
          }
          if (0 === RW.size) continue;
          const AW = zR.encDescriptor,
            NW = AW.encoder,
            eW = AW.metadata,
            BW = zR.ref,
            TW = zR.refTarget;
          wW = this.ensureCapacity(wW, MW.offset), wW[MW.offset++] = 255, RR.number(wW, BW[bR], MW);
          for (const [yR, gR] of RW) {
            let RW;
            if (-1 === yR) {
              const WW = TW.tmpItems,
                RW = TW.deletedIndexes;
              for (let AW = 0; AW < WW.length; AW++) void 0 !== WW[AW] && !0 !== RW[AW] && NW(this, wW, zR, AW, CW.ADD, MW, !1, !0, eW);
              continue
            }
            if ("number" === typeof yR) RW = yR;
            else {
              const MW = yR.indexInParent(BW);
              if (void 0 === MW) continue;
              if (RW = MW, gR === CW.ADD && zR.getChange(RW) === CW.DELETE) {
                WW.changes.delete(yR.ref[bR]);
                continue
              }
            }
            NW(this, wW, zR, RW, void 0 !== TW[tR](RW) && gR || CW.DELETE, MW, !1, !0, eW)
          }
        }
        return WW.changes.clear(), wW = this.encode(MW, WW, wW), zR ? Kw(wW.subarray(0, RW), wW.subarray(AW, MW.offset)) : wW.subarray(AW, MW.offset)
      }
      encodeUnreliableView(WW, RW, MW) {
        let wW = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : this.sharedBuffer;
        const CW = MW.offset;
        return wW = this.encodeUnreliable(MW, WW, wW, CW), Kw(wW.subarray(0, RW), wW.subarray(CW, MW.offset))
      }
      _emitStreamBroadcast(WW, RW) {
        const MW = this.root.streamTrees;
        for (const wW of MW) {
          const MW = wW,
            zR = MW[iR],
            AW = MW[bR];
          if (void 0 === AW) continue;
          const yR = MW._stream,
            NW = yR.broadcastDeletes,
            eW = yR.broadcastPending,
            BW = yR.sentBroadcast,
            TW = NW.size > 0,
            gR = eW.size > 0,
            YW = zR.encDescriptor,
            JW = YW.encoder,
            PW = YW.metadata;
          if (TW || gR) {
            if (WW[RW.offset++] = 255, RR.number(WW, AW, RW), TW) {
              for (const MW of NW) JW(this, WW, zR, MW, CW.DELETE, RW, !1, !1, PW);
              NW.clear()
            }
            const wW = yR.maxPerTick,
              gR = [];
            let YW = 0;
            const IW = [];
            for (const AW of eW) {
              if (YW >= wW) break;
              const bR = MW[tR](AW);
              void 0 !== bR ? (JW(this, WW, zR, AW, CW.ADD, RW, !1, !1, PW), BW.add(AW), gR.push(bR), IW.push(AW), YW++) : IW.push(AW)
            }
            for (const WW of IW) eW.delete(WW);
            for (const MW of gR) {
              const wW = MW[iR];
              if (void 0 === wW) continue;
              const zR = MW[bR];
              if (void 0 === zR) continue;
              WW[RW.offset++] = 255, RR.number(WW, zR, RW);
              const AW = wW.encDescriptor,
                yR = AW.encoder,
                NW = AW.metadata;
              wW.forEachLive((MW => {
                LR.hasUnreliableAtIndex(NW, MW) || yR(this, WW, wW, MW, CW.ADD, RW, !1, !1, NW)
              }))
            }
          }
          for (const wW of BW) {
            const CW = MW[tR](wW);
            if (void 0 === CW) continue;
            const zR = CW[iR];
            if (void 0 === zR || !zR.has()) continue;
            const AW = CW[bR];
            if (void 0 === AW) continue;
            WW[RW.offset++] = 255, RR.number(WW, AW, RW);
            const yR = zR.encDescriptor,
              NW = yR.encoder,
              eW = yR.metadata;
            zR.forEach(((MW, wW) => {
              MW < 0 || LR.hasUnreliableAtIndex(eW, MW) || NW(this, WW, zR, MW, wW, RW, !1, !1, eW)
            }))
          }
        }
      }
      _emitStreamPriority(WW) {
        const RW = this.root.streamTrees;
        if (0 === RW.size) return;
        const MW = WW.id;
        for (const wW of RW) {
          const RW = wW,
            zR = RW._stream,
            AW = zR.pendingByView.get(MW);
          if (void 0 === AW || 0 === AW.size) continue;
          const yR = zR.priorityByView?.get(MW),
            NW = void 0 !== yR,
            eW = zR.priority,
            BW = zR.maxPerTick,
            TW = [],
            gR = [];
          if (NW || void 0 !== eW) {
            const MW = [],
              wW = [];
            let CW = 0;
            for (const zR of AW) {
              const AW = RW[tR](zR);
              if (void 0 === AW) {
                gR.push(zR);
                continue
              }
              const bR = NW ? yR(AW) : eW(WW, AW);
              if (CW < BW) {
                let WW = CW++;
                for (; WW > 0 && wW[WW - 1] < bR;) wW[WW] = wW[WW - 1], MW[WW] = MW[WW - 1], WW--;
                wW[WW] = bR, MW[WW] = zR
              } else if (bR > wW[BW - 1]) {
                let WW = BW - 1;
                for (; WW > 0 && wW[WW - 1] < bR;) wW[WW] = wW[WW - 1], MW[WW] = MW[WW - 1], WW--;
                wW[WW] = bR, MW[WW] = zR
              }
            }
            for (let WW = 0; WW < CW; WW++) TW.push(MW[WW])
          } else
            for (const WW of AW) {
              if (TW.length >= BW) break;
              TW.push(WW)
            }
          for (const WW of gR) AW.delete(WW);
          const YW = TW.length;
          let JW = zR.sentByView.get(MW);
          void 0 === JW && (JW = new Set, zR.sentByView.set(MW, JW));
          for (let MW = 0; MW < YW; MW++) {
            const wW = TW[MW],
              zR = RW[tR](wW);
            if (void 0 === zR) {
              AW.delete(wW);
              continue
            }
            WW._addImmediate(zR);
            const yR = zR[iR];
            if (void 0 !== yR) {
              const RW = zR[bR];
              let MW = WW.changes.get(RW);
              void 0 === MW && (MW = new Map, WW.changes.set(RW, MW));
              const wW = yR.metadata;
              yR.forEachLive((WW => {
                LR.hasUnreliableAtIndex(wW, WW) || MW.set(WW, CW.ADD)
              }))
            }
            AW.delete(wW), JW.add(wW)
          }
        }
      }
      discardChanges() {
        const WW = this.root.changes;
        let RW = WW.next;
        const MW = this.root;
        for (; RW;) {
          const WW = RW.next;
          RW.changeTree.endEncode(), MW.releaseNode(RW), RW = WW
        }
        WW.next = void 0, WW.tail = void 0
      }
      discardUnreliableChanges() {
        const WW = this.root.unreliableChanges;
        let RW = WW.next;
        const MW = this.root;
        for (; RW;) {
          const WW = RW.next;
          RW.changeTree.endEncodeUnreliable(), MW.releaseNode(RW), RW = WW
        }
        WW.next = void 0, WW.tail = void 0
      }
      tryEncodeTypeId(WW, RW, MW, wW) {
        const CW = this.context.getTypeId(RW),
          zR = this.context.getTypeId(MW);
        void 0 !== zR ? CW !== zR && (WW[wW.offset++] = 213, RR.number(WW, zR, wW)) : console.warn(`@colyseus/schema WARNING: Class "${MW.name}" is not registered on TypeRegistry - Please either tag the class with @entity or define a @type() field.`)
      }
      get hasChanges() {
        return void 0 !== this.root.changes.next || this._hasStreamBacklog()
      }
      get _isStreamBroadcastMode() {
        return 0 === this.root.activeViews.size && this.root.streamTrees.size > 0
      }
      _hasStreamBacklog() {
        const WW = this.root;
        if (0 === WW.streamTrees.size) return !1;
        const RW = 0 === WW.activeViews.size;
        for (const MW of WW.streamTrees)
          if (RW ? aM(MW) : kM(MW, WW)) return !0;
        return !1
      }
      get hasUnreliableChanges() {
        return void 0 !== this.root.unreliableChanges.next
      }
    }
    class Ow extends Error {
      constructor(WW) {
        super(WW), this.name = "DecodingWarning"
      }
    }
    const nw = {
      value: 0,
      enumerable: !1,
      writable: !0
    };
    class Gw {
      refs = new Map;
      refCount = {};
      deletedRefs = new Set;
      callbacks = {};
      nextUniqueId = 0;
      getNextUniqueId() {
        return this.nextUniqueId++
      }
      addRef(WW, RW) {
        let MW = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        this.refs.set(WW, RW), void 0 === RW[bR] ? (nw.value = WW, Object.defineProperty(RW, bR, nw)) : RW[bR] !== WW && (RW[bR] = WW), MW && (this.refCount[WW] = (this.refCount[WW] || 0) + 1), this.deletedRefs.has(WW) && this.deletedRefs.delete(WW)
      }
      removeRef(WW) {
        const RW = this.refCount[WW];
        if (void 0 !== RW)
          if (0 !== RW)(this.refCount[WW] = RW - 1) <= 0 && this.deletedRefs.add(WW);
          else try {
            const RW = this.refs.get(WW);
            throw new Ow(`trying to remove refId '${WW}' with 0 refCount (${RW.constructor.name}: ${JSON.stringify(RW)})`)
          } catch (zz) {
            console.warn(zz)
          } else try {
            throw new Ow("trying to remove refId that doesn't exist: " + WW)
          } catch (zz) {
            console.warn(zz)
          }
      }
      clearRefs() {
        this.refs.clear(), this.deletedRefs.clear(), this.callbacks = {}, this.refCount = {}
      }
      garbageCollectDeletedRefs() {
        this.deletedRefs.forEach((WW => {
          if (this.refCount[WW] > 0) return;
          const RW = this.refs.get(WW),
            MW = RW.constructor[Symbol.metadata];
          if (null != MW)
            for (const wW in MW) {
              const WW = RW[MW[wW].name];
              if ("object" === typeof WW && WW) {
                const RW = WW[bR];
                void 0 === RW || this.deletedRefs.has(RW) || this.removeRef(RW)
              }
            } else "function" === typeof RW[YW] && Array.from(RW.values()).forEach((WW => {
              const RW = WW[bR];
              void 0 === RW || this.deletedRefs.has(RW) || this.removeRef(RW)
            }));
          this.refs.delete(WW), delete this.refCount[WW], delete this.callbacks[WW]
        })), this.deletedRefs.clear()
      }
      addCallback(WW, RW, MW) {
        if (void 0 === WW) {
          const WW = "number" === typeof RW ? CW[RW] : RW;
          throw new Error(`Can't addCallback on '${WW}' (refId is undefined)`)
        }
        return this.callbacks[WW] || (this.callbacks[WW] = {}), this.callbacks[WW][RW] || (this.callbacks[WW][RW] = []), this.callbacks[WW][RW].push(MW), () => this.removeCallback(WW, RW, MW)
      }
      removeCallback(WW, RW, MW) {
        const wW = this.callbacks?.[WW]?.[RW]?.indexOf(MW);
        void 0 !== wW && -1 !== wW && sw(this.callbacks[WW][RW], wW)
      }
    }
    class Lw {
      context;
      state;
      root;
      currentRefId = 0;
      IRW;
      resyncVisited = null;
      resyncDamaged = !1;
      constructor(WW, RW) {
        this.setState(WW), this.context = RW || new xM(WW.constructor)
      }
      setState(WW) {
        this.state = WW, this.root = new Gw, this.root.addRef(0, WW)
      }
      decode(WW) {
        let RW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
            offset: 0
          },
          MW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : this.state;
        const CW = void 0 !== this.IRW ? [] : null,
          zR = this.root,
          AW = WW.byteLength;
        let bR = MW.constructor[eW];
        for (this.currentRefId = 0; RW.offset < AW;) {
          if (WW[RW.offset] == wW) {
            RW.offset++, MW[oW]?.();
            const wW = IR.number(WW, RW),
              CW = zR.refs.get(wW);
            CW ? (MW = CW, bR = MW.constructor[eW], this.currentRefId = wW) : (console.error(`"refId" not found: ${wW}`, {
              previousRef: MW,
              previousRefId: this.currentRefId
            }), console.warn("Please report this issue to the developers."), this.skipCurrentStructure(WW, RW, AW));
            continue
          } - 1 !== bR(this, WW, RW, MW, CW) || (console.warn("@colyseus/schema: definition mismatch"), this.skipCurrentStructure(WW, RW, AW))
        }
        return MW[oW]?.(), null !== this.resyncVisited && function(WW, RW) {
          WW.resyncDamaged ? console.warn("@colyseus/schema: resync sweep skipped \u2014 parts of the payload could not be decoded. Stale entries may persist until the next resync.") : xw(WW, WW.state, new Set, RW)
        }(this, CW), null !== CW && this.IRW?.(CW), zR.garbageCollectDeletedRefs(), CW
      }
      decodeResync(WW) {
        let RW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
          offset: 0
        };
        this.resyncVisited = new Map, this.resyncDamaged = !1;
        try {
          return this.decode(WW, RW)
        } finally {
          this.resyncVisited = null
        }
      }
      skipCurrentStructure(WW, RW, MW) {
        null !== this.resyncVisited && (this.resyncDamaged = !0);
        const CW = {
          offset: RW.offset
        };
        for (; RW.offset < MW && (WW[RW.offset] !== wW || (CW.offset = RW.offset + 1, !this.root.refs.has(IR.number(WW, CW))));) RW.offset++
      }
      getInstanceType(WW, RW, MW) {
        let wW;
        if (213 === WW[RW.offset]) {
          RW.offset++;
          const MW = IR.number(WW, RW);
          wW = this.context.get(MW)
        }
        return wW || MW
      }
      createInstanceOfType(WW) {
        return WW.initializeForDecoder()
      }
      removeChildRefs(WW, RW) {
        const MW = "string" !== typeof WW[YW],
          wW = WW[bR];
        WW.forEach(((zR, AW) => {
          RW?.push({
            ref: WW,
            refId: wW,
            op: CW.DELETE,
            field: AW,
            value: void 0,
            previousValue: zR
          }), MW && this.root.removeRef(zR[bR])
        }))
      }
    }
    const Hw = cC({
        min: Tw.float64(),
        max: Tw.float64(),
        bits: Tw.uint8(),
        mode: Tw.uint8()
      }, "QuantizedDescriptor"),
      Dw = cC({
        name: Tw.string(),
        type: Tw.string(),
        referencedType: Tw.number(),
        childPrimitive: Tw.string(),
        quantized: Tw.ref(Hw).optional()
      }, "ReflectionField"),
      qC = cC({
        id: Tw.number(),
        extendsId: Tw.number(),
        fields: Tw.array(Dw)
      }, "ReflectionType"),
      Zw = cC({
        types: Tw.array(qC),
        rootType: Tw.number()
      }, "Reflection");

    function Sw(WW) {
      const RW = WW.root,
        MW = RW.callbacks,
        wW = new WeakMap;
      let zR;

      function AW(WW, MW) {
        let NW = MW.instance?.constructor[Symbol.metadata] || WW,
          eW = MW.instance && "function" === typeof MW.instance.forEach || WW && !jC.is(WW);
        if (NW && !eW) {
          const WW = function(WW, CW, AW, yR) {
            return yR && void 0 !== MW.instance[CW] && !wW.has(zR) && AW(MW.instance[CW], void 0), RW.addCallback(WW[bR], CW, AW)
          };
          return new Proxy({
            listen: function(RW, CW) {
              let AW = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
              if (MW.instance) return WW(MW.instance, RW, CW, AW);
              {
                let bR = () => {};
                return MW.onInstanceAvailable(((MW, yR) => {
                  bR = WW(MW, RW, CW, AW && yR && !wW.has(zR))
                })), () => bR()
              }
            },
            onChange: function(WW) {
              return RW.addCallback(MW.instance[bR], CW.REPLACE, WW)
            },
            bindTo: function(WW, wW) {
              return wW || (wW = Object.keys(NW).map((WW => NW[WW].name))), RW.addCallback(MW.instance[bR], CW.REPLACE, (() => {
                wW.forEach((RW => WW[RW] = MW.instance[RW]))
              }))
            }
          }, {
            get(WW, RW) {
              const wW = NW[NW[RW]];
              if (wW) {
                const WW = MW.instance?.[RW],
                  CW = wW => {
                    const CW = yR(MW.instance).listen(RW, ((WW, RW) => {
                      wW(WW, !1), CW?.()
                    }), !1);
                    void 0 !== WW?.[bR] && wW(WW, !0)
                  };
                return AW(wW.type, {
                  instance: void 0 !== WW?.[bR] && WW,
                  parentInstance: MW.instance,
                  onInstanceAvailable: CW
                })
              }
              return WW[RW]
            },
            has: (WW, RW) => void 0 !== NW[RW],
            set(WW, RW, MW) {
              throw new Error("not allowed")
            },
            deleteProperty(WW, RW) {
              throw new Error("not allowed")
            }
          })
        } {
          const WW = function(WW, MW, AW) {
              return AW && WW.forEach(((WW, RW) => MW(WW, RW))), RW.addCallback(WW[bR], CW.ADD, ((WW, RW) => {
                wW.set(MW, !0), zR = MW, MW(WW, RW), wW.delete(MW), zR = void 0
              }))
            },
            AW = function(WW, MW) {
              return RW.addCallback(WW[bR], CW.DELETE, MW)
            },
            yR = function(WW, MW) {
              return RW.addCallback(WW[bR], CW.REPLACE, MW)
            };
          return new Proxy({
            Tk: function(RW) {
              let CW = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
              if (MW.instance) return WW(MW.instance, RW, CW && !wW.has(zR));
              if (MW.onInstanceAvailable) {
                let AW = () => {};
                return MW.onInstanceAvailable(((MW, bR) => {
                  AW = WW(MW, RW, CW && bR && !wW.has(zR))
                })), () => AW()
              }
            },
            NRW: function(WW) {
              if (MW.instance) return AW(MW.instance, WW);
              if (MW.onInstanceAvailable) {
                let RW = () => {};
                return MW.onInstanceAvailable((MW => {
                  RW = AW(MW, WW)
                })), () => RW()
              }
            },
            onChange: function(WW) {
              if (MW.instance) return yR(MW.instance, WW);
              if (MW.onInstanceAvailable) {
                let RW = () => {};
                return MW.onInstanceAvailable((MW => {
                  RW = yR(MW, WW)
                })), () => RW()
              }
            }
          }, {
            get(WW, RW) {
              if (!WW[RW]) throw new Error(`Can't access '${RW}' through callback proxy. access the instance directly.`);
              return WW[RW]
            },
            has: (WW, RW) => void 0 !== WW[RW],
            set(WW, RW, MW) {
              throw new Error("not allowed")
            },
            deleteProperty(WW, RW) {
              throw new Error("not allowed")
            }
          })
        }
      }

      function yR(WW) {
        return AW(void 0, {
          instance: WW
        })
      }
      return WW.IRW = function(WW) {
        const RW = new Set;
        for (let wW = 0, zR = WW.length; wW < zR; wW++) {
          const zR = WW[wW],
            AW = zR.refId,
            yR = zR.ref,
            NW = MW[AW];
          if (NW) {
            if ((zR.op & CW.DELETE) === CW.DELETE && jC.isSchema(zR.previousValue)) {
              const WW = MW[zR.previousValue[bR]]?.[CW.DELETE];
              for (let RW = WW?.length - 1; RW >= 0; RW--) WW[RW]()
            }
            if (jC.isSchema(yR)) {
              if (!RW.has(AW)) {
                const WW = NW?.[CW.REPLACE];
                for (let RW = WW?.length - 1; RW >= 0; RW--) WW[RW]()
              }
              if (NW.hasOwnProperty(zR.field)) {
                const WW = NW[zR.field];
                for (let RW = WW?.length - 1; RW >= 0; RW--) WW[RW](zR.value, zR.previousValue)
              }
            } else {
              if ((zR.op & CW.DELETE) === CW.DELETE) {
                if (void 0 !== zR.previousValue) {
                  const WW = NW[CW.DELETE];
                  for (let RW = WW?.length - 1; RW >= 0; RW--) WW[RW](zR.previousValue, zR.dynamicIndex ?? zR.field)
                }
                if ((zR.op & CW.ADD) === CW.ADD) {
                  const WW = NW[CW.ADD];
                  for (let RW = WW?.length - 1; RW >= 0; RW--) WW[RW](zR.value, zR.dynamicIndex ?? zR.field)
                }
              } else if ((zR.op & CW.ADD) === CW.ADD && zR.previousValue !== zR.value) {
                const WW = NW[CW.ADD];
                for (let RW = WW?.length - 1; RW >= 0; RW--) WW[RW](zR.value, zR.dynamicIndex ?? zR.field)
              }
              if (zR.value !== zR.previousValue && (void 0 !== zR.value || void 0 !== zR.previousValue)) {
                const WW = NW[CW.REPLACE];
                for (let RW = WW?.length - 1; RW >= 0; RW--) WW[RW](zR.value, zR.dynamicIndex ?? zR.field)
              }
            }
            RW.add(AW)
          }
        }
      }, yR
    }

    function WC(WW, RW) {
      WW.IRW = RW
    }
    Zw.encode = function(WW) {
      let RW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
        offset: 0
      };
      const MW = WW.context,
        wW = new Zw,
        CW = new uw(wW),
        zR = MW.schemas.get(WW.state.constructor);
      zR > 0 && (wW.rootType = zR);
      const AW = new Set,
        bR = {},
        yR = WW => {
          if (void 0 === WW.extendsId || AW.has(WW.extendsId)) {
            AW.add(WW.id), wW.types.push(WW);
            const RW = bR[WW.id];
            void 0 !== RW && (delete bR[WW.id], RW.forEach((WW => yR(WW))))
          } else void 0 === bR[WW.extendsId] && (bR[WW.extendsId] = []), bR[WW.extendsId].push(WW)
        };
      MW.schemas.forEach(((WW, RW) => {
        const wW = new qC;
        wW.id = Number(WW);
        const CW = Object.getPrototypeOf(RW);
        CW !== jC && (wW.extendsId = MW.schemas.get(CW));
        const zR = RW[Symbol.metadata];
        if (zR !== CW[Symbol.metadata]) {
          const WW = zR[cR] ?? -1;
          for (let RW = 0; RW <= WW; RW++) {
            const WW = zR[RW];
            if (void 0 === WW) continue;
            const CW = WW.name;
            if (!Object.prototype.hasOwnProperty.call(zR, CW)) continue;
            const AW = new Dw;
            let bR;
            if (AW.name = CW, "string" === typeof WW.type) bR = WW.type;
            else if (UR(WW.type)) {
              const RW = WW.type.quantized;
              bR = "quantized";
              const MW = new Hw;
              MW.min = RW.min, MW.max = RW.max, MW.bits = RW.bits, MW.mode = RW.wrap ? 1 : 0, AW.quantized = MW
            } else {
              let RW;
              jC.is(WW.type) ? (bR = "ref", RW = WW.type) : (bR = Object.keys(WW.type)[0], "string" === typeof WW.type[bR] ? AW.childPrimitive = WW.type[bR] : RW = WW.type[bR]), AW.referencedType = RW ? MW.getTypeId(RW) : -1
            }
            AW.type = bR, wW.fields.push(AW)
          }
        }
        yR(wW)
      }));
      for (const NW in bR) bR[NW].forEach((WW => wW.types.push(WW)));
      return CW.encodeAll(RW).slice(0, RW.offset)
    }, Zw.decode = function(WW, RW) {
      const MW = new Zw;
      new Lw(MW).decode(WW, RW);
      const wW = new xM;
      MW.types.forEach((WW => {
        const RW = wW.get(WW.extendsId) ?? jC,
          MW = class extends RW {};
        xM.register(MW), wW.add(MW, WW.id)
      }), {});
      MW.types.forEach((WW => {
        const RW = wW.get(WW.id),
          CW = LR.initialize(RW),
          zR = [];
        let AW = WW;
        do {
          zR.push(AW), AW = MW.types.find((WW => WW.id === AW.extendsId))
        } while (AW);
        let bR = 0;
        zR.reverse().forEach((WW => {
          ((WW, RW, MW) => {
            RW.fields.forEach(((RW, CW) => {
              const zR = MW + CW;
              if (void 0 !== RW.quantized) {
                const MW = RW.quantized;
                LR.addField(WW, zR, RW.name, {
                  quantized: hR({
                    min: MW.min,
                    max: MW.max,
                    bits: MW.bits,
                    mode: 1 === MW.mode ? "wrap" : "clamp"
                  })
                })
              } else if (void 0 !== RW.referencedType) {
                const MW = RW.type,
                  CW = wW.get(RW.referencedType) ?? RW.childPrimitive;
                "ref" === MW ? LR.addField(WW, zR, RW.name, CW) : LR.addField(WW, zR, RW.name, {
                  [MW]: CW
                })
              } else LR.addField(WW, zR, RW.name, RW.type)
            }))
          })(CW, WW, bR), bR += WW.fields.length
        }))
      }));
      const CW = new(wW.get(MW.rootType || 0));
      return new Lw(CW, wW)
    }, Zw.makeEncodable = function(WW) {
      const RW = WW[Symbol.metadata];
      if (!RW) return WW;
      const MW = RW[cR];
      if (void 0 === MW) return WW;
      for (let wW = 0; wW <= MW; wW++) {
        const MW = RW[wW];
        MW && LR.defineField(WW, RW, wW, MW.name, MW.type)
      }
      return Object.prototype.hasOwnProperty.call(WW, QW) && delete WW[QW], WW
    };
    class RC {
      pA;
      uniqueRefIds = new Set;
      isTriggering = !1;
      constructor(WW) {
        this.pA = WW, this.pA.IRW = this.IRW.bind(this)
      }
      get callbacks() {
        return this.pA.root.callbacks
      }
      get state() {
        return this.pA.state
      }
      addCallback(WW, RW, MW) {
        return this.pA.root.addCallback(WW, RW, MW)
      }
      addCallbackOrWaitCollectionAvailable(WW, RW, MW, wW) {
        let zR = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4],
          AW = () => {};
        const yR = () => AW(),
          NW = WW[RW];
        if (NW && void 0 !== NW[bR]) return zR = zR && !1 === this.isTriggering, MW === CW.ADD && zR && NW.forEach(((WW, RW) => {
          wW(WW, RW)
        })), this.addCallback(NW[bR], MW, wW);
        {
          let CW;
          return CW = this.addCallback(WW[bR], RW, ((WW, RW) => {
            null !== WW && void 0 !== WW && (CW(), AW = this.addCallback(WW[bR], MW, wW))
          })), AW = CW, yR
        }
      }
      listen() {
        return "string" === typeof(arguments.length <= 0 ? void 0 : arguments[0]) ? this.listenInstance(this.state, arguments.length <= 0 ? void 0 : arguments[0], arguments.length <= 1 ? void 0 : arguments[1], arguments.length <= 2 ? void 0 : arguments[2]) : this.listenInstance(arguments.length <= 0 ? void 0 : arguments[0], arguments.length <= 1 ? void 0 : arguments[1], arguments.length <= 2 ? void 0 : arguments[2], arguments.length <= 3 ? void 0 : arguments[3])
      }
      listenInstance(WW, RW, MW) {
        let wW = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
        wW = wW && !1 === this.isTriggering;
        const CW = WW[RW];
        return wW && null !== CW && void 0 !== CW && MW(CW, void 0), this.addCallback(WW[bR], RW, MW)
      }
      onChange() {
        if (2 === arguments.length && "string" !== typeof(arguments.length <= 0 ? void 0 : arguments[0])) {
          const WW = arguments.length <= 0 ? void 0 : arguments[0],
            RW = arguments.length <= 1 ? void 0 : arguments[1];
          return this.addCallback(WW[bR], CW.REPLACE, RW)
        }
        return "string" === typeof(arguments.length <= 0 ? void 0 : arguments[0]) ? this.addCallbackOrWaitCollectionAvailable(this.state, arguments.length <= 0 ? void 0 : arguments[0], CW.REPLACE, arguments.length <= 1 ? void 0 : arguments[1]) : this.addCallbackOrWaitCollectionAvailable(arguments.length <= 0 ? void 0 : arguments[0], arguments.length <= 1 ? void 0 : arguments[1], CW.REPLACE, arguments.length <= 2 ? void 0 : arguments[2])
      }
      Tk() {
        return "string" === typeof(arguments.length <= 0 ? void 0 : arguments[0]) ? this.addCallbackOrWaitCollectionAvailable(this.state, arguments.length <= 0 ? void 0 : arguments[0], CW.ADD, arguments.length <= 1 ? void 0 : arguments[1], !1 !== (arguments.length <= 2 ? void 0 : arguments[2])) : this.addCallbackOrWaitCollectionAvailable(arguments.length <= 0 ? void 0 : arguments[0], arguments.length <= 1 ? void 0 : arguments[1], CW.ADD, arguments.length <= 2 ? void 0 : arguments[2], !1 !== (arguments.length <= 3 ? void 0 : arguments[3]))
      }
      NRW() {
        return "string" === typeof(arguments.length <= 0 ? void 0 : arguments[0]) ? this.addCallbackOrWaitCollectionAvailable(this.state, arguments.length <= 0 ? void 0 : arguments[0], CW.DELETE, arguments.length <= 1 ? void 0 : arguments[1]) : this.addCallbackOrWaitCollectionAvailable(arguments.length <= 0 ? void 0 : arguments[0], arguments.length <= 1 ? void 0 : arguments[1], CW.DELETE, arguments.length <= 2 ? void 0 : arguments[2])
      }
      bindTo(WW, RW, MW) {
        let wW = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
        const zR = WW.constructor[Symbol.metadata];
        MW || (MW = Object.keys(zR).filter((WW => !isNaN(Number(WW)))).map((WW => zR[WW].name)));
        const AW = () => {
          for (const wW of MW) {
            const MW = WW[wW];
            void 0 !== MW && (RW[wW] = MW)
          }
        };
        return wW && AW(), this.addCallback(WW[bR], CW.REPLACE, AW)
      }
      IRW(WW) {
        this.uniqueRefIds.clear(), this.isTriggering = !0;
        for (let RW = 0, MW = WW.length; RW < MW; RW++) {
          const MW = WW[RW],
            wW = MW.refId,
            zR = MW.ref,
            AW = this.callbacks[wW];
          if (AW) {
            if ((MW.op & CW.DELETE) === CW.DELETE && jC.isSchema(MW.previousValue)) {
              const WW = MW.previousValue[bR],
                RW = this.callbacks[WW]?.[CW.DELETE];
              if (RW)
                for (let MW = RW.length - 1; MW >= 0; MW--) try {
                  RW[MW]()
                } catch (zz) {
                  console.error(zz)
                }
            }
            if (jC.isSchema(zR)) {
              if (!this.uniqueRefIds.has(wW)) {
                const WW = AW[CW.REPLACE];
                if (WW)
                  for (let RW = WW.length - 1; RW >= 0; RW--) try {
                    WW[RW]()
                  } catch (zz) {
                    console.error(zz)
                  }
              }
              const WW = AW[MW.field];
              if (WW)
                for (let RW = WW.length - 1; RW >= 0; RW--) try {
                  WW[RW](MW.value, MW.previousValue)
                } catch (zz) {
                  console.error(zz)
                }
            } else {
              const WW = MW.dynamicIndex ?? MW.field;
              if ((MW.op & CW.DELETE) === CW.DELETE) {
                if (void 0 !== MW.previousValue) {
                  const RW = AW[CW.DELETE];
                  if (RW)
                    for (let wW = RW.length - 1; wW >= 0; wW--) try {
                      RW[wW](MW.previousValue, WW)
                    } catch (zz) {
                      console.error(zz)
                    }
                }
                if ((MW.op & CW.ADD) === CW.ADD) {
                  const RW = AW[CW.ADD];
                  if (RW)
                    for (let wW = RW.length - 1; wW >= 0; wW--) try {
                      RW[wW](MW.value, WW)
                    } catch (zz) {
                      console.error(zz)
                    }
                }
              } else if ((MW.op & CW.ADD) === CW.ADD && MW.previousValue !== MW.value) {
                const RW = AW[CW.ADD];
                if (RW)
                  for (let wW = RW.length - 1; wW >= 0; wW--) try {
                    RW[wW](MW.value, WW)
                  } catch (zz) {
                    console.error(zz)
                  }
              }
              if (MW.value !== MW.previousValue) {
                const RW = AW[CW.REPLACE];
                if (RW)
                  for (let wW = RW.length - 1; wW >= 0; wW--) try {
                    RW[wW](WW, MW.value)
                  } catch (zz) {
                    console.error(zz)
                  }
              }
            }
            this.uniqueRefIds.add(wW)
          }
        }
        this.isTriggering = !1
      }
    }
    const MC = {
      get(WW) {
        if (WW instanceof Lw) return new RC(WW);
        if ("pA" in WW.Uy) return new RC(WW.Uy.pA);
        throw new Error("Invalid room or decoder")
      },
      getLegacy(WW) {
        if (WW instanceof Lw) return Sw(WW);
        if ("pA" in WW.Uy) return Sw(WW.Uy.pA);
        throw new Error("Invalid room or decoder")
      },
      getRawChanges: (WW, RW) => WC(WW, RW)
    };
    class wC {
      _free = [];
      _factory;
      _maxSize;
      constructor(WW) {
        let RW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        this._factory = WW, this._maxSize = RW.maxSize ?? 1 / 0;
        const MW = RW.preallocate ?? 0;
        for (let wW = 0; wW < MW; wW++) this._free.push(WW())
      }
      acquire() {
        return this._free.length > 0 ? this._free.pop() : this._factory()
      }
      release(WW) {
        jC.reset(WW), this._free.length < this._maxSize && this._free.push(WW)
      }
      get size() {
        return this._free.length
      }
    }

    function CC(WW) {
      return new wC((() => new WW), arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {})
    }
    FR("map", {
      constructor: Cw
    }), FR("array", {
      constructor: Mw
    }), FR("set", {
      constructor: Aw
    }), FR("collection", {
      constructor: zC
    })
  },
  7949: (WW, RW, MW) => {
    MW.r(RW), MW.d(RW, {
      __addDisposableResource: () => UW,
      __assign: () => zR,
      __asyncDelegator: () => rR,
      __asyncGenerator: () => QW,
      __asyncValues: () => cR,
      __await: () => fW,
      __awaiter: () => gR,
      __classPrivateFieldGet: () => dW,
      __classPrivateFieldIn: () => hW,
      __classPrivateFieldSet: () => pW,
      __createBinding: () => YW,
      __decorate: () => bR,
      __disposeResources: () => VW,
      __esDecorate: () => NW,
      __exportStar: () => JW,
      __extends: () => CW,
      __generator: () => iR,
      __importDefault: () => sW,
      __importStar: () => aR,
      __makeTemplateObject: () => XW,
      __metadata: () => TW,
      __param: () => yR,
      __propKey: () => BW,
      __read: () => IW,
      __rest: () => AW,
      __rewriteRelativeImportExtension: () => mR,
      __runInitializers: () => eW,
      __setFunctionName: () => tR,
      __spread: () => oW,
      __spreadArray: () => FW,
      __spreadArrays: () => lW,
      __values: () => PW,
      default: () => xR
    });
    var wW = function(WW, RW) {
      return wW = Object.setPrototypeOf || {
        __proto__: []
      }
      instanceof Array && function(WW, RW) {
        WW.__proto__ = RW
      } || function(WW, RW) {
        for (var MW in RW) Object.prototype.hasOwnProperty.call(RW, MW) && (WW[MW] = RW[MW])
      }, wW(WW, RW)
    };

    function CW(WW, RW) {
      if ("function" !== typeof RW && null !== RW) throw new TypeError("Class extends value " + String(RW) + " is not a constructor or null");

      function MW() {
        this.constructor = WW
      }
      wW(WW, RW), WW.prototype = null === RW ? Object.create(RW) : (MW.prototype = RW.prototype, new MW)
    }
    var zR = function() {
      return zR = Object.assign || function(WW) {
        for (var RW, MW = 1, wW = arguments.length; MW < wW; MW++)
          for (var CW in RW = arguments[MW]) Object.prototype.hasOwnProperty.call(RW, CW) && (WW[CW] = RW[CW]);
        return WW
      }, zR.apply(this, arguments)
    };

    function AW(WW, RW) {
      var MW = {};
      for (var wW in WW) Object.prototype.hasOwnProperty.call(WW, wW) && RW.indexOf(wW) < 0 && (MW[wW] = WW[wW]);
      if (null != WW && "function" === typeof Object.getOwnPropertySymbols) {
        var CW = 0;
        for (wW = Object.getOwnPropertySymbols(WW); CW < wW.length; CW++) RW.indexOf(wW[CW]) < 0 && Object.prototype.propertyIsEnumerable.call(WW, wW[CW]) && (MW[wW[CW]] = WW[wW[CW]])
      }
      return MW
    }

    function bR(WW, RW, MW, wW) {
      var CW, zR = arguments.length,
        AW = zR < 3 ? RW : null === wW ? wW = Object.getOwnPropertyDescriptor(RW, MW) : wW;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) AW = Reflect.decorate(WW, RW, MW, wW);
      else
        for (var bR = WW.length - 1; bR >= 0; bR--)(CW = WW[bR]) && (AW = (zR < 3 ? CW(AW) : zR > 3 ? CW(RW, MW, AW) : CW(RW, MW)) || AW);
      return zR > 3 && AW && Object.defineProperty(RW, MW, AW), AW
    }

    function yR(WW, RW) {
      return function(MW, wW) {
        RW(MW, wW, WW)
      }
    }

    function NW(WW, RW, MW, wW, CW, zR) {
      function AW(WW) {
        if (void 0 !== WW && "function" !== typeof WW) throw new TypeError("Function expected");
        return WW
      }
      for (var bR, yR = wW.kind, NW = "getter" === yR ? "get" : "setter" === yR ? "set" : "value", eW = !RW && WW ? wW.static ? WW : WW.prototype : null, BW = RW || (eW ? Object.getOwnPropertyDescriptor(eW, wW.name) : {}), tR = !1, TW = MW.length - 1; TW >= 0; TW--) {
        var gR = {};
        for (var iR in wW) gR[iR] = "access" === iR ? {} : wW[iR];
        for (var iR in wW.access) gR.access[iR] = wW.access[iR];
        gR.addInitializer = function(WW) {
          if (tR) throw new TypeError("Cannot add initializers after decoration has completed");
          zR.push(AW(WW || null))
        };
        var YW = (0, MW[TW])("accessor" === yR ? {
          get: BW.get,
          set: BW.set
        } : BW[NW], gR);
        if ("accessor" === yR) {
          if (void 0 === YW) continue;
          if (null === YW || "object" !== typeof YW) throw new TypeError("Object expected");
          (bR = AW(YW.get)) && (BW.get = bR), (bR = AW(YW.set)) && (BW.set = bR), (bR = AW(YW.init)) && CW.unshift(bR)
        } else(bR = AW(YW)) && ("field" === yR ? CW.unshift(bR) : BW[NW] = bR)
      }
      eW && Object.defineProperty(eW, wW.name, BW), tR = !0
    }

    function eW(WW, RW, MW) {
      for (var wW = arguments.length > 2, CW = 0; CW < RW.length; CW++) MW = wW ? RW[CW].call(WW, MW) : RW[CW].call(WW);
      return wW ? MW : void 0
    }

    function BW(WW) {
      return "symbol" === typeof WW ? WW : "".concat(WW)
    }

    function tR(WW, RW, MW) {
      return "symbol" === typeof RW && (RW = RW.description ? "[".concat(RW.description, "]") : ""), Object.defineProperty(WW, "name", {
        configurable: !0,
        value: MW ? "".concat(MW, " ", RW) : RW
      })
    }

    function TW(WW, RW) {
      if ("object" === typeof Reflect && "function" === typeof Reflect.metadata) return Reflect.metadata(WW, RW)
    }

    function gR(WW, RW, MW, wW) {
      return new(MW || (MW = Promise))((function(CW, zR) {
        function AW(WW) {
          try {
            yR(wW.next(WW))
          } catch (RW) {
            zR(RW)
          }
        }

        function bR(WW) {
          try {
            yR(wW.throw(WW))
          } catch (RW) {
            zR(RW)
          }
        }

        function yR(WW) {
          var RW;
          WW.done ? CW(WW.value) : (RW = WW.value, RW instanceof MW ? RW : new MW((function(WW) {
            WW(RW)
          }))).then(AW, bR)
        }
        yR((wW = wW.apply(WW, RW || [])).next())
      }))
    }

    function iR(WW, RW) {
      var MW, wW, CW, zR = {
          label: 0,
          sent: function() {
            if (1 & CW[0]) throw CW[1];
            return CW[1]
          },
          trys: [],
          ops: []
        },
        AW = Object.create(("function" === typeof Iterator ? Iterator : Object).prototype);
      return AW.next = bR(0), AW.throw = bR(1), AW.return = bR(2), "function" === typeof Symbol && (AW[Symbol.iterator] = function() {
        return this
      }), AW;

      function bR(bR) {
        return function(yR) {
          return function(bR) {
            if (MW) throw new TypeError("Generator is already executing.");
            for (; AW && (AW = 0, bR[0] && (zR = 0)), zR;) try {
              if (MW = 1, wW && (CW = 2 & bR[0] ? wW.return : bR[0] ? wW.throw || ((CW = wW.return) && CW.call(wW), 0) : wW.next) && !(CW = CW.call(wW, bR[1])).done) return CW;
              switch (wW = 0, CW && (bR = [2 & bR[0], CW.value]), bR[0]) {
                case 0:
                case 1:
                  CW = bR;
                  break;
                case 4:
                  return zR.label++, {
                    value: bR[1],
                    done: !1
                  };
                case 5:
                  zR.label++, wW = bR[1], bR = [0];
                  continue;
                case 7:
                  bR = zR.ops.pop(), zR.trys.pop();
                  continue;
                default:
                  if (!(CW = (CW = zR.trys).length > 0 && CW[CW.length - 1]) && (6 === bR[0] || 2 === bR[0])) {
                    zR = 0;
                    continue
                  }
                  if (3 === bR[0] && (!CW || bR[1] > CW[0] && bR[1] < CW[3])) {
                    zR.label = bR[1];
                    break
                  }
                  if (6 === bR[0] && zR.label < CW[1]) {
                    zR.label = CW[1], CW = bR;
                    break
                  }
                  if (CW && zR.label < CW[2]) {
                    zR.label = CW[2], zR.ops.push(bR);
                    break
                  }
                  CW[2] && zR.ops.pop(), zR.trys.pop();
                  continue
              }
              bR = RW.call(WW, zR)
            } catch (yR) {
              bR = [6, yR], wW = 0
            } finally {
              MW = CW = 0
            }
            if (5 & bR[0]) throw bR[1];
            return {
              value: bR[0] ? bR[1] : void 0,
              done: !0
            }
          }([bR, yR])
        }
      }
    }
    var YW = Object.create ? function(WW, RW, MW, wW) {
      void 0 === wW && (wW = MW);
      var CW = Object.getOwnPropertyDescriptor(RW, MW);
      CW && !("get" in CW ? !RW.__esModule : CW.writable || CW.configurable) || (CW = {
        enumerable: !0,
        get: function() {
          return RW[MW]
        }
      }), Object.defineProperty(WW, wW, CW)
    } : function(WW, RW, MW, wW) {
      void 0 === wW && (wW = MW), WW[wW] = RW[MW]
    };

    function JW(WW, RW) {
      for (var MW in WW) "default" === MW || Object.prototype.hasOwnProperty.call(RW, MW) || YW(RW, WW, MW)
    }

    function PW(WW) {
      var RW = "function" === typeof Symbol && Symbol.iterator,
        MW = RW && WW[RW],
        wW = 0;
      if (MW) return MW.call(WW);
      if (WW && "number" === typeof WW.length) return {
        next: function() {
          return WW && wW >= WW.length && (WW = void 0), {
            value: WW && WW[wW++],
            done: !WW
          }
        }
      };
      throw new TypeError(RW ? "Object is not iterable." : "Symbol.iterator is not defined.")
    }

    function IW(WW, RW) {
      var MW = "function" === typeof Symbol && WW[Symbol.iterator];
      if (!MW) return WW;
      var wW, CW, zR = MW.call(WW),
        AW = [];
      try {
        for (;
          (void 0 === RW || RW-- > 0) && !(wW = zR.next()).done;) AW.push(wW.value)
      } catch (bR) {
        CW = {
          error: bR
        }
      } finally {
        try {
          wW && !wW.done && (MW = zR.return) && MW.call(zR)
        } finally {
          if (CW) throw CW.error
        }
      }
      return AW
    }

    function oW() {
      for (var WW = [], RW = 0; RW < arguments.length; RW++) WW = WW.concat(IW(arguments[RW]));
      return WW
    }

    function lW() {
      for (var WW = 0, RW = 0, MW = arguments.length; RW < MW; RW++) WW += arguments[RW].length;
      var wW = Array(WW),
        CW = 0;
      for (RW = 0; RW < MW; RW++)
        for (var zR = arguments[RW], AW = 0, bR = zR.length; AW < bR; AW++, CW++) wW[CW] = zR[AW];
      return wW
    }

    function FW(WW, RW, MW) {
      if (MW || 2 === arguments.length)
        for (var wW, CW = 0, zR = RW.length; CW < zR; CW++) !wW && CW in RW || (wW || (wW = Array.prototype.slice.call(RW, 0, CW)), wW[CW] = RW[CW]);
      return WW.concat(wW || Array.prototype.slice.call(RW))
    }

    function fW(WW) {
      return this instanceof fW ? (this.v = WW, this) : new fW(WW)
    }

    function QW(WW, RW, MW) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var wW, CW = MW.apply(WW, RW || []),
        zR = [];
      return wW = Object.create(("function" === typeof AsyncIterator ? AsyncIterator : Object).prototype), AW("next"), AW("throw"), AW("return", (function(WW) {
        return function(RW) {
          return Promise.resolve(RW).then(WW, NW)
        }
      })), wW[Symbol.asyncIterator] = function() {
        return this
      }, wW;

      function AW(WW, RW) {
        CW[WW] && (wW[WW] = function(RW) {
          return new Promise((function(MW, wW) {
            zR.push([WW, RW, MW, wW]) > 1 || bR(WW, RW)
          }))
        }, RW && (wW[WW] = RW(wW[WW])))
      }

      function bR(WW, RW) {
        try {
          (MW = CW[WW](RW)).value instanceof fW ? Promise.resolve(MW.value.v).then(yR, NW) : eW(zR[0][2], MW)
        } catch (wW) {
          eW(zR[0][3], wW)
        }
        var MW
      }

      function yR(WW) {
        bR("next", WW)
      }

      function NW(WW) {
        bR("throw", WW)
      }

      function eW(WW, RW) {
        WW(RW), zR.shift(), zR.length && bR(zR[0][0], zR[0][1])
      }
    }

    function rR(WW) {
      var RW, MW;
      return RW = {}, wW("next"), wW("throw", (function(WW) {
        throw WW
      })), wW("return"), RW[Symbol.iterator] = function() {
        return this
      }, RW;

      function wW(wW, CW) {
        RW[wW] = WW[wW] ? function(RW) {
          return (MW = !MW) ? {
            value: fW(WW[wW](RW)),
            done: !1
          } : CW ? CW(RW) : RW
        } : CW
      }
    }

    function cR(WW) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var RW, MW = WW[Symbol.asyncIterator];
      return MW ? MW.call(WW) : (WW = PW(WW), RW = {}, wW("next"), wW("throw"), wW("return"), RW[Symbol.asyncIterator] = function() {
        return this
      }, RW);

      function wW(MW) {
        RW[MW] = WW[MW] && function(RW) {
          return new Promise((function(wW, CW) {
            (function(WW, RW, MW, wW) {
              Promise.resolve(wW).then((function(RW) {
                WW({
                  value: RW,
                  done: MW
                })
              }), RW)
            })(wW, CW, (RW = WW[MW](RW)).done, RW.value)
          }))
        }
      }
    }

    function XW(WW, RW) {
      return Object.defineProperty ? Object.defineProperty(WW, "raw", {
        value: RW
      }) : WW.raw = RW, WW
    }
    var jR = Object.create ? function(WW, RW) {
        Object.defineProperty(WW, "default", {
          enumerable: !0,
          value: RW
        })
      } : function(WW, RW) {
        WW.default = RW
      },
      kR = function(WW) {
        return kR = Object.getOwnPropertyNames || function(WW) {
          var RW = [];
          for (var MW in WW) Object.prototype.hasOwnProperty.call(WW, MW) && (RW[RW.length] = MW);
          return RW
        }, kR(WW)
      };

    function aR(WW) {
      if (WW && WW.__esModule) return WW;
      var RW = {};
      if (null != WW)
        for (var MW = kR(WW), wW = 0; wW < MW.length; wW++) "default" !== MW[wW] && YW(RW, WW, MW[wW]);
      return jR(RW, WW), RW
    }

    function sW(WW) {
      return WW && WW.__esModule ? WW : {
        default: WW
      }
    }

    function dW(WW, RW, MW, wW) {
      if ("a" === MW && !wW) throw new TypeError("Private accessor was defined without a getter");
      if ("function" === typeof RW ? WW !== RW || !wW : !RW.has(WW)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
      return "m" === MW ? wW : "a" === MW ? wW.call(WW) : wW ? wW.value : RW.get(WW)
    }

    function pW(WW, RW, MW, wW, CW) {
      if ("m" === wW) throw new TypeError("Private method is not writable");
      if ("a" === wW && !CW) throw new TypeError("Private accessor was defined without a setter");
      if ("function" === typeof RW ? WW !== RW || !CW : !RW.has(WW)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
      return "a" === wW ? CW.call(WW, MW) : CW ? CW.value = MW : RW.set(WW, MW), MW
    }

    function hW(WW, RW) {
      if (null === RW || "object" !== typeof RW && "function" !== typeof RW) throw new TypeError("Cannot use 'in' operator on non-object");
      return "function" === typeof WW ? RW === WW : WW.has(RW)
    }

    function UW(WW, RW, MW) {
      if (null !== RW && void 0 !== RW) {
        if ("object" !== typeof RW && "function" !== typeof RW) throw new TypeError("Object expected.");
        var wW, CW;
        if (MW) {
          if (!Symbol.asyncDispose) throw new TypeError("Symbol.asyncDispose is not defined.");
          wW = RW[Symbol.asyncDispose]
        }
        if (void 0 === wW) {
          if (!Symbol.dispose) throw new TypeError("Symbol.dispose is not defined.");
          wW = RW[Symbol.dispose], MW && (CW = wW)
        }
        if ("function" !== typeof wW) throw new TypeError("Object not disposable.");
        CW && (wW = function() {
          try {
            CW.call(this)
          } catch (WW) {
            return Promise.reject(WW)
          }
        }), WW.stack.push({
          value: RW,
          dispose: wW,
          async: MW
        })
      } else MW && WW.stack.push({
        async: !0
      });
      return RW
    }
    var EW = "function" === typeof SuppressedError ? SuppressedError : function(WW, RW, MW) {
      var wW = new Error(MW);
      return wW.name = "SuppressedError", wW.error = WW, wW.suppressed = RW, wW
    };

    function VW(WW) {
      function RW(RW) {
        WW.error = WW.hasError ? new EW(RW, WW.error, "An error was suppressed during disposal.") : RW, WW.hasError = !0
      }
      var MW, wW = 0;
      return function CW() {
        for (; MW = WW.stack.pop();) try {
          if (!MW.async && 1 === wW) return wW = 0, WW.stack.push(MW), Promise.resolve().then(CW);
          if (MW.dispose) {
            var zR = MW.dispose.call(MW.value);
            if (MW.async) return wW |= 2, Promise.resolve(zR).then(CW, (function(WW) {
              return RW(WW), CW()
            }))
          } else wW |= 1
        } catch (AW) {
          RW(AW)
        }
        if (1 === wW) return WW.hasError ? Promise.reject(WW.error) : Promise.resolve();
        if (WW.hasError) throw WW.error
      }()
    }

    function mR(WW, RW) {
      return "string" === typeof WW && /^\.\.?\//.test(WW) ? WW.replace(/\.(tsx)$|((?:\.d)?)((?:\.[^./]+?)?)\.([cm]?)ts$/i, (function(WW, MW, wW, CW, zR) {
        return MW ? RW ? ".jsx" : ".js" : !wW || CW && zR ? wW + CW + "." + zR.toLowerCase() + "js" : WW
      })) : WW
    }
    const xR = {
      __extends: CW,
      __assign: zR,
      __rest: AW,
      __decorate: bR,
      __param: yR,
      __esDecorate: NW,
      __runInitializers: eW,
      __propKey: BW,
      __setFunctionName: tR,
      __metadata: TW,
      __awaiter: gR,
      __generator: iR,
      __createBinding: YW,
      __exportStar: JW,
      __values: PW,
      __read: IW,
      __spread: oW,
      __spreadArrays: lW,
      __spreadArray: FW,
      __await: fW,
      __asyncGenerator: QW,
      __asyncDelegator: rR,
      __asyncValues: cR,
      __makeTemplateObject: XW,
      __importStar: aR,
      __importDefault: sW,
      __classPrivateFieldGet: dW,
      __classPrivateFieldSet: pW,
      __classPrivateFieldIn: hW,
      __addDisposableResource: UW,
      __disposeResources: VW,
      __rewriteRelativeImportExtension: mR
    }
  }
};
Object.freeze(modules);
for (const WW in modules) Object.freeze(modules[WW]);