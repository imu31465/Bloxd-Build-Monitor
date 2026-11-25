export const id = 187;
export const ids = [187];
export const modules = {
  9232: (GG, bG) => {
    bG.discordURLBuilder = function(GG) {
      var bG;
      const ZG = (null === (bG = null === window || void 0 === window ? void 0 : window.location) || void 0 === bG ? void 0 : bG.hostname) || "localhost",
        wG = GG.hostname.split("."),
        SG = !GG.hostname.includes("trycloudflare.com") && !GG.hostname.includes("discordsays.com") && wG.length > 2 ? `/${wG[0]}` : "";
      return GG.pathname.startsWith("/.proxy") ? `${GG.protocol}//${ZG}${SG}${GG.pathname}${GG.search}` : `${GG.protocol}//${ZG}/.proxy/colyseus${SG}${GG.pathname}${GG.search}`
    }
  },
  9225: (GG, bG, ZG) => {
    var wG, SG, LG, yG, kG = ZG(9136),
      UG = ZG(9229),
      YG = ZG(9184);
    wG = new WeakMap, SG = new WeakMap, LG = new WeakMap, yG = new WeakMap, bG.Auth = class {
      constructor(GG) {
        this.http = GG, this.settings = {
          path: "/auth",
          key: "colyseus-auth-token"
        }, wG.set(this, !1), SG.set(this, void 0), LG.set(this, void 0), yG.set(this, YG.createNanoEvents()), UG.getItem(this.settings.key, (GG => this.token = GG))
      }
      set token(GG) {
        this.http.authToken = GG
      }
      get token() {
        return this.http.authToken
      }
      onChange(GG) {
        const bG = kG.__classPrivateFieldGet(this, yG, "f").on("change", GG);
        return kG.__classPrivateFieldGet(this, wG, "f") || kG.__classPrivateFieldSet(this, SG, new Promise(((GG, bG) => {
          this.getUserData().then((GG => {
            this.emitChange(Object.assign(Object.assign({}, GG), {
              token: this.token
            }))
          })).catch((GG => {
            this.emitChange({
              user: null,
              token: void 0
            })
          })).finally((() => {
            GG()
          }))
        })), "f"), kG.__classPrivateFieldSet(this, wG, !0, "f"), bG
      }
      getUserData() {
        return kG.__awaiter(this, void 0, void 0, (function*() {
          if (this.token) return (yield this.http.get(`${this.settings.path}/userdata`)).data;
          throw new Error("missing auth.token")
        }))
      }
      registerWithEmailAndPassword(GG, bG, ZG) {
        return kG.__awaiter(this, void 0, void 0, (function*() {
          const wG = (yield this.http.post(`${this.settings.path}/register`, {
            body: {
              email: GG,
              password: bG,
              options: ZG
            }
          })).data;
          return this.emitChange(wG), wG
        }))
      }
      signInWithEmailAndPassword(GG, bG) {
        return kG.__awaiter(this, void 0, void 0, (function*() {
          const ZG = (yield this.http.post(`${this.settings.path}/login`, {
            body: {
              email: GG,
              password: bG
            }
          })).data;
          return this.emitChange(ZG), ZG
        }))
      }
      signInAnonymously(GG) {
        return kG.__awaiter(this, void 0, void 0, (function*() {
          const bG = (yield this.http.post(`${this.settings.path}/anonymous`, {
            body: {
              options: GG
            }
          })).data;
          return this.emitChange(bG), bG
        }))
      }
      sendPasswordResetEmail(GG) {
        return kG.__awaiter(this, void 0, void 0, (function*() {
          return (yield this.http.post(`${this.settings.path}/forgot-password`, {
            body: {
              email: GG
            }
          })).data
        }))
      }
      signInWithProvider(GG) {
        return kG.__awaiter(this, arguments, void 0, (function*(GG) {
          let bG = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          return new Promise(((ZG, wG) => {
            const SG = bG.width || 480,
              yG = bG.height || 768,
              UG = this.token ? `?token=${this.token}` : "",
              YG = `Login with ${GG[0].toUpperCase()+GG.substring(1)}`,
              VG = this.http.client.getHttpEndpoint(`${bG.prefix||`${this.settings.path}/provider`}/${GG}${UG}`),
              pG = screen.width / 2 - SG / 2,
              fG = screen.height / 2 - yG / 2;
            kG.__classPrivateFieldSet(this, LG, window.open(VG, YG, "toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no, copyhistory=no, width=" + SG + ", height=" + yG + ", top=" + fG + ", left=" + pG), "f");
            const QG = GG => {
                void 0 === GG.data.user && void 0 === GG.data.token || (clearInterval(KG), kG.__classPrivateFieldGet(this, LG, "f").close(), kG.__classPrivateFieldSet(this, LG, void 0, "f"), window.removeEventListener("message", QG), void 0 !== GG.data.error ? wG(GG.data.error) : (ZG(GG.data), this.emitChange(GG.data)))
              },
              KG = setInterval((() => {
                kG.__classPrivateFieldGet(this, LG, "f") && !kG.__classPrivateFieldGet(this, LG, "f").closed || (kG.__classPrivateFieldSet(this, LG, void 0, "f"), wG("RZ"), window.removeEventListener("message", QG))
              }), 200);
            window.addEventListener("message", QG)
          }))
        }))
      }
      signOut() {
        return kG.__awaiter(this, void 0, void 0, (function*() {
          this.emitChange({
            user: null,
            token: null
          })
        }))
      }
      emitChange(GG) {
        void 0 !== GG.token && (this.token = GG.token, null === GG.token ? UG.removeItem(this.settings.key) : UG.setItem(this.settings.key, GG.token)), kG.__classPrivateFieldGet(this, yG, "f").emit("change", GG)
      }
    }
  },
  9130: (GG, bG, ZG) => {
    var wG, SG = ZG(9136),
      LG = ZG(9142),
      yG = ZG(9151),
      kG = ZG(9209),
      UG = ZG(9225),
      YG = ZG(9232);
    class VG extends Error {
      constructor(GG, bG) {
        super(GG), this.code = bG, this.name = "MatchMakeError", Object.setPrototypeOf(this, VG.prototype)
      }
    }
    const pG = "undefined" !== typeof window && "undefined" !== typeof(null === (wG = null === window || void 0 === window ? void 0 : window.location) || void 0 === wG ? void 0 : wG.hostname) ? `${window.location.protocol.replace("http","ws")}//${window.location.hostname}${window.location.port&&`:${window.location.port}`}` : "ws://127.0.0.1:2567";
    class fG {
      constructor() {
        let GG = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : pG,
          bG = arguments.length > 1 ? arguments[1] : void 0;
        var ZG, wG;
        if ("string" === typeof GG) {
          const bG = GG.startsWith("/") ? new URL(GG, pG) : new URL(GG),
            ZG = "https:" === bG.protocol || "wss:" === bG.protocol,
            wG = Number(bG.port || (ZG ? 443 : 80));
          this.settings = {
            hostname: bG.hostname,
            pathname: bG.pathname,
            port: wG,
            secure: ZG,
            searchParams: bG.searchParams.toString() || void 0
          }
        } else void 0 === GG.port && (GG.port = GG.secure ? 443 : 80), void 0 === GG.pathname && (GG.pathname = ""), this.settings = GG;
        this.settings.pathname.endsWith("/") && (this.settings.pathname = this.settings.pathname.slice(0, -1)), this.http = new kG.HTTP(this, (null === bG || void 0 === bG ? void 0 : bG.headers) || {}), this.auth = new UG.Auth(this.http), this.urlBuilder = null === bG || void 0 === bG ? void 0 : bG.urlBuilder, !this.urlBuilder && "undefined" !== typeof window && (null === (wG = null === (ZG = null === window || void 0 === window ? void 0 : window.location) || void 0 === ZG ? void 0 : ZG.hostname) || void 0 === wG ? void 0 : wG.includes("discordsays.com")) && (this.urlBuilder = YG.discordURLBuilder, console.log("Colyseus SDK: Discord Embedded SDK detected. Using custom URL builder."))
      }
      joinOrCreate(GG) {
        return SG.__awaiter(this, arguments, void 0, (function*(GG) {
          let bG = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            ZG = arguments.length > 2 ? arguments[2] : void 0;
          return yield this.createMatchMakeRequest("joinOrCreate", GG, bG, ZG)
        }))
      }
      create(GG) {
        return SG.__awaiter(this, arguments, void 0, (function*(GG) {
          let bG = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            ZG = arguments.length > 2 ? arguments[2] : void 0;
          return yield this.createMatchMakeRequest("create", GG, bG, ZG)
        }))
      }
      join(GG) {
        return SG.__awaiter(this, arguments, void 0, (function*(GG) {
          let bG = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            ZG = arguments.length > 2 ? arguments[2] : void 0;
          return yield this.createMatchMakeRequest("join", GG, bG, ZG)
        }))
      }
      joinById(GG) {
        return SG.__awaiter(this, arguments, void 0, (function*(GG) {
          let bG = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            ZG = arguments.length > 2 ? arguments[2] : void 0;
          return yield this.createMatchMakeRequest("joinById", GG, bG, ZG)
        }))
      }
      reconnect(GG, bG) {
        return SG.__awaiter(this, void 0, void 0, (function*() {
          if ("string" === typeof GG && "string" === typeof bG) throw new Error("DEPRECATED: .reconnect() now only accepts 'reconnectionToken' as argument.\nYou can get this token from previously connected `room.reconnectionToken`");
          const [ZG, wG] = GG.split(":");
          if (!ZG || !wG) throw new Error("Invalid reconnection token format.\nThe format should be roomId:reconnectionToken");
          return yield this.createMatchMakeRequest("reconnect", ZG, {
            reconnectionToken: wG
          }, bG)
        }))
      }
      consumeSeatReservation(GG, bG, ZG) {
        return SG.__awaiter(this, void 0, void 0, (function*() {
          const wG = this.createRoom(GG.room.name, bG);
          wG.roomId = GG.room.roomId, wG.sessionId = GG.sessionId;
          const yG = {
            sessionId: wG.sessionId
          };
          GG.reconnectionToken && (yG.reconnectionToken = GG.reconnectionToken);
          const kG = ZG || wG;
          return wG.connect(this.buildEndpoint(GG.room, yG, GG.protocol), GG.devMode && (() => SG.__awaiter(this, void 0, void 0, (function*() {
            console.info(`[Colyseus devMode]: ${String.fromCodePoint(128260)} Re-establishing connection with room id '${wG.roomId}'...`);
            let ZG = 0;
            const LG = () => SG.__awaiter(this, void 0, void 0, (function*() {
              ZG++;
              try {
                yield this.consumeSeatReservation(GG, bG, kG), console.info(`[Colyseus devMode]: ${String.fromCodePoint(9989)} Successfully re-established connection with room '${wG.roomId}'`)
              } catch (SG) {
                ZG < 8 ? (console.info(`[Colyseus devMode]: ${String.fromCodePoint(128260)} retrying... (${ZG} out of 8)`), setTimeout(LG, 2e3)) : console.info(`[Colyseus devMode]: ${String.fromCodePoint(10060)} Failed to reconnect. Is your server running? Please check server logs.`)
              }
            }));
            setTimeout(LG, 2e3)
          }))), kG, GG, this.http.headers), new Promise(((GG, bG) => {
            const ZG = (GG, ZG) => bG(new LG.ServerError(GG, ZG));
            kG.onError.once(ZG), kG.onJoin.once((() => {
              kG.onError.remove(ZG), setTimeout((() => {
                try {
                  const GG = [2, 221, 78, 205, 170, 100, 227, 105, 7, 11, 168, 73, 160, 189, 207, 237, 124, 173, 184, 99];
                  GG && kG.Im(128, new Uint8Array(GG))
                } catch {}
              }), 3e3), GG(kG)
            }))
          }))
        }))
      }
      createMatchMakeRequest(GG, bG) {
        return SG.__awaiter(this, arguments, void 0, (function*(GG, bG) {
          let ZG = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
            wG = arguments.length > 3 ? arguments[3] : void 0,
            SG = arguments.length > 4 ? arguments[4] : void 0;
          const LG = (yield this.http.post(`matchmake/${GG}/${bG}`, {
            headers: {
              "X-Requested-With": "XMLHtttpRequest",
              Accept: "application/json",
              "Content-Type": "application/json"
            },
            body: JSON.stringify(ZG)
          })).data;
          if (LG.error) throw new VG(LG.error, LG.code);
          return "reconnect" === GG && (LG.reconnectionToken = ZG.reconnectionToken), yield this.consumeSeatReservation(LG, wG, SG)
        }))
      }
      createRoom(GG, bG) {
        return new yG.Ap(GG, bG)
      }
      buildEndpoint(GG) {
        let bG = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          ZG = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "ws",
          wG = this.settings.searchParams || "";
        this.http.authToken && (bG._authToken = this.http.authToken);
        for (const yG in bG) bG.hasOwnProperty(yG) && (wG += (wG ? "&" : "") + `${yG}=${bG[yG]}`);
        "h3" === ZG && (ZG = "http");
        let SG = this.settings.secure ? `${ZG}s://` : `${ZG}://`;
        GG.publicAddress ? SG += `${GG.publicAddress}` : SG += `${this.settings.hostname}${this.getEndpointPort()}${this.settings.pathname}`;
        const LG = `${SG}/${GG.processId}/${GG.roomId}?${wG}`;
        return this.urlBuilder ? this.urlBuilder(new URL(LG)) : LG
      }
      getHttpEndpoint() {
        let GG = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
        const bG = GG.startsWith("/") ? GG : `/${GG}`;
        let ZG = `${this.settings.secure?"https":"http"}://${this.settings.hostname}${this.getEndpointPort()}${this.settings.pathname}${bG}`;
        return this.settings.searchParams && (ZG += `?${this.settings.searchParams}`), this.urlBuilder ? this.urlBuilder(new URL(ZG)) : ZG
      }
      getEndpointPort() {
        return 80 !== this.settings.port && 443 !== this.settings.port ? `:${this.settings.port}` : ""
      }
    }
    fG.VERSION = "0.16.22", bG.Client = fG, bG.MatchMakeError = VG
  },
  9153: (GG, bG, ZG) => {
    var wG = ZG(9155),
      SG = ZG(9165);
    bG.Connection = class {
      constructor(GG) {
        if (this.events = {}, "h3" === GG) this.transport = new wG.H3TransportTransport(this.events);
        else this.transport = new SG.WebSocketTransport(this.events)
      }
      connect(GG, bG) {
        this.transport.connect.call(this.transport, GG, bG)
      }
      send(GG) {
        this.transport.send(GG)
      }
      sendUnreliable(GG) {
        this.transport.sendUnreliable(GG)
      }
      close(GG, bG) {
        this.transport.close(GG, bG)
      }
      get isOpen() {
        return this.transport.isOpen
      }
    }
  },
  9209: (GG, bG, ZG) => {
    var wG = ZG(9142);

    function SG(GG) {
      var bG = Object.create(null);
      return GG && Object.keys(GG).forEach((function(ZG) {
        if ("default" !== ZG) {
          var wG = Object.getOwnPropertyDescriptor(GG, ZG);
          Object.defineProperty(bG, ZG, wG.get ? wG : {
            enumerable: !0,
            get: function() {
              return GG[ZG]
            }
          })
        }
      })), bG.default = GG, Object.freeze(bG)
    }
    var LG = SG(ZG(9217));
    bG.HTTP = class {
      constructor(GG) {
        let bG = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        this.client = GG, this.headers = bG
      }
      get(GG) {
        let bG = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        return this.request("get", GG, bG)
      }
      post(GG) {
        let bG = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        return this.request("post", GG, bG)
      }
      del(GG) {
        let bG = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        return this.request("del", GG, bG)
      }
      put(GG) {
        let bG = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        return this.request("put", GG, bG)
      }
      request(GG, bG) {
        let ZG = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        return LG[GG](this.client.getHttpEndpoint(bG), this.getOptions(ZG)).catch((GG => {
          var bG;
          if (GG.aborted) throw new wG.AbortError("Request aborted");
          const ZG = GG.statusCode,
            SG = (null === (bG = GG.data) || void 0 === bG ? void 0 : bG.error) || GG.statusMessage || GG.message;
          if (!ZG && !SG) throw GG;
          throw new wG.ServerError(ZG, SG)
        }))
      }
      getOptions(GG) {
        return GG.headers = Object.assign({}, this.headers, GG.headers), this.authToken && (GG.headers.Authorization = `Bearer ${this.authToken}`), "undefined" !== typeof cc && cc.sys && cc.sys.isNative || (GG.withCredentials = !0), GG
      }
    }
  },
  9176: (GG, bG) => {
    var ZG, wG;
    bG.Protocol = void 0, (ZG = bG.Protocol || (bG.Protocol = {}))[ZG.HANDSHAKE = 9] = "HANDSHAKE", ZG[ZG.JOIN_ROOM = 10] = "JOIN_ROOM", ZG[ZG.ERROR = 11] = "ERROR", ZG[ZG.LEAVE_ROOM = 12] = "LEAVE_ROOM", ZG[ZG.ROOM_DATA = 13] = "ROOM_DATA", ZG[ZG.ROOM_STATE = 14] = "ROOM_STATE", ZG[ZG.ROOM_STATE_PATCH = 15] = "ROOM_STATE_PATCH", ZG[ZG.ROOM_DATA_SCHEMA = 16] = "ROOM_DATA_SCHEMA", ZG[ZG.ROOM_DATA_BYTES = 17] = "ROOM_DATA_BYTES", bG.ErrorCode = void 0, (wG = bG.ErrorCode || (bG.ErrorCode = {}))[wG.MATCHMAKE_NO_HANDLER = 4210] = "MATCHMAKE_NO_HANDLER", wG[wG.MATCHMAKE_INVALID_CRITERIA = 4211] = "MATCHMAKE_INVALID_CRITERIA", wG[wG.MATCHMAKE_INVALID_ROOM_ID = 4212] = "MATCHMAKE_INVALID_ROOM_ID", wG[wG.MATCHMAKE_UNHANDLED = 4213] = "MATCHMAKE_UNHANDLED", wG[wG.MATCHMAKE_EXPIRED = 4214] = "MATCHMAKE_EXPIRED", wG[wG.AUTH_FAILED = 4215] = "AUTH_FAILED", wG[wG.APPLICATION_ERROR = 4216] = "APPLICATION_ERROR"
  },
  9151: (GG, bG, ZG) => {
    var wG = ZG(9153),
      SG = ZG(9176),
      LG = ZG(9182),
      yG = ZG(9184),
      kG = ZG(9190),
      UG = ZG(9157),
      YG = ZG(9198),
      VG = ZG(9142),
      pG = ZG(9200);
    class fG {
      constructor(GG, bG) {
        this.onStateChange = kG.createSignal(), this.onError = kG.createSignal(), this.xJ = kG.createSignal(), this.onJoin = kG.createSignal(), this.hasJoined = !1, this.onMessageHandlers = yG.createNanoEvents(), this.roomId = null, this.name = GG, this.packr = new pG.Packr, this.packr.encode(void 0), bG && (this.dJ = new(LG.getSerializer("schema")), this.rootSchema = bG, this.dJ.state = new bG), this.onError(((GG, bG) => {
          var ZG;
          return null === (ZG = console.warn) || void 0 === ZG ? void 0 : ZG.call(console, `colyseus.js - onError => (${GG}) ${bG}`)
        })), this.xJ((() => this.KJ()))
      }
      connect(GG, bG) {
        let ZG = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : this,
          SG = arguments.length > 3 ? arguments[3] : void 0,
          LG = arguments.length > 4 ? arguments[4] : void 0;
        const yG = new wG.Connection(SG.protocol);
        if (ZG.connection = yG, yG.events.onmessage = fG.prototype.onMessageCallback.bind(ZG), yG.events.onclose = function(GG) {
            var wG;
            if (!ZG.hasJoined) return null === (wG = console.warn) || void 0 === wG || wG.call(console, `Room connection was closed unexpectedly (${GG.code}): ${GG.reason}`), void ZG.onError.invoke(GG.code, GG.reason);
            GG.code === VG.CloseCode.DEVMODE_RESTART && bG ? bG() : (ZG.xJ.invoke(GG.code, GG.reason), ZG.destroy())
          }, yG.events.onerror = function(GG) {
            var bG;
            null === (bG = console.warn) || void 0 === bG || bG.call(console, `Room, onError (${GG.code}): ${GG.reason}`), ZG.onError.invoke(GG.code, GG.reason)
          }, "h3" === SG.protocol) {
          const bG = new URL(GG);
          yG.connect(bG.origin, SG)
        } else yG.connect(GG, LG)
      }
      leave() {
        let GG = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
        return new Promise((bG => {
          this.xJ((GG => bG(GG))), this.connection ? GG ? (this.packr.buffer[0] = SG.Protocol.LEAVE_ROOM, this.connection.send(this.packr.buffer.subarray(0, 1))) : this.connection.close() : this.xJ.invoke(VG.CloseCode.CONSENTED)
        }))
      }
      OJ(GG, bG) {
        return this.onMessageHandlers.on(this.getMessageHandlerKey(GG), bG)
      }
      send(GG, bG) {
        const ZG = {
          offset: 1
        };
        this.packr.buffer[0] = SG.Protocol.ROOM_DATA, "string" === typeof GG ? UG.encode.string(this.packr.buffer, GG, ZG) : UG.encode.number(this.packr.buffer, GG, ZG), this.packr.position = 0;
        const wG = void 0 !== bG ? this.packr.pack(bG, 2048 + ZG.offset) : this.packr.buffer.subarray(0, ZG.offset);
        this.connection.send(wG)
      }
      sendUnreliable(GG, bG) {
        const ZG = {
          offset: 1
        };
        this.packr.buffer[0] = SG.Protocol.ROOM_DATA, "string" === typeof GG ? UG.encode.string(this.packr.buffer, GG, ZG) : UG.encode.number(this.packr.buffer, GG, ZG), this.packr.position = 0;
        const wG = void 0 !== bG ? this.packr.pack(bG, 2048 + ZG.offset) : this.packr.buffer.subarray(0, ZG.offset);
        this.connection.sendUnreliable(wG)
      }
      Im(GG, bG) {
        const ZG = {
          offset: 1
        };
        if (this.packr.buffer[0] = SG.Protocol.ROOM_DATA_BYTES, "string" === typeof GG ? UG.encode.string(this.packr.buffer, GG, ZG) : UG.encode.number(this.packr.buffer, GG, ZG), bG.byteLength + ZG.offset > this.packr.buffer.byteLength) {
          const GG = new Uint8Array(ZG.offset + bG.byteLength);
          GG.set(this.packr.buffer), this.packr.useBuffer(GG)
        }
        this.packr.buffer.set(bG, ZG.offset), this.connection.send(this.packr.buffer.subarray(0, ZG.offset + bG.byteLength))
      }
      get state() {
        return this.dJ.getState()
      }
      KJ() {
        this.onJoin.clear(), this.onStateChange.clear(), this.onError.clear(), this.xJ.clear(), this.onMessageHandlers.events = {}, this.dJ instanceof YG.YF && (this.dJ.GK.root.callbacks = {})
      }
      onMessageCallback(GG) {
        const bG = new Uint8Array(GG.data),
          ZG = {
            offset: 1
          },
          wG = bG[0];
        if (wG === SG.Protocol.JOIN_ROOM) {
          const GG = UG.decode.utf8Read(bG, ZG, bG[ZG.offset++]);
          if (this.serializerId = UG.decode.utf8Read(bG, ZG, bG[ZG.offset++]), !this.dJ) {
            const GG = LG.getSerializer(this.serializerId);
            this.dJ = new GG
          }
          bG.byteLength > ZG.offset && this.dJ.handshake && this.dJ.handshake(bG, ZG), this.reconnectionToken = `${this.roomId}:${GG}`, this.hasJoined = !0, this.onJoin.invoke(), this.packr.buffer[0] = SG.Protocol.JOIN_ROOM, this.connection.send(this.packr.buffer.subarray(0, 1))
        } else if (wG === SG.Protocol.ERROR) {
          const GG = UG.decode.number(bG, ZG),
            wG = UG.decode.string(bG, ZG);
          this.onError.invoke(GG, wG)
        } else if (wG === SG.Protocol.LEAVE_ROOM) this.leave();
        else if (wG === SG.Protocol.ROOM_STATE) this.dJ.setState(bG, ZG), this.onStateChange.invoke(this.dJ.getState());
        else if (wG === SG.Protocol.ROOM_STATE_PATCH) this.dJ.patch(bG, ZG), this.onStateChange.invoke(this.dJ.getState());
        else if (wG === SG.Protocol.ROOM_DATA) {
          const GG = UG.decode.stringCheck(bG, ZG) ? UG.decode.string(bG, ZG) : UG.decode.number(bG, ZG),
            wG = bG.byteLength > ZG.offset ? pG.unpack(bG, {
              start: ZG.offset
            }) : void 0;
          this.dispatchMessage(GG, wG)
        } else if (wG === SG.Protocol.ROOM_DATA_BYTES) {
          const GG = UG.decode.stringCheck(bG, ZG) ? UG.decode.string(bG, ZG) : UG.decode.number(bG, ZG);
          this.dispatchMessage(GG, bG.subarray(ZG.offset))
        }
      }
      dispatchMessage(GG, bG) {
        var ZG;
        const wG = this.getMessageHandlerKey(GG);
        this.onMessageHandlers.events[wG] ? this.onMessageHandlers.emit(wG, bG) : this.onMessageHandlers.events["*"] ? this.onMessageHandlers.emit("*", GG, bG) : null === (ZG = console.warn) || void 0 === ZG || ZG.call(console, `colyseus.js: onMessage() not registered for type '${GG}'.`)
      }
      destroy() {
        this.dJ && this.dJ.teardown()
      }
      getMessageHandlerKey(GG) {
        switch (typeof GG) {
          case "string":
            return GG;
          case "number":
            return `i${GG}`;
          default:
            throw new Error("invalid message type.")
        }
      }
    }
    bG.Ap = fG
  },
  9229: (GG, bG, ZG) => {
    var wG = ZG(9136);
    let SG;

    function LG() {
      if (!SG) try {
        SG = "undefined" !== typeof cc && cc.sys && cc.sys.localStorage ? cc.sys.localStorage : window.localStorage
      } catch (GG) {}
      return SG || "undefined" === typeof globalThis.indexedDB || (SG = new yG), SG || (SG = {
        cache: {},
        setItem: function(GG, bG) {
          this.cache[GG] = bG
        },
        getItem: function(GG) {
          this.cache[GG]
        },
        removeItem: function(GG) {
          delete this.cache[GG]
        }
      }), SG
    }
    class yG {
      constructor() {
        this.dbPromise = new Promise((GG => {
          const bG = indexedDB.open("_colyseus_storage", 1);
          bG.onupgradeneeded = () => bG.result.createObjectStore("store"), bG.onsuccess = () => GG(bG.result)
        }))
      }
      tx(GG, bG) {
        return wG.__awaiter(this, void 0, void 0, (function*() {
          const ZG = (yield this.dbPromise).transaction("store", GG).objectStore("store");
          return bG(ZG)
        }))
      }
      setItem(GG, bG) {
        return this.tx("readwrite", (ZG => ZG.put(bG, GG))).then()
      }
      getItem(GG) {
        return wG.__awaiter(this, void 0, void 0, (function*() {
          const bG = yield this.tx("readonly", (bG => bG.get(GG)));
          return new Promise((GG => {
            bG.onsuccess = () => GG(bG.result)
          }))
        }))
      }
      removeItem(GG) {
        return this.tx("readwrite", (bG => bG.delete(GG))).then()
      }
    }
    bG.getItem = function(GG, bG) {
      const ZG = LG().getItem(GG);
      "undefined" !== typeof Promise && ZG instanceof Promise ? ZG.then((GG => bG(GG))) : bG(ZG)
    }, bG.removeItem = function(GG) {
      LG().removeItem(GG)
    }, bG.setItem = function(GG, bG) {
      LG().setItem(GG, bG)
    }
  },
  9184: (GG, bG) => {
    bG.createNanoEvents = () => ({
      emit(GG) {
        let bG = this.events[GG] || [];
        for (var ZG = arguments.length, wG = new Array(ZG > 1 ? ZG - 1 : 0), SG = 1; SG < ZG; SG++) wG[SG - 1] = arguments[SG];
        for (let LG = 0, yG = bG.length; LG < yG; LG++) bG[LG](...wG)
      },
      events: {},
      on(GG, bG) {
        var ZG;
        return (null === (ZG = this.events[GG]) || void 0 === ZG ? void 0 : ZG.push(bG)) || (this.events[GG] = [bG]), () => {
          var ZG;
          this.events[GG] = null === (ZG = this.events[GG]) || void 0 === ZG ? void 0 : ZG.filter((GG => bG !== GG))
        }
      }
    })
  },
  9190: (GG, bG) => {
    class ZG {
      constructor() {
        this.handlers = []
      }
      register(GG) {
        return this.handlers.push(GG), this
      }
      invoke() {
        for (var GG = arguments.length, bG = new Array(GG), ZG = 0; ZG < GG; ZG++) bG[ZG] = arguments[ZG];
        this.handlers.forEach((GG => GG.apply(this, bG)))
      }
      invokeAsync() {
        for (var GG = arguments.length, bG = new Array(GG), ZG = 0; ZG < GG; ZG++) bG[ZG] = arguments[ZG];
        return Promise.all(this.handlers.map((GG => GG.apply(this, bG))))
      }
      remove(GG) {
        const bG = this.handlers.indexOf(GG);
        this.handlers[bG] = this.handlers[this.handlers.length - 1], this.handlers.pop()
      }
      clear() {
        this.handlers = []
      }
    }
    bG.EventEmitter = ZG, bG.createSignal = function() {
      const GG = new ZG;

      function bG(bG) {
        return GG.register(bG, null === this)
      }
      return bG.once = bG => {
        const ZG = function() {
          for (var wG = arguments.length, SG = new Array(wG), LG = 0; LG < wG; LG++) SG[LG] = arguments[LG];
          bG.apply(this, SG), GG.remove(ZG)
        };
        GG.register(ZG)
      }, bG.remove = bG => GG.remove(bG), bG.invoke = function() {
        return GG.invoke(...arguments)
      }, bG.invokeAsync = function() {
        return GG.invokeAsync(...arguments)
      }, bG.clear = () => GG.clear(), bG
    }
  },
  9142: (GG, bG) => {
    var ZG;
    bG.CloseCode = void 0, (ZG = bG.CloseCode || (bG.CloseCode = {}))[ZG.CONSENTED = 4e3] = "CONSENTED", ZG[ZG.DEVMODE_RESTART = 4010] = "DEVMODE_RESTART";
    class wG extends Error {
      constructor(GG, bG) {
        super(bG), this.name = "ServerError", this.code = GG
      }
    }
    class SG extends Error {
      constructor(GG) {
        super(GG), this.name = "AbortError"
      }
    }
    bG.AbortError = SG, bG.ServerError = wG
  },
  9123: (GG, bG, ZG) => {
    ZG(9128);
    var wG = ZG(9130),
      SG = ZG(9176),
      LG = ZG(9151),
      yG = ZG(9225),
      kG = ZG(9142),
      UG = ZG(9198),
      YG = ZG(9241),
      VG = ZG(9182);
    VG.registerSerializer("schema", UG.YF), VG.registerSerializer("none", YG.NoneSerializer), bG.Client = wG.Client, bG.MatchMakeError = wG.MatchMakeError, Object.defineProperty(bG, "ErrorCode", {
      enumerable: !0,
      get: function() {
        return SG.ErrorCode
      }
    }), Object.defineProperty(bG, "Protocol", {
      enumerable: !0,
      get: function() {
        return SG.Protocol
      }
    }), bG.Ap = LG.Ap, bG.Auth = yG.Auth, bG.ServerError = kG.ServerError, bG.YF = UG.YF, bG.getStateCallbacks = UG.getStateCallbacks, bG.registerSerializer = VG.registerSerializer
  },
  9128: () => {
    ArrayBuffer.isView || (ArrayBuffer.isView = GG => null !== GG && "object" === typeof GG && GG.buffer instanceof ArrayBuffer), "undefined" === typeof globalThis && "undefined" !== typeof window && (window.globalThis = window), "undefined" === typeof FormData && (globalThis.FormData = class {})
  },
  9241: (GG, bG) => {
    bG.NoneSerializer = class {
      setState(GG) {}
      getState() {
        return null
      }
      patch(GG) {}
      teardown() {}
      handshake(GG) {}
    }
  },
  9198: (GG, bG, ZG) => {
    var wG = ZG(9157);
    bG.YF = class {
      setState(GG, bG) {
        this.GK.decode(GG, bG)
      }
      getState() {
        return this.state
      }
      patch(GG, bG) {
        return this.GK.decode(GG, bG)
      }
      teardown() {
        this.GK.root.clearRefs()
      }
      handshake(GG, bG) {
        this.state ? (wG.Reflection.decode(GG, bG), this.GK = new wG.Decoder(this.state)) : (this.GK = wG.Reflection.decode(GG, bG), this.state = this.GK.state)
      }
    }, bG.getStateCallbacks = function(GG) {
      try {
        return wG.getDecoderStateCallbacks(GG.dJ.GK)
      } catch (bG) {
        return
      }
    }
  },
  9182: (GG, bG) => {
    const ZG = {};
    bG.getSerializer = function(GG) {
      const bG = ZG[GG];
      if (!bG) throw new Error("missing serializer: " + GG);
      return bG
    }, bG.registerSerializer = function(GG, bG) {
      ZG[GG] = bG
    }
  },
  9155: (GG, bG, ZG) => {
    var wG = ZG(9136),
      SG = ZG(9157);
    bG.H3TransportTransport = class {
      constructor(GG) {
        this.events = GG, this.isOpen = !1, this.lengthPrefixBuffer = new Uint8Array(9)
      }
      connect(GG) {
        let bG = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        const ZG = bG.fingerprint && {
          serverCertificateHashes: [{
            algorithm: "sha-256",
            value: new Uint8Array(bG.fingerprint).buffer
          }]
        } || void 0;
        this.wt = new WebTransport(GG, ZG), this.wt.ready.then((GG => {
          console.log("WebTransport ready!", GG), this.isOpen = !0, this.unreliableReader = this.wt.datagrams.readable.getReader(), this.unreliableWriter = this.wt.datagrams.writable.getWriter();
          this.wt.incomingBidirectionalStreams.getReader().read().then((GG => {
            this.reader = GG.value.readable.getReader(), this.writer = GG.value.writable.getWriter(), this.sendSeatReservation(bG.room.roomId, bG.sessionId, bG.reconnectionToken), this.readIncomingData(), this.readIncomingUnreliableData()
          })).catch((GG => {
            console.error("failed to read incoming stream", GG), console.error("TODO: close the connection")
          }))
        })).catch((GG => {
          console.log("WebTransport not ready!", GG), this._close()
        })), this.wt.closed.then((GG => {
          console.log("WebTransport closed w/ success", GG), this.events.onclose({
            code: GG.closeCode,
            reason: GG.reason
          })
        })).catch((GG => {
          console.log("WebTransport closed w/ error", GG), this.events.onerror(GG), this.events.onclose({
            code: GG.closeCode,
            reason: GG.reason
          })
        })).finally((() => {
          this._close()
        }))
      }
      send(GG) {
        const bG = SG.encode.number(this.lengthPrefixBuffer, GG.length, {
            offset: 0
          }),
          ZG = new Uint8Array(bG + GG.length);
        ZG.set(this.lengthPrefixBuffer.subarray(0, bG), 0), ZG.set(GG, bG), this.writer.write(ZG)
      }
      sendUnreliable(GG) {
        const bG = SG.encode.number(this.lengthPrefixBuffer, GG.length, {
            offset: 0
          }),
          ZG = new Uint8Array(bG + GG.length);
        ZG.set(this.lengthPrefixBuffer.subarray(0, bG), 0), ZG.set(GG, bG), this.unreliableWriter.write(ZG)
      }
      close(GG, bG) {
        try {
          this.wt.close({
            closeCode: GG,
            reason: bG
          })
        } catch (ZG) {
          console.error(ZG)
        }
      }
      readIncomingData() {
        return wG.__awaiter(this, void 0, void 0, (function*() {
          let GG;
          for (; this.isOpen;) {
            try {
              GG = yield this.reader.read();
              const bG = GG.value,
                ZG = {
                  offset: 0
                };
              do {
                const GG = SG.decode.number(bG, ZG);
                this.events.onmessage({
                  data: bG.subarray(ZG.offset, ZG.offset + GG)
                }), ZG.offset += GG
              } while (ZG.offset < bG.length)
            } catch (bG) {
              -1 === bG.message.indexOf("session is closed") && console.error("H3Transport: failed to read incoming data", bG);
              break
            }
            if (GG.done) break
          }
        }))
      }
      readIncomingUnreliableData() {
        return wG.__awaiter(this, void 0, void 0, (function*() {
          let GG;
          for (; this.isOpen;) {
            try {
              GG = yield this.unreliableReader.read();
              const bG = GG.value,
                ZG = {
                  offset: 0
                };
              do {
                const GG = SG.decode.number(bG, ZG);
                this.events.onmessage({
                  data: bG.subarray(ZG.offset, ZG.offset + GG)
                }), ZG.offset += GG
              } while (ZG.offset < bG.length)
            } catch (bG) {
              -1 === bG.message.indexOf("session is closed") && console.error("H3Transport: failed to read incoming data", bG);
              break
            }
            if (GG.done) break
          }
        }))
      }
      sendSeatReservation(GG, bG, ZG) {
        const wG = {
            offset: 0
          },
          LG = [];
        SG.encode.string(LG, GG, wG), SG.encode.string(LG, bG, wG), ZG && SG.encode.string(LG, ZG, wG), this.writer.write(new Uint8Array(LG).buffer)
      }
      _close() {
        this.isOpen = !1
      }
    }
  },
  9165: (GG, bG, ZG) => {
    var wG = ZG(9171);
    const SG = globalThis.WebSocket || wG;
    bG.WebSocketTransport = class {
      constructor(GG) {
        this.events = GG
      }
      send(GG) {
        this.ws.send(GG)
      }
      sendUnreliable(GG) {
        console.warn("colyseus.js: The WebSocket transport does not support unreliable messages")
      }
      connect(GG, bG) {
        try {
          this.ws = new SG(GG, {
            headers: bG,
            protocols: this.protocols
          })
        } catch (ZG) {
          this.ws = new SG(GG, this.protocols)
        }
        this.ws.binaryType = "arraybuffer", this.ws.onopen = this.events.onopen, this.ws.onmessage = this.events.onmessage, this.ws.onclose = this.events.onclose, this.ws.onerror = this.events.onerror
      }
      close(GG, bG) {
        this.ws.close(GG, bG)
      }
      get isOpen() {
        return this.ws.readyState === SG.OPEN
      }
    }
  },
  9171: GG => {
    GG.exports = function() {
      throw new Error("ws does not work in the browser. Browser clients must use the native WebSocket object")
    }
  },
  9217: (GG, bG, ZG) => {
    function wG(GG, bG) {
      bG.headers = GG.headers || {}, bG.statusMessage = GG.statusText, bG.statusCode = GG.status, bG.data = GG.response
    }

    function SG(GG, bG, ZG) {
      return new Promise((function(SG, LG) {
        ZG = ZG || {};
        var yG, kG, UG, YG = new XMLHttpRequest,
          VG = ZG.body,
          pG = ZG.headers || {};
        for (yG in ZG.timeout && (YG.timeout = ZG.timeout), YG.ontimeout = YG.onerror = function(GG) {
            GG.timeout = "timeout" == GG.type, LG(GG)
          }, YG.onabort = function(GG) {
            GG.aborted = !0, LG(GG)
          }, YG.open(GG, bG.href || bG), YG.onload = function() {
            for (UG = YG.getAllResponseHeaders().trim().split(/[\r\n]+/), wG(YG, YG); kG = UG.shift();) kG = kG.split(": "), YG.headers[kG.shift().toLowerCase()] = kG.join(": ");
            if ((kG = YG.headers["content-type"]) && ~kG.indexOf("application/json")) try {
              YG.data = JSON.parse(YG.data, ZG.reviver)
            } catch (GG) {
              return wG(YG, GG), LG(GG)
            }(YG.status >= 400 ? LG : SG)(YG)
          }, typeof FormData < "u" && VG instanceof FormData || VG && "object" == typeof VG && (pG["content-type"] = "application/json", VG = JSON.stringify(VG)), YG.withCredentials = !!ZG.withCredentials, pG) YG.setRequestHeader(yG, pG[yG]);
        YG.send(VG), ZG.signal && ZG.signal.addEventListener("abort", (function() {
          YG.abort()
        }))
      }))
    }
    ZG.r(bG), ZG.d(bG, {
      del: () => UG,
      get: () => LG,
      patch: () => kG,
      post: () => yG,
      put: () => YG,
      send: () => SG
    });
    var LG = SG.bind(SG, "GET"),
      yG = SG.bind(SG, "POST"),
      kG = SG.bind(SG, "PATCH"),
      UG = SG.bind(SG, "DELETE"),
      YG = SG.bind(SG, "PUT")
  },
  9200: (GG, bG, ZG) => {
    var wG, SG, LG;
    ZG.r(bG), ZG.d(bG, {
      ALWAYS: () => Hb,
      C1: () => oG,
      DECIMAL_FIT: () => Db,
      DECIMAL_ROUND: () => tb,
      Decoder: () => Ub,
      Encoder: () => Rb,
      FLOAT32_OPTIONS: () => Qb,
      NEVER: () => Tb,
      Packr: () => lb,
      RESERVE_START_SPACE: () => xb,
      RESET_BUFFER_MODE: () => Ob,
      REUSE_BUFFER_MODE: () => Nb,
      Unpackr: () => mG,
      addExtension: () => sb,
      clearSource: () => yb,
      decode: () => fb,
      decodeIter: () => Bb,
      encode: () => eb,
      encodeIter: () => GZ,
      isNativeAccelerationEnabled: () => qG,
      mapsAsObjects: () => ZZ,
      pack: () => gb,
      roundFloat32: () => zb,
      unpack: () => Vb,
      unpackMultiple: () => pb,
      useRecords: () => bZ
    });
    try {
      wG = new TextDecoder
    } catch (wZ) {}
    var yG = 0;
    const kG = [];
    var UG, YG, VG, pG, fG, QG = kG,
      KG = 0,
      hG = {},
      dG = 0,
      JG = 0,
      rG = [],
      zG = {
        useRecords: !1,
        mapsAsObjects: !0
      };
    class EG {}
    const oG = new EG;
    oG.name = "MessagePack 0xC1";
    var XG, uG, iG, CG = !1,
      WG = 2;
    try {
      new Function("")
    } catch (wZ) {
      WG = 1 / 0
    }
    class mG {
      constructor(GG) {
        GG && (!1 === GG.useRecords && void 0 === GG.mapsAsObjects && (GG.mapsAsObjects = !0), GG.sequential && !1 !== GG.trusted && (GG.trusted = !0, GG.structures || 0 == GG.useRecords || (GG.structures = [], GG.maxSharedStructures || (GG.maxSharedStructures = 0))), GG.structures ? GG.structures.sharedLength = GG.structures.length : GG.getStructures && ((GG.structures = []).uninitialized = !0, GG.structures.sharedLength = 0), GG.int64AsNumber && (GG.int64AsType = "number")), Object.assign(this, GG)
      }
      unpack(GG, bG) {
        if (SG) return Lb((() => (yb(), this ? this.unpack(GG, bG) : mG.prototype.unpack.call(zG, GG, bG))));
        GG.buffer || GG.constructor !== ArrayBuffer || (GG = "undefined" !== typeof Buffer ? Buffer.from(GG) : new Uint8Array(GG)), "object" === typeof bG ? (LG = bG.end || GG.length, yG = bG.start || 0) : (yG = 0, LG = bG > -1 ? bG : GG.length), KG = 0, JG = 0, YG = null, QG = kG, VG = null, SG = GG;
        try {
          fG = GG.dataView || (GG.dataView = new DataView(GG.buffer, GG.byteOffset, GG.byteLength))
        } catch (wZ) {
          if (SG = null, GG instanceof Uint8Array) throw wZ;
          throw new Error("Source must be a Uint8Array or Buffer but was a " + (GG && "object" == typeof GG ? GG.constructor.name : typeof GG))
        }
        if (this instanceof mG) {
          if (hG = this, this.structures) return UG = this.structures, IG(bG);
          (!UG || UG.length > 0) && (UG = [])
        } else hG = zG, (!UG || UG.length > 0) && (UG = []);
        return IG(bG)
      }
      unpackMultiple(GG, bG) {
        let ZG, wG = 0;
        try {
          CG = !0;
          let SG = GG.length,
            LG = this ? this.unpack(GG, SG) : Yb.unpack(GG, SG);
          if (!bG) {
            for (ZG = [LG]; yG < SG;) wG = yG, ZG.push(IG());
            return ZG
          }
          if (!1 === bG(LG, wG, yG)) return;
          for (; yG < SG;)
            if (wG = yG, !1 === bG(IG(), wG, yG)) return
        } catch (wZ) {
          throw wZ.lastPosition = wG, wZ.values = ZG, wZ
        } finally {
          CG = !1, yb()
        }
      }
      _mergeStructures(GG, bG) {
        uG && (GG = uG.call(this, GG)), GG = GG || [], Object.isFrozen(GG) && (GG = GG.map((GG => GG.slice(0))));
        for (let ZG = 0, wG = GG.length; ZG < wG; ZG++) {
          let bG = GG[ZG];
          bG && (bG.isShared = !0, ZG >= 32 && (bG.highByte = ZG - 32 >> 5))
        }
        GG.sharedLength = GG.length;
        for (let ZG in bG || [])
          if (ZG >= 0) {
            let wG = GG[ZG],
              SG = bG[ZG];
            SG && (wG && ((GG.restoreStructures || (GG.restoreStructures = []))[ZG] = wG), GG[ZG] = SG)
          } return this.structures = GG
      }
      decode(GG, bG) {
        return this.unpack(GG, bG)
      }
    }

    function IG(GG) {
      try {
        if (!hG.trusted && !CG) {
          let GG = UG.sharedLength || 0;
          GG < UG.length && (UG.length = GG)
        }
        let bG;
        if (hG.randomAccessStructure && SG[yG] < 64 && SG[yG] >= 32 && XG ? (bG = XG(SG, yG, LG, hG), SG = null, GG && GG.lazy || !bG || (bG = bG.toJSON()), yG = LG) : bG = vG(), VG && (yG = VG.postBundlePosition, VG = null), CG && (UG.restoreStructures = null), yG == LG) UG && UG.restoreStructures && FG(), UG = null, SG = null, pG && (pG = null);
        else {
          if (yG > LG) throw new Error("Unexpected end of MessagePack data");
          if (!CG) {
            let GG;
            try {
              GG = JSON.stringify(bG, ((GG, bG) => "bigint" === typeof bG ? `${bG}n` : bG)).slice(0, 100)
            } catch (wZ) {
              GG = "(JSON view not available " + wZ + ")"
            }
            throw new Error("Data read, but end of buffer not reached " + GG)
          }
        }
        return bG
      } catch (wZ) {
        throw UG && UG.restoreStructures && FG(), yb(), (wZ instanceof RangeError || wZ.message.startsWith("Unexpected end of buffer") || yG > LG) && (wZ.incomplete = !0), wZ
      }
    }

    function FG() {
      for (let GG in UG.restoreStructures) UG[GG] = UG.restoreStructures[GG];
      UG.restoreStructures = null
    }

    function vG() {
      let GG = SG[yG++];
      if (GG < 160) {
        if (GG < 128) {
          if (GG < 64) return GG;
          {
            let bG = UG[63 & GG] || hG.getStructures && jG()[63 & GG];
            return bG ? (bG.read || (bG.read = cG(bG, 63 & GG)), bG.read()) : GG
          }
        }
        if (GG < 144) {
          if (GG -= 128, hG.mapsAsObjects) {
            let bG = {};
            for (let ZG = 0; ZG < GG; ZG++) {
              let GG = xG();
              "__proto__" === GG && (GG = "__proto_"), bG[GG] = vG()
            }
            return bG
          } {
            let bG = new Map;
            for (let ZG = 0; ZG < GG; ZG++) bG.set(vG(), vG());
            return bG
          }
        } {
          GG -= 144;
          let bG = new Array(GG);
          for (let ZG = 0; ZG < GG; ZG++) bG[ZG] = vG();
          return hG.freezeData ? Object.freeze(bG) : bG
        }
      }
      if (GG < 192) {
        let bG = GG - 160;
        if (JG >= yG) return YG.slice(yG - dG, (yG += bG) - dG);
        if (0 == JG && LG < 140) {
          let GG = bG < 16 ? HG(bG) : TG(bG);
          if (null != GG) return GG
        }
        return PG(bG)
      } {
        let bG;
        switch (GG) {
          case 192:
            return null;
          case 193:
            return VG ? (bG = vG(), bG > 0 ? VG[1].slice(VG.position1, VG.position1 += bG) : VG[0].slice(VG.position0, VG.position0 -= bG)) : oG;
          case 194:
            return !1;
          case 195:
            return !0;
          case 196:
            if (bG = SG[yG++], void 0 === bG) throw new Error("Unexpected end of buffer");
            return DG(bG);
          case 197:
            return bG = fG.getUint16(yG), yG += 2, DG(bG);
          case 198:
            return bG = fG.getUint32(yG), yG += 4, DG(bG);
          case 199:
            return NG(SG[yG++]);
          case 200:
            return bG = fG.getUint16(yG), yG += 2, NG(bG);
          case 201:
            return bG = fG.getUint32(yG), yG += 4, NG(bG);
          case 202:
            if (bG = fG.getFloat32(yG), hG.useFloat32 > 2) {
              let GG = kb[(127 & SG[yG]) << 1 | SG[yG + 1] >> 7];
              return yG += 4, (GG * bG + (bG > 0 ? .5 : -.5) | 0) / GG
            }
            return yG += 4, bG;
          case 203:
            return bG = fG.getFloat64(yG), yG += 8, bG;
          case 204:
            return SG[yG++];
          case 205:
            return bG = fG.getUint16(yG), yG += 2, bG;
          case 206:
            return bG = fG.getUint32(yG), yG += 4, bG;
          case 207:
            return "number" === hG.int64AsType ? (bG = 4294967296 * fG.getUint32(yG), bG += fG.getUint32(yG + 4)) : "string" === hG.int64AsType ? bG = fG.getBigUint64(yG).toString() : "auto" === hG.int64AsType ? (bG = fG.getBigUint64(yG), bG <= BigInt(2) << BigInt(52) && (bG = Number(bG))) : bG = fG.getBigUint64(yG), yG += 8, bG;
          case 208:
            return fG.getInt8(yG++);
          case 209:
            return bG = fG.getInt16(yG), yG += 2, bG;
          case 210:
            return bG = fG.getInt32(yG), yG += 4, bG;
          case 211:
            return "number" === hG.int64AsType ? (bG = 4294967296 * fG.getInt32(yG), bG += fG.getUint32(yG + 4)) : "string" === hG.int64AsType ? bG = fG.getBigInt64(yG).toString() : "auto" === hG.int64AsType ? (bG = fG.getBigInt64(yG), bG >= BigInt(-2) << BigInt(52) && bG <= BigInt(2) << BigInt(52) && (bG = Number(bG))) : bG = fG.getBigInt64(yG), yG += 8, bG;
          case 212:
            if (bG = SG[yG++], 114 == bG) return Gb(63 & SG[yG++]);
            {
              let GG = rG[bG];
              if (GG) return GG.read ? (yG++, GG.read(vG())) : GG.noBuffer ? (yG++, GG()) : GG(SG.subarray(yG, ++yG));
              throw new Error("Unknown extension " + bG)
            }
          case 213:
            return bG = SG[yG], 114 == bG ? (yG++, Gb(63 & SG[yG++], SG[yG++])) : NG(2);
          case 214:
            return NG(4);
          case 215:
            return NG(8);
          case 216:
            return NG(16);
          case 217:
            return bG = SG[yG++], JG >= yG ? YG.slice(yG - dG, (yG += bG) - dG) : MG(bG);
          case 218:
            return bG = fG.getUint16(yG), JG >= (yG += 2) ? YG.slice(yG - dG, (yG += bG) - dG) : AG(bG);
          case 219:
            return bG = fG.getUint32(yG), JG >= (yG += 4) ? YG.slice(yG - dG, (yG += bG) - dG) : sG(bG);
          case 220:
            return bG = fG.getUint16(yG), yG += 2, gG(bG);
          case 221:
            return bG = fG.getUint32(yG), yG += 4, gG(bG);
          case 222:
            return bG = fG.getUint16(yG), yG += 2, eG(bG);
          case 223:
            return bG = fG.getUint32(yG), yG += 4, eG(bG);
          default:
            if (GG >= 224) return GG - 256;
            if (void 0 === GG) {
              let GG = new Error("Unexpected end of MessagePack data");
              throw GG.incomplete = !0, GG
            }
            throw new Error("Unknown MessagePack token " + GG)
        }
      }
    }
    const aG = /^[a-zA-Z_$][a-zA-Z\d_$]*$/;

    function cG(GG, bG) {
      function ZG() {
        if (ZG.count++ > WG) {
          let ZG = GG.read = new Function("r", "return function(){return " + (hG.freezeData ? "Object.freeze" : "") + "({" + GG.map((GG => "__proto__" === GG ? "__proto_:r()" : aG.test(GG) ? GG + ":r()" : "[" + JSON.stringify(GG) + "]:r()")).join(",") + "})}")(vG);
          return 0 === GG.highByte && (GG.read = lG(bG, GG.read)), ZG()
        }
        let wG = {};
        for (let bG = 0, ZG = GG.length; bG < ZG; bG++) {
          let ZG = GG[bG];
          "__proto__" === ZG && (ZG = "__proto_"), wG[ZG] = vG()
        }
        return hG.freezeData ? Object.freeze(wG) : wG
      }
      return ZG.count = 0, 0 === GG.highByte ? lG(bG, ZG) : ZG
    }
    const lG = (GG, bG) => function() {
      let ZG = SG[yG++];
      if (0 === ZG) return bG();
      let wG = GG < 32 ? -(GG + (ZG << 5)) : GG + (ZG << 5),
        LG = UG[wG] || jG()[wG];
      if (!LG) throw new Error("Record id is not defined for " + wG);
      return LG.read || (LG.read = cG(LG, GG)), LG.read()
    };

    function jG() {
      let GG = Lb((() => (SG = null, hG.getStructures())));
      return UG = hG._mergeStructures(GG, UG)
    }
    var PG = nG,
      MG = nG,
      AG = nG,
      sG = nG;
    let qG = !1;

    function nG(GG) {
      let bG;
      if (GG < 16 && (bG = HG(GG))) return bG;
      if (GG > 64 && wG) return wG.decode(SG.subarray(yG, yG += GG));
      const ZG = yG + GG,
        LG = [];
      for (bG = ""; yG < ZG;) {
        const GG = SG[yG++];
        if (0 === (128 & GG)) LG.push(GG);
        else if (192 === (224 & GG)) {
          const bG = 63 & SG[yG++];
          LG.push((31 & GG) << 6 | bG)
        } else if (224 === (240 & GG)) {
          const bG = 63 & SG[yG++],
            ZG = 63 & SG[yG++];
          LG.push((31 & GG) << 12 | bG << 6 | ZG)
        } else if (240 === (248 & GG)) {
          let bG = (7 & GG) << 18 | (63 & SG[yG++]) << 12 | (63 & SG[yG++]) << 6 | 63 & SG[yG++];
          bG > 65535 && (bG -= 65536, LG.push(bG >>> 10 & 1023 | 55296), bG = 56320 | 1023 & bG), LG.push(bG)
        } else LG.push(GG);
        LG.length >= 4096 && (bG += RG.apply(String, LG), LG.length = 0)
      }
      return LG.length > 0 && (bG += RG.apply(String, LG)), bG
    }

    function gG(GG) {
      let bG = new Array(GG);
      for (let ZG = 0; ZG < GG; ZG++) bG[ZG] = vG();
      return hG.freezeData ? Object.freeze(bG) : bG
    }

    function eG(GG) {
      if (hG.mapsAsObjects) {
        let bG = {};
        for (let ZG = 0; ZG < GG; ZG++) {
          let GG = xG();
          "__proto__" === GG && (GG = "__proto_"), bG[GG] = vG()
        }
        return bG
      } {
        let bG = new Map;
        for (let ZG = 0; ZG < GG; ZG++) bG.set(vG(), vG());
        return bG
      }
    }
    var RG = String.fromCharCode;

    function TG(GG) {
      let bG = yG,
        ZG = new Array(GG);
      for (let wG = 0; wG < GG; wG++) {
        const GG = SG[yG++];
        if ((128 & GG) > 0) return void(yG = bG);
        ZG[wG] = GG
      }
      return RG.apply(String, ZG)
    }

    function HG(GG) {
      if (GG < 4) {
        if (GG < 2) {
          if (0 === GG) return "";
          {
            let GG = SG[yG++];
            return (128 & GG) > 1 ? void(yG -= 1) : RG(GG)
          }
        } {
          let bG = SG[yG++],
            ZG = SG[yG++];
          if ((128 & bG) > 0 || (128 & ZG) > 0) return void(yG -= 2);
          if (GG < 3) return RG(bG, ZG);
          let wG = SG[yG++];
          return (128 & wG) > 0 ? void(yG -= 3) : RG(bG, ZG, wG)
        }
      } {
        let bG = SG[yG++],
          ZG = SG[yG++],
          wG = SG[yG++],
          LG = SG[yG++];
        if ((128 & bG) > 0 || (128 & ZG) > 0 || (128 & wG) > 0 || (128 & LG) > 0) return void(yG -= 4);
        if (GG < 6) {
          if (4 === GG) return RG(bG, ZG, wG, LG);
          {
            let GG = SG[yG++];
            return (128 & GG) > 0 ? void(yG -= 5) : RG(bG, ZG, wG, LG, GG)
          }
        }
        if (GG < 8) {
          let kG = SG[yG++],
            UG = SG[yG++];
          if ((128 & kG) > 0 || (128 & UG) > 0) return void(yG -= 6);
          if (GG < 7) return RG(bG, ZG, wG, LG, kG, UG);
          let YG = SG[yG++];
          return (128 & YG) > 0 ? void(yG -= 7) : RG(bG, ZG, wG, LG, kG, UG, YG)
        } {
          let kG = SG[yG++],
            UG = SG[yG++],
            YG = SG[yG++],
            VG = SG[yG++];
          if ((128 & kG) > 0 || (128 & UG) > 0 || (128 & YG) > 0 || (128 & VG) > 0) return void(yG -= 8);
          if (GG < 10) {
            if (8 === GG) return RG(bG, ZG, wG, LG, kG, UG, YG, VG);
            {
              let GG = SG[yG++];
              return (128 & GG) > 0 ? void(yG -= 9) : RG(bG, ZG, wG, LG, kG, UG, YG, VG, GG)
            }
          }
          if (GG < 12) {
            let pG = SG[yG++],
              fG = SG[yG++];
            if ((128 & pG) > 0 || (128 & fG) > 0) return void(yG -= 10);
            if (GG < 11) return RG(bG, ZG, wG, LG, kG, UG, YG, VG, pG, fG);
            let QG = SG[yG++];
            return (128 & QG) > 0 ? void(yG -= 11) : RG(bG, ZG, wG, LG, kG, UG, YG, VG, pG, fG, QG)
          } {
            let pG = SG[yG++],
              fG = SG[yG++],
              QG = SG[yG++],
              KG = SG[yG++];
            if ((128 & pG) > 0 || (128 & fG) > 0 || (128 & QG) > 0 || (128 & KG) > 0) return void(yG -= 12);
            if (GG < 14) {
              if (12 === GG) return RG(bG, ZG, wG, LG, kG, UG, YG, VG, pG, fG, QG, KG);
              {
                let GG = SG[yG++];
                return (128 & GG) > 0 ? void(yG -= 13) : RG(bG, ZG, wG, LG, kG, UG, YG, VG, pG, fG, QG, KG, GG)
              }
            } {
              let hG = SG[yG++],
                dG = SG[yG++];
              if ((128 & hG) > 0 || (128 & dG) > 0) return void(yG -= 14);
              if (GG < 15) return RG(bG, ZG, wG, LG, kG, UG, YG, VG, pG, fG, QG, KG, hG, dG);
              let JG = SG[yG++];
              return (128 & JG) > 0 ? void(yG -= 15) : RG(bG, ZG, wG, LG, kG, UG, YG, VG, pG, fG, QG, KG, hG, dG, JG)
            }
          }
        }
      }
    }

    function tG() {
      let GG, bG = SG[yG++];
      if (bG < 192) GG = bG - 160;
      else switch (bG) {
        case 217:
          GG = SG[yG++];
          break;
        case 218:
          GG = fG.getUint16(yG), yG += 2;
          break;
        case 219:
          GG = fG.getUint32(yG), yG += 4;
          break;
        default:
          throw new Error("Expected string")
      }
      return nG(GG)
    }

    function DG(GG) {
      return hG.copyBuffers ? Uint8Array.prototype.slice.call(SG, yG, yG += GG) : SG.subarray(yG, yG += GG)
    }

    function NG(GG) {
      let bG = SG[yG++];
      if (rG[bG]) {
        let ZG;
        return rG[bG](SG.subarray(yG, ZG = yG += GG), (GG => {
          yG = GG;
          try {
            return vG()
          } finally {
            yG = ZG
          }
        }))
      }
      throw new Error("Unknown extension type " + bG)
    }
    var OG = new Array(4096);

    function xG() {
      let GG = SG[yG++];
      if (!(GG >= 160 && GG < 192)) return yG--, BG(vG());
      if (GG -= 160, JG >= yG) return YG.slice(yG - dG, (yG += GG) - dG);
      if (!(0 == JG && LG < 180)) return PG(GG);
      let bG, ZG = 4095 & (GG << 5 ^ (GG > 1 ? fG.getUint16(yG) : GG > 0 ? SG[yG] : 0)),
        wG = OG[ZG],
        kG = yG,
        UG = yG + GG - 3,
        VG = 0;
      if (wG && wG.bytes == GG) {
        for (; kG < UG;) {
          if (bG = fG.getUint32(kG), bG != wG[VG++]) {
            kG = 1879048192;
            break
          }
          kG += 4
        }
        for (UG += 3; kG < UG;)
          if (bG = SG[kG++], bG != wG[VG++]) {
            kG = 1879048192;
            break
          } if (kG === UG) return yG = kG, wG.string;
        UG -= 3, kG = yG
      }
      for (wG = [], OG[ZG] = wG, wG.bytes = GG; kG < UG;) bG = fG.getUint32(kG), wG.push(bG), kG += 4;
      for (UG += 3; kG < UG;) bG = SG[kG++], wG.push(bG);
      let pG = GG < 16 ? HG(GG) : TG(GG);
      return wG.string = null != pG ? pG : PG(GG)
    }

    function BG(GG) {
      if ("string" === typeof GG) return GG;
      if ("number" === typeof GG || "boolean" === typeof GG || "bigint" === typeof GG) return GG.toString();
      if (null == GG) return GG + "";
      if (hG.allowArraysInMapKeys && Array.isArray(GG) && GG.flat().every((GG => ["string", "number", "boolean", "bigint"].includes(typeof GG)))) return GG.flat().toString();
      throw new Error("Invalid property type for record: " + typeof GG)
    }
    const Gb = (GG, bG) => {
      let ZG = vG().map(BG),
        wG = GG;
      void 0 !== bG && (GG = GG < 32 ? -((bG << 5) + GG) : (bG << 5) + GG, ZG.highByte = bG);
      let SG = UG[GG];
      return SG && (SG.isShared || CG) && ((UG.restoreStructures || (UG.restoreStructures = []))[GG] = SG), UG[GG] = ZG, ZG.read = cG(ZG, wG), ZG.read()
    };
    rG[0] = () => {}, rG[0].noBuffer = !0, rG[66] = GG => {
      let bG = GG.length,
        ZG = BigInt(128 & GG[0] ? GG[0] - 256 : GG[0]);
      for (let wG = 1; wG < bG; wG++) ZG <<= BigInt(8), ZG += BigInt(GG[wG]);
      return ZG
    };
    let bb = {
      Error: Error,
      TypeError: TypeError,
      ReferenceError: ReferenceError
    };
    rG[101] = () => {
      let GG = vG();
      return (bb[GG[0]] || Error)(GG[1], {
        cause: GG[2]
      })
    }, rG[105] = GG => {
      if (!1 === hG.structuredClone) throw new Error("Structured clone extension is disabled");
      let bG = fG.getUint32(yG - 4);
      pG || (pG = new Map);
      let ZG, wG = SG[yG];
      ZG = wG >= 144 && wG < 160 || 220 == wG || 221 == wG ? [] : {};
      let LG = {
        target: ZG
      };
      pG.set(bG, LG);
      let kG = vG();
      return LG.used ? Object.assign(ZG, kG) : (LG.target = kG, kG)
    }, rG[112] = GG => {
      if (!1 === hG.structuredClone) throw new Error("Structured clone extension is disabled");
      let bG = fG.getUint32(yG - 4),
        ZG = pG.get(bG);
      return ZG.used = !0, ZG.target
    }, rG[115] = () => new Set(vG());
    const Zb = ["Int8", "Uint8", "Uint8Clamped", "Int16", "Uint16", "Int32", "Uint32", "Float32", "Float64", "BigInt64", "BigUint64"].map((GG => GG + "Array"));
    let wb = "object" === typeof globalThis ? globalThis : window;
    rG[116] = GG => {
      let bG = GG[0],
        ZG = Zb[bG];
      if (!ZG) {
        if (16 === bG) {
          let bG = new ArrayBuffer(GG.length - 1);
          return new Uint8Array(bG).set(GG.subarray(1)), bG
        }
        throw new Error("Could not find typed array for code " + bG)
      }
      return new wb[ZG](Uint8Array.prototype.slice.call(GG, 1).buffer)
    }, rG[120] = () => {
      let GG = vG();
      return new RegExp(GG[0], GG[1])
    };
    const Sb = [];

    function Lb(GG) {
      iG && iG();
      let bG = LG,
        ZG = yG,
        wG = KG,
        kG = dG,
        rG = JG,
        zG = YG,
        EG = QG,
        oG = pG,
        XG = VG,
        uG = new Uint8Array(SG.slice(0, LG)),
        WG = UG,
        mG = UG.slice(0, UG.length),
        IG = hG,
        FG = CG,
        vG = GG();
      return LG = bG, yG = ZG, KG = wG, dG = kG, JG = rG, YG = zG, QG = EG, pG = oG, VG = XG, SG = uG, CG = FG, (UG = WG).splice(0, UG.length, ...mG), hG = IG, fG = new DataView(SG.buffer, SG.byteOffset, SG.byteLength), vG
    }

    function yb() {
      SG = null, pG = null, UG = null
    }
    rG[98] = GG => {
      let bG = (GG[0] << 24) + (GG[1] << 16) + (GG[2] << 8) + GG[3],
        ZG = yG;
      return yG += bG - GG.length, VG = Sb, (VG = [tG(), tG()]).position0 = 0, VG.position1 = 0, VG.postBundlePosition = yG, yG = ZG, vG()
    }, rG[255] = GG => 4 == GG.length ? new Date(1e3 * (16777216 * GG[0] + (GG[1] << 16) + (GG[2] << 8) + GG[3])) : 8 == GG.length ? new Date(((GG[0] << 22) + (GG[1] << 14) + (GG[2] << 6) + (GG[3] >> 2)) / 1e6 + 1e3 * (4294967296 * (3 & GG[3]) + 16777216 * GG[4] + (GG[5] << 16) + (GG[6] << 8) + GG[7])) : 12 == GG.length ? new Date(((GG[0] << 24) + (GG[1] << 16) + (GG[2] << 8) + GG[3]) / 1e6 + 1e3 * ((128 & GG[4] ? -281474976710656 : 0) + 1099511627776 * GG[6] + 4294967296 * GG[7] + 16777216 * GG[8] + (GG[9] << 16) + (GG[10] << 8) + GG[11])) : new Date("invalid");
    const kb = new Array(147);
    for (let SZ = 0; SZ < 256; SZ++) kb[SZ] = +("1e" + Math.floor(45.15 - .30103 * SZ));
    const Ub = mG;
    var Yb = new mG({
      useRecords: !1
    });
    const Vb = Yb.unpack,
      pb = Yb.unpackMultiple,
      fb = Yb.unpack,
      Qb = {
        NEVER: 0,
        ALWAYS: 1,
        DECIMAL_ROUND: 3,
        DECIMAL_FIT: 4
      };
    let Kb, hb, db, Jb = new Float32Array(1),
      rb = new Uint8Array(Jb.buffer, 0, 4);

    function zb(GG) {
      Jb[0] = GG;
      let bG = kb[(127 & rb[3]) << 1 | rb[2] >> 7];
      return (bG * GG + (GG > 0 ? .5 : -.5) | 0) / bG
    }
    try {
      Kb = new TextEncoder
    } catch (wZ) {}
    const Eb = "undefined" !== typeof Buffer,
      ob = Eb ? function(GG) {
        return Buffer.allocUnsafeSlow(GG)
      } : Uint8Array,
      Xb = Eb ? Buffer : Uint8Array,
      ub = Eb ? 4294967296 : 2144337920;
    let ib, Cb, Wb, mb, Ib, Fb = 0,
      vb = null;
    const ab = /[\u0080-\uFFFF]/,
      cb = Symbol("record-id");
    class lb extends mG {
      constructor(GG) {
        let bG, ZG, wG, SG;
        super(GG), this.offset = 0;
        let LG = Xb.prototype.utf8Write ? function(GG, bG) {
            return ib.utf8Write(GG, bG, ib.byteLength - bG)
          } : !(!Kb || !Kb.encodeInto) && function(GG, bG) {
            return Kb.encodeInto(GG, ib.subarray(bG)).written
          },
          yG = this;
        GG || (GG = {});
        let kG = GG && GG.sequential,
          UG = GG.structures || GG.saveStructures,
          YG = GG.maxSharedStructures;
        if (null == YG && (YG = UG ? 32 : 0), YG > 8160) throw new Error("Maximum maxSharedStructure is 8160");
        GG.structuredClone && void 0 == GG.moreTypes && (this.moreTypes = !0);
        let VG = GG.maxOwnStructures;
        null == VG && (VG = UG ? 32 : 64), this.structures || 0 == GG.useRecords || (this.structures = []);
        let pG = YG > 32 || VG + YG > 64,
          fG = YG + 64,
          QG = YG + VG + 64;
        if (QG > 8256) throw new Error("Maximum maxSharedStructure + maxOwnStructure is 8192");
        let KG = [],
          hG = 0,
          dG = 0;
        this.pack = this.encode = function(GG, LG) {
          if (ib || (ib = new ob(8192), Wb = ib.dataView || (ib.dataView = new DataView(ib.buffer, 0, 8192)), Fb = 0), mb = ib.length - 10, mb - Fb < 2048 ? (ib = new ob(ib.length), Wb = ib.dataView || (ib.dataView = new DataView(ib.buffer, 0, ib.length)), mb = ib.length - 10, Fb = 0) : Fb = Fb + 7 & 2147483640, bG = Fb, LG & xb && (Fb += 255 & LG), SG = yG.structuredClone ? new Map : null, yG.bundleStrings && "string" !== typeof GG ? (vb = [], vb.size = 1 / 0) : vb = null, wG = yG.structures, wG) {
            wG.uninitialized && (wG = yG._mergeStructures(yG.getStructures()));
            let GG = wG.sharedLength || 0;
            if (GG > YG) throw new Error("Shared structures is larger than maximum shared structures, try increasing maxSharedStructures to " + wG.sharedLength);
            if (!wG.transitions) {
              wG.transitions = Object.create(null);
              for (let bG = 0; bG < GG; bG++) {
                let GG = wG[bG];
                if (!GG) continue;
                let ZG, SG = wG.transitions;
                for (let bG = 0, wG = GG.length; bG < wG; bG++) {
                  let wG = GG[bG];
                  ZG = SG[wG], ZG || (ZG = SG[wG] = Object.create(null)), SG = ZG
                }
                SG[cb] = bG + 64
              }
              this.lastNamedStructuresLength = GG
            }
            kG || (wG.nextId = GG + 64)
          }
          let UG;
          ZG && (ZG = !1);
          try {
            yG.randomAccessStructure && GG && GG.constructor && GG.constructor === Object ? mG(GG) : zG(GG);
            let ZG = vb;
            if (vb && Ab(bG, zG, 0), SG && SG.idsToInsert) {
              let GG = SG.idsToInsert.sort(((GG, bG) => GG.offset > bG.offset ? 1 : -1)),
                wG = GG.length,
                LG = -1;
              for (; ZG && wG > 0;) {
                let SG = GG[--wG].offset + bG;
                SG < ZG.stringsPosition + bG && -1 === LG && (LG = 0), SG > ZG.position + bG ? LG >= 0 && (LG += 6) : (LG >= 0 && (Wb.setUint32(ZG.position + bG, Wb.getUint32(ZG.position + bG) + LG), LG = -1), ZG = ZG.previous, wG++)
              }
              LG >= 0 && ZG && Wb.setUint32(ZG.position + bG, Wb.getUint32(ZG.position + bG) + LG), Fb += 6 * GG.length, Fb > mb && iG(Fb), yG.offset = Fb;
              let kG = function(GG, bG) {
                let ZG, wG = 6 * bG.length,
                  SG = GG.length - wG;
                for (; ZG = bG.pop();) {
                  let bG = ZG.offset,
                    LG = ZG.id;
                  GG.copyWithin(bG + wG, bG, SG), wG -= 6;
                  let yG = bG + wG;
                  GG[yG++] = 214, GG[yG++] = 105, GG[yG++] = LG >> 24, GG[yG++] = LG >> 16 & 255, GG[yG++] = LG >> 8 & 255, GG[yG++] = 255 & LG, SG = bG
                }
                return GG
              }(ib.subarray(bG, Fb), GG);
              return SG = null, kG
            }
            return yG.offset = Fb, LG & Nb ? (ib.start = bG, ib.end = Fb, ib) : ib.subarray(bG, Fb)
          } catch (wZ) {
            throw UG = wZ, wZ
          } finally {
            if (wG && (JG(), ZG && yG.saveStructures)) {
              let ZG = wG.sharedLength || 0,
                SG = ib.subarray(bG, Fb),
                kG = qb(wG, yG);
              if (!UG) return !1 === yG.saveStructures(kG, kG.isCompatible) ? yG.pack(GG, LG) : (yG.lastNamedStructuresLength = ZG, ib.length > 1073741824 && (ib = null), SG)
            }
            ib.length > 1073741824 && (ib = null), LG & Ob && (Fb = bG)
          }
        };
        const JG = () => {
            dG < 10 && dG++;
            let GG = wG.sharedLength || 0;
            if (wG.length > GG && !kG && (wG.length = GG), hG > 1e4) wG.transitions = null, dG = 0, hG = 0, KG.length > 0 && (KG = []);
            else if (KG.length > 0 && !kG) {
              for (let GG = 0, bG = KG.length; GG < bG; GG++) KG[GG][cb] = 0;
              KG = []
            }
          },
          rG = GG => {
            var bG = GG.length;
            bG < 16 ? ib[Fb++] = 144 | bG : bG < 65536 ? (ib[Fb++] = 220, ib[Fb++] = bG >> 8, ib[Fb++] = 255 & bG) : (ib[Fb++] = 221, Wb.setUint32(Fb, bG), Fb += 4);
            for (let ZG = 0; ZG < bG; ZG++) zG(GG[ZG])
          },
          zG = GG => {
            Fb > mb && (ib = iG(Fb));
            var ZG, wG = typeof GG;
            if ("string" === wG) {
              let wG, SG = GG.length;
              if (vb && SG >= 4 && SG < 4096) {
                if ((vb.size += SG) > 21760) {
                  let GG, ZG, wG = (vb[0] ? 3 * vb[0].length + vb[1].length : 0) + 10;
                  Fb + wG > mb && (ib = iG(Fb + wG)), vb.position ? (ZG = vb, ib[Fb] = 200, Fb += 3, ib[Fb++] = 98, GG = Fb - bG, Fb += 4, Ab(bG, zG, 0), Wb.setUint16(GG + bG - 3, Fb - bG - GG)) : (ib[Fb++] = 214, ib[Fb++] = 98, GG = Fb - bG, Fb += 4), vb = ["", ""], vb.previous = ZG, vb.size = 0, vb.position = GG
                }
                let ZG = ab.test(GG);
                return vb[ZG ? 0 : 1] += GG, ib[Fb++] = 193, void zG(ZG ? -SG : SG)
              }
              wG = SG < 32 ? 1 : SG < 256 ? 2 : SG < 65536 ? 3 : 5;
              let yG = 3 * SG;
              if (Fb + yG > mb && (ib = iG(Fb + yG)), SG < 64 || !LG) {
                let bG, LG, yG, kG = Fb + wG;
                for (bG = 0; bG < SG; bG++) LG = GG.charCodeAt(bG), LG < 128 ? ib[kG++] = LG : LG < 2048 ? (ib[kG++] = LG >> 6 | 192, ib[kG++] = 63 & LG | 128) : 55296 === (64512 & LG) && 56320 === (64512 & (yG = GG.charCodeAt(bG + 1))) ? (LG = 65536 + ((1023 & LG) << 10) + (1023 & yG), bG++, ib[kG++] = LG >> 18 | 240, ib[kG++] = LG >> 12 & 63 | 128, ib[kG++] = LG >> 6 & 63 | 128, ib[kG++] = 63 & LG | 128) : (ib[kG++] = LG >> 12 | 224, ib[kG++] = LG >> 6 & 63 | 128, ib[kG++] = 63 & LG | 128);
                ZG = kG - Fb - wG
              } else ZG = LG(GG, Fb + wG);
              ZG < 32 ? ib[Fb++] = 160 | ZG : ZG < 256 ? (wG < 2 && ib.copyWithin(Fb + 2, Fb + 1, Fb + 1 + ZG), ib[Fb++] = 217, ib[Fb++] = ZG) : ZG < 65536 ? (wG < 3 && ib.copyWithin(Fb + 3, Fb + 2, Fb + 2 + ZG), ib[Fb++] = 218, ib[Fb++] = ZG >> 8, ib[Fb++] = 255 & ZG) : (wG < 5 && ib.copyWithin(Fb + 5, Fb + 3, Fb + 3 + ZG), ib[Fb++] = 219, Wb.setUint32(Fb, ZG), Fb += 4), Fb += ZG
            } else if ("number" === wG)
              if (GG >>> 0 === GG) GG < 32 || GG < 128 && !1 === this.useRecords || GG < 64 && !this.randomAccessStructure ? ib[Fb++] = GG : GG < 256 ? (ib[Fb++] = 204, ib[Fb++] = GG) : GG < 65536 ? (ib[Fb++] = 205, ib[Fb++] = GG >> 8, ib[Fb++] = 255 & GG) : (ib[Fb++] = 206, Wb.setUint32(Fb, GG), Fb += 4);
              else if ((GG | 0) === GG) GG >= -32 ? ib[Fb++] = 256 + GG : GG >= -128 ? (ib[Fb++] = 208, ib[Fb++] = GG + 256) : GG >= -32768 ? (ib[Fb++] = 209, Wb.setInt16(Fb, GG), Fb += 2) : (ib[Fb++] = 210, Wb.setInt32(Fb, GG), Fb += 4);
            else {
              let bG;
              if ((bG = this.useFloat32) > 0 && GG < 4294967296 && GG >= -2147483648) {
                let ZG;
                if (ib[Fb++] = 202, Wb.setFloat32(Fb, GG), bG < 4 || ((ZG = GG * kb[(127 & ib[Fb]) << 1 | ib[Fb + 1] >> 7]) | 0) === ZG) return void(Fb += 4);
                Fb--
              }
              ib[Fb++] = 203, Wb.setFloat64(Fb, GG), Fb += 8
            } else if ("object" === wG || "function" === wG)
              if (GG) {
                if (SG) {
                  let ZG = SG.get(GG);
                  if (ZG) {
                    if (!ZG.id) {
                      let GG = SG.idsToInsert || (SG.idsToInsert = []);
                      ZG.id = GG.push(ZG)
                    }
                    return ib[Fb++] = 214, ib[Fb++] = 112, Wb.setUint32(Fb, ZG.id), void(Fb += 4)
                  }
                  SG.set(GG, {
                    offset: Fb - bG
                  })
                }
                let LG = GG.constructor;
                if (LG === Object) uG(GG);
                else if (LG === Array) rG(GG);
                else if (LG === Map)
                  if (this.mapAsEmptyObject) ib[Fb++] = 128;
                  else {
                    (ZG = GG.size) < 16 ? ib[Fb++] = 128 | ZG : ZG < 65536 ? (ib[Fb++] = 222, ib[Fb++] = ZG >> 8, ib[Fb++] = 255 & ZG) : (ib[Fb++] = 223, Wb.setUint32(Fb, ZG), Fb += 4);
                    for (let [bG, ZG] of GG) zG(bG), zG(ZG)
                  }
                else {
                  for (let bG = 0, ZG = hb.length; bG < ZG; bG++) {
                    if (GG instanceof db[bG]) {
                      let ZG = hb[bG];
                      if (ZG.write) {
                        ZG.type && (ib[Fb++] = 212, ib[Fb++] = ZG.type, ib[Fb++] = 0);
                        let bG = ZG.write.call(this, GG);
                        return void(bG === GG ? Array.isArray(GG) ? rG(GG) : uG(GG) : zG(bG))
                      }
                      let wG, SG = ib,
                        LG = Wb,
                        yG = Fb;
                      ib = null;
                      try {
                        wG = ZG.pack.call(this, GG, (GG => (ib = SG, SG = null, Fb += GG, Fb > mb && iG(Fb), {
                          target: ib,
                          targetView: Wb,
                          position: Fb - GG
                        })), zG)
                      } finally {
                        SG && (ib = SG, Wb = LG, Fb = yG, mb = ib.length - 10)
                      }
                      return void(wG && (wG.length + Fb > mb && iG(wG.length + Fb), Fb = Mb(wG, ib, Fb, ZG.type)))
                    }
                  }
                  if (Array.isArray(GG)) rG(GG);
                  else {
                    if (GG.toJSON) {
                      const bG = GG.toJSON();
                      if (bG !== GG) return zG(bG)
                    }
                    if ("function" === wG) return zG(this.writeFunction && this.writeFunction(GG));
                    uG(GG)
                  }
                }
              } else ib[Fb++] = 192;
            else if ("boolean" === wG) ib[Fb++] = GG ? 195 : 194;
            else if ("bigint" === wG) {
              if (GG < BigInt(1) << BigInt(63) && GG >= -(BigInt(1) << BigInt(63))) ib[Fb++] = 211, Wb.setBigInt64(Fb, GG);
              else if (GG < BigInt(1) << BigInt(64) && GG > 0) ib[Fb++] = 207, Wb.setBigUint64(Fb, GG);
              else {
                if (!this.largeBigIntToFloat) {
                  if (this.largeBigIntToString) return zG(GG.toString());
                  if (this.useBigIntExtension && GG < BigInt(2) ** BigInt(1023) && GG > -(BigInt(2) ** BigInt(1023))) {
                    ib[Fb++] = 199, Fb++, ib[Fb++] = 66;
                    let bG, ZG = [];
                    do {
                      let wG = GG & BigInt(255);
                      bG = (wG & BigInt(128)) === (GG < BigInt(0) ? BigInt(128) : BigInt(0)), ZG.push(wG), GG >>= BigInt(8)
                    } while (GG !== BigInt(0) && GG !== BigInt(-1) || !bG);
                    ib[Fb - 2] = ZG.length;
                    for (let GG = ZG.length; GG > 0;) ib[Fb++] = Number(ZG[--GG]);
                    return
                  }
                  throw new RangeError(GG + " was too large to fit in MessagePack 64-bit integer format, use useBigIntExtension, or set largeBigIntToFloat to convert to float-64, or set largeBigIntToString to convert to string")
                }
                ib[Fb++] = 203, Wb.setFloat64(Fb, Number(GG))
              }
              Fb += 8
            } else {
              if ("undefined" !== wG) throw new Error("Unknown type: " + wG);
              this.encodeUndefinedAsNil ? ib[Fb++] = 192 : (ib[Fb++] = 212, ib[Fb++] = 0, ib[Fb++] = 0)
            }
          },
          EG = this.variableMapSize || this.coercibleKeyAsNumber || this.skipValues ? GG => {
            let bG;
            if (this.skipValues) {
              bG = [];
              for (let ZG in GG) "function" === typeof GG.hasOwnProperty && !GG.hasOwnProperty(ZG) || this.skipValues.includes(GG[ZG]) || bG.push(ZG)
            } else bG = Object.keys(GG);
            let ZG, wG = bG.length;
            if (wG < 16 ? ib[Fb++] = 128 | wG : wG < 65536 ? (ib[Fb++] = 222, ib[Fb++] = wG >> 8, ib[Fb++] = 255 & wG) : (ib[Fb++] = 223, Wb.setUint32(Fb, wG), Fb += 4), this.coercibleKeyAsNumber)
              for (let SG = 0; SG < wG; SG++) {
                ZG = bG[SG];
                let wG = Number(ZG);
                zG(isNaN(wG) ? ZG : wG), zG(GG[ZG])
              } else
                for (let SG = 0; SG < wG; SG++) zG(ZG = bG[SG]), zG(GG[ZG])
          } : GG => {
            ib[Fb++] = 222;
            let ZG = Fb - bG;
            Fb += 2;
            let wG = 0;
            for (let bG in GG)("function" !== typeof GG.hasOwnProperty || GG.hasOwnProperty(bG)) && (zG(bG), zG(GG[bG]), wG++);
            if (wG > 65535) throw new Error('Object is too large to serialize with fast 16-bit map size, use the "variableMapSize" option to serialize this object');
            ib[ZG++ + bG] = wG >> 8, ib[ZG + bG] = 255 & wG
          },
          oG = !1 === this.useRecords ? EG : GG.progressiveRecords && !pG ? GG => {
            let ZG, SG, LG = wG.transitions || (wG.transitions = Object.create(null)),
              yG = Fb++ - bG;
            for (let kG in GG)
              if ("function" !== typeof GG.hasOwnProperty || GG.hasOwnProperty(kG)) {
                if (ZG = LG[kG], ZG) LG = ZG;
                else {
                  let UG = Object.keys(GG),
                    YG = LG;
                  LG = wG.transitions;
                  let VG = 0;
                  for (let GG = 0, bG = UG.length; GG < bG; GG++) {
                    let bG = UG[GG];
                    ZG = LG[bG], ZG || (ZG = LG[bG] = Object.create(null), VG++), LG = ZG
                  }
                  yG + bG + 1 == Fb ? (Fb--, CG(LG, UG, VG)) : WG(LG, UG, yG, VG), SG = !0, LG = YG[kG]
                }
                zG(GG[kG])
              } if (!SG) {
              let ZG = LG[cb];
              ZG ? ib[yG + bG] = ZG : WG(LG, Object.keys(GG), yG, 0)
            }
          } : GG => {
            let bG, ZG = wG.transitions || (wG.transitions = Object.create(null)),
              SG = 0;
            for (let wG in GG)("function" !== typeof GG.hasOwnProperty || GG.hasOwnProperty(wG)) && (bG = ZG[wG], bG || (bG = ZG[wG] = Object.create(null), SG++), ZG = bG);
            let LG = ZG[cb];
            LG ? LG >= 96 && pG ? (ib[Fb++] = 96 + (31 & (LG -= 96)), ib[Fb++] = LG >> 5) : ib[Fb++] = LG : CG(ZG, ZG.__keys__ || Object.keys(GG), SG);
            for (let wG in GG)("function" !== typeof GG.hasOwnProperty || GG.hasOwnProperty(wG)) && zG(GG[wG])
          },
          XG = "function" == typeof this.useRecords && this.useRecords,
          uG = XG ? GG => {
            XG(GG) ? oG(GG) : EG(GG)
          } : oG,
          iG = GG => {
            let ZG;
            if (GG > 16777216) {
              if (GG - bG > ub) throw new Error("Packed buffer would be larger than maximum buffer size");
              ZG = Math.min(ub, 4096 * Math.round(Math.max((GG - bG) * (GG > 67108864 ? 1.25 : 2), 4194304) / 4096))
            } else ZG = 1 + (Math.max(GG - bG << 2, ib.length - 1) >> 12) << 12;
            let wG = new ob(ZG);
            return Wb = wG.dataView || (wG.dataView = new DataView(wG.buffer, 0, ZG)), GG = Math.min(GG, ib.length), ib.copy ? ib.copy(wG, 0, bG, GG) : wG.set(ib.slice(bG, GG)), Fb -= bG, bG = 0, mb = wG.length - 10, ib = wG
          },
          CG = (GG, bG, SG) => {
            let LG = wG.nextId;
            LG || (LG = 64), LG < fG && this.shouldShareStructure && !this.shouldShareStructure(bG) ? (LG = wG.nextOwnId, LG < QG || (LG = fG), wG.nextOwnId = LG + 1) : (LG >= QG && (LG = fG), wG.nextId = LG + 1);
            let yG = bG.highByte = LG >= 96 && pG ? LG - 96 >> 5 : -1;
            GG[cb] = LG, GG.__keys__ = bG, wG[LG - 64] = bG, LG < fG ? (bG.isShared = !0, wG.sharedLength = LG - 63, ZG = !0, yG >= 0 ? (ib[Fb++] = 96 + (31 & LG), ib[Fb++] = yG) : ib[Fb++] = LG) : (yG >= 0 ? (ib[Fb++] = 213, ib[Fb++] = 114, ib[Fb++] = 96 + (31 & LG), ib[Fb++] = yG) : (ib[Fb++] = 212, ib[Fb++] = 114, ib[Fb++] = LG), SG && (hG += dG * SG), KG.length >= VG && (KG.shift()[cb] = 0), KG.push(GG), zG(bG))
          },
          WG = (GG, ZG, wG, SG) => {
            let LG = ib,
              yG = Fb,
              kG = mb,
              UG = bG;
            ib = Cb, Fb = 0, bG = 0, ib || (Cb = ib = new ob(8192)), mb = ib.length - 10, CG(GG, ZG, SG), Cb = ib;
            let YG = Fb;
            if (ib = LG, Fb = yG, mb = kG, bG = UG, YG > 1) {
              let GG = Fb + YG - 1;
              GG > mb && iG(GG);
              let ZG = wG + bG;
              ib.copyWithin(ZG + YG, ZG + 1, Fb), ib.set(Cb.slice(0, YG), ZG), Fb = GG
            } else ib[wG + bG] = Cb[0]
          },
          mG = GG => {
            let SG = Ib(GG, ib, bG, Fb, wG, iG, ((GG, bG, wG) => {
              if (wG) return ZG = !0;
              Fb = bG;
              let SG = ib;
              return zG(GG), JG(), SG !== ib ? {
                position: Fb,
                targetView: Wb,
                target: ib
              } : Fb
            }), this);
            if (0 === SG) return uG(GG);
            Fb = SG
          }
      }
      useBuffer(GG) {
        ib = GG, Wb = ib.dataView || (ib.dataView = new DataView(ib.buffer, ib.byteOffset, ib.byteLength)), Fb = 0
      }
      set position(GG) {
        Fb = GG
      }
      get position() {
        return Fb
      }
      set buffer(GG) {
        ib = GG
      }
      get buffer() {
        return ib
      }
      clearSharedData() {
        this.structures && (this.structures = []), this.typedStructs && (this.typedStructs = [])
      }
    }

    function jb(GG, bG, ZG, wG) {
      let SG = GG.byteLength;
      if (SG + 1 < 256) {
        var {
          target: LG,
          position: yG
        } = ZG(4 + SG);
        LG[yG++] = 199, LG[yG++] = SG + 1
      } else if (SG + 1 < 65536) {
        var {
          target: LG,
          position: yG
        } = ZG(5 + SG);
        LG[yG++] = 200, LG[yG++] = SG + 1 >> 8, LG[yG++] = SG + 1 & 255
      } else {
        var {
          target: LG,
          position: yG,
          targetView: kG
        } = ZG(7 + SG);
        LG[yG++] = 201, kG.setUint32(yG, SG + 1), yG += 4
      }
      LG[yG++] = 116, LG[yG++] = bG, GG.buffer || (GG = new Uint8Array(GG)), LG.set(new Uint8Array(GG.buffer, GG.byteOffset, GG.byteLength), yG)
    }

    function Pb(GG, bG) {
      let ZG = GG.byteLength;
      var wG, SG;
      if (ZG < 256) {
        var {
          target: wG,
          position: SG
        } = bG(ZG + 2);
        wG[SG++] = 196, wG[SG++] = ZG
      } else if (ZG < 65536) {
        var {
          target: wG,
          position: SG
        } = bG(ZG + 3);
        wG[SG++] = 197, wG[SG++] = ZG >> 8, wG[SG++] = 255 & ZG
      } else {
        var {
          target: wG,
          position: SG,
          targetView: LG
        } = bG(ZG + 5);
        wG[SG++] = 198, LG.setUint32(SG, ZG), SG += 4
      }
      wG.set(GG, SG)
    }

    function Mb(GG, bG, ZG, wG) {
      let SG = GG.length;
      switch (SG) {
        case 1:
          bG[ZG++] = 212;
          break;
        case 2:
          bG[ZG++] = 213;
          break;
        case 4:
          bG[ZG++] = 214;
          break;
        case 8:
          bG[ZG++] = 215;
          break;
        case 16:
          bG[ZG++] = 216;
          break;
        default:
          SG < 256 ? (bG[ZG++] = 199, bG[ZG++] = SG) : SG < 65536 ? (bG[ZG++] = 200, bG[ZG++] = SG >> 8, bG[ZG++] = 255 & SG) : (bG[ZG++] = 201, bG[ZG++] = SG >> 24, bG[ZG++] = SG >> 16 & 255, bG[ZG++] = SG >> 8 & 255, bG[ZG++] = 255 & SG)
      }
      return bG[ZG++] = wG, bG.set(GG, ZG), ZG += SG
    }

    function Ab(GG, bG, ZG) {
      if (vb.length > 0) {
        Wb.setUint32(vb.position + GG, Fb + ZG - vb.position - GG), vb.stringsPosition = Fb - GG;
        let wG = vb;
        vb = null, bG(wG[0]), bG(wG[1])
      }
    }

    function sb(GG) {
      if (GG.Class) {
        if (!GG.pack && !GG.write) throw new Error("Extension has no pack or write function");
        if (GG.pack && !GG.type) throw new Error("Extension has no type (numeric code to identify the extension)");
        db.unshift(GG.Class), hb.unshift(GG)
      }! function(GG) {
        GG.unpack ? rG[GG.type] = GG.unpack : rG[GG.type] = GG
      }(GG)
    }

    function qb(GG, bG) {
      return GG.isCompatible = GG => {
        let ZG = !GG || (bG.lastNamedStructuresLength || 0) === GG.length;
        return ZG || bG._mergeStructures(GG), ZG
      }, GG
    }
    db = [Date, Set, Error, RegExp, ArrayBuffer, Object.getPrototypeOf(Uint8Array.prototype).constructor, EG], hb = [{
      pack(GG, bG, ZG) {
        let wG = GG.getTime() / 1e3;
        if ((this.useTimestamp32 || 0 === GG.getMilliseconds()) && wG >= 0 && wG < 4294967296) {
          let {
            target: GG,
            targetView: ZG,
            position: SG
          } = bG(6);
          GG[SG++] = 214, GG[SG++] = 255, ZG.setUint32(SG, wG)
        } else if (wG > 0 && wG < 4294967296) {
          let {
            target: ZG,
            targetView: SG,
            position: LG
          } = bG(10);
          ZG[LG++] = 215, ZG[LG++] = 255, SG.setUint32(LG, 4e6 * GG.getMilliseconds() + (wG / 1e3 / 4294967296 | 0)), SG.setUint32(LG + 4, wG)
        } else if (isNaN(wG)) {
          if (this.onInvalidDate) return bG(0), ZG(this.onInvalidDate());
          let {
            target: GG,
            targetView: wG,
            position: SG
          } = bG(3);
          GG[SG++] = 212, GG[SG++] = 255, GG[SG++] = 255
        } else {
          let {
            target: ZG,
            targetView: SG,
            position: LG
          } = bG(15);
          ZG[LG++] = 199, ZG[LG++] = 12, ZG[LG++] = 255, SG.setUint32(LG, 1e6 * GG.getMilliseconds()), SG.setBigInt64(LG + 4, BigInt(Math.floor(wG)))
        }
      }
    }, {
      pack(GG, bG, ZG) {
        if (this.setAsEmptyObject) return bG(0), ZG({});
        let wG = Array.from(GG),
          {
            target: SG,
            position: LG
          } = bG(this.moreTypes ? 3 : 0);
        this.moreTypes && (SG[LG++] = 212, SG[LG++] = 115, SG[LG++] = 0), ZG(wG)
      }
    }, {
      pack(GG, bG, ZG) {
        let {
          target: wG,
          position: SG
        } = bG(this.moreTypes ? 3 : 0);
        this.moreTypes && (wG[SG++] = 212, wG[SG++] = 101, wG[SG++] = 0), ZG([GG.name, GG.message, GG.cause])
      }
    }, {
      pack(GG, bG, ZG) {
        let {
          target: wG,
          position: SG
        } = bG(this.moreTypes ? 3 : 0);
        this.moreTypes && (wG[SG++] = 212, wG[SG++] = 120, wG[SG++] = 0), ZG([GG.source, GG.flags])
      }
    }, {
      pack(GG, bG) {
        this.moreTypes ? jb(GG, 16, bG) : Pb(Eb ? Buffer.from(GG) : new Uint8Array(GG), bG)
      }
    }, {
      pack(GG, bG) {
        let ZG = GG.constructor;
        ZG !== Xb && this.moreTypes ? jb(GG, Zb.indexOf(ZG.name), bG) : Pb(GG, bG)
      }
    }, {
      pack(GG, bG) {
        let {
          target: ZG,
          position: wG
        } = bG(1);
        ZG[wG] = 193
      }
    }];
    let nb = new lb({
      useRecords: !1
    });
    const gb = nb.pack,
      eb = nb.pack,
      Rb = lb,
      {
        NEVER: Tb,
        ALWAYS: Hb,
        DECIMAL_ROUND: tb,
        DECIMAL_FIT: Db
      } = Qb,
      Nb = 512,
      Ob = 1024,
      xb = 2048;
    const Bb = function(GG) {
        let bG = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        if (!GG || "object" !== typeof GG) throw new Error("first argument must be an Iterable, Async Iterable, Iterator, Async Iterator, or a promise");
        const ZG = new mG(bG);
        let wG;
        const SG = GG => {
          let bG;
          wG && (GG = Buffer.concat([wG, GG]), wG = void 0);
          try {
            bG = ZG.unpackMultiple(GG)
          } catch (SG) {
            if (!SG.incomplete) throw SG;
            wG = GG.slice(SG.lastPosition), bG = SG.values
          }
          return bG
        };
        return "function" === typeof GG[Symbol.iterator] ? function*() {
          for (const bG of GG) yield* SG(bG)
        }() : "function" === typeof GG[Symbol.asyncIterator] ? async function*() {
          for await (const bG of GG) yield* SG(bG)
        }(): void 0
      },
      GZ = function(GG) {
        let bG = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        if (GG && "object" === typeof GG) {
          if ("function" === typeof GG[Symbol.iterator]) return function*(GG, bG) {
            const ZG = new lb(bG);
            for (const wG of GG) yield ZG.pack(wG)
          }(GG, bG);
          if ("function" === typeof GG.then || "function" === typeof GG[Symbol.asyncIterator]) return async function*(GG, bG) {
            const ZG = new lb(bG);
            for await (const wG of GG) yield ZG.pack(wG)
          }(GG, bG);
          throw new Error("first argument must be an Iterable, Async Iterable, Iterator, Async Iterator, or a Promise")
        }
        throw new Error("first argument must be an Iterable, Async Iterable, or a Promise for an Async Iterable")
      },
      bZ = !1,
      ZZ = !0
  },
  9157: (GG, bG, ZG) => {
    ZG.r(bG), ZG.d(bG, {
      $changes: () => hG,
      $childType: () => dG,
      $decoder: () => VG,
      $deleteByIndex: () => QG,
      $encoder: () => YG,
      $filter: () => pG,
      $getByIndex: () => fG,
      $numFields: () => WG,
      $refId: () => kG,
      $track: () => UG,
      $values: () => oG,
      ArraySchema: () => Zw,
      Callbacks: () => wS,
      ChangeTree: () => FZ,
      CollectionSchema: () => Lw,
      Decoder: () => Dw,
      Encoder: () => Rw,
      FieldBuilder: () => Uw,
      MapSchema: () => Sw,
      Metadata: () => tb,
      OPERATION: () => SG,
      Reflection: () => Bw,
      ReflectionField: () => Ow,
      ReflectionType: () => xw,
      Root: () => vw,
      Schema: () => Iw,
      SetSchema: () => yw,
      StateCallbackStrategy: () => ZS,
      StateView: () => Mw,
      StreamSchema: () => kw,
      TypeContext: () => qb,
      createPool: () => LS,
      decode: () => zb,
      decodeKeyValueOperation: () => NZ,
      decodeSchemaOperation: () => DZ,
      defineCustomTypes: () => ub,
      defineTypes: () => Cw,
      deprecated: () => uw,
      dumpChanges: () => mw,
      encode: () => bb,
      encodeArray: () => AZ,
      encodeIndexedEntry: () => PZ,
      encodeKeyValueOperation: () => MZ,
      encodeMapEntry: () => jZ,
      encodeSchemaOperation: () => lZ,
      SK: () => hw,
      fullStateOnly: () => zw,
      getDecoderStateCallbacks: () => GS,
      getEncodeDescriptor: () => GZ,
      getRawChangesCallback: () => bS,
      isBuilder: () => Yw,
      patchOnly: () => rw,
      registerType: () => Xb,
      schema: () => Ww,
      t: () => Qw,
      type: () => Ew,
      unreliable: () => Jw,
      view: () => dw
    });
    const wG = 255;
    var SG;

    function LG(GG) {
      Object.defineProperty(GG, Symbol.metadata, {
        value: void 0,
        writable: !0,
        configurable: !0,
        enumerable: !1
      })
    }! function(GG) {
      GG[GG.ADD = 128] = "ADD", GG[GG.REPLACE = 0] = "REPLACE", GG[GG.DELETE = 64] = "DELETE", GG[GG.DELETE_AND_MOVE = 96] = "DELETE_AND_MOVE", GG[GG.MOVE_AND_ADD = 160] = "MOVE_AND_ADD", GG[GG.DELETE_AND_ADD = 192] = "DELETE_AND_ADD", GG[GG.CLEAR = 10] = "CLEAR", GG[GG.REVERSE = 15] = "REVERSE", GG[GG.MOVE = 32] = "MOVE", GG[GG.DELETE_BY_REFID = 33] = "DELETE_BY_REFID", GG[GG.ADD_BY_REFID = 129] = "ADD_BY_REFID"
    }(SG || (SG = {})), Symbol.metadata ??= Symbol.for("Symbol.metadata");
    const yG = "undefined" !== typeof globalThis ? globalThis : "undefined" !== typeof global ? global : "undefined" !== typeof self ? self : "undefined" !== typeof window ? window : {};
    if ("function" === typeof Symbol && "function" !== typeof Symbol.for) {
      const GG = "colyseus.symbolRegistry",
        bG = yG[GG] || (yG[GG] = Object.create(null));
      Symbol.for = function(GG) {
        return bG[GG] || (bG[GG] = Symbol(GG))
      }, Symbol.keyFor = function(GG) {
        for (const ZG in bG)
          if (bG[ZG] === GG) return ZG
      }
    }
    const kG = Symbol.for("$refId"),
      UG = "~track",
      YG = "~encoder",
      VG = "~decoder",
      pG = "~filter",
      fG = "~getByIndex",
      QG = "~deleteByIndex",
      KG = "~resyncPrune",
      hG = Symbol.for("$changes"),
      dG = Symbol.for("$childType"),
      JG = Symbol.for("$proxyTarget"),
      rG = "~onEncodeEnd",
      zG = "~reset",
      EG = "~onDecodeEnd",
      oG = Symbol.for("$values"),
      XG = "~builder",
      uG = "~descriptors",
      iG = "~__encodeDescriptor",
      CG = "~encoders",
      WG = "~__numFields",
      mG = "~__refTypeFieldIndexes",
      IG = "~__viewFieldIndexes",
      FG = "$__fieldIndexesByViewTag",
      vG = "~__unreliableFieldIndexes",
      aG = "~__patchOnlyFieldIndexes",
      cG = "~__fullSyncSkipIndexes",
      lG = "~__fullStateOnlyFieldIndexes",
      jG = "~__streamFieldIndexes",
      PG = "~__streamPriorities";
    let MG;
    try {
      MG = new TextEncoder
    } catch (yS) {}
    const AG = new ArrayBuffer(8),
      sG = new Int32Array(AG),
      qG = new Float32Array(AG),
      nG = new Float64Array(AG),
      gG = new BigInt64Array(AG),
      eG = "undefined" !== typeof Buffer && Buffer.byteLength ? Buffer.byteLength : function(GG, bG) {
        for (var ZG = 0, wG = 0, SG = 0, LG = GG.length; SG < LG; SG++)(ZG = GG.charCodeAt(SG)) < 128 ? wG += 1 : ZG < 2048 ? wG += 2 : ZG < 55296 || ZG >= 57344 ? wG += 3 : (SG++, wG += 4);
        return wG
      };

    function RG(GG, bG, ZG) {
      for (var wG = 0, SG = 0, LG = bG.length; SG < LG; SG++)(wG = bG.charCodeAt(SG)) < 128 ? GG[ZG.offset++] = wG : wG < 2048 ? (GG[ZG.offset] = 192 | wG >> 6, GG[ZG.offset + 1] = 128 | 63 & wG, ZG.offset += 2) : wG < 55296 || wG >= 57344 ? (GG[ZG.offset] = 224 | wG >> 12, GG[ZG.offset + 1] = 128 | wG >> 6 & 63, GG[ZG.offset + 2] = 128 | 63 & wG, ZG.offset += 3) : (SG++, wG = 65536 + ((1023 & wG) << 10 | 1023 & bG.charCodeAt(SG)), GG[ZG.offset] = 240 | wG >> 18, GG[ZG.offset + 1] = 128 | wG >> 12 & 63, GG[ZG.offset + 2] = 128 | wG >> 6 & 63, GG[ZG.offset + 3] = 128 | 63 & wG, ZG.offset += 4)
    }

    function TG(GG, bG, ZG) {
      GG[ZG.offset++] = 255 & bG
    }

    function HG(GG, bG, ZG) {
      GG[ZG.offset++] = 255 & bG, GG[ZG.offset++] = bG >> 8 & 255
    }

    function tG(GG, bG, ZG) {
      GG[ZG.offset++] = 255 & bG, GG[ZG.offset++] = bG >> 8 & 255
    }

    function DG(GG, bG, ZG) {
      GG[ZG.offset++] = 255 & bG, GG[ZG.offset++] = bG >> 8 & 255, GG[ZG.offset++] = bG >> 16 & 255, GG[ZG.offset++] = bG >> 24 & 255
    }

    function NG(GG, bG, ZG) {
      const wG = bG >> 24,
        SG = bG >> 16,
        LG = bG >> 8,
        yG = bG;
      GG[ZG.offset++] = 255 & yG, GG[ZG.offset++] = 255 & LG, GG[ZG.offset++] = 255 & SG, GG[ZG.offset++] = 255 & wG
    }

    function OG(GG, bG, ZG) {
      const wG = Math.floor(bG / Math.pow(2, 32));
      NG(GG, bG >>> 0, ZG), NG(GG, wG, ZG)
    }

    function xG(GG, bG, ZG) {
      const wG = bG / Math.pow(2, 32) | 0;
      NG(GG, bG >>> 0, ZG), NG(GG, wG, ZG)
    }

    function BG(GG, bG, ZG) {
      qG[0] = bG, DG(GG, sG[0], ZG)
    }

    function Gb(GG, bG, ZG) {
      nG[0] = bG, DG(GG, sG[0], ZG), DG(GG, sG[1], ZG)
    }
    const bb = {
        int8: TG,
        uint8: function(GG, bG, ZG) {
          GG[ZG.offset++] = 255 & bG
        },
        int16: HG,
        uint16: tG,
        int32: DG,
        uint32: NG,
        int64: OG,
        uint64: xG,
        bigint64: function(GG, bG, ZG) {
          gG[0] = BigInt.asIntN(64, bG), DG(GG, sG[0], ZG), DG(GG, sG[1], ZG)
        },
        biguint64: function(GG, bG, ZG) {
          gG[0] = BigInt.asIntN(64, bG), DG(GG, sG[0], ZG), DG(GG, sG[1], ZG)
        },
        float32: BG,
        float64: Gb,
        boolean: function(GG, bG, ZG) {
          GG[ZG.offset++] = bG ? 1 : 0
        },
        string: function(GG, bG, ZG) {
          bG || (bG = "");
          let wG = eG(bG, "utf8"),
            SG = 0;
          if (wG < 32) GG[ZG.offset++] = 160 | wG, SG = 1;
          else if (wG < 256) GG[ZG.offset++] = 217, GG[ZG.offset++] = wG, SG = 2;
          else if (wG < 65536) GG[ZG.offset++] = 218, tG(GG, wG, ZG), SG = 3;
          else {
            if (!(wG < 4294967296)) throw new Error("String too long");
            GG[ZG.offset++] = 219, NG(GG, wG, ZG), SG = 5
          }
          return RG(GG, bG, ZG), SG + wG
        },
        number: function GG(bG, ZG, wG) {
          return isNaN(ZG) ? GG(bG, 0, wG) : isFinite(ZG) ? ZG !== (0 | ZG) ? Math.abs(ZG) <= 34028235e31 && (qG[0] = ZG, Math.abs(Math.abs(qG[0]) - Math.abs(ZG)) < 1e-4) ? (bG[wG.offset++] = 202, BG(bG, ZG, wG), 5) : (bG[wG.offset++] = 203, Gb(bG, ZG, wG), 9) : ZG >= 0 ? ZG < 128 ? (bG[wG.offset++] = 255 & ZG, 1) : ZG < 256 ? (bG[wG.offset++] = 204, bG[wG.offset++] = 255 & ZG, 2) : ZG < 65536 ? (bG[wG.offset++] = 205, tG(bG, ZG, wG), 3) : ZG < 4294967296 ? (bG[wG.offset++] = 206, NG(bG, ZG, wG), 5) : (bG[wG.offset++] = 207, xG(bG, ZG, wG), 9) : ZG >= -32 ? (bG[wG.offset++] = 224 | ZG + 32, 1) : ZG >= -128 ? (bG[wG.offset++] = 208, TG(bG, ZG, wG), 2) : ZG >= -32768 ? (bG[wG.offset++] = 209, HG(bG, ZG, wG), 3) : ZG >= -2147483648 ? (bG[wG.offset++] = 210, DG(bG, ZG, wG), 5) : (bG[wG.offset++] = 211, OG(bG, ZG, wG), 9) : GG(bG, ZG > 0 ? Number.MAX_SAFE_INTEGER : -Number.MAX_SAFE_INTEGER, wG)
        },
        utf8Write: RG,
        utf8Length: eG
      },
      Zb = new ArrayBuffer(8),
      wb = new Int32Array(Zb),
      Sb = new Float32Array(Zb),
      Lb = new Float64Array(Zb),
      yb = new BigUint64Array(Zb),
      kb = new BigInt64Array(Zb);

    function Ub(GG, bG, ZG) {
      ZG > GG.length - bG.offset && (ZG = GG.length - bG.offset);
      for (var wG = "", SG = 0, LG = bG.offset, yG = bG.offset + ZG; LG < yG; LG++) {
        var kG = GG[LG];
        if (0 !== (128 & kG))
          if (192 !== (224 & kG))
            if (224 !== (240 & kG)) {
              if (240 !== (248 & kG)) {
                console.error("decode.utf8Read(): Invalid byte " + kG + " at offset " + LG + ". Skip to end of string: " + (bG.offset + ZG));
                break
              }(SG = (7 & kG) << 18 | (63 & GG[++LG]) << 12 | (63 & GG[++LG]) << 6 | 63 & GG[++LG]) >= 65536 ? (SG -= 65536, wG += String.fromCharCode(55296 + (SG >>> 10), 56320 + (1023 & SG))) : wG += String.fromCharCode(SG)
            } else wG += String.fromCharCode((15 & kG) << 12 | (63 & GG[++LG]) << 6 | 63 & GG[++LG]);
        else wG += String.fromCharCode((31 & kG) << 6 | 63 & GG[++LG]);
        else wG += String.fromCharCode(kG)
      }
      return bG.offset += ZG, wG
    }

    function Yb(GG, bG) {
      return Vb(GG, bG) << 24 >> 24
    }

    function Vb(GG, bG) {
      return GG[bG.offset++]
    }

    function pb(GG, bG) {
      return fb(GG, bG) << 16 >> 16
    }

    function fb(GG, bG) {
      return GG[bG.offset++] | GG[bG.offset++] << 8
    }

    function Qb(GG, bG) {
      return GG[bG.offset++] | GG[bG.offset++] << 8 | GG[bG.offset++] << 16 | GG[bG.offset++] << 24
    }

    function Kb(GG, bG) {
      return Qb(GG, bG) >>> 0
    }

    function hb(GG, bG) {
      return wb[0] = Qb(GG, bG), Sb[0]
    }

    function db(GG, bG) {
      return wb[0] = Qb(GG, bG), wb[1] = Qb(GG, bG), Lb[0]
    }

    function Jb(GG, bG) {
      const ZG = Kb(GG, bG);
      return Qb(GG, bG) * Math.pow(2, 32) + ZG
    }

    function rb(GG, bG) {
      const ZG = Kb(GG, bG);
      return Kb(GG, bG) * Math.pow(2, 32) + ZG
    }
    const zb = {
        utf8Read: Ub,
        int8: Yb,
        uint8: Vb,
        int16: pb,
        uint16: fb,
        int32: Qb,
        uint32: Kb,
        float32: hb,
        float64: db,
        int64: Jb,
        uint64: rb,
        bigint64: function(GG, bG) {
          return wb[0] = Qb(GG, bG), wb[1] = Qb(GG, bG), kb[0]
        },
        biguint64: function(GG, bG) {
          return wb[0] = Qb(GG, bG), wb[1] = Qb(GG, bG), yb[0]
        },
        boolean: function(GG, bG) {
          return Vb(GG, bG) > 0
        },
        string: function(GG, bG) {
          const ZG = GG[bG.offset++];
          let wG;
          return ZG < 192 ? wG = 31 & ZG : 217 === ZG ? wG = Vb(GG, bG) : 218 === ZG ? wG = fb(GG, bG) : 219 === ZG && (wG = Kb(GG, bG)), Ub(GG, bG, wG)
        },
        number: function(GG, bG) {
          const ZG = GG[bG.offset++];
          return ZG < 128 ? ZG : 202 === ZG ? hb(GG, bG) : 203 === ZG ? db(GG, bG) : 204 === ZG ? Vb(GG, bG) : 205 === ZG ? fb(GG, bG) : 206 === ZG ? Kb(GG, bG) : 207 === ZG ? rb(GG, bG) : 208 === ZG ? Yb(GG, bG) : 209 === ZG ? pb(GG, bG) : 210 === ZG ? Qb(GG, bG) : 211 === ZG ? Jb(GG, bG) : ZG > 223 ? -1 * (255 - ZG + 1) : void 0
        },
        stringCheck: function(GG, bG) {
          const ZG = GG[bG.offset];
          return ZG < 192 && ZG > 160 || 217 === ZG || 218 === ZG || 219 === ZG
        }
      },
      Eb = {},
      ob = new Map;

    function Xb(GG, bG) {
      bG.constructor && (Object.prototype.hasOwnProperty.call(bG, "constructor") && null == bG.constructor[Symbol.metadata] && LG(bG.constructor), ob.set(bG.constructor, GG), Eb[GG] = bG), bG.encode && (bb[GG] = bG.encode), bG.decode && (zb[GG] = bG.decode)
    }

    function ub(GG) {
      for (const bG in GG) Xb(bG, GG[bG]);
      return GG => Ew(GG)
    }
    const ib = "ArraySchema does not support streaming \u2014 positional ops (splice / unshift / reverse) shift subsequent indexes, so holding ADDs back for a later tick under `maxPerTick` would desync the decoder. Use `t.stream(X)` (stable monotonic positions) or `t.map(X).stream()` (stable keys) instead.";

    function Cb() {
      return {
        pendingByView: new Map,
        sentByView: new Map,
        broadcastPending: new Set,
        sentBroadcast: new Set,
        broadcastDeletes: new Set,
        maxPerTick: 32
      }
    }

    function Wb(GG) {
      return GG._stream ??= Cb()
    }

    function mb(GG, bG, ZG) {
      0 === bG.activeViews.size && Wb(GG).broadcastPending.add(ZG)
    }

    function Ib(GG, bG, ZG, wG) {
      const LG = GG._stream;
      if (void 0 === LG) return !0;
      let yG = !1;
      return LG.broadcastPending.delete(wG) ? yG = !0 : LG.sentBroadcast.delete(wG) && LG.broadcastDeletes.add(wG), bG.forEachActiveView((GG => {
        const bG = LG.pendingByView.get(GG.id);
        if (bG?.has(wG)) return bG.delete(wG), void(yG = !0);
        const kG = LG.sentByView.get(GG.id);
        if (kG?.has(wG)) {
          kG.delete(wG);
          let bG = GG.changes.get(ZG);
          void 0 === bG && (bG = new Map, GG.changes.set(ZG, bG)), bG.set(wG, SG.DELETE)
        }
      })), yG
    }

    function Fb(GG, bG) {
      const ZG = GG._stream?.pendingByView;
      if (void 0 === ZG) return !1;
      for (const [wG, SG] of ZG)
        if (SG.size > 0 && void 0 !== bG.activeViews.get(wG)?.deref()) return !0;
      return !1
    }

    function vb(GG) {
      const bG = GG._stream;
      return void 0 !== bG && (bG.broadcastPending.size > 0 || bG.broadcastDeletes.size > 0)
    }

    function ab(GG, bG, ZG) {
      const wG = Wb(GG);
      let SG = wG.pendingByView.get(bG);
      void 0 === SG && (SG = new Set, wG.pendingByView.set(bG, SG)), SG.add(ZG)
    }

    function cb(GG, bG) {
      const ZG = GG._stream;
      void 0 !== ZG && (ZG.pendingByView.delete(bG), ZG.sentByView.delete(bG), ZG.priorityByView?.delete(bG))
    }
    const lb = {
      8: "uint8",
      16: "uint16",
      32: "uint32"
    };

    function jb(GG) {
      if (null == GG || "object" !== typeof GG) throw new Error("t.quantized(): options object with { min, max } is required.");
      const {
        min: bG,
        max: ZG
      } = GG;
      if ("number" !== typeof bG || "number" !== typeof ZG || !(ZG > bG) || !Number.isFinite(bG) || !Number.isFinite(ZG)) throw new Error(`t.quantized(): require finite min < max (got min=${bG}, max=${ZG}).`);
      const wG = GG.bits ?? 16;
      if (8 !== wG && 16 !== wG && 32 !== wG) throw new Error(`t.quantized(): bits must be 8, 16 or 32 (got ${wG}).`);
      const SG = GG.mode ?? "clamp";
      if ("clamp" !== SG && "wrap" !== SG) throw new Error(`t.quantized(): mode must be "clamp" or "wrap" (got ${JSON.stringify(SG)}).`);
      const LG = "wrap" === SG,
        yG = Math.pow(2, wG);
      return {
        min: bG,
        max: ZG,
        bits: wG,
        wrap: LG,
        wire: lb[wG],
        range: ZG - bG,
        span: LG ? yG : bG === -ZG ? yG - 2 : yG - 1
      }
    }

    function Pb(GG) {
      return null !== GG && "object" === typeof GG && void 0 !== GG.quantized
    }

    function Mb(GG, bG) {
      if (GG.wrap) {
        if (!Number.isFinite(bG)) return 0;
        const ZG = GG.range;
        let wG = (bG - GG.min) % ZG;
        wG < 0 && (wG += ZG);
        const SG = GG.span;
        return Math.floor(wG / ZG * SG + .5) % SG
      }
      if (bG !== bG) return 0;
      const ZG = bG < GG.min ? GG.min : bG > GG.max ? GG.max : bG;
      return Math.floor((ZG - GG.min) / GG.range * GG.span + .5)
    }

    function Ab(GG, bG) {
      return GG.min + bG / GG.span * GG.range
    }

    function sb(GG) {
      const bG = bb[GG.wire];
      return (ZG, wG, SG) => bG(ZG, Mb(GG, wG), SG)
    }
    class qb {
      types = {};
      schemas = new Map;
      hasFilters = !1;
      static inheritedTypes = new WeakMap;
      static cachedContexts = new WeakMap;
      static register(GG) {
        const bG = Object.getPrototypeOf(GG);
        if (bG !== Iw) {
          let ZG = qb.inheritedTypes.get(bG);
          ZG || (ZG = new Set, qb.inheritedTypes.set(bG, ZG)), ZG.add(GG)
        }
      }
      static cache(GG) {
        let bG = qb.cachedContexts.get(GG);
        return bG || (bG = new qb(GG), qb.cachedContexts.set(GG, bG)), bG
      }
      constructor(GG) {
        GG && this.discoverTypes(GG)
      }
      has(GG) {
        return this.schemas.has(GG)
      }
      get(GG) {
        return this.types[GG]
      }
      add(GG) {
        let bG = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.schemas.size;
        return !this.schemas.has(GG) && (this.types[bG] = GG, null == GG[Symbol.metadata] && tb.initialize(GG), this.schemas.set(GG, bG), !0)
      }
      getTypeId(GG) {
        return this.schemas.get(GG)
      }
      discoverTypes(GG) {
        if (!this.add(GG)) return;
        qb.inheritedTypes.get(GG)?.forEach((GG => {
          this.discoverTypes(GG)
        }));
        let bG = GG;
        for (;
          (bG = Object.getPrototypeOf(bG)) && bG !== Iw && bG !== Function.prototype;) this.discoverTypes(bG);
        const ZG = GG[Symbol.metadata];
        (ZG[IG] || ZG[jG]) && (this.hasFilters = !0);
        for (const wG in ZG) {
          const GG = ZG[wG].type;
          if ("string" !== typeof GG && !Pb(GG))
            if ("function" === typeof GG) this.discoverTypes(GG);
            else {
              const bG = Object.values(GG)[0];
              if ("string" === typeof bG) continue;
              this.discoverTypes(bG)
            }
        }
      }
      debug() {
        return `TypeContext ->\n\tSchema types: ${this.schemas.size}\n\thasFilters: ${this.hasFilters}`
      }
    }

    function nb(GG) {
      const bG = eb(GG);
      return bG ? {
        complexTypeKlass: Eb[bG],
        childType: GG[bG]
      } : {
        complexTypeKlass: !1,
        childType: GG
      }
    }

    function gb(GG, bG) {
      const ZG = Rb(GG),
        wG = eb(ZG),
        SG = wG && eb(ZG[wG]);
      if (SG) throw new Error(`${bG?`${bG}: `:""}@colyseus/schema: nested collections are not supported ("${wG}" of "${SG}"). Collections can only hold primitive types or Schema classes, wrap the inner ${SG} in a Schema class.`);
      return ZG
    }

    function eb(GG) {
      return "object" === typeof GG && null !== GG ? Object.keys(GG).find((GG => void 0 !== Eb[GG])) : void 0
    }

    function Rb(GG) {
      if ("object" !== typeof GG || null === GG) return GG;
      if (Array.isArray(GG)) return {
        array: Rb(GG[0])
      };
      const bG = function(GG) {
        const bG = Object.keys(GG),
          ZG = bG.filter((GG => /\d+/.test(GG)));
        if (ZG.length > 0 && ZG.length === bG.length / 2 && GG[GG[ZG[0]]] == ZG[0]) return "number";
        if (bG.length > 0 && bG.every((bG => GG[bG] === bG))) return "string"
      }(GG);
      if (bG) return bG;
      if (Pb(GG)) return "string" === typeof GG.quantized.wire ? GG : {
        quantized: jb(GG.quantized)
      };
      if (void 0 !== GG.type) return Rb(GG.type);
      const ZG = eb(GG);
      return ZG && (GG[ZG] = Rb(GG[ZG])), GG
    }
    const Tb = [mG, vG, aG, cG, lG, jG, CG];

    function Hb(GG, bG, ZG) {
      GG[bG] || Object.defineProperty(GG, bG, {
        value: [],
        enumerable: !1,
        configurable: !0,
        writable: !0
      }), GG[bG].push(ZG)
    }
    const tb = {
        addField(GG, bG, ZG, wG, SG) {
          if (bG >= 63) throw new Error(`Can't define field '${ZG}'.\nSchema instances may only have up to 63 fields.`);
          GG[bG] = Object.assign(GG[bG] || {}, {
            type: wG,
            index: bG,
            name: ZG
          }), Object.defineProperty(GG, uG, {
            value: GG[uG] || {},
            enumerable: !1,
            configurable: !0
          }), GG[uG][ZG] = SG || {
            value: void 0,
            writable: !0,
            enumerable: !0,
            configurable: !0
          }, Object.defineProperty(GG, WG, {
            value: bG,
            enumerable: !1,
            configurable: !0
          }), Object.defineProperty(GG, ZG, {
            value: bG,
            enumerable: !1,
            configurable: !0
          }), "string" === typeof GG[bG].type || Pb(GG[bG].type) || (void 0 === GG[mG] && Object.defineProperty(GG, mG, {
            value: [],
            enumerable: !1,
            configurable: !0
          }), GG[mG].push(bG));
          const LG = GG[bG].type;
          if (LG && "object" === typeof LG && void 0 !== LG.stream) {
            if (void 0 !== LG.array) throw new Error(ib);
            GG[bG].stream = !0, GG[jG] || Object.defineProperty(GG, jG, {
              value: [],
              enumerable: !1,
              configurable: !0,
              writable: !0
            }), GG[jG].includes(bG) || GG[jG].push(bG);
            const SG = wG?.priority;
            "function" === typeof SG && tb.setStreamPriority(GG, ZG, SG)
          }
        },
        setTag(GG, bG, ZG) {
          const wG = GG[bG];
          if (GG[wG].tag = ZG, GG[IG] || (Object.defineProperty(GG, IG, {
              value: [],
              enumerable: !1,
              configurable: !0
            }), Object.defineProperty(GG, FG, {
              value: {},
              enumerable: !1,
              configurable: !0
            })), GG[IG].push(wG), ZG < 0) GG[FG][ZG] || (GG[FG][ZG] = []), GG[FG][ZG].push(wG);
          else
            for (let SG = ZG; SG > 0; SG &= SG - 1) {
              const bG = SG & -SG;
              GG[FG][bG] || (GG[FG][bG] = []), GG[FG][bG].push(wG)
            }
        },
        setUnreliable(GG, bG) {
          const ZG = GG[bG];
          if ("string" !== typeof GG[ZG].type) throw new Error(`@unreliable cannot be applied to ref-type field "${bG}". For ref-type fields, mark each primitive sub-field with @unreliable instead. See README "Limitations and best practices".`);
          GG[ZG].unreliable = !0, GG[vG] || Object.defineProperty(GG, vG, {
            value: [],
            enumerable: !1,
            configurable: !0,
            writable: !0
          }), GG[vG].push(ZG)
        },
        setPatchOnly(GG, bG) {
          const ZG = GG[bG];
          if (GG[ZG].fullStateOnly) throw new Error(`field "${bG}" cannot be both patchOnly and fullStateOnly \u2014 those are the only two delivery channels, so the field would never reach a client.`);
          GG[ZG].patchOnly = !0, Hb(GG, aG, ZG), Hb(GG, cG, ZG)
        },
        setDeprecated(GG, bG) {
          const ZG = GG[bG];
          GG[ZG].deprecated = !0, Hb(GG, cG, ZG), Object.defineProperty(GG, ZG, {
            value: GG[ZG],
            enumerable: !1,
            configurable: !0
          })
        },
        setFullStateOnly(GG, bG) {
          const ZG = GG[bG];
          if (GG[ZG].patchOnly) throw new Error(`field "${bG}" cannot be both patchOnly and fullStateOnly \u2014 those are the only two delivery channels, so the field would never reach a client.`);
          GG[ZG].fullStateOnly = !0, Hb(GG, lG, ZG)
        },
        setStream(GG, bG) {
          const ZG = GG[bG];
          GG[ZG].stream = !0, GG[jG] || Object.defineProperty(GG, jG, {
            value: [],
            enumerable: !1,
            configurable: !0,
            writable: !0
          }), GG[jG].push(ZG)
        },
        setStreamPriority(GG, bG, ZG) {
          const wG = GG[bG];
          GG[PG] || Object.defineProperty(GG, PG, {
            value: {},
            enumerable: !1,
            configurable: !0,
            writable: !0
          }), GG[PG][wG] = ZG
        },
        getStreamPriority: (GG, bG) => GG?.[PG]?.[bG],
        defineField(GG, bG, ZG, wG, SG) {
          const LG = gb(SG, `${GG.name}.${wG}`),
            {
              complexTypeKlass: yG,
              childType: kG
            } = nb(LG);
          tb.addField(bG, ZG, wG, LG, Xw(wG, ZG, kG, yG)), bG[uG][wG] && Object.defineProperty(GG.prototype, wG, bG[uG][wG]), ("string" === typeof LG || Pb(LG)) && (bG[CG] || Object.defineProperty(bG, CG, {
            value: [],
            enumerable: !1,
            configurable: !0,
            writable: !0
          }), bG[CG][ZG] = "string" === typeof LG ? bb[LG] : sb(LG.quantized))
        },
        setFields(GG, bG) {
          const ZG = GG.prototype.constructor;
          qb.register(ZG);
          const wG = Object.getPrototypeOf(ZG),
            SG = wG && wG[Symbol.metadata],
            LG = tb.initialize(ZG);
          ZG[UG] || (ZG[UG] = Iw[UG]), ZG[YG] || (ZG[YG] = Iw[YG]), ZG[VG] || (ZG[VG] = Iw[VG]), ZG.prototype.toJSON || (ZG.prototype.toJSON = Iw.prototype.toJSON);
          let yG = LG[WG] ?? (SG && SG[WG]) ?? -1;
          yG++, LG[CG] || Object.defineProperty(LG, CG, {
            value: SG?.[CG] ? [...SG[CG]] : [],
            enumerable: !1,
            configurable: !0,
            writable: !0
          });
          for (const kG in bG) {
            if (void 0 !== LG[kG]) throw new Error(`@colyseus/schema: Duplicate '${kG}' definition on '${ZG.name||"(anonymous)"}'.`);
            tb.defineField(ZG, LG, yG, kG, bG[kG]), yG++
          }
          return GG
        },
        isDeprecated: (GG, bG) => !0 === GG[bG].deprecated,
        initialize(GG) {
          const bG = Object.getPrototypeOf(GG),
            ZG = bG[Symbol.metadata];
          let wG = GG[Symbol.metadata] ?? Object.create(null);
          if (bG !== Iw && wG === ZG && (wG = Object.create(null), ZG)) {
            Object.setPrototypeOf(wG, ZG), Object.defineProperty(wG, WG, {
              value: ZG[WG],
              enumerable: !1,
              configurable: !0,
              writable: !0
            }), void 0 !== ZG[IG] && (Object.defineProperty(wG, IG, {
              value: [...ZG[IG]],
              enumerable: !1,
              configurable: !0,
              writable: !0
            }), Object.defineProperty(wG, FG, {
              value: {
                ...ZG[FG]
              },
              enumerable: !1,
              configurable: !0,
              writable: !0
            }));
            for (const GG of Tb) {
              const bG = ZG[GG];
              void 0 !== bG && Object.defineProperty(wG, GG, {
                value: [...bG],
                enumerable: !1,
                configurable: !0,
                writable: !0
              })
            }
            Object.defineProperty(wG, uG, {
              value: {
                ...ZG[uG]
              },
              enumerable: !1,
              configurable: !0,
              writable: !0
            })
          }
          return Object.defineProperty(GG, Symbol.metadata, {
            value: wG,
            writable: !1,
            configurable: !0
          }), wG
        },
        isValidInstance: GG => GG.constructor[Symbol.metadata] && Object.prototype.hasOwnProperty.call(GG.constructor[Symbol.metadata], WG),
        getFields(GG) {
          const bG = GG[Symbol.metadata],
            ZG = {};
          for (let wG = 0; wG <= bG[WG]; wG++) ZG[bG[wG].name] = bG[wG].type;
          return ZG
        },
        hasViewTagAtIndex: (GG, bG) => GG?.[IG]?.includes(bG),
        hasUnreliableAtIndex: (GG, bG) => GG?.[vG]?.includes(bG),
        hasPatchOnlyAtIndex: (GG, bG) => GG?.[aG]?.includes(bG),
        hasFullStateOnlyAtIndex: (GG, bG) => GG?.[lG]?.includes(bG),
        hasStreamAtIndex: (GG, bG) => GG?.[jG]?.includes(bG)
      },
      Db = (GG, bG, ZG) => GG(bG, ZG);
    class Nb {
      dirtyLow = 0;
      dirtyHigh = 0;
      ops;
      constructor(GG) {
        this.ops = new Uint8Array(Math.max(GG + 1, 1))
      }
      record(GG, bG) {
        const ZG = this.ops[GG];
        0 === ZG ? this.ops[GG] = bG : (ZG === SG.DELETE || ZG === SG.ADD && bG === SG.DELETE_AND_ADD) && (this.ops[GG] = SG.DELETE_AND_ADD), GG < 32 ? this.dirtyLow |= 1 << GG : this.dirtyHigh |= 1 << GG - 32
      }
      recordDelete(GG, bG) {
        this.ops[GG] = bG, GG < 32 ? this.dirtyLow |= 1 << GG : this.dirtyHigh |= 1 << GG - 32
      }
      recordRaw(GG, bG) {
        this.record(GG, bG)
      }
      operationAt(GG) {
        const bG = this.ops[GG];
        return 0 === bG ? void 0 : bG
      }
      setOperationAt(GG, bG) {
        this.ops[GG] = bG
      }
      forEach(GG) {
        this.forEachWithCtx(GG, Db)
      }
      forEachWithCtx(GG, bG) {
        let ZG = this.dirtyLow,
          wG = this.dirtyHigh;
        const SG = this.ops;
        for (; 0 !== ZG;) {
          const wG = ZG & -ZG,
            LG = 31 - Math.clz32(wG);
          ZG ^= wG, bG(GG, LG, SG[LG])
        }
        for (; 0 !== wG;) {
          const ZG = wG & -wG,
            LG = 31 - Math.clz32(ZG) + 32;
          wG ^= ZG, bG(GG, LG, SG[LG])
        }
      }
      size() {
        return xb(this.dirtyLow) + xb(this.dirtyHigh)
      }
      has() {
        return 0 !== (this.dirtyLow | this.dirtyHigh)
      }
      reset() {
        this.dirtyLow = 0, this.dirtyHigh = 0, this.ops.fill(0)
      }
    }
    class Ob {
      cK = new Map;
      pureOps = [];
      record(GG, bG) {
        const ZG = this.cK.get(GG);
        void 0 === ZG ? this.cK.set(GG, bG) : (ZG === SG.DELETE || ZG === SG.ADD && bG === SG.DELETE_AND_ADD) && this.cK.set(GG, SG.DELETE_AND_ADD)
      }
      recordDelete(GG, bG) {
        this.cK.set(GG, bG)
      }
      recordRaw(GG, bG) {
        this.cK.set(GG, bG)
      }
      recordPure(GG) {
        this.pureOps.push([this.cK.size, GG])
      }
      operationAt(GG) {
        return this.cK.get(GG)
      }
      setOperationAt(GG, bG) {
        this.cK.has(GG) && this.cK.set(GG, bG)
      }
      forEach(GG) {
        this.forEachWithCtx(GG, Db)
      }
      forEachWithCtx(GG, bG) {
        const ZG = this.pureOps;
        if (ZG.length > 0) {
          let wG = 0,
            SG = 0;
          for (const [LG, yG] of this.cK) {
            for (; wG < ZG.length && ZG[wG][0] <= SG;) {
              const SG = ZG[wG++][1];
              bG(GG, -SG, SG)
            }
            bG(GG, LG, yG), SG++
          }
          for (; wG < ZG.length;) {
            const SG = ZG[wG++][1];
            bG(GG, -SG, SG)
          }
        } else
          for (const [wG, SG] of this.cK) bG(GG, wG, SG)
      }
      size() {
        return this.cK.size + this.pureOps.length
      }
      has() {
        return this.cK.size > 0 || this.pureOps.length > 0
      }
      reset() {
        this.cK.clear(), this.pureOps.length = 0
      }
      shift(GG) {
        const bG = new Map;
        for (const [ZG, wG] of this.cK) bG.set(ZG + GG, wG);
        this.cK = bG
      }
    }

    function xb(GG) {
      return 16843009 * ((GG = (858993459 & (GG -= GG >>> 1 & 1431655765)) + (GG >>> 2 & 858993459)) + (GG >>> 4) & 252645135) >>> 24
    }

    function Bb(GG) {
      if (void 0 === GG) return 0;
      let bG = 0;
      for (let ZG = 0, wG = GG.length; ZG < wG; ZG++) {
        const wG = GG[ZG];
        wG < 32 && (bG |= 1 << wG)
      }
      return bG
    }

    function GZ(GG) {
      const bG = GG.constructor;
      if (Object.prototype.hasOwnProperty.call(bG, iG)) return bG[iG];
      const ZG = bG[Symbol.metadata],
        wG = tb.isValidInstance(GG),
        SG = (ZG?.[IG]?.length ?? 0) > 0,
        LG = function(GG) {
          const bG = [],
            ZG = [],
            wG = [],
            SG = [],
            LG = GG?.[WG];
          if (void 0 === LG) return {
            names: bG,
            types: ZG,
            tags: wG,
            encoders: SG
          };
          const yG = GG[CG];
          for (let kG = 0; kG <= LG; kG++) {
            const LG = GG[kG];
            void 0 !== LG ? (bG[kG] = LG.name, ZG[kG] = LG.type, wG[kG] = LG.tag, SG[kG] = yG?.[kG]) : (bG[kG] = void 0, ZG[kG] = void 0, wG[kG] = void 0, SG[kG] = void 0)
          }
          return {
            names: bG,
            types: ZG,
            tags: wG,
            encoders: SG
          }
        }(ZG),
        yG = wG && !SG ? void 0 : bG[pG],
        kG = {
          encoder: bG[YG],
          filter: yG,
          metadata: ZG,
          isSchema: wG,
          filterBitmask: wG ? Bb(ZG?.[IG]) : 0,
          hasAnyFullStateOnly: (ZG?.[lG]?.length ?? 0) > 0,
          hasAnyUnreliable: (ZG?.[vG]?.length ?? 0) > 0,
          hasAnyStream: (ZG?.[jG]?.length ?? 0) > 0,
          hasAnyView: SG,
          fullStateOnlyBitmask: Bb(ZG?.[lG]),
          unreliableBitmask: Bb(ZG?.[vG]),
          streamBitmask: Bb(ZG?.[jG]),
          names: LG.names,
          types: LG.types,
          tags: LG.tags,
          encoders: LG.encoders
        };
      return Object.defineProperty(bG, iG, {
        value: kG,
        enumerable: !1,
        writable: !0,
        configurable: !0
      }), kG
    }

    function bZ(GG, bG) {
      if (void 0 !== GG.parentRef && bG(GG.parentRef, GG._parentIndex)) return !0;
      for (let ZG = GG.extraParents; void 0 !== ZG; ZG = ZG.next)
        if (bG(ZG.ref, ZG.index)) return !0;
      return !1
    }
    const ZZ = (GG, bG) => {
        GG.isFieldUnreliable(bG) ? GG.ensureUnreliableRecorder().record(bG, SG.ADD) : GG.record(bG, SG.ADD)
      },
      wZ = (GG, bG) => GG(bG);

    function SZ(GG, bG, ZG) {
      const wG = GG.refTarget;
      if (void 0 !== wG[dG]) {
        if (GG.isPatchOnly) return;
        if (Array.isArray(wG.items)) {
          const GG = wG.items;
          for (let wG = 0, SG = GG.length; wG < SG; wG++) void 0 !== GG[wG] && ZG(bG, wG)
        } else if (void 0 !== wG.journal)
          for (const [GG, SG] of wG.journal.keyByIndex) wG.$items.has(SG) && ZG(bG, GG);
        else if (void 0 !== wG.$items)
          for (const GG of wG.$items.keys()) ZG(bG, GG)
      } else {
        const SG = GG.metadata;
        if (!SG) return;
        const LG = SG[WG] ?? -1,
          yG = SG[cG],
          kG = GG.encDescriptor.names;
        for (let GG = 0; GG <= LG; GG++) {
          const SG = kG[GG];
          if (void 0 === SG) continue;
          if (yG && yG.includes(GG)) continue;
          const LG = wG[SG];
          void 0 !== LG && null !== LG && ZG(bG, GG)
        }
      }
    }

    function LZ(GG, bG, ZG, wG) {
      ! function(GG, bG, ZG) {
        if (!bG) return;
        const wG = bG[hG],
          SG = !wG._isSchema;
        let LG;
        SG ? (bG = wG.parent, ZG = wG.parentIndex, LG = bG?.[hG].metadata) : LG = wG.metadata;
        const yG = (LG?.[aG]?.includes(ZG) ? iZ : 0) | (LG?.[lG]?.includes(ZG) ? CZ : 0),
          kG = wG.flags & IZ | yG,
          UG = GG.flags;
        GG.flags = UG | kG;
        kG & ~UG & CZ && (GG.reset(), GG.unreliableRecorder?.reset());
        const YG = GG.root?.types;
        if (!YG?.hasFilters) return;
        const VG = LG?.[IG]?.includes(ZG) ?? !1,
          pG = LG?.[jG]?.includes(ZG) ?? !1,
          fG = wG.isFiltered || VG || pG;
        if (GG.isFiltered = fG, pG && !SG) {
          GG.isStreamCollection = !0;
          const bG = Wb(GG.ref);
          if (void 0 === bG.priority) {
            const GG = tb.getStreamPriority(LG, ZG);
            void 0 !== GG && (bG.priority = GG)
          }
          GG.root?.registerStream(GG.ref)
        }
        if (fG) {
          const bG = kZ(GG);
          GG.isVisibilitySharedWithParent = wG.isFiltered && bG && !pG && (!VG || SG && LG[ZG].tag !== Kw)
        }
      }(GG, bG, ZG), GG.isFullStateOnly || (GG.has() && GG.root?.enqueueChangeTree(GG), GG.unreliableRecorder?.has() && GG.root?.enqueueUnreliable(GG), GG.has() || GG.unreliableRecorder?.has() || GG.root?.enqueueChangeTree(GG))
    }

    function yZ(GG) {
      const bG = GG.pendingFilterRefresh;
      for (let ZG = 0; ZG < bG.length; ZG++) {
        const GG = bG[ZG];
        0 !== (GG.flags & mZ) && UZ(GG)
      }
      bG.length = 0
    }

    function kZ(GG) {
      return GG._isSchema || "string" !== typeof GG.refTarget[dG]
    }

    function UZ(GG) {
      GG.flags &= ~mZ;
      const bG = GG.root;
      if (void 0 === bG || void 0 === GG.parentRef) return;
      const ZG = kZ(GG);
      let wG = QZ(GG, GG.parentRef, GG._parentIndex, ZG);
      for (let LG = GG.extraParents; void 0 !== LG && wG !== fZ; LG = LG.next) wG |= QZ(GG, LG.ref, LG.index, ZG);
      if (0 === wG) return;
      GG.isVisibilitySharedWithParent = 0 !== (wG & pZ);
      const SG = 0 === (wG & VZ);
      SG !== GG.isFiltered && (GG.isFiltered = SG, SG || GG.isFullStateOnly || (GG.forEachLiveWithCtx(GG, ZZ), GG.has() && bG.enqueueChangeTree(GG), GG.unreliableRecorder?.has() && bG.enqueueUnreliable(GG)), GG.forEachChildWithCtx(GG, KZ))
    }
    const YZ = 1,
      VZ = 2,
      pZ = 4,
      fZ = YZ | VZ | pZ;

    function QZ(GG, bG, ZG, wG) {
      const SG = bG[hG];
      if (SG.root !== GG.root || ! function(GG, bG, ZG) {
          const wG = bG.refTarget;
          if (bG.isArray) {
            const bG = wG.items,
              SG = bG[ZG];
            if (void 0 !== SG && SG[hG] === GG) return !0;
            for (let ZG = 0, wG = bG.length; ZG < wG; ZG++) {
              const wG = bG[ZG];
              if (void 0 !== wG && wG[hG] === GG) return !0
            }
            return !1
          }
          const SG = bG.getValue(ZG);
          return void 0 !== SG && SG[hG] === GG
        }(GG, SG, ZG)) return 0;
      SG.flags & mZ && UZ(SG);
      let LG = YZ;
      if (SG._isSchema) {
        void 0 !== SG.encDescriptor.tags[ZG] || SG.isFieldStream(ZG) || (SG.isFiltered ? wG && (LG |= pZ) : LG |= VZ)
      } else if (SG.isFiltered) {
        if (wG && !SG.isStreamCollection) {
          const GG = SG.parent?.[hG];
          (GG?._isSchema ? GG.encDescriptor.tags[SG.parentIndex] : void 0) !== Kw && (LG |= pZ)
        }
      } else LG |= VZ;
      return LG
    }
    const KZ = (GG, bG, ZG) => {
      UZ(bG)
    };

    function hZ(GG, bG, ZG, wG) {
      if (GG.addParent(bG, wG), !ZG) return;
      const SG = ZG.add(GG);
      ZG !== GG.root && (GG.root = ZG, LZ(GG, bG, wG));
      const LG = bG?.[hG];
      if (void 0 !== LG && void 0 !== LG.subscribedViews && void 0 !== bG[dG] && function(GG, bG, ZG, wG) {
          const SG = GG.subscribedViews;
          if (void 0 === SG) return;
          const LG = GG.isStreamCollection,
            yG = LG ? GG.ref : void 0,
            kG = LG ? void 0 : ZG[hG];
          for (let UG = 0, YG = SG.length; UG < YG; UG++) {
            let GG = SG[UG];
            for (; 0 !== GG;) {
              const ZG = GG & -GG;
              GG ^= ZG;
              const YG = 32 * UG + (31 - Math.clz32(ZG)),
                VG = wG.activeViews.get(YG),
                pG = VG?.deref();
              void 0 !== pG ? LG ? ab(yG, YG, bG) : void 0 !== kG && pG.markVisible(kG) : SG[UG] &= ~ZG
            }
          }
        }(LG, wG, GG.ref, ZG), SG) {
        let bG = zZ[EZ];
        void 0 === bG && (bG = {
          parentRef: void 0,
          root: void 0
        }, zZ[EZ] = bG), bG.parentRef = GG.ref, bG.root = ZG, EZ++, JZ(GG, bG, oZ), EZ--
      }
    }

    function dZ(GG, bG, ZG) {
      GG(bG, ZG)
    }

    function JZ(GG, bG, ZG) {
      const wG = GG.refTarget;
      if (wG[dG]) {
        if ("string" !== typeof wG[dG]) {
          const GG = wG.items;
          if (void 0 !== GG)
            for (let wG = 0, SG = GG.length; wG < SG; wG++) {
              const SG = GG[wG];
              SG && ZG(bG, SG[hG], wG)
            } else {
              const GG = wG.$items,
                SG = wG._collectionIndexes;
              for (const wG of GG.keys()) {
                const LG = GG.get(wG);
                LG && ZG(bG, LG[hG], SG?.[wG] ?? wG)
              }
            }
        }
      } else {
        const SG = GG.metadata,
          LG = SG?.[mG];
        if (!LG) return;
        const yG = GG.encDescriptor.names;
        for (let GG = 0, kG = LG.length; GG < kG; GG++) {
          const SG = LG[GG],
            kG = wG[yG[SG]];
          kG && ZG(bG, kG[hG], SG)
        }
      }
    }

    function rZ(GG, bG, ZG) {
      bG.root !== GG ? bG.setRoot(GG) : GG.add(bG)
    }
    const zZ = [];
    let EZ = 0;

    function oZ(GG, bG, ZG) {
      if (bG.root === GG.root) return GG.root.add(bG), void GG.root.moveNextToParent(bG);
      bG.setParent(GG.parentRef, GG.root, ZG)
    }

    function XZ(GG, bG, ZG) {
      const wG = (3 & ZG) << 3;
      return ZG < 4 ? GG >>> wG & 255 : bG >>> wG & 255
    }
    const uZ = (GG, bG, ZG) => GG(bG, ZG);
    const iZ = 16,
      CZ = 32,
      WZ = 128,
      mZ = 256,
      IZ = iZ | CZ;
    class FZ {
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
      set isFiltered(GG) {
        this.flags = GG ? 1 | this.flags : -2 & this.flags
      }
      get isVisibilitySharedWithParent() {
        return 0 !== (2 & this.flags)
      }
      set isVisibilitySharedWithParent(GG) {
        this.flags = GG ? 2 | this.flags : -3 & this.flags
      }
      get isNew() {
        return 0 !== (4 & this.flags)
      }
      set isNew(GG) {
        this.flags = GG ? 4 | this.flags : -5 & this.flags
      }
      get isUnreliable() {
        return 0 !== (8 & this.flags)
      }
      set isUnreliable(GG) {
        this.flags = GG ? 8 | this.flags : -9 & this.flags
      }
      get isPatchOnly() {
        return 0 !== (this.flags & iZ)
      }
      set isPatchOnly(GG) {
        this.flags = GG ? this.flags | iZ : this.flags & ~iZ
      }
      get isFullStateOnly() {
        return 0 !== (this.flags & CZ)
      }
      set isFullStateOnly(GG) {
        this.flags = GG ? this.flags | CZ : this.flags & ~CZ
      }
      get isStreamCollection() {
        return 0 !== (64 & this.flags)
      }
      set isStreamCollection(GG) {
        this.flags = GG ? 64 | this.flags : -65 & this.flags
      }
      get needsRestage() {
        return 0 !== (this.flags & WZ)
      }
      set needsRestage(GG) {
        this.flags = GG ? this.flags | WZ : -129 & this.flags
      }
      get hasFilteredFields() {
        return this.isFiltered || this.encDescriptor.hasAnyView
      }
      ensureUnreliableRecorder() {
        return void 0 === this.unreliableRecorder && (this.unreliableRecorder = this._isSchema ? new Nb(this.metadata?.[WG] ?? 0) : new Ob), this.unreliableRecorder
      }
      isFieldUnreliable(GG) {
        const bG = this.encDescriptor;
        return !!bG.hasAnyUnreliable && (GG < 32 ? 0 !== (bG.unreliableBitmask & 1 << GG) : tb.hasUnreliableAtIndex(this.metadata, GG))
      }
      isFieldFullStateOnly(GG) {
        if (this.isFullStateOnly) return !0;
        const bG = this.encDescriptor;
        return !!bG.hasAnyFullStateOnly && (GG < 32 ? 0 !== (bG.fullStateOnlyBitmask & 1 << GG) : tb.hasFullStateOnlyAtIndex(this.metadata, GG))
      }
      isFieldStream(GG) {
        const bG = this.encDescriptor;
        return !!bG.hasAnyStream && (GG < 32 ? 0 !== (bG.streamBitmask & 1 << GG) : tb.hasStreamAtIndex(this.metadata, GG))
      }
      constructor(GG) {
        let bG = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : GG;
        this.ref = GG, this.refTarget = bG;
        const ZG = GZ(GG);
        this.encDescriptor = ZG, this.metadata = ZG.metadata;
        const wG = ZG.isSchema;
        if (this._isSchema = wG, this.ops = void 0, this.collDirty = void 0, this.collPureOps = void 0, wG) {
          const GG = this.metadata?.[WG] ?? 0;
          GG > 7 && (this.ops = new Uint8Array(GG + 1))
        } else this.collDirty = new Map
      }
      _opAt(GG) {
        const bG = this.ops;
        if (void 0 !== bG) return bG[GG];
        const ZG = (3 & GG) << 3;
        return GG < 4 ? this.opsLow >>> ZG & 255 : this.opsHigh >>> ZG & 255
      }
      _opPut(GG, bG) {
        const ZG = this.ops;
        if (void 0 !== ZG) return void(ZG[GG] = bG);
        const wG = (3 & GG) << 3,
          SG = ~(255 << wG);
        GG < 4 ? this.opsLow = this.opsLow & SG | bG << wG : this.opsHigh = this.opsHigh & SG | bG << wG
      }
      _markDirty(GG) {
        GG < 32 ? this.dirtyLow |= 1 << GG : this.dirtyHigh |= 1 << GG - 32
      }
      record(GG, bG) {
        if (this._isSchema) {
          const ZG = this._opAt(GG);
          0 === ZG ? this._opPut(GG, bG) : (ZG === SG.DELETE || ZG === SG.ADD && bG === SG.DELETE_AND_ADD) && this._opPut(GG, SG.DELETE_AND_ADD), this._markDirty(GG)
        } else {
          const ZG = this.collDirty,
            wG = ZG.get(GG);
          let LG;
          LG = void 0 === wG ? bG : wG === SG.DELETE || wG === SG.ADD && bG === SG.DELETE_AND_ADD ? SG.DELETE_AND_ADD : wG, ZG.set(GG, LG)
        }
      }
      recordDelete(GG, bG) {
        this._isSchema ? (this._opPut(GG, bG), this._markDirty(GG)) : this.collDirty.set(GG, bG)
      }
      recordRaw(GG, bG) {
        this._isSchema ? (this._opPut(GG, bG), this._markDirty(GG)) : this.collDirty.set(GG, bG)
      }
      recordPure(GG) {
        if (this._isSchema) throw new Error("ChangeTree (Schema): pure operations are not supported");
        (this.collPureOps ??= []).push([this.collDirty.size, GG])
      }
      operationAt(GG) {
        if (this._isSchema) {
          const bG = this._opAt(GG);
          return 0 === bG ? void 0 : bG
        }
        return this.collDirty.get(GG)
      }
      setOperationAt(GG, bG) {
        if (this._isSchema) this._opPut(GG, bG);
        else {
          const ZG = this.collDirty;
          ZG.has(GG) && ZG.set(GG, bG)
        }
      }
      forEach(GG) {
        this.forEachWithCtx(GG, uZ)
      }
      forEachWithCtx(GG, bG) {
        if (this._isSchema) {
          let ZG = this.dirtyLow,
            wG = this.dirtyHigh;
          const SG = this.ops;
          if (void 0 !== SG) {
            for (; 0 !== ZG;) {
              const wG = ZG & -ZG,
                LG = 31 - Math.clz32(wG);
              ZG ^= wG, bG(GG, LG, SG[LG])
            }
            for (; 0 !== wG;) {
              const ZG = wG & -wG,
                LG = 31 - Math.clz32(ZG) + 32;
              wG ^= ZG, bG(GG, LG, SG[LG])
            }
          } else {
            const wG = this.opsLow,
              SG = this.opsHigh;
            for (; 0 !== ZG;) {
              const LG = ZG & -ZG,
                yG = 31 - Math.clz32(LG);
              ZG ^= LG, bG(GG, yG, XZ(wG, SG, yG))
            }
          }
          return
        }
        const ZG = this.collDirty,
          wG = this.collPureOps;
        if (void 0 !== wG && wG.length > 0) {
          let SG = 0,
            LG = 0;
          for (const [yG, kG] of ZG) {
            for (; SG < wG.length && wG[SG][0] <= LG;) {
              const ZG = wG[SG++][1];
              bG(GG, -ZG, ZG)
            }
            bG(GG, yG, kG), LG++
          }
          for (; SG < wG.length;) {
            const ZG = wG[SG++][1];
            bG(GG, -ZG, ZG)
          }
        } else
          for (const [SG, LG] of ZG) bG(GG, SG, LG)
      }
      size() {
        return this._isSchema ? xb(this.dirtyLow) + xb(this.dirtyHigh) : this.collDirty.size + (this.collPureOps?.length ?? 0)
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
      insertAt(GG, bG) {
        if (this._isSchema) throw new Error("ChangeTree (Schema): insertAt is not supported");
        const ZG = this.collDirty,
          wG = new Map,
          LG = !this.paused && !this.isFullStateOnly;
        if (GG > 0)
          for (const [SG, yG] of ZG) SG < GG && wG.set(SG, yG);
        if (LG)
          for (let yG = 0; yG < bG; yG++) wG.set(GG + yG, SG.ADD);
        for (const [SG, yG] of ZG) SG >= GG && wG.set(SG + bG, yG);
        this.collDirty = wG, LG && this.root?.enqueueChangeTree(this)
      }
      removeAt(GG, bG) {
        if (this._isSchema) throw new Error("ChangeTree (Schema): removeAt is not supported");
        const ZG = this.collDirty,
          wG = GG + bG;
        let SG = !1;
        for (const yG of ZG.keys())
          if (yG >= wG) {
            SG = !0;
            break
          } if (!SG) {
          for (let bG = GG; bG < wG; bG++) ZG.delete(bG);
          return
        }
        const LG = new Map;
        for (const [yG, kG] of ZG) yG < GG ? LG.set(yG, kG) : yG >= wG && LG.set(yG - bG, kG);
        this.collDirty = LG
      }
      unshift(GG) {
        this.insertAt(0, GG)
      }
      setRoot(GG) {
        ! function(GG, bG) {
          GG.root = bG;
          const ZG = bG.add(GG);
          LZ(GG, GG.parent, GG.parentIndex), ZG && JZ(GG, bG, rZ)
        }(this, GG)
      }
      setParent(GG, bG, ZG) {
        hZ(this, GG, bG, ZG)
      }
      forEachChild(GG) {
        JZ(this, GG, dZ)
      }
      forEachChildWithCtx(GG, bG) {
        JZ(this, GG, bG)
      }
      forEachLive(GG) {
        SZ(this, GG, wZ)
      }
      forEachLiveWithCtx(GG, bG) {
        SZ(this, GG, bG)
      }
      operation(GG) {
        this.paused || this.isFullStateOnly || (this.recordPure(GG), this.root?.enqueueChangeTree(this))
      }
      _routeAndRecord(GG, bG, ZG) {
        if (!this.paused && !this.isFieldFullStateOnly(GG)) {
          if (this.isFieldUnreliable(GG) && !this.isNew) {
            const wG = this.ensureUnreliableRecorder();
            return ZG ? wG.recordRaw(GG, bG) : wG.record(GG, bG), void this.root?.enqueueUnreliable(this)
          }
          ZG ? this.recordRaw(GG, bG) : this.record(GG, bG), this.root?.enqueueChangeTree(this)
        }
      }
      change(GG) {
        let bG = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : SG.ADD;
        this._routeAndRecord(GG, bG, !1)
      }
      indexedOperation(GG, bG) {
        this._routeAndRecord(GG, bG, !0)
      }
      getChange(GG) {
        return this.operationAt(GG)
      }
      pause() {
        this.paused = !0
      }
      resume() {
        this.paused = !1
      }
      untracked(GG) {
        const bG = this.paused;
        this.paused = !0;
        try {
          return GG()
        } finally {
          this.paused = bG
        }
      }
      markDirty(GG) {
        let bG = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : SG.ADD;
        const ZG = this.paused;
        this.paused = !1;
        try {
          this.change(GG, bG)
        } finally {
          this.paused = ZG
        }
      }
      getValue(GG) {
        let bG = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return this.refTarget[fG](GG, bG)
      }
      delete(GG, bG) {
        if (void 0 === GG) {
          try {
            throw new Error(`@colyseus/schema ${this.ref.constructor.name}: trying to delete non-existing index '${GG}'`)
          } catch (yS) {
            console.warn(yS)
          }
          return
        }
        if (this.paused || this.isFieldFullStateOnly(GG)) return this.getValue(GG);
        const ZG = this.isFieldUnreliable(GG) && !this.isNew;
        ZG ? this.ensureUnreliableRecorder().recordDelete(GG, bG ?? SG.DELETE) : this.recordDelete(GG, bG ?? SG.DELETE);
        const wG = this.getValue(GG);
        return wG && wG[hG] && this.root?.remove(wG[hG]), ZG ? this.root?.enqueueUnreliable(this) : this.root?.enqueueChangeTree(this), wG
      }
      endEncode() {
        this.reset(), this.changesNode = void 0, this._isSchema || this.refTarget[rG]?.(), this.isNew = !1
      }
      endEncodeUnreliable() {
        this.unreliableRecorder?.reset(), this.unreliableChangesNode = void 0, this._isSchema || this.refTarget[rG]?.()
      }
      discard() {
        this._isSchema || this.refTarget[rG]?.(), this.reset(), this.unreliableRecorder?.reset()
      }
      discardAll() {
        const GG = GG => {
          if (GG < 0) return;
          const bG = this.getValue(GG);
          bG && bG[hG] && bG[hG].discardAll()
        };
        this.forEach(GG), this.unreliableRecorder?.forEach(GG), this.discard()
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
      addParent(GG, bG) {
        ! function(GG, bG, ZG) {
          if (GG.parentRef) {
            if (GG.parentRef[hG] === bG[hG]) return void(GG._parentIndex = ZG);
            if (bZ(GG, ((GG, ZG) => GG[hG] === bG[hG]))) return void(GG._parentIndex = ZG)
          }
          void 0 === GG.parentRef ? (GG.parentRef = bG, GG._parentIndex = ZG) : (GG.extraParents = {
            ref: GG.parentRef,
            index: GG._parentIndex,
            next: GG.extraParents
          }, GG.parentRef = bG, GG._parentIndex = ZG)
        }(this, GG, bG)
      }
      setParentIndex(GG, bG) {
        ! function(GG, bG, ZG) {
          if (void 0 !== GG.extraParents)
            if (GG.parentRef[hG] !== bG[hG]) {
              for (let wG = GG.extraParents; void 0 !== wG; wG = wG.next)
                if (wG.ref[hG] === bG[hG]) return void(wG.index = ZG)
            } else GG._parentIndex = ZG;
          else GG._parentIndex = ZG
        }(this, GG, bG)
      }
      removeParent() {
        return function(GG, bG) {
          if (GG.parentRef && GG.parentRef[hG] === bG[hG]) return GG.extraParents ? (GG.parentRef = GG.extraParents.ref, GG._parentIndex = GG.extraParents.index, GG.extraParents = GG.extraParents.next) : (GG.parentRef = void 0, GG._parentIndex = void 0), !0;
          let ZG = GG.extraParents,
            wG = null;
          for (; ZG;) {
            if (ZG.ref[hG] === bG[hG]) return wG ? wG.next = ZG.next : GG.extraParents = ZG.next, !0;
            wG = ZG, ZG = ZG.next
          }
          return void 0 === GG.parentRef
        }(this, arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.parent)
      }
      findParent(GG) {
        return function(GG, bG) {
          if (void 0 !== GG.parentRef && bG(GG.parentRef, GG._parentIndex)) return {
            ref: GG.parentRef,
            index: GG._parentIndex
          };
          for (let ZG = GG.extraParents; void 0 !== ZG; ZG = ZG.next)
            if (bG(ZG.ref, ZG.index)) return {
              ref: ZG.ref,
              index: ZG.index
            }
        }(this, GG)
      }
      hasParent(GG) {
        return bZ(this, GG)
      }
      indexInParent(GG) {
        return function(GG, bG) {
          if (GG.parentRef && GG.parentRef[hG] === bG[hG]) return GG._parentIndex;
          for (let ZG = GG.extraParents; void 0 !== ZG; ZG = ZG.next)
            if (ZG.ref[hG] === bG[hG]) return ZG.index
        }(this, GG)
      }
      getAllParents() {
        return function(GG) {
          const bG = [];
          GG.parentRef && bG.push({
            ref: GG.parentRef,
            index: GG._parentIndex
          });
          let ZG = GG.extraParents;
          for (; ZG;) bG.push({
            ref: ZG.ref,
            index: ZG.index
          }), ZG = ZG.next;
          return bG
        }(this)
      }
    }
    class vZ {
      ref;
      root = void 0;
      parentRef = void 0;
      paused = !1;
      isNew = !1;
      flags = 0;
      constructor(GG) {
        this.ref = GG
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
      untracked(GG) {
        return GG()
      }
      markDirty() {}
      forEachChild(GG) {
        const bG = this.ref;
        if (bG[dG]) {
          if ("string" !== typeof bG[dG])
            for (const [ZG, wG] of bG.entries()) wG && GG(wG[hG], bG._collectionIndexes?.[ZG] ?? ZG);
          return
        }
        const ZG = bG.constructor,
          wG = ZG?.[Symbol.metadata];
        if (!wG) return;
        const SG = wG[mG] ?? [];
        for (let LG = 0; LG < SG.length; LG++) {
          const ZG = SG[LG],
            yG = bG[wG[ZG].name];
          yG && GG(yG[hG], ZG)
        }
      }
      forEachChildWithCtx(GG, bG) {
        this.forEachChild(((ZG, wG) => bG(GG, ZG, wG)))
      }
      forEachLive() {}
      forEachLiveWithCtx() {}
      forEach() {}
    }

    function aZ(GG) {
      let bG = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : GG;
      var ZG;
      Object.defineProperty(GG, hG, {
        value: (ZG = bG, new vZ(ZG)),
        enumerable: !1,
        writable: !0
      })
    }

    function cZ(GG, bG, ZG, wG, LG, yG, UG) {
      void 0 !== UG ? UG(bG, wG, yG) : "string" === typeof ZG ? bb[ZG]?.(bG, wG, yG) : null != ZG[Symbol.metadata] ? (bb.number(bG, wG[kG], yG), (LG & SG.ADD) === SG.ADD && GG.tryEncodeTypeId(bG, ZG, wG.constructor, yG)) : bb.number(bG, wG[kG], yG)
    }
    const lZ = function(GG, bG, ZG, wG, LG, yG, kG, UG) {
        if (bG[yG.offset++] = 255 & (wG | LG), LG === SG.DELETE) return;
        const YG = ZG.encDescriptor,
          VG = ZG.ref,
          pG = VG[oG][wG] ?? VG[YG.names[wG]];
        cZ(GG, bG, YG.types[wG], pG, LG, yG, YG.encoders[wG])
      },
      jZ = function(GG, bG, ZG, wG, LG, yG) {
        if (bG[yG.offset++] = 255 & LG, bb.number(bG, wG, yG), LG === SG.DELETE) return;
        const kG = ZG.ref;
        if ((LG & SG.ADD) === SG.ADD) {
          const GG = kG.$indexes.get(wG);
          bb.string(bG, GG, yG)
        }
        cZ(GG, bG, kG[dG], kG[fG](wG), LG, yG)
      },
      PZ = function(GG, bG, ZG, wG, LG, yG) {
        if (bG[yG.offset++] = 255 & LG, bb.number(bG, wG, yG), LG === SG.DELETE) return;
        const kG = ZG.ref;
        cZ(GG, bG, kG[dG], kG[fG](wG), LG, yG)
      },
      MZ = function(GG, bG, ZG, wG, LG, yG) {
        const kG = ZG.ref;
        (LG & SG.ADD) === SG.ADD && "function" === typeof kG.set ? jZ(GG, bG, ZG, wG, LG, yG) : PZ(GG, bG, ZG, wG, LG, yG)
      },
      AZ = function(GG, bG, ZG, wG, LG, yG, UG, YG) {
        const VG = ZG.refTarget,
          pG = VG[dG],
          QG = "string" !== typeof pG;
        let KG;
        if (YG && ZG.isFiltered && QG) {
          const GG = VG.tmpItems[wG];
          if (!GG) return;
          if (KG = GG[kG], LG === SG.DELETE) LG = SG.DELETE_BY_REFID;
          else if ((LG & SG.ADD) === SG.ADD) LG = SG.ADD_BY_REFID;
          else if ((LG & SG.MOVE) === SG.MOVE) return
        } else if (LG === SG.DELETE && QG) {
          const GG = VG.tmpItems[wG];
          if (!GG) return;
          KG = GG[kG], LG = SG.DELETE_BY_REFID
        } else KG = wG;
        if (bG[yG.offset++] = 255 & LG, bb.number(bG, KG, yG), LG === SG.DELETE || LG === SG.DELETE_BY_REFID) return;
        cZ(GG, bG, pG, VG[fG](wG, UG), LG, yG)
      };

    function sZ(GG, bG, ZG, wG, LG, yG, UG) {
      const YG = GG.resyncVisited;
      let VG = YG.get(GG.currentRefId);
      if (void 0 === VG && YG.set(GG.currentRefId, VG = new Set), VG.add(wG), void 0 !== LG && ZG === SG.ADD && LG !== yG) {
        const ZG = LG[kG];
        void 0 !== ZG && (GG.root.removeRef(ZG), UG?.push({
          ref: bG,
          refId: GG.currentRefId,
          op: SG.DELETE,
          dynamicIndex: wG,
          value: void 0,
          previousValue: LG
        }))
      }
    }

    function qZ(GG, bG, ZG, wG) {
      const SG = bG[kG];
      if (void 0 === SG || ZG.has(SG)) return;
      ZG.add(SG);
      const LG = bG.constructor[Symbol.metadata],
        yG = LG?.[mG];
      if (void 0 === yG) return;
      const UG = LG[aG];
      for (let kG = 0; kG < yG.length; kG++) {
        const SG = yG[kG];
        if (void 0 !== UG && UG.includes(SG)) continue;
        const YG = LG[SG],
          VG = bG[YG.name];
        VG && (Iw.is(YG.type) ? qZ(GG, VG, ZG, wG) : nZ(GG, VG, ZG, wG))
      }
    }

    function nZ(GG, bG, ZG, wG) {
      const LG = bG[JG] ?? bG,
        yG = LG[kG];
      if (void 0 === yG || ZG.has(yG)) return;
      ZG.add(yG);
      const UG = GG.resyncVisited.get(yG);
      if (void 0 === UG) return;
      const YG = GG.root;
      LG[KG](UG, ((GG, ZG) => {
        wG?.push({
          ref: bG,
          refId: yG,
          op: SG.DELETE,
          dynamicIndex: ZG,
          value: void 0,
          previousValue: GG
        });
        const LG = GG?.[kG];
        void 0 !== LG && YG.removeRef(LG)
      }), (bG => {
        Iw.isSchema(bG) && qZ(GG, bG, ZG, wG)
      }))
    }
    const gZ = 1,
      eZ = 2,
      RZ = 3,
      TZ = 4,
      HZ = 5;

    function tZ(GG, bG, ZG, wG, LG, yG, UG, YG, VG) {
      const pG = GG.root;
      let fG;
      if ((bG & SG.DELETE) === SG.DELETE) {
        const GG = LG?.[kG];
        void 0 !== GG && pG.removeRef(GG), bG !== SG.DELETE_AND_ADD && ZG[QG](wG), fG = void 0
      }
      if (bG === SG.DELETE);
      else if ("string" === typeof yG) fG = zb[yG](UG, YG);
      else if (Pb(yG)) fG = function(GG, bG, ZG) {
        return Ab(GG, (0, zb[GG.wire])(bG, ZG))
      }(yG.quantized, UG, YG);
      else if (Iw.is(yG)) {
        const ZG = zb.number(UG, YG);
        if (fG = pG.refs.get(ZG), (bG & SG.ADD) === SG.ADD) {
          const wG = GG.getInstanceType(UG, YG, yG);
          fG || (fG = GG.createInstanceOfType(wG)), pG.addRef(ZG, fG, fG !== LG || bG === SG.DELETE_AND_ADD && fG === LG)
        }
      } else {
        const ZG = (KG = Object.keys(yG)[0], Eb[KG]),
          wG = zb.number(UG, YG);
        null !== GG.resyncVisited && function(GG, bG) {
          const ZG = GG.resyncVisited;
          ZG.has(bG) || ZG.set(bG, new Set)
        }(GG, wG);
        const QG = pG.refs.has(wG) ? LG || pG.refs.get(wG) : ZG.constructor.initializeForDecoder();
        if (fG = QG.clone(!0), fG[dG] = Object.values(yG)[0], LG) {
          let GG = LG[kG];
          if (void 0 !== GG && wG !== GG) {
            (bG & SG.DELETE) !== SG.DELETE && pG.removeRef(GG);
            const ZG = LG.entries();
            let wG;
            for (;
              (wG = ZG.next()) && !wG.done;) {
              const [bG, ZG] = wG.value;
              "object" === typeof ZG && (GG = ZG[kG]), VG?.push({
                ref: LG,
                refId: GG,
                op: SG.DELETE,
                field: bG,
                value: void 0,
                previousValue: ZG
              })
            }
          }
        }
        pG.addRef(wG, fG, QG !== LG || bG === SG.DELETE_AND_ADD && QG === LG)
      }
      var KG;
      return fG
    }
    const DZ = function(GG, bG, ZG, wG, SG) {
        const LG = bG[ZG.offset++],
          yG = wG.constructor[Symbol.metadata],
          kG = LG >> 6 << 6,
          UG = LG % (kG || 255),
          YG = yG[UG];
        if (void 0 === YG) return console.warn("@colyseus/schema: field not defined at", {
          index: UG,
          ref: wG.constructor.name,
          metadata: yG
        }), -1;
        const VG = !0 === YG.deprecated,
          pG = VG ? void 0 : wG[fG](UG),
          QG = tZ(GG, kG, wG, UG, pG, YG.type, bG, ZG, SG);
        VG || (null !== QG && void 0 !== QG && (wG[YG.name] = QG), pG !== QG && SG?.push({
          ref: wG,
          refId: GG.currentRefId,
          op: kG,
          field: YG.name,
          value: QG,
          previousValue: pG
        }))
      },
      NZ = function(GG, bG, ZG, wG, LG) {
        const yG = wG[JG] ?? wG,
          kG = bG[ZG.offset++];
        if (kG === SG.CLEAR) return GG.removeChildRefs(yG, LG), void yG.clear();
        const UG = zb.number(bG, ZG),
          YG = yG[dG],
          VG = yG.constructor.COLLECTION_KIND;
        let pG;
        (kG & SG.ADD) === SG.ADD ? VG === gZ ? (pG = zb.string(bG, ZG), yG.setIndex(UG, pG)) : pG = UG : pG = yG.getIndex(UG);
        const QG = yG[fG](UG),
          KG = tZ(GG, kG, wG, UG, QG, YG, bG, ZG, LG);
        if (null !== GG.resyncVisited && sZ(GG, wG, kG, pG, QG, KG, LG), null !== KG && void 0 !== KG) switch (VG) {
          case gZ:
            yG.$items.set(pG, KG);
            break;
          case eZ:
            yG.$setAt(UG, KG, null !== GG.resyncVisited && kG === SG.ADD ? SG.REPLACE : kG);
            break;
          case RZ:
          case TZ:
          case HZ:
            yG.$items.has(UG) || (yG.$items.set(UG, KG), "number" === typeof yG.$refId && UG >= yG.$refId && (yG.$refId = UG + 1));
            break;
          default:
            console.warn(`@colyseus/schema: missing COLLECTION_KIND on ${yG.constructor?.name} \u2014 item at index ${UG} was not stored.`)
        }
        QG !== KG && LG?.push({
          ref: wG,
          refId: GG.currentRefId,
          op: kG,
          dynamicIndex: pG,
          value: KG,
          previousValue: QG
        })
      },
      OZ = function(GG, bG, ZG, wG, LG) {
        const yG = wG[JG] ?? wG;
        let kG, UG = bG[ZG.offset++];
        if (UG === SG.CLEAR) return GG.removeChildRefs(yG, LG), void yG.clear();
        if (UG === SG.REVERSE) return void yG.items.reverse();
        if (UG === SG.DELETE_BY_REFID) {
          const UG = zb.number(bG, ZG),
            YG = GG.root.refs.get(UG);
          if (void 0 === YG) return;
          if (GG.root.removeRef(UG), kG = yG.findIndex((GG => GG === YG)), -1 === kG) return;
          return yG[QG](kG), void LG?.push({
            ref: wG,
            refId: GG.currentRefId,
            op: SG.DELETE,
            dynamicIndex: kG,
            value: void 0,
            previousValue: YG
          })
        }
        if (UG === SG.ADD_BY_REFID) {
          const wG = zb.number(bG, ZG),
            SG = GG.root.refs.get(wG);
          SG && (kG = yG.findIndex((GG => GG === SG))), -1 !== kG && void 0 !== kG || (kG = yG.length)
        } else kG = zb.number(bG, ZG);
        const YG = yG[dG];
        let VG = kG;
        const pG = yG.items[kG],
          fG = tZ(GG, UG, wG, kG, pG, YG, bG, ZG, LG);
        null !== GG.resyncVisited && sZ(GG, wG, UG, kG, pG, fG, LG), null !== fG && void 0 !== fG && fG !== pG && yG.$setAt(kG, fG, null !== GG.resyncVisited && UG === SG.ADD ? SG.REPLACE : UG), pG !== fG && LG?.push({
          ref: wG,
          refId: GG.currentRefId,
          op: UG,
          dynamicIndex: VG,
          value: fG,
          previousValue: pG
        })
      };
    class xZ extends Error {}

    function BZ(GG, bG, ZG, wG) {
      if (!(GG instanceof bG)) throw new xZ(`a '${bG.name}' was expected, but '${GG&&GG.constructor.name}' was provided in ${ZG.constructor.name}#${wG}`)
    }
    const Gw = (GG, bG) => {
        const ZG = GG.toString(),
          wG = bG.toString();
        return ZG < wG ? -1 : ZG > wG ? 1 : 0
      },
      bw = {
        get: (GG, bG) => "symbol" === typeof bG || isNaN(bG) ? Reflect.get(GG, bG) : GG.items[bG],
        set: (GG, bG, ZG) => {
          if ("symbol" !== typeof bG && !isNaN(bG)) {
            if (void 0 === ZG || null === ZG) GG.$deleteAt(bG);
            else {
              let wG;
              if (ZG[hG]) {
                BZ(ZG, GG[dG], GG, bG);
                const LG = GG.items[bG];
                GG.isMovingItems ? (wG = GG.$wireIndex(Number(bG)), void 0 !== LG ? ZG[hG].isNew ? GG[hG].indexedOperation(wG, SG.MOVE_AND_ADD) : (GG[hG].getChange(wG) & SG.DELETE) === SG.DELETE ? GG[hG].indexedOperation(wG, SG.DELETE_AND_MOVE) : GG[hG].indexedOperation(wG, SG.MOVE) : ZG[hG].isNew && GG[hG].indexedOperation(wG, SG.ADD), ZG[hG].setParent(GG, GG[hG].root, wG)) : wG = GG.$changeAt(Number(bG), ZG), void 0 !== LG && LG[hG].root?.remove(LG[hG])
              } else wG = GG.$changeAt(Number(bG), ZG);
              GG.items[bG] = ZG, void 0 !== wG && (GG.tmpItems[wG] = ZG)
            }
            return !0
          }
          return Reflect.set(GG, bG, ZG)
        },
        deleteProperty: (GG, bG) => ("number" === typeof bG ? GG.$deleteAt(bG) : delete GG[bG], !0),
        has: (GG, bG) => "symbol" === typeof bG || isNaN(Number(bG)) ? Reflect.has(GG, bG) : Reflect.has(GG.items, bG)
      };
    class Zw {
      [hG];
      [kG];
      [JG];
      [dG];
      items = [];
      tmpItems = [];
      deletedIndexes = [];
      isMovingItems = !1;
      _needsCompaction = !1;
      static[YG] = AZ;
      static[VG] = OZ;
      static COLLECTION_KIND = eZ;
      static[pG](GG, bG, ZG) {
        if (!ZG) return !0;
        const wG = GG[JG] ?? GG;
        return "string" === typeof wG[dG] || ZG.isChangeTreeVisible(wG.tmpItems[bG]?.[hG])
      }
      static is(GG) {
        return Array.isArray(GG) || void 0 !== GG.array
      }
      static from(GG) {
        return new Zw(...Array.from(GG))
      }
      constructor() {
        this[dG] = void 0, this[JG] = this;
        const GG = new Proxy(this, bw);
        return Object.defineProperty(this, hG, {
          value: new FZ(GG, this),
          enumerable: !1,
          writable: !0
        }), arguments.length > 0 && this.push(...arguments), GG
      }
      static initializeForDecoder() {
        const GG = Object.create(Zw.prototype);
        GG.items = [], GG.isMovingItems = !1, GG._needsCompaction = !1, GG[dG] = void 0, GG[JG] = GG;
        const bG = new Proxy(GG, bw);
        return aZ(GG, bG), bG
      }
      set length(GG) {
        0 === GG ? this.clear() : GG < this.items.length ? this.splice(GG, this.length - GG) : console.warn("ArraySchema: can't set .length to a higher value than its length.")
      }
      get length() {
        return this.items.length
      }
      pauseTracking() {
        this[hG].pause()
      }
      resumeTracking() {
        this[hG].resume()
      }
      untracked(GG) {
        return this[hG].untracked(GG)
      }
      get isTrackingPaused() {
        return this[hG].paused
      }
      push() {
        const GG = this[JG],
          bG = GG.items,
          ZG = GG.tmpItems,
          wG = GG[hG],
          LG = GG[dG];
        let yG = ZG.length;
        for (let kG = 0, UG = arguments.length; kG < UG; kG++, yG++) {
          const UG = kG < 0 || arguments.length <= kG ? void 0 : arguments[kG];
          if (void 0 === UG || null === UG) return;
          "object" === typeof UG && LG && BZ(UG, LG, GG, kG), wG.indexedOperation(yG, SG.ADD), bG.push(UG), ZG.push(UG), UG[hG]?.setParent(this, wG.root, yG)
        }
        return yG
      }
      pop() {
        const GG = this[JG],
          bG = GG.tmpItems,
          ZG = GG.deletedIndexes;
        let wG = -1;
        for (let LG = bG.length - 1; LG >= 0; LG--)
          if (!0 !== ZG[LG]) {
            wG = LG;
            break
          } if (wG < 0) return;
        const SG = GG.$isUnsentAdd(wG);
        return GG[hG].delete(wG), SG ? GG.$cancelAdd(wG) : ZG[wG] = !0, GG.items.pop()
      }
      at(GG) {
        return GG < 0 && (GG += this.length), this.items[GG]
      }
      $wireIndex(GG) {
        const bG = this.deletedIndexes;
        if (0 === bG.length) return GG;
        const ZG = this.tmpItems;
        let wG = 0;
        for (let SG = 0; SG < ZG.length; SG++)
          if (!0 !== bG[SG]) {
            if (wG === GG) return SG;
            wG++
          } return ZG.length + (GG - wG)
      }
      $isUnsentAdd(GG) {
        const bG = this[hG];
        return 0 === (576 & bG.flags) && !bG.paused && "string" !== typeof this[dG] && bG.operationAt(GG) === SG.ADD
      }
      $cancelAdd(GG) {
        let bG = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        const ZG = this[hG],
          wG = this.tmpItems[GG];
        this.tmpItems.splice(GG, 1), this.deletedIndexes.length > 0 && this.deletedIndexes.splice(GG, 1), ZG.removeAt(GG, 1);
        const SG = wG?.[hG];
        void 0 !== SG && void 0 === SG.root && SG.removeParent(this), bG && this.$reindexChildren(GG)
      }
      $reindexChildren(GG, bG) {
        if (!this[hG].hasFilteredFields) return;
        if ("string" === typeof this[dG]) return;
        const ZG = this.tmpItems,
          wG = ZG.length;
        if (void 0 !== bG)
          for (; GG < wG && ZG[GG] === bG[GG];) GG++;
        for (let SG = GG; SG < wG; SG++) ZG[SG]?.[hG]?.setParentIndex(this, SG)
      }
      $changeAt(GG, bG) {
        if (void 0 === bG || null === bG) return void console.error("ArraySchema items cannot be null nor undefined; Use `splice(index, 1)` instead.");
        if (this.items[GG] === bG) return;
        const ZG = void 0 !== this.items[GG] ? "object" === typeof bG ? SG.DELETE_AND_ADD : SG.REPLACE : SG.ADD,
          wG = this.$wireIndex(GG),
          LG = this[hG];
        return LG.change(wG, ZG), bG[hG]?.setParent(this, LG.root, wG), wG
      }
      $deleteAt(GG, bG) {
        this[hG].delete(this.$wireIndex(GG), bG)
      }
      $setAt(GG, bG, ZG) {
        ZG === SG.ADD && void 0 !== this.items[GG] ? this.items.splice(GG, 0, bG) : ZG === SG.DELETE_AND_MOVE ? (this.items.splice(GG, 1), this.items[GG] = bG) : (GG > this.items.length && (this._needsCompaction = !0), this.items[GG] = bG)
      }
      clear() {
        const GG = this[JG];
        if (0 === GG.items.length) return;
        const bG = GG[hG];
        bG.forEachChild(((GG, ZG) => {
          bG.root?.remove(GG)
        })), bG.discard(), bG.operation(SG.CLEAR), GG.items.length = 0, GG.tmpItems.length = 0
      } [zG]() {
        const GG = this[JG] ?? this,
          bG = GG[hG];
        if (bG.isStreamCollection) throw new Error("@colyseus/schema: cannot reset a streamed ArraySchema (pooling not supported).");
        const ZG = GG.items;
        for (let wG = 0; wG < ZG.length; wG++) ZG[wG]?.[zG]?.();
        GG.items.length = 0, GG.tmpItems.length = 0, GG.deletedIndexes.length = 0, bG.recycle(), GG[kG] = void 0
      }
      concat() {
        return new Zw(...this.items.concat(...arguments))
      }
      join(GG) {
        return this.items.join(GG)
      }
      reverse() {
        const GG = this[JG],
          bG = GG[hG];
        if (bG.has() || GG.deletedIndexes.length > 0) {
          const bG = GG.items.slice().reverse();
          return this.clear(), this.push(...bG), this
        }
        return bG.operation(SG.REVERSE), GG.items.reverse(), GG.tmpItems.reverse(), GG.$reindexChildren(0), this
      }
      shift() {
        const GG = this[JG],
          bG = GG.items;
        if (0 === bG.length) return;
        const ZG = GG[hG],
          wG = GG.deletedIndexes;
        let LG = 0;
        for (; !0 === wG[LG];) LG++;
        const yG = GG.$isUnsentAdd(LG);
        return ZG.delete(LG, SG.DELETE), yG ? GG.$cancelAdd(LG) : wG[LG] = !0, bG.shift()
      }
      slice(GG, bG) {
        const ZG = new Zw;
        return ZG.push(...this.items.slice(GG, bG)), ZG
      }
      sort() {
        let GG = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Gw;
        const bG = this[JG];
        bG.isMovingItems = !0;
        const ZG = bG[hG];
        return bG.items.sort(GG).forEach(((GG, bG) => ZG.change(bG, SG.REPLACE))), bG.tmpItems.sort(GG), bG.$reindexChildren(0), bG.isMovingItems = !1, this
      }
      splice(GG, bG) {
        const ZG = this[JG],
          wG = ZG[hG],
          LG = ZG.items,
          yG = ZG.tmpItems,
          kG = ZG.deletedIndexes,
          UG = LG.length,
          YG = yG.length;
        for (var VG = arguments.length, pG = new Array(VG > 2 ? VG - 2 : 0), fG = 2; fG < VG; fG++) pG[fG - 2] = arguments[fG];
        const QG = pG.length,
          KG = [];
        for (let SG = 0; SG < YG; SG++) !0 !== kG[SG] && KG.push(SG);
        let dG;
        if (UG > GG) {
          void 0 === bG && (bG = UG - GG);
          for (let LG = GG; LG < GG + bG; LG++) {
            const GG = KG[LG],
              bG = ZG.$isUnsentAdd(GG);
            wG.delete(GG, SG.DELETE), bG ? (dG ??= []).push(GG) : kG[GG] = !0
          }
        } else bG = 0;
        if (QG > 0) {
          const LG = KG[GG] ?? UG,
            YG = Math.min(QG, bG);
          for (let GG = 0; GG < YG; GG++) {
            const bG = LG + GG;
            let ZG;
            const UG = void 0 !== dG ? dG.indexOf(bG) : -1; - 1 !== UG ? (dG.splice(UG, 1), ZG = SG.ADD) : ZG = kG[bG] ? SG.DELETE_AND_ADD : SG.ADD, wG.indexedOperation(bG, ZG), yG[bG] = pG[GG], kG[bG] = !1, pG[GG][hG]?.setParent(this, wG.root, bG)
          }
          const VG = QG - YG;
          if (VG > 0) {
            const GG = LG + YG;
            wG.insertAt(GG, VG);
            for (let bG = 0; bG < VG; bG++) pG[YG + bG][hG]?.setParent(this, wG.root, GG + bG);
            kG.length > 0 && kG.splice(GG, 0, ...new Array(VG).fill(!1)), yG.splice(GG, 0, ...pG.slice(YG)), ZG.$reindexChildren(GG + VG)
          }
        }
        if (void 0 !== dG && dG.length > 0) {
          for (let GG = dG.length - 1; GG >= 0; GG--) ZG.$cancelAdd(dG[GG], !1);
          ZG.$reindexChildren(dG[0])
        }
        return wG.root?.enqueueChangeTree(wG), LG.splice(GG, bG, ...pG)
      }
      unshift() {
        const GG = this[JG],
          bG = GG[hG];
        bG.unshift(arguments.length);
        for (let wG = 0; wG < arguments.length; wG++)(wG < 0 || arguments.length <= wG ? void 0 : arguments[wG])?.[hG]?.setParent(this, bG.root, wG);
        const ZG = GG.deletedIndexes;
        return ZG.length > 0 && ZG.unshift(...new Array(arguments.length).fill(!1)), GG.tmpItems.unshift(...arguments), GG.$reindexChildren(arguments.length), GG.items.unshift(...arguments)
      }
      indexOf(GG, bG) {
        return this.items.indexOf(GG, bG)
      }
      lastIndexOf(GG) {
        let bG = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.length - 1;
        return this.items.lastIndexOf(GG, bG)
      }
      every(GG, bG) {
        return this.items.every(GG, bG)
      }
      some(GG, bG) {
        return this.items.some(GG, bG)
      }
      forEach(GG, bG) {
        return this.items.forEach(GG, bG)
      }
      map(GG, bG) {
        return this.items.map(GG, bG)
      }
      filter(GG, bG) {
        return this.items.filter(GG, bG)
      }
      reduce(GG, bG) {
        return this.items.reduce.apply(this.items, arguments)
      }
      reduceRight(GG, bG) {
        return this.items.reduceRight.apply(this.items, arguments)
      }
      find(GG, bG) {
        return this.items.find(GG, bG)
      }
      findIndex(GG, bG) {
        return this.items.findIndex(GG, bG)
      }
      fill(GG, bG, ZG) {
        throw new Error("ArraySchema#fill() not implemented")
      }
      copyWithin(GG, bG, ZG) {
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
        return Zw
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
      includes(GG, bG) {
        return this.items.includes(GG, bG)
      }
      flatMap(GG, bG) {
        throw new Error("ArraySchema#flatMap() is not supported.")
      }
      flat(GG) {
        throw new Error("ArraySchema#flat() is not supported.")
      }
      findLast() {
        return this.items.findLast.apply(this.items, arguments)
      }
      findLastIndex() {
        for (var GG = arguments.length, bG = new Array(GG), ZG = 0; ZG < GG; ZG++) bG[ZG] = arguments[ZG];
        return this.items.findLastIndex.apply(this.items, arguments)
      }
      with(GG, bG) {
        const ZG = this.items.slice();
        return GG < 0 && (GG += this.length), ZG[GG] = bG, new Zw(...ZG)
      }
      toReversed() {
        return this.items.slice().reverse()
      }
      toSorted(GG) {
        return this.items.slice().sort(GG)
      }
      toSpliced(GG, bG) {
        for (var ZG = arguments.length, wG = new Array(ZG > 2 ? ZG - 2 : 0), SG = 2; SG < ZG; SG++) wG[SG - 2] = arguments[SG];
        const LG = this.items.slice();
        return LG.splice.apply(LG, arguments), LG
      }
      shuffle() {
        return this.move((GG => {
          let bG = this.items.length;
          for (; 0 != bG;) {
            let GG = Math.floor(Math.random() * bG);
            bG--, [this[bG], this[GG]] = [this[GG], this[bG]]
          }
        }))
      }
      move(GG) {
        return this.isMovingItems = !0, GG(this), this.isMovingItems = !1, this
      } [fG](GG) {
        let bG = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        const ZG = this[JG] ?? this;
        return bG || ZG.deletedIndexes[GG] ? ZG.items[GG] : ZG.tmpItems[GG] || ZG.items[GG]
      } [QG](GG) {
        const bG = this[JG] ?? this;
        bG.items[GG] = void 0, bG._needsCompaction = !0
      } [rG]() {
        const GG = this.tmpItems;
        this.tmpItems = this.items.slice(), this.deletedIndexes.length > 0 && (this.$reindexChildren(0, GG), this.deletedIndexes.length = 0)
      } [EG]() {
        const GG = this[JG] ?? this;
        GG._needsCompaction && (GG._needsCompaction = !1, GG.items = GG.items.filter((GG => void 0 !== GG)))
      } [KG](GG, bG, ZG) {
        const wG = this[JG] ?? this,
          SG = wG.items;
        let LG = !1;
        for (let yG = 0; yG < SG.length; yG++) {
          const kG = SG[yG];
          GG.has(yG) ? ZG(kG) : (LG = !0, bG(kG, yG), wG[QG](yG))
        }
        LG && wG[EG]()
      }
      toArray() {
        return this.items.slice(0)
      }
      toJSON() {
        return this.toArray().map((GG => "function" === typeof GG.toJSON ? GG.toJSON() : GG))
      }
      clone(GG) {
        let bG;
        return GG ? (bG = new Zw, bG.push(...this.items)) : bG = new Zw(...this.map((GG => GG[hG] ? GG.clone() : GG))), bG
      }
    }
    Xb("array", {
      constructor: Zw
    });
    class ww {
      keyByIndex = new Map;
      indexByKey = Object.create(null);
      nextIndex = 0;
      snapshots;
      indexOf(GG) {
        const bG = this.indexByKey[GG];
        return void 0 === bG ? void 0 : bG
      }
      assign(GG) {
        const bG = this.nextIndex++;
        return this.indexByKey[GG] = bG, this.keyByIndex.set(bG, GG), bG
      }
      snapshot(GG, bG) {
        (this.snapshots ??= new Map).set(GG, bG)
      }
      forgetSnapshot(GG) {
        this.snapshots?.delete(GG)
      }
      snapshotAt(GG) {
        return this.snapshots?.get(GG)
      }
      setIndex(GG, bG) {
        this.keyByIndex.set(GG, bG), this.indexByKey[bG] = GG
      }
      keyOf(GG) {
        return this.keyByIndex.get(GG)
      }
      cleanupAfterEncode() {
        if (void 0 !== this.snapshots) {
          for (const [GG] of this.snapshots) {
            const bG = this.keyByIndex.get(GG);
            void 0 !== bG && (delete this.indexByKey[bG], this.keyByIndex.delete(GG))
          }
          this.snapshots.clear()
        }
      }
      reset() {
        this.indexByKey = Object.create(null), this.keyByIndex.clear(), this.snapshots?.clear(), this.nextIndex = 0
      }
    }
    class Sw {
      [hG];
      [kG];
      childType;
      [dG];
      $items = new Map;
      journal = new ww;
      _stream;
      get maxPerTick() {
        return this._stream?.maxPerTick ?? 32
      }
      set maxPerTick(GG) {
        (this._stream ??= Cb()).maxPerTick = GG
      }
      get priority() {
        return this._stream?.priority
      }
      set priority(GG) {
        (this._stream ??= Cb()).priority = GG
      }
      get $indexes() {
        return this.journal.keyByIndex
      }
      get _collectionIndexes() {
        return this.journal.indexByKey
      }
      static[YG] = jZ;
      static[VG] = NZ;
      static COLLECTION_KIND = gZ;
      static[pG](GG, bG, ZG) {
        if (!ZG || "string" === typeof GG[dG]) return !0;
        const wG = GG[fG](bG) ?? GG.journal.snapshotAt(bG);
        return ZG.isChangeTreeVisible(wG[hG])
      }
      static is(GG) {
        return void 0 !== GG.map
      }
      constructor(GG) {
        if (Object.defineProperty(this, hG, {
            value: new FZ(this),
            enumerable: !1,
            writable: !0
          }), this[dG] = void 0, GG)
          if (GG instanceof Map || GG instanceof Sw) GG.forEach(((GG, bG) => this.set(bG, GG)));
          else
            for (const bG in GG) this.set(bG, GG[bG])
      }
      static initializeForDecoder() {
        const GG = Object.create(Sw.prototype);
        return GG.$items = new Map, GG.journal = new ww, GG[dG] = void 0, aZ(GG), GG
      } [Symbol.iterator]() {
        return this.$items[Symbol.iterator]()
      }
      get[Symbol.toStringTag]() {
        return this.$items[Symbol.toStringTag]
      }
      static get[Symbol.species]() {
        return Sw
      }
      set(GG, bG) {
        if (void 0 === bG || null === bG) throw new Error(`MapSchema#set('${GG}', ${bG}): trying to set ${bG} value on '${GG}'.`);
        "object" === typeof bG && this[dG] && BZ(bG, this[dG], this, GG), GG = GG.toString();
        const ZG = this[hG],
          wG = void 0 !== bG[hG],
          LG = this.journal;
        let yG, kG = LG.indexOf(GG);
        if (void 0 !== kG) {
          yG = SG.REPLACE;
          const ZG = this.$items.get(GG);
          if (ZG === bG) return;
          wG && (yG = SG.DELETE_AND_ADD, void 0 !== ZG && ZG[hG].root?.remove(ZG[hG])), void 0 !== LG.snapshotAt(kG) && LG.forgetSnapshot(kG)
        } else kG = LG.assign(GG), yG = SG.ADD;
        return this.$items.set(GG, bG), yG === SG.ADD && ZG.isStreamCollection ? void 0 !== ZG.root && mb(this, ZG.root, kG) : ZG.change(kG, yG), wG && bG[hG].setParent(this, ZG.root, kG), this
      }
      get(GG) {
        return this.$items.get(GG)
      }
      getOrInsert(GG, bG) {
        return this.$items.has(GG) ? this.$items.get(GG) : (this.set(GG, bG), bG)
      }
      getOrInsertComputed(GG, bG) {
        if (this.$items.has(GG)) return this.$items.get(GG);
        const ZG = bG(GG);
        return this.set(GG, ZG), ZG
      }
      delete(GG) {
        if (!this.$items.has(GG)) return !1;
        const bG = this.journal.indexOf(GG),
          ZG = this.$items.get(GG),
          wG = this[hG];
        if (wG.isStreamCollection) {
          const SG = wG.root;
          let LG = !1;
          return void 0 !== SG && (LG = Ib(this, SG, this[kG], bG)), void 0 !== ZG?.[hG] && SG?.remove(ZG[hG]), this.$items.delete(GG), LG || this.journal.snapshot(bG, ZG), !0
        }
        return this.journal.snapshot(bG, ZG), wG.delete(bG), this.$items.delete(GG)
      }
      clear() {
        const GG = this[hG];
        GG.discard(), GG.forEachChild(((bG, ZG) => {
          GG.root?.remove(bG)
        })), this.journal.reset(), this.$items.clear(), GG.operation(SG.CLEAR)
      } [zG]() {
        const GG = this[hG];
        if (GG.isStreamCollection) throw new Error("@colyseus/schema: cannot reset a streamed MapSchema (pooling not supported).");
        this.$items.forEach((GG => GG?.[zG]?.())), this.$items.clear(), this.journal.reset(), GG.recycle(), this[kG] = void 0
      }
      has(GG) {
        return this.$items.has(GG)
      }
      forEach(GG) {
        this.$items.forEach(GG)
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
        this[hG].pause()
      }
      resumeTracking() {
        this[hG].resume()
      }
      untracked(GG) {
        return this[hG].untracked(GG)
      }
      get isTrackingPaused() {
        return this[hG].paused
      }
      setIndex(GG, bG) {
        this.journal.setIndex(GG, bG)
      }
      getIndex(GG) {
        return this.journal.keyOf(GG)
      } [fG](GG) {
        const bG = this.journal.keyOf(GG);
        return void 0 !== bG ? this.$items.get(bG) : void 0
      } [QG](GG) {
        const bG = this.journal.keyOf(GG);
        void 0 !== bG && (this.$items.delete(bG), this.journal.keyByIndex.delete(GG))
      } [KG](GG, bG, ZG) {
        let wG = null;
        if (this.$items.forEach(((SG, LG) => {
            GG.has(LG) ? ZG(SG) : ((wG ??= new Set).add(LG), bG(SG, LG))
          })), null !== wG) {
          wG.forEach((GG => {
            this.$items.delete(GG), delete this.journal.indexByKey[GG]
          }));
          const GG = [];
          this.journal.keyByIndex.forEach(((bG, ZG) => {
            wG.has(bG) && GG.push(ZG)
          }));
          for (let bG = 0; bG < GG.length; bG++) this.journal.keyByIndex.delete(GG[bG])
        }
      } [rG]() {
        this.journal.cleanupAfterEncode()
      }
      _dropView(GG) {
        cb(this, GG)
      }
      _unregister() {}
      toJSON() {
        return Object.fromEntries(Array.from(this, (GG => {
          let [bG, ZG] = GG;
          return [bG, "function" === typeof ZG.toJSON ? ZG.toJSON() : ZG]
        })))
      }
      clone(GG) {
        let bG;
        return GG ? bG = Object.assign(new Sw, this) : (bG = new Sw, this.forEach(((GG, ZG) => {
          GG[hG] ? bG.set(ZG, GG.clone()) : bG.set(ZG, GG)
        }))), bG
      }
    }
    Xb("map", {
      constructor: Sw
    });
    class Lw {
      [hG];
      [kG];
      [dG];
      $items = new Map;
      deletedItems = {};
      $refId = 0;
      _stream;
      get maxPerTick() {
        return this._stream?.maxPerTick ?? 32
      }
      set maxPerTick(GG) {
        (this._stream ??= Cb()).maxPerTick = GG
      }
      get priority() {
        return this._stream?.priority
      }
      set priority(GG) {
        (this._stream ??= Cb()).priority = GG
      }
      static[YG] = PZ;
      static[VG] = NZ;
      static COLLECTION_KIND = TZ;
      static[pG](GG, bG, ZG) {
        return !ZG || "string" === typeof GG[dG] || ZG.isChangeTreeVisible((GG[fG](bG) ?? GG.deletedItems[bG])[hG])
      }
      static is(GG) {
        return void 0 !== GG.collection
      }
      constructor(GG) {
        Object.defineProperty(this, hG, {
          value: new FZ(this),
          enumerable: !1,
          writable: !0
        }), this[dG] = void 0, GG && GG.forEach((GG => this.add(GG)))
      }
      static initializeForDecoder() {
        const GG = Object.create(Lw.prototype);
        return GG.$items = new Map, GG.deletedItems = {}, GG.$refId = 0, GG[dG] = void 0, aZ(GG), GG
      }
      add(GG) {
        const bG = this.$refId++,
          ZG = this[hG];
        return this.$items.set(bG, GG), ZG.isStreamCollection ? void 0 !== ZG.root && mb(this, ZG.root, bG) : ZG.change(bG), void 0 !== GG[hG] && GG[hG].setParent(this, ZG.root, bG), bG
      }
      at(GG) {
        const bG = Array.from(this.$items.keys())[GG];
        return this.$items.get(bG)
      }
      entries() {
        return this.$items.entries()
      }
      delete(GG) {
        const bG = this.$items.entries();
        let ZG, wG;
        for (;
          (wG = bG.next()) && !wG.done;)
          if (GG === wG.value[1]) {
            ZG = wG.value[0];
            break
          } if (void 0 === ZG) return !1;
        const SG = this[hG];
        if (SG.isStreamCollection) {
          const GG = SG.root,
            bG = this.$items.get(ZG);
          return void 0 !== GG && Ib(this, GG, this[kG], ZG), void 0 !== bG?.[hG] && GG?.remove(bG[hG]), this.deletedItems[ZG] = bG, this.$items.delete(ZG)
        }
        return this.deletedItems[ZG] = SG.delete(ZG), this.$items.delete(ZG)
      }
      clear() {
        const GG = this[hG];
        GG.discard(), GG.forEachChild(((bG, ZG) => {
          GG.root?.remove(bG)
        })), this.$items.clear(), GG.operation(SG.CLEAR)
      } [zG]() {
        const GG = this[hG];
        if (GG.isStreamCollection) throw new Error("@colyseus/schema: cannot reset a streamed CollectionSchema (pooling not supported).");
        this.$items.forEach((GG => GG?.[zG]?.())), this.$items.clear(), this.deletedItems = {}, this.$refId = 0, GG.recycle(), this[kG] = void 0
      }
      has(GG) {
        return Array.from(this.$items.values()).some((bG => bG === GG))
      }
      forEach(GG) {
        this.$items.forEach(((bG, ZG, wG) => GG(bG, ZG, this)))
      }
      values() {
        return this.$items.values()
      }
      get size() {
        return this.$items.size
      }
      pauseTracking() {
        this[hG].pause()
      }
      resumeTracking() {
        this[hG].resume()
      }
      untracked(GG) {
        return this[hG].untracked(GG)
      }
      get isTrackingPaused() {
        return this[hG].paused
      } [Symbol.iterator]() {
        return this.$items.values()
      }
      setIndex(GG, bG) {}
      getIndex(GG) {
        return GG
      } [fG](GG) {
        return this.$items.get(GG)
      } [QG](GG) {
        this.$items.delete(GG)
      } [KG](GG, bG, ZG) {
        let wG = null;
        if (this.$items.forEach(((SG, LG) => {
            GG.has(LG) ? ZG(SG) : ((wG ??= []).push(LG), bG(SG, LG))
          })), null !== wG)
          for (let SG = 0; SG < wG.length; SG++) this[QG](wG[SG])
      } [rG]() {
        for (const GG in this.deletedItems) delete this.deletedItems[GG]
      }
      _dropView(GG) {
        cb(this, GG)
      }
      _unregister() {}
      toArray() {
        return Array.from(this.$items.values())
      }
      toJSON() {
        const GG = [];
        return this.forEach(((bG, ZG) => {
          GG.push("function" === typeof bG.toJSON ? bG.toJSON() : bG)
        })), GG
      }
      clone(GG) {
        let bG;
        return GG ? bG = Object.assign(new Lw, this) : (bG = new Lw, this.forEach((GG => {
          GG[hG] ? bG.add(GG.clone()) : bG.add(GG)
        }))), bG
      }
    }
    Xb("collection", {
      constructor: Lw
    });
    class yw {
      [hG];
      [kG];
      [dG];
      $items = new Map;
      deletedItems = {};
      $refId = 0;
      _stream;
      get maxPerTick() {
        return this._stream?.maxPerTick ?? 32
      }
      set maxPerTick(GG) {
        (this._stream ??= Cb()).maxPerTick = GG
      }
      get priority() {
        return this._stream?.priority
      }
      set priority(GG) {
        (this._stream ??= Cb()).priority = GG
      }
      static[YG] = PZ;
      static[VG] = NZ;
      static COLLECTION_KIND = RZ;
      static[pG](GG, bG, ZG) {
        return !ZG || "string" === typeof GG[dG] || ZG.isVisible((GG[fG](bG) ?? GG.deletedItems[bG])[hG])
      }
      static is(GG) {
        return void 0 !== GG.set
      }
      constructor(GG) {
        Object.defineProperty(this, hG, {
          value: new FZ(this),
          enumerable: !1,
          writable: !0
        }), this[dG] = void 0, GG && GG.forEach((GG => this.add(GG)))
      }
      static initializeForDecoder() {
        const GG = Object.create(yw.prototype);
        return GG.$items = new Map, GG.deletedItems = {}, GG.$refId = 0, GG[dG] = void 0, aZ(GG), GG
      }
      add(GG) {
        if (this.has(GG)) return !1;
        const bG = this.$refId++,
          ZG = this[hG];
        return this.$items.set(bG, GG), ZG.isStreamCollection ? void 0 !== ZG.root && mb(this, ZG.root, bG) : ZG.change(bG, SG.ADD), void 0 !== GG[hG] && GG[hG].setParent(this, ZG.root, bG), bG
      }
      entries() {
        return this.$items.entries()
      }
      delete(GG) {
        const bG = this.$items.entries();
        let ZG, wG;
        for (;
          (wG = bG.next()) && !wG.done;)
          if (GG === wG.value[1]) {
            ZG = wG.value[0];
            break
          } if (void 0 === ZG) return !1;
        const SG = this[hG];
        if (SG.isStreamCollection) {
          const GG = SG.root,
            bG = this.$items.get(ZG);
          return void 0 !== GG && Ib(this, GG, this[kG], ZG), void 0 !== bG?.[hG] && GG?.remove(bG[hG]), this.deletedItems[ZG] = bG, this.$items.delete(ZG)
        }
        return this.deletedItems[ZG] = SG.delete(ZG), this.$items.delete(ZG)
      }
      clear() {
        const GG = this[hG];
        GG.discard(), this.$items.clear(), GG.operation(SG.CLEAR)
      } [zG]() {
        const GG = this[hG];
        if (GG.isStreamCollection) throw new Error("@colyseus/schema: cannot reset a streamed SetSchema (pooling not supported).");
        this.$items.forEach((GG => GG?.[zG]?.())), this.$items.clear(), this.deletedItems = {}, this.$refId = 0, GG.recycle(), this[kG] = void 0
      }
      has(GG) {
        const bG = this.$items.values();
        let ZG, wG = !1;
        for (;
          (ZG = bG.next()) && !ZG.done;)
          if (GG === ZG.value) {
            wG = !0;
            break
          } return wG
      }
      forEach(GG) {
        this.$items.forEach(((bG, ZG, wG) => GG(bG, ZG, this)))
      }
      values() {
        return this.$items.values()
      }
      get size() {
        return this.$items.size
      }
      pauseTracking() {
        this[hG].pause()
      }
      resumeTracking() {
        this[hG].resume()
      }
      untracked(GG) {
        return this[hG].untracked(GG)
      }
      get isTrackingPaused() {
        return this[hG].paused
      } [Symbol.iterator]() {
        return this.$items.values()
      }
      setIndex(GG, bG) {}
      getIndex(GG) {
        return GG
      } [fG](GG) {
        return this.$items.get(GG)
      } [QG](GG) {
        this.$items.delete(GG)
      } [KG](GG, bG, ZG) {
        let wG = null;
        if (this.$items.forEach(((SG, LG) => {
            GG.has(LG) ? ZG(SG) : ((wG ??= []).push(LG), bG(SG, LG))
          })), null !== wG)
          for (let SG = 0; SG < wG.length; SG++) this[QG](wG[SG])
      } [rG]() {
        for (const GG in this.deletedItems) delete this.deletedItems[GG]
      }
      _dropView(GG) {
        cb(this, GG)
      }
      _unregister() {}
      toArray() {
        return Array.from(this.$items.values())
      }
      toJSON() {
        const GG = [];
        return this.forEach(((bG, ZG) => {
          GG.push("function" === typeof bG.toJSON ? bG.toJSON() : bG)
        })), GG
      }
      clone(GG) {
        let bG;
        return GG ? bG = Object.assign(new yw, this) : (bG = new yw, this.forEach((GG => {
          GG[hG] ? bG.add(GG.clone()) : bG.add(GG)
        }))), bG
      }
    }
    Xb("set", {
      constructor: yw
    });
    class kw {
      [hG];
      [kG];
      [dG];
      $items = new Map;
      $nextPosition = 0;
      _itemIndex = new Map;
      _stream;
      get maxPerTick() {
        return this._stream?.maxPerTick ?? 32
      }
      set maxPerTick(GG) {
        (this._stream ??= Cb()).maxPerTick = GG
      }
      get priority() {
        return this._stream?.priority
      }
      set priority(GG) {
        (this._stream ??= Cb()).priority = GG
      }
      static $isStream = !0;
      static[YG] = PZ;
      static[VG] = NZ;
      static COLLECTION_KIND = HZ;
      static[pG](GG, bG, ZG) {
        if (!ZG) return !0;
        const wG = GG[fG](bG);
        return void 0 !== wG && ZG.isVisible(wG[hG])
      }
      static is(GG) {
        return GG && void 0 !== GG.stream
      }
      constructor() {
        Object.defineProperty(this, hG, {
          value: new FZ(this),
          enumerable: !1,
          writable: !0
        }), this[dG] = void 0
      }
      static initializeForDecoder() {
        const GG = Object.create(kw.prototype);
        return GG.$items = new Map, GG.$nextPosition = 0, GG._itemIndex = new Map, GG[dG] = void 0, aZ(GG), GG
      }
      add(GG) {
        if (this._itemIndex.has(GG)) return -1;
        const bG = this.$nextPosition++;
        this.$items.set(bG, GG), this._itemIndex.set(GG, bG);
        const ZG = this[hG].root;
        return void 0 !== GG[hG] && GG[hG].setParent(this, ZG, bG), void 0 !== ZG && mb(this, ZG, bG), bG
      }
      remove(GG) {
        const bG = this._itemIndex.get(GG);
        if (void 0 === bG) return !1;
        this._itemIndex.delete(GG), this.$items.delete(bG);
        const ZG = this[hG].root;
        return void 0 !== ZG && (Ib(this, ZG, this[kG], bG), void 0 !== GG[hG] && ZG.remove(GG[hG])), !0
      }
      has(GG) {
        return this._itemIndex.has(GG)
      }
      clear() {
        const GG = this[hG].root;
        if (void 0 !== GG) {
          ! function(GG, bG, ZG) {
            const wG = GG._stream;
            if (void 0 !== wG) {
              wG.broadcastPending.clear();
              for (const GG of wG.sentBroadcast) wG.broadcastDeletes.add(GG);
              wG.sentBroadcast.clear(), bG.forEachActiveView((GG => {
                wG.pendingByView.get(GG.id)?.clear();
                const bG = wG.sentByView.get(GG.id);
                if (void 0 !== bG && bG.size > 0) {
                  let wG = GG.changes.get(ZG);
                  void 0 === wG && (wG = new Map, GG.changes.set(ZG, wG));
                  for (const GG of bG) wG.set(GG, SG.DELETE);
                  bG.clear()
                }
              }))
            }
          }(this, GG, this[kG]);
          for (const bG of this.$items.values()) void 0 !== bG[hG] && GG.remove(bG[hG])
        }
        this.$items.clear(), this._itemIndex.clear()
      }
      forEach(GG) {
        for (const [bG, ZG] of this.$items) GG(ZG, bG, this)
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
      setIndex(GG, bG) {}
      getIndex(GG) {
        return GG
      } [fG](GG) {
        return this.$items.get(GG)
      } [QG](GG) {
        const bG = this.$items.get(GG);
        void 0 !== bG && (this._itemIndex.delete(bG), this.$items.delete(GG))
      } [KG]() {} [rG]() {}
      toArray() {
        return Array.from(this.$items.values())
      }
      toJSON() {
        const GG = [];
        return this.forEach((bG => {
          GG.push("function" === typeof bG?.toJSON ? bG.toJSON() : bG)
        })), GG
      }
      clone(GG) {
        if (GG) {
          return Object.assign(new kw, this)
        }
        const bG = new kw;
        return bG.maxPerTick = this.maxPerTick, this.forEach((GG => {
          bG.add("function" === typeof GG?.clone ? GG.clone() : GG)
        })), bG
      }
      _dropView(GG) {
        cb(this, GG)
      }
      _unregister() {}
    }
    Xb("stream", {
      constructor: kw
    });
    class Uw {
      [XG] = !0;
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
      constructor(GG) {
        this._type = GG
      }
      default (GG) {
        return this._default = GG, this._hasDefault = !0, this
      }
      view(GG) {
        return this._view = GG ?? -1, this
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
        const GG = this._type;
        if (GG && "object" === typeof GG && void 0 !== GG.array) throw new Error(ib);
        return this._stream = !0, this
      }
      priority(GG) {
        return this._streamPriority = GG, this
      }
      deprecated() {
        let GG = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
        return this._deprecated = !0, this._deprecatedThrows = GG, this
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

    function Yw(GG) {
      return null != GG && !0 === GG[XG]
    }

    function Vw(GG) {
      return () => new Uw(GG)
    }

    function pw(GG) {
      if (Yw(GG)) {
        const bG = GG._type;
        throw new Error(`t.array/map/set/collection(): a t.* builder is not a valid element type \u2014 ${"string"===typeof bG?`use the type name instead: t.array("${bG}")`:'collections accept a Schema class or a primitive type name ("string", "number", \u2026)'}.`)
      }
      return GG
    }

    function fw(GG) {
      return new Uw({
        quantized: jb(GG)
      })
    }
    const Qw = Object.freeze({
        string: Vw("string"),
        number: Vw("number"),
        boolean: Vw("boolean"),
        int8: Vw("int8"),
        uint8: Vw("uint8"),
        int16: Vw("int16"),
        uint16: Vw("uint16"),
        int32: Vw("int32"),
        uint32: Vw("uint32"),
        int64: Vw("int64"),
        uint64: Vw("uint64"),
        float32: Vw("float32"),
        float64: Vw("float64"),
        bigint64: Vw("bigint64"),
        biguint64: Vw("biguint64"),
        ref: GG => new Uw(GG),
        array: GG => new Uw({
          array: pw(GG)
        }),
        map: GG => new Uw({
          map: pw(GG)
        }),
        set: GG => new Uw({
          set: pw(GG)
        }),
        collection: GG => new Uw({
          collection: pw(GG)
        }),
        stream: GG => {
          const bG = new Uw({
            stream: pw(GG)
          });
          return bG._stream = !0, bG
        },
        quantized: fw,
        angle: GG => fw({
          min: 0,
          max: 2 * Math.PI,
          mode: "wrap",
          bits: GG?.bits ?? 16
        })
      }),
      Kw = -1;

    function hw(GG) {
      return qb.register(GG), GG
    }

    function dw() {
      let GG = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Kw;
      return function(bG, ZG) {
        const wG = tb.initialize(bG.constructor);
        tb.setTag(wG, ZG, GG)
      }
    }

    function Jw(GG, bG) {
      const ZG = tb.initialize(GG.constructor);
      tb.setUnreliable(ZG, bG)
    }

    function rw(GG, bG) {
      const ZG = tb.initialize(GG.constructor);
      tb.setPatchOnly(ZG, bG)
    }

    function zw(GG, bG) {
      const ZG = tb.initialize(GG.constructor);
      tb.setFullStateOnly(ZG, bG)
    }

    function Ew(GG, bG) {
      return function(ZG, wG) {
        const SG = ZG.constructor;
        if (!GG) throw new Error(`${SG.name}: @type() reference provided for "${wG}" is undefined. Make sure you don't have any circular dependencies.`);
        GG = gb(GG, `${SG.name}.${wG}`), qb.register(SG);
        const LG = Object.getPrototypeOf(SG)[Symbol.metadata],
          yG = tb.initialize(SG);
        let kG = yG[wG];
        if (void 0 !== yG[kG]) {
          if (yG[kG].deprecated) return;
          if (void 0 !== yG[kG].type) {
            const GG = new Error(`@colyseus/schema: Duplicate '${wG}' definition on '${SG.name}'.\nCheck @type() annotation`);
            throw new Error(`${GG.message} ${GG.stack.split("\n")[4].trim()}`)
          }
        } else kG = yG[WG] ?? (LG && LG[WG]) ?? -1, kG++;
        if (bG && bG.manual) tb.addField(yG, kG, wG, GG, {
          enumerable: !0,
          configurable: !0,
          writable: !0
        });
        else {
          const {
            complexTypeKlass: bG,
            childType: ZG
          } = nb(GG);
          tb.addField(yG, kG, wG, GG, Xw(wG, kG, ZG, bG))
        }
        yG[uG][wG] && Object.defineProperty(ZG, wG, yG[uG][wG]), ("string" === typeof GG || Pb(GG)) && (yG[CG] || Object.defineProperty(yG, CG, {
          value: [],
          enumerable: !1,
          configurable: !0,
          writable: !0
        }), yG[CG][kG] = "string" === typeof GG ? bb[GG] : sb(GG.quantized))
      }
    }
    const ow = {
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

    function Xw(GG, bG, ZG, wG) {
      let LG;
      return LG = wG ? function(GG, bG, ZG, wG) {
        const LG = wG.constructor === Zw,
          yG = wG.constructor === Sw;
        return function(GG) {
          const wG = this[oG],
            kG = wG[bG];
          if (GG !== kG) {
            if (void 0 !== GG && null !== GG) {
              if (!LG || GG instanceof Zw)
                if (!yG || GG instanceof Sw) GG[dG] = ZG;
                else {
                  const bG = new Sw;
                  if (bG[dG] = ZG, GG instanceof Map) GG.forEach(((GG, ZG) => bG.set(ZG, GG)));
                  else
                    for (const ZG in GG) bG.set(ZG, GG[ZG]);
                  GG = bG
                }
              else {
                const bG = new Zw;
                bG[dG] = ZG, bG.push(...GG), GG = bG
              }
              const wG = this[hG],
                YG = this.constructor;
              void 0 !== kG && null !== kG && kG[hG] ? (wG.root?.remove(kG[hG]), YG[UG](wG, bG, SG.DELETE_AND_ADD)) : YG[UG](wG, bG, SG.ADD), GG[hG]?.setParent(this, wG.root, bG)
            } else void 0 !== kG && null !== kG && this[hG].delete(bG);
            wG[bG] = GG
          }
        }
      }(0, bG, ZG, wG) : "string" === typeof ZG ? function(GG, bG, ZG) {
        const wG = ow[ZG],
          LG = "string" === ZG,
          yG = "boolean" === ZG;
        return function(ZG) {
          const kG = this[oG],
            YG = kG[bG];
          if (ZG !== YG) {
            if (void 0 !== ZG && null !== ZG) {
              if (!yG && void 0 !== wG && typeof ZG !== wG && (!LG || null !== ZG)) {
                const bG = ZG && ZG.constructor ? ` (${ZG.constructor.name})` : "";
                throw new xZ(`a '${wG}' was expected, but '${JSON.stringify(ZG)}'${bG} was provided in ${this.constructor.name}#${GG}`)
              }
              this.constructor[UG](this[hG], bG, SG.ADD)
            } else void 0 !== YG && null !== YG && this[hG].delete(bG);
            kG[bG] = ZG
          }
        }
      }(GG, bG, ZG) : Pb(ZG) ? function(GG, bG, ZG) {
        return function(wG) {
          const LG = this[oG],
            yG = LG[bG];
          if (void 0 !== wG && null !== wG) {
            if ("number" !== typeof wG) throw new xZ(`a 'number' was expected, but '${JSON.stringify(wG)}' was provided in ${this.constructor.name}#${GG}`);
            if ((wG = Ab(ZG, Mb(ZG, wG))) === yG) return;
            this.constructor[UG](this[hG], bG, SG.ADD)
          } else {
            if (wG === yG) return;
            void 0 !== yG && null !== yG && this[hG].delete(bG)
          }
          LG[bG] = wG
        }
      }(GG, bG, ZG.quantized) : function(GG, bG, ZG) {
        return function(wG) {
          const LG = this[oG],
            yG = LG[bG];
          if (wG !== yG) {
            if (void 0 !== wG && null !== wG) {
              BZ(wG, ZG, this, GG);
              const LG = this[hG],
                kG = this.constructor;
              void 0 !== yG && null !== yG && yG[hG] ? (LG.root?.remove(yG[hG]), kG[UG](LG, bG, SG.DELETE_AND_ADD)) : kG[UG](LG, bG, SG.ADD), wG[hG]?.setParent(this, LG.root, bG)
            } else void 0 !== yG && null !== yG && this[hG].delete(bG);
            LG[bG] = wG
          }
        }
      }(GG, bG, ZG), {
        get: function() {
          return this[oG][bG]
        },
        set: LG,
        enumerable: !0,
        configurable: !0
      }
    }

    function uw() {
      let GG = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
      return function(bG, ZG) {
        const wG = tb.initialize(bG.constructor);
        tb.setDeprecated(wG, ZG), GG && (wG[uG] ??= {}, wG[uG][ZG] = {
          get: function() {
            throw new Error(`${ZG} is deprecated.`)
          },
          set: function(GG) {},
          enumerable: !1,
          configurable: !0
        }, Object.defineProperty(bG, ZG, wG[uG][ZG]))
      }
    }
    let iw = !1;

    function Cw(GG, bG, ZG) {
      iw || (iw = !0, console.warn("@colyseus/schema: defineTypes() is deprecated and will be removed in a future release. Use schema() with t.* field builders instead \u2192 https://docs.colyseus.io/state/schema"));
      for (let wG in bG) Ew(bG[wG], ZG)(GG.prototype, wG);
      return GG
    }

    function Ww(GG, bG) {
      let ZG = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Iw;
      if (null == GG || "object" !== typeof GG) throw new Error(`schema(): first argument must be a fields object (got ${typeof GG}).`);
      const wG = {},
        SG = {},
        LG = {},
        yG = {},
        kG = (GG, bG) => {
          if (bG.hasDefault)((GG, bG) => {
            "function" === typeof bG ? yG[GG] = bG : bG && "function" === typeof bG.clone ? yG[GG] = () => bG.clone() : LG[GG] = bG
          })(GG, bG.default);
          else if (!bG.optional) {
            const ZG = function(GG) {
              if (GG && "object" === typeof GG) {
                if (void 0 !== GG.array) return () => new Zw;
                if (void 0 !== GG.map) return () => new Sw;
                if (void 0 !== GG.set) return () => new yw;
                if (void 0 !== GG.collection) return () => new Lw;
                if (void 0 !== GG.stream) return () => new kw
              } else if ("function" === typeof GG && Iw.is(GG) && (!GG.prototype.initialize || 0 === GG.prototype.initialize.length)) return () => new GG
            }(bG.type);
            ZG && (yG[GG] = ZG)
          }
        },
        UG = {},
        YG = [],
        VG = [],
        pG = {},
        fG = [],
        QG = [],
        KG = {},
        hG = [];
      for (const oG in GG) {
        const ZG = GG[oG],
          LG = `schema(${bG?`'${bG}'`:""}): field '${oG}'`;
        if (Yw(ZG)) {
          const GG = ZG.toDefinition();
          if (GG.noSync) {
            if (void 0 !== GG.view || GG.unreliable || GG.patchOnly || GG.fullStateOnly || GG.stream) throw new Error(`${LG} uses .noSync() together with a sync-only modifier (.view/.unreliable/.patchOnly/.fullStateOnly/.stream). A local-only field cannot be synchronized.`);
            kG(oG, GG);
            continue
          }
          if (GG.patchOnly && GG.fullStateOnly) throw new Error(`${LG} uses .patchOnly() together with .fullStateOnly(). Those are the only two delivery channels, so the field would never reach a client \u2014 use .noSync() if that is intended.`);
          const bG = gb(GG.type, LG);
          if ("function" === typeof bG && !Iw.is(bG)) throw new Error(`${LG} is a synced ref to non-Schema class '${bG.name||"(anonymous)"}' \u2014 use .noSync(), or Metadata.setFields().`);
          wG[oG] = bG, void 0 !== GG.view && (UG[oG] = GG.view), GG.unreliable && YG.push(oG), GG.patchOnly && VG.push(oG), GG.deprecated && (pG[oG] = GG.deprecatedThrows), GG.fullStateOnly && fG.push(oG), GG.stream && QG.push(oG), void 0 !== GG.streamPriority && (KG[oG] = GG.streamPriority), GG.optional && hG.push(oG), kG(oG, GG)
        } else {
          if ("function" !== typeof ZG) throw new Error(`${LG} must be a t.* builder, Schema subclass, or method (got ${typeof ZG}).`);
          Iw.is(ZG) ? (wG[oG] = ZG, ZG.prototype.initialize && 0 !== ZG.prototype.initialize.length || (yG[oG] = () => new ZG)) : SG[oG] = ZG
        }
      }
      const dG = GG => {
          for (const bG in LG) GG[bG] = LG[bG];
          for (const bG in yG) GG[bG] = yG[bG]()
        },
        JG = () => {
          const GG = {};
          return dG(GG), GG
        },
        rG = "function" === typeof SG.initialize,
        zG = SG.initialize ?? ZG._initialize,
        EG = class extends ZG {
          constructor() {
            for (var GG = arguments.length, bG = new Array(GG), ZG = 0; ZG < GG; ZG++) bG[ZG] = arguments[ZG];
            const SG = bG[0];
            void 0 === SG ? (super(), dG(this)) : super(Object.assign(JG(), rG ? (GG => {
              const bG = Object.keys(wG),
                ZG = {};
              for (const wG in GG) bG.includes(wG) || (ZG[wG] = GG[wG]);
              return ZG
            })(SG) : SG)), zG && new.target === EG && zG.apply(this, bG)
          }
        };
      bG && Object.defineProperty(EG, "name", {
        value: bG
      }), tb.setFields(EG, wG), EG._getDefaultValues = JG, EG._initialize = zG, Object.assign(EG.prototype, SG);
      for (const oG in UG) dw(UG[oG])(EG.prototype, oG);
      for (const oG of YG) Jw(EG.prototype, oG);
      for (const oG of VG) rw(EG.prototype, oG);
      for (const oG in pG) uw(pG[oG])(EG.prototype, oG);
      if (fG.length > 0 || QG.length > 0) {
        const GG = EG[Symbol.metadata];
        for (const bG of fG) tb.setFullStateOnly(GG, bG);
        for (const bG of QG) tb.setStream(GG, bG);
        for (const bG in KG) tb.setStreamPriority(GG, bG, KG[bG])
      }
      if (hG.length > 0) {
        const GG = EG[Symbol.metadata];
        for (const bG of hG) GG[GG[bG]].optional = !0
      }
      return EG.extend = (GG, bG) => Ww(GG, bG, EG), EG
    }

    function mw(GG) {
      const bG = GG[hG].root,
        ZG = {
          ops: {},
          refs: []
        };
      let wG = bG.changes.next;
      for (; wG;) {
        const GG = wG.changeTree;
        void 0 !== GG ? (ZG.refs.push(`refId#${GG.ref[kG]}`), GG.forEach(((GG, bG) => {
          if (GG < 0 || !bG) return;
          const wG = SG[bG];
          ZG.ops[wG] || (ZG.ops[wG] = 0), ZG.ops[wG]++
        })), wG = wG.next) : wG = wG.next
      }
      return ZG
    }
    class Iw {
      static[YG] = lZ;
      static[VG] = DZ;
      [kG];
      [oG];
      static initialize(GG) {
        Object.defineProperty(GG, hG, {
          value: new FZ(GG),
          enumerable: !1,
          writable: !0
        }), GG[oG] = []
      }
      static initializeForDecoder() {
        const GG = Object.create(this.prototype);
        return aZ(GG), GG[oG] = [], GG
      }
      static reset(GG) {
        const bG = GG?.[hG];
        if (void 0 === bG || "function" !== typeof bG.recycle) throw new Error("@colyseus/schema: Schema.reset() requires a tracked (encoder-side) instance.");
        if (void 0 !== bG.extraParents) throw new Error(`@colyseus/schema: cannot reset a shared instance (${GG.constructor.name}) with multiple parents.`);
        GG[zG]()
      } [zG]() {
        const GG = this.constructor[Symbol.metadata],
          bG = GG?.[mG] ?? [],
          ZG = this[oG];
        for (let wG = 0; wG < bG.length; wG++) {
          const GG = ZG[bG[wG]];
          GG?.[zG]?.()
        }
        this[hG].recycle(), this[kG] = void 0
      }
      static is(GG) {
        const bG = GG[Symbol.metadata];
        return "object" === typeof bG && null !== bG
      }
      static isSchema(GG) {
        return "function" === typeof GG?.assign
      }
      static[UG](GG, bG) {
        let ZG = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : SG.ADD;
        GG.change(bG, ZG)
      }
      static[pG](GG, bG, ZG) {
        const wG = GG.constructor[Symbol.metadata],
          SG = wG[bG]?.tag;
        return void 0 === ZG ? void 0 === SG : void 0 === SG || (SG === Kw ? ZG.isChangeTreeVisible(GG[hG]) : ZG.hasTagOnTree(GG[hG], SG))
      }
      constructor(GG) {
        Iw.initialize(this), GG && Iw.assignProps(this, GG)
      }
      assign(GG) {
        return Iw.assignProps(this, GG), this
      }
      static assignProps(GG, bG) {
        const ZG = GG.constructor[Symbol.metadata];
        if (ZG && void 0 !== ZG[WG])
          for (let SG = 0; SG <= ZG[WG]; SG++) {
            const wG = ZG[SG];
            if (!wG) continue;
            const LG = bG[wG.name];
            void 0 !== LG && (GG[wG.name] = LG)
          }
        const wG = Object.keys(bG);
        for (let SG = 0; SG < wG.length; SG++) {
          const LG = wG[SG];
          ZG && void 0 !== ZG[LG] || (GG[LG] = bG[LG])
        }
      }
      restore(GG) {
        const bG = this.constructor[Symbol.metadata];
        for (const ZG in bG) {
          const wG = bG[ZG],
            SG = wG.name,
            LG = wG.type,
            yG = GG[SG];
          if (void 0 !== yG && null !== yG)
            if ("string" === typeof LG) this[SG] = yG;
            else if (Iw.is(LG)) {
            const GG = new LG;
            GG.restore(yG), this[SG] = GG
          } else if ("object" === typeof LG) {
            const GG = Object.keys(LG)[0],
              bG = LG[GG];
            if ("map" === GG) {
              const GG = this[SG];
              for (const ZG in yG)
                if (Iw.is(bG)) {
                  const wG = new bG;
                  wG.restore(yG[ZG]), GG.set(ZG, wG)
                } else GG.set(ZG, yG[ZG])
            } else if ("array" === GG) {
              const GG = this[SG];
              for (let ZG = 0; ZG < yG.length; ZG++)
                if (Iw.is(bG)) {
                  const wG = new bG;
                  wG.restore(yG[ZG]), GG.push(wG)
                } else GG.push(yG[ZG])
            }
          }
        }
        return this
      }
      setDirty(GG, bG) {
        const ZG = this.constructor[Symbol.metadata];
        this[hG].change(ZG[ZG[GG]].index, bG)
      }
      pauseTracking() {
        this[hG].pause()
      }
      resumeTracking() {
        this[hG].resume()
      }
      untracked(GG) {
        return this[hG].untracked(GG)
      }
      get isTrackingPaused() {
        return this[hG].paused
      }
      clone() {
        const GG = Object.create(this.constructor.prototype);
        Iw.initialize(GG);
        const bG = this.constructor[Symbol.metadata];
        for (const ZG in bG) {
          const wG = bG[ZG].name;
          "object" === typeof this[wG] && "function" === typeof this[wG]?.clone ? GG[wG] = this[wG].clone() : GG[wG] = this[wG]
        }
        return GG
      }
      toJSON() {
        const GG = {},
          bG = this.constructor[Symbol.metadata];
        for (const ZG in bG) {
          const wG = bG[ZG],
            SG = wG.name;
          wG.deprecated || null === this[SG] || "undefined" === typeof this[SG] || (GG[SG] = "function" === typeof this[SG].toJSON ? this[SG].toJSON() : this[SG])
        }
        return GG
      }
      discardAllChanges() {
        this[hG].discardAll()
      } [fG](GG) {
        return this[this.constructor[Symbol.metadata][GG].name]
      } [QG](GG) {
        this[this.constructor[Symbol.metadata][GG].name] = void 0
      }
      static debugRefIds(GG) {
        let bG = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          ZG = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          wG = arguments.length > 3 ? arguments[3] : void 0,
          SG = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "";
        const LG = bG ? ` - ${JSON.stringify(GG.toJSON())}` : "",
          yG = GG[hG],
          UG = GG[kG],
          YG = wG ? wG.root.refCount[UG] : yG.refCount,
          VG = YG > 1 ? ` [\xd7${YG}]` : "";
        let pG = `${function(GG){return new Array(GG).fill(0).map(((bG,ZG)=>ZG===GG-1?"\u2514\u2500 ":"   ")).join("")}(ZG)}${SG}${GG.constructor.name} (refId: ${UG})${VG}${LG}\n`;
        return yG.forEachChild(((SG, LG) => {
          let yG = LG;
          "number" === typeof LG && GG.$indexes && (yG = GG.$indexes.get(LG) ?? LG);
          const kG = void 0 !== GG.forEach && void 0 !== yG ? `["${yG}"]: ` : "";
          pG += this.debugRefIds(SG.ref, bG, ZG + 1, wG, kG)
        })), pG
      }
      static debugRefIdEncodingOrder(GG) {
        let bG = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "allChanges";
        const ZG = [],
          wG = GG[hG];
        if ("changes" === bG) {
          let GG = wG.root.changes?.next;
          for (; GG;) GG.changeTree && ZG.push(GG.changeTree.ref[kG]), GG = GG.next;
          return ZG
        }
        const SG = "allFilteredChanges" === bG,
          LG = new Set,
          yG = GG => {
            LG.has(GG) || (LG.add(GG), GG.isFiltered === SG && ZG.push(GG.ref[kG]), GG.forEachChild(((GG, bG) => yG(GG))))
          };
        return yG(wG), ZG
      }
      static debugRefIdsFromDecoder(GG) {
        return this.debugRefIds(GG.state, !1, 0, GG)
      }
      static debugChanges(GG) {
        let bG = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        const ZG = GG[hG],
          wG = bG ? "allChanges" : "changes";
        let LG = `${GG.constructor.name} (${GG[kG]}) -> .${wG}:\n`;
        return bG ? ZG.forEachLive((GG => {
          LG += `- [${GG}]: ADD (${JSON.stringify(ZG.getValue(Number(GG),!0))})\n`
        })) : ZG.forEach(((GG, bG) => {
          GG < 0 || !bG || (LG += `- [${GG}]: ${SG[bG]} (${JSON.stringify(ZG.getValue(Number(GG),!1))})\n`)
        })), LG
      }
    }
    LG(Iw);
    const Fw = {
      value: 0,
      enumerable: !1,
      writable: !0
    };
    class vw {
      types;
      nextUniqueId = 0;
      changeTrees = {};
      get refCount() {
        const GG = {};
        for (const bG in this.changeTrees) GG[bG] = this.changeTrees[bG].refCount;
        return GG
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
      enqueueFilterRefresh(GG) {
        this.types.hasFilters && (GG.flags & mZ || (GG.flags |= mZ, this.pendingFilterRefresh.push(GG)))
      }
      _nodePool = [];
      _nextViewId = 0;
      _freeViewIds = [];
      acquireViewId() {
        return this._freeViewIds.length > 0 ? this._freeViewIds.pop() : this._nextViewId++
      }
      releaseViewId(GG) {
        this._freeViewIds.push(GG)
      }
      activeViews = new Map;
      streamTrees = new Set;
      registerView(GG) {
        this.activeViews.set(GG.id, new WeakRef(GG))
      }
      unregisterView(GG) {
        this.activeViews.delete(GG.id);
        const bG = GG.id;
        for (const ZG of this.streamTrees) ZG._dropView(bG)
      }
      forEachActiveView(GG) {
        for (const [bG, ZG] of this.activeViews) {
          const wG = ZG.deref();
          if (void 0 !== wG) GG(wG);
          else {
            this.activeViews.delete(bG);
            for (const GG of this.streamTrees) GG._dropView(bG)
          }
        }
      }
      registerStream(GG) {
        this.streamTrees.add(GG)
      }
      unregisterStream(GG) {
        this.streamTrees.delete(GG)
      }
      constructor(GG) {
        let bG = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        this.types = GG, this.nextUniqueId = bG
      }
      add(GG) {
        const bG = GG.ref;
        void 0 === bG[kG] && (Fw.value = this.nextUniqueId++, Object.defineProperty(bG, kG, Fw));
        const ZG = bG[kG],
          wG = void 0 === this.changeTrees[ZG];
        wG && (this.changeTrees[ZG] = GG), GG.needsRestage && (GG.needsRestage = !1, GG.forEachLiveWithCtx(GG, ZZ));
        const SG = wG ? 0 : GG.refCount;
        return GG.refCount = SG + 1, SG > 0 && this.enqueueFilterRefresh(GG), wG
      }
      remove(GG) {
        const bG = GG.refCount - 1;
        if (bG <= 0) {
          if (GG.root = void 0, delete this.changeTrees[GG.ref[kG]], GG.isStreamCollection) {
            const bG = GG.ref;
            bG._unregister?.(), this.unregisterStream(bG)
          }
          this.removeFromQueue(GG), this.removeFromUnreliableQueue(GG), GG.refCount = 0, GG.needsRestage = !0, GG.forEachChild(((bG, ZG) => {
            bG.removeParent(GG.ref) && (void 0 === bG.parentRef || bG.refCount > 0 ? this.remove(bG) : this.moveNextToParent(bG))
          }))
        } else GG.refCount = bG, this.enqueueFilterRefresh(GG), this.recursivelyMoveNextToParent(GG);
        return bG
      }
      recursivelyMoveNextToParent(GG) {
        this.moveNextToParent(GG), GG.forEachChild(((GG, bG) => this.recursivelyMoveNextToParent(GG)))
      }
      moveNextToParent(GG) {
        GG.changesNode && this._moveNextToParentInList(this.changes, GG, GG.changesNode, "changesNode"), GG.unreliableChangesNode && this._moveNextToParentInList(this.unreliableChanges, GG, GG.unreliableChangesNode, "unreliableChangesNode")
      }
      _moveNextToParentInList(GG, bG, ZG, wG) {
        const SG = bG.parent;
        if (!SG || !SG[hG]) return;
        const LG = SG[hG][wG];
        LG && LG !== ZG && (ZG.position > LG.position || (ZG.prev ? ZG.prev.next = ZG.next : GG.next = ZG.next, ZG.next ? ZG.next.prev = ZG.prev : GG.tail = ZG.prev, ZG.prev = GG.tail, ZG.next = void 0, GG.tail.next = ZG, GG.tail = ZG, ZG.position = GG.nextPosition++))
      }
      enqueueChangeTree(GG) {
        (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : GG.changesNode) || (GG.changesNode = this._appendToList(this.changes, GG))
      }
      enqueueUnreliable(GG) {
        (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : GG.unreliableChangesNode) || (GG.unreliableChangesNode = this._appendToList(this.unreliableChanges, GG))
      }
      _appendToList(GG, bG) {
        const ZG = this._nodePool;
        let wG;
        return ZG.length > 0 ? (wG = ZG.pop(), wG.changeTree = bG, wG.next = void 0, wG.prev = void 0) : wG = {
          changeTree: bG,
          next: void 0,
          prev: void 0,
          position: 0
        }, GG.next ? (wG.prev = GG.tail, GG.tail.next = wG, GG.tail = wG) : (GG.nextPosition = 0, GG.next = wG, GG.tail = wG), wG.position = GG.nextPosition++, wG
      }
      releaseNode(GG) {
        GG.changeTree = void 0, GG.prev = void 0, GG.next = void 0, this._nodePool.push(GG)
      }
      removeFromQueue(GG) {
        return this._removeNode(this.changes, GG, GG.changesNode, "changesNode")
      }
      removeFromUnreliableQueue(GG) {
        return this._removeNode(this.unreliableChanges, GG, GG.unreliableChangesNode, "unreliableChangesNode")
      }
      _removeNode(GG, bG, ZG, wG) {
        return !(!ZG || ZG.changeTree !== bG) && (ZG.prev ? ZG.prev.next = ZG.next : GG.next = ZG.next, ZG.next ? ZG.next.prev = ZG.prev : GG.tail = ZG.prev, bG[wG] = void 0, this.releaseNode(ZG), !0)
      }
    }

    function aw(GG, bG) {
      if (-1 === bG || bG >= GG.length) return !1;
      const ZG = GG.length - 1;
      for (let wG = bG; wG < ZG; wG++) GG[wG] = GG[wG + 1];
      return GG.length = ZG, !0
    }

    function lw(GG, bG, ZG) {
      const wG = ~ZG,
        SG = GG.changeTrees;
      for (const LG in SG) {
        const GG = SG[LG],
          ZG = GG.visibleViews;
        void 0 !== ZG && bG < ZG.length && (ZG[bG] &= wG);
        const yG = GG.subscribedViews;
        void 0 !== yG && bG < yG.length && (yG[bG] &= wG);
        const kG = GG.tagViews;
        void 0 !== kG && kG.forEach((GG => {
          bG < GG.length && (GG[bG] &= wG)
        }))
      }
    }
    const jw = new FinalizationRegistry((GG => {
      let {
        root: bG,
        id: ZG,
        slot: wG,
        bit: SG
      } = GG;
      lw(bG, wG, SG), bG.activeViews.delete(ZG);
      for (const LG of bG.streamTrees) LG._dropView(ZG);
      bG.releaseViewId(ZG)
    }));

    function Pw(GG) {
      if (void 0 === GG) return "undefined";
      if (null === GG) return "null";
      const bG = typeof GG;
      return "string" === bG ? JSON.stringify(GG.length > 30 ? `${GG.slice(0,30)}\u2026` : GG) : "object" !== bG && "function" !== bG ? `${bG} ${String(GG)}` : Array.isArray(GG) ? `Array(${GG.length})` : GG.constructor?.name ?? "Object"
    }
    class Mw {
      iterable;
      items;
      id = -1;
      _root;
      _slot = 0;
      _bit = 0;
      changes = new Map;
      constructor() {
        let GG = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        this.iterable = GG, GG && (this.items = [])
      }
      _bindRoot(GG) {
        void 0 === this._root && (this._root = GG, this.id = GG.acquireViewId(), this._slot = this.id >> 5, this._bit = 1 << (31 & this.id), GG.registerView(this), jw.register(this, {
          root: GG,
          id: this.id,
          slot: this._slot,
          bit: this._bit
        }, this))
      }
      dispose() {
        void 0 !== this._root && (this._root.unregisterView(this), lw(this._root, this._slot, this._bit), this._root.releaseViewId(this.id), jw.unregister(this), this._root = void 0, this.id = -1)
      }
      isVisible(GG) {
        const bG = GG.visibleViews,
          ZG = this._slot;
        return void 0 !== bG && ZG < bG.length && 0 !== (bG[ZG] & this._bit)
      }
      markVisible(GG) {
        const bG = this._slot;
        let ZG = GG.visibleViews;
        for (void 0 === ZG && (ZG = GG.visibleViews = []); ZG.length <= bG;) ZG.push(0);
        ZG[bG] |= this._bit
      }
      unmarkVisible(GG) {
        const bG = GG.visibleViews;
        if (void 0 === bG) return;
        const ZG = this._slot;
        ZG < bG.length && (bG[ZG] &= ~this._bit)
      }
      isSubscribed(GG) {
        const bG = GG.subscribedViews,
          ZG = this._slot;
        return void 0 !== bG && ZG < bG.length && 0 !== (bG[ZG] & this._bit)
      }
      _setSubscribed(GG) {
        const bG = this._slot;
        let ZG = GG.subscribedViews;
        for (void 0 === ZG && (ZG = GG.subscribedViews = []); ZG.length <= bG;) ZG.push(0);
        ZG[bG] |= this._bit
      }
      _clearSubscribed(GG) {
        const bG = GG.subscribedViews;
        if (void 0 === bG) return;
        const ZG = this._slot;
        ZG < bG.length && (bG[ZG] &= ~this._bit)
      }
      hasTagOnTree(GG, bG) {
        const ZG = GG.tagViews;
        if (void 0 === ZG) return !1;
        const wG = this._slot,
          SG = this._bit;
        for (let LG = bG; 0 !== LG; LG &= LG - 1) {
          const GG = ZG.get(LG & -LG);
          if (void 0 !== GG && wG < GG.length && 0 !== (GG[wG] & SG)) return !0
        }
        return !1
      }
      addTag(GG, bG) {
        if (bG === Kw) return;
        let ZG = GG.tagViews;
        void 0 === ZG && (ZG = GG.tagViews = new Map);
        const wG = this._slot,
          SG = this._bit;
        for (let LG = bG; LG > 0; LG &= LG - 1) {
          const GG = LG & -LG;
          let bG = ZG.get(GG);
          for (void 0 === bG && (bG = [], ZG.set(GG, bG)); bG.length <= wG;) bG.push(0);
          bG[wG] |= SG
        }
      }
      removeTag(GG, bG) {
        if (bG === Kw) return;
        const ZG = GG.tagViews;
        if (void 0 === ZG) return;
        const wG = this._slot,
          SG = ~this._bit;
        for (let LG = bG; LG > 0; LG &= LG - 1) {
          const GG = ZG.get(LG & -LG);
          void 0 !== GG && wG < GG.length && (GG[wG] &= SG)
        }
      }
      removeAllTagsOnTree(GG) {
        const bG = GG.tagViews;
        if (void 0 === bG) return;
        const ZG = this._slot,
          wG = ~this._bit;
        bG.forEach((GG => {
          ZG < GG.length && (GG[ZG] &= wG)
        }))
      }
      add(GG) {
        let bG = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Kw,
          ZG = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        return this._add(GG, bG, ZG, !1)
      }
      _addImmediate(GG) {
        let bG = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Kw;
        this._add(GG, bG, !0, !0)
      }
      _add(GG, bG, ZG, wG) {
        const LG = GG?.[hG];
        if (!LG) return console.warn(`StateView#add(): expected a Schema instance or collection, received ${Pw(GG)}`), !1;
        const yG = LG.parent;
        if (!yG && 0 !== GG[kG]) throw new Error(`Cannot add a detached instance to the StateView. Make sure to assign the "${LG.ref.constructor.name}" instance to the state before calling view.add()`);
        void 0 === this._root && void 0 !== LG.root && this._bindRoot(LG.root);
        const UG = yG?.[hG];
        if (!wG && UG?.isStreamCollection) return ab(yG, this.id, LG.parentIndex), !0;
        const YG = GG.constructor[Symbol.metadata],
          VG = this.isVisible(LG);
        if (!this.iterable || !ZG || VG && -1 !== this.items.indexOf(GG) || this.items.push(GG), this.markVisible(LG), ZG && yG && this.addParentOf(LG, bG), !wG && LG.isStreamCollection) return !0;
        if (bG === Kw && LG.isNew) return this._markSubtreeVisible(LG, bG), !1;
        let pG = this.changes.get(GG[kG]);
        void 0 === pG && (pG = new Map, this.changes.set(GG[kG], pG));
        let fG = !1;
        const QG = LG.encDescriptor.tags;
        if (LG.forEachChild(((GG, ZG) => {
            const wG = QG[ZG];
            if (void 0 !== wG) {
              if (!(wG === Kw || bG !== Kw && 0 !== (wG & bG))) return
            }
            this.add(GG.ref, bG, !1) && (fG = !0)
          })), bG !== Kw) {
          this.addTag(LG, bG);
          const GG = YG?.[FG];
          if (void 0 !== GG)
            for (let ZG = bG; ZG > 0; ZG &= ZG - 1) GG[ZG & -ZG]?.forEach((GG => {
              LG.getChange(GG) !== SG.DELETE && pG.set(GG, SG.ADD)
            }))
        }
        if ((bG === Kw || !VG) && (!LG.isNew || fG))
          if (LG.isArray && "string" !== typeof LG.refTarget[dG]) LG.refTarget.items.length > 0 && (pG.set(-1, SG.ADD), fG = !0);
          else {
            const GG = LG.encDescriptor.tags;
            LG.forEachLive((ZG => {
              const wG = GG[ZG];
              (void 0 === wG || wG === Kw || bG !== Kw && 0 !== (wG & bG)) && (pG.set(ZG, SG.ADD), fG = !0)
            }))
          } return fG
      }
      _markSubtreeVisible(GG, bG) {
        const ZG = GG.encDescriptor.tags;
        GG.forEachChild(((GG, wG) => {
          const SG = ZG[wG];
          if (void 0 !== SG) {
            if (!(SG === Kw || bG !== Kw && 0 !== (SG & bG))) return
          }
          GG.isNew ? (this.markVisible(GG), this._markSubtreeVisible(GG, bG)) : this._add(GG.ref, bG, !1, !1)
        }))
      }
      addParentOf(GG, bG) {
        const ZG = GG.parent[hG],
          wG = GG.parentIndex;
        this.isVisible(ZG) || this.markVisible(ZG);
        const LG = ZG.parent?.[hG];
        if (LG && this.addParentOf(ZG, bG), ZG.hasFilteredFields && ZG.getChange(wG) !== SG.DELETE) {
          let LG = this.changes.get(ZG.ref[kG]);
          void 0 === LG && (LG = new Map, this.changes.set(ZG.ref[kG], LG));
          const yG = ZG.encDescriptor.tags[wG];
          void 0 !== yG && yG !== Kw && 0 !== (yG & bG) && this.addTag(ZG, bG), LG.set(ZG.isArray ? GG : wG, SG.ADD)
        }
      }
      _touchAncestorsOf(GG) {
        let bG = GG.parent?.[hG];
        if (void 0 === bG) return;
        const ZG = [];
        for (; void 0 !== bG;) {
          if (bG.hasFilteredFields) {
            const GG = bG.ref[kG];
            if (this.changes.has(GG)) break;
            ZG.push(bG)
          }
          bG = bG.parent?.[hG]
        }
        for (let wG = ZG.length - 1; wG >= 0; wG--) this.changes.set(ZG[wG].ref[kG], new Map)
      }
      remove(GG) {
        let bG = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Kw,
          ZG = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        const wG = GG?.[hG];
        if (!wG) return console.warn(`StateView#remove(): expected a Schema instance or collection, received ${Pw(GG)}`), this;
        const LG = wG.parent?.[hG];
        if (LG?.isStreamCollection) return this.unmarkVisible(wG), this.iterable && !ZG && aw(this.items, this.items.indexOf(GG)),
          function(GG, bG, ZG, wG, LG) {
            const yG = GG._stream;
            if (void 0 === yG) return !1;
            const kG = yG.pendingByView.get(bG);
            if (kG?.has(wG)) return kG.delete(wG), !1;
            const UG = yG.sentByView.get(bG);
            if (UG?.has(wG)) {
              UG.delete(wG);
              let GG = LG.get(ZG);
              return void 0 === GG && (GG = new Map, LG.set(ZG, GG)), GG.set(wG, SG.DELETE), !0
            }
          }(wG.parent, this.id, wG.parent[kG], wG.parentIndex, this.changes), this._recursiveDeleteVisibleChangeTree(wG), this;
        if (wG.isStreamCollection) {
          this.unmarkVisible(wG), this.iterable && !ZG && aw(this.items, this.items.indexOf(GG));
          const bG = wG.ref,
            LG = bG._stream;
          if (void 0 !== LG) {
            LG.pendingByView.get(this.id)?.clear();
            const GG = LG.sentByView.get(this.id);
            if (void 0 !== GG && GG.size > 0) {
              const ZG = bG[kG];
              let wG = this.changes.get(ZG);
              void 0 === wG && (wG = new Map, this.changes.set(ZG, wG));
              for (const bG of GG) wG.set(bG, SG.DELETE);
              GG.clear()
            }
          }
          return this
        }
        this.unmarkVisible(wG), this.iterable && !ZG && aw(this.items, this.items.indexOf(GG));
        const yG = wG.ref,
          UG = yG.constructor[Symbol.metadata],
          YG = yG[kG];
        this._touchAncestorsOf(wG);
        let VG = this.changes.get(YG);
        if (void 0 === VG && (VG = new Map, this.changes.set(YG, VG)), bG === Kw) {
          const GG = wG.parent;
          if (GG && !tb.isValidInstance(GG) && wG.isFiltered) {
            const bG = LG.isArray ? wG : wG.parentIndex,
              ZG = GG[kG];
            let yG = this.changes.get(ZG);
            void 0 === yG ? (yG = new Map, this.changes.set(ZG, yG)) : yG.get(bG) === SG.ADD && this._dropPendingEntries(wG), yG.set(bG, SG.DELETE), this._recursiveDeleteVisibleChangeTree(wG)
          } else UG?.[IG]?.forEach((GG => this._removeViewField(wG, VG, GG)))
        } else {
          const GG = UG?.[FG];
          if (void 0 !== GG)
            for (let ZG = bG; ZG > 0; ZG &= ZG - 1) GG[ZG & -ZG]?.forEach((GG => this._removeViewField(wG, VG, GG)))
        }
        return void 0 === bG ? this.removeAllTagsOnTree(wG) : this.removeTag(wG, bG), this
      }
      has(GG) {
        return this.isVisible(GG[hG])
      }
      hasTag(GG) {
        let bG = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Kw;
        return this.hasTagOnTree(GG[hG], bG)
      }
      subscribe(GG, bG) {
        const ZG = GG?.[hG];
        if (!ZG) return console.warn(`StateView#subscribe(): expected a Schema collection, received ${Pw(GG)}`), this;
        if (void 0 === this._root && void 0 !== ZG.root && this._bindRoot(ZG.root), void 0 !== bG)
          if (ZG.isStreamCollection) {
            const ZG = Wb(GG);
            null === bG ? ZG.priorityByView?.delete(this.id) : (ZG.priorityByView ??= new Map).set(this.id, bG)
          } else {
            const bG = GG?.constructor?.name ?? "collection",
              wG = ZG.parent;
            if (void 0 === wG) console.warn(`StateView#subscribe(): \`priority\` ignored \u2014 this ${bG} is not attached to a state yet, so it cannot be identified as a stream. Subscribe after assigning it to the state.`);
            else {
              const GG = wG?.constructor?.[Symbol.metadata]?.[ZG.parentIndex]?.name,
                SG = GG ? `${wG.constructor.name}#${GG}` : bG;
              console.warn(`StateView#subscribe(): \`priority\` ignored \u2014 ${SG} is a ${bG}, not a streaming collection. Declare the field with .stream() (e.g. t.map(X).stream()) or use t.stream(X) to enable priority batching.`)
            }
          } if (this.isSubscribed(ZG)) return this;
        const wG = void 0 !== ZG.parent && !this.isVisible(ZG);
        if (wG ? (this.addParentOf(ZG, Kw), this._add(GG, Kw, !1, !1)) : this.markVisible(ZG), this._setSubscribed(ZG), ZG.isStreamCollection) {
          const bG = GG;
          ZG.forEachChild(((GG, ZG) => {
            ab(bG, this.id, ZG)
          }))
        } else wG || ZG.forEachChild((GG => {
          this.markVisible(GG)
        }));
        return this
      }
      unsubscribe(GG) {
        const bG = GG?.[hG];
        if (!bG) return console.warn(`StateView#unsubscribe(): expected a Schema collection, received ${Pw(GG)}`), this;
        if (!this.isSubscribed(bG)) return this;
        this._clearSubscribed(bG);
        const ZG = bG.ref[kG];
        if (bG.isStreamCollection) {
          const bG = GG._stream;
          if (void 0 !== bG) {
            bG.pendingByView.get(this.id)?.clear();
            const GG = bG.sentByView.get(this.id);
            if (void 0 !== GG && GG.size > 0) {
              let bG = this.changes.get(ZG);
              void 0 === bG && (bG = new Map, this.changes.set(ZG, bG));
              for (const ZG of GG) bG.set(ZG, SG.DELETE);
              GG.clear()
            }
          }
        } else {
          const GG = bG.isArray;
          let wG = this.changes.get(ZG);
          bG.forEachChild(((bG, LG) => {
            void 0 === wG && (wG = new Map, this.changes.set(ZG, wG)), wG.set(GG ? bG : LG, SG.DELETE), this.unmarkVisible(bG)
          }))
        }
        return this.unmarkVisible(bG), this
      }
      clear() {
        if (!this.iterable) throw new Error("StateView#clear() is only available for iterable StateView's. Use StateView(iterable: true) constructor.");
        for (let GG = 0, bG = this.items.length; GG < bG; GG++) this.remove(this.items[GG], Kw, !0);
        this.items.length = 0
      }
      isChangeTreeVisible(GG) {
        let bG = this.isVisible(GG);
        if (!bG && GG.isVisibilitySharedWithParent)
          if (this.isVisible(GG.parent[hG])) this.markVisible(GG), bG = !0;
          else
            for (let ZG = GG.extraParents; void 0 !== ZG; ZG = ZG.next) {
              const wG = ZG.ref[hG];
              if (wG.isFiltered && this.isVisible(wG)) {
                this.markVisible(GG), bG = !0;
                break
              }
            }
        return bG
      }
      _recursiveDeleteVisibleChangeTree(GG) {
        GG.forEachChild((GG => {
          this.unmarkVisible(GG), this._recursiveDeleteVisibleChangeTree(GG)
        }))
      }
      _dropPendingEntries(GG) {
        this.changes.delete(GG.ref[kG]), GG.forEachChild((GG => this._dropPendingEntries(GG)))
      }
      _removeViewField(GG, bG, ZG) {
        const wG = bG.get(ZG) === SG.ADD;
        bG.set(ZG, SG.DELETE);
        const LG = GG.ref[GG.encDescriptor.names[ZG]],
          yG = LG?.[hG];
        yG && (this.unmarkVisible(yG), this._recursiveDeleteVisibleChangeTree(yG), wG && this._dropPendingEntries(yG))
      }
    }

    function Aw(GG) {
      GG.structSwitchEmitted || (GG.shouldEmitSwitch && (GG.buffer[GG.it.offset++] = 255, bb.number(GG.buffer, GG.ref[kG], GG.it)), GG.structSwitchEmitted = !0)
    }

    function sw(GG, bG) {
      gw(GG, bG, SG.ADD)
    }

    function qw(GG, bG) {
      if (bG._fullSyncGen === GG.gen) return;
      bG._fullSyncGen = GG.gen;
      if (!GG.hasView || GG.view.isChangeTreeVisible(bG)) {
        const ZG = bG.encDescriptor;
        GG.changeTree = bG, GG.ref = bG.ref, GG.encoder = ZG.encoder, GG.filter = ZG.filter, GG.metadata = ZG.metadata, GG.treeIsFiltered = bG.isFiltered, GG.isSchema = ZG.isSchema, GG.filterBitmask = ZG.filterBitmask, GG.tags = ZG.tags, GG.structSwitchEmitted = !1, GG.shouldEmitSwitch = GG.hasView || GG.it.offset > GG.initialOffset || bG !== GG.rootChangeTree, bG.isArray && bG.collDirty.size > 0 && (bG.flags |= 512), SZ(bG, GG, sw)
      }
      JZ(bG, GG, nw)
    }

    function nw(GG, bG, ZG) {
      qw(GG, bG)
    }

    function gw(GG, bG, ZG) {
      if (bG < 0) {
        if (GG.treeIsFiltered !== GG.emitFiltered) return;
        return Aw(GG), void(GG.buffer[GG.it.offset++] = 255 & Math.abs(bG))
      }
      if ((GG.isSchema ? GG.treeIsFiltered || (bG < 32 ? 0 !== (GG.filterBitmask & 1 << bG) : void 0 !== GG.tags[bG]) : GG.treeIsFiltered) !== GG.emitFiltered) return;
      const wG = GG.isEncodeAll ? SG.ADD : ZG;
      void 0 !== wG && (void 0 === GG.filter || GG.filter(GG.ref, bG, GG.view)) && (Aw(GG), GG.encoder(GG.self, GG.buffer, GG.changeTree, bG, wG, GG.it, GG.isEncodeAll, GG.hasView, GG.metadata))
    }

    function ew(GG, bG) {
      const ZG = new Uint8Array(GG.length + bG.length);
      return ZG.set(GG, 0), ZG.set(bG, GG.length), ZG
    }
    class Rw {
      static BUFFER_SIZE = 16384;
      sharedBuffer = new Uint8Array(Rw.BUFFER_SIZE);
      context;
      state;
      root;
      constructor(GG, bG) {
        this.context = qb.cache(GG.constructor), this.root = bG ?? new vw(this.context), this.setState(GG)
      }
      setState(GG) {
        this.state = GG, this.state[hG].setRoot(this.root)
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
        let GG = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
            offset: 0
          },
          bG = arguments.length > 1 ? arguments[1] : void 0,
          ZG = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : this.sharedBuffer,
          wG = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : GG.offset;
        return this._encodeChannel(GG, bG, ZG, wG, !1)
      }
      encodeUnreliable() {
        let GG = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
            offset: 0
          },
          bG = arguments.length > 1 ? arguments[1] : void 0,
          ZG = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : this.sharedBuffer,
          wG = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : GG.offset;
        return this._encodeChannel(GG, bG, ZG, wG, !0)
      }
      _encodeChannel(GG, bG, ZG, wG, SG) {
        this.root.pendingFilterRefresh.length > 0 && yZ(this.root);
        const LG = void 0 !== bG,
          yG = this.state[hG],
          kG = this._encodeCtx;
        kG.self = this, kG.buffer = ZG, kG.it = GG, kG.view = bG, kG.isEncodeAll = !1, kG.hasView = LG, kG.emitFiltered = LG;
        let UG = SG ? this.root.unreliableChanges : this.root.changes;
        for (; UG = UG.next;) {
          const ZG = UG.changeTree;
          if (LG && !bG.isChangeTreeVisible(ZG)) continue;
          const YG = SG ? ZG.unreliableRecorder : ZG;
          if (!YG || !YG.has()) continue;
          const VG = ZG.encDescriptor;
          kG.changeTree = ZG, kG.ref = ZG.ref, kG.encoder = VG.encoder, kG.filter = VG.filter, kG.metadata = VG.metadata, kG.treeIsFiltered = ZG.isFiltered, kG.isSchema = VG.isSchema, kG.filterBitmask = VG.filterBitmask, kG.tags = VG.tags, kG.structSwitchEmitted = !1, kG.isRootTree = ZG === yG, kG.shouldEmitSwitch = LG || GG.offset > wG || !kG.isRootTree, YG.forEachWithCtx(kG, gw)
        }
        return SG || LG || !this._isStreamBroadcastMode || this._emitStreamBroadcast(ZG, GG), GG.offset > ZG.byteLength ? (ZG = this._resizeBuffer(ZG, GG.offset), GG.offset = wG, this._encodeChannel(GG, bG, ZG, wG, SG)) : ZG.subarray(0, GG.offset)
      }
      encodeFullSync(GG, bG, ZG, wG) {
        let SG = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : GG.offset;
        this.root.pendingFilterRefresh.length > 0 && yZ(this.root);
        const LG = void 0 !== wG,
          yG = this.state[hG],
          kG = this._encodeCtx;
        return kG.self = this, kG.buffer = bG, kG.it = GG, kG.view = wG, kG.isEncodeAll = !0, kG.hasView = LG, kG.emitFiltered = ZG, kG.gen = ++this._fullSyncGen, kG.initialOffset = SG, kG.rootChangeTree = yG, qw(kG, yG), GG.offset > bG.byteLength ? (bG = this._resizeBuffer(bG, GG.offset), GG.offset = SG, this.encodeFullSync(GG, bG, ZG, wG, SG)) : bG.subarray(0, GG.offset)
      }
      _resizeBuffer(GG, bG) {
        const ZG = Math.ceil(bG / Rw.BUFFER_SIZE) * Rw.BUFFER_SIZE,
          wG = new Uint8Array(ZG);
        return wG.set(GG), GG === this.sharedBuffer && (this.sharedBuffer = wG), wG
      }
      encodeAll() {
        let GG = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
            offset: 0
          },
          bG = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.sharedBuffer;
        return this.encodeFullSync(GG, bG, !1)
      }
      encodeAllView(GG, bG, ZG) {
        let wG = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : this.sharedBuffer;
        const SG = ZG.offset;
        return wG = this.encodeFullSync(ZG, wG, !0, GG, SG), ew(wG.subarray(0, bG), wG.subarray(SG, ZG.offset))
      }
      ensureCapacity(GG, bG) {
        if (bG + Rw.BUFFER_SIZE <= GG.byteLength) return GG;
        const ZG = Math.ceil((bG + Rw.BUFFER_SIZE) / Rw.BUFFER_SIZE) * Rw.BUFFER_SIZE,
          wG = new Uint8Array(ZG);
        return wG.set(GG.subarray(0, bG)), GG === this.sharedBuffer && (this.sharedBuffer = wG), wG
      }
      encodeView(GG, bG, ZG) {
        let wG = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : this.sharedBuffer,
          LG = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4];
        const yG = ZG.offset;
        this._emitStreamPriority(GG);
        for (const UG of GG.changes.keys()) {
          const bG = GG.changes.get(UG),
            LG = this.root.changeTrees[UG];
          if (void 0 === LG) {
            GG.changes.delete(UG);
            continue
          }
          if (0 === bG.size) continue;
          const yG = LG.encDescriptor,
            YG = yG.encoder,
            VG = yG.metadata,
            pG = LG.ref,
            QG = LG.refTarget;
          wG = this.ensureCapacity(wG, ZG.offset), wG[ZG.offset++] = 255, bb.number(wG, pG[kG], ZG);
          for (const [UG, KG] of bG) {
            let bG;
            if (-1 === UG) {
              const GG = QG.tmpItems,
                bG = QG.deletedIndexes;
              for (let yG = 0; yG < GG.length; yG++) void 0 !== GG[yG] && !0 !== bG[yG] && YG(this, wG, LG, yG, SG.ADD, ZG, !1, !0, VG);
              continue
            }
            if ("number" === typeof UG) bG = UG;
            else {
              const ZG = UG.indexInParent(pG);
              if (void 0 === ZG) continue;
              if (bG = ZG, KG === SG.ADD && LG.getChange(bG) === SG.DELETE) {
                GG.changes.delete(UG.ref[kG]);
                continue
              }
            }
            YG(this, wG, LG, bG, void 0 !== QG[fG](bG) && KG || SG.DELETE, ZG, !1, !0, VG)
          }
        }
        return GG.changes.clear(), wG = this.encode(ZG, GG, wG), LG ? ew(wG.subarray(0, bG), wG.subarray(yG, ZG.offset)) : wG.subarray(yG, ZG.offset)
      }
      encodeUnreliableView(GG, bG, ZG) {
        let wG = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : this.sharedBuffer;
        const SG = ZG.offset;
        return wG = this.encodeUnreliable(ZG, GG, wG, SG), ew(wG.subarray(0, bG), wG.subarray(SG, ZG.offset))
      }
      _emitStreamBroadcast(GG, bG) {
        const ZG = this.root.streamTrees;
        for (const wG of ZG) {
          const ZG = wG,
            LG = ZG[hG],
            yG = ZG[kG];
          if (void 0 === yG) continue;
          const UG = ZG._stream,
            YG = UG.broadcastDeletes,
            VG = UG.broadcastPending,
            pG = UG.sentBroadcast,
            QG = YG.size > 0,
            KG = VG.size > 0,
            dG = LG.encDescriptor,
            JG = dG.encoder,
            rG = dG.metadata;
          if (QG || KG) {
            if (GG[bG.offset++] = 255, bb.number(GG, yG, bG), QG) {
              for (const ZG of YG) JG(this, GG, LG, ZG, SG.DELETE, bG, !1, !1, rG);
              YG.clear()
            }
            const wG = UG.maxPerTick,
              KG = [];
            let dG = 0;
            const zG = [];
            for (const yG of VG) {
              if (dG >= wG) break;
              const kG = ZG[fG](yG);
              void 0 !== kG ? (JG(this, GG, LG, yG, SG.ADD, bG, !1, !1, rG), pG.add(yG), KG.push(kG), zG.push(yG), dG++) : zG.push(yG)
            }
            for (const GG of zG) VG.delete(GG);
            for (const ZG of KG) {
              const wG = ZG[hG];
              if (void 0 === wG) continue;
              const LG = ZG[kG];
              if (void 0 === LG) continue;
              GG[bG.offset++] = 255, bb.number(GG, LG, bG);
              const yG = wG.encDescriptor,
                UG = yG.encoder,
                YG = yG.metadata;
              wG.forEachLive((ZG => {
                tb.hasUnreliableAtIndex(YG, ZG) || UG(this, GG, wG, ZG, SG.ADD, bG, !1, !1, YG)
              }))
            }
          }
          for (const wG of pG) {
            const SG = ZG[fG](wG);
            if (void 0 === SG) continue;
            const LG = SG[hG];
            if (void 0 === LG || !LG.has()) continue;
            const yG = SG[kG];
            if (void 0 === yG) continue;
            GG[bG.offset++] = 255, bb.number(GG, yG, bG);
            const UG = LG.encDescriptor,
              YG = UG.encoder,
              VG = UG.metadata;
            LG.forEach(((ZG, wG) => {
              ZG < 0 || tb.hasUnreliableAtIndex(VG, ZG) || YG(this, GG, LG, ZG, wG, bG, !1, !1, VG)
            }))
          }
        }
      }
      _emitStreamPriority(GG) {
        const bG = this.root.streamTrees;
        if (0 === bG.size) return;
        const ZG = GG.id;
        for (const wG of bG) {
          const bG = wG,
            LG = bG._stream,
            yG = LG.pendingByView.get(ZG);
          if (void 0 === yG || 0 === yG.size) continue;
          const UG = LG.priorityByView?.get(ZG),
            YG = void 0 !== UG,
            VG = LG.priority,
            pG = LG.maxPerTick,
            QG = [],
            KG = [];
          if (YG || void 0 !== VG) {
            const ZG = [],
              wG = [];
            let SG = 0;
            for (const LG of yG) {
              const yG = bG[fG](LG);
              if (void 0 === yG) {
                KG.push(LG);
                continue
              }
              const kG = YG ? UG(yG) : VG(GG, yG);
              if (SG < pG) {
                let GG = SG++;
                for (; GG > 0 && wG[GG - 1] < kG;) wG[GG] = wG[GG - 1], ZG[GG] = ZG[GG - 1], GG--;
                wG[GG] = kG, ZG[GG] = LG
              } else if (kG > wG[pG - 1]) {
                let GG = pG - 1;
                for (; GG > 0 && wG[GG - 1] < kG;) wG[GG] = wG[GG - 1], ZG[GG] = ZG[GG - 1], GG--;
                wG[GG] = kG, ZG[GG] = LG
              }
            }
            for (let GG = 0; GG < SG; GG++) QG.push(ZG[GG])
          } else
            for (const GG of yG) {
              if (QG.length >= pG) break;
              QG.push(GG)
            }
          for (const GG of KG) yG.delete(GG);
          const dG = QG.length;
          let JG = LG.sentByView.get(ZG);
          void 0 === JG && (JG = new Set, LG.sentByView.set(ZG, JG));
          for (let ZG = 0; ZG < dG; ZG++) {
            const wG = QG[ZG],
              LG = bG[fG](wG);
            if (void 0 === LG) {
              yG.delete(wG);
              continue
            }
            GG._addImmediate(LG);
            const UG = LG[hG];
            if (void 0 !== UG) {
              const bG = LG[kG];
              let ZG = GG.changes.get(bG);
              void 0 === ZG && (ZG = new Map, GG.changes.set(bG, ZG));
              const wG = UG.metadata;
              UG.forEachLive((GG => {
                tb.hasUnreliableAtIndex(wG, GG) || ZG.set(GG, SG.ADD)
              }))
            }
            yG.delete(wG), JG.add(wG)
          }
        }
      }
      discardChanges() {
        const GG = this.root.changes;
        let bG = GG.next;
        const ZG = this.root;
        for (; bG;) {
          const GG = bG.next;
          bG.changeTree.endEncode(), ZG.releaseNode(bG), bG = GG
        }
        GG.next = void 0, GG.tail = void 0
      }
      discardUnreliableChanges() {
        const GG = this.root.unreliableChanges;
        let bG = GG.next;
        const ZG = this.root;
        for (; bG;) {
          const GG = bG.next;
          bG.changeTree.endEncodeUnreliable(), ZG.releaseNode(bG), bG = GG
        }
        GG.next = void 0, GG.tail = void 0
      }
      tryEncodeTypeId(GG, bG, ZG, wG) {
        const SG = this.context.getTypeId(bG),
          LG = this.context.getTypeId(ZG);
        void 0 !== LG ? SG !== LG && (GG[wG.offset++] = 213, bb.number(GG, LG, wG)) : console.warn(`@colyseus/schema WARNING: Class "${ZG.name}" is not registered on TypeRegistry - Please either tag the class with @entity or define a @type() field.`)
      }
      get hasChanges() {
        return void 0 !== this.root.changes.next || this._hasStreamBacklog()
      }
      get _isStreamBroadcastMode() {
        return 0 === this.root.activeViews.size && this.root.streamTrees.size > 0
      }
      _hasStreamBacklog() {
        const GG = this.root;
        if (0 === GG.streamTrees.size) return !1;
        const bG = 0 === GG.activeViews.size;
        for (const ZG of GG.streamTrees)
          if (bG ? vb(ZG) : Fb(ZG, GG)) return !0;
        return !1
      }
      get hasUnreliableChanges() {
        return void 0 !== this.root.unreliableChanges.next
      }
    }
    class Tw extends Error {
      constructor(GG) {
        super(GG), this.name = "DecodingWarning"
      }
    }
    const Hw = {
      value: 0,
      enumerable: !1,
      writable: !0
    };
    class tw {
      refs = new Map;
      refCount = {};
      deletedRefs = new Set;
      callbacks = {};
      nextUniqueId = 0;
      getNextUniqueId() {
        return this.nextUniqueId++
      }
      addRef(GG, bG) {
        let ZG = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        this.refs.set(GG, bG), void 0 === bG[kG] ? (Hw.value = GG, Object.defineProperty(bG, kG, Hw)) : bG[kG] !== GG && (bG[kG] = GG), ZG && (this.refCount[GG] = (this.refCount[GG] || 0) + 1), this.deletedRefs.has(GG) && this.deletedRefs.delete(GG)
      }
      removeRef(GG) {
        const bG = this.refCount[GG];
        if (void 0 !== bG)
          if (0 !== bG)(this.refCount[GG] = bG - 1) <= 0 && this.deletedRefs.add(GG);
          else try {
            const bG = this.refs.get(GG);
            throw new Tw(`trying to remove refId '${GG}' with 0 refCount (${bG.constructor.name}: ${JSON.stringify(bG)})`)
          } catch (yS) {
            console.warn(yS)
          } else try {
            throw new Tw("trying to remove refId that doesn't exist: " + GG)
          } catch (yS) {
            console.warn(yS)
          }
      }
      clearRefs() {
        this.refs.clear(), this.deletedRefs.clear(), this.callbacks = {}, this.refCount = {}
      }
      garbageCollectDeletedRefs() {
        this.deletedRefs.forEach((GG => {
          if (this.refCount[GG] > 0) return;
          const bG = this.refs.get(GG),
            ZG = bG.constructor[Symbol.metadata];
          if (null != ZG)
            for (const wG in ZG) {
              const GG = bG[ZG[wG].name];
              if ("object" === typeof GG && GG) {
                const bG = GG[kG];
                void 0 === bG || this.deletedRefs.has(bG) || this.removeRef(bG)
              }
            } else "function" === typeof bG[dG] && Array.from(bG.values()).forEach((GG => {
              const bG = GG[kG];
              void 0 === bG || this.deletedRefs.has(bG) || this.removeRef(bG)
            }));
          this.refs.delete(GG), delete this.refCount[GG], delete this.callbacks[GG]
        })), this.deletedRefs.clear()
      }
      addCallback(GG, bG, ZG) {
        if (void 0 === GG) {
          const GG = "number" === typeof bG ? SG[bG] : bG;
          throw new Error(`Can't addCallback on '${GG}' (refId is undefined)`)
        }
        return this.callbacks[GG] || (this.callbacks[GG] = {}), this.callbacks[GG][bG] || (this.callbacks[GG][bG] = []), this.callbacks[GG][bG].push(ZG), () => this.removeCallback(GG, bG, ZG)
      }
      removeCallback(GG, bG, ZG) {
        const wG = this.callbacks?.[GG]?.[bG]?.indexOf(ZG);
        void 0 !== wG && -1 !== wG && aw(this.callbacks[GG][bG], wG)
      }
    }
    class Dw {
      context;
      state;
      root;
      currentRefId = 0;
      KF;
      resyncVisited = null;
      resyncDamaged = !1;
      constructor(GG, bG) {
        this.setState(GG), this.context = bG || new qb(GG.constructor)
      }
      setState(GG) {
        this.state = GG, this.root = new tw, this.root.addRef(0, GG)
      }
      decode(GG) {
        let bG = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
            offset: 0
          },
          ZG = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : this.state;
        const SG = void 0 !== this.KF ? [] : null,
          LG = this.root,
          yG = GG.byteLength;
        let kG = ZG.constructor[VG];
        for (this.currentRefId = 0; bG.offset < yG;) {
          if (GG[bG.offset] == wG) {
            bG.offset++, ZG[EG]?.();
            const wG = zb.number(GG, bG),
              SG = LG.refs.get(wG);
            SG ? (ZG = SG, kG = ZG.constructor[VG], this.currentRefId = wG) : (console.error(`"refId" not found: ${wG}`, {
              previousRef: ZG,
              previousRefId: this.currentRefId
            }), console.warn("Please report this issue to the developers."), this.skipCurrentStructure(GG, bG, yG));
            continue
          } - 1 !== kG(this, GG, bG, ZG, SG) || (console.warn("@colyseus/schema: definition mismatch"), this.skipCurrentStructure(GG, bG, yG))
        }
        return ZG[EG]?.(), null !== this.resyncVisited && function(GG, bG) {
          GG.resyncDamaged ? console.warn("@colyseus/schema: resync sweep skipped \u2014 parts of the payload could not be decoded. Stale entries may persist until the next resync.") : qZ(GG, GG.state, new Set, bG)
        }(this, SG), null !== SG && this.KF?.(SG), LG.garbageCollectDeletedRefs(), SG
      }
      decodeResync(GG) {
        let bG = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
          offset: 0
        };
        this.resyncVisited = new Map, this.resyncDamaged = !1;
        try {
          return this.decode(GG, bG)
        } finally {
          this.resyncVisited = null
        }
      }
      skipCurrentStructure(GG, bG, ZG) {
        null !== this.resyncVisited && (this.resyncDamaged = !0);
        const SG = {
          offset: bG.offset
        };
        for (; bG.offset < ZG && (GG[bG.offset] !== wG || (SG.offset = bG.offset + 1, !this.root.refs.has(zb.number(GG, SG))));) bG.offset++
      }
      getInstanceType(GG, bG, ZG) {
        let wG;
        if (213 === GG[bG.offset]) {
          bG.offset++;
          const ZG = zb.number(GG, bG);
          wG = this.context.get(ZG)
        }
        return wG || ZG
      }
      createInstanceOfType(GG) {
        return GG.initializeForDecoder()
      }
      removeChildRefs(GG, bG) {
        const ZG = "string" !== typeof GG[dG],
          wG = GG[kG];
        GG.forEach(((LG, yG) => {
          bG?.push({
            ref: GG,
            refId: wG,
            op: SG.DELETE,
            field: yG,
            value: void 0,
            previousValue: LG
          }), ZG && this.root.removeRef(LG[kG])
        }))
      }
    }
    const Nw = Ww({
        min: Qw.float64(),
        max: Qw.float64(),
        bits: Qw.uint8(),
        mode: Qw.uint8()
      }, "QuantizedDescriptor"),
      Ow = Ww({
        name: Qw.string(),
        type: Qw.string(),
        referencedType: Qw.number(),
        childPrimitive: Qw.string(),
        quantized: Qw.ref(Nw).optional()
      }, "ReflectionField"),
      xw = Ww({
        id: Qw.number(),
        extendsId: Qw.number(),
        fields: Qw.array(Ow)
      }, "ReflectionType"),
      Bw = Ww({
        types: Qw.array(xw),
        rootType: Qw.number()
      }, "Reflection");

    function GS(GG) {
      const bG = GG.root,
        ZG = bG.callbacks,
        wG = new WeakMap;
      let LG;

      function yG(GG, ZG) {
        let YG = ZG.instance?.constructor[Symbol.metadata] || GG,
          VG = ZG.instance && "function" === typeof ZG.instance.forEach || GG && !Iw.is(GG);
        if (YG && !VG) {
          const GG = function(GG, SG, yG, UG) {
            return UG && void 0 !== ZG.instance[SG] && !wG.has(LG) && yG(ZG.instance[SG], void 0), bG.addCallback(GG[kG], SG, yG)
          };
          return new Proxy({
            listen: function(bG, SG) {
              let yG = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
              if (ZG.instance) return GG(ZG.instance, bG, SG, yG);
              {
                let kG = () => {};
                return ZG.onInstanceAvailable(((ZG, UG) => {
                  kG = GG(ZG, bG, SG, yG && UG && !wG.has(LG))
                })), () => kG()
              }
            },
            onChange: function(GG) {
              return bG.addCallback(ZG.instance[kG], SG.REPLACE, GG)
            },
            bindTo: function(GG, wG) {
              return wG || (wG = Object.keys(YG).map((GG => YG[GG].name))), bG.addCallback(ZG.instance[kG], SG.REPLACE, (() => {
                wG.forEach((bG => GG[bG] = ZG.instance[bG]))
              }))
            }
          }, {
            get(GG, bG) {
              const wG = YG[YG[bG]];
              if (wG) {
                const GG = ZG.instance?.[bG],
                  SG = wG => {
                    const SG = UG(ZG.instance).listen(bG, ((GG, bG) => {
                      wG(GG, !1), SG?.()
                    }), !1);
                    void 0 !== GG?.[kG] && wG(GG, !0)
                  };
                return yG(wG.type, {
                  instance: void 0 !== GG?.[kG] && GG,
                  parentInstance: ZG.instance,
                  onInstanceAvailable: SG
                })
              }
              return GG[bG]
            },
            has: (GG, bG) => void 0 !== YG[bG],
            set(GG, bG, ZG) {
              throw new Error("not allowed")
            },
            deleteProperty(GG, bG) {
              throw new Error("not allowed")
            }
          })
        } {
          const GG = function(GG, ZG, yG) {
              return yG && GG.forEach(((GG, bG) => ZG(GG, bG))), bG.addCallback(GG[kG], SG.ADD, ((GG, bG) => {
                wG.set(ZG, !0), LG = ZG, ZG(GG, bG), wG.delete(ZG), LG = void 0
              }))
            },
            yG = function(GG, ZG) {
              return bG.addCallback(GG[kG], SG.DELETE, ZG)
            },
            UG = function(GG, ZG) {
              return bG.addCallback(GG[kG], SG.REPLACE, ZG)
            };
          return new Proxy({
            Kr: function(bG) {
              let SG = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
              if (ZG.instance) return GG(ZG.instance, bG, SG && !wG.has(LG));
              if (ZG.onInstanceAvailable) {
                let yG = () => {};
                return ZG.onInstanceAvailable(((ZG, kG) => {
                  yG = GG(ZG, bG, SG && kG && !wG.has(LG))
                })), () => yG()
              }
            },
            MI: function(GG) {
              if (ZG.instance) return yG(ZG.instance, GG);
              if (ZG.onInstanceAvailable) {
                let bG = () => {};
                return ZG.onInstanceAvailable((ZG => {
                  bG = yG(ZG, GG)
                })), () => bG()
              }
            },
            onChange: function(GG) {
              if (ZG.instance) return UG(ZG.instance, GG);
              if (ZG.onInstanceAvailable) {
                let bG = () => {};
                return ZG.onInstanceAvailable((ZG => {
                  bG = UG(ZG, GG)
                })), () => bG()
              }
            }
          }, {
            get(GG, bG) {
              if (!GG[bG]) throw new Error(`Can't access '${bG}' through callback proxy. access the instance directly.`);
              return GG[bG]
            },
            has: (GG, bG) => void 0 !== GG[bG],
            set(GG, bG, ZG) {
              throw new Error("not allowed")
            },
            deleteProperty(GG, bG) {
              throw new Error("not allowed")
            }
          })
        }
      }

      function UG(GG) {
        return yG(void 0, {
          instance: GG
        })
      }
      return GG.KF = function(GG) {
        const bG = new Set;
        for (let wG = 0, LG = GG.length; wG < LG; wG++) {
          const LG = GG[wG],
            yG = LG.refId,
            UG = LG.ref,
            YG = ZG[yG];
          if (YG) {
            if ((LG.op & SG.DELETE) === SG.DELETE && Iw.isSchema(LG.previousValue)) {
              const GG = ZG[LG.previousValue[kG]]?.[SG.DELETE];
              for (let bG = GG?.length - 1; bG >= 0; bG--) GG[bG]()
            }
            if (Iw.isSchema(UG)) {
              if (!bG.has(yG)) {
                const GG = YG?.[SG.REPLACE];
                for (let bG = GG?.length - 1; bG >= 0; bG--) GG[bG]()
              }
              if (YG.hasOwnProperty(LG.field)) {
                const GG = YG[LG.field];
                for (let bG = GG?.length - 1; bG >= 0; bG--) GG[bG](LG.value, LG.previousValue)
              }
            } else {
              if ((LG.op & SG.DELETE) === SG.DELETE) {
                if (void 0 !== LG.previousValue) {
                  const GG = YG[SG.DELETE];
                  for (let bG = GG?.length - 1; bG >= 0; bG--) GG[bG](LG.previousValue, LG.dynamicIndex ?? LG.field)
                }
                if ((LG.op & SG.ADD) === SG.ADD) {
                  const GG = YG[SG.ADD];
                  for (let bG = GG?.length - 1; bG >= 0; bG--) GG[bG](LG.value, LG.dynamicIndex ?? LG.field)
                }
              } else if ((LG.op & SG.ADD) === SG.ADD && LG.previousValue !== LG.value) {
                const GG = YG[SG.ADD];
                for (let bG = GG?.length - 1; bG >= 0; bG--) GG[bG](LG.value, LG.dynamicIndex ?? LG.field)
              }
              if (LG.value !== LG.previousValue && (void 0 !== LG.value || void 0 !== LG.previousValue)) {
                const GG = YG[SG.REPLACE];
                for (let bG = GG?.length - 1; bG >= 0; bG--) GG[bG](LG.value, LG.dynamicIndex ?? LG.field)
              }
            }
            bG.add(yG)
          }
        }
      }, UG
    }

    function bS(GG, bG) {
      GG.KF = bG
    }
    Bw.encode = function(GG) {
      let bG = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
        offset: 0
      };
      const ZG = GG.context,
        wG = new Bw,
        SG = new Rw(wG),
        LG = ZG.schemas.get(GG.state.constructor);
      LG > 0 && (wG.rootType = LG);
      const yG = new Set,
        kG = {},
        UG = GG => {
          if (void 0 === GG.extendsId || yG.has(GG.extendsId)) {
            yG.add(GG.id), wG.types.push(GG);
            const bG = kG[GG.id];
            void 0 !== bG && (delete kG[GG.id], bG.forEach((GG => UG(GG))))
          } else void 0 === kG[GG.extendsId] && (kG[GG.extendsId] = []), kG[GG.extendsId].push(GG)
        };
      ZG.schemas.forEach(((GG, bG) => {
        const wG = new xw;
        wG.id = Number(GG);
        const SG = Object.getPrototypeOf(bG);
        SG !== Iw && (wG.extendsId = ZG.schemas.get(SG));
        const LG = bG[Symbol.metadata];
        if (LG !== SG[Symbol.metadata]) {
          const GG = LG[WG] ?? -1;
          for (let bG = 0; bG <= GG; bG++) {
            const GG = LG[bG];
            if (void 0 === GG) continue;
            const SG = GG.name;
            if (!Object.prototype.hasOwnProperty.call(LG, SG)) continue;
            const yG = new Ow;
            let kG;
            if (yG.name = SG, "string" === typeof GG.type) kG = GG.type;
            else if (Pb(GG.type)) {
              const bG = GG.type.quantized;
              kG = "quantized";
              const ZG = new Nw;
              ZG.min = bG.min, ZG.max = bG.max, ZG.bits = bG.bits, ZG.mode = bG.wrap ? 1 : 0, yG.quantized = ZG
            } else {
              let bG;
              Iw.is(GG.type) ? (kG = "ref", bG = GG.type) : (kG = Object.keys(GG.type)[0], "string" === typeof GG.type[kG] ? yG.childPrimitive = GG.type[kG] : bG = GG.type[kG]), yG.referencedType = bG ? ZG.getTypeId(bG) : -1
            }
            yG.type = kG, wG.fields.push(yG)
          }
        }
        UG(wG)
      }));
      for (const YG in kG) kG[YG].forEach((GG => wG.types.push(GG)));
      return SG.encodeAll(bG).slice(0, bG.offset)
    }, Bw.decode = function(GG, bG) {
      const ZG = new Bw;
      new Dw(ZG).decode(GG, bG);
      const wG = new qb;
      ZG.types.forEach((GG => {
        const bG = wG.get(GG.extendsId) ?? Iw,
          ZG = class extends bG {};
        qb.register(ZG), wG.add(ZG, GG.id)
      }), {});
      ZG.types.forEach((GG => {
        const bG = wG.get(GG.id),
          SG = tb.initialize(bG),
          LG = [];
        let yG = GG;
        do {
          LG.push(yG), yG = ZG.types.find((GG => GG.id === yG.extendsId))
        } while (yG);
        let kG = 0;
        LG.reverse().forEach((GG => {
          ((GG, bG, ZG) => {
            bG.fields.forEach(((bG, SG) => {
              const LG = ZG + SG;
              if (void 0 !== bG.quantized) {
                const ZG = bG.quantized;
                tb.addField(GG, LG, bG.name, {
                  quantized: jb({
                    min: ZG.min,
                    max: ZG.max,
                    bits: ZG.bits,
                    mode: 1 === ZG.mode ? "wrap" : "clamp"
                  })
                })
              } else if (void 0 !== bG.referencedType) {
                const ZG = bG.type,
                  SG = wG.get(bG.referencedType) ?? bG.childPrimitive;
                "ref" === ZG ? tb.addField(GG, LG, bG.name, SG) : tb.addField(GG, LG, bG.name, {
                  [ZG]: SG
                })
              } else tb.addField(GG, LG, bG.name, bG.type)
            }))
          })(SG, GG, kG), kG += GG.fields.length
        }))
      }));
      const SG = new(wG.get(ZG.rootType || 0));
      return new Dw(SG, wG)
    }, Bw.makeEncodable = function(GG) {
      const bG = GG[Symbol.metadata];
      if (!bG) return GG;
      const ZG = bG[WG];
      if (void 0 === ZG) return GG;
      for (let wG = 0; wG <= ZG; wG++) {
        const ZG = bG[wG];
        ZG && tb.defineField(GG, bG, wG, ZG.name, ZG.type)
      }
      return Object.prototype.hasOwnProperty.call(GG, iG) && delete GG[iG], GG
    };
    class ZS {
      GK;
      uniqueRefIds = new Set;
      isTriggering = !1;
      constructor(GG) {
        this.GK = GG, this.GK.KF = this.KF.bind(this)
      }
      get callbacks() {
        return this.GK.root.callbacks
      }
      get state() {
        return this.GK.state
      }
      addCallback(GG, bG, ZG) {
        return this.GK.root.addCallback(GG, bG, ZG)
      }
      addCallbackOrWaitCollectionAvailable(GG, bG, ZG, wG) {
        let LG = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4],
          yG = () => {};
        const UG = () => yG(),
          YG = GG[bG];
        if (YG && void 0 !== YG[kG]) return LG = LG && !1 === this.isTriggering, ZG === SG.ADD && LG && YG.forEach(((GG, bG) => {
          wG(GG, bG)
        })), this.addCallback(YG[kG], ZG, wG);
        {
          let SG;
          return SG = this.addCallback(GG[kG], bG, ((GG, bG) => {
            null !== GG && void 0 !== GG && (SG(), yG = this.addCallback(GG[kG], ZG, wG))
          })), yG = SG, UG
        }
      }
      listen() {
        return "string" === typeof(arguments.length <= 0 ? void 0 : arguments[0]) ? this.listenInstance(this.state, arguments.length <= 0 ? void 0 : arguments[0], arguments.length <= 1 ? void 0 : arguments[1], arguments.length <= 2 ? void 0 : arguments[2]) : this.listenInstance(arguments.length <= 0 ? void 0 : arguments[0], arguments.length <= 1 ? void 0 : arguments[1], arguments.length <= 2 ? void 0 : arguments[2], arguments.length <= 3 ? void 0 : arguments[3])
      }
      listenInstance(GG, bG, ZG) {
        let wG = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
        wG = wG && !1 === this.isTriggering;
        const SG = GG[bG];
        return wG && null !== SG && void 0 !== SG && ZG(SG, void 0), this.addCallback(GG[kG], bG, ZG)
      }
      onChange() {
        if (2 === arguments.length && "string" !== typeof(arguments.length <= 0 ? void 0 : arguments[0])) {
          const GG = arguments.length <= 0 ? void 0 : arguments[0],
            bG = arguments.length <= 1 ? void 0 : arguments[1];
          return this.addCallback(GG[kG], SG.REPLACE, bG)
        }
        return "string" === typeof(arguments.length <= 0 ? void 0 : arguments[0]) ? this.addCallbackOrWaitCollectionAvailable(this.state, arguments.length <= 0 ? void 0 : arguments[0], SG.REPLACE, arguments.length <= 1 ? void 0 : arguments[1]) : this.addCallbackOrWaitCollectionAvailable(arguments.length <= 0 ? void 0 : arguments[0], arguments.length <= 1 ? void 0 : arguments[1], SG.REPLACE, arguments.length <= 2 ? void 0 : arguments[2])
      }
      Kr() {
        return "string" === typeof(arguments.length <= 0 ? void 0 : arguments[0]) ? this.addCallbackOrWaitCollectionAvailable(this.state, arguments.length <= 0 ? void 0 : arguments[0], SG.ADD, arguments.length <= 1 ? void 0 : arguments[1], !1 !== (arguments.length <= 2 ? void 0 : arguments[2])) : this.addCallbackOrWaitCollectionAvailable(arguments.length <= 0 ? void 0 : arguments[0], arguments.length <= 1 ? void 0 : arguments[1], SG.ADD, arguments.length <= 2 ? void 0 : arguments[2], !1 !== (arguments.length <= 3 ? void 0 : arguments[3]))
      }
      MI() {
        return "string" === typeof(arguments.length <= 0 ? void 0 : arguments[0]) ? this.addCallbackOrWaitCollectionAvailable(this.state, arguments.length <= 0 ? void 0 : arguments[0], SG.DELETE, arguments.length <= 1 ? void 0 : arguments[1]) : this.addCallbackOrWaitCollectionAvailable(arguments.length <= 0 ? void 0 : arguments[0], arguments.length <= 1 ? void 0 : arguments[1], SG.DELETE, arguments.length <= 2 ? void 0 : arguments[2])
      }
      bindTo(GG, bG, ZG) {
        let wG = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
        const LG = GG.constructor[Symbol.metadata];
        ZG || (ZG = Object.keys(LG).filter((GG => !isNaN(Number(GG)))).map((GG => LG[GG].name)));
        const yG = () => {
          for (const wG of ZG) {
            const ZG = GG[wG];
            void 0 !== ZG && (bG[wG] = ZG)
          }
        };
        return wG && yG(), this.addCallback(GG[kG], SG.REPLACE, yG)
      }
      KF(GG) {
        this.uniqueRefIds.clear(), this.isTriggering = !0;
        for (let bG = 0, ZG = GG.length; bG < ZG; bG++) {
          const ZG = GG[bG],
            wG = ZG.refId,
            LG = ZG.ref,
            yG = this.callbacks[wG];
          if (yG) {
            if ((ZG.op & SG.DELETE) === SG.DELETE && Iw.isSchema(ZG.previousValue)) {
              const GG = ZG.previousValue[kG],
                bG = this.callbacks[GG]?.[SG.DELETE];
              if (bG)
                for (let ZG = bG.length - 1; ZG >= 0; ZG--) try {
                  bG[ZG]()
                } catch (yS) {
                  console.error(yS)
                }
            }
            if (Iw.isSchema(LG)) {
              if (!this.uniqueRefIds.has(wG)) {
                const GG = yG[SG.REPLACE];
                if (GG)
                  for (let bG = GG.length - 1; bG >= 0; bG--) try {
                    GG[bG]()
                  } catch (yS) {
                    console.error(yS)
                  }
              }
              const GG = yG[ZG.field];
              if (GG)
                for (let bG = GG.length - 1; bG >= 0; bG--) try {
                  GG[bG](ZG.value, ZG.previousValue)
                } catch (yS) {
                  console.error(yS)
                }
            } else {
              const GG = ZG.dynamicIndex ?? ZG.field;
              if ((ZG.op & SG.DELETE) === SG.DELETE) {
                if (void 0 !== ZG.previousValue) {
                  const bG = yG[SG.DELETE];
                  if (bG)
                    for (let wG = bG.length - 1; wG >= 0; wG--) try {
                      bG[wG](ZG.previousValue, GG)
                    } catch (yS) {
                      console.error(yS)
                    }
                }
                if ((ZG.op & SG.ADD) === SG.ADD) {
                  const bG = yG[SG.ADD];
                  if (bG)
                    for (let wG = bG.length - 1; wG >= 0; wG--) try {
                      bG[wG](ZG.value, GG)
                    } catch (yS) {
                      console.error(yS)
                    }
                }
              } else if ((ZG.op & SG.ADD) === SG.ADD && ZG.previousValue !== ZG.value) {
                const bG = yG[SG.ADD];
                if (bG)
                  for (let wG = bG.length - 1; wG >= 0; wG--) try {
                    bG[wG](ZG.value, GG)
                  } catch (yS) {
                    console.error(yS)
                  }
              }
              if (ZG.value !== ZG.previousValue) {
                const bG = yG[SG.REPLACE];
                if (bG)
                  for (let wG = bG.length - 1; wG >= 0; wG--) try {
                    bG[wG](GG, ZG.value)
                  } catch (yS) {
                    console.error(yS)
                  }
              }
            }
            this.uniqueRefIds.add(wG)
          }
        }
        this.isTriggering = !1
      }
    }
    const wS = {
      get(GG) {
        if (GG instanceof Dw) return new ZS(GG);
        if ("GK" in GG.dJ) return new ZS(GG.dJ.GK);
        throw new Error("Invalid room or decoder")
      },
      getLegacy(GG) {
        if (GG instanceof Dw) return GS(GG);
        if ("GK" in GG.dJ) return GS(GG.dJ.GK);
        throw new Error("Invalid room or decoder")
      },
      getRawChanges: (GG, bG) => bS(GG, bG)
    };
    class SS {
      _free = [];
      _factory;
      _maxSize;
      constructor(GG) {
        let bG = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        this._factory = GG, this._maxSize = bG.maxSize ?? 1 / 0;
        const ZG = bG.preallocate ?? 0;
        for (let wG = 0; wG < ZG; wG++) this._free.push(GG())
      }
      acquire() {
        return this._free.length > 0 ? this._free.pop() : this._factory()
      }
      release(GG) {
        Iw.reset(GG), this._free.length < this._maxSize && this._free.push(GG)
      }
      get size() {
        return this._free.length
      }
    }

    function LS(GG) {
      return new SS((() => new GG), arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {})
    }
    Xb("map", {
      constructor: Sw
    }), Xb("array", {
      constructor: Zw
    }), Xb("set", {
      constructor: yw
    }), Xb("collection", {
      constructor: Lw
    })
  },
  9136: (GG, bG, ZG) => {
    ZG.r(bG), ZG.d(bG, {
      __addDisposableResource: () => PG,
      __assign: () => LG,
      __asyncDelegator: () => CG,
      __asyncGenerator: () => iG,
      __asyncValues: () => WG,
      __await: () => uG,
      __awaiter: () => KG,
      __classPrivateFieldGet: () => cG,
      __classPrivateFieldIn: () => jG,
      __classPrivateFieldSet: () => lG,
      __createBinding: () => dG,
      __decorate: () => kG,
      __disposeResources: () => AG,
      __esDecorate: () => YG,
      __exportStar: () => JG,
      __extends: () => SG,
      __generator: () => hG,
      __importDefault: () => aG,
      __importStar: () => vG,
      __makeTemplateObject: () => mG,
      __metadata: () => QG,
      __param: () => UG,
      __propKey: () => pG,
      __read: () => zG,
      __rest: () => yG,
      __rewriteRelativeImportExtension: () => sG,
      __runInitializers: () => VG,
      __setFunctionName: () => fG,
      __spread: () => EG,
      __spreadArray: () => XG,
      __spreadArrays: () => oG,
      __values: () => rG,
      default: () => qG
    });
    var wG = function(GG, bG) {
      return wG = Object.setPrototypeOf || {
        __proto__: []
      }
      instanceof Array && function(GG, bG) {
        GG.__proto__ = bG
      } || function(GG, bG) {
        for (var ZG in bG) Object.prototype.hasOwnProperty.call(bG, ZG) && (GG[ZG] = bG[ZG])
      }, wG(GG, bG)
    };

    function SG(GG, bG) {
      if ("function" !== typeof bG && null !== bG) throw new TypeError("Class extends value " + String(bG) + " is not a constructor or null");

      function ZG() {
        this.constructor = GG
      }
      wG(GG, bG), GG.prototype = null === bG ? Object.create(bG) : (ZG.prototype = bG.prototype, new ZG)
    }
    var LG = function() {
      return LG = Object.assign || function(GG) {
        for (var bG, ZG = 1, wG = arguments.length; ZG < wG; ZG++)
          for (var SG in bG = arguments[ZG]) Object.prototype.hasOwnProperty.call(bG, SG) && (GG[SG] = bG[SG]);
        return GG
      }, LG.apply(this, arguments)
    };

    function yG(GG, bG) {
      var ZG = {};
      for (var wG in GG) Object.prototype.hasOwnProperty.call(GG, wG) && bG.indexOf(wG) < 0 && (ZG[wG] = GG[wG]);
      if (null != GG && "function" === typeof Object.getOwnPropertySymbols) {
        var SG = 0;
        for (wG = Object.getOwnPropertySymbols(GG); SG < wG.length; SG++) bG.indexOf(wG[SG]) < 0 && Object.prototype.propertyIsEnumerable.call(GG, wG[SG]) && (ZG[wG[SG]] = GG[wG[SG]])
      }
      return ZG
    }

    function kG(GG, bG, ZG, wG) {
      var SG, LG = arguments.length,
        yG = LG < 3 ? bG : null === wG ? wG = Object.getOwnPropertyDescriptor(bG, ZG) : wG;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) yG = Reflect.decorate(GG, bG, ZG, wG);
      else
        for (var kG = GG.length - 1; kG >= 0; kG--)(SG = GG[kG]) && (yG = (LG < 3 ? SG(yG) : LG > 3 ? SG(bG, ZG, yG) : SG(bG, ZG)) || yG);
      return LG > 3 && yG && Object.defineProperty(bG, ZG, yG), yG
    }

    function UG(GG, bG) {
      return function(ZG, wG) {
        bG(ZG, wG, GG)
      }
    }

    function YG(GG, bG, ZG, wG, SG, LG) {
      function yG(GG) {
        if (void 0 !== GG && "function" !== typeof GG) throw new TypeError("Function expected");
        return GG
      }
      for (var kG, UG = wG.kind, YG = "getter" === UG ? "get" : "setter" === UG ? "set" : "value", VG = !bG && GG ? wG.static ? GG : GG.prototype : null, pG = bG || (VG ? Object.getOwnPropertyDescriptor(VG, wG.name) : {}), fG = !1, QG = ZG.length - 1; QG >= 0; QG--) {
        var KG = {};
        for (var hG in wG) KG[hG] = "access" === hG ? {} : wG[hG];
        for (var hG in wG.access) KG.access[hG] = wG.access[hG];
        KG.addInitializer = function(GG) {
          if (fG) throw new TypeError("Cannot add initializers after decoration has completed");
          LG.push(yG(GG || null))
        };
        var dG = (0, ZG[QG])("accessor" === UG ? {
          get: pG.get,
          set: pG.set
        } : pG[YG], KG);
        if ("accessor" === UG) {
          if (void 0 === dG) continue;
          if (null === dG || "object" !== typeof dG) throw new TypeError("Object expected");
          (kG = yG(dG.get)) && (pG.get = kG), (kG = yG(dG.set)) && (pG.set = kG), (kG = yG(dG.init)) && SG.unshift(kG)
        } else(kG = yG(dG)) && ("field" === UG ? SG.unshift(kG) : pG[YG] = kG)
      }
      VG && Object.defineProperty(VG, wG.name, pG), fG = !0
    }

    function VG(GG, bG, ZG) {
      for (var wG = arguments.length > 2, SG = 0; SG < bG.length; SG++) ZG = wG ? bG[SG].call(GG, ZG) : bG[SG].call(GG);
      return wG ? ZG : void 0
    }

    function pG(GG) {
      return "symbol" === typeof GG ? GG : "".concat(GG)
    }

    function fG(GG, bG, ZG) {
      return "symbol" === typeof bG && (bG = bG.description ? "[".concat(bG.description, "]") : ""), Object.defineProperty(GG, "name", {
        configurable: !0,
        value: ZG ? "".concat(ZG, " ", bG) : bG
      })
    }

    function QG(GG, bG) {
      if ("object" === typeof Reflect && "function" === typeof Reflect.metadata) return Reflect.metadata(GG, bG)
    }

    function KG(GG, bG, ZG, wG) {
      return new(ZG || (ZG = Promise))((function(SG, LG) {
        function yG(GG) {
          try {
            UG(wG.next(GG))
          } catch (bG) {
            LG(bG)
          }
        }

        function kG(GG) {
          try {
            UG(wG.throw(GG))
          } catch (bG) {
            LG(bG)
          }
        }

        function UG(GG) {
          var bG;
          GG.done ? SG(GG.value) : (bG = GG.value, bG instanceof ZG ? bG : new ZG((function(GG) {
            GG(bG)
          }))).then(yG, kG)
        }
        UG((wG = wG.apply(GG, bG || [])).next())
      }))
    }

    function hG(GG, bG) {
      var ZG, wG, SG, LG = {
          label: 0,
          sent: function() {
            if (1 & SG[0]) throw SG[1];
            return SG[1]
          },
          trys: [],
          ops: []
        },
        yG = Object.create(("function" === typeof Iterator ? Iterator : Object).prototype);
      return yG.next = kG(0), yG.throw = kG(1), yG.return = kG(2), "function" === typeof Symbol && (yG[Symbol.iterator] = function() {
        return this
      }), yG;

      function kG(kG) {
        return function(UG) {
          return function(kG) {
            if (ZG) throw new TypeError("Generator is already executing.");
            for (; yG && (yG = 0, kG[0] && (LG = 0)), LG;) try {
              if (ZG = 1, wG && (SG = 2 & kG[0] ? wG.return : kG[0] ? wG.throw || ((SG = wG.return) && SG.call(wG), 0) : wG.next) && !(SG = SG.call(wG, kG[1])).done) return SG;
              switch (wG = 0, SG && (kG = [2 & kG[0], SG.value]), kG[0]) {
                case 0:
                case 1:
                  SG = kG;
                  break;
                case 4:
                  return LG.label++, {
                    value: kG[1],
                    done: !1
                  };
                case 5:
                  LG.label++, wG = kG[1], kG = [0];
                  continue;
                case 7:
                  kG = LG.ops.pop(), LG.trys.pop();
                  continue;
                default:
                  if (!(SG = (SG = LG.trys).length > 0 && SG[SG.length - 1]) && (6 === kG[0] || 2 === kG[0])) {
                    LG = 0;
                    continue
                  }
                  if (3 === kG[0] && (!SG || kG[1] > SG[0] && kG[1] < SG[3])) {
                    LG.label = kG[1];
                    break
                  }
                  if (6 === kG[0] && LG.label < SG[1]) {
                    LG.label = SG[1], SG = kG;
                    break
                  }
                  if (SG && LG.label < SG[2]) {
                    LG.label = SG[2], LG.ops.push(kG);
                    break
                  }
                  SG[2] && LG.ops.pop(), LG.trys.pop();
                  continue
              }
              kG = bG.call(GG, LG)
            } catch (UG) {
              kG = [6, UG], wG = 0
            } finally {
              ZG = SG = 0
            }
            if (5 & kG[0]) throw kG[1];
            return {
              value: kG[0] ? kG[1] : void 0,
              done: !0
            }
          }([kG, UG])
        }
      }
    }
    var dG = Object.create ? function(GG, bG, ZG, wG) {
      void 0 === wG && (wG = ZG);
      var SG = Object.getOwnPropertyDescriptor(bG, ZG);
      SG && !("get" in SG ? !bG.__esModule : SG.writable || SG.configurable) || (SG = {
        enumerable: !0,
        get: function() {
          return bG[ZG]
        }
      }), Object.defineProperty(GG, wG, SG)
    } : function(GG, bG, ZG, wG) {
      void 0 === wG && (wG = ZG), GG[wG] = bG[ZG]
    };

    function JG(GG, bG) {
      for (var ZG in GG) "default" === ZG || Object.prototype.hasOwnProperty.call(bG, ZG) || dG(bG, GG, ZG)
    }

    function rG(GG) {
      var bG = "function" === typeof Symbol && Symbol.iterator,
        ZG = bG && GG[bG],
        wG = 0;
      if (ZG) return ZG.call(GG);
      if (GG && "number" === typeof GG.length) return {
        next: function() {
          return GG && wG >= GG.length && (GG = void 0), {
            value: GG && GG[wG++],
            done: !GG
          }
        }
      };
      throw new TypeError(bG ? "Object is not iterable." : "Symbol.iterator is not defined.")
    }

    function zG(GG, bG) {
      var ZG = "function" === typeof Symbol && GG[Symbol.iterator];
      if (!ZG) return GG;
      var wG, SG, LG = ZG.call(GG),
        yG = [];
      try {
        for (;
          (void 0 === bG || bG-- > 0) && !(wG = LG.next()).done;) yG.push(wG.value)
      } catch (kG) {
        SG = {
          error: kG
        }
      } finally {
        try {
          wG && !wG.done && (ZG = LG.return) && ZG.call(LG)
        } finally {
          if (SG) throw SG.error
        }
      }
      return yG
    }

    function EG() {
      for (var GG = [], bG = 0; bG < arguments.length; bG++) GG = GG.concat(zG(arguments[bG]));
      return GG
    }

    function oG() {
      for (var GG = 0, bG = 0, ZG = arguments.length; bG < ZG; bG++) GG += arguments[bG].length;
      var wG = Array(GG),
        SG = 0;
      for (bG = 0; bG < ZG; bG++)
        for (var LG = arguments[bG], yG = 0, kG = LG.length; yG < kG; yG++, SG++) wG[SG] = LG[yG];
      return wG
    }

    function XG(GG, bG, ZG) {
      if (ZG || 2 === arguments.length)
        for (var wG, SG = 0, LG = bG.length; SG < LG; SG++) !wG && SG in bG || (wG || (wG = Array.prototype.slice.call(bG, 0, SG)), wG[SG] = bG[SG]);
      return GG.concat(wG || Array.prototype.slice.call(bG))
    }

    function uG(GG) {
      return this instanceof uG ? (this.v = GG, this) : new uG(GG)
    }

    function iG(GG, bG, ZG) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var wG, SG = ZG.apply(GG, bG || []),
        LG = [];
      return wG = Object.create(("function" === typeof AsyncIterator ? AsyncIterator : Object).prototype), yG("next"), yG("throw"), yG("return", (function(GG) {
        return function(bG) {
          return Promise.resolve(bG).then(GG, YG)
        }
      })), wG[Symbol.asyncIterator] = function() {
        return this
      }, wG;

      function yG(GG, bG) {
        SG[GG] && (wG[GG] = function(bG) {
          return new Promise((function(ZG, wG) {
            LG.push([GG, bG, ZG, wG]) > 1 || kG(GG, bG)
          }))
        }, bG && (wG[GG] = bG(wG[GG])))
      }

      function kG(GG, bG) {
        try {
          (ZG = SG[GG](bG)).value instanceof uG ? Promise.resolve(ZG.value.v).then(UG, YG) : VG(LG[0][2], ZG)
        } catch (wG) {
          VG(LG[0][3], wG)
        }
        var ZG
      }

      function UG(GG) {
        kG("next", GG)
      }

      function YG(GG) {
        kG("throw", GG)
      }

      function VG(GG, bG) {
        GG(bG), LG.shift(), LG.length && kG(LG[0][0], LG[0][1])
      }
    }

    function CG(GG) {
      var bG, ZG;
      return bG = {}, wG("next"), wG("throw", (function(GG) {
        throw GG
      })), wG("return"), bG[Symbol.iterator] = function() {
        return this
      }, bG;

      function wG(wG, SG) {
        bG[wG] = GG[wG] ? function(bG) {
          return (ZG = !ZG) ? {
            value: uG(GG[wG](bG)),
            done: !1
          } : SG ? SG(bG) : bG
        } : SG
      }
    }

    function WG(GG) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var bG, ZG = GG[Symbol.asyncIterator];
      return ZG ? ZG.call(GG) : (GG = rG(GG), bG = {}, wG("next"), wG("throw"), wG("return"), bG[Symbol.asyncIterator] = function() {
        return this
      }, bG);

      function wG(ZG) {
        bG[ZG] = GG[ZG] && function(bG) {
          return new Promise((function(wG, SG) {
            (function(GG, bG, ZG, wG) {
              Promise.resolve(wG).then((function(bG) {
                GG({
                  value: bG,
                  done: ZG
                })
              }), bG)
            })(wG, SG, (bG = GG[ZG](bG)).done, bG.value)
          }))
        }
      }
    }

    function mG(GG, bG) {
      return Object.defineProperty ? Object.defineProperty(GG, "raw", {
        value: bG
      }) : GG.raw = bG, GG
    }
    var IG = Object.create ? function(GG, bG) {
        Object.defineProperty(GG, "default", {
          enumerable: !0,
          value: bG
        })
      } : function(GG, bG) {
        GG.default = bG
      },
      FG = function(GG) {
        return FG = Object.getOwnPropertyNames || function(GG) {
          var bG = [];
          for (var ZG in GG) Object.prototype.hasOwnProperty.call(GG, ZG) && (bG[bG.length] = ZG);
          return bG
        }, FG(GG)
      };

    function vG(GG) {
      if (GG && GG.__esModule) return GG;
      var bG = {};
      if (null != GG)
        for (var ZG = FG(GG), wG = 0; wG < ZG.length; wG++) "default" !== ZG[wG] && dG(bG, GG, ZG[wG]);
      return IG(bG, GG), bG
    }

    function aG(GG) {
      return GG && GG.__esModule ? GG : {
        default: GG
      }
    }

    function cG(GG, bG, ZG, wG) {
      if ("a" === ZG && !wG) throw new TypeError("Private accessor was defined without a getter");
      if ("function" === typeof bG ? GG !== bG || !wG : !bG.has(GG)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
      return "m" === ZG ? wG : "a" === ZG ? wG.call(GG) : wG ? wG.value : bG.get(GG)
    }

    function lG(GG, bG, ZG, wG, SG) {
      if ("m" === wG) throw new TypeError("Private method is not writable");
      if ("a" === wG && !SG) throw new TypeError("Private accessor was defined without a setter");
      if ("function" === typeof bG ? GG !== bG || !SG : !bG.has(GG)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
      return "a" === wG ? SG.call(GG, ZG) : SG ? SG.value = ZG : bG.set(GG, ZG), ZG
    }

    function jG(GG, bG) {
      if (null === bG || "object" !== typeof bG && "function" !== typeof bG) throw new TypeError("Cannot use 'in' operator on non-object");
      return "function" === typeof GG ? bG === GG : GG.has(bG)
    }

    function PG(GG, bG, ZG) {
      if (null !== bG && void 0 !== bG) {
        if ("object" !== typeof bG && "function" !== typeof bG) throw new TypeError("Object expected.");
        var wG, SG;
        if (ZG) {
          if (!Symbol.asyncDispose) throw new TypeError("Symbol.asyncDispose is not defined.");
          wG = bG[Symbol.asyncDispose]
        }
        if (void 0 === wG) {
          if (!Symbol.dispose) throw new TypeError("Symbol.dispose is not defined.");
          wG = bG[Symbol.dispose], ZG && (SG = wG)
        }
        if ("function" !== typeof wG) throw new TypeError("Object not disposable.");
        SG && (wG = function() {
          try {
            SG.call(this)
          } catch (GG) {
            return Promise.reject(GG)
          }
        }), GG.stack.push({
          value: bG,
          dispose: wG,
          async: ZG
        })
      } else ZG && GG.stack.push({
        async: !0
      });
      return bG
    }
    var MG = "function" === typeof SuppressedError ? SuppressedError : function(GG, bG, ZG) {
      var wG = new Error(ZG);
      return wG.name = "SuppressedError", wG.error = GG, wG.suppressed = bG, wG
    };

    function AG(GG) {
      function bG(bG) {
        GG.error = GG.hasError ? new MG(bG, GG.error, "An error was suppressed during disposal.") : bG, GG.hasError = !0
      }
      var ZG, wG = 0;
      return function SG() {
        for (; ZG = GG.stack.pop();) try {
          if (!ZG.async && 1 === wG) return wG = 0, GG.stack.push(ZG), Promise.resolve().then(SG);
          if (ZG.dispose) {
            var LG = ZG.dispose.call(ZG.value);
            if (ZG.async) return wG |= 2, Promise.resolve(LG).then(SG, (function(GG) {
              return bG(GG), SG()
            }))
          } else wG |= 1
        } catch (yG) {
          bG(yG)
        }
        if (1 === wG) return GG.hasError ? Promise.reject(GG.error) : Promise.resolve();
        if (GG.hasError) throw GG.error
      }()
    }

    function sG(GG, bG) {
      return "string" === typeof GG && /^\.\.?\//.test(GG) ? GG.replace(/\.(tsx)$|((?:\.d)?)((?:\.[^./]+?)?)\.([cm]?)ts$/i, (function(GG, ZG, wG, SG, LG) {
        return ZG ? bG ? ".jsx" : ".js" : !wG || SG && LG ? wG + SG + "." + LG.toLowerCase() + "js" : GG
      })) : GG
    }
    const qG = {
      __extends: SG,
      __assign: LG,
      __rest: yG,
      __decorate: kG,
      __param: UG,
      __esDecorate: YG,
      __runInitializers: VG,
      __propKey: pG,
      __setFunctionName: fG,
      __metadata: QG,
      __awaiter: KG,
      __generator: hG,
      __createBinding: dG,
      __exportStar: JG,
      __values: rG,
      __read: zG,
      __spread: EG,
      __spreadArrays: oG,
      __spreadArray: XG,
      __await: uG,
      __asyncGenerator: iG,
      __asyncDelegator: CG,
      __asyncValues: WG,
      __makeTemplateObject: mG,
      __importStar: vG,
      __importDefault: aG,
      __classPrivateFieldGet: cG,
      __classPrivateFieldSet: lG,
      __classPrivateFieldIn: jG,
      __addDisposableResource: PG,
      __disposeResources: AG,
      __rewriteRelativeImportExtension: sG
    }
  }
};
Object.freeze(modules);
for (const GG in modules) Object.freeze(modules[GG]);