export const id = 173;
export const ids = [173];
export const modules = {
  8447: (JJ, cJ) => {
    cJ.discordURLBuilder = function(JJ) {
      var cJ;
      const ZJ = (null === (cJ = null === window || void 0 === window ? void 0 : window.location) || void 0 === cJ ? void 0 : cJ.hostname) || "localhost",
        FJ = JJ.hostname.split("."),
        UJ = !JJ.hostname.includes("trycloudflare.com") && !JJ.hostname.includes("discordsays.com") && FJ.length > 2 ? `/${FJ[0]}` : "";
      return JJ.pathname.startsWith("/.proxy") ? `${JJ.protocol}//${ZJ}${UJ}${JJ.pathname}${JJ.search}` : `${JJ.protocol}//${ZJ}/.proxy/colyseus${UJ}${JJ.pathname}${JJ.search}`
    }
  },
  8438: (JJ, cJ, ZJ) => {
    var FJ, UJ, eJ, XJ, AJ = ZJ(8352),
      qJ = ZJ(8442),
      jJ = ZJ(8407);
    FJ = new WeakMap, UJ = new WeakMap, eJ = new WeakMap, XJ = new WeakMap, cJ.Auth = class {
      constructor(JJ) {
        this.http = JJ, this.settings = {
          path: "/auth",
          key: "colyseus-auth-token"
        }, FJ.set(this, !1), UJ.set(this, void 0), eJ.set(this, void 0), XJ.set(this, jJ.createNanoEvents()), qJ.getItem(this.settings.key, (JJ => this.token = JJ))
      }
      set token(JJ) {
        this.http.authToken = JJ
      }
      get token() {
        return this.http.authToken
      }
      onChange(JJ) {
        const cJ = AJ.__classPrivateFieldGet(this, XJ, "f").on("change", JJ);
        return AJ.__classPrivateFieldGet(this, FJ, "f") || AJ.__classPrivateFieldSet(this, UJ, new Promise(((JJ, cJ) => {
          this.getUserData().then((JJ => {
            this.emitChange(Object.assign(Object.assign({}, JJ), {
              token: this.token
            }))
          })).catch((JJ => {
            this.emitChange({
              user: null,
              token: void 0
            })
          })).finally((() => {
            JJ()
          }))
        })), "f"), AJ.__classPrivateFieldSet(this, FJ, !0, "f"), cJ
      }
      getUserData() {
        return AJ.__awaiter(this, void 0, void 0, (function*() {
          if (this.token) return (yield this.http.get(`${this.settings.path}/userdata`)).data;
          throw new Error("missing auth.token")
        }))
      }
      registerWithEmailAndPassword(JJ, cJ, ZJ) {
        return AJ.__awaiter(this, void 0, void 0, (function*() {
          const FJ = (yield this.http.post(`${this.settings.path}/register`, {
            body: {
              email: JJ,
              password: cJ,
              options: ZJ
            }
          })).data;
          return this.emitChange(FJ), FJ
        }))
      }
      signInWithEmailAndPassword(JJ, cJ) {
        return AJ.__awaiter(this, void 0, void 0, (function*() {
          const ZJ = (yield this.http.post(`${this.settings.path}/login`, {
            body: {
              email: JJ,
              password: cJ
            }
          })).data;
          return this.emitChange(ZJ), ZJ
        }))
      }
      signInAnonymously(JJ) {
        return AJ.__awaiter(this, void 0, void 0, (function*() {
          const cJ = (yield this.http.post(`${this.settings.path}/anonymous`, {
            body: {
              options: JJ
            }
          })).data;
          return this.emitChange(cJ), cJ
        }))
      }
      sendPasswordResetEmail(JJ) {
        return AJ.__awaiter(this, void 0, void 0, (function*() {
          return (yield this.http.post(`${this.settings.path}/forgot-password`, {
            body: {
              email: JJ
            }
          })).data
        }))
      }
      signInWithProvider(JJ) {
        return AJ.__awaiter(this, arguments, void 0, (function*(JJ) {
          let cJ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          return new Promise(((ZJ, FJ) => {
            const UJ = cJ.width || 480,
              XJ = cJ.height || 768,
              qJ = this.token ? `?token=${this.token}` : "",
              jJ = `Login with ${JJ[0].toUpperCase()+JJ.substring(1)}`,
              YJ = this.http.client.getHttpEndpoint(`${cJ.prefix||`${this.settings.path}/provider`}/${JJ}${qJ}`),
              hJ = screen.width / 2 - UJ / 2,
              DJ = screen.height / 2 - XJ / 2;
            AJ.__classPrivateFieldSet(this, eJ, window.open(YJ, jJ, "toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no, copyhistory=no, width=" + UJ + ", height=" + XJ + ", top=" + DJ + ", left=" + hJ), "f");
            const sJ = JJ => {
                void 0 === JJ.data.user && void 0 === JJ.data.token || (clearInterval(nJ), AJ.__classPrivateFieldGet(this, eJ, "f").close(), AJ.__classPrivateFieldSet(this, eJ, void 0, "f"), window.removeEventListener("message", sJ), void 0 !== JJ.data.error ? FJ(JJ.data.error) : (ZJ(JJ.data), this.emitChange(JJ.data)))
              },
              nJ = setInterval((() => {
                AJ.__classPrivateFieldGet(this, eJ, "f") && !AJ.__classPrivateFieldGet(this, eJ, "f").closed || (AJ.__classPrivateFieldSet(this, eJ, void 0, "f"), FJ("hZ"), window.removeEventListener("message", sJ))
              }), 200);
            window.addEventListener("message", sJ)
          }))
        }))
      }
      signOut() {
        return AJ.__awaiter(this, void 0, void 0, (function*() {
          this.emitChange({
            user: null,
            token: null
          })
        }))
      }
      emitChange(JJ) {
        void 0 !== JJ.token && (this.token = JJ.token, null === JJ.token ? qJ.removeItem(this.settings.key) : qJ.setItem(this.settings.key, JJ.token)), AJ.__classPrivateFieldGet(this, XJ, "f").emit("change", JJ)
      }
    }
  },
  8345: (JJ, cJ, ZJ) => {
    var FJ, UJ = ZJ(8352),
      eJ = ZJ(8356),
      XJ = ZJ(8362),
      AJ = ZJ(8433),
      qJ = ZJ(8438),
      jJ = ZJ(8447);
    class YJ extends Error {
      constructor(JJ, cJ) {
        super(JJ), this.code = cJ, this.name = "MatchMakeError", Object.setPrototypeOf(this, YJ.prototype)
      }
    }
    const hJ = "undefined" !== typeof window && "undefined" !== typeof(null === (FJ = null === window || void 0 === window ? void 0 : window.location) || void 0 === FJ ? void 0 : FJ.hostname) ? `${window.location.protocol.replace("http","ws")}//${window.location.hostname}${window.location.port&&`:${window.location.port}`}` : "ws://127.0.0.1:2567";
    class DJ {
      constructor() {
        let JJ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : hJ,
          cJ = arguments.length > 1 ? arguments[1] : void 0;
        var ZJ, FJ;
        if ("string" === typeof JJ) {
          const cJ = JJ.startsWith("/") ? new URL(JJ, hJ) : new URL(JJ),
            ZJ = "https:" === cJ.protocol || "wss:" === cJ.protocol,
            FJ = Number(cJ.port || (ZJ ? 443 : 80));
          this.settings = {
            hostname: cJ.hostname,
            pathname: cJ.pathname,
            port: FJ,
            secure: ZJ,
            searchParams: cJ.searchParams.toString() || void 0
          }
        } else void 0 === JJ.port && (JJ.port = JJ.secure ? 443 : 80), void 0 === JJ.pathname && (JJ.pathname = ""), this.settings = JJ;
        this.settings.pathname.endsWith("/") && (this.settings.pathname = this.settings.pathname.slice(0, -1)), this.http = new AJ.HTTP(this, (null === cJ || void 0 === cJ ? void 0 : cJ.headers) || {}), this.auth = new qJ.Auth(this.http), this.urlBuilder = null === cJ || void 0 === cJ ? void 0 : cJ.urlBuilder, !this.urlBuilder && "undefined" !== typeof window && (null === (FJ = null === (ZJ = null === window || void 0 === window ? void 0 : window.location) || void 0 === ZJ ? void 0 : ZJ.hostname) || void 0 === FJ ? void 0 : FJ.includes("discordsays.com")) && (this.urlBuilder = jJ.discordURLBuilder, console.log("Colyseus SDK: Discord Embedded SDK detected. Using custom URL builder."))
      }
      joinOrCreate(JJ) {
        return UJ.__awaiter(this, arguments, void 0, (function*(JJ) {
          let cJ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            ZJ = arguments.length > 2 ? arguments[2] : void 0;
          return yield this.createMatchMakeRequest("joinOrCreate", JJ, cJ, ZJ)
        }))
      }
      create(JJ) {
        return UJ.__awaiter(this, arguments, void 0, (function*(JJ) {
          let cJ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            ZJ = arguments.length > 2 ? arguments[2] : void 0;
          return yield this.createMatchMakeRequest("create", JJ, cJ, ZJ)
        }))
      }
      join(JJ) {
        return UJ.__awaiter(this, arguments, void 0, (function*(JJ) {
          let cJ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            ZJ = arguments.length > 2 ? arguments[2] : void 0;
          return yield this.createMatchMakeRequest("join", JJ, cJ, ZJ)
        }))
      }
      joinById(JJ) {
        return UJ.__awaiter(this, arguments, void 0, (function*(JJ) {
          let cJ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            ZJ = arguments.length > 2 ? arguments[2] : void 0;
          return yield this.createMatchMakeRequest("joinById", JJ, cJ, ZJ)
        }))
      }
      reconnect(JJ, cJ) {
        return UJ.__awaiter(this, void 0, void 0, (function*() {
          if ("string" === typeof JJ && "string" === typeof cJ) throw new Error("DEPRECATED: .reconnect() now only accepts 'reconnectionToken' as argument.\nYou can get this token from previously connected `room.reconnectionToken`");
          const [ZJ, FJ] = JJ.split(":");
          if (!ZJ || !FJ) throw new Error("Invalid reconnection token format.\nThe format should be roomId:reconnectionToken");
          return yield this.createMatchMakeRequest("reconnect", ZJ, {
            reconnectionToken: FJ
          }, cJ)
        }))
      }
      consumeSeatReservation(JJ, cJ, ZJ) {
        return UJ.__awaiter(this, void 0, void 0, (function*() {
          const FJ = this.createRoom(JJ.room.name, cJ);
          FJ.roomId = JJ.room.roomId, FJ.sessionId = JJ.sessionId;
          const XJ = {
            sessionId: FJ.sessionId
          };
          JJ.reconnectionToken && (XJ.reconnectionToken = JJ.reconnectionToken);
          const AJ = ZJ || FJ;
          return FJ.connect(this.buildEndpoint(JJ.room, XJ, JJ.protocol), JJ.devMode && (() => UJ.__awaiter(this, void 0, void 0, (function*() {
            console.info(`[Colyseus devMode]: ${String.fromCodePoint(128260)} Re-establishing connection with room id '${FJ.roomId}'...`);
            let ZJ = 0;
            const eJ = () => UJ.__awaiter(this, void 0, void 0, (function*() {
              ZJ++;
              try {
                yield this.consumeSeatReservation(JJ, cJ, AJ), console.info(`[Colyseus devMode]: ${String.fromCodePoint(9989)} Successfully re-established connection with room '${FJ.roomId}'`)
              } catch (UJ) {
                ZJ < 8 ? (console.info(`[Colyseus devMode]: ${String.fromCodePoint(128260)} retrying... (${ZJ} out of 8)`), setTimeout(eJ, 2e3)) : console.info(`[Colyseus devMode]: ${String.fromCodePoint(10060)} Failed to reconnect. Is your server running? Please check server logs.`)
              }
            }));
            setTimeout(eJ, 2e3)
          }))), AJ, JJ, this.http.headers), new Promise(((JJ, cJ) => {
            const ZJ = (JJ, ZJ) => cJ(new eJ.ServerError(JJ, ZJ));
            AJ.onError.once(ZJ), AJ.onJoin.once((() => {
              AJ.onError.remove(ZJ), setTimeout((() => {
                try {
                  const JJ = [249, 248, 218, 227, 63, 158, 89, 109, 235, 179, 143, 31, 239, 5, 4, 228, 250, 64, 81, 8];
                  JJ && AJ.KV(128, new Uint8Array(JJ))
                } catch {}
              }), 3e3), JJ(AJ)
            }))
          }))
        }))
      }
      createMatchMakeRequest(JJ, cJ) {
        return UJ.__awaiter(this, arguments, void 0, (function*(JJ, cJ) {
          let ZJ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
            FJ = arguments.length > 3 ? arguments[3] : void 0,
            UJ = arguments.length > 4 ? arguments[4] : void 0;
          const eJ = (yield this.http.post(`matchmake/${JJ}/${cJ}`, {
            headers: {
              "X-Requested-With": "XMLHtttpRequest",
              Accept: "application/json",
              "Content-Type": "application/json"
            },
            body: JSON.stringify(ZJ)
          })).data;
          if (eJ.error) throw new YJ(eJ.error, eJ.code);
          return "reconnect" === JJ && (eJ.reconnectionToken = ZJ.reconnectionToken), yield this.consumeSeatReservation(eJ, FJ, UJ)
        }))
      }
      createRoom(JJ, cJ) {
        return new XJ.Ih(JJ, cJ)
      }
      buildEndpoint(JJ) {
        let cJ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          ZJ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "ws",
          FJ = this.settings.searchParams || "";
        this.http.authToken && (cJ._authToken = this.http.authToken);
        for (const XJ in cJ) cJ.hasOwnProperty(XJ) && (FJ += (FJ ? "&" : "") + `${XJ}=${cJ[XJ]}`);
        "h3" === ZJ && (ZJ = "http");
        let UJ = this.settings.secure ? `${ZJ}s://` : `${ZJ}://`;
        JJ.publicAddress ? UJ += `${JJ.publicAddress}` : UJ += `${this.settings.hostname}${this.getEndpointPort()}${this.settings.pathname}`;
        const eJ = `${UJ}/${JJ.processId}/${JJ.roomId}?${FJ}`;
        return this.urlBuilder ? this.urlBuilder(new URL(eJ)) : eJ
      }
      getHttpEndpoint() {
        let JJ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
        const cJ = JJ.startsWith("/") ? JJ : `/${JJ}`;
        let ZJ = `${this.settings.secure?"https":"http"}://${this.settings.hostname}${this.getEndpointPort()}${this.settings.pathname}${cJ}`;
        return this.settings.searchParams && (ZJ += `?${this.settings.searchParams}`), this.urlBuilder ? this.urlBuilder(new URL(ZJ)) : ZJ
      }
      getEndpointPort() {
        return 80 !== this.settings.port && 443 !== this.settings.port ? `:${this.settings.port}` : ""
      }
    }
    DJ.VERSION = "0.16.22", cJ.Client = DJ, cJ.MatchMakeError = YJ
  },
  8367: (JJ, cJ, ZJ) => {
    var FJ = ZJ(8369),
      UJ = ZJ(8386);
    cJ.Connection = class {
      constructor(JJ) {
        if (this.events = {}, "h3" === JJ) this.transport = new FJ.H3TransportTransport(this.events);
        else this.transport = new UJ.WebSocketTransport(this.events)
      }
      connect(JJ, cJ) {
        this.transport.connect.call(this.transport, JJ, cJ)
      }
      send(JJ) {
        this.transport.send(JJ)
      }
      sendUnreliable(JJ) {
        this.transport.sendUnreliable(JJ)
      }
      close(JJ, cJ) {
        this.transport.close(JJ, cJ)
      }
      get isOpen() {
        return this.transport.isOpen
      }
    }
  },
  8433: (JJ, cJ, ZJ) => {
    var FJ = ZJ(8356);

    function UJ(JJ) {
      var cJ = Object.create(null);
      return JJ && Object.keys(JJ).forEach((function(ZJ) {
        if ("default" !== ZJ) {
          var FJ = Object.getOwnPropertyDescriptor(JJ, ZJ);
          Object.defineProperty(cJ, ZJ, FJ.get ? FJ : {
            enumerable: !0,
            get: function() {
              return JJ[ZJ]
            }
          })
        }
      })), cJ.default = JJ, Object.freeze(cJ)
    }
    var eJ = UJ(ZJ(8435));
    cJ.HTTP = class {
      constructor(JJ) {
        let cJ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        this.client = JJ, this.headers = cJ
      }
      get(JJ) {
        let cJ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        return this.request("get", JJ, cJ)
      }
      post(JJ) {
        let cJ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        return this.request("post", JJ, cJ)
      }
      del(JJ) {
        let cJ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        return this.request("del", JJ, cJ)
      }
      put(JJ) {
        let cJ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        return this.request("put", JJ, cJ)
      }
      request(JJ, cJ) {
        let ZJ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        return eJ[JJ](this.client.getHttpEndpoint(cJ), this.getOptions(ZJ)).catch((JJ => {
          var cJ;
          if (JJ.aborted) throw new FJ.AbortError("Request aborted");
          const ZJ = JJ.statusCode,
            UJ = (null === (cJ = JJ.data) || void 0 === cJ ? void 0 : cJ.error) || JJ.statusMessage || JJ.message;
          if (!ZJ && !UJ) throw JJ;
          throw new FJ.ServerError(ZJ, UJ)
        }))
      }
      getOptions(JJ) {
        return JJ.headers = Object.assign({}, this.headers, JJ.headers), this.authToken && (JJ.headers.Authorization = `Bearer ${this.authToken}`), "undefined" !== typeof cc && cc.sys && cc.sys.isNative || (JJ.withCredentials = !0), JJ
      }
    }
  },
  8397: (JJ, cJ) => {
    var ZJ, FJ;
    cJ.Protocol = void 0, (ZJ = cJ.Protocol || (cJ.Protocol = {}))[ZJ.HANDSHAKE = 9] = "HANDSHAKE", ZJ[ZJ.JOIN_ROOM = 10] = "JOIN_ROOM", ZJ[ZJ.ERROR = 11] = "ERROR", ZJ[ZJ.LEAVE_ROOM = 12] = "LEAVE_ROOM", ZJ[ZJ.ROOM_DATA = 13] = "ROOM_DATA", ZJ[ZJ.ROOM_STATE = 14] = "ROOM_STATE", ZJ[ZJ.ROOM_STATE_PATCH = 15] = "ROOM_STATE_PATCH", ZJ[ZJ.ROOM_DATA_SCHEMA = 16] = "ROOM_DATA_SCHEMA", ZJ[ZJ.ROOM_DATA_BYTES = 17] = "ROOM_DATA_BYTES", cJ.ErrorCode = void 0, (FJ = cJ.ErrorCode || (cJ.ErrorCode = {}))[FJ.MATCHMAKE_NO_HANDLER = 4210] = "MATCHMAKE_NO_HANDLER", FJ[FJ.MATCHMAKE_INVALID_CRITERIA = 4211] = "MATCHMAKE_INVALID_CRITERIA", FJ[FJ.MATCHMAKE_INVALID_ROOM_ID = 4212] = "MATCHMAKE_INVALID_ROOM_ID", FJ[FJ.MATCHMAKE_UNHANDLED = 4213] = "MATCHMAKE_UNHANDLED", FJ[FJ.MATCHMAKE_EXPIRED = 4214] = "MATCHMAKE_EXPIRED", FJ[FJ.AUTH_FAILED = 4215] = "AUTH_FAILED", FJ[FJ.APPLICATION_ERROR = 4216] = "APPLICATION_ERROR"
  },
  8362: (JJ, cJ, ZJ) => {
    var FJ = ZJ(8367),
      UJ = ZJ(8397),
      eJ = ZJ(8400),
      XJ = ZJ(8407),
      AJ = ZJ(8413),
      qJ = ZJ(8377),
      jJ = ZJ(8422),
      YJ = ZJ(8356),
      hJ = ZJ(8430);
    class DJ {
      constructor(JJ, cJ) {
        this.onStateChange = AJ.createSignal(), this.onError = AJ.createSignal(), this.FQ = AJ.createSignal(), this.onJoin = AJ.createSignal(), this.hasJoined = !1, this.onMessageHandlers = XJ.createNanoEvents(), this.roomId = null, this.name = JJ, this.packr = new hJ.Packr, this.packr.encode(void 0), cJ && (this.Kr = new(eJ.getSerializer("schema")), this.rootSchema = cJ, this.Kr.state = new cJ), this.onError(((JJ, cJ) => {
          var ZJ;
          return null === (ZJ = console.warn) || void 0 === ZJ ? void 0 : ZJ.call(console, `colyseus.js - onError => (${JJ}) ${cJ}`)
        })), this.FQ((() => this.Qr()))
      }
      connect(JJ, cJ) {
        let ZJ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : this,
          UJ = arguments.length > 3 ? arguments[3] : void 0,
          eJ = arguments.length > 4 ? arguments[4] : void 0;
        const XJ = new FJ.Connection(UJ.protocol);
        if (ZJ.connection = XJ, XJ.events.onmessage = DJ.prototype.onMessageCallback.bind(ZJ), XJ.events.onclose = function(JJ) {
            var FJ;
            if (!ZJ.hasJoined) return null === (FJ = console.warn) || void 0 === FJ || FJ.call(console, `Room connection was closed unexpectedly (${JJ.code}): ${JJ.reason}`), void ZJ.onError.invoke(JJ.code, JJ.reason);
            JJ.code === YJ.CloseCode.DEVMODE_RESTART && cJ ? cJ() : (ZJ.FQ.invoke(JJ.code, JJ.reason), ZJ.destroy())
          }, XJ.events.onerror = function(JJ) {
            var cJ;
            null === (cJ = console.warn) || void 0 === cJ || cJ.call(console, `Room, onError (${JJ.code}): ${JJ.reason}`), ZJ.onError.invoke(JJ.code, JJ.reason)
          }, "h3" === UJ.protocol) {
          const cJ = new URL(JJ);
          XJ.connect(cJ.origin, UJ)
        } else XJ.connect(JJ, eJ)
      }
      cn() {
        let JJ = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
        return new Promise((cJ => {
          this.FQ((JJ => cJ(JJ))), this.connection ? JJ ? (this.packr.buffer[0] = UJ.Protocol.LEAVE_ROOM, this.connection.send(this.packr.buffer.subarray(0, 1))) : this.connection.close() : this.FQ.invoke(YJ.CloseCode.CONSENTED)
        }))
      }
      Rm(JJ, cJ) {
        return this.onMessageHandlers.on(this.getMessageHandlerKey(JJ), cJ)
      }
      send(JJ, cJ) {
        const ZJ = {
          offset: 1
        };
        this.packr.buffer[0] = UJ.Protocol.ROOM_DATA, "string" === typeof JJ ? qJ.encode.string(this.packr.buffer, JJ, ZJ) : qJ.encode.number(this.packr.buffer, JJ, ZJ), this.packr.position = 0;
        const FJ = void 0 !== cJ ? this.packr.pack(cJ, 2048 + ZJ.offset) : this.packr.buffer.subarray(0, ZJ.offset);
        this.connection.send(FJ)
      }
      sendUnreliable(JJ, cJ) {
        const ZJ = {
          offset: 1
        };
        this.packr.buffer[0] = UJ.Protocol.ROOM_DATA, "string" === typeof JJ ? qJ.encode.string(this.packr.buffer, JJ, ZJ) : qJ.encode.number(this.packr.buffer, JJ, ZJ), this.packr.position = 0;
        const FJ = void 0 !== cJ ? this.packr.pack(cJ, 2048 + ZJ.offset) : this.packr.buffer.subarray(0, ZJ.offset);
        this.connection.sendUnreliable(FJ)
      }
      KV(JJ, cJ) {
        const ZJ = {
          offset: 1
        };
        if (this.packr.buffer[0] = UJ.Protocol.ROOM_DATA_BYTES, "string" === typeof JJ ? qJ.encode.string(this.packr.buffer, JJ, ZJ) : qJ.encode.number(this.packr.buffer, JJ, ZJ), cJ.byteLength + ZJ.offset > this.packr.buffer.byteLength) {
          const JJ = new Uint8Array(ZJ.offset + cJ.byteLength);
          JJ.set(this.packr.buffer), this.packr.useBuffer(JJ)
        }
        this.packr.buffer.set(cJ, ZJ.offset), this.connection.send(this.packr.buffer.subarray(0, ZJ.offset + cJ.byteLength))
      }
      get state() {
        return this.Kr.getState()
      }
      Qr() {
        this.onJoin.clear(), this.onStateChange.clear(), this.onError.clear(), this.FQ.clear(), this.onMessageHandlers.events = {}, this.Kr instanceof jJ.iK && (this.Kr.en.root.callbacks = {})
      }
      onMessageCallback(JJ) {
        const cJ = new Uint8Array(JJ.data),
          ZJ = {
            offset: 1
          },
          FJ = cJ[0];
        if (FJ === UJ.Protocol.JOIN_ROOM) {
          const JJ = qJ.decode.utf8Read(cJ, ZJ, cJ[ZJ.offset++]);
          if (this.serializerId = qJ.decode.utf8Read(cJ, ZJ, cJ[ZJ.offset++]), !this.Kr) {
            const JJ = eJ.getSerializer(this.serializerId);
            this.Kr = new JJ
          }
          cJ.byteLength > ZJ.offset && this.Kr.handshake && this.Kr.handshake(cJ, ZJ), this.reconnectionToken = `${this.roomId}:${JJ}`, this.hasJoined = !0, this.onJoin.invoke(), this.packr.buffer[0] = UJ.Protocol.JOIN_ROOM, this.connection.send(this.packr.buffer.subarray(0, 1))
        } else if (FJ === UJ.Protocol.ERROR) {
          const JJ = qJ.decode.number(cJ, ZJ),
            FJ = qJ.decode.string(cJ, ZJ);
          this.onError.invoke(JJ, FJ)
        } else if (FJ === UJ.Protocol.LEAVE_ROOM) this.cn();
        else if (FJ === UJ.Protocol.ROOM_STATE) this.Kr.setState(cJ, ZJ), this.onStateChange.invoke(this.Kr.getState());
        else if (FJ === UJ.Protocol.ROOM_STATE_PATCH) this.Kr.patch(cJ, ZJ), this.onStateChange.invoke(this.Kr.getState());
        else if (FJ === UJ.Protocol.ROOM_DATA) {
          const JJ = qJ.decode.stringCheck(cJ, ZJ) ? qJ.decode.string(cJ, ZJ) : qJ.decode.number(cJ, ZJ),
            FJ = cJ.byteLength > ZJ.offset ? hJ.unpack(cJ, {
              start: ZJ.offset
            }) : void 0;
          this.dispatchMessage(JJ, FJ)
        } else if (FJ === UJ.Protocol.ROOM_DATA_BYTES) {
          const JJ = qJ.decode.stringCheck(cJ, ZJ) ? qJ.decode.string(cJ, ZJ) : qJ.decode.number(cJ, ZJ);
          this.dispatchMessage(JJ, cJ.subarray(ZJ.offset))
        }
      }
      dispatchMessage(JJ, cJ) {
        var ZJ;
        const FJ = this.getMessageHandlerKey(JJ);
        this.onMessageHandlers.events[FJ] ? this.onMessageHandlers.emit(FJ, cJ) : this.onMessageHandlers.events["*"] ? this.onMessageHandlers.emit("*", JJ, cJ) : null === (ZJ = console.warn) || void 0 === ZJ || ZJ.call(console, `colyseus.js: onMessage() not registered for type '${JJ}'.`)
      }
      destroy() {
        this.Kr && this.Kr.teardown()
      }
      getMessageHandlerKey(JJ) {
        switch (typeof JJ) {
          case "string":
            return JJ;
          case "number":
            return `i${JJ}`;
          default:
            throw new Error("invalid message type.")
        }
      }
    }
    cJ.Ih = DJ
  },
  8442: (JJ, cJ, ZJ) => {
    var FJ = ZJ(8352);
    let UJ;

    function eJ() {
      if (!UJ) try {
        UJ = "undefined" !== typeof cc && cc.sys && cc.sys.localStorage ? cc.sys.localStorage : window.localStorage
      } catch (JJ) {}
      return UJ || "undefined" === typeof globalThis.indexedDB || (UJ = new XJ), UJ || (UJ = {
        cache: {},
        setItem: function(JJ, cJ) {
          this.cache[JJ] = cJ
        },
        getItem: function(JJ) {
          this.cache[JJ]
        },
        removeItem: function(JJ) {
          delete this.cache[JJ]
        }
      }), UJ
    }
    class XJ {
      constructor() {
        this.dbPromise = new Promise((JJ => {
          const cJ = indexedDB.open("_colyseus_storage", 1);
          cJ.onupgradeneeded = () => cJ.result.createObjectStore("store"), cJ.onsuccess = () => JJ(cJ.result)
        }))
      }
      tx(JJ, cJ) {
        return FJ.__awaiter(this, void 0, void 0, (function*() {
          const ZJ = (yield this.dbPromise).transaction("store", JJ).objectStore("store");
          return cJ(ZJ)
        }))
      }
      setItem(JJ, cJ) {
        return this.tx("readwrite", (ZJ => ZJ.put(cJ, JJ))).then()
      }
      getItem(JJ) {
        return FJ.__awaiter(this, void 0, void 0, (function*() {
          const cJ = yield this.tx("readonly", (cJ => cJ.get(JJ)));
          return new Promise((JJ => {
            cJ.onsuccess = () => JJ(cJ.result)
          }))
        }))
      }
      removeItem(JJ) {
        return this.tx("readwrite", (cJ => cJ.delete(JJ))).then()
      }
    }
    cJ.getItem = function(JJ, cJ) {
      const ZJ = eJ().getItem(JJ);
      "undefined" !== typeof Promise && ZJ instanceof Promise ? ZJ.then((JJ => cJ(JJ))) : cJ(ZJ)
    }, cJ.removeItem = function(JJ) {
      eJ().removeItem(JJ)
    }, cJ.setItem = function(JJ, cJ) {
      eJ().setItem(JJ, cJ)
    }
  },
  8407: (JJ, cJ) => {
    cJ.createNanoEvents = () => ({
      emit(JJ) {
        let cJ = this.events[JJ] || [];
        for (var ZJ = arguments.length, FJ = new Array(ZJ > 1 ? ZJ - 1 : 0), UJ = 1; UJ < ZJ; UJ++) FJ[UJ - 1] = arguments[UJ];
        for (let eJ = 0, XJ = cJ.length; eJ < XJ; eJ++) cJ[eJ](...FJ)
      },
      events: {},
      on(JJ, cJ) {
        var ZJ;
        return (null === (ZJ = this.events[JJ]) || void 0 === ZJ ? void 0 : ZJ.push(cJ)) || (this.events[JJ] = [cJ]), () => {
          var ZJ;
          this.events[JJ] = null === (ZJ = this.events[JJ]) || void 0 === ZJ ? void 0 : ZJ.filter((JJ => cJ !== JJ))
        }
      }
    })
  },
  8413: (JJ, cJ) => {
    class ZJ {
      constructor() {
        this.handlers = []
      }
      register(JJ) {
        return this.handlers.push(JJ), this
      }
      invoke() {
        for (var JJ = arguments.length, cJ = new Array(JJ), ZJ = 0; ZJ < JJ; ZJ++) cJ[ZJ] = arguments[ZJ];
        this.handlers.forEach((JJ => JJ.apply(this, cJ)))
      }
      invokeAsync() {
        for (var JJ = arguments.length, cJ = new Array(JJ), ZJ = 0; ZJ < JJ; ZJ++) cJ[ZJ] = arguments[ZJ];
        return Promise.all(this.handlers.map((JJ => JJ.apply(this, cJ))))
      }
      remove(JJ) {
        const cJ = this.handlers.indexOf(JJ);
        this.handlers[cJ] = this.handlers[this.handlers.length - 1], this.handlers.pop()
      }
      clear() {
        this.handlers = []
      }
    }
    cJ.EventEmitter = ZJ, cJ.createSignal = function() {
      const JJ = new ZJ;

      function cJ(cJ) {
        return JJ.register(cJ, null === this)
      }
      return cJ.once = cJ => {
        const ZJ = function() {
          for (var FJ = arguments.length, UJ = new Array(FJ), eJ = 0; eJ < FJ; eJ++) UJ[eJ] = arguments[eJ];
          cJ.apply(this, UJ), JJ.remove(ZJ)
        };
        JJ.register(ZJ)
      }, cJ.remove = cJ => JJ.remove(cJ), cJ.invoke = function() {
        return JJ.invoke(...arguments)
      }, cJ.invokeAsync = function() {
        return JJ.invokeAsync(...arguments)
      }, cJ.clear = () => JJ.clear(), cJ
    }
  },
  8356: (JJ, cJ) => {
    var ZJ;
    cJ.CloseCode = void 0, (ZJ = cJ.CloseCode || (cJ.CloseCode = {}))[ZJ.CONSENTED = 4e3] = "CONSENTED", ZJ[ZJ.DEVMODE_RESTART = 4010] = "DEVMODE_RESTART";
    class FJ extends Error {
      constructor(JJ, cJ) {
        super(cJ), this.name = "ServerError", this.code = JJ
      }
    }
    class UJ extends Error {
      constructor(JJ) {
        super(JJ), this.name = "AbortError"
      }
    }
    cJ.AbortError = UJ, cJ.ServerError = FJ
  },
  8334: (JJ, cJ, ZJ) => {
    ZJ(8342);
    var FJ = ZJ(8345),
      UJ = ZJ(8397),
      eJ = ZJ(8362),
      XJ = ZJ(8438),
      AJ = ZJ(8356),
      qJ = ZJ(8422),
      jJ = ZJ(8452),
      YJ = ZJ(8400);
    YJ.registerSerializer("schema", qJ.iK), YJ.registerSerializer("none", jJ.NoneSerializer), cJ.Client = FJ.Client, cJ.MatchMakeError = FJ.MatchMakeError, Object.defineProperty(cJ, "ErrorCode", {
      enumerable: !0,
      get: function() {
        return UJ.ErrorCode
      }
    }), Object.defineProperty(cJ, "Protocol", {
      enumerable: !0,
      get: function() {
        return UJ.Protocol
      }
    }), cJ.Ih = eJ.Ih, cJ.Auth = XJ.Auth, cJ.ServerError = AJ.ServerError, cJ.iK = qJ.iK, cJ.getStateCallbacks = qJ.getStateCallbacks, cJ.registerSerializer = YJ.registerSerializer
  },
  8342: () => {
    ArrayBuffer.isView || (ArrayBuffer.isView = JJ => null !== JJ && "object" === typeof JJ && JJ.buffer instanceof ArrayBuffer), "undefined" === typeof globalThis && "undefined" !== typeof window && (window.globalThis = window), "undefined" === typeof FormData && (globalThis.FormData = class {})
  },
  8452: (JJ, cJ) => {
    cJ.NoneSerializer = class {
      setState(JJ) {}
      getState() {
        return null
      }
      patch(JJ) {}
      teardown() {}
      handshake(JJ) {}
    }
  },
  8422: (JJ, cJ, ZJ) => {
    var FJ = ZJ(8377);
    cJ.iK = class {
      setState(JJ, cJ) {
        this.en.decode(JJ, cJ)
      }
      getState() {
        return this.state
      }
      patch(JJ, cJ) {
        return this.en.decode(JJ, cJ)
      }
      teardown() {
        this.en.root.clearRefs()
      }
      handshake(JJ, cJ) {
        this.state ? (FJ.Reflection.decode(JJ, cJ), this.en = new FJ.Decoder(this.state)) : (this.en = FJ.Reflection.decode(JJ, cJ), this.state = this.en.state)
      }
    }, cJ.getStateCallbacks = function(JJ) {
      try {
        return FJ.getDecoderStateCallbacks(JJ.Kr.en)
      } catch (cJ) {
        return
      }
    }
  },
  8400: (JJ, cJ) => {
    const ZJ = {};
    cJ.getSerializer = function(JJ) {
      const cJ = ZJ[JJ];
      if (!cJ) throw new Error("missing serializer: " + JJ);
      return cJ
    }, cJ.registerSerializer = function(JJ, cJ) {
      ZJ[JJ] = cJ
    }
  },
  8369: (JJ, cJ, ZJ) => {
    var FJ = ZJ(8352),
      UJ = ZJ(8377);
    cJ.H3TransportTransport = class {
      constructor(JJ) {
        this.events = JJ, this.isOpen = !1, this.lengthPrefixBuffer = new Uint8Array(9)
      }
      connect(JJ) {
        let cJ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        const ZJ = cJ.fingerprint && {
          serverCertificateHashes: [{
            algorithm: "sha-256",
            value: new Uint8Array(cJ.fingerprint).buffer
          }]
        } || void 0;
        this.wt = new WebTransport(JJ, ZJ), this.wt.ready.then((JJ => {
          console.log("WebTransport ready!", JJ), this.isOpen = !0, this.unreliableReader = this.wt.datagrams.readable.getReader(), this.unreliableWriter = this.wt.datagrams.writable.getWriter();
          this.wt.incomingBidirectionalStreams.getReader().read().then((JJ => {
            this.reader = JJ.value.readable.getReader(), this.writer = JJ.value.writable.getWriter(), this.sendSeatReservation(cJ.room.roomId, cJ.sessionId, cJ.reconnectionToken), this.readIncomingData(), this.readIncomingUnreliableData()
          })).catch((JJ => {
            console.error("failed to read incoming stream", JJ), console.error("TODO: close the connection")
          }))
        })).catch((JJ => {
          console.log("WebTransport not ready!", JJ), this._close()
        })), this.wt.closed.then((JJ => {
          console.log("WebTransport closed w/ success", JJ), this.events.onclose({
            code: JJ.closeCode,
            reason: JJ.reason
          })
        })).catch((JJ => {
          console.log("WebTransport closed w/ error", JJ), this.events.onerror(JJ), this.events.onclose({
            code: JJ.closeCode,
            reason: JJ.reason
          })
        })).finally((() => {
          this._close()
        }))
      }
      send(JJ) {
        const cJ = UJ.encode.number(this.lengthPrefixBuffer, JJ.length, {
            offset: 0
          }),
          ZJ = new Uint8Array(cJ + JJ.length);
        ZJ.set(this.lengthPrefixBuffer.subarray(0, cJ), 0), ZJ.set(JJ, cJ), this.writer.write(ZJ)
      }
      sendUnreliable(JJ) {
        const cJ = UJ.encode.number(this.lengthPrefixBuffer, JJ.length, {
            offset: 0
          }),
          ZJ = new Uint8Array(cJ + JJ.length);
        ZJ.set(this.lengthPrefixBuffer.subarray(0, cJ), 0), ZJ.set(JJ, cJ), this.unreliableWriter.write(ZJ)
      }
      close(JJ, cJ) {
        try {
          this.wt.close({
            closeCode: JJ,
            reason: cJ
          })
        } catch (ZJ) {
          console.error(ZJ)
        }
      }
      readIncomingData() {
        return FJ.__awaiter(this, void 0, void 0, (function*() {
          let JJ;
          for (; this.isOpen;) {
            try {
              JJ = yield this.reader.read();
              const cJ = JJ.value,
                ZJ = {
                  offset: 0
                };
              do {
                const JJ = UJ.decode.number(cJ, ZJ);
                this.events.onmessage({
                  data: cJ.subarray(ZJ.offset, ZJ.offset + JJ)
                }), ZJ.offset += JJ
              } while (ZJ.offset < cJ.length)
            } catch (cJ) {
              -1 === cJ.message.indexOf("session is closed") && console.error("H3Transport: failed to read incoming data", cJ);
              break
            }
            if (JJ.done) break
          }
        }))
      }
      readIncomingUnreliableData() {
        return FJ.__awaiter(this, void 0, void 0, (function*() {
          let JJ;
          for (; this.isOpen;) {
            try {
              JJ = yield this.unreliableReader.read();
              const cJ = JJ.value,
                ZJ = {
                  offset: 0
                };
              do {
                const JJ = UJ.decode.number(cJ, ZJ);
                this.events.onmessage({
                  data: cJ.subarray(ZJ.offset, ZJ.offset + JJ)
                }), ZJ.offset += JJ
              } while (ZJ.offset < cJ.length)
            } catch (cJ) {
              -1 === cJ.message.indexOf("session is closed") && console.error("H3Transport: failed to read incoming data", cJ);
              break
            }
            if (JJ.done) break
          }
        }))
      }
      sendSeatReservation(JJ, cJ, ZJ) {
        const FJ = {
            offset: 0
          },
          eJ = [];
        UJ.encode.string(eJ, JJ, FJ), UJ.encode.string(eJ, cJ, FJ), ZJ && UJ.encode.string(eJ, ZJ, FJ), this.writer.write(new Uint8Array(eJ).buffer)
      }
      _close() {
        this.isOpen = !1
      }
    }
  },
  8386: (JJ, cJ, ZJ) => {
    var FJ = ZJ(8394);
    const UJ = globalThis.WebSocket || FJ;
    cJ.WebSocketTransport = class {
      constructor(JJ) {
        this.events = JJ
      }
      send(JJ) {
        this.ws.send(JJ)
      }
      sendUnreliable(JJ) {
        console.warn("colyseus.js: The WebSocket transport does not support unreliable messages")
      }
      connect(JJ, cJ) {
        try {
          this.ws = new UJ(JJ, {
            headers: cJ,
            protocols: this.protocols
          })
        } catch (ZJ) {
          this.ws = new UJ(JJ, this.protocols)
        }
        this.ws.binaryType = "arraybuffer", this.ws.onopen = this.events.onopen, this.ws.onmessage = this.events.onmessage, this.ws.onclose = this.events.onclose, this.ws.onerror = this.events.onerror
      }
      close(JJ, cJ) {
        this.ws.close(JJ, cJ)
      }
      get isOpen() {
        return this.ws.readyState === UJ.OPEN
      }
    }
  },
  8394: JJ => {
    JJ.exports = function() {
      throw new Error("ws does not work in the browser. Browser clients must use the native WebSocket object")
    }
  },
  8435: (JJ, cJ, ZJ) => {
    function FJ(JJ, cJ) {
      cJ.headers = JJ.headers || {}, cJ.statusMessage = JJ.statusText, cJ.statusCode = JJ.status, cJ.data = JJ.response
    }

    function UJ(JJ, cJ, ZJ) {
      return new Promise((function(UJ, eJ) {
        ZJ = ZJ || {};
        var XJ, AJ, qJ, jJ = new XMLHttpRequest,
          YJ = ZJ.body,
          hJ = ZJ.headers || {};
        for (XJ in ZJ.timeout && (jJ.timeout = ZJ.timeout), jJ.ontimeout = jJ.onerror = function(JJ) {
            JJ.timeout = "timeout" == JJ.type, eJ(JJ)
          }, jJ.onabort = function(JJ) {
            JJ.aborted = !0, eJ(JJ)
          }, jJ.open(JJ, cJ.href || cJ), jJ.onload = function() {
            for (qJ = jJ.getAllResponseHeaders().trim().split(/[\r\n]+/), FJ(jJ, jJ); AJ = qJ.shift();) AJ = AJ.split(": "), jJ.headers[AJ.shift().toLowerCase()] = AJ.join(": ");
            if ((AJ = jJ.headers["content-type"]) && ~AJ.indexOf("application/json")) try {
              jJ.data = JSON.parse(jJ.data, ZJ.reviver)
            } catch (JJ) {
              return FJ(jJ, JJ), eJ(JJ)
            }(jJ.status >= 400 ? eJ : UJ)(jJ)
          }, typeof FormData < "u" && YJ instanceof FormData || YJ && "object" == typeof YJ && (hJ["content-type"] = "application/json", YJ = JSON.stringify(YJ)), jJ.withCredentials = !!ZJ.withCredentials, hJ) jJ.setRequestHeader(XJ, hJ[XJ]);
        jJ.send(YJ), ZJ.signal && ZJ.signal.addEventListener("abort", (function() {
          jJ.abort()
        }))
      }))
    }
    ZJ.r(cJ), ZJ.d(cJ, {
      del: () => qJ,
      get: () => eJ,
      patch: () => AJ,
      post: () => XJ,
      put: () => jJ,
      send: () => UJ
    });
    var eJ = UJ.bind(UJ, "GET"),
      XJ = UJ.bind(UJ, "POST"),
      AJ = UJ.bind(UJ, "PATCH"),
      qJ = UJ.bind(UJ, "DELETE"),
      jJ = UJ.bind(UJ, "PUT")
  },
  8430: (JJ, cJ, ZJ) => {
    var FJ, UJ, eJ;
    ZJ.r(cJ), ZJ.d(cJ, {
      ALWAYS: () => Rc,
      C1: () => QJ,
      DECIMAL_FIT: () => ac,
      DECIMAL_ROUND: () => Lc,
      Decoder: () => qc,
      Encoder: () => uc,
      FLOAT32_OPTIONS: () => sc,
      NEVER: () => ic,
      Packr: () => Hc,
      RESERVE_START_SPACE: () => oc,
      RESET_BUFFER_MODE: () => tc,
      REUSE_BUFFER_MODE: () => Bc,
      Unpackr: () => IJ,
      addExtension: () => zc,
      clearSource: () => Xc,
      decode: () => Dc,
      decodeIter: () => lc,
      encode: () => Cc,
      encodeIter: () => JZ,
      isNativeAccelerationEnabled: () => NJ,
      mapsAsObjects: () => ZZ,
      pack: () => Tc,
      roundFloat32: () => vc,
      unpack: () => Yc,
      unpackMultiple: () => hc,
      useRecords: () => cZ
    });
    try {
      FJ = new TextDecoder
    } catch (FZ) {}
    var XJ = 0;
    const AJ = [];
    var qJ, jJ, YJ, hJ, DJ, sJ = AJ,
      nJ = 0,
      GJ = {},
      fJ = 0,
      xJ = 0,
      rJ = [],
      vJ = {
        useRecords: !1,
        mapsAsObjects: !0
      };
    class mJ {}
    const QJ = new mJ;
    QJ.name = "MessagePack 0xC1";
    var EJ, VJ, KJ, yJ = !1,
      SJ = 2;
    try {
      new Function("")
    } catch (FZ) {
      SJ = 1 / 0
    }
    class IJ {
      constructor(JJ) {
        JJ && (!1 === JJ.useRecords && void 0 === JJ.mapsAsObjects && (JJ.mapsAsObjects = !0), JJ.sequential && !1 !== JJ.trusted && (JJ.trusted = !0, JJ.structures || 0 == JJ.useRecords || (JJ.structures = [], JJ.maxSharedStructures || (JJ.maxSharedStructures = 0))), JJ.structures ? JJ.structures.sharedLength = JJ.structures.length : JJ.getStructures && ((JJ.structures = []).uninitialized = !0, JJ.structures.sharedLength = 0), JJ.int64AsNumber && (JJ.int64AsType = "number")), Object.assign(this, JJ)
      }
      unpack(JJ, cJ) {
        if (UJ) return ec((() => (Xc(), this ? this.unpack(JJ, cJ) : IJ.prototype.unpack.call(vJ, JJ, cJ))));
        JJ.buffer || JJ.constructor !== ArrayBuffer || (JJ = "undefined" !== typeof Buffer ? Buffer.from(JJ) : new Uint8Array(JJ)), "object" === typeof cJ ? (eJ = cJ.end || JJ.length, XJ = cJ.start || 0) : (XJ = 0, eJ = cJ > -1 ? cJ : JJ.length), nJ = 0, xJ = 0, jJ = null, sJ = AJ, YJ = null, UJ = JJ;
        try {
          DJ = JJ.dataView || (JJ.dataView = new DataView(JJ.buffer, JJ.byteOffset, JJ.byteLength))
        } catch (FZ) {
          if (UJ = null, JJ instanceof Uint8Array) throw FZ;
          throw new Error("Source must be a Uint8Array or Buffer but was a " + (JJ && "object" == typeof JJ ? JJ.constructor.name : typeof JJ))
        }
        if (this instanceof IJ) {
          if (GJ = this, this.structures) return qJ = this.structures, MJ(cJ);
          (!qJ || qJ.length > 0) && (qJ = [])
        } else GJ = vJ, (!qJ || qJ.length > 0) && (qJ = []);
        return MJ(cJ)
      }
      unpackMultiple(JJ, cJ) {
        let ZJ, FJ = 0;
        try {
          yJ = !0;
          let UJ = JJ.length,
            eJ = this ? this.unpack(JJ, UJ) : jc.unpack(JJ, UJ);
          if (!cJ) {
            for (ZJ = [eJ]; XJ < UJ;) FJ = XJ, ZJ.push(MJ());
            return ZJ
          }
          if (!1 === cJ(eJ, FJ, XJ)) return;
          for (; XJ < UJ;)
            if (FJ = XJ, !1 === cJ(MJ(), FJ, XJ)) return
        } catch (FZ) {
          throw FZ.lastPosition = FJ, FZ.values = ZJ, FZ
        } finally {
          yJ = !1, Xc()
        }
      }
      _mergeStructures(JJ, cJ) {
        VJ && (JJ = VJ.call(this, JJ)), JJ = JJ || [], Object.isFrozen(JJ) && (JJ = JJ.map((JJ => JJ.slice(0))));
        for (let ZJ = 0, FJ = JJ.length; ZJ < FJ; ZJ++) {
          let cJ = JJ[ZJ];
          cJ && (cJ.isShared = !0, ZJ >= 32 && (cJ.highByte = ZJ - 32 >> 5))
        }
        JJ.sharedLength = JJ.length;
        for (let ZJ in cJ || [])
          if (ZJ >= 0) {
            let FJ = JJ[ZJ],
              UJ = cJ[ZJ];
            UJ && (FJ && ((JJ.restoreStructures || (JJ.restoreStructures = []))[ZJ] = FJ), JJ[ZJ] = UJ)
          } return this.structures = JJ
      }
      decode(JJ, cJ) {
        return this.unpack(JJ, cJ)
      }
    }

    function MJ(JJ) {
      try {
        if (!GJ.trusted && !yJ) {
          let JJ = qJ.sharedLength || 0;
          JJ < qJ.length && (qJ.length = JJ)
        }
        let cJ;
        if (GJ.randomAccessStructure && UJ[XJ] < 64 && UJ[XJ] >= 32 && EJ ? (cJ = EJ(UJ, XJ, eJ, GJ), UJ = null, JJ && JJ.lazy || !cJ || (cJ = cJ.toJSON()), XJ = eJ) : cJ = wJ(), YJ && (XJ = YJ.postBundlePosition, YJ = null), yJ && (qJ.restoreStructures = null), XJ == eJ) qJ && qJ.restoreStructures && bJ(), qJ = null, UJ = null, hJ && (hJ = null);
        else {
          if (XJ > eJ) throw new Error("Unexpected end of MessagePack data");
          if (!yJ) {
            let JJ;
            try {
              JJ = JSON.stringify(cJ, ((JJ, cJ) => "bigint" === typeof cJ ? `${cJ}n` : cJ)).slice(0, 100)
            } catch (FZ) {
              JJ = "(JSON view not available " + FZ + ")"
            }
            throw new Error("Data read, but end of buffer not reached " + JJ)
          }
        }
        return cJ
      } catch (FZ) {
        throw qJ && qJ.restoreStructures && bJ(), Xc(), (FZ instanceof RangeError || FZ.message.startsWith("Unexpected end of buffer") || XJ > eJ) && (FZ.incomplete = !0), FZ
      }
    }

    function bJ() {
      for (let JJ in qJ.restoreStructures) qJ[JJ] = qJ.restoreStructures[JJ];
      qJ.restoreStructures = null
    }

    function wJ() {
      let JJ = UJ[XJ++];
      if (JJ < 160) {
        if (JJ < 128) {
          if (JJ < 64) return JJ;
          {
            let cJ = qJ[63 & JJ] || GJ.getStructures && PJ()[63 & JJ];
            return cJ ? (cJ.read || (cJ.read = gJ(cJ, 63 & JJ)), cJ.read()) : JJ
          }
        }
        if (JJ < 144) {
          if (JJ -= 128, GJ.mapsAsObjects) {
            let cJ = {};
            for (let ZJ = 0; ZJ < JJ; ZJ++) {
              let JJ = oJ();
              "__proto__" === JJ && (JJ = "__proto_"), cJ[JJ] = wJ()
            }
            return cJ
          } {
            let cJ = new Map;
            for (let ZJ = 0; ZJ < JJ; ZJ++) cJ.set(wJ(), wJ());
            return cJ
          }
        } {
          JJ -= 144;
          let cJ = new Array(JJ);
          for (let ZJ = 0; ZJ < JJ; ZJ++) cJ[ZJ] = wJ();
          return GJ.freezeData ? Object.freeze(cJ) : cJ
        }
      }
      if (JJ < 192) {
        let cJ = JJ - 160;
        if (xJ >= XJ) return jJ.slice(XJ - fJ, (XJ += cJ) - fJ);
        if (0 == xJ && eJ < 140) {
          let JJ = cJ < 16 ? RJ(cJ) : iJ(cJ);
          if (null != JJ) return JJ
        }
        return kJ(cJ)
      } {
        let cJ;
        switch (JJ) {
          case 192:
            return null;
          case 193:
            return YJ ? (cJ = wJ(), cJ > 0 ? YJ[1].slice(YJ.position1, YJ.position1 += cJ) : YJ[0].slice(YJ.position0, YJ.position0 -= cJ)) : QJ;
          case 194:
            return !1;
          case 195:
            return !0;
          case 196:
            if (cJ = UJ[XJ++], void 0 === cJ) throw new Error("Unexpected end of buffer");
            return aJ(cJ);
          case 197:
            return cJ = DJ.getUint16(XJ), XJ += 2, aJ(cJ);
          case 198:
            return cJ = DJ.getUint32(XJ), XJ += 4, aJ(cJ);
          case 199:
            return BJ(UJ[XJ++]);
          case 200:
            return cJ = DJ.getUint16(XJ), XJ += 2, BJ(cJ);
          case 201:
            return cJ = DJ.getUint32(XJ), XJ += 4, BJ(cJ);
          case 202:
            if (cJ = DJ.getFloat32(XJ), GJ.useFloat32 > 2) {
              let JJ = Ac[(127 & UJ[XJ]) << 1 | UJ[XJ + 1] >> 7];
              return XJ += 4, (JJ * cJ + (cJ > 0 ? .5 : -.5) | 0) / JJ
            }
            return XJ += 4, cJ;
          case 203:
            return cJ = DJ.getFloat64(XJ), XJ += 8, cJ;
          case 204:
            return UJ[XJ++];
          case 205:
            return cJ = DJ.getUint16(XJ), XJ += 2, cJ;
          case 206:
            return cJ = DJ.getUint32(XJ), XJ += 4, cJ;
          case 207:
            return "number" === GJ.int64AsType ? (cJ = 4294967296 * DJ.getUint32(XJ), cJ += DJ.getUint32(XJ + 4)) : "string" === GJ.int64AsType ? cJ = DJ.getBigUint64(XJ).toString() : "auto" === GJ.int64AsType ? (cJ = DJ.getBigUint64(XJ), cJ <= BigInt(2) << BigInt(52) && (cJ = Number(cJ))) : cJ = DJ.getBigUint64(XJ), XJ += 8, cJ;
          case 208:
            return DJ.getInt8(XJ++);
          case 209:
            return cJ = DJ.getInt16(XJ), XJ += 2, cJ;
          case 210:
            return cJ = DJ.getInt32(XJ), XJ += 4, cJ;
          case 211:
            return "number" === GJ.int64AsType ? (cJ = 4294967296 * DJ.getInt32(XJ), cJ += DJ.getUint32(XJ + 4)) : "string" === GJ.int64AsType ? cJ = DJ.getBigInt64(XJ).toString() : "auto" === GJ.int64AsType ? (cJ = DJ.getBigInt64(XJ), cJ >= BigInt(-2) << BigInt(52) && cJ <= BigInt(2) << BigInt(52) && (cJ = Number(cJ))) : cJ = DJ.getBigInt64(XJ), XJ += 8, cJ;
          case 212:
            if (cJ = UJ[XJ++], 114 == cJ) return Jc(63 & UJ[XJ++]);
            {
              let JJ = rJ[cJ];
              if (JJ) return JJ.read ? (XJ++, JJ.read(wJ())) : JJ.noBuffer ? (XJ++, JJ()) : JJ(UJ.subarray(XJ, ++XJ));
              throw new Error("Unknown extension " + cJ)
            }
          case 213:
            return cJ = UJ[XJ], 114 == cJ ? (XJ++, Jc(63 & UJ[XJ++], UJ[XJ++])) : BJ(2);
          case 214:
            return BJ(4);
          case 215:
            return BJ(8);
          case 216:
            return BJ(16);
          case 217:
            return cJ = UJ[XJ++], xJ >= XJ ? jJ.slice(XJ - fJ, (XJ += cJ) - fJ) : pJ(cJ);
          case 218:
            return cJ = DJ.getUint16(XJ), xJ >= (XJ += 2) ? jJ.slice(XJ - fJ, (XJ += cJ) - fJ) : dJ(cJ);
          case 219:
            return cJ = DJ.getUint32(XJ), xJ >= (XJ += 4) ? jJ.slice(XJ - fJ, (XJ += cJ) - fJ) : zJ(cJ);
          case 220:
            return cJ = DJ.getUint16(XJ), XJ += 2, TJ(cJ);
          case 221:
            return cJ = DJ.getUint32(XJ), XJ += 4, TJ(cJ);
          case 222:
            return cJ = DJ.getUint16(XJ), XJ += 2, CJ(cJ);
          case 223:
            return cJ = DJ.getUint32(XJ), XJ += 4, CJ(cJ);
          default:
            if (JJ >= 224) return JJ - 256;
            if (void 0 === JJ) {
              let JJ = new Error("Unexpected end of MessagePack data");
              throw JJ.incomplete = !0, JJ
            }
            throw new Error("Unknown MessagePack token " + JJ)
        }
      }
    }
    const WJ = /^[a-zA-Z_$][a-zA-Z\d_$]*$/;

    function gJ(JJ, cJ) {
      function ZJ() {
        if (ZJ.count++ > SJ) {
          let ZJ = JJ.read = new Function("r", "return function(){return " + (GJ.freezeData ? "Object.freeze" : "") + "({" + JJ.map((JJ => "__proto__" === JJ ? "__proto_:r()" : WJ.test(JJ) ? JJ + ":r()" : "[" + JSON.stringify(JJ) + "]:r()")).join(",") + "})}")(wJ);
          return 0 === JJ.highByte && (JJ.read = HJ(cJ, JJ.read)), ZJ()
        }
        let FJ = {};
        for (let cJ = 0, ZJ = JJ.length; cJ < ZJ; cJ++) {
          let ZJ = JJ[cJ];
          "__proto__" === ZJ && (ZJ = "__proto_"), FJ[ZJ] = wJ()
        }
        return GJ.freezeData ? Object.freeze(FJ) : FJ
      }
      return ZJ.count = 0, 0 === JJ.highByte ? HJ(cJ, ZJ) : ZJ
    }
    const HJ = (JJ, cJ) => function() {
      let ZJ = UJ[XJ++];
      if (0 === ZJ) return cJ();
      let FJ = JJ < 32 ? -(JJ + (ZJ << 5)) : JJ + (ZJ << 5),
        eJ = qJ[FJ] || PJ()[FJ];
      if (!eJ) throw new Error("Record id is not defined for " + FJ);
      return eJ.read || (eJ.read = gJ(eJ, JJ)), eJ.read()
    };

    function PJ() {
      let JJ = ec((() => (UJ = null, GJ.getStructures())));
      return qJ = GJ._mergeStructures(JJ, qJ)
    }
    var kJ = OJ,
      pJ = OJ,
      dJ = OJ,
      zJ = OJ;
    let NJ = !1;

    function OJ(JJ) {
      let cJ;
      if (JJ < 16 && (cJ = RJ(JJ))) return cJ;
      if (JJ > 64 && FJ) return FJ.decode(UJ.subarray(XJ, XJ += JJ));
      const ZJ = XJ + JJ,
        eJ = [];
      for (cJ = ""; XJ < ZJ;) {
        const JJ = UJ[XJ++];
        if (0 === (128 & JJ)) eJ.push(JJ);
        else if (192 === (224 & JJ)) {
          const cJ = 63 & UJ[XJ++];
          eJ.push((31 & JJ) << 6 | cJ)
        } else if (224 === (240 & JJ)) {
          const cJ = 63 & UJ[XJ++],
            ZJ = 63 & UJ[XJ++];
          eJ.push((31 & JJ) << 12 | cJ << 6 | ZJ)
        } else if (240 === (248 & JJ)) {
          let cJ = (7 & JJ) << 18 | (63 & UJ[XJ++]) << 12 | (63 & UJ[XJ++]) << 6 | 63 & UJ[XJ++];
          cJ > 65535 && (cJ -= 65536, eJ.push(cJ >>> 10 & 1023 | 55296), cJ = 56320 | 1023 & cJ), eJ.push(cJ)
        } else eJ.push(JJ);
        eJ.length >= 4096 && (cJ += uJ.apply(String, eJ), eJ.length = 0)
      }
      return eJ.length > 0 && (cJ += uJ.apply(String, eJ)), cJ
    }

    function TJ(JJ) {
      let cJ = new Array(JJ);
      for (let ZJ = 0; ZJ < JJ; ZJ++) cJ[ZJ] = wJ();
      return GJ.freezeData ? Object.freeze(cJ) : cJ
    }

    function CJ(JJ) {
      if (GJ.mapsAsObjects) {
        let cJ = {};
        for (let ZJ = 0; ZJ < JJ; ZJ++) {
          let JJ = oJ();
          "__proto__" === JJ && (JJ = "__proto_"), cJ[JJ] = wJ()
        }
        return cJ
      } {
        let cJ = new Map;
        for (let ZJ = 0; ZJ < JJ; ZJ++) cJ.set(wJ(), wJ());
        return cJ
      }
    }
    var uJ = String.fromCharCode;

    function iJ(JJ) {
      let cJ = XJ,
        ZJ = new Array(JJ);
      for (let FJ = 0; FJ < JJ; FJ++) {
        const JJ = UJ[XJ++];
        if ((128 & JJ) > 0) return void(XJ = cJ);
        ZJ[FJ] = JJ
      }
      return uJ.apply(String, ZJ)
    }

    function RJ(JJ) {
      if (JJ < 4) {
        if (JJ < 2) {
          if (0 === JJ) return "";
          {
            let JJ = UJ[XJ++];
            return (128 & JJ) > 1 ? void(XJ -= 1) : uJ(JJ)
          }
        } {
          let cJ = UJ[XJ++],
            ZJ = UJ[XJ++];
          if ((128 & cJ) > 0 || (128 & ZJ) > 0) return void(XJ -= 2);
          if (JJ < 3) return uJ(cJ, ZJ);
          let FJ = UJ[XJ++];
          return (128 & FJ) > 0 ? void(XJ -= 3) : uJ(cJ, ZJ, FJ)
        }
      } {
        let cJ = UJ[XJ++],
          ZJ = UJ[XJ++],
          FJ = UJ[XJ++],
          eJ = UJ[XJ++];
        if ((128 & cJ) > 0 || (128 & ZJ) > 0 || (128 & FJ) > 0 || (128 & eJ) > 0) return void(XJ -= 4);
        if (JJ < 6) {
          if (4 === JJ) return uJ(cJ, ZJ, FJ, eJ);
          {
            let JJ = UJ[XJ++];
            return (128 & JJ) > 0 ? void(XJ -= 5) : uJ(cJ, ZJ, FJ, eJ, JJ)
          }
        }
        if (JJ < 8) {
          let AJ = UJ[XJ++],
            qJ = UJ[XJ++];
          if ((128 & AJ) > 0 || (128 & qJ) > 0) return void(XJ -= 6);
          if (JJ < 7) return uJ(cJ, ZJ, FJ, eJ, AJ, qJ);
          let jJ = UJ[XJ++];
          return (128 & jJ) > 0 ? void(XJ -= 7) : uJ(cJ, ZJ, FJ, eJ, AJ, qJ, jJ)
        } {
          let AJ = UJ[XJ++],
            qJ = UJ[XJ++],
            jJ = UJ[XJ++],
            YJ = UJ[XJ++];
          if ((128 & AJ) > 0 || (128 & qJ) > 0 || (128 & jJ) > 0 || (128 & YJ) > 0) return void(XJ -= 8);
          if (JJ < 10) {
            if (8 === JJ) return uJ(cJ, ZJ, FJ, eJ, AJ, qJ, jJ, YJ);
            {
              let JJ = UJ[XJ++];
              return (128 & JJ) > 0 ? void(XJ -= 9) : uJ(cJ, ZJ, FJ, eJ, AJ, qJ, jJ, YJ, JJ)
            }
          }
          if (JJ < 12) {
            let hJ = UJ[XJ++],
              DJ = UJ[XJ++];
            if ((128 & hJ) > 0 || (128 & DJ) > 0) return void(XJ -= 10);
            if (JJ < 11) return uJ(cJ, ZJ, FJ, eJ, AJ, qJ, jJ, YJ, hJ, DJ);
            let sJ = UJ[XJ++];
            return (128 & sJ) > 0 ? void(XJ -= 11) : uJ(cJ, ZJ, FJ, eJ, AJ, qJ, jJ, YJ, hJ, DJ, sJ)
          } {
            let hJ = UJ[XJ++],
              DJ = UJ[XJ++],
              sJ = UJ[XJ++],
              nJ = UJ[XJ++];
            if ((128 & hJ) > 0 || (128 & DJ) > 0 || (128 & sJ) > 0 || (128 & nJ) > 0) return void(XJ -= 12);
            if (JJ < 14) {
              if (12 === JJ) return uJ(cJ, ZJ, FJ, eJ, AJ, qJ, jJ, YJ, hJ, DJ, sJ, nJ);
              {
                let JJ = UJ[XJ++];
                return (128 & JJ) > 0 ? void(XJ -= 13) : uJ(cJ, ZJ, FJ, eJ, AJ, qJ, jJ, YJ, hJ, DJ, sJ, nJ, JJ)
              }
            } {
              let GJ = UJ[XJ++],
                fJ = UJ[XJ++];
              if ((128 & GJ) > 0 || (128 & fJ) > 0) return void(XJ -= 14);
              if (JJ < 15) return uJ(cJ, ZJ, FJ, eJ, AJ, qJ, jJ, YJ, hJ, DJ, sJ, nJ, GJ, fJ);
              let xJ = UJ[XJ++];
              return (128 & xJ) > 0 ? void(XJ -= 15) : uJ(cJ, ZJ, FJ, eJ, AJ, qJ, jJ, YJ, hJ, DJ, sJ, nJ, GJ, fJ, xJ)
            }
          }
        }
      }
    }

    function LJ() {
      let JJ, cJ = UJ[XJ++];
      if (cJ < 192) JJ = cJ - 160;
      else switch (cJ) {
        case 217:
          JJ = UJ[XJ++];
          break;
        case 218:
          JJ = DJ.getUint16(XJ), XJ += 2;
          break;
        case 219:
          JJ = DJ.getUint32(XJ), XJ += 4;
          break;
        default:
          throw new Error("Expected string")
      }
      return OJ(JJ)
    }

    function aJ(JJ) {
      return GJ.copyBuffers ? Uint8Array.prototype.slice.call(UJ, XJ, XJ += JJ) : UJ.subarray(XJ, XJ += JJ)
    }

    function BJ(JJ) {
      let cJ = UJ[XJ++];
      if (rJ[cJ]) {
        let ZJ;
        return rJ[cJ](UJ.subarray(XJ, ZJ = XJ += JJ), (JJ => {
          XJ = JJ;
          try {
            return wJ()
          } finally {
            XJ = ZJ
          }
        }))
      }
      throw new Error("Unknown extension type " + cJ)
    }
    var tJ = new Array(4096);

    function oJ() {
      let JJ = UJ[XJ++];
      if (!(JJ >= 160 && JJ < 192)) return XJ--, lJ(wJ());
      if (JJ -= 160, xJ >= XJ) return jJ.slice(XJ - fJ, (XJ += JJ) - fJ);
      if (!(0 == xJ && eJ < 180)) return kJ(JJ);
      let cJ, ZJ = 4095 & (JJ << 5 ^ (JJ > 1 ? DJ.getUint16(XJ) : JJ > 0 ? UJ[XJ] : 0)),
        FJ = tJ[ZJ],
        AJ = XJ,
        qJ = XJ + JJ - 3,
        YJ = 0;
      if (FJ && FJ.bytes == JJ) {
        for (; AJ < qJ;) {
          if (cJ = DJ.getUint32(AJ), cJ != FJ[YJ++]) {
            AJ = 1879048192;
            break
          }
          AJ += 4
        }
        for (qJ += 3; AJ < qJ;)
          if (cJ = UJ[AJ++], cJ != FJ[YJ++]) {
            AJ = 1879048192;
            break
          } if (AJ === qJ) return XJ = AJ, FJ.string;
        qJ -= 3, AJ = XJ
      }
      for (FJ = [], tJ[ZJ] = FJ, FJ.bytes = JJ; AJ < qJ;) cJ = DJ.getUint32(AJ), FJ.push(cJ), AJ += 4;
      for (qJ += 3; AJ < qJ;) cJ = UJ[AJ++], FJ.push(cJ);
      let hJ = JJ < 16 ? RJ(JJ) : iJ(JJ);
      return FJ.string = null != hJ ? hJ : kJ(JJ)
    }

    function lJ(JJ) {
      if ("string" === typeof JJ) return JJ;
      if ("number" === typeof JJ || "boolean" === typeof JJ || "bigint" === typeof JJ) return JJ.toString();
      if (null == JJ) return JJ + "";
      if (GJ.allowArraysInMapKeys && Array.isArray(JJ) && JJ.flat().every((JJ => ["string", "number", "boolean", "bigint"].includes(typeof JJ)))) return JJ.flat().toString();
      throw new Error("Invalid property type for record: " + typeof JJ)
    }
    const Jc = (JJ, cJ) => {
      let ZJ = wJ().map(lJ),
        FJ = JJ;
      void 0 !== cJ && (JJ = JJ < 32 ? -((cJ << 5) + JJ) : (cJ << 5) + JJ, ZJ.highByte = cJ);
      let UJ = qJ[JJ];
      return UJ && (UJ.isShared || yJ) && ((qJ.restoreStructures || (qJ.restoreStructures = []))[JJ] = UJ), qJ[JJ] = ZJ, ZJ.read = gJ(ZJ, FJ), ZJ.read()
    };
    rJ[0] = () => {}, rJ[0].noBuffer = !0, rJ[66] = JJ => {
      let cJ = JJ.length,
        ZJ = BigInt(128 & JJ[0] ? JJ[0] - 256 : JJ[0]);
      for (let FJ = 1; FJ < cJ; FJ++) ZJ <<= BigInt(8), ZJ += BigInt(JJ[FJ]);
      return ZJ
    };
    let cc = {
      Error: Error,
      TypeError: TypeError,
      ReferenceError: ReferenceError
    };
    rJ[101] = () => {
      let JJ = wJ();
      return (cc[JJ[0]] || Error)(JJ[1], {
        cause: JJ[2]
      })
    }, rJ[105] = JJ => {
      if (!1 === GJ.structuredClone) throw new Error("Structured clone extension is disabled");
      let cJ = DJ.getUint32(XJ - 4);
      hJ || (hJ = new Map);
      let ZJ, FJ = UJ[XJ];
      ZJ = FJ >= 144 && FJ < 160 || 220 == FJ || 221 == FJ ? [] : {};
      let eJ = {
        target: ZJ
      };
      hJ.set(cJ, eJ);
      let AJ = wJ();
      return eJ.used ? Object.assign(ZJ, AJ) : (eJ.target = AJ, AJ)
    }, rJ[112] = JJ => {
      if (!1 === GJ.structuredClone) throw new Error("Structured clone extension is disabled");
      let cJ = DJ.getUint32(XJ - 4),
        ZJ = hJ.get(cJ);
      return ZJ.used = !0, ZJ.target
    }, rJ[115] = () => new Set(wJ());
    const Zc = ["Int8", "Uint8", "Uint8Clamped", "Int16", "Uint16", "Int32", "Uint32", "Float32", "Float64", "BigInt64", "BigUint64"].map((JJ => JJ + "Array"));
    let Fc = "object" === typeof globalThis ? globalThis : window;
    rJ[116] = JJ => {
      let cJ = JJ[0],
        ZJ = Zc[cJ];
      if (!ZJ) {
        if (16 === cJ) {
          let cJ = new ArrayBuffer(JJ.length - 1);
          return new Uint8Array(cJ).set(JJ.subarray(1)), cJ
        }
        throw new Error("Could not find typed array for code " + cJ)
      }
      return new Fc[ZJ](Uint8Array.prototype.slice.call(JJ, 1).buffer)
    }, rJ[120] = () => {
      let JJ = wJ();
      return new RegExp(JJ[0], JJ[1])
    };
    const Uc = [];

    function ec(JJ) {
      KJ && KJ();
      let cJ = eJ,
        ZJ = XJ,
        FJ = nJ,
        AJ = fJ,
        rJ = xJ,
        vJ = jJ,
        mJ = sJ,
        QJ = hJ,
        EJ = YJ,
        VJ = new Uint8Array(UJ.slice(0, eJ)),
        SJ = qJ,
        IJ = qJ.slice(0, qJ.length),
        MJ = GJ,
        bJ = yJ,
        wJ = JJ();
      return eJ = cJ, XJ = ZJ, nJ = FJ, fJ = AJ, xJ = rJ, jJ = vJ, sJ = mJ, hJ = QJ, YJ = EJ, UJ = VJ, yJ = bJ, (qJ = SJ).splice(0, qJ.length, ...IJ), GJ = MJ, DJ = new DataView(UJ.buffer, UJ.byteOffset, UJ.byteLength), wJ
    }

    function Xc() {
      UJ = null, hJ = null, qJ = null
    }
    rJ[98] = JJ => {
      let cJ = (JJ[0] << 24) + (JJ[1] << 16) + (JJ[2] << 8) + JJ[3],
        ZJ = XJ;
      return XJ += cJ - JJ.length, YJ = Uc, (YJ = [LJ(), LJ()]).position0 = 0, YJ.position1 = 0, YJ.postBundlePosition = XJ, XJ = ZJ, wJ()
    }, rJ[255] = JJ => 4 == JJ.length ? new Date(1e3 * (16777216 * JJ[0] + (JJ[1] << 16) + (JJ[2] << 8) + JJ[3])) : 8 == JJ.length ? new Date(((JJ[0] << 22) + (JJ[1] << 14) + (JJ[2] << 6) + (JJ[3] >> 2)) / 1e6 + 1e3 * (4294967296 * (3 & JJ[3]) + 16777216 * JJ[4] + (JJ[5] << 16) + (JJ[6] << 8) + JJ[7])) : 12 == JJ.length ? new Date(((JJ[0] << 24) + (JJ[1] << 16) + (JJ[2] << 8) + JJ[3]) / 1e6 + 1e3 * ((128 & JJ[4] ? -281474976710656 : 0) + 1099511627776 * JJ[6] + 4294967296 * JJ[7] + 16777216 * JJ[8] + (JJ[9] << 16) + (JJ[10] << 8) + JJ[11])) : new Date("invalid");
    const Ac = new Array(147);
    for (let UZ = 0; UZ < 256; UZ++) Ac[UZ] = +("1e" + Math.floor(45.15 - .30103 * UZ));
    const qc = IJ;
    var jc = new IJ({
      useRecords: !1
    });
    const Yc = jc.unpack,
      hc = jc.unpackMultiple,
      Dc = jc.unpack,
      sc = {
        NEVER: 0,
        ALWAYS: 1,
        DECIMAL_ROUND: 3,
        DECIMAL_FIT: 4
      };
    let nc, Gc, fc, xc = new Float32Array(1),
      rc = new Uint8Array(xc.buffer, 0, 4);

    function vc(JJ) {
      xc[0] = JJ;
      let cJ = Ac[(127 & rc[3]) << 1 | rc[2] >> 7];
      return (cJ * JJ + (JJ > 0 ? .5 : -.5) | 0) / cJ
    }
    try {
      nc = new TextEncoder
    } catch (FZ) {}
    const mc = "undefined" !== typeof Buffer,
      Qc = mc ? function(JJ) {
        return Buffer.allocUnsafeSlow(JJ)
      } : Uint8Array,
      Ec = mc ? Buffer : Uint8Array,
      Vc = mc ? 4294967296 : 2144337920;
    let Kc, yc, Sc, Ic, Mc, bc = 0,
      wc = null;
    const Wc = /[\u0080-\uFFFF]/,
      gc = Symbol("record-id");
    class Hc extends IJ {
      constructor(JJ) {
        let cJ, ZJ, FJ, UJ;
        super(JJ), this.offset = 0;
        let eJ = Ec.prototype.utf8Write ? function(JJ, cJ) {
            return Kc.utf8Write(JJ, cJ, Kc.byteLength - cJ)
          } : !(!nc || !nc.encodeInto) && function(JJ, cJ) {
            return nc.encodeInto(JJ, Kc.subarray(cJ)).written
          },
          XJ = this;
        JJ || (JJ = {});
        let AJ = JJ && JJ.sequential,
          qJ = JJ.structures || JJ.saveStructures,
          jJ = JJ.maxSharedStructures;
        if (null == jJ && (jJ = qJ ? 32 : 0), jJ > 8160) throw new Error("Maximum maxSharedStructure is 8160");
        JJ.structuredClone && void 0 == JJ.moreTypes && (this.moreTypes = !0);
        let YJ = JJ.maxOwnStructures;
        null == YJ && (YJ = qJ ? 32 : 64), this.structures || 0 == JJ.useRecords || (this.structures = []);
        let hJ = jJ > 32 || YJ + jJ > 64,
          DJ = jJ + 64,
          sJ = jJ + YJ + 64;
        if (sJ > 8256) throw new Error("Maximum maxSharedStructure + maxOwnStructure is 8192");
        let nJ = [],
          GJ = 0,
          fJ = 0;
        this.pack = this.encode = function(JJ, eJ) {
          if (Kc || (Kc = new Qc(8192), Sc = Kc.dataView || (Kc.dataView = new DataView(Kc.buffer, 0, 8192)), bc = 0), Ic = Kc.length - 10, Ic - bc < 2048 ? (Kc = new Qc(Kc.length), Sc = Kc.dataView || (Kc.dataView = new DataView(Kc.buffer, 0, Kc.length)), Ic = Kc.length - 10, bc = 0) : bc = bc + 7 & 2147483640, cJ = bc, eJ & oc && (bc += 255 & eJ), UJ = XJ.structuredClone ? new Map : null, XJ.bundleStrings && "string" !== typeof JJ ? (wc = [], wc.size = 1 / 0) : wc = null, FJ = XJ.structures, FJ) {
            FJ.uninitialized && (FJ = XJ._mergeStructures(XJ.getStructures()));
            let JJ = FJ.sharedLength || 0;
            if (JJ > jJ) throw new Error("Shared structures is larger than maximum shared structures, try increasing maxSharedStructures to " + FJ.sharedLength);
            if (!FJ.transitions) {
              FJ.transitions = Object.create(null);
              for (let cJ = 0; cJ < JJ; cJ++) {
                let JJ = FJ[cJ];
                if (!JJ) continue;
                let ZJ, UJ = FJ.transitions;
                for (let cJ = 0, FJ = JJ.length; cJ < FJ; cJ++) {
                  let FJ = JJ[cJ];
                  ZJ = UJ[FJ], ZJ || (ZJ = UJ[FJ] = Object.create(null)), UJ = ZJ
                }
                UJ[gc] = cJ + 64
              }
              this.lastNamedStructuresLength = JJ
            }
            AJ || (FJ.nextId = JJ + 64)
          }
          let qJ;
          ZJ && (ZJ = !1);
          try {
            XJ.randomAccessStructure && JJ && JJ.constructor && JJ.constructor === Object ? IJ(JJ) : vJ(JJ);
            let ZJ = wc;
            if (wc && dc(cJ, vJ, 0), UJ && UJ.idsToInsert) {
              let JJ = UJ.idsToInsert.sort(((JJ, cJ) => JJ.offset > cJ.offset ? 1 : -1)),
                FJ = JJ.length,
                eJ = -1;
              for (; ZJ && FJ > 0;) {
                let UJ = JJ[--FJ].offset + cJ;
                UJ < ZJ.stringsPosition + cJ && -1 === eJ && (eJ = 0), UJ > ZJ.position + cJ ? eJ >= 0 && (eJ += 6) : (eJ >= 0 && (Sc.setUint32(ZJ.position + cJ, Sc.getUint32(ZJ.position + cJ) + eJ), eJ = -1), ZJ = ZJ.previous, FJ++)
              }
              eJ >= 0 && ZJ && Sc.setUint32(ZJ.position + cJ, Sc.getUint32(ZJ.position + cJ) + eJ), bc += 6 * JJ.length, bc > Ic && KJ(bc), XJ.offset = bc;
              let AJ = function(JJ, cJ) {
                let ZJ, FJ = 6 * cJ.length,
                  UJ = JJ.length - FJ;
                for (; ZJ = cJ.pop();) {
                  let cJ = ZJ.offset,
                    eJ = ZJ.id;
                  JJ.copyWithin(cJ + FJ, cJ, UJ), FJ -= 6;
                  let XJ = cJ + FJ;
                  JJ[XJ++] = 214, JJ[XJ++] = 105, JJ[XJ++] = eJ >> 24, JJ[XJ++] = eJ >> 16 & 255, JJ[XJ++] = eJ >> 8 & 255, JJ[XJ++] = 255 & eJ, UJ = cJ
                }
                return JJ
              }(Kc.subarray(cJ, bc), JJ);
              return UJ = null, AJ
            }
            return XJ.offset = bc, eJ & Bc ? (Kc.start = cJ, Kc.end = bc, Kc) : Kc.subarray(cJ, bc)
          } catch (FZ) {
            throw qJ = FZ, FZ
          } finally {
            if (FJ && (xJ(), ZJ && XJ.saveStructures)) {
              let ZJ = FJ.sharedLength || 0,
                UJ = Kc.subarray(cJ, bc),
                AJ = Nc(FJ, XJ);
              if (!qJ) return !1 === XJ.saveStructures(AJ, AJ.isCompatible) ? XJ.pack(JJ, eJ) : (XJ.lastNamedStructuresLength = ZJ, Kc.length > 1073741824 && (Kc = null), UJ)
            }
            Kc.length > 1073741824 && (Kc = null), eJ & tc && (bc = cJ)
          }
        };
        const xJ = () => {
            fJ < 10 && fJ++;
            let JJ = FJ.sharedLength || 0;
            if (FJ.length > JJ && !AJ && (FJ.length = JJ), GJ > 1e4) FJ.transitions = null, fJ = 0, GJ = 0, nJ.length > 0 && (nJ = []);
            else if (nJ.length > 0 && !AJ) {
              for (let JJ = 0, cJ = nJ.length; JJ < cJ; JJ++) nJ[JJ][gc] = 0;
              nJ = []
            }
          },
          rJ = JJ => {
            var cJ = JJ.length;
            cJ < 16 ? Kc[bc++] = 144 | cJ : cJ < 65536 ? (Kc[bc++] = 220, Kc[bc++] = cJ >> 8, Kc[bc++] = 255 & cJ) : (Kc[bc++] = 221, Sc.setUint32(bc, cJ), bc += 4);
            for (let ZJ = 0; ZJ < cJ; ZJ++) vJ(JJ[ZJ])
          },
          vJ = JJ => {
            bc > Ic && (Kc = KJ(bc));
            var ZJ, FJ = typeof JJ;
            if ("string" === FJ) {
              let FJ, UJ = JJ.length;
              if (wc && UJ >= 4 && UJ < 4096) {
                if ((wc.size += UJ) > 21760) {
                  let JJ, ZJ, FJ = (wc[0] ? 3 * wc[0].length + wc[1].length : 0) + 10;
                  bc + FJ > Ic && (Kc = KJ(bc + FJ)), wc.position ? (ZJ = wc, Kc[bc] = 200, bc += 3, Kc[bc++] = 98, JJ = bc - cJ, bc += 4, dc(cJ, vJ, 0), Sc.setUint16(JJ + cJ - 3, bc - cJ - JJ)) : (Kc[bc++] = 214, Kc[bc++] = 98, JJ = bc - cJ, bc += 4), wc = ["", ""], wc.previous = ZJ, wc.size = 0, wc.position = JJ
                }
                let ZJ = Wc.test(JJ);
                return wc[ZJ ? 0 : 1] += JJ, Kc[bc++] = 193, void vJ(ZJ ? -UJ : UJ)
              }
              FJ = UJ < 32 ? 1 : UJ < 256 ? 2 : UJ < 65536 ? 3 : 5;
              let XJ = 3 * UJ;
              if (bc + XJ > Ic && (Kc = KJ(bc + XJ)), UJ < 64 || !eJ) {
                let cJ, eJ, XJ, AJ = bc + FJ;
                for (cJ = 0; cJ < UJ; cJ++) eJ = JJ.charCodeAt(cJ), eJ < 128 ? Kc[AJ++] = eJ : eJ < 2048 ? (Kc[AJ++] = eJ >> 6 | 192, Kc[AJ++] = 63 & eJ | 128) : 55296 === (64512 & eJ) && 56320 === (64512 & (XJ = JJ.charCodeAt(cJ + 1))) ? (eJ = 65536 + ((1023 & eJ) << 10) + (1023 & XJ), cJ++, Kc[AJ++] = eJ >> 18 | 240, Kc[AJ++] = eJ >> 12 & 63 | 128, Kc[AJ++] = eJ >> 6 & 63 | 128, Kc[AJ++] = 63 & eJ | 128) : (Kc[AJ++] = eJ >> 12 | 224, Kc[AJ++] = eJ >> 6 & 63 | 128, Kc[AJ++] = 63 & eJ | 128);
                ZJ = AJ - bc - FJ
              } else ZJ = eJ(JJ, bc + FJ);
              ZJ < 32 ? Kc[bc++] = 160 | ZJ : ZJ < 256 ? (FJ < 2 && Kc.copyWithin(bc + 2, bc + 1, bc + 1 + ZJ), Kc[bc++] = 217, Kc[bc++] = ZJ) : ZJ < 65536 ? (FJ < 3 && Kc.copyWithin(bc + 3, bc + 2, bc + 2 + ZJ), Kc[bc++] = 218, Kc[bc++] = ZJ >> 8, Kc[bc++] = 255 & ZJ) : (FJ < 5 && Kc.copyWithin(bc + 5, bc + 3, bc + 3 + ZJ), Kc[bc++] = 219, Sc.setUint32(bc, ZJ), bc += 4), bc += ZJ
            } else if ("number" === FJ)
              if (JJ >>> 0 === JJ) JJ < 32 || JJ < 128 && !1 === this.useRecords || JJ < 64 && !this.randomAccessStructure ? Kc[bc++] = JJ : JJ < 256 ? (Kc[bc++] = 204, Kc[bc++] = JJ) : JJ < 65536 ? (Kc[bc++] = 205, Kc[bc++] = JJ >> 8, Kc[bc++] = 255 & JJ) : (Kc[bc++] = 206, Sc.setUint32(bc, JJ), bc += 4);
              else if ((JJ | 0) === JJ) JJ >= -32 ? Kc[bc++] = 256 + JJ : JJ >= -128 ? (Kc[bc++] = 208, Kc[bc++] = JJ + 256) : JJ >= -32768 ? (Kc[bc++] = 209, Sc.setInt16(bc, JJ), bc += 2) : (Kc[bc++] = 210, Sc.setInt32(bc, JJ), bc += 4);
            else {
              let cJ;
              if ((cJ = this.useFloat32) > 0 && JJ < 4294967296 && JJ >= -2147483648) {
                let ZJ;
                if (Kc[bc++] = 202, Sc.setFloat32(bc, JJ), cJ < 4 || ((ZJ = JJ * Ac[(127 & Kc[bc]) << 1 | Kc[bc + 1] >> 7]) | 0) === ZJ) return void(bc += 4);
                bc--
              }
              Kc[bc++] = 203, Sc.setFloat64(bc, JJ), bc += 8
            } else if ("object" === FJ || "function" === FJ)
              if (JJ) {
                if (UJ) {
                  let ZJ = UJ.get(JJ);
                  if (ZJ) {
                    if (!ZJ.id) {
                      let JJ = UJ.idsToInsert || (UJ.idsToInsert = []);
                      ZJ.id = JJ.push(ZJ)
                    }
                    return Kc[bc++] = 214, Kc[bc++] = 112, Sc.setUint32(bc, ZJ.id), void(bc += 4)
                  }
                  UJ.set(JJ, {
                    offset: bc - cJ
                  })
                }
                let eJ = JJ.constructor;
                if (eJ === Object) VJ(JJ);
                else if (eJ === Array) rJ(JJ);
                else if (eJ === Map)
                  if (this.mapAsEmptyObject) Kc[bc++] = 128;
                  else {
                    (ZJ = JJ.size) < 16 ? Kc[bc++] = 128 | ZJ : ZJ < 65536 ? (Kc[bc++] = 222, Kc[bc++] = ZJ >> 8, Kc[bc++] = 255 & ZJ) : (Kc[bc++] = 223, Sc.setUint32(bc, ZJ), bc += 4);
                    for (let [cJ, ZJ] of JJ) vJ(cJ), vJ(ZJ)
                  }
                else {
                  for (let cJ = 0, ZJ = Gc.length; cJ < ZJ; cJ++) {
                    if (JJ instanceof fc[cJ]) {
                      let ZJ = Gc[cJ];
                      if (ZJ.write) {
                        ZJ.type && (Kc[bc++] = 212, Kc[bc++] = ZJ.type, Kc[bc++] = 0);
                        let cJ = ZJ.write.call(this, JJ);
                        return void(cJ === JJ ? Array.isArray(JJ) ? rJ(JJ) : VJ(JJ) : vJ(cJ))
                      }
                      let FJ, UJ = Kc,
                        eJ = Sc,
                        XJ = bc;
                      Kc = null;
                      try {
                        FJ = ZJ.pack.call(this, JJ, (JJ => (Kc = UJ, UJ = null, bc += JJ, bc > Ic && KJ(bc), {
                          target: Kc,
                          targetView: Sc,
                          position: bc - JJ
                        })), vJ)
                      } finally {
                        UJ && (Kc = UJ, Sc = eJ, bc = XJ, Ic = Kc.length - 10)
                      }
                      return void(FJ && (FJ.length + bc > Ic && KJ(FJ.length + bc), bc = pc(FJ, Kc, bc, ZJ.type)))
                    }
                  }
                  if (Array.isArray(JJ)) rJ(JJ);
                  else {
                    if (JJ.toJSON) {
                      const cJ = JJ.toJSON();
                      if (cJ !== JJ) return vJ(cJ)
                    }
                    if ("function" === FJ) return vJ(this.writeFunction && this.writeFunction(JJ));
                    VJ(JJ)
                  }
                }
              } else Kc[bc++] = 192;
            else if ("boolean" === FJ) Kc[bc++] = JJ ? 195 : 194;
            else if ("bigint" === FJ) {
              if (JJ < BigInt(1) << BigInt(63) && JJ >= -(BigInt(1) << BigInt(63))) Kc[bc++] = 211, Sc.setBigInt64(bc, JJ);
              else if (JJ < BigInt(1) << BigInt(64) && JJ > 0) Kc[bc++] = 207, Sc.setBigUint64(bc, JJ);
              else {
                if (!this.largeBigIntToFloat) {
                  if (this.largeBigIntToString) return vJ(JJ.toString());
                  if (this.useBigIntExtension && JJ < BigInt(2) ** BigInt(1023) && JJ > -(BigInt(2) ** BigInt(1023))) {
                    Kc[bc++] = 199, bc++, Kc[bc++] = 66;
                    let cJ, ZJ = [];
                    do {
                      let FJ = JJ & BigInt(255);
                      cJ = (FJ & BigInt(128)) === (JJ < BigInt(0) ? BigInt(128) : BigInt(0)), ZJ.push(FJ), JJ >>= BigInt(8)
                    } while (JJ !== BigInt(0) && JJ !== BigInt(-1) || !cJ);
                    Kc[bc - 2] = ZJ.length;
                    for (let JJ = ZJ.length; JJ > 0;) Kc[bc++] = Number(ZJ[--JJ]);
                    return
                  }
                  throw new RangeError(JJ + " was too large to fit in MessagePack 64-bit integer format, use useBigIntExtension, or set largeBigIntToFloat to convert to float-64, or set largeBigIntToString to convert to string")
                }
                Kc[bc++] = 203, Sc.setFloat64(bc, Number(JJ))
              }
              bc += 8
            } else {
              if ("undefined" !== FJ) throw new Error("Unknown type: " + FJ);
              this.encodeUndefinedAsNil ? Kc[bc++] = 192 : (Kc[bc++] = 212, Kc[bc++] = 0, Kc[bc++] = 0)
            }
          },
          mJ = this.variableMapSize || this.coercibleKeyAsNumber || this.skipValues ? JJ => {
            let cJ;
            if (this.skipValues) {
              cJ = [];
              for (let ZJ in JJ) "function" === typeof JJ.hasOwnProperty && !JJ.hasOwnProperty(ZJ) || this.skipValues.includes(JJ[ZJ]) || cJ.push(ZJ)
            } else cJ = Object.keys(JJ);
            let ZJ, FJ = cJ.length;
            if (FJ < 16 ? Kc[bc++] = 128 | FJ : FJ < 65536 ? (Kc[bc++] = 222, Kc[bc++] = FJ >> 8, Kc[bc++] = 255 & FJ) : (Kc[bc++] = 223, Sc.setUint32(bc, FJ), bc += 4), this.coercibleKeyAsNumber)
              for (let UJ = 0; UJ < FJ; UJ++) {
                ZJ = cJ[UJ];
                let FJ = Number(ZJ);
                vJ(isNaN(FJ) ? ZJ : FJ), vJ(JJ[ZJ])
              } else
                for (let UJ = 0; UJ < FJ; UJ++) vJ(ZJ = cJ[UJ]), vJ(JJ[ZJ])
          } : JJ => {
            Kc[bc++] = 222;
            let ZJ = bc - cJ;
            bc += 2;
            let FJ = 0;
            for (let cJ in JJ)("function" !== typeof JJ.hasOwnProperty || JJ.hasOwnProperty(cJ)) && (vJ(cJ), vJ(JJ[cJ]), FJ++);
            if (FJ > 65535) throw new Error('Object is too large to serialize with fast 16-bit map size, use the "variableMapSize" option to serialize this object');
            Kc[ZJ++ + cJ] = FJ >> 8, Kc[ZJ + cJ] = 255 & FJ
          },
          QJ = !1 === this.useRecords ? mJ : JJ.progressiveRecords && !hJ ? JJ => {
            let ZJ, UJ, eJ = FJ.transitions || (FJ.transitions = Object.create(null)),
              XJ = bc++ - cJ;
            for (let AJ in JJ)
              if ("function" !== typeof JJ.hasOwnProperty || JJ.hasOwnProperty(AJ)) {
                if (ZJ = eJ[AJ], ZJ) eJ = ZJ;
                else {
                  let qJ = Object.keys(JJ),
                    jJ = eJ;
                  eJ = FJ.transitions;
                  let YJ = 0;
                  for (let JJ = 0, cJ = qJ.length; JJ < cJ; JJ++) {
                    let cJ = qJ[JJ];
                    ZJ = eJ[cJ], ZJ || (ZJ = eJ[cJ] = Object.create(null), YJ++), eJ = ZJ
                  }
                  XJ + cJ + 1 == bc ? (bc--, yJ(eJ, qJ, YJ)) : SJ(eJ, qJ, XJ, YJ), UJ = !0, eJ = jJ[AJ]
                }
                vJ(JJ[AJ])
              } if (!UJ) {
              let ZJ = eJ[gc];
              ZJ ? Kc[XJ + cJ] = ZJ : SJ(eJ, Object.keys(JJ), XJ, 0)
            }
          } : JJ => {
            let cJ, ZJ = FJ.transitions || (FJ.transitions = Object.create(null)),
              UJ = 0;
            for (let FJ in JJ)("function" !== typeof JJ.hasOwnProperty || JJ.hasOwnProperty(FJ)) && (cJ = ZJ[FJ], cJ || (cJ = ZJ[FJ] = Object.create(null), UJ++), ZJ = cJ);
            let eJ = ZJ[gc];
            eJ ? eJ >= 96 && hJ ? (Kc[bc++] = 96 + (31 & (eJ -= 96)), Kc[bc++] = eJ >> 5) : Kc[bc++] = eJ : yJ(ZJ, ZJ.__keys__ || Object.keys(JJ), UJ);
            for (let FJ in JJ)("function" !== typeof JJ.hasOwnProperty || JJ.hasOwnProperty(FJ)) && vJ(JJ[FJ])
          },
          EJ = "function" == typeof this.useRecords && this.useRecords,
          VJ = EJ ? JJ => {
            EJ(JJ) ? QJ(JJ) : mJ(JJ)
          } : QJ,
          KJ = JJ => {
            let ZJ;
            if (JJ > 16777216) {
              if (JJ - cJ > Vc) throw new Error("Packed buffer would be larger than maximum buffer size");
              ZJ = Math.min(Vc, 4096 * Math.round(Math.max((JJ - cJ) * (JJ > 67108864 ? 1.25 : 2), 4194304) / 4096))
            } else ZJ = 1 + (Math.max(JJ - cJ << 2, Kc.length - 1) >> 12) << 12;
            let FJ = new Qc(ZJ);
            return Sc = FJ.dataView || (FJ.dataView = new DataView(FJ.buffer, 0, ZJ)), JJ = Math.min(JJ, Kc.length), Kc.copy ? Kc.copy(FJ, 0, cJ, JJ) : FJ.set(Kc.slice(cJ, JJ)), bc -= cJ, cJ = 0, Ic = FJ.length - 10, Kc = FJ
          },
          yJ = (JJ, cJ, UJ) => {
            let eJ = FJ.nextId;
            eJ || (eJ = 64), eJ < DJ && this.shouldShareStructure && !this.shouldShareStructure(cJ) ? (eJ = FJ.nextOwnId, eJ < sJ || (eJ = DJ), FJ.nextOwnId = eJ + 1) : (eJ >= sJ && (eJ = DJ), FJ.nextId = eJ + 1);
            let XJ = cJ.highByte = eJ >= 96 && hJ ? eJ - 96 >> 5 : -1;
            JJ[gc] = eJ, JJ.__keys__ = cJ, FJ[eJ - 64] = cJ, eJ < DJ ? (cJ.isShared = !0, FJ.sharedLength = eJ - 63, ZJ = !0, XJ >= 0 ? (Kc[bc++] = 96 + (31 & eJ), Kc[bc++] = XJ) : Kc[bc++] = eJ) : (XJ >= 0 ? (Kc[bc++] = 213, Kc[bc++] = 114, Kc[bc++] = 96 + (31 & eJ), Kc[bc++] = XJ) : (Kc[bc++] = 212, Kc[bc++] = 114, Kc[bc++] = eJ), UJ && (GJ += fJ * UJ), nJ.length >= YJ && (nJ.shift()[gc] = 0), nJ.push(JJ), vJ(cJ))
          },
          SJ = (JJ, ZJ, FJ, UJ) => {
            let eJ = Kc,
              XJ = bc,
              AJ = Ic,
              qJ = cJ;
            Kc = yc, bc = 0, cJ = 0, Kc || (yc = Kc = new Qc(8192)), Ic = Kc.length - 10, yJ(JJ, ZJ, UJ), yc = Kc;
            let jJ = bc;
            if (Kc = eJ, bc = XJ, Ic = AJ, cJ = qJ, jJ > 1) {
              let JJ = bc + jJ - 1;
              JJ > Ic && KJ(JJ);
              let ZJ = FJ + cJ;
              Kc.copyWithin(ZJ + jJ, ZJ + 1, bc), Kc.set(yc.slice(0, jJ), ZJ), bc = JJ
            } else Kc[FJ + cJ] = yc[0]
          },
          IJ = JJ => {
            let UJ = Mc(JJ, Kc, cJ, bc, FJ, KJ, ((JJ, cJ, FJ) => {
              if (FJ) return ZJ = !0;
              bc = cJ;
              let UJ = Kc;
              return vJ(JJ), xJ(), UJ !== Kc ? {
                position: bc,
                targetView: Sc,
                target: Kc
              } : bc
            }), this);
            if (0 === UJ) return VJ(JJ);
            bc = UJ
          }
      }
      useBuffer(JJ) {
        Kc = JJ, Sc = Kc.dataView || (Kc.dataView = new DataView(Kc.buffer, Kc.byteOffset, Kc.byteLength)), bc = 0
      }
      set position(JJ) {
        bc = JJ
      }
      get position() {
        return bc
      }
      set buffer(JJ) {
        Kc = JJ
      }
      get buffer() {
        return Kc
      }
      clearSharedData() {
        this.structures && (this.structures = []), this.typedStructs && (this.typedStructs = [])
      }
    }

    function Pc(JJ, cJ, ZJ, FJ) {
      let UJ = JJ.byteLength;
      if (UJ + 1 < 256) {
        var {
          target: eJ,
          position: XJ
        } = ZJ(4 + UJ);
        eJ[XJ++] = 199, eJ[XJ++] = UJ + 1
      } else if (UJ + 1 < 65536) {
        var {
          target: eJ,
          position: XJ
        } = ZJ(5 + UJ);
        eJ[XJ++] = 200, eJ[XJ++] = UJ + 1 >> 8, eJ[XJ++] = UJ + 1 & 255
      } else {
        var {
          target: eJ,
          position: XJ,
          targetView: AJ
        } = ZJ(7 + UJ);
        eJ[XJ++] = 201, AJ.setUint32(XJ, UJ + 1), XJ += 4
      }
      eJ[XJ++] = 116, eJ[XJ++] = cJ, JJ.buffer || (JJ = new Uint8Array(JJ)), eJ.set(new Uint8Array(JJ.buffer, JJ.byteOffset, JJ.byteLength), XJ)
    }

    function kc(JJ, cJ) {
      let ZJ = JJ.byteLength;
      var FJ, UJ;
      if (ZJ < 256) {
        var {
          target: FJ,
          position: UJ
        } = cJ(ZJ + 2);
        FJ[UJ++] = 196, FJ[UJ++] = ZJ
      } else if (ZJ < 65536) {
        var {
          target: FJ,
          position: UJ
        } = cJ(ZJ + 3);
        FJ[UJ++] = 197, FJ[UJ++] = ZJ >> 8, FJ[UJ++] = 255 & ZJ
      } else {
        var {
          target: FJ,
          position: UJ,
          targetView: eJ
        } = cJ(ZJ + 5);
        FJ[UJ++] = 198, eJ.setUint32(UJ, ZJ), UJ += 4
      }
      FJ.set(JJ, UJ)
    }

    function pc(JJ, cJ, ZJ, FJ) {
      let UJ = JJ.length;
      switch (UJ) {
        case 1:
          cJ[ZJ++] = 212;
          break;
        case 2:
          cJ[ZJ++] = 213;
          break;
        case 4:
          cJ[ZJ++] = 214;
          break;
        case 8:
          cJ[ZJ++] = 215;
          break;
        case 16:
          cJ[ZJ++] = 216;
          break;
        default:
          UJ < 256 ? (cJ[ZJ++] = 199, cJ[ZJ++] = UJ) : UJ < 65536 ? (cJ[ZJ++] = 200, cJ[ZJ++] = UJ >> 8, cJ[ZJ++] = 255 & UJ) : (cJ[ZJ++] = 201, cJ[ZJ++] = UJ >> 24, cJ[ZJ++] = UJ >> 16 & 255, cJ[ZJ++] = UJ >> 8 & 255, cJ[ZJ++] = 255 & UJ)
      }
      return cJ[ZJ++] = FJ, cJ.set(JJ, ZJ), ZJ += UJ
    }

    function dc(JJ, cJ, ZJ) {
      if (wc.length > 0) {
        Sc.setUint32(wc.position + JJ, bc + ZJ - wc.position - JJ), wc.stringsPosition = bc - JJ;
        let FJ = wc;
        wc = null, cJ(FJ[0]), cJ(FJ[1])
      }
    }

    function zc(JJ) {
      if (JJ.Class) {
        if (!JJ.pack && !JJ.write) throw new Error("Extension has no pack or write function");
        if (JJ.pack && !JJ.type) throw new Error("Extension has no type (numeric code to identify the extension)");
        fc.unshift(JJ.Class), Gc.unshift(JJ)
      }! function(JJ) {
        JJ.unpack ? rJ[JJ.type] = JJ.unpack : rJ[JJ.type] = JJ
      }(JJ)
    }

    function Nc(JJ, cJ) {
      return JJ.isCompatible = JJ => {
        let ZJ = !JJ || (cJ.lastNamedStructuresLength || 0) === JJ.length;
        return ZJ || cJ._mergeStructures(JJ), ZJ
      }, JJ
    }
    fc = [Date, Set, Error, RegExp, ArrayBuffer, Object.getPrototypeOf(Uint8Array.prototype).constructor, mJ], Gc = [{
      pack(JJ, cJ, ZJ) {
        let FJ = JJ.getTime() / 1e3;
        if ((this.useTimestamp32 || 0 === JJ.getMilliseconds()) && FJ >= 0 && FJ < 4294967296) {
          let {
            target: JJ,
            targetView: ZJ,
            position: UJ
          } = cJ(6);
          JJ[UJ++] = 214, JJ[UJ++] = 255, ZJ.setUint32(UJ, FJ)
        } else if (FJ > 0 && FJ < 4294967296) {
          let {
            target: ZJ,
            targetView: UJ,
            position: eJ
          } = cJ(10);
          ZJ[eJ++] = 215, ZJ[eJ++] = 255, UJ.setUint32(eJ, 4e6 * JJ.getMilliseconds() + (FJ / 1e3 / 4294967296 | 0)), UJ.setUint32(eJ + 4, FJ)
        } else if (isNaN(FJ)) {
          if (this.onInvalidDate) return cJ(0), ZJ(this.onInvalidDate());
          let {
            target: JJ,
            targetView: FJ,
            position: UJ
          } = cJ(3);
          JJ[UJ++] = 212, JJ[UJ++] = 255, JJ[UJ++] = 255
        } else {
          let {
            target: ZJ,
            targetView: UJ,
            position: eJ
          } = cJ(15);
          ZJ[eJ++] = 199, ZJ[eJ++] = 12, ZJ[eJ++] = 255, UJ.setUint32(eJ, 1e6 * JJ.getMilliseconds()), UJ.setBigInt64(eJ + 4, BigInt(Math.floor(FJ)))
        }
      }
    }, {
      pack(JJ, cJ, ZJ) {
        if (this.setAsEmptyObject) return cJ(0), ZJ({});
        let FJ = Array.from(JJ),
          {
            target: UJ,
            position: eJ
          } = cJ(this.moreTypes ? 3 : 0);
        this.moreTypes && (UJ[eJ++] = 212, UJ[eJ++] = 115, UJ[eJ++] = 0), ZJ(FJ)
      }
    }, {
      pack(JJ, cJ, ZJ) {
        let {
          target: FJ,
          position: UJ
        } = cJ(this.moreTypes ? 3 : 0);
        this.moreTypes && (FJ[UJ++] = 212, FJ[UJ++] = 101, FJ[UJ++] = 0), ZJ([JJ.name, JJ.message, JJ.cause])
      }
    }, {
      pack(JJ, cJ, ZJ) {
        let {
          target: FJ,
          position: UJ
        } = cJ(this.moreTypes ? 3 : 0);
        this.moreTypes && (FJ[UJ++] = 212, FJ[UJ++] = 120, FJ[UJ++] = 0), ZJ([JJ.source, JJ.flags])
      }
    }, {
      pack(JJ, cJ) {
        this.moreTypes ? Pc(JJ, 16, cJ) : kc(mc ? Buffer.from(JJ) : new Uint8Array(JJ), cJ)
      }
    }, {
      pack(JJ, cJ) {
        let ZJ = JJ.constructor;
        ZJ !== Ec && this.moreTypes ? Pc(JJ, Zc.indexOf(ZJ.name), cJ) : kc(JJ, cJ)
      }
    }, {
      pack(JJ, cJ) {
        let {
          target: ZJ,
          position: FJ
        } = cJ(1);
        ZJ[FJ] = 193
      }
    }];
    let Oc = new Hc({
      useRecords: !1
    });
    const Tc = Oc.pack,
      Cc = Oc.pack,
      uc = Hc,
      {
        NEVER: ic,
        ALWAYS: Rc,
        DECIMAL_ROUND: Lc,
        DECIMAL_FIT: ac
      } = sc,
      Bc = 512,
      tc = 1024,
      oc = 2048;
    const lc = function(JJ) {
        let cJ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        if (!JJ || "object" !== typeof JJ) throw new Error("first argument must be an Iterable, Async Iterable, Iterator, Async Iterator, or a promise");
        const ZJ = new IJ(cJ);
        let FJ;
        const UJ = JJ => {
          let cJ;
          FJ && (JJ = Buffer.concat([FJ, JJ]), FJ = void 0);
          try {
            cJ = ZJ.unpackMultiple(JJ)
          } catch (UJ) {
            if (!UJ.incomplete) throw UJ;
            FJ = JJ.slice(UJ.lastPosition), cJ = UJ.values
          }
          return cJ
        };
        return "function" === typeof JJ[Symbol.iterator] ? function*() {
          for (const cJ of JJ) yield* UJ(cJ)
        }() : "function" === typeof JJ[Symbol.asyncIterator] ? async function*() {
          for await (const cJ of JJ) yield* UJ(cJ)
        }(): void 0
      },
      JZ = function(JJ) {
        let cJ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        if (JJ && "object" === typeof JJ) {
          if ("function" === typeof JJ[Symbol.iterator]) return function*(JJ, cJ) {
            const ZJ = new Hc(cJ);
            for (const FJ of JJ) yield ZJ.pack(FJ)
          }(JJ, cJ);
          if ("function" === typeof JJ.then || "function" === typeof JJ[Symbol.asyncIterator]) return async function*(JJ, cJ) {
            const ZJ = new Hc(cJ);
            for await (const FJ of JJ) yield ZJ.pack(FJ)
          }(JJ, cJ);
          throw new Error("first argument must be an Iterable, Async Iterable, Iterator, Async Iterator, or a Promise")
        }
        throw new Error("first argument must be an Iterable, Async Iterable, or a Promise for an Async Iterable")
      },
      cZ = !1,
      ZZ = !0
  },
  8377: (JJ, cJ, ZJ) => {
    ZJ.r(cJ), ZJ.d(cJ, {
      $changes: () => GJ,
      $childType: () => fJ,
      $decoder: () => YJ,
      $deleteByIndex: () => sJ,
      $encoder: () => jJ,
      $filter: () => hJ,
      $getByIndex: () => DJ,
      $numFields: () => SJ,
      $refId: () => AJ,
      $track: () => qJ,
      $values: () => QJ,
      ArraySchema: () => ZF,
      Callbacks: () => ZU,
      ChangeTree: () => bZ,
      CollectionSchema: () => eF,
      Decoder: () => LF,
      Encoder: () => CF,
      FieldBuilder: () => qF,
      MapSchema: () => UF,
      Metadata: () => Lc,
      OPERATION: () => UJ,
      Reflection: () => oF,
      ReflectionField: () => BF,
      ReflectionType: () => tF,
      Root: () => wF,
      Schema: () => MF,
      SetSchema: () => XF,
      StateCallbackStrategy: () => cU,
      StateView: () => kF,
      StreamSchema: () => AF,
      TypeContext: () => Nc,
      createPool: () => UU,
      decode: () => vc,
      decodeKeyValueOperation: () => BZ,
      decodeSchemaOperation: () => aZ,
      defineCustomTypes: () => Vc,
      defineTypes: () => yF,
      deprecated: () => VF,
      dumpChanges: () => IF,
      encode: () => cc,
      encodeArray: () => dZ,
      encodeIndexedEntry: () => kZ,
      encodeKeyValueOperation: () => pZ,
      encodeMapEntry: () => PZ,
      encodeSchemaOperation: () => HZ,
      Yn: () => GF,
      fullStateOnly: () => vF,
      getDecoderStateCallbacks: () => lF,
      getEncodeDescriptor: () => JZ,
      getRawChangesCallback: () => JU,
      isBuilder: () => jF,
      patchOnly: () => rF,
      registerType: () => Ec,
      schema: () => SF,
      t: () => sF,
      type: () => mF,
      unreliable: () => xF,
      view: () => fF
    });
    const FJ = 255;
    var UJ;

    function eJ(JJ) {
      Object.defineProperty(JJ, Symbol.metadata, {
        value: void 0,
        writable: !0,
        configurable: !0,
        enumerable: !1
      })
    }! function(JJ) {
      JJ[JJ.ADD = 128] = "ADD", JJ[JJ.REPLACE = 0] = "REPLACE", JJ[JJ.DELETE = 64] = "DELETE", JJ[JJ.DELETE_AND_MOVE = 96] = "DELETE_AND_MOVE", JJ[JJ.MOVE_AND_ADD = 160] = "MOVE_AND_ADD", JJ[JJ.DELETE_AND_ADD = 192] = "DELETE_AND_ADD", JJ[JJ.CLEAR = 10] = "CLEAR", JJ[JJ.REVERSE = 15] = "REVERSE", JJ[JJ.MOVE = 32] = "MOVE", JJ[JJ.DELETE_BY_REFID = 33] = "DELETE_BY_REFID", JJ[JJ.ADD_BY_REFID = 129] = "ADD_BY_REFID"
    }(UJ || (UJ = {})), Symbol.metadata ??= Symbol.for("Symbol.metadata");
    const XJ = "undefined" !== typeof globalThis ? globalThis : "undefined" !== typeof global ? global : "undefined" !== typeof self ? self : "undefined" !== typeof window ? window : {};
    if ("function" === typeof Symbol && "function" !== typeof Symbol.for) {
      const JJ = "colyseus.symbolRegistry",
        cJ = XJ[JJ] || (XJ[JJ] = Object.create(null));
      Symbol.for = function(JJ) {
        return cJ[JJ] || (cJ[JJ] = Symbol(JJ))
      }, Symbol.keyFor = function(JJ) {
        for (const ZJ in cJ)
          if (cJ[ZJ] === JJ) return ZJ
      }
    }
    const AJ = Symbol.for("$refId"),
      qJ = "~track",
      jJ = "~encoder",
      YJ = "~decoder",
      hJ = "~filter",
      DJ = "~getByIndex",
      sJ = "~deleteByIndex",
      nJ = "~resyncPrune",
      GJ = Symbol.for("$changes"),
      fJ = Symbol.for("$childType"),
      xJ = Symbol.for("$proxyTarget"),
      rJ = "~onEncodeEnd",
      vJ = "~reset",
      mJ = "~onDecodeEnd",
      QJ = Symbol.for("$values"),
      EJ = "~builder",
      VJ = "~descriptors",
      KJ = "~__encodeDescriptor",
      yJ = "~encoders",
      SJ = "~__numFields",
      IJ = "~__refTypeFieldIndexes",
      MJ = "~__viewFieldIndexes",
      bJ = "$__fieldIndexesByViewTag",
      wJ = "~__unreliableFieldIndexes",
      WJ = "~__patchOnlyFieldIndexes",
      gJ = "~__fullSyncSkipIndexes",
      HJ = "~__fullStateOnlyFieldIndexes",
      PJ = "~__streamFieldIndexes",
      kJ = "~__streamPriorities";
    let pJ;
    try {
      pJ = new TextEncoder
    } catch (eU) {}
    const dJ = new ArrayBuffer(8),
      zJ = new Int32Array(dJ),
      NJ = new Float32Array(dJ),
      OJ = new Float64Array(dJ),
      TJ = new BigInt64Array(dJ),
      CJ = "undefined" !== typeof Buffer && Buffer.byteLength ? Buffer.byteLength : function(JJ, cJ) {
        for (var ZJ = 0, FJ = 0, UJ = 0, eJ = JJ.length; UJ < eJ; UJ++)(ZJ = JJ.charCodeAt(UJ)) < 128 ? FJ += 1 : ZJ < 2048 ? FJ += 2 : ZJ < 55296 || ZJ >= 57344 ? FJ += 3 : (UJ++, FJ += 4);
        return FJ
      };

    function uJ(JJ, cJ, ZJ) {
      for (var FJ = 0, UJ = 0, eJ = cJ.length; UJ < eJ; UJ++)(FJ = cJ.charCodeAt(UJ)) < 128 ? JJ[ZJ.offset++] = FJ : FJ < 2048 ? (JJ[ZJ.offset] = 192 | FJ >> 6, JJ[ZJ.offset + 1] = 128 | 63 & FJ, ZJ.offset += 2) : FJ < 55296 || FJ >= 57344 ? (JJ[ZJ.offset] = 224 | FJ >> 12, JJ[ZJ.offset + 1] = 128 | FJ >> 6 & 63, JJ[ZJ.offset + 2] = 128 | 63 & FJ, ZJ.offset += 3) : (UJ++, FJ = 65536 + ((1023 & FJ) << 10 | 1023 & cJ.charCodeAt(UJ)), JJ[ZJ.offset] = 240 | FJ >> 18, JJ[ZJ.offset + 1] = 128 | FJ >> 12 & 63, JJ[ZJ.offset + 2] = 128 | FJ >> 6 & 63, JJ[ZJ.offset + 3] = 128 | 63 & FJ, ZJ.offset += 4)
    }

    function iJ(JJ, cJ, ZJ) {
      JJ[ZJ.offset++] = 255 & cJ
    }

    function RJ(JJ, cJ, ZJ) {
      JJ[ZJ.offset++] = 255 & cJ, JJ[ZJ.offset++] = cJ >> 8 & 255
    }

    function LJ(JJ, cJ, ZJ) {
      JJ[ZJ.offset++] = 255 & cJ, JJ[ZJ.offset++] = cJ >> 8 & 255
    }

    function aJ(JJ, cJ, ZJ) {
      JJ[ZJ.offset++] = 255 & cJ, JJ[ZJ.offset++] = cJ >> 8 & 255, JJ[ZJ.offset++] = cJ >> 16 & 255, JJ[ZJ.offset++] = cJ >> 24 & 255
    }

    function BJ(JJ, cJ, ZJ) {
      const FJ = cJ >> 24,
        UJ = cJ >> 16,
        eJ = cJ >> 8,
        XJ = cJ;
      JJ[ZJ.offset++] = 255 & XJ, JJ[ZJ.offset++] = 255 & eJ, JJ[ZJ.offset++] = 255 & UJ, JJ[ZJ.offset++] = 255 & FJ
    }

    function tJ(JJ, cJ, ZJ) {
      const FJ = Math.floor(cJ / Math.pow(2, 32));
      BJ(JJ, cJ >>> 0, ZJ), BJ(JJ, FJ, ZJ)
    }

    function oJ(JJ, cJ, ZJ) {
      const FJ = cJ / Math.pow(2, 32) | 0;
      BJ(JJ, cJ >>> 0, ZJ), BJ(JJ, FJ, ZJ)
    }

    function lJ(JJ, cJ, ZJ) {
      NJ[0] = cJ, aJ(JJ, zJ[0], ZJ)
    }

    function Jc(JJ, cJ, ZJ) {
      OJ[0] = cJ, aJ(JJ, zJ[0], ZJ), aJ(JJ, zJ[1], ZJ)
    }
    const cc = {
        int8: iJ,
        uint8: function(JJ, cJ, ZJ) {
          JJ[ZJ.offset++] = 255 & cJ
        },
        int16: RJ,
        uint16: LJ,
        int32: aJ,
        uint32: BJ,
        int64: tJ,
        uint64: oJ,
        bigint64: function(JJ, cJ, ZJ) {
          TJ[0] = BigInt.asIntN(64, cJ), aJ(JJ, zJ[0], ZJ), aJ(JJ, zJ[1], ZJ)
        },
        biguint64: function(JJ, cJ, ZJ) {
          TJ[0] = BigInt.asIntN(64, cJ), aJ(JJ, zJ[0], ZJ), aJ(JJ, zJ[1], ZJ)
        },
        float32: lJ,
        float64: Jc,
        boolean: function(JJ, cJ, ZJ) {
          JJ[ZJ.offset++] = cJ ? 1 : 0
        },
        string: function(JJ, cJ, ZJ) {
          cJ || (cJ = "");
          let FJ = CJ(cJ, "utf8"),
            UJ = 0;
          if (FJ < 32) JJ[ZJ.offset++] = 160 | FJ, UJ = 1;
          else if (FJ < 256) JJ[ZJ.offset++] = 217, JJ[ZJ.offset++] = FJ, UJ = 2;
          else if (FJ < 65536) JJ[ZJ.offset++] = 218, LJ(JJ, FJ, ZJ), UJ = 3;
          else {
            if (!(FJ < 4294967296)) throw new Error("String too long");
            JJ[ZJ.offset++] = 219, BJ(JJ, FJ, ZJ), UJ = 5
          }
          return uJ(JJ, cJ, ZJ), UJ + FJ
        },
        number: function JJ(cJ, ZJ, FJ) {
          return isNaN(ZJ) ? JJ(cJ, 0, FJ) : isFinite(ZJ) ? ZJ !== (0 | ZJ) ? Math.abs(ZJ) <= 34028235e31 && (NJ[0] = ZJ, Math.abs(Math.abs(NJ[0]) - Math.abs(ZJ)) < 1e-4) ? (cJ[FJ.offset++] = 202, lJ(cJ, ZJ, FJ), 5) : (cJ[FJ.offset++] = 203, Jc(cJ, ZJ, FJ), 9) : ZJ >= 0 ? ZJ < 128 ? (cJ[FJ.offset++] = 255 & ZJ, 1) : ZJ < 256 ? (cJ[FJ.offset++] = 204, cJ[FJ.offset++] = 255 & ZJ, 2) : ZJ < 65536 ? (cJ[FJ.offset++] = 205, LJ(cJ, ZJ, FJ), 3) : ZJ < 4294967296 ? (cJ[FJ.offset++] = 206, BJ(cJ, ZJ, FJ), 5) : (cJ[FJ.offset++] = 207, oJ(cJ, ZJ, FJ), 9) : ZJ >= -32 ? (cJ[FJ.offset++] = 224 | ZJ + 32, 1) : ZJ >= -128 ? (cJ[FJ.offset++] = 208, iJ(cJ, ZJ, FJ), 2) : ZJ >= -32768 ? (cJ[FJ.offset++] = 209, RJ(cJ, ZJ, FJ), 3) : ZJ >= -2147483648 ? (cJ[FJ.offset++] = 210, aJ(cJ, ZJ, FJ), 5) : (cJ[FJ.offset++] = 211, tJ(cJ, ZJ, FJ), 9) : JJ(cJ, ZJ > 0 ? Number.MAX_SAFE_INTEGER : -Number.MAX_SAFE_INTEGER, FJ)
        },
        utf8Write: uJ,
        utf8Length: CJ
      },
      Zc = new ArrayBuffer(8),
      Fc = new Int32Array(Zc),
      Uc = new Float32Array(Zc),
      ec = new Float64Array(Zc),
      Xc = new BigUint64Array(Zc),
      Ac = new BigInt64Array(Zc);

    function qc(JJ, cJ, ZJ) {
      ZJ > JJ.length - cJ.offset && (ZJ = JJ.length - cJ.offset);
      for (var FJ = "", UJ = 0, eJ = cJ.offset, XJ = cJ.offset + ZJ; eJ < XJ; eJ++) {
        var AJ = JJ[eJ];
        if (0 !== (128 & AJ))
          if (192 !== (224 & AJ))
            if (224 !== (240 & AJ)) {
              if (240 !== (248 & AJ)) {
                console.error("decode.utf8Read(): Invalid byte " + AJ + " at offset " + eJ + ". Skip to end of string: " + (cJ.offset + ZJ));
                break
              }(UJ = (7 & AJ) << 18 | (63 & JJ[++eJ]) << 12 | (63 & JJ[++eJ]) << 6 | 63 & JJ[++eJ]) >= 65536 ? (UJ -= 65536, FJ += String.fromCharCode(55296 + (UJ >>> 10), 56320 + (1023 & UJ))) : FJ += String.fromCharCode(UJ)
            } else FJ += String.fromCharCode((15 & AJ) << 12 | (63 & JJ[++eJ]) << 6 | 63 & JJ[++eJ]);
        else FJ += String.fromCharCode((31 & AJ) << 6 | 63 & JJ[++eJ]);
        else FJ += String.fromCharCode(AJ)
      }
      return cJ.offset += ZJ, FJ
    }

    function jc(JJ, cJ) {
      return Yc(JJ, cJ) << 24 >> 24
    }

    function Yc(JJ, cJ) {
      return JJ[cJ.offset++]
    }

    function hc(JJ, cJ) {
      return Dc(JJ, cJ) << 16 >> 16
    }

    function Dc(JJ, cJ) {
      return JJ[cJ.offset++] | JJ[cJ.offset++] << 8
    }

    function sc(JJ, cJ) {
      return JJ[cJ.offset++] | JJ[cJ.offset++] << 8 | JJ[cJ.offset++] << 16 | JJ[cJ.offset++] << 24
    }

    function nc(JJ, cJ) {
      return sc(JJ, cJ) >>> 0
    }

    function Gc(JJ, cJ) {
      return Fc[0] = sc(JJ, cJ), Uc[0]
    }

    function fc(JJ, cJ) {
      return Fc[0] = sc(JJ, cJ), Fc[1] = sc(JJ, cJ), ec[0]
    }

    function xc(JJ, cJ) {
      const ZJ = nc(JJ, cJ);
      return sc(JJ, cJ) * Math.pow(2, 32) + ZJ
    }

    function rc(JJ, cJ) {
      const ZJ = nc(JJ, cJ);
      return nc(JJ, cJ) * Math.pow(2, 32) + ZJ
    }
    const vc = {
        utf8Read: qc,
        int8: jc,
        uint8: Yc,
        int16: hc,
        uint16: Dc,
        int32: sc,
        uint32: nc,
        float32: Gc,
        float64: fc,
        int64: xc,
        uint64: rc,
        bigint64: function(JJ, cJ) {
          return Fc[0] = sc(JJ, cJ), Fc[1] = sc(JJ, cJ), Ac[0]
        },
        biguint64: function(JJ, cJ) {
          return Fc[0] = sc(JJ, cJ), Fc[1] = sc(JJ, cJ), Xc[0]
        },
        boolean: function(JJ, cJ) {
          return Yc(JJ, cJ) > 0
        },
        string: function(JJ, cJ) {
          const ZJ = JJ[cJ.offset++];
          let FJ;
          return ZJ < 192 ? FJ = 31 & ZJ : 217 === ZJ ? FJ = Yc(JJ, cJ) : 218 === ZJ ? FJ = Dc(JJ, cJ) : 219 === ZJ && (FJ = nc(JJ, cJ)), qc(JJ, cJ, FJ)
        },
        number: function(JJ, cJ) {
          const ZJ = JJ[cJ.offset++];
          return ZJ < 128 ? ZJ : 202 === ZJ ? Gc(JJ, cJ) : 203 === ZJ ? fc(JJ, cJ) : 204 === ZJ ? Yc(JJ, cJ) : 205 === ZJ ? Dc(JJ, cJ) : 206 === ZJ ? nc(JJ, cJ) : 207 === ZJ ? rc(JJ, cJ) : 208 === ZJ ? jc(JJ, cJ) : 209 === ZJ ? hc(JJ, cJ) : 210 === ZJ ? sc(JJ, cJ) : 211 === ZJ ? xc(JJ, cJ) : ZJ > 223 ? -1 * (255 - ZJ + 1) : void 0
        },
        stringCheck: function(JJ, cJ) {
          const ZJ = JJ[cJ.offset];
          return ZJ < 192 && ZJ > 160 || 217 === ZJ || 218 === ZJ || 219 === ZJ
        }
      },
      mc = {},
      Qc = new Map;

    function Ec(JJ, cJ) {
      cJ.constructor && (Object.prototype.hasOwnProperty.call(cJ, "constructor") && null == cJ.constructor[Symbol.metadata] && eJ(cJ.constructor), Qc.set(cJ.constructor, JJ), mc[JJ] = cJ), cJ.encode && (cc[JJ] = cJ.encode), cJ.decode && (vc[JJ] = cJ.decode)
    }

    function Vc(JJ) {
      for (const cJ in JJ) Ec(cJ, JJ[cJ]);
      return JJ => mF(JJ)
    }
    const Kc = "ArraySchema does not support streaming \u2014 positional ops (splice / unshift / reverse) shift subsequent indexes, so holding ADDs back for a later tick under `maxPerTick` would desync the decoder. Use `t.stream(X)` (stable monotonic positions) or `t.map(X).stream()` (stable keys) instead.";

    function yc() {
      return {
        pendingByView: new Map,
        sentByView: new Map,
        broadcastPending: new Set,
        sentBroadcast: new Set,
        broadcastDeletes: new Set,
        maxPerTick: 32
      }
    }

    function Sc(JJ) {
      return JJ._stream ??= yc()
    }

    function Ic(JJ, cJ, ZJ) {
      0 === cJ.activeViews.size && Sc(JJ).broadcastPending.add(ZJ)
    }

    function Mc(JJ, cJ, ZJ, FJ) {
      const eJ = JJ._stream;
      if (void 0 === eJ) return !0;
      let XJ = !1;
      return eJ.broadcastPending.delete(FJ) ? XJ = !0 : eJ.sentBroadcast.delete(FJ) && eJ.broadcastDeletes.add(FJ), cJ.forEachActiveView((JJ => {
        const cJ = eJ.pendingByView.get(JJ.id);
        if (cJ?.has(FJ)) return cJ.delete(FJ), void(XJ = !0);
        const AJ = eJ.sentByView.get(JJ.id);
        if (AJ?.has(FJ)) {
          AJ.delete(FJ);
          let cJ = JJ.changes.get(ZJ);
          void 0 === cJ && (cJ = new Map, JJ.changes.set(ZJ, cJ)), cJ.set(FJ, UJ.DELETE)
        }
      })), XJ
    }

    function bc(JJ, cJ) {
      const ZJ = JJ._stream?.pendingByView;
      if (void 0 === ZJ) return !1;
      for (const [FJ, UJ] of ZJ)
        if (UJ.size > 0 && void 0 !== cJ.activeViews.get(FJ)?.deref()) return !0;
      return !1
    }

    function wc(JJ) {
      const cJ = JJ._stream;
      return void 0 !== cJ && (cJ.broadcastPending.size > 0 || cJ.broadcastDeletes.size > 0)
    }

    function Wc(JJ, cJ, ZJ) {
      const FJ = Sc(JJ);
      let UJ = FJ.pendingByView.get(cJ);
      void 0 === UJ && (UJ = new Set, FJ.pendingByView.set(cJ, UJ)), UJ.add(ZJ)
    }

    function gc(JJ, cJ) {
      const ZJ = JJ._stream;
      void 0 !== ZJ && (ZJ.pendingByView.delete(cJ), ZJ.sentByView.delete(cJ), ZJ.priorityByView?.delete(cJ))
    }
    const Hc = {
      8: "uint8",
      16: "uint16",
      32: "uint32"
    };

    function Pc(JJ) {
      if (null == JJ || "object" !== typeof JJ) throw new Error("t.quantized(): options object with { min, max } is required.");
      const {
        min: cJ,
        max: ZJ
      } = JJ;
      if ("number" !== typeof cJ || "number" !== typeof ZJ || !(ZJ > cJ) || !Number.isFinite(cJ) || !Number.isFinite(ZJ)) throw new Error(`t.quantized(): require finite min < max (got min=${cJ}, max=${ZJ}).`);
      const FJ = JJ.bits ?? 16;
      if (8 !== FJ && 16 !== FJ && 32 !== FJ) throw new Error(`t.quantized(): bits must be 8, 16 or 32 (got ${FJ}).`);
      const UJ = JJ.mode ?? "clamp";
      if ("clamp" !== UJ && "wrap" !== UJ) throw new Error(`t.quantized(): mode must be "clamp" or "wrap" (got ${JSON.stringify(UJ)}).`);
      const eJ = "wrap" === UJ,
        XJ = Math.pow(2, FJ);
      return {
        min: cJ,
        max: ZJ,
        bits: FJ,
        wrap: eJ,
        wire: Hc[FJ],
        range: ZJ - cJ,
        span: eJ ? XJ : cJ === -ZJ ? XJ - 2 : XJ - 1
      }
    }

    function kc(JJ) {
      return null !== JJ && "object" === typeof JJ && void 0 !== JJ.quantized
    }

    function pc(JJ, cJ) {
      if (JJ.wrap) {
        if (!Number.isFinite(cJ)) return 0;
        const ZJ = JJ.range;
        let FJ = (cJ - JJ.min) % ZJ;
        FJ < 0 && (FJ += ZJ);
        const UJ = JJ.span;
        return Math.floor(FJ / ZJ * UJ + .5) % UJ
      }
      if (cJ !== cJ) return 0;
      const ZJ = cJ < JJ.min ? JJ.min : cJ > JJ.max ? JJ.max : cJ;
      return Math.floor((ZJ - JJ.min) / JJ.range * JJ.span + .5)
    }

    function dc(JJ, cJ) {
      return JJ.min + cJ / JJ.span * JJ.range
    }

    function zc(JJ) {
      const cJ = cc[JJ.wire];
      return (ZJ, FJ, UJ) => cJ(ZJ, pc(JJ, FJ), UJ)
    }
    class Nc {
      types = {};
      schemas = new Map;
      hasFilters = !1;
      static inheritedTypes = new WeakMap;
      static cachedContexts = new WeakMap;
      static register(JJ) {
        const cJ = Object.getPrototypeOf(JJ);
        if (cJ !== MF) {
          let ZJ = Nc.inheritedTypes.get(cJ);
          ZJ || (ZJ = new Set, Nc.inheritedTypes.set(cJ, ZJ)), ZJ.add(JJ)
        }
      }
      static cache(JJ) {
        let cJ = Nc.cachedContexts.get(JJ);
        return cJ || (cJ = new Nc(JJ), Nc.cachedContexts.set(JJ, cJ)), cJ
      }
      constructor(JJ) {
        JJ && this.discoverTypes(JJ)
      }
      has(JJ) {
        return this.schemas.has(JJ)
      }
      get(JJ) {
        return this.types[JJ]
      }
      add(JJ) {
        let cJ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.schemas.size;
        return !this.schemas.has(JJ) && (this.types[cJ] = JJ, null == JJ[Symbol.metadata] && Lc.initialize(JJ), this.schemas.set(JJ, cJ), !0)
      }
      getTypeId(JJ) {
        return this.schemas.get(JJ)
      }
      discoverTypes(JJ) {
        if (!this.add(JJ)) return;
        Nc.inheritedTypes.get(JJ)?.forEach((JJ => {
          this.discoverTypes(JJ)
        }));
        let cJ = JJ;
        for (;
          (cJ = Object.getPrototypeOf(cJ)) && cJ !== MF && cJ !== Function.prototype;) this.discoverTypes(cJ);
        const ZJ = JJ[Symbol.metadata];
        (ZJ[MJ] || ZJ[PJ]) && (this.hasFilters = !0);
        for (const FJ in ZJ) {
          const JJ = ZJ[FJ].type;
          if ("string" !== typeof JJ && !kc(JJ))
            if ("function" === typeof JJ) this.discoverTypes(JJ);
            else {
              const cJ = Object.values(JJ)[0];
              if ("string" === typeof cJ) continue;
              this.discoverTypes(cJ)
            }
        }
      }
      debug() {
        return `TypeContext ->\n\tSchema types: ${this.schemas.size}\n\thasFilters: ${this.hasFilters}`
      }
    }

    function Oc(JJ) {
      const cJ = Cc(JJ);
      return cJ ? {
        complexTypeKlass: mc[cJ],
        childType: JJ[cJ]
      } : {
        complexTypeKlass: !1,
        childType: JJ
      }
    }

    function Tc(JJ, cJ) {
      const ZJ = uc(JJ),
        FJ = Cc(ZJ),
        UJ = FJ && Cc(ZJ[FJ]);
      if (UJ) throw new Error(`${cJ?`${cJ}: `:""}@colyseus/schema: nested collections are not supported ("${FJ}" of "${UJ}"). Collections can only hold primitive types or Schema classes, wrap the inner ${UJ} in a Schema class.`);
      return ZJ
    }

    function Cc(JJ) {
      return "object" === typeof JJ && null !== JJ ? Object.keys(JJ).find((JJ => void 0 !== mc[JJ])) : void 0
    }

    function uc(JJ) {
      if ("object" !== typeof JJ || null === JJ) return JJ;
      if (Array.isArray(JJ)) return {
        array: uc(JJ[0])
      };
      const cJ = function(JJ) {
        const cJ = Object.keys(JJ),
          ZJ = cJ.filter((JJ => /\d+/.test(JJ)));
        if (ZJ.length > 0 && ZJ.length === cJ.length / 2 && JJ[JJ[ZJ[0]]] == ZJ[0]) return "number";
        if (cJ.length > 0 && cJ.every((cJ => JJ[cJ] === cJ))) return "string"
      }(JJ);
      if (cJ) return cJ;
      if (kc(JJ)) return "string" === typeof JJ.quantized.wire ? JJ : {
        quantized: Pc(JJ.quantized)
      };
      if (void 0 !== JJ.type) return uc(JJ.type);
      const ZJ = Cc(JJ);
      return ZJ && (JJ[ZJ] = uc(JJ[ZJ])), JJ
    }
    const ic = [IJ, wJ, WJ, gJ, HJ, PJ, yJ];

    function Rc(JJ, cJ, ZJ) {
      JJ[cJ] || Object.defineProperty(JJ, cJ, {
        value: [],
        enumerable: !1,
        configurable: !0,
        writable: !0
      }), JJ[cJ].push(ZJ)
    }
    const Lc = {
        addField(JJ, cJ, ZJ, FJ, UJ) {
          if (cJ >= 63) throw new Error(`Can't define field '${ZJ}'.\nSchema instances may only have up to 63 fields.`);
          JJ[cJ] = Object.assign(JJ[cJ] || {}, {
            type: FJ,
            index: cJ,
            name: ZJ
          }), Object.defineProperty(JJ, VJ, {
            value: JJ[VJ] || {},
            enumerable: !1,
            configurable: !0
          }), JJ[VJ][ZJ] = UJ || {
            value: void 0,
            writable: !0,
            enumerable: !0,
            configurable: !0
          }, Object.defineProperty(JJ, SJ, {
            value: cJ,
            enumerable: !1,
            configurable: !0
          }), Object.defineProperty(JJ, ZJ, {
            value: cJ,
            enumerable: !1,
            configurable: !0
          }), "string" === typeof JJ[cJ].type || kc(JJ[cJ].type) || (void 0 === JJ[IJ] && Object.defineProperty(JJ, IJ, {
            value: [],
            enumerable: !1,
            configurable: !0
          }), JJ[IJ].push(cJ));
          const eJ = JJ[cJ].type;
          if (eJ && "object" === typeof eJ && void 0 !== eJ.stream) {
            if (void 0 !== eJ.array) throw new Error(Kc);
            JJ[cJ].stream = !0, JJ[PJ] || Object.defineProperty(JJ, PJ, {
              value: [],
              enumerable: !1,
              configurable: !0,
              writable: !0
            }), JJ[PJ].includes(cJ) || JJ[PJ].push(cJ);
            const UJ = FJ?.priority;
            "function" === typeof UJ && Lc.setStreamPriority(JJ, ZJ, UJ)
          }
        },
        setTag(JJ, cJ, ZJ) {
          const FJ = JJ[cJ];
          if (JJ[FJ].tag = ZJ, JJ[MJ] || (Object.defineProperty(JJ, MJ, {
              value: [],
              enumerable: !1,
              configurable: !0
            }), Object.defineProperty(JJ, bJ, {
              value: {},
              enumerable: !1,
              configurable: !0
            })), JJ[MJ].push(FJ), ZJ < 0) JJ[bJ][ZJ] || (JJ[bJ][ZJ] = []), JJ[bJ][ZJ].push(FJ);
          else
            for (let UJ = ZJ; UJ > 0; UJ &= UJ - 1) {
              const cJ = UJ & -UJ;
              JJ[bJ][cJ] || (JJ[bJ][cJ] = []), JJ[bJ][cJ].push(FJ)
            }
        },
        setUnreliable(JJ, cJ) {
          const ZJ = JJ[cJ];
          if ("string" !== typeof JJ[ZJ].type) throw new Error(`@unreliable cannot be applied to ref-type field "${cJ}". For ref-type fields, mark each primitive sub-field with @unreliable instead. See README "Limitations and best practices".`);
          JJ[ZJ].unreliable = !0, JJ[wJ] || Object.defineProperty(JJ, wJ, {
            value: [],
            enumerable: !1,
            configurable: !0,
            writable: !0
          }), JJ[wJ].push(ZJ)
        },
        setPatchOnly(JJ, cJ) {
          const ZJ = JJ[cJ];
          if (JJ[ZJ].fullStateOnly) throw new Error(`field "${cJ}" cannot be both patchOnly and fullStateOnly \u2014 those are the only two delivery channels, so the field would never reach a client.`);
          JJ[ZJ].patchOnly = !0, Rc(JJ, WJ, ZJ), Rc(JJ, gJ, ZJ)
        },
        setDeprecated(JJ, cJ) {
          const ZJ = JJ[cJ];
          JJ[ZJ].deprecated = !0, Rc(JJ, gJ, ZJ), Object.defineProperty(JJ, ZJ, {
            value: JJ[ZJ],
            enumerable: !1,
            configurable: !0
          })
        },
        setFullStateOnly(JJ, cJ) {
          const ZJ = JJ[cJ];
          if (JJ[ZJ].patchOnly) throw new Error(`field "${cJ}" cannot be both patchOnly and fullStateOnly \u2014 those are the only two delivery channels, so the field would never reach a client.`);
          JJ[ZJ].fullStateOnly = !0, Rc(JJ, HJ, ZJ)
        },
        setStream(JJ, cJ) {
          const ZJ = JJ[cJ];
          JJ[ZJ].stream = !0, JJ[PJ] || Object.defineProperty(JJ, PJ, {
            value: [],
            enumerable: !1,
            configurable: !0,
            writable: !0
          }), JJ[PJ].push(ZJ)
        },
        setStreamPriority(JJ, cJ, ZJ) {
          const FJ = JJ[cJ];
          JJ[kJ] || Object.defineProperty(JJ, kJ, {
            value: {},
            enumerable: !1,
            configurable: !0,
            writable: !0
          }), JJ[kJ][FJ] = ZJ
        },
        getStreamPriority: (JJ, cJ) => JJ?.[kJ]?.[cJ],
        defineField(JJ, cJ, ZJ, FJ, UJ) {
          const eJ = Tc(UJ, `${JJ.name}.${FJ}`),
            {
              complexTypeKlass: XJ,
              childType: AJ
            } = Oc(eJ);
          Lc.addField(cJ, ZJ, FJ, eJ, EF(FJ, ZJ, AJ, XJ)), cJ[VJ][FJ] && Object.defineProperty(JJ.prototype, FJ, cJ[VJ][FJ]), ("string" === typeof eJ || kc(eJ)) && (cJ[yJ] || Object.defineProperty(cJ, yJ, {
            value: [],
            enumerable: !1,
            configurable: !0,
            writable: !0
          }), cJ[yJ][ZJ] = "string" === typeof eJ ? cc[eJ] : zc(eJ.quantized))
        },
        setFields(JJ, cJ) {
          const ZJ = JJ.prototype.constructor;
          Nc.register(ZJ);
          const FJ = Object.getPrototypeOf(ZJ),
            UJ = FJ && FJ[Symbol.metadata],
            eJ = Lc.initialize(ZJ);
          ZJ[qJ] || (ZJ[qJ] = MF[qJ]), ZJ[jJ] || (ZJ[jJ] = MF[jJ]), ZJ[YJ] || (ZJ[YJ] = MF[YJ]), ZJ.prototype.toJSON || (ZJ.prototype.toJSON = MF.prototype.toJSON);
          let XJ = eJ[SJ] ?? (UJ && UJ[SJ]) ?? -1;
          XJ++, eJ[yJ] || Object.defineProperty(eJ, yJ, {
            value: UJ?.[yJ] ? [...UJ[yJ]] : [],
            enumerable: !1,
            configurable: !0,
            writable: !0
          });
          for (const AJ in cJ) {
            if (void 0 !== eJ[AJ]) throw new Error(`@colyseus/schema: Duplicate '${AJ}' definition on '${ZJ.name||"(anonymous)"}'.`);
            Lc.defineField(ZJ, eJ, XJ, AJ, cJ[AJ]), XJ++
          }
          return JJ
        },
        isDeprecated: (JJ, cJ) => !0 === JJ[cJ].deprecated,
        initialize(JJ) {
          const cJ = Object.getPrototypeOf(JJ),
            ZJ = cJ[Symbol.metadata];
          let FJ = JJ[Symbol.metadata] ?? Object.create(null);
          if (cJ !== MF && FJ === ZJ && (FJ = Object.create(null), ZJ)) {
            Object.setPrototypeOf(FJ, ZJ), Object.defineProperty(FJ, SJ, {
              value: ZJ[SJ],
              enumerable: !1,
              configurable: !0,
              writable: !0
            }), void 0 !== ZJ[MJ] && (Object.defineProperty(FJ, MJ, {
              value: [...ZJ[MJ]],
              enumerable: !1,
              configurable: !0,
              writable: !0
            }), Object.defineProperty(FJ, bJ, {
              value: {
                ...ZJ[bJ]
              },
              enumerable: !1,
              configurable: !0,
              writable: !0
            }));
            for (const JJ of ic) {
              const cJ = ZJ[JJ];
              void 0 !== cJ && Object.defineProperty(FJ, JJ, {
                value: [...cJ],
                enumerable: !1,
                configurable: !0,
                writable: !0
              })
            }
            Object.defineProperty(FJ, VJ, {
              value: {
                ...ZJ[VJ]
              },
              enumerable: !1,
              configurable: !0,
              writable: !0
            })
          }
          return Object.defineProperty(JJ, Symbol.metadata, {
            value: FJ,
            writable: !1,
            configurable: !0
          }), FJ
        },
        isValidInstance: JJ => JJ.constructor[Symbol.metadata] && Object.prototype.hasOwnProperty.call(JJ.constructor[Symbol.metadata], SJ),
        getFields(JJ) {
          const cJ = JJ[Symbol.metadata],
            ZJ = {};
          for (let FJ = 0; FJ <= cJ[SJ]; FJ++) ZJ[cJ[FJ].name] = cJ[FJ].type;
          return ZJ
        },
        hasViewTagAtIndex: (JJ, cJ) => JJ?.[MJ]?.includes(cJ),
        hasUnreliableAtIndex: (JJ, cJ) => JJ?.[wJ]?.includes(cJ),
        hasPatchOnlyAtIndex: (JJ, cJ) => JJ?.[WJ]?.includes(cJ),
        hasFullStateOnlyAtIndex: (JJ, cJ) => JJ?.[HJ]?.includes(cJ),
        hasStreamAtIndex: (JJ, cJ) => JJ?.[PJ]?.includes(cJ)
      },
      ac = (JJ, cJ, ZJ) => JJ(cJ, ZJ);
    class Bc {
      dirtyLow = 0;
      dirtyHigh = 0;
      ops;
      constructor(JJ) {
        this.ops = new Uint8Array(Math.max(JJ + 1, 1))
      }
      record(JJ, cJ) {
        const ZJ = this.ops[JJ];
        0 === ZJ ? this.ops[JJ] = cJ : (ZJ === UJ.DELETE || ZJ === UJ.ADD && cJ === UJ.DELETE_AND_ADD) && (this.ops[JJ] = UJ.DELETE_AND_ADD), JJ < 32 ? this.dirtyLow |= 1 << JJ : this.dirtyHigh |= 1 << JJ - 32
      }
      recordDelete(JJ, cJ) {
        this.ops[JJ] = cJ, JJ < 32 ? this.dirtyLow |= 1 << JJ : this.dirtyHigh |= 1 << JJ - 32
      }
      recordRaw(JJ, cJ) {
        this.record(JJ, cJ)
      }
      operationAt(JJ) {
        const cJ = this.ops[JJ];
        return 0 === cJ ? void 0 : cJ
      }
      setOperationAt(JJ, cJ) {
        this.ops[JJ] = cJ
      }
      forEach(JJ) {
        this.forEachWithCtx(JJ, ac)
      }
      forEachWithCtx(JJ, cJ) {
        let ZJ = this.dirtyLow,
          FJ = this.dirtyHigh;
        const UJ = this.ops;
        for (; 0 !== ZJ;) {
          const FJ = ZJ & -ZJ,
            eJ = 31 - Math.clz32(FJ);
          ZJ ^= FJ, cJ(JJ, eJ, UJ[eJ])
        }
        for (; 0 !== FJ;) {
          const ZJ = FJ & -FJ,
            eJ = 31 - Math.clz32(ZJ) + 32;
          FJ ^= ZJ, cJ(JJ, eJ, UJ[eJ])
        }
      }
      size() {
        return oc(this.dirtyLow) + oc(this.dirtyHigh)
      }
      has() {
        return 0 !== (this.dirtyLow | this.dirtyHigh)
      }
      reset() {
        this.dirtyLow = 0, this.dirtyHigh = 0, this.ops.fill(0)
      }
    }
    class tc {
      Nn = new Map;
      pureOps = [];
      record(JJ, cJ) {
        const ZJ = this.Nn.get(JJ);
        void 0 === ZJ ? this.Nn.set(JJ, cJ) : (ZJ === UJ.DELETE || ZJ === UJ.ADD && cJ === UJ.DELETE_AND_ADD) && this.Nn.set(JJ, UJ.DELETE_AND_ADD)
      }
      recordDelete(JJ, cJ) {
        this.Nn.set(JJ, cJ)
      }
      recordRaw(JJ, cJ) {
        this.Nn.set(JJ, cJ)
      }
      recordPure(JJ) {
        this.pureOps.push([this.Nn.size, JJ])
      }
      operationAt(JJ) {
        return this.Nn.get(JJ)
      }
      setOperationAt(JJ, cJ) {
        this.Nn.has(JJ) && this.Nn.set(JJ, cJ)
      }
      forEach(JJ) {
        this.forEachWithCtx(JJ, ac)
      }
      forEachWithCtx(JJ, cJ) {
        const ZJ = this.pureOps;
        if (ZJ.length > 0) {
          let FJ = 0,
            UJ = 0;
          for (const [eJ, XJ] of this.Nn) {
            for (; FJ < ZJ.length && ZJ[FJ][0] <= UJ;) {
              const UJ = ZJ[FJ++][1];
              cJ(JJ, -UJ, UJ)
            }
            cJ(JJ, eJ, XJ), UJ++
          }
          for (; FJ < ZJ.length;) {
            const UJ = ZJ[FJ++][1];
            cJ(JJ, -UJ, UJ)
          }
        } else
          for (const [FJ, UJ] of this.Nn) cJ(JJ, FJ, UJ)
      }
      size() {
        return this.Nn.size + this.pureOps.length
      }
      has() {
        return this.Nn.size > 0 || this.pureOps.length > 0
      }
      reset() {
        this.Nn.clear(), this.pureOps.length = 0
      }
      shift(JJ) {
        const cJ = new Map;
        for (const [ZJ, FJ] of this.Nn) cJ.set(ZJ + JJ, FJ);
        this.Nn = cJ
      }
    }

    function oc(JJ) {
      return 16843009 * ((JJ = (858993459 & (JJ -= JJ >>> 1 & 1431655765)) + (JJ >>> 2 & 858993459)) + (JJ >>> 4) & 252645135) >>> 24
    }

    function lc(JJ) {
      if (void 0 === JJ) return 0;
      let cJ = 0;
      for (let ZJ = 0, FJ = JJ.length; ZJ < FJ; ZJ++) {
        const FJ = JJ[ZJ];
        FJ < 32 && (cJ |= 1 << FJ)
      }
      return cJ
    }

    function JZ(JJ) {
      const cJ = JJ.constructor;
      if (Object.prototype.hasOwnProperty.call(cJ, KJ)) return cJ[KJ];
      const ZJ = cJ[Symbol.metadata],
        FJ = Lc.isValidInstance(JJ),
        UJ = (ZJ?.[MJ]?.length ?? 0) > 0,
        eJ = function(JJ) {
          const cJ = [],
            ZJ = [],
            FJ = [],
            UJ = [],
            eJ = JJ?.[SJ];
          if (void 0 === eJ) return {
            names: cJ,
            types: ZJ,
            tags: FJ,
            encoders: UJ
          };
          const XJ = JJ[yJ];
          for (let AJ = 0; AJ <= eJ; AJ++) {
            const eJ = JJ[AJ];
            void 0 !== eJ ? (cJ[AJ] = eJ.name, ZJ[AJ] = eJ.type, FJ[AJ] = eJ.tag, UJ[AJ] = XJ?.[AJ]) : (cJ[AJ] = void 0, ZJ[AJ] = void 0, FJ[AJ] = void 0, UJ[AJ] = void 0)
          }
          return {
            names: cJ,
            types: ZJ,
            tags: FJ,
            encoders: UJ
          }
        }(ZJ),
        XJ = FJ && !UJ ? void 0 : cJ[hJ],
        AJ = {
          encoder: cJ[jJ],
          filter: XJ,
          metadata: ZJ,
          isSchema: FJ,
          filterBitmask: FJ ? lc(ZJ?.[MJ]) : 0,
          hasAnyFullStateOnly: (ZJ?.[HJ]?.length ?? 0) > 0,
          hasAnyUnreliable: (ZJ?.[wJ]?.length ?? 0) > 0,
          hasAnyStream: (ZJ?.[PJ]?.length ?? 0) > 0,
          hasAnyView: UJ,
          fullStateOnlyBitmask: lc(ZJ?.[HJ]),
          unreliableBitmask: lc(ZJ?.[wJ]),
          streamBitmask: lc(ZJ?.[PJ]),
          names: eJ.names,
          types: eJ.types,
          tags: eJ.tags,
          encoders: eJ.encoders
        };
      return Object.defineProperty(cJ, KJ, {
        value: AJ,
        enumerable: !1,
        writable: !0,
        configurable: !0
      }), AJ
    }

    function cZ(JJ, cJ) {
      if (void 0 !== JJ.parentRef && cJ(JJ.parentRef, JJ._parentIndex)) return !0;
      for (let ZJ = JJ.extraParents; void 0 !== ZJ; ZJ = ZJ.next)
        if (cJ(ZJ.ref, ZJ.index)) return !0;
      return !1
    }
    const ZZ = (JJ, cJ) => {
        JJ.isFieldUnreliable(cJ) ? JJ.ensureUnreliableRecorder().record(cJ, UJ.ADD) : JJ.record(cJ, UJ.ADD)
      },
      FZ = (JJ, cJ) => JJ(cJ);

    function UZ(JJ, cJ, ZJ) {
      const FJ = JJ.refTarget;
      if (void 0 !== FJ[fJ]) {
        if (JJ.isPatchOnly) return;
        if (Array.isArray(FJ.items)) {
          const JJ = FJ.items;
          for (let FJ = 0, UJ = JJ.length; FJ < UJ; FJ++) void 0 !== JJ[FJ] && ZJ(cJ, FJ)
        } else if (void 0 !== FJ.journal)
          for (const [JJ, UJ] of FJ.journal.keyByIndex) FJ.$items.has(UJ) && ZJ(cJ, JJ);
        else if (void 0 !== FJ.$items)
          for (const JJ of FJ.$items.keys()) ZJ(cJ, JJ)
      } else {
        const UJ = JJ.metadata;
        if (!UJ) return;
        const eJ = UJ[SJ] ?? -1,
          XJ = UJ[gJ],
          AJ = JJ.encDescriptor.names;
        for (let JJ = 0; JJ <= eJ; JJ++) {
          const UJ = AJ[JJ];
          if (void 0 === UJ) continue;
          if (XJ && XJ.includes(JJ)) continue;
          const eJ = FJ[UJ];
          void 0 !== eJ && null !== eJ && ZJ(cJ, JJ)
        }
      }
    }

    function eZ(JJ, cJ, ZJ, FJ) {
      ! function(JJ, cJ, ZJ) {
        if (!cJ) return;
        const FJ = cJ[GJ],
          UJ = !FJ._isSchema;
        let eJ;
        UJ ? (cJ = FJ.parent, ZJ = FJ.parentIndex, eJ = cJ?.[GJ].metadata) : eJ = FJ.metadata;
        const XJ = (eJ?.[WJ]?.includes(ZJ) ? KZ : 0) | (eJ?.[HJ]?.includes(ZJ) ? yZ : 0),
          AJ = FJ.flags & MZ | XJ,
          qJ = JJ.flags;
        JJ.flags = qJ | AJ;
        AJ & ~qJ & yZ && (JJ.reset(), JJ.unreliableRecorder?.reset());
        const jJ = JJ.root?.types;
        if (!jJ?.hasFilters) return;
        const YJ = eJ?.[MJ]?.includes(ZJ) ?? !1,
          hJ = eJ?.[PJ]?.includes(ZJ) ?? !1,
          DJ = FJ.isFiltered || YJ || hJ;
        if (JJ.isFiltered = DJ, hJ && !UJ) {
          JJ.isStreamCollection = !0;
          const cJ = Sc(JJ.ref);
          if (void 0 === cJ.priority) {
            const JJ = Lc.getStreamPriority(eJ, ZJ);
            void 0 !== JJ && (cJ.priority = JJ)
          }
          JJ.root?.registerStream(JJ.ref)
        }
        if (DJ) {
          const cJ = AZ(JJ);
          JJ.isVisibilitySharedWithParent = FJ.isFiltered && cJ && !hJ && (!YJ || UJ && eJ[ZJ].tag !== nF)
        }
      }(JJ, cJ, ZJ), JJ.isFullStateOnly || (JJ.has() && JJ.root?.enqueueChangeTree(JJ), JJ.unreliableRecorder?.has() && JJ.root?.enqueueUnreliable(JJ), JJ.has() || JJ.unreliableRecorder?.has() || JJ.root?.enqueueChangeTree(JJ))
    }

    function XZ(JJ) {
      const cJ = JJ.pendingFilterRefresh;
      for (let ZJ = 0; ZJ < cJ.length; ZJ++) {
        const JJ = cJ[ZJ];
        0 !== (JJ.flags & IZ) && qZ(JJ)
      }
      cJ.length = 0
    }

    function AZ(JJ) {
      return JJ._isSchema || "string" !== typeof JJ.refTarget[fJ]
    }

    function qZ(JJ) {
      JJ.flags &= ~IZ;
      const cJ = JJ.root;
      if (void 0 === cJ || void 0 === JJ.parentRef) return;
      const ZJ = AZ(JJ);
      let FJ = sZ(JJ, JJ.parentRef, JJ._parentIndex, ZJ);
      for (let eJ = JJ.extraParents; void 0 !== eJ && FJ !== DZ; eJ = eJ.next) FJ |= sZ(JJ, eJ.ref, eJ.index, ZJ);
      if (0 === FJ) return;
      JJ.isVisibilitySharedWithParent = 0 !== (FJ & hZ);
      const UJ = 0 === (FJ & YZ);
      UJ !== JJ.isFiltered && (JJ.isFiltered = UJ, UJ || JJ.isFullStateOnly || (JJ.forEachLiveWithCtx(JJ, ZZ), JJ.has() && cJ.enqueueChangeTree(JJ), JJ.unreliableRecorder?.has() && cJ.enqueueUnreliable(JJ)), JJ.forEachChildWithCtx(JJ, nZ))
    }
    const jZ = 1,
      YZ = 2,
      hZ = 4,
      DZ = jZ | YZ | hZ;

    function sZ(JJ, cJ, ZJ, FJ) {
      const UJ = cJ[GJ];
      if (UJ.root !== JJ.root || ! function(JJ, cJ, ZJ) {
          const FJ = cJ.refTarget;
          if (cJ.isArray) {
            const cJ = FJ.items,
              UJ = cJ[ZJ];
            if (void 0 !== UJ && UJ[GJ] === JJ) return !0;
            for (let ZJ = 0, FJ = cJ.length; ZJ < FJ; ZJ++) {
              const FJ = cJ[ZJ];
              if (void 0 !== FJ && FJ[GJ] === JJ) return !0
            }
            return !1
          }
          const UJ = cJ.getValue(ZJ);
          return void 0 !== UJ && UJ[GJ] === JJ
        }(JJ, UJ, ZJ)) return 0;
      UJ.flags & IZ && qZ(UJ);
      let eJ = jZ;
      if (UJ._isSchema) {
        void 0 !== UJ.encDescriptor.tags[ZJ] || UJ.isFieldStream(ZJ) || (UJ.isFiltered ? FJ && (eJ |= hZ) : eJ |= YZ)
      } else if (UJ.isFiltered) {
        if (FJ && !UJ.isStreamCollection) {
          const JJ = UJ.parent?.[GJ];
          (JJ?._isSchema ? JJ.encDescriptor.tags[UJ.parentIndex] : void 0) !== nF && (eJ |= hZ)
        }
      } else eJ |= YZ;
      return eJ
    }
    const nZ = (JJ, cJ, ZJ) => {
      qZ(cJ)
    };

    function GZ(JJ, cJ, ZJ, FJ) {
      if (JJ.addParent(cJ, FJ), !ZJ) return;
      const UJ = ZJ.add(JJ);
      ZJ !== JJ.root && (JJ.root = ZJ, eZ(JJ, cJ, FJ));
      const eJ = cJ?.[GJ];
      if (void 0 !== eJ && void 0 !== eJ.subscribedViews && void 0 !== cJ[fJ] && function(JJ, cJ, ZJ, FJ) {
          const UJ = JJ.subscribedViews;
          if (void 0 === UJ) return;
          const eJ = JJ.isStreamCollection,
            XJ = eJ ? JJ.ref : void 0,
            AJ = eJ ? void 0 : ZJ[GJ];
          for (let qJ = 0, jJ = UJ.length; qJ < jJ; qJ++) {
            let JJ = UJ[qJ];
            for (; 0 !== JJ;) {
              const ZJ = JJ & -JJ;
              JJ ^= ZJ;
              const jJ = 32 * qJ + (31 - Math.clz32(ZJ)),
                YJ = FJ.activeViews.get(jJ),
                hJ = YJ?.deref();
              void 0 !== hJ ? eJ ? Wc(XJ, jJ, cJ) : void 0 !== AJ && hJ.markVisible(AJ) : UJ[qJ] &= ~ZJ
            }
          }
        }(eJ, FJ, JJ.ref, ZJ), UJ) {
        let cJ = vZ[mZ];
        void 0 === cJ && (cJ = {
          parentRef: void 0,
          root: void 0
        }, vZ[mZ] = cJ), cJ.parentRef = JJ.ref, cJ.root = ZJ, mZ++, xZ(JJ, cJ, QZ), mZ--
      }
    }

    function fZ(JJ, cJ, ZJ) {
      JJ(cJ, ZJ)
    }

    function xZ(JJ, cJ, ZJ) {
      const FJ = JJ.refTarget;
      if (FJ[fJ]) {
        if ("string" !== typeof FJ[fJ]) {
          const JJ = FJ.items;
          if (void 0 !== JJ)
            for (let FJ = 0, UJ = JJ.length; FJ < UJ; FJ++) {
              const UJ = JJ[FJ];
              UJ && ZJ(cJ, UJ[GJ], FJ)
            } else {
              const JJ = FJ.$items,
                UJ = FJ._collectionIndexes;
              for (const FJ of JJ.keys()) {
                const eJ = JJ.get(FJ);
                eJ && ZJ(cJ, eJ[GJ], UJ?.[FJ] ?? FJ)
              }
            }
        }
      } else {
        const UJ = JJ.metadata,
          eJ = UJ?.[IJ];
        if (!eJ) return;
        const XJ = JJ.encDescriptor.names;
        for (let JJ = 0, AJ = eJ.length; JJ < AJ; JJ++) {
          const UJ = eJ[JJ],
            AJ = FJ[XJ[UJ]];
          AJ && ZJ(cJ, AJ[GJ], UJ)
        }
      }
    }

    function rZ(JJ, cJ, ZJ) {
      cJ.root !== JJ ? cJ.setRoot(JJ) : JJ.add(cJ)
    }
    const vZ = [];
    let mZ = 0;

    function QZ(JJ, cJ, ZJ) {
      if (cJ.root === JJ.root) return JJ.root.add(cJ), void JJ.root.moveNextToParent(cJ);
      cJ.setParent(JJ.parentRef, JJ.root, ZJ)
    }

    function EZ(JJ, cJ, ZJ) {
      const FJ = (3 & ZJ) << 3;
      return ZJ < 4 ? JJ >>> FJ & 255 : cJ >>> FJ & 255
    }
    const VZ = (JJ, cJ, ZJ) => JJ(cJ, ZJ);
    const KZ = 16,
      yZ = 32,
      SZ = 128,
      IZ = 256,
      MZ = KZ | yZ;
    class bZ {
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
      set isFiltered(JJ) {
        this.flags = JJ ? 1 | this.flags : -2 & this.flags
      }
      get isVisibilitySharedWithParent() {
        return 0 !== (2 & this.flags)
      }
      set isVisibilitySharedWithParent(JJ) {
        this.flags = JJ ? 2 | this.flags : -3 & this.flags
      }
      get isNew() {
        return 0 !== (4 & this.flags)
      }
      set isNew(JJ) {
        this.flags = JJ ? 4 | this.flags : -5 & this.flags
      }
      get isUnreliable() {
        return 0 !== (8 & this.flags)
      }
      set isUnreliable(JJ) {
        this.flags = JJ ? 8 | this.flags : -9 & this.flags
      }
      get isPatchOnly() {
        return 0 !== (this.flags & KZ)
      }
      set isPatchOnly(JJ) {
        this.flags = JJ ? this.flags | KZ : this.flags & ~KZ
      }
      get isFullStateOnly() {
        return 0 !== (this.flags & yZ)
      }
      set isFullStateOnly(JJ) {
        this.flags = JJ ? this.flags | yZ : this.flags & ~yZ
      }
      get isStreamCollection() {
        return 0 !== (64 & this.flags)
      }
      set isStreamCollection(JJ) {
        this.flags = JJ ? 64 | this.flags : -65 & this.flags
      }
      get needsRestage() {
        return 0 !== (this.flags & SZ)
      }
      set needsRestage(JJ) {
        this.flags = JJ ? this.flags | SZ : -129 & this.flags
      }
      get hasFilteredFields() {
        return this.isFiltered || this.encDescriptor.hasAnyView
      }
      ensureUnreliableRecorder() {
        return void 0 === this.unreliableRecorder && (this.unreliableRecorder = this._isSchema ? new Bc(this.metadata?.[SJ] ?? 0) : new tc), this.unreliableRecorder
      }
      isFieldUnreliable(JJ) {
        const cJ = this.encDescriptor;
        return !!cJ.hasAnyUnreliable && (JJ < 32 ? 0 !== (cJ.unreliableBitmask & 1 << JJ) : Lc.hasUnreliableAtIndex(this.metadata, JJ))
      }
      isFieldFullStateOnly(JJ) {
        if (this.isFullStateOnly) return !0;
        const cJ = this.encDescriptor;
        return !!cJ.hasAnyFullStateOnly && (JJ < 32 ? 0 !== (cJ.fullStateOnlyBitmask & 1 << JJ) : Lc.hasFullStateOnlyAtIndex(this.metadata, JJ))
      }
      isFieldStream(JJ) {
        const cJ = this.encDescriptor;
        return !!cJ.hasAnyStream && (JJ < 32 ? 0 !== (cJ.streamBitmask & 1 << JJ) : Lc.hasStreamAtIndex(this.metadata, JJ))
      }
      constructor(JJ) {
        let cJ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : JJ;
        this.ref = JJ, this.refTarget = cJ;
        const ZJ = JZ(JJ);
        this.encDescriptor = ZJ, this.metadata = ZJ.metadata;
        const FJ = ZJ.isSchema;
        if (this._isSchema = FJ, this.ops = void 0, this.collDirty = void 0, this.collPureOps = void 0, FJ) {
          const JJ = this.metadata?.[SJ] ?? 0;
          JJ > 7 && (this.ops = new Uint8Array(JJ + 1))
        } else this.collDirty = new Map
      }
      _opAt(JJ) {
        const cJ = this.ops;
        if (void 0 !== cJ) return cJ[JJ];
        const ZJ = (3 & JJ) << 3;
        return JJ < 4 ? this.opsLow >>> ZJ & 255 : this.opsHigh >>> ZJ & 255
      }
      _opPut(JJ, cJ) {
        const ZJ = this.ops;
        if (void 0 !== ZJ) return void(ZJ[JJ] = cJ);
        const FJ = (3 & JJ) << 3,
          UJ = ~(255 << FJ);
        JJ < 4 ? this.opsLow = this.opsLow & UJ | cJ << FJ : this.opsHigh = this.opsHigh & UJ | cJ << FJ
      }
      _markDirty(JJ) {
        JJ < 32 ? this.dirtyLow |= 1 << JJ : this.dirtyHigh |= 1 << JJ - 32
      }
      record(JJ, cJ) {
        if (this._isSchema) {
          const ZJ = this._opAt(JJ);
          0 === ZJ ? this._opPut(JJ, cJ) : (ZJ === UJ.DELETE || ZJ === UJ.ADD && cJ === UJ.DELETE_AND_ADD) && this._opPut(JJ, UJ.DELETE_AND_ADD), this._markDirty(JJ)
        } else {
          const ZJ = this.collDirty,
            FJ = ZJ.get(JJ);
          let eJ;
          eJ = void 0 === FJ ? cJ : FJ === UJ.DELETE || FJ === UJ.ADD && cJ === UJ.DELETE_AND_ADD ? UJ.DELETE_AND_ADD : FJ, ZJ.set(JJ, eJ)
        }
      }
      recordDelete(JJ, cJ) {
        this._isSchema ? (this._opPut(JJ, cJ), this._markDirty(JJ)) : this.collDirty.set(JJ, cJ)
      }
      recordRaw(JJ, cJ) {
        this._isSchema ? (this._opPut(JJ, cJ), this._markDirty(JJ)) : this.collDirty.set(JJ, cJ)
      }
      recordPure(JJ) {
        if (this._isSchema) throw new Error("ChangeTree (Schema): pure operations are not supported");
        (this.collPureOps ??= []).push([this.collDirty.size, JJ])
      }
      operationAt(JJ) {
        if (this._isSchema) {
          const cJ = this._opAt(JJ);
          return 0 === cJ ? void 0 : cJ
        }
        return this.collDirty.get(JJ)
      }
      setOperationAt(JJ, cJ) {
        if (this._isSchema) this._opPut(JJ, cJ);
        else {
          const ZJ = this.collDirty;
          ZJ.has(JJ) && ZJ.set(JJ, cJ)
        }
      }
      forEach(JJ) {
        this.forEachWithCtx(JJ, VZ)
      }
      forEachWithCtx(JJ, cJ) {
        if (this._isSchema) {
          let ZJ = this.dirtyLow,
            FJ = this.dirtyHigh;
          const UJ = this.ops;
          if (void 0 !== UJ) {
            for (; 0 !== ZJ;) {
              const FJ = ZJ & -ZJ,
                eJ = 31 - Math.clz32(FJ);
              ZJ ^= FJ, cJ(JJ, eJ, UJ[eJ])
            }
            for (; 0 !== FJ;) {
              const ZJ = FJ & -FJ,
                eJ = 31 - Math.clz32(ZJ) + 32;
              FJ ^= ZJ, cJ(JJ, eJ, UJ[eJ])
            }
          } else {
            const FJ = this.opsLow,
              UJ = this.opsHigh;
            for (; 0 !== ZJ;) {
              const eJ = ZJ & -ZJ,
                XJ = 31 - Math.clz32(eJ);
              ZJ ^= eJ, cJ(JJ, XJ, EZ(FJ, UJ, XJ))
            }
          }
          return
        }
        const ZJ = this.collDirty,
          FJ = this.collPureOps;
        if (void 0 !== FJ && FJ.length > 0) {
          let UJ = 0,
            eJ = 0;
          for (const [XJ, AJ] of ZJ) {
            for (; UJ < FJ.length && FJ[UJ][0] <= eJ;) {
              const ZJ = FJ[UJ++][1];
              cJ(JJ, -ZJ, ZJ)
            }
            cJ(JJ, XJ, AJ), eJ++
          }
          for (; UJ < FJ.length;) {
            const ZJ = FJ[UJ++][1];
            cJ(JJ, -ZJ, ZJ)
          }
        } else
          for (const [UJ, eJ] of ZJ) cJ(JJ, UJ, eJ)
      }
      size() {
        return this._isSchema ? oc(this.dirtyLow) + oc(this.dirtyHigh) : this.collDirty.size + (this.collPureOps?.length ?? 0)
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
      insertAt(JJ, cJ) {
        if (this._isSchema) throw new Error("ChangeTree (Schema): insertAt is not supported");
        const ZJ = this.collDirty,
          FJ = new Map,
          eJ = !this.paused && !this.isFullStateOnly;
        if (JJ > 0)
          for (const [UJ, XJ] of ZJ) UJ < JJ && FJ.set(UJ, XJ);
        if (eJ)
          for (let XJ = 0; XJ < cJ; XJ++) FJ.set(JJ + XJ, UJ.ADD);
        for (const [UJ, XJ] of ZJ) UJ >= JJ && FJ.set(UJ + cJ, XJ);
        this.collDirty = FJ, eJ && this.root?.enqueueChangeTree(this)
      }
      removeAt(JJ, cJ) {
        if (this._isSchema) throw new Error("ChangeTree (Schema): removeAt is not supported");
        const ZJ = this.collDirty,
          FJ = JJ + cJ;
        let UJ = !1;
        for (const XJ of ZJ.keys())
          if (XJ >= FJ) {
            UJ = !0;
            break
          } if (!UJ) {
          for (let cJ = JJ; cJ < FJ; cJ++) ZJ.delete(cJ);
          return
        }
        const eJ = new Map;
        for (const [XJ, AJ] of ZJ) XJ < JJ ? eJ.set(XJ, AJ) : XJ >= FJ && eJ.set(XJ - cJ, AJ);
        this.collDirty = eJ
      }
      unshift(JJ) {
        this.insertAt(0, JJ)
      }
      setRoot(JJ) {
        ! function(JJ, cJ) {
          JJ.root = cJ;
          const ZJ = cJ.add(JJ);
          eZ(JJ, JJ.parent, JJ.parentIndex), ZJ && xZ(JJ, cJ, rZ)
        }(this, JJ)
      }
      setParent(JJ, cJ, ZJ) {
        GZ(this, JJ, cJ, ZJ)
      }
      forEachChild(JJ) {
        xZ(this, JJ, fZ)
      }
      forEachChildWithCtx(JJ, cJ) {
        xZ(this, JJ, cJ)
      }
      forEachLive(JJ) {
        UZ(this, JJ, FZ)
      }
      forEachLiveWithCtx(JJ, cJ) {
        UZ(this, JJ, cJ)
      }
      operation(JJ) {
        this.paused || this.isFullStateOnly || (this.recordPure(JJ), this.root?.enqueueChangeTree(this))
      }
      _routeAndRecord(JJ, cJ, ZJ) {
        if (!this.paused && !this.isFieldFullStateOnly(JJ)) {
          if (this.isFieldUnreliable(JJ) && !this.isNew) {
            const FJ = this.ensureUnreliableRecorder();
            return ZJ ? FJ.recordRaw(JJ, cJ) : FJ.record(JJ, cJ), void this.root?.enqueueUnreliable(this)
          }
          ZJ ? this.recordRaw(JJ, cJ) : this.record(JJ, cJ), this.root?.enqueueChangeTree(this)
        }
      }
      change(JJ) {
        let cJ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : UJ.ADD;
        this._routeAndRecord(JJ, cJ, !1)
      }
      indexedOperation(JJ, cJ) {
        this._routeAndRecord(JJ, cJ, !0)
      }
      getChange(JJ) {
        return this.operationAt(JJ)
      }
      pause() {
        this.paused = !0
      }
      resume() {
        this.paused = !1
      }
      untracked(JJ) {
        const cJ = this.paused;
        this.paused = !0;
        try {
          return JJ()
        } finally {
          this.paused = cJ
        }
      }
      markDirty(JJ) {
        let cJ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : UJ.ADD;
        const ZJ = this.paused;
        this.paused = !1;
        try {
          this.change(JJ, cJ)
        } finally {
          this.paused = ZJ
        }
      }
      getValue(JJ) {
        let cJ = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return this.refTarget[DJ](JJ, cJ)
      }
      delete(JJ, cJ) {
        if (void 0 === JJ) {
          try {
            throw new Error(`@colyseus/schema ${this.ref.constructor.name}: trying to delete non-existing index '${JJ}'`)
          } catch (eU) {
            console.warn(eU)
          }
          return
        }
        if (this.paused || this.isFieldFullStateOnly(JJ)) return this.getValue(JJ);
        const ZJ = this.isFieldUnreliable(JJ) && !this.isNew;
        ZJ ? this.ensureUnreliableRecorder().recordDelete(JJ, cJ ?? UJ.DELETE) : this.recordDelete(JJ, cJ ?? UJ.DELETE);
        const FJ = this.getValue(JJ);
        return FJ && FJ[GJ] && this.root?.remove(FJ[GJ]), ZJ ? this.root?.enqueueUnreliable(this) : this.root?.enqueueChangeTree(this), FJ
      }
      endEncode() {
        this.reset(), this.changesNode = void 0, this._isSchema || this.refTarget[rJ]?.(), this.isNew = !1
      }
      endEncodeUnreliable() {
        this.unreliableRecorder?.reset(), this.unreliableChangesNode = void 0, this._isSchema || this.refTarget[rJ]?.()
      }
      discard() {
        this._isSchema || this.refTarget[rJ]?.(), this.reset(), this.unreliableRecorder?.reset()
      }
      discardAll() {
        const JJ = JJ => {
          if (JJ < 0) return;
          const cJ = this.getValue(JJ);
          cJ && cJ[GJ] && cJ[GJ].discardAll()
        };
        this.forEach(JJ), this.unreliableRecorder?.forEach(JJ), this.discard()
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
      addParent(JJ, cJ) {
        ! function(JJ, cJ, ZJ) {
          if (JJ.parentRef) {
            if (JJ.parentRef[GJ] === cJ[GJ]) return void(JJ._parentIndex = ZJ);
            if (cZ(JJ, ((JJ, ZJ) => JJ[GJ] === cJ[GJ]))) return void(JJ._parentIndex = ZJ)
          }
          void 0 === JJ.parentRef ? (JJ.parentRef = cJ, JJ._parentIndex = ZJ) : (JJ.extraParents = {
            ref: JJ.parentRef,
            index: JJ._parentIndex,
            next: JJ.extraParents
          }, JJ.parentRef = cJ, JJ._parentIndex = ZJ)
        }(this, JJ, cJ)
      }
      setParentIndex(JJ, cJ) {
        ! function(JJ, cJ, ZJ) {
          if (void 0 !== JJ.extraParents)
            if (JJ.parentRef[GJ] !== cJ[GJ]) {
              for (let FJ = JJ.extraParents; void 0 !== FJ; FJ = FJ.next)
                if (FJ.ref[GJ] === cJ[GJ]) return void(FJ.index = ZJ)
            } else JJ._parentIndex = ZJ;
          else JJ._parentIndex = ZJ
        }(this, JJ, cJ)
      }
      removeParent() {
        return function(JJ, cJ) {
          if (JJ.parentRef && JJ.parentRef[GJ] === cJ[GJ]) return JJ.extraParents ? (JJ.parentRef = JJ.extraParents.ref, JJ._parentIndex = JJ.extraParents.index, JJ.extraParents = JJ.extraParents.next) : (JJ.parentRef = void 0, JJ._parentIndex = void 0), !0;
          let ZJ = JJ.extraParents,
            FJ = null;
          for (; ZJ;) {
            if (ZJ.ref[GJ] === cJ[GJ]) return FJ ? FJ.next = ZJ.next : JJ.extraParents = ZJ.next, !0;
            FJ = ZJ, ZJ = ZJ.next
          }
          return void 0 === JJ.parentRef
        }(this, arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.parent)
      }
      findParent(JJ) {
        return function(JJ, cJ) {
          if (void 0 !== JJ.parentRef && cJ(JJ.parentRef, JJ._parentIndex)) return {
            ref: JJ.parentRef,
            index: JJ._parentIndex
          };
          for (let ZJ = JJ.extraParents; void 0 !== ZJ; ZJ = ZJ.next)
            if (cJ(ZJ.ref, ZJ.index)) return {
              ref: ZJ.ref,
              index: ZJ.index
            }
        }(this, JJ)
      }
      hasParent(JJ) {
        return cZ(this, JJ)
      }
      indexInParent(JJ) {
        return function(JJ, cJ) {
          if (JJ.parentRef && JJ.parentRef[GJ] === cJ[GJ]) return JJ._parentIndex;
          for (let ZJ = JJ.extraParents; void 0 !== ZJ; ZJ = ZJ.next)
            if (ZJ.ref[GJ] === cJ[GJ]) return ZJ.index
        }(this, JJ)
      }
      getAllParents() {
        return function(JJ) {
          const cJ = [];
          JJ.parentRef && cJ.push({
            ref: JJ.parentRef,
            index: JJ._parentIndex
          });
          let ZJ = JJ.extraParents;
          for (; ZJ;) cJ.push({
            ref: ZJ.ref,
            index: ZJ.index
          }), ZJ = ZJ.next;
          return cJ
        }(this)
      }
    }
    class wZ {
      ref;
      root = void 0;
      parentRef = void 0;
      paused = !1;
      isNew = !1;
      flags = 0;
      constructor(JJ) {
        this.ref = JJ
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
      untracked(JJ) {
        return JJ()
      }
      markDirty() {}
      forEachChild(JJ) {
        const cJ = this.ref;
        if (cJ[fJ]) {
          if ("string" !== typeof cJ[fJ])
            for (const [ZJ, FJ] of cJ.entries()) FJ && JJ(FJ[GJ], cJ._collectionIndexes?.[ZJ] ?? ZJ);
          return
        }
        const ZJ = cJ.constructor,
          FJ = ZJ?.[Symbol.metadata];
        if (!FJ) return;
        const UJ = FJ[IJ] ?? [];
        for (let eJ = 0; eJ < UJ.length; eJ++) {
          const ZJ = UJ[eJ],
            XJ = cJ[FJ[ZJ].name];
          XJ && JJ(XJ[GJ], ZJ)
        }
      }
      forEachChildWithCtx(JJ, cJ) {
        this.forEachChild(((ZJ, FJ) => cJ(JJ, ZJ, FJ)))
      }
      forEachLive() {}
      forEachLiveWithCtx() {}
      forEach() {}
    }

    function WZ(JJ) {
      let cJ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : JJ;
      var ZJ;
      Object.defineProperty(JJ, GJ, {
        value: (ZJ = cJ, new wZ(ZJ)),
        enumerable: !1,
        writable: !0
      })
    }

    function gZ(JJ, cJ, ZJ, FJ, eJ, XJ, qJ) {
      void 0 !== qJ ? qJ(cJ, FJ, XJ) : "string" === typeof ZJ ? cc[ZJ]?.(cJ, FJ, XJ) : null != ZJ[Symbol.metadata] ? (cc.number(cJ, FJ[AJ], XJ), (eJ & UJ.ADD) === UJ.ADD && JJ.tryEncodeTypeId(cJ, ZJ, FJ.constructor, XJ)) : cc.number(cJ, FJ[AJ], XJ)
    }
    const HZ = function(JJ, cJ, ZJ, FJ, eJ, XJ, AJ, qJ) {
        if (cJ[XJ.offset++] = 255 & (FJ | eJ), eJ === UJ.DELETE) return;
        const jJ = ZJ.encDescriptor,
          YJ = ZJ.ref,
          hJ = YJ[QJ][FJ] ?? YJ[jJ.names[FJ]];
        gZ(JJ, cJ, jJ.types[FJ], hJ, eJ, XJ, jJ.encoders[FJ])
      },
      PZ = function(JJ, cJ, ZJ, FJ, eJ, XJ) {
        if (cJ[XJ.offset++] = 255 & eJ, cc.number(cJ, FJ, XJ), eJ === UJ.DELETE) return;
        const AJ = ZJ.ref;
        if ((eJ & UJ.ADD) === UJ.ADD) {
          const JJ = AJ.$indexes.get(FJ);
          cc.string(cJ, JJ, XJ)
        }
        gZ(JJ, cJ, AJ[fJ], AJ[DJ](FJ), eJ, XJ)
      },
      kZ = function(JJ, cJ, ZJ, FJ, eJ, XJ) {
        if (cJ[XJ.offset++] = 255 & eJ, cc.number(cJ, FJ, XJ), eJ === UJ.DELETE) return;
        const AJ = ZJ.ref;
        gZ(JJ, cJ, AJ[fJ], AJ[DJ](FJ), eJ, XJ)
      },
      pZ = function(JJ, cJ, ZJ, FJ, eJ, XJ) {
        const AJ = ZJ.ref;
        (eJ & UJ.ADD) === UJ.ADD && "function" === typeof AJ.set ? PZ(JJ, cJ, ZJ, FJ, eJ, XJ) : kZ(JJ, cJ, ZJ, FJ, eJ, XJ)
      },
      dZ = function(JJ, cJ, ZJ, FJ, eJ, XJ, qJ, jJ) {
        const YJ = ZJ.refTarget,
          hJ = YJ[fJ],
          sJ = "string" !== typeof hJ;
        let nJ;
        if (jJ && ZJ.isFiltered && sJ) {
          const JJ = YJ.tmpItems[FJ];
          if (!JJ) return;
          if (nJ = JJ[AJ], eJ === UJ.DELETE) eJ = UJ.DELETE_BY_REFID;
          else if ((eJ & UJ.ADD) === UJ.ADD) eJ = UJ.ADD_BY_REFID;
          else if ((eJ & UJ.MOVE) === UJ.MOVE) return
        } else if (eJ === UJ.DELETE && sJ) {
          const JJ = YJ.tmpItems[FJ];
          if (!JJ) return;
          nJ = JJ[AJ], eJ = UJ.DELETE_BY_REFID
        } else nJ = FJ;
        if (cJ[XJ.offset++] = 255 & eJ, cc.number(cJ, nJ, XJ), eJ === UJ.DELETE || eJ === UJ.DELETE_BY_REFID) return;
        gZ(JJ, cJ, hJ, YJ[DJ](FJ, qJ), eJ, XJ)
      };

    function zZ(JJ, cJ, ZJ, FJ, eJ, XJ, qJ) {
      const jJ = JJ.resyncVisited;
      let YJ = jJ.get(JJ.currentRefId);
      if (void 0 === YJ && jJ.set(JJ.currentRefId, YJ = new Set), YJ.add(FJ), void 0 !== eJ && ZJ === UJ.ADD && eJ !== XJ) {
        const ZJ = eJ[AJ];
        void 0 !== ZJ && (JJ.root.removeRef(ZJ), qJ?.push({
          ref: cJ,
          refId: JJ.currentRefId,
          op: UJ.DELETE,
          dynamicIndex: FJ,
          value: void 0,
          previousValue: eJ
        }))
      }
    }

    function NZ(JJ, cJ, ZJ, FJ) {
      const UJ = cJ[AJ];
      if (void 0 === UJ || ZJ.has(UJ)) return;
      ZJ.add(UJ);
      const eJ = cJ.constructor[Symbol.metadata],
        XJ = eJ?.[IJ];
      if (void 0 === XJ) return;
      const qJ = eJ[WJ];
      for (let AJ = 0; AJ < XJ.length; AJ++) {
        const UJ = XJ[AJ];
        if (void 0 !== qJ && qJ.includes(UJ)) continue;
        const jJ = eJ[UJ],
          YJ = cJ[jJ.name];
        YJ && (MF.is(jJ.type) ? NZ(JJ, YJ, ZJ, FJ) : OZ(JJ, YJ, ZJ, FJ))
      }
    }

    function OZ(JJ, cJ, ZJ, FJ) {
      const eJ = cJ[xJ] ?? cJ,
        XJ = eJ[AJ];
      if (void 0 === XJ || ZJ.has(XJ)) return;
      ZJ.add(XJ);
      const qJ = JJ.resyncVisited.get(XJ);
      if (void 0 === qJ) return;
      const jJ = JJ.root;
      eJ[nJ](qJ, ((JJ, ZJ) => {
        FJ?.push({
          ref: cJ,
          refId: XJ,
          op: UJ.DELETE,
          dynamicIndex: ZJ,
          value: void 0,
          previousValue: JJ
        });
        const eJ = JJ?.[AJ];
        void 0 !== eJ && jJ.removeRef(eJ)
      }), (cJ => {
        MF.isSchema(cJ) && NZ(JJ, cJ, ZJ, FJ)
      }))
    }
    const TZ = 1,
      CZ = 2,
      uZ = 3,
      iZ = 4,
      RZ = 5;

    function LZ(JJ, cJ, ZJ, FJ, eJ, XJ, qJ, jJ, YJ) {
      const hJ = JJ.root;
      let DJ;
      if ((cJ & UJ.DELETE) === UJ.DELETE) {
        const JJ = eJ?.[AJ];
        void 0 !== JJ && hJ.removeRef(JJ), cJ !== UJ.DELETE_AND_ADD && ZJ[sJ](FJ), DJ = void 0
      }
      if (cJ === UJ.DELETE);
      else if ("string" === typeof XJ) DJ = vc[XJ](qJ, jJ);
      else if (kc(XJ)) DJ = function(JJ, cJ, ZJ) {
        return dc(JJ, (0, vc[JJ.wire])(cJ, ZJ))
      }(XJ.quantized, qJ, jJ);
      else if (MF.is(XJ)) {
        const ZJ = vc.number(qJ, jJ);
        if (DJ = hJ.refs.get(ZJ), (cJ & UJ.ADD) === UJ.ADD) {
          const FJ = JJ.getInstanceType(qJ, jJ, XJ);
          DJ || (DJ = JJ.createInstanceOfType(FJ)), hJ.addRef(ZJ, DJ, DJ !== eJ || cJ === UJ.DELETE_AND_ADD && DJ === eJ)
        }
      } else {
        const ZJ = (nJ = Object.keys(XJ)[0], mc[nJ]),
          FJ = vc.number(qJ, jJ);
        null !== JJ.resyncVisited && function(JJ, cJ) {
          const ZJ = JJ.resyncVisited;
          ZJ.has(cJ) || ZJ.set(cJ, new Set)
        }(JJ, FJ);
        const sJ = hJ.refs.has(FJ) ? eJ || hJ.refs.get(FJ) : ZJ.constructor.initializeForDecoder();
        if (DJ = sJ.clone(!0), DJ[fJ] = Object.values(XJ)[0], eJ) {
          let JJ = eJ[AJ];
          if (void 0 !== JJ && FJ !== JJ) {
            (cJ & UJ.DELETE) !== UJ.DELETE && hJ.removeRef(JJ);
            const ZJ = eJ.entries();
            let FJ;
            for (;
              (FJ = ZJ.next()) && !FJ.done;) {
              const [cJ, ZJ] = FJ.value;
              "object" === typeof ZJ && (JJ = ZJ[AJ]), YJ?.push({
                ref: eJ,
                refId: JJ,
                op: UJ.DELETE,
                field: cJ,
                value: void 0,
                previousValue: ZJ
              })
            }
          }
        }
        hJ.addRef(FJ, DJ, sJ !== eJ || cJ === UJ.DELETE_AND_ADD && sJ === eJ)
      }
      var nJ;
      return DJ
    }
    const aZ = function(JJ, cJ, ZJ, FJ, UJ) {
        const eJ = cJ[ZJ.offset++],
          XJ = FJ.constructor[Symbol.metadata],
          AJ = eJ >> 6 << 6,
          qJ = eJ % (AJ || 255),
          jJ = XJ[qJ];
        if (void 0 === jJ) return console.warn("@colyseus/schema: field not defined at", {
          index: qJ,
          ref: FJ.constructor.name,
          metadata: XJ
        }), -1;
        const YJ = !0 === jJ.deprecated,
          hJ = YJ ? void 0 : FJ[DJ](qJ),
          sJ = LZ(JJ, AJ, FJ, qJ, hJ, jJ.type, cJ, ZJ, UJ);
        YJ || (null !== sJ && void 0 !== sJ && (FJ[jJ.name] = sJ), hJ !== sJ && UJ?.push({
          ref: FJ,
          refId: JJ.currentRefId,
          op: AJ,
          field: jJ.name,
          value: sJ,
          previousValue: hJ
        }))
      },
      BZ = function(JJ, cJ, ZJ, FJ, eJ) {
        const XJ = FJ[xJ] ?? FJ,
          AJ = cJ[ZJ.offset++];
        if (AJ === UJ.CLEAR) return JJ.removeChildRefs(XJ, eJ), void XJ.clear();
        const qJ = vc.number(cJ, ZJ),
          jJ = XJ[fJ],
          YJ = XJ.constructor.COLLECTION_KIND;
        let hJ;
        (AJ & UJ.ADD) === UJ.ADD ? YJ === TZ ? (hJ = vc.string(cJ, ZJ), XJ.setIndex(qJ, hJ)) : hJ = qJ : hJ = XJ.getIndex(qJ);
        const sJ = XJ[DJ](qJ),
          nJ = LZ(JJ, AJ, FJ, qJ, sJ, jJ, cJ, ZJ, eJ);
        if (null !== JJ.resyncVisited && zZ(JJ, FJ, AJ, hJ, sJ, nJ, eJ), null !== nJ && void 0 !== nJ) switch (YJ) {
          case TZ:
            XJ.$items.set(hJ, nJ);
            break;
          case CZ:
            XJ.$setAt(qJ, nJ, null !== JJ.resyncVisited && AJ === UJ.ADD ? UJ.REPLACE : AJ);
            break;
          case uZ:
          case iZ:
          case RZ:
            XJ.$items.has(qJ) || (XJ.$items.set(qJ, nJ), "number" === typeof XJ.$refId && qJ >= XJ.$refId && (XJ.$refId = qJ + 1));
            break;
          default:
            console.warn(`@colyseus/schema: missing COLLECTION_KIND on ${XJ.constructor?.name} \u2014 item at index ${qJ} was not stored.`)
        }
        sJ !== nJ && eJ?.push({
          ref: FJ,
          refId: JJ.currentRefId,
          op: AJ,
          dynamicIndex: hJ,
          value: nJ,
          previousValue: sJ
        })
      },
      tZ = function(JJ, cJ, ZJ, FJ, eJ) {
        const XJ = FJ[xJ] ?? FJ;
        let AJ, qJ = cJ[ZJ.offset++];
        if (qJ === UJ.CLEAR) return JJ.removeChildRefs(XJ, eJ), void XJ.clear();
        if (qJ === UJ.REVERSE) return void XJ.items.reverse();
        if (qJ === UJ.DELETE_BY_REFID) {
          const qJ = vc.number(cJ, ZJ),
            jJ = JJ.root.refs.get(qJ);
          if (void 0 === jJ) return;
          if (JJ.root.removeRef(qJ), AJ = XJ.findIndex((JJ => JJ === jJ)), -1 === AJ) return;
          return XJ[sJ](AJ), void eJ?.push({
            ref: FJ,
            refId: JJ.currentRefId,
            op: UJ.DELETE,
            dynamicIndex: AJ,
            value: void 0,
            previousValue: jJ
          })
        }
        if (qJ === UJ.ADD_BY_REFID) {
          const FJ = vc.number(cJ, ZJ),
            UJ = JJ.root.refs.get(FJ);
          UJ && (AJ = XJ.findIndex((JJ => JJ === UJ))), -1 !== AJ && void 0 !== AJ || (AJ = XJ.length)
        } else AJ = vc.number(cJ, ZJ);
        const jJ = XJ[fJ];
        let YJ = AJ;
        const hJ = XJ.items[AJ],
          DJ = LZ(JJ, qJ, FJ, AJ, hJ, jJ, cJ, ZJ, eJ);
        null !== JJ.resyncVisited && zZ(JJ, FJ, qJ, AJ, hJ, DJ, eJ), null !== DJ && void 0 !== DJ && DJ !== hJ && XJ.$setAt(AJ, DJ, null !== JJ.resyncVisited && qJ === UJ.ADD ? UJ.REPLACE : qJ), hJ !== DJ && eJ?.push({
          ref: FJ,
          refId: JJ.currentRefId,
          op: qJ,
          dynamicIndex: YJ,
          value: DJ,
          previousValue: hJ
        })
      };
    class oZ extends Error {}

    function lZ(JJ, cJ, ZJ, FJ) {
      if (!(JJ instanceof cJ)) throw new oZ(`a '${cJ.name}' was expected, but '${JJ&&JJ.constructor.name}' was provided in ${ZJ.constructor.name}#${FJ}`)
    }
    const JF = (JJ, cJ) => {
        const ZJ = JJ.toString(),
          FJ = cJ.toString();
        return ZJ < FJ ? -1 : ZJ > FJ ? 1 : 0
      },
      cF = {
        get: (JJ, cJ) => "symbol" === typeof cJ || isNaN(cJ) ? Reflect.get(JJ, cJ) : JJ.items[cJ],
        set: (JJ, cJ, ZJ) => {
          if ("symbol" !== typeof cJ && !isNaN(cJ)) {
            if (void 0 === ZJ || null === ZJ) JJ.$deleteAt(cJ);
            else {
              let FJ;
              if (ZJ[GJ]) {
                lZ(ZJ, JJ[fJ], JJ, cJ);
                const eJ = JJ.items[cJ];
                JJ.isMovingItems ? (FJ = JJ.$wireIndex(Number(cJ)), void 0 !== eJ ? ZJ[GJ].isNew ? JJ[GJ].indexedOperation(FJ, UJ.MOVE_AND_ADD) : (JJ[GJ].getChange(FJ) & UJ.DELETE) === UJ.DELETE ? JJ[GJ].indexedOperation(FJ, UJ.DELETE_AND_MOVE) : JJ[GJ].indexedOperation(FJ, UJ.MOVE) : ZJ[GJ].isNew && JJ[GJ].indexedOperation(FJ, UJ.ADD), ZJ[GJ].setParent(JJ, JJ[GJ].root, FJ)) : FJ = JJ.$changeAt(Number(cJ), ZJ), void 0 !== eJ && eJ[GJ].root?.remove(eJ[GJ])
              } else FJ = JJ.$changeAt(Number(cJ), ZJ);
              JJ.items[cJ] = ZJ, void 0 !== FJ && (JJ.tmpItems[FJ] = ZJ)
            }
            return !0
          }
          return Reflect.set(JJ, cJ, ZJ)
        },
        deleteProperty: (JJ, cJ) => ("number" === typeof cJ ? JJ.$deleteAt(cJ) : delete JJ[cJ], !0),
        has: (JJ, cJ) => "symbol" === typeof cJ || isNaN(Number(cJ)) ? Reflect.has(JJ, cJ) : Reflect.has(JJ.items, cJ)
      };
    class ZF {
      [GJ];
      [AJ];
      [xJ];
      [fJ];
      items = [];
      tmpItems = [];
      deletedIndexes = [];
      isMovingItems = !1;
      _needsCompaction = !1;
      static[jJ] = dZ;
      static[YJ] = tZ;
      static COLLECTION_KIND = CZ;
      static[hJ](JJ, cJ, ZJ) {
        if (!ZJ) return !0;
        const FJ = JJ[xJ] ?? JJ;
        return "string" === typeof FJ[fJ] || ZJ.isChangeTreeVisible(FJ.tmpItems[cJ]?.[GJ])
      }
      static is(JJ) {
        return Array.isArray(JJ) || void 0 !== JJ.array
      }
      static from(JJ) {
        return new ZF(...Array.from(JJ))
      }
      constructor() {
        this[fJ] = void 0, this[xJ] = this;
        const JJ = new Proxy(this, cF);
        return Object.defineProperty(this, GJ, {
          value: new bZ(JJ, this),
          enumerable: !1,
          writable: !0
        }), arguments.length > 0 && this.push(...arguments), JJ
      }
      static initializeForDecoder() {
        const JJ = Object.create(ZF.prototype);
        JJ.items = [], JJ.isMovingItems = !1, JJ._needsCompaction = !1, JJ[fJ] = void 0, JJ[xJ] = JJ;
        const cJ = new Proxy(JJ, cF);
        return WZ(JJ, cJ), cJ
      }
      set length(JJ) {
        0 === JJ ? this.clear() : JJ < this.items.length ? this.splice(JJ, this.length - JJ) : console.warn("ArraySchema: can't set .length to a higher value than its length.")
      }
      get length() {
        return this.items.length
      }
      pauseTracking() {
        this[GJ].pause()
      }
      resumeTracking() {
        this[GJ].resume()
      }
      untracked(JJ) {
        return this[GJ].untracked(JJ)
      }
      get isTrackingPaused() {
        return this[GJ].paused
      }
      push() {
        const JJ = this[xJ],
          cJ = JJ.items,
          ZJ = JJ.tmpItems,
          FJ = JJ[GJ],
          eJ = JJ[fJ];
        let XJ = ZJ.length;
        for (let AJ = 0, qJ = arguments.length; AJ < qJ; AJ++, XJ++) {
          const qJ = AJ < 0 || arguments.length <= AJ ? void 0 : arguments[AJ];
          if (void 0 === qJ || null === qJ) return;
          "object" === typeof qJ && eJ && lZ(qJ, eJ, JJ, AJ), FJ.indexedOperation(XJ, UJ.ADD), cJ.push(qJ), ZJ.push(qJ), qJ[GJ]?.setParent(this, FJ.root, XJ)
        }
        return XJ
      }
      pop() {
        const JJ = this[xJ],
          cJ = JJ.tmpItems,
          ZJ = JJ.deletedIndexes;
        let FJ = -1;
        for (let eJ = cJ.length - 1; eJ >= 0; eJ--)
          if (!0 !== ZJ[eJ]) {
            FJ = eJ;
            break
          } if (FJ < 0) return;
        const UJ = JJ.$isUnsentAdd(FJ);
        return JJ[GJ].delete(FJ), UJ ? JJ.$cancelAdd(FJ) : ZJ[FJ] = !0, JJ.items.pop()
      }
      at(JJ) {
        return JJ < 0 && (JJ += this.length), this.items[JJ]
      }
      $wireIndex(JJ) {
        const cJ = this.deletedIndexes;
        if (0 === cJ.length) return JJ;
        const ZJ = this.tmpItems;
        let FJ = 0;
        for (let UJ = 0; UJ < ZJ.length; UJ++)
          if (!0 !== cJ[UJ]) {
            if (FJ === JJ) return UJ;
            FJ++
          } return ZJ.length + (JJ - FJ)
      }
      $isUnsentAdd(JJ) {
        const cJ = this[GJ];
        return 0 === (576 & cJ.flags) && !cJ.paused && "string" !== typeof this[fJ] && cJ.operationAt(JJ) === UJ.ADD
      }
      $cancelAdd(JJ) {
        let cJ = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        const ZJ = this[GJ],
          FJ = this.tmpItems[JJ];
        this.tmpItems.splice(JJ, 1), this.deletedIndexes.length > 0 && this.deletedIndexes.splice(JJ, 1), ZJ.removeAt(JJ, 1);
        const UJ = FJ?.[GJ];
        void 0 !== UJ && void 0 === UJ.root && UJ.removeParent(this), cJ && this.$reindexChildren(JJ)
      }
      $reindexChildren(JJ, cJ) {
        if (!this[GJ].hasFilteredFields) return;
        if ("string" === typeof this[fJ]) return;
        const ZJ = this.tmpItems,
          FJ = ZJ.length;
        if (void 0 !== cJ)
          for (; JJ < FJ && ZJ[JJ] === cJ[JJ];) JJ++;
        for (let UJ = JJ; UJ < FJ; UJ++) ZJ[UJ]?.[GJ]?.setParentIndex(this, UJ)
      }
      $changeAt(JJ, cJ) {
        if (void 0 === cJ || null === cJ) return void console.error("ArraySchema items cannot be null nor undefined; Use `splice(index, 1)` instead.");
        if (this.items[JJ] === cJ) return;
        const ZJ = void 0 !== this.items[JJ] ? "object" === typeof cJ ? UJ.DELETE_AND_ADD : UJ.REPLACE : UJ.ADD,
          FJ = this.$wireIndex(JJ),
          eJ = this[GJ];
        return eJ.change(FJ, ZJ), cJ[GJ]?.setParent(this, eJ.root, FJ), FJ
      }
      $deleteAt(JJ, cJ) {
        this[GJ].delete(this.$wireIndex(JJ), cJ)
      }
      $setAt(JJ, cJ, ZJ) {
        ZJ === UJ.ADD && void 0 !== this.items[JJ] ? this.items.splice(JJ, 0, cJ) : ZJ === UJ.DELETE_AND_MOVE ? (this.items.splice(JJ, 1), this.items[JJ] = cJ) : (JJ > this.items.length && (this._needsCompaction = !0), this.items[JJ] = cJ)
      }
      clear() {
        const JJ = this[xJ];
        if (0 === JJ.items.length) return;
        const cJ = JJ[GJ];
        cJ.forEachChild(((JJ, ZJ) => {
          cJ.root?.remove(JJ)
        })), cJ.discard(), cJ.operation(UJ.CLEAR), JJ.items.length = 0, JJ.tmpItems.length = 0
      } [vJ]() {
        const JJ = this[xJ] ?? this,
          cJ = JJ[GJ];
        if (cJ.isStreamCollection) throw new Error("@colyseus/schema: cannot reset a streamed ArraySchema (pooling not supported).");
        const ZJ = JJ.items;
        for (let FJ = 0; FJ < ZJ.length; FJ++) ZJ[FJ]?.[vJ]?.();
        JJ.items.length = 0, JJ.tmpItems.length = 0, JJ.deletedIndexes.length = 0, cJ.recycle(), JJ[AJ] = void 0
      }
      concat() {
        return new ZF(...this.items.concat(...arguments))
      }
      join(JJ) {
        return this.items.join(JJ)
      }
      reverse() {
        const JJ = this[xJ],
          cJ = JJ[GJ];
        if (cJ.has() || JJ.deletedIndexes.length > 0) {
          const cJ = JJ.items.slice().reverse();
          return this.clear(), this.push(...cJ), this
        }
        return cJ.operation(UJ.REVERSE), JJ.items.reverse(), JJ.tmpItems.reverse(), JJ.$reindexChildren(0), this
      }
      shift() {
        const JJ = this[xJ],
          cJ = JJ.items;
        if (0 === cJ.length) return;
        const ZJ = JJ[GJ],
          FJ = JJ.deletedIndexes;
        let eJ = 0;
        for (; !0 === FJ[eJ];) eJ++;
        const XJ = JJ.$isUnsentAdd(eJ);
        return ZJ.delete(eJ, UJ.DELETE), XJ ? JJ.$cancelAdd(eJ) : FJ[eJ] = !0, cJ.shift()
      }
      slice(JJ, cJ) {
        const ZJ = new ZF;
        return ZJ.push(...this.items.slice(JJ, cJ)), ZJ
      }
      sort() {
        let JJ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : JF;
        const cJ = this[xJ];
        cJ.isMovingItems = !0;
        const ZJ = cJ[GJ];
        return cJ.items.sort(JJ).forEach(((JJ, cJ) => ZJ.change(cJ, UJ.REPLACE))), cJ.tmpItems.sort(JJ), cJ.$reindexChildren(0), cJ.isMovingItems = !1, this
      }
      splice(JJ, cJ) {
        const ZJ = this[xJ],
          FJ = ZJ[GJ],
          eJ = ZJ.items,
          XJ = ZJ.tmpItems,
          AJ = ZJ.deletedIndexes,
          qJ = eJ.length,
          jJ = XJ.length;
        for (var YJ = arguments.length, hJ = new Array(YJ > 2 ? YJ - 2 : 0), DJ = 2; DJ < YJ; DJ++) hJ[DJ - 2] = arguments[DJ];
        const sJ = hJ.length,
          nJ = [];
        for (let UJ = 0; UJ < jJ; UJ++) !0 !== AJ[UJ] && nJ.push(UJ);
        let fJ;
        if (qJ > JJ) {
          void 0 === cJ && (cJ = qJ - JJ);
          for (let eJ = JJ; eJ < JJ + cJ; eJ++) {
            const JJ = nJ[eJ],
              cJ = ZJ.$isUnsentAdd(JJ);
            FJ.delete(JJ, UJ.DELETE), cJ ? (fJ ??= []).push(JJ) : AJ[JJ] = !0
          }
        } else cJ = 0;
        if (sJ > 0) {
          const eJ = nJ[JJ] ?? qJ,
            jJ = Math.min(sJ, cJ);
          for (let JJ = 0; JJ < jJ; JJ++) {
            const cJ = eJ + JJ;
            let ZJ;
            const qJ = void 0 !== fJ ? fJ.indexOf(cJ) : -1; - 1 !== qJ ? (fJ.splice(qJ, 1), ZJ = UJ.ADD) : ZJ = AJ[cJ] ? UJ.DELETE_AND_ADD : UJ.ADD, FJ.indexedOperation(cJ, ZJ), XJ[cJ] = hJ[JJ], AJ[cJ] = !1, hJ[JJ][GJ]?.setParent(this, FJ.root, cJ)
          }
          const YJ = sJ - jJ;
          if (YJ > 0) {
            const JJ = eJ + jJ;
            FJ.insertAt(JJ, YJ);
            for (let cJ = 0; cJ < YJ; cJ++) hJ[jJ + cJ][GJ]?.setParent(this, FJ.root, JJ + cJ);
            AJ.length > 0 && AJ.splice(JJ, 0, ...new Array(YJ).fill(!1)), XJ.splice(JJ, 0, ...hJ.slice(jJ)), ZJ.$reindexChildren(JJ + YJ)
          }
        }
        if (void 0 !== fJ && fJ.length > 0) {
          for (let JJ = fJ.length - 1; JJ >= 0; JJ--) ZJ.$cancelAdd(fJ[JJ], !1);
          ZJ.$reindexChildren(fJ[0])
        }
        return FJ.root?.enqueueChangeTree(FJ), eJ.splice(JJ, cJ, ...hJ)
      }
      unshift() {
        const JJ = this[xJ],
          cJ = JJ[GJ];
        cJ.unshift(arguments.length);
        for (let FJ = 0; FJ < arguments.length; FJ++)(FJ < 0 || arguments.length <= FJ ? void 0 : arguments[FJ])?.[GJ]?.setParent(this, cJ.root, FJ);
        const ZJ = JJ.deletedIndexes;
        return ZJ.length > 0 && ZJ.unshift(...new Array(arguments.length).fill(!1)), JJ.tmpItems.unshift(...arguments), JJ.$reindexChildren(arguments.length), JJ.items.unshift(...arguments)
      }
      indexOf(JJ, cJ) {
        return this.items.indexOf(JJ, cJ)
      }
      lastIndexOf(JJ) {
        let cJ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.length - 1;
        return this.items.lastIndexOf(JJ, cJ)
      }
      every(JJ, cJ) {
        return this.items.every(JJ, cJ)
      }
      some(JJ, cJ) {
        return this.items.some(JJ, cJ)
      }
      forEach(JJ, cJ) {
        return this.items.forEach(JJ, cJ)
      }
      map(JJ, cJ) {
        return this.items.map(JJ, cJ)
      }
      filter(JJ, cJ) {
        return this.items.filter(JJ, cJ)
      }
      reduce(JJ, cJ) {
        return this.items.reduce.apply(this.items, arguments)
      }
      reduceRight(JJ, cJ) {
        return this.items.reduceRight.apply(this.items, arguments)
      }
      find(JJ, cJ) {
        return this.items.find(JJ, cJ)
      }
      findIndex(JJ, cJ) {
        return this.items.findIndex(JJ, cJ)
      }
      fill(JJ, cJ, ZJ) {
        throw new Error("ArraySchema#fill() not implemented")
      }
      copyWithin(JJ, cJ, ZJ) {
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
        return ZF
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
      includes(JJ, cJ) {
        return this.items.includes(JJ, cJ)
      }
      flatMap(JJ, cJ) {
        throw new Error("ArraySchema#flatMap() is not supported.")
      }
      flat(JJ) {
        throw new Error("ArraySchema#flat() is not supported.")
      }
      findLast() {
        return this.items.findLast.apply(this.items, arguments)
      }
      findLastIndex() {
        for (var JJ = arguments.length, cJ = new Array(JJ), ZJ = 0; ZJ < JJ; ZJ++) cJ[ZJ] = arguments[ZJ];
        return this.items.findLastIndex.apply(this.items, arguments)
      }
      with(JJ, cJ) {
        const ZJ = this.items.slice();
        return JJ < 0 && (JJ += this.length), ZJ[JJ] = cJ, new ZF(...ZJ)
      }
      toReversed() {
        return this.items.slice().reverse()
      }
      toSorted(JJ) {
        return this.items.slice().sort(JJ)
      }
      toSpliced(JJ, cJ) {
        for (var ZJ = arguments.length, FJ = new Array(ZJ > 2 ? ZJ - 2 : 0), UJ = 2; UJ < ZJ; UJ++) FJ[UJ - 2] = arguments[UJ];
        const eJ = this.items.slice();
        return eJ.splice.apply(eJ, arguments), eJ
      }
      shuffle() {
        return this.move((JJ => {
          let cJ = this.items.length;
          for (; 0 != cJ;) {
            let JJ = Math.floor(Math.random() * cJ);
            cJ--, [this[cJ], this[JJ]] = [this[JJ], this[cJ]]
          }
        }))
      }
      move(JJ) {
        return this.isMovingItems = !0, JJ(this), this.isMovingItems = !1, this
      } [DJ](JJ) {
        let cJ = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        const ZJ = this[xJ] ?? this;
        return cJ || ZJ.deletedIndexes[JJ] ? ZJ.items[JJ] : ZJ.tmpItems[JJ] || ZJ.items[JJ]
      } [sJ](JJ) {
        const cJ = this[xJ] ?? this;
        cJ.items[JJ] = void 0, cJ._needsCompaction = !0
      } [rJ]() {
        const JJ = this.tmpItems;
        this.tmpItems = this.items.slice(), this.deletedIndexes.length > 0 && (this.$reindexChildren(0, JJ), this.deletedIndexes.length = 0)
      } [mJ]() {
        const JJ = this[xJ] ?? this;
        JJ._needsCompaction && (JJ._needsCompaction = !1, JJ.items = JJ.items.filter((JJ => void 0 !== JJ)))
      } [nJ](JJ, cJ, ZJ) {
        const FJ = this[xJ] ?? this,
          UJ = FJ.items;
        let eJ = !1;
        for (let XJ = 0; XJ < UJ.length; XJ++) {
          const AJ = UJ[XJ];
          JJ.has(XJ) ? ZJ(AJ) : (eJ = !0, cJ(AJ, XJ), FJ[sJ](XJ))
        }
        eJ && FJ[mJ]()
      }
      toArray() {
        return this.items.slice(0)
      }
      toJSON() {
        return this.toArray().map((JJ => "function" === typeof JJ.toJSON ? JJ.toJSON() : JJ))
      }
      clone(JJ) {
        let cJ;
        return JJ ? (cJ = new ZF, cJ.push(...this.items)) : cJ = new ZF(...this.map((JJ => JJ[GJ] ? JJ.clone() : JJ))), cJ
      }
    }
    Ec("array", {
      constructor: ZF
    });
    class FF {
      keyByIndex = new Map;
      indexByKey = Object.create(null);
      nextIndex = 0;
      snapshots;
      indexOf(JJ) {
        const cJ = this.indexByKey[JJ];
        return void 0 === cJ ? void 0 : cJ
      }
      assign(JJ) {
        const cJ = this.nextIndex++;
        return this.indexByKey[JJ] = cJ, this.keyByIndex.set(cJ, JJ), cJ
      }
      snapshot(JJ, cJ) {
        (this.snapshots ??= new Map).set(JJ, cJ)
      }
      forgetSnapshot(JJ) {
        this.snapshots?.delete(JJ)
      }
      snapshotAt(JJ) {
        return this.snapshots?.get(JJ)
      }
      setIndex(JJ, cJ) {
        this.keyByIndex.set(JJ, cJ), this.indexByKey[cJ] = JJ
      }
      keyOf(JJ) {
        return this.keyByIndex.get(JJ)
      }
      cleanupAfterEncode() {
        if (void 0 !== this.snapshots) {
          for (const [JJ] of this.snapshots) {
            const cJ = this.keyByIndex.get(JJ);
            void 0 !== cJ && (delete this.indexByKey[cJ], this.keyByIndex.delete(JJ))
          }
          this.snapshots.clear()
        }
      }
      reset() {
        this.indexByKey = Object.create(null), this.keyByIndex.clear(), this.snapshots?.clear(), this.nextIndex = 0
      }
    }
    class UF {
      [GJ];
      [AJ];
      childType;
      [fJ];
      $items = new Map;
      journal = new FF;
      _stream;
      get maxPerTick() {
        return this._stream?.maxPerTick ?? 32
      }
      set maxPerTick(JJ) {
        (this._stream ??= yc()).maxPerTick = JJ
      }
      get priority() {
        return this._stream?.priority
      }
      set priority(JJ) {
        (this._stream ??= yc()).priority = JJ
      }
      get $indexes() {
        return this.journal.keyByIndex
      }
      get _collectionIndexes() {
        return this.journal.indexByKey
      }
      static[jJ] = PZ;
      static[YJ] = BZ;
      static COLLECTION_KIND = TZ;
      static[hJ](JJ, cJ, ZJ) {
        if (!ZJ || "string" === typeof JJ[fJ]) return !0;
        const FJ = JJ[DJ](cJ) ?? JJ.journal.snapshotAt(cJ);
        return ZJ.isChangeTreeVisible(FJ[GJ])
      }
      static is(JJ) {
        return void 0 !== JJ.map
      }
      constructor(JJ) {
        if (Object.defineProperty(this, GJ, {
            value: new bZ(this),
            enumerable: !1,
            writable: !0
          }), this[fJ] = void 0, JJ)
          if (JJ instanceof Map || JJ instanceof UF) JJ.forEach(((JJ, cJ) => this.set(cJ, JJ)));
          else
            for (const cJ in JJ) this.set(cJ, JJ[cJ])
      }
      static initializeForDecoder() {
        const JJ = Object.create(UF.prototype);
        return JJ.$items = new Map, JJ.journal = new FF, JJ[fJ] = void 0, WZ(JJ), JJ
      } [Symbol.iterator]() {
        return this.$items[Symbol.iterator]()
      }
      get[Symbol.toStringTag]() {
        return this.$items[Symbol.toStringTag]
      }
      static get[Symbol.species]() {
        return UF
      }
      set(JJ, cJ) {
        if (void 0 === cJ || null === cJ) throw new Error(`MapSchema#set('${JJ}', ${cJ}): trying to set ${cJ} value on '${JJ}'.`);
        "object" === typeof cJ && this[fJ] && lZ(cJ, this[fJ], this, JJ), JJ = JJ.toString();
        const ZJ = this[GJ],
          FJ = void 0 !== cJ[GJ],
          eJ = this.journal;
        let XJ, AJ = eJ.indexOf(JJ);
        if (void 0 !== AJ) {
          XJ = UJ.REPLACE;
          const ZJ = this.$items.get(JJ);
          if (ZJ === cJ) return;
          FJ && (XJ = UJ.DELETE_AND_ADD, void 0 !== ZJ && ZJ[GJ].root?.remove(ZJ[GJ])), void 0 !== eJ.snapshotAt(AJ) && eJ.forgetSnapshot(AJ)
        } else AJ = eJ.assign(JJ), XJ = UJ.ADD;
        return this.$items.set(JJ, cJ), XJ === UJ.ADD && ZJ.isStreamCollection ? void 0 !== ZJ.root && Ic(this, ZJ.root, AJ) : ZJ.change(AJ, XJ), FJ && cJ[GJ].setParent(this, ZJ.root, AJ), this
      }
      get(JJ) {
        return this.$items.get(JJ)
      }
      getOrInsert(JJ, cJ) {
        return this.$items.has(JJ) ? this.$items.get(JJ) : (this.set(JJ, cJ), cJ)
      }
      getOrInsertComputed(JJ, cJ) {
        if (this.$items.has(JJ)) return this.$items.get(JJ);
        const ZJ = cJ(JJ);
        return this.set(JJ, ZJ), ZJ
      }
      delete(JJ) {
        if (!this.$items.has(JJ)) return !1;
        const cJ = this.journal.indexOf(JJ),
          ZJ = this.$items.get(JJ),
          FJ = this[GJ];
        if (FJ.isStreamCollection) {
          const UJ = FJ.root;
          let eJ = !1;
          return void 0 !== UJ && (eJ = Mc(this, UJ, this[AJ], cJ)), void 0 !== ZJ?.[GJ] && UJ?.remove(ZJ[GJ]), this.$items.delete(JJ), eJ || this.journal.snapshot(cJ, ZJ), !0
        }
        return this.journal.snapshot(cJ, ZJ), FJ.delete(cJ), this.$items.delete(JJ)
      }
      clear() {
        const JJ = this[GJ];
        JJ.discard(), JJ.forEachChild(((cJ, ZJ) => {
          JJ.root?.remove(cJ)
        })), this.journal.reset(), this.$items.clear(), JJ.operation(UJ.CLEAR)
      } [vJ]() {
        const JJ = this[GJ];
        if (JJ.isStreamCollection) throw new Error("@colyseus/schema: cannot reset a streamed MapSchema (pooling not supported).");
        this.$items.forEach((JJ => JJ?.[vJ]?.())), this.$items.clear(), this.journal.reset(), JJ.recycle(), this[AJ] = void 0
      }
      has(JJ) {
        return this.$items.has(JJ)
      }
      forEach(JJ) {
        this.$items.forEach(JJ)
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
        this[GJ].pause()
      }
      resumeTracking() {
        this[GJ].resume()
      }
      untracked(JJ) {
        return this[GJ].untracked(JJ)
      }
      get isTrackingPaused() {
        return this[GJ].paused
      }
      setIndex(JJ, cJ) {
        this.journal.setIndex(JJ, cJ)
      }
      getIndex(JJ) {
        return this.journal.keyOf(JJ)
      } [DJ](JJ) {
        const cJ = this.journal.keyOf(JJ);
        return void 0 !== cJ ? this.$items.get(cJ) : void 0
      } [sJ](JJ) {
        const cJ = this.journal.keyOf(JJ);
        void 0 !== cJ && (this.$items.delete(cJ), this.journal.keyByIndex.delete(JJ))
      } [nJ](JJ, cJ, ZJ) {
        let FJ = null;
        if (this.$items.forEach(((UJ, eJ) => {
            JJ.has(eJ) ? ZJ(UJ) : ((FJ ??= new Set).add(eJ), cJ(UJ, eJ))
          })), null !== FJ) {
          FJ.forEach((JJ => {
            this.$items.delete(JJ), delete this.journal.indexByKey[JJ]
          }));
          const JJ = [];
          this.journal.keyByIndex.forEach(((cJ, ZJ) => {
            FJ.has(cJ) && JJ.push(ZJ)
          }));
          for (let cJ = 0; cJ < JJ.length; cJ++) this.journal.keyByIndex.delete(JJ[cJ])
        }
      } [rJ]() {
        this.journal.cleanupAfterEncode()
      }
      _dropView(JJ) {
        gc(this, JJ)
      }
      _unregister() {}
      toJSON() {
        return Object.fromEntries(Array.from(this, (JJ => {
          let [cJ, ZJ] = JJ;
          return [cJ, "function" === typeof ZJ.toJSON ? ZJ.toJSON() : ZJ]
        })))
      }
      clone(JJ) {
        let cJ;
        return JJ ? cJ = Object.assign(new UF, this) : (cJ = new UF, this.forEach(((JJ, ZJ) => {
          JJ[GJ] ? cJ.set(ZJ, JJ.clone()) : cJ.set(ZJ, JJ)
        }))), cJ
      }
    }
    Ec("map", {
      constructor: UF
    });
    class eF {
      [GJ];
      [AJ];
      [fJ];
      $items = new Map;
      deletedItems = {};
      $refId = 0;
      _stream;
      get maxPerTick() {
        return this._stream?.maxPerTick ?? 32
      }
      set maxPerTick(JJ) {
        (this._stream ??= yc()).maxPerTick = JJ
      }
      get priority() {
        return this._stream?.priority
      }
      set priority(JJ) {
        (this._stream ??= yc()).priority = JJ
      }
      static[jJ] = kZ;
      static[YJ] = BZ;
      static COLLECTION_KIND = iZ;
      static[hJ](JJ, cJ, ZJ) {
        return !ZJ || "string" === typeof JJ[fJ] || ZJ.isChangeTreeVisible((JJ[DJ](cJ) ?? JJ.deletedItems[cJ])[GJ])
      }
      static is(JJ) {
        return void 0 !== JJ.collection
      }
      constructor(JJ) {
        Object.defineProperty(this, GJ, {
          value: new bZ(this),
          enumerable: !1,
          writable: !0
        }), this[fJ] = void 0, JJ && JJ.forEach((JJ => this.add(JJ)))
      }
      static initializeForDecoder() {
        const JJ = Object.create(eF.prototype);
        return JJ.$items = new Map, JJ.deletedItems = {}, JJ.$refId = 0, JJ[fJ] = void 0, WZ(JJ), JJ
      }
      add(JJ) {
        const cJ = this.$refId++,
          ZJ = this[GJ];
        return this.$items.set(cJ, JJ), ZJ.isStreamCollection ? void 0 !== ZJ.root && Ic(this, ZJ.root, cJ) : ZJ.change(cJ), void 0 !== JJ[GJ] && JJ[GJ].setParent(this, ZJ.root, cJ), cJ
      }
      at(JJ) {
        const cJ = Array.from(this.$items.keys())[JJ];
        return this.$items.get(cJ)
      }
      entries() {
        return this.$items.entries()
      }
      delete(JJ) {
        const cJ = this.$items.entries();
        let ZJ, FJ;
        for (;
          (FJ = cJ.next()) && !FJ.done;)
          if (JJ === FJ.value[1]) {
            ZJ = FJ.value[0];
            break
          } if (void 0 === ZJ) return !1;
        const UJ = this[GJ];
        if (UJ.isStreamCollection) {
          const JJ = UJ.root,
            cJ = this.$items.get(ZJ);
          return void 0 !== JJ && Mc(this, JJ, this[AJ], ZJ), void 0 !== cJ?.[GJ] && JJ?.remove(cJ[GJ]), this.deletedItems[ZJ] = cJ, this.$items.delete(ZJ)
        }
        return this.deletedItems[ZJ] = UJ.delete(ZJ), this.$items.delete(ZJ)
      }
      clear() {
        const JJ = this[GJ];
        JJ.discard(), JJ.forEachChild(((cJ, ZJ) => {
          JJ.root?.remove(cJ)
        })), this.$items.clear(), JJ.operation(UJ.CLEAR)
      } [vJ]() {
        const JJ = this[GJ];
        if (JJ.isStreamCollection) throw new Error("@colyseus/schema: cannot reset a streamed CollectionSchema (pooling not supported).");
        this.$items.forEach((JJ => JJ?.[vJ]?.())), this.$items.clear(), this.deletedItems = {}, this.$refId = 0, JJ.recycle(), this[AJ] = void 0
      }
      has(JJ) {
        return Array.from(this.$items.values()).some((cJ => cJ === JJ))
      }
      forEach(JJ) {
        this.$items.forEach(((cJ, ZJ, FJ) => JJ(cJ, ZJ, this)))
      }
      values() {
        return this.$items.values()
      }
      get size() {
        return this.$items.size
      }
      pauseTracking() {
        this[GJ].pause()
      }
      resumeTracking() {
        this[GJ].resume()
      }
      untracked(JJ) {
        return this[GJ].untracked(JJ)
      }
      get isTrackingPaused() {
        return this[GJ].paused
      } [Symbol.iterator]() {
        return this.$items.values()
      }
      setIndex(JJ, cJ) {}
      getIndex(JJ) {
        return JJ
      } [DJ](JJ) {
        return this.$items.get(JJ)
      } [sJ](JJ) {
        this.$items.delete(JJ)
      } [nJ](JJ, cJ, ZJ) {
        let FJ = null;
        if (this.$items.forEach(((UJ, eJ) => {
            JJ.has(eJ) ? ZJ(UJ) : ((FJ ??= []).push(eJ), cJ(UJ, eJ))
          })), null !== FJ)
          for (let UJ = 0; UJ < FJ.length; UJ++) this[sJ](FJ[UJ])
      } [rJ]() {
        for (const JJ in this.deletedItems) delete this.deletedItems[JJ]
      }
      _dropView(JJ) {
        gc(this, JJ)
      }
      _unregister() {}
      toArray() {
        return Array.from(this.$items.values())
      }
      toJSON() {
        const JJ = [];
        return this.forEach(((cJ, ZJ) => {
          JJ.push("function" === typeof cJ.toJSON ? cJ.toJSON() : cJ)
        })), JJ
      }
      clone(JJ) {
        let cJ;
        return JJ ? cJ = Object.assign(new eF, this) : (cJ = new eF, this.forEach((JJ => {
          JJ[GJ] ? cJ.add(JJ.clone()) : cJ.add(JJ)
        }))), cJ
      }
    }
    Ec("collection", {
      constructor: eF
    });
    class XF {
      [GJ];
      [AJ];
      [fJ];
      $items = new Map;
      deletedItems = {};
      $refId = 0;
      _stream;
      get maxPerTick() {
        return this._stream?.maxPerTick ?? 32
      }
      set maxPerTick(JJ) {
        (this._stream ??= yc()).maxPerTick = JJ
      }
      get priority() {
        return this._stream?.priority
      }
      set priority(JJ) {
        (this._stream ??= yc()).priority = JJ
      }
      static[jJ] = kZ;
      static[YJ] = BZ;
      static COLLECTION_KIND = uZ;
      static[hJ](JJ, cJ, ZJ) {
        return !ZJ || "string" === typeof JJ[fJ] || ZJ.isVisible((JJ[DJ](cJ) ?? JJ.deletedItems[cJ])[GJ])
      }
      static is(JJ) {
        return void 0 !== JJ.set
      }
      constructor(JJ) {
        Object.defineProperty(this, GJ, {
          value: new bZ(this),
          enumerable: !1,
          writable: !0
        }), this[fJ] = void 0, JJ && JJ.forEach((JJ => this.add(JJ)))
      }
      static initializeForDecoder() {
        const JJ = Object.create(XF.prototype);
        return JJ.$items = new Map, JJ.deletedItems = {}, JJ.$refId = 0, JJ[fJ] = void 0, WZ(JJ), JJ
      }
      add(JJ) {
        if (this.has(JJ)) return !1;
        const cJ = this.$refId++,
          ZJ = this[GJ];
        return this.$items.set(cJ, JJ), ZJ.isStreamCollection ? void 0 !== ZJ.root && Ic(this, ZJ.root, cJ) : ZJ.change(cJ, UJ.ADD), void 0 !== JJ[GJ] && JJ[GJ].setParent(this, ZJ.root, cJ), cJ
      }
      entries() {
        return this.$items.entries()
      }
      delete(JJ) {
        const cJ = this.$items.entries();
        let ZJ, FJ;
        for (;
          (FJ = cJ.next()) && !FJ.done;)
          if (JJ === FJ.value[1]) {
            ZJ = FJ.value[0];
            break
          } if (void 0 === ZJ) return !1;
        const UJ = this[GJ];
        if (UJ.isStreamCollection) {
          const JJ = UJ.root,
            cJ = this.$items.get(ZJ);
          return void 0 !== JJ && Mc(this, JJ, this[AJ], ZJ), void 0 !== cJ?.[GJ] && JJ?.remove(cJ[GJ]), this.deletedItems[ZJ] = cJ, this.$items.delete(ZJ)
        }
        return this.deletedItems[ZJ] = UJ.delete(ZJ), this.$items.delete(ZJ)
      }
      clear() {
        const JJ = this[GJ];
        JJ.discard(), this.$items.clear(), JJ.operation(UJ.CLEAR)
      } [vJ]() {
        const JJ = this[GJ];
        if (JJ.isStreamCollection) throw new Error("@colyseus/schema: cannot reset a streamed SetSchema (pooling not supported).");
        this.$items.forEach((JJ => JJ?.[vJ]?.())), this.$items.clear(), this.deletedItems = {}, this.$refId = 0, JJ.recycle(), this[AJ] = void 0
      }
      has(JJ) {
        const cJ = this.$items.values();
        let ZJ, FJ = !1;
        for (;
          (ZJ = cJ.next()) && !ZJ.done;)
          if (JJ === ZJ.value) {
            FJ = !0;
            break
          } return FJ
      }
      forEach(JJ) {
        this.$items.forEach(((cJ, ZJ, FJ) => JJ(cJ, ZJ, this)))
      }
      values() {
        return this.$items.values()
      }
      get size() {
        return this.$items.size
      }
      pauseTracking() {
        this[GJ].pause()
      }
      resumeTracking() {
        this[GJ].resume()
      }
      untracked(JJ) {
        return this[GJ].untracked(JJ)
      }
      get isTrackingPaused() {
        return this[GJ].paused
      } [Symbol.iterator]() {
        return this.$items.values()
      }
      setIndex(JJ, cJ) {}
      getIndex(JJ) {
        return JJ
      } [DJ](JJ) {
        return this.$items.get(JJ)
      } [sJ](JJ) {
        this.$items.delete(JJ)
      } [nJ](JJ, cJ, ZJ) {
        let FJ = null;
        if (this.$items.forEach(((UJ, eJ) => {
            JJ.has(eJ) ? ZJ(UJ) : ((FJ ??= []).push(eJ), cJ(UJ, eJ))
          })), null !== FJ)
          for (let UJ = 0; UJ < FJ.length; UJ++) this[sJ](FJ[UJ])
      } [rJ]() {
        for (const JJ in this.deletedItems) delete this.deletedItems[JJ]
      }
      _dropView(JJ) {
        gc(this, JJ)
      }
      _unregister() {}
      toArray() {
        return Array.from(this.$items.values())
      }
      toJSON() {
        const JJ = [];
        return this.forEach(((cJ, ZJ) => {
          JJ.push("function" === typeof cJ.toJSON ? cJ.toJSON() : cJ)
        })), JJ
      }
      clone(JJ) {
        let cJ;
        return JJ ? cJ = Object.assign(new XF, this) : (cJ = new XF, this.forEach((JJ => {
          JJ[GJ] ? cJ.add(JJ.clone()) : cJ.add(JJ)
        }))), cJ
      }
    }
    Ec("set", {
      constructor: XF
    });
    class AF {
      [GJ];
      [AJ];
      [fJ];
      $items = new Map;
      $nextPosition = 0;
      _itemIndex = new Map;
      _stream;
      get maxPerTick() {
        return this._stream?.maxPerTick ?? 32
      }
      set maxPerTick(JJ) {
        (this._stream ??= yc()).maxPerTick = JJ
      }
      get priority() {
        return this._stream?.priority
      }
      set priority(JJ) {
        (this._stream ??= yc()).priority = JJ
      }
      static $isStream = !0;
      static[jJ] = kZ;
      static[YJ] = BZ;
      static COLLECTION_KIND = RZ;
      static[hJ](JJ, cJ, ZJ) {
        if (!ZJ) return !0;
        const FJ = JJ[DJ](cJ);
        return void 0 !== FJ && ZJ.isVisible(FJ[GJ])
      }
      static is(JJ) {
        return JJ && void 0 !== JJ.stream
      }
      constructor() {
        Object.defineProperty(this, GJ, {
          value: new bZ(this),
          enumerable: !1,
          writable: !0
        }), this[fJ] = void 0
      }
      static initializeForDecoder() {
        const JJ = Object.create(AF.prototype);
        return JJ.$items = new Map, JJ.$nextPosition = 0, JJ._itemIndex = new Map, JJ[fJ] = void 0, WZ(JJ), JJ
      }
      add(JJ) {
        if (this._itemIndex.has(JJ)) return -1;
        const cJ = this.$nextPosition++;
        this.$items.set(cJ, JJ), this._itemIndex.set(JJ, cJ);
        const ZJ = this[GJ].root;
        return void 0 !== JJ[GJ] && JJ[GJ].setParent(this, ZJ, cJ), void 0 !== ZJ && Ic(this, ZJ, cJ), cJ
      }
      remove(JJ) {
        const cJ = this._itemIndex.get(JJ);
        if (void 0 === cJ) return !1;
        this._itemIndex.delete(JJ), this.$items.delete(cJ);
        const ZJ = this[GJ].root;
        return void 0 !== ZJ && (Mc(this, ZJ, this[AJ], cJ), void 0 !== JJ[GJ] && ZJ.remove(JJ[GJ])), !0
      }
      has(JJ) {
        return this._itemIndex.has(JJ)
      }
      clear() {
        const JJ = this[GJ].root;
        if (void 0 !== JJ) {
          ! function(JJ, cJ, ZJ) {
            const FJ = JJ._stream;
            if (void 0 !== FJ) {
              FJ.broadcastPending.clear();
              for (const JJ of FJ.sentBroadcast) FJ.broadcastDeletes.add(JJ);
              FJ.sentBroadcast.clear(), cJ.forEachActiveView((JJ => {
                FJ.pendingByView.get(JJ.id)?.clear();
                const cJ = FJ.sentByView.get(JJ.id);
                if (void 0 !== cJ && cJ.size > 0) {
                  let FJ = JJ.changes.get(ZJ);
                  void 0 === FJ && (FJ = new Map, JJ.changes.set(ZJ, FJ));
                  for (const JJ of cJ) FJ.set(JJ, UJ.DELETE);
                  cJ.clear()
                }
              }))
            }
          }(this, JJ, this[AJ]);
          for (const cJ of this.$items.values()) void 0 !== cJ[GJ] && JJ.remove(cJ[GJ])
        }
        this.$items.clear(), this._itemIndex.clear()
      }
      forEach(JJ) {
        for (const [cJ, ZJ] of this.$items) JJ(ZJ, cJ, this)
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
      setIndex(JJ, cJ) {}
      getIndex(JJ) {
        return JJ
      } [DJ](JJ) {
        return this.$items.get(JJ)
      } [sJ](JJ) {
        const cJ = this.$items.get(JJ);
        void 0 !== cJ && (this._itemIndex.delete(cJ), this.$items.delete(JJ))
      } [nJ]() {} [rJ]() {}
      toArray() {
        return Array.from(this.$items.values())
      }
      toJSON() {
        const JJ = [];
        return this.forEach((cJ => {
          JJ.push("function" === typeof cJ?.toJSON ? cJ.toJSON() : cJ)
        })), JJ
      }
      clone(JJ) {
        if (JJ) {
          return Object.assign(new AF, this)
        }
        const cJ = new AF;
        return cJ.maxPerTick = this.maxPerTick, this.forEach((JJ => {
          cJ.add("function" === typeof JJ?.clone ? JJ.clone() : JJ)
        })), cJ
      }
      _dropView(JJ) {
        gc(this, JJ)
      }
      _unregister() {}
    }
    Ec("stream", {
      constructor: AF
    });
    class qF {
      [EJ] = !0;
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
      constructor(JJ) {
        this._type = JJ
      }
      default (JJ) {
        return this._default = JJ, this._hasDefault = !0, this
      }
      view(JJ) {
        return this._view = JJ ?? -1, this
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
        const JJ = this._type;
        if (JJ && "object" === typeof JJ && void 0 !== JJ.array) throw new Error(Kc);
        return this._stream = !0, this
      }
      priority(JJ) {
        return this._streamPriority = JJ, this
      }
      deprecated() {
        let JJ = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
        return this._deprecated = !0, this._deprecatedThrows = JJ, this
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

    function jF(JJ) {
      return null != JJ && !0 === JJ[EJ]
    }

    function YF(JJ) {
      return () => new qF(JJ)
    }

    function hF(JJ) {
      if (jF(JJ)) {
        const cJ = JJ._type;
        throw new Error(`t.array/map/set/collection(): a t.* builder is not a valid element type \u2014 ${"string"===typeof cJ?`use the type name instead: t.array("${cJ}")`:'collections accept a Schema class or a primitive type name ("string", "number", \u2026)'}.`)
      }
      return JJ
    }

    function DF(JJ) {
      return new qF({
        quantized: Pc(JJ)
      })
    }
    const sF = Object.freeze({
        string: YF("string"),
        number: YF("number"),
        boolean: YF("boolean"),
        int8: YF("int8"),
        uint8: YF("uint8"),
        int16: YF("int16"),
        uint16: YF("uint16"),
        int32: YF("int32"),
        uint32: YF("uint32"),
        int64: YF("int64"),
        uint64: YF("uint64"),
        float32: YF("float32"),
        float64: YF("float64"),
        bigint64: YF("bigint64"),
        biguint64: YF("biguint64"),
        ref: JJ => new qF(JJ),
        array: JJ => new qF({
          array: hF(JJ)
        }),
        map: JJ => new qF({
          map: hF(JJ)
        }),
        set: JJ => new qF({
          set: hF(JJ)
        }),
        collection: JJ => new qF({
          collection: hF(JJ)
        }),
        stream: JJ => {
          const cJ = new qF({
            stream: hF(JJ)
          });
          return cJ._stream = !0, cJ
        },
        quantized: DF,
        angle: JJ => DF({
          min: 0,
          max: 2 * Math.PI,
          mode: "wrap",
          bits: JJ?.bits ?? 16
        })
      }),
      nF = -1;

    function GF(JJ) {
      return Nc.register(JJ), JJ
    }

    function fF() {
      let JJ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : nF;
      return function(cJ, ZJ) {
        const FJ = Lc.initialize(cJ.constructor);
        Lc.setTag(FJ, ZJ, JJ)
      }
    }

    function xF(JJ, cJ) {
      const ZJ = Lc.initialize(JJ.constructor);
      Lc.setUnreliable(ZJ, cJ)
    }

    function rF(JJ, cJ) {
      const ZJ = Lc.initialize(JJ.constructor);
      Lc.setPatchOnly(ZJ, cJ)
    }

    function vF(JJ, cJ) {
      const ZJ = Lc.initialize(JJ.constructor);
      Lc.setFullStateOnly(ZJ, cJ)
    }

    function mF(JJ, cJ) {
      return function(ZJ, FJ) {
        const UJ = ZJ.constructor;
        if (!JJ) throw new Error(`${UJ.name}: @type() reference provided for "${FJ}" is undefined. Make sure you don't have any circular dependencies.`);
        JJ = Tc(JJ, `${UJ.name}.${FJ}`), Nc.register(UJ);
        const eJ = Object.getPrototypeOf(UJ)[Symbol.metadata],
          XJ = Lc.initialize(UJ);
        let AJ = XJ[FJ];
        if (void 0 !== XJ[AJ]) {
          if (XJ[AJ].deprecated) return;
          if (void 0 !== XJ[AJ].type) {
            const JJ = new Error(`@colyseus/schema: Duplicate '${FJ}' definition on '${UJ.name}'.\nCheck @type() annotation`);
            throw new Error(`${JJ.message} ${JJ.stack.split("\n")[4].trim()}`)
          }
        } else AJ = XJ[SJ] ?? (eJ && eJ[SJ]) ?? -1, AJ++;
        if (cJ && cJ.manual) Lc.addField(XJ, AJ, FJ, JJ, {
          enumerable: !0,
          configurable: !0,
          writable: !0
        });
        else {
          const {
            complexTypeKlass: cJ,
            childType: ZJ
          } = Oc(JJ);
          Lc.addField(XJ, AJ, FJ, JJ, EF(FJ, AJ, ZJ, cJ))
        }
        XJ[VJ][FJ] && Object.defineProperty(ZJ, FJ, XJ[VJ][FJ]), ("string" === typeof JJ || kc(JJ)) && (XJ[yJ] || Object.defineProperty(XJ, yJ, {
          value: [],
          enumerable: !1,
          configurable: !0,
          writable: !0
        }), XJ[yJ][AJ] = "string" === typeof JJ ? cc[JJ] : zc(JJ.quantized))
      }
    }
    const QF = {
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

    function EF(JJ, cJ, ZJ, FJ) {
      let eJ;
      return eJ = FJ ? function(JJ, cJ, ZJ, FJ) {
        const eJ = FJ.constructor === ZF,
          XJ = FJ.constructor === UF;
        return function(JJ) {
          const FJ = this[QJ],
            AJ = FJ[cJ];
          if (JJ !== AJ) {
            if (void 0 !== JJ && null !== JJ) {
              if (!eJ || JJ instanceof ZF)
                if (!XJ || JJ instanceof UF) JJ[fJ] = ZJ;
                else {
                  const cJ = new UF;
                  if (cJ[fJ] = ZJ, JJ instanceof Map) JJ.forEach(((JJ, ZJ) => cJ.set(ZJ, JJ)));
                  else
                    for (const ZJ in JJ) cJ.set(ZJ, JJ[ZJ]);
                  JJ = cJ
                }
              else {
                const cJ = new ZF;
                cJ[fJ] = ZJ, cJ.push(...JJ), JJ = cJ
              }
              const FJ = this[GJ],
                jJ = this.constructor;
              void 0 !== AJ && null !== AJ && AJ[GJ] ? (FJ.root?.remove(AJ[GJ]), jJ[qJ](FJ, cJ, UJ.DELETE_AND_ADD)) : jJ[qJ](FJ, cJ, UJ.ADD), JJ[GJ]?.setParent(this, FJ.root, cJ)
            } else void 0 !== AJ && null !== AJ && this[GJ].delete(cJ);
            FJ[cJ] = JJ
          }
        }
      }(0, cJ, ZJ, FJ) : "string" === typeof ZJ ? function(JJ, cJ, ZJ) {
        const FJ = QF[ZJ],
          eJ = "string" === ZJ,
          XJ = "boolean" === ZJ;
        return function(ZJ) {
          const AJ = this[QJ],
            jJ = AJ[cJ];
          if (ZJ !== jJ) {
            if (void 0 !== ZJ && null !== ZJ) {
              if (!XJ && void 0 !== FJ && typeof ZJ !== FJ && (!eJ || null !== ZJ)) {
                const cJ = ZJ && ZJ.constructor ? ` (${ZJ.constructor.name})` : "";
                throw new oZ(`a '${FJ}' was expected, but '${JSON.stringify(ZJ)}'${cJ} was provided in ${this.constructor.name}#${JJ}`)
              }
              this.constructor[qJ](this[GJ], cJ, UJ.ADD)
            } else void 0 !== jJ && null !== jJ && this[GJ].delete(cJ);
            AJ[cJ] = ZJ
          }
        }
      }(JJ, cJ, ZJ) : kc(ZJ) ? function(JJ, cJ, ZJ) {
        return function(FJ) {
          const eJ = this[QJ],
            XJ = eJ[cJ];
          if (void 0 !== FJ && null !== FJ) {
            if ("number" !== typeof FJ) throw new oZ(`a 'number' was expected, but '${JSON.stringify(FJ)}' was provided in ${this.constructor.name}#${JJ}`);
            if ((FJ = dc(ZJ, pc(ZJ, FJ))) === XJ) return;
            this.constructor[qJ](this[GJ], cJ, UJ.ADD)
          } else {
            if (FJ === XJ) return;
            void 0 !== XJ && null !== XJ && this[GJ].delete(cJ)
          }
          eJ[cJ] = FJ
        }
      }(JJ, cJ, ZJ.quantized) : function(JJ, cJ, ZJ) {
        return function(FJ) {
          const eJ = this[QJ],
            XJ = eJ[cJ];
          if (FJ !== XJ) {
            if (void 0 !== FJ && null !== FJ) {
              lZ(FJ, ZJ, this, JJ);
              const eJ = this[GJ],
                AJ = this.constructor;
              void 0 !== XJ && null !== XJ && XJ[GJ] ? (eJ.root?.remove(XJ[GJ]), AJ[qJ](eJ, cJ, UJ.DELETE_AND_ADD)) : AJ[qJ](eJ, cJ, UJ.ADD), FJ[GJ]?.setParent(this, eJ.root, cJ)
            } else void 0 !== XJ && null !== XJ && this[GJ].delete(cJ);
            eJ[cJ] = FJ
          }
        }
      }(JJ, cJ, ZJ), {
        get: function() {
          return this[QJ][cJ]
        },
        set: eJ,
        enumerable: !0,
        configurable: !0
      }
    }

    function VF() {
      let JJ = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
      return function(cJ, ZJ) {
        const FJ = Lc.initialize(cJ.constructor);
        Lc.setDeprecated(FJ, ZJ), JJ && (FJ[VJ] ??= {}, FJ[VJ][ZJ] = {
          get: function() {
            throw new Error(`${ZJ} is deprecated.`)
          },
          set: function(JJ) {},
          enumerable: !1,
          configurable: !0
        }, Object.defineProperty(cJ, ZJ, FJ[VJ][ZJ]))
      }
    }
    let KF = !1;

    function yF(JJ, cJ, ZJ) {
      KF || (KF = !0, console.warn("@colyseus/schema: defineTypes() is deprecated and will be removed in a future release. Use schema() with t.* field builders instead \u2192 https://docs.colyseus.io/state/schema"));
      for (let FJ in cJ) mF(cJ[FJ], ZJ)(JJ.prototype, FJ);
      return JJ
    }

    function SF(JJ, cJ) {
      let ZJ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : MF;
      if (null == JJ || "object" !== typeof JJ) throw new Error(`schema(): first argument must be a fields object (got ${typeof JJ}).`);
      const FJ = {},
        UJ = {},
        eJ = {},
        XJ = {},
        AJ = (JJ, cJ) => {
          if (cJ.hasDefault)((JJ, cJ) => {
            "function" === typeof cJ ? XJ[JJ] = cJ : cJ && "function" === typeof cJ.clone ? XJ[JJ] = () => cJ.clone() : eJ[JJ] = cJ
          })(JJ, cJ.default);
          else if (!cJ.optional) {
            const ZJ = function(JJ) {
              if (JJ && "object" === typeof JJ) {
                if (void 0 !== JJ.array) return () => new ZF;
                if (void 0 !== JJ.map) return () => new UF;
                if (void 0 !== JJ.set) return () => new XF;
                if (void 0 !== JJ.collection) return () => new eF;
                if (void 0 !== JJ.stream) return () => new AF
              } else if ("function" === typeof JJ && MF.is(JJ) && (!JJ.prototype.initialize || 0 === JJ.prototype.initialize.length)) return () => new JJ
            }(cJ.type);
            ZJ && (XJ[JJ] = ZJ)
          }
        },
        qJ = {},
        jJ = [],
        YJ = [],
        hJ = {},
        DJ = [],
        sJ = [],
        nJ = {},
        GJ = [];
      for (const QJ in JJ) {
        const ZJ = JJ[QJ],
          eJ = `schema(${cJ?`'${cJ}'`:""}): field '${QJ}'`;
        if (jF(ZJ)) {
          const JJ = ZJ.toDefinition();
          if (JJ.noSync) {
            if (void 0 !== JJ.view || JJ.unreliable || JJ.patchOnly || JJ.fullStateOnly || JJ.stream) throw new Error(`${eJ} uses .noSync() together with a sync-only modifier (.view/.unreliable/.patchOnly/.fullStateOnly/.stream). A local-only field cannot be synchronized.`);
            AJ(QJ, JJ);
            continue
          }
          if (JJ.patchOnly && JJ.fullStateOnly) throw new Error(`${eJ} uses .patchOnly() together with .fullStateOnly(). Those are the only two delivery channels, so the field would never reach a client \u2014 use .noSync() if that is intended.`);
          const cJ = Tc(JJ.type, eJ);
          if ("function" === typeof cJ && !MF.is(cJ)) throw new Error(`${eJ} is a synced ref to non-Schema class '${cJ.name||"(anonymous)"}' \u2014 use .noSync(), or Metadata.setFields().`);
          FJ[QJ] = cJ, void 0 !== JJ.view && (qJ[QJ] = JJ.view), JJ.unreliable && jJ.push(QJ), JJ.patchOnly && YJ.push(QJ), JJ.deprecated && (hJ[QJ] = JJ.deprecatedThrows), JJ.fullStateOnly && DJ.push(QJ), JJ.stream && sJ.push(QJ), void 0 !== JJ.streamPriority && (nJ[QJ] = JJ.streamPriority), JJ.optional && GJ.push(QJ), AJ(QJ, JJ)
        } else {
          if ("function" !== typeof ZJ) throw new Error(`${eJ} must be a t.* builder, Schema subclass, or method (got ${typeof ZJ}).`);
          MF.is(ZJ) ? (FJ[QJ] = ZJ, ZJ.prototype.initialize && 0 !== ZJ.prototype.initialize.length || (XJ[QJ] = () => new ZJ)) : UJ[QJ] = ZJ
        }
      }
      const fJ = JJ => {
          for (const cJ in eJ) JJ[cJ] = eJ[cJ];
          for (const cJ in XJ) JJ[cJ] = XJ[cJ]()
        },
        xJ = () => {
          const JJ = {};
          return fJ(JJ), JJ
        },
        rJ = "function" === typeof UJ.initialize,
        vJ = UJ.initialize ?? ZJ._initialize,
        mJ = class extends ZJ {
          constructor() {
            for (var JJ = arguments.length, cJ = new Array(JJ), ZJ = 0; ZJ < JJ; ZJ++) cJ[ZJ] = arguments[ZJ];
            const UJ = cJ[0];
            void 0 === UJ ? (super(), fJ(this)) : super(Object.assign(xJ(), rJ ? (JJ => {
              const cJ = Object.keys(FJ),
                ZJ = {};
              for (const FJ in JJ) cJ.includes(FJ) || (ZJ[FJ] = JJ[FJ]);
              return ZJ
            })(UJ) : UJ)), vJ && new.target === mJ && vJ.apply(this, cJ)
          }
        };
      cJ && Object.defineProperty(mJ, "name", {
        value: cJ
      }), Lc.setFields(mJ, FJ), mJ._getDefaultValues = xJ, mJ._initialize = vJ, Object.assign(mJ.prototype, UJ);
      for (const QJ in qJ) fF(qJ[QJ])(mJ.prototype, QJ);
      for (const QJ of jJ) xF(mJ.prototype, QJ);
      for (const QJ of YJ) rF(mJ.prototype, QJ);
      for (const QJ in hJ) VF(hJ[QJ])(mJ.prototype, QJ);
      if (DJ.length > 0 || sJ.length > 0) {
        const JJ = mJ[Symbol.metadata];
        for (const cJ of DJ) Lc.setFullStateOnly(JJ, cJ);
        for (const cJ of sJ) Lc.setStream(JJ, cJ);
        for (const cJ in nJ) Lc.setStreamPriority(JJ, cJ, nJ[cJ])
      }
      if (GJ.length > 0) {
        const JJ = mJ[Symbol.metadata];
        for (const cJ of GJ) JJ[JJ[cJ]].optional = !0
      }
      return mJ.extend = (JJ, cJ) => SF(JJ, cJ, mJ), mJ
    }

    function IF(JJ) {
      const cJ = JJ[GJ].root,
        ZJ = {
          ops: {},
          refs: []
        };
      let FJ = cJ.changes.next;
      for (; FJ;) {
        const JJ = FJ.changeTree;
        void 0 !== JJ ? (ZJ.refs.push(`refId#${JJ.ref[AJ]}`), JJ.forEach(((JJ, cJ) => {
          if (JJ < 0 || !cJ) return;
          const FJ = UJ[cJ];
          ZJ.ops[FJ] || (ZJ.ops[FJ] = 0), ZJ.ops[FJ]++
        })), FJ = FJ.next) : FJ = FJ.next
      }
      return ZJ
    }
    class MF {
      static[jJ] = HZ;
      static[YJ] = aZ;
      [AJ];
      [QJ];
      static initialize(JJ) {
        Object.defineProperty(JJ, GJ, {
          value: new bZ(JJ),
          enumerable: !1,
          writable: !0
        }), JJ[QJ] = []
      }
      static initializeForDecoder() {
        const JJ = Object.create(this.prototype);
        return WZ(JJ), JJ[QJ] = [], JJ
      }
      static reset(JJ) {
        const cJ = JJ?.[GJ];
        if (void 0 === cJ || "function" !== typeof cJ.recycle) throw new Error("@colyseus/schema: Schema.reset() requires a tracked (encoder-side) instance.");
        if (void 0 !== cJ.extraParents) throw new Error(`@colyseus/schema: cannot reset a shared instance (${JJ.constructor.name}) with multiple parents.`);
        JJ[vJ]()
      } [vJ]() {
        const JJ = this.constructor[Symbol.metadata],
          cJ = JJ?.[IJ] ?? [],
          ZJ = this[QJ];
        for (let FJ = 0; FJ < cJ.length; FJ++) {
          const JJ = ZJ[cJ[FJ]];
          JJ?.[vJ]?.()
        }
        this[GJ].recycle(), this[AJ] = void 0
      }
      static is(JJ) {
        const cJ = JJ[Symbol.metadata];
        return "object" === typeof cJ && null !== cJ
      }
      static isSchema(JJ) {
        return "function" === typeof JJ?.assign
      }
      static[qJ](JJ, cJ) {
        let ZJ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : UJ.ADD;
        JJ.change(cJ, ZJ)
      }
      static[hJ](JJ, cJ, ZJ) {
        const FJ = JJ.constructor[Symbol.metadata],
          UJ = FJ[cJ]?.tag;
        return void 0 === ZJ ? void 0 === UJ : void 0 === UJ || (UJ === nF ? ZJ.isChangeTreeVisible(JJ[GJ]) : ZJ.hasTagOnTree(JJ[GJ], UJ))
      }
      constructor(JJ) {
        MF.initialize(this), JJ && MF.assignProps(this, JJ)
      }
      assign(JJ) {
        return MF.assignProps(this, JJ), this
      }
      static assignProps(JJ, cJ) {
        const ZJ = JJ.constructor[Symbol.metadata];
        if (ZJ && void 0 !== ZJ[SJ])
          for (let UJ = 0; UJ <= ZJ[SJ]; UJ++) {
            const FJ = ZJ[UJ];
            if (!FJ) continue;
            const eJ = cJ[FJ.name];
            void 0 !== eJ && (JJ[FJ.name] = eJ)
          }
        const FJ = Object.keys(cJ);
        for (let UJ = 0; UJ < FJ.length; UJ++) {
          const eJ = FJ[UJ];
          ZJ && void 0 !== ZJ[eJ] || (JJ[eJ] = cJ[eJ])
        }
      }
      restore(JJ) {
        const cJ = this.constructor[Symbol.metadata];
        for (const ZJ in cJ) {
          const FJ = cJ[ZJ],
            UJ = FJ.name,
            eJ = FJ.type,
            XJ = JJ[UJ];
          if (void 0 !== XJ && null !== XJ)
            if ("string" === typeof eJ) this[UJ] = XJ;
            else if (MF.is(eJ)) {
            const JJ = new eJ;
            JJ.restore(XJ), this[UJ] = JJ
          } else if ("object" === typeof eJ) {
            const JJ = Object.keys(eJ)[0],
              cJ = eJ[JJ];
            if ("map" === JJ) {
              const JJ = this[UJ];
              for (const ZJ in XJ)
                if (MF.is(cJ)) {
                  const FJ = new cJ;
                  FJ.restore(XJ[ZJ]), JJ.set(ZJ, FJ)
                } else JJ.set(ZJ, XJ[ZJ])
            } else if ("array" === JJ) {
              const JJ = this[UJ];
              for (let ZJ = 0; ZJ < XJ.length; ZJ++)
                if (MF.is(cJ)) {
                  const FJ = new cJ;
                  FJ.restore(XJ[ZJ]), JJ.push(FJ)
                } else JJ.push(XJ[ZJ])
            }
          }
        }
        return this
      }
      setDirty(JJ, cJ) {
        const ZJ = this.constructor[Symbol.metadata];
        this[GJ].change(ZJ[ZJ[JJ]].index, cJ)
      }
      pauseTracking() {
        this[GJ].pause()
      }
      resumeTracking() {
        this[GJ].resume()
      }
      untracked(JJ) {
        return this[GJ].untracked(JJ)
      }
      get isTrackingPaused() {
        return this[GJ].paused
      }
      clone() {
        const JJ = Object.create(this.constructor.prototype);
        MF.initialize(JJ);
        const cJ = this.constructor[Symbol.metadata];
        for (const ZJ in cJ) {
          const FJ = cJ[ZJ].name;
          "object" === typeof this[FJ] && "function" === typeof this[FJ]?.clone ? JJ[FJ] = this[FJ].clone() : JJ[FJ] = this[FJ]
        }
        return JJ
      }
      toJSON() {
        const JJ = {},
          cJ = this.constructor[Symbol.metadata];
        for (const ZJ in cJ) {
          const FJ = cJ[ZJ],
            UJ = FJ.name;
          FJ.deprecated || null === this[UJ] || "undefined" === typeof this[UJ] || (JJ[UJ] = "function" === typeof this[UJ].toJSON ? this[UJ].toJSON() : this[UJ])
        }
        return JJ
      }
      discardAllChanges() {
        this[GJ].discardAll()
      } [DJ](JJ) {
        return this[this.constructor[Symbol.metadata][JJ].name]
      } [sJ](JJ) {
        this[this.constructor[Symbol.metadata][JJ].name] = void 0
      }
      static debugRefIds(JJ) {
        let cJ = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          ZJ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          FJ = arguments.length > 3 ? arguments[3] : void 0,
          UJ = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "";
        const eJ = cJ ? ` - ${JSON.stringify(JJ.toJSON())}` : "",
          XJ = JJ[GJ],
          qJ = JJ[AJ],
          jJ = FJ ? FJ.root.refCount[qJ] : XJ.refCount,
          YJ = jJ > 1 ? ` [\xd7${jJ}]` : "";
        let hJ = `${function(JJ){return new Array(JJ).fill(0).map(((cJ,ZJ)=>ZJ===JJ-1?"\u2514\u2500 ":"   ")).join("")}(ZJ)}${UJ}${JJ.constructor.name} (refId: ${qJ})${YJ}${eJ}\n`;
        return XJ.forEachChild(((UJ, eJ) => {
          let XJ = eJ;
          "number" === typeof eJ && JJ.$indexes && (XJ = JJ.$indexes.get(eJ) ?? eJ);
          const AJ = void 0 !== JJ.forEach && void 0 !== XJ ? `["${XJ}"]: ` : "";
          hJ += this.debugRefIds(UJ.ref, cJ, ZJ + 1, FJ, AJ)
        })), hJ
      }
      static debugRefIdEncodingOrder(JJ) {
        let cJ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "allChanges";
        const ZJ = [],
          FJ = JJ[GJ];
        if ("changes" === cJ) {
          let JJ = FJ.root.changes?.next;
          for (; JJ;) JJ.changeTree && ZJ.push(JJ.changeTree.ref[AJ]), JJ = JJ.next;
          return ZJ
        }
        const UJ = "allFilteredChanges" === cJ,
          eJ = new Set,
          XJ = JJ => {
            eJ.has(JJ) || (eJ.add(JJ), JJ.isFiltered === UJ && ZJ.push(JJ.ref[AJ]), JJ.forEachChild(((JJ, cJ) => XJ(JJ))))
          };
        return XJ(FJ), ZJ
      }
      static debugRefIdsFromDecoder(JJ) {
        return this.debugRefIds(JJ.state, !1, 0, JJ)
      }
      static debugChanges(JJ) {
        let cJ = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        const ZJ = JJ[GJ],
          FJ = cJ ? "allChanges" : "changes";
        let eJ = `${JJ.constructor.name} (${JJ[AJ]}) -> .${FJ}:\n`;
        return cJ ? ZJ.forEachLive((JJ => {
          eJ += `- [${JJ}]: ADD (${JSON.stringify(ZJ.getValue(Number(JJ),!0))})\n`
        })) : ZJ.forEach(((JJ, cJ) => {
          JJ < 0 || !cJ || (eJ += `- [${JJ}]: ${UJ[cJ]} (${JSON.stringify(ZJ.getValue(Number(JJ),!1))})\n`)
        })), eJ
      }
    }
    eJ(MF);
    const bF = {
      value: 0,
      enumerable: !1,
      writable: !0
    };
    class wF {
      types;
      nextUniqueId = 0;
      changeTrees = {};
      get refCount() {
        const JJ = {};
        for (const cJ in this.changeTrees) JJ[cJ] = this.changeTrees[cJ].refCount;
        return JJ
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
      enqueueFilterRefresh(JJ) {
        this.types.hasFilters && (JJ.flags & IZ || (JJ.flags |= IZ, this.pendingFilterRefresh.push(JJ)))
      }
      _nodePool = [];
      _nextViewId = 0;
      _freeViewIds = [];
      acquireViewId() {
        return this._freeViewIds.length > 0 ? this._freeViewIds.pop() : this._nextViewId++
      }
      releaseViewId(JJ) {
        this._freeViewIds.push(JJ)
      }
      activeViews = new Map;
      streamTrees = new Set;
      registerView(JJ) {
        this.activeViews.set(JJ.id, new WeakRef(JJ))
      }
      unregisterView(JJ) {
        this.activeViews.delete(JJ.id);
        const cJ = JJ.id;
        for (const ZJ of this.streamTrees) ZJ._dropView(cJ)
      }
      forEachActiveView(JJ) {
        for (const [cJ, ZJ] of this.activeViews) {
          const FJ = ZJ.deref();
          if (void 0 !== FJ) JJ(FJ);
          else {
            this.activeViews.delete(cJ);
            for (const JJ of this.streamTrees) JJ._dropView(cJ)
          }
        }
      }
      registerStream(JJ) {
        this.streamTrees.add(JJ)
      }
      unregisterStream(JJ) {
        this.streamTrees.delete(JJ)
      }
      constructor(JJ) {
        let cJ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        this.types = JJ, this.nextUniqueId = cJ
      }
      add(JJ) {
        const cJ = JJ.ref;
        void 0 === cJ[AJ] && (bF.value = this.nextUniqueId++, Object.defineProperty(cJ, AJ, bF));
        const ZJ = cJ[AJ],
          FJ = void 0 === this.changeTrees[ZJ];
        FJ && (this.changeTrees[ZJ] = JJ), JJ.needsRestage && (JJ.needsRestage = !1, JJ.forEachLiveWithCtx(JJ, ZZ));
        const UJ = FJ ? 0 : JJ.refCount;
        return JJ.refCount = UJ + 1, UJ > 0 && this.enqueueFilterRefresh(JJ), FJ
      }
      remove(JJ) {
        const cJ = JJ.refCount - 1;
        if (cJ <= 0) {
          if (JJ.root = void 0, delete this.changeTrees[JJ.ref[AJ]], JJ.isStreamCollection) {
            const cJ = JJ.ref;
            cJ._unregister?.(), this.unregisterStream(cJ)
          }
          this.removeFromQueue(JJ), this.removeFromUnreliableQueue(JJ), JJ.refCount = 0, JJ.needsRestage = !0, JJ.forEachChild(((cJ, ZJ) => {
            cJ.removeParent(JJ.ref) && (void 0 === cJ.parentRef || cJ.refCount > 0 ? this.remove(cJ) : this.moveNextToParent(cJ))
          }))
        } else JJ.refCount = cJ, this.enqueueFilterRefresh(JJ), this.recursivelyMoveNextToParent(JJ);
        return cJ
      }
      recursivelyMoveNextToParent(JJ) {
        this.moveNextToParent(JJ), JJ.forEachChild(((JJ, cJ) => this.recursivelyMoveNextToParent(JJ)))
      }
      moveNextToParent(JJ) {
        JJ.changesNode && this._moveNextToParentInList(this.changes, JJ, JJ.changesNode, "changesNode"), JJ.unreliableChangesNode && this._moveNextToParentInList(this.unreliableChanges, JJ, JJ.unreliableChangesNode, "unreliableChangesNode")
      }
      _moveNextToParentInList(JJ, cJ, ZJ, FJ) {
        const UJ = cJ.parent;
        if (!UJ || !UJ[GJ]) return;
        const eJ = UJ[GJ][FJ];
        eJ && eJ !== ZJ && (ZJ.position > eJ.position || (ZJ.prev ? ZJ.prev.next = ZJ.next : JJ.next = ZJ.next, ZJ.next ? ZJ.next.prev = ZJ.prev : JJ.tail = ZJ.prev, ZJ.prev = JJ.tail, ZJ.next = void 0, JJ.tail.next = ZJ, JJ.tail = ZJ, ZJ.position = JJ.nextPosition++))
      }
      enqueueChangeTree(JJ) {
        (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : JJ.changesNode) || (JJ.changesNode = this._appendToList(this.changes, JJ))
      }
      enqueueUnreliable(JJ) {
        (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : JJ.unreliableChangesNode) || (JJ.unreliableChangesNode = this._appendToList(this.unreliableChanges, JJ))
      }
      _appendToList(JJ, cJ) {
        const ZJ = this._nodePool;
        let FJ;
        return ZJ.length > 0 ? (FJ = ZJ.pop(), FJ.changeTree = cJ, FJ.next = void 0, FJ.prev = void 0) : FJ = {
          changeTree: cJ,
          next: void 0,
          prev: void 0,
          position: 0
        }, JJ.next ? (FJ.prev = JJ.tail, JJ.tail.next = FJ, JJ.tail = FJ) : (JJ.nextPosition = 0, JJ.next = FJ, JJ.tail = FJ), FJ.position = JJ.nextPosition++, FJ
      }
      releaseNode(JJ) {
        JJ.changeTree = void 0, JJ.prev = void 0, JJ.next = void 0, this._nodePool.push(JJ)
      }
      removeFromQueue(JJ) {
        return this._removeNode(this.changes, JJ, JJ.changesNode, "changesNode")
      }
      removeFromUnreliableQueue(JJ) {
        return this._removeNode(this.unreliableChanges, JJ, JJ.unreliableChangesNode, "unreliableChangesNode")
      }
      _removeNode(JJ, cJ, ZJ, FJ) {
        return !(!ZJ || ZJ.changeTree !== cJ) && (ZJ.prev ? ZJ.prev.next = ZJ.next : JJ.next = ZJ.next, ZJ.next ? ZJ.next.prev = ZJ.prev : JJ.tail = ZJ.prev, cJ[FJ] = void 0, this.releaseNode(ZJ), !0)
      }
    }

    function WF(JJ, cJ) {
      if (-1 === cJ || cJ >= JJ.length) return !1;
      const ZJ = JJ.length - 1;
      for (let FJ = cJ; FJ < ZJ; FJ++) JJ[FJ] = JJ[FJ + 1];
      return JJ.length = ZJ, !0
    }

    function gF(JJ, cJ, ZJ) {
      const FJ = ~ZJ,
        UJ = JJ.changeTrees;
      for (const eJ in UJ) {
        const JJ = UJ[eJ],
          ZJ = JJ.visibleViews;
        void 0 !== ZJ && cJ < ZJ.length && (ZJ[cJ] &= FJ);
        const XJ = JJ.subscribedViews;
        void 0 !== XJ && cJ < XJ.length && (XJ[cJ] &= FJ);
        const AJ = JJ.tagViews;
        void 0 !== AJ && AJ.forEach((JJ => {
          cJ < JJ.length && (JJ[cJ] &= FJ)
        }))
      }
    }
    const HF = new FinalizationRegistry((JJ => {
      let {
        root: cJ,
        id: ZJ,
        slot: FJ,
        bit: UJ
      } = JJ;
      gF(cJ, FJ, UJ), cJ.activeViews.delete(ZJ);
      for (const eJ of cJ.streamTrees) eJ._dropView(ZJ);
      cJ.releaseViewId(ZJ)
    }));

    function PF(JJ) {
      if (void 0 === JJ) return "undefined";
      if (null === JJ) return "null";
      const cJ = typeof JJ;
      return "string" === cJ ? JSON.stringify(JJ.length > 30 ? `${JJ.slice(0,30)}\u2026` : JJ) : "object" !== cJ && "function" !== cJ ? `${cJ} ${String(JJ)}` : Array.isArray(JJ) ? `Array(${JJ.length})` : JJ.constructor?.name ?? "Object"
    }
    class kF {
      iterable;
      items;
      id = -1;
      _root;
      _slot = 0;
      _bit = 0;
      changes = new Map;
      constructor() {
        let JJ = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        this.iterable = JJ, JJ && (this.items = [])
      }
      _bindRoot(JJ) {
        void 0 === this._root && (this._root = JJ, this.id = JJ.acquireViewId(), this._slot = this.id >> 5, this._bit = 1 << (31 & this.id), JJ.registerView(this), HF.register(this, {
          root: JJ,
          id: this.id,
          slot: this._slot,
          bit: this._bit
        }, this))
      }
      dispose() {
        void 0 !== this._root && (this._root.unregisterView(this), gF(this._root, this._slot, this._bit), this._root.releaseViewId(this.id), HF.unregister(this), this._root = void 0, this.id = -1)
      }
      isVisible(JJ) {
        const cJ = JJ.visibleViews,
          ZJ = this._slot;
        return void 0 !== cJ && ZJ < cJ.length && 0 !== (cJ[ZJ] & this._bit)
      }
      markVisible(JJ) {
        const cJ = this._slot;
        let ZJ = JJ.visibleViews;
        for (void 0 === ZJ && (ZJ = JJ.visibleViews = []); ZJ.length <= cJ;) ZJ.push(0);
        ZJ[cJ] |= this._bit
      }
      unmarkVisible(JJ) {
        const cJ = JJ.visibleViews;
        if (void 0 === cJ) return;
        const ZJ = this._slot;
        ZJ < cJ.length && (cJ[ZJ] &= ~this._bit)
      }
      isSubscribed(JJ) {
        const cJ = JJ.subscribedViews,
          ZJ = this._slot;
        return void 0 !== cJ && ZJ < cJ.length && 0 !== (cJ[ZJ] & this._bit)
      }
      _setSubscribed(JJ) {
        const cJ = this._slot;
        let ZJ = JJ.subscribedViews;
        for (void 0 === ZJ && (ZJ = JJ.subscribedViews = []); ZJ.length <= cJ;) ZJ.push(0);
        ZJ[cJ] |= this._bit
      }
      _clearSubscribed(JJ) {
        const cJ = JJ.subscribedViews;
        if (void 0 === cJ) return;
        const ZJ = this._slot;
        ZJ < cJ.length && (cJ[ZJ] &= ~this._bit)
      }
      hasTagOnTree(JJ, cJ) {
        const ZJ = JJ.tagViews;
        if (void 0 === ZJ) return !1;
        const FJ = this._slot,
          UJ = this._bit;
        for (let eJ = cJ; 0 !== eJ; eJ &= eJ - 1) {
          const JJ = ZJ.get(eJ & -eJ);
          if (void 0 !== JJ && FJ < JJ.length && 0 !== (JJ[FJ] & UJ)) return !0
        }
        return !1
      }
      addTag(JJ, cJ) {
        if (cJ === nF) return;
        let ZJ = JJ.tagViews;
        void 0 === ZJ && (ZJ = JJ.tagViews = new Map);
        const FJ = this._slot,
          UJ = this._bit;
        for (let eJ = cJ; eJ > 0; eJ &= eJ - 1) {
          const JJ = eJ & -eJ;
          let cJ = ZJ.get(JJ);
          for (void 0 === cJ && (cJ = [], ZJ.set(JJ, cJ)); cJ.length <= FJ;) cJ.push(0);
          cJ[FJ] |= UJ
        }
      }
      removeTag(JJ, cJ) {
        if (cJ === nF) return;
        const ZJ = JJ.tagViews;
        if (void 0 === ZJ) return;
        const FJ = this._slot,
          UJ = ~this._bit;
        for (let eJ = cJ; eJ > 0; eJ &= eJ - 1) {
          const JJ = ZJ.get(eJ & -eJ);
          void 0 !== JJ && FJ < JJ.length && (JJ[FJ] &= UJ)
        }
      }
      removeAllTagsOnTree(JJ) {
        const cJ = JJ.tagViews;
        if (void 0 === cJ) return;
        const ZJ = this._slot,
          FJ = ~this._bit;
        cJ.forEach((JJ => {
          ZJ < JJ.length && (JJ[ZJ] &= FJ)
        }))
      }
      add(JJ) {
        let cJ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : nF,
          ZJ = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        return this._add(JJ, cJ, ZJ, !1)
      }
      _addImmediate(JJ) {
        let cJ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : nF;
        this._add(JJ, cJ, !0, !0)
      }
      _add(JJ, cJ, ZJ, FJ) {
        const eJ = JJ?.[GJ];
        if (!eJ) return console.warn(`StateView#add(): expected a Schema instance or collection, received ${PF(JJ)}`), !1;
        const XJ = eJ.parent;
        if (!XJ && 0 !== JJ[AJ]) throw new Error(`Cannot add a detached instance to the StateView. Make sure to assign the "${eJ.ref.constructor.name}" instance to the state before calling view.add()`);
        void 0 === this._root && void 0 !== eJ.root && this._bindRoot(eJ.root);
        const qJ = XJ?.[GJ];
        if (!FJ && qJ?.isStreamCollection) return Wc(XJ, this.id, eJ.parentIndex), !0;
        const jJ = JJ.constructor[Symbol.metadata],
          YJ = this.isVisible(eJ);
        if (!this.iterable || !ZJ || YJ && -1 !== this.items.indexOf(JJ) || this.items.push(JJ), this.markVisible(eJ), ZJ && XJ && this.addParentOf(eJ, cJ), !FJ && eJ.isStreamCollection) return !0;
        if (cJ === nF && eJ.isNew) return this._markSubtreeVisible(eJ, cJ), !1;
        let hJ = this.changes.get(JJ[AJ]);
        void 0 === hJ && (hJ = new Map, this.changes.set(JJ[AJ], hJ));
        let DJ = !1;
        const sJ = eJ.encDescriptor.tags;
        if (eJ.forEachChild(((JJ, ZJ) => {
            const FJ = sJ[ZJ];
            if (void 0 !== FJ) {
              if (!(FJ === nF || cJ !== nF && 0 !== (FJ & cJ))) return
            }
            this.add(JJ.ref, cJ, !1) && (DJ = !0)
          })), cJ !== nF) {
          this.addTag(eJ, cJ);
          const JJ = jJ?.[bJ];
          if (void 0 !== JJ)
            for (let ZJ = cJ; ZJ > 0; ZJ &= ZJ - 1) JJ[ZJ & -ZJ]?.forEach((JJ => {
              eJ.getChange(JJ) !== UJ.DELETE && hJ.set(JJ, UJ.ADD)
            }))
        }
        if ((cJ === nF || !YJ) && (!eJ.isNew || DJ))
          if (eJ.isArray && "string" !== typeof eJ.refTarget[fJ]) eJ.refTarget.items.length > 0 && (hJ.set(-1, UJ.ADD), DJ = !0);
          else {
            const JJ = eJ.encDescriptor.tags;
            eJ.forEachLive((ZJ => {
              const FJ = JJ[ZJ];
              (void 0 === FJ || FJ === nF || cJ !== nF && 0 !== (FJ & cJ)) && (hJ.set(ZJ, UJ.ADD), DJ = !0)
            }))
          } return DJ
      }
      _markSubtreeVisible(JJ, cJ) {
        const ZJ = JJ.encDescriptor.tags;
        JJ.forEachChild(((JJ, FJ) => {
          const UJ = ZJ[FJ];
          if (void 0 !== UJ) {
            if (!(UJ === nF || cJ !== nF && 0 !== (UJ & cJ))) return
          }
          JJ.isNew ? (this.markVisible(JJ), this._markSubtreeVisible(JJ, cJ)) : this._add(JJ.ref, cJ, !1, !1)
        }))
      }
      addParentOf(JJ, cJ) {
        const ZJ = JJ.parent[GJ],
          FJ = JJ.parentIndex;
        this.isVisible(ZJ) || this.markVisible(ZJ);
        const eJ = ZJ.parent?.[GJ];
        if (eJ && this.addParentOf(ZJ, cJ), ZJ.hasFilteredFields && ZJ.getChange(FJ) !== UJ.DELETE) {
          let eJ = this.changes.get(ZJ.ref[AJ]);
          void 0 === eJ && (eJ = new Map, this.changes.set(ZJ.ref[AJ], eJ));
          const XJ = ZJ.encDescriptor.tags[FJ];
          void 0 !== XJ && XJ !== nF && 0 !== (XJ & cJ) && this.addTag(ZJ, cJ), eJ.set(ZJ.isArray ? JJ : FJ, UJ.ADD)
        }
      }
      _touchAncestorsOf(JJ) {
        let cJ = JJ.parent?.[GJ];
        if (void 0 === cJ) return;
        const ZJ = [];
        for (; void 0 !== cJ;) {
          if (cJ.hasFilteredFields) {
            const JJ = cJ.ref[AJ];
            if (this.changes.has(JJ)) break;
            ZJ.push(cJ)
          }
          cJ = cJ.parent?.[GJ]
        }
        for (let FJ = ZJ.length - 1; FJ >= 0; FJ--) this.changes.set(ZJ[FJ].ref[AJ], new Map)
      }
      remove(JJ) {
        let cJ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : nF,
          ZJ = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        const FJ = JJ?.[GJ];
        if (!FJ) return console.warn(`StateView#remove(): expected a Schema instance or collection, received ${PF(JJ)}`), this;
        const eJ = FJ.parent?.[GJ];
        if (eJ?.isStreamCollection) return this.unmarkVisible(FJ), this.iterable && !ZJ && WF(this.items, this.items.indexOf(JJ)),
          function(JJ, cJ, ZJ, FJ, eJ) {
            const XJ = JJ._stream;
            if (void 0 === XJ) return !1;
            const AJ = XJ.pendingByView.get(cJ);
            if (AJ?.has(FJ)) return AJ.delete(FJ), !1;
            const qJ = XJ.sentByView.get(cJ);
            if (qJ?.has(FJ)) {
              qJ.delete(FJ);
              let JJ = eJ.get(ZJ);
              return void 0 === JJ && (JJ = new Map, eJ.set(ZJ, JJ)), JJ.set(FJ, UJ.DELETE), !0
            }
          }(FJ.parent, this.id, FJ.parent[AJ], FJ.parentIndex, this.changes), this._recursiveDeleteVisibleChangeTree(FJ), this;
        if (FJ.isStreamCollection) {
          this.unmarkVisible(FJ), this.iterable && !ZJ && WF(this.items, this.items.indexOf(JJ));
          const cJ = FJ.ref,
            eJ = cJ._stream;
          if (void 0 !== eJ) {
            eJ.pendingByView.get(this.id)?.clear();
            const JJ = eJ.sentByView.get(this.id);
            if (void 0 !== JJ && JJ.size > 0) {
              const ZJ = cJ[AJ];
              let FJ = this.changes.get(ZJ);
              void 0 === FJ && (FJ = new Map, this.changes.set(ZJ, FJ));
              for (const cJ of JJ) FJ.set(cJ, UJ.DELETE);
              JJ.clear()
            }
          }
          return this
        }
        this.unmarkVisible(FJ), this.iterable && !ZJ && WF(this.items, this.items.indexOf(JJ));
        const XJ = FJ.ref,
          qJ = XJ.constructor[Symbol.metadata],
          jJ = XJ[AJ];
        this._touchAncestorsOf(FJ);
        let YJ = this.changes.get(jJ);
        if (void 0 === YJ && (YJ = new Map, this.changes.set(jJ, YJ)), cJ === nF) {
          const JJ = FJ.parent;
          if (JJ && !Lc.isValidInstance(JJ) && FJ.isFiltered) {
            const cJ = eJ.isArray ? FJ : FJ.parentIndex,
              ZJ = JJ[AJ];
            let XJ = this.changes.get(ZJ);
            void 0 === XJ ? (XJ = new Map, this.changes.set(ZJ, XJ)) : XJ.get(cJ) === UJ.ADD && this._dropPendingEntries(FJ), XJ.set(cJ, UJ.DELETE), this._recursiveDeleteVisibleChangeTree(FJ)
          } else qJ?.[MJ]?.forEach((JJ => this._removeViewField(FJ, YJ, JJ)))
        } else {
          const JJ = qJ?.[bJ];
          if (void 0 !== JJ)
            for (let ZJ = cJ; ZJ > 0; ZJ &= ZJ - 1) JJ[ZJ & -ZJ]?.forEach((JJ => this._removeViewField(FJ, YJ, JJ)))
        }
        return void 0 === cJ ? this.removeAllTagsOnTree(FJ) : this.removeTag(FJ, cJ), this
      }
      has(JJ) {
        return this.isVisible(JJ[GJ])
      }
      hasTag(JJ) {
        let cJ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : nF;
        return this.hasTagOnTree(JJ[GJ], cJ)
      }
      subscribe(JJ, cJ) {
        const ZJ = JJ?.[GJ];
        if (!ZJ) return console.warn(`StateView#subscribe(): expected a Schema collection, received ${PF(JJ)}`), this;
        if (void 0 === this._root && void 0 !== ZJ.root && this._bindRoot(ZJ.root), void 0 !== cJ)
          if (ZJ.isStreamCollection) {
            const ZJ = Sc(JJ);
            null === cJ ? ZJ.priorityByView?.delete(this.id) : (ZJ.priorityByView ??= new Map).set(this.id, cJ)
          } else {
            const cJ = JJ?.constructor?.name ?? "collection",
              FJ = ZJ.parent;
            if (void 0 === FJ) console.warn(`StateView#subscribe(): \`priority\` ignored \u2014 this ${cJ} is not attached to a state yet, so it cannot be identified as a stream. Subscribe after assigning it to the state.`);
            else {
              const JJ = FJ?.constructor?.[Symbol.metadata]?.[ZJ.parentIndex]?.name,
                UJ = JJ ? `${FJ.constructor.name}#${JJ}` : cJ;
              console.warn(`StateView#subscribe(): \`priority\` ignored \u2014 ${UJ} is a ${cJ}, not a streaming collection. Declare the field with .stream() (e.g. t.map(X).stream()) or use t.stream(X) to enable priority batching.`)
            }
          } if (this.isSubscribed(ZJ)) return this;
        const FJ = void 0 !== ZJ.parent && !this.isVisible(ZJ);
        if (FJ ? (this.addParentOf(ZJ, nF), this._add(JJ, nF, !1, !1)) : this.markVisible(ZJ), this._setSubscribed(ZJ), ZJ.isStreamCollection) {
          const cJ = JJ;
          ZJ.forEachChild(((JJ, ZJ) => {
            Wc(cJ, this.id, ZJ)
          }))
        } else FJ || ZJ.forEachChild((JJ => {
          this.markVisible(JJ)
        }));
        return this
      }
      unsubscribe(JJ) {
        const cJ = JJ?.[GJ];
        if (!cJ) return console.warn(`StateView#unsubscribe(): expected a Schema collection, received ${PF(JJ)}`), this;
        if (!this.isSubscribed(cJ)) return this;
        this._clearSubscribed(cJ);
        const ZJ = cJ.ref[AJ];
        if (cJ.isStreamCollection) {
          const cJ = JJ._stream;
          if (void 0 !== cJ) {
            cJ.pendingByView.get(this.id)?.clear();
            const JJ = cJ.sentByView.get(this.id);
            if (void 0 !== JJ && JJ.size > 0) {
              let cJ = this.changes.get(ZJ);
              void 0 === cJ && (cJ = new Map, this.changes.set(ZJ, cJ));
              for (const ZJ of JJ) cJ.set(ZJ, UJ.DELETE);
              JJ.clear()
            }
          }
        } else {
          const JJ = cJ.isArray;
          let FJ = this.changes.get(ZJ);
          cJ.forEachChild(((cJ, eJ) => {
            void 0 === FJ && (FJ = new Map, this.changes.set(ZJ, FJ)), FJ.set(JJ ? cJ : eJ, UJ.DELETE), this.unmarkVisible(cJ)
          }))
        }
        return this.unmarkVisible(cJ), this
      }
      clear() {
        if (!this.iterable) throw new Error("StateView#clear() is only available for iterable StateView's. Use StateView(iterable: true) constructor.");
        for (let JJ = 0, cJ = this.items.length; JJ < cJ; JJ++) this.remove(this.items[JJ], nF, !0);
        this.items.length = 0
      }
      isChangeTreeVisible(JJ) {
        let cJ = this.isVisible(JJ);
        if (!cJ && JJ.isVisibilitySharedWithParent)
          if (this.isVisible(JJ.parent[GJ])) this.markVisible(JJ), cJ = !0;
          else
            for (let ZJ = JJ.extraParents; void 0 !== ZJ; ZJ = ZJ.next) {
              const FJ = ZJ.ref[GJ];
              if (FJ.isFiltered && this.isVisible(FJ)) {
                this.markVisible(JJ), cJ = !0;
                break
              }
            }
        return cJ
      }
      _recursiveDeleteVisibleChangeTree(JJ) {
        JJ.forEachChild((JJ => {
          this.unmarkVisible(JJ), this._recursiveDeleteVisibleChangeTree(JJ)
        }))
      }
      _dropPendingEntries(JJ) {
        this.changes.delete(JJ.ref[AJ]), JJ.forEachChild((JJ => this._dropPendingEntries(JJ)))
      }
      _removeViewField(JJ, cJ, ZJ) {
        const FJ = cJ.get(ZJ) === UJ.ADD;
        cJ.set(ZJ, UJ.DELETE);
        const eJ = JJ.ref[JJ.encDescriptor.names[ZJ]],
          XJ = eJ?.[GJ];
        XJ && (this.unmarkVisible(XJ), this._recursiveDeleteVisibleChangeTree(XJ), FJ && this._dropPendingEntries(XJ))
      }
    }

    function pF(JJ) {
      JJ.structSwitchEmitted || (JJ.shouldEmitSwitch && (JJ.buffer[JJ.it.offset++] = 255, cc.number(JJ.buffer, JJ.ref[AJ], JJ.it)), JJ.structSwitchEmitted = !0)
    }

    function dF(JJ, cJ) {
      OF(JJ, cJ, UJ.ADD)
    }

    function zF(JJ, cJ) {
      if (cJ._fullSyncGen === JJ.gen) return;
      cJ._fullSyncGen = JJ.gen;
      if (!JJ.hasView || JJ.view.isChangeTreeVisible(cJ)) {
        const ZJ = cJ.encDescriptor;
        JJ.changeTree = cJ, JJ.ref = cJ.ref, JJ.encoder = ZJ.encoder, JJ.filter = ZJ.filter, JJ.metadata = ZJ.metadata, JJ.treeIsFiltered = cJ.isFiltered, JJ.isSchema = ZJ.isSchema, JJ.filterBitmask = ZJ.filterBitmask, JJ.tags = ZJ.tags, JJ.structSwitchEmitted = !1, JJ.shouldEmitSwitch = JJ.hasView || JJ.it.offset > JJ.initialOffset || cJ !== JJ.rootChangeTree, cJ.isArray && cJ.collDirty.size > 0 && (cJ.flags |= 512), UZ(cJ, JJ, dF)
      }
      xZ(cJ, JJ, NF)
    }

    function NF(JJ, cJ, ZJ) {
      zF(JJ, cJ)
    }

    function OF(JJ, cJ, ZJ) {
      if (cJ < 0) {
        if (JJ.treeIsFiltered !== JJ.emitFiltered) return;
        return pF(JJ), void(JJ.buffer[JJ.it.offset++] = 255 & Math.abs(cJ))
      }
      if ((JJ.isSchema ? JJ.treeIsFiltered || (cJ < 32 ? 0 !== (JJ.filterBitmask & 1 << cJ) : void 0 !== JJ.tags[cJ]) : JJ.treeIsFiltered) !== JJ.emitFiltered) return;
      const FJ = JJ.isEncodeAll ? UJ.ADD : ZJ;
      void 0 !== FJ && (void 0 === JJ.filter || JJ.filter(JJ.ref, cJ, JJ.view)) && (pF(JJ), JJ.encoder(JJ.self, JJ.buffer, JJ.changeTree, cJ, FJ, JJ.it, JJ.isEncodeAll, JJ.hasView, JJ.metadata))
    }

    function TF(JJ, cJ) {
      const ZJ = new Uint8Array(JJ.length + cJ.length);
      return ZJ.set(JJ, 0), ZJ.set(cJ, JJ.length), ZJ
    }
    class CF {
      static BUFFER_SIZE = 16384;
      sharedBuffer = new Uint8Array(CF.BUFFER_SIZE);
      context;
      state;
      root;
      constructor(JJ, cJ) {
        this.context = Nc.cache(JJ.constructor), this.root = cJ ?? new wF(this.context), this.setState(JJ)
      }
      setState(JJ) {
        this.state = JJ, this.state[GJ].setRoot(this.root)
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
        let JJ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
            offset: 0
          },
          cJ = arguments.length > 1 ? arguments[1] : void 0,
          ZJ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : this.sharedBuffer,
          FJ = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : JJ.offset;
        return this._encodeChannel(JJ, cJ, ZJ, FJ, !1)
      }
      encodeUnreliable() {
        let JJ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
            offset: 0
          },
          cJ = arguments.length > 1 ? arguments[1] : void 0,
          ZJ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : this.sharedBuffer,
          FJ = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : JJ.offset;
        return this._encodeChannel(JJ, cJ, ZJ, FJ, !0)
      }
      _encodeChannel(JJ, cJ, ZJ, FJ, UJ) {
        this.root.pendingFilterRefresh.length > 0 && XZ(this.root);
        const eJ = void 0 !== cJ,
          XJ = this.state[GJ],
          AJ = this._encodeCtx;
        AJ.self = this, AJ.buffer = ZJ, AJ.it = JJ, AJ.view = cJ, AJ.isEncodeAll = !1, AJ.hasView = eJ, AJ.emitFiltered = eJ;
        let qJ = UJ ? this.root.unreliableChanges : this.root.changes;
        for (; qJ = qJ.next;) {
          const ZJ = qJ.changeTree;
          if (eJ && !cJ.isChangeTreeVisible(ZJ)) continue;
          const jJ = UJ ? ZJ.unreliableRecorder : ZJ;
          if (!jJ || !jJ.has()) continue;
          const YJ = ZJ.encDescriptor;
          AJ.changeTree = ZJ, AJ.ref = ZJ.ref, AJ.encoder = YJ.encoder, AJ.filter = YJ.filter, AJ.metadata = YJ.metadata, AJ.treeIsFiltered = ZJ.isFiltered, AJ.isSchema = YJ.isSchema, AJ.filterBitmask = YJ.filterBitmask, AJ.tags = YJ.tags, AJ.structSwitchEmitted = !1, AJ.isRootTree = ZJ === XJ, AJ.shouldEmitSwitch = eJ || JJ.offset > FJ || !AJ.isRootTree, jJ.forEachWithCtx(AJ, OF)
        }
        return UJ || eJ || !this._isStreamBroadcastMode || this._emitStreamBroadcast(ZJ, JJ), JJ.offset > ZJ.byteLength ? (ZJ = this._resizeBuffer(ZJ, JJ.offset), JJ.offset = FJ, this._encodeChannel(JJ, cJ, ZJ, FJ, UJ)) : ZJ.subarray(0, JJ.offset)
      }
      encodeFullSync(JJ, cJ, ZJ, FJ) {
        let UJ = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : JJ.offset;
        this.root.pendingFilterRefresh.length > 0 && XZ(this.root);
        const eJ = void 0 !== FJ,
          XJ = this.state[GJ],
          AJ = this._encodeCtx;
        return AJ.self = this, AJ.buffer = cJ, AJ.it = JJ, AJ.view = FJ, AJ.isEncodeAll = !0, AJ.hasView = eJ, AJ.emitFiltered = ZJ, AJ.gen = ++this._fullSyncGen, AJ.initialOffset = UJ, AJ.rootChangeTree = XJ, zF(AJ, XJ), JJ.offset > cJ.byteLength ? (cJ = this._resizeBuffer(cJ, JJ.offset), JJ.offset = UJ, this.encodeFullSync(JJ, cJ, ZJ, FJ, UJ)) : cJ.subarray(0, JJ.offset)
      }
      _resizeBuffer(JJ, cJ) {
        const ZJ = Math.ceil(cJ / CF.BUFFER_SIZE) * CF.BUFFER_SIZE,
          FJ = new Uint8Array(ZJ);
        return FJ.set(JJ), JJ === this.sharedBuffer && (this.sharedBuffer = FJ), FJ
      }
      encodeAll() {
        let JJ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
            offset: 0
          },
          cJ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.sharedBuffer;
        return this.encodeFullSync(JJ, cJ, !1)
      }
      encodeAllView(JJ, cJ, ZJ) {
        let FJ = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : this.sharedBuffer;
        const UJ = ZJ.offset;
        return FJ = this.encodeFullSync(ZJ, FJ, !0, JJ, UJ), TF(FJ.subarray(0, cJ), FJ.subarray(UJ, ZJ.offset))
      }
      ensureCapacity(JJ, cJ) {
        if (cJ + CF.BUFFER_SIZE <= JJ.byteLength) return JJ;
        const ZJ = Math.ceil((cJ + CF.BUFFER_SIZE) / CF.BUFFER_SIZE) * CF.BUFFER_SIZE,
          FJ = new Uint8Array(ZJ);
        return FJ.set(JJ.subarray(0, cJ)), JJ === this.sharedBuffer && (this.sharedBuffer = FJ), FJ
      }
      encodeView(JJ, cJ, ZJ) {
        let FJ = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : this.sharedBuffer,
          eJ = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4];
        const XJ = ZJ.offset;
        this._emitStreamPriority(JJ);
        for (const qJ of JJ.changes.keys()) {
          const cJ = JJ.changes.get(qJ),
            eJ = this.root.changeTrees[qJ];
          if (void 0 === eJ) {
            JJ.changes.delete(qJ);
            continue
          }
          if (0 === cJ.size) continue;
          const XJ = eJ.encDescriptor,
            jJ = XJ.encoder,
            YJ = XJ.metadata,
            hJ = eJ.ref,
            sJ = eJ.refTarget;
          FJ = this.ensureCapacity(FJ, ZJ.offset), FJ[ZJ.offset++] = 255, cc.number(FJ, hJ[AJ], ZJ);
          for (const [qJ, nJ] of cJ) {
            let cJ;
            if (-1 === qJ) {
              const JJ = sJ.tmpItems,
                cJ = sJ.deletedIndexes;
              for (let XJ = 0; XJ < JJ.length; XJ++) void 0 !== JJ[XJ] && !0 !== cJ[XJ] && jJ(this, FJ, eJ, XJ, UJ.ADD, ZJ, !1, !0, YJ);
              continue
            }
            if ("number" === typeof qJ) cJ = qJ;
            else {
              const ZJ = qJ.indexInParent(hJ);
              if (void 0 === ZJ) continue;
              if (cJ = ZJ, nJ === UJ.ADD && eJ.getChange(cJ) === UJ.DELETE) {
                JJ.changes.delete(qJ.ref[AJ]);
                continue
              }
            }
            jJ(this, FJ, eJ, cJ, void 0 !== sJ[DJ](cJ) && nJ || UJ.DELETE, ZJ, !1, !0, YJ)
          }
        }
        return JJ.changes.clear(), FJ = this.encode(ZJ, JJ, FJ), eJ ? TF(FJ.subarray(0, cJ), FJ.subarray(XJ, ZJ.offset)) : FJ.subarray(XJ, ZJ.offset)
      }
      encodeUnreliableView(JJ, cJ, ZJ) {
        let FJ = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : this.sharedBuffer;
        const UJ = ZJ.offset;
        return FJ = this.encodeUnreliable(ZJ, JJ, FJ, UJ), TF(FJ.subarray(0, cJ), FJ.subarray(UJ, ZJ.offset))
      }
      _emitStreamBroadcast(JJ, cJ) {
        const ZJ = this.root.streamTrees;
        for (const FJ of ZJ) {
          const ZJ = FJ,
            eJ = ZJ[GJ],
            XJ = ZJ[AJ];
          if (void 0 === XJ) continue;
          const qJ = ZJ._stream,
            jJ = qJ.broadcastDeletes,
            YJ = qJ.broadcastPending,
            hJ = qJ.sentBroadcast,
            sJ = jJ.size > 0,
            nJ = YJ.size > 0,
            fJ = eJ.encDescriptor,
            xJ = fJ.encoder,
            rJ = fJ.metadata;
          if (sJ || nJ) {
            if (JJ[cJ.offset++] = 255, cc.number(JJ, XJ, cJ), sJ) {
              for (const ZJ of jJ) xJ(this, JJ, eJ, ZJ, UJ.DELETE, cJ, !1, !1, rJ);
              jJ.clear()
            }
            const FJ = qJ.maxPerTick,
              nJ = [];
            let fJ = 0;
            const vJ = [];
            for (const XJ of YJ) {
              if (fJ >= FJ) break;
              const AJ = ZJ[DJ](XJ);
              void 0 !== AJ ? (xJ(this, JJ, eJ, XJ, UJ.ADD, cJ, !1, !1, rJ), hJ.add(XJ), nJ.push(AJ), vJ.push(XJ), fJ++) : vJ.push(XJ)
            }
            for (const JJ of vJ) YJ.delete(JJ);
            for (const ZJ of nJ) {
              const FJ = ZJ[GJ];
              if (void 0 === FJ) continue;
              const eJ = ZJ[AJ];
              if (void 0 === eJ) continue;
              JJ[cJ.offset++] = 255, cc.number(JJ, eJ, cJ);
              const XJ = FJ.encDescriptor,
                qJ = XJ.encoder,
                jJ = XJ.metadata;
              FJ.forEachLive((ZJ => {
                Lc.hasUnreliableAtIndex(jJ, ZJ) || qJ(this, JJ, FJ, ZJ, UJ.ADD, cJ, !1, !1, jJ)
              }))
            }
          }
          for (const FJ of hJ) {
            const UJ = ZJ[DJ](FJ);
            if (void 0 === UJ) continue;
            const eJ = UJ[GJ];
            if (void 0 === eJ || !eJ.has()) continue;
            const XJ = UJ[AJ];
            if (void 0 === XJ) continue;
            JJ[cJ.offset++] = 255, cc.number(JJ, XJ, cJ);
            const qJ = eJ.encDescriptor,
              jJ = qJ.encoder,
              YJ = qJ.metadata;
            eJ.forEach(((ZJ, FJ) => {
              ZJ < 0 || Lc.hasUnreliableAtIndex(YJ, ZJ) || jJ(this, JJ, eJ, ZJ, FJ, cJ, !1, !1, YJ)
            }))
          }
        }
      }
      _emitStreamPriority(JJ) {
        const cJ = this.root.streamTrees;
        if (0 === cJ.size) return;
        const ZJ = JJ.id;
        for (const FJ of cJ) {
          const cJ = FJ,
            eJ = cJ._stream,
            XJ = eJ.pendingByView.get(ZJ);
          if (void 0 === XJ || 0 === XJ.size) continue;
          const qJ = eJ.priorityByView?.get(ZJ),
            jJ = void 0 !== qJ,
            YJ = eJ.priority,
            hJ = eJ.maxPerTick,
            sJ = [],
            nJ = [];
          if (jJ || void 0 !== YJ) {
            const ZJ = [],
              FJ = [];
            let UJ = 0;
            for (const eJ of XJ) {
              const XJ = cJ[DJ](eJ);
              if (void 0 === XJ) {
                nJ.push(eJ);
                continue
              }
              const AJ = jJ ? qJ(XJ) : YJ(JJ, XJ);
              if (UJ < hJ) {
                let JJ = UJ++;
                for (; JJ > 0 && FJ[JJ - 1] < AJ;) FJ[JJ] = FJ[JJ - 1], ZJ[JJ] = ZJ[JJ - 1], JJ--;
                FJ[JJ] = AJ, ZJ[JJ] = eJ
              } else if (AJ > FJ[hJ - 1]) {
                let JJ = hJ - 1;
                for (; JJ > 0 && FJ[JJ - 1] < AJ;) FJ[JJ] = FJ[JJ - 1], ZJ[JJ] = ZJ[JJ - 1], JJ--;
                FJ[JJ] = AJ, ZJ[JJ] = eJ
              }
            }
            for (let JJ = 0; JJ < UJ; JJ++) sJ.push(ZJ[JJ])
          } else
            for (const JJ of XJ) {
              if (sJ.length >= hJ) break;
              sJ.push(JJ)
            }
          for (const JJ of nJ) XJ.delete(JJ);
          const fJ = sJ.length;
          let xJ = eJ.sentByView.get(ZJ);
          void 0 === xJ && (xJ = new Set, eJ.sentByView.set(ZJ, xJ));
          for (let ZJ = 0; ZJ < fJ; ZJ++) {
            const FJ = sJ[ZJ],
              eJ = cJ[DJ](FJ);
            if (void 0 === eJ) {
              XJ.delete(FJ);
              continue
            }
            JJ._addImmediate(eJ);
            const qJ = eJ[GJ];
            if (void 0 !== qJ) {
              const cJ = eJ[AJ];
              let ZJ = JJ.changes.get(cJ);
              void 0 === ZJ && (ZJ = new Map, JJ.changes.set(cJ, ZJ));
              const FJ = qJ.metadata;
              qJ.forEachLive((JJ => {
                Lc.hasUnreliableAtIndex(FJ, JJ) || ZJ.set(JJ, UJ.ADD)
              }))
            }
            XJ.delete(FJ), xJ.add(FJ)
          }
        }
      }
      discardChanges() {
        const JJ = this.root.changes;
        let cJ = JJ.next;
        const ZJ = this.root;
        for (; cJ;) {
          const JJ = cJ.next;
          cJ.changeTree.endEncode(), ZJ.releaseNode(cJ), cJ = JJ
        }
        JJ.next = void 0, JJ.tail = void 0
      }
      discardUnreliableChanges() {
        const JJ = this.root.unreliableChanges;
        let cJ = JJ.next;
        const ZJ = this.root;
        for (; cJ;) {
          const JJ = cJ.next;
          cJ.changeTree.endEncodeUnreliable(), ZJ.releaseNode(cJ), cJ = JJ
        }
        JJ.next = void 0, JJ.tail = void 0
      }
      tryEncodeTypeId(JJ, cJ, ZJ, FJ) {
        const UJ = this.context.getTypeId(cJ),
          eJ = this.context.getTypeId(ZJ);
        void 0 !== eJ ? UJ !== eJ && (JJ[FJ.offset++] = 213, cc.number(JJ, eJ, FJ)) : console.warn(`@colyseus/schema WARNING: Class "${ZJ.name}" is not registered on TypeRegistry - Please either tag the class with @entity or define a @type() field.`)
      }
      get hasChanges() {
        return void 0 !== this.root.changes.next || this._hasStreamBacklog()
      }
      get _isStreamBroadcastMode() {
        return 0 === this.root.activeViews.size && this.root.streamTrees.size > 0
      }
      _hasStreamBacklog() {
        const JJ = this.root;
        if (0 === JJ.streamTrees.size) return !1;
        const cJ = 0 === JJ.activeViews.size;
        for (const ZJ of JJ.streamTrees)
          if (cJ ? wc(ZJ) : bc(ZJ, JJ)) return !0;
        return !1
      }
      get hasUnreliableChanges() {
        return void 0 !== this.root.unreliableChanges.next
      }
    }
    class uF extends Error {
      constructor(JJ) {
        super(JJ), this.name = "DecodingWarning"
      }
    }
    const iF = {
      value: 0,
      enumerable: !1,
      writable: !0
    };
    class RF {
      refs = new Map;
      refCount = {};
      deletedRefs = new Set;
      callbacks = {};
      nextUniqueId = 0;
      getNextUniqueId() {
        return this.nextUniqueId++
      }
      addRef(JJ, cJ) {
        let ZJ = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        this.refs.set(JJ, cJ), void 0 === cJ[AJ] ? (iF.value = JJ, Object.defineProperty(cJ, AJ, iF)) : cJ[AJ] !== JJ && (cJ[AJ] = JJ), ZJ && (this.refCount[JJ] = (this.refCount[JJ] || 0) + 1), this.deletedRefs.has(JJ) && this.deletedRefs.delete(JJ)
      }
      removeRef(JJ) {
        const cJ = this.refCount[JJ];
        if (void 0 !== cJ)
          if (0 !== cJ)(this.refCount[JJ] = cJ - 1) <= 0 && this.deletedRefs.add(JJ);
          else try {
            const cJ = this.refs.get(JJ);
            throw new uF(`trying to remove refId '${JJ}' with 0 refCount (${cJ.constructor.name}: ${JSON.stringify(cJ)})`)
          } catch (eU) {
            console.warn(eU)
          } else try {
            throw new uF("trying to remove refId that doesn't exist: " + JJ)
          } catch (eU) {
            console.warn(eU)
          }
      }
      clearRefs() {
        this.refs.clear(), this.deletedRefs.clear(), this.callbacks = {}, this.refCount = {}
      }
      garbageCollectDeletedRefs() {
        this.deletedRefs.forEach((JJ => {
          if (this.refCount[JJ] > 0) return;
          const cJ = this.refs.get(JJ),
            ZJ = cJ.constructor[Symbol.metadata];
          if (null != ZJ)
            for (const FJ in ZJ) {
              const JJ = cJ[ZJ[FJ].name];
              if ("object" === typeof JJ && JJ) {
                const cJ = JJ[AJ];
                void 0 === cJ || this.deletedRefs.has(cJ) || this.removeRef(cJ)
              }
            } else "function" === typeof cJ[fJ] && Array.from(cJ.values()).forEach((JJ => {
              const cJ = JJ[AJ];
              void 0 === cJ || this.deletedRefs.has(cJ) || this.removeRef(cJ)
            }));
          this.refs.delete(JJ), delete this.refCount[JJ], delete this.callbacks[JJ]
        })), this.deletedRefs.clear()
      }
      addCallback(JJ, cJ, ZJ) {
        if (void 0 === JJ) {
          const JJ = "number" === typeof cJ ? UJ[cJ] : cJ;
          throw new Error(`Can't addCallback on '${JJ}' (refId is undefined)`)
        }
        return this.callbacks[JJ] || (this.callbacks[JJ] = {}), this.callbacks[JJ][cJ] || (this.callbacks[JJ][cJ] = []), this.callbacks[JJ][cJ].push(ZJ), () => this.removeCallback(JJ, cJ, ZJ)
      }
      removeCallback(JJ, cJ, ZJ) {
        const FJ = this.callbacks?.[JJ]?.[cJ]?.indexOf(ZJ);
        void 0 !== FJ && -1 !== FJ && WF(this.callbacks[JJ][cJ], FJ)
      }
    }
    class LF {
      context;
      state;
      root;
      currentRefId = 0;
      lK;
      resyncVisited = null;
      resyncDamaged = !1;
      constructor(JJ, cJ) {
        this.setState(JJ), this.context = cJ || new Nc(JJ.constructor)
      }
      setState(JJ) {
        this.state = JJ, this.root = new RF, this.root.addRef(0, JJ)
      }
      decode(JJ) {
        let cJ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
            offset: 0
          },
          ZJ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : this.state;
        const UJ = void 0 !== this.lK ? [] : null,
          eJ = this.root,
          XJ = JJ.byteLength;
        let AJ = ZJ.constructor[YJ];
        for (this.currentRefId = 0; cJ.offset < XJ;) {
          if (JJ[cJ.offset] == FJ) {
            cJ.offset++, ZJ[mJ]?.();
            const FJ = vc.number(JJ, cJ),
              UJ = eJ.refs.get(FJ);
            UJ ? (ZJ = UJ, AJ = ZJ.constructor[YJ], this.currentRefId = FJ) : (console.error(`"refId" not found: ${FJ}`, {
              previousRef: ZJ,
              previousRefId: this.currentRefId
            }), console.warn("Please report this issue to the developers."), this.skipCurrentStructure(JJ, cJ, XJ));
            continue
          } - 1 !== AJ(this, JJ, cJ, ZJ, UJ) || (console.warn("@colyseus/schema: definition mismatch"), this.skipCurrentStructure(JJ, cJ, XJ))
        }
        return ZJ[mJ]?.(), null !== this.resyncVisited && function(JJ, cJ) {
          JJ.resyncDamaged ? console.warn("@colyseus/schema: resync sweep skipped \u2014 parts of the payload could not be decoded. Stale entries may persist until the next resync.") : NZ(JJ, JJ.state, new Set, cJ)
        }(this, UJ), null !== UJ && this.lK?.(UJ), eJ.garbageCollectDeletedRefs(), UJ
      }
      decodeResync(JJ) {
        let cJ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
          offset: 0
        };
        this.resyncVisited = new Map, this.resyncDamaged = !1;
        try {
          return this.decode(JJ, cJ)
        } finally {
          this.resyncVisited = null
        }
      }
      skipCurrentStructure(JJ, cJ, ZJ) {
        null !== this.resyncVisited && (this.resyncDamaged = !0);
        const UJ = {
          offset: cJ.offset
        };
        for (; cJ.offset < ZJ && (JJ[cJ.offset] !== FJ || (UJ.offset = cJ.offset + 1, !this.root.refs.has(vc.number(JJ, UJ))));) cJ.offset++
      }
      getInstanceType(JJ, cJ, ZJ) {
        let FJ;
        if (213 === JJ[cJ.offset]) {
          cJ.offset++;
          const ZJ = vc.number(JJ, cJ);
          FJ = this.context.get(ZJ)
        }
        return FJ || ZJ
      }
      createInstanceOfType(JJ) {
        return JJ.initializeForDecoder()
      }
      removeChildRefs(JJ, cJ) {
        const ZJ = "string" !== typeof JJ[fJ],
          FJ = JJ[AJ];
        JJ.forEach(((eJ, XJ) => {
          cJ?.push({
            ref: JJ,
            refId: FJ,
            op: UJ.DELETE,
            field: XJ,
            value: void 0,
            previousValue: eJ
          }), ZJ && this.root.removeRef(eJ[AJ])
        }))
      }
    }
    const aF = SF({
        min: sF.float64(),
        max: sF.float64(),
        bits: sF.uint8(),
        mode: sF.uint8()
      }, "QuantizedDescriptor"),
      BF = SF({
        name: sF.string(),
        type: sF.string(),
        referencedType: sF.number(),
        childPrimitive: sF.string(),
        quantized: sF.ref(aF).optional()
      }, "ReflectionField"),
      tF = SF({
        id: sF.number(),
        extendsId: sF.number(),
        fields: sF.array(BF)
      }, "ReflectionType"),
      oF = SF({
        types: sF.array(tF),
        rootType: sF.number()
      }, "Reflection");

    function lF(JJ) {
      const cJ = JJ.root,
        ZJ = cJ.callbacks,
        FJ = new WeakMap;
      let eJ;

      function XJ(JJ, ZJ) {
        let jJ = ZJ.instance?.constructor[Symbol.metadata] || JJ,
          YJ = ZJ.instance && "function" === typeof ZJ.instance.forEach || JJ && !MF.is(JJ);
        if (jJ && !YJ) {
          const JJ = function(JJ, UJ, XJ, qJ) {
            return qJ && void 0 !== ZJ.instance[UJ] && !FJ.has(eJ) && XJ(ZJ.instance[UJ], void 0), cJ.addCallback(JJ[AJ], UJ, XJ)
          };
          return new Proxy({
            listen: function(cJ, UJ) {
              let XJ = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
              if (ZJ.instance) return JJ(ZJ.instance, cJ, UJ, XJ);
              {
                let AJ = () => {};
                return ZJ.onInstanceAvailable(((ZJ, qJ) => {
                  AJ = JJ(ZJ, cJ, UJ, XJ && qJ && !FJ.has(eJ))
                })), () => AJ()
              }
            },
            onChange: function(JJ) {
              return cJ.addCallback(ZJ.instance[AJ], UJ.REPLACE, JJ)
            },
            bindTo: function(JJ, FJ) {
              return FJ || (FJ = Object.keys(jJ).map((JJ => jJ[JJ].name))), cJ.addCallback(ZJ.instance[AJ], UJ.REPLACE, (() => {
                FJ.forEach((cJ => JJ[cJ] = ZJ.instance[cJ]))
              }))
            }
          }, {
            get(JJ, cJ) {
              const FJ = jJ[jJ[cJ]];
              if (FJ) {
                const JJ = ZJ.instance?.[cJ],
                  UJ = FJ => {
                    const UJ = qJ(ZJ.instance).listen(cJ, ((JJ, cJ) => {
                      FJ(JJ, !1), UJ?.()
                    }), !1);
                    void 0 !== JJ?.[AJ] && FJ(JJ, !0)
                  };
                return XJ(FJ.type, {
                  instance: void 0 !== JJ?.[AJ] && JJ,
                  parentInstance: ZJ.instance,
                  onInstanceAvailable: UJ
                })
              }
              return JJ[cJ]
            },
            has: (JJ, cJ) => void 0 !== jJ[cJ],
            set(JJ, cJ, ZJ) {
              throw new Error("not allowed")
            },
            deleteProperty(JJ, cJ) {
              throw new Error("not allowed")
            }
          })
        } {
          const JJ = function(JJ, ZJ, XJ) {
              return XJ && JJ.forEach(((JJ, cJ) => ZJ(JJ, cJ))), cJ.addCallback(JJ[AJ], UJ.ADD, ((JJ, cJ) => {
                FJ.set(ZJ, !0), eJ = ZJ, ZJ(JJ, cJ), FJ.delete(ZJ), eJ = void 0
              }))
            },
            XJ = function(JJ, ZJ) {
              return cJ.addCallback(JJ[AJ], UJ.DELETE, ZJ)
            },
            qJ = function(JJ, ZJ) {
              return cJ.addCallback(JJ[AJ], UJ.REPLACE, ZJ)
            };
          return new Proxy({
            XE: function(cJ) {
              let UJ = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
              if (ZJ.instance) return JJ(ZJ.instance, cJ, UJ && !FJ.has(eJ));
              if (ZJ.onInstanceAvailable) {
                let XJ = () => {};
                return ZJ.onInstanceAvailable(((ZJ, AJ) => {
                  XJ = JJ(ZJ, cJ, UJ && AJ && !FJ.has(eJ))
                })), () => XJ()
              }
            },
            jK: function(JJ) {
              if (ZJ.instance) return XJ(ZJ.instance, JJ);
              if (ZJ.onInstanceAvailable) {
                let cJ = () => {};
                return ZJ.onInstanceAvailable((ZJ => {
                  cJ = XJ(ZJ, JJ)
                })), () => cJ()
              }
            },
            onChange: function(JJ) {
              if (ZJ.instance) return qJ(ZJ.instance, JJ);
              if (ZJ.onInstanceAvailable) {
                let cJ = () => {};
                return ZJ.onInstanceAvailable((ZJ => {
                  cJ = qJ(ZJ, JJ)
                })), () => cJ()
              }
            }
          }, {
            get(JJ, cJ) {
              if (!JJ[cJ]) throw new Error(`Can't access '${cJ}' through callback proxy. access the instance directly.`);
              return JJ[cJ]
            },
            has: (JJ, cJ) => void 0 !== JJ[cJ],
            set(JJ, cJ, ZJ) {
              throw new Error("not allowed")
            },
            deleteProperty(JJ, cJ) {
              throw new Error("not allowed")
            }
          })
        }
      }

      function qJ(JJ) {
        return XJ(void 0, {
          instance: JJ
        })
      }
      return JJ.lK = function(JJ) {
        const cJ = new Set;
        for (let FJ = 0, eJ = JJ.length; FJ < eJ; FJ++) {
          const eJ = JJ[FJ],
            XJ = eJ.refId,
            qJ = eJ.ref,
            jJ = ZJ[XJ];
          if (jJ) {
            if ((eJ.op & UJ.DELETE) === UJ.DELETE && MF.isSchema(eJ.previousValue)) {
              const JJ = ZJ[eJ.previousValue[AJ]]?.[UJ.DELETE];
              for (let cJ = JJ?.length - 1; cJ >= 0; cJ--) JJ[cJ]()
            }
            if (MF.isSchema(qJ)) {
              if (!cJ.has(XJ)) {
                const JJ = jJ?.[UJ.REPLACE];
                for (let cJ = JJ?.length - 1; cJ >= 0; cJ--) JJ[cJ]()
              }
              if (jJ.hasOwnProperty(eJ.field)) {
                const JJ = jJ[eJ.field];
                for (let cJ = JJ?.length - 1; cJ >= 0; cJ--) JJ[cJ](eJ.value, eJ.previousValue)
              }
            } else {
              if ((eJ.op & UJ.DELETE) === UJ.DELETE) {
                if (void 0 !== eJ.previousValue) {
                  const JJ = jJ[UJ.DELETE];
                  for (let cJ = JJ?.length - 1; cJ >= 0; cJ--) JJ[cJ](eJ.previousValue, eJ.dynamicIndex ?? eJ.field)
                }
                if ((eJ.op & UJ.ADD) === UJ.ADD) {
                  const JJ = jJ[UJ.ADD];
                  for (let cJ = JJ?.length - 1; cJ >= 0; cJ--) JJ[cJ](eJ.value, eJ.dynamicIndex ?? eJ.field)
                }
              } else if ((eJ.op & UJ.ADD) === UJ.ADD && eJ.previousValue !== eJ.value) {
                const JJ = jJ[UJ.ADD];
                for (let cJ = JJ?.length - 1; cJ >= 0; cJ--) JJ[cJ](eJ.value, eJ.dynamicIndex ?? eJ.field)
              }
              if (eJ.value !== eJ.previousValue && (void 0 !== eJ.value || void 0 !== eJ.previousValue)) {
                const JJ = jJ[UJ.REPLACE];
                for (let cJ = JJ?.length - 1; cJ >= 0; cJ--) JJ[cJ](eJ.value, eJ.dynamicIndex ?? eJ.field)
              }
            }
            cJ.add(XJ)
          }
        }
      }, qJ
    }

    function JU(JJ, cJ) {
      JJ.lK = cJ
    }
    oF.encode = function(JJ) {
      let cJ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
        offset: 0
      };
      const ZJ = JJ.context,
        FJ = new oF,
        UJ = new CF(FJ),
        eJ = ZJ.schemas.get(JJ.state.constructor);
      eJ > 0 && (FJ.rootType = eJ);
      const XJ = new Set,
        AJ = {},
        qJ = JJ => {
          if (void 0 === JJ.extendsId || XJ.has(JJ.extendsId)) {
            XJ.add(JJ.id), FJ.types.push(JJ);
            const cJ = AJ[JJ.id];
            void 0 !== cJ && (delete AJ[JJ.id], cJ.forEach((JJ => qJ(JJ))))
          } else void 0 === AJ[JJ.extendsId] && (AJ[JJ.extendsId] = []), AJ[JJ.extendsId].push(JJ)
        };
      ZJ.schemas.forEach(((JJ, cJ) => {
        const FJ = new tF;
        FJ.id = Number(JJ);
        const UJ = Object.getPrototypeOf(cJ);
        UJ !== MF && (FJ.extendsId = ZJ.schemas.get(UJ));
        const eJ = cJ[Symbol.metadata];
        if (eJ !== UJ[Symbol.metadata]) {
          const JJ = eJ[SJ] ?? -1;
          for (let cJ = 0; cJ <= JJ; cJ++) {
            const JJ = eJ[cJ];
            if (void 0 === JJ) continue;
            const UJ = JJ.name;
            if (!Object.prototype.hasOwnProperty.call(eJ, UJ)) continue;
            const XJ = new BF;
            let AJ;
            if (XJ.name = UJ, "string" === typeof JJ.type) AJ = JJ.type;
            else if (kc(JJ.type)) {
              const cJ = JJ.type.quantized;
              AJ = "quantized";
              const ZJ = new aF;
              ZJ.min = cJ.min, ZJ.max = cJ.max, ZJ.bits = cJ.bits, ZJ.mode = cJ.wrap ? 1 : 0, XJ.quantized = ZJ
            } else {
              let cJ;
              MF.is(JJ.type) ? (AJ = "ref", cJ = JJ.type) : (AJ = Object.keys(JJ.type)[0], "string" === typeof JJ.type[AJ] ? XJ.childPrimitive = JJ.type[AJ] : cJ = JJ.type[AJ]), XJ.referencedType = cJ ? ZJ.getTypeId(cJ) : -1
            }
            XJ.type = AJ, FJ.fields.push(XJ)
          }
        }
        qJ(FJ)
      }));
      for (const jJ in AJ) AJ[jJ].forEach((JJ => FJ.types.push(JJ)));
      return UJ.encodeAll(cJ).slice(0, cJ.offset)
    }, oF.decode = function(JJ, cJ) {
      const ZJ = new oF;
      new LF(ZJ).decode(JJ, cJ);
      const FJ = new Nc;
      ZJ.types.forEach((JJ => {
        const cJ = FJ.get(JJ.extendsId) ?? MF,
          ZJ = class extends cJ {};
        Nc.register(ZJ), FJ.add(ZJ, JJ.id)
      }), {});
      ZJ.types.forEach((JJ => {
        const cJ = FJ.get(JJ.id),
          UJ = Lc.initialize(cJ),
          eJ = [];
        let XJ = JJ;
        do {
          eJ.push(XJ), XJ = ZJ.types.find((JJ => JJ.id === XJ.extendsId))
        } while (XJ);
        let AJ = 0;
        eJ.reverse().forEach((JJ => {
          ((JJ, cJ, ZJ) => {
            cJ.fields.forEach(((cJ, UJ) => {
              const eJ = ZJ + UJ;
              if (void 0 !== cJ.quantized) {
                const ZJ = cJ.quantized;
                Lc.addField(JJ, eJ, cJ.name, {
                  quantized: Pc({
                    min: ZJ.min,
                    max: ZJ.max,
                    bits: ZJ.bits,
                    mode: 1 === ZJ.mode ? "wrap" : "clamp"
                  })
                })
              } else if (void 0 !== cJ.referencedType) {
                const ZJ = cJ.type,
                  UJ = FJ.get(cJ.referencedType) ?? cJ.childPrimitive;
                "ref" === ZJ ? Lc.addField(JJ, eJ, cJ.name, UJ) : Lc.addField(JJ, eJ, cJ.name, {
                  [ZJ]: UJ
                })
              } else Lc.addField(JJ, eJ, cJ.name, cJ.type)
            }))
          })(UJ, JJ, AJ), AJ += JJ.fields.length
        }))
      }));
      const UJ = new(FJ.get(ZJ.rootType || 0));
      return new LF(UJ, FJ)
    }, oF.makeEncodable = function(JJ) {
      const cJ = JJ[Symbol.metadata];
      if (!cJ) return JJ;
      const ZJ = cJ[SJ];
      if (void 0 === ZJ) return JJ;
      for (let FJ = 0; FJ <= ZJ; FJ++) {
        const ZJ = cJ[FJ];
        ZJ && Lc.defineField(JJ, cJ, FJ, ZJ.name, ZJ.type)
      }
      return Object.prototype.hasOwnProperty.call(JJ, KJ) && delete JJ[KJ], JJ
    };
    class cU {
      en;
      uniqueRefIds = new Set;
      isTriggering = !1;
      constructor(JJ) {
        this.en = JJ, this.en.lK = this.lK.bind(this)
      }
      get callbacks() {
        return this.en.root.callbacks
      }
      get state() {
        return this.en.state
      }
      addCallback(JJ, cJ, ZJ) {
        return this.en.root.addCallback(JJ, cJ, ZJ)
      }
      addCallbackOrWaitCollectionAvailable(JJ, cJ, ZJ, FJ) {
        let eJ = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4],
          XJ = () => {};
        const qJ = () => XJ(),
          jJ = JJ[cJ];
        if (jJ && void 0 !== jJ[AJ]) return eJ = eJ && !1 === this.isTriggering, ZJ === UJ.ADD && eJ && jJ.forEach(((JJ, cJ) => {
          FJ(JJ, cJ)
        })), this.addCallback(jJ[AJ], ZJ, FJ);
        {
          let UJ;
          return UJ = this.addCallback(JJ[AJ], cJ, ((JJ, cJ) => {
            null !== JJ && void 0 !== JJ && (UJ(), XJ = this.addCallback(JJ[AJ], ZJ, FJ))
          })), XJ = UJ, qJ
        }
      }
      listen() {
        return "string" === typeof(arguments.length <= 0 ? void 0 : arguments[0]) ? this.listenInstance(this.state, arguments.length <= 0 ? void 0 : arguments[0], arguments.length <= 1 ? void 0 : arguments[1], arguments.length <= 2 ? void 0 : arguments[2]) : this.listenInstance(arguments.length <= 0 ? void 0 : arguments[0], arguments.length <= 1 ? void 0 : arguments[1], arguments.length <= 2 ? void 0 : arguments[2], arguments.length <= 3 ? void 0 : arguments[3])
      }
      listenInstance(JJ, cJ, ZJ) {
        let FJ = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
        FJ = FJ && !1 === this.isTriggering;
        const UJ = JJ[cJ];
        return FJ && null !== UJ && void 0 !== UJ && ZJ(UJ, void 0), this.addCallback(JJ[AJ], cJ, ZJ)
      }
      onChange() {
        if (2 === arguments.length && "string" !== typeof(arguments.length <= 0 ? void 0 : arguments[0])) {
          const JJ = arguments.length <= 0 ? void 0 : arguments[0],
            cJ = arguments.length <= 1 ? void 0 : arguments[1];
          return this.addCallback(JJ[AJ], UJ.REPLACE, cJ)
        }
        return "string" === typeof(arguments.length <= 0 ? void 0 : arguments[0]) ? this.addCallbackOrWaitCollectionAvailable(this.state, arguments.length <= 0 ? void 0 : arguments[0], UJ.REPLACE, arguments.length <= 1 ? void 0 : arguments[1]) : this.addCallbackOrWaitCollectionAvailable(arguments.length <= 0 ? void 0 : arguments[0], arguments.length <= 1 ? void 0 : arguments[1], UJ.REPLACE, arguments.length <= 2 ? void 0 : arguments[2])
      }
      XE() {
        return "string" === typeof(arguments.length <= 0 ? void 0 : arguments[0]) ? this.addCallbackOrWaitCollectionAvailable(this.state, arguments.length <= 0 ? void 0 : arguments[0], UJ.ADD, arguments.length <= 1 ? void 0 : arguments[1], !1 !== (arguments.length <= 2 ? void 0 : arguments[2])) : this.addCallbackOrWaitCollectionAvailable(arguments.length <= 0 ? void 0 : arguments[0], arguments.length <= 1 ? void 0 : arguments[1], UJ.ADD, arguments.length <= 2 ? void 0 : arguments[2], !1 !== (arguments.length <= 3 ? void 0 : arguments[3]))
      }
      jK() {
        return "string" === typeof(arguments.length <= 0 ? void 0 : arguments[0]) ? this.addCallbackOrWaitCollectionAvailable(this.state, arguments.length <= 0 ? void 0 : arguments[0], UJ.DELETE, arguments.length <= 1 ? void 0 : arguments[1]) : this.addCallbackOrWaitCollectionAvailable(arguments.length <= 0 ? void 0 : arguments[0], arguments.length <= 1 ? void 0 : arguments[1], UJ.DELETE, arguments.length <= 2 ? void 0 : arguments[2])
      }
      bindTo(JJ, cJ, ZJ) {
        let FJ = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
        const eJ = JJ.constructor[Symbol.metadata];
        ZJ || (ZJ = Object.keys(eJ).filter((JJ => !isNaN(Number(JJ)))).map((JJ => eJ[JJ].name)));
        const XJ = () => {
          for (const FJ of ZJ) {
            const ZJ = JJ[FJ];
            void 0 !== ZJ && (cJ[FJ] = ZJ)
          }
        };
        return FJ && XJ(), this.addCallback(JJ[AJ], UJ.REPLACE, XJ)
      }
      lK(JJ) {
        this.uniqueRefIds.clear(), this.isTriggering = !0;
        for (let cJ = 0, ZJ = JJ.length; cJ < ZJ; cJ++) {
          const ZJ = JJ[cJ],
            FJ = ZJ.refId,
            eJ = ZJ.ref,
            XJ = this.callbacks[FJ];
          if (XJ) {
            if ((ZJ.op & UJ.DELETE) === UJ.DELETE && MF.isSchema(ZJ.previousValue)) {
              const JJ = ZJ.previousValue[AJ],
                cJ = this.callbacks[JJ]?.[UJ.DELETE];
              if (cJ)
                for (let ZJ = cJ.length - 1; ZJ >= 0; ZJ--) try {
                  cJ[ZJ]()
                } catch (eU) {
                  console.error(eU)
                }
            }
            if (MF.isSchema(eJ)) {
              if (!this.uniqueRefIds.has(FJ)) {
                const JJ = XJ[UJ.REPLACE];
                if (JJ)
                  for (let cJ = JJ.length - 1; cJ >= 0; cJ--) try {
                    JJ[cJ]()
                  } catch (eU) {
                    console.error(eU)
                  }
              }
              const JJ = XJ[ZJ.field];
              if (JJ)
                for (let cJ = JJ.length - 1; cJ >= 0; cJ--) try {
                  JJ[cJ](ZJ.value, ZJ.previousValue)
                } catch (eU) {
                  console.error(eU)
                }
            } else {
              const JJ = ZJ.dynamicIndex ?? ZJ.field;
              if ((ZJ.op & UJ.DELETE) === UJ.DELETE) {
                if (void 0 !== ZJ.previousValue) {
                  const cJ = XJ[UJ.DELETE];
                  if (cJ)
                    for (let FJ = cJ.length - 1; FJ >= 0; FJ--) try {
                      cJ[FJ](ZJ.previousValue, JJ)
                    } catch (eU) {
                      console.error(eU)
                    }
                }
                if ((ZJ.op & UJ.ADD) === UJ.ADD) {
                  const cJ = XJ[UJ.ADD];
                  if (cJ)
                    for (let FJ = cJ.length - 1; FJ >= 0; FJ--) try {
                      cJ[FJ](ZJ.value, JJ)
                    } catch (eU) {
                      console.error(eU)
                    }
                }
              } else if ((ZJ.op & UJ.ADD) === UJ.ADD && ZJ.previousValue !== ZJ.value) {
                const cJ = XJ[UJ.ADD];
                if (cJ)
                  for (let FJ = cJ.length - 1; FJ >= 0; FJ--) try {
                    cJ[FJ](ZJ.value, JJ)
                  } catch (eU) {
                    console.error(eU)
                  }
              }
              if (ZJ.value !== ZJ.previousValue) {
                const cJ = XJ[UJ.REPLACE];
                if (cJ)
                  for (let FJ = cJ.length - 1; FJ >= 0; FJ--) try {
                    cJ[FJ](JJ, ZJ.value)
                  } catch (eU) {
                    console.error(eU)
                  }
              }
            }
            this.uniqueRefIds.add(FJ)
          }
        }
        this.isTriggering = !1
      }
    }
    const ZU = {
      get(JJ) {
        if (JJ instanceof LF) return new cU(JJ);
        if ("en" in JJ.Kr) return new cU(JJ.Kr.en);
        throw new Error("Invalid room or decoder")
      },
      getLegacy(JJ) {
        if (JJ instanceof LF) return lF(JJ);
        if ("en" in JJ.Kr) return lF(JJ.Kr.en);
        throw new Error("Invalid room or decoder")
      },
      getRawChanges: (JJ, cJ) => JU(JJ, cJ)
    };
    class FU {
      _free = [];
      _factory;
      _maxSize;
      constructor(JJ) {
        let cJ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        this._factory = JJ, this._maxSize = cJ.maxSize ?? 1 / 0;
        const ZJ = cJ.preallocate ?? 0;
        for (let FJ = 0; FJ < ZJ; FJ++) this._free.push(JJ())
      }
      acquire() {
        return this._free.length > 0 ? this._free.pop() : this._factory()
      }
      release(JJ) {
        MF.reset(JJ), this._free.length < this._maxSize && this._free.push(JJ)
      }
      get size() {
        return this._free.length
      }
    }

    function UU(JJ) {
      return new FU((() => new JJ), arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {})
    }
    Ec("map", {
      constructor: UF
    }), Ec("array", {
      constructor: ZF
    }), Ec("set", {
      constructor: XF
    }), Ec("collection", {
      constructor: eF
    })
  },
  8352: (JJ, cJ, ZJ) => {
    ZJ.r(cJ), ZJ.d(cJ, {
      __addDisposableResource: () => kJ,
      __assign: () => eJ,
      __asyncDelegator: () => yJ,
      __asyncGenerator: () => KJ,
      __asyncValues: () => SJ,
      __await: () => VJ,
      __awaiter: () => nJ,
      __classPrivateFieldGet: () => gJ,
      __classPrivateFieldIn: () => PJ,
      __classPrivateFieldSet: () => HJ,
      __createBinding: () => fJ,
      __decorate: () => AJ,
      __disposeResources: () => dJ,
      __esDecorate: () => jJ,
      __exportStar: () => xJ,
      __extends: () => UJ,
      __generator: () => GJ,
      __importDefault: () => WJ,
      __importStar: () => wJ,
      __makeTemplateObject: () => IJ,
      __metadata: () => sJ,
      __param: () => qJ,
      __propKey: () => hJ,
      __read: () => vJ,
      __rest: () => XJ,
      __rewriteRelativeImportExtension: () => zJ,
      __runInitializers: () => YJ,
      __setFunctionName: () => DJ,
      __spread: () => mJ,
      __spreadArray: () => EJ,
      __spreadArrays: () => QJ,
      __values: () => rJ,
      default: () => NJ
    });
    var FJ = function(JJ, cJ) {
      return FJ = Object.setPrototypeOf || {
        __proto__: []
      }
      instanceof Array && function(JJ, cJ) {
        JJ.__proto__ = cJ
      } || function(JJ, cJ) {
        for (var ZJ in cJ) Object.prototype.hasOwnProperty.call(cJ, ZJ) && (JJ[ZJ] = cJ[ZJ])
      }, FJ(JJ, cJ)
    };

    function UJ(JJ, cJ) {
      if ("function" !== typeof cJ && null !== cJ) throw new TypeError("Class extends value " + String(cJ) + " is not a constructor or null");

      function ZJ() {
        this.constructor = JJ
      }
      FJ(JJ, cJ), JJ.prototype = null === cJ ? Object.create(cJ) : (ZJ.prototype = cJ.prototype, new ZJ)
    }
    var eJ = function() {
      return eJ = Object.assign || function(JJ) {
        for (var cJ, ZJ = 1, FJ = arguments.length; ZJ < FJ; ZJ++)
          for (var UJ in cJ = arguments[ZJ]) Object.prototype.hasOwnProperty.call(cJ, UJ) && (JJ[UJ] = cJ[UJ]);
        return JJ
      }, eJ.apply(this, arguments)
    };

    function XJ(JJ, cJ) {
      var ZJ = {};
      for (var FJ in JJ) Object.prototype.hasOwnProperty.call(JJ, FJ) && cJ.indexOf(FJ) < 0 && (ZJ[FJ] = JJ[FJ]);
      if (null != JJ && "function" === typeof Object.getOwnPropertySymbols) {
        var UJ = 0;
        for (FJ = Object.getOwnPropertySymbols(JJ); UJ < FJ.length; UJ++) cJ.indexOf(FJ[UJ]) < 0 && Object.prototype.propertyIsEnumerable.call(JJ, FJ[UJ]) && (ZJ[FJ[UJ]] = JJ[FJ[UJ]])
      }
      return ZJ
    }

    function AJ(JJ, cJ, ZJ, FJ) {
      var UJ, eJ = arguments.length,
        XJ = eJ < 3 ? cJ : null === FJ ? FJ = Object.getOwnPropertyDescriptor(cJ, ZJ) : FJ;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) XJ = Reflect.decorate(JJ, cJ, ZJ, FJ);
      else
        for (var AJ = JJ.length - 1; AJ >= 0; AJ--)(UJ = JJ[AJ]) && (XJ = (eJ < 3 ? UJ(XJ) : eJ > 3 ? UJ(cJ, ZJ, XJ) : UJ(cJ, ZJ)) || XJ);
      return eJ > 3 && XJ && Object.defineProperty(cJ, ZJ, XJ), XJ
    }

    function qJ(JJ, cJ) {
      return function(ZJ, FJ) {
        cJ(ZJ, FJ, JJ)
      }
    }

    function jJ(JJ, cJ, ZJ, FJ, UJ, eJ) {
      function XJ(JJ) {
        if (void 0 !== JJ && "function" !== typeof JJ) throw new TypeError("Function expected");
        return JJ
      }
      for (var AJ, qJ = FJ.kind, jJ = "getter" === qJ ? "get" : "setter" === qJ ? "set" : "value", YJ = !cJ && JJ ? FJ.static ? JJ : JJ.prototype : null, hJ = cJ || (YJ ? Object.getOwnPropertyDescriptor(YJ, FJ.name) : {}), DJ = !1, sJ = ZJ.length - 1; sJ >= 0; sJ--) {
        var nJ = {};
        for (var GJ in FJ) nJ[GJ] = "access" === GJ ? {} : FJ[GJ];
        for (var GJ in FJ.access) nJ.access[GJ] = FJ.access[GJ];
        nJ.addInitializer = function(JJ) {
          if (DJ) throw new TypeError("Cannot add initializers after decoration has completed");
          eJ.push(XJ(JJ || null))
        };
        var fJ = (0, ZJ[sJ])("accessor" === qJ ? {
          get: hJ.get,
          set: hJ.set
        } : hJ[jJ], nJ);
        if ("accessor" === qJ) {
          if (void 0 === fJ) continue;
          if (null === fJ || "object" !== typeof fJ) throw new TypeError("Object expected");
          (AJ = XJ(fJ.get)) && (hJ.get = AJ), (AJ = XJ(fJ.set)) && (hJ.set = AJ), (AJ = XJ(fJ.init)) && UJ.unshift(AJ)
        } else(AJ = XJ(fJ)) && ("field" === qJ ? UJ.unshift(AJ) : hJ[jJ] = AJ)
      }
      YJ && Object.defineProperty(YJ, FJ.name, hJ), DJ = !0
    }

    function YJ(JJ, cJ, ZJ) {
      for (var FJ = arguments.length > 2, UJ = 0; UJ < cJ.length; UJ++) ZJ = FJ ? cJ[UJ].call(JJ, ZJ) : cJ[UJ].call(JJ);
      return FJ ? ZJ : void 0
    }

    function hJ(JJ) {
      return "symbol" === typeof JJ ? JJ : "".concat(JJ)
    }

    function DJ(JJ, cJ, ZJ) {
      return "symbol" === typeof cJ && (cJ = cJ.description ? "[".concat(cJ.description, "]") : ""), Object.defineProperty(JJ, "name", {
        configurable: !0,
        value: ZJ ? "".concat(ZJ, " ", cJ) : cJ
      })
    }

    function sJ(JJ, cJ) {
      if ("object" === typeof Reflect && "function" === typeof Reflect.metadata) return Reflect.metadata(JJ, cJ)
    }

    function nJ(JJ, cJ, ZJ, FJ) {
      return new(ZJ || (ZJ = Promise))((function(UJ, eJ) {
        function XJ(JJ) {
          try {
            qJ(FJ.next(JJ))
          } catch (cJ) {
            eJ(cJ)
          }
        }

        function AJ(JJ) {
          try {
            qJ(FJ.throw(JJ))
          } catch (cJ) {
            eJ(cJ)
          }
        }

        function qJ(JJ) {
          var cJ;
          JJ.done ? UJ(JJ.value) : (cJ = JJ.value, cJ instanceof ZJ ? cJ : new ZJ((function(JJ) {
            JJ(cJ)
          }))).then(XJ, AJ)
        }
        qJ((FJ = FJ.apply(JJ, cJ || [])).next())
      }))
    }

    function GJ(JJ, cJ) {
      var ZJ, FJ, UJ, eJ = {
          label: 0,
          sent: function() {
            if (1 & UJ[0]) throw UJ[1];
            return UJ[1]
          },
          trys: [],
          ops: []
        },
        XJ = Object.create(("function" === typeof Iterator ? Iterator : Object).prototype);
      return XJ.next = AJ(0), XJ.throw = AJ(1), XJ.return = AJ(2), "function" === typeof Symbol && (XJ[Symbol.iterator] = function() {
        return this
      }), XJ;

      function AJ(AJ) {
        return function(qJ) {
          return function(AJ) {
            if (ZJ) throw new TypeError("Generator is already executing.");
            for (; XJ && (XJ = 0, AJ[0] && (eJ = 0)), eJ;) try {
              if (ZJ = 1, FJ && (UJ = 2 & AJ[0] ? FJ.return : AJ[0] ? FJ.throw || ((UJ = FJ.return) && UJ.call(FJ), 0) : FJ.next) && !(UJ = UJ.call(FJ, AJ[1])).done) return UJ;
              switch (FJ = 0, UJ && (AJ = [2 & AJ[0], UJ.value]), AJ[0]) {
                case 0:
                case 1:
                  UJ = AJ;
                  break;
                case 4:
                  return eJ.label++, {
                    value: AJ[1],
                    done: !1
                  };
                case 5:
                  eJ.label++, FJ = AJ[1], AJ = [0];
                  continue;
                case 7:
                  AJ = eJ.ops.pop(), eJ.trys.pop();
                  continue;
                default:
                  if (!(UJ = (UJ = eJ.trys).length > 0 && UJ[UJ.length - 1]) && (6 === AJ[0] || 2 === AJ[0])) {
                    eJ = 0;
                    continue
                  }
                  if (3 === AJ[0] && (!UJ || AJ[1] > UJ[0] && AJ[1] < UJ[3])) {
                    eJ.label = AJ[1];
                    break
                  }
                  if (6 === AJ[0] && eJ.label < UJ[1]) {
                    eJ.label = UJ[1], UJ = AJ;
                    break
                  }
                  if (UJ && eJ.label < UJ[2]) {
                    eJ.label = UJ[2], eJ.ops.push(AJ);
                    break
                  }
                  UJ[2] && eJ.ops.pop(), eJ.trys.pop();
                  continue
              }
              AJ = cJ.call(JJ, eJ)
            } catch (qJ) {
              AJ = [6, qJ], FJ = 0
            } finally {
              ZJ = UJ = 0
            }
            if (5 & AJ[0]) throw AJ[1];
            return {
              value: AJ[0] ? AJ[1] : void 0,
              done: !0
            }
          }([AJ, qJ])
        }
      }
    }
    var fJ = Object.create ? function(JJ, cJ, ZJ, FJ) {
      void 0 === FJ && (FJ = ZJ);
      var UJ = Object.getOwnPropertyDescriptor(cJ, ZJ);
      UJ && !("get" in UJ ? !cJ.__esModule : UJ.writable || UJ.configurable) || (UJ = {
        enumerable: !0,
        get: function() {
          return cJ[ZJ]
        }
      }), Object.defineProperty(JJ, FJ, UJ)
    } : function(JJ, cJ, ZJ, FJ) {
      void 0 === FJ && (FJ = ZJ), JJ[FJ] = cJ[ZJ]
    };

    function xJ(JJ, cJ) {
      for (var ZJ in JJ) "default" === ZJ || Object.prototype.hasOwnProperty.call(cJ, ZJ) || fJ(cJ, JJ, ZJ)
    }

    function rJ(JJ) {
      var cJ = "function" === typeof Symbol && Symbol.iterator,
        ZJ = cJ && JJ[cJ],
        FJ = 0;
      if (ZJ) return ZJ.call(JJ);
      if (JJ && "number" === typeof JJ.length) return {
        next: function() {
          return JJ && FJ >= JJ.length && (JJ = void 0), {
            value: JJ && JJ[FJ++],
            done: !JJ
          }
        }
      };
      throw new TypeError(cJ ? "Object is not iterable." : "Symbol.iterator is not defined.")
    }

    function vJ(JJ, cJ) {
      var ZJ = "function" === typeof Symbol && JJ[Symbol.iterator];
      if (!ZJ) return JJ;
      var FJ, UJ, eJ = ZJ.call(JJ),
        XJ = [];
      try {
        for (;
          (void 0 === cJ || cJ-- > 0) && !(FJ = eJ.next()).done;) XJ.push(FJ.value)
      } catch (AJ) {
        UJ = {
          error: AJ
        }
      } finally {
        try {
          FJ && !FJ.done && (ZJ = eJ.return) && ZJ.call(eJ)
        } finally {
          if (UJ) throw UJ.error
        }
      }
      return XJ
    }

    function mJ() {
      for (var JJ = [], cJ = 0; cJ < arguments.length; cJ++) JJ = JJ.concat(vJ(arguments[cJ]));
      return JJ
    }

    function QJ() {
      for (var JJ = 0, cJ = 0, ZJ = arguments.length; cJ < ZJ; cJ++) JJ += arguments[cJ].length;
      var FJ = Array(JJ),
        UJ = 0;
      for (cJ = 0; cJ < ZJ; cJ++)
        for (var eJ = arguments[cJ], XJ = 0, AJ = eJ.length; XJ < AJ; XJ++, UJ++) FJ[UJ] = eJ[XJ];
      return FJ
    }

    function EJ(JJ, cJ, ZJ) {
      if (ZJ || 2 === arguments.length)
        for (var FJ, UJ = 0, eJ = cJ.length; UJ < eJ; UJ++) !FJ && UJ in cJ || (FJ || (FJ = Array.prototype.slice.call(cJ, 0, UJ)), FJ[UJ] = cJ[UJ]);
      return JJ.concat(FJ || Array.prototype.slice.call(cJ))
    }

    function VJ(JJ) {
      return this instanceof VJ ? (this.v = JJ, this) : new VJ(JJ)
    }

    function KJ(JJ, cJ, ZJ) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var FJ, UJ = ZJ.apply(JJ, cJ || []),
        eJ = [];
      return FJ = Object.create(("function" === typeof AsyncIterator ? AsyncIterator : Object).prototype), XJ("next"), XJ("throw"), XJ("return", (function(JJ) {
        return function(cJ) {
          return Promise.resolve(cJ).then(JJ, jJ)
        }
      })), FJ[Symbol.asyncIterator] = function() {
        return this
      }, FJ;

      function XJ(JJ, cJ) {
        UJ[JJ] && (FJ[JJ] = function(cJ) {
          return new Promise((function(ZJ, FJ) {
            eJ.push([JJ, cJ, ZJ, FJ]) > 1 || AJ(JJ, cJ)
          }))
        }, cJ && (FJ[JJ] = cJ(FJ[JJ])))
      }

      function AJ(JJ, cJ) {
        try {
          (ZJ = UJ[JJ](cJ)).value instanceof VJ ? Promise.resolve(ZJ.value.v).then(qJ, jJ) : YJ(eJ[0][2], ZJ)
        } catch (FJ) {
          YJ(eJ[0][3], FJ)
        }
        var ZJ
      }

      function qJ(JJ) {
        AJ("next", JJ)
      }

      function jJ(JJ) {
        AJ("throw", JJ)
      }

      function YJ(JJ, cJ) {
        JJ(cJ), eJ.shift(), eJ.length && AJ(eJ[0][0], eJ[0][1])
      }
    }

    function yJ(JJ) {
      var cJ, ZJ;
      return cJ = {}, FJ("next"), FJ("throw", (function(JJ) {
        throw JJ
      })), FJ("return"), cJ[Symbol.iterator] = function() {
        return this
      }, cJ;

      function FJ(FJ, UJ) {
        cJ[FJ] = JJ[FJ] ? function(cJ) {
          return (ZJ = !ZJ) ? {
            value: VJ(JJ[FJ](cJ)),
            done: !1
          } : UJ ? UJ(cJ) : cJ
        } : UJ
      }
    }

    function SJ(JJ) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var cJ, ZJ = JJ[Symbol.asyncIterator];
      return ZJ ? ZJ.call(JJ) : (JJ = rJ(JJ), cJ = {}, FJ("next"), FJ("throw"), FJ("return"), cJ[Symbol.asyncIterator] = function() {
        return this
      }, cJ);

      function FJ(ZJ) {
        cJ[ZJ] = JJ[ZJ] && function(cJ) {
          return new Promise((function(FJ, UJ) {
            (function(JJ, cJ, ZJ, FJ) {
              Promise.resolve(FJ).then((function(cJ) {
                JJ({
                  value: cJ,
                  done: ZJ
                })
              }), cJ)
            })(FJ, UJ, (cJ = JJ[ZJ](cJ)).done, cJ.value)
          }))
        }
      }
    }

    function IJ(JJ, cJ) {
      return Object.defineProperty ? Object.defineProperty(JJ, "raw", {
        value: cJ
      }) : JJ.raw = cJ, JJ
    }
    var MJ = Object.create ? function(JJ, cJ) {
        Object.defineProperty(JJ, "default", {
          enumerable: !0,
          value: cJ
        })
      } : function(JJ, cJ) {
        JJ.default = cJ
      },
      bJ = function(JJ) {
        return bJ = Object.getOwnPropertyNames || function(JJ) {
          var cJ = [];
          for (var ZJ in JJ) Object.prototype.hasOwnProperty.call(JJ, ZJ) && (cJ[cJ.length] = ZJ);
          return cJ
        }, bJ(JJ)
      };

    function wJ(JJ) {
      if (JJ && JJ.__esModule) return JJ;
      var cJ = {};
      if (null != JJ)
        for (var ZJ = bJ(JJ), FJ = 0; FJ < ZJ.length; FJ++) "default" !== ZJ[FJ] && fJ(cJ, JJ, ZJ[FJ]);
      return MJ(cJ, JJ), cJ
    }

    function WJ(JJ) {
      return JJ && JJ.__esModule ? JJ : {
        default: JJ
      }
    }

    function gJ(JJ, cJ, ZJ, FJ) {
      if ("a" === ZJ && !FJ) throw new TypeError("Private accessor was defined without a getter");
      if ("function" === typeof cJ ? JJ !== cJ || !FJ : !cJ.has(JJ)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
      return "m" === ZJ ? FJ : "a" === ZJ ? FJ.call(JJ) : FJ ? FJ.value : cJ.get(JJ)
    }

    function HJ(JJ, cJ, ZJ, FJ, UJ) {
      if ("m" === FJ) throw new TypeError("Private method is not writable");
      if ("a" === FJ && !UJ) throw new TypeError("Private accessor was defined without a setter");
      if ("function" === typeof cJ ? JJ !== cJ || !UJ : !cJ.has(JJ)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
      return "a" === FJ ? UJ.call(JJ, ZJ) : UJ ? UJ.value = ZJ : cJ.set(JJ, ZJ), ZJ
    }

    function PJ(JJ, cJ) {
      if (null === cJ || "object" !== typeof cJ && "function" !== typeof cJ) throw new TypeError("Cannot use 'in' operator on non-object");
      return "function" === typeof JJ ? cJ === JJ : JJ.has(cJ)
    }

    function kJ(JJ, cJ, ZJ) {
      if (null !== cJ && void 0 !== cJ) {
        if ("object" !== typeof cJ && "function" !== typeof cJ) throw new TypeError("Object expected.");
        var FJ, UJ;
        if (ZJ) {
          if (!Symbol.asyncDispose) throw new TypeError("Symbol.asyncDispose is not defined.");
          FJ = cJ[Symbol.asyncDispose]
        }
        if (void 0 === FJ) {
          if (!Symbol.dispose) throw new TypeError("Symbol.dispose is not defined.");
          FJ = cJ[Symbol.dispose], ZJ && (UJ = FJ)
        }
        if ("function" !== typeof FJ) throw new TypeError("Object not disposable.");
        UJ && (FJ = function() {
          try {
            UJ.call(this)
          } catch (JJ) {
            return Promise.reject(JJ)
          }
        }), JJ.stack.push({
          value: cJ,
          dispose: FJ,
          async: ZJ
        })
      } else ZJ && JJ.stack.push({
        async: !0
      });
      return cJ
    }
    var pJ = "function" === typeof SuppressedError ? SuppressedError : function(JJ, cJ, ZJ) {
      var FJ = new Error(ZJ);
      return FJ.name = "SuppressedError", FJ.error = JJ, FJ.suppressed = cJ, FJ
    };

    function dJ(JJ) {
      function cJ(cJ) {
        JJ.error = JJ.hasError ? new pJ(cJ, JJ.error, "An error was suppressed during disposal.") : cJ, JJ.hasError = !0
      }
      var ZJ, FJ = 0;
      return function UJ() {
        for (; ZJ = JJ.stack.pop();) try {
          if (!ZJ.async && 1 === FJ) return FJ = 0, JJ.stack.push(ZJ), Promise.resolve().then(UJ);
          if (ZJ.dispose) {
            var eJ = ZJ.dispose.call(ZJ.value);
            if (ZJ.async) return FJ |= 2, Promise.resolve(eJ).then(UJ, (function(JJ) {
              return cJ(JJ), UJ()
            }))
          } else FJ |= 1
        } catch (XJ) {
          cJ(XJ)
        }
        if (1 === FJ) return JJ.hasError ? Promise.reject(JJ.error) : Promise.resolve();
        if (JJ.hasError) throw JJ.error
      }()
    }

    function zJ(JJ, cJ) {
      return "string" === typeof JJ && /^\.\.?\//.test(JJ) ? JJ.replace(/\.(tsx)$|((?:\.d)?)((?:\.[^./]+?)?)\.([cm]?)ts$/i, (function(JJ, ZJ, FJ, UJ, eJ) {
        return ZJ ? cJ ? ".jsx" : ".js" : !FJ || UJ && eJ ? FJ + UJ + "." + eJ.toLowerCase() + "js" : JJ
      })) : JJ
    }
    const NJ = {
      __extends: UJ,
      __assign: eJ,
      __rest: XJ,
      __decorate: AJ,
      __param: qJ,
      __esDecorate: jJ,
      __runInitializers: YJ,
      __propKey: hJ,
      __setFunctionName: DJ,
      __metadata: sJ,
      __awaiter: nJ,
      __generator: GJ,
      __createBinding: fJ,
      __exportStar: xJ,
      __values: rJ,
      __read: vJ,
      __spread: mJ,
      __spreadArrays: QJ,
      __spreadArray: EJ,
      __await: VJ,
      __asyncGenerator: KJ,
      __asyncDelegator: yJ,
      __asyncValues: SJ,
      __makeTemplateObject: IJ,
      __importStar: wJ,
      __importDefault: WJ,
      __classPrivateFieldGet: gJ,
      __classPrivateFieldSet: HJ,
      __classPrivateFieldIn: PJ,
      __addDisposableResource: kJ,
      __disposeResources: dJ,
      __rewriteRelativeImportExtension: zJ
    }
  }
};
Object.freeze(modules);
for (const JJ in modules) Object.freeze(modules[JJ]);