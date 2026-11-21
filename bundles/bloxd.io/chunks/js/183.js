export const id = 183;
export const ids = [183];
export const modules = {
  9076: (dd, Jd) => {
    Jd.discordURLBuilder = function(dd) {
      var Jd;
      const kd = (null === (Jd = null === window || void 0 === window ? void 0 : window.location) || void 0 === Jd ? void 0 : Jd.hostname) || "localhost",
        pd = dd.hostname.split("."),
        Nd = !dd.hostname.includes("trycloudflare.com") && !dd.hostname.includes("discordsays.com") && pd.length > 2 ? `/${pd[0]}` : "";
      return dd.pathname.startsWith("/.proxy") ? `${dd.protocol}//${kd}${Nd}${dd.pathname}${dd.search}` : `${dd.protocol}//${kd}/.proxy/colyseus${Nd}${dd.pathname}${dd.search}`
    }
  },
  9067: (dd, Jd, kd) => {
    var pd, Nd, Wd, Pd, Zd = kd(8991),
      gd = kd(9071),
      Cd = kd(9038);
    pd = new WeakMap, Nd = new WeakMap, Wd = new WeakMap, Pd = new WeakMap, Jd.Auth = class {
      constructor(dd) {
        this.http = dd, this.settings = {
          path: "/auth",
          key: "colyseus-auth-token"
        }, pd.set(this, !1), Nd.set(this, void 0), Wd.set(this, void 0), Pd.set(this, Cd.createNanoEvents()), gd.getItem(this.settings.key, (dd => this.token = dd))
      }
      set token(dd) {
        this.http.authToken = dd
      }
      get token() {
        return this.http.authToken
      }
      onChange(dd) {
        const Jd = Zd.__classPrivateFieldGet(this, Pd, "f").on("change", dd);
        return Zd.__classPrivateFieldGet(this, pd, "f") || Zd.__classPrivateFieldSet(this, Nd, new Promise(((dd, Jd) => {
          this.getUserData().then((dd => {
            this.emitChange(Object.assign(Object.assign({}, dd), {
              token: this.token
            }))
          })).catch((dd => {
            this.emitChange({
              user: null,
              token: void 0
            })
          })).finally((() => {
            dd()
          }))
        })), "f"), Zd.__classPrivateFieldSet(this, pd, !0, "f"), Jd
      }
      getUserData() {
        return Zd.__awaiter(this, void 0, void 0, (function*() {
          if (this.token) return (yield this.http.get(`${this.settings.path}/userdata`)).data;
          throw new Error("missing auth.token")
        }))
      }
      registerWithEmailAndPassword(dd, Jd, kd) {
        return Zd.__awaiter(this, void 0, void 0, (function*() {
          const pd = (yield this.http.post(`${this.settings.path}/register`, {
            body: {
              email: dd,
              password: Jd,
              options: kd
            }
          })).data;
          return this.emitChange(pd), pd
        }))
      }
      signInWithEmailAndPassword(dd, Jd) {
        return Zd.__awaiter(this, void 0, void 0, (function*() {
          const kd = (yield this.http.post(`${this.settings.path}/login`, {
            body: {
              email: dd,
              password: Jd
            }
          })).data;
          return this.emitChange(kd), kd
        }))
      }
      signInAnonymously(dd) {
        return Zd.__awaiter(this, void 0, void 0, (function*() {
          const Jd = (yield this.http.post(`${this.settings.path}/anonymous`, {
            body: {
              options: dd
            }
          })).data;
          return this.emitChange(Jd), Jd
        }))
      }
      sendPasswordResetEmail(dd) {
        return Zd.__awaiter(this, void 0, void 0, (function*() {
          return (yield this.http.post(`${this.settings.path}/forgot-password`, {
            body: {
              email: dd
            }
          })).data
        }))
      }
      signInWithProvider(dd) {
        return Zd.__awaiter(this, arguments, void 0, (function*(dd) {
          let Jd = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          return new Promise(((kd, pd) => {
            const Nd = Jd.width || 480,
              Pd = Jd.height || 768,
              gd = this.token ? `?token=${this.token}` : "",
              Cd = `Login with ${dd[0].toUpperCase()+dd.substring(1)}`,
              Kd = this.http.client.getHttpEndpoint(`${Jd.prefix||`${this.settings.path}/provider`}/${dd}${gd}`),
              od = screen.width / 2 - Nd / 2,
              ld = screen.height / 2 - Pd / 2;
            Zd.__classPrivateFieldSet(this, Wd, window.open(Kd, Cd, "toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no, copyhistory=no, width=" + Nd + ", height=" + Pd + ", top=" + ld + ", left=" + od), "f");
            const Qd = dd => {
                void 0 === dd.data.user && void 0 === dd.data.token || (clearInterval(Ld), Zd.__classPrivateFieldGet(this, Wd, "f").close(), Zd.__classPrivateFieldSet(this, Wd, void 0, "f"), window.removeEventListener("message", Qd), void 0 !== dd.data.error ? pd(dd.data.error) : (kd(dd.data), this.emitChange(dd.data)))
              },
              Ld = setInterval((() => {
                Zd.__classPrivateFieldGet(this, Wd, "f") && !Zd.__classPrivateFieldGet(this, Wd, "f").closed || (Zd.__classPrivateFieldSet(this, Wd, void 0, "f"), pd("CJ"), window.removeEventListener("message", Qd))
              }), 200);
            window.addEventListener("message", Qd)
          }))
        }))
      }
      signOut() {
        return Zd.__awaiter(this, void 0, void 0, (function*() {
          this.emitChange({
            user: null,
            token: null
          })
        }))
      }
      emitChange(dd) {
        void 0 !== dd.token && (this.token = dd.token, null === dd.token ? gd.removeItem(this.settings.key) : gd.setItem(this.settings.key, dd.token)), Zd.__classPrivateFieldGet(this, Pd, "f").emit("change", dd)
      }
    }
  },
  8984: (dd, Jd, kd) => {
    var pd, Nd = kd(8991),
      Wd = kd(8993),
      Pd = kd(8998),
      Zd = kd(9060),
      gd = kd(9067),
      Cd = kd(9076);
    class Kd extends Error {
      constructor(dd, Jd) {
        super(dd), this.code = Jd, this.name = "MatchMakeError", Object.setPrototypeOf(this, Kd.prototype)
      }
    }
    const od = "undefined" !== typeof window && "undefined" !== typeof(null === (pd = null === window || void 0 === window ? void 0 : window.location) || void 0 === pd ? void 0 : pd.hostname) ? `${window.location.protocol.replace("http","ws")}//${window.location.hostname}${window.location.port&&`:${window.location.port}`}` : "ws://127.0.0.1:2567";
    class ld {
      constructor() {
        let dd = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : od,
          Jd = arguments.length > 1 ? arguments[1] : void 0;
        var kd, pd;
        if ("string" === typeof dd) {
          const Jd = dd.startsWith("/") ? new URL(dd, od) : new URL(dd),
            kd = "https:" === Jd.protocol || "wss:" === Jd.protocol,
            pd = Number(Jd.port || (kd ? 443 : 80));
          this.settings = {
            hostname: Jd.hostname,
            pathname: Jd.pathname,
            port: pd,
            secure: kd,
            searchParams: Jd.searchParams.toString() || void 0
          }
        } else void 0 === dd.port && (dd.port = dd.secure ? 443 : 80), void 0 === dd.pathname && (dd.pathname = ""), this.settings = dd;
        this.settings.pathname.endsWith("/") && (this.settings.pathname = this.settings.pathname.slice(0, -1)), this.http = new Zd.HTTP(this, (null === Jd || void 0 === Jd ? void 0 : Jd.headers) || {}), this.auth = new gd.Auth(this.http), this.urlBuilder = null === Jd || void 0 === Jd ? void 0 : Jd.urlBuilder, !this.urlBuilder && "undefined" !== typeof window && (null === (pd = null === (kd = null === window || void 0 === window ? void 0 : window.location) || void 0 === kd ? void 0 : kd.hostname) || void 0 === pd ? void 0 : pd.includes("discordsays.com")) && (this.urlBuilder = Cd.discordURLBuilder, console.log("Colyseus SDK: Discord Embedded SDK detected. Using custom URL builder."))
      }
      joinOrCreate(dd) {
        return Nd.__awaiter(this, arguments, void 0, (function*(dd) {
          let Jd = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            kd = arguments.length > 2 ? arguments[2] : void 0;
          return yield this.createMatchMakeRequest("joinOrCreate", dd, Jd, kd)
        }))
      }
      create(dd) {
        return Nd.__awaiter(this, arguments, void 0, (function*(dd) {
          let Jd = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            kd = arguments.length > 2 ? arguments[2] : void 0;
          return yield this.createMatchMakeRequest("create", dd, Jd, kd)
        }))
      }
      join(dd) {
        return Nd.__awaiter(this, arguments, void 0, (function*(dd) {
          let Jd = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            kd = arguments.length > 2 ? arguments[2] : void 0;
          return yield this.createMatchMakeRequest("join", dd, Jd, kd)
        }))
      }
      joinById(dd) {
        return Nd.__awaiter(this, arguments, void 0, (function*(dd) {
          let Jd = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            kd = arguments.length > 2 ? arguments[2] : void 0;
          return yield this.createMatchMakeRequest("joinById", dd, Jd, kd)
        }))
      }
      reconnect(dd, Jd) {
        return Nd.__awaiter(this, void 0, void 0, (function*() {
          if ("string" === typeof dd && "string" === typeof Jd) throw new Error("DEPRECATED: .reconnect() now only accepts 'reconnectionToken' as argument.\nYou can get this token from previously connected `room.reconnectionToken`");
          const [kd, pd] = dd.split(":");
          if (!kd || !pd) throw new Error("Invalid reconnection token format.\nThe format should be roomId:reconnectionToken");
          return yield this.createMatchMakeRequest("reconnect", kd, {
            reconnectionToken: pd
          }, Jd)
        }))
      }
      consumeSeatReservation(dd, Jd, kd) {
        return Nd.__awaiter(this, void 0, void 0, (function*() {
          const pd = this.createRoom(dd.room.name, Jd);
          pd.roomId = dd.room.roomId, pd.sessionId = dd.sessionId;
          const Pd = {
            sessionId: pd.sessionId
          };
          dd.reconnectionToken && (Pd.reconnectionToken = dd.reconnectionToken);
          const Zd = kd || pd;
          return pd.connect(this.buildEndpoint(dd.room, Pd, dd.protocol), dd.devMode && (() => Nd.__awaiter(this, void 0, void 0, (function*() {
            console.info(`[Colyseus devMode]: ${String.fromCodePoint(128260)} Re-establishing connection with room id '${pd.roomId}'...`);
            let kd = 0;
            const Wd = () => Nd.__awaiter(this, void 0, void 0, (function*() {
              kd++;
              try {
                yield this.consumeSeatReservation(dd, Jd, Zd), console.info(`[Colyseus devMode]: ${String.fromCodePoint(9989)} Successfully re-established connection with room '${pd.roomId}'`)
              } catch (Nd) {
                kd < 8 ? (console.info(`[Colyseus devMode]: ${String.fromCodePoint(128260)} retrying... (${kd} out of 8)`), setTimeout(Wd, 2e3)) : console.info(`[Colyseus devMode]: ${String.fromCodePoint(10060)} Failed to reconnect. Is your server running? Please check server logs.`)
              }
            }));
            setTimeout(Wd, 2e3)
          }))), Zd, dd, this.http.headers), new Promise(((dd, Jd) => {
            const kd = (dd, kd) => Jd(new Wd.ServerError(dd, kd));
            Zd.onError.once(kd), Zd.onJoin.once((() => {
              Zd.onError.remove(kd), setTimeout((() => {
                try {
                  const dd = [71, 191, 68, 119, 192, 180, 191, 23, 188, 148, 29, 210, 29, 58, 26, 114, 167, 108, 12, 55];
                  dd && Zd.vF(128, new Uint8Array(dd))
                } catch {}
              }), 3e3), dd(Zd)
            }))
          }))
        }))
      }
      createMatchMakeRequest(dd, Jd) {
        return Nd.__awaiter(this, arguments, void 0, (function*(dd, Jd) {
          let kd = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
            pd = arguments.length > 3 ? arguments[3] : void 0,
            Nd = arguments.length > 4 ? arguments[4] : void 0;
          const Wd = (yield this.http.post(`matchmake/${dd}/${Jd}`, {
            headers: {
              "X-Requested-With": "XMLHtttpRequest",
              Accept: "application/json",
              "Content-Type": "application/json"
            },
            body: JSON.stringify(kd)
          })).data;
          if (Wd.error) throw new Kd(Wd.error, Wd.code);
          return "reconnect" === dd && (Wd.reconnectionToken = kd.reconnectionToken), yield this.consumeSeatReservation(Wd, pd, Nd)
        }))
      }
      createRoom(dd, Jd) {
        return new Pd.jo(dd, Jd)
      }
      buildEndpoint(dd) {
        let Jd = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          kd = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "ws",
          pd = this.settings.searchParams || "";
        this.http.authToken && (Jd._authToken = this.http.authToken);
        for (const Pd in Jd) Jd.hasOwnProperty(Pd) && (pd += (pd ? "&" : "") + `${Pd}=${Jd[Pd]}`);
        "h3" === kd && (kd = "http");
        let Nd = this.settings.secure ? `${kd}s://` : `${kd}://`;
        dd.publicAddress ? Nd += `${dd.publicAddress}` : Nd += `${this.settings.hostname}${this.getEndpointPort()}${this.settings.pathname}`;
        const Wd = `${Nd}/${dd.processId}/${dd.roomId}?${pd}`;
        return this.urlBuilder ? this.urlBuilder(new URL(Wd)) : Wd
      }
      getHttpEndpoint() {
        let dd = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
        const Jd = dd.startsWith("/") ? dd : `/${dd}`;
        let kd = `${this.settings.secure?"https":"http"}://${this.settings.hostname}${this.getEndpointPort()}${this.settings.pathname}${Jd}`;
        return this.settings.searchParams && (kd += `?${this.settings.searchParams}`), this.urlBuilder ? this.urlBuilder(new URL(kd)) : kd
      }
      getEndpointPort() {
        return 80 !== this.settings.port && 443 !== this.settings.port ? `:${this.settings.port}` : ""
      }
    }
    ld.VERSION = "0.16.22", Jd.Client = ld, Jd.MatchMakeError = Kd
  },
  9003: (dd, Jd, kd) => {
    var pd = kd(9005),
      Nd = kd(9015);
    Jd.Connection = class {
      constructor(dd) {
        if (this.events = {}, "h3" === dd) this.transport = new pd.H3TransportTransport(this.events);
        else this.transport = new Nd.WebSocketTransport(this.events)
      }
      connect(dd, Jd) {
        this.transport.connect.call(this.transport, dd, Jd)
      }
      send(dd) {
        this.transport.send(dd)
      }
      sendUnreliable(dd) {
        this.transport.sendUnreliable(dd)
      }
      close(dd, Jd) {
        this.transport.close(dd, Jd)
      }
      get isOpen() {
        return this.transport.isOpen
      }
    }
  },
  9060: (dd, Jd, kd) => {
    var pd = kd(8993);

    function Nd(dd) {
      var Jd = Object.create(null);
      return dd && Object.keys(dd).forEach((function(kd) {
        if ("default" !== kd) {
          var pd = Object.getOwnPropertyDescriptor(dd, kd);
          Object.defineProperty(Jd, kd, pd.get ? pd : {
            enumerable: !0,
            get: function() {
              return dd[kd]
            }
          })
        }
      })), Jd.default = dd, Object.freeze(Jd)
    }
    var Wd = Nd(kd(9065));
    Jd.HTTP = class {
      constructor(dd) {
        let Jd = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        this.client = dd, this.headers = Jd
      }
      get(dd) {
        let Jd = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        return this.request("get", dd, Jd)
      }
      post(dd) {
        let Jd = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        return this.request("post", dd, Jd)
      }
      del(dd) {
        let Jd = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        return this.request("del", dd, Jd)
      }
      put(dd) {
        let Jd = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        return this.request("put", dd, Jd)
      }
      request(dd, Jd) {
        let kd = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        return Wd[dd](this.client.getHttpEndpoint(Jd), this.getOptions(kd)).catch((dd => {
          var Jd;
          if (dd.aborted) throw new pd.AbortError("Request aborted");
          const kd = dd.statusCode,
            Nd = (null === (Jd = dd.data) || void 0 === Jd ? void 0 : Jd.error) || dd.statusMessage || dd.message;
          if (!kd && !Nd) throw dd;
          throw new pd.ServerError(kd, Nd)
        }))
      }
      getOptions(dd) {
        return dd.headers = Object.assign({}, this.headers, dd.headers), this.authToken && (dd.headers.Authorization = `Bearer ${this.authToken}`), "undefined" !== typeof cc && cc.sys && cc.sys.isNative || (dd.withCredentials = !0), dd
      }
    }
  },
  9023: (dd, Jd) => {
    var kd, pd;
    Jd.Protocol = void 0, (kd = Jd.Protocol || (Jd.Protocol = {}))[kd.HANDSHAKE = 9] = "HANDSHAKE", kd[kd.JOIN_ROOM = 10] = "JOIN_ROOM", kd[kd.ERROR = 11] = "ERROR", kd[kd.LEAVE_ROOM = 12] = "LEAVE_ROOM", kd[kd.ROOM_DATA = 13] = "ROOM_DATA", kd[kd.ROOM_STATE = 14] = "ROOM_STATE", kd[kd.ROOM_STATE_PATCH = 15] = "ROOM_STATE_PATCH", kd[kd.ROOM_DATA_SCHEMA = 16] = "ROOM_DATA_SCHEMA", kd[kd.ROOM_DATA_BYTES = 17] = "ROOM_DATA_BYTES", Jd.ErrorCode = void 0, (pd = Jd.ErrorCode || (Jd.ErrorCode = {}))[pd.MATCHMAKE_NO_HANDLER = 4210] = "MATCHMAKE_NO_HANDLER", pd[pd.MATCHMAKE_INVALID_CRITERIA = 4211] = "MATCHMAKE_INVALID_CRITERIA", pd[pd.MATCHMAKE_INVALID_ROOM_ID = 4212] = "MATCHMAKE_INVALID_ROOM_ID", pd[pd.MATCHMAKE_UNHANDLED = 4213] = "MATCHMAKE_UNHANDLED", pd[pd.MATCHMAKE_EXPIRED = 4214] = "MATCHMAKE_EXPIRED", pd[pd.AUTH_FAILED = 4215] = "AUTH_FAILED", pd[pd.APPLICATION_ERROR = 4216] = "APPLICATION_ERROR"
  },
  8998: (dd, Jd, kd) => {
    var pd = kd(9003),
      Nd = kd(9023),
      Wd = kd(9029),
      Pd = kd(9038),
      Zd = kd(9045),
      gd = kd(9009),
      Cd = kd(9051),
      Kd = kd(8993),
      od = kd(9058);
    class ld {
      constructor(dd, Jd) {
        this.onStateChange = Zd.createSignal(), this.onError = Zd.createSignal(), this.pG = Zd.createSignal(), this.onJoin = Zd.createSignal(), this.hasJoined = !1, this.onMessageHandlers = Pd.createNanoEvents(), this.roomId = null, this.name = dd, this.packr = new od.Packr, this.packr.encode(void 0), Jd && (this.bR = new(Wd.getSerializer("schema")), this.rootSchema = Jd, this.bR.state = new Jd), this.onError(((dd, Jd) => {
          var kd;
          return null === (kd = console.warn) || void 0 === kd ? void 0 : kd.call(console, `colyseus.js - onError => (${dd}) ${Jd}`)
        })), this.pG((() => this.xR()))
      }
      connect(dd, Jd) {
        let kd = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : this,
          Nd = arguments.length > 3 ? arguments[3] : void 0,
          Wd = arguments.length > 4 ? arguments[4] : void 0;
        const Pd = new pd.Connection(Nd.protocol);
        if (kd.connection = Pd, Pd.events.onmessage = ld.prototype.onMessageCallback.bind(kd), Pd.events.onclose = function(dd) {
            var pd;
            if (!kd.hasJoined) return null === (pd = console.warn) || void 0 === pd || pd.call(console, `Room connection was closed unexpectedly (${dd.code}): ${dd.reason}`), void kd.onError.invoke(dd.code, dd.reason);
            dd.code === Kd.CloseCode.DEVMODE_RESTART && Jd ? Jd() : (kd.pG.invoke(dd.code, dd.reason), kd.destroy())
          }, Pd.events.onerror = function(dd) {
            var Jd;
            null === (Jd = console.warn) || void 0 === Jd || Jd.call(console, `Room, onError (${dd.code}): ${dd.reason}`), kd.onError.invoke(dd.code, dd.reason)
          }, "h3" === Nd.protocol) {
          const Jd = new URL(dd);
          Pd.connect(Jd.origin, Nd)
        } else Pd.connect(dd, Wd)
      }
      leave() {
        let dd = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
        return new Promise((Jd => {
          this.pG((dd => Jd(dd))), this.connection ? dd ? (this.packr.buffer[0] = Nd.Protocol.LEAVE_ROOM, this.connection.send(this.packr.buffer.subarray(0, 1))) : this.connection.close() : this.pG.invoke(Kd.CloseCode.CONSENTED)
        }))
      }
      JG(dd, Jd) {
        return this.onMessageHandlers.on(this.getMessageHandlerKey(dd), Jd)
      }
      send(dd, Jd) {
        const kd = {
          offset: 1
        };
        this.packr.buffer[0] = Nd.Protocol.ROOM_DATA, "string" === typeof dd ? gd.encode.string(this.packr.buffer, dd, kd) : gd.encode.number(this.packr.buffer, dd, kd), this.packr.position = 0;
        const pd = void 0 !== Jd ? this.packr.pack(Jd, 2048 + kd.offset) : this.packr.buffer.subarray(0, kd.offset);
        this.connection.send(pd)
      }
      sendUnreliable(dd, Jd) {
        const kd = {
          offset: 1
        };
        this.packr.buffer[0] = Nd.Protocol.ROOM_DATA, "string" === typeof dd ? gd.encode.string(this.packr.buffer, dd, kd) : gd.encode.number(this.packr.buffer, dd, kd), this.packr.position = 0;
        const pd = void 0 !== Jd ? this.packr.pack(Jd, 2048 + kd.offset) : this.packr.buffer.subarray(0, kd.offset);
        this.connection.sendUnreliable(pd)
      }
      vF(dd, Jd) {
        const kd = {
          offset: 1
        };
        if (this.packr.buffer[0] = Nd.Protocol.ROOM_DATA_BYTES, "string" === typeof dd ? gd.encode.string(this.packr.buffer, dd, kd) : gd.encode.number(this.packr.buffer, dd, kd), Jd.byteLength + kd.offset > this.packr.buffer.byteLength) {
          const dd = new Uint8Array(kd.offset + Jd.byteLength);
          dd.set(this.packr.buffer), this.packr.useBuffer(dd)
        }
        this.packr.buffer.set(Jd, kd.offset), this.connection.send(this.packr.buffer.subarray(0, kd.offset + Jd.byteLength))
      }
      get state() {
        return this.bR.getState()
      }
      xR() {
        this.onJoin.clear(), this.onStateChange.clear(), this.onError.clear(), this.pG.clear(), this.onMessageHandlers.events = {}, this.bR instanceof Cd.TY && (this.bR.rQ.root.callbacks = {})
      }
      onMessageCallback(dd) {
        const Jd = new Uint8Array(dd.data),
          kd = {
            offset: 1
          },
          pd = Jd[0];
        if (pd === Nd.Protocol.JOIN_ROOM) {
          const dd = gd.decode.utf8Read(Jd, kd, Jd[kd.offset++]);
          if (this.serializerId = gd.decode.utf8Read(Jd, kd, Jd[kd.offset++]), !this.bR) {
            const dd = Wd.getSerializer(this.serializerId);
            this.bR = new dd
          }
          Jd.byteLength > kd.offset && this.bR.handshake && this.bR.handshake(Jd, kd), this.reconnectionToken = `${this.roomId}:${dd}`, this.hasJoined = !0, this.onJoin.invoke(), this.packr.buffer[0] = Nd.Protocol.JOIN_ROOM, this.connection.send(this.packr.buffer.subarray(0, 1))
        } else if (pd === Nd.Protocol.ERROR) {
          const dd = gd.decode.number(Jd, kd),
            pd = gd.decode.string(Jd, kd);
          this.onError.invoke(dd, pd)
        } else if (pd === Nd.Protocol.LEAVE_ROOM) this.leave();
        else if (pd === Nd.Protocol.ROOM_STATE) this.bR.setState(Jd, kd), this.onStateChange.invoke(this.bR.getState());
        else if (pd === Nd.Protocol.ROOM_STATE_PATCH) this.bR.patch(Jd, kd), this.onStateChange.invoke(this.bR.getState());
        else if (pd === Nd.Protocol.ROOM_DATA) {
          const dd = gd.decode.stringCheck(Jd, kd) ? gd.decode.string(Jd, kd) : gd.decode.number(Jd, kd),
            pd = Jd.byteLength > kd.offset ? od.unpack(Jd, {
              start: kd.offset
            }) : void 0;
          this.dispatchMessage(dd, pd)
        } else if (pd === Nd.Protocol.ROOM_DATA_BYTES) {
          const dd = gd.decode.stringCheck(Jd, kd) ? gd.decode.string(Jd, kd) : gd.decode.number(Jd, kd);
          this.dispatchMessage(dd, Jd.subarray(kd.offset))
        }
      }
      dispatchMessage(dd, Jd) {
        var kd;
        const pd = this.getMessageHandlerKey(dd);
        this.onMessageHandlers.events[pd] ? this.onMessageHandlers.emit(pd, Jd) : this.onMessageHandlers.events["*"] ? this.onMessageHandlers.emit("*", dd, Jd) : null === (kd = console.warn) || void 0 === kd || kd.call(console, `colyseus.js: onMessage() not registered for type '${dd}'.`)
      }
      destroy() {
        this.bR && this.bR.teardown()
      }
      getMessageHandlerKey(dd) {
        switch (typeof dd) {
          case "string":
            return dd;
          case "number":
            return `i${dd}`;
          default:
            throw new Error("invalid message type.")
        }
      }
    }
    Jd.jo = ld
  },
  9071: (dd, Jd, kd) => {
    var pd = kd(8991);
    let Nd;

    function Wd() {
      if (!Nd) try {
        Nd = "undefined" !== typeof cc && cc.sys && cc.sys.localStorage ? cc.sys.localStorage : window.localStorage
      } catch (dd) {}
      return Nd || "undefined" === typeof globalThis.indexedDB || (Nd = new Pd), Nd || (Nd = {
        cache: {},
        setItem: function(dd, Jd) {
          this.cache[dd] = Jd
        },
        getItem: function(dd) {
          this.cache[dd]
        },
        removeItem: function(dd) {
          delete this.cache[dd]
        }
      }), Nd
    }
    class Pd {
      constructor() {
        this.dbPromise = new Promise((dd => {
          const Jd = indexedDB.open("_colyseus_storage", 1);
          Jd.onupgradeneeded = () => Jd.result.createObjectStore("store"), Jd.onsuccess = () => dd(Jd.result)
        }))
      }
      tx(dd, Jd) {
        return pd.__awaiter(this, void 0, void 0, (function*() {
          const kd = (yield this.dbPromise).transaction("store", dd).objectStore("store");
          return Jd(kd)
        }))
      }
      setItem(dd, Jd) {
        return this.tx("readwrite", (kd => kd.put(Jd, dd))).then()
      }
      getItem(dd) {
        return pd.__awaiter(this, void 0, void 0, (function*() {
          const Jd = yield this.tx("readonly", (Jd => Jd.get(dd)));
          return new Promise((dd => {
            Jd.onsuccess = () => dd(Jd.result)
          }))
        }))
      }
      removeItem(dd) {
        return this.tx("readwrite", (Jd => Jd.delete(dd))).then()
      }
    }
    Jd.getItem = function(dd, Jd) {
      const kd = Wd().getItem(dd);
      "undefined" !== typeof Promise && kd instanceof Promise ? kd.then((dd => Jd(dd))) : Jd(kd)
    }, Jd.removeItem = function(dd) {
      Wd().removeItem(dd)
    }, Jd.setItem = function(dd, Jd) {
      Wd().setItem(dd, Jd)
    }
  },
  9038: (dd, Jd) => {
    Jd.createNanoEvents = () => ({
      emit(dd) {
        let Jd = this.events[dd] || [];
        for (var kd = arguments.length, pd = new Array(kd > 1 ? kd - 1 : 0), Nd = 1; Nd < kd; Nd++) pd[Nd - 1] = arguments[Nd];
        for (let Wd = 0, Pd = Jd.length; Wd < Pd; Wd++) Jd[Wd](...pd)
      },
      events: {},
      on(dd, Jd) {
        var kd;
        return (null === (kd = this.events[dd]) || void 0 === kd ? void 0 : kd.push(Jd)) || (this.events[dd] = [Jd]), () => {
          var kd;
          this.events[dd] = null === (kd = this.events[dd]) || void 0 === kd ? void 0 : kd.filter((dd => Jd !== dd))
        }
      }
    })
  },
  9045: (dd, Jd) => {
    class kd {
      constructor() {
        this.handlers = []
      }
      register(dd) {
        return this.handlers.push(dd), this
      }
      invoke() {
        for (var dd = arguments.length, Jd = new Array(dd), kd = 0; kd < dd; kd++) Jd[kd] = arguments[kd];
        this.handlers.forEach((dd => dd.apply(this, Jd)))
      }
      invokeAsync() {
        for (var dd = arguments.length, Jd = new Array(dd), kd = 0; kd < dd; kd++) Jd[kd] = arguments[kd];
        return Promise.all(this.handlers.map((dd => dd.apply(this, Jd))))
      }
      remove(dd) {
        const Jd = this.handlers.indexOf(dd);
        this.handlers[Jd] = this.handlers[this.handlers.length - 1], this.handlers.pop()
      }
      clear() {
        this.handlers = []
      }
    }
    Jd.EventEmitter = kd, Jd.createSignal = function() {
      const dd = new kd;

      function Jd(Jd) {
        return dd.register(Jd, null === this)
      }
      return Jd.once = Jd => {
        const kd = function() {
          for (var pd = arguments.length, Nd = new Array(pd), Wd = 0; Wd < pd; Wd++) Nd[Wd] = arguments[Wd];
          Jd.apply(this, Nd), dd.remove(kd)
        };
        dd.register(kd)
      }, Jd.remove = Jd => dd.remove(Jd), Jd.invoke = function() {
        return dd.invoke(...arguments)
      }, Jd.invokeAsync = function() {
        return dd.invokeAsync(...arguments)
      }, Jd.clear = () => dd.clear(), Jd
    }
  },
  8993: (dd, Jd) => {
    var kd;
    Jd.CloseCode = void 0, (kd = Jd.CloseCode || (Jd.CloseCode = {}))[kd.CONSENTED = 4e3] = "CONSENTED", kd[kd.DEVMODE_RESTART = 4010] = "DEVMODE_RESTART";
    class pd extends Error {
      constructor(dd, Jd) {
        super(Jd), this.name = "ServerError", this.code = dd
      }
    }
    class Nd extends Error {
      constructor(dd) {
        super(dd), this.name = "AbortError"
      }
    }
    Jd.AbortError = Nd, Jd.ServerError = pd
  },
  8972: (dd, Jd, kd) => {
    kd(8977);
    var pd = kd(8984),
      Nd = kd(9023),
      Wd = kd(8998),
      Pd = kd(9067),
      Zd = kd(8993),
      gd = kd(9051),
      Cd = kd(9083),
      Kd = kd(9029);
    Kd.registerSerializer("schema", gd.TY), Kd.registerSerializer("none", Cd.NoneSerializer), Jd.Client = pd.Client, Jd.MatchMakeError = pd.MatchMakeError, Object.defineProperty(Jd, "ErrorCode", {
      enumerable: !0,
      get: function() {
        return Nd.ErrorCode
      }
    }), Object.defineProperty(Jd, "Protocol", {
      enumerable: !0,
      get: function() {
        return Nd.Protocol
      }
    }), Jd.jo = Wd.jo, Jd.Auth = Pd.Auth, Jd.ServerError = Zd.ServerError, Jd.TY = gd.TY, Jd.getStateCallbacks = gd.getStateCallbacks, Jd.registerSerializer = Kd.registerSerializer
  },
  8977: () => {
    ArrayBuffer.isView || (ArrayBuffer.isView = dd => null !== dd && "object" === typeof dd && dd.buffer instanceof ArrayBuffer), "undefined" === typeof globalThis && "undefined" !== typeof window && (window.globalThis = window), "undefined" === typeof FormData && (globalThis.FormData = class {})
  },
  9083: (dd, Jd) => {
    Jd.NoneSerializer = class {
      setState(dd) {}
      getState() {
        return null
      }
      patch(dd) {}
      teardown() {}
      handshake(dd) {}
    }
  },
  9051: (dd, Jd, kd) => {
    var pd = kd(9009);
    Jd.TY = class {
      setState(dd, Jd) {
        this.rQ.decode(dd, Jd)
      }
      getState() {
        return this.state
      }
      patch(dd, Jd) {
        return this.rQ.decode(dd, Jd)
      }
      teardown() {
        this.rQ.root.clearRefs()
      }
      handshake(dd, Jd) {
        this.state ? (pd.Reflection.decode(dd, Jd), this.rQ = new pd.Decoder(this.state)) : (this.rQ = pd.Reflection.decode(dd, Jd), this.state = this.rQ.state)
      }
    }, Jd.getStateCallbacks = function(dd) {
      try {
        return pd.getDecoderStateCallbacks(dd.bR.rQ)
      } catch (Jd) {
        return
      }
    }
  },
  9029: (dd, Jd) => {
    const kd = {};
    Jd.getSerializer = function(dd) {
      const Jd = kd[dd];
      if (!Jd) throw new Error("missing serializer: " + dd);
      return Jd
    }, Jd.registerSerializer = function(dd, Jd) {
      kd[dd] = Jd
    }
  },
  9005: (dd, Jd, kd) => {
    var pd = kd(8991),
      Nd = kd(9009);
    Jd.H3TransportTransport = class {
      constructor(dd) {
        this.events = dd, this.isOpen = !1, this.lengthPrefixBuffer = new Uint8Array(9)
      }
      connect(dd) {
        let Jd = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        const kd = Jd.fingerprint && {
          serverCertificateHashes: [{
            algorithm: "sha-256",
            value: new Uint8Array(Jd.fingerprint).buffer
          }]
        } || void 0;
        this.wt = new WebTransport(dd, kd), this.wt.ready.then((dd => {
          console.log("WebTransport ready!", dd), this.isOpen = !0, this.unreliableReader = this.wt.datagrams.readable.getReader(), this.unreliableWriter = this.wt.datagrams.writable.getWriter();
          this.wt.incomingBidirectionalStreams.getReader().read().then((dd => {
            this.reader = dd.value.readable.getReader(), this.writer = dd.value.writable.getWriter(), this.sendSeatReservation(Jd.room.roomId, Jd.sessionId, Jd.reconnectionToken), this.readIncomingData(), this.readIncomingUnreliableData()
          })).catch((dd => {
            console.error("failed to read incoming stream", dd), console.error("TODO: close the connection")
          }))
        })).catch((dd => {
          console.log("WebTransport not ready!", dd), this._close()
        })), this.wt.closed.then((dd => {
          console.log("WebTransport closed w/ success", dd), this.events.onclose({
            code: dd.closeCode,
            reason: dd.reason
          })
        })).catch((dd => {
          console.log("WebTransport closed w/ error", dd), this.events.onerror(dd), this.events.onclose({
            code: dd.closeCode,
            reason: dd.reason
          })
        })).finally((() => {
          this._close()
        }))
      }
      send(dd) {
        const Jd = Nd.encode.number(this.lengthPrefixBuffer, dd.length, {
            offset: 0
          }),
          kd = new Uint8Array(Jd + dd.length);
        kd.set(this.lengthPrefixBuffer.subarray(0, Jd), 0), kd.set(dd, Jd), this.writer.write(kd)
      }
      sendUnreliable(dd) {
        const Jd = Nd.encode.number(this.lengthPrefixBuffer, dd.length, {
            offset: 0
          }),
          kd = new Uint8Array(Jd + dd.length);
        kd.set(this.lengthPrefixBuffer.subarray(0, Jd), 0), kd.set(dd, Jd), this.unreliableWriter.write(kd)
      }
      close(dd, Jd) {
        try {
          this.wt.close({
            closeCode: dd,
            reason: Jd
          })
        } catch (kd) {
          console.error(kd)
        }
      }
      readIncomingData() {
        return pd.__awaiter(this, void 0, void 0, (function*() {
          let dd;
          for (; this.isOpen;) {
            try {
              dd = yield this.reader.read();
              const Jd = dd.value,
                kd = {
                  offset: 0
                };
              do {
                const dd = Nd.decode.number(Jd, kd);
                this.events.onmessage({
                  data: Jd.subarray(kd.offset, kd.offset + dd)
                }), kd.offset += dd
              } while (kd.offset < Jd.length)
            } catch (Jd) {
              -1 === Jd.message.indexOf("session is closed") && console.error("H3Transport: failed to read incoming data", Jd);
              break
            }
            if (dd.done) break
          }
        }))
      }
      readIncomingUnreliableData() {
        return pd.__awaiter(this, void 0, void 0, (function*() {
          let dd;
          for (; this.isOpen;) {
            try {
              dd = yield this.unreliableReader.read();
              const Jd = dd.value,
                kd = {
                  offset: 0
                };
              do {
                const dd = Nd.decode.number(Jd, kd);
                this.events.onmessage({
                  data: Jd.subarray(kd.offset, kd.offset + dd)
                }), kd.offset += dd
              } while (kd.offset < Jd.length)
            } catch (Jd) {
              -1 === Jd.message.indexOf("session is closed") && console.error("H3Transport: failed to read incoming data", Jd);
              break
            }
            if (dd.done) break
          }
        }))
      }
      sendSeatReservation(dd, Jd, kd) {
        const pd = {
            offset: 0
          },
          Wd = [];
        Nd.encode.string(Wd, dd, pd), Nd.encode.string(Wd, Jd, pd), kd && Nd.encode.string(Wd, kd, pd), this.writer.write(new Uint8Array(Wd).buffer)
      }
      _close() {
        this.isOpen = !1
      }
    }
  },
  9015: (dd, Jd, kd) => {
    var pd = kd(9017);
    const Nd = globalThis.WebSocket || pd;
    Jd.WebSocketTransport = class {
      constructor(dd) {
        this.events = dd
      }
      send(dd) {
        this.ws.send(dd)
      }
      sendUnreliable(dd) {
        console.warn("colyseus.js: The WebSocket transport does not support unreliable messages")
      }
      connect(dd, Jd) {
        try {
          this.ws = new Nd(dd, {
            headers: Jd,
            protocols: this.protocols
          })
        } catch (kd) {
          this.ws = new Nd(dd, this.protocols)
        }
        this.ws.binaryType = "arraybuffer", this.ws.onopen = this.events.onopen, this.ws.onmessage = this.events.onmessage, this.ws.onclose = this.events.onclose, this.ws.onerror = this.events.onerror
      }
      close(dd, Jd) {
        this.ws.close(dd, Jd)
      }
      get isOpen() {
        return this.ws.readyState === Nd.OPEN
      }
    }
  },
  9017: dd => {
    dd.exports = function() {
      throw new Error("ws does not work in the browser. Browser clients must use the native WebSocket object")
    }
  },
  9065: (dd, Jd, kd) => {
    function pd(dd, Jd) {
      Jd.headers = dd.headers || {}, Jd.statusMessage = dd.statusText, Jd.statusCode = dd.status, Jd.data = dd.response
    }

    function Nd(dd, Jd, kd) {
      return new Promise((function(Nd, Wd) {
        kd = kd || {};
        var Pd, Zd, gd, Cd = new XMLHttpRequest,
          Kd = kd.body,
          od = kd.headers || {};
        for (Pd in kd.timeout && (Cd.timeout = kd.timeout), Cd.ontimeout = Cd.onerror = function(dd) {
            dd.timeout = "timeout" == dd.type, Wd(dd)
          }, Cd.onabort = function(dd) {
            dd.aborted = !0, Wd(dd)
          }, Cd.open(dd, Jd.href || Jd), Cd.onload = function() {
            for (gd = Cd.getAllResponseHeaders().trim().split(/[\r\n]+/), pd(Cd, Cd); Zd = gd.shift();) Zd = Zd.split(": "), Cd.headers[Zd.shift().toLowerCase()] = Zd.join(": ");
            if ((Zd = Cd.headers["content-type"]) && ~Zd.indexOf("application/json")) try {
              Cd.data = JSON.parse(Cd.data, kd.reviver)
            } catch (dd) {
              return pd(Cd, dd), Wd(dd)
            }(Cd.status >= 400 ? Wd : Nd)(Cd)
          }, typeof FormData < "u" && Kd instanceof FormData || Kd && "object" == typeof Kd && (od["content-type"] = "application/json", Kd = JSON.stringify(Kd)), Cd.withCredentials = !!kd.withCredentials, od) Cd.setRequestHeader(Pd, od[Pd]);
        Cd.send(Kd), kd.signal && kd.signal.addEventListener("abort", (function() {
          Cd.abort()
        }))
      }))
    }
    kd.r(Jd), kd.d(Jd, {
      del: () => gd,
      get: () => Wd,
      patch: () => Zd,
      post: () => Pd,
      put: () => Cd,
      send: () => Nd
    });
    var Wd = Nd.bind(Nd, "GET"),
      Pd = Nd.bind(Nd, "POST"),
      Zd = Nd.bind(Nd, "PATCH"),
      gd = Nd.bind(Nd, "DELETE"),
      Cd = Nd.bind(Nd, "PUT")
  },
  9058: (dd, Jd, kd) => {
    var pd, Nd, Wd;
    kd.r(Jd), kd.d(Jd, {
      ALWAYS: () => tJ,
      C1: () => xd,
      DECIMAL_FIT: () => zJ,
      DECIMAL_ROUND: () => VJ,
      Decoder: () => CJ,
      Encoder: () => rJ,
      FLOAT32_OPTIONS: () => LJ,
      NEVER: () => uJ,
      Packr: () => XJ,
      RESERVE_START_SPACE: () => AJ,
      RESET_BUFFER_MODE: () => wJ,
      REUSE_BUFFER_MODE: () => HJ,
      Unpackr: () => Fd,
      addExtension: () => DJ,
      clearSource: () => ZJ,
      decode: () => QJ,
      decodeIter: () => dk,
      encode: () => hJ,
      encodeIter: () => Jk,
      isNativeAccelerationEnabled: () => Td,
      mapsAsObjects: () => pk,
      pack: () => cJ,
      roundFloat32: () => vJ,
      unpack: () => oJ,
      unpackMultiple: () => lJ,
      useRecords: () => kk
    });
    try {
      pd = new TextDecoder
    } catch (Nk) {}
    var Pd = 0;
    const Zd = [];
    var gd, Cd, Kd, od, ld, Qd = Zd,
      Ld = 0,
      Od = {},
      ed = 0,
      Rd = 0,
      Id = [],
      Gd = {
        useRecords: !1,
        mapsAsObjects: !0
      };
    class vd {}
    const xd = new vd;
    xd.name = "MessagePack 0xC1";
    var qd, Bd, sd, ad = !1,
      Md = 2;
    try {
      new Function("")
    } catch (Nk) {
      Md = 1 / 0
    }
    class Fd {
      constructor(dd) {
        dd && (!1 === dd.useRecords && void 0 === dd.mapsAsObjects && (dd.mapsAsObjects = !0), dd.sequential && !1 !== dd.trusted && (dd.trusted = !0, dd.structures || 0 == dd.useRecords || (dd.structures = [], dd.maxSharedStructures || (dd.maxSharedStructures = 0))), dd.structures ? dd.structures.sharedLength = dd.structures.length : dd.getStructures && ((dd.structures = []).uninitialized = !0, dd.structures.sharedLength = 0), dd.int64AsNumber && (dd.int64AsType = "number")), Object.assign(this, dd)
      }
      unpack(dd, Jd) {
        if (Nd) return PJ((() => (ZJ(), this ? this.unpack(dd, Jd) : Fd.prototype.unpack.call(Gd, dd, Jd))));
        dd.buffer || dd.constructor !== ArrayBuffer || (dd = "undefined" !== typeof Buffer ? Buffer.from(dd) : new Uint8Array(dd)), "object" === typeof Jd ? (Wd = Jd.end || dd.length, Pd = Jd.start || 0) : (Pd = 0, Wd = Jd > -1 ? Jd : dd.length), Ld = 0, Rd = 0, Cd = null, Qd = Zd, Kd = null, Nd = dd;
        try {
          ld = dd.dataView || (dd.dataView = new DataView(dd.buffer, dd.byteOffset, dd.byteLength))
        } catch (Nk) {
          if (Nd = null, dd instanceof Uint8Array) throw Nk;
          throw new Error("Source must be a Uint8Array or Buffer but was a " + (dd && "object" == typeof dd ? dd.constructor.name : typeof dd))
        }
        if (this instanceof Fd) {
          if (Od = this, this.structures) return gd = this.structures, Yd(Jd);
          (!gd || gd.length > 0) && (gd = [])
        } else Od = Gd, (!gd || gd.length > 0) && (gd = []);
        return Yd(Jd)
      }
      unpackMultiple(dd, Jd) {
        let kd, pd = 0;
        try {
          ad = !0;
          let Nd = dd.length,
            Wd = this ? this.unpack(dd, Nd) : KJ.unpack(dd, Nd);
          if (!Jd) {
            for (kd = [Wd]; Pd < Nd;) pd = Pd, kd.push(Yd());
            return kd
          }
          if (!1 === Jd(Wd, pd, Pd)) return;
          for (; Pd < Nd;)
            if (pd = Pd, !1 === Jd(Yd(), pd, Pd)) return
        } catch (Nk) {
          throw Nk.lastPosition = pd, Nk.values = kd, Nk
        } finally {
          ad = !1, ZJ()
        }
      }
      _mergeStructures(dd, Jd) {
        Bd && (dd = Bd.call(this, dd)), dd = dd || [], Object.isFrozen(dd) && (dd = dd.map((dd => dd.slice(0))));
        for (let kd = 0, pd = dd.length; kd < pd; kd++) {
          let Jd = dd[kd];
          Jd && (Jd.isShared = !0, kd >= 32 && (Jd.highByte = kd - 32 >> 5))
        }
        dd.sharedLength = dd.length;
        for (let kd in Jd || [])
          if (kd >= 0) {
            let pd = dd[kd],
              Nd = Jd[kd];
            Nd && (pd && ((dd.restoreStructures || (dd.restoreStructures = []))[kd] = pd), dd[kd] = Nd)
          } return this.structures = dd
      }
      decode(dd, Jd) {
        return this.unpack(dd, Jd)
      }
    }

    function Yd(dd) {
      try {
        if (!Od.trusted && !ad) {
          let dd = gd.sharedLength || 0;
          dd < gd.length && (gd.length = dd)
        }
        let Jd;
        if (Od.randomAccessStructure && Nd[Pd] < 64 && Nd[Pd] >= 32 && qd ? (Jd = qd(Nd, Pd, Wd, Od), Nd = null, dd && dd.lazy || !Jd || (Jd = Jd.toJSON()), Pd = Wd) : Jd = bd(), Kd && (Pd = Kd.postBundlePosition, Kd = null), ad && (gd.restoreStructures = null), Pd == Wd) gd && gd.restoreStructures && md(), gd = null, Nd = null, od && (od = null);
        else {
          if (Pd > Wd) throw new Error("Unexpected end of MessagePack data");
          if (!ad) {
            let dd;
            try {
              dd = JSON.stringify(Jd, ((dd, Jd) => "bigint" === typeof Jd ? `${Jd}n` : Jd)).slice(0, 100)
            } catch (Nk) {
              dd = "(JSON view not available " + Nk + ")"
            }
            throw new Error("Data read, but end of buffer not reached " + dd)
          }
        }
        return Jd
      } catch (Nk) {
        throw gd && gd.restoreStructures && md(), ZJ(), (Nk instanceof RangeError || Nk.message.startsWith("Unexpected end of buffer") || Pd > Wd) && (Nk.incomplete = !0), Nk
      }
    }

    function md() {
      for (let dd in gd.restoreStructures) gd[dd] = gd.restoreStructures[dd];
      gd.restoreStructures = null
    }

    function bd() {
      let dd = Nd[Pd++];
      if (dd < 160) {
        if (dd < 128) {
          if (dd < 64) return dd;
          {
            let Jd = gd[63 & dd] || Od.getStructures && fd()[63 & dd];
            return Jd ? (Jd.read || (Jd.read = jd(Jd, 63 & dd)), Jd.read()) : dd
          }
        }
        if (dd < 144) {
          if (dd -= 128, Od.mapsAsObjects) {
            let Jd = {};
            for (let kd = 0; kd < dd; kd++) {
              let dd = Ad();
              "__proto__" === dd && (dd = "__proto_"), Jd[dd] = bd()
            }
            return Jd
          } {
            let Jd = new Map;
            for (let kd = 0; kd < dd; kd++) Jd.set(bd(), bd());
            return Jd
          }
        } {
          dd -= 144;
          let Jd = new Array(dd);
          for (let kd = 0; kd < dd; kd++) Jd[kd] = bd();
          return Od.freezeData ? Object.freeze(Jd) : Jd
        }
      }
      if (dd < 192) {
        let Jd = dd - 160;
        if (Rd >= Pd) return Cd.slice(Pd - ed, (Pd += Jd) - ed);
        if (0 == Rd && Wd < 140) {
          let dd = Jd < 16 ? td(Jd) : ud(Jd);
          if (null != dd) return dd
        }
        return nd(Jd)
      } {
        let Jd;
        switch (dd) {
          case 192:
            return null;
          case 193:
            return Kd ? (Jd = bd(), Jd > 0 ? Kd[1].slice(Kd.position1, Kd.position1 += Jd) : Kd[0].slice(Kd.position0, Kd.position0 -= Jd)) : xd;
          case 194:
            return !1;
          case 195:
            return !0;
          case 196:
            if (Jd = Nd[Pd++], void 0 === Jd) throw new Error("Unexpected end of buffer");
            return zd(Jd);
          case 197:
            return Jd = ld.getUint16(Pd), Pd += 2, zd(Jd);
          case 198:
            return Jd = ld.getUint32(Pd), Pd += 4, zd(Jd);
          case 199:
            return Hd(Nd[Pd++]);
          case 200:
            return Jd = ld.getUint16(Pd), Pd += 2, Hd(Jd);
          case 201:
            return Jd = ld.getUint32(Pd), Pd += 4, Hd(Jd);
          case 202:
            if (Jd = ld.getFloat32(Pd), Od.useFloat32 > 2) {
              let dd = gJ[(127 & Nd[Pd]) << 1 | Nd[Pd + 1] >> 7];
              return Pd += 4, (dd * Jd + (Jd > 0 ? .5 : -.5) | 0) / dd
            }
            return Pd += 4, Jd;
          case 203:
            return Jd = ld.getFloat64(Pd), Pd += 8, Jd;
          case 204:
            return Nd[Pd++];
          case 205:
            return Jd = ld.getUint16(Pd), Pd += 2, Jd;
          case 206:
            return Jd = ld.getUint32(Pd), Pd += 4, Jd;
          case 207:
            return "number" === Od.int64AsType ? (Jd = 4294967296 * ld.getUint32(Pd), Jd += ld.getUint32(Pd + 4)) : "string" === Od.int64AsType ? Jd = ld.getBigUint64(Pd).toString() : "auto" === Od.int64AsType ? (Jd = ld.getBigUint64(Pd), Jd <= BigInt(2) << BigInt(52) && (Jd = Number(Jd))) : Jd = ld.getBigUint64(Pd), Pd += 8, Jd;
          case 208:
            return ld.getInt8(Pd++);
          case 209:
            return Jd = ld.getInt16(Pd), Pd += 2, Jd;
          case 210:
            return Jd = ld.getInt32(Pd), Pd += 4, Jd;
          case 211:
            return "number" === Od.int64AsType ? (Jd = 4294967296 * ld.getInt32(Pd), Jd += ld.getUint32(Pd + 4)) : "string" === Od.int64AsType ? Jd = ld.getBigInt64(Pd).toString() : "auto" === Od.int64AsType ? (Jd = ld.getBigInt64(Pd), Jd >= BigInt(-2) << BigInt(52) && Jd <= BigInt(2) << BigInt(52) && (Jd = Number(Jd))) : Jd = ld.getBigInt64(Pd), Pd += 8, Jd;
          case 212:
            if (Jd = Nd[Pd++], 114 == Jd) return JJ(63 & Nd[Pd++]);
            {
              let dd = Id[Jd];
              if (dd) return dd.read ? (Pd++, dd.read(bd())) : dd.noBuffer ? (Pd++, dd()) : dd(Nd.subarray(Pd, ++Pd));
              throw new Error("Unknown extension " + Jd)
            }
          case 213:
            return Jd = Nd[Pd], 114 == Jd ? (Pd++, JJ(63 & Nd[Pd++], Nd[Pd++])) : Hd(2);
          case 214:
            return Hd(4);
          case 215:
            return Hd(8);
          case 216:
            return Hd(16);
          case 217:
            return Jd = Nd[Pd++], Rd >= Pd ? Cd.slice(Pd - ed, (Pd += Jd) - ed) : Ud(Jd);
          case 218:
            return Jd = ld.getUint16(Pd), Rd >= (Pd += 2) ? Cd.slice(Pd - ed, (Pd += Jd) - ed) : yd(Jd);
          case 219:
            return Jd = ld.getUint32(Pd), Rd >= (Pd += 4) ? Cd.slice(Pd - ed, (Pd += Jd) - ed) : Dd(Jd);
          case 220:
            return Jd = ld.getUint16(Pd), Pd += 2, cd(Jd);
          case 221:
            return Jd = ld.getUint32(Pd), Pd += 4, cd(Jd);
          case 222:
            return Jd = ld.getUint16(Pd), Pd += 2, hd(Jd);
          case 223:
            return Jd = ld.getUint32(Pd), Pd += 4, hd(Jd);
          default:
            if (dd >= 224) return dd - 256;
            if (void 0 === dd) {
              let dd = new Error("Unexpected end of MessagePack data");
              throw dd.incomplete = !0, dd
            }
            throw new Error("Unknown MessagePack token " + dd)
        }
      }
    }
    const Sd = /^[a-zA-Z_$][a-zA-Z\d_$]*$/;

    function jd(dd, Jd) {
      function kd() {
        if (kd.count++ > Md) {
          let kd = dd.read = new Function("r", "return function(){return " + (Od.freezeData ? "Object.freeze" : "") + "({" + dd.map((dd => "__proto__" === dd ? "__proto_:r()" : Sd.test(dd) ? dd + ":r()" : "[" + JSON.stringify(dd) + "]:r()")).join(",") + "})}")(bd);
          return 0 === dd.highByte && (dd.read = Xd(Jd, dd.read)), kd()
        }
        let pd = {};
        for (let Jd = 0, kd = dd.length; Jd < kd; Jd++) {
          let kd = dd[Jd];
          "__proto__" === kd && (kd = "__proto_"), pd[kd] = bd()
        }
        return Od.freezeData ? Object.freeze(pd) : pd
      }
      return kd.count = 0, 0 === dd.highByte ? Xd(Jd, kd) : kd
    }
    const Xd = (dd, Jd) => function() {
      let kd = Nd[Pd++];
      if (0 === kd) return Jd();
      let pd = dd < 32 ? -(dd + (kd << 5)) : dd + (kd << 5),
        Wd = gd[pd] || fd()[pd];
      if (!Wd) throw new Error("Record id is not defined for " + pd);
      return Wd.read || (Wd.read = jd(Wd, dd)), Wd.read()
    };

    function fd() {
      let dd = PJ((() => (Nd = null, Od.getStructures())));
      return gd = Od._mergeStructures(dd, gd)
    }
    var nd = Ed,
      Ud = Ed,
      yd = Ed,
      Dd = Ed;
    let Td = !1;

    function Ed(dd) {
      let Jd;
      if (dd < 16 && (Jd = td(dd))) return Jd;
      if (dd > 64 && pd) return pd.decode(Nd.subarray(Pd, Pd += dd));
      const kd = Pd + dd,
        Wd = [];
      for (Jd = ""; Pd < kd;) {
        const dd = Nd[Pd++];
        if (0 === (128 & dd)) Wd.push(dd);
        else if (192 === (224 & dd)) {
          const Jd = 63 & Nd[Pd++];
          Wd.push((31 & dd) << 6 | Jd)
        } else if (224 === (240 & dd)) {
          const Jd = 63 & Nd[Pd++],
            kd = 63 & Nd[Pd++];
          Wd.push((31 & dd) << 12 | Jd << 6 | kd)
        } else if (240 === (248 & dd)) {
          let Jd = (7 & dd) << 18 | (63 & Nd[Pd++]) << 12 | (63 & Nd[Pd++]) << 6 | 63 & Nd[Pd++];
          Jd > 65535 && (Jd -= 65536, Wd.push(Jd >>> 10 & 1023 | 55296), Jd = 56320 | 1023 & Jd), Wd.push(Jd)
        } else Wd.push(dd);
        Wd.length >= 4096 && (Jd += rd.apply(String, Wd), Wd.length = 0)
      }
      return Wd.length > 0 && (Jd += rd.apply(String, Wd)), Jd
    }

    function cd(dd) {
      let Jd = new Array(dd);
      for (let kd = 0; kd < dd; kd++) Jd[kd] = bd();
      return Od.freezeData ? Object.freeze(Jd) : Jd
    }

    function hd(dd) {
      if (Od.mapsAsObjects) {
        let Jd = {};
        for (let kd = 0; kd < dd; kd++) {
          let dd = Ad();
          "__proto__" === dd && (dd = "__proto_"), Jd[dd] = bd()
        }
        return Jd
      } {
        let Jd = new Map;
        for (let kd = 0; kd < dd; kd++) Jd.set(bd(), bd());
        return Jd
      }
    }
    var rd = String.fromCharCode;

    function ud(dd) {
      let Jd = Pd,
        kd = new Array(dd);
      for (let pd = 0; pd < dd; pd++) {
        const dd = Nd[Pd++];
        if ((128 & dd) > 0) return void(Pd = Jd);
        kd[pd] = dd
      }
      return rd.apply(String, kd)
    }

    function td(dd) {
      if (dd < 4) {
        if (dd < 2) {
          if (0 === dd) return "";
          {
            let dd = Nd[Pd++];
            return (128 & dd) > 1 ? void(Pd -= 1) : rd(dd)
          }
        } {
          let Jd = Nd[Pd++],
            kd = Nd[Pd++];
          if ((128 & Jd) > 0 || (128 & kd) > 0) return void(Pd -= 2);
          if (dd < 3) return rd(Jd, kd);
          let pd = Nd[Pd++];
          return (128 & pd) > 0 ? void(Pd -= 3) : rd(Jd, kd, pd)
        }
      } {
        let Jd = Nd[Pd++],
          kd = Nd[Pd++],
          pd = Nd[Pd++],
          Wd = Nd[Pd++];
        if ((128 & Jd) > 0 || (128 & kd) > 0 || (128 & pd) > 0 || (128 & Wd) > 0) return void(Pd -= 4);
        if (dd < 6) {
          if (4 === dd) return rd(Jd, kd, pd, Wd);
          {
            let dd = Nd[Pd++];
            return (128 & dd) > 0 ? void(Pd -= 5) : rd(Jd, kd, pd, Wd, dd)
          }
        }
        if (dd < 8) {
          let Zd = Nd[Pd++],
            gd = Nd[Pd++];
          if ((128 & Zd) > 0 || (128 & gd) > 0) return void(Pd -= 6);
          if (dd < 7) return rd(Jd, kd, pd, Wd, Zd, gd);
          let Cd = Nd[Pd++];
          return (128 & Cd) > 0 ? void(Pd -= 7) : rd(Jd, kd, pd, Wd, Zd, gd, Cd)
        } {
          let Zd = Nd[Pd++],
            gd = Nd[Pd++],
            Cd = Nd[Pd++],
            Kd = Nd[Pd++];
          if ((128 & Zd) > 0 || (128 & gd) > 0 || (128 & Cd) > 0 || (128 & Kd) > 0) return void(Pd -= 8);
          if (dd < 10) {
            if (8 === dd) return rd(Jd, kd, pd, Wd, Zd, gd, Cd, Kd);
            {
              let dd = Nd[Pd++];
              return (128 & dd) > 0 ? void(Pd -= 9) : rd(Jd, kd, pd, Wd, Zd, gd, Cd, Kd, dd)
            }
          }
          if (dd < 12) {
            let od = Nd[Pd++],
              ld = Nd[Pd++];
            if ((128 & od) > 0 || (128 & ld) > 0) return void(Pd -= 10);
            if (dd < 11) return rd(Jd, kd, pd, Wd, Zd, gd, Cd, Kd, od, ld);
            let Qd = Nd[Pd++];
            return (128 & Qd) > 0 ? void(Pd -= 11) : rd(Jd, kd, pd, Wd, Zd, gd, Cd, Kd, od, ld, Qd)
          } {
            let od = Nd[Pd++],
              ld = Nd[Pd++],
              Qd = Nd[Pd++],
              Ld = Nd[Pd++];
            if ((128 & od) > 0 || (128 & ld) > 0 || (128 & Qd) > 0 || (128 & Ld) > 0) return void(Pd -= 12);
            if (dd < 14) {
              if (12 === dd) return rd(Jd, kd, pd, Wd, Zd, gd, Cd, Kd, od, ld, Qd, Ld);
              {
                let dd = Nd[Pd++];
                return (128 & dd) > 0 ? void(Pd -= 13) : rd(Jd, kd, pd, Wd, Zd, gd, Cd, Kd, od, ld, Qd, Ld, dd)
              }
            } {
              let Od = Nd[Pd++],
                ed = Nd[Pd++];
              if ((128 & Od) > 0 || (128 & ed) > 0) return void(Pd -= 14);
              if (dd < 15) return rd(Jd, kd, pd, Wd, Zd, gd, Cd, Kd, od, ld, Qd, Ld, Od, ed);
              let Rd = Nd[Pd++];
              return (128 & Rd) > 0 ? void(Pd -= 15) : rd(Jd, kd, pd, Wd, Zd, gd, Cd, Kd, od, ld, Qd, Ld, Od, ed, Rd)
            }
          }
        }
      }
    }

    function Vd() {
      let dd, Jd = Nd[Pd++];
      if (Jd < 192) dd = Jd - 160;
      else switch (Jd) {
        case 217:
          dd = Nd[Pd++];
          break;
        case 218:
          dd = ld.getUint16(Pd), Pd += 2;
          break;
        case 219:
          dd = ld.getUint32(Pd), Pd += 4;
          break;
        default:
          throw new Error("Expected string")
      }
      return Ed(dd)
    }

    function zd(dd) {
      return Od.copyBuffers ? Uint8Array.prototype.slice.call(Nd, Pd, Pd += dd) : Nd.subarray(Pd, Pd += dd)
    }

    function Hd(dd) {
      let Jd = Nd[Pd++];
      if (Id[Jd]) {
        let kd;
        return Id[Jd](Nd.subarray(Pd, kd = Pd += dd), (dd => {
          Pd = dd;
          try {
            return bd()
          } finally {
            Pd = kd
          }
        }))
      }
      throw new Error("Unknown extension type " + Jd)
    }
    var wd = new Array(4096);

    function Ad() {
      let dd = Nd[Pd++];
      if (!(dd >= 160 && dd < 192)) return Pd--, dJ(bd());
      if (dd -= 160, Rd >= Pd) return Cd.slice(Pd - ed, (Pd += dd) - ed);
      if (!(0 == Rd && Wd < 180)) return nd(dd);
      let Jd, kd = 4095 & (dd << 5 ^ (dd > 1 ? ld.getUint16(Pd) : dd > 0 ? Nd[Pd] : 0)),
        pd = wd[kd],
        Zd = Pd,
        gd = Pd + dd - 3,
        Kd = 0;
      if (pd && pd.bytes == dd) {
        for (; Zd < gd;) {
          if (Jd = ld.getUint32(Zd), Jd != pd[Kd++]) {
            Zd = 1879048192;
            break
          }
          Zd += 4
        }
        for (gd += 3; Zd < gd;)
          if (Jd = Nd[Zd++], Jd != pd[Kd++]) {
            Zd = 1879048192;
            break
          } if (Zd === gd) return Pd = Zd, pd.string;
        gd -= 3, Zd = Pd
      }
      for (pd = [], wd[kd] = pd, pd.bytes = dd; Zd < gd;) Jd = ld.getUint32(Zd), pd.push(Jd), Zd += 4;
      for (gd += 3; Zd < gd;) Jd = Nd[Zd++], pd.push(Jd);
      let od = dd < 16 ? td(dd) : ud(dd);
      return pd.string = null != od ? od : nd(dd)
    }

    function dJ(dd) {
      if ("string" === typeof dd) return dd;
      if ("number" === typeof dd || "boolean" === typeof dd || "bigint" === typeof dd) return dd.toString();
      if (null == dd) return dd + "";
      if (Od.allowArraysInMapKeys && Array.isArray(dd) && dd.flat().every((dd => ["string", "number", "boolean", "bigint"].includes(typeof dd)))) return dd.flat().toString();
      throw new Error("Invalid property type for record: " + typeof dd)
    }
    const JJ = (dd, Jd) => {
      let kd = bd().map(dJ),
        pd = dd;
      void 0 !== Jd && (dd = dd < 32 ? -((Jd << 5) + dd) : (Jd << 5) + dd, kd.highByte = Jd);
      let Nd = gd[dd];
      return Nd && (Nd.isShared || ad) && ((gd.restoreStructures || (gd.restoreStructures = []))[dd] = Nd), gd[dd] = kd, kd.read = jd(kd, pd), kd.read()
    };
    Id[0] = () => {}, Id[0].noBuffer = !0, Id[66] = dd => {
      let Jd = dd.length,
        kd = BigInt(128 & dd[0] ? dd[0] - 256 : dd[0]);
      for (let pd = 1; pd < Jd; pd++) kd <<= BigInt(8), kd += BigInt(dd[pd]);
      return kd
    };
    let kJ = {
      Error: Error,
      TypeError: TypeError,
      ReferenceError: ReferenceError
    };
    Id[101] = () => {
      let dd = bd();
      return (kJ[dd[0]] || Error)(dd[1], {
        cause: dd[2]
      })
    }, Id[105] = dd => {
      if (!1 === Od.structuredClone) throw new Error("Structured clone extension is disabled");
      let Jd = ld.getUint32(Pd - 4);
      od || (od = new Map);
      let kd, pd = Nd[Pd];
      kd = pd >= 144 && pd < 160 || 220 == pd || 221 == pd ? [] : {};
      let Wd = {
        target: kd
      };
      od.set(Jd, Wd);
      let Zd = bd();
      return Wd.used ? Object.assign(kd, Zd) : (Wd.target = Zd, Zd)
    }, Id[112] = dd => {
      if (!1 === Od.structuredClone) throw new Error("Structured clone extension is disabled");
      let Jd = ld.getUint32(Pd - 4),
        kd = od.get(Jd);
      return kd.used = !0, kd.target
    }, Id[115] = () => new Set(bd());
    const pJ = ["Int8", "Uint8", "Uint8Clamped", "Int16", "Uint16", "Int32", "Uint32", "Float32", "Float64", "BigInt64", "BigUint64"].map((dd => dd + "Array"));
    let NJ = "object" === typeof globalThis ? globalThis : window;
    Id[116] = dd => {
      let Jd = dd[0],
        kd = pJ[Jd];
      if (!kd) {
        if (16 === Jd) {
          let Jd = new ArrayBuffer(dd.length - 1);
          return new Uint8Array(Jd).set(dd.subarray(1)), Jd
        }
        throw new Error("Could not find typed array for code " + Jd)
      }
      return new NJ[kd](Uint8Array.prototype.slice.call(dd, 1).buffer)
    }, Id[120] = () => {
      let dd = bd();
      return new RegExp(dd[0], dd[1])
    };
    const WJ = [];

    function PJ(dd) {
      sd && sd();
      let Jd = Wd,
        kd = Pd,
        pd = Ld,
        Zd = ed,
        Id = Rd,
        Gd = Cd,
        vd = Qd,
        xd = od,
        qd = Kd,
        Bd = new Uint8Array(Nd.slice(0, Wd)),
        Md = gd,
        Fd = gd.slice(0, gd.length),
        Yd = Od,
        md = ad,
        bd = dd();
      return Wd = Jd, Pd = kd, Ld = pd, ed = Zd, Rd = Id, Cd = Gd, Qd = vd, od = xd, Kd = qd, Nd = Bd, ad = md, (gd = Md).splice(0, gd.length, ...Fd), Od = Yd, ld = new DataView(Nd.buffer, Nd.byteOffset, Nd.byteLength), bd
    }

    function ZJ() {
      Nd = null, od = null, gd = null
    }
    Id[98] = dd => {
      let Jd = (dd[0] << 24) + (dd[1] << 16) + (dd[2] << 8) + dd[3],
        kd = Pd;
      return Pd += Jd - dd.length, Kd = WJ, (Kd = [Vd(), Vd()]).position0 = 0, Kd.position1 = 0, Kd.postBundlePosition = Pd, Pd = kd, bd()
    }, Id[255] = dd => 4 == dd.length ? new Date(1e3 * (16777216 * dd[0] + (dd[1] << 16) + (dd[2] << 8) + dd[3])) : 8 == dd.length ? new Date(((dd[0] << 22) + (dd[1] << 14) + (dd[2] << 6) + (dd[3] >> 2)) / 1e6 + 1e3 * (4294967296 * (3 & dd[3]) + 16777216 * dd[4] + (dd[5] << 16) + (dd[6] << 8) + dd[7])) : 12 == dd.length ? new Date(((dd[0] << 24) + (dd[1] << 16) + (dd[2] << 8) + dd[3]) / 1e6 + 1e3 * ((128 & dd[4] ? -281474976710656 : 0) + 1099511627776 * dd[6] + 4294967296 * dd[7] + 16777216 * dd[8] + (dd[9] << 16) + (dd[10] << 8) + dd[11])) : new Date("invalid");
    const gJ = new Array(147);
    for (let Wk = 0; Wk < 256; Wk++) gJ[Wk] = +("1e" + Math.floor(45.15 - .30103 * Wk));
    const CJ = Fd;
    var KJ = new Fd({
      useRecords: !1
    });
    const oJ = KJ.unpack,
      lJ = KJ.unpackMultiple,
      QJ = KJ.unpack,
      LJ = {
        NEVER: 0,
        ALWAYS: 1,
        DECIMAL_ROUND: 3,
        DECIMAL_FIT: 4
      };
    let OJ, eJ, RJ, IJ = new Float32Array(1),
      GJ = new Uint8Array(IJ.buffer, 0, 4);

    function vJ(dd) {
      IJ[0] = dd;
      let Jd = gJ[(127 & GJ[3]) << 1 | GJ[2] >> 7];
      return (Jd * dd + (dd > 0 ? .5 : -.5) | 0) / Jd
    }
    try {
      OJ = new TextEncoder
    } catch (Nk) {}
    const xJ = "undefined" !== typeof Buffer,
      qJ = xJ ? function(dd) {
        return Buffer.allocUnsafeSlow(dd)
      } : Uint8Array,
      BJ = xJ ? Buffer : Uint8Array,
      sJ = xJ ? 4294967296 : 2144337920;
    let iJ, aJ, MJ, FJ, YJ, mJ = 0,
      bJ = null;
    const SJ = /[\u0080-\uFFFF]/,
      jJ = Symbol("record-id");
    class XJ extends Fd {
      constructor(dd) {
        let Jd, kd, pd, Nd;
        super(dd), this.offset = 0;
        let Wd = BJ.prototype.utf8Write ? function(dd, Jd) {
            return iJ.utf8Write(dd, Jd, iJ.byteLength - Jd)
          } : !(!OJ || !OJ.encodeInto) && function(dd, Jd) {
            return OJ.encodeInto(dd, iJ.subarray(Jd)).written
          },
          Pd = this;
        dd || (dd = {});
        let Zd = dd && dd.sequential,
          gd = dd.structures || dd.saveStructures,
          Cd = dd.maxSharedStructures;
        if (null == Cd && (Cd = gd ? 32 : 0), Cd > 8160) throw new Error("Maximum maxSharedStructure is 8160");
        dd.structuredClone && void 0 == dd.moreTypes && (this.moreTypes = !0);
        let Kd = dd.maxOwnStructures;
        null == Kd && (Kd = gd ? 32 : 64), this.structures || 0 == dd.useRecords || (this.structures = []);
        let od = Cd > 32 || Kd + Cd > 64,
          ld = Cd + 64,
          Qd = Cd + Kd + 64;
        if (Qd > 8256) throw new Error("Maximum maxSharedStructure + maxOwnStructure is 8192");
        let Ld = [],
          Od = 0,
          ed = 0;
        this.pack = this.encode = function(dd, Wd) {
          if (iJ || (iJ = new qJ(8192), MJ = iJ.dataView || (iJ.dataView = new DataView(iJ.buffer, 0, 8192)), mJ = 0), FJ = iJ.length - 10, FJ - mJ < 2048 ? (iJ = new qJ(iJ.length), MJ = iJ.dataView || (iJ.dataView = new DataView(iJ.buffer, 0, iJ.length)), FJ = iJ.length - 10, mJ = 0) : mJ = mJ + 7 & 2147483640, Jd = mJ, Wd & AJ && (mJ += 255 & Wd), Nd = Pd.structuredClone ? new Map : null, Pd.bundleStrings && "string" !== typeof dd ? (bJ = [], bJ.size = 1 / 0) : bJ = null, pd = Pd.structures, pd) {
            pd.uninitialized && (pd = Pd._mergeStructures(Pd.getStructures()));
            let dd = pd.sharedLength || 0;
            if (dd > Cd) throw new Error("Shared structures is larger than maximum shared structures, try increasing maxSharedStructures to " + pd.sharedLength);
            if (!pd.transitions) {
              pd.transitions = Object.create(null);
              for (let Jd = 0; Jd < dd; Jd++) {
                let dd = pd[Jd];
                if (!dd) continue;
                let kd, Nd = pd.transitions;
                for (let Jd = 0, pd = dd.length; Jd < pd; Jd++) {
                  let pd = dd[Jd];
                  kd = Nd[pd], kd || (kd = Nd[pd] = Object.create(null)), Nd = kd
                }
                Nd[jJ] = Jd + 64
              }
              this.lastNamedStructuresLength = dd
            }
            Zd || (pd.nextId = dd + 64)
          }
          let gd;
          kd && (kd = !1);
          try {
            Pd.randomAccessStructure && dd && dd.constructor && dd.constructor === Object ? Fd(dd) : Gd(dd);
            let kd = bJ;
            if (bJ && yJ(Jd, Gd, 0), Nd && Nd.idsToInsert) {
              let dd = Nd.idsToInsert.sort(((dd, Jd) => dd.offset > Jd.offset ? 1 : -1)),
                pd = dd.length,
                Wd = -1;
              for (; kd && pd > 0;) {
                let Nd = dd[--pd].offset + Jd;
                Nd < kd.stringsPosition + Jd && -1 === Wd && (Wd = 0), Nd > kd.position + Jd ? Wd >= 0 && (Wd += 6) : (Wd >= 0 && (MJ.setUint32(kd.position + Jd, MJ.getUint32(kd.position + Jd) + Wd), Wd = -1), kd = kd.previous, pd++)
              }
              Wd >= 0 && kd && MJ.setUint32(kd.position + Jd, MJ.getUint32(kd.position + Jd) + Wd), mJ += 6 * dd.length, mJ > FJ && sd(mJ), Pd.offset = mJ;
              let Zd = function(dd, Jd) {
                let kd, pd = 6 * Jd.length,
                  Nd = dd.length - pd;
                for (; kd = Jd.pop();) {
                  let Jd = kd.offset,
                    Wd = kd.id;
                  dd.copyWithin(Jd + pd, Jd, Nd), pd -= 6;
                  let Pd = Jd + pd;
                  dd[Pd++] = 214, dd[Pd++] = 105, dd[Pd++] = Wd >> 24, dd[Pd++] = Wd >> 16 & 255, dd[Pd++] = Wd >> 8 & 255, dd[Pd++] = 255 & Wd, Nd = Jd
                }
                return dd
              }(iJ.subarray(Jd, mJ), dd);
              return Nd = null, Zd
            }
            return Pd.offset = mJ, Wd & HJ ? (iJ.start = Jd, iJ.end = mJ, iJ) : iJ.subarray(Jd, mJ)
          } catch (Nk) {
            throw gd = Nk, Nk
          } finally {
            if (pd && (Rd(), kd && Pd.saveStructures)) {
              let kd = pd.sharedLength || 0,
                Nd = iJ.subarray(Jd, mJ),
                Zd = TJ(pd, Pd);
              if (!gd) return !1 === Pd.saveStructures(Zd, Zd.isCompatible) ? Pd.pack(dd, Wd) : (Pd.lastNamedStructuresLength = kd, iJ.length > 1073741824 && (iJ = null), Nd)
            }
            iJ.length > 1073741824 && (iJ = null), Wd & wJ && (mJ = Jd)
          }
        };
        const Rd = () => {
            ed < 10 && ed++;
            let dd = pd.sharedLength || 0;
            if (pd.length > dd && !Zd && (pd.length = dd), Od > 1e4) pd.transitions = null, ed = 0, Od = 0, Ld.length > 0 && (Ld = []);
            else if (Ld.length > 0 && !Zd) {
              for (let dd = 0, Jd = Ld.length; dd < Jd; dd++) Ld[dd][jJ] = 0;
              Ld = []
            }
          },
          Id = dd => {
            var Jd = dd.length;
            Jd < 16 ? iJ[mJ++] = 144 | Jd : Jd < 65536 ? (iJ[mJ++] = 220, iJ[mJ++] = Jd >> 8, iJ[mJ++] = 255 & Jd) : (iJ[mJ++] = 221, MJ.setUint32(mJ, Jd), mJ += 4);
            for (let kd = 0; kd < Jd; kd++) Gd(dd[kd])
          },
          Gd = dd => {
            mJ > FJ && (iJ = sd(mJ));
            var kd, pd = typeof dd;
            if ("string" === pd) {
              let pd, Nd = dd.length;
              if (bJ && Nd >= 4 && Nd < 4096) {
                if ((bJ.size += Nd) > 21760) {
                  let dd, kd, pd = (bJ[0] ? 3 * bJ[0].length + bJ[1].length : 0) + 10;
                  mJ + pd > FJ && (iJ = sd(mJ + pd)), bJ.position ? (kd = bJ, iJ[mJ] = 200, mJ += 3, iJ[mJ++] = 98, dd = mJ - Jd, mJ += 4, yJ(Jd, Gd, 0), MJ.setUint16(dd + Jd - 3, mJ - Jd - dd)) : (iJ[mJ++] = 214, iJ[mJ++] = 98, dd = mJ - Jd, mJ += 4), bJ = ["", ""], bJ.previous = kd, bJ.size = 0, bJ.position = dd
                }
                let kd = SJ.test(dd);
                return bJ[kd ? 0 : 1] += dd, iJ[mJ++] = 193, void Gd(kd ? -Nd : Nd)
              }
              pd = Nd < 32 ? 1 : Nd < 256 ? 2 : Nd < 65536 ? 3 : 5;
              let Pd = 3 * Nd;
              if (mJ + Pd > FJ && (iJ = sd(mJ + Pd)), Nd < 64 || !Wd) {
                let Jd, Wd, Pd, Zd = mJ + pd;
                for (Jd = 0; Jd < Nd; Jd++) Wd = dd.charCodeAt(Jd), Wd < 128 ? iJ[Zd++] = Wd : Wd < 2048 ? (iJ[Zd++] = Wd >> 6 | 192, iJ[Zd++] = 63 & Wd | 128) : 55296 === (64512 & Wd) && 56320 === (64512 & (Pd = dd.charCodeAt(Jd + 1))) ? (Wd = 65536 + ((1023 & Wd) << 10) + (1023 & Pd), Jd++, iJ[Zd++] = Wd >> 18 | 240, iJ[Zd++] = Wd >> 12 & 63 | 128, iJ[Zd++] = Wd >> 6 & 63 | 128, iJ[Zd++] = 63 & Wd | 128) : (iJ[Zd++] = Wd >> 12 | 224, iJ[Zd++] = Wd >> 6 & 63 | 128, iJ[Zd++] = 63 & Wd | 128);
                kd = Zd - mJ - pd
              } else kd = Wd(dd, mJ + pd);
              kd < 32 ? iJ[mJ++] = 160 | kd : kd < 256 ? (pd < 2 && iJ.copyWithin(mJ + 2, mJ + 1, mJ + 1 + kd), iJ[mJ++] = 217, iJ[mJ++] = kd) : kd < 65536 ? (pd < 3 && iJ.copyWithin(mJ + 3, mJ + 2, mJ + 2 + kd), iJ[mJ++] = 218, iJ[mJ++] = kd >> 8, iJ[mJ++] = 255 & kd) : (pd < 5 && iJ.copyWithin(mJ + 5, mJ + 3, mJ + 3 + kd), iJ[mJ++] = 219, MJ.setUint32(mJ, kd), mJ += 4), mJ += kd
            } else if ("number" === pd)
              if (dd >>> 0 === dd) dd < 32 || dd < 128 && !1 === this.useRecords || dd < 64 && !this.randomAccessStructure ? iJ[mJ++] = dd : dd < 256 ? (iJ[mJ++] = 204, iJ[mJ++] = dd) : dd < 65536 ? (iJ[mJ++] = 205, iJ[mJ++] = dd >> 8, iJ[mJ++] = 255 & dd) : (iJ[mJ++] = 206, MJ.setUint32(mJ, dd), mJ += 4);
              else if ((dd | 0) === dd) dd >= -32 ? iJ[mJ++] = 256 + dd : dd >= -128 ? (iJ[mJ++] = 208, iJ[mJ++] = dd + 256) : dd >= -32768 ? (iJ[mJ++] = 209, MJ.setInt16(mJ, dd), mJ += 2) : (iJ[mJ++] = 210, MJ.setInt32(mJ, dd), mJ += 4);
            else {
              let Jd;
              if ((Jd = this.useFloat32) > 0 && dd < 4294967296 && dd >= -2147483648) {
                let kd;
                if (iJ[mJ++] = 202, MJ.setFloat32(mJ, dd), Jd < 4 || ((kd = dd * gJ[(127 & iJ[mJ]) << 1 | iJ[mJ + 1] >> 7]) | 0) === kd) return void(mJ += 4);
                mJ--
              }
              iJ[mJ++] = 203, MJ.setFloat64(mJ, dd), mJ += 8
            } else if ("object" === pd || "function" === pd)
              if (dd) {
                if (Nd) {
                  let kd = Nd.get(dd);
                  if (kd) {
                    if (!kd.id) {
                      let dd = Nd.idsToInsert || (Nd.idsToInsert = []);
                      kd.id = dd.push(kd)
                    }
                    return iJ[mJ++] = 214, iJ[mJ++] = 112, MJ.setUint32(mJ, kd.id), void(mJ += 4)
                  }
                  Nd.set(dd, {
                    offset: mJ - Jd
                  })
                }
                let Wd = dd.constructor;
                if (Wd === Object) Bd(dd);
                else if (Wd === Array) Id(dd);
                else if (Wd === Map)
                  if (this.mapAsEmptyObject) iJ[mJ++] = 128;
                  else {
                    (kd = dd.size) < 16 ? iJ[mJ++] = 128 | kd : kd < 65536 ? (iJ[mJ++] = 222, iJ[mJ++] = kd >> 8, iJ[mJ++] = 255 & kd) : (iJ[mJ++] = 223, MJ.setUint32(mJ, kd), mJ += 4);
                    for (let [Jd, kd] of dd) Gd(Jd), Gd(kd)
                  }
                else {
                  for (let Jd = 0, kd = eJ.length; Jd < kd; Jd++) {
                    if (dd instanceof RJ[Jd]) {
                      let kd = eJ[Jd];
                      if (kd.write) {
                        kd.type && (iJ[mJ++] = 212, iJ[mJ++] = kd.type, iJ[mJ++] = 0);
                        let Jd = kd.write.call(this, dd);
                        return void(Jd === dd ? Array.isArray(dd) ? Id(dd) : Bd(dd) : Gd(Jd))
                      }
                      let pd, Nd = iJ,
                        Wd = MJ,
                        Pd = mJ;
                      iJ = null;
                      try {
                        pd = kd.pack.call(this, dd, (dd => (iJ = Nd, Nd = null, mJ += dd, mJ > FJ && sd(mJ), {
                          target: iJ,
                          targetView: MJ,
                          position: mJ - dd
                        })), Gd)
                      } finally {
                        Nd && (iJ = Nd, MJ = Wd, mJ = Pd, FJ = iJ.length - 10)
                      }
                      return void(pd && (pd.length + mJ > FJ && sd(pd.length + mJ), mJ = UJ(pd, iJ, mJ, kd.type)))
                    }
                  }
                  if (Array.isArray(dd)) Id(dd);
                  else {
                    if (dd.toJSON) {
                      const Jd = dd.toJSON();
                      if (Jd !== dd) return Gd(Jd)
                    }
                    if ("function" === pd) return Gd(this.writeFunction && this.writeFunction(dd));
                    Bd(dd)
                  }
                }
              } else iJ[mJ++] = 192;
            else if ("boolean" === pd) iJ[mJ++] = dd ? 195 : 194;
            else if ("bigint" === pd) {
              if (dd < BigInt(1) << BigInt(63) && dd >= -(BigInt(1) << BigInt(63))) iJ[mJ++] = 211, MJ.setBigInt64(mJ, dd);
              else if (dd < BigInt(1) << BigInt(64) && dd > 0) iJ[mJ++] = 207, MJ.setBigUint64(mJ, dd);
              else {
                if (!this.largeBigIntToFloat) {
                  if (this.largeBigIntToString) return Gd(dd.toString());
                  if (this.useBigIntExtension && dd < BigInt(2) ** BigInt(1023) && dd > -(BigInt(2) ** BigInt(1023))) {
                    iJ[mJ++] = 199, mJ++, iJ[mJ++] = 66;
                    let Jd, kd = [];
                    do {
                      let pd = dd & BigInt(255);
                      Jd = (pd & BigInt(128)) === (dd < BigInt(0) ? BigInt(128) : BigInt(0)), kd.push(pd), dd >>= BigInt(8)
                    } while (dd !== BigInt(0) && dd !== BigInt(-1) || !Jd);
                    iJ[mJ - 2] = kd.length;
                    for (let dd = kd.length; dd > 0;) iJ[mJ++] = Number(kd[--dd]);
                    return
                  }
                  throw new RangeError(dd + " was too large to fit in MessagePack 64-bit integer format, use useBigIntExtension, or set largeBigIntToFloat to convert to float-64, or set largeBigIntToString to convert to string")
                }
                iJ[mJ++] = 203, MJ.setFloat64(mJ, Number(dd))
              }
              mJ += 8
            } else {
              if ("undefined" !== pd) throw new Error("Unknown type: " + pd);
              this.encodeUndefinedAsNil ? iJ[mJ++] = 192 : (iJ[mJ++] = 212, iJ[mJ++] = 0, iJ[mJ++] = 0)
            }
          },
          vd = this.variableMapSize || this.coercibleKeyAsNumber || this.skipValues ? dd => {
            let Jd;
            if (this.skipValues) {
              Jd = [];
              for (let kd in dd) "function" === typeof dd.hasOwnProperty && !dd.hasOwnProperty(kd) || this.skipValues.includes(dd[kd]) || Jd.push(kd)
            } else Jd = Object.keys(dd);
            let kd, pd = Jd.length;
            if (pd < 16 ? iJ[mJ++] = 128 | pd : pd < 65536 ? (iJ[mJ++] = 222, iJ[mJ++] = pd >> 8, iJ[mJ++] = 255 & pd) : (iJ[mJ++] = 223, MJ.setUint32(mJ, pd), mJ += 4), this.coercibleKeyAsNumber)
              for (let Nd = 0; Nd < pd; Nd++) {
                kd = Jd[Nd];
                let pd = Number(kd);
                Gd(isNaN(pd) ? kd : pd), Gd(dd[kd])
              } else
                for (let Nd = 0; Nd < pd; Nd++) Gd(kd = Jd[Nd]), Gd(dd[kd])
          } : dd => {
            iJ[mJ++] = 222;
            let kd = mJ - Jd;
            mJ += 2;
            let pd = 0;
            for (let Jd in dd)("function" !== typeof dd.hasOwnProperty || dd.hasOwnProperty(Jd)) && (Gd(Jd), Gd(dd[Jd]), pd++);
            if (pd > 65535) throw new Error('Object is too large to serialize with fast 16-bit map size, use the "variableMapSize" option to serialize this object');
            iJ[kd++ + Jd] = pd >> 8, iJ[kd + Jd] = 255 & pd
          },
          xd = !1 === this.useRecords ? vd : dd.progressiveRecords && !od ? dd => {
            let kd, Nd, Wd = pd.transitions || (pd.transitions = Object.create(null)),
              Pd = mJ++ - Jd;
            for (let Zd in dd)
              if ("function" !== typeof dd.hasOwnProperty || dd.hasOwnProperty(Zd)) {
                if (kd = Wd[Zd], kd) Wd = kd;
                else {
                  let gd = Object.keys(dd),
                    Cd = Wd;
                  Wd = pd.transitions;
                  let Kd = 0;
                  for (let dd = 0, Jd = gd.length; dd < Jd; dd++) {
                    let Jd = gd[dd];
                    kd = Wd[Jd], kd || (kd = Wd[Jd] = Object.create(null), Kd++), Wd = kd
                  }
                  Pd + Jd + 1 == mJ ? (mJ--, ad(Wd, gd, Kd)) : Md(Wd, gd, Pd, Kd), Nd = !0, Wd = Cd[Zd]
                }
                Gd(dd[Zd])
              } if (!Nd) {
              let kd = Wd[jJ];
              kd ? iJ[Pd + Jd] = kd : Md(Wd, Object.keys(dd), Pd, 0)
            }
          } : dd => {
            let Jd, kd = pd.transitions || (pd.transitions = Object.create(null)),
              Nd = 0;
            for (let pd in dd)("function" !== typeof dd.hasOwnProperty || dd.hasOwnProperty(pd)) && (Jd = kd[pd], Jd || (Jd = kd[pd] = Object.create(null), Nd++), kd = Jd);
            let Wd = kd[jJ];
            Wd ? Wd >= 96 && od ? (iJ[mJ++] = 96 + (31 & (Wd -= 96)), iJ[mJ++] = Wd >> 5) : iJ[mJ++] = Wd : ad(kd, kd.__keys__ || Object.keys(dd), Nd);
            for (let pd in dd)("function" !== typeof dd.hasOwnProperty || dd.hasOwnProperty(pd)) && Gd(dd[pd])
          },
          qd = "function" == typeof this.useRecords && this.useRecords,
          Bd = qd ? dd => {
            qd(dd) ? xd(dd) : vd(dd)
          } : xd,
          sd = dd => {
            let kd;
            if (dd > 16777216) {
              if (dd - Jd > sJ) throw new Error("Packed buffer would be larger than maximum buffer size");
              kd = Math.min(sJ, 4096 * Math.round(Math.max((dd - Jd) * (dd > 67108864 ? 1.25 : 2), 4194304) / 4096))
            } else kd = 1 + (Math.max(dd - Jd << 2, iJ.length - 1) >> 12) << 12;
            let pd = new qJ(kd);
            return MJ = pd.dataView || (pd.dataView = new DataView(pd.buffer, 0, kd)), dd = Math.min(dd, iJ.length), iJ.copy ? iJ.copy(pd, 0, Jd, dd) : pd.set(iJ.slice(Jd, dd)), mJ -= Jd, Jd = 0, FJ = pd.length - 10, iJ = pd
          },
          ad = (dd, Jd, Nd) => {
            let Wd = pd.nextId;
            Wd || (Wd = 64), Wd < ld && this.shouldShareStructure && !this.shouldShareStructure(Jd) ? (Wd = pd.nextOwnId, Wd < Qd || (Wd = ld), pd.nextOwnId = Wd + 1) : (Wd >= Qd && (Wd = ld), pd.nextId = Wd + 1);
            let Pd = Jd.highByte = Wd >= 96 && od ? Wd - 96 >> 5 : -1;
            dd[jJ] = Wd, dd.__keys__ = Jd, pd[Wd - 64] = Jd, Wd < ld ? (Jd.isShared = !0, pd.sharedLength = Wd - 63, kd = !0, Pd >= 0 ? (iJ[mJ++] = 96 + (31 & Wd), iJ[mJ++] = Pd) : iJ[mJ++] = Wd) : (Pd >= 0 ? (iJ[mJ++] = 213, iJ[mJ++] = 114, iJ[mJ++] = 96 + (31 & Wd), iJ[mJ++] = Pd) : (iJ[mJ++] = 212, iJ[mJ++] = 114, iJ[mJ++] = Wd), Nd && (Od += ed * Nd), Ld.length >= Kd && (Ld.shift()[jJ] = 0), Ld.push(dd), Gd(Jd))
          },
          Md = (dd, kd, pd, Nd) => {
            let Wd = iJ,
              Pd = mJ,
              Zd = FJ,
              gd = Jd;
            iJ = aJ, mJ = 0, Jd = 0, iJ || (aJ = iJ = new qJ(8192)), FJ = iJ.length - 10, ad(dd, kd, Nd), aJ = iJ;
            let Cd = mJ;
            if (iJ = Wd, mJ = Pd, FJ = Zd, Jd = gd, Cd > 1) {
              let dd = mJ + Cd - 1;
              dd > FJ && sd(dd);
              let kd = pd + Jd;
              iJ.copyWithin(kd + Cd, kd + 1, mJ), iJ.set(aJ.slice(0, Cd), kd), mJ = dd
            } else iJ[pd + Jd] = aJ[0]
          },
          Fd = dd => {
            let Nd = YJ(dd, iJ, Jd, mJ, pd, sd, ((dd, Jd, pd) => {
              if (pd) return kd = !0;
              mJ = Jd;
              let Nd = iJ;
              return Gd(dd), Rd(), Nd !== iJ ? {
                position: mJ,
                targetView: MJ,
                target: iJ
              } : mJ
            }), this);
            if (0 === Nd) return Bd(dd);
            mJ = Nd
          }
      }
      useBuffer(dd) {
        iJ = dd, MJ = iJ.dataView || (iJ.dataView = new DataView(iJ.buffer, iJ.byteOffset, iJ.byteLength)), mJ = 0
      }
      set position(dd) {
        mJ = dd
      }
      get position() {
        return mJ
      }
      set buffer(dd) {
        iJ = dd
      }
      get buffer() {
        return iJ
      }
      clearSharedData() {
        this.structures && (this.structures = []), this.typedStructs && (this.typedStructs = [])
      }
    }

    function fJ(dd, Jd, kd, pd) {
      let Nd = dd.byteLength;
      if (Nd + 1 < 256) {
        var {
          target: Wd,
          position: Pd
        } = kd(4 + Nd);
        Wd[Pd++] = 199, Wd[Pd++] = Nd + 1
      } else if (Nd + 1 < 65536) {
        var {
          target: Wd,
          position: Pd
        } = kd(5 + Nd);
        Wd[Pd++] = 200, Wd[Pd++] = Nd + 1 >> 8, Wd[Pd++] = Nd + 1 & 255
      } else {
        var {
          target: Wd,
          position: Pd,
          targetView: Zd
        } = kd(7 + Nd);
        Wd[Pd++] = 201, Zd.setUint32(Pd, Nd + 1), Pd += 4
      }
      Wd[Pd++] = 116, Wd[Pd++] = Jd, dd.buffer || (dd = new Uint8Array(dd)), Wd.set(new Uint8Array(dd.buffer, dd.byteOffset, dd.byteLength), Pd)
    }

    function nJ(dd, Jd) {
      let kd = dd.byteLength;
      var pd, Nd;
      if (kd < 256) {
        var {
          target: pd,
          position: Nd
        } = Jd(kd + 2);
        pd[Nd++] = 196, pd[Nd++] = kd
      } else if (kd < 65536) {
        var {
          target: pd,
          position: Nd
        } = Jd(kd + 3);
        pd[Nd++] = 197, pd[Nd++] = kd >> 8, pd[Nd++] = 255 & kd
      } else {
        var {
          target: pd,
          position: Nd,
          targetView: Wd
        } = Jd(kd + 5);
        pd[Nd++] = 198, Wd.setUint32(Nd, kd), Nd += 4
      }
      pd.set(dd, Nd)
    }

    function UJ(dd, Jd, kd, pd) {
      let Nd = dd.length;
      switch (Nd) {
        case 1:
          Jd[kd++] = 212;
          break;
        case 2:
          Jd[kd++] = 213;
          break;
        case 4:
          Jd[kd++] = 214;
          break;
        case 8:
          Jd[kd++] = 215;
          break;
        case 16:
          Jd[kd++] = 216;
          break;
        default:
          Nd < 256 ? (Jd[kd++] = 199, Jd[kd++] = Nd) : Nd < 65536 ? (Jd[kd++] = 200, Jd[kd++] = Nd >> 8, Jd[kd++] = 255 & Nd) : (Jd[kd++] = 201, Jd[kd++] = Nd >> 24, Jd[kd++] = Nd >> 16 & 255, Jd[kd++] = Nd >> 8 & 255, Jd[kd++] = 255 & Nd)
      }
      return Jd[kd++] = pd, Jd.set(dd, kd), kd += Nd
    }

    function yJ(dd, Jd, kd) {
      if (bJ.length > 0) {
        MJ.setUint32(bJ.position + dd, mJ + kd - bJ.position - dd), bJ.stringsPosition = mJ - dd;
        let pd = bJ;
        bJ = null, Jd(pd[0]), Jd(pd[1])
      }
    }

    function DJ(dd) {
      if (dd.Class) {
        if (!dd.pack && !dd.write) throw new Error("Extension has no pack or write function");
        if (dd.pack && !dd.type) throw new Error("Extension has no type (numeric code to identify the extension)");
        RJ.unshift(dd.Class), eJ.unshift(dd)
      }! function(dd) {
        dd.unpack ? Id[dd.type] = dd.unpack : Id[dd.type] = dd
      }(dd)
    }

    function TJ(dd, Jd) {
      return dd.isCompatible = dd => {
        let kd = !dd || (Jd.lastNamedStructuresLength || 0) === dd.length;
        return kd || Jd._mergeStructures(dd), kd
      }, dd
    }
    RJ = [Date, Set, Error, RegExp, ArrayBuffer, Object.getPrototypeOf(Uint8Array.prototype).constructor, vd], eJ = [{
      pack(dd, Jd, kd) {
        let pd = dd.getTime() / 1e3;
        if ((this.useTimestamp32 || 0 === dd.getMilliseconds()) && pd >= 0 && pd < 4294967296) {
          let {
            target: dd,
            targetView: kd,
            position: Nd
          } = Jd(6);
          dd[Nd++] = 214, dd[Nd++] = 255, kd.setUint32(Nd, pd)
        } else if (pd > 0 && pd < 4294967296) {
          let {
            target: kd,
            targetView: Nd,
            position: Wd
          } = Jd(10);
          kd[Wd++] = 215, kd[Wd++] = 255, Nd.setUint32(Wd, 4e6 * dd.getMilliseconds() + (pd / 1e3 / 4294967296 | 0)), Nd.setUint32(Wd + 4, pd)
        } else if (isNaN(pd)) {
          if (this.onInvalidDate) return Jd(0), kd(this.onInvalidDate());
          let {
            target: dd,
            targetView: pd,
            position: Nd
          } = Jd(3);
          dd[Nd++] = 212, dd[Nd++] = 255, dd[Nd++] = 255
        } else {
          let {
            target: kd,
            targetView: Nd,
            position: Wd
          } = Jd(15);
          kd[Wd++] = 199, kd[Wd++] = 12, kd[Wd++] = 255, Nd.setUint32(Wd, 1e6 * dd.getMilliseconds()), Nd.setBigInt64(Wd + 4, BigInt(Math.floor(pd)))
        }
      }
    }, {
      pack(dd, Jd, kd) {
        if (this.setAsEmptyObject) return Jd(0), kd({});
        let pd = Array.from(dd),
          {
            target: Nd,
            position: Wd
          } = Jd(this.moreTypes ? 3 : 0);
        this.moreTypes && (Nd[Wd++] = 212, Nd[Wd++] = 115, Nd[Wd++] = 0), kd(pd)
      }
    }, {
      pack(dd, Jd, kd) {
        let {
          target: pd,
          position: Nd
        } = Jd(this.moreTypes ? 3 : 0);
        this.moreTypes && (pd[Nd++] = 212, pd[Nd++] = 101, pd[Nd++] = 0), kd([dd.name, dd.message, dd.cause])
      }
    }, {
      pack(dd, Jd, kd) {
        let {
          target: pd,
          position: Nd
        } = Jd(this.moreTypes ? 3 : 0);
        this.moreTypes && (pd[Nd++] = 212, pd[Nd++] = 120, pd[Nd++] = 0), kd([dd.source, dd.flags])
      }
    }, {
      pack(dd, Jd) {
        this.moreTypes ? fJ(dd, 16, Jd) : nJ(xJ ? Buffer.from(dd) : new Uint8Array(dd), Jd)
      }
    }, {
      pack(dd, Jd) {
        let kd = dd.constructor;
        kd !== BJ && this.moreTypes ? fJ(dd, pJ.indexOf(kd.name), Jd) : nJ(dd, Jd)
      }
    }, {
      pack(dd, Jd) {
        let {
          target: kd,
          position: pd
        } = Jd(1);
        kd[pd] = 193
      }
    }];
    let EJ = new XJ({
      useRecords: !1
    });
    const cJ = EJ.pack,
      hJ = EJ.pack,
      rJ = XJ,
      {
        NEVER: uJ,
        ALWAYS: tJ,
        DECIMAL_ROUND: VJ,
        DECIMAL_FIT: zJ
      } = LJ,
      HJ = 512,
      wJ = 1024,
      AJ = 2048;
    const dk = function(dd) {
        let Jd = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        if (!dd || "object" !== typeof dd) throw new Error("first argument must be an Iterable, Async Iterable, Iterator, Async Iterator, or a promise");
        const kd = new Fd(Jd);
        let pd;
        const Nd = dd => {
          let Jd;
          pd && (dd = Buffer.concat([pd, dd]), pd = void 0);
          try {
            Jd = kd.unpackMultiple(dd)
          } catch (Nd) {
            if (!Nd.incomplete) throw Nd;
            pd = dd.slice(Nd.lastPosition), Jd = Nd.values
          }
          return Jd
        };
        return "function" === typeof dd[Symbol.iterator] ? function*() {
          for (const Jd of dd) yield* Nd(Jd)
        }() : "function" === typeof dd[Symbol.asyncIterator] ? async function*() {
          for await (const Jd of dd) yield* Nd(Jd)
        }(): void 0
      },
      Jk = function(dd) {
        let Jd = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        if (dd && "object" === typeof dd) {
          if ("function" === typeof dd[Symbol.iterator]) return function*(dd, Jd) {
            const kd = new XJ(Jd);
            for (const pd of dd) yield kd.pack(pd)
          }(dd, Jd);
          if ("function" === typeof dd.then || "function" === typeof dd[Symbol.asyncIterator]) return async function*(dd, Jd) {
            const kd = new XJ(Jd);
            for await (const pd of dd) yield kd.pack(pd)
          }(dd, Jd);
          throw new Error("first argument must be an Iterable, Async Iterable, Iterator, Async Iterator, or a Promise")
        }
        throw new Error("first argument must be an Iterable, Async Iterable, or a Promise for an Async Iterable")
      },
      kk = !1,
      pk = !0
  },
  9009: (dd, Jd, kd) => {
    kd.r(Jd), kd.d(Jd, {
      $changes: () => Od,
      $childType: () => ed,
      $decoder: () => Kd,
      $deleteByIndex: () => Qd,
      $encoder: () => Cd,
      $filter: () => od,
      $getByIndex: () => ld,
      $numFields: () => Md,
      $refId: () => Zd,
      $track: () => gd,
      $values: () => xd,
      ArraySchema: () => Np,
      Callbacks: () => WN,
      ChangeTree: () => bk,
      CollectionSchema: () => Zp,
      Decoder: () => Hp,
      Encoder: () => rp,
      FieldBuilder: () => Kp,
      MapSchema: () => Pp,
      Metadata: () => VJ,
      OPERATION: () => Nd,
      Reflection: () => JN,
      ReflectionField: () => Ap,
      ReflectionType: () => dN,
      Root: () => Sp,
      Schema: () => mp,
      SetSchema: () => gp,
      StateCallbackStrategy: () => NN,
      StateView: () => Up,
      StreamSchema: () => Cp,
      TypeContext: () => TJ,
      createPool: () => ZN,
      decode: () => vJ,
      decodeKeyValueOperation: () => wk,
      decodeSchemaOperation: () => Hk,
      defineCustomTypes: () => sJ,
      defineTypes: () => Mp,
      deprecated: () => ip,
      dumpChanges: () => Yp,
      encode: () => kJ,
      encodeArray: () => Dk,
      encodeIndexedEntry: () => Uk,
      encodeKeyValueOperation: () => yk,
      encodeMapEntry: () => nk,
      encodeSchemaOperation: () => fk,
      zQ: () => Rp,
      fullStateOnly: () => xp,
      getDecoderStateCallbacks: () => kN,
      getEncodeDescriptor: () => Jk,
      getRawChangesCallback: () => pN,
      isBuilder: () => op,
      patchOnly: () => vp,
      registerType: () => BJ,
      schema: () => Fp,
      t: () => Op,
      type: () => qp,
      unreliable: () => Gp,
      view: () => Ip
    });
    const pd = 255;
    var Nd;

    function Wd(dd) {
      Object.defineProperty(dd, Symbol.metadata, {
        value: void 0,
        writable: !0,
        configurable: !0,
        enumerable: !1
      })
    }! function(dd) {
      dd[dd.ADD = 128] = "ADD", dd[dd.REPLACE = 0] = "REPLACE", dd[dd.DELETE = 64] = "DELETE", dd[dd.DELETE_AND_MOVE = 96] = "DELETE_AND_MOVE", dd[dd.MOVE_AND_ADD = 160] = "MOVE_AND_ADD", dd[dd.DELETE_AND_ADD = 192] = "DELETE_AND_ADD", dd[dd.CLEAR = 10] = "CLEAR", dd[dd.REVERSE = 15] = "REVERSE", dd[dd.MOVE = 32] = "MOVE", dd[dd.DELETE_BY_REFID = 33] = "DELETE_BY_REFID", dd[dd.ADD_BY_REFID = 129] = "ADD_BY_REFID"
    }(Nd || (Nd = {})), Symbol.metadata ??= Symbol.for("Symbol.metadata");
    const Pd = "undefined" !== typeof globalThis ? globalThis : "undefined" !== typeof global ? global : "undefined" !== typeof self ? self : "undefined" !== typeof window ? window : {};
    if ("function" === typeof Symbol && "function" !== typeof Symbol.for) {
      const dd = "colyseus.symbolRegistry",
        Jd = Pd[dd] || (Pd[dd] = Object.create(null));
      Symbol.for = function(dd) {
        return Jd[dd] || (Jd[dd] = Symbol(dd))
      }, Symbol.keyFor = function(dd) {
        for (const kd in Jd)
          if (Jd[kd] === dd) return kd
      }
    }
    const Zd = Symbol.for("$refId"),
      gd = "~track",
      Cd = "~encoder",
      Kd = "~decoder",
      od = "~filter",
      ld = "~getByIndex",
      Qd = "~deleteByIndex",
      Ld = "~resyncPrune",
      Od = Symbol.for("$changes"),
      ed = Symbol.for("$childType"),
      Rd = Symbol.for("$proxyTarget"),
      Id = "~onEncodeEnd",
      Gd = "~reset",
      vd = "~onDecodeEnd",
      xd = Symbol.for("$values"),
      qd = "~builder",
      Bd = "~descriptors",
      sd = "~__encodeDescriptor",
      ad = "~encoders",
      Md = "~__numFields",
      Fd = "~__refTypeFieldIndexes",
      Yd = "~__viewFieldIndexes",
      md = "$__fieldIndexesByViewTag",
      bd = "~__unreliableFieldIndexes",
      Sd = "~__patchOnlyFieldIndexes",
      jd = "~__fullSyncSkipIndexes",
      Xd = "~__fullStateOnlyFieldIndexes",
      fd = "~__streamFieldIndexes",
      nd = "~__streamPriorities";
    let Ud;
    try {
      Ud = new TextEncoder
    } catch (gN) {}
    const yd = new ArrayBuffer(8),
      Dd = new Int32Array(yd),
      Td = new Float32Array(yd),
      Ed = new Float64Array(yd),
      cd = new BigInt64Array(yd),
      hd = "undefined" !== typeof Buffer && Buffer.byteLength ? Buffer.byteLength : function(dd, Jd) {
        for (var kd = 0, pd = 0, Nd = 0, Wd = dd.length; Nd < Wd; Nd++)(kd = dd.charCodeAt(Nd)) < 128 ? pd += 1 : kd < 2048 ? pd += 2 : kd < 55296 || kd >= 57344 ? pd += 3 : (Nd++, pd += 4);
        return pd
      };

    function rd(dd, Jd, kd) {
      for (var pd = 0, Nd = 0, Wd = Jd.length; Nd < Wd; Nd++)(pd = Jd.charCodeAt(Nd)) < 128 ? dd[kd.offset++] = pd : pd < 2048 ? (dd[kd.offset] = 192 | pd >> 6, dd[kd.offset + 1] = 128 | 63 & pd, kd.offset += 2) : pd < 55296 || pd >= 57344 ? (dd[kd.offset] = 224 | pd >> 12, dd[kd.offset + 1] = 128 | pd >> 6 & 63, dd[kd.offset + 2] = 128 | 63 & pd, kd.offset += 3) : (Nd++, pd = 65536 + ((1023 & pd) << 10 | 1023 & Jd.charCodeAt(Nd)), dd[kd.offset] = 240 | pd >> 18, dd[kd.offset + 1] = 128 | pd >> 12 & 63, dd[kd.offset + 2] = 128 | pd >> 6 & 63, dd[kd.offset + 3] = 128 | 63 & pd, kd.offset += 4)
    }

    function ud(dd, Jd, kd) {
      dd[kd.offset++] = 255 & Jd
    }

    function td(dd, Jd, kd) {
      dd[kd.offset++] = 255 & Jd, dd[kd.offset++] = Jd >> 8 & 255
    }

    function Vd(dd, Jd, kd) {
      dd[kd.offset++] = 255 & Jd, dd[kd.offset++] = Jd >> 8 & 255
    }

    function zd(dd, Jd, kd) {
      dd[kd.offset++] = 255 & Jd, dd[kd.offset++] = Jd >> 8 & 255, dd[kd.offset++] = Jd >> 16 & 255, dd[kd.offset++] = Jd >> 24 & 255
    }

    function Hd(dd, Jd, kd) {
      const pd = Jd >> 24,
        Nd = Jd >> 16,
        Wd = Jd >> 8,
        Pd = Jd;
      dd[kd.offset++] = 255 & Pd, dd[kd.offset++] = 255 & Wd, dd[kd.offset++] = 255 & Nd, dd[kd.offset++] = 255 & pd
    }

    function wd(dd, Jd, kd) {
      const pd = Math.floor(Jd / Math.pow(2, 32));
      Hd(dd, Jd >>> 0, kd), Hd(dd, pd, kd)
    }

    function Ad(dd, Jd, kd) {
      const pd = Jd / Math.pow(2, 32) | 0;
      Hd(dd, Jd >>> 0, kd), Hd(dd, pd, kd)
    }

    function dJ(dd, Jd, kd) {
      Td[0] = Jd, zd(dd, Dd[0], kd)
    }

    function JJ(dd, Jd, kd) {
      Ed[0] = Jd, zd(dd, Dd[0], kd), zd(dd, Dd[1], kd)
    }
    const kJ = {
        int8: ud,
        uint8: function(dd, Jd, kd) {
          dd[kd.offset++] = 255 & Jd
        },
        int16: td,
        uint16: Vd,
        int32: zd,
        uint32: Hd,
        int64: wd,
        uint64: Ad,
        bigint64: function(dd, Jd, kd) {
          cd[0] = BigInt.asIntN(64, Jd), zd(dd, Dd[0], kd), zd(dd, Dd[1], kd)
        },
        biguint64: function(dd, Jd, kd) {
          cd[0] = BigInt.asIntN(64, Jd), zd(dd, Dd[0], kd), zd(dd, Dd[1], kd)
        },
        float32: dJ,
        float64: JJ,
        boolean: function(dd, Jd, kd) {
          dd[kd.offset++] = Jd ? 1 : 0
        },
        string: function(dd, Jd, kd) {
          Jd || (Jd = "");
          let pd = hd(Jd, "utf8"),
            Nd = 0;
          if (pd < 32) dd[kd.offset++] = 160 | pd, Nd = 1;
          else if (pd < 256) dd[kd.offset++] = 217, dd[kd.offset++] = pd, Nd = 2;
          else if (pd < 65536) dd[kd.offset++] = 218, Vd(dd, pd, kd), Nd = 3;
          else {
            if (!(pd < 4294967296)) throw new Error("String too long");
            dd[kd.offset++] = 219, Hd(dd, pd, kd), Nd = 5
          }
          return rd(dd, Jd, kd), Nd + pd
        },
        number: function dd(Jd, kd, pd) {
          return isNaN(kd) ? dd(Jd, 0, pd) : isFinite(kd) ? kd !== (0 | kd) ? Math.abs(kd) <= 34028235e31 && (Td[0] = kd, Math.abs(Math.abs(Td[0]) - Math.abs(kd)) < 1e-4) ? (Jd[pd.offset++] = 202, dJ(Jd, kd, pd), 5) : (Jd[pd.offset++] = 203, JJ(Jd, kd, pd), 9) : kd >= 0 ? kd < 128 ? (Jd[pd.offset++] = 255 & kd, 1) : kd < 256 ? (Jd[pd.offset++] = 204, Jd[pd.offset++] = 255 & kd, 2) : kd < 65536 ? (Jd[pd.offset++] = 205, Vd(Jd, kd, pd), 3) : kd < 4294967296 ? (Jd[pd.offset++] = 206, Hd(Jd, kd, pd), 5) : (Jd[pd.offset++] = 207, Ad(Jd, kd, pd), 9) : kd >= -32 ? (Jd[pd.offset++] = 224 | kd + 32, 1) : kd >= -128 ? (Jd[pd.offset++] = 208, ud(Jd, kd, pd), 2) : kd >= -32768 ? (Jd[pd.offset++] = 209, td(Jd, kd, pd), 3) : kd >= -2147483648 ? (Jd[pd.offset++] = 210, zd(Jd, kd, pd), 5) : (Jd[pd.offset++] = 211, wd(Jd, kd, pd), 9) : dd(Jd, kd > 0 ? Number.MAX_SAFE_INTEGER : -Number.MAX_SAFE_INTEGER, pd)
        },
        utf8Write: rd,
        utf8Length: hd
      },
      pJ = new ArrayBuffer(8),
      NJ = new Int32Array(pJ),
      WJ = new Float32Array(pJ),
      PJ = new Float64Array(pJ),
      ZJ = new BigUint64Array(pJ),
      gJ = new BigInt64Array(pJ);

    function CJ(dd, Jd, kd) {
      kd > dd.length - Jd.offset && (kd = dd.length - Jd.offset);
      for (var pd = "", Nd = 0, Wd = Jd.offset, Pd = Jd.offset + kd; Wd < Pd; Wd++) {
        var Zd = dd[Wd];
        if (0 !== (128 & Zd))
          if (192 !== (224 & Zd))
            if (224 !== (240 & Zd)) {
              if (240 !== (248 & Zd)) {
                console.error("decode.utf8Read(): Invalid byte " + Zd + " at offset " + Wd + ". Skip to end of string: " + (Jd.offset + kd));
                break
              }(Nd = (7 & Zd) << 18 | (63 & dd[++Wd]) << 12 | (63 & dd[++Wd]) << 6 | 63 & dd[++Wd]) >= 65536 ? (Nd -= 65536, pd += String.fromCharCode(55296 + (Nd >>> 10), 56320 + (1023 & Nd))) : pd += String.fromCharCode(Nd)
            } else pd += String.fromCharCode((15 & Zd) << 12 | (63 & dd[++Wd]) << 6 | 63 & dd[++Wd]);
        else pd += String.fromCharCode((31 & Zd) << 6 | 63 & dd[++Wd]);
        else pd += String.fromCharCode(Zd)
      }
      return Jd.offset += kd, pd
    }

    function KJ(dd, Jd) {
      return oJ(dd, Jd) << 24 >> 24
    }

    function oJ(dd, Jd) {
      return dd[Jd.offset++]
    }

    function lJ(dd, Jd) {
      return QJ(dd, Jd) << 16 >> 16
    }

    function QJ(dd, Jd) {
      return dd[Jd.offset++] | dd[Jd.offset++] << 8
    }

    function LJ(dd, Jd) {
      return dd[Jd.offset++] | dd[Jd.offset++] << 8 | dd[Jd.offset++] << 16 | dd[Jd.offset++] << 24
    }

    function OJ(dd, Jd) {
      return LJ(dd, Jd) >>> 0
    }

    function eJ(dd, Jd) {
      return NJ[0] = LJ(dd, Jd), WJ[0]
    }

    function RJ(dd, Jd) {
      return NJ[0] = LJ(dd, Jd), NJ[1] = LJ(dd, Jd), PJ[0]
    }

    function IJ(dd, Jd) {
      const kd = OJ(dd, Jd);
      return LJ(dd, Jd) * Math.pow(2, 32) + kd
    }

    function GJ(dd, Jd) {
      const kd = OJ(dd, Jd);
      return OJ(dd, Jd) * Math.pow(2, 32) + kd
    }
    const vJ = {
        utf8Read: CJ,
        int8: KJ,
        uint8: oJ,
        int16: lJ,
        uint16: QJ,
        int32: LJ,
        uint32: OJ,
        float32: eJ,
        float64: RJ,
        int64: IJ,
        uint64: GJ,
        bigint64: function(dd, Jd) {
          return NJ[0] = LJ(dd, Jd), NJ[1] = LJ(dd, Jd), gJ[0]
        },
        biguint64: function(dd, Jd) {
          return NJ[0] = LJ(dd, Jd), NJ[1] = LJ(dd, Jd), ZJ[0]
        },
        boolean: function(dd, Jd) {
          return oJ(dd, Jd) > 0
        },
        string: function(dd, Jd) {
          const kd = dd[Jd.offset++];
          let pd;
          return kd < 192 ? pd = 31 & kd : 217 === kd ? pd = oJ(dd, Jd) : 218 === kd ? pd = QJ(dd, Jd) : 219 === kd && (pd = OJ(dd, Jd)), CJ(dd, Jd, pd)
        },
        number: function(dd, Jd) {
          const kd = dd[Jd.offset++];
          return kd < 128 ? kd : 202 === kd ? eJ(dd, Jd) : 203 === kd ? RJ(dd, Jd) : 204 === kd ? oJ(dd, Jd) : 205 === kd ? QJ(dd, Jd) : 206 === kd ? OJ(dd, Jd) : 207 === kd ? GJ(dd, Jd) : 208 === kd ? KJ(dd, Jd) : 209 === kd ? lJ(dd, Jd) : 210 === kd ? LJ(dd, Jd) : 211 === kd ? IJ(dd, Jd) : kd > 223 ? -1 * (255 - kd + 1) : void 0
        },
        stringCheck: function(dd, Jd) {
          const kd = dd[Jd.offset];
          return kd < 192 && kd > 160 || 217 === kd || 218 === kd || 219 === kd
        }
      },
      xJ = {},
      qJ = new Map;

    function BJ(dd, Jd) {
      Jd.constructor && (Object.prototype.hasOwnProperty.call(Jd, "constructor") && null == Jd.constructor[Symbol.metadata] && Wd(Jd.constructor), qJ.set(Jd.constructor, dd), xJ[dd] = Jd), Jd.encode && (kJ[dd] = Jd.encode), Jd.decode && (vJ[dd] = Jd.decode)
    }

    function sJ(dd) {
      for (const Jd in dd) BJ(Jd, dd[Jd]);
      return dd => qp(dd)
    }
    const iJ = "ArraySchema does not support streaming \u2014 positional ops (splice / unshift / reverse) shift subsequent indexes, so holding ADDs back for a later tick under `maxPerTick` would desync the decoder. Use `t.stream(X)` (stable monotonic positions) or `t.map(X).stream()` (stable keys) instead.";

    function aJ() {
      return {
        pendingByView: new Map,
        sentByView: new Map,
        broadcastPending: new Set,
        sentBroadcast: new Set,
        broadcastDeletes: new Set,
        maxPerTick: 32
      }
    }

    function MJ(dd) {
      return dd._stream ??= aJ()
    }

    function FJ(dd, Jd, kd) {
      0 === Jd.activeViews.size && MJ(dd).broadcastPending.add(kd)
    }

    function YJ(dd, Jd, kd, pd) {
      const Wd = dd._stream;
      if (void 0 === Wd) return !0;
      let Pd = !1;
      return Wd.broadcastPending.delete(pd) ? Pd = !0 : Wd.sentBroadcast.delete(pd) && Wd.broadcastDeletes.add(pd), Jd.forEachActiveView((dd => {
        const Jd = Wd.pendingByView.get(dd.id);
        if (Jd?.has(pd)) return Jd.delete(pd), void(Pd = !0);
        const Zd = Wd.sentByView.get(dd.id);
        if (Zd?.has(pd)) {
          Zd.delete(pd);
          let Jd = dd.changes.get(kd);
          void 0 === Jd && (Jd = new Map, dd.changes.set(kd, Jd)), Jd.set(pd, Nd.DELETE)
        }
      })), Pd
    }

    function mJ(dd, Jd) {
      const kd = dd._stream?.pendingByView;
      if (void 0 === kd) return !1;
      for (const [pd, Nd] of kd)
        if (Nd.size > 0 && void 0 !== Jd.activeViews.get(pd)?.deref()) return !0;
      return !1
    }

    function bJ(dd) {
      const Jd = dd._stream;
      return void 0 !== Jd && (Jd.broadcastPending.size > 0 || Jd.broadcastDeletes.size > 0)
    }

    function SJ(dd, Jd, kd) {
      const pd = MJ(dd);
      let Nd = pd.pendingByView.get(Jd);
      void 0 === Nd && (Nd = new Set, pd.pendingByView.set(Jd, Nd)), Nd.add(kd)
    }

    function jJ(dd, Jd) {
      const kd = dd._stream;
      void 0 !== kd && (kd.pendingByView.delete(Jd), kd.sentByView.delete(Jd), kd.priorityByView?.delete(Jd))
    }
    const XJ = {
      8: "uint8",
      16: "uint16",
      32: "uint32"
    };

    function fJ(dd) {
      if (null == dd || "object" !== typeof dd) throw new Error("t.quantized(): options object with { min, max } is required.");
      const {
        min: Jd,
        max: kd
      } = dd;
      if ("number" !== typeof Jd || "number" !== typeof kd || !(kd > Jd) || !Number.isFinite(Jd) || !Number.isFinite(kd)) throw new Error(`t.quantized(): require finite min < max (got min=${Jd}, max=${kd}).`);
      const pd = dd.bits ?? 16;
      if (8 !== pd && 16 !== pd && 32 !== pd) throw new Error(`t.quantized(): bits must be 8, 16 or 32 (got ${pd}).`);
      const Nd = dd.mode ?? "clamp";
      if ("clamp" !== Nd && "wrap" !== Nd) throw new Error(`t.quantized(): mode must be "clamp" or "wrap" (got ${JSON.stringify(Nd)}).`);
      const Wd = "wrap" === Nd,
        Pd = Math.pow(2, pd);
      return {
        min: Jd,
        max: kd,
        bits: pd,
        wrap: Wd,
        wire: XJ[pd],
        range: kd - Jd,
        span: Wd ? Pd : Jd === -kd ? Pd - 2 : Pd - 1
      }
    }

    function nJ(dd) {
      return null !== dd && "object" === typeof dd && void 0 !== dd.quantized
    }

    function UJ(dd, Jd) {
      if (dd.wrap) {
        if (!Number.isFinite(Jd)) return 0;
        const kd = dd.range;
        let pd = (Jd - dd.min) % kd;
        pd < 0 && (pd += kd);
        const Nd = dd.span;
        return Math.floor(pd / kd * Nd + .5) % Nd
      }
      if (Jd !== Jd) return 0;
      const kd = Jd < dd.min ? dd.min : Jd > dd.max ? dd.max : Jd;
      return Math.floor((kd - dd.min) / dd.range * dd.span + .5)
    }

    function yJ(dd, Jd) {
      return dd.min + Jd / dd.span * dd.range
    }

    function DJ(dd) {
      const Jd = kJ[dd.wire];
      return (kd, pd, Nd) => Jd(kd, UJ(dd, pd), Nd)
    }
    class TJ {
      types = {};
      schemas = new Map;
      hasFilters = !1;
      static inheritedTypes = new WeakMap;
      static cachedContexts = new WeakMap;
      static register(dd) {
        const Jd = Object.getPrototypeOf(dd);
        if (Jd !== mp) {
          let kd = TJ.inheritedTypes.get(Jd);
          kd || (kd = new Set, TJ.inheritedTypes.set(Jd, kd)), kd.add(dd)
        }
      }
      static cache(dd) {
        let Jd = TJ.cachedContexts.get(dd);
        return Jd || (Jd = new TJ(dd), TJ.cachedContexts.set(dd, Jd)), Jd
      }
      constructor(dd) {
        dd && this.discoverTypes(dd)
      }
      has(dd) {
        return this.schemas.has(dd)
      }
      get(dd) {
        return this.types[dd]
      }
      add(dd) {
        let Jd = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.schemas.size;
        return !this.schemas.has(dd) && (this.types[Jd] = dd, null == dd[Symbol.metadata] && VJ.initialize(dd), this.schemas.set(dd, Jd), !0)
      }
      getTypeId(dd) {
        return this.schemas.get(dd)
      }
      discoverTypes(dd) {
        if (!this.add(dd)) return;
        TJ.inheritedTypes.get(dd)?.forEach((dd => {
          this.discoverTypes(dd)
        }));
        let Jd = dd;
        for (;
          (Jd = Object.getPrototypeOf(Jd)) && Jd !== mp && Jd !== Function.prototype;) this.discoverTypes(Jd);
        const kd = dd[Symbol.metadata];
        (kd[Yd] || kd[fd]) && (this.hasFilters = !0);
        for (const pd in kd) {
          const dd = kd[pd].type;
          if ("string" !== typeof dd && !nJ(dd))
            if ("function" === typeof dd) this.discoverTypes(dd);
            else {
              const Jd = Object.values(dd)[0];
              if ("string" === typeof Jd) continue;
              this.discoverTypes(Jd)
            }
        }
      }
      debug() {
        return `TypeContext ->\n\tSchema types: ${this.schemas.size}\n\thasFilters: ${this.hasFilters}`
      }
    }

    function EJ(dd) {
      const Jd = hJ(dd);
      return Jd ? {
        complexTypeKlass: xJ[Jd],
        childType: dd[Jd]
      } : {
        complexTypeKlass: !1,
        childType: dd
      }
    }

    function cJ(dd, Jd) {
      const kd = rJ(dd),
        pd = hJ(kd),
        Nd = pd && hJ(kd[pd]);
      if (Nd) throw new Error(`${Jd?`${Jd}: `:""}@colyseus/schema: nested collections are not supported ("${pd}" of "${Nd}"). Collections can only hold primitive types or Schema classes, wrap the inner ${Nd} in a Schema class.`);
      return kd
    }

    function hJ(dd) {
      return "object" === typeof dd && null !== dd ? Object.keys(dd).find((dd => void 0 !== xJ[dd])) : void 0
    }

    function rJ(dd) {
      if ("object" !== typeof dd || null === dd) return dd;
      if (Array.isArray(dd)) return {
        array: rJ(dd[0])
      };
      const Jd = function(dd) {
        const Jd = Object.keys(dd),
          kd = Jd.filter((dd => /\d+/.test(dd)));
        if (kd.length > 0 && kd.length === Jd.length / 2 && dd[dd[kd[0]]] == kd[0]) return "number";
        if (Jd.length > 0 && Jd.every((Jd => dd[Jd] === Jd))) return "string"
      }(dd);
      if (Jd) return Jd;
      if (nJ(dd)) return "string" === typeof dd.quantized.wire ? dd : {
        quantized: fJ(dd.quantized)
      };
      if (void 0 !== dd.type) return rJ(dd.type);
      const kd = hJ(dd);
      return kd && (dd[kd] = rJ(dd[kd])), dd
    }
    const uJ = [Fd, bd, Sd, jd, Xd, fd, ad];

    function tJ(dd, Jd, kd) {
      dd[Jd] || Object.defineProperty(dd, Jd, {
        value: [],
        enumerable: !1,
        configurable: !0,
        writable: !0
      }), dd[Jd].push(kd)
    }
    const VJ = {
        addField(dd, Jd, kd, pd, Nd) {
          if (Jd >= 63) throw new Error(`Can't define field '${kd}'.\nSchema instances may only have up to 63 fields.`);
          dd[Jd] = Object.assign(dd[Jd] || {}, {
            type: pd,
            index: Jd,
            name: kd
          }), Object.defineProperty(dd, Bd, {
            value: dd[Bd] || {},
            enumerable: !1,
            configurable: !0
          }), dd[Bd][kd] = Nd || {
            value: void 0,
            writable: !0,
            enumerable: !0,
            configurable: !0
          }, Object.defineProperty(dd, Md, {
            value: Jd,
            enumerable: !1,
            configurable: !0
          }), Object.defineProperty(dd, kd, {
            value: Jd,
            enumerable: !1,
            configurable: !0
          }), "string" === typeof dd[Jd].type || nJ(dd[Jd].type) || (void 0 === dd[Fd] && Object.defineProperty(dd, Fd, {
            value: [],
            enumerable: !1,
            configurable: !0
          }), dd[Fd].push(Jd));
          const Wd = dd[Jd].type;
          if (Wd && "object" === typeof Wd && void 0 !== Wd.stream) {
            if (void 0 !== Wd.array) throw new Error(iJ);
            dd[Jd].stream = !0, dd[fd] || Object.defineProperty(dd, fd, {
              value: [],
              enumerable: !1,
              configurable: !0,
              writable: !0
            }), dd[fd].includes(Jd) || dd[fd].push(Jd);
            const Nd = pd?.priority;
            "function" === typeof Nd && VJ.setStreamPriority(dd, kd, Nd)
          }
        },
        setTag(dd, Jd, kd) {
          const pd = dd[Jd];
          if (dd[pd].tag = kd, dd[Yd] || (Object.defineProperty(dd, Yd, {
              value: [],
              enumerable: !1,
              configurable: !0
            }), Object.defineProperty(dd, md, {
              value: {},
              enumerable: !1,
              configurable: !0
            })), dd[Yd].push(pd), kd < 0) dd[md][kd] || (dd[md][kd] = []), dd[md][kd].push(pd);
          else
            for (let Nd = kd; Nd > 0; Nd &= Nd - 1) {
              const Jd = Nd & -Nd;
              dd[md][Jd] || (dd[md][Jd] = []), dd[md][Jd].push(pd)
            }
        },
        setUnreliable(dd, Jd) {
          const kd = dd[Jd];
          if ("string" !== typeof dd[kd].type) throw new Error(`@unreliable cannot be applied to ref-type field "${Jd}". For ref-type fields, mark each primitive sub-field with @unreliable instead. See README "Limitations and best practices".`);
          dd[kd].unreliable = !0, dd[bd] || Object.defineProperty(dd, bd, {
            value: [],
            enumerable: !1,
            configurable: !0,
            writable: !0
          }), dd[bd].push(kd)
        },
        setPatchOnly(dd, Jd) {
          const kd = dd[Jd];
          if (dd[kd].fullStateOnly) throw new Error(`field "${Jd}" cannot be both patchOnly and fullStateOnly \u2014 those are the only two delivery channels, so the field would never reach a client.`);
          dd[kd].patchOnly = !0, tJ(dd, Sd, kd), tJ(dd, jd, kd)
        },
        setDeprecated(dd, Jd) {
          const kd = dd[Jd];
          dd[kd].deprecated = !0, tJ(dd, jd, kd), Object.defineProperty(dd, kd, {
            value: dd[kd],
            enumerable: !1,
            configurable: !0
          })
        },
        setFullStateOnly(dd, Jd) {
          const kd = dd[Jd];
          if (dd[kd].patchOnly) throw new Error(`field "${Jd}" cannot be both patchOnly and fullStateOnly \u2014 those are the only two delivery channels, so the field would never reach a client.`);
          dd[kd].fullStateOnly = !0, tJ(dd, Xd, kd)
        },
        setStream(dd, Jd) {
          const kd = dd[Jd];
          dd[kd].stream = !0, dd[fd] || Object.defineProperty(dd, fd, {
            value: [],
            enumerable: !1,
            configurable: !0,
            writable: !0
          }), dd[fd].push(kd)
        },
        setStreamPriority(dd, Jd, kd) {
          const pd = dd[Jd];
          dd[nd] || Object.defineProperty(dd, nd, {
            value: {},
            enumerable: !1,
            configurable: !0,
            writable: !0
          }), dd[nd][pd] = kd
        },
        getStreamPriority: (dd, Jd) => dd?.[nd]?.[Jd],
        defineField(dd, Jd, kd, pd, Nd) {
          const Wd = cJ(Nd, `${dd.name}.${pd}`),
            {
              complexTypeKlass: Pd,
              childType: Zd
            } = EJ(Wd);
          VJ.addField(Jd, kd, pd, Wd, sp(pd, kd, Zd, Pd)), Jd[Bd][pd] && Object.defineProperty(dd.prototype, pd, Jd[Bd][pd]), ("string" === typeof Wd || nJ(Wd)) && (Jd[ad] || Object.defineProperty(Jd, ad, {
            value: [],
            enumerable: !1,
            configurable: !0,
            writable: !0
          }), Jd[ad][kd] = "string" === typeof Wd ? kJ[Wd] : DJ(Wd.quantized))
        },
        setFields(dd, Jd) {
          const kd = dd.prototype.constructor;
          TJ.register(kd);
          const pd = Object.getPrototypeOf(kd),
            Nd = pd && pd[Symbol.metadata],
            Wd = VJ.initialize(kd);
          kd[gd] || (kd[gd] = mp[gd]), kd[Cd] || (kd[Cd] = mp[Cd]), kd[Kd] || (kd[Kd] = mp[Kd]), kd.prototype.toJSON || (kd.prototype.toJSON = mp.prototype.toJSON);
          let Pd = Wd[Md] ?? (Nd && Nd[Md]) ?? -1;
          Pd++, Wd[ad] || Object.defineProperty(Wd, ad, {
            value: Nd?.[ad] ? [...Nd[ad]] : [],
            enumerable: !1,
            configurable: !0,
            writable: !0
          });
          for (const Zd in Jd) {
            if (void 0 !== Wd[Zd]) throw new Error(`@colyseus/schema: Duplicate '${Zd}' definition on '${kd.name||"(anonymous)"}'.`);
            VJ.defineField(kd, Wd, Pd, Zd, Jd[Zd]), Pd++
          }
          return dd
        },
        isDeprecated: (dd, Jd) => !0 === dd[Jd].deprecated,
        initialize(dd) {
          const Jd = Object.getPrototypeOf(dd),
            kd = Jd[Symbol.metadata];
          let pd = dd[Symbol.metadata] ?? Object.create(null);
          if (Jd !== mp && pd === kd && (pd = Object.create(null), kd)) {
            Object.setPrototypeOf(pd, kd), Object.defineProperty(pd, Md, {
              value: kd[Md],
              enumerable: !1,
              configurable: !0,
              writable: !0
            }), void 0 !== kd[Yd] && (Object.defineProperty(pd, Yd, {
              value: [...kd[Yd]],
              enumerable: !1,
              configurable: !0,
              writable: !0
            }), Object.defineProperty(pd, md, {
              value: {
                ...kd[md]
              },
              enumerable: !1,
              configurable: !0,
              writable: !0
            }));
            for (const dd of uJ) {
              const Jd = kd[dd];
              void 0 !== Jd && Object.defineProperty(pd, dd, {
                value: [...Jd],
                enumerable: !1,
                configurable: !0,
                writable: !0
              })
            }
            Object.defineProperty(pd, Bd, {
              value: {
                ...kd[Bd]
              },
              enumerable: !1,
              configurable: !0,
              writable: !0
            })
          }
          return Object.defineProperty(dd, Symbol.metadata, {
            value: pd,
            writable: !1,
            configurable: !0
          }), pd
        },
        isValidInstance: dd => dd.constructor[Symbol.metadata] && Object.prototype.hasOwnProperty.call(dd.constructor[Symbol.metadata], Md),
        getFields(dd) {
          const Jd = dd[Symbol.metadata],
            kd = {};
          for (let pd = 0; pd <= Jd[Md]; pd++) kd[Jd[pd].name] = Jd[pd].type;
          return kd
        },
        hasViewTagAtIndex: (dd, Jd) => dd?.[Yd]?.includes(Jd),
        hasUnreliableAtIndex: (dd, Jd) => dd?.[bd]?.includes(Jd),
        hasPatchOnlyAtIndex: (dd, Jd) => dd?.[Sd]?.includes(Jd),
        hasFullStateOnlyAtIndex: (dd, Jd) => dd?.[Xd]?.includes(Jd),
        hasStreamAtIndex: (dd, Jd) => dd?.[fd]?.includes(Jd)
      },
      zJ = (dd, Jd, kd) => dd(Jd, kd);
    class HJ {
      dirtyLow = 0;
      dirtyHigh = 0;
      ops;
      constructor(dd) {
        this.ops = new Uint8Array(Math.max(dd + 1, 1))
      }
      record(dd, Jd) {
        const kd = this.ops[dd];
        0 === kd ? this.ops[dd] = Jd : (kd === Nd.DELETE || kd === Nd.ADD && Jd === Nd.DELETE_AND_ADD) && (this.ops[dd] = Nd.DELETE_AND_ADD), dd < 32 ? this.dirtyLow |= 1 << dd : this.dirtyHigh |= 1 << dd - 32
      }
      recordDelete(dd, Jd) {
        this.ops[dd] = Jd, dd < 32 ? this.dirtyLow |= 1 << dd : this.dirtyHigh |= 1 << dd - 32
      }
      recordRaw(dd, Jd) {
        this.record(dd, Jd)
      }
      operationAt(dd) {
        const Jd = this.ops[dd];
        return 0 === Jd ? void 0 : Jd
      }
      setOperationAt(dd, Jd) {
        this.ops[dd] = Jd
      }
      forEach(dd) {
        this.forEachWithCtx(dd, zJ)
      }
      forEachWithCtx(dd, Jd) {
        let kd = this.dirtyLow,
          pd = this.dirtyHigh;
        const Nd = this.ops;
        for (; 0 !== kd;) {
          const pd = kd & -kd,
            Wd = 31 - Math.clz32(pd);
          kd ^= pd, Jd(dd, Wd, Nd[Wd])
        }
        for (; 0 !== pd;) {
          const kd = pd & -pd,
            Wd = 31 - Math.clz32(kd) + 32;
          pd ^= kd, Jd(dd, Wd, Nd[Wd])
        }
      }
      size() {
        return AJ(this.dirtyLow) + AJ(this.dirtyHigh)
      }
      has() {
        return 0 !== (this.dirtyLow | this.dirtyHigh)
      }
      reset() {
        this.dirtyLow = 0, this.dirtyHigh = 0, this.ops.fill(0)
      }
    }
    class wJ {
      sL = new Map;
      pureOps = [];
      record(dd, Jd) {
        const kd = this.sL.get(dd);
        void 0 === kd ? this.sL.set(dd, Jd) : (kd === Nd.DELETE || kd === Nd.ADD && Jd === Nd.DELETE_AND_ADD) && this.sL.set(dd, Nd.DELETE_AND_ADD)
      }
      recordDelete(dd, Jd) {
        this.sL.set(dd, Jd)
      }
      recordRaw(dd, Jd) {
        this.sL.set(dd, Jd)
      }
      recordPure(dd) {
        this.pureOps.push([this.sL.size, dd])
      }
      operationAt(dd) {
        return this.sL.get(dd)
      }
      setOperationAt(dd, Jd) {
        this.sL.has(dd) && this.sL.set(dd, Jd)
      }
      forEach(dd) {
        this.forEachWithCtx(dd, zJ)
      }
      forEachWithCtx(dd, Jd) {
        const kd = this.pureOps;
        if (kd.length > 0) {
          let pd = 0,
            Nd = 0;
          for (const [Wd, Pd] of this.sL) {
            for (; pd < kd.length && kd[pd][0] <= Nd;) {
              const Nd = kd[pd++][1];
              Jd(dd, -Nd, Nd)
            }
            Jd(dd, Wd, Pd), Nd++
          }
          for (; pd < kd.length;) {
            const Nd = kd[pd++][1];
            Jd(dd, -Nd, Nd)
          }
        } else
          for (const [pd, Nd] of this.sL) Jd(dd, pd, Nd)
      }
      size() {
        return this.sL.size + this.pureOps.length
      }
      has() {
        return this.sL.size > 0 || this.pureOps.length > 0
      }
      reset() {
        this.sL.clear(), this.pureOps.length = 0
      }
      shift(dd) {
        const Jd = new Map;
        for (const [kd, pd] of this.sL) Jd.set(kd + dd, pd);
        this.sL = Jd
      }
    }

    function AJ(dd) {
      return 16843009 * ((dd = (858993459 & (dd -= dd >>> 1 & 1431655765)) + (dd >>> 2 & 858993459)) + (dd >>> 4) & 252645135) >>> 24
    }

    function dk(dd) {
      if (void 0 === dd) return 0;
      let Jd = 0;
      for (let kd = 0, pd = dd.length; kd < pd; kd++) {
        const pd = dd[kd];
        pd < 32 && (Jd |= 1 << pd)
      }
      return Jd
    }

    function Jk(dd) {
      const Jd = dd.constructor;
      if (Object.prototype.hasOwnProperty.call(Jd, sd)) return Jd[sd];
      const kd = Jd[Symbol.metadata],
        pd = VJ.isValidInstance(dd),
        Nd = (kd?.[Yd]?.length ?? 0) > 0,
        Wd = function(dd) {
          const Jd = [],
            kd = [],
            pd = [],
            Nd = [],
            Wd = dd?.[Md];
          if (void 0 === Wd) return {
            names: Jd,
            types: kd,
            tags: pd,
            encoders: Nd
          };
          const Pd = dd[ad];
          for (let Zd = 0; Zd <= Wd; Zd++) {
            const Wd = dd[Zd];
            void 0 !== Wd ? (Jd[Zd] = Wd.name, kd[Zd] = Wd.type, pd[Zd] = Wd.tag, Nd[Zd] = Pd?.[Zd]) : (Jd[Zd] = void 0, kd[Zd] = void 0, pd[Zd] = void 0, Nd[Zd] = void 0)
          }
          return {
            names: Jd,
            types: kd,
            tags: pd,
            encoders: Nd
          }
        }(kd),
        Pd = pd && !Nd ? void 0 : Jd[od],
        Zd = {
          encoder: Jd[Cd],
          filter: Pd,
          metadata: kd,
          isSchema: pd,
          filterBitmask: pd ? dk(kd?.[Yd]) : 0,
          hasAnyFullStateOnly: (kd?.[Xd]?.length ?? 0) > 0,
          hasAnyUnreliable: (kd?.[bd]?.length ?? 0) > 0,
          hasAnyStream: (kd?.[fd]?.length ?? 0) > 0,
          hasAnyView: Nd,
          fullStateOnlyBitmask: dk(kd?.[Xd]),
          unreliableBitmask: dk(kd?.[bd]),
          streamBitmask: dk(kd?.[fd]),
          names: Wd.names,
          types: Wd.types,
          tags: Wd.tags,
          encoders: Wd.encoders
        };
      return Object.defineProperty(Jd, sd, {
        value: Zd,
        enumerable: !1,
        writable: !0,
        configurable: !0
      }), Zd
    }

    function kk(dd, Jd) {
      if (void 0 !== dd.parentRef && Jd(dd.parentRef, dd._parentIndex)) return !0;
      for (let kd = dd.extraParents; void 0 !== kd; kd = kd.next)
        if (Jd(kd.ref, kd.index)) return !0;
      return !1
    }
    const pk = (dd, Jd) => {
        dd.isFieldUnreliable(Jd) ? dd.ensureUnreliableRecorder().record(Jd, Nd.ADD) : dd.record(Jd, Nd.ADD)
      },
      Nk = (dd, Jd) => dd(Jd);

    function Wk(dd, Jd, kd) {
      const pd = dd.refTarget;
      if (void 0 !== pd[ed]) {
        if (dd.isPatchOnly) return;
        if (Array.isArray(pd.items)) {
          const dd = pd.items;
          for (let pd = 0, Nd = dd.length; pd < Nd; pd++) void 0 !== dd[pd] && kd(Jd, pd)
        } else if (void 0 !== pd.journal)
          for (const [dd, Nd] of pd.journal.keyByIndex) pd.$items.has(Nd) && kd(Jd, dd);
        else if (void 0 !== pd.$items)
          for (const dd of pd.$items.keys()) kd(Jd, dd)
      } else {
        const Nd = dd.metadata;
        if (!Nd) return;
        const Wd = Nd[Md] ?? -1,
          Pd = Nd[jd],
          Zd = dd.encDescriptor.names;
        for (let dd = 0; dd <= Wd; dd++) {
          const Nd = Zd[dd];
          if (void 0 === Nd) continue;
          if (Pd && Pd.includes(dd)) continue;
          const Wd = pd[Nd];
          void 0 !== Wd && null !== Wd && kd(Jd, dd)
        }
      }
    }

    function Pk(dd, Jd, kd, pd) {
      ! function(dd, Jd, kd) {
        if (!Jd) return;
        const pd = Jd[Od],
          Nd = !pd._isSchema;
        let Wd;
        Nd ? (Jd = pd.parent, kd = pd.parentIndex, Wd = Jd?.[Od].metadata) : Wd = pd.metadata;
        const Pd = (Wd?.[Sd]?.includes(kd) ? ak : 0) | (Wd?.[Xd]?.includes(kd) ? Mk : 0),
          Zd = pd.flags & mk | Pd,
          gd = dd.flags;
        dd.flags = gd | Zd;
        Zd & ~gd & Mk && (dd.reset(), dd.unreliableRecorder?.reset());
        const Cd = dd.root?.types;
        if (!Cd?.hasFilters) return;
        const Kd = Wd?.[Yd]?.includes(kd) ?? !1,
          od = Wd?.[fd]?.includes(kd) ?? !1,
          ld = pd.isFiltered || Kd || od;
        if (dd.isFiltered = ld, od && !Nd) {
          dd.isStreamCollection = !0;
          const Jd = MJ(dd.ref);
          if (void 0 === Jd.priority) {
            const dd = VJ.getStreamPriority(Wd, kd);
            void 0 !== dd && (Jd.priority = dd)
          }
          dd.root?.registerStream(dd.ref)
        }
        if (ld) {
          const Jd = gk(dd);
          dd.isVisibilitySharedWithParent = pd.isFiltered && Jd && !od && (!Kd || Nd && Wd[kd].tag !== ep)
        }
      }(dd, Jd, kd), dd.isFullStateOnly || (dd.has() && dd.root?.enqueueChangeTree(dd), dd.unreliableRecorder?.has() && dd.root?.enqueueUnreliable(dd), dd.has() || dd.unreliableRecorder?.has() || dd.root?.enqueueChangeTree(dd))
    }

    function Zk(dd) {
      const Jd = dd.pendingFilterRefresh;
      for (let kd = 0; kd < Jd.length; kd++) {
        const dd = Jd[kd];
        0 !== (dd.flags & Yk) && Ck(dd)
      }
      Jd.length = 0
    }

    function gk(dd) {
      return dd._isSchema || "string" !== typeof dd.refTarget[ed]
    }

    function Ck(dd) {
      dd.flags &= ~Yk;
      const Jd = dd.root;
      if (void 0 === Jd || void 0 === dd.parentRef) return;
      const kd = gk(dd);
      let pd = Ok(dd, dd.parentRef, dd._parentIndex, kd);
      for (let Wd = dd.extraParents; void 0 !== Wd && pd !== Lk; Wd = Wd.next) pd |= Ok(dd, Wd.ref, Wd.index, kd);
      if (0 === pd) return;
      dd.isVisibilitySharedWithParent = 0 !== (pd & Qk);
      const Nd = 0 === (pd & lk);
      Nd !== dd.isFiltered && (dd.isFiltered = Nd, Nd || dd.isFullStateOnly || (dd.forEachLiveWithCtx(dd, pk), dd.has() && Jd.enqueueChangeTree(dd), dd.unreliableRecorder?.has() && Jd.enqueueUnreliable(dd)), dd.forEachChildWithCtx(dd, ek))
    }
    const Kk = 1,
      lk = 2,
      Qk = 4,
      Lk = Kk | lk | Qk;

    function Ok(dd, Jd, kd, pd) {
      const Nd = Jd[Od];
      if (Nd.root !== dd.root || ! function(dd, Jd, kd) {
          const pd = Jd.refTarget;
          if (Jd.isArray) {
            const Jd = pd.items,
              Nd = Jd[kd];
            if (void 0 !== Nd && Nd[Od] === dd) return !0;
            for (let kd = 0, pd = Jd.length; kd < pd; kd++) {
              const pd = Jd[kd];
              if (void 0 !== pd && pd[Od] === dd) return !0
            }
            return !1
          }
          const Nd = Jd.getValue(kd);
          return void 0 !== Nd && Nd[Od] === dd
        }(dd, Nd, kd)) return 0;
      Nd.flags & Yk && Ck(Nd);
      let Wd = Kk;
      if (Nd._isSchema) {
        void 0 !== Nd.encDescriptor.tags[kd] || Nd.isFieldStream(kd) || (Nd.isFiltered ? pd && (Wd |= Qk) : Wd |= lk)
      } else if (Nd.isFiltered) {
        if (pd && !Nd.isStreamCollection) {
          const dd = Nd.parent?.[Od];
          (dd?._isSchema ? dd.encDescriptor.tags[Nd.parentIndex] : void 0) !== ep && (Wd |= Qk)
        }
      } else Wd |= lk;
      return Wd
    }
    const ek = (dd, Jd, kd) => {
      Ck(Jd)
    };

    function Rk(dd, Jd, kd, pd) {
      if (dd.addParent(Jd, pd), !kd) return;
      const Nd = kd.add(dd);
      kd !== dd.root && (dd.root = kd, Pk(dd, Jd, pd));
      const Wd = Jd?.[Od];
      if (void 0 !== Wd && void 0 !== Wd.subscribedViews && void 0 !== Jd[ed] && function(dd, Jd, kd, pd) {
          const Nd = dd.subscribedViews;
          if (void 0 === Nd) return;
          const Wd = dd.isStreamCollection,
            Pd = Wd ? dd.ref : void 0,
            Zd = Wd ? void 0 : kd[Od];
          for (let gd = 0, Cd = Nd.length; gd < Cd; gd++) {
            let dd = Nd[gd];
            for (; 0 !== dd;) {
              const kd = dd & -dd;
              dd ^= kd;
              const Cd = 32 * gd + (31 - Math.clz32(kd)),
                Kd = pd.activeViews.get(Cd),
                od = Kd?.deref();
              void 0 !== od ? Wd ? SJ(Pd, Cd, Jd) : void 0 !== Zd && od.markVisible(Zd) : Nd[gd] &= ~kd
            }
          }
        }(Wd, pd, dd.ref, kd), Nd) {
        let Jd = xk[qk];
        void 0 === Jd && (Jd = {
          parentRef: void 0,
          root: void 0
        }, xk[qk] = Jd), Jd.parentRef = dd.ref, Jd.root = kd, qk++, Gk(dd, Jd, Bk), qk--
      }
    }

    function Ik(dd, Jd, kd) {
      dd(Jd, kd)
    }

    function Gk(dd, Jd, kd) {
      const pd = dd.refTarget;
      if (pd[ed]) {
        if ("string" !== typeof pd[ed]) {
          const dd = pd.items;
          if (void 0 !== dd)
            for (let pd = 0, Nd = dd.length; pd < Nd; pd++) {
              const Nd = dd[pd];
              Nd && kd(Jd, Nd[Od], pd)
            } else {
              const dd = pd.$items,
                Nd = pd._collectionIndexes;
              for (const pd of dd.keys()) {
                const Wd = dd.get(pd);
                Wd && kd(Jd, Wd[Od], Nd?.[pd] ?? pd)
              }
            }
        }
      } else {
        const Nd = dd.metadata,
          Wd = Nd?.[Fd];
        if (!Wd) return;
        const Pd = dd.encDescriptor.names;
        for (let dd = 0, Zd = Wd.length; dd < Zd; dd++) {
          const Nd = Wd[dd],
            Zd = pd[Pd[Nd]];
          Zd && kd(Jd, Zd[Od], Nd)
        }
      }
    }

    function vk(dd, Jd, kd) {
      Jd.root !== dd ? Jd.setRoot(dd) : dd.add(Jd)
    }
    const xk = [];
    let qk = 0;

    function Bk(dd, Jd, kd) {
      if (Jd.root === dd.root) return dd.root.add(Jd), void dd.root.moveNextToParent(Jd);
      Jd.setParent(dd.parentRef, dd.root, kd)
    }

    function sk(dd, Jd, kd) {
      const pd = (3 & kd) << 3;
      return kd < 4 ? dd >>> pd & 255 : Jd >>> pd & 255
    }
    const ik = (dd, Jd, kd) => dd(Jd, kd);
    const ak = 16,
      Mk = 32,
      Fk = 128,
      Yk = 256,
      mk = ak | Mk;
    class bk {
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
      set isFiltered(dd) {
        this.flags = dd ? 1 | this.flags : -2 & this.flags
      }
      get isVisibilitySharedWithParent() {
        return 0 !== (2 & this.flags)
      }
      set isVisibilitySharedWithParent(dd) {
        this.flags = dd ? 2 | this.flags : -3 & this.flags
      }
      get isNew() {
        return 0 !== (4 & this.flags)
      }
      set isNew(dd) {
        this.flags = dd ? 4 | this.flags : -5 & this.flags
      }
      get isUnreliable() {
        return 0 !== (8 & this.flags)
      }
      set isUnreliable(dd) {
        this.flags = dd ? 8 | this.flags : -9 & this.flags
      }
      get isPatchOnly() {
        return 0 !== (this.flags & ak)
      }
      set isPatchOnly(dd) {
        this.flags = dd ? this.flags | ak : this.flags & ~ak
      }
      get isFullStateOnly() {
        return 0 !== (this.flags & Mk)
      }
      set isFullStateOnly(dd) {
        this.flags = dd ? this.flags | Mk : this.flags & ~Mk
      }
      get isStreamCollection() {
        return 0 !== (64 & this.flags)
      }
      set isStreamCollection(dd) {
        this.flags = dd ? 64 | this.flags : -65 & this.flags
      }
      get needsRestage() {
        return 0 !== (this.flags & Fk)
      }
      set needsRestage(dd) {
        this.flags = dd ? this.flags | Fk : -129 & this.flags
      }
      get hasFilteredFields() {
        return this.isFiltered || this.encDescriptor.hasAnyView
      }
      ensureUnreliableRecorder() {
        return void 0 === this.unreliableRecorder && (this.unreliableRecorder = this._isSchema ? new HJ(this.metadata?.[Md] ?? 0) : new wJ), this.unreliableRecorder
      }
      isFieldUnreliable(dd) {
        const Jd = this.encDescriptor;
        return !!Jd.hasAnyUnreliable && (dd < 32 ? 0 !== (Jd.unreliableBitmask & 1 << dd) : VJ.hasUnreliableAtIndex(this.metadata, dd))
      }
      isFieldFullStateOnly(dd) {
        if (this.isFullStateOnly) return !0;
        const Jd = this.encDescriptor;
        return !!Jd.hasAnyFullStateOnly && (dd < 32 ? 0 !== (Jd.fullStateOnlyBitmask & 1 << dd) : VJ.hasFullStateOnlyAtIndex(this.metadata, dd))
      }
      isFieldStream(dd) {
        const Jd = this.encDescriptor;
        return !!Jd.hasAnyStream && (dd < 32 ? 0 !== (Jd.streamBitmask & 1 << dd) : VJ.hasStreamAtIndex(this.metadata, dd))
      }
      constructor(dd) {
        let Jd = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : dd;
        this.ref = dd, this.refTarget = Jd;
        const kd = Jk(dd);
        this.encDescriptor = kd, this.metadata = kd.metadata;
        const pd = kd.isSchema;
        if (this._isSchema = pd, this.ops = void 0, this.collDirty = void 0, this.collPureOps = void 0, pd) {
          const dd = this.metadata?.[Md] ?? 0;
          dd > 7 && (this.ops = new Uint8Array(dd + 1))
        } else this.collDirty = new Map
      }
      _opAt(dd) {
        const Jd = this.ops;
        if (void 0 !== Jd) return Jd[dd];
        const kd = (3 & dd) << 3;
        return dd < 4 ? this.opsLow >>> kd & 255 : this.opsHigh >>> kd & 255
      }
      _opPut(dd, Jd) {
        const kd = this.ops;
        if (void 0 !== kd) return void(kd[dd] = Jd);
        const pd = (3 & dd) << 3,
          Nd = ~(255 << pd);
        dd < 4 ? this.opsLow = this.opsLow & Nd | Jd << pd : this.opsHigh = this.opsHigh & Nd | Jd << pd
      }
      _markDirty(dd) {
        dd < 32 ? this.dirtyLow |= 1 << dd : this.dirtyHigh |= 1 << dd - 32
      }
      record(dd, Jd) {
        if (this._isSchema) {
          const kd = this._opAt(dd);
          0 === kd ? this._opPut(dd, Jd) : (kd === Nd.DELETE || kd === Nd.ADD && Jd === Nd.DELETE_AND_ADD) && this._opPut(dd, Nd.DELETE_AND_ADD), this._markDirty(dd)
        } else {
          const kd = this.collDirty,
            pd = kd.get(dd);
          let Wd;
          Wd = void 0 === pd ? Jd : pd === Nd.DELETE || pd === Nd.ADD && Jd === Nd.DELETE_AND_ADD ? Nd.DELETE_AND_ADD : pd, kd.set(dd, Wd)
        }
      }
      recordDelete(dd, Jd) {
        this._isSchema ? (this._opPut(dd, Jd), this._markDirty(dd)) : this.collDirty.set(dd, Jd)
      }
      recordRaw(dd, Jd) {
        this._isSchema ? (this._opPut(dd, Jd), this._markDirty(dd)) : this.collDirty.set(dd, Jd)
      }
      recordPure(dd) {
        if (this._isSchema) throw new Error("ChangeTree (Schema): pure operations are not supported");
        (this.collPureOps ??= []).push([this.collDirty.size, dd])
      }
      operationAt(dd) {
        if (this._isSchema) {
          const Jd = this._opAt(dd);
          return 0 === Jd ? void 0 : Jd
        }
        return this.collDirty.get(dd)
      }
      setOperationAt(dd, Jd) {
        if (this._isSchema) this._opPut(dd, Jd);
        else {
          const kd = this.collDirty;
          kd.has(dd) && kd.set(dd, Jd)
        }
      }
      forEach(dd) {
        this.forEachWithCtx(dd, ik)
      }
      forEachWithCtx(dd, Jd) {
        if (this._isSchema) {
          let kd = this.dirtyLow,
            pd = this.dirtyHigh;
          const Nd = this.ops;
          if (void 0 !== Nd) {
            for (; 0 !== kd;) {
              const pd = kd & -kd,
                Wd = 31 - Math.clz32(pd);
              kd ^= pd, Jd(dd, Wd, Nd[Wd])
            }
            for (; 0 !== pd;) {
              const kd = pd & -pd,
                Wd = 31 - Math.clz32(kd) + 32;
              pd ^= kd, Jd(dd, Wd, Nd[Wd])
            }
          } else {
            const pd = this.opsLow,
              Nd = this.opsHigh;
            for (; 0 !== kd;) {
              const Wd = kd & -kd,
                Pd = 31 - Math.clz32(Wd);
              kd ^= Wd, Jd(dd, Pd, sk(pd, Nd, Pd))
            }
          }
          return
        }
        const kd = this.collDirty,
          pd = this.collPureOps;
        if (void 0 !== pd && pd.length > 0) {
          let Nd = 0,
            Wd = 0;
          for (const [Pd, Zd] of kd) {
            for (; Nd < pd.length && pd[Nd][0] <= Wd;) {
              const kd = pd[Nd++][1];
              Jd(dd, -kd, kd)
            }
            Jd(dd, Pd, Zd), Wd++
          }
          for (; Nd < pd.length;) {
            const kd = pd[Nd++][1];
            Jd(dd, -kd, kd)
          }
        } else
          for (const [Nd, Wd] of kd) Jd(dd, Nd, Wd)
      }
      size() {
        return this._isSchema ? AJ(this.dirtyLow) + AJ(this.dirtyHigh) : this.collDirty.size + (this.collPureOps?.length ?? 0)
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
      insertAt(dd, Jd) {
        if (this._isSchema) throw new Error("ChangeTree (Schema): insertAt is not supported");
        const kd = this.collDirty,
          pd = new Map,
          Wd = !this.paused && !this.isFullStateOnly;
        if (dd > 0)
          for (const [Nd, Pd] of kd) Nd < dd && pd.set(Nd, Pd);
        if (Wd)
          for (let Pd = 0; Pd < Jd; Pd++) pd.set(dd + Pd, Nd.ADD);
        for (const [Nd, Pd] of kd) Nd >= dd && pd.set(Nd + Jd, Pd);
        this.collDirty = pd, Wd && this.root?.enqueueChangeTree(this)
      }
      removeAt(dd, Jd) {
        if (this._isSchema) throw new Error("ChangeTree (Schema): removeAt is not supported");
        const kd = this.collDirty,
          pd = dd + Jd;
        let Nd = !1;
        for (const Pd of kd.keys())
          if (Pd >= pd) {
            Nd = !0;
            break
          } if (!Nd) {
          for (let Jd = dd; Jd < pd; Jd++) kd.delete(Jd);
          return
        }
        const Wd = new Map;
        for (const [Pd, Zd] of kd) Pd < dd ? Wd.set(Pd, Zd) : Pd >= pd && Wd.set(Pd - Jd, Zd);
        this.collDirty = Wd
      }
      unshift(dd) {
        this.insertAt(0, dd)
      }
      setRoot(dd) {
        ! function(dd, Jd) {
          dd.root = Jd;
          const kd = Jd.add(dd);
          Pk(dd, dd.parent, dd.parentIndex), kd && Gk(dd, Jd, vk)
        }(this, dd)
      }
      setParent(dd, Jd, kd) {
        Rk(this, dd, Jd, kd)
      }
      forEachChild(dd) {
        Gk(this, dd, Ik)
      }
      forEachChildWithCtx(dd, Jd) {
        Gk(this, dd, Jd)
      }
      forEachLive(dd) {
        Wk(this, dd, Nk)
      }
      forEachLiveWithCtx(dd, Jd) {
        Wk(this, dd, Jd)
      }
      operation(dd) {
        this.paused || this.isFullStateOnly || (this.recordPure(dd), this.root?.enqueueChangeTree(this))
      }
      _routeAndRecord(dd, Jd, kd) {
        if (!this.paused && !this.isFieldFullStateOnly(dd)) {
          if (this.isFieldUnreliable(dd) && !this.isNew) {
            const pd = this.ensureUnreliableRecorder();
            return kd ? pd.recordRaw(dd, Jd) : pd.record(dd, Jd), void this.root?.enqueueUnreliable(this)
          }
          kd ? this.recordRaw(dd, Jd) : this.record(dd, Jd), this.root?.enqueueChangeTree(this)
        }
      }
      change(dd) {
        let Jd = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Nd.ADD;
        this._routeAndRecord(dd, Jd, !1)
      }
      indexedOperation(dd, Jd) {
        this._routeAndRecord(dd, Jd, !0)
      }
      getChange(dd) {
        return this.operationAt(dd)
      }
      pause() {
        this.paused = !0
      }
      resume() {
        this.paused = !1
      }
      untracked(dd) {
        const Jd = this.paused;
        this.paused = !0;
        try {
          return dd()
        } finally {
          this.paused = Jd
        }
      }
      markDirty(dd) {
        let Jd = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Nd.ADD;
        const kd = this.paused;
        this.paused = !1;
        try {
          this.change(dd, Jd)
        } finally {
          this.paused = kd
        }
      }
      getValue(dd) {
        let Jd = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return this.refTarget[ld](dd, Jd)
      }
      delete(dd, Jd) {
        if (void 0 === dd) {
          try {
            throw new Error(`@colyseus/schema ${this.ref.constructor.name}: trying to delete non-existing index '${dd}'`)
          } catch (gN) {
            console.warn(gN)
          }
          return
        }
        if (this.paused || this.isFieldFullStateOnly(dd)) return this.getValue(dd);
        const kd = this.isFieldUnreliable(dd) && !this.isNew;
        kd ? this.ensureUnreliableRecorder().recordDelete(dd, Jd ?? Nd.DELETE) : this.recordDelete(dd, Jd ?? Nd.DELETE);
        const pd = this.getValue(dd);
        return pd && pd[Od] && this.root?.remove(pd[Od]), kd ? this.root?.enqueueUnreliable(this) : this.root?.enqueueChangeTree(this), pd
      }
      endEncode() {
        this.reset(), this.changesNode = void 0, this._isSchema || this.refTarget[Id]?.(), this.isNew = !1
      }
      endEncodeUnreliable() {
        this.unreliableRecorder?.reset(), this.unreliableChangesNode = void 0, this._isSchema || this.refTarget[Id]?.()
      }
      discard() {
        this._isSchema || this.refTarget[Id]?.(), this.reset(), this.unreliableRecorder?.reset()
      }
      discardAll() {
        const dd = dd => {
          if (dd < 0) return;
          const Jd = this.getValue(dd);
          Jd && Jd[Od] && Jd[Od].discardAll()
        };
        this.forEach(dd), this.unreliableRecorder?.forEach(dd), this.discard()
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
      addParent(dd, Jd) {
        ! function(dd, Jd, kd) {
          if (dd.parentRef) {
            if (dd.parentRef[Od] === Jd[Od]) return void(dd._parentIndex = kd);
            if (kk(dd, ((dd, kd) => dd[Od] === Jd[Od]))) return void(dd._parentIndex = kd)
          }
          void 0 === dd.parentRef ? (dd.parentRef = Jd, dd._parentIndex = kd) : (dd.extraParents = {
            ref: dd.parentRef,
            index: dd._parentIndex,
            next: dd.extraParents
          }, dd.parentRef = Jd, dd._parentIndex = kd)
        }(this, dd, Jd)
      }
      setParentIndex(dd, Jd) {
        ! function(dd, Jd, kd) {
          if (void 0 !== dd.extraParents)
            if (dd.parentRef[Od] !== Jd[Od]) {
              for (let pd = dd.extraParents; void 0 !== pd; pd = pd.next)
                if (pd.ref[Od] === Jd[Od]) return void(pd.index = kd)
            } else dd._parentIndex = kd;
          else dd._parentIndex = kd
        }(this, dd, Jd)
      }
      removeParent() {
        return function(dd, Jd) {
          if (dd.parentRef && dd.parentRef[Od] === Jd[Od]) return dd.extraParents ? (dd.parentRef = dd.extraParents.ref, dd._parentIndex = dd.extraParents.index, dd.extraParents = dd.extraParents.next) : (dd.parentRef = void 0, dd._parentIndex = void 0), !0;
          let kd = dd.extraParents,
            pd = null;
          for (; kd;) {
            if (kd.ref[Od] === Jd[Od]) return pd ? pd.next = kd.next : dd.extraParents = kd.next, !0;
            pd = kd, kd = kd.next
          }
          return void 0 === dd.parentRef
        }(this, arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.parent)
      }
      findParent(dd) {
        return function(dd, Jd) {
          if (void 0 !== dd.parentRef && Jd(dd.parentRef, dd._parentIndex)) return {
            ref: dd.parentRef,
            index: dd._parentIndex
          };
          for (let kd = dd.extraParents; void 0 !== kd; kd = kd.next)
            if (Jd(kd.ref, kd.index)) return {
              ref: kd.ref,
              index: kd.index
            }
        }(this, dd)
      }
      hasParent(dd) {
        return kk(this, dd)
      }
      indexInParent(dd) {
        return function(dd, Jd) {
          if (dd.parentRef && dd.parentRef[Od] === Jd[Od]) return dd._parentIndex;
          for (let kd = dd.extraParents; void 0 !== kd; kd = kd.next)
            if (kd.ref[Od] === Jd[Od]) return kd.index
        }(this, dd)
      }
      getAllParents() {
        return function(dd) {
          const Jd = [];
          dd.parentRef && Jd.push({
            ref: dd.parentRef,
            index: dd._parentIndex
          });
          let kd = dd.extraParents;
          for (; kd;) Jd.push({
            ref: kd.ref,
            index: kd.index
          }), kd = kd.next;
          return Jd
        }(this)
      }
    }
    class Sk {
      ref;
      root = void 0;
      parentRef = void 0;
      paused = !1;
      isNew = !1;
      flags = 0;
      constructor(dd) {
        this.ref = dd
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
      untracked(dd) {
        return dd()
      }
      markDirty() {}
      forEachChild(dd) {
        const Jd = this.ref;
        if (Jd[ed]) {
          if ("string" !== typeof Jd[ed])
            for (const [kd, pd] of Jd.entries()) pd && dd(pd[Od], Jd._collectionIndexes?.[kd] ?? kd);
          return
        }
        const kd = Jd.constructor,
          pd = kd?.[Symbol.metadata];
        if (!pd) return;
        const Nd = pd[Fd] ?? [];
        for (let Wd = 0; Wd < Nd.length; Wd++) {
          const kd = Nd[Wd],
            Pd = Jd[pd[kd].name];
          Pd && dd(Pd[Od], kd)
        }
      }
      forEachChildWithCtx(dd, Jd) {
        this.forEachChild(((kd, pd) => Jd(dd, kd, pd)))
      }
      forEachLive() {}
      forEachLiveWithCtx() {}
      forEach() {}
    }

    function jk(dd) {
      let Jd = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : dd;
      var kd;
      Object.defineProperty(dd, Od, {
        value: (kd = Jd, new Sk(kd)),
        enumerable: !1,
        writable: !0
      })
    }

    function Xk(dd, Jd, kd, pd, Wd, Pd, gd) {
      void 0 !== gd ? gd(Jd, pd, Pd) : "string" === typeof kd ? kJ[kd]?.(Jd, pd, Pd) : null != kd[Symbol.metadata] ? (kJ.number(Jd, pd[Zd], Pd), (Wd & Nd.ADD) === Nd.ADD && dd.tryEncodeTypeId(Jd, kd, pd.constructor, Pd)) : kJ.number(Jd, pd[Zd], Pd)
    }
    const fk = function(dd, Jd, kd, pd, Wd, Pd, Zd, gd) {
        if (Jd[Pd.offset++] = 255 & (pd | Wd), Wd === Nd.DELETE) return;
        const Cd = kd.encDescriptor,
          Kd = kd.ref,
          od = Kd[xd][pd] ?? Kd[Cd.names[pd]];
        Xk(dd, Jd, Cd.types[pd], od, Wd, Pd, Cd.encoders[pd])
      },
      nk = function(dd, Jd, kd, pd, Wd, Pd) {
        if (Jd[Pd.offset++] = 255 & Wd, kJ.number(Jd, pd, Pd), Wd === Nd.DELETE) return;
        const Zd = kd.ref;
        if ((Wd & Nd.ADD) === Nd.ADD) {
          const dd = Zd.$indexes.get(pd);
          kJ.string(Jd, dd, Pd)
        }
        Xk(dd, Jd, Zd[ed], Zd[ld](pd), Wd, Pd)
      },
      Uk = function(dd, Jd, kd, pd, Wd, Pd) {
        if (Jd[Pd.offset++] = 255 & Wd, kJ.number(Jd, pd, Pd), Wd === Nd.DELETE) return;
        const Zd = kd.ref;
        Xk(dd, Jd, Zd[ed], Zd[ld](pd), Wd, Pd)
      },
      yk = function(dd, Jd, kd, pd, Wd, Pd) {
        const Zd = kd.ref;
        (Wd & Nd.ADD) === Nd.ADD && "function" === typeof Zd.set ? nk(dd, Jd, kd, pd, Wd, Pd) : Uk(dd, Jd, kd, pd, Wd, Pd)
      },
      Dk = function(dd, Jd, kd, pd, Wd, Pd, gd, Cd) {
        const Kd = kd.refTarget,
          od = Kd[ed],
          Qd = "string" !== typeof od;
        let Ld;
        if (Cd && kd.isFiltered && Qd) {
          const dd = Kd.tmpItems[pd];
          if (!dd) return;
          if (Ld = dd[Zd], Wd === Nd.DELETE) Wd = Nd.DELETE_BY_REFID;
          else if ((Wd & Nd.ADD) === Nd.ADD) Wd = Nd.ADD_BY_REFID;
          else if ((Wd & Nd.MOVE) === Nd.MOVE) return
        } else if (Wd === Nd.DELETE && Qd) {
          const dd = Kd.tmpItems[pd];
          if (!dd) return;
          Ld = dd[Zd], Wd = Nd.DELETE_BY_REFID
        } else Ld = pd;
        if (Jd[Pd.offset++] = 255 & Wd, kJ.number(Jd, Ld, Pd), Wd === Nd.DELETE || Wd === Nd.DELETE_BY_REFID) return;
        Xk(dd, Jd, od, Kd[ld](pd, gd), Wd, Pd)
      };

    function Tk(dd, Jd, kd, pd, Wd, Pd, gd) {
      const Cd = dd.resyncVisited;
      let Kd = Cd.get(dd.currentRefId);
      if (void 0 === Kd && Cd.set(dd.currentRefId, Kd = new Set), Kd.add(pd), void 0 !== Wd && kd === Nd.ADD && Wd !== Pd) {
        const kd = Wd[Zd];
        void 0 !== kd && (dd.root.removeRef(kd), gd?.push({
          ref: Jd,
          refId: dd.currentRefId,
          op: Nd.DELETE,
          dynamicIndex: pd,
          value: void 0,
          previousValue: Wd
        }))
      }
    }

    function Ek(dd, Jd, kd, pd) {
      const Nd = Jd[Zd];
      if (void 0 === Nd || kd.has(Nd)) return;
      kd.add(Nd);
      const Wd = Jd.constructor[Symbol.metadata],
        Pd = Wd?.[Fd];
      if (void 0 === Pd) return;
      const gd = Wd[Sd];
      for (let Zd = 0; Zd < Pd.length; Zd++) {
        const Nd = Pd[Zd];
        if (void 0 !== gd && gd.includes(Nd)) continue;
        const Cd = Wd[Nd],
          Kd = Jd[Cd.name];
        Kd && (mp.is(Cd.type) ? Ek(dd, Kd, kd, pd) : ck(dd, Kd, kd, pd))
      }
    }

    function ck(dd, Jd, kd, pd) {
      const Wd = Jd[Rd] ?? Jd,
        Pd = Wd[Zd];
      if (void 0 === Pd || kd.has(Pd)) return;
      kd.add(Pd);
      const gd = dd.resyncVisited.get(Pd);
      if (void 0 === gd) return;
      const Cd = dd.root;
      Wd[Ld](gd, ((dd, kd) => {
        pd?.push({
          ref: Jd,
          refId: Pd,
          op: Nd.DELETE,
          dynamicIndex: kd,
          value: void 0,
          previousValue: dd
        });
        const Wd = dd?.[Zd];
        void 0 !== Wd && Cd.removeRef(Wd)
      }), (Jd => {
        mp.isSchema(Jd) && Ek(dd, Jd, kd, pd)
      }))
    }
    const hk = 1,
      rk = 2,
      uk = 3,
      tk = 4,
      Vk = 5;

    function zk(dd, Jd, kd, pd, Wd, Pd, gd, Cd, Kd) {
      const od = dd.root;
      let ld;
      if ((Jd & Nd.DELETE) === Nd.DELETE) {
        const dd = Wd?.[Zd];
        void 0 !== dd && od.removeRef(dd), Jd !== Nd.DELETE_AND_ADD && kd[Qd](pd), ld = void 0
      }
      if (Jd === Nd.DELETE);
      else if ("string" === typeof Pd) ld = vJ[Pd](gd, Cd);
      else if (nJ(Pd)) ld = function(dd, Jd, kd) {
        return yJ(dd, (0, vJ[dd.wire])(Jd, kd))
      }(Pd.quantized, gd, Cd);
      else if (mp.is(Pd)) {
        const kd = vJ.number(gd, Cd);
        if (ld = od.refs.get(kd), (Jd & Nd.ADD) === Nd.ADD) {
          const pd = dd.getInstanceType(gd, Cd, Pd);
          ld || (ld = dd.createInstanceOfType(pd)), od.addRef(kd, ld, ld !== Wd || Jd === Nd.DELETE_AND_ADD && ld === Wd)
        }
      } else {
        const kd = (Ld = Object.keys(Pd)[0], xJ[Ld]),
          pd = vJ.number(gd, Cd);
        null !== dd.resyncVisited && function(dd, Jd) {
          const kd = dd.resyncVisited;
          kd.has(Jd) || kd.set(Jd, new Set)
        }(dd, pd);
        const Qd = od.refs.has(pd) ? Wd || od.refs.get(pd) : kd.constructor.initializeForDecoder();
        if (ld = Qd.clone(!0), ld[ed] = Object.values(Pd)[0], Wd) {
          let dd = Wd[Zd];
          if (void 0 !== dd && pd !== dd) {
            (Jd & Nd.DELETE) !== Nd.DELETE && od.removeRef(dd);
            const kd = Wd.entries();
            let pd;
            for (;
              (pd = kd.next()) && !pd.done;) {
              const [Jd, kd] = pd.value;
              "object" === typeof kd && (dd = kd[Zd]), Kd?.push({
                ref: Wd,
                refId: dd,
                op: Nd.DELETE,
                field: Jd,
                value: void 0,
                previousValue: kd
              })
            }
          }
        }
        od.addRef(pd, ld, Qd !== Wd || Jd === Nd.DELETE_AND_ADD && Qd === Wd)
      }
      var Ld;
      return ld
    }
    const Hk = function(dd, Jd, kd, pd, Nd) {
        const Wd = Jd[kd.offset++],
          Pd = pd.constructor[Symbol.metadata],
          Zd = Wd >> 6 << 6,
          gd = Wd % (Zd || 255),
          Cd = Pd[gd];
        if (void 0 === Cd) return console.warn("@colyseus/schema: field not defined at", {
          index: gd,
          ref: pd.constructor.name,
          metadata: Pd
        }), -1;
        const Kd = !0 === Cd.deprecated,
          od = Kd ? void 0 : pd[ld](gd),
          Qd = zk(dd, Zd, pd, gd, od, Cd.type, Jd, kd, Nd);
        Kd || (null !== Qd && void 0 !== Qd && (pd[Cd.name] = Qd), od !== Qd && Nd?.push({
          ref: pd,
          refId: dd.currentRefId,
          op: Zd,
          field: Cd.name,
          value: Qd,
          previousValue: od
        }))
      },
      wk = function(dd, Jd, kd, pd, Wd) {
        const Pd = pd[Rd] ?? pd,
          Zd = Jd[kd.offset++];
        if (Zd === Nd.CLEAR) return dd.removeChildRefs(Pd, Wd), void Pd.clear();
        const gd = vJ.number(Jd, kd),
          Cd = Pd[ed],
          Kd = Pd.constructor.COLLECTION_KIND;
        let od;
        (Zd & Nd.ADD) === Nd.ADD ? Kd === hk ? (od = vJ.string(Jd, kd), Pd.setIndex(gd, od)) : od = gd : od = Pd.getIndex(gd);
        const Qd = Pd[ld](gd),
          Ld = zk(dd, Zd, pd, gd, Qd, Cd, Jd, kd, Wd);
        if (null !== dd.resyncVisited && Tk(dd, pd, Zd, od, Qd, Ld, Wd), null !== Ld && void 0 !== Ld) switch (Kd) {
          case hk:
            Pd.$items.set(od, Ld);
            break;
          case rk:
            Pd.$setAt(gd, Ld, null !== dd.resyncVisited && Zd === Nd.ADD ? Nd.REPLACE : Zd);
            break;
          case uk:
          case tk:
          case Vk:
            Pd.$items.has(gd) || (Pd.$items.set(gd, Ld), "number" === typeof Pd.$refId && gd >= Pd.$refId && (Pd.$refId = gd + 1));
            break;
          default:
            console.warn(`@colyseus/schema: missing COLLECTION_KIND on ${Pd.constructor?.name} \u2014 item at index ${gd} was not stored.`)
        }
        Qd !== Ld && Wd?.push({
          ref: pd,
          refId: dd.currentRefId,
          op: Zd,
          dynamicIndex: od,
          value: Ld,
          previousValue: Qd
        })
      },
      Ak = function(dd, Jd, kd, pd, Wd) {
        const Pd = pd[Rd] ?? pd;
        let Zd, gd = Jd[kd.offset++];
        if (gd === Nd.CLEAR) return dd.removeChildRefs(Pd, Wd), void Pd.clear();
        if (gd === Nd.REVERSE) return void Pd.items.reverse();
        if (gd === Nd.DELETE_BY_REFID) {
          const gd = vJ.number(Jd, kd),
            Cd = dd.root.refs.get(gd);
          if (void 0 === Cd) return;
          if (dd.root.removeRef(gd), Zd = Pd.findIndex((dd => dd === Cd)), -1 === Zd) return;
          return Pd[Qd](Zd), void Wd?.push({
            ref: pd,
            refId: dd.currentRefId,
            op: Nd.DELETE,
            dynamicIndex: Zd,
            value: void 0,
            previousValue: Cd
          })
        }
        if (gd === Nd.ADD_BY_REFID) {
          const pd = vJ.number(Jd, kd),
            Nd = dd.root.refs.get(pd);
          Nd && (Zd = Pd.findIndex((dd => dd === Nd))), -1 !== Zd && void 0 !== Zd || (Zd = Pd.length)
        } else Zd = vJ.number(Jd, kd);
        const Cd = Pd[ed];
        let Kd = Zd;
        const od = Pd.items[Zd],
          ld = zk(dd, gd, pd, Zd, od, Cd, Jd, kd, Wd);
        null !== dd.resyncVisited && Tk(dd, pd, gd, Zd, od, ld, Wd), null !== ld && void 0 !== ld && ld !== od && Pd.$setAt(Zd, ld, null !== dd.resyncVisited && gd === Nd.ADD ? Nd.REPLACE : gd), od !== ld && Wd?.push({
          ref: pd,
          refId: dd.currentRefId,
          op: gd,
          dynamicIndex: Kd,
          value: ld,
          previousValue: od
        })
      };
    class dp extends Error {}

    function Jp(dd, Jd, kd, pd) {
      if (!(dd instanceof Jd)) throw new dp(`a '${Jd.name}' was expected, but '${dd&&dd.constructor.name}' was provided in ${kd.constructor.name}#${pd}`)
    }
    const kp = (dd, Jd) => {
        const kd = dd.toString(),
          pd = Jd.toString();
        return kd < pd ? -1 : kd > pd ? 1 : 0
      },
      pp = {
        get: (dd, Jd) => "symbol" === typeof Jd || isNaN(Jd) ? Reflect.get(dd, Jd) : dd.items[Jd],
        set: (dd, Jd, kd) => {
          if ("symbol" !== typeof Jd && !isNaN(Jd)) {
            if (void 0 === kd || null === kd) dd.$deleteAt(Jd);
            else {
              let pd;
              if (kd[Od]) {
                Jp(kd, dd[ed], dd, Jd);
                const Wd = dd.items[Jd];
                dd.isMovingItems ? (pd = dd.$wireIndex(Number(Jd)), void 0 !== Wd ? kd[Od].isNew ? dd[Od].indexedOperation(pd, Nd.MOVE_AND_ADD) : (dd[Od].getChange(pd) & Nd.DELETE) === Nd.DELETE ? dd[Od].indexedOperation(pd, Nd.DELETE_AND_MOVE) : dd[Od].indexedOperation(pd, Nd.MOVE) : kd[Od].isNew && dd[Od].indexedOperation(pd, Nd.ADD), kd[Od].setParent(dd, dd[Od].root, pd)) : pd = dd.$changeAt(Number(Jd), kd), void 0 !== Wd && Wd[Od].root?.remove(Wd[Od])
              } else pd = dd.$changeAt(Number(Jd), kd);
              dd.items[Jd] = kd, void 0 !== pd && (dd.tmpItems[pd] = kd)
            }
            return !0
          }
          return Reflect.set(dd, Jd, kd)
        },
        deleteProperty: (dd, Jd) => ("number" === typeof Jd ? dd.$deleteAt(Jd) : delete dd[Jd], !0),
        has: (dd, Jd) => "symbol" === typeof Jd || isNaN(Number(Jd)) ? Reflect.has(dd, Jd) : Reflect.has(dd.items, Jd)
      };
    class Np {
      [Od];
      [Zd];
      [Rd];
      [ed];
      items = [];
      tmpItems = [];
      deletedIndexes = [];
      isMovingItems = !1;
      _needsCompaction = !1;
      static[Cd] = Dk;
      static[Kd] = Ak;
      static COLLECTION_KIND = rk;
      static[od](dd, Jd, kd) {
        if (!kd) return !0;
        const pd = dd[Rd] ?? dd;
        return "string" === typeof pd[ed] || kd.isChangeTreeVisible(pd.tmpItems[Jd]?.[Od])
      }
      static is(dd) {
        return Array.isArray(dd) || void 0 !== dd.array
      }
      static from(dd) {
        return new Np(...Array.from(dd))
      }
      constructor() {
        this[ed] = void 0, this[Rd] = this;
        const dd = new Proxy(this, pp);
        return Object.defineProperty(this, Od, {
          value: new bk(dd, this),
          enumerable: !1,
          writable: !0
        }), arguments.length > 0 && this.push(...arguments), dd
      }
      static initializeForDecoder() {
        const dd = Object.create(Np.prototype);
        dd.items = [], dd.isMovingItems = !1, dd._needsCompaction = !1, dd[ed] = void 0, dd[Rd] = dd;
        const Jd = new Proxy(dd, pp);
        return jk(dd, Jd), Jd
      }
      set length(dd) {
        0 === dd ? this.clear() : dd < this.items.length ? this.splice(dd, this.length - dd) : console.warn("ArraySchema: can't set .length to a higher value than its length.")
      }
      get length() {
        return this.items.length
      }
      pauseTracking() {
        this[Od].pause()
      }
      resumeTracking() {
        this[Od].resume()
      }
      untracked(dd) {
        return this[Od].untracked(dd)
      }
      get isTrackingPaused() {
        return this[Od].paused
      }
      push() {
        const dd = this[Rd],
          Jd = dd.items,
          kd = dd.tmpItems,
          pd = dd[Od],
          Wd = dd[ed];
        let Pd = kd.length;
        for (let Zd = 0, gd = arguments.length; Zd < gd; Zd++, Pd++) {
          const gd = Zd < 0 || arguments.length <= Zd ? void 0 : arguments[Zd];
          if (void 0 === gd || null === gd) return;
          "object" === typeof gd && Wd && Jp(gd, Wd, dd, Zd), pd.indexedOperation(Pd, Nd.ADD), Jd.push(gd), kd.push(gd), gd[Od]?.setParent(this, pd.root, Pd)
        }
        return Pd
      }
      pop() {
        const dd = this[Rd],
          Jd = dd.tmpItems,
          kd = dd.deletedIndexes;
        let pd = -1;
        for (let Wd = Jd.length - 1; Wd >= 0; Wd--)
          if (!0 !== kd[Wd]) {
            pd = Wd;
            break
          } if (pd < 0) return;
        const Nd = dd.$isUnsentAdd(pd);
        return dd[Od].delete(pd), Nd ? dd.$cancelAdd(pd) : kd[pd] = !0, dd.items.pop()
      }
      at(dd) {
        return dd < 0 && (dd += this.length), this.items[dd]
      }
      $wireIndex(dd) {
        const Jd = this.deletedIndexes;
        if (0 === Jd.length) return dd;
        const kd = this.tmpItems;
        let pd = 0;
        for (let Nd = 0; Nd < kd.length; Nd++)
          if (!0 !== Jd[Nd]) {
            if (pd === dd) return Nd;
            pd++
          } return kd.length + (dd - pd)
      }
      $isUnsentAdd(dd) {
        const Jd = this[Od];
        return 0 === (576 & Jd.flags) && !Jd.paused && "string" !== typeof this[ed] && Jd.operationAt(dd) === Nd.ADD
      }
      $cancelAdd(dd) {
        let Jd = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        const kd = this[Od],
          pd = this.tmpItems[dd];
        this.tmpItems.splice(dd, 1), this.deletedIndexes.length > 0 && this.deletedIndexes.splice(dd, 1), kd.removeAt(dd, 1);
        const Nd = pd?.[Od];
        void 0 !== Nd && void 0 === Nd.root && Nd.removeParent(this), Jd && this.$reindexChildren(dd)
      }
      $reindexChildren(dd, Jd) {
        if (!this[Od].hasFilteredFields) return;
        if ("string" === typeof this[ed]) return;
        const kd = this.tmpItems,
          pd = kd.length;
        if (void 0 !== Jd)
          for (; dd < pd && kd[dd] === Jd[dd];) dd++;
        for (let Nd = dd; Nd < pd; Nd++) kd[Nd]?.[Od]?.setParentIndex(this, Nd)
      }
      $changeAt(dd, Jd) {
        if (void 0 === Jd || null === Jd) return void console.error("ArraySchema items cannot be null nor undefined; Use `splice(index, 1)` instead.");
        if (this.items[dd] === Jd) return;
        const kd = void 0 !== this.items[dd] ? "object" === typeof Jd ? Nd.DELETE_AND_ADD : Nd.REPLACE : Nd.ADD,
          pd = this.$wireIndex(dd),
          Wd = this[Od];
        return Wd.change(pd, kd), Jd[Od]?.setParent(this, Wd.root, pd), pd
      }
      $deleteAt(dd, Jd) {
        this[Od].delete(this.$wireIndex(dd), Jd)
      }
      $setAt(dd, Jd, kd) {
        kd === Nd.ADD && void 0 !== this.items[dd] ? this.items.splice(dd, 0, Jd) : kd === Nd.DELETE_AND_MOVE ? (this.items.splice(dd, 1), this.items[dd] = Jd) : (dd > this.items.length && (this._needsCompaction = !0), this.items[dd] = Jd)
      }
      clear() {
        const dd = this[Rd];
        if (0 === dd.items.length) return;
        const Jd = dd[Od];
        Jd.forEachChild(((dd, kd) => {
          Jd.root?.remove(dd)
        })), Jd.discard(), Jd.operation(Nd.CLEAR), dd.items.length = 0, dd.tmpItems.length = 0
      } [Gd]() {
        const dd = this[Rd] ?? this,
          Jd = dd[Od];
        if (Jd.isStreamCollection) throw new Error("@colyseus/schema: cannot reset a streamed ArraySchema (pooling not supported).");
        const kd = dd.items;
        for (let pd = 0; pd < kd.length; pd++) kd[pd]?.[Gd]?.();
        dd.items.length = 0, dd.tmpItems.length = 0, dd.deletedIndexes.length = 0, Jd.recycle(), dd[Zd] = void 0
      }
      concat() {
        return new Np(...this.items.concat(...arguments))
      }
      join(dd) {
        return this.items.join(dd)
      }
      reverse() {
        const dd = this[Rd],
          Jd = dd[Od];
        if (Jd.has() || dd.deletedIndexes.length > 0) {
          const Jd = dd.items.slice().reverse();
          return this.clear(), this.push(...Jd), this
        }
        return Jd.operation(Nd.REVERSE), dd.items.reverse(), dd.tmpItems.reverse(), dd.$reindexChildren(0), this
      }
      shift() {
        const dd = this[Rd],
          Jd = dd.items;
        if (0 === Jd.length) return;
        const kd = dd[Od],
          pd = dd.deletedIndexes;
        let Wd = 0;
        for (; !0 === pd[Wd];) Wd++;
        const Pd = dd.$isUnsentAdd(Wd);
        return kd.delete(Wd, Nd.DELETE), Pd ? dd.$cancelAdd(Wd) : pd[Wd] = !0, Jd.shift()
      }
      slice(dd, Jd) {
        const kd = new Np;
        return kd.push(...this.items.slice(dd, Jd)), kd
      }
      sort() {
        let dd = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : kp;
        const Jd = this[Rd];
        Jd.isMovingItems = !0;
        const kd = Jd[Od];
        return Jd.items.sort(dd).forEach(((dd, Jd) => kd.change(Jd, Nd.REPLACE))), Jd.tmpItems.sort(dd), Jd.$reindexChildren(0), Jd.isMovingItems = !1, this
      }
      splice(dd, Jd) {
        const kd = this[Rd],
          pd = kd[Od],
          Wd = kd.items,
          Pd = kd.tmpItems,
          Zd = kd.deletedIndexes,
          gd = Wd.length,
          Cd = Pd.length;
        for (var Kd = arguments.length, od = new Array(Kd > 2 ? Kd - 2 : 0), ld = 2; ld < Kd; ld++) od[ld - 2] = arguments[ld];
        const Qd = od.length,
          Ld = [];
        for (let Nd = 0; Nd < Cd; Nd++) !0 !== Zd[Nd] && Ld.push(Nd);
        let ed;
        if (gd > dd) {
          void 0 === Jd && (Jd = gd - dd);
          for (let Wd = dd; Wd < dd + Jd; Wd++) {
            const dd = Ld[Wd],
              Jd = kd.$isUnsentAdd(dd);
            pd.delete(dd, Nd.DELETE), Jd ? (ed ??= []).push(dd) : Zd[dd] = !0
          }
        } else Jd = 0;
        if (Qd > 0) {
          const Wd = Ld[dd] ?? gd,
            Cd = Math.min(Qd, Jd);
          for (let dd = 0; dd < Cd; dd++) {
            const Jd = Wd + dd;
            let kd;
            const gd = void 0 !== ed ? ed.indexOf(Jd) : -1; - 1 !== gd ? (ed.splice(gd, 1), kd = Nd.ADD) : kd = Zd[Jd] ? Nd.DELETE_AND_ADD : Nd.ADD, pd.indexedOperation(Jd, kd), Pd[Jd] = od[dd], Zd[Jd] = !1, od[dd][Od]?.setParent(this, pd.root, Jd)
          }
          const Kd = Qd - Cd;
          if (Kd > 0) {
            const dd = Wd + Cd;
            pd.insertAt(dd, Kd);
            for (let Jd = 0; Jd < Kd; Jd++) od[Cd + Jd][Od]?.setParent(this, pd.root, dd + Jd);
            Zd.length > 0 && Zd.splice(dd, 0, ...new Array(Kd).fill(!1)), Pd.splice(dd, 0, ...od.slice(Cd)), kd.$reindexChildren(dd + Kd)
          }
        }
        if (void 0 !== ed && ed.length > 0) {
          for (let dd = ed.length - 1; dd >= 0; dd--) kd.$cancelAdd(ed[dd], !1);
          kd.$reindexChildren(ed[0])
        }
        return pd.root?.enqueueChangeTree(pd), Wd.splice(dd, Jd, ...od)
      }
      unshift() {
        const dd = this[Rd],
          Jd = dd[Od];
        Jd.unshift(arguments.length);
        for (let pd = 0; pd < arguments.length; pd++)(pd < 0 || arguments.length <= pd ? void 0 : arguments[pd])?.[Od]?.setParent(this, Jd.root, pd);
        const kd = dd.deletedIndexes;
        return kd.length > 0 && kd.unshift(...new Array(arguments.length).fill(!1)), dd.tmpItems.unshift(...arguments), dd.$reindexChildren(arguments.length), dd.items.unshift(...arguments)
      }
      indexOf(dd, Jd) {
        return this.items.indexOf(dd, Jd)
      }
      lastIndexOf(dd) {
        let Jd = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.length - 1;
        return this.items.lastIndexOf(dd, Jd)
      }
      every(dd, Jd) {
        return this.items.every(dd, Jd)
      }
      some(dd, Jd) {
        return this.items.some(dd, Jd)
      }
      forEach(dd, Jd) {
        return this.items.forEach(dd, Jd)
      }
      map(dd, Jd) {
        return this.items.map(dd, Jd)
      }
      filter(dd, Jd) {
        return this.items.filter(dd, Jd)
      }
      reduce(dd, Jd) {
        return this.items.reduce.apply(this.items, arguments)
      }
      reduceRight(dd, Jd) {
        return this.items.reduceRight.apply(this.items, arguments)
      }
      find(dd, Jd) {
        return this.items.find(dd, Jd)
      }
      findIndex(dd, Jd) {
        return this.items.findIndex(dd, Jd)
      }
      fill(dd, Jd, kd) {
        throw new Error("ArraySchema#fill() not implemented")
      }
      copyWithin(dd, Jd, kd) {
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
        return Np
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
      includes(dd, Jd) {
        return this.items.includes(dd, Jd)
      }
      flatMap(dd, Jd) {
        throw new Error("ArraySchema#flatMap() is not supported.")
      }
      flat(dd) {
        throw new Error("ArraySchema#flat() is not supported.")
      }
      findLast() {
        return this.items.findLast.apply(this.items, arguments)
      }
      findLastIndex() {
        for (var dd = arguments.length, Jd = new Array(dd), kd = 0; kd < dd; kd++) Jd[kd] = arguments[kd];
        return this.items.findLastIndex.apply(this.items, arguments)
      }
      with(dd, Jd) {
        const kd = this.items.slice();
        return dd < 0 && (dd += this.length), kd[dd] = Jd, new Np(...kd)
      }
      toReversed() {
        return this.items.slice().reverse()
      }
      toSorted(dd) {
        return this.items.slice().sort(dd)
      }
      toSpliced(dd, Jd) {
        for (var kd = arguments.length, pd = new Array(kd > 2 ? kd - 2 : 0), Nd = 2; Nd < kd; Nd++) pd[Nd - 2] = arguments[Nd];
        const Wd = this.items.slice();
        return Wd.splice.apply(Wd, arguments), Wd
      }
      shuffle() {
        return this.move((dd => {
          let Jd = this.items.length;
          for (; 0 != Jd;) {
            let dd = Math.floor(Math.random() * Jd);
            Jd--, [this[Jd], this[dd]] = [this[dd], this[Jd]]
          }
        }))
      }
      move(dd) {
        return this.isMovingItems = !0, dd(this), this.isMovingItems = !1, this
      } [ld](dd) {
        let Jd = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        const kd = this[Rd] ?? this;
        return Jd || kd.deletedIndexes[dd] ? kd.items[dd] : kd.tmpItems[dd] || kd.items[dd]
      } [Qd](dd) {
        const Jd = this[Rd] ?? this;
        Jd.items[dd] = void 0, Jd._needsCompaction = !0
      } [Id]() {
        const dd = this.tmpItems;
        this.tmpItems = this.items.slice(), this.deletedIndexes.length > 0 && (this.$reindexChildren(0, dd), this.deletedIndexes.length = 0)
      } [vd]() {
        const dd = this[Rd] ?? this;
        dd._needsCompaction && (dd._needsCompaction = !1, dd.items = dd.items.filter((dd => void 0 !== dd)))
      } [Ld](dd, Jd, kd) {
        const pd = this[Rd] ?? this,
          Nd = pd.items;
        let Wd = !1;
        for (let Pd = 0; Pd < Nd.length; Pd++) {
          const Zd = Nd[Pd];
          dd.has(Pd) ? kd(Zd) : (Wd = !0, Jd(Zd, Pd), pd[Qd](Pd))
        }
        Wd && pd[vd]()
      }
      toArray() {
        return this.items.slice(0)
      }
      toJSON() {
        return this.toArray().map((dd => "function" === typeof dd.toJSON ? dd.toJSON() : dd))
      }
      clone(dd) {
        let Jd;
        return dd ? (Jd = new Np, Jd.push(...this.items)) : Jd = new Np(...this.map((dd => dd[Od] ? dd.clone() : dd))), Jd
      }
    }
    BJ("array", {
      constructor: Np
    });
    class Wp {
      keyByIndex = new Map;
      indexByKey = Object.create(null);
      nextIndex = 0;
      snapshots;
      indexOf(dd) {
        const Jd = this.indexByKey[dd];
        return void 0 === Jd ? void 0 : Jd
      }
      assign(dd) {
        const Jd = this.nextIndex++;
        return this.indexByKey[dd] = Jd, this.keyByIndex.set(Jd, dd), Jd
      }
      snapshot(dd, Jd) {
        (this.snapshots ??= new Map).set(dd, Jd)
      }
      forgetSnapshot(dd) {
        this.snapshots?.delete(dd)
      }
      snapshotAt(dd) {
        return this.snapshots?.get(dd)
      }
      setIndex(dd, Jd) {
        this.keyByIndex.set(dd, Jd), this.indexByKey[Jd] = dd
      }
      keyOf(dd) {
        return this.keyByIndex.get(dd)
      }
      cleanupAfterEncode() {
        if (void 0 !== this.snapshots) {
          for (const [dd] of this.snapshots) {
            const Jd = this.keyByIndex.get(dd);
            void 0 !== Jd && (delete this.indexByKey[Jd], this.keyByIndex.delete(dd))
          }
          this.snapshots.clear()
        }
      }
      reset() {
        this.indexByKey = Object.create(null), this.keyByIndex.clear(), this.snapshots?.clear(), this.nextIndex = 0
      }
    }
    class Pp {
      [Od];
      [Zd];
      childType;
      [ed];
      $items = new Map;
      journal = new Wp;
      _stream;
      get maxPerTick() {
        return this._stream?.maxPerTick ?? 32
      }
      set maxPerTick(dd) {
        (this._stream ??= aJ()).maxPerTick = dd
      }
      get priority() {
        return this._stream?.priority
      }
      set priority(dd) {
        (this._stream ??= aJ()).priority = dd
      }
      get $indexes() {
        return this.journal.keyByIndex
      }
      get _collectionIndexes() {
        return this.journal.indexByKey
      }
      static[Cd] = nk;
      static[Kd] = wk;
      static COLLECTION_KIND = hk;
      static[od](dd, Jd, kd) {
        if (!kd || "string" === typeof dd[ed]) return !0;
        const pd = dd[ld](Jd) ?? dd.journal.snapshotAt(Jd);
        return kd.isChangeTreeVisible(pd[Od])
      }
      static is(dd) {
        return void 0 !== dd.map
      }
      constructor(dd) {
        if (Object.defineProperty(this, Od, {
            value: new bk(this),
            enumerable: !1,
            writable: !0
          }), this[ed] = void 0, dd)
          if (dd instanceof Map || dd instanceof Pp) dd.forEach(((dd, Jd) => this.set(Jd, dd)));
          else
            for (const Jd in dd) this.set(Jd, dd[Jd])
      }
      static initializeForDecoder() {
        const dd = Object.create(Pp.prototype);
        return dd.$items = new Map, dd.journal = new Wp, dd[ed] = void 0, jk(dd), dd
      } [Symbol.iterator]() {
        return this.$items[Symbol.iterator]()
      }
      get[Symbol.toStringTag]() {
        return this.$items[Symbol.toStringTag]
      }
      static get[Symbol.species]() {
        return Pp
      }
      set(dd, Jd) {
        if (void 0 === Jd || null === Jd) throw new Error(`MapSchema#set('${dd}', ${Jd}): trying to set ${Jd} value on '${dd}'.`);
        "object" === typeof Jd && this[ed] && Jp(Jd, this[ed], this, dd), dd = dd.toString();
        const kd = this[Od],
          pd = void 0 !== Jd[Od],
          Wd = this.journal;
        let Pd, Zd = Wd.indexOf(dd);
        if (void 0 !== Zd) {
          Pd = Nd.REPLACE;
          const kd = this.$items.get(dd);
          if (kd === Jd) return;
          pd && (Pd = Nd.DELETE_AND_ADD, void 0 !== kd && kd[Od].root?.remove(kd[Od])), void 0 !== Wd.snapshotAt(Zd) && Wd.forgetSnapshot(Zd)
        } else Zd = Wd.assign(dd), Pd = Nd.ADD;
        return this.$items.set(dd, Jd), Pd === Nd.ADD && kd.isStreamCollection ? void 0 !== kd.root && FJ(this, kd.root, Zd) : kd.change(Zd, Pd), pd && Jd[Od].setParent(this, kd.root, Zd), this
      }
      get(dd) {
        return this.$items.get(dd)
      }
      getOrInsert(dd, Jd) {
        return this.$items.has(dd) ? this.$items.get(dd) : (this.set(dd, Jd), Jd)
      }
      getOrInsertComputed(dd, Jd) {
        if (this.$items.has(dd)) return this.$items.get(dd);
        const kd = Jd(dd);
        return this.set(dd, kd), kd
      }
      delete(dd) {
        if (!this.$items.has(dd)) return !1;
        const Jd = this.journal.indexOf(dd),
          kd = this.$items.get(dd),
          pd = this[Od];
        if (pd.isStreamCollection) {
          const Nd = pd.root;
          let Wd = !1;
          return void 0 !== Nd && (Wd = YJ(this, Nd, this[Zd], Jd)), void 0 !== kd?.[Od] && Nd?.remove(kd[Od]), this.$items.delete(dd), Wd || this.journal.snapshot(Jd, kd), !0
        }
        return this.journal.snapshot(Jd, kd), pd.delete(Jd), this.$items.delete(dd)
      }
      clear() {
        const dd = this[Od];
        dd.discard(), dd.forEachChild(((Jd, kd) => {
          dd.root?.remove(Jd)
        })), this.journal.reset(), this.$items.clear(), dd.operation(Nd.CLEAR)
      } [Gd]() {
        const dd = this[Od];
        if (dd.isStreamCollection) throw new Error("@colyseus/schema: cannot reset a streamed MapSchema (pooling not supported).");
        this.$items.forEach((dd => dd?.[Gd]?.())), this.$items.clear(), this.journal.reset(), dd.recycle(), this[Zd] = void 0
      }
      has(dd) {
        return this.$items.has(dd)
      }
      forEach(dd) {
        this.$items.forEach(dd)
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
        this[Od].pause()
      }
      resumeTracking() {
        this[Od].resume()
      }
      untracked(dd) {
        return this[Od].untracked(dd)
      }
      get isTrackingPaused() {
        return this[Od].paused
      }
      setIndex(dd, Jd) {
        this.journal.setIndex(dd, Jd)
      }
      getIndex(dd) {
        return this.journal.keyOf(dd)
      } [ld](dd) {
        const Jd = this.journal.keyOf(dd);
        return void 0 !== Jd ? this.$items.get(Jd) : void 0
      } [Qd](dd) {
        const Jd = this.journal.keyOf(dd);
        void 0 !== Jd && (this.$items.delete(Jd), this.journal.keyByIndex.delete(dd))
      } [Ld](dd, Jd, kd) {
        let pd = null;
        if (this.$items.forEach(((Nd, Wd) => {
            dd.has(Wd) ? kd(Nd) : ((pd ??= new Set).add(Wd), Jd(Nd, Wd))
          })), null !== pd) {
          pd.forEach((dd => {
            this.$items.delete(dd), delete this.journal.indexByKey[dd]
          }));
          const dd = [];
          this.journal.keyByIndex.forEach(((Jd, kd) => {
            pd.has(Jd) && dd.push(kd)
          }));
          for (let Jd = 0; Jd < dd.length; Jd++) this.journal.keyByIndex.delete(dd[Jd])
        }
      } [Id]() {
        this.journal.cleanupAfterEncode()
      }
      _dropView(dd) {
        jJ(this, dd)
      }
      _unregister() {}
      toJSON() {
        return Object.fromEntries(Array.from(this, (dd => {
          let [Jd, kd] = dd;
          return [Jd, "function" === typeof kd.toJSON ? kd.toJSON() : kd]
        })))
      }
      clone(dd) {
        let Jd;
        return dd ? Jd = Object.assign(new Pp, this) : (Jd = new Pp, this.forEach(((dd, kd) => {
          dd[Od] ? Jd.set(kd, dd.clone()) : Jd.set(kd, dd)
        }))), Jd
      }
    }
    BJ("map", {
      constructor: Pp
    });
    class Zp {
      [Od];
      [Zd];
      [ed];
      $items = new Map;
      deletedItems = {};
      $refId = 0;
      _stream;
      get maxPerTick() {
        return this._stream?.maxPerTick ?? 32
      }
      set maxPerTick(dd) {
        (this._stream ??= aJ()).maxPerTick = dd
      }
      get priority() {
        return this._stream?.priority
      }
      set priority(dd) {
        (this._stream ??= aJ()).priority = dd
      }
      static[Cd] = Uk;
      static[Kd] = wk;
      static COLLECTION_KIND = tk;
      static[od](dd, Jd, kd) {
        return !kd || "string" === typeof dd[ed] || kd.isChangeTreeVisible((dd[ld](Jd) ?? dd.deletedItems[Jd])[Od])
      }
      static is(dd) {
        return void 0 !== dd.collection
      }
      constructor(dd) {
        Object.defineProperty(this, Od, {
          value: new bk(this),
          enumerable: !1,
          writable: !0
        }), this[ed] = void 0, dd && dd.forEach((dd => this.add(dd)))
      }
      static initializeForDecoder() {
        const dd = Object.create(Zp.prototype);
        return dd.$items = new Map, dd.deletedItems = {}, dd.$refId = 0, dd[ed] = void 0, jk(dd), dd
      }
      add(dd) {
        const Jd = this.$refId++,
          kd = this[Od];
        return this.$items.set(Jd, dd), kd.isStreamCollection ? void 0 !== kd.root && FJ(this, kd.root, Jd) : kd.change(Jd), void 0 !== dd[Od] && dd[Od].setParent(this, kd.root, Jd), Jd
      }
      at(dd) {
        const Jd = Array.from(this.$items.keys())[dd];
        return this.$items.get(Jd)
      }
      entries() {
        return this.$items.entries()
      }
      delete(dd) {
        const Jd = this.$items.entries();
        let kd, pd;
        for (;
          (pd = Jd.next()) && !pd.done;)
          if (dd === pd.value[1]) {
            kd = pd.value[0];
            break
          } if (void 0 === kd) return !1;
        const Nd = this[Od];
        if (Nd.isStreamCollection) {
          const dd = Nd.root,
            Jd = this.$items.get(kd);
          return void 0 !== dd && YJ(this, dd, this[Zd], kd), void 0 !== Jd?.[Od] && dd?.remove(Jd[Od]), this.deletedItems[kd] = Jd, this.$items.delete(kd)
        }
        return this.deletedItems[kd] = Nd.delete(kd), this.$items.delete(kd)
      }
      clear() {
        const dd = this[Od];
        dd.discard(), dd.forEachChild(((Jd, kd) => {
          dd.root?.remove(Jd)
        })), this.$items.clear(), dd.operation(Nd.CLEAR)
      } [Gd]() {
        const dd = this[Od];
        if (dd.isStreamCollection) throw new Error("@colyseus/schema: cannot reset a streamed CollectionSchema (pooling not supported).");
        this.$items.forEach((dd => dd?.[Gd]?.())), this.$items.clear(), this.deletedItems = {}, this.$refId = 0, dd.recycle(), this[Zd] = void 0
      }
      has(dd) {
        return Array.from(this.$items.values()).some((Jd => Jd === dd))
      }
      forEach(dd) {
        this.$items.forEach(((Jd, kd, pd) => dd(Jd, kd, this)))
      }
      values() {
        return this.$items.values()
      }
      get size() {
        return this.$items.size
      }
      pauseTracking() {
        this[Od].pause()
      }
      resumeTracking() {
        this[Od].resume()
      }
      untracked(dd) {
        return this[Od].untracked(dd)
      }
      get isTrackingPaused() {
        return this[Od].paused
      } [Symbol.iterator]() {
        return this.$items.values()
      }
      setIndex(dd, Jd) {}
      getIndex(dd) {
        return dd
      } [ld](dd) {
        return this.$items.get(dd)
      } [Qd](dd) {
        this.$items.delete(dd)
      } [Ld](dd, Jd, kd) {
        let pd = null;
        if (this.$items.forEach(((Nd, Wd) => {
            dd.has(Wd) ? kd(Nd) : ((pd ??= []).push(Wd), Jd(Nd, Wd))
          })), null !== pd)
          for (let Nd = 0; Nd < pd.length; Nd++) this[Qd](pd[Nd])
      } [Id]() {
        for (const dd in this.deletedItems) delete this.deletedItems[dd]
      }
      _dropView(dd) {
        jJ(this, dd)
      }
      _unregister() {}
      toArray() {
        return Array.from(this.$items.values())
      }
      toJSON() {
        const dd = [];
        return this.forEach(((Jd, kd) => {
          dd.push("function" === typeof Jd.toJSON ? Jd.toJSON() : Jd)
        })), dd
      }
      clone(dd) {
        let Jd;
        return dd ? Jd = Object.assign(new Zp, this) : (Jd = new Zp, this.forEach((dd => {
          dd[Od] ? Jd.add(dd.clone()) : Jd.add(dd)
        }))), Jd
      }
    }
    BJ("collection", {
      constructor: Zp
    });
    class gp {
      [Od];
      [Zd];
      [ed];
      $items = new Map;
      deletedItems = {};
      $refId = 0;
      _stream;
      get maxPerTick() {
        return this._stream?.maxPerTick ?? 32
      }
      set maxPerTick(dd) {
        (this._stream ??= aJ()).maxPerTick = dd
      }
      get priority() {
        return this._stream?.priority
      }
      set priority(dd) {
        (this._stream ??= aJ()).priority = dd
      }
      static[Cd] = Uk;
      static[Kd] = wk;
      static COLLECTION_KIND = uk;
      static[od](dd, Jd, kd) {
        return !kd || "string" === typeof dd[ed] || kd.isVisible((dd[ld](Jd) ?? dd.deletedItems[Jd])[Od])
      }
      static is(dd) {
        return void 0 !== dd.set
      }
      constructor(dd) {
        Object.defineProperty(this, Od, {
          value: new bk(this),
          enumerable: !1,
          writable: !0
        }), this[ed] = void 0, dd && dd.forEach((dd => this.add(dd)))
      }
      static initializeForDecoder() {
        const dd = Object.create(gp.prototype);
        return dd.$items = new Map, dd.deletedItems = {}, dd.$refId = 0, dd[ed] = void 0, jk(dd), dd
      }
      add(dd) {
        if (this.has(dd)) return !1;
        const Jd = this.$refId++,
          kd = this[Od];
        return this.$items.set(Jd, dd), kd.isStreamCollection ? void 0 !== kd.root && FJ(this, kd.root, Jd) : kd.change(Jd, Nd.ADD), void 0 !== dd[Od] && dd[Od].setParent(this, kd.root, Jd), Jd
      }
      entries() {
        return this.$items.entries()
      }
      delete(dd) {
        const Jd = this.$items.entries();
        let kd, pd;
        for (;
          (pd = Jd.next()) && !pd.done;)
          if (dd === pd.value[1]) {
            kd = pd.value[0];
            break
          } if (void 0 === kd) return !1;
        const Nd = this[Od];
        if (Nd.isStreamCollection) {
          const dd = Nd.root,
            Jd = this.$items.get(kd);
          return void 0 !== dd && YJ(this, dd, this[Zd], kd), void 0 !== Jd?.[Od] && dd?.remove(Jd[Od]), this.deletedItems[kd] = Jd, this.$items.delete(kd)
        }
        return this.deletedItems[kd] = Nd.delete(kd), this.$items.delete(kd)
      }
      clear() {
        const dd = this[Od];
        dd.discard(), this.$items.clear(), dd.operation(Nd.CLEAR)
      } [Gd]() {
        const dd = this[Od];
        if (dd.isStreamCollection) throw new Error("@colyseus/schema: cannot reset a streamed SetSchema (pooling not supported).");
        this.$items.forEach((dd => dd?.[Gd]?.())), this.$items.clear(), this.deletedItems = {}, this.$refId = 0, dd.recycle(), this[Zd] = void 0
      }
      has(dd) {
        const Jd = this.$items.values();
        let kd, pd = !1;
        for (;
          (kd = Jd.next()) && !kd.done;)
          if (dd === kd.value) {
            pd = !0;
            break
          } return pd
      }
      forEach(dd) {
        this.$items.forEach(((Jd, kd, pd) => dd(Jd, kd, this)))
      }
      values() {
        return this.$items.values()
      }
      get size() {
        return this.$items.size
      }
      pauseTracking() {
        this[Od].pause()
      }
      resumeTracking() {
        this[Od].resume()
      }
      untracked(dd) {
        return this[Od].untracked(dd)
      }
      get isTrackingPaused() {
        return this[Od].paused
      } [Symbol.iterator]() {
        return this.$items.values()
      }
      setIndex(dd, Jd) {}
      getIndex(dd) {
        return dd
      } [ld](dd) {
        return this.$items.get(dd)
      } [Qd](dd) {
        this.$items.delete(dd)
      } [Ld](dd, Jd, kd) {
        let pd = null;
        if (this.$items.forEach(((Nd, Wd) => {
            dd.has(Wd) ? kd(Nd) : ((pd ??= []).push(Wd), Jd(Nd, Wd))
          })), null !== pd)
          for (let Nd = 0; Nd < pd.length; Nd++) this[Qd](pd[Nd])
      } [Id]() {
        for (const dd in this.deletedItems) delete this.deletedItems[dd]
      }
      _dropView(dd) {
        jJ(this, dd)
      }
      _unregister() {}
      toArray() {
        return Array.from(this.$items.values())
      }
      toJSON() {
        const dd = [];
        return this.forEach(((Jd, kd) => {
          dd.push("function" === typeof Jd.toJSON ? Jd.toJSON() : Jd)
        })), dd
      }
      clone(dd) {
        let Jd;
        return dd ? Jd = Object.assign(new gp, this) : (Jd = new gp, this.forEach((dd => {
          dd[Od] ? Jd.add(dd.clone()) : Jd.add(dd)
        }))), Jd
      }
    }
    BJ("set", {
      constructor: gp
    });
    class Cp {
      [Od];
      [Zd];
      [ed];
      $items = new Map;
      $nextPosition = 0;
      _itemIndex = new Map;
      _stream;
      get maxPerTick() {
        return this._stream?.maxPerTick ?? 32
      }
      set maxPerTick(dd) {
        (this._stream ??= aJ()).maxPerTick = dd
      }
      get priority() {
        return this._stream?.priority
      }
      set priority(dd) {
        (this._stream ??= aJ()).priority = dd
      }
      static $isStream = !0;
      static[Cd] = Uk;
      static[Kd] = wk;
      static COLLECTION_KIND = Vk;
      static[od](dd, Jd, kd) {
        if (!kd) return !0;
        const pd = dd[ld](Jd);
        return void 0 !== pd && kd.isVisible(pd[Od])
      }
      static is(dd) {
        return dd && void 0 !== dd.stream
      }
      constructor() {
        Object.defineProperty(this, Od, {
          value: new bk(this),
          enumerable: !1,
          writable: !0
        }), this[ed] = void 0
      }
      static initializeForDecoder() {
        const dd = Object.create(Cp.prototype);
        return dd.$items = new Map, dd.$nextPosition = 0, dd._itemIndex = new Map, dd[ed] = void 0, jk(dd), dd
      }
      add(dd) {
        if (this._itemIndex.has(dd)) return -1;
        const Jd = this.$nextPosition++;
        this.$items.set(Jd, dd), this._itemIndex.set(dd, Jd);
        const kd = this[Od].root;
        return void 0 !== dd[Od] && dd[Od].setParent(this, kd, Jd), void 0 !== kd && FJ(this, kd, Jd), Jd
      }
      remove(dd) {
        const Jd = this._itemIndex.get(dd);
        if (void 0 === Jd) return !1;
        this._itemIndex.delete(dd), this.$items.delete(Jd);
        const kd = this[Od].root;
        return void 0 !== kd && (YJ(this, kd, this[Zd], Jd), void 0 !== dd[Od] && kd.remove(dd[Od])), !0
      }
      has(dd) {
        return this._itemIndex.has(dd)
      }
      clear() {
        const dd = this[Od].root;
        if (void 0 !== dd) {
          ! function(dd, Jd, kd) {
            const pd = dd._stream;
            if (void 0 !== pd) {
              pd.broadcastPending.clear();
              for (const dd of pd.sentBroadcast) pd.broadcastDeletes.add(dd);
              pd.sentBroadcast.clear(), Jd.forEachActiveView((dd => {
                pd.pendingByView.get(dd.id)?.clear();
                const Jd = pd.sentByView.get(dd.id);
                if (void 0 !== Jd && Jd.size > 0) {
                  let pd = dd.changes.get(kd);
                  void 0 === pd && (pd = new Map, dd.changes.set(kd, pd));
                  for (const dd of Jd) pd.set(dd, Nd.DELETE);
                  Jd.clear()
                }
              }))
            }
          }(this, dd, this[Zd]);
          for (const Jd of this.$items.values()) void 0 !== Jd[Od] && dd.remove(Jd[Od])
        }
        this.$items.clear(), this._itemIndex.clear()
      }
      forEach(dd) {
        for (const [Jd, kd] of this.$items) dd(kd, Jd, this)
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
      setIndex(dd, Jd) {}
      getIndex(dd) {
        return dd
      } [ld](dd) {
        return this.$items.get(dd)
      } [Qd](dd) {
        const Jd = this.$items.get(dd);
        void 0 !== Jd && (this._itemIndex.delete(Jd), this.$items.delete(dd))
      } [Ld]() {} [Id]() {}
      toArray() {
        return Array.from(this.$items.values())
      }
      toJSON() {
        const dd = [];
        return this.forEach((Jd => {
          dd.push("function" === typeof Jd?.toJSON ? Jd.toJSON() : Jd)
        })), dd
      }
      clone(dd) {
        if (dd) {
          return Object.assign(new Cp, this)
        }
        const Jd = new Cp;
        return Jd.maxPerTick = this.maxPerTick, this.forEach((dd => {
          Jd.add("function" === typeof dd?.clone ? dd.clone() : dd)
        })), Jd
      }
      _dropView(dd) {
        jJ(this, dd)
      }
      _unregister() {}
    }
    BJ("stream", {
      constructor: Cp
    });
    class Kp {
      [qd] = !0;
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
      constructor(dd) {
        this._type = dd
      }
      default (dd) {
        return this._default = dd, this._hasDefault = !0, this
      }
      view(dd) {
        return this._view = dd ?? -1, this
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
        const dd = this._type;
        if (dd && "object" === typeof dd && void 0 !== dd.array) throw new Error(iJ);
        return this._stream = !0, this
      }
      priority(dd) {
        return this._streamPriority = dd, this
      }
      deprecated() {
        let dd = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
        return this._deprecated = !0, this._deprecatedThrows = dd, this
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

    function op(dd) {
      return null != dd && !0 === dd[qd]
    }

    function lp(dd) {
      return () => new Kp(dd)
    }

    function Qp(dd) {
      if (op(dd)) {
        const Jd = dd._type;
        throw new Error(`t.array/map/set/collection(): a t.* builder is not a valid element type \u2014 ${"string"===typeof Jd?`use the type name instead: t.array("${Jd}")`:'collections accept a Schema class or a primitive type name ("string", "number", \u2026)'}.`)
      }
      return dd
    }

    function Lp(dd) {
      return new Kp({
        quantized: fJ(dd)
      })
    }
    const Op = Object.freeze({
        string: lp("string"),
        number: lp("number"),
        boolean: lp("boolean"),
        int8: lp("int8"),
        uint8: lp("uint8"),
        int16: lp("int16"),
        uint16: lp("uint16"),
        int32: lp("int32"),
        uint32: lp("uint32"),
        int64: lp("int64"),
        uint64: lp("uint64"),
        float32: lp("float32"),
        float64: lp("float64"),
        bigint64: lp("bigint64"),
        biguint64: lp("biguint64"),
        ref: dd => new Kp(dd),
        array: dd => new Kp({
          array: Qp(dd)
        }),
        map: dd => new Kp({
          map: Qp(dd)
        }),
        set: dd => new Kp({
          set: Qp(dd)
        }),
        collection: dd => new Kp({
          collection: Qp(dd)
        }),
        stream: dd => {
          const Jd = new Kp({
            stream: Qp(dd)
          });
          return Jd._stream = !0, Jd
        },
        quantized: Lp,
        angle: dd => Lp({
          min: 0,
          max: 2 * Math.PI,
          mode: "wrap",
          bits: dd?.bits ?? 16
        })
      }),
      ep = -1;

    function Rp(dd) {
      return TJ.register(dd), dd
    }

    function Ip() {
      let dd = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ep;
      return function(Jd, kd) {
        const pd = VJ.initialize(Jd.constructor);
        VJ.setTag(pd, kd, dd)
      }
    }

    function Gp(dd, Jd) {
      const kd = VJ.initialize(dd.constructor);
      VJ.setUnreliable(kd, Jd)
    }

    function vp(dd, Jd) {
      const kd = VJ.initialize(dd.constructor);
      VJ.setPatchOnly(kd, Jd)
    }

    function xp(dd, Jd) {
      const kd = VJ.initialize(dd.constructor);
      VJ.setFullStateOnly(kd, Jd)
    }

    function qp(dd, Jd) {
      return function(kd, pd) {
        const Nd = kd.constructor;
        if (!dd) throw new Error(`${Nd.name}: @type() reference provided for "${pd}" is undefined. Make sure you don't have any circular dependencies.`);
        dd = cJ(dd, `${Nd.name}.${pd}`), TJ.register(Nd);
        const Wd = Object.getPrototypeOf(Nd)[Symbol.metadata],
          Pd = VJ.initialize(Nd);
        let Zd = Pd[pd];
        if (void 0 !== Pd[Zd]) {
          if (Pd[Zd].deprecated) return;
          if (void 0 !== Pd[Zd].type) {
            const dd = new Error(`@colyseus/schema: Duplicate '${pd}' definition on '${Nd.name}'.\nCheck @type() annotation`);
            throw new Error(`${dd.message} ${dd.stack.split("\n")[4].trim()}`)
          }
        } else Zd = Pd[Md] ?? (Wd && Wd[Md]) ?? -1, Zd++;
        if (Jd && Jd.manual) VJ.addField(Pd, Zd, pd, dd, {
          enumerable: !0,
          configurable: !0,
          writable: !0
        });
        else {
          const {
            complexTypeKlass: Jd,
            childType: kd
          } = EJ(dd);
          VJ.addField(Pd, Zd, pd, dd, sp(pd, Zd, kd, Jd))
        }
        Pd[Bd][pd] && Object.defineProperty(kd, pd, Pd[Bd][pd]), ("string" === typeof dd || nJ(dd)) && (Pd[ad] || Object.defineProperty(Pd, ad, {
          value: [],
          enumerable: !1,
          configurable: !0,
          writable: !0
        }), Pd[ad][Zd] = "string" === typeof dd ? kJ[dd] : DJ(dd.quantized))
      }
    }
    const Bp = {
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

    function sp(dd, Jd, kd, pd) {
      let Wd;
      return Wd = pd ? function(dd, Jd, kd, pd) {
        const Wd = pd.constructor === Np,
          Pd = pd.constructor === Pp;
        return function(dd) {
          const pd = this[xd],
            Zd = pd[Jd];
          if (dd !== Zd) {
            if (void 0 !== dd && null !== dd) {
              if (!Wd || dd instanceof Np)
                if (!Pd || dd instanceof Pp) dd[ed] = kd;
                else {
                  const Jd = new Pp;
                  if (Jd[ed] = kd, dd instanceof Map) dd.forEach(((dd, kd) => Jd.set(kd, dd)));
                  else
                    for (const kd in dd) Jd.set(kd, dd[kd]);
                  dd = Jd
                }
              else {
                const Jd = new Np;
                Jd[ed] = kd, Jd.push(...dd), dd = Jd
              }
              const pd = this[Od],
                Cd = this.constructor;
              void 0 !== Zd && null !== Zd && Zd[Od] ? (pd.root?.remove(Zd[Od]), Cd[gd](pd, Jd, Nd.DELETE_AND_ADD)) : Cd[gd](pd, Jd, Nd.ADD), dd[Od]?.setParent(this, pd.root, Jd)
            } else void 0 !== Zd && null !== Zd && this[Od].delete(Jd);
            pd[Jd] = dd
          }
        }
      }(0, Jd, kd, pd) : "string" === typeof kd ? function(dd, Jd, kd) {
        const pd = Bp[kd],
          Wd = "string" === kd,
          Pd = "boolean" === kd;
        return function(kd) {
          const Zd = this[xd],
            Cd = Zd[Jd];
          if (kd !== Cd) {
            if (void 0 !== kd && null !== kd) {
              if (!Pd && void 0 !== pd && typeof kd !== pd && (!Wd || null !== kd)) {
                const Jd = kd && kd.constructor ? ` (${kd.constructor.name})` : "";
                throw new dp(`a '${pd}' was expected, but '${JSON.stringify(kd)}'${Jd} was provided in ${this.constructor.name}#${dd}`)
              }
              this.constructor[gd](this[Od], Jd, Nd.ADD)
            } else void 0 !== Cd && null !== Cd && this[Od].delete(Jd);
            Zd[Jd] = kd
          }
        }
      }(dd, Jd, kd) : nJ(kd) ? function(dd, Jd, kd) {
        return function(pd) {
          const Wd = this[xd],
            Pd = Wd[Jd];
          if (void 0 !== pd && null !== pd) {
            if ("number" !== typeof pd) throw new dp(`a 'number' was expected, but '${JSON.stringify(pd)}' was provided in ${this.constructor.name}#${dd}`);
            if ((pd = yJ(kd, UJ(kd, pd))) === Pd) return;
            this.constructor[gd](this[Od], Jd, Nd.ADD)
          } else {
            if (pd === Pd) return;
            void 0 !== Pd && null !== Pd && this[Od].delete(Jd)
          }
          Wd[Jd] = pd
        }
      }(dd, Jd, kd.quantized) : function(dd, Jd, kd) {
        return function(pd) {
          const Wd = this[xd],
            Pd = Wd[Jd];
          if (pd !== Pd) {
            if (void 0 !== pd && null !== pd) {
              Jp(pd, kd, this, dd);
              const Wd = this[Od],
                Zd = this.constructor;
              void 0 !== Pd && null !== Pd && Pd[Od] ? (Wd.root?.remove(Pd[Od]), Zd[gd](Wd, Jd, Nd.DELETE_AND_ADD)) : Zd[gd](Wd, Jd, Nd.ADD), pd[Od]?.setParent(this, Wd.root, Jd)
            } else void 0 !== Pd && null !== Pd && this[Od].delete(Jd);
            Wd[Jd] = pd
          }
        }
      }(dd, Jd, kd), {
        get: function() {
          return this[xd][Jd]
        },
        set: Wd,
        enumerable: !0,
        configurable: !0
      }
    }

    function ip() {
      let dd = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
      return function(Jd, kd) {
        const pd = VJ.initialize(Jd.constructor);
        VJ.setDeprecated(pd, kd), dd && (pd[Bd] ??= {}, pd[Bd][kd] = {
          get: function() {
            throw new Error(`${kd} is deprecated.`)
          },
          set: function(dd) {},
          enumerable: !1,
          configurable: !0
        }, Object.defineProperty(Jd, kd, pd[Bd][kd]))
      }
    }
    let ap = !1;

    function Mp(dd, Jd, kd) {
      ap || (ap = !0, console.warn("@colyseus/schema: defineTypes() is deprecated and will be removed in a future release. Use schema() with t.* field builders instead \u2192 https://docs.colyseus.io/state/schema"));
      for (let pd in Jd) qp(Jd[pd], kd)(dd.prototype, pd);
      return dd
    }

    function Fp(dd, Jd) {
      let kd = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : mp;
      if (null == dd || "object" !== typeof dd) throw new Error(`schema(): first argument must be a fields object (got ${typeof dd}).`);
      const pd = {},
        Nd = {},
        Wd = {},
        Pd = {},
        Zd = (dd, Jd) => {
          if (Jd.hasDefault)((dd, Jd) => {
            "function" === typeof Jd ? Pd[dd] = Jd : Jd && "function" === typeof Jd.clone ? Pd[dd] = () => Jd.clone() : Wd[dd] = Jd
          })(dd, Jd.default);
          else if (!Jd.optional) {
            const kd = function(dd) {
              if (dd && "object" === typeof dd) {
                if (void 0 !== dd.array) return () => new Np;
                if (void 0 !== dd.map) return () => new Pp;
                if (void 0 !== dd.set) return () => new gp;
                if (void 0 !== dd.collection) return () => new Zp;
                if (void 0 !== dd.stream) return () => new Cp
              } else if ("function" === typeof dd && mp.is(dd) && (!dd.prototype.initialize || 0 === dd.prototype.initialize.length)) return () => new dd
            }(Jd.type);
            kd && (Pd[dd] = kd)
          }
        },
        gd = {},
        Cd = [],
        Kd = [],
        od = {},
        ld = [],
        Qd = [],
        Ld = {},
        Od = [];
      for (const xd in dd) {
        const kd = dd[xd],
          Wd = `schema(${Jd?`'${Jd}'`:""}): field '${xd}'`;
        if (op(kd)) {
          const dd = kd.toDefinition();
          if (dd.noSync) {
            if (void 0 !== dd.view || dd.unreliable || dd.patchOnly || dd.fullStateOnly || dd.stream) throw new Error(`${Wd} uses .noSync() together with a sync-only modifier (.view/.unreliable/.patchOnly/.fullStateOnly/.stream). A local-only field cannot be synchronized.`);
            Zd(xd, dd);
            continue
          }
          if (dd.patchOnly && dd.fullStateOnly) throw new Error(`${Wd} uses .patchOnly() together with .fullStateOnly(). Those are the only two delivery channels, so the field would never reach a client \u2014 use .noSync() if that is intended.`);
          const Jd = cJ(dd.type, Wd);
          if ("function" === typeof Jd && !mp.is(Jd)) throw new Error(`${Wd} is a synced ref to non-Schema class '${Jd.name||"(anonymous)"}' \u2014 use .noSync(), or Metadata.setFields().`);
          pd[xd] = Jd, void 0 !== dd.view && (gd[xd] = dd.view), dd.unreliable && Cd.push(xd), dd.patchOnly && Kd.push(xd), dd.deprecated && (od[xd] = dd.deprecatedThrows), dd.fullStateOnly && ld.push(xd), dd.stream && Qd.push(xd), void 0 !== dd.streamPriority && (Ld[xd] = dd.streamPriority), dd.optional && Od.push(xd), Zd(xd, dd)
        } else {
          if ("function" !== typeof kd) throw new Error(`${Wd} must be a t.* builder, Schema subclass, or method (got ${typeof kd}).`);
          mp.is(kd) ? (pd[xd] = kd, kd.prototype.initialize && 0 !== kd.prototype.initialize.length || (Pd[xd] = () => new kd)) : Nd[xd] = kd
        }
      }
      const ed = dd => {
          for (const Jd in Wd) dd[Jd] = Wd[Jd];
          for (const Jd in Pd) dd[Jd] = Pd[Jd]()
        },
        Rd = () => {
          const dd = {};
          return ed(dd), dd
        },
        Id = "function" === typeof Nd.initialize,
        Gd = Nd.initialize ?? kd._initialize,
        vd = class extends kd {
          constructor() {
            for (var dd = arguments.length, Jd = new Array(dd), kd = 0; kd < dd; kd++) Jd[kd] = arguments[kd];
            const Nd = Jd[0];
            void 0 === Nd ? (super(), ed(this)) : super(Object.assign(Rd(), Id ? (dd => {
              const Jd = Object.keys(pd),
                kd = {};
              for (const pd in dd) Jd.includes(pd) || (kd[pd] = dd[pd]);
              return kd
            })(Nd) : Nd)), Gd && new.target === vd && Gd.apply(this, Jd)
          }
        };
      Jd && Object.defineProperty(vd, "name", {
        value: Jd
      }), VJ.setFields(vd, pd), vd._getDefaultValues = Rd, vd._initialize = Gd, Object.assign(vd.prototype, Nd);
      for (const xd in gd) Ip(gd[xd])(vd.prototype, xd);
      for (const xd of Cd) Gp(vd.prototype, xd);
      for (const xd of Kd) vp(vd.prototype, xd);
      for (const xd in od) ip(od[xd])(vd.prototype, xd);
      if (ld.length > 0 || Qd.length > 0) {
        const dd = vd[Symbol.metadata];
        for (const Jd of ld) VJ.setFullStateOnly(dd, Jd);
        for (const Jd of Qd) VJ.setStream(dd, Jd);
        for (const Jd in Ld) VJ.setStreamPriority(dd, Jd, Ld[Jd])
      }
      if (Od.length > 0) {
        const dd = vd[Symbol.metadata];
        for (const Jd of Od) dd[dd[Jd]].optional = !0
      }
      return vd.extend = (dd, Jd) => Fp(dd, Jd, vd), vd
    }

    function Yp(dd) {
      const Jd = dd[Od].root,
        kd = {
          ops: {},
          refs: []
        };
      let pd = Jd.changes.next;
      for (; pd;) {
        const dd = pd.changeTree;
        void 0 !== dd ? (kd.refs.push(`refId#${dd.ref[Zd]}`), dd.forEach(((dd, Jd) => {
          if (dd < 0 || !Jd) return;
          const pd = Nd[Jd];
          kd.ops[pd] || (kd.ops[pd] = 0), kd.ops[pd]++
        })), pd = pd.next) : pd = pd.next
      }
      return kd
    }
    class mp {
      static[Cd] = fk;
      static[Kd] = Hk;
      [Zd];
      [xd];
      static initialize(dd) {
        Object.defineProperty(dd, Od, {
          value: new bk(dd),
          enumerable: !1,
          writable: !0
        }), dd[xd] = []
      }
      static initializeForDecoder() {
        const dd = Object.create(this.prototype);
        return jk(dd), dd[xd] = [], dd
      }
      static reset(dd) {
        const Jd = dd?.[Od];
        if (void 0 === Jd || "function" !== typeof Jd.recycle) throw new Error("@colyseus/schema: Schema.reset() requires a tracked (encoder-side) instance.");
        if (void 0 !== Jd.extraParents) throw new Error(`@colyseus/schema: cannot reset a shared instance (${dd.constructor.name}) with multiple parents.`);
        dd[Gd]()
      } [Gd]() {
        const dd = this.constructor[Symbol.metadata],
          Jd = dd?.[Fd] ?? [],
          kd = this[xd];
        for (let pd = 0; pd < Jd.length; pd++) {
          const dd = kd[Jd[pd]];
          dd?.[Gd]?.()
        }
        this[Od].recycle(), this[Zd] = void 0
      }
      static is(dd) {
        const Jd = dd[Symbol.metadata];
        return "object" === typeof Jd && null !== Jd
      }
      static isSchema(dd) {
        return "function" === typeof dd?.assign
      }
      static[gd](dd, Jd) {
        let kd = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Nd.ADD;
        dd.change(Jd, kd)
      }
      static[od](dd, Jd, kd) {
        const pd = dd.constructor[Symbol.metadata],
          Nd = pd[Jd]?.tag;
        return void 0 === kd ? void 0 === Nd : void 0 === Nd || (Nd === ep ? kd.isChangeTreeVisible(dd[Od]) : kd.hasTagOnTree(dd[Od], Nd))
      }
      constructor(dd) {
        mp.initialize(this), dd && mp.assignProps(this, dd)
      }
      assign(dd) {
        return mp.assignProps(this, dd), this
      }
      static assignProps(dd, Jd) {
        const kd = dd.constructor[Symbol.metadata];
        if (kd && void 0 !== kd[Md])
          for (let Nd = 0; Nd <= kd[Md]; Nd++) {
            const pd = kd[Nd];
            if (!pd) continue;
            const Wd = Jd[pd.name];
            void 0 !== Wd && (dd[pd.name] = Wd)
          }
        const pd = Object.keys(Jd);
        for (let Nd = 0; Nd < pd.length; Nd++) {
          const Wd = pd[Nd];
          kd && void 0 !== kd[Wd] || (dd[Wd] = Jd[Wd])
        }
      }
      restore(dd) {
        const Jd = this.constructor[Symbol.metadata];
        for (const kd in Jd) {
          const pd = Jd[kd],
            Nd = pd.name,
            Wd = pd.type,
            Pd = dd[Nd];
          if (void 0 !== Pd && null !== Pd)
            if ("string" === typeof Wd) this[Nd] = Pd;
            else if (mp.is(Wd)) {
            const dd = new Wd;
            dd.restore(Pd), this[Nd] = dd
          } else if ("object" === typeof Wd) {
            const dd = Object.keys(Wd)[0],
              Jd = Wd[dd];
            if ("map" === dd) {
              const dd = this[Nd];
              for (const kd in Pd)
                if (mp.is(Jd)) {
                  const pd = new Jd;
                  pd.restore(Pd[kd]), dd.set(kd, pd)
                } else dd.set(kd, Pd[kd])
            } else if ("array" === dd) {
              const dd = this[Nd];
              for (let kd = 0; kd < Pd.length; kd++)
                if (mp.is(Jd)) {
                  const pd = new Jd;
                  pd.restore(Pd[kd]), dd.push(pd)
                } else dd.push(Pd[kd])
            }
          }
        }
        return this
      }
      setDirty(dd, Jd) {
        const kd = this.constructor[Symbol.metadata];
        this[Od].change(kd[kd[dd]].index, Jd)
      }
      pauseTracking() {
        this[Od].pause()
      }
      resumeTracking() {
        this[Od].resume()
      }
      untracked(dd) {
        return this[Od].untracked(dd)
      }
      get isTrackingPaused() {
        return this[Od].paused
      }
      clone() {
        const dd = Object.create(this.constructor.prototype);
        mp.initialize(dd);
        const Jd = this.constructor[Symbol.metadata];
        for (const kd in Jd) {
          const pd = Jd[kd].name;
          "object" === typeof this[pd] && "function" === typeof this[pd]?.clone ? dd[pd] = this[pd].clone() : dd[pd] = this[pd]
        }
        return dd
      }
      toJSON() {
        const dd = {},
          Jd = this.constructor[Symbol.metadata];
        for (const kd in Jd) {
          const pd = Jd[kd],
            Nd = pd.name;
          pd.deprecated || null === this[Nd] || "undefined" === typeof this[Nd] || (dd[Nd] = "function" === typeof this[Nd].toJSON ? this[Nd].toJSON() : this[Nd])
        }
        return dd
      }
      discardAllChanges() {
        this[Od].discardAll()
      } [ld](dd) {
        return this[this.constructor[Symbol.metadata][dd].name]
      } [Qd](dd) {
        this[this.constructor[Symbol.metadata][dd].name] = void 0
      }
      static debugRefIds(dd) {
        let Jd = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          kd = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          pd = arguments.length > 3 ? arguments[3] : void 0,
          Nd = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "";
        const Wd = Jd ? ` - ${JSON.stringify(dd.toJSON())}` : "",
          Pd = dd[Od],
          gd = dd[Zd],
          Cd = pd ? pd.root.refCount[gd] : Pd.refCount,
          Kd = Cd > 1 ? ` [\xd7${Cd}]` : "";
        let od = `${function(dd){return new Array(dd).fill(0).map(((Jd,kd)=>kd===dd-1?"\u2514\u2500 ":"   ")).join("")}(kd)}${Nd}${dd.constructor.name} (refId: ${gd})${Kd}${Wd}\n`;
        return Pd.forEachChild(((Nd, Wd) => {
          let Pd = Wd;
          "number" === typeof Wd && dd.$indexes && (Pd = dd.$indexes.get(Wd) ?? Wd);
          const Zd = void 0 !== dd.forEach && void 0 !== Pd ? `["${Pd}"]: ` : "";
          od += this.debugRefIds(Nd.ref, Jd, kd + 1, pd, Zd)
        })), od
      }
      static debugRefIdEncodingOrder(dd) {
        let Jd = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "allChanges";
        const kd = [],
          pd = dd[Od];
        if ("changes" === Jd) {
          let dd = pd.root.changes?.next;
          for (; dd;) dd.changeTree && kd.push(dd.changeTree.ref[Zd]), dd = dd.next;
          return kd
        }
        const Nd = "allFilteredChanges" === Jd,
          Wd = new Set,
          Pd = dd => {
            Wd.has(dd) || (Wd.add(dd), dd.isFiltered === Nd && kd.push(dd.ref[Zd]), dd.forEachChild(((dd, Jd) => Pd(dd))))
          };
        return Pd(pd), kd
      }
      static debugRefIdsFromDecoder(dd) {
        return this.debugRefIds(dd.state, !1, 0, dd)
      }
      static debugChanges(dd) {
        let Jd = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        const kd = dd[Od],
          pd = Jd ? "allChanges" : "changes";
        let Wd = `${dd.constructor.name} (${dd[Zd]}) -> .${pd}:\n`;
        return Jd ? kd.forEachLive((dd => {
          Wd += `- [${dd}]: ADD (${JSON.stringify(kd.getValue(Number(dd),!0))})\n`
        })) : kd.forEach(((dd, Jd) => {
          dd < 0 || !Jd || (Wd += `- [${dd}]: ${Nd[Jd]} (${JSON.stringify(kd.getValue(Number(dd),!1))})\n`)
        })), Wd
      }
    }
    Wd(mp);
    const bp = {
      value: 0,
      enumerable: !1,
      writable: !0
    };
    class Sp {
      types;
      nextUniqueId = 0;
      changeTrees = {};
      get refCount() {
        const dd = {};
        for (const Jd in this.changeTrees) dd[Jd] = this.changeTrees[Jd].refCount;
        return dd
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
      enqueueFilterRefresh(dd) {
        this.types.hasFilters && (dd.flags & Yk || (dd.flags |= Yk, this.pendingFilterRefresh.push(dd)))
      }
      _nodePool = [];
      _nextViewId = 0;
      _freeViewIds = [];
      acquireViewId() {
        return this._freeViewIds.length > 0 ? this._freeViewIds.pop() : this._nextViewId++
      }
      releaseViewId(dd) {
        this._freeViewIds.push(dd)
      }
      activeViews = new Map;
      streamTrees = new Set;
      registerView(dd) {
        this.activeViews.set(dd.id, new WeakRef(dd))
      }
      unregisterView(dd) {
        this.activeViews.delete(dd.id);
        const Jd = dd.id;
        for (const kd of this.streamTrees) kd._dropView(Jd)
      }
      forEachActiveView(dd) {
        for (const [Jd, kd] of this.activeViews) {
          const pd = kd.deref();
          if (void 0 !== pd) dd(pd);
          else {
            this.activeViews.delete(Jd);
            for (const dd of this.streamTrees) dd._dropView(Jd)
          }
        }
      }
      registerStream(dd) {
        this.streamTrees.add(dd)
      }
      unregisterStream(dd) {
        this.streamTrees.delete(dd)
      }
      constructor(dd) {
        let Jd = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        this.types = dd, this.nextUniqueId = Jd
      }
      add(dd) {
        const Jd = dd.ref;
        void 0 === Jd[Zd] && (bp.value = this.nextUniqueId++, Object.defineProperty(Jd, Zd, bp));
        const kd = Jd[Zd],
          pd = void 0 === this.changeTrees[kd];
        pd && (this.changeTrees[kd] = dd), dd.needsRestage && (dd.needsRestage = !1, dd.forEachLiveWithCtx(dd, pk));
        const Nd = pd ? 0 : dd.refCount;
        return dd.refCount = Nd + 1, Nd > 0 && this.enqueueFilterRefresh(dd), pd
      }
      remove(dd) {
        const Jd = dd.refCount - 1;
        if (Jd <= 0) {
          if (dd.root = void 0, delete this.changeTrees[dd.ref[Zd]], dd.isStreamCollection) {
            const Jd = dd.ref;
            Jd._unregister?.(), this.unregisterStream(Jd)
          }
          this.removeFromQueue(dd), this.removeFromUnreliableQueue(dd), dd.refCount = 0, dd.needsRestage = !0, dd.forEachChild(((Jd, kd) => {
            Jd.removeParent(dd.ref) && (void 0 === Jd.parentRef || Jd.refCount > 0 ? this.remove(Jd) : this.moveNextToParent(Jd))
          }))
        } else dd.refCount = Jd, this.enqueueFilterRefresh(dd), this.recursivelyMoveNextToParent(dd);
        return Jd
      }
      recursivelyMoveNextToParent(dd) {
        this.moveNextToParent(dd), dd.forEachChild(((dd, Jd) => this.recursivelyMoveNextToParent(dd)))
      }
      moveNextToParent(dd) {
        dd.changesNode && this._moveNextToParentInList(this.changes, dd, dd.changesNode, "changesNode"), dd.unreliableChangesNode && this._moveNextToParentInList(this.unreliableChanges, dd, dd.unreliableChangesNode, "unreliableChangesNode")
      }
      _moveNextToParentInList(dd, Jd, kd, pd) {
        const Nd = Jd.parent;
        if (!Nd || !Nd[Od]) return;
        const Wd = Nd[Od][pd];
        Wd && Wd !== kd && (kd.position > Wd.position || (kd.prev ? kd.prev.next = kd.next : dd.next = kd.next, kd.next ? kd.next.prev = kd.prev : dd.tail = kd.prev, kd.prev = dd.tail, kd.next = void 0, dd.tail.next = kd, dd.tail = kd, kd.position = dd.nextPosition++))
      }
      enqueueChangeTree(dd) {
        (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : dd.changesNode) || (dd.changesNode = this._appendToList(this.changes, dd))
      }
      enqueueUnreliable(dd) {
        (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : dd.unreliableChangesNode) || (dd.unreliableChangesNode = this._appendToList(this.unreliableChanges, dd))
      }
      _appendToList(dd, Jd) {
        const kd = this._nodePool;
        let pd;
        return kd.length > 0 ? (pd = kd.pop(), pd.changeTree = Jd, pd.next = void 0, pd.prev = void 0) : pd = {
          changeTree: Jd,
          next: void 0,
          prev: void 0,
          position: 0
        }, dd.next ? (pd.prev = dd.tail, dd.tail.next = pd, dd.tail = pd) : (dd.nextPosition = 0, dd.next = pd, dd.tail = pd), pd.position = dd.nextPosition++, pd
      }
      releaseNode(dd) {
        dd.changeTree = void 0, dd.prev = void 0, dd.next = void 0, this._nodePool.push(dd)
      }
      removeFromQueue(dd) {
        return this._removeNode(this.changes, dd, dd.changesNode, "changesNode")
      }
      removeFromUnreliableQueue(dd) {
        return this._removeNode(this.unreliableChanges, dd, dd.unreliableChangesNode, "unreliableChangesNode")
      }
      _removeNode(dd, Jd, kd, pd) {
        return !(!kd || kd.changeTree !== Jd) && (kd.prev ? kd.prev.next = kd.next : dd.next = kd.next, kd.next ? kd.next.prev = kd.prev : dd.tail = kd.prev, Jd[pd] = void 0, this.releaseNode(kd), !0)
      }
    }

    function jp(dd, Jd) {
      if (-1 === Jd || Jd >= dd.length) return !1;
      const kd = dd.length - 1;
      for (let pd = Jd; pd < kd; pd++) dd[pd] = dd[pd + 1];
      return dd.length = kd, !0
    }

    function Xp(dd, Jd, kd) {
      const pd = ~kd,
        Nd = dd.changeTrees;
      for (const Wd in Nd) {
        const dd = Nd[Wd],
          kd = dd.visibleViews;
        void 0 !== kd && Jd < kd.length && (kd[Jd] &= pd);
        const Pd = dd.subscribedViews;
        void 0 !== Pd && Jd < Pd.length && (Pd[Jd] &= pd);
        const Zd = dd.tagViews;
        void 0 !== Zd && Zd.forEach((dd => {
          Jd < dd.length && (dd[Jd] &= pd)
        }))
      }
    }
    const fp = new FinalizationRegistry((dd => {
      let {
        root: Jd,
        id: kd,
        slot: pd,
        bit: Nd
      } = dd;
      Xp(Jd, pd, Nd), Jd.activeViews.delete(kd);
      for (const Wd of Jd.streamTrees) Wd._dropView(kd);
      Jd.releaseViewId(kd)
    }));

    function np(dd) {
      if (void 0 === dd) return "undefined";
      if (null === dd) return "null";
      const Jd = typeof dd;
      return "string" === Jd ? JSON.stringify(dd.length > 30 ? `${dd.slice(0,30)}\u2026` : dd) : "object" !== Jd && "function" !== Jd ? `${Jd} ${String(dd)}` : Array.isArray(dd) ? `Array(${dd.length})` : dd.constructor?.name ?? "Object"
    }
    class Up {
      iterable;
      items;
      id = -1;
      _root;
      _slot = 0;
      _bit = 0;
      changes = new Map;
      constructor() {
        let dd = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        this.iterable = dd, dd && (this.items = [])
      }
      _bindRoot(dd) {
        void 0 === this._root && (this._root = dd, this.id = dd.acquireViewId(), this._slot = this.id >> 5, this._bit = 1 << (31 & this.id), dd.registerView(this), fp.register(this, {
          root: dd,
          id: this.id,
          slot: this._slot,
          bit: this._bit
        }, this))
      }
      dispose() {
        void 0 !== this._root && (this._root.unregisterView(this), Xp(this._root, this._slot, this._bit), this._root.releaseViewId(this.id), fp.unregister(this), this._root = void 0, this.id = -1)
      }
      isVisible(dd) {
        const Jd = dd.visibleViews,
          kd = this._slot;
        return void 0 !== Jd && kd < Jd.length && 0 !== (Jd[kd] & this._bit)
      }
      markVisible(dd) {
        const Jd = this._slot;
        let kd = dd.visibleViews;
        for (void 0 === kd && (kd = dd.visibleViews = []); kd.length <= Jd;) kd.push(0);
        kd[Jd] |= this._bit
      }
      unmarkVisible(dd) {
        const Jd = dd.visibleViews;
        if (void 0 === Jd) return;
        const kd = this._slot;
        kd < Jd.length && (Jd[kd] &= ~this._bit)
      }
      isSubscribed(dd) {
        const Jd = dd.subscribedViews,
          kd = this._slot;
        return void 0 !== Jd && kd < Jd.length && 0 !== (Jd[kd] & this._bit)
      }
      _setSubscribed(dd) {
        const Jd = this._slot;
        let kd = dd.subscribedViews;
        for (void 0 === kd && (kd = dd.subscribedViews = []); kd.length <= Jd;) kd.push(0);
        kd[Jd] |= this._bit
      }
      _clearSubscribed(dd) {
        const Jd = dd.subscribedViews;
        if (void 0 === Jd) return;
        const kd = this._slot;
        kd < Jd.length && (Jd[kd] &= ~this._bit)
      }
      hasTagOnTree(dd, Jd) {
        const kd = dd.tagViews;
        if (void 0 === kd) return !1;
        const pd = this._slot,
          Nd = this._bit;
        for (let Wd = Jd; 0 !== Wd; Wd &= Wd - 1) {
          const dd = kd.get(Wd & -Wd);
          if (void 0 !== dd && pd < dd.length && 0 !== (dd[pd] & Nd)) return !0
        }
        return !1
      }
      addTag(dd, Jd) {
        if (Jd === ep) return;
        let kd = dd.tagViews;
        void 0 === kd && (kd = dd.tagViews = new Map);
        const pd = this._slot,
          Nd = this._bit;
        for (let Wd = Jd; Wd > 0; Wd &= Wd - 1) {
          const dd = Wd & -Wd;
          let Jd = kd.get(dd);
          for (void 0 === Jd && (Jd = [], kd.set(dd, Jd)); Jd.length <= pd;) Jd.push(0);
          Jd[pd] |= Nd
        }
      }
      removeTag(dd, Jd) {
        if (Jd === ep) return;
        const kd = dd.tagViews;
        if (void 0 === kd) return;
        const pd = this._slot,
          Nd = ~this._bit;
        for (let Wd = Jd; Wd > 0; Wd &= Wd - 1) {
          const dd = kd.get(Wd & -Wd);
          void 0 !== dd && pd < dd.length && (dd[pd] &= Nd)
        }
      }
      removeAllTagsOnTree(dd) {
        const Jd = dd.tagViews;
        if (void 0 === Jd) return;
        const kd = this._slot,
          pd = ~this._bit;
        Jd.forEach((dd => {
          kd < dd.length && (dd[kd] &= pd)
        }))
      }
      add(dd) {
        let Jd = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ep,
          kd = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        return this._add(dd, Jd, kd, !1)
      }
      _addImmediate(dd) {
        let Jd = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ep;
        this._add(dd, Jd, !0, !0)
      }
      _add(dd, Jd, kd, pd) {
        const Wd = dd?.[Od];
        if (!Wd) return console.warn(`StateView#add(): expected a Schema instance or collection, received ${np(dd)}`), !1;
        const Pd = Wd.parent;
        if (!Pd && 0 !== dd[Zd]) throw new Error(`Cannot add a detached instance to the StateView. Make sure to assign the "${Wd.ref.constructor.name}" instance to the state before calling view.add()`);
        void 0 === this._root && void 0 !== Wd.root && this._bindRoot(Wd.root);
        const gd = Pd?.[Od];
        if (!pd && gd?.isStreamCollection) return SJ(Pd, this.id, Wd.parentIndex), !0;
        const Cd = dd.constructor[Symbol.metadata],
          Kd = this.isVisible(Wd);
        if (!this.iterable || !kd || Kd && -1 !== this.items.indexOf(dd) || this.items.push(dd), this.markVisible(Wd), kd && Pd && this.addParentOf(Wd, Jd), !pd && Wd.isStreamCollection) return !0;
        if (Jd === ep && Wd.isNew) return this._markSubtreeVisible(Wd, Jd), !1;
        let od = this.changes.get(dd[Zd]);
        void 0 === od && (od = new Map, this.changes.set(dd[Zd], od));
        let ld = !1;
        const Qd = Wd.encDescriptor.tags;
        if (Wd.forEachChild(((dd, kd) => {
            const pd = Qd[kd];
            if (void 0 !== pd) {
              if (!(pd === ep || Jd !== ep && 0 !== (pd & Jd))) return
            }
            this.add(dd.ref, Jd, !1) && (ld = !0)
          })), Jd !== ep) {
          this.addTag(Wd, Jd);
          const dd = Cd?.[md];
          if (void 0 !== dd)
            for (let kd = Jd; kd > 0; kd &= kd - 1) dd[kd & -kd]?.forEach((dd => {
              Wd.getChange(dd) !== Nd.DELETE && od.set(dd, Nd.ADD)
            }))
        }
        if ((Jd === ep || !Kd) && (!Wd.isNew || ld))
          if (Wd.isArray && "string" !== typeof Wd.refTarget[ed]) Wd.refTarget.items.length > 0 && (od.set(-1, Nd.ADD), ld = !0);
          else {
            const dd = Wd.encDescriptor.tags;
            Wd.forEachLive((kd => {
              const pd = dd[kd];
              (void 0 === pd || pd === ep || Jd !== ep && 0 !== (pd & Jd)) && (od.set(kd, Nd.ADD), ld = !0)
            }))
          } return ld
      }
      _markSubtreeVisible(dd, Jd) {
        const kd = dd.encDescriptor.tags;
        dd.forEachChild(((dd, pd) => {
          const Nd = kd[pd];
          if (void 0 !== Nd) {
            if (!(Nd === ep || Jd !== ep && 0 !== (Nd & Jd))) return
          }
          dd.isNew ? (this.markVisible(dd), this._markSubtreeVisible(dd, Jd)) : this._add(dd.ref, Jd, !1, !1)
        }))
      }
      addParentOf(dd, Jd) {
        const kd = dd.parent[Od],
          pd = dd.parentIndex;
        this.isVisible(kd) || this.markVisible(kd);
        const Wd = kd.parent?.[Od];
        if (Wd && this.addParentOf(kd, Jd), kd.hasFilteredFields && kd.getChange(pd) !== Nd.DELETE) {
          let Wd = this.changes.get(kd.ref[Zd]);
          void 0 === Wd && (Wd = new Map, this.changes.set(kd.ref[Zd], Wd));
          const Pd = kd.encDescriptor.tags[pd];
          void 0 !== Pd && Pd !== ep && 0 !== (Pd & Jd) && this.addTag(kd, Jd), Wd.set(kd.isArray ? dd : pd, Nd.ADD)
        }
      }
      _touchAncestorsOf(dd) {
        let Jd = dd.parent?.[Od];
        if (void 0 === Jd) return;
        const kd = [];
        for (; void 0 !== Jd;) {
          if (Jd.hasFilteredFields) {
            const dd = Jd.ref[Zd];
            if (this.changes.has(dd)) break;
            kd.push(Jd)
          }
          Jd = Jd.parent?.[Od]
        }
        for (let pd = kd.length - 1; pd >= 0; pd--) this.changes.set(kd[pd].ref[Zd], new Map)
      }
      remove(dd) {
        let Jd = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ep,
          kd = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        const pd = dd?.[Od];
        if (!pd) return console.warn(`StateView#remove(): expected a Schema instance or collection, received ${np(dd)}`), this;
        const Wd = pd.parent?.[Od];
        if (Wd?.isStreamCollection) return this.unmarkVisible(pd), this.iterable && !kd && jp(this.items, this.items.indexOf(dd)),
          function(dd, Jd, kd, pd, Wd) {
            const Pd = dd._stream;
            if (void 0 === Pd) return !1;
            const Zd = Pd.pendingByView.get(Jd);
            if (Zd?.has(pd)) return Zd.delete(pd), !1;
            const gd = Pd.sentByView.get(Jd);
            if (gd?.has(pd)) {
              gd.delete(pd);
              let dd = Wd.get(kd);
              return void 0 === dd && (dd = new Map, Wd.set(kd, dd)), dd.set(pd, Nd.DELETE), !0
            }
          }(pd.parent, this.id, pd.parent[Zd], pd.parentIndex, this.changes), this._recursiveDeleteVisibleChangeTree(pd), this;
        if (pd.isStreamCollection) {
          this.unmarkVisible(pd), this.iterable && !kd && jp(this.items, this.items.indexOf(dd));
          const Jd = pd.ref,
            Wd = Jd._stream;
          if (void 0 !== Wd) {
            Wd.pendingByView.get(this.id)?.clear();
            const dd = Wd.sentByView.get(this.id);
            if (void 0 !== dd && dd.size > 0) {
              const kd = Jd[Zd];
              let pd = this.changes.get(kd);
              void 0 === pd && (pd = new Map, this.changes.set(kd, pd));
              for (const Jd of dd) pd.set(Jd, Nd.DELETE);
              dd.clear()
            }
          }
          return this
        }
        this.unmarkVisible(pd), this.iterable && !kd && jp(this.items, this.items.indexOf(dd));
        const Pd = pd.ref,
          gd = Pd.constructor[Symbol.metadata],
          Cd = Pd[Zd];
        this._touchAncestorsOf(pd);
        let Kd = this.changes.get(Cd);
        if (void 0 === Kd && (Kd = new Map, this.changes.set(Cd, Kd)), Jd === ep) {
          const dd = pd.parent;
          if (dd && !VJ.isValidInstance(dd) && pd.isFiltered) {
            const Jd = Wd.isArray ? pd : pd.parentIndex,
              kd = dd[Zd];
            let Pd = this.changes.get(kd);
            void 0 === Pd ? (Pd = new Map, this.changes.set(kd, Pd)) : Pd.get(Jd) === Nd.ADD && this._dropPendingEntries(pd), Pd.set(Jd, Nd.DELETE), this._recursiveDeleteVisibleChangeTree(pd)
          } else gd?.[Yd]?.forEach((dd => this._removeViewField(pd, Kd, dd)))
        } else {
          const dd = gd?.[md];
          if (void 0 !== dd)
            for (let kd = Jd; kd > 0; kd &= kd - 1) dd[kd & -kd]?.forEach((dd => this._removeViewField(pd, Kd, dd)))
        }
        return void 0 === Jd ? this.removeAllTagsOnTree(pd) : this.removeTag(pd, Jd), this
      }
      has(dd) {
        return this.isVisible(dd[Od])
      }
      hasTag(dd) {
        let Jd = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ep;
        return this.hasTagOnTree(dd[Od], Jd)
      }
      subscribe(dd, Jd) {
        const kd = dd?.[Od];
        if (!kd) return console.warn(`StateView#subscribe(): expected a Schema collection, received ${np(dd)}`), this;
        if (void 0 === this._root && void 0 !== kd.root && this._bindRoot(kd.root), void 0 !== Jd)
          if (kd.isStreamCollection) {
            const kd = MJ(dd);
            null === Jd ? kd.priorityByView?.delete(this.id) : (kd.priorityByView ??= new Map).set(this.id, Jd)
          } else {
            const Jd = dd?.constructor?.name ?? "collection",
              pd = kd.parent;
            if (void 0 === pd) console.warn(`StateView#subscribe(): \`priority\` ignored \u2014 this ${Jd} is not attached to a state yet, so it cannot be identified as a stream. Subscribe after assigning it to the state.`);
            else {
              const dd = pd?.constructor?.[Symbol.metadata]?.[kd.parentIndex]?.name,
                Nd = dd ? `${pd.constructor.name}#${dd}` : Jd;
              console.warn(`StateView#subscribe(): \`priority\` ignored \u2014 ${Nd} is a ${Jd}, not a streaming collection. Declare the field with .stream() (e.g. t.map(X).stream()) or use t.stream(X) to enable priority batching.`)
            }
          } if (this.isSubscribed(kd)) return this;
        const pd = void 0 !== kd.parent && !this.isVisible(kd);
        if (pd ? (this.addParentOf(kd, ep), this._add(dd, ep, !1, !1)) : this.markVisible(kd), this._setSubscribed(kd), kd.isStreamCollection) {
          const Jd = dd;
          kd.forEachChild(((dd, kd) => {
            SJ(Jd, this.id, kd)
          }))
        } else pd || kd.forEachChild((dd => {
          this.markVisible(dd)
        }));
        return this
      }
      unsubscribe(dd) {
        const Jd = dd?.[Od];
        if (!Jd) return console.warn(`StateView#unsubscribe(): expected a Schema collection, received ${np(dd)}`), this;
        if (!this.isSubscribed(Jd)) return this;
        this._clearSubscribed(Jd);
        const kd = Jd.ref[Zd];
        if (Jd.isStreamCollection) {
          const Jd = dd._stream;
          if (void 0 !== Jd) {
            Jd.pendingByView.get(this.id)?.clear();
            const dd = Jd.sentByView.get(this.id);
            if (void 0 !== dd && dd.size > 0) {
              let Jd = this.changes.get(kd);
              void 0 === Jd && (Jd = new Map, this.changes.set(kd, Jd));
              for (const kd of dd) Jd.set(kd, Nd.DELETE);
              dd.clear()
            }
          }
        } else {
          const dd = Jd.isArray;
          let pd = this.changes.get(kd);
          Jd.forEachChild(((Jd, Wd) => {
            void 0 === pd && (pd = new Map, this.changes.set(kd, pd)), pd.set(dd ? Jd : Wd, Nd.DELETE), this.unmarkVisible(Jd)
          }))
        }
        return this.unmarkVisible(Jd), this
      }
      clear() {
        if (!this.iterable) throw new Error("StateView#clear() is only available for iterable StateView's. Use StateView(iterable: true) constructor.");
        for (let dd = 0, Jd = this.items.length; dd < Jd; dd++) this.remove(this.items[dd], ep, !0);
        this.items.length = 0
      }
      isChangeTreeVisible(dd) {
        let Jd = this.isVisible(dd);
        if (!Jd && dd.isVisibilitySharedWithParent)
          if (this.isVisible(dd.parent[Od])) this.markVisible(dd), Jd = !0;
          else
            for (let kd = dd.extraParents; void 0 !== kd; kd = kd.next) {
              const pd = kd.ref[Od];
              if (pd.isFiltered && this.isVisible(pd)) {
                this.markVisible(dd), Jd = !0;
                break
              }
            }
        return Jd
      }
      _recursiveDeleteVisibleChangeTree(dd) {
        dd.forEachChild((dd => {
          this.unmarkVisible(dd), this._recursiveDeleteVisibleChangeTree(dd)
        }))
      }
      _dropPendingEntries(dd) {
        this.changes.delete(dd.ref[Zd]), dd.forEachChild((dd => this._dropPendingEntries(dd)))
      }
      _removeViewField(dd, Jd, kd) {
        const pd = Jd.get(kd) === Nd.ADD;
        Jd.set(kd, Nd.DELETE);
        const Wd = dd.ref[dd.encDescriptor.names[kd]],
          Pd = Wd?.[Od];
        Pd && (this.unmarkVisible(Pd), this._recursiveDeleteVisibleChangeTree(Pd), pd && this._dropPendingEntries(Pd))
      }
    }

    function yp(dd) {
      dd.structSwitchEmitted || (dd.shouldEmitSwitch && (dd.buffer[dd.it.offset++] = 255, kJ.number(dd.buffer, dd.ref[Zd], dd.it)), dd.structSwitchEmitted = !0)
    }

    function Dp(dd, Jd) {
      cp(dd, Jd, Nd.ADD)
    }

    function Tp(dd, Jd) {
      if (Jd._fullSyncGen === dd.gen) return;
      Jd._fullSyncGen = dd.gen;
      if (!dd.hasView || dd.view.isChangeTreeVisible(Jd)) {
        const kd = Jd.encDescriptor;
        dd.changeTree = Jd, dd.ref = Jd.ref, dd.encoder = kd.encoder, dd.filter = kd.filter, dd.metadata = kd.metadata, dd.treeIsFiltered = Jd.isFiltered, dd.isSchema = kd.isSchema, dd.filterBitmask = kd.filterBitmask, dd.tags = kd.tags, dd.structSwitchEmitted = !1, dd.shouldEmitSwitch = dd.hasView || dd.it.offset > dd.initialOffset || Jd !== dd.rootChangeTree, Jd.isArray && Jd.collDirty.size > 0 && (Jd.flags |= 512), Wk(Jd, dd, Dp)
      }
      Gk(Jd, dd, Ep)
    }

    function Ep(dd, Jd, kd) {
      Tp(dd, Jd)
    }

    function cp(dd, Jd, kd) {
      if (Jd < 0) {
        if (dd.treeIsFiltered !== dd.emitFiltered) return;
        return yp(dd), void(dd.buffer[dd.it.offset++] = 255 & Math.abs(Jd))
      }
      if ((dd.isSchema ? dd.treeIsFiltered || (Jd < 32 ? 0 !== (dd.filterBitmask & 1 << Jd) : void 0 !== dd.tags[Jd]) : dd.treeIsFiltered) !== dd.emitFiltered) return;
      const pd = dd.isEncodeAll ? Nd.ADD : kd;
      void 0 !== pd && (void 0 === dd.filter || dd.filter(dd.ref, Jd, dd.view)) && (yp(dd), dd.encoder(dd.self, dd.buffer, dd.changeTree, Jd, pd, dd.it, dd.isEncodeAll, dd.hasView, dd.metadata))
    }

    function hp(dd, Jd) {
      const kd = new Uint8Array(dd.length + Jd.length);
      return kd.set(dd, 0), kd.set(Jd, dd.length), kd
    }
    class rp {
      static BUFFER_SIZE = 16384;
      sharedBuffer = new Uint8Array(rp.BUFFER_SIZE);
      context;
      state;
      root;
      constructor(dd, Jd) {
        this.context = TJ.cache(dd.constructor), this.root = Jd ?? new Sp(this.context), this.setState(dd)
      }
      setState(dd) {
        this.state = dd, this.state[Od].setRoot(this.root)
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
        let dd = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
            offset: 0
          },
          Jd = arguments.length > 1 ? arguments[1] : void 0,
          kd = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : this.sharedBuffer,
          pd = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : dd.offset;
        return this._encodeChannel(dd, Jd, kd, pd, !1)
      }
      encodeUnreliable() {
        let dd = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
            offset: 0
          },
          Jd = arguments.length > 1 ? arguments[1] : void 0,
          kd = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : this.sharedBuffer,
          pd = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : dd.offset;
        return this._encodeChannel(dd, Jd, kd, pd, !0)
      }
      _encodeChannel(dd, Jd, kd, pd, Nd) {
        this.root.pendingFilterRefresh.length > 0 && Zk(this.root);
        const Wd = void 0 !== Jd,
          Pd = this.state[Od],
          Zd = this._encodeCtx;
        Zd.self = this, Zd.buffer = kd, Zd.it = dd, Zd.view = Jd, Zd.isEncodeAll = !1, Zd.hasView = Wd, Zd.emitFiltered = Wd;
        let gd = Nd ? this.root.unreliableChanges : this.root.changes;
        for (; gd = gd.next;) {
          const kd = gd.changeTree;
          if (Wd && !Jd.isChangeTreeVisible(kd)) continue;
          const Cd = Nd ? kd.unreliableRecorder : kd;
          if (!Cd || !Cd.has()) continue;
          const Kd = kd.encDescriptor;
          Zd.changeTree = kd, Zd.ref = kd.ref, Zd.encoder = Kd.encoder, Zd.filter = Kd.filter, Zd.metadata = Kd.metadata, Zd.treeIsFiltered = kd.isFiltered, Zd.isSchema = Kd.isSchema, Zd.filterBitmask = Kd.filterBitmask, Zd.tags = Kd.tags, Zd.structSwitchEmitted = !1, Zd.isRootTree = kd === Pd, Zd.shouldEmitSwitch = Wd || dd.offset > pd || !Zd.isRootTree, Cd.forEachWithCtx(Zd, cp)
        }
        return Nd || Wd || !this._isStreamBroadcastMode || this._emitStreamBroadcast(kd, dd), dd.offset > kd.byteLength ? (kd = this._resizeBuffer(kd, dd.offset), dd.offset = pd, this._encodeChannel(dd, Jd, kd, pd, Nd)) : kd.subarray(0, dd.offset)
      }
      encodeFullSync(dd, Jd, kd, pd) {
        let Nd = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : dd.offset;
        this.root.pendingFilterRefresh.length > 0 && Zk(this.root);
        const Wd = void 0 !== pd,
          Pd = this.state[Od],
          Zd = this._encodeCtx;
        return Zd.self = this, Zd.buffer = Jd, Zd.it = dd, Zd.view = pd, Zd.isEncodeAll = !0, Zd.hasView = Wd, Zd.emitFiltered = kd, Zd.gen = ++this._fullSyncGen, Zd.initialOffset = Nd, Zd.rootChangeTree = Pd, Tp(Zd, Pd), dd.offset > Jd.byteLength ? (Jd = this._resizeBuffer(Jd, dd.offset), dd.offset = Nd, this.encodeFullSync(dd, Jd, kd, pd, Nd)) : Jd.subarray(0, dd.offset)
      }
      _resizeBuffer(dd, Jd) {
        const kd = Math.ceil(Jd / rp.BUFFER_SIZE) * rp.BUFFER_SIZE,
          pd = new Uint8Array(kd);
        return pd.set(dd), dd === this.sharedBuffer && (this.sharedBuffer = pd), pd
      }
      encodeAll() {
        let dd = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
            offset: 0
          },
          Jd = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.sharedBuffer;
        return this.encodeFullSync(dd, Jd, !1)
      }
      encodeAllView(dd, Jd, kd) {
        let pd = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : this.sharedBuffer;
        const Nd = kd.offset;
        return pd = this.encodeFullSync(kd, pd, !0, dd, Nd), hp(pd.subarray(0, Jd), pd.subarray(Nd, kd.offset))
      }
      ensureCapacity(dd, Jd) {
        if (Jd + rp.BUFFER_SIZE <= dd.byteLength) return dd;
        const kd = Math.ceil((Jd + rp.BUFFER_SIZE) / rp.BUFFER_SIZE) * rp.BUFFER_SIZE,
          pd = new Uint8Array(kd);
        return pd.set(dd.subarray(0, Jd)), dd === this.sharedBuffer && (this.sharedBuffer = pd), pd
      }
      encodeView(dd, Jd, kd) {
        let pd = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : this.sharedBuffer,
          Wd = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4];
        const Pd = kd.offset;
        this._emitStreamPriority(dd);
        for (const gd of dd.changes.keys()) {
          const Jd = dd.changes.get(gd),
            Wd = this.root.changeTrees[gd];
          if (void 0 === Wd) {
            dd.changes.delete(gd);
            continue
          }
          if (0 === Jd.size) continue;
          const Pd = Wd.encDescriptor,
            Cd = Pd.encoder,
            Kd = Pd.metadata,
            od = Wd.ref,
            Qd = Wd.refTarget;
          pd = this.ensureCapacity(pd, kd.offset), pd[kd.offset++] = 255, kJ.number(pd, od[Zd], kd);
          for (const [gd, Ld] of Jd) {
            let Jd;
            if (-1 === gd) {
              const dd = Qd.tmpItems,
                Jd = Qd.deletedIndexes;
              for (let Pd = 0; Pd < dd.length; Pd++) void 0 !== dd[Pd] && !0 !== Jd[Pd] && Cd(this, pd, Wd, Pd, Nd.ADD, kd, !1, !0, Kd);
              continue
            }
            if ("number" === typeof gd) Jd = gd;
            else {
              const kd = gd.indexInParent(od);
              if (void 0 === kd) continue;
              if (Jd = kd, Ld === Nd.ADD && Wd.getChange(Jd) === Nd.DELETE) {
                dd.changes.delete(gd.ref[Zd]);
                continue
              }
            }
            Cd(this, pd, Wd, Jd, void 0 !== Qd[ld](Jd) && Ld || Nd.DELETE, kd, !1, !0, Kd)
          }
        }
        return dd.changes.clear(), pd = this.encode(kd, dd, pd), Wd ? hp(pd.subarray(0, Jd), pd.subarray(Pd, kd.offset)) : pd.subarray(Pd, kd.offset)
      }
      encodeUnreliableView(dd, Jd, kd) {
        let pd = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : this.sharedBuffer;
        const Nd = kd.offset;
        return pd = this.encodeUnreliable(kd, dd, pd, Nd), hp(pd.subarray(0, Jd), pd.subarray(Nd, kd.offset))
      }
      _emitStreamBroadcast(dd, Jd) {
        const kd = this.root.streamTrees;
        for (const pd of kd) {
          const kd = pd,
            Wd = kd[Od],
            Pd = kd[Zd];
          if (void 0 === Pd) continue;
          const gd = kd._stream,
            Cd = gd.broadcastDeletes,
            Kd = gd.broadcastPending,
            od = gd.sentBroadcast,
            Qd = Cd.size > 0,
            Ld = Kd.size > 0,
            ed = Wd.encDescriptor,
            Rd = ed.encoder,
            Id = ed.metadata;
          if (Qd || Ld) {
            if (dd[Jd.offset++] = 255, kJ.number(dd, Pd, Jd), Qd) {
              for (const kd of Cd) Rd(this, dd, Wd, kd, Nd.DELETE, Jd, !1, !1, Id);
              Cd.clear()
            }
            const pd = gd.maxPerTick,
              Ld = [];
            let ed = 0;
            const Gd = [];
            for (const Pd of Kd) {
              if (ed >= pd) break;
              const Zd = kd[ld](Pd);
              void 0 !== Zd ? (Rd(this, dd, Wd, Pd, Nd.ADD, Jd, !1, !1, Id), od.add(Pd), Ld.push(Zd), Gd.push(Pd), ed++) : Gd.push(Pd)
            }
            for (const dd of Gd) Kd.delete(dd);
            for (const kd of Ld) {
              const pd = kd[Od];
              if (void 0 === pd) continue;
              const Wd = kd[Zd];
              if (void 0 === Wd) continue;
              dd[Jd.offset++] = 255, kJ.number(dd, Wd, Jd);
              const Pd = pd.encDescriptor,
                gd = Pd.encoder,
                Cd = Pd.metadata;
              pd.forEachLive((kd => {
                VJ.hasUnreliableAtIndex(Cd, kd) || gd(this, dd, pd, kd, Nd.ADD, Jd, !1, !1, Cd)
              }))
            }
          }
          for (const pd of od) {
            const Nd = kd[ld](pd);
            if (void 0 === Nd) continue;
            const Wd = Nd[Od];
            if (void 0 === Wd || !Wd.has()) continue;
            const Pd = Nd[Zd];
            if (void 0 === Pd) continue;
            dd[Jd.offset++] = 255, kJ.number(dd, Pd, Jd);
            const gd = Wd.encDescriptor,
              Cd = gd.encoder,
              Kd = gd.metadata;
            Wd.forEach(((kd, pd) => {
              kd < 0 || VJ.hasUnreliableAtIndex(Kd, kd) || Cd(this, dd, Wd, kd, pd, Jd, !1, !1, Kd)
            }))
          }
        }
      }
      _emitStreamPriority(dd) {
        const Jd = this.root.streamTrees;
        if (0 === Jd.size) return;
        const kd = dd.id;
        for (const pd of Jd) {
          const Jd = pd,
            Wd = Jd._stream,
            Pd = Wd.pendingByView.get(kd);
          if (void 0 === Pd || 0 === Pd.size) continue;
          const gd = Wd.priorityByView?.get(kd),
            Cd = void 0 !== gd,
            Kd = Wd.priority,
            od = Wd.maxPerTick,
            Qd = [],
            Ld = [];
          if (Cd || void 0 !== Kd) {
            const kd = [],
              pd = [];
            let Nd = 0;
            for (const Wd of Pd) {
              const Pd = Jd[ld](Wd);
              if (void 0 === Pd) {
                Ld.push(Wd);
                continue
              }
              const Zd = Cd ? gd(Pd) : Kd(dd, Pd);
              if (Nd < od) {
                let dd = Nd++;
                for (; dd > 0 && pd[dd - 1] < Zd;) pd[dd] = pd[dd - 1], kd[dd] = kd[dd - 1], dd--;
                pd[dd] = Zd, kd[dd] = Wd
              } else if (Zd > pd[od - 1]) {
                let dd = od - 1;
                for (; dd > 0 && pd[dd - 1] < Zd;) pd[dd] = pd[dd - 1], kd[dd] = kd[dd - 1], dd--;
                pd[dd] = Zd, kd[dd] = Wd
              }
            }
            for (let dd = 0; dd < Nd; dd++) Qd.push(kd[dd])
          } else
            for (const dd of Pd) {
              if (Qd.length >= od) break;
              Qd.push(dd)
            }
          for (const dd of Ld) Pd.delete(dd);
          const ed = Qd.length;
          let Rd = Wd.sentByView.get(kd);
          void 0 === Rd && (Rd = new Set, Wd.sentByView.set(kd, Rd));
          for (let kd = 0; kd < ed; kd++) {
            const pd = Qd[kd],
              Wd = Jd[ld](pd);
            if (void 0 === Wd) {
              Pd.delete(pd);
              continue
            }
            dd._addImmediate(Wd);
            const gd = Wd[Od];
            if (void 0 !== gd) {
              const Jd = Wd[Zd];
              let kd = dd.changes.get(Jd);
              void 0 === kd && (kd = new Map, dd.changes.set(Jd, kd));
              const pd = gd.metadata;
              gd.forEachLive((dd => {
                VJ.hasUnreliableAtIndex(pd, dd) || kd.set(dd, Nd.ADD)
              }))
            }
            Pd.delete(pd), Rd.add(pd)
          }
        }
      }
      discardChanges() {
        const dd = this.root.changes;
        let Jd = dd.next;
        const kd = this.root;
        for (; Jd;) {
          const dd = Jd.next;
          Jd.changeTree.endEncode(), kd.releaseNode(Jd), Jd = dd
        }
        dd.next = void 0, dd.tail = void 0
      }
      discardUnreliableChanges() {
        const dd = this.root.unreliableChanges;
        let Jd = dd.next;
        const kd = this.root;
        for (; Jd;) {
          const dd = Jd.next;
          Jd.changeTree.endEncodeUnreliable(), kd.releaseNode(Jd), Jd = dd
        }
        dd.next = void 0, dd.tail = void 0
      }
      tryEncodeTypeId(dd, Jd, kd, pd) {
        const Nd = this.context.getTypeId(Jd),
          Wd = this.context.getTypeId(kd);
        void 0 !== Wd ? Nd !== Wd && (dd[pd.offset++] = 213, kJ.number(dd, Wd, pd)) : console.warn(`@colyseus/schema WARNING: Class "${kd.name}" is not registered on TypeRegistry - Please either tag the class with @entity or define a @type() field.`)
      }
      get hasChanges() {
        return void 0 !== this.root.changes.next || this._hasStreamBacklog()
      }
      get _isStreamBroadcastMode() {
        return 0 === this.root.activeViews.size && this.root.streamTrees.size > 0
      }
      _hasStreamBacklog() {
        const dd = this.root;
        if (0 === dd.streamTrees.size) return !1;
        const Jd = 0 === dd.activeViews.size;
        for (const kd of dd.streamTrees)
          if (Jd ? bJ(kd) : mJ(kd, dd)) return !0;
        return !1
      }
      get hasUnreliableChanges() {
        return void 0 !== this.root.unreliableChanges.next
      }
    }
    class tp extends Error {
      constructor(dd) {
        super(dd), this.name = "DecodingWarning"
      }
    }
    const Vp = {
      value: 0,
      enumerable: !1,
      writable: !0
    };
    class zp {
      refs = new Map;
      refCount = {};
      deletedRefs = new Set;
      callbacks = {};
      nextUniqueId = 0;
      getNextUniqueId() {
        return this.nextUniqueId++
      }
      addRef(dd, Jd) {
        let kd = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        this.refs.set(dd, Jd), void 0 === Jd[Zd] ? (Vp.value = dd, Object.defineProperty(Jd, Zd, Vp)) : Jd[Zd] !== dd && (Jd[Zd] = dd), kd && (this.refCount[dd] = (this.refCount[dd] || 0) + 1), this.deletedRefs.has(dd) && this.deletedRefs.delete(dd)
      }
      removeRef(dd) {
        const Jd = this.refCount[dd];
        if (void 0 !== Jd)
          if (0 !== Jd)(this.refCount[dd] = Jd - 1) <= 0 && this.deletedRefs.add(dd);
          else try {
            const Jd = this.refs.get(dd);
            throw new tp(`trying to remove refId '${dd}' with 0 refCount (${Jd.constructor.name}: ${JSON.stringify(Jd)})`)
          } catch (gN) {
            console.warn(gN)
          } else try {
            throw new tp("trying to remove refId that doesn't exist: " + dd)
          } catch (gN) {
            console.warn(gN)
          }
      }
      clearRefs() {
        this.refs.clear(), this.deletedRefs.clear(), this.callbacks = {}, this.refCount = {}
      }
      garbageCollectDeletedRefs() {
        this.deletedRefs.forEach((dd => {
          if (this.refCount[dd] > 0) return;
          const Jd = this.refs.get(dd),
            kd = Jd.constructor[Symbol.metadata];
          if (null != kd)
            for (const pd in kd) {
              const dd = Jd[kd[pd].name];
              if ("object" === typeof dd && dd) {
                const Jd = dd[Zd];
                void 0 === Jd || this.deletedRefs.has(Jd) || this.removeRef(Jd)
              }
            } else "function" === typeof Jd[ed] && Array.from(Jd.values()).forEach((dd => {
              const Jd = dd[Zd];
              void 0 === Jd || this.deletedRefs.has(Jd) || this.removeRef(Jd)
            }));
          this.refs.delete(dd), delete this.refCount[dd], delete this.callbacks[dd]
        })), this.deletedRefs.clear()
      }
      addCallback(dd, Jd, kd) {
        if (void 0 === dd) {
          const dd = "number" === typeof Jd ? Nd[Jd] : Jd;
          throw new Error(`Can't addCallback on '${dd}' (refId is undefined)`)
        }
        return this.callbacks[dd] || (this.callbacks[dd] = {}), this.callbacks[dd][Jd] || (this.callbacks[dd][Jd] = []), this.callbacks[dd][Jd].push(kd), () => this.removeCallback(dd, Jd, kd)
      }
      removeCallback(dd, Jd, kd) {
        const pd = this.callbacks?.[dd]?.[Jd]?.indexOf(kd);
        void 0 !== pd && -1 !== pd && jp(this.callbacks[dd][Jd], pd)
      }
    }
    class Hp {
      context;
      state;
      root;
      currentRefId = 0;
      EY;
      resyncVisited = null;
      resyncDamaged = !1;
      constructor(dd, Jd) {
        this.setState(dd), this.context = Jd || new TJ(dd.constructor)
      }
      setState(dd) {
        this.state = dd, this.root = new zp, this.root.addRef(0, dd)
      }
      decode(dd) {
        let Jd = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
            offset: 0
          },
          kd = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : this.state;
        const Nd = void 0 !== this.EY ? [] : null,
          Wd = this.root,
          Pd = dd.byteLength;
        let Zd = kd.constructor[Kd];
        for (this.currentRefId = 0; Jd.offset < Pd;) {
          if (dd[Jd.offset] == pd) {
            Jd.offset++, kd[vd]?.();
            const pd = vJ.number(dd, Jd),
              Nd = Wd.refs.get(pd);
            Nd ? (kd = Nd, Zd = kd.constructor[Kd], this.currentRefId = pd) : (console.error(`"refId" not found: ${pd}`, {
              previousRef: kd,
              previousRefId: this.currentRefId
            }), console.warn("Please report this issue to the developers."), this.skipCurrentStructure(dd, Jd, Pd));
            continue
          } - 1 !== Zd(this, dd, Jd, kd, Nd) || (console.warn("@colyseus/schema: definition mismatch"), this.skipCurrentStructure(dd, Jd, Pd))
        }
        return kd[vd]?.(), null !== this.resyncVisited && function(dd, Jd) {
          dd.resyncDamaged ? console.warn("@colyseus/schema: resync sweep skipped \u2014 parts of the payload could not be decoded. Stale entries may persist until the next resync.") : Ek(dd, dd.state, new Set, Jd)
        }(this, Nd), null !== Nd && this.EY?.(Nd), Wd.garbageCollectDeletedRefs(), Nd
      }
      decodeResync(dd) {
        let Jd = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
          offset: 0
        };
        this.resyncVisited = new Map, this.resyncDamaged = !1;
        try {
          return this.decode(dd, Jd)
        } finally {
          this.resyncVisited = null
        }
      }
      skipCurrentStructure(dd, Jd, kd) {
        null !== this.resyncVisited && (this.resyncDamaged = !0);
        const Nd = {
          offset: Jd.offset
        };
        for (; Jd.offset < kd && (dd[Jd.offset] !== pd || (Nd.offset = Jd.offset + 1, !this.root.refs.has(vJ.number(dd, Nd))));) Jd.offset++
      }
      getInstanceType(dd, Jd, kd) {
        let pd;
        if (213 === dd[Jd.offset]) {
          Jd.offset++;
          const kd = vJ.number(dd, Jd);
          pd = this.context.get(kd)
        }
        return pd || kd
      }
      createInstanceOfType(dd) {
        return dd.initializeForDecoder()
      }
      removeChildRefs(dd, Jd) {
        const kd = "string" !== typeof dd[ed],
          pd = dd[Zd];
        dd.forEach(((Wd, Pd) => {
          Jd?.push({
            ref: dd,
            refId: pd,
            op: Nd.DELETE,
            field: Pd,
            value: void 0,
            previousValue: Wd
          }), kd && this.root.removeRef(Wd[Zd])
        }))
      }
    }
    const wp = Fp({
        min: Op.float64(),
        max: Op.float64(),
        bits: Op.uint8(),
        mode: Op.uint8()
      }, "QuantizedDescriptor"),
      Ap = Fp({
        name: Op.string(),
        type: Op.string(),
        referencedType: Op.number(),
        childPrimitive: Op.string(),
        quantized: Op.ref(wp).optional()
      }, "ReflectionField"),
      dN = Fp({
        id: Op.number(),
        extendsId: Op.number(),
        fields: Op.array(Ap)
      }, "ReflectionType"),
      JN = Fp({
        types: Op.array(dN),
        rootType: Op.number()
      }, "Reflection");

    function kN(dd) {
      const Jd = dd.root,
        kd = Jd.callbacks,
        pd = new WeakMap;
      let Wd;

      function Pd(dd, kd) {
        let Cd = kd.instance?.constructor[Symbol.metadata] || dd,
          Kd = kd.instance && "function" === typeof kd.instance.forEach || dd && !mp.is(dd);
        if (Cd && !Kd) {
          const dd = function(dd, Nd, Pd, gd) {
            return gd && void 0 !== kd.instance[Nd] && !pd.has(Wd) && Pd(kd.instance[Nd], void 0), Jd.addCallback(dd[Zd], Nd, Pd)
          };
          return new Proxy({
            listen: function(Jd, Nd) {
              let Pd = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
              if (kd.instance) return dd(kd.instance, Jd, Nd, Pd);
              {
                let Zd = () => {};
                return kd.onInstanceAvailable(((kd, gd) => {
                  Zd = dd(kd, Jd, Nd, Pd && gd && !pd.has(Wd))
                })), () => Zd()
              }
            },
            onChange: function(dd) {
              return Jd.addCallback(kd.instance[Zd], Nd.REPLACE, dd)
            },
            bindTo: function(dd, pd) {
              return pd || (pd = Object.keys(Cd).map((dd => Cd[dd].name))), Jd.addCallback(kd.instance[Zd], Nd.REPLACE, (() => {
                pd.forEach((Jd => dd[Jd] = kd.instance[Jd]))
              }))
            }
          }, {
            get(dd, Jd) {
              const pd = Cd[Cd[Jd]];
              if (pd) {
                const dd = kd.instance?.[Jd],
                  Nd = pd => {
                    const Nd = gd(kd.instance).listen(Jd, ((dd, Jd) => {
                      pd(dd, !1), Nd?.()
                    }), !1);
                    void 0 !== dd?.[Zd] && pd(dd, !0)
                  };
                return Pd(pd.type, {
                  instance: void 0 !== dd?.[Zd] && dd,
                  parentInstance: kd.instance,
                  onInstanceAvailable: Nd
                })
              }
              return dd[Jd]
            },
            has: (dd, Jd) => void 0 !== Cd[Jd],
            set(dd, Jd, kd) {
              throw new Error("not allowed")
            },
            deleteProperty(dd, Jd) {
              throw new Error("not allowed")
            }
          })
        } {
          const dd = function(dd, kd, Pd) {
              return Pd && dd.forEach(((dd, Jd) => kd(dd, Jd))), Jd.addCallback(dd[Zd], Nd.ADD, ((dd, Jd) => {
                pd.set(kd, !0), Wd = kd, kd(dd, Jd), pd.delete(kd), Wd = void 0
              }))
            },
            Pd = function(dd, kd) {
              return Jd.addCallback(dd[Zd], Nd.DELETE, kd)
            },
            gd = function(dd, kd) {
              return Jd.addCallback(dd[Zd], Nd.REPLACE, kd)
            };
          return new Proxy({
            QG: function(Jd) {
              let Nd = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
              if (kd.instance) return dd(kd.instance, Jd, Nd && !pd.has(Wd));
              if (kd.onInstanceAvailable) {
                let Pd = () => {};
                return kd.onInstanceAvailable(((kd, Zd) => {
                  Pd = dd(kd, Jd, Nd && Zd && !pd.has(Wd))
                })), () => Pd()
              }
            },
            RY: function(dd) {
              if (kd.instance) return Pd(kd.instance, dd);
              if (kd.onInstanceAvailable) {
                let Jd = () => {};
                return kd.onInstanceAvailable((kd => {
                  Jd = Pd(kd, dd)
                })), () => Jd()
              }
            },
            onChange: function(dd) {
              if (kd.instance) return gd(kd.instance, dd);
              if (kd.onInstanceAvailable) {
                let Jd = () => {};
                return kd.onInstanceAvailable((kd => {
                  Jd = gd(kd, dd)
                })), () => Jd()
              }
            }
          }, {
            get(dd, Jd) {
              if (!dd[Jd]) throw new Error(`Can't access '${Jd}' through callback proxy. access the instance directly.`);
              return dd[Jd]
            },
            has: (dd, Jd) => void 0 !== dd[Jd],
            set(dd, Jd, kd) {
              throw new Error("not allowed")
            },
            deleteProperty(dd, Jd) {
              throw new Error("not allowed")
            }
          })
        }
      }

      function gd(dd) {
        return Pd(void 0, {
          instance: dd
        })
      }
      return dd.EY = function(dd) {
        const Jd = new Set;
        for (let pd = 0, Wd = dd.length; pd < Wd; pd++) {
          const Wd = dd[pd],
            Pd = Wd.refId,
            gd = Wd.ref,
            Cd = kd[Pd];
          if (Cd) {
            if ((Wd.op & Nd.DELETE) === Nd.DELETE && mp.isSchema(Wd.previousValue)) {
              const dd = kd[Wd.previousValue[Zd]]?.[Nd.DELETE];
              for (let Jd = dd?.length - 1; Jd >= 0; Jd--) dd[Jd]()
            }
            if (mp.isSchema(gd)) {
              if (!Jd.has(Pd)) {
                const dd = Cd?.[Nd.REPLACE];
                for (let Jd = dd?.length - 1; Jd >= 0; Jd--) dd[Jd]()
              }
              if (Cd.hasOwnProperty(Wd.field)) {
                const dd = Cd[Wd.field];
                for (let Jd = dd?.length - 1; Jd >= 0; Jd--) dd[Jd](Wd.value, Wd.previousValue)
              }
            } else {
              if ((Wd.op & Nd.DELETE) === Nd.DELETE) {
                if (void 0 !== Wd.previousValue) {
                  const dd = Cd[Nd.DELETE];
                  for (let Jd = dd?.length - 1; Jd >= 0; Jd--) dd[Jd](Wd.previousValue, Wd.dynamicIndex ?? Wd.field)
                }
                if ((Wd.op & Nd.ADD) === Nd.ADD) {
                  const dd = Cd[Nd.ADD];
                  for (let Jd = dd?.length - 1; Jd >= 0; Jd--) dd[Jd](Wd.value, Wd.dynamicIndex ?? Wd.field)
                }
              } else if ((Wd.op & Nd.ADD) === Nd.ADD && Wd.previousValue !== Wd.value) {
                const dd = Cd[Nd.ADD];
                for (let Jd = dd?.length - 1; Jd >= 0; Jd--) dd[Jd](Wd.value, Wd.dynamicIndex ?? Wd.field)
              }
              if (Wd.value !== Wd.previousValue && (void 0 !== Wd.value || void 0 !== Wd.previousValue)) {
                const dd = Cd[Nd.REPLACE];
                for (let Jd = dd?.length - 1; Jd >= 0; Jd--) dd[Jd](Wd.value, Wd.dynamicIndex ?? Wd.field)
              }
            }
            Jd.add(Pd)
          }
        }
      }, gd
    }

    function pN(dd, Jd) {
      dd.EY = Jd
    }
    JN.encode = function(dd) {
      let Jd = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
        offset: 0
      };
      const kd = dd.context,
        pd = new JN,
        Nd = new rp(pd),
        Wd = kd.schemas.get(dd.state.constructor);
      Wd > 0 && (pd.rootType = Wd);
      const Pd = new Set,
        Zd = {},
        gd = dd => {
          if (void 0 === dd.extendsId || Pd.has(dd.extendsId)) {
            Pd.add(dd.id), pd.types.push(dd);
            const Jd = Zd[dd.id];
            void 0 !== Jd && (delete Zd[dd.id], Jd.forEach((dd => gd(dd))))
          } else void 0 === Zd[dd.extendsId] && (Zd[dd.extendsId] = []), Zd[dd.extendsId].push(dd)
        };
      kd.schemas.forEach(((dd, Jd) => {
        const pd = new dN;
        pd.id = Number(dd);
        const Nd = Object.getPrototypeOf(Jd);
        Nd !== mp && (pd.extendsId = kd.schemas.get(Nd));
        const Wd = Jd[Symbol.metadata];
        if (Wd !== Nd[Symbol.metadata]) {
          const dd = Wd[Md] ?? -1;
          for (let Jd = 0; Jd <= dd; Jd++) {
            const dd = Wd[Jd];
            if (void 0 === dd) continue;
            const Nd = dd.name;
            if (!Object.prototype.hasOwnProperty.call(Wd, Nd)) continue;
            const Pd = new Ap;
            let Zd;
            if (Pd.name = Nd, "string" === typeof dd.type) Zd = dd.type;
            else if (nJ(dd.type)) {
              const Jd = dd.type.quantized;
              Zd = "quantized";
              const kd = new wp;
              kd.min = Jd.min, kd.max = Jd.max, kd.bits = Jd.bits, kd.mode = Jd.wrap ? 1 : 0, Pd.quantized = kd
            } else {
              let Jd;
              mp.is(dd.type) ? (Zd = "ref", Jd = dd.type) : (Zd = Object.keys(dd.type)[0], "string" === typeof dd.type[Zd] ? Pd.childPrimitive = dd.type[Zd] : Jd = dd.type[Zd]), Pd.referencedType = Jd ? kd.getTypeId(Jd) : -1
            }
            Pd.type = Zd, pd.fields.push(Pd)
          }
        }
        gd(pd)
      }));
      for (const Cd in Zd) Zd[Cd].forEach((dd => pd.types.push(dd)));
      return Nd.encodeAll(Jd).slice(0, Jd.offset)
    }, JN.decode = function(dd, Jd) {
      const kd = new JN;
      new Hp(kd).decode(dd, Jd);
      const pd = new TJ;
      kd.types.forEach((dd => {
        const Jd = pd.get(dd.extendsId) ?? mp,
          kd = class extends Jd {};
        TJ.register(kd), pd.add(kd, dd.id)
      }), {});
      kd.types.forEach((dd => {
        const Jd = pd.get(dd.id),
          Nd = VJ.initialize(Jd),
          Wd = [];
        let Pd = dd;
        do {
          Wd.push(Pd), Pd = kd.types.find((dd => dd.id === Pd.extendsId))
        } while (Pd);
        let Zd = 0;
        Wd.reverse().forEach((dd => {
          ((dd, Jd, kd) => {
            Jd.fields.forEach(((Jd, Nd) => {
              const Wd = kd + Nd;
              if (void 0 !== Jd.quantized) {
                const kd = Jd.quantized;
                VJ.addField(dd, Wd, Jd.name, {
                  quantized: fJ({
                    min: kd.min,
                    max: kd.max,
                    bits: kd.bits,
                    mode: 1 === kd.mode ? "wrap" : "clamp"
                  })
                })
              } else if (void 0 !== Jd.referencedType) {
                const kd = Jd.type,
                  Nd = pd.get(Jd.referencedType) ?? Jd.childPrimitive;
                "ref" === kd ? VJ.addField(dd, Wd, Jd.name, Nd) : VJ.addField(dd, Wd, Jd.name, {
                  [kd]: Nd
                })
              } else VJ.addField(dd, Wd, Jd.name, Jd.type)
            }))
          })(Nd, dd, Zd), Zd += dd.fields.length
        }))
      }));
      const Nd = new(pd.get(kd.rootType || 0));
      return new Hp(Nd, pd)
    }, JN.makeEncodable = function(dd) {
      const Jd = dd[Symbol.metadata];
      if (!Jd) return dd;
      const kd = Jd[Md];
      if (void 0 === kd) return dd;
      for (let pd = 0; pd <= kd; pd++) {
        const kd = Jd[pd];
        kd && VJ.defineField(dd, Jd, pd, kd.name, kd.type)
      }
      return Object.prototype.hasOwnProperty.call(dd, sd) && delete dd[sd], dd
    };
    class NN {
      rQ;
      uniqueRefIds = new Set;
      isTriggering = !1;
      constructor(dd) {
        this.rQ = dd, this.rQ.EY = this.EY.bind(this)
      }
      get callbacks() {
        return this.rQ.root.callbacks
      }
      get state() {
        return this.rQ.state
      }
      addCallback(dd, Jd, kd) {
        return this.rQ.root.addCallback(dd, Jd, kd)
      }
      addCallbackOrWaitCollectionAvailable(dd, Jd, kd, pd) {
        let Wd = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4],
          Pd = () => {};
        const gd = () => Pd(),
          Cd = dd[Jd];
        if (Cd && void 0 !== Cd[Zd]) return Wd = Wd && !1 === this.isTriggering, kd === Nd.ADD && Wd && Cd.forEach(((dd, Jd) => {
          pd(dd, Jd)
        })), this.addCallback(Cd[Zd], kd, pd);
        {
          let Nd;
          return Nd = this.addCallback(dd[Zd], Jd, ((dd, Jd) => {
            null !== dd && void 0 !== dd && (Nd(), Pd = this.addCallback(dd[Zd], kd, pd))
          })), Pd = Nd, gd
        }
      }
      listen() {
        return "string" === typeof(arguments.length <= 0 ? void 0 : arguments[0]) ? this.listenInstance(this.state, arguments.length <= 0 ? void 0 : arguments[0], arguments.length <= 1 ? void 0 : arguments[1], arguments.length <= 2 ? void 0 : arguments[2]) : this.listenInstance(arguments.length <= 0 ? void 0 : arguments[0], arguments.length <= 1 ? void 0 : arguments[1], arguments.length <= 2 ? void 0 : arguments[2], arguments.length <= 3 ? void 0 : arguments[3])
      }
      listenInstance(dd, Jd, kd) {
        let pd = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
        pd = pd && !1 === this.isTriggering;
        const Nd = dd[Jd];
        return pd && null !== Nd && void 0 !== Nd && kd(Nd, void 0), this.addCallback(dd[Zd], Jd, kd)
      }
      onChange() {
        if (2 === arguments.length && "string" !== typeof(arguments.length <= 0 ? void 0 : arguments[0])) {
          const dd = arguments.length <= 0 ? void 0 : arguments[0],
            Jd = arguments.length <= 1 ? void 0 : arguments[1];
          return this.addCallback(dd[Zd], Nd.REPLACE, Jd)
        }
        return "string" === typeof(arguments.length <= 0 ? void 0 : arguments[0]) ? this.addCallbackOrWaitCollectionAvailable(this.state, arguments.length <= 0 ? void 0 : arguments[0], Nd.REPLACE, arguments.length <= 1 ? void 0 : arguments[1]) : this.addCallbackOrWaitCollectionAvailable(arguments.length <= 0 ? void 0 : arguments[0], arguments.length <= 1 ? void 0 : arguments[1], Nd.REPLACE, arguments.length <= 2 ? void 0 : arguments[2])
      }
      QG() {
        return "string" === typeof(arguments.length <= 0 ? void 0 : arguments[0]) ? this.addCallbackOrWaitCollectionAvailable(this.state, arguments.length <= 0 ? void 0 : arguments[0], Nd.ADD, arguments.length <= 1 ? void 0 : arguments[1], !1 !== (arguments.length <= 2 ? void 0 : arguments[2])) : this.addCallbackOrWaitCollectionAvailable(arguments.length <= 0 ? void 0 : arguments[0], arguments.length <= 1 ? void 0 : arguments[1], Nd.ADD, arguments.length <= 2 ? void 0 : arguments[2], !1 !== (arguments.length <= 3 ? void 0 : arguments[3]))
      }
      RY() {
        return "string" === typeof(arguments.length <= 0 ? void 0 : arguments[0]) ? this.addCallbackOrWaitCollectionAvailable(this.state, arguments.length <= 0 ? void 0 : arguments[0], Nd.DELETE, arguments.length <= 1 ? void 0 : arguments[1]) : this.addCallbackOrWaitCollectionAvailable(arguments.length <= 0 ? void 0 : arguments[0], arguments.length <= 1 ? void 0 : arguments[1], Nd.DELETE, arguments.length <= 2 ? void 0 : arguments[2])
      }
      bindTo(dd, Jd, kd) {
        let pd = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
        const Wd = dd.constructor[Symbol.metadata];
        kd || (kd = Object.keys(Wd).filter((dd => !isNaN(Number(dd)))).map((dd => Wd[dd].name)));
        const Pd = () => {
          for (const pd of kd) {
            const kd = dd[pd];
            void 0 !== kd && (Jd[pd] = kd)
          }
        };
        return pd && Pd(), this.addCallback(dd[Zd], Nd.REPLACE, Pd)
      }
      EY(dd) {
        this.uniqueRefIds.clear(), this.isTriggering = !0;
        for (let Jd = 0, kd = dd.length; Jd < kd; Jd++) {
          const kd = dd[Jd],
            pd = kd.refId,
            Wd = kd.ref,
            Pd = this.callbacks[pd];
          if (Pd) {
            if ((kd.op & Nd.DELETE) === Nd.DELETE && mp.isSchema(kd.previousValue)) {
              const dd = kd.previousValue[Zd],
                Jd = this.callbacks[dd]?.[Nd.DELETE];
              if (Jd)
                for (let kd = Jd.length - 1; kd >= 0; kd--) try {
                  Jd[kd]()
                } catch (gN) {
                  console.error(gN)
                }
            }
            if (mp.isSchema(Wd)) {
              if (!this.uniqueRefIds.has(pd)) {
                const dd = Pd[Nd.REPLACE];
                if (dd)
                  for (let Jd = dd.length - 1; Jd >= 0; Jd--) try {
                    dd[Jd]()
                  } catch (gN) {
                    console.error(gN)
                  }
              }
              const dd = Pd[kd.field];
              if (dd)
                for (let Jd = dd.length - 1; Jd >= 0; Jd--) try {
                  dd[Jd](kd.value, kd.previousValue)
                } catch (gN) {
                  console.error(gN)
                }
            } else {
              const dd = kd.dynamicIndex ?? kd.field;
              if ((kd.op & Nd.DELETE) === Nd.DELETE) {
                if (void 0 !== kd.previousValue) {
                  const Jd = Pd[Nd.DELETE];
                  if (Jd)
                    for (let pd = Jd.length - 1; pd >= 0; pd--) try {
                      Jd[pd](kd.previousValue, dd)
                    } catch (gN) {
                      console.error(gN)
                    }
                }
                if ((kd.op & Nd.ADD) === Nd.ADD) {
                  const Jd = Pd[Nd.ADD];
                  if (Jd)
                    for (let pd = Jd.length - 1; pd >= 0; pd--) try {
                      Jd[pd](kd.value, dd)
                    } catch (gN) {
                      console.error(gN)
                    }
                }
              } else if ((kd.op & Nd.ADD) === Nd.ADD && kd.previousValue !== kd.value) {
                const Jd = Pd[Nd.ADD];
                if (Jd)
                  for (let pd = Jd.length - 1; pd >= 0; pd--) try {
                    Jd[pd](kd.value, dd)
                  } catch (gN) {
                    console.error(gN)
                  }
              }
              if (kd.value !== kd.previousValue) {
                const Jd = Pd[Nd.REPLACE];
                if (Jd)
                  for (let pd = Jd.length - 1; pd >= 0; pd--) try {
                    Jd[pd](dd, kd.value)
                  } catch (gN) {
                    console.error(gN)
                  }
              }
            }
            this.uniqueRefIds.add(pd)
          }
        }
        this.isTriggering = !1
      }
    }
    const WN = {
      get(dd) {
        if (dd instanceof Hp) return new NN(dd);
        if ("rQ" in dd.bR) return new NN(dd.bR.rQ);
        throw new Error("Invalid room or decoder")
      },
      getLegacy(dd) {
        if (dd instanceof Hp) return kN(dd);
        if ("rQ" in dd.bR) return kN(dd.bR.rQ);
        throw new Error("Invalid room or decoder")
      },
      getRawChanges: (dd, Jd) => pN(dd, Jd)
    };
    class PN {
      _free = [];
      _factory;
      _maxSize;
      constructor(dd) {
        let Jd = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        this._factory = dd, this._maxSize = Jd.maxSize ?? 1 / 0;
        const kd = Jd.preallocate ?? 0;
        for (let pd = 0; pd < kd; pd++) this._free.push(dd())
      }
      acquire() {
        return this._free.length > 0 ? this._free.pop() : this._factory()
      }
      release(dd) {
        mp.reset(dd), this._free.length < this._maxSize && this._free.push(dd)
      }
      get size() {
        return this._free.length
      }
    }

    function ZN(dd) {
      return new PN((() => new dd), arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {})
    }
    BJ("map", {
      constructor: Pp
    }), BJ("array", {
      constructor: Np
    }), BJ("set", {
      constructor: gp
    }), BJ("collection", {
      constructor: Zp
    })
  },
  8991: (dd, Jd, kd) => {
    kd.r(Jd), kd.d(Jd, {
      __addDisposableResource: () => nd,
      __assign: () => Wd,
      __asyncDelegator: () => ad,
      __asyncGenerator: () => sd,
      __asyncValues: () => Md,
      __await: () => Bd,
      __awaiter: () => Ld,
      __classPrivateFieldGet: () => jd,
      __classPrivateFieldIn: () => fd,
      __classPrivateFieldSet: () => Xd,
      __createBinding: () => ed,
      __decorate: () => Zd,
      __disposeResources: () => yd,
      __esDecorate: () => Cd,
      __exportStar: () => Rd,
      __extends: () => Nd,
      __generator: () => Od,
      __importDefault: () => Sd,
      __importStar: () => bd,
      __makeTemplateObject: () => Fd,
      __metadata: () => Qd,
      __param: () => gd,
      __propKey: () => od,
      __read: () => Gd,
      __rest: () => Pd,
      __rewriteRelativeImportExtension: () => Dd,
      __runInitializers: () => Kd,
      __setFunctionName: () => ld,
      __spread: () => vd,
      __spreadArray: () => qd,
      __spreadArrays: () => xd,
      __values: () => Id,
      default: () => Td
    });
    var pd = function(dd, Jd) {
      return pd = Object.setPrototypeOf || {
        __proto__: []
      }
      instanceof Array && function(dd, Jd) {
        dd.__proto__ = Jd
      } || function(dd, Jd) {
        for (var kd in Jd) Object.prototype.hasOwnProperty.call(Jd, kd) && (dd[kd] = Jd[kd])
      }, pd(dd, Jd)
    };

    function Nd(dd, Jd) {
      if ("function" !== typeof Jd && null !== Jd) throw new TypeError("Class extends value " + String(Jd) + " is not a constructor or null");

      function kd() {
        this.constructor = dd
      }
      pd(dd, Jd), dd.prototype = null === Jd ? Object.create(Jd) : (kd.prototype = Jd.prototype, new kd)
    }
    var Wd = function() {
      return Wd = Object.assign || function(dd) {
        for (var Jd, kd = 1, pd = arguments.length; kd < pd; kd++)
          for (var Nd in Jd = arguments[kd]) Object.prototype.hasOwnProperty.call(Jd, Nd) && (dd[Nd] = Jd[Nd]);
        return dd
      }, Wd.apply(this, arguments)
    };

    function Pd(dd, Jd) {
      var kd = {};
      for (var pd in dd) Object.prototype.hasOwnProperty.call(dd, pd) && Jd.indexOf(pd) < 0 && (kd[pd] = dd[pd]);
      if (null != dd && "function" === typeof Object.getOwnPropertySymbols) {
        var Nd = 0;
        for (pd = Object.getOwnPropertySymbols(dd); Nd < pd.length; Nd++) Jd.indexOf(pd[Nd]) < 0 && Object.prototype.propertyIsEnumerable.call(dd, pd[Nd]) && (kd[pd[Nd]] = dd[pd[Nd]])
      }
      return kd
    }

    function Zd(dd, Jd, kd, pd) {
      var Nd, Wd = arguments.length,
        Pd = Wd < 3 ? Jd : null === pd ? pd = Object.getOwnPropertyDescriptor(Jd, kd) : pd;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) Pd = Reflect.decorate(dd, Jd, kd, pd);
      else
        for (var Zd = dd.length - 1; Zd >= 0; Zd--)(Nd = dd[Zd]) && (Pd = (Wd < 3 ? Nd(Pd) : Wd > 3 ? Nd(Jd, kd, Pd) : Nd(Jd, kd)) || Pd);
      return Wd > 3 && Pd && Object.defineProperty(Jd, kd, Pd), Pd
    }

    function gd(dd, Jd) {
      return function(kd, pd) {
        Jd(kd, pd, dd)
      }
    }

    function Cd(dd, Jd, kd, pd, Nd, Wd) {
      function Pd(dd) {
        if (void 0 !== dd && "function" !== typeof dd) throw new TypeError("Function expected");
        return dd
      }
      for (var Zd, gd = pd.kind, Cd = "getter" === gd ? "get" : "setter" === gd ? "set" : "value", Kd = !Jd && dd ? pd.static ? dd : dd.prototype : null, od = Jd || (Kd ? Object.getOwnPropertyDescriptor(Kd, pd.name) : {}), ld = !1, Qd = kd.length - 1; Qd >= 0; Qd--) {
        var Ld = {};
        for (var Od in pd) Ld[Od] = "access" === Od ? {} : pd[Od];
        for (var Od in pd.access) Ld.access[Od] = pd.access[Od];
        Ld.addInitializer = function(dd) {
          if (ld) throw new TypeError("Cannot add initializers after decoration has completed");
          Wd.push(Pd(dd || null))
        };
        var ed = (0, kd[Qd])("accessor" === gd ? {
          get: od.get,
          set: od.set
        } : od[Cd], Ld);
        if ("accessor" === gd) {
          if (void 0 === ed) continue;
          if (null === ed || "object" !== typeof ed) throw new TypeError("Object expected");
          (Zd = Pd(ed.get)) && (od.get = Zd), (Zd = Pd(ed.set)) && (od.set = Zd), (Zd = Pd(ed.init)) && Nd.unshift(Zd)
        } else(Zd = Pd(ed)) && ("field" === gd ? Nd.unshift(Zd) : od[Cd] = Zd)
      }
      Kd && Object.defineProperty(Kd, pd.name, od), ld = !0
    }

    function Kd(dd, Jd, kd) {
      for (var pd = arguments.length > 2, Nd = 0; Nd < Jd.length; Nd++) kd = pd ? Jd[Nd].call(dd, kd) : Jd[Nd].call(dd);
      return pd ? kd : void 0
    }

    function od(dd) {
      return "symbol" === typeof dd ? dd : "".concat(dd)
    }

    function ld(dd, Jd, kd) {
      return "symbol" === typeof Jd && (Jd = Jd.description ? "[".concat(Jd.description, "]") : ""), Object.defineProperty(dd, "name", {
        configurable: !0,
        value: kd ? "".concat(kd, " ", Jd) : Jd
      })
    }

    function Qd(dd, Jd) {
      if ("object" === typeof Reflect && "function" === typeof Reflect.metadata) return Reflect.metadata(dd, Jd)
    }

    function Ld(dd, Jd, kd, pd) {
      return new(kd || (kd = Promise))((function(Nd, Wd) {
        function Pd(dd) {
          try {
            gd(pd.next(dd))
          } catch (Jd) {
            Wd(Jd)
          }
        }

        function Zd(dd) {
          try {
            gd(pd.throw(dd))
          } catch (Jd) {
            Wd(Jd)
          }
        }

        function gd(dd) {
          var Jd;
          dd.done ? Nd(dd.value) : (Jd = dd.value, Jd instanceof kd ? Jd : new kd((function(dd) {
            dd(Jd)
          }))).then(Pd, Zd)
        }
        gd((pd = pd.apply(dd, Jd || [])).next())
      }))
    }

    function Od(dd, Jd) {
      var kd, pd, Nd, Wd = {
          label: 0,
          sent: function() {
            if (1 & Nd[0]) throw Nd[1];
            return Nd[1]
          },
          trys: [],
          ops: []
        },
        Pd = Object.create(("function" === typeof Iterator ? Iterator : Object).prototype);
      return Pd.next = Zd(0), Pd.throw = Zd(1), Pd.return = Zd(2), "function" === typeof Symbol && (Pd[Symbol.iterator] = function() {
        return this
      }), Pd;

      function Zd(Zd) {
        return function(gd) {
          return function(Zd) {
            if (kd) throw new TypeError("Generator is already executing.");
            for (; Pd && (Pd = 0, Zd[0] && (Wd = 0)), Wd;) try {
              if (kd = 1, pd && (Nd = 2 & Zd[0] ? pd.return : Zd[0] ? pd.throw || ((Nd = pd.return) && Nd.call(pd), 0) : pd.next) && !(Nd = Nd.call(pd, Zd[1])).done) return Nd;
              switch (pd = 0, Nd && (Zd = [2 & Zd[0], Nd.value]), Zd[0]) {
                case 0:
                case 1:
                  Nd = Zd;
                  break;
                case 4:
                  return Wd.label++, {
                    value: Zd[1],
                    done: !1
                  };
                case 5:
                  Wd.label++, pd = Zd[1], Zd = [0];
                  continue;
                case 7:
                  Zd = Wd.ops.pop(), Wd.trys.pop();
                  continue;
                default:
                  if (!(Nd = (Nd = Wd.trys).length > 0 && Nd[Nd.length - 1]) && (6 === Zd[0] || 2 === Zd[0])) {
                    Wd = 0;
                    continue
                  }
                  if (3 === Zd[0] && (!Nd || Zd[1] > Nd[0] && Zd[1] < Nd[3])) {
                    Wd.label = Zd[1];
                    break
                  }
                  if (6 === Zd[0] && Wd.label < Nd[1]) {
                    Wd.label = Nd[1], Nd = Zd;
                    break
                  }
                  if (Nd && Wd.label < Nd[2]) {
                    Wd.label = Nd[2], Wd.ops.push(Zd);
                    break
                  }
                  Nd[2] && Wd.ops.pop(), Wd.trys.pop();
                  continue
              }
              Zd = Jd.call(dd, Wd)
            } catch (gd) {
              Zd = [6, gd], pd = 0
            } finally {
              kd = Nd = 0
            }
            if (5 & Zd[0]) throw Zd[1];
            return {
              value: Zd[0] ? Zd[1] : void 0,
              done: !0
            }
          }([Zd, gd])
        }
      }
    }
    var ed = Object.create ? function(dd, Jd, kd, pd) {
      void 0 === pd && (pd = kd);
      var Nd = Object.getOwnPropertyDescriptor(Jd, kd);
      Nd && !("get" in Nd ? !Jd.__esModule : Nd.writable || Nd.configurable) || (Nd = {
        enumerable: !0,
        get: function() {
          return Jd[kd]
        }
      }), Object.defineProperty(dd, pd, Nd)
    } : function(dd, Jd, kd, pd) {
      void 0 === pd && (pd = kd), dd[pd] = Jd[kd]
    };

    function Rd(dd, Jd) {
      for (var kd in dd) "default" === kd || Object.prototype.hasOwnProperty.call(Jd, kd) || ed(Jd, dd, kd)
    }

    function Id(dd) {
      var Jd = "function" === typeof Symbol && Symbol.iterator,
        kd = Jd && dd[Jd],
        pd = 0;
      if (kd) return kd.call(dd);
      if (dd && "number" === typeof dd.length) return {
        next: function() {
          return dd && pd >= dd.length && (dd = void 0), {
            value: dd && dd[pd++],
            done: !dd
          }
        }
      };
      throw new TypeError(Jd ? "Object is not iterable." : "Symbol.iterator is not defined.")
    }

    function Gd(dd, Jd) {
      var kd = "function" === typeof Symbol && dd[Symbol.iterator];
      if (!kd) return dd;
      var pd, Nd, Wd = kd.call(dd),
        Pd = [];
      try {
        for (;
          (void 0 === Jd || Jd-- > 0) && !(pd = Wd.next()).done;) Pd.push(pd.value)
      } catch (Zd) {
        Nd = {
          error: Zd
        }
      } finally {
        try {
          pd && !pd.done && (kd = Wd.return) && kd.call(Wd)
        } finally {
          if (Nd) throw Nd.error
        }
      }
      return Pd
    }

    function vd() {
      for (var dd = [], Jd = 0; Jd < arguments.length; Jd++) dd = dd.concat(Gd(arguments[Jd]));
      return dd
    }

    function xd() {
      for (var dd = 0, Jd = 0, kd = arguments.length; Jd < kd; Jd++) dd += arguments[Jd].length;
      var pd = Array(dd),
        Nd = 0;
      for (Jd = 0; Jd < kd; Jd++)
        for (var Wd = arguments[Jd], Pd = 0, Zd = Wd.length; Pd < Zd; Pd++, Nd++) pd[Nd] = Wd[Pd];
      return pd
    }

    function qd(dd, Jd, kd) {
      if (kd || 2 === arguments.length)
        for (var pd, Nd = 0, Wd = Jd.length; Nd < Wd; Nd++) !pd && Nd in Jd || (pd || (pd = Array.prototype.slice.call(Jd, 0, Nd)), pd[Nd] = Jd[Nd]);
      return dd.concat(pd || Array.prototype.slice.call(Jd))
    }

    function Bd(dd) {
      return this instanceof Bd ? (this.v = dd, this) : new Bd(dd)
    }

    function sd(dd, Jd, kd) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var pd, Nd = kd.apply(dd, Jd || []),
        Wd = [];
      return pd = Object.create(("function" === typeof AsyncIterator ? AsyncIterator : Object).prototype), Pd("next"), Pd("throw"), Pd("return", (function(dd) {
        return function(Jd) {
          return Promise.resolve(Jd).then(dd, Cd)
        }
      })), pd[Symbol.asyncIterator] = function() {
        return this
      }, pd;

      function Pd(dd, Jd) {
        Nd[dd] && (pd[dd] = function(Jd) {
          return new Promise((function(kd, pd) {
            Wd.push([dd, Jd, kd, pd]) > 1 || Zd(dd, Jd)
          }))
        }, Jd && (pd[dd] = Jd(pd[dd])))
      }

      function Zd(dd, Jd) {
        try {
          (kd = Nd[dd](Jd)).value instanceof Bd ? Promise.resolve(kd.value.v).then(gd, Cd) : Kd(Wd[0][2], kd)
        } catch (pd) {
          Kd(Wd[0][3], pd)
        }
        var kd
      }

      function gd(dd) {
        Zd("next", dd)
      }

      function Cd(dd) {
        Zd("throw", dd)
      }

      function Kd(dd, Jd) {
        dd(Jd), Wd.shift(), Wd.length && Zd(Wd[0][0], Wd[0][1])
      }
    }

    function ad(dd) {
      var Jd, kd;
      return Jd = {}, pd("next"), pd("throw", (function(dd) {
        throw dd
      })), pd("return"), Jd[Symbol.iterator] = function() {
        return this
      }, Jd;

      function pd(pd, Nd) {
        Jd[pd] = dd[pd] ? function(Jd) {
          return (kd = !kd) ? {
            value: Bd(dd[pd](Jd)),
            done: !1
          } : Nd ? Nd(Jd) : Jd
        } : Nd
      }
    }

    function Md(dd) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var Jd, kd = dd[Symbol.asyncIterator];
      return kd ? kd.call(dd) : (dd = Id(dd), Jd = {}, pd("next"), pd("throw"), pd("return"), Jd[Symbol.asyncIterator] = function() {
        return this
      }, Jd);

      function pd(kd) {
        Jd[kd] = dd[kd] && function(Jd) {
          return new Promise((function(pd, Nd) {
            (function(dd, Jd, kd, pd) {
              Promise.resolve(pd).then((function(Jd) {
                dd({
                  value: Jd,
                  done: kd
                })
              }), Jd)
            })(pd, Nd, (Jd = dd[kd](Jd)).done, Jd.value)
          }))
        }
      }
    }

    function Fd(dd, Jd) {
      return Object.defineProperty ? Object.defineProperty(dd, "raw", {
        value: Jd
      }) : dd.raw = Jd, dd
    }
    var Yd = Object.create ? function(dd, Jd) {
        Object.defineProperty(dd, "default", {
          enumerable: !0,
          value: Jd
        })
      } : function(dd, Jd) {
        dd.default = Jd
      },
      md = function(dd) {
        return md = Object.getOwnPropertyNames || function(dd) {
          var Jd = [];
          for (var kd in dd) Object.prototype.hasOwnProperty.call(dd, kd) && (Jd[Jd.length] = kd);
          return Jd
        }, md(dd)
      };

    function bd(dd) {
      if (dd && dd.__esModule) return dd;
      var Jd = {};
      if (null != dd)
        for (var kd = md(dd), pd = 0; pd < kd.length; pd++) "default" !== kd[pd] && ed(Jd, dd, kd[pd]);
      return Yd(Jd, dd), Jd
    }

    function Sd(dd) {
      return dd && dd.__esModule ? dd : {
        default: dd
      }
    }

    function jd(dd, Jd, kd, pd) {
      if ("a" === kd && !pd) throw new TypeError("Private accessor was defined without a getter");
      if ("function" === typeof Jd ? dd !== Jd || !pd : !Jd.has(dd)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
      return "m" === kd ? pd : "a" === kd ? pd.call(dd) : pd ? pd.value : Jd.get(dd)
    }

    function Xd(dd, Jd, kd, pd, Nd) {
      if ("m" === pd) throw new TypeError("Private method is not writable");
      if ("a" === pd && !Nd) throw new TypeError("Private accessor was defined without a setter");
      if ("function" === typeof Jd ? dd !== Jd || !Nd : !Jd.has(dd)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
      return "a" === pd ? Nd.call(dd, kd) : Nd ? Nd.value = kd : Jd.set(dd, kd), kd
    }

    function fd(dd, Jd) {
      if (null === Jd || "object" !== typeof Jd && "function" !== typeof Jd) throw new TypeError("Cannot use 'in' operator on non-object");
      return "function" === typeof dd ? Jd === dd : dd.has(Jd)
    }

    function nd(dd, Jd, kd) {
      if (null !== Jd && void 0 !== Jd) {
        if ("object" !== typeof Jd && "function" !== typeof Jd) throw new TypeError("Object expected.");
        var pd, Nd;
        if (kd) {
          if (!Symbol.asyncDispose) throw new TypeError("Symbol.asyncDispose is not defined.");
          pd = Jd[Symbol.asyncDispose]
        }
        if (void 0 === pd) {
          if (!Symbol.dispose) throw new TypeError("Symbol.dispose is not defined.");
          pd = Jd[Symbol.dispose], kd && (Nd = pd)
        }
        if ("function" !== typeof pd) throw new TypeError("Object not disposable.");
        Nd && (pd = function() {
          try {
            Nd.call(this)
          } catch (dd) {
            return Promise.reject(dd)
          }
        }), dd.stack.push({
          value: Jd,
          dispose: pd,
          async: kd
        })
      } else kd && dd.stack.push({
        async: !0
      });
      return Jd
    }
    var Ud = "function" === typeof SuppressedError ? SuppressedError : function(dd, Jd, kd) {
      var pd = new Error(kd);
      return pd.name = "SuppressedError", pd.error = dd, pd.suppressed = Jd, pd
    };

    function yd(dd) {
      function Jd(Jd) {
        dd.error = dd.hasError ? new Ud(Jd, dd.error, "An error was suppressed during disposal.") : Jd, dd.hasError = !0
      }
      var kd, pd = 0;
      return function Nd() {
        for (; kd = dd.stack.pop();) try {
          if (!kd.async && 1 === pd) return pd = 0, dd.stack.push(kd), Promise.resolve().then(Nd);
          if (kd.dispose) {
            var Wd = kd.dispose.call(kd.value);
            if (kd.async) return pd |= 2, Promise.resolve(Wd).then(Nd, (function(dd) {
              return Jd(dd), Nd()
            }))
          } else pd |= 1
        } catch (Pd) {
          Jd(Pd)
        }
        if (1 === pd) return dd.hasError ? Promise.reject(dd.error) : Promise.resolve();
        if (dd.hasError) throw dd.error
      }()
    }

    function Dd(dd, Jd) {
      return "string" === typeof dd && /^\.\.?\//.test(dd) ? dd.replace(/\.(tsx)$|((?:\.d)?)((?:\.[^./]+?)?)\.([cm]?)ts$/i, (function(dd, kd, pd, Nd, Wd) {
        return kd ? Jd ? ".jsx" : ".js" : !pd || Nd && Wd ? pd + Nd + "." + Wd.toLowerCase() + "js" : dd
      })) : dd
    }
    const Td = {
      __extends: Nd,
      __assign: Wd,
      __rest: Pd,
      __decorate: Zd,
      __param: gd,
      __esDecorate: Cd,
      __runInitializers: Kd,
      __propKey: od,
      __setFunctionName: ld,
      __metadata: Qd,
      __awaiter: Ld,
      __generator: Od,
      __createBinding: ed,
      __exportStar: Rd,
      __values: Id,
      __read: Gd,
      __spread: vd,
      __spreadArrays: xd,
      __spreadArray: qd,
      __await: Bd,
      __asyncGenerator: sd,
      __asyncDelegator: ad,
      __asyncValues: Md,
      __makeTemplateObject: Fd,
      __importStar: bd,
      __importDefault: Sd,
      __classPrivateFieldGet: jd,
      __classPrivateFieldSet: Xd,
      __classPrivateFieldIn: fd,
      __addDisposableResource: nd,
      __disposeResources: yd,
      __rewriteRelativeImportExtension: Dd
    }
  }
};
Object.freeze(modules);
for (const dd in modules) Object.freeze(modules[dd]);