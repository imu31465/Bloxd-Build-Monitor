export const id = 199;
export const ids = [199];
export const modules = {
  9766: (UU, XU) => {
    XU.discordURLBuilder = function(UU) {
      var XU;
      const zU = (null === (XU = null === window || void 0 === window ? void 0 : window.location) || void 0 === XU ? void 0 : XU.hostname) || "localhost",
        cU = UU.hostname.split("."),
        yU = !UU.hostname.includes("trycloudflare.com") && !UU.hostname.includes("discordsays.com") && cU.length > 2 ? `/${cU[0]}` : "";
      return UU.pathname.startsWith("/.proxy") ? `${UU.protocol}//${zU}${yU}${UU.pathname}${UU.search}` : `${UU.protocol}//${zU}/.proxy/colyseus${yU}${UU.pathname}${UU.search}`
    }
  },
  9762: (UU, XU, zU) => {
    var cU, yU, QU, AU, FU = zU(9661),
      oU = zU(9764),
      DU = zU(9726);
    cU = new WeakMap, yU = new WeakMap, QU = new WeakMap, AU = new WeakMap, XU.Auth = class {
      constructor(UU) {
        this.http = UU, this.settings = {
          path: "/auth",
          key: "colyseus-auth-token"
        }, cU.set(this, !1), yU.set(this, void 0), QU.set(this, void 0), AU.set(this, DU.createNanoEvents()), oU.getItem(this.settings.key, (UU => this.token = UU))
      }
      set token(UU) {
        this.http.authToken = UU
      }
      get token() {
        return this.http.authToken
      }
      onChange(UU) {
        const XU = FU.__classPrivateFieldGet(this, AU, "f").on("change", UU);
        return FU.__classPrivateFieldGet(this, cU, "f") || FU.__classPrivateFieldSet(this, yU, new Promise(((UU, XU) => {
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
        })), "f"), FU.__classPrivateFieldSet(this, cU, !0, "f"), XU
      }
      getUserData() {
        return FU.__awaiter(this, void 0, void 0, (function*() {
          if (this.token) return (yield this.http.get(`${this.settings.path}/userdata`)).data;
          throw new Error("missing auth.token")
        }))
      }
      registerWithEmailAndPassword(UU, XU, zU) {
        return FU.__awaiter(this, void 0, void 0, (function*() {
          const cU = (yield this.http.post(`${this.settings.path}/register`, {
            body: {
              email: UU,
              password: XU,
              options: zU
            }
          })).data;
          return this.emitChange(cU), cU
        }))
      }
      signInWithEmailAndPassword(UU, XU) {
        return FU.__awaiter(this, void 0, void 0, (function*() {
          const zU = (yield this.http.post(`${this.settings.path}/login`, {
            body: {
              email: UU,
              password: XU
            }
          })).data;
          return this.emitChange(zU), zU
        }))
      }
      signInAnonymously(UU) {
        return FU.__awaiter(this, void 0, void 0, (function*() {
          const XU = (yield this.http.post(`${this.settings.path}/anonymous`, {
            body: {
              options: UU
            }
          })).data;
          return this.emitChange(XU), XU
        }))
      }
      sendPasswordResetEmail(UU) {
        return FU.__awaiter(this, void 0, void 0, (function*() {
          return (yield this.http.post(`${this.settings.path}/forgot-password`, {
            body: {
              email: UU
            }
          })).data
        }))
      }
      signInWithProvider(UU) {
        return FU.__awaiter(this, arguments, void 0, (function*(UU) {
          let XU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          return new Promise(((zU, cU) => {
            const yU = XU.width || 480,
              AU = XU.height || 768,
              oU = this.token ? `?token=${this.token}` : "",
              DU = `Login with ${UU[0].toUpperCase()+UU.substring(1)}`,
              EU = this.http.client.getHttpEndpoint(`${XU.prefix||`${this.settings.path}/provider`}/${UU}${oU}`),
              YU = screen.width / 2 - yU / 2,
              NU = screen.height / 2 - AU / 2;
            FU.__classPrivateFieldSet(this, QU, window.open(EU, DU, "toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no, copyhistory=no, width=" + yU + ", height=" + AU + ", top=" + NU + ", left=" + YU), "f");
            const IU = UU => {
                void 0 === UU.data.user && void 0 === UU.data.token || (clearInterval(pU), FU.__classPrivateFieldGet(this, QU, "f").close(), FU.__classPrivateFieldSet(this, QU, void 0, "f"), window.removeEventListener("message", IU), void 0 !== UU.data.error ? cU(UU.data.error) : (zU(UU.data), this.emitChange(UU.data)))
              },
              pU = setInterval((() => {
                FU.__classPrivateFieldGet(this, QU, "f") && !FU.__classPrivateFieldGet(this, QU, "f").closed || (FU.__classPrivateFieldSet(this, QU, void 0, "f"), cU("QU"), window.removeEventListener("message", IU))
              }), 200);
            window.addEventListener("message", IU)
          }))
        }))
      }
      signOut() {
        return FU.__awaiter(this, void 0, void 0, (function*() {
          this.emitChange({
            user: null,
            token: null
          })
        }))
      }
      emitChange(UU) {
        void 0 !== UU.token && (this.token = UU.token, null === UU.token ? oU.removeItem(this.settings.key) : oU.setItem(this.settings.key, UU.token)), FU.__classPrivateFieldGet(this, AU, "f").emit("change", UU)
      }
    }
  },
  9657: (UU, XU, zU) => {
    var cU, yU = zU(9661),
      QU = zU(9667),
      AU = zU(9674),
      FU = zU(9752),
      oU = zU(9762),
      DU = zU(9766);
    class EU extends Error {
      constructor(UU, XU) {
        super(UU), this.code = XU, this.name = "MatchMakeError", Object.setPrototypeOf(this, EU.prototype)
      }
    }
    const YU = "undefined" !== typeof window && "undefined" !== typeof(null === (cU = null === window || void 0 === window ? void 0 : window.location) || void 0 === cU ? void 0 : cU.hostname) ? `${window.location.protocol.replace("http","ws")}//${window.location.hostname}${window.location.port&&`:${window.location.port}`}` : "ws://127.0.0.1:2567";
    class NU {
      constructor() {
        let UU = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : YU,
          XU = arguments.length > 1 ? arguments[1] : void 0;
        var zU, cU;
        if ("string" === typeof UU) {
          const XU = UU.startsWith("/") ? new URL(UU, YU) : new URL(UU),
            zU = "https:" === XU.protocol || "wss:" === XU.protocol,
            cU = Number(XU.port || (zU ? 443 : 80));
          this.settings = {
            hostname: XU.hostname,
            pathname: XU.pathname,
            port: cU,
            secure: zU,
            searchParams: XU.searchParams.toString() || void 0
          }
        } else void 0 === UU.port && (UU.port = UU.secure ? 443 : 80), void 0 === UU.pathname && (UU.pathname = ""), this.settings = UU;
        this.settings.pathname.endsWith("/") && (this.settings.pathname = this.settings.pathname.slice(0, -1)), this.http = new FU.HTTP(this, (null === XU || void 0 === XU ? void 0 : XU.headers) || {}), this.auth = new oU.Auth(this.http), this.urlBuilder = null === XU || void 0 === XU ? void 0 : XU.urlBuilder, !this.urlBuilder && "undefined" !== typeof window && (null === (cU = null === (zU = null === window || void 0 === window ? void 0 : window.location) || void 0 === zU ? void 0 : zU.hostname) || void 0 === cU ? void 0 : cU.includes("discordsays.com")) && (this.urlBuilder = DU.discordURLBuilder, console.log("Colyseus SDK: Discord Embedded SDK detected. Using custom URL builder."))
      }
      joinOrCreate(UU) {
        return yU.__awaiter(this, arguments, void 0, (function*(UU) {
          let XU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            zU = arguments.length > 2 ? arguments[2] : void 0;
          return yield this.createMatchMakeRequest("joinOrCreate", UU, XU, zU)
        }))
      }
      create(UU) {
        return yU.__awaiter(this, arguments, void 0, (function*(UU) {
          let XU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            zU = arguments.length > 2 ? arguments[2] : void 0;
          return yield this.createMatchMakeRequest("create", UU, XU, zU)
        }))
      }
      join(UU) {
        return yU.__awaiter(this, arguments, void 0, (function*(UU) {
          let XU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            zU = arguments.length > 2 ? arguments[2] : void 0;
          return yield this.createMatchMakeRequest("join", UU, XU, zU)
        }))
      }
      joinById(UU) {
        return yU.__awaiter(this, arguments, void 0, (function*(UU) {
          let XU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            zU = arguments.length > 2 ? arguments[2] : void 0;
          return yield this.createMatchMakeRequest("joinById", UU, XU, zU)
        }))
      }
      reconnect(UU, XU) {
        return yU.__awaiter(this, void 0, void 0, (function*() {
          if ("string" === typeof UU && "string" === typeof XU) throw new Error("DEPRECATED: .reconnect() now only accepts 'reconnectionToken' as argument.\nYou can get this token from previously connected `room.reconnectionToken`");
          const [zU, cU] = UU.split(":");
          if (!zU || !cU) throw new Error("Invalid reconnection token format.\nThe format should be roomId:reconnectionToken");
          return yield this.createMatchMakeRequest("reconnect", zU, {
            reconnectionToken: cU
          }, XU)
        }))
      }
      consumeSeatReservation(UU, XU, zU) {
        return yU.__awaiter(this, void 0, void 0, (function*() {
          const cU = this.createRoom(UU.room.name, XU);
          cU.roomId = UU.room.roomId, cU.sessionId = UU.sessionId;
          const AU = {
            sessionId: cU.sessionId
          };
          UU.reconnectionToken && (AU.reconnectionToken = UU.reconnectionToken);
          const FU = zU || cU;
          return cU.connect(this.buildEndpoint(UU.room, AU, UU.protocol), UU.devMode && (() => yU.__awaiter(this, void 0, void 0, (function*() {
            console.info(`[Colyseus devMode]: ${String.fromCodePoint(128260)} Re-establishing connection with room id '${cU.roomId}'...`);
            let zU = 0;
            const QU = () => yU.__awaiter(this, void 0, void 0, (function*() {
              zU++;
              try {
                yield this.consumeSeatReservation(UU, XU, FU), console.info(`[Colyseus devMode]: ${String.fromCodePoint(9989)} Successfully re-established connection with room '${cU.roomId}'`)
              } catch (yU) {
                zU < 8 ? (console.info(`[Colyseus devMode]: ${String.fromCodePoint(128260)} retrying... (${zU} out of 8)`), setTimeout(QU, 2e3)) : console.info(`[Colyseus devMode]: ${String.fromCodePoint(10060)} Failed to reconnect. Is your server running? Please check server logs.`)
              }
            }));
            setTimeout(QU, 2e3)
          }))), FU, UU, this.http.headers), new Promise(((UU, XU) => {
            const zU = (UU, zU) => XU(new QU.ServerError(UU, zU));
            FU.onError.once(zU), FU.onJoin.once((() => {
              FU.onError.remove(zU), setTimeout((() => {
                try {
                  const UU = [168, 12, 229, 90, 152, 197, 228, 169, 185, 87, 165, 22, 250, 192, 18, 74, 166, 78, 118, 66];
                  UU && FU.rC(128, new Uint8Array(UU))
                } catch {}
              }), 3e3), UU(FU)
            }))
          }))
        }))
      }
      createMatchMakeRequest(UU, XU) {
        return yU.__awaiter(this, arguments, void 0, (function*(UU, XU) {
          let zU = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
            cU = arguments.length > 3 ? arguments[3] : void 0,
            yU = arguments.length > 4 ? arguments[4] : void 0;
          const QU = (yield this.http.post(`matchmake/${UU}/${XU}`, {
            headers: {
              "X-Requested-With": "XMLHtttpRequest",
              Accept: "application/json",
              "Content-Type": "application/json"
            },
            body: JSON.stringify(zU)
          })).data;
          if (QU.error) throw new EU(QU.error, QU.code);
          return "reconnect" === UU && (QU.reconnectionToken = zU.reconnectionToken), yield this.consumeSeatReservation(QU, cU, yU)
        }))
      }
      createRoom(UU, XU) {
        return new AU.EN(UU, XU)
      }
      buildEndpoint(UU) {
        let XU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          zU = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "ws",
          cU = this.settings.searchParams || "";
        this.http.authToken && (XU._authToken = this.http.authToken);
        for (const AU in XU) XU.hasOwnProperty(AU) && (cU += (cU ? "&" : "") + `${AU}=${XU[AU]}`);
        "h3" === zU && (zU = "http");
        let yU = this.settings.secure ? `${zU}s://` : `${zU}://`;
        UU.publicAddress ? yU += `${UU.publicAddress}` : yU += `${this.settings.hostname}${this.getEndpointPort()}${this.settings.pathname}`;
        const QU = `${yU}/${UU.processId}/${UU.roomId}?${cU}`;
        return this.urlBuilder ? this.urlBuilder(new URL(QU)) : QU
      }
      getHttpEndpoint() {
        let UU = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
        const XU = UU.startsWith("/") ? UU : `/${UU}`;
        let zU = `${this.settings.secure?"https":"http"}://${this.settings.hostname}${this.getEndpointPort()}${this.settings.pathname}${XU}`;
        return this.settings.searchParams && (zU += `?${this.settings.searchParams}`), this.urlBuilder ? this.urlBuilder(new URL(zU)) : zU
      }
      getEndpointPort() {
        return 80 !== this.settings.port && 443 !== this.settings.port ? `:${this.settings.port}` : ""
      }
    }
    NU.VERSION = "0.16.22", XU.Client = NU, XU.MatchMakeError = EU
  },
  9682: (UU, XU, zU) => {
    var cU = zU(9685),
      yU = zU(9703);
    XU.Connection = class {
      constructor(UU) {
        if (this.events = {}, "h3" === UU) this.transport = new cU.H3TransportTransport(this.events);
        else this.transport = new yU.WebSocketTransport(this.events)
      }
      connect(UU, XU) {
        this.transport.connect.call(this.transport, UU, XU)
      }
      send(UU) {
        this.transport.send(UU)
      }
      sendUnreliable(UU) {
        this.transport.sendUnreliable(UU)
      }
      close(UU, XU) {
        this.transport.close(UU, XU)
      }
      get isOpen() {
        return this.transport.isOpen
      }
    }
  },
  9752: (UU, XU, zU) => {
    var cU = zU(9667);

    function yU(UU) {
      var XU = Object.create(null);
      return UU && Object.keys(UU).forEach((function(zU) {
        if ("default" !== zU) {
          var cU = Object.getOwnPropertyDescriptor(UU, zU);
          Object.defineProperty(XU, zU, cU.get ? cU : {
            enumerable: !0,
            get: function() {
              return UU[zU]
            }
          })
        }
      })), XU.default = UU, Object.freeze(XU)
    }
    var QU = yU(zU(9755));
    XU.HTTP = class {
      constructor(UU) {
        let XU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        this.client = UU, this.headers = XU
      }
      get(UU) {
        let XU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        return this.request("get", UU, XU)
      }
      post(UU) {
        let XU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        return this.request("post", UU, XU)
      }
      del(UU) {
        let XU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        return this.request("del", UU, XU)
      }
      put(UU) {
        let XU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        return this.request("put", UU, XU)
      }
      request(UU, XU) {
        let zU = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        return QU[UU](this.client.getHttpEndpoint(XU), this.getOptions(zU)).catch((UU => {
          var XU;
          if (UU.aborted) throw new cU.AbortError("Request aborted");
          const zU = UU.statusCode,
            yU = (null === (XU = UU.data) || void 0 === XU ? void 0 : XU.error) || UU.statusMessage || UU.message;
          if (!zU && !yU) throw UU;
          throw new cU.ServerError(zU, yU)
        }))
      }
      getOptions(UU) {
        return UU.headers = Object.assign({}, this.headers, UU.headers), this.authToken && (UU.headers.Authorization = `Bearer ${this.authToken}`), "undefined" !== typeof cc && cc.sys && cc.sys.isNative || (UU.withCredentials = !0), UU
      }
    }
  },
  9712: (UU, XU) => {
    var zU, cU;
    XU.Protocol = void 0, (zU = XU.Protocol || (XU.Protocol = {}))[zU.HANDSHAKE = 9] = "HANDSHAKE", zU[zU.JOIN_ROOM = 10] = "JOIN_ROOM", zU[zU.ERROR = 11] = "ERROR", zU[zU.LEAVE_ROOM = 12] = "LEAVE_ROOM", zU[zU.ROOM_DATA = 13] = "ROOM_DATA", zU[zU.ROOM_STATE = 14] = "ROOM_STATE", zU[zU.ROOM_STATE_PATCH = 15] = "ROOM_STATE_PATCH", zU[zU.ROOM_DATA_SCHEMA = 16] = "ROOM_DATA_SCHEMA", zU[zU.ROOM_DATA_BYTES = 17] = "ROOM_DATA_BYTES", XU.ErrorCode = void 0, (cU = XU.ErrorCode || (XU.ErrorCode = {}))[cU.MATCHMAKE_NO_HANDLER = 4210] = "MATCHMAKE_NO_HANDLER", cU[cU.MATCHMAKE_INVALID_CRITERIA = 4211] = "MATCHMAKE_INVALID_CRITERIA", cU[cU.MATCHMAKE_INVALID_ROOM_ID = 4212] = "MATCHMAKE_INVALID_ROOM_ID", cU[cU.MATCHMAKE_UNHANDLED = 4213] = "MATCHMAKE_UNHANDLED", cU[cU.MATCHMAKE_EXPIRED = 4214] = "MATCHMAKE_EXPIRED", cU[cU.AUTH_FAILED = 4215] = "AUTH_FAILED", cU[cU.APPLICATION_ERROR = 4216] = "APPLICATION_ERROR"
  },
  9674: (UU, XU, zU) => {
    var cU = zU(9682),
      yU = zU(9712),
      QU = zU(9719),
      AU = zU(9726),
      FU = zU(9729),
      oU = zU(9694),
      DU = zU(9736),
      EU = zU(9667),
      YU = zU(9744);
    class NU {
      constructor(UU, XU) {
        this.onStateChange = FU.createSignal(), this.onError = FU.createSignal(), this.vG = FU.createSignal(), this.onJoin = FU.createSignal(), this.hasJoined = !1, this.onMessageHandlers = AU.createNanoEvents(), this.roomId = null, this.name = UU, this.packr = new YU.Packr, this.packr.encode(void 0), XU && (this.Lk = new(QU.getSerializer("schema")), this.rootSchema = XU, this.Lk.state = new XU), this.onError(((UU, XU) => {
          var zU;
          return null === (zU = console.warn) || void 0 === zU ? void 0 : zU.call(console, `colyseus.js - onError => (${UU}) ${XU}`)
        })), this.vG((() => this.Wk()))
      }
      connect(UU, XU) {
        let zU = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : this,
          yU = arguments.length > 3 ? arguments[3] : void 0,
          QU = arguments.length > 4 ? arguments[4] : void 0;
        const AU = new cU.Connection(yU.protocol);
        if (zU.connection = AU, AU.events.onmessage = NU.prototype.onMessageCallback.bind(zU), AU.events.onclose = function(UU) {
            var cU;
            if (!zU.hasJoined) return null === (cU = console.warn) || void 0 === cU || cU.call(console, `Room connection was closed unexpectedly (${UU.code}): ${UU.reason}`), void zU.onError.invoke(UU.code, UU.reason);
            UU.code === EU.CloseCode.DEVMODE_RESTART && XU ? XU() : (zU.vG.invoke(UU.code, UU.reason), zU.destroy())
          }, AU.events.onerror = function(UU) {
            var XU;
            null === (XU = console.warn) || void 0 === XU || XU.call(console, `Room, onError (${UU.code}): ${UU.reason}`), zU.onError.invoke(UU.code, UU.reason)
          }, "h3" === yU.protocol) {
          const XU = new URL(UU);
          AU.connect(XU.origin, yU)
        } else AU.connect(UU, QU)
      }
      leave() {
        let UU = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
        return new Promise((XU => {
          this.vG((UU => XU(UU))), this.connection ? UU ? (this.packr.buffer[0] = yU.Protocol.LEAVE_ROOM, this.connection.send(this.packr.buffer.subarray(0, 1))) : this.connection.close() : this.vG.invoke(EU.CloseCode.CONSENTED)
        }))
      }
      iG(UU, XU) {
        return this.onMessageHandlers.on(this.getMessageHandlerKey(UU), XU)
      }
      send(UU, XU) {
        const zU = {
          offset: 1
        };
        this.packr.buffer[0] = yU.Protocol.ROOM_DATA, "string" === typeof UU ? oU.encode.string(this.packr.buffer, UU, zU) : oU.encode.number(this.packr.buffer, UU, zU), this.packr.position = 0;
        const cU = void 0 !== XU ? this.packr.pack(XU, 2048 + zU.offset) : this.packr.buffer.subarray(0, zU.offset);
        this.connection.send(cU)
      }
      sendUnreliable(UU, XU) {
        const zU = {
          offset: 1
        };
        this.packr.buffer[0] = yU.Protocol.ROOM_DATA, "string" === typeof UU ? oU.encode.string(this.packr.buffer, UU, zU) : oU.encode.number(this.packr.buffer, UU, zU), this.packr.position = 0;
        const cU = void 0 !== XU ? this.packr.pack(XU, 2048 + zU.offset) : this.packr.buffer.subarray(0, zU.offset);
        this.connection.sendUnreliable(cU)
      }
      rC(UU, XU) {
        const zU = {
          offset: 1
        };
        if (this.packr.buffer[0] = yU.Protocol.ROOM_DATA_BYTES, "string" === typeof UU ? oU.encode.string(this.packr.buffer, UU, zU) : oU.encode.number(this.packr.buffer, UU, zU), XU.byteLength + zU.offset > this.packr.buffer.byteLength) {
          const UU = new Uint8Array(zU.offset + XU.byteLength);
          UU.set(this.packr.buffer), this.packr.useBuffer(UU)
        }
        this.packr.buffer.set(XU, zU.offset), this.connection.send(this.packr.buffer.subarray(0, zU.offset + XU.byteLength))
      }
      get state() {
        return this.Lk.getState()
      }
      Wk() {
        this.onJoin.clear(), this.onStateChange.clear(), this.onError.clear(), this.vG.clear(), this.onMessageHandlers.events = {}, this.Lk instanceof DU.Aq && (this.Lk.DY.root.callbacks = {})
      }
      onMessageCallback(UU) {
        const XU = new Uint8Array(UU.data),
          zU = {
            offset: 1
          },
          cU = XU[0];
        if (cU === yU.Protocol.JOIN_ROOM) {
          const UU = oU.decode.utf8Read(XU, zU, XU[zU.offset++]);
          if (this.serializerId = oU.decode.utf8Read(XU, zU, XU[zU.offset++]), !this.Lk) {
            const UU = QU.getSerializer(this.serializerId);
            this.Lk = new UU
          }
          XU.byteLength > zU.offset && this.Lk.handshake && this.Lk.handshake(XU, zU), this.reconnectionToken = `${this.roomId}:${UU}`, this.hasJoined = !0, this.onJoin.invoke(), this.packr.buffer[0] = yU.Protocol.JOIN_ROOM, this.connection.send(this.packr.buffer.subarray(0, 1))
        } else if (cU === yU.Protocol.ERROR) {
          const UU = oU.decode.number(XU, zU),
            cU = oU.decode.string(XU, zU);
          this.onError.invoke(UU, cU)
        } else if (cU === yU.Protocol.LEAVE_ROOM) this.leave();
        else if (cU === yU.Protocol.ROOM_STATE) this.Lk.setState(XU, zU), this.onStateChange.invoke(this.Lk.getState());
        else if (cU === yU.Protocol.ROOM_STATE_PATCH) this.Lk.patch(XU, zU), this.onStateChange.invoke(this.Lk.getState());
        else if (cU === yU.Protocol.ROOM_DATA) {
          const UU = oU.decode.stringCheck(XU, zU) ? oU.decode.string(XU, zU) : oU.decode.number(XU, zU),
            cU = XU.byteLength > zU.offset ? YU.unpack(XU, {
              start: zU.offset
            }) : void 0;
          this.dispatchMessage(UU, cU)
        } else if (cU === yU.Protocol.ROOM_DATA_BYTES) {
          const UU = oU.decode.stringCheck(XU, zU) ? oU.decode.string(XU, zU) : oU.decode.number(XU, zU);
          this.dispatchMessage(UU, XU.subarray(zU.offset))
        }
      }
      dispatchMessage(UU, XU) {
        var zU;
        const cU = this.getMessageHandlerKey(UU);
        this.onMessageHandlers.events[cU] ? this.onMessageHandlers.emit(cU, XU) : this.onMessageHandlers.events["*"] ? this.onMessageHandlers.emit("*", UU, XU) : null === (zU = console.warn) || void 0 === zU || zU.call(console, `colyseus.js: onMessage() not registered for type '${UU}'.`)
      }
      destroy() {
        this.Lk && this.Lk.teardown()
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
    XU.EN = NU
  },
  9764: (UU, XU, zU) => {
    var cU = zU(9661);
    let yU;

    function QU() {
      if (!yU) try {
        yU = "undefined" !== typeof cc && cc.sys && cc.sys.localStorage ? cc.sys.localStorage : window.localStorage
      } catch (UU) {}
      return yU || "undefined" === typeof globalThis.indexedDB || (yU = new AU), yU || (yU = {
        cache: {},
        setItem: function(UU, XU) {
          this.cache[UU] = XU
        },
        getItem: function(UU) {
          this.cache[UU]
        },
        removeItem: function(UU) {
          delete this.cache[UU]
        }
      }), yU
    }
    class AU {
      constructor() {
        this.dbPromise = new Promise((UU => {
          const XU = indexedDB.open("_colyseus_storage", 1);
          XU.onupgradeneeded = () => XU.result.createObjectStore("store"), XU.onsuccess = () => UU(XU.result)
        }))
      }
      tx(UU, XU) {
        return cU.__awaiter(this, void 0, void 0, (function*() {
          const zU = (yield this.dbPromise).transaction("store", UU).objectStore("store");
          return XU(zU)
        }))
      }
      setItem(UU, XU) {
        return this.tx("readwrite", (zU => zU.put(XU, UU))).then()
      }
      getItem(UU) {
        return cU.__awaiter(this, void 0, void 0, (function*() {
          const XU = yield this.tx("readonly", (XU => XU.get(UU)));
          return new Promise((UU => {
            XU.onsuccess = () => UU(XU.result)
          }))
        }))
      }
      removeItem(UU) {
        return this.tx("readwrite", (XU => XU.delete(UU))).then()
      }
    }
    XU.getItem = function(UU, XU) {
      const zU = QU().getItem(UU);
      "undefined" !== typeof Promise && zU instanceof Promise ? zU.then((UU => XU(UU))) : XU(zU)
    }, XU.removeItem = function(UU) {
      QU().removeItem(UU)
    }, XU.setItem = function(UU, XU) {
      QU().setItem(UU, XU)
    }
  },
  9726: (UU, XU) => {
    XU.createNanoEvents = () => ({
      emit(UU) {
        let XU = this.events[UU] || [];
        for (var zU = arguments.length, cU = new Array(zU > 1 ? zU - 1 : 0), yU = 1; yU < zU; yU++) cU[yU - 1] = arguments[yU];
        for (let QU = 0, AU = XU.length; QU < AU; QU++) XU[QU](...cU)
      },
      events: {},
      on(UU, XU) {
        var zU;
        return (null === (zU = this.events[UU]) || void 0 === zU ? void 0 : zU.push(XU)) || (this.events[UU] = [XU]), () => {
          var zU;
          this.events[UU] = null === (zU = this.events[UU]) || void 0 === zU ? void 0 : zU.filter((UU => XU !== UU))
        }
      }
    })
  },
  9729: (UU, XU) => {
    class zU {
      constructor() {
        this.handlers = []
      }
      register(UU) {
        return this.handlers.push(UU), this
      }
      invoke() {
        for (var UU = arguments.length, XU = new Array(UU), zU = 0; zU < UU; zU++) XU[zU] = arguments[zU];
        this.handlers.forEach((UU => UU.apply(this, XU)))
      }
      invokeAsync() {
        for (var UU = arguments.length, XU = new Array(UU), zU = 0; zU < UU; zU++) XU[zU] = arguments[zU];
        return Promise.all(this.handlers.map((UU => UU.apply(this, XU))))
      }
      remove(UU) {
        const XU = this.handlers.indexOf(UU);
        this.handlers[XU] = this.handlers[this.handlers.length - 1], this.handlers.pop()
      }
      clear() {
        this.handlers = []
      }
    }
    XU.EventEmitter = zU, XU.createSignal = function() {
      const UU = new zU;

      function XU(XU) {
        return UU.register(XU, null === this)
      }
      return XU.once = XU => {
        const zU = function() {
          for (var cU = arguments.length, yU = new Array(cU), QU = 0; QU < cU; QU++) yU[QU] = arguments[QU];
          XU.apply(this, yU), UU.remove(zU)
        };
        UU.register(zU)
      }, XU.remove = XU => UU.remove(XU), XU.invoke = function() {
        return UU.invoke(...arguments)
      }, XU.invokeAsync = function() {
        return UU.invokeAsync(...arguments)
      }, XU.clear = () => UU.clear(), XU
    }
  },
  9667: (UU, XU) => {
    var zU;
    XU.CloseCode = void 0, (zU = XU.CloseCode || (XU.CloseCode = {}))[zU.CONSENTED = 4e3] = "CONSENTED", zU[zU.DEVMODE_RESTART = 4010] = "DEVMODE_RESTART";
    class cU extends Error {
      constructor(UU, XU) {
        super(XU), this.name = "ServerError", this.code = UU
      }
    }
    class yU extends Error {
      constructor(UU) {
        super(UU), this.name = "AbortError"
      }
    }
    XU.AbortError = yU, XU.ServerError = cU
  },
  9648: (UU, XU, zU) => {
    zU(9650);
    var cU = zU(9657),
      yU = zU(9712),
      QU = zU(9674),
      AU = zU(9762),
      FU = zU(9667),
      oU = zU(9736),
      DU = zU(9769),
      EU = zU(9719);
    EU.registerSerializer("schema", oU.Aq), EU.registerSerializer("none", DU.NoneSerializer), XU.Client = cU.Client, XU.MatchMakeError = cU.MatchMakeError, Object.defineProperty(XU, "ErrorCode", {
      enumerable: !0,
      get: function() {
        return yU.ErrorCode
      }
    }), Object.defineProperty(XU, "Protocol", {
      enumerable: !0,
      get: function() {
        return yU.Protocol
      }
    }), XU.EN = QU.EN, XU.Auth = AU.Auth, XU.ServerError = FU.ServerError, XU.Aq = oU.Aq, XU.getStateCallbacks = oU.getStateCallbacks, XU.registerSerializer = EU.registerSerializer
  },
  9650: () => {
    ArrayBuffer.isView || (ArrayBuffer.isView = UU => null !== UU && "object" === typeof UU && UU.buffer instanceof ArrayBuffer), "undefined" === typeof globalThis && "undefined" !== typeof window && (window.globalThis = window), "undefined" === typeof FormData && (globalThis.FormData = class {})
  },
  9769: (UU, XU) => {
    XU.NoneSerializer = class {
      setState(UU) {}
      getState() {
        return null
      }
      patch(UU) {}
      teardown() {}
      handshake(UU) {}
    }
  },
  9736: (UU, XU, zU) => {
    var cU = zU(9694);
    XU.Aq = class {
      setState(UU, XU) {
        this.DY.decode(UU, XU)
      }
      getState() {
        return this.state
      }
      patch(UU, XU) {
        return this.DY.decode(UU, XU)
      }
      teardown() {
        this.DY.root.clearRefs()
      }
      handshake(UU, XU) {
        this.state ? (cU.Reflection.decode(UU, XU), this.DY = new cU.Decoder(this.state)) : (this.DY = cU.Reflection.decode(UU, XU), this.state = this.DY.state)
      }
    }, XU.getStateCallbacks = function(UU) {
      try {
        return cU.getDecoderStateCallbacks(UU.Lk.DY)
      } catch (XU) {
        return
      }
    }
  },
  9719: (UU, XU) => {
    const zU = {};
    XU.getSerializer = function(UU) {
      const XU = zU[UU];
      if (!XU) throw new Error("missing serializer: " + UU);
      return XU
    }, XU.registerSerializer = function(UU, XU) {
      zU[UU] = XU
    }
  },
  9685: (UU, XU, zU) => {
    var cU = zU(9661),
      yU = zU(9694);
    XU.H3TransportTransport = class {
      constructor(UU) {
        this.events = UU, this.isOpen = !1, this.lengthPrefixBuffer = new Uint8Array(9)
      }
      connect(UU) {
        let XU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        const zU = XU.fingerprint && {
          serverCertificateHashes: [{
            algorithm: "sha-256",
            value: new Uint8Array(XU.fingerprint).buffer
          }]
        } || void 0;
        this.wt = new WebTransport(UU, zU), this.wt.ready.then((UU => {
          console.log("WebTransport ready!", UU), this.isOpen = !0, this.unreliableReader = this.wt.datagrams.readable.getReader(), this.unreliableWriter = this.wt.datagrams.writable.getWriter();
          this.wt.incomingBidirectionalStreams.getReader().read().then((UU => {
            this.reader = UU.value.readable.getReader(), this.writer = UU.value.writable.getWriter(), this.sendSeatReservation(XU.room.roomId, XU.sessionId, XU.reconnectionToken), this.readIncomingData(), this.readIncomingUnreliableData()
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
        const XU = yU.encode.number(this.lengthPrefixBuffer, UU.length, {
            offset: 0
          }),
          zU = new Uint8Array(XU + UU.length);
        zU.set(this.lengthPrefixBuffer.subarray(0, XU), 0), zU.set(UU, XU), this.writer.write(zU)
      }
      sendUnreliable(UU) {
        const XU = yU.encode.number(this.lengthPrefixBuffer, UU.length, {
            offset: 0
          }),
          zU = new Uint8Array(XU + UU.length);
        zU.set(this.lengthPrefixBuffer.subarray(0, XU), 0), zU.set(UU, XU), this.unreliableWriter.write(zU)
      }
      close(UU, XU) {
        try {
          this.wt.close({
            closeCode: UU,
            reason: XU
          })
        } catch (zU) {
          console.error(zU)
        }
      }
      readIncomingData() {
        return cU.__awaiter(this, void 0, void 0, (function*() {
          let UU;
          for (; this.isOpen;) {
            try {
              UU = yield this.reader.read();
              const XU = UU.value,
                zU = {
                  offset: 0
                };
              do {
                const UU = yU.decode.number(XU, zU);
                this.events.onmessage({
                  data: XU.subarray(zU.offset, zU.offset + UU)
                }), zU.offset += UU
              } while (zU.offset < XU.length)
            } catch (XU) {
              -1 === XU.message.indexOf("session is closed") && console.error("H3Transport: failed to read incoming data", XU);
              break
            }
            if (UU.done) break
          }
        }))
      }
      readIncomingUnreliableData() {
        return cU.__awaiter(this, void 0, void 0, (function*() {
          let UU;
          for (; this.isOpen;) {
            try {
              UU = yield this.unreliableReader.read();
              const XU = UU.value,
                zU = {
                  offset: 0
                };
              do {
                const UU = yU.decode.number(XU, zU);
                this.events.onmessage({
                  data: XU.subarray(zU.offset, zU.offset + UU)
                }), zU.offset += UU
              } while (zU.offset < XU.length)
            } catch (XU) {
              -1 === XU.message.indexOf("session is closed") && console.error("H3Transport: failed to read incoming data", XU);
              break
            }
            if (UU.done) break
          }
        }))
      }
      sendSeatReservation(UU, XU, zU) {
        const cU = {
            offset: 0
          },
          QU = [];
        yU.encode.string(QU, UU, cU), yU.encode.string(QU, XU, cU), zU && yU.encode.string(QU, zU, cU), this.writer.write(new Uint8Array(QU).buffer)
      }
      _close() {
        this.isOpen = !1
      }
    }
  },
  9703: (UU, XU, zU) => {
    var cU = zU(9709);
    const yU = globalThis.WebSocket || cU;
    XU.WebSocketTransport = class {
      constructor(UU) {
        this.events = UU
      }
      send(UU) {
        this.ws.send(UU)
      }
      sendUnreliable(UU) {
        console.warn("colyseus.js: The WebSocket transport does not support unreliable messages")
      }
      connect(UU, XU) {
        try {
          this.ws = new yU(UU, {
            headers: XU,
            protocols: this.protocols
          })
        } catch (zU) {
          this.ws = new yU(UU, this.protocols)
        }
        this.ws.binaryType = "arraybuffer", this.ws.onopen = this.events.onopen, this.ws.onmessage = this.events.onmessage, this.ws.onclose = this.events.onclose, this.ws.onerror = this.events.onerror
      }
      close(UU, XU) {
        this.ws.close(UU, XU)
      }
      get isOpen() {
        return this.ws.readyState === yU.OPEN
      }
    }
  },
  9709: UU => {
    UU.exports = function() {
      throw new Error("ws does not work in the browser. Browser clients must use the native WebSocket object")
    }
  },
  9755: (UU, XU, zU) => {
    function cU(UU, XU) {
      XU.headers = UU.headers || {}, XU.statusMessage = UU.statusText, XU.statusCode = UU.status, XU.data = UU.response
    }

    function yU(UU, XU, zU) {
      return new Promise((function(yU, QU) {
        zU = zU || {};
        var AU, FU, oU, DU = new XMLHttpRequest,
          EU = zU.body,
          YU = zU.headers || {};
        for (AU in zU.timeout && (DU.timeout = zU.timeout), DU.ontimeout = DU.onerror = function(UU) {
            UU.timeout = "timeout" == UU.type, QU(UU)
          }, DU.onabort = function(UU) {
            UU.aborted = !0, QU(UU)
          }, DU.open(UU, XU.href || XU), DU.onload = function() {
            for (oU = DU.getAllResponseHeaders().trim().split(/[\r\n]+/), cU(DU, DU); FU = oU.shift();) FU = FU.split(": "), DU.headers[FU.shift().toLowerCase()] = FU.join(": ");
            if ((FU = DU.headers["content-type"]) && ~FU.indexOf("application/json")) try {
              DU.data = JSON.parse(DU.data, zU.reviver)
            } catch (UU) {
              return cU(DU, UU), QU(UU)
            }(DU.status >= 400 ? QU : yU)(DU)
          }, typeof FormData < "u" && EU instanceof FormData || EU && "object" == typeof EU && (YU["content-type"] = "application/json", EU = JSON.stringify(EU)), DU.withCredentials = !!zU.withCredentials, YU) DU.setRequestHeader(AU, YU[AU]);
        DU.send(EU), zU.signal && zU.signal.addEventListener("abort", (function() {
          DU.abort()
        }))
      }))
    }
    zU.r(XU), zU.d(XU, {
      del: () => oU,
      get: () => QU,
      patch: () => FU,
      post: () => AU,
      put: () => DU,
      send: () => yU
    });
    var QU = yU.bind(yU, "GET"),
      AU = yU.bind(yU, "POST"),
      FU = yU.bind(yU, "PATCH"),
      oU = yU.bind(yU, "DELETE"),
      DU = yU.bind(yU, "PUT")
  },
  9744: (UU, XU, zU) => {
    var cU, yU, QU;
    zU.r(XU), zU.d(XU, {
      ALWAYS: () => xX,
      C1: () => ZU,
      DECIMAL_FIT: () => jX,
      DECIMAL_ROUND: () => JX,
      Decoder: () => oX,
      Encoder: () => mX,
      FLOAT32_OPTIONS: () => IX,
      NEVER: () => lX,
      Packr: () => rX,
      RESERVE_START_SPACE: () => TX,
      RESET_BUFFER_MODE: () => bX,
      REUSE_BUFFER_MODE: () => KX,
      Unpackr: () => eU,
      addExtension: () => MX,
      clearSource: () => AX,
      decode: () => NX,
      decodeIter: () => hX,
      encode: () => nX,
      encodeIter: () => Uz,
      isNativeAccelerationEnabled: () => vU,
      mapsAsObjects: () => zz,
      pack: () => sX,
      roundFloat32: () => GX,
      unpack: () => EX,
      unpackMultiple: () => YX,
      useRecords: () => Xz
    });
    try {
      cU = new TextDecoder
    } catch (cz) {}
    var AU = 0;
    const FU = [];
    var oU, DU, EU, YU, NU, IU = FU,
      pU = 0,
      aU = {},
      tU = 0,
      gU = 0,
      kU = [],
      GU = {
        useRecords: !1,
        mapsAsObjects: !0
      };
    class BU {}
    const ZU = new BU;
    ZU.name = "MessagePack 0xC1";
    var RU, PU, WU, dU = !1,
      LU = 2;
    try {
      new Function("")
    } catch (cz) {
      LU = 1 / 0
    }
    class eU {
      constructor(UU) {
        UU && (!1 === UU.useRecords && void 0 === UU.mapsAsObjects && (UU.mapsAsObjects = !0), UU.sequential && !1 !== UU.trusted && (UU.trusted = !0, UU.structures || 0 == UU.useRecords || (UU.structures = [], UU.maxSharedStructures || (UU.maxSharedStructures = 0))), UU.structures ? UU.structures.sharedLength = UU.structures.length : UU.getStructures && ((UU.structures = []).uninitialized = !0, UU.structures.sharedLength = 0), UU.int64AsNumber && (UU.int64AsType = "number")), Object.assign(this, UU)
      }
      unpack(UU, XU) {
        if (yU) return QX((() => (AX(), this ? this.unpack(UU, XU) : eU.prototype.unpack.call(GU, UU, XU))));
        UU.buffer || UU.constructor !== ArrayBuffer || (UU = "undefined" !== typeof Buffer ? Buffer.from(UU) : new Uint8Array(UU)), "object" === typeof XU ? (QU = XU.end || UU.length, AU = XU.start || 0) : (AU = 0, QU = XU > -1 ? XU : UU.length), pU = 0, gU = 0, DU = null, IU = FU, EU = null, yU = UU;
        try {
          NU = UU.dataView || (UU.dataView = new DataView(UU.buffer, UU.byteOffset, UU.byteLength))
        } catch (cz) {
          if (yU = null, UU instanceof Uint8Array) throw cz;
          throw new Error("Source must be a Uint8Array or Buffer but was a " + (UU && "object" == typeof UU ? UU.constructor.name : typeof UU))
        }
        if (this instanceof eU) {
          if (aU = this, this.structures) return oU = this.structures, CU(XU);
          (!oU || oU.length > 0) && (oU = [])
        } else aU = GU, (!oU || oU.length > 0) && (oU = []);
        return CU(XU)
      }
      unpackMultiple(UU, XU) {
        let zU, cU = 0;
        try {
          dU = !0;
          let yU = UU.length,
            QU = this ? this.unpack(UU, yU) : DX.unpack(UU, yU);
          if (!XU) {
            for (zU = [QU]; AU < yU;) cU = AU, zU.push(CU());
            return zU
          }
          if (!1 === XU(QU, cU, AU)) return;
          for (; AU < yU;)
            if (cU = AU, !1 === XU(CU(), cU, AU)) return
        } catch (cz) {
          throw cz.lastPosition = cU, cz.values = zU, cz
        } finally {
          dU = !1, AX()
        }
      }
      _mergeStructures(UU, XU) {
        PU && (UU = PU.call(this, UU)), UU = UU || [], Object.isFrozen(UU) && (UU = UU.map((UU => UU.slice(0))));
        for (let zU = 0, cU = UU.length; zU < cU; zU++) {
          let XU = UU[zU];
          XU && (XU.isShared = !0, zU >= 32 && (XU.highByte = zU - 32 >> 5))
        }
        UU.sharedLength = UU.length;
        for (let zU in XU || [])
          if (zU >= 0) {
            let cU = UU[zU],
              yU = XU[zU];
            yU && (cU && ((UU.restoreStructures || (UU.restoreStructures = []))[zU] = cU), UU[zU] = yU)
          } return this.structures = UU
      }
      decode(UU, XU) {
        return this.unpack(UU, XU)
      }
    }

    function CU(UU) {
      try {
        if (!aU.trusted && !dU) {
          let UU = oU.sharedLength || 0;
          UU < oU.length && (oU.length = UU)
        }
        let XU;
        if (aU.randomAccessStructure && yU[AU] < 64 && yU[AU] >= 32 && RU ? (XU = RU(yU, AU, QU, aU), yU = null, UU && UU.lazy || !XU || (XU = XU.toJSON()), AU = QU) : XU = qU(), EU && (AU = EU.postBundlePosition, EU = null), dU && (oU.restoreStructures = null), AU == QU) oU && oU.restoreStructures && wU(), oU = null, yU = null, YU && (YU = null);
        else {
          if (AU > QU) throw new Error("Unexpected end of MessagePack data");
          if (!dU) {
            let UU;
            try {
              UU = JSON.stringify(XU, ((UU, XU) => "bigint" === typeof XU ? `${XU}n` : XU)).slice(0, 100)
            } catch (cz) {
              UU = "(JSON view not available " + cz + ")"
            }
            throw new Error("Data read, but end of buffer not reached " + UU)
          }
        }
        return XU
      } catch (cz) {
        throw oU && oU.restoreStructures && wU(), AX(), (cz instanceof RangeError || cz.message.startsWith("Unexpected end of buffer") || AU > QU) && (cz.incomplete = !0), cz
      }
    }

    function wU() {
      for (let UU in oU.restoreStructures) oU[UU] = oU.restoreStructures[UU];
      oU.restoreStructures = null
    }

    function qU() {
      let UU = yU[AU++];
      if (UU < 160) {
        if (UU < 128) {
          if (UU < 64) return UU;
          {
            let XU = oU[63 & UU] || aU.getStructures && uU()[63 & UU];
            return XU ? (XU.read || (XU.read = SU(XU, 63 & UU)), XU.read()) : UU
          }
        }
        if (UU < 144) {
          if (UU -= 128, aU.mapsAsObjects) {
            let XU = {};
            for (let zU = 0; zU < UU; zU++) {
              let UU = TU();
              "__proto__" === UU && (UU = "__proto_"), XU[UU] = qU()
            }
            return XU
          } {
            let XU = new Map;
            for (let zU = 0; zU < UU; zU++) XU.set(qU(), qU());
            return XU
          }
        } {
          UU -= 144;
          let XU = new Array(UU);
          for (let zU = 0; zU < UU; zU++) XU[zU] = qU();
          return aU.freezeData ? Object.freeze(XU) : XU
        }
      }
      if (UU < 192) {
        let XU = UU - 160;
        if (gU >= AU) return DU.slice(AU - tU, (AU += XU) - tU);
        if (0 == gU && QU < 140) {
          let UU = XU < 16 ? xU(XU) : lU(XU);
          if (null != UU) return UU
        }
        return fU(XU)
      } {
        let XU;
        switch (UU) {
          case 192:
            return null;
          case 193:
            return EU ? (XU = qU(), XU > 0 ? EU[1].slice(EU.position1, EU.position1 += XU) : EU[0].slice(EU.position0, EU.position0 -= XU)) : ZU;
          case 194:
            return !1;
          case 195:
            return !0;
          case 196:
            if (XU = yU[AU++], void 0 === XU) throw new Error("Unexpected end of buffer");
            return jU(XU);
          case 197:
            return XU = NU.getUint16(AU), AU += 2, jU(XU);
          case 198:
            return XU = NU.getUint32(AU), AU += 4, jU(XU);
          case 199:
            return KU(yU[AU++]);
          case 200:
            return XU = NU.getUint16(AU), AU += 2, KU(XU);
          case 201:
            return XU = NU.getUint32(AU), AU += 4, KU(XU);
          case 202:
            if (XU = NU.getFloat32(AU), aU.useFloat32 > 2) {
              let UU = FX[(127 & yU[AU]) << 1 | yU[AU + 1] >> 7];
              return AU += 4, (UU * XU + (XU > 0 ? .5 : -.5) | 0) / UU
            }
            return AU += 4, XU;
          case 203:
            return XU = NU.getFloat64(AU), AU += 8, XU;
          case 204:
            return yU[AU++];
          case 205:
            return XU = NU.getUint16(AU), AU += 2, XU;
          case 206:
            return XU = NU.getUint32(AU), AU += 4, XU;
          case 207:
            return "number" === aU.int64AsType ? (XU = 4294967296 * NU.getUint32(AU), XU += NU.getUint32(AU + 4)) : "string" === aU.int64AsType ? XU = NU.getBigUint64(AU).toString() : "auto" === aU.int64AsType ? (XU = NU.getBigUint64(AU), XU <= BigInt(2) << BigInt(52) && (XU = Number(XU))) : XU = NU.getBigUint64(AU), AU += 8, XU;
          case 208:
            return NU.getInt8(AU++);
          case 209:
            return XU = NU.getInt16(AU), AU += 2, XU;
          case 210:
            return XU = NU.getInt32(AU), AU += 4, XU;
          case 211:
            return "number" === aU.int64AsType ? (XU = 4294967296 * NU.getInt32(AU), XU += NU.getUint32(AU + 4)) : "string" === aU.int64AsType ? XU = NU.getBigInt64(AU).toString() : "auto" === aU.int64AsType ? (XU = NU.getBigInt64(AU), XU >= BigInt(-2) << BigInt(52) && XU <= BigInt(2) << BigInt(52) && (XU = Number(XU))) : XU = NU.getBigInt64(AU), AU += 8, XU;
          case 212:
            if (XU = yU[AU++], 114 == XU) return UX(63 & yU[AU++]);
            {
              let UU = kU[XU];
              if (UU) return UU.read ? (AU++, UU.read(qU())) : UU.noBuffer ? (AU++, UU()) : UU(yU.subarray(AU, ++AU));
              throw new Error("Unknown extension " + XU)
            }
          case 213:
            return XU = yU[AU], 114 == XU ? (AU++, UX(63 & yU[AU++], yU[AU++])) : KU(2);
          case 214:
            return KU(4);
          case 215:
            return KU(8);
          case 216:
            return KU(16);
          case 217:
            return XU = yU[AU++], gU >= AU ? DU.slice(AU - tU, (AU += XU) - tU) : iU(XU);
          case 218:
            return XU = NU.getUint16(AU), gU >= (AU += 2) ? DU.slice(AU - tU, (AU += XU) - tU) : HU(XU);
          case 219:
            return XU = NU.getUint32(AU), gU >= (AU += 4) ? DU.slice(AU - tU, (AU += XU) - tU) : MU(XU);
          case 220:
            return XU = NU.getUint16(AU), AU += 2, sU(XU);
          case 221:
            return XU = NU.getUint32(AU), AU += 4, sU(XU);
          case 222:
            return XU = NU.getUint16(AU), AU += 2, nU(XU);
          case 223:
            return XU = NU.getUint32(AU), AU += 4, nU(XU);
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
    const OU = /^[a-zA-Z_$][a-zA-Z\d_$]*$/;

    function SU(UU, XU) {
      function zU() {
        if (zU.count++ > LU) {
          let zU = UU.read = new Function("r", "return function(){return " + (aU.freezeData ? "Object.freeze" : "") + "({" + UU.map((UU => "__proto__" === UU ? "__proto_:r()" : OU.test(UU) ? UU + ":r()" : "[" + JSON.stringify(UU) + "]:r()")).join(",") + "})}")(qU);
          return 0 === UU.highByte && (UU.read = rU(XU, UU.read)), zU()
        }
        let cU = {};
        for (let XU = 0, zU = UU.length; XU < zU; XU++) {
          let zU = UU[XU];
          "__proto__" === zU && (zU = "__proto_"), cU[zU] = qU()
        }
        return aU.freezeData ? Object.freeze(cU) : cU
      }
      return zU.count = 0, 0 === UU.highByte ? rU(XU, zU) : zU
    }
    const rU = (UU, XU) => function() {
      let zU = yU[AU++];
      if (0 === zU) return XU();
      let cU = UU < 32 ? -(UU + (zU << 5)) : UU + (zU << 5),
        QU = oU[cU] || uU()[cU];
      if (!QU) throw new Error("Record id is not defined for " + cU);
      return QU.read || (QU.read = SU(QU, UU)), QU.read()
    };

    function uU() {
      let UU = QX((() => (yU = null, aU.getStructures())));
      return oU = aU._mergeStructures(UU, oU)
    }
    var fU = VU,
      iU = VU,
      HU = VU,
      MU = VU;
    let vU = !1;

    function VU(UU) {
      let XU;
      if (UU < 16 && (XU = xU(UU))) return XU;
      if (UU > 64 && cU) return cU.decode(yU.subarray(AU, AU += UU));
      const zU = AU + UU,
        QU = [];
      for (XU = ""; AU < zU;) {
        const UU = yU[AU++];
        if (0 === (128 & UU)) QU.push(UU);
        else if (192 === (224 & UU)) {
          const XU = 63 & yU[AU++];
          QU.push((31 & UU) << 6 | XU)
        } else if (224 === (240 & UU)) {
          const XU = 63 & yU[AU++],
            zU = 63 & yU[AU++];
          QU.push((31 & UU) << 12 | XU << 6 | zU)
        } else if (240 === (248 & UU)) {
          let XU = (7 & UU) << 18 | (63 & yU[AU++]) << 12 | (63 & yU[AU++]) << 6 | 63 & yU[AU++];
          XU > 65535 && (XU -= 65536, QU.push(XU >>> 10 & 1023 | 55296), XU = 56320 | 1023 & XU), QU.push(XU)
        } else QU.push(UU);
        QU.length >= 4096 && (XU += mU.apply(String, QU), QU.length = 0)
      }
      return QU.length > 0 && (XU += mU.apply(String, QU)), XU
    }

    function sU(UU) {
      let XU = new Array(UU);
      for (let zU = 0; zU < UU; zU++) XU[zU] = qU();
      return aU.freezeData ? Object.freeze(XU) : XU
    }

    function nU(UU) {
      if (aU.mapsAsObjects) {
        let XU = {};
        for (let zU = 0; zU < UU; zU++) {
          let UU = TU();
          "__proto__" === UU && (UU = "__proto_"), XU[UU] = qU()
        }
        return XU
      } {
        let XU = new Map;
        for (let zU = 0; zU < UU; zU++) XU.set(qU(), qU());
        return XU
      }
    }
    var mU = String.fromCharCode;

    function lU(UU) {
      let XU = AU,
        zU = new Array(UU);
      for (let cU = 0; cU < UU; cU++) {
        const UU = yU[AU++];
        if ((128 & UU) > 0) return void(AU = XU);
        zU[cU] = UU
      }
      return mU.apply(String, zU)
    }

    function xU(UU) {
      if (UU < 4) {
        if (UU < 2) {
          if (0 === UU) return "";
          {
            let UU = yU[AU++];
            return (128 & UU) > 1 ? void(AU -= 1) : mU(UU)
          }
        } {
          let XU = yU[AU++],
            zU = yU[AU++];
          if ((128 & XU) > 0 || (128 & zU) > 0) return void(AU -= 2);
          if (UU < 3) return mU(XU, zU);
          let cU = yU[AU++];
          return (128 & cU) > 0 ? void(AU -= 3) : mU(XU, zU, cU)
        }
      } {
        let XU = yU[AU++],
          zU = yU[AU++],
          cU = yU[AU++],
          QU = yU[AU++];
        if ((128 & XU) > 0 || (128 & zU) > 0 || (128 & cU) > 0 || (128 & QU) > 0) return void(AU -= 4);
        if (UU < 6) {
          if (4 === UU) return mU(XU, zU, cU, QU);
          {
            let UU = yU[AU++];
            return (128 & UU) > 0 ? void(AU -= 5) : mU(XU, zU, cU, QU, UU)
          }
        }
        if (UU < 8) {
          let FU = yU[AU++],
            oU = yU[AU++];
          if ((128 & FU) > 0 || (128 & oU) > 0) return void(AU -= 6);
          if (UU < 7) return mU(XU, zU, cU, QU, FU, oU);
          let DU = yU[AU++];
          return (128 & DU) > 0 ? void(AU -= 7) : mU(XU, zU, cU, QU, FU, oU, DU)
        } {
          let FU = yU[AU++],
            oU = yU[AU++],
            DU = yU[AU++],
            EU = yU[AU++];
          if ((128 & FU) > 0 || (128 & oU) > 0 || (128 & DU) > 0 || (128 & EU) > 0) return void(AU -= 8);
          if (UU < 10) {
            if (8 === UU) return mU(XU, zU, cU, QU, FU, oU, DU, EU);
            {
              let UU = yU[AU++];
              return (128 & UU) > 0 ? void(AU -= 9) : mU(XU, zU, cU, QU, FU, oU, DU, EU, UU)
            }
          }
          if (UU < 12) {
            let YU = yU[AU++],
              NU = yU[AU++];
            if ((128 & YU) > 0 || (128 & NU) > 0) return void(AU -= 10);
            if (UU < 11) return mU(XU, zU, cU, QU, FU, oU, DU, EU, YU, NU);
            let IU = yU[AU++];
            return (128 & IU) > 0 ? void(AU -= 11) : mU(XU, zU, cU, QU, FU, oU, DU, EU, YU, NU, IU)
          } {
            let YU = yU[AU++],
              NU = yU[AU++],
              IU = yU[AU++],
              pU = yU[AU++];
            if ((128 & YU) > 0 || (128 & NU) > 0 || (128 & IU) > 0 || (128 & pU) > 0) return void(AU -= 12);
            if (UU < 14) {
              if (12 === UU) return mU(XU, zU, cU, QU, FU, oU, DU, EU, YU, NU, IU, pU);
              {
                let UU = yU[AU++];
                return (128 & UU) > 0 ? void(AU -= 13) : mU(XU, zU, cU, QU, FU, oU, DU, EU, YU, NU, IU, pU, UU)
              }
            } {
              let aU = yU[AU++],
                tU = yU[AU++];
              if ((128 & aU) > 0 || (128 & tU) > 0) return void(AU -= 14);
              if (UU < 15) return mU(XU, zU, cU, QU, FU, oU, DU, EU, YU, NU, IU, pU, aU, tU);
              let gU = yU[AU++];
              return (128 & gU) > 0 ? void(AU -= 15) : mU(XU, zU, cU, QU, FU, oU, DU, EU, YU, NU, IU, pU, aU, tU, gU)
            }
          }
        }
      }
    }

    function JU() {
      let UU, XU = yU[AU++];
      if (XU < 192) UU = XU - 160;
      else switch (XU) {
        case 217:
          UU = yU[AU++];
          break;
        case 218:
          UU = NU.getUint16(AU), AU += 2;
          break;
        case 219:
          UU = NU.getUint32(AU), AU += 4;
          break;
        default:
          throw new Error("Expected string")
      }
      return VU(UU)
    }

    function jU(UU) {
      return aU.copyBuffers ? Uint8Array.prototype.slice.call(yU, AU, AU += UU) : yU.subarray(AU, AU += UU)
    }

    function KU(UU) {
      let XU = yU[AU++];
      if (kU[XU]) {
        let zU;
        return kU[XU](yU.subarray(AU, zU = AU += UU), (UU => {
          AU = UU;
          try {
            return qU()
          } finally {
            AU = zU
          }
        }))
      }
      throw new Error("Unknown extension type " + XU)
    }
    var bU = new Array(4096);

    function TU() {
      let UU = yU[AU++];
      if (!(UU >= 160 && UU < 192)) return AU--, hU(qU());
      if (UU -= 160, gU >= AU) return DU.slice(AU - tU, (AU += UU) - tU);
      if (!(0 == gU && QU < 180)) return fU(UU);
      let XU, zU = 4095 & (UU << 5 ^ (UU > 1 ? NU.getUint16(AU) : UU > 0 ? yU[AU] : 0)),
        cU = bU[zU],
        FU = AU,
        oU = AU + UU - 3,
        EU = 0;
      if (cU && cU.bytes == UU) {
        for (; FU < oU;) {
          if (XU = NU.getUint32(FU), XU != cU[EU++]) {
            FU = 1879048192;
            break
          }
          FU += 4
        }
        for (oU += 3; FU < oU;)
          if (XU = yU[FU++], XU != cU[EU++]) {
            FU = 1879048192;
            break
          } if (FU === oU) return AU = FU, cU.string;
        oU -= 3, FU = AU
      }
      for (cU = [], bU[zU] = cU, cU.bytes = UU; FU < oU;) XU = NU.getUint32(FU), cU.push(XU), FU += 4;
      for (oU += 3; FU < oU;) XU = yU[FU++], cU.push(XU);
      let YU = UU < 16 ? xU(UU) : lU(UU);
      return cU.string = null != YU ? YU : fU(UU)
    }

    function hU(UU) {
      if ("string" === typeof UU) return UU;
      if ("number" === typeof UU || "boolean" === typeof UU || "bigint" === typeof UU) return UU.toString();
      if (null == UU) return UU + "";
      if (aU.allowArraysInMapKeys && Array.isArray(UU) && UU.flat().every((UU => ["string", "number", "boolean", "bigint"].includes(typeof UU)))) return UU.flat().toString();
      throw new Error("Invalid property type for record: " + typeof UU)
    }
    const UX = (UU, XU) => {
      let zU = qU().map(hU),
        cU = UU;
      void 0 !== XU && (UU = UU < 32 ? -((XU << 5) + UU) : (XU << 5) + UU, zU.highByte = XU);
      let yU = oU[UU];
      return yU && (yU.isShared || dU) && ((oU.restoreStructures || (oU.restoreStructures = []))[UU] = yU), oU[UU] = zU, zU.read = SU(zU, cU), zU.read()
    };
    kU[0] = () => {}, kU[0].noBuffer = !0, kU[66] = UU => {
      let XU = UU.length,
        zU = BigInt(128 & UU[0] ? UU[0] - 256 : UU[0]);
      for (let cU = 1; cU < XU; cU++) zU <<= BigInt(8), zU += BigInt(UU[cU]);
      return zU
    };
    let XX = {
      Error: Error,
      TypeError: TypeError,
      ReferenceError: ReferenceError
    };
    kU[101] = () => {
      let UU = qU();
      return (XX[UU[0]] || Error)(UU[1], {
        cause: UU[2]
      })
    }, kU[105] = UU => {
      if (!1 === aU.structuredClone) throw new Error("Structured clone extension is disabled");
      let XU = NU.getUint32(AU - 4);
      YU || (YU = new Map);
      let zU, cU = yU[AU];
      zU = cU >= 144 && cU < 160 || 220 == cU || 221 == cU ? [] : {};
      let QU = {
        target: zU
      };
      YU.set(XU, QU);
      let FU = qU();
      return QU.used ? Object.assign(zU, FU) : (QU.target = FU, FU)
    }, kU[112] = UU => {
      if (!1 === aU.structuredClone) throw new Error("Structured clone extension is disabled");
      let XU = NU.getUint32(AU - 4),
        zU = YU.get(XU);
      return zU.used = !0, zU.target
    }, kU[115] = () => new Set(qU());
    const zX = ["Int8", "Uint8", "Uint8Clamped", "Int16", "Uint16", "Int32", "Uint32", "Float32", "Float64", "BigInt64", "BigUint64"].map((UU => UU + "Array"));
    let cX = "object" === typeof globalThis ? globalThis : window;
    kU[116] = UU => {
      let XU = UU[0],
        zU = zX[XU];
      if (!zU) {
        if (16 === XU) {
          let XU = new ArrayBuffer(UU.length - 1);
          return new Uint8Array(XU).set(UU.subarray(1)), XU
        }
        throw new Error("Could not find typed array for code " + XU)
      }
      return new cX[zU](Uint8Array.prototype.slice.call(UU, 1).buffer)
    }, kU[120] = () => {
      let UU = qU();
      return new RegExp(UU[0], UU[1])
    };
    const yX = [];

    function QX(UU) {
      WU && WU();
      let XU = QU,
        zU = AU,
        cU = pU,
        FU = tU,
        kU = gU,
        GU = DU,
        BU = IU,
        ZU = YU,
        RU = EU,
        PU = new Uint8Array(yU.slice(0, QU)),
        LU = oU,
        eU = oU.slice(0, oU.length),
        CU = aU,
        wU = dU,
        qU = UU();
      return QU = XU, AU = zU, pU = cU, tU = FU, gU = kU, DU = GU, IU = BU, YU = ZU, EU = RU, yU = PU, dU = wU, (oU = LU).splice(0, oU.length, ...eU), aU = CU, NU = new DataView(yU.buffer, yU.byteOffset, yU.byteLength), qU
    }

    function AX() {
      yU = null, YU = null, oU = null
    }
    kU[98] = UU => {
      let XU = (UU[0] << 24) + (UU[1] << 16) + (UU[2] << 8) + UU[3],
        zU = AU;
      return AU += XU - UU.length, EU = yX, (EU = [JU(), JU()]).position0 = 0, EU.position1 = 0, EU.postBundlePosition = AU, AU = zU, qU()
    }, kU[255] = UU => 4 == UU.length ? new Date(1e3 * (16777216 * UU[0] + (UU[1] << 16) + (UU[2] << 8) + UU[3])) : 8 == UU.length ? new Date(((UU[0] << 22) + (UU[1] << 14) + (UU[2] << 6) + (UU[3] >> 2)) / 1e6 + 1e3 * (4294967296 * (3 & UU[3]) + 16777216 * UU[4] + (UU[5] << 16) + (UU[6] << 8) + UU[7])) : 12 == UU.length ? new Date(((UU[0] << 24) + (UU[1] << 16) + (UU[2] << 8) + UU[3]) / 1e6 + 1e3 * ((128 & UU[4] ? -281474976710656 : 0) + 1099511627776 * UU[6] + 4294967296 * UU[7] + 16777216 * UU[8] + (UU[9] << 16) + (UU[10] << 8) + UU[11])) : new Date("invalid");
    const FX = new Array(147);
    for (let yz = 0; yz < 256; yz++) FX[yz] = +("1e" + Math.floor(45.15 - .30103 * yz));
    const oX = eU;
    var DX = new eU({
      useRecords: !1
    });
    const EX = DX.unpack,
      YX = DX.unpackMultiple,
      NX = DX.unpack,
      IX = {
        NEVER: 0,
        ALWAYS: 1,
        DECIMAL_ROUND: 3,
        DECIMAL_FIT: 4
      };
    let pX, aX, tX, gX = new Float32Array(1),
      kX = new Uint8Array(gX.buffer, 0, 4);

    function GX(UU) {
      gX[0] = UU;
      let XU = FX[(127 & kX[3]) << 1 | kX[2] >> 7];
      return (XU * UU + (UU > 0 ? .5 : -.5) | 0) / XU
    }
    try {
      pX = new TextEncoder
    } catch (cz) {}
    const BX = "undefined" !== typeof Buffer,
      ZX = BX ? function(UU) {
        return Buffer.allocUnsafeSlow(UU)
      } : Uint8Array,
      RX = BX ? Buffer : Uint8Array,
      PX = BX ? 4294967296 : 2144337920;
    let WX, dX, LX, eX, CX, wX = 0,
      qX = null;
    const OX = /[\u0080-\uFFFF]/,
      SX = Symbol("record-id");
    class rX extends eU {
      constructor(UU) {
        let XU, zU, cU, yU;
        super(UU), this.offset = 0;
        let QU = RX.prototype.utf8Write ? function(UU, XU) {
            return WX.utf8Write(UU, XU, WX.byteLength - XU)
          } : !(!pX || !pX.encodeInto) && function(UU, XU) {
            return pX.encodeInto(UU, WX.subarray(XU)).written
          },
          AU = this;
        UU || (UU = {});
        let FU = UU && UU.sequential,
          oU = UU.structures || UU.saveStructures,
          DU = UU.maxSharedStructures;
        if (null == DU && (DU = oU ? 32 : 0), DU > 8160) throw new Error("Maximum maxSharedStructure is 8160");
        UU.structuredClone && void 0 == UU.moreTypes && (this.moreTypes = !0);
        let EU = UU.maxOwnStructures;
        null == EU && (EU = oU ? 32 : 64), this.structures || 0 == UU.useRecords || (this.structures = []);
        let YU = DU > 32 || EU + DU > 64,
          NU = DU + 64,
          IU = DU + EU + 64;
        if (IU > 8256) throw new Error("Maximum maxSharedStructure + maxOwnStructure is 8192");
        let pU = [],
          aU = 0,
          tU = 0;
        this.pack = this.encode = function(UU, QU) {
          if (WX || (WX = new ZX(8192), LX = WX.dataView || (WX.dataView = new DataView(WX.buffer, 0, 8192)), wX = 0), eX = WX.length - 10, eX - wX < 2048 ? (WX = new ZX(WX.length), LX = WX.dataView || (WX.dataView = new DataView(WX.buffer, 0, WX.length)), eX = WX.length - 10, wX = 0) : wX = wX + 7 & 2147483640, XU = wX, QU & TX && (wX += 255 & QU), yU = AU.structuredClone ? new Map : null, AU.bundleStrings && "string" !== typeof UU ? (qX = [], qX.size = 1 / 0) : qX = null, cU = AU.structures, cU) {
            cU.uninitialized && (cU = AU._mergeStructures(AU.getStructures()));
            let UU = cU.sharedLength || 0;
            if (UU > DU) throw new Error("Shared structures is larger than maximum shared structures, try increasing maxSharedStructures to " + cU.sharedLength);
            if (!cU.transitions) {
              cU.transitions = Object.create(null);
              for (let XU = 0; XU < UU; XU++) {
                let UU = cU[XU];
                if (!UU) continue;
                let zU, yU = cU.transitions;
                for (let XU = 0, cU = UU.length; XU < cU; XU++) {
                  let cU = UU[XU];
                  zU = yU[cU], zU || (zU = yU[cU] = Object.create(null)), yU = zU
                }
                yU[SX] = XU + 64
              }
              this.lastNamedStructuresLength = UU
            }
            FU || (cU.nextId = UU + 64)
          }
          let oU;
          zU && (zU = !1);
          try {
            AU.randomAccessStructure && UU && UU.constructor && UU.constructor === Object ? eU(UU) : GU(UU);
            let zU = qX;
            if (qX && HX(XU, GU, 0), yU && yU.idsToInsert) {
              let UU = yU.idsToInsert.sort(((UU, XU) => UU.offset > XU.offset ? 1 : -1)),
                cU = UU.length,
                QU = -1;
              for (; zU && cU > 0;) {
                let yU = UU[--cU].offset + XU;
                yU < zU.stringsPosition + XU && -1 === QU && (QU = 0), yU > zU.position + XU ? QU >= 0 && (QU += 6) : (QU >= 0 && (LX.setUint32(zU.position + XU, LX.getUint32(zU.position + XU) + QU), QU = -1), zU = zU.previous, cU++)
              }
              QU >= 0 && zU && LX.setUint32(zU.position + XU, LX.getUint32(zU.position + XU) + QU), wX += 6 * UU.length, wX > eX && WU(wX), AU.offset = wX;
              let FU = function(UU, XU) {
                let zU, cU = 6 * XU.length,
                  yU = UU.length - cU;
                for (; zU = XU.pop();) {
                  let XU = zU.offset,
                    QU = zU.id;
                  UU.copyWithin(XU + cU, XU, yU), cU -= 6;
                  let AU = XU + cU;
                  UU[AU++] = 214, UU[AU++] = 105, UU[AU++] = QU >> 24, UU[AU++] = QU >> 16 & 255, UU[AU++] = QU >> 8 & 255, UU[AU++] = 255 & QU, yU = XU
                }
                return UU
              }(WX.subarray(XU, wX), UU);
              return yU = null, FU
            }
            return AU.offset = wX, QU & KX ? (WX.start = XU, WX.end = wX, WX) : WX.subarray(XU, wX)
          } catch (cz) {
            throw oU = cz, cz
          } finally {
            if (cU && (gU(), zU && AU.saveStructures)) {
              let zU = cU.sharedLength || 0,
                yU = WX.subarray(XU, wX),
                FU = vX(cU, AU);
              if (!oU) return !1 === AU.saveStructures(FU, FU.isCompatible) ? AU.pack(UU, QU) : (AU.lastNamedStructuresLength = zU, WX.length > 1073741824 && (WX = null), yU)
            }
            WX.length > 1073741824 && (WX = null), QU & bX && (wX = XU)
          }
        };
        const gU = () => {
            tU < 10 && tU++;
            let UU = cU.sharedLength || 0;
            if (cU.length > UU && !FU && (cU.length = UU), aU > 1e4) cU.transitions = null, tU = 0, aU = 0, pU.length > 0 && (pU = []);
            else if (pU.length > 0 && !FU) {
              for (let UU = 0, XU = pU.length; UU < XU; UU++) pU[UU][SX] = 0;
              pU = []
            }
          },
          kU = UU => {
            var XU = UU.length;
            XU < 16 ? WX[wX++] = 144 | XU : XU < 65536 ? (WX[wX++] = 220, WX[wX++] = XU >> 8, WX[wX++] = 255 & XU) : (WX[wX++] = 221, LX.setUint32(wX, XU), wX += 4);
            for (let zU = 0; zU < XU; zU++) GU(UU[zU])
          },
          GU = UU => {
            wX > eX && (WX = WU(wX));
            var zU, cU = typeof UU;
            if ("string" === cU) {
              let cU, yU = UU.length;
              if (qX && yU >= 4 && yU < 4096) {
                if ((qX.size += yU) > 21760) {
                  let UU, zU, cU = (qX[0] ? 3 * qX[0].length + qX[1].length : 0) + 10;
                  wX + cU > eX && (WX = WU(wX + cU)), qX.position ? (zU = qX, WX[wX] = 200, wX += 3, WX[wX++] = 98, UU = wX - XU, wX += 4, HX(XU, GU, 0), LX.setUint16(UU + XU - 3, wX - XU - UU)) : (WX[wX++] = 214, WX[wX++] = 98, UU = wX - XU, wX += 4), qX = ["", ""], qX.previous = zU, qX.size = 0, qX.position = UU
                }
                let zU = OX.test(UU);
                return qX[zU ? 0 : 1] += UU, WX[wX++] = 193, void GU(zU ? -yU : yU)
              }
              cU = yU < 32 ? 1 : yU < 256 ? 2 : yU < 65536 ? 3 : 5;
              let AU = 3 * yU;
              if (wX + AU > eX && (WX = WU(wX + AU)), yU < 64 || !QU) {
                let XU, QU, AU, FU = wX + cU;
                for (XU = 0; XU < yU; XU++) QU = UU.charCodeAt(XU), QU < 128 ? WX[FU++] = QU : QU < 2048 ? (WX[FU++] = QU >> 6 | 192, WX[FU++] = 63 & QU | 128) : 55296 === (64512 & QU) && 56320 === (64512 & (AU = UU.charCodeAt(XU + 1))) ? (QU = 65536 + ((1023 & QU) << 10) + (1023 & AU), XU++, WX[FU++] = QU >> 18 | 240, WX[FU++] = QU >> 12 & 63 | 128, WX[FU++] = QU >> 6 & 63 | 128, WX[FU++] = 63 & QU | 128) : (WX[FU++] = QU >> 12 | 224, WX[FU++] = QU >> 6 & 63 | 128, WX[FU++] = 63 & QU | 128);
                zU = FU - wX - cU
              } else zU = QU(UU, wX + cU);
              zU < 32 ? WX[wX++] = 160 | zU : zU < 256 ? (cU < 2 && WX.copyWithin(wX + 2, wX + 1, wX + 1 + zU), WX[wX++] = 217, WX[wX++] = zU) : zU < 65536 ? (cU < 3 && WX.copyWithin(wX + 3, wX + 2, wX + 2 + zU), WX[wX++] = 218, WX[wX++] = zU >> 8, WX[wX++] = 255 & zU) : (cU < 5 && WX.copyWithin(wX + 5, wX + 3, wX + 3 + zU), WX[wX++] = 219, LX.setUint32(wX, zU), wX += 4), wX += zU
            } else if ("number" === cU)
              if (UU >>> 0 === UU) UU < 32 || UU < 128 && !1 === this.useRecords || UU < 64 && !this.randomAccessStructure ? WX[wX++] = UU : UU < 256 ? (WX[wX++] = 204, WX[wX++] = UU) : UU < 65536 ? (WX[wX++] = 205, WX[wX++] = UU >> 8, WX[wX++] = 255 & UU) : (WX[wX++] = 206, LX.setUint32(wX, UU), wX += 4);
              else if ((UU | 0) === UU) UU >= -32 ? WX[wX++] = 256 + UU : UU >= -128 ? (WX[wX++] = 208, WX[wX++] = UU + 256) : UU >= -32768 ? (WX[wX++] = 209, LX.setInt16(wX, UU), wX += 2) : (WX[wX++] = 210, LX.setInt32(wX, UU), wX += 4);
            else {
              let XU;
              if ((XU = this.useFloat32) > 0 && UU < 4294967296 && UU >= -2147483648) {
                let zU;
                if (WX[wX++] = 202, LX.setFloat32(wX, UU), XU < 4 || ((zU = UU * FX[(127 & WX[wX]) << 1 | WX[wX + 1] >> 7]) | 0) === zU) return void(wX += 4);
                wX--
              }
              WX[wX++] = 203, LX.setFloat64(wX, UU), wX += 8
            } else if ("object" === cU || "function" === cU)
              if (UU) {
                if (yU) {
                  let zU = yU.get(UU);
                  if (zU) {
                    if (!zU.id) {
                      let UU = yU.idsToInsert || (yU.idsToInsert = []);
                      zU.id = UU.push(zU)
                    }
                    return WX[wX++] = 214, WX[wX++] = 112, LX.setUint32(wX, zU.id), void(wX += 4)
                  }
                  yU.set(UU, {
                    offset: wX - XU
                  })
                }
                let QU = UU.constructor;
                if (QU === Object) PU(UU);
                else if (QU === Array) kU(UU);
                else if (QU === Map)
                  if (this.mapAsEmptyObject) WX[wX++] = 128;
                  else {
                    (zU = UU.size) < 16 ? WX[wX++] = 128 | zU : zU < 65536 ? (WX[wX++] = 222, WX[wX++] = zU >> 8, WX[wX++] = 255 & zU) : (WX[wX++] = 223, LX.setUint32(wX, zU), wX += 4);
                    for (let [XU, zU] of UU) GU(XU), GU(zU)
                  }
                else {
                  for (let XU = 0, zU = aX.length; XU < zU; XU++) {
                    if (UU instanceof tX[XU]) {
                      let zU = aX[XU];
                      if (zU.write) {
                        zU.type && (WX[wX++] = 212, WX[wX++] = zU.type, WX[wX++] = 0);
                        let XU = zU.write.call(this, UU);
                        return void(XU === UU ? Array.isArray(UU) ? kU(UU) : PU(UU) : GU(XU))
                      }
                      let cU, yU = WX,
                        QU = LX,
                        AU = wX;
                      WX = null;
                      try {
                        cU = zU.pack.call(this, UU, (UU => (WX = yU, yU = null, wX += UU, wX > eX && WU(wX), {
                          target: WX,
                          targetView: LX,
                          position: wX - UU
                        })), GU)
                      } finally {
                        yU && (WX = yU, LX = QU, wX = AU, eX = WX.length - 10)
                      }
                      return void(cU && (cU.length + wX > eX && WU(cU.length + wX), wX = iX(cU, WX, wX, zU.type)))
                    }
                  }
                  if (Array.isArray(UU)) kU(UU);
                  else {
                    if (UU.toJSON) {
                      const XU = UU.toJSON();
                      if (XU !== UU) return GU(XU)
                    }
                    if ("function" === cU) return GU(this.writeFunction && this.writeFunction(UU));
                    PU(UU)
                  }
                }
              } else WX[wX++] = 192;
            else if ("boolean" === cU) WX[wX++] = UU ? 195 : 194;
            else if ("bigint" === cU) {
              if (UU < BigInt(1) << BigInt(63) && UU >= -(BigInt(1) << BigInt(63))) WX[wX++] = 211, LX.setBigInt64(wX, UU);
              else if (UU < BigInt(1) << BigInt(64) && UU > 0) WX[wX++] = 207, LX.setBigUint64(wX, UU);
              else {
                if (!this.largeBigIntToFloat) {
                  if (this.largeBigIntToString) return GU(UU.toString());
                  if (this.useBigIntExtension && UU < BigInt(2) ** BigInt(1023) && UU > -(BigInt(2) ** BigInt(1023))) {
                    WX[wX++] = 199, wX++, WX[wX++] = 66;
                    let XU, zU = [];
                    do {
                      let cU = UU & BigInt(255);
                      XU = (cU & BigInt(128)) === (UU < BigInt(0) ? BigInt(128) : BigInt(0)), zU.push(cU), UU >>= BigInt(8)
                    } while (UU !== BigInt(0) && UU !== BigInt(-1) || !XU);
                    WX[wX - 2] = zU.length;
                    for (let UU = zU.length; UU > 0;) WX[wX++] = Number(zU[--UU]);
                    return
                  }
                  throw new RangeError(UU + " was too large to fit in MessagePack 64-bit integer format, use useBigIntExtension, or set largeBigIntToFloat to convert to float-64, or set largeBigIntToString to convert to string")
                }
                WX[wX++] = 203, LX.setFloat64(wX, Number(UU))
              }
              wX += 8
            } else {
              if ("undefined" !== cU) throw new Error("Unknown type: " + cU);
              this.encodeUndefinedAsNil ? WX[wX++] = 192 : (WX[wX++] = 212, WX[wX++] = 0, WX[wX++] = 0)
            }
          },
          BU = this.variableMapSize || this.coercibleKeyAsNumber || this.skipValues ? UU => {
            let XU;
            if (this.skipValues) {
              XU = [];
              for (let zU in UU) "function" === typeof UU.hasOwnProperty && !UU.hasOwnProperty(zU) || this.skipValues.includes(UU[zU]) || XU.push(zU)
            } else XU = Object.keys(UU);
            let zU, cU = XU.length;
            if (cU < 16 ? WX[wX++] = 128 | cU : cU < 65536 ? (WX[wX++] = 222, WX[wX++] = cU >> 8, WX[wX++] = 255 & cU) : (WX[wX++] = 223, LX.setUint32(wX, cU), wX += 4), this.coercibleKeyAsNumber)
              for (let yU = 0; yU < cU; yU++) {
                zU = XU[yU];
                let cU = Number(zU);
                GU(isNaN(cU) ? zU : cU), GU(UU[zU])
              } else
                for (let yU = 0; yU < cU; yU++) GU(zU = XU[yU]), GU(UU[zU])
          } : UU => {
            WX[wX++] = 222;
            let zU = wX - XU;
            wX += 2;
            let cU = 0;
            for (let XU in UU)("function" !== typeof UU.hasOwnProperty || UU.hasOwnProperty(XU)) && (GU(XU), GU(UU[XU]), cU++);
            if (cU > 65535) throw new Error('Object is too large to serialize with fast 16-bit map size, use the "variableMapSize" option to serialize this object');
            WX[zU++ + XU] = cU >> 8, WX[zU + XU] = 255 & cU
          },
          ZU = !1 === this.useRecords ? BU : UU.progressiveRecords && !YU ? UU => {
            let zU, yU, QU = cU.transitions || (cU.transitions = Object.create(null)),
              AU = wX++ - XU;
            for (let FU in UU)
              if ("function" !== typeof UU.hasOwnProperty || UU.hasOwnProperty(FU)) {
                if (zU = QU[FU], zU) QU = zU;
                else {
                  let oU = Object.keys(UU),
                    DU = QU;
                  QU = cU.transitions;
                  let EU = 0;
                  for (let UU = 0, XU = oU.length; UU < XU; UU++) {
                    let XU = oU[UU];
                    zU = QU[XU], zU || (zU = QU[XU] = Object.create(null), EU++), QU = zU
                  }
                  AU + XU + 1 == wX ? (wX--, dU(QU, oU, EU)) : LU(QU, oU, AU, EU), yU = !0, QU = DU[FU]
                }
                GU(UU[FU])
              } if (!yU) {
              let zU = QU[SX];
              zU ? WX[AU + XU] = zU : LU(QU, Object.keys(UU), AU, 0)
            }
          } : UU => {
            let XU, zU = cU.transitions || (cU.transitions = Object.create(null)),
              yU = 0;
            for (let cU in UU)("function" !== typeof UU.hasOwnProperty || UU.hasOwnProperty(cU)) && (XU = zU[cU], XU || (XU = zU[cU] = Object.create(null), yU++), zU = XU);
            let QU = zU[SX];
            QU ? QU >= 96 && YU ? (WX[wX++] = 96 + (31 & (QU -= 96)), WX[wX++] = QU >> 5) : WX[wX++] = QU : dU(zU, zU.__keys__ || Object.keys(UU), yU);
            for (let cU in UU)("function" !== typeof UU.hasOwnProperty || UU.hasOwnProperty(cU)) && GU(UU[cU])
          },
          RU = "function" == typeof this.useRecords && this.useRecords,
          PU = RU ? UU => {
            RU(UU) ? ZU(UU) : BU(UU)
          } : ZU,
          WU = UU => {
            let zU;
            if (UU > 16777216) {
              if (UU - XU > PX) throw new Error("Packed buffer would be larger than maximum buffer size");
              zU = Math.min(PX, 4096 * Math.round(Math.max((UU - XU) * (UU > 67108864 ? 1.25 : 2), 4194304) / 4096))
            } else zU = 1 + (Math.max(UU - XU << 2, WX.length - 1) >> 12) << 12;
            let cU = new ZX(zU);
            return LX = cU.dataView || (cU.dataView = new DataView(cU.buffer, 0, zU)), UU = Math.min(UU, WX.length), WX.copy ? WX.copy(cU, 0, XU, UU) : cU.set(WX.slice(XU, UU)), wX -= XU, XU = 0, eX = cU.length - 10, WX = cU
          },
          dU = (UU, XU, yU) => {
            let QU = cU.nextId;
            QU || (QU = 64), QU < NU && this.shouldShareStructure && !this.shouldShareStructure(XU) ? (QU = cU.nextOwnId, QU < IU || (QU = NU), cU.nextOwnId = QU + 1) : (QU >= IU && (QU = NU), cU.nextId = QU + 1);
            let AU = XU.highByte = QU >= 96 && YU ? QU - 96 >> 5 : -1;
            UU[SX] = QU, UU.__keys__ = XU, cU[QU - 64] = XU, QU < NU ? (XU.isShared = !0, cU.sharedLength = QU - 63, zU = !0, AU >= 0 ? (WX[wX++] = 96 + (31 & QU), WX[wX++] = AU) : WX[wX++] = QU) : (AU >= 0 ? (WX[wX++] = 213, WX[wX++] = 114, WX[wX++] = 96 + (31 & QU), WX[wX++] = AU) : (WX[wX++] = 212, WX[wX++] = 114, WX[wX++] = QU), yU && (aU += tU * yU), pU.length >= EU && (pU.shift()[SX] = 0), pU.push(UU), GU(XU))
          },
          LU = (UU, zU, cU, yU) => {
            let QU = WX,
              AU = wX,
              FU = eX,
              oU = XU;
            WX = dX, wX = 0, XU = 0, WX || (dX = WX = new ZX(8192)), eX = WX.length - 10, dU(UU, zU, yU), dX = WX;
            let DU = wX;
            if (WX = QU, wX = AU, eX = FU, XU = oU, DU > 1) {
              let UU = wX + DU - 1;
              UU > eX && WU(UU);
              let zU = cU + XU;
              WX.copyWithin(zU + DU, zU + 1, wX), WX.set(dX.slice(0, DU), zU), wX = UU
            } else WX[cU + XU] = dX[0]
          },
          eU = UU => {
            let yU = CX(UU, WX, XU, wX, cU, WU, ((UU, XU, cU) => {
              if (cU) return zU = !0;
              wX = XU;
              let yU = WX;
              return GU(UU), gU(), yU !== WX ? {
                position: wX,
                targetView: LX,
                target: WX
              } : wX
            }), this);
            if (0 === yU) return PU(UU);
            wX = yU
          }
      }
      useBuffer(UU) {
        WX = UU, LX = WX.dataView || (WX.dataView = new DataView(WX.buffer, WX.byteOffset, WX.byteLength)), wX = 0
      }
      set position(UU) {
        wX = UU
      }
      get position() {
        return wX
      }
      set buffer(UU) {
        WX = UU
      }
      get buffer() {
        return WX
      }
      clearSharedData() {
        this.structures && (this.structures = []), this.typedStructs && (this.typedStructs = [])
      }
    }

    function uX(UU, XU, zU, cU) {
      let yU = UU.byteLength;
      if (yU + 1 < 256) {
        var {
          target: QU,
          position: AU
        } = zU(4 + yU);
        QU[AU++] = 199, QU[AU++] = yU + 1
      } else if (yU + 1 < 65536) {
        var {
          target: QU,
          position: AU
        } = zU(5 + yU);
        QU[AU++] = 200, QU[AU++] = yU + 1 >> 8, QU[AU++] = yU + 1 & 255
      } else {
        var {
          target: QU,
          position: AU,
          targetView: FU
        } = zU(7 + yU);
        QU[AU++] = 201, FU.setUint32(AU, yU + 1), AU += 4
      }
      QU[AU++] = 116, QU[AU++] = XU, UU.buffer || (UU = new Uint8Array(UU)), QU.set(new Uint8Array(UU.buffer, UU.byteOffset, UU.byteLength), AU)
    }

    function fX(UU, XU) {
      let zU = UU.byteLength;
      var cU, yU;
      if (zU < 256) {
        var {
          target: cU,
          position: yU
        } = XU(zU + 2);
        cU[yU++] = 196, cU[yU++] = zU
      } else if (zU < 65536) {
        var {
          target: cU,
          position: yU
        } = XU(zU + 3);
        cU[yU++] = 197, cU[yU++] = zU >> 8, cU[yU++] = 255 & zU
      } else {
        var {
          target: cU,
          position: yU,
          targetView: QU
        } = XU(zU + 5);
        cU[yU++] = 198, QU.setUint32(yU, zU), yU += 4
      }
      cU.set(UU, yU)
    }

    function iX(UU, XU, zU, cU) {
      let yU = UU.length;
      switch (yU) {
        case 1:
          XU[zU++] = 212;
          break;
        case 2:
          XU[zU++] = 213;
          break;
        case 4:
          XU[zU++] = 214;
          break;
        case 8:
          XU[zU++] = 215;
          break;
        case 16:
          XU[zU++] = 216;
          break;
        default:
          yU < 256 ? (XU[zU++] = 199, XU[zU++] = yU) : yU < 65536 ? (XU[zU++] = 200, XU[zU++] = yU >> 8, XU[zU++] = 255 & yU) : (XU[zU++] = 201, XU[zU++] = yU >> 24, XU[zU++] = yU >> 16 & 255, XU[zU++] = yU >> 8 & 255, XU[zU++] = 255 & yU)
      }
      return XU[zU++] = cU, XU.set(UU, zU), zU += yU
    }

    function HX(UU, XU, zU) {
      if (qX.length > 0) {
        LX.setUint32(qX.position + UU, wX + zU - qX.position - UU), qX.stringsPosition = wX - UU;
        let cU = qX;
        qX = null, XU(cU[0]), XU(cU[1])
      }
    }

    function MX(UU) {
      if (UU.Class) {
        if (!UU.pack && !UU.write) throw new Error("Extension has no pack or write function");
        if (UU.pack && !UU.type) throw new Error("Extension has no type (numeric code to identify the extension)");
        tX.unshift(UU.Class), aX.unshift(UU)
      }! function(UU) {
        UU.unpack ? kU[UU.type] = UU.unpack : kU[UU.type] = UU
      }(UU)
    }

    function vX(UU, XU) {
      return UU.isCompatible = UU => {
        let zU = !UU || (XU.lastNamedStructuresLength || 0) === UU.length;
        return zU || XU._mergeStructures(UU), zU
      }, UU
    }
    tX = [Date, Set, Error, RegExp, ArrayBuffer, Object.getPrototypeOf(Uint8Array.prototype).constructor, BU], aX = [{
      pack(UU, XU, zU) {
        let cU = UU.getTime() / 1e3;
        if ((this.useTimestamp32 || 0 === UU.getMilliseconds()) && cU >= 0 && cU < 4294967296) {
          let {
            target: UU,
            targetView: zU,
            position: yU
          } = XU(6);
          UU[yU++] = 214, UU[yU++] = 255, zU.setUint32(yU, cU)
        } else if (cU > 0 && cU < 4294967296) {
          let {
            target: zU,
            targetView: yU,
            position: QU
          } = XU(10);
          zU[QU++] = 215, zU[QU++] = 255, yU.setUint32(QU, 4e6 * UU.getMilliseconds() + (cU / 1e3 / 4294967296 | 0)), yU.setUint32(QU + 4, cU)
        } else if (isNaN(cU)) {
          if (this.onInvalidDate) return XU(0), zU(this.onInvalidDate());
          let {
            target: UU,
            targetView: cU,
            position: yU
          } = XU(3);
          UU[yU++] = 212, UU[yU++] = 255, UU[yU++] = 255
        } else {
          let {
            target: zU,
            targetView: yU,
            position: QU
          } = XU(15);
          zU[QU++] = 199, zU[QU++] = 12, zU[QU++] = 255, yU.setUint32(QU, 1e6 * UU.getMilliseconds()), yU.setBigInt64(QU + 4, BigInt(Math.floor(cU)))
        }
      }
    }, {
      pack(UU, XU, zU) {
        if (this.setAsEmptyObject) return XU(0), zU({});
        let cU = Array.from(UU),
          {
            target: yU,
            position: QU
          } = XU(this.moreTypes ? 3 : 0);
        this.moreTypes && (yU[QU++] = 212, yU[QU++] = 115, yU[QU++] = 0), zU(cU)
      }
    }, {
      pack(UU, XU, zU) {
        let {
          target: cU,
          position: yU
        } = XU(this.moreTypes ? 3 : 0);
        this.moreTypes && (cU[yU++] = 212, cU[yU++] = 101, cU[yU++] = 0), zU([UU.name, UU.message, UU.cause])
      }
    }, {
      pack(UU, XU, zU) {
        let {
          target: cU,
          position: yU
        } = XU(this.moreTypes ? 3 : 0);
        this.moreTypes && (cU[yU++] = 212, cU[yU++] = 120, cU[yU++] = 0), zU([UU.source, UU.flags])
      }
    }, {
      pack(UU, XU) {
        this.moreTypes ? uX(UU, 16, XU) : fX(BX ? Buffer.from(UU) : new Uint8Array(UU), XU)
      }
    }, {
      pack(UU, XU) {
        let zU = UU.constructor;
        zU !== RX && this.moreTypes ? uX(UU, zX.indexOf(zU.name), XU) : fX(UU, XU)
      }
    }, {
      pack(UU, XU) {
        let {
          target: zU,
          position: cU
        } = XU(1);
        zU[cU] = 193
      }
    }];
    let VX = new rX({
      useRecords: !1
    });
    const sX = VX.pack,
      nX = VX.pack,
      mX = rX,
      {
        NEVER: lX,
        ALWAYS: xX,
        DECIMAL_ROUND: JX,
        DECIMAL_FIT: jX
      } = IX,
      KX = 512,
      bX = 1024,
      TX = 2048;
    const hX = function(UU) {
        let XU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        if (!UU || "object" !== typeof UU) throw new Error("first argument must be an Iterable, Async Iterable, Iterator, Async Iterator, or a promise");
        const zU = new eU(XU);
        let cU;
        const yU = UU => {
          let XU;
          cU && (UU = Buffer.concat([cU, UU]), cU = void 0);
          try {
            XU = zU.unpackMultiple(UU)
          } catch (yU) {
            if (!yU.incomplete) throw yU;
            cU = UU.slice(yU.lastPosition), XU = yU.values
          }
          return XU
        };
        return "function" === typeof UU[Symbol.iterator] ? function*() {
          for (const XU of UU) yield* yU(XU)
        }() : "function" === typeof UU[Symbol.asyncIterator] ? async function*() {
          for await (const XU of UU) yield* yU(XU)
        }(): void 0
      },
      Uz = function(UU) {
        let XU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        if (UU && "object" === typeof UU) {
          if ("function" === typeof UU[Symbol.iterator]) return function*(UU, XU) {
            const zU = new rX(XU);
            for (const cU of UU) yield zU.pack(cU)
          }(UU, XU);
          if ("function" === typeof UU.then || "function" === typeof UU[Symbol.asyncIterator]) return async function*(UU, XU) {
            const zU = new rX(XU);
            for await (const cU of UU) yield zU.pack(cU)
          }(UU, XU);
          throw new Error("first argument must be an Iterable, Async Iterable, Iterator, Async Iterator, or a Promise")
        }
        throw new Error("first argument must be an Iterable, Async Iterable, or a Promise for an Async Iterable")
      },
      Xz = !1,
      zz = !0
  },
  9694: (UU, XU, zU) => {
    zU.r(XU), zU.d(XU, {
      $changes: () => aU,
      $childType: () => tU,
      $decoder: () => EU,
      $deleteByIndex: () => IU,
      $encoder: () => DU,
      $filter: () => YU,
      $getByIndex: () => NU,
      $numFields: () => LU,
      $refId: () => FU,
      $track: () => oU,
      $values: () => ZU,
      ArraySchema: () => zc,
      Callbacks: () => zy,
      ChangeTree: () => wz,
      CollectionSchema: () => Qc,
      Decoder: () => Jc,
      Encoder: () => nc,
      FieldBuilder: () => oc,
      MapSchema: () => yc,
      Metadata: () => JX,
      OPERATION: () => yU,
      Reflection: () => Tc,
      ReflectionField: () => Kc,
      ReflectionType: () => bc,
      Root: () => qc,
      Schema: () => Cc,
      SetSchema: () => Ac,
      StateCallbackStrategy: () => Xy,
      StateView: () => fc,
      StreamSchema: () => Fc,
      TypeContext: () => vX,
      createPool: () => yy,
      decode: () => GX,
      decodeKeyValueOperation: () => Kz,
      decodeSchemaOperation: () => jz,
      defineCustomTypes: () => PX,
      defineTypes: () => dc,
      deprecated: () => Pc,
      dumpChanges: () => ec,
      encode: () => XX,
      encodeArray: () => Hz,
      encodeIndexedEntry: () => fz,
      encodeKeyValueOperation: () => iz,
      encodeMapEntry: () => uz,
      encodeSchemaOperation: () => rz,
      Ep: () => ac,
      fullStateOnly: () => Gc,
      getDecoderStateCallbacks: () => hc,
      getEncodeDescriptor: () => Uz,
      getRawChangesCallback: () => Uy,
      isBuilder: () => Dc,
      patchOnly: () => kc,
      registerType: () => RX,
      schema: () => Lc,
      t: () => Ic,
      type: () => Bc,
      unreliable: () => gc,
      view: () => tc
    });
    const cU = 255;
    var yU;

    function QU(UU) {
      Object.defineProperty(UU, Symbol.metadata, {
        value: void 0,
        writable: !0,
        configurable: !0,
        enumerable: !1
      })
    }! function(UU) {
      UU[UU.ADD = 128] = "ADD", UU[UU.REPLACE = 0] = "REPLACE", UU[UU.DELETE = 64] = "DELETE", UU[UU.DELETE_AND_MOVE = 96] = "DELETE_AND_MOVE", UU[UU.MOVE_AND_ADD = 160] = "MOVE_AND_ADD", UU[UU.DELETE_AND_ADD = 192] = "DELETE_AND_ADD", UU[UU.CLEAR = 10] = "CLEAR", UU[UU.REVERSE = 15] = "REVERSE", UU[UU.MOVE = 32] = "MOVE", UU[UU.DELETE_BY_REFID = 33] = "DELETE_BY_REFID", UU[UU.ADD_BY_REFID = 129] = "ADD_BY_REFID"
    }(yU || (yU = {})), Symbol.metadata ??= Symbol.for("Symbol.metadata");
    const AU = "undefined" !== typeof globalThis ? globalThis : "undefined" !== typeof global ? global : "undefined" !== typeof self ? self : "undefined" !== typeof window ? window : {};
    if ("function" === typeof Symbol && "function" !== typeof Symbol.for) {
      const UU = "colyseus.symbolRegistry",
        XU = AU[UU] || (AU[UU] = Object.create(null));
      Symbol.for = function(UU) {
        return XU[UU] || (XU[UU] = Symbol(UU))
      }, Symbol.keyFor = function(UU) {
        for (const zU in XU)
          if (XU[zU] === UU) return zU
      }
    }
    const FU = Symbol.for("$refId"),
      oU = "~track",
      DU = "~encoder",
      EU = "~decoder",
      YU = "~filter",
      NU = "~getByIndex",
      IU = "~deleteByIndex",
      pU = "~resyncPrune",
      aU = Symbol.for("$changes"),
      tU = Symbol.for("$childType"),
      gU = Symbol.for("$proxyTarget"),
      kU = "~onEncodeEnd",
      GU = "~reset",
      BU = "~onDecodeEnd",
      ZU = Symbol.for("$values"),
      RU = "~builder",
      PU = "~descriptors",
      WU = "~__encodeDescriptor",
      dU = "~encoders",
      LU = "~__numFields",
      eU = "~__refTypeFieldIndexes",
      CU = "~__viewFieldIndexes",
      wU = "$__fieldIndexesByViewTag",
      qU = "~__unreliableFieldIndexes",
      OU = "~__patchOnlyFieldIndexes",
      SU = "~__fullSyncSkipIndexes",
      rU = "~__fullStateOnlyFieldIndexes",
      uU = "~__streamFieldIndexes",
      fU = "~__streamPriorities";
    let iU;
    try {
      iU = new TextEncoder
    } catch (Qy) {}
    const HU = new ArrayBuffer(8),
      MU = new Int32Array(HU),
      vU = new Float32Array(HU),
      VU = new Float64Array(HU),
      sU = new BigInt64Array(HU),
      nU = "undefined" !== typeof Buffer && Buffer.byteLength ? Buffer.byteLength : function(UU, XU) {
        for (var zU = 0, cU = 0, yU = 0, QU = UU.length; yU < QU; yU++)(zU = UU.charCodeAt(yU)) < 128 ? cU += 1 : zU < 2048 ? cU += 2 : zU < 55296 || zU >= 57344 ? cU += 3 : (yU++, cU += 4);
        return cU
      };

    function mU(UU, XU, zU) {
      for (var cU = 0, yU = 0, QU = XU.length; yU < QU; yU++)(cU = XU.charCodeAt(yU)) < 128 ? UU[zU.offset++] = cU : cU < 2048 ? (UU[zU.offset] = 192 | cU >> 6, UU[zU.offset + 1] = 128 | 63 & cU, zU.offset += 2) : cU < 55296 || cU >= 57344 ? (UU[zU.offset] = 224 | cU >> 12, UU[zU.offset + 1] = 128 | cU >> 6 & 63, UU[zU.offset + 2] = 128 | 63 & cU, zU.offset += 3) : (yU++, cU = 65536 + ((1023 & cU) << 10 | 1023 & XU.charCodeAt(yU)), UU[zU.offset] = 240 | cU >> 18, UU[zU.offset + 1] = 128 | cU >> 12 & 63, UU[zU.offset + 2] = 128 | cU >> 6 & 63, UU[zU.offset + 3] = 128 | 63 & cU, zU.offset += 4)
    }

    function lU(UU, XU, zU) {
      UU[zU.offset++] = 255 & XU
    }

    function xU(UU, XU, zU) {
      UU[zU.offset++] = 255 & XU, UU[zU.offset++] = XU >> 8 & 255
    }

    function JU(UU, XU, zU) {
      UU[zU.offset++] = 255 & XU, UU[zU.offset++] = XU >> 8 & 255
    }

    function jU(UU, XU, zU) {
      UU[zU.offset++] = 255 & XU, UU[zU.offset++] = XU >> 8 & 255, UU[zU.offset++] = XU >> 16 & 255, UU[zU.offset++] = XU >> 24 & 255
    }

    function KU(UU, XU, zU) {
      const cU = XU >> 24,
        yU = XU >> 16,
        QU = XU >> 8,
        AU = XU;
      UU[zU.offset++] = 255 & AU, UU[zU.offset++] = 255 & QU, UU[zU.offset++] = 255 & yU, UU[zU.offset++] = 255 & cU
    }

    function bU(UU, XU, zU) {
      const cU = Math.floor(XU / Math.pow(2, 32));
      KU(UU, XU >>> 0, zU), KU(UU, cU, zU)
    }

    function TU(UU, XU, zU) {
      const cU = XU / Math.pow(2, 32) | 0;
      KU(UU, XU >>> 0, zU), KU(UU, cU, zU)
    }

    function hU(UU, XU, zU) {
      vU[0] = XU, jU(UU, MU[0], zU)
    }

    function UX(UU, XU, zU) {
      VU[0] = XU, jU(UU, MU[0], zU), jU(UU, MU[1], zU)
    }
    const XX = {
        int8: lU,
        uint8: function(UU, XU, zU) {
          UU[zU.offset++] = 255 & XU
        },
        int16: xU,
        uint16: JU,
        int32: jU,
        uint32: KU,
        int64: bU,
        uint64: TU,
        bigint64: function(UU, XU, zU) {
          sU[0] = BigInt.asIntN(64, XU), jU(UU, MU[0], zU), jU(UU, MU[1], zU)
        },
        biguint64: function(UU, XU, zU) {
          sU[0] = BigInt.asIntN(64, XU), jU(UU, MU[0], zU), jU(UU, MU[1], zU)
        },
        float32: hU,
        float64: UX,
        boolean: function(UU, XU, zU) {
          UU[zU.offset++] = XU ? 1 : 0
        },
        string: function(UU, XU, zU) {
          XU || (XU = "");
          let cU = nU(XU, "utf8"),
            yU = 0;
          if (cU < 32) UU[zU.offset++] = 160 | cU, yU = 1;
          else if (cU < 256) UU[zU.offset++] = 217, UU[zU.offset++] = cU, yU = 2;
          else if (cU < 65536) UU[zU.offset++] = 218, JU(UU, cU, zU), yU = 3;
          else {
            if (!(cU < 4294967296)) throw new Error("String too long");
            UU[zU.offset++] = 219, KU(UU, cU, zU), yU = 5
          }
          return mU(UU, XU, zU), yU + cU
        },
        number: function UU(XU, zU, cU) {
          return isNaN(zU) ? UU(XU, 0, cU) : isFinite(zU) ? zU !== (0 | zU) ? Math.abs(zU) <= 34028235e31 && (vU[0] = zU, Math.abs(Math.abs(vU[0]) - Math.abs(zU)) < 1e-4) ? (XU[cU.offset++] = 202, hU(XU, zU, cU), 5) : (XU[cU.offset++] = 203, UX(XU, zU, cU), 9) : zU >= 0 ? zU < 128 ? (XU[cU.offset++] = 255 & zU, 1) : zU < 256 ? (XU[cU.offset++] = 204, XU[cU.offset++] = 255 & zU, 2) : zU < 65536 ? (XU[cU.offset++] = 205, JU(XU, zU, cU), 3) : zU < 4294967296 ? (XU[cU.offset++] = 206, KU(XU, zU, cU), 5) : (XU[cU.offset++] = 207, TU(XU, zU, cU), 9) : zU >= -32 ? (XU[cU.offset++] = 224 | zU + 32, 1) : zU >= -128 ? (XU[cU.offset++] = 208, lU(XU, zU, cU), 2) : zU >= -32768 ? (XU[cU.offset++] = 209, xU(XU, zU, cU), 3) : zU >= -2147483648 ? (XU[cU.offset++] = 210, jU(XU, zU, cU), 5) : (XU[cU.offset++] = 211, bU(XU, zU, cU), 9) : UU(XU, zU > 0 ? Number.MAX_SAFE_INTEGER : -Number.MAX_SAFE_INTEGER, cU)
        },
        utf8Write: mU,
        utf8Length: nU
      },
      zX = new ArrayBuffer(8),
      cX = new Int32Array(zX),
      yX = new Float32Array(zX),
      QX = new Float64Array(zX),
      AX = new BigUint64Array(zX),
      FX = new BigInt64Array(zX);

    function oX(UU, XU, zU) {
      zU > UU.length - XU.offset && (zU = UU.length - XU.offset);
      for (var cU = "", yU = 0, QU = XU.offset, AU = XU.offset + zU; QU < AU; QU++) {
        var FU = UU[QU];
        if (0 !== (128 & FU))
          if (192 !== (224 & FU))
            if (224 !== (240 & FU)) {
              if (240 !== (248 & FU)) {
                console.error("decode.utf8Read(): Invalid byte " + FU + " at offset " + QU + ". Skip to end of string: " + (XU.offset + zU));
                break
              }(yU = (7 & FU) << 18 | (63 & UU[++QU]) << 12 | (63 & UU[++QU]) << 6 | 63 & UU[++QU]) >= 65536 ? (yU -= 65536, cU += String.fromCharCode(55296 + (yU >>> 10), 56320 + (1023 & yU))) : cU += String.fromCharCode(yU)
            } else cU += String.fromCharCode((15 & FU) << 12 | (63 & UU[++QU]) << 6 | 63 & UU[++QU]);
        else cU += String.fromCharCode((31 & FU) << 6 | 63 & UU[++QU]);
        else cU += String.fromCharCode(FU)
      }
      return XU.offset += zU, cU
    }

    function DX(UU, XU) {
      return EX(UU, XU) << 24 >> 24
    }

    function EX(UU, XU) {
      return UU[XU.offset++]
    }

    function YX(UU, XU) {
      return NX(UU, XU) << 16 >> 16
    }

    function NX(UU, XU) {
      return UU[XU.offset++] | UU[XU.offset++] << 8
    }

    function IX(UU, XU) {
      return UU[XU.offset++] | UU[XU.offset++] << 8 | UU[XU.offset++] << 16 | UU[XU.offset++] << 24
    }

    function pX(UU, XU) {
      return IX(UU, XU) >>> 0
    }

    function aX(UU, XU) {
      return cX[0] = IX(UU, XU), yX[0]
    }

    function tX(UU, XU) {
      return cX[0] = IX(UU, XU), cX[1] = IX(UU, XU), QX[0]
    }

    function gX(UU, XU) {
      const zU = pX(UU, XU);
      return IX(UU, XU) * Math.pow(2, 32) + zU
    }

    function kX(UU, XU) {
      const zU = pX(UU, XU);
      return pX(UU, XU) * Math.pow(2, 32) + zU
    }
    const GX = {
        utf8Read: oX,
        int8: DX,
        uint8: EX,
        int16: YX,
        uint16: NX,
        int32: IX,
        uint32: pX,
        float32: aX,
        float64: tX,
        int64: gX,
        uint64: kX,
        bigint64: function(UU, XU) {
          return cX[0] = IX(UU, XU), cX[1] = IX(UU, XU), FX[0]
        },
        biguint64: function(UU, XU) {
          return cX[0] = IX(UU, XU), cX[1] = IX(UU, XU), AX[0]
        },
        boolean: function(UU, XU) {
          return EX(UU, XU) > 0
        },
        string: function(UU, XU) {
          const zU = UU[XU.offset++];
          let cU;
          return zU < 192 ? cU = 31 & zU : 217 === zU ? cU = EX(UU, XU) : 218 === zU ? cU = NX(UU, XU) : 219 === zU && (cU = pX(UU, XU)), oX(UU, XU, cU)
        },
        number: function(UU, XU) {
          const zU = UU[XU.offset++];
          return zU < 128 ? zU : 202 === zU ? aX(UU, XU) : 203 === zU ? tX(UU, XU) : 204 === zU ? EX(UU, XU) : 205 === zU ? NX(UU, XU) : 206 === zU ? pX(UU, XU) : 207 === zU ? kX(UU, XU) : 208 === zU ? DX(UU, XU) : 209 === zU ? YX(UU, XU) : 210 === zU ? IX(UU, XU) : 211 === zU ? gX(UU, XU) : zU > 223 ? -1 * (255 - zU + 1) : void 0
        },
        stringCheck: function(UU, XU) {
          const zU = UU[XU.offset];
          return zU < 192 && zU > 160 || 217 === zU || 218 === zU || 219 === zU
        }
      },
      BX = {},
      ZX = new Map;

    function RX(UU, XU) {
      XU.constructor && (Object.prototype.hasOwnProperty.call(XU, "constructor") && null == XU.constructor[Symbol.metadata] && QU(XU.constructor), ZX.set(XU.constructor, UU), BX[UU] = XU), XU.encode && (XX[UU] = XU.encode), XU.decode && (GX[UU] = XU.decode)
    }

    function PX(UU) {
      for (const XU in UU) RX(XU, UU[XU]);
      return UU => Bc(UU)
    }
    const WX = "ArraySchema does not support streaming \u2014 positional ops (splice / unshift / reverse) shift subsequent indexes, so holding ADDs back for a later tick under `maxPerTick` would desync the decoder. Use `t.stream(X)` (stable monotonic positions) or `t.map(X).stream()` (stable keys) instead.";

    function dX() {
      return {
        pendingByView: new Map,
        sentByView: new Map,
        broadcastPending: new Set,
        sentBroadcast: new Set,
        broadcastDeletes: new Set,
        maxPerTick: 32
      }
    }

    function LX(UU) {
      return UU._stream ??= dX()
    }

    function eX(UU, XU, zU) {
      0 === XU.activeViews.size && LX(UU).broadcastPending.add(zU)
    }

    function CX(UU, XU, zU, cU) {
      const QU = UU._stream;
      if (void 0 === QU) return !0;
      let AU = !1;
      return QU.broadcastPending.delete(cU) ? AU = !0 : QU.sentBroadcast.delete(cU) && QU.broadcastDeletes.add(cU), XU.forEachActiveView((UU => {
        const XU = QU.pendingByView.get(UU.id);
        if (XU?.has(cU)) return XU.delete(cU), void(AU = !0);
        const FU = QU.sentByView.get(UU.id);
        if (FU?.has(cU)) {
          FU.delete(cU);
          let XU = UU.changes.get(zU);
          void 0 === XU && (XU = new Map, UU.changes.set(zU, XU)), XU.set(cU, yU.DELETE)
        }
      })), AU
    }

    function wX(UU, XU) {
      const zU = UU._stream?.pendingByView;
      if (void 0 === zU) return !1;
      for (const [cU, yU] of zU)
        if (yU.size > 0 && void 0 !== XU.activeViews.get(cU)?.deref()) return !0;
      return !1
    }

    function qX(UU) {
      const XU = UU._stream;
      return void 0 !== XU && (XU.broadcastPending.size > 0 || XU.broadcastDeletes.size > 0)
    }

    function OX(UU, XU, zU) {
      const cU = LX(UU);
      let yU = cU.pendingByView.get(XU);
      void 0 === yU && (yU = new Set, cU.pendingByView.set(XU, yU)), yU.add(zU)
    }

    function SX(UU, XU) {
      const zU = UU._stream;
      void 0 !== zU && (zU.pendingByView.delete(XU), zU.sentByView.delete(XU), zU.priorityByView?.delete(XU))
    }
    const rX = {
      8: "uint8",
      16: "uint16",
      32: "uint32"
    };

    function uX(UU) {
      if (null == UU || "object" !== typeof UU) throw new Error("t.quantized(): options object with { min, max } is required.");
      const {
        min: XU,
        max: zU
      } = UU;
      if ("number" !== typeof XU || "number" !== typeof zU || !(zU > XU) || !Number.isFinite(XU) || !Number.isFinite(zU)) throw new Error(`t.quantized(): require finite min < max (got min=${XU}, max=${zU}).`);
      const cU = UU.bits ?? 16;
      if (8 !== cU && 16 !== cU && 32 !== cU) throw new Error(`t.quantized(): bits must be 8, 16 or 32 (got ${cU}).`);
      const yU = UU.mode ?? "clamp";
      if ("clamp" !== yU && "wrap" !== yU) throw new Error(`t.quantized(): mode must be "clamp" or "wrap" (got ${JSON.stringify(yU)}).`);
      const QU = "wrap" === yU,
        AU = Math.pow(2, cU);
      return {
        min: XU,
        max: zU,
        bits: cU,
        wrap: QU,
        wire: rX[cU],
        range: zU - XU,
        span: QU ? AU : XU === -zU ? AU - 2 : AU - 1
      }
    }

    function fX(UU) {
      return null !== UU && "object" === typeof UU && void 0 !== UU.quantized
    }

    function iX(UU, XU) {
      if (UU.wrap) {
        if (!Number.isFinite(XU)) return 0;
        const zU = UU.range;
        let cU = (XU - UU.min) % zU;
        cU < 0 && (cU += zU);
        const yU = UU.span;
        return Math.floor(cU / zU * yU + .5) % yU
      }
      if (XU !== XU) return 0;
      const zU = XU < UU.min ? UU.min : XU > UU.max ? UU.max : XU;
      return Math.floor((zU - UU.min) / UU.range * UU.span + .5)
    }

    function HX(UU, XU) {
      return UU.min + XU / UU.span * UU.range
    }

    function MX(UU) {
      const XU = XX[UU.wire];
      return (zU, cU, yU) => XU(zU, iX(UU, cU), yU)
    }
    class vX {
      types = {};
      schemas = new Map;
      hasFilters = !1;
      static inheritedTypes = new WeakMap;
      static cachedContexts = new WeakMap;
      static register(UU) {
        const XU = Object.getPrototypeOf(UU);
        if (XU !== Cc) {
          let zU = vX.inheritedTypes.get(XU);
          zU || (zU = new Set, vX.inheritedTypes.set(XU, zU)), zU.add(UU)
        }
      }
      static cache(UU) {
        let XU = vX.cachedContexts.get(UU);
        return XU || (XU = new vX(UU), vX.cachedContexts.set(UU, XU)), XU
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
        let XU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.schemas.size;
        return !this.schemas.has(UU) && (this.types[XU] = UU, null == UU[Symbol.metadata] && JX.initialize(UU), this.schemas.set(UU, XU), !0)
      }
      getTypeId(UU) {
        return this.schemas.get(UU)
      }
      discoverTypes(UU) {
        if (!this.add(UU)) return;
        vX.inheritedTypes.get(UU)?.forEach((UU => {
          this.discoverTypes(UU)
        }));
        let XU = UU;
        for (;
          (XU = Object.getPrototypeOf(XU)) && XU !== Cc && XU !== Function.prototype;) this.discoverTypes(XU);
        const zU = UU[Symbol.metadata];
        (zU[CU] || zU[uU]) && (this.hasFilters = !0);
        for (const cU in zU) {
          const UU = zU[cU].type;
          if ("string" !== typeof UU && !fX(UU))
            if ("function" === typeof UU) this.discoverTypes(UU);
            else {
              const XU = Object.values(UU)[0];
              if ("string" === typeof XU) continue;
              this.discoverTypes(XU)
            }
        }
      }
      debug() {
        return `TypeContext ->\n\tSchema types: ${this.schemas.size}\n\thasFilters: ${this.hasFilters}`
      }
    }

    function VX(UU) {
      const XU = nX(UU);
      return XU ? {
        complexTypeKlass: BX[XU],
        childType: UU[XU]
      } : {
        complexTypeKlass: !1,
        childType: UU
      }
    }

    function sX(UU, XU) {
      const zU = mX(UU),
        cU = nX(zU),
        yU = cU && nX(zU[cU]);
      if (yU) throw new Error(`${XU?`${XU}: `:""}@colyseus/schema: nested collections are not supported ("${cU}" of "${yU}"). Collections can only hold primitive types or Schema classes, wrap the inner ${yU} in a Schema class.`);
      return zU
    }

    function nX(UU) {
      return "object" === typeof UU && null !== UU ? Object.keys(UU).find((UU => void 0 !== BX[UU])) : void 0
    }

    function mX(UU) {
      if ("object" !== typeof UU || null === UU) return UU;
      if (Array.isArray(UU)) return {
        array: mX(UU[0])
      };
      const XU = function(UU) {
        const XU = Object.keys(UU),
          zU = XU.filter((UU => /\d+/.test(UU)));
        if (zU.length > 0 && zU.length === XU.length / 2 && UU[UU[zU[0]]] == zU[0]) return "number";
        if (XU.length > 0 && XU.every((XU => UU[XU] === XU))) return "string"
      }(UU);
      if (XU) return XU;
      if (fX(UU)) return "string" === typeof UU.quantized.wire ? UU : {
        quantized: uX(UU.quantized)
      };
      if (void 0 !== UU.type) return mX(UU.type);
      const zU = nX(UU);
      return zU && (UU[zU] = mX(UU[zU])), UU
    }
    const lX = [eU, qU, OU, SU, rU, uU, dU];

    function xX(UU, XU, zU) {
      UU[XU] || Object.defineProperty(UU, XU, {
        value: [],
        enumerable: !1,
        configurable: !0,
        writable: !0
      }), UU[XU].push(zU)
    }
    const JX = {
        addField(UU, XU, zU, cU, yU) {
          if (XU >= 63) throw new Error(`Can't define field '${zU}'.\nSchema instances may only have up to 63 fields.`);
          UU[XU] = Object.assign(UU[XU] || {}, {
            type: cU,
            index: XU,
            name: zU
          }), Object.defineProperty(UU, PU, {
            value: UU[PU] || {},
            enumerable: !1,
            configurable: !0
          }), UU[PU][zU] = yU || {
            value: void 0,
            writable: !0,
            enumerable: !0,
            configurable: !0
          }, Object.defineProperty(UU, LU, {
            value: XU,
            enumerable: !1,
            configurable: !0
          }), Object.defineProperty(UU, zU, {
            value: XU,
            enumerable: !1,
            configurable: !0
          }), "string" === typeof UU[XU].type || fX(UU[XU].type) || (void 0 === UU[eU] && Object.defineProperty(UU, eU, {
            value: [],
            enumerable: !1,
            configurable: !0
          }), UU[eU].push(XU));
          const QU = UU[XU].type;
          if (QU && "object" === typeof QU && void 0 !== QU.stream) {
            if (void 0 !== QU.array) throw new Error(WX);
            UU[XU].stream = !0, UU[uU] || Object.defineProperty(UU, uU, {
              value: [],
              enumerable: !1,
              configurable: !0,
              writable: !0
            }), UU[uU].includes(XU) || UU[uU].push(XU);
            const yU = cU?.priority;
            "function" === typeof yU && JX.setStreamPriority(UU, zU, yU)
          }
        },
        setTag(UU, XU, zU) {
          const cU = UU[XU];
          if (UU[cU].tag = zU, UU[CU] || (Object.defineProperty(UU, CU, {
              value: [],
              enumerable: !1,
              configurable: !0
            }), Object.defineProperty(UU, wU, {
              value: {},
              enumerable: !1,
              configurable: !0
            })), UU[CU].push(cU), zU < 0) UU[wU][zU] || (UU[wU][zU] = []), UU[wU][zU].push(cU);
          else
            for (let yU = zU; yU > 0; yU &= yU - 1) {
              const XU = yU & -yU;
              UU[wU][XU] || (UU[wU][XU] = []), UU[wU][XU].push(cU)
            }
        },
        setUnreliable(UU, XU) {
          const zU = UU[XU];
          if ("string" !== typeof UU[zU].type) throw new Error(`@unreliable cannot be applied to ref-type field "${XU}". For ref-type fields, mark each primitive sub-field with @unreliable instead. See README "Limitations and best practices".`);
          UU[zU].unreliable = !0, UU[qU] || Object.defineProperty(UU, qU, {
            value: [],
            enumerable: !1,
            configurable: !0,
            writable: !0
          }), UU[qU].push(zU)
        },
        setPatchOnly(UU, XU) {
          const zU = UU[XU];
          if (UU[zU].fullStateOnly) throw new Error(`field "${XU}" cannot be both patchOnly and fullStateOnly \u2014 those are the only two delivery channels, so the field would never reach a client.`);
          UU[zU].patchOnly = !0, xX(UU, OU, zU), xX(UU, SU, zU)
        },
        setDeprecated(UU, XU) {
          const zU = UU[XU];
          UU[zU].deprecated = !0, xX(UU, SU, zU), Object.defineProperty(UU, zU, {
            value: UU[zU],
            enumerable: !1,
            configurable: !0
          })
        },
        setFullStateOnly(UU, XU) {
          const zU = UU[XU];
          if (UU[zU].patchOnly) throw new Error(`field "${XU}" cannot be both patchOnly and fullStateOnly \u2014 those are the only two delivery channels, so the field would never reach a client.`);
          UU[zU].fullStateOnly = !0, xX(UU, rU, zU)
        },
        setStream(UU, XU) {
          const zU = UU[XU];
          UU[zU].stream = !0, UU[uU] || Object.defineProperty(UU, uU, {
            value: [],
            enumerable: !1,
            configurable: !0,
            writable: !0
          }), UU[uU].push(zU)
        },
        setStreamPriority(UU, XU, zU) {
          const cU = UU[XU];
          UU[fU] || Object.defineProperty(UU, fU, {
            value: {},
            enumerable: !1,
            configurable: !0,
            writable: !0
          }), UU[fU][cU] = zU
        },
        getStreamPriority: (UU, XU) => UU?.[fU]?.[XU],
        defineField(UU, XU, zU, cU, yU) {
          const QU = sX(yU, `${UU.name}.${cU}`),
            {
              complexTypeKlass: AU,
              childType: FU
            } = VX(QU);
          JX.addField(XU, zU, cU, QU, Rc(cU, zU, FU, AU)), XU[PU][cU] && Object.defineProperty(UU.prototype, cU, XU[PU][cU]), ("string" === typeof QU || fX(QU)) && (XU[dU] || Object.defineProperty(XU, dU, {
            value: [],
            enumerable: !1,
            configurable: !0,
            writable: !0
          }), XU[dU][zU] = "string" === typeof QU ? XX[QU] : MX(QU.quantized))
        },
        setFields(UU, XU) {
          const zU = UU.prototype.constructor;
          vX.register(zU);
          const cU = Object.getPrototypeOf(zU),
            yU = cU && cU[Symbol.metadata],
            QU = JX.initialize(zU);
          zU[oU] || (zU[oU] = Cc[oU]), zU[DU] || (zU[DU] = Cc[DU]), zU[EU] || (zU[EU] = Cc[EU]), zU.prototype.toJSON || (zU.prototype.toJSON = Cc.prototype.toJSON);
          let AU = QU[LU] ?? (yU && yU[LU]) ?? -1;
          AU++, QU[dU] || Object.defineProperty(QU, dU, {
            value: yU?.[dU] ? [...yU[dU]] : [],
            enumerable: !1,
            configurable: !0,
            writable: !0
          });
          for (const FU in XU) {
            if (void 0 !== QU[FU]) throw new Error(`@colyseus/schema: Duplicate '${FU}' definition on '${zU.name||"(anonymous)"}'.`);
            JX.defineField(zU, QU, AU, FU, XU[FU]), AU++
          }
          return UU
        },
        isDeprecated: (UU, XU) => !0 === UU[XU].deprecated,
        initialize(UU) {
          const XU = Object.getPrototypeOf(UU),
            zU = XU[Symbol.metadata];
          let cU = UU[Symbol.metadata] ?? Object.create(null);
          if (XU !== Cc && cU === zU && (cU = Object.create(null), zU)) {
            Object.setPrototypeOf(cU, zU), Object.defineProperty(cU, LU, {
              value: zU[LU],
              enumerable: !1,
              configurable: !0,
              writable: !0
            }), void 0 !== zU[CU] && (Object.defineProperty(cU, CU, {
              value: [...zU[CU]],
              enumerable: !1,
              configurable: !0,
              writable: !0
            }), Object.defineProperty(cU, wU, {
              value: {
                ...zU[wU]
              },
              enumerable: !1,
              configurable: !0,
              writable: !0
            }));
            for (const UU of lX) {
              const XU = zU[UU];
              void 0 !== XU && Object.defineProperty(cU, UU, {
                value: [...XU],
                enumerable: !1,
                configurable: !0,
                writable: !0
              })
            }
            Object.defineProperty(cU, PU, {
              value: {
                ...zU[PU]
              },
              enumerable: !1,
              configurable: !0,
              writable: !0
            })
          }
          return Object.defineProperty(UU, Symbol.metadata, {
            value: cU,
            writable: !1,
            configurable: !0
          }), cU
        },
        isValidInstance: UU => UU.constructor[Symbol.metadata] && Object.prototype.hasOwnProperty.call(UU.constructor[Symbol.metadata], LU),
        getFields(UU) {
          const XU = UU[Symbol.metadata],
            zU = {};
          for (let cU = 0; cU <= XU[LU]; cU++) zU[XU[cU].name] = XU[cU].type;
          return zU
        },
        hasViewTagAtIndex: (UU, XU) => UU?.[CU]?.includes(XU),
        hasUnreliableAtIndex: (UU, XU) => UU?.[qU]?.includes(XU),
        hasPatchOnlyAtIndex: (UU, XU) => UU?.[OU]?.includes(XU),
        hasFullStateOnlyAtIndex: (UU, XU) => UU?.[rU]?.includes(XU),
        hasStreamAtIndex: (UU, XU) => UU?.[uU]?.includes(XU)
      },
      jX = (UU, XU, zU) => UU(XU, zU);
    class KX {
      dirtyLow = 0;
      dirtyHigh = 0;
      ops;
      constructor(UU) {
        this.ops = new Uint8Array(Math.max(UU + 1, 1))
      }
      record(UU, XU) {
        const zU = this.ops[UU];
        0 === zU ? this.ops[UU] = XU : (zU === yU.DELETE || zU === yU.ADD && XU === yU.DELETE_AND_ADD) && (this.ops[UU] = yU.DELETE_AND_ADD), UU < 32 ? this.dirtyLow |= 1 << UU : this.dirtyHigh |= 1 << UU - 32
      }
      recordDelete(UU, XU) {
        this.ops[UU] = XU, UU < 32 ? this.dirtyLow |= 1 << UU : this.dirtyHigh |= 1 << UU - 32
      }
      recordRaw(UU, XU) {
        this.record(UU, XU)
      }
      operationAt(UU) {
        const XU = this.ops[UU];
        return 0 === XU ? void 0 : XU
      }
      setOperationAt(UU, XU) {
        this.ops[UU] = XU
      }
      forEach(UU) {
        this.forEachWithCtx(UU, jX)
      }
      forEachWithCtx(UU, XU) {
        let zU = this.dirtyLow,
          cU = this.dirtyHigh;
        const yU = this.ops;
        for (; 0 !== zU;) {
          const cU = zU & -zU,
            QU = 31 - Math.clz32(cU);
          zU ^= cU, XU(UU, QU, yU[QU])
        }
        for (; 0 !== cU;) {
          const zU = cU & -cU,
            QU = 31 - Math.clz32(zU) + 32;
          cU ^= zU, XU(UU, QU, yU[QU])
        }
      }
      size() {
        return TX(this.dirtyLow) + TX(this.dirtyHigh)
      }
      has() {
        return 0 !== (this.dirtyLow | this.dirtyHigh)
      }
      reset() {
        this.dirtyLow = 0, this.dirtyHigh = 0, this.ops.fill(0)
      }
    }
    class bX {
      vp = new Map;
      pureOps = [];
      record(UU, XU) {
        const zU = this.vp.get(UU);
        void 0 === zU ? this.vp.set(UU, XU) : (zU === yU.DELETE || zU === yU.ADD && XU === yU.DELETE_AND_ADD) && this.vp.set(UU, yU.DELETE_AND_ADD)
      }
      recordDelete(UU, XU) {
        this.vp.set(UU, XU)
      }
      recordRaw(UU, XU) {
        this.vp.set(UU, XU)
      }
      recordPure(UU) {
        this.pureOps.push([this.vp.size, UU])
      }
      operationAt(UU) {
        return this.vp.get(UU)
      }
      setOperationAt(UU, XU) {
        this.vp.has(UU) && this.vp.set(UU, XU)
      }
      forEach(UU) {
        this.forEachWithCtx(UU, jX)
      }
      forEachWithCtx(UU, XU) {
        const zU = this.pureOps;
        if (zU.length > 0) {
          let cU = 0,
            yU = 0;
          for (const [QU, AU] of this.vp) {
            for (; cU < zU.length && zU[cU][0] <= yU;) {
              const yU = zU[cU++][1];
              XU(UU, -yU, yU)
            }
            XU(UU, QU, AU), yU++
          }
          for (; cU < zU.length;) {
            const yU = zU[cU++][1];
            XU(UU, -yU, yU)
          }
        } else
          for (const [cU, yU] of this.vp) XU(UU, cU, yU)
      }
      size() {
        return this.vp.size + this.pureOps.length
      }
      has() {
        return this.vp.size > 0 || this.pureOps.length > 0
      }
      reset() {
        this.vp.clear(), this.pureOps.length = 0
      }
      shift(UU) {
        const XU = new Map;
        for (const [zU, cU] of this.vp) XU.set(zU + UU, cU);
        this.vp = XU
      }
    }

    function TX(UU) {
      return 16843009 * ((UU = (858993459 & (UU -= UU >>> 1 & 1431655765)) + (UU >>> 2 & 858993459)) + (UU >>> 4) & 252645135) >>> 24
    }

    function hX(UU) {
      if (void 0 === UU) return 0;
      let XU = 0;
      for (let zU = 0, cU = UU.length; zU < cU; zU++) {
        const cU = UU[zU];
        cU < 32 && (XU |= 1 << cU)
      }
      return XU
    }

    function Uz(UU) {
      const XU = UU.constructor;
      if (Object.prototype.hasOwnProperty.call(XU, WU)) return XU[WU];
      const zU = XU[Symbol.metadata],
        cU = JX.isValidInstance(UU),
        yU = (zU?.[CU]?.length ?? 0) > 0,
        QU = function(UU) {
          const XU = [],
            zU = [],
            cU = [],
            yU = [],
            QU = UU?.[LU];
          if (void 0 === QU) return {
            names: XU,
            types: zU,
            tags: cU,
            encoders: yU
          };
          const AU = UU[dU];
          for (let FU = 0; FU <= QU; FU++) {
            const QU = UU[FU];
            void 0 !== QU ? (XU[FU] = QU.name, zU[FU] = QU.type, cU[FU] = QU.tag, yU[FU] = AU?.[FU]) : (XU[FU] = void 0, zU[FU] = void 0, cU[FU] = void 0, yU[FU] = void 0)
          }
          return {
            names: XU,
            types: zU,
            tags: cU,
            encoders: yU
          }
        }(zU),
        AU = cU && !yU ? void 0 : XU[YU],
        FU = {
          encoder: XU[DU],
          filter: AU,
          metadata: zU,
          isSchema: cU,
          filterBitmask: cU ? hX(zU?.[CU]) : 0,
          hasAnyFullStateOnly: (zU?.[rU]?.length ?? 0) > 0,
          hasAnyUnreliable: (zU?.[qU]?.length ?? 0) > 0,
          hasAnyStream: (zU?.[uU]?.length ?? 0) > 0,
          hasAnyView: yU,
          fullStateOnlyBitmask: hX(zU?.[rU]),
          unreliableBitmask: hX(zU?.[qU]),
          streamBitmask: hX(zU?.[uU]),
          names: QU.names,
          types: QU.types,
          tags: QU.tags,
          encoders: QU.encoders
        };
      return Object.defineProperty(XU, WU, {
        value: FU,
        enumerable: !1,
        writable: !0,
        configurable: !0
      }), FU
    }

    function Xz(UU, XU) {
      if (void 0 !== UU.parentRef && XU(UU.parentRef, UU._parentIndex)) return !0;
      for (let zU = UU.extraParents; void 0 !== zU; zU = zU.next)
        if (XU(zU.ref, zU.index)) return !0;
      return !1
    }
    const zz = (UU, XU) => {
        UU.isFieldUnreliable(XU) ? UU.ensureUnreliableRecorder().record(XU, yU.ADD) : UU.record(XU, yU.ADD)
      },
      cz = (UU, XU) => UU(XU);

    function yz(UU, XU, zU) {
      const cU = UU.refTarget;
      if (void 0 !== cU[tU]) {
        if (UU.isPatchOnly) return;
        if (Array.isArray(cU.items)) {
          const UU = cU.items;
          for (let cU = 0, yU = UU.length; cU < yU; cU++) void 0 !== UU[cU] && zU(XU, cU)
        } else if (void 0 !== cU.journal)
          for (const [UU, yU] of cU.journal.keyByIndex) cU.$items.has(yU) && zU(XU, UU);
        else if (void 0 !== cU.$items)
          for (const UU of cU.$items.keys()) zU(XU, UU)
      } else {
        const yU = UU.metadata;
        if (!yU) return;
        const QU = yU[LU] ?? -1,
          AU = yU[SU],
          FU = UU.encDescriptor.names;
        for (let UU = 0; UU <= QU; UU++) {
          const yU = FU[UU];
          if (void 0 === yU) continue;
          if (AU && AU.includes(UU)) continue;
          const QU = cU[yU];
          void 0 !== QU && null !== QU && zU(XU, UU)
        }
      }
    }

    function Qz(UU, XU, zU, cU) {
      ! function(UU, XU, zU) {
        if (!XU) return;
        const cU = XU[aU],
          yU = !cU._isSchema;
        let QU;
        yU ? (XU = cU.parent, zU = cU.parentIndex, QU = XU?.[aU].metadata) : QU = cU.metadata;
        const AU = (QU?.[OU]?.includes(zU) ? Wz : 0) | (QU?.[rU]?.includes(zU) ? dz : 0),
          FU = cU.flags & Cz | AU,
          oU = UU.flags;
        UU.flags = oU | FU;
        FU & ~oU & dz && (UU.reset(), UU.unreliableRecorder?.reset());
        const DU = UU.root?.types;
        if (!DU?.hasFilters) return;
        const EU = QU?.[CU]?.includes(zU) ?? !1,
          YU = QU?.[uU]?.includes(zU) ?? !1,
          NU = cU.isFiltered || EU || YU;
        if (UU.isFiltered = NU, YU && !yU) {
          UU.isStreamCollection = !0;
          const XU = LX(UU.ref);
          if (void 0 === XU.priority) {
            const UU = JX.getStreamPriority(QU, zU);
            void 0 !== UU && (XU.priority = UU)
          }
          UU.root?.registerStream(UU.ref)
        }
        if (NU) {
          const XU = Fz(UU);
          UU.isVisibilitySharedWithParent = cU.isFiltered && XU && !YU && (!EU || yU && QU[zU].tag !== pc)
        }
      }(UU, XU, zU), UU.isFullStateOnly || (UU.has() && UU.root?.enqueueChangeTree(UU), UU.unreliableRecorder?.has() && UU.root?.enqueueUnreliable(UU), UU.has() || UU.unreliableRecorder?.has() || UU.root?.enqueueChangeTree(UU))
    }

    function Az(UU) {
      const XU = UU.pendingFilterRefresh;
      for (let zU = 0; zU < XU.length; zU++) {
        const UU = XU[zU];
        0 !== (UU.flags & ez) && oz(UU)
      }
      XU.length = 0
    }

    function Fz(UU) {
      return UU._isSchema || "string" !== typeof UU.refTarget[tU]
    }

    function oz(UU) {
      UU.flags &= ~ez;
      const XU = UU.root;
      if (void 0 === XU || void 0 === UU.parentRef) return;
      const zU = Fz(UU);
      let cU = Iz(UU, UU.parentRef, UU._parentIndex, zU);
      for (let QU = UU.extraParents; void 0 !== QU && cU !== Nz; QU = QU.next) cU |= Iz(UU, QU.ref, QU.index, zU);
      if (0 === cU) return;
      UU.isVisibilitySharedWithParent = 0 !== (cU & Yz);
      const yU = 0 === (cU & Ez);
      yU !== UU.isFiltered && (UU.isFiltered = yU, yU || UU.isFullStateOnly || (UU.forEachLiveWithCtx(UU, zz), UU.has() && XU.enqueueChangeTree(UU), UU.unreliableRecorder?.has() && XU.enqueueUnreliable(UU)), UU.forEachChildWithCtx(UU, pz))
    }
    const Dz = 1,
      Ez = 2,
      Yz = 4,
      Nz = Dz | Ez | Yz;

    function Iz(UU, XU, zU, cU) {
      const yU = XU[aU];
      if (yU.root !== UU.root || ! function(UU, XU, zU) {
          const cU = XU.refTarget;
          if (XU.isArray) {
            const XU = cU.items,
              yU = XU[zU];
            if (void 0 !== yU && yU[aU] === UU) return !0;
            for (let zU = 0, cU = XU.length; zU < cU; zU++) {
              const cU = XU[zU];
              if (void 0 !== cU && cU[aU] === UU) return !0
            }
            return !1
          }
          const yU = XU.getValue(zU);
          return void 0 !== yU && yU[aU] === UU
        }(UU, yU, zU)) return 0;
      yU.flags & ez && oz(yU);
      let QU = Dz;
      if (yU._isSchema) {
        void 0 !== yU.encDescriptor.tags[zU] || yU.isFieldStream(zU) || (yU.isFiltered ? cU && (QU |= Yz) : QU |= Ez)
      } else if (yU.isFiltered) {
        if (cU && !yU.isStreamCollection) {
          const UU = yU.parent?.[aU];
          (UU?._isSchema ? UU.encDescriptor.tags[yU.parentIndex] : void 0) !== pc && (QU |= Yz)
        }
      } else QU |= Ez;
      return QU
    }
    const pz = (UU, XU, zU) => {
      oz(XU)
    };

    function az(UU, XU, zU, cU) {
      if (UU.addParent(XU, cU), !zU) return;
      const yU = zU.add(UU);
      zU !== UU.root && (UU.root = zU, Qz(UU, XU, cU));
      const QU = XU?.[aU];
      if (void 0 !== QU && void 0 !== QU.subscribedViews && void 0 !== XU[tU] && function(UU, XU, zU, cU) {
          const yU = UU.subscribedViews;
          if (void 0 === yU) return;
          const QU = UU.isStreamCollection,
            AU = QU ? UU.ref : void 0,
            FU = QU ? void 0 : zU[aU];
          for (let oU = 0, DU = yU.length; oU < DU; oU++) {
            let UU = yU[oU];
            for (; 0 !== UU;) {
              const zU = UU & -UU;
              UU ^= zU;
              const DU = 32 * oU + (31 - Math.clz32(zU)),
                EU = cU.activeViews.get(DU),
                YU = EU?.deref();
              void 0 !== YU ? QU ? OX(AU, DU, XU) : void 0 !== FU && YU.markVisible(FU) : yU[oU] &= ~zU
            }
          }
        }(QU, cU, UU.ref, zU), yU) {
        let XU = Gz[Bz];
        void 0 === XU && (XU = {
          parentRef: void 0,
          root: void 0
        }, Gz[Bz] = XU), XU.parentRef = UU.ref, XU.root = zU, Bz++, gz(UU, XU, Zz), Bz--
      }
    }

    function tz(UU, XU, zU) {
      UU(XU, zU)
    }

    function gz(UU, XU, zU) {
      const cU = UU.refTarget;
      if (cU[tU]) {
        if ("string" !== typeof cU[tU]) {
          const UU = cU.items;
          if (void 0 !== UU)
            for (let cU = 0, yU = UU.length; cU < yU; cU++) {
              const yU = UU[cU];
              yU && zU(XU, yU[aU], cU)
            } else {
              const UU = cU.$items,
                yU = cU._collectionIndexes;
              for (const cU of UU.keys()) {
                const QU = UU.get(cU);
                QU && zU(XU, QU[aU], yU?.[cU] ?? cU)
              }
            }
        }
      } else {
        const yU = UU.metadata,
          QU = yU?.[eU];
        if (!QU) return;
        const AU = UU.encDescriptor.names;
        for (let UU = 0, FU = QU.length; UU < FU; UU++) {
          const yU = QU[UU],
            FU = cU[AU[yU]];
          FU && zU(XU, FU[aU], yU)
        }
      }
    }

    function kz(UU, XU, zU) {
      XU.root !== UU ? XU.setRoot(UU) : UU.add(XU)
    }
    const Gz = [];
    let Bz = 0;

    function Zz(UU, XU, zU) {
      if (XU.root === UU.root) return UU.root.add(XU), void UU.root.moveNextToParent(XU);
      XU.setParent(UU.parentRef, UU.root, zU)
    }

    function Rz(UU, XU, zU) {
      const cU = (3 & zU) << 3;
      return zU < 4 ? UU >>> cU & 255 : XU >>> cU & 255
    }
    const Pz = (UU, XU, zU) => UU(XU, zU);
    const Wz = 16,
      dz = 32,
      Lz = 128,
      ez = 256,
      Cz = Wz | dz;
    class wz {
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
        return 0 !== (this.flags & Wz)
      }
      set isPatchOnly(UU) {
        this.flags = UU ? this.flags | Wz : this.flags & ~Wz
      }
      get isFullStateOnly() {
        return 0 !== (this.flags & dz)
      }
      set isFullStateOnly(UU) {
        this.flags = UU ? this.flags | dz : this.flags & ~dz
      }
      get isStreamCollection() {
        return 0 !== (64 & this.flags)
      }
      set isStreamCollection(UU) {
        this.flags = UU ? 64 | this.flags : -65 & this.flags
      }
      get needsRestage() {
        return 0 !== (this.flags & Lz)
      }
      set needsRestage(UU) {
        this.flags = UU ? this.flags | Lz : -129 & this.flags
      }
      get hasFilteredFields() {
        return this.isFiltered || this.encDescriptor.hasAnyView
      }
      ensureUnreliableRecorder() {
        return void 0 === this.unreliableRecorder && (this.unreliableRecorder = this._isSchema ? new KX(this.metadata?.[LU] ?? 0) : new bX), this.unreliableRecorder
      }
      isFieldUnreliable(UU) {
        const XU = this.encDescriptor;
        return !!XU.hasAnyUnreliable && (UU < 32 ? 0 !== (XU.unreliableBitmask & 1 << UU) : JX.hasUnreliableAtIndex(this.metadata, UU))
      }
      isFieldFullStateOnly(UU) {
        if (this.isFullStateOnly) return !0;
        const XU = this.encDescriptor;
        return !!XU.hasAnyFullStateOnly && (UU < 32 ? 0 !== (XU.fullStateOnlyBitmask & 1 << UU) : JX.hasFullStateOnlyAtIndex(this.metadata, UU))
      }
      isFieldStream(UU) {
        const XU = this.encDescriptor;
        return !!XU.hasAnyStream && (UU < 32 ? 0 !== (XU.streamBitmask & 1 << UU) : JX.hasStreamAtIndex(this.metadata, UU))
      }
      constructor(UU) {
        let XU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : UU;
        this.ref = UU, this.refTarget = XU;
        const zU = Uz(UU);
        this.encDescriptor = zU, this.metadata = zU.metadata;
        const cU = zU.isSchema;
        if (this._isSchema = cU, this.ops = void 0, this.collDirty = void 0, this.collPureOps = void 0, cU) {
          const UU = this.metadata?.[LU] ?? 0;
          UU > 7 && (this.ops = new Uint8Array(UU + 1))
        } else this.collDirty = new Map
      }
      _opAt(UU) {
        const XU = this.ops;
        if (void 0 !== XU) return XU[UU];
        const zU = (3 & UU) << 3;
        return UU < 4 ? this.opsLow >>> zU & 255 : this.opsHigh >>> zU & 255
      }
      _opPut(UU, XU) {
        const zU = this.ops;
        if (void 0 !== zU) return void(zU[UU] = XU);
        const cU = (3 & UU) << 3,
          yU = ~(255 << cU);
        UU < 4 ? this.opsLow = this.opsLow & yU | XU << cU : this.opsHigh = this.opsHigh & yU | XU << cU
      }
      _markDirty(UU) {
        UU < 32 ? this.dirtyLow |= 1 << UU : this.dirtyHigh |= 1 << UU - 32
      }
      record(UU, XU) {
        if (this._isSchema) {
          const zU = this._opAt(UU);
          0 === zU ? this._opPut(UU, XU) : (zU === yU.DELETE || zU === yU.ADD && XU === yU.DELETE_AND_ADD) && this._opPut(UU, yU.DELETE_AND_ADD), this._markDirty(UU)
        } else {
          const zU = this.collDirty,
            cU = zU.get(UU);
          let QU;
          QU = void 0 === cU ? XU : cU === yU.DELETE || cU === yU.ADD && XU === yU.DELETE_AND_ADD ? yU.DELETE_AND_ADD : cU, zU.set(UU, QU)
        }
      }
      recordDelete(UU, XU) {
        this._isSchema ? (this._opPut(UU, XU), this._markDirty(UU)) : this.collDirty.set(UU, XU)
      }
      recordRaw(UU, XU) {
        this._isSchema ? (this._opPut(UU, XU), this._markDirty(UU)) : this.collDirty.set(UU, XU)
      }
      recordPure(UU) {
        if (this._isSchema) throw new Error("ChangeTree (Schema): pure operations are not supported");
        (this.collPureOps ??= []).push([this.collDirty.size, UU])
      }
      operationAt(UU) {
        if (this._isSchema) {
          const XU = this._opAt(UU);
          return 0 === XU ? void 0 : XU
        }
        return this.collDirty.get(UU)
      }
      setOperationAt(UU, XU) {
        if (this._isSchema) this._opPut(UU, XU);
        else {
          const zU = this.collDirty;
          zU.has(UU) && zU.set(UU, XU)
        }
      }
      forEach(UU) {
        this.forEachWithCtx(UU, Pz)
      }
      forEachWithCtx(UU, XU) {
        if (this._isSchema) {
          let zU = this.dirtyLow,
            cU = this.dirtyHigh;
          const yU = this.ops;
          if (void 0 !== yU) {
            for (; 0 !== zU;) {
              const cU = zU & -zU,
                QU = 31 - Math.clz32(cU);
              zU ^= cU, XU(UU, QU, yU[QU])
            }
            for (; 0 !== cU;) {
              const zU = cU & -cU,
                QU = 31 - Math.clz32(zU) + 32;
              cU ^= zU, XU(UU, QU, yU[QU])
            }
          } else {
            const cU = this.opsLow,
              yU = this.opsHigh;
            for (; 0 !== zU;) {
              const QU = zU & -zU,
                AU = 31 - Math.clz32(QU);
              zU ^= QU, XU(UU, AU, Rz(cU, yU, AU))
            }
          }
          return
        }
        const zU = this.collDirty,
          cU = this.collPureOps;
        if (void 0 !== cU && cU.length > 0) {
          let yU = 0,
            QU = 0;
          for (const [AU, FU] of zU) {
            for (; yU < cU.length && cU[yU][0] <= QU;) {
              const zU = cU[yU++][1];
              XU(UU, -zU, zU)
            }
            XU(UU, AU, FU), QU++
          }
          for (; yU < cU.length;) {
            const zU = cU[yU++][1];
            XU(UU, -zU, zU)
          }
        } else
          for (const [yU, QU] of zU) XU(UU, yU, QU)
      }
      size() {
        return this._isSchema ? TX(this.dirtyLow) + TX(this.dirtyHigh) : this.collDirty.size + (this.collPureOps?.length ?? 0)
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
      insertAt(UU, XU) {
        if (this._isSchema) throw new Error("ChangeTree (Schema): insertAt is not supported");
        const zU = this.collDirty,
          cU = new Map,
          QU = !this.paused && !this.isFullStateOnly;
        if (UU > 0)
          for (const [yU, AU] of zU) yU < UU && cU.set(yU, AU);
        if (QU)
          for (let AU = 0; AU < XU; AU++) cU.set(UU + AU, yU.ADD);
        for (const [yU, AU] of zU) yU >= UU && cU.set(yU + XU, AU);
        this.collDirty = cU, QU && this.root?.enqueueChangeTree(this)
      }
      removeAt(UU, XU) {
        if (this._isSchema) throw new Error("ChangeTree (Schema): removeAt is not supported");
        const zU = this.collDirty,
          cU = UU + XU;
        let yU = !1;
        for (const AU of zU.keys())
          if (AU >= cU) {
            yU = !0;
            break
          } if (!yU) {
          for (let XU = UU; XU < cU; XU++) zU.delete(XU);
          return
        }
        const QU = new Map;
        for (const [AU, FU] of zU) AU < UU ? QU.set(AU, FU) : AU >= cU && QU.set(AU - XU, FU);
        this.collDirty = QU
      }
      unshift(UU) {
        this.insertAt(0, UU)
      }
      setRoot(UU) {
        ! function(UU, XU) {
          UU.root = XU;
          const zU = XU.add(UU);
          Qz(UU, UU.parent, UU.parentIndex), zU && gz(UU, XU, kz)
        }(this, UU)
      }
      setParent(UU, XU, zU) {
        az(this, UU, XU, zU)
      }
      forEachChild(UU) {
        gz(this, UU, tz)
      }
      forEachChildWithCtx(UU, XU) {
        gz(this, UU, XU)
      }
      forEachLive(UU) {
        yz(this, UU, cz)
      }
      forEachLiveWithCtx(UU, XU) {
        yz(this, UU, XU)
      }
      operation(UU) {
        this.paused || this.isFullStateOnly || (this.recordPure(UU), this.root?.enqueueChangeTree(this))
      }
      _routeAndRecord(UU, XU, zU) {
        if (!this.paused && !this.isFieldFullStateOnly(UU)) {
          if (this.isFieldUnreliable(UU) && !this.isNew) {
            const cU = this.ensureUnreliableRecorder();
            return zU ? cU.recordRaw(UU, XU) : cU.record(UU, XU), void this.root?.enqueueUnreliable(this)
          }
          zU ? this.recordRaw(UU, XU) : this.record(UU, XU), this.root?.enqueueChangeTree(this)
        }
      }
      change(UU) {
        let XU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : yU.ADD;
        this._routeAndRecord(UU, XU, !1)
      }
      indexedOperation(UU, XU) {
        this._routeAndRecord(UU, XU, !0)
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
        const XU = this.paused;
        this.paused = !0;
        try {
          return UU()
        } finally {
          this.paused = XU
        }
      }
      markDirty(UU) {
        let XU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : yU.ADD;
        const zU = this.paused;
        this.paused = !1;
        try {
          this.change(UU, XU)
        } finally {
          this.paused = zU
        }
      }
      getValue(UU) {
        let XU = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return this.refTarget[NU](UU, XU)
      }
      delete(UU, XU) {
        if (void 0 === UU) {
          try {
            throw new Error(`@colyseus/schema ${this.ref.constructor.name}: trying to delete non-existing index '${UU}'`)
          } catch (Qy) {
            console.warn(Qy)
          }
          return
        }
        if (this.paused || this.isFieldFullStateOnly(UU)) return this.getValue(UU);
        const zU = this.isFieldUnreliable(UU) && !this.isNew;
        zU ? this.ensureUnreliableRecorder().recordDelete(UU, XU ?? yU.DELETE) : this.recordDelete(UU, XU ?? yU.DELETE);
        const cU = this.getValue(UU);
        return cU && cU[aU] && this.root?.remove(cU[aU]), zU ? this.root?.enqueueUnreliable(this) : this.root?.enqueueChangeTree(this), cU
      }
      endEncode() {
        this.reset(), this.changesNode = void 0, this._isSchema || this.refTarget[kU]?.(), this.isNew = !1
      }
      endEncodeUnreliable() {
        this.unreliableRecorder?.reset(), this.unreliableChangesNode = void 0, this._isSchema || this.refTarget[kU]?.()
      }
      discard() {
        this._isSchema || this.refTarget[kU]?.(), this.reset(), this.unreliableRecorder?.reset()
      }
      discardAll() {
        const UU = UU => {
          if (UU < 0) return;
          const XU = this.getValue(UU);
          XU && XU[aU] && XU[aU].discardAll()
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
      addParent(UU, XU) {
        ! function(UU, XU, zU) {
          if (UU.parentRef) {
            if (UU.parentRef[aU] === XU[aU]) return void(UU._parentIndex = zU);
            if (Xz(UU, ((UU, zU) => UU[aU] === XU[aU]))) return void(UU._parentIndex = zU)
          }
          void 0 === UU.parentRef ? (UU.parentRef = XU, UU._parentIndex = zU) : (UU.extraParents = {
            ref: UU.parentRef,
            index: UU._parentIndex,
            next: UU.extraParents
          }, UU.parentRef = XU, UU._parentIndex = zU)
        }(this, UU, XU)
      }
      setParentIndex(UU, XU) {
        ! function(UU, XU, zU) {
          if (void 0 !== UU.extraParents)
            if (UU.parentRef[aU] !== XU[aU]) {
              for (let cU = UU.extraParents; void 0 !== cU; cU = cU.next)
                if (cU.ref[aU] === XU[aU]) return void(cU.index = zU)
            } else UU._parentIndex = zU;
          else UU._parentIndex = zU
        }(this, UU, XU)
      }
      removeParent() {
        return function(UU, XU) {
          if (UU.parentRef && UU.parentRef[aU] === XU[aU]) return UU.extraParents ? (UU.parentRef = UU.extraParents.ref, UU._parentIndex = UU.extraParents.index, UU.extraParents = UU.extraParents.next) : (UU.parentRef = void 0, UU._parentIndex = void 0), !0;
          let zU = UU.extraParents,
            cU = null;
          for (; zU;) {
            if (zU.ref[aU] === XU[aU]) return cU ? cU.next = zU.next : UU.extraParents = zU.next, !0;
            cU = zU, zU = zU.next
          }
          return void 0 === UU.parentRef
        }(this, arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.parent)
      }
      findParent(UU) {
        return function(UU, XU) {
          if (void 0 !== UU.parentRef && XU(UU.parentRef, UU._parentIndex)) return {
            ref: UU.parentRef,
            index: UU._parentIndex
          };
          for (let zU = UU.extraParents; void 0 !== zU; zU = zU.next)
            if (XU(zU.ref, zU.index)) return {
              ref: zU.ref,
              index: zU.index
            }
        }(this, UU)
      }
      hasParent(UU) {
        return Xz(this, UU)
      }
      indexInParent(UU) {
        return function(UU, XU) {
          if (UU.parentRef && UU.parentRef[aU] === XU[aU]) return UU._parentIndex;
          for (let zU = UU.extraParents; void 0 !== zU; zU = zU.next)
            if (zU.ref[aU] === XU[aU]) return zU.index
        }(this, UU)
      }
      getAllParents() {
        return function(UU) {
          const XU = [];
          UU.parentRef && XU.push({
            ref: UU.parentRef,
            index: UU._parentIndex
          });
          let zU = UU.extraParents;
          for (; zU;) XU.push({
            ref: zU.ref,
            index: zU.index
          }), zU = zU.next;
          return XU
        }(this)
      }
    }
    class qz {
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
        const XU = this.ref;
        if (XU[tU]) {
          if ("string" !== typeof XU[tU])
            for (const [zU, cU] of XU.entries()) cU && UU(cU[aU], XU._collectionIndexes?.[zU] ?? zU);
          return
        }
        const zU = XU.constructor,
          cU = zU?.[Symbol.metadata];
        if (!cU) return;
        const yU = cU[eU] ?? [];
        for (let QU = 0; QU < yU.length; QU++) {
          const zU = yU[QU],
            AU = XU[cU[zU].name];
          AU && UU(AU[aU], zU)
        }
      }
      forEachChildWithCtx(UU, XU) {
        this.forEachChild(((zU, cU) => XU(UU, zU, cU)))
      }
      forEachLive() {}
      forEachLiveWithCtx() {}
      forEach() {}
    }

    function Oz(UU) {
      let XU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : UU;
      var zU;
      Object.defineProperty(UU, aU, {
        value: (zU = XU, new qz(zU)),
        enumerable: !1,
        writable: !0
      })
    }

    function Sz(UU, XU, zU, cU, QU, AU, oU) {
      void 0 !== oU ? oU(XU, cU, AU) : "string" === typeof zU ? XX[zU]?.(XU, cU, AU) : null != zU[Symbol.metadata] ? (XX.number(XU, cU[FU], AU), (QU & yU.ADD) === yU.ADD && UU.tryEncodeTypeId(XU, zU, cU.constructor, AU)) : XX.number(XU, cU[FU], AU)
    }
    const rz = function(UU, XU, zU, cU, QU, AU, FU, oU) {
        if (XU[AU.offset++] = 255 & (cU | QU), QU === yU.DELETE) return;
        const DU = zU.encDescriptor,
          EU = zU.ref,
          YU = EU[ZU][cU] ?? EU[DU.names[cU]];
        Sz(UU, XU, DU.types[cU], YU, QU, AU, DU.encoders[cU])
      },
      uz = function(UU, XU, zU, cU, QU, AU) {
        if (XU[AU.offset++] = 255 & QU, XX.number(XU, cU, AU), QU === yU.DELETE) return;
        const FU = zU.ref;
        if ((QU & yU.ADD) === yU.ADD) {
          const UU = FU.$indexes.get(cU);
          XX.string(XU, UU, AU)
        }
        Sz(UU, XU, FU[tU], FU[NU](cU), QU, AU)
      },
      fz = function(UU, XU, zU, cU, QU, AU) {
        if (XU[AU.offset++] = 255 & QU, XX.number(XU, cU, AU), QU === yU.DELETE) return;
        const FU = zU.ref;
        Sz(UU, XU, FU[tU], FU[NU](cU), QU, AU)
      },
      iz = function(UU, XU, zU, cU, QU, AU) {
        const FU = zU.ref;
        (QU & yU.ADD) === yU.ADD && "function" === typeof FU.set ? uz(UU, XU, zU, cU, QU, AU) : fz(UU, XU, zU, cU, QU, AU)
      },
      Hz = function(UU, XU, zU, cU, QU, AU, oU, DU) {
        const EU = zU.refTarget,
          YU = EU[tU],
          IU = "string" !== typeof YU;
        let pU;
        if (DU && zU.isFiltered && IU) {
          const UU = EU.tmpItems[cU];
          if (!UU) return;
          if (pU = UU[FU], QU === yU.DELETE) QU = yU.DELETE_BY_REFID;
          else if ((QU & yU.ADD) === yU.ADD) QU = yU.ADD_BY_REFID;
          else if ((QU & yU.MOVE) === yU.MOVE) return
        } else if (QU === yU.DELETE && IU) {
          const UU = EU.tmpItems[cU];
          if (!UU) return;
          pU = UU[FU], QU = yU.DELETE_BY_REFID
        } else pU = cU;
        if (XU[AU.offset++] = 255 & QU, XX.number(XU, pU, AU), QU === yU.DELETE || QU === yU.DELETE_BY_REFID) return;
        Sz(UU, XU, YU, EU[NU](cU, oU), QU, AU)
      };

    function Mz(UU, XU, zU, cU, QU, AU, oU) {
      const DU = UU.resyncVisited;
      let EU = DU.get(UU.currentRefId);
      if (void 0 === EU && DU.set(UU.currentRefId, EU = new Set), EU.add(cU), void 0 !== QU && zU === yU.ADD && QU !== AU) {
        const zU = QU[FU];
        void 0 !== zU && (UU.root.removeRef(zU), oU?.push({
          ref: XU,
          refId: UU.currentRefId,
          op: yU.DELETE,
          dynamicIndex: cU,
          value: void 0,
          previousValue: QU
        }))
      }
    }

    function vz(UU, XU, zU, cU) {
      const yU = XU[FU];
      if (void 0 === yU || zU.has(yU)) return;
      zU.add(yU);
      const QU = XU.constructor[Symbol.metadata],
        AU = QU?.[eU];
      if (void 0 === AU) return;
      const oU = QU[OU];
      for (let FU = 0; FU < AU.length; FU++) {
        const yU = AU[FU];
        if (void 0 !== oU && oU.includes(yU)) continue;
        const DU = QU[yU],
          EU = XU[DU.name];
        EU && (Cc.is(DU.type) ? vz(UU, EU, zU, cU) : Vz(UU, EU, zU, cU))
      }
    }

    function Vz(UU, XU, zU, cU) {
      const QU = XU[gU] ?? XU,
        AU = QU[FU];
      if (void 0 === AU || zU.has(AU)) return;
      zU.add(AU);
      const oU = UU.resyncVisited.get(AU);
      if (void 0 === oU) return;
      const DU = UU.root;
      QU[pU](oU, ((UU, zU) => {
        cU?.push({
          ref: XU,
          refId: AU,
          op: yU.DELETE,
          dynamicIndex: zU,
          value: void 0,
          previousValue: UU
        });
        const QU = UU?.[FU];
        void 0 !== QU && DU.removeRef(QU)
      }), (XU => {
        Cc.isSchema(XU) && vz(UU, XU, zU, cU)
      }))
    }
    const sz = 1,
      nz = 2,
      mz = 3,
      lz = 4,
      xz = 5;

    function Jz(UU, XU, zU, cU, QU, AU, oU, DU, EU) {
      const YU = UU.root;
      let NU;
      if ((XU & yU.DELETE) === yU.DELETE) {
        const UU = QU?.[FU];
        void 0 !== UU && YU.removeRef(UU), XU !== yU.DELETE_AND_ADD && zU[IU](cU), NU = void 0
      }
      if (XU === yU.DELETE);
      else if ("string" === typeof AU) NU = GX[AU](oU, DU);
      else if (fX(AU)) NU = function(UU, XU, zU) {
        return HX(UU, (0, GX[UU.wire])(XU, zU))
      }(AU.quantized, oU, DU);
      else if (Cc.is(AU)) {
        const zU = GX.number(oU, DU);
        if (NU = YU.refs.get(zU), (XU & yU.ADD) === yU.ADD) {
          const cU = UU.getInstanceType(oU, DU, AU);
          NU || (NU = UU.createInstanceOfType(cU)), YU.addRef(zU, NU, NU !== QU || XU === yU.DELETE_AND_ADD && NU === QU)
        }
      } else {
        const zU = (pU = Object.keys(AU)[0], BX[pU]),
          cU = GX.number(oU, DU);
        null !== UU.resyncVisited && function(UU, XU) {
          const zU = UU.resyncVisited;
          zU.has(XU) || zU.set(XU, new Set)
        }(UU, cU);
        const IU = YU.refs.has(cU) ? QU || YU.refs.get(cU) : zU.constructor.initializeForDecoder();
        if (NU = IU.clone(!0), NU[tU] = Object.values(AU)[0], QU) {
          let UU = QU[FU];
          if (void 0 !== UU && cU !== UU) {
            (XU & yU.DELETE) !== yU.DELETE && YU.removeRef(UU);
            const zU = QU.entries();
            let cU;
            for (;
              (cU = zU.next()) && !cU.done;) {
              const [XU, zU] = cU.value;
              "object" === typeof zU && (UU = zU[FU]), EU?.push({
                ref: QU,
                refId: UU,
                op: yU.DELETE,
                field: XU,
                value: void 0,
                previousValue: zU
              })
            }
          }
        }
        YU.addRef(cU, NU, IU !== QU || XU === yU.DELETE_AND_ADD && IU === QU)
      }
      var pU;
      return NU
    }
    const jz = function(UU, XU, zU, cU, yU) {
        const QU = XU[zU.offset++],
          AU = cU.constructor[Symbol.metadata],
          FU = QU >> 6 << 6,
          oU = QU % (FU || 255),
          DU = AU[oU];
        if (void 0 === DU) return console.warn("@colyseus/schema: field not defined at", {
          index: oU,
          ref: cU.constructor.name,
          metadata: AU
        }), -1;
        const EU = !0 === DU.deprecated,
          YU = EU ? void 0 : cU[NU](oU),
          IU = Jz(UU, FU, cU, oU, YU, DU.type, XU, zU, yU);
        EU || (null !== IU && void 0 !== IU && (cU[DU.name] = IU), YU !== IU && yU?.push({
          ref: cU,
          refId: UU.currentRefId,
          op: FU,
          field: DU.name,
          value: IU,
          previousValue: YU
        }))
      },
      Kz = function(UU, XU, zU, cU, QU) {
        const AU = cU[gU] ?? cU,
          FU = XU[zU.offset++];
        if (FU === yU.CLEAR) return UU.removeChildRefs(AU, QU), void AU.clear();
        const oU = GX.number(XU, zU),
          DU = AU[tU],
          EU = AU.constructor.COLLECTION_KIND;
        let YU;
        (FU & yU.ADD) === yU.ADD ? EU === sz ? (YU = GX.string(XU, zU), AU.setIndex(oU, YU)) : YU = oU : YU = AU.getIndex(oU);
        const IU = AU[NU](oU),
          pU = Jz(UU, FU, cU, oU, IU, DU, XU, zU, QU);
        if (null !== UU.resyncVisited && Mz(UU, cU, FU, YU, IU, pU, QU), null !== pU && void 0 !== pU) switch (EU) {
          case sz:
            AU.$items.set(YU, pU);
            break;
          case nz:
            AU.$setAt(oU, pU, null !== UU.resyncVisited && FU === yU.ADD ? yU.REPLACE : FU);
            break;
          case mz:
          case lz:
          case xz:
            AU.$items.has(oU) || (AU.$items.set(oU, pU), "number" === typeof AU.$refId && oU >= AU.$refId && (AU.$refId = oU + 1));
            break;
          default:
            console.warn(`@colyseus/schema: missing COLLECTION_KIND on ${AU.constructor?.name} \u2014 item at index ${oU} was not stored.`)
        }
        IU !== pU && QU?.push({
          ref: cU,
          refId: UU.currentRefId,
          op: FU,
          dynamicIndex: YU,
          value: pU,
          previousValue: IU
        })
      },
      bz = function(UU, XU, zU, cU, QU) {
        const AU = cU[gU] ?? cU;
        let FU, oU = XU[zU.offset++];
        if (oU === yU.CLEAR) return UU.removeChildRefs(AU, QU), void AU.clear();
        if (oU === yU.REVERSE) return void AU.items.reverse();
        if (oU === yU.DELETE_BY_REFID) {
          const oU = GX.number(XU, zU),
            DU = UU.root.refs.get(oU);
          if (void 0 === DU) return;
          if (UU.root.removeRef(oU), FU = AU.findIndex((UU => UU === DU)), -1 === FU) return;
          return AU[IU](FU), void QU?.push({
            ref: cU,
            refId: UU.currentRefId,
            op: yU.DELETE,
            dynamicIndex: FU,
            value: void 0,
            previousValue: DU
          })
        }
        if (oU === yU.ADD_BY_REFID) {
          const cU = GX.number(XU, zU),
            yU = UU.root.refs.get(cU);
          yU && (FU = AU.findIndex((UU => UU === yU))), -1 !== FU && void 0 !== FU || (FU = AU.length)
        } else FU = GX.number(XU, zU);
        const DU = AU[tU];
        let EU = FU;
        const YU = AU.items[FU],
          NU = Jz(UU, oU, cU, FU, YU, DU, XU, zU, QU);
        null !== UU.resyncVisited && Mz(UU, cU, oU, FU, YU, NU, QU), null !== NU && void 0 !== NU && NU !== YU && AU.$setAt(FU, NU, null !== UU.resyncVisited && oU === yU.ADD ? yU.REPLACE : oU), YU !== NU && QU?.push({
          ref: cU,
          refId: UU.currentRefId,
          op: oU,
          dynamicIndex: EU,
          value: NU,
          previousValue: YU
        })
      };
    class Tz extends Error {}

    function hz(UU, XU, zU, cU) {
      if (!(UU instanceof XU)) throw new Tz(`a '${XU.name}' was expected, but '${UU&&UU.constructor.name}' was provided in ${zU.constructor.name}#${cU}`)
    }
    const Uc = (UU, XU) => {
        const zU = UU.toString(),
          cU = XU.toString();
        return zU < cU ? -1 : zU > cU ? 1 : 0
      },
      Xc = {
        get: (UU, XU) => "symbol" === typeof XU || isNaN(XU) ? Reflect.get(UU, XU) : UU.items[XU],
        set: (UU, XU, zU) => {
          if ("symbol" !== typeof XU && !isNaN(XU)) {
            if (void 0 === zU || null === zU) UU.$deleteAt(XU);
            else {
              let cU;
              if (zU[aU]) {
                hz(zU, UU[tU], UU, XU);
                const QU = UU.items[XU];
                UU.isMovingItems ? (cU = UU.$wireIndex(Number(XU)), void 0 !== QU ? zU[aU].isNew ? UU[aU].indexedOperation(cU, yU.MOVE_AND_ADD) : (UU[aU].getChange(cU) & yU.DELETE) === yU.DELETE ? UU[aU].indexedOperation(cU, yU.DELETE_AND_MOVE) : UU[aU].indexedOperation(cU, yU.MOVE) : zU[aU].isNew && UU[aU].indexedOperation(cU, yU.ADD), zU[aU].setParent(UU, UU[aU].root, cU)) : cU = UU.$changeAt(Number(XU), zU), void 0 !== QU && QU[aU].root?.remove(QU[aU])
              } else cU = UU.$changeAt(Number(XU), zU);
              UU.items[XU] = zU, void 0 !== cU && (UU.tmpItems[cU] = zU)
            }
            return !0
          }
          return Reflect.set(UU, XU, zU)
        },
        deleteProperty: (UU, XU) => ("number" === typeof XU ? UU.$deleteAt(XU) : delete UU[XU], !0),
        has: (UU, XU) => "symbol" === typeof XU || isNaN(Number(XU)) ? Reflect.has(UU, XU) : Reflect.has(UU.items, XU)
      };
    class zc {
      [aU];
      [FU];
      [gU];
      [tU];
      items = [];
      tmpItems = [];
      deletedIndexes = [];
      isMovingItems = !1;
      _needsCompaction = !1;
      static[DU] = Hz;
      static[EU] = bz;
      static COLLECTION_KIND = nz;
      static[YU](UU, XU, zU) {
        if (!zU) return !0;
        const cU = UU[gU] ?? UU;
        return "string" === typeof cU[tU] || zU.isChangeTreeVisible(cU.tmpItems[XU]?.[aU])
      }
      static is(UU) {
        return Array.isArray(UU) || void 0 !== UU.array
      }
      static from(UU) {
        return new zc(...Array.from(UU))
      }
      constructor() {
        this[tU] = void 0, this[gU] = this;
        const UU = new Proxy(this, Xc);
        return Object.defineProperty(this, aU, {
          value: new wz(UU, this),
          enumerable: !1,
          writable: !0
        }), arguments.length > 0 && this.push(...arguments), UU
      }
      static initializeForDecoder() {
        const UU = Object.create(zc.prototype);
        UU.items = [], UU.isMovingItems = !1, UU._needsCompaction = !1, UU[tU] = void 0, UU[gU] = UU;
        const XU = new Proxy(UU, Xc);
        return Oz(UU, XU), XU
      }
      set length(UU) {
        0 === UU ? this.clear() : UU < this.items.length ? this.splice(UU, this.length - UU) : console.warn("ArraySchema: can't set .length to a higher value than its length.")
      }
      get length() {
        return this.items.length
      }
      pauseTracking() {
        this[aU].pause()
      }
      resumeTracking() {
        this[aU].resume()
      }
      untracked(UU) {
        return this[aU].untracked(UU)
      }
      get isTrackingPaused() {
        return this[aU].paused
      }
      push() {
        const UU = this[gU],
          XU = UU.items,
          zU = UU.tmpItems,
          cU = UU[aU],
          QU = UU[tU];
        let AU = zU.length;
        for (let FU = 0, oU = arguments.length; FU < oU; FU++, AU++) {
          const oU = FU < 0 || arguments.length <= FU ? void 0 : arguments[FU];
          if (void 0 === oU || null === oU) return;
          "object" === typeof oU && QU && hz(oU, QU, UU, FU), cU.indexedOperation(AU, yU.ADD), XU.push(oU), zU.push(oU), oU[aU]?.setParent(this, cU.root, AU)
        }
        return AU
      }
      pop() {
        const UU = this[gU],
          XU = UU.tmpItems,
          zU = UU.deletedIndexes;
        let cU = -1;
        for (let QU = XU.length - 1; QU >= 0; QU--)
          if (!0 !== zU[QU]) {
            cU = QU;
            break
          } if (cU < 0) return;
        const yU = UU.$isUnsentAdd(cU);
        return UU[aU].delete(cU), yU ? UU.$cancelAdd(cU) : zU[cU] = !0, UU.items.pop()
      }
      at(UU) {
        return UU < 0 && (UU += this.length), this.items[UU]
      }
      $wireIndex(UU) {
        const XU = this.deletedIndexes;
        if (0 === XU.length) return UU;
        const zU = this.tmpItems;
        let cU = 0;
        for (let yU = 0; yU < zU.length; yU++)
          if (!0 !== XU[yU]) {
            if (cU === UU) return yU;
            cU++
          } return zU.length + (UU - cU)
      }
      $isUnsentAdd(UU) {
        const XU = this[aU];
        return 0 === (576 & XU.flags) && !XU.paused && "string" !== typeof this[tU] && XU.operationAt(UU) === yU.ADD
      }
      $cancelAdd(UU) {
        let XU = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        const zU = this[aU],
          cU = this.tmpItems[UU];
        this.tmpItems.splice(UU, 1), this.deletedIndexes.length > 0 && this.deletedIndexes.splice(UU, 1), zU.removeAt(UU, 1);
        const yU = cU?.[aU];
        void 0 !== yU && void 0 === yU.root && yU.removeParent(this), XU && this.$reindexChildren(UU)
      }
      $reindexChildren(UU, XU) {
        if (!this[aU].hasFilteredFields) return;
        if ("string" === typeof this[tU]) return;
        const zU = this.tmpItems,
          cU = zU.length;
        if (void 0 !== XU)
          for (; UU < cU && zU[UU] === XU[UU];) UU++;
        for (let yU = UU; yU < cU; yU++) zU[yU]?.[aU]?.setParentIndex(this, yU)
      }
      $changeAt(UU, XU) {
        if (void 0 === XU || null === XU) return void console.error("ArraySchema items cannot be null nor undefined; Use `splice(index, 1)` instead.");
        if (this.items[UU] === XU) return;
        const zU = void 0 !== this.items[UU] ? "object" === typeof XU ? yU.DELETE_AND_ADD : yU.REPLACE : yU.ADD,
          cU = this.$wireIndex(UU),
          QU = this[aU];
        return QU.change(cU, zU), XU[aU]?.setParent(this, QU.root, cU), cU
      }
      $deleteAt(UU, XU) {
        this[aU].delete(this.$wireIndex(UU), XU)
      }
      $setAt(UU, XU, zU) {
        zU === yU.ADD && void 0 !== this.items[UU] ? this.items.splice(UU, 0, XU) : zU === yU.DELETE_AND_MOVE ? (this.items.splice(UU, 1), this.items[UU] = XU) : (UU > this.items.length && (this._needsCompaction = !0), this.items[UU] = XU)
      }
      clear() {
        const UU = this[gU];
        if (0 === UU.items.length) return;
        const XU = UU[aU];
        XU.forEachChild(((UU, zU) => {
          XU.root?.remove(UU)
        })), XU.discard(), XU.operation(yU.CLEAR), UU.items.length = 0, UU.tmpItems.length = 0
      } [GU]() {
        const UU = this[gU] ?? this,
          XU = UU[aU];
        if (XU.isStreamCollection) throw new Error("@colyseus/schema: cannot reset a streamed ArraySchema (pooling not supported).");
        const zU = UU.items;
        for (let cU = 0; cU < zU.length; cU++) zU[cU]?.[GU]?.();
        UU.items.length = 0, UU.tmpItems.length = 0, UU.deletedIndexes.length = 0, XU.recycle(), UU[FU] = void 0
      }
      concat() {
        return new zc(...this.items.concat(...arguments))
      }
      join(UU) {
        return this.items.join(UU)
      }
      reverse() {
        const UU = this[gU],
          XU = UU[aU];
        if (XU.has() || UU.deletedIndexes.length > 0) {
          const XU = UU.items.slice().reverse();
          return this.clear(), this.push(...XU), this
        }
        return XU.operation(yU.REVERSE), UU.items.reverse(), UU.tmpItems.reverse(), UU.$reindexChildren(0), this
      }
      shift() {
        const UU = this[gU],
          XU = UU.items;
        if (0 === XU.length) return;
        const zU = UU[aU],
          cU = UU.deletedIndexes;
        let QU = 0;
        for (; !0 === cU[QU];) QU++;
        const AU = UU.$isUnsentAdd(QU);
        return zU.delete(QU, yU.DELETE), AU ? UU.$cancelAdd(QU) : cU[QU] = !0, XU.shift()
      }
      slice(UU, XU) {
        const zU = new zc;
        return zU.push(...this.items.slice(UU, XU)), zU
      }
      sort() {
        let UU = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Uc;
        const XU = this[gU];
        XU.isMovingItems = !0;
        const zU = XU[aU];
        return XU.items.sort(UU).forEach(((UU, XU) => zU.change(XU, yU.REPLACE))), XU.tmpItems.sort(UU), XU.$reindexChildren(0), XU.isMovingItems = !1, this
      }
      splice(UU, XU) {
        const zU = this[gU],
          cU = zU[aU],
          QU = zU.items,
          AU = zU.tmpItems,
          FU = zU.deletedIndexes,
          oU = QU.length,
          DU = AU.length;
        for (var EU = arguments.length, YU = new Array(EU > 2 ? EU - 2 : 0), NU = 2; NU < EU; NU++) YU[NU - 2] = arguments[NU];
        const IU = YU.length,
          pU = [];
        for (let yU = 0; yU < DU; yU++) !0 !== FU[yU] && pU.push(yU);
        let tU;
        if (oU > UU) {
          void 0 === XU && (XU = oU - UU);
          for (let QU = UU; QU < UU + XU; QU++) {
            const UU = pU[QU],
              XU = zU.$isUnsentAdd(UU);
            cU.delete(UU, yU.DELETE), XU ? (tU ??= []).push(UU) : FU[UU] = !0
          }
        } else XU = 0;
        if (IU > 0) {
          const QU = pU[UU] ?? oU,
            DU = Math.min(IU, XU);
          for (let UU = 0; UU < DU; UU++) {
            const XU = QU + UU;
            let zU;
            const oU = void 0 !== tU ? tU.indexOf(XU) : -1; - 1 !== oU ? (tU.splice(oU, 1), zU = yU.ADD) : zU = FU[XU] ? yU.DELETE_AND_ADD : yU.ADD, cU.indexedOperation(XU, zU), AU[XU] = YU[UU], FU[XU] = !1, YU[UU][aU]?.setParent(this, cU.root, XU)
          }
          const EU = IU - DU;
          if (EU > 0) {
            const UU = QU + DU;
            cU.insertAt(UU, EU);
            for (let XU = 0; XU < EU; XU++) YU[DU + XU][aU]?.setParent(this, cU.root, UU + XU);
            FU.length > 0 && FU.splice(UU, 0, ...new Array(EU).fill(!1)), AU.splice(UU, 0, ...YU.slice(DU)), zU.$reindexChildren(UU + EU)
          }
        }
        if (void 0 !== tU && tU.length > 0) {
          for (let UU = tU.length - 1; UU >= 0; UU--) zU.$cancelAdd(tU[UU], !1);
          zU.$reindexChildren(tU[0])
        }
        return cU.root?.enqueueChangeTree(cU), QU.splice(UU, XU, ...YU)
      }
      unshift() {
        const UU = this[gU],
          XU = UU[aU];
        XU.unshift(arguments.length);
        for (let cU = 0; cU < arguments.length; cU++)(cU < 0 || arguments.length <= cU ? void 0 : arguments[cU])?.[aU]?.setParent(this, XU.root, cU);
        const zU = UU.deletedIndexes;
        return zU.length > 0 && zU.unshift(...new Array(arguments.length).fill(!1)), UU.tmpItems.unshift(...arguments), UU.$reindexChildren(arguments.length), UU.items.unshift(...arguments)
      }
      indexOf(UU, XU) {
        return this.items.indexOf(UU, XU)
      }
      lastIndexOf(UU) {
        let XU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.length - 1;
        return this.items.lastIndexOf(UU, XU)
      }
      every(UU, XU) {
        return this.items.every(UU, XU)
      }
      some(UU, XU) {
        return this.items.some(UU, XU)
      }
      forEach(UU, XU) {
        return this.items.forEach(UU, XU)
      }
      map(UU, XU) {
        return this.items.map(UU, XU)
      }
      filter(UU, XU) {
        return this.items.filter(UU, XU)
      }
      reduce(UU, XU) {
        return this.items.reduce.apply(this.items, arguments)
      }
      reduceRight(UU, XU) {
        return this.items.reduceRight.apply(this.items, arguments)
      }
      find(UU, XU) {
        return this.items.find(UU, XU)
      }
      findIndex(UU, XU) {
        return this.items.findIndex(UU, XU)
      }
      fill(UU, XU, zU) {
        throw new Error("ArraySchema#fill() not implemented")
      }
      copyWithin(UU, XU, zU) {
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
        return zc
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
      includes(UU, XU) {
        return this.items.includes(UU, XU)
      }
      flatMap(UU, XU) {
        throw new Error("ArraySchema#flatMap() is not supported.")
      }
      flat(UU) {
        throw new Error("ArraySchema#flat() is not supported.")
      }
      findLast() {
        return this.items.findLast.apply(this.items, arguments)
      }
      findLastIndex() {
        for (var UU = arguments.length, XU = new Array(UU), zU = 0; zU < UU; zU++) XU[zU] = arguments[zU];
        return this.items.findLastIndex.apply(this.items, arguments)
      }
      with(UU, XU) {
        const zU = this.items.slice();
        return UU < 0 && (UU += this.length), zU[UU] = XU, new zc(...zU)
      }
      toReversed() {
        return this.items.slice().reverse()
      }
      toSorted(UU) {
        return this.items.slice().sort(UU)
      }
      toSpliced(UU, XU) {
        for (var zU = arguments.length, cU = new Array(zU > 2 ? zU - 2 : 0), yU = 2; yU < zU; yU++) cU[yU - 2] = arguments[yU];
        const QU = this.items.slice();
        return QU.splice.apply(QU, arguments), QU
      }
      shuffle() {
        return this.move((UU => {
          let XU = this.items.length;
          for (; 0 != XU;) {
            let UU = Math.floor(Math.random() * XU);
            XU--, [this[XU], this[UU]] = [this[UU], this[XU]]
          }
        }))
      }
      move(UU) {
        return this.isMovingItems = !0, UU(this), this.isMovingItems = !1, this
      } [NU](UU) {
        let XU = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        const zU = this[gU] ?? this;
        return XU || zU.deletedIndexes[UU] ? zU.items[UU] : zU.tmpItems[UU] || zU.items[UU]
      } [IU](UU) {
        const XU = this[gU] ?? this;
        XU.items[UU] = void 0, XU._needsCompaction = !0
      } [kU]() {
        const UU = this.tmpItems;
        this.tmpItems = this.items.slice(), this.deletedIndexes.length > 0 && (this.$reindexChildren(0, UU), this.deletedIndexes.length = 0)
      } [BU]() {
        const UU = this[gU] ?? this;
        UU._needsCompaction && (UU._needsCompaction = !1, UU.items = UU.items.filter((UU => void 0 !== UU)))
      } [pU](UU, XU, zU) {
        const cU = this[gU] ?? this,
          yU = cU.items;
        let QU = !1;
        for (let AU = 0; AU < yU.length; AU++) {
          const FU = yU[AU];
          UU.has(AU) ? zU(FU) : (QU = !0, XU(FU, AU), cU[IU](AU))
        }
        QU && cU[BU]()
      }
      toArray() {
        return this.items.slice(0)
      }
      toJSON() {
        return this.toArray().map((UU => "function" === typeof UU.toJSON ? UU.toJSON() : UU))
      }
      clone(UU) {
        let XU;
        return UU ? (XU = new zc, XU.push(...this.items)) : XU = new zc(...this.map((UU => UU[aU] ? UU.clone() : UU))), XU
      }
    }
    RX("array", {
      constructor: zc
    });
    class cc {
      keyByIndex = new Map;
      indexByKey = Object.create(null);
      nextIndex = 0;
      snapshots;
      indexOf(UU) {
        const XU = this.indexByKey[UU];
        return void 0 === XU ? void 0 : XU
      }
      assign(UU) {
        const XU = this.nextIndex++;
        return this.indexByKey[UU] = XU, this.keyByIndex.set(XU, UU), XU
      }
      snapshot(UU, XU) {
        (this.snapshots ??= new Map).set(UU, XU)
      }
      forgetSnapshot(UU) {
        this.snapshots?.delete(UU)
      }
      snapshotAt(UU) {
        return this.snapshots?.get(UU)
      }
      setIndex(UU, XU) {
        this.keyByIndex.set(UU, XU), this.indexByKey[XU] = UU
      }
      keyOf(UU) {
        return this.keyByIndex.get(UU)
      }
      cleanupAfterEncode() {
        if (void 0 !== this.snapshots) {
          for (const [UU] of this.snapshots) {
            const XU = this.keyByIndex.get(UU);
            void 0 !== XU && (delete this.indexByKey[XU], this.keyByIndex.delete(UU))
          }
          this.snapshots.clear()
        }
      }
      reset() {
        this.indexByKey = Object.create(null), this.keyByIndex.clear(), this.snapshots?.clear(), this.nextIndex = 0
      }
    }
    class yc {
      [aU];
      [FU];
      childType;
      [tU];
      $items = new Map;
      journal = new cc;
      _stream;
      get maxPerTick() {
        return this._stream?.maxPerTick ?? 32
      }
      set maxPerTick(UU) {
        (this._stream ??= dX()).maxPerTick = UU
      }
      get priority() {
        return this._stream?.priority
      }
      set priority(UU) {
        (this._stream ??= dX()).priority = UU
      }
      get $indexes() {
        return this.journal.keyByIndex
      }
      get _collectionIndexes() {
        return this.journal.indexByKey
      }
      static[DU] = uz;
      static[EU] = Kz;
      static COLLECTION_KIND = sz;
      static[YU](UU, XU, zU) {
        if (!zU || "string" === typeof UU[tU]) return !0;
        const cU = UU[NU](XU) ?? UU.journal.snapshotAt(XU);
        return zU.isChangeTreeVisible(cU[aU])
      }
      static is(UU) {
        return void 0 !== UU.map
      }
      constructor(UU) {
        if (Object.defineProperty(this, aU, {
            value: new wz(this),
            enumerable: !1,
            writable: !0
          }), this[tU] = void 0, UU)
          if (UU instanceof Map || UU instanceof yc) UU.forEach(((UU, XU) => this.set(XU, UU)));
          else
            for (const XU in UU) this.set(XU, UU[XU])
      }
      static initializeForDecoder() {
        const UU = Object.create(yc.prototype);
        return UU.$items = new Map, UU.journal = new cc, UU[tU] = void 0, Oz(UU), UU
      } [Symbol.iterator]() {
        return this.$items[Symbol.iterator]()
      }
      get[Symbol.toStringTag]() {
        return this.$items[Symbol.toStringTag]
      }
      static get[Symbol.species]() {
        return yc
      }
      set(UU, XU) {
        if (void 0 === XU || null === XU) throw new Error(`MapSchema#set('${UU}', ${XU}): trying to set ${XU} value on '${UU}'.`);
        "object" === typeof XU && this[tU] && hz(XU, this[tU], this, UU), UU = UU.toString();
        const zU = this[aU],
          cU = void 0 !== XU[aU],
          QU = this.journal;
        let AU, FU = QU.indexOf(UU);
        if (void 0 !== FU) {
          AU = yU.REPLACE;
          const zU = this.$items.get(UU);
          if (zU === XU) return;
          cU && (AU = yU.DELETE_AND_ADD, void 0 !== zU && zU[aU].root?.remove(zU[aU])), void 0 !== QU.snapshotAt(FU) && QU.forgetSnapshot(FU)
        } else FU = QU.assign(UU), AU = yU.ADD;
        return this.$items.set(UU, XU), AU === yU.ADD && zU.isStreamCollection ? void 0 !== zU.root && eX(this, zU.root, FU) : zU.change(FU, AU), cU && XU[aU].setParent(this, zU.root, FU), this
      }
      get(UU) {
        return this.$items.get(UU)
      }
      getOrInsert(UU, XU) {
        return this.$items.has(UU) ? this.$items.get(UU) : (this.set(UU, XU), XU)
      }
      getOrInsertComputed(UU, XU) {
        if (this.$items.has(UU)) return this.$items.get(UU);
        const zU = XU(UU);
        return this.set(UU, zU), zU
      }
      delete(UU) {
        if (!this.$items.has(UU)) return !1;
        const XU = this.journal.indexOf(UU),
          zU = this.$items.get(UU),
          cU = this[aU];
        if (cU.isStreamCollection) {
          const yU = cU.root;
          let QU = !1;
          return void 0 !== yU && (QU = CX(this, yU, this[FU], XU)), void 0 !== zU?.[aU] && yU?.remove(zU[aU]), this.$items.delete(UU), QU || this.journal.snapshot(XU, zU), !0
        }
        return this.journal.snapshot(XU, zU), cU.delete(XU), this.$items.delete(UU)
      }
      clear() {
        const UU = this[aU];
        UU.discard(), UU.forEachChild(((XU, zU) => {
          UU.root?.remove(XU)
        })), this.journal.reset(), this.$items.clear(), UU.operation(yU.CLEAR)
      } [GU]() {
        const UU = this[aU];
        if (UU.isStreamCollection) throw new Error("@colyseus/schema: cannot reset a streamed MapSchema (pooling not supported).");
        this.$items.forEach((UU => UU?.[GU]?.())), this.$items.clear(), this.journal.reset(), UU.recycle(), this[FU] = void 0
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
        this[aU].pause()
      }
      resumeTracking() {
        this[aU].resume()
      }
      untracked(UU) {
        return this[aU].untracked(UU)
      }
      get isTrackingPaused() {
        return this[aU].paused
      }
      setIndex(UU, XU) {
        this.journal.setIndex(UU, XU)
      }
      getIndex(UU) {
        return this.journal.keyOf(UU)
      } [NU](UU) {
        const XU = this.journal.keyOf(UU);
        return void 0 !== XU ? this.$items.get(XU) : void 0
      } [IU](UU) {
        const XU = this.journal.keyOf(UU);
        void 0 !== XU && (this.$items.delete(XU), this.journal.keyByIndex.delete(UU))
      } [pU](UU, XU, zU) {
        let cU = null;
        if (this.$items.forEach(((yU, QU) => {
            UU.has(QU) ? zU(yU) : ((cU ??= new Set).add(QU), XU(yU, QU))
          })), null !== cU) {
          cU.forEach((UU => {
            this.$items.delete(UU), delete this.journal.indexByKey[UU]
          }));
          const UU = [];
          this.journal.keyByIndex.forEach(((XU, zU) => {
            cU.has(XU) && UU.push(zU)
          }));
          for (let XU = 0; XU < UU.length; XU++) this.journal.keyByIndex.delete(UU[XU])
        }
      } [kU]() {
        this.journal.cleanupAfterEncode()
      }
      _dropView(UU) {
        SX(this, UU)
      }
      _unregister() {}
      toJSON() {
        return Object.fromEntries(Array.from(this, (UU => {
          let [XU, zU] = UU;
          return [XU, "function" === typeof zU.toJSON ? zU.toJSON() : zU]
        })))
      }
      clone(UU) {
        let XU;
        return UU ? XU = Object.assign(new yc, this) : (XU = new yc, this.forEach(((UU, zU) => {
          UU[aU] ? XU.set(zU, UU.clone()) : XU.set(zU, UU)
        }))), XU
      }
    }
    RX("map", {
      constructor: yc
    });
    class Qc {
      [aU];
      [FU];
      [tU];
      $items = new Map;
      deletedItems = {};
      $refId = 0;
      _stream;
      get maxPerTick() {
        return this._stream?.maxPerTick ?? 32
      }
      set maxPerTick(UU) {
        (this._stream ??= dX()).maxPerTick = UU
      }
      get priority() {
        return this._stream?.priority
      }
      set priority(UU) {
        (this._stream ??= dX()).priority = UU
      }
      static[DU] = fz;
      static[EU] = Kz;
      static COLLECTION_KIND = lz;
      static[YU](UU, XU, zU) {
        return !zU || "string" === typeof UU[tU] || zU.isChangeTreeVisible((UU[NU](XU) ?? UU.deletedItems[XU])[aU])
      }
      static is(UU) {
        return void 0 !== UU.collection
      }
      constructor(UU) {
        Object.defineProperty(this, aU, {
          value: new wz(this),
          enumerable: !1,
          writable: !0
        }), this[tU] = void 0, UU && UU.forEach((UU => this.add(UU)))
      }
      static initializeForDecoder() {
        const UU = Object.create(Qc.prototype);
        return UU.$items = new Map, UU.deletedItems = {}, UU.$refId = 0, UU[tU] = void 0, Oz(UU), UU
      }
      add(UU) {
        const XU = this.$refId++,
          zU = this[aU];
        return this.$items.set(XU, UU), zU.isStreamCollection ? void 0 !== zU.root && eX(this, zU.root, XU) : zU.change(XU), void 0 !== UU[aU] && UU[aU].setParent(this, zU.root, XU), XU
      }
      at(UU) {
        const XU = Array.from(this.$items.keys())[UU];
        return this.$items.get(XU)
      }
      entries() {
        return this.$items.entries()
      }
      delete(UU) {
        const XU = this.$items.entries();
        let zU, cU;
        for (;
          (cU = XU.next()) && !cU.done;)
          if (UU === cU.value[1]) {
            zU = cU.value[0];
            break
          } if (void 0 === zU) return !1;
        const yU = this[aU];
        if (yU.isStreamCollection) {
          const UU = yU.root,
            XU = this.$items.get(zU);
          return void 0 !== UU && CX(this, UU, this[FU], zU), void 0 !== XU?.[aU] && UU?.remove(XU[aU]), this.deletedItems[zU] = XU, this.$items.delete(zU)
        }
        return this.deletedItems[zU] = yU.delete(zU), this.$items.delete(zU)
      }
      clear() {
        const UU = this[aU];
        UU.discard(), UU.forEachChild(((XU, zU) => {
          UU.root?.remove(XU)
        })), this.$items.clear(), UU.operation(yU.CLEAR)
      } [GU]() {
        const UU = this[aU];
        if (UU.isStreamCollection) throw new Error("@colyseus/schema: cannot reset a streamed CollectionSchema (pooling not supported).");
        this.$items.forEach((UU => UU?.[GU]?.())), this.$items.clear(), this.deletedItems = {}, this.$refId = 0, UU.recycle(), this[FU] = void 0
      }
      has(UU) {
        return Array.from(this.$items.values()).some((XU => XU === UU))
      }
      forEach(UU) {
        this.$items.forEach(((XU, zU, cU) => UU(XU, zU, this)))
      }
      values() {
        return this.$items.values()
      }
      get size() {
        return this.$items.size
      }
      pauseTracking() {
        this[aU].pause()
      }
      resumeTracking() {
        this[aU].resume()
      }
      untracked(UU) {
        return this[aU].untracked(UU)
      }
      get isTrackingPaused() {
        return this[aU].paused
      } [Symbol.iterator]() {
        return this.$items.values()
      }
      setIndex(UU, XU) {}
      getIndex(UU) {
        return UU
      } [NU](UU) {
        return this.$items.get(UU)
      } [IU](UU) {
        this.$items.delete(UU)
      } [pU](UU, XU, zU) {
        let cU = null;
        if (this.$items.forEach(((yU, QU) => {
            UU.has(QU) ? zU(yU) : ((cU ??= []).push(QU), XU(yU, QU))
          })), null !== cU)
          for (let yU = 0; yU < cU.length; yU++) this[IU](cU[yU])
      } [kU]() {
        for (const UU in this.deletedItems) delete this.deletedItems[UU]
      }
      _dropView(UU) {
        SX(this, UU)
      }
      _unregister() {}
      toArray() {
        return Array.from(this.$items.values())
      }
      toJSON() {
        const UU = [];
        return this.forEach(((XU, zU) => {
          UU.push("function" === typeof XU.toJSON ? XU.toJSON() : XU)
        })), UU
      }
      clone(UU) {
        let XU;
        return UU ? XU = Object.assign(new Qc, this) : (XU = new Qc, this.forEach((UU => {
          UU[aU] ? XU.add(UU.clone()) : XU.add(UU)
        }))), XU
      }
    }
    RX("collection", {
      constructor: Qc
    });
    class Ac {
      [aU];
      [FU];
      [tU];
      $items = new Map;
      deletedItems = {};
      $refId = 0;
      _stream;
      get maxPerTick() {
        return this._stream?.maxPerTick ?? 32
      }
      set maxPerTick(UU) {
        (this._stream ??= dX()).maxPerTick = UU
      }
      get priority() {
        return this._stream?.priority
      }
      set priority(UU) {
        (this._stream ??= dX()).priority = UU
      }
      static[DU] = fz;
      static[EU] = Kz;
      static COLLECTION_KIND = mz;
      static[YU](UU, XU, zU) {
        return !zU || "string" === typeof UU[tU] || zU.isVisible((UU[NU](XU) ?? UU.deletedItems[XU])[aU])
      }
      static is(UU) {
        return void 0 !== UU.set
      }
      constructor(UU) {
        Object.defineProperty(this, aU, {
          value: new wz(this),
          enumerable: !1,
          writable: !0
        }), this[tU] = void 0, UU && UU.forEach((UU => this.add(UU)))
      }
      static initializeForDecoder() {
        const UU = Object.create(Ac.prototype);
        return UU.$items = new Map, UU.deletedItems = {}, UU.$refId = 0, UU[tU] = void 0, Oz(UU), UU
      }
      add(UU) {
        if (this.has(UU)) return !1;
        const XU = this.$refId++,
          zU = this[aU];
        return this.$items.set(XU, UU), zU.isStreamCollection ? void 0 !== zU.root && eX(this, zU.root, XU) : zU.change(XU, yU.ADD), void 0 !== UU[aU] && UU[aU].setParent(this, zU.root, XU), XU
      }
      entries() {
        return this.$items.entries()
      }
      delete(UU) {
        const XU = this.$items.entries();
        let zU, cU;
        for (;
          (cU = XU.next()) && !cU.done;)
          if (UU === cU.value[1]) {
            zU = cU.value[0];
            break
          } if (void 0 === zU) return !1;
        const yU = this[aU];
        if (yU.isStreamCollection) {
          const UU = yU.root,
            XU = this.$items.get(zU);
          return void 0 !== UU && CX(this, UU, this[FU], zU), void 0 !== XU?.[aU] && UU?.remove(XU[aU]), this.deletedItems[zU] = XU, this.$items.delete(zU)
        }
        return this.deletedItems[zU] = yU.delete(zU), this.$items.delete(zU)
      }
      clear() {
        const UU = this[aU];
        UU.discard(), this.$items.clear(), UU.operation(yU.CLEAR)
      } [GU]() {
        const UU = this[aU];
        if (UU.isStreamCollection) throw new Error("@colyseus/schema: cannot reset a streamed SetSchema (pooling not supported).");
        this.$items.forEach((UU => UU?.[GU]?.())), this.$items.clear(), this.deletedItems = {}, this.$refId = 0, UU.recycle(), this[FU] = void 0
      }
      has(UU) {
        const XU = this.$items.values();
        let zU, cU = !1;
        for (;
          (zU = XU.next()) && !zU.done;)
          if (UU === zU.value) {
            cU = !0;
            break
          } return cU
      }
      forEach(UU) {
        this.$items.forEach(((XU, zU, cU) => UU(XU, zU, this)))
      }
      values() {
        return this.$items.values()
      }
      get size() {
        return this.$items.size
      }
      pauseTracking() {
        this[aU].pause()
      }
      resumeTracking() {
        this[aU].resume()
      }
      untracked(UU) {
        return this[aU].untracked(UU)
      }
      get isTrackingPaused() {
        return this[aU].paused
      } [Symbol.iterator]() {
        return this.$items.values()
      }
      setIndex(UU, XU) {}
      getIndex(UU) {
        return UU
      } [NU](UU) {
        return this.$items.get(UU)
      } [IU](UU) {
        this.$items.delete(UU)
      } [pU](UU, XU, zU) {
        let cU = null;
        if (this.$items.forEach(((yU, QU) => {
            UU.has(QU) ? zU(yU) : ((cU ??= []).push(QU), XU(yU, QU))
          })), null !== cU)
          for (let yU = 0; yU < cU.length; yU++) this[IU](cU[yU])
      } [kU]() {
        for (const UU in this.deletedItems) delete this.deletedItems[UU]
      }
      _dropView(UU) {
        SX(this, UU)
      }
      _unregister() {}
      toArray() {
        return Array.from(this.$items.values())
      }
      toJSON() {
        const UU = [];
        return this.forEach(((XU, zU) => {
          UU.push("function" === typeof XU.toJSON ? XU.toJSON() : XU)
        })), UU
      }
      clone(UU) {
        let XU;
        return UU ? XU = Object.assign(new Ac, this) : (XU = new Ac, this.forEach((UU => {
          UU[aU] ? XU.add(UU.clone()) : XU.add(UU)
        }))), XU
      }
    }
    RX("set", {
      constructor: Ac
    });
    class Fc {
      [aU];
      [FU];
      [tU];
      $items = new Map;
      $nextPosition = 0;
      _itemIndex = new Map;
      _stream;
      get maxPerTick() {
        return this._stream?.maxPerTick ?? 32
      }
      set maxPerTick(UU) {
        (this._stream ??= dX()).maxPerTick = UU
      }
      get priority() {
        return this._stream?.priority
      }
      set priority(UU) {
        (this._stream ??= dX()).priority = UU
      }
      static $isStream = !0;
      static[DU] = fz;
      static[EU] = Kz;
      static COLLECTION_KIND = xz;
      static[YU](UU, XU, zU) {
        if (!zU) return !0;
        const cU = UU[NU](XU);
        return void 0 !== cU && zU.isVisible(cU[aU])
      }
      static is(UU) {
        return UU && void 0 !== UU.stream
      }
      constructor() {
        Object.defineProperty(this, aU, {
          value: new wz(this),
          enumerable: !1,
          writable: !0
        }), this[tU] = void 0
      }
      static initializeForDecoder() {
        const UU = Object.create(Fc.prototype);
        return UU.$items = new Map, UU.$nextPosition = 0, UU._itemIndex = new Map, UU[tU] = void 0, Oz(UU), UU
      }
      add(UU) {
        if (this._itemIndex.has(UU)) return -1;
        const XU = this.$nextPosition++;
        this.$items.set(XU, UU), this._itemIndex.set(UU, XU);
        const zU = this[aU].root;
        return void 0 !== UU[aU] && UU[aU].setParent(this, zU, XU), void 0 !== zU && eX(this, zU, XU), XU
      }
      remove(UU) {
        const XU = this._itemIndex.get(UU);
        if (void 0 === XU) return !1;
        this._itemIndex.delete(UU), this.$items.delete(XU);
        const zU = this[aU].root;
        return void 0 !== zU && (CX(this, zU, this[FU], XU), void 0 !== UU[aU] && zU.remove(UU[aU])), !0
      }
      has(UU) {
        return this._itemIndex.has(UU)
      }
      clear() {
        const UU = this[aU].root;
        if (void 0 !== UU) {
          ! function(UU, XU, zU) {
            const cU = UU._stream;
            if (void 0 !== cU) {
              cU.broadcastPending.clear();
              for (const UU of cU.sentBroadcast) cU.broadcastDeletes.add(UU);
              cU.sentBroadcast.clear(), XU.forEachActiveView((UU => {
                cU.pendingByView.get(UU.id)?.clear();
                const XU = cU.sentByView.get(UU.id);
                if (void 0 !== XU && XU.size > 0) {
                  let cU = UU.changes.get(zU);
                  void 0 === cU && (cU = new Map, UU.changes.set(zU, cU));
                  for (const UU of XU) cU.set(UU, yU.DELETE);
                  XU.clear()
                }
              }))
            }
          }(this, UU, this[FU]);
          for (const XU of this.$items.values()) void 0 !== XU[aU] && UU.remove(XU[aU])
        }
        this.$items.clear(), this._itemIndex.clear()
      }
      forEach(UU) {
        for (const [XU, zU] of this.$items) UU(zU, XU, this)
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
      setIndex(UU, XU) {}
      getIndex(UU) {
        return UU
      } [NU](UU) {
        return this.$items.get(UU)
      } [IU](UU) {
        const XU = this.$items.get(UU);
        void 0 !== XU && (this._itemIndex.delete(XU), this.$items.delete(UU))
      } [pU]() {} [kU]() {}
      toArray() {
        return Array.from(this.$items.values())
      }
      toJSON() {
        const UU = [];
        return this.forEach((XU => {
          UU.push("function" === typeof XU?.toJSON ? XU.toJSON() : XU)
        })), UU
      }
      clone(UU) {
        if (UU) {
          return Object.assign(new Fc, this)
        }
        const XU = new Fc;
        return XU.maxPerTick = this.maxPerTick, this.forEach((UU => {
          XU.add("function" === typeof UU?.clone ? UU.clone() : UU)
        })), XU
      }
      _dropView(UU) {
        SX(this, UU)
      }
      _unregister() {}
    }
    RX("stream", {
      constructor: Fc
    });
    class oc {
      [RU] = !0;
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
        if (UU && "object" === typeof UU && void 0 !== UU.array) throw new Error(WX);
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

    function Dc(UU) {
      return null != UU && !0 === UU[RU]
    }

    function Ec(UU) {
      return () => new oc(UU)
    }

    function Yc(UU) {
      if (Dc(UU)) {
        const XU = UU._type;
        throw new Error(`t.array/map/set/collection(): a t.* builder is not a valid element type \u2014 ${"string"===typeof XU?`use the type name instead: t.array("${XU}")`:'collections accept a Schema class or a primitive type name ("string", "number", \u2026)'}.`)
      }
      return UU
    }

    function Nc(UU) {
      return new oc({
        quantized: uX(UU)
      })
    }
    const Ic = Object.freeze({
        string: Ec("string"),
        number: Ec("number"),
        boolean: Ec("boolean"),
        int8: Ec("int8"),
        uint8: Ec("uint8"),
        int16: Ec("int16"),
        uint16: Ec("uint16"),
        int32: Ec("int32"),
        uint32: Ec("uint32"),
        int64: Ec("int64"),
        uint64: Ec("uint64"),
        float32: Ec("float32"),
        float64: Ec("float64"),
        bigint64: Ec("bigint64"),
        biguint64: Ec("biguint64"),
        ref: UU => new oc(UU),
        array: UU => new oc({
          array: Yc(UU)
        }),
        map: UU => new oc({
          map: Yc(UU)
        }),
        set: UU => new oc({
          set: Yc(UU)
        }),
        collection: UU => new oc({
          collection: Yc(UU)
        }),
        stream: UU => {
          const XU = new oc({
            stream: Yc(UU)
          });
          return XU._stream = !0, XU
        },
        quantized: Nc,
        angle: UU => Nc({
          min: 0,
          max: 2 * Math.PI,
          mode: "wrap",
          bits: UU?.bits ?? 16
        })
      }),
      pc = -1;

    function ac(UU) {
      return vX.register(UU), UU
    }

    function tc() {
      let UU = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : pc;
      return function(XU, zU) {
        const cU = JX.initialize(XU.constructor);
        JX.setTag(cU, zU, UU)
      }
    }

    function gc(UU, XU) {
      const zU = JX.initialize(UU.constructor);
      JX.setUnreliable(zU, XU)
    }

    function kc(UU, XU) {
      const zU = JX.initialize(UU.constructor);
      JX.setPatchOnly(zU, XU)
    }

    function Gc(UU, XU) {
      const zU = JX.initialize(UU.constructor);
      JX.setFullStateOnly(zU, XU)
    }

    function Bc(UU, XU) {
      return function(zU, cU) {
        const yU = zU.constructor;
        if (!UU) throw new Error(`${yU.name}: @type() reference provided for "${cU}" is undefined. Make sure you don't have any circular dependencies.`);
        UU = sX(UU, `${yU.name}.${cU}`), vX.register(yU);
        const QU = Object.getPrototypeOf(yU)[Symbol.metadata],
          AU = JX.initialize(yU);
        let FU = AU[cU];
        if (void 0 !== AU[FU]) {
          if (AU[FU].deprecated) return;
          if (void 0 !== AU[FU].type) {
            const UU = new Error(`@colyseus/schema: Duplicate '${cU}' definition on '${yU.name}'.\nCheck @type() annotation`);
            throw new Error(`${UU.message} ${UU.stack.split("\n")[4].trim()}`)
          }
        } else FU = AU[LU] ?? (QU && QU[LU]) ?? -1, FU++;
        if (XU && XU.manual) JX.addField(AU, FU, cU, UU, {
          enumerable: !0,
          configurable: !0,
          writable: !0
        });
        else {
          const {
            complexTypeKlass: XU,
            childType: zU
          } = VX(UU);
          JX.addField(AU, FU, cU, UU, Rc(cU, FU, zU, XU))
        }
        AU[PU][cU] && Object.defineProperty(zU, cU, AU[PU][cU]), ("string" === typeof UU || fX(UU)) && (AU[dU] || Object.defineProperty(AU, dU, {
          value: [],
          enumerable: !1,
          configurable: !0,
          writable: !0
        }), AU[dU][FU] = "string" === typeof UU ? XX[UU] : MX(UU.quantized))
      }
    }
    const Zc = {
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

    function Rc(UU, XU, zU, cU) {
      let QU;
      return QU = cU ? function(UU, XU, zU, cU) {
        const QU = cU.constructor === zc,
          AU = cU.constructor === yc;
        return function(UU) {
          const cU = this[ZU],
            FU = cU[XU];
          if (UU !== FU) {
            if (void 0 !== UU && null !== UU) {
              if (!QU || UU instanceof zc)
                if (!AU || UU instanceof yc) UU[tU] = zU;
                else {
                  const XU = new yc;
                  if (XU[tU] = zU, UU instanceof Map) UU.forEach(((UU, zU) => XU.set(zU, UU)));
                  else
                    for (const zU in UU) XU.set(zU, UU[zU]);
                  UU = XU
                }
              else {
                const XU = new zc;
                XU[tU] = zU, XU.push(...UU), UU = XU
              }
              const cU = this[aU],
                DU = this.constructor;
              void 0 !== FU && null !== FU && FU[aU] ? (cU.root?.remove(FU[aU]), DU[oU](cU, XU, yU.DELETE_AND_ADD)) : DU[oU](cU, XU, yU.ADD), UU[aU]?.setParent(this, cU.root, XU)
            } else void 0 !== FU && null !== FU && this[aU].delete(XU);
            cU[XU] = UU
          }
        }
      }(0, XU, zU, cU) : "string" === typeof zU ? function(UU, XU, zU) {
        const cU = Zc[zU],
          QU = "string" === zU,
          AU = "boolean" === zU;
        return function(zU) {
          const FU = this[ZU],
            DU = FU[XU];
          if (zU !== DU) {
            if (void 0 !== zU && null !== zU) {
              if (!AU && void 0 !== cU && typeof zU !== cU && (!QU || null !== zU)) {
                const XU = zU && zU.constructor ? ` (${zU.constructor.name})` : "";
                throw new Tz(`a '${cU}' was expected, but '${JSON.stringify(zU)}'${XU} was provided in ${this.constructor.name}#${UU}`)
              }
              this.constructor[oU](this[aU], XU, yU.ADD)
            } else void 0 !== DU && null !== DU && this[aU].delete(XU);
            FU[XU] = zU
          }
        }
      }(UU, XU, zU) : fX(zU) ? function(UU, XU, zU) {
        return function(cU) {
          const QU = this[ZU],
            AU = QU[XU];
          if (void 0 !== cU && null !== cU) {
            if ("number" !== typeof cU) throw new Tz(`a 'number' was expected, but '${JSON.stringify(cU)}' was provided in ${this.constructor.name}#${UU}`);
            if ((cU = HX(zU, iX(zU, cU))) === AU) return;
            this.constructor[oU](this[aU], XU, yU.ADD)
          } else {
            if (cU === AU) return;
            void 0 !== AU && null !== AU && this[aU].delete(XU)
          }
          QU[XU] = cU
        }
      }(UU, XU, zU.quantized) : function(UU, XU, zU) {
        return function(cU) {
          const QU = this[ZU],
            AU = QU[XU];
          if (cU !== AU) {
            if (void 0 !== cU && null !== cU) {
              hz(cU, zU, this, UU);
              const QU = this[aU],
                FU = this.constructor;
              void 0 !== AU && null !== AU && AU[aU] ? (QU.root?.remove(AU[aU]), FU[oU](QU, XU, yU.DELETE_AND_ADD)) : FU[oU](QU, XU, yU.ADD), cU[aU]?.setParent(this, QU.root, XU)
            } else void 0 !== AU && null !== AU && this[aU].delete(XU);
            QU[XU] = cU
          }
        }
      }(UU, XU, zU), {
        get: function() {
          return this[ZU][XU]
        },
        set: QU,
        enumerable: !0,
        configurable: !0
      }
    }

    function Pc() {
      let UU = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
      return function(XU, zU) {
        const cU = JX.initialize(XU.constructor);
        JX.setDeprecated(cU, zU), UU && (cU[PU] ??= {}, cU[PU][zU] = {
          get: function() {
            throw new Error(`${zU} is deprecated.`)
          },
          set: function(UU) {},
          enumerable: !1,
          configurable: !0
        }, Object.defineProperty(XU, zU, cU[PU][zU]))
      }
    }
    let Wc = !1;

    function dc(UU, XU, zU) {
      Wc || (Wc = !0, console.warn("@colyseus/schema: defineTypes() is deprecated and will be removed in a future release. Use schema() with t.* field builders instead \u2192 https://docs.colyseus.io/state/schema"));
      for (let cU in XU) Bc(XU[cU], zU)(UU.prototype, cU);
      return UU
    }

    function Lc(UU, XU) {
      let zU = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Cc;
      if (null == UU || "object" !== typeof UU) throw new Error(`schema(): first argument must be a fields object (got ${typeof UU}).`);
      const cU = {},
        yU = {},
        QU = {},
        AU = {},
        FU = (UU, XU) => {
          if (XU.hasDefault)((UU, XU) => {
            "function" === typeof XU ? AU[UU] = XU : XU && "function" === typeof XU.clone ? AU[UU] = () => XU.clone() : QU[UU] = XU
          })(UU, XU.default);
          else if (!XU.optional) {
            const zU = function(UU) {
              if (UU && "object" === typeof UU) {
                if (void 0 !== UU.array) return () => new zc;
                if (void 0 !== UU.map) return () => new yc;
                if (void 0 !== UU.set) return () => new Ac;
                if (void 0 !== UU.collection) return () => new Qc;
                if (void 0 !== UU.stream) return () => new Fc
              } else if ("function" === typeof UU && Cc.is(UU) && (!UU.prototype.initialize || 0 === UU.prototype.initialize.length)) return () => new UU
            }(XU.type);
            zU && (AU[UU] = zU)
          }
        },
        oU = {},
        DU = [],
        EU = [],
        YU = {},
        NU = [],
        IU = [],
        pU = {},
        aU = [];
      for (const ZU in UU) {
        const zU = UU[ZU],
          QU = `schema(${XU?`'${XU}'`:""}): field '${ZU}'`;
        if (Dc(zU)) {
          const UU = zU.toDefinition();
          if (UU.noSync) {
            if (void 0 !== UU.view || UU.unreliable || UU.patchOnly || UU.fullStateOnly || UU.stream) throw new Error(`${QU} uses .noSync() together with a sync-only modifier (.view/.unreliable/.patchOnly/.fullStateOnly/.stream). A local-only field cannot be synchronized.`);
            FU(ZU, UU);
            continue
          }
          if (UU.patchOnly && UU.fullStateOnly) throw new Error(`${QU} uses .patchOnly() together with .fullStateOnly(). Those are the only two delivery channels, so the field would never reach a client \u2014 use .noSync() if that is intended.`);
          const XU = sX(UU.type, QU);
          if ("function" === typeof XU && !Cc.is(XU)) throw new Error(`${QU} is a synced ref to non-Schema class '${XU.name||"(anonymous)"}' \u2014 use .noSync(), or Metadata.setFields().`);
          cU[ZU] = XU, void 0 !== UU.view && (oU[ZU] = UU.view), UU.unreliable && DU.push(ZU), UU.patchOnly && EU.push(ZU), UU.deprecated && (YU[ZU] = UU.deprecatedThrows), UU.fullStateOnly && NU.push(ZU), UU.stream && IU.push(ZU), void 0 !== UU.streamPriority && (pU[ZU] = UU.streamPriority), UU.optional && aU.push(ZU), FU(ZU, UU)
        } else {
          if ("function" !== typeof zU) throw new Error(`${QU} must be a t.* builder, Schema subclass, or method (got ${typeof zU}).`);
          Cc.is(zU) ? (cU[ZU] = zU, zU.prototype.initialize && 0 !== zU.prototype.initialize.length || (AU[ZU] = () => new zU)) : yU[ZU] = zU
        }
      }
      const tU = UU => {
          for (const XU in QU) UU[XU] = QU[XU];
          for (const XU in AU) UU[XU] = AU[XU]()
        },
        gU = () => {
          const UU = {};
          return tU(UU), UU
        },
        kU = "function" === typeof yU.initialize,
        GU = yU.initialize ?? zU._initialize,
        BU = class extends zU {
          constructor() {
            for (var UU = arguments.length, XU = new Array(UU), zU = 0; zU < UU; zU++) XU[zU] = arguments[zU];
            const yU = XU[0];
            void 0 === yU ? (super(), tU(this)) : super(Object.assign(gU(), kU ? (UU => {
              const XU = Object.keys(cU),
                zU = {};
              for (const cU in UU) XU.includes(cU) || (zU[cU] = UU[cU]);
              return zU
            })(yU) : yU)), GU && new.target === BU && GU.apply(this, XU)
          }
        };
      XU && Object.defineProperty(BU, "name", {
        value: XU
      }), JX.setFields(BU, cU), BU._getDefaultValues = gU, BU._initialize = GU, Object.assign(BU.prototype, yU);
      for (const ZU in oU) tc(oU[ZU])(BU.prototype, ZU);
      for (const ZU of DU) gc(BU.prototype, ZU);
      for (const ZU of EU) kc(BU.prototype, ZU);
      for (const ZU in YU) Pc(YU[ZU])(BU.prototype, ZU);
      if (NU.length > 0 || IU.length > 0) {
        const UU = BU[Symbol.metadata];
        for (const XU of NU) JX.setFullStateOnly(UU, XU);
        for (const XU of IU) JX.setStream(UU, XU);
        for (const XU in pU) JX.setStreamPriority(UU, XU, pU[XU])
      }
      if (aU.length > 0) {
        const UU = BU[Symbol.metadata];
        for (const XU of aU) UU[UU[XU]].optional = !0
      }
      return BU.extend = (UU, XU) => Lc(UU, XU, BU), BU
    }

    function ec(UU) {
      const XU = UU[aU].root,
        zU = {
          ops: {},
          refs: []
        };
      let cU = XU.changes.next;
      for (; cU;) {
        const UU = cU.changeTree;
        void 0 !== UU ? (zU.refs.push(`refId#${UU.ref[FU]}`), UU.forEach(((UU, XU) => {
          if (UU < 0 || !XU) return;
          const cU = yU[XU];
          zU.ops[cU] || (zU.ops[cU] = 0), zU.ops[cU]++
        })), cU = cU.next) : cU = cU.next
      }
      return zU
    }
    class Cc {
      static[DU] = rz;
      static[EU] = jz;
      [FU];
      [ZU];
      static initialize(UU) {
        Object.defineProperty(UU, aU, {
          value: new wz(UU),
          enumerable: !1,
          writable: !0
        }), UU[ZU] = []
      }
      static initializeForDecoder() {
        const UU = Object.create(this.prototype);
        return Oz(UU), UU[ZU] = [], UU
      }
      static reset(UU) {
        const XU = UU?.[aU];
        if (void 0 === XU || "function" !== typeof XU.recycle) throw new Error("@colyseus/schema: Schema.reset() requires a tracked (encoder-side) instance.");
        if (void 0 !== XU.extraParents) throw new Error(`@colyseus/schema: cannot reset a shared instance (${UU.constructor.name}) with multiple parents.`);
        UU[GU]()
      } [GU]() {
        const UU = this.constructor[Symbol.metadata],
          XU = UU?.[eU] ?? [],
          zU = this[ZU];
        for (let cU = 0; cU < XU.length; cU++) {
          const UU = zU[XU[cU]];
          UU?.[GU]?.()
        }
        this[aU].recycle(), this[FU] = void 0
      }
      static is(UU) {
        const XU = UU[Symbol.metadata];
        return "object" === typeof XU && null !== XU
      }
      static isSchema(UU) {
        return "function" === typeof UU?.assign
      }
      static[oU](UU, XU) {
        let zU = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : yU.ADD;
        UU.change(XU, zU)
      }
      static[YU](UU, XU, zU) {
        const cU = UU.constructor[Symbol.metadata],
          yU = cU[XU]?.tag;
        return void 0 === zU ? void 0 === yU : void 0 === yU || (yU === pc ? zU.isChangeTreeVisible(UU[aU]) : zU.hasTagOnTree(UU[aU], yU))
      }
      constructor(UU) {
        Cc.initialize(this), UU && Cc.assignProps(this, UU)
      }
      assign(UU) {
        return Cc.assignProps(this, UU), this
      }
      static assignProps(UU, XU) {
        const zU = UU.constructor[Symbol.metadata];
        if (zU && void 0 !== zU[LU])
          for (let yU = 0; yU <= zU[LU]; yU++) {
            const cU = zU[yU];
            if (!cU) continue;
            const QU = XU[cU.name];
            void 0 !== QU && (UU[cU.name] = QU)
          }
        const cU = Object.keys(XU);
        for (let yU = 0; yU < cU.length; yU++) {
          const QU = cU[yU];
          zU && void 0 !== zU[QU] || (UU[QU] = XU[QU])
        }
      }
      restore(UU) {
        const XU = this.constructor[Symbol.metadata];
        for (const zU in XU) {
          const cU = XU[zU],
            yU = cU.name,
            QU = cU.type,
            AU = UU[yU];
          if (void 0 !== AU && null !== AU)
            if ("string" === typeof QU) this[yU] = AU;
            else if (Cc.is(QU)) {
            const UU = new QU;
            UU.restore(AU), this[yU] = UU
          } else if ("object" === typeof QU) {
            const UU = Object.keys(QU)[0],
              XU = QU[UU];
            if ("map" === UU) {
              const UU = this[yU];
              for (const zU in AU)
                if (Cc.is(XU)) {
                  const cU = new XU;
                  cU.restore(AU[zU]), UU.set(zU, cU)
                } else UU.set(zU, AU[zU])
            } else if ("array" === UU) {
              const UU = this[yU];
              for (let zU = 0; zU < AU.length; zU++)
                if (Cc.is(XU)) {
                  const cU = new XU;
                  cU.restore(AU[zU]), UU.push(cU)
                } else UU.push(AU[zU])
            }
          }
        }
        return this
      }
      setDirty(UU, XU) {
        const zU = this.constructor[Symbol.metadata];
        this[aU].change(zU[zU[UU]].index, XU)
      }
      pauseTracking() {
        this[aU].pause()
      }
      resumeTracking() {
        this[aU].resume()
      }
      untracked(UU) {
        return this[aU].untracked(UU)
      }
      get isTrackingPaused() {
        return this[aU].paused
      }
      clone() {
        const UU = Object.create(this.constructor.prototype);
        Cc.initialize(UU);
        const XU = this.constructor[Symbol.metadata];
        for (const zU in XU) {
          const cU = XU[zU].name;
          "object" === typeof this[cU] && "function" === typeof this[cU]?.clone ? UU[cU] = this[cU].clone() : UU[cU] = this[cU]
        }
        return UU
      }
      toJSON() {
        const UU = {},
          XU = this.constructor[Symbol.metadata];
        for (const zU in XU) {
          const cU = XU[zU],
            yU = cU.name;
          cU.deprecated || null === this[yU] || "undefined" === typeof this[yU] || (UU[yU] = "function" === typeof this[yU].toJSON ? this[yU].toJSON() : this[yU])
        }
        return UU
      }
      discardAllChanges() {
        this[aU].discardAll()
      } [NU](UU) {
        return this[this.constructor[Symbol.metadata][UU].name]
      } [IU](UU) {
        this[this.constructor[Symbol.metadata][UU].name] = void 0
      }
      static debugRefIds(UU) {
        let XU = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          zU = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          cU = arguments.length > 3 ? arguments[3] : void 0,
          yU = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "";
        const QU = XU ? ` - ${JSON.stringify(UU.toJSON())}` : "",
          AU = UU[aU],
          oU = UU[FU],
          DU = cU ? cU.root.refCount[oU] : AU.refCount,
          EU = DU > 1 ? ` [\xd7${DU}]` : "";
        let YU = `${function(UU){return new Array(UU).fill(0).map(((XU,zU)=>zU===UU-1?"\u2514\u2500 ":"   ")).join("")}(zU)}${yU}${UU.constructor.name} (refId: ${oU})${EU}${QU}\n`;
        return AU.forEachChild(((yU, QU) => {
          let AU = QU;
          "number" === typeof QU && UU.$indexes && (AU = UU.$indexes.get(QU) ?? QU);
          const FU = void 0 !== UU.forEach && void 0 !== AU ? `["${AU}"]: ` : "";
          YU += this.debugRefIds(yU.ref, XU, zU + 1, cU, FU)
        })), YU
      }
      static debugRefIdEncodingOrder(UU) {
        let XU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "allChanges";
        const zU = [],
          cU = UU[aU];
        if ("changes" === XU) {
          let UU = cU.root.changes?.next;
          for (; UU;) UU.changeTree && zU.push(UU.changeTree.ref[FU]), UU = UU.next;
          return zU
        }
        const yU = "allFilteredChanges" === XU,
          QU = new Set,
          AU = UU => {
            QU.has(UU) || (QU.add(UU), UU.isFiltered === yU && zU.push(UU.ref[FU]), UU.forEachChild(((UU, XU) => AU(UU))))
          };
        return AU(cU), zU
      }
      static debugRefIdsFromDecoder(UU) {
        return this.debugRefIds(UU.state, !1, 0, UU)
      }
      static debugChanges(UU) {
        let XU = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        const zU = UU[aU],
          cU = XU ? "allChanges" : "changes";
        let QU = `${UU.constructor.name} (${UU[FU]}) -> .${cU}:\n`;
        return XU ? zU.forEachLive((UU => {
          QU += `- [${UU}]: ADD (${JSON.stringify(zU.getValue(Number(UU),!0))})\n`
        })) : zU.forEach(((UU, XU) => {
          UU < 0 || !XU || (QU += `- [${UU}]: ${yU[XU]} (${JSON.stringify(zU.getValue(Number(UU),!1))})\n`)
        })), QU
      }
    }
    QU(Cc);
    const wc = {
      value: 0,
      enumerable: !1,
      writable: !0
    };
    class qc {
      types;
      nextUniqueId = 0;
      changeTrees = {};
      get refCount() {
        const UU = {};
        for (const XU in this.changeTrees) UU[XU] = this.changeTrees[XU].refCount;
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
        this.types.hasFilters && (UU.flags & ez || (UU.flags |= ez, this.pendingFilterRefresh.push(UU)))
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
        const XU = UU.id;
        for (const zU of this.streamTrees) zU._dropView(XU)
      }
      forEachActiveView(UU) {
        for (const [XU, zU] of this.activeViews) {
          const cU = zU.deref();
          if (void 0 !== cU) UU(cU);
          else {
            this.activeViews.delete(XU);
            for (const UU of this.streamTrees) UU._dropView(XU)
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
        let XU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        this.types = UU, this.nextUniqueId = XU
      }
      add(UU) {
        const XU = UU.ref;
        void 0 === XU[FU] && (wc.value = this.nextUniqueId++, Object.defineProperty(XU, FU, wc));
        const zU = XU[FU],
          cU = void 0 === this.changeTrees[zU];
        cU && (this.changeTrees[zU] = UU), UU.needsRestage && (UU.needsRestage = !1, UU.forEachLiveWithCtx(UU, zz));
        const yU = cU ? 0 : UU.refCount;
        return UU.refCount = yU + 1, yU > 0 && this.enqueueFilterRefresh(UU), cU
      }
      remove(UU) {
        const XU = UU.refCount - 1;
        if (XU <= 0) {
          if (UU.root = void 0, delete this.changeTrees[UU.ref[FU]], UU.isStreamCollection) {
            const XU = UU.ref;
            XU._unregister?.(), this.unregisterStream(XU)
          }
          this.removeFromQueue(UU), this.removeFromUnreliableQueue(UU), UU.refCount = 0, UU.needsRestage = !0, UU.forEachChild(((XU, zU) => {
            XU.removeParent(UU.ref) && (void 0 === XU.parentRef || XU.refCount > 0 ? this.remove(XU) : this.moveNextToParent(XU))
          }))
        } else UU.refCount = XU, this.enqueueFilterRefresh(UU), this.recursivelyMoveNextToParent(UU);
        return XU
      }
      recursivelyMoveNextToParent(UU) {
        this.moveNextToParent(UU), UU.forEachChild(((UU, XU) => this.recursivelyMoveNextToParent(UU)))
      }
      moveNextToParent(UU) {
        UU.changesNode && this._moveNextToParentInList(this.changes, UU, UU.changesNode, "changesNode"), UU.unreliableChangesNode && this._moveNextToParentInList(this.unreliableChanges, UU, UU.unreliableChangesNode, "unreliableChangesNode")
      }
      _moveNextToParentInList(UU, XU, zU, cU) {
        const yU = XU.parent;
        if (!yU || !yU[aU]) return;
        const QU = yU[aU][cU];
        QU && QU !== zU && (zU.position > QU.position || (zU.prev ? zU.prev.next = zU.next : UU.next = zU.next, zU.next ? zU.next.prev = zU.prev : UU.tail = zU.prev, zU.prev = UU.tail, zU.next = void 0, UU.tail.next = zU, UU.tail = zU, zU.position = UU.nextPosition++))
      }
      enqueueChangeTree(UU) {
        (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : UU.changesNode) || (UU.changesNode = this._appendToList(this.changes, UU))
      }
      enqueueUnreliable(UU) {
        (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : UU.unreliableChangesNode) || (UU.unreliableChangesNode = this._appendToList(this.unreliableChanges, UU))
      }
      _appendToList(UU, XU) {
        const zU = this._nodePool;
        let cU;
        return zU.length > 0 ? (cU = zU.pop(), cU.changeTree = XU, cU.next = void 0, cU.prev = void 0) : cU = {
          changeTree: XU,
          next: void 0,
          prev: void 0,
          position: 0
        }, UU.next ? (cU.prev = UU.tail, UU.tail.next = cU, UU.tail = cU) : (UU.nextPosition = 0, UU.next = cU, UU.tail = cU), cU.position = UU.nextPosition++, cU
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
      _removeNode(UU, XU, zU, cU) {
        return !(!zU || zU.changeTree !== XU) && (zU.prev ? zU.prev.next = zU.next : UU.next = zU.next, zU.next ? zU.next.prev = zU.prev : UU.tail = zU.prev, XU[cU] = void 0, this.releaseNode(zU), !0)
      }
    }

    function Oc(UU, XU) {
      if (-1 === XU || XU >= UU.length) return !1;
      const zU = UU.length - 1;
      for (let cU = XU; cU < zU; cU++) UU[cU] = UU[cU + 1];
      return UU.length = zU, !0
    }

    function Sc(UU, XU, zU) {
      const cU = ~zU,
        yU = UU.changeTrees;
      for (const QU in yU) {
        const UU = yU[QU],
          zU = UU.visibleViews;
        void 0 !== zU && XU < zU.length && (zU[XU] &= cU);
        const AU = UU.subscribedViews;
        void 0 !== AU && XU < AU.length && (AU[XU] &= cU);
        const FU = UU.tagViews;
        void 0 !== FU && FU.forEach((UU => {
          XU < UU.length && (UU[XU] &= cU)
        }))
      }
    }
    const rc = new FinalizationRegistry((UU => {
      let {
        root: XU,
        id: zU,
        slot: cU,
        bit: yU
      } = UU;
      Sc(XU, cU, yU), XU.activeViews.delete(zU);
      for (const QU of XU.streamTrees) QU._dropView(zU);
      XU.releaseViewId(zU)
    }));

    function uc(UU) {
      if (void 0 === UU) return "undefined";
      if (null === UU) return "null";
      const XU = typeof UU;
      return "string" === XU ? JSON.stringify(UU.length > 30 ? `${UU.slice(0,30)}\u2026` : UU) : "object" !== XU && "function" !== XU ? `${XU} ${String(UU)}` : Array.isArray(UU) ? `Array(${UU.length})` : UU.constructor?.name ?? "Object"
    }
    class fc {
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
        void 0 === this._root && (this._root = UU, this.id = UU.acquireViewId(), this._slot = this.id >> 5, this._bit = 1 << (31 & this.id), UU.registerView(this), rc.register(this, {
          root: UU,
          id: this.id,
          slot: this._slot,
          bit: this._bit
        }, this))
      }
      dispose() {
        void 0 !== this._root && (this._root.unregisterView(this), Sc(this._root, this._slot, this._bit), this._root.releaseViewId(this.id), rc.unregister(this), this._root = void 0, this.id = -1)
      }
      isVisible(UU) {
        const XU = UU.visibleViews,
          zU = this._slot;
        return void 0 !== XU && zU < XU.length && 0 !== (XU[zU] & this._bit)
      }
      markVisible(UU) {
        const XU = this._slot;
        let zU = UU.visibleViews;
        for (void 0 === zU && (zU = UU.visibleViews = []); zU.length <= XU;) zU.push(0);
        zU[XU] |= this._bit
      }
      unmarkVisible(UU) {
        const XU = UU.visibleViews;
        if (void 0 === XU) return;
        const zU = this._slot;
        zU < XU.length && (XU[zU] &= ~this._bit)
      }
      isSubscribed(UU) {
        const XU = UU.subscribedViews,
          zU = this._slot;
        return void 0 !== XU && zU < XU.length && 0 !== (XU[zU] & this._bit)
      }
      _setSubscribed(UU) {
        const XU = this._slot;
        let zU = UU.subscribedViews;
        for (void 0 === zU && (zU = UU.subscribedViews = []); zU.length <= XU;) zU.push(0);
        zU[XU] |= this._bit
      }
      _clearSubscribed(UU) {
        const XU = UU.subscribedViews;
        if (void 0 === XU) return;
        const zU = this._slot;
        zU < XU.length && (XU[zU] &= ~this._bit)
      }
      hasTagOnTree(UU, XU) {
        const zU = UU.tagViews;
        if (void 0 === zU) return !1;
        const cU = this._slot,
          yU = this._bit;
        for (let QU = XU; 0 !== QU; QU &= QU - 1) {
          const UU = zU.get(QU & -QU);
          if (void 0 !== UU && cU < UU.length && 0 !== (UU[cU] & yU)) return !0
        }
        return !1
      }
      addTag(UU, XU) {
        if (XU === pc) return;
        let zU = UU.tagViews;
        void 0 === zU && (zU = UU.tagViews = new Map);
        const cU = this._slot,
          yU = this._bit;
        for (let QU = XU; QU > 0; QU &= QU - 1) {
          const UU = QU & -QU;
          let XU = zU.get(UU);
          for (void 0 === XU && (XU = [], zU.set(UU, XU)); XU.length <= cU;) XU.push(0);
          XU[cU] |= yU
        }
      }
      removeTag(UU, XU) {
        if (XU === pc) return;
        const zU = UU.tagViews;
        if (void 0 === zU) return;
        const cU = this._slot,
          yU = ~this._bit;
        for (let QU = XU; QU > 0; QU &= QU - 1) {
          const UU = zU.get(QU & -QU);
          void 0 !== UU && cU < UU.length && (UU[cU] &= yU)
        }
      }
      removeAllTagsOnTree(UU) {
        const XU = UU.tagViews;
        if (void 0 === XU) return;
        const zU = this._slot,
          cU = ~this._bit;
        XU.forEach((UU => {
          zU < UU.length && (UU[zU] &= cU)
        }))
      }
      add(UU) {
        let XU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : pc,
          zU = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        return this._add(UU, XU, zU, !1)
      }
      _addImmediate(UU) {
        let XU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : pc;
        this._add(UU, XU, !0, !0)
      }
      _add(UU, XU, zU, cU) {
        const QU = UU?.[aU];
        if (!QU) return console.warn(`StateView#add(): expected a Schema instance or collection, received ${uc(UU)}`), !1;
        const AU = QU.parent;
        if (!AU && 0 !== UU[FU]) throw new Error(`Cannot add a detached instance to the StateView. Make sure to assign the "${QU.ref.constructor.name}" instance to the state before calling view.add()`);
        void 0 === this._root && void 0 !== QU.root && this._bindRoot(QU.root);
        const oU = AU?.[aU];
        if (!cU && oU?.isStreamCollection) return OX(AU, this.id, QU.parentIndex), !0;
        const DU = UU.constructor[Symbol.metadata],
          EU = this.isVisible(QU);
        if (!this.iterable || !zU || EU && -1 !== this.items.indexOf(UU) || this.items.push(UU), this.markVisible(QU), zU && AU && this.addParentOf(QU, XU), !cU && QU.isStreamCollection) return !0;
        if (XU === pc && QU.isNew) return this._markSubtreeVisible(QU, XU), !1;
        let YU = this.changes.get(UU[FU]);
        void 0 === YU && (YU = new Map, this.changes.set(UU[FU], YU));
        let NU = !1;
        const IU = QU.encDescriptor.tags;
        if (QU.forEachChild(((UU, zU) => {
            const cU = IU[zU];
            if (void 0 !== cU) {
              if (!(cU === pc || XU !== pc && 0 !== (cU & XU))) return
            }
            this.add(UU.ref, XU, !1) && (NU = !0)
          })), XU !== pc) {
          this.addTag(QU, XU);
          const UU = DU?.[wU];
          if (void 0 !== UU)
            for (let zU = XU; zU > 0; zU &= zU - 1) UU[zU & -zU]?.forEach((UU => {
              QU.getChange(UU) !== yU.DELETE && YU.set(UU, yU.ADD)
            }))
        }
        if ((XU === pc || !EU) && (!QU.isNew || NU))
          if (QU.isArray && "string" !== typeof QU.refTarget[tU]) QU.refTarget.items.length > 0 && (YU.set(-1, yU.ADD), NU = !0);
          else {
            const UU = QU.encDescriptor.tags;
            QU.forEachLive((zU => {
              const cU = UU[zU];
              (void 0 === cU || cU === pc || XU !== pc && 0 !== (cU & XU)) && (YU.set(zU, yU.ADD), NU = !0)
            }))
          } return NU
      }
      _markSubtreeVisible(UU, XU) {
        const zU = UU.encDescriptor.tags;
        UU.forEachChild(((UU, cU) => {
          const yU = zU[cU];
          if (void 0 !== yU) {
            if (!(yU === pc || XU !== pc && 0 !== (yU & XU))) return
          }
          UU.isNew ? (this.markVisible(UU), this._markSubtreeVisible(UU, XU)) : this._add(UU.ref, XU, !1, !1)
        }))
      }
      addParentOf(UU, XU) {
        const zU = UU.parent[aU],
          cU = UU.parentIndex;
        this.isVisible(zU) || this.markVisible(zU);
        const QU = zU.parent?.[aU];
        if (QU && this.addParentOf(zU, XU), zU.hasFilteredFields && zU.getChange(cU) !== yU.DELETE) {
          let QU = this.changes.get(zU.ref[FU]);
          void 0 === QU && (QU = new Map, this.changes.set(zU.ref[FU], QU));
          const AU = zU.encDescriptor.tags[cU];
          void 0 !== AU && AU !== pc && 0 !== (AU & XU) && this.addTag(zU, XU), QU.set(zU.isArray ? UU : cU, yU.ADD)
        }
      }
      _touchAncestorsOf(UU) {
        let XU = UU.parent?.[aU];
        if (void 0 === XU) return;
        const zU = [];
        for (; void 0 !== XU;) {
          if (XU.hasFilteredFields) {
            const UU = XU.ref[FU];
            if (this.changes.has(UU)) break;
            zU.push(XU)
          }
          XU = XU.parent?.[aU]
        }
        for (let cU = zU.length - 1; cU >= 0; cU--) this.changes.set(zU[cU].ref[FU], new Map)
      }
      remove(UU) {
        let XU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : pc,
          zU = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        const cU = UU?.[aU];
        if (!cU) return console.warn(`StateView#remove(): expected a Schema instance or collection, received ${uc(UU)}`), this;
        const QU = cU.parent?.[aU];
        if (QU?.isStreamCollection) return this.unmarkVisible(cU), this.iterable && !zU && Oc(this.items, this.items.indexOf(UU)),
          function(UU, XU, zU, cU, QU) {
            const AU = UU._stream;
            if (void 0 === AU) return !1;
            const FU = AU.pendingByView.get(XU);
            if (FU?.has(cU)) return FU.delete(cU), !1;
            const oU = AU.sentByView.get(XU);
            if (oU?.has(cU)) {
              oU.delete(cU);
              let UU = QU.get(zU);
              return void 0 === UU && (UU = new Map, QU.set(zU, UU)), UU.set(cU, yU.DELETE), !0
            }
          }(cU.parent, this.id, cU.parent[FU], cU.parentIndex, this.changes), this._recursiveDeleteVisibleChangeTree(cU), this;
        if (cU.isStreamCollection) {
          this.unmarkVisible(cU), this.iterable && !zU && Oc(this.items, this.items.indexOf(UU));
          const XU = cU.ref,
            QU = XU._stream;
          if (void 0 !== QU) {
            QU.pendingByView.get(this.id)?.clear();
            const UU = QU.sentByView.get(this.id);
            if (void 0 !== UU && UU.size > 0) {
              const zU = XU[FU];
              let cU = this.changes.get(zU);
              void 0 === cU && (cU = new Map, this.changes.set(zU, cU));
              for (const XU of UU) cU.set(XU, yU.DELETE);
              UU.clear()
            }
          }
          return this
        }
        this.unmarkVisible(cU), this.iterable && !zU && Oc(this.items, this.items.indexOf(UU));
        const AU = cU.ref,
          oU = AU.constructor[Symbol.metadata],
          DU = AU[FU];
        this._touchAncestorsOf(cU);
        let EU = this.changes.get(DU);
        if (void 0 === EU && (EU = new Map, this.changes.set(DU, EU)), XU === pc) {
          const UU = cU.parent;
          if (UU && !JX.isValidInstance(UU) && cU.isFiltered) {
            const XU = QU.isArray ? cU : cU.parentIndex,
              zU = UU[FU];
            let AU = this.changes.get(zU);
            void 0 === AU ? (AU = new Map, this.changes.set(zU, AU)) : AU.get(XU) === yU.ADD && this._dropPendingEntries(cU), AU.set(XU, yU.DELETE), this._recursiveDeleteVisibleChangeTree(cU)
          } else oU?.[CU]?.forEach((UU => this._removeViewField(cU, EU, UU)))
        } else {
          const UU = oU?.[wU];
          if (void 0 !== UU)
            for (let zU = XU; zU > 0; zU &= zU - 1) UU[zU & -zU]?.forEach((UU => this._removeViewField(cU, EU, UU)))
        }
        return void 0 === XU ? this.removeAllTagsOnTree(cU) : this.removeTag(cU, XU), this
      }
      has(UU) {
        return this.isVisible(UU[aU])
      }
      hasTag(UU) {
        let XU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : pc;
        return this.hasTagOnTree(UU[aU], XU)
      }
      subscribe(UU, XU) {
        const zU = UU?.[aU];
        if (!zU) return console.warn(`StateView#subscribe(): expected a Schema collection, received ${uc(UU)}`), this;
        if (void 0 === this._root && void 0 !== zU.root && this._bindRoot(zU.root), void 0 !== XU)
          if (zU.isStreamCollection) {
            const zU = LX(UU);
            null === XU ? zU.priorityByView?.delete(this.id) : (zU.priorityByView ??= new Map).set(this.id, XU)
          } else {
            const XU = UU?.constructor?.name ?? "collection",
              cU = zU.parent;
            if (void 0 === cU) console.warn(`StateView#subscribe(): \`priority\` ignored \u2014 this ${XU} is not attached to a state yet, so it cannot be identified as a stream. Subscribe after assigning it to the state.`);
            else {
              const UU = cU?.constructor?.[Symbol.metadata]?.[zU.parentIndex]?.name,
                yU = UU ? `${cU.constructor.name}#${UU}` : XU;
              console.warn(`StateView#subscribe(): \`priority\` ignored \u2014 ${yU} is a ${XU}, not a streaming collection. Declare the field with .stream() (e.g. t.map(X).stream()) or use t.stream(X) to enable priority batching.`)
            }
          } if (this.isSubscribed(zU)) return this;
        const cU = void 0 !== zU.parent && !this.isVisible(zU);
        if (cU ? (this.addParentOf(zU, pc), this._add(UU, pc, !1, !1)) : this.markVisible(zU), this._setSubscribed(zU), zU.isStreamCollection) {
          const XU = UU;
          zU.forEachChild(((UU, zU) => {
            OX(XU, this.id, zU)
          }))
        } else cU || zU.forEachChild((UU => {
          this.markVisible(UU)
        }));
        return this
      }
      unsubscribe(UU) {
        const XU = UU?.[aU];
        if (!XU) return console.warn(`StateView#unsubscribe(): expected a Schema collection, received ${uc(UU)}`), this;
        if (!this.isSubscribed(XU)) return this;
        this._clearSubscribed(XU);
        const zU = XU.ref[FU];
        if (XU.isStreamCollection) {
          const XU = UU._stream;
          if (void 0 !== XU) {
            XU.pendingByView.get(this.id)?.clear();
            const UU = XU.sentByView.get(this.id);
            if (void 0 !== UU && UU.size > 0) {
              let XU = this.changes.get(zU);
              void 0 === XU && (XU = new Map, this.changes.set(zU, XU));
              for (const zU of UU) XU.set(zU, yU.DELETE);
              UU.clear()
            }
          }
        } else {
          const UU = XU.isArray;
          let cU = this.changes.get(zU);
          XU.forEachChild(((XU, QU) => {
            void 0 === cU && (cU = new Map, this.changes.set(zU, cU)), cU.set(UU ? XU : QU, yU.DELETE), this.unmarkVisible(XU)
          }))
        }
        return this.unmarkVisible(XU), this
      }
      clear() {
        if (!this.iterable) throw new Error("StateView#clear() is only available for iterable StateView's. Use StateView(iterable: true) constructor.");
        for (let UU = 0, XU = this.items.length; UU < XU; UU++) this.remove(this.items[UU], pc, !0);
        this.items.length = 0
      }
      isChangeTreeVisible(UU) {
        let XU = this.isVisible(UU);
        if (!XU && UU.isVisibilitySharedWithParent)
          if (this.isVisible(UU.parent[aU])) this.markVisible(UU), XU = !0;
          else
            for (let zU = UU.extraParents; void 0 !== zU; zU = zU.next) {
              const cU = zU.ref[aU];
              if (cU.isFiltered && this.isVisible(cU)) {
                this.markVisible(UU), XU = !0;
                break
              }
            }
        return XU
      }
      _recursiveDeleteVisibleChangeTree(UU) {
        UU.forEachChild((UU => {
          this.unmarkVisible(UU), this._recursiveDeleteVisibleChangeTree(UU)
        }))
      }
      _dropPendingEntries(UU) {
        this.changes.delete(UU.ref[FU]), UU.forEachChild((UU => this._dropPendingEntries(UU)))
      }
      _removeViewField(UU, XU, zU) {
        const cU = XU.get(zU) === yU.ADD;
        XU.set(zU, yU.DELETE);
        const QU = UU.ref[UU.encDescriptor.names[zU]],
          AU = QU?.[aU];
        AU && (this.unmarkVisible(AU), this._recursiveDeleteVisibleChangeTree(AU), cU && this._dropPendingEntries(AU))
      }
    }

    function ic(UU) {
      UU.structSwitchEmitted || (UU.shouldEmitSwitch && (UU.buffer[UU.it.offset++] = 255, XX.number(UU.buffer, UU.ref[FU], UU.it)), UU.structSwitchEmitted = !0)
    }

    function Hc(UU, XU) {
      Vc(UU, XU, yU.ADD)
    }

    function Mc(UU, XU) {
      if (XU._fullSyncGen === UU.gen) return;
      XU._fullSyncGen = UU.gen;
      if (!UU.hasView || UU.view.isChangeTreeVisible(XU)) {
        const zU = XU.encDescriptor;
        UU.changeTree = XU, UU.ref = XU.ref, UU.encoder = zU.encoder, UU.filter = zU.filter, UU.metadata = zU.metadata, UU.treeIsFiltered = XU.isFiltered, UU.isSchema = zU.isSchema, UU.filterBitmask = zU.filterBitmask, UU.tags = zU.tags, UU.structSwitchEmitted = !1, UU.shouldEmitSwitch = UU.hasView || UU.it.offset > UU.initialOffset || XU !== UU.rootChangeTree, XU.isArray && XU.collDirty.size > 0 && (XU.flags |= 512), yz(XU, UU, Hc)
      }
      gz(XU, UU, vc)
    }

    function vc(UU, XU, zU) {
      Mc(UU, XU)
    }

    function Vc(UU, XU, zU) {
      if (XU < 0) {
        if (UU.treeIsFiltered !== UU.emitFiltered) return;
        return ic(UU), void(UU.buffer[UU.it.offset++] = 255 & Math.abs(XU))
      }
      if ((UU.isSchema ? UU.treeIsFiltered || (XU < 32 ? 0 !== (UU.filterBitmask & 1 << XU) : void 0 !== UU.tags[XU]) : UU.treeIsFiltered) !== UU.emitFiltered) return;
      const cU = UU.isEncodeAll ? yU.ADD : zU;
      void 0 !== cU && (void 0 === UU.filter || UU.filter(UU.ref, XU, UU.view)) && (ic(UU), UU.encoder(UU.self, UU.buffer, UU.changeTree, XU, cU, UU.it, UU.isEncodeAll, UU.hasView, UU.metadata))
    }

    function sc(UU, XU) {
      const zU = new Uint8Array(UU.length + XU.length);
      return zU.set(UU, 0), zU.set(XU, UU.length), zU
    }
    class nc {
      static BUFFER_SIZE = 16384;
      sharedBuffer = new Uint8Array(nc.BUFFER_SIZE);
      context;
      state;
      root;
      constructor(UU, XU) {
        this.context = vX.cache(UU.constructor), this.root = XU ?? new qc(this.context), this.setState(UU)
      }
      setState(UU) {
        this.state = UU, this.state[aU].setRoot(this.root)
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
          XU = arguments.length > 1 ? arguments[1] : void 0,
          zU = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : this.sharedBuffer,
          cU = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : UU.offset;
        return this._encodeChannel(UU, XU, zU, cU, !1)
      }
      encodeUnreliable() {
        let UU = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
            offset: 0
          },
          XU = arguments.length > 1 ? arguments[1] : void 0,
          zU = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : this.sharedBuffer,
          cU = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : UU.offset;
        return this._encodeChannel(UU, XU, zU, cU, !0)
      }
      _encodeChannel(UU, XU, zU, cU, yU) {
        this.root.pendingFilterRefresh.length > 0 && Az(this.root);
        const QU = void 0 !== XU,
          AU = this.state[aU],
          FU = this._encodeCtx;
        FU.self = this, FU.buffer = zU, FU.it = UU, FU.view = XU, FU.isEncodeAll = !1, FU.hasView = QU, FU.emitFiltered = QU;
        let oU = yU ? this.root.unreliableChanges : this.root.changes;
        for (; oU = oU.next;) {
          const zU = oU.changeTree;
          if (QU && !XU.isChangeTreeVisible(zU)) continue;
          const DU = yU ? zU.unreliableRecorder : zU;
          if (!DU || !DU.has()) continue;
          const EU = zU.encDescriptor;
          FU.changeTree = zU, FU.ref = zU.ref, FU.encoder = EU.encoder, FU.filter = EU.filter, FU.metadata = EU.metadata, FU.treeIsFiltered = zU.isFiltered, FU.isSchema = EU.isSchema, FU.filterBitmask = EU.filterBitmask, FU.tags = EU.tags, FU.structSwitchEmitted = !1, FU.isRootTree = zU === AU, FU.shouldEmitSwitch = QU || UU.offset > cU || !FU.isRootTree, DU.forEachWithCtx(FU, Vc)
        }
        return yU || QU || !this._isStreamBroadcastMode || this._emitStreamBroadcast(zU, UU), UU.offset > zU.byteLength ? (zU = this._resizeBuffer(zU, UU.offset), UU.offset = cU, this._encodeChannel(UU, XU, zU, cU, yU)) : zU.subarray(0, UU.offset)
      }
      encodeFullSync(UU, XU, zU, cU) {
        let yU = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : UU.offset;
        this.root.pendingFilterRefresh.length > 0 && Az(this.root);
        const QU = void 0 !== cU,
          AU = this.state[aU],
          FU = this._encodeCtx;
        return FU.self = this, FU.buffer = XU, FU.it = UU, FU.view = cU, FU.isEncodeAll = !0, FU.hasView = QU, FU.emitFiltered = zU, FU.gen = ++this._fullSyncGen, FU.initialOffset = yU, FU.rootChangeTree = AU, Mc(FU, AU), UU.offset > XU.byteLength ? (XU = this._resizeBuffer(XU, UU.offset), UU.offset = yU, this.encodeFullSync(UU, XU, zU, cU, yU)) : XU.subarray(0, UU.offset)
      }
      _resizeBuffer(UU, XU) {
        const zU = Math.ceil(XU / nc.BUFFER_SIZE) * nc.BUFFER_SIZE,
          cU = new Uint8Array(zU);
        return cU.set(UU), UU === this.sharedBuffer && (this.sharedBuffer = cU), cU
      }
      encodeAll() {
        let UU = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
            offset: 0
          },
          XU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.sharedBuffer;
        return this.encodeFullSync(UU, XU, !1)
      }
      encodeAllView(UU, XU, zU) {
        let cU = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : this.sharedBuffer;
        const yU = zU.offset;
        return cU = this.encodeFullSync(zU, cU, !0, UU, yU), sc(cU.subarray(0, XU), cU.subarray(yU, zU.offset))
      }
      ensureCapacity(UU, XU) {
        if (XU + nc.BUFFER_SIZE <= UU.byteLength) return UU;
        const zU = Math.ceil((XU + nc.BUFFER_SIZE) / nc.BUFFER_SIZE) * nc.BUFFER_SIZE,
          cU = new Uint8Array(zU);
        return cU.set(UU.subarray(0, XU)), UU === this.sharedBuffer && (this.sharedBuffer = cU), cU
      }
      encodeView(UU, XU, zU) {
        let cU = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : this.sharedBuffer,
          QU = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4];
        const AU = zU.offset;
        this._emitStreamPriority(UU);
        for (const oU of UU.changes.keys()) {
          const XU = UU.changes.get(oU),
            QU = this.root.changeTrees[oU];
          if (void 0 === QU) {
            UU.changes.delete(oU);
            continue
          }
          if (0 === XU.size) continue;
          const AU = QU.encDescriptor,
            DU = AU.encoder,
            EU = AU.metadata,
            YU = QU.ref,
            IU = QU.refTarget;
          cU = this.ensureCapacity(cU, zU.offset), cU[zU.offset++] = 255, XX.number(cU, YU[FU], zU);
          for (const [oU, pU] of XU) {
            let XU;
            if (-1 === oU) {
              const UU = IU.tmpItems,
                XU = IU.deletedIndexes;
              for (let AU = 0; AU < UU.length; AU++) void 0 !== UU[AU] && !0 !== XU[AU] && DU(this, cU, QU, AU, yU.ADD, zU, !1, !0, EU);
              continue
            }
            if ("number" === typeof oU) XU = oU;
            else {
              const zU = oU.indexInParent(YU);
              if (void 0 === zU) continue;
              if (XU = zU, pU === yU.ADD && QU.getChange(XU) === yU.DELETE) {
                UU.changes.delete(oU.ref[FU]);
                continue
              }
            }
            DU(this, cU, QU, XU, void 0 !== IU[NU](XU) && pU || yU.DELETE, zU, !1, !0, EU)
          }
        }
        return UU.changes.clear(), cU = this.encode(zU, UU, cU), QU ? sc(cU.subarray(0, XU), cU.subarray(AU, zU.offset)) : cU.subarray(AU, zU.offset)
      }
      encodeUnreliableView(UU, XU, zU) {
        let cU = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : this.sharedBuffer;
        const yU = zU.offset;
        return cU = this.encodeUnreliable(zU, UU, cU, yU), sc(cU.subarray(0, XU), cU.subarray(yU, zU.offset))
      }
      _emitStreamBroadcast(UU, XU) {
        const zU = this.root.streamTrees;
        for (const cU of zU) {
          const zU = cU,
            QU = zU[aU],
            AU = zU[FU];
          if (void 0 === AU) continue;
          const oU = zU._stream,
            DU = oU.broadcastDeletes,
            EU = oU.broadcastPending,
            YU = oU.sentBroadcast,
            IU = DU.size > 0,
            pU = EU.size > 0,
            tU = QU.encDescriptor,
            gU = tU.encoder,
            kU = tU.metadata;
          if (IU || pU) {
            if (UU[XU.offset++] = 255, XX.number(UU, AU, XU), IU) {
              for (const zU of DU) gU(this, UU, QU, zU, yU.DELETE, XU, !1, !1, kU);
              DU.clear()
            }
            const cU = oU.maxPerTick,
              pU = [];
            let tU = 0;
            const GU = [];
            for (const AU of EU) {
              if (tU >= cU) break;
              const FU = zU[NU](AU);
              void 0 !== FU ? (gU(this, UU, QU, AU, yU.ADD, XU, !1, !1, kU), YU.add(AU), pU.push(FU), GU.push(AU), tU++) : GU.push(AU)
            }
            for (const UU of GU) EU.delete(UU);
            for (const zU of pU) {
              const cU = zU[aU];
              if (void 0 === cU) continue;
              const QU = zU[FU];
              if (void 0 === QU) continue;
              UU[XU.offset++] = 255, XX.number(UU, QU, XU);
              const AU = cU.encDescriptor,
                oU = AU.encoder,
                DU = AU.metadata;
              cU.forEachLive((zU => {
                JX.hasUnreliableAtIndex(DU, zU) || oU(this, UU, cU, zU, yU.ADD, XU, !1, !1, DU)
              }))
            }
          }
          for (const cU of YU) {
            const yU = zU[NU](cU);
            if (void 0 === yU) continue;
            const QU = yU[aU];
            if (void 0 === QU || !QU.has()) continue;
            const AU = yU[FU];
            if (void 0 === AU) continue;
            UU[XU.offset++] = 255, XX.number(UU, AU, XU);
            const oU = QU.encDescriptor,
              DU = oU.encoder,
              EU = oU.metadata;
            QU.forEach(((zU, cU) => {
              zU < 0 || JX.hasUnreliableAtIndex(EU, zU) || DU(this, UU, QU, zU, cU, XU, !1, !1, EU)
            }))
          }
        }
      }
      _emitStreamPriority(UU) {
        const XU = this.root.streamTrees;
        if (0 === XU.size) return;
        const zU = UU.id;
        for (const cU of XU) {
          const XU = cU,
            QU = XU._stream,
            AU = QU.pendingByView.get(zU);
          if (void 0 === AU || 0 === AU.size) continue;
          const oU = QU.priorityByView?.get(zU),
            DU = void 0 !== oU,
            EU = QU.priority,
            YU = QU.maxPerTick,
            IU = [],
            pU = [];
          if (DU || void 0 !== EU) {
            const zU = [],
              cU = [];
            let yU = 0;
            for (const QU of AU) {
              const AU = XU[NU](QU);
              if (void 0 === AU) {
                pU.push(QU);
                continue
              }
              const FU = DU ? oU(AU) : EU(UU, AU);
              if (yU < YU) {
                let UU = yU++;
                for (; UU > 0 && cU[UU - 1] < FU;) cU[UU] = cU[UU - 1], zU[UU] = zU[UU - 1], UU--;
                cU[UU] = FU, zU[UU] = QU
              } else if (FU > cU[YU - 1]) {
                let UU = YU - 1;
                for (; UU > 0 && cU[UU - 1] < FU;) cU[UU] = cU[UU - 1], zU[UU] = zU[UU - 1], UU--;
                cU[UU] = FU, zU[UU] = QU
              }
            }
            for (let UU = 0; UU < yU; UU++) IU.push(zU[UU])
          } else
            for (const UU of AU) {
              if (IU.length >= YU) break;
              IU.push(UU)
            }
          for (const UU of pU) AU.delete(UU);
          const tU = IU.length;
          let gU = QU.sentByView.get(zU);
          void 0 === gU && (gU = new Set, QU.sentByView.set(zU, gU));
          for (let zU = 0; zU < tU; zU++) {
            const cU = IU[zU],
              QU = XU[NU](cU);
            if (void 0 === QU) {
              AU.delete(cU);
              continue
            }
            UU._addImmediate(QU);
            const oU = QU[aU];
            if (void 0 !== oU) {
              const XU = QU[FU];
              let zU = UU.changes.get(XU);
              void 0 === zU && (zU = new Map, UU.changes.set(XU, zU));
              const cU = oU.metadata;
              oU.forEachLive((UU => {
                JX.hasUnreliableAtIndex(cU, UU) || zU.set(UU, yU.ADD)
              }))
            }
            AU.delete(cU), gU.add(cU)
          }
        }
      }
      discardChanges() {
        const UU = this.root.changes;
        let XU = UU.next;
        const zU = this.root;
        for (; XU;) {
          const UU = XU.next;
          XU.changeTree.endEncode(), zU.releaseNode(XU), XU = UU
        }
        UU.next = void 0, UU.tail = void 0
      }
      discardUnreliableChanges() {
        const UU = this.root.unreliableChanges;
        let XU = UU.next;
        const zU = this.root;
        for (; XU;) {
          const UU = XU.next;
          XU.changeTree.endEncodeUnreliable(), zU.releaseNode(XU), XU = UU
        }
        UU.next = void 0, UU.tail = void 0
      }
      tryEncodeTypeId(UU, XU, zU, cU) {
        const yU = this.context.getTypeId(XU),
          QU = this.context.getTypeId(zU);
        void 0 !== QU ? yU !== QU && (UU[cU.offset++] = 213, XX.number(UU, QU, cU)) : console.warn(`@colyseus/schema WARNING: Class "${zU.name}" is not registered on TypeRegistry - Please either tag the class with @entity or define a @type() field.`)
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
        const XU = 0 === UU.activeViews.size;
        for (const zU of UU.streamTrees)
          if (XU ? qX(zU) : wX(zU, UU)) return !0;
        return !1
      }
      get hasUnreliableChanges() {
        return void 0 !== this.root.unreliableChanges.next
      }
    }
    class mc extends Error {
      constructor(UU) {
        super(UU), this.name = "DecodingWarning"
      }
    }
    const lc = {
      value: 0,
      enumerable: !1,
      writable: !0
    };
    class xc {
      refs = new Map;
      refCount = {};
      deletedRefs = new Set;
      callbacks = {};
      nextUniqueId = 0;
      getNextUniqueId() {
        return this.nextUniqueId++
      }
      addRef(UU, XU) {
        let zU = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        this.refs.set(UU, XU), void 0 === XU[FU] ? (lc.value = UU, Object.defineProperty(XU, FU, lc)) : XU[FU] !== UU && (XU[FU] = UU), zU && (this.refCount[UU] = (this.refCount[UU] || 0) + 1), this.deletedRefs.has(UU) && this.deletedRefs.delete(UU)
      }
      removeRef(UU) {
        const XU = this.refCount[UU];
        if (void 0 !== XU)
          if (0 !== XU)(this.refCount[UU] = XU - 1) <= 0 && this.deletedRefs.add(UU);
          else try {
            const XU = this.refs.get(UU);
            throw new mc(`trying to remove refId '${UU}' with 0 refCount (${XU.constructor.name}: ${JSON.stringify(XU)})`)
          } catch (Qy) {
            console.warn(Qy)
          } else try {
            throw new mc("trying to remove refId that doesn't exist: " + UU)
          } catch (Qy) {
            console.warn(Qy)
          }
      }
      clearRefs() {
        this.refs.clear(), this.deletedRefs.clear(), this.callbacks = {}, this.refCount = {}
      }
      garbageCollectDeletedRefs() {
        this.deletedRefs.forEach((UU => {
          if (this.refCount[UU] > 0) return;
          const XU = this.refs.get(UU),
            zU = XU.constructor[Symbol.metadata];
          if (null != zU)
            for (const cU in zU) {
              const UU = XU[zU[cU].name];
              if ("object" === typeof UU && UU) {
                const XU = UU[FU];
                void 0 === XU || this.deletedRefs.has(XU) || this.removeRef(XU)
              }
            } else "function" === typeof XU[tU] && Array.from(XU.values()).forEach((UU => {
              const XU = UU[FU];
              void 0 === XU || this.deletedRefs.has(XU) || this.removeRef(XU)
            }));
          this.refs.delete(UU), delete this.refCount[UU], delete this.callbacks[UU]
        })), this.deletedRefs.clear()
      }
      addCallback(UU, XU, zU) {
        if (void 0 === UU) {
          const UU = "number" === typeof XU ? yU[XU] : XU;
          throw new Error(`Can't addCallback on '${UU}' (refId is undefined)`)
        }
        return this.callbacks[UU] || (this.callbacks[UU] = {}), this.callbacks[UU][XU] || (this.callbacks[UU][XU] = []), this.callbacks[UU][XU].push(zU), () => this.removeCallback(UU, XU, zU)
      }
      removeCallback(UU, XU, zU) {
        const cU = this.callbacks?.[UU]?.[XU]?.indexOf(zU);
        void 0 !== cU && -1 !== cU && Oc(this.callbacks[UU][XU], cU)
      }
    }
    class Jc {
      context;
      state;
      root;
      currentRefId = 0;
      Fq;
      resyncVisited = null;
      resyncDamaged = !1;
      constructor(UU, XU) {
        this.setState(UU), this.context = XU || new vX(UU.constructor)
      }
      setState(UU) {
        this.state = UU, this.root = new xc, this.root.addRef(0, UU)
      }
      decode(UU) {
        let XU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
            offset: 0
          },
          zU = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : this.state;
        const yU = void 0 !== this.Fq ? [] : null,
          QU = this.root,
          AU = UU.byteLength;
        let FU = zU.constructor[EU];
        for (this.currentRefId = 0; XU.offset < AU;) {
          if (UU[XU.offset] == cU) {
            XU.offset++, zU[BU]?.();
            const cU = GX.number(UU, XU),
              yU = QU.refs.get(cU);
            yU ? (zU = yU, FU = zU.constructor[EU], this.currentRefId = cU) : (console.error(`"refId" not found: ${cU}`, {
              previousRef: zU,
              previousRefId: this.currentRefId
            }), console.warn("Please report this issue to the developers."), this.skipCurrentStructure(UU, XU, AU));
            continue
          } - 1 !== FU(this, UU, XU, zU, yU) || (console.warn("@colyseus/schema: definition mismatch"), this.skipCurrentStructure(UU, XU, AU))
        }
        return zU[BU]?.(), null !== this.resyncVisited && function(UU, XU) {
          UU.resyncDamaged ? console.warn("@colyseus/schema: resync sweep skipped \u2014 parts of the payload could not be decoded. Stale entries may persist until the next resync.") : vz(UU, UU.state, new Set, XU)
        }(this, yU), null !== yU && this.Fq?.(yU), QU.garbageCollectDeletedRefs(), yU
      }
      decodeResync(UU) {
        let XU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
          offset: 0
        };
        this.resyncVisited = new Map, this.resyncDamaged = !1;
        try {
          return this.decode(UU, XU)
        } finally {
          this.resyncVisited = null
        }
      }
      skipCurrentStructure(UU, XU, zU) {
        null !== this.resyncVisited && (this.resyncDamaged = !0);
        const yU = {
          offset: XU.offset
        };
        for (; XU.offset < zU && (UU[XU.offset] !== cU || (yU.offset = XU.offset + 1, !this.root.refs.has(GX.number(UU, yU))));) XU.offset++
      }
      getInstanceType(UU, XU, zU) {
        let cU;
        if (213 === UU[XU.offset]) {
          XU.offset++;
          const zU = GX.number(UU, XU);
          cU = this.context.get(zU)
        }
        return cU || zU
      }
      createInstanceOfType(UU) {
        return UU.initializeForDecoder()
      }
      removeChildRefs(UU, XU) {
        const zU = "string" !== typeof UU[tU],
          cU = UU[FU];
        UU.forEach(((QU, AU) => {
          XU?.push({
            ref: UU,
            refId: cU,
            op: yU.DELETE,
            field: AU,
            value: void 0,
            previousValue: QU
          }), zU && this.root.removeRef(QU[FU])
        }))
      }
    }
    const jc = Lc({
        min: Ic.float64(),
        max: Ic.float64(),
        bits: Ic.uint8(),
        mode: Ic.uint8()
      }, "QuantizedDescriptor"),
      Kc = Lc({
        name: Ic.string(),
        type: Ic.string(),
        referencedType: Ic.number(),
        childPrimitive: Ic.string(),
        quantized: Ic.ref(jc).optional()
      }, "ReflectionField"),
      bc = Lc({
        id: Ic.number(),
        extendsId: Ic.number(),
        fields: Ic.array(Kc)
      }, "ReflectionType"),
      Tc = Lc({
        types: Ic.array(bc),
        rootType: Ic.number()
      }, "Reflection");

    function hc(UU) {
      const XU = UU.root,
        zU = XU.callbacks,
        cU = new WeakMap;
      let QU;

      function AU(UU, zU) {
        let DU = zU.instance?.constructor[Symbol.metadata] || UU,
          EU = zU.instance && "function" === typeof zU.instance.forEach || UU && !Cc.is(UU);
        if (DU && !EU) {
          const UU = function(UU, yU, AU, oU) {
            return oU && void 0 !== zU.instance[yU] && !cU.has(QU) && AU(zU.instance[yU], void 0), XU.addCallback(UU[FU], yU, AU)
          };
          return new Proxy({
            listen: function(XU, yU) {
              let AU = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
              if (zU.instance) return UU(zU.instance, XU, yU, AU);
              {
                let FU = () => {};
                return zU.onInstanceAvailable(((zU, oU) => {
                  FU = UU(zU, XU, yU, AU && oU && !cU.has(QU))
                })), () => FU()
              }
            },
            onChange: function(UU) {
              return XU.addCallback(zU.instance[FU], yU.REPLACE, UU)
            },
            bindTo: function(UU, cU) {
              return cU || (cU = Object.keys(DU).map((UU => DU[UU].name))), XU.addCallback(zU.instance[FU], yU.REPLACE, (() => {
                cU.forEach((XU => UU[XU] = zU.instance[XU]))
              }))
            }
          }, {
            get(UU, XU) {
              const cU = DU[DU[XU]];
              if (cU) {
                const UU = zU.instance?.[XU],
                  yU = cU => {
                    const yU = oU(zU.instance).listen(XU, ((UU, XU) => {
                      cU(UU, !1), yU?.()
                    }), !1);
                    void 0 !== UU?.[FU] && cU(UU, !0)
                  };
                return AU(cU.type, {
                  instance: void 0 !== UU?.[FU] && UU,
                  parentInstance: zU.instance,
                  onInstanceAvailable: yU
                })
              }
              return UU[XU]
            },
            has: (UU, XU) => void 0 !== DU[XU],
            set(UU, XU, zU) {
              throw new Error("not allowed")
            },
            deleteProperty(UU, XU) {
              throw new Error("not allowed")
            }
          })
        } {
          const UU = function(UU, zU, AU) {
              return AU && UU.forEach(((UU, XU) => zU(UU, XU))), XU.addCallback(UU[FU], yU.ADD, ((UU, XU) => {
                cU.set(zU, !0), QU = zU, zU(UU, XU), cU.delete(zU), QU = void 0
              }))
            },
            AU = function(UU, zU) {
              return XU.addCallback(UU[FU], yU.DELETE, zU)
            },
            oU = function(UU, zU) {
              return XU.addCallback(UU[FU], yU.REPLACE, zU)
            };
          return new Proxy({
            lG: function(XU) {
              let yU = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
              if (zU.instance) return UU(zU.instance, XU, yU && !cU.has(QU));
              if (zU.onInstanceAvailable) {
                let AU = () => {};
                return zU.onInstanceAvailable(((zU, FU) => {
                  AU = UU(zU, XU, yU && FU && !cU.has(QU))
                })), () => AU()
              }
            },
            Cw: function(UU) {
              if (zU.instance) return AU(zU.instance, UU);
              if (zU.onInstanceAvailable) {
                let XU = () => {};
                return zU.onInstanceAvailable((zU => {
                  XU = AU(zU, UU)
                })), () => XU()
              }
            },
            onChange: function(UU) {
              if (zU.instance) return oU(zU.instance, UU);
              if (zU.onInstanceAvailable) {
                let XU = () => {};
                return zU.onInstanceAvailable((zU => {
                  XU = oU(zU, UU)
                })), () => XU()
              }
            }
          }, {
            get(UU, XU) {
              if (!UU[XU]) throw new Error(`Can't access '${XU}' through callback proxy. access the instance directly.`);
              return UU[XU]
            },
            has: (UU, XU) => void 0 !== UU[XU],
            set(UU, XU, zU) {
              throw new Error("not allowed")
            },
            deleteProperty(UU, XU) {
              throw new Error("not allowed")
            }
          })
        }
      }

      function oU(UU) {
        return AU(void 0, {
          instance: UU
        })
      }
      return UU.Fq = function(UU) {
        const XU = new Set;
        for (let cU = 0, QU = UU.length; cU < QU; cU++) {
          const QU = UU[cU],
            AU = QU.refId,
            oU = QU.ref,
            DU = zU[AU];
          if (DU) {
            if ((QU.op & yU.DELETE) === yU.DELETE && Cc.isSchema(QU.previousValue)) {
              const UU = zU[QU.previousValue[FU]]?.[yU.DELETE];
              for (let XU = UU?.length - 1; XU >= 0; XU--) UU[XU]()
            }
            if (Cc.isSchema(oU)) {
              if (!XU.has(AU)) {
                const UU = DU?.[yU.REPLACE];
                for (let XU = UU?.length - 1; XU >= 0; XU--) UU[XU]()
              }
              if (DU.hasOwnProperty(QU.field)) {
                const UU = DU[QU.field];
                for (let XU = UU?.length - 1; XU >= 0; XU--) UU[XU](QU.value, QU.previousValue)
              }
            } else {
              if ((QU.op & yU.DELETE) === yU.DELETE) {
                if (void 0 !== QU.previousValue) {
                  const UU = DU[yU.DELETE];
                  for (let XU = UU?.length - 1; XU >= 0; XU--) UU[XU](QU.previousValue, QU.dynamicIndex ?? QU.field)
                }
                if ((QU.op & yU.ADD) === yU.ADD) {
                  const UU = DU[yU.ADD];
                  for (let XU = UU?.length - 1; XU >= 0; XU--) UU[XU](QU.value, QU.dynamicIndex ?? QU.field)
                }
              } else if ((QU.op & yU.ADD) === yU.ADD && QU.previousValue !== QU.value) {
                const UU = DU[yU.ADD];
                for (let XU = UU?.length - 1; XU >= 0; XU--) UU[XU](QU.value, QU.dynamicIndex ?? QU.field)
              }
              if (QU.value !== QU.previousValue && (void 0 !== QU.value || void 0 !== QU.previousValue)) {
                const UU = DU[yU.REPLACE];
                for (let XU = UU?.length - 1; XU >= 0; XU--) UU[XU](QU.value, QU.dynamicIndex ?? QU.field)
              }
            }
            XU.add(AU)
          }
        }
      }, oU
    }

    function Uy(UU, XU) {
      UU.Fq = XU
    }
    Tc.encode = function(UU) {
      let XU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
        offset: 0
      };
      const zU = UU.context,
        cU = new Tc,
        yU = new nc(cU),
        QU = zU.schemas.get(UU.state.constructor);
      QU > 0 && (cU.rootType = QU);
      const AU = new Set,
        FU = {},
        oU = UU => {
          if (void 0 === UU.extendsId || AU.has(UU.extendsId)) {
            AU.add(UU.id), cU.types.push(UU);
            const XU = FU[UU.id];
            void 0 !== XU && (delete FU[UU.id], XU.forEach((UU => oU(UU))))
          } else void 0 === FU[UU.extendsId] && (FU[UU.extendsId] = []), FU[UU.extendsId].push(UU)
        };
      zU.schemas.forEach(((UU, XU) => {
        const cU = new bc;
        cU.id = Number(UU);
        const yU = Object.getPrototypeOf(XU);
        yU !== Cc && (cU.extendsId = zU.schemas.get(yU));
        const QU = XU[Symbol.metadata];
        if (QU !== yU[Symbol.metadata]) {
          const UU = QU[LU] ?? -1;
          for (let XU = 0; XU <= UU; XU++) {
            const UU = QU[XU];
            if (void 0 === UU) continue;
            const yU = UU.name;
            if (!Object.prototype.hasOwnProperty.call(QU, yU)) continue;
            const AU = new Kc;
            let FU;
            if (AU.name = yU, "string" === typeof UU.type) FU = UU.type;
            else if (fX(UU.type)) {
              const XU = UU.type.quantized;
              FU = "quantized";
              const zU = new jc;
              zU.min = XU.min, zU.max = XU.max, zU.bits = XU.bits, zU.mode = XU.wrap ? 1 : 0, AU.quantized = zU
            } else {
              let XU;
              Cc.is(UU.type) ? (FU = "ref", XU = UU.type) : (FU = Object.keys(UU.type)[0], "string" === typeof UU.type[FU] ? AU.childPrimitive = UU.type[FU] : XU = UU.type[FU]), AU.referencedType = XU ? zU.getTypeId(XU) : -1
            }
            AU.type = FU, cU.fields.push(AU)
          }
        }
        oU(cU)
      }));
      for (const DU in FU) FU[DU].forEach((UU => cU.types.push(UU)));
      return yU.encodeAll(XU).slice(0, XU.offset)
    }, Tc.decode = function(UU, XU) {
      const zU = new Tc;
      new Jc(zU).decode(UU, XU);
      const cU = new vX;
      zU.types.forEach((UU => {
        const XU = cU.get(UU.extendsId) ?? Cc,
          zU = class extends XU {};
        vX.register(zU), cU.add(zU, UU.id)
      }), {});
      zU.types.forEach((UU => {
        const XU = cU.get(UU.id),
          yU = JX.initialize(XU),
          QU = [];
        let AU = UU;
        do {
          QU.push(AU), AU = zU.types.find((UU => UU.id === AU.extendsId))
        } while (AU);
        let FU = 0;
        QU.reverse().forEach((UU => {
          ((UU, XU, zU) => {
            XU.fields.forEach(((XU, yU) => {
              const QU = zU + yU;
              if (void 0 !== XU.quantized) {
                const zU = XU.quantized;
                JX.addField(UU, QU, XU.name, {
                  quantized: uX({
                    min: zU.min,
                    max: zU.max,
                    bits: zU.bits,
                    mode: 1 === zU.mode ? "wrap" : "clamp"
                  })
                })
              } else if (void 0 !== XU.referencedType) {
                const zU = XU.type,
                  yU = cU.get(XU.referencedType) ?? XU.childPrimitive;
                "ref" === zU ? JX.addField(UU, QU, XU.name, yU) : JX.addField(UU, QU, XU.name, {
                  [zU]: yU
                })
              } else JX.addField(UU, QU, XU.name, XU.type)
            }))
          })(yU, UU, FU), FU += UU.fields.length
        }))
      }));
      const yU = new(cU.get(zU.rootType || 0));
      return new Jc(yU, cU)
    }, Tc.makeEncodable = function(UU) {
      const XU = UU[Symbol.metadata];
      if (!XU) return UU;
      const zU = XU[LU];
      if (void 0 === zU) return UU;
      for (let cU = 0; cU <= zU; cU++) {
        const zU = XU[cU];
        zU && JX.defineField(UU, XU, cU, zU.name, zU.type)
      }
      return Object.prototype.hasOwnProperty.call(UU, WU) && delete UU[WU], UU
    };
    class Xy {
      DY;
      uniqueRefIds = new Set;
      isTriggering = !1;
      constructor(UU) {
        this.DY = UU, this.DY.Fq = this.Fq.bind(this)
      }
      get callbacks() {
        return this.DY.root.callbacks
      }
      get state() {
        return this.DY.state
      }
      addCallback(UU, XU, zU) {
        return this.DY.root.addCallback(UU, XU, zU)
      }
      addCallbackOrWaitCollectionAvailable(UU, XU, zU, cU) {
        let QU = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4],
          AU = () => {};
        const oU = () => AU(),
          DU = UU[XU];
        if (DU && void 0 !== DU[FU]) return QU = QU && !1 === this.isTriggering, zU === yU.ADD && QU && DU.forEach(((UU, XU) => {
          cU(UU, XU)
        })), this.addCallback(DU[FU], zU, cU);
        {
          let yU;
          return yU = this.addCallback(UU[FU], XU, ((UU, XU) => {
            null !== UU && void 0 !== UU && (yU(), AU = this.addCallback(UU[FU], zU, cU))
          })), AU = yU, oU
        }
      }
      listen() {
        return "string" === typeof(arguments.length <= 0 ? void 0 : arguments[0]) ? this.listenInstance(this.state, arguments.length <= 0 ? void 0 : arguments[0], arguments.length <= 1 ? void 0 : arguments[1], arguments.length <= 2 ? void 0 : arguments[2]) : this.listenInstance(arguments.length <= 0 ? void 0 : arguments[0], arguments.length <= 1 ? void 0 : arguments[1], arguments.length <= 2 ? void 0 : arguments[2], arguments.length <= 3 ? void 0 : arguments[3])
      }
      listenInstance(UU, XU, zU) {
        let cU = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
        cU = cU && !1 === this.isTriggering;
        const yU = UU[XU];
        return cU && null !== yU && void 0 !== yU && zU(yU, void 0), this.addCallback(UU[FU], XU, zU)
      }
      onChange() {
        if (2 === arguments.length && "string" !== typeof(arguments.length <= 0 ? void 0 : arguments[0])) {
          const UU = arguments.length <= 0 ? void 0 : arguments[0],
            XU = arguments.length <= 1 ? void 0 : arguments[1];
          return this.addCallback(UU[FU], yU.REPLACE, XU)
        }
        return "string" === typeof(arguments.length <= 0 ? void 0 : arguments[0]) ? this.addCallbackOrWaitCollectionAvailable(this.state, arguments.length <= 0 ? void 0 : arguments[0], yU.REPLACE, arguments.length <= 1 ? void 0 : arguments[1]) : this.addCallbackOrWaitCollectionAvailable(arguments.length <= 0 ? void 0 : arguments[0], arguments.length <= 1 ? void 0 : arguments[1], yU.REPLACE, arguments.length <= 2 ? void 0 : arguments[2])
      }
      lG() {
        return "string" === typeof(arguments.length <= 0 ? void 0 : arguments[0]) ? this.addCallbackOrWaitCollectionAvailable(this.state, arguments.length <= 0 ? void 0 : arguments[0], yU.ADD, arguments.length <= 1 ? void 0 : arguments[1], !1 !== (arguments.length <= 2 ? void 0 : arguments[2])) : this.addCallbackOrWaitCollectionAvailable(arguments.length <= 0 ? void 0 : arguments[0], arguments.length <= 1 ? void 0 : arguments[1], yU.ADD, arguments.length <= 2 ? void 0 : arguments[2], !1 !== (arguments.length <= 3 ? void 0 : arguments[3]))
      }
      Cw() {
        return "string" === typeof(arguments.length <= 0 ? void 0 : arguments[0]) ? this.addCallbackOrWaitCollectionAvailable(this.state, arguments.length <= 0 ? void 0 : arguments[0], yU.DELETE, arguments.length <= 1 ? void 0 : arguments[1]) : this.addCallbackOrWaitCollectionAvailable(arguments.length <= 0 ? void 0 : arguments[0], arguments.length <= 1 ? void 0 : arguments[1], yU.DELETE, arguments.length <= 2 ? void 0 : arguments[2])
      }
      bindTo(UU, XU, zU) {
        let cU = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
        const QU = UU.constructor[Symbol.metadata];
        zU || (zU = Object.keys(QU).filter((UU => !isNaN(Number(UU)))).map((UU => QU[UU].name)));
        const AU = () => {
          for (const cU of zU) {
            const zU = UU[cU];
            void 0 !== zU && (XU[cU] = zU)
          }
        };
        return cU && AU(), this.addCallback(UU[FU], yU.REPLACE, AU)
      }
      Fq(UU) {
        this.uniqueRefIds.clear(), this.isTriggering = !0;
        for (let XU = 0, zU = UU.length; XU < zU; XU++) {
          const zU = UU[XU],
            cU = zU.refId,
            QU = zU.ref,
            AU = this.callbacks[cU];
          if (AU) {
            if ((zU.op & yU.DELETE) === yU.DELETE && Cc.isSchema(zU.previousValue)) {
              const UU = zU.previousValue[FU],
                XU = this.callbacks[UU]?.[yU.DELETE];
              if (XU)
                for (let zU = XU.length - 1; zU >= 0; zU--) try {
                  XU[zU]()
                } catch (Qy) {
                  console.error(Qy)
                }
            }
            if (Cc.isSchema(QU)) {
              if (!this.uniqueRefIds.has(cU)) {
                const UU = AU[yU.REPLACE];
                if (UU)
                  for (let XU = UU.length - 1; XU >= 0; XU--) try {
                    UU[XU]()
                  } catch (Qy) {
                    console.error(Qy)
                  }
              }
              const UU = AU[zU.field];
              if (UU)
                for (let XU = UU.length - 1; XU >= 0; XU--) try {
                  UU[XU](zU.value, zU.previousValue)
                } catch (Qy) {
                  console.error(Qy)
                }
            } else {
              const UU = zU.dynamicIndex ?? zU.field;
              if ((zU.op & yU.DELETE) === yU.DELETE) {
                if (void 0 !== zU.previousValue) {
                  const XU = AU[yU.DELETE];
                  if (XU)
                    for (let cU = XU.length - 1; cU >= 0; cU--) try {
                      XU[cU](zU.previousValue, UU)
                    } catch (Qy) {
                      console.error(Qy)
                    }
                }
                if ((zU.op & yU.ADD) === yU.ADD) {
                  const XU = AU[yU.ADD];
                  if (XU)
                    for (let cU = XU.length - 1; cU >= 0; cU--) try {
                      XU[cU](zU.value, UU)
                    } catch (Qy) {
                      console.error(Qy)
                    }
                }
              } else if ((zU.op & yU.ADD) === yU.ADD && zU.previousValue !== zU.value) {
                const XU = AU[yU.ADD];
                if (XU)
                  for (let cU = XU.length - 1; cU >= 0; cU--) try {
                    XU[cU](zU.value, UU)
                  } catch (Qy) {
                    console.error(Qy)
                  }
              }
              if (zU.value !== zU.previousValue) {
                const XU = AU[yU.REPLACE];
                if (XU)
                  for (let cU = XU.length - 1; cU >= 0; cU--) try {
                    XU[cU](UU, zU.value)
                  } catch (Qy) {
                    console.error(Qy)
                  }
              }
            }
            this.uniqueRefIds.add(cU)
          }
        }
        this.isTriggering = !1
      }
    }
    const zy = {
      get(UU) {
        if (UU instanceof Jc) return new Xy(UU);
        if ("DY" in UU.Lk) return new Xy(UU.Lk.DY);
        throw new Error("Invalid room or decoder")
      },
      getLegacy(UU) {
        if (UU instanceof Jc) return hc(UU);
        if ("DY" in UU.Lk) return hc(UU.Lk.DY);
        throw new Error("Invalid room or decoder")
      },
      getRawChanges: (UU, XU) => Uy(UU, XU)
    };
    class cy {
      _free = [];
      _factory;
      _maxSize;
      constructor(UU) {
        let XU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        this._factory = UU, this._maxSize = XU.maxSize ?? 1 / 0;
        const zU = XU.preallocate ?? 0;
        for (let cU = 0; cU < zU; cU++) this._free.push(UU())
      }
      acquire() {
        return this._free.length > 0 ? this._free.pop() : this._factory()
      }
      release(UU) {
        Cc.reset(UU), this._free.length < this._maxSize && this._free.push(UU)
      }
      get size() {
        return this._free.length
      }
    }

    function yy(UU) {
      return new cy((() => new UU), arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {})
    }
    RX("map", {
      constructor: yc
    }), RX("array", {
      constructor: zc
    }), RX("set", {
      constructor: Ac
    }), RX("collection", {
      constructor: Qc
    })
  },
  9661: (UU, XU, zU) => {
    zU.r(XU), zU.d(XU, {
      __addDisposableResource: () => fU,
      __assign: () => QU,
      __asyncDelegator: () => dU,
      __asyncGenerator: () => WU,
      __asyncValues: () => LU,
      __await: () => PU,
      __awaiter: () => pU,
      __classPrivateFieldGet: () => SU,
      __classPrivateFieldIn: () => uU,
      __classPrivateFieldSet: () => rU,
      __createBinding: () => tU,
      __decorate: () => FU,
      __disposeResources: () => HU,
      __esDecorate: () => DU,
      __exportStar: () => gU,
      __extends: () => yU,
      __generator: () => aU,
      __importDefault: () => OU,
      __importStar: () => qU,
      __makeTemplateObject: () => eU,
      __metadata: () => IU,
      __param: () => oU,
      __propKey: () => YU,
      __read: () => GU,
      __rest: () => AU,
      __rewriteRelativeImportExtension: () => MU,
      __runInitializers: () => EU,
      __setFunctionName: () => NU,
      __spread: () => BU,
      __spreadArray: () => RU,
      __spreadArrays: () => ZU,
      __values: () => kU,
      default: () => vU
    });
    var cU = function(UU, XU) {
      return cU = Object.setPrototypeOf || {
        __proto__: []
      }
      instanceof Array && function(UU, XU) {
        UU.__proto__ = XU
      } || function(UU, XU) {
        for (var zU in XU) Object.prototype.hasOwnProperty.call(XU, zU) && (UU[zU] = XU[zU])
      }, cU(UU, XU)
    };

    function yU(UU, XU) {
      if ("function" !== typeof XU && null !== XU) throw new TypeError("Class extends value " + String(XU) + " is not a constructor or null");

      function zU() {
        this.constructor = UU
      }
      cU(UU, XU), UU.prototype = null === XU ? Object.create(XU) : (zU.prototype = XU.prototype, new zU)
    }
    var QU = function() {
      return QU = Object.assign || function(UU) {
        for (var XU, zU = 1, cU = arguments.length; zU < cU; zU++)
          for (var yU in XU = arguments[zU]) Object.prototype.hasOwnProperty.call(XU, yU) && (UU[yU] = XU[yU]);
        return UU
      }, QU.apply(this, arguments)
    };

    function AU(UU, XU) {
      var zU = {};
      for (var cU in UU) Object.prototype.hasOwnProperty.call(UU, cU) && XU.indexOf(cU) < 0 && (zU[cU] = UU[cU]);
      if (null != UU && "function" === typeof Object.getOwnPropertySymbols) {
        var yU = 0;
        for (cU = Object.getOwnPropertySymbols(UU); yU < cU.length; yU++) XU.indexOf(cU[yU]) < 0 && Object.prototype.propertyIsEnumerable.call(UU, cU[yU]) && (zU[cU[yU]] = UU[cU[yU]])
      }
      return zU
    }

    function FU(UU, XU, zU, cU) {
      var yU, QU = arguments.length,
        AU = QU < 3 ? XU : null === cU ? cU = Object.getOwnPropertyDescriptor(XU, zU) : cU;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) AU = Reflect.decorate(UU, XU, zU, cU);
      else
        for (var FU = UU.length - 1; FU >= 0; FU--)(yU = UU[FU]) && (AU = (QU < 3 ? yU(AU) : QU > 3 ? yU(XU, zU, AU) : yU(XU, zU)) || AU);
      return QU > 3 && AU && Object.defineProperty(XU, zU, AU), AU
    }

    function oU(UU, XU) {
      return function(zU, cU) {
        XU(zU, cU, UU)
      }
    }

    function DU(UU, XU, zU, cU, yU, QU) {
      function AU(UU) {
        if (void 0 !== UU && "function" !== typeof UU) throw new TypeError("Function expected");
        return UU
      }
      for (var FU, oU = cU.kind, DU = "getter" === oU ? "get" : "setter" === oU ? "set" : "value", EU = !XU && UU ? cU.static ? UU : UU.prototype : null, YU = XU || (EU ? Object.getOwnPropertyDescriptor(EU, cU.name) : {}), NU = !1, IU = zU.length - 1; IU >= 0; IU--) {
        var pU = {};
        for (var aU in cU) pU[aU] = "access" === aU ? {} : cU[aU];
        for (var aU in cU.access) pU.access[aU] = cU.access[aU];
        pU.addInitializer = function(UU) {
          if (NU) throw new TypeError("Cannot add initializers after decoration has completed");
          QU.push(AU(UU || null))
        };
        var tU = (0, zU[IU])("accessor" === oU ? {
          get: YU.get,
          set: YU.set
        } : YU[DU], pU);
        if ("accessor" === oU) {
          if (void 0 === tU) continue;
          if (null === tU || "object" !== typeof tU) throw new TypeError("Object expected");
          (FU = AU(tU.get)) && (YU.get = FU), (FU = AU(tU.set)) && (YU.set = FU), (FU = AU(tU.init)) && yU.unshift(FU)
        } else(FU = AU(tU)) && ("field" === oU ? yU.unshift(FU) : YU[DU] = FU)
      }
      EU && Object.defineProperty(EU, cU.name, YU), NU = !0
    }

    function EU(UU, XU, zU) {
      for (var cU = arguments.length > 2, yU = 0; yU < XU.length; yU++) zU = cU ? XU[yU].call(UU, zU) : XU[yU].call(UU);
      return cU ? zU : void 0
    }

    function YU(UU) {
      return "symbol" === typeof UU ? UU : "".concat(UU)
    }

    function NU(UU, XU, zU) {
      return "symbol" === typeof XU && (XU = XU.description ? "[".concat(XU.description, "]") : ""), Object.defineProperty(UU, "name", {
        configurable: !0,
        value: zU ? "".concat(zU, " ", XU) : XU
      })
    }

    function IU(UU, XU) {
      if ("object" === typeof Reflect && "function" === typeof Reflect.metadata) return Reflect.metadata(UU, XU)
    }

    function pU(UU, XU, zU, cU) {
      return new(zU || (zU = Promise))((function(yU, QU) {
        function AU(UU) {
          try {
            oU(cU.next(UU))
          } catch (XU) {
            QU(XU)
          }
        }

        function FU(UU) {
          try {
            oU(cU.throw(UU))
          } catch (XU) {
            QU(XU)
          }
        }

        function oU(UU) {
          var XU;
          UU.done ? yU(UU.value) : (XU = UU.value, XU instanceof zU ? XU : new zU((function(UU) {
            UU(XU)
          }))).then(AU, FU)
        }
        oU((cU = cU.apply(UU, XU || [])).next())
      }))
    }

    function aU(UU, XU) {
      var zU, cU, yU, QU = {
          label: 0,
          sent: function() {
            if (1 & yU[0]) throw yU[1];
            return yU[1]
          },
          trys: [],
          ops: []
        },
        AU = Object.create(("function" === typeof Iterator ? Iterator : Object).prototype);
      return AU.next = FU(0), AU.throw = FU(1), AU.return = FU(2), "function" === typeof Symbol && (AU[Symbol.iterator] = function() {
        return this
      }), AU;

      function FU(FU) {
        return function(oU) {
          return function(FU) {
            if (zU) throw new TypeError("Generator is already executing.");
            for (; AU && (AU = 0, FU[0] && (QU = 0)), QU;) try {
              if (zU = 1, cU && (yU = 2 & FU[0] ? cU.return : FU[0] ? cU.throw || ((yU = cU.return) && yU.call(cU), 0) : cU.next) && !(yU = yU.call(cU, FU[1])).done) return yU;
              switch (cU = 0, yU && (FU = [2 & FU[0], yU.value]), FU[0]) {
                case 0:
                case 1:
                  yU = FU;
                  break;
                case 4:
                  return QU.label++, {
                    value: FU[1],
                    done: !1
                  };
                case 5:
                  QU.label++, cU = FU[1], FU = [0];
                  continue;
                case 7:
                  FU = QU.ops.pop(), QU.trys.pop();
                  continue;
                default:
                  if (!(yU = (yU = QU.trys).length > 0 && yU[yU.length - 1]) && (6 === FU[0] || 2 === FU[0])) {
                    QU = 0;
                    continue
                  }
                  if (3 === FU[0] && (!yU || FU[1] > yU[0] && FU[1] < yU[3])) {
                    QU.label = FU[1];
                    break
                  }
                  if (6 === FU[0] && QU.label < yU[1]) {
                    QU.label = yU[1], yU = FU;
                    break
                  }
                  if (yU && QU.label < yU[2]) {
                    QU.label = yU[2], QU.ops.push(FU);
                    break
                  }
                  yU[2] && QU.ops.pop(), QU.trys.pop();
                  continue
              }
              FU = XU.call(UU, QU)
            } catch (oU) {
              FU = [6, oU], cU = 0
            } finally {
              zU = yU = 0
            }
            if (5 & FU[0]) throw FU[1];
            return {
              value: FU[0] ? FU[1] : void 0,
              done: !0
            }
          }([FU, oU])
        }
      }
    }
    var tU = Object.create ? function(UU, XU, zU, cU) {
      void 0 === cU && (cU = zU);
      var yU = Object.getOwnPropertyDescriptor(XU, zU);
      yU && !("get" in yU ? !XU.__esModule : yU.writable || yU.configurable) || (yU = {
        enumerable: !0,
        get: function() {
          return XU[zU]
        }
      }), Object.defineProperty(UU, cU, yU)
    } : function(UU, XU, zU, cU) {
      void 0 === cU && (cU = zU), UU[cU] = XU[zU]
    };

    function gU(UU, XU) {
      for (var zU in UU) "default" === zU || Object.prototype.hasOwnProperty.call(XU, zU) || tU(XU, UU, zU)
    }

    function kU(UU) {
      var XU = "function" === typeof Symbol && Symbol.iterator,
        zU = XU && UU[XU],
        cU = 0;
      if (zU) return zU.call(UU);
      if (UU && "number" === typeof UU.length) return {
        next: function() {
          return UU && cU >= UU.length && (UU = void 0), {
            value: UU && UU[cU++],
            done: !UU
          }
        }
      };
      throw new TypeError(XU ? "Object is not iterable." : "Symbol.iterator is not defined.")
    }

    function GU(UU, XU) {
      var zU = "function" === typeof Symbol && UU[Symbol.iterator];
      if (!zU) return UU;
      var cU, yU, QU = zU.call(UU),
        AU = [];
      try {
        for (;
          (void 0 === XU || XU-- > 0) && !(cU = QU.next()).done;) AU.push(cU.value)
      } catch (FU) {
        yU = {
          error: FU
        }
      } finally {
        try {
          cU && !cU.done && (zU = QU.return) && zU.call(QU)
        } finally {
          if (yU) throw yU.error
        }
      }
      return AU
    }

    function BU() {
      for (var UU = [], XU = 0; XU < arguments.length; XU++) UU = UU.concat(GU(arguments[XU]));
      return UU
    }

    function ZU() {
      for (var UU = 0, XU = 0, zU = arguments.length; XU < zU; XU++) UU += arguments[XU].length;
      var cU = Array(UU),
        yU = 0;
      for (XU = 0; XU < zU; XU++)
        for (var QU = arguments[XU], AU = 0, FU = QU.length; AU < FU; AU++, yU++) cU[yU] = QU[AU];
      return cU
    }

    function RU(UU, XU, zU) {
      if (zU || 2 === arguments.length)
        for (var cU, yU = 0, QU = XU.length; yU < QU; yU++) !cU && yU in XU || (cU || (cU = Array.prototype.slice.call(XU, 0, yU)), cU[yU] = XU[yU]);
      return UU.concat(cU || Array.prototype.slice.call(XU))
    }

    function PU(UU) {
      return this instanceof PU ? (this.v = UU, this) : new PU(UU)
    }

    function WU(UU, XU, zU) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var cU, yU = zU.apply(UU, XU || []),
        QU = [];
      return cU = Object.create(("function" === typeof AsyncIterator ? AsyncIterator : Object).prototype), AU("next"), AU("throw"), AU("return", (function(UU) {
        return function(XU) {
          return Promise.resolve(XU).then(UU, DU)
        }
      })), cU[Symbol.asyncIterator] = function() {
        return this
      }, cU;

      function AU(UU, XU) {
        yU[UU] && (cU[UU] = function(XU) {
          return new Promise((function(zU, cU) {
            QU.push([UU, XU, zU, cU]) > 1 || FU(UU, XU)
          }))
        }, XU && (cU[UU] = XU(cU[UU])))
      }

      function FU(UU, XU) {
        try {
          (zU = yU[UU](XU)).value instanceof PU ? Promise.resolve(zU.value.v).then(oU, DU) : EU(QU[0][2], zU)
        } catch (cU) {
          EU(QU[0][3], cU)
        }
        var zU
      }

      function oU(UU) {
        FU("next", UU)
      }

      function DU(UU) {
        FU("throw", UU)
      }

      function EU(UU, XU) {
        UU(XU), QU.shift(), QU.length && FU(QU[0][0], QU[0][1])
      }
    }

    function dU(UU) {
      var XU, zU;
      return XU = {}, cU("next"), cU("throw", (function(UU) {
        throw UU
      })), cU("return"), XU[Symbol.iterator] = function() {
        return this
      }, XU;

      function cU(cU, yU) {
        XU[cU] = UU[cU] ? function(XU) {
          return (zU = !zU) ? {
            value: PU(UU[cU](XU)),
            done: !1
          } : yU ? yU(XU) : XU
        } : yU
      }
    }

    function LU(UU) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var XU, zU = UU[Symbol.asyncIterator];
      return zU ? zU.call(UU) : (UU = kU(UU), XU = {}, cU("next"), cU("throw"), cU("return"), XU[Symbol.asyncIterator] = function() {
        return this
      }, XU);

      function cU(zU) {
        XU[zU] = UU[zU] && function(XU) {
          return new Promise((function(cU, yU) {
            (function(UU, XU, zU, cU) {
              Promise.resolve(cU).then((function(XU) {
                UU({
                  value: XU,
                  done: zU
                })
              }), XU)
            })(cU, yU, (XU = UU[zU](XU)).done, XU.value)
          }))
        }
      }
    }

    function eU(UU, XU) {
      return Object.defineProperty ? Object.defineProperty(UU, "raw", {
        value: XU
      }) : UU.raw = XU, UU
    }
    var CU = Object.create ? function(UU, XU) {
        Object.defineProperty(UU, "default", {
          enumerable: !0,
          value: XU
        })
      } : function(UU, XU) {
        UU.default = XU
      },
      wU = function(UU) {
        return wU = Object.getOwnPropertyNames || function(UU) {
          var XU = [];
          for (var zU in UU) Object.prototype.hasOwnProperty.call(UU, zU) && (XU[XU.length] = zU);
          return XU
        }, wU(UU)
      };

    function qU(UU) {
      if (UU && UU.__esModule) return UU;
      var XU = {};
      if (null != UU)
        for (var zU = wU(UU), cU = 0; cU < zU.length; cU++) "default" !== zU[cU] && tU(XU, UU, zU[cU]);
      return CU(XU, UU), XU
    }

    function OU(UU) {
      return UU && UU.__esModule ? UU : {
        default: UU
      }
    }

    function SU(UU, XU, zU, cU) {
      if ("a" === zU && !cU) throw new TypeError("Private accessor was defined without a getter");
      if ("function" === typeof XU ? UU !== XU || !cU : !XU.has(UU)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
      return "m" === zU ? cU : "a" === zU ? cU.call(UU) : cU ? cU.value : XU.get(UU)
    }

    function rU(UU, XU, zU, cU, yU) {
      if ("m" === cU) throw new TypeError("Private method is not writable");
      if ("a" === cU && !yU) throw new TypeError("Private accessor was defined without a setter");
      if ("function" === typeof XU ? UU !== XU || !yU : !XU.has(UU)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
      return "a" === cU ? yU.call(UU, zU) : yU ? yU.value = zU : XU.set(UU, zU), zU
    }

    function uU(UU, XU) {
      if (null === XU || "object" !== typeof XU && "function" !== typeof XU) throw new TypeError("Cannot use 'in' operator on non-object");
      return "function" === typeof UU ? XU === UU : UU.has(XU)
    }

    function fU(UU, XU, zU) {
      if (null !== XU && void 0 !== XU) {
        if ("object" !== typeof XU && "function" !== typeof XU) throw new TypeError("Object expected.");
        var cU, yU;
        if (zU) {
          if (!Symbol.asyncDispose) throw new TypeError("Symbol.asyncDispose is not defined.");
          cU = XU[Symbol.asyncDispose]
        }
        if (void 0 === cU) {
          if (!Symbol.dispose) throw new TypeError("Symbol.dispose is not defined.");
          cU = XU[Symbol.dispose], zU && (yU = cU)
        }
        if ("function" !== typeof cU) throw new TypeError("Object not disposable.");
        yU && (cU = function() {
          try {
            yU.call(this)
          } catch (UU) {
            return Promise.reject(UU)
          }
        }), UU.stack.push({
          value: XU,
          dispose: cU,
          async: zU
        })
      } else zU && UU.stack.push({
        async: !0
      });
      return XU
    }
    var iU = "function" === typeof SuppressedError ? SuppressedError : function(UU, XU, zU) {
      var cU = new Error(zU);
      return cU.name = "SuppressedError", cU.error = UU, cU.suppressed = XU, cU
    };

    function HU(UU) {
      function XU(XU) {
        UU.error = UU.hasError ? new iU(XU, UU.error, "An error was suppressed during disposal.") : XU, UU.hasError = !0
      }
      var zU, cU = 0;
      return function yU() {
        for (; zU = UU.stack.pop();) try {
          if (!zU.async && 1 === cU) return cU = 0, UU.stack.push(zU), Promise.resolve().then(yU);
          if (zU.dispose) {
            var QU = zU.dispose.call(zU.value);
            if (zU.async) return cU |= 2, Promise.resolve(QU).then(yU, (function(UU) {
              return XU(UU), yU()
            }))
          } else cU |= 1
        } catch (AU) {
          XU(AU)
        }
        if (1 === cU) return UU.hasError ? Promise.reject(UU.error) : Promise.resolve();
        if (UU.hasError) throw UU.error
      }()
    }

    function MU(UU, XU) {
      return "string" === typeof UU && /^\.\.?\//.test(UU) ? UU.replace(/\.(tsx)$|((?:\.d)?)((?:\.[^./]+?)?)\.([cm]?)ts$/i, (function(UU, zU, cU, yU, QU) {
        return zU ? XU ? ".jsx" : ".js" : !cU || yU && QU ? cU + yU + "." + QU.toLowerCase() + "js" : UU
      })) : UU
    }
    const vU = {
      __extends: yU,
      __assign: QU,
      __rest: AU,
      __decorate: FU,
      __param: oU,
      __esDecorate: DU,
      __runInitializers: EU,
      __propKey: YU,
      __setFunctionName: NU,
      __metadata: IU,
      __awaiter: pU,
      __generator: aU,
      __createBinding: tU,
      __exportStar: gU,
      __values: kU,
      __read: GU,
      __spread: BU,
      __spreadArrays: ZU,
      __spreadArray: RU,
      __await: PU,
      __asyncGenerator: WU,
      __asyncDelegator: dU,
      __asyncValues: LU,
      __makeTemplateObject: eU,
      __importStar: qU,
      __importDefault: OU,
      __classPrivateFieldGet: SU,
      __classPrivateFieldSet: rU,
      __classPrivateFieldIn: uU,
      __addDisposableResource: fU,
      __disposeResources: HU,
      __rewriteRelativeImportExtension: MU
    }
  }
};
Object.freeze(modules);
for (const UU in modules) Object.freeze(modules[UU]);