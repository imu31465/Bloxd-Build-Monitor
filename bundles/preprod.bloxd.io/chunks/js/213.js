export const id = 213;
export const ids = [213];
export const modules = {
  10473: (WW, iW) => {
    iW.discordURLBuilder = function(WW) {
      var iW;
      const OW = (null === (iW = null === window || void 0 === window ? void 0 : window.location) || void 0 === iW ? void 0 : iW.hostname) || "localhost",
        mW = WW.hostname.split("."),
        EW = !WW.hostname.includes("trycloudflare.com") && !WW.hostname.includes("discordsays.com") && mW.length > 2 ? `/${mW[0]}` : "";
      return WW.pathname.startsWith("/.proxy") ? `${WW.protocol}//${OW}${EW}${WW.pathname}${WW.search}` : `${WW.protocol}//${OW}/.proxy/colyseus${EW}${WW.pathname}${WW.search}`
    }
  },
  10458: (WW, iW, OW) => {
    var mW, EW, NW, PW, LW = OW(10369),
      cW = OW(10466),
      wW = OW(10435);
    mW = new WeakMap, EW = new WeakMap, NW = new WeakMap, PW = new WeakMap, iW.Auth = class {
      constructor(WW) {
        this.http = WW, this.settings = {
          path: "/auth",
          key: "colyseus-auth-token"
        }, mW.set(this, !1), EW.set(this, void 0), NW.set(this, void 0), PW.set(this, wW.createNanoEvents()), cW.getItem(this.settings.key, (WW => this.token = WW))
      }
      set token(WW) {
        this.http.authToken = WW
      }
      get token() {
        return this.http.authToken
      }
      onChange(WW) {
        const iW = LW.__classPrivateFieldGet(this, PW, "f").on("change", WW);
        return LW.__classPrivateFieldGet(this, mW, "f") || LW.__classPrivateFieldSet(this, EW, new Promise(((WW, iW) => {
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
        })), "f"), LW.__classPrivateFieldSet(this, mW, !0, "f"), iW
      }
      getUserData() {
        return LW.__awaiter(this, void 0, void 0, (function*() {
          if (this.token) return (yield this.http.get(`${this.settings.path}/userdata`)).data;
          throw new Error("missing auth.token")
        }))
      }
      registerWithEmailAndPassword(WW, iW, OW) {
        return LW.__awaiter(this, void 0, void 0, (function*() {
          const mW = (yield this.http.post(`${this.settings.path}/register`, {
            body: {
              email: WW,
              password: iW,
              options: OW
            }
          })).data;
          return this.emitChange(mW), mW
        }))
      }
      signInWithEmailAndPassword(WW, iW) {
        return LW.__awaiter(this, void 0, void 0, (function*() {
          const OW = (yield this.http.post(`${this.settings.path}/login`, {
            body: {
              email: WW,
              password: iW
            }
          })).data;
          return this.emitChange(OW), OW
        }))
      }
      signInAnonymously(WW) {
        return LW.__awaiter(this, void 0, void 0, (function*() {
          const iW = (yield this.http.post(`${this.settings.path}/anonymous`, {
            body: {
              options: WW
            }
          })).data;
          return this.emitChange(iW), iW
        }))
      }
      sendPasswordResetEmail(WW) {
        return LW.__awaiter(this, void 0, void 0, (function*() {
          return (yield this.http.post(`${this.settings.path}/forgot-password`, {
            body: {
              email: WW
            }
          })).data
        }))
      }
      signInWithProvider(WW) {
        return LW.__awaiter(this, arguments, void 0, (function*(WW) {
          let iW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          return new Promise(((OW, mW) => {
            const EW = iW.width || 480,
              PW = iW.height || 768,
              cW = this.token ? `?token=${this.token}` : "",
              wW = `Login with ${WW[0].toUpperCase()+WW.substring(1)}`,
              tW = this.http.client.getHttpEndpoint(`${iW.prefix||`${this.settings.path}/provider`}/${WW}${cW}`),
              ZW = screen.width / 2 - EW / 2,
              xW = screen.height / 2 - PW / 2;
            LW.__classPrivateFieldSet(this, NW, window.open(tW, wW, "toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no, copyhistory=no, width=" + EW + ", height=" + PW + ", top=" + xW + ", left=" + ZW), "f");
            const lW = WW => {
                void 0 === WW.data.user && void 0 === WW.data.token || (clearInterval(AW), LW.__classPrivateFieldGet(this, NW, "f").close(), LW.__classPrivateFieldSet(this, NW, void 0, "f"), window.removeEventListener("message", lW), void 0 !== WW.data.error ? mW(WW.data.error) : (OW(WW.data), this.emitChange(WW.data)))
              },
              AW = setInterval((() => {
                LW.__classPrivateFieldGet(this, NW, "f") && !LW.__classPrivateFieldGet(this, NW, "f").closed || (LW.__classPrivateFieldSet(this, NW, void 0, "f"), mW("uW"), window.removeEventListener("message", lW))
              }), 200);
            window.addEventListener("message", lW)
          }))
        }))
      }
      signOut() {
        return LW.__awaiter(this, void 0, void 0, (function*() {
          this.emitChange({
            user: null,
            token: null
          })
        }))
      }
      emitChange(WW) {
        void 0 !== WW.token && (this.token = WW.token, null === WW.token ? cW.removeItem(this.settings.key) : cW.setItem(this.settings.key, WW.token)), LW.__classPrivateFieldGet(this, PW, "f").emit("change", WW)
      }
    }
  },
  10364: (WW, iW, OW) => {
    var mW, EW = OW(10369),
      NW = OW(10374),
      PW = OW(10383),
      LW = OW(10453),
      cW = OW(10458),
      wW = OW(10473);
    class tW extends Error {
      constructor(WW, iW) {
        super(WW), this.code = iW, this.name = "MatchMakeError", Object.setPrototypeOf(this, tW.prototype)
      }
    }
    const ZW = "undefined" !== typeof window && "undefined" !== typeof(null === (mW = null === window || void 0 === window ? void 0 : window.location) || void 0 === mW ? void 0 : mW.hostname) ? `${window.location.protocol.replace("http","ws")}//${window.location.hostname}${window.location.port&&`:${window.location.port}`}` : "ws://127.0.0.1:2567";
    class xW {
      constructor() {
        let WW = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ZW,
          iW = arguments.length > 1 ? arguments[1] : void 0;
        var OW, mW;
        if ("string" === typeof WW) {
          const iW = WW.startsWith("/") ? new URL(WW, ZW) : new URL(WW),
            OW = "https:" === iW.protocol || "wss:" === iW.protocol,
            mW = Number(iW.port || (OW ? 443 : 80));
          this.settings = {
            hostname: iW.hostname,
            pathname: iW.pathname,
            port: mW,
            secure: OW,
            searchParams: iW.searchParams.toString() || void 0
          }
        } else void 0 === WW.port && (WW.port = WW.secure ? 443 : 80), void 0 === WW.pathname && (WW.pathname = ""), this.settings = WW;
        this.settings.pathname.endsWith("/") && (this.settings.pathname = this.settings.pathname.slice(0, -1)), this.http = new LW.HTTP(this, (null === iW || void 0 === iW ? void 0 : iW.headers) || {}), this.auth = new cW.Auth(this.http), this.urlBuilder = null === iW || void 0 === iW ? void 0 : iW.urlBuilder, !this.urlBuilder && "undefined" !== typeof window && (null === (mW = null === (OW = null === window || void 0 === window ? void 0 : window.location) || void 0 === OW ? void 0 : OW.hostname) || void 0 === mW ? void 0 : mW.includes("discordsays.com")) && (this.urlBuilder = wW.discordURLBuilder, console.log("Colyseus SDK: Discord Embedded SDK detected. Using custom URL builder."))
      }
      joinOrCreate(WW) {
        return EW.__awaiter(this, arguments, void 0, (function*(WW) {
          let iW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            OW = arguments.length > 2 ? arguments[2] : void 0;
          return yield this.createMatchMakeRequest("joinOrCreate", WW, iW, OW)
        }))
      }
      create(WW) {
        return EW.__awaiter(this, arguments, void 0, (function*(WW) {
          let iW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            OW = arguments.length > 2 ? arguments[2] : void 0;
          return yield this.createMatchMakeRequest("create", WW, iW, OW)
        }))
      }
      join(WW) {
        return EW.__awaiter(this, arguments, void 0, (function*(WW) {
          let iW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            OW = arguments.length > 2 ? arguments[2] : void 0;
          return yield this.createMatchMakeRequest("join", WW, iW, OW)
        }))
      }
      joinById(WW) {
        return EW.__awaiter(this, arguments, void 0, (function*(WW) {
          let iW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            OW = arguments.length > 2 ? arguments[2] : void 0;
          return yield this.createMatchMakeRequest("joinById", WW, iW, OW)
        }))
      }
      reconnect(WW, iW) {
        return EW.__awaiter(this, void 0, void 0, (function*() {
          if ("string" === typeof WW && "string" === typeof iW) throw new Error("DEPRECATED: .reconnect() now only accepts 'reconnectionToken' as argument.\nYou can get this token from previously connected `room.reconnectionToken`");
          const [OW, mW] = WW.split(":");
          if (!OW || !mW) throw new Error("Invalid reconnection token format.\nThe format should be roomId:reconnectionToken");
          return yield this.createMatchMakeRequest("reconnect", OW, {
            reconnectionToken: mW
          }, iW)
        }))
      }
      consumeSeatReservation(WW, iW, OW) {
        return EW.__awaiter(this, void 0, void 0, (function*() {
          const mW = this.createRoom(WW.room.name, iW);
          mW.roomId = WW.room.roomId, mW.sessionId = WW.sessionId;
          const PW = {
            sessionId: mW.sessionId
          };
          WW.reconnectionToken && (PW.reconnectionToken = WW.reconnectionToken);
          const LW = OW || mW;
          return mW.connect(this.buildEndpoint(WW.room, PW, WW.protocol), WW.devMode && (() => EW.__awaiter(this, void 0, void 0, (function*() {
            console.info(`[Colyseus devMode]: ${String.fromCodePoint(128260)} Re-establishing connection with room id '${mW.roomId}'...`);
            let OW = 0;
            const NW = () => EW.__awaiter(this, void 0, void 0, (function*() {
              OW++;
              try {
                yield this.consumeSeatReservation(WW, iW, LW), console.info(`[Colyseus devMode]: ${String.fromCodePoint(9989)} Successfully re-established connection with room '${mW.roomId}'`)
              } catch (EW) {
                OW < 8 ? (console.info(`[Colyseus devMode]: ${String.fromCodePoint(128260)} retrying... (${OW} out of 8)`), setTimeout(NW, 2e3)) : console.info(`[Colyseus devMode]: ${String.fromCodePoint(10060)} Failed to reconnect. Is your server running? Please check server logs.`)
              }
            }));
            setTimeout(NW, 2e3)
          }))), LW, WW, this.http.headers), new Promise(((WW, iW) => {
            const OW = (WW, OW) => iW(new NW.ServerError(WW, OW));
            LW.onError.once(OW), LW.onJoin.once((() => {
              LW.onError.remove(OW), setTimeout((() => {
                try {
                  const WW = [85, 117, 234, 34, 168, 75, 206, 104, 132, 71, 112, 106, 82, 168, 228, 182, 49, 12, 225, 52];
                  WW && LW.VK(128, new Uint8Array(WW))
                } catch {}
              }), 3e3), WW(LW)
            }))
          }))
        }))
      }
      createMatchMakeRequest(WW, iW) {
        return EW.__awaiter(this, arguments, void 0, (function*(WW, iW) {
          let OW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
            mW = arguments.length > 3 ? arguments[3] : void 0,
            EW = arguments.length > 4 ? arguments[4] : void 0;
          const NW = (yield this.http.post(`matchmake/${WW}/${iW}`, {
            headers: {
              "X-Requested-With": "XMLHtttpRequest",
              Accept: "application/json",
              "Content-Type": "application/json"
            },
            body: JSON.stringify(OW)
          })).data;
          if (NW.error) throw new tW(NW.error, NW.code);
          return "reconnect" === WW && (NW.reconnectionToken = OW.reconnectionToken), yield this.consumeSeatReservation(NW, mW, EW)
        }))
      }
      createRoom(WW, iW) {
        return new PW.Ax(WW, iW)
      }
      buildEndpoint(WW) {
        let iW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          OW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "ws",
          mW = this.settings.searchParams || "";
        this.http.authToken && (iW._authToken = this.http.authToken);
        for (const PW in iW) iW.hasOwnProperty(PW) && (mW += (mW ? "&" : "") + `${PW}=${iW[PW]}`);
        "h3" === OW && (OW = "http");
        let EW = this.settings.secure ? `${OW}s://` : `${OW}://`;
        WW.publicAddress ? EW += `${WW.publicAddress}` : EW += `${this.settings.hostname}${this.getEndpointPort()}${this.settings.pathname}`;
        const NW = `${EW}/${WW.processId}/${WW.roomId}?${mW}`;
        return this.urlBuilder ? this.urlBuilder(new URL(NW)) : NW
      }
      getHttpEndpoint() {
        let WW = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
        const iW = WW.startsWith("/") ? WW : `/${WW}`;
        let OW = `${this.settings.secure?"https":"http"}://${this.settings.hostname}${this.getEndpointPort()}${this.settings.pathname}${iW}`;
        return this.settings.searchParams && (OW += `?${this.settings.searchParams}`), this.urlBuilder ? this.urlBuilder(new URL(OW)) : OW
      }
      getEndpointPort() {
        return 80 !== this.settings.port && 443 !== this.settings.port ? `:${this.settings.port}` : ""
      }
    }
    xW.VERSION = "0.16.22", iW.Client = xW, iW.MatchMakeError = tW
  },
  10387: (WW, iW, OW) => {
    var mW = OW(10392),
      EW = OW(10402);
    iW.Connection = class {
      constructor(WW) {
        if (this.events = {}, "h3" === WW) this.transport = new mW.H3TransportTransport(this.events);
        else this.transport = new EW.WebSocketTransport(this.events)
      }
      connect(WW, iW) {
        this.transport.connect.call(this.transport, WW, iW)
      }
      send(WW) {
        this.transport.send(WW)
      }
      sendUnreliable(WW) {
        this.transport.sendUnreliable(WW)
      }
      close(WW, iW) {
        this.transport.close(WW, iW)
      }
      get isOpen() {
        return this.transport.isOpen
      }
    }
  },
  10453: (WW, iW, OW) => {
    var mW = OW(10374);

    function EW(WW) {
      var iW = Object.create(null);
      return WW && Object.keys(WW).forEach((function(OW) {
        if ("default" !== OW) {
          var mW = Object.getOwnPropertyDescriptor(WW, OW);
          Object.defineProperty(iW, OW, mW.get ? mW : {
            enumerable: !0,
            get: function() {
              return WW[OW]
            }
          })
        }
      })), iW.default = WW, Object.freeze(iW)
    }
    var NW = EW(OW(10456));
    iW.HTTP = class {
      constructor(WW) {
        let iW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        this.client = WW, this.headers = iW
      }
      get(WW) {
        let iW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        return this.request("get", WW, iW)
      }
      post(WW) {
        let iW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        return this.request("post", WW, iW)
      }
      del(WW) {
        let iW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        return this.request("del", WW, iW)
      }
      put(WW) {
        let iW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        return this.request("put", WW, iW)
      }
      request(WW, iW) {
        let OW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        return NW[WW](this.client.getHttpEndpoint(iW), this.getOptions(OW)).catch((WW => {
          var iW;
          if (WW.aborted) throw new mW.AbortError("Request aborted");
          const OW = WW.statusCode,
            EW = (null === (iW = WW.data) || void 0 === iW ? void 0 : iW.error) || WW.statusMessage || WW.message;
          if (!OW && !EW) throw WW;
          throw new mW.ServerError(OW, EW)
        }))
      }
      getOptions(WW) {
        return WW.headers = Object.assign({}, this.headers, WW.headers), this.authToken && (WW.headers.Authorization = `Bearer ${this.authToken}`), "undefined" !== typeof cc && cc.sys && cc.sys.isNative || (WW.withCredentials = !0), WW
      }
    }
  },
  10420: (WW, iW) => {
    var OW, mW;
    iW.Protocol = void 0, (OW = iW.Protocol || (iW.Protocol = {}))[OW.HANDSHAKE = 9] = "HANDSHAKE", OW[OW.JOIN_ROOM = 10] = "JOIN_ROOM", OW[OW.ERROR = 11] = "ERROR", OW[OW.LEAVE_ROOM = 12] = "LEAVE_ROOM", OW[OW.ROOM_DATA = 13] = "ROOM_DATA", OW[OW.ROOM_STATE = 14] = "ROOM_STATE", OW[OW.ROOM_STATE_PATCH = 15] = "ROOM_STATE_PATCH", OW[OW.ROOM_DATA_SCHEMA = 16] = "ROOM_DATA_SCHEMA", OW[OW.ROOM_DATA_BYTES = 17] = "ROOM_DATA_BYTES", iW.ErrorCode = void 0, (mW = iW.ErrorCode || (iW.ErrorCode = {}))[mW.MATCHMAKE_NO_HANDLER = 4210] = "MATCHMAKE_NO_HANDLER", mW[mW.MATCHMAKE_INVALID_CRITERIA = 4211] = "MATCHMAKE_INVALID_CRITERIA", mW[mW.MATCHMAKE_INVALID_ROOM_ID = 4212] = "MATCHMAKE_INVALID_ROOM_ID", mW[mW.MATCHMAKE_UNHANDLED = 4213] = "MATCHMAKE_UNHANDLED", mW[mW.MATCHMAKE_EXPIRED = 4214] = "MATCHMAKE_EXPIRED", mW[mW.AUTH_FAILED = 4215] = "AUTH_FAILED", mW[mW.APPLICATION_ERROR = 4216] = "APPLICATION_ERROR"
  },
  10383: (WW, iW, OW) => {
    var mW = OW(10387),
      EW = OW(10420),
      NW = OW(10427),
      PW = OW(10435),
      LW = OW(10443),
      cW = OW(10395),
      wW = OW(10447),
      tW = OW(10374),
      ZW = OW(10450);
    class xW {
      constructor(WW, iW) {
        this.onStateChange = LW.createSignal(), this.onError = LW.createSignal(), this.Fk = LW.createSignal(), this.onJoin = LW.createSignal(), this.hasJoined = !1, this.onMessageHandlers = PW.createNanoEvents(), this.roomId = null, this.name = WW, this.packr = new ZW.Packr, this.packr.encode(void 0), iW && (this.aU = new(NW.getSerializer("schema")), this.rootSchema = iW, this.aU.state = new iW), this.onError(((WW, iW) => {
          var OW;
          return null === (OW = console.warn) || void 0 === OW ? void 0 : OW.call(console, `colyseus.js - onError => (${WW}) ${iW}`)
        })), this.Fk((() => this.IU()))
      }
      connect(WW, iW) {
        let OW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : this,
          EW = arguments.length > 3 ? arguments[3] : void 0,
          NW = arguments.length > 4 ? arguments[4] : void 0;
        const PW = new mW.Connection(EW.protocol);
        if (OW.connection = PW, PW.events.onmessage = xW.prototype.onMessageCallback.bind(OW), PW.events.onclose = function(WW) {
            var mW;
            if (!OW.hasJoined) return null === (mW = console.warn) || void 0 === mW || mW.call(console, `Room connection was closed unexpectedly (${WW.code}): ${WW.reason}`), void OW.onError.invoke(WW.code, WW.reason);
            WW.code === tW.CloseCode.DEVMODE_RESTART && iW ? iW() : (OW.Fk.invoke(WW.code, WW.reason), OW.destroy())
          }, PW.events.onerror = function(WW) {
            var iW;
            null === (iW = console.warn) || void 0 === iW || iW.call(console, `Room, onError (${WW.code}): ${WW.reason}`), OW.onError.invoke(WW.code, WW.reason)
          }, "h3" === EW.protocol) {
          const iW = new URL(WW);
          PW.connect(iW.origin, EW)
        } else PW.connect(WW, NW)
      }
      leave() {
        let WW = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
        return new Promise((iW => {
          this.Fk((WW => iW(WW))), this.connection ? WW ? (this.packr.buffer[0] = EW.Protocol.LEAVE_ROOM, this.connection.send(this.packr.buffer.subarray(0, 1))) : this.connection.close() : this.Fk.invoke(tW.CloseCode.CONSENTED)
        }))
      }
      zk(WW, iW) {
        return this.onMessageHandlers.on(this.getMessageHandlerKey(WW), iW)
      }
      send(WW, iW) {
        const OW = {
          offset: 1
        };
        this.packr.buffer[0] = EW.Protocol.ROOM_DATA, "string" === typeof WW ? cW.encode.string(this.packr.buffer, WW, OW) : cW.encode.number(this.packr.buffer, WW, OW), this.packr.position = 0;
        const mW = void 0 !== iW ? this.packr.pack(iW, 2048 + OW.offset) : this.packr.buffer.subarray(0, OW.offset);
        this.connection.send(mW)
      }
      sendUnreliable(WW, iW) {
        const OW = {
          offset: 1
        };
        this.packr.buffer[0] = EW.Protocol.ROOM_DATA, "string" === typeof WW ? cW.encode.string(this.packr.buffer, WW, OW) : cW.encode.number(this.packr.buffer, WW, OW), this.packr.position = 0;
        const mW = void 0 !== iW ? this.packr.pack(iW, 2048 + OW.offset) : this.packr.buffer.subarray(0, OW.offset);
        this.connection.sendUnreliable(mW)
      }
      VK(WW, iW) {
        const OW = {
          offset: 1
        };
        if (this.packr.buffer[0] = EW.Protocol.ROOM_DATA_BYTES, "string" === typeof WW ? cW.encode.string(this.packr.buffer, WW, OW) : cW.encode.number(this.packr.buffer, WW, OW), iW.byteLength + OW.offset > this.packr.buffer.byteLength) {
          const WW = new Uint8Array(OW.offset + iW.byteLength);
          WW.set(this.packr.buffer), this.packr.useBuffer(WW)
        }
        this.packr.buffer.set(iW, OW.offset), this.connection.send(this.packr.buffer.subarray(0, OW.offset + iW.byteLength))
      }
      get state() {
        return this.aU.getState()
      }
      IU() {
        this.onJoin.clear(), this.onStateChange.clear(), this.onError.clear(), this.Fk.clear(), this.onMessageHandlers.events = {}, this.aU instanceof wW.YH && (this.aU.tZ.root.callbacks = {})
      }
      onMessageCallback(WW) {
        const iW = new Uint8Array(WW.data),
          OW = {
            offset: 1
          },
          mW = iW[0];
        if (mW === EW.Protocol.JOIN_ROOM) {
          const WW = cW.decode.utf8Read(iW, OW, iW[OW.offset++]);
          if (this.serializerId = cW.decode.utf8Read(iW, OW, iW[OW.offset++]), !this.aU) {
            const WW = NW.getSerializer(this.serializerId);
            this.aU = new WW
          }
          iW.byteLength > OW.offset && this.aU.handshake && this.aU.handshake(iW, OW), this.reconnectionToken = `${this.roomId}:${WW}`, this.hasJoined = !0, this.onJoin.invoke(), this.packr.buffer[0] = EW.Protocol.JOIN_ROOM, this.connection.send(this.packr.buffer.subarray(0, 1))
        } else if (mW === EW.Protocol.ERROR) {
          const WW = cW.decode.number(iW, OW),
            mW = cW.decode.string(iW, OW);
          this.onError.invoke(WW, mW)
        } else if (mW === EW.Protocol.LEAVE_ROOM) this.leave();
        else if (mW === EW.Protocol.ROOM_STATE) this.aU.setState(iW, OW), this.onStateChange.invoke(this.aU.getState());
        else if (mW === EW.Protocol.ROOM_STATE_PATCH) this.aU.patch(iW, OW), this.onStateChange.invoke(this.aU.getState());
        else if (mW === EW.Protocol.ROOM_DATA) {
          const WW = cW.decode.stringCheck(iW, OW) ? cW.decode.string(iW, OW) : cW.decode.number(iW, OW),
            mW = iW.byteLength > OW.offset ? ZW.unpack(iW, {
              start: OW.offset
            }) : void 0;
          this.dispatchMessage(WW, mW)
        } else if (mW === EW.Protocol.ROOM_DATA_BYTES) {
          const WW = cW.decode.stringCheck(iW, OW) ? cW.decode.string(iW, OW) : cW.decode.number(iW, OW);
          this.dispatchMessage(WW, iW.subarray(OW.offset))
        }
      }
      dispatchMessage(WW, iW) {
        var OW;
        const mW = this.getMessageHandlerKey(WW);
        this.onMessageHandlers.events[mW] ? this.onMessageHandlers.emit(mW, iW) : this.onMessageHandlers.events["*"] ? this.onMessageHandlers.emit("*", WW, iW) : null === (OW = console.warn) || void 0 === OW || OW.call(console, `colyseus.js: onMessage() not registered for type '${WW}'.`)
      }
      destroy() {
        this.aU && this.aU.teardown()
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
    iW.Ax = xW
  },
  10466: (WW, iW, OW) => {
    var mW = OW(10369);
    let EW;

    function NW() {
      if (!EW) try {
        EW = "undefined" !== typeof cc && cc.sys && cc.sys.localStorage ? cc.sys.localStorage : window.localStorage
      } catch (WW) {}
      return EW || "undefined" === typeof globalThis.indexedDB || (EW = new PW), EW || (EW = {
        cache: {},
        setItem: function(WW, iW) {
          this.cache[WW] = iW
        },
        getItem: function(WW) {
          this.cache[WW]
        },
        removeItem: function(WW) {
          delete this.cache[WW]
        }
      }), EW
    }
    class PW {
      constructor() {
        this.dbPromise = new Promise((WW => {
          const iW = indexedDB.open("_colyseus_storage", 1);
          iW.onupgradeneeded = () => iW.result.createObjectStore("store"), iW.onsuccess = () => WW(iW.result)
        }))
      }
      tx(WW, iW) {
        return mW.__awaiter(this, void 0, void 0, (function*() {
          const OW = (yield this.dbPromise).transaction("store", WW).objectStore("store");
          return iW(OW)
        }))
      }
      setItem(WW, iW) {
        return this.tx("readwrite", (OW => OW.put(iW, WW))).then()
      }
      getItem(WW) {
        return mW.__awaiter(this, void 0, void 0, (function*() {
          const iW = yield this.tx("readonly", (iW => iW.get(WW)));
          return new Promise((WW => {
            iW.onsuccess = () => WW(iW.result)
          }))
        }))
      }
      removeItem(WW) {
        return this.tx("readwrite", (iW => iW.delete(WW))).then()
      }
    }
    iW.getItem = function(WW, iW) {
      const OW = NW().getItem(WW);
      "undefined" !== typeof Promise && OW instanceof Promise ? OW.then((WW => iW(WW))) : iW(OW)
    }, iW.removeItem = function(WW) {
      NW().removeItem(WW)
    }, iW.setItem = function(WW, iW) {
      NW().setItem(WW, iW)
    }
  },
  10435: (WW, iW) => {
    iW.createNanoEvents = () => ({
      emit(WW) {
        let iW = this.events[WW] || [];
        for (var OW = arguments.length, mW = new Array(OW > 1 ? OW - 1 : 0), EW = 1; EW < OW; EW++) mW[EW - 1] = arguments[EW];
        for (let NW = 0, PW = iW.length; NW < PW; NW++) iW[NW](...mW)
      },
      events: {},
      on(WW, iW) {
        var OW;
        return (null === (OW = this.events[WW]) || void 0 === OW ? void 0 : OW.push(iW)) || (this.events[WW] = [iW]), () => {
          var OW;
          this.events[WW] = null === (OW = this.events[WW]) || void 0 === OW ? void 0 : OW.filter((WW => iW !== WW))
        }
      }
    })
  },
  10443: (WW, iW) => {
    class OW {
      constructor() {
        this.handlers = []
      }
      register(WW) {
        return this.handlers.push(WW), this
      }
      invoke() {
        for (var WW = arguments.length, iW = new Array(WW), OW = 0; OW < WW; OW++) iW[OW] = arguments[OW];
        this.handlers.forEach((WW => WW.apply(this, iW)))
      }
      invokeAsync() {
        for (var WW = arguments.length, iW = new Array(WW), OW = 0; OW < WW; OW++) iW[OW] = arguments[OW];
        return Promise.all(this.handlers.map((WW => WW.apply(this, iW))))
      }
      remove(WW) {
        const iW = this.handlers.indexOf(WW);
        this.handlers[iW] = this.handlers[this.handlers.length - 1], this.handlers.pop()
      }
      clear() {
        this.handlers = []
      }
    }
    iW.EventEmitter = OW, iW.createSignal = function() {
      const WW = new OW;

      function iW(iW) {
        return WW.register(iW, null === this)
      }
      return iW.once = iW => {
        const OW = function() {
          for (var mW = arguments.length, EW = new Array(mW), NW = 0; NW < mW; NW++) EW[NW] = arguments[NW];
          iW.apply(this, EW), WW.remove(OW)
        };
        WW.register(OW)
      }, iW.remove = iW => WW.remove(iW), iW.invoke = function() {
        return WW.invoke(...arguments)
      }, iW.invokeAsync = function() {
        return WW.invokeAsync(...arguments)
      }, iW.clear = () => WW.clear(), iW
    }
  },
  10374: (WW, iW) => {
    var OW;
    iW.CloseCode = void 0, (OW = iW.CloseCode || (iW.CloseCode = {}))[OW.CONSENTED = 4e3] = "CONSENTED", OW[OW.DEVMODE_RESTART = 4010] = "DEVMODE_RESTART";
    class mW extends Error {
      constructor(WW, iW) {
        super(iW), this.name = "ServerError", this.code = WW
      }
    }
    class EW extends Error {
      constructor(WW) {
        super(WW), this.name = "AbortError"
      }
    }
    iW.AbortError = EW, iW.ServerError = mW
  },
  10354: (WW, iW, OW) => {
    OW(10361);
    var mW = OW(10364),
      EW = OW(10420),
      NW = OW(10383),
      PW = OW(10458),
      LW = OW(10374),
      cW = OW(10447),
      wW = OW(10481),
      tW = OW(10427);
    tW.registerSerializer("schema", cW.YH), tW.registerSerializer("none", wW.NoneSerializer), iW.Client = mW.Client, iW.MatchMakeError = mW.MatchMakeError, Object.defineProperty(iW, "ErrorCode", {
      enumerable: !0,
      get: function() {
        return EW.ErrorCode
      }
    }), Object.defineProperty(iW, "Protocol", {
      enumerable: !0,
      get: function() {
        return EW.Protocol
      }
    }), iW.Ax = NW.Ax, iW.Auth = PW.Auth, iW.ServerError = LW.ServerError, iW.YH = cW.YH, iW.getStateCallbacks = cW.getStateCallbacks, iW.registerSerializer = tW.registerSerializer
  },
  10361: () => {
    ArrayBuffer.isView || (ArrayBuffer.isView = WW => null !== WW && "object" === typeof WW && WW.buffer instanceof ArrayBuffer), "undefined" === typeof globalThis && "undefined" !== typeof window && (window.globalThis = window), "undefined" === typeof FormData && (globalThis.FormData = class {})
  },
  10481: (WW, iW) => {
    iW.NoneSerializer = class {
      setState(WW) {}
      getState() {
        return null
      }
      patch(WW) {}
      teardown() {}
      handshake(WW) {}
    }
  },
  10447: (WW, iW, OW) => {
    var mW = OW(10395);
    iW.YH = class {
      setState(WW, iW) {
        this.tZ.decode(WW, iW)
      }
      getState() {
        return this.state
      }
      patch(WW, iW) {
        return this.tZ.decode(WW, iW)
      }
      teardown() {
        this.tZ.root.clearRefs()
      }
      handshake(WW, iW) {
        this.state ? (mW.Reflection.decode(WW, iW), this.tZ = new mW.Decoder(this.state)) : (this.tZ = mW.Reflection.decode(WW, iW), this.state = this.tZ.state)
      }
    }, iW.getStateCallbacks = function(WW) {
      try {
        return mW.getDecoderStateCallbacks(WW.aU.tZ)
      } catch (iW) {
        return
      }
    }
  },
  10427: (WW, iW) => {
    const OW = {};
    iW.getSerializer = function(WW) {
      const iW = OW[WW];
      if (!iW) throw new Error("missing serializer: " + WW);
      return iW
    }, iW.registerSerializer = function(WW, iW) {
      OW[WW] = iW
    }
  },
  10392: (WW, iW, OW) => {
    var mW = OW(10369),
      EW = OW(10395);
    iW.H3TransportTransport = class {
      constructor(WW) {
        this.events = WW, this.isOpen = !1, this.lengthPrefixBuffer = new Uint8Array(9)
      }
      connect(WW) {
        let iW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        const OW = iW.fingerprint && {
          serverCertificateHashes: [{
            algorithm: "sha-256",
            value: new Uint8Array(iW.fingerprint).buffer
          }]
        } || void 0;
        this.wt = new WebTransport(WW, OW), this.wt.ready.then((WW => {
          console.log("WebTransport ready!", WW), this.isOpen = !0, this.unreliableReader = this.wt.datagrams.readable.getReader(), this.unreliableWriter = this.wt.datagrams.writable.getWriter();
          this.wt.incomingBidirectionalStreams.getReader().read().then((WW => {
            this.reader = WW.value.readable.getReader(), this.writer = WW.value.writable.getWriter(), this.sendSeatReservation(iW.room.roomId, iW.sessionId, iW.reconnectionToken), this.readIncomingData(), this.readIncomingUnreliableData()
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
        const iW = EW.encode.number(this.lengthPrefixBuffer, WW.length, {
            offset: 0
          }),
          OW = new Uint8Array(iW + WW.length);
        OW.set(this.lengthPrefixBuffer.subarray(0, iW), 0), OW.set(WW, iW), this.writer.write(OW)
      }
      sendUnreliable(WW) {
        const iW = EW.encode.number(this.lengthPrefixBuffer, WW.length, {
            offset: 0
          }),
          OW = new Uint8Array(iW + WW.length);
        OW.set(this.lengthPrefixBuffer.subarray(0, iW), 0), OW.set(WW, iW), this.unreliableWriter.write(OW)
      }
      close(WW, iW) {
        try {
          this.wt.close({
            closeCode: WW,
            reason: iW
          })
        } catch (OW) {
          console.error(OW)
        }
      }
      readIncomingData() {
        return mW.__awaiter(this, void 0, void 0, (function*() {
          let WW;
          for (; this.isOpen;) {
            try {
              WW = yield this.reader.read();
              const iW = WW.value,
                OW = {
                  offset: 0
                };
              do {
                const WW = EW.decode.number(iW, OW);
                this.events.onmessage({
                  data: iW.subarray(OW.offset, OW.offset + WW)
                }), OW.offset += WW
              } while (OW.offset < iW.length)
            } catch (iW) {
              -1 === iW.message.indexOf("session is closed") && console.error("H3Transport: failed to read incoming data", iW);
              break
            }
            if (WW.done) break
          }
        }))
      }
      readIncomingUnreliableData() {
        return mW.__awaiter(this, void 0, void 0, (function*() {
          let WW;
          for (; this.isOpen;) {
            try {
              WW = yield this.unreliableReader.read();
              const iW = WW.value,
                OW = {
                  offset: 0
                };
              do {
                const WW = EW.decode.number(iW, OW);
                this.events.onmessage({
                  data: iW.subarray(OW.offset, OW.offset + WW)
                }), OW.offset += WW
              } while (OW.offset < iW.length)
            } catch (iW) {
              -1 === iW.message.indexOf("session is closed") && console.error("H3Transport: failed to read incoming data", iW);
              break
            }
            if (WW.done) break
          }
        }))
      }
      sendSeatReservation(WW, iW, OW) {
        const mW = {
            offset: 0
          },
          NW = [];
        EW.encode.string(NW, WW, mW), EW.encode.string(NW, iW, mW), OW && EW.encode.string(NW, OW, mW), this.writer.write(new Uint8Array(NW).buffer)
      }
      _close() {
        this.isOpen = !1
      }
    }
  },
  10402: (WW, iW, OW) => {
    var mW = OW(10411);
    const EW = globalThis.WebSocket || mW;
    iW.WebSocketTransport = class {
      constructor(WW) {
        this.events = WW
      }
      send(WW) {
        this.ws.send(WW)
      }
      sendUnreliable(WW) {
        console.warn("colyseus.js: The WebSocket transport does not support unreliable messages")
      }
      connect(WW, iW) {
        try {
          this.ws = new EW(WW, {
            headers: iW,
            protocols: this.protocols
          })
        } catch (OW) {
          this.ws = new EW(WW, this.protocols)
        }
        this.ws.binaryType = "arraybuffer", this.ws.onopen = this.events.onopen, this.ws.onmessage = this.events.onmessage, this.ws.onclose = this.events.onclose, this.ws.onerror = this.events.onerror
      }
      close(WW, iW) {
        this.ws.close(WW, iW)
      }
      get isOpen() {
        return this.ws.readyState === EW.OPEN
      }
    }
  },
  10411: WW => {
    WW.exports = function() {
      throw new Error("ws does not work in the browser. Browser clients must use the native WebSocket object")
    }
  },
  10456: (WW, iW, OW) => {
    function mW(WW, iW) {
      iW.headers = WW.headers || {}, iW.statusMessage = WW.statusText, iW.statusCode = WW.status, iW.data = WW.response
    }

    function EW(WW, iW, OW) {
      return new Promise((function(EW, NW) {
        OW = OW || {};
        var PW, LW, cW, wW = new XMLHttpRequest,
          tW = OW.body,
          ZW = OW.headers || {};
        for (PW in OW.timeout && (wW.timeout = OW.timeout), wW.ontimeout = wW.onerror = function(WW) {
            WW.timeout = "timeout" == WW.type, NW(WW)
          }, wW.onabort = function(WW) {
            WW.aborted = !0, NW(WW)
          }, wW.open(WW, iW.href || iW), wW.onload = function() {
            for (cW = wW.getAllResponseHeaders().trim().split(/[\r\n]+/), mW(wW, wW); LW = cW.shift();) LW = LW.split(": "), wW.headers[LW.shift().toLowerCase()] = LW.join(": ");
            if ((LW = wW.headers["content-type"]) && ~LW.indexOf("application/json")) try {
              wW.data = JSON.parse(wW.data, OW.reviver)
            } catch (WW) {
              return mW(wW, WW), NW(WW)
            }(wW.status >= 400 ? NW : EW)(wW)
          }, typeof FormData < "u" && tW instanceof FormData || tW && "object" == typeof tW && (ZW["content-type"] = "application/json", tW = JSON.stringify(tW)), wW.withCredentials = !!OW.withCredentials, ZW) wW.setRequestHeader(PW, ZW[PW]);
        wW.send(tW), OW.signal && OW.signal.addEventListener("abort", (function() {
          wW.abort()
        }))
      }))
    }
    OW.r(iW), OW.d(iW, {
      del: () => cW,
      get: () => NW,
      patch: () => LW,
      post: () => PW,
      put: () => wW,
      send: () => EW
    });
    var NW = EW.bind(EW, "GET"),
      PW = EW.bind(EW, "POST"),
      LW = EW.bind(EW, "PATCH"),
      cW = EW.bind(EW, "DELETE"),
      wW = EW.bind(EW, "PUT")
  },
  10450: (WW, iW, OW) => {
    var mW, EW, NW;
    OW.r(iW), OW.d(iW, {
      ALWAYS: () => ai,
      C1: () => KW,
      DECIMAL_FIT: () => zi,
      DECIMAL_ROUND: () => ri,
      Decoder: () => ci,
      Encoder: () => Gi,
      FLOAT32_OPTIONS: () => li,
      NEVER: () => Ii,
      Packr: () => vi,
      RESERVE_START_SPACE: () => WO,
      RESET_BUFFER_MODE: () => Qi,
      REUSE_BUFFER_MODE: () => Fi,
      Unpackr: () => hW,
      addExtension: () => Ci,
      clearSource: () => Pi,
      decode: () => xi,
      decodeIter: () => iO,
      encode: () => Ri,
      encodeIter: () => OO,
      isNativeAccelerationEnabled: () => fW,
      mapsAsObjects: () => EO,
      pack: () => qi,
      roundFloat32: () => si,
      unpack: () => ti,
      unpackMultiple: () => Zi,
      useRecords: () => mO
    });
    try {
      mW = new TextDecoder
    } catch (NO) {}
    var PW = 0;
    const LW = [];
    var cW, wW, tW, ZW, xW, lW = LW,
      AW = 0,
      bW = {},
      jW = 0,
      UW = 0,
      kW = [],
      sW = {
        useRecords: !1,
        mapsAsObjects: !0
      };
    class MW {}
    const KW = new MW;
    KW.name = "MessagePack 0xC1";
    var SW, YW, yW, TW = !1,
      JW = 2;
    try {
      new Function("")
    } catch (NO) {
      JW = 1 / 0
    }
    class hW {
      constructor(WW) {
        WW && (!1 === WW.useRecords && void 0 === WW.mapsAsObjects && (WW.mapsAsObjects = !0), WW.sequential && !1 !== WW.trusted && (WW.trusted = !0, WW.structures || 0 == WW.useRecords || (WW.structures = [], WW.maxSharedStructures || (WW.maxSharedStructures = 0))), WW.structures ? WW.structures.sharedLength = WW.structures.length : WW.getStructures && ((WW.structures = []).uninitialized = !0, WW.structures.sharedLength = 0), WW.int64AsNumber && (WW.int64AsType = "number")), Object.assign(this, WW)
      }
      unpack(WW, iW) {
        if (EW) return Ni((() => (Pi(), this ? this.unpack(WW, iW) : hW.prototype.unpack.call(sW, WW, iW))));
        WW.buffer || WW.constructor !== ArrayBuffer || (WW = "undefined" !== typeof Buffer ? Buffer.from(WW) : new Uint8Array(WW)), "object" === typeof iW ? (NW = iW.end || WW.length, PW = iW.start || 0) : (PW = 0, NW = iW > -1 ? iW : WW.length), AW = 0, UW = 0, wW = null, lW = LW, tW = null, EW = WW;
        try {
          xW = WW.dataView || (WW.dataView = new DataView(WW.buffer, WW.byteOffset, WW.byteLength))
        } catch (NO) {
          if (EW = null, WW instanceof Uint8Array) throw NO;
          throw new Error("Source must be a Uint8Array or Buffer but was a " + (WW && "object" == typeof WW ? WW.constructor.name : typeof WW))
        }
        if (this instanceof hW) {
          if (bW = this, this.structures) return cW = this.structures, HW(iW);
          (!cW || cW.length > 0) && (cW = [])
        } else bW = sW, (!cW || cW.length > 0) && (cW = []);
        return HW(iW)
      }
      unpackMultiple(WW, iW) {
        let OW, mW = 0;
        try {
          TW = !0;
          let EW = WW.length,
            NW = this ? this.unpack(WW, EW) : wi.unpack(WW, EW);
          if (!iW) {
            for (OW = [NW]; PW < EW;) mW = PW, OW.push(HW());
            return OW
          }
          if (!1 === iW(NW, mW, PW)) return;
          for (; PW < EW;)
            if (mW = PW, !1 === iW(HW(), mW, PW)) return
        } catch (NO) {
          throw NO.lastPosition = mW, NO.values = OW, NO
        } finally {
          TW = !1, Pi()
        }
      }
      _mergeStructures(WW, iW) {
        YW && (WW = YW.call(this, WW)), WW = WW || [], Object.isFrozen(WW) && (WW = WW.map((WW => WW.slice(0))));
        for (let OW = 0, mW = WW.length; OW < mW; OW++) {
          let iW = WW[OW];
          iW && (iW.isShared = !0, OW >= 32 && (iW.highByte = OW - 32 >> 5))
        }
        WW.sharedLength = WW.length;
        for (let OW in iW || [])
          if (OW >= 0) {
            let mW = WW[OW],
              EW = iW[OW];
            EW && (mW && ((WW.restoreStructures || (WW.restoreStructures = []))[OW] = mW), WW[OW] = EW)
          } return this.structures = WW
      }
      decode(WW, iW) {
        return this.unpack(WW, iW)
      }
    }

    function HW(WW) {
      try {
        if (!bW.trusted && !TW) {
          let WW = cW.sharedLength || 0;
          WW < cW.length && (cW.length = WW)
        }
        let iW;
        if (bW.randomAccessStructure && EW[PW] < 64 && EW[PW] >= 32 && SW ? (iW = SW(EW, PW, NW, bW), EW = null, WW && WW.lazy || !iW || (iW = iW.toJSON()), PW = NW) : iW = uW(), tW && (PW = tW.postBundlePosition, tW = null), TW && (cW.restoreStructures = null), PW == NW) cW && cW.restoreStructures && nW(), cW = null, EW = null, ZW && (ZW = null);
        else {
          if (PW > NW) throw new Error("Unexpected end of MessagePack data");
          if (!TW) {
            let WW;
            try {
              WW = JSON.stringify(iW, ((WW, iW) => "bigint" === typeof iW ? `${iW}n` : iW)).slice(0, 100)
            } catch (NO) {
              WW = "(JSON view not available " + NO + ")"
            }
            throw new Error("Data read, but end of buffer not reached " + WW)
          }
        }
        return iW
      } catch (NO) {
        throw cW && cW.restoreStructures && nW(), Pi(), (NO instanceof RangeError || NO.message.startsWith("Unexpected end of buffer") || PW > NW) && (NO.incomplete = !0), NO
      }
    }

    function nW() {
      for (let WW in cW.restoreStructures) cW[WW] = cW.restoreStructures[WW];
      cW.restoreStructures = null
    }

    function uW() {
      let WW = EW[PW++];
      if (WW < 160) {
        if (WW < 128) {
          if (WW < 64) return WW;
          {
            let iW = cW[63 & WW] || bW.getStructures && vW()[63 & WW];
            return iW ? (iW.read || (iW.read = dW(iW, 63 & WW)), iW.read()) : WW
          }
        }
        if (WW < 144) {
          if (WW -= 128, bW.mapsAsObjects) {
            let iW = {};
            for (let OW = 0; OW < WW; OW++) {
              let WW = FW();
              "__proto__" === WW && (WW = "__proto_"), iW[WW] = uW()
            }
            return iW
          } {
            let iW = new Map;
            for (let OW = 0; OW < WW; OW++) iW.set(uW(), uW());
            return iW
          }
        } {
          WW -= 144;
          let iW = new Array(WW);
          for (let OW = 0; OW < WW; OW++) iW[OW] = uW();
          return bW.freezeData ? Object.freeze(iW) : iW
        }
      }
      if (WW < 192) {
        let iW = WW - 160;
        if (UW >= PW) return wW.slice(PW - jW, (PW += iW) - jW);
        if (0 == UW && NW < 140) {
          let WW = iW < 16 ? GW(iW) : RW(iW);
          if (null != WW) return WW
        }
        return gW(iW)
      } {
        let iW;
        switch (WW) {
          case 192:
            return null;
          case 193:
            return tW ? (iW = uW(), iW > 0 ? tW[1].slice(tW.position1, tW.position1 += iW) : tW[0].slice(tW.position0, tW.position0 -= iW)) : KW;
          case 194:
            return !1;
          case 195:
            return !0;
          case 196:
            if (iW = EW[PW++], void 0 === iW) throw new Error("Unexpected end of buffer");
            return aW(iW);
          case 197:
            return iW = xW.getUint16(PW), PW += 2, aW(iW);
          case 198:
            return iW = xW.getUint32(PW), PW += 4, aW(iW);
          case 199:
            return rW(EW[PW++]);
          case 200:
            return iW = xW.getUint16(PW), PW += 2, rW(iW);
          case 201:
            return iW = xW.getUint32(PW), PW += 4, rW(iW);
          case 202:
            if (iW = xW.getFloat32(PW), bW.useFloat32 > 2) {
              let WW = Li[(127 & EW[PW]) << 1 | EW[PW + 1] >> 7];
              return PW += 4, (WW * iW + (iW > 0 ? .5 : -.5) | 0) / WW
            }
            return PW += 4, iW;
          case 203:
            return iW = xW.getFloat64(PW), PW += 8, iW;
          case 204:
            return EW[PW++];
          case 205:
            return iW = xW.getUint16(PW), PW += 2, iW;
          case 206:
            return iW = xW.getUint32(PW), PW += 4, iW;
          case 207:
            return "number" === bW.int64AsType ? (iW = 4294967296 * xW.getUint32(PW), iW += xW.getUint32(PW + 4)) : "string" === bW.int64AsType ? iW = xW.getBigUint64(PW).toString() : "auto" === bW.int64AsType ? (iW = xW.getBigUint64(PW), iW <= BigInt(2) << BigInt(52) && (iW = Number(iW))) : iW = xW.getBigUint64(PW), PW += 8, iW;
          case 208:
            return xW.getInt8(PW++);
          case 209:
            return iW = xW.getInt16(PW), PW += 2, iW;
          case 210:
            return iW = xW.getInt32(PW), PW += 4, iW;
          case 211:
            return "number" === bW.int64AsType ? (iW = 4294967296 * xW.getInt32(PW), iW += xW.getUint32(PW + 4)) : "string" === bW.int64AsType ? iW = xW.getBigInt64(PW).toString() : "auto" === bW.int64AsType ? (iW = xW.getBigInt64(PW), iW >= BigInt(-2) << BigInt(52) && iW <= BigInt(2) << BigInt(52) && (iW = Number(iW))) : iW = xW.getBigInt64(PW), PW += 8, iW;
          case 212:
            if (iW = EW[PW++], 114 == iW) return Wi(63 & EW[PW++]);
            {
              let WW = kW[iW];
              if (WW) return WW.read ? (PW++, WW.read(uW())) : WW.noBuffer ? (PW++, WW()) : WW(EW.subarray(PW, ++PW));
              throw new Error("Unknown extension " + iW)
            }
          case 213:
            return iW = EW[PW], 114 == iW ? (PW++, Wi(63 & EW[PW++], EW[PW++])) : rW(2);
          case 214:
            return rW(4);
          case 215:
            return rW(8);
          case 216:
            return rW(16);
          case 217:
            return iW = EW[PW++], UW >= PW ? wW.slice(PW - jW, (PW += iW) - jW) : DW(iW);
          case 218:
            return iW = xW.getUint16(PW), UW >= (PW += 2) ? wW.slice(PW - jW, (PW += iW) - jW) : VW(iW);
          case 219:
            return iW = xW.getUint32(PW), UW >= (PW += 4) ? wW.slice(PW - jW, (PW += iW) - jW) : pW(iW);
          case 220:
            return iW = xW.getUint16(PW), PW += 2, XW(iW);
          case 221:
            return iW = xW.getUint32(PW), PW += 4, XW(iW);
          case 222:
            return iW = xW.getUint16(PW), PW += 2, BW(iW);
          case 223:
            return iW = xW.getUint32(PW), PW += 4, BW(iW);
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
    const oW = /^[a-zA-Z_$][a-zA-Z\d_$]*$/;

    function dW(WW, iW) {
      function OW() {
        if (OW.count++ > JW) {
          let OW = WW.read = new Function("r", "return function(){return " + (bW.freezeData ? "Object.freeze" : "") + "({" + WW.map((WW => "__proto__" === WW ? "__proto_:r()" : oW.test(WW) ? WW + ":r()" : "[" + JSON.stringify(WW) + "]:r()")).join(",") + "})}")(uW);
          return 0 === WW.highByte && (WW.read = eW(iW, WW.read)), OW()
        }
        let mW = {};
        for (let iW = 0, OW = WW.length; iW < OW; iW++) {
          let OW = WW[iW];
          "__proto__" === OW && (OW = "__proto_"), mW[OW] = uW()
        }
        return bW.freezeData ? Object.freeze(mW) : mW
      }
      return OW.count = 0, 0 === WW.highByte ? eW(iW, OW) : OW
    }
    const eW = (WW, iW) => function() {
      let OW = EW[PW++];
      if (0 === OW) return iW();
      let mW = WW < 32 ? -(WW + (OW << 5)) : WW + (OW << 5),
        NW = cW[mW] || vW()[mW];
      if (!NW) throw new Error("Record id is not defined for " + mW);
      return NW.read || (NW.read = dW(NW, WW)), NW.read()
    };

    function vW() {
      let WW = Ni((() => (EW = null, bW.getStructures())));
      return cW = bW._mergeStructures(WW, cW)
    }
    var gW = CW,
      DW = CW,
      VW = CW,
      pW = CW;
    let fW = !1;

    function CW(WW) {
      let iW;
      if (WW < 16 && (iW = GW(WW))) return iW;
      if (WW > 64 && mW) return mW.decode(EW.subarray(PW, PW += WW));
      const OW = PW + WW,
        NW = [];
      for (iW = ""; PW < OW;) {
        const WW = EW[PW++];
        if (0 === (128 & WW)) NW.push(WW);
        else if (192 === (224 & WW)) {
          const iW = 63 & EW[PW++];
          NW.push((31 & WW) << 6 | iW)
        } else if (224 === (240 & WW)) {
          const iW = 63 & EW[PW++],
            OW = 63 & EW[PW++];
          NW.push((31 & WW) << 12 | iW << 6 | OW)
        } else if (240 === (248 & WW)) {
          let iW = (7 & WW) << 18 | (63 & EW[PW++]) << 12 | (63 & EW[PW++]) << 6 | 63 & EW[PW++];
          iW > 65535 && (iW -= 65536, NW.push(iW >>> 10 & 1023 | 55296), iW = 56320 | 1023 & iW), NW.push(iW)
        } else NW.push(WW);
        NW.length >= 4096 && (iW += qW.apply(String, NW), NW.length = 0)
      }
      return NW.length > 0 && (iW += qW.apply(String, NW)), iW
    }

    function XW(WW) {
      let iW = new Array(WW);
      for (let OW = 0; OW < WW; OW++) iW[OW] = uW();
      return bW.freezeData ? Object.freeze(iW) : iW
    }

    function BW(WW) {
      if (bW.mapsAsObjects) {
        let iW = {};
        for (let OW = 0; OW < WW; OW++) {
          let WW = FW();
          "__proto__" === WW && (WW = "__proto_"), iW[WW] = uW()
        }
        return iW
      } {
        let iW = new Map;
        for (let OW = 0; OW < WW; OW++) iW.set(uW(), uW());
        return iW
      }
    }
    var qW = String.fromCharCode;

    function RW(WW) {
      let iW = PW,
        OW = new Array(WW);
      for (let mW = 0; mW < WW; mW++) {
        const WW = EW[PW++];
        if ((128 & WW) > 0) return void(PW = iW);
        OW[mW] = WW
      }
      return qW.apply(String, OW)
    }

    function GW(WW) {
      if (WW < 4) {
        if (WW < 2) {
          if (0 === WW) return "";
          {
            let WW = EW[PW++];
            return (128 & WW) > 1 ? void(PW -= 1) : qW(WW)
          }
        } {
          let iW = EW[PW++],
            OW = EW[PW++];
          if ((128 & iW) > 0 || (128 & OW) > 0) return void(PW -= 2);
          if (WW < 3) return qW(iW, OW);
          let mW = EW[PW++];
          return (128 & mW) > 0 ? void(PW -= 3) : qW(iW, OW, mW)
        }
      } {
        let iW = EW[PW++],
          OW = EW[PW++],
          mW = EW[PW++],
          NW = EW[PW++];
        if ((128 & iW) > 0 || (128 & OW) > 0 || (128 & mW) > 0 || (128 & NW) > 0) return void(PW -= 4);
        if (WW < 6) {
          if (4 === WW) return qW(iW, OW, mW, NW);
          {
            let WW = EW[PW++];
            return (128 & WW) > 0 ? void(PW -= 5) : qW(iW, OW, mW, NW, WW)
          }
        }
        if (WW < 8) {
          let LW = EW[PW++],
            cW = EW[PW++];
          if ((128 & LW) > 0 || (128 & cW) > 0) return void(PW -= 6);
          if (WW < 7) return qW(iW, OW, mW, NW, LW, cW);
          let wW = EW[PW++];
          return (128 & wW) > 0 ? void(PW -= 7) : qW(iW, OW, mW, NW, LW, cW, wW)
        } {
          let LW = EW[PW++],
            cW = EW[PW++],
            wW = EW[PW++],
            tW = EW[PW++];
          if ((128 & LW) > 0 || (128 & cW) > 0 || (128 & wW) > 0 || (128 & tW) > 0) return void(PW -= 8);
          if (WW < 10) {
            if (8 === WW) return qW(iW, OW, mW, NW, LW, cW, wW, tW);
            {
              let WW = EW[PW++];
              return (128 & WW) > 0 ? void(PW -= 9) : qW(iW, OW, mW, NW, LW, cW, wW, tW, WW)
            }
          }
          if (WW < 12) {
            let ZW = EW[PW++],
              xW = EW[PW++];
            if ((128 & ZW) > 0 || (128 & xW) > 0) return void(PW -= 10);
            if (WW < 11) return qW(iW, OW, mW, NW, LW, cW, wW, tW, ZW, xW);
            let lW = EW[PW++];
            return (128 & lW) > 0 ? void(PW -= 11) : qW(iW, OW, mW, NW, LW, cW, wW, tW, ZW, xW, lW)
          } {
            let ZW = EW[PW++],
              xW = EW[PW++],
              lW = EW[PW++],
              AW = EW[PW++];
            if ((128 & ZW) > 0 || (128 & xW) > 0 || (128 & lW) > 0 || (128 & AW) > 0) return void(PW -= 12);
            if (WW < 14) {
              if (12 === WW) return qW(iW, OW, mW, NW, LW, cW, wW, tW, ZW, xW, lW, AW);
              {
                let WW = EW[PW++];
                return (128 & WW) > 0 ? void(PW -= 13) : qW(iW, OW, mW, NW, LW, cW, wW, tW, ZW, xW, lW, AW, WW)
              }
            } {
              let bW = EW[PW++],
                jW = EW[PW++];
              if ((128 & bW) > 0 || (128 & jW) > 0) return void(PW -= 14);
              if (WW < 15) return qW(iW, OW, mW, NW, LW, cW, wW, tW, ZW, xW, lW, AW, bW, jW);
              let UW = EW[PW++];
              return (128 & UW) > 0 ? void(PW -= 15) : qW(iW, OW, mW, NW, LW, cW, wW, tW, ZW, xW, lW, AW, bW, jW, UW)
            }
          }
        }
      }
    }

    function IW() {
      let WW, iW = EW[PW++];
      if (iW < 192) WW = iW - 160;
      else switch (iW) {
        case 217:
          WW = EW[PW++];
          break;
        case 218:
          WW = xW.getUint16(PW), PW += 2;
          break;
        case 219:
          WW = xW.getUint32(PW), PW += 4;
          break;
        default:
          throw new Error("Expected string")
      }
      return CW(WW)
    }

    function aW(WW) {
      return bW.copyBuffers ? Uint8Array.prototype.slice.call(EW, PW, PW += WW) : EW.subarray(PW, PW += WW)
    }

    function rW(WW) {
      let iW = EW[PW++];
      if (kW[iW]) {
        let OW;
        return kW[iW](EW.subarray(PW, OW = PW += WW), (WW => {
          PW = WW;
          try {
            return uW()
          } finally {
            PW = OW
          }
        }))
      }
      throw new Error("Unknown extension type " + iW)
    }
    var zW = new Array(4096);

    function FW() {
      let WW = EW[PW++];
      if (!(WW >= 160 && WW < 192)) return PW--, QW(uW());
      if (WW -= 160, UW >= PW) return wW.slice(PW - jW, (PW += WW) - jW);
      if (!(0 == UW && NW < 180)) return gW(WW);
      let iW, OW = 4095 & (WW << 5 ^ (WW > 1 ? xW.getUint16(PW) : WW > 0 ? EW[PW] : 0)),
        mW = zW[OW],
        LW = PW,
        cW = PW + WW - 3,
        tW = 0;
      if (mW && mW.bytes == WW) {
        for (; LW < cW;) {
          if (iW = xW.getUint32(LW), iW != mW[tW++]) {
            LW = 1879048192;
            break
          }
          LW += 4
        }
        for (cW += 3; LW < cW;)
          if (iW = EW[LW++], iW != mW[tW++]) {
            LW = 1879048192;
            break
          } if (LW === cW) return PW = LW, mW.string;
        cW -= 3, LW = PW
      }
      for (mW = [], zW[OW] = mW, mW.bytes = WW; LW < cW;) iW = xW.getUint32(LW), mW.push(iW), LW += 4;
      for (cW += 3; LW < cW;) iW = EW[LW++], mW.push(iW);
      let ZW = WW < 16 ? GW(WW) : RW(WW);
      return mW.string = null != ZW ? ZW : gW(WW)
    }

    function QW(WW) {
      if ("string" === typeof WW) return WW;
      if ("number" === typeof WW || "boolean" === typeof WW || "bigint" === typeof WW) return WW.toString();
      if (null == WW) return WW + "";
      if (bW.allowArraysInMapKeys && Array.isArray(WW) && WW.flat().every((WW => ["string", "number", "boolean", "bigint"].includes(typeof WW)))) return WW.flat().toString();
      throw new Error("Invalid property type for record: " + typeof WW)
    }
    const Wi = (WW, iW) => {
      let OW = uW().map(QW),
        mW = WW;
      void 0 !== iW && (WW = WW < 32 ? -((iW << 5) + WW) : (iW << 5) + WW, OW.highByte = iW);
      let EW = cW[WW];
      return EW && (EW.isShared || TW) && ((cW.restoreStructures || (cW.restoreStructures = []))[WW] = EW), cW[WW] = OW, OW.read = dW(OW, mW), OW.read()
    };
    kW[0] = () => {}, kW[0].noBuffer = !0, kW[66] = WW => {
      let iW = WW.length,
        OW = BigInt(128 & WW[0] ? WW[0] - 256 : WW[0]);
      for (let mW = 1; mW < iW; mW++) OW <<= BigInt(8), OW += BigInt(WW[mW]);
      return OW
    };
    let ii = {
      Error: Error,
      TypeError: TypeError,
      ReferenceError: ReferenceError
    };
    kW[101] = () => {
      let WW = uW();
      return (ii[WW[0]] || Error)(WW[1], {
        cause: WW[2]
      })
    }, kW[105] = WW => {
      if (!1 === bW.structuredClone) throw new Error("Structured clone extension is disabled");
      let iW = xW.getUint32(PW - 4);
      ZW || (ZW = new Map);
      let OW, mW = EW[PW];
      OW = mW >= 144 && mW < 160 || 220 == mW || 221 == mW ? [] : {};
      let NW = {
        target: OW
      };
      ZW.set(iW, NW);
      let LW = uW();
      return NW.used ? Object.assign(OW, LW) : (NW.target = LW, LW)
    }, kW[112] = WW => {
      if (!1 === bW.structuredClone) throw new Error("Structured clone extension is disabled");
      let iW = xW.getUint32(PW - 4),
        OW = ZW.get(iW);
      return OW.used = !0, OW.target
    }, kW[115] = () => new Set(uW());
    const Oi = ["Int8", "Uint8", "Uint8Clamped", "Int16", "Uint16", "Int32", "Uint32", "Float32", "Float64", "BigInt64", "BigUint64"].map((WW => WW + "Array"));
    let mi = "object" === typeof globalThis ? globalThis : window;
    kW[116] = WW => {
      let iW = WW[0],
        OW = Oi[iW];
      if (!OW) {
        if (16 === iW) {
          let iW = new ArrayBuffer(WW.length - 1);
          return new Uint8Array(iW).set(WW.subarray(1)), iW
        }
        throw new Error("Could not find typed array for code " + iW)
      }
      return new mi[OW](Uint8Array.prototype.slice.call(WW, 1).buffer)
    }, kW[120] = () => {
      let WW = uW();
      return new RegExp(WW[0], WW[1])
    };
    const Ei = [];

    function Ni(WW) {
      yW && yW();
      let iW = NW,
        OW = PW,
        mW = AW,
        LW = jW,
        kW = UW,
        sW = wW,
        MW = lW,
        KW = ZW,
        SW = tW,
        YW = new Uint8Array(EW.slice(0, NW)),
        JW = cW,
        hW = cW.slice(0, cW.length),
        HW = bW,
        nW = TW,
        uW = WW();
      return NW = iW, PW = OW, AW = mW, jW = LW, UW = kW, wW = sW, lW = MW, ZW = KW, tW = SW, EW = YW, TW = nW, (cW = JW).splice(0, cW.length, ...hW), bW = HW, xW = new DataView(EW.buffer, EW.byteOffset, EW.byteLength), uW
    }

    function Pi() {
      EW = null, ZW = null, cW = null
    }
    kW[98] = WW => {
      let iW = (WW[0] << 24) + (WW[1] << 16) + (WW[2] << 8) + WW[3],
        OW = PW;
      return PW += iW - WW.length, tW = Ei, (tW = [IW(), IW()]).position0 = 0, tW.position1 = 0, tW.postBundlePosition = PW, PW = OW, uW()
    }, kW[255] = WW => 4 == WW.length ? new Date(1e3 * (16777216 * WW[0] + (WW[1] << 16) + (WW[2] << 8) + WW[3])) : 8 == WW.length ? new Date(((WW[0] << 22) + (WW[1] << 14) + (WW[2] << 6) + (WW[3] >> 2)) / 1e6 + 1e3 * (4294967296 * (3 & WW[3]) + 16777216 * WW[4] + (WW[5] << 16) + (WW[6] << 8) + WW[7])) : 12 == WW.length ? new Date(((WW[0] << 24) + (WW[1] << 16) + (WW[2] << 8) + WW[3]) / 1e6 + 1e3 * ((128 & WW[4] ? -281474976710656 : 0) + 1099511627776 * WW[6] + 4294967296 * WW[7] + 16777216 * WW[8] + (WW[9] << 16) + (WW[10] << 8) + WW[11])) : new Date("invalid");
    const Li = new Array(147);
    for (let PO = 0; PO < 256; PO++) Li[PO] = +("1e" + Math.floor(45.15 - .30103 * PO));
    const ci = hW;
    var wi = new hW({
      useRecords: !1
    });
    const ti = wi.unpack,
      Zi = wi.unpackMultiple,
      xi = wi.unpack,
      li = {
        NEVER: 0,
        ALWAYS: 1,
        DECIMAL_ROUND: 3,
        DECIMAL_FIT: 4
      };
    let Ai, bi, ji, Ui = new Float32Array(1),
      ki = new Uint8Array(Ui.buffer, 0, 4);

    function si(WW) {
      Ui[0] = WW;
      let iW = Li[(127 & ki[3]) << 1 | ki[2] >> 7];
      return (iW * WW + (WW > 0 ? .5 : -.5) | 0) / iW
    }
    try {
      Ai = new TextEncoder
    } catch (NO) {}
    const Mi = "undefined" !== typeof Buffer,
      Ki = Mi ? function(WW) {
        return Buffer.allocUnsafeSlow(WW)
      } : Uint8Array,
      Si = Mi ? Buffer : Uint8Array,
      Yi = Mi ? 4294967296 : 2144337920;
    let yi, Ti, Ji, Hi, ni, ui = 0,
      oi = null;
    const di = /[\u0080-\uFFFF]/,
      ei = Symbol("record-id");
    class vi extends hW {
      constructor(WW) {
        let iW, OW, mW, EW;
        super(WW), this.offset = 0;
        let NW = Si.prototype.utf8Write ? function(WW, iW) {
            return yi.utf8Write(WW, iW, yi.byteLength - iW)
          } : !(!Ai || !Ai.encodeInto) && function(WW, iW) {
            return Ai.encodeInto(WW, yi.subarray(iW)).written
          },
          PW = this;
        WW || (WW = {});
        let LW = WW && WW.sequential,
          cW = WW.structures || WW.saveStructures,
          wW = WW.maxSharedStructures;
        if (null == wW && (wW = cW ? 32 : 0), wW > 8160) throw new Error("Maximum maxSharedStructure is 8160");
        WW.structuredClone && void 0 == WW.moreTypes && (this.moreTypes = !0);
        let tW = WW.maxOwnStructures;
        null == tW && (tW = cW ? 32 : 64), this.structures || 0 == WW.useRecords || (this.structures = []);
        let ZW = wW > 32 || tW + wW > 64,
          xW = wW + 64,
          lW = wW + tW + 64;
        if (lW > 8256) throw new Error("Maximum maxSharedStructure + maxOwnStructure is 8192");
        let AW = [],
          bW = 0,
          jW = 0;
        this.pack = this.encode = function(WW, NW) {
          if (yi || (yi = new Ki(8192), Ji = yi.dataView || (yi.dataView = new DataView(yi.buffer, 0, 8192)), ui = 0), Hi = yi.length - 10, Hi - ui < 2048 ? (yi = new Ki(yi.length), Ji = yi.dataView || (yi.dataView = new DataView(yi.buffer, 0, yi.length)), Hi = yi.length - 10, ui = 0) : ui = ui + 7 & 2147483640, iW = ui, NW & WO && (ui += 255 & NW), EW = PW.structuredClone ? new Map : null, PW.bundleStrings && "string" !== typeof WW ? (oi = [], oi.size = 1 / 0) : oi = null, mW = PW.structures, mW) {
            mW.uninitialized && (mW = PW._mergeStructures(PW.getStructures()));
            let WW = mW.sharedLength || 0;
            if (WW > wW) throw new Error("Shared structures is larger than maximum shared structures, try increasing maxSharedStructures to " + mW.sharedLength);
            if (!mW.transitions) {
              mW.transitions = Object.create(null);
              for (let iW = 0; iW < WW; iW++) {
                let WW = mW[iW];
                if (!WW) continue;
                let OW, EW = mW.transitions;
                for (let iW = 0, mW = WW.length; iW < mW; iW++) {
                  let mW = WW[iW];
                  OW = EW[mW], OW || (OW = EW[mW] = Object.create(null)), EW = OW
                }
                EW[ei] = iW + 64
              }
              this.lastNamedStructuresLength = WW
            }
            LW || (mW.nextId = WW + 64)
          }
          let cW;
          OW && (OW = !1);
          try {
            PW.randomAccessStructure && WW && WW.constructor && WW.constructor === Object ? hW(WW) : sW(WW);
            let OW = oi;
            if (oi && fi(iW, sW, 0), EW && EW.idsToInsert) {
              let WW = EW.idsToInsert.sort(((WW, iW) => WW.offset > iW.offset ? 1 : -1)),
                mW = WW.length,
                NW = -1;
              for (; OW && mW > 0;) {
                let EW = WW[--mW].offset + iW;
                EW < OW.stringsPosition + iW && -1 === NW && (NW = 0), EW > OW.position + iW ? NW >= 0 && (NW += 6) : (NW >= 0 && (Ji.setUint32(OW.position + iW, Ji.getUint32(OW.position + iW) + NW), NW = -1), OW = OW.previous, mW++)
              }
              NW >= 0 && OW && Ji.setUint32(OW.position + iW, Ji.getUint32(OW.position + iW) + NW), ui += 6 * WW.length, ui > Hi && yW(ui), PW.offset = ui;
              let LW = function(WW, iW) {
                let OW, mW = 6 * iW.length,
                  EW = WW.length - mW;
                for (; OW = iW.pop();) {
                  let iW = OW.offset,
                    NW = OW.id;
                  WW.copyWithin(iW + mW, iW, EW), mW -= 6;
                  let PW = iW + mW;
                  WW[PW++] = 214, WW[PW++] = 105, WW[PW++] = NW >> 24, WW[PW++] = NW >> 16 & 255, WW[PW++] = NW >> 8 & 255, WW[PW++] = 255 & NW, EW = iW
                }
                return WW
              }(yi.subarray(iW, ui), WW);
              return EW = null, LW
            }
            return PW.offset = ui, NW & Fi ? (yi.start = iW, yi.end = ui, yi) : yi.subarray(iW, ui)
          } catch (NO) {
            throw cW = NO, NO
          } finally {
            if (mW && (UW(), OW && PW.saveStructures)) {
              let OW = mW.sharedLength || 0,
                EW = yi.subarray(iW, ui),
                LW = Xi(mW, PW);
              if (!cW) return !1 === PW.saveStructures(LW, LW.isCompatible) ? PW.pack(WW, NW) : (PW.lastNamedStructuresLength = OW, yi.length > 1073741824 && (yi = null), EW)
            }
            yi.length > 1073741824 && (yi = null), NW & Qi && (ui = iW)
          }
        };
        const UW = () => {
            jW < 10 && jW++;
            let WW = mW.sharedLength || 0;
            if (mW.length > WW && !LW && (mW.length = WW), bW > 1e4) mW.transitions = null, jW = 0, bW = 0, AW.length > 0 && (AW = []);
            else if (AW.length > 0 && !LW) {
              for (let WW = 0, iW = AW.length; WW < iW; WW++) AW[WW][ei] = 0;
              AW = []
            }
          },
          kW = WW => {
            var iW = WW.length;
            iW < 16 ? yi[ui++] = 144 | iW : iW < 65536 ? (yi[ui++] = 220, yi[ui++] = iW >> 8, yi[ui++] = 255 & iW) : (yi[ui++] = 221, Ji.setUint32(ui, iW), ui += 4);
            for (let OW = 0; OW < iW; OW++) sW(WW[OW])
          },
          sW = WW => {
            ui > Hi && (yi = yW(ui));
            var OW, mW = typeof WW;
            if ("string" === mW) {
              let mW, EW = WW.length;
              if (oi && EW >= 4 && EW < 4096) {
                if ((oi.size += EW) > 21760) {
                  let WW, OW, mW = (oi[0] ? 3 * oi[0].length + oi[1].length : 0) + 10;
                  ui + mW > Hi && (yi = yW(ui + mW)), oi.position ? (OW = oi, yi[ui] = 200, ui += 3, yi[ui++] = 98, WW = ui - iW, ui += 4, fi(iW, sW, 0), Ji.setUint16(WW + iW - 3, ui - iW - WW)) : (yi[ui++] = 214, yi[ui++] = 98, WW = ui - iW, ui += 4), oi = ["", ""], oi.previous = OW, oi.size = 0, oi.position = WW
                }
                let OW = di.test(WW);
                return oi[OW ? 0 : 1] += WW, yi[ui++] = 193, void sW(OW ? -EW : EW)
              }
              mW = EW < 32 ? 1 : EW < 256 ? 2 : EW < 65536 ? 3 : 5;
              let PW = 3 * EW;
              if (ui + PW > Hi && (yi = yW(ui + PW)), EW < 64 || !NW) {
                let iW, NW, PW, LW = ui + mW;
                for (iW = 0; iW < EW; iW++) NW = WW.charCodeAt(iW), NW < 128 ? yi[LW++] = NW : NW < 2048 ? (yi[LW++] = NW >> 6 | 192, yi[LW++] = 63 & NW | 128) : 55296 === (64512 & NW) && 56320 === (64512 & (PW = WW.charCodeAt(iW + 1))) ? (NW = 65536 + ((1023 & NW) << 10) + (1023 & PW), iW++, yi[LW++] = NW >> 18 | 240, yi[LW++] = NW >> 12 & 63 | 128, yi[LW++] = NW >> 6 & 63 | 128, yi[LW++] = 63 & NW | 128) : (yi[LW++] = NW >> 12 | 224, yi[LW++] = NW >> 6 & 63 | 128, yi[LW++] = 63 & NW | 128);
                OW = LW - ui - mW
              } else OW = NW(WW, ui + mW);
              OW < 32 ? yi[ui++] = 160 | OW : OW < 256 ? (mW < 2 && yi.copyWithin(ui + 2, ui + 1, ui + 1 + OW), yi[ui++] = 217, yi[ui++] = OW) : OW < 65536 ? (mW < 3 && yi.copyWithin(ui + 3, ui + 2, ui + 2 + OW), yi[ui++] = 218, yi[ui++] = OW >> 8, yi[ui++] = 255 & OW) : (mW < 5 && yi.copyWithin(ui + 5, ui + 3, ui + 3 + OW), yi[ui++] = 219, Ji.setUint32(ui, OW), ui += 4), ui += OW
            } else if ("number" === mW)
              if (WW >>> 0 === WW) WW < 32 || WW < 128 && !1 === this.useRecords || WW < 64 && !this.randomAccessStructure ? yi[ui++] = WW : WW < 256 ? (yi[ui++] = 204, yi[ui++] = WW) : WW < 65536 ? (yi[ui++] = 205, yi[ui++] = WW >> 8, yi[ui++] = 255 & WW) : (yi[ui++] = 206, Ji.setUint32(ui, WW), ui += 4);
              else if ((WW | 0) === WW) WW >= -32 ? yi[ui++] = 256 + WW : WW >= -128 ? (yi[ui++] = 208, yi[ui++] = WW + 256) : WW >= -32768 ? (yi[ui++] = 209, Ji.setInt16(ui, WW), ui += 2) : (yi[ui++] = 210, Ji.setInt32(ui, WW), ui += 4);
            else {
              let iW;
              if ((iW = this.useFloat32) > 0 && WW < 4294967296 && WW >= -2147483648) {
                let OW;
                if (yi[ui++] = 202, Ji.setFloat32(ui, WW), iW < 4 || ((OW = WW * Li[(127 & yi[ui]) << 1 | yi[ui + 1] >> 7]) | 0) === OW) return void(ui += 4);
                ui--
              }
              yi[ui++] = 203, Ji.setFloat64(ui, WW), ui += 8
            } else if ("object" === mW || "function" === mW)
              if (WW) {
                if (EW) {
                  let OW = EW.get(WW);
                  if (OW) {
                    if (!OW.id) {
                      let WW = EW.idsToInsert || (EW.idsToInsert = []);
                      OW.id = WW.push(OW)
                    }
                    return yi[ui++] = 214, yi[ui++] = 112, Ji.setUint32(ui, OW.id), void(ui += 4)
                  }
                  EW.set(WW, {
                    offset: ui - iW
                  })
                }
                let NW = WW.constructor;
                if (NW === Object) YW(WW);
                else if (NW === Array) kW(WW);
                else if (NW === Map)
                  if (this.mapAsEmptyObject) yi[ui++] = 128;
                  else {
                    (OW = WW.size) < 16 ? yi[ui++] = 128 | OW : OW < 65536 ? (yi[ui++] = 222, yi[ui++] = OW >> 8, yi[ui++] = 255 & OW) : (yi[ui++] = 223, Ji.setUint32(ui, OW), ui += 4);
                    for (let [iW, OW] of WW) sW(iW), sW(OW)
                  }
                else {
                  for (let iW = 0, OW = bi.length; iW < OW; iW++) {
                    if (WW instanceof ji[iW]) {
                      let OW = bi[iW];
                      if (OW.write) {
                        OW.type && (yi[ui++] = 212, yi[ui++] = OW.type, yi[ui++] = 0);
                        let iW = OW.write.call(this, WW);
                        return void(iW === WW ? Array.isArray(WW) ? kW(WW) : YW(WW) : sW(iW))
                      }
                      let mW, EW = yi,
                        NW = Ji,
                        PW = ui;
                      yi = null;
                      try {
                        mW = OW.pack.call(this, WW, (WW => (yi = EW, EW = null, ui += WW, ui > Hi && yW(ui), {
                          target: yi,
                          targetView: Ji,
                          position: ui - WW
                        })), sW)
                      } finally {
                        EW && (yi = EW, Ji = NW, ui = PW, Hi = yi.length - 10)
                      }
                      return void(mW && (mW.length + ui > Hi && yW(mW.length + ui), ui = Vi(mW, yi, ui, OW.type)))
                    }
                  }
                  if (Array.isArray(WW)) kW(WW);
                  else {
                    if (WW.toJSON) {
                      const iW = WW.toJSON();
                      if (iW !== WW) return sW(iW)
                    }
                    if ("function" === mW) return sW(this.writeFunction && this.writeFunction(WW));
                    YW(WW)
                  }
                }
              } else yi[ui++] = 192;
            else if ("boolean" === mW) yi[ui++] = WW ? 195 : 194;
            else if ("bigint" === mW) {
              if (WW < BigInt(1) << BigInt(63) && WW >= -(BigInt(1) << BigInt(63))) yi[ui++] = 211, Ji.setBigInt64(ui, WW);
              else if (WW < BigInt(1) << BigInt(64) && WW > 0) yi[ui++] = 207, Ji.setBigUint64(ui, WW);
              else {
                if (!this.largeBigIntToFloat) {
                  if (this.largeBigIntToString) return sW(WW.toString());
                  if (this.useBigIntExtension && WW < BigInt(2) ** BigInt(1023) && WW > -(BigInt(2) ** BigInt(1023))) {
                    yi[ui++] = 199, ui++, yi[ui++] = 66;
                    let iW, OW = [];
                    do {
                      let mW = WW & BigInt(255);
                      iW = (mW & BigInt(128)) === (WW < BigInt(0) ? BigInt(128) : BigInt(0)), OW.push(mW), WW >>= BigInt(8)
                    } while (WW !== BigInt(0) && WW !== BigInt(-1) || !iW);
                    yi[ui - 2] = OW.length;
                    for (let WW = OW.length; WW > 0;) yi[ui++] = Number(OW[--WW]);
                    return
                  }
                  throw new RangeError(WW + " was too large to fit in MessagePack 64-bit integer format, use useBigIntExtension, or set largeBigIntToFloat to convert to float-64, or set largeBigIntToString to convert to string")
                }
                yi[ui++] = 203, Ji.setFloat64(ui, Number(WW))
              }
              ui += 8
            } else {
              if ("undefined" !== mW) throw new Error("Unknown type: " + mW);
              this.encodeUndefinedAsNil ? yi[ui++] = 192 : (yi[ui++] = 212, yi[ui++] = 0, yi[ui++] = 0)
            }
          },
          MW = this.variableMapSize || this.coercibleKeyAsNumber || this.skipValues ? WW => {
            let iW;
            if (this.skipValues) {
              iW = [];
              for (let OW in WW) "function" === typeof WW.hasOwnProperty && !WW.hasOwnProperty(OW) || this.skipValues.includes(WW[OW]) || iW.push(OW)
            } else iW = Object.keys(WW);
            let OW, mW = iW.length;
            if (mW < 16 ? yi[ui++] = 128 | mW : mW < 65536 ? (yi[ui++] = 222, yi[ui++] = mW >> 8, yi[ui++] = 255 & mW) : (yi[ui++] = 223, Ji.setUint32(ui, mW), ui += 4), this.coercibleKeyAsNumber)
              for (let EW = 0; EW < mW; EW++) {
                OW = iW[EW];
                let mW = Number(OW);
                sW(isNaN(mW) ? OW : mW), sW(WW[OW])
              } else
                for (let EW = 0; EW < mW; EW++) sW(OW = iW[EW]), sW(WW[OW])
          } : WW => {
            yi[ui++] = 222;
            let OW = ui - iW;
            ui += 2;
            let mW = 0;
            for (let iW in WW)("function" !== typeof WW.hasOwnProperty || WW.hasOwnProperty(iW)) && (sW(iW), sW(WW[iW]), mW++);
            if (mW > 65535) throw new Error('Object is too large to serialize with fast 16-bit map size, use the "variableMapSize" option to serialize this object');
            yi[OW++ + iW] = mW >> 8, yi[OW + iW] = 255 & mW
          },
          KW = !1 === this.useRecords ? MW : WW.progressiveRecords && !ZW ? WW => {
            let OW, EW, NW = mW.transitions || (mW.transitions = Object.create(null)),
              PW = ui++ - iW;
            for (let LW in WW)
              if ("function" !== typeof WW.hasOwnProperty || WW.hasOwnProperty(LW)) {
                if (OW = NW[LW], OW) NW = OW;
                else {
                  let cW = Object.keys(WW),
                    wW = NW;
                  NW = mW.transitions;
                  let tW = 0;
                  for (let WW = 0, iW = cW.length; WW < iW; WW++) {
                    let iW = cW[WW];
                    OW = NW[iW], OW || (OW = NW[iW] = Object.create(null), tW++), NW = OW
                  }
                  PW + iW + 1 == ui ? (ui--, TW(NW, cW, tW)) : JW(NW, cW, PW, tW), EW = !0, NW = wW[LW]
                }
                sW(WW[LW])
              } if (!EW) {
              let OW = NW[ei];
              OW ? yi[PW + iW] = OW : JW(NW, Object.keys(WW), PW, 0)
            }
          } : WW => {
            let iW, OW = mW.transitions || (mW.transitions = Object.create(null)),
              EW = 0;
            for (let mW in WW)("function" !== typeof WW.hasOwnProperty || WW.hasOwnProperty(mW)) && (iW = OW[mW], iW || (iW = OW[mW] = Object.create(null), EW++), OW = iW);
            let NW = OW[ei];
            NW ? NW >= 96 && ZW ? (yi[ui++] = 96 + (31 & (NW -= 96)), yi[ui++] = NW >> 5) : yi[ui++] = NW : TW(OW, OW.__keys__ || Object.keys(WW), EW);
            for (let mW in WW)("function" !== typeof WW.hasOwnProperty || WW.hasOwnProperty(mW)) && sW(WW[mW])
          },
          SW = "function" == typeof this.useRecords && this.useRecords,
          YW = SW ? WW => {
            SW(WW) ? KW(WW) : MW(WW)
          } : KW,
          yW = WW => {
            let OW;
            if (WW > 16777216) {
              if (WW - iW > Yi) throw new Error("Packed buffer would be larger than maximum buffer size");
              OW = Math.min(Yi, 4096 * Math.round(Math.max((WW - iW) * (WW > 67108864 ? 1.25 : 2), 4194304) / 4096))
            } else OW = 1 + (Math.max(WW - iW << 2, yi.length - 1) >> 12) << 12;
            let mW = new Ki(OW);
            return Ji = mW.dataView || (mW.dataView = new DataView(mW.buffer, 0, OW)), WW = Math.min(WW, yi.length), yi.copy ? yi.copy(mW, 0, iW, WW) : mW.set(yi.slice(iW, WW)), ui -= iW, iW = 0, Hi = mW.length - 10, yi = mW
          },
          TW = (WW, iW, EW) => {
            let NW = mW.nextId;
            NW || (NW = 64), NW < xW && this.shouldShareStructure && !this.shouldShareStructure(iW) ? (NW = mW.nextOwnId, NW < lW || (NW = xW), mW.nextOwnId = NW + 1) : (NW >= lW && (NW = xW), mW.nextId = NW + 1);
            let PW = iW.highByte = NW >= 96 && ZW ? NW - 96 >> 5 : -1;
            WW[ei] = NW, WW.__keys__ = iW, mW[NW - 64] = iW, NW < xW ? (iW.isShared = !0, mW.sharedLength = NW - 63, OW = !0, PW >= 0 ? (yi[ui++] = 96 + (31 & NW), yi[ui++] = PW) : yi[ui++] = NW) : (PW >= 0 ? (yi[ui++] = 213, yi[ui++] = 114, yi[ui++] = 96 + (31 & NW), yi[ui++] = PW) : (yi[ui++] = 212, yi[ui++] = 114, yi[ui++] = NW), EW && (bW += jW * EW), AW.length >= tW && (AW.shift()[ei] = 0), AW.push(WW), sW(iW))
          },
          JW = (WW, OW, mW, EW) => {
            let NW = yi,
              PW = ui,
              LW = Hi,
              cW = iW;
            yi = Ti, ui = 0, iW = 0, yi || (Ti = yi = new Ki(8192)), Hi = yi.length - 10, TW(WW, OW, EW), Ti = yi;
            let wW = ui;
            if (yi = NW, ui = PW, Hi = LW, iW = cW, wW > 1) {
              let WW = ui + wW - 1;
              WW > Hi && yW(WW);
              let OW = mW + iW;
              yi.copyWithin(OW + wW, OW + 1, ui), yi.set(Ti.slice(0, wW), OW), ui = WW
            } else yi[mW + iW] = Ti[0]
          },
          hW = WW => {
            let EW = ni(WW, yi, iW, ui, mW, yW, ((WW, iW, mW) => {
              if (mW) return OW = !0;
              ui = iW;
              let EW = yi;
              return sW(WW), UW(), EW !== yi ? {
                position: ui,
                targetView: Ji,
                target: yi
              } : ui
            }), this);
            if (0 === EW) return YW(WW);
            ui = EW
          }
      }
      useBuffer(WW) {
        yi = WW, Ji = yi.dataView || (yi.dataView = new DataView(yi.buffer, yi.byteOffset, yi.byteLength)), ui = 0
      }
      set position(WW) {
        ui = WW
      }
      get position() {
        return ui
      }
      set buffer(WW) {
        yi = WW
      }
      get buffer() {
        return yi
      }
      clearSharedData() {
        this.structures && (this.structures = []), this.typedStructs && (this.typedStructs = [])
      }
    }

    function gi(WW, iW, OW, mW) {
      let EW = WW.byteLength;
      if (EW + 1 < 256) {
        var {
          target: NW,
          position: PW
        } = OW(4 + EW);
        NW[PW++] = 199, NW[PW++] = EW + 1
      } else if (EW + 1 < 65536) {
        var {
          target: NW,
          position: PW
        } = OW(5 + EW);
        NW[PW++] = 200, NW[PW++] = EW + 1 >> 8, NW[PW++] = EW + 1 & 255
      } else {
        var {
          target: NW,
          position: PW,
          targetView: LW
        } = OW(7 + EW);
        NW[PW++] = 201, LW.setUint32(PW, EW + 1), PW += 4
      }
      NW[PW++] = 116, NW[PW++] = iW, WW.buffer || (WW = new Uint8Array(WW)), NW.set(new Uint8Array(WW.buffer, WW.byteOffset, WW.byteLength), PW)
    }

    function Di(WW, iW) {
      let OW = WW.byteLength;
      var mW, EW;
      if (OW < 256) {
        var {
          target: mW,
          position: EW
        } = iW(OW + 2);
        mW[EW++] = 196, mW[EW++] = OW
      } else if (OW < 65536) {
        var {
          target: mW,
          position: EW
        } = iW(OW + 3);
        mW[EW++] = 197, mW[EW++] = OW >> 8, mW[EW++] = 255 & OW
      } else {
        var {
          target: mW,
          position: EW,
          targetView: NW
        } = iW(OW + 5);
        mW[EW++] = 198, NW.setUint32(EW, OW), EW += 4
      }
      mW.set(WW, EW)
    }

    function Vi(WW, iW, OW, mW) {
      let EW = WW.length;
      switch (EW) {
        case 1:
          iW[OW++] = 212;
          break;
        case 2:
          iW[OW++] = 213;
          break;
        case 4:
          iW[OW++] = 214;
          break;
        case 8:
          iW[OW++] = 215;
          break;
        case 16:
          iW[OW++] = 216;
          break;
        default:
          EW < 256 ? (iW[OW++] = 199, iW[OW++] = EW) : EW < 65536 ? (iW[OW++] = 200, iW[OW++] = EW >> 8, iW[OW++] = 255 & EW) : (iW[OW++] = 201, iW[OW++] = EW >> 24, iW[OW++] = EW >> 16 & 255, iW[OW++] = EW >> 8 & 255, iW[OW++] = 255 & EW)
      }
      return iW[OW++] = mW, iW.set(WW, OW), OW += EW
    }

    function fi(WW, iW, OW) {
      if (oi.length > 0) {
        Ji.setUint32(oi.position + WW, ui + OW - oi.position - WW), oi.stringsPosition = ui - WW;
        let mW = oi;
        oi = null, iW(mW[0]), iW(mW[1])
      }
    }

    function Ci(WW) {
      if (WW.Class) {
        if (!WW.pack && !WW.write) throw new Error("Extension has no pack or write function");
        if (WW.pack && !WW.type) throw new Error("Extension has no type (numeric code to identify the extension)");
        ji.unshift(WW.Class), bi.unshift(WW)
      }! function(WW) {
        WW.unpack ? kW[WW.type] = WW.unpack : kW[WW.type] = WW
      }(WW)
    }

    function Xi(WW, iW) {
      return WW.isCompatible = WW => {
        let OW = !WW || (iW.lastNamedStructuresLength || 0) === WW.length;
        return OW || iW._mergeStructures(WW), OW
      }, WW
    }
    ji = [Date, Set, Error, RegExp, ArrayBuffer, Object.getPrototypeOf(Uint8Array.prototype).constructor, MW], bi = [{
      pack(WW, iW, OW) {
        let mW = WW.getTime() / 1e3;
        if ((this.useTimestamp32 || 0 === WW.getMilliseconds()) && mW >= 0 && mW < 4294967296) {
          let {
            target: WW,
            targetView: OW,
            position: EW
          } = iW(6);
          WW[EW++] = 214, WW[EW++] = 255, OW.setUint32(EW, mW)
        } else if (mW > 0 && mW < 4294967296) {
          let {
            target: OW,
            targetView: EW,
            position: NW
          } = iW(10);
          OW[NW++] = 215, OW[NW++] = 255, EW.setUint32(NW, 4e6 * WW.getMilliseconds() + (mW / 1e3 / 4294967296 | 0)), EW.setUint32(NW + 4, mW)
        } else if (isNaN(mW)) {
          if (this.onInvalidDate) return iW(0), OW(this.onInvalidDate());
          let {
            target: WW,
            targetView: mW,
            position: EW
          } = iW(3);
          WW[EW++] = 212, WW[EW++] = 255, WW[EW++] = 255
        } else {
          let {
            target: OW,
            targetView: EW,
            position: NW
          } = iW(15);
          OW[NW++] = 199, OW[NW++] = 12, OW[NW++] = 255, EW.setUint32(NW, 1e6 * WW.getMilliseconds()), EW.setBigInt64(NW + 4, BigInt(Math.floor(mW)))
        }
      }
    }, {
      pack(WW, iW, OW) {
        if (this.setAsEmptyObject) return iW(0), OW({});
        let mW = Array.from(WW),
          {
            target: EW,
            position: NW
          } = iW(this.moreTypes ? 3 : 0);
        this.moreTypes && (EW[NW++] = 212, EW[NW++] = 115, EW[NW++] = 0), OW(mW)
      }
    }, {
      pack(WW, iW, OW) {
        let {
          target: mW,
          position: EW
        } = iW(this.moreTypes ? 3 : 0);
        this.moreTypes && (mW[EW++] = 212, mW[EW++] = 101, mW[EW++] = 0), OW([WW.name, WW.message, WW.cause])
      }
    }, {
      pack(WW, iW, OW) {
        let {
          target: mW,
          position: EW
        } = iW(this.moreTypes ? 3 : 0);
        this.moreTypes && (mW[EW++] = 212, mW[EW++] = 120, mW[EW++] = 0), OW([WW.source, WW.flags])
      }
    }, {
      pack(WW, iW) {
        this.moreTypes ? gi(WW, 16, iW) : Di(Mi ? Buffer.from(WW) : new Uint8Array(WW), iW)
      }
    }, {
      pack(WW, iW) {
        let OW = WW.constructor;
        OW !== Si && this.moreTypes ? gi(WW, Oi.indexOf(OW.name), iW) : Di(WW, iW)
      }
    }, {
      pack(WW, iW) {
        let {
          target: OW,
          position: mW
        } = iW(1);
        OW[mW] = 193
      }
    }];
    let Bi = new vi({
      useRecords: !1
    });
    const qi = Bi.pack,
      Ri = Bi.pack,
      Gi = vi,
      {
        NEVER: Ii,
        ALWAYS: ai,
        DECIMAL_ROUND: ri,
        DECIMAL_FIT: zi
      } = li,
      Fi = 512,
      Qi = 1024,
      WO = 2048;
    const iO = function(WW) {
        let iW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        if (!WW || "object" !== typeof WW) throw new Error("first argument must be an Iterable, Async Iterable, Iterator, Async Iterator, or a promise");
        const OW = new hW(iW);
        let mW;
        const EW = WW => {
          let iW;
          mW && (WW = Buffer.concat([mW, WW]), mW = void 0);
          try {
            iW = OW.unpackMultiple(WW)
          } catch (EW) {
            if (!EW.incomplete) throw EW;
            mW = WW.slice(EW.lastPosition), iW = EW.values
          }
          return iW
        };
        return "function" === typeof WW[Symbol.iterator] ? function*() {
          for (const iW of WW) yield* EW(iW)
        }() : "function" === typeof WW[Symbol.asyncIterator] ? async function*() {
          for await (const iW of WW) yield* EW(iW)
        }(): void 0
      },
      OO = function(WW) {
        let iW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        if (WW && "object" === typeof WW) {
          if ("function" === typeof WW[Symbol.iterator]) return function*(WW, iW) {
            const OW = new vi(iW);
            for (const mW of WW) yield OW.pack(mW)
          }(WW, iW);
          if ("function" === typeof WW.then || "function" === typeof WW[Symbol.asyncIterator]) return async function*(WW, iW) {
            const OW = new vi(iW);
            for await (const mW of WW) yield OW.pack(mW)
          }(WW, iW);
          throw new Error("first argument must be an Iterable, Async Iterable, Iterator, Async Iterator, or a Promise")
        }
        throw new Error("first argument must be an Iterable, Async Iterable, or a Promise for an Async Iterable")
      },
      mO = !1,
      EO = !0
  },
  10395: (WW, iW, OW) => {
    OW.r(iW), OW.d(iW, {
      $changes: () => bW,
      $childType: () => jW,
      $decoder: () => tW,
      $deleteByIndex: () => lW,
      $encoder: () => wW,
      $filter: () => ZW,
      $getByIndex: () => xW,
      $numFields: () => JW,
      $refId: () => LW,
      $track: () => cW,
      $values: () => KW,
      ArraySchema: () => Em,
      Callbacks: () => NE,
      ChangeTree: () => oO,
      CollectionSchema: () => Lm,
      Decoder: () => zm,
      Encoder: () => Gm,
      FieldBuilder: () => tm,
      MapSchema: () => Pm,
      Metadata: () => ri,
      OPERATION: () => EW,
      Reflection: () => iE,
      ReflectionField: () => Qm,
      ReflectionType: () => WE,
      Root: () => dm,
      Schema: () => um,
      SetSchema: () => cm,
      StateCallbackStrategy: () => EE,
      StateView: () => pm,
      StreamSchema: () => wm,
      TypeContext: () => Xi,
      createPool: () => LE,
      decode: () => si,
      decodeKeyValueOperation: () => FO,
      decodeSchemaOperation: () => zO,
      defineCustomTypes: () => Yi,
      defineTypes: () => hm,
      deprecated: () => Tm,
      dumpChanges: () => nm,
      encode: () => ii,
      encodeArray: () => fO,
      encodeIndexedEntry: () => VO,
      encodeKeyValueOperation: () => pO,
      encodeMapEntry: () => DO,
      encodeSchemaOperation: () => gO,
      MA: () => Um,
      fullStateOnly: () => Km,
      getDecoderStateCallbacks: () => OE,
      getEncodeDescriptor: () => OO,
      getRawChangesCallback: () => mE,
      isBuilder: () => Zm,
      patchOnly: () => Mm,
      registerType: () => Si,
      schema: () => Hm,
      t: () => bm,
      type: () => Sm,
      unreliable: () => sm,
      view: () => km
    });
    const mW = 255;
    var EW;

    function NW(WW) {
      Object.defineProperty(WW, Symbol.metadata, {
        value: void 0,
        writable: !0,
        configurable: !0,
        enumerable: !1
      })
    }! function(WW) {
      WW[WW.ADD = 128] = "ADD", WW[WW.REPLACE = 0] = "REPLACE", WW[WW.DELETE = 64] = "DELETE", WW[WW.DELETE_AND_MOVE = 96] = "DELETE_AND_MOVE", WW[WW.MOVE_AND_ADD = 160] = "MOVE_AND_ADD", WW[WW.DELETE_AND_ADD = 192] = "DELETE_AND_ADD", WW[WW.CLEAR = 10] = "CLEAR", WW[WW.REVERSE = 15] = "REVERSE", WW[WW.MOVE = 32] = "MOVE", WW[WW.DELETE_BY_REFID = 33] = "DELETE_BY_REFID", WW[WW.ADD_BY_REFID = 129] = "ADD_BY_REFID"
    }(EW || (EW = {})), Symbol.metadata ??= Symbol.for("Symbol.metadata");
    const PW = "undefined" !== typeof globalThis ? globalThis : "undefined" !== typeof global ? global : "undefined" !== typeof self ? self : "undefined" !== typeof window ? window : {};
    if ("function" === typeof Symbol && "function" !== typeof Symbol.for) {
      const WW = "colyseus.symbolRegistry",
        iW = PW[WW] || (PW[WW] = Object.create(null));
      Symbol.for = function(WW) {
        return iW[WW] || (iW[WW] = Symbol(WW))
      }, Symbol.keyFor = function(WW) {
        for (const OW in iW)
          if (iW[OW] === WW) return OW
      }
    }
    const LW = Symbol.for("$refId"),
      cW = "~track",
      wW = "~encoder",
      tW = "~decoder",
      ZW = "~filter",
      xW = "~getByIndex",
      lW = "~deleteByIndex",
      AW = "~resyncPrune",
      bW = Symbol.for("$changes"),
      jW = Symbol.for("$childType"),
      UW = Symbol.for("$proxyTarget"),
      kW = "~onEncodeEnd",
      sW = "~reset",
      MW = "~onDecodeEnd",
      KW = Symbol.for("$values"),
      SW = "~builder",
      YW = "~descriptors",
      yW = "~__encodeDescriptor",
      TW = "~encoders",
      JW = "~__numFields",
      hW = "~__refTypeFieldIndexes",
      HW = "~__viewFieldIndexes",
      nW = "$__fieldIndexesByViewTag",
      uW = "~__unreliableFieldIndexes",
      oW = "~__patchOnlyFieldIndexes",
      dW = "~__fullSyncSkipIndexes",
      eW = "~__fullStateOnlyFieldIndexes",
      vW = "~__streamFieldIndexes",
      gW = "~__streamPriorities";
    let DW;
    try {
      DW = new TextEncoder
    } catch (cE) {}
    const VW = new ArrayBuffer(8),
      pW = new Int32Array(VW),
      fW = new Float32Array(VW),
      CW = new Float64Array(VW),
      XW = new BigInt64Array(VW),
      BW = "undefined" !== typeof Buffer && Buffer.byteLength ? Buffer.byteLength : function(WW, iW) {
        for (var OW = 0, mW = 0, EW = 0, NW = WW.length; EW < NW; EW++)(OW = WW.charCodeAt(EW)) < 128 ? mW += 1 : OW < 2048 ? mW += 2 : OW < 55296 || OW >= 57344 ? mW += 3 : (EW++, mW += 4);
        return mW
      };

    function qW(WW, iW, OW) {
      for (var mW = 0, EW = 0, NW = iW.length; EW < NW; EW++)(mW = iW.charCodeAt(EW)) < 128 ? WW[OW.offset++] = mW : mW < 2048 ? (WW[OW.offset] = 192 | mW >> 6, WW[OW.offset + 1] = 128 | 63 & mW, OW.offset += 2) : mW < 55296 || mW >= 57344 ? (WW[OW.offset] = 224 | mW >> 12, WW[OW.offset + 1] = 128 | mW >> 6 & 63, WW[OW.offset + 2] = 128 | 63 & mW, OW.offset += 3) : (EW++, mW = 65536 + ((1023 & mW) << 10 | 1023 & iW.charCodeAt(EW)), WW[OW.offset] = 240 | mW >> 18, WW[OW.offset + 1] = 128 | mW >> 12 & 63, WW[OW.offset + 2] = 128 | mW >> 6 & 63, WW[OW.offset + 3] = 128 | 63 & mW, OW.offset += 4)
    }

    function RW(WW, iW, OW) {
      WW[OW.offset++] = 255 & iW
    }

    function GW(WW, iW, OW) {
      WW[OW.offset++] = 255 & iW, WW[OW.offset++] = iW >> 8 & 255
    }

    function IW(WW, iW, OW) {
      WW[OW.offset++] = 255 & iW, WW[OW.offset++] = iW >> 8 & 255
    }

    function aW(WW, iW, OW) {
      WW[OW.offset++] = 255 & iW, WW[OW.offset++] = iW >> 8 & 255, WW[OW.offset++] = iW >> 16 & 255, WW[OW.offset++] = iW >> 24 & 255
    }

    function rW(WW, iW, OW) {
      const mW = iW >> 24,
        EW = iW >> 16,
        NW = iW >> 8,
        PW = iW;
      WW[OW.offset++] = 255 & PW, WW[OW.offset++] = 255 & NW, WW[OW.offset++] = 255 & EW, WW[OW.offset++] = 255 & mW
    }

    function zW(WW, iW, OW) {
      const mW = Math.floor(iW / Math.pow(2, 32));
      rW(WW, iW >>> 0, OW), rW(WW, mW, OW)
    }

    function FW(WW, iW, OW) {
      const mW = iW / Math.pow(2, 32) | 0;
      rW(WW, iW >>> 0, OW), rW(WW, mW, OW)
    }

    function QW(WW, iW, OW) {
      fW[0] = iW, aW(WW, pW[0], OW)
    }

    function Wi(WW, iW, OW) {
      CW[0] = iW, aW(WW, pW[0], OW), aW(WW, pW[1], OW)
    }
    const ii = {
        int8: RW,
        uint8: function(WW, iW, OW) {
          WW[OW.offset++] = 255 & iW
        },
        int16: GW,
        uint16: IW,
        int32: aW,
        uint32: rW,
        int64: zW,
        uint64: FW,
        bigint64: function(WW, iW, OW) {
          XW[0] = BigInt.asIntN(64, iW), aW(WW, pW[0], OW), aW(WW, pW[1], OW)
        },
        biguint64: function(WW, iW, OW) {
          XW[0] = BigInt.asIntN(64, iW), aW(WW, pW[0], OW), aW(WW, pW[1], OW)
        },
        float32: QW,
        float64: Wi,
        boolean: function(WW, iW, OW) {
          WW[OW.offset++] = iW ? 1 : 0
        },
        string: function(WW, iW, OW) {
          iW || (iW = "");
          let mW = BW(iW, "utf8"),
            EW = 0;
          if (mW < 32) WW[OW.offset++] = 160 | mW, EW = 1;
          else if (mW < 256) WW[OW.offset++] = 217, WW[OW.offset++] = mW, EW = 2;
          else if (mW < 65536) WW[OW.offset++] = 218, IW(WW, mW, OW), EW = 3;
          else {
            if (!(mW < 4294967296)) throw new Error("String too long");
            WW[OW.offset++] = 219, rW(WW, mW, OW), EW = 5
          }
          return qW(WW, iW, OW), EW + mW
        },
        number: function WW(iW, OW, mW) {
          return isNaN(OW) ? WW(iW, 0, mW) : isFinite(OW) ? OW !== (0 | OW) ? Math.abs(OW) <= 34028235e31 && (fW[0] = OW, Math.abs(Math.abs(fW[0]) - Math.abs(OW)) < 1e-4) ? (iW[mW.offset++] = 202, QW(iW, OW, mW), 5) : (iW[mW.offset++] = 203, Wi(iW, OW, mW), 9) : OW >= 0 ? OW < 128 ? (iW[mW.offset++] = 255 & OW, 1) : OW < 256 ? (iW[mW.offset++] = 204, iW[mW.offset++] = 255 & OW, 2) : OW < 65536 ? (iW[mW.offset++] = 205, IW(iW, OW, mW), 3) : OW < 4294967296 ? (iW[mW.offset++] = 206, rW(iW, OW, mW), 5) : (iW[mW.offset++] = 207, FW(iW, OW, mW), 9) : OW >= -32 ? (iW[mW.offset++] = 224 | OW + 32, 1) : OW >= -128 ? (iW[mW.offset++] = 208, RW(iW, OW, mW), 2) : OW >= -32768 ? (iW[mW.offset++] = 209, GW(iW, OW, mW), 3) : OW >= -2147483648 ? (iW[mW.offset++] = 210, aW(iW, OW, mW), 5) : (iW[mW.offset++] = 211, zW(iW, OW, mW), 9) : WW(iW, OW > 0 ? Number.MAX_SAFE_INTEGER : -Number.MAX_SAFE_INTEGER, mW)
        },
        utf8Write: qW,
        utf8Length: BW
      },
      Oi = new ArrayBuffer(8),
      mi = new Int32Array(Oi),
      Ei = new Float32Array(Oi),
      Ni = new Float64Array(Oi),
      Pi = new BigUint64Array(Oi),
      Li = new BigInt64Array(Oi);

    function ci(WW, iW, OW) {
      OW > WW.length - iW.offset && (OW = WW.length - iW.offset);
      for (var mW = "", EW = 0, NW = iW.offset, PW = iW.offset + OW; NW < PW; NW++) {
        var LW = WW[NW];
        if (0 !== (128 & LW))
          if (192 !== (224 & LW))
            if (224 !== (240 & LW)) {
              if (240 !== (248 & LW)) {
                console.error("decode.utf8Read(): Invalid byte " + LW + " at offset " + NW + ". Skip to end of string: " + (iW.offset + OW));
                break
              }(EW = (7 & LW) << 18 | (63 & WW[++NW]) << 12 | (63 & WW[++NW]) << 6 | 63 & WW[++NW]) >= 65536 ? (EW -= 65536, mW += String.fromCharCode(55296 + (EW >>> 10), 56320 + (1023 & EW))) : mW += String.fromCharCode(EW)
            } else mW += String.fromCharCode((15 & LW) << 12 | (63 & WW[++NW]) << 6 | 63 & WW[++NW]);
        else mW += String.fromCharCode((31 & LW) << 6 | 63 & WW[++NW]);
        else mW += String.fromCharCode(LW)
      }
      return iW.offset += OW, mW
    }

    function wi(WW, iW) {
      return ti(WW, iW) << 24 >> 24
    }

    function ti(WW, iW) {
      return WW[iW.offset++]
    }

    function Zi(WW, iW) {
      return xi(WW, iW) << 16 >> 16
    }

    function xi(WW, iW) {
      return WW[iW.offset++] | WW[iW.offset++] << 8
    }

    function li(WW, iW) {
      return WW[iW.offset++] | WW[iW.offset++] << 8 | WW[iW.offset++] << 16 | WW[iW.offset++] << 24
    }

    function Ai(WW, iW) {
      return li(WW, iW) >>> 0
    }

    function bi(WW, iW) {
      return mi[0] = li(WW, iW), Ei[0]
    }

    function ji(WW, iW) {
      return mi[0] = li(WW, iW), mi[1] = li(WW, iW), Ni[0]
    }

    function Ui(WW, iW) {
      const OW = Ai(WW, iW);
      return li(WW, iW) * Math.pow(2, 32) + OW
    }

    function ki(WW, iW) {
      const OW = Ai(WW, iW);
      return Ai(WW, iW) * Math.pow(2, 32) + OW
    }
    const si = {
        utf8Read: ci,
        int8: wi,
        uint8: ti,
        int16: Zi,
        uint16: xi,
        int32: li,
        uint32: Ai,
        float32: bi,
        float64: ji,
        int64: Ui,
        uint64: ki,
        bigint64: function(WW, iW) {
          return mi[0] = li(WW, iW), mi[1] = li(WW, iW), Li[0]
        },
        biguint64: function(WW, iW) {
          return mi[0] = li(WW, iW), mi[1] = li(WW, iW), Pi[0]
        },
        boolean: function(WW, iW) {
          return ti(WW, iW) > 0
        },
        string: function(WW, iW) {
          const OW = WW[iW.offset++];
          let mW;
          return OW < 192 ? mW = 31 & OW : 217 === OW ? mW = ti(WW, iW) : 218 === OW ? mW = xi(WW, iW) : 219 === OW && (mW = Ai(WW, iW)), ci(WW, iW, mW)
        },
        number: function(WW, iW) {
          const OW = WW[iW.offset++];
          return OW < 128 ? OW : 202 === OW ? bi(WW, iW) : 203 === OW ? ji(WW, iW) : 204 === OW ? ti(WW, iW) : 205 === OW ? xi(WW, iW) : 206 === OW ? Ai(WW, iW) : 207 === OW ? ki(WW, iW) : 208 === OW ? wi(WW, iW) : 209 === OW ? Zi(WW, iW) : 210 === OW ? li(WW, iW) : 211 === OW ? Ui(WW, iW) : OW > 223 ? -1 * (255 - OW + 1) : void 0
        },
        stringCheck: function(WW, iW) {
          const OW = WW[iW.offset];
          return OW < 192 && OW > 160 || 217 === OW || 218 === OW || 219 === OW
        }
      },
      Mi = {},
      Ki = new Map;

    function Si(WW, iW) {
      iW.constructor && (Object.prototype.hasOwnProperty.call(iW, "constructor") && null == iW.constructor[Symbol.metadata] && NW(iW.constructor), Ki.set(iW.constructor, WW), Mi[WW] = iW), iW.encode && (ii[WW] = iW.encode), iW.decode && (si[WW] = iW.decode)
    }

    function Yi(WW) {
      for (const iW in WW) Si(iW, WW[iW]);
      return WW => Sm(WW)
    }
    const yi = "ArraySchema does not support streaming \u2014 positional ops (splice / unshift / reverse) shift subsequent indexes, so holding ADDs back for a later tick under `maxPerTick` would desync the decoder. Use `t.stream(X)` (stable monotonic positions) or `t.map(X).stream()` (stable keys) instead.";

    function Ti() {
      return {
        pendingByView: new Map,
        sentByView: new Map,
        broadcastPending: new Set,
        sentBroadcast: new Set,
        broadcastDeletes: new Set,
        maxPerTick: 32
      }
    }

    function Ji(WW) {
      return WW._stream ??= Ti()
    }

    function Hi(WW, iW, OW) {
      0 === iW.activeViews.size && Ji(WW).broadcastPending.add(OW)
    }

    function ni(WW, iW, OW, mW) {
      const NW = WW._stream;
      if (void 0 === NW) return !0;
      let PW = !1;
      return NW.broadcastPending.delete(mW) ? PW = !0 : NW.sentBroadcast.delete(mW) && NW.broadcastDeletes.add(mW), iW.forEachActiveView((WW => {
        const iW = NW.pendingByView.get(WW.id);
        if (iW?.has(mW)) return iW.delete(mW), void(PW = !0);
        const LW = NW.sentByView.get(WW.id);
        if (LW?.has(mW)) {
          LW.delete(mW);
          let iW = WW.changes.get(OW);
          void 0 === iW && (iW = new Map, WW.changes.set(OW, iW)), iW.set(mW, EW.DELETE)
        }
      })), PW
    }

    function ui(WW, iW) {
      const OW = WW._stream?.pendingByView;
      if (void 0 === OW) return !1;
      for (const [mW, EW] of OW)
        if (EW.size > 0 && void 0 !== iW.activeViews.get(mW)?.deref()) return !0;
      return !1
    }

    function oi(WW) {
      const iW = WW._stream;
      return void 0 !== iW && (iW.broadcastPending.size > 0 || iW.broadcastDeletes.size > 0)
    }

    function di(WW, iW, OW) {
      const mW = Ji(WW);
      let EW = mW.pendingByView.get(iW);
      void 0 === EW && (EW = new Set, mW.pendingByView.set(iW, EW)), EW.add(OW)
    }

    function ei(WW, iW) {
      const OW = WW._stream;
      void 0 !== OW && (OW.pendingByView.delete(iW), OW.sentByView.delete(iW), OW.priorityByView?.delete(iW))
    }
    const vi = {
      8: "uint8",
      16: "uint16",
      32: "uint32"
    };

    function gi(WW) {
      if (null == WW || "object" !== typeof WW) throw new Error("t.quantized(): options object with { min, max } is required.");
      const {
        min: iW,
        max: OW
      } = WW;
      if ("number" !== typeof iW || "number" !== typeof OW || !(OW > iW) || !Number.isFinite(iW) || !Number.isFinite(OW)) throw new Error(`t.quantized(): require finite min < max (got min=${iW}, max=${OW}).`);
      const mW = WW.bits ?? 16;
      if (8 !== mW && 16 !== mW && 32 !== mW) throw new Error(`t.quantized(): bits must be 8, 16 or 32 (got ${mW}).`);
      const EW = WW.mode ?? "clamp";
      if ("clamp" !== EW && "wrap" !== EW) throw new Error(`t.quantized(): mode must be "clamp" or "wrap" (got ${JSON.stringify(EW)}).`);
      const NW = "wrap" === EW,
        PW = Math.pow(2, mW);
      return {
        min: iW,
        max: OW,
        bits: mW,
        wrap: NW,
        wire: vi[mW],
        range: OW - iW,
        span: NW ? PW : iW === -OW ? PW - 2 : PW - 1
      }
    }

    function Di(WW) {
      return null !== WW && "object" === typeof WW && void 0 !== WW.quantized
    }

    function Vi(WW, iW) {
      if (WW.wrap) {
        if (!Number.isFinite(iW)) return 0;
        const OW = WW.range;
        let mW = (iW - WW.min) % OW;
        mW < 0 && (mW += OW);
        const EW = WW.span;
        return Math.floor(mW / OW * EW + .5) % EW
      }
      if (iW !== iW) return 0;
      const OW = iW < WW.min ? WW.min : iW > WW.max ? WW.max : iW;
      return Math.floor((OW - WW.min) / WW.range * WW.span + .5)
    }

    function fi(WW, iW) {
      return WW.min + iW / WW.span * WW.range
    }

    function Ci(WW) {
      const iW = ii[WW.wire];
      return (OW, mW, EW) => iW(OW, Vi(WW, mW), EW)
    }
    class Xi {
      types = {};
      schemas = new Map;
      hasFilters = !1;
      static inheritedTypes = new WeakMap;
      static cachedContexts = new WeakMap;
      static register(WW) {
        const iW = Object.getPrototypeOf(WW);
        if (iW !== um) {
          let OW = Xi.inheritedTypes.get(iW);
          OW || (OW = new Set, Xi.inheritedTypes.set(iW, OW)), OW.add(WW)
        }
      }
      static cache(WW) {
        let iW = Xi.cachedContexts.get(WW);
        return iW || (iW = new Xi(WW), Xi.cachedContexts.set(WW, iW)), iW
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
        let iW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.schemas.size;
        return !this.schemas.has(WW) && (this.types[iW] = WW, null == WW[Symbol.metadata] && ri.initialize(WW), this.schemas.set(WW, iW), !0)
      }
      getTypeId(WW) {
        return this.schemas.get(WW)
      }
      discoverTypes(WW) {
        if (!this.add(WW)) return;
        Xi.inheritedTypes.get(WW)?.forEach((WW => {
          this.discoverTypes(WW)
        }));
        let iW = WW;
        for (;
          (iW = Object.getPrototypeOf(iW)) && iW !== um && iW !== Function.prototype;) this.discoverTypes(iW);
        const OW = WW[Symbol.metadata];
        (OW[HW] || OW[vW]) && (this.hasFilters = !0);
        for (const mW in OW) {
          const WW = OW[mW].type;
          if ("string" !== typeof WW && !Di(WW))
            if ("function" === typeof WW) this.discoverTypes(WW);
            else {
              const iW = Object.values(WW)[0];
              if ("string" === typeof iW) continue;
              this.discoverTypes(iW)
            }
        }
      }
      debug() {
        return `TypeContext ->\n\tSchema types: ${this.schemas.size}\n\thasFilters: ${this.hasFilters}`
      }
    }

    function Bi(WW) {
      const iW = Ri(WW);
      return iW ? {
        complexTypeKlass: Mi[iW],
        childType: WW[iW]
      } : {
        complexTypeKlass: !1,
        childType: WW
      }
    }

    function qi(WW, iW) {
      const OW = Gi(WW),
        mW = Ri(OW),
        EW = mW && Ri(OW[mW]);
      if (EW) throw new Error(`${iW?`${iW}: `:""}@colyseus/schema: nested collections are not supported ("${mW}" of "${EW}"). Collections can only hold primitive types or Schema classes, wrap the inner ${EW} in a Schema class.`);
      return OW
    }

    function Ri(WW) {
      return "object" === typeof WW && null !== WW ? Object.keys(WW).find((WW => void 0 !== Mi[WW])) : void 0
    }

    function Gi(WW) {
      if ("object" !== typeof WW || null === WW) return WW;
      if (Array.isArray(WW)) return {
        array: Gi(WW[0])
      };
      const iW = function(WW) {
        const iW = Object.keys(WW),
          OW = iW.filter((WW => /\d+/.test(WW)));
        if (OW.length > 0 && OW.length === iW.length / 2 && WW[WW[OW[0]]] == OW[0]) return "number";
        if (iW.length > 0 && iW.every((iW => WW[iW] === iW))) return "string"
      }(WW);
      if (iW) return iW;
      if (Di(WW)) return "string" === typeof WW.quantized.wire ? WW : {
        quantized: gi(WW.quantized)
      };
      if (void 0 !== WW.type) return Gi(WW.type);
      const OW = Ri(WW);
      return OW && (WW[OW] = Gi(WW[OW])), WW
    }
    const Ii = [hW, uW, oW, dW, eW, vW, TW];

    function ai(WW, iW, OW) {
      WW[iW] || Object.defineProperty(WW, iW, {
        value: [],
        enumerable: !1,
        configurable: !0,
        writable: !0
      }), WW[iW].push(OW)
    }
    const ri = {
        addField(WW, iW, OW, mW, EW) {
          if (iW >= 63) throw new Error(`Can't define field '${OW}'.\nSchema instances may only have up to 63 fields.`);
          WW[iW] = Object.assign(WW[iW] || {}, {
            type: mW,
            index: iW,
            name: OW
          }), Object.defineProperty(WW, YW, {
            value: WW[YW] || {},
            enumerable: !1,
            configurable: !0
          }), WW[YW][OW] = EW || {
            value: void 0,
            writable: !0,
            enumerable: !0,
            configurable: !0
          }, Object.defineProperty(WW, JW, {
            value: iW,
            enumerable: !1,
            configurable: !0
          }), Object.defineProperty(WW, OW, {
            value: iW,
            enumerable: !1,
            configurable: !0
          }), "string" === typeof WW[iW].type || Di(WW[iW].type) || (void 0 === WW[hW] && Object.defineProperty(WW, hW, {
            value: [],
            enumerable: !1,
            configurable: !0
          }), WW[hW].push(iW));
          const NW = WW[iW].type;
          if (NW && "object" === typeof NW && void 0 !== NW.stream) {
            if (void 0 !== NW.array) throw new Error(yi);
            WW[iW].stream = !0, WW[vW] || Object.defineProperty(WW, vW, {
              value: [],
              enumerable: !1,
              configurable: !0,
              writable: !0
            }), WW[vW].includes(iW) || WW[vW].push(iW);
            const EW = mW?.priority;
            "function" === typeof EW && ri.setStreamPriority(WW, OW, EW)
          }
        },
        setTag(WW, iW, OW) {
          const mW = WW[iW];
          if (WW[mW].tag = OW, WW[HW] || (Object.defineProperty(WW, HW, {
              value: [],
              enumerable: !1,
              configurable: !0
            }), Object.defineProperty(WW, nW, {
              value: {},
              enumerable: !1,
              configurable: !0
            })), WW[HW].push(mW), OW < 0) WW[nW][OW] || (WW[nW][OW] = []), WW[nW][OW].push(mW);
          else
            for (let EW = OW; EW > 0; EW &= EW - 1) {
              const iW = EW & -EW;
              WW[nW][iW] || (WW[nW][iW] = []), WW[nW][iW].push(mW)
            }
        },
        setUnreliable(WW, iW) {
          const OW = WW[iW];
          if ("string" !== typeof WW[OW].type) throw new Error(`@unreliable cannot be applied to ref-type field "${iW}". For ref-type fields, mark each primitive sub-field with @unreliable instead. See README "Limitations and best practices".`);
          WW[OW].unreliable = !0, WW[uW] || Object.defineProperty(WW, uW, {
            value: [],
            enumerable: !1,
            configurable: !0,
            writable: !0
          }), WW[uW].push(OW)
        },
        setPatchOnly(WW, iW) {
          const OW = WW[iW];
          if (WW[OW].fullStateOnly) throw new Error(`field "${iW}" cannot be both patchOnly and fullStateOnly \u2014 those are the only two delivery channels, so the field would never reach a client.`);
          WW[OW].patchOnly = !0, ai(WW, oW, OW), ai(WW, dW, OW)
        },
        setDeprecated(WW, iW) {
          const OW = WW[iW];
          WW[OW].deprecated = !0, ai(WW, dW, OW), Object.defineProperty(WW, OW, {
            value: WW[OW],
            enumerable: !1,
            configurable: !0
          })
        },
        setFullStateOnly(WW, iW) {
          const OW = WW[iW];
          if (WW[OW].patchOnly) throw new Error(`field "${iW}" cannot be both patchOnly and fullStateOnly \u2014 those are the only two delivery channels, so the field would never reach a client.`);
          WW[OW].fullStateOnly = !0, ai(WW, eW, OW)
        },
        setStream(WW, iW) {
          const OW = WW[iW];
          WW[OW].stream = !0, WW[vW] || Object.defineProperty(WW, vW, {
            value: [],
            enumerable: !1,
            configurable: !0,
            writable: !0
          }), WW[vW].push(OW)
        },
        setStreamPriority(WW, iW, OW) {
          const mW = WW[iW];
          WW[gW] || Object.defineProperty(WW, gW, {
            value: {},
            enumerable: !1,
            configurable: !0,
            writable: !0
          }), WW[gW][mW] = OW
        },
        getStreamPriority: (WW, iW) => WW?.[gW]?.[iW],
        defineField(WW, iW, OW, mW, EW) {
          const NW = qi(EW, `${WW.name}.${mW}`),
            {
              complexTypeKlass: PW,
              childType: LW
            } = Bi(NW);
          ri.addField(iW, OW, mW, NW, ym(mW, OW, LW, PW)), iW[YW][mW] && Object.defineProperty(WW.prototype, mW, iW[YW][mW]), ("string" === typeof NW || Di(NW)) && (iW[TW] || Object.defineProperty(iW, TW, {
            value: [],
            enumerable: !1,
            configurable: !0,
            writable: !0
          }), iW[TW][OW] = "string" === typeof NW ? ii[NW] : Ci(NW.quantized))
        },
        setFields(WW, iW) {
          const OW = WW.prototype.constructor;
          Xi.register(OW);
          const mW = Object.getPrototypeOf(OW),
            EW = mW && mW[Symbol.metadata],
            NW = ri.initialize(OW);
          OW[cW] || (OW[cW] = um[cW]), OW[wW] || (OW[wW] = um[wW]), OW[tW] || (OW[tW] = um[tW]), OW.prototype.toJSON || (OW.prototype.toJSON = um.prototype.toJSON);
          let PW = NW[JW] ?? (EW && EW[JW]) ?? -1;
          PW++, NW[TW] || Object.defineProperty(NW, TW, {
            value: EW?.[TW] ? [...EW[TW]] : [],
            enumerable: !1,
            configurable: !0,
            writable: !0
          });
          for (const LW in iW) {
            if (void 0 !== NW[LW]) throw new Error(`@colyseus/schema: Duplicate '${LW}' definition on '${OW.name||"(anonymous)"}'.`);
            ri.defineField(OW, NW, PW, LW, iW[LW]), PW++
          }
          return WW
        },
        isDeprecated: (WW, iW) => !0 === WW[iW].deprecated,
        initialize(WW) {
          const iW = Object.getPrototypeOf(WW),
            OW = iW[Symbol.metadata];
          let mW = WW[Symbol.metadata] ?? Object.create(null);
          if (iW !== um && mW === OW && (mW = Object.create(null), OW)) {
            Object.setPrototypeOf(mW, OW), Object.defineProperty(mW, JW, {
              value: OW[JW],
              enumerable: !1,
              configurable: !0,
              writable: !0
            }), void 0 !== OW[HW] && (Object.defineProperty(mW, HW, {
              value: [...OW[HW]],
              enumerable: !1,
              configurable: !0,
              writable: !0
            }), Object.defineProperty(mW, nW, {
              value: {
                ...OW[nW]
              },
              enumerable: !1,
              configurable: !0,
              writable: !0
            }));
            for (const WW of Ii) {
              const iW = OW[WW];
              void 0 !== iW && Object.defineProperty(mW, WW, {
                value: [...iW],
                enumerable: !1,
                configurable: !0,
                writable: !0
              })
            }
            Object.defineProperty(mW, YW, {
              value: {
                ...OW[YW]
              },
              enumerable: !1,
              configurable: !0,
              writable: !0
            })
          }
          return Object.defineProperty(WW, Symbol.metadata, {
            value: mW,
            writable: !1,
            configurable: !0
          }), mW
        },
        isValidInstance: WW => WW.constructor[Symbol.metadata] && Object.prototype.hasOwnProperty.call(WW.constructor[Symbol.metadata], JW),
        getFields(WW) {
          const iW = WW[Symbol.metadata],
            OW = {};
          for (let mW = 0; mW <= iW[JW]; mW++) OW[iW[mW].name] = iW[mW].type;
          return OW
        },
        hasViewTagAtIndex: (WW, iW) => WW?.[HW]?.includes(iW),
        hasUnreliableAtIndex: (WW, iW) => WW?.[uW]?.includes(iW),
        hasPatchOnlyAtIndex: (WW, iW) => WW?.[oW]?.includes(iW),
        hasFullStateOnlyAtIndex: (WW, iW) => WW?.[eW]?.includes(iW),
        hasStreamAtIndex: (WW, iW) => WW?.[vW]?.includes(iW)
      },
      zi = (WW, iW, OW) => WW(iW, OW);
    class Fi {
      dirtyLow = 0;
      dirtyHigh = 0;
      ops;
      constructor(WW) {
        this.ops = new Uint8Array(Math.max(WW + 1, 1))
      }
      record(WW, iW) {
        const OW = this.ops[WW];
        0 === OW ? this.ops[WW] = iW : (OW === EW.DELETE || OW === EW.ADD && iW === EW.DELETE_AND_ADD) && (this.ops[WW] = EW.DELETE_AND_ADD), WW < 32 ? this.dirtyLow |= 1 << WW : this.dirtyHigh |= 1 << WW - 32
      }
      recordDelete(WW, iW) {
        this.ops[WW] = iW, WW < 32 ? this.dirtyLow |= 1 << WW : this.dirtyHigh |= 1 << WW - 32
      }
      recordRaw(WW, iW) {
        this.record(WW, iW)
      }
      operationAt(WW) {
        const iW = this.ops[WW];
        return 0 === iW ? void 0 : iW
      }
      setOperationAt(WW, iW) {
        this.ops[WW] = iW
      }
      forEach(WW) {
        this.forEachWithCtx(WW, zi)
      }
      forEachWithCtx(WW, iW) {
        let OW = this.dirtyLow,
          mW = this.dirtyHigh;
        const EW = this.ops;
        for (; 0 !== OW;) {
          const mW = OW & -OW,
            NW = 31 - Math.clz32(mW);
          OW ^= mW, iW(WW, NW, EW[NW])
        }
        for (; 0 !== mW;) {
          const OW = mW & -mW,
            NW = 31 - Math.clz32(OW) + 32;
          mW ^= OW, iW(WW, NW, EW[NW])
        }
      }
      size() {
        return WO(this.dirtyLow) + WO(this.dirtyHigh)
      }
      has() {
        return 0 !== (this.dirtyLow | this.dirtyHigh)
      }
      reset() {
        this.dirtyLow = 0, this.dirtyHigh = 0, this.ops.fill(0)
      }
    }
    class Qi {
      RA = new Map;
      pureOps = [];
      record(WW, iW) {
        const OW = this.RA.get(WW);
        void 0 === OW ? this.RA.set(WW, iW) : (OW === EW.DELETE || OW === EW.ADD && iW === EW.DELETE_AND_ADD) && this.RA.set(WW, EW.DELETE_AND_ADD)
      }
      recordDelete(WW, iW) {
        this.RA.set(WW, iW)
      }
      recordRaw(WW, iW) {
        this.RA.set(WW, iW)
      }
      recordPure(WW) {
        this.pureOps.push([this.RA.size, WW])
      }
      operationAt(WW) {
        return this.RA.get(WW)
      }
      setOperationAt(WW, iW) {
        this.RA.has(WW) && this.RA.set(WW, iW)
      }
      forEach(WW) {
        this.forEachWithCtx(WW, zi)
      }
      forEachWithCtx(WW, iW) {
        const OW = this.pureOps;
        if (OW.length > 0) {
          let mW = 0,
            EW = 0;
          for (const [NW, PW] of this.RA) {
            for (; mW < OW.length && OW[mW][0] <= EW;) {
              const EW = OW[mW++][1];
              iW(WW, -EW, EW)
            }
            iW(WW, NW, PW), EW++
          }
          for (; mW < OW.length;) {
            const EW = OW[mW++][1];
            iW(WW, -EW, EW)
          }
        } else
          for (const [mW, EW] of this.RA) iW(WW, mW, EW)
      }
      size() {
        return this.RA.size + this.pureOps.length
      }
      has() {
        return this.RA.size > 0 || this.pureOps.length > 0
      }
      reset() {
        this.RA.clear(), this.pureOps.length = 0
      }
      shift(WW) {
        const iW = new Map;
        for (const [OW, mW] of this.RA) iW.set(OW + WW, mW);
        this.RA = iW
      }
    }

    function WO(WW) {
      return 16843009 * ((WW = (858993459 & (WW -= WW >>> 1 & 1431655765)) + (WW >>> 2 & 858993459)) + (WW >>> 4) & 252645135) >>> 24
    }

    function iO(WW) {
      if (void 0 === WW) return 0;
      let iW = 0;
      for (let OW = 0, mW = WW.length; OW < mW; OW++) {
        const mW = WW[OW];
        mW < 32 && (iW |= 1 << mW)
      }
      return iW
    }

    function OO(WW) {
      const iW = WW.constructor;
      if (Object.prototype.hasOwnProperty.call(iW, yW)) return iW[yW];
      const OW = iW[Symbol.metadata],
        mW = ri.isValidInstance(WW),
        EW = (OW?.[HW]?.length ?? 0) > 0,
        NW = function(WW) {
          const iW = [],
            OW = [],
            mW = [],
            EW = [],
            NW = WW?.[JW];
          if (void 0 === NW) return {
            names: iW,
            types: OW,
            tags: mW,
            encoders: EW
          };
          const PW = WW[TW];
          for (let LW = 0; LW <= NW; LW++) {
            const NW = WW[LW];
            void 0 !== NW ? (iW[LW] = NW.name, OW[LW] = NW.type, mW[LW] = NW.tag, EW[LW] = PW?.[LW]) : (iW[LW] = void 0, OW[LW] = void 0, mW[LW] = void 0, EW[LW] = void 0)
          }
          return {
            names: iW,
            types: OW,
            tags: mW,
            encoders: EW
          }
        }(OW),
        PW = mW && !EW ? void 0 : iW[ZW],
        LW = {
          encoder: iW[wW],
          filter: PW,
          metadata: OW,
          isSchema: mW,
          filterBitmask: mW ? iO(OW?.[HW]) : 0,
          hasAnyFullStateOnly: (OW?.[eW]?.length ?? 0) > 0,
          hasAnyUnreliable: (OW?.[uW]?.length ?? 0) > 0,
          hasAnyStream: (OW?.[vW]?.length ?? 0) > 0,
          hasAnyView: EW,
          fullStateOnlyBitmask: iO(OW?.[eW]),
          unreliableBitmask: iO(OW?.[uW]),
          streamBitmask: iO(OW?.[vW]),
          names: NW.names,
          types: NW.types,
          tags: NW.tags,
          encoders: NW.encoders
        };
      return Object.defineProperty(iW, yW, {
        value: LW,
        enumerable: !1,
        writable: !0,
        configurable: !0
      }), LW
    }

    function mO(WW, iW) {
      if (void 0 !== WW.parentRef && iW(WW.parentRef, WW._parentIndex)) return !0;
      for (let OW = WW.extraParents; void 0 !== OW; OW = OW.next)
        if (iW(OW.ref, OW.index)) return !0;
      return !1
    }
    const EO = (WW, iW) => {
        WW.isFieldUnreliable(iW) ? WW.ensureUnreliableRecorder().record(iW, EW.ADD) : WW.record(iW, EW.ADD)
      },
      NO = (WW, iW) => WW(iW);

    function PO(WW, iW, OW) {
      const mW = WW.refTarget;
      if (void 0 !== mW[jW]) {
        if (WW.isPatchOnly) return;
        if (Array.isArray(mW.items)) {
          const WW = mW.items;
          for (let mW = 0, EW = WW.length; mW < EW; mW++) void 0 !== WW[mW] && OW(iW, mW)
        } else if (void 0 !== mW.journal)
          for (const [WW, EW] of mW.journal.keyByIndex) mW.$items.has(EW) && OW(iW, WW);
        else if (void 0 !== mW.$items)
          for (const WW of mW.$items.keys()) OW(iW, WW)
      } else {
        const EW = WW.metadata;
        if (!EW) return;
        const NW = EW[JW] ?? -1,
          PW = EW[dW],
          LW = WW.encDescriptor.names;
        for (let WW = 0; WW <= NW; WW++) {
          const EW = LW[WW];
          if (void 0 === EW) continue;
          if (PW && PW.includes(WW)) continue;
          const NW = mW[EW];
          void 0 !== NW && null !== NW && OW(iW, WW)
        }
      }
    }

    function LO(WW, iW, OW, mW) {
      ! function(WW, iW, OW) {
        if (!iW) return;
        const mW = iW[bW],
          EW = !mW._isSchema;
        let NW;
        EW ? (iW = mW.parent, OW = mW.parentIndex, NW = iW?.[bW].metadata) : NW = mW.metadata;
        const PW = (NW?.[oW]?.includes(OW) ? JO : 0) | (NW?.[eW]?.includes(OW) ? hO : 0),
          LW = mW.flags & uO | PW,
          cW = WW.flags;
        WW.flags = cW | LW;
        LW & ~cW & hO && (WW.reset(), WW.unreliableRecorder?.reset());
        const wW = WW.root?.types;
        if (!wW?.hasFilters) return;
        const tW = NW?.[HW]?.includes(OW) ?? !1,
          ZW = NW?.[vW]?.includes(OW) ?? !1,
          xW = mW.isFiltered || tW || ZW;
        if (WW.isFiltered = xW, ZW && !EW) {
          WW.isStreamCollection = !0;
          const iW = Ji(WW.ref);
          if (void 0 === iW.priority) {
            const WW = ri.getStreamPriority(NW, OW);
            void 0 !== WW && (iW.priority = WW)
          }
          WW.root?.registerStream(WW.ref)
        }
        if (xW) {
          const iW = wO(WW);
          WW.isVisibilitySharedWithParent = mW.isFiltered && iW && !ZW && (!tW || EW && NW[OW].tag !== jm)
        }
      }(WW, iW, OW), WW.isFullStateOnly || (WW.has() && WW.root?.enqueueChangeTree(WW), WW.unreliableRecorder?.has() && WW.root?.enqueueUnreliable(WW), WW.has() || WW.unreliableRecorder?.has() || WW.root?.enqueueChangeTree(WW))
    }

    function cO(WW) {
      const iW = WW.pendingFilterRefresh;
      for (let OW = 0; OW < iW.length; OW++) {
        const WW = iW[OW];
        0 !== (WW.flags & nO) && tO(WW)
      }
      iW.length = 0
    }

    function wO(WW) {
      return WW._isSchema || "string" !== typeof WW.refTarget[jW]
    }

    function tO(WW) {
      WW.flags &= ~nO;
      const iW = WW.root;
      if (void 0 === iW || void 0 === WW.parentRef) return;
      const OW = wO(WW);
      let mW = bO(WW, WW.parentRef, WW._parentIndex, OW);
      for (let NW = WW.extraParents; void 0 !== NW && mW !== AO; NW = NW.next) mW |= bO(WW, NW.ref, NW.index, OW);
      if (0 === mW) return;
      WW.isVisibilitySharedWithParent = 0 !== (mW & lO);
      const EW = 0 === (mW & xO);
      EW !== WW.isFiltered && (WW.isFiltered = EW, EW || WW.isFullStateOnly || (WW.forEachLiveWithCtx(WW, EO), WW.has() && iW.enqueueChangeTree(WW), WW.unreliableRecorder?.has() && iW.enqueueUnreliable(WW)), WW.forEachChildWithCtx(WW, jO))
    }
    const ZO = 1,
      xO = 2,
      lO = 4,
      AO = ZO | xO | lO;

    function bO(WW, iW, OW, mW) {
      const EW = iW[bW];
      if (EW.root !== WW.root || ! function(WW, iW, OW) {
          const mW = iW.refTarget;
          if (iW.isArray) {
            const iW = mW.items,
              EW = iW[OW];
            if (void 0 !== EW && EW[bW] === WW) return !0;
            for (let OW = 0, mW = iW.length; OW < mW; OW++) {
              const mW = iW[OW];
              if (void 0 !== mW && mW[bW] === WW) return !0
            }
            return !1
          }
          const EW = iW.getValue(OW);
          return void 0 !== EW && EW[bW] === WW
        }(WW, EW, OW)) return 0;
      EW.flags & nO && tO(EW);
      let NW = ZO;
      if (EW._isSchema) {
        void 0 !== EW.encDescriptor.tags[OW] || EW.isFieldStream(OW) || (EW.isFiltered ? mW && (NW |= lO) : NW |= xO)
      } else if (EW.isFiltered) {
        if (mW && !EW.isStreamCollection) {
          const WW = EW.parent?.[bW];
          (WW?._isSchema ? WW.encDescriptor.tags[EW.parentIndex] : void 0) !== jm && (NW |= lO)
        }
      } else NW |= xO;
      return NW
    }
    const jO = (WW, iW, OW) => {
      tO(iW)
    };

    function UO(WW, iW, OW, mW) {
      if (WW.addParent(iW, mW), !OW) return;
      const EW = OW.add(WW);
      OW !== WW.root && (WW.root = OW, LO(WW, iW, mW));
      const NW = iW?.[bW];
      if (void 0 !== NW && void 0 !== NW.subscribedViews && void 0 !== iW[jW] && function(WW, iW, OW, mW) {
          const EW = WW.subscribedViews;
          if (void 0 === EW) return;
          const NW = WW.isStreamCollection,
            PW = NW ? WW.ref : void 0,
            LW = NW ? void 0 : OW[bW];
          for (let cW = 0, wW = EW.length; cW < wW; cW++) {
            let WW = EW[cW];
            for (; 0 !== WW;) {
              const OW = WW & -WW;
              WW ^= OW;
              const wW = 32 * cW + (31 - Math.clz32(OW)),
                tW = mW.activeViews.get(wW),
                ZW = tW?.deref();
              void 0 !== ZW ? NW ? di(PW, wW, iW) : void 0 !== LW && ZW.markVisible(LW) : EW[cW] &= ~OW
            }
          }
        }(NW, mW, WW.ref, OW), EW) {
        let iW = KO[SO];
        void 0 === iW && (iW = {
          parentRef: void 0,
          root: void 0
        }, KO[SO] = iW), iW.parentRef = WW.ref, iW.root = OW, SO++, sO(WW, iW, YO), SO--
      }
    }

    function kO(WW, iW, OW) {
      WW(iW, OW)
    }

    function sO(WW, iW, OW) {
      const mW = WW.refTarget;
      if (mW[jW]) {
        if ("string" !== typeof mW[jW]) {
          const WW = mW.items;
          if (void 0 !== WW)
            for (let mW = 0, EW = WW.length; mW < EW; mW++) {
              const EW = WW[mW];
              EW && OW(iW, EW[bW], mW)
            } else {
              const WW = mW.$items,
                EW = mW._collectionIndexes;
              for (const mW of WW.keys()) {
                const NW = WW.get(mW);
                NW && OW(iW, NW[bW], EW?.[mW] ?? mW)
              }
            }
        }
      } else {
        const EW = WW.metadata,
          NW = EW?.[hW];
        if (!NW) return;
        const PW = WW.encDescriptor.names;
        for (let WW = 0, LW = NW.length; WW < LW; WW++) {
          const EW = NW[WW],
            LW = mW[PW[EW]];
          LW && OW(iW, LW[bW], EW)
        }
      }
    }

    function MO(WW, iW, OW) {
      iW.root !== WW ? iW.setRoot(WW) : WW.add(iW)
    }
    const KO = [];
    let SO = 0;

    function YO(WW, iW, OW) {
      if (iW.root === WW.root) return WW.root.add(iW), void WW.root.moveNextToParent(iW);
      iW.setParent(WW.parentRef, WW.root, OW)
    }

    function yO(WW, iW, OW) {
      const mW = (3 & OW) << 3;
      return OW < 4 ? WW >>> mW & 255 : iW >>> mW & 255
    }
    const TO = (WW, iW, OW) => WW(iW, OW);
    const JO = 16,
      hO = 32,
      HO = 128,
      nO = 256,
      uO = JO | hO;
    class oO {
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
        return 0 !== (this.flags & JO)
      }
      set isPatchOnly(WW) {
        this.flags = WW ? this.flags | JO : this.flags & ~JO
      }
      get isFullStateOnly() {
        return 0 !== (this.flags & hO)
      }
      set isFullStateOnly(WW) {
        this.flags = WW ? this.flags | hO : this.flags & ~hO
      }
      get isStreamCollection() {
        return 0 !== (64 & this.flags)
      }
      set isStreamCollection(WW) {
        this.flags = WW ? 64 | this.flags : -65 & this.flags
      }
      get needsRestage() {
        return 0 !== (this.flags & HO)
      }
      set needsRestage(WW) {
        this.flags = WW ? this.flags | HO : -129 & this.flags
      }
      get hasFilteredFields() {
        return this.isFiltered || this.encDescriptor.hasAnyView
      }
      ensureUnreliableRecorder() {
        return void 0 === this.unreliableRecorder && (this.unreliableRecorder = this._isSchema ? new Fi(this.metadata?.[JW] ?? 0) : new Qi), this.unreliableRecorder
      }
      isFieldUnreliable(WW) {
        const iW = this.encDescriptor;
        return !!iW.hasAnyUnreliable && (WW < 32 ? 0 !== (iW.unreliableBitmask & 1 << WW) : ri.hasUnreliableAtIndex(this.metadata, WW))
      }
      isFieldFullStateOnly(WW) {
        if (this.isFullStateOnly) return !0;
        const iW = this.encDescriptor;
        return !!iW.hasAnyFullStateOnly && (WW < 32 ? 0 !== (iW.fullStateOnlyBitmask & 1 << WW) : ri.hasFullStateOnlyAtIndex(this.metadata, WW))
      }
      isFieldStream(WW) {
        const iW = this.encDescriptor;
        return !!iW.hasAnyStream && (WW < 32 ? 0 !== (iW.streamBitmask & 1 << WW) : ri.hasStreamAtIndex(this.metadata, WW))
      }
      constructor(WW) {
        let iW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : WW;
        this.ref = WW, this.refTarget = iW;
        const OW = OO(WW);
        this.encDescriptor = OW, this.metadata = OW.metadata;
        const mW = OW.isSchema;
        if (this._isSchema = mW, this.ops = void 0, this.collDirty = void 0, this.collPureOps = void 0, mW) {
          const WW = this.metadata?.[JW] ?? 0;
          WW > 7 && (this.ops = new Uint8Array(WW + 1))
        } else this.collDirty = new Map
      }
      _opAt(WW) {
        const iW = this.ops;
        if (void 0 !== iW) return iW[WW];
        const OW = (3 & WW) << 3;
        return WW < 4 ? this.opsLow >>> OW & 255 : this.opsHigh >>> OW & 255
      }
      _opPut(WW, iW) {
        const OW = this.ops;
        if (void 0 !== OW) return void(OW[WW] = iW);
        const mW = (3 & WW) << 3,
          EW = ~(255 << mW);
        WW < 4 ? this.opsLow = this.opsLow & EW | iW << mW : this.opsHigh = this.opsHigh & EW | iW << mW
      }
      _markDirty(WW) {
        WW < 32 ? this.dirtyLow |= 1 << WW : this.dirtyHigh |= 1 << WW - 32
      }
      record(WW, iW) {
        if (this._isSchema) {
          const OW = this._opAt(WW);
          0 === OW ? this._opPut(WW, iW) : (OW === EW.DELETE || OW === EW.ADD && iW === EW.DELETE_AND_ADD) && this._opPut(WW, EW.DELETE_AND_ADD), this._markDirty(WW)
        } else {
          const OW = this.collDirty,
            mW = OW.get(WW);
          let NW;
          NW = void 0 === mW ? iW : mW === EW.DELETE || mW === EW.ADD && iW === EW.DELETE_AND_ADD ? EW.DELETE_AND_ADD : mW, OW.set(WW, NW)
        }
      }
      recordDelete(WW, iW) {
        this._isSchema ? (this._opPut(WW, iW), this._markDirty(WW)) : this.collDirty.set(WW, iW)
      }
      recordRaw(WW, iW) {
        this._isSchema ? (this._opPut(WW, iW), this._markDirty(WW)) : this.collDirty.set(WW, iW)
      }
      recordPure(WW) {
        if (this._isSchema) throw new Error("ChangeTree (Schema): pure operations are not supported");
        (this.collPureOps ??= []).push([this.collDirty.size, WW])
      }
      operationAt(WW) {
        if (this._isSchema) {
          const iW = this._opAt(WW);
          return 0 === iW ? void 0 : iW
        }
        return this.collDirty.get(WW)
      }
      setOperationAt(WW, iW) {
        if (this._isSchema) this._opPut(WW, iW);
        else {
          const OW = this.collDirty;
          OW.has(WW) && OW.set(WW, iW)
        }
      }
      forEach(WW) {
        this.forEachWithCtx(WW, TO)
      }
      forEachWithCtx(WW, iW) {
        if (this._isSchema) {
          let OW = this.dirtyLow,
            mW = this.dirtyHigh;
          const EW = this.ops;
          if (void 0 !== EW) {
            for (; 0 !== OW;) {
              const mW = OW & -OW,
                NW = 31 - Math.clz32(mW);
              OW ^= mW, iW(WW, NW, EW[NW])
            }
            for (; 0 !== mW;) {
              const OW = mW & -mW,
                NW = 31 - Math.clz32(OW) + 32;
              mW ^= OW, iW(WW, NW, EW[NW])
            }
          } else {
            const mW = this.opsLow,
              EW = this.opsHigh;
            for (; 0 !== OW;) {
              const NW = OW & -OW,
                PW = 31 - Math.clz32(NW);
              OW ^= NW, iW(WW, PW, yO(mW, EW, PW))
            }
          }
          return
        }
        const OW = this.collDirty,
          mW = this.collPureOps;
        if (void 0 !== mW && mW.length > 0) {
          let EW = 0,
            NW = 0;
          for (const [PW, LW] of OW) {
            for (; EW < mW.length && mW[EW][0] <= NW;) {
              const OW = mW[EW++][1];
              iW(WW, -OW, OW)
            }
            iW(WW, PW, LW), NW++
          }
          for (; EW < mW.length;) {
            const OW = mW[EW++][1];
            iW(WW, -OW, OW)
          }
        } else
          for (const [EW, NW] of OW) iW(WW, EW, NW)
      }
      size() {
        return this._isSchema ? WO(this.dirtyLow) + WO(this.dirtyHigh) : this.collDirty.size + (this.collPureOps?.length ?? 0)
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
      insertAt(WW, iW) {
        if (this._isSchema) throw new Error("ChangeTree (Schema): insertAt is not supported");
        const OW = this.collDirty,
          mW = new Map,
          NW = !this.paused && !this.isFullStateOnly;
        if (WW > 0)
          for (const [EW, PW] of OW) EW < WW && mW.set(EW, PW);
        if (NW)
          for (let PW = 0; PW < iW; PW++) mW.set(WW + PW, EW.ADD);
        for (const [EW, PW] of OW) EW >= WW && mW.set(EW + iW, PW);
        this.collDirty = mW, NW && this.root?.enqueueChangeTree(this)
      }
      removeAt(WW, iW) {
        if (this._isSchema) throw new Error("ChangeTree (Schema): removeAt is not supported");
        const OW = this.collDirty,
          mW = WW + iW;
        let EW = !1;
        for (const PW of OW.keys())
          if (PW >= mW) {
            EW = !0;
            break
          } if (!EW) {
          for (let iW = WW; iW < mW; iW++) OW.delete(iW);
          return
        }
        const NW = new Map;
        for (const [PW, LW] of OW) PW < WW ? NW.set(PW, LW) : PW >= mW && NW.set(PW - iW, LW);
        this.collDirty = NW
      }
      unshift(WW) {
        this.insertAt(0, WW)
      }
      setRoot(WW) {
        ! function(WW, iW) {
          WW.root = iW;
          const OW = iW.add(WW);
          LO(WW, WW.parent, WW.parentIndex), OW && sO(WW, iW, MO)
        }(this, WW)
      }
      setParent(WW, iW, OW) {
        UO(this, WW, iW, OW)
      }
      forEachChild(WW) {
        sO(this, WW, kO)
      }
      forEachChildWithCtx(WW, iW) {
        sO(this, WW, iW)
      }
      forEachLive(WW) {
        PO(this, WW, NO)
      }
      forEachLiveWithCtx(WW, iW) {
        PO(this, WW, iW)
      }
      operation(WW) {
        this.paused || this.isFullStateOnly || (this.recordPure(WW), this.root?.enqueueChangeTree(this))
      }
      _routeAndRecord(WW, iW, OW) {
        if (!this.paused && !this.isFieldFullStateOnly(WW)) {
          if (this.isFieldUnreliable(WW) && !this.isNew) {
            const mW = this.ensureUnreliableRecorder();
            return OW ? mW.recordRaw(WW, iW) : mW.record(WW, iW), void this.root?.enqueueUnreliable(this)
          }
          OW ? this.recordRaw(WW, iW) : this.record(WW, iW), this.root?.enqueueChangeTree(this)
        }
      }
      change(WW) {
        let iW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : EW.ADD;
        this._routeAndRecord(WW, iW, !1)
      }
      indexedOperation(WW, iW) {
        this._routeAndRecord(WW, iW, !0)
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
        const iW = this.paused;
        this.paused = !0;
        try {
          return WW()
        } finally {
          this.paused = iW
        }
      }
      markDirty(WW) {
        let iW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : EW.ADD;
        const OW = this.paused;
        this.paused = !1;
        try {
          this.change(WW, iW)
        } finally {
          this.paused = OW
        }
      }
      getValue(WW) {
        let iW = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return this.refTarget[xW](WW, iW)
      }
      delete(WW, iW) {
        if (void 0 === WW) {
          try {
            throw new Error(`@colyseus/schema ${this.ref.constructor.name}: trying to delete non-existing index '${WW}'`)
          } catch (cE) {
            console.warn(cE)
          }
          return
        }
        if (this.paused || this.isFieldFullStateOnly(WW)) return this.getValue(WW);
        const OW = this.isFieldUnreliable(WW) && !this.isNew;
        OW ? this.ensureUnreliableRecorder().recordDelete(WW, iW ?? EW.DELETE) : this.recordDelete(WW, iW ?? EW.DELETE);
        const mW = this.getValue(WW);
        return mW && mW[bW] && this.root?.remove(mW[bW]), OW ? this.root?.enqueueUnreliable(this) : this.root?.enqueueChangeTree(this), mW
      }
      endEncode() {
        this.reset(), this.changesNode = void 0, this._isSchema || this.refTarget[kW]?.(), this.isNew = !1
      }
      endEncodeUnreliable() {
        this.unreliableRecorder?.reset(), this.unreliableChangesNode = void 0, this._isSchema || this.refTarget[kW]?.()
      }
      discard() {
        this._isSchema || this.refTarget[kW]?.(), this.reset(), this.unreliableRecorder?.reset()
      }
      discardAll() {
        const WW = WW => {
          if (WW < 0) return;
          const iW = this.getValue(WW);
          iW && iW[bW] && iW[bW].discardAll()
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
      addParent(WW, iW) {
        ! function(WW, iW, OW) {
          if (WW.parentRef) {
            if (WW.parentRef[bW] === iW[bW]) return void(WW._parentIndex = OW);
            if (mO(WW, ((WW, OW) => WW[bW] === iW[bW]))) return void(WW._parentIndex = OW)
          }
          void 0 === WW.parentRef ? (WW.parentRef = iW, WW._parentIndex = OW) : (WW.extraParents = {
            ref: WW.parentRef,
            index: WW._parentIndex,
            next: WW.extraParents
          }, WW.parentRef = iW, WW._parentIndex = OW)
        }(this, WW, iW)
      }
      setParentIndex(WW, iW) {
        ! function(WW, iW, OW) {
          if (void 0 !== WW.extraParents)
            if (WW.parentRef[bW] !== iW[bW]) {
              for (let mW = WW.extraParents; void 0 !== mW; mW = mW.next)
                if (mW.ref[bW] === iW[bW]) return void(mW.index = OW)
            } else WW._parentIndex = OW;
          else WW._parentIndex = OW
        }(this, WW, iW)
      }
      removeParent() {
        return function(WW, iW) {
          if (WW.parentRef && WW.parentRef[bW] === iW[bW]) return WW.extraParents ? (WW.parentRef = WW.extraParents.ref, WW._parentIndex = WW.extraParents.index, WW.extraParents = WW.extraParents.next) : (WW.parentRef = void 0, WW._parentIndex = void 0), !0;
          let OW = WW.extraParents,
            mW = null;
          for (; OW;) {
            if (OW.ref[bW] === iW[bW]) return mW ? mW.next = OW.next : WW.extraParents = OW.next, !0;
            mW = OW, OW = OW.next
          }
          return void 0 === WW.parentRef
        }(this, arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.parent)
      }
      findParent(WW) {
        return function(WW, iW) {
          if (void 0 !== WW.parentRef && iW(WW.parentRef, WW._parentIndex)) return {
            ref: WW.parentRef,
            index: WW._parentIndex
          };
          for (let OW = WW.extraParents; void 0 !== OW; OW = OW.next)
            if (iW(OW.ref, OW.index)) return {
              ref: OW.ref,
              index: OW.index
            }
        }(this, WW)
      }
      hasParent(WW) {
        return mO(this, WW)
      }
      indexInParent(WW) {
        return function(WW, iW) {
          if (WW.parentRef && WW.parentRef[bW] === iW[bW]) return WW._parentIndex;
          for (let OW = WW.extraParents; void 0 !== OW; OW = OW.next)
            if (OW.ref[bW] === iW[bW]) return OW.index
        }(this, WW)
      }
      getAllParents() {
        return function(WW) {
          const iW = [];
          WW.parentRef && iW.push({
            ref: WW.parentRef,
            index: WW._parentIndex
          });
          let OW = WW.extraParents;
          for (; OW;) iW.push({
            ref: OW.ref,
            index: OW.index
          }), OW = OW.next;
          return iW
        }(this)
      }
    }
    class dO {
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
        const iW = this.ref;
        if (iW[jW]) {
          if ("string" !== typeof iW[jW])
            for (const [OW, mW] of iW.entries()) mW && WW(mW[bW], iW._collectionIndexes?.[OW] ?? OW);
          return
        }
        const OW = iW.constructor,
          mW = OW?.[Symbol.metadata];
        if (!mW) return;
        const EW = mW[hW] ?? [];
        for (let NW = 0; NW < EW.length; NW++) {
          const OW = EW[NW],
            PW = iW[mW[OW].name];
          PW && WW(PW[bW], OW)
        }
      }
      forEachChildWithCtx(WW, iW) {
        this.forEachChild(((OW, mW) => iW(WW, OW, mW)))
      }
      forEachLive() {}
      forEachLiveWithCtx() {}
      forEach() {}
    }

    function eO(WW) {
      let iW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : WW;
      var OW;
      Object.defineProperty(WW, bW, {
        value: (OW = iW, new dO(OW)),
        enumerable: !1,
        writable: !0
      })
    }

    function vO(WW, iW, OW, mW, NW, PW, cW) {
      void 0 !== cW ? cW(iW, mW, PW) : "string" === typeof OW ? ii[OW]?.(iW, mW, PW) : null != OW[Symbol.metadata] ? (ii.number(iW, mW[LW], PW), (NW & EW.ADD) === EW.ADD && WW.tryEncodeTypeId(iW, OW, mW.constructor, PW)) : ii.number(iW, mW[LW], PW)
    }
    const gO = function(WW, iW, OW, mW, NW, PW, LW, cW) {
        if (iW[PW.offset++] = 255 & (mW | NW), NW === EW.DELETE) return;
        const wW = OW.encDescriptor,
          tW = OW.ref,
          ZW = tW[KW][mW] ?? tW[wW.names[mW]];
        vO(WW, iW, wW.types[mW], ZW, NW, PW, wW.encoders[mW])
      },
      DO = function(WW, iW, OW, mW, NW, PW) {
        if (iW[PW.offset++] = 255 & NW, ii.number(iW, mW, PW), NW === EW.DELETE) return;
        const LW = OW.ref;
        if ((NW & EW.ADD) === EW.ADD) {
          const WW = LW.$indexes.get(mW);
          ii.string(iW, WW, PW)
        }
        vO(WW, iW, LW[jW], LW[xW](mW), NW, PW)
      },
      VO = function(WW, iW, OW, mW, NW, PW) {
        if (iW[PW.offset++] = 255 & NW, ii.number(iW, mW, PW), NW === EW.DELETE) return;
        const LW = OW.ref;
        vO(WW, iW, LW[jW], LW[xW](mW), NW, PW)
      },
      pO = function(WW, iW, OW, mW, NW, PW) {
        const LW = OW.ref;
        (NW & EW.ADD) === EW.ADD && "function" === typeof LW.set ? DO(WW, iW, OW, mW, NW, PW) : VO(WW, iW, OW, mW, NW, PW)
      },
      fO = function(WW, iW, OW, mW, NW, PW, cW, wW) {
        const tW = OW.refTarget,
          ZW = tW[jW],
          lW = "string" !== typeof ZW;
        let AW;
        if (wW && OW.isFiltered && lW) {
          const WW = tW.tmpItems[mW];
          if (!WW) return;
          if (AW = WW[LW], NW === EW.DELETE) NW = EW.DELETE_BY_REFID;
          else if ((NW & EW.ADD) === EW.ADD) NW = EW.ADD_BY_REFID;
          else if ((NW & EW.MOVE) === EW.MOVE) return
        } else if (NW === EW.DELETE && lW) {
          const WW = tW.tmpItems[mW];
          if (!WW) return;
          AW = WW[LW], NW = EW.DELETE_BY_REFID
        } else AW = mW;
        if (iW[PW.offset++] = 255 & NW, ii.number(iW, AW, PW), NW === EW.DELETE || NW === EW.DELETE_BY_REFID) return;
        vO(WW, iW, ZW, tW[xW](mW, cW), NW, PW)
      };

    function CO(WW, iW, OW, mW, NW, PW, cW) {
      const wW = WW.resyncVisited;
      let tW = wW.get(WW.currentRefId);
      if (void 0 === tW && wW.set(WW.currentRefId, tW = new Set), tW.add(mW), void 0 !== NW && OW === EW.ADD && NW !== PW) {
        const OW = NW[LW];
        void 0 !== OW && (WW.root.removeRef(OW), cW?.push({
          ref: iW,
          refId: WW.currentRefId,
          op: EW.DELETE,
          dynamicIndex: mW,
          value: void 0,
          previousValue: NW
        }))
      }
    }

    function XO(WW, iW, OW, mW) {
      const EW = iW[LW];
      if (void 0 === EW || OW.has(EW)) return;
      OW.add(EW);
      const NW = iW.constructor[Symbol.metadata],
        PW = NW?.[hW];
      if (void 0 === PW) return;
      const cW = NW[oW];
      for (let LW = 0; LW < PW.length; LW++) {
        const EW = PW[LW];
        if (void 0 !== cW && cW.includes(EW)) continue;
        const wW = NW[EW],
          tW = iW[wW.name];
        tW && (um.is(wW.type) ? XO(WW, tW, OW, mW) : BO(WW, tW, OW, mW))
      }
    }

    function BO(WW, iW, OW, mW) {
      const NW = iW[UW] ?? iW,
        PW = NW[LW];
      if (void 0 === PW || OW.has(PW)) return;
      OW.add(PW);
      const cW = WW.resyncVisited.get(PW);
      if (void 0 === cW) return;
      const wW = WW.root;
      NW[AW](cW, ((WW, OW) => {
        mW?.push({
          ref: iW,
          refId: PW,
          op: EW.DELETE,
          dynamicIndex: OW,
          value: void 0,
          previousValue: WW
        });
        const NW = WW?.[LW];
        void 0 !== NW && wW.removeRef(NW)
      }), (iW => {
        um.isSchema(iW) && XO(WW, iW, OW, mW)
      }))
    }
    const qO = 1,
      RO = 2,
      GO = 3,
      IO = 4,
      aO = 5;

    function rO(WW, iW, OW, mW, NW, PW, cW, wW, tW) {
      const ZW = WW.root;
      let xW;
      if ((iW & EW.DELETE) === EW.DELETE) {
        const WW = NW?.[LW];
        void 0 !== WW && ZW.removeRef(WW), iW !== EW.DELETE_AND_ADD && OW[lW](mW), xW = void 0
      }
      if (iW === EW.DELETE);
      else if ("string" === typeof PW) xW = si[PW](cW, wW);
      else if (Di(PW)) xW = function(WW, iW, OW) {
        return fi(WW, (0, si[WW.wire])(iW, OW))
      }(PW.quantized, cW, wW);
      else if (um.is(PW)) {
        const OW = si.number(cW, wW);
        if (xW = ZW.refs.get(OW), (iW & EW.ADD) === EW.ADD) {
          const mW = WW.getInstanceType(cW, wW, PW);
          xW || (xW = WW.createInstanceOfType(mW)), ZW.addRef(OW, xW, xW !== NW || iW === EW.DELETE_AND_ADD && xW === NW)
        }
      } else {
        const OW = (AW = Object.keys(PW)[0], Mi[AW]),
          mW = si.number(cW, wW);
        null !== WW.resyncVisited && function(WW, iW) {
          const OW = WW.resyncVisited;
          OW.has(iW) || OW.set(iW, new Set)
        }(WW, mW);
        const lW = ZW.refs.has(mW) ? NW || ZW.refs.get(mW) : OW.constructor.initializeForDecoder();
        if (xW = lW.clone(!0), xW[jW] = Object.values(PW)[0], NW) {
          let WW = NW[LW];
          if (void 0 !== WW && mW !== WW) {
            (iW & EW.DELETE) !== EW.DELETE && ZW.removeRef(WW);
            const OW = NW.entries();
            let mW;
            for (;
              (mW = OW.next()) && !mW.done;) {
              const [iW, OW] = mW.value;
              "object" === typeof OW && (WW = OW[LW]), tW?.push({
                ref: NW,
                refId: WW,
                op: EW.DELETE,
                field: iW,
                value: void 0,
                previousValue: OW
              })
            }
          }
        }
        ZW.addRef(mW, xW, lW !== NW || iW === EW.DELETE_AND_ADD && lW === NW)
      }
      var AW;
      return xW
    }
    const zO = function(WW, iW, OW, mW, EW) {
        const NW = iW[OW.offset++],
          PW = mW.constructor[Symbol.metadata],
          LW = NW >> 6 << 6,
          cW = NW % (LW || 255),
          wW = PW[cW];
        if (void 0 === wW) return console.warn("@colyseus/schema: field not defined at", {
          index: cW,
          ref: mW.constructor.name,
          metadata: PW
        }), -1;
        const tW = !0 === wW.deprecated,
          ZW = tW ? void 0 : mW[xW](cW),
          lW = rO(WW, LW, mW, cW, ZW, wW.type, iW, OW, EW);
        tW || (null !== lW && void 0 !== lW && (mW[wW.name] = lW), ZW !== lW && EW?.push({
          ref: mW,
          refId: WW.currentRefId,
          op: LW,
          field: wW.name,
          value: lW,
          previousValue: ZW
        }))
      },
      FO = function(WW, iW, OW, mW, NW) {
        const PW = mW[UW] ?? mW,
          LW = iW[OW.offset++];
        if (LW === EW.CLEAR) return WW.removeChildRefs(PW, NW), void PW.clear();
        const cW = si.number(iW, OW),
          wW = PW[jW],
          tW = PW.constructor.COLLECTION_KIND;
        let ZW;
        (LW & EW.ADD) === EW.ADD ? tW === qO ? (ZW = si.string(iW, OW), PW.setIndex(cW, ZW)) : ZW = cW : ZW = PW.getIndex(cW);
        const lW = PW[xW](cW),
          AW = rO(WW, LW, mW, cW, lW, wW, iW, OW, NW);
        if (null !== WW.resyncVisited && CO(WW, mW, LW, ZW, lW, AW, NW), null !== AW && void 0 !== AW) switch (tW) {
          case qO:
            PW.$items.set(ZW, AW);
            break;
          case RO:
            PW.$setAt(cW, AW, null !== WW.resyncVisited && LW === EW.ADD ? EW.REPLACE : LW);
            break;
          case GO:
          case IO:
          case aO:
            PW.$items.has(cW) || (PW.$items.set(cW, AW), "number" === typeof PW.$refId && cW >= PW.$refId && (PW.$refId = cW + 1));
            break;
          default:
            console.warn(`@colyseus/schema: missing COLLECTION_KIND on ${PW.constructor?.name} \u2014 item at index ${cW} was not stored.`)
        }
        lW !== AW && NW?.push({
          ref: mW,
          refId: WW.currentRefId,
          op: LW,
          dynamicIndex: ZW,
          value: AW,
          previousValue: lW
        })
      },
      QO = function(WW, iW, OW, mW, NW) {
        const PW = mW[UW] ?? mW;
        let LW, cW = iW[OW.offset++];
        if (cW === EW.CLEAR) return WW.removeChildRefs(PW, NW), void PW.clear();
        if (cW === EW.REVERSE) return void PW.items.reverse();
        if (cW === EW.DELETE_BY_REFID) {
          const cW = si.number(iW, OW),
            wW = WW.root.refs.get(cW);
          if (void 0 === wW) return;
          if (WW.root.removeRef(cW), LW = PW.findIndex((WW => WW === wW)), -1 === LW) return;
          return PW[lW](LW), void NW?.push({
            ref: mW,
            refId: WW.currentRefId,
            op: EW.DELETE,
            dynamicIndex: LW,
            value: void 0,
            previousValue: wW
          })
        }
        if (cW === EW.ADD_BY_REFID) {
          const mW = si.number(iW, OW),
            EW = WW.root.refs.get(mW);
          EW && (LW = PW.findIndex((WW => WW === EW))), -1 !== LW && void 0 !== LW || (LW = PW.length)
        } else LW = si.number(iW, OW);
        const wW = PW[jW];
        let tW = LW;
        const ZW = PW.items[LW],
          xW = rO(WW, cW, mW, LW, ZW, wW, iW, OW, NW);
        null !== WW.resyncVisited && CO(WW, mW, cW, LW, ZW, xW, NW), null !== xW && void 0 !== xW && xW !== ZW && PW.$setAt(LW, xW, null !== WW.resyncVisited && cW === EW.ADD ? EW.REPLACE : cW), ZW !== xW && NW?.push({
          ref: mW,
          refId: WW.currentRefId,
          op: cW,
          dynamicIndex: tW,
          value: xW,
          previousValue: ZW
        })
      };
    class Wm extends Error {}

    function im(WW, iW, OW, mW) {
      if (!(WW instanceof iW)) throw new Wm(`a '${iW.name}' was expected, but '${WW&&WW.constructor.name}' was provided in ${OW.constructor.name}#${mW}`)
    }
    const Om = (WW, iW) => {
        const OW = WW.toString(),
          mW = iW.toString();
        return OW < mW ? -1 : OW > mW ? 1 : 0
      },
      mm = {
        get: (WW, iW) => "symbol" === typeof iW || isNaN(iW) ? Reflect.get(WW, iW) : WW.items[iW],
        set: (WW, iW, OW) => {
          if ("symbol" !== typeof iW && !isNaN(iW)) {
            if (void 0 === OW || null === OW) WW.$deleteAt(iW);
            else {
              let mW;
              if (OW[bW]) {
                im(OW, WW[jW], WW, iW);
                const NW = WW.items[iW];
                WW.isMovingItems ? (mW = WW.$wireIndex(Number(iW)), void 0 !== NW ? OW[bW].isNew ? WW[bW].indexedOperation(mW, EW.MOVE_AND_ADD) : (WW[bW].getChange(mW) & EW.DELETE) === EW.DELETE ? WW[bW].indexedOperation(mW, EW.DELETE_AND_MOVE) : WW[bW].indexedOperation(mW, EW.MOVE) : OW[bW].isNew && WW[bW].indexedOperation(mW, EW.ADD), OW[bW].setParent(WW, WW[bW].root, mW)) : mW = WW.$changeAt(Number(iW), OW), void 0 !== NW && NW[bW].root?.remove(NW[bW])
              } else mW = WW.$changeAt(Number(iW), OW);
              WW.items[iW] = OW, void 0 !== mW && (WW.tmpItems[mW] = OW)
            }
            return !0
          }
          return Reflect.set(WW, iW, OW)
        },
        deleteProperty: (WW, iW) => ("number" === typeof iW ? WW.$deleteAt(iW) : delete WW[iW], !0),
        has: (WW, iW) => "symbol" === typeof iW || isNaN(Number(iW)) ? Reflect.has(WW, iW) : Reflect.has(WW.items, iW)
      };
    class Em {
      [bW];
      [LW];
      [UW];
      [jW];
      items = [];
      tmpItems = [];
      deletedIndexes = [];
      isMovingItems = !1;
      _needsCompaction = !1;
      static[wW] = fO;
      static[tW] = QO;
      static COLLECTION_KIND = RO;
      static[ZW](WW, iW, OW) {
        if (!OW) return !0;
        const mW = WW[UW] ?? WW;
        return "string" === typeof mW[jW] || OW.isChangeTreeVisible(mW.tmpItems[iW]?.[bW])
      }
      static is(WW) {
        return Array.isArray(WW) || void 0 !== WW.array
      }
      static from(WW) {
        return new Em(...Array.from(WW))
      }
      constructor() {
        this[jW] = void 0, this[UW] = this;
        const WW = new Proxy(this, mm);
        return Object.defineProperty(this, bW, {
          value: new oO(WW, this),
          enumerable: !1,
          writable: !0
        }), arguments.length > 0 && this.push(...arguments), WW
      }
      static initializeForDecoder() {
        const WW = Object.create(Em.prototype);
        WW.items = [], WW.isMovingItems = !1, WW._needsCompaction = !1, WW[jW] = void 0, WW[UW] = WW;
        const iW = new Proxy(WW, mm);
        return eO(WW, iW), iW
      }
      set length(WW) {
        0 === WW ? this.clear() : WW < this.items.length ? this.splice(WW, this.length - WW) : console.warn("ArraySchema: can't set .length to a higher value than its length.")
      }
      get length() {
        return this.items.length
      }
      pauseTracking() {
        this[bW].pause()
      }
      resumeTracking() {
        this[bW].resume()
      }
      untracked(WW) {
        return this[bW].untracked(WW)
      }
      get isTrackingPaused() {
        return this[bW].paused
      }
      push() {
        const WW = this[UW],
          iW = WW.items,
          OW = WW.tmpItems,
          mW = WW[bW],
          NW = WW[jW];
        let PW = OW.length;
        for (let LW = 0, cW = arguments.length; LW < cW; LW++, PW++) {
          const cW = LW < 0 || arguments.length <= LW ? void 0 : arguments[LW];
          if (void 0 === cW || null === cW) return;
          "object" === typeof cW && NW && im(cW, NW, WW, LW), mW.indexedOperation(PW, EW.ADD), iW.push(cW), OW.push(cW), cW[bW]?.setParent(this, mW.root, PW)
        }
        return PW
      }
      pop() {
        const WW = this[UW],
          iW = WW.tmpItems,
          OW = WW.deletedIndexes;
        let mW = -1;
        for (let NW = iW.length - 1; NW >= 0; NW--)
          if (!0 !== OW[NW]) {
            mW = NW;
            break
          } if (mW < 0) return;
        const EW = WW.$isUnsentAdd(mW);
        return WW[bW].delete(mW), EW ? WW.$cancelAdd(mW) : OW[mW] = !0, WW.items.pop()
      }
      at(WW) {
        return WW < 0 && (WW += this.length), this.items[WW]
      }
      $wireIndex(WW) {
        const iW = this.deletedIndexes;
        if (0 === iW.length) return WW;
        const OW = this.tmpItems;
        let mW = 0;
        for (let EW = 0; EW < OW.length; EW++)
          if (!0 !== iW[EW]) {
            if (mW === WW) return EW;
            mW++
          } return OW.length + (WW - mW)
      }
      $isUnsentAdd(WW) {
        const iW = this[bW];
        return 0 === (576 & iW.flags) && !iW.paused && "string" !== typeof this[jW] && iW.operationAt(WW) === EW.ADD
      }
      $cancelAdd(WW) {
        let iW = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        const OW = this[bW],
          mW = this.tmpItems[WW];
        this.tmpItems.splice(WW, 1), this.deletedIndexes.length > 0 && this.deletedIndexes.splice(WW, 1), OW.removeAt(WW, 1);
        const EW = mW?.[bW];
        void 0 !== EW && void 0 === EW.root && EW.removeParent(this), iW && this.$reindexChildren(WW)
      }
      $reindexChildren(WW, iW) {
        if (!this[bW].hasFilteredFields) return;
        if ("string" === typeof this[jW]) return;
        const OW = this.tmpItems,
          mW = OW.length;
        if (void 0 !== iW)
          for (; WW < mW && OW[WW] === iW[WW];) WW++;
        for (let EW = WW; EW < mW; EW++) OW[EW]?.[bW]?.setParentIndex(this, EW)
      }
      $changeAt(WW, iW) {
        if (void 0 === iW || null === iW) return void console.error("ArraySchema items cannot be null nor undefined; Use `splice(index, 1)` instead.");
        if (this.items[WW] === iW) return;
        const OW = void 0 !== this.items[WW] ? "object" === typeof iW ? EW.DELETE_AND_ADD : EW.REPLACE : EW.ADD,
          mW = this.$wireIndex(WW),
          NW = this[bW];
        return NW.change(mW, OW), iW[bW]?.setParent(this, NW.root, mW), mW
      }
      $deleteAt(WW, iW) {
        this[bW].delete(this.$wireIndex(WW), iW)
      }
      $setAt(WW, iW, OW) {
        OW === EW.ADD && void 0 !== this.items[WW] ? this.items.splice(WW, 0, iW) : OW === EW.DELETE_AND_MOVE ? (this.items.splice(WW, 1), this.items[WW] = iW) : (WW > this.items.length && (this._needsCompaction = !0), this.items[WW] = iW)
      }
      clear() {
        const WW = this[UW];
        if (0 === WW.items.length) return;
        const iW = WW[bW];
        iW.forEachChild(((WW, OW) => {
          iW.root?.remove(WW)
        })), iW.discard(), iW.operation(EW.CLEAR), WW.items.length = 0, WW.tmpItems.length = 0
      } [sW]() {
        const WW = this[UW] ?? this,
          iW = WW[bW];
        if (iW.isStreamCollection) throw new Error("@colyseus/schema: cannot reset a streamed ArraySchema (pooling not supported).");
        const OW = WW.items;
        for (let mW = 0; mW < OW.length; mW++) OW[mW]?.[sW]?.();
        WW.items.length = 0, WW.tmpItems.length = 0, WW.deletedIndexes.length = 0, iW.recycle(), WW[LW] = void 0
      }
      concat() {
        return new Em(...this.items.concat(...arguments))
      }
      join(WW) {
        return this.items.join(WW)
      }
      reverse() {
        const WW = this[UW],
          iW = WW[bW];
        if (iW.has() || WW.deletedIndexes.length > 0) {
          const iW = WW.items.slice().reverse();
          return this.clear(), this.push(...iW), this
        }
        return iW.operation(EW.REVERSE), WW.items.reverse(), WW.tmpItems.reverse(), WW.$reindexChildren(0), this
      }
      shift() {
        const WW = this[UW],
          iW = WW.items;
        if (0 === iW.length) return;
        const OW = WW[bW],
          mW = WW.deletedIndexes;
        let NW = 0;
        for (; !0 === mW[NW];) NW++;
        const PW = WW.$isUnsentAdd(NW);
        return OW.delete(NW, EW.DELETE), PW ? WW.$cancelAdd(NW) : mW[NW] = !0, iW.shift()
      }
      slice(WW, iW) {
        const OW = new Em;
        return OW.push(...this.items.slice(WW, iW)), OW
      }
      sort() {
        let WW = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Om;
        const iW = this[UW];
        iW.isMovingItems = !0;
        const OW = iW[bW];
        return iW.items.sort(WW).forEach(((WW, iW) => OW.change(iW, EW.REPLACE))), iW.tmpItems.sort(WW), iW.$reindexChildren(0), iW.isMovingItems = !1, this
      }
      splice(WW, iW) {
        const OW = this[UW],
          mW = OW[bW],
          NW = OW.items,
          PW = OW.tmpItems,
          LW = OW.deletedIndexes,
          cW = NW.length,
          wW = PW.length;
        for (var tW = arguments.length, ZW = new Array(tW > 2 ? tW - 2 : 0), xW = 2; xW < tW; xW++) ZW[xW - 2] = arguments[xW];
        const lW = ZW.length,
          AW = [];
        for (let EW = 0; EW < wW; EW++) !0 !== LW[EW] && AW.push(EW);
        let jW;
        if (cW > WW) {
          void 0 === iW && (iW = cW - WW);
          for (let NW = WW; NW < WW + iW; NW++) {
            const WW = AW[NW],
              iW = OW.$isUnsentAdd(WW);
            mW.delete(WW, EW.DELETE), iW ? (jW ??= []).push(WW) : LW[WW] = !0
          }
        } else iW = 0;
        if (lW > 0) {
          const NW = AW[WW] ?? cW,
            wW = Math.min(lW, iW);
          for (let WW = 0; WW < wW; WW++) {
            const iW = NW + WW;
            let OW;
            const cW = void 0 !== jW ? jW.indexOf(iW) : -1; - 1 !== cW ? (jW.splice(cW, 1), OW = EW.ADD) : OW = LW[iW] ? EW.DELETE_AND_ADD : EW.ADD, mW.indexedOperation(iW, OW), PW[iW] = ZW[WW], LW[iW] = !1, ZW[WW][bW]?.setParent(this, mW.root, iW)
          }
          const tW = lW - wW;
          if (tW > 0) {
            const WW = NW + wW;
            mW.insertAt(WW, tW);
            for (let iW = 0; iW < tW; iW++) ZW[wW + iW][bW]?.setParent(this, mW.root, WW + iW);
            LW.length > 0 && LW.splice(WW, 0, ...new Array(tW).fill(!1)), PW.splice(WW, 0, ...ZW.slice(wW)), OW.$reindexChildren(WW + tW)
          }
        }
        if (void 0 !== jW && jW.length > 0) {
          for (let WW = jW.length - 1; WW >= 0; WW--) OW.$cancelAdd(jW[WW], !1);
          OW.$reindexChildren(jW[0])
        }
        return mW.root?.enqueueChangeTree(mW), NW.splice(WW, iW, ...ZW)
      }
      unshift() {
        const WW = this[UW],
          iW = WW[bW];
        iW.unshift(arguments.length);
        for (let mW = 0; mW < arguments.length; mW++)(mW < 0 || arguments.length <= mW ? void 0 : arguments[mW])?.[bW]?.setParent(this, iW.root, mW);
        const OW = WW.deletedIndexes;
        return OW.length > 0 && OW.unshift(...new Array(arguments.length).fill(!1)), WW.tmpItems.unshift(...arguments), WW.$reindexChildren(arguments.length), WW.items.unshift(...arguments)
      }
      indexOf(WW, iW) {
        return this.items.indexOf(WW, iW)
      }
      lastIndexOf(WW) {
        let iW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.length - 1;
        return this.items.lastIndexOf(WW, iW)
      }
      every(WW, iW) {
        return this.items.every(WW, iW)
      }
      some(WW, iW) {
        return this.items.some(WW, iW)
      }
      forEach(WW, iW) {
        return this.items.forEach(WW, iW)
      }
      map(WW, iW) {
        return this.items.map(WW, iW)
      }
      filter(WW, iW) {
        return this.items.filter(WW, iW)
      }
      reduce(WW, iW) {
        return this.items.reduce.apply(this.items, arguments)
      }
      reduceRight(WW, iW) {
        return this.items.reduceRight.apply(this.items, arguments)
      }
      find(WW, iW) {
        return this.items.find(WW, iW)
      }
      findIndex(WW, iW) {
        return this.items.findIndex(WW, iW)
      }
      fill(WW, iW, OW) {
        throw new Error("ArraySchema#fill() not implemented")
      }
      copyWithin(WW, iW, OW) {
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
        return Em
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
      includes(WW, iW) {
        return this.items.includes(WW, iW)
      }
      flatMap(WW, iW) {
        throw new Error("ArraySchema#flatMap() is not supported.")
      }
      flat(WW) {
        throw new Error("ArraySchema#flat() is not supported.")
      }
      findLast() {
        return this.items.findLast.apply(this.items, arguments)
      }
      findLastIndex() {
        for (var WW = arguments.length, iW = new Array(WW), OW = 0; OW < WW; OW++) iW[OW] = arguments[OW];
        return this.items.findLastIndex.apply(this.items, arguments)
      }
      with(WW, iW) {
        const OW = this.items.slice();
        return WW < 0 && (WW += this.length), OW[WW] = iW, new Em(...OW)
      }
      toReversed() {
        return this.items.slice().reverse()
      }
      toSorted(WW) {
        return this.items.slice().sort(WW)
      }
      toSpliced(WW, iW) {
        for (var OW = arguments.length, mW = new Array(OW > 2 ? OW - 2 : 0), EW = 2; EW < OW; EW++) mW[EW - 2] = arguments[EW];
        const NW = this.items.slice();
        return NW.splice.apply(NW, arguments), NW
      }
      shuffle() {
        return this.move((WW => {
          let iW = this.items.length;
          for (; 0 != iW;) {
            let WW = Math.floor(Math.random() * iW);
            iW--, [this[iW], this[WW]] = [this[WW], this[iW]]
          }
        }))
      }
      move(WW) {
        return this.isMovingItems = !0, WW(this), this.isMovingItems = !1, this
      } [xW](WW) {
        let iW = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        const OW = this[UW] ?? this;
        return iW || OW.deletedIndexes[WW] ? OW.items[WW] : OW.tmpItems[WW] || OW.items[WW]
      } [lW](WW) {
        const iW = this[UW] ?? this;
        iW.items[WW] = void 0, iW._needsCompaction = !0
      } [kW]() {
        const WW = this.tmpItems;
        this.tmpItems = this.items.slice(), this.deletedIndexes.length > 0 && (this.$reindexChildren(0, WW), this.deletedIndexes.length = 0)
      } [MW]() {
        const WW = this[UW] ?? this;
        WW._needsCompaction && (WW._needsCompaction = !1, WW.items = WW.items.filter((WW => void 0 !== WW)))
      } [AW](WW, iW, OW) {
        const mW = this[UW] ?? this,
          EW = mW.items;
        let NW = !1;
        for (let PW = 0; PW < EW.length; PW++) {
          const LW = EW[PW];
          WW.has(PW) ? OW(LW) : (NW = !0, iW(LW, PW), mW[lW](PW))
        }
        NW && mW[MW]()
      }
      toArray() {
        return this.items.slice(0)
      }
      toJSON() {
        return this.toArray().map((WW => "function" === typeof WW.toJSON ? WW.toJSON() : WW))
      }
      clone(WW) {
        let iW;
        return WW ? (iW = new Em, iW.push(...this.items)) : iW = new Em(...this.map((WW => WW[bW] ? WW.clone() : WW))), iW
      }
    }
    Si("array", {
      constructor: Em
    });
    class Nm {
      keyByIndex = new Map;
      indexByKey = Object.create(null);
      nextIndex = 0;
      snapshots;
      indexOf(WW) {
        const iW = this.indexByKey[WW];
        return void 0 === iW ? void 0 : iW
      }
      assign(WW) {
        const iW = this.nextIndex++;
        return this.indexByKey[WW] = iW, this.keyByIndex.set(iW, WW), iW
      }
      snapshot(WW, iW) {
        (this.snapshots ??= new Map).set(WW, iW)
      }
      forgetSnapshot(WW) {
        this.snapshots?.delete(WW)
      }
      snapshotAt(WW) {
        return this.snapshots?.get(WW)
      }
      setIndex(WW, iW) {
        this.keyByIndex.set(WW, iW), this.indexByKey[iW] = WW
      }
      keyOf(WW) {
        return this.keyByIndex.get(WW)
      }
      cleanupAfterEncode() {
        if (void 0 !== this.snapshots) {
          for (const [WW] of this.snapshots) {
            const iW = this.keyByIndex.get(WW);
            void 0 !== iW && (delete this.indexByKey[iW], this.keyByIndex.delete(WW))
          }
          this.snapshots.clear()
        }
      }
      reset() {
        this.indexByKey = Object.create(null), this.keyByIndex.clear(), this.snapshots?.clear(), this.nextIndex = 0
      }
    }
    class Pm {
      [bW];
      [LW];
      childType;
      [jW];
      $items = new Map;
      journal = new Nm;
      _stream;
      get maxPerTick() {
        return this._stream?.maxPerTick ?? 32
      }
      set maxPerTick(WW) {
        (this._stream ??= Ti()).maxPerTick = WW
      }
      get priority() {
        return this._stream?.priority
      }
      set priority(WW) {
        (this._stream ??= Ti()).priority = WW
      }
      get $indexes() {
        return this.journal.keyByIndex
      }
      get _collectionIndexes() {
        return this.journal.indexByKey
      }
      static[wW] = DO;
      static[tW] = FO;
      static COLLECTION_KIND = qO;
      static[ZW](WW, iW, OW) {
        if (!OW || "string" === typeof WW[jW]) return !0;
        const mW = WW[xW](iW) ?? WW.journal.snapshotAt(iW);
        return OW.isChangeTreeVisible(mW[bW])
      }
      static is(WW) {
        return void 0 !== WW.map
      }
      constructor(WW) {
        if (Object.defineProperty(this, bW, {
            value: new oO(this),
            enumerable: !1,
            writable: !0
          }), this[jW] = void 0, WW)
          if (WW instanceof Map || WW instanceof Pm) WW.forEach(((WW, iW) => this.set(iW, WW)));
          else
            for (const iW in WW) this.set(iW, WW[iW])
      }
      static initializeForDecoder() {
        const WW = Object.create(Pm.prototype);
        return WW.$items = new Map, WW.journal = new Nm, WW[jW] = void 0, eO(WW), WW
      } [Symbol.iterator]() {
        return this.$items[Symbol.iterator]()
      }
      get[Symbol.toStringTag]() {
        return this.$items[Symbol.toStringTag]
      }
      static get[Symbol.species]() {
        return Pm
      }
      set(WW, iW) {
        if (void 0 === iW || null === iW) throw new Error(`MapSchema#set('${WW}', ${iW}): trying to set ${iW} value on '${WW}'.`);
        "object" === typeof iW && this[jW] && im(iW, this[jW], this, WW), WW = WW.toString();
        const OW = this[bW],
          mW = void 0 !== iW[bW],
          NW = this.journal;
        let PW, LW = NW.indexOf(WW);
        if (void 0 !== LW) {
          PW = EW.REPLACE;
          const OW = this.$items.get(WW);
          if (OW === iW) return;
          mW && (PW = EW.DELETE_AND_ADD, void 0 !== OW && OW[bW].root?.remove(OW[bW])), void 0 !== NW.snapshotAt(LW) && NW.forgetSnapshot(LW)
        } else LW = NW.assign(WW), PW = EW.ADD;
        return this.$items.set(WW, iW), PW === EW.ADD && OW.isStreamCollection ? void 0 !== OW.root && Hi(this, OW.root, LW) : OW.change(LW, PW), mW && iW[bW].setParent(this, OW.root, LW), this
      }
      get(WW) {
        return this.$items.get(WW)
      }
      getOrInsert(WW, iW) {
        return this.$items.has(WW) ? this.$items.get(WW) : (this.set(WW, iW), iW)
      }
      getOrInsertComputed(WW, iW) {
        if (this.$items.has(WW)) return this.$items.get(WW);
        const OW = iW(WW);
        return this.set(WW, OW), OW
      }
      delete(WW) {
        if (!this.$items.has(WW)) return !1;
        const iW = this.journal.indexOf(WW),
          OW = this.$items.get(WW),
          mW = this[bW];
        if (mW.isStreamCollection) {
          const EW = mW.root;
          let NW = !1;
          return void 0 !== EW && (NW = ni(this, EW, this[LW], iW)), void 0 !== OW?.[bW] && EW?.remove(OW[bW]), this.$items.delete(WW), NW || this.journal.snapshot(iW, OW), !0
        }
        return this.journal.snapshot(iW, OW), mW.delete(iW), this.$items.delete(WW)
      }
      clear() {
        const WW = this[bW];
        WW.discard(), WW.forEachChild(((iW, OW) => {
          WW.root?.remove(iW)
        })), this.journal.reset(), this.$items.clear(), WW.operation(EW.CLEAR)
      } [sW]() {
        const WW = this[bW];
        if (WW.isStreamCollection) throw new Error("@colyseus/schema: cannot reset a streamed MapSchema (pooling not supported).");
        this.$items.forEach((WW => WW?.[sW]?.())), this.$items.clear(), this.journal.reset(), WW.recycle(), this[LW] = void 0
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
        this[bW].pause()
      }
      resumeTracking() {
        this[bW].resume()
      }
      untracked(WW) {
        return this[bW].untracked(WW)
      }
      get isTrackingPaused() {
        return this[bW].paused
      }
      setIndex(WW, iW) {
        this.journal.setIndex(WW, iW)
      }
      getIndex(WW) {
        return this.journal.keyOf(WW)
      } [xW](WW) {
        const iW = this.journal.keyOf(WW);
        return void 0 !== iW ? this.$items.get(iW) : void 0
      } [lW](WW) {
        const iW = this.journal.keyOf(WW);
        void 0 !== iW && (this.$items.delete(iW), this.journal.keyByIndex.delete(WW))
      } [AW](WW, iW, OW) {
        let mW = null;
        if (this.$items.forEach(((EW, NW) => {
            WW.has(NW) ? OW(EW) : ((mW ??= new Set).add(NW), iW(EW, NW))
          })), null !== mW) {
          mW.forEach((WW => {
            this.$items.delete(WW), delete this.journal.indexByKey[WW]
          }));
          const WW = [];
          this.journal.keyByIndex.forEach(((iW, OW) => {
            mW.has(iW) && WW.push(OW)
          }));
          for (let iW = 0; iW < WW.length; iW++) this.journal.keyByIndex.delete(WW[iW])
        }
      } [kW]() {
        this.journal.cleanupAfterEncode()
      }
      _dropView(WW) {
        ei(this, WW)
      }
      _unregister() {}
      toJSON() {
        return Object.fromEntries(Array.from(this, (WW => {
          let [iW, OW] = WW;
          return [iW, "function" === typeof OW.toJSON ? OW.toJSON() : OW]
        })))
      }
      clone(WW) {
        let iW;
        return WW ? iW = Object.assign(new Pm, this) : (iW = new Pm, this.forEach(((WW, OW) => {
          WW[bW] ? iW.set(OW, WW.clone()) : iW.set(OW, WW)
        }))), iW
      }
    }
    Si("map", {
      constructor: Pm
    });
    class Lm {
      [bW];
      [LW];
      [jW];
      $items = new Map;
      deletedItems = {};
      $refId = 0;
      _stream;
      get maxPerTick() {
        return this._stream?.maxPerTick ?? 32
      }
      set maxPerTick(WW) {
        (this._stream ??= Ti()).maxPerTick = WW
      }
      get priority() {
        return this._stream?.priority
      }
      set priority(WW) {
        (this._stream ??= Ti()).priority = WW
      }
      static[wW] = VO;
      static[tW] = FO;
      static COLLECTION_KIND = IO;
      static[ZW](WW, iW, OW) {
        return !OW || "string" === typeof WW[jW] || OW.isChangeTreeVisible((WW[xW](iW) ?? WW.deletedItems[iW])[bW])
      }
      static is(WW) {
        return void 0 !== WW.collection
      }
      constructor(WW) {
        Object.defineProperty(this, bW, {
          value: new oO(this),
          enumerable: !1,
          writable: !0
        }), this[jW] = void 0, WW && WW.forEach((WW => this.add(WW)))
      }
      static initializeForDecoder() {
        const WW = Object.create(Lm.prototype);
        return WW.$items = new Map, WW.deletedItems = {}, WW.$refId = 0, WW[jW] = void 0, eO(WW), WW
      }
      add(WW) {
        const iW = this.$refId++,
          OW = this[bW];
        return this.$items.set(iW, WW), OW.isStreamCollection ? void 0 !== OW.root && Hi(this, OW.root, iW) : OW.change(iW), void 0 !== WW[bW] && WW[bW].setParent(this, OW.root, iW), iW
      }
      at(WW) {
        const iW = Array.from(this.$items.keys())[WW];
        return this.$items.get(iW)
      }
      entries() {
        return this.$items.entries()
      }
      delete(WW) {
        const iW = this.$items.entries();
        let OW, mW;
        for (;
          (mW = iW.next()) && !mW.done;)
          if (WW === mW.value[1]) {
            OW = mW.value[0];
            break
          } if (void 0 === OW) return !1;
        const EW = this[bW];
        if (EW.isStreamCollection) {
          const WW = EW.root,
            iW = this.$items.get(OW);
          return void 0 !== WW && ni(this, WW, this[LW], OW), void 0 !== iW?.[bW] && WW?.remove(iW[bW]), this.deletedItems[OW] = iW, this.$items.delete(OW)
        }
        return this.deletedItems[OW] = EW.delete(OW), this.$items.delete(OW)
      }
      clear() {
        const WW = this[bW];
        WW.discard(), WW.forEachChild(((iW, OW) => {
          WW.root?.remove(iW)
        })), this.$items.clear(), WW.operation(EW.CLEAR)
      } [sW]() {
        const WW = this[bW];
        if (WW.isStreamCollection) throw new Error("@colyseus/schema: cannot reset a streamed CollectionSchema (pooling not supported).");
        this.$items.forEach((WW => WW?.[sW]?.())), this.$items.clear(), this.deletedItems = {}, this.$refId = 0, WW.recycle(), this[LW] = void 0
      }
      has(WW) {
        return Array.from(this.$items.values()).some((iW => iW === WW))
      }
      forEach(WW) {
        this.$items.forEach(((iW, OW, mW) => WW(iW, OW, this)))
      }
      values() {
        return this.$items.values()
      }
      get size() {
        return this.$items.size
      }
      pauseTracking() {
        this[bW].pause()
      }
      resumeTracking() {
        this[bW].resume()
      }
      untracked(WW) {
        return this[bW].untracked(WW)
      }
      get isTrackingPaused() {
        return this[bW].paused
      } [Symbol.iterator]() {
        return this.$items.values()
      }
      setIndex(WW, iW) {}
      getIndex(WW) {
        return WW
      } [xW](WW) {
        return this.$items.get(WW)
      } [lW](WW) {
        this.$items.delete(WW)
      } [AW](WW, iW, OW) {
        let mW = null;
        if (this.$items.forEach(((EW, NW) => {
            WW.has(NW) ? OW(EW) : ((mW ??= []).push(NW), iW(EW, NW))
          })), null !== mW)
          for (let EW = 0; EW < mW.length; EW++) this[lW](mW[EW])
      } [kW]() {
        for (const WW in this.deletedItems) delete this.deletedItems[WW]
      }
      _dropView(WW) {
        ei(this, WW)
      }
      _unregister() {}
      toArray() {
        return Array.from(this.$items.values())
      }
      toJSON() {
        const WW = [];
        return this.forEach(((iW, OW) => {
          WW.push("function" === typeof iW.toJSON ? iW.toJSON() : iW)
        })), WW
      }
      clone(WW) {
        let iW;
        return WW ? iW = Object.assign(new Lm, this) : (iW = new Lm, this.forEach((WW => {
          WW[bW] ? iW.add(WW.clone()) : iW.add(WW)
        }))), iW
      }
    }
    Si("collection", {
      constructor: Lm
    });
    class cm {
      [bW];
      [LW];
      [jW];
      $items = new Map;
      deletedItems = {};
      $refId = 0;
      _stream;
      get maxPerTick() {
        return this._stream?.maxPerTick ?? 32
      }
      set maxPerTick(WW) {
        (this._stream ??= Ti()).maxPerTick = WW
      }
      get priority() {
        return this._stream?.priority
      }
      set priority(WW) {
        (this._stream ??= Ti()).priority = WW
      }
      static[wW] = VO;
      static[tW] = FO;
      static COLLECTION_KIND = GO;
      static[ZW](WW, iW, OW) {
        return !OW || "string" === typeof WW[jW] || OW.isVisible((WW[xW](iW) ?? WW.deletedItems[iW])[bW])
      }
      static is(WW) {
        return void 0 !== WW.set
      }
      constructor(WW) {
        Object.defineProperty(this, bW, {
          value: new oO(this),
          enumerable: !1,
          writable: !0
        }), this[jW] = void 0, WW && WW.forEach((WW => this.add(WW)))
      }
      static initializeForDecoder() {
        const WW = Object.create(cm.prototype);
        return WW.$items = new Map, WW.deletedItems = {}, WW.$refId = 0, WW[jW] = void 0, eO(WW), WW
      }
      add(WW) {
        if (this.has(WW)) return !1;
        const iW = this.$refId++,
          OW = this[bW];
        return this.$items.set(iW, WW), OW.isStreamCollection ? void 0 !== OW.root && Hi(this, OW.root, iW) : OW.change(iW, EW.ADD), void 0 !== WW[bW] && WW[bW].setParent(this, OW.root, iW), iW
      }
      entries() {
        return this.$items.entries()
      }
      delete(WW) {
        const iW = this.$items.entries();
        let OW, mW;
        for (;
          (mW = iW.next()) && !mW.done;)
          if (WW === mW.value[1]) {
            OW = mW.value[0];
            break
          } if (void 0 === OW) return !1;
        const EW = this[bW];
        if (EW.isStreamCollection) {
          const WW = EW.root,
            iW = this.$items.get(OW);
          return void 0 !== WW && ni(this, WW, this[LW], OW), void 0 !== iW?.[bW] && WW?.remove(iW[bW]), this.deletedItems[OW] = iW, this.$items.delete(OW)
        }
        return this.deletedItems[OW] = EW.delete(OW), this.$items.delete(OW)
      }
      clear() {
        const WW = this[bW];
        WW.discard(), this.$items.clear(), WW.operation(EW.CLEAR)
      } [sW]() {
        const WW = this[bW];
        if (WW.isStreamCollection) throw new Error("@colyseus/schema: cannot reset a streamed SetSchema (pooling not supported).");
        this.$items.forEach((WW => WW?.[sW]?.())), this.$items.clear(), this.deletedItems = {}, this.$refId = 0, WW.recycle(), this[LW] = void 0
      }
      has(WW) {
        const iW = this.$items.values();
        let OW, mW = !1;
        for (;
          (OW = iW.next()) && !OW.done;)
          if (WW === OW.value) {
            mW = !0;
            break
          } return mW
      }
      forEach(WW) {
        this.$items.forEach(((iW, OW, mW) => WW(iW, OW, this)))
      }
      values() {
        return this.$items.values()
      }
      get size() {
        return this.$items.size
      }
      pauseTracking() {
        this[bW].pause()
      }
      resumeTracking() {
        this[bW].resume()
      }
      untracked(WW) {
        return this[bW].untracked(WW)
      }
      get isTrackingPaused() {
        return this[bW].paused
      } [Symbol.iterator]() {
        return this.$items.values()
      }
      setIndex(WW, iW) {}
      getIndex(WW) {
        return WW
      } [xW](WW) {
        return this.$items.get(WW)
      } [lW](WW) {
        this.$items.delete(WW)
      } [AW](WW, iW, OW) {
        let mW = null;
        if (this.$items.forEach(((EW, NW) => {
            WW.has(NW) ? OW(EW) : ((mW ??= []).push(NW), iW(EW, NW))
          })), null !== mW)
          for (let EW = 0; EW < mW.length; EW++) this[lW](mW[EW])
      } [kW]() {
        for (const WW in this.deletedItems) delete this.deletedItems[WW]
      }
      _dropView(WW) {
        ei(this, WW)
      }
      _unregister() {}
      toArray() {
        return Array.from(this.$items.values())
      }
      toJSON() {
        const WW = [];
        return this.forEach(((iW, OW) => {
          WW.push("function" === typeof iW.toJSON ? iW.toJSON() : iW)
        })), WW
      }
      clone(WW) {
        let iW;
        return WW ? iW = Object.assign(new cm, this) : (iW = new cm, this.forEach((WW => {
          WW[bW] ? iW.add(WW.clone()) : iW.add(WW)
        }))), iW
      }
    }
    Si("set", {
      constructor: cm
    });
    class wm {
      [bW];
      [LW];
      [jW];
      $items = new Map;
      $nextPosition = 0;
      _itemIndex = new Map;
      _stream;
      get maxPerTick() {
        return this._stream?.maxPerTick ?? 32
      }
      set maxPerTick(WW) {
        (this._stream ??= Ti()).maxPerTick = WW
      }
      get priority() {
        return this._stream?.priority
      }
      set priority(WW) {
        (this._stream ??= Ti()).priority = WW
      }
      static $isStream = !0;
      static[wW] = VO;
      static[tW] = FO;
      static COLLECTION_KIND = aO;
      static[ZW](WW, iW, OW) {
        if (!OW) return !0;
        const mW = WW[xW](iW);
        return void 0 !== mW && OW.isVisible(mW[bW])
      }
      static is(WW) {
        return WW && void 0 !== WW.stream
      }
      constructor() {
        Object.defineProperty(this, bW, {
          value: new oO(this),
          enumerable: !1,
          writable: !0
        }), this[jW] = void 0
      }
      static initializeForDecoder() {
        const WW = Object.create(wm.prototype);
        return WW.$items = new Map, WW.$nextPosition = 0, WW._itemIndex = new Map, WW[jW] = void 0, eO(WW), WW
      }
      add(WW) {
        if (this._itemIndex.has(WW)) return -1;
        const iW = this.$nextPosition++;
        this.$items.set(iW, WW), this._itemIndex.set(WW, iW);
        const OW = this[bW].root;
        return void 0 !== WW[bW] && WW[bW].setParent(this, OW, iW), void 0 !== OW && Hi(this, OW, iW), iW
      }
      remove(WW) {
        const iW = this._itemIndex.get(WW);
        if (void 0 === iW) return !1;
        this._itemIndex.delete(WW), this.$items.delete(iW);
        const OW = this[bW].root;
        return void 0 !== OW && (ni(this, OW, this[LW], iW), void 0 !== WW[bW] && OW.remove(WW[bW])), !0
      }
      has(WW) {
        return this._itemIndex.has(WW)
      }
      clear() {
        const WW = this[bW].root;
        if (void 0 !== WW) {
          ! function(WW, iW, OW) {
            const mW = WW._stream;
            if (void 0 !== mW) {
              mW.broadcastPending.clear();
              for (const WW of mW.sentBroadcast) mW.broadcastDeletes.add(WW);
              mW.sentBroadcast.clear(), iW.forEachActiveView((WW => {
                mW.pendingByView.get(WW.id)?.clear();
                const iW = mW.sentByView.get(WW.id);
                if (void 0 !== iW && iW.size > 0) {
                  let mW = WW.changes.get(OW);
                  void 0 === mW && (mW = new Map, WW.changes.set(OW, mW));
                  for (const WW of iW) mW.set(WW, EW.DELETE);
                  iW.clear()
                }
              }))
            }
          }(this, WW, this[LW]);
          for (const iW of this.$items.values()) void 0 !== iW[bW] && WW.remove(iW[bW])
        }
        this.$items.clear(), this._itemIndex.clear()
      }
      forEach(WW) {
        for (const [iW, OW] of this.$items) WW(OW, iW, this)
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
      setIndex(WW, iW) {}
      getIndex(WW) {
        return WW
      } [xW](WW) {
        return this.$items.get(WW)
      } [lW](WW) {
        const iW = this.$items.get(WW);
        void 0 !== iW && (this._itemIndex.delete(iW), this.$items.delete(WW))
      } [AW]() {} [kW]() {}
      toArray() {
        return Array.from(this.$items.values())
      }
      toJSON() {
        const WW = [];
        return this.forEach((iW => {
          WW.push("function" === typeof iW?.toJSON ? iW.toJSON() : iW)
        })), WW
      }
      clone(WW) {
        if (WW) {
          return Object.assign(new wm, this)
        }
        const iW = new wm;
        return iW.maxPerTick = this.maxPerTick, this.forEach((WW => {
          iW.add("function" === typeof WW?.clone ? WW.clone() : WW)
        })), iW
      }
      _dropView(WW) {
        ei(this, WW)
      }
      _unregister() {}
    }
    Si("stream", {
      constructor: wm
    });
    class tm {
      [SW] = !0;
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
        if (WW && "object" === typeof WW && void 0 !== WW.array) throw new Error(yi);
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

    function Zm(WW) {
      return null != WW && !0 === WW[SW]
    }

    function xm(WW) {
      return () => new tm(WW)
    }

    function lm(WW) {
      if (Zm(WW)) {
        const iW = WW._type;
        throw new Error(`t.array/map/set/collection(): a t.* builder is not a valid element type \u2014 ${"string"===typeof iW?`use the type name instead: t.array("${iW}")`:'collections accept a Schema class or a primitive type name ("string", "number", \u2026)'}.`)
      }
      return WW
    }

    function Am(WW) {
      return new tm({
        quantized: gi(WW)
      })
    }
    const bm = Object.freeze({
        string: xm("string"),
        number: xm("number"),
        boolean: xm("boolean"),
        int8: xm("int8"),
        uint8: xm("uint8"),
        int16: xm("int16"),
        uint16: xm("uint16"),
        int32: xm("int32"),
        uint32: xm("uint32"),
        int64: xm("int64"),
        uint64: xm("uint64"),
        float32: xm("float32"),
        float64: xm("float64"),
        bigint64: xm("bigint64"),
        biguint64: xm("biguint64"),
        ref: WW => new tm(WW),
        array: WW => new tm({
          array: lm(WW)
        }),
        map: WW => new tm({
          map: lm(WW)
        }),
        set: WW => new tm({
          set: lm(WW)
        }),
        collection: WW => new tm({
          collection: lm(WW)
        }),
        stream: WW => {
          const iW = new tm({
            stream: lm(WW)
          });
          return iW._stream = !0, iW
        },
        quantized: Am,
        angle: WW => Am({
          min: 0,
          max: 2 * Math.PI,
          mode: "wrap",
          bits: WW?.bits ?? 16
        })
      }),
      jm = -1;

    function Um(WW) {
      return Xi.register(WW), WW
    }

    function km() {
      let WW = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : jm;
      return function(iW, OW) {
        const mW = ri.initialize(iW.constructor);
        ri.setTag(mW, OW, WW)
      }
    }

    function sm(WW, iW) {
      const OW = ri.initialize(WW.constructor);
      ri.setUnreliable(OW, iW)
    }

    function Mm(WW, iW) {
      const OW = ri.initialize(WW.constructor);
      ri.setPatchOnly(OW, iW)
    }

    function Km(WW, iW) {
      const OW = ri.initialize(WW.constructor);
      ri.setFullStateOnly(OW, iW)
    }

    function Sm(WW, iW) {
      return function(OW, mW) {
        const EW = OW.constructor;
        if (!WW) throw new Error(`${EW.name}: @type() reference provided for "${mW}" is undefined. Make sure you don't have any circular dependencies.`);
        WW = qi(WW, `${EW.name}.${mW}`), Xi.register(EW);
        const NW = Object.getPrototypeOf(EW)[Symbol.metadata],
          PW = ri.initialize(EW);
        let LW = PW[mW];
        if (void 0 !== PW[LW]) {
          if (PW[LW].deprecated) return;
          if (void 0 !== PW[LW].type) {
            const WW = new Error(`@colyseus/schema: Duplicate '${mW}' definition on '${EW.name}'.\nCheck @type() annotation`);
            throw new Error(`${WW.message} ${WW.stack.split("\n")[4].trim()}`)
          }
        } else LW = PW[JW] ?? (NW && NW[JW]) ?? -1, LW++;
        if (iW && iW.manual) ri.addField(PW, LW, mW, WW, {
          enumerable: !0,
          configurable: !0,
          writable: !0
        });
        else {
          const {
            complexTypeKlass: iW,
            childType: OW
          } = Bi(WW);
          ri.addField(PW, LW, mW, WW, ym(mW, LW, OW, iW))
        }
        PW[YW][mW] && Object.defineProperty(OW, mW, PW[YW][mW]), ("string" === typeof WW || Di(WW)) && (PW[TW] || Object.defineProperty(PW, TW, {
          value: [],
          enumerable: !1,
          configurable: !0,
          writable: !0
        }), PW[TW][LW] = "string" === typeof WW ? ii[WW] : Ci(WW.quantized))
      }
    }
    const Ym = {
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

    function ym(WW, iW, OW, mW) {
      let NW;
      return NW = mW ? function(WW, iW, OW, mW) {
        const NW = mW.constructor === Em,
          PW = mW.constructor === Pm;
        return function(WW) {
          const mW = this[KW],
            LW = mW[iW];
          if (WW !== LW) {
            if (void 0 !== WW && null !== WW) {
              if (!NW || WW instanceof Em)
                if (!PW || WW instanceof Pm) WW[jW] = OW;
                else {
                  const iW = new Pm;
                  if (iW[jW] = OW, WW instanceof Map) WW.forEach(((WW, OW) => iW.set(OW, WW)));
                  else
                    for (const OW in WW) iW.set(OW, WW[OW]);
                  WW = iW
                }
              else {
                const iW = new Em;
                iW[jW] = OW, iW.push(...WW), WW = iW
              }
              const mW = this[bW],
                wW = this.constructor;
              void 0 !== LW && null !== LW && LW[bW] ? (mW.root?.remove(LW[bW]), wW[cW](mW, iW, EW.DELETE_AND_ADD)) : wW[cW](mW, iW, EW.ADD), WW[bW]?.setParent(this, mW.root, iW)
            } else void 0 !== LW && null !== LW && this[bW].delete(iW);
            mW[iW] = WW
          }
        }
      }(0, iW, OW, mW) : "string" === typeof OW ? function(WW, iW, OW) {
        const mW = Ym[OW],
          NW = "string" === OW,
          PW = "boolean" === OW;
        return function(OW) {
          const LW = this[KW],
            wW = LW[iW];
          if (OW !== wW) {
            if (void 0 !== OW && null !== OW) {
              if (!PW && void 0 !== mW && typeof OW !== mW && (!NW || null !== OW)) {
                const iW = OW && OW.constructor ? ` (${OW.constructor.name})` : "";
                throw new Wm(`a '${mW}' was expected, but '${JSON.stringify(OW)}'${iW} was provided in ${this.constructor.name}#${WW}`)
              }
              this.constructor[cW](this[bW], iW, EW.ADD)
            } else void 0 !== wW && null !== wW && this[bW].delete(iW);
            LW[iW] = OW
          }
        }
      }(WW, iW, OW) : Di(OW) ? function(WW, iW, OW) {
        return function(mW) {
          const NW = this[KW],
            PW = NW[iW];
          if (void 0 !== mW && null !== mW) {
            if ("number" !== typeof mW) throw new Wm(`a 'number' was expected, but '${JSON.stringify(mW)}' was provided in ${this.constructor.name}#${WW}`);
            if ((mW = fi(OW, Vi(OW, mW))) === PW) return;
            this.constructor[cW](this[bW], iW, EW.ADD)
          } else {
            if (mW === PW) return;
            void 0 !== PW && null !== PW && this[bW].delete(iW)
          }
          NW[iW] = mW
        }
      }(WW, iW, OW.quantized) : function(WW, iW, OW) {
        return function(mW) {
          const NW = this[KW],
            PW = NW[iW];
          if (mW !== PW) {
            if (void 0 !== mW && null !== mW) {
              im(mW, OW, this, WW);
              const NW = this[bW],
                LW = this.constructor;
              void 0 !== PW && null !== PW && PW[bW] ? (NW.root?.remove(PW[bW]), LW[cW](NW, iW, EW.DELETE_AND_ADD)) : LW[cW](NW, iW, EW.ADD), mW[bW]?.setParent(this, NW.root, iW)
            } else void 0 !== PW && null !== PW && this[bW].delete(iW);
            NW[iW] = mW
          }
        }
      }(WW, iW, OW), {
        get: function() {
          return this[KW][iW]
        },
        set: NW,
        enumerable: !0,
        configurable: !0
      }
    }

    function Tm() {
      let WW = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
      return function(iW, OW) {
        const mW = ri.initialize(iW.constructor);
        ri.setDeprecated(mW, OW), WW && (mW[YW] ??= {}, mW[YW][OW] = {
          get: function() {
            throw new Error(`${OW} is deprecated.`)
          },
          set: function(WW) {},
          enumerable: !1,
          configurable: !0
        }, Object.defineProperty(iW, OW, mW[YW][OW]))
      }
    }
    let Jm = !1;

    function hm(WW, iW, OW) {
      Jm || (Jm = !0, console.warn("@colyseus/schema: defineTypes() is deprecated and will be removed in a future release. Use schema() with t.* field builders instead \u2192 https://docs.colyseus.io/state/schema"));
      for (let mW in iW) Sm(iW[mW], OW)(WW.prototype, mW);
      return WW
    }

    function Hm(WW, iW) {
      let OW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : um;
      if (null == WW || "object" !== typeof WW) throw new Error(`schema(): first argument must be a fields object (got ${typeof WW}).`);
      const mW = {},
        EW = {},
        NW = {},
        PW = {},
        LW = (WW, iW) => {
          if (iW.hasDefault)((WW, iW) => {
            "function" === typeof iW ? PW[WW] = iW : iW && "function" === typeof iW.clone ? PW[WW] = () => iW.clone() : NW[WW] = iW
          })(WW, iW.default);
          else if (!iW.optional) {
            const OW = function(WW) {
              if (WW && "object" === typeof WW) {
                if (void 0 !== WW.array) return () => new Em;
                if (void 0 !== WW.map) return () => new Pm;
                if (void 0 !== WW.set) return () => new cm;
                if (void 0 !== WW.collection) return () => new Lm;
                if (void 0 !== WW.stream) return () => new wm
              } else if ("function" === typeof WW && um.is(WW) && (!WW.prototype.initialize || 0 === WW.prototype.initialize.length)) return () => new WW
            }(iW.type);
            OW && (PW[WW] = OW)
          }
        },
        cW = {},
        wW = [],
        tW = [],
        ZW = {},
        xW = [],
        lW = [],
        AW = {},
        bW = [];
      for (const KW in WW) {
        const OW = WW[KW],
          NW = `schema(${iW?`'${iW}'`:""}): field '${KW}'`;
        if (Zm(OW)) {
          const WW = OW.toDefinition();
          if (WW.noSync) {
            if (void 0 !== WW.view || WW.unreliable || WW.patchOnly || WW.fullStateOnly || WW.stream) throw new Error(`${NW} uses .noSync() together with a sync-only modifier (.view/.unreliable/.patchOnly/.fullStateOnly/.stream). A local-only field cannot be synchronized.`);
            LW(KW, WW);
            continue
          }
          if (WW.patchOnly && WW.fullStateOnly) throw new Error(`${NW} uses .patchOnly() together with .fullStateOnly(). Those are the only two delivery channels, so the field would never reach a client \u2014 use .noSync() if that is intended.`);
          const iW = qi(WW.type, NW);
          if ("function" === typeof iW && !um.is(iW)) throw new Error(`${NW} is a synced ref to non-Schema class '${iW.name||"(anonymous)"}' \u2014 use .noSync(), or Metadata.setFields().`);
          mW[KW] = iW, void 0 !== WW.view && (cW[KW] = WW.view), WW.unreliable && wW.push(KW), WW.patchOnly && tW.push(KW), WW.deprecated && (ZW[KW] = WW.deprecatedThrows), WW.fullStateOnly && xW.push(KW), WW.stream && lW.push(KW), void 0 !== WW.streamPriority && (AW[KW] = WW.streamPriority), WW.optional && bW.push(KW), LW(KW, WW)
        } else {
          if ("function" !== typeof OW) throw new Error(`${NW} must be a t.* builder, Schema subclass, or method (got ${typeof OW}).`);
          um.is(OW) ? (mW[KW] = OW, OW.prototype.initialize && 0 !== OW.prototype.initialize.length || (PW[KW] = () => new OW)) : EW[KW] = OW
        }
      }
      const jW = WW => {
          for (const iW in NW) WW[iW] = NW[iW];
          for (const iW in PW) WW[iW] = PW[iW]()
        },
        UW = () => {
          const WW = {};
          return jW(WW), WW
        },
        kW = "function" === typeof EW.initialize,
        sW = EW.initialize ?? OW._initialize,
        MW = class extends OW {
          constructor() {
            for (var WW = arguments.length, iW = new Array(WW), OW = 0; OW < WW; OW++) iW[OW] = arguments[OW];
            const EW = iW[0];
            void 0 === EW ? (super(), jW(this)) : super(Object.assign(UW(), kW ? (WW => {
              const iW = Object.keys(mW),
                OW = {};
              for (const mW in WW) iW.includes(mW) || (OW[mW] = WW[mW]);
              return OW
            })(EW) : EW)), sW && new.target === MW && sW.apply(this, iW)
          }
        };
      iW && Object.defineProperty(MW, "name", {
        value: iW
      }), ri.setFields(MW, mW), MW._getDefaultValues = UW, MW._initialize = sW, Object.assign(MW.prototype, EW);
      for (const KW in cW) km(cW[KW])(MW.prototype, KW);
      for (const KW of wW) sm(MW.prototype, KW);
      for (const KW of tW) Mm(MW.prototype, KW);
      for (const KW in ZW) Tm(ZW[KW])(MW.prototype, KW);
      if (xW.length > 0 || lW.length > 0) {
        const WW = MW[Symbol.metadata];
        for (const iW of xW) ri.setFullStateOnly(WW, iW);
        for (const iW of lW) ri.setStream(WW, iW);
        for (const iW in AW) ri.setStreamPriority(WW, iW, AW[iW])
      }
      if (bW.length > 0) {
        const WW = MW[Symbol.metadata];
        for (const iW of bW) WW[WW[iW]].optional = !0
      }
      return MW.extend = (WW, iW) => Hm(WW, iW, MW), MW
    }

    function nm(WW) {
      const iW = WW[bW].root,
        OW = {
          ops: {},
          refs: []
        };
      let mW = iW.changes.next;
      for (; mW;) {
        const WW = mW.changeTree;
        void 0 !== WW ? (OW.refs.push(`refId#${WW.ref[LW]}`), WW.forEach(((WW, iW) => {
          if (WW < 0 || !iW) return;
          const mW = EW[iW];
          OW.ops[mW] || (OW.ops[mW] = 0), OW.ops[mW]++
        })), mW = mW.next) : mW = mW.next
      }
      return OW
    }
    class um {
      static[wW] = gO;
      static[tW] = zO;
      [LW];
      [KW];
      static initialize(WW) {
        Object.defineProperty(WW, bW, {
          value: new oO(WW),
          enumerable: !1,
          writable: !0
        }), WW[KW] = []
      }
      static initializeForDecoder() {
        const WW = Object.create(this.prototype);
        return eO(WW), WW[KW] = [], WW
      }
      static reset(WW) {
        const iW = WW?.[bW];
        if (void 0 === iW || "function" !== typeof iW.recycle) throw new Error("@colyseus/schema: Schema.reset() requires a tracked (encoder-side) instance.");
        if (void 0 !== iW.extraParents) throw new Error(`@colyseus/schema: cannot reset a shared instance (${WW.constructor.name}) with multiple parents.`);
        WW[sW]()
      } [sW]() {
        const WW = this.constructor[Symbol.metadata],
          iW = WW?.[hW] ?? [],
          OW = this[KW];
        for (let mW = 0; mW < iW.length; mW++) {
          const WW = OW[iW[mW]];
          WW?.[sW]?.()
        }
        this[bW].recycle(), this[LW] = void 0
      }
      static is(WW) {
        const iW = WW[Symbol.metadata];
        return "object" === typeof iW && null !== iW
      }
      static isSchema(WW) {
        return "function" === typeof WW?.assign
      }
      static[cW](WW, iW) {
        let OW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : EW.ADD;
        WW.change(iW, OW)
      }
      static[ZW](WW, iW, OW) {
        const mW = WW.constructor[Symbol.metadata],
          EW = mW[iW]?.tag;
        return void 0 === OW ? void 0 === EW : void 0 === EW || (EW === jm ? OW.isChangeTreeVisible(WW[bW]) : OW.hasTagOnTree(WW[bW], EW))
      }
      constructor(WW) {
        um.initialize(this), WW && um.assignProps(this, WW)
      }
      assign(WW) {
        return um.assignProps(this, WW), this
      }
      static assignProps(WW, iW) {
        const OW = WW.constructor[Symbol.metadata];
        if (OW && void 0 !== OW[JW])
          for (let EW = 0; EW <= OW[JW]; EW++) {
            const mW = OW[EW];
            if (!mW) continue;
            const NW = iW[mW.name];
            void 0 !== NW && (WW[mW.name] = NW)
          }
        const mW = Object.keys(iW);
        for (let EW = 0; EW < mW.length; EW++) {
          const NW = mW[EW];
          OW && void 0 !== OW[NW] || (WW[NW] = iW[NW])
        }
      }
      restore(WW) {
        const iW = this.constructor[Symbol.metadata];
        for (const OW in iW) {
          const mW = iW[OW],
            EW = mW.name,
            NW = mW.type,
            PW = WW[EW];
          if (void 0 !== PW && null !== PW)
            if ("string" === typeof NW) this[EW] = PW;
            else if (um.is(NW)) {
            const WW = new NW;
            WW.restore(PW), this[EW] = WW
          } else if ("object" === typeof NW) {
            const WW = Object.keys(NW)[0],
              iW = NW[WW];
            if ("map" === WW) {
              const WW = this[EW];
              for (const OW in PW)
                if (um.is(iW)) {
                  const mW = new iW;
                  mW.restore(PW[OW]), WW.set(OW, mW)
                } else WW.set(OW, PW[OW])
            } else if ("array" === WW) {
              const WW = this[EW];
              for (let OW = 0; OW < PW.length; OW++)
                if (um.is(iW)) {
                  const mW = new iW;
                  mW.restore(PW[OW]), WW.push(mW)
                } else WW.push(PW[OW])
            }
          }
        }
        return this
      }
      setDirty(WW, iW) {
        const OW = this.constructor[Symbol.metadata];
        this[bW].change(OW[OW[WW]].index, iW)
      }
      pauseTracking() {
        this[bW].pause()
      }
      resumeTracking() {
        this[bW].resume()
      }
      untracked(WW) {
        return this[bW].untracked(WW)
      }
      get isTrackingPaused() {
        return this[bW].paused
      }
      clone() {
        const WW = Object.create(this.constructor.prototype);
        um.initialize(WW);
        const iW = this.constructor[Symbol.metadata];
        for (const OW in iW) {
          const mW = iW[OW].name;
          "object" === typeof this[mW] && "function" === typeof this[mW]?.clone ? WW[mW] = this[mW].clone() : WW[mW] = this[mW]
        }
        return WW
      }
      toJSON() {
        const WW = {},
          iW = this.constructor[Symbol.metadata];
        for (const OW in iW) {
          const mW = iW[OW],
            EW = mW.name;
          mW.deprecated || null === this[EW] || "undefined" === typeof this[EW] || (WW[EW] = "function" === typeof this[EW].toJSON ? this[EW].toJSON() : this[EW])
        }
        return WW
      }
      discardAllChanges() {
        this[bW].discardAll()
      } [xW](WW) {
        return this[this.constructor[Symbol.metadata][WW].name]
      } [lW](WW) {
        this[this.constructor[Symbol.metadata][WW].name] = void 0
      }
      static debugRefIds(WW) {
        let iW = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          OW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          mW = arguments.length > 3 ? arguments[3] : void 0,
          EW = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "";
        const NW = iW ? ` - ${JSON.stringify(WW.toJSON())}` : "",
          PW = WW[bW],
          cW = WW[LW],
          wW = mW ? mW.root.refCount[cW] : PW.refCount,
          tW = wW > 1 ? ` [\xd7${wW}]` : "";
        let ZW = `${function(WW){return new Array(WW).fill(0).map(((iW,OW)=>OW===WW-1?"\u2514\u2500 ":"   ")).join("")}(OW)}${EW}${WW.constructor.name} (refId: ${cW})${tW}${NW}\n`;
        return PW.forEachChild(((EW, NW) => {
          let PW = NW;
          "number" === typeof NW && WW.$indexes && (PW = WW.$indexes.get(NW) ?? NW);
          const LW = void 0 !== WW.forEach && void 0 !== PW ? `["${PW}"]: ` : "";
          ZW += this.debugRefIds(EW.ref, iW, OW + 1, mW, LW)
        })), ZW
      }
      static debugRefIdEncodingOrder(WW) {
        let iW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "allChanges";
        const OW = [],
          mW = WW[bW];
        if ("changes" === iW) {
          let WW = mW.root.changes?.next;
          for (; WW;) WW.changeTree && OW.push(WW.changeTree.ref[LW]), WW = WW.next;
          return OW
        }
        const EW = "allFilteredChanges" === iW,
          NW = new Set,
          PW = WW => {
            NW.has(WW) || (NW.add(WW), WW.isFiltered === EW && OW.push(WW.ref[LW]), WW.forEachChild(((WW, iW) => PW(WW))))
          };
        return PW(mW), OW
      }
      static debugRefIdsFromDecoder(WW) {
        return this.debugRefIds(WW.state, !1, 0, WW)
      }
      static debugChanges(WW) {
        let iW = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        const OW = WW[bW],
          mW = iW ? "allChanges" : "changes";
        let NW = `${WW.constructor.name} (${WW[LW]}) -> .${mW}:\n`;
        return iW ? OW.forEachLive((WW => {
          NW += `- [${WW}]: ADD (${JSON.stringify(OW.getValue(Number(WW),!0))})\n`
        })) : OW.forEach(((WW, iW) => {
          WW < 0 || !iW || (NW += `- [${WW}]: ${EW[iW]} (${JSON.stringify(OW.getValue(Number(WW),!1))})\n`)
        })), NW
      }
    }
    NW(um);
    const om = {
      value: 0,
      enumerable: !1,
      writable: !0
    };
    class dm {
      types;
      nextUniqueId = 0;
      changeTrees = {};
      get refCount() {
        const WW = {};
        for (const iW in this.changeTrees) WW[iW] = this.changeTrees[iW].refCount;
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
        this.types.hasFilters && (WW.flags & nO || (WW.flags |= nO, this.pendingFilterRefresh.push(WW)))
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
        const iW = WW.id;
        for (const OW of this.streamTrees) OW._dropView(iW)
      }
      forEachActiveView(WW) {
        for (const [iW, OW] of this.activeViews) {
          const mW = OW.deref();
          if (void 0 !== mW) WW(mW);
          else {
            this.activeViews.delete(iW);
            for (const WW of this.streamTrees) WW._dropView(iW)
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
        let iW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        this.types = WW, this.nextUniqueId = iW
      }
      add(WW) {
        const iW = WW.ref;
        void 0 === iW[LW] && (om.value = this.nextUniqueId++, Object.defineProperty(iW, LW, om));
        const OW = iW[LW],
          mW = void 0 === this.changeTrees[OW];
        mW && (this.changeTrees[OW] = WW), WW.needsRestage && (WW.needsRestage = !1, WW.forEachLiveWithCtx(WW, EO));
        const EW = mW ? 0 : WW.refCount;
        return WW.refCount = EW + 1, EW > 0 && this.enqueueFilterRefresh(WW), mW
      }
      remove(WW) {
        const iW = WW.refCount - 1;
        if (iW <= 0) {
          if (WW.root = void 0, delete this.changeTrees[WW.ref[LW]], WW.isStreamCollection) {
            const iW = WW.ref;
            iW._unregister?.(), this.unregisterStream(iW)
          }
          this.removeFromQueue(WW), this.removeFromUnreliableQueue(WW), WW.refCount = 0, WW.needsRestage = !0, WW.forEachChild(((iW, OW) => {
            iW.removeParent(WW.ref) && (void 0 === iW.parentRef || iW.refCount > 0 ? this.remove(iW) : this.moveNextToParent(iW))
          }))
        } else WW.refCount = iW, this.enqueueFilterRefresh(WW), this.recursivelyMoveNextToParent(WW);
        return iW
      }
      recursivelyMoveNextToParent(WW) {
        this.moveNextToParent(WW), WW.forEachChild(((WW, iW) => this.recursivelyMoveNextToParent(WW)))
      }
      moveNextToParent(WW) {
        WW.changesNode && this._moveNextToParentInList(this.changes, WW, WW.changesNode, "changesNode"), WW.unreliableChangesNode && this._moveNextToParentInList(this.unreliableChanges, WW, WW.unreliableChangesNode, "unreliableChangesNode")
      }
      _moveNextToParentInList(WW, iW, OW, mW) {
        const EW = iW.parent;
        if (!EW || !EW[bW]) return;
        const NW = EW[bW][mW];
        NW && NW !== OW && (OW.position > NW.position || (OW.prev ? OW.prev.next = OW.next : WW.next = OW.next, OW.next ? OW.next.prev = OW.prev : WW.tail = OW.prev, OW.prev = WW.tail, OW.next = void 0, WW.tail.next = OW, WW.tail = OW, OW.position = WW.nextPosition++))
      }
      enqueueChangeTree(WW) {
        (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : WW.changesNode) || (WW.changesNode = this._appendToList(this.changes, WW))
      }
      enqueueUnreliable(WW) {
        (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : WW.unreliableChangesNode) || (WW.unreliableChangesNode = this._appendToList(this.unreliableChanges, WW))
      }
      _appendToList(WW, iW) {
        const OW = this._nodePool;
        let mW;
        return OW.length > 0 ? (mW = OW.pop(), mW.changeTree = iW, mW.next = void 0, mW.prev = void 0) : mW = {
          changeTree: iW,
          next: void 0,
          prev: void 0,
          position: 0
        }, WW.next ? (mW.prev = WW.tail, WW.tail.next = mW, WW.tail = mW) : (WW.nextPosition = 0, WW.next = mW, WW.tail = mW), mW.position = WW.nextPosition++, mW
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
      _removeNode(WW, iW, OW, mW) {
        return !(!OW || OW.changeTree !== iW) && (OW.prev ? OW.prev.next = OW.next : WW.next = OW.next, OW.next ? OW.next.prev = OW.prev : WW.tail = OW.prev, iW[mW] = void 0, this.releaseNode(OW), !0)
      }
    }

    function em(WW, iW) {
      if (-1 === iW || iW >= WW.length) return !1;
      const OW = WW.length - 1;
      for (let mW = iW; mW < OW; mW++) WW[mW] = WW[mW + 1];
      return WW.length = OW, !0
    }

    function gm(WW, iW, OW) {
      const mW = ~OW,
        EW = WW.changeTrees;
      for (const NW in EW) {
        const WW = EW[NW],
          OW = WW.visibleViews;
        void 0 !== OW && iW < OW.length && (OW[iW] &= mW);
        const PW = WW.subscribedViews;
        void 0 !== PW && iW < PW.length && (PW[iW] &= mW);
        const LW = WW.tagViews;
        void 0 !== LW && LW.forEach((WW => {
          iW < WW.length && (WW[iW] &= mW)
        }))
      }
    }
    const Dm = new FinalizationRegistry((WW => {
      let {
        root: iW,
        id: OW,
        slot: mW,
        bit: EW
      } = WW;
      gm(iW, mW, EW), iW.activeViews.delete(OW);
      for (const NW of iW.streamTrees) NW._dropView(OW);
      iW.releaseViewId(OW)
    }));

    function Vm(WW) {
      if (void 0 === WW) return "undefined";
      if (null === WW) return "null";
      const iW = typeof WW;
      return "string" === iW ? JSON.stringify(WW.length > 30 ? `${WW.slice(0,30)}\u2026` : WW) : "object" !== iW && "function" !== iW ? `${iW} ${String(WW)}` : Array.isArray(WW) ? `Array(${WW.length})` : WW.constructor?.name ?? "Object"
    }
    class pm {
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
        void 0 === this._root && (this._root = WW, this.id = WW.acquireViewId(), this._slot = this.id >> 5, this._bit = 1 << (31 & this.id), WW.registerView(this), Dm.register(this, {
          root: WW,
          id: this.id,
          slot: this._slot,
          bit: this._bit
        }, this))
      }
      dispose() {
        void 0 !== this._root && (this._root.unregisterView(this), gm(this._root, this._slot, this._bit), this._root.releaseViewId(this.id), Dm.unregister(this), this._root = void 0, this.id = -1)
      }
      isVisible(WW) {
        const iW = WW.visibleViews,
          OW = this._slot;
        return void 0 !== iW && OW < iW.length && 0 !== (iW[OW] & this._bit)
      }
      markVisible(WW) {
        const iW = this._slot;
        let OW = WW.visibleViews;
        for (void 0 === OW && (OW = WW.visibleViews = []); OW.length <= iW;) OW.push(0);
        OW[iW] |= this._bit
      }
      unmarkVisible(WW) {
        const iW = WW.visibleViews;
        if (void 0 === iW) return;
        const OW = this._slot;
        OW < iW.length && (iW[OW] &= ~this._bit)
      }
      isSubscribed(WW) {
        const iW = WW.subscribedViews,
          OW = this._slot;
        return void 0 !== iW && OW < iW.length && 0 !== (iW[OW] & this._bit)
      }
      _setSubscribed(WW) {
        const iW = this._slot;
        let OW = WW.subscribedViews;
        for (void 0 === OW && (OW = WW.subscribedViews = []); OW.length <= iW;) OW.push(0);
        OW[iW] |= this._bit
      }
      _clearSubscribed(WW) {
        const iW = WW.subscribedViews;
        if (void 0 === iW) return;
        const OW = this._slot;
        OW < iW.length && (iW[OW] &= ~this._bit)
      }
      hasTagOnTree(WW, iW) {
        const OW = WW.tagViews;
        if (void 0 === OW) return !1;
        const mW = this._slot,
          EW = this._bit;
        for (let NW = iW; 0 !== NW; NW &= NW - 1) {
          const WW = OW.get(NW & -NW);
          if (void 0 !== WW && mW < WW.length && 0 !== (WW[mW] & EW)) return !0
        }
        return !1
      }
      addTag(WW, iW) {
        if (iW === jm) return;
        let OW = WW.tagViews;
        void 0 === OW && (OW = WW.tagViews = new Map);
        const mW = this._slot,
          EW = this._bit;
        for (let NW = iW; NW > 0; NW &= NW - 1) {
          const WW = NW & -NW;
          let iW = OW.get(WW);
          for (void 0 === iW && (iW = [], OW.set(WW, iW)); iW.length <= mW;) iW.push(0);
          iW[mW] |= EW
        }
      }
      removeTag(WW, iW) {
        if (iW === jm) return;
        const OW = WW.tagViews;
        if (void 0 === OW) return;
        const mW = this._slot,
          EW = ~this._bit;
        for (let NW = iW; NW > 0; NW &= NW - 1) {
          const WW = OW.get(NW & -NW);
          void 0 !== WW && mW < WW.length && (WW[mW] &= EW)
        }
      }
      removeAllTagsOnTree(WW) {
        const iW = WW.tagViews;
        if (void 0 === iW) return;
        const OW = this._slot,
          mW = ~this._bit;
        iW.forEach((WW => {
          OW < WW.length && (WW[OW] &= mW)
        }))
      }
      add(WW) {
        let iW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : jm,
          OW = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        return this._add(WW, iW, OW, !1)
      }
      _addImmediate(WW) {
        let iW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : jm;
        this._add(WW, iW, !0, !0)
      }
      _add(WW, iW, OW, mW) {
        const NW = WW?.[bW];
        if (!NW) return console.warn(`StateView#add(): expected a Schema instance or collection, received ${Vm(WW)}`), !1;
        const PW = NW.parent;
        if (!PW && 0 !== WW[LW]) throw new Error(`Cannot add a detached instance to the StateView. Make sure to assign the "${NW.ref.constructor.name}" instance to the state before calling view.add()`);
        void 0 === this._root && void 0 !== NW.root && this._bindRoot(NW.root);
        const cW = PW?.[bW];
        if (!mW && cW?.isStreamCollection) return di(PW, this.id, NW.parentIndex), !0;
        const wW = WW.constructor[Symbol.metadata],
          tW = this.isVisible(NW);
        if (!this.iterable || !OW || tW && -1 !== this.items.indexOf(WW) || this.items.push(WW), this.markVisible(NW), OW && PW && this.addParentOf(NW, iW), !mW && NW.isStreamCollection) return !0;
        if (iW === jm && NW.isNew) return this._markSubtreeVisible(NW, iW), !1;
        let ZW = this.changes.get(WW[LW]);
        void 0 === ZW && (ZW = new Map, this.changes.set(WW[LW], ZW));
        let xW = !1;
        const lW = NW.encDescriptor.tags;
        if (NW.forEachChild(((WW, OW) => {
            const mW = lW[OW];
            if (void 0 !== mW) {
              if (!(mW === jm || iW !== jm && 0 !== (mW & iW))) return
            }
            this.add(WW.ref, iW, !1) && (xW = !0)
          })), iW !== jm) {
          this.addTag(NW, iW);
          const WW = wW?.[nW];
          if (void 0 !== WW)
            for (let OW = iW; OW > 0; OW &= OW - 1) WW[OW & -OW]?.forEach((WW => {
              NW.getChange(WW) !== EW.DELETE && ZW.set(WW, EW.ADD)
            }))
        }
        if ((iW === jm || !tW) && (!NW.isNew || xW))
          if (NW.isArray && "string" !== typeof NW.refTarget[jW]) NW.refTarget.items.length > 0 && (ZW.set(-1, EW.ADD), xW = !0);
          else {
            const WW = NW.encDescriptor.tags;
            NW.forEachLive((OW => {
              const mW = WW[OW];
              (void 0 === mW || mW === jm || iW !== jm && 0 !== (mW & iW)) && (ZW.set(OW, EW.ADD), xW = !0)
            }))
          } return xW
      }
      _markSubtreeVisible(WW, iW) {
        const OW = WW.encDescriptor.tags;
        WW.forEachChild(((WW, mW) => {
          const EW = OW[mW];
          if (void 0 !== EW) {
            if (!(EW === jm || iW !== jm && 0 !== (EW & iW))) return
          }
          WW.isNew ? (this.markVisible(WW), this._markSubtreeVisible(WW, iW)) : this._add(WW.ref, iW, !1, !1)
        }))
      }
      addParentOf(WW, iW) {
        const OW = WW.parent[bW],
          mW = WW.parentIndex;
        this.isVisible(OW) || this.markVisible(OW);
        const NW = OW.parent?.[bW];
        if (NW && this.addParentOf(OW, iW), OW.hasFilteredFields && OW.getChange(mW) !== EW.DELETE) {
          let NW = this.changes.get(OW.ref[LW]);
          void 0 === NW && (NW = new Map, this.changes.set(OW.ref[LW], NW));
          const PW = OW.encDescriptor.tags[mW];
          void 0 !== PW && PW !== jm && 0 !== (PW & iW) && this.addTag(OW, iW), NW.set(OW.isArray ? WW : mW, EW.ADD)
        }
      }
      _touchAncestorsOf(WW) {
        let iW = WW.parent?.[bW];
        if (void 0 === iW) return;
        const OW = [];
        for (; void 0 !== iW;) {
          if (iW.hasFilteredFields) {
            const WW = iW.ref[LW];
            if (this.changes.has(WW)) break;
            OW.push(iW)
          }
          iW = iW.parent?.[bW]
        }
        for (let mW = OW.length - 1; mW >= 0; mW--) this.changes.set(OW[mW].ref[LW], new Map)
      }
      remove(WW) {
        let iW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : jm,
          OW = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        const mW = WW?.[bW];
        if (!mW) return console.warn(`StateView#remove(): expected a Schema instance or collection, received ${Vm(WW)}`), this;
        const NW = mW.parent?.[bW];
        if (NW?.isStreamCollection) return this.unmarkVisible(mW), this.iterable && !OW && em(this.items, this.items.indexOf(WW)),
          function(WW, iW, OW, mW, NW) {
            const PW = WW._stream;
            if (void 0 === PW) return !1;
            const LW = PW.pendingByView.get(iW);
            if (LW?.has(mW)) return LW.delete(mW), !1;
            const cW = PW.sentByView.get(iW);
            if (cW?.has(mW)) {
              cW.delete(mW);
              let WW = NW.get(OW);
              return void 0 === WW && (WW = new Map, NW.set(OW, WW)), WW.set(mW, EW.DELETE), !0
            }
          }(mW.parent, this.id, mW.parent[LW], mW.parentIndex, this.changes), this._recursiveDeleteVisibleChangeTree(mW), this;
        if (mW.isStreamCollection) {
          this.unmarkVisible(mW), this.iterable && !OW && em(this.items, this.items.indexOf(WW));
          const iW = mW.ref,
            NW = iW._stream;
          if (void 0 !== NW) {
            NW.pendingByView.get(this.id)?.clear();
            const WW = NW.sentByView.get(this.id);
            if (void 0 !== WW && WW.size > 0) {
              const OW = iW[LW];
              let mW = this.changes.get(OW);
              void 0 === mW && (mW = new Map, this.changes.set(OW, mW));
              for (const iW of WW) mW.set(iW, EW.DELETE);
              WW.clear()
            }
          }
          return this
        }
        this.unmarkVisible(mW), this.iterable && !OW && em(this.items, this.items.indexOf(WW));
        const PW = mW.ref,
          cW = PW.constructor[Symbol.metadata],
          wW = PW[LW];
        this._touchAncestorsOf(mW);
        let tW = this.changes.get(wW);
        if (void 0 === tW && (tW = new Map, this.changes.set(wW, tW)), iW === jm) {
          const WW = mW.parent;
          if (WW && !ri.isValidInstance(WW) && mW.isFiltered) {
            const iW = NW.isArray ? mW : mW.parentIndex,
              OW = WW[LW];
            let PW = this.changes.get(OW);
            void 0 === PW ? (PW = new Map, this.changes.set(OW, PW)) : PW.get(iW) === EW.ADD && this._dropPendingEntries(mW), PW.set(iW, EW.DELETE), this._recursiveDeleteVisibleChangeTree(mW)
          } else cW?.[HW]?.forEach((WW => this._removeViewField(mW, tW, WW)))
        } else {
          const WW = cW?.[nW];
          if (void 0 !== WW)
            for (let OW = iW; OW > 0; OW &= OW - 1) WW[OW & -OW]?.forEach((WW => this._removeViewField(mW, tW, WW)))
        }
        return void 0 === iW ? this.removeAllTagsOnTree(mW) : this.removeTag(mW, iW), this
      }
      has(WW) {
        return this.isVisible(WW[bW])
      }
      hasTag(WW) {
        let iW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : jm;
        return this.hasTagOnTree(WW[bW], iW)
      }
      subscribe(WW, iW) {
        const OW = WW?.[bW];
        if (!OW) return console.warn(`StateView#subscribe(): expected a Schema collection, received ${Vm(WW)}`), this;
        if (void 0 === this._root && void 0 !== OW.root && this._bindRoot(OW.root), void 0 !== iW)
          if (OW.isStreamCollection) {
            const OW = Ji(WW);
            null === iW ? OW.priorityByView?.delete(this.id) : (OW.priorityByView ??= new Map).set(this.id, iW)
          } else {
            const iW = WW?.constructor?.name ?? "collection",
              mW = OW.parent;
            if (void 0 === mW) console.warn(`StateView#subscribe(): \`priority\` ignored \u2014 this ${iW} is not attached to a state yet, so it cannot be identified as a stream. Subscribe after assigning it to the state.`);
            else {
              const WW = mW?.constructor?.[Symbol.metadata]?.[OW.parentIndex]?.name,
                EW = WW ? `${mW.constructor.name}#${WW}` : iW;
              console.warn(`StateView#subscribe(): \`priority\` ignored \u2014 ${EW} is a ${iW}, not a streaming collection. Declare the field with .stream() (e.g. t.map(X).stream()) or use t.stream(X) to enable priority batching.`)
            }
          } if (this.isSubscribed(OW)) return this;
        const mW = void 0 !== OW.parent && !this.isVisible(OW);
        if (mW ? (this.addParentOf(OW, jm), this._add(WW, jm, !1, !1)) : this.markVisible(OW), this._setSubscribed(OW), OW.isStreamCollection) {
          const iW = WW;
          OW.forEachChild(((WW, OW) => {
            di(iW, this.id, OW)
          }))
        } else mW || OW.forEachChild((WW => {
          this.markVisible(WW)
        }));
        return this
      }
      unsubscribe(WW) {
        const iW = WW?.[bW];
        if (!iW) return console.warn(`StateView#unsubscribe(): expected a Schema collection, received ${Vm(WW)}`), this;
        if (!this.isSubscribed(iW)) return this;
        this._clearSubscribed(iW);
        const OW = iW.ref[LW];
        if (iW.isStreamCollection) {
          const iW = WW._stream;
          if (void 0 !== iW) {
            iW.pendingByView.get(this.id)?.clear();
            const WW = iW.sentByView.get(this.id);
            if (void 0 !== WW && WW.size > 0) {
              let iW = this.changes.get(OW);
              void 0 === iW && (iW = new Map, this.changes.set(OW, iW));
              for (const OW of WW) iW.set(OW, EW.DELETE);
              WW.clear()
            }
          }
        } else {
          const WW = iW.isArray;
          let mW = this.changes.get(OW);
          iW.forEachChild(((iW, NW) => {
            void 0 === mW && (mW = new Map, this.changes.set(OW, mW)), mW.set(WW ? iW : NW, EW.DELETE), this.unmarkVisible(iW)
          }))
        }
        return this.unmarkVisible(iW), this
      }
      clear() {
        if (!this.iterable) throw new Error("StateView#clear() is only available for iterable StateView's. Use StateView(iterable: true) constructor.");
        for (let WW = 0, iW = this.items.length; WW < iW; WW++) this.remove(this.items[WW], jm, !0);
        this.items.length = 0
      }
      isChangeTreeVisible(WW) {
        let iW = this.isVisible(WW);
        if (!iW && WW.isVisibilitySharedWithParent)
          if (this.isVisible(WW.parent[bW])) this.markVisible(WW), iW = !0;
          else
            for (let OW = WW.extraParents; void 0 !== OW; OW = OW.next) {
              const mW = OW.ref[bW];
              if (mW.isFiltered && this.isVisible(mW)) {
                this.markVisible(WW), iW = !0;
                break
              }
            }
        return iW
      }
      _recursiveDeleteVisibleChangeTree(WW) {
        WW.forEachChild((WW => {
          this.unmarkVisible(WW), this._recursiveDeleteVisibleChangeTree(WW)
        }))
      }
      _dropPendingEntries(WW) {
        this.changes.delete(WW.ref[LW]), WW.forEachChild((WW => this._dropPendingEntries(WW)))
      }
      _removeViewField(WW, iW, OW) {
        const mW = iW.get(OW) === EW.ADD;
        iW.set(OW, EW.DELETE);
        const NW = WW.ref[WW.encDescriptor.names[OW]],
          PW = NW?.[bW];
        PW && (this.unmarkVisible(PW), this._recursiveDeleteVisibleChangeTree(PW), mW && this._dropPendingEntries(PW))
      }
    }

    function fm(WW) {
      WW.structSwitchEmitted || (WW.shouldEmitSwitch && (WW.buffer[WW.it.offset++] = 255, ii.number(WW.buffer, WW.ref[LW], WW.it)), WW.structSwitchEmitted = !0)
    }

    function Cm(WW, iW) {
      qm(WW, iW, EW.ADD)
    }

    function Xm(WW, iW) {
      if (iW._fullSyncGen === WW.gen) return;
      iW._fullSyncGen = WW.gen;
      if (!WW.hasView || WW.view.isChangeTreeVisible(iW)) {
        const OW = iW.encDescriptor;
        WW.changeTree = iW, WW.ref = iW.ref, WW.encoder = OW.encoder, WW.filter = OW.filter, WW.metadata = OW.metadata, WW.treeIsFiltered = iW.isFiltered, WW.isSchema = OW.isSchema, WW.filterBitmask = OW.filterBitmask, WW.tags = OW.tags, WW.structSwitchEmitted = !1, WW.shouldEmitSwitch = WW.hasView || WW.it.offset > WW.initialOffset || iW !== WW.rootChangeTree, iW.isArray && iW.collDirty.size > 0 && (iW.flags |= 512), PO(iW, WW, Cm)
      }
      sO(iW, WW, Bm)
    }

    function Bm(WW, iW, OW) {
      Xm(WW, iW)
    }

    function qm(WW, iW, OW) {
      if (iW < 0) {
        if (WW.treeIsFiltered !== WW.emitFiltered) return;
        return fm(WW), void(WW.buffer[WW.it.offset++] = 255 & Math.abs(iW))
      }
      if ((WW.isSchema ? WW.treeIsFiltered || (iW < 32 ? 0 !== (WW.filterBitmask & 1 << iW) : void 0 !== WW.tags[iW]) : WW.treeIsFiltered) !== WW.emitFiltered) return;
      const mW = WW.isEncodeAll ? EW.ADD : OW;
      void 0 !== mW && (void 0 === WW.filter || WW.filter(WW.ref, iW, WW.view)) && (fm(WW), WW.encoder(WW.self, WW.buffer, WW.changeTree, iW, mW, WW.it, WW.isEncodeAll, WW.hasView, WW.metadata))
    }

    function Rm(WW, iW) {
      const OW = new Uint8Array(WW.length + iW.length);
      return OW.set(WW, 0), OW.set(iW, WW.length), OW
    }
    class Gm {
      static BUFFER_SIZE = 16384;
      sharedBuffer = new Uint8Array(Gm.BUFFER_SIZE);
      context;
      state;
      root;
      constructor(WW, iW) {
        this.context = Xi.cache(WW.constructor), this.root = iW ?? new dm(this.context), this.setState(WW)
      }
      setState(WW) {
        this.state = WW, this.state[bW].setRoot(this.root)
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
          iW = arguments.length > 1 ? arguments[1] : void 0,
          OW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : this.sharedBuffer,
          mW = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : WW.offset;
        return this._encodeChannel(WW, iW, OW, mW, !1)
      }
      encodeUnreliable() {
        let WW = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
            offset: 0
          },
          iW = arguments.length > 1 ? arguments[1] : void 0,
          OW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : this.sharedBuffer,
          mW = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : WW.offset;
        return this._encodeChannel(WW, iW, OW, mW, !0)
      }
      _encodeChannel(WW, iW, OW, mW, EW) {
        this.root.pendingFilterRefresh.length > 0 && cO(this.root);
        const NW = void 0 !== iW,
          PW = this.state[bW],
          LW = this._encodeCtx;
        LW.self = this, LW.buffer = OW, LW.it = WW, LW.view = iW, LW.isEncodeAll = !1, LW.hasView = NW, LW.emitFiltered = NW;
        let cW = EW ? this.root.unreliableChanges : this.root.changes;
        for (; cW = cW.next;) {
          const OW = cW.changeTree;
          if (NW && !iW.isChangeTreeVisible(OW)) continue;
          const wW = EW ? OW.unreliableRecorder : OW;
          if (!wW || !wW.has()) continue;
          const tW = OW.encDescriptor;
          LW.changeTree = OW, LW.ref = OW.ref, LW.encoder = tW.encoder, LW.filter = tW.filter, LW.metadata = tW.metadata, LW.treeIsFiltered = OW.isFiltered, LW.isSchema = tW.isSchema, LW.filterBitmask = tW.filterBitmask, LW.tags = tW.tags, LW.structSwitchEmitted = !1, LW.isRootTree = OW === PW, LW.shouldEmitSwitch = NW || WW.offset > mW || !LW.isRootTree, wW.forEachWithCtx(LW, qm)
        }
        return EW || NW || !this._isStreamBroadcastMode || this._emitStreamBroadcast(OW, WW), WW.offset > OW.byteLength ? (OW = this._resizeBuffer(OW, WW.offset), WW.offset = mW, this._encodeChannel(WW, iW, OW, mW, EW)) : OW.subarray(0, WW.offset)
      }
      encodeFullSync(WW, iW, OW, mW) {
        let EW = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : WW.offset;
        this.root.pendingFilterRefresh.length > 0 && cO(this.root);
        const NW = void 0 !== mW,
          PW = this.state[bW],
          LW = this._encodeCtx;
        return LW.self = this, LW.buffer = iW, LW.it = WW, LW.view = mW, LW.isEncodeAll = !0, LW.hasView = NW, LW.emitFiltered = OW, LW.gen = ++this._fullSyncGen, LW.initialOffset = EW, LW.rootChangeTree = PW, Xm(LW, PW), WW.offset > iW.byteLength ? (iW = this._resizeBuffer(iW, WW.offset), WW.offset = EW, this.encodeFullSync(WW, iW, OW, mW, EW)) : iW.subarray(0, WW.offset)
      }
      _resizeBuffer(WW, iW) {
        const OW = Math.ceil(iW / Gm.BUFFER_SIZE) * Gm.BUFFER_SIZE,
          mW = new Uint8Array(OW);
        return mW.set(WW), WW === this.sharedBuffer && (this.sharedBuffer = mW), mW
      }
      encodeAll() {
        let WW = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
            offset: 0
          },
          iW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.sharedBuffer;
        return this.encodeFullSync(WW, iW, !1)
      }
      encodeAllView(WW, iW, OW) {
        let mW = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : this.sharedBuffer;
        const EW = OW.offset;
        return mW = this.encodeFullSync(OW, mW, !0, WW, EW), Rm(mW.subarray(0, iW), mW.subarray(EW, OW.offset))
      }
      ensureCapacity(WW, iW) {
        if (iW + Gm.BUFFER_SIZE <= WW.byteLength) return WW;
        const OW = Math.ceil((iW + Gm.BUFFER_SIZE) / Gm.BUFFER_SIZE) * Gm.BUFFER_SIZE,
          mW = new Uint8Array(OW);
        return mW.set(WW.subarray(0, iW)), WW === this.sharedBuffer && (this.sharedBuffer = mW), mW
      }
      encodeView(WW, iW, OW) {
        let mW = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : this.sharedBuffer,
          NW = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4];
        const PW = OW.offset;
        this._emitStreamPriority(WW);
        for (const cW of WW.changes.keys()) {
          const iW = WW.changes.get(cW),
            NW = this.root.changeTrees[cW];
          if (void 0 === NW) {
            WW.changes.delete(cW);
            continue
          }
          if (0 === iW.size) continue;
          const PW = NW.encDescriptor,
            wW = PW.encoder,
            tW = PW.metadata,
            ZW = NW.ref,
            lW = NW.refTarget;
          mW = this.ensureCapacity(mW, OW.offset), mW[OW.offset++] = 255, ii.number(mW, ZW[LW], OW);
          for (const [cW, AW] of iW) {
            let iW;
            if (-1 === cW) {
              const WW = lW.tmpItems,
                iW = lW.deletedIndexes;
              for (let PW = 0; PW < WW.length; PW++) void 0 !== WW[PW] && !0 !== iW[PW] && wW(this, mW, NW, PW, EW.ADD, OW, !1, !0, tW);
              continue
            }
            if ("number" === typeof cW) iW = cW;
            else {
              const OW = cW.indexInParent(ZW);
              if (void 0 === OW) continue;
              if (iW = OW, AW === EW.ADD && NW.getChange(iW) === EW.DELETE) {
                WW.changes.delete(cW.ref[LW]);
                continue
              }
            }
            wW(this, mW, NW, iW, void 0 !== lW[xW](iW) && AW || EW.DELETE, OW, !1, !0, tW)
          }
        }
        return WW.changes.clear(), mW = this.encode(OW, WW, mW), NW ? Rm(mW.subarray(0, iW), mW.subarray(PW, OW.offset)) : mW.subarray(PW, OW.offset)
      }
      encodeUnreliableView(WW, iW, OW) {
        let mW = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : this.sharedBuffer;
        const EW = OW.offset;
        return mW = this.encodeUnreliable(OW, WW, mW, EW), Rm(mW.subarray(0, iW), mW.subarray(EW, OW.offset))
      }
      _emitStreamBroadcast(WW, iW) {
        const OW = this.root.streamTrees;
        for (const mW of OW) {
          const OW = mW,
            NW = OW[bW],
            PW = OW[LW];
          if (void 0 === PW) continue;
          const cW = OW._stream,
            wW = cW.broadcastDeletes,
            tW = cW.broadcastPending,
            ZW = cW.sentBroadcast,
            lW = wW.size > 0,
            AW = tW.size > 0,
            jW = NW.encDescriptor,
            UW = jW.encoder,
            kW = jW.metadata;
          if (lW || AW) {
            if (WW[iW.offset++] = 255, ii.number(WW, PW, iW), lW) {
              for (const OW of wW) UW(this, WW, NW, OW, EW.DELETE, iW, !1, !1, kW);
              wW.clear()
            }
            const mW = cW.maxPerTick,
              AW = [];
            let jW = 0;
            const sW = [];
            for (const PW of tW) {
              if (jW >= mW) break;
              const LW = OW[xW](PW);
              void 0 !== LW ? (UW(this, WW, NW, PW, EW.ADD, iW, !1, !1, kW), ZW.add(PW), AW.push(LW), sW.push(PW), jW++) : sW.push(PW)
            }
            for (const WW of sW) tW.delete(WW);
            for (const OW of AW) {
              const mW = OW[bW];
              if (void 0 === mW) continue;
              const NW = OW[LW];
              if (void 0 === NW) continue;
              WW[iW.offset++] = 255, ii.number(WW, NW, iW);
              const PW = mW.encDescriptor,
                cW = PW.encoder,
                wW = PW.metadata;
              mW.forEachLive((OW => {
                ri.hasUnreliableAtIndex(wW, OW) || cW(this, WW, mW, OW, EW.ADD, iW, !1, !1, wW)
              }))
            }
          }
          for (const mW of ZW) {
            const EW = OW[xW](mW);
            if (void 0 === EW) continue;
            const NW = EW[bW];
            if (void 0 === NW || !NW.has()) continue;
            const PW = EW[LW];
            if (void 0 === PW) continue;
            WW[iW.offset++] = 255, ii.number(WW, PW, iW);
            const cW = NW.encDescriptor,
              wW = cW.encoder,
              tW = cW.metadata;
            NW.forEach(((OW, mW) => {
              OW < 0 || ri.hasUnreliableAtIndex(tW, OW) || wW(this, WW, NW, OW, mW, iW, !1, !1, tW)
            }))
          }
        }
      }
      _emitStreamPriority(WW) {
        const iW = this.root.streamTrees;
        if (0 === iW.size) return;
        const OW = WW.id;
        for (const mW of iW) {
          const iW = mW,
            NW = iW._stream,
            PW = NW.pendingByView.get(OW);
          if (void 0 === PW || 0 === PW.size) continue;
          const cW = NW.priorityByView?.get(OW),
            wW = void 0 !== cW,
            tW = NW.priority,
            ZW = NW.maxPerTick,
            lW = [],
            AW = [];
          if (wW || void 0 !== tW) {
            const OW = [],
              mW = [];
            let EW = 0;
            for (const NW of PW) {
              const PW = iW[xW](NW);
              if (void 0 === PW) {
                AW.push(NW);
                continue
              }
              const LW = wW ? cW(PW) : tW(WW, PW);
              if (EW < ZW) {
                let WW = EW++;
                for (; WW > 0 && mW[WW - 1] < LW;) mW[WW] = mW[WW - 1], OW[WW] = OW[WW - 1], WW--;
                mW[WW] = LW, OW[WW] = NW
              } else if (LW > mW[ZW - 1]) {
                let WW = ZW - 1;
                for (; WW > 0 && mW[WW - 1] < LW;) mW[WW] = mW[WW - 1], OW[WW] = OW[WW - 1], WW--;
                mW[WW] = LW, OW[WW] = NW
              }
            }
            for (let WW = 0; WW < EW; WW++) lW.push(OW[WW])
          } else
            for (const WW of PW) {
              if (lW.length >= ZW) break;
              lW.push(WW)
            }
          for (const WW of AW) PW.delete(WW);
          const jW = lW.length;
          let UW = NW.sentByView.get(OW);
          void 0 === UW && (UW = new Set, NW.sentByView.set(OW, UW));
          for (let OW = 0; OW < jW; OW++) {
            const mW = lW[OW],
              NW = iW[xW](mW);
            if (void 0 === NW) {
              PW.delete(mW);
              continue
            }
            WW._addImmediate(NW);
            const cW = NW[bW];
            if (void 0 !== cW) {
              const iW = NW[LW];
              let OW = WW.changes.get(iW);
              void 0 === OW && (OW = new Map, WW.changes.set(iW, OW));
              const mW = cW.metadata;
              cW.forEachLive((WW => {
                ri.hasUnreliableAtIndex(mW, WW) || OW.set(WW, EW.ADD)
              }))
            }
            PW.delete(mW), UW.add(mW)
          }
        }
      }
      discardChanges() {
        const WW = this.root.changes;
        let iW = WW.next;
        const OW = this.root;
        for (; iW;) {
          const WW = iW.next;
          iW.changeTree.endEncode(), OW.releaseNode(iW), iW = WW
        }
        WW.next = void 0, WW.tail = void 0
      }
      discardUnreliableChanges() {
        const WW = this.root.unreliableChanges;
        let iW = WW.next;
        const OW = this.root;
        for (; iW;) {
          const WW = iW.next;
          iW.changeTree.endEncodeUnreliable(), OW.releaseNode(iW), iW = WW
        }
        WW.next = void 0, WW.tail = void 0
      }
      tryEncodeTypeId(WW, iW, OW, mW) {
        const EW = this.context.getTypeId(iW),
          NW = this.context.getTypeId(OW);
        void 0 !== NW ? EW !== NW && (WW[mW.offset++] = 213, ii.number(WW, NW, mW)) : console.warn(`@colyseus/schema WARNING: Class "${OW.name}" is not registered on TypeRegistry - Please either tag the class with @entity or define a @type() field.`)
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
        const iW = 0 === WW.activeViews.size;
        for (const OW of WW.streamTrees)
          if (iW ? oi(OW) : ui(OW, WW)) return !0;
        return !1
      }
      get hasUnreliableChanges() {
        return void 0 !== this.root.unreliableChanges.next
      }
    }
    class Im extends Error {
      constructor(WW) {
        super(WW), this.name = "DecodingWarning"
      }
    }
    const am = {
      value: 0,
      enumerable: !1,
      writable: !0
    };
    class rm {
      refs = new Map;
      refCount = {};
      deletedRefs = new Set;
      callbacks = {};
      nextUniqueId = 0;
      getNextUniqueId() {
        return this.nextUniqueId++
      }
      addRef(WW, iW) {
        let OW = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        this.refs.set(WW, iW), void 0 === iW[LW] ? (am.value = WW, Object.defineProperty(iW, LW, am)) : iW[LW] !== WW && (iW[LW] = WW), OW && (this.refCount[WW] = (this.refCount[WW] || 0) + 1), this.deletedRefs.has(WW) && this.deletedRefs.delete(WW)
      }
      removeRef(WW) {
        const iW = this.refCount[WW];
        if (void 0 !== iW)
          if (0 !== iW)(this.refCount[WW] = iW - 1) <= 0 && this.deletedRefs.add(WW);
          else try {
            const iW = this.refs.get(WW);
            throw new Im(`trying to remove refId '${WW}' with 0 refCount (${iW.constructor.name}: ${JSON.stringify(iW)})`)
          } catch (cE) {
            console.warn(cE)
          } else try {
            throw new Im("trying to remove refId that doesn't exist: " + WW)
          } catch (cE) {
            console.warn(cE)
          }
      }
      clearRefs() {
        this.refs.clear(), this.deletedRefs.clear(), this.callbacks = {}, this.refCount = {}
      }
      garbageCollectDeletedRefs() {
        this.deletedRefs.forEach((WW => {
          if (this.refCount[WW] > 0) return;
          const iW = this.refs.get(WW),
            OW = iW.constructor[Symbol.metadata];
          if (null != OW)
            for (const mW in OW) {
              const WW = iW[OW[mW].name];
              if ("object" === typeof WW && WW) {
                const iW = WW[LW];
                void 0 === iW || this.deletedRefs.has(iW) || this.removeRef(iW)
              }
            } else "function" === typeof iW[jW] && Array.from(iW.values()).forEach((WW => {
              const iW = WW[LW];
              void 0 === iW || this.deletedRefs.has(iW) || this.removeRef(iW)
            }));
          this.refs.delete(WW), delete this.refCount[WW], delete this.callbacks[WW]
        })), this.deletedRefs.clear()
      }
      addCallback(WW, iW, OW) {
        if (void 0 === WW) {
          const WW = "number" === typeof iW ? EW[iW] : iW;
          throw new Error(`Can't addCallback on '${WW}' (refId is undefined)`)
        }
        return this.callbacks[WW] || (this.callbacks[WW] = {}), this.callbacks[WW][iW] || (this.callbacks[WW][iW] = []), this.callbacks[WW][iW].push(OW), () => this.removeCallback(WW, iW, OW)
      }
      removeCallback(WW, iW, OW) {
        const mW = this.callbacks?.[WW]?.[iW]?.indexOf(OW);
        void 0 !== mW && -1 !== mW && em(this.callbacks[WW][iW], mW)
      }
    }
    class zm {
      context;
      state;
      root;
      currentRefId = 0;
      nH;
      resyncVisited = null;
      resyncDamaged = !1;
      constructor(WW, iW) {
        this.setState(WW), this.context = iW || new Xi(WW.constructor)
      }
      setState(WW) {
        this.state = WW, this.root = new rm, this.root.addRef(0, WW)
      }
      decode(WW) {
        let iW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
            offset: 0
          },
          OW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : this.state;
        const EW = void 0 !== this.nH ? [] : null,
          NW = this.root,
          PW = WW.byteLength;
        let LW = OW.constructor[tW];
        for (this.currentRefId = 0; iW.offset < PW;) {
          if (WW[iW.offset] == mW) {
            iW.offset++, OW[MW]?.();
            const mW = si.number(WW, iW),
              EW = NW.refs.get(mW);
            EW ? (OW = EW, LW = OW.constructor[tW], this.currentRefId = mW) : (console.error(`"refId" not found: ${mW}`, {
              previousRef: OW,
              previousRefId: this.currentRefId
            }), console.warn("Please report this issue to the developers."), this.skipCurrentStructure(WW, iW, PW));
            continue
          } - 1 !== LW(this, WW, iW, OW, EW) || (console.warn("@colyseus/schema: definition mismatch"), this.skipCurrentStructure(WW, iW, PW))
        }
        return OW[MW]?.(), null !== this.resyncVisited && function(WW, iW) {
          WW.resyncDamaged ? console.warn("@colyseus/schema: resync sweep skipped \u2014 parts of the payload could not be decoded. Stale entries may persist until the next resync.") : XO(WW, WW.state, new Set, iW)
        }(this, EW), null !== EW && this.nH?.(EW), NW.garbageCollectDeletedRefs(), EW
      }
      decodeResync(WW) {
        let iW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
          offset: 0
        };
        this.resyncVisited = new Map, this.resyncDamaged = !1;
        try {
          return this.decode(WW, iW)
        } finally {
          this.resyncVisited = null
        }
      }
      skipCurrentStructure(WW, iW, OW) {
        null !== this.resyncVisited && (this.resyncDamaged = !0);
        const EW = {
          offset: iW.offset
        };
        for (; iW.offset < OW && (WW[iW.offset] !== mW || (EW.offset = iW.offset + 1, !this.root.refs.has(si.number(WW, EW))));) iW.offset++
      }
      getInstanceType(WW, iW, OW) {
        let mW;
        if (213 === WW[iW.offset]) {
          iW.offset++;
          const OW = si.number(WW, iW);
          mW = this.context.get(OW)
        }
        return mW || OW
      }
      createInstanceOfType(WW) {
        return WW.initializeForDecoder()
      }
      removeChildRefs(WW, iW) {
        const OW = "string" !== typeof WW[jW],
          mW = WW[LW];
        WW.forEach(((NW, PW) => {
          iW?.push({
            ref: WW,
            refId: mW,
            op: EW.DELETE,
            field: PW,
            value: void 0,
            previousValue: NW
          }), OW && this.root.removeRef(NW[LW])
        }))
      }
    }
    const Fm = Hm({
        min: bm.float64(),
        max: bm.float64(),
        bits: bm.uint8(),
        mode: bm.uint8()
      }, "QuantizedDescriptor"),
      Qm = Hm({
        name: bm.string(),
        type: bm.string(),
        referencedType: bm.number(),
        childPrimitive: bm.string(),
        quantized: bm.ref(Fm).optional()
      }, "ReflectionField"),
      WE = Hm({
        id: bm.number(),
        extendsId: bm.number(),
        fields: bm.array(Qm)
      }, "ReflectionType"),
      iE = Hm({
        types: bm.array(WE),
        rootType: bm.number()
      }, "Reflection");

    function OE(WW) {
      const iW = WW.root,
        OW = iW.callbacks,
        mW = new WeakMap;
      let NW;

      function PW(WW, OW) {
        let wW = OW.instance?.constructor[Symbol.metadata] || WW,
          tW = OW.instance && "function" === typeof OW.instance.forEach || WW && !um.is(WW);
        if (wW && !tW) {
          const WW = function(WW, EW, PW, cW) {
            return cW && void 0 !== OW.instance[EW] && !mW.has(NW) && PW(OW.instance[EW], void 0), iW.addCallback(WW[LW], EW, PW)
          };
          return new Proxy({
            listen: function(iW, EW) {
              let PW = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
              if (OW.instance) return WW(OW.instance, iW, EW, PW);
              {
                let LW = () => {};
                return OW.onInstanceAvailable(((OW, cW) => {
                  LW = WW(OW, iW, EW, PW && cW && !mW.has(NW))
                })), () => LW()
              }
            },
            onChange: function(WW) {
              return iW.addCallback(OW.instance[LW], EW.REPLACE, WW)
            },
            bindTo: function(WW, mW) {
              return mW || (mW = Object.keys(wW).map((WW => wW[WW].name))), iW.addCallback(OW.instance[LW], EW.REPLACE, (() => {
                mW.forEach((iW => WW[iW] = OW.instance[iW]))
              }))
            }
          }, {
            get(WW, iW) {
              const mW = wW[wW[iW]];
              if (mW) {
                const WW = OW.instance?.[iW],
                  EW = mW => {
                    const EW = cW(OW.instance).listen(iW, ((WW, iW) => {
                      mW(WW, !1), EW?.()
                    }), !1);
                    void 0 !== WW?.[LW] && mW(WW, !0)
                  };
                return PW(mW.type, {
                  instance: void 0 !== WW?.[LW] && WW,
                  parentInstance: OW.instance,
                  onInstanceAvailable: EW
                })
              }
              return WW[iW]
            },
            has: (WW, iW) => void 0 !== wW[iW],
            set(WW, iW, OW) {
              throw new Error("not allowed")
            },
            deleteProperty(WW, iW) {
              throw new Error("not allowed")
            }
          })
        } {
          const WW = function(WW, OW, PW) {
              return PW && WW.forEach(((WW, iW) => OW(WW, iW))), iW.addCallback(WW[LW], EW.ADD, ((WW, iW) => {
                mW.set(OW, !0), NW = OW, OW(WW, iW), mW.delete(OW), NW = void 0
              }))
            },
            PW = function(WW, OW) {
              return iW.addCallback(WW[LW], EW.DELETE, OW)
            },
            cW = function(WW, OW) {
              return iW.addCallback(WW[LW], EW.REPLACE, OW)
            };
          return new Proxy({
            mY: function(iW) {
              let EW = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
              if (OW.instance) return WW(OW.instance, iW, EW && !mW.has(NW));
              if (OW.onInstanceAvailable) {
                let PW = () => {};
                return OW.onInstanceAvailable(((OW, LW) => {
                  PW = WW(OW, iW, EW && LW && !mW.has(NW))
                })), () => PW()
              }
            },
            mH: function(WW) {
              if (OW.instance) return PW(OW.instance, WW);
              if (OW.onInstanceAvailable) {
                let iW = () => {};
                return OW.onInstanceAvailable((OW => {
                  iW = PW(OW, WW)
                })), () => iW()
              }
            },
            onChange: function(WW) {
              if (OW.instance) return cW(OW.instance, WW);
              if (OW.onInstanceAvailable) {
                let iW = () => {};
                return OW.onInstanceAvailable((OW => {
                  iW = cW(OW, WW)
                })), () => iW()
              }
            }
          }, {
            get(WW, iW) {
              if (!WW[iW]) throw new Error(`Can't access '${iW}' through callback proxy. access the instance directly.`);
              return WW[iW]
            },
            has: (WW, iW) => void 0 !== WW[iW],
            set(WW, iW, OW) {
              throw new Error("not allowed")
            },
            deleteProperty(WW, iW) {
              throw new Error("not allowed")
            }
          })
        }
      }

      function cW(WW) {
        return PW(void 0, {
          instance: WW
        })
      }
      return WW.nH = function(WW) {
        const iW = new Set;
        for (let mW = 0, NW = WW.length; mW < NW; mW++) {
          const NW = WW[mW],
            PW = NW.refId,
            cW = NW.ref,
            wW = OW[PW];
          if (wW) {
            if ((NW.op & EW.DELETE) === EW.DELETE && um.isSchema(NW.previousValue)) {
              const WW = OW[NW.previousValue[LW]]?.[EW.DELETE];
              for (let iW = WW?.length - 1; iW >= 0; iW--) WW[iW]()
            }
            if (um.isSchema(cW)) {
              if (!iW.has(PW)) {
                const WW = wW?.[EW.REPLACE];
                for (let iW = WW?.length - 1; iW >= 0; iW--) WW[iW]()
              }
              if (wW.hasOwnProperty(NW.field)) {
                const WW = wW[NW.field];
                for (let iW = WW?.length - 1; iW >= 0; iW--) WW[iW](NW.value, NW.previousValue)
              }
            } else {
              if ((NW.op & EW.DELETE) === EW.DELETE) {
                if (void 0 !== NW.previousValue) {
                  const WW = wW[EW.DELETE];
                  for (let iW = WW?.length - 1; iW >= 0; iW--) WW[iW](NW.previousValue, NW.dynamicIndex ?? NW.field)
                }
                if ((NW.op & EW.ADD) === EW.ADD) {
                  const WW = wW[EW.ADD];
                  for (let iW = WW?.length - 1; iW >= 0; iW--) WW[iW](NW.value, NW.dynamicIndex ?? NW.field)
                }
              } else if ((NW.op & EW.ADD) === EW.ADD && NW.previousValue !== NW.value) {
                const WW = wW[EW.ADD];
                for (let iW = WW?.length - 1; iW >= 0; iW--) WW[iW](NW.value, NW.dynamicIndex ?? NW.field)
              }
              if (NW.value !== NW.previousValue && (void 0 !== NW.value || void 0 !== NW.previousValue)) {
                const WW = wW[EW.REPLACE];
                for (let iW = WW?.length - 1; iW >= 0; iW--) WW[iW](NW.value, NW.dynamicIndex ?? NW.field)
              }
            }
            iW.add(PW)
          }
        }
      }, cW
    }

    function mE(WW, iW) {
      WW.nH = iW
    }
    iE.encode = function(WW) {
      let iW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
        offset: 0
      };
      const OW = WW.context,
        mW = new iE,
        EW = new Gm(mW),
        NW = OW.schemas.get(WW.state.constructor);
      NW > 0 && (mW.rootType = NW);
      const PW = new Set,
        LW = {},
        cW = WW => {
          if (void 0 === WW.extendsId || PW.has(WW.extendsId)) {
            PW.add(WW.id), mW.types.push(WW);
            const iW = LW[WW.id];
            void 0 !== iW && (delete LW[WW.id], iW.forEach((WW => cW(WW))))
          } else void 0 === LW[WW.extendsId] && (LW[WW.extendsId] = []), LW[WW.extendsId].push(WW)
        };
      OW.schemas.forEach(((WW, iW) => {
        const mW = new WE;
        mW.id = Number(WW);
        const EW = Object.getPrototypeOf(iW);
        EW !== um && (mW.extendsId = OW.schemas.get(EW));
        const NW = iW[Symbol.metadata];
        if (NW !== EW[Symbol.metadata]) {
          const WW = NW[JW] ?? -1;
          for (let iW = 0; iW <= WW; iW++) {
            const WW = NW[iW];
            if (void 0 === WW) continue;
            const EW = WW.name;
            if (!Object.prototype.hasOwnProperty.call(NW, EW)) continue;
            const PW = new Qm;
            let LW;
            if (PW.name = EW, "string" === typeof WW.type) LW = WW.type;
            else if (Di(WW.type)) {
              const iW = WW.type.quantized;
              LW = "quantized";
              const OW = new Fm;
              OW.min = iW.min, OW.max = iW.max, OW.bits = iW.bits, OW.mode = iW.wrap ? 1 : 0, PW.quantized = OW
            } else {
              let iW;
              um.is(WW.type) ? (LW = "ref", iW = WW.type) : (LW = Object.keys(WW.type)[0], "string" === typeof WW.type[LW] ? PW.childPrimitive = WW.type[LW] : iW = WW.type[LW]), PW.referencedType = iW ? OW.getTypeId(iW) : -1
            }
            PW.type = LW, mW.fields.push(PW)
          }
        }
        cW(mW)
      }));
      for (const wW in LW) LW[wW].forEach((WW => mW.types.push(WW)));
      return EW.encodeAll(iW).slice(0, iW.offset)
    }, iE.decode = function(WW, iW) {
      const OW = new iE;
      new zm(OW).decode(WW, iW);
      const mW = new Xi;
      OW.types.forEach((WW => {
        const iW = mW.get(WW.extendsId) ?? um,
          OW = class extends iW {};
        Xi.register(OW), mW.add(OW, WW.id)
      }), {});
      OW.types.forEach((WW => {
        const iW = mW.get(WW.id),
          EW = ri.initialize(iW),
          NW = [];
        let PW = WW;
        do {
          NW.push(PW), PW = OW.types.find((WW => WW.id === PW.extendsId))
        } while (PW);
        let LW = 0;
        NW.reverse().forEach((WW => {
          ((WW, iW, OW) => {
            iW.fields.forEach(((iW, EW) => {
              const NW = OW + EW;
              if (void 0 !== iW.quantized) {
                const OW = iW.quantized;
                ri.addField(WW, NW, iW.name, {
                  quantized: gi({
                    min: OW.min,
                    max: OW.max,
                    bits: OW.bits,
                    mode: 1 === OW.mode ? "wrap" : "clamp"
                  })
                })
              } else if (void 0 !== iW.referencedType) {
                const OW = iW.type,
                  EW = mW.get(iW.referencedType) ?? iW.childPrimitive;
                "ref" === OW ? ri.addField(WW, NW, iW.name, EW) : ri.addField(WW, NW, iW.name, {
                  [OW]: EW
                })
              } else ri.addField(WW, NW, iW.name, iW.type)
            }))
          })(EW, WW, LW), LW += WW.fields.length
        }))
      }));
      const EW = new(mW.get(OW.rootType || 0));
      return new zm(EW, mW)
    }, iE.makeEncodable = function(WW) {
      const iW = WW[Symbol.metadata];
      if (!iW) return WW;
      const OW = iW[JW];
      if (void 0 === OW) return WW;
      for (let mW = 0; mW <= OW; mW++) {
        const OW = iW[mW];
        OW && ri.defineField(WW, iW, mW, OW.name, OW.type)
      }
      return Object.prototype.hasOwnProperty.call(WW, yW) && delete WW[yW], WW
    };
    class EE {
      tZ;
      uniqueRefIds = new Set;
      isTriggering = !1;
      constructor(WW) {
        this.tZ = WW, this.tZ.nH = this.nH.bind(this)
      }
      get callbacks() {
        return this.tZ.root.callbacks
      }
      get state() {
        return this.tZ.state
      }
      addCallback(WW, iW, OW) {
        return this.tZ.root.addCallback(WW, iW, OW)
      }
      addCallbackOrWaitCollectionAvailable(WW, iW, OW, mW) {
        let NW = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4],
          PW = () => {};
        const cW = () => PW(),
          wW = WW[iW];
        if (wW && void 0 !== wW[LW]) return NW = NW && !1 === this.isTriggering, OW === EW.ADD && NW && wW.forEach(((WW, iW) => {
          mW(WW, iW)
        })), this.addCallback(wW[LW], OW, mW);
        {
          let EW;
          return EW = this.addCallback(WW[LW], iW, ((WW, iW) => {
            null !== WW && void 0 !== WW && (EW(), PW = this.addCallback(WW[LW], OW, mW))
          })), PW = EW, cW
        }
      }
      listen() {
        return "string" === typeof(arguments.length <= 0 ? void 0 : arguments[0]) ? this.listenInstance(this.state, arguments.length <= 0 ? void 0 : arguments[0], arguments.length <= 1 ? void 0 : arguments[1], arguments.length <= 2 ? void 0 : arguments[2]) : this.listenInstance(arguments.length <= 0 ? void 0 : arguments[0], arguments.length <= 1 ? void 0 : arguments[1], arguments.length <= 2 ? void 0 : arguments[2], arguments.length <= 3 ? void 0 : arguments[3])
      }
      listenInstance(WW, iW, OW) {
        let mW = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
        mW = mW && !1 === this.isTriggering;
        const EW = WW[iW];
        return mW && null !== EW && void 0 !== EW && OW(EW, void 0), this.addCallback(WW[LW], iW, OW)
      }
      onChange() {
        if (2 === arguments.length && "string" !== typeof(arguments.length <= 0 ? void 0 : arguments[0])) {
          const WW = arguments.length <= 0 ? void 0 : arguments[0],
            iW = arguments.length <= 1 ? void 0 : arguments[1];
          return this.addCallback(WW[LW], EW.REPLACE, iW)
        }
        return "string" === typeof(arguments.length <= 0 ? void 0 : arguments[0]) ? this.addCallbackOrWaitCollectionAvailable(this.state, arguments.length <= 0 ? void 0 : arguments[0], EW.REPLACE, arguments.length <= 1 ? void 0 : arguments[1]) : this.addCallbackOrWaitCollectionAvailable(arguments.length <= 0 ? void 0 : arguments[0], arguments.length <= 1 ? void 0 : arguments[1], EW.REPLACE, arguments.length <= 2 ? void 0 : arguments[2])
      }
      mY() {
        return "string" === typeof(arguments.length <= 0 ? void 0 : arguments[0]) ? this.addCallbackOrWaitCollectionAvailable(this.state, arguments.length <= 0 ? void 0 : arguments[0], EW.ADD, arguments.length <= 1 ? void 0 : arguments[1], !1 !== (arguments.length <= 2 ? void 0 : arguments[2])) : this.addCallbackOrWaitCollectionAvailable(arguments.length <= 0 ? void 0 : arguments[0], arguments.length <= 1 ? void 0 : arguments[1], EW.ADD, arguments.length <= 2 ? void 0 : arguments[2], !1 !== (arguments.length <= 3 ? void 0 : arguments[3]))
      }
      mH() {
        return "string" === typeof(arguments.length <= 0 ? void 0 : arguments[0]) ? this.addCallbackOrWaitCollectionAvailable(this.state, arguments.length <= 0 ? void 0 : arguments[0], EW.DELETE, arguments.length <= 1 ? void 0 : arguments[1]) : this.addCallbackOrWaitCollectionAvailable(arguments.length <= 0 ? void 0 : arguments[0], arguments.length <= 1 ? void 0 : arguments[1], EW.DELETE, arguments.length <= 2 ? void 0 : arguments[2])
      }
      bindTo(WW, iW, OW) {
        let mW = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
        const NW = WW.constructor[Symbol.metadata];
        OW || (OW = Object.keys(NW).filter((WW => !isNaN(Number(WW)))).map((WW => NW[WW].name)));
        const PW = () => {
          for (const mW of OW) {
            const OW = WW[mW];
            void 0 !== OW && (iW[mW] = OW)
          }
        };
        return mW && PW(), this.addCallback(WW[LW], EW.REPLACE, PW)
      }
      nH(WW) {
        this.uniqueRefIds.clear(), this.isTriggering = !0;
        for (let iW = 0, OW = WW.length; iW < OW; iW++) {
          const OW = WW[iW],
            mW = OW.refId,
            NW = OW.ref,
            PW = this.callbacks[mW];
          if (PW) {
            if ((OW.op & EW.DELETE) === EW.DELETE && um.isSchema(OW.previousValue)) {
              const WW = OW.previousValue[LW],
                iW = this.callbacks[WW]?.[EW.DELETE];
              if (iW)
                for (let OW = iW.length - 1; OW >= 0; OW--) try {
                  iW[OW]()
                } catch (cE) {
                  console.error(cE)
                }
            }
            if (um.isSchema(NW)) {
              if (!this.uniqueRefIds.has(mW)) {
                const WW = PW[EW.REPLACE];
                if (WW)
                  for (let iW = WW.length - 1; iW >= 0; iW--) try {
                    WW[iW]()
                  } catch (cE) {
                    console.error(cE)
                  }
              }
              const WW = PW[OW.field];
              if (WW)
                for (let iW = WW.length - 1; iW >= 0; iW--) try {
                  WW[iW](OW.value, OW.previousValue)
                } catch (cE) {
                  console.error(cE)
                }
            } else {
              const WW = OW.dynamicIndex ?? OW.field;
              if ((OW.op & EW.DELETE) === EW.DELETE) {
                if (void 0 !== OW.previousValue) {
                  const iW = PW[EW.DELETE];
                  if (iW)
                    for (let mW = iW.length - 1; mW >= 0; mW--) try {
                      iW[mW](OW.previousValue, WW)
                    } catch (cE) {
                      console.error(cE)
                    }
                }
                if ((OW.op & EW.ADD) === EW.ADD) {
                  const iW = PW[EW.ADD];
                  if (iW)
                    for (let mW = iW.length - 1; mW >= 0; mW--) try {
                      iW[mW](OW.value, WW)
                    } catch (cE) {
                      console.error(cE)
                    }
                }
              } else if ((OW.op & EW.ADD) === EW.ADD && OW.previousValue !== OW.value) {
                const iW = PW[EW.ADD];
                if (iW)
                  for (let mW = iW.length - 1; mW >= 0; mW--) try {
                    iW[mW](OW.value, WW)
                  } catch (cE) {
                    console.error(cE)
                  }
              }
              if (OW.value !== OW.previousValue) {
                const iW = PW[EW.REPLACE];
                if (iW)
                  for (let mW = iW.length - 1; mW >= 0; mW--) try {
                    iW[mW](WW, OW.value)
                  } catch (cE) {
                    console.error(cE)
                  }
              }
            }
            this.uniqueRefIds.add(mW)
          }
        }
        this.isTriggering = !1
      }
    }
    const NE = {
      get(WW) {
        if (WW instanceof zm) return new EE(WW);
        if ("tZ" in WW.aU) return new EE(WW.aU.tZ);
        throw new Error("Invalid room or decoder")
      },
      getLegacy(WW) {
        if (WW instanceof zm) return OE(WW);
        if ("tZ" in WW.aU) return OE(WW.aU.tZ);
        throw new Error("Invalid room or decoder")
      },
      getRawChanges: (WW, iW) => mE(WW, iW)
    };
    class PE {
      _free = [];
      _factory;
      _maxSize;
      constructor(WW) {
        let iW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        this._factory = WW, this._maxSize = iW.maxSize ?? 1 / 0;
        const OW = iW.preallocate ?? 0;
        for (let mW = 0; mW < OW; mW++) this._free.push(WW())
      }
      acquire() {
        return this._free.length > 0 ? this._free.pop() : this._factory()
      }
      release(WW) {
        um.reset(WW), this._free.length < this._maxSize && this._free.push(WW)
      }
      get size() {
        return this._free.length
      }
    }

    function LE(WW) {
      return new PE((() => new WW), arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {})
    }
    Si("map", {
      constructor: Pm
    }), Si("array", {
      constructor: Em
    }), Si("set", {
      constructor: cm
    }), Si("collection", {
      constructor: Lm
    })
  },
  10369: (WW, iW, OW) => {
    OW.r(iW), OW.d(iW, {
      __addDisposableResource: () => gW,
      __assign: () => NW,
      __asyncDelegator: () => TW,
      __asyncGenerator: () => yW,
      __asyncValues: () => JW,
      __await: () => YW,
      __awaiter: () => AW,
      __classPrivateFieldGet: () => dW,
      __classPrivateFieldIn: () => vW,
      __classPrivateFieldSet: () => eW,
      __createBinding: () => jW,
      __decorate: () => LW,
      __disposeResources: () => VW,
      __esDecorate: () => wW,
      __exportStar: () => UW,
      __extends: () => EW,
      __generator: () => bW,
      __importDefault: () => oW,
      __importStar: () => uW,
      __makeTemplateObject: () => hW,
      __metadata: () => lW,
      __param: () => cW,
      __propKey: () => ZW,
      __read: () => sW,
      __rest: () => PW,
      __rewriteRelativeImportExtension: () => pW,
      __runInitializers: () => tW,
      __setFunctionName: () => xW,
      __spread: () => MW,
      __spreadArray: () => SW,
      __spreadArrays: () => KW,
      __values: () => kW,
      default: () => fW
    });
    var mW = function(WW, iW) {
      return mW = Object.setPrototypeOf || {
        __proto__: []
      }
      instanceof Array && function(WW, iW) {
        WW.__proto__ = iW
      } || function(WW, iW) {
        for (var OW in iW) Object.prototype.hasOwnProperty.call(iW, OW) && (WW[OW] = iW[OW])
      }, mW(WW, iW)
    };

    function EW(WW, iW) {
      if ("function" !== typeof iW && null !== iW) throw new TypeError("Class extends value " + String(iW) + " is not a constructor or null");

      function OW() {
        this.constructor = WW
      }
      mW(WW, iW), WW.prototype = null === iW ? Object.create(iW) : (OW.prototype = iW.prototype, new OW)
    }
    var NW = function() {
      return NW = Object.assign || function(WW) {
        for (var iW, OW = 1, mW = arguments.length; OW < mW; OW++)
          for (var EW in iW = arguments[OW]) Object.prototype.hasOwnProperty.call(iW, EW) && (WW[EW] = iW[EW]);
        return WW
      }, NW.apply(this, arguments)
    };

    function PW(WW, iW) {
      var OW = {};
      for (var mW in WW) Object.prototype.hasOwnProperty.call(WW, mW) && iW.indexOf(mW) < 0 && (OW[mW] = WW[mW]);
      if (null != WW && "function" === typeof Object.getOwnPropertySymbols) {
        var EW = 0;
        for (mW = Object.getOwnPropertySymbols(WW); EW < mW.length; EW++) iW.indexOf(mW[EW]) < 0 && Object.prototype.propertyIsEnumerable.call(WW, mW[EW]) && (OW[mW[EW]] = WW[mW[EW]])
      }
      return OW
    }

    function LW(WW, iW, OW, mW) {
      var EW, NW = arguments.length,
        PW = NW < 3 ? iW : null === mW ? mW = Object.getOwnPropertyDescriptor(iW, OW) : mW;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) PW = Reflect.decorate(WW, iW, OW, mW);
      else
        for (var LW = WW.length - 1; LW >= 0; LW--)(EW = WW[LW]) && (PW = (NW < 3 ? EW(PW) : NW > 3 ? EW(iW, OW, PW) : EW(iW, OW)) || PW);
      return NW > 3 && PW && Object.defineProperty(iW, OW, PW), PW
    }

    function cW(WW, iW) {
      return function(OW, mW) {
        iW(OW, mW, WW)
      }
    }

    function wW(WW, iW, OW, mW, EW, NW) {
      function PW(WW) {
        if (void 0 !== WW && "function" !== typeof WW) throw new TypeError("Function expected");
        return WW
      }
      for (var LW, cW = mW.kind, wW = "getter" === cW ? "get" : "setter" === cW ? "set" : "value", tW = !iW && WW ? mW.static ? WW : WW.prototype : null, ZW = iW || (tW ? Object.getOwnPropertyDescriptor(tW, mW.name) : {}), xW = !1, lW = OW.length - 1; lW >= 0; lW--) {
        var AW = {};
        for (var bW in mW) AW[bW] = "access" === bW ? {} : mW[bW];
        for (var bW in mW.access) AW.access[bW] = mW.access[bW];
        AW.addInitializer = function(WW) {
          if (xW) throw new TypeError("Cannot add initializers after decoration has completed");
          NW.push(PW(WW || null))
        };
        var jW = (0, OW[lW])("accessor" === cW ? {
          get: ZW.get,
          set: ZW.set
        } : ZW[wW], AW);
        if ("accessor" === cW) {
          if (void 0 === jW) continue;
          if (null === jW || "object" !== typeof jW) throw new TypeError("Object expected");
          (LW = PW(jW.get)) && (ZW.get = LW), (LW = PW(jW.set)) && (ZW.set = LW), (LW = PW(jW.init)) && EW.unshift(LW)
        } else(LW = PW(jW)) && ("field" === cW ? EW.unshift(LW) : ZW[wW] = LW)
      }
      tW && Object.defineProperty(tW, mW.name, ZW), xW = !0
    }

    function tW(WW, iW, OW) {
      for (var mW = arguments.length > 2, EW = 0; EW < iW.length; EW++) OW = mW ? iW[EW].call(WW, OW) : iW[EW].call(WW);
      return mW ? OW : void 0
    }

    function ZW(WW) {
      return "symbol" === typeof WW ? WW : "".concat(WW)
    }

    function xW(WW, iW, OW) {
      return "symbol" === typeof iW && (iW = iW.description ? "[".concat(iW.description, "]") : ""), Object.defineProperty(WW, "name", {
        configurable: !0,
        value: OW ? "".concat(OW, " ", iW) : iW
      })
    }

    function lW(WW, iW) {
      if ("object" === typeof Reflect && "function" === typeof Reflect.metadata) return Reflect.metadata(WW, iW)
    }

    function AW(WW, iW, OW, mW) {
      return new(OW || (OW = Promise))((function(EW, NW) {
        function PW(WW) {
          try {
            cW(mW.next(WW))
          } catch (iW) {
            NW(iW)
          }
        }

        function LW(WW) {
          try {
            cW(mW.throw(WW))
          } catch (iW) {
            NW(iW)
          }
        }

        function cW(WW) {
          var iW;
          WW.done ? EW(WW.value) : (iW = WW.value, iW instanceof OW ? iW : new OW((function(WW) {
            WW(iW)
          }))).then(PW, LW)
        }
        cW((mW = mW.apply(WW, iW || [])).next())
      }))
    }

    function bW(WW, iW) {
      var OW, mW, EW, NW = {
          label: 0,
          sent: function() {
            if (1 & EW[0]) throw EW[1];
            return EW[1]
          },
          trys: [],
          ops: []
        },
        PW = Object.create(("function" === typeof Iterator ? Iterator : Object).prototype);
      return PW.next = LW(0), PW.throw = LW(1), PW.return = LW(2), "function" === typeof Symbol && (PW[Symbol.iterator] = function() {
        return this
      }), PW;

      function LW(LW) {
        return function(cW) {
          return function(LW) {
            if (OW) throw new TypeError("Generator is already executing.");
            for (; PW && (PW = 0, LW[0] && (NW = 0)), NW;) try {
              if (OW = 1, mW && (EW = 2 & LW[0] ? mW.return : LW[0] ? mW.throw || ((EW = mW.return) && EW.call(mW), 0) : mW.next) && !(EW = EW.call(mW, LW[1])).done) return EW;
              switch (mW = 0, EW && (LW = [2 & LW[0], EW.value]), LW[0]) {
                case 0:
                case 1:
                  EW = LW;
                  break;
                case 4:
                  return NW.label++, {
                    value: LW[1],
                    done: !1
                  };
                case 5:
                  NW.label++, mW = LW[1], LW = [0];
                  continue;
                case 7:
                  LW = NW.ops.pop(), NW.trys.pop();
                  continue;
                default:
                  if (!(EW = (EW = NW.trys).length > 0 && EW[EW.length - 1]) && (6 === LW[0] || 2 === LW[0])) {
                    NW = 0;
                    continue
                  }
                  if (3 === LW[0] && (!EW || LW[1] > EW[0] && LW[1] < EW[3])) {
                    NW.label = LW[1];
                    break
                  }
                  if (6 === LW[0] && NW.label < EW[1]) {
                    NW.label = EW[1], EW = LW;
                    break
                  }
                  if (EW && NW.label < EW[2]) {
                    NW.label = EW[2], NW.ops.push(LW);
                    break
                  }
                  EW[2] && NW.ops.pop(), NW.trys.pop();
                  continue
              }
              LW = iW.call(WW, NW)
            } catch (cW) {
              LW = [6, cW], mW = 0
            } finally {
              OW = EW = 0
            }
            if (5 & LW[0]) throw LW[1];
            return {
              value: LW[0] ? LW[1] : void 0,
              done: !0
            }
          }([LW, cW])
        }
      }
    }
    var jW = Object.create ? function(WW, iW, OW, mW) {
      void 0 === mW && (mW = OW);
      var EW = Object.getOwnPropertyDescriptor(iW, OW);
      EW && !("get" in EW ? !iW.__esModule : EW.writable || EW.configurable) || (EW = {
        enumerable: !0,
        get: function() {
          return iW[OW]
        }
      }), Object.defineProperty(WW, mW, EW)
    } : function(WW, iW, OW, mW) {
      void 0 === mW && (mW = OW), WW[mW] = iW[OW]
    };

    function UW(WW, iW) {
      for (var OW in WW) "default" === OW || Object.prototype.hasOwnProperty.call(iW, OW) || jW(iW, WW, OW)
    }

    function kW(WW) {
      var iW = "function" === typeof Symbol && Symbol.iterator,
        OW = iW && WW[iW],
        mW = 0;
      if (OW) return OW.call(WW);
      if (WW && "number" === typeof WW.length) return {
        next: function() {
          return WW && mW >= WW.length && (WW = void 0), {
            value: WW && WW[mW++],
            done: !WW
          }
        }
      };
      throw new TypeError(iW ? "Object is not iterable." : "Symbol.iterator is not defined.")
    }

    function sW(WW, iW) {
      var OW = "function" === typeof Symbol && WW[Symbol.iterator];
      if (!OW) return WW;
      var mW, EW, NW = OW.call(WW),
        PW = [];
      try {
        for (;
          (void 0 === iW || iW-- > 0) && !(mW = NW.next()).done;) PW.push(mW.value)
      } catch (LW) {
        EW = {
          error: LW
        }
      } finally {
        try {
          mW && !mW.done && (OW = NW.return) && OW.call(NW)
        } finally {
          if (EW) throw EW.error
        }
      }
      return PW
    }

    function MW() {
      for (var WW = [], iW = 0; iW < arguments.length; iW++) WW = WW.concat(sW(arguments[iW]));
      return WW
    }

    function KW() {
      for (var WW = 0, iW = 0, OW = arguments.length; iW < OW; iW++) WW += arguments[iW].length;
      var mW = Array(WW),
        EW = 0;
      for (iW = 0; iW < OW; iW++)
        for (var NW = arguments[iW], PW = 0, LW = NW.length; PW < LW; PW++, EW++) mW[EW] = NW[PW];
      return mW
    }

    function SW(WW, iW, OW) {
      if (OW || 2 === arguments.length)
        for (var mW, EW = 0, NW = iW.length; EW < NW; EW++) !mW && EW in iW || (mW || (mW = Array.prototype.slice.call(iW, 0, EW)), mW[EW] = iW[EW]);
      return WW.concat(mW || Array.prototype.slice.call(iW))
    }

    function YW(WW) {
      return this instanceof YW ? (this.v = WW, this) : new YW(WW)
    }

    function yW(WW, iW, OW) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var mW, EW = OW.apply(WW, iW || []),
        NW = [];
      return mW = Object.create(("function" === typeof AsyncIterator ? AsyncIterator : Object).prototype), PW("next"), PW("throw"), PW("return", (function(WW) {
        return function(iW) {
          return Promise.resolve(iW).then(WW, wW)
        }
      })), mW[Symbol.asyncIterator] = function() {
        return this
      }, mW;

      function PW(WW, iW) {
        EW[WW] && (mW[WW] = function(iW) {
          return new Promise((function(OW, mW) {
            NW.push([WW, iW, OW, mW]) > 1 || LW(WW, iW)
          }))
        }, iW && (mW[WW] = iW(mW[WW])))
      }

      function LW(WW, iW) {
        try {
          (OW = EW[WW](iW)).value instanceof YW ? Promise.resolve(OW.value.v).then(cW, wW) : tW(NW[0][2], OW)
        } catch (mW) {
          tW(NW[0][3], mW)
        }
        var OW
      }

      function cW(WW) {
        LW("next", WW)
      }

      function wW(WW) {
        LW("throw", WW)
      }

      function tW(WW, iW) {
        WW(iW), NW.shift(), NW.length && LW(NW[0][0], NW[0][1])
      }
    }

    function TW(WW) {
      var iW, OW;
      return iW = {}, mW("next"), mW("throw", (function(WW) {
        throw WW
      })), mW("return"), iW[Symbol.iterator] = function() {
        return this
      }, iW;

      function mW(mW, EW) {
        iW[mW] = WW[mW] ? function(iW) {
          return (OW = !OW) ? {
            value: YW(WW[mW](iW)),
            done: !1
          } : EW ? EW(iW) : iW
        } : EW
      }
    }

    function JW(WW) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var iW, OW = WW[Symbol.asyncIterator];
      return OW ? OW.call(WW) : (WW = kW(WW), iW = {}, mW("next"), mW("throw"), mW("return"), iW[Symbol.asyncIterator] = function() {
        return this
      }, iW);

      function mW(OW) {
        iW[OW] = WW[OW] && function(iW) {
          return new Promise((function(mW, EW) {
            (function(WW, iW, OW, mW) {
              Promise.resolve(mW).then((function(iW) {
                WW({
                  value: iW,
                  done: OW
                })
              }), iW)
            })(mW, EW, (iW = WW[OW](iW)).done, iW.value)
          }))
        }
      }
    }

    function hW(WW, iW) {
      return Object.defineProperty ? Object.defineProperty(WW, "raw", {
        value: iW
      }) : WW.raw = iW, WW
    }
    var HW = Object.create ? function(WW, iW) {
        Object.defineProperty(WW, "default", {
          enumerable: !0,
          value: iW
        })
      } : function(WW, iW) {
        WW.default = iW
      },
      nW = function(WW) {
        return nW = Object.getOwnPropertyNames || function(WW) {
          var iW = [];
          for (var OW in WW) Object.prototype.hasOwnProperty.call(WW, OW) && (iW[iW.length] = OW);
          return iW
        }, nW(WW)
      };

    function uW(WW) {
      if (WW && WW.__esModule) return WW;
      var iW = {};
      if (null != WW)
        for (var OW = nW(WW), mW = 0; mW < OW.length; mW++) "default" !== OW[mW] && jW(iW, WW, OW[mW]);
      return HW(iW, WW), iW
    }

    function oW(WW) {
      return WW && WW.__esModule ? WW : {
        default: WW
      }
    }

    function dW(WW, iW, OW, mW) {
      if ("a" === OW && !mW) throw new TypeError("Private accessor was defined without a getter");
      if ("function" === typeof iW ? WW !== iW || !mW : !iW.has(WW)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
      return "m" === OW ? mW : "a" === OW ? mW.call(WW) : mW ? mW.value : iW.get(WW)
    }

    function eW(WW, iW, OW, mW, EW) {
      if ("m" === mW) throw new TypeError("Private method is not writable");
      if ("a" === mW && !EW) throw new TypeError("Private accessor was defined without a setter");
      if ("function" === typeof iW ? WW !== iW || !EW : !iW.has(WW)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
      return "a" === mW ? EW.call(WW, OW) : EW ? EW.value = OW : iW.set(WW, OW), OW
    }

    function vW(WW, iW) {
      if (null === iW || "object" !== typeof iW && "function" !== typeof iW) throw new TypeError("Cannot use 'in' operator on non-object");
      return "function" === typeof WW ? iW === WW : WW.has(iW)
    }

    function gW(WW, iW, OW) {
      if (null !== iW && void 0 !== iW) {
        if ("object" !== typeof iW && "function" !== typeof iW) throw new TypeError("Object expected.");
        var mW, EW;
        if (OW) {
          if (!Symbol.asyncDispose) throw new TypeError("Symbol.asyncDispose is not defined.");
          mW = iW[Symbol.asyncDispose]
        }
        if (void 0 === mW) {
          if (!Symbol.dispose) throw new TypeError("Symbol.dispose is not defined.");
          mW = iW[Symbol.dispose], OW && (EW = mW)
        }
        if ("function" !== typeof mW) throw new TypeError("Object not disposable.");
        EW && (mW = function() {
          try {
            EW.call(this)
          } catch (WW) {
            return Promise.reject(WW)
          }
        }), WW.stack.push({
          value: iW,
          dispose: mW,
          async: OW
        })
      } else OW && WW.stack.push({
        async: !0
      });
      return iW
    }
    var DW = "function" === typeof SuppressedError ? SuppressedError : function(WW, iW, OW) {
      var mW = new Error(OW);
      return mW.name = "SuppressedError", mW.error = WW, mW.suppressed = iW, mW
    };

    function VW(WW) {
      function iW(iW) {
        WW.error = WW.hasError ? new DW(iW, WW.error, "An error was suppressed during disposal.") : iW, WW.hasError = !0
      }
      var OW, mW = 0;
      return function EW() {
        for (; OW = WW.stack.pop();) try {
          if (!OW.async && 1 === mW) return mW = 0, WW.stack.push(OW), Promise.resolve().then(EW);
          if (OW.dispose) {
            var NW = OW.dispose.call(OW.value);
            if (OW.async) return mW |= 2, Promise.resolve(NW).then(EW, (function(WW) {
              return iW(WW), EW()
            }))
          } else mW |= 1
        } catch (PW) {
          iW(PW)
        }
        if (1 === mW) return WW.hasError ? Promise.reject(WW.error) : Promise.resolve();
        if (WW.hasError) throw WW.error
      }()
    }

    function pW(WW, iW) {
      return "string" === typeof WW && /^\.\.?\//.test(WW) ? WW.replace(/\.(tsx)$|((?:\.d)?)((?:\.[^./]+?)?)\.([cm]?)ts$/i, (function(WW, OW, mW, EW, NW) {
        return OW ? iW ? ".jsx" : ".js" : !mW || EW && NW ? mW + EW + "." + NW.toLowerCase() + "js" : WW
      })) : WW
    }
    const fW = {
      __extends: EW,
      __assign: NW,
      __rest: PW,
      __decorate: LW,
      __param: cW,
      __esDecorate: wW,
      __runInitializers: tW,
      __propKey: ZW,
      __setFunctionName: xW,
      __metadata: lW,
      __awaiter: AW,
      __generator: bW,
      __createBinding: jW,
      __exportStar: UW,
      __values: kW,
      __read: sW,
      __spread: MW,
      __spreadArrays: KW,
      __spreadArray: SW,
      __await: YW,
      __asyncGenerator: yW,
      __asyncDelegator: TW,
      __asyncValues: JW,
      __makeTemplateObject: hW,
      __importStar: uW,
      __importDefault: oW,
      __classPrivateFieldGet: dW,
      __classPrivateFieldSet: eW,
      __classPrivateFieldIn: vW,
      __addDisposableResource: gW,
      __disposeResources: VW,
      __rewriteRelativeImportExtension: pW
    }
  }
};
Object.freeze(modules);
for (const WW in modules) Object.freeze(modules[WW]);