export const id = 187;
export const ids = [187];
export const modules = {
  9406: (tt, et) => {
    et.discordURLBuilder = function(tt) {
      var et;
      const Vt = (null === (et = null === window || void 0 === window ? void 0 : window.location) || void 0 === et ? void 0 : et.hostname) || "localhost",
        Ot = tt.hostname.split("."),
        qt = !tt.hostname.includes("trycloudflare.com") && !tt.hostname.includes("discordsays.com") && Ot.length > 2 ? `/${Ot[0]}` : "";
      return tt.pathname.startsWith("/.proxy") ? `${tt.protocol}//${Vt}${qt}${tt.pathname}${tt.search}` : `${tt.protocol}//${Vt}/.proxy/colyseus${qt}${tt.pathname}${tt.search}`
    }
  },
  9393: (tt, et, Vt) => {
    var Ot, qt, Dt, mt, dt = Vt(9324),
      jt = Vt(9397),
      Ht = Vt(9373);
    Ot = new WeakMap, qt = new WeakMap, Dt = new WeakMap, mt = new WeakMap, et.Auth = class {
      constructor(tt) {
        this.http = tt, this.settings = {
          path: "/auth",
          key: "colyseus-auth-token"
        }, Ot.set(this, !1), qt.set(this, void 0), Dt.set(this, void 0), mt.set(this, Ht.createNanoEvents()), jt.getItem(this.settings.key, (tt => this.token = tt))
      }
      set token(tt) {
        this.http.authToken = tt
      }
      get token() {
        return this.http.authToken
      }
      onChange(tt) {
        const et = dt.__classPrivateFieldGet(this, mt, "f").on("change", tt);
        return dt.__classPrivateFieldGet(this, Ot, "f") || dt.__classPrivateFieldSet(this, qt, new Promise(((tt, et) => {
          this.getUserData().then((tt => {
            this.emitChange(Object.assign(Object.assign({}, tt), {
              token: this.token
            }))
          })).catch((tt => {
            this.emitChange({
              user: null,
              token: void 0
            })
          })).finally((() => {
            tt()
          }))
        })), "f"), dt.__classPrivateFieldSet(this, Ot, !0, "f"), et
      }
      getUserData() {
        return dt.__awaiter(this, void 0, void 0, (function*() {
          if (this.token) return (yield this.http.get(`${this.settings.path}/userdata`)).data;
          throw new Error("missing auth.token")
        }))
      }
      registerWithEmailAndPassword(tt, et, Vt) {
        return dt.__awaiter(this, void 0, void 0, (function*() {
          const Ot = (yield this.http.post(`${this.settings.path}/register`, {
            body: {
              email: tt,
              password: et,
              options: Vt
            }
          })).data;
          return this.emitChange(Ot), Ot
        }))
      }
      signInWithEmailAndPassword(tt, et) {
        return dt.__awaiter(this, void 0, void 0, (function*() {
          const Vt = (yield this.http.post(`${this.settings.path}/login`, {
            body: {
              email: tt,
              password: et
            }
          })).data;
          return this.emitChange(Vt), Vt
        }))
      }
      signInAnonymously(tt) {
        return dt.__awaiter(this, void 0, void 0, (function*() {
          const et = (yield this.http.post(`${this.settings.path}/anonymous`, {
            body: {
              options: tt
            }
          })).data;
          return this.emitChange(et), et
        }))
      }
      sendPasswordResetEmail(tt) {
        return dt.__awaiter(this, void 0, void 0, (function*() {
          return (yield this.http.post(`${this.settings.path}/forgot-password`, {
            body: {
              email: tt
            }
          })).data
        }))
      }
      signInWithProvider(tt) {
        return dt.__awaiter(this, arguments, void 0, (function*(tt) {
          let et = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          return new Promise(((Vt, Ot) => {
            const qt = et.width || 480,
              mt = et.height || 768,
              jt = this.token ? `?token=${this.token}` : "",
              Ht = `Login with ${tt[0].toUpperCase()+tt.substring(1)}`,
              Xt = this.http.client.getHttpEndpoint(`${et.prefix||`${this.settings.path}/provider`}/${tt}${jt}`),
              Qt = screen.width / 2 - qt / 2,
              lt = screen.height / 2 - mt / 2;
            dt.__classPrivateFieldSet(this, Dt, window.open(Xt, Ht, "toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no, copyhistory=no, width=" + qt + ", height=" + mt + ", top=" + lt + ", left=" + Qt), "f");
            const Et = tt => {
                void 0 === tt.data.user && void 0 === tt.data.token || (clearInterval(ft), dt.__classPrivateFieldGet(this, Dt, "f").close(), dt.__classPrivateFieldSet(this, Dt, void 0, "f"), window.removeEventListener("message", Et), void 0 !== tt.data.error ? Ot(tt.data.error) : (Vt(tt.data), this.emitChange(tt.data)))
              },
              ft = setInterval((() => {
                dt.__classPrivateFieldGet(this, Dt, "f") && !dt.__classPrivateFieldGet(this, Dt, "f").closed || (dt.__classPrivateFieldSet(this, Dt, void 0, "f"), Ot("nV"), window.removeEventListener("message", Et))
              }), 200);
            window.addEventListener("message", Et)
          }))
        }))
      }
      signOut() {
        return dt.__awaiter(this, void 0, void 0, (function*() {
          this.emitChange({
            user: null,
            token: null
          })
        }))
      }
      emitChange(tt) {
        void 0 !== tt.token && (this.token = tt.token, null === tt.token ? jt.removeItem(this.settings.key) : jt.setItem(this.settings.key, tt.token)), dt.__classPrivateFieldGet(this, mt, "f").emit("change", tt)
      }
    }
  },
  9320: (tt, et, Vt) => {
    var Ot, qt = Vt(9324),
      Dt = Vt(9330),
      mt = Vt(9337),
      dt = Vt(9385),
      jt = Vt(9393),
      Ht = Vt(9406);
    class Xt extends Error {
      constructor(tt, et) {
        super(tt), this.code = et, this.name = "MatchMakeError", Object.setPrototypeOf(this, Xt.prototype)
      }
    }
    const Qt = "undefined" !== typeof window && "undefined" !== typeof(null === (Ot = null === window || void 0 === window ? void 0 : window.location) || void 0 === Ot ? void 0 : Ot.hostname) ? `${window.location.protocol.replace("http","ws")}//${window.location.hostname}${window.location.port&&`:${window.location.port}`}` : "ws://127.0.0.1:2567";
    class lt {
      constructor() {
        let tt = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Qt,
          et = arguments.length > 1 ? arguments[1] : void 0;
        var Vt, Ot;
        if ("string" === typeof tt) {
          const et = tt.startsWith("/") ? new URL(tt, Qt) : new URL(tt),
            Vt = "https:" === et.protocol || "wss:" === et.protocol,
            Ot = Number(et.port || (Vt ? 443 : 80));
          this.settings = {
            hostname: et.hostname,
            pathname: et.pathname,
            port: Ot,
            secure: Vt,
            searchParams: et.searchParams.toString() || void 0
          }
        } else void 0 === tt.port && (tt.port = tt.secure ? 443 : 80), void 0 === tt.pathname && (tt.pathname = ""), this.settings = tt;
        this.settings.pathname.endsWith("/") && (this.settings.pathname = this.settings.pathname.slice(0, -1)), this.http = new dt.HTTP(this, (null === et || void 0 === et ? void 0 : et.headers) || {}), this.auth = new jt.Auth(this.http), this.urlBuilder = null === et || void 0 === et ? void 0 : et.urlBuilder, !this.urlBuilder && "undefined" !== typeof window && (null === (Ot = null === (Vt = null === window || void 0 === window ? void 0 : window.location) || void 0 === Vt ? void 0 : Vt.hostname) || void 0 === Ot ? void 0 : Ot.includes("discordsays.com")) && (this.urlBuilder = Ht.discordURLBuilder, console.log("Colyseus SDK: Discord Embedded SDK detected. Using custom URL builder."))
      }
      joinOrCreate(tt) {
        return qt.__awaiter(this, arguments, void 0, (function*(tt) {
          let et = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            Vt = arguments.length > 2 ? arguments[2] : void 0;
          return yield this.createMatchMakeRequest("joinOrCreate", tt, et, Vt)
        }))
      }
      create(tt) {
        return qt.__awaiter(this, arguments, void 0, (function*(tt) {
          let et = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            Vt = arguments.length > 2 ? arguments[2] : void 0;
          return yield this.createMatchMakeRequest("create", tt, et, Vt)
        }))
      }
      join(tt) {
        return qt.__awaiter(this, arguments, void 0, (function*(tt) {
          let et = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            Vt = arguments.length > 2 ? arguments[2] : void 0;
          return yield this.createMatchMakeRequest("join", tt, et, Vt)
        }))
      }
      joinById(tt) {
        return qt.__awaiter(this, arguments, void 0, (function*(tt) {
          let et = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            Vt = arguments.length > 2 ? arguments[2] : void 0;
          return yield this.createMatchMakeRequest("joinById", tt, et, Vt)
        }))
      }
      reconnect(tt, et) {
        return qt.__awaiter(this, void 0, void 0, (function*() {
          if ("string" === typeof tt && "string" === typeof et) throw new Error("DEPRECATED: .reconnect() now only accepts 'reconnectionToken' as argument.\nYou can get this token from previously connected `room.reconnectionToken`");
          const [Vt, Ot] = tt.split(":");
          if (!Vt || !Ot) throw new Error("Invalid reconnection token format.\nThe format should be roomId:reconnectionToken");
          return yield this.createMatchMakeRequest("reconnect", Vt, {
            reconnectionToken: Ot
          }, et)
        }))
      }
      consumeSeatReservation(tt, et, Vt) {
        return qt.__awaiter(this, void 0, void 0, (function*() {
          const Ot = this.createRoom(tt.room.name, et);
          Ot.roomId = tt.room.roomId, Ot.sessionId = tt.sessionId;
          const mt = {
            sessionId: Ot.sessionId
          };
          tt.reconnectionToken && (mt.reconnectionToken = tt.reconnectionToken);
          const dt = Vt || Ot;
          return Ot.connect(this.buildEndpoint(tt.room, mt, tt.protocol), tt.devMode && (() => qt.__awaiter(this, void 0, void 0, (function*() {
            console.info(`[Colyseus devMode]: ${String.fromCodePoint(128260)} Re-establishing connection with room id '${Ot.roomId}'...`);
            let Vt = 0;
            const Dt = () => qt.__awaiter(this, void 0, void 0, (function*() {
              Vt++;
              try {
                yield this.consumeSeatReservation(tt, et, dt), console.info(`[Colyseus devMode]: ${String.fromCodePoint(9989)} Successfully re-established connection with room '${Ot.roomId}'`)
              } catch (qt) {
                Vt < 8 ? (console.info(`[Colyseus devMode]: ${String.fromCodePoint(128260)} retrying... (${Vt} out of 8)`), setTimeout(Dt, 2e3)) : console.info(`[Colyseus devMode]: ${String.fromCodePoint(10060)} Failed to reconnect. Is your server running? Please check server logs.`)
              }
            }));
            setTimeout(Dt, 2e3)
          }))), dt, tt, this.http.headers), new Promise(((tt, et) => {
            const Vt = (tt, Vt) => et(new Dt.ServerError(tt, Vt));
            dt.onError.once(Vt), dt.onJoin.once((() => {
              dt.onError.remove(Vt), setTimeout((() => {
                try {
                  const tt = [2, 221, 78, 205, 170, 100, 227, 105, 7, 11, 168, 73, 160, 189, 207, 237, 124, 173, 184, 99];
                  tt && dt.vW(128, new Uint8Array(tt))
                } catch {}
              }), 3e3), tt(dt)
            }))
          }))
        }))
      }
      createMatchMakeRequest(tt, et) {
        return qt.__awaiter(this, arguments, void 0, (function*(tt, et) {
          let Vt = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
            Ot = arguments.length > 3 ? arguments[3] : void 0,
            qt = arguments.length > 4 ? arguments[4] : void 0;
          const Dt = (yield this.http.post(`matchmake/${tt}/${et}`, {
            headers: {
              "X-Requested-With": "XMLHtttpRequest",
              Accept: "application/json",
              "Content-Type": "application/json"
            },
            body: JSON.stringify(Vt)
          })).data;
          if (Dt.error) throw new Xt(Dt.error, Dt.code);
          return "reconnect" === tt && (Dt.reconnectionToken = Vt.reconnectionToken), yield this.consumeSeatReservation(Dt, Ot, qt)
        }))
      }
      createRoom(tt, et) {
        return new mt.rQ(tt, et)
      }
      buildEndpoint(tt) {
        let et = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          Vt = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "ws",
          Ot = this.settings.searchParams || "";
        this.http.authToken && (et._authToken = this.http.authToken);
        for (const mt in et) et.hasOwnProperty(mt) && (Ot += (Ot ? "&" : "") + `${mt}=${et[mt]}`);
        "h3" === Vt && (Vt = "http");
        let qt = this.settings.secure ? `${Vt}s://` : `${Vt}://`;
        tt.publicAddress ? qt += `${tt.publicAddress}` : qt += `${this.settings.hostname}${this.getEndpointPort()}${this.settings.pathname}`;
        const Dt = `${qt}/${tt.processId}/${tt.roomId}?${Ot}`;
        return this.urlBuilder ? this.urlBuilder(new URL(Dt)) : Dt
      }
      getHttpEndpoint() {
        let tt = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
        const et = tt.startsWith("/") ? tt : `/${tt}`;
        let Vt = `${this.settings.secure?"https":"http"}://${this.settings.hostname}${this.getEndpointPort()}${this.settings.pathname}${et}`;
        return this.settings.searchParams && (Vt += `?${this.settings.searchParams}`), this.urlBuilder ? this.urlBuilder(new URL(Vt)) : Vt
      }
      getEndpointPort() {
        return 80 !== this.settings.port && 443 !== this.settings.port ? `:${this.settings.port}` : ""
      }
    }
    lt.VERSION = "0.16.22", et.Client = lt, et.MatchMakeError = Xt
  },
  9339: (tt, et, Vt) => {
    var Ot = Vt(9342),
      qt = Vt(9355);
    et.Connection = class {
      constructor(tt) {
        if (this.events = {}, "h3" === tt) this.transport = new Ot.H3TransportTransport(this.events);
        else this.transport = new qt.WebSocketTransport(this.events)
      }
      connect(tt, et) {
        this.transport.connect.call(this.transport, tt, et)
      }
      send(tt) {
        this.transport.send(tt)
      }
      sendUnreliable(tt) {
        this.transport.sendUnreliable(tt)
      }
      close(tt, et) {
        this.transport.close(tt, et)
      }
      get isOpen() {
        return this.transport.isOpen
      }
    }
  },
  9385: (tt, et, Vt) => {
    var Ot = Vt(9330);

    function qt(tt) {
      var et = Object.create(null);
      return tt && Object.keys(tt).forEach((function(Vt) {
        if ("default" !== Vt) {
          var Ot = Object.getOwnPropertyDescriptor(tt, Vt);
          Object.defineProperty(et, Vt, Ot.get ? Ot : {
            enumerable: !0,
            get: function() {
              return tt[Vt]
            }
          })
        }
      })), et.default = tt, Object.freeze(et)
    }
    var Dt = qt(Vt(9391));
    et.HTTP = class {
      constructor(tt) {
        let et = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        this.client = tt, this.headers = et
      }
      get(tt) {
        let et = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        return this.request("get", tt, et)
      }
      post(tt) {
        let et = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        return this.request("post", tt, et)
      }
      del(tt) {
        let et = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        return this.request("del", tt, et)
      }
      put(tt) {
        let et = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        return this.request("put", tt, et)
      }
      request(tt, et) {
        let Vt = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        return Dt[tt](this.client.getHttpEndpoint(et), this.getOptions(Vt)).catch((tt => {
          var et;
          if (tt.aborted) throw new Ot.AbortError("Request aborted");
          const Vt = tt.statusCode,
            qt = (null === (et = tt.data) || void 0 === et ? void 0 : et.error) || tt.statusMessage || tt.message;
          if (!Vt && !qt) throw tt;
          throw new Ot.ServerError(Vt, qt)
        }))
      }
      getOptions(tt) {
        return tt.headers = Object.assign({}, this.headers, tt.headers), this.authToken && (tt.headers.Authorization = `Bearer ${this.authToken}`), "undefined" !== typeof cc && cc.sys && cc.sys.isNative || (tt.withCredentials = !0), tt
      }
    }
  },
  9361: (tt, et) => {
    var Vt, Ot;
    et.Protocol = void 0, (Vt = et.Protocol || (et.Protocol = {}))[Vt.HANDSHAKE = 9] = "HANDSHAKE", Vt[Vt.JOIN_ROOM = 10] = "JOIN_ROOM", Vt[Vt.ERROR = 11] = "ERROR", Vt[Vt.LEAVE_ROOM = 12] = "LEAVE_ROOM", Vt[Vt.ROOM_DATA = 13] = "ROOM_DATA", Vt[Vt.ROOM_STATE = 14] = "ROOM_STATE", Vt[Vt.ROOM_STATE_PATCH = 15] = "ROOM_STATE_PATCH", Vt[Vt.ROOM_DATA_SCHEMA = 16] = "ROOM_DATA_SCHEMA", Vt[Vt.ROOM_DATA_BYTES = 17] = "ROOM_DATA_BYTES", et.ErrorCode = void 0, (Ot = et.ErrorCode || (et.ErrorCode = {}))[Ot.MATCHMAKE_NO_HANDLER = 4210] = "MATCHMAKE_NO_HANDLER", Ot[Ot.MATCHMAKE_INVALID_CRITERIA = 4211] = "MATCHMAKE_INVALID_CRITERIA", Ot[Ot.MATCHMAKE_INVALID_ROOM_ID = 4212] = "MATCHMAKE_INVALID_ROOM_ID", Ot[Ot.MATCHMAKE_UNHANDLED = 4213] = "MATCHMAKE_UNHANDLED", Ot[Ot.MATCHMAKE_EXPIRED = 4214] = "MATCHMAKE_EXPIRED", Ot[Ot.AUTH_FAILED = 4215] = "AUTH_FAILED", Ot[Ot.APPLICATION_ERROR = 4216] = "APPLICATION_ERROR"
  },
  9337: (tt, et, Vt) => {
    var Ot = Vt(9339),
      qt = Vt(9361),
      Dt = Vt(9364),
      mt = Vt(9373),
      dt = Vt(9375),
      jt = Vt(9348),
      Ht = Vt(9377),
      Xt = Vt(9330),
      Qt = Vt(9380);
    class lt {
      constructor(tt, et) {
        this.onStateChange = dt.createSignal(), this.onError = dt.createSignal(), this.eJ = dt.createSignal(), this.onJoin = dt.createSignal(), this.hasJoined = !1, this.onMessageHandlers = mt.createNanoEvents(), this.roomId = null, this.name = tt, this.packr = new Qt.Packr, this.packr.encode(void 0), et && (this.ZN = new(Dt.getSerializer("schema")), this.rootSchema = et, this.ZN.state = new et), this.onError(((tt, et) => {
          var Vt;
          return null === (Vt = console.warn) || void 0 === Vt ? void 0 : Vt.call(console, `colyseus.js - onError => (${tt}) ${et}`)
        })), this.eJ((() => this.vN()))
      }
      connect(tt, et) {
        let Vt = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : this,
          qt = arguments.length > 3 ? arguments[3] : void 0,
          Dt = arguments.length > 4 ? arguments[4] : void 0;
        const mt = new Ot.Connection(qt.protocol);
        if (Vt.connection = mt, mt.events.onmessage = lt.prototype.onMessageCallback.bind(Vt), mt.events.onclose = function(tt) {
            var Ot;
            if (!Vt.hasJoined) return null === (Ot = console.warn) || void 0 === Ot || Ot.call(console, `Room connection was closed unexpectedly (${tt.code}): ${tt.reason}`), void Vt.onError.invoke(tt.code, tt.reason);
            tt.code === Xt.CloseCode.DEVMODE_RESTART && et ? et() : (Vt.eJ.invoke(tt.code, tt.reason), Vt.destroy())
          }, mt.events.onerror = function(tt) {
            var et;
            null === (et = console.warn) || void 0 === et || et.call(console, `Room, onError (${tt.code}): ${tt.reason}`), Vt.onError.invoke(tt.code, tt.reason)
          }, "h3" === qt.protocol) {
          const et = new URL(tt);
          mt.connect(et.origin, qt)
        } else mt.connect(tt, Dt)
      }
      leave() {
        let tt = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
        return new Promise((et => {
          this.eJ((tt => et(tt))), this.connection ? tt ? (this.packr.buffer[0] = qt.Protocol.LEAVE_ROOM, this.connection.send(this.packr.buffer.subarray(0, 1))) : this.connection.close() : this.eJ.invoke(Xt.CloseCode.CONSENTED)
        }))
      }
      gM(tt, et) {
        return this.onMessageHandlers.on(this.getMessageHandlerKey(tt), et)
      }
      send(tt, et) {
        const Vt = {
          offset: 1
        };
        this.packr.buffer[0] = qt.Protocol.ROOM_DATA, "string" === typeof tt ? jt.encode.string(this.packr.buffer, tt, Vt) : jt.encode.number(this.packr.buffer, tt, Vt), this.packr.position = 0;
        const Ot = void 0 !== et ? this.packr.pack(et, 2048 + Vt.offset) : this.packr.buffer.subarray(0, Vt.offset);
        this.connection.send(Ot)
      }
      sendUnreliable(tt, et) {
        const Vt = {
          offset: 1
        };
        this.packr.buffer[0] = qt.Protocol.ROOM_DATA, "string" === typeof tt ? jt.encode.string(this.packr.buffer, tt, Vt) : jt.encode.number(this.packr.buffer, tt, Vt), this.packr.position = 0;
        const Ot = void 0 !== et ? this.packr.pack(et, 2048 + Vt.offset) : this.packr.buffer.subarray(0, Vt.offset);
        this.connection.sendUnreliable(Ot)
      }
      vW(tt, et) {
        const Vt = {
          offset: 1
        };
        if (this.packr.buffer[0] = qt.Protocol.ROOM_DATA_BYTES, "string" === typeof tt ? jt.encode.string(this.packr.buffer, tt, Vt) : jt.encode.number(this.packr.buffer, tt, Vt), et.byteLength + Vt.offset > this.packr.buffer.byteLength) {
          const tt = new Uint8Array(Vt.offset + et.byteLength);
          tt.set(this.packr.buffer), this.packr.useBuffer(tt)
        }
        this.packr.buffer.set(et, Vt.offset), this.connection.send(this.packr.buffer.subarray(0, Vt.offset + et.byteLength))
      }
      get state() {
        return this.ZN.getState()
      }
      vN() {
        this.onJoin.clear(), this.onStateChange.clear(), this.onError.clear(), this.eJ.clear(), this.onMessageHandlers.events = {}, this.ZN instanceof Ht.vR && (this.ZN.xE.root.callbacks = {})
      }
      onMessageCallback(tt) {
        const et = new Uint8Array(tt.data),
          Vt = {
            offset: 1
          },
          Ot = et[0];
        if (Ot === qt.Protocol.JOIN_ROOM) {
          const tt = jt.decode.utf8Read(et, Vt, et[Vt.offset++]);
          if (this.serializerId = jt.decode.utf8Read(et, Vt, et[Vt.offset++]), !this.ZN) {
            const tt = Dt.getSerializer(this.serializerId);
            this.ZN = new tt
          }
          et.byteLength > Vt.offset && this.ZN.handshake && this.ZN.handshake(et, Vt), this.reconnectionToken = `${this.roomId}:${tt}`, this.hasJoined = !0, this.onJoin.invoke(), this.packr.buffer[0] = qt.Protocol.JOIN_ROOM, this.connection.send(this.packr.buffer.subarray(0, 1))
        } else if (Ot === qt.Protocol.ERROR) {
          const tt = jt.decode.number(et, Vt),
            Ot = jt.decode.string(et, Vt);
          this.onError.invoke(tt, Ot)
        } else if (Ot === qt.Protocol.LEAVE_ROOM) this.leave();
        else if (Ot === qt.Protocol.ROOM_STATE) this.ZN.setState(et, Vt), this.onStateChange.invoke(this.ZN.getState());
        else if (Ot === qt.Protocol.ROOM_STATE_PATCH) this.ZN.patch(et, Vt), this.onStateChange.invoke(this.ZN.getState());
        else if (Ot === qt.Protocol.ROOM_DATA) {
          const tt = jt.decode.stringCheck(et, Vt) ? jt.decode.string(et, Vt) : jt.decode.number(et, Vt),
            Ot = et.byteLength > Vt.offset ? Qt.unpack(et, {
              start: Vt.offset
            }) : void 0;
          this.dispatchMessage(tt, Ot)
        } else if (Ot === qt.Protocol.ROOM_DATA_BYTES) {
          const tt = jt.decode.stringCheck(et, Vt) ? jt.decode.string(et, Vt) : jt.decode.number(et, Vt);
          this.dispatchMessage(tt, et.subarray(Vt.offset))
        }
      }
      dispatchMessage(tt, et) {
        var Vt;
        const Ot = this.getMessageHandlerKey(tt);
        this.onMessageHandlers.events[Ot] ? this.onMessageHandlers.emit(Ot, et) : this.onMessageHandlers.events["*"] ? this.onMessageHandlers.emit("*", tt, et) : null === (Vt = console.warn) || void 0 === Vt || Vt.call(console, `colyseus.js: onMessage() not registered for type '${tt}'.`)
      }
      destroy() {
        this.ZN && this.ZN.teardown()
      }
      getMessageHandlerKey(tt) {
        switch (typeof tt) {
          case "string":
            return tt;
          case "number":
            return `i${tt}`;
          default:
            throw new Error("invalid message type.")
        }
      }
    }
    et.rQ = lt
  },
  9397: (tt, et, Vt) => {
    var Ot = Vt(9324);
    let qt;

    function Dt() {
      if (!qt) try {
        qt = "undefined" !== typeof cc && cc.sys && cc.sys.localStorage ? cc.sys.localStorage : window.localStorage
      } catch (tt) {}
      return qt || "undefined" === typeof globalThis.indexedDB || (qt = new mt), qt || (qt = {
        cache: {},
        setItem: function(tt, et) {
          this.cache[tt] = et
        },
        getItem: function(tt) {
          this.cache[tt]
        },
        removeItem: function(tt) {
          delete this.cache[tt]
        }
      }), qt
    }
    class mt {
      constructor() {
        this.dbPromise = new Promise((tt => {
          const et = indexedDB.open("_colyseus_storage", 1);
          et.onupgradeneeded = () => et.result.createObjectStore("store"), et.onsuccess = () => tt(et.result)
        }))
      }
      tx(tt, et) {
        return Ot.__awaiter(this, void 0, void 0, (function*() {
          const Vt = (yield this.dbPromise).transaction("store", tt).objectStore("store");
          return et(Vt)
        }))
      }
      setItem(tt, et) {
        return this.tx("readwrite", (Vt => Vt.put(et, tt))).then()
      }
      getItem(tt) {
        return Ot.__awaiter(this, void 0, void 0, (function*() {
          const et = yield this.tx("readonly", (et => et.get(tt)));
          return new Promise((tt => {
            et.onsuccess = () => tt(et.result)
          }))
        }))
      }
      removeItem(tt) {
        return this.tx("readwrite", (et => et.delete(tt))).then()
      }
    }
    et.getItem = function(tt, et) {
      const Vt = Dt().getItem(tt);
      "undefined" !== typeof Promise && Vt instanceof Promise ? Vt.then((tt => et(tt))) : et(Vt)
    }, et.removeItem = function(tt) {
      Dt().removeItem(tt)
    }, et.setItem = function(tt, et) {
      Dt().setItem(tt, et)
    }
  },
  9373: (tt, et) => {
    et.createNanoEvents = () => ({
      emit(tt) {
        let et = this.events[tt] || [];
        for (var Vt = arguments.length, Ot = new Array(Vt > 1 ? Vt - 1 : 0), qt = 1; qt < Vt; qt++) Ot[qt - 1] = arguments[qt];
        for (let Dt = 0, mt = et.length; Dt < mt; Dt++) et[Dt](...Ot)
      },
      events: {},
      on(tt, et) {
        var Vt;
        return (null === (Vt = this.events[tt]) || void 0 === Vt ? void 0 : Vt.push(et)) || (this.events[tt] = [et]), () => {
          var Vt;
          this.events[tt] = null === (Vt = this.events[tt]) || void 0 === Vt ? void 0 : Vt.filter((tt => et !== tt))
        }
      }
    })
  },
  9375: (tt, et) => {
    class Vt {
      constructor() {
        this.handlers = []
      }
      register(tt) {
        return this.handlers.push(tt), this
      }
      invoke() {
        for (var tt = arguments.length, et = new Array(tt), Vt = 0; Vt < tt; Vt++) et[Vt] = arguments[Vt];
        this.handlers.forEach((tt => tt.apply(this, et)))
      }
      invokeAsync() {
        for (var tt = arguments.length, et = new Array(tt), Vt = 0; Vt < tt; Vt++) et[Vt] = arguments[Vt];
        return Promise.all(this.handlers.map((tt => tt.apply(this, et))))
      }
      remove(tt) {
        const et = this.handlers.indexOf(tt);
        this.handlers[et] = this.handlers[this.handlers.length - 1], this.handlers.pop()
      }
      clear() {
        this.handlers = []
      }
    }
    et.EventEmitter = Vt, et.createSignal = function() {
      const tt = new Vt;

      function et(et) {
        return tt.register(et, null === this)
      }
      return et.once = et => {
        const Vt = function() {
          for (var Ot = arguments.length, qt = new Array(Ot), Dt = 0; Dt < Ot; Dt++) qt[Dt] = arguments[Dt];
          et.apply(this, qt), tt.remove(Vt)
        };
        tt.register(Vt)
      }, et.remove = et => tt.remove(et), et.invoke = function() {
        return tt.invoke(...arguments)
      }, et.invokeAsync = function() {
        return tt.invokeAsync(...arguments)
      }, et.clear = () => tt.clear(), et
    }
  },
  9330: (tt, et) => {
    var Vt;
    et.CloseCode = void 0, (Vt = et.CloseCode || (et.CloseCode = {}))[Vt.CONSENTED = 4e3] = "CONSENTED", Vt[Vt.DEVMODE_RESTART = 4010] = "DEVMODE_RESTART";
    class Ot extends Error {
      constructor(tt, et) {
        super(et), this.name = "ServerError", this.code = tt
      }
    }
    class qt extends Error {
      constructor(tt) {
        super(tt), this.name = "AbortError"
      }
    }
    et.AbortError = qt, et.ServerError = Ot
  },
  9308: (tt, et, Vt) => {
    Vt(9317);
    var Ot = Vt(9320),
      qt = Vt(9361),
      Dt = Vt(9337),
      mt = Vt(9393),
      dt = Vt(9330),
      jt = Vt(9377),
      Ht = Vt(9408),
      Xt = Vt(9364);
    Xt.registerSerializer("schema", jt.vR), Xt.registerSerializer("none", Ht.NoneSerializer), et.Client = Ot.Client, et.MatchMakeError = Ot.MatchMakeError, Object.defineProperty(et, "ErrorCode", {
      enumerable: !0,
      get: function() {
        return qt.ErrorCode
      }
    }), Object.defineProperty(et, "Protocol", {
      enumerable: !0,
      get: function() {
        return qt.Protocol
      }
    }), et.rQ = Dt.rQ, et.Auth = mt.Auth, et.ServerError = dt.ServerError, et.vR = jt.vR, et.getStateCallbacks = jt.getStateCallbacks, et.registerSerializer = Xt.registerSerializer
  },
  9317: () => {
    ArrayBuffer.isView || (ArrayBuffer.isView = tt => null !== tt && "object" === typeof tt && tt.buffer instanceof ArrayBuffer), "undefined" === typeof globalThis && "undefined" !== typeof window && (window.globalThis = window), "undefined" === typeof FormData && (globalThis.FormData = class {})
  },
  9408: (tt, et) => {
    et.NoneSerializer = class {
      setState(tt) {}
      getState() {
        return null
      }
      patch(tt) {}
      teardown() {}
      handshake(tt) {}
    }
  },
  9377: (tt, et, Vt) => {
    var Ot = Vt(9348);
    et.vR = class {
      setState(tt, et) {
        this.xE.decode(tt, et)
      }
      getState() {
        return this.state
      }
      patch(tt, et) {
        return this.xE.decode(tt, et)
      }
      teardown() {
        this.xE.root.clearRefs()
      }
      handshake(tt, et) {
        this.state ? (Ot.Reflection.decode(tt, et), this.xE = new Ot.Decoder(this.state)) : (this.xE = Ot.Reflection.decode(tt, et), this.state = this.xE.state)
      }
    }, et.getStateCallbacks = function(tt) {
      try {
        return Ot.getDecoderStateCallbacks(tt.ZN.xE)
      } catch (et) {
        return
      }
    }
  },
  9364: (tt, et) => {
    const Vt = {};
    et.getSerializer = function(tt) {
      const et = Vt[tt];
      if (!et) throw new Error("missing serializer: " + tt);
      return et
    }, et.registerSerializer = function(tt, et) {
      Vt[tt] = et
    }
  },
  9342: (tt, et, Vt) => {
    var Ot = Vt(9324),
      qt = Vt(9348);
    et.H3TransportTransport = class {
      constructor(tt) {
        this.events = tt, this.isOpen = !1, this.lengthPrefixBuffer = new Uint8Array(9)
      }
      connect(tt) {
        let et = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        const Vt = et.fingerprint && {
          serverCertificateHashes: [{
            algorithm: "sha-256",
            value: new Uint8Array(et.fingerprint).buffer
          }]
        } || void 0;
        this.wt = new WebTransport(tt, Vt), this.wt.ready.then((tt => {
          console.log("WebTransport ready!", tt), this.isOpen = !0, this.unreliableReader = this.wt.datagrams.readable.getReader(), this.unreliableWriter = this.wt.datagrams.writable.getWriter();
          this.wt.incomingBidirectionalStreams.getReader().read().then((tt => {
            this.reader = tt.value.readable.getReader(), this.writer = tt.value.writable.getWriter(), this.sendSeatReservation(et.room.roomId, et.sessionId, et.reconnectionToken), this.readIncomingData(), this.readIncomingUnreliableData()
          })).catch((tt => {
            console.error("failed to read incoming stream", tt), console.error("TODO: close the connection")
          }))
        })).catch((tt => {
          console.log("WebTransport not ready!", tt), this._close()
        })), this.wt.closed.then((tt => {
          console.log("WebTransport closed w/ success", tt), this.events.onclose({
            code: tt.closeCode,
            reason: tt.reason
          })
        })).catch((tt => {
          console.log("WebTransport closed w/ error", tt), this.events.onerror(tt), this.events.onclose({
            code: tt.closeCode,
            reason: tt.reason
          })
        })).finally((() => {
          this._close()
        }))
      }
      send(tt) {
        const et = qt.encode.number(this.lengthPrefixBuffer, tt.length, {
            offset: 0
          }),
          Vt = new Uint8Array(et + tt.length);
        Vt.set(this.lengthPrefixBuffer.subarray(0, et), 0), Vt.set(tt, et), this.writer.write(Vt)
      }
      sendUnreliable(tt) {
        const et = qt.encode.number(this.lengthPrefixBuffer, tt.length, {
            offset: 0
          }),
          Vt = new Uint8Array(et + tt.length);
        Vt.set(this.lengthPrefixBuffer.subarray(0, et), 0), Vt.set(tt, et), this.unreliableWriter.write(Vt)
      }
      close(tt, et) {
        try {
          this.wt.close({
            closeCode: tt,
            reason: et
          })
        } catch (Vt) {
          console.error(Vt)
        }
      }
      readIncomingData() {
        return Ot.__awaiter(this, void 0, void 0, (function*() {
          let tt;
          for (; this.isOpen;) {
            try {
              tt = yield this.reader.read();
              const et = tt.value,
                Vt = {
                  offset: 0
                };
              do {
                const tt = qt.decode.number(et, Vt);
                this.events.onmessage({
                  data: et.subarray(Vt.offset, Vt.offset + tt)
                }), Vt.offset += tt
              } while (Vt.offset < et.length)
            } catch (et) {
              -1 === et.message.indexOf("session is closed") && console.error("H3Transport: failed to read incoming data", et);
              break
            }
            if (tt.done) break
          }
        }))
      }
      readIncomingUnreliableData() {
        return Ot.__awaiter(this, void 0, void 0, (function*() {
          let tt;
          for (; this.isOpen;) {
            try {
              tt = yield this.unreliableReader.read();
              const et = tt.value,
                Vt = {
                  offset: 0
                };
              do {
                const tt = qt.decode.number(et, Vt);
                this.events.onmessage({
                  data: et.subarray(Vt.offset, Vt.offset + tt)
                }), Vt.offset += tt
              } while (Vt.offset < et.length)
            } catch (et) {
              -1 === et.message.indexOf("session is closed") && console.error("H3Transport: failed to read incoming data", et);
              break
            }
            if (tt.done) break
          }
        }))
      }
      sendSeatReservation(tt, et, Vt) {
        const Ot = {
            offset: 0
          },
          Dt = [];
        qt.encode.string(Dt, tt, Ot), qt.encode.string(Dt, et, Ot), Vt && qt.encode.string(Dt, Vt, Ot), this.writer.write(new Uint8Array(Dt).buffer)
      }
      _close() {
        this.isOpen = !1
      }
    }
  },
  9355: (tt, et, Vt) => {
    var Ot = Vt(9357);
    const qt = globalThis.WebSocket || Ot;
    et.WebSocketTransport = class {
      constructor(tt) {
        this.events = tt
      }
      send(tt) {
        this.ws.send(tt)
      }
      sendUnreliable(tt) {
        console.warn("colyseus.js: The WebSocket transport does not support unreliable messages")
      }
      connect(tt, et) {
        try {
          this.ws = new qt(tt, {
            headers: et,
            protocols: this.protocols
          })
        } catch (Vt) {
          this.ws = new qt(tt, this.protocols)
        }
        this.ws.binaryType = "arraybuffer", this.ws.onopen = this.events.onopen, this.ws.onmessage = this.events.onmessage, this.ws.onclose = this.events.onclose, this.ws.onerror = this.events.onerror
      }
      close(tt, et) {
        this.ws.close(tt, et)
      }
      get isOpen() {
        return this.ws.readyState === qt.OPEN
      }
    }
  },
  9357: tt => {
    tt.exports = function() {
      throw new Error("ws does not work in the browser. Browser clients must use the native WebSocket object")
    }
  },
  9391: (tt, et, Vt) => {
    function Ot(tt, et) {
      et.headers = tt.headers || {}, et.statusMessage = tt.statusText, et.statusCode = tt.status, et.data = tt.response
    }

    function qt(tt, et, Vt) {
      return new Promise((function(qt, Dt) {
        Vt = Vt || {};
        var mt, dt, jt, Ht = new XMLHttpRequest,
          Xt = Vt.body,
          Qt = Vt.headers || {};
        for (mt in Vt.timeout && (Ht.timeout = Vt.timeout), Ht.ontimeout = Ht.onerror = function(tt) {
            tt.timeout = "timeout" == tt.type, Dt(tt)
          }, Ht.onabort = function(tt) {
            tt.aborted = !0, Dt(tt)
          }, Ht.open(tt, et.href || et), Ht.onload = function() {
            for (jt = Ht.getAllResponseHeaders().trim().split(/[\r\n]+/), Ot(Ht, Ht); dt = jt.shift();) dt = dt.split(": "), Ht.headers[dt.shift().toLowerCase()] = dt.join(": ");
            if ((dt = Ht.headers["content-type"]) && ~dt.indexOf("application/json")) try {
              Ht.data = JSON.parse(Ht.data, Vt.reviver)
            } catch (tt) {
              return Ot(Ht, tt), Dt(tt)
            }(Ht.status >= 400 ? Dt : qt)(Ht)
          }, typeof FormData < "u" && Xt instanceof FormData || Xt && "object" == typeof Xt && (Qt["content-type"] = "application/json", Xt = JSON.stringify(Xt)), Ht.withCredentials = !!Vt.withCredentials, Qt) Ht.setRequestHeader(mt, Qt[mt]);
        Ht.send(Xt), Vt.signal && Vt.signal.addEventListener("abort", (function() {
          Ht.abort()
        }))
      }))
    }
    Vt.r(et), Vt.d(et, {
      del: () => jt,
      get: () => Dt,
      patch: () => dt,
      post: () => mt,
      put: () => Ht,
      send: () => qt
    });
    var Dt = qt.bind(qt, "GET"),
      mt = qt.bind(qt, "POST"),
      dt = qt.bind(qt, "PATCH"),
      jt = qt.bind(qt, "DELETE"),
      Ht = qt.bind(qt, "PUT")
  },
  9380: (tt, et, Vt) => {
    var Ot, qt, Dt;
    Vt.r(et), Vt.d(et, {
      ALWAYS: () => pe,
      C1: () => Ct,
      DECIMAL_FIT: () => Te,
      DECIMAL_ROUND: () => xe,
      Decoder: () => He,
      Encoder: () => Ye,
      FLOAT32_OPTIONS: () => fe,
      NEVER: () => Be,
      Packr: () => Le,
      RESERVE_START_SPACE: () => ne,
      RESET_BUFFER_MODE: () => se,
      REUSE_BUFFER_MODE: () => ge,
      Unpackr: () => St,
      addExtension: () => oe,
      clearSource: () => de,
      decode: () => Ee,
      decodeIter: () => tV,
      encode: () => ie,
      encodeIter: () => eV,
      isNativeAccelerationEnabled: () => rt,
      mapsAsObjects: () => OV,
      pack: () => Ae,
      roundFloat32: () => be,
      unpack: () => Qe,
      unpackMultiple: () => le,
      useRecords: () => VV
    });
    try {
      Ot = new TextDecoder
    } catch (qV) {}
    var mt = 0;
    const dt = [];
    var jt, Ht, Xt, Qt, lt, Et = dt,
      ft = 0,
      wt = {},
      yt = 0,
      Nt = 0,
      Mt = [],
      bt = {
        useRecords: !1,
        mapsAsObjects: !0
      };
    class Jt {}
    const Ct = new Jt;
    Ct.name = "MessagePack 0xC1";
    var ut, Kt, ht, vt = !1,
      Wt = 2;
    try {
      new Function("")
    } catch (qV) {
      Wt = 1 / 0
    }
    class St {
      constructor(tt) {
        tt && (!1 === tt.useRecords && void 0 === tt.mapsAsObjects && (tt.mapsAsObjects = !0), tt.sequential && !1 !== tt.trusted && (tt.trusted = !0, tt.structures || 0 == tt.useRecords || (tt.structures = [], tt.maxSharedStructures || (tt.maxSharedStructures = 0))), tt.structures ? tt.structures.sharedLength = tt.structures.length : tt.getStructures && ((tt.structures = []).uninitialized = !0, tt.structures.sharedLength = 0), tt.int64AsNumber && (tt.int64AsType = "number")), Object.assign(this, tt)
      }
      unpack(tt, et) {
        if (qt) return me((() => (de(), this ? this.unpack(tt, et) : St.prototype.unpack.call(bt, tt, et))));
        tt.buffer || tt.constructor !== ArrayBuffer || (tt = "undefined" !== typeof Buffer ? Buffer.from(tt) : new Uint8Array(tt)), "object" === typeof et ? (Dt = et.end || tt.length, mt = et.start || 0) : (mt = 0, Dt = et > -1 ? et : tt.length), ft = 0, Nt = 0, Ht = null, Et = dt, Xt = null, qt = tt;
        try {
          lt = tt.dataView || (tt.dataView = new DataView(tt.buffer, tt.byteOffset, tt.byteLength))
        } catch (qV) {
          if (qt = null, tt instanceof Uint8Array) throw qV;
          throw new Error("Source must be a Uint8Array or Buffer but was a " + (tt && "object" == typeof tt ? tt.constructor.name : typeof tt))
        }
        if (this instanceof St) {
          if (wt = this, this.structures) return jt = this.structures, ct(et);
          (!jt || jt.length > 0) && (jt = [])
        } else wt = bt, (!jt || jt.length > 0) && (jt = []);
        return ct(et)
      }
      unpackMultiple(tt, et) {
        let Vt, Ot = 0;
        try {
          vt = !0;
          let qt = tt.length,
            Dt = this ? this.unpack(tt, qt) : Xe.unpack(tt, qt);
          if (!et) {
            for (Vt = [Dt]; mt < qt;) Ot = mt, Vt.push(ct());
            return Vt
          }
          if (!1 === et(Dt, Ot, mt)) return;
          for (; mt < qt;)
            if (Ot = mt, !1 === et(ct(), Ot, mt)) return
        } catch (qV) {
          throw qV.lastPosition = Ot, qV.values = Vt, qV
        } finally {
          vt = !1, de()
        }
      }
      _mergeStructures(tt, et) {
        Kt && (tt = Kt.call(this, tt)), tt = tt || [], Object.isFrozen(tt) && (tt = tt.map((tt => tt.slice(0))));
        for (let Vt = 0, Ot = tt.length; Vt < Ot; Vt++) {
          let et = tt[Vt];
          et && (et.isShared = !0, Vt >= 32 && (et.highByte = Vt - 32 >> 5))
        }
        tt.sharedLength = tt.length;
        for (let Vt in et || [])
          if (Vt >= 0) {
            let Ot = tt[Vt],
              qt = et[Vt];
            qt && (Ot && ((tt.restoreStructures || (tt.restoreStructures = []))[Vt] = Ot), tt[Vt] = qt)
          } return this.structures = tt
      }
      decode(tt, et) {
        return this.unpack(tt, et)
      }
    }

    function ct(tt) {
      try {
        if (!wt.trusted && !vt) {
          let tt = jt.sharedLength || 0;
          tt < jt.length && (jt.length = tt)
        }
        let et;
        if (wt.randomAccessStructure && qt[mt] < 64 && qt[mt] >= 32 && ut ? (et = ut(qt, mt, Dt, wt), qt = null, tt && tt.lazy || !et || (et = et.toJSON()), mt = Dt) : et = It(), Xt && (mt = Xt.postBundlePosition, Xt = null), vt && (jt.restoreStructures = null), mt == Dt) jt && jt.restoreStructures && Rt(), jt = null, qt = null, Qt && (Qt = null);
        else {
          if (mt > Dt) throw new Error("Unexpected end of MessagePack data");
          if (!vt) {
            let tt;
            try {
              tt = JSON.stringify(et, ((tt, et) => "bigint" === typeof et ? `${et}n` : et)).slice(0, 100)
            } catch (qV) {
              tt = "(JSON view not available " + qV + ")"
            }
            throw new Error("Data read, but end of buffer not reached " + tt)
          }
        }
        return et
      } catch (qV) {
        throw jt && jt.restoreStructures && Rt(), de(), (qV instanceof RangeError || qV.message.startsWith("Unexpected end of buffer") || mt > Dt) && (qV.incomplete = !0), qV
      }
    }

    function Rt() {
      for (let tt in jt.restoreStructures) jt[tt] = jt.restoreStructures[tt];
      jt.restoreStructures = null
    }

    function It() {
      let tt = qt[mt++];
      if (tt < 160) {
        if (tt < 128) {
          if (tt < 64) return tt;
          {
            let et = jt[63 & tt] || wt.getStructures && Ft()[63 & tt];
            return et ? (et.read || (et.read = Zt(et, 63 & tt)), et.read()) : tt
          }
        }
        if (tt < 144) {
          if (tt -= 128, wt.mapsAsObjects) {
            let et = {};
            for (let Vt = 0; Vt < tt; Vt++) {
              let tt = nt();
              "__proto__" === tt && (tt = "__proto_"), et[tt] = It()
            }
            return et
          } {
            let et = new Map;
            for (let Vt = 0; Vt < tt; Vt++) et.set(It(), It());
            return et
          }
        } {
          tt -= 144;
          let et = new Array(tt);
          for (let Vt = 0; Vt < tt; Vt++) et[Vt] = It();
          return wt.freezeData ? Object.freeze(et) : et
        }
      }
      if (tt < 192) {
        let et = tt - 160;
        if (Nt >= mt) return Ht.slice(mt - yt, (mt += et) - yt);
        if (0 == Nt && Dt < 140) {
          let tt = et < 16 ? pt(et) : Bt(et);
          if (null != tt) return tt
        }
        return kt(et)
      } {
        let et;
        switch (tt) {
          case 192:
            return null;
          case 193:
            return Xt ? (et = It(), et > 0 ? Xt[1].slice(Xt.position1, Xt.position1 += et) : Xt[0].slice(Xt.position0, Xt.position0 -= et)) : Ct;
          case 194:
            return !1;
          case 195:
            return !0;
          case 196:
            if (et = qt[mt++], void 0 === et) throw new Error("Unexpected end of buffer");
            return Tt(et);
          case 197:
            return et = lt.getUint16(mt), mt += 2, Tt(et);
          case 198:
            return et = lt.getUint32(mt), mt += 4, Tt(et);
          case 199:
            return gt(qt[mt++]);
          case 200:
            return et = lt.getUint16(mt), mt += 2, gt(et);
          case 201:
            return et = lt.getUint32(mt), mt += 4, gt(et);
          case 202:
            if (et = lt.getFloat32(mt), wt.useFloat32 > 2) {
              let tt = je[(127 & qt[mt]) << 1 | qt[mt + 1] >> 7];
              return mt += 4, (tt * et + (et > 0 ? .5 : -.5) | 0) / tt
            }
            return mt += 4, et;
          case 203:
            return et = lt.getFloat64(mt), mt += 8, et;
          case 204:
            return qt[mt++];
          case 205:
            return et = lt.getUint16(mt), mt += 2, et;
          case 206:
            return et = lt.getUint32(mt), mt += 4, et;
          case 207:
            return "number" === wt.int64AsType ? (et = 4294967296 * lt.getUint32(mt), et += lt.getUint32(mt + 4)) : "string" === wt.int64AsType ? et = lt.getBigUint64(mt).toString() : "auto" === wt.int64AsType ? (et = lt.getBigUint64(mt), et <= BigInt(2) << BigInt(52) && (et = Number(et))) : et = lt.getBigUint64(mt), mt += 8, et;
          case 208:
            return lt.getInt8(mt++);
          case 209:
            return et = lt.getInt16(mt), mt += 2, et;
          case 210:
            return et = lt.getInt32(mt), mt += 4, et;
          case 211:
            return "number" === wt.int64AsType ? (et = 4294967296 * lt.getInt32(mt), et += lt.getUint32(mt + 4)) : "string" === wt.int64AsType ? et = lt.getBigInt64(mt).toString() : "auto" === wt.int64AsType ? (et = lt.getBigInt64(mt), et >= BigInt(-2) << BigInt(52) && et <= BigInt(2) << BigInt(52) && (et = Number(et))) : et = lt.getBigInt64(mt), mt += 8, et;
          case 212:
            if (et = qt[mt++], 114 == et) return ee(63 & qt[mt++]);
            {
              let tt = Mt[et];
              if (tt) return tt.read ? (mt++, tt.read(It())) : tt.noBuffer ? (mt++, tt()) : tt(qt.subarray(mt, ++mt));
              throw new Error("Unknown extension " + et)
            }
          case 213:
            return et = qt[mt], 114 == et ? (mt++, ee(63 & qt[mt++], qt[mt++])) : gt(2);
          case 214:
            return gt(4);
          case 215:
            return gt(8);
          case 216:
            return gt(16);
          case 217:
            return et = qt[mt++], Nt >= mt ? Ht.slice(mt - yt, (mt += et) - yt) : Gt(et);
          case 218:
            return et = lt.getUint16(mt), Nt >= (mt += 2) ? Ht.slice(mt - yt, (mt += et) - yt) : zt(et);
          case 219:
            return et = lt.getUint32(mt), Nt >= (mt += 4) ? Ht.slice(mt - yt, (mt += et) - yt) : ot(et);
          case 220:
            return et = lt.getUint16(mt), mt += 2, At(et);
          case 221:
            return et = lt.getUint32(mt), mt += 4, At(et);
          case 222:
            return et = lt.getUint16(mt), mt += 2, it(et);
          case 223:
            return et = lt.getUint32(mt), mt += 4, it(et);
          default:
            if (tt >= 224) return tt - 256;
            if (void 0 === tt) {
              let tt = new Error("Unexpected end of MessagePack data");
              throw tt.incomplete = !0, tt
            }
            throw new Error("Unknown MessagePack token " + tt)
        }
      }
    }
    const Pt = /^[a-zA-Z_$][a-zA-Z\d_$]*$/;

    function Zt(tt, et) {
      function Vt() {
        if (Vt.count++ > Wt) {
          let Vt = tt.read = new Function("r", "return function(){return " + (wt.freezeData ? "Object.freeze" : "") + "({" + tt.map((tt => "__proto__" === tt ? "__proto_:r()" : Pt.test(tt) ? tt + ":r()" : "[" + JSON.stringify(tt) + "]:r()")).join(",") + "})}")(It);
          return 0 === tt.highByte && (tt.read = Lt(et, tt.read)), Vt()
        }
        let Ot = {};
        for (let et = 0, Vt = tt.length; et < Vt; et++) {
          let Vt = tt[et];
          "__proto__" === Vt && (Vt = "__proto_"), Ot[Vt] = It()
        }
        return wt.freezeData ? Object.freeze(Ot) : Ot
      }
      return Vt.count = 0, 0 === tt.highByte ? Lt(et, Vt) : Vt
    }
    const Lt = (tt, et) => function() {
      let Vt = qt[mt++];
      if (0 === Vt) return et();
      let Ot = tt < 32 ? -(tt + (Vt << 5)) : tt + (Vt << 5),
        Dt = jt[Ot] || Ft()[Ot];
      if (!Dt) throw new Error("Record id is not defined for " + Ot);
      return Dt.read || (Dt.read = Zt(Dt, tt)), Dt.read()
    };

    function Ft() {
      let tt = me((() => (qt = null, wt.getStructures())));
      return jt = wt._mergeStructures(tt, jt)
    }
    var kt = Ut,
      Gt = Ut,
      zt = Ut,
      ot = Ut;
    let rt = !1;

    function Ut(tt) {
      let et;
      if (tt < 16 && (et = pt(tt))) return et;
      if (tt > 64 && Ot) return Ot.decode(qt.subarray(mt, mt += tt));
      const Vt = mt + tt,
        Dt = [];
      for (et = ""; mt < Vt;) {
        const tt = qt[mt++];
        if (0 === (128 & tt)) Dt.push(tt);
        else if (192 === (224 & tt)) {
          const et = 63 & qt[mt++];
          Dt.push((31 & tt) << 6 | et)
        } else if (224 === (240 & tt)) {
          const et = 63 & qt[mt++],
            Vt = 63 & qt[mt++];
          Dt.push((31 & tt) << 12 | et << 6 | Vt)
        } else if (240 === (248 & tt)) {
          let et = (7 & tt) << 18 | (63 & qt[mt++]) << 12 | (63 & qt[mt++]) << 6 | 63 & qt[mt++];
          et > 65535 && (et -= 65536, Dt.push(et >>> 10 & 1023 | 55296), et = 56320 | 1023 & et), Dt.push(et)
        } else Dt.push(tt);
        Dt.length >= 4096 && (et += Yt.apply(String, Dt), Dt.length = 0)
      }
      return Dt.length > 0 && (et += Yt.apply(String, Dt)), et
    }

    function At(tt) {
      let et = new Array(tt);
      for (let Vt = 0; Vt < tt; Vt++) et[Vt] = It();
      return wt.freezeData ? Object.freeze(et) : et
    }

    function it(tt) {
      if (wt.mapsAsObjects) {
        let et = {};
        for (let Vt = 0; Vt < tt; Vt++) {
          let tt = nt();
          "__proto__" === tt && (tt = "__proto_"), et[tt] = It()
        }
        return et
      } {
        let et = new Map;
        for (let Vt = 0; Vt < tt; Vt++) et.set(It(), It());
        return et
      }
    }
    var Yt = String.fromCharCode;

    function Bt(tt) {
      let et = mt,
        Vt = new Array(tt);
      for (let Ot = 0; Ot < tt; Ot++) {
        const tt = qt[mt++];
        if ((128 & tt) > 0) return void(mt = et);
        Vt[Ot] = tt
      }
      return Yt.apply(String, Vt)
    }

    function pt(tt) {
      if (tt < 4) {
        if (tt < 2) {
          if (0 === tt) return "";
          {
            let tt = qt[mt++];
            return (128 & tt) > 1 ? void(mt -= 1) : Yt(tt)
          }
        } {
          let et = qt[mt++],
            Vt = qt[mt++];
          if ((128 & et) > 0 || (128 & Vt) > 0) return void(mt -= 2);
          if (tt < 3) return Yt(et, Vt);
          let Ot = qt[mt++];
          return (128 & Ot) > 0 ? void(mt -= 3) : Yt(et, Vt, Ot)
        }
      } {
        let et = qt[mt++],
          Vt = qt[mt++],
          Ot = qt[mt++],
          Dt = qt[mt++];
        if ((128 & et) > 0 || (128 & Vt) > 0 || (128 & Ot) > 0 || (128 & Dt) > 0) return void(mt -= 4);
        if (tt < 6) {
          if (4 === tt) return Yt(et, Vt, Ot, Dt);
          {
            let tt = qt[mt++];
            return (128 & tt) > 0 ? void(mt -= 5) : Yt(et, Vt, Ot, Dt, tt)
          }
        }
        if (tt < 8) {
          let dt = qt[mt++],
            jt = qt[mt++];
          if ((128 & dt) > 0 || (128 & jt) > 0) return void(mt -= 6);
          if (tt < 7) return Yt(et, Vt, Ot, Dt, dt, jt);
          let Ht = qt[mt++];
          return (128 & Ht) > 0 ? void(mt -= 7) : Yt(et, Vt, Ot, Dt, dt, jt, Ht)
        } {
          let dt = qt[mt++],
            jt = qt[mt++],
            Ht = qt[mt++],
            Xt = qt[mt++];
          if ((128 & dt) > 0 || (128 & jt) > 0 || (128 & Ht) > 0 || (128 & Xt) > 0) return void(mt -= 8);
          if (tt < 10) {
            if (8 === tt) return Yt(et, Vt, Ot, Dt, dt, jt, Ht, Xt);
            {
              let tt = qt[mt++];
              return (128 & tt) > 0 ? void(mt -= 9) : Yt(et, Vt, Ot, Dt, dt, jt, Ht, Xt, tt)
            }
          }
          if (tt < 12) {
            let Qt = qt[mt++],
              lt = qt[mt++];
            if ((128 & Qt) > 0 || (128 & lt) > 0) return void(mt -= 10);
            if (tt < 11) return Yt(et, Vt, Ot, Dt, dt, jt, Ht, Xt, Qt, lt);
            let Et = qt[mt++];
            return (128 & Et) > 0 ? void(mt -= 11) : Yt(et, Vt, Ot, Dt, dt, jt, Ht, Xt, Qt, lt, Et)
          } {
            let Qt = qt[mt++],
              lt = qt[mt++],
              Et = qt[mt++],
              ft = qt[mt++];
            if ((128 & Qt) > 0 || (128 & lt) > 0 || (128 & Et) > 0 || (128 & ft) > 0) return void(mt -= 12);
            if (tt < 14) {
              if (12 === tt) return Yt(et, Vt, Ot, Dt, dt, jt, Ht, Xt, Qt, lt, Et, ft);
              {
                let tt = qt[mt++];
                return (128 & tt) > 0 ? void(mt -= 13) : Yt(et, Vt, Ot, Dt, dt, jt, Ht, Xt, Qt, lt, Et, ft, tt)
              }
            } {
              let wt = qt[mt++],
                yt = qt[mt++];
              if ((128 & wt) > 0 || (128 & yt) > 0) return void(mt -= 14);
              if (tt < 15) return Yt(et, Vt, Ot, Dt, dt, jt, Ht, Xt, Qt, lt, Et, ft, wt, yt);
              let Nt = qt[mt++];
              return (128 & Nt) > 0 ? void(mt -= 15) : Yt(et, Vt, Ot, Dt, dt, jt, Ht, Xt, Qt, lt, Et, ft, wt, yt, Nt)
            }
          }
        }
      }
    }

    function xt() {
      let tt, et = qt[mt++];
      if (et < 192) tt = et - 160;
      else switch (et) {
        case 217:
          tt = qt[mt++];
          break;
        case 218:
          tt = lt.getUint16(mt), mt += 2;
          break;
        case 219:
          tt = lt.getUint32(mt), mt += 4;
          break;
        default:
          throw new Error("Expected string")
      }
      return Ut(tt)
    }

    function Tt(tt) {
      return wt.copyBuffers ? Uint8Array.prototype.slice.call(qt, mt, mt += tt) : qt.subarray(mt, mt += tt)
    }

    function gt(tt) {
      let et = qt[mt++];
      if (Mt[et]) {
        let Vt;
        return Mt[et](qt.subarray(mt, Vt = mt += tt), (tt => {
          mt = tt;
          try {
            return It()
          } finally {
            mt = Vt
          }
        }))
      }
      throw new Error("Unknown extension type " + et)
    }
    var st = new Array(4096);

    function nt() {
      let tt = qt[mt++];
      if (!(tt >= 160 && tt < 192)) return mt--, te(It());
      if (tt -= 160, Nt >= mt) return Ht.slice(mt - yt, (mt += tt) - yt);
      if (!(0 == Nt && Dt < 180)) return kt(tt);
      let et, Vt = 4095 & (tt << 5 ^ (tt > 1 ? lt.getUint16(mt) : tt > 0 ? qt[mt] : 0)),
        Ot = st[Vt],
        dt = mt,
        jt = mt + tt - 3,
        Xt = 0;
      if (Ot && Ot.bytes == tt) {
        for (; dt < jt;) {
          if (et = lt.getUint32(dt), et != Ot[Xt++]) {
            dt = 1879048192;
            break
          }
          dt += 4
        }
        for (jt += 3; dt < jt;)
          if (et = qt[dt++], et != Ot[Xt++]) {
            dt = 1879048192;
            break
          } if (dt === jt) return mt = dt, Ot.string;
        jt -= 3, dt = mt
      }
      for (Ot = [], st[Vt] = Ot, Ot.bytes = tt; dt < jt;) et = lt.getUint32(dt), Ot.push(et), dt += 4;
      for (jt += 3; dt < jt;) et = qt[dt++], Ot.push(et);
      let Qt = tt < 16 ? pt(tt) : Bt(tt);
      return Ot.string = null != Qt ? Qt : kt(tt)
    }

    function te(tt) {
      if ("string" === typeof tt) return tt;
      if ("number" === typeof tt || "boolean" === typeof tt || "bigint" === typeof tt) return tt.toString();
      if (null == tt) return tt + "";
      if (wt.allowArraysInMapKeys && Array.isArray(tt) && tt.flat().every((tt => ["string", "number", "boolean", "bigint"].includes(typeof tt)))) return tt.flat().toString();
      throw new Error("Invalid property type for record: " + typeof tt)
    }
    const ee = (tt, et) => {
      let Vt = It().map(te),
        Ot = tt;
      void 0 !== et && (tt = tt < 32 ? -((et << 5) + tt) : (et << 5) + tt, Vt.highByte = et);
      let qt = jt[tt];
      return qt && (qt.isShared || vt) && ((jt.restoreStructures || (jt.restoreStructures = []))[tt] = qt), jt[tt] = Vt, Vt.read = Zt(Vt, Ot), Vt.read()
    };
    Mt[0] = () => {}, Mt[0].noBuffer = !0, Mt[66] = tt => {
      let et = tt.length,
        Vt = BigInt(128 & tt[0] ? tt[0] - 256 : tt[0]);
      for (let Ot = 1; Ot < et; Ot++) Vt <<= BigInt(8), Vt += BigInt(tt[Ot]);
      return Vt
    };
    let Ve = {
      Error: Error,
      TypeError: TypeError,
      ReferenceError: ReferenceError
    };
    Mt[101] = () => {
      let tt = It();
      return (Ve[tt[0]] || Error)(tt[1], {
        cause: tt[2]
      })
    }, Mt[105] = tt => {
      if (!1 === wt.structuredClone) throw new Error("Structured clone extension is disabled");
      let et = lt.getUint32(mt - 4);
      Qt || (Qt = new Map);
      let Vt, Ot = qt[mt];
      Vt = Ot >= 144 && Ot < 160 || 220 == Ot || 221 == Ot ? [] : {};
      let Dt = {
        target: Vt
      };
      Qt.set(et, Dt);
      let dt = It();
      return Dt.used ? Object.assign(Vt, dt) : (Dt.target = dt, dt)
    }, Mt[112] = tt => {
      if (!1 === wt.structuredClone) throw new Error("Structured clone extension is disabled");
      let et = lt.getUint32(mt - 4),
        Vt = Qt.get(et);
      return Vt.used = !0, Vt.target
    }, Mt[115] = () => new Set(It());
    const Oe = ["Int8", "Uint8", "Uint8Clamped", "Int16", "Uint16", "Int32", "Uint32", "Float32", "Float64", "BigInt64", "BigUint64"].map((tt => tt + "Array"));
    let qe = "object" === typeof globalThis ? globalThis : window;
    Mt[116] = tt => {
      let et = tt[0],
        Vt = Oe[et];
      if (!Vt) {
        if (16 === et) {
          let et = new ArrayBuffer(tt.length - 1);
          return new Uint8Array(et).set(tt.subarray(1)), et
        }
        throw new Error("Could not find typed array for code " + et)
      }
      return new qe[Vt](Uint8Array.prototype.slice.call(tt, 1).buffer)
    }, Mt[120] = () => {
      let tt = It();
      return new RegExp(tt[0], tt[1])
    };
    const De = [];

    function me(tt) {
      ht && ht();
      let et = Dt,
        Vt = mt,
        Ot = ft,
        dt = yt,
        Mt = Nt,
        bt = Ht,
        Jt = Et,
        Ct = Qt,
        ut = Xt,
        Kt = new Uint8Array(qt.slice(0, Dt)),
        Wt = jt,
        St = jt.slice(0, jt.length),
        ct = wt,
        Rt = vt,
        It = tt();
      return Dt = et, mt = Vt, ft = Ot, yt = dt, Nt = Mt, Ht = bt, Et = Jt, Qt = Ct, Xt = ut, qt = Kt, vt = Rt, (jt = Wt).splice(0, jt.length, ...St), wt = ct, lt = new DataView(qt.buffer, qt.byteOffset, qt.byteLength), It
    }

    function de() {
      qt = null, Qt = null, jt = null
    }
    Mt[98] = tt => {
      let et = (tt[0] << 24) + (tt[1] << 16) + (tt[2] << 8) + tt[3],
        Vt = mt;
      return mt += et - tt.length, Xt = De, (Xt = [xt(), xt()]).position0 = 0, Xt.position1 = 0, Xt.postBundlePosition = mt, mt = Vt, It()
    }, Mt[255] = tt => 4 == tt.length ? new Date(1e3 * (16777216 * tt[0] + (tt[1] << 16) + (tt[2] << 8) + tt[3])) : 8 == tt.length ? new Date(((tt[0] << 22) + (tt[1] << 14) + (tt[2] << 6) + (tt[3] >> 2)) / 1e6 + 1e3 * (4294967296 * (3 & tt[3]) + 16777216 * tt[4] + (tt[5] << 16) + (tt[6] << 8) + tt[7])) : 12 == tt.length ? new Date(((tt[0] << 24) + (tt[1] << 16) + (tt[2] << 8) + tt[3]) / 1e6 + 1e3 * ((128 & tt[4] ? -281474976710656 : 0) + 1099511627776 * tt[6] + 4294967296 * tt[7] + 16777216 * tt[8] + (tt[9] << 16) + (tt[10] << 8) + tt[11])) : new Date("invalid");
    const je = new Array(147);
    for (let DV = 0; DV < 256; DV++) je[DV] = +("1e" + Math.floor(45.15 - .30103 * DV));
    const He = St;
    var Xe = new St({
      useRecords: !1
    });
    const Qe = Xe.unpack,
      le = Xe.unpackMultiple,
      Ee = Xe.unpack,
      fe = {
        NEVER: 0,
        ALWAYS: 1,
        DECIMAL_ROUND: 3,
        DECIMAL_FIT: 4
      };
    let we, ye, Ne, ae = new Float32Array(1),
      Me = new Uint8Array(ae.buffer, 0, 4);

    function be(tt) {
      ae[0] = tt;
      let et = je[(127 & Me[3]) << 1 | Me[2] >> 7];
      return (et * tt + (tt > 0 ? .5 : -.5) | 0) / et
    }
    try {
      we = new TextEncoder
    } catch (qV) {}
    const Je = "undefined" !== typeof Buffer,
      Ce = Je ? function(tt) {
        return Buffer.allocUnsafeSlow(tt)
      } : Uint8Array,
      ue = Je ? Buffer : Uint8Array,
      Ke = Je ? 4294967296 : 2144337920;
    let he, ve, We, Se, ce, Re = 0,
      Ie = null;
    const Pe = /[\u0080-\uFFFF]/,
      Ze = Symbol("record-id");
    class Le extends St {
      constructor(tt) {
        let et, Vt, Ot, qt;
        super(tt), this.offset = 0;
        let Dt = ue.prototype.utf8Write ? function(tt, et) {
            return he.utf8Write(tt, et, he.byteLength - et)
          } : !(!we || !we.encodeInto) && function(tt, et) {
            return we.encodeInto(tt, he.subarray(et)).written
          },
          mt = this;
        tt || (tt = {});
        let dt = tt && tt.sequential,
          jt = tt.structures || tt.saveStructures,
          Ht = tt.maxSharedStructures;
        if (null == Ht && (Ht = jt ? 32 : 0), Ht > 8160) throw new Error("Maximum maxSharedStructure is 8160");
        tt.structuredClone && void 0 == tt.moreTypes && (this.moreTypes = !0);
        let Xt = tt.maxOwnStructures;
        null == Xt && (Xt = jt ? 32 : 64), this.structures || 0 == tt.useRecords || (this.structures = []);
        let Qt = Ht > 32 || Xt + Ht > 64,
          lt = Ht + 64,
          Et = Ht + Xt + 64;
        if (Et > 8256) throw new Error("Maximum maxSharedStructure + maxOwnStructure is 8192");
        let ft = [],
          wt = 0,
          yt = 0;
        this.pack = this.encode = function(tt, Dt) {
          if (he || (he = new Ce(8192), We = he.dataView || (he.dataView = new DataView(he.buffer, 0, 8192)), Re = 0), Se = he.length - 10, Se - Re < 2048 ? (he = new Ce(he.length), We = he.dataView || (he.dataView = new DataView(he.buffer, 0, he.length)), Se = he.length - 10, Re = 0) : Re = Re + 7 & 2147483640, et = Re, Dt & ne && (Re += 255 & Dt), qt = mt.structuredClone ? new Map : null, mt.bundleStrings && "string" !== typeof tt ? (Ie = [], Ie.size = 1 / 0) : Ie = null, Ot = mt.structures, Ot) {
            Ot.uninitialized && (Ot = mt._mergeStructures(mt.getStructures()));
            let tt = Ot.sharedLength || 0;
            if (tt > Ht) throw new Error("Shared structures is larger than maximum shared structures, try increasing maxSharedStructures to " + Ot.sharedLength);
            if (!Ot.transitions) {
              Ot.transitions = Object.create(null);
              for (let et = 0; et < tt; et++) {
                let tt = Ot[et];
                if (!tt) continue;
                let Vt, qt = Ot.transitions;
                for (let et = 0, Ot = tt.length; et < Ot; et++) {
                  let Ot = tt[et];
                  Vt = qt[Ot], Vt || (Vt = qt[Ot] = Object.create(null)), qt = Vt
                }
                qt[Ze] = et + 64
              }
              this.lastNamedStructuresLength = tt
            }
            dt || (Ot.nextId = tt + 64)
          }
          let jt;
          Vt && (Vt = !1);
          try {
            mt.randomAccessStructure && tt && tt.constructor && tt.constructor === Object ? St(tt) : bt(tt);
            let Vt = Ie;
            if (Ie && ze(et, bt, 0), qt && qt.idsToInsert) {
              let tt = qt.idsToInsert.sort(((tt, et) => tt.offset > et.offset ? 1 : -1)),
                Ot = tt.length,
                Dt = -1;
              for (; Vt && Ot > 0;) {
                let qt = tt[--Ot].offset + et;
                qt < Vt.stringsPosition + et && -1 === Dt && (Dt = 0), qt > Vt.position + et ? Dt >= 0 && (Dt += 6) : (Dt >= 0 && (We.setUint32(Vt.position + et, We.getUint32(Vt.position + et) + Dt), Dt = -1), Vt = Vt.previous, Ot++)
              }
              Dt >= 0 && Vt && We.setUint32(Vt.position + et, We.getUint32(Vt.position + et) + Dt), Re += 6 * tt.length, Re > Se && ht(Re), mt.offset = Re;
              let dt = function(tt, et) {
                let Vt, Ot = 6 * et.length,
                  qt = tt.length - Ot;
                for (; Vt = et.pop();) {
                  let et = Vt.offset,
                    Dt = Vt.id;
                  tt.copyWithin(et + Ot, et, qt), Ot -= 6;
                  let mt = et + Ot;
                  tt[mt++] = 214, tt[mt++] = 105, tt[mt++] = Dt >> 24, tt[mt++] = Dt >> 16 & 255, tt[mt++] = Dt >> 8 & 255, tt[mt++] = 255 & Dt, qt = et
                }
                return tt
              }(he.subarray(et, Re), tt);
              return qt = null, dt
            }
            return mt.offset = Re, Dt & ge ? (he.start = et, he.end = Re, he) : he.subarray(et, Re)
          } catch (qV) {
            throw jt = qV, qV
          } finally {
            if (Ot && (Nt(), Vt && mt.saveStructures)) {
              let Vt = Ot.sharedLength || 0,
                qt = he.subarray(et, Re),
                dt = re(Ot, mt);
              if (!jt) return !1 === mt.saveStructures(dt, dt.isCompatible) ? mt.pack(tt, Dt) : (mt.lastNamedStructuresLength = Vt, he.length > 1073741824 && (he = null), qt)
            }
            he.length > 1073741824 && (he = null), Dt & se && (Re = et)
          }
        };
        const Nt = () => {
            yt < 10 && yt++;
            let tt = Ot.sharedLength || 0;
            if (Ot.length > tt && !dt && (Ot.length = tt), wt > 1e4) Ot.transitions = null, yt = 0, wt = 0, ft.length > 0 && (ft = []);
            else if (ft.length > 0 && !dt) {
              for (let tt = 0, et = ft.length; tt < et; tt++) ft[tt][Ze] = 0;
              ft = []
            }
          },
          Mt = tt => {
            var et = tt.length;
            et < 16 ? he[Re++] = 144 | et : et < 65536 ? (he[Re++] = 220, he[Re++] = et >> 8, he[Re++] = 255 & et) : (he[Re++] = 221, We.setUint32(Re, et), Re += 4);
            for (let Vt = 0; Vt < et; Vt++) bt(tt[Vt])
          },
          bt = tt => {
            Re > Se && (he = ht(Re));
            var Vt, Ot = typeof tt;
            if ("string" === Ot) {
              let Ot, qt = tt.length;
              if (Ie && qt >= 4 && qt < 4096) {
                if ((Ie.size += qt) > 21760) {
                  let tt, Vt, Ot = (Ie[0] ? 3 * Ie[0].length + Ie[1].length : 0) + 10;
                  Re + Ot > Se && (he = ht(Re + Ot)), Ie.position ? (Vt = Ie, he[Re] = 200, Re += 3, he[Re++] = 98, tt = Re - et, Re += 4, ze(et, bt, 0), We.setUint16(tt + et - 3, Re - et - tt)) : (he[Re++] = 214, he[Re++] = 98, tt = Re - et, Re += 4), Ie = ["", ""], Ie.previous = Vt, Ie.size = 0, Ie.position = tt
                }
                let Vt = Pe.test(tt);
                return Ie[Vt ? 0 : 1] += tt, he[Re++] = 193, void bt(Vt ? -qt : qt)
              }
              Ot = qt < 32 ? 1 : qt < 256 ? 2 : qt < 65536 ? 3 : 5;
              let mt = 3 * qt;
              if (Re + mt > Se && (he = ht(Re + mt)), qt < 64 || !Dt) {
                let et, Dt, mt, dt = Re + Ot;
                for (et = 0; et < qt; et++) Dt = tt.charCodeAt(et), Dt < 128 ? he[dt++] = Dt : Dt < 2048 ? (he[dt++] = Dt >> 6 | 192, he[dt++] = 63 & Dt | 128) : 55296 === (64512 & Dt) && 56320 === (64512 & (mt = tt.charCodeAt(et + 1))) ? (Dt = 65536 + ((1023 & Dt) << 10) + (1023 & mt), et++, he[dt++] = Dt >> 18 | 240, he[dt++] = Dt >> 12 & 63 | 128, he[dt++] = Dt >> 6 & 63 | 128, he[dt++] = 63 & Dt | 128) : (he[dt++] = Dt >> 12 | 224, he[dt++] = Dt >> 6 & 63 | 128, he[dt++] = 63 & Dt | 128);
                Vt = dt - Re - Ot
              } else Vt = Dt(tt, Re + Ot);
              Vt < 32 ? he[Re++] = 160 | Vt : Vt < 256 ? (Ot < 2 && he.copyWithin(Re + 2, Re + 1, Re + 1 + Vt), he[Re++] = 217, he[Re++] = Vt) : Vt < 65536 ? (Ot < 3 && he.copyWithin(Re + 3, Re + 2, Re + 2 + Vt), he[Re++] = 218, he[Re++] = Vt >> 8, he[Re++] = 255 & Vt) : (Ot < 5 && he.copyWithin(Re + 5, Re + 3, Re + 3 + Vt), he[Re++] = 219, We.setUint32(Re, Vt), Re += 4), Re += Vt
            } else if ("number" === Ot)
              if (tt >>> 0 === tt) tt < 32 || tt < 128 && !1 === this.useRecords || tt < 64 && !this.randomAccessStructure ? he[Re++] = tt : tt < 256 ? (he[Re++] = 204, he[Re++] = tt) : tt < 65536 ? (he[Re++] = 205, he[Re++] = tt >> 8, he[Re++] = 255 & tt) : (he[Re++] = 206, We.setUint32(Re, tt), Re += 4);
              else if ((tt | 0) === tt) tt >= -32 ? he[Re++] = 256 + tt : tt >= -128 ? (he[Re++] = 208, he[Re++] = tt + 256) : tt >= -32768 ? (he[Re++] = 209, We.setInt16(Re, tt), Re += 2) : (he[Re++] = 210, We.setInt32(Re, tt), Re += 4);
            else {
              let et;
              if ((et = this.useFloat32) > 0 && tt < 4294967296 && tt >= -2147483648) {
                let Vt;
                if (he[Re++] = 202, We.setFloat32(Re, tt), et < 4 || ((Vt = tt * je[(127 & he[Re]) << 1 | he[Re + 1] >> 7]) | 0) === Vt) return void(Re += 4);
                Re--
              }
              he[Re++] = 203, We.setFloat64(Re, tt), Re += 8
            } else if ("object" === Ot || "function" === Ot)
              if (tt) {
                if (qt) {
                  let Vt = qt.get(tt);
                  if (Vt) {
                    if (!Vt.id) {
                      let tt = qt.idsToInsert || (qt.idsToInsert = []);
                      Vt.id = tt.push(Vt)
                    }
                    return he[Re++] = 214, he[Re++] = 112, We.setUint32(Re, Vt.id), void(Re += 4)
                  }
                  qt.set(tt, {
                    offset: Re - et
                  })
                }
                let Dt = tt.constructor;
                if (Dt === Object) Kt(tt);
                else if (Dt === Array) Mt(tt);
                else if (Dt === Map)
                  if (this.mapAsEmptyObject) he[Re++] = 128;
                  else {
                    (Vt = tt.size) < 16 ? he[Re++] = 128 | Vt : Vt < 65536 ? (he[Re++] = 222, he[Re++] = Vt >> 8, he[Re++] = 255 & Vt) : (he[Re++] = 223, We.setUint32(Re, Vt), Re += 4);
                    for (let [et, Vt] of tt) bt(et), bt(Vt)
                  }
                else {
                  for (let et = 0, Vt = ye.length; et < Vt; et++) {
                    if (tt instanceof Ne[et]) {
                      let Vt = ye[et];
                      if (Vt.write) {
                        Vt.type && (he[Re++] = 212, he[Re++] = Vt.type, he[Re++] = 0);
                        let et = Vt.write.call(this, tt);
                        return void(et === tt ? Array.isArray(tt) ? Mt(tt) : Kt(tt) : bt(et))
                      }
                      let Ot, qt = he,
                        Dt = We,
                        mt = Re;
                      he = null;
                      try {
                        Ot = Vt.pack.call(this, tt, (tt => (he = qt, qt = null, Re += tt, Re > Se && ht(Re), {
                          target: he,
                          targetView: We,
                          position: Re - tt
                        })), bt)
                      } finally {
                        qt && (he = qt, We = Dt, Re = mt, Se = he.length - 10)
                      }
                      return void(Ot && (Ot.length + Re > Se && ht(Ot.length + Re), Re = Ge(Ot, he, Re, Vt.type)))
                    }
                  }
                  if (Array.isArray(tt)) Mt(tt);
                  else {
                    if (tt.toJSON) {
                      const et = tt.toJSON();
                      if (et !== tt) return bt(et)
                    }
                    if ("function" === Ot) return bt(this.writeFunction && this.writeFunction(tt));
                    Kt(tt)
                  }
                }
              } else he[Re++] = 192;
            else if ("boolean" === Ot) he[Re++] = tt ? 195 : 194;
            else if ("bigint" === Ot) {
              if (tt < BigInt(1) << BigInt(63) && tt >= -(BigInt(1) << BigInt(63))) he[Re++] = 211, We.setBigInt64(Re, tt);
              else if (tt < BigInt(1) << BigInt(64) && tt > 0) he[Re++] = 207, We.setBigUint64(Re, tt);
              else {
                if (!this.largeBigIntToFloat) {
                  if (this.largeBigIntToString) return bt(tt.toString());
                  if (this.useBigIntExtension && tt < BigInt(2) ** BigInt(1023) && tt > -(BigInt(2) ** BigInt(1023))) {
                    he[Re++] = 199, Re++, he[Re++] = 66;
                    let et, Vt = [];
                    do {
                      let Ot = tt & BigInt(255);
                      et = (Ot & BigInt(128)) === (tt < BigInt(0) ? BigInt(128) : BigInt(0)), Vt.push(Ot), tt >>= BigInt(8)
                    } while (tt !== BigInt(0) && tt !== BigInt(-1) || !et);
                    he[Re - 2] = Vt.length;
                    for (let tt = Vt.length; tt > 0;) he[Re++] = Number(Vt[--tt]);
                    return
                  }
                  throw new RangeError(tt + " was too large to fit in MessagePack 64-bit integer format, use useBigIntExtension, or set largeBigIntToFloat to convert to float-64, or set largeBigIntToString to convert to string")
                }
                he[Re++] = 203, We.setFloat64(Re, Number(tt))
              }
              Re += 8
            } else {
              if ("undefined" !== Ot) throw new Error("Unknown type: " + Ot);
              this.encodeUndefinedAsNil ? he[Re++] = 192 : (he[Re++] = 212, he[Re++] = 0, he[Re++] = 0)
            }
          },
          Jt = this.variableMapSize || this.coercibleKeyAsNumber || this.skipValues ? tt => {
            let et;
            if (this.skipValues) {
              et = [];
              for (let Vt in tt) "function" === typeof tt.hasOwnProperty && !tt.hasOwnProperty(Vt) || this.skipValues.includes(tt[Vt]) || et.push(Vt)
            } else et = Object.keys(tt);
            let Vt, Ot = et.length;
            if (Ot < 16 ? he[Re++] = 128 | Ot : Ot < 65536 ? (he[Re++] = 222, he[Re++] = Ot >> 8, he[Re++] = 255 & Ot) : (he[Re++] = 223, We.setUint32(Re, Ot), Re += 4), this.coercibleKeyAsNumber)
              for (let qt = 0; qt < Ot; qt++) {
                Vt = et[qt];
                let Ot = Number(Vt);
                bt(isNaN(Ot) ? Vt : Ot), bt(tt[Vt])
              } else
                for (let qt = 0; qt < Ot; qt++) bt(Vt = et[qt]), bt(tt[Vt])
          } : tt => {
            he[Re++] = 222;
            let Vt = Re - et;
            Re += 2;
            let Ot = 0;
            for (let et in tt)("function" !== typeof tt.hasOwnProperty || tt.hasOwnProperty(et)) && (bt(et), bt(tt[et]), Ot++);
            if (Ot > 65535) throw new Error('Object is too large to serialize with fast 16-bit map size, use the "variableMapSize" option to serialize this object');
            he[Vt++ + et] = Ot >> 8, he[Vt + et] = 255 & Ot
          },
          Ct = !1 === this.useRecords ? Jt : tt.progressiveRecords && !Qt ? tt => {
            let Vt, qt, Dt = Ot.transitions || (Ot.transitions = Object.create(null)),
              mt = Re++ - et;
            for (let dt in tt)
              if ("function" !== typeof tt.hasOwnProperty || tt.hasOwnProperty(dt)) {
                if (Vt = Dt[dt], Vt) Dt = Vt;
                else {
                  let jt = Object.keys(tt),
                    Ht = Dt;
                  Dt = Ot.transitions;
                  let Xt = 0;
                  for (let tt = 0, et = jt.length; tt < et; tt++) {
                    let et = jt[tt];
                    Vt = Dt[et], Vt || (Vt = Dt[et] = Object.create(null), Xt++), Dt = Vt
                  }
                  mt + et + 1 == Re ? (Re--, vt(Dt, jt, Xt)) : Wt(Dt, jt, mt, Xt), qt = !0, Dt = Ht[dt]
                }
                bt(tt[dt])
              } if (!qt) {
              let Vt = Dt[Ze];
              Vt ? he[mt + et] = Vt : Wt(Dt, Object.keys(tt), mt, 0)
            }
          } : tt => {
            let et, Vt = Ot.transitions || (Ot.transitions = Object.create(null)),
              qt = 0;
            for (let Ot in tt)("function" !== typeof tt.hasOwnProperty || tt.hasOwnProperty(Ot)) && (et = Vt[Ot], et || (et = Vt[Ot] = Object.create(null), qt++), Vt = et);
            let Dt = Vt[Ze];
            Dt ? Dt >= 96 && Qt ? (he[Re++] = 96 + (31 & (Dt -= 96)), he[Re++] = Dt >> 5) : he[Re++] = Dt : vt(Vt, Vt.__keys__ || Object.keys(tt), qt);
            for (let Ot in tt)("function" !== typeof tt.hasOwnProperty || tt.hasOwnProperty(Ot)) && bt(tt[Ot])
          },
          ut = "function" == typeof this.useRecords && this.useRecords,
          Kt = ut ? tt => {
            ut(tt) ? Ct(tt) : Jt(tt)
          } : Ct,
          ht = tt => {
            let Vt;
            if (tt > 16777216) {
              if (tt - et > Ke) throw new Error("Packed buffer would be larger than maximum buffer size");
              Vt = Math.min(Ke, 4096 * Math.round(Math.max((tt - et) * (tt > 67108864 ? 1.25 : 2), 4194304) / 4096))
            } else Vt = 1 + (Math.max(tt - et << 2, he.length - 1) >> 12) << 12;
            let Ot = new Ce(Vt);
            return We = Ot.dataView || (Ot.dataView = new DataView(Ot.buffer, 0, Vt)), tt = Math.min(tt, he.length), he.copy ? he.copy(Ot, 0, et, tt) : Ot.set(he.slice(et, tt)), Re -= et, et = 0, Se = Ot.length - 10, he = Ot
          },
          vt = (tt, et, qt) => {
            let Dt = Ot.nextId;
            Dt || (Dt = 64), Dt < lt && this.shouldShareStructure && !this.shouldShareStructure(et) ? (Dt = Ot.nextOwnId, Dt < Et || (Dt = lt), Ot.nextOwnId = Dt + 1) : (Dt >= Et && (Dt = lt), Ot.nextId = Dt + 1);
            let mt = et.highByte = Dt >= 96 && Qt ? Dt - 96 >> 5 : -1;
            tt[Ze] = Dt, tt.__keys__ = et, Ot[Dt - 64] = et, Dt < lt ? (et.isShared = !0, Ot.sharedLength = Dt - 63, Vt = !0, mt >= 0 ? (he[Re++] = 96 + (31 & Dt), he[Re++] = mt) : he[Re++] = Dt) : (mt >= 0 ? (he[Re++] = 213, he[Re++] = 114, he[Re++] = 96 + (31 & Dt), he[Re++] = mt) : (he[Re++] = 212, he[Re++] = 114, he[Re++] = Dt), qt && (wt += yt * qt), ft.length >= Xt && (ft.shift()[Ze] = 0), ft.push(tt), bt(et))
          },
          Wt = (tt, Vt, Ot, qt) => {
            let Dt = he,
              mt = Re,
              dt = Se,
              jt = et;
            he = ve, Re = 0, et = 0, he || (ve = he = new Ce(8192)), Se = he.length - 10, vt(tt, Vt, qt), ve = he;
            let Ht = Re;
            if (he = Dt, Re = mt, Se = dt, et = jt, Ht > 1) {
              let tt = Re + Ht - 1;
              tt > Se && ht(tt);
              let Vt = Ot + et;
              he.copyWithin(Vt + Ht, Vt + 1, Re), he.set(ve.slice(0, Ht), Vt), Re = tt
            } else he[Ot + et] = ve[0]
          },
          St = tt => {
            let qt = ce(tt, he, et, Re, Ot, ht, ((tt, et, Ot) => {
              if (Ot) return Vt = !0;
              Re = et;
              let qt = he;
              return bt(tt), Nt(), qt !== he ? {
                position: Re,
                targetView: We,
                target: he
              } : Re
            }), this);
            if (0 === qt) return Kt(tt);
            Re = qt
          }
      }
      useBuffer(tt) {
        he = tt, We = he.dataView || (he.dataView = new DataView(he.buffer, he.byteOffset, he.byteLength)), Re = 0
      }
      set position(tt) {
        Re = tt
      }
      get position() {
        return Re
      }
      set buffer(tt) {
        he = tt
      }
      get buffer() {
        return he
      }
      clearSharedData() {
        this.structures && (this.structures = []), this.typedStructs && (this.typedStructs = [])
      }
    }

    function Fe(tt, et, Vt, Ot) {
      let qt = tt.byteLength;
      if (qt + 1 < 256) {
        var {
          target: Dt,
          position: mt
        } = Vt(4 + qt);
        Dt[mt++] = 199, Dt[mt++] = qt + 1
      } else if (qt + 1 < 65536) {
        var {
          target: Dt,
          position: mt
        } = Vt(5 + qt);
        Dt[mt++] = 200, Dt[mt++] = qt + 1 >> 8, Dt[mt++] = qt + 1 & 255
      } else {
        var {
          target: Dt,
          position: mt,
          targetView: dt
        } = Vt(7 + qt);
        Dt[mt++] = 201, dt.setUint32(mt, qt + 1), mt += 4
      }
      Dt[mt++] = 116, Dt[mt++] = et, tt.buffer || (tt = new Uint8Array(tt)), Dt.set(new Uint8Array(tt.buffer, tt.byteOffset, tt.byteLength), mt)
    }

    function ke(tt, et) {
      let Vt = tt.byteLength;
      var Ot, qt;
      if (Vt < 256) {
        var {
          target: Ot,
          position: qt
        } = et(Vt + 2);
        Ot[qt++] = 196, Ot[qt++] = Vt
      } else if (Vt < 65536) {
        var {
          target: Ot,
          position: qt
        } = et(Vt + 3);
        Ot[qt++] = 197, Ot[qt++] = Vt >> 8, Ot[qt++] = 255 & Vt
      } else {
        var {
          target: Ot,
          position: qt,
          targetView: Dt
        } = et(Vt + 5);
        Ot[qt++] = 198, Dt.setUint32(qt, Vt), qt += 4
      }
      Ot.set(tt, qt)
    }

    function Ge(tt, et, Vt, Ot) {
      let qt = tt.length;
      switch (qt) {
        case 1:
          et[Vt++] = 212;
          break;
        case 2:
          et[Vt++] = 213;
          break;
        case 4:
          et[Vt++] = 214;
          break;
        case 8:
          et[Vt++] = 215;
          break;
        case 16:
          et[Vt++] = 216;
          break;
        default:
          qt < 256 ? (et[Vt++] = 199, et[Vt++] = qt) : qt < 65536 ? (et[Vt++] = 200, et[Vt++] = qt >> 8, et[Vt++] = 255 & qt) : (et[Vt++] = 201, et[Vt++] = qt >> 24, et[Vt++] = qt >> 16 & 255, et[Vt++] = qt >> 8 & 255, et[Vt++] = 255 & qt)
      }
      return et[Vt++] = Ot, et.set(tt, Vt), Vt += qt
    }

    function ze(tt, et, Vt) {
      if (Ie.length > 0) {
        We.setUint32(Ie.position + tt, Re + Vt - Ie.position - tt), Ie.stringsPosition = Re - tt;
        let Ot = Ie;
        Ie = null, et(Ot[0]), et(Ot[1])
      }
    }

    function oe(tt) {
      if (tt.Class) {
        if (!tt.pack && !tt.write) throw new Error("Extension has no pack or write function");
        if (tt.pack && !tt.type) throw new Error("Extension has no type (numeric code to identify the extension)");
        Ne.unshift(tt.Class), ye.unshift(tt)
      }! function(tt) {
        tt.unpack ? Mt[tt.type] = tt.unpack : Mt[tt.type] = tt
      }(tt)
    }

    function re(tt, et) {
      return tt.isCompatible = tt => {
        let Vt = !tt || (et.lastNamedStructuresLength || 0) === tt.length;
        return Vt || et._mergeStructures(tt), Vt
      }, tt
    }
    Ne = [Date, Set, Error, RegExp, ArrayBuffer, Object.getPrototypeOf(Uint8Array.prototype).constructor, Jt], ye = [{
      pack(tt, et, Vt) {
        let Ot = tt.getTime() / 1e3;
        if ((this.useTimestamp32 || 0 === tt.getMilliseconds()) && Ot >= 0 && Ot < 4294967296) {
          let {
            target: tt,
            targetView: Vt,
            position: qt
          } = et(6);
          tt[qt++] = 214, tt[qt++] = 255, Vt.setUint32(qt, Ot)
        } else if (Ot > 0 && Ot < 4294967296) {
          let {
            target: Vt,
            targetView: qt,
            position: Dt
          } = et(10);
          Vt[Dt++] = 215, Vt[Dt++] = 255, qt.setUint32(Dt, 4e6 * tt.getMilliseconds() + (Ot / 1e3 / 4294967296 | 0)), qt.setUint32(Dt + 4, Ot)
        } else if (isNaN(Ot)) {
          if (this.onInvalidDate) return et(0), Vt(this.onInvalidDate());
          let {
            target: tt,
            targetView: Ot,
            position: qt
          } = et(3);
          tt[qt++] = 212, tt[qt++] = 255, tt[qt++] = 255
        } else {
          let {
            target: Vt,
            targetView: qt,
            position: Dt
          } = et(15);
          Vt[Dt++] = 199, Vt[Dt++] = 12, Vt[Dt++] = 255, qt.setUint32(Dt, 1e6 * tt.getMilliseconds()), qt.setBigInt64(Dt + 4, BigInt(Math.floor(Ot)))
        }
      }
    }, {
      pack(tt, et, Vt) {
        if (this.setAsEmptyObject) return et(0), Vt({});
        let Ot = Array.from(tt),
          {
            target: qt,
            position: Dt
          } = et(this.moreTypes ? 3 : 0);
        this.moreTypes && (qt[Dt++] = 212, qt[Dt++] = 115, qt[Dt++] = 0), Vt(Ot)
      }
    }, {
      pack(tt, et, Vt) {
        let {
          target: Ot,
          position: qt
        } = et(this.moreTypes ? 3 : 0);
        this.moreTypes && (Ot[qt++] = 212, Ot[qt++] = 101, Ot[qt++] = 0), Vt([tt.name, tt.message, tt.cause])
      }
    }, {
      pack(tt, et, Vt) {
        let {
          target: Ot,
          position: qt
        } = et(this.moreTypes ? 3 : 0);
        this.moreTypes && (Ot[qt++] = 212, Ot[qt++] = 120, Ot[qt++] = 0), Vt([tt.source, tt.flags])
      }
    }, {
      pack(tt, et) {
        this.moreTypes ? Fe(tt, 16, et) : ke(Je ? Buffer.from(tt) : new Uint8Array(tt), et)
      }
    }, {
      pack(tt, et) {
        let Vt = tt.constructor;
        Vt !== ue && this.moreTypes ? Fe(tt, Oe.indexOf(Vt.name), et) : ke(tt, et)
      }
    }, {
      pack(tt, et) {
        let {
          target: Vt,
          position: Ot
        } = et(1);
        Vt[Ot] = 193
      }
    }];
    let Ue = new Le({
      useRecords: !1
    });
    const Ae = Ue.pack,
      ie = Ue.pack,
      Ye = Le,
      {
        NEVER: Be,
        ALWAYS: pe,
        DECIMAL_ROUND: xe,
        DECIMAL_FIT: Te
      } = fe,
      ge = 512,
      se = 1024,
      ne = 2048;
    const tV = function(tt) {
        let et = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        if (!tt || "object" !== typeof tt) throw new Error("first argument must be an Iterable, Async Iterable, Iterator, Async Iterator, or a promise");
        const Vt = new St(et);
        let Ot;
        const qt = tt => {
          let et;
          Ot && (tt = Buffer.concat([Ot, tt]), Ot = void 0);
          try {
            et = Vt.unpackMultiple(tt)
          } catch (qt) {
            if (!qt.incomplete) throw qt;
            Ot = tt.slice(qt.lastPosition), et = qt.values
          }
          return et
        };
        return "function" === typeof tt[Symbol.iterator] ? function*() {
          for (const et of tt) yield* qt(et)
        }() : "function" === typeof tt[Symbol.asyncIterator] ? async function*() {
          for await (const et of tt) yield* qt(et)
        }(): void 0
      },
      eV = function(tt) {
        let et = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        if (tt && "object" === typeof tt) {
          if ("function" === typeof tt[Symbol.iterator]) return function*(tt, et) {
            const Vt = new Le(et);
            for (const Ot of tt) yield Vt.pack(Ot)
          }(tt, et);
          if ("function" === typeof tt.then || "function" === typeof tt[Symbol.asyncIterator]) return async function*(tt, et) {
            const Vt = new Le(et);
            for await (const Ot of tt) yield Vt.pack(Ot)
          }(tt, et);
          throw new Error("first argument must be an Iterable, Async Iterable, Iterator, Async Iterator, or a Promise")
        }
        throw new Error("first argument must be an Iterable, Async Iterable, or a Promise for an Async Iterable")
      },
      VV = !1,
      OV = !0
  },
  9348: (tt, et, Vt) => {
    Vt.r(et), Vt.d(et, {
      $changes: () => wt,
      $childType: () => yt,
      $decoder: () => Xt,
      $deleteByIndex: () => Et,
      $encoder: () => Ht,
      $filter: () => Qt,
      $getByIndex: () => lt,
      $numFields: () => Wt,
      $refId: () => dt,
      $track: () => jt,
      $values: () => Ct,
      ArraySchema: () => OO,
      Callbacks: () => Oq,
      ChangeTree: () => RV,
      CollectionSchema: () => mO,
      Decoder: () => xO,
      Encoder: () => iO,
      FieldBuilder: () => HO,
      MapSchema: () => DO,
      Metadata: () => xe,
      OPERATION: () => qt,
      Reflection: () => nO,
      ReflectionField: () => gO,
      ReflectionType: () => sO,
      Root: () => IO,
      Schema: () => cO,
      SetSchema: () => dO,
      StateCallbackStrategy: () => Vq,
      StateView: () => kO,
      StreamSchema: () => jO,
      TypeContext: () => re,
      createPool: () => Dq,
      decode: () => be,
      decodeKeyValueOperation: () => gV,
      decodeSchemaOperation: () => TV,
      defineCustomTypes: () => Ke,
      defineTypes: () => vO,
      deprecated: () => KO,
      dumpChanges: () => SO,
      encode: () => Ve,
      encodeArray: () => zV,
      encodeIndexedEntry: () => kV,
      encodeKeyValueOperation: () => GV,
      encodeMapEntry: () => FV,
      encodeSchemaOperation: () => LV,
      nE: () => yO,
      fullStateOnly: () => bO,
      getDecoderStateCallbacks: () => tq,
      getEncodeDescriptor: () => eV,
      getRawChangesCallback: () => eq,
      isBuilder: () => XO,
      patchOnly: () => MO,
      registerType: () => ue,
      schema: () => WO,
      t: () => fO,
      type: () => JO,
      unreliable: () => aO,
      view: () => NO
    });
    const Ot = 255;
    var qt;

    function Dt(tt) {
      Object.defineProperty(tt, Symbol.metadata, {
        value: void 0,
        writable: !0,
        configurable: !0,
        enumerable: !1
      })
    }! function(tt) {
      tt[tt.ADD = 128] = "ADD", tt[tt.REPLACE = 0] = "REPLACE", tt[tt.DELETE = 64] = "DELETE", tt[tt.DELETE_AND_MOVE = 96] = "DELETE_AND_MOVE", tt[tt.MOVE_AND_ADD = 160] = "MOVE_AND_ADD", tt[tt.DELETE_AND_ADD = 192] = "DELETE_AND_ADD", tt[tt.CLEAR = 10] = "CLEAR", tt[tt.REVERSE = 15] = "REVERSE", tt[tt.MOVE = 32] = "MOVE", tt[tt.DELETE_BY_REFID = 33] = "DELETE_BY_REFID", tt[tt.ADD_BY_REFID = 129] = "ADD_BY_REFID"
    }(qt || (qt = {})), Symbol.metadata ??= Symbol.for("Symbol.metadata");
    const mt = "undefined" !== typeof globalThis ? globalThis : "undefined" !== typeof global ? global : "undefined" !== typeof self ? self : "undefined" !== typeof window ? window : {};
    if ("function" === typeof Symbol && "function" !== typeof Symbol.for) {
      const tt = "colyseus.symbolRegistry",
        et = mt[tt] || (mt[tt] = Object.create(null));
      Symbol.for = function(tt) {
        return et[tt] || (et[tt] = Symbol(tt))
      }, Symbol.keyFor = function(tt) {
        for (const Vt in et)
          if (et[Vt] === tt) return Vt
      }
    }
    const dt = Symbol.for("$refId"),
      jt = "~track",
      Ht = "~encoder",
      Xt = "~decoder",
      Qt = "~filter",
      lt = "~getByIndex",
      Et = "~deleteByIndex",
      ft = "~resyncPrune",
      wt = Symbol.for("$changes"),
      yt = Symbol.for("$childType"),
      Nt = Symbol.for("$proxyTarget"),
      Mt = "~onEncodeEnd",
      bt = "~reset",
      Jt = "~onDecodeEnd",
      Ct = Symbol.for("$values"),
      ut = "~builder",
      Kt = "~descriptors",
      ht = "~__encodeDescriptor",
      vt = "~encoders",
      Wt = "~__numFields",
      St = "~__refTypeFieldIndexes",
      ct = "~__viewFieldIndexes",
      Rt = "$__fieldIndexesByViewTag",
      It = "~__unreliableFieldIndexes",
      Pt = "~__patchOnlyFieldIndexes",
      Zt = "~__fullSyncSkipIndexes",
      Lt = "~__fullStateOnlyFieldIndexes",
      Ft = "~__streamFieldIndexes",
      kt = "~__streamPriorities";
    let Gt;
    try {
      Gt = new TextEncoder
    } catch (mq) {}
    const zt = new ArrayBuffer(8),
      ot = new Int32Array(zt),
      rt = new Float32Array(zt),
      Ut = new Float64Array(zt),
      At = new BigInt64Array(zt),
      it = "undefined" !== typeof Buffer && Buffer.byteLength ? Buffer.byteLength : function(tt, et) {
        for (var Vt = 0, Ot = 0, qt = 0, Dt = tt.length; qt < Dt; qt++)(Vt = tt.charCodeAt(qt)) < 128 ? Ot += 1 : Vt < 2048 ? Ot += 2 : Vt < 55296 || Vt >= 57344 ? Ot += 3 : (qt++, Ot += 4);
        return Ot
      };

    function Yt(tt, et, Vt) {
      for (var Ot = 0, qt = 0, Dt = et.length; qt < Dt; qt++)(Ot = et.charCodeAt(qt)) < 128 ? tt[Vt.offset++] = Ot : Ot < 2048 ? (tt[Vt.offset] = 192 | Ot >> 6, tt[Vt.offset + 1] = 128 | 63 & Ot, Vt.offset += 2) : Ot < 55296 || Ot >= 57344 ? (tt[Vt.offset] = 224 | Ot >> 12, tt[Vt.offset + 1] = 128 | Ot >> 6 & 63, tt[Vt.offset + 2] = 128 | 63 & Ot, Vt.offset += 3) : (qt++, Ot = 65536 + ((1023 & Ot) << 10 | 1023 & et.charCodeAt(qt)), tt[Vt.offset] = 240 | Ot >> 18, tt[Vt.offset + 1] = 128 | Ot >> 12 & 63, tt[Vt.offset + 2] = 128 | Ot >> 6 & 63, tt[Vt.offset + 3] = 128 | 63 & Ot, Vt.offset += 4)
    }

    function Bt(tt, et, Vt) {
      tt[Vt.offset++] = 255 & et
    }

    function pt(tt, et, Vt) {
      tt[Vt.offset++] = 255 & et, tt[Vt.offset++] = et >> 8 & 255
    }

    function xt(tt, et, Vt) {
      tt[Vt.offset++] = 255 & et, tt[Vt.offset++] = et >> 8 & 255
    }

    function Tt(tt, et, Vt) {
      tt[Vt.offset++] = 255 & et, tt[Vt.offset++] = et >> 8 & 255, tt[Vt.offset++] = et >> 16 & 255, tt[Vt.offset++] = et >> 24 & 255
    }

    function gt(tt, et, Vt) {
      const Ot = et >> 24,
        qt = et >> 16,
        Dt = et >> 8,
        mt = et;
      tt[Vt.offset++] = 255 & mt, tt[Vt.offset++] = 255 & Dt, tt[Vt.offset++] = 255 & qt, tt[Vt.offset++] = 255 & Ot
    }

    function st(tt, et, Vt) {
      const Ot = Math.floor(et / Math.pow(2, 32));
      gt(tt, et >>> 0, Vt), gt(tt, Ot, Vt)
    }

    function nt(tt, et, Vt) {
      const Ot = et / Math.pow(2, 32) | 0;
      gt(tt, et >>> 0, Vt), gt(tt, Ot, Vt)
    }

    function te(tt, et, Vt) {
      rt[0] = et, Tt(tt, ot[0], Vt)
    }

    function ee(tt, et, Vt) {
      Ut[0] = et, Tt(tt, ot[0], Vt), Tt(tt, ot[1], Vt)
    }
    const Ve = {
        int8: Bt,
        uint8: function(tt, et, Vt) {
          tt[Vt.offset++] = 255 & et
        },
        int16: pt,
        uint16: xt,
        int32: Tt,
        uint32: gt,
        int64: st,
        uint64: nt,
        bigint64: function(tt, et, Vt) {
          At[0] = BigInt.asIntN(64, et), Tt(tt, ot[0], Vt), Tt(tt, ot[1], Vt)
        },
        biguint64: function(tt, et, Vt) {
          At[0] = BigInt.asIntN(64, et), Tt(tt, ot[0], Vt), Tt(tt, ot[1], Vt)
        },
        float32: te,
        float64: ee,
        boolean: function(tt, et, Vt) {
          tt[Vt.offset++] = et ? 1 : 0
        },
        string: function(tt, et, Vt) {
          et || (et = "");
          let Ot = it(et, "utf8"),
            qt = 0;
          if (Ot < 32) tt[Vt.offset++] = 160 | Ot, qt = 1;
          else if (Ot < 256) tt[Vt.offset++] = 217, tt[Vt.offset++] = Ot, qt = 2;
          else if (Ot < 65536) tt[Vt.offset++] = 218, xt(tt, Ot, Vt), qt = 3;
          else {
            if (!(Ot < 4294967296)) throw new Error("String too long");
            tt[Vt.offset++] = 219, gt(tt, Ot, Vt), qt = 5
          }
          return Yt(tt, et, Vt), qt + Ot
        },
        number: function tt(et, Vt, Ot) {
          return isNaN(Vt) ? tt(et, 0, Ot) : isFinite(Vt) ? Vt !== (0 | Vt) ? Math.abs(Vt) <= 34028235e31 && (rt[0] = Vt, Math.abs(Math.abs(rt[0]) - Math.abs(Vt)) < 1e-4) ? (et[Ot.offset++] = 202, te(et, Vt, Ot), 5) : (et[Ot.offset++] = 203, ee(et, Vt, Ot), 9) : Vt >= 0 ? Vt < 128 ? (et[Ot.offset++] = 255 & Vt, 1) : Vt < 256 ? (et[Ot.offset++] = 204, et[Ot.offset++] = 255 & Vt, 2) : Vt < 65536 ? (et[Ot.offset++] = 205, xt(et, Vt, Ot), 3) : Vt < 4294967296 ? (et[Ot.offset++] = 206, gt(et, Vt, Ot), 5) : (et[Ot.offset++] = 207, nt(et, Vt, Ot), 9) : Vt >= -32 ? (et[Ot.offset++] = 224 | Vt + 32, 1) : Vt >= -128 ? (et[Ot.offset++] = 208, Bt(et, Vt, Ot), 2) : Vt >= -32768 ? (et[Ot.offset++] = 209, pt(et, Vt, Ot), 3) : Vt >= -2147483648 ? (et[Ot.offset++] = 210, Tt(et, Vt, Ot), 5) : (et[Ot.offset++] = 211, st(et, Vt, Ot), 9) : tt(et, Vt > 0 ? Number.MAX_SAFE_INTEGER : -Number.MAX_SAFE_INTEGER, Ot)
        },
        utf8Write: Yt,
        utf8Length: it
      },
      Oe = new ArrayBuffer(8),
      qe = new Int32Array(Oe),
      De = new Float32Array(Oe),
      me = new Float64Array(Oe),
      de = new BigUint64Array(Oe),
      je = new BigInt64Array(Oe);

    function He(tt, et, Vt) {
      Vt > tt.length - et.offset && (Vt = tt.length - et.offset);
      for (var Ot = "", qt = 0, Dt = et.offset, mt = et.offset + Vt; Dt < mt; Dt++) {
        var dt = tt[Dt];
        if (0 !== (128 & dt))
          if (192 !== (224 & dt))
            if (224 !== (240 & dt)) {
              if (240 !== (248 & dt)) {
                console.error("decode.utf8Read(): Invalid byte " + dt + " at offset " + Dt + ". Skip to end of string: " + (et.offset + Vt));
                break
              }(qt = (7 & dt) << 18 | (63 & tt[++Dt]) << 12 | (63 & tt[++Dt]) << 6 | 63 & tt[++Dt]) >= 65536 ? (qt -= 65536, Ot += String.fromCharCode(55296 + (qt >>> 10), 56320 + (1023 & qt))) : Ot += String.fromCharCode(qt)
            } else Ot += String.fromCharCode((15 & dt) << 12 | (63 & tt[++Dt]) << 6 | 63 & tt[++Dt]);
        else Ot += String.fromCharCode((31 & dt) << 6 | 63 & tt[++Dt]);
        else Ot += String.fromCharCode(dt)
      }
      return et.offset += Vt, Ot
    }

    function Xe(tt, et) {
      return Qe(tt, et) << 24 >> 24
    }

    function Qe(tt, et) {
      return tt[et.offset++]
    }

    function le(tt, et) {
      return Ee(tt, et) << 16 >> 16
    }

    function Ee(tt, et) {
      return tt[et.offset++] | tt[et.offset++] << 8
    }

    function fe(tt, et) {
      return tt[et.offset++] | tt[et.offset++] << 8 | tt[et.offset++] << 16 | tt[et.offset++] << 24
    }

    function we(tt, et) {
      return fe(tt, et) >>> 0
    }

    function ye(tt, et) {
      return qe[0] = fe(tt, et), De[0]
    }

    function Ne(tt, et) {
      return qe[0] = fe(tt, et), qe[1] = fe(tt, et), me[0]
    }

    function ae(tt, et) {
      const Vt = we(tt, et);
      return fe(tt, et) * Math.pow(2, 32) + Vt
    }

    function Me(tt, et) {
      const Vt = we(tt, et);
      return we(tt, et) * Math.pow(2, 32) + Vt
    }
    const be = {
        utf8Read: He,
        int8: Xe,
        uint8: Qe,
        int16: le,
        uint16: Ee,
        int32: fe,
        uint32: we,
        float32: ye,
        float64: Ne,
        int64: ae,
        uint64: Me,
        bigint64: function(tt, et) {
          return qe[0] = fe(tt, et), qe[1] = fe(tt, et), je[0]
        },
        biguint64: function(tt, et) {
          return qe[0] = fe(tt, et), qe[1] = fe(tt, et), de[0]
        },
        boolean: function(tt, et) {
          return Qe(tt, et) > 0
        },
        string: function(tt, et) {
          const Vt = tt[et.offset++];
          let Ot;
          return Vt < 192 ? Ot = 31 & Vt : 217 === Vt ? Ot = Qe(tt, et) : 218 === Vt ? Ot = Ee(tt, et) : 219 === Vt && (Ot = we(tt, et)), He(tt, et, Ot)
        },
        number: function(tt, et) {
          const Vt = tt[et.offset++];
          return Vt < 128 ? Vt : 202 === Vt ? ye(tt, et) : 203 === Vt ? Ne(tt, et) : 204 === Vt ? Qe(tt, et) : 205 === Vt ? Ee(tt, et) : 206 === Vt ? we(tt, et) : 207 === Vt ? Me(tt, et) : 208 === Vt ? Xe(tt, et) : 209 === Vt ? le(tt, et) : 210 === Vt ? fe(tt, et) : 211 === Vt ? ae(tt, et) : Vt > 223 ? -1 * (255 - Vt + 1) : void 0
        },
        stringCheck: function(tt, et) {
          const Vt = tt[et.offset];
          return Vt < 192 && Vt > 160 || 217 === Vt || 218 === Vt || 219 === Vt
        }
      },
      Je = {},
      Ce = new Map;

    function ue(tt, et) {
      et.constructor && (Object.prototype.hasOwnProperty.call(et, "constructor") && null == et.constructor[Symbol.metadata] && Dt(et.constructor), Ce.set(et.constructor, tt), Je[tt] = et), et.encode && (Ve[tt] = et.encode), et.decode && (be[tt] = et.decode)
    }

    function Ke(tt) {
      for (const et in tt) ue(et, tt[et]);
      return tt => JO(tt)
    }
    const he = "ArraySchema does not support streaming \u2014 positional ops (splice / unshift / reverse) shift subsequent indexes, so holding ADDs back for a later tick under `maxPerTick` would desync the decoder. Use `t.stream(X)` (stable monotonic positions) or `t.map(X).stream()` (stable keys) instead.";

    function ve() {
      return {
        pendingByView: new Map,
        sentByView: new Map,
        broadcastPending: new Set,
        sentBroadcast: new Set,
        broadcastDeletes: new Set,
        maxPerTick: 32
      }
    }

    function We(tt) {
      return tt._stream ??= ve()
    }

    function Se(tt, et, Vt) {
      0 === et.activeViews.size && We(tt).broadcastPending.add(Vt)
    }

    function ce(tt, et, Vt, Ot) {
      const Dt = tt._stream;
      if (void 0 === Dt) return !0;
      let mt = !1;
      return Dt.broadcastPending.delete(Ot) ? mt = !0 : Dt.sentBroadcast.delete(Ot) && Dt.broadcastDeletes.add(Ot), et.forEachActiveView((tt => {
        const et = Dt.pendingByView.get(tt.id);
        if (et?.has(Ot)) return et.delete(Ot), void(mt = !0);
        const dt = Dt.sentByView.get(tt.id);
        if (dt?.has(Ot)) {
          dt.delete(Ot);
          let et = tt.changes.get(Vt);
          void 0 === et && (et = new Map, tt.changes.set(Vt, et)), et.set(Ot, qt.DELETE)
        }
      })), mt
    }

    function Re(tt, et) {
      const Vt = tt._stream?.pendingByView;
      if (void 0 === Vt) return !1;
      for (const [Ot, qt] of Vt)
        if (qt.size > 0 && void 0 !== et.activeViews.get(Ot)?.deref()) return !0;
      return !1
    }

    function Ie(tt) {
      const et = tt._stream;
      return void 0 !== et && (et.broadcastPending.size > 0 || et.broadcastDeletes.size > 0)
    }

    function Pe(tt, et, Vt) {
      const Ot = We(tt);
      let qt = Ot.pendingByView.get(et);
      void 0 === qt && (qt = new Set, Ot.pendingByView.set(et, qt)), qt.add(Vt)
    }

    function Ze(tt, et) {
      const Vt = tt._stream;
      void 0 !== Vt && (Vt.pendingByView.delete(et), Vt.sentByView.delete(et), Vt.priorityByView?.delete(et))
    }
    const Le = {
      8: "uint8",
      16: "uint16",
      32: "uint32"
    };

    function Fe(tt) {
      if (null == tt || "object" !== typeof tt) throw new Error("t.quantized(): options object with { min, max } is required.");
      const {
        min: et,
        max: Vt
      } = tt;
      if ("number" !== typeof et || "number" !== typeof Vt || !(Vt > et) || !Number.isFinite(et) || !Number.isFinite(Vt)) throw new Error(`t.quantized(): require finite min < max (got min=${et}, max=${Vt}).`);
      const Ot = tt.bits ?? 16;
      if (8 !== Ot && 16 !== Ot && 32 !== Ot) throw new Error(`t.quantized(): bits must be 8, 16 or 32 (got ${Ot}).`);
      const qt = tt.mode ?? "clamp";
      if ("clamp" !== qt && "wrap" !== qt) throw new Error(`t.quantized(): mode must be "clamp" or "wrap" (got ${JSON.stringify(qt)}).`);
      const Dt = "wrap" === qt,
        mt = Math.pow(2, Ot);
      return {
        min: et,
        max: Vt,
        bits: Ot,
        wrap: Dt,
        wire: Le[Ot],
        range: Vt - et,
        span: Dt ? mt : et === -Vt ? mt - 2 : mt - 1
      }
    }

    function ke(tt) {
      return null !== tt && "object" === typeof tt && void 0 !== tt.quantized
    }

    function Ge(tt, et) {
      if (tt.wrap) {
        if (!Number.isFinite(et)) return 0;
        const Vt = tt.range;
        let Ot = (et - tt.min) % Vt;
        Ot < 0 && (Ot += Vt);
        const qt = tt.span;
        return Math.floor(Ot / Vt * qt + .5) % qt
      }
      if (et !== et) return 0;
      const Vt = et < tt.min ? tt.min : et > tt.max ? tt.max : et;
      return Math.floor((Vt - tt.min) / tt.range * tt.span + .5)
    }

    function ze(tt, et) {
      return tt.min + et / tt.span * tt.range
    }

    function oe(tt) {
      const et = Ve[tt.wire];
      return (Vt, Ot, qt) => et(Vt, Ge(tt, Ot), qt)
    }
    class re {
      types = {};
      schemas = new Map;
      hasFilters = !1;
      static inheritedTypes = new WeakMap;
      static cachedContexts = new WeakMap;
      static register(tt) {
        const et = Object.getPrototypeOf(tt);
        if (et !== cO) {
          let Vt = re.inheritedTypes.get(et);
          Vt || (Vt = new Set, re.inheritedTypes.set(et, Vt)), Vt.add(tt)
        }
      }
      static cache(tt) {
        let et = re.cachedContexts.get(tt);
        return et || (et = new re(tt), re.cachedContexts.set(tt, et)), et
      }
      constructor(tt) {
        tt && this.discoverTypes(tt)
      }
      has(tt) {
        return this.schemas.has(tt)
      }
      get(tt) {
        return this.types[tt]
      }
      add(tt) {
        let et = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.schemas.size;
        return !this.schemas.has(tt) && (this.types[et] = tt, null == tt[Symbol.metadata] && xe.initialize(tt), this.schemas.set(tt, et), !0)
      }
      getTypeId(tt) {
        return this.schemas.get(tt)
      }
      discoverTypes(tt) {
        if (!this.add(tt)) return;
        re.inheritedTypes.get(tt)?.forEach((tt => {
          this.discoverTypes(tt)
        }));
        let et = tt;
        for (;
          (et = Object.getPrototypeOf(et)) && et !== cO && et !== Function.prototype;) this.discoverTypes(et);
        const Vt = tt[Symbol.metadata];
        (Vt[ct] || Vt[Ft]) && (this.hasFilters = !0);
        for (const Ot in Vt) {
          const tt = Vt[Ot].type;
          if ("string" !== typeof tt && !ke(tt))
            if ("function" === typeof tt) this.discoverTypes(tt);
            else {
              const et = Object.values(tt)[0];
              if ("string" === typeof et) continue;
              this.discoverTypes(et)
            }
        }
      }
      debug() {
        return `TypeContext ->\n\tSchema types: ${this.schemas.size}\n\thasFilters: ${this.hasFilters}`
      }
    }

    function Ue(tt) {
      const et = ie(tt);
      return et ? {
        complexTypeKlass: Je[et],
        childType: tt[et]
      } : {
        complexTypeKlass: !1,
        childType: tt
      }
    }

    function Ae(tt, et) {
      const Vt = Ye(tt),
        Ot = ie(Vt),
        qt = Ot && ie(Vt[Ot]);
      if (qt) throw new Error(`${et?`${et}: `:""}@colyseus/schema: nested collections are not supported ("${Ot}" of "${qt}"). Collections can only hold primitive types or Schema classes, wrap the inner ${qt} in a Schema class.`);
      return Vt
    }

    function ie(tt) {
      return "object" === typeof tt && null !== tt ? Object.keys(tt).find((tt => void 0 !== Je[tt])) : void 0
    }

    function Ye(tt) {
      if ("object" !== typeof tt || null === tt) return tt;
      if (Array.isArray(tt)) return {
        array: Ye(tt[0])
      };
      const et = function(tt) {
        const et = Object.keys(tt),
          Vt = et.filter((tt => /\d+/.test(tt)));
        if (Vt.length > 0 && Vt.length === et.length / 2 && tt[tt[Vt[0]]] == Vt[0]) return "number";
        if (et.length > 0 && et.every((et => tt[et] === et))) return "string"
      }(tt);
      if (et) return et;
      if (ke(tt)) return "string" === typeof tt.quantized.wire ? tt : {
        quantized: Fe(tt.quantized)
      };
      if (void 0 !== tt.type) return Ye(tt.type);
      const Vt = ie(tt);
      return Vt && (tt[Vt] = Ye(tt[Vt])), tt
    }
    const Be = [St, It, Pt, Zt, Lt, Ft, vt];

    function pe(tt, et, Vt) {
      tt[et] || Object.defineProperty(tt, et, {
        value: [],
        enumerable: !1,
        configurable: !0,
        writable: !0
      }), tt[et].push(Vt)
    }
    const xe = {
        addField(tt, et, Vt, Ot, qt) {
          if (et >= 63) throw new Error(`Can't define field '${Vt}'.\nSchema instances may only have up to 63 fields.`);
          tt[et] = Object.assign(tt[et] || {}, {
            type: Ot,
            index: et,
            name: Vt
          }), Object.defineProperty(tt, Kt, {
            value: tt[Kt] || {},
            enumerable: !1,
            configurable: !0
          }), tt[Kt][Vt] = qt || {
            value: void 0,
            writable: !0,
            enumerable: !0,
            configurable: !0
          }, Object.defineProperty(tt, Wt, {
            value: et,
            enumerable: !1,
            configurable: !0
          }), Object.defineProperty(tt, Vt, {
            value: et,
            enumerable: !1,
            configurable: !0
          }), "string" === typeof tt[et].type || ke(tt[et].type) || (void 0 === tt[St] && Object.defineProperty(tt, St, {
            value: [],
            enumerable: !1,
            configurable: !0
          }), tt[St].push(et));
          const Dt = tt[et].type;
          if (Dt && "object" === typeof Dt && void 0 !== Dt.stream) {
            if (void 0 !== Dt.array) throw new Error(he);
            tt[et].stream = !0, tt[Ft] || Object.defineProperty(tt, Ft, {
              value: [],
              enumerable: !1,
              configurable: !0,
              writable: !0
            }), tt[Ft].includes(et) || tt[Ft].push(et);
            const qt = Ot?.priority;
            "function" === typeof qt && xe.setStreamPriority(tt, Vt, qt)
          }
        },
        setTag(tt, et, Vt) {
          const Ot = tt[et];
          if (tt[Ot].tag = Vt, tt[ct] || (Object.defineProperty(tt, ct, {
              value: [],
              enumerable: !1,
              configurable: !0
            }), Object.defineProperty(tt, Rt, {
              value: {},
              enumerable: !1,
              configurable: !0
            })), tt[ct].push(Ot), Vt < 0) tt[Rt][Vt] || (tt[Rt][Vt] = []), tt[Rt][Vt].push(Ot);
          else
            for (let qt = Vt; qt > 0; qt &= qt - 1) {
              const et = qt & -qt;
              tt[Rt][et] || (tt[Rt][et] = []), tt[Rt][et].push(Ot)
            }
        },
        setUnreliable(tt, et) {
          const Vt = tt[et];
          if ("string" !== typeof tt[Vt].type) throw new Error(`@unreliable cannot be applied to ref-type field "${et}". For ref-type fields, mark each primitive sub-field with @unreliable instead. See README "Limitations and best practices".`);
          tt[Vt].unreliable = !0, tt[It] || Object.defineProperty(tt, It, {
            value: [],
            enumerable: !1,
            configurable: !0,
            writable: !0
          }), tt[It].push(Vt)
        },
        setPatchOnly(tt, et) {
          const Vt = tt[et];
          if (tt[Vt].fullStateOnly) throw new Error(`field "${et}" cannot be both patchOnly and fullStateOnly \u2014 those are the only two delivery channels, so the field would never reach a client.`);
          tt[Vt].patchOnly = !0, pe(tt, Pt, Vt), pe(tt, Zt, Vt)
        },
        setDeprecated(tt, et) {
          const Vt = tt[et];
          tt[Vt].deprecated = !0, pe(tt, Zt, Vt), Object.defineProperty(tt, Vt, {
            value: tt[Vt],
            enumerable: !1,
            configurable: !0
          })
        },
        setFullStateOnly(tt, et) {
          const Vt = tt[et];
          if (tt[Vt].patchOnly) throw new Error(`field "${et}" cannot be both patchOnly and fullStateOnly \u2014 those are the only two delivery channels, so the field would never reach a client.`);
          tt[Vt].fullStateOnly = !0, pe(tt, Lt, Vt)
        },
        setStream(tt, et) {
          const Vt = tt[et];
          tt[Vt].stream = !0, tt[Ft] || Object.defineProperty(tt, Ft, {
            value: [],
            enumerable: !1,
            configurable: !0,
            writable: !0
          }), tt[Ft].push(Vt)
        },
        setStreamPriority(tt, et, Vt) {
          const Ot = tt[et];
          tt[kt] || Object.defineProperty(tt, kt, {
            value: {},
            enumerable: !1,
            configurable: !0,
            writable: !0
          }), tt[kt][Ot] = Vt
        },
        getStreamPriority: (tt, et) => tt?.[kt]?.[et],
        defineField(tt, et, Vt, Ot, qt) {
          const Dt = Ae(qt, `${tt.name}.${Ot}`),
            {
              complexTypeKlass: mt,
              childType: dt
            } = Ue(Dt);
          xe.addField(et, Vt, Ot, Dt, uO(Ot, Vt, dt, mt)), et[Kt][Ot] && Object.defineProperty(tt.prototype, Ot, et[Kt][Ot]), ("string" === typeof Dt || ke(Dt)) && (et[vt] || Object.defineProperty(et, vt, {
            value: [],
            enumerable: !1,
            configurable: !0,
            writable: !0
          }), et[vt][Vt] = "string" === typeof Dt ? Ve[Dt] : oe(Dt.quantized))
        },
        setFields(tt, et) {
          const Vt = tt.prototype.constructor;
          re.register(Vt);
          const Ot = Object.getPrototypeOf(Vt),
            qt = Ot && Ot[Symbol.metadata],
            Dt = xe.initialize(Vt);
          Vt[jt] || (Vt[jt] = cO[jt]), Vt[Ht] || (Vt[Ht] = cO[Ht]), Vt[Xt] || (Vt[Xt] = cO[Xt]), Vt.prototype.toJSON || (Vt.prototype.toJSON = cO.prototype.toJSON);
          let mt = Dt[Wt] ?? (qt && qt[Wt]) ?? -1;
          mt++, Dt[vt] || Object.defineProperty(Dt, vt, {
            value: qt?.[vt] ? [...qt[vt]] : [],
            enumerable: !1,
            configurable: !0,
            writable: !0
          });
          for (const dt in et) {
            if (void 0 !== Dt[dt]) throw new Error(`@colyseus/schema: Duplicate '${dt}' definition on '${Vt.name||"(anonymous)"}'.`);
            xe.defineField(Vt, Dt, mt, dt, et[dt]), mt++
          }
          return tt
        },
        isDeprecated: (tt, et) => !0 === tt[et].deprecated,
        initialize(tt) {
          const et = Object.getPrototypeOf(tt),
            Vt = et[Symbol.metadata];
          let Ot = tt[Symbol.metadata] ?? Object.create(null);
          if (et !== cO && Ot === Vt && (Ot = Object.create(null), Vt)) {
            Object.setPrototypeOf(Ot, Vt), Object.defineProperty(Ot, Wt, {
              value: Vt[Wt],
              enumerable: !1,
              configurable: !0,
              writable: !0
            }), void 0 !== Vt[ct] && (Object.defineProperty(Ot, ct, {
              value: [...Vt[ct]],
              enumerable: !1,
              configurable: !0,
              writable: !0
            }), Object.defineProperty(Ot, Rt, {
              value: {
                ...Vt[Rt]
              },
              enumerable: !1,
              configurable: !0,
              writable: !0
            }));
            for (const tt of Be) {
              const et = Vt[tt];
              void 0 !== et && Object.defineProperty(Ot, tt, {
                value: [...et],
                enumerable: !1,
                configurable: !0,
                writable: !0
              })
            }
            Object.defineProperty(Ot, Kt, {
              value: {
                ...Vt[Kt]
              },
              enumerable: !1,
              configurable: !0,
              writable: !0
            })
          }
          return Object.defineProperty(tt, Symbol.metadata, {
            value: Ot,
            writable: !1,
            configurable: !0
          }), Ot
        },
        isValidInstance: tt => tt.constructor[Symbol.metadata] && Object.prototype.hasOwnProperty.call(tt.constructor[Symbol.metadata], Wt),
        getFields(tt) {
          const et = tt[Symbol.metadata],
            Vt = {};
          for (let Ot = 0; Ot <= et[Wt]; Ot++) Vt[et[Ot].name] = et[Ot].type;
          return Vt
        },
        hasViewTagAtIndex: (tt, et) => tt?.[ct]?.includes(et),
        hasUnreliableAtIndex: (tt, et) => tt?.[It]?.includes(et),
        hasPatchOnlyAtIndex: (tt, et) => tt?.[Pt]?.includes(et),
        hasFullStateOnlyAtIndex: (tt, et) => tt?.[Lt]?.includes(et),
        hasStreamAtIndex: (tt, et) => tt?.[Ft]?.includes(et)
      },
      Te = (tt, et, Vt) => tt(et, Vt);
    class ge {
      dirtyLow = 0;
      dirtyHigh = 0;
      ops;
      constructor(tt) {
        this.ops = new Uint8Array(Math.max(tt + 1, 1))
      }
      record(tt, et) {
        const Vt = this.ops[tt];
        0 === Vt ? this.ops[tt] = et : (Vt === qt.DELETE || Vt === qt.ADD && et === qt.DELETE_AND_ADD) && (this.ops[tt] = qt.DELETE_AND_ADD), tt < 32 ? this.dirtyLow |= 1 << tt : this.dirtyHigh |= 1 << tt - 32
      }
      recordDelete(tt, et) {
        this.ops[tt] = et, tt < 32 ? this.dirtyLow |= 1 << tt : this.dirtyHigh |= 1 << tt - 32
      }
      recordRaw(tt, et) {
        this.record(tt, et)
      }
      operationAt(tt) {
        const et = this.ops[tt];
        return 0 === et ? void 0 : et
      }
      setOperationAt(tt, et) {
        this.ops[tt] = et
      }
      forEach(tt) {
        this.forEachWithCtx(tt, Te)
      }
      forEachWithCtx(tt, et) {
        let Vt = this.dirtyLow,
          Ot = this.dirtyHigh;
        const qt = this.ops;
        for (; 0 !== Vt;) {
          const Ot = Vt & -Vt,
            Dt = 31 - Math.clz32(Ot);
          Vt ^= Ot, et(tt, Dt, qt[Dt])
        }
        for (; 0 !== Ot;) {
          const Vt = Ot & -Ot,
            Dt = 31 - Math.clz32(Vt) + 32;
          Ot ^= Vt, et(tt, Dt, qt[Dt])
        }
      }
      size() {
        return ne(this.dirtyLow) + ne(this.dirtyHigh)
      }
      has() {
        return 0 !== (this.dirtyLow | this.dirtyHigh)
      }
      reset() {
        this.dirtyLow = 0, this.dirtyHigh = 0, this.ops.fill(0)
      }
    }
    class se {
      Sf = new Map;
      pureOps = [];
      record(tt, et) {
        const Vt = this.Sf.get(tt);
        void 0 === Vt ? this.Sf.set(tt, et) : (Vt === qt.DELETE || Vt === qt.ADD && et === qt.DELETE_AND_ADD) && this.Sf.set(tt, qt.DELETE_AND_ADD)
      }
      recordDelete(tt, et) {
        this.Sf.set(tt, et)
      }
      recordRaw(tt, et) {
        this.Sf.set(tt, et)
      }
      recordPure(tt) {
        this.pureOps.push([this.Sf.size, tt])
      }
      operationAt(tt) {
        return this.Sf.get(tt)
      }
      setOperationAt(tt, et) {
        this.Sf.has(tt) && this.Sf.set(tt, et)
      }
      forEach(tt) {
        this.forEachWithCtx(tt, Te)
      }
      forEachWithCtx(tt, et) {
        const Vt = this.pureOps;
        if (Vt.length > 0) {
          let Ot = 0,
            qt = 0;
          for (const [Dt, mt] of this.Sf) {
            for (; Ot < Vt.length && Vt[Ot][0] <= qt;) {
              const qt = Vt[Ot++][1];
              et(tt, -qt, qt)
            }
            et(tt, Dt, mt), qt++
          }
          for (; Ot < Vt.length;) {
            const qt = Vt[Ot++][1];
            et(tt, -qt, qt)
          }
        } else
          for (const [Ot, qt] of this.Sf) et(tt, Ot, qt)
      }
      size() {
        return this.Sf.size + this.pureOps.length
      }
      has() {
        return this.Sf.size > 0 || this.pureOps.length > 0
      }
      reset() {
        this.Sf.clear(), this.pureOps.length = 0
      }
      shift(tt) {
        const et = new Map;
        for (const [Vt, Ot] of this.Sf) et.set(Vt + tt, Ot);
        this.Sf = et
      }
    }

    function ne(tt) {
      return 16843009 * ((tt = (858993459 & (tt -= tt >>> 1 & 1431655765)) + (tt >>> 2 & 858993459)) + (tt >>> 4) & 252645135) >>> 24
    }

    function tV(tt) {
      if (void 0 === tt) return 0;
      let et = 0;
      for (let Vt = 0, Ot = tt.length; Vt < Ot; Vt++) {
        const Ot = tt[Vt];
        Ot < 32 && (et |= 1 << Ot)
      }
      return et
    }

    function eV(tt) {
      const et = tt.constructor;
      if (Object.prototype.hasOwnProperty.call(et, ht)) return et[ht];
      const Vt = et[Symbol.metadata],
        Ot = xe.isValidInstance(tt),
        qt = (Vt?.[ct]?.length ?? 0) > 0,
        Dt = function(tt) {
          const et = [],
            Vt = [],
            Ot = [],
            qt = [],
            Dt = tt?.[Wt];
          if (void 0 === Dt) return {
            names: et,
            types: Vt,
            tags: Ot,
            encoders: qt
          };
          const mt = tt[vt];
          for (let dt = 0; dt <= Dt; dt++) {
            const Dt = tt[dt];
            void 0 !== Dt ? (et[dt] = Dt.name, Vt[dt] = Dt.type, Ot[dt] = Dt.tag, qt[dt] = mt?.[dt]) : (et[dt] = void 0, Vt[dt] = void 0, Ot[dt] = void 0, qt[dt] = void 0)
          }
          return {
            names: et,
            types: Vt,
            tags: Ot,
            encoders: qt
          }
        }(Vt),
        mt = Ot && !qt ? void 0 : et[Qt],
        dt = {
          encoder: et[Ht],
          filter: mt,
          metadata: Vt,
          isSchema: Ot,
          filterBitmask: Ot ? tV(Vt?.[ct]) : 0,
          hasAnyFullStateOnly: (Vt?.[Lt]?.length ?? 0) > 0,
          hasAnyUnreliable: (Vt?.[It]?.length ?? 0) > 0,
          hasAnyStream: (Vt?.[Ft]?.length ?? 0) > 0,
          hasAnyView: qt,
          fullStateOnlyBitmask: tV(Vt?.[Lt]),
          unreliableBitmask: tV(Vt?.[It]),
          streamBitmask: tV(Vt?.[Ft]),
          names: Dt.names,
          types: Dt.types,
          tags: Dt.tags,
          encoders: Dt.encoders
        };
      return Object.defineProperty(et, ht, {
        value: dt,
        enumerable: !1,
        writable: !0,
        configurable: !0
      }), dt
    }

    function VV(tt, et) {
      if (void 0 !== tt.parentRef && et(tt.parentRef, tt._parentIndex)) return !0;
      for (let Vt = tt.extraParents; void 0 !== Vt; Vt = Vt.next)
        if (et(Vt.ref, Vt.index)) return !0;
      return !1
    }
    const OV = (tt, et) => {
        tt.isFieldUnreliable(et) ? tt.ensureUnreliableRecorder().record(et, qt.ADD) : tt.record(et, qt.ADD)
      },
      qV = (tt, et) => tt(et);

    function DV(tt, et, Vt) {
      const Ot = tt.refTarget;
      if (void 0 !== Ot[yt]) {
        if (tt.isPatchOnly) return;
        if (Array.isArray(Ot.items)) {
          const tt = Ot.items;
          for (let Ot = 0, qt = tt.length; Ot < qt; Ot++) void 0 !== tt[Ot] && Vt(et, Ot)
        } else if (void 0 !== Ot.journal)
          for (const [tt, qt] of Ot.journal.keyByIndex) Ot.$items.has(qt) && Vt(et, tt);
        else if (void 0 !== Ot.$items)
          for (const tt of Ot.$items.keys()) Vt(et, tt)
      } else {
        const qt = tt.metadata;
        if (!qt) return;
        const Dt = qt[Wt] ?? -1,
          mt = qt[Zt],
          dt = tt.encDescriptor.names;
        for (let tt = 0; tt <= Dt; tt++) {
          const qt = dt[tt];
          if (void 0 === qt) continue;
          if (mt && mt.includes(tt)) continue;
          const Dt = Ot[qt];
          void 0 !== Dt && null !== Dt && Vt(et, tt)
        }
      }
    }

    function mV(tt, et, Vt, Ot) {
      ! function(tt, et, Vt) {
        if (!et) return;
        const Ot = et[wt],
          qt = !Ot._isSchema;
        let Dt;
        qt ? (et = Ot.parent, Vt = Ot.parentIndex, Dt = et?.[wt].metadata) : Dt = Ot.metadata;
        const mt = (Dt?.[Pt]?.includes(Vt) ? hV : 0) | (Dt?.[Lt]?.includes(Vt) ? vV : 0),
          dt = Ot.flags & cV | mt,
          jt = tt.flags;
        tt.flags = jt | dt;
        dt & ~jt & vV && (tt.reset(), tt.unreliableRecorder?.reset());
        const Ht = tt.root?.types;
        if (!Ht?.hasFilters) return;
        const Xt = Dt?.[ct]?.includes(Vt) ?? !1,
          Qt = Dt?.[Ft]?.includes(Vt) ?? !1,
          lt = Ot.isFiltered || Xt || Qt;
        if (tt.isFiltered = lt, Qt && !qt) {
          tt.isStreamCollection = !0;
          const et = We(tt.ref);
          if (void 0 === et.priority) {
            const tt = xe.getStreamPriority(Dt, Vt);
            void 0 !== tt && (et.priority = tt)
          }
          tt.root?.registerStream(tt.ref)
        }
        if (lt) {
          const et = jV(tt);
          tt.isVisibilitySharedWithParent = Ot.isFiltered && et && !Qt && (!Xt || qt && Dt[Vt].tag !== wO)
        }
      }(tt, et, Vt), tt.isFullStateOnly || (tt.has() && tt.root?.enqueueChangeTree(tt), tt.unreliableRecorder?.has() && tt.root?.enqueueUnreliable(tt), tt.has() || tt.unreliableRecorder?.has() || tt.root?.enqueueChangeTree(tt))
    }

    function dV(tt) {
      const et = tt.pendingFilterRefresh;
      for (let Vt = 0; Vt < et.length; Vt++) {
        const tt = et[Vt];
        0 !== (tt.flags & SV) && HV(tt)
      }
      et.length = 0
    }

    function jV(tt) {
      return tt._isSchema || "string" !== typeof tt.refTarget[yt]
    }

    function HV(tt) {
      tt.flags &= ~SV;
      const et = tt.root;
      if (void 0 === et || void 0 === tt.parentRef) return;
      const Vt = jV(tt);
      let Ot = fV(tt, tt.parentRef, tt._parentIndex, Vt);
      for (let Dt = tt.extraParents; void 0 !== Dt && Ot !== EV; Dt = Dt.next) Ot |= fV(tt, Dt.ref, Dt.index, Vt);
      if (0 === Ot) return;
      tt.isVisibilitySharedWithParent = 0 !== (Ot & lV);
      const qt = 0 === (Ot & QV);
      qt !== tt.isFiltered && (tt.isFiltered = qt, qt || tt.isFullStateOnly || (tt.forEachLiveWithCtx(tt, OV), tt.has() && et.enqueueChangeTree(tt), tt.unreliableRecorder?.has() && et.enqueueUnreliable(tt)), tt.forEachChildWithCtx(tt, wV))
    }
    const XV = 1,
      QV = 2,
      lV = 4,
      EV = XV | QV | lV;

    function fV(tt, et, Vt, Ot) {
      const qt = et[wt];
      if (qt.root !== tt.root || ! function(tt, et, Vt) {
          const Ot = et.refTarget;
          if (et.isArray) {
            const et = Ot.items,
              qt = et[Vt];
            if (void 0 !== qt && qt[wt] === tt) return !0;
            for (let Vt = 0, Ot = et.length; Vt < Ot; Vt++) {
              const Ot = et[Vt];
              if (void 0 !== Ot && Ot[wt] === tt) return !0
            }
            return !1
          }
          const qt = et.getValue(Vt);
          return void 0 !== qt && qt[wt] === tt
        }(tt, qt, Vt)) return 0;
      qt.flags & SV && HV(qt);
      let Dt = XV;
      if (qt._isSchema) {
        void 0 !== qt.encDescriptor.tags[Vt] || qt.isFieldStream(Vt) || (qt.isFiltered ? Ot && (Dt |= lV) : Dt |= QV)
      } else if (qt.isFiltered) {
        if (Ot && !qt.isStreamCollection) {
          const tt = qt.parent?.[wt];
          (tt?._isSchema ? tt.encDescriptor.tags[qt.parentIndex] : void 0) !== wO && (Dt |= lV)
        }
      } else Dt |= QV;
      return Dt
    }
    const wV = (tt, et, Vt) => {
      HV(et)
    };

    function yV(tt, et, Vt, Ot) {
      if (tt.addParent(et, Ot), !Vt) return;
      const qt = Vt.add(tt);
      Vt !== tt.root && (tt.root = Vt, mV(tt, et, Ot));
      const Dt = et?.[wt];
      if (void 0 !== Dt && void 0 !== Dt.subscribedViews && void 0 !== et[yt] && function(tt, et, Vt, Ot) {
          const qt = tt.subscribedViews;
          if (void 0 === qt) return;
          const Dt = tt.isStreamCollection,
            mt = Dt ? tt.ref : void 0,
            dt = Dt ? void 0 : Vt[wt];
          for (let jt = 0, Ht = qt.length; jt < Ht; jt++) {
            let tt = qt[jt];
            for (; 0 !== tt;) {
              const Vt = tt & -tt;
              tt ^= Vt;
              const Ht = 32 * jt + (31 - Math.clz32(Vt)),
                Xt = Ot.activeViews.get(Ht),
                Qt = Xt?.deref();
              void 0 !== Qt ? Dt ? Pe(mt, Ht, et) : void 0 !== dt && Qt.markVisible(dt) : qt[jt] &= ~Vt
            }
          }
        }(Dt, Ot, tt.ref, Vt), qt) {
        let et = bV[JV];
        void 0 === et && (et = {
          parentRef: void 0,
          root: void 0
        }, bV[JV] = et), et.parentRef = tt.ref, et.root = Vt, JV++, aV(tt, et, CV), JV--
      }
    }

    function NV(tt, et, Vt) {
      tt(et, Vt)
    }

    function aV(tt, et, Vt) {
      const Ot = tt.refTarget;
      if (Ot[yt]) {
        if ("string" !== typeof Ot[yt]) {
          const tt = Ot.items;
          if (void 0 !== tt)
            for (let Ot = 0, qt = tt.length; Ot < qt; Ot++) {
              const qt = tt[Ot];
              qt && Vt(et, qt[wt], Ot)
            } else {
              const tt = Ot.$items,
                qt = Ot._collectionIndexes;
              for (const Ot of tt.keys()) {
                const Dt = tt.get(Ot);
                Dt && Vt(et, Dt[wt], qt?.[Ot] ?? Ot)
              }
            }
        }
      } else {
        const qt = tt.metadata,
          Dt = qt?.[St];
        if (!Dt) return;
        const mt = tt.encDescriptor.names;
        for (let tt = 0, dt = Dt.length; tt < dt; tt++) {
          const qt = Dt[tt],
            dt = Ot[mt[qt]];
          dt && Vt(et, dt[wt], qt)
        }
      }
    }

    function MV(tt, et, Vt) {
      et.root !== tt ? et.setRoot(tt) : tt.add(et)
    }
    const bV = [];
    let JV = 0;

    function CV(tt, et, Vt) {
      if (et.root === tt.root) return tt.root.add(et), void tt.root.moveNextToParent(et);
      et.setParent(tt.parentRef, tt.root, Vt)
    }

    function uV(tt, et, Vt) {
      const Ot = (3 & Vt) << 3;
      return Vt < 4 ? tt >>> Ot & 255 : et >>> Ot & 255
    }
    const KV = (tt, et, Vt) => tt(et, Vt);
    const hV = 16,
      vV = 32,
      WV = 128,
      SV = 256,
      cV = hV | vV;
    class RV {
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
      set isFiltered(tt) {
        this.flags = tt ? 1 | this.flags : -2 & this.flags
      }
      get isVisibilitySharedWithParent() {
        return 0 !== (2 & this.flags)
      }
      set isVisibilitySharedWithParent(tt) {
        this.flags = tt ? 2 | this.flags : -3 & this.flags
      }
      get isNew() {
        return 0 !== (4 & this.flags)
      }
      set isNew(tt) {
        this.flags = tt ? 4 | this.flags : -5 & this.flags
      }
      get isUnreliable() {
        return 0 !== (8 & this.flags)
      }
      set isUnreliable(tt) {
        this.flags = tt ? 8 | this.flags : -9 & this.flags
      }
      get isPatchOnly() {
        return 0 !== (this.flags & hV)
      }
      set isPatchOnly(tt) {
        this.flags = tt ? this.flags | hV : this.flags & ~hV
      }
      get isFullStateOnly() {
        return 0 !== (this.flags & vV)
      }
      set isFullStateOnly(tt) {
        this.flags = tt ? this.flags | vV : this.flags & ~vV
      }
      get isStreamCollection() {
        return 0 !== (64 & this.flags)
      }
      set isStreamCollection(tt) {
        this.flags = tt ? 64 | this.flags : -65 & this.flags
      }
      get needsRestage() {
        return 0 !== (this.flags & WV)
      }
      set needsRestage(tt) {
        this.flags = tt ? this.flags | WV : -129 & this.flags
      }
      get hasFilteredFields() {
        return this.isFiltered || this.encDescriptor.hasAnyView
      }
      ensureUnreliableRecorder() {
        return void 0 === this.unreliableRecorder && (this.unreliableRecorder = this._isSchema ? new ge(this.metadata?.[Wt] ?? 0) : new se), this.unreliableRecorder
      }
      isFieldUnreliable(tt) {
        const et = this.encDescriptor;
        return !!et.hasAnyUnreliable && (tt < 32 ? 0 !== (et.unreliableBitmask & 1 << tt) : xe.hasUnreliableAtIndex(this.metadata, tt))
      }
      isFieldFullStateOnly(tt) {
        if (this.isFullStateOnly) return !0;
        const et = this.encDescriptor;
        return !!et.hasAnyFullStateOnly && (tt < 32 ? 0 !== (et.fullStateOnlyBitmask & 1 << tt) : xe.hasFullStateOnlyAtIndex(this.metadata, tt))
      }
      isFieldStream(tt) {
        const et = this.encDescriptor;
        return !!et.hasAnyStream && (tt < 32 ? 0 !== (et.streamBitmask & 1 << tt) : xe.hasStreamAtIndex(this.metadata, tt))
      }
      constructor(tt) {
        let et = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : tt;
        this.ref = tt, this.refTarget = et;
        const Vt = eV(tt);
        this.encDescriptor = Vt, this.metadata = Vt.metadata;
        const Ot = Vt.isSchema;
        if (this._isSchema = Ot, this.ops = void 0, this.collDirty = void 0, this.collPureOps = void 0, Ot) {
          const tt = this.metadata?.[Wt] ?? 0;
          tt > 7 && (this.ops = new Uint8Array(tt + 1))
        } else this.collDirty = new Map
      }
      _opAt(tt) {
        const et = this.ops;
        if (void 0 !== et) return et[tt];
        const Vt = (3 & tt) << 3;
        return tt < 4 ? this.opsLow >>> Vt & 255 : this.opsHigh >>> Vt & 255
      }
      _opPut(tt, et) {
        const Vt = this.ops;
        if (void 0 !== Vt) return void(Vt[tt] = et);
        const Ot = (3 & tt) << 3,
          qt = ~(255 << Ot);
        tt < 4 ? this.opsLow = this.opsLow & qt | et << Ot : this.opsHigh = this.opsHigh & qt | et << Ot
      }
      _markDirty(tt) {
        tt < 32 ? this.dirtyLow |= 1 << tt : this.dirtyHigh |= 1 << tt - 32
      }
      record(tt, et) {
        if (this._isSchema) {
          const Vt = this._opAt(tt);
          0 === Vt ? this._opPut(tt, et) : (Vt === qt.DELETE || Vt === qt.ADD && et === qt.DELETE_AND_ADD) && this._opPut(tt, qt.DELETE_AND_ADD), this._markDirty(tt)
        } else {
          const Vt = this.collDirty,
            Ot = Vt.get(tt);
          let Dt;
          Dt = void 0 === Ot ? et : Ot === qt.DELETE || Ot === qt.ADD && et === qt.DELETE_AND_ADD ? qt.DELETE_AND_ADD : Ot, Vt.set(tt, Dt)
        }
      }
      recordDelete(tt, et) {
        this._isSchema ? (this._opPut(tt, et), this._markDirty(tt)) : this.collDirty.set(tt, et)
      }
      recordRaw(tt, et) {
        this._isSchema ? (this._opPut(tt, et), this._markDirty(tt)) : this.collDirty.set(tt, et)
      }
      recordPure(tt) {
        if (this._isSchema) throw new Error("ChangeTree (Schema): pure operations are not supported");
        (this.collPureOps ??= []).push([this.collDirty.size, tt])
      }
      operationAt(tt) {
        if (this._isSchema) {
          const et = this._opAt(tt);
          return 0 === et ? void 0 : et
        }
        return this.collDirty.get(tt)
      }
      setOperationAt(tt, et) {
        if (this._isSchema) this._opPut(tt, et);
        else {
          const Vt = this.collDirty;
          Vt.has(tt) && Vt.set(tt, et)
        }
      }
      forEach(tt) {
        this.forEachWithCtx(tt, KV)
      }
      forEachWithCtx(tt, et) {
        if (this._isSchema) {
          let Vt = this.dirtyLow,
            Ot = this.dirtyHigh;
          const qt = this.ops;
          if (void 0 !== qt) {
            for (; 0 !== Vt;) {
              const Ot = Vt & -Vt,
                Dt = 31 - Math.clz32(Ot);
              Vt ^= Ot, et(tt, Dt, qt[Dt])
            }
            for (; 0 !== Ot;) {
              const Vt = Ot & -Ot,
                Dt = 31 - Math.clz32(Vt) + 32;
              Ot ^= Vt, et(tt, Dt, qt[Dt])
            }
          } else {
            const Ot = this.opsLow,
              qt = this.opsHigh;
            for (; 0 !== Vt;) {
              const Dt = Vt & -Vt,
                mt = 31 - Math.clz32(Dt);
              Vt ^= Dt, et(tt, mt, uV(Ot, qt, mt))
            }
          }
          return
        }
        const Vt = this.collDirty,
          Ot = this.collPureOps;
        if (void 0 !== Ot && Ot.length > 0) {
          let qt = 0,
            Dt = 0;
          for (const [mt, dt] of Vt) {
            for (; qt < Ot.length && Ot[qt][0] <= Dt;) {
              const Vt = Ot[qt++][1];
              et(tt, -Vt, Vt)
            }
            et(tt, mt, dt), Dt++
          }
          for (; qt < Ot.length;) {
            const Vt = Ot[qt++][1];
            et(tt, -Vt, Vt)
          }
        } else
          for (const [qt, Dt] of Vt) et(tt, qt, Dt)
      }
      size() {
        return this._isSchema ? ne(this.dirtyLow) + ne(this.dirtyHigh) : this.collDirty.size + (this.collPureOps?.length ?? 0)
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
      insertAt(tt, et) {
        if (this._isSchema) throw new Error("ChangeTree (Schema): insertAt is not supported");
        const Vt = this.collDirty,
          Ot = new Map,
          Dt = !this.paused && !this.isFullStateOnly;
        if (tt > 0)
          for (const [qt, mt] of Vt) qt < tt && Ot.set(qt, mt);
        if (Dt)
          for (let mt = 0; mt < et; mt++) Ot.set(tt + mt, qt.ADD);
        for (const [qt, mt] of Vt) qt >= tt && Ot.set(qt + et, mt);
        this.collDirty = Ot, Dt && this.root?.enqueueChangeTree(this)
      }
      removeAt(tt, et) {
        if (this._isSchema) throw new Error("ChangeTree (Schema): removeAt is not supported");
        const Vt = this.collDirty,
          Ot = tt + et;
        let qt = !1;
        for (const mt of Vt.keys())
          if (mt >= Ot) {
            qt = !0;
            break
          } if (!qt) {
          for (let et = tt; et < Ot; et++) Vt.delete(et);
          return
        }
        const Dt = new Map;
        for (const [mt, dt] of Vt) mt < tt ? Dt.set(mt, dt) : mt >= Ot && Dt.set(mt - et, dt);
        this.collDirty = Dt
      }
      unshift(tt) {
        this.insertAt(0, tt)
      }
      setRoot(tt) {
        ! function(tt, et) {
          tt.root = et;
          const Vt = et.add(tt);
          mV(tt, tt.parent, tt.parentIndex), Vt && aV(tt, et, MV)
        }(this, tt)
      }
      setParent(tt, et, Vt) {
        yV(this, tt, et, Vt)
      }
      forEachChild(tt) {
        aV(this, tt, NV)
      }
      forEachChildWithCtx(tt, et) {
        aV(this, tt, et)
      }
      forEachLive(tt) {
        DV(this, tt, qV)
      }
      forEachLiveWithCtx(tt, et) {
        DV(this, tt, et)
      }
      operation(tt) {
        this.paused || this.isFullStateOnly || (this.recordPure(tt), this.root?.enqueueChangeTree(this))
      }
      _routeAndRecord(tt, et, Vt) {
        if (!this.paused && !this.isFieldFullStateOnly(tt)) {
          if (this.isFieldUnreliable(tt) && !this.isNew) {
            const Ot = this.ensureUnreliableRecorder();
            return Vt ? Ot.recordRaw(tt, et) : Ot.record(tt, et), void this.root?.enqueueUnreliable(this)
          }
          Vt ? this.recordRaw(tt, et) : this.record(tt, et), this.root?.enqueueChangeTree(this)
        }
      }
      change(tt) {
        let et = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : qt.ADD;
        this._routeAndRecord(tt, et, !1)
      }
      indexedOperation(tt, et) {
        this._routeAndRecord(tt, et, !0)
      }
      getChange(tt) {
        return this.operationAt(tt)
      }
      pause() {
        this.paused = !0
      }
      resume() {
        this.paused = !1
      }
      untracked(tt) {
        const et = this.paused;
        this.paused = !0;
        try {
          return tt()
        } finally {
          this.paused = et
        }
      }
      markDirty(tt) {
        let et = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : qt.ADD;
        const Vt = this.paused;
        this.paused = !1;
        try {
          this.change(tt, et)
        } finally {
          this.paused = Vt
        }
      }
      getValue(tt) {
        let et = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return this.refTarget[lt](tt, et)
      }
      delete(tt, et) {
        if (void 0 === tt) {
          try {
            throw new Error(`@colyseus/schema ${this.ref.constructor.name}: trying to delete non-existing index '${tt}'`)
          } catch (mq) {
            console.warn(mq)
          }
          return
        }
        if (this.paused || this.isFieldFullStateOnly(tt)) return this.getValue(tt);
        const Vt = this.isFieldUnreliable(tt) && !this.isNew;
        Vt ? this.ensureUnreliableRecorder().recordDelete(tt, et ?? qt.DELETE) : this.recordDelete(tt, et ?? qt.DELETE);
        const Ot = this.getValue(tt);
        return Ot && Ot[wt] && this.root?.remove(Ot[wt]), Vt ? this.root?.enqueueUnreliable(this) : this.root?.enqueueChangeTree(this), Ot
      }
      endEncode() {
        this.reset(), this.changesNode = void 0, this._isSchema || this.refTarget[Mt]?.(), this.isNew = !1
      }
      endEncodeUnreliable() {
        this.unreliableRecorder?.reset(), this.unreliableChangesNode = void 0, this._isSchema || this.refTarget[Mt]?.()
      }
      discard() {
        this._isSchema || this.refTarget[Mt]?.(), this.reset(), this.unreliableRecorder?.reset()
      }
      discardAll() {
        const tt = tt => {
          if (tt < 0) return;
          const et = this.getValue(tt);
          et && et[wt] && et[wt].discardAll()
        };
        this.forEach(tt), this.unreliableRecorder?.forEach(tt), this.discard()
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
      addParent(tt, et) {
        ! function(tt, et, Vt) {
          if (tt.parentRef) {
            if (tt.parentRef[wt] === et[wt]) return void(tt._parentIndex = Vt);
            if (VV(tt, ((tt, Vt) => tt[wt] === et[wt]))) return void(tt._parentIndex = Vt)
          }
          void 0 === tt.parentRef ? (tt.parentRef = et, tt._parentIndex = Vt) : (tt.extraParents = {
            ref: tt.parentRef,
            index: tt._parentIndex,
            next: tt.extraParents
          }, tt.parentRef = et, tt._parentIndex = Vt)
        }(this, tt, et)
      }
      setParentIndex(tt, et) {
        ! function(tt, et, Vt) {
          if (void 0 !== tt.extraParents)
            if (tt.parentRef[wt] !== et[wt]) {
              for (let Ot = tt.extraParents; void 0 !== Ot; Ot = Ot.next)
                if (Ot.ref[wt] === et[wt]) return void(Ot.index = Vt)
            } else tt._parentIndex = Vt;
          else tt._parentIndex = Vt
        }(this, tt, et)
      }
      removeParent() {
        return function(tt, et) {
          if (tt.parentRef && tt.parentRef[wt] === et[wt]) return tt.extraParents ? (tt.parentRef = tt.extraParents.ref, tt._parentIndex = tt.extraParents.index, tt.extraParents = tt.extraParents.next) : (tt.parentRef = void 0, tt._parentIndex = void 0), !0;
          let Vt = tt.extraParents,
            Ot = null;
          for (; Vt;) {
            if (Vt.ref[wt] === et[wt]) return Ot ? Ot.next = Vt.next : tt.extraParents = Vt.next, !0;
            Ot = Vt, Vt = Vt.next
          }
          return void 0 === tt.parentRef
        }(this, arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.parent)
      }
      findParent(tt) {
        return function(tt, et) {
          if (void 0 !== tt.parentRef && et(tt.parentRef, tt._parentIndex)) return {
            ref: tt.parentRef,
            index: tt._parentIndex
          };
          for (let Vt = tt.extraParents; void 0 !== Vt; Vt = Vt.next)
            if (et(Vt.ref, Vt.index)) return {
              ref: Vt.ref,
              index: Vt.index
            }
        }(this, tt)
      }
      hasParent(tt) {
        return VV(this, tt)
      }
      indexInParent(tt) {
        return function(tt, et) {
          if (tt.parentRef && tt.parentRef[wt] === et[wt]) return tt._parentIndex;
          for (let Vt = tt.extraParents; void 0 !== Vt; Vt = Vt.next)
            if (Vt.ref[wt] === et[wt]) return Vt.index
        }(this, tt)
      }
      getAllParents() {
        return function(tt) {
          const et = [];
          tt.parentRef && et.push({
            ref: tt.parentRef,
            index: tt._parentIndex
          });
          let Vt = tt.extraParents;
          for (; Vt;) et.push({
            ref: Vt.ref,
            index: Vt.index
          }), Vt = Vt.next;
          return et
        }(this)
      }
    }
    class IV {
      ref;
      root = void 0;
      parentRef = void 0;
      paused = !1;
      isNew = !1;
      flags = 0;
      constructor(tt) {
        this.ref = tt
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
      untracked(tt) {
        return tt()
      }
      markDirty() {}
      forEachChild(tt) {
        const et = this.ref;
        if (et[yt]) {
          if ("string" !== typeof et[yt])
            for (const [Vt, Ot] of et.entries()) Ot && tt(Ot[wt], et._collectionIndexes?.[Vt] ?? Vt);
          return
        }
        const Vt = et.constructor,
          Ot = Vt?.[Symbol.metadata];
        if (!Ot) return;
        const qt = Ot[St] ?? [];
        for (let Dt = 0; Dt < qt.length; Dt++) {
          const Vt = qt[Dt],
            mt = et[Ot[Vt].name];
          mt && tt(mt[wt], Vt)
        }
      }
      forEachChildWithCtx(tt, et) {
        this.forEachChild(((Vt, Ot) => et(tt, Vt, Ot)))
      }
      forEachLive() {}
      forEachLiveWithCtx() {}
      forEach() {}
    }

    function PV(tt) {
      let et = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : tt;
      var Vt;
      Object.defineProperty(tt, wt, {
        value: (Vt = et, new IV(Vt)),
        enumerable: !1,
        writable: !0
      })
    }

    function ZV(tt, et, Vt, Ot, Dt, mt, jt) {
      void 0 !== jt ? jt(et, Ot, mt) : "string" === typeof Vt ? Ve[Vt]?.(et, Ot, mt) : null != Vt[Symbol.metadata] ? (Ve.number(et, Ot[dt], mt), (Dt & qt.ADD) === qt.ADD && tt.tryEncodeTypeId(et, Vt, Ot.constructor, mt)) : Ve.number(et, Ot[dt], mt)
    }
    const LV = function(tt, et, Vt, Ot, Dt, mt, dt, jt) {
        if (et[mt.offset++] = 255 & (Ot | Dt), Dt === qt.DELETE) return;
        const Ht = Vt.encDescriptor,
          Xt = Vt.ref,
          Qt = Xt[Ct][Ot] ?? Xt[Ht.names[Ot]];
        ZV(tt, et, Ht.types[Ot], Qt, Dt, mt, Ht.encoders[Ot])
      },
      FV = function(tt, et, Vt, Ot, Dt, mt) {
        if (et[mt.offset++] = 255 & Dt, Ve.number(et, Ot, mt), Dt === qt.DELETE) return;
        const dt = Vt.ref;
        if ((Dt & qt.ADD) === qt.ADD) {
          const tt = dt.$indexes.get(Ot);
          Ve.string(et, tt, mt)
        }
        ZV(tt, et, dt[yt], dt[lt](Ot), Dt, mt)
      },
      kV = function(tt, et, Vt, Ot, Dt, mt) {
        if (et[mt.offset++] = 255 & Dt, Ve.number(et, Ot, mt), Dt === qt.DELETE) return;
        const dt = Vt.ref;
        ZV(tt, et, dt[yt], dt[lt](Ot), Dt, mt)
      },
      GV = function(tt, et, Vt, Ot, Dt, mt) {
        const dt = Vt.ref;
        (Dt & qt.ADD) === qt.ADD && "function" === typeof dt.set ? FV(tt, et, Vt, Ot, Dt, mt) : kV(tt, et, Vt, Ot, Dt, mt)
      },
      zV = function(tt, et, Vt, Ot, Dt, mt, jt, Ht) {
        const Xt = Vt.refTarget,
          Qt = Xt[yt],
          Et = "string" !== typeof Qt;
        let ft;
        if (Ht && Vt.isFiltered && Et) {
          const tt = Xt.tmpItems[Ot];
          if (!tt) return;
          if (ft = tt[dt], Dt === qt.DELETE) Dt = qt.DELETE_BY_REFID;
          else if ((Dt & qt.ADD) === qt.ADD) Dt = qt.ADD_BY_REFID;
          else if ((Dt & qt.MOVE) === qt.MOVE) return
        } else if (Dt === qt.DELETE && Et) {
          const tt = Xt.tmpItems[Ot];
          if (!tt) return;
          ft = tt[dt], Dt = qt.DELETE_BY_REFID
        } else ft = Ot;
        if (et[mt.offset++] = 255 & Dt, Ve.number(et, ft, mt), Dt === qt.DELETE || Dt === qt.DELETE_BY_REFID) return;
        ZV(tt, et, Qt, Xt[lt](Ot, jt), Dt, mt)
      };

    function oV(tt, et, Vt, Ot, Dt, mt, jt) {
      const Ht = tt.resyncVisited;
      let Xt = Ht.get(tt.currentRefId);
      if (void 0 === Xt && Ht.set(tt.currentRefId, Xt = new Set), Xt.add(Ot), void 0 !== Dt && Vt === qt.ADD && Dt !== mt) {
        const Vt = Dt[dt];
        void 0 !== Vt && (tt.root.removeRef(Vt), jt?.push({
          ref: et,
          refId: tt.currentRefId,
          op: qt.DELETE,
          dynamicIndex: Ot,
          value: void 0,
          previousValue: Dt
        }))
      }
    }

    function rV(tt, et, Vt, Ot) {
      const qt = et[dt];
      if (void 0 === qt || Vt.has(qt)) return;
      Vt.add(qt);
      const Dt = et.constructor[Symbol.metadata],
        mt = Dt?.[St];
      if (void 0 === mt) return;
      const jt = Dt[Pt];
      for (let dt = 0; dt < mt.length; dt++) {
        const qt = mt[dt];
        if (void 0 !== jt && jt.includes(qt)) continue;
        const Ht = Dt[qt],
          Xt = et[Ht.name];
        Xt && (cO.is(Ht.type) ? rV(tt, Xt, Vt, Ot) : UV(tt, Xt, Vt, Ot))
      }
    }

    function UV(tt, et, Vt, Ot) {
      const Dt = et[Nt] ?? et,
        mt = Dt[dt];
      if (void 0 === mt || Vt.has(mt)) return;
      Vt.add(mt);
      const jt = tt.resyncVisited.get(mt);
      if (void 0 === jt) return;
      const Ht = tt.root;
      Dt[ft](jt, ((tt, Vt) => {
        Ot?.push({
          ref: et,
          refId: mt,
          op: qt.DELETE,
          dynamicIndex: Vt,
          value: void 0,
          previousValue: tt
        });
        const Dt = tt?.[dt];
        void 0 !== Dt && Ht.removeRef(Dt)
      }), (et => {
        cO.isSchema(et) && rV(tt, et, Vt, Ot)
      }))
    }
    const AV = 1,
      iV = 2,
      YV = 3,
      BV = 4,
      pV = 5;

    function xV(tt, et, Vt, Ot, Dt, mt, jt, Ht, Xt) {
      const Qt = tt.root;
      let lt;
      if ((et & qt.DELETE) === qt.DELETE) {
        const tt = Dt?.[dt];
        void 0 !== tt && Qt.removeRef(tt), et !== qt.DELETE_AND_ADD && Vt[Et](Ot), lt = void 0
      }
      if (et === qt.DELETE);
      else if ("string" === typeof mt) lt = be[mt](jt, Ht);
      else if (ke(mt)) lt = function(tt, et, Vt) {
        return ze(tt, (0, be[tt.wire])(et, Vt))
      }(mt.quantized, jt, Ht);
      else if (cO.is(mt)) {
        const Vt = be.number(jt, Ht);
        if (lt = Qt.refs.get(Vt), (et & qt.ADD) === qt.ADD) {
          const Ot = tt.getInstanceType(jt, Ht, mt);
          lt || (lt = tt.createInstanceOfType(Ot)), Qt.addRef(Vt, lt, lt !== Dt || et === qt.DELETE_AND_ADD && lt === Dt)
        }
      } else {
        const Vt = (ft = Object.keys(mt)[0], Je[ft]),
          Ot = be.number(jt, Ht);
        null !== tt.resyncVisited && function(tt, et) {
          const Vt = tt.resyncVisited;
          Vt.has(et) || Vt.set(et, new Set)
        }(tt, Ot);
        const Et = Qt.refs.has(Ot) ? Dt || Qt.refs.get(Ot) : Vt.constructor.initializeForDecoder();
        if (lt = Et.clone(!0), lt[yt] = Object.values(mt)[0], Dt) {
          let tt = Dt[dt];
          if (void 0 !== tt && Ot !== tt) {
            (et & qt.DELETE) !== qt.DELETE && Qt.removeRef(tt);
            const Vt = Dt.entries();
            let Ot;
            for (;
              (Ot = Vt.next()) && !Ot.done;) {
              const [et, Vt] = Ot.value;
              "object" === typeof Vt && (tt = Vt[dt]), Xt?.push({
                ref: Dt,
                refId: tt,
                op: qt.DELETE,
                field: et,
                value: void 0,
                previousValue: Vt
              })
            }
          }
        }
        Qt.addRef(Ot, lt, Et !== Dt || et === qt.DELETE_AND_ADD && Et === Dt)
      }
      var ft;
      return lt
    }
    const TV = function(tt, et, Vt, Ot, qt) {
        const Dt = et[Vt.offset++],
          mt = Ot.constructor[Symbol.metadata],
          dt = Dt >> 6 << 6,
          jt = Dt % (dt || 255),
          Ht = mt[jt];
        if (void 0 === Ht) return console.warn("@colyseus/schema: field not defined at", {
          index: jt,
          ref: Ot.constructor.name,
          metadata: mt
        }), -1;
        const Xt = !0 === Ht.deprecated,
          Qt = Xt ? void 0 : Ot[lt](jt),
          Et = xV(tt, dt, Ot, jt, Qt, Ht.type, et, Vt, qt);
        Xt || (null !== Et && void 0 !== Et && (Ot[Ht.name] = Et), Qt !== Et && qt?.push({
          ref: Ot,
          refId: tt.currentRefId,
          op: dt,
          field: Ht.name,
          value: Et,
          previousValue: Qt
        }))
      },
      gV = function(tt, et, Vt, Ot, Dt) {
        const mt = Ot[Nt] ?? Ot,
          dt = et[Vt.offset++];
        if (dt === qt.CLEAR) return tt.removeChildRefs(mt, Dt), void mt.clear();
        const jt = be.number(et, Vt),
          Ht = mt[yt],
          Xt = mt.constructor.COLLECTION_KIND;
        let Qt;
        (dt & qt.ADD) === qt.ADD ? Xt === AV ? (Qt = be.string(et, Vt), mt.setIndex(jt, Qt)) : Qt = jt : Qt = mt.getIndex(jt);
        const Et = mt[lt](jt),
          ft = xV(tt, dt, Ot, jt, Et, Ht, et, Vt, Dt);
        if (null !== tt.resyncVisited && oV(tt, Ot, dt, Qt, Et, ft, Dt), null !== ft && void 0 !== ft) switch (Xt) {
          case AV:
            mt.$items.set(Qt, ft);
            break;
          case iV:
            mt.$setAt(jt, ft, null !== tt.resyncVisited && dt === qt.ADD ? qt.REPLACE : dt);
            break;
          case YV:
          case BV:
          case pV:
            mt.$items.has(jt) || (mt.$items.set(jt, ft), "number" === typeof mt.$refId && jt >= mt.$refId && (mt.$refId = jt + 1));
            break;
          default:
            console.warn(`@colyseus/schema: missing COLLECTION_KIND on ${mt.constructor?.name} \u2014 item at index ${jt} was not stored.`)
        }
        Et !== ft && Dt?.push({
          ref: Ot,
          refId: tt.currentRefId,
          op: dt,
          dynamicIndex: Qt,
          value: ft,
          previousValue: Et
        })
      },
      sV = function(tt, et, Vt, Ot, Dt) {
        const mt = Ot[Nt] ?? Ot;
        let dt, jt = et[Vt.offset++];
        if (jt === qt.CLEAR) return tt.removeChildRefs(mt, Dt), void mt.clear();
        if (jt === qt.REVERSE) return void mt.items.reverse();
        if (jt === qt.DELETE_BY_REFID) {
          const jt = be.number(et, Vt),
            Ht = tt.root.refs.get(jt);
          if (void 0 === Ht) return;
          if (tt.root.removeRef(jt), dt = mt.findIndex((tt => tt === Ht)), -1 === dt) return;
          return mt[Et](dt), void Dt?.push({
            ref: Ot,
            refId: tt.currentRefId,
            op: qt.DELETE,
            dynamicIndex: dt,
            value: void 0,
            previousValue: Ht
          })
        }
        if (jt === qt.ADD_BY_REFID) {
          const Ot = be.number(et, Vt),
            qt = tt.root.refs.get(Ot);
          qt && (dt = mt.findIndex((tt => tt === qt))), -1 !== dt && void 0 !== dt || (dt = mt.length)
        } else dt = be.number(et, Vt);
        const Ht = mt[yt];
        let Xt = dt;
        const Qt = mt.items[dt],
          lt = xV(tt, jt, Ot, dt, Qt, Ht, et, Vt, Dt);
        null !== tt.resyncVisited && oV(tt, Ot, jt, dt, Qt, lt, Dt), null !== lt && void 0 !== lt && lt !== Qt && mt.$setAt(dt, lt, null !== tt.resyncVisited && jt === qt.ADD ? qt.REPLACE : jt), Qt !== lt && Dt?.push({
          ref: Ot,
          refId: tt.currentRefId,
          op: jt,
          dynamicIndex: Xt,
          value: lt,
          previousValue: Qt
        })
      };
    class nV extends Error {}

    function tO(tt, et, Vt, Ot) {
      if (!(tt instanceof et)) throw new nV(`a '${et.name}' was expected, but '${tt&&tt.constructor.name}' was provided in ${Vt.constructor.name}#${Ot}`)
    }
    const eO = (tt, et) => {
        const Vt = tt.toString(),
          Ot = et.toString();
        return Vt < Ot ? -1 : Vt > Ot ? 1 : 0
      },
      VO = {
        get: (tt, et) => "symbol" === typeof et || isNaN(et) ? Reflect.get(tt, et) : tt.items[et],
        set: (tt, et, Vt) => {
          if ("symbol" !== typeof et && !isNaN(et)) {
            if (void 0 === Vt || null === Vt) tt.$deleteAt(et);
            else {
              let Ot;
              if (Vt[wt]) {
                tO(Vt, tt[yt], tt, et);
                const Dt = tt.items[et];
                tt.isMovingItems ? (Ot = tt.$wireIndex(Number(et)), void 0 !== Dt ? Vt[wt].isNew ? tt[wt].indexedOperation(Ot, qt.MOVE_AND_ADD) : (tt[wt].getChange(Ot) & qt.DELETE) === qt.DELETE ? tt[wt].indexedOperation(Ot, qt.DELETE_AND_MOVE) : tt[wt].indexedOperation(Ot, qt.MOVE) : Vt[wt].isNew && tt[wt].indexedOperation(Ot, qt.ADD), Vt[wt].setParent(tt, tt[wt].root, Ot)) : Ot = tt.$changeAt(Number(et), Vt), void 0 !== Dt && Dt[wt].root?.remove(Dt[wt])
              } else Ot = tt.$changeAt(Number(et), Vt);
              tt.items[et] = Vt, void 0 !== Ot && (tt.tmpItems[Ot] = Vt)
            }
            return !0
          }
          return Reflect.set(tt, et, Vt)
        },
        deleteProperty: (tt, et) => ("number" === typeof et ? tt.$deleteAt(et) : delete tt[et], !0),
        has: (tt, et) => "symbol" === typeof et || isNaN(Number(et)) ? Reflect.has(tt, et) : Reflect.has(tt.items, et)
      };
    class OO {
      [wt];
      [dt];
      [Nt];
      [yt];
      items = [];
      tmpItems = [];
      deletedIndexes = [];
      isMovingItems = !1;
      _needsCompaction = !1;
      static[Ht] = zV;
      static[Xt] = sV;
      static COLLECTION_KIND = iV;
      static[Qt](tt, et, Vt) {
        if (!Vt) return !0;
        const Ot = tt[Nt] ?? tt;
        return "string" === typeof Ot[yt] || Vt.isChangeTreeVisible(Ot.tmpItems[et]?.[wt])
      }
      static is(tt) {
        return Array.isArray(tt) || void 0 !== tt.array
      }
      static from(tt) {
        return new OO(...Array.from(tt))
      }
      constructor() {
        this[yt] = void 0, this[Nt] = this;
        const tt = new Proxy(this, VO);
        return Object.defineProperty(this, wt, {
          value: new RV(tt, this),
          enumerable: !1,
          writable: !0
        }), arguments.length > 0 && this.push(...arguments), tt
      }
      static initializeForDecoder() {
        const tt = Object.create(OO.prototype);
        tt.items = [], tt.isMovingItems = !1, tt._needsCompaction = !1, tt[yt] = void 0, tt[Nt] = tt;
        const et = new Proxy(tt, VO);
        return PV(tt, et), et
      }
      set length(tt) {
        0 === tt ? this.clear() : tt < this.items.length ? this.splice(tt, this.length - tt) : console.warn("ArraySchema: can't set .length to a higher value than its length.")
      }
      get length() {
        return this.items.length
      }
      pauseTracking() {
        this[wt].pause()
      }
      resumeTracking() {
        this[wt].resume()
      }
      untracked(tt) {
        return this[wt].untracked(tt)
      }
      get isTrackingPaused() {
        return this[wt].paused
      }
      push() {
        const tt = this[Nt],
          et = tt.items,
          Vt = tt.tmpItems,
          Ot = tt[wt],
          Dt = tt[yt];
        let mt = Vt.length;
        for (let dt = 0, jt = arguments.length; dt < jt; dt++, mt++) {
          const jt = dt < 0 || arguments.length <= dt ? void 0 : arguments[dt];
          if (void 0 === jt || null === jt) return;
          "object" === typeof jt && Dt && tO(jt, Dt, tt, dt), Ot.indexedOperation(mt, qt.ADD), et.push(jt), Vt.push(jt), jt[wt]?.setParent(this, Ot.root, mt)
        }
        return mt
      }
      pop() {
        const tt = this[Nt],
          et = tt.tmpItems,
          Vt = tt.deletedIndexes;
        let Ot = -1;
        for (let Dt = et.length - 1; Dt >= 0; Dt--)
          if (!0 !== Vt[Dt]) {
            Ot = Dt;
            break
          } if (Ot < 0) return;
        const qt = tt.$isUnsentAdd(Ot);
        return tt[wt].delete(Ot), qt ? tt.$cancelAdd(Ot) : Vt[Ot] = !0, tt.items.pop()
      }
      at(tt) {
        return tt < 0 && (tt += this.length), this.items[tt]
      }
      $wireIndex(tt) {
        const et = this.deletedIndexes;
        if (0 === et.length) return tt;
        const Vt = this.tmpItems;
        let Ot = 0;
        for (let qt = 0; qt < Vt.length; qt++)
          if (!0 !== et[qt]) {
            if (Ot === tt) return qt;
            Ot++
          } return Vt.length + (tt - Ot)
      }
      $isUnsentAdd(tt) {
        const et = this[wt];
        return 0 === (576 & et.flags) && !et.paused && "string" !== typeof this[yt] && et.operationAt(tt) === qt.ADD
      }
      $cancelAdd(tt) {
        let et = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        const Vt = this[wt],
          Ot = this.tmpItems[tt];
        this.tmpItems.splice(tt, 1), this.deletedIndexes.length > 0 && this.deletedIndexes.splice(tt, 1), Vt.removeAt(tt, 1);
        const qt = Ot?.[wt];
        void 0 !== qt && void 0 === qt.root && qt.removeParent(this), et && this.$reindexChildren(tt)
      }
      $reindexChildren(tt, et) {
        if (!this[wt].hasFilteredFields) return;
        if ("string" === typeof this[yt]) return;
        const Vt = this.tmpItems,
          Ot = Vt.length;
        if (void 0 !== et)
          for (; tt < Ot && Vt[tt] === et[tt];) tt++;
        for (let qt = tt; qt < Ot; qt++) Vt[qt]?.[wt]?.setParentIndex(this, qt)
      }
      $changeAt(tt, et) {
        if (void 0 === et || null === et) return void console.error("ArraySchema items cannot be null nor undefined; Use `splice(index, 1)` instead.");
        if (this.items[tt] === et) return;
        const Vt = void 0 !== this.items[tt] ? "object" === typeof et ? qt.DELETE_AND_ADD : qt.REPLACE : qt.ADD,
          Ot = this.$wireIndex(tt),
          Dt = this[wt];
        return Dt.change(Ot, Vt), et[wt]?.setParent(this, Dt.root, Ot), Ot
      }
      $deleteAt(tt, et) {
        this[wt].delete(this.$wireIndex(tt), et)
      }
      $setAt(tt, et, Vt) {
        Vt === qt.ADD && void 0 !== this.items[tt] ? this.items.splice(tt, 0, et) : Vt === qt.DELETE_AND_MOVE ? (this.items.splice(tt, 1), this.items[tt] = et) : (tt > this.items.length && (this._needsCompaction = !0), this.items[tt] = et)
      }
      clear() {
        const tt = this[Nt];
        if (0 === tt.items.length) return;
        const et = tt[wt];
        et.forEachChild(((tt, Vt) => {
          et.root?.remove(tt)
        })), et.discard(), et.operation(qt.CLEAR), tt.items.length = 0, tt.tmpItems.length = 0
      } [bt]() {
        const tt = this[Nt] ?? this,
          et = tt[wt];
        if (et.isStreamCollection) throw new Error("@colyseus/schema: cannot reset a streamed ArraySchema (pooling not supported).");
        const Vt = tt.items;
        for (let Ot = 0; Ot < Vt.length; Ot++) Vt[Ot]?.[bt]?.();
        tt.items.length = 0, tt.tmpItems.length = 0, tt.deletedIndexes.length = 0, et.recycle(), tt[dt] = void 0
      }
      concat() {
        return new OO(...this.items.concat(...arguments))
      }
      join(tt) {
        return this.items.join(tt)
      }
      reverse() {
        const tt = this[Nt],
          et = tt[wt];
        if (et.has() || tt.deletedIndexes.length > 0) {
          const et = tt.items.slice().reverse();
          return this.clear(), this.push(...et), this
        }
        return et.operation(qt.REVERSE), tt.items.reverse(), tt.tmpItems.reverse(), tt.$reindexChildren(0), this
      }
      shift() {
        const tt = this[Nt],
          et = tt.items;
        if (0 === et.length) return;
        const Vt = tt[wt],
          Ot = tt.deletedIndexes;
        let Dt = 0;
        for (; !0 === Ot[Dt];) Dt++;
        const mt = tt.$isUnsentAdd(Dt);
        return Vt.delete(Dt, qt.DELETE), mt ? tt.$cancelAdd(Dt) : Ot[Dt] = !0, et.shift()
      }
      slice(tt, et) {
        const Vt = new OO;
        return Vt.push(...this.items.slice(tt, et)), Vt
      }
      sort() {
        let tt = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eO;
        const et = this[Nt];
        et.isMovingItems = !0;
        const Vt = et[wt];
        return et.items.sort(tt).forEach(((tt, et) => Vt.change(et, qt.REPLACE))), et.tmpItems.sort(tt), et.$reindexChildren(0), et.isMovingItems = !1, this
      }
      splice(tt, et) {
        const Vt = this[Nt],
          Ot = Vt[wt],
          Dt = Vt.items,
          mt = Vt.tmpItems,
          dt = Vt.deletedIndexes,
          jt = Dt.length,
          Ht = mt.length;
        for (var Xt = arguments.length, Qt = new Array(Xt > 2 ? Xt - 2 : 0), lt = 2; lt < Xt; lt++) Qt[lt - 2] = arguments[lt];
        const Et = Qt.length,
          ft = [];
        for (let qt = 0; qt < Ht; qt++) !0 !== dt[qt] && ft.push(qt);
        let yt;
        if (jt > tt) {
          void 0 === et && (et = jt - tt);
          for (let Dt = tt; Dt < tt + et; Dt++) {
            const tt = ft[Dt],
              et = Vt.$isUnsentAdd(tt);
            Ot.delete(tt, qt.DELETE), et ? (yt ??= []).push(tt) : dt[tt] = !0
          }
        } else et = 0;
        if (Et > 0) {
          const Dt = ft[tt] ?? jt,
            Ht = Math.min(Et, et);
          for (let tt = 0; tt < Ht; tt++) {
            const et = Dt + tt;
            let Vt;
            const jt = void 0 !== yt ? yt.indexOf(et) : -1; - 1 !== jt ? (yt.splice(jt, 1), Vt = qt.ADD) : Vt = dt[et] ? qt.DELETE_AND_ADD : qt.ADD, Ot.indexedOperation(et, Vt), mt[et] = Qt[tt], dt[et] = !1, Qt[tt][wt]?.setParent(this, Ot.root, et)
          }
          const Xt = Et - Ht;
          if (Xt > 0) {
            const tt = Dt + Ht;
            Ot.insertAt(tt, Xt);
            for (let et = 0; et < Xt; et++) Qt[Ht + et][wt]?.setParent(this, Ot.root, tt + et);
            dt.length > 0 && dt.splice(tt, 0, ...new Array(Xt).fill(!1)), mt.splice(tt, 0, ...Qt.slice(Ht)), Vt.$reindexChildren(tt + Xt)
          }
        }
        if (void 0 !== yt && yt.length > 0) {
          for (let tt = yt.length - 1; tt >= 0; tt--) Vt.$cancelAdd(yt[tt], !1);
          Vt.$reindexChildren(yt[0])
        }
        return Ot.root?.enqueueChangeTree(Ot), Dt.splice(tt, et, ...Qt)
      }
      unshift() {
        const tt = this[Nt],
          et = tt[wt];
        et.unshift(arguments.length);
        for (let Ot = 0; Ot < arguments.length; Ot++)(Ot < 0 || arguments.length <= Ot ? void 0 : arguments[Ot])?.[wt]?.setParent(this, et.root, Ot);
        const Vt = tt.deletedIndexes;
        return Vt.length > 0 && Vt.unshift(...new Array(arguments.length).fill(!1)), tt.tmpItems.unshift(...arguments), tt.$reindexChildren(arguments.length), tt.items.unshift(...arguments)
      }
      indexOf(tt, et) {
        return this.items.indexOf(tt, et)
      }
      lastIndexOf(tt) {
        let et = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.length - 1;
        return this.items.lastIndexOf(tt, et)
      }
      every(tt, et) {
        return this.items.every(tt, et)
      }
      some(tt, et) {
        return this.items.some(tt, et)
      }
      forEach(tt, et) {
        return this.items.forEach(tt, et)
      }
      map(tt, et) {
        return this.items.map(tt, et)
      }
      filter(tt, et) {
        return this.items.filter(tt, et)
      }
      reduce(tt, et) {
        return this.items.reduce.apply(this.items, arguments)
      }
      reduceRight(tt, et) {
        return this.items.reduceRight.apply(this.items, arguments)
      }
      find(tt, et) {
        return this.items.find(tt, et)
      }
      findIndex(tt, et) {
        return this.items.findIndex(tt, et)
      }
      fill(tt, et, Vt) {
        throw new Error("ArraySchema#fill() not implemented")
      }
      copyWithin(tt, et, Vt) {
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
        return OO
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
      includes(tt, et) {
        return this.items.includes(tt, et)
      }
      flatMap(tt, et) {
        throw new Error("ArraySchema#flatMap() is not supported.")
      }
      flat(tt) {
        throw new Error("ArraySchema#flat() is not supported.")
      }
      findLast() {
        return this.items.findLast.apply(this.items, arguments)
      }
      findLastIndex() {
        for (var tt = arguments.length, et = new Array(tt), Vt = 0; Vt < tt; Vt++) et[Vt] = arguments[Vt];
        return this.items.findLastIndex.apply(this.items, arguments)
      }
      with(tt, et) {
        const Vt = this.items.slice();
        return tt < 0 && (tt += this.length), Vt[tt] = et, new OO(...Vt)
      }
      toReversed() {
        return this.items.slice().reverse()
      }
      toSorted(tt) {
        return this.items.slice().sort(tt)
      }
      toSpliced(tt, et) {
        for (var Vt = arguments.length, Ot = new Array(Vt > 2 ? Vt - 2 : 0), qt = 2; qt < Vt; qt++) Ot[qt - 2] = arguments[qt];
        const Dt = this.items.slice();
        return Dt.splice.apply(Dt, arguments), Dt
      }
      shuffle() {
        return this.move((tt => {
          let et = this.items.length;
          for (; 0 != et;) {
            let tt = Math.floor(Math.random() * et);
            et--, [this[et], this[tt]] = [this[tt], this[et]]
          }
        }))
      }
      move(tt) {
        return this.isMovingItems = !0, tt(this), this.isMovingItems = !1, this
      } [lt](tt) {
        let et = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        const Vt = this[Nt] ?? this;
        return et || Vt.deletedIndexes[tt] ? Vt.items[tt] : Vt.tmpItems[tt] || Vt.items[tt]
      } [Et](tt) {
        const et = this[Nt] ?? this;
        et.items[tt] = void 0, et._needsCompaction = !0
      } [Mt]() {
        const tt = this.tmpItems;
        this.tmpItems = this.items.slice(), this.deletedIndexes.length > 0 && (this.$reindexChildren(0, tt), this.deletedIndexes.length = 0)
      } [Jt]() {
        const tt = this[Nt] ?? this;
        tt._needsCompaction && (tt._needsCompaction = !1, tt.items = tt.items.filter((tt => void 0 !== tt)))
      } [ft](tt, et, Vt) {
        const Ot = this[Nt] ?? this,
          qt = Ot.items;
        let Dt = !1;
        for (let mt = 0; mt < qt.length; mt++) {
          const dt = qt[mt];
          tt.has(mt) ? Vt(dt) : (Dt = !0, et(dt, mt), Ot[Et](mt))
        }
        Dt && Ot[Jt]()
      }
      toArray() {
        return this.items.slice(0)
      }
      toJSON() {
        return this.toArray().map((tt => "function" === typeof tt.toJSON ? tt.toJSON() : tt))
      }
      clone(tt) {
        let et;
        return tt ? (et = new OO, et.push(...this.items)) : et = new OO(...this.map((tt => tt[wt] ? tt.clone() : tt))), et
      }
    }
    ue("array", {
      constructor: OO
    });
    class qO {
      keyByIndex = new Map;
      indexByKey = Object.create(null);
      nextIndex = 0;
      snapshots;
      indexOf(tt) {
        const et = this.indexByKey[tt];
        return void 0 === et ? void 0 : et
      }
      assign(tt) {
        const et = this.nextIndex++;
        return this.indexByKey[tt] = et, this.keyByIndex.set(et, tt), et
      }
      snapshot(tt, et) {
        (this.snapshots ??= new Map).set(tt, et)
      }
      forgetSnapshot(tt) {
        this.snapshots?.delete(tt)
      }
      snapshotAt(tt) {
        return this.snapshots?.get(tt)
      }
      setIndex(tt, et) {
        this.keyByIndex.set(tt, et), this.indexByKey[et] = tt
      }
      keyOf(tt) {
        return this.keyByIndex.get(tt)
      }
      cleanupAfterEncode() {
        if (void 0 !== this.snapshots) {
          for (const [tt] of this.snapshots) {
            const et = this.keyByIndex.get(tt);
            void 0 !== et && (delete this.indexByKey[et], this.keyByIndex.delete(tt))
          }
          this.snapshots.clear()
        }
      }
      reset() {
        this.indexByKey = Object.create(null), this.keyByIndex.clear(), this.snapshots?.clear(), this.nextIndex = 0
      }
    }
    class DO {
      [wt];
      [dt];
      childType;
      [yt];
      $items = new Map;
      journal = new qO;
      _stream;
      get maxPerTick() {
        return this._stream?.maxPerTick ?? 32
      }
      set maxPerTick(tt) {
        (this._stream ??= ve()).maxPerTick = tt
      }
      get priority() {
        return this._stream?.priority
      }
      set priority(tt) {
        (this._stream ??= ve()).priority = tt
      }
      get $indexes() {
        return this.journal.keyByIndex
      }
      get _collectionIndexes() {
        return this.journal.indexByKey
      }
      static[Ht] = FV;
      static[Xt] = gV;
      static COLLECTION_KIND = AV;
      static[Qt](tt, et, Vt) {
        if (!Vt || "string" === typeof tt[yt]) return !0;
        const Ot = tt[lt](et) ?? tt.journal.snapshotAt(et);
        return Vt.isChangeTreeVisible(Ot[wt])
      }
      static is(tt) {
        return void 0 !== tt.map
      }
      constructor(tt) {
        if (Object.defineProperty(this, wt, {
            value: new RV(this),
            enumerable: !1,
            writable: !0
          }), this[yt] = void 0, tt)
          if (tt instanceof Map || tt instanceof DO) tt.forEach(((tt, et) => this.set(et, tt)));
          else
            for (const et in tt) this.set(et, tt[et])
      }
      static initializeForDecoder() {
        const tt = Object.create(DO.prototype);
        return tt.$items = new Map, tt.journal = new qO, tt[yt] = void 0, PV(tt), tt
      } [Symbol.iterator]() {
        return this.$items[Symbol.iterator]()
      }
      get[Symbol.toStringTag]() {
        return this.$items[Symbol.toStringTag]
      }
      static get[Symbol.species]() {
        return DO
      }
      set(tt, et) {
        if (void 0 === et || null === et) throw new Error(`MapSchema#set('${tt}', ${et}): trying to set ${et} value on '${tt}'.`);
        "object" === typeof et && this[yt] && tO(et, this[yt], this, tt), tt = tt.toString();
        const Vt = this[wt],
          Ot = void 0 !== et[wt],
          Dt = this.journal;
        let mt, dt = Dt.indexOf(tt);
        if (void 0 !== dt) {
          mt = qt.REPLACE;
          const Vt = this.$items.get(tt);
          if (Vt === et) return;
          Ot && (mt = qt.DELETE_AND_ADD, void 0 !== Vt && Vt[wt].root?.remove(Vt[wt])), void 0 !== Dt.snapshotAt(dt) && Dt.forgetSnapshot(dt)
        } else dt = Dt.assign(tt), mt = qt.ADD;
        return this.$items.set(tt, et), mt === qt.ADD && Vt.isStreamCollection ? void 0 !== Vt.root && Se(this, Vt.root, dt) : Vt.change(dt, mt), Ot && et[wt].setParent(this, Vt.root, dt), this
      }
      get(tt) {
        return this.$items.get(tt)
      }
      getOrInsert(tt, et) {
        return this.$items.has(tt) ? this.$items.get(tt) : (this.set(tt, et), et)
      }
      getOrInsertComputed(tt, et) {
        if (this.$items.has(tt)) return this.$items.get(tt);
        const Vt = et(tt);
        return this.set(tt, Vt), Vt
      }
      delete(tt) {
        if (!this.$items.has(tt)) return !1;
        const et = this.journal.indexOf(tt),
          Vt = this.$items.get(tt),
          Ot = this[wt];
        if (Ot.isStreamCollection) {
          const qt = Ot.root;
          let Dt = !1;
          return void 0 !== qt && (Dt = ce(this, qt, this[dt], et)), void 0 !== Vt?.[wt] && qt?.remove(Vt[wt]), this.$items.delete(tt), Dt || this.journal.snapshot(et, Vt), !0
        }
        return this.journal.snapshot(et, Vt), Ot.delete(et), this.$items.delete(tt)
      }
      clear() {
        const tt = this[wt];
        tt.discard(), tt.forEachChild(((et, Vt) => {
          tt.root?.remove(et)
        })), this.journal.reset(), this.$items.clear(), tt.operation(qt.CLEAR)
      } [bt]() {
        const tt = this[wt];
        if (tt.isStreamCollection) throw new Error("@colyseus/schema: cannot reset a streamed MapSchema (pooling not supported).");
        this.$items.forEach((tt => tt?.[bt]?.())), this.$items.clear(), this.journal.reset(), tt.recycle(), this[dt] = void 0
      }
      has(tt) {
        return this.$items.has(tt)
      }
      forEach(tt) {
        this.$items.forEach(tt)
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
        this[wt].pause()
      }
      resumeTracking() {
        this[wt].resume()
      }
      untracked(tt) {
        return this[wt].untracked(tt)
      }
      get isTrackingPaused() {
        return this[wt].paused
      }
      setIndex(tt, et) {
        this.journal.setIndex(tt, et)
      }
      getIndex(tt) {
        return this.journal.keyOf(tt)
      } [lt](tt) {
        const et = this.journal.keyOf(tt);
        return void 0 !== et ? this.$items.get(et) : void 0
      } [Et](tt) {
        const et = this.journal.keyOf(tt);
        void 0 !== et && (this.$items.delete(et), this.journal.keyByIndex.delete(tt))
      } [ft](tt, et, Vt) {
        let Ot = null;
        if (this.$items.forEach(((qt, Dt) => {
            tt.has(Dt) ? Vt(qt) : ((Ot ??= new Set).add(Dt), et(qt, Dt))
          })), null !== Ot) {
          Ot.forEach((tt => {
            this.$items.delete(tt), delete this.journal.indexByKey[tt]
          }));
          const tt = [];
          this.journal.keyByIndex.forEach(((et, Vt) => {
            Ot.has(et) && tt.push(Vt)
          }));
          for (let et = 0; et < tt.length; et++) this.journal.keyByIndex.delete(tt[et])
        }
      } [Mt]() {
        this.journal.cleanupAfterEncode()
      }
      _dropView(tt) {
        Ze(this, tt)
      }
      _unregister() {}
      toJSON() {
        return Object.fromEntries(Array.from(this, (tt => {
          let [et, Vt] = tt;
          return [et, "function" === typeof Vt.toJSON ? Vt.toJSON() : Vt]
        })))
      }
      clone(tt) {
        let et;
        return tt ? et = Object.assign(new DO, this) : (et = new DO, this.forEach(((tt, Vt) => {
          tt[wt] ? et.set(Vt, tt.clone()) : et.set(Vt, tt)
        }))), et
      }
    }
    ue("map", {
      constructor: DO
    });
    class mO {
      [wt];
      [dt];
      [yt];
      $items = new Map;
      deletedItems = {};
      $refId = 0;
      _stream;
      get maxPerTick() {
        return this._stream?.maxPerTick ?? 32
      }
      set maxPerTick(tt) {
        (this._stream ??= ve()).maxPerTick = tt
      }
      get priority() {
        return this._stream?.priority
      }
      set priority(tt) {
        (this._stream ??= ve()).priority = tt
      }
      static[Ht] = kV;
      static[Xt] = gV;
      static COLLECTION_KIND = BV;
      static[Qt](tt, et, Vt) {
        return !Vt || "string" === typeof tt[yt] || Vt.isChangeTreeVisible((tt[lt](et) ?? tt.deletedItems[et])[wt])
      }
      static is(tt) {
        return void 0 !== tt.collection
      }
      constructor(tt) {
        Object.defineProperty(this, wt, {
          value: new RV(this),
          enumerable: !1,
          writable: !0
        }), this[yt] = void 0, tt && tt.forEach((tt => this.add(tt)))
      }
      static initializeForDecoder() {
        const tt = Object.create(mO.prototype);
        return tt.$items = new Map, tt.deletedItems = {}, tt.$refId = 0, tt[yt] = void 0, PV(tt), tt
      }
      add(tt) {
        const et = this.$refId++,
          Vt = this[wt];
        return this.$items.set(et, tt), Vt.isStreamCollection ? void 0 !== Vt.root && Se(this, Vt.root, et) : Vt.change(et), void 0 !== tt[wt] && tt[wt].setParent(this, Vt.root, et), et
      }
      at(tt) {
        const et = Array.from(this.$items.keys())[tt];
        return this.$items.get(et)
      }
      entries() {
        return this.$items.entries()
      }
      delete(tt) {
        const et = this.$items.entries();
        let Vt, Ot;
        for (;
          (Ot = et.next()) && !Ot.done;)
          if (tt === Ot.value[1]) {
            Vt = Ot.value[0];
            break
          } if (void 0 === Vt) return !1;
        const qt = this[wt];
        if (qt.isStreamCollection) {
          const tt = qt.root,
            et = this.$items.get(Vt);
          return void 0 !== tt && ce(this, tt, this[dt], Vt), void 0 !== et?.[wt] && tt?.remove(et[wt]), this.deletedItems[Vt] = et, this.$items.delete(Vt)
        }
        return this.deletedItems[Vt] = qt.delete(Vt), this.$items.delete(Vt)
      }
      clear() {
        const tt = this[wt];
        tt.discard(), tt.forEachChild(((et, Vt) => {
          tt.root?.remove(et)
        })), this.$items.clear(), tt.operation(qt.CLEAR)
      } [bt]() {
        const tt = this[wt];
        if (tt.isStreamCollection) throw new Error("@colyseus/schema: cannot reset a streamed CollectionSchema (pooling not supported).");
        this.$items.forEach((tt => tt?.[bt]?.())), this.$items.clear(), this.deletedItems = {}, this.$refId = 0, tt.recycle(), this[dt] = void 0
      }
      has(tt) {
        return Array.from(this.$items.values()).some((et => et === tt))
      }
      forEach(tt) {
        this.$items.forEach(((et, Vt, Ot) => tt(et, Vt, this)))
      }
      values() {
        return this.$items.values()
      }
      get size() {
        return this.$items.size
      }
      pauseTracking() {
        this[wt].pause()
      }
      resumeTracking() {
        this[wt].resume()
      }
      untracked(tt) {
        return this[wt].untracked(tt)
      }
      get isTrackingPaused() {
        return this[wt].paused
      } [Symbol.iterator]() {
        return this.$items.values()
      }
      setIndex(tt, et) {}
      getIndex(tt) {
        return tt
      } [lt](tt) {
        return this.$items.get(tt)
      } [Et](tt) {
        this.$items.delete(tt)
      } [ft](tt, et, Vt) {
        let Ot = null;
        if (this.$items.forEach(((qt, Dt) => {
            tt.has(Dt) ? Vt(qt) : ((Ot ??= []).push(Dt), et(qt, Dt))
          })), null !== Ot)
          for (let qt = 0; qt < Ot.length; qt++) this[Et](Ot[qt])
      } [Mt]() {
        for (const tt in this.deletedItems) delete this.deletedItems[tt]
      }
      _dropView(tt) {
        Ze(this, tt)
      }
      _unregister() {}
      toArray() {
        return Array.from(this.$items.values())
      }
      toJSON() {
        const tt = [];
        return this.forEach(((et, Vt) => {
          tt.push("function" === typeof et.toJSON ? et.toJSON() : et)
        })), tt
      }
      clone(tt) {
        let et;
        return tt ? et = Object.assign(new mO, this) : (et = new mO, this.forEach((tt => {
          tt[wt] ? et.add(tt.clone()) : et.add(tt)
        }))), et
      }
    }
    ue("collection", {
      constructor: mO
    });
    class dO {
      [wt];
      [dt];
      [yt];
      $items = new Map;
      deletedItems = {};
      $refId = 0;
      _stream;
      get maxPerTick() {
        return this._stream?.maxPerTick ?? 32
      }
      set maxPerTick(tt) {
        (this._stream ??= ve()).maxPerTick = tt
      }
      get priority() {
        return this._stream?.priority
      }
      set priority(tt) {
        (this._stream ??= ve()).priority = tt
      }
      static[Ht] = kV;
      static[Xt] = gV;
      static COLLECTION_KIND = YV;
      static[Qt](tt, et, Vt) {
        return !Vt || "string" === typeof tt[yt] || Vt.isVisible((tt[lt](et) ?? tt.deletedItems[et])[wt])
      }
      static is(tt) {
        return void 0 !== tt.set
      }
      constructor(tt) {
        Object.defineProperty(this, wt, {
          value: new RV(this),
          enumerable: !1,
          writable: !0
        }), this[yt] = void 0, tt && tt.forEach((tt => this.add(tt)))
      }
      static initializeForDecoder() {
        const tt = Object.create(dO.prototype);
        return tt.$items = new Map, tt.deletedItems = {}, tt.$refId = 0, tt[yt] = void 0, PV(tt), tt
      }
      add(tt) {
        if (this.has(tt)) return !1;
        const et = this.$refId++,
          Vt = this[wt];
        return this.$items.set(et, tt), Vt.isStreamCollection ? void 0 !== Vt.root && Se(this, Vt.root, et) : Vt.change(et, qt.ADD), void 0 !== tt[wt] && tt[wt].setParent(this, Vt.root, et), et
      }
      entries() {
        return this.$items.entries()
      }
      delete(tt) {
        const et = this.$items.entries();
        let Vt, Ot;
        for (;
          (Ot = et.next()) && !Ot.done;)
          if (tt === Ot.value[1]) {
            Vt = Ot.value[0];
            break
          } if (void 0 === Vt) return !1;
        const qt = this[wt];
        if (qt.isStreamCollection) {
          const tt = qt.root,
            et = this.$items.get(Vt);
          return void 0 !== tt && ce(this, tt, this[dt], Vt), void 0 !== et?.[wt] && tt?.remove(et[wt]), this.deletedItems[Vt] = et, this.$items.delete(Vt)
        }
        return this.deletedItems[Vt] = qt.delete(Vt), this.$items.delete(Vt)
      }
      clear() {
        const tt = this[wt];
        tt.discard(), this.$items.clear(), tt.operation(qt.CLEAR)
      } [bt]() {
        const tt = this[wt];
        if (tt.isStreamCollection) throw new Error("@colyseus/schema: cannot reset a streamed SetSchema (pooling not supported).");
        this.$items.forEach((tt => tt?.[bt]?.())), this.$items.clear(), this.deletedItems = {}, this.$refId = 0, tt.recycle(), this[dt] = void 0
      }
      has(tt) {
        const et = this.$items.values();
        let Vt, Ot = !1;
        for (;
          (Vt = et.next()) && !Vt.done;)
          if (tt === Vt.value) {
            Ot = !0;
            break
          } return Ot
      }
      forEach(tt) {
        this.$items.forEach(((et, Vt, Ot) => tt(et, Vt, this)))
      }
      values() {
        return this.$items.values()
      }
      get size() {
        return this.$items.size
      }
      pauseTracking() {
        this[wt].pause()
      }
      resumeTracking() {
        this[wt].resume()
      }
      untracked(tt) {
        return this[wt].untracked(tt)
      }
      get isTrackingPaused() {
        return this[wt].paused
      } [Symbol.iterator]() {
        return this.$items.values()
      }
      setIndex(tt, et) {}
      getIndex(tt) {
        return tt
      } [lt](tt) {
        return this.$items.get(tt)
      } [Et](tt) {
        this.$items.delete(tt)
      } [ft](tt, et, Vt) {
        let Ot = null;
        if (this.$items.forEach(((qt, Dt) => {
            tt.has(Dt) ? Vt(qt) : ((Ot ??= []).push(Dt), et(qt, Dt))
          })), null !== Ot)
          for (let qt = 0; qt < Ot.length; qt++) this[Et](Ot[qt])
      } [Mt]() {
        for (const tt in this.deletedItems) delete this.deletedItems[tt]
      }
      _dropView(tt) {
        Ze(this, tt)
      }
      _unregister() {}
      toArray() {
        return Array.from(this.$items.values())
      }
      toJSON() {
        const tt = [];
        return this.forEach(((et, Vt) => {
          tt.push("function" === typeof et.toJSON ? et.toJSON() : et)
        })), tt
      }
      clone(tt) {
        let et;
        return tt ? et = Object.assign(new dO, this) : (et = new dO, this.forEach((tt => {
          tt[wt] ? et.add(tt.clone()) : et.add(tt)
        }))), et
      }
    }
    ue("set", {
      constructor: dO
    });
    class jO {
      [wt];
      [dt];
      [yt];
      $items = new Map;
      $nextPosition = 0;
      _itemIndex = new Map;
      _stream;
      get maxPerTick() {
        return this._stream?.maxPerTick ?? 32
      }
      set maxPerTick(tt) {
        (this._stream ??= ve()).maxPerTick = tt
      }
      get priority() {
        return this._stream?.priority
      }
      set priority(tt) {
        (this._stream ??= ve()).priority = tt
      }
      static $isStream = !0;
      static[Ht] = kV;
      static[Xt] = gV;
      static COLLECTION_KIND = pV;
      static[Qt](tt, et, Vt) {
        if (!Vt) return !0;
        const Ot = tt[lt](et);
        return void 0 !== Ot && Vt.isVisible(Ot[wt])
      }
      static is(tt) {
        return tt && void 0 !== tt.stream
      }
      constructor() {
        Object.defineProperty(this, wt, {
          value: new RV(this),
          enumerable: !1,
          writable: !0
        }), this[yt] = void 0
      }
      static initializeForDecoder() {
        const tt = Object.create(jO.prototype);
        return tt.$items = new Map, tt.$nextPosition = 0, tt._itemIndex = new Map, tt[yt] = void 0, PV(tt), tt
      }
      add(tt) {
        if (this._itemIndex.has(tt)) return -1;
        const et = this.$nextPosition++;
        this.$items.set(et, tt), this._itemIndex.set(tt, et);
        const Vt = this[wt].root;
        return void 0 !== tt[wt] && tt[wt].setParent(this, Vt, et), void 0 !== Vt && Se(this, Vt, et), et
      }
      remove(tt) {
        const et = this._itemIndex.get(tt);
        if (void 0 === et) return !1;
        this._itemIndex.delete(tt), this.$items.delete(et);
        const Vt = this[wt].root;
        return void 0 !== Vt && (ce(this, Vt, this[dt], et), void 0 !== tt[wt] && Vt.remove(tt[wt])), !0
      }
      has(tt) {
        return this._itemIndex.has(tt)
      }
      clear() {
        const tt = this[wt].root;
        if (void 0 !== tt) {
          ! function(tt, et, Vt) {
            const Ot = tt._stream;
            if (void 0 !== Ot) {
              Ot.broadcastPending.clear();
              for (const tt of Ot.sentBroadcast) Ot.broadcastDeletes.add(tt);
              Ot.sentBroadcast.clear(), et.forEachActiveView((tt => {
                Ot.pendingByView.get(tt.id)?.clear();
                const et = Ot.sentByView.get(tt.id);
                if (void 0 !== et && et.size > 0) {
                  let Ot = tt.changes.get(Vt);
                  void 0 === Ot && (Ot = new Map, tt.changes.set(Vt, Ot));
                  for (const tt of et) Ot.set(tt, qt.DELETE);
                  et.clear()
                }
              }))
            }
          }(this, tt, this[dt]);
          for (const et of this.$items.values()) void 0 !== et[wt] && tt.remove(et[wt])
        }
        this.$items.clear(), this._itemIndex.clear()
      }
      forEach(tt) {
        for (const [et, Vt] of this.$items) tt(Vt, et, this)
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
      setIndex(tt, et) {}
      getIndex(tt) {
        return tt
      } [lt](tt) {
        return this.$items.get(tt)
      } [Et](tt) {
        const et = this.$items.get(tt);
        void 0 !== et && (this._itemIndex.delete(et), this.$items.delete(tt))
      } [ft]() {} [Mt]() {}
      toArray() {
        return Array.from(this.$items.values())
      }
      toJSON() {
        const tt = [];
        return this.forEach((et => {
          tt.push("function" === typeof et?.toJSON ? et.toJSON() : et)
        })), tt
      }
      clone(tt) {
        if (tt) {
          return Object.assign(new jO, this)
        }
        const et = new jO;
        return et.maxPerTick = this.maxPerTick, this.forEach((tt => {
          et.add("function" === typeof tt?.clone ? tt.clone() : tt)
        })), et
      }
      _dropView(tt) {
        Ze(this, tt)
      }
      _unregister() {}
    }
    ue("stream", {
      constructor: jO
    });
    class HO {
      [ut] = !0;
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
      constructor(tt) {
        this._type = tt
      }
      default (tt) {
        return this._default = tt, this._hasDefault = !0, this
      }
      view(tt) {
        return this._view = tt ?? -1, this
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
        const tt = this._type;
        if (tt && "object" === typeof tt && void 0 !== tt.array) throw new Error(he);
        return this._stream = !0, this
      }
      priority(tt) {
        return this._streamPriority = tt, this
      }
      deprecated() {
        let tt = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
        return this._deprecated = !0, this._deprecatedThrows = tt, this
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

    function XO(tt) {
      return null != tt && !0 === tt[ut]
    }

    function QO(tt) {
      return () => new HO(tt)
    }

    function lO(tt) {
      if (XO(tt)) {
        const et = tt._type;
        throw new Error(`t.array/map/set/collection(): a t.* builder is not a valid element type \u2014 ${"string"===typeof et?`use the type name instead: t.array("${et}")`:'collections accept a Schema class or a primitive type name ("string", "number", \u2026)'}.`)
      }
      return tt
    }

    function EO(tt) {
      return new HO({
        quantized: Fe(tt)
      })
    }
    const fO = Object.freeze({
        string: QO("string"),
        number: QO("number"),
        boolean: QO("boolean"),
        int8: QO("int8"),
        uint8: QO("uint8"),
        int16: QO("int16"),
        uint16: QO("uint16"),
        int32: QO("int32"),
        uint32: QO("uint32"),
        int64: QO("int64"),
        uint64: QO("uint64"),
        float32: QO("float32"),
        float64: QO("float64"),
        bigint64: QO("bigint64"),
        biguint64: QO("biguint64"),
        ref: tt => new HO(tt),
        array: tt => new HO({
          array: lO(tt)
        }),
        map: tt => new HO({
          map: lO(tt)
        }),
        set: tt => new HO({
          set: lO(tt)
        }),
        collection: tt => new HO({
          collection: lO(tt)
        }),
        stream: tt => {
          const et = new HO({
            stream: lO(tt)
          });
          return et._stream = !0, et
        },
        quantized: EO,
        angle: tt => EO({
          min: 0,
          max: 2 * Math.PI,
          mode: "wrap",
          bits: tt?.bits ?? 16
        })
      }),
      wO = -1;

    function yO(tt) {
      return re.register(tt), tt
    }

    function NO() {
      let tt = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : wO;
      return function(et, Vt) {
        const Ot = xe.initialize(et.constructor);
        xe.setTag(Ot, Vt, tt)
      }
    }

    function aO(tt, et) {
      const Vt = xe.initialize(tt.constructor);
      xe.setUnreliable(Vt, et)
    }

    function MO(tt, et) {
      const Vt = xe.initialize(tt.constructor);
      xe.setPatchOnly(Vt, et)
    }

    function bO(tt, et) {
      const Vt = xe.initialize(tt.constructor);
      xe.setFullStateOnly(Vt, et)
    }

    function JO(tt, et) {
      return function(Vt, Ot) {
        const qt = Vt.constructor;
        if (!tt) throw new Error(`${qt.name}: @type() reference provided for "${Ot}" is undefined. Make sure you don't have any circular dependencies.`);
        tt = Ae(tt, `${qt.name}.${Ot}`), re.register(qt);
        const Dt = Object.getPrototypeOf(qt)[Symbol.metadata],
          mt = xe.initialize(qt);
        let dt = mt[Ot];
        if (void 0 !== mt[dt]) {
          if (mt[dt].deprecated) return;
          if (void 0 !== mt[dt].type) {
            const tt = new Error(`@colyseus/schema: Duplicate '${Ot}' definition on '${qt.name}'.\nCheck @type() annotation`);
            throw new Error(`${tt.message} ${tt.stack.split("\n")[4].trim()}`)
          }
        } else dt = mt[Wt] ?? (Dt && Dt[Wt]) ?? -1, dt++;
        if (et && et.manual) xe.addField(mt, dt, Ot, tt, {
          enumerable: !0,
          configurable: !0,
          writable: !0
        });
        else {
          const {
            complexTypeKlass: et,
            childType: Vt
          } = Ue(tt);
          xe.addField(mt, dt, Ot, tt, uO(Ot, dt, Vt, et))
        }
        mt[Kt][Ot] && Object.defineProperty(Vt, Ot, mt[Kt][Ot]), ("string" === typeof tt || ke(tt)) && (mt[vt] || Object.defineProperty(mt, vt, {
          value: [],
          enumerable: !1,
          configurable: !0,
          writable: !0
        }), mt[vt][dt] = "string" === typeof tt ? Ve[tt] : oe(tt.quantized))
      }
    }
    const CO = {
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

    function uO(tt, et, Vt, Ot) {
      let Dt;
      return Dt = Ot ? function(tt, et, Vt, Ot) {
        const Dt = Ot.constructor === OO,
          mt = Ot.constructor === DO;
        return function(tt) {
          const Ot = this[Ct],
            dt = Ot[et];
          if (tt !== dt) {
            if (void 0 !== tt && null !== tt) {
              if (!Dt || tt instanceof OO)
                if (!mt || tt instanceof DO) tt[yt] = Vt;
                else {
                  const et = new DO;
                  if (et[yt] = Vt, tt instanceof Map) tt.forEach(((tt, Vt) => et.set(Vt, tt)));
                  else
                    for (const Vt in tt) et.set(Vt, tt[Vt]);
                  tt = et
                }
              else {
                const et = new OO;
                et[yt] = Vt, et.push(...tt), tt = et
              }
              const Ot = this[wt],
                Ht = this.constructor;
              void 0 !== dt && null !== dt && dt[wt] ? (Ot.root?.remove(dt[wt]), Ht[jt](Ot, et, qt.DELETE_AND_ADD)) : Ht[jt](Ot, et, qt.ADD), tt[wt]?.setParent(this, Ot.root, et)
            } else void 0 !== dt && null !== dt && this[wt].delete(et);
            Ot[et] = tt
          }
        }
      }(0, et, Vt, Ot) : "string" === typeof Vt ? function(tt, et, Vt) {
        const Ot = CO[Vt],
          Dt = "string" === Vt,
          mt = "boolean" === Vt;
        return function(Vt) {
          const dt = this[Ct],
            Ht = dt[et];
          if (Vt !== Ht) {
            if (void 0 !== Vt && null !== Vt) {
              if (!mt && void 0 !== Ot && typeof Vt !== Ot && (!Dt || null !== Vt)) {
                const et = Vt && Vt.constructor ? ` (${Vt.constructor.name})` : "";
                throw new nV(`a '${Ot}' was expected, but '${JSON.stringify(Vt)}'${et} was provided in ${this.constructor.name}#${tt}`)
              }
              this.constructor[jt](this[wt], et, qt.ADD)
            } else void 0 !== Ht && null !== Ht && this[wt].delete(et);
            dt[et] = Vt
          }
        }
      }(tt, et, Vt) : ke(Vt) ? function(tt, et, Vt) {
        return function(Ot) {
          const Dt = this[Ct],
            mt = Dt[et];
          if (void 0 !== Ot && null !== Ot) {
            if ("number" !== typeof Ot) throw new nV(`a 'number' was expected, but '${JSON.stringify(Ot)}' was provided in ${this.constructor.name}#${tt}`);
            if ((Ot = ze(Vt, Ge(Vt, Ot))) === mt) return;
            this.constructor[jt](this[wt], et, qt.ADD)
          } else {
            if (Ot === mt) return;
            void 0 !== mt && null !== mt && this[wt].delete(et)
          }
          Dt[et] = Ot
        }
      }(tt, et, Vt.quantized) : function(tt, et, Vt) {
        return function(Ot) {
          const Dt = this[Ct],
            mt = Dt[et];
          if (Ot !== mt) {
            if (void 0 !== Ot && null !== Ot) {
              tO(Ot, Vt, this, tt);
              const Dt = this[wt],
                dt = this.constructor;
              void 0 !== mt && null !== mt && mt[wt] ? (Dt.root?.remove(mt[wt]), dt[jt](Dt, et, qt.DELETE_AND_ADD)) : dt[jt](Dt, et, qt.ADD), Ot[wt]?.setParent(this, Dt.root, et)
            } else void 0 !== mt && null !== mt && this[wt].delete(et);
            Dt[et] = Ot
          }
        }
      }(tt, et, Vt), {
        get: function() {
          return this[Ct][et]
        },
        set: Dt,
        enumerable: !0,
        configurable: !0
      }
    }

    function KO() {
      let tt = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
      return function(et, Vt) {
        const Ot = xe.initialize(et.constructor);
        xe.setDeprecated(Ot, Vt), tt && (Ot[Kt] ??= {}, Ot[Kt][Vt] = {
          get: function() {
            throw new Error(`${Vt} is deprecated.`)
          },
          set: function(tt) {},
          enumerable: !1,
          configurable: !0
        }, Object.defineProperty(et, Vt, Ot[Kt][Vt]))
      }
    }
    let hO = !1;

    function vO(tt, et, Vt) {
      hO || (hO = !0, console.warn("@colyseus/schema: defineTypes() is deprecated and will be removed in a future release. Use schema() with t.* field builders instead \u2192 https://docs.colyseus.io/state/schema"));
      for (let Ot in et) JO(et[Ot], Vt)(tt.prototype, Ot);
      return tt
    }

    function WO(tt, et) {
      let Vt = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : cO;
      if (null == tt || "object" !== typeof tt) throw new Error(`schema(): first argument must be a fields object (got ${typeof tt}).`);
      const Ot = {},
        qt = {},
        Dt = {},
        mt = {},
        dt = (tt, et) => {
          if (et.hasDefault)((tt, et) => {
            "function" === typeof et ? mt[tt] = et : et && "function" === typeof et.clone ? mt[tt] = () => et.clone() : Dt[tt] = et
          })(tt, et.default);
          else if (!et.optional) {
            const Vt = function(tt) {
              if (tt && "object" === typeof tt) {
                if (void 0 !== tt.array) return () => new OO;
                if (void 0 !== tt.map) return () => new DO;
                if (void 0 !== tt.set) return () => new dO;
                if (void 0 !== tt.collection) return () => new mO;
                if (void 0 !== tt.stream) return () => new jO
              } else if ("function" === typeof tt && cO.is(tt) && (!tt.prototype.initialize || 0 === tt.prototype.initialize.length)) return () => new tt
            }(et.type);
            Vt && (mt[tt] = Vt)
          }
        },
        jt = {},
        Ht = [],
        Xt = [],
        Qt = {},
        lt = [],
        Et = [],
        ft = {},
        wt = [];
      for (const Ct in tt) {
        const Vt = tt[Ct],
          Dt = `schema(${et?`'${et}'`:""}): field '${Ct}'`;
        if (XO(Vt)) {
          const tt = Vt.toDefinition();
          if (tt.noSync) {
            if (void 0 !== tt.view || tt.unreliable || tt.patchOnly || tt.fullStateOnly || tt.stream) throw new Error(`${Dt} uses .noSync() together with a sync-only modifier (.view/.unreliable/.patchOnly/.fullStateOnly/.stream). A local-only field cannot be synchronized.`);
            dt(Ct, tt);
            continue
          }
          if (tt.patchOnly && tt.fullStateOnly) throw new Error(`${Dt} uses .patchOnly() together with .fullStateOnly(). Those are the only two delivery channels, so the field would never reach a client \u2014 use .noSync() if that is intended.`);
          const et = Ae(tt.type, Dt);
          if ("function" === typeof et && !cO.is(et)) throw new Error(`${Dt} is a synced ref to non-Schema class '${et.name||"(anonymous)"}' \u2014 use .noSync(), or Metadata.setFields().`);
          Ot[Ct] = et, void 0 !== tt.view && (jt[Ct] = tt.view), tt.unreliable && Ht.push(Ct), tt.patchOnly && Xt.push(Ct), tt.deprecated && (Qt[Ct] = tt.deprecatedThrows), tt.fullStateOnly && lt.push(Ct), tt.stream && Et.push(Ct), void 0 !== tt.streamPriority && (ft[Ct] = tt.streamPriority), tt.optional && wt.push(Ct), dt(Ct, tt)
        } else {
          if ("function" !== typeof Vt) throw new Error(`${Dt} must be a t.* builder, Schema subclass, or method (got ${typeof Vt}).`);
          cO.is(Vt) ? (Ot[Ct] = Vt, Vt.prototype.initialize && 0 !== Vt.prototype.initialize.length || (mt[Ct] = () => new Vt)) : qt[Ct] = Vt
        }
      }
      const yt = tt => {
          for (const et in Dt) tt[et] = Dt[et];
          for (const et in mt) tt[et] = mt[et]()
        },
        Nt = () => {
          const tt = {};
          return yt(tt), tt
        },
        Mt = "function" === typeof qt.initialize,
        bt = qt.initialize ?? Vt._initialize,
        Jt = class extends Vt {
          constructor() {
            for (var tt = arguments.length, et = new Array(tt), Vt = 0; Vt < tt; Vt++) et[Vt] = arguments[Vt];
            const qt = et[0];
            void 0 === qt ? (super(), yt(this)) : super(Object.assign(Nt(), Mt ? (tt => {
              const et = Object.keys(Ot),
                Vt = {};
              for (const Ot in tt) et.includes(Ot) || (Vt[Ot] = tt[Ot]);
              return Vt
            })(qt) : qt)), bt && new.target === Jt && bt.apply(this, et)
          }
        };
      et && Object.defineProperty(Jt, "name", {
        value: et
      }), xe.setFields(Jt, Ot), Jt._getDefaultValues = Nt, Jt._initialize = bt, Object.assign(Jt.prototype, qt);
      for (const Ct in jt) NO(jt[Ct])(Jt.prototype, Ct);
      for (const Ct of Ht) aO(Jt.prototype, Ct);
      for (const Ct of Xt) MO(Jt.prototype, Ct);
      for (const Ct in Qt) KO(Qt[Ct])(Jt.prototype, Ct);
      if (lt.length > 0 || Et.length > 0) {
        const tt = Jt[Symbol.metadata];
        for (const et of lt) xe.setFullStateOnly(tt, et);
        for (const et of Et) xe.setStream(tt, et);
        for (const et in ft) xe.setStreamPriority(tt, et, ft[et])
      }
      if (wt.length > 0) {
        const tt = Jt[Symbol.metadata];
        for (const et of wt) tt[tt[et]].optional = !0
      }
      return Jt.extend = (tt, et) => WO(tt, et, Jt), Jt
    }

    function SO(tt) {
      const et = tt[wt].root,
        Vt = {
          ops: {},
          refs: []
        };
      let Ot = et.changes.next;
      for (; Ot;) {
        const tt = Ot.changeTree;
        void 0 !== tt ? (Vt.refs.push(`refId#${tt.ref[dt]}`), tt.forEach(((tt, et) => {
          if (tt < 0 || !et) return;
          const Ot = qt[et];
          Vt.ops[Ot] || (Vt.ops[Ot] = 0), Vt.ops[Ot]++
        })), Ot = Ot.next) : Ot = Ot.next
      }
      return Vt
    }
    class cO {
      static[Ht] = LV;
      static[Xt] = TV;
      [dt];
      [Ct];
      static initialize(tt) {
        Object.defineProperty(tt, wt, {
          value: new RV(tt),
          enumerable: !1,
          writable: !0
        }), tt[Ct] = []
      }
      static initializeForDecoder() {
        const tt = Object.create(this.prototype);
        return PV(tt), tt[Ct] = [], tt
      }
      static reset(tt) {
        const et = tt?.[wt];
        if (void 0 === et || "function" !== typeof et.recycle) throw new Error("@colyseus/schema: Schema.reset() requires a tracked (encoder-side) instance.");
        if (void 0 !== et.extraParents) throw new Error(`@colyseus/schema: cannot reset a shared instance (${tt.constructor.name}) with multiple parents.`);
        tt[bt]()
      } [bt]() {
        const tt = this.constructor[Symbol.metadata],
          et = tt?.[St] ?? [],
          Vt = this[Ct];
        for (let Ot = 0; Ot < et.length; Ot++) {
          const tt = Vt[et[Ot]];
          tt?.[bt]?.()
        }
        this[wt].recycle(), this[dt] = void 0
      }
      static is(tt) {
        const et = tt[Symbol.metadata];
        return "object" === typeof et && null !== et
      }
      static isSchema(tt) {
        return "function" === typeof tt?.assign
      }
      static[jt](tt, et) {
        let Vt = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : qt.ADD;
        tt.change(et, Vt)
      }
      static[Qt](tt, et, Vt) {
        const Ot = tt.constructor[Symbol.metadata],
          qt = Ot[et]?.tag;
        return void 0 === Vt ? void 0 === qt : void 0 === qt || (qt === wO ? Vt.isChangeTreeVisible(tt[wt]) : Vt.hasTagOnTree(tt[wt], qt))
      }
      constructor(tt) {
        cO.initialize(this), tt && cO.assignProps(this, tt)
      }
      assign(tt) {
        return cO.assignProps(this, tt), this
      }
      static assignProps(tt, et) {
        const Vt = tt.constructor[Symbol.metadata];
        if (Vt && void 0 !== Vt[Wt])
          for (let qt = 0; qt <= Vt[Wt]; qt++) {
            const Ot = Vt[qt];
            if (!Ot) continue;
            const Dt = et[Ot.name];
            void 0 !== Dt && (tt[Ot.name] = Dt)
          }
        const Ot = Object.keys(et);
        for (let qt = 0; qt < Ot.length; qt++) {
          const Dt = Ot[qt];
          Vt && void 0 !== Vt[Dt] || (tt[Dt] = et[Dt])
        }
      }
      restore(tt) {
        const et = this.constructor[Symbol.metadata];
        for (const Vt in et) {
          const Ot = et[Vt],
            qt = Ot.name,
            Dt = Ot.type,
            mt = tt[qt];
          if (void 0 !== mt && null !== mt)
            if ("string" === typeof Dt) this[qt] = mt;
            else if (cO.is(Dt)) {
            const tt = new Dt;
            tt.restore(mt), this[qt] = tt
          } else if ("object" === typeof Dt) {
            const tt = Object.keys(Dt)[0],
              et = Dt[tt];
            if ("map" === tt) {
              const tt = this[qt];
              for (const Vt in mt)
                if (cO.is(et)) {
                  const Ot = new et;
                  Ot.restore(mt[Vt]), tt.set(Vt, Ot)
                } else tt.set(Vt, mt[Vt])
            } else if ("array" === tt) {
              const tt = this[qt];
              for (let Vt = 0; Vt < mt.length; Vt++)
                if (cO.is(et)) {
                  const Ot = new et;
                  Ot.restore(mt[Vt]), tt.push(Ot)
                } else tt.push(mt[Vt])
            }
          }
        }
        return this
      }
      setDirty(tt, et) {
        const Vt = this.constructor[Symbol.metadata];
        this[wt].change(Vt[Vt[tt]].index, et)
      }
      pauseTracking() {
        this[wt].pause()
      }
      resumeTracking() {
        this[wt].resume()
      }
      untracked(tt) {
        return this[wt].untracked(tt)
      }
      get isTrackingPaused() {
        return this[wt].paused
      }
      clone() {
        const tt = Object.create(this.constructor.prototype);
        cO.initialize(tt);
        const et = this.constructor[Symbol.metadata];
        for (const Vt in et) {
          const Ot = et[Vt].name;
          "object" === typeof this[Ot] && "function" === typeof this[Ot]?.clone ? tt[Ot] = this[Ot].clone() : tt[Ot] = this[Ot]
        }
        return tt
      }
      toJSON() {
        const tt = {},
          et = this.constructor[Symbol.metadata];
        for (const Vt in et) {
          const Ot = et[Vt],
            qt = Ot.name;
          Ot.deprecated || null === this[qt] || "undefined" === typeof this[qt] || (tt[qt] = "function" === typeof this[qt].toJSON ? this[qt].toJSON() : this[qt])
        }
        return tt
      }
      discardAllChanges() {
        this[wt].discardAll()
      } [lt](tt) {
        return this[this.constructor[Symbol.metadata][tt].name]
      } [Et](tt) {
        this[this.constructor[Symbol.metadata][tt].name] = void 0
      }
      static debugRefIds(tt) {
        let et = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          Vt = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          Ot = arguments.length > 3 ? arguments[3] : void 0,
          qt = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "";
        const Dt = et ? ` - ${JSON.stringify(tt.toJSON())}` : "",
          mt = tt[wt],
          jt = tt[dt],
          Ht = Ot ? Ot.root.refCount[jt] : mt.refCount,
          Xt = Ht > 1 ? ` [\xd7${Ht}]` : "";
        let Qt = `${function(tt){return new Array(tt).fill(0).map(((et,Vt)=>Vt===tt-1?"\u2514\u2500 ":"   ")).join("")}(Vt)}${qt}${tt.constructor.name} (refId: ${jt})${Xt}${Dt}\n`;
        return mt.forEachChild(((qt, Dt) => {
          let mt = Dt;
          "number" === typeof Dt && tt.$indexes && (mt = tt.$indexes.get(Dt) ?? Dt);
          const dt = void 0 !== tt.forEach && void 0 !== mt ? `["${mt}"]: ` : "";
          Qt += this.debugRefIds(qt.ref, et, Vt + 1, Ot, dt)
        })), Qt
      }
      static debugRefIdEncodingOrder(tt) {
        let et = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "allChanges";
        const Vt = [],
          Ot = tt[wt];
        if ("changes" === et) {
          let tt = Ot.root.changes?.next;
          for (; tt;) tt.changeTree && Vt.push(tt.changeTree.ref[dt]), tt = tt.next;
          return Vt
        }
        const qt = "allFilteredChanges" === et,
          Dt = new Set,
          mt = tt => {
            Dt.has(tt) || (Dt.add(tt), tt.isFiltered === qt && Vt.push(tt.ref[dt]), tt.forEachChild(((tt, et) => mt(tt))))
          };
        return mt(Ot), Vt
      }
      static debugRefIdsFromDecoder(tt) {
        return this.debugRefIds(tt.state, !1, 0, tt)
      }
      static debugChanges(tt) {
        let et = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        const Vt = tt[wt],
          Ot = et ? "allChanges" : "changes";
        let Dt = `${tt.constructor.name} (${tt[dt]}) -> .${Ot}:\n`;
        return et ? Vt.forEachLive((tt => {
          Dt += `- [${tt}]: ADD (${JSON.stringify(Vt.getValue(Number(tt),!0))})\n`
        })) : Vt.forEach(((tt, et) => {
          tt < 0 || !et || (Dt += `- [${tt}]: ${qt[et]} (${JSON.stringify(Vt.getValue(Number(tt),!1))})\n`)
        })), Dt
      }
    }
    Dt(cO);
    const RO = {
      value: 0,
      enumerable: !1,
      writable: !0
    };
    class IO {
      types;
      nextUniqueId = 0;
      changeTrees = {};
      get refCount() {
        const tt = {};
        for (const et in this.changeTrees) tt[et] = this.changeTrees[et].refCount;
        return tt
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
      enqueueFilterRefresh(tt) {
        this.types.hasFilters && (tt.flags & SV || (tt.flags |= SV, this.pendingFilterRefresh.push(tt)))
      }
      _nodePool = [];
      _nextViewId = 0;
      _freeViewIds = [];
      acquireViewId() {
        return this._freeViewIds.length > 0 ? this._freeViewIds.pop() : this._nextViewId++
      }
      releaseViewId(tt) {
        this._freeViewIds.push(tt)
      }
      activeViews = new Map;
      streamTrees = new Set;
      registerView(tt) {
        this.activeViews.set(tt.id, new WeakRef(tt))
      }
      unregisterView(tt) {
        this.activeViews.delete(tt.id);
        const et = tt.id;
        for (const Vt of this.streamTrees) Vt._dropView(et)
      }
      forEachActiveView(tt) {
        for (const [et, Vt] of this.activeViews) {
          const Ot = Vt.deref();
          if (void 0 !== Ot) tt(Ot);
          else {
            this.activeViews.delete(et);
            for (const tt of this.streamTrees) tt._dropView(et)
          }
        }
      }
      registerStream(tt) {
        this.streamTrees.add(tt)
      }
      unregisterStream(tt) {
        this.streamTrees.delete(tt)
      }
      constructor(tt) {
        let et = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        this.types = tt, this.nextUniqueId = et
      }
      add(tt) {
        const et = tt.ref;
        void 0 === et[dt] && (RO.value = this.nextUniqueId++, Object.defineProperty(et, dt, RO));
        const Vt = et[dt],
          Ot = void 0 === this.changeTrees[Vt];
        Ot && (this.changeTrees[Vt] = tt), tt.needsRestage && (tt.needsRestage = !1, tt.forEachLiveWithCtx(tt, OV));
        const qt = Ot ? 0 : tt.refCount;
        return tt.refCount = qt + 1, qt > 0 && this.enqueueFilterRefresh(tt), Ot
      }
      remove(tt) {
        const et = tt.refCount - 1;
        if (et <= 0) {
          if (tt.root = void 0, delete this.changeTrees[tt.ref[dt]], tt.isStreamCollection) {
            const et = tt.ref;
            et._unregister?.(), this.unregisterStream(et)
          }
          this.removeFromQueue(tt), this.removeFromUnreliableQueue(tt), tt.refCount = 0, tt.needsRestage = !0, tt.forEachChild(((et, Vt) => {
            et.removeParent(tt.ref) && (void 0 === et.parentRef || et.refCount > 0 ? this.remove(et) : this.moveNextToParent(et))
          }))
        } else tt.refCount = et, this.enqueueFilterRefresh(tt), this.recursivelyMoveNextToParent(tt);
        return et
      }
      recursivelyMoveNextToParent(tt) {
        this.moveNextToParent(tt), tt.forEachChild(((tt, et) => this.recursivelyMoveNextToParent(tt)))
      }
      moveNextToParent(tt) {
        tt.changesNode && this._moveNextToParentInList(this.changes, tt, tt.changesNode, "changesNode"), tt.unreliableChangesNode && this._moveNextToParentInList(this.unreliableChanges, tt, tt.unreliableChangesNode, "unreliableChangesNode")
      }
      _moveNextToParentInList(tt, et, Vt, Ot) {
        const qt = et.parent;
        if (!qt || !qt[wt]) return;
        const Dt = qt[wt][Ot];
        Dt && Dt !== Vt && (Vt.position > Dt.position || (Vt.prev ? Vt.prev.next = Vt.next : tt.next = Vt.next, Vt.next ? Vt.next.prev = Vt.prev : tt.tail = Vt.prev, Vt.prev = tt.tail, Vt.next = void 0, tt.tail.next = Vt, tt.tail = Vt, Vt.position = tt.nextPosition++))
      }
      enqueueChangeTree(tt) {
        (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : tt.changesNode) || (tt.changesNode = this._appendToList(this.changes, tt))
      }
      enqueueUnreliable(tt) {
        (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : tt.unreliableChangesNode) || (tt.unreliableChangesNode = this._appendToList(this.unreliableChanges, tt))
      }
      _appendToList(tt, et) {
        const Vt = this._nodePool;
        let Ot;
        return Vt.length > 0 ? (Ot = Vt.pop(), Ot.changeTree = et, Ot.next = void 0, Ot.prev = void 0) : Ot = {
          changeTree: et,
          next: void 0,
          prev: void 0,
          position: 0
        }, tt.next ? (Ot.prev = tt.tail, tt.tail.next = Ot, tt.tail = Ot) : (tt.nextPosition = 0, tt.next = Ot, tt.tail = Ot), Ot.position = tt.nextPosition++, Ot
      }
      releaseNode(tt) {
        tt.changeTree = void 0, tt.prev = void 0, tt.next = void 0, this._nodePool.push(tt)
      }
      removeFromQueue(tt) {
        return this._removeNode(this.changes, tt, tt.changesNode, "changesNode")
      }
      removeFromUnreliableQueue(tt) {
        return this._removeNode(this.unreliableChanges, tt, tt.unreliableChangesNode, "unreliableChangesNode")
      }
      _removeNode(tt, et, Vt, Ot) {
        return !(!Vt || Vt.changeTree !== et) && (Vt.prev ? Vt.prev.next = Vt.next : tt.next = Vt.next, Vt.next ? Vt.next.prev = Vt.prev : tt.tail = Vt.prev, et[Ot] = void 0, this.releaseNode(Vt), !0)
      }
    }

    function PO(tt, et) {
      if (-1 === et || et >= tt.length) return !1;
      const Vt = tt.length - 1;
      for (let Ot = et; Ot < Vt; Ot++) tt[Ot] = tt[Ot + 1];
      return tt.length = Vt, !0
    }

    function ZO(tt, et, Vt) {
      const Ot = ~Vt,
        qt = tt.changeTrees;
      for (const Dt in qt) {
        const tt = qt[Dt],
          Vt = tt.visibleViews;
        void 0 !== Vt && et < Vt.length && (Vt[et] &= Ot);
        const mt = tt.subscribedViews;
        void 0 !== mt && et < mt.length && (mt[et] &= Ot);
        const dt = tt.tagViews;
        void 0 !== dt && dt.forEach((tt => {
          et < tt.length && (tt[et] &= Ot)
        }))
      }
    }
    const LO = new FinalizationRegistry((tt => {
      let {
        root: et,
        id: Vt,
        slot: Ot,
        bit: qt
      } = tt;
      ZO(et, Ot, qt), et.activeViews.delete(Vt);
      for (const Dt of et.streamTrees) Dt._dropView(Vt);
      et.releaseViewId(Vt)
    }));

    function FO(tt) {
      if (void 0 === tt) return "undefined";
      if (null === tt) return "null";
      const et = typeof tt;
      return "string" === et ? JSON.stringify(tt.length > 30 ? `${tt.slice(0,30)}\u2026` : tt) : "object" !== et && "function" !== et ? `${et} ${String(tt)}` : Array.isArray(tt) ? `Array(${tt.length})` : tt.constructor?.name ?? "Object"
    }
    class kO {
      iterable;
      items;
      id = -1;
      _root;
      _slot = 0;
      _bit = 0;
      changes = new Map;
      constructor() {
        let tt = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        this.iterable = tt, tt && (this.items = [])
      }
      _bindRoot(tt) {
        void 0 === this._root && (this._root = tt, this.id = tt.acquireViewId(), this._slot = this.id >> 5, this._bit = 1 << (31 & this.id), tt.registerView(this), LO.register(this, {
          root: tt,
          id: this.id,
          slot: this._slot,
          bit: this._bit
        }, this))
      }
      dispose() {
        void 0 !== this._root && (this._root.unregisterView(this), ZO(this._root, this._slot, this._bit), this._root.releaseViewId(this.id), LO.unregister(this), this._root = void 0, this.id = -1)
      }
      isVisible(tt) {
        const et = tt.visibleViews,
          Vt = this._slot;
        return void 0 !== et && Vt < et.length && 0 !== (et[Vt] & this._bit)
      }
      markVisible(tt) {
        const et = this._slot;
        let Vt = tt.visibleViews;
        for (void 0 === Vt && (Vt = tt.visibleViews = []); Vt.length <= et;) Vt.push(0);
        Vt[et] |= this._bit
      }
      unmarkVisible(tt) {
        const et = tt.visibleViews;
        if (void 0 === et) return;
        const Vt = this._slot;
        Vt < et.length && (et[Vt] &= ~this._bit)
      }
      isSubscribed(tt) {
        const et = tt.subscribedViews,
          Vt = this._slot;
        return void 0 !== et && Vt < et.length && 0 !== (et[Vt] & this._bit)
      }
      _setSubscribed(tt) {
        const et = this._slot;
        let Vt = tt.subscribedViews;
        for (void 0 === Vt && (Vt = tt.subscribedViews = []); Vt.length <= et;) Vt.push(0);
        Vt[et] |= this._bit
      }
      _clearSubscribed(tt) {
        const et = tt.subscribedViews;
        if (void 0 === et) return;
        const Vt = this._slot;
        Vt < et.length && (et[Vt] &= ~this._bit)
      }
      hasTagOnTree(tt, et) {
        const Vt = tt.tagViews;
        if (void 0 === Vt) return !1;
        const Ot = this._slot,
          qt = this._bit;
        for (let Dt = et; 0 !== Dt; Dt &= Dt - 1) {
          const tt = Vt.get(Dt & -Dt);
          if (void 0 !== tt && Ot < tt.length && 0 !== (tt[Ot] & qt)) return !0
        }
        return !1
      }
      addTag(tt, et) {
        if (et === wO) return;
        let Vt = tt.tagViews;
        void 0 === Vt && (Vt = tt.tagViews = new Map);
        const Ot = this._slot,
          qt = this._bit;
        for (let Dt = et; Dt > 0; Dt &= Dt - 1) {
          const tt = Dt & -Dt;
          let et = Vt.get(tt);
          for (void 0 === et && (et = [], Vt.set(tt, et)); et.length <= Ot;) et.push(0);
          et[Ot] |= qt
        }
      }
      removeTag(tt, et) {
        if (et === wO) return;
        const Vt = tt.tagViews;
        if (void 0 === Vt) return;
        const Ot = this._slot,
          qt = ~this._bit;
        for (let Dt = et; Dt > 0; Dt &= Dt - 1) {
          const tt = Vt.get(Dt & -Dt);
          void 0 !== tt && Ot < tt.length && (tt[Ot] &= qt)
        }
      }
      removeAllTagsOnTree(tt) {
        const et = tt.tagViews;
        if (void 0 === et) return;
        const Vt = this._slot,
          Ot = ~this._bit;
        et.forEach((tt => {
          Vt < tt.length && (tt[Vt] &= Ot)
        }))
      }
      add(tt) {
        let et = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : wO,
          Vt = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        return this._add(tt, et, Vt, !1)
      }
      _addImmediate(tt) {
        let et = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : wO;
        this._add(tt, et, !0, !0)
      }
      _add(tt, et, Vt, Ot) {
        const Dt = tt?.[wt];
        if (!Dt) return console.warn(`StateView#add(): expected a Schema instance or collection, received ${FO(tt)}`), !1;
        const mt = Dt.parent;
        if (!mt && 0 !== tt[dt]) throw new Error(`Cannot add a detached instance to the StateView. Make sure to assign the "${Dt.ref.constructor.name}" instance to the state before calling view.add()`);
        void 0 === this._root && void 0 !== Dt.root && this._bindRoot(Dt.root);
        const jt = mt?.[wt];
        if (!Ot && jt?.isStreamCollection) return Pe(mt, this.id, Dt.parentIndex), !0;
        const Ht = tt.constructor[Symbol.metadata],
          Xt = this.isVisible(Dt);
        if (!this.iterable || !Vt || Xt && -1 !== this.items.indexOf(tt) || this.items.push(tt), this.markVisible(Dt), Vt && mt && this.addParentOf(Dt, et), !Ot && Dt.isStreamCollection) return !0;
        if (et === wO && Dt.isNew) return this._markSubtreeVisible(Dt, et), !1;
        let Qt = this.changes.get(tt[dt]);
        void 0 === Qt && (Qt = new Map, this.changes.set(tt[dt], Qt));
        let lt = !1;
        const Et = Dt.encDescriptor.tags;
        if (Dt.forEachChild(((tt, Vt) => {
            const Ot = Et[Vt];
            if (void 0 !== Ot) {
              if (!(Ot === wO || et !== wO && 0 !== (Ot & et))) return
            }
            this.add(tt.ref, et, !1) && (lt = !0)
          })), et !== wO) {
          this.addTag(Dt, et);
          const tt = Ht?.[Rt];
          if (void 0 !== tt)
            for (let Vt = et; Vt > 0; Vt &= Vt - 1) tt[Vt & -Vt]?.forEach((tt => {
              Dt.getChange(tt) !== qt.DELETE && Qt.set(tt, qt.ADD)
            }))
        }
        if ((et === wO || !Xt) && (!Dt.isNew || lt))
          if (Dt.isArray && "string" !== typeof Dt.refTarget[yt]) Dt.refTarget.items.length > 0 && (Qt.set(-1, qt.ADD), lt = !0);
          else {
            const tt = Dt.encDescriptor.tags;
            Dt.forEachLive((Vt => {
              const Ot = tt[Vt];
              (void 0 === Ot || Ot === wO || et !== wO && 0 !== (Ot & et)) && (Qt.set(Vt, qt.ADD), lt = !0)
            }))
          } return lt
      }
      _markSubtreeVisible(tt, et) {
        const Vt = tt.encDescriptor.tags;
        tt.forEachChild(((tt, Ot) => {
          const qt = Vt[Ot];
          if (void 0 !== qt) {
            if (!(qt === wO || et !== wO && 0 !== (qt & et))) return
          }
          tt.isNew ? (this.markVisible(tt), this._markSubtreeVisible(tt, et)) : this._add(tt.ref, et, !1, !1)
        }))
      }
      addParentOf(tt, et) {
        const Vt = tt.parent[wt],
          Ot = tt.parentIndex;
        this.isVisible(Vt) || this.markVisible(Vt);
        const Dt = Vt.parent?.[wt];
        if (Dt && this.addParentOf(Vt, et), Vt.hasFilteredFields && Vt.getChange(Ot) !== qt.DELETE) {
          let Dt = this.changes.get(Vt.ref[dt]);
          void 0 === Dt && (Dt = new Map, this.changes.set(Vt.ref[dt], Dt));
          const mt = Vt.encDescriptor.tags[Ot];
          void 0 !== mt && mt !== wO && 0 !== (mt & et) && this.addTag(Vt, et), Dt.set(Vt.isArray ? tt : Ot, qt.ADD)
        }
      }
      _touchAncestorsOf(tt) {
        let et = tt.parent?.[wt];
        if (void 0 === et) return;
        const Vt = [];
        for (; void 0 !== et;) {
          if (et.hasFilteredFields) {
            const tt = et.ref[dt];
            if (this.changes.has(tt)) break;
            Vt.push(et)
          }
          et = et.parent?.[wt]
        }
        for (let Ot = Vt.length - 1; Ot >= 0; Ot--) this.changes.set(Vt[Ot].ref[dt], new Map)
      }
      remove(tt) {
        let et = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : wO,
          Vt = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        const Ot = tt?.[wt];
        if (!Ot) return console.warn(`StateView#remove(): expected a Schema instance or collection, received ${FO(tt)}`), this;
        const Dt = Ot.parent?.[wt];
        if (Dt?.isStreamCollection) return this.unmarkVisible(Ot), this.iterable && !Vt && PO(this.items, this.items.indexOf(tt)),
          function(tt, et, Vt, Ot, Dt) {
            const mt = tt._stream;
            if (void 0 === mt) return !1;
            const dt = mt.pendingByView.get(et);
            if (dt?.has(Ot)) return dt.delete(Ot), !1;
            const jt = mt.sentByView.get(et);
            if (jt?.has(Ot)) {
              jt.delete(Ot);
              let tt = Dt.get(Vt);
              return void 0 === tt && (tt = new Map, Dt.set(Vt, tt)), tt.set(Ot, qt.DELETE), !0
            }
          }(Ot.parent, this.id, Ot.parent[dt], Ot.parentIndex, this.changes), this._recursiveDeleteVisibleChangeTree(Ot), this;
        if (Ot.isStreamCollection) {
          this.unmarkVisible(Ot), this.iterable && !Vt && PO(this.items, this.items.indexOf(tt));
          const et = Ot.ref,
            Dt = et._stream;
          if (void 0 !== Dt) {
            Dt.pendingByView.get(this.id)?.clear();
            const tt = Dt.sentByView.get(this.id);
            if (void 0 !== tt && tt.size > 0) {
              const Vt = et[dt];
              let Ot = this.changes.get(Vt);
              void 0 === Ot && (Ot = new Map, this.changes.set(Vt, Ot));
              for (const et of tt) Ot.set(et, qt.DELETE);
              tt.clear()
            }
          }
          return this
        }
        this.unmarkVisible(Ot), this.iterable && !Vt && PO(this.items, this.items.indexOf(tt));
        const mt = Ot.ref,
          jt = mt.constructor[Symbol.metadata],
          Ht = mt[dt];
        this._touchAncestorsOf(Ot);
        let Xt = this.changes.get(Ht);
        if (void 0 === Xt && (Xt = new Map, this.changes.set(Ht, Xt)), et === wO) {
          const tt = Ot.parent;
          if (tt && !xe.isValidInstance(tt) && Ot.isFiltered) {
            const et = Dt.isArray ? Ot : Ot.parentIndex,
              Vt = tt[dt];
            let mt = this.changes.get(Vt);
            void 0 === mt ? (mt = new Map, this.changes.set(Vt, mt)) : mt.get(et) === qt.ADD && this._dropPendingEntries(Ot), mt.set(et, qt.DELETE), this._recursiveDeleteVisibleChangeTree(Ot)
          } else jt?.[ct]?.forEach((tt => this._removeViewField(Ot, Xt, tt)))
        } else {
          const tt = jt?.[Rt];
          if (void 0 !== tt)
            for (let Vt = et; Vt > 0; Vt &= Vt - 1) tt[Vt & -Vt]?.forEach((tt => this._removeViewField(Ot, Xt, tt)))
        }
        return void 0 === et ? this.removeAllTagsOnTree(Ot) : this.removeTag(Ot, et), this
      }
      has(tt) {
        return this.isVisible(tt[wt])
      }
      hasTag(tt) {
        let et = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : wO;
        return this.hasTagOnTree(tt[wt], et)
      }
      subscribe(tt, et) {
        const Vt = tt?.[wt];
        if (!Vt) return console.warn(`StateView#subscribe(): expected a Schema collection, received ${FO(tt)}`), this;
        if (void 0 === this._root && void 0 !== Vt.root && this._bindRoot(Vt.root), void 0 !== et)
          if (Vt.isStreamCollection) {
            const Vt = We(tt);
            null === et ? Vt.priorityByView?.delete(this.id) : (Vt.priorityByView ??= new Map).set(this.id, et)
          } else {
            const et = tt?.constructor?.name ?? "collection",
              Ot = Vt.parent;
            if (void 0 === Ot) console.warn(`StateView#subscribe(): \`priority\` ignored \u2014 this ${et} is not attached to a state yet, so it cannot be identified as a stream. Subscribe after assigning it to the state.`);
            else {
              const tt = Ot?.constructor?.[Symbol.metadata]?.[Vt.parentIndex]?.name,
                qt = tt ? `${Ot.constructor.name}#${tt}` : et;
              console.warn(`StateView#subscribe(): \`priority\` ignored \u2014 ${qt} is a ${et}, not a streaming collection. Declare the field with .stream() (e.g. t.map(X).stream()) or use t.stream(X) to enable priority batching.`)
            }
          } if (this.isSubscribed(Vt)) return this;
        const Ot = void 0 !== Vt.parent && !this.isVisible(Vt);
        if (Ot ? (this.addParentOf(Vt, wO), this._add(tt, wO, !1, !1)) : this.markVisible(Vt), this._setSubscribed(Vt), Vt.isStreamCollection) {
          const et = tt;
          Vt.forEachChild(((tt, Vt) => {
            Pe(et, this.id, Vt)
          }))
        } else Ot || Vt.forEachChild((tt => {
          this.markVisible(tt)
        }));
        return this
      }
      unsubscribe(tt) {
        const et = tt?.[wt];
        if (!et) return console.warn(`StateView#unsubscribe(): expected a Schema collection, received ${FO(tt)}`), this;
        if (!this.isSubscribed(et)) return this;
        this._clearSubscribed(et);
        const Vt = et.ref[dt];
        if (et.isStreamCollection) {
          const et = tt._stream;
          if (void 0 !== et) {
            et.pendingByView.get(this.id)?.clear();
            const tt = et.sentByView.get(this.id);
            if (void 0 !== tt && tt.size > 0) {
              let et = this.changes.get(Vt);
              void 0 === et && (et = new Map, this.changes.set(Vt, et));
              for (const Vt of tt) et.set(Vt, qt.DELETE);
              tt.clear()
            }
          }
        } else {
          const tt = et.isArray;
          let Ot = this.changes.get(Vt);
          et.forEachChild(((et, Dt) => {
            void 0 === Ot && (Ot = new Map, this.changes.set(Vt, Ot)), Ot.set(tt ? et : Dt, qt.DELETE), this.unmarkVisible(et)
          }))
        }
        return this.unmarkVisible(et), this
      }
      clear() {
        if (!this.iterable) throw new Error("StateView#clear() is only available for iterable StateView's. Use StateView(iterable: true) constructor.");
        for (let tt = 0, et = this.items.length; tt < et; tt++) this.remove(this.items[tt], wO, !0);
        this.items.length = 0
      }
      isChangeTreeVisible(tt) {
        let et = this.isVisible(tt);
        if (!et && tt.isVisibilitySharedWithParent)
          if (this.isVisible(tt.parent[wt])) this.markVisible(tt), et = !0;
          else
            for (let Vt = tt.extraParents; void 0 !== Vt; Vt = Vt.next) {
              const Ot = Vt.ref[wt];
              if (Ot.isFiltered && this.isVisible(Ot)) {
                this.markVisible(tt), et = !0;
                break
              }
            }
        return et
      }
      _recursiveDeleteVisibleChangeTree(tt) {
        tt.forEachChild((tt => {
          this.unmarkVisible(tt), this._recursiveDeleteVisibleChangeTree(tt)
        }))
      }
      _dropPendingEntries(tt) {
        this.changes.delete(tt.ref[dt]), tt.forEachChild((tt => this._dropPendingEntries(tt)))
      }
      _removeViewField(tt, et, Vt) {
        const Ot = et.get(Vt) === qt.ADD;
        et.set(Vt, qt.DELETE);
        const Dt = tt.ref[tt.encDescriptor.names[Vt]],
          mt = Dt?.[wt];
        mt && (this.unmarkVisible(mt), this._recursiveDeleteVisibleChangeTree(mt), Ot && this._dropPendingEntries(mt))
      }
    }

    function GO(tt) {
      tt.structSwitchEmitted || (tt.shouldEmitSwitch && (tt.buffer[tt.it.offset++] = 255, Ve.number(tt.buffer, tt.ref[dt], tt.it)), tt.structSwitchEmitted = !0)
    }

    function zO(tt, et) {
      UO(tt, et, qt.ADD)
    }

    function oO(tt, et) {
      if (et._fullSyncGen === tt.gen) return;
      et._fullSyncGen = tt.gen;
      if (!tt.hasView || tt.view.isChangeTreeVisible(et)) {
        const Vt = et.encDescriptor;
        tt.changeTree = et, tt.ref = et.ref, tt.encoder = Vt.encoder, tt.filter = Vt.filter, tt.metadata = Vt.metadata, tt.treeIsFiltered = et.isFiltered, tt.isSchema = Vt.isSchema, tt.filterBitmask = Vt.filterBitmask, tt.tags = Vt.tags, tt.structSwitchEmitted = !1, tt.shouldEmitSwitch = tt.hasView || tt.it.offset > tt.initialOffset || et !== tt.rootChangeTree, et.isArray && et.collDirty.size > 0 && (et.flags |= 512), DV(et, tt, zO)
      }
      aV(et, tt, rO)
    }

    function rO(tt, et, Vt) {
      oO(tt, et)
    }

    function UO(tt, et, Vt) {
      if (et < 0) {
        if (tt.treeIsFiltered !== tt.emitFiltered) return;
        return GO(tt), void(tt.buffer[tt.it.offset++] = 255 & Math.abs(et))
      }
      if ((tt.isSchema ? tt.treeIsFiltered || (et < 32 ? 0 !== (tt.filterBitmask & 1 << et) : void 0 !== tt.tags[et]) : tt.treeIsFiltered) !== tt.emitFiltered) return;
      const Ot = tt.isEncodeAll ? qt.ADD : Vt;
      void 0 !== Ot && (void 0 === tt.filter || tt.filter(tt.ref, et, tt.view)) && (GO(tt), tt.encoder(tt.self, tt.buffer, tt.changeTree, et, Ot, tt.it, tt.isEncodeAll, tt.hasView, tt.metadata))
    }

    function AO(tt, et) {
      const Vt = new Uint8Array(tt.length + et.length);
      return Vt.set(tt, 0), Vt.set(et, tt.length), Vt
    }
    class iO {
      static BUFFER_SIZE = 16384;
      sharedBuffer = new Uint8Array(iO.BUFFER_SIZE);
      context;
      state;
      root;
      constructor(tt, et) {
        this.context = re.cache(tt.constructor), this.root = et ?? new IO(this.context), this.setState(tt)
      }
      setState(tt) {
        this.state = tt, this.state[wt].setRoot(this.root)
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
        let tt = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
            offset: 0
          },
          et = arguments.length > 1 ? arguments[1] : void 0,
          Vt = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : this.sharedBuffer,
          Ot = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : tt.offset;
        return this._encodeChannel(tt, et, Vt, Ot, !1)
      }
      encodeUnreliable() {
        let tt = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
            offset: 0
          },
          et = arguments.length > 1 ? arguments[1] : void 0,
          Vt = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : this.sharedBuffer,
          Ot = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : tt.offset;
        return this._encodeChannel(tt, et, Vt, Ot, !0)
      }
      _encodeChannel(tt, et, Vt, Ot, qt) {
        this.root.pendingFilterRefresh.length > 0 && dV(this.root);
        const Dt = void 0 !== et,
          mt = this.state[wt],
          dt = this._encodeCtx;
        dt.self = this, dt.buffer = Vt, dt.it = tt, dt.view = et, dt.isEncodeAll = !1, dt.hasView = Dt, dt.emitFiltered = Dt;
        let jt = qt ? this.root.unreliableChanges : this.root.changes;
        for (; jt = jt.next;) {
          const Vt = jt.changeTree;
          if (Dt && !et.isChangeTreeVisible(Vt)) continue;
          const Ht = qt ? Vt.unreliableRecorder : Vt;
          if (!Ht || !Ht.has()) continue;
          const Xt = Vt.encDescriptor;
          dt.changeTree = Vt, dt.ref = Vt.ref, dt.encoder = Xt.encoder, dt.filter = Xt.filter, dt.metadata = Xt.metadata, dt.treeIsFiltered = Vt.isFiltered, dt.isSchema = Xt.isSchema, dt.filterBitmask = Xt.filterBitmask, dt.tags = Xt.tags, dt.structSwitchEmitted = !1, dt.isRootTree = Vt === mt, dt.shouldEmitSwitch = Dt || tt.offset > Ot || !dt.isRootTree, Ht.forEachWithCtx(dt, UO)
        }
        return qt || Dt || !this._isStreamBroadcastMode || this._emitStreamBroadcast(Vt, tt), tt.offset > Vt.byteLength ? (Vt = this._resizeBuffer(Vt, tt.offset), tt.offset = Ot, this._encodeChannel(tt, et, Vt, Ot, qt)) : Vt.subarray(0, tt.offset)
      }
      encodeFullSync(tt, et, Vt, Ot) {
        let qt = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : tt.offset;
        this.root.pendingFilterRefresh.length > 0 && dV(this.root);
        const Dt = void 0 !== Ot,
          mt = this.state[wt],
          dt = this._encodeCtx;
        return dt.self = this, dt.buffer = et, dt.it = tt, dt.view = Ot, dt.isEncodeAll = !0, dt.hasView = Dt, dt.emitFiltered = Vt, dt.gen = ++this._fullSyncGen, dt.initialOffset = qt, dt.rootChangeTree = mt, oO(dt, mt), tt.offset > et.byteLength ? (et = this._resizeBuffer(et, tt.offset), tt.offset = qt, this.encodeFullSync(tt, et, Vt, Ot, qt)) : et.subarray(0, tt.offset)
      }
      _resizeBuffer(tt, et) {
        const Vt = Math.ceil(et / iO.BUFFER_SIZE) * iO.BUFFER_SIZE,
          Ot = new Uint8Array(Vt);
        return Ot.set(tt), tt === this.sharedBuffer && (this.sharedBuffer = Ot), Ot
      }
      encodeAll() {
        let tt = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
            offset: 0
          },
          et = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.sharedBuffer;
        return this.encodeFullSync(tt, et, !1)
      }
      encodeAllView(tt, et, Vt) {
        let Ot = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : this.sharedBuffer;
        const qt = Vt.offset;
        return Ot = this.encodeFullSync(Vt, Ot, !0, tt, qt), AO(Ot.subarray(0, et), Ot.subarray(qt, Vt.offset))
      }
      ensureCapacity(tt, et) {
        if (et + iO.BUFFER_SIZE <= tt.byteLength) return tt;
        const Vt = Math.ceil((et + iO.BUFFER_SIZE) / iO.BUFFER_SIZE) * iO.BUFFER_SIZE,
          Ot = new Uint8Array(Vt);
        return Ot.set(tt.subarray(0, et)), tt === this.sharedBuffer && (this.sharedBuffer = Ot), Ot
      }
      encodeView(tt, et, Vt) {
        let Ot = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : this.sharedBuffer,
          Dt = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4];
        const mt = Vt.offset;
        this._emitStreamPriority(tt);
        for (const jt of tt.changes.keys()) {
          const et = tt.changes.get(jt),
            Dt = this.root.changeTrees[jt];
          if (void 0 === Dt) {
            tt.changes.delete(jt);
            continue
          }
          if (0 === et.size) continue;
          const mt = Dt.encDescriptor,
            Ht = mt.encoder,
            Xt = mt.metadata,
            Qt = Dt.ref,
            Et = Dt.refTarget;
          Ot = this.ensureCapacity(Ot, Vt.offset), Ot[Vt.offset++] = 255, Ve.number(Ot, Qt[dt], Vt);
          for (const [jt, ft] of et) {
            let et;
            if (-1 === jt) {
              const tt = Et.tmpItems,
                et = Et.deletedIndexes;
              for (let mt = 0; mt < tt.length; mt++) void 0 !== tt[mt] && !0 !== et[mt] && Ht(this, Ot, Dt, mt, qt.ADD, Vt, !1, !0, Xt);
              continue
            }
            if ("number" === typeof jt) et = jt;
            else {
              const Vt = jt.indexInParent(Qt);
              if (void 0 === Vt) continue;
              if (et = Vt, ft === qt.ADD && Dt.getChange(et) === qt.DELETE) {
                tt.changes.delete(jt.ref[dt]);
                continue
              }
            }
            Ht(this, Ot, Dt, et, void 0 !== Et[lt](et) && ft || qt.DELETE, Vt, !1, !0, Xt)
          }
        }
        return tt.changes.clear(), Ot = this.encode(Vt, tt, Ot), Dt ? AO(Ot.subarray(0, et), Ot.subarray(mt, Vt.offset)) : Ot.subarray(mt, Vt.offset)
      }
      encodeUnreliableView(tt, et, Vt) {
        let Ot = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : this.sharedBuffer;
        const qt = Vt.offset;
        return Ot = this.encodeUnreliable(Vt, tt, Ot, qt), AO(Ot.subarray(0, et), Ot.subarray(qt, Vt.offset))
      }
      _emitStreamBroadcast(tt, et) {
        const Vt = this.root.streamTrees;
        for (const Ot of Vt) {
          const Vt = Ot,
            Dt = Vt[wt],
            mt = Vt[dt];
          if (void 0 === mt) continue;
          const jt = Vt._stream,
            Ht = jt.broadcastDeletes,
            Xt = jt.broadcastPending,
            Qt = jt.sentBroadcast,
            Et = Ht.size > 0,
            ft = Xt.size > 0,
            yt = Dt.encDescriptor,
            Nt = yt.encoder,
            Mt = yt.metadata;
          if (Et || ft) {
            if (tt[et.offset++] = 255, Ve.number(tt, mt, et), Et) {
              for (const Vt of Ht) Nt(this, tt, Dt, Vt, qt.DELETE, et, !1, !1, Mt);
              Ht.clear()
            }
            const Ot = jt.maxPerTick,
              ft = [];
            let yt = 0;
            const bt = [];
            for (const mt of Xt) {
              if (yt >= Ot) break;
              const dt = Vt[lt](mt);
              void 0 !== dt ? (Nt(this, tt, Dt, mt, qt.ADD, et, !1, !1, Mt), Qt.add(mt), ft.push(dt), bt.push(mt), yt++) : bt.push(mt)
            }
            for (const tt of bt) Xt.delete(tt);
            for (const Vt of ft) {
              const Ot = Vt[wt];
              if (void 0 === Ot) continue;
              const Dt = Vt[dt];
              if (void 0 === Dt) continue;
              tt[et.offset++] = 255, Ve.number(tt, Dt, et);
              const mt = Ot.encDescriptor,
                jt = mt.encoder,
                Ht = mt.metadata;
              Ot.forEachLive((Vt => {
                xe.hasUnreliableAtIndex(Ht, Vt) || jt(this, tt, Ot, Vt, qt.ADD, et, !1, !1, Ht)
              }))
            }
          }
          for (const Ot of Qt) {
            const qt = Vt[lt](Ot);
            if (void 0 === qt) continue;
            const Dt = qt[wt];
            if (void 0 === Dt || !Dt.has()) continue;
            const mt = qt[dt];
            if (void 0 === mt) continue;
            tt[et.offset++] = 255, Ve.number(tt, mt, et);
            const jt = Dt.encDescriptor,
              Ht = jt.encoder,
              Xt = jt.metadata;
            Dt.forEach(((Vt, Ot) => {
              Vt < 0 || xe.hasUnreliableAtIndex(Xt, Vt) || Ht(this, tt, Dt, Vt, Ot, et, !1, !1, Xt)
            }))
          }
        }
      }
      _emitStreamPriority(tt) {
        const et = this.root.streamTrees;
        if (0 === et.size) return;
        const Vt = tt.id;
        for (const Ot of et) {
          const et = Ot,
            Dt = et._stream,
            mt = Dt.pendingByView.get(Vt);
          if (void 0 === mt || 0 === mt.size) continue;
          const jt = Dt.priorityByView?.get(Vt),
            Ht = void 0 !== jt,
            Xt = Dt.priority,
            Qt = Dt.maxPerTick,
            Et = [],
            ft = [];
          if (Ht || void 0 !== Xt) {
            const Vt = [],
              Ot = [];
            let qt = 0;
            for (const Dt of mt) {
              const mt = et[lt](Dt);
              if (void 0 === mt) {
                ft.push(Dt);
                continue
              }
              const dt = Ht ? jt(mt) : Xt(tt, mt);
              if (qt < Qt) {
                let tt = qt++;
                for (; tt > 0 && Ot[tt - 1] < dt;) Ot[tt] = Ot[tt - 1], Vt[tt] = Vt[tt - 1], tt--;
                Ot[tt] = dt, Vt[tt] = Dt
              } else if (dt > Ot[Qt - 1]) {
                let tt = Qt - 1;
                for (; tt > 0 && Ot[tt - 1] < dt;) Ot[tt] = Ot[tt - 1], Vt[tt] = Vt[tt - 1], tt--;
                Ot[tt] = dt, Vt[tt] = Dt
              }
            }
            for (let tt = 0; tt < qt; tt++) Et.push(Vt[tt])
          } else
            for (const tt of mt) {
              if (Et.length >= Qt) break;
              Et.push(tt)
            }
          for (const tt of ft) mt.delete(tt);
          const yt = Et.length;
          let Nt = Dt.sentByView.get(Vt);
          void 0 === Nt && (Nt = new Set, Dt.sentByView.set(Vt, Nt));
          for (let Vt = 0; Vt < yt; Vt++) {
            const Ot = Et[Vt],
              Dt = et[lt](Ot);
            if (void 0 === Dt) {
              mt.delete(Ot);
              continue
            }
            tt._addImmediate(Dt);
            const jt = Dt[wt];
            if (void 0 !== jt) {
              const et = Dt[dt];
              let Vt = tt.changes.get(et);
              void 0 === Vt && (Vt = new Map, tt.changes.set(et, Vt));
              const Ot = jt.metadata;
              jt.forEachLive((tt => {
                xe.hasUnreliableAtIndex(Ot, tt) || Vt.set(tt, qt.ADD)
              }))
            }
            mt.delete(Ot), Nt.add(Ot)
          }
        }
      }
      discardChanges() {
        const tt = this.root.changes;
        let et = tt.next;
        const Vt = this.root;
        for (; et;) {
          const tt = et.next;
          et.changeTree.endEncode(), Vt.releaseNode(et), et = tt
        }
        tt.next = void 0, tt.tail = void 0
      }
      discardUnreliableChanges() {
        const tt = this.root.unreliableChanges;
        let et = tt.next;
        const Vt = this.root;
        for (; et;) {
          const tt = et.next;
          et.changeTree.endEncodeUnreliable(), Vt.releaseNode(et), et = tt
        }
        tt.next = void 0, tt.tail = void 0
      }
      tryEncodeTypeId(tt, et, Vt, Ot) {
        const qt = this.context.getTypeId(et),
          Dt = this.context.getTypeId(Vt);
        void 0 !== Dt ? qt !== Dt && (tt[Ot.offset++] = 213, Ve.number(tt, Dt, Ot)) : console.warn(`@colyseus/schema WARNING: Class "${Vt.name}" is not registered on TypeRegistry - Please either tag the class with @entity or define a @type() field.`)
      }
      get hasChanges() {
        return void 0 !== this.root.changes.next || this._hasStreamBacklog()
      }
      get _isStreamBroadcastMode() {
        return 0 === this.root.activeViews.size && this.root.streamTrees.size > 0
      }
      _hasStreamBacklog() {
        const tt = this.root;
        if (0 === tt.streamTrees.size) return !1;
        const et = 0 === tt.activeViews.size;
        for (const Vt of tt.streamTrees)
          if (et ? Ie(Vt) : Re(Vt, tt)) return !0;
        return !1
      }
      get hasUnreliableChanges() {
        return void 0 !== this.root.unreliableChanges.next
      }
    }
    class YO extends Error {
      constructor(tt) {
        super(tt), this.name = "DecodingWarning"
      }
    }
    const BO = {
      value: 0,
      enumerable: !1,
      writable: !0
    };
    class pO {
      refs = new Map;
      refCount = {};
      deletedRefs = new Set;
      callbacks = {};
      nextUniqueId = 0;
      getNextUniqueId() {
        return this.nextUniqueId++
      }
      addRef(tt, et) {
        let Vt = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        this.refs.set(tt, et), void 0 === et[dt] ? (BO.value = tt, Object.defineProperty(et, dt, BO)) : et[dt] !== tt && (et[dt] = tt), Vt && (this.refCount[tt] = (this.refCount[tt] || 0) + 1), this.deletedRefs.has(tt) && this.deletedRefs.delete(tt)
      }
      removeRef(tt) {
        const et = this.refCount[tt];
        if (void 0 !== et)
          if (0 !== et)(this.refCount[tt] = et - 1) <= 0 && this.deletedRefs.add(tt);
          else try {
            const et = this.refs.get(tt);
            throw new YO(`trying to remove refId '${tt}' with 0 refCount (${et.constructor.name}: ${JSON.stringify(et)})`)
          } catch (mq) {
            console.warn(mq)
          } else try {
            throw new YO("trying to remove refId that doesn't exist: " + tt)
          } catch (mq) {
            console.warn(mq)
          }
      }
      clearRefs() {
        this.refs.clear(), this.deletedRefs.clear(), this.callbacks = {}, this.refCount = {}
      }
      garbageCollectDeletedRefs() {
        this.deletedRefs.forEach((tt => {
          if (this.refCount[tt] > 0) return;
          const et = this.refs.get(tt),
            Vt = et.constructor[Symbol.metadata];
          if (null != Vt)
            for (const Ot in Vt) {
              const tt = et[Vt[Ot].name];
              if ("object" === typeof tt && tt) {
                const et = tt[dt];
                void 0 === et || this.deletedRefs.has(et) || this.removeRef(et)
              }
            } else "function" === typeof et[yt] && Array.from(et.values()).forEach((tt => {
              const et = tt[dt];
              void 0 === et || this.deletedRefs.has(et) || this.removeRef(et)
            }));
          this.refs.delete(tt), delete this.refCount[tt], delete this.callbacks[tt]
        })), this.deletedRefs.clear()
      }
      addCallback(tt, et, Vt) {
        if (void 0 === tt) {
          const tt = "number" === typeof et ? qt[et] : et;
          throw new Error(`Can't addCallback on '${tt}' (refId is undefined)`)
        }
        return this.callbacks[tt] || (this.callbacks[tt] = {}), this.callbacks[tt][et] || (this.callbacks[tt][et] = []), this.callbacks[tt][et].push(Vt), () => this.removeCallback(tt, et, Vt)
      }
      removeCallback(tt, et, Vt) {
        const Ot = this.callbacks?.[tt]?.[et]?.indexOf(Vt);
        void 0 !== Ot && -1 !== Ot && PO(this.callbacks[tt][et], Ot)
      }
    }
    class xO {
      context;
      state;
      root;
      currentRefId = 0;
      kR;
      resyncVisited = null;
      resyncDamaged = !1;
      constructor(tt, et) {
        this.setState(tt), this.context = et || new re(tt.constructor)
      }
      setState(tt) {
        this.state = tt, this.root = new pO, this.root.addRef(0, tt)
      }
      decode(tt) {
        let et = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
            offset: 0
          },
          Vt = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : this.state;
        const qt = void 0 !== this.kR ? [] : null,
          Dt = this.root,
          mt = tt.byteLength;
        let dt = Vt.constructor[Xt];
        for (this.currentRefId = 0; et.offset < mt;) {
          if (tt[et.offset] == Ot) {
            et.offset++, Vt[Jt]?.();
            const Ot = be.number(tt, et),
              qt = Dt.refs.get(Ot);
            qt ? (Vt = qt, dt = Vt.constructor[Xt], this.currentRefId = Ot) : (console.error(`"refId" not found: ${Ot}`, {
              previousRef: Vt,
              previousRefId: this.currentRefId
            }), console.warn("Please report this issue to the developers."), this.skipCurrentStructure(tt, et, mt));
            continue
          } - 1 !== dt(this, tt, et, Vt, qt) || (console.warn("@colyseus/schema: definition mismatch"), this.skipCurrentStructure(tt, et, mt))
        }
        return Vt[Jt]?.(), null !== this.resyncVisited && function(tt, et) {
          tt.resyncDamaged ? console.warn("@colyseus/schema: resync sweep skipped \u2014 parts of the payload could not be decoded. Stale entries may persist until the next resync.") : rV(tt, tt.state, new Set, et)
        }(this, qt), null !== qt && this.kR?.(qt), Dt.garbageCollectDeletedRefs(), qt
      }
      decodeResync(tt) {
        let et = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
          offset: 0
        };
        this.resyncVisited = new Map, this.resyncDamaged = !1;
        try {
          return this.decode(tt, et)
        } finally {
          this.resyncVisited = null
        }
      }
      skipCurrentStructure(tt, et, Vt) {
        null !== this.resyncVisited && (this.resyncDamaged = !0);
        const qt = {
          offset: et.offset
        };
        for (; et.offset < Vt && (tt[et.offset] !== Ot || (qt.offset = et.offset + 1, !this.root.refs.has(be.number(tt, qt))));) et.offset++
      }
      getInstanceType(tt, et, Vt) {
        let Ot;
        if (213 === tt[et.offset]) {
          et.offset++;
          const Vt = be.number(tt, et);
          Ot = this.context.get(Vt)
        }
        return Ot || Vt
      }
      createInstanceOfType(tt) {
        return tt.initializeForDecoder()
      }
      removeChildRefs(tt, et) {
        const Vt = "string" !== typeof tt[yt],
          Ot = tt[dt];
        tt.forEach(((Dt, mt) => {
          et?.push({
            ref: tt,
            refId: Ot,
            op: qt.DELETE,
            field: mt,
            value: void 0,
            previousValue: Dt
          }), Vt && this.root.removeRef(Dt[dt])
        }))
      }
    }
    const TO = WO({
        min: fO.float64(),
        max: fO.float64(),
        bits: fO.uint8(),
        mode: fO.uint8()
      }, "QuantizedDescriptor"),
      gO = WO({
        name: fO.string(),
        type: fO.string(),
        referencedType: fO.number(),
        childPrimitive: fO.string(),
        quantized: fO.ref(TO).optional()
      }, "ReflectionField"),
      sO = WO({
        id: fO.number(),
        extendsId: fO.number(),
        fields: fO.array(gO)
      }, "ReflectionType"),
      nO = WO({
        types: fO.array(sO),
        rootType: fO.number()
      }, "Reflection");

    function tq(tt) {
      const et = tt.root,
        Vt = et.callbacks,
        Ot = new WeakMap;
      let Dt;

      function mt(tt, Vt) {
        let Ht = Vt.instance?.constructor[Symbol.metadata] || tt,
          Xt = Vt.instance && "function" === typeof Vt.instance.forEach || tt && !cO.is(tt);
        if (Ht && !Xt) {
          const tt = function(tt, qt, mt, jt) {
            return jt && void 0 !== Vt.instance[qt] && !Ot.has(Dt) && mt(Vt.instance[qt], void 0), et.addCallback(tt[dt], qt, mt)
          };
          return new Proxy({
            listen: function(et, qt) {
              let mt = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
              if (Vt.instance) return tt(Vt.instance, et, qt, mt);
              {
                let dt = () => {};
                return Vt.onInstanceAvailable(((Vt, jt) => {
                  dt = tt(Vt, et, qt, mt && jt && !Ot.has(Dt))
                })), () => dt()
              }
            },
            onChange: function(tt) {
              return et.addCallback(Vt.instance[dt], qt.REPLACE, tt)
            },
            bindTo: function(tt, Ot) {
              return Ot || (Ot = Object.keys(Ht).map((tt => Ht[tt].name))), et.addCallback(Vt.instance[dt], qt.REPLACE, (() => {
                Ot.forEach((et => tt[et] = Vt.instance[et]))
              }))
            }
          }, {
            get(tt, et) {
              const Ot = Ht[Ht[et]];
              if (Ot) {
                const tt = Vt.instance?.[et],
                  qt = Ot => {
                    const qt = jt(Vt.instance).listen(et, ((tt, et) => {
                      Ot(tt, !1), qt?.()
                    }), !1);
                    void 0 !== tt?.[dt] && Ot(tt, !0)
                  };
                return mt(Ot.type, {
                  instance: void 0 !== tt?.[dt] && tt,
                  parentInstance: Vt.instance,
                  onInstanceAvailable: qt
                })
              }
              return tt[et]
            },
            has: (tt, et) => void 0 !== Ht[et],
            set(tt, et, Vt) {
              throw new Error("not allowed")
            },
            deleteProperty(tt, et) {
              throw new Error("not allowed")
            }
          })
        } {
          const tt = function(tt, Vt, mt) {
              return mt && tt.forEach(((tt, et) => Vt(tt, et))), et.addCallback(tt[dt], qt.ADD, ((tt, et) => {
                Ot.set(Vt, !0), Dt = Vt, Vt(tt, et), Ot.delete(Vt), Dt = void 0
              }))
            },
            mt = function(tt, Vt) {
              return et.addCallback(tt[dt], qt.DELETE, Vt)
            },
            jt = function(tt, Vt) {
              return et.addCallback(tt[dt], qt.REPLACE, Vt)
            };
          return new Proxy({
            qJ: function(et) {
              let qt = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
              if (Vt.instance) return tt(Vt.instance, et, qt && !Ot.has(Dt));
              if (Vt.onInstanceAvailable) {
                let mt = () => {};
                return Vt.onInstanceAvailable(((Vt, dt) => {
                  mt = tt(Vt, et, qt && dt && !Ot.has(Dt))
                })), () => mt()
              }
            },
            nS: function(tt) {
              if (Vt.instance) return mt(Vt.instance, tt);
              if (Vt.onInstanceAvailable) {
                let et = () => {};
                return Vt.onInstanceAvailable((Vt => {
                  et = mt(Vt, tt)
                })), () => et()
              }
            },
            onChange: function(tt) {
              if (Vt.instance) return jt(Vt.instance, tt);
              if (Vt.onInstanceAvailable) {
                let et = () => {};
                return Vt.onInstanceAvailable((Vt => {
                  et = jt(Vt, tt)
                })), () => et()
              }
            }
          }, {
            get(tt, et) {
              if (!tt[et]) throw new Error(`Can't access '${et}' through callback proxy. access the instance directly.`);
              return tt[et]
            },
            has: (tt, et) => void 0 !== tt[et],
            set(tt, et, Vt) {
              throw new Error("not allowed")
            },
            deleteProperty(tt, et) {
              throw new Error("not allowed")
            }
          })
        }
      }

      function jt(tt) {
        return mt(void 0, {
          instance: tt
        })
      }
      return tt.kR = function(tt) {
        const et = new Set;
        for (let Ot = 0, Dt = tt.length; Ot < Dt; Ot++) {
          const Dt = tt[Ot],
            mt = Dt.refId,
            jt = Dt.ref,
            Ht = Vt[mt];
          if (Ht) {
            if ((Dt.op & qt.DELETE) === qt.DELETE && cO.isSchema(Dt.previousValue)) {
              const tt = Vt[Dt.previousValue[dt]]?.[qt.DELETE];
              for (let et = tt?.length - 1; et >= 0; et--) tt[et]()
            }
            if (cO.isSchema(jt)) {
              if (!et.has(mt)) {
                const tt = Ht?.[qt.REPLACE];
                for (let et = tt?.length - 1; et >= 0; et--) tt[et]()
              }
              if (Ht.hasOwnProperty(Dt.field)) {
                const tt = Ht[Dt.field];
                for (let et = tt?.length - 1; et >= 0; et--) tt[et](Dt.value, Dt.previousValue)
              }
            } else {
              if ((Dt.op & qt.DELETE) === qt.DELETE) {
                if (void 0 !== Dt.previousValue) {
                  const tt = Ht[qt.DELETE];
                  for (let et = tt?.length - 1; et >= 0; et--) tt[et](Dt.previousValue, Dt.dynamicIndex ?? Dt.field)
                }
                if ((Dt.op & qt.ADD) === qt.ADD) {
                  const tt = Ht[qt.ADD];
                  for (let et = tt?.length - 1; et >= 0; et--) tt[et](Dt.value, Dt.dynamicIndex ?? Dt.field)
                }
              } else if ((Dt.op & qt.ADD) === qt.ADD && Dt.previousValue !== Dt.value) {
                const tt = Ht[qt.ADD];
                for (let et = tt?.length - 1; et >= 0; et--) tt[et](Dt.value, Dt.dynamicIndex ?? Dt.field)
              }
              if (Dt.value !== Dt.previousValue && (void 0 !== Dt.value || void 0 !== Dt.previousValue)) {
                const tt = Ht[qt.REPLACE];
                for (let et = tt?.length - 1; et >= 0; et--) tt[et](Dt.value, Dt.dynamicIndex ?? Dt.field)
              }
            }
            et.add(mt)
          }
        }
      }, jt
    }

    function eq(tt, et) {
      tt.kR = et
    }
    nO.encode = function(tt) {
      let et = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
        offset: 0
      };
      const Vt = tt.context,
        Ot = new nO,
        qt = new iO(Ot),
        Dt = Vt.schemas.get(tt.state.constructor);
      Dt > 0 && (Ot.rootType = Dt);
      const mt = new Set,
        dt = {},
        jt = tt => {
          if (void 0 === tt.extendsId || mt.has(tt.extendsId)) {
            mt.add(tt.id), Ot.types.push(tt);
            const et = dt[tt.id];
            void 0 !== et && (delete dt[tt.id], et.forEach((tt => jt(tt))))
          } else void 0 === dt[tt.extendsId] && (dt[tt.extendsId] = []), dt[tt.extendsId].push(tt)
        };
      Vt.schemas.forEach(((tt, et) => {
        const Ot = new sO;
        Ot.id = Number(tt);
        const qt = Object.getPrototypeOf(et);
        qt !== cO && (Ot.extendsId = Vt.schemas.get(qt));
        const Dt = et[Symbol.metadata];
        if (Dt !== qt[Symbol.metadata]) {
          const tt = Dt[Wt] ?? -1;
          for (let et = 0; et <= tt; et++) {
            const tt = Dt[et];
            if (void 0 === tt) continue;
            const qt = tt.name;
            if (!Object.prototype.hasOwnProperty.call(Dt, qt)) continue;
            const mt = new gO;
            let dt;
            if (mt.name = qt, "string" === typeof tt.type) dt = tt.type;
            else if (ke(tt.type)) {
              const et = tt.type.quantized;
              dt = "quantized";
              const Vt = new TO;
              Vt.min = et.min, Vt.max = et.max, Vt.bits = et.bits, Vt.mode = et.wrap ? 1 : 0, mt.quantized = Vt
            } else {
              let et;
              cO.is(tt.type) ? (dt = "ref", et = tt.type) : (dt = Object.keys(tt.type)[0], "string" === typeof tt.type[dt] ? mt.childPrimitive = tt.type[dt] : et = tt.type[dt]), mt.referencedType = et ? Vt.getTypeId(et) : -1
            }
            mt.type = dt, Ot.fields.push(mt)
          }
        }
        jt(Ot)
      }));
      for (const Ht in dt) dt[Ht].forEach((tt => Ot.types.push(tt)));
      return qt.encodeAll(et).slice(0, et.offset)
    }, nO.decode = function(tt, et) {
      const Vt = new nO;
      new xO(Vt).decode(tt, et);
      const Ot = new re;
      Vt.types.forEach((tt => {
        const et = Ot.get(tt.extendsId) ?? cO,
          Vt = class extends et {};
        re.register(Vt), Ot.add(Vt, tt.id)
      }), {});
      Vt.types.forEach((tt => {
        const et = Ot.get(tt.id),
          qt = xe.initialize(et),
          Dt = [];
        let mt = tt;
        do {
          Dt.push(mt), mt = Vt.types.find((tt => tt.id === mt.extendsId))
        } while (mt);
        let dt = 0;
        Dt.reverse().forEach((tt => {
          ((tt, et, Vt) => {
            et.fields.forEach(((et, qt) => {
              const Dt = Vt + qt;
              if (void 0 !== et.quantized) {
                const Vt = et.quantized;
                xe.addField(tt, Dt, et.name, {
                  quantized: Fe({
                    min: Vt.min,
                    max: Vt.max,
                    bits: Vt.bits,
                    mode: 1 === Vt.mode ? "wrap" : "clamp"
                  })
                })
              } else if (void 0 !== et.referencedType) {
                const Vt = et.type,
                  qt = Ot.get(et.referencedType) ?? et.childPrimitive;
                "ref" === Vt ? xe.addField(tt, Dt, et.name, qt) : xe.addField(tt, Dt, et.name, {
                  [Vt]: qt
                })
              } else xe.addField(tt, Dt, et.name, et.type)
            }))
          })(qt, tt, dt), dt += tt.fields.length
        }))
      }));
      const qt = new(Ot.get(Vt.rootType || 0));
      return new xO(qt, Ot)
    }, nO.makeEncodable = function(tt) {
      const et = tt[Symbol.metadata];
      if (!et) return tt;
      const Vt = et[Wt];
      if (void 0 === Vt) return tt;
      for (let Ot = 0; Ot <= Vt; Ot++) {
        const Vt = et[Ot];
        Vt && xe.defineField(tt, et, Ot, Vt.name, Vt.type)
      }
      return Object.prototype.hasOwnProperty.call(tt, ht) && delete tt[ht], tt
    };
    class Vq {
      xE;
      uniqueRefIds = new Set;
      isTriggering = !1;
      constructor(tt) {
        this.xE = tt, this.xE.kR = this.kR.bind(this)
      }
      get callbacks() {
        return this.xE.root.callbacks
      }
      get state() {
        return this.xE.state
      }
      addCallback(tt, et, Vt) {
        return this.xE.root.addCallback(tt, et, Vt)
      }
      addCallbackOrWaitCollectionAvailable(tt, et, Vt, Ot) {
        let Dt = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4],
          mt = () => {};
        const jt = () => mt(),
          Ht = tt[et];
        if (Ht && void 0 !== Ht[dt]) return Dt = Dt && !1 === this.isTriggering, Vt === qt.ADD && Dt && Ht.forEach(((tt, et) => {
          Ot(tt, et)
        })), this.addCallback(Ht[dt], Vt, Ot);
        {
          let qt;
          return qt = this.addCallback(tt[dt], et, ((tt, et) => {
            null !== tt && void 0 !== tt && (qt(), mt = this.addCallback(tt[dt], Vt, Ot))
          })), mt = qt, jt
        }
      }
      listen() {
        return "string" === typeof(arguments.length <= 0 ? void 0 : arguments[0]) ? this.listenInstance(this.state, arguments.length <= 0 ? void 0 : arguments[0], arguments.length <= 1 ? void 0 : arguments[1], arguments.length <= 2 ? void 0 : arguments[2]) : this.listenInstance(arguments.length <= 0 ? void 0 : arguments[0], arguments.length <= 1 ? void 0 : arguments[1], arguments.length <= 2 ? void 0 : arguments[2], arguments.length <= 3 ? void 0 : arguments[3])
      }
      listenInstance(tt, et, Vt) {
        let Ot = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
        Ot = Ot && !1 === this.isTriggering;
        const qt = tt[et];
        return Ot && null !== qt && void 0 !== qt && Vt(qt, void 0), this.addCallback(tt[dt], et, Vt)
      }
      onChange() {
        if (2 === arguments.length && "string" !== typeof(arguments.length <= 0 ? void 0 : arguments[0])) {
          const tt = arguments.length <= 0 ? void 0 : arguments[0],
            et = arguments.length <= 1 ? void 0 : arguments[1];
          return this.addCallback(tt[dt], qt.REPLACE, et)
        }
        return "string" === typeof(arguments.length <= 0 ? void 0 : arguments[0]) ? this.addCallbackOrWaitCollectionAvailable(this.state, arguments.length <= 0 ? void 0 : arguments[0], qt.REPLACE, arguments.length <= 1 ? void 0 : arguments[1]) : this.addCallbackOrWaitCollectionAvailable(arguments.length <= 0 ? void 0 : arguments[0], arguments.length <= 1 ? void 0 : arguments[1], qt.REPLACE, arguments.length <= 2 ? void 0 : arguments[2])
      }
      qJ() {
        return "string" === typeof(arguments.length <= 0 ? void 0 : arguments[0]) ? this.addCallbackOrWaitCollectionAvailable(this.state, arguments.length <= 0 ? void 0 : arguments[0], qt.ADD, arguments.length <= 1 ? void 0 : arguments[1], !1 !== (arguments.length <= 2 ? void 0 : arguments[2])) : this.addCallbackOrWaitCollectionAvailable(arguments.length <= 0 ? void 0 : arguments[0], arguments.length <= 1 ? void 0 : arguments[1], qt.ADD, arguments.length <= 2 ? void 0 : arguments[2], !1 !== (arguments.length <= 3 ? void 0 : arguments[3]))
      }
      nS() {
        return "string" === typeof(arguments.length <= 0 ? void 0 : arguments[0]) ? this.addCallbackOrWaitCollectionAvailable(this.state, arguments.length <= 0 ? void 0 : arguments[0], qt.DELETE, arguments.length <= 1 ? void 0 : arguments[1]) : this.addCallbackOrWaitCollectionAvailable(arguments.length <= 0 ? void 0 : arguments[0], arguments.length <= 1 ? void 0 : arguments[1], qt.DELETE, arguments.length <= 2 ? void 0 : arguments[2])
      }
      bindTo(tt, et, Vt) {
        let Ot = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
        const Dt = tt.constructor[Symbol.metadata];
        Vt || (Vt = Object.keys(Dt).filter((tt => !isNaN(Number(tt)))).map((tt => Dt[tt].name)));
        const mt = () => {
          for (const Ot of Vt) {
            const Vt = tt[Ot];
            void 0 !== Vt && (et[Ot] = Vt)
          }
        };
        return Ot && mt(), this.addCallback(tt[dt], qt.REPLACE, mt)
      }
      kR(tt) {
        this.uniqueRefIds.clear(), this.isTriggering = !0;
        for (let et = 0, Vt = tt.length; et < Vt; et++) {
          const Vt = tt[et],
            Ot = Vt.refId,
            Dt = Vt.ref,
            mt = this.callbacks[Ot];
          if (mt) {
            if ((Vt.op & qt.DELETE) === qt.DELETE && cO.isSchema(Vt.previousValue)) {
              const tt = Vt.previousValue[dt],
                et = this.callbacks[tt]?.[qt.DELETE];
              if (et)
                for (let Vt = et.length - 1; Vt >= 0; Vt--) try {
                  et[Vt]()
                } catch (mq) {
                  console.error(mq)
                }
            }
            if (cO.isSchema(Dt)) {
              if (!this.uniqueRefIds.has(Ot)) {
                const tt = mt[qt.REPLACE];
                if (tt)
                  for (let et = tt.length - 1; et >= 0; et--) try {
                    tt[et]()
                  } catch (mq) {
                    console.error(mq)
                  }
              }
              const tt = mt[Vt.field];
              if (tt)
                for (let et = tt.length - 1; et >= 0; et--) try {
                  tt[et](Vt.value, Vt.previousValue)
                } catch (mq) {
                  console.error(mq)
                }
            } else {
              const tt = Vt.dynamicIndex ?? Vt.field;
              if ((Vt.op & qt.DELETE) === qt.DELETE) {
                if (void 0 !== Vt.previousValue) {
                  const et = mt[qt.DELETE];
                  if (et)
                    for (let Ot = et.length - 1; Ot >= 0; Ot--) try {
                      et[Ot](Vt.previousValue, tt)
                    } catch (mq) {
                      console.error(mq)
                    }
                }
                if ((Vt.op & qt.ADD) === qt.ADD) {
                  const et = mt[qt.ADD];
                  if (et)
                    for (let Ot = et.length - 1; Ot >= 0; Ot--) try {
                      et[Ot](Vt.value, tt)
                    } catch (mq) {
                      console.error(mq)
                    }
                }
              } else if ((Vt.op & qt.ADD) === qt.ADD && Vt.previousValue !== Vt.value) {
                const et = mt[qt.ADD];
                if (et)
                  for (let Ot = et.length - 1; Ot >= 0; Ot--) try {
                    et[Ot](Vt.value, tt)
                  } catch (mq) {
                    console.error(mq)
                  }
              }
              if (Vt.value !== Vt.previousValue) {
                const et = mt[qt.REPLACE];
                if (et)
                  for (let Ot = et.length - 1; Ot >= 0; Ot--) try {
                    et[Ot](tt, Vt.value)
                  } catch (mq) {
                    console.error(mq)
                  }
              }
            }
            this.uniqueRefIds.add(Ot)
          }
        }
        this.isTriggering = !1
      }
    }
    const Oq = {
      get(tt) {
        if (tt instanceof xO) return new Vq(tt);
        if ("xE" in tt.ZN) return new Vq(tt.ZN.xE);
        throw new Error("Invalid room or decoder")
      },
      getLegacy(tt) {
        if (tt instanceof xO) return tq(tt);
        if ("xE" in tt.ZN) return tq(tt.ZN.xE);
        throw new Error("Invalid room or decoder")
      },
      getRawChanges: (tt, et) => eq(tt, et)
    };
    class qq {
      _free = [];
      _factory;
      _maxSize;
      constructor(tt) {
        let et = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        this._factory = tt, this._maxSize = et.maxSize ?? 1 / 0;
        const Vt = et.preallocate ?? 0;
        for (let Ot = 0; Ot < Vt; Ot++) this._free.push(tt())
      }
      acquire() {
        return this._free.length > 0 ? this._free.pop() : this._factory()
      }
      release(tt) {
        cO.reset(tt), this._free.length < this._maxSize && this._free.push(tt)
      }
      get size() {
        return this._free.length
      }
    }

    function Dq(tt) {
      return new qq((() => new tt), arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {})
    }
    ue("map", {
      constructor: DO
    }), ue("array", {
      constructor: OO
    }), ue("set", {
      constructor: dO
    }), ue("collection", {
      constructor: mO
    })
  },
  9324: (tt, et, Vt) => {
    Vt.r(et), Vt.d(et, {
      __addDisposableResource: () => kt,
      __assign: () => Dt,
      __asyncDelegator: () => vt,
      __asyncGenerator: () => ht,
      __asyncValues: () => Wt,
      __await: () => Kt,
      __awaiter: () => ft,
      __classPrivateFieldGet: () => Zt,
      __classPrivateFieldIn: () => Ft,
      __classPrivateFieldSet: () => Lt,
      __createBinding: () => yt,
      __decorate: () => dt,
      __disposeResources: () => zt,
      __esDecorate: () => Ht,
      __exportStar: () => Nt,
      __extends: () => qt,
      __generator: () => wt,
      __importDefault: () => Pt,
      __importStar: () => It,
      __makeTemplateObject: () => St,
      __metadata: () => Et,
      __param: () => jt,
      __propKey: () => Qt,
      __read: () => bt,
      __rest: () => mt,
      __rewriteRelativeImportExtension: () => ot,
      __runInitializers: () => Xt,
      __setFunctionName: () => lt,
      __spread: () => Jt,
      __spreadArray: () => ut,
      __spreadArrays: () => Ct,
      __values: () => Mt,
      default: () => rt
    });
    var Ot = function(tt, et) {
      return Ot = Object.setPrototypeOf || {
        __proto__: []
      }
      instanceof Array && function(tt, et) {
        tt.__proto__ = et
      } || function(tt, et) {
        for (var Vt in et) Object.prototype.hasOwnProperty.call(et, Vt) && (tt[Vt] = et[Vt])
      }, Ot(tt, et)
    };

    function qt(tt, et) {
      if ("function" !== typeof et && null !== et) throw new TypeError("Class extends value " + String(et) + " is not a constructor or null");

      function Vt() {
        this.constructor = tt
      }
      Ot(tt, et), tt.prototype = null === et ? Object.create(et) : (Vt.prototype = et.prototype, new Vt)
    }
    var Dt = function() {
      return Dt = Object.assign || function(tt) {
        for (var et, Vt = 1, Ot = arguments.length; Vt < Ot; Vt++)
          for (var qt in et = arguments[Vt]) Object.prototype.hasOwnProperty.call(et, qt) && (tt[qt] = et[qt]);
        return tt
      }, Dt.apply(this, arguments)
    };

    function mt(tt, et) {
      var Vt = {};
      for (var Ot in tt) Object.prototype.hasOwnProperty.call(tt, Ot) && et.indexOf(Ot) < 0 && (Vt[Ot] = tt[Ot]);
      if (null != tt && "function" === typeof Object.getOwnPropertySymbols) {
        var qt = 0;
        for (Ot = Object.getOwnPropertySymbols(tt); qt < Ot.length; qt++) et.indexOf(Ot[qt]) < 0 && Object.prototype.propertyIsEnumerable.call(tt, Ot[qt]) && (Vt[Ot[qt]] = tt[Ot[qt]])
      }
      return Vt
    }

    function dt(tt, et, Vt, Ot) {
      var qt, Dt = arguments.length,
        mt = Dt < 3 ? et : null === Ot ? Ot = Object.getOwnPropertyDescriptor(et, Vt) : Ot;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) mt = Reflect.decorate(tt, et, Vt, Ot);
      else
        for (var dt = tt.length - 1; dt >= 0; dt--)(qt = tt[dt]) && (mt = (Dt < 3 ? qt(mt) : Dt > 3 ? qt(et, Vt, mt) : qt(et, Vt)) || mt);
      return Dt > 3 && mt && Object.defineProperty(et, Vt, mt), mt
    }

    function jt(tt, et) {
      return function(Vt, Ot) {
        et(Vt, Ot, tt)
      }
    }

    function Ht(tt, et, Vt, Ot, qt, Dt) {
      function mt(tt) {
        if (void 0 !== tt && "function" !== typeof tt) throw new TypeError("Function expected");
        return tt
      }
      for (var dt, jt = Ot.kind, Ht = "getter" === jt ? "get" : "setter" === jt ? "set" : "value", Xt = !et && tt ? Ot.static ? tt : tt.prototype : null, Qt = et || (Xt ? Object.getOwnPropertyDescriptor(Xt, Ot.name) : {}), lt = !1, Et = Vt.length - 1; Et >= 0; Et--) {
        var ft = {};
        for (var wt in Ot) ft[wt] = "access" === wt ? {} : Ot[wt];
        for (var wt in Ot.access) ft.access[wt] = Ot.access[wt];
        ft.addInitializer = function(tt) {
          if (lt) throw new TypeError("Cannot add initializers after decoration has completed");
          Dt.push(mt(tt || null))
        };
        var yt = (0, Vt[Et])("accessor" === jt ? {
          get: Qt.get,
          set: Qt.set
        } : Qt[Ht], ft);
        if ("accessor" === jt) {
          if (void 0 === yt) continue;
          if (null === yt || "object" !== typeof yt) throw new TypeError("Object expected");
          (dt = mt(yt.get)) && (Qt.get = dt), (dt = mt(yt.set)) && (Qt.set = dt), (dt = mt(yt.init)) && qt.unshift(dt)
        } else(dt = mt(yt)) && ("field" === jt ? qt.unshift(dt) : Qt[Ht] = dt)
      }
      Xt && Object.defineProperty(Xt, Ot.name, Qt), lt = !0
    }

    function Xt(tt, et, Vt) {
      for (var Ot = arguments.length > 2, qt = 0; qt < et.length; qt++) Vt = Ot ? et[qt].call(tt, Vt) : et[qt].call(tt);
      return Ot ? Vt : void 0
    }

    function Qt(tt) {
      return "symbol" === typeof tt ? tt : "".concat(tt)
    }

    function lt(tt, et, Vt) {
      return "symbol" === typeof et && (et = et.description ? "[".concat(et.description, "]") : ""), Object.defineProperty(tt, "name", {
        configurable: !0,
        value: Vt ? "".concat(Vt, " ", et) : et
      })
    }

    function Et(tt, et) {
      if ("object" === typeof Reflect && "function" === typeof Reflect.metadata) return Reflect.metadata(tt, et)
    }

    function ft(tt, et, Vt, Ot) {
      return new(Vt || (Vt = Promise))((function(qt, Dt) {
        function mt(tt) {
          try {
            jt(Ot.next(tt))
          } catch (et) {
            Dt(et)
          }
        }

        function dt(tt) {
          try {
            jt(Ot.throw(tt))
          } catch (et) {
            Dt(et)
          }
        }

        function jt(tt) {
          var et;
          tt.done ? qt(tt.value) : (et = tt.value, et instanceof Vt ? et : new Vt((function(tt) {
            tt(et)
          }))).then(mt, dt)
        }
        jt((Ot = Ot.apply(tt, et || [])).next())
      }))
    }

    function wt(tt, et) {
      var Vt, Ot, qt, Dt = {
          label: 0,
          sent: function() {
            if (1 & qt[0]) throw qt[1];
            return qt[1]
          },
          trys: [],
          ops: []
        },
        mt = Object.create(("function" === typeof Iterator ? Iterator : Object).prototype);
      return mt.next = dt(0), mt.throw = dt(1), mt.return = dt(2), "function" === typeof Symbol && (mt[Symbol.iterator] = function() {
        return this
      }), mt;

      function dt(dt) {
        return function(jt) {
          return function(dt) {
            if (Vt) throw new TypeError("Generator is already executing.");
            for (; mt && (mt = 0, dt[0] && (Dt = 0)), Dt;) try {
              if (Vt = 1, Ot && (qt = 2 & dt[0] ? Ot.return : dt[0] ? Ot.throw || ((qt = Ot.return) && qt.call(Ot), 0) : Ot.next) && !(qt = qt.call(Ot, dt[1])).done) return qt;
              switch (Ot = 0, qt && (dt = [2 & dt[0], qt.value]), dt[0]) {
                case 0:
                case 1:
                  qt = dt;
                  break;
                case 4:
                  return Dt.label++, {
                    value: dt[1],
                    done: !1
                  };
                case 5:
                  Dt.label++, Ot = dt[1], dt = [0];
                  continue;
                case 7:
                  dt = Dt.ops.pop(), Dt.trys.pop();
                  continue;
                default:
                  if (!(qt = (qt = Dt.trys).length > 0 && qt[qt.length - 1]) && (6 === dt[0] || 2 === dt[0])) {
                    Dt = 0;
                    continue
                  }
                  if (3 === dt[0] && (!qt || dt[1] > qt[0] && dt[1] < qt[3])) {
                    Dt.label = dt[1];
                    break
                  }
                  if (6 === dt[0] && Dt.label < qt[1]) {
                    Dt.label = qt[1], qt = dt;
                    break
                  }
                  if (qt && Dt.label < qt[2]) {
                    Dt.label = qt[2], Dt.ops.push(dt);
                    break
                  }
                  qt[2] && Dt.ops.pop(), Dt.trys.pop();
                  continue
              }
              dt = et.call(tt, Dt)
            } catch (jt) {
              dt = [6, jt], Ot = 0
            } finally {
              Vt = qt = 0
            }
            if (5 & dt[0]) throw dt[1];
            return {
              value: dt[0] ? dt[1] : void 0,
              done: !0
            }
          }([dt, jt])
        }
      }
    }
    var yt = Object.create ? function(tt, et, Vt, Ot) {
      void 0 === Ot && (Ot = Vt);
      var qt = Object.getOwnPropertyDescriptor(et, Vt);
      qt && !("get" in qt ? !et.__esModule : qt.writable || qt.configurable) || (qt = {
        enumerable: !0,
        get: function() {
          return et[Vt]
        }
      }), Object.defineProperty(tt, Ot, qt)
    } : function(tt, et, Vt, Ot) {
      void 0 === Ot && (Ot = Vt), tt[Ot] = et[Vt]
    };

    function Nt(tt, et) {
      for (var Vt in tt) "default" === Vt || Object.prototype.hasOwnProperty.call(et, Vt) || yt(et, tt, Vt)
    }

    function Mt(tt) {
      var et = "function" === typeof Symbol && Symbol.iterator,
        Vt = et && tt[et],
        Ot = 0;
      if (Vt) return Vt.call(tt);
      if (tt && "number" === typeof tt.length) return {
        next: function() {
          return tt && Ot >= tt.length && (tt = void 0), {
            value: tt && tt[Ot++],
            done: !tt
          }
        }
      };
      throw new TypeError(et ? "Object is not iterable." : "Symbol.iterator is not defined.")
    }

    function bt(tt, et) {
      var Vt = "function" === typeof Symbol && tt[Symbol.iterator];
      if (!Vt) return tt;
      var Ot, qt, Dt = Vt.call(tt),
        mt = [];
      try {
        for (;
          (void 0 === et || et-- > 0) && !(Ot = Dt.next()).done;) mt.push(Ot.value)
      } catch (dt) {
        qt = {
          error: dt
        }
      } finally {
        try {
          Ot && !Ot.done && (Vt = Dt.return) && Vt.call(Dt)
        } finally {
          if (qt) throw qt.error
        }
      }
      return mt
    }

    function Jt() {
      for (var tt = [], et = 0; et < arguments.length; et++) tt = tt.concat(bt(arguments[et]));
      return tt
    }

    function Ct() {
      for (var tt = 0, et = 0, Vt = arguments.length; et < Vt; et++) tt += arguments[et].length;
      var Ot = Array(tt),
        qt = 0;
      for (et = 0; et < Vt; et++)
        for (var Dt = arguments[et], mt = 0, dt = Dt.length; mt < dt; mt++, qt++) Ot[qt] = Dt[mt];
      return Ot
    }

    function ut(tt, et, Vt) {
      if (Vt || 2 === arguments.length)
        for (var Ot, qt = 0, Dt = et.length; qt < Dt; qt++) !Ot && qt in et || (Ot || (Ot = Array.prototype.slice.call(et, 0, qt)), Ot[qt] = et[qt]);
      return tt.concat(Ot || Array.prototype.slice.call(et))
    }

    function Kt(tt) {
      return this instanceof Kt ? (this.v = tt, this) : new Kt(tt)
    }

    function ht(tt, et, Vt) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var Ot, qt = Vt.apply(tt, et || []),
        Dt = [];
      return Ot = Object.create(("function" === typeof AsyncIterator ? AsyncIterator : Object).prototype), mt("next"), mt("throw"), mt("return", (function(tt) {
        return function(et) {
          return Promise.resolve(et).then(tt, Ht)
        }
      })), Ot[Symbol.asyncIterator] = function() {
        return this
      }, Ot;

      function mt(tt, et) {
        qt[tt] && (Ot[tt] = function(et) {
          return new Promise((function(Vt, Ot) {
            Dt.push([tt, et, Vt, Ot]) > 1 || dt(tt, et)
          }))
        }, et && (Ot[tt] = et(Ot[tt])))
      }

      function dt(tt, et) {
        try {
          (Vt = qt[tt](et)).value instanceof Kt ? Promise.resolve(Vt.value.v).then(jt, Ht) : Xt(Dt[0][2], Vt)
        } catch (Ot) {
          Xt(Dt[0][3], Ot)
        }
        var Vt
      }

      function jt(tt) {
        dt("next", tt)
      }

      function Ht(tt) {
        dt("throw", tt)
      }

      function Xt(tt, et) {
        tt(et), Dt.shift(), Dt.length && dt(Dt[0][0], Dt[0][1])
      }
    }

    function vt(tt) {
      var et, Vt;
      return et = {}, Ot("next"), Ot("throw", (function(tt) {
        throw tt
      })), Ot("return"), et[Symbol.iterator] = function() {
        return this
      }, et;

      function Ot(Ot, qt) {
        et[Ot] = tt[Ot] ? function(et) {
          return (Vt = !Vt) ? {
            value: Kt(tt[Ot](et)),
            done: !1
          } : qt ? qt(et) : et
        } : qt
      }
    }

    function Wt(tt) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var et, Vt = tt[Symbol.asyncIterator];
      return Vt ? Vt.call(tt) : (tt = Mt(tt), et = {}, Ot("next"), Ot("throw"), Ot("return"), et[Symbol.asyncIterator] = function() {
        return this
      }, et);

      function Ot(Vt) {
        et[Vt] = tt[Vt] && function(et) {
          return new Promise((function(Ot, qt) {
            (function(tt, et, Vt, Ot) {
              Promise.resolve(Ot).then((function(et) {
                tt({
                  value: et,
                  done: Vt
                })
              }), et)
            })(Ot, qt, (et = tt[Vt](et)).done, et.value)
          }))
        }
      }
    }

    function St(tt, et) {
      return Object.defineProperty ? Object.defineProperty(tt, "raw", {
        value: et
      }) : tt.raw = et, tt
    }
    var ct = Object.create ? function(tt, et) {
        Object.defineProperty(tt, "default", {
          enumerable: !0,
          value: et
        })
      } : function(tt, et) {
        tt.default = et
      },
      Rt = function(tt) {
        return Rt = Object.getOwnPropertyNames || function(tt) {
          var et = [];
          for (var Vt in tt) Object.prototype.hasOwnProperty.call(tt, Vt) && (et[et.length] = Vt);
          return et
        }, Rt(tt)
      };

    function It(tt) {
      if (tt && tt.__esModule) return tt;
      var et = {};
      if (null != tt)
        for (var Vt = Rt(tt), Ot = 0; Ot < Vt.length; Ot++) "default" !== Vt[Ot] && yt(et, tt, Vt[Ot]);
      return ct(et, tt), et
    }

    function Pt(tt) {
      return tt && tt.__esModule ? tt : {
        default: tt
      }
    }

    function Zt(tt, et, Vt, Ot) {
      if ("a" === Vt && !Ot) throw new TypeError("Private accessor was defined without a getter");
      if ("function" === typeof et ? tt !== et || !Ot : !et.has(tt)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
      return "m" === Vt ? Ot : "a" === Vt ? Ot.call(tt) : Ot ? Ot.value : et.get(tt)
    }

    function Lt(tt, et, Vt, Ot, qt) {
      if ("m" === Ot) throw new TypeError("Private method is not writable");
      if ("a" === Ot && !qt) throw new TypeError("Private accessor was defined without a setter");
      if ("function" === typeof et ? tt !== et || !qt : !et.has(tt)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
      return "a" === Ot ? qt.call(tt, Vt) : qt ? qt.value = Vt : et.set(tt, Vt), Vt
    }

    function Ft(tt, et) {
      if (null === et || "object" !== typeof et && "function" !== typeof et) throw new TypeError("Cannot use 'in' operator on non-object");
      return "function" === typeof tt ? et === tt : tt.has(et)
    }

    function kt(tt, et, Vt) {
      if (null !== et && void 0 !== et) {
        if ("object" !== typeof et && "function" !== typeof et) throw new TypeError("Object expected.");
        var Ot, qt;
        if (Vt) {
          if (!Symbol.asyncDispose) throw new TypeError("Symbol.asyncDispose is not defined.");
          Ot = et[Symbol.asyncDispose]
        }
        if (void 0 === Ot) {
          if (!Symbol.dispose) throw new TypeError("Symbol.dispose is not defined.");
          Ot = et[Symbol.dispose], Vt && (qt = Ot)
        }
        if ("function" !== typeof Ot) throw new TypeError("Object not disposable.");
        qt && (Ot = function() {
          try {
            qt.call(this)
          } catch (tt) {
            return Promise.reject(tt)
          }
        }), tt.stack.push({
          value: et,
          dispose: Ot,
          async: Vt
        })
      } else Vt && tt.stack.push({
        async: !0
      });
      return et
    }
    var Gt = "function" === typeof SuppressedError ? SuppressedError : function(tt, et, Vt) {
      var Ot = new Error(Vt);
      return Ot.name = "SuppressedError", Ot.error = tt, Ot.suppressed = et, Ot
    };

    function zt(tt) {
      function et(et) {
        tt.error = tt.hasError ? new Gt(et, tt.error, "An error was suppressed during disposal.") : et, tt.hasError = !0
      }
      var Vt, Ot = 0;
      return function qt() {
        for (; Vt = tt.stack.pop();) try {
          if (!Vt.async && 1 === Ot) return Ot = 0, tt.stack.push(Vt), Promise.resolve().then(qt);
          if (Vt.dispose) {
            var Dt = Vt.dispose.call(Vt.value);
            if (Vt.async) return Ot |= 2, Promise.resolve(Dt).then(qt, (function(tt) {
              return et(tt), qt()
            }))
          } else Ot |= 1
        } catch (mt) {
          et(mt)
        }
        if (1 === Ot) return tt.hasError ? Promise.reject(tt.error) : Promise.resolve();
        if (tt.hasError) throw tt.error
      }()
    }

    function ot(tt, et) {
      return "string" === typeof tt && /^\.\.?\//.test(tt) ? tt.replace(/\.(tsx)$|((?:\.d)?)((?:\.[^./]+?)?)\.([cm]?)ts$/i, (function(tt, Vt, Ot, qt, Dt) {
        return Vt ? et ? ".jsx" : ".js" : !Ot || qt && Dt ? Ot + qt + "." + Dt.toLowerCase() + "js" : tt
      })) : tt
    }
    const rt = {
      __extends: qt,
      __assign: Dt,
      __rest: mt,
      __decorate: dt,
      __param: jt,
      __esDecorate: Ht,
      __runInitializers: Xt,
      __propKey: Qt,
      __setFunctionName: lt,
      __metadata: Et,
      __awaiter: ft,
      __generator: wt,
      __createBinding: yt,
      __exportStar: Nt,
      __values: Mt,
      __read: bt,
      __spread: Jt,
      __spreadArrays: Ct,
      __spreadArray: ut,
      __await: Kt,
      __asyncGenerator: ht,
      __asyncDelegator: vt,
      __asyncValues: Wt,
      __makeTemplateObject: St,
      __importStar: It,
      __importDefault: Pt,
      __classPrivateFieldGet: Zt,
      __classPrivateFieldSet: Lt,
      __classPrivateFieldIn: Ft,
      __addDisposableResource: kt,
      __disposeResources: zt,
      __rewriteRelativeImportExtension: ot
    }
  }
};
Object.freeze(modules);
for (const tt in modules) Object.freeze(modules[tt]);