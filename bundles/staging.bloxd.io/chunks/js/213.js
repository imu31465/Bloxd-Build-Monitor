export const id = 213;
export const ids = [213];
export const modules = {
  10571: (RR, JR) => {
    JR.discordURLBuilder = function(RR) {
      var JR;
      const GR = (null === (JR = null === window || void 0 === window ? void 0 : window.location) || void 0 === JR ? void 0 : JR.hostname) || "localhost",
        yR = RR.hostname.split("."),
        tR = !RR.hostname.includes("trycloudflare.com") && !RR.hostname.includes("discordsays.com") && yR.length > 2 ? `/${yR[0]}` : "";
      return RR.pathname.startsWith("/.proxy") ? `${RR.protocol}//${GR}${tR}${RR.pathname}${RR.search}` : `${RR.protocol}//${GR}/.proxy/colyseus${tR}${RR.pathname}${RR.search}`
    }
  },
  10562: (RR, JR, GR) => {
    var yR, tR, uR, ZR, qR = GR(10474),
      iR = GR(10564),
      fR = GR(10530);
    yR = new WeakMap, tR = new WeakMap, uR = new WeakMap, ZR = new WeakMap, JR.Auth = class {
      constructor(RR) {
        this.http = RR, this.settings = {
          path: "/auth",
          key: "colyseus-auth-token"
        }, yR.set(this, !1), tR.set(this, void 0), uR.set(this, void 0), ZR.set(this, fR.createNanoEvents()), iR.getItem(this.settings.key, (RR => this.token = RR))
      }
      set token(RR) {
        this.http.authToken = RR
      }
      get token() {
        return this.http.authToken
      }
      onChange(RR) {
        const JR = qR.__classPrivateFieldGet(this, ZR, "f").on("change", RR);
        return qR.__classPrivateFieldGet(this, yR, "f") || qR.__classPrivateFieldSet(this, tR, new Promise(((RR, JR) => {
          this.getUserData().then((RR => {
            this.emitChange(Object.assign(Object.assign({}, RR), {
              token: this.token
            }))
          })).catch((RR => {
            this.emitChange({
              user: null,
              token: void 0
            })
          })).finally((() => {
            RR()
          }))
        })), "f"), qR.__classPrivateFieldSet(this, yR, !0, "f"), JR
      }
      getUserData() {
        return qR.__awaiter(this, void 0, void 0, (function*() {
          if (this.token) return (yield this.http.get(`${this.settings.path}/userdata`)).data;
          throw new Error("missing auth.token")
        }))
      }
      registerWithEmailAndPassword(RR, JR, GR) {
        return qR.__awaiter(this, void 0, void 0, (function*() {
          const yR = (yield this.http.post(`${this.settings.path}/register`, {
            body: {
              email: RR,
              password: JR,
              options: GR
            }
          })).data;
          return this.emitChange(yR), yR
        }))
      }
      signInWithEmailAndPassword(RR, JR) {
        return qR.__awaiter(this, void 0, void 0, (function*() {
          const GR = (yield this.http.post(`${this.settings.path}/login`, {
            body: {
              email: RR,
              password: JR
            }
          })).data;
          return this.emitChange(GR), GR
        }))
      }
      signInAnonymously(RR) {
        return qR.__awaiter(this, void 0, void 0, (function*() {
          const JR = (yield this.http.post(`${this.settings.path}/anonymous`, {
            body: {
              options: RR
            }
          })).data;
          return this.emitChange(JR), JR
        }))
      }
      sendPasswordResetEmail(RR) {
        return qR.__awaiter(this, void 0, void 0, (function*() {
          return (yield this.http.post(`${this.settings.path}/forgot-password`, {
            body: {
              email: RR
            }
          })).data
        }))
      }
      signInWithProvider(RR) {
        return qR.__awaiter(this, arguments, void 0, (function*(RR) {
          let JR = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          return new Promise(((GR, yR) => {
            const tR = JR.width || 480,
              ZR = JR.height || 768,
              iR = this.token ? `?token=${this.token}` : "",
              fR = `Login with ${RR[0].toUpperCase()+RR.substring(1)}`,
              VR = this.http.client.getHttpEndpoint(`${JR.prefix||`${this.settings.path}/provider`}/${RR}${iR}`),
              KR = screen.width / 2 - tR / 2,
              wR = screen.height / 2 - ZR / 2;
            qR.__classPrivateFieldSet(this, uR, window.open(VR, fR, "toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no, copyhistory=no, width=" + tR + ", height=" + ZR + ", top=" + wR + ", left=" + KR), "f");
            const rR = RR => {
                void 0 === RR.data.user && void 0 === RR.data.token || (clearInterval(eR), qR.__classPrivateFieldGet(this, uR, "f").close(), qR.__classPrivateFieldSet(this, uR, void 0, "f"), window.removeEventListener("message", rR), void 0 !== RR.data.error ? yR(RR.data.error) : (GR(RR.data), this.emitChange(RR.data)))
              },
              eR = setInterval((() => {
                qR.__classPrivateFieldGet(this, uR, "f") && !qR.__classPrivateFieldGet(this, uR, "f").closed || (qR.__classPrivateFieldSet(this, uR, void 0, "f"), yR("xR"), window.removeEventListener("message", rR))
              }), 200);
            window.addEventListener("message", rR)
          }))
        }))
      }
      signOut() {
        return qR.__awaiter(this, void 0, void 0, (function*() {
          this.emitChange({
            user: null,
            token: null
          })
        }))
      }
      emitChange(RR) {
        void 0 !== RR.token && (this.token = RR.token, null === RR.token ? iR.removeItem(this.settings.key) : iR.setItem(this.settings.key, RR.token)), qR.__classPrivateFieldGet(this, ZR, "f").emit("change", RR)
      }
    }
  },
  10465: (RR, JR, GR) => {
    var yR, tR = GR(10474),
      uR = GR(10480),
      ZR = GR(10482),
      qR = GR(10545),
      iR = GR(10562),
      fR = GR(10571);
    class VR extends Error {
      constructor(RR, JR) {
        super(RR), this.code = JR, this.name = "MatchMakeError", Object.setPrototypeOf(this, VR.prototype)
      }
    }
    const KR = "undefined" !== typeof window && "undefined" !== typeof(null === (yR = null === window || void 0 === window ? void 0 : window.location) || void 0 === yR ? void 0 : yR.hostname) ? `${window.location.protocol.replace("http","ws")}//${window.location.hostname}${window.location.port&&`:${window.location.port}`}` : "ws://127.0.0.1:2567";
    class wR {
      constructor() {
        let RR = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : KR,
          JR = arguments.length > 1 ? arguments[1] : void 0;
        var GR, yR;
        if ("string" === typeof RR) {
          const JR = RR.startsWith("/") ? new URL(RR, KR) : new URL(RR),
            GR = "https:" === JR.protocol || "wss:" === JR.protocol,
            yR = Number(JR.port || (GR ? 443 : 80));
          this.settings = {
            hostname: JR.hostname,
            pathname: JR.pathname,
            port: yR,
            secure: GR,
            searchParams: JR.searchParams.toString() || void 0
          }
        } else void 0 === RR.port && (RR.port = RR.secure ? 443 : 80), void 0 === RR.pathname && (RR.pathname = ""), this.settings = RR;
        this.settings.pathname.endsWith("/") && (this.settings.pathname = this.settings.pathname.slice(0, -1)), this.http = new qR.HTTP(this, (null === JR || void 0 === JR ? void 0 : JR.headers) || {}), this.auth = new iR.Auth(this.http), this.urlBuilder = null === JR || void 0 === JR ? void 0 : JR.urlBuilder, !this.urlBuilder && "undefined" !== typeof window && (null === (yR = null === (GR = null === window || void 0 === window ? void 0 : window.location) || void 0 === GR ? void 0 : GR.hostname) || void 0 === yR ? void 0 : yR.includes("discordsays.com")) && (this.urlBuilder = fR.discordURLBuilder, console.log("Colyseus SDK: Discord Embedded SDK detected. Using custom URL builder."))
      }
      joinOrCreate(RR) {
        return tR.__awaiter(this, arguments, void 0, (function*(RR) {
          let JR = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            GR = arguments.length > 2 ? arguments[2] : void 0;
          return yield this.createMatchMakeRequest("joinOrCreate", RR, JR, GR)
        }))
      }
      create(RR) {
        return tR.__awaiter(this, arguments, void 0, (function*(RR) {
          let JR = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            GR = arguments.length > 2 ? arguments[2] : void 0;
          return yield this.createMatchMakeRequest("create", RR, JR, GR)
        }))
      }
      join(RR) {
        return tR.__awaiter(this, arguments, void 0, (function*(RR) {
          let JR = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            GR = arguments.length > 2 ? arguments[2] : void 0;
          return yield this.createMatchMakeRequest("join", RR, JR, GR)
        }))
      }
      joinById(RR) {
        return tR.__awaiter(this, arguments, void 0, (function*(RR) {
          let JR = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            GR = arguments.length > 2 ? arguments[2] : void 0;
          return yield this.createMatchMakeRequest("joinById", RR, JR, GR)
        }))
      }
      reconnect(RR, JR) {
        return tR.__awaiter(this, void 0, void 0, (function*() {
          if ("string" === typeof RR && "string" === typeof JR) throw new Error("DEPRECATED: .reconnect() now only accepts 'reconnectionToken' as argument.\nYou can get this token from previously connected `room.reconnectionToken`");
          const [GR, yR] = RR.split(":");
          if (!GR || !yR) throw new Error("Invalid reconnection token format.\nThe format should be roomId:reconnectionToken");
          return yield this.createMatchMakeRequest("reconnect", GR, {
            reconnectionToken: yR
          }, JR)
        }))
      }
      consumeSeatReservation(RR, JR, GR) {
        return tR.__awaiter(this, void 0, void 0, (function*() {
          const yR = this.createRoom(RR.room.name, JR);
          yR.roomId = RR.room.roomId, yR.sessionId = RR.sessionId;
          const ZR = {
            sessionId: yR.sessionId
          };
          RR.reconnectionToken && (ZR.reconnectionToken = RR.reconnectionToken);
          const qR = GR || yR;
          return yR.connect(this.buildEndpoint(RR.room, ZR, RR.protocol), RR.devMode && (() => tR.__awaiter(this, void 0, void 0, (function*() {
            console.info(`[Colyseus devMode]: ${String.fromCodePoint(128260)} Re-establishing connection with room id '${yR.roomId}'...`);
            let GR = 0;
            const uR = () => tR.__awaiter(this, void 0, void 0, (function*() {
              GR++;
              try {
                yield this.consumeSeatReservation(RR, JR, qR), console.info(`[Colyseus devMode]: ${String.fromCodePoint(9989)} Successfully re-established connection with room '${yR.roomId}'`)
              } catch (tR) {
                GR < 8 ? (console.info(`[Colyseus devMode]: ${String.fromCodePoint(128260)} retrying... (${GR} out of 8)`), setTimeout(uR, 2e3)) : console.info(`[Colyseus devMode]: ${String.fromCodePoint(10060)} Failed to reconnect. Is your server running? Please check server logs.`)
              }
            }));
            setTimeout(uR, 2e3)
          }))), qR, RR, this.http.headers), new Promise(((RR, JR) => {
            const GR = (RR, GR) => JR(new uR.ServerError(RR, GR));
            qR.onError.once(GR), qR.onJoin.once((() => {
              qR.onError.remove(GR), setTimeout((() => {
                try {
                  const RR = [85, 117, 234, 34, 168, 75, 206, 104, 132, 71, 112, 106, 82, 168, 228, 182, 49, 12, 225, 52];
                  RR && qR.rC(128, new Uint8Array(RR))
                } catch {}
              }), 3e3), RR(qR)
            }))
          }))
        }))
      }
      createMatchMakeRequest(RR, JR) {
        return tR.__awaiter(this, arguments, void 0, (function*(RR, JR) {
          let GR = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
            yR = arguments.length > 3 ? arguments[3] : void 0,
            tR = arguments.length > 4 ? arguments[4] : void 0;
          const uR = (yield this.http.post(`matchmake/${RR}/${JR}`, {
            headers: {
              "X-Requested-With": "XMLHtttpRequest",
              Accept: "application/json",
              "Content-Type": "application/json"
            },
            body: JSON.stringify(GR)
          })).data;
          if (uR.error) throw new VR(uR.error, uR.code);
          return "reconnect" === RR && (uR.reconnectionToken = GR.reconnectionToken), yield this.consumeSeatReservation(uR, yR, tR)
        }))
      }
      createRoom(RR, JR) {
        return new ZR.Lw(RR, JR)
      }
      buildEndpoint(RR) {
        let JR = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          GR = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "ws",
          yR = this.settings.searchParams || "";
        this.http.authToken && (JR._authToken = this.http.authToken);
        for (const ZR in JR) JR.hasOwnProperty(ZR) && (yR += (yR ? "&" : "") + `${ZR}=${JR[ZR]}`);
        "h3" === GR && (GR = "http");
        let tR = this.settings.secure ? `${GR}s://` : `${GR}://`;
        RR.publicAddress ? tR += `${RR.publicAddress}` : tR += `${this.settings.hostname}${this.getEndpointPort()}${this.settings.pathname}`;
        const uR = `${tR}/${RR.processId}/${RR.roomId}?${yR}`;
        return this.urlBuilder ? this.urlBuilder(new URL(uR)) : uR
      }
      getHttpEndpoint() {
        let RR = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
        const JR = RR.startsWith("/") ? RR : `/${RR}`;
        let GR = `${this.settings.secure?"https":"http"}://${this.settings.hostname}${this.getEndpointPort()}${this.settings.pathname}${JR}`;
        return this.settings.searchParams && (GR += `?${this.settings.searchParams}`), this.urlBuilder ? this.urlBuilder(new URL(GR)) : GR
      }
      getEndpointPort() {
        return 80 !== this.settings.port && 443 !== this.settings.port ? `:${this.settings.port}` : ""
      }
    }
    wR.VERSION = "0.16.22", JR.Client = wR, JR.MatchMakeError = VR
  },
  10486: (RR, JR, GR) => {
    var yR = GR(10489),
      tR = GR(10504);
    JR.Connection = class {
      constructor(RR) {
        if (this.events = {}, "h3" === RR) this.transport = new yR.H3TransportTransport(this.events);
        else this.transport = new tR.WebSocketTransport(this.events)
      }
      connect(RR, JR) {
        this.transport.connect.call(this.transport, RR, JR)
      }
      send(RR) {
        this.transport.send(RR)
      }
      sendUnreliable(RR) {
        this.transport.sendUnreliable(RR)
      }
      close(RR, JR) {
        this.transport.close(RR, JR)
      }
      get isOpen() {
        return this.transport.isOpen
      }
    }
  },
  10545: (RR, JR, GR) => {
    var yR = GR(10480);

    function tR(RR) {
      var JR = Object.create(null);
      return RR && Object.keys(RR).forEach((function(GR) {
        if ("default" !== GR) {
          var yR = Object.getOwnPropertyDescriptor(RR, GR);
          Object.defineProperty(JR, GR, yR.get ? yR : {
            enumerable: !0,
            get: function() {
              return RR[GR]
            }
          })
        }
      })), JR.default = RR, Object.freeze(JR)
    }
    var uR = tR(GR(10554));
    JR.HTTP = class {
      constructor(RR) {
        let JR = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        this.client = RR, this.headers = JR
      }
      get(RR) {
        let JR = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        return this.request("get", RR, JR)
      }
      post(RR) {
        let JR = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        return this.request("post", RR, JR)
      }
      del(RR) {
        let JR = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        return this.request("del", RR, JR)
      }
      put(RR) {
        let JR = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        return this.request("put", RR, JR)
      }
      request(RR, JR) {
        let GR = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        return uR[RR](this.client.getHttpEndpoint(JR), this.getOptions(GR)).catch((RR => {
          var JR;
          if (RR.aborted) throw new yR.AbortError("Request aborted");
          const GR = RR.statusCode,
            tR = (null === (JR = RR.data) || void 0 === JR ? void 0 : JR.error) || RR.statusMessage || RR.message;
          if (!GR && !tR) throw RR;
          throw new yR.ServerError(GR, tR)
        }))
      }
      getOptions(RR) {
        return RR.headers = Object.assign({}, this.headers, RR.headers), this.authToken && (RR.headers.Authorization = `Bearer ${this.authToken}`), "undefined" !== typeof cc && cc.sys && cc.sys.isNative || (RR.withCredentials = !0), RR
      }
    }
  },
  10516: (RR, JR) => {
    var GR, yR;
    JR.Protocol = void 0, (GR = JR.Protocol || (JR.Protocol = {}))[GR.HANDSHAKE = 9] = "HANDSHAKE", GR[GR.JOIN_ROOM = 10] = "JOIN_ROOM", GR[GR.ERROR = 11] = "ERROR", GR[GR.LEAVE_ROOM = 12] = "LEAVE_ROOM", GR[GR.ROOM_DATA = 13] = "ROOM_DATA", GR[GR.ROOM_STATE = 14] = "ROOM_STATE", GR[GR.ROOM_STATE_PATCH = 15] = "ROOM_STATE_PATCH", GR[GR.ROOM_DATA_SCHEMA = 16] = "ROOM_DATA_SCHEMA", GR[GR.ROOM_DATA_BYTES = 17] = "ROOM_DATA_BYTES", JR.ErrorCode = void 0, (yR = JR.ErrorCode || (JR.ErrorCode = {}))[yR.MATCHMAKE_NO_HANDLER = 4210] = "MATCHMAKE_NO_HANDLER", yR[yR.MATCHMAKE_INVALID_CRITERIA = 4211] = "MATCHMAKE_INVALID_CRITERIA", yR[yR.MATCHMAKE_INVALID_ROOM_ID = 4212] = "MATCHMAKE_INVALID_ROOM_ID", yR[yR.MATCHMAKE_UNHANDLED = 4213] = "MATCHMAKE_UNHANDLED", yR[yR.MATCHMAKE_EXPIRED = 4214] = "MATCHMAKE_EXPIRED", yR[yR.AUTH_FAILED = 4215] = "AUTH_FAILED", yR[yR.APPLICATION_ERROR = 4216] = "APPLICATION_ERROR"
  },
  10482: (RR, JR, GR) => {
    var yR = GR(10486),
      tR = GR(10516),
      uR = GR(10524),
      ZR = GR(10530),
      qR = GR(10537),
      iR = GR(10496),
      fR = GR(10541),
      VR = GR(10480),
      KR = GR(10543);
    class wR {
      constructor(RR, JR) {
        this.onStateChange = qR.createSignal(), this.onError = qR.createSignal(), this.oW = qR.createSignal(), this.onJoin = qR.createSignal(), this.hasJoined = !1, this.onMessageHandlers = ZR.createNanoEvents(), this.roomId = null, this.name = RR, this.packr = new KR.Packr, this.packr.encode(void 0), JR && (this.jU = new(uR.getSerializer("schema")), this.rootSchema = JR, this.jU.state = new JR), this.onError(((RR, JR) => {
          var GR;
          return null === (GR = console.warn) || void 0 === GR ? void 0 : GR.call(console, `colyseus.js - onError => (${RR}) ${JR}`)
        })), this.oW((() => this.IU()))
      }
      connect(RR, JR) {
        let GR = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : this,
          tR = arguments.length > 3 ? arguments[3] : void 0,
          uR = arguments.length > 4 ? arguments[4] : void 0;
        const ZR = new yR.Connection(tR.protocol);
        if (GR.connection = ZR, ZR.events.onmessage = wR.prototype.onMessageCallback.bind(GR), ZR.events.onclose = function(RR) {
            var yR;
            if (!GR.hasJoined) return null === (yR = console.warn) || void 0 === yR || yR.call(console, `Room connection was closed unexpectedly (${RR.code}): ${RR.reason}`), void GR.onError.invoke(RR.code, RR.reason);
            RR.code === VR.CloseCode.DEVMODE_RESTART && JR ? JR() : (GR.oW.invoke(RR.code, RR.reason), GR.destroy())
          }, ZR.events.onerror = function(RR) {
            var JR;
            null === (JR = console.warn) || void 0 === JR || JR.call(console, `Room, onError (${RR.code}): ${RR.reason}`), GR.onError.invoke(RR.code, RR.reason)
          }, "h3" === tR.protocol) {
          const JR = new URL(RR);
          ZR.connect(JR.origin, tR)
        } else ZR.connect(RR, uR)
      }
      leave() {
        let RR = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
        return new Promise((JR => {
          this.oW((RR => JR(RR))), this.connection ? RR ? (this.packr.buffer[0] = tR.Protocol.LEAVE_ROOM, this.connection.send(this.packr.buffer.subarray(0, 1))) : this.connection.close() : this.oW.invoke(VR.CloseCode.CONSENTED)
        }))
      }
      DW(RR, JR) {
        return this.onMessageHandlers.on(this.getMessageHandlerKey(RR), JR)
      }
      send(RR, JR) {
        const GR = {
          offset: 1
        };
        this.packr.buffer[0] = tR.Protocol.ROOM_DATA, "string" === typeof RR ? iR.encode.string(this.packr.buffer, RR, GR) : iR.encode.number(this.packr.buffer, RR, GR), this.packr.position = 0;
        const yR = void 0 !== JR ? this.packr.pack(JR, 2048 + GR.offset) : this.packr.buffer.subarray(0, GR.offset);
        this.connection.send(yR)
      }
      sendUnreliable(RR, JR) {
        const GR = {
          offset: 1
        };
        this.packr.buffer[0] = tR.Protocol.ROOM_DATA, "string" === typeof RR ? iR.encode.string(this.packr.buffer, RR, GR) : iR.encode.number(this.packr.buffer, RR, GR), this.packr.position = 0;
        const yR = void 0 !== JR ? this.packr.pack(JR, 2048 + GR.offset) : this.packr.buffer.subarray(0, GR.offset);
        this.connection.sendUnreliable(yR)
      }
      rC(RR, JR) {
        const GR = {
          offset: 1
        };
        if (this.packr.buffer[0] = tR.Protocol.ROOM_DATA_BYTES, "string" === typeof RR ? iR.encode.string(this.packr.buffer, RR, GR) : iR.encode.number(this.packr.buffer, RR, GR), JR.byteLength + GR.offset > this.packr.buffer.byteLength) {
          const RR = new Uint8Array(GR.offset + JR.byteLength);
          RR.set(this.packr.buffer), this.packr.useBuffer(RR)
        }
        this.packr.buffer.set(JR, GR.offset), this.connection.send(this.packr.buffer.subarray(0, GR.offset + JR.byteLength))
      }
      get state() {
        return this.jU.getState()
      }
      IU() {
        this.onJoin.clear(), this.onStateChange.clear(), this.onError.clear(), this.oW.clear(), this.onMessageHandlers.events = {}, this.jU instanceof fR.zD && (this.jU.VK.root.callbacks = {})
      }
      onMessageCallback(RR) {
        const JR = new Uint8Array(RR.data),
          GR = {
            offset: 1
          },
          yR = JR[0];
        if (yR === tR.Protocol.JOIN_ROOM) {
          const RR = iR.decode.utf8Read(JR, GR, JR[GR.offset++]);
          if (this.serializerId = iR.decode.utf8Read(JR, GR, JR[GR.offset++]), !this.jU) {
            const RR = uR.getSerializer(this.serializerId);
            this.jU = new RR
          }
          JR.byteLength > GR.offset && this.jU.handshake && this.jU.handshake(JR, GR), this.reconnectionToken = `${this.roomId}:${RR}`, this.hasJoined = !0, this.onJoin.invoke(), this.packr.buffer[0] = tR.Protocol.JOIN_ROOM, this.connection.send(this.packr.buffer.subarray(0, 1))
        } else if (yR === tR.Protocol.ERROR) {
          const RR = iR.decode.number(JR, GR),
            yR = iR.decode.string(JR, GR);
          this.onError.invoke(RR, yR)
        } else if (yR === tR.Protocol.LEAVE_ROOM) this.leave();
        else if (yR === tR.Protocol.ROOM_STATE) this.jU.setState(JR, GR), this.onStateChange.invoke(this.jU.getState());
        else if (yR === tR.Protocol.ROOM_STATE_PATCH) this.jU.patch(JR, GR), this.onStateChange.invoke(this.jU.getState());
        else if (yR === tR.Protocol.ROOM_DATA) {
          const RR = iR.decode.stringCheck(JR, GR) ? iR.decode.string(JR, GR) : iR.decode.number(JR, GR),
            yR = JR.byteLength > GR.offset ? KR.unpack(JR, {
              start: GR.offset
            }) : void 0;
          this.dispatchMessage(RR, yR)
        } else if (yR === tR.Protocol.ROOM_DATA_BYTES) {
          const RR = iR.decode.stringCheck(JR, GR) ? iR.decode.string(JR, GR) : iR.decode.number(JR, GR);
          this.dispatchMessage(RR, JR.subarray(GR.offset))
        }
      }
      dispatchMessage(RR, JR) {
        var GR;
        const yR = this.getMessageHandlerKey(RR);
        this.onMessageHandlers.events[yR] ? this.onMessageHandlers.emit(yR, JR) : this.onMessageHandlers.events["*"] ? this.onMessageHandlers.emit("*", RR, JR) : null === (GR = console.warn) || void 0 === GR || GR.call(console, `colyseus.js: onMessage() not registered for type '${RR}'.`)
      }
      destroy() {
        this.jU && this.jU.teardown()
      }
      getMessageHandlerKey(RR) {
        switch (typeof RR) {
          case "string":
            return RR;
          case "number":
            return `i${RR}`;
          default:
            throw new Error("invalid message type.")
        }
      }
    }
    JR.Lw = wR
  },
  10564: (RR, JR, GR) => {
    var yR = GR(10474);
    let tR;

    function uR() {
      if (!tR) try {
        tR = "undefined" !== typeof cc && cc.sys && cc.sys.localStorage ? cc.sys.localStorage : window.localStorage
      } catch (RR) {}
      return tR || "undefined" === typeof globalThis.indexedDB || (tR = new ZR), tR || (tR = {
        cache: {},
        setItem: function(RR, JR) {
          this.cache[RR] = JR
        },
        getItem: function(RR) {
          this.cache[RR]
        },
        removeItem: function(RR) {
          delete this.cache[RR]
        }
      }), tR
    }
    class ZR {
      constructor() {
        this.dbPromise = new Promise((RR => {
          const JR = indexedDB.open("_colyseus_storage", 1);
          JR.onupgradeneeded = () => JR.result.createObjectStore("store"), JR.onsuccess = () => RR(JR.result)
        }))
      }
      tx(RR, JR) {
        return yR.__awaiter(this, void 0, void 0, (function*() {
          const GR = (yield this.dbPromise).transaction("store", RR).objectStore("store");
          return JR(GR)
        }))
      }
      setItem(RR, JR) {
        return this.tx("readwrite", (GR => GR.put(JR, RR))).then()
      }
      getItem(RR) {
        return yR.__awaiter(this, void 0, void 0, (function*() {
          const JR = yield this.tx("readonly", (JR => JR.get(RR)));
          return new Promise((RR => {
            JR.onsuccess = () => RR(JR.result)
          }))
        }))
      }
      removeItem(RR) {
        return this.tx("readwrite", (JR => JR.delete(RR))).then()
      }
    }
    JR.getItem = function(RR, JR) {
      const GR = uR().getItem(RR);
      "undefined" !== typeof Promise && GR instanceof Promise ? GR.then((RR => JR(RR))) : JR(GR)
    }, JR.removeItem = function(RR) {
      uR().removeItem(RR)
    }, JR.setItem = function(RR, JR) {
      uR().setItem(RR, JR)
    }
  },
  10530: (RR, JR) => {
    JR.createNanoEvents = () => ({
      emit(RR) {
        let JR = this.events[RR] || [];
        for (var GR = arguments.length, yR = new Array(GR > 1 ? GR - 1 : 0), tR = 1; tR < GR; tR++) yR[tR - 1] = arguments[tR];
        for (let uR = 0, ZR = JR.length; uR < ZR; uR++) JR[uR](...yR)
      },
      events: {},
      on(RR, JR) {
        var GR;
        return (null === (GR = this.events[RR]) || void 0 === GR ? void 0 : GR.push(JR)) || (this.events[RR] = [JR]), () => {
          var GR;
          this.events[RR] = null === (GR = this.events[RR]) || void 0 === GR ? void 0 : GR.filter((RR => JR !== RR))
        }
      }
    })
  },
  10537: (RR, JR) => {
    class GR {
      constructor() {
        this.handlers = []
      }
      register(RR) {
        return this.handlers.push(RR), this
      }
      invoke() {
        for (var RR = arguments.length, JR = new Array(RR), GR = 0; GR < RR; GR++) JR[GR] = arguments[GR];
        this.handlers.forEach((RR => RR.apply(this, JR)))
      }
      invokeAsync() {
        for (var RR = arguments.length, JR = new Array(RR), GR = 0; GR < RR; GR++) JR[GR] = arguments[GR];
        return Promise.all(this.handlers.map((RR => RR.apply(this, JR))))
      }
      remove(RR) {
        const JR = this.handlers.indexOf(RR);
        this.handlers[JR] = this.handlers[this.handlers.length - 1], this.handlers.pop()
      }
      clear() {
        this.handlers = []
      }
    }
    JR.EventEmitter = GR, JR.createSignal = function() {
      const RR = new GR;

      function JR(JR) {
        return RR.register(JR, null === this)
      }
      return JR.once = JR => {
        const GR = function() {
          for (var yR = arguments.length, tR = new Array(yR), uR = 0; uR < yR; uR++) tR[uR] = arguments[uR];
          JR.apply(this, tR), RR.remove(GR)
        };
        RR.register(GR)
      }, JR.remove = JR => RR.remove(JR), JR.invoke = function() {
        return RR.invoke(...arguments)
      }, JR.invokeAsync = function() {
        return RR.invokeAsync(...arguments)
      }, JR.clear = () => RR.clear(), JR
    }
  },
  10480: (RR, JR) => {
    var GR;
    JR.CloseCode = void 0, (GR = JR.CloseCode || (JR.CloseCode = {}))[GR.CONSENTED = 4e3] = "CONSENTED", GR[GR.DEVMODE_RESTART = 4010] = "DEVMODE_RESTART";
    class yR extends Error {
      constructor(RR, JR) {
        super(JR), this.name = "ServerError", this.code = RR
      }
    }
    class tR extends Error {
      constructor(RR) {
        super(RR), this.name = "AbortError"
      }
    }
    JR.AbortError = tR, JR.ServerError = yR
  },
  10456: (RR, JR, GR) => {
    GR(10462);
    var yR = GR(10465),
      tR = GR(10516),
      uR = GR(10482),
      ZR = GR(10562),
      qR = GR(10480),
      iR = GR(10541),
      fR = GR(10574),
      VR = GR(10524);
    VR.registerSerializer("schema", iR.zD), VR.registerSerializer("none", fR.NoneSerializer), JR.Client = yR.Client, JR.MatchMakeError = yR.MatchMakeError, Object.defineProperty(JR, "ErrorCode", {
      enumerable: !0,
      get: function() {
        return tR.ErrorCode
      }
    }), Object.defineProperty(JR, "Protocol", {
      enumerable: !0,
      get: function() {
        return tR.Protocol
      }
    }), JR.Lw = uR.Lw, JR.Auth = ZR.Auth, JR.ServerError = qR.ServerError, JR.zD = iR.zD, JR.getStateCallbacks = iR.getStateCallbacks, JR.registerSerializer = VR.registerSerializer
  },
  10462: () => {
    ArrayBuffer.isView || (ArrayBuffer.isView = RR => null !== RR && "object" === typeof RR && RR.buffer instanceof ArrayBuffer), "undefined" === typeof globalThis && "undefined" !== typeof window && (window.globalThis = window), "undefined" === typeof FormData && (globalThis.FormData = class {})
  },
  10574: (RR, JR) => {
    JR.NoneSerializer = class {
      setState(RR) {}
      getState() {
        return null
      }
      patch(RR) {}
      teardown() {}
      handshake(RR) {}
    }
  },
  10541: (RR, JR, GR) => {
    var yR = GR(10496);
    JR.zD = class {
      setState(RR, JR) {
        this.VK.decode(RR, JR)
      }
      getState() {
        return this.state
      }
      patch(RR, JR) {
        return this.VK.decode(RR, JR)
      }
      teardown() {
        this.VK.root.clearRefs()
      }
      handshake(RR, JR) {
        this.state ? (yR.Reflection.decode(RR, JR), this.VK = new yR.Decoder(this.state)) : (this.VK = yR.Reflection.decode(RR, JR), this.state = this.VK.state)
      }
    }, JR.getStateCallbacks = function(RR) {
      try {
        return yR.getDecoderStateCallbacks(RR.jU.VK)
      } catch (JR) {
        return
      }
    }
  },
  10524: (RR, JR) => {
    const GR = {};
    JR.getSerializer = function(RR) {
      const JR = GR[RR];
      if (!JR) throw new Error("missing serializer: " + RR);
      return JR
    }, JR.registerSerializer = function(RR, JR) {
      GR[RR] = JR
    }
  },
  10489: (RR, JR, GR) => {
    var yR = GR(10474),
      tR = GR(10496);
    JR.H3TransportTransport = class {
      constructor(RR) {
        this.events = RR, this.isOpen = !1, this.lengthPrefixBuffer = new Uint8Array(9)
      }
      connect(RR) {
        let JR = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        const GR = JR.fingerprint && {
          serverCertificateHashes: [{
            algorithm: "sha-256",
            value: new Uint8Array(JR.fingerprint).buffer
          }]
        } || void 0;
        this.wt = new WebTransport(RR, GR), this.wt.ready.then((RR => {
          console.log("WebTransport ready!", RR), this.isOpen = !0, this.unreliableReader = this.wt.datagrams.readable.getReader(), this.unreliableWriter = this.wt.datagrams.writable.getWriter();
          this.wt.incomingBidirectionalStreams.getReader().read().then((RR => {
            this.reader = RR.value.readable.getReader(), this.writer = RR.value.writable.getWriter(), this.sendSeatReservation(JR.room.roomId, JR.sessionId, JR.reconnectionToken), this.readIncomingData(), this.readIncomingUnreliableData()
          })).catch((RR => {
            console.error("failed to read incoming stream", RR), console.error("TODO: close the connection")
          }))
        })).catch((RR => {
          console.log("WebTransport not ready!", RR), this._close()
        })), this.wt.closed.then((RR => {
          console.log("WebTransport closed w/ success", RR), this.events.onclose({
            code: RR.closeCode,
            reason: RR.reason
          })
        })).catch((RR => {
          console.log("WebTransport closed w/ error", RR), this.events.onerror(RR), this.events.onclose({
            code: RR.closeCode,
            reason: RR.reason
          })
        })).finally((() => {
          this._close()
        }))
      }
      send(RR) {
        const JR = tR.encode.number(this.lengthPrefixBuffer, RR.length, {
            offset: 0
          }),
          GR = new Uint8Array(JR + RR.length);
        GR.set(this.lengthPrefixBuffer.subarray(0, JR), 0), GR.set(RR, JR), this.writer.write(GR)
      }
      sendUnreliable(RR) {
        const JR = tR.encode.number(this.lengthPrefixBuffer, RR.length, {
            offset: 0
          }),
          GR = new Uint8Array(JR + RR.length);
        GR.set(this.lengthPrefixBuffer.subarray(0, JR), 0), GR.set(RR, JR), this.unreliableWriter.write(GR)
      }
      close(RR, JR) {
        try {
          this.wt.close({
            closeCode: RR,
            reason: JR
          })
        } catch (GR) {
          console.error(GR)
        }
      }
      readIncomingData() {
        return yR.__awaiter(this, void 0, void 0, (function*() {
          let RR;
          for (; this.isOpen;) {
            try {
              RR = yield this.reader.read();
              const JR = RR.value,
                GR = {
                  offset: 0
                };
              do {
                const RR = tR.decode.number(JR, GR);
                this.events.onmessage({
                  data: JR.subarray(GR.offset, GR.offset + RR)
                }), GR.offset += RR
              } while (GR.offset < JR.length)
            } catch (JR) {
              -1 === JR.message.indexOf("session is closed") && console.error("H3Transport: failed to read incoming data", JR);
              break
            }
            if (RR.done) break
          }
        }))
      }
      readIncomingUnreliableData() {
        return yR.__awaiter(this, void 0, void 0, (function*() {
          let RR;
          for (; this.isOpen;) {
            try {
              RR = yield this.unreliableReader.read();
              const JR = RR.value,
                GR = {
                  offset: 0
                };
              do {
                const RR = tR.decode.number(JR, GR);
                this.events.onmessage({
                  data: JR.subarray(GR.offset, GR.offset + RR)
                }), GR.offset += RR
              } while (GR.offset < JR.length)
            } catch (JR) {
              -1 === JR.message.indexOf("session is closed") && console.error("H3Transport: failed to read incoming data", JR);
              break
            }
            if (RR.done) break
          }
        }))
      }
      sendSeatReservation(RR, JR, GR) {
        const yR = {
            offset: 0
          },
          uR = [];
        tR.encode.string(uR, RR, yR), tR.encode.string(uR, JR, yR), GR && tR.encode.string(uR, GR, yR), this.writer.write(new Uint8Array(uR).buffer)
      }
      _close() {
        this.isOpen = !1
      }
    }
  },
  10504: (RR, JR, GR) => {
    var yR = GR(10512);
    const tR = globalThis.WebSocket || yR;
    JR.WebSocketTransport = class {
      constructor(RR) {
        this.events = RR
      }
      send(RR) {
        this.ws.send(RR)
      }
      sendUnreliable(RR) {
        console.warn("colyseus.js: The WebSocket transport does not support unreliable messages")
      }
      connect(RR, JR) {
        try {
          this.ws = new tR(RR, {
            headers: JR,
            protocols: this.protocols
          })
        } catch (GR) {
          this.ws = new tR(RR, this.protocols)
        }
        this.ws.binaryType = "arraybuffer", this.ws.onopen = this.events.onopen, this.ws.onmessage = this.events.onmessage, this.ws.onclose = this.events.onclose, this.ws.onerror = this.events.onerror
      }
      close(RR, JR) {
        this.ws.close(RR, JR)
      }
      get isOpen() {
        return this.ws.readyState === tR.OPEN
      }
    }
  },
  10512: RR => {
    RR.exports = function() {
      throw new Error("ws does not work in the browser. Browser clients must use the native WebSocket object")
    }
  },
  10554: (RR, JR, GR) => {
    function yR(RR, JR) {
      JR.headers = RR.headers || {}, JR.statusMessage = RR.statusText, JR.statusCode = RR.status, JR.data = RR.response
    }

    function tR(RR, JR, GR) {
      return new Promise((function(tR, uR) {
        GR = GR || {};
        var ZR, qR, iR, fR = new XMLHttpRequest,
          VR = GR.body,
          KR = GR.headers || {};
        for (ZR in GR.timeout && (fR.timeout = GR.timeout), fR.ontimeout = fR.onerror = function(RR) {
            RR.timeout = "timeout" == RR.type, uR(RR)
          }, fR.onabort = function(RR) {
            RR.aborted = !0, uR(RR)
          }, fR.open(RR, JR.href || JR), fR.onload = function() {
            for (iR = fR.getAllResponseHeaders().trim().split(/[\r\n]+/), yR(fR, fR); qR = iR.shift();) qR = qR.split(": "), fR.headers[qR.shift().toLowerCase()] = qR.join(": ");
            if ((qR = fR.headers["content-type"]) && ~qR.indexOf("application/json")) try {
              fR.data = JSON.parse(fR.data, GR.reviver)
            } catch (RR) {
              return yR(fR, RR), uR(RR)
            }(fR.status >= 400 ? uR : tR)(fR)
          }, typeof FormData < "u" && VR instanceof FormData || VR && "object" == typeof VR && (KR["content-type"] = "application/json", VR = JSON.stringify(VR)), fR.withCredentials = !!GR.withCredentials, KR) fR.setRequestHeader(ZR, KR[ZR]);
        fR.send(VR), GR.signal && GR.signal.addEventListener("abort", (function() {
          fR.abort()
        }))
      }))
    }
    GR.r(JR), GR.d(JR, {
      del: () => iR,
      get: () => uR,
      patch: () => qR,
      post: () => ZR,
      put: () => fR,
      send: () => tR
    });
    var uR = tR.bind(tR, "GET"),
      ZR = tR.bind(tR, "POST"),
      qR = tR.bind(tR, "PATCH"),
      iR = tR.bind(tR, "DELETE"),
      fR = tR.bind(tR, "PUT")
  },
  10543: (RR, JR, GR) => {
    var yR, tR, uR;
    GR.r(JR), GR.d(JR, {
      ALWAYS: () => YJ,
      C1: () => CR,
      DECIMAL_FIT: () => QJ,
      DECIMAL_ROUND: () => kJ,
      Decoder: () => iJ,
      Encoder: () => dJ,
      FLOAT32_OPTIONS: () => rJ,
      NEVER: () => EJ,
      Packr: () => DJ,
      RESERVE_START_SPACE: () => sJ,
      RESET_BUFFER_MODE: () => TJ,
      REUSE_BUFFER_MODE: () => FJ,
      Unpackr: () => gR,
      addExtension: () => IJ,
      clearSource: () => ZJ,
      decode: () => wJ,
      decodeIter: () => hJ,
      encode: () => jJ,
      encodeIter: () => RG,
      isNativeAccelerationEnabled: () => mR,
      mapsAsObjects: () => GG,
      pack: () => SJ,
      roundFloat32: () => WJ,
      unpack: () => VJ,
      unpackMultiple: () => KJ,
      useRecords: () => JG
    });
    try {
      yR = new TextDecoder
    } catch (yG) {}
    var ZR = 0;
    const qR = [];
    var iR, fR, VR, KR, wR, rR = qR,
      eR = 0,
      aR = {},
      LR = 0,
      nR = 0,
      UR = [],
      WR = {
        useRecords: !1,
        mapsAsObjects: !0
      };
    class AR {}
    const CR = new AR;
    CR.name = "MessagePack 0xC1";
    var XR, MR, BR, lR = !1,
      pR = 2;
    try {
      new Function("")
    } catch (yG) {
      pR = 1 / 0
    }
    class gR {
      constructor(RR) {
        RR && (!1 === RR.useRecords && void 0 === RR.mapsAsObjects && (RR.mapsAsObjects = !0), RR.sequential && !1 !== RR.trusted && (RR.trusted = !0, RR.structures || 0 == RR.useRecords || (RR.structures = [], RR.maxSharedStructures || (RR.maxSharedStructures = 0))), RR.structures ? RR.structures.sharedLength = RR.structures.length : RR.getStructures && ((RR.structures = []).uninitialized = !0, RR.structures.sharedLength = 0), RR.int64AsNumber && (RR.int64AsType = "number")), Object.assign(this, RR)
      }
      unpack(RR, JR) {
        if (tR) return uJ((() => (ZJ(), this ? this.unpack(RR, JR) : gR.prototype.unpack.call(WR, RR, JR))));
        RR.buffer || RR.constructor !== ArrayBuffer || (RR = "undefined" !== typeof Buffer ? Buffer.from(RR) : new Uint8Array(RR)), "object" === typeof JR ? (uR = JR.end || RR.length, ZR = JR.start || 0) : (ZR = 0, uR = JR > -1 ? JR : RR.length), eR = 0, nR = 0, fR = null, rR = qR, VR = null, tR = RR;
        try {
          wR = RR.dataView || (RR.dataView = new DataView(RR.buffer, RR.byteOffset, RR.byteLength))
        } catch (yG) {
          if (tR = null, RR instanceof Uint8Array) throw yG;
          throw new Error("Source must be a Uint8Array or Buffer but was a " + (RR && "object" == typeof RR ? RR.constructor.name : typeof RR))
        }
        if (this instanceof gR) {
          if (aR = this, this.structures) return iR = this.structures, bR(JR);
          (!iR || iR.length > 0) && (iR = [])
        } else aR = WR, (!iR || iR.length > 0) && (iR = []);
        return bR(JR)
      }
      unpackMultiple(RR, JR) {
        let GR, yR = 0;
        try {
          lR = !0;
          let tR = RR.length,
            uR = this ? this.unpack(RR, tR) : fJ.unpack(RR, tR);
          if (!JR) {
            for (GR = [uR]; ZR < tR;) yR = ZR, GR.push(bR());
            return GR
          }
          if (!1 === JR(uR, yR, ZR)) return;
          for (; ZR < tR;)
            if (yR = ZR, !1 === JR(bR(), yR, ZR)) return
        } catch (yG) {
          throw yG.lastPosition = yR, yG.values = GR, yG
        } finally {
          lR = !1, ZJ()
        }
      }
      _mergeStructures(RR, JR) {
        MR && (RR = MR.call(this, RR)), RR = RR || [], Object.isFrozen(RR) && (RR = RR.map((RR => RR.slice(0))));
        for (let GR = 0, yR = RR.length; GR < yR; GR++) {
          let JR = RR[GR];
          JR && (JR.isShared = !0, GR >= 32 && (JR.highByte = GR - 32 >> 5))
        }
        RR.sharedLength = RR.length;
        for (let GR in JR || [])
          if (GR >= 0) {
            let yR = RR[GR],
              tR = JR[GR];
            tR && (yR && ((RR.restoreStructures || (RR.restoreStructures = []))[GR] = yR), RR[GR] = tR)
          } return this.structures = RR
      }
      decode(RR, JR) {
        return this.unpack(RR, JR)
      }
    }

    function bR(RR) {
      try {
        if (!aR.trusted && !lR) {
          let RR = iR.sharedLength || 0;
          RR < iR.length && (iR.length = RR)
        }
        let JR;
        if (aR.randomAccessStructure && tR[ZR] < 64 && tR[ZR] >= 32 && XR ? (JR = XR(tR, ZR, uR, aR), tR = null, RR && RR.lazy || !JR || (JR = JR.toJSON()), ZR = uR) : JR = OR(), VR && (ZR = VR.postBundlePosition, VR = null), lR && (iR.restoreStructures = null), ZR == uR) iR && iR.restoreStructures && vR(), iR = null, tR = null, KR && (KR = null);
        else {
          if (ZR > uR) throw new Error("Unexpected end of MessagePack data");
          if (!lR) {
            let RR;
            try {
              RR = JSON.stringify(JR, ((RR, JR) => "bigint" === typeof JR ? `${JR}n` : JR)).slice(0, 100)
            } catch (yG) {
              RR = "(JSON view not available " + yG + ")"
            }
            throw new Error("Data read, but end of buffer not reached " + RR)
          }
        }
        return JR
      } catch (yG) {
        throw iR && iR.restoreStructures && vR(), ZJ(), (yG instanceof RangeError || yG.message.startsWith("Unexpected end of buffer") || ZR > uR) && (yG.incomplete = !0), yG
      }
    }

    function vR() {
      for (let RR in iR.restoreStructures) iR[RR] = iR.restoreStructures[RR];
      iR.restoreStructures = null
    }

    function OR() {
      let RR = tR[ZR++];
      if (RR < 160) {
        if (RR < 128) {
          if (RR < 64) return RR;
          {
            let JR = iR[63 & RR] || aR.getStructures && HR()[63 & RR];
            return JR ? (JR.read || (JR.read = NR(JR, 63 & RR)), JR.read()) : RR
          }
        }
        if (RR < 144) {
          if (RR -= 128, aR.mapsAsObjects) {
            let JR = {};
            for (let GR = 0; GR < RR; GR++) {
              let RR = sR();
              "__proto__" === RR && (RR = "__proto_"), JR[RR] = OR()
            }
            return JR
          } {
            let JR = new Map;
            for (let GR = 0; GR < RR; GR++) JR.set(OR(), OR());
            return JR
          }
        } {
          RR -= 144;
          let JR = new Array(RR);
          for (let GR = 0; GR < RR; GR++) JR[GR] = OR();
          return aR.freezeData ? Object.freeze(JR) : JR
        }
      }
      if (RR < 192) {
        let JR = RR - 160;
        if (nR >= ZR) return fR.slice(ZR - LR, (ZR += JR) - LR);
        if (0 == nR && uR < 140) {
          let RR = JR < 16 ? YR(JR) : ER(JR);
          if (null != RR) return RR
        }
        return oR(JR)
      } {
        let JR;
        switch (RR) {
          case 192:
            return null;
          case 193:
            return VR ? (JR = OR(), JR > 0 ? VR[1].slice(VR.position1, VR.position1 += JR) : VR[0].slice(VR.position0, VR.position0 -= JR)) : CR;
          case 194:
            return !1;
          case 195:
            return !0;
          case 196:
            if (JR = tR[ZR++], void 0 === JR) throw new Error("Unexpected end of buffer");
            return QR(JR);
          case 197:
            return JR = wR.getUint16(ZR), ZR += 2, QR(JR);
          case 198:
            return JR = wR.getUint32(ZR), ZR += 4, QR(JR);
          case 199:
            return FR(tR[ZR++]);
          case 200:
            return JR = wR.getUint16(ZR), ZR += 2, FR(JR);
          case 201:
            return JR = wR.getUint32(ZR), ZR += 4, FR(JR);
          case 202:
            if (JR = wR.getFloat32(ZR), aR.useFloat32 > 2) {
              let RR = qJ[(127 & tR[ZR]) << 1 | tR[ZR + 1] >> 7];
              return ZR += 4, (RR * JR + (JR > 0 ? .5 : -.5) | 0) / RR
            }
            return ZR += 4, JR;
          case 203:
            return JR = wR.getFloat64(ZR), ZR += 8, JR;
          case 204:
            return tR[ZR++];
          case 205:
            return JR = wR.getUint16(ZR), ZR += 2, JR;
          case 206:
            return JR = wR.getUint32(ZR), ZR += 4, JR;
          case 207:
            return "number" === aR.int64AsType ? (JR = 4294967296 * wR.getUint32(ZR), JR += wR.getUint32(ZR + 4)) : "string" === aR.int64AsType ? JR = wR.getBigUint64(ZR).toString() : "auto" === aR.int64AsType ? (JR = wR.getBigUint64(ZR), JR <= BigInt(2) << BigInt(52) && (JR = Number(JR))) : JR = wR.getBigUint64(ZR), ZR += 8, JR;
          case 208:
            return wR.getInt8(ZR++);
          case 209:
            return JR = wR.getInt16(ZR), ZR += 2, JR;
          case 210:
            return JR = wR.getInt32(ZR), ZR += 4, JR;
          case 211:
            return "number" === aR.int64AsType ? (JR = 4294967296 * wR.getInt32(ZR), JR += wR.getUint32(ZR + 4)) : "string" === aR.int64AsType ? JR = wR.getBigInt64(ZR).toString() : "auto" === aR.int64AsType ? (JR = wR.getBigInt64(ZR), JR >= BigInt(-2) << BigInt(52) && JR <= BigInt(2) << BigInt(52) && (JR = Number(JR))) : JR = wR.getBigInt64(ZR), ZR += 8, JR;
          case 212:
            if (JR = tR[ZR++], 114 == JR) return RJ(63 & tR[ZR++]);
            {
              let RR = UR[JR];
              if (RR) return RR.read ? (ZR++, RR.read(OR())) : RR.noBuffer ? (ZR++, RR()) : RR(tR.subarray(ZR, ++ZR));
              throw new Error("Unknown extension " + JR)
            }
          case 213:
            return JR = tR[ZR], 114 == JR ? (ZR++, RJ(63 & tR[ZR++], tR[ZR++])) : FR(2);
          case 214:
            return FR(4);
          case 215:
            return FR(8);
          case 216:
            return FR(16);
          case 217:
            return JR = tR[ZR++], nR >= ZR ? fR.slice(ZR - LR, (ZR += JR) - LR) : cR(JR);
          case 218:
            return JR = wR.getUint16(ZR), nR >= (ZR += 2) ? fR.slice(ZR - LR, (ZR += JR) - LR) : PR(JR);
          case 219:
            return JR = wR.getUint32(ZR), nR >= (ZR += 4) ? fR.slice(ZR - LR, (ZR += JR) - LR) : IR(JR);
          case 220:
            return JR = wR.getUint16(ZR), ZR += 2, SR(JR);
          case 221:
            return JR = wR.getUint32(ZR), ZR += 4, SR(JR);
          case 222:
            return JR = wR.getUint16(ZR), ZR += 2, jR(JR);
          case 223:
            return JR = wR.getUint32(ZR), ZR += 4, jR(JR);
          default:
            if (RR >= 224) return RR - 256;
            if (void 0 === RR) {
              let RR = new Error("Unexpected end of MessagePack data");
              throw RR.incomplete = !0, RR
            }
            throw new Error("Unknown MessagePack token " + RR)
        }
      }
    }
    const xR = /^[a-zA-Z_$][a-zA-Z\d_$]*$/;

    function NR(RR, JR) {
      function GR() {
        if (GR.count++ > pR) {
          let GR = RR.read = new Function("r", "return function(){return " + (aR.freezeData ? "Object.freeze" : "") + "({" + RR.map((RR => "__proto__" === RR ? "__proto_:r()" : xR.test(RR) ? RR + ":r()" : "[" + JSON.stringify(RR) + "]:r()")).join(",") + "})}")(OR);
          return 0 === RR.highByte && (RR.read = DR(JR, RR.read)), GR()
        }
        let yR = {};
        for (let JR = 0, GR = RR.length; JR < GR; JR++) {
          let GR = RR[JR];
          "__proto__" === GR && (GR = "__proto_"), yR[GR] = OR()
        }
        return aR.freezeData ? Object.freeze(yR) : yR
      }
      return GR.count = 0, 0 === RR.highByte ? DR(JR, GR) : GR
    }
    const DR = (RR, JR) => function() {
      let GR = tR[ZR++];
      if (0 === GR) return JR();
      let yR = RR < 32 ? -(RR + (GR << 5)) : RR + (GR << 5),
        uR = iR[yR] || HR()[yR];
      if (!uR) throw new Error("Record id is not defined for " + yR);
      return uR.read || (uR.read = NR(uR, RR)), uR.read()
    };

    function HR() {
      let RR = uJ((() => (tR = null, aR.getStructures())));
      return iR = aR._mergeStructures(RR, iR)
    }
    var oR = zR,
      cR = zR,
      PR = zR,
      IR = zR;
    let mR = !1;

    function zR(RR) {
      let JR;
      if (RR < 16 && (JR = YR(RR))) return JR;
      if (RR > 64 && yR) return yR.decode(tR.subarray(ZR, ZR += RR));
      const GR = ZR + RR,
        uR = [];
      for (JR = ""; ZR < GR;) {
        const RR = tR[ZR++];
        if (0 === (128 & RR)) uR.push(RR);
        else if (192 === (224 & RR)) {
          const JR = 63 & tR[ZR++];
          uR.push((31 & RR) << 6 | JR)
        } else if (224 === (240 & RR)) {
          const JR = 63 & tR[ZR++],
            GR = 63 & tR[ZR++];
          uR.push((31 & RR) << 12 | JR << 6 | GR)
        } else if (240 === (248 & RR)) {
          let JR = (7 & RR) << 18 | (63 & tR[ZR++]) << 12 | (63 & tR[ZR++]) << 6 | 63 & tR[ZR++];
          JR > 65535 && (JR -= 65536, uR.push(JR >>> 10 & 1023 | 55296), JR = 56320 | 1023 & JR), uR.push(JR)
        } else uR.push(RR);
        uR.length >= 4096 && (JR += dR.apply(String, uR), uR.length = 0)
      }
      return uR.length > 0 && (JR += dR.apply(String, uR)), JR
    }

    function SR(RR) {
      let JR = new Array(RR);
      for (let GR = 0; GR < RR; GR++) JR[GR] = OR();
      return aR.freezeData ? Object.freeze(JR) : JR
    }

    function jR(RR) {
      if (aR.mapsAsObjects) {
        let JR = {};
        for (let GR = 0; GR < RR; GR++) {
          let RR = sR();
          "__proto__" === RR && (RR = "__proto_"), JR[RR] = OR()
        }
        return JR
      } {
        let JR = new Map;
        for (let GR = 0; GR < RR; GR++) JR.set(OR(), OR());
        return JR
      }
    }
    var dR = String.fromCharCode;

    function ER(RR) {
      let JR = ZR,
        GR = new Array(RR);
      for (let yR = 0; yR < RR; yR++) {
        const RR = tR[ZR++];
        if ((128 & RR) > 0) return void(ZR = JR);
        GR[yR] = RR
      }
      return dR.apply(String, GR)
    }

    function YR(RR) {
      if (RR < 4) {
        if (RR < 2) {
          if (0 === RR) return "";
          {
            let RR = tR[ZR++];
            return (128 & RR) > 1 ? void(ZR -= 1) : dR(RR)
          }
        } {
          let JR = tR[ZR++],
            GR = tR[ZR++];
          if ((128 & JR) > 0 || (128 & GR) > 0) return void(ZR -= 2);
          if (RR < 3) return dR(JR, GR);
          let yR = tR[ZR++];
          return (128 & yR) > 0 ? void(ZR -= 3) : dR(JR, GR, yR)
        }
      } {
        let JR = tR[ZR++],
          GR = tR[ZR++],
          yR = tR[ZR++],
          uR = tR[ZR++];
        if ((128 & JR) > 0 || (128 & GR) > 0 || (128 & yR) > 0 || (128 & uR) > 0) return void(ZR -= 4);
        if (RR < 6) {
          if (4 === RR) return dR(JR, GR, yR, uR);
          {
            let RR = tR[ZR++];
            return (128 & RR) > 0 ? void(ZR -= 5) : dR(JR, GR, yR, uR, RR)
          }
        }
        if (RR < 8) {
          let qR = tR[ZR++],
            iR = tR[ZR++];
          if ((128 & qR) > 0 || (128 & iR) > 0) return void(ZR -= 6);
          if (RR < 7) return dR(JR, GR, yR, uR, qR, iR);
          let fR = tR[ZR++];
          return (128 & fR) > 0 ? void(ZR -= 7) : dR(JR, GR, yR, uR, qR, iR, fR)
        } {
          let qR = tR[ZR++],
            iR = tR[ZR++],
            fR = tR[ZR++],
            VR = tR[ZR++];
          if ((128 & qR) > 0 || (128 & iR) > 0 || (128 & fR) > 0 || (128 & VR) > 0) return void(ZR -= 8);
          if (RR < 10) {
            if (8 === RR) return dR(JR, GR, yR, uR, qR, iR, fR, VR);
            {
              let RR = tR[ZR++];
              return (128 & RR) > 0 ? void(ZR -= 9) : dR(JR, GR, yR, uR, qR, iR, fR, VR, RR)
            }
          }
          if (RR < 12) {
            let KR = tR[ZR++],
              wR = tR[ZR++];
            if ((128 & KR) > 0 || (128 & wR) > 0) return void(ZR -= 10);
            if (RR < 11) return dR(JR, GR, yR, uR, qR, iR, fR, VR, KR, wR);
            let rR = tR[ZR++];
            return (128 & rR) > 0 ? void(ZR -= 11) : dR(JR, GR, yR, uR, qR, iR, fR, VR, KR, wR, rR)
          } {
            let KR = tR[ZR++],
              wR = tR[ZR++],
              rR = tR[ZR++],
              eR = tR[ZR++];
            if ((128 & KR) > 0 || (128 & wR) > 0 || (128 & rR) > 0 || (128 & eR) > 0) return void(ZR -= 12);
            if (RR < 14) {
              if (12 === RR) return dR(JR, GR, yR, uR, qR, iR, fR, VR, KR, wR, rR, eR);
              {
                let RR = tR[ZR++];
                return (128 & RR) > 0 ? void(ZR -= 13) : dR(JR, GR, yR, uR, qR, iR, fR, VR, KR, wR, rR, eR, RR)
              }
            } {
              let aR = tR[ZR++],
                LR = tR[ZR++];
              if ((128 & aR) > 0 || (128 & LR) > 0) return void(ZR -= 14);
              if (RR < 15) return dR(JR, GR, yR, uR, qR, iR, fR, VR, KR, wR, rR, eR, aR, LR);
              let nR = tR[ZR++];
              return (128 & nR) > 0 ? void(ZR -= 15) : dR(JR, GR, yR, uR, qR, iR, fR, VR, KR, wR, rR, eR, aR, LR, nR)
            }
          }
        }
      }
    }

    function kR() {
      let RR, JR = tR[ZR++];
      if (JR < 192) RR = JR - 160;
      else switch (JR) {
        case 217:
          RR = tR[ZR++];
          break;
        case 218:
          RR = wR.getUint16(ZR), ZR += 2;
          break;
        case 219:
          RR = wR.getUint32(ZR), ZR += 4;
          break;
        default:
          throw new Error("Expected string")
      }
      return zR(RR)
    }

    function QR(RR) {
      return aR.copyBuffers ? Uint8Array.prototype.slice.call(tR, ZR, ZR += RR) : tR.subarray(ZR, ZR += RR)
    }

    function FR(RR) {
      let JR = tR[ZR++];
      if (UR[JR]) {
        let GR;
        return UR[JR](tR.subarray(ZR, GR = ZR += RR), (RR => {
          ZR = RR;
          try {
            return OR()
          } finally {
            ZR = GR
          }
        }))
      }
      throw new Error("Unknown extension type " + JR)
    }
    var TR = new Array(4096);

    function sR() {
      let RR = tR[ZR++];
      if (!(RR >= 160 && RR < 192)) return ZR--, hR(OR());
      if (RR -= 160, nR >= ZR) return fR.slice(ZR - LR, (ZR += RR) - LR);
      if (!(0 == nR && uR < 180)) return oR(RR);
      let JR, GR = 4095 & (RR << 5 ^ (RR > 1 ? wR.getUint16(ZR) : RR > 0 ? tR[ZR] : 0)),
        yR = TR[GR],
        qR = ZR,
        iR = ZR + RR - 3,
        VR = 0;
      if (yR && yR.bytes == RR) {
        for (; qR < iR;) {
          if (JR = wR.getUint32(qR), JR != yR[VR++]) {
            qR = 1879048192;
            break
          }
          qR += 4
        }
        for (iR += 3; qR < iR;)
          if (JR = tR[qR++], JR != yR[VR++]) {
            qR = 1879048192;
            break
          } if (qR === iR) return ZR = qR, yR.string;
        iR -= 3, qR = ZR
      }
      for (yR = [], TR[GR] = yR, yR.bytes = RR; qR < iR;) JR = wR.getUint32(qR), yR.push(JR), qR += 4;
      for (iR += 3; qR < iR;) JR = tR[qR++], yR.push(JR);
      let KR = RR < 16 ? YR(RR) : ER(RR);
      return yR.string = null != KR ? KR : oR(RR)
    }

    function hR(RR) {
      if ("string" === typeof RR) return RR;
      if ("number" === typeof RR || "boolean" === typeof RR || "bigint" === typeof RR) return RR.toString();
      if (null == RR) return RR + "";
      if (aR.allowArraysInMapKeys && Array.isArray(RR) && RR.flat().every((RR => ["string", "number", "boolean", "bigint"].includes(typeof RR)))) return RR.flat().toString();
      throw new Error("Invalid property type for record: " + typeof RR)
    }
    const RJ = (RR, JR) => {
      let GR = OR().map(hR),
        yR = RR;
      void 0 !== JR && (RR = RR < 32 ? -((JR << 5) + RR) : (JR << 5) + RR, GR.highByte = JR);
      let tR = iR[RR];
      return tR && (tR.isShared || lR) && ((iR.restoreStructures || (iR.restoreStructures = []))[RR] = tR), iR[RR] = GR, GR.read = NR(GR, yR), GR.read()
    };
    UR[0] = () => {}, UR[0].noBuffer = !0, UR[66] = RR => {
      let JR = RR.length,
        GR = BigInt(128 & RR[0] ? RR[0] - 256 : RR[0]);
      for (let yR = 1; yR < JR; yR++) GR <<= BigInt(8), GR += BigInt(RR[yR]);
      return GR
    };
    let JJ = {
      Error: Error,
      TypeError: TypeError,
      ReferenceError: ReferenceError
    };
    UR[101] = () => {
      let RR = OR();
      return (JJ[RR[0]] || Error)(RR[1], {
        cause: RR[2]
      })
    }, UR[105] = RR => {
      if (!1 === aR.structuredClone) throw new Error("Structured clone extension is disabled");
      let JR = wR.getUint32(ZR - 4);
      KR || (KR = new Map);
      let GR, yR = tR[ZR];
      GR = yR >= 144 && yR < 160 || 220 == yR || 221 == yR ? [] : {};
      let uR = {
        target: GR
      };
      KR.set(JR, uR);
      let qR = OR();
      return uR.used ? Object.assign(GR, qR) : (uR.target = qR, qR)
    }, UR[112] = RR => {
      if (!1 === aR.structuredClone) throw new Error("Structured clone extension is disabled");
      let JR = wR.getUint32(ZR - 4),
        GR = KR.get(JR);
      return GR.used = !0, GR.target
    }, UR[115] = () => new Set(OR());
    const GJ = ["Int8", "Uint8", "Uint8Clamped", "Int16", "Uint16", "Int32", "Uint32", "Float32", "Float64", "BigInt64", "BigUint64"].map((RR => RR + "Array"));
    let yJ = "object" === typeof globalThis ? globalThis : window;
    UR[116] = RR => {
      let JR = RR[0],
        GR = GJ[JR];
      if (!GR) {
        if (16 === JR) {
          let JR = new ArrayBuffer(RR.length - 1);
          return new Uint8Array(JR).set(RR.subarray(1)), JR
        }
        throw new Error("Could not find typed array for code " + JR)
      }
      return new yJ[GR](Uint8Array.prototype.slice.call(RR, 1).buffer)
    }, UR[120] = () => {
      let RR = OR();
      return new RegExp(RR[0], RR[1])
    };
    const tJ = [];

    function uJ(RR) {
      BR && BR();
      let JR = uR,
        GR = ZR,
        yR = eR,
        qR = LR,
        UR = nR,
        WR = fR,
        AR = rR,
        CR = KR,
        XR = VR,
        MR = new Uint8Array(tR.slice(0, uR)),
        pR = iR,
        gR = iR.slice(0, iR.length),
        bR = aR,
        vR = lR,
        OR = RR();
      return uR = JR, ZR = GR, eR = yR, LR = qR, nR = UR, fR = WR, rR = AR, KR = CR, VR = XR, tR = MR, lR = vR, (iR = pR).splice(0, iR.length, ...gR), aR = bR, wR = new DataView(tR.buffer, tR.byteOffset, tR.byteLength), OR
    }

    function ZJ() {
      tR = null, KR = null, iR = null
    }
    UR[98] = RR => {
      let JR = (RR[0] << 24) + (RR[1] << 16) + (RR[2] << 8) + RR[3],
        GR = ZR;
      return ZR += JR - RR.length, VR = tJ, (VR = [kR(), kR()]).position0 = 0, VR.position1 = 0, VR.postBundlePosition = ZR, ZR = GR, OR()
    }, UR[255] = RR => 4 == RR.length ? new Date(1e3 * (16777216 * RR[0] + (RR[1] << 16) + (RR[2] << 8) + RR[3])) : 8 == RR.length ? new Date(((RR[0] << 22) + (RR[1] << 14) + (RR[2] << 6) + (RR[3] >> 2)) / 1e6 + 1e3 * (4294967296 * (3 & RR[3]) + 16777216 * RR[4] + (RR[5] << 16) + (RR[6] << 8) + RR[7])) : 12 == RR.length ? new Date(((RR[0] << 24) + (RR[1] << 16) + (RR[2] << 8) + RR[3]) / 1e6 + 1e3 * ((128 & RR[4] ? -281474976710656 : 0) + 1099511627776 * RR[6] + 4294967296 * RR[7] + 16777216 * RR[8] + (RR[9] << 16) + (RR[10] << 8) + RR[11])) : new Date("invalid");
    const qJ = new Array(147);
    for (let tG = 0; tG < 256; tG++) qJ[tG] = +("1e" + Math.floor(45.15 - .30103 * tG));
    const iJ = gR;
    var fJ = new gR({
      useRecords: !1
    });
    const VJ = fJ.unpack,
      KJ = fJ.unpackMultiple,
      wJ = fJ.unpack,
      rJ = {
        NEVER: 0,
        ALWAYS: 1,
        DECIMAL_ROUND: 3,
        DECIMAL_FIT: 4
      };
    let eJ, aJ, LJ, nJ = new Float32Array(1),
      UJ = new Uint8Array(nJ.buffer, 0, 4);

    function WJ(RR) {
      nJ[0] = RR;
      let JR = qJ[(127 & UJ[3]) << 1 | UJ[2] >> 7];
      return (JR * RR + (RR > 0 ? .5 : -.5) | 0) / JR
    }
    try {
      eJ = new TextEncoder
    } catch (yG) {}
    const AJ = "undefined" !== typeof Buffer,
      CJ = AJ ? function(RR) {
        return Buffer.allocUnsafeSlow(RR)
      } : Uint8Array,
      XJ = AJ ? Buffer : Uint8Array,
      MJ = AJ ? 4294967296 : 2144337920;
    let BJ, lJ, pJ, gJ, bJ, vJ = 0,
      OJ = null;
    const xJ = /[\u0080-\uFFFF]/,
      NJ = Symbol("record-id");
    class DJ extends gR {
      constructor(RR) {
        let JR, GR, yR, tR;
        super(RR), this.offset = 0;
        let uR = XJ.prototype.utf8Write ? function(RR, JR) {
            return BJ.utf8Write(RR, JR, BJ.byteLength - JR)
          } : !(!eJ || !eJ.encodeInto) && function(RR, JR) {
            return eJ.encodeInto(RR, BJ.subarray(JR)).written
          },
          ZR = this;
        RR || (RR = {});
        let qR = RR && RR.sequential,
          iR = RR.structures || RR.saveStructures,
          fR = RR.maxSharedStructures;
        if (null == fR && (fR = iR ? 32 : 0), fR > 8160) throw new Error("Maximum maxSharedStructure is 8160");
        RR.structuredClone && void 0 == RR.moreTypes && (this.moreTypes = !0);
        let VR = RR.maxOwnStructures;
        null == VR && (VR = iR ? 32 : 64), this.structures || 0 == RR.useRecords || (this.structures = []);
        let KR = fR > 32 || VR + fR > 64,
          wR = fR + 64,
          rR = fR + VR + 64;
        if (rR > 8256) throw new Error("Maximum maxSharedStructure + maxOwnStructure is 8192");
        let eR = [],
          aR = 0,
          LR = 0;
        this.pack = this.encode = function(RR, uR) {
          if (BJ || (BJ = new CJ(8192), pJ = BJ.dataView || (BJ.dataView = new DataView(BJ.buffer, 0, 8192)), vJ = 0), gJ = BJ.length - 10, gJ - vJ < 2048 ? (BJ = new CJ(BJ.length), pJ = BJ.dataView || (BJ.dataView = new DataView(BJ.buffer, 0, BJ.length)), gJ = BJ.length - 10, vJ = 0) : vJ = vJ + 7 & 2147483640, JR = vJ, uR & sJ && (vJ += 255 & uR), tR = ZR.structuredClone ? new Map : null, ZR.bundleStrings && "string" !== typeof RR ? (OJ = [], OJ.size = 1 / 0) : OJ = null, yR = ZR.structures, yR) {
            yR.uninitialized && (yR = ZR._mergeStructures(ZR.getStructures()));
            let RR = yR.sharedLength || 0;
            if (RR > fR) throw new Error("Shared structures is larger than maximum shared structures, try increasing maxSharedStructures to " + yR.sharedLength);
            if (!yR.transitions) {
              yR.transitions = Object.create(null);
              for (let JR = 0; JR < RR; JR++) {
                let RR = yR[JR];
                if (!RR) continue;
                let GR, tR = yR.transitions;
                for (let JR = 0, yR = RR.length; JR < yR; JR++) {
                  let yR = RR[JR];
                  GR = tR[yR], GR || (GR = tR[yR] = Object.create(null)), tR = GR
                }
                tR[NJ] = JR + 64
              }
              this.lastNamedStructuresLength = RR
            }
            qR || (yR.nextId = RR + 64)
          }
          let iR;
          GR && (GR = !1);
          try {
            ZR.randomAccessStructure && RR && RR.constructor && RR.constructor === Object ? gR(RR) : WR(RR);
            let GR = OJ;
            if (OJ && PJ(JR, WR, 0), tR && tR.idsToInsert) {
              let RR = tR.idsToInsert.sort(((RR, JR) => RR.offset > JR.offset ? 1 : -1)),
                yR = RR.length,
                uR = -1;
              for (; GR && yR > 0;) {
                let tR = RR[--yR].offset + JR;
                tR < GR.stringsPosition + JR && -1 === uR && (uR = 0), tR > GR.position + JR ? uR >= 0 && (uR += 6) : (uR >= 0 && (pJ.setUint32(GR.position + JR, pJ.getUint32(GR.position + JR) + uR), uR = -1), GR = GR.previous, yR++)
              }
              uR >= 0 && GR && pJ.setUint32(GR.position + JR, pJ.getUint32(GR.position + JR) + uR), vJ += 6 * RR.length, vJ > gJ && BR(vJ), ZR.offset = vJ;
              let qR = function(RR, JR) {
                let GR, yR = 6 * JR.length,
                  tR = RR.length - yR;
                for (; GR = JR.pop();) {
                  let JR = GR.offset,
                    uR = GR.id;
                  RR.copyWithin(JR + yR, JR, tR), yR -= 6;
                  let ZR = JR + yR;
                  RR[ZR++] = 214, RR[ZR++] = 105, RR[ZR++] = uR >> 24, RR[ZR++] = uR >> 16 & 255, RR[ZR++] = uR >> 8 & 255, RR[ZR++] = 255 & uR, tR = JR
                }
                return RR
              }(BJ.subarray(JR, vJ), RR);
              return tR = null, qR
            }
            return ZR.offset = vJ, uR & FJ ? (BJ.start = JR, BJ.end = vJ, BJ) : BJ.subarray(JR, vJ)
          } catch (yG) {
            throw iR = yG, yG
          } finally {
            if (yR && (nR(), GR && ZR.saveStructures)) {
              let GR = yR.sharedLength || 0,
                tR = BJ.subarray(JR, vJ),
                qR = mJ(yR, ZR);
              if (!iR) return !1 === ZR.saveStructures(qR, qR.isCompatible) ? ZR.pack(RR, uR) : (ZR.lastNamedStructuresLength = GR, BJ.length > 1073741824 && (BJ = null), tR)
            }
            BJ.length > 1073741824 && (BJ = null), uR & TJ && (vJ = JR)
          }
        };
        const nR = () => {
            LR < 10 && LR++;
            let RR = yR.sharedLength || 0;
            if (yR.length > RR && !qR && (yR.length = RR), aR > 1e4) yR.transitions = null, LR = 0, aR = 0, eR.length > 0 && (eR = []);
            else if (eR.length > 0 && !qR) {
              for (let RR = 0, JR = eR.length; RR < JR; RR++) eR[RR][NJ] = 0;
              eR = []
            }
          },
          UR = RR => {
            var JR = RR.length;
            JR < 16 ? BJ[vJ++] = 144 | JR : JR < 65536 ? (BJ[vJ++] = 220, BJ[vJ++] = JR >> 8, BJ[vJ++] = 255 & JR) : (BJ[vJ++] = 221, pJ.setUint32(vJ, JR), vJ += 4);
            for (let GR = 0; GR < JR; GR++) WR(RR[GR])
          },
          WR = RR => {
            vJ > gJ && (BJ = BR(vJ));
            var GR, yR = typeof RR;
            if ("string" === yR) {
              let yR, tR = RR.length;
              if (OJ && tR >= 4 && tR < 4096) {
                if ((OJ.size += tR) > 21760) {
                  let RR, GR, yR = (OJ[0] ? 3 * OJ[0].length + OJ[1].length : 0) + 10;
                  vJ + yR > gJ && (BJ = BR(vJ + yR)), OJ.position ? (GR = OJ, BJ[vJ] = 200, vJ += 3, BJ[vJ++] = 98, RR = vJ - JR, vJ += 4, PJ(JR, WR, 0), pJ.setUint16(RR + JR - 3, vJ - JR - RR)) : (BJ[vJ++] = 214, BJ[vJ++] = 98, RR = vJ - JR, vJ += 4), OJ = ["", ""], OJ.previous = GR, OJ.size = 0, OJ.position = RR
                }
                let GR = xJ.test(RR);
                return OJ[GR ? 0 : 1] += RR, BJ[vJ++] = 193, void WR(GR ? -tR : tR)
              }
              yR = tR < 32 ? 1 : tR < 256 ? 2 : tR < 65536 ? 3 : 5;
              let ZR = 3 * tR;
              if (vJ + ZR > gJ && (BJ = BR(vJ + ZR)), tR < 64 || !uR) {
                let JR, uR, ZR, qR = vJ + yR;
                for (JR = 0; JR < tR; JR++) uR = RR.charCodeAt(JR), uR < 128 ? BJ[qR++] = uR : uR < 2048 ? (BJ[qR++] = uR >> 6 | 192, BJ[qR++] = 63 & uR | 128) : 55296 === (64512 & uR) && 56320 === (64512 & (ZR = RR.charCodeAt(JR + 1))) ? (uR = 65536 + ((1023 & uR) << 10) + (1023 & ZR), JR++, BJ[qR++] = uR >> 18 | 240, BJ[qR++] = uR >> 12 & 63 | 128, BJ[qR++] = uR >> 6 & 63 | 128, BJ[qR++] = 63 & uR | 128) : (BJ[qR++] = uR >> 12 | 224, BJ[qR++] = uR >> 6 & 63 | 128, BJ[qR++] = 63 & uR | 128);
                GR = qR - vJ - yR
              } else GR = uR(RR, vJ + yR);
              GR < 32 ? BJ[vJ++] = 160 | GR : GR < 256 ? (yR < 2 && BJ.copyWithin(vJ + 2, vJ + 1, vJ + 1 + GR), BJ[vJ++] = 217, BJ[vJ++] = GR) : GR < 65536 ? (yR < 3 && BJ.copyWithin(vJ + 3, vJ + 2, vJ + 2 + GR), BJ[vJ++] = 218, BJ[vJ++] = GR >> 8, BJ[vJ++] = 255 & GR) : (yR < 5 && BJ.copyWithin(vJ + 5, vJ + 3, vJ + 3 + GR), BJ[vJ++] = 219, pJ.setUint32(vJ, GR), vJ += 4), vJ += GR
            } else if ("number" === yR)
              if (RR >>> 0 === RR) RR < 32 || RR < 128 && !1 === this.useRecords || RR < 64 && !this.randomAccessStructure ? BJ[vJ++] = RR : RR < 256 ? (BJ[vJ++] = 204, BJ[vJ++] = RR) : RR < 65536 ? (BJ[vJ++] = 205, BJ[vJ++] = RR >> 8, BJ[vJ++] = 255 & RR) : (BJ[vJ++] = 206, pJ.setUint32(vJ, RR), vJ += 4);
              else if ((RR | 0) === RR) RR >= -32 ? BJ[vJ++] = 256 + RR : RR >= -128 ? (BJ[vJ++] = 208, BJ[vJ++] = RR + 256) : RR >= -32768 ? (BJ[vJ++] = 209, pJ.setInt16(vJ, RR), vJ += 2) : (BJ[vJ++] = 210, pJ.setInt32(vJ, RR), vJ += 4);
            else {
              let JR;
              if ((JR = this.useFloat32) > 0 && RR < 4294967296 && RR >= -2147483648) {
                let GR;
                if (BJ[vJ++] = 202, pJ.setFloat32(vJ, RR), JR < 4 || ((GR = RR * qJ[(127 & BJ[vJ]) << 1 | BJ[vJ + 1] >> 7]) | 0) === GR) return void(vJ += 4);
                vJ--
              }
              BJ[vJ++] = 203, pJ.setFloat64(vJ, RR), vJ += 8
            } else if ("object" === yR || "function" === yR)
              if (RR) {
                if (tR) {
                  let GR = tR.get(RR);
                  if (GR) {
                    if (!GR.id) {
                      let RR = tR.idsToInsert || (tR.idsToInsert = []);
                      GR.id = RR.push(GR)
                    }
                    return BJ[vJ++] = 214, BJ[vJ++] = 112, pJ.setUint32(vJ, GR.id), void(vJ += 4)
                  }
                  tR.set(RR, {
                    offset: vJ - JR
                  })
                }
                let uR = RR.constructor;
                if (uR === Object) MR(RR);
                else if (uR === Array) UR(RR);
                else if (uR === Map)
                  if (this.mapAsEmptyObject) BJ[vJ++] = 128;
                  else {
                    (GR = RR.size) < 16 ? BJ[vJ++] = 128 | GR : GR < 65536 ? (BJ[vJ++] = 222, BJ[vJ++] = GR >> 8, BJ[vJ++] = 255 & GR) : (BJ[vJ++] = 223, pJ.setUint32(vJ, GR), vJ += 4);
                    for (let [JR, GR] of RR) WR(JR), WR(GR)
                  }
                else {
                  for (let JR = 0, GR = aJ.length; JR < GR; JR++) {
                    if (RR instanceof LJ[JR]) {
                      let GR = aJ[JR];
                      if (GR.write) {
                        GR.type && (BJ[vJ++] = 212, BJ[vJ++] = GR.type, BJ[vJ++] = 0);
                        let JR = GR.write.call(this, RR);
                        return void(JR === RR ? Array.isArray(RR) ? UR(RR) : MR(RR) : WR(JR))
                      }
                      let yR, tR = BJ,
                        uR = pJ,
                        ZR = vJ;
                      BJ = null;
                      try {
                        yR = GR.pack.call(this, RR, (RR => (BJ = tR, tR = null, vJ += RR, vJ > gJ && BR(vJ), {
                          target: BJ,
                          targetView: pJ,
                          position: vJ - RR
                        })), WR)
                      } finally {
                        tR && (BJ = tR, pJ = uR, vJ = ZR, gJ = BJ.length - 10)
                      }
                      return void(yR && (yR.length + vJ > gJ && BR(yR.length + vJ), vJ = cJ(yR, BJ, vJ, GR.type)))
                    }
                  }
                  if (Array.isArray(RR)) UR(RR);
                  else {
                    if (RR.toJSON) {
                      const JR = RR.toJSON();
                      if (JR !== RR) return WR(JR)
                    }
                    if ("function" === yR) return WR(this.writeFunction && this.writeFunction(RR));
                    MR(RR)
                  }
                }
              } else BJ[vJ++] = 192;
            else if ("boolean" === yR) BJ[vJ++] = RR ? 195 : 194;
            else if ("bigint" === yR) {
              if (RR < BigInt(1) << BigInt(63) && RR >= -(BigInt(1) << BigInt(63))) BJ[vJ++] = 211, pJ.setBigInt64(vJ, RR);
              else if (RR < BigInt(1) << BigInt(64) && RR > 0) BJ[vJ++] = 207, pJ.setBigUint64(vJ, RR);
              else {
                if (!this.largeBigIntToFloat) {
                  if (this.largeBigIntToString) return WR(RR.toString());
                  if (this.useBigIntExtension && RR < BigInt(2) ** BigInt(1023) && RR > -(BigInt(2) ** BigInt(1023))) {
                    BJ[vJ++] = 199, vJ++, BJ[vJ++] = 66;
                    let JR, GR = [];
                    do {
                      let yR = RR & BigInt(255);
                      JR = (yR & BigInt(128)) === (RR < BigInt(0) ? BigInt(128) : BigInt(0)), GR.push(yR), RR >>= BigInt(8)
                    } while (RR !== BigInt(0) && RR !== BigInt(-1) || !JR);
                    BJ[vJ - 2] = GR.length;
                    for (let RR = GR.length; RR > 0;) BJ[vJ++] = Number(GR[--RR]);
                    return
                  }
                  throw new RangeError(RR + " was too large to fit in MessagePack 64-bit integer format, use useBigIntExtension, or set largeBigIntToFloat to convert to float-64, or set largeBigIntToString to convert to string")
                }
                BJ[vJ++] = 203, pJ.setFloat64(vJ, Number(RR))
              }
              vJ += 8
            } else {
              if ("undefined" !== yR) throw new Error("Unknown type: " + yR);
              this.encodeUndefinedAsNil ? BJ[vJ++] = 192 : (BJ[vJ++] = 212, BJ[vJ++] = 0, BJ[vJ++] = 0)
            }
          },
          AR = this.variableMapSize || this.coercibleKeyAsNumber || this.skipValues ? RR => {
            let JR;
            if (this.skipValues) {
              JR = [];
              for (let GR in RR) "function" === typeof RR.hasOwnProperty && !RR.hasOwnProperty(GR) || this.skipValues.includes(RR[GR]) || JR.push(GR)
            } else JR = Object.keys(RR);
            let GR, yR = JR.length;
            if (yR < 16 ? BJ[vJ++] = 128 | yR : yR < 65536 ? (BJ[vJ++] = 222, BJ[vJ++] = yR >> 8, BJ[vJ++] = 255 & yR) : (BJ[vJ++] = 223, pJ.setUint32(vJ, yR), vJ += 4), this.coercibleKeyAsNumber)
              for (let tR = 0; tR < yR; tR++) {
                GR = JR[tR];
                let yR = Number(GR);
                WR(isNaN(yR) ? GR : yR), WR(RR[GR])
              } else
                for (let tR = 0; tR < yR; tR++) WR(GR = JR[tR]), WR(RR[GR])
          } : RR => {
            BJ[vJ++] = 222;
            let GR = vJ - JR;
            vJ += 2;
            let yR = 0;
            for (let JR in RR)("function" !== typeof RR.hasOwnProperty || RR.hasOwnProperty(JR)) && (WR(JR), WR(RR[JR]), yR++);
            if (yR > 65535) throw new Error('Object is too large to serialize with fast 16-bit map size, use the "variableMapSize" option to serialize this object');
            BJ[GR++ + JR] = yR >> 8, BJ[GR + JR] = 255 & yR
          },
          CR = !1 === this.useRecords ? AR : RR.progressiveRecords && !KR ? RR => {
            let GR, tR, uR = yR.transitions || (yR.transitions = Object.create(null)),
              ZR = vJ++ - JR;
            for (let qR in RR)
              if ("function" !== typeof RR.hasOwnProperty || RR.hasOwnProperty(qR)) {
                if (GR = uR[qR], GR) uR = GR;
                else {
                  let iR = Object.keys(RR),
                    fR = uR;
                  uR = yR.transitions;
                  let VR = 0;
                  for (let RR = 0, JR = iR.length; RR < JR; RR++) {
                    let JR = iR[RR];
                    GR = uR[JR], GR || (GR = uR[JR] = Object.create(null), VR++), uR = GR
                  }
                  ZR + JR + 1 == vJ ? (vJ--, lR(uR, iR, VR)) : pR(uR, iR, ZR, VR), tR = !0, uR = fR[qR]
                }
                WR(RR[qR])
              } if (!tR) {
              let GR = uR[NJ];
              GR ? BJ[ZR + JR] = GR : pR(uR, Object.keys(RR), ZR, 0)
            }
          } : RR => {
            let JR, GR = yR.transitions || (yR.transitions = Object.create(null)),
              tR = 0;
            for (let yR in RR)("function" !== typeof RR.hasOwnProperty || RR.hasOwnProperty(yR)) && (JR = GR[yR], JR || (JR = GR[yR] = Object.create(null), tR++), GR = JR);
            let uR = GR[NJ];
            uR ? uR >= 96 && KR ? (BJ[vJ++] = 96 + (31 & (uR -= 96)), BJ[vJ++] = uR >> 5) : BJ[vJ++] = uR : lR(GR, GR.__keys__ || Object.keys(RR), tR);
            for (let yR in RR)("function" !== typeof RR.hasOwnProperty || RR.hasOwnProperty(yR)) && WR(RR[yR])
          },
          XR = "function" == typeof this.useRecords && this.useRecords,
          MR = XR ? RR => {
            XR(RR) ? CR(RR) : AR(RR)
          } : CR,
          BR = RR => {
            let GR;
            if (RR > 16777216) {
              if (RR - JR > MJ) throw new Error("Packed buffer would be larger than maximum buffer size");
              GR = Math.min(MJ, 4096 * Math.round(Math.max((RR - JR) * (RR > 67108864 ? 1.25 : 2), 4194304) / 4096))
            } else GR = 1 + (Math.max(RR - JR << 2, BJ.length - 1) >> 12) << 12;
            let yR = new CJ(GR);
            return pJ = yR.dataView || (yR.dataView = new DataView(yR.buffer, 0, GR)), RR = Math.min(RR, BJ.length), BJ.copy ? BJ.copy(yR, 0, JR, RR) : yR.set(BJ.slice(JR, RR)), vJ -= JR, JR = 0, gJ = yR.length - 10, BJ = yR
          },
          lR = (RR, JR, tR) => {
            let uR = yR.nextId;
            uR || (uR = 64), uR < wR && this.shouldShareStructure && !this.shouldShareStructure(JR) ? (uR = yR.nextOwnId, uR < rR || (uR = wR), yR.nextOwnId = uR + 1) : (uR >= rR && (uR = wR), yR.nextId = uR + 1);
            let ZR = JR.highByte = uR >= 96 && KR ? uR - 96 >> 5 : -1;
            RR[NJ] = uR, RR.__keys__ = JR, yR[uR - 64] = JR, uR < wR ? (JR.isShared = !0, yR.sharedLength = uR - 63, GR = !0, ZR >= 0 ? (BJ[vJ++] = 96 + (31 & uR), BJ[vJ++] = ZR) : BJ[vJ++] = uR) : (ZR >= 0 ? (BJ[vJ++] = 213, BJ[vJ++] = 114, BJ[vJ++] = 96 + (31 & uR), BJ[vJ++] = ZR) : (BJ[vJ++] = 212, BJ[vJ++] = 114, BJ[vJ++] = uR), tR && (aR += LR * tR), eR.length >= VR && (eR.shift()[NJ] = 0), eR.push(RR), WR(JR))
          },
          pR = (RR, GR, yR, tR) => {
            let uR = BJ,
              ZR = vJ,
              qR = gJ,
              iR = JR;
            BJ = lJ, vJ = 0, JR = 0, BJ || (lJ = BJ = new CJ(8192)), gJ = BJ.length - 10, lR(RR, GR, tR), lJ = BJ;
            let fR = vJ;
            if (BJ = uR, vJ = ZR, gJ = qR, JR = iR, fR > 1) {
              let RR = vJ + fR - 1;
              RR > gJ && BR(RR);
              let GR = yR + JR;
              BJ.copyWithin(GR + fR, GR + 1, vJ), BJ.set(lJ.slice(0, fR), GR), vJ = RR
            } else BJ[yR + JR] = lJ[0]
          },
          gR = RR => {
            let tR = bJ(RR, BJ, JR, vJ, yR, BR, ((RR, JR, yR) => {
              if (yR) return GR = !0;
              vJ = JR;
              let tR = BJ;
              return WR(RR), nR(), tR !== BJ ? {
                position: vJ,
                targetView: pJ,
                target: BJ
              } : vJ
            }), this);
            if (0 === tR) return MR(RR);
            vJ = tR
          }
      }
      useBuffer(RR) {
        BJ = RR, pJ = BJ.dataView || (BJ.dataView = new DataView(BJ.buffer, BJ.byteOffset, BJ.byteLength)), vJ = 0
      }
      set position(RR) {
        vJ = RR
      }
      get position() {
        return vJ
      }
      set buffer(RR) {
        BJ = RR
      }
      get buffer() {
        return BJ
      }
      clearSharedData() {
        this.structures && (this.structures = []), this.typedStructs && (this.typedStructs = [])
      }
    }

    function HJ(RR, JR, GR, yR) {
      let tR = RR.byteLength;
      if (tR + 1 < 256) {
        var {
          target: uR,
          position: ZR
        } = GR(4 + tR);
        uR[ZR++] = 199, uR[ZR++] = tR + 1
      } else if (tR + 1 < 65536) {
        var {
          target: uR,
          position: ZR
        } = GR(5 + tR);
        uR[ZR++] = 200, uR[ZR++] = tR + 1 >> 8, uR[ZR++] = tR + 1 & 255
      } else {
        var {
          target: uR,
          position: ZR,
          targetView: qR
        } = GR(7 + tR);
        uR[ZR++] = 201, qR.setUint32(ZR, tR + 1), ZR += 4
      }
      uR[ZR++] = 116, uR[ZR++] = JR, RR.buffer || (RR = new Uint8Array(RR)), uR.set(new Uint8Array(RR.buffer, RR.byteOffset, RR.byteLength), ZR)
    }

    function oJ(RR, JR) {
      let GR = RR.byteLength;
      var yR, tR;
      if (GR < 256) {
        var {
          target: yR,
          position: tR
        } = JR(GR + 2);
        yR[tR++] = 196, yR[tR++] = GR
      } else if (GR < 65536) {
        var {
          target: yR,
          position: tR
        } = JR(GR + 3);
        yR[tR++] = 197, yR[tR++] = GR >> 8, yR[tR++] = 255 & GR
      } else {
        var {
          target: yR,
          position: tR,
          targetView: uR
        } = JR(GR + 5);
        yR[tR++] = 198, uR.setUint32(tR, GR), tR += 4
      }
      yR.set(RR, tR)
    }

    function cJ(RR, JR, GR, yR) {
      let tR = RR.length;
      switch (tR) {
        case 1:
          JR[GR++] = 212;
          break;
        case 2:
          JR[GR++] = 213;
          break;
        case 4:
          JR[GR++] = 214;
          break;
        case 8:
          JR[GR++] = 215;
          break;
        case 16:
          JR[GR++] = 216;
          break;
        default:
          tR < 256 ? (JR[GR++] = 199, JR[GR++] = tR) : tR < 65536 ? (JR[GR++] = 200, JR[GR++] = tR >> 8, JR[GR++] = 255 & tR) : (JR[GR++] = 201, JR[GR++] = tR >> 24, JR[GR++] = tR >> 16 & 255, JR[GR++] = tR >> 8 & 255, JR[GR++] = 255 & tR)
      }
      return JR[GR++] = yR, JR.set(RR, GR), GR += tR
    }

    function PJ(RR, JR, GR) {
      if (OJ.length > 0) {
        pJ.setUint32(OJ.position + RR, vJ + GR - OJ.position - RR), OJ.stringsPosition = vJ - RR;
        let yR = OJ;
        OJ = null, JR(yR[0]), JR(yR[1])
      }
    }

    function IJ(RR) {
      if (RR.Class) {
        if (!RR.pack && !RR.write) throw new Error("Extension has no pack or write function");
        if (RR.pack && !RR.type) throw new Error("Extension has no type (numeric code to identify the extension)");
        LJ.unshift(RR.Class), aJ.unshift(RR)
      }! function(RR) {
        RR.unpack ? UR[RR.type] = RR.unpack : UR[RR.type] = RR
      }(RR)
    }

    function mJ(RR, JR) {
      return RR.isCompatible = RR => {
        let GR = !RR || (JR.lastNamedStructuresLength || 0) === RR.length;
        return GR || JR._mergeStructures(RR), GR
      }, RR
    }
    LJ = [Date, Set, Error, RegExp, ArrayBuffer, Object.getPrototypeOf(Uint8Array.prototype).constructor, AR], aJ = [{
      pack(RR, JR, GR) {
        let yR = RR.getTime() / 1e3;
        if ((this.useTimestamp32 || 0 === RR.getMilliseconds()) && yR >= 0 && yR < 4294967296) {
          let {
            target: RR,
            targetView: GR,
            position: tR
          } = JR(6);
          RR[tR++] = 214, RR[tR++] = 255, GR.setUint32(tR, yR)
        } else if (yR > 0 && yR < 4294967296) {
          let {
            target: GR,
            targetView: tR,
            position: uR
          } = JR(10);
          GR[uR++] = 215, GR[uR++] = 255, tR.setUint32(uR, 4e6 * RR.getMilliseconds() + (yR / 1e3 / 4294967296 | 0)), tR.setUint32(uR + 4, yR)
        } else if (isNaN(yR)) {
          if (this.onInvalidDate) return JR(0), GR(this.onInvalidDate());
          let {
            target: RR,
            targetView: yR,
            position: tR
          } = JR(3);
          RR[tR++] = 212, RR[tR++] = 255, RR[tR++] = 255
        } else {
          let {
            target: GR,
            targetView: tR,
            position: uR
          } = JR(15);
          GR[uR++] = 199, GR[uR++] = 12, GR[uR++] = 255, tR.setUint32(uR, 1e6 * RR.getMilliseconds()), tR.setBigInt64(uR + 4, BigInt(Math.floor(yR)))
        }
      }
    }, {
      pack(RR, JR, GR) {
        if (this.setAsEmptyObject) return JR(0), GR({});
        let yR = Array.from(RR),
          {
            target: tR,
            position: uR
          } = JR(this.moreTypes ? 3 : 0);
        this.moreTypes && (tR[uR++] = 212, tR[uR++] = 115, tR[uR++] = 0), GR(yR)
      }
    }, {
      pack(RR, JR, GR) {
        let {
          target: yR,
          position: tR
        } = JR(this.moreTypes ? 3 : 0);
        this.moreTypes && (yR[tR++] = 212, yR[tR++] = 101, yR[tR++] = 0), GR([RR.name, RR.message, RR.cause])
      }
    }, {
      pack(RR, JR, GR) {
        let {
          target: yR,
          position: tR
        } = JR(this.moreTypes ? 3 : 0);
        this.moreTypes && (yR[tR++] = 212, yR[tR++] = 120, yR[tR++] = 0), GR([RR.source, RR.flags])
      }
    }, {
      pack(RR, JR) {
        this.moreTypes ? HJ(RR, 16, JR) : oJ(AJ ? Buffer.from(RR) : new Uint8Array(RR), JR)
      }
    }, {
      pack(RR, JR) {
        let GR = RR.constructor;
        GR !== XJ && this.moreTypes ? HJ(RR, GJ.indexOf(GR.name), JR) : oJ(RR, JR)
      }
    }, {
      pack(RR, JR) {
        let {
          target: GR,
          position: yR
        } = JR(1);
        GR[yR] = 193
      }
    }];
    let zJ = new DJ({
      useRecords: !1
    });
    const SJ = zJ.pack,
      jJ = zJ.pack,
      dJ = DJ,
      {
        NEVER: EJ,
        ALWAYS: YJ,
        DECIMAL_ROUND: kJ,
        DECIMAL_FIT: QJ
      } = rJ,
      FJ = 512,
      TJ = 1024,
      sJ = 2048;
    const hJ = function(RR) {
        let JR = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        if (!RR || "object" !== typeof RR) throw new Error("first argument must be an Iterable, Async Iterable, Iterator, Async Iterator, or a promise");
        const GR = new gR(JR);
        let yR;
        const tR = RR => {
          let JR;
          yR && (RR = Buffer.concat([yR, RR]), yR = void 0);
          try {
            JR = GR.unpackMultiple(RR)
          } catch (tR) {
            if (!tR.incomplete) throw tR;
            yR = RR.slice(tR.lastPosition), JR = tR.values
          }
          return JR
        };
        return "function" === typeof RR[Symbol.iterator] ? function*() {
          for (const JR of RR) yield* tR(JR)
        }() : "function" === typeof RR[Symbol.asyncIterator] ? async function*() {
          for await (const JR of RR) yield* tR(JR)
        }(): void 0
      },
      RG = function(RR) {
        let JR = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        if (RR && "object" === typeof RR) {
          if ("function" === typeof RR[Symbol.iterator]) return function*(RR, JR) {
            const GR = new DJ(JR);
            for (const yR of RR) yield GR.pack(yR)
          }(RR, JR);
          if ("function" === typeof RR.then || "function" === typeof RR[Symbol.asyncIterator]) return async function*(RR, JR) {
            const GR = new DJ(JR);
            for await (const yR of RR) yield GR.pack(yR)
          }(RR, JR);
          throw new Error("first argument must be an Iterable, Async Iterable, Iterator, Async Iterator, or a Promise")
        }
        throw new Error("first argument must be an Iterable, Async Iterable, or a Promise for an Async Iterable")
      },
      JG = !1,
      GG = !0
  },
  10496: (RR, JR, GR) => {
    GR.r(JR), GR.d(JR, {
      $changes: () => aR,
      $childType: () => LR,
      $decoder: () => VR,
      $deleteByIndex: () => rR,
      $encoder: () => fR,
      $filter: () => KR,
      $getByIndex: () => wR,
      $numFields: () => pR,
      $refId: () => qR,
      $track: () => iR,
      $values: () => CR,
      ArraySchema: () => Gy,
      Callbacks: () => Gt,
      ChangeTree: () => vG,
      CollectionSchema: () => uy,
      Decoder: () => ky,
      Encoder: () => jy,
      FieldBuilder: () => iy,
      MapSchema: () => ty,
      Metadata: () => kJ,
      OPERATION: () => tR,
      Reflection: () => sy,
      ReflectionField: () => Fy,
      ReflectionType: () => Ty,
      Root: () => Oy,
      Schema: () => by,
      SetSchema: () => Zy,
      StateCallbackStrategy: () => Jt,
      StateView: () => oy,
      StreamSchema: () => qy,
      TypeContext: () => mJ,
      createPool: () => tt,
      decode: () => WJ,
      decodeKeyValueOperation: () => FG,
      decodeSchemaOperation: () => QG,
      defineCustomTypes: () => MJ,
      defineTypes: () => ly,
      deprecated: () => My,
      dumpChanges: () => gy,
      encode: () => JJ,
      encodeArray: () => PG,
      encodeIndexedEntry: () => oG,
      encodeKeyValueOperation: () => cG,
      encodeMapEntry: () => HG,
      encodeSchemaOperation: () => DG,
      pe: () => ay,
      fullStateOnly: () => Wy,
      getDecoderStateCallbacks: () => hy,
      getEncodeDescriptor: () => RG,
      getRawChangesCallback: () => Rt,
      isBuilder: () => fy,
      patchOnly: () => Uy,
      registerType: () => XJ,
      schema: () => py,
      t: () => ry,
      type: () => Ay,
      unreliable: () => ny,
      view: () => Ly
    });
    const yR = 255;
    var tR;

    function uR(RR) {
      Object.defineProperty(RR, Symbol.metadata, {
        value: void 0,
        writable: !0,
        configurable: !0,
        enumerable: !1
      })
    }! function(RR) {
      RR[RR.ADD = 128] = "ADD", RR[RR.REPLACE = 0] = "REPLACE", RR[RR.DELETE = 64] = "DELETE", RR[RR.DELETE_AND_MOVE = 96] = "DELETE_AND_MOVE", RR[RR.MOVE_AND_ADD = 160] = "MOVE_AND_ADD", RR[RR.DELETE_AND_ADD = 192] = "DELETE_AND_ADD", RR[RR.CLEAR = 10] = "CLEAR", RR[RR.REVERSE = 15] = "REVERSE", RR[RR.MOVE = 32] = "MOVE", RR[RR.DELETE_BY_REFID = 33] = "DELETE_BY_REFID", RR[RR.ADD_BY_REFID = 129] = "ADD_BY_REFID"
    }(tR || (tR = {})), Symbol.metadata ??= Symbol.for("Symbol.metadata");
    const ZR = "undefined" !== typeof globalThis ? globalThis : "undefined" !== typeof global ? global : "undefined" !== typeof self ? self : "undefined" !== typeof window ? window : {};
    if ("function" === typeof Symbol && "function" !== typeof Symbol.for) {
      const RR = "colyseus.symbolRegistry",
        JR = ZR[RR] || (ZR[RR] = Object.create(null));
      Symbol.for = function(RR) {
        return JR[RR] || (JR[RR] = Symbol(RR))
      }, Symbol.keyFor = function(RR) {
        for (const GR in JR)
          if (JR[GR] === RR) return GR
      }
    }
    const qR = Symbol.for("$refId"),
      iR = "~track",
      fR = "~encoder",
      VR = "~decoder",
      KR = "~filter",
      wR = "~getByIndex",
      rR = "~deleteByIndex",
      eR = "~resyncPrune",
      aR = Symbol.for("$changes"),
      LR = Symbol.for("$childType"),
      nR = Symbol.for("$proxyTarget"),
      UR = "~onEncodeEnd",
      WR = "~reset",
      AR = "~onDecodeEnd",
      CR = Symbol.for("$values"),
      XR = "~builder",
      MR = "~descriptors",
      BR = "~__encodeDescriptor",
      lR = "~encoders",
      pR = "~__numFields",
      gR = "~__refTypeFieldIndexes",
      bR = "~__viewFieldIndexes",
      vR = "$__fieldIndexesByViewTag",
      OR = "~__unreliableFieldIndexes",
      xR = "~__patchOnlyFieldIndexes",
      NR = "~__fullSyncSkipIndexes",
      DR = "~__fullStateOnlyFieldIndexes",
      HR = "~__streamFieldIndexes",
      oR = "~__streamPriorities";
    let cR;
    try {
      cR = new TextEncoder
    } catch (ut) {}
    const PR = new ArrayBuffer(8),
      IR = new Int32Array(PR),
      mR = new Float32Array(PR),
      zR = new Float64Array(PR),
      SR = new BigInt64Array(PR),
      jR = "undefined" !== typeof Buffer && Buffer.byteLength ? Buffer.byteLength : function(RR, JR) {
        for (var GR = 0, yR = 0, tR = 0, uR = RR.length; tR < uR; tR++)(GR = RR.charCodeAt(tR)) < 128 ? yR += 1 : GR < 2048 ? yR += 2 : GR < 55296 || GR >= 57344 ? yR += 3 : (tR++, yR += 4);
        return yR
      };

    function dR(RR, JR, GR) {
      for (var yR = 0, tR = 0, uR = JR.length; tR < uR; tR++)(yR = JR.charCodeAt(tR)) < 128 ? RR[GR.offset++] = yR : yR < 2048 ? (RR[GR.offset] = 192 | yR >> 6, RR[GR.offset + 1] = 128 | 63 & yR, GR.offset += 2) : yR < 55296 || yR >= 57344 ? (RR[GR.offset] = 224 | yR >> 12, RR[GR.offset + 1] = 128 | yR >> 6 & 63, RR[GR.offset + 2] = 128 | 63 & yR, GR.offset += 3) : (tR++, yR = 65536 + ((1023 & yR) << 10 | 1023 & JR.charCodeAt(tR)), RR[GR.offset] = 240 | yR >> 18, RR[GR.offset + 1] = 128 | yR >> 12 & 63, RR[GR.offset + 2] = 128 | yR >> 6 & 63, RR[GR.offset + 3] = 128 | 63 & yR, GR.offset += 4)
    }

    function ER(RR, JR, GR) {
      RR[GR.offset++] = 255 & JR
    }

    function YR(RR, JR, GR) {
      RR[GR.offset++] = 255 & JR, RR[GR.offset++] = JR >> 8 & 255
    }

    function kR(RR, JR, GR) {
      RR[GR.offset++] = 255 & JR, RR[GR.offset++] = JR >> 8 & 255
    }

    function QR(RR, JR, GR) {
      RR[GR.offset++] = 255 & JR, RR[GR.offset++] = JR >> 8 & 255, RR[GR.offset++] = JR >> 16 & 255, RR[GR.offset++] = JR >> 24 & 255
    }

    function FR(RR, JR, GR) {
      const yR = JR >> 24,
        tR = JR >> 16,
        uR = JR >> 8,
        ZR = JR;
      RR[GR.offset++] = 255 & ZR, RR[GR.offset++] = 255 & uR, RR[GR.offset++] = 255 & tR, RR[GR.offset++] = 255 & yR
    }

    function TR(RR, JR, GR) {
      const yR = Math.floor(JR / Math.pow(2, 32));
      FR(RR, JR >>> 0, GR), FR(RR, yR, GR)
    }

    function sR(RR, JR, GR) {
      const yR = JR / Math.pow(2, 32) | 0;
      FR(RR, JR >>> 0, GR), FR(RR, yR, GR)
    }

    function hR(RR, JR, GR) {
      mR[0] = JR, QR(RR, IR[0], GR)
    }

    function RJ(RR, JR, GR) {
      zR[0] = JR, QR(RR, IR[0], GR), QR(RR, IR[1], GR)
    }
    const JJ = {
        int8: ER,
        uint8: function(RR, JR, GR) {
          RR[GR.offset++] = 255 & JR
        },
        int16: YR,
        uint16: kR,
        int32: QR,
        uint32: FR,
        int64: TR,
        uint64: sR,
        bigint64: function(RR, JR, GR) {
          SR[0] = BigInt.asIntN(64, JR), QR(RR, IR[0], GR), QR(RR, IR[1], GR)
        },
        biguint64: function(RR, JR, GR) {
          SR[0] = BigInt.asIntN(64, JR), QR(RR, IR[0], GR), QR(RR, IR[1], GR)
        },
        float32: hR,
        float64: RJ,
        boolean: function(RR, JR, GR) {
          RR[GR.offset++] = JR ? 1 : 0
        },
        string: function(RR, JR, GR) {
          JR || (JR = "");
          let yR = jR(JR, "utf8"),
            tR = 0;
          if (yR < 32) RR[GR.offset++] = 160 | yR, tR = 1;
          else if (yR < 256) RR[GR.offset++] = 217, RR[GR.offset++] = yR, tR = 2;
          else if (yR < 65536) RR[GR.offset++] = 218, kR(RR, yR, GR), tR = 3;
          else {
            if (!(yR < 4294967296)) throw new Error("String too long");
            RR[GR.offset++] = 219, FR(RR, yR, GR), tR = 5
          }
          return dR(RR, JR, GR), tR + yR
        },
        number: function RR(JR, GR, yR) {
          return isNaN(GR) ? RR(JR, 0, yR) : isFinite(GR) ? GR !== (0 | GR) ? Math.abs(GR) <= 34028235e31 && (mR[0] = GR, Math.abs(Math.abs(mR[0]) - Math.abs(GR)) < 1e-4) ? (JR[yR.offset++] = 202, hR(JR, GR, yR), 5) : (JR[yR.offset++] = 203, RJ(JR, GR, yR), 9) : GR >= 0 ? GR < 128 ? (JR[yR.offset++] = 255 & GR, 1) : GR < 256 ? (JR[yR.offset++] = 204, JR[yR.offset++] = 255 & GR, 2) : GR < 65536 ? (JR[yR.offset++] = 205, kR(JR, GR, yR), 3) : GR < 4294967296 ? (JR[yR.offset++] = 206, FR(JR, GR, yR), 5) : (JR[yR.offset++] = 207, sR(JR, GR, yR), 9) : GR >= -32 ? (JR[yR.offset++] = 224 | GR + 32, 1) : GR >= -128 ? (JR[yR.offset++] = 208, ER(JR, GR, yR), 2) : GR >= -32768 ? (JR[yR.offset++] = 209, YR(JR, GR, yR), 3) : GR >= -2147483648 ? (JR[yR.offset++] = 210, QR(JR, GR, yR), 5) : (JR[yR.offset++] = 211, TR(JR, GR, yR), 9) : RR(JR, GR > 0 ? Number.MAX_SAFE_INTEGER : -Number.MAX_SAFE_INTEGER, yR)
        },
        utf8Write: dR,
        utf8Length: jR
      },
      GJ = new ArrayBuffer(8),
      yJ = new Int32Array(GJ),
      tJ = new Float32Array(GJ),
      uJ = new Float64Array(GJ),
      ZJ = new BigUint64Array(GJ),
      qJ = new BigInt64Array(GJ);

    function iJ(RR, JR, GR) {
      GR > RR.length - JR.offset && (GR = RR.length - JR.offset);
      for (var yR = "", tR = 0, uR = JR.offset, ZR = JR.offset + GR; uR < ZR; uR++) {
        var qR = RR[uR];
        if (0 !== (128 & qR))
          if (192 !== (224 & qR))
            if (224 !== (240 & qR)) {
              if (240 !== (248 & qR)) {
                console.error("decode.utf8Read(): Invalid byte " + qR + " at offset " + uR + ". Skip to end of string: " + (JR.offset + GR));
                break
              }(tR = (7 & qR) << 18 | (63 & RR[++uR]) << 12 | (63 & RR[++uR]) << 6 | 63 & RR[++uR]) >= 65536 ? (tR -= 65536, yR += String.fromCharCode(55296 + (tR >>> 10), 56320 + (1023 & tR))) : yR += String.fromCharCode(tR)
            } else yR += String.fromCharCode((15 & qR) << 12 | (63 & RR[++uR]) << 6 | 63 & RR[++uR]);
        else yR += String.fromCharCode((31 & qR) << 6 | 63 & RR[++uR]);
        else yR += String.fromCharCode(qR)
      }
      return JR.offset += GR, yR
    }

    function fJ(RR, JR) {
      return VJ(RR, JR) << 24 >> 24
    }

    function VJ(RR, JR) {
      return RR[JR.offset++]
    }

    function KJ(RR, JR) {
      return wJ(RR, JR) << 16 >> 16
    }

    function wJ(RR, JR) {
      return RR[JR.offset++] | RR[JR.offset++] << 8
    }

    function rJ(RR, JR) {
      return RR[JR.offset++] | RR[JR.offset++] << 8 | RR[JR.offset++] << 16 | RR[JR.offset++] << 24
    }

    function eJ(RR, JR) {
      return rJ(RR, JR) >>> 0
    }

    function aJ(RR, JR) {
      return yJ[0] = rJ(RR, JR), tJ[0]
    }

    function LJ(RR, JR) {
      return yJ[0] = rJ(RR, JR), yJ[1] = rJ(RR, JR), uJ[0]
    }

    function nJ(RR, JR) {
      const GR = eJ(RR, JR);
      return rJ(RR, JR) * Math.pow(2, 32) + GR
    }

    function UJ(RR, JR) {
      const GR = eJ(RR, JR);
      return eJ(RR, JR) * Math.pow(2, 32) + GR
    }
    const WJ = {
        utf8Read: iJ,
        int8: fJ,
        uint8: VJ,
        int16: KJ,
        uint16: wJ,
        int32: rJ,
        uint32: eJ,
        float32: aJ,
        float64: LJ,
        int64: nJ,
        uint64: UJ,
        bigint64: function(RR, JR) {
          return yJ[0] = rJ(RR, JR), yJ[1] = rJ(RR, JR), qJ[0]
        },
        biguint64: function(RR, JR) {
          return yJ[0] = rJ(RR, JR), yJ[1] = rJ(RR, JR), ZJ[0]
        },
        boolean: function(RR, JR) {
          return VJ(RR, JR) > 0
        },
        string: function(RR, JR) {
          const GR = RR[JR.offset++];
          let yR;
          return GR < 192 ? yR = 31 & GR : 217 === GR ? yR = VJ(RR, JR) : 218 === GR ? yR = wJ(RR, JR) : 219 === GR && (yR = eJ(RR, JR)), iJ(RR, JR, yR)
        },
        number: function(RR, JR) {
          const GR = RR[JR.offset++];
          return GR < 128 ? GR : 202 === GR ? aJ(RR, JR) : 203 === GR ? LJ(RR, JR) : 204 === GR ? VJ(RR, JR) : 205 === GR ? wJ(RR, JR) : 206 === GR ? eJ(RR, JR) : 207 === GR ? UJ(RR, JR) : 208 === GR ? fJ(RR, JR) : 209 === GR ? KJ(RR, JR) : 210 === GR ? rJ(RR, JR) : 211 === GR ? nJ(RR, JR) : GR > 223 ? -1 * (255 - GR + 1) : void 0
        },
        stringCheck: function(RR, JR) {
          const GR = RR[JR.offset];
          return GR < 192 && GR > 160 || 217 === GR || 218 === GR || 219 === GR
        }
      },
      AJ = {},
      CJ = new Map;

    function XJ(RR, JR) {
      JR.constructor && (Object.prototype.hasOwnProperty.call(JR, "constructor") && null == JR.constructor[Symbol.metadata] && uR(JR.constructor), CJ.set(JR.constructor, RR), AJ[RR] = JR), JR.encode && (JJ[RR] = JR.encode), JR.decode && (WJ[RR] = JR.decode)
    }

    function MJ(RR) {
      for (const JR in RR) XJ(JR, RR[JR]);
      return RR => Ay(RR)
    }
    const BJ = "ArraySchema does not support streaming \u2014 positional ops (splice / unshift / reverse) shift subsequent indexes, so holding ADDs back for a later tick under `maxPerTick` would desync the decoder. Use `t.stream(X)` (stable monotonic positions) or `t.map(X).stream()` (stable keys) instead.";

    function lJ() {
      return {
        pendingByView: new Map,
        sentByView: new Map,
        broadcastPending: new Set,
        sentBroadcast: new Set,
        broadcastDeletes: new Set,
        maxPerTick: 32
      }
    }

    function pJ(RR) {
      return RR._stream ??= lJ()
    }

    function gJ(RR, JR, GR) {
      0 === JR.activeViews.size && pJ(RR).broadcastPending.add(GR)
    }

    function bJ(RR, JR, GR, yR) {
      const uR = RR._stream;
      if (void 0 === uR) return !0;
      let ZR = !1;
      return uR.broadcastPending.delete(yR) ? ZR = !0 : uR.sentBroadcast.delete(yR) && uR.broadcastDeletes.add(yR), JR.forEachActiveView((RR => {
        const JR = uR.pendingByView.get(RR.id);
        if (JR?.has(yR)) return JR.delete(yR), void(ZR = !0);
        const qR = uR.sentByView.get(RR.id);
        if (qR?.has(yR)) {
          qR.delete(yR);
          let JR = RR.changes.get(GR);
          void 0 === JR && (JR = new Map, RR.changes.set(GR, JR)), JR.set(yR, tR.DELETE)
        }
      })), ZR
    }

    function vJ(RR, JR) {
      const GR = RR._stream?.pendingByView;
      if (void 0 === GR) return !1;
      for (const [yR, tR] of GR)
        if (tR.size > 0 && void 0 !== JR.activeViews.get(yR)?.deref()) return !0;
      return !1
    }

    function OJ(RR) {
      const JR = RR._stream;
      return void 0 !== JR && (JR.broadcastPending.size > 0 || JR.broadcastDeletes.size > 0)
    }

    function xJ(RR, JR, GR) {
      const yR = pJ(RR);
      let tR = yR.pendingByView.get(JR);
      void 0 === tR && (tR = new Set, yR.pendingByView.set(JR, tR)), tR.add(GR)
    }

    function NJ(RR, JR) {
      const GR = RR._stream;
      void 0 !== GR && (GR.pendingByView.delete(JR), GR.sentByView.delete(JR), GR.priorityByView?.delete(JR))
    }
    const DJ = {
      8: "uint8",
      16: "uint16",
      32: "uint32"
    };

    function HJ(RR) {
      if (null == RR || "object" !== typeof RR) throw new Error("t.quantized(): options object with { min, max } is required.");
      const {
        min: JR,
        max: GR
      } = RR;
      if ("number" !== typeof JR || "number" !== typeof GR || !(GR > JR) || !Number.isFinite(JR) || !Number.isFinite(GR)) throw new Error(`t.quantized(): require finite min < max (got min=${JR}, max=${GR}).`);
      const yR = RR.bits ?? 16;
      if (8 !== yR && 16 !== yR && 32 !== yR) throw new Error(`t.quantized(): bits must be 8, 16 or 32 (got ${yR}).`);
      const tR = RR.mode ?? "clamp";
      if ("clamp" !== tR && "wrap" !== tR) throw new Error(`t.quantized(): mode must be "clamp" or "wrap" (got ${JSON.stringify(tR)}).`);
      const uR = "wrap" === tR,
        ZR = Math.pow(2, yR);
      return {
        min: JR,
        max: GR,
        bits: yR,
        wrap: uR,
        wire: DJ[yR],
        range: GR - JR,
        span: uR ? ZR : JR === -GR ? ZR - 2 : ZR - 1
      }
    }

    function oJ(RR) {
      return null !== RR && "object" === typeof RR && void 0 !== RR.quantized
    }

    function cJ(RR, JR) {
      if (RR.wrap) {
        if (!Number.isFinite(JR)) return 0;
        const GR = RR.range;
        let yR = (JR - RR.min) % GR;
        yR < 0 && (yR += GR);
        const tR = RR.span;
        return Math.floor(yR / GR * tR + .5) % tR
      }
      if (JR !== JR) return 0;
      const GR = JR < RR.min ? RR.min : JR > RR.max ? RR.max : JR;
      return Math.floor((GR - RR.min) / RR.range * RR.span + .5)
    }

    function PJ(RR, JR) {
      return RR.min + JR / RR.span * RR.range
    }

    function IJ(RR) {
      const JR = JJ[RR.wire];
      return (GR, yR, tR) => JR(GR, cJ(RR, yR), tR)
    }
    class mJ {
      types = {};
      schemas = new Map;
      hasFilters = !1;
      static inheritedTypes = new WeakMap;
      static cachedContexts = new WeakMap;
      static register(RR) {
        const JR = Object.getPrototypeOf(RR);
        if (JR !== by) {
          let GR = mJ.inheritedTypes.get(JR);
          GR || (GR = new Set, mJ.inheritedTypes.set(JR, GR)), GR.add(RR)
        }
      }
      static cache(RR) {
        let JR = mJ.cachedContexts.get(RR);
        return JR || (JR = new mJ(RR), mJ.cachedContexts.set(RR, JR)), JR
      }
      constructor(RR) {
        RR && this.discoverTypes(RR)
      }
      has(RR) {
        return this.schemas.has(RR)
      }
      get(RR) {
        return this.types[RR]
      }
      add(RR) {
        let JR = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.schemas.size;
        return !this.schemas.has(RR) && (this.types[JR] = RR, null == RR[Symbol.metadata] && kJ.initialize(RR), this.schemas.set(RR, JR), !0)
      }
      getTypeId(RR) {
        return this.schemas.get(RR)
      }
      discoverTypes(RR) {
        if (!this.add(RR)) return;
        mJ.inheritedTypes.get(RR)?.forEach((RR => {
          this.discoverTypes(RR)
        }));
        let JR = RR;
        for (;
          (JR = Object.getPrototypeOf(JR)) && JR !== by && JR !== Function.prototype;) this.discoverTypes(JR);
        const GR = RR[Symbol.metadata];
        (GR[bR] || GR[HR]) && (this.hasFilters = !0);
        for (const yR in GR) {
          const RR = GR[yR].type;
          if ("string" !== typeof RR && !oJ(RR))
            if ("function" === typeof RR) this.discoverTypes(RR);
            else {
              const JR = Object.values(RR)[0];
              if ("string" === typeof JR) continue;
              this.discoverTypes(JR)
            }
        }
      }
      debug() {
        return `TypeContext ->\n\tSchema types: ${this.schemas.size}\n\thasFilters: ${this.hasFilters}`
      }
    }

    function zJ(RR) {
      const JR = jJ(RR);
      return JR ? {
        complexTypeKlass: AJ[JR],
        childType: RR[JR]
      } : {
        complexTypeKlass: !1,
        childType: RR
      }
    }

    function SJ(RR, JR) {
      const GR = dJ(RR),
        yR = jJ(GR),
        tR = yR && jJ(GR[yR]);
      if (tR) throw new Error(`${JR?`${JR}: `:""}@colyseus/schema: nested collections are not supported ("${yR}" of "${tR}"). Collections can only hold primitive types or Schema classes, wrap the inner ${tR} in a Schema class.`);
      return GR
    }

    function jJ(RR) {
      return "object" === typeof RR && null !== RR ? Object.keys(RR).find((RR => void 0 !== AJ[RR])) : void 0
    }

    function dJ(RR) {
      if ("object" !== typeof RR || null === RR) return RR;
      if (Array.isArray(RR)) return {
        array: dJ(RR[0])
      };
      const JR = function(RR) {
        const JR = Object.keys(RR),
          GR = JR.filter((RR => /\d+/.test(RR)));
        if (GR.length > 0 && GR.length === JR.length / 2 && RR[RR[GR[0]]] == GR[0]) return "number";
        if (JR.length > 0 && JR.every((JR => RR[JR] === JR))) return "string"
      }(RR);
      if (JR) return JR;
      if (oJ(RR)) return "string" === typeof RR.quantized.wire ? RR : {
        quantized: HJ(RR.quantized)
      };
      if (void 0 !== RR.type) return dJ(RR.type);
      const GR = jJ(RR);
      return GR && (RR[GR] = dJ(RR[GR])), RR
    }
    const EJ = [gR, OR, xR, NR, DR, HR, lR];

    function YJ(RR, JR, GR) {
      RR[JR] || Object.defineProperty(RR, JR, {
        value: [],
        enumerable: !1,
        configurable: !0,
        writable: !0
      }), RR[JR].push(GR)
    }
    const kJ = {
        addField(RR, JR, GR, yR, tR) {
          if (JR >= 63) throw new Error(`Can't define field '${GR}'.\nSchema instances may only have up to 63 fields.`);
          RR[JR] = Object.assign(RR[JR] || {}, {
            type: yR,
            index: JR,
            name: GR
          }), Object.defineProperty(RR, MR, {
            value: RR[MR] || {},
            enumerable: !1,
            configurable: !0
          }), RR[MR][GR] = tR || {
            value: void 0,
            writable: !0,
            enumerable: !0,
            configurable: !0
          }, Object.defineProperty(RR, pR, {
            value: JR,
            enumerable: !1,
            configurable: !0
          }), Object.defineProperty(RR, GR, {
            value: JR,
            enumerable: !1,
            configurable: !0
          }), "string" === typeof RR[JR].type || oJ(RR[JR].type) || (void 0 === RR[gR] && Object.defineProperty(RR, gR, {
            value: [],
            enumerable: !1,
            configurable: !0
          }), RR[gR].push(JR));
          const uR = RR[JR].type;
          if (uR && "object" === typeof uR && void 0 !== uR.stream) {
            if (void 0 !== uR.array) throw new Error(BJ);
            RR[JR].stream = !0, RR[HR] || Object.defineProperty(RR, HR, {
              value: [],
              enumerable: !1,
              configurable: !0,
              writable: !0
            }), RR[HR].includes(JR) || RR[HR].push(JR);
            const tR = yR?.priority;
            "function" === typeof tR && kJ.setStreamPriority(RR, GR, tR)
          }
        },
        setTag(RR, JR, GR) {
          const yR = RR[JR];
          if (RR[yR].tag = GR, RR[bR] || (Object.defineProperty(RR, bR, {
              value: [],
              enumerable: !1,
              configurable: !0
            }), Object.defineProperty(RR, vR, {
              value: {},
              enumerable: !1,
              configurable: !0
            })), RR[bR].push(yR), GR < 0) RR[vR][GR] || (RR[vR][GR] = []), RR[vR][GR].push(yR);
          else
            for (let tR = GR; tR > 0; tR &= tR - 1) {
              const JR = tR & -tR;
              RR[vR][JR] || (RR[vR][JR] = []), RR[vR][JR].push(yR)
            }
        },
        setUnreliable(RR, JR) {
          const GR = RR[JR];
          if ("string" !== typeof RR[GR].type) throw new Error(`@unreliable cannot be applied to ref-type field "${JR}". For ref-type fields, mark each primitive sub-field with @unreliable instead. See README "Limitations and best practices".`);
          RR[GR].unreliable = !0, RR[OR] || Object.defineProperty(RR, OR, {
            value: [],
            enumerable: !1,
            configurable: !0,
            writable: !0
          }), RR[OR].push(GR)
        },
        setPatchOnly(RR, JR) {
          const GR = RR[JR];
          if (RR[GR].fullStateOnly) throw new Error(`field "${JR}" cannot be both patchOnly and fullStateOnly \u2014 those are the only two delivery channels, so the field would never reach a client.`);
          RR[GR].patchOnly = !0, YJ(RR, xR, GR), YJ(RR, NR, GR)
        },
        setDeprecated(RR, JR) {
          const GR = RR[JR];
          RR[GR].deprecated = !0, YJ(RR, NR, GR), Object.defineProperty(RR, GR, {
            value: RR[GR],
            enumerable: !1,
            configurable: !0
          })
        },
        setFullStateOnly(RR, JR) {
          const GR = RR[JR];
          if (RR[GR].patchOnly) throw new Error(`field "${JR}" cannot be both patchOnly and fullStateOnly \u2014 those are the only two delivery channels, so the field would never reach a client.`);
          RR[GR].fullStateOnly = !0, YJ(RR, DR, GR)
        },
        setStream(RR, JR) {
          const GR = RR[JR];
          RR[GR].stream = !0, RR[HR] || Object.defineProperty(RR, HR, {
            value: [],
            enumerable: !1,
            configurable: !0,
            writable: !0
          }), RR[HR].push(GR)
        },
        setStreamPriority(RR, JR, GR) {
          const yR = RR[JR];
          RR[oR] || Object.defineProperty(RR, oR, {
            value: {},
            enumerable: !1,
            configurable: !0,
            writable: !0
          }), RR[oR][yR] = GR
        },
        getStreamPriority: (RR, JR) => RR?.[oR]?.[JR],
        defineField(RR, JR, GR, yR, tR) {
          const uR = SJ(tR, `${RR.name}.${yR}`),
            {
              complexTypeKlass: ZR,
              childType: qR
            } = zJ(uR);
          kJ.addField(JR, GR, yR, uR, Xy(yR, GR, qR, ZR)), JR[MR][yR] && Object.defineProperty(RR.prototype, yR, JR[MR][yR]), ("string" === typeof uR || oJ(uR)) && (JR[lR] || Object.defineProperty(JR, lR, {
            value: [],
            enumerable: !1,
            configurable: !0,
            writable: !0
          }), JR[lR][GR] = "string" === typeof uR ? JJ[uR] : IJ(uR.quantized))
        },
        setFields(RR, JR) {
          const GR = RR.prototype.constructor;
          mJ.register(GR);
          const yR = Object.getPrototypeOf(GR),
            tR = yR && yR[Symbol.metadata],
            uR = kJ.initialize(GR);
          GR[iR] || (GR[iR] = by[iR]), GR[fR] || (GR[fR] = by[fR]), GR[VR] || (GR[VR] = by[VR]), GR.prototype.toJSON || (GR.prototype.toJSON = by.prototype.toJSON);
          let ZR = uR[pR] ?? (tR && tR[pR]) ?? -1;
          ZR++, uR[lR] || Object.defineProperty(uR, lR, {
            value: tR?.[lR] ? [...tR[lR]] : [],
            enumerable: !1,
            configurable: !0,
            writable: !0
          });
          for (const qR in JR) {
            if (void 0 !== uR[qR]) throw new Error(`@colyseus/schema: Duplicate '${qR}' definition on '${GR.name||"(anonymous)"}'.`);
            kJ.defineField(GR, uR, ZR, qR, JR[qR]), ZR++
          }
          return RR
        },
        isDeprecated: (RR, JR) => !0 === RR[JR].deprecated,
        initialize(RR) {
          const JR = Object.getPrototypeOf(RR),
            GR = JR[Symbol.metadata];
          let yR = RR[Symbol.metadata] ?? Object.create(null);
          if (JR !== by && yR === GR && (yR = Object.create(null), GR)) {
            Object.setPrototypeOf(yR, GR), Object.defineProperty(yR, pR, {
              value: GR[pR],
              enumerable: !1,
              configurable: !0,
              writable: !0
            }), void 0 !== GR[bR] && (Object.defineProperty(yR, bR, {
              value: [...GR[bR]],
              enumerable: !1,
              configurable: !0,
              writable: !0
            }), Object.defineProperty(yR, vR, {
              value: {
                ...GR[vR]
              },
              enumerable: !1,
              configurable: !0,
              writable: !0
            }));
            for (const RR of EJ) {
              const JR = GR[RR];
              void 0 !== JR && Object.defineProperty(yR, RR, {
                value: [...JR],
                enumerable: !1,
                configurable: !0,
                writable: !0
              })
            }
            Object.defineProperty(yR, MR, {
              value: {
                ...GR[MR]
              },
              enumerable: !1,
              configurable: !0,
              writable: !0
            })
          }
          return Object.defineProperty(RR, Symbol.metadata, {
            value: yR,
            writable: !1,
            configurable: !0
          }), yR
        },
        isValidInstance: RR => RR.constructor[Symbol.metadata] && Object.prototype.hasOwnProperty.call(RR.constructor[Symbol.metadata], pR),
        getFields(RR) {
          const JR = RR[Symbol.metadata],
            GR = {};
          for (let yR = 0; yR <= JR[pR]; yR++) GR[JR[yR].name] = JR[yR].type;
          return GR
        },
        hasViewTagAtIndex: (RR, JR) => RR?.[bR]?.includes(JR),
        hasUnreliableAtIndex: (RR, JR) => RR?.[OR]?.includes(JR),
        hasPatchOnlyAtIndex: (RR, JR) => RR?.[xR]?.includes(JR),
        hasFullStateOnlyAtIndex: (RR, JR) => RR?.[DR]?.includes(JR),
        hasStreamAtIndex: (RR, JR) => RR?.[HR]?.includes(JR)
      },
      QJ = (RR, JR, GR) => RR(JR, GR);
    class FJ {
      dirtyLow = 0;
      dirtyHigh = 0;
      ops;
      constructor(RR) {
        this.ops = new Uint8Array(Math.max(RR + 1, 1))
      }
      record(RR, JR) {
        const GR = this.ops[RR];
        0 === GR ? this.ops[RR] = JR : (GR === tR.DELETE || GR === tR.ADD && JR === tR.DELETE_AND_ADD) && (this.ops[RR] = tR.DELETE_AND_ADD), RR < 32 ? this.dirtyLow |= 1 << RR : this.dirtyHigh |= 1 << RR - 32
      }
      recordDelete(RR, JR) {
        this.ops[RR] = JR, RR < 32 ? this.dirtyLow |= 1 << RR : this.dirtyHigh |= 1 << RR - 32
      }
      recordRaw(RR, JR) {
        this.record(RR, JR)
      }
      operationAt(RR) {
        const JR = this.ops[RR];
        return 0 === JR ? void 0 : JR
      }
      setOperationAt(RR, JR) {
        this.ops[RR] = JR
      }
      forEach(RR) {
        this.forEachWithCtx(RR, QJ)
      }
      forEachWithCtx(RR, JR) {
        let GR = this.dirtyLow,
          yR = this.dirtyHigh;
        const tR = this.ops;
        for (; 0 !== GR;) {
          const yR = GR & -GR,
            uR = 31 - Math.clz32(yR);
          GR ^= yR, JR(RR, uR, tR[uR])
        }
        for (; 0 !== yR;) {
          const GR = yR & -yR,
            uR = 31 - Math.clz32(GR) + 32;
          yR ^= GR, JR(RR, uR, tR[uR])
        }
      }
      size() {
        return sJ(this.dirtyLow) + sJ(this.dirtyHigh)
      }
      has() {
        return 0 !== (this.dirtyLow | this.dirtyHigh)
      }
      reset() {
        this.dirtyLow = 0, this.dirtyHigh = 0, this.ops.fill(0)
      }
    }
    class TJ {
      Ja = new Map;
      pureOps = [];
      record(RR, JR) {
        const GR = this.Ja.get(RR);
        void 0 === GR ? this.Ja.set(RR, JR) : (GR === tR.DELETE || GR === tR.ADD && JR === tR.DELETE_AND_ADD) && this.Ja.set(RR, tR.DELETE_AND_ADD)
      }
      recordDelete(RR, JR) {
        this.Ja.set(RR, JR)
      }
      recordRaw(RR, JR) {
        this.Ja.set(RR, JR)
      }
      recordPure(RR) {
        this.pureOps.push([this.Ja.size, RR])
      }
      operationAt(RR) {
        return this.Ja.get(RR)
      }
      setOperationAt(RR, JR) {
        this.Ja.has(RR) && this.Ja.set(RR, JR)
      }
      forEach(RR) {
        this.forEachWithCtx(RR, QJ)
      }
      forEachWithCtx(RR, JR) {
        const GR = this.pureOps;
        if (GR.length > 0) {
          let yR = 0,
            tR = 0;
          for (const [uR, ZR] of this.Ja) {
            for (; yR < GR.length && GR[yR][0] <= tR;) {
              const tR = GR[yR++][1];
              JR(RR, -tR, tR)
            }
            JR(RR, uR, ZR), tR++
          }
          for (; yR < GR.length;) {
            const tR = GR[yR++][1];
            JR(RR, -tR, tR)
          }
        } else
          for (const [yR, tR] of this.Ja) JR(RR, yR, tR)
      }
      size() {
        return this.Ja.size + this.pureOps.length
      }
      has() {
        return this.Ja.size > 0 || this.pureOps.length > 0
      }
      reset() {
        this.Ja.clear(), this.pureOps.length = 0
      }
      shift(RR) {
        const JR = new Map;
        for (const [GR, yR] of this.Ja) JR.set(GR + RR, yR);
        this.Ja = JR
      }
    }

    function sJ(RR) {
      return 16843009 * ((RR = (858993459 & (RR -= RR >>> 1 & 1431655765)) + (RR >>> 2 & 858993459)) + (RR >>> 4) & 252645135) >>> 24
    }

    function hJ(RR) {
      if (void 0 === RR) return 0;
      let JR = 0;
      for (let GR = 0, yR = RR.length; GR < yR; GR++) {
        const yR = RR[GR];
        yR < 32 && (JR |= 1 << yR)
      }
      return JR
    }

    function RG(RR) {
      const JR = RR.constructor;
      if (Object.prototype.hasOwnProperty.call(JR, BR)) return JR[BR];
      const GR = JR[Symbol.metadata],
        yR = kJ.isValidInstance(RR),
        tR = (GR?.[bR]?.length ?? 0) > 0,
        uR = function(RR) {
          const JR = [],
            GR = [],
            yR = [],
            tR = [],
            uR = RR?.[pR];
          if (void 0 === uR) return {
            names: JR,
            types: GR,
            tags: yR,
            encoders: tR
          };
          const ZR = RR[lR];
          for (let qR = 0; qR <= uR; qR++) {
            const uR = RR[qR];
            void 0 !== uR ? (JR[qR] = uR.name, GR[qR] = uR.type, yR[qR] = uR.tag, tR[qR] = ZR?.[qR]) : (JR[qR] = void 0, GR[qR] = void 0, yR[qR] = void 0, tR[qR] = void 0)
          }
          return {
            names: JR,
            types: GR,
            tags: yR,
            encoders: tR
          }
        }(GR),
        ZR = yR && !tR ? void 0 : JR[KR],
        qR = {
          encoder: JR[fR],
          filter: ZR,
          metadata: GR,
          isSchema: yR,
          filterBitmask: yR ? hJ(GR?.[bR]) : 0,
          hasAnyFullStateOnly: (GR?.[DR]?.length ?? 0) > 0,
          hasAnyUnreliable: (GR?.[OR]?.length ?? 0) > 0,
          hasAnyStream: (GR?.[HR]?.length ?? 0) > 0,
          hasAnyView: tR,
          fullStateOnlyBitmask: hJ(GR?.[DR]),
          unreliableBitmask: hJ(GR?.[OR]),
          streamBitmask: hJ(GR?.[HR]),
          names: uR.names,
          types: uR.types,
          tags: uR.tags,
          encoders: uR.encoders
        };
      return Object.defineProperty(JR, BR, {
        value: qR,
        enumerable: !1,
        writable: !0,
        configurable: !0
      }), qR
    }

    function JG(RR, JR) {
      if (void 0 !== RR.parentRef && JR(RR.parentRef, RR._parentIndex)) return !0;
      for (let GR = RR.extraParents; void 0 !== GR; GR = GR.next)
        if (JR(GR.ref, GR.index)) return !0;
      return !1
    }
    const GG = (RR, JR) => {
        RR.isFieldUnreliable(JR) ? RR.ensureUnreliableRecorder().record(JR, tR.ADD) : RR.record(JR, tR.ADD)
      },
      yG = (RR, JR) => RR(JR);

    function tG(RR, JR, GR) {
      const yR = RR.refTarget;
      if (void 0 !== yR[LR]) {
        if (RR.isPatchOnly) return;
        if (Array.isArray(yR.items)) {
          const RR = yR.items;
          for (let yR = 0, tR = RR.length; yR < tR; yR++) void 0 !== RR[yR] && GR(JR, yR)
        } else if (void 0 !== yR.journal)
          for (const [RR, tR] of yR.journal.keyByIndex) yR.$items.has(tR) && GR(JR, RR);
        else if (void 0 !== yR.$items)
          for (const RR of yR.$items.keys()) GR(JR, RR)
      } else {
        const tR = RR.metadata;
        if (!tR) return;
        const uR = tR[pR] ?? -1,
          ZR = tR[NR],
          qR = RR.encDescriptor.names;
        for (let RR = 0; RR <= uR; RR++) {
          const tR = qR[RR];
          if (void 0 === tR) continue;
          if (ZR && ZR.includes(RR)) continue;
          const uR = yR[tR];
          void 0 !== uR && null !== uR && GR(JR, RR)
        }
      }
    }

    function uG(RR, JR, GR, yR) {
      ! function(RR, JR, GR) {
        if (!JR) return;
        const yR = JR[aR],
          tR = !yR._isSchema;
        let uR;
        tR ? (JR = yR.parent, GR = yR.parentIndex, uR = JR?.[aR].metadata) : uR = yR.metadata;
        const ZR = (uR?.[xR]?.includes(GR) ? BG : 0) | (uR?.[DR]?.includes(GR) ? lG : 0),
          qR = yR.flags & bG | ZR,
          iR = RR.flags;
        RR.flags = iR | qR;
        qR & ~iR & lG && (RR.reset(), RR.unreliableRecorder?.reset());
        const fR = RR.root?.types;
        if (!fR?.hasFilters) return;
        const VR = uR?.[bR]?.includes(GR) ?? !1,
          KR = uR?.[HR]?.includes(GR) ?? !1,
          wR = yR.isFiltered || VR || KR;
        if (RR.isFiltered = wR, KR && !tR) {
          RR.isStreamCollection = !0;
          const JR = pJ(RR.ref);
          if (void 0 === JR.priority) {
            const RR = kJ.getStreamPriority(uR, GR);
            void 0 !== RR && (JR.priority = RR)
          }
          RR.root?.registerStream(RR.ref)
        }
        if (wR) {
          const JR = qG(RR);
          RR.isVisibilitySharedWithParent = yR.isFiltered && JR && !KR && (!VR || tR && uR[GR].tag !== ey)
        }
      }(RR, JR, GR), RR.isFullStateOnly || (RR.has() && RR.root?.enqueueChangeTree(RR), RR.unreliableRecorder?.has() && RR.root?.enqueueUnreliable(RR), RR.has() || RR.unreliableRecorder?.has() || RR.root?.enqueueChangeTree(RR))
    }

    function ZG(RR) {
      const JR = RR.pendingFilterRefresh;
      for (let GR = 0; GR < JR.length; GR++) {
        const RR = JR[GR];
        0 !== (RR.flags & gG) && iG(RR)
      }
      JR.length = 0
    }

    function qG(RR) {
      return RR._isSchema || "string" !== typeof RR.refTarget[LR]
    }

    function iG(RR) {
      RR.flags &= ~gG;
      const JR = RR.root;
      if (void 0 === JR || void 0 === RR.parentRef) return;
      const GR = qG(RR);
      let yR = rG(RR, RR.parentRef, RR._parentIndex, GR);
      for (let uR = RR.extraParents; void 0 !== uR && yR !== wG; uR = uR.next) yR |= rG(RR, uR.ref, uR.index, GR);
      if (0 === yR) return;
      RR.isVisibilitySharedWithParent = 0 !== (yR & KG);
      const tR = 0 === (yR & VG);
      tR !== RR.isFiltered && (RR.isFiltered = tR, tR || RR.isFullStateOnly || (RR.forEachLiveWithCtx(RR, GG), RR.has() && JR.enqueueChangeTree(RR), RR.unreliableRecorder?.has() && JR.enqueueUnreliable(RR)), RR.forEachChildWithCtx(RR, eG))
    }
    const fG = 1,
      VG = 2,
      KG = 4,
      wG = fG | VG | KG;

    function rG(RR, JR, GR, yR) {
      const tR = JR[aR];
      if (tR.root !== RR.root || ! function(RR, JR, GR) {
          const yR = JR.refTarget;
          if (JR.isArray) {
            const JR = yR.items,
              tR = JR[GR];
            if (void 0 !== tR && tR[aR] === RR) return !0;
            for (let GR = 0, yR = JR.length; GR < yR; GR++) {
              const yR = JR[GR];
              if (void 0 !== yR && yR[aR] === RR) return !0
            }
            return !1
          }
          const tR = JR.getValue(GR);
          return void 0 !== tR && tR[aR] === RR
        }(RR, tR, GR)) return 0;
      tR.flags & gG && iG(tR);
      let uR = fG;
      if (tR._isSchema) {
        void 0 !== tR.encDescriptor.tags[GR] || tR.isFieldStream(GR) || (tR.isFiltered ? yR && (uR |= KG) : uR |= VG)
      } else if (tR.isFiltered) {
        if (yR && !tR.isStreamCollection) {
          const RR = tR.parent?.[aR];
          (RR?._isSchema ? RR.encDescriptor.tags[tR.parentIndex] : void 0) !== ey && (uR |= KG)
        }
      } else uR |= VG;
      return uR
    }
    const eG = (RR, JR, GR) => {
      iG(JR)
    };

    function aG(RR, JR, GR, yR) {
      if (RR.addParent(JR, yR), !GR) return;
      const tR = GR.add(RR);
      GR !== RR.root && (RR.root = GR, uG(RR, JR, yR));
      const uR = JR?.[aR];
      if (void 0 !== uR && void 0 !== uR.subscribedViews && void 0 !== JR[LR] && function(RR, JR, GR, yR) {
          const tR = RR.subscribedViews;
          if (void 0 === tR) return;
          const uR = RR.isStreamCollection,
            ZR = uR ? RR.ref : void 0,
            qR = uR ? void 0 : GR[aR];
          for (let iR = 0, fR = tR.length; iR < fR; iR++) {
            let RR = tR[iR];
            for (; 0 !== RR;) {
              const GR = RR & -RR;
              RR ^= GR;
              const fR = 32 * iR + (31 - Math.clz32(GR)),
                VR = yR.activeViews.get(fR),
                KR = VR?.deref();
              void 0 !== KR ? uR ? xJ(ZR, fR, JR) : void 0 !== qR && KR.markVisible(qR) : tR[iR] &= ~GR
            }
          }
        }(uR, yR, RR.ref, GR), tR) {
        let JR = WG[AG];
        void 0 === JR && (JR = {
          parentRef: void 0,
          root: void 0
        }, WG[AG] = JR), JR.parentRef = RR.ref, JR.root = GR, AG++, nG(RR, JR, CG), AG--
      }
    }

    function LG(RR, JR, GR) {
      RR(JR, GR)
    }

    function nG(RR, JR, GR) {
      const yR = RR.refTarget;
      if (yR[LR]) {
        if ("string" !== typeof yR[LR]) {
          const RR = yR.items;
          if (void 0 !== RR)
            for (let yR = 0, tR = RR.length; yR < tR; yR++) {
              const tR = RR[yR];
              tR && GR(JR, tR[aR], yR)
            } else {
              const RR = yR.$items,
                tR = yR._collectionIndexes;
              for (const yR of RR.keys()) {
                const uR = RR.get(yR);
                uR && GR(JR, uR[aR], tR?.[yR] ?? yR)
              }
            }
        }
      } else {
        const tR = RR.metadata,
          uR = tR?.[gR];
        if (!uR) return;
        const ZR = RR.encDescriptor.names;
        for (let RR = 0, qR = uR.length; RR < qR; RR++) {
          const tR = uR[RR],
            qR = yR[ZR[tR]];
          qR && GR(JR, qR[aR], tR)
        }
      }
    }

    function UG(RR, JR, GR) {
      JR.root !== RR ? JR.setRoot(RR) : RR.add(JR)
    }
    const WG = [];
    let AG = 0;

    function CG(RR, JR, GR) {
      if (JR.root === RR.root) return RR.root.add(JR), void RR.root.moveNextToParent(JR);
      JR.setParent(RR.parentRef, RR.root, GR)
    }

    function XG(RR, JR, GR) {
      const yR = (3 & GR) << 3;
      return GR < 4 ? RR >>> yR & 255 : JR >>> yR & 255
    }
    const MG = (RR, JR, GR) => RR(JR, GR);
    const BG = 16,
      lG = 32,
      pG = 128,
      gG = 256,
      bG = BG | lG;
    class vG {
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
      set isFiltered(RR) {
        this.flags = RR ? 1 | this.flags : -2 & this.flags
      }
      get isVisibilitySharedWithParent() {
        return 0 !== (2 & this.flags)
      }
      set isVisibilitySharedWithParent(RR) {
        this.flags = RR ? 2 | this.flags : -3 & this.flags
      }
      get isNew() {
        return 0 !== (4 & this.flags)
      }
      set isNew(RR) {
        this.flags = RR ? 4 | this.flags : -5 & this.flags
      }
      get isUnreliable() {
        return 0 !== (8 & this.flags)
      }
      set isUnreliable(RR) {
        this.flags = RR ? 8 | this.flags : -9 & this.flags
      }
      get isPatchOnly() {
        return 0 !== (this.flags & BG)
      }
      set isPatchOnly(RR) {
        this.flags = RR ? this.flags | BG : this.flags & ~BG
      }
      get isFullStateOnly() {
        return 0 !== (this.flags & lG)
      }
      set isFullStateOnly(RR) {
        this.flags = RR ? this.flags | lG : this.flags & ~lG
      }
      get isStreamCollection() {
        return 0 !== (64 & this.flags)
      }
      set isStreamCollection(RR) {
        this.flags = RR ? 64 | this.flags : -65 & this.flags
      }
      get needsRestage() {
        return 0 !== (this.flags & pG)
      }
      set needsRestage(RR) {
        this.flags = RR ? this.flags | pG : -129 & this.flags
      }
      get hasFilteredFields() {
        return this.isFiltered || this.encDescriptor.hasAnyView
      }
      ensureUnreliableRecorder() {
        return void 0 === this.unreliableRecorder && (this.unreliableRecorder = this._isSchema ? new FJ(this.metadata?.[pR] ?? 0) : new TJ), this.unreliableRecorder
      }
      isFieldUnreliable(RR) {
        const JR = this.encDescriptor;
        return !!JR.hasAnyUnreliable && (RR < 32 ? 0 !== (JR.unreliableBitmask & 1 << RR) : kJ.hasUnreliableAtIndex(this.metadata, RR))
      }
      isFieldFullStateOnly(RR) {
        if (this.isFullStateOnly) return !0;
        const JR = this.encDescriptor;
        return !!JR.hasAnyFullStateOnly && (RR < 32 ? 0 !== (JR.fullStateOnlyBitmask & 1 << RR) : kJ.hasFullStateOnlyAtIndex(this.metadata, RR))
      }
      isFieldStream(RR) {
        const JR = this.encDescriptor;
        return !!JR.hasAnyStream && (RR < 32 ? 0 !== (JR.streamBitmask & 1 << RR) : kJ.hasStreamAtIndex(this.metadata, RR))
      }
      constructor(RR) {
        let JR = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : RR;
        this.ref = RR, this.refTarget = JR;
        const GR = RG(RR);
        this.encDescriptor = GR, this.metadata = GR.metadata;
        const yR = GR.isSchema;
        if (this._isSchema = yR, this.ops = void 0, this.collDirty = void 0, this.collPureOps = void 0, yR) {
          const RR = this.metadata?.[pR] ?? 0;
          RR > 7 && (this.ops = new Uint8Array(RR + 1))
        } else this.collDirty = new Map
      }
      _opAt(RR) {
        const JR = this.ops;
        if (void 0 !== JR) return JR[RR];
        const GR = (3 & RR) << 3;
        return RR < 4 ? this.opsLow >>> GR & 255 : this.opsHigh >>> GR & 255
      }
      _opPut(RR, JR) {
        const GR = this.ops;
        if (void 0 !== GR) return void(GR[RR] = JR);
        const yR = (3 & RR) << 3,
          tR = ~(255 << yR);
        RR < 4 ? this.opsLow = this.opsLow & tR | JR << yR : this.opsHigh = this.opsHigh & tR | JR << yR
      }
      _markDirty(RR) {
        RR < 32 ? this.dirtyLow |= 1 << RR : this.dirtyHigh |= 1 << RR - 32
      }
      record(RR, JR) {
        if (this._isSchema) {
          const GR = this._opAt(RR);
          0 === GR ? this._opPut(RR, JR) : (GR === tR.DELETE || GR === tR.ADD && JR === tR.DELETE_AND_ADD) && this._opPut(RR, tR.DELETE_AND_ADD), this._markDirty(RR)
        } else {
          const GR = this.collDirty,
            yR = GR.get(RR);
          let uR;
          uR = void 0 === yR ? JR : yR === tR.DELETE || yR === tR.ADD && JR === tR.DELETE_AND_ADD ? tR.DELETE_AND_ADD : yR, GR.set(RR, uR)
        }
      }
      recordDelete(RR, JR) {
        this._isSchema ? (this._opPut(RR, JR), this._markDirty(RR)) : this.collDirty.set(RR, JR)
      }
      recordRaw(RR, JR) {
        this._isSchema ? (this._opPut(RR, JR), this._markDirty(RR)) : this.collDirty.set(RR, JR)
      }
      recordPure(RR) {
        if (this._isSchema) throw new Error("ChangeTree (Schema): pure operations are not supported");
        (this.collPureOps ??= []).push([this.collDirty.size, RR])
      }
      operationAt(RR) {
        if (this._isSchema) {
          const JR = this._opAt(RR);
          return 0 === JR ? void 0 : JR
        }
        return this.collDirty.get(RR)
      }
      setOperationAt(RR, JR) {
        if (this._isSchema) this._opPut(RR, JR);
        else {
          const GR = this.collDirty;
          GR.has(RR) && GR.set(RR, JR)
        }
      }
      forEach(RR) {
        this.forEachWithCtx(RR, MG)
      }
      forEachWithCtx(RR, JR) {
        if (this._isSchema) {
          let GR = this.dirtyLow,
            yR = this.dirtyHigh;
          const tR = this.ops;
          if (void 0 !== tR) {
            for (; 0 !== GR;) {
              const yR = GR & -GR,
                uR = 31 - Math.clz32(yR);
              GR ^= yR, JR(RR, uR, tR[uR])
            }
            for (; 0 !== yR;) {
              const GR = yR & -yR,
                uR = 31 - Math.clz32(GR) + 32;
              yR ^= GR, JR(RR, uR, tR[uR])
            }
          } else {
            const yR = this.opsLow,
              tR = this.opsHigh;
            for (; 0 !== GR;) {
              const uR = GR & -GR,
                ZR = 31 - Math.clz32(uR);
              GR ^= uR, JR(RR, ZR, XG(yR, tR, ZR))
            }
          }
          return
        }
        const GR = this.collDirty,
          yR = this.collPureOps;
        if (void 0 !== yR && yR.length > 0) {
          let tR = 0,
            uR = 0;
          for (const [ZR, qR] of GR) {
            for (; tR < yR.length && yR[tR][0] <= uR;) {
              const GR = yR[tR++][1];
              JR(RR, -GR, GR)
            }
            JR(RR, ZR, qR), uR++
          }
          for (; tR < yR.length;) {
            const GR = yR[tR++][1];
            JR(RR, -GR, GR)
          }
        } else
          for (const [tR, uR] of GR) JR(RR, tR, uR)
      }
      size() {
        return this._isSchema ? sJ(this.dirtyLow) + sJ(this.dirtyHigh) : this.collDirty.size + (this.collPureOps?.length ?? 0)
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
      insertAt(RR, JR) {
        if (this._isSchema) throw new Error("ChangeTree (Schema): insertAt is not supported");
        const GR = this.collDirty,
          yR = new Map,
          uR = !this.paused && !this.isFullStateOnly;
        if (RR > 0)
          for (const [tR, ZR] of GR) tR < RR && yR.set(tR, ZR);
        if (uR)
          for (let ZR = 0; ZR < JR; ZR++) yR.set(RR + ZR, tR.ADD);
        for (const [tR, ZR] of GR) tR >= RR && yR.set(tR + JR, ZR);
        this.collDirty = yR, uR && this.root?.enqueueChangeTree(this)
      }
      removeAt(RR, JR) {
        if (this._isSchema) throw new Error("ChangeTree (Schema): removeAt is not supported");
        const GR = this.collDirty,
          yR = RR + JR;
        let tR = !1;
        for (const ZR of GR.keys())
          if (ZR >= yR) {
            tR = !0;
            break
          } if (!tR) {
          for (let JR = RR; JR < yR; JR++) GR.delete(JR);
          return
        }
        const uR = new Map;
        for (const [ZR, qR] of GR) ZR < RR ? uR.set(ZR, qR) : ZR >= yR && uR.set(ZR - JR, qR);
        this.collDirty = uR
      }
      unshift(RR) {
        this.insertAt(0, RR)
      }
      setRoot(RR) {
        ! function(RR, JR) {
          RR.root = JR;
          const GR = JR.add(RR);
          uG(RR, RR.parent, RR.parentIndex), GR && nG(RR, JR, UG)
        }(this, RR)
      }
      setParent(RR, JR, GR) {
        aG(this, RR, JR, GR)
      }
      forEachChild(RR) {
        nG(this, RR, LG)
      }
      forEachChildWithCtx(RR, JR) {
        nG(this, RR, JR)
      }
      forEachLive(RR) {
        tG(this, RR, yG)
      }
      forEachLiveWithCtx(RR, JR) {
        tG(this, RR, JR)
      }
      operation(RR) {
        this.paused || this.isFullStateOnly || (this.recordPure(RR), this.root?.enqueueChangeTree(this))
      }
      _routeAndRecord(RR, JR, GR) {
        if (!this.paused && !this.isFieldFullStateOnly(RR)) {
          if (this.isFieldUnreliable(RR) && !this.isNew) {
            const yR = this.ensureUnreliableRecorder();
            return GR ? yR.recordRaw(RR, JR) : yR.record(RR, JR), void this.root?.enqueueUnreliable(this)
          }
          GR ? this.recordRaw(RR, JR) : this.record(RR, JR), this.root?.enqueueChangeTree(this)
        }
      }
      change(RR) {
        let JR = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : tR.ADD;
        this._routeAndRecord(RR, JR, !1)
      }
      indexedOperation(RR, JR) {
        this._routeAndRecord(RR, JR, !0)
      }
      getChange(RR) {
        return this.operationAt(RR)
      }
      pause() {
        this.paused = !0
      }
      resume() {
        this.paused = !1
      }
      untracked(RR) {
        const JR = this.paused;
        this.paused = !0;
        try {
          return RR()
        } finally {
          this.paused = JR
        }
      }
      markDirty(RR) {
        let JR = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : tR.ADD;
        const GR = this.paused;
        this.paused = !1;
        try {
          this.change(RR, JR)
        } finally {
          this.paused = GR
        }
      }
      getValue(RR) {
        let JR = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return this.refTarget[wR](RR, JR)
      }
      delete(RR, JR) {
        if (void 0 === RR) {
          try {
            throw new Error(`@colyseus/schema ${this.ref.constructor.name}: trying to delete non-existing index '${RR}'`)
          } catch (ut) {
            console.warn(ut)
          }
          return
        }
        if (this.paused || this.isFieldFullStateOnly(RR)) return this.getValue(RR);
        const GR = this.isFieldUnreliable(RR) && !this.isNew;
        GR ? this.ensureUnreliableRecorder().recordDelete(RR, JR ?? tR.DELETE) : this.recordDelete(RR, JR ?? tR.DELETE);
        const yR = this.getValue(RR);
        return yR && yR[aR] && this.root?.remove(yR[aR]), GR ? this.root?.enqueueUnreliable(this) : this.root?.enqueueChangeTree(this), yR
      }
      endEncode() {
        this.reset(), this.changesNode = void 0, this._isSchema || this.refTarget[UR]?.(), this.isNew = !1
      }
      endEncodeUnreliable() {
        this.unreliableRecorder?.reset(), this.unreliableChangesNode = void 0, this._isSchema || this.refTarget[UR]?.()
      }
      discard() {
        this._isSchema || this.refTarget[UR]?.(), this.reset(), this.unreliableRecorder?.reset()
      }
      discardAll() {
        const RR = RR => {
          if (RR < 0) return;
          const JR = this.getValue(RR);
          JR && JR[aR] && JR[aR].discardAll()
        };
        this.forEach(RR), this.unreliableRecorder?.forEach(RR), this.discard()
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
      addParent(RR, JR) {
        ! function(RR, JR, GR) {
          if (RR.parentRef) {
            if (RR.parentRef[aR] === JR[aR]) return void(RR._parentIndex = GR);
            if (JG(RR, ((RR, GR) => RR[aR] === JR[aR]))) return void(RR._parentIndex = GR)
          }
          void 0 === RR.parentRef ? (RR.parentRef = JR, RR._parentIndex = GR) : (RR.extraParents = {
            ref: RR.parentRef,
            index: RR._parentIndex,
            next: RR.extraParents
          }, RR.parentRef = JR, RR._parentIndex = GR)
        }(this, RR, JR)
      }
      setParentIndex(RR, JR) {
        ! function(RR, JR, GR) {
          if (void 0 !== RR.extraParents)
            if (RR.parentRef[aR] !== JR[aR]) {
              for (let yR = RR.extraParents; void 0 !== yR; yR = yR.next)
                if (yR.ref[aR] === JR[aR]) return void(yR.index = GR)
            } else RR._parentIndex = GR;
          else RR._parentIndex = GR
        }(this, RR, JR)
      }
      removeParent() {
        return function(RR, JR) {
          if (RR.parentRef && RR.parentRef[aR] === JR[aR]) return RR.extraParents ? (RR.parentRef = RR.extraParents.ref, RR._parentIndex = RR.extraParents.index, RR.extraParents = RR.extraParents.next) : (RR.parentRef = void 0, RR._parentIndex = void 0), !0;
          let GR = RR.extraParents,
            yR = null;
          for (; GR;) {
            if (GR.ref[aR] === JR[aR]) return yR ? yR.next = GR.next : RR.extraParents = GR.next, !0;
            yR = GR, GR = GR.next
          }
          return void 0 === RR.parentRef
        }(this, arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.parent)
      }
      findParent(RR) {
        return function(RR, JR) {
          if (void 0 !== RR.parentRef && JR(RR.parentRef, RR._parentIndex)) return {
            ref: RR.parentRef,
            index: RR._parentIndex
          };
          for (let GR = RR.extraParents; void 0 !== GR; GR = GR.next)
            if (JR(GR.ref, GR.index)) return {
              ref: GR.ref,
              index: GR.index
            }
        }(this, RR)
      }
      hasParent(RR) {
        return JG(this, RR)
      }
      indexInParent(RR) {
        return function(RR, JR) {
          if (RR.parentRef && RR.parentRef[aR] === JR[aR]) return RR._parentIndex;
          for (let GR = RR.extraParents; void 0 !== GR; GR = GR.next)
            if (GR.ref[aR] === JR[aR]) return GR.index
        }(this, RR)
      }
      getAllParents() {
        return function(RR) {
          const JR = [];
          RR.parentRef && JR.push({
            ref: RR.parentRef,
            index: RR._parentIndex
          });
          let GR = RR.extraParents;
          for (; GR;) JR.push({
            ref: GR.ref,
            index: GR.index
          }), GR = GR.next;
          return JR
        }(this)
      }
    }
    class OG {
      ref;
      root = void 0;
      parentRef = void 0;
      paused = !1;
      isNew = !1;
      flags = 0;
      constructor(RR) {
        this.ref = RR
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
      untracked(RR) {
        return RR()
      }
      markDirty() {}
      forEachChild(RR) {
        const JR = this.ref;
        if (JR[LR]) {
          if ("string" !== typeof JR[LR])
            for (const [GR, yR] of JR.entries()) yR && RR(yR[aR], JR._collectionIndexes?.[GR] ?? GR);
          return
        }
        const GR = JR.constructor,
          yR = GR?.[Symbol.metadata];
        if (!yR) return;
        const tR = yR[gR] ?? [];
        for (let uR = 0; uR < tR.length; uR++) {
          const GR = tR[uR],
            ZR = JR[yR[GR].name];
          ZR && RR(ZR[aR], GR)
        }
      }
      forEachChildWithCtx(RR, JR) {
        this.forEachChild(((GR, yR) => JR(RR, GR, yR)))
      }
      forEachLive() {}
      forEachLiveWithCtx() {}
      forEach() {}
    }

    function xG(RR) {
      let JR = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : RR;
      var GR;
      Object.defineProperty(RR, aR, {
        value: (GR = JR, new OG(GR)),
        enumerable: !1,
        writable: !0
      })
    }

    function NG(RR, JR, GR, yR, uR, ZR, iR) {
      void 0 !== iR ? iR(JR, yR, ZR) : "string" === typeof GR ? JJ[GR]?.(JR, yR, ZR) : null != GR[Symbol.metadata] ? (JJ.number(JR, yR[qR], ZR), (uR & tR.ADD) === tR.ADD && RR.tryEncodeTypeId(JR, GR, yR.constructor, ZR)) : JJ.number(JR, yR[qR], ZR)
    }
    const DG = function(RR, JR, GR, yR, uR, ZR, qR, iR) {
        if (JR[ZR.offset++] = 255 & (yR | uR), uR === tR.DELETE) return;
        const fR = GR.encDescriptor,
          VR = GR.ref,
          KR = VR[CR][yR] ?? VR[fR.names[yR]];
        NG(RR, JR, fR.types[yR], KR, uR, ZR, fR.encoders[yR])
      },
      HG = function(RR, JR, GR, yR, uR, ZR) {
        if (JR[ZR.offset++] = 255 & uR, JJ.number(JR, yR, ZR), uR === tR.DELETE) return;
        const qR = GR.ref;
        if ((uR & tR.ADD) === tR.ADD) {
          const RR = qR.$indexes.get(yR);
          JJ.string(JR, RR, ZR)
        }
        NG(RR, JR, qR[LR], qR[wR](yR), uR, ZR)
      },
      oG = function(RR, JR, GR, yR, uR, ZR) {
        if (JR[ZR.offset++] = 255 & uR, JJ.number(JR, yR, ZR), uR === tR.DELETE) return;
        const qR = GR.ref;
        NG(RR, JR, qR[LR], qR[wR](yR), uR, ZR)
      },
      cG = function(RR, JR, GR, yR, uR, ZR) {
        const qR = GR.ref;
        (uR & tR.ADD) === tR.ADD && "function" === typeof qR.set ? HG(RR, JR, GR, yR, uR, ZR) : oG(RR, JR, GR, yR, uR, ZR)
      },
      PG = function(RR, JR, GR, yR, uR, ZR, iR, fR) {
        const VR = GR.refTarget,
          KR = VR[LR],
          rR = "string" !== typeof KR;
        let eR;
        if (fR && GR.isFiltered && rR) {
          const RR = VR.tmpItems[yR];
          if (!RR) return;
          if (eR = RR[qR], uR === tR.DELETE) uR = tR.DELETE_BY_REFID;
          else if ((uR & tR.ADD) === tR.ADD) uR = tR.ADD_BY_REFID;
          else if ((uR & tR.MOVE) === tR.MOVE) return
        } else if (uR === tR.DELETE && rR) {
          const RR = VR.tmpItems[yR];
          if (!RR) return;
          eR = RR[qR], uR = tR.DELETE_BY_REFID
        } else eR = yR;
        if (JR[ZR.offset++] = 255 & uR, JJ.number(JR, eR, ZR), uR === tR.DELETE || uR === tR.DELETE_BY_REFID) return;
        NG(RR, JR, KR, VR[wR](yR, iR), uR, ZR)
      };

    function IG(RR, JR, GR, yR, uR, ZR, iR) {
      const fR = RR.resyncVisited;
      let VR = fR.get(RR.currentRefId);
      if (void 0 === VR && fR.set(RR.currentRefId, VR = new Set), VR.add(yR), void 0 !== uR && GR === tR.ADD && uR !== ZR) {
        const GR = uR[qR];
        void 0 !== GR && (RR.root.removeRef(GR), iR?.push({
          ref: JR,
          refId: RR.currentRefId,
          op: tR.DELETE,
          dynamicIndex: yR,
          value: void 0,
          previousValue: uR
        }))
      }
    }

    function mG(RR, JR, GR, yR) {
      const tR = JR[qR];
      if (void 0 === tR || GR.has(tR)) return;
      GR.add(tR);
      const uR = JR.constructor[Symbol.metadata],
        ZR = uR?.[gR];
      if (void 0 === ZR) return;
      const iR = uR[xR];
      for (let qR = 0; qR < ZR.length; qR++) {
        const tR = ZR[qR];
        if (void 0 !== iR && iR.includes(tR)) continue;
        const fR = uR[tR],
          VR = JR[fR.name];
        VR && (by.is(fR.type) ? mG(RR, VR, GR, yR) : zG(RR, VR, GR, yR))
      }
    }

    function zG(RR, JR, GR, yR) {
      const uR = JR[nR] ?? JR,
        ZR = uR[qR];
      if (void 0 === ZR || GR.has(ZR)) return;
      GR.add(ZR);
      const iR = RR.resyncVisited.get(ZR);
      if (void 0 === iR) return;
      const fR = RR.root;
      uR[eR](iR, ((RR, GR) => {
        yR?.push({
          ref: JR,
          refId: ZR,
          op: tR.DELETE,
          dynamicIndex: GR,
          value: void 0,
          previousValue: RR
        });
        const uR = RR?.[qR];
        void 0 !== uR && fR.removeRef(uR)
      }), (JR => {
        by.isSchema(JR) && mG(RR, JR, GR, yR)
      }))
    }
    const SG = 1,
      jG = 2,
      dG = 3,
      EG = 4,
      YG = 5;

    function kG(RR, JR, GR, yR, uR, ZR, iR, fR, VR) {
      const KR = RR.root;
      let wR;
      if ((JR & tR.DELETE) === tR.DELETE) {
        const RR = uR?.[qR];
        void 0 !== RR && KR.removeRef(RR), JR !== tR.DELETE_AND_ADD && GR[rR](yR), wR = void 0
      }
      if (JR === tR.DELETE);
      else if ("string" === typeof ZR) wR = WJ[ZR](iR, fR);
      else if (oJ(ZR)) wR = function(RR, JR, GR) {
        return PJ(RR, (0, WJ[RR.wire])(JR, GR))
      }(ZR.quantized, iR, fR);
      else if (by.is(ZR)) {
        const GR = WJ.number(iR, fR);
        if (wR = KR.refs.get(GR), (JR & tR.ADD) === tR.ADD) {
          const yR = RR.getInstanceType(iR, fR, ZR);
          wR || (wR = RR.createInstanceOfType(yR)), KR.addRef(GR, wR, wR !== uR || JR === tR.DELETE_AND_ADD && wR === uR)
        }
      } else {
        const GR = (eR = Object.keys(ZR)[0], AJ[eR]),
          yR = WJ.number(iR, fR);
        null !== RR.resyncVisited && function(RR, JR) {
          const GR = RR.resyncVisited;
          GR.has(JR) || GR.set(JR, new Set)
        }(RR, yR);
        const rR = KR.refs.has(yR) ? uR || KR.refs.get(yR) : GR.constructor.initializeForDecoder();
        if (wR = rR.clone(!0), wR[LR] = Object.values(ZR)[0], uR) {
          let RR = uR[qR];
          if (void 0 !== RR && yR !== RR) {
            (JR & tR.DELETE) !== tR.DELETE && KR.removeRef(RR);
            const GR = uR.entries();
            let yR;
            for (;
              (yR = GR.next()) && !yR.done;) {
              const [JR, GR] = yR.value;
              "object" === typeof GR && (RR = GR[qR]), VR?.push({
                ref: uR,
                refId: RR,
                op: tR.DELETE,
                field: JR,
                value: void 0,
                previousValue: GR
              })
            }
          }
        }
        KR.addRef(yR, wR, rR !== uR || JR === tR.DELETE_AND_ADD && rR === uR)
      }
      var eR;
      return wR
    }
    const QG = function(RR, JR, GR, yR, tR) {
        const uR = JR[GR.offset++],
          ZR = yR.constructor[Symbol.metadata],
          qR = uR >> 6 << 6,
          iR = uR % (qR || 255),
          fR = ZR[iR];
        if (void 0 === fR) return console.warn("@colyseus/schema: field not defined at", {
          index: iR,
          ref: yR.constructor.name,
          metadata: ZR
        }), -1;
        const VR = !0 === fR.deprecated,
          KR = VR ? void 0 : yR[wR](iR),
          rR = kG(RR, qR, yR, iR, KR, fR.type, JR, GR, tR);
        VR || (null !== rR && void 0 !== rR && (yR[fR.name] = rR), KR !== rR && tR?.push({
          ref: yR,
          refId: RR.currentRefId,
          op: qR,
          field: fR.name,
          value: rR,
          previousValue: KR
        }))
      },
      FG = function(RR, JR, GR, yR, uR) {
        const ZR = yR[nR] ?? yR,
          qR = JR[GR.offset++];
        if (qR === tR.CLEAR) return RR.removeChildRefs(ZR, uR), void ZR.clear();
        const iR = WJ.number(JR, GR),
          fR = ZR[LR],
          VR = ZR.constructor.COLLECTION_KIND;
        let KR;
        (qR & tR.ADD) === tR.ADD ? VR === SG ? (KR = WJ.string(JR, GR), ZR.setIndex(iR, KR)) : KR = iR : KR = ZR.getIndex(iR);
        const rR = ZR[wR](iR),
          eR = kG(RR, qR, yR, iR, rR, fR, JR, GR, uR);
        if (null !== RR.resyncVisited && IG(RR, yR, qR, KR, rR, eR, uR), null !== eR && void 0 !== eR) switch (VR) {
          case SG:
            ZR.$items.set(KR, eR);
            break;
          case jG:
            ZR.$setAt(iR, eR, null !== RR.resyncVisited && qR === tR.ADD ? tR.REPLACE : qR);
            break;
          case dG:
          case EG:
          case YG:
            ZR.$items.has(iR) || (ZR.$items.set(iR, eR), "number" === typeof ZR.$refId && iR >= ZR.$refId && (ZR.$refId = iR + 1));
            break;
          default:
            console.warn(`@colyseus/schema: missing COLLECTION_KIND on ${ZR.constructor?.name} \u2014 item at index ${iR} was not stored.`)
        }
        rR !== eR && uR?.push({
          ref: yR,
          refId: RR.currentRefId,
          op: qR,
          dynamicIndex: KR,
          value: eR,
          previousValue: rR
        })
      },
      TG = function(RR, JR, GR, yR, uR) {
        const ZR = yR[nR] ?? yR;
        let qR, iR = JR[GR.offset++];
        if (iR === tR.CLEAR) return RR.removeChildRefs(ZR, uR), void ZR.clear();
        if (iR === tR.REVERSE) return void ZR.items.reverse();
        if (iR === tR.DELETE_BY_REFID) {
          const iR = WJ.number(JR, GR),
            fR = RR.root.refs.get(iR);
          if (void 0 === fR) return;
          if (RR.root.removeRef(iR), qR = ZR.findIndex((RR => RR === fR)), -1 === qR) return;
          return ZR[rR](qR), void uR?.push({
            ref: yR,
            refId: RR.currentRefId,
            op: tR.DELETE,
            dynamicIndex: qR,
            value: void 0,
            previousValue: fR
          })
        }
        if (iR === tR.ADD_BY_REFID) {
          const yR = WJ.number(JR, GR),
            tR = RR.root.refs.get(yR);
          tR && (qR = ZR.findIndex((RR => RR === tR))), -1 !== qR && void 0 !== qR || (qR = ZR.length)
        } else qR = WJ.number(JR, GR);
        const fR = ZR[LR];
        let VR = qR;
        const KR = ZR.items[qR],
          wR = kG(RR, iR, yR, qR, KR, fR, JR, GR, uR);
        null !== RR.resyncVisited && IG(RR, yR, iR, qR, KR, wR, uR), null !== wR && void 0 !== wR && wR !== KR && ZR.$setAt(qR, wR, null !== RR.resyncVisited && iR === tR.ADD ? tR.REPLACE : iR), KR !== wR && uR?.push({
          ref: yR,
          refId: RR.currentRefId,
          op: iR,
          dynamicIndex: VR,
          value: wR,
          previousValue: KR
        })
      };
    class sG extends Error {}

    function hG(RR, JR, GR, yR) {
      if (!(RR instanceof JR)) throw new sG(`a '${JR.name}' was expected, but '${RR&&RR.constructor.name}' was provided in ${GR.constructor.name}#${yR}`)
    }
    const Ry = (RR, JR) => {
        const GR = RR.toString(),
          yR = JR.toString();
        return GR < yR ? -1 : GR > yR ? 1 : 0
      },
      Jy = {
        get: (RR, JR) => "symbol" === typeof JR || isNaN(JR) ? Reflect.get(RR, JR) : RR.items[JR],
        set: (RR, JR, GR) => {
          if ("symbol" !== typeof JR && !isNaN(JR)) {
            if (void 0 === GR || null === GR) RR.$deleteAt(JR);
            else {
              let yR;
              if (GR[aR]) {
                hG(GR, RR[LR], RR, JR);
                const uR = RR.items[JR];
                RR.isMovingItems ? (yR = RR.$wireIndex(Number(JR)), void 0 !== uR ? GR[aR].isNew ? RR[aR].indexedOperation(yR, tR.MOVE_AND_ADD) : (RR[aR].getChange(yR) & tR.DELETE) === tR.DELETE ? RR[aR].indexedOperation(yR, tR.DELETE_AND_MOVE) : RR[aR].indexedOperation(yR, tR.MOVE) : GR[aR].isNew && RR[aR].indexedOperation(yR, tR.ADD), GR[aR].setParent(RR, RR[aR].root, yR)) : yR = RR.$changeAt(Number(JR), GR), void 0 !== uR && uR[aR].root?.remove(uR[aR])
              } else yR = RR.$changeAt(Number(JR), GR);
              RR.items[JR] = GR, void 0 !== yR && (RR.tmpItems[yR] = GR)
            }
            return !0
          }
          return Reflect.set(RR, JR, GR)
        },
        deleteProperty: (RR, JR) => ("number" === typeof JR ? RR.$deleteAt(JR) : delete RR[JR], !0),
        has: (RR, JR) => "symbol" === typeof JR || isNaN(Number(JR)) ? Reflect.has(RR, JR) : Reflect.has(RR.items, JR)
      };
    class Gy {
      [aR];
      [qR];
      [nR];
      [LR];
      items = [];
      tmpItems = [];
      deletedIndexes = [];
      isMovingItems = !1;
      _needsCompaction = !1;
      static[fR] = PG;
      static[VR] = TG;
      static COLLECTION_KIND = jG;
      static[KR](RR, JR, GR) {
        if (!GR) return !0;
        const yR = RR[nR] ?? RR;
        return "string" === typeof yR[LR] || GR.isChangeTreeVisible(yR.tmpItems[JR]?.[aR])
      }
      static is(RR) {
        return Array.isArray(RR) || void 0 !== RR.array
      }
      static from(RR) {
        return new Gy(...Array.from(RR))
      }
      constructor() {
        this[LR] = void 0, this[nR] = this;
        const RR = new Proxy(this, Jy);
        return Object.defineProperty(this, aR, {
          value: new vG(RR, this),
          enumerable: !1,
          writable: !0
        }), arguments.length > 0 && this.push(...arguments), RR
      }
      static initializeForDecoder() {
        const RR = Object.create(Gy.prototype);
        RR.items = [], RR.isMovingItems = !1, RR._needsCompaction = !1, RR[LR] = void 0, RR[nR] = RR;
        const JR = new Proxy(RR, Jy);
        return xG(RR, JR), JR
      }
      set length(RR) {
        0 === RR ? this.clear() : RR < this.items.length ? this.splice(RR, this.length - RR) : console.warn("ArraySchema: can't set .length to a higher value than its length.")
      }
      get length() {
        return this.items.length
      }
      pauseTracking() {
        this[aR].pause()
      }
      resumeTracking() {
        this[aR].resume()
      }
      untracked(RR) {
        return this[aR].untracked(RR)
      }
      get isTrackingPaused() {
        return this[aR].paused
      }
      push() {
        const RR = this[nR],
          JR = RR.items,
          GR = RR.tmpItems,
          yR = RR[aR],
          uR = RR[LR];
        let ZR = GR.length;
        for (let qR = 0, iR = arguments.length; qR < iR; qR++, ZR++) {
          const iR = qR < 0 || arguments.length <= qR ? void 0 : arguments[qR];
          if (void 0 === iR || null === iR) return;
          "object" === typeof iR && uR && hG(iR, uR, RR, qR), yR.indexedOperation(ZR, tR.ADD), JR.push(iR), GR.push(iR), iR[aR]?.setParent(this, yR.root, ZR)
        }
        return ZR
      }
      pop() {
        const RR = this[nR],
          JR = RR.tmpItems,
          GR = RR.deletedIndexes;
        let yR = -1;
        for (let uR = JR.length - 1; uR >= 0; uR--)
          if (!0 !== GR[uR]) {
            yR = uR;
            break
          } if (yR < 0) return;
        const tR = RR.$isUnsentAdd(yR);
        return RR[aR].delete(yR), tR ? RR.$cancelAdd(yR) : GR[yR] = !0, RR.items.pop()
      }
      at(RR) {
        return RR < 0 && (RR += this.length), this.items[RR]
      }
      $wireIndex(RR) {
        const JR = this.deletedIndexes;
        if (0 === JR.length) return RR;
        const GR = this.tmpItems;
        let yR = 0;
        for (let tR = 0; tR < GR.length; tR++)
          if (!0 !== JR[tR]) {
            if (yR === RR) return tR;
            yR++
          } return GR.length + (RR - yR)
      }
      $isUnsentAdd(RR) {
        const JR = this[aR];
        return 0 === (576 & JR.flags) && !JR.paused && "string" !== typeof this[LR] && JR.operationAt(RR) === tR.ADD
      }
      $cancelAdd(RR) {
        let JR = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        const GR = this[aR],
          yR = this.tmpItems[RR];
        this.tmpItems.splice(RR, 1), this.deletedIndexes.length > 0 && this.deletedIndexes.splice(RR, 1), GR.removeAt(RR, 1);
        const tR = yR?.[aR];
        void 0 !== tR && void 0 === tR.root && tR.removeParent(this), JR && this.$reindexChildren(RR)
      }
      $reindexChildren(RR, JR) {
        if (!this[aR].hasFilteredFields) return;
        if ("string" === typeof this[LR]) return;
        const GR = this.tmpItems,
          yR = GR.length;
        if (void 0 !== JR)
          for (; RR < yR && GR[RR] === JR[RR];) RR++;
        for (let tR = RR; tR < yR; tR++) GR[tR]?.[aR]?.setParentIndex(this, tR)
      }
      $changeAt(RR, JR) {
        if (void 0 === JR || null === JR) return void console.error("ArraySchema items cannot be null nor undefined; Use `splice(index, 1)` instead.");
        if (this.items[RR] === JR) return;
        const GR = void 0 !== this.items[RR] ? "object" === typeof JR ? tR.DELETE_AND_ADD : tR.REPLACE : tR.ADD,
          yR = this.$wireIndex(RR),
          uR = this[aR];
        return uR.change(yR, GR), JR[aR]?.setParent(this, uR.root, yR), yR
      }
      $deleteAt(RR, JR) {
        this[aR].delete(this.$wireIndex(RR), JR)
      }
      $setAt(RR, JR, GR) {
        GR === tR.ADD && void 0 !== this.items[RR] ? this.items.splice(RR, 0, JR) : GR === tR.DELETE_AND_MOVE ? (this.items.splice(RR, 1), this.items[RR] = JR) : (RR > this.items.length && (this._needsCompaction = !0), this.items[RR] = JR)
      }
      clear() {
        const RR = this[nR];
        if (0 === RR.items.length) return;
        const JR = RR[aR];
        JR.forEachChild(((RR, GR) => {
          JR.root?.remove(RR)
        })), JR.discard(), JR.operation(tR.CLEAR), RR.items.length = 0, RR.tmpItems.length = 0
      } [WR]() {
        const RR = this[nR] ?? this,
          JR = RR[aR];
        if (JR.isStreamCollection) throw new Error("@colyseus/schema: cannot reset a streamed ArraySchema (pooling not supported).");
        const GR = RR.items;
        for (let yR = 0; yR < GR.length; yR++) GR[yR]?.[WR]?.();
        RR.items.length = 0, RR.tmpItems.length = 0, RR.deletedIndexes.length = 0, JR.recycle(), RR[qR] = void 0
      }
      concat() {
        return new Gy(...this.items.concat(...arguments))
      }
      join(RR) {
        return this.items.join(RR)
      }
      reverse() {
        const RR = this[nR],
          JR = RR[aR];
        if (JR.has() || RR.deletedIndexes.length > 0) {
          const JR = RR.items.slice().reverse();
          return this.clear(), this.push(...JR), this
        }
        return JR.operation(tR.REVERSE), RR.items.reverse(), RR.tmpItems.reverse(), RR.$reindexChildren(0), this
      }
      shift() {
        const RR = this[nR],
          JR = RR.items;
        if (0 === JR.length) return;
        const GR = RR[aR],
          yR = RR.deletedIndexes;
        let uR = 0;
        for (; !0 === yR[uR];) uR++;
        const ZR = RR.$isUnsentAdd(uR);
        return GR.delete(uR, tR.DELETE), ZR ? RR.$cancelAdd(uR) : yR[uR] = !0, JR.shift()
      }
      slice(RR, JR) {
        const GR = new Gy;
        return GR.push(...this.items.slice(RR, JR)), GR
      }
      sort() {
        let RR = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Ry;
        const JR = this[nR];
        JR.isMovingItems = !0;
        const GR = JR[aR];
        return JR.items.sort(RR).forEach(((RR, JR) => GR.change(JR, tR.REPLACE))), JR.tmpItems.sort(RR), JR.$reindexChildren(0), JR.isMovingItems = !1, this
      }
      splice(RR, JR) {
        const GR = this[nR],
          yR = GR[aR],
          uR = GR.items,
          ZR = GR.tmpItems,
          qR = GR.deletedIndexes,
          iR = uR.length,
          fR = ZR.length;
        for (var VR = arguments.length, KR = new Array(VR > 2 ? VR - 2 : 0), wR = 2; wR < VR; wR++) KR[wR - 2] = arguments[wR];
        const rR = KR.length,
          eR = [];
        for (let tR = 0; tR < fR; tR++) !0 !== qR[tR] && eR.push(tR);
        let LR;
        if (iR > RR) {
          void 0 === JR && (JR = iR - RR);
          for (let uR = RR; uR < RR + JR; uR++) {
            const RR = eR[uR],
              JR = GR.$isUnsentAdd(RR);
            yR.delete(RR, tR.DELETE), JR ? (LR ??= []).push(RR) : qR[RR] = !0
          }
        } else JR = 0;
        if (rR > 0) {
          const uR = eR[RR] ?? iR,
            fR = Math.min(rR, JR);
          for (let RR = 0; RR < fR; RR++) {
            const JR = uR + RR;
            let GR;
            const iR = void 0 !== LR ? LR.indexOf(JR) : -1; - 1 !== iR ? (LR.splice(iR, 1), GR = tR.ADD) : GR = qR[JR] ? tR.DELETE_AND_ADD : tR.ADD, yR.indexedOperation(JR, GR), ZR[JR] = KR[RR], qR[JR] = !1, KR[RR][aR]?.setParent(this, yR.root, JR)
          }
          const VR = rR - fR;
          if (VR > 0) {
            const RR = uR + fR;
            yR.insertAt(RR, VR);
            for (let JR = 0; JR < VR; JR++) KR[fR + JR][aR]?.setParent(this, yR.root, RR + JR);
            qR.length > 0 && qR.splice(RR, 0, ...new Array(VR).fill(!1)), ZR.splice(RR, 0, ...KR.slice(fR)), GR.$reindexChildren(RR + VR)
          }
        }
        if (void 0 !== LR && LR.length > 0) {
          for (let RR = LR.length - 1; RR >= 0; RR--) GR.$cancelAdd(LR[RR], !1);
          GR.$reindexChildren(LR[0])
        }
        return yR.root?.enqueueChangeTree(yR), uR.splice(RR, JR, ...KR)
      }
      unshift() {
        const RR = this[nR],
          JR = RR[aR];
        JR.unshift(arguments.length);
        for (let yR = 0; yR < arguments.length; yR++)(yR < 0 || arguments.length <= yR ? void 0 : arguments[yR])?.[aR]?.setParent(this, JR.root, yR);
        const GR = RR.deletedIndexes;
        return GR.length > 0 && GR.unshift(...new Array(arguments.length).fill(!1)), RR.tmpItems.unshift(...arguments), RR.$reindexChildren(arguments.length), RR.items.unshift(...arguments)
      }
      indexOf(RR, JR) {
        return this.items.indexOf(RR, JR)
      }
      lastIndexOf(RR) {
        let JR = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.length - 1;
        return this.items.lastIndexOf(RR, JR)
      }
      every(RR, JR) {
        return this.items.every(RR, JR)
      }
      some(RR, JR) {
        return this.items.some(RR, JR)
      }
      forEach(RR, JR) {
        return this.items.forEach(RR, JR)
      }
      map(RR, JR) {
        return this.items.map(RR, JR)
      }
      filter(RR, JR) {
        return this.items.filter(RR, JR)
      }
      reduce(RR, JR) {
        return this.items.reduce.apply(this.items, arguments)
      }
      reduceRight(RR, JR) {
        return this.items.reduceRight.apply(this.items, arguments)
      }
      find(RR, JR) {
        return this.items.find(RR, JR)
      }
      findIndex(RR, JR) {
        return this.items.findIndex(RR, JR)
      }
      fill(RR, JR, GR) {
        throw new Error("ArraySchema#fill() not implemented")
      }
      copyWithin(RR, JR, GR) {
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
        return Gy
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
      includes(RR, JR) {
        return this.items.includes(RR, JR)
      }
      flatMap(RR, JR) {
        throw new Error("ArraySchema#flatMap() is not supported.")
      }
      flat(RR) {
        throw new Error("ArraySchema#flat() is not supported.")
      }
      findLast() {
        return this.items.findLast.apply(this.items, arguments)
      }
      findLastIndex() {
        for (var RR = arguments.length, JR = new Array(RR), GR = 0; GR < RR; GR++) JR[GR] = arguments[GR];
        return this.items.findLastIndex.apply(this.items, arguments)
      }
      with(RR, JR) {
        const GR = this.items.slice();
        return RR < 0 && (RR += this.length), GR[RR] = JR, new Gy(...GR)
      }
      toReversed() {
        return this.items.slice().reverse()
      }
      toSorted(RR) {
        return this.items.slice().sort(RR)
      }
      toSpliced(RR, JR) {
        for (var GR = arguments.length, yR = new Array(GR > 2 ? GR - 2 : 0), tR = 2; tR < GR; tR++) yR[tR - 2] = arguments[tR];
        const uR = this.items.slice();
        return uR.splice.apply(uR, arguments), uR
      }
      shuffle() {
        return this.move((RR => {
          let JR = this.items.length;
          for (; 0 != JR;) {
            let RR = Math.floor(Math.random() * JR);
            JR--, [this[JR], this[RR]] = [this[RR], this[JR]]
          }
        }))
      }
      move(RR) {
        return this.isMovingItems = !0, RR(this), this.isMovingItems = !1, this
      } [wR](RR) {
        let JR = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        const GR = this[nR] ?? this;
        return JR || GR.deletedIndexes[RR] ? GR.items[RR] : GR.tmpItems[RR] || GR.items[RR]
      } [rR](RR) {
        const JR = this[nR] ?? this;
        JR.items[RR] = void 0, JR._needsCompaction = !0
      } [UR]() {
        const RR = this.tmpItems;
        this.tmpItems = this.items.slice(), this.deletedIndexes.length > 0 && (this.$reindexChildren(0, RR), this.deletedIndexes.length = 0)
      } [AR]() {
        const RR = this[nR] ?? this;
        RR._needsCompaction && (RR._needsCompaction = !1, RR.items = RR.items.filter((RR => void 0 !== RR)))
      } [eR](RR, JR, GR) {
        const yR = this[nR] ?? this,
          tR = yR.items;
        let uR = !1;
        for (let ZR = 0; ZR < tR.length; ZR++) {
          const qR = tR[ZR];
          RR.has(ZR) ? GR(qR) : (uR = !0, JR(qR, ZR), yR[rR](ZR))
        }
        uR && yR[AR]()
      }
      toArray() {
        return this.items.slice(0)
      }
      toJSON() {
        return this.toArray().map((RR => "function" === typeof RR.toJSON ? RR.toJSON() : RR))
      }
      clone(RR) {
        let JR;
        return RR ? (JR = new Gy, JR.push(...this.items)) : JR = new Gy(...this.map((RR => RR[aR] ? RR.clone() : RR))), JR
      }
    }
    XJ("array", {
      constructor: Gy
    });
    class yy {
      keyByIndex = new Map;
      indexByKey = Object.create(null);
      nextIndex = 0;
      snapshots;
      indexOf(RR) {
        const JR = this.indexByKey[RR];
        return void 0 === JR ? void 0 : JR
      }
      assign(RR) {
        const JR = this.nextIndex++;
        return this.indexByKey[RR] = JR, this.keyByIndex.set(JR, RR), JR
      }
      snapshot(RR, JR) {
        (this.snapshots ??= new Map).set(RR, JR)
      }
      forgetSnapshot(RR) {
        this.snapshots?.delete(RR)
      }
      snapshotAt(RR) {
        return this.snapshots?.get(RR)
      }
      setIndex(RR, JR) {
        this.keyByIndex.set(RR, JR), this.indexByKey[JR] = RR
      }
      keyOf(RR) {
        return this.keyByIndex.get(RR)
      }
      cleanupAfterEncode() {
        if (void 0 !== this.snapshots) {
          for (const [RR] of this.snapshots) {
            const JR = this.keyByIndex.get(RR);
            void 0 !== JR && (delete this.indexByKey[JR], this.keyByIndex.delete(RR))
          }
          this.snapshots.clear()
        }
      }
      reset() {
        this.indexByKey = Object.create(null), this.keyByIndex.clear(), this.snapshots?.clear(), this.nextIndex = 0
      }
    }
    class ty {
      [aR];
      [qR];
      childType;
      [LR];
      $items = new Map;
      journal = new yy;
      _stream;
      get maxPerTick() {
        return this._stream?.maxPerTick ?? 32
      }
      set maxPerTick(RR) {
        (this._stream ??= lJ()).maxPerTick = RR
      }
      get priority() {
        return this._stream?.priority
      }
      set priority(RR) {
        (this._stream ??= lJ()).priority = RR
      }
      get $indexes() {
        return this.journal.keyByIndex
      }
      get _collectionIndexes() {
        return this.journal.indexByKey
      }
      static[fR] = HG;
      static[VR] = FG;
      static COLLECTION_KIND = SG;
      static[KR](RR, JR, GR) {
        if (!GR || "string" === typeof RR[LR]) return !0;
        const yR = RR[wR](JR) ?? RR.journal.snapshotAt(JR);
        return GR.isChangeTreeVisible(yR[aR])
      }
      static is(RR) {
        return void 0 !== RR.map
      }
      constructor(RR) {
        if (Object.defineProperty(this, aR, {
            value: new vG(this),
            enumerable: !1,
            writable: !0
          }), this[LR] = void 0, RR)
          if (RR instanceof Map || RR instanceof ty) RR.forEach(((RR, JR) => this.set(JR, RR)));
          else
            for (const JR in RR) this.set(JR, RR[JR])
      }
      static initializeForDecoder() {
        const RR = Object.create(ty.prototype);
        return RR.$items = new Map, RR.journal = new yy, RR[LR] = void 0, xG(RR), RR
      } [Symbol.iterator]() {
        return this.$items[Symbol.iterator]()
      }
      get[Symbol.toStringTag]() {
        return this.$items[Symbol.toStringTag]
      }
      static get[Symbol.species]() {
        return ty
      }
      set(RR, JR) {
        if (void 0 === JR || null === JR) throw new Error(`MapSchema#set('${RR}', ${JR}): trying to set ${JR} value on '${RR}'.`);
        "object" === typeof JR && this[LR] && hG(JR, this[LR], this, RR), RR = RR.toString();
        const GR = this[aR],
          yR = void 0 !== JR[aR],
          uR = this.journal;
        let ZR, qR = uR.indexOf(RR);
        if (void 0 !== qR) {
          ZR = tR.REPLACE;
          const GR = this.$items.get(RR);
          if (GR === JR) return;
          yR && (ZR = tR.DELETE_AND_ADD, void 0 !== GR && GR[aR].root?.remove(GR[aR])), void 0 !== uR.snapshotAt(qR) && uR.forgetSnapshot(qR)
        } else qR = uR.assign(RR), ZR = tR.ADD;
        return this.$items.set(RR, JR), ZR === tR.ADD && GR.isStreamCollection ? void 0 !== GR.root && gJ(this, GR.root, qR) : GR.change(qR, ZR), yR && JR[aR].setParent(this, GR.root, qR), this
      }
      get(RR) {
        return this.$items.get(RR)
      }
      getOrInsert(RR, JR) {
        return this.$items.has(RR) ? this.$items.get(RR) : (this.set(RR, JR), JR)
      }
      getOrInsertComputed(RR, JR) {
        if (this.$items.has(RR)) return this.$items.get(RR);
        const GR = JR(RR);
        return this.set(RR, GR), GR
      }
      delete(RR) {
        if (!this.$items.has(RR)) return !1;
        const JR = this.journal.indexOf(RR),
          GR = this.$items.get(RR),
          yR = this[aR];
        if (yR.isStreamCollection) {
          const tR = yR.root;
          let uR = !1;
          return void 0 !== tR && (uR = bJ(this, tR, this[qR], JR)), void 0 !== GR?.[aR] && tR?.remove(GR[aR]), this.$items.delete(RR), uR || this.journal.snapshot(JR, GR), !0
        }
        return this.journal.snapshot(JR, GR), yR.delete(JR), this.$items.delete(RR)
      }
      clear() {
        const RR = this[aR];
        RR.discard(), RR.forEachChild(((JR, GR) => {
          RR.root?.remove(JR)
        })), this.journal.reset(), this.$items.clear(), RR.operation(tR.CLEAR)
      } [WR]() {
        const RR = this[aR];
        if (RR.isStreamCollection) throw new Error("@colyseus/schema: cannot reset a streamed MapSchema (pooling not supported).");
        this.$items.forEach((RR => RR?.[WR]?.())), this.$items.clear(), this.journal.reset(), RR.recycle(), this[qR] = void 0
      }
      has(RR) {
        return this.$items.has(RR)
      }
      forEach(RR) {
        this.$items.forEach(RR)
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
        this[aR].pause()
      }
      resumeTracking() {
        this[aR].resume()
      }
      untracked(RR) {
        return this[aR].untracked(RR)
      }
      get isTrackingPaused() {
        return this[aR].paused
      }
      setIndex(RR, JR) {
        this.journal.setIndex(RR, JR)
      }
      getIndex(RR) {
        return this.journal.keyOf(RR)
      } [wR](RR) {
        const JR = this.journal.keyOf(RR);
        return void 0 !== JR ? this.$items.get(JR) : void 0
      } [rR](RR) {
        const JR = this.journal.keyOf(RR);
        void 0 !== JR && (this.$items.delete(JR), this.journal.keyByIndex.delete(RR))
      } [eR](RR, JR, GR) {
        let yR = null;
        if (this.$items.forEach(((tR, uR) => {
            RR.has(uR) ? GR(tR) : ((yR ??= new Set).add(uR), JR(tR, uR))
          })), null !== yR) {
          yR.forEach((RR => {
            this.$items.delete(RR), delete this.journal.indexByKey[RR]
          }));
          const RR = [];
          this.journal.keyByIndex.forEach(((JR, GR) => {
            yR.has(JR) && RR.push(GR)
          }));
          for (let JR = 0; JR < RR.length; JR++) this.journal.keyByIndex.delete(RR[JR])
        }
      } [UR]() {
        this.journal.cleanupAfterEncode()
      }
      _dropView(RR) {
        NJ(this, RR)
      }
      _unregister() {}
      toJSON() {
        return Object.fromEntries(Array.from(this, (RR => {
          let [JR, GR] = RR;
          return [JR, "function" === typeof GR.toJSON ? GR.toJSON() : GR]
        })))
      }
      clone(RR) {
        let JR;
        return RR ? JR = Object.assign(new ty, this) : (JR = new ty, this.forEach(((RR, GR) => {
          RR[aR] ? JR.set(GR, RR.clone()) : JR.set(GR, RR)
        }))), JR
      }
    }
    XJ("map", {
      constructor: ty
    });
    class uy {
      [aR];
      [qR];
      [LR];
      $items = new Map;
      deletedItems = {};
      $refId = 0;
      _stream;
      get maxPerTick() {
        return this._stream?.maxPerTick ?? 32
      }
      set maxPerTick(RR) {
        (this._stream ??= lJ()).maxPerTick = RR
      }
      get priority() {
        return this._stream?.priority
      }
      set priority(RR) {
        (this._stream ??= lJ()).priority = RR
      }
      static[fR] = oG;
      static[VR] = FG;
      static COLLECTION_KIND = EG;
      static[KR](RR, JR, GR) {
        return !GR || "string" === typeof RR[LR] || GR.isChangeTreeVisible((RR[wR](JR) ?? RR.deletedItems[JR])[aR])
      }
      static is(RR) {
        return void 0 !== RR.collection
      }
      constructor(RR) {
        Object.defineProperty(this, aR, {
          value: new vG(this),
          enumerable: !1,
          writable: !0
        }), this[LR] = void 0, RR && RR.forEach((RR => this.add(RR)))
      }
      static initializeForDecoder() {
        const RR = Object.create(uy.prototype);
        return RR.$items = new Map, RR.deletedItems = {}, RR.$refId = 0, RR[LR] = void 0, xG(RR), RR
      }
      add(RR) {
        const JR = this.$refId++,
          GR = this[aR];
        return this.$items.set(JR, RR), GR.isStreamCollection ? void 0 !== GR.root && gJ(this, GR.root, JR) : GR.change(JR), void 0 !== RR[aR] && RR[aR].setParent(this, GR.root, JR), JR
      }
      at(RR) {
        const JR = Array.from(this.$items.keys())[RR];
        return this.$items.get(JR)
      }
      entries() {
        return this.$items.entries()
      }
      delete(RR) {
        const JR = this.$items.entries();
        let GR, yR;
        for (;
          (yR = JR.next()) && !yR.done;)
          if (RR === yR.value[1]) {
            GR = yR.value[0];
            break
          } if (void 0 === GR) return !1;
        const tR = this[aR];
        if (tR.isStreamCollection) {
          const RR = tR.root,
            JR = this.$items.get(GR);
          return void 0 !== RR && bJ(this, RR, this[qR], GR), void 0 !== JR?.[aR] && RR?.remove(JR[aR]), this.deletedItems[GR] = JR, this.$items.delete(GR)
        }
        return this.deletedItems[GR] = tR.delete(GR), this.$items.delete(GR)
      }
      clear() {
        const RR = this[aR];
        RR.discard(), RR.forEachChild(((JR, GR) => {
          RR.root?.remove(JR)
        })), this.$items.clear(), RR.operation(tR.CLEAR)
      } [WR]() {
        const RR = this[aR];
        if (RR.isStreamCollection) throw new Error("@colyseus/schema: cannot reset a streamed CollectionSchema (pooling not supported).");
        this.$items.forEach((RR => RR?.[WR]?.())), this.$items.clear(), this.deletedItems = {}, this.$refId = 0, RR.recycle(), this[qR] = void 0
      }
      has(RR) {
        return Array.from(this.$items.values()).some((JR => JR === RR))
      }
      forEach(RR) {
        this.$items.forEach(((JR, GR, yR) => RR(JR, GR, this)))
      }
      values() {
        return this.$items.values()
      }
      get size() {
        return this.$items.size
      }
      pauseTracking() {
        this[aR].pause()
      }
      resumeTracking() {
        this[aR].resume()
      }
      untracked(RR) {
        return this[aR].untracked(RR)
      }
      get isTrackingPaused() {
        return this[aR].paused
      } [Symbol.iterator]() {
        return this.$items.values()
      }
      setIndex(RR, JR) {}
      getIndex(RR) {
        return RR
      } [wR](RR) {
        return this.$items.get(RR)
      } [rR](RR) {
        this.$items.delete(RR)
      } [eR](RR, JR, GR) {
        let yR = null;
        if (this.$items.forEach(((tR, uR) => {
            RR.has(uR) ? GR(tR) : ((yR ??= []).push(uR), JR(tR, uR))
          })), null !== yR)
          for (let tR = 0; tR < yR.length; tR++) this[rR](yR[tR])
      } [UR]() {
        for (const RR in this.deletedItems) delete this.deletedItems[RR]
      }
      _dropView(RR) {
        NJ(this, RR)
      }
      _unregister() {}
      toArray() {
        return Array.from(this.$items.values())
      }
      toJSON() {
        const RR = [];
        return this.forEach(((JR, GR) => {
          RR.push("function" === typeof JR.toJSON ? JR.toJSON() : JR)
        })), RR
      }
      clone(RR) {
        let JR;
        return RR ? JR = Object.assign(new uy, this) : (JR = new uy, this.forEach((RR => {
          RR[aR] ? JR.add(RR.clone()) : JR.add(RR)
        }))), JR
      }
    }
    XJ("collection", {
      constructor: uy
    });
    class Zy {
      [aR];
      [qR];
      [LR];
      $items = new Map;
      deletedItems = {};
      $refId = 0;
      _stream;
      get maxPerTick() {
        return this._stream?.maxPerTick ?? 32
      }
      set maxPerTick(RR) {
        (this._stream ??= lJ()).maxPerTick = RR
      }
      get priority() {
        return this._stream?.priority
      }
      set priority(RR) {
        (this._stream ??= lJ()).priority = RR
      }
      static[fR] = oG;
      static[VR] = FG;
      static COLLECTION_KIND = dG;
      static[KR](RR, JR, GR) {
        return !GR || "string" === typeof RR[LR] || GR.isVisible((RR[wR](JR) ?? RR.deletedItems[JR])[aR])
      }
      static is(RR) {
        return void 0 !== RR.set
      }
      constructor(RR) {
        Object.defineProperty(this, aR, {
          value: new vG(this),
          enumerable: !1,
          writable: !0
        }), this[LR] = void 0, RR && RR.forEach((RR => this.add(RR)))
      }
      static initializeForDecoder() {
        const RR = Object.create(Zy.prototype);
        return RR.$items = new Map, RR.deletedItems = {}, RR.$refId = 0, RR[LR] = void 0, xG(RR), RR
      }
      add(RR) {
        if (this.has(RR)) return !1;
        const JR = this.$refId++,
          GR = this[aR];
        return this.$items.set(JR, RR), GR.isStreamCollection ? void 0 !== GR.root && gJ(this, GR.root, JR) : GR.change(JR, tR.ADD), void 0 !== RR[aR] && RR[aR].setParent(this, GR.root, JR), JR
      }
      entries() {
        return this.$items.entries()
      }
      delete(RR) {
        const JR = this.$items.entries();
        let GR, yR;
        for (;
          (yR = JR.next()) && !yR.done;)
          if (RR === yR.value[1]) {
            GR = yR.value[0];
            break
          } if (void 0 === GR) return !1;
        const tR = this[aR];
        if (tR.isStreamCollection) {
          const RR = tR.root,
            JR = this.$items.get(GR);
          return void 0 !== RR && bJ(this, RR, this[qR], GR), void 0 !== JR?.[aR] && RR?.remove(JR[aR]), this.deletedItems[GR] = JR, this.$items.delete(GR)
        }
        return this.deletedItems[GR] = tR.delete(GR), this.$items.delete(GR)
      }
      clear() {
        const RR = this[aR];
        RR.discard(), this.$items.clear(), RR.operation(tR.CLEAR)
      } [WR]() {
        const RR = this[aR];
        if (RR.isStreamCollection) throw new Error("@colyseus/schema: cannot reset a streamed SetSchema (pooling not supported).");
        this.$items.forEach((RR => RR?.[WR]?.())), this.$items.clear(), this.deletedItems = {}, this.$refId = 0, RR.recycle(), this[qR] = void 0
      }
      has(RR) {
        const JR = this.$items.values();
        let GR, yR = !1;
        for (;
          (GR = JR.next()) && !GR.done;)
          if (RR === GR.value) {
            yR = !0;
            break
          } return yR
      }
      forEach(RR) {
        this.$items.forEach(((JR, GR, yR) => RR(JR, GR, this)))
      }
      values() {
        return this.$items.values()
      }
      get size() {
        return this.$items.size
      }
      pauseTracking() {
        this[aR].pause()
      }
      resumeTracking() {
        this[aR].resume()
      }
      untracked(RR) {
        return this[aR].untracked(RR)
      }
      get isTrackingPaused() {
        return this[aR].paused
      } [Symbol.iterator]() {
        return this.$items.values()
      }
      setIndex(RR, JR) {}
      getIndex(RR) {
        return RR
      } [wR](RR) {
        return this.$items.get(RR)
      } [rR](RR) {
        this.$items.delete(RR)
      } [eR](RR, JR, GR) {
        let yR = null;
        if (this.$items.forEach(((tR, uR) => {
            RR.has(uR) ? GR(tR) : ((yR ??= []).push(uR), JR(tR, uR))
          })), null !== yR)
          for (let tR = 0; tR < yR.length; tR++) this[rR](yR[tR])
      } [UR]() {
        for (const RR in this.deletedItems) delete this.deletedItems[RR]
      }
      _dropView(RR) {
        NJ(this, RR)
      }
      _unregister() {}
      toArray() {
        return Array.from(this.$items.values())
      }
      toJSON() {
        const RR = [];
        return this.forEach(((JR, GR) => {
          RR.push("function" === typeof JR.toJSON ? JR.toJSON() : JR)
        })), RR
      }
      clone(RR) {
        let JR;
        return RR ? JR = Object.assign(new Zy, this) : (JR = new Zy, this.forEach((RR => {
          RR[aR] ? JR.add(RR.clone()) : JR.add(RR)
        }))), JR
      }
    }
    XJ("set", {
      constructor: Zy
    });
    class qy {
      [aR];
      [qR];
      [LR];
      $items = new Map;
      $nextPosition = 0;
      _itemIndex = new Map;
      _stream;
      get maxPerTick() {
        return this._stream?.maxPerTick ?? 32
      }
      set maxPerTick(RR) {
        (this._stream ??= lJ()).maxPerTick = RR
      }
      get priority() {
        return this._stream?.priority
      }
      set priority(RR) {
        (this._stream ??= lJ()).priority = RR
      }
      static $isStream = !0;
      static[fR] = oG;
      static[VR] = FG;
      static COLLECTION_KIND = YG;
      static[KR](RR, JR, GR) {
        if (!GR) return !0;
        const yR = RR[wR](JR);
        return void 0 !== yR && GR.isVisible(yR[aR])
      }
      static is(RR) {
        return RR && void 0 !== RR.stream
      }
      constructor() {
        Object.defineProperty(this, aR, {
          value: new vG(this),
          enumerable: !1,
          writable: !0
        }), this[LR] = void 0
      }
      static initializeForDecoder() {
        const RR = Object.create(qy.prototype);
        return RR.$items = new Map, RR.$nextPosition = 0, RR._itemIndex = new Map, RR[LR] = void 0, xG(RR), RR
      }
      add(RR) {
        if (this._itemIndex.has(RR)) return -1;
        const JR = this.$nextPosition++;
        this.$items.set(JR, RR), this._itemIndex.set(RR, JR);
        const GR = this[aR].root;
        return void 0 !== RR[aR] && RR[aR].setParent(this, GR, JR), void 0 !== GR && gJ(this, GR, JR), JR
      }
      remove(RR) {
        const JR = this._itemIndex.get(RR);
        if (void 0 === JR) return !1;
        this._itemIndex.delete(RR), this.$items.delete(JR);
        const GR = this[aR].root;
        return void 0 !== GR && (bJ(this, GR, this[qR], JR), void 0 !== RR[aR] && GR.remove(RR[aR])), !0
      }
      has(RR) {
        return this._itemIndex.has(RR)
      }
      clear() {
        const RR = this[aR].root;
        if (void 0 !== RR) {
          ! function(RR, JR, GR) {
            const yR = RR._stream;
            if (void 0 !== yR) {
              yR.broadcastPending.clear();
              for (const RR of yR.sentBroadcast) yR.broadcastDeletes.add(RR);
              yR.sentBroadcast.clear(), JR.forEachActiveView((RR => {
                yR.pendingByView.get(RR.id)?.clear();
                const JR = yR.sentByView.get(RR.id);
                if (void 0 !== JR && JR.size > 0) {
                  let yR = RR.changes.get(GR);
                  void 0 === yR && (yR = new Map, RR.changes.set(GR, yR));
                  for (const RR of JR) yR.set(RR, tR.DELETE);
                  JR.clear()
                }
              }))
            }
          }(this, RR, this[qR]);
          for (const JR of this.$items.values()) void 0 !== JR[aR] && RR.remove(JR[aR])
        }
        this.$items.clear(), this._itemIndex.clear()
      }
      forEach(RR) {
        for (const [JR, GR] of this.$items) RR(GR, JR, this)
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
      setIndex(RR, JR) {}
      getIndex(RR) {
        return RR
      } [wR](RR) {
        return this.$items.get(RR)
      } [rR](RR) {
        const JR = this.$items.get(RR);
        void 0 !== JR && (this._itemIndex.delete(JR), this.$items.delete(RR))
      } [eR]() {} [UR]() {}
      toArray() {
        return Array.from(this.$items.values())
      }
      toJSON() {
        const RR = [];
        return this.forEach((JR => {
          RR.push("function" === typeof JR?.toJSON ? JR.toJSON() : JR)
        })), RR
      }
      clone(RR) {
        if (RR) {
          return Object.assign(new qy, this)
        }
        const JR = new qy;
        return JR.maxPerTick = this.maxPerTick, this.forEach((RR => {
          JR.add("function" === typeof RR?.clone ? RR.clone() : RR)
        })), JR
      }
      _dropView(RR) {
        NJ(this, RR)
      }
      _unregister() {}
    }
    XJ("stream", {
      constructor: qy
    });
    class iy {
      [XR] = !0;
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
      constructor(RR) {
        this._type = RR
      }
      default (RR) {
        return this._default = RR, this._hasDefault = !0, this
      }
      view(RR) {
        return this._view = RR ?? -1, this
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
        const RR = this._type;
        if (RR && "object" === typeof RR && void 0 !== RR.array) throw new Error(BJ);
        return this._stream = !0, this
      }
      priority(RR) {
        return this._streamPriority = RR, this
      }
      deprecated() {
        let RR = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
        return this._deprecated = !0, this._deprecatedThrows = RR, this
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

    function fy(RR) {
      return null != RR && !0 === RR[XR]
    }

    function Vy(RR) {
      return () => new iy(RR)
    }

    function Ky(RR) {
      if (fy(RR)) {
        const JR = RR._type;
        throw new Error(`t.array/map/set/collection(): a t.* builder is not a valid element type \u2014 ${"string"===typeof JR?`use the type name instead: t.array("${JR}")`:'collections accept a Schema class or a primitive type name ("string", "number", \u2026)'}.`)
      }
      return RR
    }

    function wy(RR) {
      return new iy({
        quantized: HJ(RR)
      })
    }
    const ry = Object.freeze({
        string: Vy("string"),
        number: Vy("number"),
        boolean: Vy("boolean"),
        int8: Vy("int8"),
        uint8: Vy("uint8"),
        int16: Vy("int16"),
        uint16: Vy("uint16"),
        int32: Vy("int32"),
        uint32: Vy("uint32"),
        int64: Vy("int64"),
        uint64: Vy("uint64"),
        float32: Vy("float32"),
        float64: Vy("float64"),
        bigint64: Vy("bigint64"),
        biguint64: Vy("biguint64"),
        ref: RR => new iy(RR),
        array: RR => new iy({
          array: Ky(RR)
        }),
        map: RR => new iy({
          map: Ky(RR)
        }),
        set: RR => new iy({
          set: Ky(RR)
        }),
        collection: RR => new iy({
          collection: Ky(RR)
        }),
        stream: RR => {
          const JR = new iy({
            stream: Ky(RR)
          });
          return JR._stream = !0, JR
        },
        quantized: wy,
        angle: RR => wy({
          min: 0,
          max: 2 * Math.PI,
          mode: "wrap",
          bits: RR?.bits ?? 16
        })
      }),
      ey = -1;

    function ay(RR) {
      return mJ.register(RR), RR
    }

    function Ly() {
      let RR = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ey;
      return function(JR, GR) {
        const yR = kJ.initialize(JR.constructor);
        kJ.setTag(yR, GR, RR)
      }
    }

    function ny(RR, JR) {
      const GR = kJ.initialize(RR.constructor);
      kJ.setUnreliable(GR, JR)
    }

    function Uy(RR, JR) {
      const GR = kJ.initialize(RR.constructor);
      kJ.setPatchOnly(GR, JR)
    }

    function Wy(RR, JR) {
      const GR = kJ.initialize(RR.constructor);
      kJ.setFullStateOnly(GR, JR)
    }

    function Ay(RR, JR) {
      return function(GR, yR) {
        const tR = GR.constructor;
        if (!RR) throw new Error(`${tR.name}: @type() reference provided for "${yR}" is undefined. Make sure you don't have any circular dependencies.`);
        RR = SJ(RR, `${tR.name}.${yR}`), mJ.register(tR);
        const uR = Object.getPrototypeOf(tR)[Symbol.metadata],
          ZR = kJ.initialize(tR);
        let qR = ZR[yR];
        if (void 0 !== ZR[qR]) {
          if (ZR[qR].deprecated) return;
          if (void 0 !== ZR[qR].type) {
            const RR = new Error(`@colyseus/schema: Duplicate '${yR}' definition on '${tR.name}'.\nCheck @type() annotation`);
            throw new Error(`${RR.message} ${RR.stack.split("\n")[4].trim()}`)
          }
        } else qR = ZR[pR] ?? (uR && uR[pR]) ?? -1, qR++;
        if (JR && JR.manual) kJ.addField(ZR, qR, yR, RR, {
          enumerable: !0,
          configurable: !0,
          writable: !0
        });
        else {
          const {
            complexTypeKlass: JR,
            childType: GR
          } = zJ(RR);
          kJ.addField(ZR, qR, yR, RR, Xy(yR, qR, GR, JR))
        }
        ZR[MR][yR] && Object.defineProperty(GR, yR, ZR[MR][yR]), ("string" === typeof RR || oJ(RR)) && (ZR[lR] || Object.defineProperty(ZR, lR, {
          value: [],
          enumerable: !1,
          configurable: !0,
          writable: !0
        }), ZR[lR][qR] = "string" === typeof RR ? JJ[RR] : IJ(RR.quantized))
      }
    }
    const Cy = {
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

    function Xy(RR, JR, GR, yR) {
      let uR;
      return uR = yR ? function(RR, JR, GR, yR) {
        const uR = yR.constructor === Gy,
          ZR = yR.constructor === ty;
        return function(RR) {
          const yR = this[CR],
            qR = yR[JR];
          if (RR !== qR) {
            if (void 0 !== RR && null !== RR) {
              if (!uR || RR instanceof Gy)
                if (!ZR || RR instanceof ty) RR[LR] = GR;
                else {
                  const JR = new ty;
                  if (JR[LR] = GR, RR instanceof Map) RR.forEach(((RR, GR) => JR.set(GR, RR)));
                  else
                    for (const GR in RR) JR.set(GR, RR[GR]);
                  RR = JR
                }
              else {
                const JR = new Gy;
                JR[LR] = GR, JR.push(...RR), RR = JR
              }
              const yR = this[aR],
                fR = this.constructor;
              void 0 !== qR && null !== qR && qR[aR] ? (yR.root?.remove(qR[aR]), fR[iR](yR, JR, tR.DELETE_AND_ADD)) : fR[iR](yR, JR, tR.ADD), RR[aR]?.setParent(this, yR.root, JR)
            } else void 0 !== qR && null !== qR && this[aR].delete(JR);
            yR[JR] = RR
          }
        }
      }(0, JR, GR, yR) : "string" === typeof GR ? function(RR, JR, GR) {
        const yR = Cy[GR],
          uR = "string" === GR,
          ZR = "boolean" === GR;
        return function(GR) {
          const qR = this[CR],
            fR = qR[JR];
          if (GR !== fR) {
            if (void 0 !== GR && null !== GR) {
              if (!ZR && void 0 !== yR && typeof GR !== yR && (!uR || null !== GR)) {
                const JR = GR && GR.constructor ? ` (${GR.constructor.name})` : "";
                throw new sG(`a '${yR}' was expected, but '${JSON.stringify(GR)}'${JR} was provided in ${this.constructor.name}#${RR}`)
              }
              this.constructor[iR](this[aR], JR, tR.ADD)
            } else void 0 !== fR && null !== fR && this[aR].delete(JR);
            qR[JR] = GR
          }
        }
      }(RR, JR, GR) : oJ(GR) ? function(RR, JR, GR) {
        return function(yR) {
          const uR = this[CR],
            ZR = uR[JR];
          if (void 0 !== yR && null !== yR) {
            if ("number" !== typeof yR) throw new sG(`a 'number' was expected, but '${JSON.stringify(yR)}' was provided in ${this.constructor.name}#${RR}`);
            if ((yR = PJ(GR, cJ(GR, yR))) === ZR) return;
            this.constructor[iR](this[aR], JR, tR.ADD)
          } else {
            if (yR === ZR) return;
            void 0 !== ZR && null !== ZR && this[aR].delete(JR)
          }
          uR[JR] = yR
        }
      }(RR, JR, GR.quantized) : function(RR, JR, GR) {
        return function(yR) {
          const uR = this[CR],
            ZR = uR[JR];
          if (yR !== ZR) {
            if (void 0 !== yR && null !== yR) {
              hG(yR, GR, this, RR);
              const uR = this[aR],
                qR = this.constructor;
              void 0 !== ZR && null !== ZR && ZR[aR] ? (uR.root?.remove(ZR[aR]), qR[iR](uR, JR, tR.DELETE_AND_ADD)) : qR[iR](uR, JR, tR.ADD), yR[aR]?.setParent(this, uR.root, JR)
            } else void 0 !== ZR && null !== ZR && this[aR].delete(JR);
            uR[JR] = yR
          }
        }
      }(RR, JR, GR), {
        get: function() {
          return this[CR][JR]
        },
        set: uR,
        enumerable: !0,
        configurable: !0
      }
    }

    function My() {
      let RR = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
      return function(JR, GR) {
        const yR = kJ.initialize(JR.constructor);
        kJ.setDeprecated(yR, GR), RR && (yR[MR] ??= {}, yR[MR][GR] = {
          get: function() {
            throw new Error(`${GR} is deprecated.`)
          },
          set: function(RR) {},
          enumerable: !1,
          configurable: !0
        }, Object.defineProperty(JR, GR, yR[MR][GR]))
      }
    }
    let By = !1;

    function ly(RR, JR, GR) {
      By || (By = !0, console.warn("@colyseus/schema: defineTypes() is deprecated and will be removed in a future release. Use schema() with t.* field builders instead \u2192 https://docs.colyseus.io/state/schema"));
      for (let yR in JR) Ay(JR[yR], GR)(RR.prototype, yR);
      return RR
    }

    function py(RR, JR) {
      let GR = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : by;
      if (null == RR || "object" !== typeof RR) throw new Error(`schema(): first argument must be a fields object (got ${typeof RR}).`);
      const yR = {},
        tR = {},
        uR = {},
        ZR = {},
        qR = (RR, JR) => {
          if (JR.hasDefault)((RR, JR) => {
            "function" === typeof JR ? ZR[RR] = JR : JR && "function" === typeof JR.clone ? ZR[RR] = () => JR.clone() : uR[RR] = JR
          })(RR, JR.default);
          else if (!JR.optional) {
            const GR = function(RR) {
              if (RR && "object" === typeof RR) {
                if (void 0 !== RR.array) return () => new Gy;
                if (void 0 !== RR.map) return () => new ty;
                if (void 0 !== RR.set) return () => new Zy;
                if (void 0 !== RR.collection) return () => new uy;
                if (void 0 !== RR.stream) return () => new qy
              } else if ("function" === typeof RR && by.is(RR) && (!RR.prototype.initialize || 0 === RR.prototype.initialize.length)) return () => new RR
            }(JR.type);
            GR && (ZR[RR] = GR)
          }
        },
        iR = {},
        fR = [],
        VR = [],
        KR = {},
        wR = [],
        rR = [],
        eR = {},
        aR = [];
      for (const CR in RR) {
        const GR = RR[CR],
          uR = `schema(${JR?`'${JR}'`:""}): field '${CR}'`;
        if (fy(GR)) {
          const RR = GR.toDefinition();
          if (RR.noSync) {
            if (void 0 !== RR.view || RR.unreliable || RR.patchOnly || RR.fullStateOnly || RR.stream) throw new Error(`${uR} uses .noSync() together with a sync-only modifier (.view/.unreliable/.patchOnly/.fullStateOnly/.stream). A local-only field cannot be synchronized.`);
            qR(CR, RR);
            continue
          }
          if (RR.patchOnly && RR.fullStateOnly) throw new Error(`${uR} uses .patchOnly() together with .fullStateOnly(). Those are the only two delivery channels, so the field would never reach a client \u2014 use .noSync() if that is intended.`);
          const JR = SJ(RR.type, uR);
          if ("function" === typeof JR && !by.is(JR)) throw new Error(`${uR} is a synced ref to non-Schema class '${JR.name||"(anonymous)"}' \u2014 use .noSync(), or Metadata.setFields().`);
          yR[CR] = JR, void 0 !== RR.view && (iR[CR] = RR.view), RR.unreliable && fR.push(CR), RR.patchOnly && VR.push(CR), RR.deprecated && (KR[CR] = RR.deprecatedThrows), RR.fullStateOnly && wR.push(CR), RR.stream && rR.push(CR), void 0 !== RR.streamPriority && (eR[CR] = RR.streamPriority), RR.optional && aR.push(CR), qR(CR, RR)
        } else {
          if ("function" !== typeof GR) throw new Error(`${uR} must be a t.* builder, Schema subclass, or method (got ${typeof GR}).`);
          by.is(GR) ? (yR[CR] = GR, GR.prototype.initialize && 0 !== GR.prototype.initialize.length || (ZR[CR] = () => new GR)) : tR[CR] = GR
        }
      }
      const LR = RR => {
          for (const JR in uR) RR[JR] = uR[JR];
          for (const JR in ZR) RR[JR] = ZR[JR]()
        },
        nR = () => {
          const RR = {};
          return LR(RR), RR
        },
        UR = "function" === typeof tR.initialize,
        WR = tR.initialize ?? GR._initialize,
        AR = class extends GR {
          constructor() {
            for (var RR = arguments.length, JR = new Array(RR), GR = 0; GR < RR; GR++) JR[GR] = arguments[GR];
            const tR = JR[0];
            void 0 === tR ? (super(), LR(this)) : super(Object.assign(nR(), UR ? (RR => {
              const JR = Object.keys(yR),
                GR = {};
              for (const yR in RR) JR.includes(yR) || (GR[yR] = RR[yR]);
              return GR
            })(tR) : tR)), WR && new.target === AR && WR.apply(this, JR)
          }
        };
      JR && Object.defineProperty(AR, "name", {
        value: JR
      }), kJ.setFields(AR, yR), AR._getDefaultValues = nR, AR._initialize = WR, Object.assign(AR.prototype, tR);
      for (const CR in iR) Ly(iR[CR])(AR.prototype, CR);
      for (const CR of fR) ny(AR.prototype, CR);
      for (const CR of VR) Uy(AR.prototype, CR);
      for (const CR in KR) My(KR[CR])(AR.prototype, CR);
      if (wR.length > 0 || rR.length > 0) {
        const RR = AR[Symbol.metadata];
        for (const JR of wR) kJ.setFullStateOnly(RR, JR);
        for (const JR of rR) kJ.setStream(RR, JR);
        for (const JR in eR) kJ.setStreamPriority(RR, JR, eR[JR])
      }
      if (aR.length > 0) {
        const RR = AR[Symbol.metadata];
        for (const JR of aR) RR[RR[JR]].optional = !0
      }
      return AR.extend = (RR, JR) => py(RR, JR, AR), AR
    }

    function gy(RR) {
      const JR = RR[aR].root,
        GR = {
          ops: {},
          refs: []
        };
      let yR = JR.changes.next;
      for (; yR;) {
        const RR = yR.changeTree;
        void 0 !== RR ? (GR.refs.push(`refId#${RR.ref[qR]}`), RR.forEach(((RR, JR) => {
          if (RR < 0 || !JR) return;
          const yR = tR[JR];
          GR.ops[yR] || (GR.ops[yR] = 0), GR.ops[yR]++
        })), yR = yR.next) : yR = yR.next
      }
      return GR
    }
    class by {
      static[fR] = DG;
      static[VR] = QG;
      [qR];
      [CR];
      static initialize(RR) {
        Object.defineProperty(RR, aR, {
          value: new vG(RR),
          enumerable: !1,
          writable: !0
        }), RR[CR] = []
      }
      static initializeForDecoder() {
        const RR = Object.create(this.prototype);
        return xG(RR), RR[CR] = [], RR
      }
      static reset(RR) {
        const JR = RR?.[aR];
        if (void 0 === JR || "function" !== typeof JR.recycle) throw new Error("@colyseus/schema: Schema.reset() requires a tracked (encoder-side) instance.");
        if (void 0 !== JR.extraParents) throw new Error(`@colyseus/schema: cannot reset a shared instance (${RR.constructor.name}) with multiple parents.`);
        RR[WR]()
      } [WR]() {
        const RR = this.constructor[Symbol.metadata],
          JR = RR?.[gR] ?? [],
          GR = this[CR];
        for (let yR = 0; yR < JR.length; yR++) {
          const RR = GR[JR[yR]];
          RR?.[WR]?.()
        }
        this[aR].recycle(), this[qR] = void 0
      }
      static is(RR) {
        const JR = RR[Symbol.metadata];
        return "object" === typeof JR && null !== JR
      }
      static isSchema(RR) {
        return "function" === typeof RR?.assign
      }
      static[iR](RR, JR) {
        let GR = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : tR.ADD;
        RR.change(JR, GR)
      }
      static[KR](RR, JR, GR) {
        const yR = RR.constructor[Symbol.metadata],
          tR = yR[JR]?.tag;
        return void 0 === GR ? void 0 === tR : void 0 === tR || (tR === ey ? GR.isChangeTreeVisible(RR[aR]) : GR.hasTagOnTree(RR[aR], tR))
      }
      constructor(RR) {
        by.initialize(this), RR && by.assignProps(this, RR)
      }
      assign(RR) {
        return by.assignProps(this, RR), this
      }
      static assignProps(RR, JR) {
        const GR = RR.constructor[Symbol.metadata];
        if (GR && void 0 !== GR[pR])
          for (let tR = 0; tR <= GR[pR]; tR++) {
            const yR = GR[tR];
            if (!yR) continue;
            const uR = JR[yR.name];
            void 0 !== uR && (RR[yR.name] = uR)
          }
        const yR = Object.keys(JR);
        for (let tR = 0; tR < yR.length; tR++) {
          const uR = yR[tR];
          GR && void 0 !== GR[uR] || (RR[uR] = JR[uR])
        }
      }
      restore(RR) {
        const JR = this.constructor[Symbol.metadata];
        for (const GR in JR) {
          const yR = JR[GR],
            tR = yR.name,
            uR = yR.type,
            ZR = RR[tR];
          if (void 0 !== ZR && null !== ZR)
            if ("string" === typeof uR) this[tR] = ZR;
            else if (by.is(uR)) {
            const RR = new uR;
            RR.restore(ZR), this[tR] = RR
          } else if ("object" === typeof uR) {
            const RR = Object.keys(uR)[0],
              JR = uR[RR];
            if ("map" === RR) {
              const RR = this[tR];
              for (const GR in ZR)
                if (by.is(JR)) {
                  const yR = new JR;
                  yR.restore(ZR[GR]), RR.set(GR, yR)
                } else RR.set(GR, ZR[GR])
            } else if ("array" === RR) {
              const RR = this[tR];
              for (let GR = 0; GR < ZR.length; GR++)
                if (by.is(JR)) {
                  const yR = new JR;
                  yR.restore(ZR[GR]), RR.push(yR)
                } else RR.push(ZR[GR])
            }
          }
        }
        return this
      }
      setDirty(RR, JR) {
        const GR = this.constructor[Symbol.metadata];
        this[aR].change(GR[GR[RR]].index, JR)
      }
      pauseTracking() {
        this[aR].pause()
      }
      resumeTracking() {
        this[aR].resume()
      }
      untracked(RR) {
        return this[aR].untracked(RR)
      }
      get isTrackingPaused() {
        return this[aR].paused
      }
      clone() {
        const RR = Object.create(this.constructor.prototype);
        by.initialize(RR);
        const JR = this.constructor[Symbol.metadata];
        for (const GR in JR) {
          const yR = JR[GR].name;
          "object" === typeof this[yR] && "function" === typeof this[yR]?.clone ? RR[yR] = this[yR].clone() : RR[yR] = this[yR]
        }
        return RR
      }
      toJSON() {
        const RR = {},
          JR = this.constructor[Symbol.metadata];
        for (const GR in JR) {
          const yR = JR[GR],
            tR = yR.name;
          yR.deprecated || null === this[tR] || "undefined" === typeof this[tR] || (RR[tR] = "function" === typeof this[tR].toJSON ? this[tR].toJSON() : this[tR])
        }
        return RR
      }
      discardAllChanges() {
        this[aR].discardAll()
      } [wR](RR) {
        return this[this.constructor[Symbol.metadata][RR].name]
      } [rR](RR) {
        this[this.constructor[Symbol.metadata][RR].name] = void 0
      }
      static debugRefIds(RR) {
        let JR = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          GR = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          yR = arguments.length > 3 ? arguments[3] : void 0,
          tR = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "";
        const uR = JR ? ` - ${JSON.stringify(RR.toJSON())}` : "",
          ZR = RR[aR],
          iR = RR[qR],
          fR = yR ? yR.root.refCount[iR] : ZR.refCount,
          VR = fR > 1 ? ` [\xd7${fR}]` : "";
        let KR = `${function(RR){return new Array(RR).fill(0).map(((JR,GR)=>GR===RR-1?"\u2514\u2500 ":"   ")).join("")}(GR)}${tR}${RR.constructor.name} (refId: ${iR})${VR}${uR}\n`;
        return ZR.forEachChild(((tR, uR) => {
          let ZR = uR;
          "number" === typeof uR && RR.$indexes && (ZR = RR.$indexes.get(uR) ?? uR);
          const qR = void 0 !== RR.forEach && void 0 !== ZR ? `["${ZR}"]: ` : "";
          KR += this.debugRefIds(tR.ref, JR, GR + 1, yR, qR)
        })), KR
      }
      static debugRefIdEncodingOrder(RR) {
        let JR = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "allChanges";
        const GR = [],
          yR = RR[aR];
        if ("changes" === JR) {
          let RR = yR.root.changes?.next;
          for (; RR;) RR.changeTree && GR.push(RR.changeTree.ref[qR]), RR = RR.next;
          return GR
        }
        const tR = "allFilteredChanges" === JR,
          uR = new Set,
          ZR = RR => {
            uR.has(RR) || (uR.add(RR), RR.isFiltered === tR && GR.push(RR.ref[qR]), RR.forEachChild(((RR, JR) => ZR(RR))))
          };
        return ZR(yR), GR
      }
      static debugRefIdsFromDecoder(RR) {
        return this.debugRefIds(RR.state, !1, 0, RR)
      }
      static debugChanges(RR) {
        let JR = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        const GR = RR[aR],
          yR = JR ? "allChanges" : "changes";
        let uR = `${RR.constructor.name} (${RR[qR]}) -> .${yR}:\n`;
        return JR ? GR.forEachLive((RR => {
          uR += `- [${RR}]: ADD (${JSON.stringify(GR.getValue(Number(RR),!0))})\n`
        })) : GR.forEach(((RR, JR) => {
          RR < 0 || !JR || (uR += `- [${RR}]: ${tR[JR]} (${JSON.stringify(GR.getValue(Number(RR),!1))})\n`)
        })), uR
      }
    }
    uR(by);
    const vy = {
      value: 0,
      enumerable: !1,
      writable: !0
    };
    class Oy {
      types;
      nextUniqueId = 0;
      changeTrees = {};
      get refCount() {
        const RR = {};
        for (const JR in this.changeTrees) RR[JR] = this.changeTrees[JR].refCount;
        return RR
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
      enqueueFilterRefresh(RR) {
        this.types.hasFilters && (RR.flags & gG || (RR.flags |= gG, this.pendingFilterRefresh.push(RR)))
      }
      _nodePool = [];
      _nextViewId = 0;
      _freeViewIds = [];
      acquireViewId() {
        return this._freeViewIds.length > 0 ? this._freeViewIds.pop() : this._nextViewId++
      }
      releaseViewId(RR) {
        this._freeViewIds.push(RR)
      }
      activeViews = new Map;
      streamTrees = new Set;
      registerView(RR) {
        this.activeViews.set(RR.id, new WeakRef(RR))
      }
      unregisterView(RR) {
        this.activeViews.delete(RR.id);
        const JR = RR.id;
        for (const GR of this.streamTrees) GR._dropView(JR)
      }
      forEachActiveView(RR) {
        for (const [JR, GR] of this.activeViews) {
          const yR = GR.deref();
          if (void 0 !== yR) RR(yR);
          else {
            this.activeViews.delete(JR);
            for (const RR of this.streamTrees) RR._dropView(JR)
          }
        }
      }
      registerStream(RR) {
        this.streamTrees.add(RR)
      }
      unregisterStream(RR) {
        this.streamTrees.delete(RR)
      }
      constructor(RR) {
        let JR = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        this.types = RR, this.nextUniqueId = JR
      }
      add(RR) {
        const JR = RR.ref;
        void 0 === JR[qR] && (vy.value = this.nextUniqueId++, Object.defineProperty(JR, qR, vy));
        const GR = JR[qR],
          yR = void 0 === this.changeTrees[GR];
        yR && (this.changeTrees[GR] = RR), RR.needsRestage && (RR.needsRestage = !1, RR.forEachLiveWithCtx(RR, GG));
        const tR = yR ? 0 : RR.refCount;
        return RR.refCount = tR + 1, tR > 0 && this.enqueueFilterRefresh(RR), yR
      }
      remove(RR) {
        const JR = RR.refCount - 1;
        if (JR <= 0) {
          if (RR.root = void 0, delete this.changeTrees[RR.ref[qR]], RR.isStreamCollection) {
            const JR = RR.ref;
            JR._unregister?.(), this.unregisterStream(JR)
          }
          this.removeFromQueue(RR), this.removeFromUnreliableQueue(RR), RR.refCount = 0, RR.needsRestage = !0, RR.forEachChild(((JR, GR) => {
            JR.removeParent(RR.ref) && (void 0 === JR.parentRef || JR.refCount > 0 ? this.remove(JR) : this.moveNextToParent(JR))
          }))
        } else RR.refCount = JR, this.enqueueFilterRefresh(RR), this.recursivelyMoveNextToParent(RR);
        return JR
      }
      recursivelyMoveNextToParent(RR) {
        this.moveNextToParent(RR), RR.forEachChild(((RR, JR) => this.recursivelyMoveNextToParent(RR)))
      }
      moveNextToParent(RR) {
        RR.changesNode && this._moveNextToParentInList(this.changes, RR, RR.changesNode, "changesNode"), RR.unreliableChangesNode && this._moveNextToParentInList(this.unreliableChanges, RR, RR.unreliableChangesNode, "unreliableChangesNode")
      }
      _moveNextToParentInList(RR, JR, GR, yR) {
        const tR = JR.parent;
        if (!tR || !tR[aR]) return;
        const uR = tR[aR][yR];
        uR && uR !== GR && (GR.position > uR.position || (GR.prev ? GR.prev.next = GR.next : RR.next = GR.next, GR.next ? GR.next.prev = GR.prev : RR.tail = GR.prev, GR.prev = RR.tail, GR.next = void 0, RR.tail.next = GR, RR.tail = GR, GR.position = RR.nextPosition++))
      }
      enqueueChangeTree(RR) {
        (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : RR.changesNode) || (RR.changesNode = this._appendToList(this.changes, RR))
      }
      enqueueUnreliable(RR) {
        (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : RR.unreliableChangesNode) || (RR.unreliableChangesNode = this._appendToList(this.unreliableChanges, RR))
      }
      _appendToList(RR, JR) {
        const GR = this._nodePool;
        let yR;
        return GR.length > 0 ? (yR = GR.pop(), yR.changeTree = JR, yR.next = void 0, yR.prev = void 0) : yR = {
          changeTree: JR,
          next: void 0,
          prev: void 0,
          position: 0
        }, RR.next ? (yR.prev = RR.tail, RR.tail.next = yR, RR.tail = yR) : (RR.nextPosition = 0, RR.next = yR, RR.tail = yR), yR.position = RR.nextPosition++, yR
      }
      releaseNode(RR) {
        RR.changeTree = void 0, RR.prev = void 0, RR.next = void 0, this._nodePool.push(RR)
      }
      removeFromQueue(RR) {
        return this._removeNode(this.changes, RR, RR.changesNode, "changesNode")
      }
      removeFromUnreliableQueue(RR) {
        return this._removeNode(this.unreliableChanges, RR, RR.unreliableChangesNode, "unreliableChangesNode")
      }
      _removeNode(RR, JR, GR, yR) {
        return !(!GR || GR.changeTree !== JR) && (GR.prev ? GR.prev.next = GR.next : RR.next = GR.next, GR.next ? GR.next.prev = GR.prev : RR.tail = GR.prev, JR[yR] = void 0, this.releaseNode(GR), !0)
      }
    }

    function xy(RR, JR) {
      if (-1 === JR || JR >= RR.length) return !1;
      const GR = RR.length - 1;
      for (let yR = JR; yR < GR; yR++) RR[yR] = RR[yR + 1];
      return RR.length = GR, !0
    }

    function Ny(RR, JR, GR) {
      const yR = ~GR,
        tR = RR.changeTrees;
      for (const uR in tR) {
        const RR = tR[uR],
          GR = RR.visibleViews;
        void 0 !== GR && JR < GR.length && (GR[JR] &= yR);
        const ZR = RR.subscribedViews;
        void 0 !== ZR && JR < ZR.length && (ZR[JR] &= yR);
        const qR = RR.tagViews;
        void 0 !== qR && qR.forEach((RR => {
          JR < RR.length && (RR[JR] &= yR)
        }))
      }
    }
    const Dy = new FinalizationRegistry((RR => {
      let {
        root: JR,
        id: GR,
        slot: yR,
        bit: tR
      } = RR;
      Ny(JR, yR, tR), JR.activeViews.delete(GR);
      for (const uR of JR.streamTrees) uR._dropView(GR);
      JR.releaseViewId(GR)
    }));

    function Hy(RR) {
      if (void 0 === RR) return "undefined";
      if (null === RR) return "null";
      const JR = typeof RR;
      return "string" === JR ? JSON.stringify(RR.length > 30 ? `${RR.slice(0,30)}\u2026` : RR) : "object" !== JR && "function" !== JR ? `${JR} ${String(RR)}` : Array.isArray(RR) ? `Array(${RR.length})` : RR.constructor?.name ?? "Object"
    }
    class oy {
      iterable;
      items;
      id = -1;
      _root;
      _slot = 0;
      _bit = 0;
      changes = new Map;
      constructor() {
        let RR = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        this.iterable = RR, RR && (this.items = [])
      }
      _bindRoot(RR) {
        void 0 === this._root && (this._root = RR, this.id = RR.acquireViewId(), this._slot = this.id >> 5, this._bit = 1 << (31 & this.id), RR.registerView(this), Dy.register(this, {
          root: RR,
          id: this.id,
          slot: this._slot,
          bit: this._bit
        }, this))
      }
      dispose() {
        void 0 !== this._root && (this._root.unregisterView(this), Ny(this._root, this._slot, this._bit), this._root.releaseViewId(this.id), Dy.unregister(this), this._root = void 0, this.id = -1)
      }
      isVisible(RR) {
        const JR = RR.visibleViews,
          GR = this._slot;
        return void 0 !== JR && GR < JR.length && 0 !== (JR[GR] & this._bit)
      }
      markVisible(RR) {
        const JR = this._slot;
        let GR = RR.visibleViews;
        for (void 0 === GR && (GR = RR.visibleViews = []); GR.length <= JR;) GR.push(0);
        GR[JR] |= this._bit
      }
      unmarkVisible(RR) {
        const JR = RR.visibleViews;
        if (void 0 === JR) return;
        const GR = this._slot;
        GR < JR.length && (JR[GR] &= ~this._bit)
      }
      isSubscribed(RR) {
        const JR = RR.subscribedViews,
          GR = this._slot;
        return void 0 !== JR && GR < JR.length && 0 !== (JR[GR] & this._bit)
      }
      _setSubscribed(RR) {
        const JR = this._slot;
        let GR = RR.subscribedViews;
        for (void 0 === GR && (GR = RR.subscribedViews = []); GR.length <= JR;) GR.push(0);
        GR[JR] |= this._bit
      }
      _clearSubscribed(RR) {
        const JR = RR.subscribedViews;
        if (void 0 === JR) return;
        const GR = this._slot;
        GR < JR.length && (JR[GR] &= ~this._bit)
      }
      hasTagOnTree(RR, JR) {
        const GR = RR.tagViews;
        if (void 0 === GR) return !1;
        const yR = this._slot,
          tR = this._bit;
        for (let uR = JR; 0 !== uR; uR &= uR - 1) {
          const RR = GR.get(uR & -uR);
          if (void 0 !== RR && yR < RR.length && 0 !== (RR[yR] & tR)) return !0
        }
        return !1
      }
      addTag(RR, JR) {
        if (JR === ey) return;
        let GR = RR.tagViews;
        void 0 === GR && (GR = RR.tagViews = new Map);
        const yR = this._slot,
          tR = this._bit;
        for (let uR = JR; uR > 0; uR &= uR - 1) {
          const RR = uR & -uR;
          let JR = GR.get(RR);
          for (void 0 === JR && (JR = [], GR.set(RR, JR)); JR.length <= yR;) JR.push(0);
          JR[yR] |= tR
        }
      }
      removeTag(RR, JR) {
        if (JR === ey) return;
        const GR = RR.tagViews;
        if (void 0 === GR) return;
        const yR = this._slot,
          tR = ~this._bit;
        for (let uR = JR; uR > 0; uR &= uR - 1) {
          const RR = GR.get(uR & -uR);
          void 0 !== RR && yR < RR.length && (RR[yR] &= tR)
        }
      }
      removeAllTagsOnTree(RR) {
        const JR = RR.tagViews;
        if (void 0 === JR) return;
        const GR = this._slot,
          yR = ~this._bit;
        JR.forEach((RR => {
          GR < RR.length && (RR[GR] &= yR)
        }))
      }
      add(RR) {
        let JR = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ey,
          GR = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        return this._add(RR, JR, GR, !1)
      }
      _addImmediate(RR) {
        let JR = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ey;
        this._add(RR, JR, !0, !0)
      }
      _add(RR, JR, GR, yR) {
        const uR = RR?.[aR];
        if (!uR) return console.warn(`StateView#add(): expected a Schema instance or collection, received ${Hy(RR)}`), !1;
        const ZR = uR.parent;
        if (!ZR && 0 !== RR[qR]) throw new Error(`Cannot add a detached instance to the StateView. Make sure to assign the "${uR.ref.constructor.name}" instance to the state before calling view.add()`);
        void 0 === this._root && void 0 !== uR.root && this._bindRoot(uR.root);
        const iR = ZR?.[aR];
        if (!yR && iR?.isStreamCollection) return xJ(ZR, this.id, uR.parentIndex), !0;
        const fR = RR.constructor[Symbol.metadata],
          VR = this.isVisible(uR);
        if (!this.iterable || !GR || VR && -1 !== this.items.indexOf(RR) || this.items.push(RR), this.markVisible(uR), GR && ZR && this.addParentOf(uR, JR), !yR && uR.isStreamCollection) return !0;
        if (JR === ey && uR.isNew) return this._markSubtreeVisible(uR, JR), !1;
        let KR = this.changes.get(RR[qR]);
        void 0 === KR && (KR = new Map, this.changes.set(RR[qR], KR));
        let wR = !1;
        const rR = uR.encDescriptor.tags;
        if (uR.forEachChild(((RR, GR) => {
            const yR = rR[GR];
            if (void 0 !== yR) {
              if (!(yR === ey || JR !== ey && 0 !== (yR & JR))) return
            }
            this.add(RR.ref, JR, !1) && (wR = !0)
          })), JR !== ey) {
          this.addTag(uR, JR);
          const RR = fR?.[vR];
          if (void 0 !== RR)
            for (let GR = JR; GR > 0; GR &= GR - 1) RR[GR & -GR]?.forEach((RR => {
              uR.getChange(RR) !== tR.DELETE && KR.set(RR, tR.ADD)
            }))
        }
        if ((JR === ey || !VR) && (!uR.isNew || wR))
          if (uR.isArray && "string" !== typeof uR.refTarget[LR]) uR.refTarget.items.length > 0 && (KR.set(-1, tR.ADD), wR = !0);
          else {
            const RR = uR.encDescriptor.tags;
            uR.forEachLive((GR => {
              const yR = RR[GR];
              (void 0 === yR || yR === ey || JR !== ey && 0 !== (yR & JR)) && (KR.set(GR, tR.ADD), wR = !0)
            }))
          } return wR
      }
      _markSubtreeVisible(RR, JR) {
        const GR = RR.encDescriptor.tags;
        RR.forEachChild(((RR, yR) => {
          const tR = GR[yR];
          if (void 0 !== tR) {
            if (!(tR === ey || JR !== ey && 0 !== (tR & JR))) return
          }
          RR.isNew ? (this.markVisible(RR), this._markSubtreeVisible(RR, JR)) : this._add(RR.ref, JR, !1, !1)
        }))
      }
      addParentOf(RR, JR) {
        const GR = RR.parent[aR],
          yR = RR.parentIndex;
        this.isVisible(GR) || this.markVisible(GR);
        const uR = GR.parent?.[aR];
        if (uR && this.addParentOf(GR, JR), GR.hasFilteredFields && GR.getChange(yR) !== tR.DELETE) {
          let uR = this.changes.get(GR.ref[qR]);
          void 0 === uR && (uR = new Map, this.changes.set(GR.ref[qR], uR));
          const ZR = GR.encDescriptor.tags[yR];
          void 0 !== ZR && ZR !== ey && 0 !== (ZR & JR) && this.addTag(GR, JR), uR.set(GR.isArray ? RR : yR, tR.ADD)
        }
      }
      _touchAncestorsOf(RR) {
        let JR = RR.parent?.[aR];
        if (void 0 === JR) return;
        const GR = [];
        for (; void 0 !== JR;) {
          if (JR.hasFilteredFields) {
            const RR = JR.ref[qR];
            if (this.changes.has(RR)) break;
            GR.push(JR)
          }
          JR = JR.parent?.[aR]
        }
        for (let yR = GR.length - 1; yR >= 0; yR--) this.changes.set(GR[yR].ref[qR], new Map)
      }
      remove(RR) {
        let JR = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ey,
          GR = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        const yR = RR?.[aR];
        if (!yR) return console.warn(`StateView#remove(): expected a Schema instance or collection, received ${Hy(RR)}`), this;
        const uR = yR.parent?.[aR];
        if (uR?.isStreamCollection) return this.unmarkVisible(yR), this.iterable && !GR && xy(this.items, this.items.indexOf(RR)),
          function(RR, JR, GR, yR, uR) {
            const ZR = RR._stream;
            if (void 0 === ZR) return !1;
            const qR = ZR.pendingByView.get(JR);
            if (qR?.has(yR)) return qR.delete(yR), !1;
            const iR = ZR.sentByView.get(JR);
            if (iR?.has(yR)) {
              iR.delete(yR);
              let RR = uR.get(GR);
              return void 0 === RR && (RR = new Map, uR.set(GR, RR)), RR.set(yR, tR.DELETE), !0
            }
          }(yR.parent, this.id, yR.parent[qR], yR.parentIndex, this.changes), this._recursiveDeleteVisibleChangeTree(yR), this;
        if (yR.isStreamCollection) {
          this.unmarkVisible(yR), this.iterable && !GR && xy(this.items, this.items.indexOf(RR));
          const JR = yR.ref,
            uR = JR._stream;
          if (void 0 !== uR) {
            uR.pendingByView.get(this.id)?.clear();
            const RR = uR.sentByView.get(this.id);
            if (void 0 !== RR && RR.size > 0) {
              const GR = JR[qR];
              let yR = this.changes.get(GR);
              void 0 === yR && (yR = new Map, this.changes.set(GR, yR));
              for (const JR of RR) yR.set(JR, tR.DELETE);
              RR.clear()
            }
          }
          return this
        }
        this.unmarkVisible(yR), this.iterable && !GR && xy(this.items, this.items.indexOf(RR));
        const ZR = yR.ref,
          iR = ZR.constructor[Symbol.metadata],
          fR = ZR[qR];
        this._touchAncestorsOf(yR);
        let VR = this.changes.get(fR);
        if (void 0 === VR && (VR = new Map, this.changes.set(fR, VR)), JR === ey) {
          const RR = yR.parent;
          if (RR && !kJ.isValidInstance(RR) && yR.isFiltered) {
            const JR = uR.isArray ? yR : yR.parentIndex,
              GR = RR[qR];
            let ZR = this.changes.get(GR);
            void 0 === ZR ? (ZR = new Map, this.changes.set(GR, ZR)) : ZR.get(JR) === tR.ADD && this._dropPendingEntries(yR), ZR.set(JR, tR.DELETE), this._recursiveDeleteVisibleChangeTree(yR)
          } else iR?.[bR]?.forEach((RR => this._removeViewField(yR, VR, RR)))
        } else {
          const RR = iR?.[vR];
          if (void 0 !== RR)
            for (let GR = JR; GR > 0; GR &= GR - 1) RR[GR & -GR]?.forEach((RR => this._removeViewField(yR, VR, RR)))
        }
        return void 0 === JR ? this.removeAllTagsOnTree(yR) : this.removeTag(yR, JR), this
      }
      has(RR) {
        return this.isVisible(RR[aR])
      }
      hasTag(RR) {
        let JR = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ey;
        return this.hasTagOnTree(RR[aR], JR)
      }
      subscribe(RR, JR) {
        const GR = RR?.[aR];
        if (!GR) return console.warn(`StateView#subscribe(): expected a Schema collection, received ${Hy(RR)}`), this;
        if (void 0 === this._root && void 0 !== GR.root && this._bindRoot(GR.root), void 0 !== JR)
          if (GR.isStreamCollection) {
            const GR = pJ(RR);
            null === JR ? GR.priorityByView?.delete(this.id) : (GR.priorityByView ??= new Map).set(this.id, JR)
          } else {
            const JR = RR?.constructor?.name ?? "collection",
              yR = GR.parent;
            if (void 0 === yR) console.warn(`StateView#subscribe(): \`priority\` ignored \u2014 this ${JR} is not attached to a state yet, so it cannot be identified as a stream. Subscribe after assigning it to the state.`);
            else {
              const RR = yR?.constructor?.[Symbol.metadata]?.[GR.parentIndex]?.name,
                tR = RR ? `${yR.constructor.name}#${RR}` : JR;
              console.warn(`StateView#subscribe(): \`priority\` ignored \u2014 ${tR} is a ${JR}, not a streaming collection. Declare the field with .stream() (e.g. t.map(X).stream()) or use t.stream(X) to enable priority batching.`)
            }
          } if (this.isSubscribed(GR)) return this;
        const yR = void 0 !== GR.parent && !this.isVisible(GR);
        if (yR ? (this.addParentOf(GR, ey), this._add(RR, ey, !1, !1)) : this.markVisible(GR), this._setSubscribed(GR), GR.isStreamCollection) {
          const JR = RR;
          GR.forEachChild(((RR, GR) => {
            xJ(JR, this.id, GR)
          }))
        } else yR || GR.forEachChild((RR => {
          this.markVisible(RR)
        }));
        return this
      }
      unsubscribe(RR) {
        const JR = RR?.[aR];
        if (!JR) return console.warn(`StateView#unsubscribe(): expected a Schema collection, received ${Hy(RR)}`), this;
        if (!this.isSubscribed(JR)) return this;
        this._clearSubscribed(JR);
        const GR = JR.ref[qR];
        if (JR.isStreamCollection) {
          const JR = RR._stream;
          if (void 0 !== JR) {
            JR.pendingByView.get(this.id)?.clear();
            const RR = JR.sentByView.get(this.id);
            if (void 0 !== RR && RR.size > 0) {
              let JR = this.changes.get(GR);
              void 0 === JR && (JR = new Map, this.changes.set(GR, JR));
              for (const GR of RR) JR.set(GR, tR.DELETE);
              RR.clear()
            }
          }
        } else {
          const RR = JR.isArray;
          let yR = this.changes.get(GR);
          JR.forEachChild(((JR, uR) => {
            void 0 === yR && (yR = new Map, this.changes.set(GR, yR)), yR.set(RR ? JR : uR, tR.DELETE), this.unmarkVisible(JR)
          }))
        }
        return this.unmarkVisible(JR), this
      }
      clear() {
        if (!this.iterable) throw new Error("StateView#clear() is only available for iterable StateView's. Use StateView(iterable: true) constructor.");
        for (let RR = 0, JR = this.items.length; RR < JR; RR++) this.remove(this.items[RR], ey, !0);
        this.items.length = 0
      }
      isChangeTreeVisible(RR) {
        let JR = this.isVisible(RR);
        if (!JR && RR.isVisibilitySharedWithParent)
          if (this.isVisible(RR.parent[aR])) this.markVisible(RR), JR = !0;
          else
            for (let GR = RR.extraParents; void 0 !== GR; GR = GR.next) {
              const yR = GR.ref[aR];
              if (yR.isFiltered && this.isVisible(yR)) {
                this.markVisible(RR), JR = !0;
                break
              }
            }
        return JR
      }
      _recursiveDeleteVisibleChangeTree(RR) {
        RR.forEachChild((RR => {
          this.unmarkVisible(RR), this._recursiveDeleteVisibleChangeTree(RR)
        }))
      }
      _dropPendingEntries(RR) {
        this.changes.delete(RR.ref[qR]), RR.forEachChild((RR => this._dropPendingEntries(RR)))
      }
      _removeViewField(RR, JR, GR) {
        const yR = JR.get(GR) === tR.ADD;
        JR.set(GR, tR.DELETE);
        const uR = RR.ref[RR.encDescriptor.names[GR]],
          ZR = uR?.[aR];
        ZR && (this.unmarkVisible(ZR), this._recursiveDeleteVisibleChangeTree(ZR), yR && this._dropPendingEntries(ZR))
      }
    }

    function cy(RR) {
      RR.structSwitchEmitted || (RR.shouldEmitSwitch && (RR.buffer[RR.it.offset++] = 255, JJ.number(RR.buffer, RR.ref[qR], RR.it)), RR.structSwitchEmitted = !0)
    }

    function Py(RR, JR) {
      zy(RR, JR, tR.ADD)
    }

    function Iy(RR, JR) {
      if (JR._fullSyncGen === RR.gen) return;
      JR._fullSyncGen = RR.gen;
      if (!RR.hasView || RR.view.isChangeTreeVisible(JR)) {
        const GR = JR.encDescriptor;
        RR.changeTree = JR, RR.ref = JR.ref, RR.encoder = GR.encoder, RR.filter = GR.filter, RR.metadata = GR.metadata, RR.treeIsFiltered = JR.isFiltered, RR.isSchema = GR.isSchema, RR.filterBitmask = GR.filterBitmask, RR.tags = GR.tags, RR.structSwitchEmitted = !1, RR.shouldEmitSwitch = RR.hasView || RR.it.offset > RR.initialOffset || JR !== RR.rootChangeTree, JR.isArray && JR.collDirty.size > 0 && (JR.flags |= 512), tG(JR, RR, Py)
      }
      nG(JR, RR, my)
    }

    function my(RR, JR, GR) {
      Iy(RR, JR)
    }

    function zy(RR, JR, GR) {
      if (JR < 0) {
        if (RR.treeIsFiltered !== RR.emitFiltered) return;
        return cy(RR), void(RR.buffer[RR.it.offset++] = 255 & Math.abs(JR))
      }
      if ((RR.isSchema ? RR.treeIsFiltered || (JR < 32 ? 0 !== (RR.filterBitmask & 1 << JR) : void 0 !== RR.tags[JR]) : RR.treeIsFiltered) !== RR.emitFiltered) return;
      const yR = RR.isEncodeAll ? tR.ADD : GR;
      void 0 !== yR && (void 0 === RR.filter || RR.filter(RR.ref, JR, RR.view)) && (cy(RR), RR.encoder(RR.self, RR.buffer, RR.changeTree, JR, yR, RR.it, RR.isEncodeAll, RR.hasView, RR.metadata))
    }

    function Sy(RR, JR) {
      const GR = new Uint8Array(RR.length + JR.length);
      return GR.set(RR, 0), GR.set(JR, RR.length), GR
    }
    class jy {
      static BUFFER_SIZE = 16384;
      sharedBuffer = new Uint8Array(jy.BUFFER_SIZE);
      context;
      state;
      root;
      constructor(RR, JR) {
        this.context = mJ.cache(RR.constructor), this.root = JR ?? new Oy(this.context), this.setState(RR)
      }
      setState(RR) {
        this.state = RR, this.state[aR].setRoot(this.root)
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
        let RR = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
            offset: 0
          },
          JR = arguments.length > 1 ? arguments[1] : void 0,
          GR = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : this.sharedBuffer,
          yR = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : RR.offset;
        return this._encodeChannel(RR, JR, GR, yR, !1)
      }
      encodeUnreliable() {
        let RR = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
            offset: 0
          },
          JR = arguments.length > 1 ? arguments[1] : void 0,
          GR = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : this.sharedBuffer,
          yR = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : RR.offset;
        return this._encodeChannel(RR, JR, GR, yR, !0)
      }
      _encodeChannel(RR, JR, GR, yR, tR) {
        this.root.pendingFilterRefresh.length > 0 && ZG(this.root);
        const uR = void 0 !== JR,
          ZR = this.state[aR],
          qR = this._encodeCtx;
        qR.self = this, qR.buffer = GR, qR.it = RR, qR.view = JR, qR.isEncodeAll = !1, qR.hasView = uR, qR.emitFiltered = uR;
        let iR = tR ? this.root.unreliableChanges : this.root.changes;
        for (; iR = iR.next;) {
          const GR = iR.changeTree;
          if (uR && !JR.isChangeTreeVisible(GR)) continue;
          const fR = tR ? GR.unreliableRecorder : GR;
          if (!fR || !fR.has()) continue;
          const VR = GR.encDescriptor;
          qR.changeTree = GR, qR.ref = GR.ref, qR.encoder = VR.encoder, qR.filter = VR.filter, qR.metadata = VR.metadata, qR.treeIsFiltered = GR.isFiltered, qR.isSchema = VR.isSchema, qR.filterBitmask = VR.filterBitmask, qR.tags = VR.tags, qR.structSwitchEmitted = !1, qR.isRootTree = GR === ZR, qR.shouldEmitSwitch = uR || RR.offset > yR || !qR.isRootTree, fR.forEachWithCtx(qR, zy)
        }
        return tR || uR || !this._isStreamBroadcastMode || this._emitStreamBroadcast(GR, RR), RR.offset > GR.byteLength ? (GR = this._resizeBuffer(GR, RR.offset), RR.offset = yR, this._encodeChannel(RR, JR, GR, yR, tR)) : GR.subarray(0, RR.offset)
      }
      encodeFullSync(RR, JR, GR, yR) {
        let tR = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : RR.offset;
        this.root.pendingFilterRefresh.length > 0 && ZG(this.root);
        const uR = void 0 !== yR,
          ZR = this.state[aR],
          qR = this._encodeCtx;
        return qR.self = this, qR.buffer = JR, qR.it = RR, qR.view = yR, qR.isEncodeAll = !0, qR.hasView = uR, qR.emitFiltered = GR, qR.gen = ++this._fullSyncGen, qR.initialOffset = tR, qR.rootChangeTree = ZR, Iy(qR, ZR), RR.offset > JR.byteLength ? (JR = this._resizeBuffer(JR, RR.offset), RR.offset = tR, this.encodeFullSync(RR, JR, GR, yR, tR)) : JR.subarray(0, RR.offset)
      }
      _resizeBuffer(RR, JR) {
        const GR = Math.ceil(JR / jy.BUFFER_SIZE) * jy.BUFFER_SIZE,
          yR = new Uint8Array(GR);
        return yR.set(RR), RR === this.sharedBuffer && (this.sharedBuffer = yR), yR
      }
      encodeAll() {
        let RR = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
            offset: 0
          },
          JR = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.sharedBuffer;
        return this.encodeFullSync(RR, JR, !1)
      }
      encodeAllView(RR, JR, GR) {
        let yR = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : this.sharedBuffer;
        const tR = GR.offset;
        return yR = this.encodeFullSync(GR, yR, !0, RR, tR), Sy(yR.subarray(0, JR), yR.subarray(tR, GR.offset))
      }
      ensureCapacity(RR, JR) {
        if (JR + jy.BUFFER_SIZE <= RR.byteLength) return RR;
        const GR = Math.ceil((JR + jy.BUFFER_SIZE) / jy.BUFFER_SIZE) * jy.BUFFER_SIZE,
          yR = new Uint8Array(GR);
        return yR.set(RR.subarray(0, JR)), RR === this.sharedBuffer && (this.sharedBuffer = yR), yR
      }
      encodeView(RR, JR, GR) {
        let yR = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : this.sharedBuffer,
          uR = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4];
        const ZR = GR.offset;
        this._emitStreamPriority(RR);
        for (const iR of RR.changes.keys()) {
          const JR = RR.changes.get(iR),
            uR = this.root.changeTrees[iR];
          if (void 0 === uR) {
            RR.changes.delete(iR);
            continue
          }
          if (0 === JR.size) continue;
          const ZR = uR.encDescriptor,
            fR = ZR.encoder,
            VR = ZR.metadata,
            KR = uR.ref,
            rR = uR.refTarget;
          yR = this.ensureCapacity(yR, GR.offset), yR[GR.offset++] = 255, JJ.number(yR, KR[qR], GR);
          for (const [iR, eR] of JR) {
            let JR;
            if (-1 === iR) {
              const RR = rR.tmpItems,
                JR = rR.deletedIndexes;
              for (let ZR = 0; ZR < RR.length; ZR++) void 0 !== RR[ZR] && !0 !== JR[ZR] && fR(this, yR, uR, ZR, tR.ADD, GR, !1, !0, VR);
              continue
            }
            if ("number" === typeof iR) JR = iR;
            else {
              const GR = iR.indexInParent(KR);
              if (void 0 === GR) continue;
              if (JR = GR, eR === tR.ADD && uR.getChange(JR) === tR.DELETE) {
                RR.changes.delete(iR.ref[qR]);
                continue
              }
            }
            fR(this, yR, uR, JR, void 0 !== rR[wR](JR) && eR || tR.DELETE, GR, !1, !0, VR)
          }
        }
        return RR.changes.clear(), yR = this.encode(GR, RR, yR), uR ? Sy(yR.subarray(0, JR), yR.subarray(ZR, GR.offset)) : yR.subarray(ZR, GR.offset)
      }
      encodeUnreliableView(RR, JR, GR) {
        let yR = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : this.sharedBuffer;
        const tR = GR.offset;
        return yR = this.encodeUnreliable(GR, RR, yR, tR), Sy(yR.subarray(0, JR), yR.subarray(tR, GR.offset))
      }
      _emitStreamBroadcast(RR, JR) {
        const GR = this.root.streamTrees;
        for (const yR of GR) {
          const GR = yR,
            uR = GR[aR],
            ZR = GR[qR];
          if (void 0 === ZR) continue;
          const iR = GR._stream,
            fR = iR.broadcastDeletes,
            VR = iR.broadcastPending,
            KR = iR.sentBroadcast,
            rR = fR.size > 0,
            eR = VR.size > 0,
            LR = uR.encDescriptor,
            nR = LR.encoder,
            UR = LR.metadata;
          if (rR || eR) {
            if (RR[JR.offset++] = 255, JJ.number(RR, ZR, JR), rR) {
              for (const GR of fR) nR(this, RR, uR, GR, tR.DELETE, JR, !1, !1, UR);
              fR.clear()
            }
            const yR = iR.maxPerTick,
              eR = [];
            let LR = 0;
            const WR = [];
            for (const ZR of VR) {
              if (LR >= yR) break;
              const qR = GR[wR](ZR);
              void 0 !== qR ? (nR(this, RR, uR, ZR, tR.ADD, JR, !1, !1, UR), KR.add(ZR), eR.push(qR), WR.push(ZR), LR++) : WR.push(ZR)
            }
            for (const RR of WR) VR.delete(RR);
            for (const GR of eR) {
              const yR = GR[aR];
              if (void 0 === yR) continue;
              const uR = GR[qR];
              if (void 0 === uR) continue;
              RR[JR.offset++] = 255, JJ.number(RR, uR, JR);
              const ZR = yR.encDescriptor,
                iR = ZR.encoder,
                fR = ZR.metadata;
              yR.forEachLive((GR => {
                kJ.hasUnreliableAtIndex(fR, GR) || iR(this, RR, yR, GR, tR.ADD, JR, !1, !1, fR)
              }))
            }
          }
          for (const yR of KR) {
            const tR = GR[wR](yR);
            if (void 0 === tR) continue;
            const uR = tR[aR];
            if (void 0 === uR || !uR.has()) continue;
            const ZR = tR[qR];
            if (void 0 === ZR) continue;
            RR[JR.offset++] = 255, JJ.number(RR, ZR, JR);
            const iR = uR.encDescriptor,
              fR = iR.encoder,
              VR = iR.metadata;
            uR.forEach(((GR, yR) => {
              GR < 0 || kJ.hasUnreliableAtIndex(VR, GR) || fR(this, RR, uR, GR, yR, JR, !1, !1, VR)
            }))
          }
        }
      }
      _emitStreamPriority(RR) {
        const JR = this.root.streamTrees;
        if (0 === JR.size) return;
        const GR = RR.id;
        for (const yR of JR) {
          const JR = yR,
            uR = JR._stream,
            ZR = uR.pendingByView.get(GR);
          if (void 0 === ZR || 0 === ZR.size) continue;
          const iR = uR.priorityByView?.get(GR),
            fR = void 0 !== iR,
            VR = uR.priority,
            KR = uR.maxPerTick,
            rR = [],
            eR = [];
          if (fR || void 0 !== VR) {
            const GR = [],
              yR = [];
            let tR = 0;
            for (const uR of ZR) {
              const ZR = JR[wR](uR);
              if (void 0 === ZR) {
                eR.push(uR);
                continue
              }
              const qR = fR ? iR(ZR) : VR(RR, ZR);
              if (tR < KR) {
                let RR = tR++;
                for (; RR > 0 && yR[RR - 1] < qR;) yR[RR] = yR[RR - 1], GR[RR] = GR[RR - 1], RR--;
                yR[RR] = qR, GR[RR] = uR
              } else if (qR > yR[KR - 1]) {
                let RR = KR - 1;
                for (; RR > 0 && yR[RR - 1] < qR;) yR[RR] = yR[RR - 1], GR[RR] = GR[RR - 1], RR--;
                yR[RR] = qR, GR[RR] = uR
              }
            }
            for (let RR = 0; RR < tR; RR++) rR.push(GR[RR])
          } else
            for (const RR of ZR) {
              if (rR.length >= KR) break;
              rR.push(RR)
            }
          for (const RR of eR) ZR.delete(RR);
          const LR = rR.length;
          let nR = uR.sentByView.get(GR);
          void 0 === nR && (nR = new Set, uR.sentByView.set(GR, nR));
          for (let GR = 0; GR < LR; GR++) {
            const yR = rR[GR],
              uR = JR[wR](yR);
            if (void 0 === uR) {
              ZR.delete(yR);
              continue
            }
            RR._addImmediate(uR);
            const iR = uR[aR];
            if (void 0 !== iR) {
              const JR = uR[qR];
              let GR = RR.changes.get(JR);
              void 0 === GR && (GR = new Map, RR.changes.set(JR, GR));
              const yR = iR.metadata;
              iR.forEachLive((RR => {
                kJ.hasUnreliableAtIndex(yR, RR) || GR.set(RR, tR.ADD)
              }))
            }
            ZR.delete(yR), nR.add(yR)
          }
        }
      }
      discardChanges() {
        const RR = this.root.changes;
        let JR = RR.next;
        const GR = this.root;
        for (; JR;) {
          const RR = JR.next;
          JR.changeTree.endEncode(), GR.releaseNode(JR), JR = RR
        }
        RR.next = void 0, RR.tail = void 0
      }
      discardUnreliableChanges() {
        const RR = this.root.unreliableChanges;
        let JR = RR.next;
        const GR = this.root;
        for (; JR;) {
          const RR = JR.next;
          JR.changeTree.endEncodeUnreliable(), GR.releaseNode(JR), JR = RR
        }
        RR.next = void 0, RR.tail = void 0
      }
      tryEncodeTypeId(RR, JR, GR, yR) {
        const tR = this.context.getTypeId(JR),
          uR = this.context.getTypeId(GR);
        void 0 !== uR ? tR !== uR && (RR[yR.offset++] = 213, JJ.number(RR, uR, yR)) : console.warn(`@colyseus/schema WARNING: Class "${GR.name}" is not registered on TypeRegistry - Please either tag the class with @entity or define a @type() field.`)
      }
      get hasChanges() {
        return void 0 !== this.root.changes.next || this._hasStreamBacklog()
      }
      get _isStreamBroadcastMode() {
        return 0 === this.root.activeViews.size && this.root.streamTrees.size > 0
      }
      _hasStreamBacklog() {
        const RR = this.root;
        if (0 === RR.streamTrees.size) return !1;
        const JR = 0 === RR.activeViews.size;
        for (const GR of RR.streamTrees)
          if (JR ? OJ(GR) : vJ(GR, RR)) return !0;
        return !1
      }
      get hasUnreliableChanges() {
        return void 0 !== this.root.unreliableChanges.next
      }
    }
    class dy extends Error {
      constructor(RR) {
        super(RR), this.name = "DecodingWarning"
      }
    }
    const Ey = {
      value: 0,
      enumerable: !1,
      writable: !0
    };
    class Yy {
      refs = new Map;
      refCount = {};
      deletedRefs = new Set;
      callbacks = {};
      nextUniqueId = 0;
      getNextUniqueId() {
        return this.nextUniqueId++
      }
      addRef(RR, JR) {
        let GR = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        this.refs.set(RR, JR), void 0 === JR[qR] ? (Ey.value = RR, Object.defineProperty(JR, qR, Ey)) : JR[qR] !== RR && (JR[qR] = RR), GR && (this.refCount[RR] = (this.refCount[RR] || 0) + 1), this.deletedRefs.has(RR) && this.deletedRefs.delete(RR)
      }
      removeRef(RR) {
        const JR = this.refCount[RR];
        if (void 0 !== JR)
          if (0 !== JR)(this.refCount[RR] = JR - 1) <= 0 && this.deletedRefs.add(RR);
          else try {
            const JR = this.refs.get(RR);
            throw new dy(`trying to remove refId '${RR}' with 0 refCount (${JR.constructor.name}: ${JSON.stringify(JR)})`)
          } catch (ut) {
            console.warn(ut)
          } else try {
            throw new dy("trying to remove refId that doesn't exist: " + RR)
          } catch (ut) {
            console.warn(ut)
          }
      }
      clearRefs() {
        this.refs.clear(), this.deletedRefs.clear(), this.callbacks = {}, this.refCount = {}
      }
      garbageCollectDeletedRefs() {
        this.deletedRefs.forEach((RR => {
          if (this.refCount[RR] > 0) return;
          const JR = this.refs.get(RR),
            GR = JR.constructor[Symbol.metadata];
          if (null != GR)
            for (const yR in GR) {
              const RR = JR[GR[yR].name];
              if ("object" === typeof RR && RR) {
                const JR = RR[qR];
                void 0 === JR || this.deletedRefs.has(JR) || this.removeRef(JR)
              }
            } else "function" === typeof JR[LR] && Array.from(JR.values()).forEach((RR => {
              const JR = RR[qR];
              void 0 === JR || this.deletedRefs.has(JR) || this.removeRef(JR)
            }));
          this.refs.delete(RR), delete this.refCount[RR], delete this.callbacks[RR]
        })), this.deletedRefs.clear()
      }
      addCallback(RR, JR, GR) {
        if (void 0 === RR) {
          const RR = "number" === typeof JR ? tR[JR] : JR;
          throw new Error(`Can't addCallback on '${RR}' (refId is undefined)`)
        }
        return this.callbacks[RR] || (this.callbacks[RR] = {}), this.callbacks[RR][JR] || (this.callbacks[RR][JR] = []), this.callbacks[RR][JR].push(GR), () => this.removeCallback(RR, JR, GR)
      }
      removeCallback(RR, JR, GR) {
        const yR = this.callbacks?.[RR]?.[JR]?.indexOf(GR);
        void 0 !== yR && -1 !== yR && xy(this.callbacks[RR][JR], yR)
      }
    }
    class ky {
      context;
      state;
      root;
      currentRefId = 0;
      jD;
      resyncVisited = null;
      resyncDamaged = !1;
      constructor(RR, JR) {
        this.setState(RR), this.context = JR || new mJ(RR.constructor)
      }
      setState(RR) {
        this.state = RR, this.root = new Yy, this.root.addRef(0, RR)
      }
      decode(RR) {
        let JR = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
            offset: 0
          },
          GR = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : this.state;
        const tR = void 0 !== this.jD ? [] : null,
          uR = this.root,
          ZR = RR.byteLength;
        let qR = GR.constructor[VR];
        for (this.currentRefId = 0; JR.offset < ZR;) {
          if (RR[JR.offset] == yR) {
            JR.offset++, GR[AR]?.();
            const yR = WJ.number(RR, JR),
              tR = uR.refs.get(yR);
            tR ? (GR = tR, qR = GR.constructor[VR], this.currentRefId = yR) : (console.error(`"refId" not found: ${yR}`, {
              previousRef: GR,
              previousRefId: this.currentRefId
            }), console.warn("Please report this issue to the developers."), this.skipCurrentStructure(RR, JR, ZR));
            continue
          } - 1 !== qR(this, RR, JR, GR, tR) || (console.warn("@colyseus/schema: definition mismatch"), this.skipCurrentStructure(RR, JR, ZR))
        }
        return GR[AR]?.(), null !== this.resyncVisited && function(RR, JR) {
          RR.resyncDamaged ? console.warn("@colyseus/schema: resync sweep skipped \u2014 parts of the payload could not be decoded. Stale entries may persist until the next resync.") : mG(RR, RR.state, new Set, JR)
        }(this, tR), null !== tR && this.jD?.(tR), uR.garbageCollectDeletedRefs(), tR
      }
      decodeResync(RR) {
        let JR = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
          offset: 0
        };
        this.resyncVisited = new Map, this.resyncDamaged = !1;
        try {
          return this.decode(RR, JR)
        } finally {
          this.resyncVisited = null
        }
      }
      skipCurrentStructure(RR, JR, GR) {
        null !== this.resyncVisited && (this.resyncDamaged = !0);
        const tR = {
          offset: JR.offset
        };
        for (; JR.offset < GR && (RR[JR.offset] !== yR || (tR.offset = JR.offset + 1, !this.root.refs.has(WJ.number(RR, tR))));) JR.offset++
      }
      getInstanceType(RR, JR, GR) {
        let yR;
        if (213 === RR[JR.offset]) {
          JR.offset++;
          const GR = WJ.number(RR, JR);
          yR = this.context.get(GR)
        }
        return yR || GR
      }
      createInstanceOfType(RR) {
        return RR.initializeForDecoder()
      }
      removeChildRefs(RR, JR) {
        const GR = "string" !== typeof RR[LR],
          yR = RR[qR];
        RR.forEach(((uR, ZR) => {
          JR?.push({
            ref: RR,
            refId: yR,
            op: tR.DELETE,
            field: ZR,
            value: void 0,
            previousValue: uR
          }), GR && this.root.removeRef(uR[qR])
        }))
      }
    }
    const Qy = py({
        min: ry.float64(),
        max: ry.float64(),
        bits: ry.uint8(),
        mode: ry.uint8()
      }, "QuantizedDescriptor"),
      Fy = py({
        name: ry.string(),
        type: ry.string(),
        referencedType: ry.number(),
        childPrimitive: ry.string(),
        quantized: ry.ref(Qy).optional()
      }, "ReflectionField"),
      Ty = py({
        id: ry.number(),
        extendsId: ry.number(),
        fields: ry.array(Fy)
      }, "ReflectionType"),
      sy = py({
        types: ry.array(Ty),
        rootType: ry.number()
      }, "Reflection");

    function hy(RR) {
      const JR = RR.root,
        GR = JR.callbacks,
        yR = new WeakMap;
      let uR;

      function ZR(RR, GR) {
        let fR = GR.instance?.constructor[Symbol.metadata] || RR,
          VR = GR.instance && "function" === typeof GR.instance.forEach || RR && !by.is(RR);
        if (fR && !VR) {
          const RR = function(RR, tR, ZR, iR) {
            return iR && void 0 !== GR.instance[tR] && !yR.has(uR) && ZR(GR.instance[tR], void 0), JR.addCallback(RR[qR], tR, ZR)
          };
          return new Proxy({
            listen: function(JR, tR) {
              let ZR = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
              if (GR.instance) return RR(GR.instance, JR, tR, ZR);
              {
                let qR = () => {};
                return GR.onInstanceAvailable(((GR, iR) => {
                  qR = RR(GR, JR, tR, ZR && iR && !yR.has(uR))
                })), () => qR()
              }
            },
            onChange: function(RR) {
              return JR.addCallback(GR.instance[qR], tR.REPLACE, RR)
            },
            bindTo: function(RR, yR) {
              return yR || (yR = Object.keys(fR).map((RR => fR[RR].name))), JR.addCallback(GR.instance[qR], tR.REPLACE, (() => {
                yR.forEach((JR => RR[JR] = GR.instance[JR]))
              }))
            }
          }, {
            get(RR, JR) {
              const yR = fR[fR[JR]];
              if (yR) {
                const RR = GR.instance?.[JR],
                  tR = yR => {
                    const tR = iR(GR.instance).listen(JR, ((RR, JR) => {
                      yR(RR, !1), tR?.()
                    }), !1);
                    void 0 !== RR?.[qR] && yR(RR, !0)
                  };
                return ZR(yR.type, {
                  instance: void 0 !== RR?.[qR] && RR,
                  parentInstance: GR.instance,
                  onInstanceAvailable: tR
                })
              }
              return RR[JR]
            },
            has: (RR, JR) => void 0 !== fR[JR],
            set(RR, JR, GR) {
              throw new Error("not allowed")
            },
            deleteProperty(RR, JR) {
              throw new Error("not allowed")
            }
          })
        } {
          const RR = function(RR, GR, ZR) {
              return ZR && RR.forEach(((RR, JR) => GR(RR, JR))), JR.addCallback(RR[qR], tR.ADD, ((RR, JR) => {
                yR.set(GR, !0), uR = GR, GR(RR, JR), yR.delete(GR), uR = void 0
              }))
            },
            ZR = function(RR, GR) {
              return JR.addCallback(RR[qR], tR.DELETE, GR)
            },
            iR = function(RR, GR) {
              return JR.addCallback(RR[qR], tR.REPLACE, GR)
            };
          return new Proxy({
            mC: function(JR) {
              let tR = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
              if (GR.instance) return RR(GR.instance, JR, tR && !yR.has(uR));
              if (GR.onInstanceAvailable) {
                let ZR = () => {};
                return GR.onInstanceAvailable(((GR, qR) => {
                  ZR = RR(GR, JR, tR && qR && !yR.has(uR))
                })), () => ZR()
              }
            },
            eD: function(RR) {
              if (GR.instance) return ZR(GR.instance, RR);
              if (GR.onInstanceAvailable) {
                let JR = () => {};
                return GR.onInstanceAvailable((GR => {
                  JR = ZR(GR, RR)
                })), () => JR()
              }
            },
            onChange: function(RR) {
              if (GR.instance) return iR(GR.instance, RR);
              if (GR.onInstanceAvailable) {
                let JR = () => {};
                return GR.onInstanceAvailable((GR => {
                  JR = iR(GR, RR)
                })), () => JR()
              }
            }
          }, {
            get(RR, JR) {
              if (!RR[JR]) throw new Error(`Can't access '${JR}' through callback proxy. access the instance directly.`);
              return RR[JR]
            },
            has: (RR, JR) => void 0 !== RR[JR],
            set(RR, JR, GR) {
              throw new Error("not allowed")
            },
            deleteProperty(RR, JR) {
              throw new Error("not allowed")
            }
          })
        }
      }

      function iR(RR) {
        return ZR(void 0, {
          instance: RR
        })
      }
      return RR.jD = function(RR) {
        const JR = new Set;
        for (let yR = 0, uR = RR.length; yR < uR; yR++) {
          const uR = RR[yR],
            ZR = uR.refId,
            iR = uR.ref,
            fR = GR[ZR];
          if (fR) {
            if ((uR.op & tR.DELETE) === tR.DELETE && by.isSchema(uR.previousValue)) {
              const RR = GR[uR.previousValue[qR]]?.[tR.DELETE];
              for (let JR = RR?.length - 1; JR >= 0; JR--) RR[JR]()
            }
            if (by.isSchema(iR)) {
              if (!JR.has(ZR)) {
                const RR = fR?.[tR.REPLACE];
                for (let JR = RR?.length - 1; JR >= 0; JR--) RR[JR]()
              }
              if (fR.hasOwnProperty(uR.field)) {
                const RR = fR[uR.field];
                for (let JR = RR?.length - 1; JR >= 0; JR--) RR[JR](uR.value, uR.previousValue)
              }
            } else {
              if ((uR.op & tR.DELETE) === tR.DELETE) {
                if (void 0 !== uR.previousValue) {
                  const RR = fR[tR.DELETE];
                  for (let JR = RR?.length - 1; JR >= 0; JR--) RR[JR](uR.previousValue, uR.dynamicIndex ?? uR.field)
                }
                if ((uR.op & tR.ADD) === tR.ADD) {
                  const RR = fR[tR.ADD];
                  for (let JR = RR?.length - 1; JR >= 0; JR--) RR[JR](uR.value, uR.dynamicIndex ?? uR.field)
                }
              } else if ((uR.op & tR.ADD) === tR.ADD && uR.previousValue !== uR.value) {
                const RR = fR[tR.ADD];
                for (let JR = RR?.length - 1; JR >= 0; JR--) RR[JR](uR.value, uR.dynamicIndex ?? uR.field)
              }
              if (uR.value !== uR.previousValue && (void 0 !== uR.value || void 0 !== uR.previousValue)) {
                const RR = fR[tR.REPLACE];
                for (let JR = RR?.length - 1; JR >= 0; JR--) RR[JR](uR.value, uR.dynamicIndex ?? uR.field)
              }
            }
            JR.add(ZR)
          }
        }
      }, iR
    }

    function Rt(RR, JR) {
      RR.jD = JR
    }
    sy.encode = function(RR) {
      let JR = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
        offset: 0
      };
      const GR = RR.context,
        yR = new sy,
        tR = new jy(yR),
        uR = GR.schemas.get(RR.state.constructor);
      uR > 0 && (yR.rootType = uR);
      const ZR = new Set,
        qR = {},
        iR = RR => {
          if (void 0 === RR.extendsId || ZR.has(RR.extendsId)) {
            ZR.add(RR.id), yR.types.push(RR);
            const JR = qR[RR.id];
            void 0 !== JR && (delete qR[RR.id], JR.forEach((RR => iR(RR))))
          } else void 0 === qR[RR.extendsId] && (qR[RR.extendsId] = []), qR[RR.extendsId].push(RR)
        };
      GR.schemas.forEach(((RR, JR) => {
        const yR = new Ty;
        yR.id = Number(RR);
        const tR = Object.getPrototypeOf(JR);
        tR !== by && (yR.extendsId = GR.schemas.get(tR));
        const uR = JR[Symbol.metadata];
        if (uR !== tR[Symbol.metadata]) {
          const RR = uR[pR] ?? -1;
          for (let JR = 0; JR <= RR; JR++) {
            const RR = uR[JR];
            if (void 0 === RR) continue;
            const tR = RR.name;
            if (!Object.prototype.hasOwnProperty.call(uR, tR)) continue;
            const ZR = new Fy;
            let qR;
            if (ZR.name = tR, "string" === typeof RR.type) qR = RR.type;
            else if (oJ(RR.type)) {
              const JR = RR.type.quantized;
              qR = "quantized";
              const GR = new Qy;
              GR.min = JR.min, GR.max = JR.max, GR.bits = JR.bits, GR.mode = JR.wrap ? 1 : 0, ZR.quantized = GR
            } else {
              let JR;
              by.is(RR.type) ? (qR = "ref", JR = RR.type) : (qR = Object.keys(RR.type)[0], "string" === typeof RR.type[qR] ? ZR.childPrimitive = RR.type[qR] : JR = RR.type[qR]), ZR.referencedType = JR ? GR.getTypeId(JR) : -1
            }
            ZR.type = qR, yR.fields.push(ZR)
          }
        }
        iR(yR)
      }));
      for (const fR in qR) qR[fR].forEach((RR => yR.types.push(RR)));
      return tR.encodeAll(JR).slice(0, JR.offset)
    }, sy.decode = function(RR, JR) {
      const GR = new sy;
      new ky(GR).decode(RR, JR);
      const yR = new mJ;
      GR.types.forEach((RR => {
        const JR = yR.get(RR.extendsId) ?? by,
          GR = class extends JR {};
        mJ.register(GR), yR.add(GR, RR.id)
      }), {});
      GR.types.forEach((RR => {
        const JR = yR.get(RR.id),
          tR = kJ.initialize(JR),
          uR = [];
        let ZR = RR;
        do {
          uR.push(ZR), ZR = GR.types.find((RR => RR.id === ZR.extendsId))
        } while (ZR);
        let qR = 0;
        uR.reverse().forEach((RR => {
          ((RR, JR, GR) => {
            JR.fields.forEach(((JR, tR) => {
              const uR = GR + tR;
              if (void 0 !== JR.quantized) {
                const GR = JR.quantized;
                kJ.addField(RR, uR, JR.name, {
                  quantized: HJ({
                    min: GR.min,
                    max: GR.max,
                    bits: GR.bits,
                    mode: 1 === GR.mode ? "wrap" : "clamp"
                  })
                })
              } else if (void 0 !== JR.referencedType) {
                const GR = JR.type,
                  tR = yR.get(JR.referencedType) ?? JR.childPrimitive;
                "ref" === GR ? kJ.addField(RR, uR, JR.name, tR) : kJ.addField(RR, uR, JR.name, {
                  [GR]: tR
                })
              } else kJ.addField(RR, uR, JR.name, JR.type)
            }))
          })(tR, RR, qR), qR += RR.fields.length
        }))
      }));
      const tR = new(yR.get(GR.rootType || 0));
      return new ky(tR, yR)
    }, sy.makeEncodable = function(RR) {
      const JR = RR[Symbol.metadata];
      if (!JR) return RR;
      const GR = JR[pR];
      if (void 0 === GR) return RR;
      for (let yR = 0; yR <= GR; yR++) {
        const GR = JR[yR];
        GR && kJ.defineField(RR, JR, yR, GR.name, GR.type)
      }
      return Object.prototype.hasOwnProperty.call(RR, BR) && delete RR[BR], RR
    };
    class Jt {
      VK;
      uniqueRefIds = new Set;
      isTriggering = !1;
      constructor(RR) {
        this.VK = RR, this.VK.jD = this.jD.bind(this)
      }
      get callbacks() {
        return this.VK.root.callbacks
      }
      get state() {
        return this.VK.state
      }
      addCallback(RR, JR, GR) {
        return this.VK.root.addCallback(RR, JR, GR)
      }
      addCallbackOrWaitCollectionAvailable(RR, JR, GR, yR) {
        let uR = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4],
          ZR = () => {};
        const iR = () => ZR(),
          fR = RR[JR];
        if (fR && void 0 !== fR[qR]) return uR = uR && !1 === this.isTriggering, GR === tR.ADD && uR && fR.forEach(((RR, JR) => {
          yR(RR, JR)
        })), this.addCallback(fR[qR], GR, yR);
        {
          let tR;
          return tR = this.addCallback(RR[qR], JR, ((RR, JR) => {
            null !== RR && void 0 !== RR && (tR(), ZR = this.addCallback(RR[qR], GR, yR))
          })), ZR = tR, iR
        }
      }
      listen() {
        return "string" === typeof(arguments.length <= 0 ? void 0 : arguments[0]) ? this.listenInstance(this.state, arguments.length <= 0 ? void 0 : arguments[0], arguments.length <= 1 ? void 0 : arguments[1], arguments.length <= 2 ? void 0 : arguments[2]) : this.listenInstance(arguments.length <= 0 ? void 0 : arguments[0], arguments.length <= 1 ? void 0 : arguments[1], arguments.length <= 2 ? void 0 : arguments[2], arguments.length <= 3 ? void 0 : arguments[3])
      }
      listenInstance(RR, JR, GR) {
        let yR = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
        yR = yR && !1 === this.isTriggering;
        const tR = RR[JR];
        return yR && null !== tR && void 0 !== tR && GR(tR, void 0), this.addCallback(RR[qR], JR, GR)
      }
      onChange() {
        if (2 === arguments.length && "string" !== typeof(arguments.length <= 0 ? void 0 : arguments[0])) {
          const RR = arguments.length <= 0 ? void 0 : arguments[0],
            JR = arguments.length <= 1 ? void 0 : arguments[1];
          return this.addCallback(RR[qR], tR.REPLACE, JR)
        }
        return "string" === typeof(arguments.length <= 0 ? void 0 : arguments[0]) ? this.addCallbackOrWaitCollectionAvailable(this.state, arguments.length <= 0 ? void 0 : arguments[0], tR.REPLACE, arguments.length <= 1 ? void 0 : arguments[1]) : this.addCallbackOrWaitCollectionAvailable(arguments.length <= 0 ? void 0 : arguments[0], arguments.length <= 1 ? void 0 : arguments[1], tR.REPLACE, arguments.length <= 2 ? void 0 : arguments[2])
      }
      mC() {
        return "string" === typeof(arguments.length <= 0 ? void 0 : arguments[0]) ? this.addCallbackOrWaitCollectionAvailable(this.state, arguments.length <= 0 ? void 0 : arguments[0], tR.ADD, arguments.length <= 1 ? void 0 : arguments[1], !1 !== (arguments.length <= 2 ? void 0 : arguments[2])) : this.addCallbackOrWaitCollectionAvailable(arguments.length <= 0 ? void 0 : arguments[0], arguments.length <= 1 ? void 0 : arguments[1], tR.ADD, arguments.length <= 2 ? void 0 : arguments[2], !1 !== (arguments.length <= 3 ? void 0 : arguments[3]))
      }
      eD() {
        return "string" === typeof(arguments.length <= 0 ? void 0 : arguments[0]) ? this.addCallbackOrWaitCollectionAvailable(this.state, arguments.length <= 0 ? void 0 : arguments[0], tR.DELETE, arguments.length <= 1 ? void 0 : arguments[1]) : this.addCallbackOrWaitCollectionAvailable(arguments.length <= 0 ? void 0 : arguments[0], arguments.length <= 1 ? void 0 : arguments[1], tR.DELETE, arguments.length <= 2 ? void 0 : arguments[2])
      }
      bindTo(RR, JR, GR) {
        let yR = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
        const uR = RR.constructor[Symbol.metadata];
        GR || (GR = Object.keys(uR).filter((RR => !isNaN(Number(RR)))).map((RR => uR[RR].name)));
        const ZR = () => {
          for (const yR of GR) {
            const GR = RR[yR];
            void 0 !== GR && (JR[yR] = GR)
          }
        };
        return yR && ZR(), this.addCallback(RR[qR], tR.REPLACE, ZR)
      }
      jD(RR) {
        this.uniqueRefIds.clear(), this.isTriggering = !0;
        for (let JR = 0, GR = RR.length; JR < GR; JR++) {
          const GR = RR[JR],
            yR = GR.refId,
            uR = GR.ref,
            ZR = this.callbacks[yR];
          if (ZR) {
            if ((GR.op & tR.DELETE) === tR.DELETE && by.isSchema(GR.previousValue)) {
              const RR = GR.previousValue[qR],
                JR = this.callbacks[RR]?.[tR.DELETE];
              if (JR)
                for (let GR = JR.length - 1; GR >= 0; GR--) try {
                  JR[GR]()
                } catch (ut) {
                  console.error(ut)
                }
            }
            if (by.isSchema(uR)) {
              if (!this.uniqueRefIds.has(yR)) {
                const RR = ZR[tR.REPLACE];
                if (RR)
                  for (let JR = RR.length - 1; JR >= 0; JR--) try {
                    RR[JR]()
                  } catch (ut) {
                    console.error(ut)
                  }
              }
              const RR = ZR[GR.field];
              if (RR)
                for (let JR = RR.length - 1; JR >= 0; JR--) try {
                  RR[JR](GR.value, GR.previousValue)
                } catch (ut) {
                  console.error(ut)
                }
            } else {
              const RR = GR.dynamicIndex ?? GR.field;
              if ((GR.op & tR.DELETE) === tR.DELETE) {
                if (void 0 !== GR.previousValue) {
                  const JR = ZR[tR.DELETE];
                  if (JR)
                    for (let yR = JR.length - 1; yR >= 0; yR--) try {
                      JR[yR](GR.previousValue, RR)
                    } catch (ut) {
                      console.error(ut)
                    }
                }
                if ((GR.op & tR.ADD) === tR.ADD) {
                  const JR = ZR[tR.ADD];
                  if (JR)
                    for (let yR = JR.length - 1; yR >= 0; yR--) try {
                      JR[yR](GR.value, RR)
                    } catch (ut) {
                      console.error(ut)
                    }
                }
              } else if ((GR.op & tR.ADD) === tR.ADD && GR.previousValue !== GR.value) {
                const JR = ZR[tR.ADD];
                if (JR)
                  for (let yR = JR.length - 1; yR >= 0; yR--) try {
                    JR[yR](GR.value, RR)
                  } catch (ut) {
                    console.error(ut)
                  }
              }
              if (GR.value !== GR.previousValue) {
                const JR = ZR[tR.REPLACE];
                if (JR)
                  for (let yR = JR.length - 1; yR >= 0; yR--) try {
                    JR[yR](RR, GR.value)
                  } catch (ut) {
                    console.error(ut)
                  }
              }
            }
            this.uniqueRefIds.add(yR)
          }
        }
        this.isTriggering = !1
      }
    }
    const Gt = {
      get(RR) {
        if (RR instanceof ky) return new Jt(RR);
        if ("VK" in RR.jU) return new Jt(RR.jU.VK);
        throw new Error("Invalid room or decoder")
      },
      getLegacy(RR) {
        if (RR instanceof ky) return hy(RR);
        if ("VK" in RR.jU) return hy(RR.jU.VK);
        throw new Error("Invalid room or decoder")
      },
      getRawChanges: (RR, JR) => Rt(RR, JR)
    };
    class yt {
      _free = [];
      _factory;
      _maxSize;
      constructor(RR) {
        let JR = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        this._factory = RR, this._maxSize = JR.maxSize ?? 1 / 0;
        const GR = JR.preallocate ?? 0;
        for (let yR = 0; yR < GR; yR++) this._free.push(RR())
      }
      acquire() {
        return this._free.length > 0 ? this._free.pop() : this._factory()
      }
      release(RR) {
        by.reset(RR), this._free.length < this._maxSize && this._free.push(RR)
      }
      get size() {
        return this._free.length
      }
    }

    function tt(RR) {
      return new yt((() => new RR), arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {})
    }
    XJ("map", {
      constructor: ty
    }), XJ("array", {
      constructor: Gy
    }), XJ("set", {
      constructor: Zy
    }), XJ("collection", {
      constructor: uy
    })
  },
  10474: (RR, JR, GR) => {
    GR.r(JR), GR.d(JR, {
      __addDisposableResource: () => oR,
      __assign: () => uR,
      __asyncDelegator: () => lR,
      __asyncGenerator: () => BR,
      __asyncValues: () => pR,
      __await: () => MR,
      __awaiter: () => eR,
      __classPrivateFieldGet: () => NR,
      __classPrivateFieldIn: () => HR,
      __classPrivateFieldSet: () => DR,
      __createBinding: () => LR,
      __decorate: () => qR,
      __disposeResources: () => PR,
      __esDecorate: () => fR,
      __exportStar: () => nR,
      __extends: () => tR,
      __generator: () => aR,
      __importDefault: () => xR,
      __importStar: () => OR,
      __makeTemplateObject: () => gR,
      __metadata: () => rR,
      __param: () => iR,
      __propKey: () => KR,
      __read: () => WR,
      __rest: () => ZR,
      __rewriteRelativeImportExtension: () => IR,
      __runInitializers: () => VR,
      __setFunctionName: () => wR,
      __spread: () => AR,
      __spreadArray: () => XR,
      __spreadArrays: () => CR,
      __values: () => UR,
      default: () => mR
    });
    var yR = function(RR, JR) {
      return yR = Object.setPrototypeOf || {
        __proto__: []
      }
      instanceof Array && function(RR, JR) {
        RR.__proto__ = JR
      } || function(RR, JR) {
        for (var GR in JR) Object.prototype.hasOwnProperty.call(JR, GR) && (RR[GR] = JR[GR])
      }, yR(RR, JR)
    };

    function tR(RR, JR) {
      if ("function" !== typeof JR && null !== JR) throw new TypeError("Class extends value " + String(JR) + " is not a constructor or null");

      function GR() {
        this.constructor = RR
      }
      yR(RR, JR), RR.prototype = null === JR ? Object.create(JR) : (GR.prototype = JR.prototype, new GR)
    }
    var uR = function() {
      return uR = Object.assign || function(RR) {
        for (var JR, GR = 1, yR = arguments.length; GR < yR; GR++)
          for (var tR in JR = arguments[GR]) Object.prototype.hasOwnProperty.call(JR, tR) && (RR[tR] = JR[tR]);
        return RR
      }, uR.apply(this, arguments)
    };

    function ZR(RR, JR) {
      var GR = {};
      for (var yR in RR) Object.prototype.hasOwnProperty.call(RR, yR) && JR.indexOf(yR) < 0 && (GR[yR] = RR[yR]);
      if (null != RR && "function" === typeof Object.getOwnPropertySymbols) {
        var tR = 0;
        for (yR = Object.getOwnPropertySymbols(RR); tR < yR.length; tR++) JR.indexOf(yR[tR]) < 0 && Object.prototype.propertyIsEnumerable.call(RR, yR[tR]) && (GR[yR[tR]] = RR[yR[tR]])
      }
      return GR
    }

    function qR(RR, JR, GR, yR) {
      var tR, uR = arguments.length,
        ZR = uR < 3 ? JR : null === yR ? yR = Object.getOwnPropertyDescriptor(JR, GR) : yR;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) ZR = Reflect.decorate(RR, JR, GR, yR);
      else
        for (var qR = RR.length - 1; qR >= 0; qR--)(tR = RR[qR]) && (ZR = (uR < 3 ? tR(ZR) : uR > 3 ? tR(JR, GR, ZR) : tR(JR, GR)) || ZR);
      return uR > 3 && ZR && Object.defineProperty(JR, GR, ZR), ZR
    }

    function iR(RR, JR) {
      return function(GR, yR) {
        JR(GR, yR, RR)
      }
    }

    function fR(RR, JR, GR, yR, tR, uR) {
      function ZR(RR) {
        if (void 0 !== RR && "function" !== typeof RR) throw new TypeError("Function expected");
        return RR
      }
      for (var qR, iR = yR.kind, fR = "getter" === iR ? "get" : "setter" === iR ? "set" : "value", VR = !JR && RR ? yR.static ? RR : RR.prototype : null, KR = JR || (VR ? Object.getOwnPropertyDescriptor(VR, yR.name) : {}), wR = !1, rR = GR.length - 1; rR >= 0; rR--) {
        var eR = {};
        for (var aR in yR) eR[aR] = "access" === aR ? {} : yR[aR];
        for (var aR in yR.access) eR.access[aR] = yR.access[aR];
        eR.addInitializer = function(RR) {
          if (wR) throw new TypeError("Cannot add initializers after decoration has completed");
          uR.push(ZR(RR || null))
        };
        var LR = (0, GR[rR])("accessor" === iR ? {
          get: KR.get,
          set: KR.set
        } : KR[fR], eR);
        if ("accessor" === iR) {
          if (void 0 === LR) continue;
          if (null === LR || "object" !== typeof LR) throw new TypeError("Object expected");
          (qR = ZR(LR.get)) && (KR.get = qR), (qR = ZR(LR.set)) && (KR.set = qR), (qR = ZR(LR.init)) && tR.unshift(qR)
        } else(qR = ZR(LR)) && ("field" === iR ? tR.unshift(qR) : KR[fR] = qR)
      }
      VR && Object.defineProperty(VR, yR.name, KR), wR = !0
    }

    function VR(RR, JR, GR) {
      for (var yR = arguments.length > 2, tR = 0; tR < JR.length; tR++) GR = yR ? JR[tR].call(RR, GR) : JR[tR].call(RR);
      return yR ? GR : void 0
    }

    function KR(RR) {
      return "symbol" === typeof RR ? RR : "".concat(RR)
    }

    function wR(RR, JR, GR) {
      return "symbol" === typeof JR && (JR = JR.description ? "[".concat(JR.description, "]") : ""), Object.defineProperty(RR, "name", {
        configurable: !0,
        value: GR ? "".concat(GR, " ", JR) : JR
      })
    }

    function rR(RR, JR) {
      if ("object" === typeof Reflect && "function" === typeof Reflect.metadata) return Reflect.metadata(RR, JR)
    }

    function eR(RR, JR, GR, yR) {
      return new(GR || (GR = Promise))((function(tR, uR) {
        function ZR(RR) {
          try {
            iR(yR.next(RR))
          } catch (JR) {
            uR(JR)
          }
        }

        function qR(RR) {
          try {
            iR(yR.throw(RR))
          } catch (JR) {
            uR(JR)
          }
        }

        function iR(RR) {
          var JR;
          RR.done ? tR(RR.value) : (JR = RR.value, JR instanceof GR ? JR : new GR((function(RR) {
            RR(JR)
          }))).then(ZR, qR)
        }
        iR((yR = yR.apply(RR, JR || [])).next())
      }))
    }

    function aR(RR, JR) {
      var GR, yR, tR, uR = {
          label: 0,
          sent: function() {
            if (1 & tR[0]) throw tR[1];
            return tR[1]
          },
          trys: [],
          ops: []
        },
        ZR = Object.create(("function" === typeof Iterator ? Iterator : Object).prototype);
      return ZR.next = qR(0), ZR.throw = qR(1), ZR.return = qR(2), "function" === typeof Symbol && (ZR[Symbol.iterator] = function() {
        return this
      }), ZR;

      function qR(qR) {
        return function(iR) {
          return function(qR) {
            if (GR) throw new TypeError("Generator is already executing.");
            for (; ZR && (ZR = 0, qR[0] && (uR = 0)), uR;) try {
              if (GR = 1, yR && (tR = 2 & qR[0] ? yR.return : qR[0] ? yR.throw || ((tR = yR.return) && tR.call(yR), 0) : yR.next) && !(tR = tR.call(yR, qR[1])).done) return tR;
              switch (yR = 0, tR && (qR = [2 & qR[0], tR.value]), qR[0]) {
                case 0:
                case 1:
                  tR = qR;
                  break;
                case 4:
                  return uR.label++, {
                    value: qR[1],
                    done: !1
                  };
                case 5:
                  uR.label++, yR = qR[1], qR = [0];
                  continue;
                case 7:
                  qR = uR.ops.pop(), uR.trys.pop();
                  continue;
                default:
                  if (!(tR = (tR = uR.trys).length > 0 && tR[tR.length - 1]) && (6 === qR[0] || 2 === qR[0])) {
                    uR = 0;
                    continue
                  }
                  if (3 === qR[0] && (!tR || qR[1] > tR[0] && qR[1] < tR[3])) {
                    uR.label = qR[1];
                    break
                  }
                  if (6 === qR[0] && uR.label < tR[1]) {
                    uR.label = tR[1], tR = qR;
                    break
                  }
                  if (tR && uR.label < tR[2]) {
                    uR.label = tR[2], uR.ops.push(qR);
                    break
                  }
                  tR[2] && uR.ops.pop(), uR.trys.pop();
                  continue
              }
              qR = JR.call(RR, uR)
            } catch (iR) {
              qR = [6, iR], yR = 0
            } finally {
              GR = tR = 0
            }
            if (5 & qR[0]) throw qR[1];
            return {
              value: qR[0] ? qR[1] : void 0,
              done: !0
            }
          }([qR, iR])
        }
      }
    }
    var LR = Object.create ? function(RR, JR, GR, yR) {
      void 0 === yR && (yR = GR);
      var tR = Object.getOwnPropertyDescriptor(JR, GR);
      tR && !("get" in tR ? !JR.__esModule : tR.writable || tR.configurable) || (tR = {
        enumerable: !0,
        get: function() {
          return JR[GR]
        }
      }), Object.defineProperty(RR, yR, tR)
    } : function(RR, JR, GR, yR) {
      void 0 === yR && (yR = GR), RR[yR] = JR[GR]
    };

    function nR(RR, JR) {
      for (var GR in RR) "default" === GR || Object.prototype.hasOwnProperty.call(JR, GR) || LR(JR, RR, GR)
    }

    function UR(RR) {
      var JR = "function" === typeof Symbol && Symbol.iterator,
        GR = JR && RR[JR],
        yR = 0;
      if (GR) return GR.call(RR);
      if (RR && "number" === typeof RR.length) return {
        next: function() {
          return RR && yR >= RR.length && (RR = void 0), {
            value: RR && RR[yR++],
            done: !RR
          }
        }
      };
      throw new TypeError(JR ? "Object is not iterable." : "Symbol.iterator is not defined.")
    }

    function WR(RR, JR) {
      var GR = "function" === typeof Symbol && RR[Symbol.iterator];
      if (!GR) return RR;
      var yR, tR, uR = GR.call(RR),
        ZR = [];
      try {
        for (;
          (void 0 === JR || JR-- > 0) && !(yR = uR.next()).done;) ZR.push(yR.value)
      } catch (qR) {
        tR = {
          error: qR
        }
      } finally {
        try {
          yR && !yR.done && (GR = uR.return) && GR.call(uR)
        } finally {
          if (tR) throw tR.error
        }
      }
      return ZR
    }

    function AR() {
      for (var RR = [], JR = 0; JR < arguments.length; JR++) RR = RR.concat(WR(arguments[JR]));
      return RR
    }

    function CR() {
      for (var RR = 0, JR = 0, GR = arguments.length; JR < GR; JR++) RR += arguments[JR].length;
      var yR = Array(RR),
        tR = 0;
      for (JR = 0; JR < GR; JR++)
        for (var uR = arguments[JR], ZR = 0, qR = uR.length; ZR < qR; ZR++, tR++) yR[tR] = uR[ZR];
      return yR
    }

    function XR(RR, JR, GR) {
      if (GR || 2 === arguments.length)
        for (var yR, tR = 0, uR = JR.length; tR < uR; tR++) !yR && tR in JR || (yR || (yR = Array.prototype.slice.call(JR, 0, tR)), yR[tR] = JR[tR]);
      return RR.concat(yR || Array.prototype.slice.call(JR))
    }

    function MR(RR) {
      return this instanceof MR ? (this.v = RR, this) : new MR(RR)
    }

    function BR(RR, JR, GR) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var yR, tR = GR.apply(RR, JR || []),
        uR = [];
      return yR = Object.create(("function" === typeof AsyncIterator ? AsyncIterator : Object).prototype), ZR("next"), ZR("throw"), ZR("return", (function(RR) {
        return function(JR) {
          return Promise.resolve(JR).then(RR, fR)
        }
      })), yR[Symbol.asyncIterator] = function() {
        return this
      }, yR;

      function ZR(RR, JR) {
        tR[RR] && (yR[RR] = function(JR) {
          return new Promise((function(GR, yR) {
            uR.push([RR, JR, GR, yR]) > 1 || qR(RR, JR)
          }))
        }, JR && (yR[RR] = JR(yR[RR])))
      }

      function qR(RR, JR) {
        try {
          (GR = tR[RR](JR)).value instanceof MR ? Promise.resolve(GR.value.v).then(iR, fR) : VR(uR[0][2], GR)
        } catch (yR) {
          VR(uR[0][3], yR)
        }
        var GR
      }

      function iR(RR) {
        qR("next", RR)
      }

      function fR(RR) {
        qR("throw", RR)
      }

      function VR(RR, JR) {
        RR(JR), uR.shift(), uR.length && qR(uR[0][0], uR[0][1])
      }
    }

    function lR(RR) {
      var JR, GR;
      return JR = {}, yR("next"), yR("throw", (function(RR) {
        throw RR
      })), yR("return"), JR[Symbol.iterator] = function() {
        return this
      }, JR;

      function yR(yR, tR) {
        JR[yR] = RR[yR] ? function(JR) {
          return (GR = !GR) ? {
            value: MR(RR[yR](JR)),
            done: !1
          } : tR ? tR(JR) : JR
        } : tR
      }
    }

    function pR(RR) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var JR, GR = RR[Symbol.asyncIterator];
      return GR ? GR.call(RR) : (RR = UR(RR), JR = {}, yR("next"), yR("throw"), yR("return"), JR[Symbol.asyncIterator] = function() {
        return this
      }, JR);

      function yR(GR) {
        JR[GR] = RR[GR] && function(JR) {
          return new Promise((function(yR, tR) {
            (function(RR, JR, GR, yR) {
              Promise.resolve(yR).then((function(JR) {
                RR({
                  value: JR,
                  done: GR
                })
              }), JR)
            })(yR, tR, (JR = RR[GR](JR)).done, JR.value)
          }))
        }
      }
    }

    function gR(RR, JR) {
      return Object.defineProperty ? Object.defineProperty(RR, "raw", {
        value: JR
      }) : RR.raw = JR, RR
    }
    var bR = Object.create ? function(RR, JR) {
        Object.defineProperty(RR, "default", {
          enumerable: !0,
          value: JR
        })
      } : function(RR, JR) {
        RR.default = JR
      },
      vR = function(RR) {
        return vR = Object.getOwnPropertyNames || function(RR) {
          var JR = [];
          for (var GR in RR) Object.prototype.hasOwnProperty.call(RR, GR) && (JR[JR.length] = GR);
          return JR
        }, vR(RR)
      };

    function OR(RR) {
      if (RR && RR.__esModule) return RR;
      var JR = {};
      if (null != RR)
        for (var GR = vR(RR), yR = 0; yR < GR.length; yR++) "default" !== GR[yR] && LR(JR, RR, GR[yR]);
      return bR(JR, RR), JR
    }

    function xR(RR) {
      return RR && RR.__esModule ? RR : {
        default: RR
      }
    }

    function NR(RR, JR, GR, yR) {
      if ("a" === GR && !yR) throw new TypeError("Private accessor was defined without a getter");
      if ("function" === typeof JR ? RR !== JR || !yR : !JR.has(RR)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
      return "m" === GR ? yR : "a" === GR ? yR.call(RR) : yR ? yR.value : JR.get(RR)
    }

    function DR(RR, JR, GR, yR, tR) {
      if ("m" === yR) throw new TypeError("Private method is not writable");
      if ("a" === yR && !tR) throw new TypeError("Private accessor was defined without a setter");
      if ("function" === typeof JR ? RR !== JR || !tR : !JR.has(RR)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
      return "a" === yR ? tR.call(RR, GR) : tR ? tR.value = GR : JR.set(RR, GR), GR
    }

    function HR(RR, JR) {
      if (null === JR || "object" !== typeof JR && "function" !== typeof JR) throw new TypeError("Cannot use 'in' operator on non-object");
      return "function" === typeof RR ? JR === RR : RR.has(JR)
    }

    function oR(RR, JR, GR) {
      if (null !== JR && void 0 !== JR) {
        if ("object" !== typeof JR && "function" !== typeof JR) throw new TypeError("Object expected.");
        var yR, tR;
        if (GR) {
          if (!Symbol.asyncDispose) throw new TypeError("Symbol.asyncDispose is not defined.");
          yR = JR[Symbol.asyncDispose]
        }
        if (void 0 === yR) {
          if (!Symbol.dispose) throw new TypeError("Symbol.dispose is not defined.");
          yR = JR[Symbol.dispose], GR && (tR = yR)
        }
        if ("function" !== typeof yR) throw new TypeError("Object not disposable.");
        tR && (yR = function() {
          try {
            tR.call(this)
          } catch (RR) {
            return Promise.reject(RR)
          }
        }), RR.stack.push({
          value: JR,
          dispose: yR,
          async: GR
        })
      } else GR && RR.stack.push({
        async: !0
      });
      return JR
    }
    var cR = "function" === typeof SuppressedError ? SuppressedError : function(RR, JR, GR) {
      var yR = new Error(GR);
      return yR.name = "SuppressedError", yR.error = RR, yR.suppressed = JR, yR
    };

    function PR(RR) {
      function JR(JR) {
        RR.error = RR.hasError ? new cR(JR, RR.error, "An error was suppressed during disposal.") : JR, RR.hasError = !0
      }
      var GR, yR = 0;
      return function tR() {
        for (; GR = RR.stack.pop();) try {
          if (!GR.async && 1 === yR) return yR = 0, RR.stack.push(GR), Promise.resolve().then(tR);
          if (GR.dispose) {
            var uR = GR.dispose.call(GR.value);
            if (GR.async) return yR |= 2, Promise.resolve(uR).then(tR, (function(RR) {
              return JR(RR), tR()
            }))
          } else yR |= 1
        } catch (ZR) {
          JR(ZR)
        }
        if (1 === yR) return RR.hasError ? Promise.reject(RR.error) : Promise.resolve();
        if (RR.hasError) throw RR.error
      }()
    }

    function IR(RR, JR) {
      return "string" === typeof RR && /^\.\.?\//.test(RR) ? RR.replace(/\.(tsx)$|((?:\.d)?)((?:\.[^./]+?)?)\.([cm]?)ts$/i, (function(RR, GR, yR, tR, uR) {
        return GR ? JR ? ".jsx" : ".js" : !yR || tR && uR ? yR + tR + "." + uR.toLowerCase() + "js" : RR
      })) : RR
    }
    const mR = {
      __extends: tR,
      __assign: uR,
      __rest: ZR,
      __decorate: qR,
      __param: iR,
      __esDecorate: fR,
      __runInitializers: VR,
      __propKey: KR,
      __setFunctionName: wR,
      __metadata: rR,
      __awaiter: eR,
      __generator: aR,
      __createBinding: LR,
      __exportStar: nR,
      __values: UR,
      __read: WR,
      __spread: AR,
      __spreadArrays: CR,
      __spreadArray: XR,
      __await: MR,
      __asyncGenerator: BR,
      __asyncDelegator: lR,
      __asyncValues: pR,
      __makeTemplateObject: gR,
      __importStar: OR,
      __importDefault: xR,
      __classPrivateFieldGet: NR,
      __classPrivateFieldSet: DR,
      __classPrivateFieldIn: HR,
      __addDisposableResource: oR,
      __disposeResources: PR,
      __rewriteRelativeImportExtension: IR
    }
  }
};
Object.freeze(modules);
for (const RR in modules) Object.freeze(modules[RR]);