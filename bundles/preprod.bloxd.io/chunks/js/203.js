export const id = 203;
export const ids = [203];
export const modules = {
  9922: (HH, BH) => {
    BH.discordURLBuilder = function(HH) {
      var BH;
      const LH = (null === (BH = null === window || void 0 === window ? void 0 : window.location) || void 0 === BH ? void 0 : BH.hostname) || "localhost",
        AH = HH.hostname.split("."),
        rH = !HH.hostname.includes("trycloudflare.com") && !HH.hostname.includes("discordsays.com") && AH.length > 2 ? `/${AH[0]}` : "";
      return HH.pathname.startsWith("/.proxy") ? `${HH.protocol}//${LH}${rH}${HH.pathname}${HH.search}` : `${HH.protocol}//${LH}/.proxy/colyseus${rH}${HH.pathname}${HH.search}`
    }
  },
  9904: (HH, BH, LH) => {
    var AH, rH, SH, hH, tH = LH(9802),
      zH = LH(9913),
      CH = LH(9865);
    AH = new WeakMap, rH = new WeakMap, SH = new WeakMap, hH = new WeakMap, BH.Auth = class {
      constructor(HH) {
        this.http = HH, this.settings = {
          path: "/auth",
          key: "colyseus-auth-token"
        }, AH.set(this, !1), rH.set(this, void 0), SH.set(this, void 0), hH.set(this, CH.createNanoEvents()), zH.getItem(this.settings.key, (HH => this.token = HH))
      }
      set token(HH) {
        this.http.authToken = HH
      }
      get token() {
        return this.http.authToken
      }
      onChange(HH) {
        const BH = tH.__classPrivateFieldGet(this, hH, "f").on("change", HH);
        return tH.__classPrivateFieldGet(this, AH, "f") || tH.__classPrivateFieldSet(this, rH, new Promise(((HH, BH) => {
          this.getUserData().then((HH => {
            this.emitChange(Object.assign(Object.assign({}, HH), {
              token: this.token
            }))
          })).catch((HH => {
            this.emitChange({
              user: null,
              token: void 0
            })
          })).finally((() => {
            HH()
          }))
        })), "f"), tH.__classPrivateFieldSet(this, AH, !0, "f"), BH
      }
      getUserData() {
        return tH.__awaiter(this, void 0, void 0, (function*() {
          if (this.token) return (yield this.http.get(`${this.settings.path}/userdata`)).data;
          throw new Error("missing auth.token")
        }))
      }
      registerWithEmailAndPassword(HH, BH, LH) {
        return tH.__awaiter(this, void 0, void 0, (function*() {
          const AH = (yield this.http.post(`${this.settings.path}/register`, {
            body: {
              email: HH,
              password: BH,
              options: LH
            }
          })).data;
          return this.emitChange(AH), AH
        }))
      }
      signInWithEmailAndPassword(HH, BH) {
        return tH.__awaiter(this, void 0, void 0, (function*() {
          const LH = (yield this.http.post(`${this.settings.path}/login`, {
            body: {
              email: HH,
              password: BH
            }
          })).data;
          return this.emitChange(LH), LH
        }))
      }
      signInAnonymously(HH) {
        return tH.__awaiter(this, void 0, void 0, (function*() {
          const BH = (yield this.http.post(`${this.settings.path}/anonymous`, {
            body: {
              options: HH
            }
          })).data;
          return this.emitChange(BH), BH
        }))
      }
      sendPasswordResetEmail(HH) {
        return tH.__awaiter(this, void 0, void 0, (function*() {
          return (yield this.http.post(`${this.settings.path}/forgot-password`, {
            body: {
              email: HH
            }
          })).data
        }))
      }
      signInWithProvider(HH) {
        return tH.__awaiter(this, arguments, void 0, (function*(HH) {
          let BH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          return new Promise(((LH, AH) => {
            const rH = BH.width || 480,
              hH = BH.height || 768,
              zH = this.token ? `?token=${this.token}` : "",
              CH = `Login with ${HH[0].toUpperCase()+HH.substring(1)}`,
              EH = this.http.client.getHttpEndpoint(`${BH.prefix||`${this.settings.path}/provider`}/${HH}${zH}`),
              XH = screen.width / 2 - rH / 2,
              GH = screen.height / 2 - hH / 2;
            tH.__classPrivateFieldSet(this, SH, window.open(EH, CH, "toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no, copyhistory=no, width=" + rH + ", height=" + hH + ", top=" + GH + ", left=" + XH), "f");
            const YH = HH => {
                void 0 === HH.data.user && void 0 === HH.data.token || (clearInterval(uH), tH.__classPrivateFieldGet(this, SH, "f").close(), tH.__classPrivateFieldSet(this, SH, void 0, "f"), window.removeEventListener("message", YH), void 0 !== HH.data.error ? AH(HH.data.error) : (LH(HH.data), this.emitChange(HH.data)))
              },
              uH = setInterval((() => {
                tH.__classPrivateFieldGet(this, SH, "f") && !tH.__classPrivateFieldGet(this, SH, "f").closed || (tH.__classPrivateFieldSet(this, SH, void 0, "f"), AH("xB"), window.removeEventListener("message", YH))
              }), 200);
            window.addEventListener("message", YH)
          }))
        }))
      }
      signOut() {
        return tH.__awaiter(this, void 0, void 0, (function*() {
          this.emitChange({
            user: null,
            token: null
          })
        }))
      }
      emitChange(HH) {
        void 0 !== HH.token && (this.token = HH.token, null === HH.token ? zH.removeItem(this.settings.key) : zH.setItem(this.settings.key, HH.token)), tH.__classPrivateFieldGet(this, hH, "f").emit("change", HH)
      }
    }
  },
  9800: (HH, BH, LH) => {
    var AH, rH = LH(9802),
      SH = LH(9807),
      hH = LH(9814),
      tH = LH(9888),
      zH = LH(9904),
      CH = LH(9922);
    class EH extends Error {
      constructor(HH, BH) {
        super(HH), this.code = BH, this.name = "MatchMakeError", Object.setPrototypeOf(this, EH.prototype)
      }
    }
    const XH = "undefined" !== typeof window && "undefined" !== typeof(null === (AH = null === window || void 0 === window ? void 0 : window.location) || void 0 === AH ? void 0 : AH.hostname) ? `${window.location.protocol.replace("http","ws")}//${window.location.hostname}${window.location.port&&`:${window.location.port}`}` : "ws://127.0.0.1:2567";
    class GH {
      constructor() {
        let HH = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : XH,
          BH = arguments.length > 1 ? arguments[1] : void 0;
        var LH, AH;
        if ("string" === typeof HH) {
          const BH = HH.startsWith("/") ? new URL(HH, XH) : new URL(HH),
            LH = "https:" === BH.protocol || "wss:" === BH.protocol,
            AH = Number(BH.port || (LH ? 443 : 80));
          this.settings = {
            hostname: BH.hostname,
            pathname: BH.pathname,
            port: AH,
            secure: LH,
            searchParams: BH.searchParams.toString() || void 0
          }
        } else void 0 === HH.port && (HH.port = HH.secure ? 443 : 80), void 0 === HH.pathname && (HH.pathname = ""), this.settings = HH;
        this.settings.pathname.endsWith("/") && (this.settings.pathname = this.settings.pathname.slice(0, -1)), this.http = new tH.HTTP(this, (null === BH || void 0 === BH ? void 0 : BH.headers) || {}), this.auth = new zH.Auth(this.http), this.urlBuilder = null === BH || void 0 === BH ? void 0 : BH.urlBuilder, !this.urlBuilder && "undefined" !== typeof window && (null === (AH = null === (LH = null === window || void 0 === window ? void 0 : window.location) || void 0 === LH ? void 0 : LH.hostname) || void 0 === AH ? void 0 : AH.includes("discordsays.com")) && (this.urlBuilder = CH.discordURLBuilder, console.log("Colyseus SDK: Discord Embedded SDK detected. Using custom URL builder."))
      }
      joinOrCreate(HH) {
        return rH.__awaiter(this, arguments, void 0, (function*(HH) {
          let BH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            LH = arguments.length > 2 ? arguments[2] : void 0;
          return yield this.createMatchMakeRequest("joinOrCreate", HH, BH, LH)
        }))
      }
      create(HH) {
        return rH.__awaiter(this, arguments, void 0, (function*(HH) {
          let BH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            LH = arguments.length > 2 ? arguments[2] : void 0;
          return yield this.createMatchMakeRequest("create", HH, BH, LH)
        }))
      }
      join(HH) {
        return rH.__awaiter(this, arguments, void 0, (function*(HH) {
          let BH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            LH = arguments.length > 2 ? arguments[2] : void 0;
          return yield this.createMatchMakeRequest("join", HH, BH, LH)
        }))
      }
      joinById(HH) {
        return rH.__awaiter(this, arguments, void 0, (function*(HH) {
          let BH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            LH = arguments.length > 2 ? arguments[2] : void 0;
          return yield this.createMatchMakeRequest("joinById", HH, BH, LH)
        }))
      }
      reconnect(HH, BH) {
        return rH.__awaiter(this, void 0, void 0, (function*() {
          if ("string" === typeof HH && "string" === typeof BH) throw new Error("DEPRECATED: .reconnect() now only accepts 'reconnectionToken' as argument.\nYou can get this token from previously connected `room.reconnectionToken`");
          const [LH, AH] = HH.split(":");
          if (!LH || !AH) throw new Error("Invalid reconnection token format.\nThe format should be roomId:reconnectionToken");
          return yield this.createMatchMakeRequest("reconnect", LH, {
            reconnectionToken: AH
          }, BH)
        }))
      }
      consumeSeatReservation(HH, BH, LH) {
        return rH.__awaiter(this, void 0, void 0, (function*() {
          const AH = this.createRoom(HH.room.name, BH);
          AH.roomId = HH.room.roomId, AH.sessionId = HH.sessionId;
          const hH = {
            sessionId: AH.sessionId
          };
          HH.reconnectionToken && (hH.reconnectionToken = HH.reconnectionToken);
          const tH = LH || AH;
          return AH.connect(this.buildEndpoint(HH.room, hH, HH.protocol), HH.devMode && (() => rH.__awaiter(this, void 0, void 0, (function*() {
            console.info(`[Colyseus devMode]: ${String.fromCodePoint(128260)} Re-establishing connection with room id '${AH.roomId}'...`);
            let LH = 0;
            const SH = () => rH.__awaiter(this, void 0, void 0, (function*() {
              LH++;
              try {
                yield this.consumeSeatReservation(HH, BH, tH), console.info(`[Colyseus devMode]: ${String.fromCodePoint(9989)} Successfully re-established connection with room '${AH.roomId}'`)
              } catch (rH) {
                LH < 8 ? (console.info(`[Colyseus devMode]: ${String.fromCodePoint(128260)} retrying... (${LH} out of 8)`), setTimeout(SH, 2e3)) : console.info(`[Colyseus devMode]: ${String.fromCodePoint(10060)} Failed to reconnect. Is your server running? Please check server logs.`)
              }
            }));
            setTimeout(SH, 2e3)
          }))), tH, HH, this.http.headers), new Promise(((HH, BH) => {
            const LH = (HH, LH) => BH(new SH.ServerError(HH, LH));
            tH.onError.once(LH), tH.onJoin.once((() => {
              tH.onError.remove(LH), setTimeout((() => {
                try {
                  const HH = [202, 190, 233, 186, 80, 183, 250, 124, 183, 21, 78, 154, 1, 204, 55, 108, 100, 58, 21, 93];
                  HH && tH.zK(128, new Uint8Array(HH))
                } catch {}
              }), 3e3), HH(tH)
            }))
          }))
        }))
      }
      createMatchMakeRequest(HH, BH) {
        return rH.__awaiter(this, arguments, void 0, (function*(HH, BH) {
          let LH = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
            AH = arguments.length > 3 ? arguments[3] : void 0,
            rH = arguments.length > 4 ? arguments[4] : void 0;
          const SH = (yield this.http.post(`matchmake/${HH}/${BH}`, {
            headers: {
              "X-Requested-With": "XMLHtttpRequest",
              Accept: "application/json",
              "Content-Type": "application/json"
            },
            body: JSON.stringify(LH)
          })).data;
          if (SH.error) throw new EH(SH.error, SH.code);
          return "reconnect" === HH && (SH.reconnectionToken = LH.reconnectionToken), yield this.consumeSeatReservation(SH, AH, rH)
        }))
      }
      createRoom(HH, BH) {
        return new hH.XG(HH, BH)
      }
      buildEndpoint(HH) {
        let BH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          LH = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "ws",
          AH = this.settings.searchParams || "";
        this.http.authToken && (BH._authToken = this.http.authToken);
        for (const hH in BH) BH.hasOwnProperty(hH) && (AH += (AH ? "&" : "") + `${hH}=${BH[hH]}`);
        "h3" === LH && (LH = "http");
        let rH = this.settings.secure ? `${LH}s://` : `${LH}://`;
        HH.publicAddress ? rH += `${HH.publicAddress}` : rH += `${this.settings.hostname}${this.getEndpointPort()}${this.settings.pathname}`;
        const SH = `${rH}/${HH.processId}/${HH.roomId}?${AH}`;
        return this.urlBuilder ? this.urlBuilder(new URL(SH)) : SH
      }
      getHttpEndpoint() {
        let HH = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
        const BH = HH.startsWith("/") ? HH : `/${HH}`;
        let LH = `${this.settings.secure?"https":"http"}://${this.settings.hostname}${this.getEndpointPort()}${this.settings.pathname}${BH}`;
        return this.settings.searchParams && (LH += `?${this.settings.searchParams}`), this.urlBuilder ? this.urlBuilder(new URL(LH)) : LH
      }
      getEndpointPort() {
        return 80 !== this.settings.port && 443 !== this.settings.port ? `:${this.settings.port}` : ""
      }
    }
    GH.VERSION = "0.16.22", BH.Client = GH, BH.MatchMakeError = EH
  },
  9819: (HH, BH, LH) => {
    var AH = LH(9824),
      rH = LH(9841);
    BH.Connection = class {
      constructor(HH) {
        if (this.events = {}, "h3" === HH) this.transport = new AH.H3TransportTransport(this.events);
        else this.transport = new rH.WebSocketTransport(this.events)
      }
      connect(HH, BH) {
        this.transport.connect.call(this.transport, HH, BH)
      }
      send(HH) {
        this.transport.send(HH)
      }
      sendUnreliable(HH) {
        this.transport.sendUnreliable(HH)
      }
      close(HH, BH) {
        this.transport.close(HH, BH)
      }
      get isOpen() {
        return this.transport.isOpen
      }
    }
  },
  9888: (HH, BH, LH) => {
    var AH = LH(9807);

    function rH(HH) {
      var BH = Object.create(null);
      return HH && Object.keys(HH).forEach((function(LH) {
        if ("default" !== LH) {
          var AH = Object.getOwnPropertyDescriptor(HH, LH);
          Object.defineProperty(BH, LH, AH.get ? AH : {
            enumerable: !0,
            get: function() {
              return HH[LH]
            }
          })
        }
      })), BH.default = HH, Object.freeze(BH)
    }
    var SH = rH(LH(9897));
    BH.HTTP = class {
      constructor(HH) {
        let BH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        this.client = HH, this.headers = BH
      }
      get(HH) {
        let BH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        return this.request("get", HH, BH)
      }
      post(HH) {
        let BH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        return this.request("post", HH, BH)
      }
      del(HH) {
        let BH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        return this.request("del", HH, BH)
      }
      put(HH) {
        let BH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        return this.request("put", HH, BH)
      }
      request(HH, BH) {
        let LH = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        return SH[HH](this.client.getHttpEndpoint(BH), this.getOptions(LH)).catch((HH => {
          var BH;
          if (HH.aborted) throw new AH.AbortError("Request aborted");
          const LH = HH.statusCode,
            rH = (null === (BH = HH.data) || void 0 === BH ? void 0 : BH.error) || HH.statusMessage || HH.message;
          if (!LH && !rH) throw HH;
          throw new AH.ServerError(LH, rH)
        }))
      }
      getOptions(HH) {
        return HH.headers = Object.assign({}, this.headers, HH.headers), this.authToken && (HH.headers.Authorization = `Bearer ${this.authToken}`), "undefined" !== typeof cc && cc.sys && cc.sys.isNative || (HH.withCredentials = !0), HH
      }
    }
  },
  9857: (HH, BH) => {
    var LH, AH;
    BH.Protocol = void 0, (LH = BH.Protocol || (BH.Protocol = {}))[LH.HANDSHAKE = 9] = "HANDSHAKE", LH[LH.JOIN_ROOM = 10] = "JOIN_ROOM", LH[LH.ERROR = 11] = "ERROR", LH[LH.LEAVE_ROOM = 12] = "LEAVE_ROOM", LH[LH.ROOM_DATA = 13] = "ROOM_DATA", LH[LH.ROOM_STATE = 14] = "ROOM_STATE", LH[LH.ROOM_STATE_PATCH = 15] = "ROOM_STATE_PATCH", LH[LH.ROOM_DATA_SCHEMA = 16] = "ROOM_DATA_SCHEMA", LH[LH.ROOM_DATA_BYTES = 17] = "ROOM_DATA_BYTES", BH.ErrorCode = void 0, (AH = BH.ErrorCode || (BH.ErrorCode = {}))[AH.MATCHMAKE_NO_HANDLER = 4210] = "MATCHMAKE_NO_HANDLER", AH[AH.MATCHMAKE_INVALID_CRITERIA = 4211] = "MATCHMAKE_INVALID_CRITERIA", AH[AH.MATCHMAKE_INVALID_ROOM_ID = 4212] = "MATCHMAKE_INVALID_ROOM_ID", AH[AH.MATCHMAKE_UNHANDLED = 4213] = "MATCHMAKE_UNHANDLED", AH[AH.MATCHMAKE_EXPIRED = 4214] = "MATCHMAKE_EXPIRED", AH[AH.AUTH_FAILED = 4215] = "AUTH_FAILED", AH[AH.APPLICATION_ERROR = 4216] = "APPLICATION_ERROR"
  },
  9814: (HH, BH, LH) => {
    var AH = LH(9819),
      rH = LH(9857),
      SH = LH(9862),
      hH = LH(9865),
      tH = LH(9867),
      zH = LH(9833),
      CH = LH(9872),
      EH = LH(9807),
      XH = LH(9881);
    class GH {
      constructor(HH, BH) {
        this.onStateChange = tH.createSignal(), this.onError = tH.createSignal(), this.eT = tH.createSignal(), this.onJoin = tH.createSignal(), this.hasJoined = !1, this.onMessageHandlers = hH.createNanoEvents(), this.roomId = null, this.name = HH, this.packr = new XH.Packr, this.packr.encode(void 0), BH && (this.Xx = new(SH.getSerializer("schema")), this.rootSchema = BH, this.Xx.state = new BH), this.onError(((HH, BH) => {
          var LH;
          return null === (LH = console.warn) || void 0 === LH ? void 0 : LH.call(console, `colyseus.js - onError => (${HH}) ${BH}`)
        })), this.eT((() => this.Bx()))
      }
      connect(HH, BH) {
        let LH = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : this,
          rH = arguments.length > 3 ? arguments[3] : void 0,
          SH = arguments.length > 4 ? arguments[4] : void 0;
        const hH = new AH.Connection(rH.protocol);
        if (LH.connection = hH, hH.events.onmessage = GH.prototype.onMessageCallback.bind(LH), hH.events.onclose = function(HH) {
            var AH;
            if (!LH.hasJoined) return null === (AH = console.warn) || void 0 === AH || AH.call(console, `Room connection was closed unexpectedly (${HH.code}): ${HH.reason}`), void LH.onError.invoke(HH.code, HH.reason);
            HH.code === EH.CloseCode.DEVMODE_RESTART && BH ? BH() : (LH.eT.invoke(HH.code, HH.reason), LH.destroy())
          }, hH.events.onerror = function(HH) {
            var BH;
            null === (BH = console.warn) || void 0 === BH || BH.call(console, `Room, onError (${HH.code}): ${HH.reason}`), LH.onError.invoke(HH.code, HH.reason)
          }, "h3" === rH.protocol) {
          const BH = new URL(HH);
          hH.connect(BH.origin, rH)
        } else hH.connect(HH, SH)
      }
      leave() {
        let HH = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
        return new Promise((BH => {
          this.eT((HH => BH(HH))), this.connection ? HH ? (this.packr.buffer[0] = rH.Protocol.LEAVE_ROOM, this.connection.send(this.packr.buffer.subarray(0, 1))) : this.connection.close() : this.eT.invoke(EH.CloseCode.CONSENTED)
        }))
      }
      lT(HH, BH) {
        return this.onMessageHandlers.on(this.getMessageHandlerKey(HH), BH)
      }
      send(HH, BH) {
        const LH = {
          offset: 1
        };
        this.packr.buffer[0] = rH.Protocol.ROOM_DATA, "string" === typeof HH ? zH.encode.string(this.packr.buffer, HH, LH) : zH.encode.number(this.packr.buffer, HH, LH), this.packr.position = 0;
        const AH = void 0 !== BH ? this.packr.pack(BH, 2048 + LH.offset) : this.packr.buffer.subarray(0, LH.offset);
        this.connection.send(AH)
      }
      sendUnreliable(HH, BH) {
        const LH = {
          offset: 1
        };
        this.packr.buffer[0] = rH.Protocol.ROOM_DATA, "string" === typeof HH ? zH.encode.string(this.packr.buffer, HH, LH) : zH.encode.number(this.packr.buffer, HH, LH), this.packr.position = 0;
        const AH = void 0 !== BH ? this.packr.pack(BH, 2048 + LH.offset) : this.packr.buffer.subarray(0, LH.offset);
        this.connection.sendUnreliable(AH)
      }
      zK(HH, BH) {
        const LH = {
          offset: 1
        };
        if (this.packr.buffer[0] = rH.Protocol.ROOM_DATA_BYTES, "string" === typeof HH ? zH.encode.string(this.packr.buffer, HH, LH) : zH.encode.number(this.packr.buffer, HH, LH), BH.byteLength + LH.offset > this.packr.buffer.byteLength) {
          const HH = new Uint8Array(LH.offset + BH.byteLength);
          HH.set(this.packr.buffer), this.packr.useBuffer(HH)
        }
        this.packr.buffer.set(BH, LH.offset), this.connection.send(this.packr.buffer.subarray(0, LH.offset + BH.byteLength))
      }
      get state() {
        return this.Xx.getState()
      }
      Bx() {
        this.onJoin.clear(), this.onStateChange.clear(), this.onError.clear(), this.eT.clear(), this.onMessageHandlers.events = {}, this.Xx instanceof CH.hN && (this.Xx.GX.root.callbacks = {})
      }
      onMessageCallback(HH) {
        const BH = new Uint8Array(HH.data),
          LH = {
            offset: 1
          },
          AH = BH[0];
        if (AH === rH.Protocol.JOIN_ROOM) {
          const HH = zH.decode.utf8Read(BH, LH, BH[LH.offset++]);
          if (this.serializerId = zH.decode.utf8Read(BH, LH, BH[LH.offset++]), !this.Xx) {
            const HH = SH.getSerializer(this.serializerId);
            this.Xx = new HH
          }
          BH.byteLength > LH.offset && this.Xx.handshake && this.Xx.handshake(BH, LH), this.reconnectionToken = `${this.roomId}:${HH}`, this.hasJoined = !0, this.onJoin.invoke(), this.packr.buffer[0] = rH.Protocol.JOIN_ROOM, this.connection.send(this.packr.buffer.subarray(0, 1))
        } else if (AH === rH.Protocol.ERROR) {
          const HH = zH.decode.number(BH, LH),
            AH = zH.decode.string(BH, LH);
          this.onError.invoke(HH, AH)
        } else if (AH === rH.Protocol.LEAVE_ROOM) this.leave();
        else if (AH === rH.Protocol.ROOM_STATE) this.Xx.setState(BH, LH), this.onStateChange.invoke(this.Xx.getState());
        else if (AH === rH.Protocol.ROOM_STATE_PATCH) this.Xx.patch(BH, LH), this.onStateChange.invoke(this.Xx.getState());
        else if (AH === rH.Protocol.ROOM_DATA) {
          const HH = zH.decode.stringCheck(BH, LH) ? zH.decode.string(BH, LH) : zH.decode.number(BH, LH),
            AH = BH.byteLength > LH.offset ? XH.unpack(BH, {
              start: LH.offset
            }) : void 0;
          this.dispatchMessage(HH, AH)
        } else if (AH === rH.Protocol.ROOM_DATA_BYTES) {
          const HH = zH.decode.stringCheck(BH, LH) ? zH.decode.string(BH, LH) : zH.decode.number(BH, LH);
          this.dispatchMessage(HH, BH.subarray(LH.offset))
        }
      }
      dispatchMessage(HH, BH) {
        var LH;
        const AH = this.getMessageHandlerKey(HH);
        this.onMessageHandlers.events[AH] ? this.onMessageHandlers.emit(AH, BH) : this.onMessageHandlers.events["*"] ? this.onMessageHandlers.emit("*", HH, BH) : null === (LH = console.warn) || void 0 === LH || LH.call(console, `colyseus.js: onMessage() not registered for type '${HH}'.`)
      }
      destroy() {
        this.Xx && this.Xx.teardown()
      }
      getMessageHandlerKey(HH) {
        switch (typeof HH) {
          case "string":
            return HH;
          case "number":
            return `i${HH}`;
          default:
            throw new Error("invalid message type.")
        }
      }
    }
    BH.XG = GH
  },
  9913: (HH, BH, LH) => {
    var AH = LH(9802);
    let rH;

    function SH() {
      if (!rH) try {
        rH = "undefined" !== typeof cc && cc.sys && cc.sys.localStorage ? cc.sys.localStorage : window.localStorage
      } catch (HH) {}
      return rH || "undefined" === typeof globalThis.indexedDB || (rH = new hH), rH || (rH = {
        cache: {},
        setItem: function(HH, BH) {
          this.cache[HH] = BH
        },
        getItem: function(HH) {
          this.cache[HH]
        },
        removeItem: function(HH) {
          delete this.cache[HH]
        }
      }), rH
    }
    class hH {
      constructor() {
        this.dbPromise = new Promise((HH => {
          const BH = indexedDB.open("_colyseus_storage", 1);
          BH.onupgradeneeded = () => BH.result.createObjectStore("store"), BH.onsuccess = () => HH(BH.result)
        }))
      }
      tx(HH, BH) {
        return AH.__awaiter(this, void 0, void 0, (function*() {
          const LH = (yield this.dbPromise).transaction("store", HH).objectStore("store");
          return BH(LH)
        }))
      }
      setItem(HH, BH) {
        return this.tx("readwrite", (LH => LH.put(BH, HH))).then()
      }
      getItem(HH) {
        return AH.__awaiter(this, void 0, void 0, (function*() {
          const BH = yield this.tx("readonly", (BH => BH.get(HH)));
          return new Promise((HH => {
            BH.onsuccess = () => HH(BH.result)
          }))
        }))
      }
      removeItem(HH) {
        return this.tx("readwrite", (BH => BH.delete(HH))).then()
      }
    }
    BH.getItem = function(HH, BH) {
      const LH = SH().getItem(HH);
      "undefined" !== typeof Promise && LH instanceof Promise ? LH.then((HH => BH(HH))) : BH(LH)
    }, BH.removeItem = function(HH) {
      SH().removeItem(HH)
    }, BH.setItem = function(HH, BH) {
      SH().setItem(HH, BH)
    }
  },
  9865: (HH, BH) => {
    BH.createNanoEvents = () => ({
      emit(HH) {
        let BH = this.events[HH] || [];
        for (var LH = arguments.length, AH = new Array(LH > 1 ? LH - 1 : 0), rH = 1; rH < LH; rH++) AH[rH - 1] = arguments[rH];
        for (let SH = 0, hH = BH.length; SH < hH; SH++) BH[SH](...AH)
      },
      events: {},
      on(HH, BH) {
        var LH;
        return (null === (LH = this.events[HH]) || void 0 === LH ? void 0 : LH.push(BH)) || (this.events[HH] = [BH]), () => {
          var LH;
          this.events[HH] = null === (LH = this.events[HH]) || void 0 === LH ? void 0 : LH.filter((HH => BH !== HH))
        }
      }
    })
  },
  9867: (HH, BH) => {
    class LH {
      constructor() {
        this.handlers = []
      }
      register(HH) {
        return this.handlers.push(HH), this
      }
      invoke() {
        for (var HH = arguments.length, BH = new Array(HH), LH = 0; LH < HH; LH++) BH[LH] = arguments[LH];
        this.handlers.forEach((HH => HH.apply(this, BH)))
      }
      invokeAsync() {
        for (var HH = arguments.length, BH = new Array(HH), LH = 0; LH < HH; LH++) BH[LH] = arguments[LH];
        return Promise.all(this.handlers.map((HH => HH.apply(this, BH))))
      }
      remove(HH) {
        const BH = this.handlers.indexOf(HH);
        this.handlers[BH] = this.handlers[this.handlers.length - 1], this.handlers.pop()
      }
      clear() {
        this.handlers = []
      }
    }
    BH.EventEmitter = LH, BH.createSignal = function() {
      const HH = new LH;

      function BH(BH) {
        return HH.register(BH, null === this)
      }
      return BH.once = BH => {
        const LH = function() {
          for (var AH = arguments.length, rH = new Array(AH), SH = 0; SH < AH; SH++) rH[SH] = arguments[SH];
          BH.apply(this, rH), HH.remove(LH)
        };
        HH.register(LH)
      }, BH.remove = BH => HH.remove(BH), BH.invoke = function() {
        return HH.invoke(...arguments)
      }, BH.invokeAsync = function() {
        return HH.invokeAsync(...arguments)
      }, BH.clear = () => HH.clear(), BH
    }
  },
  9807: (HH, BH) => {
    var LH;
    BH.CloseCode = void 0, (LH = BH.CloseCode || (BH.CloseCode = {}))[LH.CONSENTED = 4e3] = "CONSENTED", LH[LH.DEVMODE_RESTART = 4010] = "DEVMODE_RESTART";
    class AH extends Error {
      constructor(HH, BH) {
        super(BH), this.name = "ServerError", this.code = HH
      }
    }
    class rH extends Error {
      constructor(HH) {
        super(HH), this.name = "AbortError"
      }
    }
    BH.AbortError = rH, BH.ServerError = AH
  },
  9786: (HH, BH, LH) => {
    LH(9792);
    var AH = LH(9800),
      rH = LH(9857),
      SH = LH(9814),
      hH = LH(9904),
      tH = LH(9807),
      zH = LH(9872),
      CH = LH(9931),
      EH = LH(9862);
    EH.registerSerializer("schema", zH.hN), EH.registerSerializer("none", CH.NoneSerializer), BH.Client = AH.Client, BH.MatchMakeError = AH.MatchMakeError, Object.defineProperty(BH, "ErrorCode", {
      enumerable: !0,
      get: function() {
        return rH.ErrorCode
      }
    }), Object.defineProperty(BH, "Protocol", {
      enumerable: !0,
      get: function() {
        return rH.Protocol
      }
    }), BH.XG = SH.XG, BH.Auth = hH.Auth, BH.ServerError = tH.ServerError, BH.hN = zH.hN, BH.getStateCallbacks = zH.getStateCallbacks, BH.registerSerializer = EH.registerSerializer
  },
  9792: () => {
    ArrayBuffer.isView || (ArrayBuffer.isView = HH => null !== HH && "object" === typeof HH && HH.buffer instanceof ArrayBuffer), "undefined" === typeof globalThis && "undefined" !== typeof window && (window.globalThis = window), "undefined" === typeof FormData && (globalThis.FormData = class {})
  },
  9931: (HH, BH) => {
    BH.NoneSerializer = class {
      setState(HH) {}
      getState() {
        return null
      }
      patch(HH) {}
      teardown() {}
      handshake(HH) {}
    }
  },
  9872: (HH, BH, LH) => {
    var AH = LH(9833);
    BH.hN = class {
      setState(HH, BH) {
        this.GX.decode(HH, BH)
      }
      getState() {
        return this.state
      }
      patch(HH, BH) {
        return this.GX.decode(HH, BH)
      }
      teardown() {
        this.GX.root.clearRefs()
      }
      handshake(HH, BH) {
        this.state ? (AH.Reflection.decode(HH, BH), this.GX = new AH.Decoder(this.state)) : (this.GX = AH.Reflection.decode(HH, BH), this.state = this.GX.state)
      }
    }, BH.getStateCallbacks = function(HH) {
      try {
        return AH.getDecoderStateCallbacks(HH.Xx.GX)
      } catch (BH) {
        return
      }
    }
  },
  9862: (HH, BH) => {
    const LH = {};
    BH.getSerializer = function(HH) {
      const BH = LH[HH];
      if (!BH) throw new Error("missing serializer: " + HH);
      return BH
    }, BH.registerSerializer = function(HH, BH) {
      LH[HH] = BH
    }
  },
  9824: (HH, BH, LH) => {
    var AH = LH(9802),
      rH = LH(9833);
    BH.H3TransportTransport = class {
      constructor(HH) {
        this.events = HH, this.isOpen = !1, this.lengthPrefixBuffer = new Uint8Array(9)
      }
      connect(HH) {
        let BH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        const LH = BH.fingerprint && {
          serverCertificateHashes: [{
            algorithm: "sha-256",
            value: new Uint8Array(BH.fingerprint).buffer
          }]
        } || void 0;
        this.wt = new WebTransport(HH, LH), this.wt.ready.then((HH => {
          console.log("WebTransport ready!", HH), this.isOpen = !0, this.unreliableReader = this.wt.datagrams.readable.getReader(), this.unreliableWriter = this.wt.datagrams.writable.getWriter();
          this.wt.incomingBidirectionalStreams.getReader().read().then((HH => {
            this.reader = HH.value.readable.getReader(), this.writer = HH.value.writable.getWriter(), this.sendSeatReservation(BH.room.roomId, BH.sessionId, BH.reconnectionToken), this.readIncomingData(), this.readIncomingUnreliableData()
          })).catch((HH => {
            console.error("failed to read incoming stream", HH), console.error("TODO: close the connection")
          }))
        })).catch((HH => {
          console.log("WebTransport not ready!", HH), this._close()
        })), this.wt.closed.then((HH => {
          console.log("WebTransport closed w/ success", HH), this.events.onclose({
            code: HH.closeCode,
            reason: HH.reason
          })
        })).catch((HH => {
          console.log("WebTransport closed w/ error", HH), this.events.onerror(HH), this.events.onclose({
            code: HH.closeCode,
            reason: HH.reason
          })
        })).finally((() => {
          this._close()
        }))
      }
      send(HH) {
        const BH = rH.encode.number(this.lengthPrefixBuffer, HH.length, {
            offset: 0
          }),
          LH = new Uint8Array(BH + HH.length);
        LH.set(this.lengthPrefixBuffer.subarray(0, BH), 0), LH.set(HH, BH), this.writer.write(LH)
      }
      sendUnreliable(HH) {
        const BH = rH.encode.number(this.lengthPrefixBuffer, HH.length, {
            offset: 0
          }),
          LH = new Uint8Array(BH + HH.length);
        LH.set(this.lengthPrefixBuffer.subarray(0, BH), 0), LH.set(HH, BH), this.unreliableWriter.write(LH)
      }
      close(HH, BH) {
        try {
          this.wt.close({
            closeCode: HH,
            reason: BH
          })
        } catch (LH) {
          console.error(LH)
        }
      }
      readIncomingData() {
        return AH.__awaiter(this, void 0, void 0, (function*() {
          let HH;
          for (; this.isOpen;) {
            try {
              HH = yield this.reader.read();
              const BH = HH.value,
                LH = {
                  offset: 0
                };
              do {
                const HH = rH.decode.number(BH, LH);
                this.events.onmessage({
                  data: BH.subarray(LH.offset, LH.offset + HH)
                }), LH.offset += HH
              } while (LH.offset < BH.length)
            } catch (BH) {
              -1 === BH.message.indexOf("session is closed") && console.error("H3Transport: failed to read incoming data", BH);
              break
            }
            if (HH.done) break
          }
        }))
      }
      readIncomingUnreliableData() {
        return AH.__awaiter(this, void 0, void 0, (function*() {
          let HH;
          for (; this.isOpen;) {
            try {
              HH = yield this.unreliableReader.read();
              const BH = HH.value,
                LH = {
                  offset: 0
                };
              do {
                const HH = rH.decode.number(BH, LH);
                this.events.onmessage({
                  data: BH.subarray(LH.offset, LH.offset + HH)
                }), LH.offset += HH
              } while (LH.offset < BH.length)
            } catch (BH) {
              -1 === BH.message.indexOf("session is closed") && console.error("H3Transport: failed to read incoming data", BH);
              break
            }
            if (HH.done) break
          }
        }))
      }
      sendSeatReservation(HH, BH, LH) {
        const AH = {
            offset: 0
          },
          SH = [];
        rH.encode.string(SH, HH, AH), rH.encode.string(SH, BH, AH), LH && rH.encode.string(SH, LH, AH), this.writer.write(new Uint8Array(SH).buffer)
      }
      _close() {
        this.isOpen = !1
      }
    }
  },
  9841: (HH, BH, LH) => {
    var AH = LH(9848);
    const rH = globalThis.WebSocket || AH;
    BH.WebSocketTransport = class {
      constructor(HH) {
        this.events = HH
      }
      send(HH) {
        this.ws.send(HH)
      }
      sendUnreliable(HH) {
        console.warn("colyseus.js: The WebSocket transport does not support unreliable messages")
      }
      connect(HH, BH) {
        try {
          this.ws = new rH(HH, {
            headers: BH,
            protocols: this.protocols
          })
        } catch (LH) {
          this.ws = new rH(HH, this.protocols)
        }
        this.ws.binaryType = "arraybuffer", this.ws.onopen = this.events.onopen, this.ws.onmessage = this.events.onmessage, this.ws.onclose = this.events.onclose, this.ws.onerror = this.events.onerror
      }
      close(HH, BH) {
        this.ws.close(HH, BH)
      }
      get isOpen() {
        return this.ws.readyState === rH.OPEN
      }
    }
  },
  9848: HH => {
    HH.exports = function() {
      throw new Error("ws does not work in the browser. Browser clients must use the native WebSocket object")
    }
  },
  9897: (HH, BH, LH) => {
    function AH(HH, BH) {
      BH.headers = HH.headers || {}, BH.statusMessage = HH.statusText, BH.statusCode = HH.status, BH.data = HH.response
    }

    function rH(HH, BH, LH) {
      return new Promise((function(rH, SH) {
        LH = LH || {};
        var hH, tH, zH, CH = new XMLHttpRequest,
          EH = LH.body,
          XH = LH.headers || {};
        for (hH in LH.timeout && (CH.timeout = LH.timeout), CH.ontimeout = CH.onerror = function(HH) {
            HH.timeout = "timeout" == HH.type, SH(HH)
          }, CH.onabort = function(HH) {
            HH.aborted = !0, SH(HH)
          }, CH.open(HH, BH.href || BH), CH.onload = function() {
            for (zH = CH.getAllResponseHeaders().trim().split(/[\r\n]+/), AH(CH, CH); tH = zH.shift();) tH = tH.split(": "), CH.headers[tH.shift().toLowerCase()] = tH.join(": ");
            if ((tH = CH.headers["content-type"]) && ~tH.indexOf("application/json")) try {
              CH.data = JSON.parse(CH.data, LH.reviver)
            } catch (HH) {
              return AH(CH, HH), SH(HH)
            }(CH.status >= 400 ? SH : rH)(CH)
          }, typeof FormData < "u" && EH instanceof FormData || EH && "object" == typeof EH && (XH["content-type"] = "application/json", EH = JSON.stringify(EH)), CH.withCredentials = !!LH.withCredentials, XH) CH.setRequestHeader(hH, XH[hH]);
        CH.send(EH), LH.signal && LH.signal.addEventListener("abort", (function() {
          CH.abort()
        }))
      }))
    }
    LH.r(BH), LH.d(BH, {
      del: () => zH,
      get: () => SH,
      patch: () => tH,
      post: () => hH,
      put: () => CH,
      send: () => rH
    });
    var SH = rH.bind(rH, "GET"),
      hH = rH.bind(rH, "POST"),
      tH = rH.bind(rH, "PATCH"),
      zH = rH.bind(rH, "DELETE"),
      CH = rH.bind(rH, "PUT")
  },
  9881: (HH, BH, LH) => {
    var AH, rH, SH;
    LH.r(BH), LH.d(BH, {
      ALWAYS: () => dB,
      C1: () => TH,
      DECIMAL_FIT: () => sB,
      DECIMAL_ROUND: () => aB,
      Decoder: () => zB,
      Encoder: () => wB,
      FLOAT32_OPTIONS: () => YB,
      NEVER: () => ZB,
      Packr: () => cB,
      RESERVE_START_SPACE: () => pB,
      RESET_BUFFER_MODE: () => iB,
      REUSE_BUFFER_MODE: () => JB,
      Unpackr: () => mH,
      addExtension: () => RB,
      clearSource: () => hB,
      decode: () => GB,
      decodeIter: () => yB,
      encode: () => DB,
      encodeIter: () => HL,
      isNativeAccelerationEnabled: () => jH,
      mapsAsObjects: () => LL,
      pack: () => FB,
      roundFloat32: () => vB,
      unpack: () => EB,
      unpackMultiple: () => XB,
      useRecords: () => BL
    });
    try {
      AH = new TextDecoder
    } catch (AL) {}
    var hH = 0;
    const tH = [];
    var zH, CH, EH, XH, GH, YH = tH,
      uH = 0,
      QH = {},
      WH = 0,
      MH = 0,
      xH = [],
      vH = {
        useRecords: !1,
        mapsAsObjects: !0
      };
    class PH {}
    const TH = new PH;
    TH.name = "MessagePack 0xC1";
    var UH, VH, OH, bH = !1,
      kH = 2;
    try {
      new Function("")
    } catch (AL) {
      kH = 1 / 0
    }
    class mH {
      constructor(HH) {
        HH && (!1 === HH.useRecords && void 0 === HH.mapsAsObjects && (HH.mapsAsObjects = !0), HH.sequential && !1 !== HH.trusted && (HH.trusted = !0, HH.structures || 0 == HH.useRecords || (HH.structures = [], HH.maxSharedStructures || (HH.maxSharedStructures = 0))), HH.structures ? HH.structures.sharedLength = HH.structures.length : HH.getStructures && ((HH.structures = []).uninitialized = !0, HH.structures.sharedLength = 0), HH.int64AsNumber && (HH.int64AsType = "number")), Object.assign(this, HH)
      }
      unpack(HH, BH) {
        if (rH) return SB((() => (hB(), this ? this.unpack(HH, BH) : mH.prototype.unpack.call(vH, HH, BH))));
        HH.buffer || HH.constructor !== ArrayBuffer || (HH = "undefined" !== typeof Buffer ? Buffer.from(HH) : new Uint8Array(HH)), "object" === typeof BH ? (SH = BH.end || HH.length, hH = BH.start || 0) : (hH = 0, SH = BH > -1 ? BH : HH.length), uH = 0, MH = 0, CH = null, YH = tH, EH = null, rH = HH;
        try {
          GH = HH.dataView || (HH.dataView = new DataView(HH.buffer, HH.byteOffset, HH.byteLength))
        } catch (AL) {
          if (rH = null, HH instanceof Uint8Array) throw AL;
          throw new Error("Source must be a Uint8Array or Buffer but was a " + (HH && "object" == typeof HH ? HH.constructor.name : typeof HH))
        }
        if (this instanceof mH) {
          if (QH = this, this.structures) return zH = this.structures, oH(BH);
          (!zH || zH.length > 0) && (zH = [])
        } else QH = vH, (!zH || zH.length > 0) && (zH = []);
        return oH(BH)
      }
      unpackMultiple(HH, BH) {
        let LH, AH = 0;
        try {
          bH = !0;
          let rH = HH.length,
            SH = this ? this.unpack(HH, rH) : CB.unpack(HH, rH);
          if (!BH) {
            for (LH = [SH]; hH < rH;) AH = hH, LH.push(oH());
            return LH
          }
          if (!1 === BH(SH, AH, hH)) return;
          for (; hH < rH;)
            if (AH = hH, !1 === BH(oH(), AH, hH)) return
        } catch (AL) {
          throw AL.lastPosition = AH, AL.values = LH, AL
        } finally {
          bH = !1, hB()
        }
      }
      _mergeStructures(HH, BH) {
        VH && (HH = VH.call(this, HH)), HH = HH || [], Object.isFrozen(HH) && (HH = HH.map((HH => HH.slice(0))));
        for (let LH = 0, AH = HH.length; LH < AH; LH++) {
          let BH = HH[LH];
          BH && (BH.isShared = !0, LH >= 32 && (BH.highByte = LH - 32 >> 5))
        }
        HH.sharedLength = HH.length;
        for (let LH in BH || [])
          if (LH >= 0) {
            let AH = HH[LH],
              rH = BH[LH];
            rH && (AH && ((HH.restoreStructures || (HH.restoreStructures = []))[LH] = AH), HH[LH] = rH)
          } return this.structures = HH
      }
      decode(HH, BH) {
        return this.unpack(HH, BH)
      }
    }

    function oH(HH) {
      try {
        if (!QH.trusted && !bH) {
          let HH = zH.sharedLength || 0;
          HH < zH.length && (zH.length = HH)
        }
        let BH;
        if (QH.randomAccessStructure && rH[hH] < 64 && rH[hH] >= 32 && UH ? (BH = UH(rH, hH, SH, QH), rH = null, HH && HH.lazy || !BH || (BH = BH.toJSON()), hH = SH) : BH = fH(), EH && (hH = EH.postBundlePosition, EH = null), bH && (zH.restoreStructures = null), hH == SH) zH && zH.restoreStructures && IH(), zH = null, rH = null, XH && (XH = null);
        else {
          if (hH > SH) throw new Error("Unexpected end of MessagePack data");
          if (!bH) {
            let HH;
            try {
              HH = JSON.stringify(BH, ((HH, BH) => "bigint" === typeof BH ? `${BH}n` : BH)).slice(0, 100)
            } catch (AL) {
              HH = "(JSON view not available " + AL + ")"
            }
            throw new Error("Data read, but end of buffer not reached " + HH)
          }
        }
        return BH
      } catch (AL) {
        throw zH && zH.restoreStructures && IH(), hB(), (AL instanceof RangeError || AL.message.startsWith("Unexpected end of buffer") || hH > SH) && (AL.incomplete = !0), AL
      }
    }

    function IH() {
      for (let HH in zH.restoreStructures) zH[HH] = zH.restoreStructures[HH];
      zH.restoreStructures = null
    }

    function fH() {
      let HH = rH[hH++];
      if (HH < 160) {
        if (HH < 128) {
          if (HH < 64) return HH;
          {
            let BH = zH[63 & HH] || QH.getStructures && eH()[63 & HH];
            return BH ? (BH.read || (BH.read = KH(BH, 63 & HH)), BH.read()) : HH
          }
        }
        if (HH < 144) {
          if (HH -= 128, QH.mapsAsObjects) {
            let BH = {};
            for (let LH = 0; LH < HH; LH++) {
              let HH = pH();
              "__proto__" === HH && (HH = "__proto_"), BH[HH] = fH()
            }
            return BH
          } {
            let BH = new Map;
            for (let LH = 0; LH < HH; LH++) BH.set(fH(), fH());
            return BH
          }
        } {
          HH -= 144;
          let BH = new Array(HH);
          for (let LH = 0; LH < HH; LH++) BH[LH] = fH();
          return QH.freezeData ? Object.freeze(BH) : BH
        }
      }
      if (HH < 192) {
        let BH = HH - 160;
        if (MH >= hH) return CH.slice(hH - WH, (hH += BH) - WH);
        if (0 == MH && SH < 140) {
          let HH = BH < 16 ? dH(BH) : ZH(BH);
          if (null != HH) return HH
        }
        return qH(BH)
      } {
        let BH;
        switch (HH) {
          case 192:
            return null;
          case 193:
            return EH ? (BH = fH(), BH > 0 ? EH[1].slice(EH.position1, EH.position1 += BH) : EH[0].slice(EH.position0, EH.position0 -= BH)) : TH;
          case 194:
            return !1;
          case 195:
            return !0;
          case 196:
            if (BH = rH[hH++], void 0 === BH) throw new Error("Unexpected end of buffer");
            return sH(BH);
          case 197:
            return BH = GH.getUint16(hH), hH += 2, sH(BH);
          case 198:
            return BH = GH.getUint32(hH), hH += 4, sH(BH);
          case 199:
            return JH(rH[hH++]);
          case 200:
            return BH = GH.getUint16(hH), hH += 2, JH(BH);
          case 201:
            return BH = GH.getUint32(hH), hH += 4, JH(BH);
          case 202:
            if (BH = GH.getFloat32(hH), QH.useFloat32 > 2) {
              let HH = tB[(127 & rH[hH]) << 1 | rH[hH + 1] >> 7];
              return hH += 4, (HH * BH + (BH > 0 ? .5 : -.5) | 0) / HH
            }
            return hH += 4, BH;
          case 203:
            return BH = GH.getFloat64(hH), hH += 8, BH;
          case 204:
            return rH[hH++];
          case 205:
            return BH = GH.getUint16(hH), hH += 2, BH;
          case 206:
            return BH = GH.getUint32(hH), hH += 4, BH;
          case 207:
            return "number" === QH.int64AsType ? (BH = 4294967296 * GH.getUint32(hH), BH += GH.getUint32(hH + 4)) : "string" === QH.int64AsType ? BH = GH.getBigUint64(hH).toString() : "auto" === QH.int64AsType ? (BH = GH.getBigUint64(hH), BH <= BigInt(2) << BigInt(52) && (BH = Number(BH))) : BH = GH.getBigUint64(hH), hH += 8, BH;
          case 208:
            return GH.getInt8(hH++);
          case 209:
            return BH = GH.getInt16(hH), hH += 2, BH;
          case 210:
            return BH = GH.getInt32(hH), hH += 4, BH;
          case 211:
            return "number" === QH.int64AsType ? (BH = 4294967296 * GH.getInt32(hH), BH += GH.getUint32(hH + 4)) : "string" === QH.int64AsType ? BH = GH.getBigInt64(hH).toString() : "auto" === QH.int64AsType ? (BH = GH.getBigInt64(hH), BH >= BigInt(-2) << BigInt(52) && BH <= BigInt(2) << BigInt(52) && (BH = Number(BH))) : BH = GH.getBigInt64(hH), hH += 8, BH;
          case 212:
            if (BH = rH[hH++], 114 == BH) return HB(63 & rH[hH++]);
            {
              let HH = xH[BH];
              if (HH) return HH.read ? (hH++, HH.read(fH())) : HH.noBuffer ? (hH++, HH()) : HH(rH.subarray(hH, ++hH));
              throw new Error("Unknown extension " + BH)
            }
          case 213:
            return BH = rH[hH], 114 == BH ? (hH++, HB(63 & rH[hH++], rH[hH++])) : JH(2);
          case 214:
            return JH(4);
          case 215:
            return JH(8);
          case 216:
            return JH(16);
          case 217:
            return BH = rH[hH++], MH >= hH ? CH.slice(hH - WH, (hH += BH) - WH) : gH(BH);
          case 218:
            return BH = GH.getUint16(hH), MH >= (hH += 2) ? CH.slice(hH - WH, (hH += BH) - WH) : NH(BH);
          case 219:
            return BH = GH.getUint32(hH), MH >= (hH += 4) ? CH.slice(hH - WH, (hH += BH) - WH) : RH(BH);
          case 220:
            return BH = GH.getUint16(hH), hH += 2, FH(BH);
          case 221:
            return BH = GH.getUint32(hH), hH += 4, FH(BH);
          case 222:
            return BH = GH.getUint16(hH), hH += 2, DH(BH);
          case 223:
            return BH = GH.getUint32(hH), hH += 4, DH(BH);
          default:
            if (HH >= 224) return HH - 256;
            if (void 0 === HH) {
              let HH = new Error("Unexpected end of MessagePack data");
              throw HH.incomplete = !0, HH
            }
            throw new Error("Unknown MessagePack token " + HH)
        }
      }
    }
    const lH = /^[a-zA-Z_$][a-zA-Z\d_$]*$/;

    function KH(HH, BH) {
      function LH() {
        if (LH.count++ > kH) {
          let LH = HH.read = new Function("r", "return function(){return " + (QH.freezeData ? "Object.freeze" : "") + "({" + HH.map((HH => "__proto__" === HH ? "__proto_:r()" : lH.test(HH) ? HH + ":r()" : "[" + JSON.stringify(HH) + "]:r()")).join(",") + "})}")(fH);
          return 0 === HH.highByte && (HH.read = cH(BH, HH.read)), LH()
        }
        let AH = {};
        for (let BH = 0, LH = HH.length; BH < LH; BH++) {
          let LH = HH[BH];
          "__proto__" === LH && (LH = "__proto_"), AH[LH] = fH()
        }
        return QH.freezeData ? Object.freeze(AH) : AH
      }
      return LH.count = 0, 0 === HH.highByte ? cH(BH, LH) : LH
    }
    const cH = (HH, BH) => function() {
      let LH = rH[hH++];
      if (0 === LH) return BH();
      let AH = HH < 32 ? -(HH + (LH << 5)) : HH + (LH << 5),
        SH = zH[AH] || eH()[AH];
      if (!SH) throw new Error("Record id is not defined for " + AH);
      return SH.read || (SH.read = KH(SH, HH)), SH.read()
    };

    function eH() {
      let HH = SB((() => (rH = null, QH.getStructures())));
      return zH = QH._mergeStructures(HH, zH)
    }
    var qH = nH,
      gH = nH,
      NH = nH,
      RH = nH;
    let jH = !1;

    function nH(HH) {
      let BH;
      if (HH < 16 && (BH = dH(HH))) return BH;
      if (HH > 64 && AH) return AH.decode(rH.subarray(hH, hH += HH));
      const LH = hH + HH,
        SH = [];
      for (BH = ""; hH < LH;) {
        const HH = rH[hH++];
        if (0 === (128 & HH)) SH.push(HH);
        else if (192 === (224 & HH)) {
          const BH = 63 & rH[hH++];
          SH.push((31 & HH) << 6 | BH)
        } else if (224 === (240 & HH)) {
          const BH = 63 & rH[hH++],
            LH = 63 & rH[hH++];
          SH.push((31 & HH) << 12 | BH << 6 | LH)
        } else if (240 === (248 & HH)) {
          let BH = (7 & HH) << 18 | (63 & rH[hH++]) << 12 | (63 & rH[hH++]) << 6 | 63 & rH[hH++];
          BH > 65535 && (BH -= 65536, SH.push(BH >>> 10 & 1023 | 55296), BH = 56320 | 1023 & BH), SH.push(BH)
        } else SH.push(HH);
        SH.length >= 4096 && (BH += wH.apply(String, SH), SH.length = 0)
      }
      return SH.length > 0 && (BH += wH.apply(String, SH)), BH
    }

    function FH(HH) {
      let BH = new Array(HH);
      for (let LH = 0; LH < HH; LH++) BH[LH] = fH();
      return QH.freezeData ? Object.freeze(BH) : BH
    }

    function DH(HH) {
      if (QH.mapsAsObjects) {
        let BH = {};
        for (let LH = 0; LH < HH; LH++) {
          let HH = pH();
          "__proto__" === HH && (HH = "__proto_"), BH[HH] = fH()
        }
        return BH
      } {
        let BH = new Map;
        for (let LH = 0; LH < HH; LH++) BH.set(fH(), fH());
        return BH
      }
    }
    var wH = String.fromCharCode;

    function ZH(HH) {
      let BH = hH,
        LH = new Array(HH);
      for (let AH = 0; AH < HH; AH++) {
        const HH = rH[hH++];
        if ((128 & HH) > 0) return void(hH = BH);
        LH[AH] = HH
      }
      return wH.apply(String, LH)
    }

    function dH(HH) {
      if (HH < 4) {
        if (HH < 2) {
          if (0 === HH) return "";
          {
            let HH = rH[hH++];
            return (128 & HH) > 1 ? void(hH -= 1) : wH(HH)
          }
        } {
          let BH = rH[hH++],
            LH = rH[hH++];
          if ((128 & BH) > 0 || (128 & LH) > 0) return void(hH -= 2);
          if (HH < 3) return wH(BH, LH);
          let AH = rH[hH++];
          return (128 & AH) > 0 ? void(hH -= 3) : wH(BH, LH, AH)
        }
      } {
        let BH = rH[hH++],
          LH = rH[hH++],
          AH = rH[hH++],
          SH = rH[hH++];
        if ((128 & BH) > 0 || (128 & LH) > 0 || (128 & AH) > 0 || (128 & SH) > 0) return void(hH -= 4);
        if (HH < 6) {
          if (4 === HH) return wH(BH, LH, AH, SH);
          {
            let HH = rH[hH++];
            return (128 & HH) > 0 ? void(hH -= 5) : wH(BH, LH, AH, SH, HH)
          }
        }
        if (HH < 8) {
          let tH = rH[hH++],
            zH = rH[hH++];
          if ((128 & tH) > 0 || (128 & zH) > 0) return void(hH -= 6);
          if (HH < 7) return wH(BH, LH, AH, SH, tH, zH);
          let CH = rH[hH++];
          return (128 & CH) > 0 ? void(hH -= 7) : wH(BH, LH, AH, SH, tH, zH, CH)
        } {
          let tH = rH[hH++],
            zH = rH[hH++],
            CH = rH[hH++],
            EH = rH[hH++];
          if ((128 & tH) > 0 || (128 & zH) > 0 || (128 & CH) > 0 || (128 & EH) > 0) return void(hH -= 8);
          if (HH < 10) {
            if (8 === HH) return wH(BH, LH, AH, SH, tH, zH, CH, EH);
            {
              let HH = rH[hH++];
              return (128 & HH) > 0 ? void(hH -= 9) : wH(BH, LH, AH, SH, tH, zH, CH, EH, HH)
            }
          }
          if (HH < 12) {
            let XH = rH[hH++],
              GH = rH[hH++];
            if ((128 & XH) > 0 || (128 & GH) > 0) return void(hH -= 10);
            if (HH < 11) return wH(BH, LH, AH, SH, tH, zH, CH, EH, XH, GH);
            let YH = rH[hH++];
            return (128 & YH) > 0 ? void(hH -= 11) : wH(BH, LH, AH, SH, tH, zH, CH, EH, XH, GH, YH)
          } {
            let XH = rH[hH++],
              GH = rH[hH++],
              YH = rH[hH++],
              uH = rH[hH++];
            if ((128 & XH) > 0 || (128 & GH) > 0 || (128 & YH) > 0 || (128 & uH) > 0) return void(hH -= 12);
            if (HH < 14) {
              if (12 === HH) return wH(BH, LH, AH, SH, tH, zH, CH, EH, XH, GH, YH, uH);
              {
                let HH = rH[hH++];
                return (128 & HH) > 0 ? void(hH -= 13) : wH(BH, LH, AH, SH, tH, zH, CH, EH, XH, GH, YH, uH, HH)
              }
            } {
              let QH = rH[hH++],
                WH = rH[hH++];
              if ((128 & QH) > 0 || (128 & WH) > 0) return void(hH -= 14);
              if (HH < 15) return wH(BH, LH, AH, SH, tH, zH, CH, EH, XH, GH, YH, uH, QH, WH);
              let MH = rH[hH++];
              return (128 & MH) > 0 ? void(hH -= 15) : wH(BH, LH, AH, SH, tH, zH, CH, EH, XH, GH, YH, uH, QH, WH, MH)
            }
          }
        }
      }
    }

    function aH() {
      let HH, BH = rH[hH++];
      if (BH < 192) HH = BH - 160;
      else switch (BH) {
        case 217:
          HH = rH[hH++];
          break;
        case 218:
          HH = GH.getUint16(hH), hH += 2;
          break;
        case 219:
          HH = GH.getUint32(hH), hH += 4;
          break;
        default:
          throw new Error("Expected string")
      }
      return nH(HH)
    }

    function sH(HH) {
      return QH.copyBuffers ? Uint8Array.prototype.slice.call(rH, hH, hH += HH) : rH.subarray(hH, hH += HH)
    }

    function JH(HH) {
      let BH = rH[hH++];
      if (xH[BH]) {
        let LH;
        return xH[BH](rH.subarray(hH, LH = hH += HH), (HH => {
          hH = HH;
          try {
            return fH()
          } finally {
            hH = LH
          }
        }))
      }
      throw new Error("Unknown extension type " + BH)
    }
    var iH = new Array(4096);

    function pH() {
      let HH = rH[hH++];
      if (!(HH >= 160 && HH < 192)) return hH--, yH(fH());
      if (HH -= 160, MH >= hH) return CH.slice(hH - WH, (hH += HH) - WH);
      if (!(0 == MH && SH < 180)) return qH(HH);
      let BH, LH = 4095 & (HH << 5 ^ (HH > 1 ? GH.getUint16(hH) : HH > 0 ? rH[hH] : 0)),
        AH = iH[LH],
        tH = hH,
        zH = hH + HH - 3,
        EH = 0;
      if (AH && AH.bytes == HH) {
        for (; tH < zH;) {
          if (BH = GH.getUint32(tH), BH != AH[EH++]) {
            tH = 1879048192;
            break
          }
          tH += 4
        }
        for (zH += 3; tH < zH;)
          if (BH = rH[tH++], BH != AH[EH++]) {
            tH = 1879048192;
            break
          } if (tH === zH) return hH = tH, AH.string;
        zH -= 3, tH = hH
      }
      for (AH = [], iH[LH] = AH, AH.bytes = HH; tH < zH;) BH = GH.getUint32(tH), AH.push(BH), tH += 4;
      for (zH += 3; tH < zH;) BH = rH[tH++], AH.push(BH);
      let XH = HH < 16 ? dH(HH) : ZH(HH);
      return AH.string = null != XH ? XH : qH(HH)
    }

    function yH(HH) {
      if ("string" === typeof HH) return HH;
      if ("number" === typeof HH || "boolean" === typeof HH || "bigint" === typeof HH) return HH.toString();
      if (null == HH) return HH + "";
      if (QH.allowArraysInMapKeys && Array.isArray(HH) && HH.flat().every((HH => ["string", "number", "boolean", "bigint"].includes(typeof HH)))) return HH.flat().toString();
      throw new Error("Invalid property type for record: " + typeof HH)
    }
    const HB = (HH, BH) => {
      let LH = fH().map(yH),
        AH = HH;
      void 0 !== BH && (HH = HH < 32 ? -((BH << 5) + HH) : (BH << 5) + HH, LH.highByte = BH);
      let rH = zH[HH];
      return rH && (rH.isShared || bH) && ((zH.restoreStructures || (zH.restoreStructures = []))[HH] = rH), zH[HH] = LH, LH.read = KH(LH, AH), LH.read()
    };
    xH[0] = () => {}, xH[0].noBuffer = !0, xH[66] = HH => {
      let BH = HH.length,
        LH = BigInt(128 & HH[0] ? HH[0] - 256 : HH[0]);
      for (let AH = 1; AH < BH; AH++) LH <<= BigInt(8), LH += BigInt(HH[AH]);
      return LH
    };
    let BB = {
      Error: Error,
      TypeError: TypeError,
      ReferenceError: ReferenceError
    };
    xH[101] = () => {
      let HH = fH();
      return (BB[HH[0]] || Error)(HH[1], {
        cause: HH[2]
      })
    }, xH[105] = HH => {
      if (!1 === QH.structuredClone) throw new Error("Structured clone extension is disabled");
      let BH = GH.getUint32(hH - 4);
      XH || (XH = new Map);
      let LH, AH = rH[hH];
      LH = AH >= 144 && AH < 160 || 220 == AH || 221 == AH ? [] : {};
      let SH = {
        target: LH
      };
      XH.set(BH, SH);
      let tH = fH();
      return SH.used ? Object.assign(LH, tH) : (SH.target = tH, tH)
    }, xH[112] = HH => {
      if (!1 === QH.structuredClone) throw new Error("Structured clone extension is disabled");
      let BH = GH.getUint32(hH - 4),
        LH = XH.get(BH);
      return LH.used = !0, LH.target
    }, xH[115] = () => new Set(fH());
    const LB = ["Int8", "Uint8", "Uint8Clamped", "Int16", "Uint16", "Int32", "Uint32", "Float32", "Float64", "BigInt64", "BigUint64"].map((HH => HH + "Array"));
    let AB = "object" === typeof globalThis ? globalThis : window;
    xH[116] = HH => {
      let BH = HH[0],
        LH = LB[BH];
      if (!LH) {
        if (16 === BH) {
          let BH = new ArrayBuffer(HH.length - 1);
          return new Uint8Array(BH).set(HH.subarray(1)), BH
        }
        throw new Error("Could not find typed array for code " + BH)
      }
      return new AB[LH](Uint8Array.prototype.slice.call(HH, 1).buffer)
    }, xH[120] = () => {
      let HH = fH();
      return new RegExp(HH[0], HH[1])
    };
    const rB = [];

    function SB(HH) {
      OH && OH();
      let BH = SH,
        LH = hH,
        AH = uH,
        tH = WH,
        xH = MH,
        vH = CH,
        PH = YH,
        TH = XH,
        UH = EH,
        VH = new Uint8Array(rH.slice(0, SH)),
        kH = zH,
        mH = zH.slice(0, zH.length),
        oH = QH,
        IH = bH,
        fH = HH();
      return SH = BH, hH = LH, uH = AH, WH = tH, MH = xH, CH = vH, YH = PH, XH = TH, EH = UH, rH = VH, bH = IH, (zH = kH).splice(0, zH.length, ...mH), QH = oH, GH = new DataView(rH.buffer, rH.byteOffset, rH.byteLength), fH
    }

    function hB() {
      rH = null, XH = null, zH = null
    }
    xH[98] = HH => {
      let BH = (HH[0] << 24) + (HH[1] << 16) + (HH[2] << 8) + HH[3],
        LH = hH;
      return hH += BH - HH.length, EH = rB, (EH = [aH(), aH()]).position0 = 0, EH.position1 = 0, EH.postBundlePosition = hH, hH = LH, fH()
    }, xH[255] = HH => 4 == HH.length ? new Date(1e3 * (16777216 * HH[0] + (HH[1] << 16) + (HH[2] << 8) + HH[3])) : 8 == HH.length ? new Date(((HH[0] << 22) + (HH[1] << 14) + (HH[2] << 6) + (HH[3] >> 2)) / 1e6 + 1e3 * (4294967296 * (3 & HH[3]) + 16777216 * HH[4] + (HH[5] << 16) + (HH[6] << 8) + HH[7])) : 12 == HH.length ? new Date(((HH[0] << 24) + (HH[1] << 16) + (HH[2] << 8) + HH[3]) / 1e6 + 1e3 * ((128 & HH[4] ? -281474976710656 : 0) + 1099511627776 * HH[6] + 4294967296 * HH[7] + 16777216 * HH[8] + (HH[9] << 16) + (HH[10] << 8) + HH[11])) : new Date("invalid");
    const tB = new Array(147);
    for (let rL = 0; rL < 256; rL++) tB[rL] = +("1e" + Math.floor(45.15 - .30103 * rL));
    const zB = mH;
    var CB = new mH({
      useRecords: !1
    });
    const EB = CB.unpack,
      XB = CB.unpackMultiple,
      GB = CB.unpack,
      YB = {
        NEVER: 0,
        ALWAYS: 1,
        DECIMAL_ROUND: 3,
        DECIMAL_FIT: 4
      };
    let uB, QB, WB, MB = new Float32Array(1),
      xB = new Uint8Array(MB.buffer, 0, 4);

    function vB(HH) {
      MB[0] = HH;
      let BH = tB[(127 & xB[3]) << 1 | xB[2] >> 7];
      return (BH * HH + (HH > 0 ? .5 : -.5) | 0) / BH
    }
    try {
      uB = new TextEncoder
    } catch (AL) {}
    const PB = "undefined" !== typeof Buffer,
      TB = PB ? function(HH) {
        return Buffer.allocUnsafeSlow(HH)
      } : Uint8Array,
      UB = PB ? Buffer : Uint8Array,
      VB = PB ? 4294967296 : 2144337920;
    let OB, bB, kB, mB, oB, IB = 0,
      fB = null;
    const lB = /[\u0080-\uFFFF]/,
      KB = Symbol("record-id");
    class cB extends mH {
      constructor(HH) {
        let BH, LH, AH, rH;
        super(HH), this.offset = 0;
        let SH = UB.prototype.utf8Write ? function(HH, BH) {
            return OB.utf8Write(HH, BH, OB.byteLength - BH)
          } : !(!uB || !uB.encodeInto) && function(HH, BH) {
            return uB.encodeInto(HH, OB.subarray(BH)).written
          },
          hH = this;
        HH || (HH = {});
        let tH = HH && HH.sequential,
          zH = HH.structures || HH.saveStructures,
          CH = HH.maxSharedStructures;
        if (null == CH && (CH = zH ? 32 : 0), CH > 8160) throw new Error("Maximum maxSharedStructure is 8160");
        HH.structuredClone && void 0 == HH.moreTypes && (this.moreTypes = !0);
        let EH = HH.maxOwnStructures;
        null == EH && (EH = zH ? 32 : 64), this.structures || 0 == HH.useRecords || (this.structures = []);
        let XH = CH > 32 || EH + CH > 64,
          GH = CH + 64,
          YH = CH + EH + 64;
        if (YH > 8256) throw new Error("Maximum maxSharedStructure + maxOwnStructure is 8192");
        let uH = [],
          QH = 0,
          WH = 0;
        this.pack = this.encode = function(HH, SH) {
          if (OB || (OB = new TB(8192), kB = OB.dataView || (OB.dataView = new DataView(OB.buffer, 0, 8192)), IB = 0), mB = OB.length - 10, mB - IB < 2048 ? (OB = new TB(OB.length), kB = OB.dataView || (OB.dataView = new DataView(OB.buffer, 0, OB.length)), mB = OB.length - 10, IB = 0) : IB = IB + 7 & 2147483640, BH = IB, SH & pB && (IB += 255 & SH), rH = hH.structuredClone ? new Map : null, hH.bundleStrings && "string" !== typeof HH ? (fB = [], fB.size = 1 / 0) : fB = null, AH = hH.structures, AH) {
            AH.uninitialized && (AH = hH._mergeStructures(hH.getStructures()));
            let HH = AH.sharedLength || 0;
            if (HH > CH) throw new Error("Shared structures is larger than maximum shared structures, try increasing maxSharedStructures to " + AH.sharedLength);
            if (!AH.transitions) {
              AH.transitions = Object.create(null);
              for (let BH = 0; BH < HH; BH++) {
                let HH = AH[BH];
                if (!HH) continue;
                let LH, rH = AH.transitions;
                for (let BH = 0, AH = HH.length; BH < AH; BH++) {
                  let AH = HH[BH];
                  LH = rH[AH], LH || (LH = rH[AH] = Object.create(null)), rH = LH
                }
                rH[KB] = BH + 64
              }
              this.lastNamedStructuresLength = HH
            }
            tH || (AH.nextId = HH + 64)
          }
          let zH;
          LH && (LH = !1);
          try {
            hH.randomAccessStructure && HH && HH.constructor && HH.constructor === Object ? mH(HH) : vH(HH);
            let LH = fB;
            if (fB && NB(BH, vH, 0), rH && rH.idsToInsert) {
              let HH = rH.idsToInsert.sort(((HH, BH) => HH.offset > BH.offset ? 1 : -1)),
                AH = HH.length,
                SH = -1;
              for (; LH && AH > 0;) {
                let rH = HH[--AH].offset + BH;
                rH < LH.stringsPosition + BH && -1 === SH && (SH = 0), rH > LH.position + BH ? SH >= 0 && (SH += 6) : (SH >= 0 && (kB.setUint32(LH.position + BH, kB.getUint32(LH.position + BH) + SH), SH = -1), LH = LH.previous, AH++)
              }
              SH >= 0 && LH && kB.setUint32(LH.position + BH, kB.getUint32(LH.position + BH) + SH), IB += 6 * HH.length, IB > mB && OH(IB), hH.offset = IB;
              let tH = function(HH, BH) {
                let LH, AH = 6 * BH.length,
                  rH = HH.length - AH;
                for (; LH = BH.pop();) {
                  let BH = LH.offset,
                    SH = LH.id;
                  HH.copyWithin(BH + AH, BH, rH), AH -= 6;
                  let hH = BH + AH;
                  HH[hH++] = 214, HH[hH++] = 105, HH[hH++] = SH >> 24, HH[hH++] = SH >> 16 & 255, HH[hH++] = SH >> 8 & 255, HH[hH++] = 255 & SH, rH = BH
                }
                return HH
              }(OB.subarray(BH, IB), HH);
              return rH = null, tH
            }
            return hH.offset = IB, SH & JB ? (OB.start = BH, OB.end = IB, OB) : OB.subarray(BH, IB)
          } catch (AL) {
            throw zH = AL, AL
          } finally {
            if (AH && (MH(), LH && hH.saveStructures)) {
              let LH = AH.sharedLength || 0,
                rH = OB.subarray(BH, IB),
                tH = jB(AH, hH);
              if (!zH) return !1 === hH.saveStructures(tH, tH.isCompatible) ? hH.pack(HH, SH) : (hH.lastNamedStructuresLength = LH, OB.length > 1073741824 && (OB = null), rH)
            }
            OB.length > 1073741824 && (OB = null), SH & iB && (IB = BH)
          }
        };
        const MH = () => {
            WH < 10 && WH++;
            let HH = AH.sharedLength || 0;
            if (AH.length > HH && !tH && (AH.length = HH), QH > 1e4) AH.transitions = null, WH = 0, QH = 0, uH.length > 0 && (uH = []);
            else if (uH.length > 0 && !tH) {
              for (let HH = 0, BH = uH.length; HH < BH; HH++) uH[HH][KB] = 0;
              uH = []
            }
          },
          xH = HH => {
            var BH = HH.length;
            BH < 16 ? OB[IB++] = 144 | BH : BH < 65536 ? (OB[IB++] = 220, OB[IB++] = BH >> 8, OB[IB++] = 255 & BH) : (OB[IB++] = 221, kB.setUint32(IB, BH), IB += 4);
            for (let LH = 0; LH < BH; LH++) vH(HH[LH])
          },
          vH = HH => {
            IB > mB && (OB = OH(IB));
            var LH, AH = typeof HH;
            if ("string" === AH) {
              let AH, rH = HH.length;
              if (fB && rH >= 4 && rH < 4096) {
                if ((fB.size += rH) > 21760) {
                  let HH, LH, AH = (fB[0] ? 3 * fB[0].length + fB[1].length : 0) + 10;
                  IB + AH > mB && (OB = OH(IB + AH)), fB.position ? (LH = fB, OB[IB] = 200, IB += 3, OB[IB++] = 98, HH = IB - BH, IB += 4, NB(BH, vH, 0), kB.setUint16(HH + BH - 3, IB - BH - HH)) : (OB[IB++] = 214, OB[IB++] = 98, HH = IB - BH, IB += 4), fB = ["", ""], fB.previous = LH, fB.size = 0, fB.position = HH
                }
                let LH = lB.test(HH);
                return fB[LH ? 0 : 1] += HH, OB[IB++] = 193, void vH(LH ? -rH : rH)
              }
              AH = rH < 32 ? 1 : rH < 256 ? 2 : rH < 65536 ? 3 : 5;
              let hH = 3 * rH;
              if (IB + hH > mB && (OB = OH(IB + hH)), rH < 64 || !SH) {
                let BH, SH, hH, tH = IB + AH;
                for (BH = 0; BH < rH; BH++) SH = HH.charCodeAt(BH), SH < 128 ? OB[tH++] = SH : SH < 2048 ? (OB[tH++] = SH >> 6 | 192, OB[tH++] = 63 & SH | 128) : 55296 === (64512 & SH) && 56320 === (64512 & (hH = HH.charCodeAt(BH + 1))) ? (SH = 65536 + ((1023 & SH) << 10) + (1023 & hH), BH++, OB[tH++] = SH >> 18 | 240, OB[tH++] = SH >> 12 & 63 | 128, OB[tH++] = SH >> 6 & 63 | 128, OB[tH++] = 63 & SH | 128) : (OB[tH++] = SH >> 12 | 224, OB[tH++] = SH >> 6 & 63 | 128, OB[tH++] = 63 & SH | 128);
                LH = tH - IB - AH
              } else LH = SH(HH, IB + AH);
              LH < 32 ? OB[IB++] = 160 | LH : LH < 256 ? (AH < 2 && OB.copyWithin(IB + 2, IB + 1, IB + 1 + LH), OB[IB++] = 217, OB[IB++] = LH) : LH < 65536 ? (AH < 3 && OB.copyWithin(IB + 3, IB + 2, IB + 2 + LH), OB[IB++] = 218, OB[IB++] = LH >> 8, OB[IB++] = 255 & LH) : (AH < 5 && OB.copyWithin(IB + 5, IB + 3, IB + 3 + LH), OB[IB++] = 219, kB.setUint32(IB, LH), IB += 4), IB += LH
            } else if ("number" === AH)
              if (HH >>> 0 === HH) HH < 32 || HH < 128 && !1 === this.useRecords || HH < 64 && !this.randomAccessStructure ? OB[IB++] = HH : HH < 256 ? (OB[IB++] = 204, OB[IB++] = HH) : HH < 65536 ? (OB[IB++] = 205, OB[IB++] = HH >> 8, OB[IB++] = 255 & HH) : (OB[IB++] = 206, kB.setUint32(IB, HH), IB += 4);
              else if ((HH | 0) === HH) HH >= -32 ? OB[IB++] = 256 + HH : HH >= -128 ? (OB[IB++] = 208, OB[IB++] = HH + 256) : HH >= -32768 ? (OB[IB++] = 209, kB.setInt16(IB, HH), IB += 2) : (OB[IB++] = 210, kB.setInt32(IB, HH), IB += 4);
            else {
              let BH;
              if ((BH = this.useFloat32) > 0 && HH < 4294967296 && HH >= -2147483648) {
                let LH;
                if (OB[IB++] = 202, kB.setFloat32(IB, HH), BH < 4 || ((LH = HH * tB[(127 & OB[IB]) << 1 | OB[IB + 1] >> 7]) | 0) === LH) return void(IB += 4);
                IB--
              }
              OB[IB++] = 203, kB.setFloat64(IB, HH), IB += 8
            } else if ("object" === AH || "function" === AH)
              if (HH) {
                if (rH) {
                  let LH = rH.get(HH);
                  if (LH) {
                    if (!LH.id) {
                      let HH = rH.idsToInsert || (rH.idsToInsert = []);
                      LH.id = HH.push(LH)
                    }
                    return OB[IB++] = 214, OB[IB++] = 112, kB.setUint32(IB, LH.id), void(IB += 4)
                  }
                  rH.set(HH, {
                    offset: IB - BH
                  })
                }
                let SH = HH.constructor;
                if (SH === Object) VH(HH);
                else if (SH === Array) xH(HH);
                else if (SH === Map)
                  if (this.mapAsEmptyObject) OB[IB++] = 128;
                  else {
                    (LH = HH.size) < 16 ? OB[IB++] = 128 | LH : LH < 65536 ? (OB[IB++] = 222, OB[IB++] = LH >> 8, OB[IB++] = 255 & LH) : (OB[IB++] = 223, kB.setUint32(IB, LH), IB += 4);
                    for (let [BH, LH] of HH) vH(BH), vH(LH)
                  }
                else {
                  for (let BH = 0, LH = QB.length; BH < LH; BH++) {
                    if (HH instanceof WB[BH]) {
                      let LH = QB[BH];
                      if (LH.write) {
                        LH.type && (OB[IB++] = 212, OB[IB++] = LH.type, OB[IB++] = 0);
                        let BH = LH.write.call(this, HH);
                        return void(BH === HH ? Array.isArray(HH) ? xH(HH) : VH(HH) : vH(BH))
                      }
                      let AH, rH = OB,
                        SH = kB,
                        hH = IB;
                      OB = null;
                      try {
                        AH = LH.pack.call(this, HH, (HH => (OB = rH, rH = null, IB += HH, IB > mB && OH(IB), {
                          target: OB,
                          targetView: kB,
                          position: IB - HH
                        })), vH)
                      } finally {
                        rH && (OB = rH, kB = SH, IB = hH, mB = OB.length - 10)
                      }
                      return void(AH && (AH.length + IB > mB && OH(AH.length + IB), IB = gB(AH, OB, IB, LH.type)))
                    }
                  }
                  if (Array.isArray(HH)) xH(HH);
                  else {
                    if (HH.toJSON) {
                      const BH = HH.toJSON();
                      if (BH !== HH) return vH(BH)
                    }
                    if ("function" === AH) return vH(this.writeFunction && this.writeFunction(HH));
                    VH(HH)
                  }
                }
              } else OB[IB++] = 192;
            else if ("boolean" === AH) OB[IB++] = HH ? 195 : 194;
            else if ("bigint" === AH) {
              if (HH < BigInt(1) << BigInt(63) && HH >= -(BigInt(1) << BigInt(63))) OB[IB++] = 211, kB.setBigInt64(IB, HH);
              else if (HH < BigInt(1) << BigInt(64) && HH > 0) OB[IB++] = 207, kB.setBigUint64(IB, HH);
              else {
                if (!this.largeBigIntToFloat) {
                  if (this.largeBigIntToString) return vH(HH.toString());
                  if (this.useBigIntExtension && HH < BigInt(2) ** BigInt(1023) && HH > -(BigInt(2) ** BigInt(1023))) {
                    OB[IB++] = 199, IB++, OB[IB++] = 66;
                    let BH, LH = [];
                    do {
                      let AH = HH & BigInt(255);
                      BH = (AH & BigInt(128)) === (HH < BigInt(0) ? BigInt(128) : BigInt(0)), LH.push(AH), HH >>= BigInt(8)
                    } while (HH !== BigInt(0) && HH !== BigInt(-1) || !BH);
                    OB[IB - 2] = LH.length;
                    for (let HH = LH.length; HH > 0;) OB[IB++] = Number(LH[--HH]);
                    return
                  }
                  throw new RangeError(HH + " was too large to fit in MessagePack 64-bit integer format, use useBigIntExtension, or set largeBigIntToFloat to convert to float-64, or set largeBigIntToString to convert to string")
                }
                OB[IB++] = 203, kB.setFloat64(IB, Number(HH))
              }
              IB += 8
            } else {
              if ("undefined" !== AH) throw new Error("Unknown type: " + AH);
              this.encodeUndefinedAsNil ? OB[IB++] = 192 : (OB[IB++] = 212, OB[IB++] = 0, OB[IB++] = 0)
            }
          },
          PH = this.variableMapSize || this.coercibleKeyAsNumber || this.skipValues ? HH => {
            let BH;
            if (this.skipValues) {
              BH = [];
              for (let LH in HH) "function" === typeof HH.hasOwnProperty && !HH.hasOwnProperty(LH) || this.skipValues.includes(HH[LH]) || BH.push(LH)
            } else BH = Object.keys(HH);
            let LH, AH = BH.length;
            if (AH < 16 ? OB[IB++] = 128 | AH : AH < 65536 ? (OB[IB++] = 222, OB[IB++] = AH >> 8, OB[IB++] = 255 & AH) : (OB[IB++] = 223, kB.setUint32(IB, AH), IB += 4), this.coercibleKeyAsNumber)
              for (let rH = 0; rH < AH; rH++) {
                LH = BH[rH];
                let AH = Number(LH);
                vH(isNaN(AH) ? LH : AH), vH(HH[LH])
              } else
                for (let rH = 0; rH < AH; rH++) vH(LH = BH[rH]), vH(HH[LH])
          } : HH => {
            OB[IB++] = 222;
            let LH = IB - BH;
            IB += 2;
            let AH = 0;
            for (let BH in HH)("function" !== typeof HH.hasOwnProperty || HH.hasOwnProperty(BH)) && (vH(BH), vH(HH[BH]), AH++);
            if (AH > 65535) throw new Error('Object is too large to serialize with fast 16-bit map size, use the "variableMapSize" option to serialize this object');
            OB[LH++ + BH] = AH >> 8, OB[LH + BH] = 255 & AH
          },
          TH = !1 === this.useRecords ? PH : HH.progressiveRecords && !XH ? HH => {
            let LH, rH, SH = AH.transitions || (AH.transitions = Object.create(null)),
              hH = IB++ - BH;
            for (let tH in HH)
              if ("function" !== typeof HH.hasOwnProperty || HH.hasOwnProperty(tH)) {
                if (LH = SH[tH], LH) SH = LH;
                else {
                  let zH = Object.keys(HH),
                    CH = SH;
                  SH = AH.transitions;
                  let EH = 0;
                  for (let HH = 0, BH = zH.length; HH < BH; HH++) {
                    let BH = zH[HH];
                    LH = SH[BH], LH || (LH = SH[BH] = Object.create(null), EH++), SH = LH
                  }
                  hH + BH + 1 == IB ? (IB--, bH(SH, zH, EH)) : kH(SH, zH, hH, EH), rH = !0, SH = CH[tH]
                }
                vH(HH[tH])
              } if (!rH) {
              let LH = SH[KB];
              LH ? OB[hH + BH] = LH : kH(SH, Object.keys(HH), hH, 0)
            }
          } : HH => {
            let BH, LH = AH.transitions || (AH.transitions = Object.create(null)),
              rH = 0;
            for (let AH in HH)("function" !== typeof HH.hasOwnProperty || HH.hasOwnProperty(AH)) && (BH = LH[AH], BH || (BH = LH[AH] = Object.create(null), rH++), LH = BH);
            let SH = LH[KB];
            SH ? SH >= 96 && XH ? (OB[IB++] = 96 + (31 & (SH -= 96)), OB[IB++] = SH >> 5) : OB[IB++] = SH : bH(LH, LH.__keys__ || Object.keys(HH), rH);
            for (let AH in HH)("function" !== typeof HH.hasOwnProperty || HH.hasOwnProperty(AH)) && vH(HH[AH])
          },
          UH = "function" == typeof this.useRecords && this.useRecords,
          VH = UH ? HH => {
            UH(HH) ? TH(HH) : PH(HH)
          } : TH,
          OH = HH => {
            let LH;
            if (HH > 16777216) {
              if (HH - BH > VB) throw new Error("Packed buffer would be larger than maximum buffer size");
              LH = Math.min(VB, 4096 * Math.round(Math.max((HH - BH) * (HH > 67108864 ? 1.25 : 2), 4194304) / 4096))
            } else LH = 1 + (Math.max(HH - BH << 2, OB.length - 1) >> 12) << 12;
            let AH = new TB(LH);
            return kB = AH.dataView || (AH.dataView = new DataView(AH.buffer, 0, LH)), HH = Math.min(HH, OB.length), OB.copy ? OB.copy(AH, 0, BH, HH) : AH.set(OB.slice(BH, HH)), IB -= BH, BH = 0, mB = AH.length - 10, OB = AH
          },
          bH = (HH, BH, rH) => {
            let SH = AH.nextId;
            SH || (SH = 64), SH < GH && this.shouldShareStructure && !this.shouldShareStructure(BH) ? (SH = AH.nextOwnId, SH < YH || (SH = GH), AH.nextOwnId = SH + 1) : (SH >= YH && (SH = GH), AH.nextId = SH + 1);
            let hH = BH.highByte = SH >= 96 && XH ? SH - 96 >> 5 : -1;
            HH[KB] = SH, HH.__keys__ = BH, AH[SH - 64] = BH, SH < GH ? (BH.isShared = !0, AH.sharedLength = SH - 63, LH = !0, hH >= 0 ? (OB[IB++] = 96 + (31 & SH), OB[IB++] = hH) : OB[IB++] = SH) : (hH >= 0 ? (OB[IB++] = 213, OB[IB++] = 114, OB[IB++] = 96 + (31 & SH), OB[IB++] = hH) : (OB[IB++] = 212, OB[IB++] = 114, OB[IB++] = SH), rH && (QH += WH * rH), uH.length >= EH && (uH.shift()[KB] = 0), uH.push(HH), vH(BH))
          },
          kH = (HH, LH, AH, rH) => {
            let SH = OB,
              hH = IB,
              tH = mB,
              zH = BH;
            OB = bB, IB = 0, BH = 0, OB || (bB = OB = new TB(8192)), mB = OB.length - 10, bH(HH, LH, rH), bB = OB;
            let CH = IB;
            if (OB = SH, IB = hH, mB = tH, BH = zH, CH > 1) {
              let HH = IB + CH - 1;
              HH > mB && OH(HH);
              let LH = AH + BH;
              OB.copyWithin(LH + CH, LH + 1, IB), OB.set(bB.slice(0, CH), LH), IB = HH
            } else OB[AH + BH] = bB[0]
          },
          mH = HH => {
            let rH = oB(HH, OB, BH, IB, AH, OH, ((HH, BH, AH) => {
              if (AH) return LH = !0;
              IB = BH;
              let rH = OB;
              return vH(HH), MH(), rH !== OB ? {
                position: IB,
                targetView: kB,
                target: OB
              } : IB
            }), this);
            if (0 === rH) return VH(HH);
            IB = rH
          }
      }
      useBuffer(HH) {
        OB = HH, kB = OB.dataView || (OB.dataView = new DataView(OB.buffer, OB.byteOffset, OB.byteLength)), IB = 0
      }
      set position(HH) {
        IB = HH
      }
      get position() {
        return IB
      }
      set buffer(HH) {
        OB = HH
      }
      get buffer() {
        return OB
      }
      clearSharedData() {
        this.structures && (this.structures = []), this.typedStructs && (this.typedStructs = [])
      }
    }

    function eB(HH, BH, LH, AH) {
      let rH = HH.byteLength;
      if (rH + 1 < 256) {
        var {
          target: SH,
          position: hH
        } = LH(4 + rH);
        SH[hH++] = 199, SH[hH++] = rH + 1
      } else if (rH + 1 < 65536) {
        var {
          target: SH,
          position: hH
        } = LH(5 + rH);
        SH[hH++] = 200, SH[hH++] = rH + 1 >> 8, SH[hH++] = rH + 1 & 255
      } else {
        var {
          target: SH,
          position: hH,
          targetView: tH
        } = LH(7 + rH);
        SH[hH++] = 201, tH.setUint32(hH, rH + 1), hH += 4
      }
      SH[hH++] = 116, SH[hH++] = BH, HH.buffer || (HH = new Uint8Array(HH)), SH.set(new Uint8Array(HH.buffer, HH.byteOffset, HH.byteLength), hH)
    }

    function qB(HH, BH) {
      let LH = HH.byteLength;
      var AH, rH;
      if (LH < 256) {
        var {
          target: AH,
          position: rH
        } = BH(LH + 2);
        AH[rH++] = 196, AH[rH++] = LH
      } else if (LH < 65536) {
        var {
          target: AH,
          position: rH
        } = BH(LH + 3);
        AH[rH++] = 197, AH[rH++] = LH >> 8, AH[rH++] = 255 & LH
      } else {
        var {
          target: AH,
          position: rH,
          targetView: SH
        } = BH(LH + 5);
        AH[rH++] = 198, SH.setUint32(rH, LH), rH += 4
      }
      AH.set(HH, rH)
    }

    function gB(HH, BH, LH, AH) {
      let rH = HH.length;
      switch (rH) {
        case 1:
          BH[LH++] = 212;
          break;
        case 2:
          BH[LH++] = 213;
          break;
        case 4:
          BH[LH++] = 214;
          break;
        case 8:
          BH[LH++] = 215;
          break;
        case 16:
          BH[LH++] = 216;
          break;
        default:
          rH < 256 ? (BH[LH++] = 199, BH[LH++] = rH) : rH < 65536 ? (BH[LH++] = 200, BH[LH++] = rH >> 8, BH[LH++] = 255 & rH) : (BH[LH++] = 201, BH[LH++] = rH >> 24, BH[LH++] = rH >> 16 & 255, BH[LH++] = rH >> 8 & 255, BH[LH++] = 255 & rH)
      }
      return BH[LH++] = AH, BH.set(HH, LH), LH += rH
    }

    function NB(HH, BH, LH) {
      if (fB.length > 0) {
        kB.setUint32(fB.position + HH, IB + LH - fB.position - HH), fB.stringsPosition = IB - HH;
        let AH = fB;
        fB = null, BH(AH[0]), BH(AH[1])
      }
    }

    function RB(HH) {
      if (HH.Class) {
        if (!HH.pack && !HH.write) throw new Error("Extension has no pack or write function");
        if (HH.pack && !HH.type) throw new Error("Extension has no type (numeric code to identify the extension)");
        WB.unshift(HH.Class), QB.unshift(HH)
      }! function(HH) {
        HH.unpack ? xH[HH.type] = HH.unpack : xH[HH.type] = HH
      }(HH)
    }

    function jB(HH, BH) {
      return HH.isCompatible = HH => {
        let LH = !HH || (BH.lastNamedStructuresLength || 0) === HH.length;
        return LH || BH._mergeStructures(HH), LH
      }, HH
    }
    WB = [Date, Set, Error, RegExp, ArrayBuffer, Object.getPrototypeOf(Uint8Array.prototype).constructor, PH], QB = [{
      pack(HH, BH, LH) {
        let AH = HH.getTime() / 1e3;
        if ((this.useTimestamp32 || 0 === HH.getMilliseconds()) && AH >= 0 && AH < 4294967296) {
          let {
            target: HH,
            targetView: LH,
            position: rH
          } = BH(6);
          HH[rH++] = 214, HH[rH++] = 255, LH.setUint32(rH, AH)
        } else if (AH > 0 && AH < 4294967296) {
          let {
            target: LH,
            targetView: rH,
            position: SH
          } = BH(10);
          LH[SH++] = 215, LH[SH++] = 255, rH.setUint32(SH, 4e6 * HH.getMilliseconds() + (AH / 1e3 / 4294967296 | 0)), rH.setUint32(SH + 4, AH)
        } else if (isNaN(AH)) {
          if (this.onInvalidDate) return BH(0), LH(this.onInvalidDate());
          let {
            target: HH,
            targetView: AH,
            position: rH
          } = BH(3);
          HH[rH++] = 212, HH[rH++] = 255, HH[rH++] = 255
        } else {
          let {
            target: LH,
            targetView: rH,
            position: SH
          } = BH(15);
          LH[SH++] = 199, LH[SH++] = 12, LH[SH++] = 255, rH.setUint32(SH, 1e6 * HH.getMilliseconds()), rH.setBigInt64(SH + 4, BigInt(Math.floor(AH)))
        }
      }
    }, {
      pack(HH, BH, LH) {
        if (this.setAsEmptyObject) return BH(0), LH({});
        let AH = Array.from(HH),
          {
            target: rH,
            position: SH
          } = BH(this.moreTypes ? 3 : 0);
        this.moreTypes && (rH[SH++] = 212, rH[SH++] = 115, rH[SH++] = 0), LH(AH)
      }
    }, {
      pack(HH, BH, LH) {
        let {
          target: AH,
          position: rH
        } = BH(this.moreTypes ? 3 : 0);
        this.moreTypes && (AH[rH++] = 212, AH[rH++] = 101, AH[rH++] = 0), LH([HH.name, HH.message, HH.cause])
      }
    }, {
      pack(HH, BH, LH) {
        let {
          target: AH,
          position: rH
        } = BH(this.moreTypes ? 3 : 0);
        this.moreTypes && (AH[rH++] = 212, AH[rH++] = 120, AH[rH++] = 0), LH([HH.source, HH.flags])
      }
    }, {
      pack(HH, BH) {
        this.moreTypes ? eB(HH, 16, BH) : qB(PB ? Buffer.from(HH) : new Uint8Array(HH), BH)
      }
    }, {
      pack(HH, BH) {
        let LH = HH.constructor;
        LH !== UB && this.moreTypes ? eB(HH, LB.indexOf(LH.name), BH) : qB(HH, BH)
      }
    }, {
      pack(HH, BH) {
        let {
          target: LH,
          position: AH
        } = BH(1);
        LH[AH] = 193
      }
    }];
    let nB = new cB({
      useRecords: !1
    });
    const FB = nB.pack,
      DB = nB.pack,
      wB = cB,
      {
        NEVER: ZB,
        ALWAYS: dB,
        DECIMAL_ROUND: aB,
        DECIMAL_FIT: sB
      } = YB,
      JB = 512,
      iB = 1024,
      pB = 2048;
    const yB = function(HH) {
        let BH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        if (!HH || "object" !== typeof HH) throw new Error("first argument must be an Iterable, Async Iterable, Iterator, Async Iterator, or a promise");
        const LH = new mH(BH);
        let AH;
        const rH = HH => {
          let BH;
          AH && (HH = Buffer.concat([AH, HH]), AH = void 0);
          try {
            BH = LH.unpackMultiple(HH)
          } catch (rH) {
            if (!rH.incomplete) throw rH;
            AH = HH.slice(rH.lastPosition), BH = rH.values
          }
          return BH
        };
        return "function" === typeof HH[Symbol.iterator] ? function*() {
          for (const BH of HH) yield* rH(BH)
        }() : "function" === typeof HH[Symbol.asyncIterator] ? async function*() {
          for await (const BH of HH) yield* rH(BH)
        }(): void 0
      },
      HL = function(HH) {
        let BH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        if (HH && "object" === typeof HH) {
          if ("function" === typeof HH[Symbol.iterator]) return function*(HH, BH) {
            const LH = new cB(BH);
            for (const AH of HH) yield LH.pack(AH)
          }(HH, BH);
          if ("function" === typeof HH.then || "function" === typeof HH[Symbol.asyncIterator]) return async function*(HH, BH) {
            const LH = new cB(BH);
            for await (const AH of HH) yield LH.pack(AH)
          }(HH, BH);
          throw new Error("first argument must be an Iterable, Async Iterable, Iterator, Async Iterator, or a Promise")
        }
        throw new Error("first argument must be an Iterable, Async Iterable, or a Promise for an Async Iterable")
      },
      BL = !1,
      LL = !0
  },
  9833: (HH, BH, LH) => {
    LH.r(BH), LH.d(BH, {
      $changes: () => QH,
      $childType: () => WH,
      $decoder: () => EH,
      $deleteByIndex: () => YH,
      $encoder: () => CH,
      $filter: () => XH,
      $getByIndex: () => GH,
      $numFields: () => kH,
      $refId: () => tH,
      $track: () => zH,
      $values: () => TH,
      ArraySchema: () => LA,
      Callbacks: () => Lr,
      ChangeTree: () => IL,
      CollectionSchema: () => SA,
      Decoder: () => aA,
      Encoder: () => DA,
      FieldBuilder: () => zA,
      MapSchema: () => rA,
      Metadata: () => aB,
      OPERATION: () => rH,
      Reflection: () => pA,
      ReflectionField: () => JA,
      ReflectionType: () => iA,
      Root: () => fA,
      Schema: () => oA,
      SetSchema: () => hA,
      StateCallbackStrategy: () => Br,
      StateView: () => qA,
      StreamSchema: () => tA,
      TypeContext: () => jB,
      createPool: () => rr,
      decode: () => vB,
      decodeKeyValueOperation: () => JL,
      decodeSchemaOperation: () => sL,
      defineCustomTypes: () => VB,
      defineTypes: () => bA,
      deprecated: () => VA,
      dumpChanges: () => mA,
      encode: () => BB,
      encodeArray: () => NL,
      encodeIndexedEntry: () => qL,
      encodeKeyValueOperation: () => gL,
      encodeMapEntry: () => eL,
      encodeSchemaOperation: () => cL,
      Xu: () => QA,
      fullStateOnly: () => vA,
      getDecoderStateCallbacks: () => yA,
      getEncodeDescriptor: () => HL,
      getRawChangesCallback: () => Hr,
      isBuilder: () => CA,
      patchOnly: () => xA,
      registerType: () => UB,
      schema: () => kA,
      t: () => YA,
      type: () => PA,
      unreliable: () => MA,
      view: () => WA
    });
    const AH = 255;
    var rH;

    function SH(HH) {
      Object.defineProperty(HH, Symbol.metadata, {
        value: void 0,
        writable: !0,
        configurable: !0,
        enumerable: !1
      })
    }! function(HH) {
      HH[HH.ADD = 128] = "ADD", HH[HH.REPLACE = 0] = "REPLACE", HH[HH.DELETE = 64] = "DELETE", HH[HH.DELETE_AND_MOVE = 96] = "DELETE_AND_MOVE", HH[HH.MOVE_AND_ADD = 160] = "MOVE_AND_ADD", HH[HH.DELETE_AND_ADD = 192] = "DELETE_AND_ADD", HH[HH.CLEAR = 10] = "CLEAR", HH[HH.REVERSE = 15] = "REVERSE", HH[HH.MOVE = 32] = "MOVE", HH[HH.DELETE_BY_REFID = 33] = "DELETE_BY_REFID", HH[HH.ADD_BY_REFID = 129] = "ADD_BY_REFID"
    }(rH || (rH = {})), Symbol.metadata ??= Symbol.for("Symbol.metadata");
    const hH = "undefined" !== typeof globalThis ? globalThis : "undefined" !== typeof global ? global : "undefined" !== typeof self ? self : "undefined" !== typeof window ? window : {};
    if ("function" === typeof Symbol && "function" !== typeof Symbol.for) {
      const HH = "colyseus.symbolRegistry",
        BH = hH[HH] || (hH[HH] = Object.create(null));
      Symbol.for = function(HH) {
        return BH[HH] || (BH[HH] = Symbol(HH))
      }, Symbol.keyFor = function(HH) {
        for (const LH in BH)
          if (BH[LH] === HH) return LH
      }
    }
    const tH = Symbol.for("$refId"),
      zH = "~track",
      CH = "~encoder",
      EH = "~decoder",
      XH = "~filter",
      GH = "~getByIndex",
      YH = "~deleteByIndex",
      uH = "~resyncPrune",
      QH = Symbol.for("$changes"),
      WH = Symbol.for("$childType"),
      MH = Symbol.for("$proxyTarget"),
      xH = "~onEncodeEnd",
      vH = "~reset",
      PH = "~onDecodeEnd",
      TH = Symbol.for("$values"),
      UH = "~builder",
      VH = "~descriptors",
      OH = "~__encodeDescriptor",
      bH = "~encoders",
      kH = "~__numFields",
      mH = "~__refTypeFieldIndexes",
      oH = "~__viewFieldIndexes",
      IH = "$__fieldIndexesByViewTag",
      fH = "~__unreliableFieldIndexes",
      lH = "~__patchOnlyFieldIndexes",
      KH = "~__fullSyncSkipIndexes",
      cH = "~__fullStateOnlyFieldIndexes",
      eH = "~__streamFieldIndexes",
      qH = "~__streamPriorities";
    let gH;
    try {
      gH = new TextEncoder
    } catch (Sr) {}
    const NH = new ArrayBuffer(8),
      RH = new Int32Array(NH),
      jH = new Float32Array(NH),
      nH = new Float64Array(NH),
      FH = new BigInt64Array(NH),
      DH = "undefined" !== typeof Buffer && Buffer.byteLength ? Buffer.byteLength : function(HH, BH) {
        for (var LH = 0, AH = 0, rH = 0, SH = HH.length; rH < SH; rH++)(LH = HH.charCodeAt(rH)) < 128 ? AH += 1 : LH < 2048 ? AH += 2 : LH < 55296 || LH >= 57344 ? AH += 3 : (rH++, AH += 4);
        return AH
      };

    function wH(HH, BH, LH) {
      for (var AH = 0, rH = 0, SH = BH.length; rH < SH; rH++)(AH = BH.charCodeAt(rH)) < 128 ? HH[LH.offset++] = AH : AH < 2048 ? (HH[LH.offset] = 192 | AH >> 6, HH[LH.offset + 1] = 128 | 63 & AH, LH.offset += 2) : AH < 55296 || AH >= 57344 ? (HH[LH.offset] = 224 | AH >> 12, HH[LH.offset + 1] = 128 | AH >> 6 & 63, HH[LH.offset + 2] = 128 | 63 & AH, LH.offset += 3) : (rH++, AH = 65536 + ((1023 & AH) << 10 | 1023 & BH.charCodeAt(rH)), HH[LH.offset] = 240 | AH >> 18, HH[LH.offset + 1] = 128 | AH >> 12 & 63, HH[LH.offset + 2] = 128 | AH >> 6 & 63, HH[LH.offset + 3] = 128 | 63 & AH, LH.offset += 4)
    }

    function ZH(HH, BH, LH) {
      HH[LH.offset++] = 255 & BH
    }

    function dH(HH, BH, LH) {
      HH[LH.offset++] = 255 & BH, HH[LH.offset++] = BH >> 8 & 255
    }

    function aH(HH, BH, LH) {
      HH[LH.offset++] = 255 & BH, HH[LH.offset++] = BH >> 8 & 255
    }

    function sH(HH, BH, LH) {
      HH[LH.offset++] = 255 & BH, HH[LH.offset++] = BH >> 8 & 255, HH[LH.offset++] = BH >> 16 & 255, HH[LH.offset++] = BH >> 24 & 255
    }

    function JH(HH, BH, LH) {
      const AH = BH >> 24,
        rH = BH >> 16,
        SH = BH >> 8,
        hH = BH;
      HH[LH.offset++] = 255 & hH, HH[LH.offset++] = 255 & SH, HH[LH.offset++] = 255 & rH, HH[LH.offset++] = 255 & AH
    }

    function iH(HH, BH, LH) {
      const AH = Math.floor(BH / Math.pow(2, 32));
      JH(HH, BH >>> 0, LH), JH(HH, AH, LH)
    }

    function pH(HH, BH, LH) {
      const AH = BH / Math.pow(2, 32) | 0;
      JH(HH, BH >>> 0, LH), JH(HH, AH, LH)
    }

    function yH(HH, BH, LH) {
      jH[0] = BH, sH(HH, RH[0], LH)
    }

    function HB(HH, BH, LH) {
      nH[0] = BH, sH(HH, RH[0], LH), sH(HH, RH[1], LH)
    }
    const BB = {
        int8: ZH,
        uint8: function(HH, BH, LH) {
          HH[LH.offset++] = 255 & BH
        },
        int16: dH,
        uint16: aH,
        int32: sH,
        uint32: JH,
        int64: iH,
        uint64: pH,
        bigint64: function(HH, BH, LH) {
          FH[0] = BigInt.asIntN(64, BH), sH(HH, RH[0], LH), sH(HH, RH[1], LH)
        },
        biguint64: function(HH, BH, LH) {
          FH[0] = BigInt.asIntN(64, BH), sH(HH, RH[0], LH), sH(HH, RH[1], LH)
        },
        float32: yH,
        float64: HB,
        boolean: function(HH, BH, LH) {
          HH[LH.offset++] = BH ? 1 : 0
        },
        string: function(HH, BH, LH) {
          BH || (BH = "");
          let AH = DH(BH, "utf8"),
            rH = 0;
          if (AH < 32) HH[LH.offset++] = 160 | AH, rH = 1;
          else if (AH < 256) HH[LH.offset++] = 217, HH[LH.offset++] = AH, rH = 2;
          else if (AH < 65536) HH[LH.offset++] = 218, aH(HH, AH, LH), rH = 3;
          else {
            if (!(AH < 4294967296)) throw new Error("String too long");
            HH[LH.offset++] = 219, JH(HH, AH, LH), rH = 5
          }
          return wH(HH, BH, LH), rH + AH
        },
        number: function HH(BH, LH, AH) {
          return isNaN(LH) ? HH(BH, 0, AH) : isFinite(LH) ? LH !== (0 | LH) ? Math.abs(LH) <= 34028235e31 && (jH[0] = LH, Math.abs(Math.abs(jH[0]) - Math.abs(LH)) < 1e-4) ? (BH[AH.offset++] = 202, yH(BH, LH, AH), 5) : (BH[AH.offset++] = 203, HB(BH, LH, AH), 9) : LH >= 0 ? LH < 128 ? (BH[AH.offset++] = 255 & LH, 1) : LH < 256 ? (BH[AH.offset++] = 204, BH[AH.offset++] = 255 & LH, 2) : LH < 65536 ? (BH[AH.offset++] = 205, aH(BH, LH, AH), 3) : LH < 4294967296 ? (BH[AH.offset++] = 206, JH(BH, LH, AH), 5) : (BH[AH.offset++] = 207, pH(BH, LH, AH), 9) : LH >= -32 ? (BH[AH.offset++] = 224 | LH + 32, 1) : LH >= -128 ? (BH[AH.offset++] = 208, ZH(BH, LH, AH), 2) : LH >= -32768 ? (BH[AH.offset++] = 209, dH(BH, LH, AH), 3) : LH >= -2147483648 ? (BH[AH.offset++] = 210, sH(BH, LH, AH), 5) : (BH[AH.offset++] = 211, iH(BH, LH, AH), 9) : HH(BH, LH > 0 ? Number.MAX_SAFE_INTEGER : -Number.MAX_SAFE_INTEGER, AH)
        },
        utf8Write: wH,
        utf8Length: DH
      },
      LB = new ArrayBuffer(8),
      AB = new Int32Array(LB),
      rB = new Float32Array(LB),
      SB = new Float64Array(LB),
      hB = new BigUint64Array(LB),
      tB = new BigInt64Array(LB);

    function zB(HH, BH, LH) {
      LH > HH.length - BH.offset && (LH = HH.length - BH.offset);
      for (var AH = "", rH = 0, SH = BH.offset, hH = BH.offset + LH; SH < hH; SH++) {
        var tH = HH[SH];
        if (0 !== (128 & tH))
          if (192 !== (224 & tH))
            if (224 !== (240 & tH)) {
              if (240 !== (248 & tH)) {
                console.error("decode.utf8Read(): Invalid byte " + tH + " at offset " + SH + ". Skip to end of string: " + (BH.offset + LH));
                break
              }(rH = (7 & tH) << 18 | (63 & HH[++SH]) << 12 | (63 & HH[++SH]) << 6 | 63 & HH[++SH]) >= 65536 ? (rH -= 65536, AH += String.fromCharCode(55296 + (rH >>> 10), 56320 + (1023 & rH))) : AH += String.fromCharCode(rH)
            } else AH += String.fromCharCode((15 & tH) << 12 | (63 & HH[++SH]) << 6 | 63 & HH[++SH]);
        else AH += String.fromCharCode((31 & tH) << 6 | 63 & HH[++SH]);
        else AH += String.fromCharCode(tH)
      }
      return BH.offset += LH, AH
    }

    function CB(HH, BH) {
      return EB(HH, BH) << 24 >> 24
    }

    function EB(HH, BH) {
      return HH[BH.offset++]
    }

    function XB(HH, BH) {
      return GB(HH, BH) << 16 >> 16
    }

    function GB(HH, BH) {
      return HH[BH.offset++] | HH[BH.offset++] << 8
    }

    function YB(HH, BH) {
      return HH[BH.offset++] | HH[BH.offset++] << 8 | HH[BH.offset++] << 16 | HH[BH.offset++] << 24
    }

    function uB(HH, BH) {
      return YB(HH, BH) >>> 0
    }

    function QB(HH, BH) {
      return AB[0] = YB(HH, BH), rB[0]
    }

    function WB(HH, BH) {
      return AB[0] = YB(HH, BH), AB[1] = YB(HH, BH), SB[0]
    }

    function MB(HH, BH) {
      const LH = uB(HH, BH);
      return YB(HH, BH) * Math.pow(2, 32) + LH
    }

    function xB(HH, BH) {
      const LH = uB(HH, BH);
      return uB(HH, BH) * Math.pow(2, 32) + LH
    }
    const vB = {
        utf8Read: zB,
        int8: CB,
        uint8: EB,
        int16: XB,
        uint16: GB,
        int32: YB,
        uint32: uB,
        float32: QB,
        float64: WB,
        int64: MB,
        uint64: xB,
        bigint64: function(HH, BH) {
          return AB[0] = YB(HH, BH), AB[1] = YB(HH, BH), tB[0]
        },
        biguint64: function(HH, BH) {
          return AB[0] = YB(HH, BH), AB[1] = YB(HH, BH), hB[0]
        },
        boolean: function(HH, BH) {
          return EB(HH, BH) > 0
        },
        string: function(HH, BH) {
          const LH = HH[BH.offset++];
          let AH;
          return LH < 192 ? AH = 31 & LH : 217 === LH ? AH = EB(HH, BH) : 218 === LH ? AH = GB(HH, BH) : 219 === LH && (AH = uB(HH, BH)), zB(HH, BH, AH)
        },
        number: function(HH, BH) {
          const LH = HH[BH.offset++];
          return LH < 128 ? LH : 202 === LH ? QB(HH, BH) : 203 === LH ? WB(HH, BH) : 204 === LH ? EB(HH, BH) : 205 === LH ? GB(HH, BH) : 206 === LH ? uB(HH, BH) : 207 === LH ? xB(HH, BH) : 208 === LH ? CB(HH, BH) : 209 === LH ? XB(HH, BH) : 210 === LH ? YB(HH, BH) : 211 === LH ? MB(HH, BH) : LH > 223 ? -1 * (255 - LH + 1) : void 0
        },
        stringCheck: function(HH, BH) {
          const LH = HH[BH.offset];
          return LH < 192 && LH > 160 || 217 === LH || 218 === LH || 219 === LH
        }
      },
      PB = {},
      TB = new Map;

    function UB(HH, BH) {
      BH.constructor && (Object.prototype.hasOwnProperty.call(BH, "constructor") && null == BH.constructor[Symbol.metadata] && SH(BH.constructor), TB.set(BH.constructor, HH), PB[HH] = BH), BH.encode && (BB[HH] = BH.encode), BH.decode && (vB[HH] = BH.decode)
    }

    function VB(HH) {
      for (const BH in HH) UB(BH, HH[BH]);
      return HH => PA(HH)
    }
    const OB = "ArraySchema does not support streaming \u2014 positional ops (splice / unshift / reverse) shift subsequent indexes, so holding ADDs back for a later tick under `maxPerTick` would desync the decoder. Use `t.stream(X)` (stable monotonic positions) or `t.map(X).stream()` (stable keys) instead.";

    function bB() {
      return {
        pendingByView: new Map,
        sentByView: new Map,
        broadcastPending: new Set,
        sentBroadcast: new Set,
        broadcastDeletes: new Set,
        maxPerTick: 32
      }
    }

    function kB(HH) {
      return HH._stream ??= bB()
    }

    function mB(HH, BH, LH) {
      0 === BH.activeViews.size && kB(HH).broadcastPending.add(LH)
    }

    function oB(HH, BH, LH, AH) {
      const SH = HH._stream;
      if (void 0 === SH) return !0;
      let hH = !1;
      return SH.broadcastPending.delete(AH) ? hH = !0 : SH.sentBroadcast.delete(AH) && SH.broadcastDeletes.add(AH), BH.forEachActiveView((HH => {
        const BH = SH.pendingByView.get(HH.id);
        if (BH?.has(AH)) return BH.delete(AH), void(hH = !0);
        const tH = SH.sentByView.get(HH.id);
        if (tH?.has(AH)) {
          tH.delete(AH);
          let BH = HH.changes.get(LH);
          void 0 === BH && (BH = new Map, HH.changes.set(LH, BH)), BH.set(AH, rH.DELETE)
        }
      })), hH
    }

    function IB(HH, BH) {
      const LH = HH._stream?.pendingByView;
      if (void 0 === LH) return !1;
      for (const [AH, rH] of LH)
        if (rH.size > 0 && void 0 !== BH.activeViews.get(AH)?.deref()) return !0;
      return !1
    }

    function fB(HH) {
      const BH = HH._stream;
      return void 0 !== BH && (BH.broadcastPending.size > 0 || BH.broadcastDeletes.size > 0)
    }

    function lB(HH, BH, LH) {
      const AH = kB(HH);
      let rH = AH.pendingByView.get(BH);
      void 0 === rH && (rH = new Set, AH.pendingByView.set(BH, rH)), rH.add(LH)
    }

    function KB(HH, BH) {
      const LH = HH._stream;
      void 0 !== LH && (LH.pendingByView.delete(BH), LH.sentByView.delete(BH), LH.priorityByView?.delete(BH))
    }
    const cB = {
      8: "uint8",
      16: "uint16",
      32: "uint32"
    };

    function eB(HH) {
      if (null == HH || "object" !== typeof HH) throw new Error("t.quantized(): options object with { min, max } is required.");
      const {
        min: BH,
        max: LH
      } = HH;
      if ("number" !== typeof BH || "number" !== typeof LH || !(LH > BH) || !Number.isFinite(BH) || !Number.isFinite(LH)) throw new Error(`t.quantized(): require finite min < max (got min=${BH}, max=${LH}).`);
      const AH = HH.bits ?? 16;
      if (8 !== AH && 16 !== AH && 32 !== AH) throw new Error(`t.quantized(): bits must be 8, 16 or 32 (got ${AH}).`);
      const rH = HH.mode ?? "clamp";
      if ("clamp" !== rH && "wrap" !== rH) throw new Error(`t.quantized(): mode must be "clamp" or "wrap" (got ${JSON.stringify(rH)}).`);
      const SH = "wrap" === rH,
        hH = Math.pow(2, AH);
      return {
        min: BH,
        max: LH,
        bits: AH,
        wrap: SH,
        wire: cB[AH],
        range: LH - BH,
        span: SH ? hH : BH === -LH ? hH - 2 : hH - 1
      }
    }

    function qB(HH) {
      return null !== HH && "object" === typeof HH && void 0 !== HH.quantized
    }

    function gB(HH, BH) {
      if (HH.wrap) {
        if (!Number.isFinite(BH)) return 0;
        const LH = HH.range;
        let AH = (BH - HH.min) % LH;
        AH < 0 && (AH += LH);
        const rH = HH.span;
        return Math.floor(AH / LH * rH + .5) % rH
      }
      if (BH !== BH) return 0;
      const LH = BH < HH.min ? HH.min : BH > HH.max ? HH.max : BH;
      return Math.floor((LH - HH.min) / HH.range * HH.span + .5)
    }

    function NB(HH, BH) {
      return HH.min + BH / HH.span * HH.range
    }

    function RB(HH) {
      const BH = BB[HH.wire];
      return (LH, AH, rH) => BH(LH, gB(HH, AH), rH)
    }
    class jB {
      types = {};
      schemas = new Map;
      hasFilters = !1;
      static inheritedTypes = new WeakMap;
      static cachedContexts = new WeakMap;
      static register(HH) {
        const BH = Object.getPrototypeOf(HH);
        if (BH !== oA) {
          let LH = jB.inheritedTypes.get(BH);
          LH || (LH = new Set, jB.inheritedTypes.set(BH, LH)), LH.add(HH)
        }
      }
      static cache(HH) {
        let BH = jB.cachedContexts.get(HH);
        return BH || (BH = new jB(HH), jB.cachedContexts.set(HH, BH)), BH
      }
      constructor(HH) {
        HH && this.discoverTypes(HH)
      }
      has(HH) {
        return this.schemas.has(HH)
      }
      get(HH) {
        return this.types[HH]
      }
      add(HH) {
        let BH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.schemas.size;
        return !this.schemas.has(HH) && (this.types[BH] = HH, null == HH[Symbol.metadata] && aB.initialize(HH), this.schemas.set(HH, BH), !0)
      }
      getTypeId(HH) {
        return this.schemas.get(HH)
      }
      discoverTypes(HH) {
        if (!this.add(HH)) return;
        jB.inheritedTypes.get(HH)?.forEach((HH => {
          this.discoverTypes(HH)
        }));
        let BH = HH;
        for (;
          (BH = Object.getPrototypeOf(BH)) && BH !== oA && BH !== Function.prototype;) this.discoverTypes(BH);
        const LH = HH[Symbol.metadata];
        (LH[oH] || LH[eH]) && (this.hasFilters = !0);
        for (const AH in LH) {
          const HH = LH[AH].type;
          if ("string" !== typeof HH && !qB(HH))
            if ("function" === typeof HH) this.discoverTypes(HH);
            else {
              const BH = Object.values(HH)[0];
              if ("string" === typeof BH) continue;
              this.discoverTypes(BH)
            }
        }
      }
      debug() {
        return `TypeContext ->\n\tSchema types: ${this.schemas.size}\n\thasFilters: ${this.hasFilters}`
      }
    }

    function nB(HH) {
      const BH = DB(HH);
      return BH ? {
        complexTypeKlass: PB[BH],
        childType: HH[BH]
      } : {
        complexTypeKlass: !1,
        childType: HH
      }
    }

    function FB(HH, BH) {
      const LH = wB(HH),
        AH = DB(LH),
        rH = AH && DB(LH[AH]);
      if (rH) throw new Error(`${BH?`${BH}: `:""}@colyseus/schema: nested collections are not supported ("${AH}" of "${rH}"). Collections can only hold primitive types or Schema classes, wrap the inner ${rH} in a Schema class.`);
      return LH
    }

    function DB(HH) {
      return "object" === typeof HH && null !== HH ? Object.keys(HH).find((HH => void 0 !== PB[HH])) : void 0
    }

    function wB(HH) {
      if ("object" !== typeof HH || null === HH) return HH;
      if (Array.isArray(HH)) return {
        array: wB(HH[0])
      };
      const BH = function(HH) {
        const BH = Object.keys(HH),
          LH = BH.filter((HH => /\d+/.test(HH)));
        if (LH.length > 0 && LH.length === BH.length / 2 && HH[HH[LH[0]]] == LH[0]) return "number";
        if (BH.length > 0 && BH.every((BH => HH[BH] === BH))) return "string"
      }(HH);
      if (BH) return BH;
      if (qB(HH)) return "string" === typeof HH.quantized.wire ? HH : {
        quantized: eB(HH.quantized)
      };
      if (void 0 !== HH.type) return wB(HH.type);
      const LH = DB(HH);
      return LH && (HH[LH] = wB(HH[LH])), HH
    }
    const ZB = [mH, fH, lH, KH, cH, eH, bH];

    function dB(HH, BH, LH) {
      HH[BH] || Object.defineProperty(HH, BH, {
        value: [],
        enumerable: !1,
        configurable: !0,
        writable: !0
      }), HH[BH].push(LH)
    }
    const aB = {
        addField(HH, BH, LH, AH, rH) {
          if (BH >= 63) throw new Error(`Can't define field '${LH}'.\nSchema instances may only have up to 63 fields.`);
          HH[BH] = Object.assign(HH[BH] || {}, {
            type: AH,
            index: BH,
            name: LH
          }), Object.defineProperty(HH, VH, {
            value: HH[VH] || {},
            enumerable: !1,
            configurable: !0
          }), HH[VH][LH] = rH || {
            value: void 0,
            writable: !0,
            enumerable: !0,
            configurable: !0
          }, Object.defineProperty(HH, kH, {
            value: BH,
            enumerable: !1,
            configurable: !0
          }), Object.defineProperty(HH, LH, {
            value: BH,
            enumerable: !1,
            configurable: !0
          }), "string" === typeof HH[BH].type || qB(HH[BH].type) || (void 0 === HH[mH] && Object.defineProperty(HH, mH, {
            value: [],
            enumerable: !1,
            configurable: !0
          }), HH[mH].push(BH));
          const SH = HH[BH].type;
          if (SH && "object" === typeof SH && void 0 !== SH.stream) {
            if (void 0 !== SH.array) throw new Error(OB);
            HH[BH].stream = !0, HH[eH] || Object.defineProperty(HH, eH, {
              value: [],
              enumerable: !1,
              configurable: !0,
              writable: !0
            }), HH[eH].includes(BH) || HH[eH].push(BH);
            const rH = AH?.priority;
            "function" === typeof rH && aB.setStreamPriority(HH, LH, rH)
          }
        },
        setTag(HH, BH, LH) {
          const AH = HH[BH];
          if (HH[AH].tag = LH, HH[oH] || (Object.defineProperty(HH, oH, {
              value: [],
              enumerable: !1,
              configurable: !0
            }), Object.defineProperty(HH, IH, {
              value: {},
              enumerable: !1,
              configurable: !0
            })), HH[oH].push(AH), LH < 0) HH[IH][LH] || (HH[IH][LH] = []), HH[IH][LH].push(AH);
          else
            for (let rH = LH; rH > 0; rH &= rH - 1) {
              const BH = rH & -rH;
              HH[IH][BH] || (HH[IH][BH] = []), HH[IH][BH].push(AH)
            }
        },
        setUnreliable(HH, BH) {
          const LH = HH[BH];
          if ("string" !== typeof HH[LH].type) throw new Error(`@unreliable cannot be applied to ref-type field "${BH}". For ref-type fields, mark each primitive sub-field with @unreliable instead. See README "Limitations and best practices".`);
          HH[LH].unreliable = !0, HH[fH] || Object.defineProperty(HH, fH, {
            value: [],
            enumerable: !1,
            configurable: !0,
            writable: !0
          }), HH[fH].push(LH)
        },
        setPatchOnly(HH, BH) {
          const LH = HH[BH];
          if (HH[LH].fullStateOnly) throw new Error(`field "${BH}" cannot be both patchOnly and fullStateOnly \u2014 those are the only two delivery channels, so the field would never reach a client.`);
          HH[LH].patchOnly = !0, dB(HH, lH, LH), dB(HH, KH, LH)
        },
        setDeprecated(HH, BH) {
          const LH = HH[BH];
          HH[LH].deprecated = !0, dB(HH, KH, LH), Object.defineProperty(HH, LH, {
            value: HH[LH],
            enumerable: !1,
            configurable: !0
          })
        },
        setFullStateOnly(HH, BH) {
          const LH = HH[BH];
          if (HH[LH].patchOnly) throw new Error(`field "${BH}" cannot be both patchOnly and fullStateOnly \u2014 those are the only two delivery channels, so the field would never reach a client.`);
          HH[LH].fullStateOnly = !0, dB(HH, cH, LH)
        },
        setStream(HH, BH) {
          const LH = HH[BH];
          HH[LH].stream = !0, HH[eH] || Object.defineProperty(HH, eH, {
            value: [],
            enumerable: !1,
            configurable: !0,
            writable: !0
          }), HH[eH].push(LH)
        },
        setStreamPriority(HH, BH, LH) {
          const AH = HH[BH];
          HH[qH] || Object.defineProperty(HH, qH, {
            value: {},
            enumerable: !1,
            configurable: !0,
            writable: !0
          }), HH[qH][AH] = LH
        },
        getStreamPriority: (HH, BH) => HH?.[qH]?.[BH],
        defineField(HH, BH, LH, AH, rH) {
          const SH = FB(rH, `${HH.name}.${AH}`),
            {
              complexTypeKlass: hH,
              childType: tH
            } = nB(SH);
          aB.addField(BH, LH, AH, SH, UA(AH, LH, tH, hH)), BH[VH][AH] && Object.defineProperty(HH.prototype, AH, BH[VH][AH]), ("string" === typeof SH || qB(SH)) && (BH[bH] || Object.defineProperty(BH, bH, {
            value: [],
            enumerable: !1,
            configurable: !0,
            writable: !0
          }), BH[bH][LH] = "string" === typeof SH ? BB[SH] : RB(SH.quantized))
        },
        setFields(HH, BH) {
          const LH = HH.prototype.constructor;
          jB.register(LH);
          const AH = Object.getPrototypeOf(LH),
            rH = AH && AH[Symbol.metadata],
            SH = aB.initialize(LH);
          LH[zH] || (LH[zH] = oA[zH]), LH[CH] || (LH[CH] = oA[CH]), LH[EH] || (LH[EH] = oA[EH]), LH.prototype.toJSON || (LH.prototype.toJSON = oA.prototype.toJSON);
          let hH = SH[kH] ?? (rH && rH[kH]) ?? -1;
          hH++, SH[bH] || Object.defineProperty(SH, bH, {
            value: rH?.[bH] ? [...rH[bH]] : [],
            enumerable: !1,
            configurable: !0,
            writable: !0
          });
          for (const tH in BH) {
            if (void 0 !== SH[tH]) throw new Error(`@colyseus/schema: Duplicate '${tH}' definition on '${LH.name||"(anonymous)"}'.`);
            aB.defineField(LH, SH, hH, tH, BH[tH]), hH++
          }
          return HH
        },
        isDeprecated: (HH, BH) => !0 === HH[BH].deprecated,
        initialize(HH) {
          const BH = Object.getPrototypeOf(HH),
            LH = BH[Symbol.metadata];
          let AH = HH[Symbol.metadata] ?? Object.create(null);
          if (BH !== oA && AH === LH && (AH = Object.create(null), LH)) {
            Object.setPrototypeOf(AH, LH), Object.defineProperty(AH, kH, {
              value: LH[kH],
              enumerable: !1,
              configurable: !0,
              writable: !0
            }), void 0 !== LH[oH] && (Object.defineProperty(AH, oH, {
              value: [...LH[oH]],
              enumerable: !1,
              configurable: !0,
              writable: !0
            }), Object.defineProperty(AH, IH, {
              value: {
                ...LH[IH]
              },
              enumerable: !1,
              configurable: !0,
              writable: !0
            }));
            for (const HH of ZB) {
              const BH = LH[HH];
              void 0 !== BH && Object.defineProperty(AH, HH, {
                value: [...BH],
                enumerable: !1,
                configurable: !0,
                writable: !0
              })
            }
            Object.defineProperty(AH, VH, {
              value: {
                ...LH[VH]
              },
              enumerable: !1,
              configurable: !0,
              writable: !0
            })
          }
          return Object.defineProperty(HH, Symbol.metadata, {
            value: AH,
            writable: !1,
            configurable: !0
          }), AH
        },
        isValidInstance: HH => HH.constructor[Symbol.metadata] && Object.prototype.hasOwnProperty.call(HH.constructor[Symbol.metadata], kH),
        getFields(HH) {
          const BH = HH[Symbol.metadata],
            LH = {};
          for (let AH = 0; AH <= BH[kH]; AH++) LH[BH[AH].name] = BH[AH].type;
          return LH
        },
        hasViewTagAtIndex: (HH, BH) => HH?.[oH]?.includes(BH),
        hasUnreliableAtIndex: (HH, BH) => HH?.[fH]?.includes(BH),
        hasPatchOnlyAtIndex: (HH, BH) => HH?.[lH]?.includes(BH),
        hasFullStateOnlyAtIndex: (HH, BH) => HH?.[cH]?.includes(BH),
        hasStreamAtIndex: (HH, BH) => HH?.[eH]?.includes(BH)
      },
      sB = (HH, BH, LH) => HH(BH, LH);
    class JB {
      dirtyLow = 0;
      dirtyHigh = 0;
      ops;
      constructor(HH) {
        this.ops = new Uint8Array(Math.max(HH + 1, 1))
      }
      record(HH, BH) {
        const LH = this.ops[HH];
        0 === LH ? this.ops[HH] = BH : (LH === rH.DELETE || LH === rH.ADD && BH === rH.DELETE_AND_ADD) && (this.ops[HH] = rH.DELETE_AND_ADD), HH < 32 ? this.dirtyLow |= 1 << HH : this.dirtyHigh |= 1 << HH - 32
      }
      recordDelete(HH, BH) {
        this.ops[HH] = BH, HH < 32 ? this.dirtyLow |= 1 << HH : this.dirtyHigh |= 1 << HH - 32
      }
      recordRaw(HH, BH) {
        this.record(HH, BH)
      }
      operationAt(HH) {
        const BH = this.ops[HH];
        return 0 === BH ? void 0 : BH
      }
      setOperationAt(HH, BH) {
        this.ops[HH] = BH
      }
      forEach(HH) {
        this.forEachWithCtx(HH, sB)
      }
      forEachWithCtx(HH, BH) {
        let LH = this.dirtyLow,
          AH = this.dirtyHigh;
        const rH = this.ops;
        for (; 0 !== LH;) {
          const AH = LH & -LH,
            SH = 31 - Math.clz32(AH);
          LH ^= AH, BH(HH, SH, rH[SH])
        }
        for (; 0 !== AH;) {
          const LH = AH & -AH,
            SH = 31 - Math.clz32(LH) + 32;
          AH ^= LH, BH(HH, SH, rH[SH])
        }
      }
      size() {
        return pB(this.dirtyLow) + pB(this.dirtyHigh)
      }
      has() {
        return 0 !== (this.dirtyLow | this.dirtyHigh)
      }
      reset() {
        this.dirtyLow = 0, this.dirtyHigh = 0, this.ops.fill(0)
      }
    }
    class iB {
      gu = new Map;
      pureOps = [];
      record(HH, BH) {
        const LH = this.gu.get(HH);
        void 0 === LH ? this.gu.set(HH, BH) : (LH === rH.DELETE || LH === rH.ADD && BH === rH.DELETE_AND_ADD) && this.gu.set(HH, rH.DELETE_AND_ADD)
      }
      recordDelete(HH, BH) {
        this.gu.set(HH, BH)
      }
      recordRaw(HH, BH) {
        this.gu.set(HH, BH)
      }
      recordPure(HH) {
        this.pureOps.push([this.gu.size, HH])
      }
      operationAt(HH) {
        return this.gu.get(HH)
      }
      setOperationAt(HH, BH) {
        this.gu.has(HH) && this.gu.set(HH, BH)
      }
      forEach(HH) {
        this.forEachWithCtx(HH, sB)
      }
      forEachWithCtx(HH, BH) {
        const LH = this.pureOps;
        if (LH.length > 0) {
          let AH = 0,
            rH = 0;
          for (const [SH, hH] of this.gu) {
            for (; AH < LH.length && LH[AH][0] <= rH;) {
              const rH = LH[AH++][1];
              BH(HH, -rH, rH)
            }
            BH(HH, SH, hH), rH++
          }
          for (; AH < LH.length;) {
            const rH = LH[AH++][1];
            BH(HH, -rH, rH)
          }
        } else
          for (const [AH, rH] of this.gu) BH(HH, AH, rH)
      }
      size() {
        return this.gu.size + this.pureOps.length
      }
      has() {
        return this.gu.size > 0 || this.pureOps.length > 0
      }
      reset() {
        this.gu.clear(), this.pureOps.length = 0
      }
      shift(HH) {
        const BH = new Map;
        for (const [LH, AH] of this.gu) BH.set(LH + HH, AH);
        this.gu = BH
      }
    }

    function pB(HH) {
      return 16843009 * ((HH = (858993459 & (HH -= HH >>> 1 & 1431655765)) + (HH >>> 2 & 858993459)) + (HH >>> 4) & 252645135) >>> 24
    }

    function yB(HH) {
      if (void 0 === HH) return 0;
      let BH = 0;
      for (let LH = 0, AH = HH.length; LH < AH; LH++) {
        const AH = HH[LH];
        AH < 32 && (BH |= 1 << AH)
      }
      return BH
    }

    function HL(HH) {
      const BH = HH.constructor;
      if (Object.prototype.hasOwnProperty.call(BH, OH)) return BH[OH];
      const LH = BH[Symbol.metadata],
        AH = aB.isValidInstance(HH),
        rH = (LH?.[oH]?.length ?? 0) > 0,
        SH = function(HH) {
          const BH = [],
            LH = [],
            AH = [],
            rH = [],
            SH = HH?.[kH];
          if (void 0 === SH) return {
            names: BH,
            types: LH,
            tags: AH,
            encoders: rH
          };
          const hH = HH[bH];
          for (let tH = 0; tH <= SH; tH++) {
            const SH = HH[tH];
            void 0 !== SH ? (BH[tH] = SH.name, LH[tH] = SH.type, AH[tH] = SH.tag, rH[tH] = hH?.[tH]) : (BH[tH] = void 0, LH[tH] = void 0, AH[tH] = void 0, rH[tH] = void 0)
          }
          return {
            names: BH,
            types: LH,
            tags: AH,
            encoders: rH
          }
        }(LH),
        hH = AH && !rH ? void 0 : BH[XH],
        tH = {
          encoder: BH[CH],
          filter: hH,
          metadata: LH,
          isSchema: AH,
          filterBitmask: AH ? yB(LH?.[oH]) : 0,
          hasAnyFullStateOnly: (LH?.[cH]?.length ?? 0) > 0,
          hasAnyUnreliable: (LH?.[fH]?.length ?? 0) > 0,
          hasAnyStream: (LH?.[eH]?.length ?? 0) > 0,
          hasAnyView: rH,
          fullStateOnlyBitmask: yB(LH?.[cH]),
          unreliableBitmask: yB(LH?.[fH]),
          streamBitmask: yB(LH?.[eH]),
          names: SH.names,
          types: SH.types,
          tags: SH.tags,
          encoders: SH.encoders
        };
      return Object.defineProperty(BH, OH, {
        value: tH,
        enumerable: !1,
        writable: !0,
        configurable: !0
      }), tH
    }

    function BL(HH, BH) {
      if (void 0 !== HH.parentRef && BH(HH.parentRef, HH._parentIndex)) return !0;
      for (let LH = HH.extraParents; void 0 !== LH; LH = LH.next)
        if (BH(LH.ref, LH.index)) return !0;
      return !1
    }
    const LL = (HH, BH) => {
        HH.isFieldUnreliable(BH) ? HH.ensureUnreliableRecorder().record(BH, rH.ADD) : HH.record(BH, rH.ADD)
      },
      AL = (HH, BH) => HH(BH);

    function rL(HH, BH, LH) {
      const AH = HH.refTarget;
      if (void 0 !== AH[WH]) {
        if (HH.isPatchOnly) return;
        if (Array.isArray(AH.items)) {
          const HH = AH.items;
          for (let AH = 0, rH = HH.length; AH < rH; AH++) void 0 !== HH[AH] && LH(BH, AH)
        } else if (void 0 !== AH.journal)
          for (const [HH, rH] of AH.journal.keyByIndex) AH.$items.has(rH) && LH(BH, HH);
        else if (void 0 !== AH.$items)
          for (const HH of AH.$items.keys()) LH(BH, HH)
      } else {
        const rH = HH.metadata;
        if (!rH) return;
        const SH = rH[kH] ?? -1,
          hH = rH[KH],
          tH = HH.encDescriptor.names;
        for (let HH = 0; HH <= SH; HH++) {
          const rH = tH[HH];
          if (void 0 === rH) continue;
          if (hH && hH.includes(HH)) continue;
          const SH = AH[rH];
          void 0 !== SH && null !== SH && LH(BH, HH)
        }
      }
    }

    function SL(HH, BH, LH, AH) {
      ! function(HH, BH, LH) {
        if (!BH) return;
        const AH = BH[QH],
          rH = !AH._isSchema;
        let SH;
        rH ? (BH = AH.parent, LH = AH.parentIndex, SH = BH?.[QH].metadata) : SH = AH.metadata;
        const hH = (SH?.[lH]?.includes(LH) ? OL : 0) | (SH?.[cH]?.includes(LH) ? bL : 0),
          tH = AH.flags & oL | hH,
          zH = HH.flags;
        HH.flags = zH | tH;
        tH & ~zH & bL && (HH.reset(), HH.unreliableRecorder?.reset());
        const CH = HH.root?.types;
        if (!CH?.hasFilters) return;
        const EH = SH?.[oH]?.includes(LH) ?? !1,
          XH = SH?.[eH]?.includes(LH) ?? !1,
          GH = AH.isFiltered || EH || XH;
        if (HH.isFiltered = GH, XH && !rH) {
          HH.isStreamCollection = !0;
          const BH = kB(HH.ref);
          if (void 0 === BH.priority) {
            const HH = aB.getStreamPriority(SH, LH);
            void 0 !== HH && (BH.priority = HH)
          }
          HH.root?.registerStream(HH.ref)
        }
        if (GH) {
          const BH = tL(HH);
          HH.isVisibilitySharedWithParent = AH.isFiltered && BH && !XH && (!EH || rH && SH[LH].tag !== uA)
        }
      }(HH, BH, LH), HH.isFullStateOnly || (HH.has() && HH.root?.enqueueChangeTree(HH), HH.unreliableRecorder?.has() && HH.root?.enqueueUnreliable(HH), HH.has() || HH.unreliableRecorder?.has() || HH.root?.enqueueChangeTree(HH))
    }

    function hL(HH) {
      const BH = HH.pendingFilterRefresh;
      for (let LH = 0; LH < BH.length; LH++) {
        const HH = BH[LH];
        0 !== (HH.flags & mL) && zL(HH)
      }
      BH.length = 0
    }

    function tL(HH) {
      return HH._isSchema || "string" !== typeof HH.refTarget[WH]
    }

    function zL(HH) {
      HH.flags &= ~mL;
      const BH = HH.root;
      if (void 0 === BH || void 0 === HH.parentRef) return;
      const LH = tL(HH);
      let AH = YL(HH, HH.parentRef, HH._parentIndex, LH);
      for (let SH = HH.extraParents; void 0 !== SH && AH !== GL; SH = SH.next) AH |= YL(HH, SH.ref, SH.index, LH);
      if (0 === AH) return;
      HH.isVisibilitySharedWithParent = 0 !== (AH & XL);
      const rH = 0 === (AH & EL);
      rH !== HH.isFiltered && (HH.isFiltered = rH, rH || HH.isFullStateOnly || (HH.forEachLiveWithCtx(HH, LL), HH.has() && BH.enqueueChangeTree(HH), HH.unreliableRecorder?.has() && BH.enqueueUnreliable(HH)), HH.forEachChildWithCtx(HH, uL))
    }
    const CL = 1,
      EL = 2,
      XL = 4,
      GL = CL | EL | XL;

    function YL(HH, BH, LH, AH) {
      const rH = BH[QH];
      if (rH.root !== HH.root || ! function(HH, BH, LH) {
          const AH = BH.refTarget;
          if (BH.isArray) {
            const BH = AH.items,
              rH = BH[LH];
            if (void 0 !== rH && rH[QH] === HH) return !0;
            for (let LH = 0, AH = BH.length; LH < AH; LH++) {
              const AH = BH[LH];
              if (void 0 !== AH && AH[QH] === HH) return !0
            }
            return !1
          }
          const rH = BH.getValue(LH);
          return void 0 !== rH && rH[QH] === HH
        }(HH, rH, LH)) return 0;
      rH.flags & mL && zL(rH);
      let SH = CL;
      if (rH._isSchema) {
        void 0 !== rH.encDescriptor.tags[LH] || rH.isFieldStream(LH) || (rH.isFiltered ? AH && (SH |= XL) : SH |= EL)
      } else if (rH.isFiltered) {
        if (AH && !rH.isStreamCollection) {
          const HH = rH.parent?.[QH];
          (HH?._isSchema ? HH.encDescriptor.tags[rH.parentIndex] : void 0) !== uA && (SH |= XL)
        }
      } else SH |= EL;
      return SH
    }
    const uL = (HH, BH, LH) => {
      zL(BH)
    };

    function QL(HH, BH, LH, AH) {
      if (HH.addParent(BH, AH), !LH) return;
      const rH = LH.add(HH);
      LH !== HH.root && (HH.root = LH, SL(HH, BH, AH));
      const SH = BH?.[QH];
      if (void 0 !== SH && void 0 !== SH.subscribedViews && void 0 !== BH[WH] && function(HH, BH, LH, AH) {
          const rH = HH.subscribedViews;
          if (void 0 === rH) return;
          const SH = HH.isStreamCollection,
            hH = SH ? HH.ref : void 0,
            tH = SH ? void 0 : LH[QH];
          for (let zH = 0, CH = rH.length; zH < CH; zH++) {
            let HH = rH[zH];
            for (; 0 !== HH;) {
              const LH = HH & -HH;
              HH ^= LH;
              const CH = 32 * zH + (31 - Math.clz32(LH)),
                EH = AH.activeViews.get(CH),
                XH = EH?.deref();
              void 0 !== XH ? SH ? lB(hH, CH, BH) : void 0 !== tH && XH.markVisible(tH) : rH[zH] &= ~LH
            }
          }
        }(SH, AH, HH.ref, LH), rH) {
        let BH = vL[PL];
        void 0 === BH && (BH = {
          parentRef: void 0,
          root: void 0
        }, vL[PL] = BH), BH.parentRef = HH.ref, BH.root = LH, PL++, ML(HH, BH, TL), PL--
      }
    }

    function WL(HH, BH, LH) {
      HH(BH, LH)
    }

    function ML(HH, BH, LH) {
      const AH = HH.refTarget;
      if (AH[WH]) {
        if ("string" !== typeof AH[WH]) {
          const HH = AH.items;
          if (void 0 !== HH)
            for (let AH = 0, rH = HH.length; AH < rH; AH++) {
              const rH = HH[AH];
              rH && LH(BH, rH[QH], AH)
            } else {
              const HH = AH.$items,
                rH = AH._collectionIndexes;
              for (const AH of HH.keys()) {
                const SH = HH.get(AH);
                SH && LH(BH, SH[QH], rH?.[AH] ?? AH)
              }
            }
        }
      } else {
        const rH = HH.metadata,
          SH = rH?.[mH];
        if (!SH) return;
        const hH = HH.encDescriptor.names;
        for (let HH = 0, tH = SH.length; HH < tH; HH++) {
          const rH = SH[HH],
            tH = AH[hH[rH]];
          tH && LH(BH, tH[QH], rH)
        }
      }
    }

    function xL(HH, BH, LH) {
      BH.root !== HH ? BH.setRoot(HH) : HH.add(BH)
    }
    const vL = [];
    let PL = 0;

    function TL(HH, BH, LH) {
      if (BH.root === HH.root) return HH.root.add(BH), void HH.root.moveNextToParent(BH);
      BH.setParent(HH.parentRef, HH.root, LH)
    }

    function UL(HH, BH, LH) {
      const AH = (3 & LH) << 3;
      return LH < 4 ? HH >>> AH & 255 : BH >>> AH & 255
    }
    const VL = (HH, BH, LH) => HH(BH, LH);
    const OL = 16,
      bL = 32,
      kL = 128,
      mL = 256,
      oL = OL | bL;
    class IL {
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
      set isFiltered(HH) {
        this.flags = HH ? 1 | this.flags : -2 & this.flags
      }
      get isVisibilitySharedWithParent() {
        return 0 !== (2 & this.flags)
      }
      set isVisibilitySharedWithParent(HH) {
        this.flags = HH ? 2 | this.flags : -3 & this.flags
      }
      get isNew() {
        return 0 !== (4 & this.flags)
      }
      set isNew(HH) {
        this.flags = HH ? 4 | this.flags : -5 & this.flags
      }
      get isUnreliable() {
        return 0 !== (8 & this.flags)
      }
      set isUnreliable(HH) {
        this.flags = HH ? 8 | this.flags : -9 & this.flags
      }
      get isPatchOnly() {
        return 0 !== (this.flags & OL)
      }
      set isPatchOnly(HH) {
        this.flags = HH ? this.flags | OL : this.flags & ~OL
      }
      get isFullStateOnly() {
        return 0 !== (this.flags & bL)
      }
      set isFullStateOnly(HH) {
        this.flags = HH ? this.flags | bL : this.flags & ~bL
      }
      get isStreamCollection() {
        return 0 !== (64 & this.flags)
      }
      set isStreamCollection(HH) {
        this.flags = HH ? 64 | this.flags : -65 & this.flags
      }
      get needsRestage() {
        return 0 !== (this.flags & kL)
      }
      set needsRestage(HH) {
        this.flags = HH ? this.flags | kL : -129 & this.flags
      }
      get hasFilteredFields() {
        return this.isFiltered || this.encDescriptor.hasAnyView
      }
      ensureUnreliableRecorder() {
        return void 0 === this.unreliableRecorder && (this.unreliableRecorder = this._isSchema ? new JB(this.metadata?.[kH] ?? 0) : new iB), this.unreliableRecorder
      }
      isFieldUnreliable(HH) {
        const BH = this.encDescriptor;
        return !!BH.hasAnyUnreliable && (HH < 32 ? 0 !== (BH.unreliableBitmask & 1 << HH) : aB.hasUnreliableAtIndex(this.metadata, HH))
      }
      isFieldFullStateOnly(HH) {
        if (this.isFullStateOnly) return !0;
        const BH = this.encDescriptor;
        return !!BH.hasAnyFullStateOnly && (HH < 32 ? 0 !== (BH.fullStateOnlyBitmask & 1 << HH) : aB.hasFullStateOnlyAtIndex(this.metadata, HH))
      }
      isFieldStream(HH) {
        const BH = this.encDescriptor;
        return !!BH.hasAnyStream && (HH < 32 ? 0 !== (BH.streamBitmask & 1 << HH) : aB.hasStreamAtIndex(this.metadata, HH))
      }
      constructor(HH) {
        let BH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : HH;
        this.ref = HH, this.refTarget = BH;
        const LH = HL(HH);
        this.encDescriptor = LH, this.metadata = LH.metadata;
        const AH = LH.isSchema;
        if (this._isSchema = AH, this.ops = void 0, this.collDirty = void 0, this.collPureOps = void 0, AH) {
          const HH = this.metadata?.[kH] ?? 0;
          HH > 7 && (this.ops = new Uint8Array(HH + 1))
        } else this.collDirty = new Map
      }
      _opAt(HH) {
        const BH = this.ops;
        if (void 0 !== BH) return BH[HH];
        const LH = (3 & HH) << 3;
        return HH < 4 ? this.opsLow >>> LH & 255 : this.opsHigh >>> LH & 255
      }
      _opPut(HH, BH) {
        const LH = this.ops;
        if (void 0 !== LH) return void(LH[HH] = BH);
        const AH = (3 & HH) << 3,
          rH = ~(255 << AH);
        HH < 4 ? this.opsLow = this.opsLow & rH | BH << AH : this.opsHigh = this.opsHigh & rH | BH << AH
      }
      _markDirty(HH) {
        HH < 32 ? this.dirtyLow |= 1 << HH : this.dirtyHigh |= 1 << HH - 32
      }
      record(HH, BH) {
        if (this._isSchema) {
          const LH = this._opAt(HH);
          0 === LH ? this._opPut(HH, BH) : (LH === rH.DELETE || LH === rH.ADD && BH === rH.DELETE_AND_ADD) && this._opPut(HH, rH.DELETE_AND_ADD), this._markDirty(HH)
        } else {
          const LH = this.collDirty,
            AH = LH.get(HH);
          let SH;
          SH = void 0 === AH ? BH : AH === rH.DELETE || AH === rH.ADD && BH === rH.DELETE_AND_ADD ? rH.DELETE_AND_ADD : AH, LH.set(HH, SH)
        }
      }
      recordDelete(HH, BH) {
        this._isSchema ? (this._opPut(HH, BH), this._markDirty(HH)) : this.collDirty.set(HH, BH)
      }
      recordRaw(HH, BH) {
        this._isSchema ? (this._opPut(HH, BH), this._markDirty(HH)) : this.collDirty.set(HH, BH)
      }
      recordPure(HH) {
        if (this._isSchema) throw new Error("ChangeTree (Schema): pure operations are not supported");
        (this.collPureOps ??= []).push([this.collDirty.size, HH])
      }
      operationAt(HH) {
        if (this._isSchema) {
          const BH = this._opAt(HH);
          return 0 === BH ? void 0 : BH
        }
        return this.collDirty.get(HH)
      }
      setOperationAt(HH, BH) {
        if (this._isSchema) this._opPut(HH, BH);
        else {
          const LH = this.collDirty;
          LH.has(HH) && LH.set(HH, BH)
        }
      }
      forEach(HH) {
        this.forEachWithCtx(HH, VL)
      }
      forEachWithCtx(HH, BH) {
        if (this._isSchema) {
          let LH = this.dirtyLow,
            AH = this.dirtyHigh;
          const rH = this.ops;
          if (void 0 !== rH) {
            for (; 0 !== LH;) {
              const AH = LH & -LH,
                SH = 31 - Math.clz32(AH);
              LH ^= AH, BH(HH, SH, rH[SH])
            }
            for (; 0 !== AH;) {
              const LH = AH & -AH,
                SH = 31 - Math.clz32(LH) + 32;
              AH ^= LH, BH(HH, SH, rH[SH])
            }
          } else {
            const AH = this.opsLow,
              rH = this.opsHigh;
            for (; 0 !== LH;) {
              const SH = LH & -LH,
                hH = 31 - Math.clz32(SH);
              LH ^= SH, BH(HH, hH, UL(AH, rH, hH))
            }
          }
          return
        }
        const LH = this.collDirty,
          AH = this.collPureOps;
        if (void 0 !== AH && AH.length > 0) {
          let rH = 0,
            SH = 0;
          for (const [hH, tH] of LH) {
            for (; rH < AH.length && AH[rH][0] <= SH;) {
              const LH = AH[rH++][1];
              BH(HH, -LH, LH)
            }
            BH(HH, hH, tH), SH++
          }
          for (; rH < AH.length;) {
            const LH = AH[rH++][1];
            BH(HH, -LH, LH)
          }
        } else
          for (const [rH, SH] of LH) BH(HH, rH, SH)
      }
      size() {
        return this._isSchema ? pB(this.dirtyLow) + pB(this.dirtyHigh) : this.collDirty.size + (this.collPureOps?.length ?? 0)
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
      insertAt(HH, BH) {
        if (this._isSchema) throw new Error("ChangeTree (Schema): insertAt is not supported");
        const LH = this.collDirty,
          AH = new Map,
          SH = !this.paused && !this.isFullStateOnly;
        if (HH > 0)
          for (const [rH, hH] of LH) rH < HH && AH.set(rH, hH);
        if (SH)
          for (let hH = 0; hH < BH; hH++) AH.set(HH + hH, rH.ADD);
        for (const [rH, hH] of LH) rH >= HH && AH.set(rH + BH, hH);
        this.collDirty = AH, SH && this.root?.enqueueChangeTree(this)
      }
      removeAt(HH, BH) {
        if (this._isSchema) throw new Error("ChangeTree (Schema): removeAt is not supported");
        const LH = this.collDirty,
          AH = HH + BH;
        let rH = !1;
        for (const hH of LH.keys())
          if (hH >= AH) {
            rH = !0;
            break
          } if (!rH) {
          for (let BH = HH; BH < AH; BH++) LH.delete(BH);
          return
        }
        const SH = new Map;
        for (const [hH, tH] of LH) hH < HH ? SH.set(hH, tH) : hH >= AH && SH.set(hH - BH, tH);
        this.collDirty = SH
      }
      unshift(HH) {
        this.insertAt(0, HH)
      }
      setRoot(HH) {
        ! function(HH, BH) {
          HH.root = BH;
          const LH = BH.add(HH);
          SL(HH, HH.parent, HH.parentIndex), LH && ML(HH, BH, xL)
        }(this, HH)
      }
      setParent(HH, BH, LH) {
        QL(this, HH, BH, LH)
      }
      forEachChild(HH) {
        ML(this, HH, WL)
      }
      forEachChildWithCtx(HH, BH) {
        ML(this, HH, BH)
      }
      forEachLive(HH) {
        rL(this, HH, AL)
      }
      forEachLiveWithCtx(HH, BH) {
        rL(this, HH, BH)
      }
      operation(HH) {
        this.paused || this.isFullStateOnly || (this.recordPure(HH), this.root?.enqueueChangeTree(this))
      }
      _routeAndRecord(HH, BH, LH) {
        if (!this.paused && !this.isFieldFullStateOnly(HH)) {
          if (this.isFieldUnreliable(HH) && !this.isNew) {
            const AH = this.ensureUnreliableRecorder();
            return LH ? AH.recordRaw(HH, BH) : AH.record(HH, BH), void this.root?.enqueueUnreliable(this)
          }
          LH ? this.recordRaw(HH, BH) : this.record(HH, BH), this.root?.enqueueChangeTree(this)
        }
      }
      change(HH) {
        let BH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : rH.ADD;
        this._routeAndRecord(HH, BH, !1)
      }
      indexedOperation(HH, BH) {
        this._routeAndRecord(HH, BH, !0)
      }
      getChange(HH) {
        return this.operationAt(HH)
      }
      pause() {
        this.paused = !0
      }
      resume() {
        this.paused = !1
      }
      untracked(HH) {
        const BH = this.paused;
        this.paused = !0;
        try {
          return HH()
        } finally {
          this.paused = BH
        }
      }
      markDirty(HH) {
        let BH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : rH.ADD;
        const LH = this.paused;
        this.paused = !1;
        try {
          this.change(HH, BH)
        } finally {
          this.paused = LH
        }
      }
      getValue(HH) {
        let BH = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return this.refTarget[GH](HH, BH)
      }
      delete(HH, BH) {
        if (void 0 === HH) {
          try {
            throw new Error(`@colyseus/schema ${this.ref.constructor.name}: trying to delete non-existing index '${HH}'`)
          } catch (Sr) {
            console.warn(Sr)
          }
          return
        }
        if (this.paused || this.isFieldFullStateOnly(HH)) return this.getValue(HH);
        const LH = this.isFieldUnreliable(HH) && !this.isNew;
        LH ? this.ensureUnreliableRecorder().recordDelete(HH, BH ?? rH.DELETE) : this.recordDelete(HH, BH ?? rH.DELETE);
        const AH = this.getValue(HH);
        return AH && AH[QH] && this.root?.remove(AH[QH]), LH ? this.root?.enqueueUnreliable(this) : this.root?.enqueueChangeTree(this), AH
      }
      endEncode() {
        this.reset(), this.changesNode = void 0, this._isSchema || this.refTarget[xH]?.(), this.isNew = !1
      }
      endEncodeUnreliable() {
        this.unreliableRecorder?.reset(), this.unreliableChangesNode = void 0, this._isSchema || this.refTarget[xH]?.()
      }
      discard() {
        this._isSchema || this.refTarget[xH]?.(), this.reset(), this.unreliableRecorder?.reset()
      }
      discardAll() {
        const HH = HH => {
          if (HH < 0) return;
          const BH = this.getValue(HH);
          BH && BH[QH] && BH[QH].discardAll()
        };
        this.forEach(HH), this.unreliableRecorder?.forEach(HH), this.discard()
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
      addParent(HH, BH) {
        ! function(HH, BH, LH) {
          if (HH.parentRef) {
            if (HH.parentRef[QH] === BH[QH]) return void(HH._parentIndex = LH);
            if (BL(HH, ((HH, LH) => HH[QH] === BH[QH]))) return void(HH._parentIndex = LH)
          }
          void 0 === HH.parentRef ? (HH.parentRef = BH, HH._parentIndex = LH) : (HH.extraParents = {
            ref: HH.parentRef,
            index: HH._parentIndex,
            next: HH.extraParents
          }, HH.parentRef = BH, HH._parentIndex = LH)
        }(this, HH, BH)
      }
      setParentIndex(HH, BH) {
        ! function(HH, BH, LH) {
          if (void 0 !== HH.extraParents)
            if (HH.parentRef[QH] !== BH[QH]) {
              for (let AH = HH.extraParents; void 0 !== AH; AH = AH.next)
                if (AH.ref[QH] === BH[QH]) return void(AH.index = LH)
            } else HH._parentIndex = LH;
          else HH._parentIndex = LH
        }(this, HH, BH)
      }
      removeParent() {
        return function(HH, BH) {
          if (HH.parentRef && HH.parentRef[QH] === BH[QH]) return HH.extraParents ? (HH.parentRef = HH.extraParents.ref, HH._parentIndex = HH.extraParents.index, HH.extraParents = HH.extraParents.next) : (HH.parentRef = void 0, HH._parentIndex = void 0), !0;
          let LH = HH.extraParents,
            AH = null;
          for (; LH;) {
            if (LH.ref[QH] === BH[QH]) return AH ? AH.next = LH.next : HH.extraParents = LH.next, !0;
            AH = LH, LH = LH.next
          }
          return void 0 === HH.parentRef
        }(this, arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.parent)
      }
      findParent(HH) {
        return function(HH, BH) {
          if (void 0 !== HH.parentRef && BH(HH.parentRef, HH._parentIndex)) return {
            ref: HH.parentRef,
            index: HH._parentIndex
          };
          for (let LH = HH.extraParents; void 0 !== LH; LH = LH.next)
            if (BH(LH.ref, LH.index)) return {
              ref: LH.ref,
              index: LH.index
            }
        }(this, HH)
      }
      hasParent(HH) {
        return BL(this, HH)
      }
      indexInParent(HH) {
        return function(HH, BH) {
          if (HH.parentRef && HH.parentRef[QH] === BH[QH]) return HH._parentIndex;
          for (let LH = HH.extraParents; void 0 !== LH; LH = LH.next)
            if (LH.ref[QH] === BH[QH]) return LH.index
        }(this, HH)
      }
      getAllParents() {
        return function(HH) {
          const BH = [];
          HH.parentRef && BH.push({
            ref: HH.parentRef,
            index: HH._parentIndex
          });
          let LH = HH.extraParents;
          for (; LH;) BH.push({
            ref: LH.ref,
            index: LH.index
          }), LH = LH.next;
          return BH
        }(this)
      }
    }
    class fL {
      ref;
      root = void 0;
      parentRef = void 0;
      paused = !1;
      isNew = !1;
      flags = 0;
      constructor(HH) {
        this.ref = HH
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
      untracked(HH) {
        return HH()
      }
      markDirty() {}
      forEachChild(HH) {
        const BH = this.ref;
        if (BH[WH]) {
          if ("string" !== typeof BH[WH])
            for (const [LH, AH] of BH.entries()) AH && HH(AH[QH], BH._collectionIndexes?.[LH] ?? LH);
          return
        }
        const LH = BH.constructor,
          AH = LH?.[Symbol.metadata];
        if (!AH) return;
        const rH = AH[mH] ?? [];
        for (let SH = 0; SH < rH.length; SH++) {
          const LH = rH[SH],
            hH = BH[AH[LH].name];
          hH && HH(hH[QH], LH)
        }
      }
      forEachChildWithCtx(HH, BH) {
        this.forEachChild(((LH, AH) => BH(HH, LH, AH)))
      }
      forEachLive() {}
      forEachLiveWithCtx() {}
      forEach() {}
    }

    function lL(HH) {
      let BH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : HH;
      var LH;
      Object.defineProperty(HH, QH, {
        value: (LH = BH, new fL(LH)),
        enumerable: !1,
        writable: !0
      })
    }

    function KL(HH, BH, LH, AH, SH, hH, zH) {
      void 0 !== zH ? zH(BH, AH, hH) : "string" === typeof LH ? BB[LH]?.(BH, AH, hH) : null != LH[Symbol.metadata] ? (BB.number(BH, AH[tH], hH), (SH & rH.ADD) === rH.ADD && HH.tryEncodeTypeId(BH, LH, AH.constructor, hH)) : BB.number(BH, AH[tH], hH)
    }
    const cL = function(HH, BH, LH, AH, SH, hH, tH, zH) {
        if (BH[hH.offset++] = 255 & (AH | SH), SH === rH.DELETE) return;
        const CH = LH.encDescriptor,
          EH = LH.ref,
          XH = EH[TH][AH] ?? EH[CH.names[AH]];
        KL(HH, BH, CH.types[AH], XH, SH, hH, CH.encoders[AH])
      },
      eL = function(HH, BH, LH, AH, SH, hH) {
        if (BH[hH.offset++] = 255 & SH, BB.number(BH, AH, hH), SH === rH.DELETE) return;
        const tH = LH.ref;
        if ((SH & rH.ADD) === rH.ADD) {
          const HH = tH.$indexes.get(AH);
          BB.string(BH, HH, hH)
        }
        KL(HH, BH, tH[WH], tH[GH](AH), SH, hH)
      },
      qL = function(HH, BH, LH, AH, SH, hH) {
        if (BH[hH.offset++] = 255 & SH, BB.number(BH, AH, hH), SH === rH.DELETE) return;
        const tH = LH.ref;
        KL(HH, BH, tH[WH], tH[GH](AH), SH, hH)
      },
      gL = function(HH, BH, LH, AH, SH, hH) {
        const tH = LH.ref;
        (SH & rH.ADD) === rH.ADD && "function" === typeof tH.set ? eL(HH, BH, LH, AH, SH, hH) : qL(HH, BH, LH, AH, SH, hH)
      },
      NL = function(HH, BH, LH, AH, SH, hH, zH, CH) {
        const EH = LH.refTarget,
          XH = EH[WH],
          YH = "string" !== typeof XH;
        let uH;
        if (CH && LH.isFiltered && YH) {
          const HH = EH.tmpItems[AH];
          if (!HH) return;
          if (uH = HH[tH], SH === rH.DELETE) SH = rH.DELETE_BY_REFID;
          else if ((SH & rH.ADD) === rH.ADD) SH = rH.ADD_BY_REFID;
          else if ((SH & rH.MOVE) === rH.MOVE) return
        } else if (SH === rH.DELETE && YH) {
          const HH = EH.tmpItems[AH];
          if (!HH) return;
          uH = HH[tH], SH = rH.DELETE_BY_REFID
        } else uH = AH;
        if (BH[hH.offset++] = 255 & SH, BB.number(BH, uH, hH), SH === rH.DELETE || SH === rH.DELETE_BY_REFID) return;
        KL(HH, BH, XH, EH[GH](AH, zH), SH, hH)
      };

    function RL(HH, BH, LH, AH, SH, hH, zH) {
      const CH = HH.resyncVisited;
      let EH = CH.get(HH.currentRefId);
      if (void 0 === EH && CH.set(HH.currentRefId, EH = new Set), EH.add(AH), void 0 !== SH && LH === rH.ADD && SH !== hH) {
        const LH = SH[tH];
        void 0 !== LH && (HH.root.removeRef(LH), zH?.push({
          ref: BH,
          refId: HH.currentRefId,
          op: rH.DELETE,
          dynamicIndex: AH,
          value: void 0,
          previousValue: SH
        }))
      }
    }

    function jL(HH, BH, LH, AH) {
      const rH = BH[tH];
      if (void 0 === rH || LH.has(rH)) return;
      LH.add(rH);
      const SH = BH.constructor[Symbol.metadata],
        hH = SH?.[mH];
      if (void 0 === hH) return;
      const zH = SH[lH];
      for (let tH = 0; tH < hH.length; tH++) {
        const rH = hH[tH];
        if (void 0 !== zH && zH.includes(rH)) continue;
        const CH = SH[rH],
          EH = BH[CH.name];
        EH && (oA.is(CH.type) ? jL(HH, EH, LH, AH) : nL(HH, EH, LH, AH))
      }
    }

    function nL(HH, BH, LH, AH) {
      const SH = BH[MH] ?? BH,
        hH = SH[tH];
      if (void 0 === hH || LH.has(hH)) return;
      LH.add(hH);
      const zH = HH.resyncVisited.get(hH);
      if (void 0 === zH) return;
      const CH = HH.root;
      SH[uH](zH, ((HH, LH) => {
        AH?.push({
          ref: BH,
          refId: hH,
          op: rH.DELETE,
          dynamicIndex: LH,
          value: void 0,
          previousValue: HH
        });
        const SH = HH?.[tH];
        void 0 !== SH && CH.removeRef(SH)
      }), (BH => {
        oA.isSchema(BH) && jL(HH, BH, LH, AH)
      }))
    }
    const FL = 1,
      DL = 2,
      wL = 3,
      ZL = 4,
      dL = 5;

    function aL(HH, BH, LH, AH, SH, hH, zH, CH, EH) {
      const XH = HH.root;
      let GH;
      if ((BH & rH.DELETE) === rH.DELETE) {
        const HH = SH?.[tH];
        void 0 !== HH && XH.removeRef(HH), BH !== rH.DELETE_AND_ADD && LH[YH](AH), GH = void 0
      }
      if (BH === rH.DELETE);
      else if ("string" === typeof hH) GH = vB[hH](zH, CH);
      else if (qB(hH)) GH = function(HH, BH, LH) {
        return NB(HH, (0, vB[HH.wire])(BH, LH))
      }(hH.quantized, zH, CH);
      else if (oA.is(hH)) {
        const LH = vB.number(zH, CH);
        if (GH = XH.refs.get(LH), (BH & rH.ADD) === rH.ADD) {
          const AH = HH.getInstanceType(zH, CH, hH);
          GH || (GH = HH.createInstanceOfType(AH)), XH.addRef(LH, GH, GH !== SH || BH === rH.DELETE_AND_ADD && GH === SH)
        }
      } else {
        const LH = (uH = Object.keys(hH)[0], PB[uH]),
          AH = vB.number(zH, CH);
        null !== HH.resyncVisited && function(HH, BH) {
          const LH = HH.resyncVisited;
          LH.has(BH) || LH.set(BH, new Set)
        }(HH, AH);
        const YH = XH.refs.has(AH) ? SH || XH.refs.get(AH) : LH.constructor.initializeForDecoder();
        if (GH = YH.clone(!0), GH[WH] = Object.values(hH)[0], SH) {
          let HH = SH[tH];
          if (void 0 !== HH && AH !== HH) {
            (BH & rH.DELETE) !== rH.DELETE && XH.removeRef(HH);
            const LH = SH.entries();
            let AH;
            for (;
              (AH = LH.next()) && !AH.done;) {
              const [BH, LH] = AH.value;
              "object" === typeof LH && (HH = LH[tH]), EH?.push({
                ref: SH,
                refId: HH,
                op: rH.DELETE,
                field: BH,
                value: void 0,
                previousValue: LH
              })
            }
          }
        }
        XH.addRef(AH, GH, YH !== SH || BH === rH.DELETE_AND_ADD && YH === SH)
      }
      var uH;
      return GH
    }
    const sL = function(HH, BH, LH, AH, rH) {
        const SH = BH[LH.offset++],
          hH = AH.constructor[Symbol.metadata],
          tH = SH >> 6 << 6,
          zH = SH % (tH || 255),
          CH = hH[zH];
        if (void 0 === CH) return console.warn("@colyseus/schema: field not defined at", {
          index: zH,
          ref: AH.constructor.name,
          metadata: hH
        }), -1;
        const EH = !0 === CH.deprecated,
          XH = EH ? void 0 : AH[GH](zH),
          YH = aL(HH, tH, AH, zH, XH, CH.type, BH, LH, rH);
        EH || (null !== YH && void 0 !== YH && (AH[CH.name] = YH), XH !== YH && rH?.push({
          ref: AH,
          refId: HH.currentRefId,
          op: tH,
          field: CH.name,
          value: YH,
          previousValue: XH
        }))
      },
      JL = function(HH, BH, LH, AH, SH) {
        const hH = AH[MH] ?? AH,
          tH = BH[LH.offset++];
        if (tH === rH.CLEAR) return HH.removeChildRefs(hH, SH), void hH.clear();
        const zH = vB.number(BH, LH),
          CH = hH[WH],
          EH = hH.constructor.COLLECTION_KIND;
        let XH;
        (tH & rH.ADD) === rH.ADD ? EH === FL ? (XH = vB.string(BH, LH), hH.setIndex(zH, XH)) : XH = zH : XH = hH.getIndex(zH);
        const YH = hH[GH](zH),
          uH = aL(HH, tH, AH, zH, YH, CH, BH, LH, SH);
        if (null !== HH.resyncVisited && RL(HH, AH, tH, XH, YH, uH, SH), null !== uH && void 0 !== uH) switch (EH) {
          case FL:
            hH.$items.set(XH, uH);
            break;
          case DL:
            hH.$setAt(zH, uH, null !== HH.resyncVisited && tH === rH.ADD ? rH.REPLACE : tH);
            break;
          case wL:
          case ZL:
          case dL:
            hH.$items.has(zH) || (hH.$items.set(zH, uH), "number" === typeof hH.$refId && zH >= hH.$refId && (hH.$refId = zH + 1));
            break;
          default:
            console.warn(`@colyseus/schema: missing COLLECTION_KIND on ${hH.constructor?.name} \u2014 item at index ${zH} was not stored.`)
        }
        YH !== uH && SH?.push({
          ref: AH,
          refId: HH.currentRefId,
          op: tH,
          dynamicIndex: XH,
          value: uH,
          previousValue: YH
        })
      },
      iL = function(HH, BH, LH, AH, SH) {
        const hH = AH[MH] ?? AH;
        let tH, zH = BH[LH.offset++];
        if (zH === rH.CLEAR) return HH.removeChildRefs(hH, SH), void hH.clear();
        if (zH === rH.REVERSE) return void hH.items.reverse();
        if (zH === rH.DELETE_BY_REFID) {
          const zH = vB.number(BH, LH),
            CH = HH.root.refs.get(zH);
          if (void 0 === CH) return;
          if (HH.root.removeRef(zH), tH = hH.findIndex((HH => HH === CH)), -1 === tH) return;
          return hH[YH](tH), void SH?.push({
            ref: AH,
            refId: HH.currentRefId,
            op: rH.DELETE,
            dynamicIndex: tH,
            value: void 0,
            previousValue: CH
          })
        }
        if (zH === rH.ADD_BY_REFID) {
          const AH = vB.number(BH, LH),
            rH = HH.root.refs.get(AH);
          rH && (tH = hH.findIndex((HH => HH === rH))), -1 !== tH && void 0 !== tH || (tH = hH.length)
        } else tH = vB.number(BH, LH);
        const CH = hH[WH];
        let EH = tH;
        const XH = hH.items[tH],
          GH = aL(HH, zH, AH, tH, XH, CH, BH, LH, SH);
        null !== HH.resyncVisited && RL(HH, AH, zH, tH, XH, GH, SH), null !== GH && void 0 !== GH && GH !== XH && hH.$setAt(tH, GH, null !== HH.resyncVisited && zH === rH.ADD ? rH.REPLACE : zH), XH !== GH && SH?.push({
          ref: AH,
          refId: HH.currentRefId,
          op: zH,
          dynamicIndex: EH,
          value: GH,
          previousValue: XH
        })
      };
    class pL extends Error {}

    function yL(HH, BH, LH, AH) {
      if (!(HH instanceof BH)) throw new pL(`a '${BH.name}' was expected, but '${HH&&HH.constructor.name}' was provided in ${LH.constructor.name}#${AH}`)
    }
    const HA = (HH, BH) => {
        const LH = HH.toString(),
          AH = BH.toString();
        return LH < AH ? -1 : LH > AH ? 1 : 0
      },
      BA = {
        get: (HH, BH) => "symbol" === typeof BH || isNaN(BH) ? Reflect.get(HH, BH) : HH.items[BH],
        set: (HH, BH, LH) => {
          if ("symbol" !== typeof BH && !isNaN(BH)) {
            if (void 0 === LH || null === LH) HH.$deleteAt(BH);
            else {
              let AH;
              if (LH[QH]) {
                yL(LH, HH[WH], HH, BH);
                const SH = HH.items[BH];
                HH.isMovingItems ? (AH = HH.$wireIndex(Number(BH)), void 0 !== SH ? LH[QH].isNew ? HH[QH].indexedOperation(AH, rH.MOVE_AND_ADD) : (HH[QH].getChange(AH) & rH.DELETE) === rH.DELETE ? HH[QH].indexedOperation(AH, rH.DELETE_AND_MOVE) : HH[QH].indexedOperation(AH, rH.MOVE) : LH[QH].isNew && HH[QH].indexedOperation(AH, rH.ADD), LH[QH].setParent(HH, HH[QH].root, AH)) : AH = HH.$changeAt(Number(BH), LH), void 0 !== SH && SH[QH].root?.remove(SH[QH])
              } else AH = HH.$changeAt(Number(BH), LH);
              HH.items[BH] = LH, void 0 !== AH && (HH.tmpItems[AH] = LH)
            }
            return !0
          }
          return Reflect.set(HH, BH, LH)
        },
        deleteProperty: (HH, BH) => ("number" === typeof BH ? HH.$deleteAt(BH) : delete HH[BH], !0),
        has: (HH, BH) => "symbol" === typeof BH || isNaN(Number(BH)) ? Reflect.has(HH, BH) : Reflect.has(HH.items, BH)
      };
    class LA {
      [QH];
      [tH];
      [MH];
      [WH];
      items = [];
      tmpItems = [];
      deletedIndexes = [];
      isMovingItems = !1;
      _needsCompaction = !1;
      static[CH] = NL;
      static[EH] = iL;
      static COLLECTION_KIND = DL;
      static[XH](HH, BH, LH) {
        if (!LH) return !0;
        const AH = HH[MH] ?? HH;
        return "string" === typeof AH[WH] || LH.isChangeTreeVisible(AH.tmpItems[BH]?.[QH])
      }
      static is(HH) {
        return Array.isArray(HH) || void 0 !== HH.array
      }
      static from(HH) {
        return new LA(...Array.from(HH))
      }
      constructor() {
        this[WH] = void 0, this[MH] = this;
        const HH = new Proxy(this, BA);
        return Object.defineProperty(this, QH, {
          value: new IL(HH, this),
          enumerable: !1,
          writable: !0
        }), arguments.length > 0 && this.push(...arguments), HH
      }
      static initializeForDecoder() {
        const HH = Object.create(LA.prototype);
        HH.items = [], HH.isMovingItems = !1, HH._needsCompaction = !1, HH[WH] = void 0, HH[MH] = HH;
        const BH = new Proxy(HH, BA);
        return lL(HH, BH), BH
      }
      set length(HH) {
        0 === HH ? this.clear() : HH < this.items.length ? this.splice(HH, this.length - HH) : console.warn("ArraySchema: can't set .length to a higher value than its length.")
      }
      get length() {
        return this.items.length
      }
      pauseTracking() {
        this[QH].pause()
      }
      resumeTracking() {
        this[QH].resume()
      }
      untracked(HH) {
        return this[QH].untracked(HH)
      }
      get isTrackingPaused() {
        return this[QH].paused
      }
      push() {
        const HH = this[MH],
          BH = HH.items,
          LH = HH.tmpItems,
          AH = HH[QH],
          SH = HH[WH];
        let hH = LH.length;
        for (let tH = 0, zH = arguments.length; tH < zH; tH++, hH++) {
          const zH = tH < 0 || arguments.length <= tH ? void 0 : arguments[tH];
          if (void 0 === zH || null === zH) return;
          "object" === typeof zH && SH && yL(zH, SH, HH, tH), AH.indexedOperation(hH, rH.ADD), BH.push(zH), LH.push(zH), zH[QH]?.setParent(this, AH.root, hH)
        }
        return hH
      }
      pop() {
        const HH = this[MH],
          BH = HH.tmpItems,
          LH = HH.deletedIndexes;
        let AH = -1;
        for (let SH = BH.length - 1; SH >= 0; SH--)
          if (!0 !== LH[SH]) {
            AH = SH;
            break
          } if (AH < 0) return;
        const rH = HH.$isUnsentAdd(AH);
        return HH[QH].delete(AH), rH ? HH.$cancelAdd(AH) : LH[AH] = !0, HH.items.pop()
      }
      at(HH) {
        return HH < 0 && (HH += this.length), this.items[HH]
      }
      $wireIndex(HH) {
        const BH = this.deletedIndexes;
        if (0 === BH.length) return HH;
        const LH = this.tmpItems;
        let AH = 0;
        for (let rH = 0; rH < LH.length; rH++)
          if (!0 !== BH[rH]) {
            if (AH === HH) return rH;
            AH++
          } return LH.length + (HH - AH)
      }
      $isUnsentAdd(HH) {
        const BH = this[QH];
        return 0 === (576 & BH.flags) && !BH.paused && "string" !== typeof this[WH] && BH.operationAt(HH) === rH.ADD
      }
      $cancelAdd(HH) {
        let BH = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        const LH = this[QH],
          AH = this.tmpItems[HH];
        this.tmpItems.splice(HH, 1), this.deletedIndexes.length > 0 && this.deletedIndexes.splice(HH, 1), LH.removeAt(HH, 1);
        const rH = AH?.[QH];
        void 0 !== rH && void 0 === rH.root && rH.removeParent(this), BH && this.$reindexChildren(HH)
      }
      $reindexChildren(HH, BH) {
        if (!this[QH].hasFilteredFields) return;
        if ("string" === typeof this[WH]) return;
        const LH = this.tmpItems,
          AH = LH.length;
        if (void 0 !== BH)
          for (; HH < AH && LH[HH] === BH[HH];) HH++;
        for (let rH = HH; rH < AH; rH++) LH[rH]?.[QH]?.setParentIndex(this, rH)
      }
      $changeAt(HH, BH) {
        if (void 0 === BH || null === BH) return void console.error("ArraySchema items cannot be null nor undefined; Use `splice(index, 1)` instead.");
        if (this.items[HH] === BH) return;
        const LH = void 0 !== this.items[HH] ? "object" === typeof BH ? rH.DELETE_AND_ADD : rH.REPLACE : rH.ADD,
          AH = this.$wireIndex(HH),
          SH = this[QH];
        return SH.change(AH, LH), BH[QH]?.setParent(this, SH.root, AH), AH
      }
      $deleteAt(HH, BH) {
        this[QH].delete(this.$wireIndex(HH), BH)
      }
      $setAt(HH, BH, LH) {
        LH === rH.ADD && void 0 !== this.items[HH] ? this.items.splice(HH, 0, BH) : LH === rH.DELETE_AND_MOVE ? (this.items.splice(HH, 1), this.items[HH] = BH) : (HH > this.items.length && (this._needsCompaction = !0), this.items[HH] = BH)
      }
      clear() {
        const HH = this[MH];
        if (0 === HH.items.length) return;
        const BH = HH[QH];
        BH.forEachChild(((HH, LH) => {
          BH.root?.remove(HH)
        })), BH.discard(), BH.operation(rH.CLEAR), HH.items.length = 0, HH.tmpItems.length = 0
      } [vH]() {
        const HH = this[MH] ?? this,
          BH = HH[QH];
        if (BH.isStreamCollection) throw new Error("@colyseus/schema: cannot reset a streamed ArraySchema (pooling not supported).");
        const LH = HH.items;
        for (let AH = 0; AH < LH.length; AH++) LH[AH]?.[vH]?.();
        HH.items.length = 0, HH.tmpItems.length = 0, HH.deletedIndexes.length = 0, BH.recycle(), HH[tH] = void 0
      }
      concat() {
        return new LA(...this.items.concat(...arguments))
      }
      join(HH) {
        return this.items.join(HH)
      }
      reverse() {
        const HH = this[MH],
          BH = HH[QH];
        if (BH.has() || HH.deletedIndexes.length > 0) {
          const BH = HH.items.slice().reverse();
          return this.clear(), this.push(...BH), this
        }
        return BH.operation(rH.REVERSE), HH.items.reverse(), HH.tmpItems.reverse(), HH.$reindexChildren(0), this
      }
      shift() {
        const HH = this[MH],
          BH = HH.items;
        if (0 === BH.length) return;
        const LH = HH[QH],
          AH = HH.deletedIndexes;
        let SH = 0;
        for (; !0 === AH[SH];) SH++;
        const hH = HH.$isUnsentAdd(SH);
        return LH.delete(SH, rH.DELETE), hH ? HH.$cancelAdd(SH) : AH[SH] = !0, BH.shift()
      }
      slice(HH, BH) {
        const LH = new LA;
        return LH.push(...this.items.slice(HH, BH)), LH
      }
      sort() {
        let HH = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : HA;
        const BH = this[MH];
        BH.isMovingItems = !0;
        const LH = BH[QH];
        return BH.items.sort(HH).forEach(((HH, BH) => LH.change(BH, rH.REPLACE))), BH.tmpItems.sort(HH), BH.$reindexChildren(0), BH.isMovingItems = !1, this
      }
      splice(HH, BH) {
        const LH = this[MH],
          AH = LH[QH],
          SH = LH.items,
          hH = LH.tmpItems,
          tH = LH.deletedIndexes,
          zH = SH.length,
          CH = hH.length;
        for (var EH = arguments.length, XH = new Array(EH > 2 ? EH - 2 : 0), GH = 2; GH < EH; GH++) XH[GH - 2] = arguments[GH];
        const YH = XH.length,
          uH = [];
        for (let rH = 0; rH < CH; rH++) !0 !== tH[rH] && uH.push(rH);
        let WH;
        if (zH > HH) {
          void 0 === BH && (BH = zH - HH);
          for (let SH = HH; SH < HH + BH; SH++) {
            const HH = uH[SH],
              BH = LH.$isUnsentAdd(HH);
            AH.delete(HH, rH.DELETE), BH ? (WH ??= []).push(HH) : tH[HH] = !0
          }
        } else BH = 0;
        if (YH > 0) {
          const SH = uH[HH] ?? zH,
            CH = Math.min(YH, BH);
          for (let HH = 0; HH < CH; HH++) {
            const BH = SH + HH;
            let LH;
            const zH = void 0 !== WH ? WH.indexOf(BH) : -1; - 1 !== zH ? (WH.splice(zH, 1), LH = rH.ADD) : LH = tH[BH] ? rH.DELETE_AND_ADD : rH.ADD, AH.indexedOperation(BH, LH), hH[BH] = XH[HH], tH[BH] = !1, XH[HH][QH]?.setParent(this, AH.root, BH)
          }
          const EH = YH - CH;
          if (EH > 0) {
            const HH = SH + CH;
            AH.insertAt(HH, EH);
            for (let BH = 0; BH < EH; BH++) XH[CH + BH][QH]?.setParent(this, AH.root, HH + BH);
            tH.length > 0 && tH.splice(HH, 0, ...new Array(EH).fill(!1)), hH.splice(HH, 0, ...XH.slice(CH)), LH.$reindexChildren(HH + EH)
          }
        }
        if (void 0 !== WH && WH.length > 0) {
          for (let HH = WH.length - 1; HH >= 0; HH--) LH.$cancelAdd(WH[HH], !1);
          LH.$reindexChildren(WH[0])
        }
        return AH.root?.enqueueChangeTree(AH), SH.splice(HH, BH, ...XH)
      }
      unshift() {
        const HH = this[MH],
          BH = HH[QH];
        BH.unshift(arguments.length);
        for (let AH = 0; AH < arguments.length; AH++)(AH < 0 || arguments.length <= AH ? void 0 : arguments[AH])?.[QH]?.setParent(this, BH.root, AH);
        const LH = HH.deletedIndexes;
        return LH.length > 0 && LH.unshift(...new Array(arguments.length).fill(!1)), HH.tmpItems.unshift(...arguments), HH.$reindexChildren(arguments.length), HH.items.unshift(...arguments)
      }
      indexOf(HH, BH) {
        return this.items.indexOf(HH, BH)
      }
      lastIndexOf(HH) {
        let BH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.length - 1;
        return this.items.lastIndexOf(HH, BH)
      }
      every(HH, BH) {
        return this.items.every(HH, BH)
      }
      some(HH, BH) {
        return this.items.some(HH, BH)
      }
      forEach(HH, BH) {
        return this.items.forEach(HH, BH)
      }
      map(HH, BH) {
        return this.items.map(HH, BH)
      }
      filter(HH, BH) {
        return this.items.filter(HH, BH)
      }
      reduce(HH, BH) {
        return this.items.reduce.apply(this.items, arguments)
      }
      reduceRight(HH, BH) {
        return this.items.reduceRight.apply(this.items, arguments)
      }
      find(HH, BH) {
        return this.items.find(HH, BH)
      }
      findIndex(HH, BH) {
        return this.items.findIndex(HH, BH)
      }
      fill(HH, BH, LH) {
        throw new Error("ArraySchema#fill() not implemented")
      }
      copyWithin(HH, BH, LH) {
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
        return LA
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
      includes(HH, BH) {
        return this.items.includes(HH, BH)
      }
      flatMap(HH, BH) {
        throw new Error("ArraySchema#flatMap() is not supported.")
      }
      flat(HH) {
        throw new Error("ArraySchema#flat() is not supported.")
      }
      findLast() {
        return this.items.findLast.apply(this.items, arguments)
      }
      findLastIndex() {
        for (var HH = arguments.length, BH = new Array(HH), LH = 0; LH < HH; LH++) BH[LH] = arguments[LH];
        return this.items.findLastIndex.apply(this.items, arguments)
      }
      with(HH, BH) {
        const LH = this.items.slice();
        return HH < 0 && (HH += this.length), LH[HH] = BH, new LA(...LH)
      }
      toReversed() {
        return this.items.slice().reverse()
      }
      toSorted(HH) {
        return this.items.slice().sort(HH)
      }
      toSpliced(HH, BH) {
        for (var LH = arguments.length, AH = new Array(LH > 2 ? LH - 2 : 0), rH = 2; rH < LH; rH++) AH[rH - 2] = arguments[rH];
        const SH = this.items.slice();
        return SH.splice.apply(SH, arguments), SH
      }
      shuffle() {
        return this.move((HH => {
          let BH = this.items.length;
          for (; 0 != BH;) {
            let HH = Math.floor(Math.random() * BH);
            BH--, [this[BH], this[HH]] = [this[HH], this[BH]]
          }
        }))
      }
      move(HH) {
        return this.isMovingItems = !0, HH(this), this.isMovingItems = !1, this
      } [GH](HH) {
        let BH = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        const LH = this[MH] ?? this;
        return BH || LH.deletedIndexes[HH] ? LH.items[HH] : LH.tmpItems[HH] || LH.items[HH]
      } [YH](HH) {
        const BH = this[MH] ?? this;
        BH.items[HH] = void 0, BH._needsCompaction = !0
      } [xH]() {
        const HH = this.tmpItems;
        this.tmpItems = this.items.slice(), this.deletedIndexes.length > 0 && (this.$reindexChildren(0, HH), this.deletedIndexes.length = 0)
      } [PH]() {
        const HH = this[MH] ?? this;
        HH._needsCompaction && (HH._needsCompaction = !1, HH.items = HH.items.filter((HH => void 0 !== HH)))
      } [uH](HH, BH, LH) {
        const AH = this[MH] ?? this,
          rH = AH.items;
        let SH = !1;
        for (let hH = 0; hH < rH.length; hH++) {
          const tH = rH[hH];
          HH.has(hH) ? LH(tH) : (SH = !0, BH(tH, hH), AH[YH](hH))
        }
        SH && AH[PH]()
      }
      toArray() {
        return this.items.slice(0)
      }
      toJSON() {
        return this.toArray().map((HH => "function" === typeof HH.toJSON ? HH.toJSON() : HH))
      }
      clone(HH) {
        let BH;
        return HH ? (BH = new LA, BH.push(...this.items)) : BH = new LA(...this.map((HH => HH[QH] ? HH.clone() : HH))), BH
      }
    }
    UB("array", {
      constructor: LA
    });
    class AA {
      keyByIndex = new Map;
      indexByKey = Object.create(null);
      nextIndex = 0;
      snapshots;
      indexOf(HH) {
        const BH = this.indexByKey[HH];
        return void 0 === BH ? void 0 : BH
      }
      assign(HH) {
        const BH = this.nextIndex++;
        return this.indexByKey[HH] = BH, this.keyByIndex.set(BH, HH), BH
      }
      snapshot(HH, BH) {
        (this.snapshots ??= new Map).set(HH, BH)
      }
      forgetSnapshot(HH) {
        this.snapshots?.delete(HH)
      }
      snapshotAt(HH) {
        return this.snapshots?.get(HH)
      }
      setIndex(HH, BH) {
        this.keyByIndex.set(HH, BH), this.indexByKey[BH] = HH
      }
      keyOf(HH) {
        return this.keyByIndex.get(HH)
      }
      cleanupAfterEncode() {
        if (void 0 !== this.snapshots) {
          for (const [HH] of this.snapshots) {
            const BH = this.keyByIndex.get(HH);
            void 0 !== BH && (delete this.indexByKey[BH], this.keyByIndex.delete(HH))
          }
          this.snapshots.clear()
        }
      }
      reset() {
        this.indexByKey = Object.create(null), this.keyByIndex.clear(), this.snapshots?.clear(), this.nextIndex = 0
      }
    }
    class rA {
      [QH];
      [tH];
      childType;
      [WH];
      $items = new Map;
      journal = new AA;
      _stream;
      get maxPerTick() {
        return this._stream?.maxPerTick ?? 32
      }
      set maxPerTick(HH) {
        (this._stream ??= bB()).maxPerTick = HH
      }
      get priority() {
        return this._stream?.priority
      }
      set priority(HH) {
        (this._stream ??= bB()).priority = HH
      }
      get $indexes() {
        return this.journal.keyByIndex
      }
      get _collectionIndexes() {
        return this.journal.indexByKey
      }
      static[CH] = eL;
      static[EH] = JL;
      static COLLECTION_KIND = FL;
      static[XH](HH, BH, LH) {
        if (!LH || "string" === typeof HH[WH]) return !0;
        const AH = HH[GH](BH) ?? HH.journal.snapshotAt(BH);
        return LH.isChangeTreeVisible(AH[QH])
      }
      static is(HH) {
        return void 0 !== HH.map
      }
      constructor(HH) {
        if (Object.defineProperty(this, QH, {
            value: new IL(this),
            enumerable: !1,
            writable: !0
          }), this[WH] = void 0, HH)
          if (HH instanceof Map || HH instanceof rA) HH.forEach(((HH, BH) => this.set(BH, HH)));
          else
            for (const BH in HH) this.set(BH, HH[BH])
      }
      static initializeForDecoder() {
        const HH = Object.create(rA.prototype);
        return HH.$items = new Map, HH.journal = new AA, HH[WH] = void 0, lL(HH), HH
      } [Symbol.iterator]() {
        return this.$items[Symbol.iterator]()
      }
      get[Symbol.toStringTag]() {
        return this.$items[Symbol.toStringTag]
      }
      static get[Symbol.species]() {
        return rA
      }
      set(HH, BH) {
        if (void 0 === BH || null === BH) throw new Error(`MapSchema#set('${HH}', ${BH}): trying to set ${BH} value on '${HH}'.`);
        "object" === typeof BH && this[WH] && yL(BH, this[WH], this, HH), HH = HH.toString();
        const LH = this[QH],
          AH = void 0 !== BH[QH],
          SH = this.journal;
        let hH, tH = SH.indexOf(HH);
        if (void 0 !== tH) {
          hH = rH.REPLACE;
          const LH = this.$items.get(HH);
          if (LH === BH) return;
          AH && (hH = rH.DELETE_AND_ADD, void 0 !== LH && LH[QH].root?.remove(LH[QH])), void 0 !== SH.snapshotAt(tH) && SH.forgetSnapshot(tH)
        } else tH = SH.assign(HH), hH = rH.ADD;
        return this.$items.set(HH, BH), hH === rH.ADD && LH.isStreamCollection ? void 0 !== LH.root && mB(this, LH.root, tH) : LH.change(tH, hH), AH && BH[QH].setParent(this, LH.root, tH), this
      }
      get(HH) {
        return this.$items.get(HH)
      }
      getOrInsert(HH, BH) {
        return this.$items.has(HH) ? this.$items.get(HH) : (this.set(HH, BH), BH)
      }
      getOrInsertComputed(HH, BH) {
        if (this.$items.has(HH)) return this.$items.get(HH);
        const LH = BH(HH);
        return this.set(HH, LH), LH
      }
      delete(HH) {
        if (!this.$items.has(HH)) return !1;
        const BH = this.journal.indexOf(HH),
          LH = this.$items.get(HH),
          AH = this[QH];
        if (AH.isStreamCollection) {
          const rH = AH.root;
          let SH = !1;
          return void 0 !== rH && (SH = oB(this, rH, this[tH], BH)), void 0 !== LH?.[QH] && rH?.remove(LH[QH]), this.$items.delete(HH), SH || this.journal.snapshot(BH, LH), !0
        }
        return this.journal.snapshot(BH, LH), AH.delete(BH), this.$items.delete(HH)
      }
      clear() {
        const HH = this[QH];
        HH.discard(), HH.forEachChild(((BH, LH) => {
          HH.root?.remove(BH)
        })), this.journal.reset(), this.$items.clear(), HH.operation(rH.CLEAR)
      } [vH]() {
        const HH = this[QH];
        if (HH.isStreamCollection) throw new Error("@colyseus/schema: cannot reset a streamed MapSchema (pooling not supported).");
        this.$items.forEach((HH => HH?.[vH]?.())), this.$items.clear(), this.journal.reset(), HH.recycle(), this[tH] = void 0
      }
      has(HH) {
        return this.$items.has(HH)
      }
      forEach(HH) {
        this.$items.forEach(HH)
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
        this[QH].pause()
      }
      resumeTracking() {
        this[QH].resume()
      }
      untracked(HH) {
        return this[QH].untracked(HH)
      }
      get isTrackingPaused() {
        return this[QH].paused
      }
      setIndex(HH, BH) {
        this.journal.setIndex(HH, BH)
      }
      getIndex(HH) {
        return this.journal.keyOf(HH)
      } [GH](HH) {
        const BH = this.journal.keyOf(HH);
        return void 0 !== BH ? this.$items.get(BH) : void 0
      } [YH](HH) {
        const BH = this.journal.keyOf(HH);
        void 0 !== BH && (this.$items.delete(BH), this.journal.keyByIndex.delete(HH))
      } [uH](HH, BH, LH) {
        let AH = null;
        if (this.$items.forEach(((rH, SH) => {
            HH.has(SH) ? LH(rH) : ((AH ??= new Set).add(SH), BH(rH, SH))
          })), null !== AH) {
          AH.forEach((HH => {
            this.$items.delete(HH), delete this.journal.indexByKey[HH]
          }));
          const HH = [];
          this.journal.keyByIndex.forEach(((BH, LH) => {
            AH.has(BH) && HH.push(LH)
          }));
          for (let BH = 0; BH < HH.length; BH++) this.journal.keyByIndex.delete(HH[BH])
        }
      } [xH]() {
        this.journal.cleanupAfterEncode()
      }
      _dropView(HH) {
        KB(this, HH)
      }
      _unregister() {}
      toJSON() {
        return Object.fromEntries(Array.from(this, (HH => {
          let [BH, LH] = HH;
          return [BH, "function" === typeof LH.toJSON ? LH.toJSON() : LH]
        })))
      }
      clone(HH) {
        let BH;
        return HH ? BH = Object.assign(new rA, this) : (BH = new rA, this.forEach(((HH, LH) => {
          HH[QH] ? BH.set(LH, HH.clone()) : BH.set(LH, HH)
        }))), BH
      }
    }
    UB("map", {
      constructor: rA
    });
    class SA {
      [QH];
      [tH];
      [WH];
      $items = new Map;
      deletedItems = {};
      $refId = 0;
      _stream;
      get maxPerTick() {
        return this._stream?.maxPerTick ?? 32
      }
      set maxPerTick(HH) {
        (this._stream ??= bB()).maxPerTick = HH
      }
      get priority() {
        return this._stream?.priority
      }
      set priority(HH) {
        (this._stream ??= bB()).priority = HH
      }
      static[CH] = qL;
      static[EH] = JL;
      static COLLECTION_KIND = ZL;
      static[XH](HH, BH, LH) {
        return !LH || "string" === typeof HH[WH] || LH.isChangeTreeVisible((HH[GH](BH) ?? HH.deletedItems[BH])[QH])
      }
      static is(HH) {
        return void 0 !== HH.collection
      }
      constructor(HH) {
        Object.defineProperty(this, QH, {
          value: new IL(this),
          enumerable: !1,
          writable: !0
        }), this[WH] = void 0, HH && HH.forEach((HH => this.add(HH)))
      }
      static initializeForDecoder() {
        const HH = Object.create(SA.prototype);
        return HH.$items = new Map, HH.deletedItems = {}, HH.$refId = 0, HH[WH] = void 0, lL(HH), HH
      }
      add(HH) {
        const BH = this.$refId++,
          LH = this[QH];
        return this.$items.set(BH, HH), LH.isStreamCollection ? void 0 !== LH.root && mB(this, LH.root, BH) : LH.change(BH), void 0 !== HH[QH] && HH[QH].setParent(this, LH.root, BH), BH
      }
      at(HH) {
        const BH = Array.from(this.$items.keys())[HH];
        return this.$items.get(BH)
      }
      entries() {
        return this.$items.entries()
      }
      delete(HH) {
        const BH = this.$items.entries();
        let LH, AH;
        for (;
          (AH = BH.next()) && !AH.done;)
          if (HH === AH.value[1]) {
            LH = AH.value[0];
            break
          } if (void 0 === LH) return !1;
        const rH = this[QH];
        if (rH.isStreamCollection) {
          const HH = rH.root,
            BH = this.$items.get(LH);
          return void 0 !== HH && oB(this, HH, this[tH], LH), void 0 !== BH?.[QH] && HH?.remove(BH[QH]), this.deletedItems[LH] = BH, this.$items.delete(LH)
        }
        return this.deletedItems[LH] = rH.delete(LH), this.$items.delete(LH)
      }
      clear() {
        const HH = this[QH];
        HH.discard(), HH.forEachChild(((BH, LH) => {
          HH.root?.remove(BH)
        })), this.$items.clear(), HH.operation(rH.CLEAR)
      } [vH]() {
        const HH = this[QH];
        if (HH.isStreamCollection) throw new Error("@colyseus/schema: cannot reset a streamed CollectionSchema (pooling not supported).");
        this.$items.forEach((HH => HH?.[vH]?.())), this.$items.clear(), this.deletedItems = {}, this.$refId = 0, HH.recycle(), this[tH] = void 0
      }
      has(HH) {
        return Array.from(this.$items.values()).some((BH => BH === HH))
      }
      forEach(HH) {
        this.$items.forEach(((BH, LH, AH) => HH(BH, LH, this)))
      }
      values() {
        return this.$items.values()
      }
      get size() {
        return this.$items.size
      }
      pauseTracking() {
        this[QH].pause()
      }
      resumeTracking() {
        this[QH].resume()
      }
      untracked(HH) {
        return this[QH].untracked(HH)
      }
      get isTrackingPaused() {
        return this[QH].paused
      } [Symbol.iterator]() {
        return this.$items.values()
      }
      setIndex(HH, BH) {}
      getIndex(HH) {
        return HH
      } [GH](HH) {
        return this.$items.get(HH)
      } [YH](HH) {
        this.$items.delete(HH)
      } [uH](HH, BH, LH) {
        let AH = null;
        if (this.$items.forEach(((rH, SH) => {
            HH.has(SH) ? LH(rH) : ((AH ??= []).push(SH), BH(rH, SH))
          })), null !== AH)
          for (let rH = 0; rH < AH.length; rH++) this[YH](AH[rH])
      } [xH]() {
        for (const HH in this.deletedItems) delete this.deletedItems[HH]
      }
      _dropView(HH) {
        KB(this, HH)
      }
      _unregister() {}
      toArray() {
        return Array.from(this.$items.values())
      }
      toJSON() {
        const HH = [];
        return this.forEach(((BH, LH) => {
          HH.push("function" === typeof BH.toJSON ? BH.toJSON() : BH)
        })), HH
      }
      clone(HH) {
        let BH;
        return HH ? BH = Object.assign(new SA, this) : (BH = new SA, this.forEach((HH => {
          HH[QH] ? BH.add(HH.clone()) : BH.add(HH)
        }))), BH
      }
    }
    UB("collection", {
      constructor: SA
    });
    class hA {
      [QH];
      [tH];
      [WH];
      $items = new Map;
      deletedItems = {};
      $refId = 0;
      _stream;
      get maxPerTick() {
        return this._stream?.maxPerTick ?? 32
      }
      set maxPerTick(HH) {
        (this._stream ??= bB()).maxPerTick = HH
      }
      get priority() {
        return this._stream?.priority
      }
      set priority(HH) {
        (this._stream ??= bB()).priority = HH
      }
      static[CH] = qL;
      static[EH] = JL;
      static COLLECTION_KIND = wL;
      static[XH](HH, BH, LH) {
        return !LH || "string" === typeof HH[WH] || LH.isVisible((HH[GH](BH) ?? HH.deletedItems[BH])[QH])
      }
      static is(HH) {
        return void 0 !== HH.set
      }
      constructor(HH) {
        Object.defineProperty(this, QH, {
          value: new IL(this),
          enumerable: !1,
          writable: !0
        }), this[WH] = void 0, HH && HH.forEach((HH => this.add(HH)))
      }
      static initializeForDecoder() {
        const HH = Object.create(hA.prototype);
        return HH.$items = new Map, HH.deletedItems = {}, HH.$refId = 0, HH[WH] = void 0, lL(HH), HH
      }
      add(HH) {
        if (this.has(HH)) return !1;
        const BH = this.$refId++,
          LH = this[QH];
        return this.$items.set(BH, HH), LH.isStreamCollection ? void 0 !== LH.root && mB(this, LH.root, BH) : LH.change(BH, rH.ADD), void 0 !== HH[QH] && HH[QH].setParent(this, LH.root, BH), BH
      }
      entries() {
        return this.$items.entries()
      }
      delete(HH) {
        const BH = this.$items.entries();
        let LH, AH;
        for (;
          (AH = BH.next()) && !AH.done;)
          if (HH === AH.value[1]) {
            LH = AH.value[0];
            break
          } if (void 0 === LH) return !1;
        const rH = this[QH];
        if (rH.isStreamCollection) {
          const HH = rH.root,
            BH = this.$items.get(LH);
          return void 0 !== HH && oB(this, HH, this[tH], LH), void 0 !== BH?.[QH] && HH?.remove(BH[QH]), this.deletedItems[LH] = BH, this.$items.delete(LH)
        }
        return this.deletedItems[LH] = rH.delete(LH), this.$items.delete(LH)
      }
      clear() {
        const HH = this[QH];
        HH.discard(), this.$items.clear(), HH.operation(rH.CLEAR)
      } [vH]() {
        const HH = this[QH];
        if (HH.isStreamCollection) throw new Error("@colyseus/schema: cannot reset a streamed SetSchema (pooling not supported).");
        this.$items.forEach((HH => HH?.[vH]?.())), this.$items.clear(), this.deletedItems = {}, this.$refId = 0, HH.recycle(), this[tH] = void 0
      }
      has(HH) {
        const BH = this.$items.values();
        let LH, AH = !1;
        for (;
          (LH = BH.next()) && !LH.done;)
          if (HH === LH.value) {
            AH = !0;
            break
          } return AH
      }
      forEach(HH) {
        this.$items.forEach(((BH, LH, AH) => HH(BH, LH, this)))
      }
      values() {
        return this.$items.values()
      }
      get size() {
        return this.$items.size
      }
      pauseTracking() {
        this[QH].pause()
      }
      resumeTracking() {
        this[QH].resume()
      }
      untracked(HH) {
        return this[QH].untracked(HH)
      }
      get isTrackingPaused() {
        return this[QH].paused
      } [Symbol.iterator]() {
        return this.$items.values()
      }
      setIndex(HH, BH) {}
      getIndex(HH) {
        return HH
      } [GH](HH) {
        return this.$items.get(HH)
      } [YH](HH) {
        this.$items.delete(HH)
      } [uH](HH, BH, LH) {
        let AH = null;
        if (this.$items.forEach(((rH, SH) => {
            HH.has(SH) ? LH(rH) : ((AH ??= []).push(SH), BH(rH, SH))
          })), null !== AH)
          for (let rH = 0; rH < AH.length; rH++) this[YH](AH[rH])
      } [xH]() {
        for (const HH in this.deletedItems) delete this.deletedItems[HH]
      }
      _dropView(HH) {
        KB(this, HH)
      }
      _unregister() {}
      toArray() {
        return Array.from(this.$items.values())
      }
      toJSON() {
        const HH = [];
        return this.forEach(((BH, LH) => {
          HH.push("function" === typeof BH.toJSON ? BH.toJSON() : BH)
        })), HH
      }
      clone(HH) {
        let BH;
        return HH ? BH = Object.assign(new hA, this) : (BH = new hA, this.forEach((HH => {
          HH[QH] ? BH.add(HH.clone()) : BH.add(HH)
        }))), BH
      }
    }
    UB("set", {
      constructor: hA
    });
    class tA {
      [QH];
      [tH];
      [WH];
      $items = new Map;
      $nextPosition = 0;
      _itemIndex = new Map;
      _stream;
      get maxPerTick() {
        return this._stream?.maxPerTick ?? 32
      }
      set maxPerTick(HH) {
        (this._stream ??= bB()).maxPerTick = HH
      }
      get priority() {
        return this._stream?.priority
      }
      set priority(HH) {
        (this._stream ??= bB()).priority = HH
      }
      static $isStream = !0;
      static[CH] = qL;
      static[EH] = JL;
      static COLLECTION_KIND = dL;
      static[XH](HH, BH, LH) {
        if (!LH) return !0;
        const AH = HH[GH](BH);
        return void 0 !== AH && LH.isVisible(AH[QH])
      }
      static is(HH) {
        return HH && void 0 !== HH.stream
      }
      constructor() {
        Object.defineProperty(this, QH, {
          value: new IL(this),
          enumerable: !1,
          writable: !0
        }), this[WH] = void 0
      }
      static initializeForDecoder() {
        const HH = Object.create(tA.prototype);
        return HH.$items = new Map, HH.$nextPosition = 0, HH._itemIndex = new Map, HH[WH] = void 0, lL(HH), HH
      }
      add(HH) {
        if (this._itemIndex.has(HH)) return -1;
        const BH = this.$nextPosition++;
        this.$items.set(BH, HH), this._itemIndex.set(HH, BH);
        const LH = this[QH].root;
        return void 0 !== HH[QH] && HH[QH].setParent(this, LH, BH), void 0 !== LH && mB(this, LH, BH), BH
      }
      remove(HH) {
        const BH = this._itemIndex.get(HH);
        if (void 0 === BH) return !1;
        this._itemIndex.delete(HH), this.$items.delete(BH);
        const LH = this[QH].root;
        return void 0 !== LH && (oB(this, LH, this[tH], BH), void 0 !== HH[QH] && LH.remove(HH[QH])), !0
      }
      has(HH) {
        return this._itemIndex.has(HH)
      }
      clear() {
        const HH = this[QH].root;
        if (void 0 !== HH) {
          ! function(HH, BH, LH) {
            const AH = HH._stream;
            if (void 0 !== AH) {
              AH.broadcastPending.clear();
              for (const HH of AH.sentBroadcast) AH.broadcastDeletes.add(HH);
              AH.sentBroadcast.clear(), BH.forEachActiveView((HH => {
                AH.pendingByView.get(HH.id)?.clear();
                const BH = AH.sentByView.get(HH.id);
                if (void 0 !== BH && BH.size > 0) {
                  let AH = HH.changes.get(LH);
                  void 0 === AH && (AH = new Map, HH.changes.set(LH, AH));
                  for (const HH of BH) AH.set(HH, rH.DELETE);
                  BH.clear()
                }
              }))
            }
          }(this, HH, this[tH]);
          for (const BH of this.$items.values()) void 0 !== BH[QH] && HH.remove(BH[QH])
        }
        this.$items.clear(), this._itemIndex.clear()
      }
      forEach(HH) {
        for (const [BH, LH] of this.$items) HH(LH, BH, this)
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
      setIndex(HH, BH) {}
      getIndex(HH) {
        return HH
      } [GH](HH) {
        return this.$items.get(HH)
      } [YH](HH) {
        const BH = this.$items.get(HH);
        void 0 !== BH && (this._itemIndex.delete(BH), this.$items.delete(HH))
      } [uH]() {} [xH]() {}
      toArray() {
        return Array.from(this.$items.values())
      }
      toJSON() {
        const HH = [];
        return this.forEach((BH => {
          HH.push("function" === typeof BH?.toJSON ? BH.toJSON() : BH)
        })), HH
      }
      clone(HH) {
        if (HH) {
          return Object.assign(new tA, this)
        }
        const BH = new tA;
        return BH.maxPerTick = this.maxPerTick, this.forEach((HH => {
          BH.add("function" === typeof HH?.clone ? HH.clone() : HH)
        })), BH
      }
      _dropView(HH) {
        KB(this, HH)
      }
      _unregister() {}
    }
    UB("stream", {
      constructor: tA
    });
    class zA {
      [UH] = !0;
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
      constructor(HH) {
        this._type = HH
      }
      default (HH) {
        return this._default = HH, this._hasDefault = !0, this
      }
      view(HH) {
        return this._view = HH ?? -1, this
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
        const HH = this._type;
        if (HH && "object" === typeof HH && void 0 !== HH.array) throw new Error(OB);
        return this._stream = !0, this
      }
      priority(HH) {
        return this._streamPriority = HH, this
      }
      deprecated() {
        let HH = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
        return this._deprecated = !0, this._deprecatedThrows = HH, this
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

    function CA(HH) {
      return null != HH && !0 === HH[UH]
    }

    function EA(HH) {
      return () => new zA(HH)
    }

    function XA(HH) {
      if (CA(HH)) {
        const BH = HH._type;
        throw new Error(`t.array/map/set/collection(): a t.* builder is not a valid element type \u2014 ${"string"===typeof BH?`use the type name instead: t.array("${BH}")`:'collections accept a Schema class or a primitive type name ("string", "number", \u2026)'}.`)
      }
      return HH
    }

    function GA(HH) {
      return new zA({
        quantized: eB(HH)
      })
    }
    const YA = Object.freeze({
        string: EA("string"),
        number: EA("number"),
        boolean: EA("boolean"),
        int8: EA("int8"),
        uint8: EA("uint8"),
        int16: EA("int16"),
        uint16: EA("uint16"),
        int32: EA("int32"),
        uint32: EA("uint32"),
        int64: EA("int64"),
        uint64: EA("uint64"),
        float32: EA("float32"),
        float64: EA("float64"),
        bigint64: EA("bigint64"),
        biguint64: EA("biguint64"),
        ref: HH => new zA(HH),
        array: HH => new zA({
          array: XA(HH)
        }),
        map: HH => new zA({
          map: XA(HH)
        }),
        set: HH => new zA({
          set: XA(HH)
        }),
        collection: HH => new zA({
          collection: XA(HH)
        }),
        stream: HH => {
          const BH = new zA({
            stream: XA(HH)
          });
          return BH._stream = !0, BH
        },
        quantized: GA,
        angle: HH => GA({
          min: 0,
          max: 2 * Math.PI,
          mode: "wrap",
          bits: HH?.bits ?? 16
        })
      }),
      uA = -1;

    function QA(HH) {
      return jB.register(HH), HH
    }

    function WA() {
      let HH = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : uA;
      return function(BH, LH) {
        const AH = aB.initialize(BH.constructor);
        aB.setTag(AH, LH, HH)
      }
    }

    function MA(HH, BH) {
      const LH = aB.initialize(HH.constructor);
      aB.setUnreliable(LH, BH)
    }

    function xA(HH, BH) {
      const LH = aB.initialize(HH.constructor);
      aB.setPatchOnly(LH, BH)
    }

    function vA(HH, BH) {
      const LH = aB.initialize(HH.constructor);
      aB.setFullStateOnly(LH, BH)
    }

    function PA(HH, BH) {
      return function(LH, AH) {
        const rH = LH.constructor;
        if (!HH) throw new Error(`${rH.name}: @type() reference provided for "${AH}" is undefined. Make sure you don't have any circular dependencies.`);
        HH = FB(HH, `${rH.name}.${AH}`), jB.register(rH);
        const SH = Object.getPrototypeOf(rH)[Symbol.metadata],
          hH = aB.initialize(rH);
        let tH = hH[AH];
        if (void 0 !== hH[tH]) {
          if (hH[tH].deprecated) return;
          if (void 0 !== hH[tH].type) {
            const HH = new Error(`@colyseus/schema: Duplicate '${AH}' definition on '${rH.name}'.\nCheck @type() annotation`);
            throw new Error(`${HH.message} ${HH.stack.split("\n")[4].trim()}`)
          }
        } else tH = hH[kH] ?? (SH && SH[kH]) ?? -1, tH++;
        if (BH && BH.manual) aB.addField(hH, tH, AH, HH, {
          enumerable: !0,
          configurable: !0,
          writable: !0
        });
        else {
          const {
            complexTypeKlass: BH,
            childType: LH
          } = nB(HH);
          aB.addField(hH, tH, AH, HH, UA(AH, tH, LH, BH))
        }
        hH[VH][AH] && Object.defineProperty(LH, AH, hH[VH][AH]), ("string" === typeof HH || qB(HH)) && (hH[bH] || Object.defineProperty(hH, bH, {
          value: [],
          enumerable: !1,
          configurable: !0,
          writable: !0
        }), hH[bH][tH] = "string" === typeof HH ? BB[HH] : RB(HH.quantized))
      }
    }
    const TA = {
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

    function UA(HH, BH, LH, AH) {
      let SH;
      return SH = AH ? function(HH, BH, LH, AH) {
        const SH = AH.constructor === LA,
          hH = AH.constructor === rA;
        return function(HH) {
          const AH = this[TH],
            tH = AH[BH];
          if (HH !== tH) {
            if (void 0 !== HH && null !== HH) {
              if (!SH || HH instanceof LA)
                if (!hH || HH instanceof rA) HH[WH] = LH;
                else {
                  const BH = new rA;
                  if (BH[WH] = LH, HH instanceof Map) HH.forEach(((HH, LH) => BH.set(LH, HH)));
                  else
                    for (const LH in HH) BH.set(LH, HH[LH]);
                  HH = BH
                }
              else {
                const BH = new LA;
                BH[WH] = LH, BH.push(...HH), HH = BH
              }
              const AH = this[QH],
                CH = this.constructor;
              void 0 !== tH && null !== tH && tH[QH] ? (AH.root?.remove(tH[QH]), CH[zH](AH, BH, rH.DELETE_AND_ADD)) : CH[zH](AH, BH, rH.ADD), HH[QH]?.setParent(this, AH.root, BH)
            } else void 0 !== tH && null !== tH && this[QH].delete(BH);
            AH[BH] = HH
          }
        }
      }(0, BH, LH, AH) : "string" === typeof LH ? function(HH, BH, LH) {
        const AH = TA[LH],
          SH = "string" === LH,
          hH = "boolean" === LH;
        return function(LH) {
          const tH = this[TH],
            CH = tH[BH];
          if (LH !== CH) {
            if (void 0 !== LH && null !== LH) {
              if (!hH && void 0 !== AH && typeof LH !== AH && (!SH || null !== LH)) {
                const BH = LH && LH.constructor ? ` (${LH.constructor.name})` : "";
                throw new pL(`a '${AH}' was expected, but '${JSON.stringify(LH)}'${BH} was provided in ${this.constructor.name}#${HH}`)
              }
              this.constructor[zH](this[QH], BH, rH.ADD)
            } else void 0 !== CH && null !== CH && this[QH].delete(BH);
            tH[BH] = LH
          }
        }
      }(HH, BH, LH) : qB(LH) ? function(HH, BH, LH) {
        return function(AH) {
          const SH = this[TH],
            hH = SH[BH];
          if (void 0 !== AH && null !== AH) {
            if ("number" !== typeof AH) throw new pL(`a 'number' was expected, but '${JSON.stringify(AH)}' was provided in ${this.constructor.name}#${HH}`);
            if ((AH = NB(LH, gB(LH, AH))) === hH) return;
            this.constructor[zH](this[QH], BH, rH.ADD)
          } else {
            if (AH === hH) return;
            void 0 !== hH && null !== hH && this[QH].delete(BH)
          }
          SH[BH] = AH
        }
      }(HH, BH, LH.quantized) : function(HH, BH, LH) {
        return function(AH) {
          const SH = this[TH],
            hH = SH[BH];
          if (AH !== hH) {
            if (void 0 !== AH && null !== AH) {
              yL(AH, LH, this, HH);
              const SH = this[QH],
                tH = this.constructor;
              void 0 !== hH && null !== hH && hH[QH] ? (SH.root?.remove(hH[QH]), tH[zH](SH, BH, rH.DELETE_AND_ADD)) : tH[zH](SH, BH, rH.ADD), AH[QH]?.setParent(this, SH.root, BH)
            } else void 0 !== hH && null !== hH && this[QH].delete(BH);
            SH[BH] = AH
          }
        }
      }(HH, BH, LH), {
        get: function() {
          return this[TH][BH]
        },
        set: SH,
        enumerable: !0,
        configurable: !0
      }
    }

    function VA() {
      let HH = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
      return function(BH, LH) {
        const AH = aB.initialize(BH.constructor);
        aB.setDeprecated(AH, LH), HH && (AH[VH] ??= {}, AH[VH][LH] = {
          get: function() {
            throw new Error(`${LH} is deprecated.`)
          },
          set: function(HH) {},
          enumerable: !1,
          configurable: !0
        }, Object.defineProperty(BH, LH, AH[VH][LH]))
      }
    }
    let OA = !1;

    function bA(HH, BH, LH) {
      OA || (OA = !0, console.warn("@colyseus/schema: defineTypes() is deprecated and will be removed in a future release. Use schema() with t.* field builders instead \u2192 https://docs.colyseus.io/state/schema"));
      for (let AH in BH) PA(BH[AH], LH)(HH.prototype, AH);
      return HH
    }

    function kA(HH, BH) {
      let LH = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : oA;
      if (null == HH || "object" !== typeof HH) throw new Error(`schema(): first argument must be a fields object (got ${typeof HH}).`);
      const AH = {},
        rH = {},
        SH = {},
        hH = {},
        tH = (HH, BH) => {
          if (BH.hasDefault)((HH, BH) => {
            "function" === typeof BH ? hH[HH] = BH : BH && "function" === typeof BH.clone ? hH[HH] = () => BH.clone() : SH[HH] = BH
          })(HH, BH.default);
          else if (!BH.optional) {
            const LH = function(HH) {
              if (HH && "object" === typeof HH) {
                if (void 0 !== HH.array) return () => new LA;
                if (void 0 !== HH.map) return () => new rA;
                if (void 0 !== HH.set) return () => new hA;
                if (void 0 !== HH.collection) return () => new SA;
                if (void 0 !== HH.stream) return () => new tA
              } else if ("function" === typeof HH && oA.is(HH) && (!HH.prototype.initialize || 0 === HH.prototype.initialize.length)) return () => new HH
            }(BH.type);
            LH && (hH[HH] = LH)
          }
        },
        zH = {},
        CH = [],
        EH = [],
        XH = {},
        GH = [],
        YH = [],
        uH = {},
        QH = [];
      for (const TH in HH) {
        const LH = HH[TH],
          SH = `schema(${BH?`'${BH}'`:""}): field '${TH}'`;
        if (CA(LH)) {
          const HH = LH.toDefinition();
          if (HH.noSync) {
            if (void 0 !== HH.view || HH.unreliable || HH.patchOnly || HH.fullStateOnly || HH.stream) throw new Error(`${SH} uses .noSync() together with a sync-only modifier (.view/.unreliable/.patchOnly/.fullStateOnly/.stream). A local-only field cannot be synchronized.`);
            tH(TH, HH);
            continue
          }
          if (HH.patchOnly && HH.fullStateOnly) throw new Error(`${SH} uses .patchOnly() together with .fullStateOnly(). Those are the only two delivery channels, so the field would never reach a client \u2014 use .noSync() if that is intended.`);
          const BH = FB(HH.type, SH);
          if ("function" === typeof BH && !oA.is(BH)) throw new Error(`${SH} is a synced ref to non-Schema class '${BH.name||"(anonymous)"}' \u2014 use .noSync(), or Metadata.setFields().`);
          AH[TH] = BH, void 0 !== HH.view && (zH[TH] = HH.view), HH.unreliable && CH.push(TH), HH.patchOnly && EH.push(TH), HH.deprecated && (XH[TH] = HH.deprecatedThrows), HH.fullStateOnly && GH.push(TH), HH.stream && YH.push(TH), void 0 !== HH.streamPriority && (uH[TH] = HH.streamPriority), HH.optional && QH.push(TH), tH(TH, HH)
        } else {
          if ("function" !== typeof LH) throw new Error(`${SH} must be a t.* builder, Schema subclass, or method (got ${typeof LH}).`);
          oA.is(LH) ? (AH[TH] = LH, LH.prototype.initialize && 0 !== LH.prototype.initialize.length || (hH[TH] = () => new LH)) : rH[TH] = LH
        }
      }
      const WH = HH => {
          for (const BH in SH) HH[BH] = SH[BH];
          for (const BH in hH) HH[BH] = hH[BH]()
        },
        MH = () => {
          const HH = {};
          return WH(HH), HH
        },
        xH = "function" === typeof rH.initialize,
        vH = rH.initialize ?? LH._initialize,
        PH = class extends LH {
          constructor() {
            for (var HH = arguments.length, BH = new Array(HH), LH = 0; LH < HH; LH++) BH[LH] = arguments[LH];
            const rH = BH[0];
            void 0 === rH ? (super(), WH(this)) : super(Object.assign(MH(), xH ? (HH => {
              const BH = Object.keys(AH),
                LH = {};
              for (const AH in HH) BH.includes(AH) || (LH[AH] = HH[AH]);
              return LH
            })(rH) : rH)), vH && new.target === PH && vH.apply(this, BH)
          }
        };
      BH && Object.defineProperty(PH, "name", {
        value: BH
      }), aB.setFields(PH, AH), PH._getDefaultValues = MH, PH._initialize = vH, Object.assign(PH.prototype, rH);
      for (const TH in zH) WA(zH[TH])(PH.prototype, TH);
      for (const TH of CH) MA(PH.prototype, TH);
      for (const TH of EH) xA(PH.prototype, TH);
      for (const TH in XH) VA(XH[TH])(PH.prototype, TH);
      if (GH.length > 0 || YH.length > 0) {
        const HH = PH[Symbol.metadata];
        for (const BH of GH) aB.setFullStateOnly(HH, BH);
        for (const BH of YH) aB.setStream(HH, BH);
        for (const BH in uH) aB.setStreamPriority(HH, BH, uH[BH])
      }
      if (QH.length > 0) {
        const HH = PH[Symbol.metadata];
        for (const BH of QH) HH[HH[BH]].optional = !0
      }
      return PH.extend = (HH, BH) => kA(HH, BH, PH), PH
    }

    function mA(HH) {
      const BH = HH[QH].root,
        LH = {
          ops: {},
          refs: []
        };
      let AH = BH.changes.next;
      for (; AH;) {
        const HH = AH.changeTree;
        void 0 !== HH ? (LH.refs.push(`refId#${HH.ref[tH]}`), HH.forEach(((HH, BH) => {
          if (HH < 0 || !BH) return;
          const AH = rH[BH];
          LH.ops[AH] || (LH.ops[AH] = 0), LH.ops[AH]++
        })), AH = AH.next) : AH = AH.next
      }
      return LH
    }
    class oA {
      static[CH] = cL;
      static[EH] = sL;
      [tH];
      [TH];
      static initialize(HH) {
        Object.defineProperty(HH, QH, {
          value: new IL(HH),
          enumerable: !1,
          writable: !0
        }), HH[TH] = []
      }
      static initializeForDecoder() {
        const HH = Object.create(this.prototype);
        return lL(HH), HH[TH] = [], HH
      }
      static reset(HH) {
        const BH = HH?.[QH];
        if (void 0 === BH || "function" !== typeof BH.recycle) throw new Error("@colyseus/schema: Schema.reset() requires a tracked (encoder-side) instance.");
        if (void 0 !== BH.extraParents) throw new Error(`@colyseus/schema: cannot reset a shared instance (${HH.constructor.name}) with multiple parents.`);
        HH[vH]()
      } [vH]() {
        const HH = this.constructor[Symbol.metadata],
          BH = HH?.[mH] ?? [],
          LH = this[TH];
        for (let AH = 0; AH < BH.length; AH++) {
          const HH = LH[BH[AH]];
          HH?.[vH]?.()
        }
        this[QH].recycle(), this[tH] = void 0
      }
      static is(HH) {
        const BH = HH[Symbol.metadata];
        return "object" === typeof BH && null !== BH
      }
      static isSchema(HH) {
        return "function" === typeof HH?.assign
      }
      static[zH](HH, BH) {
        let LH = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : rH.ADD;
        HH.change(BH, LH)
      }
      static[XH](HH, BH, LH) {
        const AH = HH.constructor[Symbol.metadata],
          rH = AH[BH]?.tag;
        return void 0 === LH ? void 0 === rH : void 0 === rH || (rH === uA ? LH.isChangeTreeVisible(HH[QH]) : LH.hasTagOnTree(HH[QH], rH))
      }
      constructor(HH) {
        oA.initialize(this), HH && oA.assignProps(this, HH)
      }
      assign(HH) {
        return oA.assignProps(this, HH), this
      }
      static assignProps(HH, BH) {
        const LH = HH.constructor[Symbol.metadata];
        if (LH && void 0 !== LH[kH])
          for (let rH = 0; rH <= LH[kH]; rH++) {
            const AH = LH[rH];
            if (!AH) continue;
            const SH = BH[AH.name];
            void 0 !== SH && (HH[AH.name] = SH)
          }
        const AH = Object.keys(BH);
        for (let rH = 0; rH < AH.length; rH++) {
          const SH = AH[rH];
          LH && void 0 !== LH[SH] || (HH[SH] = BH[SH])
        }
      }
      restore(HH) {
        const BH = this.constructor[Symbol.metadata];
        for (const LH in BH) {
          const AH = BH[LH],
            rH = AH.name,
            SH = AH.type,
            hH = HH[rH];
          if (void 0 !== hH && null !== hH)
            if ("string" === typeof SH) this[rH] = hH;
            else if (oA.is(SH)) {
            const HH = new SH;
            HH.restore(hH), this[rH] = HH
          } else if ("object" === typeof SH) {
            const HH = Object.keys(SH)[0],
              BH = SH[HH];
            if ("map" === HH) {
              const HH = this[rH];
              for (const LH in hH)
                if (oA.is(BH)) {
                  const AH = new BH;
                  AH.restore(hH[LH]), HH.set(LH, AH)
                } else HH.set(LH, hH[LH])
            } else if ("array" === HH) {
              const HH = this[rH];
              for (let LH = 0; LH < hH.length; LH++)
                if (oA.is(BH)) {
                  const AH = new BH;
                  AH.restore(hH[LH]), HH.push(AH)
                } else HH.push(hH[LH])
            }
          }
        }
        return this
      }
      setDirty(HH, BH) {
        const LH = this.constructor[Symbol.metadata];
        this[QH].change(LH[LH[HH]].index, BH)
      }
      pauseTracking() {
        this[QH].pause()
      }
      resumeTracking() {
        this[QH].resume()
      }
      untracked(HH) {
        return this[QH].untracked(HH)
      }
      get isTrackingPaused() {
        return this[QH].paused
      }
      clone() {
        const HH = Object.create(this.constructor.prototype);
        oA.initialize(HH);
        const BH = this.constructor[Symbol.metadata];
        for (const LH in BH) {
          const AH = BH[LH].name;
          "object" === typeof this[AH] && "function" === typeof this[AH]?.clone ? HH[AH] = this[AH].clone() : HH[AH] = this[AH]
        }
        return HH
      }
      toJSON() {
        const HH = {},
          BH = this.constructor[Symbol.metadata];
        for (const LH in BH) {
          const AH = BH[LH],
            rH = AH.name;
          AH.deprecated || null === this[rH] || "undefined" === typeof this[rH] || (HH[rH] = "function" === typeof this[rH].toJSON ? this[rH].toJSON() : this[rH])
        }
        return HH
      }
      discardAllChanges() {
        this[QH].discardAll()
      } [GH](HH) {
        return this[this.constructor[Symbol.metadata][HH].name]
      } [YH](HH) {
        this[this.constructor[Symbol.metadata][HH].name] = void 0
      }
      static debugRefIds(HH) {
        let BH = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          LH = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          AH = arguments.length > 3 ? arguments[3] : void 0,
          rH = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "";
        const SH = BH ? ` - ${JSON.stringify(HH.toJSON())}` : "",
          hH = HH[QH],
          zH = HH[tH],
          CH = AH ? AH.root.refCount[zH] : hH.refCount,
          EH = CH > 1 ? ` [\xd7${CH}]` : "";
        let XH = `${function(HH){return new Array(HH).fill(0).map(((BH,LH)=>LH===HH-1?"\u2514\u2500 ":"   ")).join("")}(LH)}${rH}${HH.constructor.name} (refId: ${zH})${EH}${SH}\n`;
        return hH.forEachChild(((rH, SH) => {
          let hH = SH;
          "number" === typeof SH && HH.$indexes && (hH = HH.$indexes.get(SH) ?? SH);
          const tH = void 0 !== HH.forEach && void 0 !== hH ? `["${hH}"]: ` : "";
          XH += this.debugRefIds(rH.ref, BH, LH + 1, AH, tH)
        })), XH
      }
      static debugRefIdEncodingOrder(HH) {
        let BH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "allChanges";
        const LH = [],
          AH = HH[QH];
        if ("changes" === BH) {
          let HH = AH.root.changes?.next;
          for (; HH;) HH.changeTree && LH.push(HH.changeTree.ref[tH]), HH = HH.next;
          return LH
        }
        const rH = "allFilteredChanges" === BH,
          SH = new Set,
          hH = HH => {
            SH.has(HH) || (SH.add(HH), HH.isFiltered === rH && LH.push(HH.ref[tH]), HH.forEachChild(((HH, BH) => hH(HH))))
          };
        return hH(AH), LH
      }
      static debugRefIdsFromDecoder(HH) {
        return this.debugRefIds(HH.state, !1, 0, HH)
      }
      static debugChanges(HH) {
        let BH = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        const LH = HH[QH],
          AH = BH ? "allChanges" : "changes";
        let SH = `${HH.constructor.name} (${HH[tH]}) -> .${AH}:\n`;
        return BH ? LH.forEachLive((HH => {
          SH += `- [${HH}]: ADD (${JSON.stringify(LH.getValue(Number(HH),!0))})\n`
        })) : LH.forEach(((HH, BH) => {
          HH < 0 || !BH || (SH += `- [${HH}]: ${rH[BH]} (${JSON.stringify(LH.getValue(Number(HH),!1))})\n`)
        })), SH
      }
    }
    SH(oA);
    const IA = {
      value: 0,
      enumerable: !1,
      writable: !0
    };
    class fA {
      types;
      nextUniqueId = 0;
      changeTrees = {};
      get refCount() {
        const HH = {};
        for (const BH in this.changeTrees) HH[BH] = this.changeTrees[BH].refCount;
        return HH
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
      enqueueFilterRefresh(HH) {
        this.types.hasFilters && (HH.flags & mL || (HH.flags |= mL, this.pendingFilterRefresh.push(HH)))
      }
      _nodePool = [];
      _nextViewId = 0;
      _freeViewIds = [];
      acquireViewId() {
        return this._freeViewIds.length > 0 ? this._freeViewIds.pop() : this._nextViewId++
      }
      releaseViewId(HH) {
        this._freeViewIds.push(HH)
      }
      activeViews = new Map;
      streamTrees = new Set;
      registerView(HH) {
        this.activeViews.set(HH.id, new WeakRef(HH))
      }
      unregisterView(HH) {
        this.activeViews.delete(HH.id);
        const BH = HH.id;
        for (const LH of this.streamTrees) LH._dropView(BH)
      }
      forEachActiveView(HH) {
        for (const [BH, LH] of this.activeViews) {
          const AH = LH.deref();
          if (void 0 !== AH) HH(AH);
          else {
            this.activeViews.delete(BH);
            for (const HH of this.streamTrees) HH._dropView(BH)
          }
        }
      }
      registerStream(HH) {
        this.streamTrees.add(HH)
      }
      unregisterStream(HH) {
        this.streamTrees.delete(HH)
      }
      constructor(HH) {
        let BH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        this.types = HH, this.nextUniqueId = BH
      }
      add(HH) {
        const BH = HH.ref;
        void 0 === BH[tH] && (IA.value = this.nextUniqueId++, Object.defineProperty(BH, tH, IA));
        const LH = BH[tH],
          AH = void 0 === this.changeTrees[LH];
        AH && (this.changeTrees[LH] = HH), HH.needsRestage && (HH.needsRestage = !1, HH.forEachLiveWithCtx(HH, LL));
        const rH = AH ? 0 : HH.refCount;
        return HH.refCount = rH + 1, rH > 0 && this.enqueueFilterRefresh(HH), AH
      }
      remove(HH) {
        const BH = HH.refCount - 1;
        if (BH <= 0) {
          if (HH.root = void 0, delete this.changeTrees[HH.ref[tH]], HH.isStreamCollection) {
            const BH = HH.ref;
            BH._unregister?.(), this.unregisterStream(BH)
          }
          this.removeFromQueue(HH), this.removeFromUnreliableQueue(HH), HH.refCount = 0, HH.needsRestage = !0, HH.forEachChild(((BH, LH) => {
            BH.removeParent(HH.ref) && (void 0 === BH.parentRef || BH.refCount > 0 ? this.remove(BH) : this.moveNextToParent(BH))
          }))
        } else HH.refCount = BH, this.enqueueFilterRefresh(HH), this.recursivelyMoveNextToParent(HH);
        return BH
      }
      recursivelyMoveNextToParent(HH) {
        this.moveNextToParent(HH), HH.forEachChild(((HH, BH) => this.recursivelyMoveNextToParent(HH)))
      }
      moveNextToParent(HH) {
        HH.changesNode && this._moveNextToParentInList(this.changes, HH, HH.changesNode, "changesNode"), HH.unreliableChangesNode && this._moveNextToParentInList(this.unreliableChanges, HH, HH.unreliableChangesNode, "unreliableChangesNode")
      }
      _moveNextToParentInList(HH, BH, LH, AH) {
        const rH = BH.parent;
        if (!rH || !rH[QH]) return;
        const SH = rH[QH][AH];
        SH && SH !== LH && (LH.position > SH.position || (LH.prev ? LH.prev.next = LH.next : HH.next = LH.next, LH.next ? LH.next.prev = LH.prev : HH.tail = LH.prev, LH.prev = HH.tail, LH.next = void 0, HH.tail.next = LH, HH.tail = LH, LH.position = HH.nextPosition++))
      }
      enqueueChangeTree(HH) {
        (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : HH.changesNode) || (HH.changesNode = this._appendToList(this.changes, HH))
      }
      enqueueUnreliable(HH) {
        (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : HH.unreliableChangesNode) || (HH.unreliableChangesNode = this._appendToList(this.unreliableChanges, HH))
      }
      _appendToList(HH, BH) {
        const LH = this._nodePool;
        let AH;
        return LH.length > 0 ? (AH = LH.pop(), AH.changeTree = BH, AH.next = void 0, AH.prev = void 0) : AH = {
          changeTree: BH,
          next: void 0,
          prev: void 0,
          position: 0
        }, HH.next ? (AH.prev = HH.tail, HH.tail.next = AH, HH.tail = AH) : (HH.nextPosition = 0, HH.next = AH, HH.tail = AH), AH.position = HH.nextPosition++, AH
      }
      releaseNode(HH) {
        HH.changeTree = void 0, HH.prev = void 0, HH.next = void 0, this._nodePool.push(HH)
      }
      removeFromQueue(HH) {
        return this._removeNode(this.changes, HH, HH.changesNode, "changesNode")
      }
      removeFromUnreliableQueue(HH) {
        return this._removeNode(this.unreliableChanges, HH, HH.unreliableChangesNode, "unreliableChangesNode")
      }
      _removeNode(HH, BH, LH, AH) {
        return !(!LH || LH.changeTree !== BH) && (LH.prev ? LH.prev.next = LH.next : HH.next = LH.next, LH.next ? LH.next.prev = LH.prev : HH.tail = LH.prev, BH[AH] = void 0, this.releaseNode(LH), !0)
      }
    }

    function lA(HH, BH) {
      if (-1 === BH || BH >= HH.length) return !1;
      const LH = HH.length - 1;
      for (let AH = BH; AH < LH; AH++) HH[AH] = HH[AH + 1];
      return HH.length = LH, !0
    }

    function KA(HH, BH, LH) {
      const AH = ~LH,
        rH = HH.changeTrees;
      for (const SH in rH) {
        const HH = rH[SH],
          LH = HH.visibleViews;
        void 0 !== LH && BH < LH.length && (LH[BH] &= AH);
        const hH = HH.subscribedViews;
        void 0 !== hH && BH < hH.length && (hH[BH] &= AH);
        const tH = HH.tagViews;
        void 0 !== tH && tH.forEach((HH => {
          BH < HH.length && (HH[BH] &= AH)
        }))
      }
    }
    const cA = new FinalizationRegistry((HH => {
      let {
        root: BH,
        id: LH,
        slot: AH,
        bit: rH
      } = HH;
      KA(BH, AH, rH), BH.activeViews.delete(LH);
      for (const SH of BH.streamTrees) SH._dropView(LH);
      BH.releaseViewId(LH)
    }));

    function eA(HH) {
      if (void 0 === HH) return "undefined";
      if (null === HH) return "null";
      const BH = typeof HH;
      return "string" === BH ? JSON.stringify(HH.length > 30 ? `${HH.slice(0,30)}\u2026` : HH) : "object" !== BH && "function" !== BH ? `${BH} ${String(HH)}` : Array.isArray(HH) ? `Array(${HH.length})` : HH.constructor?.name ?? "Object"
    }
    class qA {
      iterable;
      items;
      id = -1;
      _root;
      _slot = 0;
      _bit = 0;
      changes = new Map;
      constructor() {
        let HH = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        this.iterable = HH, HH && (this.items = [])
      }
      _bindRoot(HH) {
        void 0 === this._root && (this._root = HH, this.id = HH.acquireViewId(), this._slot = this.id >> 5, this._bit = 1 << (31 & this.id), HH.registerView(this), cA.register(this, {
          root: HH,
          id: this.id,
          slot: this._slot,
          bit: this._bit
        }, this))
      }
      dispose() {
        void 0 !== this._root && (this._root.unregisterView(this), KA(this._root, this._slot, this._bit), this._root.releaseViewId(this.id), cA.unregister(this), this._root = void 0, this.id = -1)
      }
      isVisible(HH) {
        const BH = HH.visibleViews,
          LH = this._slot;
        return void 0 !== BH && LH < BH.length && 0 !== (BH[LH] & this._bit)
      }
      markVisible(HH) {
        const BH = this._slot;
        let LH = HH.visibleViews;
        for (void 0 === LH && (LH = HH.visibleViews = []); LH.length <= BH;) LH.push(0);
        LH[BH] |= this._bit
      }
      unmarkVisible(HH) {
        const BH = HH.visibleViews;
        if (void 0 === BH) return;
        const LH = this._slot;
        LH < BH.length && (BH[LH] &= ~this._bit)
      }
      isSubscribed(HH) {
        const BH = HH.subscribedViews,
          LH = this._slot;
        return void 0 !== BH && LH < BH.length && 0 !== (BH[LH] & this._bit)
      }
      _setSubscribed(HH) {
        const BH = this._slot;
        let LH = HH.subscribedViews;
        for (void 0 === LH && (LH = HH.subscribedViews = []); LH.length <= BH;) LH.push(0);
        LH[BH] |= this._bit
      }
      _clearSubscribed(HH) {
        const BH = HH.subscribedViews;
        if (void 0 === BH) return;
        const LH = this._slot;
        LH < BH.length && (BH[LH] &= ~this._bit)
      }
      hasTagOnTree(HH, BH) {
        const LH = HH.tagViews;
        if (void 0 === LH) return !1;
        const AH = this._slot,
          rH = this._bit;
        for (let SH = BH; 0 !== SH; SH &= SH - 1) {
          const HH = LH.get(SH & -SH);
          if (void 0 !== HH && AH < HH.length && 0 !== (HH[AH] & rH)) return !0
        }
        return !1
      }
      addTag(HH, BH) {
        if (BH === uA) return;
        let LH = HH.tagViews;
        void 0 === LH && (LH = HH.tagViews = new Map);
        const AH = this._slot,
          rH = this._bit;
        for (let SH = BH; SH > 0; SH &= SH - 1) {
          const HH = SH & -SH;
          let BH = LH.get(HH);
          for (void 0 === BH && (BH = [], LH.set(HH, BH)); BH.length <= AH;) BH.push(0);
          BH[AH] |= rH
        }
      }
      removeTag(HH, BH) {
        if (BH === uA) return;
        const LH = HH.tagViews;
        if (void 0 === LH) return;
        const AH = this._slot,
          rH = ~this._bit;
        for (let SH = BH; SH > 0; SH &= SH - 1) {
          const HH = LH.get(SH & -SH);
          void 0 !== HH && AH < HH.length && (HH[AH] &= rH)
        }
      }
      removeAllTagsOnTree(HH) {
        const BH = HH.tagViews;
        if (void 0 === BH) return;
        const LH = this._slot,
          AH = ~this._bit;
        BH.forEach((HH => {
          LH < HH.length && (HH[LH] &= AH)
        }))
      }
      add(HH) {
        let BH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : uA,
          LH = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        return this._add(HH, BH, LH, !1)
      }
      _addImmediate(HH) {
        let BH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : uA;
        this._add(HH, BH, !0, !0)
      }
      _add(HH, BH, LH, AH) {
        const SH = HH?.[QH];
        if (!SH) return console.warn(`StateView#add(): expected a Schema instance or collection, received ${eA(HH)}`), !1;
        const hH = SH.parent;
        if (!hH && 0 !== HH[tH]) throw new Error(`Cannot add a detached instance to the StateView. Make sure to assign the "${SH.ref.constructor.name}" instance to the state before calling view.add()`);
        void 0 === this._root && void 0 !== SH.root && this._bindRoot(SH.root);
        const zH = hH?.[QH];
        if (!AH && zH?.isStreamCollection) return lB(hH, this.id, SH.parentIndex), !0;
        const CH = HH.constructor[Symbol.metadata],
          EH = this.isVisible(SH);
        if (!this.iterable || !LH || EH && -1 !== this.items.indexOf(HH) || this.items.push(HH), this.markVisible(SH), LH && hH && this.addParentOf(SH, BH), !AH && SH.isStreamCollection) return !0;
        if (BH === uA && SH.isNew) return this._markSubtreeVisible(SH, BH), !1;
        let XH = this.changes.get(HH[tH]);
        void 0 === XH && (XH = new Map, this.changes.set(HH[tH], XH));
        let GH = !1;
        const YH = SH.encDescriptor.tags;
        if (SH.forEachChild(((HH, LH) => {
            const AH = YH[LH];
            if (void 0 !== AH) {
              if (!(AH === uA || BH !== uA && 0 !== (AH & BH))) return
            }
            this.add(HH.ref, BH, !1) && (GH = !0)
          })), BH !== uA) {
          this.addTag(SH, BH);
          const HH = CH?.[IH];
          if (void 0 !== HH)
            for (let LH = BH; LH > 0; LH &= LH - 1) HH[LH & -LH]?.forEach((HH => {
              SH.getChange(HH) !== rH.DELETE && XH.set(HH, rH.ADD)
            }))
        }
        if ((BH === uA || !EH) && (!SH.isNew || GH))
          if (SH.isArray && "string" !== typeof SH.refTarget[WH]) SH.refTarget.items.length > 0 && (XH.set(-1, rH.ADD), GH = !0);
          else {
            const HH = SH.encDescriptor.tags;
            SH.forEachLive((LH => {
              const AH = HH[LH];
              (void 0 === AH || AH === uA || BH !== uA && 0 !== (AH & BH)) && (XH.set(LH, rH.ADD), GH = !0)
            }))
          } return GH
      }
      _markSubtreeVisible(HH, BH) {
        const LH = HH.encDescriptor.tags;
        HH.forEachChild(((HH, AH) => {
          const rH = LH[AH];
          if (void 0 !== rH) {
            if (!(rH === uA || BH !== uA && 0 !== (rH & BH))) return
          }
          HH.isNew ? (this.markVisible(HH), this._markSubtreeVisible(HH, BH)) : this._add(HH.ref, BH, !1, !1)
        }))
      }
      addParentOf(HH, BH) {
        const LH = HH.parent[QH],
          AH = HH.parentIndex;
        this.isVisible(LH) || this.markVisible(LH);
        const SH = LH.parent?.[QH];
        if (SH && this.addParentOf(LH, BH), LH.hasFilteredFields && LH.getChange(AH) !== rH.DELETE) {
          let SH = this.changes.get(LH.ref[tH]);
          void 0 === SH && (SH = new Map, this.changes.set(LH.ref[tH], SH));
          const hH = LH.encDescriptor.tags[AH];
          void 0 !== hH && hH !== uA && 0 !== (hH & BH) && this.addTag(LH, BH), SH.set(LH.isArray ? HH : AH, rH.ADD)
        }
      }
      _touchAncestorsOf(HH) {
        let BH = HH.parent?.[QH];
        if (void 0 === BH) return;
        const LH = [];
        for (; void 0 !== BH;) {
          if (BH.hasFilteredFields) {
            const HH = BH.ref[tH];
            if (this.changes.has(HH)) break;
            LH.push(BH)
          }
          BH = BH.parent?.[QH]
        }
        for (let AH = LH.length - 1; AH >= 0; AH--) this.changes.set(LH[AH].ref[tH], new Map)
      }
      remove(HH) {
        let BH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : uA,
          LH = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        const AH = HH?.[QH];
        if (!AH) return console.warn(`StateView#remove(): expected a Schema instance or collection, received ${eA(HH)}`), this;
        const SH = AH.parent?.[QH];
        if (SH?.isStreamCollection) return this.unmarkVisible(AH), this.iterable && !LH && lA(this.items, this.items.indexOf(HH)),
          function(HH, BH, LH, AH, SH) {
            const hH = HH._stream;
            if (void 0 === hH) return !1;
            const tH = hH.pendingByView.get(BH);
            if (tH?.has(AH)) return tH.delete(AH), !1;
            const zH = hH.sentByView.get(BH);
            if (zH?.has(AH)) {
              zH.delete(AH);
              let HH = SH.get(LH);
              return void 0 === HH && (HH = new Map, SH.set(LH, HH)), HH.set(AH, rH.DELETE), !0
            }
          }(AH.parent, this.id, AH.parent[tH], AH.parentIndex, this.changes), this._recursiveDeleteVisibleChangeTree(AH), this;
        if (AH.isStreamCollection) {
          this.unmarkVisible(AH), this.iterable && !LH && lA(this.items, this.items.indexOf(HH));
          const BH = AH.ref,
            SH = BH._stream;
          if (void 0 !== SH) {
            SH.pendingByView.get(this.id)?.clear();
            const HH = SH.sentByView.get(this.id);
            if (void 0 !== HH && HH.size > 0) {
              const LH = BH[tH];
              let AH = this.changes.get(LH);
              void 0 === AH && (AH = new Map, this.changes.set(LH, AH));
              for (const BH of HH) AH.set(BH, rH.DELETE);
              HH.clear()
            }
          }
          return this
        }
        this.unmarkVisible(AH), this.iterable && !LH && lA(this.items, this.items.indexOf(HH));
        const hH = AH.ref,
          zH = hH.constructor[Symbol.metadata],
          CH = hH[tH];
        this._touchAncestorsOf(AH);
        let EH = this.changes.get(CH);
        if (void 0 === EH && (EH = new Map, this.changes.set(CH, EH)), BH === uA) {
          const HH = AH.parent;
          if (HH && !aB.isValidInstance(HH) && AH.isFiltered) {
            const BH = SH.isArray ? AH : AH.parentIndex,
              LH = HH[tH];
            let hH = this.changes.get(LH);
            void 0 === hH ? (hH = new Map, this.changes.set(LH, hH)) : hH.get(BH) === rH.ADD && this._dropPendingEntries(AH), hH.set(BH, rH.DELETE), this._recursiveDeleteVisibleChangeTree(AH)
          } else zH?.[oH]?.forEach((HH => this._removeViewField(AH, EH, HH)))
        } else {
          const HH = zH?.[IH];
          if (void 0 !== HH)
            for (let LH = BH; LH > 0; LH &= LH - 1) HH[LH & -LH]?.forEach((HH => this._removeViewField(AH, EH, HH)))
        }
        return void 0 === BH ? this.removeAllTagsOnTree(AH) : this.removeTag(AH, BH), this
      }
      has(HH) {
        return this.isVisible(HH[QH])
      }
      hasTag(HH) {
        let BH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : uA;
        return this.hasTagOnTree(HH[QH], BH)
      }
      subscribe(HH, BH) {
        const LH = HH?.[QH];
        if (!LH) return console.warn(`StateView#subscribe(): expected a Schema collection, received ${eA(HH)}`), this;
        if (void 0 === this._root && void 0 !== LH.root && this._bindRoot(LH.root), void 0 !== BH)
          if (LH.isStreamCollection) {
            const LH = kB(HH);
            null === BH ? LH.priorityByView?.delete(this.id) : (LH.priorityByView ??= new Map).set(this.id, BH)
          } else {
            const BH = HH?.constructor?.name ?? "collection",
              AH = LH.parent;
            if (void 0 === AH) console.warn(`StateView#subscribe(): \`priority\` ignored \u2014 this ${BH} is not attached to a state yet, so it cannot be identified as a stream. Subscribe after assigning it to the state.`);
            else {
              const HH = AH?.constructor?.[Symbol.metadata]?.[LH.parentIndex]?.name,
                rH = HH ? `${AH.constructor.name}#${HH}` : BH;
              console.warn(`StateView#subscribe(): \`priority\` ignored \u2014 ${rH} is a ${BH}, not a streaming collection. Declare the field with .stream() (e.g. t.map(X).stream()) or use t.stream(X) to enable priority batching.`)
            }
          } if (this.isSubscribed(LH)) return this;
        const AH = void 0 !== LH.parent && !this.isVisible(LH);
        if (AH ? (this.addParentOf(LH, uA), this._add(HH, uA, !1, !1)) : this.markVisible(LH), this._setSubscribed(LH), LH.isStreamCollection) {
          const BH = HH;
          LH.forEachChild(((HH, LH) => {
            lB(BH, this.id, LH)
          }))
        } else AH || LH.forEachChild((HH => {
          this.markVisible(HH)
        }));
        return this
      }
      unsubscribe(HH) {
        const BH = HH?.[QH];
        if (!BH) return console.warn(`StateView#unsubscribe(): expected a Schema collection, received ${eA(HH)}`), this;
        if (!this.isSubscribed(BH)) return this;
        this._clearSubscribed(BH);
        const LH = BH.ref[tH];
        if (BH.isStreamCollection) {
          const BH = HH._stream;
          if (void 0 !== BH) {
            BH.pendingByView.get(this.id)?.clear();
            const HH = BH.sentByView.get(this.id);
            if (void 0 !== HH && HH.size > 0) {
              let BH = this.changes.get(LH);
              void 0 === BH && (BH = new Map, this.changes.set(LH, BH));
              for (const LH of HH) BH.set(LH, rH.DELETE);
              HH.clear()
            }
          }
        } else {
          const HH = BH.isArray;
          let AH = this.changes.get(LH);
          BH.forEachChild(((BH, SH) => {
            void 0 === AH && (AH = new Map, this.changes.set(LH, AH)), AH.set(HH ? BH : SH, rH.DELETE), this.unmarkVisible(BH)
          }))
        }
        return this.unmarkVisible(BH), this
      }
      clear() {
        if (!this.iterable) throw new Error("StateView#clear() is only available for iterable StateView's. Use StateView(iterable: true) constructor.");
        for (let HH = 0, BH = this.items.length; HH < BH; HH++) this.remove(this.items[HH], uA, !0);
        this.items.length = 0
      }
      isChangeTreeVisible(HH) {
        let BH = this.isVisible(HH);
        if (!BH && HH.isVisibilitySharedWithParent)
          if (this.isVisible(HH.parent[QH])) this.markVisible(HH), BH = !0;
          else
            for (let LH = HH.extraParents; void 0 !== LH; LH = LH.next) {
              const AH = LH.ref[QH];
              if (AH.isFiltered && this.isVisible(AH)) {
                this.markVisible(HH), BH = !0;
                break
              }
            }
        return BH
      }
      _recursiveDeleteVisibleChangeTree(HH) {
        HH.forEachChild((HH => {
          this.unmarkVisible(HH), this._recursiveDeleteVisibleChangeTree(HH)
        }))
      }
      _dropPendingEntries(HH) {
        this.changes.delete(HH.ref[tH]), HH.forEachChild((HH => this._dropPendingEntries(HH)))
      }
      _removeViewField(HH, BH, LH) {
        const AH = BH.get(LH) === rH.ADD;
        BH.set(LH, rH.DELETE);
        const SH = HH.ref[HH.encDescriptor.names[LH]],
          hH = SH?.[QH];
        hH && (this.unmarkVisible(hH), this._recursiveDeleteVisibleChangeTree(hH), AH && this._dropPendingEntries(hH))
      }
    }

    function gA(HH) {
      HH.structSwitchEmitted || (HH.shouldEmitSwitch && (HH.buffer[HH.it.offset++] = 255, BB.number(HH.buffer, HH.ref[tH], HH.it)), HH.structSwitchEmitted = !0)
    }

    function NA(HH, BH) {
      nA(HH, BH, rH.ADD)
    }

    function RA(HH, BH) {
      if (BH._fullSyncGen === HH.gen) return;
      BH._fullSyncGen = HH.gen;
      if (!HH.hasView || HH.view.isChangeTreeVisible(BH)) {
        const LH = BH.encDescriptor;
        HH.changeTree = BH, HH.ref = BH.ref, HH.encoder = LH.encoder, HH.filter = LH.filter, HH.metadata = LH.metadata, HH.treeIsFiltered = BH.isFiltered, HH.isSchema = LH.isSchema, HH.filterBitmask = LH.filterBitmask, HH.tags = LH.tags, HH.structSwitchEmitted = !1, HH.shouldEmitSwitch = HH.hasView || HH.it.offset > HH.initialOffset || BH !== HH.rootChangeTree, BH.isArray && BH.collDirty.size > 0 && (BH.flags |= 512), rL(BH, HH, NA)
      }
      ML(BH, HH, jA)
    }

    function jA(HH, BH, LH) {
      RA(HH, BH)
    }

    function nA(HH, BH, LH) {
      if (BH < 0) {
        if (HH.treeIsFiltered !== HH.emitFiltered) return;
        return gA(HH), void(HH.buffer[HH.it.offset++] = 255 & Math.abs(BH))
      }
      if ((HH.isSchema ? HH.treeIsFiltered || (BH < 32 ? 0 !== (HH.filterBitmask & 1 << BH) : void 0 !== HH.tags[BH]) : HH.treeIsFiltered) !== HH.emitFiltered) return;
      const AH = HH.isEncodeAll ? rH.ADD : LH;
      void 0 !== AH && (void 0 === HH.filter || HH.filter(HH.ref, BH, HH.view)) && (gA(HH), HH.encoder(HH.self, HH.buffer, HH.changeTree, BH, AH, HH.it, HH.isEncodeAll, HH.hasView, HH.metadata))
    }

    function FA(HH, BH) {
      const LH = new Uint8Array(HH.length + BH.length);
      return LH.set(HH, 0), LH.set(BH, HH.length), LH
    }
    class DA {
      static BUFFER_SIZE = 16384;
      sharedBuffer = new Uint8Array(DA.BUFFER_SIZE);
      context;
      state;
      root;
      constructor(HH, BH) {
        this.context = jB.cache(HH.constructor), this.root = BH ?? new fA(this.context), this.setState(HH)
      }
      setState(HH) {
        this.state = HH, this.state[QH].setRoot(this.root)
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
        let HH = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
            offset: 0
          },
          BH = arguments.length > 1 ? arguments[1] : void 0,
          LH = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : this.sharedBuffer,
          AH = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : HH.offset;
        return this._encodeChannel(HH, BH, LH, AH, !1)
      }
      encodeUnreliable() {
        let HH = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
            offset: 0
          },
          BH = arguments.length > 1 ? arguments[1] : void 0,
          LH = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : this.sharedBuffer,
          AH = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : HH.offset;
        return this._encodeChannel(HH, BH, LH, AH, !0)
      }
      _encodeChannel(HH, BH, LH, AH, rH) {
        this.root.pendingFilterRefresh.length > 0 && hL(this.root);
        const SH = void 0 !== BH,
          hH = this.state[QH],
          tH = this._encodeCtx;
        tH.self = this, tH.buffer = LH, tH.it = HH, tH.view = BH, tH.isEncodeAll = !1, tH.hasView = SH, tH.emitFiltered = SH;
        let zH = rH ? this.root.unreliableChanges : this.root.changes;
        for (; zH = zH.next;) {
          const LH = zH.changeTree;
          if (SH && !BH.isChangeTreeVisible(LH)) continue;
          const CH = rH ? LH.unreliableRecorder : LH;
          if (!CH || !CH.has()) continue;
          const EH = LH.encDescriptor;
          tH.changeTree = LH, tH.ref = LH.ref, tH.encoder = EH.encoder, tH.filter = EH.filter, tH.metadata = EH.metadata, tH.treeIsFiltered = LH.isFiltered, tH.isSchema = EH.isSchema, tH.filterBitmask = EH.filterBitmask, tH.tags = EH.tags, tH.structSwitchEmitted = !1, tH.isRootTree = LH === hH, tH.shouldEmitSwitch = SH || HH.offset > AH || !tH.isRootTree, CH.forEachWithCtx(tH, nA)
        }
        return rH || SH || !this._isStreamBroadcastMode || this._emitStreamBroadcast(LH, HH), HH.offset > LH.byteLength ? (LH = this._resizeBuffer(LH, HH.offset), HH.offset = AH, this._encodeChannel(HH, BH, LH, AH, rH)) : LH.subarray(0, HH.offset)
      }
      encodeFullSync(HH, BH, LH, AH) {
        let rH = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : HH.offset;
        this.root.pendingFilterRefresh.length > 0 && hL(this.root);
        const SH = void 0 !== AH,
          hH = this.state[QH],
          tH = this._encodeCtx;
        return tH.self = this, tH.buffer = BH, tH.it = HH, tH.view = AH, tH.isEncodeAll = !0, tH.hasView = SH, tH.emitFiltered = LH, tH.gen = ++this._fullSyncGen, tH.initialOffset = rH, tH.rootChangeTree = hH, RA(tH, hH), HH.offset > BH.byteLength ? (BH = this._resizeBuffer(BH, HH.offset), HH.offset = rH, this.encodeFullSync(HH, BH, LH, AH, rH)) : BH.subarray(0, HH.offset)
      }
      _resizeBuffer(HH, BH) {
        const LH = Math.ceil(BH / DA.BUFFER_SIZE) * DA.BUFFER_SIZE,
          AH = new Uint8Array(LH);
        return AH.set(HH), HH === this.sharedBuffer && (this.sharedBuffer = AH), AH
      }
      encodeAll() {
        let HH = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
            offset: 0
          },
          BH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.sharedBuffer;
        return this.encodeFullSync(HH, BH, !1)
      }
      encodeAllView(HH, BH, LH) {
        let AH = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : this.sharedBuffer;
        const rH = LH.offset;
        return AH = this.encodeFullSync(LH, AH, !0, HH, rH), FA(AH.subarray(0, BH), AH.subarray(rH, LH.offset))
      }
      ensureCapacity(HH, BH) {
        if (BH + DA.BUFFER_SIZE <= HH.byteLength) return HH;
        const LH = Math.ceil((BH + DA.BUFFER_SIZE) / DA.BUFFER_SIZE) * DA.BUFFER_SIZE,
          AH = new Uint8Array(LH);
        return AH.set(HH.subarray(0, BH)), HH === this.sharedBuffer && (this.sharedBuffer = AH), AH
      }
      encodeView(HH, BH, LH) {
        let AH = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : this.sharedBuffer,
          SH = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4];
        const hH = LH.offset;
        this._emitStreamPriority(HH);
        for (const zH of HH.changes.keys()) {
          const BH = HH.changes.get(zH),
            SH = this.root.changeTrees[zH];
          if (void 0 === SH) {
            HH.changes.delete(zH);
            continue
          }
          if (0 === BH.size) continue;
          const hH = SH.encDescriptor,
            CH = hH.encoder,
            EH = hH.metadata,
            XH = SH.ref,
            YH = SH.refTarget;
          AH = this.ensureCapacity(AH, LH.offset), AH[LH.offset++] = 255, BB.number(AH, XH[tH], LH);
          for (const [zH, uH] of BH) {
            let BH;
            if (-1 === zH) {
              const HH = YH.tmpItems,
                BH = YH.deletedIndexes;
              for (let hH = 0; hH < HH.length; hH++) void 0 !== HH[hH] && !0 !== BH[hH] && CH(this, AH, SH, hH, rH.ADD, LH, !1, !0, EH);
              continue
            }
            if ("number" === typeof zH) BH = zH;
            else {
              const LH = zH.indexInParent(XH);
              if (void 0 === LH) continue;
              if (BH = LH, uH === rH.ADD && SH.getChange(BH) === rH.DELETE) {
                HH.changes.delete(zH.ref[tH]);
                continue
              }
            }
            CH(this, AH, SH, BH, void 0 !== YH[GH](BH) && uH || rH.DELETE, LH, !1, !0, EH)
          }
        }
        return HH.changes.clear(), AH = this.encode(LH, HH, AH), SH ? FA(AH.subarray(0, BH), AH.subarray(hH, LH.offset)) : AH.subarray(hH, LH.offset)
      }
      encodeUnreliableView(HH, BH, LH) {
        let AH = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : this.sharedBuffer;
        const rH = LH.offset;
        return AH = this.encodeUnreliable(LH, HH, AH, rH), FA(AH.subarray(0, BH), AH.subarray(rH, LH.offset))
      }
      _emitStreamBroadcast(HH, BH) {
        const LH = this.root.streamTrees;
        for (const AH of LH) {
          const LH = AH,
            SH = LH[QH],
            hH = LH[tH];
          if (void 0 === hH) continue;
          const zH = LH._stream,
            CH = zH.broadcastDeletes,
            EH = zH.broadcastPending,
            XH = zH.sentBroadcast,
            YH = CH.size > 0,
            uH = EH.size > 0,
            WH = SH.encDescriptor,
            MH = WH.encoder,
            xH = WH.metadata;
          if (YH || uH) {
            if (HH[BH.offset++] = 255, BB.number(HH, hH, BH), YH) {
              for (const LH of CH) MH(this, HH, SH, LH, rH.DELETE, BH, !1, !1, xH);
              CH.clear()
            }
            const AH = zH.maxPerTick,
              uH = [];
            let WH = 0;
            const vH = [];
            for (const hH of EH) {
              if (WH >= AH) break;
              const tH = LH[GH](hH);
              void 0 !== tH ? (MH(this, HH, SH, hH, rH.ADD, BH, !1, !1, xH), XH.add(hH), uH.push(tH), vH.push(hH), WH++) : vH.push(hH)
            }
            for (const HH of vH) EH.delete(HH);
            for (const LH of uH) {
              const AH = LH[QH];
              if (void 0 === AH) continue;
              const SH = LH[tH];
              if (void 0 === SH) continue;
              HH[BH.offset++] = 255, BB.number(HH, SH, BH);
              const hH = AH.encDescriptor,
                zH = hH.encoder,
                CH = hH.metadata;
              AH.forEachLive((LH => {
                aB.hasUnreliableAtIndex(CH, LH) || zH(this, HH, AH, LH, rH.ADD, BH, !1, !1, CH)
              }))
            }
          }
          for (const AH of XH) {
            const rH = LH[GH](AH);
            if (void 0 === rH) continue;
            const SH = rH[QH];
            if (void 0 === SH || !SH.has()) continue;
            const hH = rH[tH];
            if (void 0 === hH) continue;
            HH[BH.offset++] = 255, BB.number(HH, hH, BH);
            const zH = SH.encDescriptor,
              CH = zH.encoder,
              EH = zH.metadata;
            SH.forEach(((LH, AH) => {
              LH < 0 || aB.hasUnreliableAtIndex(EH, LH) || CH(this, HH, SH, LH, AH, BH, !1, !1, EH)
            }))
          }
        }
      }
      _emitStreamPriority(HH) {
        const BH = this.root.streamTrees;
        if (0 === BH.size) return;
        const LH = HH.id;
        for (const AH of BH) {
          const BH = AH,
            SH = BH._stream,
            hH = SH.pendingByView.get(LH);
          if (void 0 === hH || 0 === hH.size) continue;
          const zH = SH.priorityByView?.get(LH),
            CH = void 0 !== zH,
            EH = SH.priority,
            XH = SH.maxPerTick,
            YH = [],
            uH = [];
          if (CH || void 0 !== EH) {
            const LH = [],
              AH = [];
            let rH = 0;
            for (const SH of hH) {
              const hH = BH[GH](SH);
              if (void 0 === hH) {
                uH.push(SH);
                continue
              }
              const tH = CH ? zH(hH) : EH(HH, hH);
              if (rH < XH) {
                let HH = rH++;
                for (; HH > 0 && AH[HH - 1] < tH;) AH[HH] = AH[HH - 1], LH[HH] = LH[HH - 1], HH--;
                AH[HH] = tH, LH[HH] = SH
              } else if (tH > AH[XH - 1]) {
                let HH = XH - 1;
                for (; HH > 0 && AH[HH - 1] < tH;) AH[HH] = AH[HH - 1], LH[HH] = LH[HH - 1], HH--;
                AH[HH] = tH, LH[HH] = SH
              }
            }
            for (let HH = 0; HH < rH; HH++) YH.push(LH[HH])
          } else
            for (const HH of hH) {
              if (YH.length >= XH) break;
              YH.push(HH)
            }
          for (const HH of uH) hH.delete(HH);
          const WH = YH.length;
          let MH = SH.sentByView.get(LH);
          void 0 === MH && (MH = new Set, SH.sentByView.set(LH, MH));
          for (let LH = 0; LH < WH; LH++) {
            const AH = YH[LH],
              SH = BH[GH](AH);
            if (void 0 === SH) {
              hH.delete(AH);
              continue
            }
            HH._addImmediate(SH);
            const zH = SH[QH];
            if (void 0 !== zH) {
              const BH = SH[tH];
              let LH = HH.changes.get(BH);
              void 0 === LH && (LH = new Map, HH.changes.set(BH, LH));
              const AH = zH.metadata;
              zH.forEachLive((HH => {
                aB.hasUnreliableAtIndex(AH, HH) || LH.set(HH, rH.ADD)
              }))
            }
            hH.delete(AH), MH.add(AH)
          }
        }
      }
      discardChanges() {
        const HH = this.root.changes;
        let BH = HH.next;
        const LH = this.root;
        for (; BH;) {
          const HH = BH.next;
          BH.changeTree.endEncode(), LH.releaseNode(BH), BH = HH
        }
        HH.next = void 0, HH.tail = void 0
      }
      discardUnreliableChanges() {
        const HH = this.root.unreliableChanges;
        let BH = HH.next;
        const LH = this.root;
        for (; BH;) {
          const HH = BH.next;
          BH.changeTree.endEncodeUnreliable(), LH.releaseNode(BH), BH = HH
        }
        HH.next = void 0, HH.tail = void 0
      }
      tryEncodeTypeId(HH, BH, LH, AH) {
        const rH = this.context.getTypeId(BH),
          SH = this.context.getTypeId(LH);
        void 0 !== SH ? rH !== SH && (HH[AH.offset++] = 213, BB.number(HH, SH, AH)) : console.warn(`@colyseus/schema WARNING: Class "${LH.name}" is not registered on TypeRegistry - Please either tag the class with @entity or define a @type() field.`)
      }
      get hasChanges() {
        return void 0 !== this.root.changes.next || this._hasStreamBacklog()
      }
      get _isStreamBroadcastMode() {
        return 0 === this.root.activeViews.size && this.root.streamTrees.size > 0
      }
      _hasStreamBacklog() {
        const HH = this.root;
        if (0 === HH.streamTrees.size) return !1;
        const BH = 0 === HH.activeViews.size;
        for (const LH of HH.streamTrees)
          if (BH ? fB(LH) : IB(LH, HH)) return !0;
        return !1
      }
      get hasUnreliableChanges() {
        return void 0 !== this.root.unreliableChanges.next
      }
    }
    class wA extends Error {
      constructor(HH) {
        super(HH), this.name = "DecodingWarning"
      }
    }
    const ZA = {
      value: 0,
      enumerable: !1,
      writable: !0
    };
    class dA {
      refs = new Map;
      refCount = {};
      deletedRefs = new Set;
      callbacks = {};
      nextUniqueId = 0;
      getNextUniqueId() {
        return this.nextUniqueId++
      }
      addRef(HH, BH) {
        let LH = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        this.refs.set(HH, BH), void 0 === BH[tH] ? (ZA.value = HH, Object.defineProperty(BH, tH, ZA)) : BH[tH] !== HH && (BH[tH] = HH), LH && (this.refCount[HH] = (this.refCount[HH] || 0) + 1), this.deletedRefs.has(HH) && this.deletedRefs.delete(HH)
      }
      removeRef(HH) {
        const BH = this.refCount[HH];
        if (void 0 !== BH)
          if (0 !== BH)(this.refCount[HH] = BH - 1) <= 0 && this.deletedRefs.add(HH);
          else try {
            const BH = this.refs.get(HH);
            throw new wA(`trying to remove refId '${HH}' with 0 refCount (${BH.constructor.name}: ${JSON.stringify(BH)})`)
          } catch (Sr) {
            console.warn(Sr)
          } else try {
            throw new wA("trying to remove refId that doesn't exist: " + HH)
          } catch (Sr) {
            console.warn(Sr)
          }
      }
      clearRefs() {
        this.refs.clear(), this.deletedRefs.clear(), this.callbacks = {}, this.refCount = {}
      }
      garbageCollectDeletedRefs() {
        this.deletedRefs.forEach((HH => {
          if (this.refCount[HH] > 0) return;
          const BH = this.refs.get(HH),
            LH = BH.constructor[Symbol.metadata];
          if (null != LH)
            for (const AH in LH) {
              const HH = BH[LH[AH].name];
              if ("object" === typeof HH && HH) {
                const BH = HH[tH];
                void 0 === BH || this.deletedRefs.has(BH) || this.removeRef(BH)
              }
            } else "function" === typeof BH[WH] && Array.from(BH.values()).forEach((HH => {
              const BH = HH[tH];
              void 0 === BH || this.deletedRefs.has(BH) || this.removeRef(BH)
            }));
          this.refs.delete(HH), delete this.refCount[HH], delete this.callbacks[HH]
        })), this.deletedRefs.clear()
      }
      addCallback(HH, BH, LH) {
        if (void 0 === HH) {
          const HH = "number" === typeof BH ? rH[BH] : BH;
          throw new Error(`Can't addCallback on '${HH}' (refId is undefined)`)
        }
        return this.callbacks[HH] || (this.callbacks[HH] = {}), this.callbacks[HH][BH] || (this.callbacks[HH][BH] = []), this.callbacks[HH][BH].push(LH), () => this.removeCallback(HH, BH, LH)
      }
      removeCallback(HH, BH, LH) {
        const AH = this.callbacks?.[HH]?.[BH]?.indexOf(LH);
        void 0 !== AH && -1 !== AH && lA(this.callbacks[HH][BH], AH)
      }
    }
    class aA {
      context;
      state;
      root;
      currentRefId = 0;
      zN;
      resyncVisited = null;
      resyncDamaged = !1;
      constructor(HH, BH) {
        this.setState(HH), this.context = BH || new jB(HH.constructor)
      }
      setState(HH) {
        this.state = HH, this.root = new dA, this.root.addRef(0, HH)
      }
      decode(HH) {
        let BH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
            offset: 0
          },
          LH = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : this.state;
        const rH = void 0 !== this.zN ? [] : null,
          SH = this.root,
          hH = HH.byteLength;
        let tH = LH.constructor[EH];
        for (this.currentRefId = 0; BH.offset < hH;) {
          if (HH[BH.offset] == AH) {
            BH.offset++, LH[PH]?.();
            const AH = vB.number(HH, BH),
              rH = SH.refs.get(AH);
            rH ? (LH = rH, tH = LH.constructor[EH], this.currentRefId = AH) : (console.error(`"refId" not found: ${AH}`, {
              previousRef: LH,
              previousRefId: this.currentRefId
            }), console.warn("Please report this issue to the developers."), this.skipCurrentStructure(HH, BH, hH));
            continue
          } - 1 !== tH(this, HH, BH, LH, rH) || (console.warn("@colyseus/schema: definition mismatch"), this.skipCurrentStructure(HH, BH, hH))
        }
        return LH[PH]?.(), null !== this.resyncVisited && function(HH, BH) {
          HH.resyncDamaged ? console.warn("@colyseus/schema: resync sweep skipped \u2014 parts of the payload could not be decoded. Stale entries may persist until the next resync.") : jL(HH, HH.state, new Set, BH)
        }(this, rH), null !== rH && this.zN?.(rH), SH.garbageCollectDeletedRefs(), rH
      }
      decodeResync(HH) {
        let BH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
          offset: 0
        };
        this.resyncVisited = new Map, this.resyncDamaged = !1;
        try {
          return this.decode(HH, BH)
        } finally {
          this.resyncVisited = null
        }
      }
      skipCurrentStructure(HH, BH, LH) {
        null !== this.resyncVisited && (this.resyncDamaged = !0);
        const rH = {
          offset: BH.offset
        };
        for (; BH.offset < LH && (HH[BH.offset] !== AH || (rH.offset = BH.offset + 1, !this.root.refs.has(vB.number(HH, rH))));) BH.offset++
      }
      getInstanceType(HH, BH, LH) {
        let AH;
        if (213 === HH[BH.offset]) {
          BH.offset++;
          const LH = vB.number(HH, BH);
          AH = this.context.get(LH)
        }
        return AH || LH
      }
      createInstanceOfType(HH) {
        return HH.initializeForDecoder()
      }
      removeChildRefs(HH, BH) {
        const LH = "string" !== typeof HH[WH],
          AH = HH[tH];
        HH.forEach(((SH, hH) => {
          BH?.push({
            ref: HH,
            refId: AH,
            op: rH.DELETE,
            field: hH,
            value: void 0,
            previousValue: SH
          }), LH && this.root.removeRef(SH[tH])
        }))
      }
    }
    const sA = kA({
        min: YA.float64(),
        max: YA.float64(),
        bits: YA.uint8(),
        mode: YA.uint8()
      }, "QuantizedDescriptor"),
      JA = kA({
        name: YA.string(),
        type: YA.string(),
        referencedType: YA.number(),
        childPrimitive: YA.string(),
        quantized: YA.ref(sA).optional()
      }, "ReflectionField"),
      iA = kA({
        id: YA.number(),
        extendsId: YA.number(),
        fields: YA.array(JA)
      }, "ReflectionType"),
      pA = kA({
        types: YA.array(iA),
        rootType: YA.number()
      }, "Reflection");

    function yA(HH) {
      const BH = HH.root,
        LH = BH.callbacks,
        AH = new WeakMap;
      let SH;

      function hH(HH, LH) {
        let CH = LH.instance?.constructor[Symbol.metadata] || HH,
          EH = LH.instance && "function" === typeof LH.instance.forEach || HH && !oA.is(HH);
        if (CH && !EH) {
          const HH = function(HH, rH, hH, zH) {
            return zH && void 0 !== LH.instance[rH] && !AH.has(SH) && hH(LH.instance[rH], void 0), BH.addCallback(HH[tH], rH, hH)
          };
          return new Proxy({
            listen: function(BH, rH) {
              let hH = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
              if (LH.instance) return HH(LH.instance, BH, rH, hH);
              {
                let tH = () => {};
                return LH.onInstanceAvailable(((LH, zH) => {
                  tH = HH(LH, BH, rH, hH && zH && !AH.has(SH))
                })), () => tH()
              }
            },
            onChange: function(HH) {
              return BH.addCallback(LH.instance[tH], rH.REPLACE, HH)
            },
            bindTo: function(HH, AH) {
              return AH || (AH = Object.keys(CH).map((HH => CH[HH].name))), BH.addCallback(LH.instance[tH], rH.REPLACE, (() => {
                AH.forEach((BH => HH[BH] = LH.instance[BH]))
              }))
            }
          }, {
            get(HH, BH) {
              const AH = CH[CH[BH]];
              if (AH) {
                const HH = LH.instance?.[BH],
                  rH = AH => {
                    const rH = zH(LH.instance).listen(BH, ((HH, BH) => {
                      AH(HH, !1), rH?.()
                    }), !1);
                    void 0 !== HH?.[tH] && AH(HH, !0)
                  };
                return hH(AH.type, {
                  instance: void 0 !== HH?.[tH] && HH,
                  parentInstance: LH.instance,
                  onInstanceAvailable: rH
                })
              }
              return HH[BH]
            },
            has: (HH, BH) => void 0 !== CH[BH],
            set(HH, BH, LH) {
              throw new Error("not allowed")
            },
            deleteProperty(HH, BH) {
              throw new Error("not allowed")
            }
          })
        } {
          const HH = function(HH, LH, hH) {
              return hH && HH.forEach(((HH, BH) => LH(HH, BH))), BH.addCallback(HH[tH], rH.ADD, ((HH, BH) => {
                AH.set(LH, !0), SH = LH, LH(HH, BH), AH.delete(LH), SH = void 0
              }))
            },
            hH = function(HH, LH) {
              return BH.addCallback(HH[tH], rH.DELETE, LH)
            },
            zH = function(HH, LH) {
              return BH.addCallback(HH[tH], rH.REPLACE, LH)
            };
          return new Proxy({
            aT: function(BH) {
              let rH = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
              if (LH.instance) return HH(LH.instance, BH, rH && !AH.has(SH));
              if (LH.onInstanceAvailable) {
                let hH = () => {};
                return LH.onInstanceAvailable(((LH, tH) => {
                  hH = HH(LH, BH, rH && tH && !AH.has(SH))
                })), () => hH()
              }
            },
            bq: function(HH) {
              if (LH.instance) return hH(LH.instance, HH);
              if (LH.onInstanceAvailable) {
                let BH = () => {};
                return LH.onInstanceAvailable((LH => {
                  BH = hH(LH, HH)
                })), () => BH()
              }
            },
            onChange: function(HH) {
              if (LH.instance) return zH(LH.instance, HH);
              if (LH.onInstanceAvailable) {
                let BH = () => {};
                return LH.onInstanceAvailable((LH => {
                  BH = zH(LH, HH)
                })), () => BH()
              }
            }
          }, {
            get(HH, BH) {
              if (!HH[BH]) throw new Error(`Can't access '${BH}' through callback proxy. access the instance directly.`);
              return HH[BH]
            },
            has: (HH, BH) => void 0 !== HH[BH],
            set(HH, BH, LH) {
              throw new Error("not allowed")
            },
            deleteProperty(HH, BH) {
              throw new Error("not allowed")
            }
          })
        }
      }

      function zH(HH) {
        return hH(void 0, {
          instance: HH
        })
      }
      return HH.zN = function(HH) {
        const BH = new Set;
        for (let AH = 0, SH = HH.length; AH < SH; AH++) {
          const SH = HH[AH],
            hH = SH.refId,
            zH = SH.ref,
            CH = LH[hH];
          if (CH) {
            if ((SH.op & rH.DELETE) === rH.DELETE && oA.isSchema(SH.previousValue)) {
              const HH = LH[SH.previousValue[tH]]?.[rH.DELETE];
              for (let BH = HH?.length - 1; BH >= 0; BH--) HH[BH]()
            }
            if (oA.isSchema(zH)) {
              if (!BH.has(hH)) {
                const HH = CH?.[rH.REPLACE];
                for (let BH = HH?.length - 1; BH >= 0; BH--) HH[BH]()
              }
              if (CH.hasOwnProperty(SH.field)) {
                const HH = CH[SH.field];
                for (let BH = HH?.length - 1; BH >= 0; BH--) HH[BH](SH.value, SH.previousValue)
              }
            } else {
              if ((SH.op & rH.DELETE) === rH.DELETE) {
                if (void 0 !== SH.previousValue) {
                  const HH = CH[rH.DELETE];
                  for (let BH = HH?.length - 1; BH >= 0; BH--) HH[BH](SH.previousValue, SH.dynamicIndex ?? SH.field)
                }
                if ((SH.op & rH.ADD) === rH.ADD) {
                  const HH = CH[rH.ADD];
                  for (let BH = HH?.length - 1; BH >= 0; BH--) HH[BH](SH.value, SH.dynamicIndex ?? SH.field)
                }
              } else if ((SH.op & rH.ADD) === rH.ADD && SH.previousValue !== SH.value) {
                const HH = CH[rH.ADD];
                for (let BH = HH?.length - 1; BH >= 0; BH--) HH[BH](SH.value, SH.dynamicIndex ?? SH.field)
              }
              if (SH.value !== SH.previousValue && (void 0 !== SH.value || void 0 !== SH.previousValue)) {
                const HH = CH[rH.REPLACE];
                for (let BH = HH?.length - 1; BH >= 0; BH--) HH[BH](SH.value, SH.dynamicIndex ?? SH.field)
              }
            }
            BH.add(hH)
          }
        }
      }, zH
    }

    function Hr(HH, BH) {
      HH.zN = BH
    }
    pA.encode = function(HH) {
      let BH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
        offset: 0
      };
      const LH = HH.context,
        AH = new pA,
        rH = new DA(AH),
        SH = LH.schemas.get(HH.state.constructor);
      SH > 0 && (AH.rootType = SH);
      const hH = new Set,
        tH = {},
        zH = HH => {
          if (void 0 === HH.extendsId || hH.has(HH.extendsId)) {
            hH.add(HH.id), AH.types.push(HH);
            const BH = tH[HH.id];
            void 0 !== BH && (delete tH[HH.id], BH.forEach((HH => zH(HH))))
          } else void 0 === tH[HH.extendsId] && (tH[HH.extendsId] = []), tH[HH.extendsId].push(HH)
        };
      LH.schemas.forEach(((HH, BH) => {
        const AH = new iA;
        AH.id = Number(HH);
        const rH = Object.getPrototypeOf(BH);
        rH !== oA && (AH.extendsId = LH.schemas.get(rH));
        const SH = BH[Symbol.metadata];
        if (SH !== rH[Symbol.metadata]) {
          const HH = SH[kH] ?? -1;
          for (let BH = 0; BH <= HH; BH++) {
            const HH = SH[BH];
            if (void 0 === HH) continue;
            const rH = HH.name;
            if (!Object.prototype.hasOwnProperty.call(SH, rH)) continue;
            const hH = new JA;
            let tH;
            if (hH.name = rH, "string" === typeof HH.type) tH = HH.type;
            else if (qB(HH.type)) {
              const BH = HH.type.quantized;
              tH = "quantized";
              const LH = new sA;
              LH.min = BH.min, LH.max = BH.max, LH.bits = BH.bits, LH.mode = BH.wrap ? 1 : 0, hH.quantized = LH
            } else {
              let BH;
              oA.is(HH.type) ? (tH = "ref", BH = HH.type) : (tH = Object.keys(HH.type)[0], "string" === typeof HH.type[tH] ? hH.childPrimitive = HH.type[tH] : BH = HH.type[tH]), hH.referencedType = BH ? LH.getTypeId(BH) : -1
            }
            hH.type = tH, AH.fields.push(hH)
          }
        }
        zH(AH)
      }));
      for (const CH in tH) tH[CH].forEach((HH => AH.types.push(HH)));
      return rH.encodeAll(BH).slice(0, BH.offset)
    }, pA.decode = function(HH, BH) {
      const LH = new pA;
      new aA(LH).decode(HH, BH);
      const AH = new jB;
      LH.types.forEach((HH => {
        const BH = AH.get(HH.extendsId) ?? oA,
          LH = class extends BH {};
        jB.register(LH), AH.add(LH, HH.id)
      }), {});
      LH.types.forEach((HH => {
        const BH = AH.get(HH.id),
          rH = aB.initialize(BH),
          SH = [];
        let hH = HH;
        do {
          SH.push(hH), hH = LH.types.find((HH => HH.id === hH.extendsId))
        } while (hH);
        let tH = 0;
        SH.reverse().forEach((HH => {
          ((HH, BH, LH) => {
            BH.fields.forEach(((BH, rH) => {
              const SH = LH + rH;
              if (void 0 !== BH.quantized) {
                const LH = BH.quantized;
                aB.addField(HH, SH, BH.name, {
                  quantized: eB({
                    min: LH.min,
                    max: LH.max,
                    bits: LH.bits,
                    mode: 1 === LH.mode ? "wrap" : "clamp"
                  })
                })
              } else if (void 0 !== BH.referencedType) {
                const LH = BH.type,
                  rH = AH.get(BH.referencedType) ?? BH.childPrimitive;
                "ref" === LH ? aB.addField(HH, SH, BH.name, rH) : aB.addField(HH, SH, BH.name, {
                  [LH]: rH
                })
              } else aB.addField(HH, SH, BH.name, BH.type)
            }))
          })(rH, HH, tH), tH += HH.fields.length
        }))
      }));
      const rH = new(AH.get(LH.rootType || 0));
      return new aA(rH, AH)
    }, pA.makeEncodable = function(HH) {
      const BH = HH[Symbol.metadata];
      if (!BH) return HH;
      const LH = BH[kH];
      if (void 0 === LH) return HH;
      for (let AH = 0; AH <= LH; AH++) {
        const LH = BH[AH];
        LH && aB.defineField(HH, BH, AH, LH.name, LH.type)
      }
      return Object.prototype.hasOwnProperty.call(HH, OH) && delete HH[OH], HH
    };
    class Br {
      GX;
      uniqueRefIds = new Set;
      isTriggering = !1;
      constructor(HH) {
        this.GX = HH, this.GX.zN = this.zN.bind(this)
      }
      get callbacks() {
        return this.GX.root.callbacks
      }
      get state() {
        return this.GX.state
      }
      addCallback(HH, BH, LH) {
        return this.GX.root.addCallback(HH, BH, LH)
      }
      addCallbackOrWaitCollectionAvailable(HH, BH, LH, AH) {
        let SH = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4],
          hH = () => {};
        const zH = () => hH(),
          CH = HH[BH];
        if (CH && void 0 !== CH[tH]) return SH = SH && !1 === this.isTriggering, LH === rH.ADD && SH && CH.forEach(((HH, BH) => {
          AH(HH, BH)
        })), this.addCallback(CH[tH], LH, AH);
        {
          let rH;
          return rH = this.addCallback(HH[tH], BH, ((HH, BH) => {
            null !== HH && void 0 !== HH && (rH(), hH = this.addCallback(HH[tH], LH, AH))
          })), hH = rH, zH
        }
      }
      listen() {
        return "string" === typeof(arguments.length <= 0 ? void 0 : arguments[0]) ? this.listenInstance(this.state, arguments.length <= 0 ? void 0 : arguments[0], arguments.length <= 1 ? void 0 : arguments[1], arguments.length <= 2 ? void 0 : arguments[2]) : this.listenInstance(arguments.length <= 0 ? void 0 : arguments[0], arguments.length <= 1 ? void 0 : arguments[1], arguments.length <= 2 ? void 0 : arguments[2], arguments.length <= 3 ? void 0 : arguments[3])
      }
      listenInstance(HH, BH, LH) {
        let AH = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
        AH = AH && !1 === this.isTriggering;
        const rH = HH[BH];
        return AH && null !== rH && void 0 !== rH && LH(rH, void 0), this.addCallback(HH[tH], BH, LH)
      }
      onChange() {
        if (2 === arguments.length && "string" !== typeof(arguments.length <= 0 ? void 0 : arguments[0])) {
          const HH = arguments.length <= 0 ? void 0 : arguments[0],
            BH = arguments.length <= 1 ? void 0 : arguments[1];
          return this.addCallback(HH[tH], rH.REPLACE, BH)
        }
        return "string" === typeof(arguments.length <= 0 ? void 0 : arguments[0]) ? this.addCallbackOrWaitCollectionAvailable(this.state, arguments.length <= 0 ? void 0 : arguments[0], rH.REPLACE, arguments.length <= 1 ? void 0 : arguments[1]) : this.addCallbackOrWaitCollectionAvailable(arguments.length <= 0 ? void 0 : arguments[0], arguments.length <= 1 ? void 0 : arguments[1], rH.REPLACE, arguments.length <= 2 ? void 0 : arguments[2])
      }
      aT() {
        return "string" === typeof(arguments.length <= 0 ? void 0 : arguments[0]) ? this.addCallbackOrWaitCollectionAvailable(this.state, arguments.length <= 0 ? void 0 : arguments[0], rH.ADD, arguments.length <= 1 ? void 0 : arguments[1], !1 !== (arguments.length <= 2 ? void 0 : arguments[2])) : this.addCallbackOrWaitCollectionAvailable(arguments.length <= 0 ? void 0 : arguments[0], arguments.length <= 1 ? void 0 : arguments[1], rH.ADD, arguments.length <= 2 ? void 0 : arguments[2], !1 !== (arguments.length <= 3 ? void 0 : arguments[3]))
      }
      bq() {
        return "string" === typeof(arguments.length <= 0 ? void 0 : arguments[0]) ? this.addCallbackOrWaitCollectionAvailable(this.state, arguments.length <= 0 ? void 0 : arguments[0], rH.DELETE, arguments.length <= 1 ? void 0 : arguments[1]) : this.addCallbackOrWaitCollectionAvailable(arguments.length <= 0 ? void 0 : arguments[0], arguments.length <= 1 ? void 0 : arguments[1], rH.DELETE, arguments.length <= 2 ? void 0 : arguments[2])
      }
      bindTo(HH, BH, LH) {
        let AH = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
        const SH = HH.constructor[Symbol.metadata];
        LH || (LH = Object.keys(SH).filter((HH => !isNaN(Number(HH)))).map((HH => SH[HH].name)));
        const hH = () => {
          for (const AH of LH) {
            const LH = HH[AH];
            void 0 !== LH && (BH[AH] = LH)
          }
        };
        return AH && hH(), this.addCallback(HH[tH], rH.REPLACE, hH)
      }
      zN(HH) {
        this.uniqueRefIds.clear(), this.isTriggering = !0;
        for (let BH = 0, LH = HH.length; BH < LH; BH++) {
          const LH = HH[BH],
            AH = LH.refId,
            SH = LH.ref,
            hH = this.callbacks[AH];
          if (hH) {
            if ((LH.op & rH.DELETE) === rH.DELETE && oA.isSchema(LH.previousValue)) {
              const HH = LH.previousValue[tH],
                BH = this.callbacks[HH]?.[rH.DELETE];
              if (BH)
                for (let LH = BH.length - 1; LH >= 0; LH--) try {
                  BH[LH]()
                } catch (Sr) {
                  console.error(Sr)
                }
            }
            if (oA.isSchema(SH)) {
              if (!this.uniqueRefIds.has(AH)) {
                const HH = hH[rH.REPLACE];
                if (HH)
                  for (let BH = HH.length - 1; BH >= 0; BH--) try {
                    HH[BH]()
                  } catch (Sr) {
                    console.error(Sr)
                  }
              }
              const HH = hH[LH.field];
              if (HH)
                for (let BH = HH.length - 1; BH >= 0; BH--) try {
                  HH[BH](LH.value, LH.previousValue)
                } catch (Sr) {
                  console.error(Sr)
                }
            } else {
              const HH = LH.dynamicIndex ?? LH.field;
              if ((LH.op & rH.DELETE) === rH.DELETE) {
                if (void 0 !== LH.previousValue) {
                  const BH = hH[rH.DELETE];
                  if (BH)
                    for (let AH = BH.length - 1; AH >= 0; AH--) try {
                      BH[AH](LH.previousValue, HH)
                    } catch (Sr) {
                      console.error(Sr)
                    }
                }
                if ((LH.op & rH.ADD) === rH.ADD) {
                  const BH = hH[rH.ADD];
                  if (BH)
                    for (let AH = BH.length - 1; AH >= 0; AH--) try {
                      BH[AH](LH.value, HH)
                    } catch (Sr) {
                      console.error(Sr)
                    }
                }
              } else if ((LH.op & rH.ADD) === rH.ADD && LH.previousValue !== LH.value) {
                const BH = hH[rH.ADD];
                if (BH)
                  for (let AH = BH.length - 1; AH >= 0; AH--) try {
                    BH[AH](LH.value, HH)
                  } catch (Sr) {
                    console.error(Sr)
                  }
              }
              if (LH.value !== LH.previousValue) {
                const BH = hH[rH.REPLACE];
                if (BH)
                  for (let AH = BH.length - 1; AH >= 0; AH--) try {
                    BH[AH](HH, LH.value)
                  } catch (Sr) {
                    console.error(Sr)
                  }
              }
            }
            this.uniqueRefIds.add(AH)
          }
        }
        this.isTriggering = !1
      }
    }
    const Lr = {
      get(HH) {
        if (HH instanceof aA) return new Br(HH);
        if ("GX" in HH.Xx) return new Br(HH.Xx.GX);
        throw new Error("Invalid room or decoder")
      },
      getLegacy(HH) {
        if (HH instanceof aA) return yA(HH);
        if ("GX" in HH.Xx) return yA(HH.Xx.GX);
        throw new Error("Invalid room or decoder")
      },
      getRawChanges: (HH, BH) => Hr(HH, BH)
    };
    class Ar {
      _free = [];
      _factory;
      _maxSize;
      constructor(HH) {
        let BH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        this._factory = HH, this._maxSize = BH.maxSize ?? 1 / 0;
        const LH = BH.preallocate ?? 0;
        for (let AH = 0; AH < LH; AH++) this._free.push(HH())
      }
      acquire() {
        return this._free.length > 0 ? this._free.pop() : this._factory()
      }
      release(HH) {
        oA.reset(HH), this._free.length < this._maxSize && this._free.push(HH)
      }
      get size() {
        return this._free.length
      }
    }

    function rr(HH) {
      return new Ar((() => new HH), arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {})
    }
    UB("map", {
      constructor: rA
    }), UB("array", {
      constructor: LA
    }), UB("set", {
      constructor: hA
    }), UB("collection", {
      constructor: SA
    })
  },
  9802: (HH, BH, LH) => {
    LH.r(BH), LH.d(BH, {
      __addDisposableResource: () => qH,
      __assign: () => SH,
      __asyncDelegator: () => bH,
      __asyncGenerator: () => OH,
      __asyncValues: () => kH,
      __await: () => VH,
      __awaiter: () => uH,
      __classPrivateFieldGet: () => KH,
      __classPrivateFieldIn: () => eH,
      __classPrivateFieldSet: () => cH,
      __createBinding: () => WH,
      __decorate: () => tH,
      __disposeResources: () => NH,
      __esDecorate: () => CH,
      __exportStar: () => MH,
      __extends: () => rH,
      __generator: () => QH,
      __importDefault: () => lH,
      __importStar: () => fH,
      __makeTemplateObject: () => mH,
      __metadata: () => YH,
      __param: () => zH,
      __propKey: () => XH,
      __read: () => vH,
      __rest: () => hH,
      __rewriteRelativeImportExtension: () => RH,
      __runInitializers: () => EH,
      __setFunctionName: () => GH,
      __spread: () => PH,
      __spreadArray: () => UH,
      __spreadArrays: () => TH,
      __values: () => xH,
      default: () => jH
    });
    var AH = function(HH, BH) {
      return AH = Object.setPrototypeOf || {
        __proto__: []
      }
      instanceof Array && function(HH, BH) {
        HH.__proto__ = BH
      } || function(HH, BH) {
        for (var LH in BH) Object.prototype.hasOwnProperty.call(BH, LH) && (HH[LH] = BH[LH])
      }, AH(HH, BH)
    };

    function rH(HH, BH) {
      if ("function" !== typeof BH && null !== BH) throw new TypeError("Class extends value " + String(BH) + " is not a constructor or null");

      function LH() {
        this.constructor = HH
      }
      AH(HH, BH), HH.prototype = null === BH ? Object.create(BH) : (LH.prototype = BH.prototype, new LH)
    }
    var SH = function() {
      return SH = Object.assign || function(HH) {
        for (var BH, LH = 1, AH = arguments.length; LH < AH; LH++)
          for (var rH in BH = arguments[LH]) Object.prototype.hasOwnProperty.call(BH, rH) && (HH[rH] = BH[rH]);
        return HH
      }, SH.apply(this, arguments)
    };

    function hH(HH, BH) {
      var LH = {};
      for (var AH in HH) Object.prototype.hasOwnProperty.call(HH, AH) && BH.indexOf(AH) < 0 && (LH[AH] = HH[AH]);
      if (null != HH && "function" === typeof Object.getOwnPropertySymbols) {
        var rH = 0;
        for (AH = Object.getOwnPropertySymbols(HH); rH < AH.length; rH++) BH.indexOf(AH[rH]) < 0 && Object.prototype.propertyIsEnumerable.call(HH, AH[rH]) && (LH[AH[rH]] = HH[AH[rH]])
      }
      return LH
    }

    function tH(HH, BH, LH, AH) {
      var rH, SH = arguments.length,
        hH = SH < 3 ? BH : null === AH ? AH = Object.getOwnPropertyDescriptor(BH, LH) : AH;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) hH = Reflect.decorate(HH, BH, LH, AH);
      else
        for (var tH = HH.length - 1; tH >= 0; tH--)(rH = HH[tH]) && (hH = (SH < 3 ? rH(hH) : SH > 3 ? rH(BH, LH, hH) : rH(BH, LH)) || hH);
      return SH > 3 && hH && Object.defineProperty(BH, LH, hH), hH
    }

    function zH(HH, BH) {
      return function(LH, AH) {
        BH(LH, AH, HH)
      }
    }

    function CH(HH, BH, LH, AH, rH, SH) {
      function hH(HH) {
        if (void 0 !== HH && "function" !== typeof HH) throw new TypeError("Function expected");
        return HH
      }
      for (var tH, zH = AH.kind, CH = "getter" === zH ? "get" : "setter" === zH ? "set" : "value", EH = !BH && HH ? AH.static ? HH : HH.prototype : null, XH = BH || (EH ? Object.getOwnPropertyDescriptor(EH, AH.name) : {}), GH = !1, YH = LH.length - 1; YH >= 0; YH--) {
        var uH = {};
        for (var QH in AH) uH[QH] = "access" === QH ? {} : AH[QH];
        for (var QH in AH.access) uH.access[QH] = AH.access[QH];
        uH.addInitializer = function(HH) {
          if (GH) throw new TypeError("Cannot add initializers after decoration has completed");
          SH.push(hH(HH || null))
        };
        var WH = (0, LH[YH])("accessor" === zH ? {
          get: XH.get,
          set: XH.set
        } : XH[CH], uH);
        if ("accessor" === zH) {
          if (void 0 === WH) continue;
          if (null === WH || "object" !== typeof WH) throw new TypeError("Object expected");
          (tH = hH(WH.get)) && (XH.get = tH), (tH = hH(WH.set)) && (XH.set = tH), (tH = hH(WH.init)) && rH.unshift(tH)
        } else(tH = hH(WH)) && ("field" === zH ? rH.unshift(tH) : XH[CH] = tH)
      }
      EH && Object.defineProperty(EH, AH.name, XH), GH = !0
    }

    function EH(HH, BH, LH) {
      for (var AH = arguments.length > 2, rH = 0; rH < BH.length; rH++) LH = AH ? BH[rH].call(HH, LH) : BH[rH].call(HH);
      return AH ? LH : void 0
    }

    function XH(HH) {
      return "symbol" === typeof HH ? HH : "".concat(HH)
    }

    function GH(HH, BH, LH) {
      return "symbol" === typeof BH && (BH = BH.description ? "[".concat(BH.description, "]") : ""), Object.defineProperty(HH, "name", {
        configurable: !0,
        value: LH ? "".concat(LH, " ", BH) : BH
      })
    }

    function YH(HH, BH) {
      if ("object" === typeof Reflect && "function" === typeof Reflect.metadata) return Reflect.metadata(HH, BH)
    }

    function uH(HH, BH, LH, AH) {
      return new(LH || (LH = Promise))((function(rH, SH) {
        function hH(HH) {
          try {
            zH(AH.next(HH))
          } catch (BH) {
            SH(BH)
          }
        }

        function tH(HH) {
          try {
            zH(AH.throw(HH))
          } catch (BH) {
            SH(BH)
          }
        }

        function zH(HH) {
          var BH;
          HH.done ? rH(HH.value) : (BH = HH.value, BH instanceof LH ? BH : new LH((function(HH) {
            HH(BH)
          }))).then(hH, tH)
        }
        zH((AH = AH.apply(HH, BH || [])).next())
      }))
    }

    function QH(HH, BH) {
      var LH, AH, rH, SH = {
          label: 0,
          sent: function() {
            if (1 & rH[0]) throw rH[1];
            return rH[1]
          },
          trys: [],
          ops: []
        },
        hH = Object.create(("function" === typeof Iterator ? Iterator : Object).prototype);
      return hH.next = tH(0), hH.throw = tH(1), hH.return = tH(2), "function" === typeof Symbol && (hH[Symbol.iterator] = function() {
        return this
      }), hH;

      function tH(tH) {
        return function(zH) {
          return function(tH) {
            if (LH) throw new TypeError("Generator is already executing.");
            for (; hH && (hH = 0, tH[0] && (SH = 0)), SH;) try {
              if (LH = 1, AH && (rH = 2 & tH[0] ? AH.return : tH[0] ? AH.throw || ((rH = AH.return) && rH.call(AH), 0) : AH.next) && !(rH = rH.call(AH, tH[1])).done) return rH;
              switch (AH = 0, rH && (tH = [2 & tH[0], rH.value]), tH[0]) {
                case 0:
                case 1:
                  rH = tH;
                  break;
                case 4:
                  return SH.label++, {
                    value: tH[1],
                    done: !1
                  };
                case 5:
                  SH.label++, AH = tH[1], tH = [0];
                  continue;
                case 7:
                  tH = SH.ops.pop(), SH.trys.pop();
                  continue;
                default:
                  if (!(rH = (rH = SH.trys).length > 0 && rH[rH.length - 1]) && (6 === tH[0] || 2 === tH[0])) {
                    SH = 0;
                    continue
                  }
                  if (3 === tH[0] && (!rH || tH[1] > rH[0] && tH[1] < rH[3])) {
                    SH.label = tH[1];
                    break
                  }
                  if (6 === tH[0] && SH.label < rH[1]) {
                    SH.label = rH[1], rH = tH;
                    break
                  }
                  if (rH && SH.label < rH[2]) {
                    SH.label = rH[2], SH.ops.push(tH);
                    break
                  }
                  rH[2] && SH.ops.pop(), SH.trys.pop();
                  continue
              }
              tH = BH.call(HH, SH)
            } catch (zH) {
              tH = [6, zH], AH = 0
            } finally {
              LH = rH = 0
            }
            if (5 & tH[0]) throw tH[1];
            return {
              value: tH[0] ? tH[1] : void 0,
              done: !0
            }
          }([tH, zH])
        }
      }
    }
    var WH = Object.create ? function(HH, BH, LH, AH) {
      void 0 === AH && (AH = LH);
      var rH = Object.getOwnPropertyDescriptor(BH, LH);
      rH && !("get" in rH ? !BH.__esModule : rH.writable || rH.configurable) || (rH = {
        enumerable: !0,
        get: function() {
          return BH[LH]
        }
      }), Object.defineProperty(HH, AH, rH)
    } : function(HH, BH, LH, AH) {
      void 0 === AH && (AH = LH), HH[AH] = BH[LH]
    };

    function MH(HH, BH) {
      for (var LH in HH) "default" === LH || Object.prototype.hasOwnProperty.call(BH, LH) || WH(BH, HH, LH)
    }

    function xH(HH) {
      var BH = "function" === typeof Symbol && Symbol.iterator,
        LH = BH && HH[BH],
        AH = 0;
      if (LH) return LH.call(HH);
      if (HH && "number" === typeof HH.length) return {
        next: function() {
          return HH && AH >= HH.length && (HH = void 0), {
            value: HH && HH[AH++],
            done: !HH
          }
        }
      };
      throw new TypeError(BH ? "Object is not iterable." : "Symbol.iterator is not defined.")
    }

    function vH(HH, BH) {
      var LH = "function" === typeof Symbol && HH[Symbol.iterator];
      if (!LH) return HH;
      var AH, rH, SH = LH.call(HH),
        hH = [];
      try {
        for (;
          (void 0 === BH || BH-- > 0) && !(AH = SH.next()).done;) hH.push(AH.value)
      } catch (tH) {
        rH = {
          error: tH
        }
      } finally {
        try {
          AH && !AH.done && (LH = SH.return) && LH.call(SH)
        } finally {
          if (rH) throw rH.error
        }
      }
      return hH
    }

    function PH() {
      for (var HH = [], BH = 0; BH < arguments.length; BH++) HH = HH.concat(vH(arguments[BH]));
      return HH
    }

    function TH() {
      for (var HH = 0, BH = 0, LH = arguments.length; BH < LH; BH++) HH += arguments[BH].length;
      var AH = Array(HH),
        rH = 0;
      for (BH = 0; BH < LH; BH++)
        for (var SH = arguments[BH], hH = 0, tH = SH.length; hH < tH; hH++, rH++) AH[rH] = SH[hH];
      return AH
    }

    function UH(HH, BH, LH) {
      if (LH || 2 === arguments.length)
        for (var AH, rH = 0, SH = BH.length; rH < SH; rH++) !AH && rH in BH || (AH || (AH = Array.prototype.slice.call(BH, 0, rH)), AH[rH] = BH[rH]);
      return HH.concat(AH || Array.prototype.slice.call(BH))
    }

    function VH(HH) {
      return this instanceof VH ? (this.v = HH, this) : new VH(HH)
    }

    function OH(HH, BH, LH) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var AH, rH = LH.apply(HH, BH || []),
        SH = [];
      return AH = Object.create(("function" === typeof AsyncIterator ? AsyncIterator : Object).prototype), hH("next"), hH("throw"), hH("return", (function(HH) {
        return function(BH) {
          return Promise.resolve(BH).then(HH, CH)
        }
      })), AH[Symbol.asyncIterator] = function() {
        return this
      }, AH;

      function hH(HH, BH) {
        rH[HH] && (AH[HH] = function(BH) {
          return new Promise((function(LH, AH) {
            SH.push([HH, BH, LH, AH]) > 1 || tH(HH, BH)
          }))
        }, BH && (AH[HH] = BH(AH[HH])))
      }

      function tH(HH, BH) {
        try {
          (LH = rH[HH](BH)).value instanceof VH ? Promise.resolve(LH.value.v).then(zH, CH) : EH(SH[0][2], LH)
        } catch (AH) {
          EH(SH[0][3], AH)
        }
        var LH
      }

      function zH(HH) {
        tH("next", HH)
      }

      function CH(HH) {
        tH("throw", HH)
      }

      function EH(HH, BH) {
        HH(BH), SH.shift(), SH.length && tH(SH[0][0], SH[0][1])
      }
    }

    function bH(HH) {
      var BH, LH;
      return BH = {}, AH("next"), AH("throw", (function(HH) {
        throw HH
      })), AH("return"), BH[Symbol.iterator] = function() {
        return this
      }, BH;

      function AH(AH, rH) {
        BH[AH] = HH[AH] ? function(BH) {
          return (LH = !LH) ? {
            value: VH(HH[AH](BH)),
            done: !1
          } : rH ? rH(BH) : BH
        } : rH
      }
    }

    function kH(HH) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var BH, LH = HH[Symbol.asyncIterator];
      return LH ? LH.call(HH) : (HH = xH(HH), BH = {}, AH("next"), AH("throw"), AH("return"), BH[Symbol.asyncIterator] = function() {
        return this
      }, BH);

      function AH(LH) {
        BH[LH] = HH[LH] && function(BH) {
          return new Promise((function(AH, rH) {
            (function(HH, BH, LH, AH) {
              Promise.resolve(AH).then((function(BH) {
                HH({
                  value: BH,
                  done: LH
                })
              }), BH)
            })(AH, rH, (BH = HH[LH](BH)).done, BH.value)
          }))
        }
      }
    }

    function mH(HH, BH) {
      return Object.defineProperty ? Object.defineProperty(HH, "raw", {
        value: BH
      }) : HH.raw = BH, HH
    }
    var oH = Object.create ? function(HH, BH) {
        Object.defineProperty(HH, "default", {
          enumerable: !0,
          value: BH
        })
      } : function(HH, BH) {
        HH.default = BH
      },
      IH = function(HH) {
        return IH = Object.getOwnPropertyNames || function(HH) {
          var BH = [];
          for (var LH in HH) Object.prototype.hasOwnProperty.call(HH, LH) && (BH[BH.length] = LH);
          return BH
        }, IH(HH)
      };

    function fH(HH) {
      if (HH && HH.__esModule) return HH;
      var BH = {};
      if (null != HH)
        for (var LH = IH(HH), AH = 0; AH < LH.length; AH++) "default" !== LH[AH] && WH(BH, HH, LH[AH]);
      return oH(BH, HH), BH
    }

    function lH(HH) {
      return HH && HH.__esModule ? HH : {
        default: HH
      }
    }

    function KH(HH, BH, LH, AH) {
      if ("a" === LH && !AH) throw new TypeError("Private accessor was defined without a getter");
      if ("function" === typeof BH ? HH !== BH || !AH : !BH.has(HH)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
      return "m" === LH ? AH : "a" === LH ? AH.call(HH) : AH ? AH.value : BH.get(HH)
    }

    function cH(HH, BH, LH, AH, rH) {
      if ("m" === AH) throw new TypeError("Private method is not writable");
      if ("a" === AH && !rH) throw new TypeError("Private accessor was defined without a setter");
      if ("function" === typeof BH ? HH !== BH || !rH : !BH.has(HH)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
      return "a" === AH ? rH.call(HH, LH) : rH ? rH.value = LH : BH.set(HH, LH), LH
    }

    function eH(HH, BH) {
      if (null === BH || "object" !== typeof BH && "function" !== typeof BH) throw new TypeError("Cannot use 'in' operator on non-object");
      return "function" === typeof HH ? BH === HH : HH.has(BH)
    }

    function qH(HH, BH, LH) {
      if (null !== BH && void 0 !== BH) {
        if ("object" !== typeof BH && "function" !== typeof BH) throw new TypeError("Object expected.");
        var AH, rH;
        if (LH) {
          if (!Symbol.asyncDispose) throw new TypeError("Symbol.asyncDispose is not defined.");
          AH = BH[Symbol.asyncDispose]
        }
        if (void 0 === AH) {
          if (!Symbol.dispose) throw new TypeError("Symbol.dispose is not defined.");
          AH = BH[Symbol.dispose], LH && (rH = AH)
        }
        if ("function" !== typeof AH) throw new TypeError("Object not disposable.");
        rH && (AH = function() {
          try {
            rH.call(this)
          } catch (HH) {
            return Promise.reject(HH)
          }
        }), HH.stack.push({
          value: BH,
          dispose: AH,
          async: LH
        })
      } else LH && HH.stack.push({
        async: !0
      });
      return BH
    }
    var gH = "function" === typeof SuppressedError ? SuppressedError : function(HH, BH, LH) {
      var AH = new Error(LH);
      return AH.name = "SuppressedError", AH.error = HH, AH.suppressed = BH, AH
    };

    function NH(HH) {
      function BH(BH) {
        HH.error = HH.hasError ? new gH(BH, HH.error, "An error was suppressed during disposal.") : BH, HH.hasError = !0
      }
      var LH, AH = 0;
      return function rH() {
        for (; LH = HH.stack.pop();) try {
          if (!LH.async && 1 === AH) return AH = 0, HH.stack.push(LH), Promise.resolve().then(rH);
          if (LH.dispose) {
            var SH = LH.dispose.call(LH.value);
            if (LH.async) return AH |= 2, Promise.resolve(SH).then(rH, (function(HH) {
              return BH(HH), rH()
            }))
          } else AH |= 1
        } catch (hH) {
          BH(hH)
        }
        if (1 === AH) return HH.hasError ? Promise.reject(HH.error) : Promise.resolve();
        if (HH.hasError) throw HH.error
      }()
    }

    function RH(HH, BH) {
      return "string" === typeof HH && /^\.\.?\//.test(HH) ? HH.replace(/\.(tsx)$|((?:\.d)?)((?:\.[^./]+?)?)\.([cm]?)ts$/i, (function(HH, LH, AH, rH, SH) {
        return LH ? BH ? ".jsx" : ".js" : !AH || rH && SH ? AH + rH + "." + SH.toLowerCase() + "js" : HH
      })) : HH
    }
    const jH = {
      __extends: rH,
      __assign: SH,
      __rest: hH,
      __decorate: tH,
      __param: zH,
      __esDecorate: CH,
      __runInitializers: EH,
      __propKey: XH,
      __setFunctionName: GH,
      __metadata: YH,
      __awaiter: uH,
      __generator: QH,
      __createBinding: WH,
      __exportStar: MH,
      __values: xH,
      __read: vH,
      __spread: PH,
      __spreadArrays: TH,
      __spreadArray: UH,
      __await: VH,
      __asyncGenerator: OH,
      __asyncDelegator: bH,
      __asyncValues: kH,
      __makeTemplateObject: mH,
      __importStar: fH,
      __importDefault: lH,
      __classPrivateFieldGet: KH,
      __classPrivateFieldSet: cH,
      __classPrivateFieldIn: eH,
      __addDisposableResource: qH,
      __disposeResources: NH,
      __rewriteRelativeImportExtension: RH
    }
  }
};
Object.freeze(modules);
for (const HH in modules) Object.freeze(modules[HH]);