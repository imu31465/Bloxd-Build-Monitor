export const id = 181;
export const ids = [181];
export const modules = {
  8597: (YY, rY) => {
    rY.discordURLBuilder = function(YY) {
      var rY;
      const DY = (null === (rY = null === window || void 0 === window ? void 0 : window.location) || void 0 === rY ? void 0 : rY.hostname) || "localhost",
        FY = YY.hostname.split("."),
        AY = !YY.hostname.includes("trycloudflare.com") && !YY.hostname.includes("discordsays.com") && FY.length > 2 ? `/${FY[0]}` : "";
      return YY.pathname.startsWith("/.proxy") ? `${YY.protocol}//${DY}${AY}${YY.pathname}${YY.search}` : `${YY.protocol}//${DY}/.proxy/colyseus${AY}${YY.pathname}${YY.search}`
    }
  },
  8591: (YY, rY, DY) => {
    var FY, AY, IY, RY, OY = DY(8496),
      gY = DY(8593),
      aY = DY(8554);
    FY = new WeakMap, AY = new WeakMap, IY = new WeakMap, RY = new WeakMap, rY.Auth = class {
      constructor(YY) {
        this.http = YY, this.settings = {
          path: "/auth",
          key: "colyseus-auth-token"
        }, FY.set(this, !1), AY.set(this, void 0), IY.set(this, void 0), RY.set(this, aY.createNanoEvents()), gY.getItem(this.settings.key, (YY => this.token = YY))
      }
      set token(YY) {
        this.http.authToken = YY
      }
      get token() {
        return this.http.authToken
      }
      onChange(YY) {
        const rY = OY.__classPrivateFieldGet(this, RY, "f").on("change", YY);
        return OY.__classPrivateFieldGet(this, FY, "f") || OY.__classPrivateFieldSet(this, AY, new Promise(((YY, rY) => {
          this.getUserData().then((YY => {
            this.emitChange(Object.assign(Object.assign({}, YY), {
              token: this.token
            }))
          })).catch((YY => {
            this.emitChange({
              user: null,
              token: void 0
            })
          })).finally((() => {
            YY()
          }))
        })), "f"), OY.__classPrivateFieldSet(this, FY, !0, "f"), rY
      }
      getUserData() {
        return OY.__awaiter(this, void 0, void 0, (function*() {
          if (this.token) return (yield this.http.get(`${this.settings.path}/userdata`)).data;
          throw new Error("missing auth.token")
        }))
      }
      registerWithEmailAndPassword(YY, rY, DY) {
        return OY.__awaiter(this, void 0, void 0, (function*() {
          const FY = (yield this.http.post(`${this.settings.path}/register`, {
            body: {
              email: YY,
              password: rY,
              options: DY
            }
          })).data;
          return this.emitChange(FY), FY
        }))
      }
      signInWithEmailAndPassword(YY, rY) {
        return OY.__awaiter(this, void 0, void 0, (function*() {
          const DY = (yield this.http.post(`${this.settings.path}/login`, {
            body: {
              email: YY,
              password: rY
            }
          })).data;
          return this.emitChange(DY), DY
        }))
      }
      signInAnonymously(YY) {
        return OY.__awaiter(this, void 0, void 0, (function*() {
          const rY = (yield this.http.post(`${this.settings.path}/anonymous`, {
            body: {
              options: YY
            }
          })).data;
          return this.emitChange(rY), rY
        }))
      }
      sendPasswordResetEmail(YY) {
        return OY.__awaiter(this, void 0, void 0, (function*() {
          return (yield this.http.post(`${this.settings.path}/forgot-password`, {
            body: {
              email: YY
            }
          })).data
        }))
      }
      signInWithProvider(YY) {
        return OY.__awaiter(this, arguments, void 0, (function*(YY) {
          let rY = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          return new Promise(((DY, FY) => {
            const AY = rY.width || 480,
              RY = rY.height || 768,
              gY = this.token ? `?token=${this.token}` : "",
              aY = `Login with ${YY[0].toUpperCase()+YY.substring(1)}`,
              vY = this.http.client.getHttpEndpoint(`${rY.prefix||`${this.settings.path}/provider`}/${YY}${gY}`),
              uY = screen.width / 2 - AY / 2,
              sY = screen.height / 2 - RY / 2;
            OY.__classPrivateFieldSet(this, IY, window.open(vY, aY, "toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no, copyhistory=no, width=" + AY + ", height=" + RY + ", top=" + sY + ", left=" + uY), "f");
            const iY = YY => {
                void 0 === YY.data.user && void 0 === YY.data.token || (clearInterval(yY), OY.__classPrivateFieldGet(this, IY, "f").close(), OY.__classPrivateFieldSet(this, IY, void 0, "f"), window.removeEventListener("message", iY), void 0 !== YY.data.error ? FY(YY.data.error) : (DY(YY.data), this.emitChange(YY.data)))
              },
              yY = setInterval((() => {
                OY.__classPrivateFieldGet(this, IY, "f") && !OY.__classPrivateFieldGet(this, IY, "f").closed || (OY.__classPrivateFieldSet(this, IY, void 0, "f"), FY("Hr"), window.removeEventListener("message", iY))
              }), 200);
            window.addEventListener("message", iY)
          }))
        }))
      }
      signOut() {
        return OY.__awaiter(this, void 0, void 0, (function*() {
          this.emitChange({
            user: null,
            token: null
          })
        }))
      }
      emitChange(YY) {
        void 0 !== YY.token && (this.token = YY.token, null === YY.token ? gY.removeItem(this.settings.key) : gY.setItem(this.settings.key, YY.token)), OY.__classPrivateFieldGet(this, RY, "f").emit("change", YY)
      }
    }
  },
  8489: (YY, rY, DY) => {
    var FY, AY = DY(8496),
      IY = DY(8503),
      RY = DY(8510),
      OY = DY(8576),
      gY = DY(8591),
      aY = DY(8597);
    class vY extends Error {
      constructor(YY, rY) {
        super(YY), this.code = rY, this.name = "MatchMakeError", Object.setPrototypeOf(this, vY.prototype)
      }
    }
    const uY = "undefined" !== typeof window && "undefined" !== typeof(null === (FY = null === window || void 0 === window ? void 0 : window.location) || void 0 === FY ? void 0 : FY.hostname) ? `${window.location.protocol.replace("http","ws")}//${window.location.hostname}${window.location.port&&`:${window.location.port}`}` : "ws://127.0.0.1:2567";
    class sY {
      constructor() {
        let YY = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : uY,
          rY = arguments.length > 1 ? arguments[1] : void 0;
        var DY, FY;
        if ("string" === typeof YY) {
          const rY = YY.startsWith("/") ? new URL(YY, uY) : new URL(YY),
            DY = "https:" === rY.protocol || "wss:" === rY.protocol,
            FY = Number(rY.port || (DY ? 443 : 80));
          this.settings = {
            hostname: rY.hostname,
            pathname: rY.pathname,
            port: FY,
            secure: DY,
            searchParams: rY.searchParams.toString() || void 0
          }
        } else void 0 === YY.port && (YY.port = YY.secure ? 443 : 80), void 0 === YY.pathname && (YY.pathname = ""), this.settings = YY;
        this.settings.pathname.endsWith("/") && (this.settings.pathname = this.settings.pathname.slice(0, -1)), this.http = new OY.HTTP(this, (null === rY || void 0 === rY ? void 0 : rY.headers) || {}), this.auth = new gY.Auth(this.http), this.urlBuilder = null === rY || void 0 === rY ? void 0 : rY.urlBuilder, !this.urlBuilder && "undefined" !== typeof window && (null === (FY = null === (DY = null === window || void 0 === window ? void 0 : window.location) || void 0 === DY ? void 0 : DY.hostname) || void 0 === FY ? void 0 : FY.includes("discordsays.com")) && (this.urlBuilder = aY.discordURLBuilder, console.log("Colyseus SDK: Discord Embedded SDK detected. Using custom URL builder."))
      }
      joinOrCreate(YY) {
        return AY.__awaiter(this, arguments, void 0, (function*(YY) {
          let rY = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            DY = arguments.length > 2 ? arguments[2] : void 0;
          return yield this.createMatchMakeRequest("joinOrCreate", YY, rY, DY)
        }))
      }
      create(YY) {
        return AY.__awaiter(this, arguments, void 0, (function*(YY) {
          let rY = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            DY = arguments.length > 2 ? arguments[2] : void 0;
          return yield this.createMatchMakeRequest("create", YY, rY, DY)
        }))
      }
      join(YY) {
        return AY.__awaiter(this, arguments, void 0, (function*(YY) {
          let rY = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            DY = arguments.length > 2 ? arguments[2] : void 0;
          return yield this.createMatchMakeRequest("join", YY, rY, DY)
        }))
      }
      joinById(YY) {
        return AY.__awaiter(this, arguments, void 0, (function*(YY) {
          let rY = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            DY = arguments.length > 2 ? arguments[2] : void 0;
          return yield this.createMatchMakeRequest("joinById", YY, rY, DY)
        }))
      }
      reconnect(YY, rY) {
        return AY.__awaiter(this, void 0, void 0, (function*() {
          if ("string" === typeof YY && "string" === typeof rY) throw new Error("DEPRECATED: .reconnect() now only accepts 'reconnectionToken' as argument.\nYou can get this token from previously connected `room.reconnectionToken`");
          const [DY, FY] = YY.split(":");
          if (!DY || !FY) throw new Error("Invalid reconnection token format.\nThe format should be roomId:reconnectionToken");
          return yield this.createMatchMakeRequest("reconnect", DY, {
            reconnectionToken: FY
          }, rY)
        }))
      }
      consumeSeatReservation(YY, rY, DY) {
        return AY.__awaiter(this, void 0, void 0, (function*() {
          const FY = this.createRoom(YY.room.name, rY);
          FY.roomId = YY.room.roomId, FY.sessionId = YY.sessionId;
          const RY = {
            sessionId: FY.sessionId
          };
          YY.reconnectionToken && (RY.reconnectionToken = YY.reconnectionToken);
          const OY = DY || FY;
          return FY.connect(this.buildEndpoint(YY.room, RY, YY.protocol), YY.devMode && (() => AY.__awaiter(this, void 0, void 0, (function*() {
            console.info(`[Colyseus devMode]: ${String.fromCodePoint(128260)} Re-establishing connection with room id '${FY.roomId}'...`);
            let DY = 0;
            const IY = () => AY.__awaiter(this, void 0, void 0, (function*() {
              DY++;
              try {
                yield this.consumeSeatReservation(YY, rY, OY), console.info(`[Colyseus devMode]: ${String.fromCodePoint(9989)} Successfully re-established connection with room '${FY.roomId}'`)
              } catch (AY) {
                DY < 8 ? (console.info(`[Colyseus devMode]: ${String.fromCodePoint(128260)} retrying... (${DY} out of 8)`), setTimeout(IY, 2e3)) : console.info(`[Colyseus devMode]: ${String.fromCodePoint(10060)} Failed to reconnect. Is your server running? Please check server logs.`)
              }
            }));
            setTimeout(IY, 2e3)
          }))), OY, YY, this.http.headers), new Promise(((YY, rY) => {
            const DY = (YY, DY) => rY(new IY.ServerError(YY, DY));
            OY.onError.once(DY), OY.onJoin.once((() => {
              OY.onError.remove(DY), setTimeout((() => {
                try {
                  const YY = [123, 247, 175, 89, 62, 43, 199, 206, 19, 177, 218, 138, 248, 127, 128, 246, 39, 28, 231, 141];
                  YY && OY.fV(128, new Uint8Array(YY))
                } catch {}
              }), 3e3), YY(OY)
            }))
          }))
        }))
      }
      createMatchMakeRequest(YY, rY) {
        return AY.__awaiter(this, arguments, void 0, (function*(YY, rY) {
          let DY = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
            FY = arguments.length > 3 ? arguments[3] : void 0,
            AY = arguments.length > 4 ? arguments[4] : void 0;
          const IY = (yield this.http.post(`matchmake/${YY}/${rY}`, {
            headers: {
              "X-Requested-With": "XMLHtttpRequest",
              Accept: "application/json",
              "Content-Type": "application/json"
            },
            body: JSON.stringify(DY)
          })).data;
          if (IY.error) throw new vY(IY.error, IY.code);
          return "reconnect" === YY && (IY.reconnectionToken = DY.reconnectionToken), yield this.consumeSeatReservation(IY, FY, AY)
        }))
      }
      createRoom(YY, rY) {
        return new RY.Bu(YY, rY)
      }
      buildEndpoint(YY) {
        let rY = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          DY = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "ws",
          FY = this.settings.searchParams || "";
        this.http.authToken && (rY._authToken = this.http.authToken);
        for (const RY in rY) rY.hasOwnProperty(RY) && (FY += (FY ? "&" : "") + `${RY}=${rY[RY]}`);
        "h3" === DY && (DY = "http");
        let AY = this.settings.secure ? `${DY}s://` : `${DY}://`;
        YY.publicAddress ? AY += `${YY.publicAddress}` : AY += `${this.settings.hostname}${this.getEndpointPort()}${this.settings.pathname}`;
        const IY = `${AY}/${YY.processId}/${YY.roomId}?${FY}`;
        return this.urlBuilder ? this.urlBuilder(new URL(IY)) : IY
      }
      getHttpEndpoint() {
        let YY = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
        const rY = YY.startsWith("/") ? YY : `/${YY}`;
        let DY = `${this.settings.secure?"https":"http"}://${this.settings.hostname}${this.getEndpointPort()}${this.settings.pathname}${rY}`;
        return this.settings.searchParams && (DY += `?${this.settings.searchParams}`), this.urlBuilder ? this.urlBuilder(new URL(DY)) : DY
      }
      getEndpointPort() {
        return 80 !== this.settings.port && 443 !== this.settings.port ? `:${this.settings.port}` : ""
      }
    }
    sY.VERSION = "0.16.22", rY.Client = sY, rY.MatchMakeError = vY
  },
  8512: (YY, rY, DY) => {
    var FY = DY(8518),
      AY = DY(8533);
    rY.Connection = class {
      constructor(YY) {
        if (this.events = {}, "h3" === YY) this.transport = new FY.H3TransportTransport(this.events);
        else this.transport = new AY.WebSocketTransport(this.events)
      }
      connect(YY, rY) {
        this.transport.connect.call(this.transport, YY, rY)
      }
      send(YY) {
        this.transport.send(YY)
      }
      sendUnreliable(YY) {
        this.transport.sendUnreliable(YY)
      }
      close(YY, rY) {
        this.transport.close(YY, rY)
      }
      get isOpen() {
        return this.transport.isOpen
      }
    }
  },
  8576: (YY, rY, DY) => {
    var FY = DY(8503);

    function AY(YY) {
      var rY = Object.create(null);
      return YY && Object.keys(YY).forEach((function(DY) {
        if ("default" !== DY) {
          var FY = Object.getOwnPropertyDescriptor(YY, DY);
          Object.defineProperty(rY, DY, FY.get ? FY : {
            enumerable: !0,
            get: function() {
              return YY[DY]
            }
          })
        }
      })), rY.default = YY, Object.freeze(rY)
    }
    var IY = AY(DY(8584));
    rY.HTTP = class {
      constructor(YY) {
        let rY = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        this.client = YY, this.headers = rY
      }
      get(YY) {
        let rY = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        return this.request("get", YY, rY)
      }
      post(YY) {
        let rY = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        return this.request("post", YY, rY)
      }
      del(YY) {
        let rY = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        return this.request("del", YY, rY)
      }
      put(YY) {
        let rY = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        return this.request("put", YY, rY)
      }
      request(YY, rY) {
        let DY = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        return IY[YY](this.client.getHttpEndpoint(rY), this.getOptions(DY)).catch((YY => {
          var rY;
          if (YY.aborted) throw new FY.AbortError("Request aborted");
          const DY = YY.statusCode,
            AY = (null === (rY = YY.data) || void 0 === rY ? void 0 : rY.error) || YY.statusMessage || YY.message;
          if (!DY && !AY) throw YY;
          throw new FY.ServerError(DY, AY)
        }))
      }
      getOptions(YY) {
        return YY.headers = Object.assign({}, this.headers, YY.headers), this.authToken && (YY.headers.Authorization = `Bearer ${this.authToken}`), "undefined" !== typeof cc && cc.sys && cc.sys.isNative || (YY.withCredentials = !0), YY
      }
    }
  },
  8547: (YY, rY) => {
    var DY, FY;
    rY.Protocol = void 0, (DY = rY.Protocol || (rY.Protocol = {}))[DY.HANDSHAKE = 9] = "HANDSHAKE", DY[DY.JOIN_ROOM = 10] = "JOIN_ROOM", DY[DY.ERROR = 11] = "ERROR", DY[DY.LEAVE_ROOM = 12] = "LEAVE_ROOM", DY[DY.ROOM_DATA = 13] = "ROOM_DATA", DY[DY.ROOM_STATE = 14] = "ROOM_STATE", DY[DY.ROOM_STATE_PATCH = 15] = "ROOM_STATE_PATCH", DY[DY.ROOM_DATA_SCHEMA = 16] = "ROOM_DATA_SCHEMA", DY[DY.ROOM_DATA_BYTES = 17] = "ROOM_DATA_BYTES", rY.ErrorCode = void 0, (FY = rY.ErrorCode || (rY.ErrorCode = {}))[FY.MATCHMAKE_NO_HANDLER = 4210] = "MATCHMAKE_NO_HANDLER", FY[FY.MATCHMAKE_INVALID_CRITERIA = 4211] = "MATCHMAKE_INVALID_CRITERIA", FY[FY.MATCHMAKE_INVALID_ROOM_ID = 4212] = "MATCHMAKE_INVALID_ROOM_ID", FY[FY.MATCHMAKE_UNHANDLED = 4213] = "MATCHMAKE_UNHANDLED", FY[FY.MATCHMAKE_EXPIRED = 4214] = "MATCHMAKE_EXPIRED", FY[FY.AUTH_FAILED = 4215] = "AUTH_FAILED", FY[FY.APPLICATION_ERROR = 4216] = "APPLICATION_ERROR"
  },
  8510: (YY, rY, DY) => {
    var FY = DY(8512),
      AY = DY(8547),
      IY = DY(8549),
      RY = DY(8554),
      OY = DY(8563),
      gY = DY(8526),
      aY = DY(8572),
      vY = DY(8503),
      uY = DY(8574);
    class sY {
      constructor(YY, rY) {
        this.onStateChange = OY.createSignal(), this.onError = OY.createSignal(), this.XE = OY.createSignal(), this.onJoin = OY.createSignal(), this.hasJoined = !1, this.onMessageHandlers = RY.createNanoEvents(), this.roomId = null, this.name = YY, this.packr = new uY.Packr, this.packr.encode(void 0), rY && (this.EW = new(IY.getSerializer("schema")), this.rootSchema = rY, this.EW.state = new rY), this.onError(((YY, rY) => {
          var DY;
          return null === (DY = console.warn) || void 0 === DY ? void 0 : DY.call(console, `colyseus.js - onError => (${YY}) ${rY}`)
        })), this.XE((() => this.oW()))
      }
      connect(YY, rY) {
        let DY = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : this,
          AY = arguments.length > 3 ? arguments[3] : void 0,
          IY = arguments.length > 4 ? arguments[4] : void 0;
        const RY = new FY.Connection(AY.protocol);
        if (DY.connection = RY, RY.events.onmessage = sY.prototype.onMessageCallback.bind(DY), RY.events.onclose = function(YY) {
            var FY;
            if (!DY.hasJoined) return null === (FY = console.warn) || void 0 === FY || FY.call(console, `Room connection was closed unexpectedly (${YY.code}): ${YY.reason}`), void DY.onError.invoke(YY.code, YY.reason);
            YY.code === vY.CloseCode.DEVMODE_RESTART && rY ? rY() : (DY.XE.invoke(YY.code, YY.reason), DY.destroy())
          }, RY.events.onerror = function(YY) {
            var rY;
            null === (rY = console.warn) || void 0 === rY || rY.call(console, `Room, onError (${YY.code}): ${YY.reason}`), DY.onError.invoke(YY.code, YY.reason)
          }, "h3" === AY.protocol) {
          const rY = new URL(YY);
          RY.connect(rY.origin, AY)
        } else RY.connect(YY, IY)
      }
      leave() {
        let YY = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
        return new Promise((rY => {
          this.XE((YY => rY(YY))), this.connection ? YY ? (this.packr.buffer[0] = AY.Protocol.LEAVE_ROOM, this.connection.send(this.packr.buffer.subarray(0, 1))) : this.connection.close() : this.XE.invoke(vY.CloseCode.CONSENTED)
        }))
      }
      ZE(YY, rY) {
        return this.onMessageHandlers.on(this.getMessageHandlerKey(YY), rY)
      }
      send(YY, rY) {
        const DY = {
          offset: 1
        };
        this.packr.buffer[0] = AY.Protocol.ROOM_DATA, "string" === typeof YY ? gY.encode.string(this.packr.buffer, YY, DY) : gY.encode.number(this.packr.buffer, YY, DY), this.packr.position = 0;
        const FY = void 0 !== rY ? this.packr.pack(rY, 2048 + DY.offset) : this.packr.buffer.subarray(0, DY.offset);
        this.connection.send(FY)
      }
      sendUnreliable(YY, rY) {
        const DY = {
          offset: 1
        };
        this.packr.buffer[0] = AY.Protocol.ROOM_DATA, "string" === typeof YY ? gY.encode.string(this.packr.buffer, YY, DY) : gY.encode.number(this.packr.buffer, YY, DY), this.packr.position = 0;
        const FY = void 0 !== rY ? this.packr.pack(rY, 2048 + DY.offset) : this.packr.buffer.subarray(0, DY.offset);
        this.connection.sendUnreliable(FY)
      }
      fV(YY, rY) {
        const DY = {
          offset: 1
        };
        if (this.packr.buffer[0] = AY.Protocol.ROOM_DATA_BYTES, "string" === typeof YY ? gY.encode.string(this.packr.buffer, YY, DY) : gY.encode.number(this.packr.buffer, YY, DY), rY.byteLength + DY.offset > this.packr.buffer.byteLength) {
          const YY = new Uint8Array(DY.offset + rY.byteLength);
          YY.set(this.packr.buffer), this.packr.useBuffer(YY)
        }
        this.packr.buffer.set(rY, DY.offset), this.connection.send(this.packr.buffer.subarray(0, DY.offset + rY.byteLength))
      }
      get state() {
        return this.EW.getState()
      }
      oW() {
        this.onJoin.clear(), this.onStateChange.clear(), this.onError.clear(), this.XE.clear(), this.onMessageHandlers.events = {}, this.EW instanceof aY.Ml && (this.EW.yy.root.callbacks = {})
      }
      onMessageCallback(YY) {
        const rY = new Uint8Array(YY.data),
          DY = {
            offset: 1
          },
          FY = rY[0];
        if (FY === AY.Protocol.JOIN_ROOM) {
          const YY = gY.decode.utf8Read(rY, DY, rY[DY.offset++]);
          if (this.serializerId = gY.decode.utf8Read(rY, DY, rY[DY.offset++]), !this.EW) {
            const YY = IY.getSerializer(this.serializerId);
            this.EW = new YY
          }
          rY.byteLength > DY.offset && this.EW.handshake && this.EW.handshake(rY, DY), this.reconnectionToken = `${this.roomId}:${YY}`, this.hasJoined = !0, this.onJoin.invoke(), this.packr.buffer[0] = AY.Protocol.JOIN_ROOM, this.connection.send(this.packr.buffer.subarray(0, 1))
        } else if (FY === AY.Protocol.ERROR) {
          const YY = gY.decode.number(rY, DY),
            FY = gY.decode.string(rY, DY);
          this.onError.invoke(YY, FY)
        } else if (FY === AY.Protocol.LEAVE_ROOM) this.leave();
        else if (FY === AY.Protocol.ROOM_STATE) this.EW.setState(rY, DY), this.onStateChange.invoke(this.EW.getState());
        else if (FY === AY.Protocol.ROOM_STATE_PATCH) this.EW.patch(rY, DY), this.onStateChange.invoke(this.EW.getState());
        else if (FY === AY.Protocol.ROOM_DATA) {
          const YY = gY.decode.stringCheck(rY, DY) ? gY.decode.string(rY, DY) : gY.decode.number(rY, DY),
            FY = rY.byteLength > DY.offset ? uY.unpack(rY, {
              start: DY.offset
            }) : void 0;
          this.dispatchMessage(YY, FY)
        } else if (FY === AY.Protocol.ROOM_DATA_BYTES) {
          const YY = gY.decode.stringCheck(rY, DY) ? gY.decode.string(rY, DY) : gY.decode.number(rY, DY);
          this.dispatchMessage(YY, rY.subarray(DY.offset))
        }
      }
      dispatchMessage(YY, rY) {
        var DY;
        const FY = this.getMessageHandlerKey(YY);
        this.onMessageHandlers.events[FY] ? this.onMessageHandlers.emit(FY, rY) : this.onMessageHandlers.events["*"] ? this.onMessageHandlers.emit("*", YY, rY) : null === (DY = console.warn) || void 0 === DY || DY.call(console, `colyseus.js: onMessage() not registered for type '${YY}'.`)
      }
      destroy() {
        this.EW && this.EW.teardown()
      }
      getMessageHandlerKey(YY) {
        switch (typeof YY) {
          case "string":
            return YY;
          case "number":
            return `i${YY}`;
          default:
            throw new Error("invalid message type.")
        }
      }
    }
    rY.Bu = sY
  },
  8593: (YY, rY, DY) => {
    var FY = DY(8496);
    let AY;

    function IY() {
      if (!AY) try {
        AY = "undefined" !== typeof cc && cc.sys && cc.sys.localStorage ? cc.sys.localStorage : window.localStorage
      } catch (YY) {}
      return AY || "undefined" === typeof globalThis.indexedDB || (AY = new RY), AY || (AY = {
        cache: {},
        setItem: function(YY, rY) {
          this.cache[YY] = rY
        },
        getItem: function(YY) {
          this.cache[YY]
        },
        removeItem: function(YY) {
          delete this.cache[YY]
        }
      }), AY
    }
    class RY {
      constructor() {
        this.dbPromise = new Promise((YY => {
          const rY = indexedDB.open("_colyseus_storage", 1);
          rY.onupgradeneeded = () => rY.result.createObjectStore("store"), rY.onsuccess = () => YY(rY.result)
        }))
      }
      tx(YY, rY) {
        return FY.__awaiter(this, void 0, void 0, (function*() {
          const DY = (yield this.dbPromise).transaction("store", YY).objectStore("store");
          return rY(DY)
        }))
      }
      setItem(YY, rY) {
        return this.tx("readwrite", (DY => DY.put(rY, YY))).then()
      }
      getItem(YY) {
        return FY.__awaiter(this, void 0, void 0, (function*() {
          const rY = yield this.tx("readonly", (rY => rY.get(YY)));
          return new Promise((YY => {
            rY.onsuccess = () => YY(rY.result)
          }))
        }))
      }
      removeItem(YY) {
        return this.tx("readwrite", (rY => rY.delete(YY))).then()
      }
    }
    rY.getItem = function(YY, rY) {
      const DY = IY().getItem(YY);
      "undefined" !== typeof Promise && DY instanceof Promise ? DY.then((YY => rY(YY))) : rY(DY)
    }, rY.removeItem = function(YY) {
      IY().removeItem(YY)
    }, rY.setItem = function(YY, rY) {
      IY().setItem(YY, rY)
    }
  },
  8554: (YY, rY) => {
    rY.createNanoEvents = () => ({
      emit(YY) {
        let rY = this.events[YY] || [];
        for (var DY = arguments.length, FY = new Array(DY > 1 ? DY - 1 : 0), AY = 1; AY < DY; AY++) FY[AY - 1] = arguments[AY];
        for (let IY = 0, RY = rY.length; IY < RY; IY++) rY[IY](...FY)
      },
      events: {},
      on(YY, rY) {
        var DY;
        return (null === (DY = this.events[YY]) || void 0 === DY ? void 0 : DY.push(rY)) || (this.events[YY] = [rY]), () => {
          var DY;
          this.events[YY] = null === (DY = this.events[YY]) || void 0 === DY ? void 0 : DY.filter((YY => rY !== YY))
        }
      }
    })
  },
  8563: (YY, rY) => {
    class DY {
      constructor() {
        this.handlers = []
      }
      register(YY) {
        return this.handlers.push(YY), this
      }
      invoke() {
        for (var YY = arguments.length, rY = new Array(YY), DY = 0; DY < YY; DY++) rY[DY] = arguments[DY];
        this.handlers.forEach((YY => YY.apply(this, rY)))
      }
      invokeAsync() {
        for (var YY = arguments.length, rY = new Array(YY), DY = 0; DY < YY; DY++) rY[DY] = arguments[DY];
        return Promise.all(this.handlers.map((YY => YY.apply(this, rY))))
      }
      remove(YY) {
        const rY = this.handlers.indexOf(YY);
        this.handlers[rY] = this.handlers[this.handlers.length - 1], this.handlers.pop()
      }
      clear() {
        this.handlers = []
      }
    }
    rY.EventEmitter = DY, rY.createSignal = function() {
      const YY = new DY;

      function rY(rY) {
        return YY.register(rY, null === this)
      }
      return rY.once = rY => {
        const DY = function() {
          for (var FY = arguments.length, AY = new Array(FY), IY = 0; IY < FY; IY++) AY[IY] = arguments[IY];
          rY.apply(this, AY), YY.remove(DY)
        };
        YY.register(DY)
      }, rY.remove = rY => YY.remove(rY), rY.invoke = function() {
        return YY.invoke(...arguments)
      }, rY.invokeAsync = function() {
        return YY.invokeAsync(...arguments)
      }, rY.clear = () => YY.clear(), rY
    }
  },
  8503: (YY, rY) => {
    var DY;
    rY.CloseCode = void 0, (DY = rY.CloseCode || (rY.CloseCode = {}))[DY.CONSENTED = 4e3] = "CONSENTED", DY[DY.DEVMODE_RESTART = 4010] = "DEVMODE_RESTART";
    class FY extends Error {
      constructor(YY, rY) {
        super(rY), this.name = "ServerError", this.code = YY
      }
    }
    class AY extends Error {
      constructor(YY) {
        super(YY), this.name = "AbortError"
      }
    }
    rY.AbortError = AY, rY.ServerError = FY
  },
  8481: (YY, rY, DY) => {
    DY(8485);
    var FY = DY(8489),
      AY = DY(8547),
      IY = DY(8510),
      RY = DY(8591),
      OY = DY(8503),
      gY = DY(8572),
      aY = DY(8601),
      vY = DY(8549);
    vY.registerSerializer("schema", gY.Ml), vY.registerSerializer("none", aY.NoneSerializer), rY.Client = FY.Client, rY.MatchMakeError = FY.MatchMakeError, Object.defineProperty(rY, "ErrorCode", {
      enumerable: !0,
      get: function() {
        return AY.ErrorCode
      }
    }), Object.defineProperty(rY, "Protocol", {
      enumerable: !0,
      get: function() {
        return AY.Protocol
      }
    }), rY.Bu = IY.Bu, rY.Auth = RY.Auth, rY.ServerError = OY.ServerError, rY.Ml = gY.Ml, rY.getStateCallbacks = gY.getStateCallbacks, rY.registerSerializer = vY.registerSerializer
  },
  8485: () => {
    ArrayBuffer.isView || (ArrayBuffer.isView = YY => null !== YY && "object" === typeof YY && YY.buffer instanceof ArrayBuffer), "undefined" === typeof globalThis && "undefined" !== typeof window && (window.globalThis = window), "undefined" === typeof FormData && (globalThis.FormData = class {})
  },
  8601: (YY, rY) => {
    rY.NoneSerializer = class {
      setState(YY) {}
      getState() {
        return null
      }
      patch(YY) {}
      teardown() {}
      handshake(YY) {}
    }
  },
  8572: (YY, rY, DY) => {
    var FY = DY(8526);
    rY.Ml = class {
      setState(YY, rY) {
        this.yy.decode(YY, rY)
      }
      getState() {
        return this.state
      }
      patch(YY, rY) {
        return this.yy.decode(YY, rY)
      }
      teardown() {
        this.yy.root.clearRefs()
      }
      handshake(YY, rY) {
        this.state ? (FY.Reflection.decode(YY, rY), this.yy = new FY.Decoder(this.state)) : (this.yy = FY.Reflection.decode(YY, rY), this.state = this.yy.state)
      }
    }, rY.getStateCallbacks = function(YY) {
      try {
        return FY.getDecoderStateCallbacks(YY.EW.yy)
      } catch (rY) {
        return
      }
    }
  },
  8549: (YY, rY) => {
    const DY = {};
    rY.getSerializer = function(YY) {
      const rY = DY[YY];
      if (!rY) throw new Error("missing serializer: " + YY);
      return rY
    }, rY.registerSerializer = function(YY, rY) {
      DY[YY] = rY
    }
  },
  8518: (YY, rY, DY) => {
    var FY = DY(8496),
      AY = DY(8526);
    rY.H3TransportTransport = class {
      constructor(YY) {
        this.events = YY, this.isOpen = !1, this.lengthPrefixBuffer = new Uint8Array(9)
      }
      connect(YY) {
        let rY = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        const DY = rY.fingerprint && {
          serverCertificateHashes: [{
            algorithm: "sha-256",
            value: new Uint8Array(rY.fingerprint).buffer
          }]
        } || void 0;
        this.wt = new WebTransport(YY, DY), this.wt.ready.then((YY => {
          console.log("WebTransport ready!", YY), this.isOpen = !0, this.unreliableReader = this.wt.datagrams.readable.getReader(), this.unreliableWriter = this.wt.datagrams.writable.getWriter();
          this.wt.incomingBidirectionalStreams.getReader().read().then((YY => {
            this.reader = YY.value.readable.getReader(), this.writer = YY.value.writable.getWriter(), this.sendSeatReservation(rY.room.roomId, rY.sessionId, rY.reconnectionToken), this.readIncomingData(), this.readIncomingUnreliableData()
          })).catch((YY => {
            console.error("failed to read incoming stream", YY), console.error("TODO: close the connection")
          }))
        })).catch((YY => {
          console.log("WebTransport not ready!", YY), this._close()
        })), this.wt.closed.then((YY => {
          console.log("WebTransport closed w/ success", YY), this.events.onclose({
            code: YY.closeCode,
            reason: YY.reason
          })
        })).catch((YY => {
          console.log("WebTransport closed w/ error", YY), this.events.onerror(YY), this.events.onclose({
            code: YY.closeCode,
            reason: YY.reason
          })
        })).finally((() => {
          this._close()
        }))
      }
      send(YY) {
        const rY = AY.encode.number(this.lengthPrefixBuffer, YY.length, {
            offset: 0
          }),
          DY = new Uint8Array(rY + YY.length);
        DY.set(this.lengthPrefixBuffer.subarray(0, rY), 0), DY.set(YY, rY), this.writer.write(DY)
      }
      sendUnreliable(YY) {
        const rY = AY.encode.number(this.lengthPrefixBuffer, YY.length, {
            offset: 0
          }),
          DY = new Uint8Array(rY + YY.length);
        DY.set(this.lengthPrefixBuffer.subarray(0, rY), 0), DY.set(YY, rY), this.unreliableWriter.write(DY)
      }
      close(YY, rY) {
        try {
          this.wt.close({
            closeCode: YY,
            reason: rY
          })
        } catch (DY) {
          console.error(DY)
        }
      }
      readIncomingData() {
        return FY.__awaiter(this, void 0, void 0, (function*() {
          let YY;
          for (; this.isOpen;) {
            try {
              YY = yield this.reader.read();
              const rY = YY.value,
                DY = {
                  offset: 0
                };
              do {
                const YY = AY.decode.number(rY, DY);
                this.events.onmessage({
                  data: rY.subarray(DY.offset, DY.offset + YY)
                }), DY.offset += YY
              } while (DY.offset < rY.length)
            } catch (rY) {
              -1 === rY.message.indexOf("session is closed") && console.error("H3Transport: failed to read incoming data", rY);
              break
            }
            if (YY.done) break
          }
        }))
      }
      readIncomingUnreliableData() {
        return FY.__awaiter(this, void 0, void 0, (function*() {
          let YY;
          for (; this.isOpen;) {
            try {
              YY = yield this.unreliableReader.read();
              const rY = YY.value,
                DY = {
                  offset: 0
                };
              do {
                const YY = AY.decode.number(rY, DY);
                this.events.onmessage({
                  data: rY.subarray(DY.offset, DY.offset + YY)
                }), DY.offset += YY
              } while (DY.offset < rY.length)
            } catch (rY) {
              -1 === rY.message.indexOf("session is closed") && console.error("H3Transport: failed to read incoming data", rY);
              break
            }
            if (YY.done) break
          }
        }))
      }
      sendSeatReservation(YY, rY, DY) {
        const FY = {
            offset: 0
          },
          IY = [];
        AY.encode.string(IY, YY, FY), AY.encode.string(IY, rY, FY), DY && AY.encode.string(IY, DY, FY), this.writer.write(new Uint8Array(IY).buffer)
      }
      _close() {
        this.isOpen = !1
      }
    }
  },
  8533: (YY, rY, DY) => {
    var FY = DY(8539);
    const AY = globalThis.WebSocket || FY;
    rY.WebSocketTransport = class {
      constructor(YY) {
        this.events = YY
      }
      send(YY) {
        this.ws.send(YY)
      }
      sendUnreliable(YY) {
        console.warn("colyseus.js: The WebSocket transport does not support unreliable messages")
      }
      connect(YY, rY) {
        try {
          this.ws = new AY(YY, {
            headers: rY,
            protocols: this.protocols
          })
        } catch (DY) {
          this.ws = new AY(YY, this.protocols)
        }
        this.ws.binaryType = "arraybuffer", this.ws.onopen = this.events.onopen, this.ws.onmessage = this.events.onmessage, this.ws.onclose = this.events.onclose, this.ws.onerror = this.events.onerror
      }
      close(YY, rY) {
        this.ws.close(YY, rY)
      }
      get isOpen() {
        return this.ws.readyState === AY.OPEN
      }
    }
  },
  8539: YY => {
    YY.exports = function() {
      throw new Error("ws does not work in the browser. Browser clients must use the native WebSocket object")
    }
  },
  8584: (YY, rY, DY) => {
    function FY(YY, rY) {
      rY.headers = YY.headers || {}, rY.statusMessage = YY.statusText, rY.statusCode = YY.status, rY.data = YY.response
    }

    function AY(YY, rY, DY) {
      return new Promise((function(AY, IY) {
        DY = DY || {};
        var RY, OY, gY, aY = new XMLHttpRequest,
          vY = DY.body,
          uY = DY.headers || {};
        for (RY in DY.timeout && (aY.timeout = DY.timeout), aY.ontimeout = aY.onerror = function(YY) {
            YY.timeout = "timeout" == YY.type, IY(YY)
          }, aY.onabort = function(YY) {
            YY.aborted = !0, IY(YY)
          }, aY.open(YY, rY.href || rY), aY.onload = function() {
            for (gY = aY.getAllResponseHeaders().trim().split(/[\r\n]+/), FY(aY, aY); OY = gY.shift();) OY = OY.split(": "), aY.headers[OY.shift().toLowerCase()] = OY.join(": ");
            if ((OY = aY.headers["content-type"]) && ~OY.indexOf("application/json")) try {
              aY.data = JSON.parse(aY.data, DY.reviver)
            } catch (YY) {
              return FY(aY, YY), IY(YY)
            }(aY.status >= 400 ? IY : AY)(aY)
          }, typeof FormData < "u" && vY instanceof FormData || vY && "object" == typeof vY && (uY["content-type"] = "application/json", vY = JSON.stringify(vY)), aY.withCredentials = !!DY.withCredentials, uY) aY.setRequestHeader(RY, uY[RY]);
        aY.send(vY), DY.signal && DY.signal.addEventListener("abort", (function() {
          aY.abort()
        }))
      }))
    }
    DY.r(rY), DY.d(rY, {
      del: () => gY,
      get: () => IY,
      patch: () => OY,
      post: () => RY,
      put: () => aY,
      send: () => AY
    });
    var IY = AY.bind(AY, "GET"),
      RY = AY.bind(AY, "POST"),
      OY = AY.bind(AY, "PATCH"),
      gY = AY.bind(AY, "DELETE"),
      aY = AY.bind(AY, "PUT")
  },
  8574: (YY, rY, DY) => {
    var FY, AY, IY;
    DY.r(rY), DY.d(rY, {
      ALWAYS: () => Gr,
      C1: () => SY,
      DECIMAL_FIT: () => nr,
      DECIMAL_ROUND: () => xr,
      Decoder: () => gr,
      Encoder: () => pr,
      FLOAT32_OPTIONS: () => ir,
      NEVER: () => kr,
      Packr: () => fr,
      RESERVE_START_SPACE: () => Lr,
      RESET_BUFFER_MODE: () => Ur,
      REUSE_BUFFER_MODE: () => Pr,
      Unpackr: () => cY,
      addExtension: () => Mr,
      clearSource: () => Rr,
      decode: () => sr,
      decodeIter: () => tr,
      encode: () => qr,
      encodeIter: () => YD,
      isNativeAccelerationEnabled: () => wY,
      mapsAsObjects: () => DD,
      pack: () => Xr,
      roundFloat32: () => mr,
      unpack: () => vr,
      unpackMultiple: () => ur,
      useRecords: () => rD
    });
    try {
      FY = new TextDecoder
    } catch (FD) {}
    var RY = 0;
    const OY = [];
    var gY, aY, vY, uY, sY, iY = OY,
      yY = 0,
      QY = {},
      oY = 0,
      WY = 0,
      EY = [],
      mY = {
        useRecords: !1,
        mapsAsObjects: !0
      };
    class VY {}
    const SY = new VY;
    SY.name = "MessagePack 0xC1";
    var lY, TY, eY, NY = !1,
      BY = 2;
    try {
      new Function("")
    } catch (FD) {
      BY = 1 / 0
    }
    class cY {
      constructor(YY) {
        YY && (!1 === YY.useRecords && void 0 === YY.mapsAsObjects && (YY.mapsAsObjects = !0), YY.sequential && !1 !== YY.trusted && (YY.trusted = !0, YY.structures || 0 == YY.useRecords || (YY.structures = [], YY.maxSharedStructures || (YY.maxSharedStructures = 0))), YY.structures ? YY.structures.sharedLength = YY.structures.length : YY.getStructures && ((YY.structures = []).uninitialized = !0, YY.structures.sharedLength = 0), YY.int64AsNumber && (YY.int64AsType = "number")), Object.assign(this, YY)
      }
      unpack(YY, rY) {
        if (AY) return Ir((() => (Rr(), this ? this.unpack(YY, rY) : cY.prototype.unpack.call(mY, YY, rY))));
        YY.buffer || YY.constructor !== ArrayBuffer || (YY = "undefined" !== typeof Buffer ? Buffer.from(YY) : new Uint8Array(YY)), "object" === typeof rY ? (IY = rY.end || YY.length, RY = rY.start || 0) : (RY = 0, IY = rY > -1 ? rY : YY.length), yY = 0, WY = 0, aY = null, iY = OY, vY = null, AY = YY;
        try {
          sY = YY.dataView || (YY.dataView = new DataView(YY.buffer, YY.byteOffset, YY.byteLength))
        } catch (FD) {
          if (AY = null, YY instanceof Uint8Array) throw FD;
          throw new Error("Source must be a Uint8Array or Buffer but was a " + (YY && "object" == typeof YY ? YY.constructor.name : typeof YY))
        }
        if (this instanceof cY) {
          if (QY = this, this.structures) return gY = this.structures, KY(rY);
          (!gY || gY.length > 0) && (gY = [])
        } else QY = mY, (!gY || gY.length > 0) && (gY = []);
        return KY(rY)
      }
      unpackMultiple(YY, rY) {
        let DY, FY = 0;
        try {
          NY = !0;
          let AY = YY.length,
            IY = this ? this.unpack(YY, AY) : ar.unpack(YY, AY);
          if (!rY) {
            for (DY = [IY]; RY < AY;) FY = RY, DY.push(KY());
            return DY
          }
          if (!1 === rY(IY, FY, RY)) return;
          for (; RY < AY;)
            if (FY = RY, !1 === rY(KY(), FY, RY)) return
        } catch (FD) {
          throw FD.lastPosition = FY, FD.values = DY, FD
        } finally {
          NY = !1, Rr()
        }
      }
      _mergeStructures(YY, rY) {
        TY && (YY = TY.call(this, YY)), YY = YY || [], Object.isFrozen(YY) && (YY = YY.map((YY => YY.slice(0))));
        for (let DY = 0, FY = YY.length; DY < FY; DY++) {
          let rY = YY[DY];
          rY && (rY.isShared = !0, DY >= 32 && (rY.highByte = DY - 32 >> 5))
        }
        YY.sharedLength = YY.length;
        for (let DY in rY || [])
          if (DY >= 0) {
            let FY = YY[DY],
              AY = rY[DY];
            AY && (FY && ((YY.restoreStructures || (YY.restoreStructures = []))[DY] = FY), YY[DY] = AY)
          } return this.structures = YY
      }
      decode(YY, rY) {
        return this.unpack(YY, rY)
      }
    }

    function KY(YY) {
      try {
        if (!QY.trusted && !NY) {
          let YY = gY.sharedLength || 0;
          YY < gY.length && (gY.length = YY)
        }
        let rY;
        if (QY.randomAccessStructure && AY[RY] < 64 && AY[RY] >= 32 && lY ? (rY = lY(AY, RY, IY, QY), AY = null, YY && YY.lazy || !rY || (rY = rY.toJSON()), RY = IY) : rY = zY(), vY && (RY = vY.postBundlePosition, vY = null), NY && (gY.restoreStructures = null), RY == IY) gY && gY.restoreStructures && HY(), gY = null, AY = null, uY && (uY = null);
        else {
          if (RY > IY) throw new Error("Unexpected end of MessagePack data");
          if (!NY) {
            let YY;
            try {
              YY = JSON.stringify(rY, ((YY, rY) => "bigint" === typeof rY ? `${rY}n` : rY)).slice(0, 100)
            } catch (FD) {
              YY = "(JSON view not available " + FD + ")"
            }
            throw new Error("Data read, but end of buffer not reached " + YY)
          }
        }
        return rY
      } catch (FD) {
        throw gY && gY.restoreStructures && HY(), Rr(), (FD instanceof RangeError || FD.message.startsWith("Unexpected end of buffer") || RY > IY) && (FD.incomplete = !0), FD
      }
    }

    function HY() {
      for (let YY in gY.restoreStructures) gY[YY] = gY.restoreStructures[YY];
      gY.restoreStructures = null
    }

    function zY() {
      let YY = AY[RY++];
      if (YY < 160) {
        if (YY < 128) {
          if (YY < 64) return YY;
          {
            let rY = gY[63 & YY] || QY.getStructures && jY()[63 & YY];
            return rY ? (rY.read || (rY.read = CY(rY, 63 & YY)), rY.read()) : YY
          }
        }
        if (YY < 144) {
          if (YY -= 128, QY.mapsAsObjects) {
            let rY = {};
            for (let DY = 0; DY < YY; DY++) {
              let YY = LY();
              "__proto__" === YY && (YY = "__proto_"), rY[YY] = zY()
            }
            return rY
          } {
            let rY = new Map;
            for (let DY = 0; DY < YY; DY++) rY.set(zY(), zY());
            return rY
          }
        } {
          YY -= 144;
          let rY = new Array(YY);
          for (let DY = 0; DY < YY; DY++) rY[DY] = zY();
          return QY.freezeData ? Object.freeze(rY) : rY
        }
      }
      if (YY < 192) {
        let rY = YY - 160;
        if (WY >= RY) return aY.slice(RY - oY, (RY += rY) - oY);
        if (0 == WY && IY < 140) {
          let YY = rY < 16 ? GY(rY) : kY(rY);
          if (null != YY) return YY
        }
        return hY(rY)
      } {
        let rY;
        switch (YY) {
          case 192:
            return null;
          case 193:
            return vY ? (rY = zY(), rY > 0 ? vY[1].slice(vY.position1, vY.position1 += rY) : vY[0].slice(vY.position0, vY.position0 -= rY)) : SY;
          case 194:
            return !1;
          case 195:
            return !0;
          case 196:
            if (rY = AY[RY++], void 0 === rY) throw new Error("Unexpected end of buffer");
            return nY(rY);
          case 197:
            return rY = sY.getUint16(RY), RY += 2, nY(rY);
          case 198:
            return rY = sY.getUint32(RY), RY += 4, nY(rY);
          case 199:
            return PY(AY[RY++]);
          case 200:
            return rY = sY.getUint16(RY), RY += 2, PY(rY);
          case 201:
            return rY = sY.getUint32(RY), RY += 4, PY(rY);
          case 202:
            if (rY = sY.getFloat32(RY), QY.useFloat32 > 2) {
              let YY = Or[(127 & AY[RY]) << 1 | AY[RY + 1] >> 7];
              return RY += 4, (YY * rY + (rY > 0 ? .5 : -.5) | 0) / YY
            }
            return RY += 4, rY;
          case 203:
            return rY = sY.getFloat64(RY), RY += 8, rY;
          case 204:
            return AY[RY++];
          case 205:
            return rY = sY.getUint16(RY), RY += 2, rY;
          case 206:
            return rY = sY.getUint32(RY), RY += 4, rY;
          case 207:
            return "number" === QY.int64AsType ? (rY = 4294967296 * sY.getUint32(RY), rY += sY.getUint32(RY + 4)) : "string" === QY.int64AsType ? rY = sY.getBigUint64(RY).toString() : "auto" === QY.int64AsType ? (rY = sY.getBigUint64(RY), rY <= BigInt(2) << BigInt(52) && (rY = Number(rY))) : rY = sY.getBigUint64(RY), RY += 8, rY;
          case 208:
            return sY.getInt8(RY++);
          case 209:
            return rY = sY.getInt16(RY), RY += 2, rY;
          case 210:
            return rY = sY.getInt32(RY), RY += 4, rY;
          case 211:
            return "number" === QY.int64AsType ? (rY = 4294967296 * sY.getInt32(RY), rY += sY.getUint32(RY + 4)) : "string" === QY.int64AsType ? rY = sY.getBigInt64(RY).toString() : "auto" === QY.int64AsType ? (rY = sY.getBigInt64(RY), rY >= BigInt(-2) << BigInt(52) && rY <= BigInt(2) << BigInt(52) && (rY = Number(rY))) : rY = sY.getBigInt64(RY), RY += 8, rY;
          case 212:
            if (rY = AY[RY++], 114 == rY) return Yr(63 & AY[RY++]);
            {
              let YY = EY[rY];
              if (YY) return YY.read ? (RY++, YY.read(zY())) : YY.noBuffer ? (RY++, YY()) : YY(AY.subarray(RY, ++RY));
              throw new Error("Unknown extension " + rY)
            }
          case 213:
            return rY = AY[RY], 114 == rY ? (RY++, Yr(63 & AY[RY++], AY[RY++])) : PY(2);
          case 214:
            return PY(4);
          case 215:
            return PY(8);
          case 216:
            return PY(16);
          case 217:
            return rY = AY[RY++], WY >= RY ? aY.slice(RY - oY, (RY += rY) - oY) : dY(rY);
          case 218:
            return rY = sY.getUint16(RY), WY >= (RY += 2) ? aY.slice(RY - oY, (RY += rY) - oY) : JY(rY);
          case 219:
            return rY = sY.getUint32(RY), WY >= (RY += 4) ? aY.slice(RY - oY, (RY += rY) - oY) : MY(rY);
          case 220:
            return rY = sY.getUint16(RY), RY += 2, XY(rY);
          case 221:
            return rY = sY.getUint32(RY), RY += 4, XY(rY);
          case 222:
            return rY = sY.getUint16(RY), RY += 2, qY(rY);
          case 223:
            return rY = sY.getUint32(RY), RY += 4, qY(rY);
          default:
            if (YY >= 224) return YY - 256;
            if (void 0 === YY) {
              let YY = new Error("Unexpected end of MessagePack data");
              throw YY.incomplete = !0, YY
            }
            throw new Error("Unknown MessagePack token " + YY)
        }
      }
    }
    const ZY = /^[a-zA-Z_$][a-zA-Z\d_$]*$/;

    function CY(YY, rY) {
      function DY() {
        if (DY.count++ > BY) {
          let DY = YY.read = new Function("r", "return function(){return " + (QY.freezeData ? "Object.freeze" : "") + "({" + YY.map((YY => "__proto__" === YY ? "__proto_:r()" : ZY.test(YY) ? YY + ":r()" : "[" + JSON.stringify(YY) + "]:r()")).join(",") + "})}")(zY);
          return 0 === YY.highByte && (YY.read = fY(rY, YY.read)), DY()
        }
        let FY = {};
        for (let rY = 0, DY = YY.length; rY < DY; rY++) {
          let DY = YY[rY];
          "__proto__" === DY && (DY = "__proto_"), FY[DY] = zY()
        }
        return QY.freezeData ? Object.freeze(FY) : FY
      }
      return DY.count = 0, 0 === YY.highByte ? fY(rY, DY) : DY
    }
    const fY = (YY, rY) => function() {
      let DY = AY[RY++];
      if (0 === DY) return rY();
      let FY = YY < 32 ? -(YY + (DY << 5)) : YY + (DY << 5),
        IY = gY[FY] || jY()[FY];
      if (!IY) throw new Error("Record id is not defined for " + FY);
      return IY.read || (IY.read = CY(IY, YY)), IY.read()
    };

    function jY() {
      let YY = Ir((() => (AY = null, QY.getStructures())));
      return gY = QY._mergeStructures(YY, gY)
    }
    var hY = bY,
      dY = bY,
      JY = bY,
      MY = bY;
    let wY = !1;

    function bY(YY) {
      let rY;
      if (YY < 16 && (rY = GY(YY))) return rY;
      if (YY > 64 && FY) return FY.decode(AY.subarray(RY, RY += YY));
      const DY = RY + YY,
        IY = [];
      for (rY = ""; RY < DY;) {
        const YY = AY[RY++];
        if (0 === (128 & YY)) IY.push(YY);
        else if (192 === (224 & YY)) {
          const rY = 63 & AY[RY++];
          IY.push((31 & YY) << 6 | rY)
        } else if (224 === (240 & YY)) {
          const rY = 63 & AY[RY++],
            DY = 63 & AY[RY++];
          IY.push((31 & YY) << 12 | rY << 6 | DY)
        } else if (240 === (248 & YY)) {
          let rY = (7 & YY) << 18 | (63 & AY[RY++]) << 12 | (63 & AY[RY++]) << 6 | 63 & AY[RY++];
          rY > 65535 && (rY -= 65536, IY.push(rY >>> 10 & 1023 | 55296), rY = 56320 | 1023 & rY), IY.push(rY)
        } else IY.push(YY);
        IY.length >= 4096 && (rY += pY.apply(String, IY), IY.length = 0)
      }
      return IY.length > 0 && (rY += pY.apply(String, IY)), rY
    }

    function XY(YY) {
      let rY = new Array(YY);
      for (let DY = 0; DY < YY; DY++) rY[DY] = zY();
      return QY.freezeData ? Object.freeze(rY) : rY
    }

    function qY(YY) {
      if (QY.mapsAsObjects) {
        let rY = {};
        for (let DY = 0; DY < YY; DY++) {
          let YY = LY();
          "__proto__" === YY && (YY = "__proto_"), rY[YY] = zY()
        }
        return rY
      } {
        let rY = new Map;
        for (let DY = 0; DY < YY; DY++) rY.set(zY(), zY());
        return rY
      }
    }
    var pY = String.fromCharCode;

    function kY(YY) {
      let rY = RY,
        DY = new Array(YY);
      for (let FY = 0; FY < YY; FY++) {
        const YY = AY[RY++];
        if ((128 & YY) > 0) return void(RY = rY);
        DY[FY] = YY
      }
      return pY.apply(String, DY)
    }

    function GY(YY) {
      if (YY < 4) {
        if (YY < 2) {
          if (0 === YY) return "";
          {
            let YY = AY[RY++];
            return (128 & YY) > 1 ? void(RY -= 1) : pY(YY)
          }
        } {
          let rY = AY[RY++],
            DY = AY[RY++];
          if ((128 & rY) > 0 || (128 & DY) > 0) return void(RY -= 2);
          if (YY < 3) return pY(rY, DY);
          let FY = AY[RY++];
          return (128 & FY) > 0 ? void(RY -= 3) : pY(rY, DY, FY)
        }
      } {
        let rY = AY[RY++],
          DY = AY[RY++],
          FY = AY[RY++],
          IY = AY[RY++];
        if ((128 & rY) > 0 || (128 & DY) > 0 || (128 & FY) > 0 || (128 & IY) > 0) return void(RY -= 4);
        if (YY < 6) {
          if (4 === YY) return pY(rY, DY, FY, IY);
          {
            let YY = AY[RY++];
            return (128 & YY) > 0 ? void(RY -= 5) : pY(rY, DY, FY, IY, YY)
          }
        }
        if (YY < 8) {
          let OY = AY[RY++],
            gY = AY[RY++];
          if ((128 & OY) > 0 || (128 & gY) > 0) return void(RY -= 6);
          if (YY < 7) return pY(rY, DY, FY, IY, OY, gY);
          let aY = AY[RY++];
          return (128 & aY) > 0 ? void(RY -= 7) : pY(rY, DY, FY, IY, OY, gY, aY)
        } {
          let OY = AY[RY++],
            gY = AY[RY++],
            aY = AY[RY++],
            vY = AY[RY++];
          if ((128 & OY) > 0 || (128 & gY) > 0 || (128 & aY) > 0 || (128 & vY) > 0) return void(RY -= 8);
          if (YY < 10) {
            if (8 === YY) return pY(rY, DY, FY, IY, OY, gY, aY, vY);
            {
              let YY = AY[RY++];
              return (128 & YY) > 0 ? void(RY -= 9) : pY(rY, DY, FY, IY, OY, gY, aY, vY, YY)
            }
          }
          if (YY < 12) {
            let uY = AY[RY++],
              sY = AY[RY++];
            if ((128 & uY) > 0 || (128 & sY) > 0) return void(RY -= 10);
            if (YY < 11) return pY(rY, DY, FY, IY, OY, gY, aY, vY, uY, sY);
            let iY = AY[RY++];
            return (128 & iY) > 0 ? void(RY -= 11) : pY(rY, DY, FY, IY, OY, gY, aY, vY, uY, sY, iY)
          } {
            let uY = AY[RY++],
              sY = AY[RY++],
              iY = AY[RY++],
              yY = AY[RY++];
            if ((128 & uY) > 0 || (128 & sY) > 0 || (128 & iY) > 0 || (128 & yY) > 0) return void(RY -= 12);
            if (YY < 14) {
              if (12 === YY) return pY(rY, DY, FY, IY, OY, gY, aY, vY, uY, sY, iY, yY);
              {
                let YY = AY[RY++];
                return (128 & YY) > 0 ? void(RY -= 13) : pY(rY, DY, FY, IY, OY, gY, aY, vY, uY, sY, iY, yY, YY)
              }
            } {
              let QY = AY[RY++],
                oY = AY[RY++];
              if ((128 & QY) > 0 || (128 & oY) > 0) return void(RY -= 14);
              if (YY < 15) return pY(rY, DY, FY, IY, OY, gY, aY, vY, uY, sY, iY, yY, QY, oY);
              let WY = AY[RY++];
              return (128 & WY) > 0 ? void(RY -= 15) : pY(rY, DY, FY, IY, OY, gY, aY, vY, uY, sY, iY, yY, QY, oY, WY)
            }
          }
        }
      }
    }

    function xY() {
      let YY, rY = AY[RY++];
      if (rY < 192) YY = rY - 160;
      else switch (rY) {
        case 217:
          YY = AY[RY++];
          break;
        case 218:
          YY = sY.getUint16(RY), RY += 2;
          break;
        case 219:
          YY = sY.getUint32(RY), RY += 4;
          break;
        default:
          throw new Error("Expected string")
      }
      return bY(YY)
    }

    function nY(YY) {
      return QY.copyBuffers ? Uint8Array.prototype.slice.call(AY, RY, RY += YY) : AY.subarray(RY, RY += YY)
    }

    function PY(YY) {
      let rY = AY[RY++];
      if (EY[rY]) {
        let DY;
        return EY[rY](AY.subarray(RY, DY = RY += YY), (YY => {
          RY = YY;
          try {
            return zY()
          } finally {
            RY = DY
          }
        }))
      }
      throw new Error("Unknown extension type " + rY)
    }
    var UY = new Array(4096);

    function LY() {
      let YY = AY[RY++];
      if (!(YY >= 160 && YY < 192)) return RY--, tY(zY());
      if (YY -= 160, WY >= RY) return aY.slice(RY - oY, (RY += YY) - oY);
      if (!(0 == WY && IY < 180)) return hY(YY);
      let rY, DY = 4095 & (YY << 5 ^ (YY > 1 ? sY.getUint16(RY) : YY > 0 ? AY[RY] : 0)),
        FY = UY[DY],
        OY = RY,
        gY = RY + YY - 3,
        vY = 0;
      if (FY && FY.bytes == YY) {
        for (; OY < gY;) {
          if (rY = sY.getUint32(OY), rY != FY[vY++]) {
            OY = 1879048192;
            break
          }
          OY += 4
        }
        for (gY += 3; OY < gY;)
          if (rY = AY[OY++], rY != FY[vY++]) {
            OY = 1879048192;
            break
          } if (OY === gY) return RY = OY, FY.string;
        gY -= 3, OY = RY
      }
      for (FY = [], UY[DY] = FY, FY.bytes = YY; OY < gY;) rY = sY.getUint32(OY), FY.push(rY), OY += 4;
      for (gY += 3; OY < gY;) rY = AY[OY++], FY.push(rY);
      let uY = YY < 16 ? GY(YY) : kY(YY);
      return FY.string = null != uY ? uY : hY(YY)
    }

    function tY(YY) {
      if ("string" === typeof YY) return YY;
      if ("number" === typeof YY || "boolean" === typeof YY || "bigint" === typeof YY) return YY.toString();
      if (null == YY) return YY + "";
      if (QY.allowArraysInMapKeys && Array.isArray(YY) && YY.flat().every((YY => ["string", "number", "boolean", "bigint"].includes(typeof YY)))) return YY.flat().toString();
      throw new Error("Invalid property type for record: " + typeof YY)
    }
    const Yr = (YY, rY) => {
      let DY = zY().map(tY),
        FY = YY;
      void 0 !== rY && (YY = YY < 32 ? -((rY << 5) + YY) : (rY << 5) + YY, DY.highByte = rY);
      let AY = gY[YY];
      return AY && (AY.isShared || NY) && ((gY.restoreStructures || (gY.restoreStructures = []))[YY] = AY), gY[YY] = DY, DY.read = CY(DY, FY), DY.read()
    };
    EY[0] = () => {}, EY[0].noBuffer = !0, EY[66] = YY => {
      let rY = YY.length,
        DY = BigInt(128 & YY[0] ? YY[0] - 256 : YY[0]);
      for (let FY = 1; FY < rY; FY++) DY <<= BigInt(8), DY += BigInt(YY[FY]);
      return DY
    };
    let rr = {
      Error: Error,
      TypeError: TypeError,
      ReferenceError: ReferenceError
    };
    EY[101] = () => {
      let YY = zY();
      return (rr[YY[0]] || Error)(YY[1], {
        cause: YY[2]
      })
    }, EY[105] = YY => {
      if (!1 === QY.structuredClone) throw new Error("Structured clone extension is disabled");
      let rY = sY.getUint32(RY - 4);
      uY || (uY = new Map);
      let DY, FY = AY[RY];
      DY = FY >= 144 && FY < 160 || 220 == FY || 221 == FY ? [] : {};
      let IY = {
        target: DY
      };
      uY.set(rY, IY);
      let OY = zY();
      return IY.used ? Object.assign(DY, OY) : (IY.target = OY, OY)
    }, EY[112] = YY => {
      if (!1 === QY.structuredClone) throw new Error("Structured clone extension is disabled");
      let rY = sY.getUint32(RY - 4),
        DY = uY.get(rY);
      return DY.used = !0, DY.target
    }, EY[115] = () => new Set(zY());
    const Dr = ["Int8", "Uint8", "Uint8Clamped", "Int16", "Uint16", "Int32", "Uint32", "Float32", "Float64", "BigInt64", "BigUint64"].map((YY => YY + "Array"));
    let Fr = "object" === typeof globalThis ? globalThis : window;
    EY[116] = YY => {
      let rY = YY[0],
        DY = Dr[rY];
      if (!DY) {
        if (16 === rY) {
          let rY = new ArrayBuffer(YY.length - 1);
          return new Uint8Array(rY).set(YY.subarray(1)), rY
        }
        throw new Error("Could not find typed array for code " + rY)
      }
      return new Fr[DY](Uint8Array.prototype.slice.call(YY, 1).buffer)
    }, EY[120] = () => {
      let YY = zY();
      return new RegExp(YY[0], YY[1])
    };
    const Ar = [];

    function Ir(YY) {
      eY && eY();
      let rY = IY,
        DY = RY,
        FY = yY,
        OY = oY,
        EY = WY,
        mY = aY,
        VY = iY,
        SY = uY,
        lY = vY,
        TY = new Uint8Array(AY.slice(0, IY)),
        BY = gY,
        cY = gY.slice(0, gY.length),
        KY = QY,
        HY = NY,
        zY = YY();
      return IY = rY, RY = DY, yY = FY, oY = OY, WY = EY, aY = mY, iY = VY, uY = SY, vY = lY, AY = TY, NY = HY, (gY = BY).splice(0, gY.length, ...cY), QY = KY, sY = new DataView(AY.buffer, AY.byteOffset, AY.byteLength), zY
    }

    function Rr() {
      AY = null, uY = null, gY = null
    }
    EY[98] = YY => {
      let rY = (YY[0] << 24) + (YY[1] << 16) + (YY[2] << 8) + YY[3],
        DY = RY;
      return RY += rY - YY.length, vY = Ar, (vY = [xY(), xY()]).position0 = 0, vY.position1 = 0, vY.postBundlePosition = RY, RY = DY, zY()
    }, EY[255] = YY => 4 == YY.length ? new Date(1e3 * (16777216 * YY[0] + (YY[1] << 16) + (YY[2] << 8) + YY[3])) : 8 == YY.length ? new Date(((YY[0] << 22) + (YY[1] << 14) + (YY[2] << 6) + (YY[3] >> 2)) / 1e6 + 1e3 * (4294967296 * (3 & YY[3]) + 16777216 * YY[4] + (YY[5] << 16) + (YY[6] << 8) + YY[7])) : 12 == YY.length ? new Date(((YY[0] << 24) + (YY[1] << 16) + (YY[2] << 8) + YY[3]) / 1e6 + 1e3 * ((128 & YY[4] ? -281474976710656 : 0) + 1099511627776 * YY[6] + 4294967296 * YY[7] + 16777216 * YY[8] + (YY[9] << 16) + (YY[10] << 8) + YY[11])) : new Date("invalid");
    const Or = new Array(147);
    for (let AD = 0; AD < 256; AD++) Or[AD] = +("1e" + Math.floor(45.15 - .30103 * AD));
    const gr = cY;
    var ar = new cY({
      useRecords: !1
    });
    const vr = ar.unpack,
      ur = ar.unpackMultiple,
      sr = ar.unpack,
      ir = {
        NEVER: 0,
        ALWAYS: 1,
        DECIMAL_ROUND: 3,
        DECIMAL_FIT: 4
      };
    let yr, Qr, or, Wr = new Float32Array(1),
      Er = new Uint8Array(Wr.buffer, 0, 4);

    function mr(YY) {
      Wr[0] = YY;
      let rY = Or[(127 & Er[3]) << 1 | Er[2] >> 7];
      return (rY * YY + (YY > 0 ? .5 : -.5) | 0) / rY
    }
    try {
      yr = new TextEncoder
    } catch (FD) {}
    const Vr = "undefined" !== typeof Buffer,
      Sr = Vr ? function(YY) {
        return Buffer.allocUnsafeSlow(YY)
      } : Uint8Array,
      lr = Vr ? Buffer : Uint8Array,
      Tr = Vr ? 4294967296 : 2144337920;
    let er, Nr, Br, cr, Kr, Hr = 0,
      zr = null;
    const Zr = /[\u0080-\uFFFF]/,
      Cr = Symbol("record-id");
    class fr extends cY {
      constructor(YY) {
        let rY, DY, FY, AY;
        super(YY), this.offset = 0;
        let IY = lr.prototype.utf8Write ? function(YY, rY) {
            return er.utf8Write(YY, rY, er.byteLength - rY)
          } : !(!yr || !yr.encodeInto) && function(YY, rY) {
            return yr.encodeInto(YY, er.subarray(rY)).written
          },
          RY = this;
        YY || (YY = {});
        let OY = YY && YY.sequential,
          gY = YY.structures || YY.saveStructures,
          aY = YY.maxSharedStructures;
        if (null == aY && (aY = gY ? 32 : 0), aY > 8160) throw new Error("Maximum maxSharedStructure is 8160");
        YY.structuredClone && void 0 == YY.moreTypes && (this.moreTypes = !0);
        let vY = YY.maxOwnStructures;
        null == vY && (vY = gY ? 32 : 64), this.structures || 0 == YY.useRecords || (this.structures = []);
        let uY = aY > 32 || vY + aY > 64,
          sY = aY + 64,
          iY = aY + vY + 64;
        if (iY > 8256) throw new Error("Maximum maxSharedStructure + maxOwnStructure is 8192");
        let yY = [],
          QY = 0,
          oY = 0;
        this.pack = this.encode = function(YY, IY) {
          if (er || (er = new Sr(8192), Br = er.dataView || (er.dataView = new DataView(er.buffer, 0, 8192)), Hr = 0), cr = er.length - 10, cr - Hr < 2048 ? (er = new Sr(er.length), Br = er.dataView || (er.dataView = new DataView(er.buffer, 0, er.length)), cr = er.length - 10, Hr = 0) : Hr = Hr + 7 & 2147483640, rY = Hr, IY & Lr && (Hr += 255 & IY), AY = RY.structuredClone ? new Map : null, RY.bundleStrings && "string" !== typeof YY ? (zr = [], zr.size = 1 / 0) : zr = null, FY = RY.structures, FY) {
            FY.uninitialized && (FY = RY._mergeStructures(RY.getStructures()));
            let YY = FY.sharedLength || 0;
            if (YY > aY) throw new Error("Shared structures is larger than maximum shared structures, try increasing maxSharedStructures to " + FY.sharedLength);
            if (!FY.transitions) {
              FY.transitions = Object.create(null);
              for (let rY = 0; rY < YY; rY++) {
                let YY = FY[rY];
                if (!YY) continue;
                let DY, AY = FY.transitions;
                for (let rY = 0, FY = YY.length; rY < FY; rY++) {
                  let FY = YY[rY];
                  DY = AY[FY], DY || (DY = AY[FY] = Object.create(null)), AY = DY
                }
                AY[Cr] = rY + 64
              }
              this.lastNamedStructuresLength = YY
            }
            OY || (FY.nextId = YY + 64)
          }
          let gY;
          DY && (DY = !1);
          try {
            RY.randomAccessStructure && YY && YY.constructor && YY.constructor === Object ? cY(YY) : mY(YY);
            let DY = zr;
            if (zr && Jr(rY, mY, 0), AY && AY.idsToInsert) {
              let YY = AY.idsToInsert.sort(((YY, rY) => YY.offset > rY.offset ? 1 : -1)),
                FY = YY.length,
                IY = -1;
              for (; DY && FY > 0;) {
                let AY = YY[--FY].offset + rY;
                AY < DY.stringsPosition + rY && -1 === IY && (IY = 0), AY > DY.position + rY ? IY >= 0 && (IY += 6) : (IY >= 0 && (Br.setUint32(DY.position + rY, Br.getUint32(DY.position + rY) + IY), IY = -1), DY = DY.previous, FY++)
              }
              IY >= 0 && DY && Br.setUint32(DY.position + rY, Br.getUint32(DY.position + rY) + IY), Hr += 6 * YY.length, Hr > cr && eY(Hr), RY.offset = Hr;
              let OY = function(YY, rY) {
                let DY, FY = 6 * rY.length,
                  AY = YY.length - FY;
                for (; DY = rY.pop();) {
                  let rY = DY.offset,
                    IY = DY.id;
                  YY.copyWithin(rY + FY, rY, AY), FY -= 6;
                  let RY = rY + FY;
                  YY[RY++] = 214, YY[RY++] = 105, YY[RY++] = IY >> 24, YY[RY++] = IY >> 16 & 255, YY[RY++] = IY >> 8 & 255, YY[RY++] = 255 & IY, AY = rY
                }
                return YY
              }(er.subarray(rY, Hr), YY);
              return AY = null, OY
            }
            return RY.offset = Hr, IY & Pr ? (er.start = rY, er.end = Hr, er) : er.subarray(rY, Hr)
          } catch (FD) {
            throw gY = FD, FD
          } finally {
            if (FY && (WY(), DY && RY.saveStructures)) {
              let DY = FY.sharedLength || 0,
                AY = er.subarray(rY, Hr),
                OY = wr(FY, RY);
              if (!gY) return !1 === RY.saveStructures(OY, OY.isCompatible) ? RY.pack(YY, IY) : (RY.lastNamedStructuresLength = DY, er.length > 1073741824 && (er = null), AY)
            }
            er.length > 1073741824 && (er = null), IY & Ur && (Hr = rY)
          }
        };
        const WY = () => {
            oY < 10 && oY++;
            let YY = FY.sharedLength || 0;
            if (FY.length > YY && !OY && (FY.length = YY), QY > 1e4) FY.transitions = null, oY = 0, QY = 0, yY.length > 0 && (yY = []);
            else if (yY.length > 0 && !OY) {
              for (let YY = 0, rY = yY.length; YY < rY; YY++) yY[YY][Cr] = 0;
              yY = []
            }
          },
          EY = YY => {
            var rY = YY.length;
            rY < 16 ? er[Hr++] = 144 | rY : rY < 65536 ? (er[Hr++] = 220, er[Hr++] = rY >> 8, er[Hr++] = 255 & rY) : (er[Hr++] = 221, Br.setUint32(Hr, rY), Hr += 4);
            for (let DY = 0; DY < rY; DY++) mY(YY[DY])
          },
          mY = YY => {
            Hr > cr && (er = eY(Hr));
            var DY, FY = typeof YY;
            if ("string" === FY) {
              let FY, AY = YY.length;
              if (zr && AY >= 4 && AY < 4096) {
                if ((zr.size += AY) > 21760) {
                  let YY, DY, FY = (zr[0] ? 3 * zr[0].length + zr[1].length : 0) + 10;
                  Hr + FY > cr && (er = eY(Hr + FY)), zr.position ? (DY = zr, er[Hr] = 200, Hr += 3, er[Hr++] = 98, YY = Hr - rY, Hr += 4, Jr(rY, mY, 0), Br.setUint16(YY + rY - 3, Hr - rY - YY)) : (er[Hr++] = 214, er[Hr++] = 98, YY = Hr - rY, Hr += 4), zr = ["", ""], zr.previous = DY, zr.size = 0, zr.position = YY
                }
                let DY = Zr.test(YY);
                return zr[DY ? 0 : 1] += YY, er[Hr++] = 193, void mY(DY ? -AY : AY)
              }
              FY = AY < 32 ? 1 : AY < 256 ? 2 : AY < 65536 ? 3 : 5;
              let RY = 3 * AY;
              if (Hr + RY > cr && (er = eY(Hr + RY)), AY < 64 || !IY) {
                let rY, IY, RY, OY = Hr + FY;
                for (rY = 0; rY < AY; rY++) IY = YY.charCodeAt(rY), IY < 128 ? er[OY++] = IY : IY < 2048 ? (er[OY++] = IY >> 6 | 192, er[OY++] = 63 & IY | 128) : 55296 === (64512 & IY) && 56320 === (64512 & (RY = YY.charCodeAt(rY + 1))) ? (IY = 65536 + ((1023 & IY) << 10) + (1023 & RY), rY++, er[OY++] = IY >> 18 | 240, er[OY++] = IY >> 12 & 63 | 128, er[OY++] = IY >> 6 & 63 | 128, er[OY++] = 63 & IY | 128) : (er[OY++] = IY >> 12 | 224, er[OY++] = IY >> 6 & 63 | 128, er[OY++] = 63 & IY | 128);
                DY = OY - Hr - FY
              } else DY = IY(YY, Hr + FY);
              DY < 32 ? er[Hr++] = 160 | DY : DY < 256 ? (FY < 2 && er.copyWithin(Hr + 2, Hr + 1, Hr + 1 + DY), er[Hr++] = 217, er[Hr++] = DY) : DY < 65536 ? (FY < 3 && er.copyWithin(Hr + 3, Hr + 2, Hr + 2 + DY), er[Hr++] = 218, er[Hr++] = DY >> 8, er[Hr++] = 255 & DY) : (FY < 5 && er.copyWithin(Hr + 5, Hr + 3, Hr + 3 + DY), er[Hr++] = 219, Br.setUint32(Hr, DY), Hr += 4), Hr += DY
            } else if ("number" === FY)
              if (YY >>> 0 === YY) YY < 32 || YY < 128 && !1 === this.useRecords || YY < 64 && !this.randomAccessStructure ? er[Hr++] = YY : YY < 256 ? (er[Hr++] = 204, er[Hr++] = YY) : YY < 65536 ? (er[Hr++] = 205, er[Hr++] = YY >> 8, er[Hr++] = 255 & YY) : (er[Hr++] = 206, Br.setUint32(Hr, YY), Hr += 4);
              else if ((YY | 0) === YY) YY >= -32 ? er[Hr++] = 256 + YY : YY >= -128 ? (er[Hr++] = 208, er[Hr++] = YY + 256) : YY >= -32768 ? (er[Hr++] = 209, Br.setInt16(Hr, YY), Hr += 2) : (er[Hr++] = 210, Br.setInt32(Hr, YY), Hr += 4);
            else {
              let rY;
              if ((rY = this.useFloat32) > 0 && YY < 4294967296 && YY >= -2147483648) {
                let DY;
                if (er[Hr++] = 202, Br.setFloat32(Hr, YY), rY < 4 || ((DY = YY * Or[(127 & er[Hr]) << 1 | er[Hr + 1] >> 7]) | 0) === DY) return void(Hr += 4);
                Hr--
              }
              er[Hr++] = 203, Br.setFloat64(Hr, YY), Hr += 8
            } else if ("object" === FY || "function" === FY)
              if (YY) {
                if (AY) {
                  let DY = AY.get(YY);
                  if (DY) {
                    if (!DY.id) {
                      let YY = AY.idsToInsert || (AY.idsToInsert = []);
                      DY.id = YY.push(DY)
                    }
                    return er[Hr++] = 214, er[Hr++] = 112, Br.setUint32(Hr, DY.id), void(Hr += 4)
                  }
                  AY.set(YY, {
                    offset: Hr - rY
                  })
                }
                let IY = YY.constructor;
                if (IY === Object) TY(YY);
                else if (IY === Array) EY(YY);
                else if (IY === Map)
                  if (this.mapAsEmptyObject) er[Hr++] = 128;
                  else {
                    (DY = YY.size) < 16 ? er[Hr++] = 128 | DY : DY < 65536 ? (er[Hr++] = 222, er[Hr++] = DY >> 8, er[Hr++] = 255 & DY) : (er[Hr++] = 223, Br.setUint32(Hr, DY), Hr += 4);
                    for (let [rY, DY] of YY) mY(rY), mY(DY)
                  }
                else {
                  for (let rY = 0, DY = Qr.length; rY < DY; rY++) {
                    if (YY instanceof or[rY]) {
                      let DY = Qr[rY];
                      if (DY.write) {
                        DY.type && (er[Hr++] = 212, er[Hr++] = DY.type, er[Hr++] = 0);
                        let rY = DY.write.call(this, YY);
                        return void(rY === YY ? Array.isArray(YY) ? EY(YY) : TY(YY) : mY(rY))
                      }
                      let FY, AY = er,
                        IY = Br,
                        RY = Hr;
                      er = null;
                      try {
                        FY = DY.pack.call(this, YY, (YY => (er = AY, AY = null, Hr += YY, Hr > cr && eY(Hr), {
                          target: er,
                          targetView: Br,
                          position: Hr - YY
                        })), mY)
                      } finally {
                        AY && (er = AY, Br = IY, Hr = RY, cr = er.length - 10)
                      }
                      return void(FY && (FY.length + Hr > cr && eY(FY.length + Hr), Hr = dr(FY, er, Hr, DY.type)))
                    }
                  }
                  if (Array.isArray(YY)) EY(YY);
                  else {
                    if (YY.toJSON) {
                      const rY = YY.toJSON();
                      if (rY !== YY) return mY(rY)
                    }
                    if ("function" === FY) return mY(this.writeFunction && this.writeFunction(YY));
                    TY(YY)
                  }
                }
              } else er[Hr++] = 192;
            else if ("boolean" === FY) er[Hr++] = YY ? 195 : 194;
            else if ("bigint" === FY) {
              if (YY < BigInt(1) << BigInt(63) && YY >= -(BigInt(1) << BigInt(63))) er[Hr++] = 211, Br.setBigInt64(Hr, YY);
              else if (YY < BigInt(1) << BigInt(64) && YY > 0) er[Hr++] = 207, Br.setBigUint64(Hr, YY);
              else {
                if (!this.largeBigIntToFloat) {
                  if (this.largeBigIntToString) return mY(YY.toString());
                  if (this.useBigIntExtension && YY < BigInt(2) ** BigInt(1023) && YY > -(BigInt(2) ** BigInt(1023))) {
                    er[Hr++] = 199, Hr++, er[Hr++] = 66;
                    let rY, DY = [];
                    do {
                      let FY = YY & BigInt(255);
                      rY = (FY & BigInt(128)) === (YY < BigInt(0) ? BigInt(128) : BigInt(0)), DY.push(FY), YY >>= BigInt(8)
                    } while (YY !== BigInt(0) && YY !== BigInt(-1) || !rY);
                    er[Hr - 2] = DY.length;
                    for (let YY = DY.length; YY > 0;) er[Hr++] = Number(DY[--YY]);
                    return
                  }
                  throw new RangeError(YY + " was too large to fit in MessagePack 64-bit integer format, use useBigIntExtension, or set largeBigIntToFloat to convert to float-64, or set largeBigIntToString to convert to string")
                }
                er[Hr++] = 203, Br.setFloat64(Hr, Number(YY))
              }
              Hr += 8
            } else {
              if ("undefined" !== FY) throw new Error("Unknown type: " + FY);
              this.encodeUndefinedAsNil ? er[Hr++] = 192 : (er[Hr++] = 212, er[Hr++] = 0, er[Hr++] = 0)
            }
          },
          VY = this.variableMapSize || this.coercibleKeyAsNumber || this.skipValues ? YY => {
            let rY;
            if (this.skipValues) {
              rY = [];
              for (let DY in YY) "function" === typeof YY.hasOwnProperty && !YY.hasOwnProperty(DY) || this.skipValues.includes(YY[DY]) || rY.push(DY)
            } else rY = Object.keys(YY);
            let DY, FY = rY.length;
            if (FY < 16 ? er[Hr++] = 128 | FY : FY < 65536 ? (er[Hr++] = 222, er[Hr++] = FY >> 8, er[Hr++] = 255 & FY) : (er[Hr++] = 223, Br.setUint32(Hr, FY), Hr += 4), this.coercibleKeyAsNumber)
              for (let AY = 0; AY < FY; AY++) {
                DY = rY[AY];
                let FY = Number(DY);
                mY(isNaN(FY) ? DY : FY), mY(YY[DY])
              } else
                for (let AY = 0; AY < FY; AY++) mY(DY = rY[AY]), mY(YY[DY])
          } : YY => {
            er[Hr++] = 222;
            let DY = Hr - rY;
            Hr += 2;
            let FY = 0;
            for (let rY in YY)("function" !== typeof YY.hasOwnProperty || YY.hasOwnProperty(rY)) && (mY(rY), mY(YY[rY]), FY++);
            if (FY > 65535) throw new Error('Object is too large to serialize with fast 16-bit map size, use the "variableMapSize" option to serialize this object');
            er[DY++ + rY] = FY >> 8, er[DY + rY] = 255 & FY
          },
          SY = !1 === this.useRecords ? VY : YY.progressiveRecords && !uY ? YY => {
            let DY, AY, IY = FY.transitions || (FY.transitions = Object.create(null)),
              RY = Hr++ - rY;
            for (let OY in YY)
              if ("function" !== typeof YY.hasOwnProperty || YY.hasOwnProperty(OY)) {
                if (DY = IY[OY], DY) IY = DY;
                else {
                  let gY = Object.keys(YY),
                    aY = IY;
                  IY = FY.transitions;
                  let vY = 0;
                  for (let YY = 0, rY = gY.length; YY < rY; YY++) {
                    let rY = gY[YY];
                    DY = IY[rY], DY || (DY = IY[rY] = Object.create(null), vY++), IY = DY
                  }
                  RY + rY + 1 == Hr ? (Hr--, NY(IY, gY, vY)) : BY(IY, gY, RY, vY), AY = !0, IY = aY[OY]
                }
                mY(YY[OY])
              } if (!AY) {
              let DY = IY[Cr];
              DY ? er[RY + rY] = DY : BY(IY, Object.keys(YY), RY, 0)
            }
          } : YY => {
            let rY, DY = FY.transitions || (FY.transitions = Object.create(null)),
              AY = 0;
            for (let FY in YY)("function" !== typeof YY.hasOwnProperty || YY.hasOwnProperty(FY)) && (rY = DY[FY], rY || (rY = DY[FY] = Object.create(null), AY++), DY = rY);
            let IY = DY[Cr];
            IY ? IY >= 96 && uY ? (er[Hr++] = 96 + (31 & (IY -= 96)), er[Hr++] = IY >> 5) : er[Hr++] = IY : NY(DY, DY.__keys__ || Object.keys(YY), AY);
            for (let FY in YY)("function" !== typeof YY.hasOwnProperty || YY.hasOwnProperty(FY)) && mY(YY[FY])
          },
          lY = "function" == typeof this.useRecords && this.useRecords,
          TY = lY ? YY => {
            lY(YY) ? SY(YY) : VY(YY)
          } : SY,
          eY = YY => {
            let DY;
            if (YY > 16777216) {
              if (YY - rY > Tr) throw new Error("Packed buffer would be larger than maximum buffer size");
              DY = Math.min(Tr, 4096 * Math.round(Math.max((YY - rY) * (YY > 67108864 ? 1.25 : 2), 4194304) / 4096))
            } else DY = 1 + (Math.max(YY - rY << 2, er.length - 1) >> 12) << 12;
            let FY = new Sr(DY);
            return Br = FY.dataView || (FY.dataView = new DataView(FY.buffer, 0, DY)), YY = Math.min(YY, er.length), er.copy ? er.copy(FY, 0, rY, YY) : FY.set(er.slice(rY, YY)), Hr -= rY, rY = 0, cr = FY.length - 10, er = FY
          },
          NY = (YY, rY, AY) => {
            let IY = FY.nextId;
            IY || (IY = 64), IY < sY && this.shouldShareStructure && !this.shouldShareStructure(rY) ? (IY = FY.nextOwnId, IY < iY || (IY = sY), FY.nextOwnId = IY + 1) : (IY >= iY && (IY = sY), FY.nextId = IY + 1);
            let RY = rY.highByte = IY >= 96 && uY ? IY - 96 >> 5 : -1;
            YY[Cr] = IY, YY.__keys__ = rY, FY[IY - 64] = rY, IY < sY ? (rY.isShared = !0, FY.sharedLength = IY - 63, DY = !0, RY >= 0 ? (er[Hr++] = 96 + (31 & IY), er[Hr++] = RY) : er[Hr++] = IY) : (RY >= 0 ? (er[Hr++] = 213, er[Hr++] = 114, er[Hr++] = 96 + (31 & IY), er[Hr++] = RY) : (er[Hr++] = 212, er[Hr++] = 114, er[Hr++] = IY), AY && (QY += oY * AY), yY.length >= vY && (yY.shift()[Cr] = 0), yY.push(YY), mY(rY))
          },
          BY = (YY, DY, FY, AY) => {
            let IY = er,
              RY = Hr,
              OY = cr,
              gY = rY;
            er = Nr, Hr = 0, rY = 0, er || (Nr = er = new Sr(8192)), cr = er.length - 10, NY(YY, DY, AY), Nr = er;
            let aY = Hr;
            if (er = IY, Hr = RY, cr = OY, rY = gY, aY > 1) {
              let YY = Hr + aY - 1;
              YY > cr && eY(YY);
              let DY = FY + rY;
              er.copyWithin(DY + aY, DY + 1, Hr), er.set(Nr.slice(0, aY), DY), Hr = YY
            } else er[FY + rY] = Nr[0]
          },
          cY = YY => {
            let AY = Kr(YY, er, rY, Hr, FY, eY, ((YY, rY, FY) => {
              if (FY) return DY = !0;
              Hr = rY;
              let AY = er;
              return mY(YY), WY(), AY !== er ? {
                position: Hr,
                targetView: Br,
                target: er
              } : Hr
            }), this);
            if (0 === AY) return TY(YY);
            Hr = AY
          }
      }
      useBuffer(YY) {
        er = YY, Br = er.dataView || (er.dataView = new DataView(er.buffer, er.byteOffset, er.byteLength)), Hr = 0
      }
      set position(YY) {
        Hr = YY
      }
      get position() {
        return Hr
      }
      set buffer(YY) {
        er = YY
      }
      get buffer() {
        return er
      }
      clearSharedData() {
        this.structures && (this.structures = []), this.typedStructs && (this.typedStructs = [])
      }
    }

    function jr(YY, rY, DY, FY) {
      let AY = YY.byteLength;
      if (AY + 1 < 256) {
        var {
          target: IY,
          position: RY
        } = DY(4 + AY);
        IY[RY++] = 199, IY[RY++] = AY + 1
      } else if (AY + 1 < 65536) {
        var {
          target: IY,
          position: RY
        } = DY(5 + AY);
        IY[RY++] = 200, IY[RY++] = AY + 1 >> 8, IY[RY++] = AY + 1 & 255
      } else {
        var {
          target: IY,
          position: RY,
          targetView: OY
        } = DY(7 + AY);
        IY[RY++] = 201, OY.setUint32(RY, AY + 1), RY += 4
      }
      IY[RY++] = 116, IY[RY++] = rY, YY.buffer || (YY = new Uint8Array(YY)), IY.set(new Uint8Array(YY.buffer, YY.byteOffset, YY.byteLength), RY)
    }

    function hr(YY, rY) {
      let DY = YY.byteLength;
      var FY, AY;
      if (DY < 256) {
        var {
          target: FY,
          position: AY
        } = rY(DY + 2);
        FY[AY++] = 196, FY[AY++] = DY
      } else if (DY < 65536) {
        var {
          target: FY,
          position: AY
        } = rY(DY + 3);
        FY[AY++] = 197, FY[AY++] = DY >> 8, FY[AY++] = 255 & DY
      } else {
        var {
          target: FY,
          position: AY,
          targetView: IY
        } = rY(DY + 5);
        FY[AY++] = 198, IY.setUint32(AY, DY), AY += 4
      }
      FY.set(YY, AY)
    }

    function dr(YY, rY, DY, FY) {
      let AY = YY.length;
      switch (AY) {
        case 1:
          rY[DY++] = 212;
          break;
        case 2:
          rY[DY++] = 213;
          break;
        case 4:
          rY[DY++] = 214;
          break;
        case 8:
          rY[DY++] = 215;
          break;
        case 16:
          rY[DY++] = 216;
          break;
        default:
          AY < 256 ? (rY[DY++] = 199, rY[DY++] = AY) : AY < 65536 ? (rY[DY++] = 200, rY[DY++] = AY >> 8, rY[DY++] = 255 & AY) : (rY[DY++] = 201, rY[DY++] = AY >> 24, rY[DY++] = AY >> 16 & 255, rY[DY++] = AY >> 8 & 255, rY[DY++] = 255 & AY)
      }
      return rY[DY++] = FY, rY.set(YY, DY), DY += AY
    }

    function Jr(YY, rY, DY) {
      if (zr.length > 0) {
        Br.setUint32(zr.position + YY, Hr + DY - zr.position - YY), zr.stringsPosition = Hr - YY;
        let FY = zr;
        zr = null, rY(FY[0]), rY(FY[1])
      }
    }

    function Mr(YY) {
      if (YY.Class) {
        if (!YY.pack && !YY.write) throw new Error("Extension has no pack or write function");
        if (YY.pack && !YY.type) throw new Error("Extension has no type (numeric code to identify the extension)");
        or.unshift(YY.Class), Qr.unshift(YY)
      }! function(YY) {
        YY.unpack ? EY[YY.type] = YY.unpack : EY[YY.type] = YY
      }(YY)
    }

    function wr(YY, rY) {
      return YY.isCompatible = YY => {
        let DY = !YY || (rY.lastNamedStructuresLength || 0) === YY.length;
        return DY || rY._mergeStructures(YY), DY
      }, YY
    }
    or = [Date, Set, Error, RegExp, ArrayBuffer, Object.getPrototypeOf(Uint8Array.prototype).constructor, VY], Qr = [{
      pack(YY, rY, DY) {
        let FY = YY.getTime() / 1e3;
        if ((this.useTimestamp32 || 0 === YY.getMilliseconds()) && FY >= 0 && FY < 4294967296) {
          let {
            target: YY,
            targetView: DY,
            position: AY
          } = rY(6);
          YY[AY++] = 214, YY[AY++] = 255, DY.setUint32(AY, FY)
        } else if (FY > 0 && FY < 4294967296) {
          let {
            target: DY,
            targetView: AY,
            position: IY
          } = rY(10);
          DY[IY++] = 215, DY[IY++] = 255, AY.setUint32(IY, 4e6 * YY.getMilliseconds() + (FY / 1e3 / 4294967296 | 0)), AY.setUint32(IY + 4, FY)
        } else if (isNaN(FY)) {
          if (this.onInvalidDate) return rY(0), DY(this.onInvalidDate());
          let {
            target: YY,
            targetView: FY,
            position: AY
          } = rY(3);
          YY[AY++] = 212, YY[AY++] = 255, YY[AY++] = 255
        } else {
          let {
            target: DY,
            targetView: AY,
            position: IY
          } = rY(15);
          DY[IY++] = 199, DY[IY++] = 12, DY[IY++] = 255, AY.setUint32(IY, 1e6 * YY.getMilliseconds()), AY.setBigInt64(IY + 4, BigInt(Math.floor(FY)))
        }
      }
    }, {
      pack(YY, rY, DY) {
        if (this.setAsEmptyObject) return rY(0), DY({});
        let FY = Array.from(YY),
          {
            target: AY,
            position: IY
          } = rY(this.moreTypes ? 3 : 0);
        this.moreTypes && (AY[IY++] = 212, AY[IY++] = 115, AY[IY++] = 0), DY(FY)
      }
    }, {
      pack(YY, rY, DY) {
        let {
          target: FY,
          position: AY
        } = rY(this.moreTypes ? 3 : 0);
        this.moreTypes && (FY[AY++] = 212, FY[AY++] = 101, FY[AY++] = 0), DY([YY.name, YY.message, YY.cause])
      }
    }, {
      pack(YY, rY, DY) {
        let {
          target: FY,
          position: AY
        } = rY(this.moreTypes ? 3 : 0);
        this.moreTypes && (FY[AY++] = 212, FY[AY++] = 120, FY[AY++] = 0), DY([YY.source, YY.flags])
      }
    }, {
      pack(YY, rY) {
        this.moreTypes ? jr(YY, 16, rY) : hr(Vr ? Buffer.from(YY) : new Uint8Array(YY), rY)
      }
    }, {
      pack(YY, rY) {
        let DY = YY.constructor;
        DY !== lr && this.moreTypes ? jr(YY, Dr.indexOf(DY.name), rY) : hr(YY, rY)
      }
    }, {
      pack(YY, rY) {
        let {
          target: DY,
          position: FY
        } = rY(1);
        DY[FY] = 193
      }
    }];
    let br = new fr({
      useRecords: !1
    });
    const Xr = br.pack,
      qr = br.pack,
      pr = fr,
      {
        NEVER: kr,
        ALWAYS: Gr,
        DECIMAL_ROUND: xr,
        DECIMAL_FIT: nr
      } = ir,
      Pr = 512,
      Ur = 1024,
      Lr = 2048;
    const tr = function(YY) {
        let rY = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        if (!YY || "object" !== typeof YY) throw new Error("first argument must be an Iterable, Async Iterable, Iterator, Async Iterator, or a promise");
        const DY = new cY(rY);
        let FY;
        const AY = YY => {
          let rY;
          FY && (YY = Buffer.concat([FY, YY]), FY = void 0);
          try {
            rY = DY.unpackMultiple(YY)
          } catch (AY) {
            if (!AY.incomplete) throw AY;
            FY = YY.slice(AY.lastPosition), rY = AY.values
          }
          return rY
        };
        return "function" === typeof YY[Symbol.iterator] ? function*() {
          for (const rY of YY) yield* AY(rY)
        }() : "function" === typeof YY[Symbol.asyncIterator] ? async function*() {
          for await (const rY of YY) yield* AY(rY)
        }(): void 0
      },
      YD = function(YY) {
        let rY = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        if (YY && "object" === typeof YY) {
          if ("function" === typeof YY[Symbol.iterator]) return function*(YY, rY) {
            const DY = new fr(rY);
            for (const FY of YY) yield DY.pack(FY)
          }(YY, rY);
          if ("function" === typeof YY.then || "function" === typeof YY[Symbol.asyncIterator]) return async function*(YY, rY) {
            const DY = new fr(rY);
            for await (const FY of YY) yield DY.pack(FY)
          }(YY, rY);
          throw new Error("first argument must be an Iterable, Async Iterable, Iterator, Async Iterator, or a Promise")
        }
        throw new Error("first argument must be an Iterable, Async Iterable, or a Promise for an Async Iterable")
      },
      rD = !1,
      DD = !0
  },
  8526: (YY, rY, DY) => {
    DY.r(rY), DY.d(rY, {
      $changes: () => QY,
      $childType: () => oY,
      $decoder: () => vY,
      $deleteByIndex: () => iY,
      $encoder: () => aY,
      $filter: () => uY,
      $getByIndex: () => sY,
      $numFields: () => BY,
      $refId: () => OY,
      $track: () => gY,
      $values: () => SY,
      ArraySchema: () => DF,
      Callbacks: () => DA,
      ChangeTree: () => HD,
      CollectionSchema: () => IF,
      Decoder: () => xF,
      Encoder: () => qF,
      FieldBuilder: () => gF,
      MapSchema: () => AF,
      Metadata: () => xr,
      OPERATION: () => AY,
      Reflection: () => LF,
      ReflectionField: () => PF,
      ReflectionType: () => UF,
      Root: () => zF,
      Schema: () => KF,
      SetSchema: () => RF,
      StateCallbackStrategy: () => rA,
      StateView: () => hF,
      StreamSchema: () => OF,
      TypeContext: () => wr,
      createPool: () => AA,
      decode: () => mr,
      decodeKeyValueOperation: () => PD,
      decodeSchemaOperation: () => nD,
      defineCustomTypes: () => Tr,
      defineTypes: () => NF,
      deprecated: () => TF,
      dumpChanges: () => cF,
      encode: () => rr,
      encodeArray: () => JD,
      encodeIndexedEntry: () => hD,
      encodeKeyValueOperation: () => dD,
      encodeMapEntry: () => jD,
      encodeSchemaOperation: () => fD,
      my: () => QF,
      fullStateOnly: () => mF,
      getDecoderStateCallbacks: () => tF,
      getEncodeDescriptor: () => YD,
      getRawChangesCallback: () => YA,
      isBuilder: () => aF,
      patchOnly: () => EF,
      registerType: () => lr,
      schema: () => BF,
      t: () => iF,
      type: () => VF,
      unreliable: () => WF,
      view: () => oF
    });
    const FY = 255;
    var AY;

    function IY(YY) {
      Object.defineProperty(YY, Symbol.metadata, {
        value: void 0,
        writable: !0,
        configurable: !0,
        enumerable: !1
      })
    }! function(YY) {
      YY[YY.ADD = 128] = "ADD", YY[YY.REPLACE = 0] = "REPLACE", YY[YY.DELETE = 64] = "DELETE", YY[YY.DELETE_AND_MOVE = 96] = "DELETE_AND_MOVE", YY[YY.MOVE_AND_ADD = 160] = "MOVE_AND_ADD", YY[YY.DELETE_AND_ADD = 192] = "DELETE_AND_ADD", YY[YY.CLEAR = 10] = "CLEAR", YY[YY.REVERSE = 15] = "REVERSE", YY[YY.MOVE = 32] = "MOVE", YY[YY.DELETE_BY_REFID = 33] = "DELETE_BY_REFID", YY[YY.ADD_BY_REFID = 129] = "ADD_BY_REFID"
    }(AY || (AY = {})), Symbol.metadata ??= Symbol.for("Symbol.metadata");
    const RY = "undefined" !== typeof globalThis ? globalThis : "undefined" !== typeof global ? global : "undefined" !== typeof self ? self : "undefined" !== typeof window ? window : {};
    if ("function" === typeof Symbol && "function" !== typeof Symbol.for) {
      const YY = "colyseus.symbolRegistry",
        rY = RY[YY] || (RY[YY] = Object.create(null));
      Symbol.for = function(YY) {
        return rY[YY] || (rY[YY] = Symbol(YY))
      }, Symbol.keyFor = function(YY) {
        for (const DY in rY)
          if (rY[DY] === YY) return DY
      }
    }
    const OY = Symbol.for("$refId"),
      gY = "~track",
      aY = "~encoder",
      vY = "~decoder",
      uY = "~filter",
      sY = "~getByIndex",
      iY = "~deleteByIndex",
      yY = "~resyncPrune",
      QY = Symbol.for("$changes"),
      oY = Symbol.for("$childType"),
      WY = Symbol.for("$proxyTarget"),
      EY = "~onEncodeEnd",
      mY = "~reset",
      VY = "~onDecodeEnd",
      SY = Symbol.for("$values"),
      lY = "~builder",
      TY = "~descriptors",
      eY = "~__encodeDescriptor",
      NY = "~encoders",
      BY = "~__numFields",
      cY = "~__refTypeFieldIndexes",
      KY = "~__viewFieldIndexes",
      HY = "$__fieldIndexesByViewTag",
      zY = "~__unreliableFieldIndexes",
      ZY = "~__patchOnlyFieldIndexes",
      CY = "~__fullSyncSkipIndexes",
      fY = "~__fullStateOnlyFieldIndexes",
      jY = "~__streamFieldIndexes",
      hY = "~__streamPriorities";
    let dY;
    try {
      dY = new TextEncoder
    } catch (IA) {}
    const JY = new ArrayBuffer(8),
      MY = new Int32Array(JY),
      wY = new Float32Array(JY),
      bY = new Float64Array(JY),
      XY = new BigInt64Array(JY),
      qY = "undefined" !== typeof Buffer && Buffer.byteLength ? Buffer.byteLength : function(YY, rY) {
        for (var DY = 0, FY = 0, AY = 0, IY = YY.length; AY < IY; AY++)(DY = YY.charCodeAt(AY)) < 128 ? FY += 1 : DY < 2048 ? FY += 2 : DY < 55296 || DY >= 57344 ? FY += 3 : (AY++, FY += 4);
        return FY
      };

    function pY(YY, rY, DY) {
      for (var FY = 0, AY = 0, IY = rY.length; AY < IY; AY++)(FY = rY.charCodeAt(AY)) < 128 ? YY[DY.offset++] = FY : FY < 2048 ? (YY[DY.offset] = 192 | FY >> 6, YY[DY.offset + 1] = 128 | 63 & FY, DY.offset += 2) : FY < 55296 || FY >= 57344 ? (YY[DY.offset] = 224 | FY >> 12, YY[DY.offset + 1] = 128 | FY >> 6 & 63, YY[DY.offset + 2] = 128 | 63 & FY, DY.offset += 3) : (AY++, FY = 65536 + ((1023 & FY) << 10 | 1023 & rY.charCodeAt(AY)), YY[DY.offset] = 240 | FY >> 18, YY[DY.offset + 1] = 128 | FY >> 12 & 63, YY[DY.offset + 2] = 128 | FY >> 6 & 63, YY[DY.offset + 3] = 128 | 63 & FY, DY.offset += 4)
    }

    function kY(YY, rY, DY) {
      YY[DY.offset++] = 255 & rY
    }

    function GY(YY, rY, DY) {
      YY[DY.offset++] = 255 & rY, YY[DY.offset++] = rY >> 8 & 255
    }

    function xY(YY, rY, DY) {
      YY[DY.offset++] = 255 & rY, YY[DY.offset++] = rY >> 8 & 255
    }

    function nY(YY, rY, DY) {
      YY[DY.offset++] = 255 & rY, YY[DY.offset++] = rY >> 8 & 255, YY[DY.offset++] = rY >> 16 & 255, YY[DY.offset++] = rY >> 24 & 255
    }

    function PY(YY, rY, DY) {
      const FY = rY >> 24,
        AY = rY >> 16,
        IY = rY >> 8,
        RY = rY;
      YY[DY.offset++] = 255 & RY, YY[DY.offset++] = 255 & IY, YY[DY.offset++] = 255 & AY, YY[DY.offset++] = 255 & FY
    }

    function UY(YY, rY, DY) {
      const FY = Math.floor(rY / Math.pow(2, 32));
      PY(YY, rY >>> 0, DY), PY(YY, FY, DY)
    }

    function LY(YY, rY, DY) {
      const FY = rY / Math.pow(2, 32) | 0;
      PY(YY, rY >>> 0, DY), PY(YY, FY, DY)
    }

    function tY(YY, rY, DY) {
      wY[0] = rY, nY(YY, MY[0], DY)
    }

    function Yr(YY, rY, DY) {
      bY[0] = rY, nY(YY, MY[0], DY), nY(YY, MY[1], DY)
    }
    const rr = {
        int8: kY,
        uint8: function(YY, rY, DY) {
          YY[DY.offset++] = 255 & rY
        },
        int16: GY,
        uint16: xY,
        int32: nY,
        uint32: PY,
        int64: UY,
        uint64: LY,
        bigint64: function(YY, rY, DY) {
          XY[0] = BigInt.asIntN(64, rY), nY(YY, MY[0], DY), nY(YY, MY[1], DY)
        },
        biguint64: function(YY, rY, DY) {
          XY[0] = BigInt.asIntN(64, rY), nY(YY, MY[0], DY), nY(YY, MY[1], DY)
        },
        float32: tY,
        float64: Yr,
        boolean: function(YY, rY, DY) {
          YY[DY.offset++] = rY ? 1 : 0
        },
        string: function(YY, rY, DY) {
          rY || (rY = "");
          let FY = qY(rY, "utf8"),
            AY = 0;
          if (FY < 32) YY[DY.offset++] = 160 | FY, AY = 1;
          else if (FY < 256) YY[DY.offset++] = 217, YY[DY.offset++] = FY, AY = 2;
          else if (FY < 65536) YY[DY.offset++] = 218, xY(YY, FY, DY), AY = 3;
          else {
            if (!(FY < 4294967296)) throw new Error("String too long");
            YY[DY.offset++] = 219, PY(YY, FY, DY), AY = 5
          }
          return pY(YY, rY, DY), AY + FY
        },
        number: function YY(rY, DY, FY) {
          return isNaN(DY) ? YY(rY, 0, FY) : isFinite(DY) ? DY !== (0 | DY) ? Math.abs(DY) <= 34028235e31 && (wY[0] = DY, Math.abs(Math.abs(wY[0]) - Math.abs(DY)) < 1e-4) ? (rY[FY.offset++] = 202, tY(rY, DY, FY), 5) : (rY[FY.offset++] = 203, Yr(rY, DY, FY), 9) : DY >= 0 ? DY < 128 ? (rY[FY.offset++] = 255 & DY, 1) : DY < 256 ? (rY[FY.offset++] = 204, rY[FY.offset++] = 255 & DY, 2) : DY < 65536 ? (rY[FY.offset++] = 205, xY(rY, DY, FY), 3) : DY < 4294967296 ? (rY[FY.offset++] = 206, PY(rY, DY, FY), 5) : (rY[FY.offset++] = 207, LY(rY, DY, FY), 9) : DY >= -32 ? (rY[FY.offset++] = 224 | DY + 32, 1) : DY >= -128 ? (rY[FY.offset++] = 208, kY(rY, DY, FY), 2) : DY >= -32768 ? (rY[FY.offset++] = 209, GY(rY, DY, FY), 3) : DY >= -2147483648 ? (rY[FY.offset++] = 210, nY(rY, DY, FY), 5) : (rY[FY.offset++] = 211, UY(rY, DY, FY), 9) : YY(rY, DY > 0 ? Number.MAX_SAFE_INTEGER : -Number.MAX_SAFE_INTEGER, FY)
        },
        utf8Write: pY,
        utf8Length: qY
      },
      Dr = new ArrayBuffer(8),
      Fr = new Int32Array(Dr),
      Ar = new Float32Array(Dr),
      Ir = new Float64Array(Dr),
      Rr = new BigUint64Array(Dr),
      Or = new BigInt64Array(Dr);

    function gr(YY, rY, DY) {
      DY > YY.length - rY.offset && (DY = YY.length - rY.offset);
      for (var FY = "", AY = 0, IY = rY.offset, RY = rY.offset + DY; IY < RY; IY++) {
        var OY = YY[IY];
        if (0 !== (128 & OY))
          if (192 !== (224 & OY))
            if (224 !== (240 & OY)) {
              if (240 !== (248 & OY)) {
                console.error("decode.utf8Read(): Invalid byte " + OY + " at offset " + IY + ". Skip to end of string: " + (rY.offset + DY));
                break
              }(AY = (7 & OY) << 18 | (63 & YY[++IY]) << 12 | (63 & YY[++IY]) << 6 | 63 & YY[++IY]) >= 65536 ? (AY -= 65536, FY += String.fromCharCode(55296 + (AY >>> 10), 56320 + (1023 & AY))) : FY += String.fromCharCode(AY)
            } else FY += String.fromCharCode((15 & OY) << 12 | (63 & YY[++IY]) << 6 | 63 & YY[++IY]);
        else FY += String.fromCharCode((31 & OY) << 6 | 63 & YY[++IY]);
        else FY += String.fromCharCode(OY)
      }
      return rY.offset += DY, FY
    }

    function ar(YY, rY) {
      return vr(YY, rY) << 24 >> 24
    }

    function vr(YY, rY) {
      return YY[rY.offset++]
    }

    function ur(YY, rY) {
      return sr(YY, rY) << 16 >> 16
    }

    function sr(YY, rY) {
      return YY[rY.offset++] | YY[rY.offset++] << 8
    }

    function ir(YY, rY) {
      return YY[rY.offset++] | YY[rY.offset++] << 8 | YY[rY.offset++] << 16 | YY[rY.offset++] << 24
    }

    function yr(YY, rY) {
      return ir(YY, rY) >>> 0
    }

    function Qr(YY, rY) {
      return Fr[0] = ir(YY, rY), Ar[0]
    }

    function or(YY, rY) {
      return Fr[0] = ir(YY, rY), Fr[1] = ir(YY, rY), Ir[0]
    }

    function Wr(YY, rY) {
      const DY = yr(YY, rY);
      return ir(YY, rY) * Math.pow(2, 32) + DY
    }

    function Er(YY, rY) {
      const DY = yr(YY, rY);
      return yr(YY, rY) * Math.pow(2, 32) + DY
    }
    const mr = {
        utf8Read: gr,
        int8: ar,
        uint8: vr,
        int16: ur,
        uint16: sr,
        int32: ir,
        uint32: yr,
        float32: Qr,
        float64: or,
        int64: Wr,
        uint64: Er,
        bigint64: function(YY, rY) {
          return Fr[0] = ir(YY, rY), Fr[1] = ir(YY, rY), Or[0]
        },
        biguint64: function(YY, rY) {
          return Fr[0] = ir(YY, rY), Fr[1] = ir(YY, rY), Rr[0]
        },
        boolean: function(YY, rY) {
          return vr(YY, rY) > 0
        },
        string: function(YY, rY) {
          const DY = YY[rY.offset++];
          let FY;
          return DY < 192 ? FY = 31 & DY : 217 === DY ? FY = vr(YY, rY) : 218 === DY ? FY = sr(YY, rY) : 219 === DY && (FY = yr(YY, rY)), gr(YY, rY, FY)
        },
        number: function(YY, rY) {
          const DY = YY[rY.offset++];
          return DY < 128 ? DY : 202 === DY ? Qr(YY, rY) : 203 === DY ? or(YY, rY) : 204 === DY ? vr(YY, rY) : 205 === DY ? sr(YY, rY) : 206 === DY ? yr(YY, rY) : 207 === DY ? Er(YY, rY) : 208 === DY ? ar(YY, rY) : 209 === DY ? ur(YY, rY) : 210 === DY ? ir(YY, rY) : 211 === DY ? Wr(YY, rY) : DY > 223 ? -1 * (255 - DY + 1) : void 0
        },
        stringCheck: function(YY, rY) {
          const DY = YY[rY.offset];
          return DY < 192 && DY > 160 || 217 === DY || 218 === DY || 219 === DY
        }
      },
      Vr = {},
      Sr = new Map;

    function lr(YY, rY) {
      rY.constructor && (Object.prototype.hasOwnProperty.call(rY, "constructor") && null == rY.constructor[Symbol.metadata] && IY(rY.constructor), Sr.set(rY.constructor, YY), Vr[YY] = rY), rY.encode && (rr[YY] = rY.encode), rY.decode && (mr[YY] = rY.decode)
    }

    function Tr(YY) {
      for (const rY in YY) lr(rY, YY[rY]);
      return YY => VF(YY)
    }
    const er = "ArraySchema does not support streaming \u2014 positional ops (splice / unshift / reverse) shift subsequent indexes, so holding ADDs back for a later tick under `maxPerTick` would desync the decoder. Use `t.stream(X)` (stable monotonic positions) or `t.map(X).stream()` (stable keys) instead.";

    function Nr() {
      return {
        pendingByView: new Map,
        sentByView: new Map,
        broadcastPending: new Set,
        sentBroadcast: new Set,
        broadcastDeletes: new Set,
        maxPerTick: 32
      }
    }

    function Br(YY) {
      return YY._stream ??= Nr()
    }

    function cr(YY, rY, DY) {
      0 === rY.activeViews.size && Br(YY).broadcastPending.add(DY)
    }

    function Kr(YY, rY, DY, FY) {
      const IY = YY._stream;
      if (void 0 === IY) return !0;
      let RY = !1;
      return IY.broadcastPending.delete(FY) ? RY = !0 : IY.sentBroadcast.delete(FY) && IY.broadcastDeletes.add(FY), rY.forEachActiveView((YY => {
        const rY = IY.pendingByView.get(YY.id);
        if (rY?.has(FY)) return rY.delete(FY), void(RY = !0);
        const OY = IY.sentByView.get(YY.id);
        if (OY?.has(FY)) {
          OY.delete(FY);
          let rY = YY.changes.get(DY);
          void 0 === rY && (rY = new Map, YY.changes.set(DY, rY)), rY.set(FY, AY.DELETE)
        }
      })), RY
    }

    function Hr(YY, rY) {
      const DY = YY._stream?.pendingByView;
      if (void 0 === DY) return !1;
      for (const [FY, AY] of DY)
        if (AY.size > 0 && void 0 !== rY.activeViews.get(FY)?.deref()) return !0;
      return !1
    }

    function zr(YY) {
      const rY = YY._stream;
      return void 0 !== rY && (rY.broadcastPending.size > 0 || rY.broadcastDeletes.size > 0)
    }

    function Zr(YY, rY, DY) {
      const FY = Br(YY);
      let AY = FY.pendingByView.get(rY);
      void 0 === AY && (AY = new Set, FY.pendingByView.set(rY, AY)), AY.add(DY)
    }

    function Cr(YY, rY) {
      const DY = YY._stream;
      void 0 !== DY && (DY.pendingByView.delete(rY), DY.sentByView.delete(rY), DY.priorityByView?.delete(rY))
    }
    const fr = {
      8: "uint8",
      16: "uint16",
      32: "uint32"
    };

    function jr(YY) {
      if (null == YY || "object" !== typeof YY) throw new Error("t.quantized(): options object with { min, max } is required.");
      const {
        min: rY,
        max: DY
      } = YY;
      if ("number" !== typeof rY || "number" !== typeof DY || !(DY > rY) || !Number.isFinite(rY) || !Number.isFinite(DY)) throw new Error(`t.quantized(): require finite min < max (got min=${rY}, max=${DY}).`);
      const FY = YY.bits ?? 16;
      if (8 !== FY && 16 !== FY && 32 !== FY) throw new Error(`t.quantized(): bits must be 8, 16 or 32 (got ${FY}).`);
      const AY = YY.mode ?? "clamp";
      if ("clamp" !== AY && "wrap" !== AY) throw new Error(`t.quantized(): mode must be "clamp" or "wrap" (got ${JSON.stringify(AY)}).`);
      const IY = "wrap" === AY,
        RY = Math.pow(2, FY);
      return {
        min: rY,
        max: DY,
        bits: FY,
        wrap: IY,
        wire: fr[FY],
        range: DY - rY,
        span: IY ? RY : rY === -DY ? RY - 2 : RY - 1
      }
    }

    function hr(YY) {
      return null !== YY && "object" === typeof YY && void 0 !== YY.quantized
    }

    function dr(YY, rY) {
      if (YY.wrap) {
        if (!Number.isFinite(rY)) return 0;
        const DY = YY.range;
        let FY = (rY - YY.min) % DY;
        FY < 0 && (FY += DY);
        const AY = YY.span;
        return Math.floor(FY / DY * AY + .5) % AY
      }
      if (rY !== rY) return 0;
      const DY = rY < YY.min ? YY.min : rY > YY.max ? YY.max : rY;
      return Math.floor((DY - YY.min) / YY.range * YY.span + .5)
    }

    function Jr(YY, rY) {
      return YY.min + rY / YY.span * YY.range
    }

    function Mr(YY) {
      const rY = rr[YY.wire];
      return (DY, FY, AY) => rY(DY, dr(YY, FY), AY)
    }
    class wr {
      types = {};
      schemas = new Map;
      hasFilters = !1;
      static inheritedTypes = new WeakMap;
      static cachedContexts = new WeakMap;
      static register(YY) {
        const rY = Object.getPrototypeOf(YY);
        if (rY !== KF) {
          let DY = wr.inheritedTypes.get(rY);
          DY || (DY = new Set, wr.inheritedTypes.set(rY, DY)), DY.add(YY)
        }
      }
      static cache(YY) {
        let rY = wr.cachedContexts.get(YY);
        return rY || (rY = new wr(YY), wr.cachedContexts.set(YY, rY)), rY
      }
      constructor(YY) {
        YY && this.discoverTypes(YY)
      }
      has(YY) {
        return this.schemas.has(YY)
      }
      get(YY) {
        return this.types[YY]
      }
      add(YY) {
        let rY = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.schemas.size;
        return !this.schemas.has(YY) && (this.types[rY] = YY, null == YY[Symbol.metadata] && xr.initialize(YY), this.schemas.set(YY, rY), !0)
      }
      getTypeId(YY) {
        return this.schemas.get(YY)
      }
      discoverTypes(YY) {
        if (!this.add(YY)) return;
        wr.inheritedTypes.get(YY)?.forEach((YY => {
          this.discoverTypes(YY)
        }));
        let rY = YY;
        for (;
          (rY = Object.getPrototypeOf(rY)) && rY !== KF && rY !== Function.prototype;) this.discoverTypes(rY);
        const DY = YY[Symbol.metadata];
        (DY[KY] || DY[jY]) && (this.hasFilters = !0);
        for (const FY in DY) {
          const YY = DY[FY].type;
          if ("string" !== typeof YY && !hr(YY))
            if ("function" === typeof YY) this.discoverTypes(YY);
            else {
              const rY = Object.values(YY)[0];
              if ("string" === typeof rY) continue;
              this.discoverTypes(rY)
            }
        }
      }
      debug() {
        return `TypeContext ->\n\tSchema types: ${this.schemas.size}\n\thasFilters: ${this.hasFilters}`
      }
    }

    function br(YY) {
      const rY = qr(YY);
      return rY ? {
        complexTypeKlass: Vr[rY],
        childType: YY[rY]
      } : {
        complexTypeKlass: !1,
        childType: YY
      }
    }

    function Xr(YY, rY) {
      const DY = pr(YY),
        FY = qr(DY),
        AY = FY && qr(DY[FY]);
      if (AY) throw new Error(`${rY?`${rY}: `:""}@colyseus/schema: nested collections are not supported ("${FY}" of "${AY}"). Collections can only hold primitive types or Schema classes, wrap the inner ${AY} in a Schema class.`);
      return DY
    }

    function qr(YY) {
      return "object" === typeof YY && null !== YY ? Object.keys(YY).find((YY => void 0 !== Vr[YY])) : void 0
    }

    function pr(YY) {
      if ("object" !== typeof YY || null === YY) return YY;
      if (Array.isArray(YY)) return {
        array: pr(YY[0])
      };
      const rY = function(YY) {
        const rY = Object.keys(YY),
          DY = rY.filter((YY => /\d+/.test(YY)));
        if (DY.length > 0 && DY.length === rY.length / 2 && YY[YY[DY[0]]] == DY[0]) return "number";
        if (rY.length > 0 && rY.every((rY => YY[rY] === rY))) return "string"
      }(YY);
      if (rY) return rY;
      if (hr(YY)) return "string" === typeof YY.quantized.wire ? YY : {
        quantized: jr(YY.quantized)
      };
      if (void 0 !== YY.type) return pr(YY.type);
      const DY = qr(YY);
      return DY && (YY[DY] = pr(YY[DY])), YY
    }
    const kr = [cY, zY, ZY, CY, fY, jY, NY];

    function Gr(YY, rY, DY) {
      YY[rY] || Object.defineProperty(YY, rY, {
        value: [],
        enumerable: !1,
        configurable: !0,
        writable: !0
      }), YY[rY].push(DY)
    }
    const xr = {
        addField(YY, rY, DY, FY, AY) {
          if (rY >= 63) throw new Error(`Can't define field '${DY}'.\nSchema instances may only have up to 63 fields.`);
          YY[rY] = Object.assign(YY[rY] || {}, {
            type: FY,
            index: rY,
            name: DY
          }), Object.defineProperty(YY, TY, {
            value: YY[TY] || {},
            enumerable: !1,
            configurable: !0
          }), YY[TY][DY] = AY || {
            value: void 0,
            writable: !0,
            enumerable: !0,
            configurable: !0
          }, Object.defineProperty(YY, BY, {
            value: rY,
            enumerable: !1,
            configurable: !0
          }), Object.defineProperty(YY, DY, {
            value: rY,
            enumerable: !1,
            configurable: !0
          }), "string" === typeof YY[rY].type || hr(YY[rY].type) || (void 0 === YY[cY] && Object.defineProperty(YY, cY, {
            value: [],
            enumerable: !1,
            configurable: !0
          }), YY[cY].push(rY));
          const IY = YY[rY].type;
          if (IY && "object" === typeof IY && void 0 !== IY.stream) {
            if (void 0 !== IY.array) throw new Error(er);
            YY[rY].stream = !0, YY[jY] || Object.defineProperty(YY, jY, {
              value: [],
              enumerable: !1,
              configurable: !0,
              writable: !0
            }), YY[jY].includes(rY) || YY[jY].push(rY);
            const AY = FY?.priority;
            "function" === typeof AY && xr.setStreamPriority(YY, DY, AY)
          }
        },
        setTag(YY, rY, DY) {
          const FY = YY[rY];
          if (YY[FY].tag = DY, YY[KY] || (Object.defineProperty(YY, KY, {
              value: [],
              enumerable: !1,
              configurable: !0
            }), Object.defineProperty(YY, HY, {
              value: {},
              enumerable: !1,
              configurable: !0
            })), YY[KY].push(FY), DY < 0) YY[HY][DY] || (YY[HY][DY] = []), YY[HY][DY].push(FY);
          else
            for (let AY = DY; AY > 0; AY &= AY - 1) {
              const rY = AY & -AY;
              YY[HY][rY] || (YY[HY][rY] = []), YY[HY][rY].push(FY)
            }
        },
        setUnreliable(YY, rY) {
          const DY = YY[rY];
          if ("string" !== typeof YY[DY].type) throw new Error(`@unreliable cannot be applied to ref-type field "${rY}". For ref-type fields, mark each primitive sub-field with @unreliable instead. See README "Limitations and best practices".`);
          YY[DY].unreliable = !0, YY[zY] || Object.defineProperty(YY, zY, {
            value: [],
            enumerable: !1,
            configurable: !0,
            writable: !0
          }), YY[zY].push(DY)
        },
        setPatchOnly(YY, rY) {
          const DY = YY[rY];
          if (YY[DY].fullStateOnly) throw new Error(`field "${rY}" cannot be both patchOnly and fullStateOnly \u2014 those are the only two delivery channels, so the field would never reach a client.`);
          YY[DY].patchOnly = !0, Gr(YY, ZY, DY), Gr(YY, CY, DY)
        },
        setDeprecated(YY, rY) {
          const DY = YY[rY];
          YY[DY].deprecated = !0, Gr(YY, CY, DY), Object.defineProperty(YY, DY, {
            value: YY[DY],
            enumerable: !1,
            configurable: !0
          })
        },
        setFullStateOnly(YY, rY) {
          const DY = YY[rY];
          if (YY[DY].patchOnly) throw new Error(`field "${rY}" cannot be both patchOnly and fullStateOnly \u2014 those are the only two delivery channels, so the field would never reach a client.`);
          YY[DY].fullStateOnly = !0, Gr(YY, fY, DY)
        },
        setStream(YY, rY) {
          const DY = YY[rY];
          YY[DY].stream = !0, YY[jY] || Object.defineProperty(YY, jY, {
            value: [],
            enumerable: !1,
            configurable: !0,
            writable: !0
          }), YY[jY].push(DY)
        },
        setStreamPriority(YY, rY, DY) {
          const FY = YY[rY];
          YY[hY] || Object.defineProperty(YY, hY, {
            value: {},
            enumerable: !1,
            configurable: !0,
            writable: !0
          }), YY[hY][FY] = DY
        },
        getStreamPriority: (YY, rY) => YY?.[hY]?.[rY],
        defineField(YY, rY, DY, FY, AY) {
          const IY = Xr(AY, `${YY.name}.${FY}`),
            {
              complexTypeKlass: RY,
              childType: OY
            } = br(IY);
          xr.addField(rY, DY, FY, IY, lF(FY, DY, OY, RY)), rY[TY][FY] && Object.defineProperty(YY.prototype, FY, rY[TY][FY]), ("string" === typeof IY || hr(IY)) && (rY[NY] || Object.defineProperty(rY, NY, {
            value: [],
            enumerable: !1,
            configurable: !0,
            writable: !0
          }), rY[NY][DY] = "string" === typeof IY ? rr[IY] : Mr(IY.quantized))
        },
        setFields(YY, rY) {
          const DY = YY.prototype.constructor;
          wr.register(DY);
          const FY = Object.getPrototypeOf(DY),
            AY = FY && FY[Symbol.metadata],
            IY = xr.initialize(DY);
          DY[gY] || (DY[gY] = KF[gY]), DY[aY] || (DY[aY] = KF[aY]), DY[vY] || (DY[vY] = KF[vY]), DY.prototype.toJSON || (DY.prototype.toJSON = KF.prototype.toJSON);
          let RY = IY[BY] ?? (AY && AY[BY]) ?? -1;
          RY++, IY[NY] || Object.defineProperty(IY, NY, {
            value: AY?.[NY] ? [...AY[NY]] : [],
            enumerable: !1,
            configurable: !0,
            writable: !0
          });
          for (const OY in rY) {
            if (void 0 !== IY[OY]) throw new Error(`@colyseus/schema: Duplicate '${OY}' definition on '${DY.name||"(anonymous)"}'.`);
            xr.defineField(DY, IY, RY, OY, rY[OY]), RY++
          }
          return YY
        },
        isDeprecated: (YY, rY) => !0 === YY[rY].deprecated,
        initialize(YY) {
          const rY = Object.getPrototypeOf(YY),
            DY = rY[Symbol.metadata];
          let FY = YY[Symbol.metadata] ?? Object.create(null);
          if (rY !== KF && FY === DY && (FY = Object.create(null), DY)) {
            Object.setPrototypeOf(FY, DY), Object.defineProperty(FY, BY, {
              value: DY[BY],
              enumerable: !1,
              configurable: !0,
              writable: !0
            }), void 0 !== DY[KY] && (Object.defineProperty(FY, KY, {
              value: [...DY[KY]],
              enumerable: !1,
              configurable: !0,
              writable: !0
            }), Object.defineProperty(FY, HY, {
              value: {
                ...DY[HY]
              },
              enumerable: !1,
              configurable: !0,
              writable: !0
            }));
            for (const YY of kr) {
              const rY = DY[YY];
              void 0 !== rY && Object.defineProperty(FY, YY, {
                value: [...rY],
                enumerable: !1,
                configurable: !0,
                writable: !0
              })
            }
            Object.defineProperty(FY, TY, {
              value: {
                ...DY[TY]
              },
              enumerable: !1,
              configurable: !0,
              writable: !0
            })
          }
          return Object.defineProperty(YY, Symbol.metadata, {
            value: FY,
            writable: !1,
            configurable: !0
          }), FY
        },
        isValidInstance: YY => YY.constructor[Symbol.metadata] && Object.prototype.hasOwnProperty.call(YY.constructor[Symbol.metadata], BY),
        getFields(YY) {
          const rY = YY[Symbol.metadata],
            DY = {};
          for (let FY = 0; FY <= rY[BY]; FY++) DY[rY[FY].name] = rY[FY].type;
          return DY
        },
        hasViewTagAtIndex: (YY, rY) => YY?.[KY]?.includes(rY),
        hasUnreliableAtIndex: (YY, rY) => YY?.[zY]?.includes(rY),
        hasPatchOnlyAtIndex: (YY, rY) => YY?.[ZY]?.includes(rY),
        hasFullStateOnlyAtIndex: (YY, rY) => YY?.[fY]?.includes(rY),
        hasStreamAtIndex: (YY, rY) => YY?.[jY]?.includes(rY)
      },
      nr = (YY, rY, DY) => YY(rY, DY);
    class Pr {
      dirtyLow = 0;
      dirtyHigh = 0;
      ops;
      constructor(YY) {
        this.ops = new Uint8Array(Math.max(YY + 1, 1))
      }
      record(YY, rY) {
        const DY = this.ops[YY];
        0 === DY ? this.ops[YY] = rY : (DY === AY.DELETE || DY === AY.ADD && rY === AY.DELETE_AND_ADD) && (this.ops[YY] = AY.DELETE_AND_ADD), YY < 32 ? this.dirtyLow |= 1 << YY : this.dirtyHigh |= 1 << YY - 32
      }
      recordDelete(YY, rY) {
        this.ops[YY] = rY, YY < 32 ? this.dirtyLow |= 1 << YY : this.dirtyHigh |= 1 << YY - 32
      }
      recordRaw(YY, rY) {
        this.record(YY, rY)
      }
      operationAt(YY) {
        const rY = this.ops[YY];
        return 0 === rY ? void 0 : rY
      }
      setOperationAt(YY, rY) {
        this.ops[YY] = rY
      }
      forEach(YY) {
        this.forEachWithCtx(YY, nr)
      }
      forEachWithCtx(YY, rY) {
        let DY = this.dirtyLow,
          FY = this.dirtyHigh;
        const AY = this.ops;
        for (; 0 !== DY;) {
          const FY = DY & -DY,
            IY = 31 - Math.clz32(FY);
          DY ^= FY, rY(YY, IY, AY[IY])
        }
        for (; 0 !== FY;) {
          const DY = FY & -FY,
            IY = 31 - Math.clz32(DY) + 32;
          FY ^= DY, rY(YY, IY, AY[IY])
        }
      }
      size() {
        return Lr(this.dirtyLow) + Lr(this.dirtyHigh)
      }
      has() {
        return 0 !== (this.dirtyLow | this.dirtyHigh)
      }
      reset() {
        this.dirtyLow = 0, this.dirtyHigh = 0, this.ops.fill(0)
      }
    }
    class Ur {
      ty = new Map;
      pureOps = [];
      record(YY, rY) {
        const DY = this.ty.get(YY);
        void 0 === DY ? this.ty.set(YY, rY) : (DY === AY.DELETE || DY === AY.ADD && rY === AY.DELETE_AND_ADD) && this.ty.set(YY, AY.DELETE_AND_ADD)
      }
      recordDelete(YY, rY) {
        this.ty.set(YY, rY)
      }
      recordRaw(YY, rY) {
        this.ty.set(YY, rY)
      }
      recordPure(YY) {
        this.pureOps.push([this.ty.size, YY])
      }
      operationAt(YY) {
        return this.ty.get(YY)
      }
      setOperationAt(YY, rY) {
        this.ty.has(YY) && this.ty.set(YY, rY)
      }
      forEach(YY) {
        this.forEachWithCtx(YY, nr)
      }
      forEachWithCtx(YY, rY) {
        const DY = this.pureOps;
        if (DY.length > 0) {
          let FY = 0,
            AY = 0;
          for (const [IY, RY] of this.ty) {
            for (; FY < DY.length && DY[FY][0] <= AY;) {
              const AY = DY[FY++][1];
              rY(YY, -AY, AY)
            }
            rY(YY, IY, RY), AY++
          }
          for (; FY < DY.length;) {
            const AY = DY[FY++][1];
            rY(YY, -AY, AY)
          }
        } else
          for (const [FY, AY] of this.ty) rY(YY, FY, AY)
      }
      size() {
        return this.ty.size + this.pureOps.length
      }
      has() {
        return this.ty.size > 0 || this.pureOps.length > 0
      }
      reset() {
        this.ty.clear(), this.pureOps.length = 0
      }
      shift(YY) {
        const rY = new Map;
        for (const [DY, FY] of this.ty) rY.set(DY + YY, FY);
        this.ty = rY
      }
    }

    function Lr(YY) {
      return 16843009 * ((YY = (858993459 & (YY -= YY >>> 1 & 1431655765)) + (YY >>> 2 & 858993459)) + (YY >>> 4) & 252645135) >>> 24
    }

    function tr(YY) {
      if (void 0 === YY) return 0;
      let rY = 0;
      for (let DY = 0, FY = YY.length; DY < FY; DY++) {
        const FY = YY[DY];
        FY < 32 && (rY |= 1 << FY)
      }
      return rY
    }

    function YD(YY) {
      const rY = YY.constructor;
      if (Object.prototype.hasOwnProperty.call(rY, eY)) return rY[eY];
      const DY = rY[Symbol.metadata],
        FY = xr.isValidInstance(YY),
        AY = (DY?.[KY]?.length ?? 0) > 0,
        IY = function(YY) {
          const rY = [],
            DY = [],
            FY = [],
            AY = [],
            IY = YY?.[BY];
          if (void 0 === IY) return {
            names: rY,
            types: DY,
            tags: FY,
            encoders: AY
          };
          const RY = YY[NY];
          for (let OY = 0; OY <= IY; OY++) {
            const IY = YY[OY];
            void 0 !== IY ? (rY[OY] = IY.name, DY[OY] = IY.type, FY[OY] = IY.tag, AY[OY] = RY?.[OY]) : (rY[OY] = void 0, DY[OY] = void 0, FY[OY] = void 0, AY[OY] = void 0)
          }
          return {
            names: rY,
            types: DY,
            tags: FY,
            encoders: AY
          }
        }(DY),
        RY = FY && !AY ? void 0 : rY[uY],
        OY = {
          encoder: rY[aY],
          filter: RY,
          metadata: DY,
          isSchema: FY,
          filterBitmask: FY ? tr(DY?.[KY]) : 0,
          hasAnyFullStateOnly: (DY?.[fY]?.length ?? 0) > 0,
          hasAnyUnreliable: (DY?.[zY]?.length ?? 0) > 0,
          hasAnyStream: (DY?.[jY]?.length ?? 0) > 0,
          hasAnyView: AY,
          fullStateOnlyBitmask: tr(DY?.[fY]),
          unreliableBitmask: tr(DY?.[zY]),
          streamBitmask: tr(DY?.[jY]),
          names: IY.names,
          types: IY.types,
          tags: IY.tags,
          encoders: IY.encoders
        };
      return Object.defineProperty(rY, eY, {
        value: OY,
        enumerable: !1,
        writable: !0,
        configurable: !0
      }), OY
    }

    function rD(YY, rY) {
      if (void 0 !== YY.parentRef && rY(YY.parentRef, YY._parentIndex)) return !0;
      for (let DY = YY.extraParents; void 0 !== DY; DY = DY.next)
        if (rY(DY.ref, DY.index)) return !0;
      return !1
    }
    const DD = (YY, rY) => {
        YY.isFieldUnreliable(rY) ? YY.ensureUnreliableRecorder().record(rY, AY.ADD) : YY.record(rY, AY.ADD)
      },
      FD = (YY, rY) => YY(rY);

    function AD(YY, rY, DY) {
      const FY = YY.refTarget;
      if (void 0 !== FY[oY]) {
        if (YY.isPatchOnly) return;
        if (Array.isArray(FY.items)) {
          const YY = FY.items;
          for (let FY = 0, AY = YY.length; FY < AY; FY++) void 0 !== YY[FY] && DY(rY, FY)
        } else if (void 0 !== FY.journal)
          for (const [YY, AY] of FY.journal.keyByIndex) FY.$items.has(AY) && DY(rY, YY);
        else if (void 0 !== FY.$items)
          for (const YY of FY.$items.keys()) DY(rY, YY)
      } else {
        const AY = YY.metadata;
        if (!AY) return;
        const IY = AY[BY] ?? -1,
          RY = AY[CY],
          OY = YY.encDescriptor.names;
        for (let YY = 0; YY <= IY; YY++) {
          const AY = OY[YY];
          if (void 0 === AY) continue;
          if (RY && RY.includes(YY)) continue;
          const IY = FY[AY];
          void 0 !== IY && null !== IY && DY(rY, YY)
        }
      }
    }

    function ID(YY, rY, DY, FY) {
      ! function(YY, rY, DY) {
        if (!rY) return;
        const FY = rY[QY],
          AY = !FY._isSchema;
        let IY;
        AY ? (rY = FY.parent, DY = FY.parentIndex, IY = rY?.[QY].metadata) : IY = FY.metadata;
        const RY = (IY?.[ZY]?.includes(DY) ? eD : 0) | (IY?.[fY]?.includes(DY) ? ND : 0),
          OY = FY.flags & KD | RY,
          gY = YY.flags;
        YY.flags = gY | OY;
        OY & ~gY & ND && (YY.reset(), YY.unreliableRecorder?.reset());
        const aY = YY.root?.types;
        if (!aY?.hasFilters) return;
        const vY = IY?.[KY]?.includes(DY) ?? !1,
          uY = IY?.[jY]?.includes(DY) ?? !1,
          sY = FY.isFiltered || vY || uY;
        if (YY.isFiltered = sY, uY && !AY) {
          YY.isStreamCollection = !0;
          const rY = Br(YY.ref);
          if (void 0 === rY.priority) {
            const YY = xr.getStreamPriority(IY, DY);
            void 0 !== YY && (rY.priority = YY)
          }
          YY.root?.registerStream(YY.ref)
        }
        if (sY) {
          const rY = OD(YY);
          YY.isVisibilitySharedWithParent = FY.isFiltered && rY && !uY && (!vY || AY && IY[DY].tag !== yF)
        }
      }(YY, rY, DY), YY.isFullStateOnly || (YY.has() && YY.root?.enqueueChangeTree(YY), YY.unreliableRecorder?.has() && YY.root?.enqueueUnreliable(YY), YY.has() || YY.unreliableRecorder?.has() || YY.root?.enqueueChangeTree(YY))
    }

    function RD(YY) {
      const rY = YY.pendingFilterRefresh;
      for (let DY = 0; DY < rY.length; DY++) {
        const YY = rY[DY];
        0 !== (YY.flags & cD) && gD(YY)
      }
      rY.length = 0
    }

    function OD(YY) {
      return YY._isSchema || "string" !== typeof YY.refTarget[oY]
    }

    function gD(YY) {
      YY.flags &= ~cD;
      const rY = YY.root;
      if (void 0 === rY || void 0 === YY.parentRef) return;
      const DY = OD(YY);
      let FY = iD(YY, YY.parentRef, YY._parentIndex, DY);
      for (let IY = YY.extraParents; void 0 !== IY && FY !== sD; IY = IY.next) FY |= iD(YY, IY.ref, IY.index, DY);
      if (0 === FY) return;
      YY.isVisibilitySharedWithParent = 0 !== (FY & uD);
      const AY = 0 === (FY & vD);
      AY !== YY.isFiltered && (YY.isFiltered = AY, AY || YY.isFullStateOnly || (YY.forEachLiveWithCtx(YY, DD), YY.has() && rY.enqueueChangeTree(YY), YY.unreliableRecorder?.has() && rY.enqueueUnreliable(YY)), YY.forEachChildWithCtx(YY, yD))
    }
    const aD = 1,
      vD = 2,
      uD = 4,
      sD = aD | vD | uD;

    function iD(YY, rY, DY, FY) {
      const AY = rY[QY];
      if (AY.root !== YY.root || ! function(YY, rY, DY) {
          const FY = rY.refTarget;
          if (rY.isArray) {
            const rY = FY.items,
              AY = rY[DY];
            if (void 0 !== AY && AY[QY] === YY) return !0;
            for (let DY = 0, FY = rY.length; DY < FY; DY++) {
              const FY = rY[DY];
              if (void 0 !== FY && FY[QY] === YY) return !0
            }
            return !1
          }
          const AY = rY.getValue(DY);
          return void 0 !== AY && AY[QY] === YY
        }(YY, AY, DY)) return 0;
      AY.flags & cD && gD(AY);
      let IY = aD;
      if (AY._isSchema) {
        void 0 !== AY.encDescriptor.tags[DY] || AY.isFieldStream(DY) || (AY.isFiltered ? FY && (IY |= uD) : IY |= vD)
      } else if (AY.isFiltered) {
        if (FY && !AY.isStreamCollection) {
          const YY = AY.parent?.[QY];
          (YY?._isSchema ? YY.encDescriptor.tags[AY.parentIndex] : void 0) !== yF && (IY |= uD)
        }
      } else IY |= vD;
      return IY
    }
    const yD = (YY, rY, DY) => {
      gD(rY)
    };

    function QD(YY, rY, DY, FY) {
      if (YY.addParent(rY, FY), !DY) return;
      const AY = DY.add(YY);
      DY !== YY.root && (YY.root = DY, ID(YY, rY, FY));
      const IY = rY?.[QY];
      if (void 0 !== IY && void 0 !== IY.subscribedViews && void 0 !== rY[oY] && function(YY, rY, DY, FY) {
          const AY = YY.subscribedViews;
          if (void 0 === AY) return;
          const IY = YY.isStreamCollection,
            RY = IY ? YY.ref : void 0,
            OY = IY ? void 0 : DY[QY];
          for (let gY = 0, aY = AY.length; gY < aY; gY++) {
            let YY = AY[gY];
            for (; 0 !== YY;) {
              const DY = YY & -YY;
              YY ^= DY;
              const aY = 32 * gY + (31 - Math.clz32(DY)),
                vY = FY.activeViews.get(aY),
                uY = vY?.deref();
              void 0 !== uY ? IY ? Zr(RY, aY, rY) : void 0 !== OY && uY.markVisible(OY) : AY[gY] &= ~DY
            }
          }
        }(IY, FY, YY.ref, DY), AY) {
        let rY = mD[VD];
        void 0 === rY && (rY = {
          parentRef: void 0,
          root: void 0
        }, mD[VD] = rY), rY.parentRef = YY.ref, rY.root = DY, VD++, WD(YY, rY, SD), VD--
      }
    }

    function oD(YY, rY, DY) {
      YY(rY, DY)
    }

    function WD(YY, rY, DY) {
      const FY = YY.refTarget;
      if (FY[oY]) {
        if ("string" !== typeof FY[oY]) {
          const YY = FY.items;
          if (void 0 !== YY)
            for (let FY = 0, AY = YY.length; FY < AY; FY++) {
              const AY = YY[FY];
              AY && DY(rY, AY[QY], FY)
            } else {
              const YY = FY.$items,
                AY = FY._collectionIndexes;
              for (const FY of YY.keys()) {
                const IY = YY.get(FY);
                IY && DY(rY, IY[QY], AY?.[FY] ?? FY)
              }
            }
        }
      } else {
        const AY = YY.metadata,
          IY = AY?.[cY];
        if (!IY) return;
        const RY = YY.encDescriptor.names;
        for (let YY = 0, OY = IY.length; YY < OY; YY++) {
          const AY = IY[YY],
            OY = FY[RY[AY]];
          OY && DY(rY, OY[QY], AY)
        }
      }
    }

    function ED(YY, rY, DY) {
      rY.root !== YY ? rY.setRoot(YY) : YY.add(rY)
    }
    const mD = [];
    let VD = 0;

    function SD(YY, rY, DY) {
      if (rY.root === YY.root) return YY.root.add(rY), void YY.root.moveNextToParent(rY);
      rY.setParent(YY.parentRef, YY.root, DY)
    }

    function lD(YY, rY, DY) {
      const FY = (3 & DY) << 3;
      return DY < 4 ? YY >>> FY & 255 : rY >>> FY & 255
    }
    const TD = (YY, rY, DY) => YY(rY, DY);
    const eD = 16,
      ND = 32,
      BD = 128,
      cD = 256,
      KD = eD | ND;
    class HD {
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
      set isFiltered(YY) {
        this.flags = YY ? 1 | this.flags : -2 & this.flags
      }
      get isVisibilitySharedWithParent() {
        return 0 !== (2 & this.flags)
      }
      set isVisibilitySharedWithParent(YY) {
        this.flags = YY ? 2 | this.flags : -3 & this.flags
      }
      get isNew() {
        return 0 !== (4 & this.flags)
      }
      set isNew(YY) {
        this.flags = YY ? 4 | this.flags : -5 & this.flags
      }
      get isUnreliable() {
        return 0 !== (8 & this.flags)
      }
      set isUnreliable(YY) {
        this.flags = YY ? 8 | this.flags : -9 & this.flags
      }
      get isPatchOnly() {
        return 0 !== (this.flags & eD)
      }
      set isPatchOnly(YY) {
        this.flags = YY ? this.flags | eD : this.flags & ~eD
      }
      get isFullStateOnly() {
        return 0 !== (this.flags & ND)
      }
      set isFullStateOnly(YY) {
        this.flags = YY ? this.flags | ND : this.flags & ~ND
      }
      get isStreamCollection() {
        return 0 !== (64 & this.flags)
      }
      set isStreamCollection(YY) {
        this.flags = YY ? 64 | this.flags : -65 & this.flags
      }
      get needsRestage() {
        return 0 !== (this.flags & BD)
      }
      set needsRestage(YY) {
        this.flags = YY ? this.flags | BD : -129 & this.flags
      }
      get hasFilteredFields() {
        return this.isFiltered || this.encDescriptor.hasAnyView
      }
      ensureUnreliableRecorder() {
        return void 0 === this.unreliableRecorder && (this.unreliableRecorder = this._isSchema ? new Pr(this.metadata?.[BY] ?? 0) : new Ur), this.unreliableRecorder
      }
      isFieldUnreliable(YY) {
        const rY = this.encDescriptor;
        return !!rY.hasAnyUnreliable && (YY < 32 ? 0 !== (rY.unreliableBitmask & 1 << YY) : xr.hasUnreliableAtIndex(this.metadata, YY))
      }
      isFieldFullStateOnly(YY) {
        if (this.isFullStateOnly) return !0;
        const rY = this.encDescriptor;
        return !!rY.hasAnyFullStateOnly && (YY < 32 ? 0 !== (rY.fullStateOnlyBitmask & 1 << YY) : xr.hasFullStateOnlyAtIndex(this.metadata, YY))
      }
      isFieldStream(YY) {
        const rY = this.encDescriptor;
        return !!rY.hasAnyStream && (YY < 32 ? 0 !== (rY.streamBitmask & 1 << YY) : xr.hasStreamAtIndex(this.metadata, YY))
      }
      constructor(YY) {
        let rY = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : YY;
        this.ref = YY, this.refTarget = rY;
        const DY = YD(YY);
        this.encDescriptor = DY, this.metadata = DY.metadata;
        const FY = DY.isSchema;
        if (this._isSchema = FY, this.ops = void 0, this.collDirty = void 0, this.collPureOps = void 0, FY) {
          const YY = this.metadata?.[BY] ?? 0;
          YY > 7 && (this.ops = new Uint8Array(YY + 1))
        } else this.collDirty = new Map
      }
      _opAt(YY) {
        const rY = this.ops;
        if (void 0 !== rY) return rY[YY];
        const DY = (3 & YY) << 3;
        return YY < 4 ? this.opsLow >>> DY & 255 : this.opsHigh >>> DY & 255
      }
      _opPut(YY, rY) {
        const DY = this.ops;
        if (void 0 !== DY) return void(DY[YY] = rY);
        const FY = (3 & YY) << 3,
          AY = ~(255 << FY);
        YY < 4 ? this.opsLow = this.opsLow & AY | rY << FY : this.opsHigh = this.opsHigh & AY | rY << FY
      }
      _markDirty(YY) {
        YY < 32 ? this.dirtyLow |= 1 << YY : this.dirtyHigh |= 1 << YY - 32
      }
      record(YY, rY) {
        if (this._isSchema) {
          const DY = this._opAt(YY);
          0 === DY ? this._opPut(YY, rY) : (DY === AY.DELETE || DY === AY.ADD && rY === AY.DELETE_AND_ADD) && this._opPut(YY, AY.DELETE_AND_ADD), this._markDirty(YY)
        } else {
          const DY = this.collDirty,
            FY = DY.get(YY);
          let IY;
          IY = void 0 === FY ? rY : FY === AY.DELETE || FY === AY.ADD && rY === AY.DELETE_AND_ADD ? AY.DELETE_AND_ADD : FY, DY.set(YY, IY)
        }
      }
      recordDelete(YY, rY) {
        this._isSchema ? (this._opPut(YY, rY), this._markDirty(YY)) : this.collDirty.set(YY, rY)
      }
      recordRaw(YY, rY) {
        this._isSchema ? (this._opPut(YY, rY), this._markDirty(YY)) : this.collDirty.set(YY, rY)
      }
      recordPure(YY) {
        if (this._isSchema) throw new Error("ChangeTree (Schema): pure operations are not supported");
        (this.collPureOps ??= []).push([this.collDirty.size, YY])
      }
      operationAt(YY) {
        if (this._isSchema) {
          const rY = this._opAt(YY);
          return 0 === rY ? void 0 : rY
        }
        return this.collDirty.get(YY)
      }
      setOperationAt(YY, rY) {
        if (this._isSchema) this._opPut(YY, rY);
        else {
          const DY = this.collDirty;
          DY.has(YY) && DY.set(YY, rY)
        }
      }
      forEach(YY) {
        this.forEachWithCtx(YY, TD)
      }
      forEachWithCtx(YY, rY) {
        if (this._isSchema) {
          let DY = this.dirtyLow,
            FY = this.dirtyHigh;
          const AY = this.ops;
          if (void 0 !== AY) {
            for (; 0 !== DY;) {
              const FY = DY & -DY,
                IY = 31 - Math.clz32(FY);
              DY ^= FY, rY(YY, IY, AY[IY])
            }
            for (; 0 !== FY;) {
              const DY = FY & -FY,
                IY = 31 - Math.clz32(DY) + 32;
              FY ^= DY, rY(YY, IY, AY[IY])
            }
          } else {
            const FY = this.opsLow,
              AY = this.opsHigh;
            for (; 0 !== DY;) {
              const IY = DY & -DY,
                RY = 31 - Math.clz32(IY);
              DY ^= IY, rY(YY, RY, lD(FY, AY, RY))
            }
          }
          return
        }
        const DY = this.collDirty,
          FY = this.collPureOps;
        if (void 0 !== FY && FY.length > 0) {
          let AY = 0,
            IY = 0;
          for (const [RY, OY] of DY) {
            for (; AY < FY.length && FY[AY][0] <= IY;) {
              const DY = FY[AY++][1];
              rY(YY, -DY, DY)
            }
            rY(YY, RY, OY), IY++
          }
          for (; AY < FY.length;) {
            const DY = FY[AY++][1];
            rY(YY, -DY, DY)
          }
        } else
          for (const [AY, IY] of DY) rY(YY, AY, IY)
      }
      size() {
        return this._isSchema ? Lr(this.dirtyLow) + Lr(this.dirtyHigh) : this.collDirty.size + (this.collPureOps?.length ?? 0)
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
      insertAt(YY, rY) {
        if (this._isSchema) throw new Error("ChangeTree (Schema): insertAt is not supported");
        const DY = this.collDirty,
          FY = new Map,
          IY = !this.paused && !this.isFullStateOnly;
        if (YY > 0)
          for (const [AY, RY] of DY) AY < YY && FY.set(AY, RY);
        if (IY)
          for (let RY = 0; RY < rY; RY++) FY.set(YY + RY, AY.ADD);
        for (const [AY, RY] of DY) AY >= YY && FY.set(AY + rY, RY);
        this.collDirty = FY, IY && this.root?.enqueueChangeTree(this)
      }
      removeAt(YY, rY) {
        if (this._isSchema) throw new Error("ChangeTree (Schema): removeAt is not supported");
        const DY = this.collDirty,
          FY = YY + rY;
        let AY = !1;
        for (const RY of DY.keys())
          if (RY >= FY) {
            AY = !0;
            break
          } if (!AY) {
          for (let rY = YY; rY < FY; rY++) DY.delete(rY);
          return
        }
        const IY = new Map;
        for (const [RY, OY] of DY) RY < YY ? IY.set(RY, OY) : RY >= FY && IY.set(RY - rY, OY);
        this.collDirty = IY
      }
      unshift(YY) {
        this.insertAt(0, YY)
      }
      setRoot(YY) {
        ! function(YY, rY) {
          YY.root = rY;
          const DY = rY.add(YY);
          ID(YY, YY.parent, YY.parentIndex), DY && WD(YY, rY, ED)
        }(this, YY)
      }
      setParent(YY, rY, DY) {
        QD(this, YY, rY, DY)
      }
      forEachChild(YY) {
        WD(this, YY, oD)
      }
      forEachChildWithCtx(YY, rY) {
        WD(this, YY, rY)
      }
      forEachLive(YY) {
        AD(this, YY, FD)
      }
      forEachLiveWithCtx(YY, rY) {
        AD(this, YY, rY)
      }
      operation(YY) {
        this.paused || this.isFullStateOnly || (this.recordPure(YY), this.root?.enqueueChangeTree(this))
      }
      _routeAndRecord(YY, rY, DY) {
        if (!this.paused && !this.isFieldFullStateOnly(YY)) {
          if (this.isFieldUnreliable(YY) && !this.isNew) {
            const FY = this.ensureUnreliableRecorder();
            return DY ? FY.recordRaw(YY, rY) : FY.record(YY, rY), void this.root?.enqueueUnreliable(this)
          }
          DY ? this.recordRaw(YY, rY) : this.record(YY, rY), this.root?.enqueueChangeTree(this)
        }
      }
      change(YY) {
        let rY = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : AY.ADD;
        this._routeAndRecord(YY, rY, !1)
      }
      indexedOperation(YY, rY) {
        this._routeAndRecord(YY, rY, !0)
      }
      getChange(YY) {
        return this.operationAt(YY)
      }
      pause() {
        this.paused = !0
      }
      resume() {
        this.paused = !1
      }
      untracked(YY) {
        const rY = this.paused;
        this.paused = !0;
        try {
          return YY()
        } finally {
          this.paused = rY
        }
      }
      markDirty(YY) {
        let rY = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : AY.ADD;
        const DY = this.paused;
        this.paused = !1;
        try {
          this.change(YY, rY)
        } finally {
          this.paused = DY
        }
      }
      getValue(YY) {
        let rY = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return this.refTarget[sY](YY, rY)
      }
      delete(YY, rY) {
        if (void 0 === YY) {
          try {
            throw new Error(`@colyseus/schema ${this.ref.constructor.name}: trying to delete non-existing index '${YY}'`)
          } catch (IA) {
            console.warn(IA)
          }
          return
        }
        if (this.paused || this.isFieldFullStateOnly(YY)) return this.getValue(YY);
        const DY = this.isFieldUnreliable(YY) && !this.isNew;
        DY ? this.ensureUnreliableRecorder().recordDelete(YY, rY ?? AY.DELETE) : this.recordDelete(YY, rY ?? AY.DELETE);
        const FY = this.getValue(YY);
        return FY && FY[QY] && this.root?.remove(FY[QY]), DY ? this.root?.enqueueUnreliable(this) : this.root?.enqueueChangeTree(this), FY
      }
      endEncode() {
        this.reset(), this.changesNode = void 0, this._isSchema || this.refTarget[EY]?.(), this.isNew = !1
      }
      endEncodeUnreliable() {
        this.unreliableRecorder?.reset(), this.unreliableChangesNode = void 0, this._isSchema || this.refTarget[EY]?.()
      }
      discard() {
        this._isSchema || this.refTarget[EY]?.(), this.reset(), this.unreliableRecorder?.reset()
      }
      discardAll() {
        const YY = YY => {
          if (YY < 0) return;
          const rY = this.getValue(YY);
          rY && rY[QY] && rY[QY].discardAll()
        };
        this.forEach(YY), this.unreliableRecorder?.forEach(YY), this.discard()
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
      addParent(YY, rY) {
        ! function(YY, rY, DY) {
          if (YY.parentRef) {
            if (YY.parentRef[QY] === rY[QY]) return void(YY._parentIndex = DY);
            if (rD(YY, ((YY, DY) => YY[QY] === rY[QY]))) return void(YY._parentIndex = DY)
          }
          void 0 === YY.parentRef ? (YY.parentRef = rY, YY._parentIndex = DY) : (YY.extraParents = {
            ref: YY.parentRef,
            index: YY._parentIndex,
            next: YY.extraParents
          }, YY.parentRef = rY, YY._parentIndex = DY)
        }(this, YY, rY)
      }
      setParentIndex(YY, rY) {
        ! function(YY, rY, DY) {
          if (void 0 !== YY.extraParents)
            if (YY.parentRef[QY] !== rY[QY]) {
              for (let FY = YY.extraParents; void 0 !== FY; FY = FY.next)
                if (FY.ref[QY] === rY[QY]) return void(FY.index = DY)
            } else YY._parentIndex = DY;
          else YY._parentIndex = DY
        }(this, YY, rY)
      }
      removeParent() {
        return function(YY, rY) {
          if (YY.parentRef && YY.parentRef[QY] === rY[QY]) return YY.extraParents ? (YY.parentRef = YY.extraParents.ref, YY._parentIndex = YY.extraParents.index, YY.extraParents = YY.extraParents.next) : (YY.parentRef = void 0, YY._parentIndex = void 0), !0;
          let DY = YY.extraParents,
            FY = null;
          for (; DY;) {
            if (DY.ref[QY] === rY[QY]) return FY ? FY.next = DY.next : YY.extraParents = DY.next, !0;
            FY = DY, DY = DY.next
          }
          return void 0 === YY.parentRef
        }(this, arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.parent)
      }
      findParent(YY) {
        return function(YY, rY) {
          if (void 0 !== YY.parentRef && rY(YY.parentRef, YY._parentIndex)) return {
            ref: YY.parentRef,
            index: YY._parentIndex
          };
          for (let DY = YY.extraParents; void 0 !== DY; DY = DY.next)
            if (rY(DY.ref, DY.index)) return {
              ref: DY.ref,
              index: DY.index
            }
        }(this, YY)
      }
      hasParent(YY) {
        return rD(this, YY)
      }
      indexInParent(YY) {
        return function(YY, rY) {
          if (YY.parentRef && YY.parentRef[QY] === rY[QY]) return YY._parentIndex;
          for (let DY = YY.extraParents; void 0 !== DY; DY = DY.next)
            if (DY.ref[QY] === rY[QY]) return DY.index
        }(this, YY)
      }
      getAllParents() {
        return function(YY) {
          const rY = [];
          YY.parentRef && rY.push({
            ref: YY.parentRef,
            index: YY._parentIndex
          });
          let DY = YY.extraParents;
          for (; DY;) rY.push({
            ref: DY.ref,
            index: DY.index
          }), DY = DY.next;
          return rY
        }(this)
      }
    }
    class zD {
      ref;
      root = void 0;
      parentRef = void 0;
      paused = !1;
      isNew = !1;
      flags = 0;
      constructor(YY) {
        this.ref = YY
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
      untracked(YY) {
        return YY()
      }
      markDirty() {}
      forEachChild(YY) {
        const rY = this.ref;
        if (rY[oY]) {
          if ("string" !== typeof rY[oY])
            for (const [DY, FY] of rY.entries()) FY && YY(FY[QY], rY._collectionIndexes?.[DY] ?? DY);
          return
        }
        const DY = rY.constructor,
          FY = DY?.[Symbol.metadata];
        if (!FY) return;
        const AY = FY[cY] ?? [];
        for (let IY = 0; IY < AY.length; IY++) {
          const DY = AY[IY],
            RY = rY[FY[DY].name];
          RY && YY(RY[QY], DY)
        }
      }
      forEachChildWithCtx(YY, rY) {
        this.forEachChild(((DY, FY) => rY(YY, DY, FY)))
      }
      forEachLive() {}
      forEachLiveWithCtx() {}
      forEach() {}
    }

    function ZD(YY) {
      let rY = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : YY;
      var DY;
      Object.defineProperty(YY, QY, {
        value: (DY = rY, new zD(DY)),
        enumerable: !1,
        writable: !0
      })
    }

    function CD(YY, rY, DY, FY, IY, RY, gY) {
      void 0 !== gY ? gY(rY, FY, RY) : "string" === typeof DY ? rr[DY]?.(rY, FY, RY) : null != DY[Symbol.metadata] ? (rr.number(rY, FY[OY], RY), (IY & AY.ADD) === AY.ADD && YY.tryEncodeTypeId(rY, DY, FY.constructor, RY)) : rr.number(rY, FY[OY], RY)
    }
    const fD = function(YY, rY, DY, FY, IY, RY, OY, gY) {
        if (rY[RY.offset++] = 255 & (FY | IY), IY === AY.DELETE) return;
        const aY = DY.encDescriptor,
          vY = DY.ref,
          uY = vY[SY][FY] ?? vY[aY.names[FY]];
        CD(YY, rY, aY.types[FY], uY, IY, RY, aY.encoders[FY])
      },
      jD = function(YY, rY, DY, FY, IY, RY) {
        if (rY[RY.offset++] = 255 & IY, rr.number(rY, FY, RY), IY === AY.DELETE) return;
        const OY = DY.ref;
        if ((IY & AY.ADD) === AY.ADD) {
          const YY = OY.$indexes.get(FY);
          rr.string(rY, YY, RY)
        }
        CD(YY, rY, OY[oY], OY[sY](FY), IY, RY)
      },
      hD = function(YY, rY, DY, FY, IY, RY) {
        if (rY[RY.offset++] = 255 & IY, rr.number(rY, FY, RY), IY === AY.DELETE) return;
        const OY = DY.ref;
        CD(YY, rY, OY[oY], OY[sY](FY), IY, RY)
      },
      dD = function(YY, rY, DY, FY, IY, RY) {
        const OY = DY.ref;
        (IY & AY.ADD) === AY.ADD && "function" === typeof OY.set ? jD(YY, rY, DY, FY, IY, RY) : hD(YY, rY, DY, FY, IY, RY)
      },
      JD = function(YY, rY, DY, FY, IY, RY, gY, aY) {
        const vY = DY.refTarget,
          uY = vY[oY],
          iY = "string" !== typeof uY;
        let yY;
        if (aY && DY.isFiltered && iY) {
          const YY = vY.tmpItems[FY];
          if (!YY) return;
          if (yY = YY[OY], IY === AY.DELETE) IY = AY.DELETE_BY_REFID;
          else if ((IY & AY.ADD) === AY.ADD) IY = AY.ADD_BY_REFID;
          else if ((IY & AY.MOVE) === AY.MOVE) return
        } else if (IY === AY.DELETE && iY) {
          const YY = vY.tmpItems[FY];
          if (!YY) return;
          yY = YY[OY], IY = AY.DELETE_BY_REFID
        } else yY = FY;
        if (rY[RY.offset++] = 255 & IY, rr.number(rY, yY, RY), IY === AY.DELETE || IY === AY.DELETE_BY_REFID) return;
        CD(YY, rY, uY, vY[sY](FY, gY), IY, RY)
      };

    function MD(YY, rY, DY, FY, IY, RY, gY) {
      const aY = YY.resyncVisited;
      let vY = aY.get(YY.currentRefId);
      if (void 0 === vY && aY.set(YY.currentRefId, vY = new Set), vY.add(FY), void 0 !== IY && DY === AY.ADD && IY !== RY) {
        const DY = IY[OY];
        void 0 !== DY && (YY.root.removeRef(DY), gY?.push({
          ref: rY,
          refId: YY.currentRefId,
          op: AY.DELETE,
          dynamicIndex: FY,
          value: void 0,
          previousValue: IY
        }))
      }
    }

    function wD(YY, rY, DY, FY) {
      const AY = rY[OY];
      if (void 0 === AY || DY.has(AY)) return;
      DY.add(AY);
      const IY = rY.constructor[Symbol.metadata],
        RY = IY?.[cY];
      if (void 0 === RY) return;
      const gY = IY[ZY];
      for (let OY = 0; OY < RY.length; OY++) {
        const AY = RY[OY];
        if (void 0 !== gY && gY.includes(AY)) continue;
        const aY = IY[AY],
          vY = rY[aY.name];
        vY && (KF.is(aY.type) ? wD(YY, vY, DY, FY) : bD(YY, vY, DY, FY))
      }
    }

    function bD(YY, rY, DY, FY) {
      const IY = rY[WY] ?? rY,
        RY = IY[OY];
      if (void 0 === RY || DY.has(RY)) return;
      DY.add(RY);
      const gY = YY.resyncVisited.get(RY);
      if (void 0 === gY) return;
      const aY = YY.root;
      IY[yY](gY, ((YY, DY) => {
        FY?.push({
          ref: rY,
          refId: RY,
          op: AY.DELETE,
          dynamicIndex: DY,
          value: void 0,
          previousValue: YY
        });
        const IY = YY?.[OY];
        void 0 !== IY && aY.removeRef(IY)
      }), (rY => {
        KF.isSchema(rY) && wD(YY, rY, DY, FY)
      }))
    }
    const XD = 1,
      qD = 2,
      pD = 3,
      kD = 4,
      GD = 5;

    function xD(YY, rY, DY, FY, IY, RY, gY, aY, vY) {
      const uY = YY.root;
      let sY;
      if ((rY & AY.DELETE) === AY.DELETE) {
        const YY = IY?.[OY];
        void 0 !== YY && uY.removeRef(YY), rY !== AY.DELETE_AND_ADD && DY[iY](FY), sY = void 0
      }
      if (rY === AY.DELETE);
      else if ("string" === typeof RY) sY = mr[RY](gY, aY);
      else if (hr(RY)) sY = function(YY, rY, DY) {
        return Jr(YY, (0, mr[YY.wire])(rY, DY))
      }(RY.quantized, gY, aY);
      else if (KF.is(RY)) {
        const DY = mr.number(gY, aY);
        if (sY = uY.refs.get(DY), (rY & AY.ADD) === AY.ADD) {
          const FY = YY.getInstanceType(gY, aY, RY);
          sY || (sY = YY.createInstanceOfType(FY)), uY.addRef(DY, sY, sY !== IY || rY === AY.DELETE_AND_ADD && sY === IY)
        }
      } else {
        const DY = (yY = Object.keys(RY)[0], Vr[yY]),
          FY = mr.number(gY, aY);
        null !== YY.resyncVisited && function(YY, rY) {
          const DY = YY.resyncVisited;
          DY.has(rY) || DY.set(rY, new Set)
        }(YY, FY);
        const iY = uY.refs.has(FY) ? IY || uY.refs.get(FY) : DY.constructor.initializeForDecoder();
        if (sY = iY.clone(!0), sY[oY] = Object.values(RY)[0], IY) {
          let YY = IY[OY];
          if (void 0 !== YY && FY !== YY) {
            (rY & AY.DELETE) !== AY.DELETE && uY.removeRef(YY);
            const DY = IY.entries();
            let FY;
            for (;
              (FY = DY.next()) && !FY.done;) {
              const [rY, DY] = FY.value;
              "object" === typeof DY && (YY = DY[OY]), vY?.push({
                ref: IY,
                refId: YY,
                op: AY.DELETE,
                field: rY,
                value: void 0,
                previousValue: DY
              })
            }
          }
        }
        uY.addRef(FY, sY, iY !== IY || rY === AY.DELETE_AND_ADD && iY === IY)
      }
      var yY;
      return sY
    }
    const nD = function(YY, rY, DY, FY, AY) {
        const IY = rY[DY.offset++],
          RY = FY.constructor[Symbol.metadata],
          OY = IY >> 6 << 6,
          gY = IY % (OY || 255),
          aY = RY[gY];
        if (void 0 === aY) return console.warn("@colyseus/schema: field not defined at", {
          index: gY,
          ref: FY.constructor.name,
          metadata: RY
        }), -1;
        const vY = !0 === aY.deprecated,
          uY = vY ? void 0 : FY[sY](gY),
          iY = xD(YY, OY, FY, gY, uY, aY.type, rY, DY, AY);
        vY || (null !== iY && void 0 !== iY && (FY[aY.name] = iY), uY !== iY && AY?.push({
          ref: FY,
          refId: YY.currentRefId,
          op: OY,
          field: aY.name,
          value: iY,
          previousValue: uY
        }))
      },
      PD = function(YY, rY, DY, FY, IY) {
        const RY = FY[WY] ?? FY,
          OY = rY[DY.offset++];
        if (OY === AY.CLEAR) return YY.removeChildRefs(RY, IY), void RY.clear();
        const gY = mr.number(rY, DY),
          aY = RY[oY],
          vY = RY.constructor.COLLECTION_KIND;
        let uY;
        (OY & AY.ADD) === AY.ADD ? vY === XD ? (uY = mr.string(rY, DY), RY.setIndex(gY, uY)) : uY = gY : uY = RY.getIndex(gY);
        const iY = RY[sY](gY),
          yY = xD(YY, OY, FY, gY, iY, aY, rY, DY, IY);
        if (null !== YY.resyncVisited && MD(YY, FY, OY, uY, iY, yY, IY), null !== yY && void 0 !== yY) switch (vY) {
          case XD:
            RY.$items.set(uY, yY);
            break;
          case qD:
            RY.$setAt(gY, yY, null !== YY.resyncVisited && OY === AY.ADD ? AY.REPLACE : OY);
            break;
          case pD:
          case kD:
          case GD:
            RY.$items.has(gY) || (RY.$items.set(gY, yY), "number" === typeof RY.$refId && gY >= RY.$refId && (RY.$refId = gY + 1));
            break;
          default:
            console.warn(`@colyseus/schema: missing COLLECTION_KIND on ${RY.constructor?.name} \u2014 item at index ${gY} was not stored.`)
        }
        iY !== yY && IY?.push({
          ref: FY,
          refId: YY.currentRefId,
          op: OY,
          dynamicIndex: uY,
          value: yY,
          previousValue: iY
        })
      },
      UD = function(YY, rY, DY, FY, IY) {
        const RY = FY[WY] ?? FY;
        let OY, gY = rY[DY.offset++];
        if (gY === AY.CLEAR) return YY.removeChildRefs(RY, IY), void RY.clear();
        if (gY === AY.REVERSE) return void RY.items.reverse();
        if (gY === AY.DELETE_BY_REFID) {
          const gY = mr.number(rY, DY),
            aY = YY.root.refs.get(gY);
          if (void 0 === aY) return;
          if (YY.root.removeRef(gY), OY = RY.findIndex((YY => YY === aY)), -1 === OY) return;
          return RY[iY](OY), void IY?.push({
            ref: FY,
            refId: YY.currentRefId,
            op: AY.DELETE,
            dynamicIndex: OY,
            value: void 0,
            previousValue: aY
          })
        }
        if (gY === AY.ADD_BY_REFID) {
          const FY = mr.number(rY, DY),
            AY = YY.root.refs.get(FY);
          AY && (OY = RY.findIndex((YY => YY === AY))), -1 !== OY && void 0 !== OY || (OY = RY.length)
        } else OY = mr.number(rY, DY);
        const aY = RY[oY];
        let vY = OY;
        const uY = RY.items[OY],
          sY = xD(YY, gY, FY, OY, uY, aY, rY, DY, IY);
        null !== YY.resyncVisited && MD(YY, FY, gY, OY, uY, sY, IY), null !== sY && void 0 !== sY && sY !== uY && RY.$setAt(OY, sY, null !== YY.resyncVisited && gY === AY.ADD ? AY.REPLACE : gY), uY !== sY && IY?.push({
          ref: FY,
          refId: YY.currentRefId,
          op: gY,
          dynamicIndex: vY,
          value: sY,
          previousValue: uY
        })
      };
    class LD extends Error {}

    function tD(YY, rY, DY, FY) {
      if (!(YY instanceof rY)) throw new LD(`a '${rY.name}' was expected, but '${YY&&YY.constructor.name}' was provided in ${DY.constructor.name}#${FY}`)
    }
    const YF = (YY, rY) => {
        const DY = YY.toString(),
          FY = rY.toString();
        return DY < FY ? -1 : DY > FY ? 1 : 0
      },
      rF = {
        get: (YY, rY) => "symbol" === typeof rY || isNaN(rY) ? Reflect.get(YY, rY) : YY.items[rY],
        set: (YY, rY, DY) => {
          if ("symbol" !== typeof rY && !isNaN(rY)) {
            if (void 0 === DY || null === DY) YY.$deleteAt(rY);
            else {
              let FY;
              if (DY[QY]) {
                tD(DY, YY[oY], YY, rY);
                const IY = YY.items[rY];
                YY.isMovingItems ? (FY = YY.$wireIndex(Number(rY)), void 0 !== IY ? DY[QY].isNew ? YY[QY].indexedOperation(FY, AY.MOVE_AND_ADD) : (YY[QY].getChange(FY) & AY.DELETE) === AY.DELETE ? YY[QY].indexedOperation(FY, AY.DELETE_AND_MOVE) : YY[QY].indexedOperation(FY, AY.MOVE) : DY[QY].isNew && YY[QY].indexedOperation(FY, AY.ADD), DY[QY].setParent(YY, YY[QY].root, FY)) : FY = YY.$changeAt(Number(rY), DY), void 0 !== IY && IY[QY].root?.remove(IY[QY])
              } else FY = YY.$changeAt(Number(rY), DY);
              YY.items[rY] = DY, void 0 !== FY && (YY.tmpItems[FY] = DY)
            }
            return !0
          }
          return Reflect.set(YY, rY, DY)
        },
        deleteProperty: (YY, rY) => ("number" === typeof rY ? YY.$deleteAt(rY) : delete YY[rY], !0),
        has: (YY, rY) => "symbol" === typeof rY || isNaN(Number(rY)) ? Reflect.has(YY, rY) : Reflect.has(YY.items, rY)
      };
    class DF {
      [QY];
      [OY];
      [WY];
      [oY];
      items = [];
      tmpItems = [];
      deletedIndexes = [];
      isMovingItems = !1;
      _needsCompaction = !1;
      static[aY] = JD;
      static[vY] = UD;
      static COLLECTION_KIND = qD;
      static[uY](YY, rY, DY) {
        if (!DY) return !0;
        const FY = YY[WY] ?? YY;
        return "string" === typeof FY[oY] || DY.isChangeTreeVisible(FY.tmpItems[rY]?.[QY])
      }
      static is(YY) {
        return Array.isArray(YY) || void 0 !== YY.array
      }
      static from(YY) {
        return new DF(...Array.from(YY))
      }
      constructor() {
        this[oY] = void 0, this[WY] = this;
        const YY = new Proxy(this, rF);
        return Object.defineProperty(this, QY, {
          value: new HD(YY, this),
          enumerable: !1,
          writable: !0
        }), arguments.length > 0 && this.push(...arguments), YY
      }
      static initializeForDecoder() {
        const YY = Object.create(DF.prototype);
        YY.items = [], YY.isMovingItems = !1, YY._needsCompaction = !1, YY[oY] = void 0, YY[WY] = YY;
        const rY = new Proxy(YY, rF);
        return ZD(YY, rY), rY
      }
      set length(YY) {
        0 === YY ? this.clear() : YY < this.items.length ? this.splice(YY, this.length - YY) : console.warn("ArraySchema: can't set .length to a higher value than its length.")
      }
      get length() {
        return this.items.length
      }
      pauseTracking() {
        this[QY].pause()
      }
      resumeTracking() {
        this[QY].resume()
      }
      untracked(YY) {
        return this[QY].untracked(YY)
      }
      get isTrackingPaused() {
        return this[QY].paused
      }
      push() {
        const YY = this[WY],
          rY = YY.items,
          DY = YY.tmpItems,
          FY = YY[QY],
          IY = YY[oY];
        let RY = DY.length;
        for (let OY = 0, gY = arguments.length; OY < gY; OY++, RY++) {
          const gY = OY < 0 || arguments.length <= OY ? void 0 : arguments[OY];
          if (void 0 === gY || null === gY) return;
          "object" === typeof gY && IY && tD(gY, IY, YY, OY), FY.indexedOperation(RY, AY.ADD), rY.push(gY), DY.push(gY), gY[QY]?.setParent(this, FY.root, RY)
        }
        return RY
      }
      pop() {
        const YY = this[WY],
          rY = YY.tmpItems,
          DY = YY.deletedIndexes;
        let FY = -1;
        for (let IY = rY.length - 1; IY >= 0; IY--)
          if (!0 !== DY[IY]) {
            FY = IY;
            break
          } if (FY < 0) return;
        const AY = YY.$isUnsentAdd(FY);
        return YY[QY].delete(FY), AY ? YY.$cancelAdd(FY) : DY[FY] = !0, YY.items.pop()
      }
      at(YY) {
        return YY < 0 && (YY += this.length), this.items[YY]
      }
      $wireIndex(YY) {
        const rY = this.deletedIndexes;
        if (0 === rY.length) return YY;
        const DY = this.tmpItems;
        let FY = 0;
        for (let AY = 0; AY < DY.length; AY++)
          if (!0 !== rY[AY]) {
            if (FY === YY) return AY;
            FY++
          } return DY.length + (YY - FY)
      }
      $isUnsentAdd(YY) {
        const rY = this[QY];
        return 0 === (576 & rY.flags) && !rY.paused && "string" !== typeof this[oY] && rY.operationAt(YY) === AY.ADD
      }
      $cancelAdd(YY) {
        let rY = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        const DY = this[QY],
          FY = this.tmpItems[YY];
        this.tmpItems.splice(YY, 1), this.deletedIndexes.length > 0 && this.deletedIndexes.splice(YY, 1), DY.removeAt(YY, 1);
        const AY = FY?.[QY];
        void 0 !== AY && void 0 === AY.root && AY.removeParent(this), rY && this.$reindexChildren(YY)
      }
      $reindexChildren(YY, rY) {
        if (!this[QY].hasFilteredFields) return;
        if ("string" === typeof this[oY]) return;
        const DY = this.tmpItems,
          FY = DY.length;
        if (void 0 !== rY)
          for (; YY < FY && DY[YY] === rY[YY];) YY++;
        for (let AY = YY; AY < FY; AY++) DY[AY]?.[QY]?.setParentIndex(this, AY)
      }
      $changeAt(YY, rY) {
        if (void 0 === rY || null === rY) return void console.error("ArraySchema items cannot be null nor undefined; Use `splice(index, 1)` instead.");
        if (this.items[YY] === rY) return;
        const DY = void 0 !== this.items[YY] ? "object" === typeof rY ? AY.DELETE_AND_ADD : AY.REPLACE : AY.ADD,
          FY = this.$wireIndex(YY),
          IY = this[QY];
        return IY.change(FY, DY), rY[QY]?.setParent(this, IY.root, FY), FY
      }
      $deleteAt(YY, rY) {
        this[QY].delete(this.$wireIndex(YY), rY)
      }
      $setAt(YY, rY, DY) {
        DY === AY.ADD && void 0 !== this.items[YY] ? this.items.splice(YY, 0, rY) : DY === AY.DELETE_AND_MOVE ? (this.items.splice(YY, 1), this.items[YY] = rY) : (YY > this.items.length && (this._needsCompaction = !0), this.items[YY] = rY)
      }
      clear() {
        const YY = this[WY];
        if (0 === YY.items.length) return;
        const rY = YY[QY];
        rY.forEachChild(((YY, DY) => {
          rY.root?.remove(YY)
        })), rY.discard(), rY.operation(AY.CLEAR), YY.items.length = 0, YY.tmpItems.length = 0
      } [mY]() {
        const YY = this[WY] ?? this,
          rY = YY[QY];
        if (rY.isStreamCollection) throw new Error("@colyseus/schema: cannot reset a streamed ArraySchema (pooling not supported).");
        const DY = YY.items;
        for (let FY = 0; FY < DY.length; FY++) DY[FY]?.[mY]?.();
        YY.items.length = 0, YY.tmpItems.length = 0, YY.deletedIndexes.length = 0, rY.recycle(), YY[OY] = void 0
      }
      concat() {
        return new DF(...this.items.concat(...arguments))
      }
      join(YY) {
        return this.items.join(YY)
      }
      reverse() {
        const YY = this[WY],
          rY = YY[QY];
        if (rY.has() || YY.deletedIndexes.length > 0) {
          const rY = YY.items.slice().reverse();
          return this.clear(), this.push(...rY), this
        }
        return rY.operation(AY.REVERSE), YY.items.reverse(), YY.tmpItems.reverse(), YY.$reindexChildren(0), this
      }
      shift() {
        const YY = this[WY],
          rY = YY.items;
        if (0 === rY.length) return;
        const DY = YY[QY],
          FY = YY.deletedIndexes;
        let IY = 0;
        for (; !0 === FY[IY];) IY++;
        const RY = YY.$isUnsentAdd(IY);
        return DY.delete(IY, AY.DELETE), RY ? YY.$cancelAdd(IY) : FY[IY] = !0, rY.shift()
      }
      slice(YY, rY) {
        const DY = new DF;
        return DY.push(...this.items.slice(YY, rY)), DY
      }
      sort() {
        let YY = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : YF;
        const rY = this[WY];
        rY.isMovingItems = !0;
        const DY = rY[QY];
        return rY.items.sort(YY).forEach(((YY, rY) => DY.change(rY, AY.REPLACE))), rY.tmpItems.sort(YY), rY.$reindexChildren(0), rY.isMovingItems = !1, this
      }
      splice(YY, rY) {
        const DY = this[WY],
          FY = DY[QY],
          IY = DY.items,
          RY = DY.tmpItems,
          OY = DY.deletedIndexes,
          gY = IY.length,
          aY = RY.length;
        for (var vY = arguments.length, uY = new Array(vY > 2 ? vY - 2 : 0), sY = 2; sY < vY; sY++) uY[sY - 2] = arguments[sY];
        const iY = uY.length,
          yY = [];
        for (let AY = 0; AY < aY; AY++) !0 !== OY[AY] && yY.push(AY);
        let oY;
        if (gY > YY) {
          void 0 === rY && (rY = gY - YY);
          for (let IY = YY; IY < YY + rY; IY++) {
            const YY = yY[IY],
              rY = DY.$isUnsentAdd(YY);
            FY.delete(YY, AY.DELETE), rY ? (oY ??= []).push(YY) : OY[YY] = !0
          }
        } else rY = 0;
        if (iY > 0) {
          const IY = yY[YY] ?? gY,
            aY = Math.min(iY, rY);
          for (let YY = 0; YY < aY; YY++) {
            const rY = IY + YY;
            let DY;
            const gY = void 0 !== oY ? oY.indexOf(rY) : -1; - 1 !== gY ? (oY.splice(gY, 1), DY = AY.ADD) : DY = OY[rY] ? AY.DELETE_AND_ADD : AY.ADD, FY.indexedOperation(rY, DY), RY[rY] = uY[YY], OY[rY] = !1, uY[YY][QY]?.setParent(this, FY.root, rY)
          }
          const vY = iY - aY;
          if (vY > 0) {
            const YY = IY + aY;
            FY.insertAt(YY, vY);
            for (let rY = 0; rY < vY; rY++) uY[aY + rY][QY]?.setParent(this, FY.root, YY + rY);
            OY.length > 0 && OY.splice(YY, 0, ...new Array(vY).fill(!1)), RY.splice(YY, 0, ...uY.slice(aY)), DY.$reindexChildren(YY + vY)
          }
        }
        if (void 0 !== oY && oY.length > 0) {
          for (let YY = oY.length - 1; YY >= 0; YY--) DY.$cancelAdd(oY[YY], !1);
          DY.$reindexChildren(oY[0])
        }
        return FY.root?.enqueueChangeTree(FY), IY.splice(YY, rY, ...uY)
      }
      unshift() {
        const YY = this[WY],
          rY = YY[QY];
        rY.unshift(arguments.length);
        for (let FY = 0; FY < arguments.length; FY++)(FY < 0 || arguments.length <= FY ? void 0 : arguments[FY])?.[QY]?.setParent(this, rY.root, FY);
        const DY = YY.deletedIndexes;
        return DY.length > 0 && DY.unshift(...new Array(arguments.length).fill(!1)), YY.tmpItems.unshift(...arguments), YY.$reindexChildren(arguments.length), YY.items.unshift(...arguments)
      }
      indexOf(YY, rY) {
        return this.items.indexOf(YY, rY)
      }
      lastIndexOf(YY) {
        let rY = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.length - 1;
        return this.items.lastIndexOf(YY, rY)
      }
      every(YY, rY) {
        return this.items.every(YY, rY)
      }
      some(YY, rY) {
        return this.items.some(YY, rY)
      }
      forEach(YY, rY) {
        return this.items.forEach(YY, rY)
      }
      map(YY, rY) {
        return this.items.map(YY, rY)
      }
      filter(YY, rY) {
        return this.items.filter(YY, rY)
      }
      reduce(YY, rY) {
        return this.items.reduce.apply(this.items, arguments)
      }
      reduceRight(YY, rY) {
        return this.items.reduceRight.apply(this.items, arguments)
      }
      find(YY, rY) {
        return this.items.find(YY, rY)
      }
      findIndex(YY, rY) {
        return this.items.findIndex(YY, rY)
      }
      fill(YY, rY, DY) {
        throw new Error("ArraySchema#fill() not implemented")
      }
      copyWithin(YY, rY, DY) {
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
        return DF
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
      includes(YY, rY) {
        return this.items.includes(YY, rY)
      }
      flatMap(YY, rY) {
        throw new Error("ArraySchema#flatMap() is not supported.")
      }
      flat(YY) {
        throw new Error("ArraySchema#flat() is not supported.")
      }
      findLast() {
        return this.items.findLast.apply(this.items, arguments)
      }
      findLastIndex() {
        for (var YY = arguments.length, rY = new Array(YY), DY = 0; DY < YY; DY++) rY[DY] = arguments[DY];
        return this.items.findLastIndex.apply(this.items, arguments)
      }
      with(YY, rY) {
        const DY = this.items.slice();
        return YY < 0 && (YY += this.length), DY[YY] = rY, new DF(...DY)
      }
      toReversed() {
        return this.items.slice().reverse()
      }
      toSorted(YY) {
        return this.items.slice().sort(YY)
      }
      toSpliced(YY, rY) {
        for (var DY = arguments.length, FY = new Array(DY > 2 ? DY - 2 : 0), AY = 2; AY < DY; AY++) FY[AY - 2] = arguments[AY];
        const IY = this.items.slice();
        return IY.splice.apply(IY, arguments), IY
      }
      shuffle() {
        return this.move((YY => {
          let rY = this.items.length;
          for (; 0 != rY;) {
            let YY = Math.floor(Math.random() * rY);
            rY--, [this[rY], this[YY]] = [this[YY], this[rY]]
          }
        }))
      }
      move(YY) {
        return this.isMovingItems = !0, YY(this), this.isMovingItems = !1, this
      } [sY](YY) {
        let rY = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        const DY = this[WY] ?? this;
        return rY || DY.deletedIndexes[YY] ? DY.items[YY] : DY.tmpItems[YY] || DY.items[YY]
      } [iY](YY) {
        const rY = this[WY] ?? this;
        rY.items[YY] = void 0, rY._needsCompaction = !0
      } [EY]() {
        const YY = this.tmpItems;
        this.tmpItems = this.items.slice(), this.deletedIndexes.length > 0 && (this.$reindexChildren(0, YY), this.deletedIndexes.length = 0)
      } [VY]() {
        const YY = this[WY] ?? this;
        YY._needsCompaction && (YY._needsCompaction = !1, YY.items = YY.items.filter((YY => void 0 !== YY)))
      } [yY](YY, rY, DY) {
        const FY = this[WY] ?? this,
          AY = FY.items;
        let IY = !1;
        for (let RY = 0; RY < AY.length; RY++) {
          const OY = AY[RY];
          YY.has(RY) ? DY(OY) : (IY = !0, rY(OY, RY), FY[iY](RY))
        }
        IY && FY[VY]()
      }
      toArray() {
        return this.items.slice(0)
      }
      toJSON() {
        return this.toArray().map((YY => "function" === typeof YY.toJSON ? YY.toJSON() : YY))
      }
      clone(YY) {
        let rY;
        return YY ? (rY = new DF, rY.push(...this.items)) : rY = new DF(...this.map((YY => YY[QY] ? YY.clone() : YY))), rY
      }
    }
    lr("array", {
      constructor: DF
    });
    class FF {
      keyByIndex = new Map;
      indexByKey = Object.create(null);
      nextIndex = 0;
      snapshots;
      indexOf(YY) {
        const rY = this.indexByKey[YY];
        return void 0 === rY ? void 0 : rY
      }
      assign(YY) {
        const rY = this.nextIndex++;
        return this.indexByKey[YY] = rY, this.keyByIndex.set(rY, YY), rY
      }
      snapshot(YY, rY) {
        (this.snapshots ??= new Map).set(YY, rY)
      }
      forgetSnapshot(YY) {
        this.snapshots?.delete(YY)
      }
      snapshotAt(YY) {
        return this.snapshots?.get(YY)
      }
      setIndex(YY, rY) {
        this.keyByIndex.set(YY, rY), this.indexByKey[rY] = YY
      }
      keyOf(YY) {
        return this.keyByIndex.get(YY)
      }
      cleanupAfterEncode() {
        if (void 0 !== this.snapshots) {
          for (const [YY] of this.snapshots) {
            const rY = this.keyByIndex.get(YY);
            void 0 !== rY && (delete this.indexByKey[rY], this.keyByIndex.delete(YY))
          }
          this.snapshots.clear()
        }
      }
      reset() {
        this.indexByKey = Object.create(null), this.keyByIndex.clear(), this.snapshots?.clear(), this.nextIndex = 0
      }
    }
    class AF {
      [QY];
      [OY];
      childType;
      [oY];
      $items = new Map;
      journal = new FF;
      _stream;
      get maxPerTick() {
        return this._stream?.maxPerTick ?? 32
      }
      set maxPerTick(YY) {
        (this._stream ??= Nr()).maxPerTick = YY
      }
      get priority() {
        return this._stream?.priority
      }
      set priority(YY) {
        (this._stream ??= Nr()).priority = YY
      }
      get $indexes() {
        return this.journal.keyByIndex
      }
      get _collectionIndexes() {
        return this.journal.indexByKey
      }
      static[aY] = jD;
      static[vY] = PD;
      static COLLECTION_KIND = XD;
      static[uY](YY, rY, DY) {
        if (!DY || "string" === typeof YY[oY]) return !0;
        const FY = YY[sY](rY) ?? YY.journal.snapshotAt(rY);
        return DY.isChangeTreeVisible(FY[QY])
      }
      static is(YY) {
        return void 0 !== YY.map
      }
      constructor(YY) {
        if (Object.defineProperty(this, QY, {
            value: new HD(this),
            enumerable: !1,
            writable: !0
          }), this[oY] = void 0, YY)
          if (YY instanceof Map || YY instanceof AF) YY.forEach(((YY, rY) => this.set(rY, YY)));
          else
            for (const rY in YY) this.set(rY, YY[rY])
      }
      static initializeForDecoder() {
        const YY = Object.create(AF.prototype);
        return YY.$items = new Map, YY.journal = new FF, YY[oY] = void 0, ZD(YY), YY
      } [Symbol.iterator]() {
        return this.$items[Symbol.iterator]()
      }
      get[Symbol.toStringTag]() {
        return this.$items[Symbol.toStringTag]
      }
      static get[Symbol.species]() {
        return AF
      }
      set(YY, rY) {
        if (void 0 === rY || null === rY) throw new Error(`MapSchema#set('${YY}', ${rY}): trying to set ${rY} value on '${YY}'.`);
        "object" === typeof rY && this[oY] && tD(rY, this[oY], this, YY), YY = YY.toString();
        const DY = this[QY],
          FY = void 0 !== rY[QY],
          IY = this.journal;
        let RY, OY = IY.indexOf(YY);
        if (void 0 !== OY) {
          RY = AY.REPLACE;
          const DY = this.$items.get(YY);
          if (DY === rY) return;
          FY && (RY = AY.DELETE_AND_ADD, void 0 !== DY && DY[QY].root?.remove(DY[QY])), void 0 !== IY.snapshotAt(OY) && IY.forgetSnapshot(OY)
        } else OY = IY.assign(YY), RY = AY.ADD;
        return this.$items.set(YY, rY), RY === AY.ADD && DY.isStreamCollection ? void 0 !== DY.root && cr(this, DY.root, OY) : DY.change(OY, RY), FY && rY[QY].setParent(this, DY.root, OY), this
      }
      get(YY) {
        return this.$items.get(YY)
      }
      getOrInsert(YY, rY) {
        return this.$items.has(YY) ? this.$items.get(YY) : (this.set(YY, rY), rY)
      }
      getOrInsertComputed(YY, rY) {
        if (this.$items.has(YY)) return this.$items.get(YY);
        const DY = rY(YY);
        return this.set(YY, DY), DY
      }
      delete(YY) {
        if (!this.$items.has(YY)) return !1;
        const rY = this.journal.indexOf(YY),
          DY = this.$items.get(YY),
          FY = this[QY];
        if (FY.isStreamCollection) {
          const AY = FY.root;
          let IY = !1;
          return void 0 !== AY && (IY = Kr(this, AY, this[OY], rY)), void 0 !== DY?.[QY] && AY?.remove(DY[QY]), this.$items.delete(YY), IY || this.journal.snapshot(rY, DY), !0
        }
        return this.journal.snapshot(rY, DY), FY.delete(rY), this.$items.delete(YY)
      }
      clear() {
        const YY = this[QY];
        YY.discard(), YY.forEachChild(((rY, DY) => {
          YY.root?.remove(rY)
        })), this.journal.reset(), this.$items.clear(), YY.operation(AY.CLEAR)
      } [mY]() {
        const YY = this[QY];
        if (YY.isStreamCollection) throw new Error("@colyseus/schema: cannot reset a streamed MapSchema (pooling not supported).");
        this.$items.forEach((YY => YY?.[mY]?.())), this.$items.clear(), this.journal.reset(), YY.recycle(), this[OY] = void 0
      }
      has(YY) {
        return this.$items.has(YY)
      }
      forEach(YY) {
        this.$items.forEach(YY)
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
        this[QY].pause()
      }
      resumeTracking() {
        this[QY].resume()
      }
      untracked(YY) {
        return this[QY].untracked(YY)
      }
      get isTrackingPaused() {
        return this[QY].paused
      }
      setIndex(YY, rY) {
        this.journal.setIndex(YY, rY)
      }
      getIndex(YY) {
        return this.journal.keyOf(YY)
      } [sY](YY) {
        const rY = this.journal.keyOf(YY);
        return void 0 !== rY ? this.$items.get(rY) : void 0
      } [iY](YY) {
        const rY = this.journal.keyOf(YY);
        void 0 !== rY && (this.$items.delete(rY), this.journal.keyByIndex.delete(YY))
      } [yY](YY, rY, DY) {
        let FY = null;
        if (this.$items.forEach(((AY, IY) => {
            YY.has(IY) ? DY(AY) : ((FY ??= new Set).add(IY), rY(AY, IY))
          })), null !== FY) {
          FY.forEach((YY => {
            this.$items.delete(YY), delete this.journal.indexByKey[YY]
          }));
          const YY = [];
          this.journal.keyByIndex.forEach(((rY, DY) => {
            FY.has(rY) && YY.push(DY)
          }));
          for (let rY = 0; rY < YY.length; rY++) this.journal.keyByIndex.delete(YY[rY])
        }
      } [EY]() {
        this.journal.cleanupAfterEncode()
      }
      _dropView(YY) {
        Cr(this, YY)
      }
      _unregister() {}
      toJSON() {
        return Object.fromEntries(Array.from(this, (YY => {
          let [rY, DY] = YY;
          return [rY, "function" === typeof DY.toJSON ? DY.toJSON() : DY]
        })))
      }
      clone(YY) {
        let rY;
        return YY ? rY = Object.assign(new AF, this) : (rY = new AF, this.forEach(((YY, DY) => {
          YY[QY] ? rY.set(DY, YY.clone()) : rY.set(DY, YY)
        }))), rY
      }
    }
    lr("map", {
      constructor: AF
    });
    class IF {
      [QY];
      [OY];
      [oY];
      $items = new Map;
      deletedItems = {};
      $refId = 0;
      _stream;
      get maxPerTick() {
        return this._stream?.maxPerTick ?? 32
      }
      set maxPerTick(YY) {
        (this._stream ??= Nr()).maxPerTick = YY
      }
      get priority() {
        return this._stream?.priority
      }
      set priority(YY) {
        (this._stream ??= Nr()).priority = YY
      }
      static[aY] = hD;
      static[vY] = PD;
      static COLLECTION_KIND = kD;
      static[uY](YY, rY, DY) {
        return !DY || "string" === typeof YY[oY] || DY.isChangeTreeVisible((YY[sY](rY) ?? YY.deletedItems[rY])[QY])
      }
      static is(YY) {
        return void 0 !== YY.collection
      }
      constructor(YY) {
        Object.defineProperty(this, QY, {
          value: new HD(this),
          enumerable: !1,
          writable: !0
        }), this[oY] = void 0, YY && YY.forEach((YY => this.add(YY)))
      }
      static initializeForDecoder() {
        const YY = Object.create(IF.prototype);
        return YY.$items = new Map, YY.deletedItems = {}, YY.$refId = 0, YY[oY] = void 0, ZD(YY), YY
      }
      add(YY) {
        const rY = this.$refId++,
          DY = this[QY];
        return this.$items.set(rY, YY), DY.isStreamCollection ? void 0 !== DY.root && cr(this, DY.root, rY) : DY.change(rY), void 0 !== YY[QY] && YY[QY].setParent(this, DY.root, rY), rY
      }
      at(YY) {
        const rY = Array.from(this.$items.keys())[YY];
        return this.$items.get(rY)
      }
      entries() {
        return this.$items.entries()
      }
      delete(YY) {
        const rY = this.$items.entries();
        let DY, FY;
        for (;
          (FY = rY.next()) && !FY.done;)
          if (YY === FY.value[1]) {
            DY = FY.value[0];
            break
          } if (void 0 === DY) return !1;
        const AY = this[QY];
        if (AY.isStreamCollection) {
          const YY = AY.root,
            rY = this.$items.get(DY);
          return void 0 !== YY && Kr(this, YY, this[OY], DY), void 0 !== rY?.[QY] && YY?.remove(rY[QY]), this.deletedItems[DY] = rY, this.$items.delete(DY)
        }
        return this.deletedItems[DY] = AY.delete(DY), this.$items.delete(DY)
      }
      clear() {
        const YY = this[QY];
        YY.discard(), YY.forEachChild(((rY, DY) => {
          YY.root?.remove(rY)
        })), this.$items.clear(), YY.operation(AY.CLEAR)
      } [mY]() {
        const YY = this[QY];
        if (YY.isStreamCollection) throw new Error("@colyseus/schema: cannot reset a streamed CollectionSchema (pooling not supported).");
        this.$items.forEach((YY => YY?.[mY]?.())), this.$items.clear(), this.deletedItems = {}, this.$refId = 0, YY.recycle(), this[OY] = void 0
      }
      has(YY) {
        return Array.from(this.$items.values()).some((rY => rY === YY))
      }
      forEach(YY) {
        this.$items.forEach(((rY, DY, FY) => YY(rY, DY, this)))
      }
      values() {
        return this.$items.values()
      }
      get size() {
        return this.$items.size
      }
      pauseTracking() {
        this[QY].pause()
      }
      resumeTracking() {
        this[QY].resume()
      }
      untracked(YY) {
        return this[QY].untracked(YY)
      }
      get isTrackingPaused() {
        return this[QY].paused
      } [Symbol.iterator]() {
        return this.$items.values()
      }
      setIndex(YY, rY) {}
      getIndex(YY) {
        return YY
      } [sY](YY) {
        return this.$items.get(YY)
      } [iY](YY) {
        this.$items.delete(YY)
      } [yY](YY, rY, DY) {
        let FY = null;
        if (this.$items.forEach(((AY, IY) => {
            YY.has(IY) ? DY(AY) : ((FY ??= []).push(IY), rY(AY, IY))
          })), null !== FY)
          for (let AY = 0; AY < FY.length; AY++) this[iY](FY[AY])
      } [EY]() {
        for (const YY in this.deletedItems) delete this.deletedItems[YY]
      }
      _dropView(YY) {
        Cr(this, YY)
      }
      _unregister() {}
      toArray() {
        return Array.from(this.$items.values())
      }
      toJSON() {
        const YY = [];
        return this.forEach(((rY, DY) => {
          YY.push("function" === typeof rY.toJSON ? rY.toJSON() : rY)
        })), YY
      }
      clone(YY) {
        let rY;
        return YY ? rY = Object.assign(new IF, this) : (rY = new IF, this.forEach((YY => {
          YY[QY] ? rY.add(YY.clone()) : rY.add(YY)
        }))), rY
      }
    }
    lr("collection", {
      constructor: IF
    });
    class RF {
      [QY];
      [OY];
      [oY];
      $items = new Map;
      deletedItems = {};
      $refId = 0;
      _stream;
      get maxPerTick() {
        return this._stream?.maxPerTick ?? 32
      }
      set maxPerTick(YY) {
        (this._stream ??= Nr()).maxPerTick = YY
      }
      get priority() {
        return this._stream?.priority
      }
      set priority(YY) {
        (this._stream ??= Nr()).priority = YY
      }
      static[aY] = hD;
      static[vY] = PD;
      static COLLECTION_KIND = pD;
      static[uY](YY, rY, DY) {
        return !DY || "string" === typeof YY[oY] || DY.isVisible((YY[sY](rY) ?? YY.deletedItems[rY])[QY])
      }
      static is(YY) {
        return void 0 !== YY.set
      }
      constructor(YY) {
        Object.defineProperty(this, QY, {
          value: new HD(this),
          enumerable: !1,
          writable: !0
        }), this[oY] = void 0, YY && YY.forEach((YY => this.add(YY)))
      }
      static initializeForDecoder() {
        const YY = Object.create(RF.prototype);
        return YY.$items = new Map, YY.deletedItems = {}, YY.$refId = 0, YY[oY] = void 0, ZD(YY), YY
      }
      add(YY) {
        if (this.has(YY)) return !1;
        const rY = this.$refId++,
          DY = this[QY];
        return this.$items.set(rY, YY), DY.isStreamCollection ? void 0 !== DY.root && cr(this, DY.root, rY) : DY.change(rY, AY.ADD), void 0 !== YY[QY] && YY[QY].setParent(this, DY.root, rY), rY
      }
      entries() {
        return this.$items.entries()
      }
      delete(YY) {
        const rY = this.$items.entries();
        let DY, FY;
        for (;
          (FY = rY.next()) && !FY.done;)
          if (YY === FY.value[1]) {
            DY = FY.value[0];
            break
          } if (void 0 === DY) return !1;
        const AY = this[QY];
        if (AY.isStreamCollection) {
          const YY = AY.root,
            rY = this.$items.get(DY);
          return void 0 !== YY && Kr(this, YY, this[OY], DY), void 0 !== rY?.[QY] && YY?.remove(rY[QY]), this.deletedItems[DY] = rY, this.$items.delete(DY)
        }
        return this.deletedItems[DY] = AY.delete(DY), this.$items.delete(DY)
      }
      clear() {
        const YY = this[QY];
        YY.discard(), this.$items.clear(), YY.operation(AY.CLEAR)
      } [mY]() {
        const YY = this[QY];
        if (YY.isStreamCollection) throw new Error("@colyseus/schema: cannot reset a streamed SetSchema (pooling not supported).");
        this.$items.forEach((YY => YY?.[mY]?.())), this.$items.clear(), this.deletedItems = {}, this.$refId = 0, YY.recycle(), this[OY] = void 0
      }
      has(YY) {
        const rY = this.$items.values();
        let DY, FY = !1;
        for (;
          (DY = rY.next()) && !DY.done;)
          if (YY === DY.value) {
            FY = !0;
            break
          } return FY
      }
      forEach(YY) {
        this.$items.forEach(((rY, DY, FY) => YY(rY, DY, this)))
      }
      values() {
        return this.$items.values()
      }
      get size() {
        return this.$items.size
      }
      pauseTracking() {
        this[QY].pause()
      }
      resumeTracking() {
        this[QY].resume()
      }
      untracked(YY) {
        return this[QY].untracked(YY)
      }
      get isTrackingPaused() {
        return this[QY].paused
      } [Symbol.iterator]() {
        return this.$items.values()
      }
      setIndex(YY, rY) {}
      getIndex(YY) {
        return YY
      } [sY](YY) {
        return this.$items.get(YY)
      } [iY](YY) {
        this.$items.delete(YY)
      } [yY](YY, rY, DY) {
        let FY = null;
        if (this.$items.forEach(((AY, IY) => {
            YY.has(IY) ? DY(AY) : ((FY ??= []).push(IY), rY(AY, IY))
          })), null !== FY)
          for (let AY = 0; AY < FY.length; AY++) this[iY](FY[AY])
      } [EY]() {
        for (const YY in this.deletedItems) delete this.deletedItems[YY]
      }
      _dropView(YY) {
        Cr(this, YY)
      }
      _unregister() {}
      toArray() {
        return Array.from(this.$items.values())
      }
      toJSON() {
        const YY = [];
        return this.forEach(((rY, DY) => {
          YY.push("function" === typeof rY.toJSON ? rY.toJSON() : rY)
        })), YY
      }
      clone(YY) {
        let rY;
        return YY ? rY = Object.assign(new RF, this) : (rY = new RF, this.forEach((YY => {
          YY[QY] ? rY.add(YY.clone()) : rY.add(YY)
        }))), rY
      }
    }
    lr("set", {
      constructor: RF
    });
    class OF {
      [QY];
      [OY];
      [oY];
      $items = new Map;
      $nextPosition = 0;
      _itemIndex = new Map;
      _stream;
      get maxPerTick() {
        return this._stream?.maxPerTick ?? 32
      }
      set maxPerTick(YY) {
        (this._stream ??= Nr()).maxPerTick = YY
      }
      get priority() {
        return this._stream?.priority
      }
      set priority(YY) {
        (this._stream ??= Nr()).priority = YY
      }
      static $isStream = !0;
      static[aY] = hD;
      static[vY] = PD;
      static COLLECTION_KIND = GD;
      static[uY](YY, rY, DY) {
        if (!DY) return !0;
        const FY = YY[sY](rY);
        return void 0 !== FY && DY.isVisible(FY[QY])
      }
      static is(YY) {
        return YY && void 0 !== YY.stream
      }
      constructor() {
        Object.defineProperty(this, QY, {
          value: new HD(this),
          enumerable: !1,
          writable: !0
        }), this[oY] = void 0
      }
      static initializeForDecoder() {
        const YY = Object.create(OF.prototype);
        return YY.$items = new Map, YY.$nextPosition = 0, YY._itemIndex = new Map, YY[oY] = void 0, ZD(YY), YY
      }
      add(YY) {
        if (this._itemIndex.has(YY)) return -1;
        const rY = this.$nextPosition++;
        this.$items.set(rY, YY), this._itemIndex.set(YY, rY);
        const DY = this[QY].root;
        return void 0 !== YY[QY] && YY[QY].setParent(this, DY, rY), void 0 !== DY && cr(this, DY, rY), rY
      }
      remove(YY) {
        const rY = this._itemIndex.get(YY);
        if (void 0 === rY) return !1;
        this._itemIndex.delete(YY), this.$items.delete(rY);
        const DY = this[QY].root;
        return void 0 !== DY && (Kr(this, DY, this[OY], rY), void 0 !== YY[QY] && DY.remove(YY[QY])), !0
      }
      has(YY) {
        return this._itemIndex.has(YY)
      }
      clear() {
        const YY = this[QY].root;
        if (void 0 !== YY) {
          ! function(YY, rY, DY) {
            const FY = YY._stream;
            if (void 0 !== FY) {
              FY.broadcastPending.clear();
              for (const YY of FY.sentBroadcast) FY.broadcastDeletes.add(YY);
              FY.sentBroadcast.clear(), rY.forEachActiveView((YY => {
                FY.pendingByView.get(YY.id)?.clear();
                const rY = FY.sentByView.get(YY.id);
                if (void 0 !== rY && rY.size > 0) {
                  let FY = YY.changes.get(DY);
                  void 0 === FY && (FY = new Map, YY.changes.set(DY, FY));
                  for (const YY of rY) FY.set(YY, AY.DELETE);
                  rY.clear()
                }
              }))
            }
          }(this, YY, this[OY]);
          for (const rY of this.$items.values()) void 0 !== rY[QY] && YY.remove(rY[QY])
        }
        this.$items.clear(), this._itemIndex.clear()
      }
      forEach(YY) {
        for (const [rY, DY] of this.$items) YY(DY, rY, this)
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
      setIndex(YY, rY) {}
      getIndex(YY) {
        return YY
      } [sY](YY) {
        return this.$items.get(YY)
      } [iY](YY) {
        const rY = this.$items.get(YY);
        void 0 !== rY && (this._itemIndex.delete(rY), this.$items.delete(YY))
      } [yY]() {} [EY]() {}
      toArray() {
        return Array.from(this.$items.values())
      }
      toJSON() {
        const YY = [];
        return this.forEach((rY => {
          YY.push("function" === typeof rY?.toJSON ? rY.toJSON() : rY)
        })), YY
      }
      clone(YY) {
        if (YY) {
          return Object.assign(new OF, this)
        }
        const rY = new OF;
        return rY.maxPerTick = this.maxPerTick, this.forEach((YY => {
          rY.add("function" === typeof YY?.clone ? YY.clone() : YY)
        })), rY
      }
      _dropView(YY) {
        Cr(this, YY)
      }
      _unregister() {}
    }
    lr("stream", {
      constructor: OF
    });
    class gF {
      [lY] = !0;
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
      constructor(YY) {
        this._type = YY
      }
      default (YY) {
        return this._default = YY, this._hasDefault = !0, this
      }
      view(YY) {
        return this._view = YY ?? -1, this
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
        const YY = this._type;
        if (YY && "object" === typeof YY && void 0 !== YY.array) throw new Error(er);
        return this._stream = !0, this
      }
      priority(YY) {
        return this._streamPriority = YY, this
      }
      deprecated() {
        let YY = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
        return this._deprecated = !0, this._deprecatedThrows = YY, this
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

    function aF(YY) {
      return null != YY && !0 === YY[lY]
    }

    function vF(YY) {
      return () => new gF(YY)
    }

    function uF(YY) {
      if (aF(YY)) {
        const rY = YY._type;
        throw new Error(`t.array/map/set/collection(): a t.* builder is not a valid element type \u2014 ${"string"===typeof rY?`use the type name instead: t.array("${rY}")`:'collections accept a Schema class or a primitive type name ("string", "number", \u2026)'}.`)
      }
      return YY
    }

    function sF(YY) {
      return new gF({
        quantized: jr(YY)
      })
    }
    const iF = Object.freeze({
        string: vF("string"),
        number: vF("number"),
        boolean: vF("boolean"),
        int8: vF("int8"),
        uint8: vF("uint8"),
        int16: vF("int16"),
        uint16: vF("uint16"),
        int32: vF("int32"),
        uint32: vF("uint32"),
        int64: vF("int64"),
        uint64: vF("uint64"),
        float32: vF("float32"),
        float64: vF("float64"),
        bigint64: vF("bigint64"),
        biguint64: vF("biguint64"),
        ref: YY => new gF(YY),
        array: YY => new gF({
          array: uF(YY)
        }),
        map: YY => new gF({
          map: uF(YY)
        }),
        set: YY => new gF({
          set: uF(YY)
        }),
        collection: YY => new gF({
          collection: uF(YY)
        }),
        stream: YY => {
          const rY = new gF({
            stream: uF(YY)
          });
          return rY._stream = !0, rY
        },
        quantized: sF,
        angle: YY => sF({
          min: 0,
          max: 2 * Math.PI,
          mode: "wrap",
          bits: YY?.bits ?? 16
        })
      }),
      yF = -1;

    function QF(YY) {
      return wr.register(YY), YY
    }

    function oF() {
      let YY = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : yF;
      return function(rY, DY) {
        const FY = xr.initialize(rY.constructor);
        xr.setTag(FY, DY, YY)
      }
    }

    function WF(YY, rY) {
      const DY = xr.initialize(YY.constructor);
      xr.setUnreliable(DY, rY)
    }

    function EF(YY, rY) {
      const DY = xr.initialize(YY.constructor);
      xr.setPatchOnly(DY, rY)
    }

    function mF(YY, rY) {
      const DY = xr.initialize(YY.constructor);
      xr.setFullStateOnly(DY, rY)
    }

    function VF(YY, rY) {
      return function(DY, FY) {
        const AY = DY.constructor;
        if (!YY) throw new Error(`${AY.name}: @type() reference provided for "${FY}" is undefined. Make sure you don't have any circular dependencies.`);
        YY = Xr(YY, `${AY.name}.${FY}`), wr.register(AY);
        const IY = Object.getPrototypeOf(AY)[Symbol.metadata],
          RY = xr.initialize(AY);
        let OY = RY[FY];
        if (void 0 !== RY[OY]) {
          if (RY[OY].deprecated) return;
          if (void 0 !== RY[OY].type) {
            const YY = new Error(`@colyseus/schema: Duplicate '${FY}' definition on '${AY.name}'.\nCheck @type() annotation`);
            throw new Error(`${YY.message} ${YY.stack.split("\n")[4].trim()}`)
          }
        } else OY = RY[BY] ?? (IY && IY[BY]) ?? -1, OY++;
        if (rY && rY.manual) xr.addField(RY, OY, FY, YY, {
          enumerable: !0,
          configurable: !0,
          writable: !0
        });
        else {
          const {
            complexTypeKlass: rY,
            childType: DY
          } = br(YY);
          xr.addField(RY, OY, FY, YY, lF(FY, OY, DY, rY))
        }
        RY[TY][FY] && Object.defineProperty(DY, FY, RY[TY][FY]), ("string" === typeof YY || hr(YY)) && (RY[NY] || Object.defineProperty(RY, NY, {
          value: [],
          enumerable: !1,
          configurable: !0,
          writable: !0
        }), RY[NY][OY] = "string" === typeof YY ? rr[YY] : Mr(YY.quantized))
      }
    }
    const SF = {
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

    function lF(YY, rY, DY, FY) {
      let IY;
      return IY = FY ? function(YY, rY, DY, FY) {
        const IY = FY.constructor === DF,
          RY = FY.constructor === AF;
        return function(YY) {
          const FY = this[SY],
            OY = FY[rY];
          if (YY !== OY) {
            if (void 0 !== YY && null !== YY) {
              if (!IY || YY instanceof DF)
                if (!RY || YY instanceof AF) YY[oY] = DY;
                else {
                  const rY = new AF;
                  if (rY[oY] = DY, YY instanceof Map) YY.forEach(((YY, DY) => rY.set(DY, YY)));
                  else
                    for (const DY in YY) rY.set(DY, YY[DY]);
                  YY = rY
                }
              else {
                const rY = new DF;
                rY[oY] = DY, rY.push(...YY), YY = rY
              }
              const FY = this[QY],
                aY = this.constructor;
              void 0 !== OY && null !== OY && OY[QY] ? (FY.root?.remove(OY[QY]), aY[gY](FY, rY, AY.DELETE_AND_ADD)) : aY[gY](FY, rY, AY.ADD), YY[QY]?.setParent(this, FY.root, rY)
            } else void 0 !== OY && null !== OY && this[QY].delete(rY);
            FY[rY] = YY
          }
        }
      }(0, rY, DY, FY) : "string" === typeof DY ? function(YY, rY, DY) {
        const FY = SF[DY],
          IY = "string" === DY,
          RY = "boolean" === DY;
        return function(DY) {
          const OY = this[SY],
            aY = OY[rY];
          if (DY !== aY) {
            if (void 0 !== DY && null !== DY) {
              if (!RY && void 0 !== FY && typeof DY !== FY && (!IY || null !== DY)) {
                const rY = DY && DY.constructor ? ` (${DY.constructor.name})` : "";
                throw new LD(`a '${FY}' was expected, but '${JSON.stringify(DY)}'${rY} was provided in ${this.constructor.name}#${YY}`)
              }
              this.constructor[gY](this[QY], rY, AY.ADD)
            } else void 0 !== aY && null !== aY && this[QY].delete(rY);
            OY[rY] = DY
          }
        }
      }(YY, rY, DY) : hr(DY) ? function(YY, rY, DY) {
        return function(FY) {
          const IY = this[SY],
            RY = IY[rY];
          if (void 0 !== FY && null !== FY) {
            if ("number" !== typeof FY) throw new LD(`a 'number' was expected, but '${JSON.stringify(FY)}' was provided in ${this.constructor.name}#${YY}`);
            if ((FY = Jr(DY, dr(DY, FY))) === RY) return;
            this.constructor[gY](this[QY], rY, AY.ADD)
          } else {
            if (FY === RY) return;
            void 0 !== RY && null !== RY && this[QY].delete(rY)
          }
          IY[rY] = FY
        }
      }(YY, rY, DY.quantized) : function(YY, rY, DY) {
        return function(FY) {
          const IY = this[SY],
            RY = IY[rY];
          if (FY !== RY) {
            if (void 0 !== FY && null !== FY) {
              tD(FY, DY, this, YY);
              const IY = this[QY],
                OY = this.constructor;
              void 0 !== RY && null !== RY && RY[QY] ? (IY.root?.remove(RY[QY]), OY[gY](IY, rY, AY.DELETE_AND_ADD)) : OY[gY](IY, rY, AY.ADD), FY[QY]?.setParent(this, IY.root, rY)
            } else void 0 !== RY && null !== RY && this[QY].delete(rY);
            IY[rY] = FY
          }
        }
      }(YY, rY, DY), {
        get: function() {
          return this[SY][rY]
        },
        set: IY,
        enumerable: !0,
        configurable: !0
      }
    }

    function TF() {
      let YY = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
      return function(rY, DY) {
        const FY = xr.initialize(rY.constructor);
        xr.setDeprecated(FY, DY), YY && (FY[TY] ??= {}, FY[TY][DY] = {
          get: function() {
            throw new Error(`${DY} is deprecated.`)
          },
          set: function(YY) {},
          enumerable: !1,
          configurable: !0
        }, Object.defineProperty(rY, DY, FY[TY][DY]))
      }
    }
    let eF = !1;

    function NF(YY, rY, DY) {
      eF || (eF = !0, console.warn("@colyseus/schema: defineTypes() is deprecated and will be removed in a future release. Use schema() with t.* field builders instead \u2192 https://docs.colyseus.io/state/schema"));
      for (let FY in rY) VF(rY[FY], DY)(YY.prototype, FY);
      return YY
    }

    function BF(YY, rY) {
      let DY = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : KF;
      if (null == YY || "object" !== typeof YY) throw new Error(`schema(): first argument must be a fields object (got ${typeof YY}).`);
      const FY = {},
        AY = {},
        IY = {},
        RY = {},
        OY = (YY, rY) => {
          if (rY.hasDefault)((YY, rY) => {
            "function" === typeof rY ? RY[YY] = rY : rY && "function" === typeof rY.clone ? RY[YY] = () => rY.clone() : IY[YY] = rY
          })(YY, rY.default);
          else if (!rY.optional) {
            const DY = function(YY) {
              if (YY && "object" === typeof YY) {
                if (void 0 !== YY.array) return () => new DF;
                if (void 0 !== YY.map) return () => new AF;
                if (void 0 !== YY.set) return () => new RF;
                if (void 0 !== YY.collection) return () => new IF;
                if (void 0 !== YY.stream) return () => new OF
              } else if ("function" === typeof YY && KF.is(YY) && (!YY.prototype.initialize || 0 === YY.prototype.initialize.length)) return () => new YY
            }(rY.type);
            DY && (RY[YY] = DY)
          }
        },
        gY = {},
        aY = [],
        vY = [],
        uY = {},
        sY = [],
        iY = [],
        yY = {},
        QY = [];
      for (const SY in YY) {
        const DY = YY[SY],
          IY = `schema(${rY?`'${rY}'`:""}): field '${SY}'`;
        if (aF(DY)) {
          const YY = DY.toDefinition();
          if (YY.noSync) {
            if (void 0 !== YY.view || YY.unreliable || YY.patchOnly || YY.fullStateOnly || YY.stream) throw new Error(`${IY} uses .noSync() together with a sync-only modifier (.view/.unreliable/.patchOnly/.fullStateOnly/.stream). A local-only field cannot be synchronized.`);
            OY(SY, YY);
            continue
          }
          if (YY.patchOnly && YY.fullStateOnly) throw new Error(`${IY} uses .patchOnly() together with .fullStateOnly(). Those are the only two delivery channels, so the field would never reach a client \u2014 use .noSync() if that is intended.`);
          const rY = Xr(YY.type, IY);
          if ("function" === typeof rY && !KF.is(rY)) throw new Error(`${IY} is a synced ref to non-Schema class '${rY.name||"(anonymous)"}' \u2014 use .noSync(), or Metadata.setFields().`);
          FY[SY] = rY, void 0 !== YY.view && (gY[SY] = YY.view), YY.unreliable && aY.push(SY), YY.patchOnly && vY.push(SY), YY.deprecated && (uY[SY] = YY.deprecatedThrows), YY.fullStateOnly && sY.push(SY), YY.stream && iY.push(SY), void 0 !== YY.streamPriority && (yY[SY] = YY.streamPriority), YY.optional && QY.push(SY), OY(SY, YY)
        } else {
          if ("function" !== typeof DY) throw new Error(`${IY} must be a t.* builder, Schema subclass, or method (got ${typeof DY}).`);
          KF.is(DY) ? (FY[SY] = DY, DY.prototype.initialize && 0 !== DY.prototype.initialize.length || (RY[SY] = () => new DY)) : AY[SY] = DY
        }
      }
      const oY = YY => {
          for (const rY in IY) YY[rY] = IY[rY];
          for (const rY in RY) YY[rY] = RY[rY]()
        },
        WY = () => {
          const YY = {};
          return oY(YY), YY
        },
        EY = "function" === typeof AY.initialize,
        mY = AY.initialize ?? DY._initialize,
        VY = class extends DY {
          constructor() {
            for (var YY = arguments.length, rY = new Array(YY), DY = 0; DY < YY; DY++) rY[DY] = arguments[DY];
            const AY = rY[0];
            void 0 === AY ? (super(), oY(this)) : super(Object.assign(WY(), EY ? (YY => {
              const rY = Object.keys(FY),
                DY = {};
              for (const FY in YY) rY.includes(FY) || (DY[FY] = YY[FY]);
              return DY
            })(AY) : AY)), mY && new.target === VY && mY.apply(this, rY)
          }
        };
      rY && Object.defineProperty(VY, "name", {
        value: rY
      }), xr.setFields(VY, FY), VY._getDefaultValues = WY, VY._initialize = mY, Object.assign(VY.prototype, AY);
      for (const SY in gY) oF(gY[SY])(VY.prototype, SY);
      for (const SY of aY) WF(VY.prototype, SY);
      for (const SY of vY) EF(VY.prototype, SY);
      for (const SY in uY) TF(uY[SY])(VY.prototype, SY);
      if (sY.length > 0 || iY.length > 0) {
        const YY = VY[Symbol.metadata];
        for (const rY of sY) xr.setFullStateOnly(YY, rY);
        for (const rY of iY) xr.setStream(YY, rY);
        for (const rY in yY) xr.setStreamPriority(YY, rY, yY[rY])
      }
      if (QY.length > 0) {
        const YY = VY[Symbol.metadata];
        for (const rY of QY) YY[YY[rY]].optional = !0
      }
      return VY.extend = (YY, rY) => BF(YY, rY, VY), VY
    }

    function cF(YY) {
      const rY = YY[QY].root,
        DY = {
          ops: {},
          refs: []
        };
      let FY = rY.changes.next;
      for (; FY;) {
        const YY = FY.changeTree;
        void 0 !== YY ? (DY.refs.push(`refId#${YY.ref[OY]}`), YY.forEach(((YY, rY) => {
          if (YY < 0 || !rY) return;
          const FY = AY[rY];
          DY.ops[FY] || (DY.ops[FY] = 0), DY.ops[FY]++
        })), FY = FY.next) : FY = FY.next
      }
      return DY
    }
    class KF {
      static[aY] = fD;
      static[vY] = nD;
      [OY];
      [SY];
      static initialize(YY) {
        Object.defineProperty(YY, QY, {
          value: new HD(YY),
          enumerable: !1,
          writable: !0
        }), YY[SY] = []
      }
      static initializeForDecoder() {
        const YY = Object.create(this.prototype);
        return ZD(YY), YY[SY] = [], YY
      }
      static reset(YY) {
        const rY = YY?.[QY];
        if (void 0 === rY || "function" !== typeof rY.recycle) throw new Error("@colyseus/schema: Schema.reset() requires a tracked (encoder-side) instance.");
        if (void 0 !== rY.extraParents) throw new Error(`@colyseus/schema: cannot reset a shared instance (${YY.constructor.name}) with multiple parents.`);
        YY[mY]()
      } [mY]() {
        const YY = this.constructor[Symbol.metadata],
          rY = YY?.[cY] ?? [],
          DY = this[SY];
        for (let FY = 0; FY < rY.length; FY++) {
          const YY = DY[rY[FY]];
          YY?.[mY]?.()
        }
        this[QY].recycle(), this[OY] = void 0
      }
      static is(YY) {
        const rY = YY[Symbol.metadata];
        return "object" === typeof rY && null !== rY
      }
      static isSchema(YY) {
        return "function" === typeof YY?.assign
      }
      static[gY](YY, rY) {
        let DY = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : AY.ADD;
        YY.change(rY, DY)
      }
      static[uY](YY, rY, DY) {
        const FY = YY.constructor[Symbol.metadata],
          AY = FY[rY]?.tag;
        return void 0 === DY ? void 0 === AY : void 0 === AY || (AY === yF ? DY.isChangeTreeVisible(YY[QY]) : DY.hasTagOnTree(YY[QY], AY))
      }
      constructor(YY) {
        KF.initialize(this), YY && KF.assignProps(this, YY)
      }
      assign(YY) {
        return KF.assignProps(this, YY), this
      }
      static assignProps(YY, rY) {
        const DY = YY.constructor[Symbol.metadata];
        if (DY && void 0 !== DY[BY])
          for (let AY = 0; AY <= DY[BY]; AY++) {
            const FY = DY[AY];
            if (!FY) continue;
            const IY = rY[FY.name];
            void 0 !== IY && (YY[FY.name] = IY)
          }
        const FY = Object.keys(rY);
        for (let AY = 0; AY < FY.length; AY++) {
          const IY = FY[AY];
          DY && void 0 !== DY[IY] || (YY[IY] = rY[IY])
        }
      }
      restore(YY) {
        const rY = this.constructor[Symbol.metadata];
        for (const DY in rY) {
          const FY = rY[DY],
            AY = FY.name,
            IY = FY.type,
            RY = YY[AY];
          if (void 0 !== RY && null !== RY)
            if ("string" === typeof IY) this[AY] = RY;
            else if (KF.is(IY)) {
            const YY = new IY;
            YY.restore(RY), this[AY] = YY
          } else if ("object" === typeof IY) {
            const YY = Object.keys(IY)[0],
              rY = IY[YY];
            if ("map" === YY) {
              const YY = this[AY];
              for (const DY in RY)
                if (KF.is(rY)) {
                  const FY = new rY;
                  FY.restore(RY[DY]), YY.set(DY, FY)
                } else YY.set(DY, RY[DY])
            } else if ("array" === YY) {
              const YY = this[AY];
              for (let DY = 0; DY < RY.length; DY++)
                if (KF.is(rY)) {
                  const FY = new rY;
                  FY.restore(RY[DY]), YY.push(FY)
                } else YY.push(RY[DY])
            }
          }
        }
        return this
      }
      setDirty(YY, rY) {
        const DY = this.constructor[Symbol.metadata];
        this[QY].change(DY[DY[YY]].index, rY)
      }
      pauseTracking() {
        this[QY].pause()
      }
      resumeTracking() {
        this[QY].resume()
      }
      untracked(YY) {
        return this[QY].untracked(YY)
      }
      get isTrackingPaused() {
        return this[QY].paused
      }
      clone() {
        const YY = Object.create(this.constructor.prototype);
        KF.initialize(YY);
        const rY = this.constructor[Symbol.metadata];
        for (const DY in rY) {
          const FY = rY[DY].name;
          "object" === typeof this[FY] && "function" === typeof this[FY]?.clone ? YY[FY] = this[FY].clone() : YY[FY] = this[FY]
        }
        return YY
      }
      toJSON() {
        const YY = {},
          rY = this.constructor[Symbol.metadata];
        for (const DY in rY) {
          const FY = rY[DY],
            AY = FY.name;
          FY.deprecated || null === this[AY] || "undefined" === typeof this[AY] || (YY[AY] = "function" === typeof this[AY].toJSON ? this[AY].toJSON() : this[AY])
        }
        return YY
      }
      discardAllChanges() {
        this[QY].discardAll()
      } [sY](YY) {
        return this[this.constructor[Symbol.metadata][YY].name]
      } [iY](YY) {
        this[this.constructor[Symbol.metadata][YY].name] = void 0
      }
      static debugRefIds(YY) {
        let rY = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          DY = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          FY = arguments.length > 3 ? arguments[3] : void 0,
          AY = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "";
        const IY = rY ? ` - ${JSON.stringify(YY.toJSON())}` : "",
          RY = YY[QY],
          gY = YY[OY],
          aY = FY ? FY.root.refCount[gY] : RY.refCount,
          vY = aY > 1 ? ` [\xd7${aY}]` : "";
        let uY = `${function(YY){return new Array(YY).fill(0).map(((rY,DY)=>DY===YY-1?"\u2514\u2500 ":"   ")).join("")}(DY)}${AY}${YY.constructor.name} (refId: ${gY})${vY}${IY}\n`;
        return RY.forEachChild(((AY, IY) => {
          let RY = IY;
          "number" === typeof IY && YY.$indexes && (RY = YY.$indexes.get(IY) ?? IY);
          const OY = void 0 !== YY.forEach && void 0 !== RY ? `["${RY}"]: ` : "";
          uY += this.debugRefIds(AY.ref, rY, DY + 1, FY, OY)
        })), uY
      }
      static debugRefIdEncodingOrder(YY) {
        let rY = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "allChanges";
        const DY = [],
          FY = YY[QY];
        if ("changes" === rY) {
          let YY = FY.root.changes?.next;
          for (; YY;) YY.changeTree && DY.push(YY.changeTree.ref[OY]), YY = YY.next;
          return DY
        }
        const AY = "allFilteredChanges" === rY,
          IY = new Set,
          RY = YY => {
            IY.has(YY) || (IY.add(YY), YY.isFiltered === AY && DY.push(YY.ref[OY]), YY.forEachChild(((YY, rY) => RY(YY))))
          };
        return RY(FY), DY
      }
      static debugRefIdsFromDecoder(YY) {
        return this.debugRefIds(YY.state, !1, 0, YY)
      }
      static debugChanges(YY) {
        let rY = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        const DY = YY[QY],
          FY = rY ? "allChanges" : "changes";
        let IY = `${YY.constructor.name} (${YY[OY]}) -> .${FY}:\n`;
        return rY ? DY.forEachLive((YY => {
          IY += `- [${YY}]: ADD (${JSON.stringify(DY.getValue(Number(YY),!0))})\n`
        })) : DY.forEach(((YY, rY) => {
          YY < 0 || !rY || (IY += `- [${YY}]: ${AY[rY]} (${JSON.stringify(DY.getValue(Number(YY),!1))})\n`)
        })), IY
      }
    }
    IY(KF);
    const HF = {
      value: 0,
      enumerable: !1,
      writable: !0
    };
    class zF {
      types;
      nextUniqueId = 0;
      changeTrees = {};
      get refCount() {
        const YY = {};
        for (const rY in this.changeTrees) YY[rY] = this.changeTrees[rY].refCount;
        return YY
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
      enqueueFilterRefresh(YY) {
        this.types.hasFilters && (YY.flags & cD || (YY.flags |= cD, this.pendingFilterRefresh.push(YY)))
      }
      _nodePool = [];
      _nextViewId = 0;
      _freeViewIds = [];
      acquireViewId() {
        return this._freeViewIds.length > 0 ? this._freeViewIds.pop() : this._nextViewId++
      }
      releaseViewId(YY) {
        this._freeViewIds.push(YY)
      }
      activeViews = new Map;
      streamTrees = new Set;
      registerView(YY) {
        this.activeViews.set(YY.id, new WeakRef(YY))
      }
      unregisterView(YY) {
        this.activeViews.delete(YY.id);
        const rY = YY.id;
        for (const DY of this.streamTrees) DY._dropView(rY)
      }
      forEachActiveView(YY) {
        for (const [rY, DY] of this.activeViews) {
          const FY = DY.deref();
          if (void 0 !== FY) YY(FY);
          else {
            this.activeViews.delete(rY);
            for (const YY of this.streamTrees) YY._dropView(rY)
          }
        }
      }
      registerStream(YY) {
        this.streamTrees.add(YY)
      }
      unregisterStream(YY) {
        this.streamTrees.delete(YY)
      }
      constructor(YY) {
        let rY = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        this.types = YY, this.nextUniqueId = rY
      }
      add(YY) {
        const rY = YY.ref;
        void 0 === rY[OY] && (HF.value = this.nextUniqueId++, Object.defineProperty(rY, OY, HF));
        const DY = rY[OY],
          FY = void 0 === this.changeTrees[DY];
        FY && (this.changeTrees[DY] = YY), YY.needsRestage && (YY.needsRestage = !1, YY.forEachLiveWithCtx(YY, DD));
        const AY = FY ? 0 : YY.refCount;
        return YY.refCount = AY + 1, AY > 0 && this.enqueueFilterRefresh(YY), FY
      }
      remove(YY) {
        const rY = YY.refCount - 1;
        if (rY <= 0) {
          if (YY.root = void 0, delete this.changeTrees[YY.ref[OY]], YY.isStreamCollection) {
            const rY = YY.ref;
            rY._unregister?.(), this.unregisterStream(rY)
          }
          this.removeFromQueue(YY), this.removeFromUnreliableQueue(YY), YY.refCount = 0, YY.needsRestage = !0, YY.forEachChild(((rY, DY) => {
            rY.removeParent(YY.ref) && (void 0 === rY.parentRef || rY.refCount > 0 ? this.remove(rY) : this.moveNextToParent(rY))
          }))
        } else YY.refCount = rY, this.enqueueFilterRefresh(YY), this.recursivelyMoveNextToParent(YY);
        return rY
      }
      recursivelyMoveNextToParent(YY) {
        this.moveNextToParent(YY), YY.forEachChild(((YY, rY) => this.recursivelyMoveNextToParent(YY)))
      }
      moveNextToParent(YY) {
        YY.changesNode && this._moveNextToParentInList(this.changes, YY, YY.changesNode, "changesNode"), YY.unreliableChangesNode && this._moveNextToParentInList(this.unreliableChanges, YY, YY.unreliableChangesNode, "unreliableChangesNode")
      }
      _moveNextToParentInList(YY, rY, DY, FY) {
        const AY = rY.parent;
        if (!AY || !AY[QY]) return;
        const IY = AY[QY][FY];
        IY && IY !== DY && (DY.position > IY.position || (DY.prev ? DY.prev.next = DY.next : YY.next = DY.next, DY.next ? DY.next.prev = DY.prev : YY.tail = DY.prev, DY.prev = YY.tail, DY.next = void 0, YY.tail.next = DY, YY.tail = DY, DY.position = YY.nextPosition++))
      }
      enqueueChangeTree(YY) {
        (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : YY.changesNode) || (YY.changesNode = this._appendToList(this.changes, YY))
      }
      enqueueUnreliable(YY) {
        (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : YY.unreliableChangesNode) || (YY.unreliableChangesNode = this._appendToList(this.unreliableChanges, YY))
      }
      _appendToList(YY, rY) {
        const DY = this._nodePool;
        let FY;
        return DY.length > 0 ? (FY = DY.pop(), FY.changeTree = rY, FY.next = void 0, FY.prev = void 0) : FY = {
          changeTree: rY,
          next: void 0,
          prev: void 0,
          position: 0
        }, YY.next ? (FY.prev = YY.tail, YY.tail.next = FY, YY.tail = FY) : (YY.nextPosition = 0, YY.next = FY, YY.tail = FY), FY.position = YY.nextPosition++, FY
      }
      releaseNode(YY) {
        YY.changeTree = void 0, YY.prev = void 0, YY.next = void 0, this._nodePool.push(YY)
      }
      removeFromQueue(YY) {
        return this._removeNode(this.changes, YY, YY.changesNode, "changesNode")
      }
      removeFromUnreliableQueue(YY) {
        return this._removeNode(this.unreliableChanges, YY, YY.unreliableChangesNode, "unreliableChangesNode")
      }
      _removeNode(YY, rY, DY, FY) {
        return !(!DY || DY.changeTree !== rY) && (DY.prev ? DY.prev.next = DY.next : YY.next = DY.next, DY.next ? DY.next.prev = DY.prev : YY.tail = DY.prev, rY[FY] = void 0, this.releaseNode(DY), !0)
      }
    }

    function ZF(YY, rY) {
      if (-1 === rY || rY >= YY.length) return !1;
      const DY = YY.length - 1;
      for (let FY = rY; FY < DY; FY++) YY[FY] = YY[FY + 1];
      return YY.length = DY, !0
    }

    function CF(YY, rY, DY) {
      const FY = ~DY,
        AY = YY.changeTrees;
      for (const IY in AY) {
        const YY = AY[IY],
          DY = YY.visibleViews;
        void 0 !== DY && rY < DY.length && (DY[rY] &= FY);
        const RY = YY.subscribedViews;
        void 0 !== RY && rY < RY.length && (RY[rY] &= FY);
        const OY = YY.tagViews;
        void 0 !== OY && OY.forEach((YY => {
          rY < YY.length && (YY[rY] &= FY)
        }))
      }
    }
    const fF = new FinalizationRegistry((YY => {
      let {
        root: rY,
        id: DY,
        slot: FY,
        bit: AY
      } = YY;
      CF(rY, FY, AY), rY.activeViews.delete(DY);
      for (const IY of rY.streamTrees) IY._dropView(DY);
      rY.releaseViewId(DY)
    }));

    function jF(YY) {
      if (void 0 === YY) return "undefined";
      if (null === YY) return "null";
      const rY = typeof YY;
      return "string" === rY ? JSON.stringify(YY.length > 30 ? `${YY.slice(0,30)}\u2026` : YY) : "object" !== rY && "function" !== rY ? `${rY} ${String(YY)}` : Array.isArray(YY) ? `Array(${YY.length})` : YY.constructor?.name ?? "Object"
    }
    class hF {
      iterable;
      items;
      id = -1;
      _root;
      _slot = 0;
      _bit = 0;
      changes = new Map;
      constructor() {
        let YY = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        this.iterable = YY, YY && (this.items = [])
      }
      _bindRoot(YY) {
        void 0 === this._root && (this._root = YY, this.id = YY.acquireViewId(), this._slot = this.id >> 5, this._bit = 1 << (31 & this.id), YY.registerView(this), fF.register(this, {
          root: YY,
          id: this.id,
          slot: this._slot,
          bit: this._bit
        }, this))
      }
      dispose() {
        void 0 !== this._root && (this._root.unregisterView(this), CF(this._root, this._slot, this._bit), this._root.releaseViewId(this.id), fF.unregister(this), this._root = void 0, this.id = -1)
      }
      isVisible(YY) {
        const rY = YY.visibleViews,
          DY = this._slot;
        return void 0 !== rY && DY < rY.length && 0 !== (rY[DY] & this._bit)
      }
      markVisible(YY) {
        const rY = this._slot;
        let DY = YY.visibleViews;
        for (void 0 === DY && (DY = YY.visibleViews = []); DY.length <= rY;) DY.push(0);
        DY[rY] |= this._bit
      }
      unmarkVisible(YY) {
        const rY = YY.visibleViews;
        if (void 0 === rY) return;
        const DY = this._slot;
        DY < rY.length && (rY[DY] &= ~this._bit)
      }
      isSubscribed(YY) {
        const rY = YY.subscribedViews,
          DY = this._slot;
        return void 0 !== rY && DY < rY.length && 0 !== (rY[DY] & this._bit)
      }
      _setSubscribed(YY) {
        const rY = this._slot;
        let DY = YY.subscribedViews;
        for (void 0 === DY && (DY = YY.subscribedViews = []); DY.length <= rY;) DY.push(0);
        DY[rY] |= this._bit
      }
      _clearSubscribed(YY) {
        const rY = YY.subscribedViews;
        if (void 0 === rY) return;
        const DY = this._slot;
        DY < rY.length && (rY[DY] &= ~this._bit)
      }
      hasTagOnTree(YY, rY) {
        const DY = YY.tagViews;
        if (void 0 === DY) return !1;
        const FY = this._slot,
          AY = this._bit;
        for (let IY = rY; 0 !== IY; IY &= IY - 1) {
          const YY = DY.get(IY & -IY);
          if (void 0 !== YY && FY < YY.length && 0 !== (YY[FY] & AY)) return !0
        }
        return !1
      }
      addTag(YY, rY) {
        if (rY === yF) return;
        let DY = YY.tagViews;
        void 0 === DY && (DY = YY.tagViews = new Map);
        const FY = this._slot,
          AY = this._bit;
        for (let IY = rY; IY > 0; IY &= IY - 1) {
          const YY = IY & -IY;
          let rY = DY.get(YY);
          for (void 0 === rY && (rY = [], DY.set(YY, rY)); rY.length <= FY;) rY.push(0);
          rY[FY] |= AY
        }
      }
      removeTag(YY, rY) {
        if (rY === yF) return;
        const DY = YY.tagViews;
        if (void 0 === DY) return;
        const FY = this._slot,
          AY = ~this._bit;
        for (let IY = rY; IY > 0; IY &= IY - 1) {
          const YY = DY.get(IY & -IY);
          void 0 !== YY && FY < YY.length && (YY[FY] &= AY)
        }
      }
      removeAllTagsOnTree(YY) {
        const rY = YY.tagViews;
        if (void 0 === rY) return;
        const DY = this._slot,
          FY = ~this._bit;
        rY.forEach((YY => {
          DY < YY.length && (YY[DY] &= FY)
        }))
      }
      add(YY) {
        let rY = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : yF,
          DY = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        return this._add(YY, rY, DY, !1)
      }
      _addImmediate(YY) {
        let rY = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : yF;
        this._add(YY, rY, !0, !0)
      }
      _add(YY, rY, DY, FY) {
        const IY = YY?.[QY];
        if (!IY) return console.warn(`StateView#add(): expected a Schema instance or collection, received ${jF(YY)}`), !1;
        const RY = IY.parent;
        if (!RY && 0 !== YY[OY]) throw new Error(`Cannot add a detached instance to the StateView. Make sure to assign the "${IY.ref.constructor.name}" instance to the state before calling view.add()`);
        void 0 === this._root && void 0 !== IY.root && this._bindRoot(IY.root);
        const gY = RY?.[QY];
        if (!FY && gY?.isStreamCollection) return Zr(RY, this.id, IY.parentIndex), !0;
        const aY = YY.constructor[Symbol.metadata],
          vY = this.isVisible(IY);
        if (!this.iterable || !DY || vY && -1 !== this.items.indexOf(YY) || this.items.push(YY), this.markVisible(IY), DY && RY && this.addParentOf(IY, rY), !FY && IY.isStreamCollection) return !0;
        if (rY === yF && IY.isNew) return this._markSubtreeVisible(IY, rY), !1;
        let uY = this.changes.get(YY[OY]);
        void 0 === uY && (uY = new Map, this.changes.set(YY[OY], uY));
        let sY = !1;
        const iY = IY.encDescriptor.tags;
        if (IY.forEachChild(((YY, DY) => {
            const FY = iY[DY];
            if (void 0 !== FY) {
              if (!(FY === yF || rY !== yF && 0 !== (FY & rY))) return
            }
            this.add(YY.ref, rY, !1) && (sY = !0)
          })), rY !== yF) {
          this.addTag(IY, rY);
          const YY = aY?.[HY];
          if (void 0 !== YY)
            for (let DY = rY; DY > 0; DY &= DY - 1) YY[DY & -DY]?.forEach((YY => {
              IY.getChange(YY) !== AY.DELETE && uY.set(YY, AY.ADD)
            }))
        }
        if ((rY === yF || !vY) && (!IY.isNew || sY))
          if (IY.isArray && "string" !== typeof IY.refTarget[oY]) IY.refTarget.items.length > 0 && (uY.set(-1, AY.ADD), sY = !0);
          else {
            const YY = IY.encDescriptor.tags;
            IY.forEachLive((DY => {
              const FY = YY[DY];
              (void 0 === FY || FY === yF || rY !== yF && 0 !== (FY & rY)) && (uY.set(DY, AY.ADD), sY = !0)
            }))
          } return sY
      }
      _markSubtreeVisible(YY, rY) {
        const DY = YY.encDescriptor.tags;
        YY.forEachChild(((YY, FY) => {
          const AY = DY[FY];
          if (void 0 !== AY) {
            if (!(AY === yF || rY !== yF && 0 !== (AY & rY))) return
          }
          YY.isNew ? (this.markVisible(YY), this._markSubtreeVisible(YY, rY)) : this._add(YY.ref, rY, !1, !1)
        }))
      }
      addParentOf(YY, rY) {
        const DY = YY.parent[QY],
          FY = YY.parentIndex;
        this.isVisible(DY) || this.markVisible(DY);
        const IY = DY.parent?.[QY];
        if (IY && this.addParentOf(DY, rY), DY.hasFilteredFields && DY.getChange(FY) !== AY.DELETE) {
          let IY = this.changes.get(DY.ref[OY]);
          void 0 === IY && (IY = new Map, this.changes.set(DY.ref[OY], IY));
          const RY = DY.encDescriptor.tags[FY];
          void 0 !== RY && RY !== yF && 0 !== (RY & rY) && this.addTag(DY, rY), IY.set(DY.isArray ? YY : FY, AY.ADD)
        }
      }
      _touchAncestorsOf(YY) {
        let rY = YY.parent?.[QY];
        if (void 0 === rY) return;
        const DY = [];
        for (; void 0 !== rY;) {
          if (rY.hasFilteredFields) {
            const YY = rY.ref[OY];
            if (this.changes.has(YY)) break;
            DY.push(rY)
          }
          rY = rY.parent?.[QY]
        }
        for (let FY = DY.length - 1; FY >= 0; FY--) this.changes.set(DY[FY].ref[OY], new Map)
      }
      remove(YY) {
        let rY = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : yF,
          DY = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        const FY = YY?.[QY];
        if (!FY) return console.warn(`StateView#remove(): expected a Schema instance or collection, received ${jF(YY)}`), this;
        const IY = FY.parent?.[QY];
        if (IY?.isStreamCollection) return this.unmarkVisible(FY), this.iterable && !DY && ZF(this.items, this.items.indexOf(YY)),
          function(YY, rY, DY, FY, IY) {
            const RY = YY._stream;
            if (void 0 === RY) return !1;
            const OY = RY.pendingByView.get(rY);
            if (OY?.has(FY)) return OY.delete(FY), !1;
            const gY = RY.sentByView.get(rY);
            if (gY?.has(FY)) {
              gY.delete(FY);
              let YY = IY.get(DY);
              return void 0 === YY && (YY = new Map, IY.set(DY, YY)), YY.set(FY, AY.DELETE), !0
            }
          }(FY.parent, this.id, FY.parent[OY], FY.parentIndex, this.changes), this._recursiveDeleteVisibleChangeTree(FY), this;
        if (FY.isStreamCollection) {
          this.unmarkVisible(FY), this.iterable && !DY && ZF(this.items, this.items.indexOf(YY));
          const rY = FY.ref,
            IY = rY._stream;
          if (void 0 !== IY) {
            IY.pendingByView.get(this.id)?.clear();
            const YY = IY.sentByView.get(this.id);
            if (void 0 !== YY && YY.size > 0) {
              const DY = rY[OY];
              let FY = this.changes.get(DY);
              void 0 === FY && (FY = new Map, this.changes.set(DY, FY));
              for (const rY of YY) FY.set(rY, AY.DELETE);
              YY.clear()
            }
          }
          return this
        }
        this.unmarkVisible(FY), this.iterable && !DY && ZF(this.items, this.items.indexOf(YY));
        const RY = FY.ref,
          gY = RY.constructor[Symbol.metadata],
          aY = RY[OY];
        this._touchAncestorsOf(FY);
        let vY = this.changes.get(aY);
        if (void 0 === vY && (vY = new Map, this.changes.set(aY, vY)), rY === yF) {
          const YY = FY.parent;
          if (YY && !xr.isValidInstance(YY) && FY.isFiltered) {
            const rY = IY.isArray ? FY : FY.parentIndex,
              DY = YY[OY];
            let RY = this.changes.get(DY);
            void 0 === RY ? (RY = new Map, this.changes.set(DY, RY)) : RY.get(rY) === AY.ADD && this._dropPendingEntries(FY), RY.set(rY, AY.DELETE), this._recursiveDeleteVisibleChangeTree(FY)
          } else gY?.[KY]?.forEach((YY => this._removeViewField(FY, vY, YY)))
        } else {
          const YY = gY?.[HY];
          if (void 0 !== YY)
            for (let DY = rY; DY > 0; DY &= DY - 1) YY[DY & -DY]?.forEach((YY => this._removeViewField(FY, vY, YY)))
        }
        return void 0 === rY ? this.removeAllTagsOnTree(FY) : this.removeTag(FY, rY), this
      }
      has(YY) {
        return this.isVisible(YY[QY])
      }
      hasTag(YY) {
        let rY = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : yF;
        return this.hasTagOnTree(YY[QY], rY)
      }
      subscribe(YY, rY) {
        const DY = YY?.[QY];
        if (!DY) return console.warn(`StateView#subscribe(): expected a Schema collection, received ${jF(YY)}`), this;
        if (void 0 === this._root && void 0 !== DY.root && this._bindRoot(DY.root), void 0 !== rY)
          if (DY.isStreamCollection) {
            const DY = Br(YY);
            null === rY ? DY.priorityByView?.delete(this.id) : (DY.priorityByView ??= new Map).set(this.id, rY)
          } else {
            const rY = YY?.constructor?.name ?? "collection",
              FY = DY.parent;
            if (void 0 === FY) console.warn(`StateView#subscribe(): \`priority\` ignored \u2014 this ${rY} is not attached to a state yet, so it cannot be identified as a stream. Subscribe after assigning it to the state.`);
            else {
              const YY = FY?.constructor?.[Symbol.metadata]?.[DY.parentIndex]?.name,
                AY = YY ? `${FY.constructor.name}#${YY}` : rY;
              console.warn(`StateView#subscribe(): \`priority\` ignored \u2014 ${AY} is a ${rY}, not a streaming collection. Declare the field with .stream() (e.g. t.map(X).stream()) or use t.stream(X) to enable priority batching.`)
            }
          } if (this.isSubscribed(DY)) return this;
        const FY = void 0 !== DY.parent && !this.isVisible(DY);
        if (FY ? (this.addParentOf(DY, yF), this._add(YY, yF, !1, !1)) : this.markVisible(DY), this._setSubscribed(DY), DY.isStreamCollection) {
          const rY = YY;
          DY.forEachChild(((YY, DY) => {
            Zr(rY, this.id, DY)
          }))
        } else FY || DY.forEachChild((YY => {
          this.markVisible(YY)
        }));
        return this
      }
      unsubscribe(YY) {
        const rY = YY?.[QY];
        if (!rY) return console.warn(`StateView#unsubscribe(): expected a Schema collection, received ${jF(YY)}`), this;
        if (!this.isSubscribed(rY)) return this;
        this._clearSubscribed(rY);
        const DY = rY.ref[OY];
        if (rY.isStreamCollection) {
          const rY = YY._stream;
          if (void 0 !== rY) {
            rY.pendingByView.get(this.id)?.clear();
            const YY = rY.sentByView.get(this.id);
            if (void 0 !== YY && YY.size > 0) {
              let rY = this.changes.get(DY);
              void 0 === rY && (rY = new Map, this.changes.set(DY, rY));
              for (const DY of YY) rY.set(DY, AY.DELETE);
              YY.clear()
            }
          }
        } else {
          const YY = rY.isArray;
          let FY = this.changes.get(DY);
          rY.forEachChild(((rY, IY) => {
            void 0 === FY && (FY = new Map, this.changes.set(DY, FY)), FY.set(YY ? rY : IY, AY.DELETE), this.unmarkVisible(rY)
          }))
        }
        return this.unmarkVisible(rY), this
      }
      clear() {
        if (!this.iterable) throw new Error("StateView#clear() is only available for iterable StateView's. Use StateView(iterable: true) constructor.");
        for (let YY = 0, rY = this.items.length; YY < rY; YY++) this.remove(this.items[YY], yF, !0);
        this.items.length = 0
      }
      isChangeTreeVisible(YY) {
        let rY = this.isVisible(YY);
        if (!rY && YY.isVisibilitySharedWithParent)
          if (this.isVisible(YY.parent[QY])) this.markVisible(YY), rY = !0;
          else
            for (let DY = YY.extraParents; void 0 !== DY; DY = DY.next) {
              const FY = DY.ref[QY];
              if (FY.isFiltered && this.isVisible(FY)) {
                this.markVisible(YY), rY = !0;
                break
              }
            }
        return rY
      }
      _recursiveDeleteVisibleChangeTree(YY) {
        YY.forEachChild((YY => {
          this.unmarkVisible(YY), this._recursiveDeleteVisibleChangeTree(YY)
        }))
      }
      _dropPendingEntries(YY) {
        this.changes.delete(YY.ref[OY]), YY.forEachChild((YY => this._dropPendingEntries(YY)))
      }
      _removeViewField(YY, rY, DY) {
        const FY = rY.get(DY) === AY.ADD;
        rY.set(DY, AY.DELETE);
        const IY = YY.ref[YY.encDescriptor.names[DY]],
          RY = IY?.[QY];
        RY && (this.unmarkVisible(RY), this._recursiveDeleteVisibleChangeTree(RY), FY && this._dropPendingEntries(RY))
      }
    }

    function dF(YY) {
      YY.structSwitchEmitted || (YY.shouldEmitSwitch && (YY.buffer[YY.it.offset++] = 255, rr.number(YY.buffer, YY.ref[OY], YY.it)), YY.structSwitchEmitted = !0)
    }

    function JF(YY, rY) {
      bF(YY, rY, AY.ADD)
    }

    function MF(YY, rY) {
      if (rY._fullSyncGen === YY.gen) return;
      rY._fullSyncGen = YY.gen;
      if (!YY.hasView || YY.view.isChangeTreeVisible(rY)) {
        const DY = rY.encDescriptor;
        YY.changeTree = rY, YY.ref = rY.ref, YY.encoder = DY.encoder, YY.filter = DY.filter, YY.metadata = DY.metadata, YY.treeIsFiltered = rY.isFiltered, YY.isSchema = DY.isSchema, YY.filterBitmask = DY.filterBitmask, YY.tags = DY.tags, YY.structSwitchEmitted = !1, YY.shouldEmitSwitch = YY.hasView || YY.it.offset > YY.initialOffset || rY !== YY.rootChangeTree, rY.isArray && rY.collDirty.size > 0 && (rY.flags |= 512), AD(rY, YY, JF)
      }
      WD(rY, YY, wF)
    }

    function wF(YY, rY, DY) {
      MF(YY, rY)
    }

    function bF(YY, rY, DY) {
      if (rY < 0) {
        if (YY.treeIsFiltered !== YY.emitFiltered) return;
        return dF(YY), void(YY.buffer[YY.it.offset++] = 255 & Math.abs(rY))
      }
      if ((YY.isSchema ? YY.treeIsFiltered || (rY < 32 ? 0 !== (YY.filterBitmask & 1 << rY) : void 0 !== YY.tags[rY]) : YY.treeIsFiltered) !== YY.emitFiltered) return;
      const FY = YY.isEncodeAll ? AY.ADD : DY;
      void 0 !== FY && (void 0 === YY.filter || YY.filter(YY.ref, rY, YY.view)) && (dF(YY), YY.encoder(YY.self, YY.buffer, YY.changeTree, rY, FY, YY.it, YY.isEncodeAll, YY.hasView, YY.metadata))
    }

    function XF(YY, rY) {
      const DY = new Uint8Array(YY.length + rY.length);
      return DY.set(YY, 0), DY.set(rY, YY.length), DY
    }
    class qF {
      static BUFFER_SIZE = 16384;
      sharedBuffer = new Uint8Array(qF.BUFFER_SIZE);
      context;
      state;
      root;
      constructor(YY, rY) {
        this.context = wr.cache(YY.constructor), this.root = rY ?? new zF(this.context), this.setState(YY)
      }
      setState(YY) {
        this.state = YY, this.state[QY].setRoot(this.root)
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
        let YY = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
            offset: 0
          },
          rY = arguments.length > 1 ? arguments[1] : void 0,
          DY = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : this.sharedBuffer,
          FY = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : YY.offset;
        return this._encodeChannel(YY, rY, DY, FY, !1)
      }
      encodeUnreliable() {
        let YY = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
            offset: 0
          },
          rY = arguments.length > 1 ? arguments[1] : void 0,
          DY = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : this.sharedBuffer,
          FY = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : YY.offset;
        return this._encodeChannel(YY, rY, DY, FY, !0)
      }
      _encodeChannel(YY, rY, DY, FY, AY) {
        this.root.pendingFilterRefresh.length > 0 && RD(this.root);
        const IY = void 0 !== rY,
          RY = this.state[QY],
          OY = this._encodeCtx;
        OY.self = this, OY.buffer = DY, OY.it = YY, OY.view = rY, OY.isEncodeAll = !1, OY.hasView = IY, OY.emitFiltered = IY;
        let gY = AY ? this.root.unreliableChanges : this.root.changes;
        for (; gY = gY.next;) {
          const DY = gY.changeTree;
          if (IY && !rY.isChangeTreeVisible(DY)) continue;
          const aY = AY ? DY.unreliableRecorder : DY;
          if (!aY || !aY.has()) continue;
          const vY = DY.encDescriptor;
          OY.changeTree = DY, OY.ref = DY.ref, OY.encoder = vY.encoder, OY.filter = vY.filter, OY.metadata = vY.metadata, OY.treeIsFiltered = DY.isFiltered, OY.isSchema = vY.isSchema, OY.filterBitmask = vY.filterBitmask, OY.tags = vY.tags, OY.structSwitchEmitted = !1, OY.isRootTree = DY === RY, OY.shouldEmitSwitch = IY || YY.offset > FY || !OY.isRootTree, aY.forEachWithCtx(OY, bF)
        }
        return AY || IY || !this._isStreamBroadcastMode || this._emitStreamBroadcast(DY, YY), YY.offset > DY.byteLength ? (DY = this._resizeBuffer(DY, YY.offset), YY.offset = FY, this._encodeChannel(YY, rY, DY, FY, AY)) : DY.subarray(0, YY.offset)
      }
      encodeFullSync(YY, rY, DY, FY) {
        let AY = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : YY.offset;
        this.root.pendingFilterRefresh.length > 0 && RD(this.root);
        const IY = void 0 !== FY,
          RY = this.state[QY],
          OY = this._encodeCtx;
        return OY.self = this, OY.buffer = rY, OY.it = YY, OY.view = FY, OY.isEncodeAll = !0, OY.hasView = IY, OY.emitFiltered = DY, OY.gen = ++this._fullSyncGen, OY.initialOffset = AY, OY.rootChangeTree = RY, MF(OY, RY), YY.offset > rY.byteLength ? (rY = this._resizeBuffer(rY, YY.offset), YY.offset = AY, this.encodeFullSync(YY, rY, DY, FY, AY)) : rY.subarray(0, YY.offset)
      }
      _resizeBuffer(YY, rY) {
        const DY = Math.ceil(rY / qF.BUFFER_SIZE) * qF.BUFFER_SIZE,
          FY = new Uint8Array(DY);
        return FY.set(YY), YY === this.sharedBuffer && (this.sharedBuffer = FY), FY
      }
      encodeAll() {
        let YY = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
            offset: 0
          },
          rY = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.sharedBuffer;
        return this.encodeFullSync(YY, rY, !1)
      }
      encodeAllView(YY, rY, DY) {
        let FY = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : this.sharedBuffer;
        const AY = DY.offset;
        return FY = this.encodeFullSync(DY, FY, !0, YY, AY), XF(FY.subarray(0, rY), FY.subarray(AY, DY.offset))
      }
      ensureCapacity(YY, rY) {
        if (rY + qF.BUFFER_SIZE <= YY.byteLength) return YY;
        const DY = Math.ceil((rY + qF.BUFFER_SIZE) / qF.BUFFER_SIZE) * qF.BUFFER_SIZE,
          FY = new Uint8Array(DY);
        return FY.set(YY.subarray(0, rY)), YY === this.sharedBuffer && (this.sharedBuffer = FY), FY
      }
      encodeView(YY, rY, DY) {
        let FY = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : this.sharedBuffer,
          IY = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4];
        const RY = DY.offset;
        this._emitStreamPriority(YY);
        for (const gY of YY.changes.keys()) {
          const rY = YY.changes.get(gY),
            IY = this.root.changeTrees[gY];
          if (void 0 === IY) {
            YY.changes.delete(gY);
            continue
          }
          if (0 === rY.size) continue;
          const RY = IY.encDescriptor,
            aY = RY.encoder,
            vY = RY.metadata,
            uY = IY.ref,
            iY = IY.refTarget;
          FY = this.ensureCapacity(FY, DY.offset), FY[DY.offset++] = 255, rr.number(FY, uY[OY], DY);
          for (const [gY, yY] of rY) {
            let rY;
            if (-1 === gY) {
              const YY = iY.tmpItems,
                rY = iY.deletedIndexes;
              for (let RY = 0; RY < YY.length; RY++) void 0 !== YY[RY] && !0 !== rY[RY] && aY(this, FY, IY, RY, AY.ADD, DY, !1, !0, vY);
              continue
            }
            if ("number" === typeof gY) rY = gY;
            else {
              const DY = gY.indexInParent(uY);
              if (void 0 === DY) continue;
              if (rY = DY, yY === AY.ADD && IY.getChange(rY) === AY.DELETE) {
                YY.changes.delete(gY.ref[OY]);
                continue
              }
            }
            aY(this, FY, IY, rY, void 0 !== iY[sY](rY) && yY || AY.DELETE, DY, !1, !0, vY)
          }
        }
        return YY.changes.clear(), FY = this.encode(DY, YY, FY), IY ? XF(FY.subarray(0, rY), FY.subarray(RY, DY.offset)) : FY.subarray(RY, DY.offset)
      }
      encodeUnreliableView(YY, rY, DY) {
        let FY = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : this.sharedBuffer;
        const AY = DY.offset;
        return FY = this.encodeUnreliable(DY, YY, FY, AY), XF(FY.subarray(0, rY), FY.subarray(AY, DY.offset))
      }
      _emitStreamBroadcast(YY, rY) {
        const DY = this.root.streamTrees;
        for (const FY of DY) {
          const DY = FY,
            IY = DY[QY],
            RY = DY[OY];
          if (void 0 === RY) continue;
          const gY = DY._stream,
            aY = gY.broadcastDeletes,
            vY = gY.broadcastPending,
            uY = gY.sentBroadcast,
            iY = aY.size > 0,
            yY = vY.size > 0,
            oY = IY.encDescriptor,
            WY = oY.encoder,
            EY = oY.metadata;
          if (iY || yY) {
            if (YY[rY.offset++] = 255, rr.number(YY, RY, rY), iY) {
              for (const DY of aY) WY(this, YY, IY, DY, AY.DELETE, rY, !1, !1, EY);
              aY.clear()
            }
            const FY = gY.maxPerTick,
              yY = [];
            let oY = 0;
            const mY = [];
            for (const RY of vY) {
              if (oY >= FY) break;
              const OY = DY[sY](RY);
              void 0 !== OY ? (WY(this, YY, IY, RY, AY.ADD, rY, !1, !1, EY), uY.add(RY), yY.push(OY), mY.push(RY), oY++) : mY.push(RY)
            }
            for (const YY of mY) vY.delete(YY);
            for (const DY of yY) {
              const FY = DY[QY];
              if (void 0 === FY) continue;
              const IY = DY[OY];
              if (void 0 === IY) continue;
              YY[rY.offset++] = 255, rr.number(YY, IY, rY);
              const RY = FY.encDescriptor,
                gY = RY.encoder,
                aY = RY.metadata;
              FY.forEachLive((DY => {
                xr.hasUnreliableAtIndex(aY, DY) || gY(this, YY, FY, DY, AY.ADD, rY, !1, !1, aY)
              }))
            }
          }
          for (const FY of uY) {
            const AY = DY[sY](FY);
            if (void 0 === AY) continue;
            const IY = AY[QY];
            if (void 0 === IY || !IY.has()) continue;
            const RY = AY[OY];
            if (void 0 === RY) continue;
            YY[rY.offset++] = 255, rr.number(YY, RY, rY);
            const gY = IY.encDescriptor,
              aY = gY.encoder,
              vY = gY.metadata;
            IY.forEach(((DY, FY) => {
              DY < 0 || xr.hasUnreliableAtIndex(vY, DY) || aY(this, YY, IY, DY, FY, rY, !1, !1, vY)
            }))
          }
        }
      }
      _emitStreamPriority(YY) {
        const rY = this.root.streamTrees;
        if (0 === rY.size) return;
        const DY = YY.id;
        for (const FY of rY) {
          const rY = FY,
            IY = rY._stream,
            RY = IY.pendingByView.get(DY);
          if (void 0 === RY || 0 === RY.size) continue;
          const gY = IY.priorityByView?.get(DY),
            aY = void 0 !== gY,
            vY = IY.priority,
            uY = IY.maxPerTick,
            iY = [],
            yY = [];
          if (aY || void 0 !== vY) {
            const DY = [],
              FY = [];
            let AY = 0;
            for (const IY of RY) {
              const RY = rY[sY](IY);
              if (void 0 === RY) {
                yY.push(IY);
                continue
              }
              const OY = aY ? gY(RY) : vY(YY, RY);
              if (AY < uY) {
                let YY = AY++;
                for (; YY > 0 && FY[YY - 1] < OY;) FY[YY] = FY[YY - 1], DY[YY] = DY[YY - 1], YY--;
                FY[YY] = OY, DY[YY] = IY
              } else if (OY > FY[uY - 1]) {
                let YY = uY - 1;
                for (; YY > 0 && FY[YY - 1] < OY;) FY[YY] = FY[YY - 1], DY[YY] = DY[YY - 1], YY--;
                FY[YY] = OY, DY[YY] = IY
              }
            }
            for (let YY = 0; YY < AY; YY++) iY.push(DY[YY])
          } else
            for (const YY of RY) {
              if (iY.length >= uY) break;
              iY.push(YY)
            }
          for (const YY of yY) RY.delete(YY);
          const oY = iY.length;
          let WY = IY.sentByView.get(DY);
          void 0 === WY && (WY = new Set, IY.sentByView.set(DY, WY));
          for (let DY = 0; DY < oY; DY++) {
            const FY = iY[DY],
              IY = rY[sY](FY);
            if (void 0 === IY) {
              RY.delete(FY);
              continue
            }
            YY._addImmediate(IY);
            const gY = IY[QY];
            if (void 0 !== gY) {
              const rY = IY[OY];
              let DY = YY.changes.get(rY);
              void 0 === DY && (DY = new Map, YY.changes.set(rY, DY));
              const FY = gY.metadata;
              gY.forEachLive((YY => {
                xr.hasUnreliableAtIndex(FY, YY) || DY.set(YY, AY.ADD)
              }))
            }
            RY.delete(FY), WY.add(FY)
          }
        }
      }
      discardChanges() {
        const YY = this.root.changes;
        let rY = YY.next;
        const DY = this.root;
        for (; rY;) {
          const YY = rY.next;
          rY.changeTree.endEncode(), DY.releaseNode(rY), rY = YY
        }
        YY.next = void 0, YY.tail = void 0
      }
      discardUnreliableChanges() {
        const YY = this.root.unreliableChanges;
        let rY = YY.next;
        const DY = this.root;
        for (; rY;) {
          const YY = rY.next;
          rY.changeTree.endEncodeUnreliable(), DY.releaseNode(rY), rY = YY
        }
        YY.next = void 0, YY.tail = void 0
      }
      tryEncodeTypeId(YY, rY, DY, FY) {
        const AY = this.context.getTypeId(rY),
          IY = this.context.getTypeId(DY);
        void 0 !== IY ? AY !== IY && (YY[FY.offset++] = 213, rr.number(YY, IY, FY)) : console.warn(`@colyseus/schema WARNING: Class "${DY.name}" is not registered on TypeRegistry - Please either tag the class with @entity or define a @type() field.`)
      }
      get hasChanges() {
        return void 0 !== this.root.changes.next || this._hasStreamBacklog()
      }
      get _isStreamBroadcastMode() {
        return 0 === this.root.activeViews.size && this.root.streamTrees.size > 0
      }
      _hasStreamBacklog() {
        const YY = this.root;
        if (0 === YY.streamTrees.size) return !1;
        const rY = 0 === YY.activeViews.size;
        for (const DY of YY.streamTrees)
          if (rY ? zr(DY) : Hr(DY, YY)) return !0;
        return !1
      }
      get hasUnreliableChanges() {
        return void 0 !== this.root.unreliableChanges.next
      }
    }
    class pF extends Error {
      constructor(YY) {
        super(YY), this.name = "DecodingWarning"
      }
    }
    const kF = {
      value: 0,
      enumerable: !1,
      writable: !0
    };
    class GF {
      refs = new Map;
      refCount = {};
      deletedRefs = new Set;
      callbacks = {};
      nextUniqueId = 0;
      getNextUniqueId() {
        return this.nextUniqueId++
      }
      addRef(YY, rY) {
        let DY = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        this.refs.set(YY, rY), void 0 === rY[OY] ? (kF.value = YY, Object.defineProperty(rY, OY, kF)) : rY[OY] !== YY && (rY[OY] = YY), DY && (this.refCount[YY] = (this.refCount[YY] || 0) + 1), this.deletedRefs.has(YY) && this.deletedRefs.delete(YY)
      }
      removeRef(YY) {
        const rY = this.refCount[YY];
        if (void 0 !== rY)
          if (0 !== rY)(this.refCount[YY] = rY - 1) <= 0 && this.deletedRefs.add(YY);
          else try {
            const rY = this.refs.get(YY);
            throw new pF(`trying to remove refId '${YY}' with 0 refCount (${rY.constructor.name}: ${JSON.stringify(rY)})`)
          } catch (IA) {
            console.warn(IA)
          } else try {
            throw new pF("trying to remove refId that doesn't exist: " + YY)
          } catch (IA) {
            console.warn(IA)
          }
      }
      clearRefs() {
        this.refs.clear(), this.deletedRefs.clear(), this.callbacks = {}, this.refCount = {}
      }
      garbageCollectDeletedRefs() {
        this.deletedRefs.forEach((YY => {
          if (this.refCount[YY] > 0) return;
          const rY = this.refs.get(YY),
            DY = rY.constructor[Symbol.metadata];
          if (null != DY)
            for (const FY in DY) {
              const YY = rY[DY[FY].name];
              if ("object" === typeof YY && YY) {
                const rY = YY[OY];
                void 0 === rY || this.deletedRefs.has(rY) || this.removeRef(rY)
              }
            } else "function" === typeof rY[oY] && Array.from(rY.values()).forEach((YY => {
              const rY = YY[OY];
              void 0 === rY || this.deletedRefs.has(rY) || this.removeRef(rY)
            }));
          this.refs.delete(YY), delete this.refCount[YY], delete this.callbacks[YY]
        })), this.deletedRefs.clear()
      }
      addCallback(YY, rY, DY) {
        if (void 0 === YY) {
          const YY = "number" === typeof rY ? AY[rY] : rY;
          throw new Error(`Can't addCallback on '${YY}' (refId is undefined)`)
        }
        return this.callbacks[YY] || (this.callbacks[YY] = {}), this.callbacks[YY][rY] || (this.callbacks[YY][rY] = []), this.callbacks[YY][rY].push(DY), () => this.removeCallback(YY, rY, DY)
      }
      removeCallback(YY, rY, DY) {
        const FY = this.callbacks?.[YY]?.[rY]?.indexOf(DY);
        void 0 !== FY && -1 !== FY && ZF(this.callbacks[YY][rY], FY)
      }
    }
    class xF {
      context;
      state;
      root;
      currentRefId = 0;
      Gl;
      resyncVisited = null;
      resyncDamaged = !1;
      constructor(YY, rY) {
        this.setState(YY), this.context = rY || new wr(YY.constructor)
      }
      setState(YY) {
        this.state = YY, this.root = new GF, this.root.addRef(0, YY)
      }
      decode(YY) {
        let rY = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
            offset: 0
          },
          DY = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : this.state;
        const AY = void 0 !== this.Gl ? [] : null,
          IY = this.root,
          RY = YY.byteLength;
        let OY = DY.constructor[vY];
        for (this.currentRefId = 0; rY.offset < RY;) {
          if (YY[rY.offset] == FY) {
            rY.offset++, DY[VY]?.();
            const FY = mr.number(YY, rY),
              AY = IY.refs.get(FY);
            AY ? (DY = AY, OY = DY.constructor[vY], this.currentRefId = FY) : (console.error(`"refId" not found: ${FY}`, {
              previousRef: DY,
              previousRefId: this.currentRefId
            }), console.warn("Please report this issue to the developers."), this.skipCurrentStructure(YY, rY, RY));
            continue
          } - 1 !== OY(this, YY, rY, DY, AY) || (console.warn("@colyseus/schema: definition mismatch"), this.skipCurrentStructure(YY, rY, RY))
        }
        return DY[VY]?.(), null !== this.resyncVisited && function(YY, rY) {
          YY.resyncDamaged ? console.warn("@colyseus/schema: resync sweep skipped \u2014 parts of the payload could not be decoded. Stale entries may persist until the next resync.") : wD(YY, YY.state, new Set, rY)
        }(this, AY), null !== AY && this.Gl?.(AY), IY.garbageCollectDeletedRefs(), AY
      }
      decodeResync(YY) {
        let rY = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
          offset: 0
        };
        this.resyncVisited = new Map, this.resyncDamaged = !1;
        try {
          return this.decode(YY, rY)
        } finally {
          this.resyncVisited = null
        }
      }
      skipCurrentStructure(YY, rY, DY) {
        null !== this.resyncVisited && (this.resyncDamaged = !0);
        const AY = {
          offset: rY.offset
        };
        for (; rY.offset < DY && (YY[rY.offset] !== FY || (AY.offset = rY.offset + 1, !this.root.refs.has(mr.number(YY, AY))));) rY.offset++
      }
      getInstanceType(YY, rY, DY) {
        let FY;
        if (213 === YY[rY.offset]) {
          rY.offset++;
          const DY = mr.number(YY, rY);
          FY = this.context.get(DY)
        }
        return FY || DY
      }
      createInstanceOfType(YY) {
        return YY.initializeForDecoder()
      }
      removeChildRefs(YY, rY) {
        const DY = "string" !== typeof YY[oY],
          FY = YY[OY];
        YY.forEach(((IY, RY) => {
          rY?.push({
            ref: YY,
            refId: FY,
            op: AY.DELETE,
            field: RY,
            value: void 0,
            previousValue: IY
          }), DY && this.root.removeRef(IY[OY])
        }))
      }
    }
    const nF = BF({
        min: iF.float64(),
        max: iF.float64(),
        bits: iF.uint8(),
        mode: iF.uint8()
      }, "QuantizedDescriptor"),
      PF = BF({
        name: iF.string(),
        type: iF.string(),
        referencedType: iF.number(),
        childPrimitive: iF.string(),
        quantized: iF.ref(nF).optional()
      }, "ReflectionField"),
      UF = BF({
        id: iF.number(),
        extendsId: iF.number(),
        fields: iF.array(PF)
      }, "ReflectionType"),
      LF = BF({
        types: iF.array(UF),
        rootType: iF.number()
      }, "Reflection");

    function tF(YY) {
      const rY = YY.root,
        DY = rY.callbacks,
        FY = new WeakMap;
      let IY;

      function RY(YY, DY) {
        let aY = DY.instance?.constructor[Symbol.metadata] || YY,
          vY = DY.instance && "function" === typeof DY.instance.forEach || YY && !KF.is(YY);
        if (aY && !vY) {
          const YY = function(YY, AY, RY, gY) {
            return gY && void 0 !== DY.instance[AY] && !FY.has(IY) && RY(DY.instance[AY], void 0), rY.addCallback(YY[OY], AY, RY)
          };
          return new Proxy({
            listen: function(rY, AY) {
              let RY = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
              if (DY.instance) return YY(DY.instance, rY, AY, RY);
              {
                let OY = () => {};
                return DY.onInstanceAvailable(((DY, gY) => {
                  OY = YY(DY, rY, AY, RY && gY && !FY.has(IY))
                })), () => OY()
              }
            },
            onChange: function(YY) {
              return rY.addCallback(DY.instance[OY], AY.REPLACE, YY)
            },
            bindTo: function(YY, FY) {
              return FY || (FY = Object.keys(aY).map((YY => aY[YY].name))), rY.addCallback(DY.instance[OY], AY.REPLACE, (() => {
                FY.forEach((rY => YY[rY] = DY.instance[rY]))
              }))
            }
          }, {
            get(YY, rY) {
              const FY = aY[aY[rY]];
              if (FY) {
                const YY = DY.instance?.[rY],
                  AY = FY => {
                    const AY = gY(DY.instance).listen(rY, ((YY, rY) => {
                      FY(YY, !1), AY?.()
                    }), !1);
                    void 0 !== YY?.[OY] && FY(YY, !0)
                  };
                return RY(FY.type, {
                  instance: void 0 !== YY?.[OY] && YY,
                  parentInstance: DY.instance,
                  onInstanceAvailable: AY
                })
              }
              return YY[rY]
            },
            has: (YY, rY) => void 0 !== aY[rY],
            set(YY, rY, DY) {
              throw new Error("not allowed")
            },
            deleteProperty(YY, rY) {
              throw new Error("not allowed")
            }
          })
        } {
          const YY = function(YY, DY, RY) {
              return RY && YY.forEach(((YY, rY) => DY(YY, rY))), rY.addCallback(YY[OY], AY.ADD, ((YY, rY) => {
                FY.set(DY, !0), IY = DY, DY(YY, rY), FY.delete(DY), IY = void 0
              }))
            },
            RY = function(YY, DY) {
              return rY.addCallback(YY[OY], AY.DELETE, DY)
            },
            gY = function(YY, DY) {
              return rY.addCallback(YY[OY], AY.REPLACE, DY)
            };
          return new Proxy({
            kE: function(rY) {
              let AY = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
              if (DY.instance) return YY(DY.instance, rY, AY && !FY.has(IY));
              if (DY.onInstanceAvailable) {
                let RY = () => {};
                return DY.onInstanceAvailable(((DY, OY) => {
                  RY = YY(DY, rY, AY && OY && !FY.has(IY))
                })), () => RY()
              }
            },
            kS: function(YY) {
              if (DY.instance) return RY(DY.instance, YY);
              if (DY.onInstanceAvailable) {
                let rY = () => {};
                return DY.onInstanceAvailable((DY => {
                  rY = RY(DY, YY)
                })), () => rY()
              }
            },
            onChange: function(YY) {
              if (DY.instance) return gY(DY.instance, YY);
              if (DY.onInstanceAvailable) {
                let rY = () => {};
                return DY.onInstanceAvailable((DY => {
                  rY = gY(DY, YY)
                })), () => rY()
              }
            }
          }, {
            get(YY, rY) {
              if (!YY[rY]) throw new Error(`Can't access '${rY}' through callback proxy. access the instance directly.`);
              return YY[rY]
            },
            has: (YY, rY) => void 0 !== YY[rY],
            set(YY, rY, DY) {
              throw new Error("not allowed")
            },
            deleteProperty(YY, rY) {
              throw new Error("not allowed")
            }
          })
        }
      }

      function gY(YY) {
        return RY(void 0, {
          instance: YY
        })
      }
      return YY.Gl = function(YY) {
        const rY = new Set;
        for (let FY = 0, IY = YY.length; FY < IY; FY++) {
          const IY = YY[FY],
            RY = IY.refId,
            gY = IY.ref,
            aY = DY[RY];
          if (aY) {
            if ((IY.op & AY.DELETE) === AY.DELETE && KF.isSchema(IY.previousValue)) {
              const YY = DY[IY.previousValue[OY]]?.[AY.DELETE];
              for (let rY = YY?.length - 1; rY >= 0; rY--) YY[rY]()
            }
            if (KF.isSchema(gY)) {
              if (!rY.has(RY)) {
                const YY = aY?.[AY.REPLACE];
                for (let rY = YY?.length - 1; rY >= 0; rY--) YY[rY]()
              }
              if (aY.hasOwnProperty(IY.field)) {
                const YY = aY[IY.field];
                for (let rY = YY?.length - 1; rY >= 0; rY--) YY[rY](IY.value, IY.previousValue)
              }
            } else {
              if ((IY.op & AY.DELETE) === AY.DELETE) {
                if (void 0 !== IY.previousValue) {
                  const YY = aY[AY.DELETE];
                  for (let rY = YY?.length - 1; rY >= 0; rY--) YY[rY](IY.previousValue, IY.dynamicIndex ?? IY.field)
                }
                if ((IY.op & AY.ADD) === AY.ADD) {
                  const YY = aY[AY.ADD];
                  for (let rY = YY?.length - 1; rY >= 0; rY--) YY[rY](IY.value, IY.dynamicIndex ?? IY.field)
                }
              } else if ((IY.op & AY.ADD) === AY.ADD && IY.previousValue !== IY.value) {
                const YY = aY[AY.ADD];
                for (let rY = YY?.length - 1; rY >= 0; rY--) YY[rY](IY.value, IY.dynamicIndex ?? IY.field)
              }
              if (IY.value !== IY.previousValue && (void 0 !== IY.value || void 0 !== IY.previousValue)) {
                const YY = aY[AY.REPLACE];
                for (let rY = YY?.length - 1; rY >= 0; rY--) YY[rY](IY.value, IY.dynamicIndex ?? IY.field)
              }
            }
            rY.add(RY)
          }
        }
      }, gY
    }

    function YA(YY, rY) {
      YY.Gl = rY
    }
    LF.encode = function(YY) {
      let rY = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
        offset: 0
      };
      const DY = YY.context,
        FY = new LF,
        AY = new qF(FY),
        IY = DY.schemas.get(YY.state.constructor);
      IY > 0 && (FY.rootType = IY);
      const RY = new Set,
        OY = {},
        gY = YY => {
          if (void 0 === YY.extendsId || RY.has(YY.extendsId)) {
            RY.add(YY.id), FY.types.push(YY);
            const rY = OY[YY.id];
            void 0 !== rY && (delete OY[YY.id], rY.forEach((YY => gY(YY))))
          } else void 0 === OY[YY.extendsId] && (OY[YY.extendsId] = []), OY[YY.extendsId].push(YY)
        };
      DY.schemas.forEach(((YY, rY) => {
        const FY = new UF;
        FY.id = Number(YY);
        const AY = Object.getPrototypeOf(rY);
        AY !== KF && (FY.extendsId = DY.schemas.get(AY));
        const IY = rY[Symbol.metadata];
        if (IY !== AY[Symbol.metadata]) {
          const YY = IY[BY] ?? -1;
          for (let rY = 0; rY <= YY; rY++) {
            const YY = IY[rY];
            if (void 0 === YY) continue;
            const AY = YY.name;
            if (!Object.prototype.hasOwnProperty.call(IY, AY)) continue;
            const RY = new PF;
            let OY;
            if (RY.name = AY, "string" === typeof YY.type) OY = YY.type;
            else if (hr(YY.type)) {
              const rY = YY.type.quantized;
              OY = "quantized";
              const DY = new nF;
              DY.min = rY.min, DY.max = rY.max, DY.bits = rY.bits, DY.mode = rY.wrap ? 1 : 0, RY.quantized = DY
            } else {
              let rY;
              KF.is(YY.type) ? (OY = "ref", rY = YY.type) : (OY = Object.keys(YY.type)[0], "string" === typeof YY.type[OY] ? RY.childPrimitive = YY.type[OY] : rY = YY.type[OY]), RY.referencedType = rY ? DY.getTypeId(rY) : -1
            }
            RY.type = OY, FY.fields.push(RY)
          }
        }
        gY(FY)
      }));
      for (const aY in OY) OY[aY].forEach((YY => FY.types.push(YY)));
      return AY.encodeAll(rY).slice(0, rY.offset)
    }, LF.decode = function(YY, rY) {
      const DY = new LF;
      new xF(DY).decode(YY, rY);
      const FY = new wr;
      DY.types.forEach((YY => {
        const rY = FY.get(YY.extendsId) ?? KF,
          DY = class extends rY {};
        wr.register(DY), FY.add(DY, YY.id)
      }), {});
      DY.types.forEach((YY => {
        const rY = FY.get(YY.id),
          AY = xr.initialize(rY),
          IY = [];
        let RY = YY;
        do {
          IY.push(RY), RY = DY.types.find((YY => YY.id === RY.extendsId))
        } while (RY);
        let OY = 0;
        IY.reverse().forEach((YY => {
          ((YY, rY, DY) => {
            rY.fields.forEach(((rY, AY) => {
              const IY = DY + AY;
              if (void 0 !== rY.quantized) {
                const DY = rY.quantized;
                xr.addField(YY, IY, rY.name, {
                  quantized: jr({
                    min: DY.min,
                    max: DY.max,
                    bits: DY.bits,
                    mode: 1 === DY.mode ? "wrap" : "clamp"
                  })
                })
              } else if (void 0 !== rY.referencedType) {
                const DY = rY.type,
                  AY = FY.get(rY.referencedType) ?? rY.childPrimitive;
                "ref" === DY ? xr.addField(YY, IY, rY.name, AY) : xr.addField(YY, IY, rY.name, {
                  [DY]: AY
                })
              } else xr.addField(YY, IY, rY.name, rY.type)
            }))
          })(AY, YY, OY), OY += YY.fields.length
        }))
      }));
      const AY = new(FY.get(DY.rootType || 0));
      return new xF(AY, FY)
    }, LF.makeEncodable = function(YY) {
      const rY = YY[Symbol.metadata];
      if (!rY) return YY;
      const DY = rY[BY];
      if (void 0 === DY) return YY;
      for (let FY = 0; FY <= DY; FY++) {
        const DY = rY[FY];
        DY && xr.defineField(YY, rY, FY, DY.name, DY.type)
      }
      return Object.prototype.hasOwnProperty.call(YY, eY) && delete YY[eY], YY
    };
    class rA {
      yy;
      uniqueRefIds = new Set;
      isTriggering = !1;
      constructor(YY) {
        this.yy = YY, this.yy.Gl = this.Gl.bind(this)
      }
      get callbacks() {
        return this.yy.root.callbacks
      }
      get state() {
        return this.yy.state
      }
      addCallback(YY, rY, DY) {
        return this.yy.root.addCallback(YY, rY, DY)
      }
      addCallbackOrWaitCollectionAvailable(YY, rY, DY, FY) {
        let IY = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4],
          RY = () => {};
        const gY = () => RY(),
          aY = YY[rY];
        if (aY && void 0 !== aY[OY]) return IY = IY && !1 === this.isTriggering, DY === AY.ADD && IY && aY.forEach(((YY, rY) => {
          FY(YY, rY)
        })), this.addCallback(aY[OY], DY, FY);
        {
          let AY;
          return AY = this.addCallback(YY[OY], rY, ((YY, rY) => {
            null !== YY && void 0 !== YY && (AY(), RY = this.addCallback(YY[OY], DY, FY))
          })), RY = AY, gY
        }
      }
      listen() {
        return "string" === typeof(arguments.length <= 0 ? void 0 : arguments[0]) ? this.listenInstance(this.state, arguments.length <= 0 ? void 0 : arguments[0], arguments.length <= 1 ? void 0 : arguments[1], arguments.length <= 2 ? void 0 : arguments[2]) : this.listenInstance(arguments.length <= 0 ? void 0 : arguments[0], arguments.length <= 1 ? void 0 : arguments[1], arguments.length <= 2 ? void 0 : arguments[2], arguments.length <= 3 ? void 0 : arguments[3])
      }
      listenInstance(YY, rY, DY) {
        let FY = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
        FY = FY && !1 === this.isTriggering;
        const AY = YY[rY];
        return FY && null !== AY && void 0 !== AY && DY(AY, void 0), this.addCallback(YY[OY], rY, DY)
      }
      onChange() {
        if (2 === arguments.length && "string" !== typeof(arguments.length <= 0 ? void 0 : arguments[0])) {
          const YY = arguments.length <= 0 ? void 0 : arguments[0],
            rY = arguments.length <= 1 ? void 0 : arguments[1];
          return this.addCallback(YY[OY], AY.REPLACE, rY)
        }
        return "string" === typeof(arguments.length <= 0 ? void 0 : arguments[0]) ? this.addCallbackOrWaitCollectionAvailable(this.state, arguments.length <= 0 ? void 0 : arguments[0], AY.REPLACE, arguments.length <= 1 ? void 0 : arguments[1]) : this.addCallbackOrWaitCollectionAvailable(arguments.length <= 0 ? void 0 : arguments[0], arguments.length <= 1 ? void 0 : arguments[1], AY.REPLACE, arguments.length <= 2 ? void 0 : arguments[2])
      }
      kE() {
        return "string" === typeof(arguments.length <= 0 ? void 0 : arguments[0]) ? this.addCallbackOrWaitCollectionAvailable(this.state, arguments.length <= 0 ? void 0 : arguments[0], AY.ADD, arguments.length <= 1 ? void 0 : arguments[1], !1 !== (arguments.length <= 2 ? void 0 : arguments[2])) : this.addCallbackOrWaitCollectionAvailable(arguments.length <= 0 ? void 0 : arguments[0], arguments.length <= 1 ? void 0 : arguments[1], AY.ADD, arguments.length <= 2 ? void 0 : arguments[2], !1 !== (arguments.length <= 3 ? void 0 : arguments[3]))
      }
      kS() {
        return "string" === typeof(arguments.length <= 0 ? void 0 : arguments[0]) ? this.addCallbackOrWaitCollectionAvailable(this.state, arguments.length <= 0 ? void 0 : arguments[0], AY.DELETE, arguments.length <= 1 ? void 0 : arguments[1]) : this.addCallbackOrWaitCollectionAvailable(arguments.length <= 0 ? void 0 : arguments[0], arguments.length <= 1 ? void 0 : arguments[1], AY.DELETE, arguments.length <= 2 ? void 0 : arguments[2])
      }
      bindTo(YY, rY, DY) {
        let FY = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
        const IY = YY.constructor[Symbol.metadata];
        DY || (DY = Object.keys(IY).filter((YY => !isNaN(Number(YY)))).map((YY => IY[YY].name)));
        const RY = () => {
          for (const FY of DY) {
            const DY = YY[FY];
            void 0 !== DY && (rY[FY] = DY)
          }
        };
        return FY && RY(), this.addCallback(YY[OY], AY.REPLACE, RY)
      }
      Gl(YY) {
        this.uniqueRefIds.clear(), this.isTriggering = !0;
        for (let rY = 0, DY = YY.length; rY < DY; rY++) {
          const DY = YY[rY],
            FY = DY.refId,
            IY = DY.ref,
            RY = this.callbacks[FY];
          if (RY) {
            if ((DY.op & AY.DELETE) === AY.DELETE && KF.isSchema(DY.previousValue)) {
              const YY = DY.previousValue[OY],
                rY = this.callbacks[YY]?.[AY.DELETE];
              if (rY)
                for (let DY = rY.length - 1; DY >= 0; DY--) try {
                  rY[DY]()
                } catch (IA) {
                  console.error(IA)
                }
            }
            if (KF.isSchema(IY)) {
              if (!this.uniqueRefIds.has(FY)) {
                const YY = RY[AY.REPLACE];
                if (YY)
                  for (let rY = YY.length - 1; rY >= 0; rY--) try {
                    YY[rY]()
                  } catch (IA) {
                    console.error(IA)
                  }
              }
              const YY = RY[DY.field];
              if (YY)
                for (let rY = YY.length - 1; rY >= 0; rY--) try {
                  YY[rY](DY.value, DY.previousValue)
                } catch (IA) {
                  console.error(IA)
                }
            } else {
              const YY = DY.dynamicIndex ?? DY.field;
              if ((DY.op & AY.DELETE) === AY.DELETE) {
                if (void 0 !== DY.previousValue) {
                  const rY = RY[AY.DELETE];
                  if (rY)
                    for (let FY = rY.length - 1; FY >= 0; FY--) try {
                      rY[FY](DY.previousValue, YY)
                    } catch (IA) {
                      console.error(IA)
                    }
                }
                if ((DY.op & AY.ADD) === AY.ADD) {
                  const rY = RY[AY.ADD];
                  if (rY)
                    for (let FY = rY.length - 1; FY >= 0; FY--) try {
                      rY[FY](DY.value, YY)
                    } catch (IA) {
                      console.error(IA)
                    }
                }
              } else if ((DY.op & AY.ADD) === AY.ADD && DY.previousValue !== DY.value) {
                const rY = RY[AY.ADD];
                if (rY)
                  for (let FY = rY.length - 1; FY >= 0; FY--) try {
                    rY[FY](DY.value, YY)
                  } catch (IA) {
                    console.error(IA)
                  }
              }
              if (DY.value !== DY.previousValue) {
                const rY = RY[AY.REPLACE];
                if (rY)
                  for (let FY = rY.length - 1; FY >= 0; FY--) try {
                    rY[FY](YY, DY.value)
                  } catch (IA) {
                    console.error(IA)
                  }
              }
            }
            this.uniqueRefIds.add(FY)
          }
        }
        this.isTriggering = !1
      }
    }
    const DA = {
      get(YY) {
        if (YY instanceof xF) return new rA(YY);
        if ("yy" in YY.EW) return new rA(YY.EW.yy);
        throw new Error("Invalid room or decoder")
      },
      getLegacy(YY) {
        if (YY instanceof xF) return tF(YY);
        if ("yy" in YY.EW) return tF(YY.EW.yy);
        throw new Error("Invalid room or decoder")
      },
      getRawChanges: (YY, rY) => YA(YY, rY)
    };
    class FA {
      _free = [];
      _factory;
      _maxSize;
      constructor(YY) {
        let rY = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        this._factory = YY, this._maxSize = rY.maxSize ?? 1 / 0;
        const DY = rY.preallocate ?? 0;
        for (let FY = 0; FY < DY; FY++) this._free.push(YY())
      }
      acquire() {
        return this._free.length > 0 ? this._free.pop() : this._factory()
      }
      release(YY) {
        KF.reset(YY), this._free.length < this._maxSize && this._free.push(YY)
      }
      get size() {
        return this._free.length
      }
    }

    function AA(YY) {
      return new FA((() => new YY), arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {})
    }
    lr("map", {
      constructor: AF
    }), lr("array", {
      constructor: DF
    }), lr("set", {
      constructor: RF
    }), lr("collection", {
      constructor: IF
    })
  },
  8496: (YY, rY, DY) => {
    DY.r(rY), DY.d(rY, {
      __addDisposableResource: () => hY,
      __assign: () => IY,
      __asyncDelegator: () => NY,
      __asyncGenerator: () => eY,
      __asyncValues: () => BY,
      __await: () => TY,
      __awaiter: () => yY,
      __classPrivateFieldGet: () => CY,
      __classPrivateFieldIn: () => jY,
      __classPrivateFieldSet: () => fY,
      __createBinding: () => oY,
      __decorate: () => OY,
      __disposeResources: () => JY,
      __esDecorate: () => aY,
      __exportStar: () => WY,
      __extends: () => AY,
      __generator: () => QY,
      __importDefault: () => ZY,
      __importStar: () => zY,
      __makeTemplateObject: () => cY,
      __metadata: () => iY,
      __param: () => gY,
      __propKey: () => uY,
      __read: () => mY,
      __rest: () => RY,
      __rewriteRelativeImportExtension: () => MY,
      __runInitializers: () => vY,
      __setFunctionName: () => sY,
      __spread: () => VY,
      __spreadArray: () => lY,
      __spreadArrays: () => SY,
      __values: () => EY,
      default: () => wY
    });
    var FY = function(YY, rY) {
      return FY = Object.setPrototypeOf || {
        __proto__: []
      }
      instanceof Array && function(YY, rY) {
        YY.__proto__ = rY
      } || function(YY, rY) {
        for (var DY in rY) Object.prototype.hasOwnProperty.call(rY, DY) && (YY[DY] = rY[DY])
      }, FY(YY, rY)
    };

    function AY(YY, rY) {
      if ("function" !== typeof rY && null !== rY) throw new TypeError("Class extends value " + String(rY) + " is not a constructor or null");

      function DY() {
        this.constructor = YY
      }
      FY(YY, rY), YY.prototype = null === rY ? Object.create(rY) : (DY.prototype = rY.prototype, new DY)
    }
    var IY = function() {
      return IY = Object.assign || function(YY) {
        for (var rY, DY = 1, FY = arguments.length; DY < FY; DY++)
          for (var AY in rY = arguments[DY]) Object.prototype.hasOwnProperty.call(rY, AY) && (YY[AY] = rY[AY]);
        return YY
      }, IY.apply(this, arguments)
    };

    function RY(YY, rY) {
      var DY = {};
      for (var FY in YY) Object.prototype.hasOwnProperty.call(YY, FY) && rY.indexOf(FY) < 0 && (DY[FY] = YY[FY]);
      if (null != YY && "function" === typeof Object.getOwnPropertySymbols) {
        var AY = 0;
        for (FY = Object.getOwnPropertySymbols(YY); AY < FY.length; AY++) rY.indexOf(FY[AY]) < 0 && Object.prototype.propertyIsEnumerable.call(YY, FY[AY]) && (DY[FY[AY]] = YY[FY[AY]])
      }
      return DY
    }

    function OY(YY, rY, DY, FY) {
      var AY, IY = arguments.length,
        RY = IY < 3 ? rY : null === FY ? FY = Object.getOwnPropertyDescriptor(rY, DY) : FY;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) RY = Reflect.decorate(YY, rY, DY, FY);
      else
        for (var OY = YY.length - 1; OY >= 0; OY--)(AY = YY[OY]) && (RY = (IY < 3 ? AY(RY) : IY > 3 ? AY(rY, DY, RY) : AY(rY, DY)) || RY);
      return IY > 3 && RY && Object.defineProperty(rY, DY, RY), RY
    }

    function gY(YY, rY) {
      return function(DY, FY) {
        rY(DY, FY, YY)
      }
    }

    function aY(YY, rY, DY, FY, AY, IY) {
      function RY(YY) {
        if (void 0 !== YY && "function" !== typeof YY) throw new TypeError("Function expected");
        return YY
      }
      for (var OY, gY = FY.kind, aY = "getter" === gY ? "get" : "setter" === gY ? "set" : "value", vY = !rY && YY ? FY.static ? YY : YY.prototype : null, uY = rY || (vY ? Object.getOwnPropertyDescriptor(vY, FY.name) : {}), sY = !1, iY = DY.length - 1; iY >= 0; iY--) {
        var yY = {};
        for (var QY in FY) yY[QY] = "access" === QY ? {} : FY[QY];
        for (var QY in FY.access) yY.access[QY] = FY.access[QY];
        yY.addInitializer = function(YY) {
          if (sY) throw new TypeError("Cannot add initializers after decoration has completed");
          IY.push(RY(YY || null))
        };
        var oY = (0, DY[iY])("accessor" === gY ? {
          get: uY.get,
          set: uY.set
        } : uY[aY], yY);
        if ("accessor" === gY) {
          if (void 0 === oY) continue;
          if (null === oY || "object" !== typeof oY) throw new TypeError("Object expected");
          (OY = RY(oY.get)) && (uY.get = OY), (OY = RY(oY.set)) && (uY.set = OY), (OY = RY(oY.init)) && AY.unshift(OY)
        } else(OY = RY(oY)) && ("field" === gY ? AY.unshift(OY) : uY[aY] = OY)
      }
      vY && Object.defineProperty(vY, FY.name, uY), sY = !0
    }

    function vY(YY, rY, DY) {
      for (var FY = arguments.length > 2, AY = 0; AY < rY.length; AY++) DY = FY ? rY[AY].call(YY, DY) : rY[AY].call(YY);
      return FY ? DY : void 0
    }

    function uY(YY) {
      return "symbol" === typeof YY ? YY : "".concat(YY)
    }

    function sY(YY, rY, DY) {
      return "symbol" === typeof rY && (rY = rY.description ? "[".concat(rY.description, "]") : ""), Object.defineProperty(YY, "name", {
        configurable: !0,
        value: DY ? "".concat(DY, " ", rY) : rY
      })
    }

    function iY(YY, rY) {
      if ("object" === typeof Reflect && "function" === typeof Reflect.metadata) return Reflect.metadata(YY, rY)
    }

    function yY(YY, rY, DY, FY) {
      return new(DY || (DY = Promise))((function(AY, IY) {
        function RY(YY) {
          try {
            gY(FY.next(YY))
          } catch (rY) {
            IY(rY)
          }
        }

        function OY(YY) {
          try {
            gY(FY.throw(YY))
          } catch (rY) {
            IY(rY)
          }
        }

        function gY(YY) {
          var rY;
          YY.done ? AY(YY.value) : (rY = YY.value, rY instanceof DY ? rY : new DY((function(YY) {
            YY(rY)
          }))).then(RY, OY)
        }
        gY((FY = FY.apply(YY, rY || [])).next())
      }))
    }

    function QY(YY, rY) {
      var DY, FY, AY, IY = {
          label: 0,
          sent: function() {
            if (1 & AY[0]) throw AY[1];
            return AY[1]
          },
          trys: [],
          ops: []
        },
        RY = Object.create(("function" === typeof Iterator ? Iterator : Object).prototype);
      return RY.next = OY(0), RY.throw = OY(1), RY.return = OY(2), "function" === typeof Symbol && (RY[Symbol.iterator] = function() {
        return this
      }), RY;

      function OY(OY) {
        return function(gY) {
          return function(OY) {
            if (DY) throw new TypeError("Generator is already executing.");
            for (; RY && (RY = 0, OY[0] && (IY = 0)), IY;) try {
              if (DY = 1, FY && (AY = 2 & OY[0] ? FY.return : OY[0] ? FY.throw || ((AY = FY.return) && AY.call(FY), 0) : FY.next) && !(AY = AY.call(FY, OY[1])).done) return AY;
              switch (FY = 0, AY && (OY = [2 & OY[0], AY.value]), OY[0]) {
                case 0:
                case 1:
                  AY = OY;
                  break;
                case 4:
                  return IY.label++, {
                    value: OY[1],
                    done: !1
                  };
                case 5:
                  IY.label++, FY = OY[1], OY = [0];
                  continue;
                case 7:
                  OY = IY.ops.pop(), IY.trys.pop();
                  continue;
                default:
                  if (!(AY = (AY = IY.trys).length > 0 && AY[AY.length - 1]) && (6 === OY[0] || 2 === OY[0])) {
                    IY = 0;
                    continue
                  }
                  if (3 === OY[0] && (!AY || OY[1] > AY[0] && OY[1] < AY[3])) {
                    IY.label = OY[1];
                    break
                  }
                  if (6 === OY[0] && IY.label < AY[1]) {
                    IY.label = AY[1], AY = OY;
                    break
                  }
                  if (AY && IY.label < AY[2]) {
                    IY.label = AY[2], IY.ops.push(OY);
                    break
                  }
                  AY[2] && IY.ops.pop(), IY.trys.pop();
                  continue
              }
              OY = rY.call(YY, IY)
            } catch (gY) {
              OY = [6, gY], FY = 0
            } finally {
              DY = AY = 0
            }
            if (5 & OY[0]) throw OY[1];
            return {
              value: OY[0] ? OY[1] : void 0,
              done: !0
            }
          }([OY, gY])
        }
      }
    }
    var oY = Object.create ? function(YY, rY, DY, FY) {
      void 0 === FY && (FY = DY);
      var AY = Object.getOwnPropertyDescriptor(rY, DY);
      AY && !("get" in AY ? !rY.__esModule : AY.writable || AY.configurable) || (AY = {
        enumerable: !0,
        get: function() {
          return rY[DY]
        }
      }), Object.defineProperty(YY, FY, AY)
    } : function(YY, rY, DY, FY) {
      void 0 === FY && (FY = DY), YY[FY] = rY[DY]
    };

    function WY(YY, rY) {
      for (var DY in YY) "default" === DY || Object.prototype.hasOwnProperty.call(rY, DY) || oY(rY, YY, DY)
    }

    function EY(YY) {
      var rY = "function" === typeof Symbol && Symbol.iterator,
        DY = rY && YY[rY],
        FY = 0;
      if (DY) return DY.call(YY);
      if (YY && "number" === typeof YY.length) return {
        next: function() {
          return YY && FY >= YY.length && (YY = void 0), {
            value: YY && YY[FY++],
            done: !YY
          }
        }
      };
      throw new TypeError(rY ? "Object is not iterable." : "Symbol.iterator is not defined.")
    }

    function mY(YY, rY) {
      var DY = "function" === typeof Symbol && YY[Symbol.iterator];
      if (!DY) return YY;
      var FY, AY, IY = DY.call(YY),
        RY = [];
      try {
        for (;
          (void 0 === rY || rY-- > 0) && !(FY = IY.next()).done;) RY.push(FY.value)
      } catch (OY) {
        AY = {
          error: OY
        }
      } finally {
        try {
          FY && !FY.done && (DY = IY.return) && DY.call(IY)
        } finally {
          if (AY) throw AY.error
        }
      }
      return RY
    }

    function VY() {
      for (var YY = [], rY = 0; rY < arguments.length; rY++) YY = YY.concat(mY(arguments[rY]));
      return YY
    }

    function SY() {
      for (var YY = 0, rY = 0, DY = arguments.length; rY < DY; rY++) YY += arguments[rY].length;
      var FY = Array(YY),
        AY = 0;
      for (rY = 0; rY < DY; rY++)
        for (var IY = arguments[rY], RY = 0, OY = IY.length; RY < OY; RY++, AY++) FY[AY] = IY[RY];
      return FY
    }

    function lY(YY, rY, DY) {
      if (DY || 2 === arguments.length)
        for (var FY, AY = 0, IY = rY.length; AY < IY; AY++) !FY && AY in rY || (FY || (FY = Array.prototype.slice.call(rY, 0, AY)), FY[AY] = rY[AY]);
      return YY.concat(FY || Array.prototype.slice.call(rY))
    }

    function TY(YY) {
      return this instanceof TY ? (this.v = YY, this) : new TY(YY)
    }

    function eY(YY, rY, DY) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var FY, AY = DY.apply(YY, rY || []),
        IY = [];
      return FY = Object.create(("function" === typeof AsyncIterator ? AsyncIterator : Object).prototype), RY("next"), RY("throw"), RY("return", (function(YY) {
        return function(rY) {
          return Promise.resolve(rY).then(YY, aY)
        }
      })), FY[Symbol.asyncIterator] = function() {
        return this
      }, FY;

      function RY(YY, rY) {
        AY[YY] && (FY[YY] = function(rY) {
          return new Promise((function(DY, FY) {
            IY.push([YY, rY, DY, FY]) > 1 || OY(YY, rY)
          }))
        }, rY && (FY[YY] = rY(FY[YY])))
      }

      function OY(YY, rY) {
        try {
          (DY = AY[YY](rY)).value instanceof TY ? Promise.resolve(DY.value.v).then(gY, aY) : vY(IY[0][2], DY)
        } catch (FY) {
          vY(IY[0][3], FY)
        }
        var DY
      }

      function gY(YY) {
        OY("next", YY)
      }

      function aY(YY) {
        OY("throw", YY)
      }

      function vY(YY, rY) {
        YY(rY), IY.shift(), IY.length && OY(IY[0][0], IY[0][1])
      }
    }

    function NY(YY) {
      var rY, DY;
      return rY = {}, FY("next"), FY("throw", (function(YY) {
        throw YY
      })), FY("return"), rY[Symbol.iterator] = function() {
        return this
      }, rY;

      function FY(FY, AY) {
        rY[FY] = YY[FY] ? function(rY) {
          return (DY = !DY) ? {
            value: TY(YY[FY](rY)),
            done: !1
          } : AY ? AY(rY) : rY
        } : AY
      }
    }

    function BY(YY) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var rY, DY = YY[Symbol.asyncIterator];
      return DY ? DY.call(YY) : (YY = EY(YY), rY = {}, FY("next"), FY("throw"), FY("return"), rY[Symbol.asyncIterator] = function() {
        return this
      }, rY);

      function FY(DY) {
        rY[DY] = YY[DY] && function(rY) {
          return new Promise((function(FY, AY) {
            (function(YY, rY, DY, FY) {
              Promise.resolve(FY).then((function(rY) {
                YY({
                  value: rY,
                  done: DY
                })
              }), rY)
            })(FY, AY, (rY = YY[DY](rY)).done, rY.value)
          }))
        }
      }
    }

    function cY(YY, rY) {
      return Object.defineProperty ? Object.defineProperty(YY, "raw", {
        value: rY
      }) : YY.raw = rY, YY
    }
    var KY = Object.create ? function(YY, rY) {
        Object.defineProperty(YY, "default", {
          enumerable: !0,
          value: rY
        })
      } : function(YY, rY) {
        YY.default = rY
      },
      HY = function(YY) {
        return HY = Object.getOwnPropertyNames || function(YY) {
          var rY = [];
          for (var DY in YY) Object.prototype.hasOwnProperty.call(YY, DY) && (rY[rY.length] = DY);
          return rY
        }, HY(YY)
      };

    function zY(YY) {
      if (YY && YY.__esModule) return YY;
      var rY = {};
      if (null != YY)
        for (var DY = HY(YY), FY = 0; FY < DY.length; FY++) "default" !== DY[FY] && oY(rY, YY, DY[FY]);
      return KY(rY, YY), rY
    }

    function ZY(YY) {
      return YY && YY.__esModule ? YY : {
        default: YY
      }
    }

    function CY(YY, rY, DY, FY) {
      if ("a" === DY && !FY) throw new TypeError("Private accessor was defined without a getter");
      if ("function" === typeof rY ? YY !== rY || !FY : !rY.has(YY)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
      return "m" === DY ? FY : "a" === DY ? FY.call(YY) : FY ? FY.value : rY.get(YY)
    }

    function fY(YY, rY, DY, FY, AY) {
      if ("m" === FY) throw new TypeError("Private method is not writable");
      if ("a" === FY && !AY) throw new TypeError("Private accessor was defined without a setter");
      if ("function" === typeof rY ? YY !== rY || !AY : !rY.has(YY)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
      return "a" === FY ? AY.call(YY, DY) : AY ? AY.value = DY : rY.set(YY, DY), DY
    }

    function jY(YY, rY) {
      if (null === rY || "object" !== typeof rY && "function" !== typeof rY) throw new TypeError("Cannot use 'in' operator on non-object");
      return "function" === typeof YY ? rY === YY : YY.has(rY)
    }

    function hY(YY, rY, DY) {
      if (null !== rY && void 0 !== rY) {
        if ("object" !== typeof rY && "function" !== typeof rY) throw new TypeError("Object expected.");
        var FY, AY;
        if (DY) {
          if (!Symbol.asyncDispose) throw new TypeError("Symbol.asyncDispose is not defined.");
          FY = rY[Symbol.asyncDispose]
        }
        if (void 0 === FY) {
          if (!Symbol.dispose) throw new TypeError("Symbol.dispose is not defined.");
          FY = rY[Symbol.dispose], DY && (AY = FY)
        }
        if ("function" !== typeof FY) throw new TypeError("Object not disposable.");
        AY && (FY = function() {
          try {
            AY.call(this)
          } catch (YY) {
            return Promise.reject(YY)
          }
        }), YY.stack.push({
          value: rY,
          dispose: FY,
          async: DY
        })
      } else DY && YY.stack.push({
        async: !0
      });
      return rY
    }
    var dY = "function" === typeof SuppressedError ? SuppressedError : function(YY, rY, DY) {
      var FY = new Error(DY);
      return FY.name = "SuppressedError", FY.error = YY, FY.suppressed = rY, FY
    };

    function JY(YY) {
      function rY(rY) {
        YY.error = YY.hasError ? new dY(rY, YY.error, "An error was suppressed during disposal.") : rY, YY.hasError = !0
      }
      var DY, FY = 0;
      return function AY() {
        for (; DY = YY.stack.pop();) try {
          if (!DY.async && 1 === FY) return FY = 0, YY.stack.push(DY), Promise.resolve().then(AY);
          if (DY.dispose) {
            var IY = DY.dispose.call(DY.value);
            if (DY.async) return FY |= 2, Promise.resolve(IY).then(AY, (function(YY) {
              return rY(YY), AY()
            }))
          } else FY |= 1
        } catch (RY) {
          rY(RY)
        }
        if (1 === FY) return YY.hasError ? Promise.reject(YY.error) : Promise.resolve();
        if (YY.hasError) throw YY.error
      }()
    }

    function MY(YY, rY) {
      return "string" === typeof YY && /^\.\.?\//.test(YY) ? YY.replace(/\.(tsx)$|((?:\.d)?)((?:\.[^./]+?)?)\.([cm]?)ts$/i, (function(YY, DY, FY, AY, IY) {
        return DY ? rY ? ".jsx" : ".js" : !FY || AY && IY ? FY + AY + "." + IY.toLowerCase() + "js" : YY
      })) : YY
    }
    const wY = {
      __extends: AY,
      __assign: IY,
      __rest: RY,
      __decorate: OY,
      __param: gY,
      __esDecorate: aY,
      __runInitializers: vY,
      __propKey: uY,
      __setFunctionName: sY,
      __metadata: iY,
      __awaiter: yY,
      __generator: QY,
      __createBinding: oY,
      __exportStar: WY,
      __values: EY,
      __read: mY,
      __spread: VY,
      __spreadArrays: SY,
      __spreadArray: lY,
      __await: TY,
      __asyncGenerator: eY,
      __asyncDelegator: NY,
      __asyncValues: BY,
      __makeTemplateObject: cY,
      __importStar: zY,
      __importDefault: ZY,
      __classPrivateFieldGet: CY,
      __classPrivateFieldSet: fY,
      __classPrivateFieldIn: jY,
      __addDisposableResource: hY,
      __disposeResources: JY,
      __rewriteRelativeImportExtension: MY
    }
  }
};
Object.freeze(modules);
for (const YY in modules) Object.freeze(modules[YY]);