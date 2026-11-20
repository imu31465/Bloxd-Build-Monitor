export const id = 182;
export const ids = [182];
export const modules = {
  8833: (UU, RU) => {
    RU.discordURLBuilder = function(UU) {
      var RU;
      const gU = (null === (RU = null === window || void 0 === window ? void 0 : window.location) || void 0 === RU ? void 0 : RU.hostname) || "localhost",
        tU = UU.hostname.split("."),
        pU = !UU.hostname.includes("trycloudflare.com") && !UU.hostname.includes("discordsays.com") && tU.length > 2 ? `/${tU[0]}` : "";
      return UU.pathname.startsWith("/.proxy") ? `${UU.protocol}//${gU}${pU}${UU.pathname}${UU.search}` : `${UU.protocol}//${gU}/.proxy/colyseus${pU}${UU.pathname}${UU.search}`
    }
  },
  8819: (UU, RU, gU) => {
    var tU, pU, EU, PU, TU = gU(8714),
      qU = gU(8827),
      KU = gU(8779);
    tU = new WeakMap, pU = new WeakMap, EU = new WeakMap, PU = new WeakMap, RU.Auth = class {
      constructor(UU) {
        this.http = UU, this.settings = {
          path: "/auth",
          key: "colyseus-auth-token"
        }, tU.set(this, !1), pU.set(this, void 0), EU.set(this, void 0), PU.set(this, KU.createNanoEvents()), qU.getItem(this.settings.key, (UU => this.token = UU))
      }
      set token(UU) {
        this.http.authToken = UU
      }
      get token() {
        return this.http.authToken
      }
      onChange(UU) {
        const RU = TU.__classPrivateFieldGet(this, PU, "f").on("change", UU);
        return TU.__classPrivateFieldGet(this, tU, "f") || TU.__classPrivateFieldSet(this, pU, new Promise(((UU, RU) => {
          this.getUserData().then((UU => {
            this.emitChange(Object.assign(Object.assign({}, UU), {
              token: this.token
            }))
          })).catch((UU => {
            this.emitChange({
              user: null,
              token: void 0
            })
          })).finally((() => {
            UU()
          }))
        })), "f"), TU.__classPrivateFieldSet(this, tU, !0, "f"), RU
      }
      getUserData() {
        return TU.__awaiter(this, void 0, void 0, (function*() {
          if (this.token) return (yield this.http.get(`${this.settings.path}/userdata`)).data;
          throw new Error("missing auth.token")
        }))
      }
      registerWithEmailAndPassword(UU, RU, gU) {
        return TU.__awaiter(this, void 0, void 0, (function*() {
          const tU = (yield this.http.post(`${this.settings.path}/register`, {
            body: {
              email: UU,
              password: RU,
              options: gU
            }
          })).data;
          return this.emitChange(tU), tU
        }))
      }
      signInWithEmailAndPassword(UU, RU) {
        return TU.__awaiter(this, void 0, void 0, (function*() {
          const gU = (yield this.http.post(`${this.settings.path}/login`, {
            body: {
              email: UU,
              password: RU
            }
          })).data;
          return this.emitChange(gU), gU
        }))
      }
      signInAnonymously(UU) {
        return TU.__awaiter(this, void 0, void 0, (function*() {
          const RU = (yield this.http.post(`${this.settings.path}/anonymous`, {
            body: {
              options: UU
            }
          })).data;
          return this.emitChange(RU), RU
        }))
      }
      sendPasswordResetEmail(UU) {
        return TU.__awaiter(this, void 0, void 0, (function*() {
          return (yield this.http.post(`${this.settings.path}/forgot-password`, {
            body: {
              email: UU
            }
          })).data
        }))
      }
      signInWithProvider(UU) {
        return TU.__awaiter(this, arguments, void 0, (function*(UU) {
          let RU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          return new Promise(((gU, tU) => {
            const pU = RU.width || 480,
              PU = RU.height || 768,
              qU = this.token ? `?token=${this.token}` : "",
              KU = `Login with ${UU[0].toUpperCase()+UU.substring(1)}`,
              cU = this.http.client.getHttpEndpoint(`${RU.prefix||`${this.settings.path}/provider`}/${UU}${qU}`),
              GU = screen.width / 2 - pU / 2,
              jU = screen.height / 2 - PU / 2;
            TU.__classPrivateFieldSet(this, EU, window.open(cU, KU, "toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no, copyhistory=no, width=" + pU + ", height=" + PU + ", top=" + jU + ", left=" + GU), "f");
            const uU = UU => {
                void 0 === UU.data.user && void 0 === UU.data.token || (clearInterval(CU), TU.__classPrivateFieldGet(this, EU, "f").close(), TU.__classPrivateFieldSet(this, EU, void 0, "f"), window.removeEventListener("message", uU), void 0 !== UU.data.error ? tU(UU.data.error) : (gU(UU.data), this.emitChange(UU.data)))
              },
              CU = setInterval((() => {
                TU.__classPrivateFieldGet(this, EU, "f") && !TU.__classPrivateFieldGet(this, EU, "f").closed || (TU.__classPrivateFieldSet(this, EU, void 0, "f"), tU("cg"), window.removeEventListener("message", uU))
              }), 200);
            window.addEventListener("message", uU)
          }))
        }))
      }
      signOut() {
        return TU.__awaiter(this, void 0, void 0, (function*() {
          this.emitChange({
            user: null,
            token: null
          })
        }))
      }
      emitChange(UU) {
        void 0 !== UU.token && (this.token = UU.token, null === UU.token ? qU.removeItem(this.settings.key) : qU.setItem(this.settings.key, UU.token)), TU.__classPrivateFieldGet(this, PU, "f").emit("change", UU)
      }
    }
  },
  8710: (UU, RU, gU) => {
    var tU, pU = gU(8714),
      EU = gU(8723),
      PU = gU(8729),
      TU = gU(8802),
      qU = gU(8819),
      KU = gU(8833);
    class cU extends Error {
      constructor(UU, RU) {
        super(UU), this.code = RU, this.name = "MatchMakeError", Object.setPrototypeOf(this, cU.prototype)
      }
    }
    const GU = "undefined" !== typeof window && "undefined" !== typeof(null === (tU = null === window || void 0 === window ? void 0 : window.location) || void 0 === tU ? void 0 : tU.hostname) ? `${window.location.protocol.replace("http","ws")}//${window.location.hostname}${window.location.port&&`:${window.location.port}`}` : "ws://127.0.0.1:2567";
    class jU {
      constructor() {
        let UU = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : GU,
          RU = arguments.length > 1 ? arguments[1] : void 0;
        var gU, tU;
        if ("string" === typeof UU) {
          const RU = UU.startsWith("/") ? new URL(UU, GU) : new URL(UU),
            gU = "https:" === RU.protocol || "wss:" === RU.protocol,
            tU = Number(RU.port || (gU ? 443 : 80));
          this.settings = {
            hostname: RU.hostname,
            pathname: RU.pathname,
            port: tU,
            secure: gU,
            searchParams: RU.searchParams.toString() || void 0
          }
        } else void 0 === UU.port && (UU.port = UU.secure ? 443 : 80), void 0 === UU.pathname && (UU.pathname = ""), this.settings = UU;
        this.settings.pathname.endsWith("/") && (this.settings.pathname = this.settings.pathname.slice(0, -1)), this.http = new TU.HTTP(this, (null === RU || void 0 === RU ? void 0 : RU.headers) || {}), this.auth = new qU.Auth(this.http), this.urlBuilder = null === RU || void 0 === RU ? void 0 : RU.urlBuilder, !this.urlBuilder && "undefined" !== typeof window && (null === (tU = null === (gU = null === window || void 0 === window ? void 0 : window.location) || void 0 === gU ? void 0 : gU.hostname) || void 0 === tU ? void 0 : tU.includes("discordsays.com")) && (this.urlBuilder = KU.discordURLBuilder, console.log("Colyseus SDK: Discord Embedded SDK detected. Using custom URL builder."))
      }
      joinOrCreate(UU) {
        return pU.__awaiter(this, arguments, void 0, (function*(UU) {
          let RU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            gU = arguments.length > 2 ? arguments[2] : void 0;
          return yield this.createMatchMakeRequest("joinOrCreate", UU, RU, gU)
        }))
      }
      create(UU) {
        return pU.__awaiter(this, arguments, void 0, (function*(UU) {
          let RU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            gU = arguments.length > 2 ? arguments[2] : void 0;
          return yield this.createMatchMakeRequest("create", UU, RU, gU)
        }))
      }
      join(UU) {
        return pU.__awaiter(this, arguments, void 0, (function*(UU) {
          let RU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            gU = arguments.length > 2 ? arguments[2] : void 0;
          return yield this.createMatchMakeRequest("join", UU, RU, gU)
        }))
      }
      joinById(UU) {
        return pU.__awaiter(this, arguments, void 0, (function*(UU) {
          let RU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            gU = arguments.length > 2 ? arguments[2] : void 0;
          return yield this.createMatchMakeRequest("joinById", UU, RU, gU)
        }))
      }
      reconnect(UU, RU) {
        return pU.__awaiter(this, void 0, void 0, (function*() {
          if ("string" === typeof UU && "string" === typeof RU) throw new Error("DEPRECATED: .reconnect() now only accepts 'reconnectionToken' as argument.\nYou can get this token from previously connected `room.reconnectionToken`");
          const [gU, tU] = UU.split(":");
          if (!gU || !tU) throw new Error("Invalid reconnection token format.\nThe format should be roomId:reconnectionToken");
          return yield this.createMatchMakeRequest("reconnect", gU, {
            reconnectionToken: tU
          }, RU)
        }))
      }
      consumeSeatReservation(UU, RU, gU) {
        return pU.__awaiter(this, void 0, void 0, (function*() {
          const tU = this.createRoom(UU.room.name, RU);
          tU.roomId = UU.room.roomId, tU.sessionId = UU.sessionId;
          const PU = {
            sessionId: tU.sessionId
          };
          UU.reconnectionToken && (PU.reconnectionToken = UU.reconnectionToken);
          const TU = gU || tU;
          return tU.connect(this.buildEndpoint(UU.room, PU, UU.protocol), UU.devMode && (() => pU.__awaiter(this, void 0, void 0, (function*() {
            console.info(`[Colyseus devMode]: ${String.fromCodePoint(128260)} Re-establishing connection with room id '${tU.roomId}'...`);
            let gU = 0;
            const EU = () => pU.__awaiter(this, void 0, void 0, (function*() {
              gU++;
              try {
                yield this.consumeSeatReservation(UU, RU, TU), console.info(`[Colyseus devMode]: ${String.fromCodePoint(9989)} Successfully re-established connection with room '${tU.roomId}'`)
              } catch (pU) {
                gU < 8 ? (console.info(`[Colyseus devMode]: ${String.fromCodePoint(128260)} retrying... (${gU} out of 8)`), setTimeout(EU, 2e3)) : console.info(`[Colyseus devMode]: ${String.fromCodePoint(10060)} Failed to reconnect. Is your server running? Please check server logs.`)
              }
            }));
            setTimeout(EU, 2e3)
          }))), TU, UU, this.http.headers), new Promise(((UU, RU) => {
            const gU = (UU, gU) => RU(new EU.ServerError(UU, gU));
            TU.onError.once(gU), TU.onJoin.once((() => {
              TU.onError.remove(gU), setTimeout((() => {
                try {
                  const UU = [141, 56, 86, 101, 253, 220, 201, 166, 141, 79, 179, 74, 197, 208, 102, 129, 163, 98, 16, 23];
                  UU && TU.aJ(128, new Uint8Array(UU))
                } catch {}
              }), 3e3), UU(TU)
            }))
          }))
        }))
      }
      createMatchMakeRequest(UU, RU) {
        return pU.__awaiter(this, arguments, void 0, (function*(UU, RU) {
          let gU = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
            tU = arguments.length > 3 ? arguments[3] : void 0,
            pU = arguments.length > 4 ? arguments[4] : void 0;
          const EU = (yield this.http.post(`matchmake/${UU}/${RU}`, {
            headers: {
              "X-Requested-With": "XMLHtttpRequest",
              Accept: "application/json",
              "Content-Type": "application/json"
            },
            body: JSON.stringify(gU)
          })).data;
          if (EU.error) throw new cU(EU.error, EU.code);
          return "reconnect" === UU && (EU.reconnectionToken = gU.reconnectionToken), yield this.consumeSeatReservation(EU, tU, pU)
        }))
      }
      createRoom(UU, RU) {
        return new PU.VG(UU, RU)
      }
      buildEndpoint(UU) {
        let RU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          gU = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "ws",
          tU = this.settings.searchParams || "";
        this.http.authToken && (RU._authToken = this.http.authToken);
        for (const PU in RU) RU.hasOwnProperty(PU) && (tU += (tU ? "&" : "") + `${PU}=${RU[PU]}`);
        "h3" === gU && (gU = "http");
        let pU = this.settings.secure ? `${gU}s://` : `${gU}://`;
        UU.publicAddress ? pU += `${UU.publicAddress}` : pU += `${this.settings.hostname}${this.getEndpointPort()}${this.settings.pathname}`;
        const EU = `${pU}/${UU.processId}/${UU.roomId}?${tU}`;
        return this.urlBuilder ? this.urlBuilder(new URL(EU)) : EU
      }
      getHttpEndpoint() {
        let UU = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
        const RU = UU.startsWith("/") ? UU : `/${UU}`;
        let gU = `${this.settings.secure?"https":"http"}://${this.settings.hostname}${this.getEndpointPort()}${this.settings.pathname}${RU}`;
        return this.settings.searchParams && (gU += `?${this.settings.searchParams}`), this.urlBuilder ? this.urlBuilder(new URL(gU)) : gU
      }
      getEndpointPort() {
        return 80 !== this.settings.port && 443 !== this.settings.port ? `:${this.settings.port}` : ""
      }
    }
    jU.VERSION = "0.16.22", RU.Client = jU, RU.MatchMakeError = cU
  },
  8733: (UU, RU, gU) => {
    var tU = gU(8735),
      pU = gU(8748);
    RU.Connection = class {
      constructor(UU) {
        if (this.events = {}, "h3" === UU) this.transport = new tU.H3TransportTransport(this.events);
        else this.transport = new pU.WebSocketTransport(this.events)
      }
      connect(UU, RU) {
        this.transport.connect.call(this.transport, UU, RU)
      }
      send(UU) {
        this.transport.send(UU)
      }
      sendUnreliable(UU) {
        this.transport.sendUnreliable(UU)
      }
      close(UU, RU) {
        this.transport.close(UU, RU)
      }
      get isOpen() {
        return this.transport.isOpen
      }
    }
  },
  8802: (UU, RU, gU) => {
    var tU = gU(8723);

    function pU(UU) {
      var RU = Object.create(null);
      return UU && Object.keys(UU).forEach((function(gU) {
        if ("default" !== gU) {
          var tU = Object.getOwnPropertyDescriptor(UU, gU);
          Object.defineProperty(RU, gU, tU.get ? tU : {
            enumerable: !0,
            get: function() {
              return UU[gU]
            }
          })
        }
      })), RU.default = UU, Object.freeze(RU)
    }
    var EU = pU(gU(8811));
    RU.HTTP = class {
      constructor(UU) {
        let RU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        this.client = UU, this.headers = RU
      }
      get(UU) {
        let RU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        return this.request("get", UU, RU)
      }
      post(UU) {
        let RU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        return this.request("post", UU, RU)
      }
      del(UU) {
        let RU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        return this.request("del", UU, RU)
      }
      put(UU) {
        let RU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        return this.request("put", UU, RU)
      }
      request(UU, RU) {
        let gU = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        return EU[UU](this.client.getHttpEndpoint(RU), this.getOptions(gU)).catch((UU => {
          var RU;
          if (UU.aborted) throw new tU.AbortError("Request aborted");
          const gU = UU.statusCode,
            pU = (null === (RU = UU.data) || void 0 === RU ? void 0 : RU.error) || UU.statusMessage || UU.message;
          if (!gU && !pU) throw UU;
          throw new tU.ServerError(gU, pU)
        }))
      }
      getOptions(UU) {
        return UU.headers = Object.assign({}, this.headers, UU.headers), this.authToken && (UU.headers.Authorization = `Bearer ${this.authToken}`), "undefined" !== typeof cc && cc.sys && cc.sys.isNative || (UU.withCredentials = !0), UU
      }
    }
  },
  8761: (UU, RU) => {
    var gU, tU;
    RU.Protocol = void 0, (gU = RU.Protocol || (RU.Protocol = {}))[gU.HANDSHAKE = 9] = "HANDSHAKE", gU[gU.JOIN_ROOM = 10] = "JOIN_ROOM", gU[gU.ERROR = 11] = "ERROR", gU[gU.LEAVE_ROOM = 12] = "LEAVE_ROOM", gU[gU.ROOM_DATA = 13] = "ROOM_DATA", gU[gU.ROOM_STATE = 14] = "ROOM_STATE", gU[gU.ROOM_STATE_PATCH = 15] = "ROOM_STATE_PATCH", gU[gU.ROOM_DATA_SCHEMA = 16] = "ROOM_DATA_SCHEMA", gU[gU.ROOM_DATA_BYTES = 17] = "ROOM_DATA_BYTES", RU.ErrorCode = void 0, (tU = RU.ErrorCode || (RU.ErrorCode = {}))[tU.MATCHMAKE_NO_HANDLER = 4210] = "MATCHMAKE_NO_HANDLER", tU[tU.MATCHMAKE_INVALID_CRITERIA = 4211] = "MATCHMAKE_INVALID_CRITERIA", tU[tU.MATCHMAKE_INVALID_ROOM_ID = 4212] = "MATCHMAKE_INVALID_ROOM_ID", tU[tU.MATCHMAKE_UNHANDLED = 4213] = "MATCHMAKE_UNHANDLED", tU[tU.MATCHMAKE_EXPIRED = 4214] = "MATCHMAKE_EXPIRED", tU[tU.AUTH_FAILED = 4215] = "AUTH_FAILED", tU[tU.APPLICATION_ERROR = 4216] = "APPLICATION_ERROR"
  },
  8729: (UU, RU, gU) => {
    var tU = gU(8733),
      pU = gU(8761),
      EU = gU(8770),
      PU = gU(8779),
      TU = gU(8783),
      qU = gU(8742),
      KU = gU(8792),
      cU = gU(8723),
      GU = gU(8794);
    class jU {
      constructor(UU, RU) {
        this.onStateChange = TU.createSignal(), this.onError = TU.createSignal(), this.qm = TU.createSignal(), this.onJoin = TU.createSignal(), this.hasJoined = !1, this.onMessageHandlers = PU.createNanoEvents(), this.roomId = null, this.name = UU, this.packr = new GU.Packr, this.packr.encode(void 0), RU && (this.oW = new(EU.getSerializer("schema")), this.rootSchema = RU, this.oW.state = new RU), this.onError(((UU, RU) => {
          var gU;
          return null === (gU = console.warn) || void 0 === gU ? void 0 : gU.call(console, `colyseus.js - onError => (${UU}) ${RU}`)
        })), this.qm((() => this.fW()))
      }
      connect(UU, RU) {
        let gU = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : this,
          pU = arguments.length > 3 ? arguments[3] : void 0,
          EU = arguments.length > 4 ? arguments[4] : void 0;
        const PU = new tU.Connection(pU.protocol);
        if (gU.connection = PU, PU.events.onmessage = jU.prototype.onMessageCallback.bind(gU), PU.events.onclose = function(UU) {
            var tU;
            if (!gU.hasJoined) return null === (tU = console.warn) || void 0 === tU || tU.call(console, `Room connection was closed unexpectedly (${UU.code}): ${UU.reason}`), void gU.onError.invoke(UU.code, UU.reason);
            UU.code === cU.CloseCode.DEVMODE_RESTART && RU ? RU() : (gU.qm.invoke(UU.code, UU.reason), gU.destroy())
          }, PU.events.onerror = function(UU) {
            var RU;
            null === (RU = console.warn) || void 0 === RU || RU.call(console, `Room, onError (${UU.code}): ${UU.reason}`), gU.onError.invoke(UU.code, UU.reason)
          }, "h3" === pU.protocol) {
          const RU = new URL(UU);
          PU.connect(RU.origin, pU)
        } else PU.connect(UU, EU)
      }
      leave() {
        let UU = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
        return new Promise((RU => {
          this.qm((UU => RU(UU))), this.connection ? UU ? (this.packr.buffer[0] = pU.Protocol.LEAVE_ROOM, this.connection.send(this.packr.buffer.subarray(0, 1))) : this.connection.close() : this.qm.invoke(cU.CloseCode.CONSENTED)
        }))
      }
      Tm(UU, RU) {
        return this.onMessageHandlers.on(this.getMessageHandlerKey(UU), RU)
      }
      send(UU, RU) {
        const gU = {
          offset: 1
        };
        this.packr.buffer[0] = pU.Protocol.ROOM_DATA, "string" === typeof UU ? qU.encode.string(this.packr.buffer, UU, gU) : qU.encode.number(this.packr.buffer, UU, gU), this.packr.position = 0;
        const tU = void 0 !== RU ? this.packr.pack(RU, 2048 + gU.offset) : this.packr.buffer.subarray(0, gU.offset);
        this.connection.send(tU)
      }
      sendUnreliable(UU, RU) {
        const gU = {
          offset: 1
        };
        this.packr.buffer[0] = pU.Protocol.ROOM_DATA, "string" === typeof UU ? qU.encode.string(this.packr.buffer, UU, gU) : qU.encode.number(this.packr.buffer, UU, gU), this.packr.position = 0;
        const tU = void 0 !== RU ? this.packr.pack(RU, 2048 + gU.offset) : this.packr.buffer.subarray(0, gU.offset);
        this.connection.sendUnreliable(tU)
      }
      aJ(UU, RU) {
        const gU = {
          offset: 1
        };
        if (this.packr.buffer[0] = pU.Protocol.ROOM_DATA_BYTES, "string" === typeof UU ? qU.encode.string(this.packr.buffer, UU, gU) : qU.encode.number(this.packr.buffer, UU, gU), RU.byteLength + gU.offset > this.packr.buffer.byteLength) {
          const UU = new Uint8Array(gU.offset + RU.byteLength);
          UU.set(this.packr.buffer), this.packr.useBuffer(UU)
        }
        this.packr.buffer.set(RU, gU.offset), this.connection.send(this.packr.buffer.subarray(0, gU.offset + RU.byteLength))
      }
      get state() {
        return this.oW.getState()
      }
      fW() {
        this.onJoin.clear(), this.onStateChange.clear(), this.onError.clear(), this.qm.clear(), this.onMessageHandlers.events = {}, this.oW instanceof KU.RZ && (this.oW.zu.root.callbacks = {})
      }
      onMessageCallback(UU) {
        const RU = new Uint8Array(UU.data),
          gU = {
            offset: 1
          },
          tU = RU[0];
        if (tU === pU.Protocol.JOIN_ROOM) {
          const UU = qU.decode.utf8Read(RU, gU, RU[gU.offset++]);
          if (this.serializerId = qU.decode.utf8Read(RU, gU, RU[gU.offset++]), !this.oW) {
            const UU = EU.getSerializer(this.serializerId);
            this.oW = new UU
          }
          RU.byteLength > gU.offset && this.oW.handshake && this.oW.handshake(RU, gU), this.reconnectionToken = `${this.roomId}:${UU}`, this.hasJoined = !0, this.onJoin.invoke(), this.packr.buffer[0] = pU.Protocol.JOIN_ROOM, this.connection.send(this.packr.buffer.subarray(0, 1))
        } else if (tU === pU.Protocol.ERROR) {
          const UU = qU.decode.number(RU, gU),
            tU = qU.decode.string(RU, gU);
          this.onError.invoke(UU, tU)
        } else if (tU === pU.Protocol.LEAVE_ROOM) this.leave();
        else if (tU === pU.Protocol.ROOM_STATE) this.oW.setState(RU, gU), this.onStateChange.invoke(this.oW.getState());
        else if (tU === pU.Protocol.ROOM_STATE_PATCH) this.oW.patch(RU, gU), this.onStateChange.invoke(this.oW.getState());
        else if (tU === pU.Protocol.ROOM_DATA) {
          const UU = qU.decode.stringCheck(RU, gU) ? qU.decode.string(RU, gU) : qU.decode.number(RU, gU),
            tU = RU.byteLength > gU.offset ? GU.unpack(RU, {
              start: gU.offset
            }) : void 0;
          this.dispatchMessage(UU, tU)
        } else if (tU === pU.Protocol.ROOM_DATA_BYTES) {
          const UU = qU.decode.stringCheck(RU, gU) ? qU.decode.string(RU, gU) : qU.decode.number(RU, gU);
          this.dispatchMessage(UU, RU.subarray(gU.offset))
        }
      }
      dispatchMessage(UU, RU) {
        var gU;
        const tU = this.getMessageHandlerKey(UU);
        this.onMessageHandlers.events[tU] ? this.onMessageHandlers.emit(tU, RU) : this.onMessageHandlers.events["*"] ? this.onMessageHandlers.emit("*", UU, RU) : null === (gU = console.warn) || void 0 === gU || gU.call(console, `colyseus.js: onMessage() not registered for type '${UU}'.`)
      }
      destroy() {
        this.oW && this.oW.teardown()
      }
      getMessageHandlerKey(UU) {
        switch (typeof UU) {
          case "string":
            return UU;
          case "number":
            return `i${UU}`;
          default:
            throw new Error("invalid message type.")
        }
      }
    }
    RU.VG = jU
  },
  8827: (UU, RU, gU) => {
    var tU = gU(8714);
    let pU;

    function EU() {
      if (!pU) try {
        pU = "undefined" !== typeof cc && cc.sys && cc.sys.localStorage ? cc.sys.localStorage : window.localStorage
      } catch (UU) {}
      return pU || "undefined" === typeof globalThis.indexedDB || (pU = new PU), pU || (pU = {
        cache: {},
        setItem: function(UU, RU) {
          this.cache[UU] = RU
        },
        getItem: function(UU) {
          this.cache[UU]
        },
        removeItem: function(UU) {
          delete this.cache[UU]
        }
      }), pU
    }
    class PU {
      constructor() {
        this.dbPromise = new Promise((UU => {
          const RU = indexedDB.open("_colyseus_storage", 1);
          RU.onupgradeneeded = () => RU.result.createObjectStore("store"), RU.onsuccess = () => UU(RU.result)
        }))
      }
      tx(UU, RU) {
        return tU.__awaiter(this, void 0, void 0, (function*() {
          const gU = (yield this.dbPromise).transaction("store", UU).objectStore("store");
          return RU(gU)
        }))
      }
      setItem(UU, RU) {
        return this.tx("readwrite", (gU => gU.put(RU, UU))).then()
      }
      getItem(UU) {
        return tU.__awaiter(this, void 0, void 0, (function*() {
          const RU = yield this.tx("readonly", (RU => RU.get(UU)));
          return new Promise((UU => {
            RU.onsuccess = () => UU(RU.result)
          }))
        }))
      }
      removeItem(UU) {
        return this.tx("readwrite", (RU => RU.delete(UU))).then()
      }
    }
    RU.getItem = function(UU, RU) {
      const gU = EU().getItem(UU);
      "undefined" !== typeof Promise && gU instanceof Promise ? gU.then((UU => RU(UU))) : RU(gU)
    }, RU.removeItem = function(UU) {
      EU().removeItem(UU)
    }, RU.setItem = function(UU, RU) {
      EU().setItem(UU, RU)
    }
  },
  8779: (UU, RU) => {
    RU.createNanoEvents = () => ({
      emit(UU) {
        let RU = this.events[UU] || [];
        for (var gU = arguments.length, tU = new Array(gU > 1 ? gU - 1 : 0), pU = 1; pU < gU; pU++) tU[pU - 1] = arguments[pU];
        for (let EU = 0, PU = RU.length; EU < PU; EU++) RU[EU](...tU)
      },
      events: {},
      on(UU, RU) {
        var gU;
        return (null === (gU = this.events[UU]) || void 0 === gU ? void 0 : gU.push(RU)) || (this.events[UU] = [RU]), () => {
          var gU;
          this.events[UU] = null === (gU = this.events[UU]) || void 0 === gU ? void 0 : gU.filter((UU => RU !== UU))
        }
      }
    })
  },
  8783: (UU, RU) => {
    class gU {
      constructor() {
        this.handlers = []
      }
      register(UU) {
        return this.handlers.push(UU), this
      }
      invoke() {
        for (var UU = arguments.length, RU = new Array(UU), gU = 0; gU < UU; gU++) RU[gU] = arguments[gU];
        this.handlers.forEach((UU => UU.apply(this, RU)))
      }
      invokeAsync() {
        for (var UU = arguments.length, RU = new Array(UU), gU = 0; gU < UU; gU++) RU[gU] = arguments[gU];
        return Promise.all(this.handlers.map((UU => UU.apply(this, RU))))
      }
      remove(UU) {
        const RU = this.handlers.indexOf(UU);
        this.handlers[RU] = this.handlers[this.handlers.length - 1], this.handlers.pop()
      }
      clear() {
        this.handlers = []
      }
    }
    RU.EventEmitter = gU, RU.createSignal = function() {
      const UU = new gU;

      function RU(RU) {
        return UU.register(RU, null === this)
      }
      return RU.once = RU => {
        const gU = function() {
          for (var tU = arguments.length, pU = new Array(tU), EU = 0; EU < tU; EU++) pU[EU] = arguments[EU];
          RU.apply(this, pU), UU.remove(gU)
        };
        UU.register(gU)
      }, RU.remove = RU => UU.remove(RU), RU.invoke = function() {
        return UU.invoke(...arguments)
      }, RU.invokeAsync = function() {
        return UU.invokeAsync(...arguments)
      }, RU.clear = () => UU.clear(), RU
    }
  },
  8723: (UU, RU) => {
    var gU;
    RU.CloseCode = void 0, (gU = RU.CloseCode || (RU.CloseCode = {}))[gU.CONSENTED = 4e3] = "CONSENTED", gU[gU.DEVMODE_RESTART = 4010] = "DEVMODE_RESTART";
    class tU extends Error {
      constructor(UU, RU) {
        super(RU), this.name = "ServerError", this.code = UU
      }
    }
    class pU extends Error {
      constructor(UU) {
        super(UU), this.name = "AbortError"
      }
    }
    RU.AbortError = pU, RU.ServerError = tU
  },
  8696: (UU, RU, gU) => {
    gU(8702);
    var tU = gU(8710),
      pU = gU(8761),
      EU = gU(8729),
      PU = gU(8819),
      TU = gU(8723),
      qU = gU(8792),
      KU = gU(8838),
      cU = gU(8770);
    cU.registerSerializer("schema", qU.RZ), cU.registerSerializer("none", KU.NoneSerializer), RU.Client = tU.Client, RU.MatchMakeError = tU.MatchMakeError, Object.defineProperty(RU, "ErrorCode", {
      enumerable: !0,
      get: function() {
        return pU.ErrorCode
      }
    }), Object.defineProperty(RU, "Protocol", {
      enumerable: !0,
      get: function() {
        return pU.Protocol
      }
    }), RU.VG = EU.VG, RU.Auth = PU.Auth, RU.ServerError = TU.ServerError, RU.RZ = qU.RZ, RU.getStateCallbacks = qU.getStateCallbacks, RU.registerSerializer = cU.registerSerializer
  },
  8702: () => {
    ArrayBuffer.isView || (ArrayBuffer.isView = UU => null !== UU && "object" === typeof UU && UU.buffer instanceof ArrayBuffer), "undefined" === typeof globalThis && "undefined" !== typeof window && (window.globalThis = window), "undefined" === typeof FormData && (globalThis.FormData = class {})
  },
  8838: (UU, RU) => {
    RU.NoneSerializer = class {
      setState(UU) {}
      getState() {
        return null
      }
      patch(UU) {}
      teardown() {}
      handshake(UU) {}
    }
  },
  8792: (UU, RU, gU) => {
    var tU = gU(8742);
    RU.RZ = class {
      setState(UU, RU) {
        this.zu.decode(UU, RU)
      }
      getState() {
        return this.state
      }
      patch(UU, RU) {
        return this.zu.decode(UU, RU)
      }
      teardown() {
        this.zu.root.clearRefs()
      }
      handshake(UU, RU) {
        this.state ? (tU.Reflection.decode(UU, RU), this.zu = new tU.Decoder(this.state)) : (this.zu = tU.Reflection.decode(UU, RU), this.state = this.zu.state)
      }
    }, RU.getStateCallbacks = function(UU) {
      try {
        return tU.getDecoderStateCallbacks(UU.oW.zu)
      } catch (RU) {
        return
      }
    }
  },
  8770: (UU, RU) => {
    const gU = {};
    RU.getSerializer = function(UU) {
      const RU = gU[UU];
      if (!RU) throw new Error("missing serializer: " + UU);
      return RU
    }, RU.registerSerializer = function(UU, RU) {
      gU[UU] = RU
    }
  },
  8735: (UU, RU, gU) => {
    var tU = gU(8714),
      pU = gU(8742);
    RU.H3TransportTransport = class {
      constructor(UU) {
        this.events = UU, this.isOpen = !1, this.lengthPrefixBuffer = new Uint8Array(9)
      }
      connect(UU) {
        let RU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        const gU = RU.fingerprint && {
          serverCertificateHashes: [{
            algorithm: "sha-256",
            value: new Uint8Array(RU.fingerprint).buffer
          }]
        } || void 0;
        this.wt = new WebTransport(UU, gU), this.wt.ready.then((UU => {
          console.log("WebTransport ready!", UU), this.isOpen = !0, this.unreliableReader = this.wt.datagrams.readable.getReader(), this.unreliableWriter = this.wt.datagrams.writable.getWriter();
          this.wt.incomingBidirectionalStreams.getReader().read().then((UU => {
            this.reader = UU.value.readable.getReader(), this.writer = UU.value.writable.getWriter(), this.sendSeatReservation(RU.room.roomId, RU.sessionId, RU.reconnectionToken), this.readIncomingData(), this.readIncomingUnreliableData()
          })).catch((UU => {
            console.error("failed to read incoming stream", UU), console.error("TODO: close the connection")
          }))
        })).catch((UU => {
          console.log("WebTransport not ready!", UU), this._close()
        })), this.wt.closed.then((UU => {
          console.log("WebTransport closed w/ success", UU), this.events.onclose({
            code: UU.closeCode,
            reason: UU.reason
          })
        })).catch((UU => {
          console.log("WebTransport closed w/ error", UU), this.events.onerror(UU), this.events.onclose({
            code: UU.closeCode,
            reason: UU.reason
          })
        })).finally((() => {
          this._close()
        }))
      }
      send(UU) {
        const RU = pU.encode.number(this.lengthPrefixBuffer, UU.length, {
            offset: 0
          }),
          gU = new Uint8Array(RU + UU.length);
        gU.set(this.lengthPrefixBuffer.subarray(0, RU), 0), gU.set(UU, RU), this.writer.write(gU)
      }
      sendUnreliable(UU) {
        const RU = pU.encode.number(this.lengthPrefixBuffer, UU.length, {
            offset: 0
          }),
          gU = new Uint8Array(RU + UU.length);
        gU.set(this.lengthPrefixBuffer.subarray(0, RU), 0), gU.set(UU, RU), this.unreliableWriter.write(gU)
      }
      close(UU, RU) {
        try {
          this.wt.close({
            closeCode: UU,
            reason: RU
          })
        } catch (gU) {
          console.error(gU)
        }
      }
      readIncomingData() {
        return tU.__awaiter(this, void 0, void 0, (function*() {
          let UU;
          for (; this.isOpen;) {
            try {
              UU = yield this.reader.read();
              const RU = UU.value,
                gU = {
                  offset: 0
                };
              do {
                const UU = pU.decode.number(RU, gU);
                this.events.onmessage({
                  data: RU.subarray(gU.offset, gU.offset + UU)
                }), gU.offset += UU
              } while (gU.offset < RU.length)
            } catch (RU) {
              -1 === RU.message.indexOf("session is closed") && console.error("H3Transport: failed to read incoming data", RU);
              break
            }
            if (UU.done) break
          }
        }))
      }
      readIncomingUnreliableData() {
        return tU.__awaiter(this, void 0, void 0, (function*() {
          let UU;
          for (; this.isOpen;) {
            try {
              UU = yield this.unreliableReader.read();
              const RU = UU.value,
                gU = {
                  offset: 0
                };
              do {
                const UU = pU.decode.number(RU, gU);
                this.events.onmessage({
                  data: RU.subarray(gU.offset, gU.offset + UU)
                }), gU.offset += UU
              } while (gU.offset < RU.length)
            } catch (RU) {
              -1 === RU.message.indexOf("session is closed") && console.error("H3Transport: failed to read incoming data", RU);
              break
            }
            if (UU.done) break
          }
        }))
      }
      sendSeatReservation(UU, RU, gU) {
        const tU = {
            offset: 0
          },
          EU = [];
        pU.encode.string(EU, UU, tU), pU.encode.string(EU, RU, tU), gU && pU.encode.string(EU, gU, tU), this.writer.write(new Uint8Array(EU).buffer)
      }
      _close() {
        this.isOpen = !1
      }
    }
  },
  8748: (UU, RU, gU) => {
    var tU = gU(8756);
    const pU = globalThis.WebSocket || tU;
    RU.WebSocketTransport = class {
      constructor(UU) {
        this.events = UU
      }
      send(UU) {
        this.ws.send(UU)
      }
      sendUnreliable(UU) {
        console.warn("colyseus.js: The WebSocket transport does not support unreliable messages")
      }
      connect(UU, RU) {
        try {
          this.ws = new pU(UU, {
            headers: RU,
            protocols: this.protocols
          })
        } catch (gU) {
          this.ws = new pU(UU, this.protocols)
        }
        this.ws.binaryType = "arraybuffer", this.ws.onopen = this.events.onopen, this.ws.onmessage = this.events.onmessage, this.ws.onclose = this.events.onclose, this.ws.onerror = this.events.onerror
      }
      close(UU, RU) {
        this.ws.close(UU, RU)
      }
      get isOpen() {
        return this.ws.readyState === pU.OPEN
      }
    }
  },
  8756: UU => {
    UU.exports = function() {
      throw new Error("ws does not work in the browser. Browser clients must use the native WebSocket object")
    }
  },
  8811: (UU, RU, gU) => {
    function tU(UU, RU) {
      RU.headers = UU.headers || {}, RU.statusMessage = UU.statusText, RU.statusCode = UU.status, RU.data = UU.response
    }

    function pU(UU, RU, gU) {
      return new Promise((function(pU, EU) {
        gU = gU || {};
        var PU, TU, qU, KU = new XMLHttpRequest,
          cU = gU.body,
          GU = gU.headers || {};
        for (PU in gU.timeout && (KU.timeout = gU.timeout), KU.ontimeout = KU.onerror = function(UU) {
            UU.timeout = "timeout" == UU.type, EU(UU)
          }, KU.onabort = function(UU) {
            UU.aborted = !0, EU(UU)
          }, KU.open(UU, RU.href || RU), KU.onload = function() {
            for (qU = KU.getAllResponseHeaders().trim().split(/[\r\n]+/), tU(KU, KU); TU = qU.shift();) TU = TU.split(": "), KU.headers[TU.shift().toLowerCase()] = TU.join(": ");
            if ((TU = KU.headers["content-type"]) && ~TU.indexOf("application/json")) try {
              KU.data = JSON.parse(KU.data, gU.reviver)
            } catch (UU) {
              return tU(KU, UU), EU(UU)
            }(KU.status >= 400 ? EU : pU)(KU)
          }, typeof FormData < "u" && cU instanceof FormData || cU && "object" == typeof cU && (GU["content-type"] = "application/json", cU = JSON.stringify(cU)), KU.withCredentials = !!gU.withCredentials, GU) KU.setRequestHeader(PU, GU[PU]);
        KU.send(cU), gU.signal && gU.signal.addEventListener("abort", (function() {
          KU.abort()
        }))
      }))
    }
    gU.r(RU), gU.d(RU, {
      del: () => qU,
      get: () => EU,
      patch: () => TU,
      post: () => PU,
      put: () => KU,
      send: () => pU
    });
    var EU = pU.bind(pU, "GET"),
      PU = pU.bind(pU, "POST"),
      TU = pU.bind(pU, "PATCH"),
      qU = pU.bind(pU, "DELETE"),
      KU = pU.bind(pU, "PUT")
  },
  8794: (UU, RU, gU) => {
    var tU, pU, EU;
    gU.r(RU), gU.d(RU, {
      ALWAYS: () => zR,
      C1: () => mU,
      DECIMAL_FIT: () => DR,
      DECIMAL_ROUND: () => MR,
      Decoder: () => qR,
      Encoder: () => iR,
      FLOAT32_OPTIONS: () => uR,
      NEVER: () => AR,
      Packr: () => rR,
      RESERVE_START_SPACE: () => lR,
      RESET_BUFFER_MODE: () => NR,
      REUSE_BUFFER_MODE: () => LR,
      Unpackr: () => oU,
      addExtension: () => SR,
      clearSource: () => PR,
      decode: () => jR,
      decodeIter: () => OR,
      encode: () => FR,
      encodeIter: () => Ug,
      isNativeAccelerationEnabled: () => sU,
      mapsAsObjects: () => gg,
      pack: () => kR,
      roundFloat32: () => fR,
      unpack: () => cR,
      unpackMultiple: () => GR,
      useRecords: () => Rg
    });
    try {
      tU = new TextDecoder
    } catch (tg) {}
    var PU = 0;
    const TU = [];
    var qU, KU, cU, GU, jU, uU = TU,
      CU = 0,
      hU = {},
      QU = 0,
      eU = 0,
      WU = [],
      fU = {
        useRecords: !1,
        mapsAsObjects: !0
      };
    class xU {}
    const mU = new xU;
    mU.name = "MessagePack 0xC1";
    var IU, JU, wU, nU = !1,
      bU = 2;
    try {
      new Function("")
    } catch (tg) {
      bU = 1 / 0
    }
    class oU {
      constructor(UU) {
        UU && (!1 === UU.useRecords && void 0 === UU.mapsAsObjects && (UU.mapsAsObjects = !0), UU.sequential && !1 !== UU.trusted && (UU.trusted = !0, UU.structures || 0 == UU.useRecords || (UU.structures = [], UU.maxSharedStructures || (UU.maxSharedStructures = 0))), UU.structures ? UU.structures.sharedLength = UU.structures.length : UU.getStructures && ((UU.structures = []).uninitialized = !0, UU.structures.sharedLength = 0), UU.int64AsNumber && (UU.int64AsType = "number")), Object.assign(this, UU)
      }
      unpack(UU, RU) {
        if (pU) return ER((() => (PR(), this ? this.unpack(UU, RU) : oU.prototype.unpack.call(fU, UU, RU))));
        UU.buffer || UU.constructor !== ArrayBuffer || (UU = "undefined" !== typeof Buffer ? Buffer.from(UU) : new Uint8Array(UU)), "object" === typeof RU ? (EU = RU.end || UU.length, PU = RU.start || 0) : (PU = 0, EU = RU > -1 ? RU : UU.length), CU = 0, eU = 0, KU = null, uU = TU, cU = null, pU = UU;
        try {
          jU = UU.dataView || (UU.dataView = new DataView(UU.buffer, UU.byteOffset, UU.byteLength))
        } catch (tg) {
          if (pU = null, UU instanceof Uint8Array) throw tg;
          throw new Error("Source must be a Uint8Array or Buffer but was a " + (UU && "object" == typeof UU ? UU.constructor.name : typeof UU))
        }
        if (this instanceof oU) {
          if (hU = this, this.structures) return qU = this.structures, ZU(RU);
          (!qU || qU.length > 0) && (qU = [])
        } else hU = fU, (!qU || qU.length > 0) && (qU = []);
        return ZU(RU)
      }
      unpackMultiple(UU, RU) {
        let gU, tU = 0;
        try {
          nU = !0;
          let pU = UU.length,
            EU = this ? this.unpack(UU, pU) : KR.unpack(UU, pU);
          if (!RU) {
            for (gU = [EU]; PU < pU;) tU = PU, gU.push(ZU());
            return gU
          }
          if (!1 === RU(EU, tU, PU)) return;
          for (; PU < pU;)
            if (tU = PU, !1 === RU(ZU(), tU, PU)) return
        } catch (tg) {
          throw tg.lastPosition = tU, tg.values = gU, tg
        } finally {
          nU = !1, PR()
        }
      }
      _mergeStructures(UU, RU) {
        JU && (UU = JU.call(this, UU)), UU = UU || [], Object.isFrozen(UU) && (UU = UU.map((UU => UU.slice(0))));
        for (let gU = 0, tU = UU.length; gU < tU; gU++) {
          let RU = UU[gU];
          RU && (RU.isShared = !0, gU >= 32 && (RU.highByte = gU - 32 >> 5))
        }
        UU.sharedLength = UU.length;
        for (let gU in RU || [])
          if (gU >= 0) {
            let tU = UU[gU],
              pU = RU[gU];
            pU && (tU && ((UU.restoreStructures || (UU.restoreStructures = []))[gU] = tU), UU[gU] = pU)
          } return this.structures = UU
      }
      decode(UU, RU) {
        return this.unpack(UU, RU)
      }
    }

    function ZU(UU) {
      try {
        if (!hU.trusted && !nU) {
          let UU = qU.sharedLength || 0;
          UU < qU.length && (qU.length = UU)
        }
        let RU;
        if (hU.randomAccessStructure && pU[PU] < 64 && pU[PU] >= 32 && IU ? (RU = IU(pU, PU, EU, hU), pU = null, UU && UU.lazy || !RU || (RU = RU.toJSON()), PU = EU) : RU = YU(), cU && (PU = cU.postBundlePosition, cU = null), nU && (qU.restoreStructures = null), PU == EU) qU && qU.restoreStructures && aU(), qU = null, pU = null, GU && (GU = null);
        else {
          if (PU > EU) throw new Error("Unexpected end of MessagePack data");
          if (!nU) {
            let UU;
            try {
              UU = JSON.stringify(RU, ((UU, RU) => "bigint" === typeof RU ? `${RU}n` : RU)).slice(0, 100)
            } catch (tg) {
              UU = "(JSON view not available " + tg + ")"
            }
            throw new Error("Data read, but end of buffer not reached " + UU)
          }
        }
        return RU
      } catch (tg) {
        throw qU && qU.restoreStructures && aU(), PR(), (tg instanceof RangeError || tg.message.startsWith("Unexpected end of buffer") || PU > EU) && (tg.incomplete = !0), tg
      }
    }

    function aU() {
      for (let UU in qU.restoreStructures) qU[UU] = qU.restoreStructures[UU];
      qU.restoreStructures = null
    }

    function YU() {
      let UU = pU[PU++];
      if (UU < 160) {
        if (UU < 128) {
          if (UU < 64) return UU;
          {
            let RU = qU[63 & UU] || hU.getStructures && XU()[63 & UU];
            return RU ? (RU.read || (RU.read = VU(RU, 63 & UU)), RU.read()) : UU
          }
        }
        if (UU < 144) {
          if (UU -= 128, hU.mapsAsObjects) {
            let RU = {};
            for (let gU = 0; gU < UU; gU++) {
              let UU = lU();
              "__proto__" === UU && (UU = "__proto_"), RU[UU] = YU()
            }
            return RU
          } {
            let RU = new Map;
            for (let gU = 0; gU < UU; gU++) RU.set(YU(), YU());
            return RU
          }
        } {
          UU -= 144;
          let RU = new Array(UU);
          for (let gU = 0; gU < UU; gU++) RU[gU] = YU();
          return hU.freezeData ? Object.freeze(RU) : RU
        }
      }
      if (UU < 192) {
        let RU = UU - 160;
        if (eU >= PU) return KU.slice(PU - QU, (PU += RU) - QU);
        if (0 == eU && EU < 140) {
          let UU = RU < 16 ? zU(RU) : AU(RU);
          if (null != UU) return UU
        }
        return vU(RU)
      } {
        let RU;
        switch (UU) {
          case 192:
            return null;
          case 193:
            return cU ? (RU = YU(), RU > 0 ? cU[1].slice(cU.position1, cU.position1 += RU) : cU[0].slice(cU.position0, cU.position0 -= RU)) : mU;
          case 194:
            return !1;
          case 195:
            return !0;
          case 196:
            if (RU = pU[PU++], void 0 === RU) throw new Error("Unexpected end of buffer");
            return DU(RU);
          case 197:
            return RU = jU.getUint16(PU), PU += 2, DU(RU);
          case 198:
            return RU = jU.getUint32(PU), PU += 4, DU(RU);
          case 199:
            return LU(pU[PU++]);
          case 200:
            return RU = jU.getUint16(PU), PU += 2, LU(RU);
          case 201:
            return RU = jU.getUint32(PU), PU += 4, LU(RU);
          case 202:
            if (RU = jU.getFloat32(PU), hU.useFloat32 > 2) {
              let UU = TR[(127 & pU[PU]) << 1 | pU[PU + 1] >> 7];
              return PU += 4, (UU * RU + (RU > 0 ? .5 : -.5) | 0) / UU
            }
            return PU += 4, RU;
          case 203:
            return RU = jU.getFloat64(PU), PU += 8, RU;
          case 204:
            return pU[PU++];
          case 205:
            return RU = jU.getUint16(PU), PU += 2, RU;
          case 206:
            return RU = jU.getUint32(PU), PU += 4, RU;
          case 207:
            return "number" === hU.int64AsType ? (RU = 4294967296 * jU.getUint32(PU), RU += jU.getUint32(PU + 4)) : "string" === hU.int64AsType ? RU = jU.getBigUint64(PU).toString() : "auto" === hU.int64AsType ? (RU = jU.getBigUint64(PU), RU <= BigInt(2) << BigInt(52) && (RU = Number(RU))) : RU = jU.getBigUint64(PU), PU += 8, RU;
          case 208:
            return jU.getInt8(PU++);
          case 209:
            return RU = jU.getInt16(PU), PU += 2, RU;
          case 210:
            return RU = jU.getInt32(PU), PU += 4, RU;
          case 211:
            return "number" === hU.int64AsType ? (RU = 4294967296 * jU.getInt32(PU), RU += jU.getUint32(PU + 4)) : "string" === hU.int64AsType ? RU = jU.getBigInt64(PU).toString() : "auto" === hU.int64AsType ? (RU = jU.getBigInt64(PU), RU >= BigInt(-2) << BigInt(52) && RU <= BigInt(2) << BigInt(52) && (RU = Number(RU))) : RU = jU.getBigInt64(PU), PU += 8, RU;
          case 212:
            if (RU = pU[PU++], 114 == RU) return UR(63 & pU[PU++]);
            {
              let UU = WU[RU];
              if (UU) return UU.read ? (PU++, UU.read(YU())) : UU.noBuffer ? (PU++, UU()) : UU(pU.subarray(PU, ++PU));
              throw new Error("Unknown extension " + RU)
            }
          case 213:
            return RU = pU[PU], 114 == RU ? (PU++, UR(63 & pU[PU++], pU[PU++])) : LU(2);
          case 214:
            return LU(4);
          case 215:
            return LU(8);
          case 216:
            return LU(16);
          case 217:
            return RU = pU[PU++], eU >= PU ? KU.slice(PU - QU, (PU += RU) - QU) : dU(RU);
          case 218:
            return RU = jU.getUint16(PU), eU >= (PU += 2) ? KU.slice(PU - QU, (PU += RU) - QU) : HU(RU);
          case 219:
            return RU = jU.getUint32(PU), eU >= (PU += 4) ? KU.slice(PU - QU, (PU += RU) - QU) : SU(RU);
          case 220:
            return RU = jU.getUint16(PU), PU += 2, kU(RU);
          case 221:
            return RU = jU.getUint32(PU), PU += 4, kU(RU);
          case 222:
            return RU = jU.getUint16(PU), PU += 2, FU(RU);
          case 223:
            return RU = jU.getUint32(PU), PU += 4, FU(RU);
          default:
            if (UU >= 224) return UU - 256;
            if (void 0 === UU) {
              let UU = new Error("Unexpected end of MessagePack data");
              throw UU.incomplete = !0, UU
            }
            throw new Error("Unknown MessagePack token " + UU)
        }
      }
    }
    const BU = /^[a-zA-Z_$][a-zA-Z\d_$]*$/;

    function VU(UU, RU) {
      function gU() {
        if (gU.count++ > bU) {
          let gU = UU.read = new Function("r", "return function(){return " + (hU.freezeData ? "Object.freeze" : "") + "({" + UU.map((UU => "__proto__" === UU ? "__proto_:r()" : BU.test(UU) ? UU + ":r()" : "[" + JSON.stringify(UU) + "]:r()")).join(",") + "})}")(YU);
          return 0 === UU.highByte && (UU.read = rU(RU, UU.read)), gU()
        }
        let tU = {};
        for (let RU = 0, gU = UU.length; RU < gU; RU++) {
          let gU = UU[RU];
          "__proto__" === gU && (gU = "__proto_"), tU[gU] = YU()
        }
        return hU.freezeData ? Object.freeze(tU) : tU
      }
      return gU.count = 0, 0 === UU.highByte ? rU(RU, gU) : gU
    }
    const rU = (UU, RU) => function() {
      let gU = pU[PU++];
      if (0 === gU) return RU();
      let tU = UU < 32 ? -(UU + (gU << 5)) : UU + (gU << 5),
        EU = qU[tU] || XU()[tU];
      if (!EU) throw new Error("Record id is not defined for " + tU);
      return EU.read || (EU.read = VU(EU, UU)), EU.read()
    };

    function XU() {
      let UU = ER((() => (pU = null, hU.getStructures())));
      return qU = hU._mergeStructures(UU, qU)
    }
    var vU = yU,
      dU = yU,
      HU = yU,
      SU = yU;
    let sU = !1;

    function yU(UU) {
      let RU;
      if (UU < 16 && (RU = zU(UU))) return RU;
      if (UU > 64 && tU) return tU.decode(pU.subarray(PU, PU += UU));
      const gU = PU + UU,
        EU = [];
      for (RU = ""; PU < gU;) {
        const UU = pU[PU++];
        if (0 === (128 & UU)) EU.push(UU);
        else if (192 === (224 & UU)) {
          const RU = 63 & pU[PU++];
          EU.push((31 & UU) << 6 | RU)
        } else if (224 === (240 & UU)) {
          const RU = 63 & pU[PU++],
            gU = 63 & pU[PU++];
          EU.push((31 & UU) << 12 | RU << 6 | gU)
        } else if (240 === (248 & UU)) {
          let RU = (7 & UU) << 18 | (63 & pU[PU++]) << 12 | (63 & pU[PU++]) << 6 | 63 & pU[PU++];
          RU > 65535 && (RU -= 65536, EU.push(RU >>> 10 & 1023 | 55296), RU = 56320 | 1023 & RU), EU.push(RU)
        } else EU.push(UU);
        EU.length >= 4096 && (RU += iU.apply(String, EU), EU.length = 0)
      }
      return EU.length > 0 && (RU += iU.apply(String, EU)), RU
    }

    function kU(UU) {
      let RU = new Array(UU);
      for (let gU = 0; gU < UU; gU++) RU[gU] = YU();
      return hU.freezeData ? Object.freeze(RU) : RU
    }

    function FU(UU) {
      if (hU.mapsAsObjects) {
        let RU = {};
        for (let gU = 0; gU < UU; gU++) {
          let UU = lU();
          "__proto__" === UU && (UU = "__proto_"), RU[UU] = YU()
        }
        return RU
      } {
        let RU = new Map;
        for (let gU = 0; gU < UU; gU++) RU.set(YU(), YU());
        return RU
      }
    }
    var iU = String.fromCharCode;

    function AU(UU) {
      let RU = PU,
        gU = new Array(UU);
      for (let tU = 0; tU < UU; tU++) {
        const UU = pU[PU++];
        if ((128 & UU) > 0) return void(PU = RU);
        gU[tU] = UU
      }
      return iU.apply(String, gU)
    }

    function zU(UU) {
      if (UU < 4) {
        if (UU < 2) {
          if (0 === UU) return "";
          {
            let UU = pU[PU++];
            return (128 & UU) > 1 ? void(PU -= 1) : iU(UU)
          }
        } {
          let RU = pU[PU++],
            gU = pU[PU++];
          if ((128 & RU) > 0 || (128 & gU) > 0) return void(PU -= 2);
          if (UU < 3) return iU(RU, gU);
          let tU = pU[PU++];
          return (128 & tU) > 0 ? void(PU -= 3) : iU(RU, gU, tU)
        }
      } {
        let RU = pU[PU++],
          gU = pU[PU++],
          tU = pU[PU++],
          EU = pU[PU++];
        if ((128 & RU) > 0 || (128 & gU) > 0 || (128 & tU) > 0 || (128 & EU) > 0) return void(PU -= 4);
        if (UU < 6) {
          if (4 === UU) return iU(RU, gU, tU, EU);
          {
            let UU = pU[PU++];
            return (128 & UU) > 0 ? void(PU -= 5) : iU(RU, gU, tU, EU, UU)
          }
        }
        if (UU < 8) {
          let TU = pU[PU++],
            qU = pU[PU++];
          if ((128 & TU) > 0 || (128 & qU) > 0) return void(PU -= 6);
          if (UU < 7) return iU(RU, gU, tU, EU, TU, qU);
          let KU = pU[PU++];
          return (128 & KU) > 0 ? void(PU -= 7) : iU(RU, gU, tU, EU, TU, qU, KU)
        } {
          let TU = pU[PU++],
            qU = pU[PU++],
            KU = pU[PU++],
            cU = pU[PU++];
          if ((128 & TU) > 0 || (128 & qU) > 0 || (128 & KU) > 0 || (128 & cU) > 0) return void(PU -= 8);
          if (UU < 10) {
            if (8 === UU) return iU(RU, gU, tU, EU, TU, qU, KU, cU);
            {
              let UU = pU[PU++];
              return (128 & UU) > 0 ? void(PU -= 9) : iU(RU, gU, tU, EU, TU, qU, KU, cU, UU)
            }
          }
          if (UU < 12) {
            let GU = pU[PU++],
              jU = pU[PU++];
            if ((128 & GU) > 0 || (128 & jU) > 0) return void(PU -= 10);
            if (UU < 11) return iU(RU, gU, tU, EU, TU, qU, KU, cU, GU, jU);
            let uU = pU[PU++];
            return (128 & uU) > 0 ? void(PU -= 11) : iU(RU, gU, tU, EU, TU, qU, KU, cU, GU, jU, uU)
          } {
            let GU = pU[PU++],
              jU = pU[PU++],
              uU = pU[PU++],
              CU = pU[PU++];
            if ((128 & GU) > 0 || (128 & jU) > 0 || (128 & uU) > 0 || (128 & CU) > 0) return void(PU -= 12);
            if (UU < 14) {
              if (12 === UU) return iU(RU, gU, tU, EU, TU, qU, KU, cU, GU, jU, uU, CU);
              {
                let UU = pU[PU++];
                return (128 & UU) > 0 ? void(PU -= 13) : iU(RU, gU, tU, EU, TU, qU, KU, cU, GU, jU, uU, CU, UU)
              }
            } {
              let hU = pU[PU++],
                QU = pU[PU++];
              if ((128 & hU) > 0 || (128 & QU) > 0) return void(PU -= 14);
              if (UU < 15) return iU(RU, gU, tU, EU, TU, qU, KU, cU, GU, jU, uU, CU, hU, QU);
              let eU = pU[PU++];
              return (128 & eU) > 0 ? void(PU -= 15) : iU(RU, gU, tU, EU, TU, qU, KU, cU, GU, jU, uU, CU, hU, QU, eU)
            }
          }
        }
      }
    }

    function MU() {
      let UU, RU = pU[PU++];
      if (RU < 192) UU = RU - 160;
      else switch (RU) {
        case 217:
          UU = pU[PU++];
          break;
        case 218:
          UU = jU.getUint16(PU), PU += 2;
          break;
        case 219:
          UU = jU.getUint32(PU), PU += 4;
          break;
        default:
          throw new Error("Expected string")
      }
      return yU(UU)
    }

    function DU(UU) {
      return hU.copyBuffers ? Uint8Array.prototype.slice.call(pU, PU, PU += UU) : pU.subarray(PU, PU += UU)
    }

    function LU(UU) {
      let RU = pU[PU++];
      if (WU[RU]) {
        let gU;
        return WU[RU](pU.subarray(PU, gU = PU += UU), (UU => {
          PU = UU;
          try {
            return YU()
          } finally {
            PU = gU
          }
        }))
      }
      throw new Error("Unknown extension type " + RU)
    }
    var NU = new Array(4096);

    function lU() {
      let UU = pU[PU++];
      if (!(UU >= 160 && UU < 192)) return PU--, OU(YU());
      if (UU -= 160, eU >= PU) return KU.slice(PU - QU, (PU += UU) - QU);
      if (!(0 == eU && EU < 180)) return vU(UU);
      let RU, gU = 4095 & (UU << 5 ^ (UU > 1 ? jU.getUint16(PU) : UU > 0 ? pU[PU] : 0)),
        tU = NU[gU],
        TU = PU,
        qU = PU + UU - 3,
        cU = 0;
      if (tU && tU.bytes == UU) {
        for (; TU < qU;) {
          if (RU = jU.getUint32(TU), RU != tU[cU++]) {
            TU = 1879048192;
            break
          }
          TU += 4
        }
        for (qU += 3; TU < qU;)
          if (RU = pU[TU++], RU != tU[cU++]) {
            TU = 1879048192;
            break
          } if (TU === qU) return PU = TU, tU.string;
        qU -= 3, TU = PU
      }
      for (tU = [], NU[gU] = tU, tU.bytes = UU; TU < qU;) RU = jU.getUint32(TU), tU.push(RU), TU += 4;
      for (qU += 3; TU < qU;) RU = pU[TU++], tU.push(RU);
      let GU = UU < 16 ? zU(UU) : AU(UU);
      return tU.string = null != GU ? GU : vU(UU)
    }

    function OU(UU) {
      if ("string" === typeof UU) return UU;
      if ("number" === typeof UU || "boolean" === typeof UU || "bigint" === typeof UU) return UU.toString();
      if (null == UU) return UU + "";
      if (hU.allowArraysInMapKeys && Array.isArray(UU) && UU.flat().every((UU => ["string", "number", "boolean", "bigint"].includes(typeof UU)))) return UU.flat().toString();
      throw new Error("Invalid property type for record: " + typeof UU)
    }
    const UR = (UU, RU) => {
      let gU = YU().map(OU),
        tU = UU;
      void 0 !== RU && (UU = UU < 32 ? -((RU << 5) + UU) : (RU << 5) + UU, gU.highByte = RU);
      let pU = qU[UU];
      return pU && (pU.isShared || nU) && ((qU.restoreStructures || (qU.restoreStructures = []))[UU] = pU), qU[UU] = gU, gU.read = VU(gU, tU), gU.read()
    };
    WU[0] = () => {}, WU[0].noBuffer = !0, WU[66] = UU => {
      let RU = UU.length,
        gU = BigInt(128 & UU[0] ? UU[0] - 256 : UU[0]);
      for (let tU = 1; tU < RU; tU++) gU <<= BigInt(8), gU += BigInt(UU[tU]);
      return gU
    };
    let RR = {
      Error: Error,
      TypeError: TypeError,
      ReferenceError: ReferenceError
    };
    WU[101] = () => {
      let UU = YU();
      return (RR[UU[0]] || Error)(UU[1], {
        cause: UU[2]
      })
    }, WU[105] = UU => {
      if (!1 === hU.structuredClone) throw new Error("Structured clone extension is disabled");
      let RU = jU.getUint32(PU - 4);
      GU || (GU = new Map);
      let gU, tU = pU[PU];
      gU = tU >= 144 && tU < 160 || 220 == tU || 221 == tU ? [] : {};
      let EU = {
        target: gU
      };
      GU.set(RU, EU);
      let TU = YU();
      return EU.used ? Object.assign(gU, TU) : (EU.target = TU, TU)
    }, WU[112] = UU => {
      if (!1 === hU.structuredClone) throw new Error("Structured clone extension is disabled");
      let RU = jU.getUint32(PU - 4),
        gU = GU.get(RU);
      return gU.used = !0, gU.target
    }, WU[115] = () => new Set(YU());
    const gR = ["Int8", "Uint8", "Uint8Clamped", "Int16", "Uint16", "Int32", "Uint32", "Float32", "Float64", "BigInt64", "BigUint64"].map((UU => UU + "Array"));
    let tR = "object" === typeof globalThis ? globalThis : window;
    WU[116] = UU => {
      let RU = UU[0],
        gU = gR[RU];
      if (!gU) {
        if (16 === RU) {
          let RU = new ArrayBuffer(UU.length - 1);
          return new Uint8Array(RU).set(UU.subarray(1)), RU
        }
        throw new Error("Could not find typed array for code " + RU)
      }
      return new tR[gU](Uint8Array.prototype.slice.call(UU, 1).buffer)
    }, WU[120] = () => {
      let UU = YU();
      return new RegExp(UU[0], UU[1])
    };
    const pR = [];

    function ER(UU) {
      wU && wU();
      let RU = EU,
        gU = PU,
        tU = CU,
        TU = QU,
        WU = eU,
        fU = KU,
        xU = uU,
        mU = GU,
        IU = cU,
        JU = new Uint8Array(pU.slice(0, EU)),
        bU = qU,
        oU = qU.slice(0, qU.length),
        ZU = hU,
        aU = nU,
        YU = UU();
      return EU = RU, PU = gU, CU = tU, QU = TU, eU = WU, KU = fU, uU = xU, GU = mU, cU = IU, pU = JU, nU = aU, (qU = bU).splice(0, qU.length, ...oU), hU = ZU, jU = new DataView(pU.buffer, pU.byteOffset, pU.byteLength), YU
    }

    function PR() {
      pU = null, GU = null, qU = null
    }
    WU[98] = UU => {
      let RU = (UU[0] << 24) + (UU[1] << 16) + (UU[2] << 8) + UU[3],
        gU = PU;
      return PU += RU - UU.length, cU = pR, (cU = [MU(), MU()]).position0 = 0, cU.position1 = 0, cU.postBundlePosition = PU, PU = gU, YU()
    }, WU[255] = UU => 4 == UU.length ? new Date(1e3 * (16777216 * UU[0] + (UU[1] << 16) + (UU[2] << 8) + UU[3])) : 8 == UU.length ? new Date(((UU[0] << 22) + (UU[1] << 14) + (UU[2] << 6) + (UU[3] >> 2)) / 1e6 + 1e3 * (4294967296 * (3 & UU[3]) + 16777216 * UU[4] + (UU[5] << 16) + (UU[6] << 8) + UU[7])) : 12 == UU.length ? new Date(((UU[0] << 24) + (UU[1] << 16) + (UU[2] << 8) + UU[3]) / 1e6 + 1e3 * ((128 & UU[4] ? -281474976710656 : 0) + 1099511627776 * UU[6] + 4294967296 * UU[7] + 16777216 * UU[8] + (UU[9] << 16) + (UU[10] << 8) + UU[11])) : new Date("invalid");
    const TR = new Array(147);
    for (let pg = 0; pg < 256; pg++) TR[pg] = +("1e" + Math.floor(45.15 - .30103 * pg));
    const qR = oU;
    var KR = new oU({
      useRecords: !1
    });
    const cR = KR.unpack,
      GR = KR.unpackMultiple,
      jR = KR.unpack,
      uR = {
        NEVER: 0,
        ALWAYS: 1,
        DECIMAL_ROUND: 3,
        DECIMAL_FIT: 4
      };
    let CR, hR, QR, eR = new Float32Array(1),
      WR = new Uint8Array(eR.buffer, 0, 4);

    function fR(UU) {
      eR[0] = UU;
      let RU = TR[(127 & WR[3]) << 1 | WR[2] >> 7];
      return (RU * UU + (UU > 0 ? .5 : -.5) | 0) / RU
    }
    try {
      CR = new TextEncoder
    } catch (tg) {}
    const xR = "undefined" !== typeof Buffer,
      mR = xR ? function(UU) {
        return Buffer.allocUnsafeSlow(UU)
      } : Uint8Array,
      IR = xR ? Buffer : Uint8Array,
      JR = xR ? 4294967296 : 2144337920;
    let wR, nR, bR, oR, ZR, aR = 0,
      YR = null;
    const BR = /[\u0080-\uFFFF]/,
      VR = Symbol("record-id");
    class rR extends oU {
      constructor(UU) {
        let RU, gU, tU, pU;
        super(UU), this.offset = 0;
        let EU = IR.prototype.utf8Write ? function(UU, RU) {
            return wR.utf8Write(UU, RU, wR.byteLength - RU)
          } : !(!CR || !CR.encodeInto) && function(UU, RU) {
            return CR.encodeInto(UU, wR.subarray(RU)).written
          },
          PU = this;
        UU || (UU = {});
        let TU = UU && UU.sequential,
          qU = UU.structures || UU.saveStructures,
          KU = UU.maxSharedStructures;
        if (null == KU && (KU = qU ? 32 : 0), KU > 8160) throw new Error("Maximum maxSharedStructure is 8160");
        UU.structuredClone && void 0 == UU.moreTypes && (this.moreTypes = !0);
        let cU = UU.maxOwnStructures;
        null == cU && (cU = qU ? 32 : 64), this.structures || 0 == UU.useRecords || (this.structures = []);
        let GU = KU > 32 || cU + KU > 64,
          jU = KU + 64,
          uU = KU + cU + 64;
        if (uU > 8256) throw new Error("Maximum maxSharedStructure + maxOwnStructure is 8192");
        let CU = [],
          hU = 0,
          QU = 0;
        this.pack = this.encode = function(UU, EU) {
          if (wR || (wR = new mR(8192), bR = wR.dataView || (wR.dataView = new DataView(wR.buffer, 0, 8192)), aR = 0), oR = wR.length - 10, oR - aR < 2048 ? (wR = new mR(wR.length), bR = wR.dataView || (wR.dataView = new DataView(wR.buffer, 0, wR.length)), oR = wR.length - 10, aR = 0) : aR = aR + 7 & 2147483640, RU = aR, EU & lR && (aR += 255 & EU), pU = PU.structuredClone ? new Map : null, PU.bundleStrings && "string" !== typeof UU ? (YR = [], YR.size = 1 / 0) : YR = null, tU = PU.structures, tU) {
            tU.uninitialized && (tU = PU._mergeStructures(PU.getStructures()));
            let UU = tU.sharedLength || 0;
            if (UU > KU) throw new Error("Shared structures is larger than maximum shared structures, try increasing maxSharedStructures to " + tU.sharedLength);
            if (!tU.transitions) {
              tU.transitions = Object.create(null);
              for (let RU = 0; RU < UU; RU++) {
                let UU = tU[RU];
                if (!UU) continue;
                let gU, pU = tU.transitions;
                for (let RU = 0, tU = UU.length; RU < tU; RU++) {
                  let tU = UU[RU];
                  gU = pU[tU], gU || (gU = pU[tU] = Object.create(null)), pU = gU
                }
                pU[VR] = RU + 64
              }
              this.lastNamedStructuresLength = UU
            }
            TU || (tU.nextId = UU + 64)
          }
          let qU;
          gU && (gU = !1);
          try {
            PU.randomAccessStructure && UU && UU.constructor && UU.constructor === Object ? oU(UU) : fU(UU);
            let gU = YR;
            if (YR && HR(RU, fU, 0), pU && pU.idsToInsert) {
              let UU = pU.idsToInsert.sort(((UU, RU) => UU.offset > RU.offset ? 1 : -1)),
                tU = UU.length,
                EU = -1;
              for (; gU && tU > 0;) {
                let pU = UU[--tU].offset + RU;
                pU < gU.stringsPosition + RU && -1 === EU && (EU = 0), pU > gU.position + RU ? EU >= 0 && (EU += 6) : (EU >= 0 && (bR.setUint32(gU.position + RU, bR.getUint32(gU.position + RU) + EU), EU = -1), gU = gU.previous, tU++)
              }
              EU >= 0 && gU && bR.setUint32(gU.position + RU, bR.getUint32(gU.position + RU) + EU), aR += 6 * UU.length, aR > oR && wU(aR), PU.offset = aR;
              let TU = function(UU, RU) {
                let gU, tU = 6 * RU.length,
                  pU = UU.length - tU;
                for (; gU = RU.pop();) {
                  let RU = gU.offset,
                    EU = gU.id;
                  UU.copyWithin(RU + tU, RU, pU), tU -= 6;
                  let PU = RU + tU;
                  UU[PU++] = 214, UU[PU++] = 105, UU[PU++] = EU >> 24, UU[PU++] = EU >> 16 & 255, UU[PU++] = EU >> 8 & 255, UU[PU++] = 255 & EU, pU = RU
                }
                return UU
              }(wR.subarray(RU, aR), UU);
              return pU = null, TU
            }
            return PU.offset = aR, EU & LR ? (wR.start = RU, wR.end = aR, wR) : wR.subarray(RU, aR)
          } catch (tg) {
            throw qU = tg, tg
          } finally {
            if (tU && (eU(), gU && PU.saveStructures)) {
              let gU = tU.sharedLength || 0,
                pU = wR.subarray(RU, aR),
                TU = sR(tU, PU);
              if (!qU) return !1 === PU.saveStructures(TU, TU.isCompatible) ? PU.pack(UU, EU) : (PU.lastNamedStructuresLength = gU, wR.length > 1073741824 && (wR = null), pU)
            }
            wR.length > 1073741824 && (wR = null), EU & NR && (aR = RU)
          }
        };
        const eU = () => {
            QU < 10 && QU++;
            let UU = tU.sharedLength || 0;
            if (tU.length > UU && !TU && (tU.length = UU), hU > 1e4) tU.transitions = null, QU = 0, hU = 0, CU.length > 0 && (CU = []);
            else if (CU.length > 0 && !TU) {
              for (let UU = 0, RU = CU.length; UU < RU; UU++) CU[UU][VR] = 0;
              CU = []
            }
          },
          WU = UU => {
            var RU = UU.length;
            RU < 16 ? wR[aR++] = 144 | RU : RU < 65536 ? (wR[aR++] = 220, wR[aR++] = RU >> 8, wR[aR++] = 255 & RU) : (wR[aR++] = 221, bR.setUint32(aR, RU), aR += 4);
            for (let gU = 0; gU < RU; gU++) fU(UU[gU])
          },
          fU = UU => {
            aR > oR && (wR = wU(aR));
            var gU, tU = typeof UU;
            if ("string" === tU) {
              let tU, pU = UU.length;
              if (YR && pU >= 4 && pU < 4096) {
                if ((YR.size += pU) > 21760) {
                  let UU, gU, tU = (YR[0] ? 3 * YR[0].length + YR[1].length : 0) + 10;
                  aR + tU > oR && (wR = wU(aR + tU)), YR.position ? (gU = YR, wR[aR] = 200, aR += 3, wR[aR++] = 98, UU = aR - RU, aR += 4, HR(RU, fU, 0), bR.setUint16(UU + RU - 3, aR - RU - UU)) : (wR[aR++] = 214, wR[aR++] = 98, UU = aR - RU, aR += 4), YR = ["", ""], YR.previous = gU, YR.size = 0, YR.position = UU
                }
                let gU = BR.test(UU);
                return YR[gU ? 0 : 1] += UU, wR[aR++] = 193, void fU(gU ? -pU : pU)
              }
              tU = pU < 32 ? 1 : pU < 256 ? 2 : pU < 65536 ? 3 : 5;
              let PU = 3 * pU;
              if (aR + PU > oR && (wR = wU(aR + PU)), pU < 64 || !EU) {
                let RU, EU, PU, TU = aR + tU;
                for (RU = 0; RU < pU; RU++) EU = UU.charCodeAt(RU), EU < 128 ? wR[TU++] = EU : EU < 2048 ? (wR[TU++] = EU >> 6 | 192, wR[TU++] = 63 & EU | 128) : 55296 === (64512 & EU) && 56320 === (64512 & (PU = UU.charCodeAt(RU + 1))) ? (EU = 65536 + ((1023 & EU) << 10) + (1023 & PU), RU++, wR[TU++] = EU >> 18 | 240, wR[TU++] = EU >> 12 & 63 | 128, wR[TU++] = EU >> 6 & 63 | 128, wR[TU++] = 63 & EU | 128) : (wR[TU++] = EU >> 12 | 224, wR[TU++] = EU >> 6 & 63 | 128, wR[TU++] = 63 & EU | 128);
                gU = TU - aR - tU
              } else gU = EU(UU, aR + tU);
              gU < 32 ? wR[aR++] = 160 | gU : gU < 256 ? (tU < 2 && wR.copyWithin(aR + 2, aR + 1, aR + 1 + gU), wR[aR++] = 217, wR[aR++] = gU) : gU < 65536 ? (tU < 3 && wR.copyWithin(aR + 3, aR + 2, aR + 2 + gU), wR[aR++] = 218, wR[aR++] = gU >> 8, wR[aR++] = 255 & gU) : (tU < 5 && wR.copyWithin(aR + 5, aR + 3, aR + 3 + gU), wR[aR++] = 219, bR.setUint32(aR, gU), aR += 4), aR += gU
            } else if ("number" === tU)
              if (UU >>> 0 === UU) UU < 32 || UU < 128 && !1 === this.useRecords || UU < 64 && !this.randomAccessStructure ? wR[aR++] = UU : UU < 256 ? (wR[aR++] = 204, wR[aR++] = UU) : UU < 65536 ? (wR[aR++] = 205, wR[aR++] = UU >> 8, wR[aR++] = 255 & UU) : (wR[aR++] = 206, bR.setUint32(aR, UU), aR += 4);
              else if ((UU | 0) === UU) UU >= -32 ? wR[aR++] = 256 + UU : UU >= -128 ? (wR[aR++] = 208, wR[aR++] = UU + 256) : UU >= -32768 ? (wR[aR++] = 209, bR.setInt16(aR, UU), aR += 2) : (wR[aR++] = 210, bR.setInt32(aR, UU), aR += 4);
            else {
              let RU;
              if ((RU = this.useFloat32) > 0 && UU < 4294967296 && UU >= -2147483648) {
                let gU;
                if (wR[aR++] = 202, bR.setFloat32(aR, UU), RU < 4 || ((gU = UU * TR[(127 & wR[aR]) << 1 | wR[aR + 1] >> 7]) | 0) === gU) return void(aR += 4);
                aR--
              }
              wR[aR++] = 203, bR.setFloat64(aR, UU), aR += 8
            } else if ("object" === tU || "function" === tU)
              if (UU) {
                if (pU) {
                  let gU = pU.get(UU);
                  if (gU) {
                    if (!gU.id) {
                      let UU = pU.idsToInsert || (pU.idsToInsert = []);
                      gU.id = UU.push(gU)
                    }
                    return wR[aR++] = 214, wR[aR++] = 112, bR.setUint32(aR, gU.id), void(aR += 4)
                  }
                  pU.set(UU, {
                    offset: aR - RU
                  })
                }
                let EU = UU.constructor;
                if (EU === Object) JU(UU);
                else if (EU === Array) WU(UU);
                else if (EU === Map)
                  if (this.mapAsEmptyObject) wR[aR++] = 128;
                  else {
                    (gU = UU.size) < 16 ? wR[aR++] = 128 | gU : gU < 65536 ? (wR[aR++] = 222, wR[aR++] = gU >> 8, wR[aR++] = 255 & gU) : (wR[aR++] = 223, bR.setUint32(aR, gU), aR += 4);
                    for (let [RU, gU] of UU) fU(RU), fU(gU)
                  }
                else {
                  for (let RU = 0, gU = hR.length; RU < gU; RU++) {
                    if (UU instanceof QR[RU]) {
                      let gU = hR[RU];
                      if (gU.write) {
                        gU.type && (wR[aR++] = 212, wR[aR++] = gU.type, wR[aR++] = 0);
                        let RU = gU.write.call(this, UU);
                        return void(RU === UU ? Array.isArray(UU) ? WU(UU) : JU(UU) : fU(RU))
                      }
                      let tU, pU = wR,
                        EU = bR,
                        PU = aR;
                      wR = null;
                      try {
                        tU = gU.pack.call(this, UU, (UU => (wR = pU, pU = null, aR += UU, aR > oR && wU(aR), {
                          target: wR,
                          targetView: bR,
                          position: aR - UU
                        })), fU)
                      } finally {
                        pU && (wR = pU, bR = EU, aR = PU, oR = wR.length - 10)
                      }
                      return void(tU && (tU.length + aR > oR && wU(tU.length + aR), aR = dR(tU, wR, aR, gU.type)))
                    }
                  }
                  if (Array.isArray(UU)) WU(UU);
                  else {
                    if (UU.toJSON) {
                      const RU = UU.toJSON();
                      if (RU !== UU) return fU(RU)
                    }
                    if ("function" === tU) return fU(this.writeFunction && this.writeFunction(UU));
                    JU(UU)
                  }
                }
              } else wR[aR++] = 192;
            else if ("boolean" === tU) wR[aR++] = UU ? 195 : 194;
            else if ("bigint" === tU) {
              if (UU < BigInt(1) << BigInt(63) && UU >= -(BigInt(1) << BigInt(63))) wR[aR++] = 211, bR.setBigInt64(aR, UU);
              else if (UU < BigInt(1) << BigInt(64) && UU > 0) wR[aR++] = 207, bR.setBigUint64(aR, UU);
              else {
                if (!this.largeBigIntToFloat) {
                  if (this.largeBigIntToString) return fU(UU.toString());
                  if (this.useBigIntExtension && UU < BigInt(2) ** BigInt(1023) && UU > -(BigInt(2) ** BigInt(1023))) {
                    wR[aR++] = 199, aR++, wR[aR++] = 66;
                    let RU, gU = [];
                    do {
                      let tU = UU & BigInt(255);
                      RU = (tU & BigInt(128)) === (UU < BigInt(0) ? BigInt(128) : BigInt(0)), gU.push(tU), UU >>= BigInt(8)
                    } while (UU !== BigInt(0) && UU !== BigInt(-1) || !RU);
                    wR[aR - 2] = gU.length;
                    for (let UU = gU.length; UU > 0;) wR[aR++] = Number(gU[--UU]);
                    return
                  }
                  throw new RangeError(UU + " was too large to fit in MessagePack 64-bit integer format, use useBigIntExtension, or set largeBigIntToFloat to convert to float-64, or set largeBigIntToString to convert to string")
                }
                wR[aR++] = 203, bR.setFloat64(aR, Number(UU))
              }
              aR += 8
            } else {
              if ("undefined" !== tU) throw new Error("Unknown type: " + tU);
              this.encodeUndefinedAsNil ? wR[aR++] = 192 : (wR[aR++] = 212, wR[aR++] = 0, wR[aR++] = 0)
            }
          },
          xU = this.variableMapSize || this.coercibleKeyAsNumber || this.skipValues ? UU => {
            let RU;
            if (this.skipValues) {
              RU = [];
              for (let gU in UU) "function" === typeof UU.hasOwnProperty && !UU.hasOwnProperty(gU) || this.skipValues.includes(UU[gU]) || RU.push(gU)
            } else RU = Object.keys(UU);
            let gU, tU = RU.length;
            if (tU < 16 ? wR[aR++] = 128 | tU : tU < 65536 ? (wR[aR++] = 222, wR[aR++] = tU >> 8, wR[aR++] = 255 & tU) : (wR[aR++] = 223, bR.setUint32(aR, tU), aR += 4), this.coercibleKeyAsNumber)
              for (let pU = 0; pU < tU; pU++) {
                gU = RU[pU];
                let tU = Number(gU);
                fU(isNaN(tU) ? gU : tU), fU(UU[gU])
              } else
                for (let pU = 0; pU < tU; pU++) fU(gU = RU[pU]), fU(UU[gU])
          } : UU => {
            wR[aR++] = 222;
            let gU = aR - RU;
            aR += 2;
            let tU = 0;
            for (let RU in UU)("function" !== typeof UU.hasOwnProperty || UU.hasOwnProperty(RU)) && (fU(RU), fU(UU[RU]), tU++);
            if (tU > 65535) throw new Error('Object is too large to serialize with fast 16-bit map size, use the "variableMapSize" option to serialize this object');
            wR[gU++ + RU] = tU >> 8, wR[gU + RU] = 255 & tU
          },
          mU = !1 === this.useRecords ? xU : UU.progressiveRecords && !GU ? UU => {
            let gU, pU, EU = tU.transitions || (tU.transitions = Object.create(null)),
              PU = aR++ - RU;
            for (let TU in UU)
              if ("function" !== typeof UU.hasOwnProperty || UU.hasOwnProperty(TU)) {
                if (gU = EU[TU], gU) EU = gU;
                else {
                  let qU = Object.keys(UU),
                    KU = EU;
                  EU = tU.transitions;
                  let cU = 0;
                  for (let UU = 0, RU = qU.length; UU < RU; UU++) {
                    let RU = qU[UU];
                    gU = EU[RU], gU || (gU = EU[RU] = Object.create(null), cU++), EU = gU
                  }
                  PU + RU + 1 == aR ? (aR--, nU(EU, qU, cU)) : bU(EU, qU, PU, cU), pU = !0, EU = KU[TU]
                }
                fU(UU[TU])
              } if (!pU) {
              let gU = EU[VR];
              gU ? wR[PU + RU] = gU : bU(EU, Object.keys(UU), PU, 0)
            }
          } : UU => {
            let RU, gU = tU.transitions || (tU.transitions = Object.create(null)),
              pU = 0;
            for (let tU in UU)("function" !== typeof UU.hasOwnProperty || UU.hasOwnProperty(tU)) && (RU = gU[tU], RU || (RU = gU[tU] = Object.create(null), pU++), gU = RU);
            let EU = gU[VR];
            EU ? EU >= 96 && GU ? (wR[aR++] = 96 + (31 & (EU -= 96)), wR[aR++] = EU >> 5) : wR[aR++] = EU : nU(gU, gU.__keys__ || Object.keys(UU), pU);
            for (let tU in UU)("function" !== typeof UU.hasOwnProperty || UU.hasOwnProperty(tU)) && fU(UU[tU])
          },
          IU = "function" == typeof this.useRecords && this.useRecords,
          JU = IU ? UU => {
            IU(UU) ? mU(UU) : xU(UU)
          } : mU,
          wU = UU => {
            let gU;
            if (UU > 16777216) {
              if (UU - RU > JR) throw new Error("Packed buffer would be larger than maximum buffer size");
              gU = Math.min(JR, 4096 * Math.round(Math.max((UU - RU) * (UU > 67108864 ? 1.25 : 2), 4194304) / 4096))
            } else gU = 1 + (Math.max(UU - RU << 2, wR.length - 1) >> 12) << 12;
            let tU = new mR(gU);
            return bR = tU.dataView || (tU.dataView = new DataView(tU.buffer, 0, gU)), UU = Math.min(UU, wR.length), wR.copy ? wR.copy(tU, 0, RU, UU) : tU.set(wR.slice(RU, UU)), aR -= RU, RU = 0, oR = tU.length - 10, wR = tU
          },
          nU = (UU, RU, pU) => {
            let EU = tU.nextId;
            EU || (EU = 64), EU < jU && this.shouldShareStructure && !this.shouldShareStructure(RU) ? (EU = tU.nextOwnId, EU < uU || (EU = jU), tU.nextOwnId = EU + 1) : (EU >= uU && (EU = jU), tU.nextId = EU + 1);
            let PU = RU.highByte = EU >= 96 && GU ? EU - 96 >> 5 : -1;
            UU[VR] = EU, UU.__keys__ = RU, tU[EU - 64] = RU, EU < jU ? (RU.isShared = !0, tU.sharedLength = EU - 63, gU = !0, PU >= 0 ? (wR[aR++] = 96 + (31 & EU), wR[aR++] = PU) : wR[aR++] = EU) : (PU >= 0 ? (wR[aR++] = 213, wR[aR++] = 114, wR[aR++] = 96 + (31 & EU), wR[aR++] = PU) : (wR[aR++] = 212, wR[aR++] = 114, wR[aR++] = EU), pU && (hU += QU * pU), CU.length >= cU && (CU.shift()[VR] = 0), CU.push(UU), fU(RU))
          },
          bU = (UU, gU, tU, pU) => {
            let EU = wR,
              PU = aR,
              TU = oR,
              qU = RU;
            wR = nR, aR = 0, RU = 0, wR || (nR = wR = new mR(8192)), oR = wR.length - 10, nU(UU, gU, pU), nR = wR;
            let KU = aR;
            if (wR = EU, aR = PU, oR = TU, RU = qU, KU > 1) {
              let UU = aR + KU - 1;
              UU > oR && wU(UU);
              let gU = tU + RU;
              wR.copyWithin(gU + KU, gU + 1, aR), wR.set(nR.slice(0, KU), gU), aR = UU
            } else wR[tU + RU] = nR[0]
          },
          oU = UU => {
            let pU = ZR(UU, wR, RU, aR, tU, wU, ((UU, RU, tU) => {
              if (tU) return gU = !0;
              aR = RU;
              let pU = wR;
              return fU(UU), eU(), pU !== wR ? {
                position: aR,
                targetView: bR,
                target: wR
              } : aR
            }), this);
            if (0 === pU) return JU(UU);
            aR = pU
          }
      }
      useBuffer(UU) {
        wR = UU, bR = wR.dataView || (wR.dataView = new DataView(wR.buffer, wR.byteOffset, wR.byteLength)), aR = 0
      }
      set position(UU) {
        aR = UU
      }
      get position() {
        return aR
      }
      set buffer(UU) {
        wR = UU
      }
      get buffer() {
        return wR
      }
      clearSharedData() {
        this.structures && (this.structures = []), this.typedStructs && (this.typedStructs = [])
      }
    }

    function XR(UU, RU, gU, tU) {
      let pU = UU.byteLength;
      if (pU + 1 < 256) {
        var {
          target: EU,
          position: PU
        } = gU(4 + pU);
        EU[PU++] = 199, EU[PU++] = pU + 1
      } else if (pU + 1 < 65536) {
        var {
          target: EU,
          position: PU
        } = gU(5 + pU);
        EU[PU++] = 200, EU[PU++] = pU + 1 >> 8, EU[PU++] = pU + 1 & 255
      } else {
        var {
          target: EU,
          position: PU,
          targetView: TU
        } = gU(7 + pU);
        EU[PU++] = 201, TU.setUint32(PU, pU + 1), PU += 4
      }
      EU[PU++] = 116, EU[PU++] = RU, UU.buffer || (UU = new Uint8Array(UU)), EU.set(new Uint8Array(UU.buffer, UU.byteOffset, UU.byteLength), PU)
    }

    function vR(UU, RU) {
      let gU = UU.byteLength;
      var tU, pU;
      if (gU < 256) {
        var {
          target: tU,
          position: pU
        } = RU(gU + 2);
        tU[pU++] = 196, tU[pU++] = gU
      } else if (gU < 65536) {
        var {
          target: tU,
          position: pU
        } = RU(gU + 3);
        tU[pU++] = 197, tU[pU++] = gU >> 8, tU[pU++] = 255 & gU
      } else {
        var {
          target: tU,
          position: pU,
          targetView: EU
        } = RU(gU + 5);
        tU[pU++] = 198, EU.setUint32(pU, gU), pU += 4
      }
      tU.set(UU, pU)
    }

    function dR(UU, RU, gU, tU) {
      let pU = UU.length;
      switch (pU) {
        case 1:
          RU[gU++] = 212;
          break;
        case 2:
          RU[gU++] = 213;
          break;
        case 4:
          RU[gU++] = 214;
          break;
        case 8:
          RU[gU++] = 215;
          break;
        case 16:
          RU[gU++] = 216;
          break;
        default:
          pU < 256 ? (RU[gU++] = 199, RU[gU++] = pU) : pU < 65536 ? (RU[gU++] = 200, RU[gU++] = pU >> 8, RU[gU++] = 255 & pU) : (RU[gU++] = 201, RU[gU++] = pU >> 24, RU[gU++] = pU >> 16 & 255, RU[gU++] = pU >> 8 & 255, RU[gU++] = 255 & pU)
      }
      return RU[gU++] = tU, RU.set(UU, gU), gU += pU
    }

    function HR(UU, RU, gU) {
      if (YR.length > 0) {
        bR.setUint32(YR.position + UU, aR + gU - YR.position - UU), YR.stringsPosition = aR - UU;
        let tU = YR;
        YR = null, RU(tU[0]), RU(tU[1])
      }
    }

    function SR(UU) {
      if (UU.Class) {
        if (!UU.pack && !UU.write) throw new Error("Extension has no pack or write function");
        if (UU.pack && !UU.type) throw new Error("Extension has no type (numeric code to identify the extension)");
        QR.unshift(UU.Class), hR.unshift(UU)
      }! function(UU) {
        UU.unpack ? WU[UU.type] = UU.unpack : WU[UU.type] = UU
      }(UU)
    }

    function sR(UU, RU) {
      return UU.isCompatible = UU => {
        let gU = !UU || (RU.lastNamedStructuresLength || 0) === UU.length;
        return gU || RU._mergeStructures(UU), gU
      }, UU
    }
    QR = [Date, Set, Error, RegExp, ArrayBuffer, Object.getPrototypeOf(Uint8Array.prototype).constructor, xU], hR = [{
      pack(UU, RU, gU) {
        let tU = UU.getTime() / 1e3;
        if ((this.useTimestamp32 || 0 === UU.getMilliseconds()) && tU >= 0 && tU < 4294967296) {
          let {
            target: UU,
            targetView: gU,
            position: pU
          } = RU(6);
          UU[pU++] = 214, UU[pU++] = 255, gU.setUint32(pU, tU)
        } else if (tU > 0 && tU < 4294967296) {
          let {
            target: gU,
            targetView: pU,
            position: EU
          } = RU(10);
          gU[EU++] = 215, gU[EU++] = 255, pU.setUint32(EU, 4e6 * UU.getMilliseconds() + (tU / 1e3 / 4294967296 | 0)), pU.setUint32(EU + 4, tU)
        } else if (isNaN(tU)) {
          if (this.onInvalidDate) return RU(0), gU(this.onInvalidDate());
          let {
            target: UU,
            targetView: tU,
            position: pU
          } = RU(3);
          UU[pU++] = 212, UU[pU++] = 255, UU[pU++] = 255
        } else {
          let {
            target: gU,
            targetView: pU,
            position: EU
          } = RU(15);
          gU[EU++] = 199, gU[EU++] = 12, gU[EU++] = 255, pU.setUint32(EU, 1e6 * UU.getMilliseconds()), pU.setBigInt64(EU + 4, BigInt(Math.floor(tU)))
        }
      }
    }, {
      pack(UU, RU, gU) {
        if (this.setAsEmptyObject) return RU(0), gU({});
        let tU = Array.from(UU),
          {
            target: pU,
            position: EU
          } = RU(this.moreTypes ? 3 : 0);
        this.moreTypes && (pU[EU++] = 212, pU[EU++] = 115, pU[EU++] = 0), gU(tU)
      }
    }, {
      pack(UU, RU, gU) {
        let {
          target: tU,
          position: pU
        } = RU(this.moreTypes ? 3 : 0);
        this.moreTypes && (tU[pU++] = 212, tU[pU++] = 101, tU[pU++] = 0), gU([UU.name, UU.message, UU.cause])
      }
    }, {
      pack(UU, RU, gU) {
        let {
          target: tU,
          position: pU
        } = RU(this.moreTypes ? 3 : 0);
        this.moreTypes && (tU[pU++] = 212, tU[pU++] = 120, tU[pU++] = 0), gU([UU.source, UU.flags])
      }
    }, {
      pack(UU, RU) {
        this.moreTypes ? XR(UU, 16, RU) : vR(xR ? Buffer.from(UU) : new Uint8Array(UU), RU)
      }
    }, {
      pack(UU, RU) {
        let gU = UU.constructor;
        gU !== IR && this.moreTypes ? XR(UU, gR.indexOf(gU.name), RU) : vR(UU, RU)
      }
    }, {
      pack(UU, RU) {
        let {
          target: gU,
          position: tU
        } = RU(1);
        gU[tU] = 193
      }
    }];
    let yR = new rR({
      useRecords: !1
    });
    const kR = yR.pack,
      FR = yR.pack,
      iR = rR,
      {
        NEVER: AR,
        ALWAYS: zR,
        DECIMAL_ROUND: MR,
        DECIMAL_FIT: DR
      } = uR,
      LR = 512,
      NR = 1024,
      lR = 2048;
    const OR = function(UU) {
        let RU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        if (!UU || "object" !== typeof UU) throw new Error("first argument must be an Iterable, Async Iterable, Iterator, Async Iterator, or a promise");
        const gU = new oU(RU);
        let tU;
        const pU = UU => {
          let RU;
          tU && (UU = Buffer.concat([tU, UU]), tU = void 0);
          try {
            RU = gU.unpackMultiple(UU)
          } catch (pU) {
            if (!pU.incomplete) throw pU;
            tU = UU.slice(pU.lastPosition), RU = pU.values
          }
          return RU
        };
        return "function" === typeof UU[Symbol.iterator] ? function*() {
          for (const RU of UU) yield* pU(RU)
        }() : "function" === typeof UU[Symbol.asyncIterator] ? async function*() {
          for await (const RU of UU) yield* pU(RU)
        }(): void 0
      },
      Ug = function(UU) {
        let RU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        if (UU && "object" === typeof UU) {
          if ("function" === typeof UU[Symbol.iterator]) return function*(UU, RU) {
            const gU = new rR(RU);
            for (const tU of UU) yield gU.pack(tU)
          }(UU, RU);
          if ("function" === typeof UU.then || "function" === typeof UU[Symbol.asyncIterator]) return async function*(UU, RU) {
            const gU = new rR(RU);
            for await (const tU of UU) yield gU.pack(tU)
          }(UU, RU);
          throw new Error("first argument must be an Iterable, Async Iterable, Iterator, Async Iterator, or a Promise")
        }
        throw new Error("first argument must be an Iterable, Async Iterable, or a Promise for an Async Iterable")
      },
      Rg = !1,
      gg = !0
  },
  8742: (UU, RU, gU) => {
    gU.r(RU), gU.d(RU, {
      $changes: () => hU,
      $childType: () => QU,
      $decoder: () => cU,
      $deleteByIndex: () => uU,
      $encoder: () => KU,
      $filter: () => GU,
      $getByIndex: () => jU,
      $numFields: () => bU,
      $refId: () => TU,
      $track: () => qU,
      $values: () => mU,
      ArraySchema: () => gt,
      Callbacks: () => tp,
      ChangeTree: () => ag,
      CollectionSchema: () => Et,
      Decoder: () => Dt,
      Encoder: () => it,
      FieldBuilder: () => qt,
      MapSchema: () => pt,
      Metadata: () => MR,
      OPERATION: () => pU,
      Reflection: () => Ot,
      ReflectionField: () => Nt,
      ReflectionType: () => lt,
      Root: () => Bt,
      Schema: () => Zt,
      SetSchema: () => Pt,
      StateCallbackStrategy: () => gp,
      StateView: () => dt,
      StreamSchema: () => Tt,
      TypeContext: () => sR,
      createPool: () => Ep,
      decode: () => fR,
      decodeKeyValueOperation: () => Lg,
      decodeSchemaOperation: () => Dg,
      defineCustomTypes: () => JR,
      defineTypes: () => nt,
      deprecated: () => Jt,
      dumpChanges: () => ot,
      encode: () => RR,
      encodeArray: () => Hg,
      encodeIndexedEntry: () => vg,
      encodeKeyValueOperation: () => dg,
      encodeMapEntry: () => Xg,
      encodeSchemaOperation: () => rg,
      Nu: () => ht,
      fullStateOnly: () => ft,
      getDecoderStateCallbacks: () => Up,
      getEncodeDescriptor: () => Ug,
      getRawChangesCallback: () => Rp,
      isBuilder: () => Kt,
      patchOnly: () => Wt,
      registerType: () => IR,
      schema: () => bt,
      t: () => ut,
      type: () => xt,
      unreliable: () => et,
      view: () => Qt
    });
    const tU = 255;
    var pU;

    function EU(UU) {
      Object.defineProperty(UU, Symbol.metadata, {
        value: void 0,
        writable: !0,
        configurable: !0,
        enumerable: !1
      })
    }! function(UU) {
      UU[UU.ADD = 128] = "ADD", UU[UU.REPLACE = 0] = "REPLACE", UU[UU.DELETE = 64] = "DELETE", UU[UU.DELETE_AND_MOVE = 96] = "DELETE_AND_MOVE", UU[UU.MOVE_AND_ADD = 160] = "MOVE_AND_ADD", UU[UU.DELETE_AND_ADD = 192] = "DELETE_AND_ADD", UU[UU.CLEAR = 10] = "CLEAR", UU[UU.REVERSE = 15] = "REVERSE", UU[UU.MOVE = 32] = "MOVE", UU[UU.DELETE_BY_REFID = 33] = "DELETE_BY_REFID", UU[UU.ADD_BY_REFID = 129] = "ADD_BY_REFID"
    }(pU || (pU = {})), Symbol.metadata ??= Symbol.for("Symbol.metadata");
    const PU = "undefined" !== typeof globalThis ? globalThis : "undefined" !== typeof global ? global : "undefined" !== typeof self ? self : "undefined" !== typeof window ? window : {};
    if ("function" === typeof Symbol && "function" !== typeof Symbol.for) {
      const UU = "colyseus.symbolRegistry",
        RU = PU[UU] || (PU[UU] = Object.create(null));
      Symbol.for = function(UU) {
        return RU[UU] || (RU[UU] = Symbol(UU))
      }, Symbol.keyFor = function(UU) {
        for (const gU in RU)
          if (RU[gU] === UU) return gU
      }
    }
    const TU = Symbol.for("$refId"),
      qU = "~track",
      KU = "~encoder",
      cU = "~decoder",
      GU = "~filter",
      jU = "~getByIndex",
      uU = "~deleteByIndex",
      CU = "~resyncPrune",
      hU = Symbol.for("$changes"),
      QU = Symbol.for("$childType"),
      eU = Symbol.for("$proxyTarget"),
      WU = "~onEncodeEnd",
      fU = "~reset",
      xU = "~onDecodeEnd",
      mU = Symbol.for("$values"),
      IU = "~builder",
      JU = "~descriptors",
      wU = "~__encodeDescriptor",
      nU = "~encoders",
      bU = "~__numFields",
      oU = "~__refTypeFieldIndexes",
      ZU = "~__viewFieldIndexes",
      aU = "$__fieldIndexesByViewTag",
      YU = "~__unreliableFieldIndexes",
      BU = "~__patchOnlyFieldIndexes",
      VU = "~__fullSyncSkipIndexes",
      rU = "~__fullStateOnlyFieldIndexes",
      XU = "~__streamFieldIndexes",
      vU = "~__streamPriorities";
    let dU;
    try {
      dU = new TextEncoder
    } catch (Pp) {}
    const HU = new ArrayBuffer(8),
      SU = new Int32Array(HU),
      sU = new Float32Array(HU),
      yU = new Float64Array(HU),
      kU = new BigInt64Array(HU),
      FU = "undefined" !== typeof Buffer && Buffer.byteLength ? Buffer.byteLength : function(UU, RU) {
        for (var gU = 0, tU = 0, pU = 0, EU = UU.length; pU < EU; pU++)(gU = UU.charCodeAt(pU)) < 128 ? tU += 1 : gU < 2048 ? tU += 2 : gU < 55296 || gU >= 57344 ? tU += 3 : (pU++, tU += 4);
        return tU
      };

    function iU(UU, RU, gU) {
      for (var tU = 0, pU = 0, EU = RU.length; pU < EU; pU++)(tU = RU.charCodeAt(pU)) < 128 ? UU[gU.offset++] = tU : tU < 2048 ? (UU[gU.offset] = 192 | tU >> 6, UU[gU.offset + 1] = 128 | 63 & tU, gU.offset += 2) : tU < 55296 || tU >= 57344 ? (UU[gU.offset] = 224 | tU >> 12, UU[gU.offset + 1] = 128 | tU >> 6 & 63, UU[gU.offset + 2] = 128 | 63 & tU, gU.offset += 3) : (pU++, tU = 65536 + ((1023 & tU) << 10 | 1023 & RU.charCodeAt(pU)), UU[gU.offset] = 240 | tU >> 18, UU[gU.offset + 1] = 128 | tU >> 12 & 63, UU[gU.offset + 2] = 128 | tU >> 6 & 63, UU[gU.offset + 3] = 128 | 63 & tU, gU.offset += 4)
    }

    function AU(UU, RU, gU) {
      UU[gU.offset++] = 255 & RU
    }

    function zU(UU, RU, gU) {
      UU[gU.offset++] = 255 & RU, UU[gU.offset++] = RU >> 8 & 255
    }

    function MU(UU, RU, gU) {
      UU[gU.offset++] = 255 & RU, UU[gU.offset++] = RU >> 8 & 255
    }

    function DU(UU, RU, gU) {
      UU[gU.offset++] = 255 & RU, UU[gU.offset++] = RU >> 8 & 255, UU[gU.offset++] = RU >> 16 & 255, UU[gU.offset++] = RU >> 24 & 255
    }

    function LU(UU, RU, gU) {
      const tU = RU >> 24,
        pU = RU >> 16,
        EU = RU >> 8,
        PU = RU;
      UU[gU.offset++] = 255 & PU, UU[gU.offset++] = 255 & EU, UU[gU.offset++] = 255 & pU, UU[gU.offset++] = 255 & tU
    }

    function NU(UU, RU, gU) {
      const tU = Math.floor(RU / Math.pow(2, 32));
      LU(UU, RU >>> 0, gU), LU(UU, tU, gU)
    }

    function lU(UU, RU, gU) {
      const tU = RU / Math.pow(2, 32) | 0;
      LU(UU, RU >>> 0, gU), LU(UU, tU, gU)
    }

    function OU(UU, RU, gU) {
      sU[0] = RU, DU(UU, SU[0], gU)
    }

    function UR(UU, RU, gU) {
      yU[0] = RU, DU(UU, SU[0], gU), DU(UU, SU[1], gU)
    }
    const RR = {
        int8: AU,
        uint8: function(UU, RU, gU) {
          UU[gU.offset++] = 255 & RU
        },
        int16: zU,
        uint16: MU,
        int32: DU,
        uint32: LU,
        int64: NU,
        uint64: lU,
        bigint64: function(UU, RU, gU) {
          kU[0] = BigInt.asIntN(64, RU), DU(UU, SU[0], gU), DU(UU, SU[1], gU)
        },
        biguint64: function(UU, RU, gU) {
          kU[0] = BigInt.asIntN(64, RU), DU(UU, SU[0], gU), DU(UU, SU[1], gU)
        },
        float32: OU,
        float64: UR,
        boolean: function(UU, RU, gU) {
          UU[gU.offset++] = RU ? 1 : 0
        },
        string: function(UU, RU, gU) {
          RU || (RU = "");
          let tU = FU(RU, "utf8"),
            pU = 0;
          if (tU < 32) UU[gU.offset++] = 160 | tU, pU = 1;
          else if (tU < 256) UU[gU.offset++] = 217, UU[gU.offset++] = tU, pU = 2;
          else if (tU < 65536) UU[gU.offset++] = 218, MU(UU, tU, gU), pU = 3;
          else {
            if (!(tU < 4294967296)) throw new Error("String too long");
            UU[gU.offset++] = 219, LU(UU, tU, gU), pU = 5
          }
          return iU(UU, RU, gU), pU + tU
        },
        number: function UU(RU, gU, tU) {
          return isNaN(gU) ? UU(RU, 0, tU) : isFinite(gU) ? gU !== (0 | gU) ? Math.abs(gU) <= 34028235e31 && (sU[0] = gU, Math.abs(Math.abs(sU[0]) - Math.abs(gU)) < 1e-4) ? (RU[tU.offset++] = 202, OU(RU, gU, tU), 5) : (RU[tU.offset++] = 203, UR(RU, gU, tU), 9) : gU >= 0 ? gU < 128 ? (RU[tU.offset++] = 255 & gU, 1) : gU < 256 ? (RU[tU.offset++] = 204, RU[tU.offset++] = 255 & gU, 2) : gU < 65536 ? (RU[tU.offset++] = 205, MU(RU, gU, tU), 3) : gU < 4294967296 ? (RU[tU.offset++] = 206, LU(RU, gU, tU), 5) : (RU[tU.offset++] = 207, lU(RU, gU, tU), 9) : gU >= -32 ? (RU[tU.offset++] = 224 | gU + 32, 1) : gU >= -128 ? (RU[tU.offset++] = 208, AU(RU, gU, tU), 2) : gU >= -32768 ? (RU[tU.offset++] = 209, zU(RU, gU, tU), 3) : gU >= -2147483648 ? (RU[tU.offset++] = 210, DU(RU, gU, tU), 5) : (RU[tU.offset++] = 211, NU(RU, gU, tU), 9) : UU(RU, gU > 0 ? Number.MAX_SAFE_INTEGER : -Number.MAX_SAFE_INTEGER, tU)
        },
        utf8Write: iU,
        utf8Length: FU
      },
      gR = new ArrayBuffer(8),
      tR = new Int32Array(gR),
      pR = new Float32Array(gR),
      ER = new Float64Array(gR),
      PR = new BigUint64Array(gR),
      TR = new BigInt64Array(gR);

    function qR(UU, RU, gU) {
      gU > UU.length - RU.offset && (gU = UU.length - RU.offset);
      for (var tU = "", pU = 0, EU = RU.offset, PU = RU.offset + gU; EU < PU; EU++) {
        var TU = UU[EU];
        if (0 !== (128 & TU))
          if (192 !== (224 & TU))
            if (224 !== (240 & TU)) {
              if (240 !== (248 & TU)) {
                console.error("decode.utf8Read(): Invalid byte " + TU + " at offset " + EU + ". Skip to end of string: " + (RU.offset + gU));
                break
              }(pU = (7 & TU) << 18 | (63 & UU[++EU]) << 12 | (63 & UU[++EU]) << 6 | 63 & UU[++EU]) >= 65536 ? (pU -= 65536, tU += String.fromCharCode(55296 + (pU >>> 10), 56320 + (1023 & pU))) : tU += String.fromCharCode(pU)
            } else tU += String.fromCharCode((15 & TU) << 12 | (63 & UU[++EU]) << 6 | 63 & UU[++EU]);
        else tU += String.fromCharCode((31 & TU) << 6 | 63 & UU[++EU]);
        else tU += String.fromCharCode(TU)
      }
      return RU.offset += gU, tU
    }

    function KR(UU, RU) {
      return cR(UU, RU) << 24 >> 24
    }

    function cR(UU, RU) {
      return UU[RU.offset++]
    }

    function GR(UU, RU) {
      return jR(UU, RU) << 16 >> 16
    }

    function jR(UU, RU) {
      return UU[RU.offset++] | UU[RU.offset++] << 8
    }

    function uR(UU, RU) {
      return UU[RU.offset++] | UU[RU.offset++] << 8 | UU[RU.offset++] << 16 | UU[RU.offset++] << 24
    }

    function CR(UU, RU) {
      return uR(UU, RU) >>> 0
    }

    function hR(UU, RU) {
      return tR[0] = uR(UU, RU), pR[0]
    }

    function QR(UU, RU) {
      return tR[0] = uR(UU, RU), tR[1] = uR(UU, RU), ER[0]
    }

    function eR(UU, RU) {
      const gU = CR(UU, RU);
      return uR(UU, RU) * Math.pow(2, 32) + gU
    }

    function WR(UU, RU) {
      const gU = CR(UU, RU);
      return CR(UU, RU) * Math.pow(2, 32) + gU
    }
    const fR = {
        utf8Read: qR,
        int8: KR,
        uint8: cR,
        int16: GR,
        uint16: jR,
        int32: uR,
        uint32: CR,
        float32: hR,
        float64: QR,
        int64: eR,
        uint64: WR,
        bigint64: function(UU, RU) {
          return tR[0] = uR(UU, RU), tR[1] = uR(UU, RU), TR[0]
        },
        biguint64: function(UU, RU) {
          return tR[0] = uR(UU, RU), tR[1] = uR(UU, RU), PR[0]
        },
        boolean: function(UU, RU) {
          return cR(UU, RU) > 0
        },
        string: function(UU, RU) {
          const gU = UU[RU.offset++];
          let tU;
          return gU < 192 ? tU = 31 & gU : 217 === gU ? tU = cR(UU, RU) : 218 === gU ? tU = jR(UU, RU) : 219 === gU && (tU = CR(UU, RU)), qR(UU, RU, tU)
        },
        number: function(UU, RU) {
          const gU = UU[RU.offset++];
          return gU < 128 ? gU : 202 === gU ? hR(UU, RU) : 203 === gU ? QR(UU, RU) : 204 === gU ? cR(UU, RU) : 205 === gU ? jR(UU, RU) : 206 === gU ? CR(UU, RU) : 207 === gU ? WR(UU, RU) : 208 === gU ? KR(UU, RU) : 209 === gU ? GR(UU, RU) : 210 === gU ? uR(UU, RU) : 211 === gU ? eR(UU, RU) : gU > 223 ? -1 * (255 - gU + 1) : void 0
        },
        stringCheck: function(UU, RU) {
          const gU = UU[RU.offset];
          return gU < 192 && gU > 160 || 217 === gU || 218 === gU || 219 === gU
        }
      },
      xR = {},
      mR = new Map;

    function IR(UU, RU) {
      RU.constructor && (Object.prototype.hasOwnProperty.call(RU, "constructor") && null == RU.constructor[Symbol.metadata] && EU(RU.constructor), mR.set(RU.constructor, UU), xR[UU] = RU), RU.encode && (RR[UU] = RU.encode), RU.decode && (fR[UU] = RU.decode)
    }

    function JR(UU) {
      for (const RU in UU) IR(RU, UU[RU]);
      return UU => xt(UU)
    }
    const wR = "ArraySchema does not support streaming \u2014 positional ops (splice / unshift / reverse) shift subsequent indexes, so holding ADDs back for a later tick under `maxPerTick` would desync the decoder. Use `t.stream(X)` (stable monotonic positions) or `t.map(X).stream()` (stable keys) instead.";

    function nR() {
      return {
        pendingByView: new Map,
        sentByView: new Map,
        broadcastPending: new Set,
        sentBroadcast: new Set,
        broadcastDeletes: new Set,
        maxPerTick: 32
      }
    }

    function bR(UU) {
      return UU._stream ??= nR()
    }

    function oR(UU, RU, gU) {
      0 === RU.activeViews.size && bR(UU).broadcastPending.add(gU)
    }

    function ZR(UU, RU, gU, tU) {
      const EU = UU._stream;
      if (void 0 === EU) return !0;
      let PU = !1;
      return EU.broadcastPending.delete(tU) ? PU = !0 : EU.sentBroadcast.delete(tU) && EU.broadcastDeletes.add(tU), RU.forEachActiveView((UU => {
        const RU = EU.pendingByView.get(UU.id);
        if (RU?.has(tU)) return RU.delete(tU), void(PU = !0);
        const TU = EU.sentByView.get(UU.id);
        if (TU?.has(tU)) {
          TU.delete(tU);
          let RU = UU.changes.get(gU);
          void 0 === RU && (RU = new Map, UU.changes.set(gU, RU)), RU.set(tU, pU.DELETE)
        }
      })), PU
    }

    function aR(UU, RU) {
      const gU = UU._stream?.pendingByView;
      if (void 0 === gU) return !1;
      for (const [tU, pU] of gU)
        if (pU.size > 0 && void 0 !== RU.activeViews.get(tU)?.deref()) return !0;
      return !1
    }

    function YR(UU) {
      const RU = UU._stream;
      return void 0 !== RU && (RU.broadcastPending.size > 0 || RU.broadcastDeletes.size > 0)
    }

    function BR(UU, RU, gU) {
      const tU = bR(UU);
      let pU = tU.pendingByView.get(RU);
      void 0 === pU && (pU = new Set, tU.pendingByView.set(RU, pU)), pU.add(gU)
    }

    function VR(UU, RU) {
      const gU = UU._stream;
      void 0 !== gU && (gU.pendingByView.delete(RU), gU.sentByView.delete(RU), gU.priorityByView?.delete(RU))
    }
    const rR = {
      8: "uint8",
      16: "uint16",
      32: "uint32"
    };

    function XR(UU) {
      if (null == UU || "object" !== typeof UU) throw new Error("t.quantized(): options object with { min, max } is required.");
      const {
        min: RU,
        max: gU
      } = UU;
      if ("number" !== typeof RU || "number" !== typeof gU || !(gU > RU) || !Number.isFinite(RU) || !Number.isFinite(gU)) throw new Error(`t.quantized(): require finite min < max (got min=${RU}, max=${gU}).`);
      const tU = UU.bits ?? 16;
      if (8 !== tU && 16 !== tU && 32 !== tU) throw new Error(`t.quantized(): bits must be 8, 16 or 32 (got ${tU}).`);
      const pU = UU.mode ?? "clamp";
      if ("clamp" !== pU && "wrap" !== pU) throw new Error(`t.quantized(): mode must be "clamp" or "wrap" (got ${JSON.stringify(pU)}).`);
      const EU = "wrap" === pU,
        PU = Math.pow(2, tU);
      return {
        min: RU,
        max: gU,
        bits: tU,
        wrap: EU,
        wire: rR[tU],
        range: gU - RU,
        span: EU ? PU : RU === -gU ? PU - 2 : PU - 1
      }
    }

    function vR(UU) {
      return null !== UU && "object" === typeof UU && void 0 !== UU.quantized
    }

    function dR(UU, RU) {
      if (UU.wrap) {
        if (!Number.isFinite(RU)) return 0;
        const gU = UU.range;
        let tU = (RU - UU.min) % gU;
        tU < 0 && (tU += gU);
        const pU = UU.span;
        return Math.floor(tU / gU * pU + .5) % pU
      }
      if (RU !== RU) return 0;
      const gU = RU < UU.min ? UU.min : RU > UU.max ? UU.max : RU;
      return Math.floor((gU - UU.min) / UU.range * UU.span + .5)
    }

    function HR(UU, RU) {
      return UU.min + RU / UU.span * UU.range
    }

    function SR(UU) {
      const RU = RR[UU.wire];
      return (gU, tU, pU) => RU(gU, dR(UU, tU), pU)
    }
    class sR {
      types = {};
      schemas = new Map;
      hasFilters = !1;
      static inheritedTypes = new WeakMap;
      static cachedContexts = new WeakMap;
      static register(UU) {
        const RU = Object.getPrototypeOf(UU);
        if (RU !== Zt) {
          let gU = sR.inheritedTypes.get(RU);
          gU || (gU = new Set, sR.inheritedTypes.set(RU, gU)), gU.add(UU)
        }
      }
      static cache(UU) {
        let RU = sR.cachedContexts.get(UU);
        return RU || (RU = new sR(UU), sR.cachedContexts.set(UU, RU)), RU
      }
      constructor(UU) {
        UU && this.discoverTypes(UU)
      }
      has(UU) {
        return this.schemas.has(UU)
      }
      get(UU) {
        return this.types[UU]
      }
      add(UU) {
        let RU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.schemas.size;
        return !this.schemas.has(UU) && (this.types[RU] = UU, null == UU[Symbol.metadata] && MR.initialize(UU), this.schemas.set(UU, RU), !0)
      }
      getTypeId(UU) {
        return this.schemas.get(UU)
      }
      discoverTypes(UU) {
        if (!this.add(UU)) return;
        sR.inheritedTypes.get(UU)?.forEach((UU => {
          this.discoverTypes(UU)
        }));
        let RU = UU;
        for (;
          (RU = Object.getPrototypeOf(RU)) && RU !== Zt && RU !== Function.prototype;) this.discoverTypes(RU);
        const gU = UU[Symbol.metadata];
        (gU[ZU] || gU[XU]) && (this.hasFilters = !0);
        for (const tU in gU) {
          const UU = gU[tU].type;
          if ("string" !== typeof UU && !vR(UU))
            if ("function" === typeof UU) this.discoverTypes(UU);
            else {
              const RU = Object.values(UU)[0];
              if ("string" === typeof RU) continue;
              this.discoverTypes(RU)
            }
        }
      }
      debug() {
        return `TypeContext ->\n\tSchema types: ${this.schemas.size}\n\thasFilters: ${this.hasFilters}`
      }
    }

    function yR(UU) {
      const RU = FR(UU);
      return RU ? {
        complexTypeKlass: xR[RU],
        childType: UU[RU]
      } : {
        complexTypeKlass: !1,
        childType: UU
      }
    }

    function kR(UU, RU) {
      const gU = iR(UU),
        tU = FR(gU),
        pU = tU && FR(gU[tU]);
      if (pU) throw new Error(`${RU?`${RU}: `:""}@colyseus/schema: nested collections are not supported ("${tU}" of "${pU}"). Collections can only hold primitive types or Schema classes, wrap the inner ${pU} in a Schema class.`);
      return gU
    }

    function FR(UU) {
      return "object" === typeof UU && null !== UU ? Object.keys(UU).find((UU => void 0 !== xR[UU])) : void 0
    }

    function iR(UU) {
      if ("object" !== typeof UU || null === UU) return UU;
      if (Array.isArray(UU)) return {
        array: iR(UU[0])
      };
      const RU = function(UU) {
        const RU = Object.keys(UU),
          gU = RU.filter((UU => /\d+/.test(UU)));
        if (gU.length > 0 && gU.length === RU.length / 2 && UU[UU[gU[0]]] == gU[0]) return "number";
        if (RU.length > 0 && RU.every((RU => UU[RU] === RU))) return "string"
      }(UU);
      if (RU) return RU;
      if (vR(UU)) return "string" === typeof UU.quantized.wire ? UU : {
        quantized: XR(UU.quantized)
      };
      if (void 0 !== UU.type) return iR(UU.type);
      const gU = FR(UU);
      return gU && (UU[gU] = iR(UU[gU])), UU
    }
    const AR = [oU, YU, BU, VU, rU, XU, nU];

    function zR(UU, RU, gU) {
      UU[RU] || Object.defineProperty(UU, RU, {
        value: [],
        enumerable: !1,
        configurable: !0,
        writable: !0
      }), UU[RU].push(gU)
    }
    const MR = {
        addField(UU, RU, gU, tU, pU) {
          if (RU >= 63) throw new Error(`Can't define field '${gU}'.\nSchema instances may only have up to 63 fields.`);
          UU[RU] = Object.assign(UU[RU] || {}, {
            type: tU,
            index: RU,
            name: gU
          }), Object.defineProperty(UU, JU, {
            value: UU[JU] || {},
            enumerable: !1,
            configurable: !0
          }), UU[JU][gU] = pU || {
            value: void 0,
            writable: !0,
            enumerable: !0,
            configurable: !0
          }, Object.defineProperty(UU, bU, {
            value: RU,
            enumerable: !1,
            configurable: !0
          }), Object.defineProperty(UU, gU, {
            value: RU,
            enumerable: !1,
            configurable: !0
          }), "string" === typeof UU[RU].type || vR(UU[RU].type) || (void 0 === UU[oU] && Object.defineProperty(UU, oU, {
            value: [],
            enumerable: !1,
            configurable: !0
          }), UU[oU].push(RU));
          const EU = UU[RU].type;
          if (EU && "object" === typeof EU && void 0 !== EU.stream) {
            if (void 0 !== EU.array) throw new Error(wR);
            UU[RU].stream = !0, UU[XU] || Object.defineProperty(UU, XU, {
              value: [],
              enumerable: !1,
              configurable: !0,
              writable: !0
            }), UU[XU].includes(RU) || UU[XU].push(RU);
            const pU = tU?.priority;
            "function" === typeof pU && MR.setStreamPriority(UU, gU, pU)
          }
        },
        setTag(UU, RU, gU) {
          const tU = UU[RU];
          if (UU[tU].tag = gU, UU[ZU] || (Object.defineProperty(UU, ZU, {
              value: [],
              enumerable: !1,
              configurable: !0
            }), Object.defineProperty(UU, aU, {
              value: {},
              enumerable: !1,
              configurable: !0
            })), UU[ZU].push(tU), gU < 0) UU[aU][gU] || (UU[aU][gU] = []), UU[aU][gU].push(tU);
          else
            for (let pU = gU; pU > 0; pU &= pU - 1) {
              const RU = pU & -pU;
              UU[aU][RU] || (UU[aU][RU] = []), UU[aU][RU].push(tU)
            }
        },
        setUnreliable(UU, RU) {
          const gU = UU[RU];
          if ("string" !== typeof UU[gU].type) throw new Error(`@unreliable cannot be applied to ref-type field "${RU}". For ref-type fields, mark each primitive sub-field with @unreliable instead. See README "Limitations and best practices".`);
          UU[gU].unreliable = !0, UU[YU] || Object.defineProperty(UU, YU, {
            value: [],
            enumerable: !1,
            configurable: !0,
            writable: !0
          }), UU[YU].push(gU)
        },
        setPatchOnly(UU, RU) {
          const gU = UU[RU];
          if (UU[gU].fullStateOnly) throw new Error(`field "${RU}" cannot be both patchOnly and fullStateOnly \u2014 those are the only two delivery channels, so the field would never reach a client.`);
          UU[gU].patchOnly = !0, zR(UU, BU, gU), zR(UU, VU, gU)
        },
        setDeprecated(UU, RU) {
          const gU = UU[RU];
          UU[gU].deprecated = !0, zR(UU, VU, gU), Object.defineProperty(UU, gU, {
            value: UU[gU],
            enumerable: !1,
            configurable: !0
          })
        },
        setFullStateOnly(UU, RU) {
          const gU = UU[RU];
          if (UU[gU].patchOnly) throw new Error(`field "${RU}" cannot be both patchOnly and fullStateOnly \u2014 those are the only two delivery channels, so the field would never reach a client.`);
          UU[gU].fullStateOnly = !0, zR(UU, rU, gU)
        },
        setStream(UU, RU) {
          const gU = UU[RU];
          UU[gU].stream = !0, UU[XU] || Object.defineProperty(UU, XU, {
            value: [],
            enumerable: !1,
            configurable: !0,
            writable: !0
          }), UU[XU].push(gU)
        },
        setStreamPriority(UU, RU, gU) {
          const tU = UU[RU];
          UU[vU] || Object.defineProperty(UU, vU, {
            value: {},
            enumerable: !1,
            configurable: !0,
            writable: !0
          }), UU[vU][tU] = gU
        },
        getStreamPriority: (UU, RU) => UU?.[vU]?.[RU],
        defineField(UU, RU, gU, tU, pU) {
          const EU = kR(pU, `${UU.name}.${tU}`),
            {
              complexTypeKlass: PU,
              childType: TU
            } = yR(EU);
          MR.addField(RU, gU, tU, EU, It(tU, gU, TU, PU)), RU[JU][tU] && Object.defineProperty(UU.prototype, tU, RU[JU][tU]), ("string" === typeof EU || vR(EU)) && (RU[nU] || Object.defineProperty(RU, nU, {
            value: [],
            enumerable: !1,
            configurable: !0,
            writable: !0
          }), RU[nU][gU] = "string" === typeof EU ? RR[EU] : SR(EU.quantized))
        },
        setFields(UU, RU) {
          const gU = UU.prototype.constructor;
          sR.register(gU);
          const tU = Object.getPrototypeOf(gU),
            pU = tU && tU[Symbol.metadata],
            EU = MR.initialize(gU);
          gU[qU] || (gU[qU] = Zt[qU]), gU[KU] || (gU[KU] = Zt[KU]), gU[cU] || (gU[cU] = Zt[cU]), gU.prototype.toJSON || (gU.prototype.toJSON = Zt.prototype.toJSON);
          let PU = EU[bU] ?? (pU && pU[bU]) ?? -1;
          PU++, EU[nU] || Object.defineProperty(EU, nU, {
            value: pU?.[nU] ? [...pU[nU]] : [],
            enumerable: !1,
            configurable: !0,
            writable: !0
          });
          for (const TU in RU) {
            if (void 0 !== EU[TU]) throw new Error(`@colyseus/schema: Duplicate '${TU}' definition on '${gU.name||"(anonymous)"}'.`);
            MR.defineField(gU, EU, PU, TU, RU[TU]), PU++
          }
          return UU
        },
        isDeprecated: (UU, RU) => !0 === UU[RU].deprecated,
        initialize(UU) {
          const RU = Object.getPrototypeOf(UU),
            gU = RU[Symbol.metadata];
          let tU = UU[Symbol.metadata] ?? Object.create(null);
          if (RU !== Zt && tU === gU && (tU = Object.create(null), gU)) {
            Object.setPrototypeOf(tU, gU), Object.defineProperty(tU, bU, {
              value: gU[bU],
              enumerable: !1,
              configurable: !0,
              writable: !0
            }), void 0 !== gU[ZU] && (Object.defineProperty(tU, ZU, {
              value: [...gU[ZU]],
              enumerable: !1,
              configurable: !0,
              writable: !0
            }), Object.defineProperty(tU, aU, {
              value: {
                ...gU[aU]
              },
              enumerable: !1,
              configurable: !0,
              writable: !0
            }));
            for (const UU of AR) {
              const RU = gU[UU];
              void 0 !== RU && Object.defineProperty(tU, UU, {
                value: [...RU],
                enumerable: !1,
                configurable: !0,
                writable: !0
              })
            }
            Object.defineProperty(tU, JU, {
              value: {
                ...gU[JU]
              },
              enumerable: !1,
              configurable: !0,
              writable: !0
            })
          }
          return Object.defineProperty(UU, Symbol.metadata, {
            value: tU,
            writable: !1,
            configurable: !0
          }), tU
        },
        isValidInstance: UU => UU.constructor[Symbol.metadata] && Object.prototype.hasOwnProperty.call(UU.constructor[Symbol.metadata], bU),
        getFields(UU) {
          const RU = UU[Symbol.metadata],
            gU = {};
          for (let tU = 0; tU <= RU[bU]; tU++) gU[RU[tU].name] = RU[tU].type;
          return gU
        },
        hasViewTagAtIndex: (UU, RU) => UU?.[ZU]?.includes(RU),
        hasUnreliableAtIndex: (UU, RU) => UU?.[YU]?.includes(RU),
        hasPatchOnlyAtIndex: (UU, RU) => UU?.[BU]?.includes(RU),
        hasFullStateOnlyAtIndex: (UU, RU) => UU?.[rU]?.includes(RU),
        hasStreamAtIndex: (UU, RU) => UU?.[XU]?.includes(RU)
      },
      DR = (UU, RU, gU) => UU(RU, gU);
    class LR {
      dirtyLow = 0;
      dirtyHigh = 0;
      ops;
      constructor(UU) {
        this.ops = new Uint8Array(Math.max(UU + 1, 1))
      }
      record(UU, RU) {
        const gU = this.ops[UU];
        0 === gU ? this.ops[UU] = RU : (gU === pU.DELETE || gU === pU.ADD && RU === pU.DELETE_AND_ADD) && (this.ops[UU] = pU.DELETE_AND_ADD), UU < 32 ? this.dirtyLow |= 1 << UU : this.dirtyHigh |= 1 << UU - 32
      }
      recordDelete(UU, RU) {
        this.ops[UU] = RU, UU < 32 ? this.dirtyLow |= 1 << UU : this.dirtyHigh |= 1 << UU - 32
      }
      recordRaw(UU, RU) {
        this.record(UU, RU)
      }
      operationAt(UU) {
        const RU = this.ops[UU];
        return 0 === RU ? void 0 : RU
      }
      setOperationAt(UU, RU) {
        this.ops[UU] = RU
      }
      forEach(UU) {
        this.forEachWithCtx(UU, DR)
      }
      forEachWithCtx(UU, RU) {
        let gU = this.dirtyLow,
          tU = this.dirtyHigh;
        const pU = this.ops;
        for (; 0 !== gU;) {
          const tU = gU & -gU,
            EU = 31 - Math.clz32(tU);
          gU ^= tU, RU(UU, EU, pU[EU])
        }
        for (; 0 !== tU;) {
          const gU = tU & -tU,
            EU = 31 - Math.clz32(gU) + 32;
          tU ^= gU, RU(UU, EU, pU[EU])
        }
      }
      size() {
        return lR(this.dirtyLow) + lR(this.dirtyHigh)
      }
      has() {
        return 0 !== (this.dirtyLow | this.dirtyHigh)
      }
      reset() {
        this.dirtyLow = 0, this.dirtyHigh = 0, this.ops.fill(0)
      }
    }
    class NR {
      nC = new Map;
      pureOps = [];
      record(UU, RU) {
        const gU = this.nC.get(UU);
        void 0 === gU ? this.nC.set(UU, RU) : (gU === pU.DELETE || gU === pU.ADD && RU === pU.DELETE_AND_ADD) && this.nC.set(UU, pU.DELETE_AND_ADD)
      }
      recordDelete(UU, RU) {
        this.nC.set(UU, RU)
      }
      recordRaw(UU, RU) {
        this.nC.set(UU, RU)
      }
      recordPure(UU) {
        this.pureOps.push([this.nC.size, UU])
      }
      operationAt(UU) {
        return this.nC.get(UU)
      }
      setOperationAt(UU, RU) {
        this.nC.has(UU) && this.nC.set(UU, RU)
      }
      forEach(UU) {
        this.forEachWithCtx(UU, DR)
      }
      forEachWithCtx(UU, RU) {
        const gU = this.pureOps;
        if (gU.length > 0) {
          let tU = 0,
            pU = 0;
          for (const [EU, PU] of this.nC) {
            for (; tU < gU.length && gU[tU][0] <= pU;) {
              const pU = gU[tU++][1];
              RU(UU, -pU, pU)
            }
            RU(UU, EU, PU), pU++
          }
          for (; tU < gU.length;) {
            const pU = gU[tU++][1];
            RU(UU, -pU, pU)
          }
        } else
          for (const [tU, pU] of this.nC) RU(UU, tU, pU)
      }
      size() {
        return this.nC.size + this.pureOps.length
      }
      has() {
        return this.nC.size > 0 || this.pureOps.length > 0
      }
      reset() {
        this.nC.clear(), this.pureOps.length = 0
      }
      shift(UU) {
        const RU = new Map;
        for (const [gU, tU] of this.nC) RU.set(gU + UU, tU);
        this.nC = RU
      }
    }

    function lR(UU) {
      return 16843009 * ((UU = (858993459 & (UU -= UU >>> 1 & 1431655765)) + (UU >>> 2 & 858993459)) + (UU >>> 4) & 252645135) >>> 24
    }

    function OR(UU) {
      if (void 0 === UU) return 0;
      let RU = 0;
      for (let gU = 0, tU = UU.length; gU < tU; gU++) {
        const tU = UU[gU];
        tU < 32 && (RU |= 1 << tU)
      }
      return RU
    }

    function Ug(UU) {
      const RU = UU.constructor;
      if (Object.prototype.hasOwnProperty.call(RU, wU)) return RU[wU];
      const gU = RU[Symbol.metadata],
        tU = MR.isValidInstance(UU),
        pU = (gU?.[ZU]?.length ?? 0) > 0,
        EU = function(UU) {
          const RU = [],
            gU = [],
            tU = [],
            pU = [],
            EU = UU?.[bU];
          if (void 0 === EU) return {
            names: RU,
            types: gU,
            tags: tU,
            encoders: pU
          };
          const PU = UU[nU];
          for (let TU = 0; TU <= EU; TU++) {
            const EU = UU[TU];
            void 0 !== EU ? (RU[TU] = EU.name, gU[TU] = EU.type, tU[TU] = EU.tag, pU[TU] = PU?.[TU]) : (RU[TU] = void 0, gU[TU] = void 0, tU[TU] = void 0, pU[TU] = void 0)
          }
          return {
            names: RU,
            types: gU,
            tags: tU,
            encoders: pU
          }
        }(gU),
        PU = tU && !pU ? void 0 : RU[GU],
        TU = {
          encoder: RU[KU],
          filter: PU,
          metadata: gU,
          isSchema: tU,
          filterBitmask: tU ? OR(gU?.[ZU]) : 0,
          hasAnyFullStateOnly: (gU?.[rU]?.length ?? 0) > 0,
          hasAnyUnreliable: (gU?.[YU]?.length ?? 0) > 0,
          hasAnyStream: (gU?.[XU]?.length ?? 0) > 0,
          hasAnyView: pU,
          fullStateOnlyBitmask: OR(gU?.[rU]),
          unreliableBitmask: OR(gU?.[YU]),
          streamBitmask: OR(gU?.[XU]),
          names: EU.names,
          types: EU.types,
          tags: EU.tags,
          encoders: EU.encoders
        };
      return Object.defineProperty(RU, wU, {
        value: TU,
        enumerable: !1,
        writable: !0,
        configurable: !0
      }), TU
    }

    function Rg(UU, RU) {
      if (void 0 !== UU.parentRef && RU(UU.parentRef, UU._parentIndex)) return !0;
      for (let gU = UU.extraParents; void 0 !== gU; gU = gU.next)
        if (RU(gU.ref, gU.index)) return !0;
      return !1
    }
    const gg = (UU, RU) => {
        UU.isFieldUnreliable(RU) ? UU.ensureUnreliableRecorder().record(RU, pU.ADD) : UU.record(RU, pU.ADD)
      },
      tg = (UU, RU) => UU(RU);

    function pg(UU, RU, gU) {
      const tU = UU.refTarget;
      if (void 0 !== tU[QU]) {
        if (UU.isPatchOnly) return;
        if (Array.isArray(tU.items)) {
          const UU = tU.items;
          for (let tU = 0, pU = UU.length; tU < pU; tU++) void 0 !== UU[tU] && gU(RU, tU)
        } else if (void 0 !== tU.journal)
          for (const [UU, pU] of tU.journal.keyByIndex) tU.$items.has(pU) && gU(RU, UU);
        else if (void 0 !== tU.$items)
          for (const UU of tU.$items.keys()) gU(RU, UU)
      } else {
        const pU = UU.metadata;
        if (!pU) return;
        const EU = pU[bU] ?? -1,
          PU = pU[VU],
          TU = UU.encDescriptor.names;
        for (let UU = 0; UU <= EU; UU++) {
          const pU = TU[UU];
          if (void 0 === pU) continue;
          if (PU && PU.includes(UU)) continue;
          const EU = tU[pU];
          void 0 !== EU && null !== EU && gU(RU, UU)
        }
      }
    }

    function Eg(UU, RU, gU, tU) {
      ! function(UU, RU, gU) {
        if (!RU) return;
        const tU = RU[hU],
          pU = !tU._isSchema;
        let EU;
        pU ? (RU = tU.parent, gU = tU.parentIndex, EU = RU?.[hU].metadata) : EU = tU.metadata;
        const PU = (EU?.[BU]?.includes(gU) ? wg : 0) | (EU?.[rU]?.includes(gU) ? ng : 0),
          TU = tU.flags & Zg | PU,
          qU = UU.flags;
        UU.flags = qU | TU;
        TU & ~qU & ng && (UU.reset(), UU.unreliableRecorder?.reset());
        const KU = UU.root?.types;
        if (!KU?.hasFilters) return;
        const cU = EU?.[ZU]?.includes(gU) ?? !1,
          GU = EU?.[XU]?.includes(gU) ?? !1,
          jU = tU.isFiltered || cU || GU;
        if (UU.isFiltered = jU, GU && !pU) {
          UU.isStreamCollection = !0;
          const RU = bR(UU.ref);
          if (void 0 === RU.priority) {
            const UU = MR.getStreamPriority(EU, gU);
            void 0 !== UU && (RU.priority = UU)
          }
          UU.root?.registerStream(UU.ref)
        }
        if (jU) {
          const RU = Tg(UU);
          UU.isVisibilitySharedWithParent = tU.isFiltered && RU && !GU && (!cU || pU && EU[gU].tag !== Ct)
        }
      }(UU, RU, gU), UU.isFullStateOnly || (UU.has() && UU.root?.enqueueChangeTree(UU), UU.unreliableRecorder?.has() && UU.root?.enqueueUnreliable(UU), UU.has() || UU.unreliableRecorder?.has() || UU.root?.enqueueChangeTree(UU))
    }

    function Pg(UU) {
      const RU = UU.pendingFilterRefresh;
      for (let gU = 0; gU < RU.length; gU++) {
        const UU = RU[gU];
        0 !== (UU.flags & og) && qg(UU)
      }
      RU.length = 0
    }

    function Tg(UU) {
      return UU._isSchema || "string" !== typeof UU.refTarget[QU]
    }

    function qg(UU) {
      UU.flags &= ~og;
      const RU = UU.root;
      if (void 0 === RU || void 0 === UU.parentRef) return;
      const gU = Tg(UU);
      let tU = ug(UU, UU.parentRef, UU._parentIndex, gU);
      for (let EU = UU.extraParents; void 0 !== EU && tU !== jg; EU = EU.next) tU |= ug(UU, EU.ref, EU.index, gU);
      if (0 === tU) return;
      UU.isVisibilitySharedWithParent = 0 !== (tU & Gg);
      const pU = 0 === (tU & cg);
      pU !== UU.isFiltered && (UU.isFiltered = pU, pU || UU.isFullStateOnly || (UU.forEachLiveWithCtx(UU, gg), UU.has() && RU.enqueueChangeTree(UU), UU.unreliableRecorder?.has() && RU.enqueueUnreliable(UU)), UU.forEachChildWithCtx(UU, Cg))
    }
    const Kg = 1,
      cg = 2,
      Gg = 4,
      jg = Kg | cg | Gg;

    function ug(UU, RU, gU, tU) {
      const pU = RU[hU];
      if (pU.root !== UU.root || ! function(UU, RU, gU) {
          const tU = RU.refTarget;
          if (RU.isArray) {
            const RU = tU.items,
              pU = RU[gU];
            if (void 0 !== pU && pU[hU] === UU) return !0;
            for (let gU = 0, tU = RU.length; gU < tU; gU++) {
              const tU = RU[gU];
              if (void 0 !== tU && tU[hU] === UU) return !0
            }
            return !1
          }
          const pU = RU.getValue(gU);
          return void 0 !== pU && pU[hU] === UU
        }(UU, pU, gU)) return 0;
      pU.flags & og && qg(pU);
      let EU = Kg;
      if (pU._isSchema) {
        void 0 !== pU.encDescriptor.tags[gU] || pU.isFieldStream(gU) || (pU.isFiltered ? tU && (EU |= Gg) : EU |= cg)
      } else if (pU.isFiltered) {
        if (tU && !pU.isStreamCollection) {
          const UU = pU.parent?.[hU];
          (UU?._isSchema ? UU.encDescriptor.tags[pU.parentIndex] : void 0) !== Ct && (EU |= Gg)
        }
      } else EU |= cg;
      return EU
    }
    const Cg = (UU, RU, gU) => {
      qg(RU)
    };

    function hg(UU, RU, gU, tU) {
      if (UU.addParent(RU, tU), !gU) return;
      const pU = gU.add(UU);
      gU !== UU.root && (UU.root = gU, Eg(UU, RU, tU));
      const EU = RU?.[hU];
      if (void 0 !== EU && void 0 !== EU.subscribedViews && void 0 !== RU[QU] && function(UU, RU, gU, tU) {
          const pU = UU.subscribedViews;
          if (void 0 === pU) return;
          const EU = UU.isStreamCollection,
            PU = EU ? UU.ref : void 0,
            TU = EU ? void 0 : gU[hU];
          for (let qU = 0, KU = pU.length; qU < KU; qU++) {
            let UU = pU[qU];
            for (; 0 !== UU;) {
              const gU = UU & -UU;
              UU ^= gU;
              const KU = 32 * qU + (31 - Math.clz32(gU)),
                cU = tU.activeViews.get(KU),
                GU = cU?.deref();
              void 0 !== GU ? EU ? BR(PU, KU, RU) : void 0 !== TU && GU.markVisible(TU) : pU[qU] &= ~gU
            }
          }
        }(EU, tU, UU.ref, gU), pU) {
        let RU = fg[xg];
        void 0 === RU && (RU = {
          parentRef: void 0,
          root: void 0
        }, fg[xg] = RU), RU.parentRef = UU.ref, RU.root = gU, xg++, eg(UU, RU, mg), xg--
      }
    }

    function Qg(UU, RU, gU) {
      UU(RU, gU)
    }

    function eg(UU, RU, gU) {
      const tU = UU.refTarget;
      if (tU[QU]) {
        if ("string" !== typeof tU[QU]) {
          const UU = tU.items;
          if (void 0 !== UU)
            for (let tU = 0, pU = UU.length; tU < pU; tU++) {
              const pU = UU[tU];
              pU && gU(RU, pU[hU], tU)
            } else {
              const UU = tU.$items,
                pU = tU._collectionIndexes;
              for (const tU of UU.keys()) {
                const EU = UU.get(tU);
                EU && gU(RU, EU[hU], pU?.[tU] ?? tU)
              }
            }
        }
      } else {
        const pU = UU.metadata,
          EU = pU?.[oU];
        if (!EU) return;
        const PU = UU.encDescriptor.names;
        for (let UU = 0, TU = EU.length; UU < TU; UU++) {
          const pU = EU[UU],
            TU = tU[PU[pU]];
          TU && gU(RU, TU[hU], pU)
        }
      }
    }

    function Wg(UU, RU, gU) {
      RU.root !== UU ? RU.setRoot(UU) : UU.add(RU)
    }
    const fg = [];
    let xg = 0;

    function mg(UU, RU, gU) {
      if (RU.root === UU.root) return UU.root.add(RU), void UU.root.moveNextToParent(RU);
      RU.setParent(UU.parentRef, UU.root, gU)
    }

    function Ig(UU, RU, gU) {
      const tU = (3 & gU) << 3;
      return gU < 4 ? UU >>> tU & 255 : RU >>> tU & 255
    }
    const Jg = (UU, RU, gU) => UU(RU, gU);
    const wg = 16,
      ng = 32,
      bg = 128,
      og = 256,
      Zg = wg | ng;
    class ag {
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
      set isFiltered(UU) {
        this.flags = UU ? 1 | this.flags : -2 & this.flags
      }
      get isVisibilitySharedWithParent() {
        return 0 !== (2 & this.flags)
      }
      set isVisibilitySharedWithParent(UU) {
        this.flags = UU ? 2 | this.flags : -3 & this.flags
      }
      get isNew() {
        return 0 !== (4 & this.flags)
      }
      set isNew(UU) {
        this.flags = UU ? 4 | this.flags : -5 & this.flags
      }
      get isUnreliable() {
        return 0 !== (8 & this.flags)
      }
      set isUnreliable(UU) {
        this.flags = UU ? 8 | this.flags : -9 & this.flags
      }
      get isPatchOnly() {
        return 0 !== (this.flags & wg)
      }
      set isPatchOnly(UU) {
        this.flags = UU ? this.flags | wg : this.flags & ~wg
      }
      get isFullStateOnly() {
        return 0 !== (this.flags & ng)
      }
      set isFullStateOnly(UU) {
        this.flags = UU ? this.flags | ng : this.flags & ~ng
      }
      get isStreamCollection() {
        return 0 !== (64 & this.flags)
      }
      set isStreamCollection(UU) {
        this.flags = UU ? 64 | this.flags : -65 & this.flags
      }
      get needsRestage() {
        return 0 !== (this.flags & bg)
      }
      set needsRestage(UU) {
        this.flags = UU ? this.flags | bg : -129 & this.flags
      }
      get hasFilteredFields() {
        return this.isFiltered || this.encDescriptor.hasAnyView
      }
      ensureUnreliableRecorder() {
        return void 0 === this.unreliableRecorder && (this.unreliableRecorder = this._isSchema ? new LR(this.metadata?.[bU] ?? 0) : new NR), this.unreliableRecorder
      }
      isFieldUnreliable(UU) {
        const RU = this.encDescriptor;
        return !!RU.hasAnyUnreliable && (UU < 32 ? 0 !== (RU.unreliableBitmask & 1 << UU) : MR.hasUnreliableAtIndex(this.metadata, UU))
      }
      isFieldFullStateOnly(UU) {
        if (this.isFullStateOnly) return !0;
        const RU = this.encDescriptor;
        return !!RU.hasAnyFullStateOnly && (UU < 32 ? 0 !== (RU.fullStateOnlyBitmask & 1 << UU) : MR.hasFullStateOnlyAtIndex(this.metadata, UU))
      }
      isFieldStream(UU) {
        const RU = this.encDescriptor;
        return !!RU.hasAnyStream && (UU < 32 ? 0 !== (RU.streamBitmask & 1 << UU) : MR.hasStreamAtIndex(this.metadata, UU))
      }
      constructor(UU) {
        let RU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : UU;
        this.ref = UU, this.refTarget = RU;
        const gU = Ug(UU);
        this.encDescriptor = gU, this.metadata = gU.metadata;
        const tU = gU.isSchema;
        if (this._isSchema = tU, this.ops = void 0, this.collDirty = void 0, this.collPureOps = void 0, tU) {
          const UU = this.metadata?.[bU] ?? 0;
          UU > 7 && (this.ops = new Uint8Array(UU + 1))
        } else this.collDirty = new Map
      }
      _opAt(UU) {
        const RU = this.ops;
        if (void 0 !== RU) return RU[UU];
        const gU = (3 & UU) << 3;
        return UU < 4 ? this.opsLow >>> gU & 255 : this.opsHigh >>> gU & 255
      }
      _opPut(UU, RU) {
        const gU = this.ops;
        if (void 0 !== gU) return void(gU[UU] = RU);
        const tU = (3 & UU) << 3,
          pU = ~(255 << tU);
        UU < 4 ? this.opsLow = this.opsLow & pU | RU << tU : this.opsHigh = this.opsHigh & pU | RU << tU
      }
      _markDirty(UU) {
        UU < 32 ? this.dirtyLow |= 1 << UU : this.dirtyHigh |= 1 << UU - 32
      }
      record(UU, RU) {
        if (this._isSchema) {
          const gU = this._opAt(UU);
          0 === gU ? this._opPut(UU, RU) : (gU === pU.DELETE || gU === pU.ADD && RU === pU.DELETE_AND_ADD) && this._opPut(UU, pU.DELETE_AND_ADD), this._markDirty(UU)
        } else {
          const gU = this.collDirty,
            tU = gU.get(UU);
          let EU;
          EU = void 0 === tU ? RU : tU === pU.DELETE || tU === pU.ADD && RU === pU.DELETE_AND_ADD ? pU.DELETE_AND_ADD : tU, gU.set(UU, EU)
        }
      }
      recordDelete(UU, RU) {
        this._isSchema ? (this._opPut(UU, RU), this._markDirty(UU)) : this.collDirty.set(UU, RU)
      }
      recordRaw(UU, RU) {
        this._isSchema ? (this._opPut(UU, RU), this._markDirty(UU)) : this.collDirty.set(UU, RU)
      }
      recordPure(UU) {
        if (this._isSchema) throw new Error("ChangeTree (Schema): pure operations are not supported");
        (this.collPureOps ??= []).push([this.collDirty.size, UU])
      }
      operationAt(UU) {
        if (this._isSchema) {
          const RU = this._opAt(UU);
          return 0 === RU ? void 0 : RU
        }
        return this.collDirty.get(UU)
      }
      setOperationAt(UU, RU) {
        if (this._isSchema) this._opPut(UU, RU);
        else {
          const gU = this.collDirty;
          gU.has(UU) && gU.set(UU, RU)
        }
      }
      forEach(UU) {
        this.forEachWithCtx(UU, Jg)
      }
      forEachWithCtx(UU, RU) {
        if (this._isSchema) {
          let gU = this.dirtyLow,
            tU = this.dirtyHigh;
          const pU = this.ops;
          if (void 0 !== pU) {
            for (; 0 !== gU;) {
              const tU = gU & -gU,
                EU = 31 - Math.clz32(tU);
              gU ^= tU, RU(UU, EU, pU[EU])
            }
            for (; 0 !== tU;) {
              const gU = tU & -tU,
                EU = 31 - Math.clz32(gU) + 32;
              tU ^= gU, RU(UU, EU, pU[EU])
            }
          } else {
            const tU = this.opsLow,
              pU = this.opsHigh;
            for (; 0 !== gU;) {
              const EU = gU & -gU,
                PU = 31 - Math.clz32(EU);
              gU ^= EU, RU(UU, PU, Ig(tU, pU, PU))
            }
          }
          return
        }
        const gU = this.collDirty,
          tU = this.collPureOps;
        if (void 0 !== tU && tU.length > 0) {
          let pU = 0,
            EU = 0;
          for (const [PU, TU] of gU) {
            for (; pU < tU.length && tU[pU][0] <= EU;) {
              const gU = tU[pU++][1];
              RU(UU, -gU, gU)
            }
            RU(UU, PU, TU), EU++
          }
          for (; pU < tU.length;) {
            const gU = tU[pU++][1];
            RU(UU, -gU, gU)
          }
        } else
          for (const [pU, EU] of gU) RU(UU, pU, EU)
      }
      size() {
        return this._isSchema ? lR(this.dirtyLow) + lR(this.dirtyHigh) : this.collDirty.size + (this.collPureOps?.length ?? 0)
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
      insertAt(UU, RU) {
        if (this._isSchema) throw new Error("ChangeTree (Schema): insertAt is not supported");
        const gU = this.collDirty,
          tU = new Map,
          EU = !this.paused && !this.isFullStateOnly;
        if (UU > 0)
          for (const [pU, PU] of gU) pU < UU && tU.set(pU, PU);
        if (EU)
          for (let PU = 0; PU < RU; PU++) tU.set(UU + PU, pU.ADD);
        for (const [pU, PU] of gU) pU >= UU && tU.set(pU + RU, PU);
        this.collDirty = tU, EU && this.root?.enqueueChangeTree(this)
      }
      removeAt(UU, RU) {
        if (this._isSchema) throw new Error("ChangeTree (Schema): removeAt is not supported");
        const gU = this.collDirty,
          tU = UU + RU;
        let pU = !1;
        for (const PU of gU.keys())
          if (PU >= tU) {
            pU = !0;
            break
          } if (!pU) {
          for (let RU = UU; RU < tU; RU++) gU.delete(RU);
          return
        }
        const EU = new Map;
        for (const [PU, TU] of gU) PU < UU ? EU.set(PU, TU) : PU >= tU && EU.set(PU - RU, TU);
        this.collDirty = EU
      }
      unshift(UU) {
        this.insertAt(0, UU)
      }
      setRoot(UU) {
        ! function(UU, RU) {
          UU.root = RU;
          const gU = RU.add(UU);
          Eg(UU, UU.parent, UU.parentIndex), gU && eg(UU, RU, Wg)
        }(this, UU)
      }
      setParent(UU, RU, gU) {
        hg(this, UU, RU, gU)
      }
      forEachChild(UU) {
        eg(this, UU, Qg)
      }
      forEachChildWithCtx(UU, RU) {
        eg(this, UU, RU)
      }
      forEachLive(UU) {
        pg(this, UU, tg)
      }
      forEachLiveWithCtx(UU, RU) {
        pg(this, UU, RU)
      }
      operation(UU) {
        this.paused || this.isFullStateOnly || (this.recordPure(UU), this.root?.enqueueChangeTree(this))
      }
      _routeAndRecord(UU, RU, gU) {
        if (!this.paused && !this.isFieldFullStateOnly(UU)) {
          if (this.isFieldUnreliable(UU) && !this.isNew) {
            const tU = this.ensureUnreliableRecorder();
            return gU ? tU.recordRaw(UU, RU) : tU.record(UU, RU), void this.root?.enqueueUnreliable(this)
          }
          gU ? this.recordRaw(UU, RU) : this.record(UU, RU), this.root?.enqueueChangeTree(this)
        }
      }
      change(UU) {
        let RU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : pU.ADD;
        this._routeAndRecord(UU, RU, !1)
      }
      indexedOperation(UU, RU) {
        this._routeAndRecord(UU, RU, !0)
      }
      getChange(UU) {
        return this.operationAt(UU)
      }
      pause() {
        this.paused = !0
      }
      resume() {
        this.paused = !1
      }
      untracked(UU) {
        const RU = this.paused;
        this.paused = !0;
        try {
          return UU()
        } finally {
          this.paused = RU
        }
      }
      markDirty(UU) {
        let RU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : pU.ADD;
        const gU = this.paused;
        this.paused = !1;
        try {
          this.change(UU, RU)
        } finally {
          this.paused = gU
        }
      }
      getValue(UU) {
        let RU = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return this.refTarget[jU](UU, RU)
      }
      delete(UU, RU) {
        if (void 0 === UU) {
          try {
            throw new Error(`@colyseus/schema ${this.ref.constructor.name}: trying to delete non-existing index '${UU}'`)
          } catch (Pp) {
            console.warn(Pp)
          }
          return
        }
        if (this.paused || this.isFieldFullStateOnly(UU)) return this.getValue(UU);
        const gU = this.isFieldUnreliable(UU) && !this.isNew;
        gU ? this.ensureUnreliableRecorder().recordDelete(UU, RU ?? pU.DELETE) : this.recordDelete(UU, RU ?? pU.DELETE);
        const tU = this.getValue(UU);
        return tU && tU[hU] && this.root?.remove(tU[hU]), gU ? this.root?.enqueueUnreliable(this) : this.root?.enqueueChangeTree(this), tU
      }
      endEncode() {
        this.reset(), this.changesNode = void 0, this._isSchema || this.refTarget[WU]?.(), this.isNew = !1
      }
      endEncodeUnreliable() {
        this.unreliableRecorder?.reset(), this.unreliableChangesNode = void 0, this._isSchema || this.refTarget[WU]?.()
      }
      discard() {
        this._isSchema || this.refTarget[WU]?.(), this.reset(), this.unreliableRecorder?.reset()
      }
      discardAll() {
        const UU = UU => {
          if (UU < 0) return;
          const RU = this.getValue(UU);
          RU && RU[hU] && RU[hU].discardAll()
        };
        this.forEach(UU), this.unreliableRecorder?.forEach(UU), this.discard()
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
      addParent(UU, RU) {
        ! function(UU, RU, gU) {
          if (UU.parentRef) {
            if (UU.parentRef[hU] === RU[hU]) return void(UU._parentIndex = gU);
            if (Rg(UU, ((UU, gU) => UU[hU] === RU[hU]))) return void(UU._parentIndex = gU)
          }
          void 0 === UU.parentRef ? (UU.parentRef = RU, UU._parentIndex = gU) : (UU.extraParents = {
            ref: UU.parentRef,
            index: UU._parentIndex,
            next: UU.extraParents
          }, UU.parentRef = RU, UU._parentIndex = gU)
        }(this, UU, RU)
      }
      setParentIndex(UU, RU) {
        ! function(UU, RU, gU) {
          if (void 0 !== UU.extraParents)
            if (UU.parentRef[hU] !== RU[hU]) {
              for (let tU = UU.extraParents; void 0 !== tU; tU = tU.next)
                if (tU.ref[hU] === RU[hU]) return void(tU.index = gU)
            } else UU._parentIndex = gU;
          else UU._parentIndex = gU
        }(this, UU, RU)
      }
      removeParent() {
        return function(UU, RU) {
          if (UU.parentRef && UU.parentRef[hU] === RU[hU]) return UU.extraParents ? (UU.parentRef = UU.extraParents.ref, UU._parentIndex = UU.extraParents.index, UU.extraParents = UU.extraParents.next) : (UU.parentRef = void 0, UU._parentIndex = void 0), !0;
          let gU = UU.extraParents,
            tU = null;
          for (; gU;) {
            if (gU.ref[hU] === RU[hU]) return tU ? tU.next = gU.next : UU.extraParents = gU.next, !0;
            tU = gU, gU = gU.next
          }
          return void 0 === UU.parentRef
        }(this, arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.parent)
      }
      findParent(UU) {
        return function(UU, RU) {
          if (void 0 !== UU.parentRef && RU(UU.parentRef, UU._parentIndex)) return {
            ref: UU.parentRef,
            index: UU._parentIndex
          };
          for (let gU = UU.extraParents; void 0 !== gU; gU = gU.next)
            if (RU(gU.ref, gU.index)) return {
              ref: gU.ref,
              index: gU.index
            }
        }(this, UU)
      }
      hasParent(UU) {
        return Rg(this, UU)
      }
      indexInParent(UU) {
        return function(UU, RU) {
          if (UU.parentRef && UU.parentRef[hU] === RU[hU]) return UU._parentIndex;
          for (let gU = UU.extraParents; void 0 !== gU; gU = gU.next)
            if (gU.ref[hU] === RU[hU]) return gU.index
        }(this, UU)
      }
      getAllParents() {
        return function(UU) {
          const RU = [];
          UU.parentRef && RU.push({
            ref: UU.parentRef,
            index: UU._parentIndex
          });
          let gU = UU.extraParents;
          for (; gU;) RU.push({
            ref: gU.ref,
            index: gU.index
          }), gU = gU.next;
          return RU
        }(this)
      }
    }
    class Yg {
      ref;
      root = void 0;
      parentRef = void 0;
      paused = !1;
      isNew = !1;
      flags = 0;
      constructor(UU) {
        this.ref = UU
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
      untracked(UU) {
        return UU()
      }
      markDirty() {}
      forEachChild(UU) {
        const RU = this.ref;
        if (RU[QU]) {
          if ("string" !== typeof RU[QU])
            for (const [gU, tU] of RU.entries()) tU && UU(tU[hU], RU._collectionIndexes?.[gU] ?? gU);
          return
        }
        const gU = RU.constructor,
          tU = gU?.[Symbol.metadata];
        if (!tU) return;
        const pU = tU[oU] ?? [];
        for (let EU = 0; EU < pU.length; EU++) {
          const gU = pU[EU],
            PU = RU[tU[gU].name];
          PU && UU(PU[hU], gU)
        }
      }
      forEachChildWithCtx(UU, RU) {
        this.forEachChild(((gU, tU) => RU(UU, gU, tU)))
      }
      forEachLive() {}
      forEachLiveWithCtx() {}
      forEach() {}
    }

    function Bg(UU) {
      let RU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : UU;
      var gU;
      Object.defineProperty(UU, hU, {
        value: (gU = RU, new Yg(gU)),
        enumerable: !1,
        writable: !0
      })
    }

    function Vg(UU, RU, gU, tU, EU, PU, qU) {
      void 0 !== qU ? qU(RU, tU, PU) : "string" === typeof gU ? RR[gU]?.(RU, tU, PU) : null != gU[Symbol.metadata] ? (RR.number(RU, tU[TU], PU), (EU & pU.ADD) === pU.ADD && UU.tryEncodeTypeId(RU, gU, tU.constructor, PU)) : RR.number(RU, tU[TU], PU)
    }
    const rg = function(UU, RU, gU, tU, EU, PU, TU, qU) {
        if (RU[PU.offset++] = 255 & (tU | EU), EU === pU.DELETE) return;
        const KU = gU.encDescriptor,
          cU = gU.ref,
          GU = cU[mU][tU] ?? cU[KU.names[tU]];
        Vg(UU, RU, KU.types[tU], GU, EU, PU, KU.encoders[tU])
      },
      Xg = function(UU, RU, gU, tU, EU, PU) {
        if (RU[PU.offset++] = 255 & EU, RR.number(RU, tU, PU), EU === pU.DELETE) return;
        const TU = gU.ref;
        if ((EU & pU.ADD) === pU.ADD) {
          const UU = TU.$indexes.get(tU);
          RR.string(RU, UU, PU)
        }
        Vg(UU, RU, TU[QU], TU[jU](tU), EU, PU)
      },
      vg = function(UU, RU, gU, tU, EU, PU) {
        if (RU[PU.offset++] = 255 & EU, RR.number(RU, tU, PU), EU === pU.DELETE) return;
        const TU = gU.ref;
        Vg(UU, RU, TU[QU], TU[jU](tU), EU, PU)
      },
      dg = function(UU, RU, gU, tU, EU, PU) {
        const TU = gU.ref;
        (EU & pU.ADD) === pU.ADD && "function" === typeof TU.set ? Xg(UU, RU, gU, tU, EU, PU) : vg(UU, RU, gU, tU, EU, PU)
      },
      Hg = function(UU, RU, gU, tU, EU, PU, qU, KU) {
        const cU = gU.refTarget,
          GU = cU[QU],
          uU = "string" !== typeof GU;
        let CU;
        if (KU && gU.isFiltered && uU) {
          const UU = cU.tmpItems[tU];
          if (!UU) return;
          if (CU = UU[TU], EU === pU.DELETE) EU = pU.DELETE_BY_REFID;
          else if ((EU & pU.ADD) === pU.ADD) EU = pU.ADD_BY_REFID;
          else if ((EU & pU.MOVE) === pU.MOVE) return
        } else if (EU === pU.DELETE && uU) {
          const UU = cU.tmpItems[tU];
          if (!UU) return;
          CU = UU[TU], EU = pU.DELETE_BY_REFID
        } else CU = tU;
        if (RU[PU.offset++] = 255 & EU, RR.number(RU, CU, PU), EU === pU.DELETE || EU === pU.DELETE_BY_REFID) return;
        Vg(UU, RU, GU, cU[jU](tU, qU), EU, PU)
      };

    function Sg(UU, RU, gU, tU, EU, PU, qU) {
      const KU = UU.resyncVisited;
      let cU = KU.get(UU.currentRefId);
      if (void 0 === cU && KU.set(UU.currentRefId, cU = new Set), cU.add(tU), void 0 !== EU && gU === pU.ADD && EU !== PU) {
        const gU = EU[TU];
        void 0 !== gU && (UU.root.removeRef(gU), qU?.push({
          ref: RU,
          refId: UU.currentRefId,
          op: pU.DELETE,
          dynamicIndex: tU,
          value: void 0,
          previousValue: EU
        }))
      }
    }

    function sg(UU, RU, gU, tU) {
      const pU = RU[TU];
      if (void 0 === pU || gU.has(pU)) return;
      gU.add(pU);
      const EU = RU.constructor[Symbol.metadata],
        PU = EU?.[oU];
      if (void 0 === PU) return;
      const qU = EU[BU];
      for (let TU = 0; TU < PU.length; TU++) {
        const pU = PU[TU];
        if (void 0 !== qU && qU.includes(pU)) continue;
        const KU = EU[pU],
          cU = RU[KU.name];
        cU && (Zt.is(KU.type) ? sg(UU, cU, gU, tU) : yg(UU, cU, gU, tU))
      }
    }

    function yg(UU, RU, gU, tU) {
      const EU = RU[eU] ?? RU,
        PU = EU[TU];
      if (void 0 === PU || gU.has(PU)) return;
      gU.add(PU);
      const qU = UU.resyncVisited.get(PU);
      if (void 0 === qU) return;
      const KU = UU.root;
      EU[CU](qU, ((UU, gU) => {
        tU?.push({
          ref: RU,
          refId: PU,
          op: pU.DELETE,
          dynamicIndex: gU,
          value: void 0,
          previousValue: UU
        });
        const EU = UU?.[TU];
        void 0 !== EU && KU.removeRef(EU)
      }), (RU => {
        Zt.isSchema(RU) && sg(UU, RU, gU, tU)
      }))
    }
    const kg = 1,
      Fg = 2,
      ig = 3,
      Ag = 4,
      zg = 5;

    function Mg(UU, RU, gU, tU, EU, PU, qU, KU, cU) {
      const GU = UU.root;
      let jU;
      if ((RU & pU.DELETE) === pU.DELETE) {
        const UU = EU?.[TU];
        void 0 !== UU && GU.removeRef(UU), RU !== pU.DELETE_AND_ADD && gU[uU](tU), jU = void 0
      }
      if (RU === pU.DELETE);
      else if ("string" === typeof PU) jU = fR[PU](qU, KU);
      else if (vR(PU)) jU = function(UU, RU, gU) {
        return HR(UU, (0, fR[UU.wire])(RU, gU))
      }(PU.quantized, qU, KU);
      else if (Zt.is(PU)) {
        const gU = fR.number(qU, KU);
        if (jU = GU.refs.get(gU), (RU & pU.ADD) === pU.ADD) {
          const tU = UU.getInstanceType(qU, KU, PU);
          jU || (jU = UU.createInstanceOfType(tU)), GU.addRef(gU, jU, jU !== EU || RU === pU.DELETE_AND_ADD && jU === EU)
        }
      } else {
        const gU = (CU = Object.keys(PU)[0], xR[CU]),
          tU = fR.number(qU, KU);
        null !== UU.resyncVisited && function(UU, RU) {
          const gU = UU.resyncVisited;
          gU.has(RU) || gU.set(RU, new Set)
        }(UU, tU);
        const uU = GU.refs.has(tU) ? EU || GU.refs.get(tU) : gU.constructor.initializeForDecoder();
        if (jU = uU.clone(!0), jU[QU] = Object.values(PU)[0], EU) {
          let UU = EU[TU];
          if (void 0 !== UU && tU !== UU) {
            (RU & pU.DELETE) !== pU.DELETE && GU.removeRef(UU);
            const gU = EU.entries();
            let tU;
            for (;
              (tU = gU.next()) && !tU.done;) {
              const [RU, gU] = tU.value;
              "object" === typeof gU && (UU = gU[TU]), cU?.push({
                ref: EU,
                refId: UU,
                op: pU.DELETE,
                field: RU,
                value: void 0,
                previousValue: gU
              })
            }
          }
        }
        GU.addRef(tU, jU, uU !== EU || RU === pU.DELETE_AND_ADD && uU === EU)
      }
      var CU;
      return jU
    }
    const Dg = function(UU, RU, gU, tU, pU) {
        const EU = RU[gU.offset++],
          PU = tU.constructor[Symbol.metadata],
          TU = EU >> 6 << 6,
          qU = EU % (TU || 255),
          KU = PU[qU];
        if (void 0 === KU) return console.warn("@colyseus/schema: field not defined at", {
          index: qU,
          ref: tU.constructor.name,
          metadata: PU
        }), -1;
        const cU = !0 === KU.deprecated,
          GU = cU ? void 0 : tU[jU](qU),
          uU = Mg(UU, TU, tU, qU, GU, KU.type, RU, gU, pU);
        cU || (null !== uU && void 0 !== uU && (tU[KU.name] = uU), GU !== uU && pU?.push({
          ref: tU,
          refId: UU.currentRefId,
          op: TU,
          field: KU.name,
          value: uU,
          previousValue: GU
        }))
      },
      Lg = function(UU, RU, gU, tU, EU) {
        const PU = tU[eU] ?? tU,
          TU = RU[gU.offset++];
        if (TU === pU.CLEAR) return UU.removeChildRefs(PU, EU), void PU.clear();
        const qU = fR.number(RU, gU),
          KU = PU[QU],
          cU = PU.constructor.COLLECTION_KIND;
        let GU;
        (TU & pU.ADD) === pU.ADD ? cU === kg ? (GU = fR.string(RU, gU), PU.setIndex(qU, GU)) : GU = qU : GU = PU.getIndex(qU);
        const uU = PU[jU](qU),
          CU = Mg(UU, TU, tU, qU, uU, KU, RU, gU, EU);
        if (null !== UU.resyncVisited && Sg(UU, tU, TU, GU, uU, CU, EU), null !== CU && void 0 !== CU) switch (cU) {
          case kg:
            PU.$items.set(GU, CU);
            break;
          case Fg:
            PU.$setAt(qU, CU, null !== UU.resyncVisited && TU === pU.ADD ? pU.REPLACE : TU);
            break;
          case ig:
          case Ag:
          case zg:
            PU.$items.has(qU) || (PU.$items.set(qU, CU), "number" === typeof PU.$refId && qU >= PU.$refId && (PU.$refId = qU + 1));
            break;
          default:
            console.warn(`@colyseus/schema: missing COLLECTION_KIND on ${PU.constructor?.name} \u2014 item at index ${qU} was not stored.`)
        }
        uU !== CU && EU?.push({
          ref: tU,
          refId: UU.currentRefId,
          op: TU,
          dynamicIndex: GU,
          value: CU,
          previousValue: uU
        })
      },
      Ng = function(UU, RU, gU, tU, EU) {
        const PU = tU[eU] ?? tU;
        let TU, qU = RU[gU.offset++];
        if (qU === pU.CLEAR) return UU.removeChildRefs(PU, EU), void PU.clear();
        if (qU === pU.REVERSE) return void PU.items.reverse();
        if (qU === pU.DELETE_BY_REFID) {
          const qU = fR.number(RU, gU),
            KU = UU.root.refs.get(qU);
          if (void 0 === KU) return;
          if (UU.root.removeRef(qU), TU = PU.findIndex((UU => UU === KU)), -1 === TU) return;
          return PU[uU](TU), void EU?.push({
            ref: tU,
            refId: UU.currentRefId,
            op: pU.DELETE,
            dynamicIndex: TU,
            value: void 0,
            previousValue: KU
          })
        }
        if (qU === pU.ADD_BY_REFID) {
          const tU = fR.number(RU, gU),
            pU = UU.root.refs.get(tU);
          pU && (TU = PU.findIndex((UU => UU === pU))), -1 !== TU && void 0 !== TU || (TU = PU.length)
        } else TU = fR.number(RU, gU);
        const KU = PU[QU];
        let cU = TU;
        const GU = PU.items[TU],
          jU = Mg(UU, qU, tU, TU, GU, KU, RU, gU, EU);
        null !== UU.resyncVisited && Sg(UU, tU, qU, TU, GU, jU, EU), null !== jU && void 0 !== jU && jU !== GU && PU.$setAt(TU, jU, null !== UU.resyncVisited && qU === pU.ADD ? pU.REPLACE : qU), GU !== jU && EU?.push({
          ref: tU,
          refId: UU.currentRefId,
          op: qU,
          dynamicIndex: cU,
          value: jU,
          previousValue: GU
        })
      };
    class lg extends Error {}

    function Og(UU, RU, gU, tU) {
      if (!(UU instanceof RU)) throw new lg(`a '${RU.name}' was expected, but '${UU&&UU.constructor.name}' was provided in ${gU.constructor.name}#${tU}`)
    }
    const Ut = (UU, RU) => {
        const gU = UU.toString(),
          tU = RU.toString();
        return gU < tU ? -1 : gU > tU ? 1 : 0
      },
      Rt = {
        get: (UU, RU) => "symbol" === typeof RU || isNaN(RU) ? Reflect.get(UU, RU) : UU.items[RU],
        set: (UU, RU, gU) => {
          if ("symbol" !== typeof RU && !isNaN(RU)) {
            if (void 0 === gU || null === gU) UU.$deleteAt(RU);
            else {
              let tU;
              if (gU[hU]) {
                Og(gU, UU[QU], UU, RU);
                const EU = UU.items[RU];
                UU.isMovingItems ? (tU = UU.$wireIndex(Number(RU)), void 0 !== EU ? gU[hU].isNew ? UU[hU].indexedOperation(tU, pU.MOVE_AND_ADD) : (UU[hU].getChange(tU) & pU.DELETE) === pU.DELETE ? UU[hU].indexedOperation(tU, pU.DELETE_AND_MOVE) : UU[hU].indexedOperation(tU, pU.MOVE) : gU[hU].isNew && UU[hU].indexedOperation(tU, pU.ADD), gU[hU].setParent(UU, UU[hU].root, tU)) : tU = UU.$changeAt(Number(RU), gU), void 0 !== EU && EU[hU].root?.remove(EU[hU])
              } else tU = UU.$changeAt(Number(RU), gU);
              UU.items[RU] = gU, void 0 !== tU && (UU.tmpItems[tU] = gU)
            }
            return !0
          }
          return Reflect.set(UU, RU, gU)
        },
        deleteProperty: (UU, RU) => ("number" === typeof RU ? UU.$deleteAt(RU) : delete UU[RU], !0),
        has: (UU, RU) => "symbol" === typeof RU || isNaN(Number(RU)) ? Reflect.has(UU, RU) : Reflect.has(UU.items, RU)
      };
    class gt {
      [hU];
      [TU];
      [eU];
      [QU];
      items = [];
      tmpItems = [];
      deletedIndexes = [];
      isMovingItems = !1;
      _needsCompaction = !1;
      static[KU] = Hg;
      static[cU] = Ng;
      static COLLECTION_KIND = Fg;
      static[GU](UU, RU, gU) {
        if (!gU) return !0;
        const tU = UU[eU] ?? UU;
        return "string" === typeof tU[QU] || gU.isChangeTreeVisible(tU.tmpItems[RU]?.[hU])
      }
      static is(UU) {
        return Array.isArray(UU) || void 0 !== UU.array
      }
      static from(UU) {
        return new gt(...Array.from(UU))
      }
      constructor() {
        this[QU] = void 0, this[eU] = this;
        const UU = new Proxy(this, Rt);
        return Object.defineProperty(this, hU, {
          value: new ag(UU, this),
          enumerable: !1,
          writable: !0
        }), arguments.length > 0 && this.push(...arguments), UU
      }
      static initializeForDecoder() {
        const UU = Object.create(gt.prototype);
        UU.items = [], UU.isMovingItems = !1, UU._needsCompaction = !1, UU[QU] = void 0, UU[eU] = UU;
        const RU = new Proxy(UU, Rt);
        return Bg(UU, RU), RU
      }
      set length(UU) {
        0 === UU ? this.clear() : UU < this.items.length ? this.splice(UU, this.length - UU) : console.warn("ArraySchema: can't set .length to a higher value than its length.")
      }
      get length() {
        return this.items.length
      }
      pauseTracking() {
        this[hU].pause()
      }
      resumeTracking() {
        this[hU].resume()
      }
      untracked(UU) {
        return this[hU].untracked(UU)
      }
      get isTrackingPaused() {
        return this[hU].paused
      }
      push() {
        const UU = this[eU],
          RU = UU.items,
          gU = UU.tmpItems,
          tU = UU[hU],
          EU = UU[QU];
        let PU = gU.length;
        for (let TU = 0, qU = arguments.length; TU < qU; TU++, PU++) {
          const qU = TU < 0 || arguments.length <= TU ? void 0 : arguments[TU];
          if (void 0 === qU || null === qU) return;
          "object" === typeof qU && EU && Og(qU, EU, UU, TU), tU.indexedOperation(PU, pU.ADD), RU.push(qU), gU.push(qU), qU[hU]?.setParent(this, tU.root, PU)
        }
        return PU
      }
      pop() {
        const UU = this[eU],
          RU = UU.tmpItems,
          gU = UU.deletedIndexes;
        let tU = -1;
        for (let EU = RU.length - 1; EU >= 0; EU--)
          if (!0 !== gU[EU]) {
            tU = EU;
            break
          } if (tU < 0) return;
        const pU = UU.$isUnsentAdd(tU);
        return UU[hU].delete(tU), pU ? UU.$cancelAdd(tU) : gU[tU] = !0, UU.items.pop()
      }
      at(UU) {
        return UU < 0 && (UU += this.length), this.items[UU]
      }
      $wireIndex(UU) {
        const RU = this.deletedIndexes;
        if (0 === RU.length) return UU;
        const gU = this.tmpItems;
        let tU = 0;
        for (let pU = 0; pU < gU.length; pU++)
          if (!0 !== RU[pU]) {
            if (tU === UU) return pU;
            tU++
          } return gU.length + (UU - tU)
      }
      $isUnsentAdd(UU) {
        const RU = this[hU];
        return 0 === (576 & RU.flags) && !RU.paused && "string" !== typeof this[QU] && RU.operationAt(UU) === pU.ADD
      }
      $cancelAdd(UU) {
        let RU = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        const gU = this[hU],
          tU = this.tmpItems[UU];
        this.tmpItems.splice(UU, 1), this.deletedIndexes.length > 0 && this.deletedIndexes.splice(UU, 1), gU.removeAt(UU, 1);
        const pU = tU?.[hU];
        void 0 !== pU && void 0 === pU.root && pU.removeParent(this), RU && this.$reindexChildren(UU)
      }
      $reindexChildren(UU, RU) {
        if (!this[hU].hasFilteredFields) return;
        if ("string" === typeof this[QU]) return;
        const gU = this.tmpItems,
          tU = gU.length;
        if (void 0 !== RU)
          for (; UU < tU && gU[UU] === RU[UU];) UU++;
        for (let pU = UU; pU < tU; pU++) gU[pU]?.[hU]?.setParentIndex(this, pU)
      }
      $changeAt(UU, RU) {
        if (void 0 === RU || null === RU) return void console.error("ArraySchema items cannot be null nor undefined; Use `splice(index, 1)` instead.");
        if (this.items[UU] === RU) return;
        const gU = void 0 !== this.items[UU] ? "object" === typeof RU ? pU.DELETE_AND_ADD : pU.REPLACE : pU.ADD,
          tU = this.$wireIndex(UU),
          EU = this[hU];
        return EU.change(tU, gU), RU[hU]?.setParent(this, EU.root, tU), tU
      }
      $deleteAt(UU, RU) {
        this[hU].delete(this.$wireIndex(UU), RU)
      }
      $setAt(UU, RU, gU) {
        gU === pU.ADD && void 0 !== this.items[UU] ? this.items.splice(UU, 0, RU) : gU === pU.DELETE_AND_MOVE ? (this.items.splice(UU, 1), this.items[UU] = RU) : (UU > this.items.length && (this._needsCompaction = !0), this.items[UU] = RU)
      }
      clear() {
        const UU = this[eU];
        if (0 === UU.items.length) return;
        const RU = UU[hU];
        RU.forEachChild(((UU, gU) => {
          RU.root?.remove(UU)
        })), RU.discard(), RU.operation(pU.CLEAR), UU.items.length = 0, UU.tmpItems.length = 0
      } [fU]() {
        const UU = this[eU] ?? this,
          RU = UU[hU];
        if (RU.isStreamCollection) throw new Error("@colyseus/schema: cannot reset a streamed ArraySchema (pooling not supported).");
        const gU = UU.items;
        for (let tU = 0; tU < gU.length; tU++) gU[tU]?.[fU]?.();
        UU.items.length = 0, UU.tmpItems.length = 0, UU.deletedIndexes.length = 0, RU.recycle(), UU[TU] = void 0
      }
      concat() {
        return new gt(...this.items.concat(...arguments))
      }
      join(UU) {
        return this.items.join(UU)
      }
      reverse() {
        const UU = this[eU],
          RU = UU[hU];
        if (RU.has() || UU.deletedIndexes.length > 0) {
          const RU = UU.items.slice().reverse();
          return this.clear(), this.push(...RU), this
        }
        return RU.operation(pU.REVERSE), UU.items.reverse(), UU.tmpItems.reverse(), UU.$reindexChildren(0), this
      }
      shift() {
        const UU = this[eU],
          RU = UU.items;
        if (0 === RU.length) return;
        const gU = UU[hU],
          tU = UU.deletedIndexes;
        let EU = 0;
        for (; !0 === tU[EU];) EU++;
        const PU = UU.$isUnsentAdd(EU);
        return gU.delete(EU, pU.DELETE), PU ? UU.$cancelAdd(EU) : tU[EU] = !0, RU.shift()
      }
      slice(UU, RU) {
        const gU = new gt;
        return gU.push(...this.items.slice(UU, RU)), gU
      }
      sort() {
        let UU = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Ut;
        const RU = this[eU];
        RU.isMovingItems = !0;
        const gU = RU[hU];
        return RU.items.sort(UU).forEach(((UU, RU) => gU.change(RU, pU.REPLACE))), RU.tmpItems.sort(UU), RU.$reindexChildren(0), RU.isMovingItems = !1, this
      }
      splice(UU, RU) {
        const gU = this[eU],
          tU = gU[hU],
          EU = gU.items,
          PU = gU.tmpItems,
          TU = gU.deletedIndexes,
          qU = EU.length,
          KU = PU.length;
        for (var cU = arguments.length, GU = new Array(cU > 2 ? cU - 2 : 0), jU = 2; jU < cU; jU++) GU[jU - 2] = arguments[jU];
        const uU = GU.length,
          CU = [];
        for (let pU = 0; pU < KU; pU++) !0 !== TU[pU] && CU.push(pU);
        let QU;
        if (qU > UU) {
          void 0 === RU && (RU = qU - UU);
          for (let EU = UU; EU < UU + RU; EU++) {
            const UU = CU[EU],
              RU = gU.$isUnsentAdd(UU);
            tU.delete(UU, pU.DELETE), RU ? (QU ??= []).push(UU) : TU[UU] = !0
          }
        } else RU = 0;
        if (uU > 0) {
          const EU = CU[UU] ?? qU,
            KU = Math.min(uU, RU);
          for (let UU = 0; UU < KU; UU++) {
            const RU = EU + UU;
            let gU;
            const qU = void 0 !== QU ? QU.indexOf(RU) : -1; - 1 !== qU ? (QU.splice(qU, 1), gU = pU.ADD) : gU = TU[RU] ? pU.DELETE_AND_ADD : pU.ADD, tU.indexedOperation(RU, gU), PU[RU] = GU[UU], TU[RU] = !1, GU[UU][hU]?.setParent(this, tU.root, RU)
          }
          const cU = uU - KU;
          if (cU > 0) {
            const UU = EU + KU;
            tU.insertAt(UU, cU);
            for (let RU = 0; RU < cU; RU++) GU[KU + RU][hU]?.setParent(this, tU.root, UU + RU);
            TU.length > 0 && TU.splice(UU, 0, ...new Array(cU).fill(!1)), PU.splice(UU, 0, ...GU.slice(KU)), gU.$reindexChildren(UU + cU)
          }
        }
        if (void 0 !== QU && QU.length > 0) {
          for (let UU = QU.length - 1; UU >= 0; UU--) gU.$cancelAdd(QU[UU], !1);
          gU.$reindexChildren(QU[0])
        }
        return tU.root?.enqueueChangeTree(tU), EU.splice(UU, RU, ...GU)
      }
      unshift() {
        const UU = this[eU],
          RU = UU[hU];
        RU.unshift(arguments.length);
        for (let tU = 0; tU < arguments.length; tU++)(tU < 0 || arguments.length <= tU ? void 0 : arguments[tU])?.[hU]?.setParent(this, RU.root, tU);
        const gU = UU.deletedIndexes;
        return gU.length > 0 && gU.unshift(...new Array(arguments.length).fill(!1)), UU.tmpItems.unshift(...arguments), UU.$reindexChildren(arguments.length), UU.items.unshift(...arguments)
      }
      indexOf(UU, RU) {
        return this.items.indexOf(UU, RU)
      }
      lastIndexOf(UU) {
        let RU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.length - 1;
        return this.items.lastIndexOf(UU, RU)
      }
      every(UU, RU) {
        return this.items.every(UU, RU)
      }
      some(UU, RU) {
        return this.items.some(UU, RU)
      }
      forEach(UU, RU) {
        return this.items.forEach(UU, RU)
      }
      map(UU, RU) {
        return this.items.map(UU, RU)
      }
      filter(UU, RU) {
        return this.items.filter(UU, RU)
      }
      reduce(UU, RU) {
        return this.items.reduce.apply(this.items, arguments)
      }
      reduceRight(UU, RU) {
        return this.items.reduceRight.apply(this.items, arguments)
      }
      find(UU, RU) {
        return this.items.find(UU, RU)
      }
      findIndex(UU, RU) {
        return this.items.findIndex(UU, RU)
      }
      fill(UU, RU, gU) {
        throw new Error("ArraySchema#fill() not implemented")
      }
      copyWithin(UU, RU, gU) {
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
        return gt
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
      includes(UU, RU) {
        return this.items.includes(UU, RU)
      }
      flatMap(UU, RU) {
        throw new Error("ArraySchema#flatMap() is not supported.")
      }
      flat(UU) {
        throw new Error("ArraySchema#flat() is not supported.")
      }
      findLast() {
        return this.items.findLast.apply(this.items, arguments)
      }
      findLastIndex() {
        for (var UU = arguments.length, RU = new Array(UU), gU = 0; gU < UU; gU++) RU[gU] = arguments[gU];
        return this.items.findLastIndex.apply(this.items, arguments)
      }
      with(UU, RU) {
        const gU = this.items.slice();
        return UU < 0 && (UU += this.length), gU[UU] = RU, new gt(...gU)
      }
      toReversed() {
        return this.items.slice().reverse()
      }
      toSorted(UU) {
        return this.items.slice().sort(UU)
      }
      toSpliced(UU, RU) {
        for (var gU = arguments.length, tU = new Array(gU > 2 ? gU - 2 : 0), pU = 2; pU < gU; pU++) tU[pU - 2] = arguments[pU];
        const EU = this.items.slice();
        return EU.splice.apply(EU, arguments), EU
      }
      shuffle() {
        return this.move((UU => {
          let RU = this.items.length;
          for (; 0 != RU;) {
            let UU = Math.floor(Math.random() * RU);
            RU--, [this[RU], this[UU]] = [this[UU], this[RU]]
          }
        }))
      }
      move(UU) {
        return this.isMovingItems = !0, UU(this), this.isMovingItems = !1, this
      } [jU](UU) {
        let RU = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        const gU = this[eU] ?? this;
        return RU || gU.deletedIndexes[UU] ? gU.items[UU] : gU.tmpItems[UU] || gU.items[UU]
      } [uU](UU) {
        const RU = this[eU] ?? this;
        RU.items[UU] = void 0, RU._needsCompaction = !0
      } [WU]() {
        const UU = this.tmpItems;
        this.tmpItems = this.items.slice(), this.deletedIndexes.length > 0 && (this.$reindexChildren(0, UU), this.deletedIndexes.length = 0)
      } [xU]() {
        const UU = this[eU] ?? this;
        UU._needsCompaction && (UU._needsCompaction = !1, UU.items = UU.items.filter((UU => void 0 !== UU)))
      } [CU](UU, RU, gU) {
        const tU = this[eU] ?? this,
          pU = tU.items;
        let EU = !1;
        for (let PU = 0; PU < pU.length; PU++) {
          const TU = pU[PU];
          UU.has(PU) ? gU(TU) : (EU = !0, RU(TU, PU), tU[uU](PU))
        }
        EU && tU[xU]()
      }
      toArray() {
        return this.items.slice(0)
      }
      toJSON() {
        return this.toArray().map((UU => "function" === typeof UU.toJSON ? UU.toJSON() : UU))
      }
      clone(UU) {
        let RU;
        return UU ? (RU = new gt, RU.push(...this.items)) : RU = new gt(...this.map((UU => UU[hU] ? UU.clone() : UU))), RU
      }
    }
    IR("array", {
      constructor: gt
    });
    class tt {
      keyByIndex = new Map;
      indexByKey = Object.create(null);
      nextIndex = 0;
      snapshots;
      indexOf(UU) {
        const RU = this.indexByKey[UU];
        return void 0 === RU ? void 0 : RU
      }
      assign(UU) {
        const RU = this.nextIndex++;
        return this.indexByKey[UU] = RU, this.keyByIndex.set(RU, UU), RU
      }
      snapshot(UU, RU) {
        (this.snapshots ??= new Map).set(UU, RU)
      }
      forgetSnapshot(UU) {
        this.snapshots?.delete(UU)
      }
      snapshotAt(UU) {
        return this.snapshots?.get(UU)
      }
      setIndex(UU, RU) {
        this.keyByIndex.set(UU, RU), this.indexByKey[RU] = UU
      }
      keyOf(UU) {
        return this.keyByIndex.get(UU)
      }
      cleanupAfterEncode() {
        if (void 0 !== this.snapshots) {
          for (const [UU] of this.snapshots) {
            const RU = this.keyByIndex.get(UU);
            void 0 !== RU && (delete this.indexByKey[RU], this.keyByIndex.delete(UU))
          }
          this.snapshots.clear()
        }
      }
      reset() {
        this.indexByKey = Object.create(null), this.keyByIndex.clear(), this.snapshots?.clear(), this.nextIndex = 0
      }
    }
    class pt {
      [hU];
      [TU];
      childType;
      [QU];
      $items = new Map;
      journal = new tt;
      _stream;
      get maxPerTick() {
        return this._stream?.maxPerTick ?? 32
      }
      set maxPerTick(UU) {
        (this._stream ??= nR()).maxPerTick = UU
      }
      get priority() {
        return this._stream?.priority
      }
      set priority(UU) {
        (this._stream ??= nR()).priority = UU
      }
      get $indexes() {
        return this.journal.keyByIndex
      }
      get _collectionIndexes() {
        return this.journal.indexByKey
      }
      static[KU] = Xg;
      static[cU] = Lg;
      static COLLECTION_KIND = kg;
      static[GU](UU, RU, gU) {
        if (!gU || "string" === typeof UU[QU]) return !0;
        const tU = UU[jU](RU) ?? UU.journal.snapshotAt(RU);
        return gU.isChangeTreeVisible(tU[hU])
      }
      static is(UU) {
        return void 0 !== UU.map
      }
      constructor(UU) {
        if (Object.defineProperty(this, hU, {
            value: new ag(this),
            enumerable: !1,
            writable: !0
          }), this[QU] = void 0, UU)
          if (UU instanceof Map || UU instanceof pt) UU.forEach(((UU, RU) => this.set(RU, UU)));
          else
            for (const RU in UU) this.set(RU, UU[RU])
      }
      static initializeForDecoder() {
        const UU = Object.create(pt.prototype);
        return UU.$items = new Map, UU.journal = new tt, UU[QU] = void 0, Bg(UU), UU
      } [Symbol.iterator]() {
        return this.$items[Symbol.iterator]()
      }
      get[Symbol.toStringTag]() {
        return this.$items[Symbol.toStringTag]
      }
      static get[Symbol.species]() {
        return pt
      }
      set(UU, RU) {
        if (void 0 === RU || null === RU) throw new Error(`MapSchema#set('${UU}', ${RU}): trying to set ${RU} value on '${UU}'.`);
        "object" === typeof RU && this[QU] && Og(RU, this[QU], this, UU), UU = UU.toString();
        const gU = this[hU],
          tU = void 0 !== RU[hU],
          EU = this.journal;
        let PU, TU = EU.indexOf(UU);
        if (void 0 !== TU) {
          PU = pU.REPLACE;
          const gU = this.$items.get(UU);
          if (gU === RU) return;
          tU && (PU = pU.DELETE_AND_ADD, void 0 !== gU && gU[hU].root?.remove(gU[hU])), void 0 !== EU.snapshotAt(TU) && EU.forgetSnapshot(TU)
        } else TU = EU.assign(UU), PU = pU.ADD;
        return this.$items.set(UU, RU), PU === pU.ADD && gU.isStreamCollection ? void 0 !== gU.root && oR(this, gU.root, TU) : gU.change(TU, PU), tU && RU[hU].setParent(this, gU.root, TU), this
      }
      get(UU) {
        return this.$items.get(UU)
      }
      getOrInsert(UU, RU) {
        return this.$items.has(UU) ? this.$items.get(UU) : (this.set(UU, RU), RU)
      }
      getOrInsertComputed(UU, RU) {
        if (this.$items.has(UU)) return this.$items.get(UU);
        const gU = RU(UU);
        return this.set(UU, gU), gU
      }
      delete(UU) {
        if (!this.$items.has(UU)) return !1;
        const RU = this.journal.indexOf(UU),
          gU = this.$items.get(UU),
          tU = this[hU];
        if (tU.isStreamCollection) {
          const pU = tU.root;
          let EU = !1;
          return void 0 !== pU && (EU = ZR(this, pU, this[TU], RU)), void 0 !== gU?.[hU] && pU?.remove(gU[hU]), this.$items.delete(UU), EU || this.journal.snapshot(RU, gU), !0
        }
        return this.journal.snapshot(RU, gU), tU.delete(RU), this.$items.delete(UU)
      }
      clear() {
        const UU = this[hU];
        UU.discard(), UU.forEachChild(((RU, gU) => {
          UU.root?.remove(RU)
        })), this.journal.reset(), this.$items.clear(), UU.operation(pU.CLEAR)
      } [fU]() {
        const UU = this[hU];
        if (UU.isStreamCollection) throw new Error("@colyseus/schema: cannot reset a streamed MapSchema (pooling not supported).");
        this.$items.forEach((UU => UU?.[fU]?.())), this.$items.clear(), this.journal.reset(), UU.recycle(), this[TU] = void 0
      }
      has(UU) {
        return this.$items.has(UU)
      }
      forEach(UU) {
        this.$items.forEach(UU)
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
        this[hU].pause()
      }
      resumeTracking() {
        this[hU].resume()
      }
      untracked(UU) {
        return this[hU].untracked(UU)
      }
      get isTrackingPaused() {
        return this[hU].paused
      }
      setIndex(UU, RU) {
        this.journal.setIndex(UU, RU)
      }
      getIndex(UU) {
        return this.journal.keyOf(UU)
      } [jU](UU) {
        const RU = this.journal.keyOf(UU);
        return void 0 !== RU ? this.$items.get(RU) : void 0
      } [uU](UU) {
        const RU = this.journal.keyOf(UU);
        void 0 !== RU && (this.$items.delete(RU), this.journal.keyByIndex.delete(UU))
      } [CU](UU, RU, gU) {
        let tU = null;
        if (this.$items.forEach(((pU, EU) => {
            UU.has(EU) ? gU(pU) : ((tU ??= new Set).add(EU), RU(pU, EU))
          })), null !== tU) {
          tU.forEach((UU => {
            this.$items.delete(UU), delete this.journal.indexByKey[UU]
          }));
          const UU = [];
          this.journal.keyByIndex.forEach(((RU, gU) => {
            tU.has(RU) && UU.push(gU)
          }));
          for (let RU = 0; RU < UU.length; RU++) this.journal.keyByIndex.delete(UU[RU])
        }
      } [WU]() {
        this.journal.cleanupAfterEncode()
      }
      _dropView(UU) {
        VR(this, UU)
      }
      _unregister() {}
      toJSON() {
        return Object.fromEntries(Array.from(this, (UU => {
          let [RU, gU] = UU;
          return [RU, "function" === typeof gU.toJSON ? gU.toJSON() : gU]
        })))
      }
      clone(UU) {
        let RU;
        return UU ? RU = Object.assign(new pt, this) : (RU = new pt, this.forEach(((UU, gU) => {
          UU[hU] ? RU.set(gU, UU.clone()) : RU.set(gU, UU)
        }))), RU
      }
    }
    IR("map", {
      constructor: pt
    });
    class Et {
      [hU];
      [TU];
      [QU];
      $items = new Map;
      deletedItems = {};
      $refId = 0;
      _stream;
      get maxPerTick() {
        return this._stream?.maxPerTick ?? 32
      }
      set maxPerTick(UU) {
        (this._stream ??= nR()).maxPerTick = UU
      }
      get priority() {
        return this._stream?.priority
      }
      set priority(UU) {
        (this._stream ??= nR()).priority = UU
      }
      static[KU] = vg;
      static[cU] = Lg;
      static COLLECTION_KIND = Ag;
      static[GU](UU, RU, gU) {
        return !gU || "string" === typeof UU[QU] || gU.isChangeTreeVisible((UU[jU](RU) ?? UU.deletedItems[RU])[hU])
      }
      static is(UU) {
        return void 0 !== UU.collection
      }
      constructor(UU) {
        Object.defineProperty(this, hU, {
          value: new ag(this),
          enumerable: !1,
          writable: !0
        }), this[QU] = void 0, UU && UU.forEach((UU => this.add(UU)))
      }
      static initializeForDecoder() {
        const UU = Object.create(Et.prototype);
        return UU.$items = new Map, UU.deletedItems = {}, UU.$refId = 0, UU[QU] = void 0, Bg(UU), UU
      }
      add(UU) {
        const RU = this.$refId++,
          gU = this[hU];
        return this.$items.set(RU, UU), gU.isStreamCollection ? void 0 !== gU.root && oR(this, gU.root, RU) : gU.change(RU), void 0 !== UU[hU] && UU[hU].setParent(this, gU.root, RU), RU
      }
      at(UU) {
        const RU = Array.from(this.$items.keys())[UU];
        return this.$items.get(RU)
      }
      entries() {
        return this.$items.entries()
      }
      delete(UU) {
        const RU = this.$items.entries();
        let gU, tU;
        for (;
          (tU = RU.next()) && !tU.done;)
          if (UU === tU.value[1]) {
            gU = tU.value[0];
            break
          } if (void 0 === gU) return !1;
        const pU = this[hU];
        if (pU.isStreamCollection) {
          const UU = pU.root,
            RU = this.$items.get(gU);
          return void 0 !== UU && ZR(this, UU, this[TU], gU), void 0 !== RU?.[hU] && UU?.remove(RU[hU]), this.deletedItems[gU] = RU, this.$items.delete(gU)
        }
        return this.deletedItems[gU] = pU.delete(gU), this.$items.delete(gU)
      }
      clear() {
        const UU = this[hU];
        UU.discard(), UU.forEachChild(((RU, gU) => {
          UU.root?.remove(RU)
        })), this.$items.clear(), UU.operation(pU.CLEAR)
      } [fU]() {
        const UU = this[hU];
        if (UU.isStreamCollection) throw new Error("@colyseus/schema: cannot reset a streamed CollectionSchema (pooling not supported).");
        this.$items.forEach((UU => UU?.[fU]?.())), this.$items.clear(), this.deletedItems = {}, this.$refId = 0, UU.recycle(), this[TU] = void 0
      }
      has(UU) {
        return Array.from(this.$items.values()).some((RU => RU === UU))
      }
      forEach(UU) {
        this.$items.forEach(((RU, gU, tU) => UU(RU, gU, this)))
      }
      values() {
        return this.$items.values()
      }
      get size() {
        return this.$items.size
      }
      pauseTracking() {
        this[hU].pause()
      }
      resumeTracking() {
        this[hU].resume()
      }
      untracked(UU) {
        return this[hU].untracked(UU)
      }
      get isTrackingPaused() {
        return this[hU].paused
      } [Symbol.iterator]() {
        return this.$items.values()
      }
      setIndex(UU, RU) {}
      getIndex(UU) {
        return UU
      } [jU](UU) {
        return this.$items.get(UU)
      } [uU](UU) {
        this.$items.delete(UU)
      } [CU](UU, RU, gU) {
        let tU = null;
        if (this.$items.forEach(((pU, EU) => {
            UU.has(EU) ? gU(pU) : ((tU ??= []).push(EU), RU(pU, EU))
          })), null !== tU)
          for (let pU = 0; pU < tU.length; pU++) this[uU](tU[pU])
      } [WU]() {
        for (const UU in this.deletedItems) delete this.deletedItems[UU]
      }
      _dropView(UU) {
        VR(this, UU)
      }
      _unregister() {}
      toArray() {
        return Array.from(this.$items.values())
      }
      toJSON() {
        const UU = [];
        return this.forEach(((RU, gU) => {
          UU.push("function" === typeof RU.toJSON ? RU.toJSON() : RU)
        })), UU
      }
      clone(UU) {
        let RU;
        return UU ? RU = Object.assign(new Et, this) : (RU = new Et, this.forEach((UU => {
          UU[hU] ? RU.add(UU.clone()) : RU.add(UU)
        }))), RU
      }
    }
    IR("collection", {
      constructor: Et
    });
    class Pt {
      [hU];
      [TU];
      [QU];
      $items = new Map;
      deletedItems = {};
      $refId = 0;
      _stream;
      get maxPerTick() {
        return this._stream?.maxPerTick ?? 32
      }
      set maxPerTick(UU) {
        (this._stream ??= nR()).maxPerTick = UU
      }
      get priority() {
        return this._stream?.priority
      }
      set priority(UU) {
        (this._stream ??= nR()).priority = UU
      }
      static[KU] = vg;
      static[cU] = Lg;
      static COLLECTION_KIND = ig;
      static[GU](UU, RU, gU) {
        return !gU || "string" === typeof UU[QU] || gU.isVisible((UU[jU](RU) ?? UU.deletedItems[RU])[hU])
      }
      static is(UU) {
        return void 0 !== UU.set
      }
      constructor(UU) {
        Object.defineProperty(this, hU, {
          value: new ag(this),
          enumerable: !1,
          writable: !0
        }), this[QU] = void 0, UU && UU.forEach((UU => this.add(UU)))
      }
      static initializeForDecoder() {
        const UU = Object.create(Pt.prototype);
        return UU.$items = new Map, UU.deletedItems = {}, UU.$refId = 0, UU[QU] = void 0, Bg(UU), UU
      }
      add(UU) {
        if (this.has(UU)) return !1;
        const RU = this.$refId++,
          gU = this[hU];
        return this.$items.set(RU, UU), gU.isStreamCollection ? void 0 !== gU.root && oR(this, gU.root, RU) : gU.change(RU, pU.ADD), void 0 !== UU[hU] && UU[hU].setParent(this, gU.root, RU), RU
      }
      entries() {
        return this.$items.entries()
      }
      delete(UU) {
        const RU = this.$items.entries();
        let gU, tU;
        for (;
          (tU = RU.next()) && !tU.done;)
          if (UU === tU.value[1]) {
            gU = tU.value[0];
            break
          } if (void 0 === gU) return !1;
        const pU = this[hU];
        if (pU.isStreamCollection) {
          const UU = pU.root,
            RU = this.$items.get(gU);
          return void 0 !== UU && ZR(this, UU, this[TU], gU), void 0 !== RU?.[hU] && UU?.remove(RU[hU]), this.deletedItems[gU] = RU, this.$items.delete(gU)
        }
        return this.deletedItems[gU] = pU.delete(gU), this.$items.delete(gU)
      }
      clear() {
        const UU = this[hU];
        UU.discard(), this.$items.clear(), UU.operation(pU.CLEAR)
      } [fU]() {
        const UU = this[hU];
        if (UU.isStreamCollection) throw new Error("@colyseus/schema: cannot reset a streamed SetSchema (pooling not supported).");
        this.$items.forEach((UU => UU?.[fU]?.())), this.$items.clear(), this.deletedItems = {}, this.$refId = 0, UU.recycle(), this[TU] = void 0
      }
      has(UU) {
        const RU = this.$items.values();
        let gU, tU = !1;
        for (;
          (gU = RU.next()) && !gU.done;)
          if (UU === gU.value) {
            tU = !0;
            break
          } return tU
      }
      forEach(UU) {
        this.$items.forEach(((RU, gU, tU) => UU(RU, gU, this)))
      }
      values() {
        return this.$items.values()
      }
      get size() {
        return this.$items.size
      }
      pauseTracking() {
        this[hU].pause()
      }
      resumeTracking() {
        this[hU].resume()
      }
      untracked(UU) {
        return this[hU].untracked(UU)
      }
      get isTrackingPaused() {
        return this[hU].paused
      } [Symbol.iterator]() {
        return this.$items.values()
      }
      setIndex(UU, RU) {}
      getIndex(UU) {
        return UU
      } [jU](UU) {
        return this.$items.get(UU)
      } [uU](UU) {
        this.$items.delete(UU)
      } [CU](UU, RU, gU) {
        let tU = null;
        if (this.$items.forEach(((pU, EU) => {
            UU.has(EU) ? gU(pU) : ((tU ??= []).push(EU), RU(pU, EU))
          })), null !== tU)
          for (let pU = 0; pU < tU.length; pU++) this[uU](tU[pU])
      } [WU]() {
        for (const UU in this.deletedItems) delete this.deletedItems[UU]
      }
      _dropView(UU) {
        VR(this, UU)
      }
      _unregister() {}
      toArray() {
        return Array.from(this.$items.values())
      }
      toJSON() {
        const UU = [];
        return this.forEach(((RU, gU) => {
          UU.push("function" === typeof RU.toJSON ? RU.toJSON() : RU)
        })), UU
      }
      clone(UU) {
        let RU;
        return UU ? RU = Object.assign(new Pt, this) : (RU = new Pt, this.forEach((UU => {
          UU[hU] ? RU.add(UU.clone()) : RU.add(UU)
        }))), RU
      }
    }
    IR("set", {
      constructor: Pt
    });
    class Tt {
      [hU];
      [TU];
      [QU];
      $items = new Map;
      $nextPosition = 0;
      _itemIndex = new Map;
      _stream;
      get maxPerTick() {
        return this._stream?.maxPerTick ?? 32
      }
      set maxPerTick(UU) {
        (this._stream ??= nR()).maxPerTick = UU
      }
      get priority() {
        return this._stream?.priority
      }
      set priority(UU) {
        (this._stream ??= nR()).priority = UU
      }
      static $isStream = !0;
      static[KU] = vg;
      static[cU] = Lg;
      static COLLECTION_KIND = zg;
      static[GU](UU, RU, gU) {
        if (!gU) return !0;
        const tU = UU[jU](RU);
        return void 0 !== tU && gU.isVisible(tU[hU])
      }
      static is(UU) {
        return UU && void 0 !== UU.stream
      }
      constructor() {
        Object.defineProperty(this, hU, {
          value: new ag(this),
          enumerable: !1,
          writable: !0
        }), this[QU] = void 0
      }
      static initializeForDecoder() {
        const UU = Object.create(Tt.prototype);
        return UU.$items = new Map, UU.$nextPosition = 0, UU._itemIndex = new Map, UU[QU] = void 0, Bg(UU), UU
      }
      add(UU) {
        if (this._itemIndex.has(UU)) return -1;
        const RU = this.$nextPosition++;
        this.$items.set(RU, UU), this._itemIndex.set(UU, RU);
        const gU = this[hU].root;
        return void 0 !== UU[hU] && UU[hU].setParent(this, gU, RU), void 0 !== gU && oR(this, gU, RU), RU
      }
      remove(UU) {
        const RU = this._itemIndex.get(UU);
        if (void 0 === RU) return !1;
        this._itemIndex.delete(UU), this.$items.delete(RU);
        const gU = this[hU].root;
        return void 0 !== gU && (ZR(this, gU, this[TU], RU), void 0 !== UU[hU] && gU.remove(UU[hU])), !0
      }
      has(UU) {
        return this._itemIndex.has(UU)
      }
      clear() {
        const UU = this[hU].root;
        if (void 0 !== UU) {
          ! function(UU, RU, gU) {
            const tU = UU._stream;
            if (void 0 !== tU) {
              tU.broadcastPending.clear();
              for (const UU of tU.sentBroadcast) tU.broadcastDeletes.add(UU);
              tU.sentBroadcast.clear(), RU.forEachActiveView((UU => {
                tU.pendingByView.get(UU.id)?.clear();
                const RU = tU.sentByView.get(UU.id);
                if (void 0 !== RU && RU.size > 0) {
                  let tU = UU.changes.get(gU);
                  void 0 === tU && (tU = new Map, UU.changes.set(gU, tU));
                  for (const UU of RU) tU.set(UU, pU.DELETE);
                  RU.clear()
                }
              }))
            }
          }(this, UU, this[TU]);
          for (const RU of this.$items.values()) void 0 !== RU[hU] && UU.remove(RU[hU])
        }
        this.$items.clear(), this._itemIndex.clear()
      }
      forEach(UU) {
        for (const [RU, gU] of this.$items) UU(gU, RU, this)
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
      setIndex(UU, RU) {}
      getIndex(UU) {
        return UU
      } [jU](UU) {
        return this.$items.get(UU)
      } [uU](UU) {
        const RU = this.$items.get(UU);
        void 0 !== RU && (this._itemIndex.delete(RU), this.$items.delete(UU))
      } [CU]() {} [WU]() {}
      toArray() {
        return Array.from(this.$items.values())
      }
      toJSON() {
        const UU = [];
        return this.forEach((RU => {
          UU.push("function" === typeof RU?.toJSON ? RU.toJSON() : RU)
        })), UU
      }
      clone(UU) {
        if (UU) {
          return Object.assign(new Tt, this)
        }
        const RU = new Tt;
        return RU.maxPerTick = this.maxPerTick, this.forEach((UU => {
          RU.add("function" === typeof UU?.clone ? UU.clone() : UU)
        })), RU
      }
      _dropView(UU) {
        VR(this, UU)
      }
      _unregister() {}
    }
    IR("stream", {
      constructor: Tt
    });
    class qt {
      [IU] = !0;
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
      constructor(UU) {
        this._type = UU
      }
      default (UU) {
        return this._default = UU, this._hasDefault = !0, this
      }
      view(UU) {
        return this._view = UU ?? -1, this
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
        const UU = this._type;
        if (UU && "object" === typeof UU && void 0 !== UU.array) throw new Error(wR);
        return this._stream = !0, this
      }
      priority(UU) {
        return this._streamPriority = UU, this
      }
      deprecated() {
        let UU = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
        return this._deprecated = !0, this._deprecatedThrows = UU, this
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

    function Kt(UU) {
      return null != UU && !0 === UU[IU]
    }

    function ct(UU) {
      return () => new qt(UU)
    }

    function Gt(UU) {
      if (Kt(UU)) {
        const RU = UU._type;
        throw new Error(`t.array/map/set/collection(): a t.* builder is not a valid element type \u2014 ${"string"===typeof RU?`use the type name instead: t.array("${RU}")`:'collections accept a Schema class or a primitive type name ("string", "number", \u2026)'}.`)
      }
      return UU
    }

    function jt(UU) {
      return new qt({
        quantized: XR(UU)
      })
    }
    const ut = Object.freeze({
        string: ct("string"),
        number: ct("number"),
        boolean: ct("boolean"),
        int8: ct("int8"),
        uint8: ct("uint8"),
        int16: ct("int16"),
        uint16: ct("uint16"),
        int32: ct("int32"),
        uint32: ct("uint32"),
        int64: ct("int64"),
        uint64: ct("uint64"),
        float32: ct("float32"),
        float64: ct("float64"),
        bigint64: ct("bigint64"),
        biguint64: ct("biguint64"),
        ref: UU => new qt(UU),
        array: UU => new qt({
          array: Gt(UU)
        }),
        map: UU => new qt({
          map: Gt(UU)
        }),
        set: UU => new qt({
          set: Gt(UU)
        }),
        collection: UU => new qt({
          collection: Gt(UU)
        }),
        stream: UU => {
          const RU = new qt({
            stream: Gt(UU)
          });
          return RU._stream = !0, RU
        },
        quantized: jt,
        angle: UU => jt({
          min: 0,
          max: 2 * Math.PI,
          mode: "wrap",
          bits: UU?.bits ?? 16
        })
      }),
      Ct = -1;

    function ht(UU) {
      return sR.register(UU), UU
    }

    function Qt() {
      let UU = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Ct;
      return function(RU, gU) {
        const tU = MR.initialize(RU.constructor);
        MR.setTag(tU, gU, UU)
      }
    }

    function et(UU, RU) {
      const gU = MR.initialize(UU.constructor);
      MR.setUnreliable(gU, RU)
    }

    function Wt(UU, RU) {
      const gU = MR.initialize(UU.constructor);
      MR.setPatchOnly(gU, RU)
    }

    function ft(UU, RU) {
      const gU = MR.initialize(UU.constructor);
      MR.setFullStateOnly(gU, RU)
    }

    function xt(UU, RU) {
      return function(gU, tU) {
        const pU = gU.constructor;
        if (!UU) throw new Error(`${pU.name}: @type() reference provided for "${tU}" is undefined. Make sure you don't have any circular dependencies.`);
        UU = kR(UU, `${pU.name}.${tU}`), sR.register(pU);
        const EU = Object.getPrototypeOf(pU)[Symbol.metadata],
          PU = MR.initialize(pU);
        let TU = PU[tU];
        if (void 0 !== PU[TU]) {
          if (PU[TU].deprecated) return;
          if (void 0 !== PU[TU].type) {
            const UU = new Error(`@colyseus/schema: Duplicate '${tU}' definition on '${pU.name}'.\nCheck @type() annotation`);
            throw new Error(`${UU.message} ${UU.stack.split("\n")[4].trim()}`)
          }
        } else TU = PU[bU] ?? (EU && EU[bU]) ?? -1, TU++;
        if (RU && RU.manual) MR.addField(PU, TU, tU, UU, {
          enumerable: !0,
          configurable: !0,
          writable: !0
        });
        else {
          const {
            complexTypeKlass: RU,
            childType: gU
          } = yR(UU);
          MR.addField(PU, TU, tU, UU, It(tU, TU, gU, RU))
        }
        PU[JU][tU] && Object.defineProperty(gU, tU, PU[JU][tU]), ("string" === typeof UU || vR(UU)) && (PU[nU] || Object.defineProperty(PU, nU, {
          value: [],
          enumerable: !1,
          configurable: !0,
          writable: !0
        }), PU[nU][TU] = "string" === typeof UU ? RR[UU] : SR(UU.quantized))
      }
    }
    const mt = {
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

    function It(UU, RU, gU, tU) {
      let EU;
      return EU = tU ? function(UU, RU, gU, tU) {
        const EU = tU.constructor === gt,
          PU = tU.constructor === pt;
        return function(UU) {
          const tU = this[mU],
            TU = tU[RU];
          if (UU !== TU) {
            if (void 0 !== UU && null !== UU) {
              if (!EU || UU instanceof gt)
                if (!PU || UU instanceof pt) UU[QU] = gU;
                else {
                  const RU = new pt;
                  if (RU[QU] = gU, UU instanceof Map) UU.forEach(((UU, gU) => RU.set(gU, UU)));
                  else
                    for (const gU in UU) RU.set(gU, UU[gU]);
                  UU = RU
                }
              else {
                const RU = new gt;
                RU[QU] = gU, RU.push(...UU), UU = RU
              }
              const tU = this[hU],
                KU = this.constructor;
              void 0 !== TU && null !== TU && TU[hU] ? (tU.root?.remove(TU[hU]), KU[qU](tU, RU, pU.DELETE_AND_ADD)) : KU[qU](tU, RU, pU.ADD), UU[hU]?.setParent(this, tU.root, RU)
            } else void 0 !== TU && null !== TU && this[hU].delete(RU);
            tU[RU] = UU
          }
        }
      }(0, RU, gU, tU) : "string" === typeof gU ? function(UU, RU, gU) {
        const tU = mt[gU],
          EU = "string" === gU,
          PU = "boolean" === gU;
        return function(gU) {
          const TU = this[mU],
            KU = TU[RU];
          if (gU !== KU) {
            if (void 0 !== gU && null !== gU) {
              if (!PU && void 0 !== tU && typeof gU !== tU && (!EU || null !== gU)) {
                const RU = gU && gU.constructor ? ` (${gU.constructor.name})` : "";
                throw new lg(`a '${tU}' was expected, but '${JSON.stringify(gU)}'${RU} was provided in ${this.constructor.name}#${UU}`)
              }
              this.constructor[qU](this[hU], RU, pU.ADD)
            } else void 0 !== KU && null !== KU && this[hU].delete(RU);
            TU[RU] = gU
          }
        }
      }(UU, RU, gU) : vR(gU) ? function(UU, RU, gU) {
        return function(tU) {
          const EU = this[mU],
            PU = EU[RU];
          if (void 0 !== tU && null !== tU) {
            if ("number" !== typeof tU) throw new lg(`a 'number' was expected, but '${JSON.stringify(tU)}' was provided in ${this.constructor.name}#${UU}`);
            if ((tU = HR(gU, dR(gU, tU))) === PU) return;
            this.constructor[qU](this[hU], RU, pU.ADD)
          } else {
            if (tU === PU) return;
            void 0 !== PU && null !== PU && this[hU].delete(RU)
          }
          EU[RU] = tU
        }
      }(UU, RU, gU.quantized) : function(UU, RU, gU) {
        return function(tU) {
          const EU = this[mU],
            PU = EU[RU];
          if (tU !== PU) {
            if (void 0 !== tU && null !== tU) {
              Og(tU, gU, this, UU);
              const EU = this[hU],
                TU = this.constructor;
              void 0 !== PU && null !== PU && PU[hU] ? (EU.root?.remove(PU[hU]), TU[qU](EU, RU, pU.DELETE_AND_ADD)) : TU[qU](EU, RU, pU.ADD), tU[hU]?.setParent(this, EU.root, RU)
            } else void 0 !== PU && null !== PU && this[hU].delete(RU);
            EU[RU] = tU
          }
        }
      }(UU, RU, gU), {
        get: function() {
          return this[mU][RU]
        },
        set: EU,
        enumerable: !0,
        configurable: !0
      }
    }

    function Jt() {
      let UU = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
      return function(RU, gU) {
        const tU = MR.initialize(RU.constructor);
        MR.setDeprecated(tU, gU), UU && (tU[JU] ??= {}, tU[JU][gU] = {
          get: function() {
            throw new Error(`${gU} is deprecated.`)
          },
          set: function(UU) {},
          enumerable: !1,
          configurable: !0
        }, Object.defineProperty(RU, gU, tU[JU][gU]))
      }
    }
    let wt = !1;

    function nt(UU, RU, gU) {
      wt || (wt = !0, console.warn("@colyseus/schema: defineTypes() is deprecated and will be removed in a future release. Use schema() with t.* field builders instead \u2192 https://docs.colyseus.io/state/schema"));
      for (let tU in RU) xt(RU[tU], gU)(UU.prototype, tU);
      return UU
    }

    function bt(UU, RU) {
      let gU = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Zt;
      if (null == UU || "object" !== typeof UU) throw new Error(`schema(): first argument must be a fields object (got ${typeof UU}).`);
      const tU = {},
        pU = {},
        EU = {},
        PU = {},
        TU = (UU, RU) => {
          if (RU.hasDefault)((UU, RU) => {
            "function" === typeof RU ? PU[UU] = RU : RU && "function" === typeof RU.clone ? PU[UU] = () => RU.clone() : EU[UU] = RU
          })(UU, RU.default);
          else if (!RU.optional) {
            const gU = function(UU) {
              if (UU && "object" === typeof UU) {
                if (void 0 !== UU.array) return () => new gt;
                if (void 0 !== UU.map) return () => new pt;
                if (void 0 !== UU.set) return () => new Pt;
                if (void 0 !== UU.collection) return () => new Et;
                if (void 0 !== UU.stream) return () => new Tt
              } else if ("function" === typeof UU && Zt.is(UU) && (!UU.prototype.initialize || 0 === UU.prototype.initialize.length)) return () => new UU
            }(RU.type);
            gU && (PU[UU] = gU)
          }
        },
        qU = {},
        KU = [],
        cU = [],
        GU = {},
        jU = [],
        uU = [],
        CU = {},
        hU = [];
      for (const mU in UU) {
        const gU = UU[mU],
          EU = `schema(${RU?`'${RU}'`:""}): field '${mU}'`;
        if (Kt(gU)) {
          const UU = gU.toDefinition();
          if (UU.noSync) {
            if (void 0 !== UU.view || UU.unreliable || UU.patchOnly || UU.fullStateOnly || UU.stream) throw new Error(`${EU} uses .noSync() together with a sync-only modifier (.view/.unreliable/.patchOnly/.fullStateOnly/.stream). A local-only field cannot be synchronized.`);
            TU(mU, UU);
            continue
          }
          if (UU.patchOnly && UU.fullStateOnly) throw new Error(`${EU} uses .patchOnly() together with .fullStateOnly(). Those are the only two delivery channels, so the field would never reach a client \u2014 use .noSync() if that is intended.`);
          const RU = kR(UU.type, EU);
          if ("function" === typeof RU && !Zt.is(RU)) throw new Error(`${EU} is a synced ref to non-Schema class '${RU.name||"(anonymous)"}' \u2014 use .noSync(), or Metadata.setFields().`);
          tU[mU] = RU, void 0 !== UU.view && (qU[mU] = UU.view), UU.unreliable && KU.push(mU), UU.patchOnly && cU.push(mU), UU.deprecated && (GU[mU] = UU.deprecatedThrows), UU.fullStateOnly && jU.push(mU), UU.stream && uU.push(mU), void 0 !== UU.streamPriority && (CU[mU] = UU.streamPriority), UU.optional && hU.push(mU), TU(mU, UU)
        } else {
          if ("function" !== typeof gU) throw new Error(`${EU} must be a t.* builder, Schema subclass, or method (got ${typeof gU}).`);
          Zt.is(gU) ? (tU[mU] = gU, gU.prototype.initialize && 0 !== gU.prototype.initialize.length || (PU[mU] = () => new gU)) : pU[mU] = gU
        }
      }
      const QU = UU => {
          for (const RU in EU) UU[RU] = EU[RU];
          for (const RU in PU) UU[RU] = PU[RU]()
        },
        eU = () => {
          const UU = {};
          return QU(UU), UU
        },
        WU = "function" === typeof pU.initialize,
        fU = pU.initialize ?? gU._initialize,
        xU = class extends gU {
          constructor() {
            for (var UU = arguments.length, RU = new Array(UU), gU = 0; gU < UU; gU++) RU[gU] = arguments[gU];
            const pU = RU[0];
            void 0 === pU ? (super(), QU(this)) : super(Object.assign(eU(), WU ? (UU => {
              const RU = Object.keys(tU),
                gU = {};
              for (const tU in UU) RU.includes(tU) || (gU[tU] = UU[tU]);
              return gU
            })(pU) : pU)), fU && new.target === xU && fU.apply(this, RU)
          }
        };
      RU && Object.defineProperty(xU, "name", {
        value: RU
      }), MR.setFields(xU, tU), xU._getDefaultValues = eU, xU._initialize = fU, Object.assign(xU.prototype, pU);
      for (const mU in qU) Qt(qU[mU])(xU.prototype, mU);
      for (const mU of KU) et(xU.prototype, mU);
      for (const mU of cU) Wt(xU.prototype, mU);
      for (const mU in GU) Jt(GU[mU])(xU.prototype, mU);
      if (jU.length > 0 || uU.length > 0) {
        const UU = xU[Symbol.metadata];
        for (const RU of jU) MR.setFullStateOnly(UU, RU);
        for (const RU of uU) MR.setStream(UU, RU);
        for (const RU in CU) MR.setStreamPriority(UU, RU, CU[RU])
      }
      if (hU.length > 0) {
        const UU = xU[Symbol.metadata];
        for (const RU of hU) UU[UU[RU]].optional = !0
      }
      return xU.extend = (UU, RU) => bt(UU, RU, xU), xU
    }

    function ot(UU) {
      const RU = UU[hU].root,
        gU = {
          ops: {},
          refs: []
        };
      let tU = RU.changes.next;
      for (; tU;) {
        const UU = tU.changeTree;
        void 0 !== UU ? (gU.refs.push(`refId#${UU.ref[TU]}`), UU.forEach(((UU, RU) => {
          if (UU < 0 || !RU) return;
          const tU = pU[RU];
          gU.ops[tU] || (gU.ops[tU] = 0), gU.ops[tU]++
        })), tU = tU.next) : tU = tU.next
      }
      return gU
    }
    class Zt {
      static[KU] = rg;
      static[cU] = Dg;
      [TU];
      [mU];
      static initialize(UU) {
        Object.defineProperty(UU, hU, {
          value: new ag(UU),
          enumerable: !1,
          writable: !0
        }), UU[mU] = []
      }
      static initializeForDecoder() {
        const UU = Object.create(this.prototype);
        return Bg(UU), UU[mU] = [], UU
      }
      static reset(UU) {
        const RU = UU?.[hU];
        if (void 0 === RU || "function" !== typeof RU.recycle) throw new Error("@colyseus/schema: Schema.reset() requires a tracked (encoder-side) instance.");
        if (void 0 !== RU.extraParents) throw new Error(`@colyseus/schema: cannot reset a shared instance (${UU.constructor.name}) with multiple parents.`);
        UU[fU]()
      } [fU]() {
        const UU = this.constructor[Symbol.metadata],
          RU = UU?.[oU] ?? [],
          gU = this[mU];
        for (let tU = 0; tU < RU.length; tU++) {
          const UU = gU[RU[tU]];
          UU?.[fU]?.()
        }
        this[hU].recycle(), this[TU] = void 0
      }
      static is(UU) {
        const RU = UU[Symbol.metadata];
        return "object" === typeof RU && null !== RU
      }
      static isSchema(UU) {
        return "function" === typeof UU?.assign
      }
      static[qU](UU, RU) {
        let gU = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : pU.ADD;
        UU.change(RU, gU)
      }
      static[GU](UU, RU, gU) {
        const tU = UU.constructor[Symbol.metadata],
          pU = tU[RU]?.tag;
        return void 0 === gU ? void 0 === pU : void 0 === pU || (pU === Ct ? gU.isChangeTreeVisible(UU[hU]) : gU.hasTagOnTree(UU[hU], pU))
      }
      constructor(UU) {
        Zt.initialize(this), UU && Zt.assignProps(this, UU)
      }
      assign(UU) {
        return Zt.assignProps(this, UU), this
      }
      static assignProps(UU, RU) {
        const gU = UU.constructor[Symbol.metadata];
        if (gU && void 0 !== gU[bU])
          for (let pU = 0; pU <= gU[bU]; pU++) {
            const tU = gU[pU];
            if (!tU) continue;
            const EU = RU[tU.name];
            void 0 !== EU && (UU[tU.name] = EU)
          }
        const tU = Object.keys(RU);
        for (let pU = 0; pU < tU.length; pU++) {
          const EU = tU[pU];
          gU && void 0 !== gU[EU] || (UU[EU] = RU[EU])
        }
      }
      restore(UU) {
        const RU = this.constructor[Symbol.metadata];
        for (const gU in RU) {
          const tU = RU[gU],
            pU = tU.name,
            EU = tU.type,
            PU = UU[pU];
          if (void 0 !== PU && null !== PU)
            if ("string" === typeof EU) this[pU] = PU;
            else if (Zt.is(EU)) {
            const UU = new EU;
            UU.restore(PU), this[pU] = UU
          } else if ("object" === typeof EU) {
            const UU = Object.keys(EU)[0],
              RU = EU[UU];
            if ("map" === UU) {
              const UU = this[pU];
              for (const gU in PU)
                if (Zt.is(RU)) {
                  const tU = new RU;
                  tU.restore(PU[gU]), UU.set(gU, tU)
                } else UU.set(gU, PU[gU])
            } else if ("array" === UU) {
              const UU = this[pU];
              for (let gU = 0; gU < PU.length; gU++)
                if (Zt.is(RU)) {
                  const tU = new RU;
                  tU.restore(PU[gU]), UU.push(tU)
                } else UU.push(PU[gU])
            }
          }
        }
        return this
      }
      setDirty(UU, RU) {
        const gU = this.constructor[Symbol.metadata];
        this[hU].change(gU[gU[UU]].index, RU)
      }
      pauseTracking() {
        this[hU].pause()
      }
      resumeTracking() {
        this[hU].resume()
      }
      untracked(UU) {
        return this[hU].untracked(UU)
      }
      get isTrackingPaused() {
        return this[hU].paused
      }
      clone() {
        const UU = Object.create(this.constructor.prototype);
        Zt.initialize(UU);
        const RU = this.constructor[Symbol.metadata];
        for (const gU in RU) {
          const tU = RU[gU].name;
          "object" === typeof this[tU] && "function" === typeof this[tU]?.clone ? UU[tU] = this[tU].clone() : UU[tU] = this[tU]
        }
        return UU
      }
      toJSON() {
        const UU = {},
          RU = this.constructor[Symbol.metadata];
        for (const gU in RU) {
          const tU = RU[gU],
            pU = tU.name;
          tU.deprecated || null === this[pU] || "undefined" === typeof this[pU] || (UU[pU] = "function" === typeof this[pU].toJSON ? this[pU].toJSON() : this[pU])
        }
        return UU
      }
      discardAllChanges() {
        this[hU].discardAll()
      } [jU](UU) {
        return this[this.constructor[Symbol.metadata][UU].name]
      } [uU](UU) {
        this[this.constructor[Symbol.metadata][UU].name] = void 0
      }
      static debugRefIds(UU) {
        let RU = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          gU = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          tU = arguments.length > 3 ? arguments[3] : void 0,
          pU = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "";
        const EU = RU ? ` - ${JSON.stringify(UU.toJSON())}` : "",
          PU = UU[hU],
          qU = UU[TU],
          KU = tU ? tU.root.refCount[qU] : PU.refCount,
          cU = KU > 1 ? ` [\xd7${KU}]` : "";
        let GU = `${function(UU){return new Array(UU).fill(0).map(((RU,gU)=>gU===UU-1?"\u2514\u2500 ":"   ")).join("")}(gU)}${pU}${UU.constructor.name} (refId: ${qU})${cU}${EU}\n`;
        return PU.forEachChild(((pU, EU) => {
          let PU = EU;
          "number" === typeof EU && UU.$indexes && (PU = UU.$indexes.get(EU) ?? EU);
          const TU = void 0 !== UU.forEach && void 0 !== PU ? `["${PU}"]: ` : "";
          GU += this.debugRefIds(pU.ref, RU, gU + 1, tU, TU)
        })), GU
      }
      static debugRefIdEncodingOrder(UU) {
        let RU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "allChanges";
        const gU = [],
          tU = UU[hU];
        if ("changes" === RU) {
          let UU = tU.root.changes?.next;
          for (; UU;) UU.changeTree && gU.push(UU.changeTree.ref[TU]), UU = UU.next;
          return gU
        }
        const pU = "allFilteredChanges" === RU,
          EU = new Set,
          PU = UU => {
            EU.has(UU) || (EU.add(UU), UU.isFiltered === pU && gU.push(UU.ref[TU]), UU.forEachChild(((UU, RU) => PU(UU))))
          };
        return PU(tU), gU
      }
      static debugRefIdsFromDecoder(UU) {
        return this.debugRefIds(UU.state, !1, 0, UU)
      }
      static debugChanges(UU) {
        let RU = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        const gU = UU[hU],
          tU = RU ? "allChanges" : "changes";
        let EU = `${UU.constructor.name} (${UU[TU]}) -> .${tU}:\n`;
        return RU ? gU.forEachLive((UU => {
          EU += `- [${UU}]: ADD (${JSON.stringify(gU.getValue(Number(UU),!0))})\n`
        })) : gU.forEach(((UU, RU) => {
          UU < 0 || !RU || (EU += `- [${UU}]: ${pU[RU]} (${JSON.stringify(gU.getValue(Number(UU),!1))})\n`)
        })), EU
      }
    }
    EU(Zt);
    const Yt = {
      value: 0,
      enumerable: !1,
      writable: !0
    };
    class Bt {
      types;
      nextUniqueId = 0;
      changeTrees = {};
      get refCount() {
        const UU = {};
        for (const RU in this.changeTrees) UU[RU] = this.changeTrees[RU].refCount;
        return UU
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
      enqueueFilterRefresh(UU) {
        this.types.hasFilters && (UU.flags & og || (UU.flags |= og, this.pendingFilterRefresh.push(UU)))
      }
      _nodePool = [];
      _nextViewId = 0;
      _freeViewIds = [];
      acquireViewId() {
        return this._freeViewIds.length > 0 ? this._freeViewIds.pop() : this._nextViewId++
      }
      releaseViewId(UU) {
        this._freeViewIds.push(UU)
      }
      activeViews = new Map;
      streamTrees = new Set;
      registerView(UU) {
        this.activeViews.set(UU.id, new WeakRef(UU))
      }
      unregisterView(UU) {
        this.activeViews.delete(UU.id);
        const RU = UU.id;
        for (const gU of this.streamTrees) gU._dropView(RU)
      }
      forEachActiveView(UU) {
        for (const [RU, gU] of this.activeViews) {
          const tU = gU.deref();
          if (void 0 !== tU) UU(tU);
          else {
            this.activeViews.delete(RU);
            for (const UU of this.streamTrees) UU._dropView(RU)
          }
        }
      }
      registerStream(UU) {
        this.streamTrees.add(UU)
      }
      unregisterStream(UU) {
        this.streamTrees.delete(UU)
      }
      constructor(UU) {
        let RU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        this.types = UU, this.nextUniqueId = RU
      }
      add(UU) {
        const RU = UU.ref;
        void 0 === RU[TU] && (Yt.value = this.nextUniqueId++, Object.defineProperty(RU, TU, Yt));
        const gU = RU[TU],
          tU = void 0 === this.changeTrees[gU];
        tU && (this.changeTrees[gU] = UU), UU.needsRestage && (UU.needsRestage = !1, UU.forEachLiveWithCtx(UU, gg));
        const pU = tU ? 0 : UU.refCount;
        return UU.refCount = pU + 1, pU > 0 && this.enqueueFilterRefresh(UU), tU
      }
      remove(UU) {
        const RU = UU.refCount - 1;
        if (RU <= 0) {
          if (UU.root = void 0, delete this.changeTrees[UU.ref[TU]], UU.isStreamCollection) {
            const RU = UU.ref;
            RU._unregister?.(), this.unregisterStream(RU)
          }
          this.removeFromQueue(UU), this.removeFromUnreliableQueue(UU), UU.refCount = 0, UU.needsRestage = !0, UU.forEachChild(((RU, gU) => {
            RU.removeParent(UU.ref) && (void 0 === RU.parentRef || RU.refCount > 0 ? this.remove(RU) : this.moveNextToParent(RU))
          }))
        } else UU.refCount = RU, this.enqueueFilterRefresh(UU), this.recursivelyMoveNextToParent(UU);
        return RU
      }
      recursivelyMoveNextToParent(UU) {
        this.moveNextToParent(UU), UU.forEachChild(((UU, RU) => this.recursivelyMoveNextToParent(UU)))
      }
      moveNextToParent(UU) {
        UU.changesNode && this._moveNextToParentInList(this.changes, UU, UU.changesNode, "changesNode"), UU.unreliableChangesNode && this._moveNextToParentInList(this.unreliableChanges, UU, UU.unreliableChangesNode, "unreliableChangesNode")
      }
      _moveNextToParentInList(UU, RU, gU, tU) {
        const pU = RU.parent;
        if (!pU || !pU[hU]) return;
        const EU = pU[hU][tU];
        EU && EU !== gU && (gU.position > EU.position || (gU.prev ? gU.prev.next = gU.next : UU.next = gU.next, gU.next ? gU.next.prev = gU.prev : UU.tail = gU.prev, gU.prev = UU.tail, gU.next = void 0, UU.tail.next = gU, UU.tail = gU, gU.position = UU.nextPosition++))
      }
      enqueueChangeTree(UU) {
        (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : UU.changesNode) || (UU.changesNode = this._appendToList(this.changes, UU))
      }
      enqueueUnreliable(UU) {
        (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : UU.unreliableChangesNode) || (UU.unreliableChangesNode = this._appendToList(this.unreliableChanges, UU))
      }
      _appendToList(UU, RU) {
        const gU = this._nodePool;
        let tU;
        return gU.length > 0 ? (tU = gU.pop(), tU.changeTree = RU, tU.next = void 0, tU.prev = void 0) : tU = {
          changeTree: RU,
          next: void 0,
          prev: void 0,
          position: 0
        }, UU.next ? (tU.prev = UU.tail, UU.tail.next = tU, UU.tail = tU) : (UU.nextPosition = 0, UU.next = tU, UU.tail = tU), tU.position = UU.nextPosition++, tU
      }
      releaseNode(UU) {
        UU.changeTree = void 0, UU.prev = void 0, UU.next = void 0, this._nodePool.push(UU)
      }
      removeFromQueue(UU) {
        return this._removeNode(this.changes, UU, UU.changesNode, "changesNode")
      }
      removeFromUnreliableQueue(UU) {
        return this._removeNode(this.unreliableChanges, UU, UU.unreliableChangesNode, "unreliableChangesNode")
      }
      _removeNode(UU, RU, gU, tU) {
        return !(!gU || gU.changeTree !== RU) && (gU.prev ? gU.prev.next = gU.next : UU.next = gU.next, gU.next ? gU.next.prev = gU.prev : UU.tail = gU.prev, RU[tU] = void 0, this.releaseNode(gU), !0)
      }
    }

    function Vt(UU, RU) {
      if (-1 === RU || RU >= UU.length) return !1;
      const gU = UU.length - 1;
      for (let tU = RU; tU < gU; tU++) UU[tU] = UU[tU + 1];
      return UU.length = gU, !0
    }

    function rt(UU, RU, gU) {
      const tU = ~gU,
        pU = UU.changeTrees;
      for (const EU in pU) {
        const UU = pU[EU],
          gU = UU.visibleViews;
        void 0 !== gU && RU < gU.length && (gU[RU] &= tU);
        const PU = UU.subscribedViews;
        void 0 !== PU && RU < PU.length && (PU[RU] &= tU);
        const TU = UU.tagViews;
        void 0 !== TU && TU.forEach((UU => {
          RU < UU.length && (UU[RU] &= tU)
        }))
      }
    }
    const Xt = new FinalizationRegistry((UU => {
      let {
        root: RU,
        id: gU,
        slot: tU,
        bit: pU
      } = UU;
      rt(RU, tU, pU), RU.activeViews.delete(gU);
      for (const EU of RU.streamTrees) EU._dropView(gU);
      RU.releaseViewId(gU)
    }));

    function vt(UU) {
      if (void 0 === UU) return "undefined";
      if (null === UU) return "null";
      const RU = typeof UU;
      return "string" === RU ? JSON.stringify(UU.length > 30 ? `${UU.slice(0,30)}\u2026` : UU) : "object" !== RU && "function" !== RU ? `${RU} ${String(UU)}` : Array.isArray(UU) ? `Array(${UU.length})` : UU.constructor?.name ?? "Object"
    }
    class dt {
      iterable;
      items;
      id = -1;
      _root;
      _slot = 0;
      _bit = 0;
      changes = new Map;
      constructor() {
        let UU = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        this.iterable = UU, UU && (this.items = [])
      }
      _bindRoot(UU) {
        void 0 === this._root && (this._root = UU, this.id = UU.acquireViewId(), this._slot = this.id >> 5, this._bit = 1 << (31 & this.id), UU.registerView(this), Xt.register(this, {
          root: UU,
          id: this.id,
          slot: this._slot,
          bit: this._bit
        }, this))
      }
      dispose() {
        void 0 !== this._root && (this._root.unregisterView(this), rt(this._root, this._slot, this._bit), this._root.releaseViewId(this.id), Xt.unregister(this), this._root = void 0, this.id = -1)
      }
      isVisible(UU) {
        const RU = UU.visibleViews,
          gU = this._slot;
        return void 0 !== RU && gU < RU.length && 0 !== (RU[gU] & this._bit)
      }
      markVisible(UU) {
        const RU = this._slot;
        let gU = UU.visibleViews;
        for (void 0 === gU && (gU = UU.visibleViews = []); gU.length <= RU;) gU.push(0);
        gU[RU] |= this._bit
      }
      unmarkVisible(UU) {
        const RU = UU.visibleViews;
        if (void 0 === RU) return;
        const gU = this._slot;
        gU < RU.length && (RU[gU] &= ~this._bit)
      }
      isSubscribed(UU) {
        const RU = UU.subscribedViews,
          gU = this._slot;
        return void 0 !== RU && gU < RU.length && 0 !== (RU[gU] & this._bit)
      }
      _setSubscribed(UU) {
        const RU = this._slot;
        let gU = UU.subscribedViews;
        for (void 0 === gU && (gU = UU.subscribedViews = []); gU.length <= RU;) gU.push(0);
        gU[RU] |= this._bit
      }
      _clearSubscribed(UU) {
        const RU = UU.subscribedViews;
        if (void 0 === RU) return;
        const gU = this._slot;
        gU < RU.length && (RU[gU] &= ~this._bit)
      }
      hasTagOnTree(UU, RU) {
        const gU = UU.tagViews;
        if (void 0 === gU) return !1;
        const tU = this._slot,
          pU = this._bit;
        for (let EU = RU; 0 !== EU; EU &= EU - 1) {
          const UU = gU.get(EU & -EU);
          if (void 0 !== UU && tU < UU.length && 0 !== (UU[tU] & pU)) return !0
        }
        return !1
      }
      addTag(UU, RU) {
        if (RU === Ct) return;
        let gU = UU.tagViews;
        void 0 === gU && (gU = UU.tagViews = new Map);
        const tU = this._slot,
          pU = this._bit;
        for (let EU = RU; EU > 0; EU &= EU - 1) {
          const UU = EU & -EU;
          let RU = gU.get(UU);
          for (void 0 === RU && (RU = [], gU.set(UU, RU)); RU.length <= tU;) RU.push(0);
          RU[tU] |= pU
        }
      }
      removeTag(UU, RU) {
        if (RU === Ct) return;
        const gU = UU.tagViews;
        if (void 0 === gU) return;
        const tU = this._slot,
          pU = ~this._bit;
        for (let EU = RU; EU > 0; EU &= EU - 1) {
          const UU = gU.get(EU & -EU);
          void 0 !== UU && tU < UU.length && (UU[tU] &= pU)
        }
      }
      removeAllTagsOnTree(UU) {
        const RU = UU.tagViews;
        if (void 0 === RU) return;
        const gU = this._slot,
          tU = ~this._bit;
        RU.forEach((UU => {
          gU < UU.length && (UU[gU] &= tU)
        }))
      }
      add(UU) {
        let RU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Ct,
          gU = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        return this._add(UU, RU, gU, !1)
      }
      _addImmediate(UU) {
        let RU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Ct;
        this._add(UU, RU, !0, !0)
      }
      _add(UU, RU, gU, tU) {
        const EU = UU?.[hU];
        if (!EU) return console.warn(`StateView#add(): expected a Schema instance or collection, received ${vt(UU)}`), !1;
        const PU = EU.parent;
        if (!PU && 0 !== UU[TU]) throw new Error(`Cannot add a detached instance to the StateView. Make sure to assign the "${EU.ref.constructor.name}" instance to the state before calling view.add()`);
        void 0 === this._root && void 0 !== EU.root && this._bindRoot(EU.root);
        const qU = PU?.[hU];
        if (!tU && qU?.isStreamCollection) return BR(PU, this.id, EU.parentIndex), !0;
        const KU = UU.constructor[Symbol.metadata],
          cU = this.isVisible(EU);
        if (!this.iterable || !gU || cU && -1 !== this.items.indexOf(UU) || this.items.push(UU), this.markVisible(EU), gU && PU && this.addParentOf(EU, RU), !tU && EU.isStreamCollection) return !0;
        if (RU === Ct && EU.isNew) return this._markSubtreeVisible(EU, RU), !1;
        let GU = this.changes.get(UU[TU]);
        void 0 === GU && (GU = new Map, this.changes.set(UU[TU], GU));
        let jU = !1;
        const uU = EU.encDescriptor.tags;
        if (EU.forEachChild(((UU, gU) => {
            const tU = uU[gU];
            if (void 0 !== tU) {
              if (!(tU === Ct || RU !== Ct && 0 !== (tU & RU))) return
            }
            this.add(UU.ref, RU, !1) && (jU = !0)
          })), RU !== Ct) {
          this.addTag(EU, RU);
          const UU = KU?.[aU];
          if (void 0 !== UU)
            for (let gU = RU; gU > 0; gU &= gU - 1) UU[gU & -gU]?.forEach((UU => {
              EU.getChange(UU) !== pU.DELETE && GU.set(UU, pU.ADD)
            }))
        }
        if ((RU === Ct || !cU) && (!EU.isNew || jU))
          if (EU.isArray && "string" !== typeof EU.refTarget[QU]) EU.refTarget.items.length > 0 && (GU.set(-1, pU.ADD), jU = !0);
          else {
            const UU = EU.encDescriptor.tags;
            EU.forEachLive((gU => {
              const tU = UU[gU];
              (void 0 === tU || tU === Ct || RU !== Ct && 0 !== (tU & RU)) && (GU.set(gU, pU.ADD), jU = !0)
            }))
          } return jU
      }
      _markSubtreeVisible(UU, RU) {
        const gU = UU.encDescriptor.tags;
        UU.forEachChild(((UU, tU) => {
          const pU = gU[tU];
          if (void 0 !== pU) {
            if (!(pU === Ct || RU !== Ct && 0 !== (pU & RU))) return
          }
          UU.isNew ? (this.markVisible(UU), this._markSubtreeVisible(UU, RU)) : this._add(UU.ref, RU, !1, !1)
        }))
      }
      addParentOf(UU, RU) {
        const gU = UU.parent[hU],
          tU = UU.parentIndex;
        this.isVisible(gU) || this.markVisible(gU);
        const EU = gU.parent?.[hU];
        if (EU && this.addParentOf(gU, RU), gU.hasFilteredFields && gU.getChange(tU) !== pU.DELETE) {
          let EU = this.changes.get(gU.ref[TU]);
          void 0 === EU && (EU = new Map, this.changes.set(gU.ref[TU], EU));
          const PU = gU.encDescriptor.tags[tU];
          void 0 !== PU && PU !== Ct && 0 !== (PU & RU) && this.addTag(gU, RU), EU.set(gU.isArray ? UU : tU, pU.ADD)
        }
      }
      _touchAncestorsOf(UU) {
        let RU = UU.parent?.[hU];
        if (void 0 === RU) return;
        const gU = [];
        for (; void 0 !== RU;) {
          if (RU.hasFilteredFields) {
            const UU = RU.ref[TU];
            if (this.changes.has(UU)) break;
            gU.push(RU)
          }
          RU = RU.parent?.[hU]
        }
        for (let tU = gU.length - 1; tU >= 0; tU--) this.changes.set(gU[tU].ref[TU], new Map)
      }
      remove(UU) {
        let RU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Ct,
          gU = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        const tU = UU?.[hU];
        if (!tU) return console.warn(`StateView#remove(): expected a Schema instance or collection, received ${vt(UU)}`), this;
        const EU = tU.parent?.[hU];
        if (EU?.isStreamCollection) return this.unmarkVisible(tU), this.iterable && !gU && Vt(this.items, this.items.indexOf(UU)),
          function(UU, RU, gU, tU, EU) {
            const PU = UU._stream;
            if (void 0 === PU) return !1;
            const TU = PU.pendingByView.get(RU);
            if (TU?.has(tU)) return TU.delete(tU), !1;
            const qU = PU.sentByView.get(RU);
            if (qU?.has(tU)) {
              qU.delete(tU);
              let UU = EU.get(gU);
              return void 0 === UU && (UU = new Map, EU.set(gU, UU)), UU.set(tU, pU.DELETE), !0
            }
          }(tU.parent, this.id, tU.parent[TU], tU.parentIndex, this.changes), this._recursiveDeleteVisibleChangeTree(tU), this;
        if (tU.isStreamCollection) {
          this.unmarkVisible(tU), this.iterable && !gU && Vt(this.items, this.items.indexOf(UU));
          const RU = tU.ref,
            EU = RU._stream;
          if (void 0 !== EU) {
            EU.pendingByView.get(this.id)?.clear();
            const UU = EU.sentByView.get(this.id);
            if (void 0 !== UU && UU.size > 0) {
              const gU = RU[TU];
              let tU = this.changes.get(gU);
              void 0 === tU && (tU = new Map, this.changes.set(gU, tU));
              for (const RU of UU) tU.set(RU, pU.DELETE);
              UU.clear()
            }
          }
          return this
        }
        this.unmarkVisible(tU), this.iterable && !gU && Vt(this.items, this.items.indexOf(UU));
        const PU = tU.ref,
          qU = PU.constructor[Symbol.metadata],
          KU = PU[TU];
        this._touchAncestorsOf(tU);
        let cU = this.changes.get(KU);
        if (void 0 === cU && (cU = new Map, this.changes.set(KU, cU)), RU === Ct) {
          const UU = tU.parent;
          if (UU && !MR.isValidInstance(UU) && tU.isFiltered) {
            const RU = EU.isArray ? tU : tU.parentIndex,
              gU = UU[TU];
            let PU = this.changes.get(gU);
            void 0 === PU ? (PU = new Map, this.changes.set(gU, PU)) : PU.get(RU) === pU.ADD && this._dropPendingEntries(tU), PU.set(RU, pU.DELETE), this._recursiveDeleteVisibleChangeTree(tU)
          } else qU?.[ZU]?.forEach((UU => this._removeViewField(tU, cU, UU)))
        } else {
          const UU = qU?.[aU];
          if (void 0 !== UU)
            for (let gU = RU; gU > 0; gU &= gU - 1) UU[gU & -gU]?.forEach((UU => this._removeViewField(tU, cU, UU)))
        }
        return void 0 === RU ? this.removeAllTagsOnTree(tU) : this.removeTag(tU, RU), this
      }
      has(UU) {
        return this.isVisible(UU[hU])
      }
      hasTag(UU) {
        let RU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Ct;
        return this.hasTagOnTree(UU[hU], RU)
      }
      subscribe(UU, RU) {
        const gU = UU?.[hU];
        if (!gU) return console.warn(`StateView#subscribe(): expected a Schema collection, received ${vt(UU)}`), this;
        if (void 0 === this._root && void 0 !== gU.root && this._bindRoot(gU.root), void 0 !== RU)
          if (gU.isStreamCollection) {
            const gU = bR(UU);
            null === RU ? gU.priorityByView?.delete(this.id) : (gU.priorityByView ??= new Map).set(this.id, RU)
          } else {
            const RU = UU?.constructor?.name ?? "collection",
              tU = gU.parent;
            if (void 0 === tU) console.warn(`StateView#subscribe(): \`priority\` ignored \u2014 this ${RU} is not attached to a state yet, so it cannot be identified as a stream. Subscribe after assigning it to the state.`);
            else {
              const UU = tU?.constructor?.[Symbol.metadata]?.[gU.parentIndex]?.name,
                pU = UU ? `${tU.constructor.name}#${UU}` : RU;
              console.warn(`StateView#subscribe(): \`priority\` ignored \u2014 ${pU} is a ${RU}, not a streaming collection. Declare the field with .stream() (e.g. t.map(X).stream()) or use t.stream(X) to enable priority batching.`)
            }
          } if (this.isSubscribed(gU)) return this;
        const tU = void 0 !== gU.parent && !this.isVisible(gU);
        if (tU ? (this.addParentOf(gU, Ct), this._add(UU, Ct, !1, !1)) : this.markVisible(gU), this._setSubscribed(gU), gU.isStreamCollection) {
          const RU = UU;
          gU.forEachChild(((UU, gU) => {
            BR(RU, this.id, gU)
          }))
        } else tU || gU.forEachChild((UU => {
          this.markVisible(UU)
        }));
        return this
      }
      unsubscribe(UU) {
        const RU = UU?.[hU];
        if (!RU) return console.warn(`StateView#unsubscribe(): expected a Schema collection, received ${vt(UU)}`), this;
        if (!this.isSubscribed(RU)) return this;
        this._clearSubscribed(RU);
        const gU = RU.ref[TU];
        if (RU.isStreamCollection) {
          const RU = UU._stream;
          if (void 0 !== RU) {
            RU.pendingByView.get(this.id)?.clear();
            const UU = RU.sentByView.get(this.id);
            if (void 0 !== UU && UU.size > 0) {
              let RU = this.changes.get(gU);
              void 0 === RU && (RU = new Map, this.changes.set(gU, RU));
              for (const gU of UU) RU.set(gU, pU.DELETE);
              UU.clear()
            }
          }
        } else {
          const UU = RU.isArray;
          let tU = this.changes.get(gU);
          RU.forEachChild(((RU, EU) => {
            void 0 === tU && (tU = new Map, this.changes.set(gU, tU)), tU.set(UU ? RU : EU, pU.DELETE), this.unmarkVisible(RU)
          }))
        }
        return this.unmarkVisible(RU), this
      }
      clear() {
        if (!this.iterable) throw new Error("StateView#clear() is only available for iterable StateView's. Use StateView(iterable: true) constructor.");
        for (let UU = 0, RU = this.items.length; UU < RU; UU++) this.remove(this.items[UU], Ct, !0);
        this.items.length = 0
      }
      isChangeTreeVisible(UU) {
        let RU = this.isVisible(UU);
        if (!RU && UU.isVisibilitySharedWithParent)
          if (this.isVisible(UU.parent[hU])) this.markVisible(UU), RU = !0;
          else
            for (let gU = UU.extraParents; void 0 !== gU; gU = gU.next) {
              const tU = gU.ref[hU];
              if (tU.isFiltered && this.isVisible(tU)) {
                this.markVisible(UU), RU = !0;
                break
              }
            }
        return RU
      }
      _recursiveDeleteVisibleChangeTree(UU) {
        UU.forEachChild((UU => {
          this.unmarkVisible(UU), this._recursiveDeleteVisibleChangeTree(UU)
        }))
      }
      _dropPendingEntries(UU) {
        this.changes.delete(UU.ref[TU]), UU.forEachChild((UU => this._dropPendingEntries(UU)))
      }
      _removeViewField(UU, RU, gU) {
        const tU = RU.get(gU) === pU.ADD;
        RU.set(gU, pU.DELETE);
        const EU = UU.ref[UU.encDescriptor.names[gU]],
          PU = EU?.[hU];
        PU && (this.unmarkVisible(PU), this._recursiveDeleteVisibleChangeTree(PU), tU && this._dropPendingEntries(PU))
      }
    }

    function Ht(UU) {
      UU.structSwitchEmitted || (UU.shouldEmitSwitch && (UU.buffer[UU.it.offset++] = 255, RR.number(UU.buffer, UU.ref[TU], UU.it)), UU.structSwitchEmitted = !0)
    }

    function St(UU, RU) {
      kt(UU, RU, pU.ADD)
    }

    function st(UU, RU) {
      if (RU._fullSyncGen === UU.gen) return;
      RU._fullSyncGen = UU.gen;
      if (!UU.hasView || UU.view.isChangeTreeVisible(RU)) {
        const gU = RU.encDescriptor;
        UU.changeTree = RU, UU.ref = RU.ref, UU.encoder = gU.encoder, UU.filter = gU.filter, UU.metadata = gU.metadata, UU.treeIsFiltered = RU.isFiltered, UU.isSchema = gU.isSchema, UU.filterBitmask = gU.filterBitmask, UU.tags = gU.tags, UU.structSwitchEmitted = !1, UU.shouldEmitSwitch = UU.hasView || UU.it.offset > UU.initialOffset || RU !== UU.rootChangeTree, RU.isArray && RU.collDirty.size > 0 && (RU.flags |= 512), pg(RU, UU, St)
      }
      eg(RU, UU, yt)
    }

    function yt(UU, RU, gU) {
      st(UU, RU)
    }

    function kt(UU, RU, gU) {
      if (RU < 0) {
        if (UU.treeIsFiltered !== UU.emitFiltered) return;
        return Ht(UU), void(UU.buffer[UU.it.offset++] = 255 & Math.abs(RU))
      }
      if ((UU.isSchema ? UU.treeIsFiltered || (RU < 32 ? 0 !== (UU.filterBitmask & 1 << RU) : void 0 !== UU.tags[RU]) : UU.treeIsFiltered) !== UU.emitFiltered) return;
      const tU = UU.isEncodeAll ? pU.ADD : gU;
      void 0 !== tU && (void 0 === UU.filter || UU.filter(UU.ref, RU, UU.view)) && (Ht(UU), UU.encoder(UU.self, UU.buffer, UU.changeTree, RU, tU, UU.it, UU.isEncodeAll, UU.hasView, UU.metadata))
    }

    function Ft(UU, RU) {
      const gU = new Uint8Array(UU.length + RU.length);
      return gU.set(UU, 0), gU.set(RU, UU.length), gU
    }
    class it {
      static BUFFER_SIZE = 16384;
      sharedBuffer = new Uint8Array(it.BUFFER_SIZE);
      context;
      state;
      root;
      constructor(UU, RU) {
        this.context = sR.cache(UU.constructor), this.root = RU ?? new Bt(this.context), this.setState(UU)
      }
      setState(UU) {
        this.state = UU, this.state[hU].setRoot(this.root)
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
        let UU = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
            offset: 0
          },
          RU = arguments.length > 1 ? arguments[1] : void 0,
          gU = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : this.sharedBuffer,
          tU = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : UU.offset;
        return this._encodeChannel(UU, RU, gU, tU, !1)
      }
      encodeUnreliable() {
        let UU = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
            offset: 0
          },
          RU = arguments.length > 1 ? arguments[1] : void 0,
          gU = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : this.sharedBuffer,
          tU = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : UU.offset;
        return this._encodeChannel(UU, RU, gU, tU, !0)
      }
      _encodeChannel(UU, RU, gU, tU, pU) {
        this.root.pendingFilterRefresh.length > 0 && Pg(this.root);
        const EU = void 0 !== RU,
          PU = this.state[hU],
          TU = this._encodeCtx;
        TU.self = this, TU.buffer = gU, TU.it = UU, TU.view = RU, TU.isEncodeAll = !1, TU.hasView = EU, TU.emitFiltered = EU;
        let qU = pU ? this.root.unreliableChanges : this.root.changes;
        for (; qU = qU.next;) {
          const gU = qU.changeTree;
          if (EU && !RU.isChangeTreeVisible(gU)) continue;
          const KU = pU ? gU.unreliableRecorder : gU;
          if (!KU || !KU.has()) continue;
          const cU = gU.encDescriptor;
          TU.changeTree = gU, TU.ref = gU.ref, TU.encoder = cU.encoder, TU.filter = cU.filter, TU.metadata = cU.metadata, TU.treeIsFiltered = gU.isFiltered, TU.isSchema = cU.isSchema, TU.filterBitmask = cU.filterBitmask, TU.tags = cU.tags, TU.structSwitchEmitted = !1, TU.isRootTree = gU === PU, TU.shouldEmitSwitch = EU || UU.offset > tU || !TU.isRootTree, KU.forEachWithCtx(TU, kt)
        }
        return pU || EU || !this._isStreamBroadcastMode || this._emitStreamBroadcast(gU, UU), UU.offset > gU.byteLength ? (gU = this._resizeBuffer(gU, UU.offset), UU.offset = tU, this._encodeChannel(UU, RU, gU, tU, pU)) : gU.subarray(0, UU.offset)
      }
      encodeFullSync(UU, RU, gU, tU) {
        let pU = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : UU.offset;
        this.root.pendingFilterRefresh.length > 0 && Pg(this.root);
        const EU = void 0 !== tU,
          PU = this.state[hU],
          TU = this._encodeCtx;
        return TU.self = this, TU.buffer = RU, TU.it = UU, TU.view = tU, TU.isEncodeAll = !0, TU.hasView = EU, TU.emitFiltered = gU, TU.gen = ++this._fullSyncGen, TU.initialOffset = pU, TU.rootChangeTree = PU, st(TU, PU), UU.offset > RU.byteLength ? (RU = this._resizeBuffer(RU, UU.offset), UU.offset = pU, this.encodeFullSync(UU, RU, gU, tU, pU)) : RU.subarray(0, UU.offset)
      }
      _resizeBuffer(UU, RU) {
        const gU = Math.ceil(RU / it.BUFFER_SIZE) * it.BUFFER_SIZE,
          tU = new Uint8Array(gU);
        return tU.set(UU), UU === this.sharedBuffer && (this.sharedBuffer = tU), tU
      }
      encodeAll() {
        let UU = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
            offset: 0
          },
          RU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.sharedBuffer;
        return this.encodeFullSync(UU, RU, !1)
      }
      encodeAllView(UU, RU, gU) {
        let tU = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : this.sharedBuffer;
        const pU = gU.offset;
        return tU = this.encodeFullSync(gU, tU, !0, UU, pU), Ft(tU.subarray(0, RU), tU.subarray(pU, gU.offset))
      }
      ensureCapacity(UU, RU) {
        if (RU + it.BUFFER_SIZE <= UU.byteLength) return UU;
        const gU = Math.ceil((RU + it.BUFFER_SIZE) / it.BUFFER_SIZE) * it.BUFFER_SIZE,
          tU = new Uint8Array(gU);
        return tU.set(UU.subarray(0, RU)), UU === this.sharedBuffer && (this.sharedBuffer = tU), tU
      }
      encodeView(UU, RU, gU) {
        let tU = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : this.sharedBuffer,
          EU = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4];
        const PU = gU.offset;
        this._emitStreamPriority(UU);
        for (const qU of UU.changes.keys()) {
          const RU = UU.changes.get(qU),
            EU = this.root.changeTrees[qU];
          if (void 0 === EU) {
            UU.changes.delete(qU);
            continue
          }
          if (0 === RU.size) continue;
          const PU = EU.encDescriptor,
            KU = PU.encoder,
            cU = PU.metadata,
            GU = EU.ref,
            uU = EU.refTarget;
          tU = this.ensureCapacity(tU, gU.offset), tU[gU.offset++] = 255, RR.number(tU, GU[TU], gU);
          for (const [qU, CU] of RU) {
            let RU;
            if (-1 === qU) {
              const UU = uU.tmpItems,
                RU = uU.deletedIndexes;
              for (let PU = 0; PU < UU.length; PU++) void 0 !== UU[PU] && !0 !== RU[PU] && KU(this, tU, EU, PU, pU.ADD, gU, !1, !0, cU);
              continue
            }
            if ("number" === typeof qU) RU = qU;
            else {
              const gU = qU.indexInParent(GU);
              if (void 0 === gU) continue;
              if (RU = gU, CU === pU.ADD && EU.getChange(RU) === pU.DELETE) {
                UU.changes.delete(qU.ref[TU]);
                continue
              }
            }
            KU(this, tU, EU, RU, void 0 !== uU[jU](RU) && CU || pU.DELETE, gU, !1, !0, cU)
          }
        }
        return UU.changes.clear(), tU = this.encode(gU, UU, tU), EU ? Ft(tU.subarray(0, RU), tU.subarray(PU, gU.offset)) : tU.subarray(PU, gU.offset)
      }
      encodeUnreliableView(UU, RU, gU) {
        let tU = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : this.sharedBuffer;
        const pU = gU.offset;
        return tU = this.encodeUnreliable(gU, UU, tU, pU), Ft(tU.subarray(0, RU), tU.subarray(pU, gU.offset))
      }
      _emitStreamBroadcast(UU, RU) {
        const gU = this.root.streamTrees;
        for (const tU of gU) {
          const gU = tU,
            EU = gU[hU],
            PU = gU[TU];
          if (void 0 === PU) continue;
          const qU = gU._stream,
            KU = qU.broadcastDeletes,
            cU = qU.broadcastPending,
            GU = qU.sentBroadcast,
            uU = KU.size > 0,
            CU = cU.size > 0,
            QU = EU.encDescriptor,
            eU = QU.encoder,
            WU = QU.metadata;
          if (uU || CU) {
            if (UU[RU.offset++] = 255, RR.number(UU, PU, RU), uU) {
              for (const gU of KU) eU(this, UU, EU, gU, pU.DELETE, RU, !1, !1, WU);
              KU.clear()
            }
            const tU = qU.maxPerTick,
              CU = [];
            let QU = 0;
            const fU = [];
            for (const PU of cU) {
              if (QU >= tU) break;
              const TU = gU[jU](PU);
              void 0 !== TU ? (eU(this, UU, EU, PU, pU.ADD, RU, !1, !1, WU), GU.add(PU), CU.push(TU), fU.push(PU), QU++) : fU.push(PU)
            }
            for (const UU of fU) cU.delete(UU);
            for (const gU of CU) {
              const tU = gU[hU];
              if (void 0 === tU) continue;
              const EU = gU[TU];
              if (void 0 === EU) continue;
              UU[RU.offset++] = 255, RR.number(UU, EU, RU);
              const PU = tU.encDescriptor,
                qU = PU.encoder,
                KU = PU.metadata;
              tU.forEachLive((gU => {
                MR.hasUnreliableAtIndex(KU, gU) || qU(this, UU, tU, gU, pU.ADD, RU, !1, !1, KU)
              }))
            }
          }
          for (const tU of GU) {
            const pU = gU[jU](tU);
            if (void 0 === pU) continue;
            const EU = pU[hU];
            if (void 0 === EU || !EU.has()) continue;
            const PU = pU[TU];
            if (void 0 === PU) continue;
            UU[RU.offset++] = 255, RR.number(UU, PU, RU);
            const qU = EU.encDescriptor,
              KU = qU.encoder,
              cU = qU.metadata;
            EU.forEach(((gU, tU) => {
              gU < 0 || MR.hasUnreliableAtIndex(cU, gU) || KU(this, UU, EU, gU, tU, RU, !1, !1, cU)
            }))
          }
        }
      }
      _emitStreamPriority(UU) {
        const RU = this.root.streamTrees;
        if (0 === RU.size) return;
        const gU = UU.id;
        for (const tU of RU) {
          const RU = tU,
            EU = RU._stream,
            PU = EU.pendingByView.get(gU);
          if (void 0 === PU || 0 === PU.size) continue;
          const qU = EU.priorityByView?.get(gU),
            KU = void 0 !== qU,
            cU = EU.priority,
            GU = EU.maxPerTick,
            uU = [],
            CU = [];
          if (KU || void 0 !== cU) {
            const gU = [],
              tU = [];
            let pU = 0;
            for (const EU of PU) {
              const PU = RU[jU](EU);
              if (void 0 === PU) {
                CU.push(EU);
                continue
              }
              const TU = KU ? qU(PU) : cU(UU, PU);
              if (pU < GU) {
                let UU = pU++;
                for (; UU > 0 && tU[UU - 1] < TU;) tU[UU] = tU[UU - 1], gU[UU] = gU[UU - 1], UU--;
                tU[UU] = TU, gU[UU] = EU
              } else if (TU > tU[GU - 1]) {
                let UU = GU - 1;
                for (; UU > 0 && tU[UU - 1] < TU;) tU[UU] = tU[UU - 1], gU[UU] = gU[UU - 1], UU--;
                tU[UU] = TU, gU[UU] = EU
              }
            }
            for (let UU = 0; UU < pU; UU++) uU.push(gU[UU])
          } else
            for (const UU of PU) {
              if (uU.length >= GU) break;
              uU.push(UU)
            }
          for (const UU of CU) PU.delete(UU);
          const QU = uU.length;
          let eU = EU.sentByView.get(gU);
          void 0 === eU && (eU = new Set, EU.sentByView.set(gU, eU));
          for (let gU = 0; gU < QU; gU++) {
            const tU = uU[gU],
              EU = RU[jU](tU);
            if (void 0 === EU) {
              PU.delete(tU);
              continue
            }
            UU._addImmediate(EU);
            const qU = EU[hU];
            if (void 0 !== qU) {
              const RU = EU[TU];
              let gU = UU.changes.get(RU);
              void 0 === gU && (gU = new Map, UU.changes.set(RU, gU));
              const tU = qU.metadata;
              qU.forEachLive((UU => {
                MR.hasUnreliableAtIndex(tU, UU) || gU.set(UU, pU.ADD)
              }))
            }
            PU.delete(tU), eU.add(tU)
          }
        }
      }
      discardChanges() {
        const UU = this.root.changes;
        let RU = UU.next;
        const gU = this.root;
        for (; RU;) {
          const UU = RU.next;
          RU.changeTree.endEncode(), gU.releaseNode(RU), RU = UU
        }
        UU.next = void 0, UU.tail = void 0
      }
      discardUnreliableChanges() {
        const UU = this.root.unreliableChanges;
        let RU = UU.next;
        const gU = this.root;
        for (; RU;) {
          const UU = RU.next;
          RU.changeTree.endEncodeUnreliable(), gU.releaseNode(RU), RU = UU
        }
        UU.next = void 0, UU.tail = void 0
      }
      tryEncodeTypeId(UU, RU, gU, tU) {
        const pU = this.context.getTypeId(RU),
          EU = this.context.getTypeId(gU);
        void 0 !== EU ? pU !== EU && (UU[tU.offset++] = 213, RR.number(UU, EU, tU)) : console.warn(`@colyseus/schema WARNING: Class "${gU.name}" is not registered on TypeRegistry - Please either tag the class with @entity or define a @type() field.`)
      }
      get hasChanges() {
        return void 0 !== this.root.changes.next || this._hasStreamBacklog()
      }
      get _isStreamBroadcastMode() {
        return 0 === this.root.activeViews.size && this.root.streamTrees.size > 0
      }
      _hasStreamBacklog() {
        const UU = this.root;
        if (0 === UU.streamTrees.size) return !1;
        const RU = 0 === UU.activeViews.size;
        for (const gU of UU.streamTrees)
          if (RU ? YR(gU) : aR(gU, UU)) return !0;
        return !1
      }
      get hasUnreliableChanges() {
        return void 0 !== this.root.unreliableChanges.next
      }
    }
    class At extends Error {
      constructor(UU) {
        super(UU), this.name = "DecodingWarning"
      }
    }
    const zt = {
      value: 0,
      enumerable: !1,
      writable: !0
    };
    class Mt {
      refs = new Map;
      refCount = {};
      deletedRefs = new Set;
      callbacks = {};
      nextUniqueId = 0;
      getNextUniqueId() {
        return this.nextUniqueId++
      }
      addRef(UU, RU) {
        let gU = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        this.refs.set(UU, RU), void 0 === RU[TU] ? (zt.value = UU, Object.defineProperty(RU, TU, zt)) : RU[TU] !== UU && (RU[TU] = UU), gU && (this.refCount[UU] = (this.refCount[UU] || 0) + 1), this.deletedRefs.has(UU) && this.deletedRefs.delete(UU)
      }
      removeRef(UU) {
        const RU = this.refCount[UU];
        if (void 0 !== RU)
          if (0 !== RU)(this.refCount[UU] = RU - 1) <= 0 && this.deletedRefs.add(UU);
          else try {
            const RU = this.refs.get(UU);
            throw new At(`trying to remove refId '${UU}' with 0 refCount (${RU.constructor.name}: ${JSON.stringify(RU)})`)
          } catch (Pp) {
            console.warn(Pp)
          } else try {
            throw new At("trying to remove refId that doesn't exist: " + UU)
          } catch (Pp) {
            console.warn(Pp)
          }
      }
      clearRefs() {
        this.refs.clear(), this.deletedRefs.clear(), this.callbacks = {}, this.refCount = {}
      }
      garbageCollectDeletedRefs() {
        this.deletedRefs.forEach((UU => {
          if (this.refCount[UU] > 0) return;
          const RU = this.refs.get(UU),
            gU = RU.constructor[Symbol.metadata];
          if (null != gU)
            for (const tU in gU) {
              const UU = RU[gU[tU].name];
              if ("object" === typeof UU && UU) {
                const RU = UU[TU];
                void 0 === RU || this.deletedRefs.has(RU) || this.removeRef(RU)
              }
            } else "function" === typeof RU[QU] && Array.from(RU.values()).forEach((UU => {
              const RU = UU[TU];
              void 0 === RU || this.deletedRefs.has(RU) || this.removeRef(RU)
            }));
          this.refs.delete(UU), delete this.refCount[UU], delete this.callbacks[UU]
        })), this.deletedRefs.clear()
      }
      addCallback(UU, RU, gU) {
        if (void 0 === UU) {
          const UU = "number" === typeof RU ? pU[RU] : RU;
          throw new Error(`Can't addCallback on '${UU}' (refId is undefined)`)
        }
        return this.callbacks[UU] || (this.callbacks[UU] = {}), this.callbacks[UU][RU] || (this.callbacks[UU][RU] = []), this.callbacks[UU][RU].push(gU), () => this.removeCallback(UU, RU, gU)
      }
      removeCallback(UU, RU, gU) {
        const tU = this.callbacks?.[UU]?.[RU]?.indexOf(gU);
        void 0 !== tU && -1 !== tU && Vt(this.callbacks[UU][RU], tU)
      }
    }
    class Dt {
      context;
      state;
      root;
      currentRefId = 0;
      uZ;
      resyncVisited = null;
      resyncDamaged = !1;
      constructor(UU, RU) {
        this.setState(UU), this.context = RU || new sR(UU.constructor)
      }
      setState(UU) {
        this.state = UU, this.root = new Mt, this.root.addRef(0, UU)
      }
      decode(UU) {
        let RU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
            offset: 0
          },
          gU = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : this.state;
        const pU = void 0 !== this.uZ ? [] : null,
          EU = this.root,
          PU = UU.byteLength;
        let TU = gU.constructor[cU];
        for (this.currentRefId = 0; RU.offset < PU;) {
          if (UU[RU.offset] == tU) {
            RU.offset++, gU[xU]?.();
            const tU = fR.number(UU, RU),
              pU = EU.refs.get(tU);
            pU ? (gU = pU, TU = gU.constructor[cU], this.currentRefId = tU) : (console.error(`"refId" not found: ${tU}`, {
              previousRef: gU,
              previousRefId: this.currentRefId
            }), console.warn("Please report this issue to the developers."), this.skipCurrentStructure(UU, RU, PU));
            continue
          } - 1 !== TU(this, UU, RU, gU, pU) || (console.warn("@colyseus/schema: definition mismatch"), this.skipCurrentStructure(UU, RU, PU))
        }
        return gU[xU]?.(), null !== this.resyncVisited && function(UU, RU) {
          UU.resyncDamaged ? console.warn("@colyseus/schema: resync sweep skipped \u2014 parts of the payload could not be decoded. Stale entries may persist until the next resync.") : sg(UU, UU.state, new Set, RU)
        }(this, pU), null !== pU && this.uZ?.(pU), EU.garbageCollectDeletedRefs(), pU
      }
      decodeResync(UU) {
        let RU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
          offset: 0
        };
        this.resyncVisited = new Map, this.resyncDamaged = !1;
        try {
          return this.decode(UU, RU)
        } finally {
          this.resyncVisited = null
        }
      }
      skipCurrentStructure(UU, RU, gU) {
        null !== this.resyncVisited && (this.resyncDamaged = !0);
        const pU = {
          offset: RU.offset
        };
        for (; RU.offset < gU && (UU[RU.offset] !== tU || (pU.offset = RU.offset + 1, !this.root.refs.has(fR.number(UU, pU))));) RU.offset++
      }
      getInstanceType(UU, RU, gU) {
        let tU;
        if (213 === UU[RU.offset]) {
          RU.offset++;
          const gU = fR.number(UU, RU);
          tU = this.context.get(gU)
        }
        return tU || gU
      }
      createInstanceOfType(UU) {
        return UU.initializeForDecoder()
      }
      removeChildRefs(UU, RU) {
        const gU = "string" !== typeof UU[QU],
          tU = UU[TU];
        UU.forEach(((EU, PU) => {
          RU?.push({
            ref: UU,
            refId: tU,
            op: pU.DELETE,
            field: PU,
            value: void 0,
            previousValue: EU
          }), gU && this.root.removeRef(EU[TU])
        }))
      }
    }
    const Lt = bt({
        min: ut.float64(),
        max: ut.float64(),
        bits: ut.uint8(),
        mode: ut.uint8()
      }, "QuantizedDescriptor"),
      Nt = bt({
        name: ut.string(),
        type: ut.string(),
        referencedType: ut.number(),
        childPrimitive: ut.string(),
        quantized: ut.ref(Lt).optional()
      }, "ReflectionField"),
      lt = bt({
        id: ut.number(),
        extendsId: ut.number(),
        fields: ut.array(Nt)
      }, "ReflectionType"),
      Ot = bt({
        types: ut.array(lt),
        rootType: ut.number()
      }, "Reflection");

    function Up(UU) {
      const RU = UU.root,
        gU = RU.callbacks,
        tU = new WeakMap;
      let EU;

      function PU(UU, gU) {
        let KU = gU.instance?.constructor[Symbol.metadata] || UU,
          cU = gU.instance && "function" === typeof gU.instance.forEach || UU && !Zt.is(UU);
        if (KU && !cU) {
          const UU = function(UU, pU, PU, qU) {
            return qU && void 0 !== gU.instance[pU] && !tU.has(EU) && PU(gU.instance[pU], void 0), RU.addCallback(UU[TU], pU, PU)
          };
          return new Proxy({
            listen: function(RU, pU) {
              let PU = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
              if (gU.instance) return UU(gU.instance, RU, pU, PU);
              {
                let TU = () => {};
                return gU.onInstanceAvailable(((gU, qU) => {
                  TU = UU(gU, RU, pU, PU && qU && !tU.has(EU))
                })), () => TU()
              }
            },
            onChange: function(UU) {
              return RU.addCallback(gU.instance[TU], pU.REPLACE, UU)
            },
            bindTo: function(UU, tU) {
              return tU || (tU = Object.keys(KU).map((UU => KU[UU].name))), RU.addCallback(gU.instance[TU], pU.REPLACE, (() => {
                tU.forEach((RU => UU[RU] = gU.instance[RU]))
              }))
            }
          }, {
            get(UU, RU) {
              const tU = KU[KU[RU]];
              if (tU) {
                const UU = gU.instance?.[RU],
                  pU = tU => {
                    const pU = qU(gU.instance).listen(RU, ((UU, RU) => {
                      tU(UU, !1), pU?.()
                    }), !1);
                    void 0 !== UU?.[TU] && tU(UU, !0)
                  };
                return PU(tU.type, {
                  instance: void 0 !== UU?.[TU] && UU,
                  parentInstance: gU.instance,
                  onInstanceAvailable: pU
                })
              }
              return UU[RU]
            },
            has: (UU, RU) => void 0 !== KU[RU],
            set(UU, RU, gU) {
              throw new Error("not allowed")
            },
            deleteProperty(UU, RU) {
              throw new Error("not allowed")
            }
          })
        } {
          const UU = function(UU, gU, PU) {
              return PU && UU.forEach(((UU, RU) => gU(UU, RU))), RU.addCallback(UU[TU], pU.ADD, ((UU, RU) => {
                tU.set(gU, !0), EU = gU, gU(UU, RU), tU.delete(gU), EU = void 0
              }))
            },
            PU = function(UU, gU) {
              return RU.addCallback(UU[TU], pU.DELETE, gU)
            },
            qU = function(UU, gU) {
              return RU.addCallback(UU[TU], pU.REPLACE, gU)
            };
          return new Proxy({
            Wm: function(RU) {
              let pU = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
              if (gU.instance) return UU(gU.instance, RU, pU && !tU.has(EU));
              if (gU.onInstanceAvailable) {
                let PU = () => {};
                return gU.onInstanceAvailable(((gU, TU) => {
                  PU = UU(gU, RU, pU && TU && !tU.has(EU))
                })), () => PU()
              }
            },
            Kw: function(UU) {
              if (gU.instance) return PU(gU.instance, UU);
              if (gU.onInstanceAvailable) {
                let RU = () => {};
                return gU.onInstanceAvailable((gU => {
                  RU = PU(gU, UU)
                })), () => RU()
              }
            },
            onChange: function(UU) {
              if (gU.instance) return qU(gU.instance, UU);
              if (gU.onInstanceAvailable) {
                let RU = () => {};
                return gU.onInstanceAvailable((gU => {
                  RU = qU(gU, UU)
                })), () => RU()
              }
            }
          }, {
            get(UU, RU) {
              if (!UU[RU]) throw new Error(`Can't access '${RU}' through callback proxy. access the instance directly.`);
              return UU[RU]
            },
            has: (UU, RU) => void 0 !== UU[RU],
            set(UU, RU, gU) {
              throw new Error("not allowed")
            },
            deleteProperty(UU, RU) {
              throw new Error("not allowed")
            }
          })
        }
      }

      function qU(UU) {
        return PU(void 0, {
          instance: UU
        })
      }
      return UU.uZ = function(UU) {
        const RU = new Set;
        for (let tU = 0, EU = UU.length; tU < EU; tU++) {
          const EU = UU[tU],
            PU = EU.refId,
            qU = EU.ref,
            KU = gU[PU];
          if (KU) {
            if ((EU.op & pU.DELETE) === pU.DELETE && Zt.isSchema(EU.previousValue)) {
              const UU = gU[EU.previousValue[TU]]?.[pU.DELETE];
              for (let RU = UU?.length - 1; RU >= 0; RU--) UU[RU]()
            }
            if (Zt.isSchema(qU)) {
              if (!RU.has(PU)) {
                const UU = KU?.[pU.REPLACE];
                for (let RU = UU?.length - 1; RU >= 0; RU--) UU[RU]()
              }
              if (KU.hasOwnProperty(EU.field)) {
                const UU = KU[EU.field];
                for (let RU = UU?.length - 1; RU >= 0; RU--) UU[RU](EU.value, EU.previousValue)
              }
            } else {
              if ((EU.op & pU.DELETE) === pU.DELETE) {
                if (void 0 !== EU.previousValue) {
                  const UU = KU[pU.DELETE];
                  for (let RU = UU?.length - 1; RU >= 0; RU--) UU[RU](EU.previousValue, EU.dynamicIndex ?? EU.field)
                }
                if ((EU.op & pU.ADD) === pU.ADD) {
                  const UU = KU[pU.ADD];
                  for (let RU = UU?.length - 1; RU >= 0; RU--) UU[RU](EU.value, EU.dynamicIndex ?? EU.field)
                }
              } else if ((EU.op & pU.ADD) === pU.ADD && EU.previousValue !== EU.value) {
                const UU = KU[pU.ADD];
                for (let RU = UU?.length - 1; RU >= 0; RU--) UU[RU](EU.value, EU.dynamicIndex ?? EU.field)
              }
              if (EU.value !== EU.previousValue && (void 0 !== EU.value || void 0 !== EU.previousValue)) {
                const UU = KU[pU.REPLACE];
                for (let RU = UU?.length - 1; RU >= 0; RU--) UU[RU](EU.value, EU.dynamicIndex ?? EU.field)
              }
            }
            RU.add(PU)
          }
        }
      }, qU
    }

    function Rp(UU, RU) {
      UU.uZ = RU
    }
    Ot.encode = function(UU) {
      let RU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
        offset: 0
      };
      const gU = UU.context,
        tU = new Ot,
        pU = new it(tU),
        EU = gU.schemas.get(UU.state.constructor);
      EU > 0 && (tU.rootType = EU);
      const PU = new Set,
        TU = {},
        qU = UU => {
          if (void 0 === UU.extendsId || PU.has(UU.extendsId)) {
            PU.add(UU.id), tU.types.push(UU);
            const RU = TU[UU.id];
            void 0 !== RU && (delete TU[UU.id], RU.forEach((UU => qU(UU))))
          } else void 0 === TU[UU.extendsId] && (TU[UU.extendsId] = []), TU[UU.extendsId].push(UU)
        };
      gU.schemas.forEach(((UU, RU) => {
        const tU = new lt;
        tU.id = Number(UU);
        const pU = Object.getPrototypeOf(RU);
        pU !== Zt && (tU.extendsId = gU.schemas.get(pU));
        const EU = RU[Symbol.metadata];
        if (EU !== pU[Symbol.metadata]) {
          const UU = EU[bU] ?? -1;
          for (let RU = 0; RU <= UU; RU++) {
            const UU = EU[RU];
            if (void 0 === UU) continue;
            const pU = UU.name;
            if (!Object.prototype.hasOwnProperty.call(EU, pU)) continue;
            const PU = new Nt;
            let TU;
            if (PU.name = pU, "string" === typeof UU.type) TU = UU.type;
            else if (vR(UU.type)) {
              const RU = UU.type.quantized;
              TU = "quantized";
              const gU = new Lt;
              gU.min = RU.min, gU.max = RU.max, gU.bits = RU.bits, gU.mode = RU.wrap ? 1 : 0, PU.quantized = gU
            } else {
              let RU;
              Zt.is(UU.type) ? (TU = "ref", RU = UU.type) : (TU = Object.keys(UU.type)[0], "string" === typeof UU.type[TU] ? PU.childPrimitive = UU.type[TU] : RU = UU.type[TU]), PU.referencedType = RU ? gU.getTypeId(RU) : -1
            }
            PU.type = TU, tU.fields.push(PU)
          }
        }
        qU(tU)
      }));
      for (const KU in TU) TU[KU].forEach((UU => tU.types.push(UU)));
      return pU.encodeAll(RU).slice(0, RU.offset)
    }, Ot.decode = function(UU, RU) {
      const gU = new Ot;
      new Dt(gU).decode(UU, RU);
      const tU = new sR;
      gU.types.forEach((UU => {
        const RU = tU.get(UU.extendsId) ?? Zt,
          gU = class extends RU {};
        sR.register(gU), tU.add(gU, UU.id)
      }), {});
      gU.types.forEach((UU => {
        const RU = tU.get(UU.id),
          pU = MR.initialize(RU),
          EU = [];
        let PU = UU;
        do {
          EU.push(PU), PU = gU.types.find((UU => UU.id === PU.extendsId))
        } while (PU);
        let TU = 0;
        EU.reverse().forEach((UU => {
          ((UU, RU, gU) => {
            RU.fields.forEach(((RU, pU) => {
              const EU = gU + pU;
              if (void 0 !== RU.quantized) {
                const gU = RU.quantized;
                MR.addField(UU, EU, RU.name, {
                  quantized: XR({
                    min: gU.min,
                    max: gU.max,
                    bits: gU.bits,
                    mode: 1 === gU.mode ? "wrap" : "clamp"
                  })
                })
              } else if (void 0 !== RU.referencedType) {
                const gU = RU.type,
                  pU = tU.get(RU.referencedType) ?? RU.childPrimitive;
                "ref" === gU ? MR.addField(UU, EU, RU.name, pU) : MR.addField(UU, EU, RU.name, {
                  [gU]: pU
                })
              } else MR.addField(UU, EU, RU.name, RU.type)
            }))
          })(pU, UU, TU), TU += UU.fields.length
        }))
      }));
      const pU = new(tU.get(gU.rootType || 0));
      return new Dt(pU, tU)
    }, Ot.makeEncodable = function(UU) {
      const RU = UU[Symbol.metadata];
      if (!RU) return UU;
      const gU = RU[bU];
      if (void 0 === gU) return UU;
      for (let tU = 0; tU <= gU; tU++) {
        const gU = RU[tU];
        gU && MR.defineField(UU, RU, tU, gU.name, gU.type)
      }
      return Object.prototype.hasOwnProperty.call(UU, wU) && delete UU[wU], UU
    };
    class gp {
      zu;
      uniqueRefIds = new Set;
      isTriggering = !1;
      constructor(UU) {
        this.zu = UU, this.zu.uZ = this.uZ.bind(this)
      }
      get callbacks() {
        return this.zu.root.callbacks
      }
      get state() {
        return this.zu.state
      }
      addCallback(UU, RU, gU) {
        return this.zu.root.addCallback(UU, RU, gU)
      }
      addCallbackOrWaitCollectionAvailable(UU, RU, gU, tU) {
        let EU = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4],
          PU = () => {};
        const qU = () => PU(),
          KU = UU[RU];
        if (KU && void 0 !== KU[TU]) return EU = EU && !1 === this.isTriggering, gU === pU.ADD && EU && KU.forEach(((UU, RU) => {
          tU(UU, RU)
        })), this.addCallback(KU[TU], gU, tU);
        {
          let pU;
          return pU = this.addCallback(UU[TU], RU, ((UU, RU) => {
            null !== UU && void 0 !== UU && (pU(), PU = this.addCallback(UU[TU], gU, tU))
          })), PU = pU, qU
        }
      }
      listen() {
        return "string" === typeof(arguments.length <= 0 ? void 0 : arguments[0]) ? this.listenInstance(this.state, arguments.length <= 0 ? void 0 : arguments[0], arguments.length <= 1 ? void 0 : arguments[1], arguments.length <= 2 ? void 0 : arguments[2]) : this.listenInstance(arguments.length <= 0 ? void 0 : arguments[0], arguments.length <= 1 ? void 0 : arguments[1], arguments.length <= 2 ? void 0 : arguments[2], arguments.length <= 3 ? void 0 : arguments[3])
      }
      listenInstance(UU, RU, gU) {
        let tU = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
        tU = tU && !1 === this.isTriggering;
        const pU = UU[RU];
        return tU && null !== pU && void 0 !== pU && gU(pU, void 0), this.addCallback(UU[TU], RU, gU)
      }
      onChange() {
        if (2 === arguments.length && "string" !== typeof(arguments.length <= 0 ? void 0 : arguments[0])) {
          const UU = arguments.length <= 0 ? void 0 : arguments[0],
            RU = arguments.length <= 1 ? void 0 : arguments[1];
          return this.addCallback(UU[TU], pU.REPLACE, RU)
        }
        return "string" === typeof(arguments.length <= 0 ? void 0 : arguments[0]) ? this.addCallbackOrWaitCollectionAvailable(this.state, arguments.length <= 0 ? void 0 : arguments[0], pU.REPLACE, arguments.length <= 1 ? void 0 : arguments[1]) : this.addCallbackOrWaitCollectionAvailable(arguments.length <= 0 ? void 0 : arguments[0], arguments.length <= 1 ? void 0 : arguments[1], pU.REPLACE, arguments.length <= 2 ? void 0 : arguments[2])
      }
      Wm() {
        return "string" === typeof(arguments.length <= 0 ? void 0 : arguments[0]) ? this.addCallbackOrWaitCollectionAvailable(this.state, arguments.length <= 0 ? void 0 : arguments[0], pU.ADD, arguments.length <= 1 ? void 0 : arguments[1], !1 !== (arguments.length <= 2 ? void 0 : arguments[2])) : this.addCallbackOrWaitCollectionAvailable(arguments.length <= 0 ? void 0 : arguments[0], arguments.length <= 1 ? void 0 : arguments[1], pU.ADD, arguments.length <= 2 ? void 0 : arguments[2], !1 !== (arguments.length <= 3 ? void 0 : arguments[3]))
      }
      Kw() {
        return "string" === typeof(arguments.length <= 0 ? void 0 : arguments[0]) ? this.addCallbackOrWaitCollectionAvailable(this.state, arguments.length <= 0 ? void 0 : arguments[0], pU.DELETE, arguments.length <= 1 ? void 0 : arguments[1]) : this.addCallbackOrWaitCollectionAvailable(arguments.length <= 0 ? void 0 : arguments[0], arguments.length <= 1 ? void 0 : arguments[1], pU.DELETE, arguments.length <= 2 ? void 0 : arguments[2])
      }
      bindTo(UU, RU, gU) {
        let tU = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
        const EU = UU.constructor[Symbol.metadata];
        gU || (gU = Object.keys(EU).filter((UU => !isNaN(Number(UU)))).map((UU => EU[UU].name)));
        const PU = () => {
          for (const tU of gU) {
            const gU = UU[tU];
            void 0 !== gU && (RU[tU] = gU)
          }
        };
        return tU && PU(), this.addCallback(UU[TU], pU.REPLACE, PU)
      }
      uZ(UU) {
        this.uniqueRefIds.clear(), this.isTriggering = !0;
        for (let RU = 0, gU = UU.length; RU < gU; RU++) {
          const gU = UU[RU],
            tU = gU.refId,
            EU = gU.ref,
            PU = this.callbacks[tU];
          if (PU) {
            if ((gU.op & pU.DELETE) === pU.DELETE && Zt.isSchema(gU.previousValue)) {
              const UU = gU.previousValue[TU],
                RU = this.callbacks[UU]?.[pU.DELETE];
              if (RU)
                for (let gU = RU.length - 1; gU >= 0; gU--) try {
                  RU[gU]()
                } catch (Pp) {
                  console.error(Pp)
                }
            }
            if (Zt.isSchema(EU)) {
              if (!this.uniqueRefIds.has(tU)) {
                const UU = PU[pU.REPLACE];
                if (UU)
                  for (let RU = UU.length - 1; RU >= 0; RU--) try {
                    UU[RU]()
                  } catch (Pp) {
                    console.error(Pp)
                  }
              }
              const UU = PU[gU.field];
              if (UU)
                for (let RU = UU.length - 1; RU >= 0; RU--) try {
                  UU[RU](gU.value, gU.previousValue)
                } catch (Pp) {
                  console.error(Pp)
                }
            } else {
              const UU = gU.dynamicIndex ?? gU.field;
              if ((gU.op & pU.DELETE) === pU.DELETE) {
                if (void 0 !== gU.previousValue) {
                  const RU = PU[pU.DELETE];
                  if (RU)
                    for (let tU = RU.length - 1; tU >= 0; tU--) try {
                      RU[tU](gU.previousValue, UU)
                    } catch (Pp) {
                      console.error(Pp)
                    }
                }
                if ((gU.op & pU.ADD) === pU.ADD) {
                  const RU = PU[pU.ADD];
                  if (RU)
                    for (let tU = RU.length - 1; tU >= 0; tU--) try {
                      RU[tU](gU.value, UU)
                    } catch (Pp) {
                      console.error(Pp)
                    }
                }
              } else if ((gU.op & pU.ADD) === pU.ADD && gU.previousValue !== gU.value) {
                const RU = PU[pU.ADD];
                if (RU)
                  for (let tU = RU.length - 1; tU >= 0; tU--) try {
                    RU[tU](gU.value, UU)
                  } catch (Pp) {
                    console.error(Pp)
                  }
              }
              if (gU.value !== gU.previousValue) {
                const RU = PU[pU.REPLACE];
                if (RU)
                  for (let tU = RU.length - 1; tU >= 0; tU--) try {
                    RU[tU](UU, gU.value)
                  } catch (Pp) {
                    console.error(Pp)
                  }
              }
            }
            this.uniqueRefIds.add(tU)
          }
        }
        this.isTriggering = !1
      }
    }
    const tp = {
      get(UU) {
        if (UU instanceof Dt) return new gp(UU);
        if ("zu" in UU.oW) return new gp(UU.oW.zu);
        throw new Error("Invalid room or decoder")
      },
      getLegacy(UU) {
        if (UU instanceof Dt) return Up(UU);
        if ("zu" in UU.oW) return Up(UU.oW.zu);
        throw new Error("Invalid room or decoder")
      },
      getRawChanges: (UU, RU) => Rp(UU, RU)
    };
    class pp {
      _free = [];
      _factory;
      _maxSize;
      constructor(UU) {
        let RU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        this._factory = UU, this._maxSize = RU.maxSize ?? 1 / 0;
        const gU = RU.preallocate ?? 0;
        for (let tU = 0; tU < gU; tU++) this._free.push(UU())
      }
      acquire() {
        return this._free.length > 0 ? this._free.pop() : this._factory()
      }
      release(UU) {
        Zt.reset(UU), this._free.length < this._maxSize && this._free.push(UU)
      }
      get size() {
        return this._free.length
      }
    }

    function Ep(UU) {
      return new pp((() => new UU), arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {})
    }
    IR("map", {
      constructor: pt
    }), IR("array", {
      constructor: gt
    }), IR("set", {
      constructor: Pt
    }), IR("collection", {
      constructor: Et
    })
  },
  8714: (UU, RU, gU) => {
    gU.r(RU), gU.d(RU, {
      __addDisposableResource: () => vU,
      __assign: () => EU,
      __asyncDelegator: () => nU,
      __asyncGenerator: () => wU,
      __asyncValues: () => bU,
      __await: () => JU,
      __awaiter: () => CU,
      __classPrivateFieldGet: () => VU,
      __classPrivateFieldIn: () => XU,
      __classPrivateFieldSet: () => rU,
      __createBinding: () => QU,
      __decorate: () => TU,
      __disposeResources: () => HU,
      __esDecorate: () => KU,
      __exportStar: () => eU,
      __extends: () => pU,
      __generator: () => hU,
      __importDefault: () => BU,
      __importStar: () => YU,
      __makeTemplateObject: () => oU,
      __metadata: () => uU,
      __param: () => qU,
      __propKey: () => GU,
      __read: () => fU,
      __rest: () => PU,
      __rewriteRelativeImportExtension: () => SU,
      __runInitializers: () => cU,
      __setFunctionName: () => jU,
      __spread: () => xU,
      __spreadArray: () => IU,
      __spreadArrays: () => mU,
      __values: () => WU,
      default: () => sU
    });
    var tU = function(UU, RU) {
      return tU = Object.setPrototypeOf || {
        __proto__: []
      }
      instanceof Array && function(UU, RU) {
        UU.__proto__ = RU
      } || function(UU, RU) {
        for (var gU in RU) Object.prototype.hasOwnProperty.call(RU, gU) && (UU[gU] = RU[gU])
      }, tU(UU, RU)
    };

    function pU(UU, RU) {
      if ("function" !== typeof RU && null !== RU) throw new TypeError("Class extends value " + String(RU) + " is not a constructor or null");

      function gU() {
        this.constructor = UU
      }
      tU(UU, RU), UU.prototype = null === RU ? Object.create(RU) : (gU.prototype = RU.prototype, new gU)
    }
    var EU = function() {
      return EU = Object.assign || function(UU) {
        for (var RU, gU = 1, tU = arguments.length; gU < tU; gU++)
          for (var pU in RU = arguments[gU]) Object.prototype.hasOwnProperty.call(RU, pU) && (UU[pU] = RU[pU]);
        return UU
      }, EU.apply(this, arguments)
    };

    function PU(UU, RU) {
      var gU = {};
      for (var tU in UU) Object.prototype.hasOwnProperty.call(UU, tU) && RU.indexOf(tU) < 0 && (gU[tU] = UU[tU]);
      if (null != UU && "function" === typeof Object.getOwnPropertySymbols) {
        var pU = 0;
        for (tU = Object.getOwnPropertySymbols(UU); pU < tU.length; pU++) RU.indexOf(tU[pU]) < 0 && Object.prototype.propertyIsEnumerable.call(UU, tU[pU]) && (gU[tU[pU]] = UU[tU[pU]])
      }
      return gU
    }

    function TU(UU, RU, gU, tU) {
      var pU, EU = arguments.length,
        PU = EU < 3 ? RU : null === tU ? tU = Object.getOwnPropertyDescriptor(RU, gU) : tU;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) PU = Reflect.decorate(UU, RU, gU, tU);
      else
        for (var TU = UU.length - 1; TU >= 0; TU--)(pU = UU[TU]) && (PU = (EU < 3 ? pU(PU) : EU > 3 ? pU(RU, gU, PU) : pU(RU, gU)) || PU);
      return EU > 3 && PU && Object.defineProperty(RU, gU, PU), PU
    }

    function qU(UU, RU) {
      return function(gU, tU) {
        RU(gU, tU, UU)
      }
    }

    function KU(UU, RU, gU, tU, pU, EU) {
      function PU(UU) {
        if (void 0 !== UU && "function" !== typeof UU) throw new TypeError("Function expected");
        return UU
      }
      for (var TU, qU = tU.kind, KU = "getter" === qU ? "get" : "setter" === qU ? "set" : "value", cU = !RU && UU ? tU.static ? UU : UU.prototype : null, GU = RU || (cU ? Object.getOwnPropertyDescriptor(cU, tU.name) : {}), jU = !1, uU = gU.length - 1; uU >= 0; uU--) {
        var CU = {};
        for (var hU in tU) CU[hU] = "access" === hU ? {} : tU[hU];
        for (var hU in tU.access) CU.access[hU] = tU.access[hU];
        CU.addInitializer = function(UU) {
          if (jU) throw new TypeError("Cannot add initializers after decoration has completed");
          EU.push(PU(UU || null))
        };
        var QU = (0, gU[uU])("accessor" === qU ? {
          get: GU.get,
          set: GU.set
        } : GU[KU], CU);
        if ("accessor" === qU) {
          if (void 0 === QU) continue;
          if (null === QU || "object" !== typeof QU) throw new TypeError("Object expected");
          (TU = PU(QU.get)) && (GU.get = TU), (TU = PU(QU.set)) && (GU.set = TU), (TU = PU(QU.init)) && pU.unshift(TU)
        } else(TU = PU(QU)) && ("field" === qU ? pU.unshift(TU) : GU[KU] = TU)
      }
      cU && Object.defineProperty(cU, tU.name, GU), jU = !0
    }

    function cU(UU, RU, gU) {
      for (var tU = arguments.length > 2, pU = 0; pU < RU.length; pU++) gU = tU ? RU[pU].call(UU, gU) : RU[pU].call(UU);
      return tU ? gU : void 0
    }

    function GU(UU) {
      return "symbol" === typeof UU ? UU : "".concat(UU)
    }

    function jU(UU, RU, gU) {
      return "symbol" === typeof RU && (RU = RU.description ? "[".concat(RU.description, "]") : ""), Object.defineProperty(UU, "name", {
        configurable: !0,
        value: gU ? "".concat(gU, " ", RU) : RU
      })
    }

    function uU(UU, RU) {
      if ("object" === typeof Reflect && "function" === typeof Reflect.metadata) return Reflect.metadata(UU, RU)
    }

    function CU(UU, RU, gU, tU) {
      return new(gU || (gU = Promise))((function(pU, EU) {
        function PU(UU) {
          try {
            qU(tU.next(UU))
          } catch (RU) {
            EU(RU)
          }
        }

        function TU(UU) {
          try {
            qU(tU.throw(UU))
          } catch (RU) {
            EU(RU)
          }
        }

        function qU(UU) {
          var RU;
          UU.done ? pU(UU.value) : (RU = UU.value, RU instanceof gU ? RU : new gU((function(UU) {
            UU(RU)
          }))).then(PU, TU)
        }
        qU((tU = tU.apply(UU, RU || [])).next())
      }))
    }

    function hU(UU, RU) {
      var gU, tU, pU, EU = {
          label: 0,
          sent: function() {
            if (1 & pU[0]) throw pU[1];
            return pU[1]
          },
          trys: [],
          ops: []
        },
        PU = Object.create(("function" === typeof Iterator ? Iterator : Object).prototype);
      return PU.next = TU(0), PU.throw = TU(1), PU.return = TU(2), "function" === typeof Symbol && (PU[Symbol.iterator] = function() {
        return this
      }), PU;

      function TU(TU) {
        return function(qU) {
          return function(TU) {
            if (gU) throw new TypeError("Generator is already executing.");
            for (; PU && (PU = 0, TU[0] && (EU = 0)), EU;) try {
              if (gU = 1, tU && (pU = 2 & TU[0] ? tU.return : TU[0] ? tU.throw || ((pU = tU.return) && pU.call(tU), 0) : tU.next) && !(pU = pU.call(tU, TU[1])).done) return pU;
              switch (tU = 0, pU && (TU = [2 & TU[0], pU.value]), TU[0]) {
                case 0:
                case 1:
                  pU = TU;
                  break;
                case 4:
                  return EU.label++, {
                    value: TU[1],
                    done: !1
                  };
                case 5:
                  EU.label++, tU = TU[1], TU = [0];
                  continue;
                case 7:
                  TU = EU.ops.pop(), EU.trys.pop();
                  continue;
                default:
                  if (!(pU = (pU = EU.trys).length > 0 && pU[pU.length - 1]) && (6 === TU[0] || 2 === TU[0])) {
                    EU = 0;
                    continue
                  }
                  if (3 === TU[0] && (!pU || TU[1] > pU[0] && TU[1] < pU[3])) {
                    EU.label = TU[1];
                    break
                  }
                  if (6 === TU[0] && EU.label < pU[1]) {
                    EU.label = pU[1], pU = TU;
                    break
                  }
                  if (pU && EU.label < pU[2]) {
                    EU.label = pU[2], EU.ops.push(TU);
                    break
                  }
                  pU[2] && EU.ops.pop(), EU.trys.pop();
                  continue
              }
              TU = RU.call(UU, EU)
            } catch (qU) {
              TU = [6, qU], tU = 0
            } finally {
              gU = pU = 0
            }
            if (5 & TU[0]) throw TU[1];
            return {
              value: TU[0] ? TU[1] : void 0,
              done: !0
            }
          }([TU, qU])
        }
      }
    }
    var QU = Object.create ? function(UU, RU, gU, tU) {
      void 0 === tU && (tU = gU);
      var pU = Object.getOwnPropertyDescriptor(RU, gU);
      pU && !("get" in pU ? !RU.__esModule : pU.writable || pU.configurable) || (pU = {
        enumerable: !0,
        get: function() {
          return RU[gU]
        }
      }), Object.defineProperty(UU, tU, pU)
    } : function(UU, RU, gU, tU) {
      void 0 === tU && (tU = gU), UU[tU] = RU[gU]
    };

    function eU(UU, RU) {
      for (var gU in UU) "default" === gU || Object.prototype.hasOwnProperty.call(RU, gU) || QU(RU, UU, gU)
    }

    function WU(UU) {
      var RU = "function" === typeof Symbol && Symbol.iterator,
        gU = RU && UU[RU],
        tU = 0;
      if (gU) return gU.call(UU);
      if (UU && "number" === typeof UU.length) return {
        next: function() {
          return UU && tU >= UU.length && (UU = void 0), {
            value: UU && UU[tU++],
            done: !UU
          }
        }
      };
      throw new TypeError(RU ? "Object is not iterable." : "Symbol.iterator is not defined.")
    }

    function fU(UU, RU) {
      var gU = "function" === typeof Symbol && UU[Symbol.iterator];
      if (!gU) return UU;
      var tU, pU, EU = gU.call(UU),
        PU = [];
      try {
        for (;
          (void 0 === RU || RU-- > 0) && !(tU = EU.next()).done;) PU.push(tU.value)
      } catch (TU) {
        pU = {
          error: TU
        }
      } finally {
        try {
          tU && !tU.done && (gU = EU.return) && gU.call(EU)
        } finally {
          if (pU) throw pU.error
        }
      }
      return PU
    }

    function xU() {
      for (var UU = [], RU = 0; RU < arguments.length; RU++) UU = UU.concat(fU(arguments[RU]));
      return UU
    }

    function mU() {
      for (var UU = 0, RU = 0, gU = arguments.length; RU < gU; RU++) UU += arguments[RU].length;
      var tU = Array(UU),
        pU = 0;
      for (RU = 0; RU < gU; RU++)
        for (var EU = arguments[RU], PU = 0, TU = EU.length; PU < TU; PU++, pU++) tU[pU] = EU[PU];
      return tU
    }

    function IU(UU, RU, gU) {
      if (gU || 2 === arguments.length)
        for (var tU, pU = 0, EU = RU.length; pU < EU; pU++) !tU && pU in RU || (tU || (tU = Array.prototype.slice.call(RU, 0, pU)), tU[pU] = RU[pU]);
      return UU.concat(tU || Array.prototype.slice.call(RU))
    }

    function JU(UU) {
      return this instanceof JU ? (this.v = UU, this) : new JU(UU)
    }

    function wU(UU, RU, gU) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var tU, pU = gU.apply(UU, RU || []),
        EU = [];
      return tU = Object.create(("function" === typeof AsyncIterator ? AsyncIterator : Object).prototype), PU("next"), PU("throw"), PU("return", (function(UU) {
        return function(RU) {
          return Promise.resolve(RU).then(UU, KU)
        }
      })), tU[Symbol.asyncIterator] = function() {
        return this
      }, tU;

      function PU(UU, RU) {
        pU[UU] && (tU[UU] = function(RU) {
          return new Promise((function(gU, tU) {
            EU.push([UU, RU, gU, tU]) > 1 || TU(UU, RU)
          }))
        }, RU && (tU[UU] = RU(tU[UU])))
      }

      function TU(UU, RU) {
        try {
          (gU = pU[UU](RU)).value instanceof JU ? Promise.resolve(gU.value.v).then(qU, KU) : cU(EU[0][2], gU)
        } catch (tU) {
          cU(EU[0][3], tU)
        }
        var gU
      }

      function qU(UU) {
        TU("next", UU)
      }

      function KU(UU) {
        TU("throw", UU)
      }

      function cU(UU, RU) {
        UU(RU), EU.shift(), EU.length && TU(EU[0][0], EU[0][1])
      }
    }

    function nU(UU) {
      var RU, gU;
      return RU = {}, tU("next"), tU("throw", (function(UU) {
        throw UU
      })), tU("return"), RU[Symbol.iterator] = function() {
        return this
      }, RU;

      function tU(tU, pU) {
        RU[tU] = UU[tU] ? function(RU) {
          return (gU = !gU) ? {
            value: JU(UU[tU](RU)),
            done: !1
          } : pU ? pU(RU) : RU
        } : pU
      }
    }

    function bU(UU) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var RU, gU = UU[Symbol.asyncIterator];
      return gU ? gU.call(UU) : (UU = WU(UU), RU = {}, tU("next"), tU("throw"), tU("return"), RU[Symbol.asyncIterator] = function() {
        return this
      }, RU);

      function tU(gU) {
        RU[gU] = UU[gU] && function(RU) {
          return new Promise((function(tU, pU) {
            (function(UU, RU, gU, tU) {
              Promise.resolve(tU).then((function(RU) {
                UU({
                  value: RU,
                  done: gU
                })
              }), RU)
            })(tU, pU, (RU = UU[gU](RU)).done, RU.value)
          }))
        }
      }
    }

    function oU(UU, RU) {
      return Object.defineProperty ? Object.defineProperty(UU, "raw", {
        value: RU
      }) : UU.raw = RU, UU
    }
    var ZU = Object.create ? function(UU, RU) {
        Object.defineProperty(UU, "default", {
          enumerable: !0,
          value: RU
        })
      } : function(UU, RU) {
        UU.default = RU
      },
      aU = function(UU) {
        return aU = Object.getOwnPropertyNames || function(UU) {
          var RU = [];
          for (var gU in UU) Object.prototype.hasOwnProperty.call(UU, gU) && (RU[RU.length] = gU);
          return RU
        }, aU(UU)
      };

    function YU(UU) {
      if (UU && UU.__esModule) return UU;
      var RU = {};
      if (null != UU)
        for (var gU = aU(UU), tU = 0; tU < gU.length; tU++) "default" !== gU[tU] && QU(RU, UU, gU[tU]);
      return ZU(RU, UU), RU
    }

    function BU(UU) {
      return UU && UU.__esModule ? UU : {
        default: UU
      }
    }

    function VU(UU, RU, gU, tU) {
      if ("a" === gU && !tU) throw new TypeError("Private accessor was defined without a getter");
      if ("function" === typeof RU ? UU !== RU || !tU : !RU.has(UU)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
      return "m" === gU ? tU : "a" === gU ? tU.call(UU) : tU ? tU.value : RU.get(UU)
    }

    function rU(UU, RU, gU, tU, pU) {
      if ("m" === tU) throw new TypeError("Private method is not writable");
      if ("a" === tU && !pU) throw new TypeError("Private accessor was defined without a setter");
      if ("function" === typeof RU ? UU !== RU || !pU : !RU.has(UU)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
      return "a" === tU ? pU.call(UU, gU) : pU ? pU.value = gU : RU.set(UU, gU), gU
    }

    function XU(UU, RU) {
      if (null === RU || "object" !== typeof RU && "function" !== typeof RU) throw new TypeError("Cannot use 'in' operator on non-object");
      return "function" === typeof UU ? RU === UU : UU.has(RU)
    }

    function vU(UU, RU, gU) {
      if (null !== RU && void 0 !== RU) {
        if ("object" !== typeof RU && "function" !== typeof RU) throw new TypeError("Object expected.");
        var tU, pU;
        if (gU) {
          if (!Symbol.asyncDispose) throw new TypeError("Symbol.asyncDispose is not defined.");
          tU = RU[Symbol.asyncDispose]
        }
        if (void 0 === tU) {
          if (!Symbol.dispose) throw new TypeError("Symbol.dispose is not defined.");
          tU = RU[Symbol.dispose], gU && (pU = tU)
        }
        if ("function" !== typeof tU) throw new TypeError("Object not disposable.");
        pU && (tU = function() {
          try {
            pU.call(this)
          } catch (UU) {
            return Promise.reject(UU)
          }
        }), UU.stack.push({
          value: RU,
          dispose: tU,
          async: gU
        })
      } else gU && UU.stack.push({
        async: !0
      });
      return RU
    }
    var dU = "function" === typeof SuppressedError ? SuppressedError : function(UU, RU, gU) {
      var tU = new Error(gU);
      return tU.name = "SuppressedError", tU.error = UU, tU.suppressed = RU, tU
    };

    function HU(UU) {
      function RU(RU) {
        UU.error = UU.hasError ? new dU(RU, UU.error, "An error was suppressed during disposal.") : RU, UU.hasError = !0
      }
      var gU, tU = 0;
      return function pU() {
        for (; gU = UU.stack.pop();) try {
          if (!gU.async && 1 === tU) return tU = 0, UU.stack.push(gU), Promise.resolve().then(pU);
          if (gU.dispose) {
            var EU = gU.dispose.call(gU.value);
            if (gU.async) return tU |= 2, Promise.resolve(EU).then(pU, (function(UU) {
              return RU(UU), pU()
            }))
          } else tU |= 1
        } catch (PU) {
          RU(PU)
        }
        if (1 === tU) return UU.hasError ? Promise.reject(UU.error) : Promise.resolve();
        if (UU.hasError) throw UU.error
      }()
    }

    function SU(UU, RU) {
      return "string" === typeof UU && /^\.\.?\//.test(UU) ? UU.replace(/\.(tsx)$|((?:\.d)?)((?:\.[^./]+?)?)\.([cm]?)ts$/i, (function(UU, gU, tU, pU, EU) {
        return gU ? RU ? ".jsx" : ".js" : !tU || pU && EU ? tU + pU + "." + EU.toLowerCase() + "js" : UU
      })) : UU
    }
    const sU = {
      __extends: pU,
      __assign: EU,
      __rest: PU,
      __decorate: TU,
      __param: qU,
      __esDecorate: KU,
      __runInitializers: cU,
      __propKey: GU,
      __setFunctionName: jU,
      __metadata: uU,
      __awaiter: CU,
      __generator: hU,
      __createBinding: QU,
      __exportStar: eU,
      __values: WU,
      __read: fU,
      __spread: xU,
      __spreadArrays: mU,
      __spreadArray: IU,
      __await: JU,
      __asyncGenerator: wU,
      __asyncDelegator: nU,
      __asyncValues: bU,
      __makeTemplateObject: oU,
      __importStar: YU,
      __importDefault: BU,
      __classPrivateFieldGet: VU,
      __classPrivateFieldSet: rU,
      __classPrivateFieldIn: XU,
      __addDisposableResource: vU,
      __disposeResources: HU,
      __rewriteRelativeImportExtension: SU
    }
  }
};
Object.freeze(modules);
for (const UU in modules) Object.freeze(modules[UU]);