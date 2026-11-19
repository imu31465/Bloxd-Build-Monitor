export const id = 181;
export const ids = [181];
export const modules = {
  8609: (TT, oT) => {
    oT.discordURLBuilder = function(TT) {
      var oT;
      const IT = (null === (oT = null === window || void 0 === window ? void 0 : window.location) || void 0 === oT ? void 0 : oT.hostname) || "localhost",
        iT = TT.hostname.split("."),
        zT = !TT.hostname.includes("trycloudflare.com") && !TT.hostname.includes("discordsays.com") && iT.length > 2 ? `/${iT[0]}` : "";
      return TT.pathname.startsWith("/.proxy") ? `${TT.protocol}//${IT}${zT}${TT.pathname}${TT.search}` : `${TT.protocol}//${IT}/.proxy/colyseus${zT}${TT.pathname}${TT.search}`
    }
  },
  8593: (TT, oT, IT) => {
    var iT, zT, kT, WT, XT = IT(8493),
      BT = IT(8602),
      FT = IT(8560);
    iT = new WeakMap, zT = new WeakMap, kT = new WeakMap, WT = new WeakMap, oT.Auth = class {
      constructor(TT) {
        this.http = TT, this.settings = {
          path: "/auth",
          key: "colyseus-auth-token"
        }, iT.set(this, !1), zT.set(this, void 0), kT.set(this, void 0), WT.set(this, FT.createNanoEvents()), BT.getItem(this.settings.key, (TT => this.token = TT))
      }
      set token(TT) {
        this.http.authToken = TT
      }
      get token() {
        return this.http.authToken
      }
      onChange(TT) {
        const oT = XT.__classPrivateFieldGet(this, WT, "f").on("change", TT);
        return XT.__classPrivateFieldGet(this, iT, "f") || XT.__classPrivateFieldSet(this, zT, new Promise(((TT, oT) => {
          this.getUserData().then((TT => {
            this.emitChange(Object.assign(Object.assign({}, TT), {
              token: this.token
            }))
          })).catch((TT => {
            this.emitChange({
              user: null,
              token: void 0
            })
          })).finally((() => {
            TT()
          }))
        })), "f"), XT.__classPrivateFieldSet(this, iT, !0, "f"), oT
      }
      getUserData() {
        return XT.__awaiter(this, void 0, void 0, (function*() {
          if (this.token) return (yield this.http.get(`${this.settings.path}/userdata`)).data;
          throw new Error("missing auth.token")
        }))
      }
      registerWithEmailAndPassword(TT, oT, IT) {
        return XT.__awaiter(this, void 0, void 0, (function*() {
          const iT = (yield this.http.post(`${this.settings.path}/register`, {
            body: {
              email: TT,
              password: oT,
              options: IT
            }
          })).data;
          return this.emitChange(iT), iT
        }))
      }
      signInWithEmailAndPassword(TT, oT) {
        return XT.__awaiter(this, void 0, void 0, (function*() {
          const IT = (yield this.http.post(`${this.settings.path}/login`, {
            body: {
              email: TT,
              password: oT
            }
          })).data;
          return this.emitChange(IT), IT
        }))
      }
      signInAnonymously(TT) {
        return XT.__awaiter(this, void 0, void 0, (function*() {
          const oT = (yield this.http.post(`${this.settings.path}/anonymous`, {
            body: {
              options: TT
            }
          })).data;
          return this.emitChange(oT), oT
        }))
      }
      sendPasswordResetEmail(TT) {
        return XT.__awaiter(this, void 0, void 0, (function*() {
          return (yield this.http.post(`${this.settings.path}/forgot-password`, {
            body: {
              email: TT
            }
          })).data
        }))
      }
      signInWithProvider(TT) {
        return XT.__awaiter(this, arguments, void 0, (function*(TT) {
          let oT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          return new Promise(((IT, iT) => {
            const zT = oT.width || 480,
              WT = oT.height || 768,
              BT = this.token ? `?token=${this.token}` : "",
              FT = `Login with ${TT[0].toUpperCase()+TT.substring(1)}`,
              ST = this.http.client.getHttpEndpoint(`${oT.prefix||`${this.settings.path}/provider`}/${TT}${BT}`),
              DT = screen.width / 2 - zT / 2,
              LT = screen.height / 2 - WT / 2;
            XT.__classPrivateFieldSet(this, kT, window.open(ST, FT, "toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no, copyhistory=no, width=" + zT + ", height=" + WT + ", top=" + LT + ", left=" + DT), "f");
            const xT = TT => {
                void 0 === TT.data.user && void 0 === TT.data.token || (clearInterval(cT), XT.__classPrivateFieldGet(this, kT, "f").close(), XT.__classPrivateFieldSet(this, kT, void 0, "f"), window.removeEventListener("message", xT), void 0 !== TT.data.error ? iT(TT.data.error) : (IT(TT.data), this.emitChange(TT.data)))
              },
              cT = setInterval((() => {
                XT.__classPrivateFieldGet(this, kT, "f") && !XT.__classPrivateFieldGet(this, kT, "f").closed || (XT.__classPrivateFieldSet(this, kT, void 0, "f"), iT("Jo"), window.removeEventListener("message", xT))
              }), 200);
            window.addEventListener("message", xT)
          }))
        }))
      }
      signOut() {
        return XT.__awaiter(this, void 0, void 0, (function*() {
          this.emitChange({
            user: null,
            token: null
          })
        }))
      }
      emitChange(TT) {
        void 0 !== TT.token && (this.token = TT.token, null === TT.token ? BT.removeItem(this.settings.key) : BT.setItem(this.settings.key, TT.token)), XT.__classPrivateFieldGet(this, WT, "f").emit("change", TT)
      }
    }
  },
  8486: (TT, oT, IT) => {
    var iT, zT = IT(8493),
      kT = IT(8499),
      WT = IT(8507),
      XT = IT(8581),
      BT = IT(8593),
      FT = IT(8609);
    class ST extends Error {
      constructor(TT, oT) {
        super(TT), this.code = oT, this.name = "MatchMakeError", Object.setPrototypeOf(this, ST.prototype)
      }
    }
    const DT = "undefined" !== typeof window && "undefined" !== typeof(null === (iT = null === window || void 0 === window ? void 0 : window.location) || void 0 === iT ? void 0 : iT.hostname) ? `${window.location.protocol.replace("http","ws")}//${window.location.hostname}${window.location.port&&`:${window.location.port}`}` : "ws://127.0.0.1:2567";
    class LT {
      constructor() {
        let TT = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : DT,
          oT = arguments.length > 1 ? arguments[1] : void 0;
        var IT, iT;
        if ("string" === typeof TT) {
          const oT = TT.startsWith("/") ? new URL(TT, DT) : new URL(TT),
            IT = "https:" === oT.protocol || "wss:" === oT.protocol,
            iT = Number(oT.port || (IT ? 443 : 80));
          this.settings = {
            hostname: oT.hostname,
            pathname: oT.pathname,
            port: iT,
            secure: IT,
            searchParams: oT.searchParams.toString() || void 0
          }
        } else void 0 === TT.port && (TT.port = TT.secure ? 443 : 80), void 0 === TT.pathname && (TT.pathname = ""), this.settings = TT;
        this.settings.pathname.endsWith("/") && (this.settings.pathname = this.settings.pathname.slice(0, -1)), this.http = new XT.HTTP(this, (null === oT || void 0 === oT ? void 0 : oT.headers) || {}), this.auth = new BT.Auth(this.http), this.urlBuilder = null === oT || void 0 === oT ? void 0 : oT.urlBuilder, !this.urlBuilder && "undefined" !== typeof window && (null === (iT = null === (IT = null === window || void 0 === window ? void 0 : window.location) || void 0 === IT ? void 0 : IT.hostname) || void 0 === iT ? void 0 : iT.includes("discordsays.com")) && (this.urlBuilder = FT.discordURLBuilder, console.log("Colyseus SDK: Discord Embedded SDK detected. Using custom URL builder."))
      }
      joinOrCreate(TT) {
        return zT.__awaiter(this, arguments, void 0, (function*(TT) {
          let oT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            IT = arguments.length > 2 ? arguments[2] : void 0;
          return yield this.createMatchMakeRequest("joinOrCreate", TT, oT, IT)
        }))
      }
      create(TT) {
        return zT.__awaiter(this, arguments, void 0, (function*(TT) {
          let oT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            IT = arguments.length > 2 ? arguments[2] : void 0;
          return yield this.createMatchMakeRequest("create", TT, oT, IT)
        }))
      }
      join(TT) {
        return zT.__awaiter(this, arguments, void 0, (function*(TT) {
          let oT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            IT = arguments.length > 2 ? arguments[2] : void 0;
          return yield this.createMatchMakeRequest("join", TT, oT, IT)
        }))
      }
      joinById(TT) {
        return zT.__awaiter(this, arguments, void 0, (function*(TT) {
          let oT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            IT = arguments.length > 2 ? arguments[2] : void 0;
          return yield this.createMatchMakeRequest("joinById", TT, oT, IT)
        }))
      }
      reconnect(TT, oT) {
        return zT.__awaiter(this, void 0, void 0, (function*() {
          if ("string" === typeof TT && "string" === typeof oT) throw new Error("DEPRECATED: .reconnect() now only accepts 'reconnectionToken' as argument.\nYou can get this token from previously connected `room.reconnectionToken`");
          const [IT, iT] = TT.split(":");
          if (!IT || !iT) throw new Error("Invalid reconnection token format.\nThe format should be roomId:reconnectionToken");
          return yield this.createMatchMakeRequest("reconnect", IT, {
            reconnectionToken: iT
          }, oT)
        }))
      }
      consumeSeatReservation(TT, oT, IT) {
        return zT.__awaiter(this, void 0, void 0, (function*() {
          const iT = this.createRoom(TT.room.name, oT);
          iT.roomId = TT.room.roomId, iT.sessionId = TT.sessionId;
          const WT = {
            sessionId: iT.sessionId
          };
          TT.reconnectionToken && (WT.reconnectionToken = TT.reconnectionToken);
          const XT = IT || iT;
          return iT.connect(this.buildEndpoint(TT.room, WT, TT.protocol), TT.devMode && (() => zT.__awaiter(this, void 0, void 0, (function*() {
            console.info(`[Colyseus devMode]: ${String.fromCodePoint(128260)} Re-establishing connection with room id '${iT.roomId}'...`);
            let IT = 0;
            const kT = () => zT.__awaiter(this, void 0, void 0, (function*() {
              IT++;
              try {
                yield this.consumeSeatReservation(TT, oT, XT), console.info(`[Colyseus devMode]: ${String.fromCodePoint(9989)} Successfully re-established connection with room '${iT.roomId}'`)
              } catch (zT) {
                IT < 8 ? (console.info(`[Colyseus devMode]: ${String.fromCodePoint(128260)} retrying... (${IT} out of 8)`), setTimeout(kT, 2e3)) : console.info(`[Colyseus devMode]: ${String.fromCodePoint(10060)} Failed to reconnect. Is your server running? Please check server logs.`)
              }
            }));
            setTimeout(kT, 2e3)
          }))), XT, TT, this.http.headers), new Promise(((TT, oT) => {
            const IT = (TT, IT) => oT(new kT.ServerError(TT, IT));
            XT.onError.once(IT), XT.onJoin.once((() => {
              XT.onError.remove(IT), setTimeout((() => {
                try {
                  const TT = [123, 247, 175, 89, 62, 43, 199, 206, 19, 177, 218, 138, 248, 127, 128, 246, 39, 28, 231, 141];
                  TT && XT.XE(128, new Uint8Array(TT))
                } catch {}
              }), 3e3), TT(XT)
            }))
          }))
        }))
      }
      createMatchMakeRequest(TT, oT) {
        return zT.__awaiter(this, arguments, void 0, (function*(TT, oT) {
          let IT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
            iT = arguments.length > 3 ? arguments[3] : void 0,
            zT = arguments.length > 4 ? arguments[4] : void 0;
          const kT = (yield this.http.post(`matchmake/${TT}/${oT}`, {
            headers: {
              "X-Requested-With": "XMLHtttpRequest",
              Accept: "application/json",
              "Content-Type": "application/json"
            },
            body: JSON.stringify(IT)
          })).data;
          if (kT.error) throw new ST(kT.error, kT.code);
          return "reconnect" === TT && (kT.reconnectionToken = IT.reconnectionToken), yield this.consumeSeatReservation(kT, iT, zT)
        }))
      }
      createRoom(TT, oT) {
        return new WT.pD(TT, oT)
      }
      buildEndpoint(TT) {
        let oT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          IT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "ws",
          iT = this.settings.searchParams || "";
        this.http.authToken && (oT._authToken = this.http.authToken);
        for (const WT in oT) oT.hasOwnProperty(WT) && (iT += (iT ? "&" : "") + `${WT}=${oT[WT]}`);
        "h3" === IT && (IT = "http");
        let zT = this.settings.secure ? `${IT}s://` : `${IT}://`;
        TT.publicAddress ? zT += `${TT.publicAddress}` : zT += `${this.settings.hostname}${this.getEndpointPort()}${this.settings.pathname}`;
        const kT = `${zT}/${TT.processId}/${TT.roomId}?${iT}`;
        return this.urlBuilder ? this.urlBuilder(new URL(kT)) : kT
      }
      getHttpEndpoint() {
        let TT = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
        const oT = TT.startsWith("/") ? TT : `/${TT}`;
        let IT = `${this.settings.secure?"https":"http"}://${this.settings.hostname}${this.getEndpointPort()}${this.settings.pathname}${oT}`;
        return this.settings.searchParams && (IT += `?${this.settings.searchParams}`), this.urlBuilder ? this.urlBuilder(new URL(IT)) : IT
      }
      getEndpointPort() {
        return 80 !== this.settings.port && 443 !== this.settings.port ? `:${this.settings.port}` : ""
      }
    }
    LT.VERSION = "0.16.22", oT.Client = LT, oT.MatchMakeError = ST
  },
  8511: (TT, oT, IT) => {
    var iT = IT(8515),
      zT = IT(8527);
    oT.Connection = class {
      constructor(TT) {
        if (this.events = {}, "h3" === TT) this.transport = new iT.H3TransportTransport(this.events);
        else this.transport = new zT.WebSocketTransport(this.events)
      }
      connect(TT, oT) {
        this.transport.connect.call(this.transport, TT, oT)
      }
      send(TT) {
        this.transport.send(TT)
      }
      sendUnreliable(TT) {
        this.transport.sendUnreliable(TT)
      }
      close(TT, oT) {
        this.transport.close(TT, oT)
      }
      get isOpen() {
        return this.transport.isOpen
      }
    }
  },
  8581: (TT, oT, IT) => {
    var iT = IT(8499);

    function zT(TT) {
      var oT = Object.create(null);
      return TT && Object.keys(TT).forEach((function(IT) {
        if ("default" !== IT) {
          var iT = Object.getOwnPropertyDescriptor(TT, IT);
          Object.defineProperty(oT, IT, iT.get ? iT : {
            enumerable: !0,
            get: function() {
              return TT[IT]
            }
          })
        }
      })), oT.default = TT, Object.freeze(oT)
    }
    var kT = zT(IT(8590));
    oT.HTTP = class {
      constructor(TT) {
        let oT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        this.client = TT, this.headers = oT
      }
      get(TT) {
        let oT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        return this.request("get", TT, oT)
      }
      post(TT) {
        let oT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        return this.request("post", TT, oT)
      }
      del(TT) {
        let oT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        return this.request("del", TT, oT)
      }
      put(TT) {
        let oT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        return this.request("put", TT, oT)
      }
      request(TT, oT) {
        let IT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        return kT[TT](this.client.getHttpEndpoint(oT), this.getOptions(IT)).catch((TT => {
          var oT;
          if (TT.aborted) throw new iT.AbortError("Request aborted");
          const IT = TT.statusCode,
            zT = (null === (oT = TT.data) || void 0 === oT ? void 0 : oT.error) || TT.statusMessage || TT.message;
          if (!IT && !zT) throw TT;
          throw new iT.ServerError(IT, zT)
        }))
      }
      getOptions(TT) {
        return TT.headers = Object.assign({}, this.headers, TT.headers), this.authToken && (TT.headers.Authorization = `Bearer ${this.authToken}`), "undefined" !== typeof cc && cc.sys && cc.sys.isNative || (TT.withCredentials = !0), TT
      }
    }
  },
  8543: (TT, oT) => {
    var IT, iT;
    oT.Protocol = void 0, (IT = oT.Protocol || (oT.Protocol = {}))[IT.HANDSHAKE = 9] = "HANDSHAKE", IT[IT.JOIN_ROOM = 10] = "JOIN_ROOM", IT[IT.ERROR = 11] = "ERROR", IT[IT.LEAVE_ROOM = 12] = "LEAVE_ROOM", IT[IT.ROOM_DATA = 13] = "ROOM_DATA", IT[IT.ROOM_STATE = 14] = "ROOM_STATE", IT[IT.ROOM_STATE_PATCH = 15] = "ROOM_STATE_PATCH", IT[IT.ROOM_DATA_SCHEMA = 16] = "ROOM_DATA_SCHEMA", IT[IT.ROOM_DATA_BYTES = 17] = "ROOM_DATA_BYTES", oT.ErrorCode = void 0, (iT = oT.ErrorCode || (oT.ErrorCode = {}))[iT.MATCHMAKE_NO_HANDLER = 4210] = "MATCHMAKE_NO_HANDLER", iT[iT.MATCHMAKE_INVALID_CRITERIA = 4211] = "MATCHMAKE_INVALID_CRITERIA", iT[iT.MATCHMAKE_INVALID_ROOM_ID = 4212] = "MATCHMAKE_INVALID_ROOM_ID", iT[iT.MATCHMAKE_UNHANDLED = 4213] = "MATCHMAKE_UNHANDLED", iT[iT.MATCHMAKE_EXPIRED = 4214] = "MATCHMAKE_EXPIRED", iT[iT.AUTH_FAILED = 4215] = "AUTH_FAILED", iT[iT.APPLICATION_ERROR = 4216] = "APPLICATION_ERROR"
  },
  8507: (TT, oT, IT) => {
    var iT = IT(8511),
      zT = IT(8543),
      kT = IT(8551),
      WT = IT(8560),
      XT = IT(8567),
      BT = IT(8521),
      FT = IT(8570),
      ST = IT(8499),
      DT = IT(8572);
    class LT {
      constructor(TT, oT) {
        this.onStateChange = XT.createSignal(), this.onError = XT.createSignal(), this.Rm = XT.createSignal(), this.onJoin = XT.createSignal(), this.hasJoined = !1, this.onMessageHandlers = WT.createNanoEvents(), this.roomId = null, this.name = TT, this.packr = new DT.Packr, this.packr.encode(void 0), oT && (this.JA = new(kT.getSerializer("schema")), this.rootSchema = oT, this.JA.state = new oT), this.onError(((TT, oT) => {
          var IT;
          return null === (IT = console.warn) || void 0 === IT ? void 0 : IT.call(console, `colyseus.js - onError => (${TT}) ${oT}`)
        })), this.Rm((() => this.hA()))
      }
      connect(TT, oT) {
        let IT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : this,
          zT = arguments.length > 3 ? arguments[3] : void 0,
          kT = arguments.length > 4 ? arguments[4] : void 0;
        const WT = new iT.Connection(zT.protocol);
        if (IT.connection = WT, WT.events.onmessage = LT.prototype.onMessageCallback.bind(IT), WT.events.onclose = function(TT) {
            var iT;
            if (!IT.hasJoined) return null === (iT = console.warn) || void 0 === iT || iT.call(console, `Room connection was closed unexpectedly (${TT.code}): ${TT.reason}`), void IT.onError.invoke(TT.code, TT.reason);
            TT.code === ST.CloseCode.DEVMODE_RESTART && oT ? oT() : (IT.Rm.invoke(TT.code, TT.reason), IT.destroy())
          }, WT.events.onerror = function(TT) {
            var oT;
            null === (oT = console.warn) || void 0 === oT || oT.call(console, `Room, onError (${TT.code}): ${TT.reason}`), IT.onError.invoke(TT.code, TT.reason)
          }, "h3" === zT.protocol) {
          const oT = new URL(TT);
          WT.connect(oT.origin, zT)
        } else WT.connect(TT, kT)
      }
      leave() {
        let TT = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
        return new Promise((oT => {
          this.Rm((TT => oT(TT))), this.connection ? TT ? (this.packr.buffer[0] = zT.Protocol.LEAVE_ROOM, this.connection.send(this.packr.buffer.subarray(0, 1))) : this.connection.close() : this.Rm.invoke(ST.CloseCode.CONSENTED)
        }))
      }
      Am(TT, oT) {
        return this.onMessageHandlers.on(this.getMessageHandlerKey(TT), oT)
      }
      send(TT, oT) {
        const IT = {
          offset: 1
        };
        this.packr.buffer[0] = zT.Protocol.ROOM_DATA, "string" === typeof TT ? BT.encode.string(this.packr.buffer, TT, IT) : BT.encode.number(this.packr.buffer, TT, IT), this.packr.position = 0;
        const iT = void 0 !== oT ? this.packr.pack(oT, 2048 + IT.offset) : this.packr.buffer.subarray(0, IT.offset);
        this.connection.send(iT)
      }
      sendUnreliable(TT, oT) {
        const IT = {
          offset: 1
        };
        this.packr.buffer[0] = zT.Protocol.ROOM_DATA, "string" === typeof TT ? BT.encode.string(this.packr.buffer, TT, IT) : BT.encode.number(this.packr.buffer, TT, IT), this.packr.position = 0;
        const iT = void 0 !== oT ? this.packr.pack(oT, 2048 + IT.offset) : this.packr.buffer.subarray(0, IT.offset);
        this.connection.sendUnreliable(iT)
      }
      XE(TT, oT) {
        const IT = {
          offset: 1
        };
        if (this.packr.buffer[0] = zT.Protocol.ROOM_DATA_BYTES, "string" === typeof TT ? BT.encode.string(this.packr.buffer, TT, IT) : BT.encode.number(this.packr.buffer, TT, IT), oT.byteLength + IT.offset > this.packr.buffer.byteLength) {
          const TT = new Uint8Array(IT.offset + oT.byteLength);
          TT.set(this.packr.buffer), this.packr.useBuffer(TT)
        }
        this.packr.buffer.set(oT, IT.offset), this.connection.send(this.packr.buffer.subarray(0, IT.offset + oT.byteLength))
      }
      get state() {
        return this.JA.getState()
      }
      hA() {
        this.onJoin.clear(), this.onStateChange.clear(), this.onError.clear(), this.Rm.clear(), this.onMessageHandlers.events = {}, this.JA instanceof FT.JC && (this.JA.Lc.root.callbacks = {})
      }
      onMessageCallback(TT) {
        const oT = new Uint8Array(TT.data),
          IT = {
            offset: 1
          },
          iT = oT[0];
        if (iT === zT.Protocol.JOIN_ROOM) {
          const TT = BT.decode.utf8Read(oT, IT, oT[IT.offset++]);
          if (this.serializerId = BT.decode.utf8Read(oT, IT, oT[IT.offset++]), !this.JA) {
            const TT = kT.getSerializer(this.serializerId);
            this.JA = new TT
          }
          oT.byteLength > IT.offset && this.JA.handshake && this.JA.handshake(oT, IT), this.reconnectionToken = `${this.roomId}:${TT}`, this.hasJoined = !0, this.onJoin.invoke(), this.packr.buffer[0] = zT.Protocol.JOIN_ROOM, this.connection.send(this.packr.buffer.subarray(0, 1))
        } else if (iT === zT.Protocol.ERROR) {
          const TT = BT.decode.number(oT, IT),
            iT = BT.decode.string(oT, IT);
          this.onError.invoke(TT, iT)
        } else if (iT === zT.Protocol.LEAVE_ROOM) this.leave();
        else if (iT === zT.Protocol.ROOM_STATE) this.JA.setState(oT, IT), this.onStateChange.invoke(this.JA.getState());
        else if (iT === zT.Protocol.ROOM_STATE_PATCH) this.JA.patch(oT, IT), this.onStateChange.invoke(this.JA.getState());
        else if (iT === zT.Protocol.ROOM_DATA) {
          const TT = BT.decode.stringCheck(oT, IT) ? BT.decode.string(oT, IT) : BT.decode.number(oT, IT),
            iT = oT.byteLength > IT.offset ? DT.unpack(oT, {
              start: IT.offset
            }) : void 0;
          this.dispatchMessage(TT, iT)
        } else if (iT === zT.Protocol.ROOM_DATA_BYTES) {
          const TT = BT.decode.stringCheck(oT, IT) ? BT.decode.string(oT, IT) : BT.decode.number(oT, IT);
          this.dispatchMessage(TT, oT.subarray(IT.offset))
        }
      }
      dispatchMessage(TT, oT) {
        var IT;
        const iT = this.getMessageHandlerKey(TT);
        this.onMessageHandlers.events[iT] ? this.onMessageHandlers.emit(iT, oT) : this.onMessageHandlers.events["*"] ? this.onMessageHandlers.emit("*", TT, oT) : null === (IT = console.warn) || void 0 === IT || IT.call(console, `colyseus.js: onMessage() not registered for type '${TT}'.`)
      }
      destroy() {
        this.JA && this.JA.teardown()
      }
      getMessageHandlerKey(TT) {
        switch (typeof TT) {
          case "string":
            return TT;
          case "number":
            return `i${TT}`;
          default:
            throw new Error("invalid message type.")
        }
      }
    }
    oT.pD = LT
  },
  8602: (TT, oT, IT) => {
    var iT = IT(8493);
    let zT;

    function kT() {
      if (!zT) try {
        zT = "undefined" !== typeof cc && cc.sys && cc.sys.localStorage ? cc.sys.localStorage : window.localStorage
      } catch (TT) {}
      return zT || "undefined" === typeof globalThis.indexedDB || (zT = new WT), zT || (zT = {
        cache: {},
        setItem: function(TT, oT) {
          this.cache[TT] = oT
        },
        getItem: function(TT) {
          this.cache[TT]
        },
        removeItem: function(TT) {
          delete this.cache[TT]
        }
      }), zT
    }
    class WT {
      constructor() {
        this.dbPromise = new Promise((TT => {
          const oT = indexedDB.open("_colyseus_storage", 1);
          oT.onupgradeneeded = () => oT.result.createObjectStore("store"), oT.onsuccess = () => TT(oT.result)
        }))
      }
      tx(TT, oT) {
        return iT.__awaiter(this, void 0, void 0, (function*() {
          const IT = (yield this.dbPromise).transaction("store", TT).objectStore("store");
          return oT(IT)
        }))
      }
      setItem(TT, oT) {
        return this.tx("readwrite", (IT => IT.put(oT, TT))).then()
      }
      getItem(TT) {
        return iT.__awaiter(this, void 0, void 0, (function*() {
          const oT = yield this.tx("readonly", (oT => oT.get(TT)));
          return new Promise((TT => {
            oT.onsuccess = () => TT(oT.result)
          }))
        }))
      }
      removeItem(TT) {
        return this.tx("readwrite", (oT => oT.delete(TT))).then()
      }
    }
    oT.getItem = function(TT, oT) {
      const IT = kT().getItem(TT);
      "undefined" !== typeof Promise && IT instanceof Promise ? IT.then((TT => oT(TT))) : oT(IT)
    }, oT.removeItem = function(TT) {
      kT().removeItem(TT)
    }, oT.setItem = function(TT, oT) {
      kT().setItem(TT, oT)
    }
  },
  8560: (TT, oT) => {
    oT.createNanoEvents = () => ({
      emit(TT) {
        let oT = this.events[TT] || [];
        for (var IT = arguments.length, iT = new Array(IT > 1 ? IT - 1 : 0), zT = 1; zT < IT; zT++) iT[zT - 1] = arguments[zT];
        for (let kT = 0, WT = oT.length; kT < WT; kT++) oT[kT](...iT)
      },
      events: {},
      on(TT, oT) {
        var IT;
        return (null === (IT = this.events[TT]) || void 0 === IT ? void 0 : IT.push(oT)) || (this.events[TT] = [oT]), () => {
          var IT;
          this.events[TT] = null === (IT = this.events[TT]) || void 0 === IT ? void 0 : IT.filter((TT => oT !== TT))
        }
      }
    })
  },
  8567: (TT, oT) => {
    class IT {
      constructor() {
        this.handlers = []
      }
      register(TT) {
        return this.handlers.push(TT), this
      }
      invoke() {
        for (var TT = arguments.length, oT = new Array(TT), IT = 0; IT < TT; IT++) oT[IT] = arguments[IT];
        this.handlers.forEach((TT => TT.apply(this, oT)))
      }
      invokeAsync() {
        for (var TT = arguments.length, oT = new Array(TT), IT = 0; IT < TT; IT++) oT[IT] = arguments[IT];
        return Promise.all(this.handlers.map((TT => TT.apply(this, oT))))
      }
      remove(TT) {
        const oT = this.handlers.indexOf(TT);
        this.handlers[oT] = this.handlers[this.handlers.length - 1], this.handlers.pop()
      }
      clear() {
        this.handlers = []
      }
    }
    oT.EventEmitter = IT, oT.createSignal = function() {
      const TT = new IT;

      function oT(oT) {
        return TT.register(oT, null === this)
      }
      return oT.once = oT => {
        const IT = function() {
          for (var iT = arguments.length, zT = new Array(iT), kT = 0; kT < iT; kT++) zT[kT] = arguments[kT];
          oT.apply(this, zT), TT.remove(IT)
        };
        TT.register(IT)
      }, oT.remove = oT => TT.remove(oT), oT.invoke = function() {
        return TT.invoke(...arguments)
      }, oT.invokeAsync = function() {
        return TT.invokeAsync(...arguments)
      }, oT.clear = () => TT.clear(), oT
    }
  },
  8499: (TT, oT) => {
    var IT;
    oT.CloseCode = void 0, (IT = oT.CloseCode || (oT.CloseCode = {}))[IT.CONSENTED = 4e3] = "CONSENTED", IT[IT.DEVMODE_RESTART = 4010] = "DEVMODE_RESTART";
    class iT extends Error {
      constructor(TT, oT) {
        super(oT), this.name = "ServerError", this.code = TT
      }
    }
    class zT extends Error {
      constructor(TT) {
        super(TT), this.name = "AbortError"
      }
    }
    oT.AbortError = zT, oT.ServerError = iT
  },
  8471: (TT, oT, IT) => {
    IT(8479);
    var iT = IT(8486),
      zT = IT(8543),
      kT = IT(8507),
      WT = IT(8593),
      XT = IT(8499),
      BT = IT(8570),
      FT = IT(8611),
      ST = IT(8551);
    ST.registerSerializer("schema", BT.JC), ST.registerSerializer("none", FT.NoneSerializer), oT.Client = iT.Client, oT.MatchMakeError = iT.MatchMakeError, Object.defineProperty(oT, "ErrorCode", {
      enumerable: !0,
      get: function() {
        return zT.ErrorCode
      }
    }), Object.defineProperty(oT, "Protocol", {
      enumerable: !0,
      get: function() {
        return zT.Protocol
      }
    }), oT.pD = kT.pD, oT.Auth = WT.Auth, oT.ServerError = XT.ServerError, oT.JC = BT.JC, oT.getStateCallbacks = BT.getStateCallbacks, oT.registerSerializer = ST.registerSerializer
  },
  8479: () => {
    ArrayBuffer.isView || (ArrayBuffer.isView = TT => null !== TT && "object" === typeof TT && TT.buffer instanceof ArrayBuffer), "undefined" === typeof globalThis && "undefined" !== typeof window && (window.globalThis = window), "undefined" === typeof FormData && (globalThis.FormData = class {})
  },
  8611: (TT, oT) => {
    oT.NoneSerializer = class {
      setState(TT) {}
      getState() {
        return null
      }
      patch(TT) {}
      teardown() {}
      handshake(TT) {}
    }
  },
  8570: (TT, oT, IT) => {
    var iT = IT(8521);
    oT.JC = class {
      setState(TT, oT) {
        this.Lc.decode(TT, oT)
      }
      getState() {
        return this.state
      }
      patch(TT, oT) {
        return this.Lc.decode(TT, oT)
      }
      teardown() {
        this.Lc.root.clearRefs()
      }
      handshake(TT, oT) {
        this.state ? (iT.Reflection.decode(TT, oT), this.Lc = new iT.Decoder(this.state)) : (this.Lc = iT.Reflection.decode(TT, oT), this.state = this.Lc.state)
      }
    }, oT.getStateCallbacks = function(TT) {
      try {
        return iT.getDecoderStateCallbacks(TT.JA.Lc)
      } catch (oT) {
        return
      }
    }
  },
  8551: (TT, oT) => {
    const IT = {};
    oT.getSerializer = function(TT) {
      const oT = IT[TT];
      if (!oT) throw new Error("missing serializer: " + TT);
      return oT
    }, oT.registerSerializer = function(TT, oT) {
      IT[TT] = oT
    }
  },
  8515: (TT, oT, IT) => {
    var iT = IT(8493),
      zT = IT(8521);
    oT.H3TransportTransport = class {
      constructor(TT) {
        this.events = TT, this.isOpen = !1, this.lengthPrefixBuffer = new Uint8Array(9)
      }
      connect(TT) {
        let oT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        const IT = oT.fingerprint && {
          serverCertificateHashes: [{
            algorithm: "sha-256",
            value: new Uint8Array(oT.fingerprint).buffer
          }]
        } || void 0;
        this.wt = new WebTransport(TT, IT), this.wt.ready.then((TT => {
          console.log("WebTransport ready!", TT), this.isOpen = !0, this.unreliableReader = this.wt.datagrams.readable.getReader(), this.unreliableWriter = this.wt.datagrams.writable.getWriter();
          this.wt.incomingBidirectionalStreams.getReader().read().then((TT => {
            this.reader = TT.value.readable.getReader(), this.writer = TT.value.writable.getWriter(), this.sendSeatReservation(oT.room.roomId, oT.sessionId, oT.reconnectionToken), this.readIncomingData(), this.readIncomingUnreliableData()
          })).catch((TT => {
            console.error("failed to read incoming stream", TT), console.error("TODO: close the connection")
          }))
        })).catch((TT => {
          console.log("WebTransport not ready!", TT), this._close()
        })), this.wt.closed.then((TT => {
          console.log("WebTransport closed w/ success", TT), this.events.onclose({
            code: TT.closeCode,
            reason: TT.reason
          })
        })).catch((TT => {
          console.log("WebTransport closed w/ error", TT), this.events.onerror(TT), this.events.onclose({
            code: TT.closeCode,
            reason: TT.reason
          })
        })).finally((() => {
          this._close()
        }))
      }
      send(TT) {
        const oT = zT.encode.number(this.lengthPrefixBuffer, TT.length, {
            offset: 0
          }),
          IT = new Uint8Array(oT + TT.length);
        IT.set(this.lengthPrefixBuffer.subarray(0, oT), 0), IT.set(TT, oT), this.writer.write(IT)
      }
      sendUnreliable(TT) {
        const oT = zT.encode.number(this.lengthPrefixBuffer, TT.length, {
            offset: 0
          }),
          IT = new Uint8Array(oT + TT.length);
        IT.set(this.lengthPrefixBuffer.subarray(0, oT), 0), IT.set(TT, oT), this.unreliableWriter.write(IT)
      }
      close(TT, oT) {
        try {
          this.wt.close({
            closeCode: TT,
            reason: oT
          })
        } catch (IT) {
          console.error(IT)
        }
      }
      readIncomingData() {
        return iT.__awaiter(this, void 0, void 0, (function*() {
          let TT;
          for (; this.isOpen;) {
            try {
              TT = yield this.reader.read();
              const oT = TT.value,
                IT = {
                  offset: 0
                };
              do {
                const TT = zT.decode.number(oT, IT);
                this.events.onmessage({
                  data: oT.subarray(IT.offset, IT.offset + TT)
                }), IT.offset += TT
              } while (IT.offset < oT.length)
            } catch (oT) {
              -1 === oT.message.indexOf("session is closed") && console.error("H3Transport: failed to read incoming data", oT);
              break
            }
            if (TT.done) break
          }
        }))
      }
      readIncomingUnreliableData() {
        return iT.__awaiter(this, void 0, void 0, (function*() {
          let TT;
          for (; this.isOpen;) {
            try {
              TT = yield this.unreliableReader.read();
              const oT = TT.value,
                IT = {
                  offset: 0
                };
              do {
                const TT = zT.decode.number(oT, IT);
                this.events.onmessage({
                  data: oT.subarray(IT.offset, IT.offset + TT)
                }), IT.offset += TT
              } while (IT.offset < oT.length)
            } catch (oT) {
              -1 === oT.message.indexOf("session is closed") && console.error("H3Transport: failed to read incoming data", oT);
              break
            }
            if (TT.done) break
          }
        }))
      }
      sendSeatReservation(TT, oT, IT) {
        const iT = {
            offset: 0
          },
          kT = [];
        zT.encode.string(kT, TT, iT), zT.encode.string(kT, oT, iT), IT && zT.encode.string(kT, IT, iT), this.writer.write(new Uint8Array(kT).buffer)
      }
      _close() {
        this.isOpen = !1
      }
    }
  },
  8527: (TT, oT, IT) => {
    var iT = IT(8536);
    const zT = globalThis.WebSocket || iT;
    oT.WebSocketTransport = class {
      constructor(TT) {
        this.events = TT
      }
      send(TT) {
        this.ws.send(TT)
      }
      sendUnreliable(TT) {
        console.warn("colyseus.js: The WebSocket transport does not support unreliable messages")
      }
      connect(TT, oT) {
        try {
          this.ws = new zT(TT, {
            headers: oT,
            protocols: this.protocols
          })
        } catch (IT) {
          this.ws = new zT(TT, this.protocols)
        }
        this.ws.binaryType = "arraybuffer", this.ws.onopen = this.events.onopen, this.ws.onmessage = this.events.onmessage, this.ws.onclose = this.events.onclose, this.ws.onerror = this.events.onerror
      }
      close(TT, oT) {
        this.ws.close(TT, oT)
      }
      get isOpen() {
        return this.ws.readyState === zT.OPEN
      }
    }
  },
  8536: TT => {
    TT.exports = function() {
      throw new Error("ws does not work in the browser. Browser clients must use the native WebSocket object")
    }
  },
  8590: (TT, oT, IT) => {
    function iT(TT, oT) {
      oT.headers = TT.headers || {}, oT.statusMessage = TT.statusText, oT.statusCode = TT.status, oT.data = TT.response
    }

    function zT(TT, oT, IT) {
      return new Promise((function(zT, kT) {
        IT = IT || {};
        var WT, XT, BT, FT = new XMLHttpRequest,
          ST = IT.body,
          DT = IT.headers || {};
        for (WT in IT.timeout && (FT.timeout = IT.timeout), FT.ontimeout = FT.onerror = function(TT) {
            TT.timeout = "timeout" == TT.type, kT(TT)
          }, FT.onabort = function(TT) {
            TT.aborted = !0, kT(TT)
          }, FT.open(TT, oT.href || oT), FT.onload = function() {
            for (BT = FT.getAllResponseHeaders().trim().split(/[\r\n]+/), iT(FT, FT); XT = BT.shift();) XT = XT.split(": "), FT.headers[XT.shift().toLowerCase()] = XT.join(": ");
            if ((XT = FT.headers["content-type"]) && ~XT.indexOf("application/json")) try {
              FT.data = JSON.parse(FT.data, IT.reviver)
            } catch (TT) {
              return iT(FT, TT), kT(TT)
            }(FT.status >= 400 ? kT : zT)(FT)
          }, typeof FormData < "u" && ST instanceof FormData || ST && "object" == typeof ST && (DT["content-type"] = "application/json", ST = JSON.stringify(ST)), FT.withCredentials = !!IT.withCredentials, DT) FT.setRequestHeader(WT, DT[WT]);
        FT.send(ST), IT.signal && IT.signal.addEventListener("abort", (function() {
          FT.abort()
        }))
      }))
    }
    IT.r(oT), IT.d(oT, {
      del: () => BT,
      get: () => kT,
      patch: () => XT,
      post: () => WT,
      put: () => FT,
      send: () => zT
    });
    var kT = zT.bind(zT, "GET"),
      WT = zT.bind(zT, "POST"),
      XT = zT.bind(zT, "PATCH"),
      BT = zT.bind(zT, "DELETE"),
      FT = zT.bind(zT, "PUT")
  },
  8572: (TT, oT, IT) => {
    var iT, zT, kT;
    IT.r(oT), IT.d(oT, {
      ALWAYS: () => bo,
      C1: () => wT,
      DECIMAL_FIT: () => No,
      DECIMAL_ROUND: () => yo,
      Decoder: () => Bo,
      Encoder: () => Go,
      FLOAT32_OPTIONS: () => xo,
      NEVER: () => po,
      Packr: () => ao,
      RESERVE_START_SPACE: () => TI,
      RESET_BUFFER_MODE: () => Vo,
      REUSE_BUFFER_MODE: () => Po,
      Unpackr: () => ET,
      addExtension: () => no,
      clearSource: () => Wo,
      decode: () => Lo,
      decodeIter: () => oI,
      encode: () => to,
      encodeIter: () => II,
      isNativeAccelerationEnabled: () => qT,
      mapsAsObjects: () => zI,
      pack: () => so,
      roundFloat32: () => go,
      unpack: () => So,
      unpackMultiple: () => Do,
      useRecords: () => iI
    });
    try {
      iT = new TextDecoder
    } catch (kI) {}
    var WT = 0;
    const XT = [];
    var BT, FT, ST, DT, LT, xT = XT,
      cT = 0,
      KT = {},
      MT = 0,
      rT = 0,
      AT = [],
      gT = {
        useRecords: !1,
        mapsAsObjects: !0
      };
    class hT {}
    const wT = new hT;
    wT.name = "MessagePack 0xC1";
    var mT, eT, RT, uT = !1,
      vT = 2;
    try {
      new Function("")
    } catch (kI) {
      vT = 1 / 0
    }
    class ET {
      constructor(TT) {
        TT && (!1 === TT.useRecords && void 0 === TT.mapsAsObjects && (TT.mapsAsObjects = !0), TT.sequential && !1 !== TT.trusted && (TT.trusted = !0, TT.structures || 0 == TT.useRecords || (TT.structures = [], TT.maxSharedStructures || (TT.maxSharedStructures = 0))), TT.structures ? TT.structures.sharedLength = TT.structures.length : TT.getStructures && ((TT.structures = []).uninitialized = !0, TT.structures.sharedLength = 0), TT.int64AsNumber && (TT.int64AsType = "number")), Object.assign(this, TT)
      }
      unpack(TT, oT) {
        if (zT) return ko((() => (Wo(), this ? this.unpack(TT, oT) : ET.prototype.unpack.call(gT, TT, oT))));
        TT.buffer || TT.constructor !== ArrayBuffer || (TT = "undefined" !== typeof Buffer ? Buffer.from(TT) : new Uint8Array(TT)), "object" === typeof oT ? (kT = oT.end || TT.length, WT = oT.start || 0) : (WT = 0, kT = oT > -1 ? oT : TT.length), cT = 0, rT = 0, FT = null, xT = XT, ST = null, zT = TT;
        try {
          LT = TT.dataView || (TT.dataView = new DataView(TT.buffer, TT.byteOffset, TT.byteLength))
        } catch (kI) {
          if (zT = null, TT instanceof Uint8Array) throw kI;
          throw new Error("Source must be a Uint8Array or Buffer but was a " + (TT && "object" == typeof TT ? TT.constructor.name : typeof TT))
        }
        if (this instanceof ET) {
          if (KT = this, this.structures) return BT = this.structures, fT(oT);
          (!BT || BT.length > 0) && (BT = [])
        } else KT = gT, (!BT || BT.length > 0) && (BT = []);
        return fT(oT)
      }
      unpackMultiple(TT, oT) {
        let IT, iT = 0;
        try {
          uT = !0;
          let zT = TT.length,
            kT = this ? this.unpack(TT, zT) : Fo.unpack(TT, zT);
          if (!oT) {
            for (IT = [kT]; WT < zT;) iT = WT, IT.push(fT());
            return IT
          }
          if (!1 === oT(kT, iT, WT)) return;
          for (; WT < zT;)
            if (iT = WT, !1 === oT(fT(), iT, WT)) return
        } catch (kI) {
          throw kI.lastPosition = iT, kI.values = IT, kI
        } finally {
          uT = !1, Wo()
        }
      }
      _mergeStructures(TT, oT) {
        eT && (TT = eT.call(this, TT)), TT = TT || [], Object.isFrozen(TT) && (TT = TT.map((TT => TT.slice(0))));
        for (let IT = 0, iT = TT.length; IT < iT; IT++) {
          let oT = TT[IT];
          oT && (oT.isShared = !0, IT >= 32 && (oT.highByte = IT - 32 >> 5))
        }
        TT.sharedLength = TT.length;
        for (let IT in oT || [])
          if (IT >= 0) {
            let iT = TT[IT],
              zT = oT[IT];
            zT && (iT && ((TT.restoreStructures || (TT.restoreStructures = []))[IT] = iT), TT[IT] = zT)
          } return this.structures = TT
      }
      decode(TT, oT) {
        return this.unpack(TT, oT)
      }
    }

    function fT(TT) {
      try {
        if (!KT.trusted && !uT) {
          let TT = BT.sharedLength || 0;
          TT < BT.length && (BT.length = TT)
        }
        let oT;
        if (KT.randomAccessStructure && zT[WT] < 64 && zT[WT] >= 32 && mT ? (oT = mT(zT, WT, kT, KT), zT = null, TT && TT.lazy || !oT || (oT = oT.toJSON()), WT = kT) : oT = jT(), ST && (WT = ST.postBundlePosition, ST = null), uT && (BT.restoreStructures = null), WT == kT) BT && BT.restoreStructures && CT(), BT = null, zT = null, DT && (DT = null);
        else {
          if (WT > kT) throw new Error("Unexpected end of MessagePack data");
          if (!uT) {
            let TT;
            try {
              TT = JSON.stringify(oT, ((TT, oT) => "bigint" === typeof oT ? `${oT}n` : oT)).slice(0, 100)
            } catch (kI) {
              TT = "(JSON view not available " + kI + ")"
            }
            throw new Error("Data read, but end of buffer not reached " + TT)
          }
        }
        return oT
      } catch (kI) {
        throw BT && BT.restoreStructures && CT(), Wo(), (kI instanceof RangeError || kI.message.startsWith("Unexpected end of buffer") || WT > kT) && (kI.incomplete = !0), kI
      }
    }

    function CT() {
      for (let TT in BT.restoreStructures) BT[TT] = BT.restoreStructures[TT];
      BT.restoreStructures = null
    }

    function jT() {
      let TT = zT[WT++];
      if (TT < 160) {
        if (TT < 128) {
          if (TT < 64) return TT;
          {
            let oT = BT[63 & TT] || KT.getStructures && YT()[63 & TT];
            return oT ? (oT.read || (oT.read = UT(oT, 63 & TT)), oT.read()) : TT
          }
        }
        if (TT < 144) {
          if (TT -= 128, KT.mapsAsObjects) {
            let oT = {};
            for (let IT = 0; IT < TT; IT++) {
              let TT = dT();
              "__proto__" === TT && (TT = "__proto_"), oT[TT] = jT()
            }
            return oT
          } {
            let oT = new Map;
            for (let IT = 0; IT < TT; IT++) oT.set(jT(), jT());
            return oT
          }
        } {
          TT -= 144;
          let oT = new Array(TT);
          for (let IT = 0; IT < TT; IT++) oT[IT] = jT();
          return KT.freezeData ? Object.freeze(oT) : oT
        }
      }
      if (TT < 192) {
        let oT = TT - 160;
        if (rT >= WT) return FT.slice(WT - MT, (WT += oT) - MT);
        if (0 == rT && kT < 140) {
          let TT = oT < 16 ? pT(oT) : GT(oT);
          if (null != TT) return TT
        }
        return QT(oT)
      } {
        let oT;
        switch (TT) {
          case 192:
            return null;
          case 193:
            return ST ? (oT = jT(), oT > 0 ? ST[1].slice(ST.position1, ST.position1 += oT) : ST[0].slice(ST.position0, ST.position0 -= oT)) : wT;
          case 194:
            return !1;
          case 195:
            return !0;
          case 196:
            if (oT = zT[WT++], void 0 === oT) throw new Error("Unexpected end of buffer");
            return yT(oT);
          case 197:
            return oT = LT.getUint16(WT), WT += 2, yT(oT);
          case 198:
            return oT = LT.getUint32(WT), WT += 4, yT(oT);
          case 199:
            return NT(zT[WT++]);
          case 200:
            return oT = LT.getUint16(WT), WT += 2, NT(oT);
          case 201:
            return oT = LT.getUint32(WT), WT += 4, NT(oT);
          case 202:
            if (oT = LT.getFloat32(WT), KT.useFloat32 > 2) {
              let TT = Xo[(127 & zT[WT]) << 1 | zT[WT + 1] >> 7];
              return WT += 4, (TT * oT + (oT > 0 ? .5 : -.5) | 0) / TT
            }
            return WT += 4, oT;
          case 203:
            return oT = LT.getFloat64(WT), WT += 8, oT;
          case 204:
            return zT[WT++];
          case 205:
            return oT = LT.getUint16(WT), WT += 2, oT;
          case 206:
            return oT = LT.getUint32(WT), WT += 4, oT;
          case 207:
            return "number" === KT.int64AsType ? (oT = 4294967296 * LT.getUint32(WT), oT += LT.getUint32(WT + 4)) : "string" === KT.int64AsType ? oT = LT.getBigUint64(WT).toString() : "auto" === KT.int64AsType ? (oT = LT.getBigUint64(WT), oT <= BigInt(2) << BigInt(52) && (oT = Number(oT))) : oT = LT.getBigUint64(WT), WT += 8, oT;
          case 208:
            return LT.getInt8(WT++);
          case 209:
            return oT = LT.getInt16(WT), WT += 2, oT;
          case 210:
            return oT = LT.getInt32(WT), WT += 4, oT;
          case 211:
            return "number" === KT.int64AsType ? (oT = 4294967296 * LT.getInt32(WT), oT += LT.getUint32(WT + 4)) : "string" === KT.int64AsType ? oT = LT.getBigInt64(WT).toString() : "auto" === KT.int64AsType ? (oT = LT.getBigInt64(WT), oT >= BigInt(-2) << BigInt(52) && oT <= BigInt(2) << BigInt(52) && (oT = Number(oT))) : oT = LT.getBigInt64(WT), WT += 8, oT;
          case 212:
            if (oT = zT[WT++], 114 == oT) return To(63 & zT[WT++]);
            {
              let TT = AT[oT];
              if (TT) return TT.read ? (WT++, TT.read(jT())) : TT.noBuffer ? (WT++, TT()) : TT(zT.subarray(WT, ++WT));
              throw new Error("Unknown extension " + oT)
            }
          case 213:
            return oT = zT[WT], 114 == oT ? (WT++, To(63 & zT[WT++], zT[WT++])) : NT(2);
          case 214:
            return NT(4);
          case 215:
            return NT(8);
          case 216:
            return NT(16);
          case 217:
            return oT = zT[WT++], rT >= WT ? FT.slice(WT - MT, (WT += oT) - MT) : OT(oT);
          case 218:
            return oT = LT.getUint16(WT), rT >= (WT += 2) ? FT.slice(WT - MT, (WT += oT) - MT) : HT(oT);
          case 219:
            return oT = LT.getUint32(WT), rT >= (WT += 4) ? FT.slice(WT - MT, (WT += oT) - MT) : nT(oT);
          case 220:
            return oT = LT.getUint16(WT), WT += 2, lT(oT);
          case 221:
            return oT = LT.getUint32(WT), WT += 4, lT(oT);
          case 222:
            return oT = LT.getUint16(WT), WT += 2, sT(oT);
          case 223:
            return oT = LT.getUint32(WT), WT += 4, sT(oT);
          default:
            if (TT >= 224) return TT - 256;
            if (void 0 === TT) {
              let TT = new Error("Unexpected end of MessagePack data");
              throw TT.incomplete = !0, TT
            }
            throw new Error("Unknown MessagePack token " + TT)
        }
      }
    }
    const JT = /^[a-zA-Z_$][a-zA-Z\d_$]*$/;

    function UT(TT, oT) {
      function IT() {
        if (IT.count++ > vT) {
          let IT = TT.read = new Function("r", "return function(){return " + (KT.freezeData ? "Object.freeze" : "") + "({" + TT.map((TT => "__proto__" === TT ? "__proto_:r()" : JT.test(TT) ? TT + ":r()" : "[" + JSON.stringify(TT) + "]:r()")).join(",") + "})}")(jT);
          return 0 === TT.highByte && (TT.read = aT(oT, TT.read)), IT()
        }
        let iT = {};
        for (let oT = 0, IT = TT.length; oT < IT; oT++) {
          let IT = TT[oT];
          "__proto__" === IT && (IT = "__proto_"), iT[IT] = jT()
        }
        return KT.freezeData ? Object.freeze(iT) : iT
      }
      return IT.count = 0, 0 === TT.highByte ? aT(oT, IT) : IT
    }
    const aT = (TT, oT) => function() {
      let IT = zT[WT++];
      if (0 === IT) return oT();
      let iT = TT < 32 ? -(TT + (IT << 5)) : TT + (IT << 5),
        kT = BT[iT] || YT()[iT];
      if (!kT) throw new Error("Record id is not defined for " + iT);
      return kT.read || (kT.read = UT(kT, TT)), kT.read()
    };

    function YT() {
      let TT = ko((() => (zT = null, KT.getStructures())));
      return BT = KT._mergeStructures(TT, BT)
    }
    var QT = ZT,
      OT = ZT,
      HT = ZT,
      nT = ZT;
    let qT = !1;

    function ZT(TT) {
      let oT;
      if (TT < 16 && (oT = pT(TT))) return oT;
      if (TT > 64 && iT) return iT.decode(zT.subarray(WT, WT += TT));
      const IT = WT + TT,
        kT = [];
      for (oT = ""; WT < IT;) {
        const TT = zT[WT++];
        if (0 === (128 & TT)) kT.push(TT);
        else if (192 === (224 & TT)) {
          const oT = 63 & zT[WT++];
          kT.push((31 & TT) << 6 | oT)
        } else if (224 === (240 & TT)) {
          const oT = 63 & zT[WT++],
            IT = 63 & zT[WT++];
          kT.push((31 & TT) << 12 | oT << 6 | IT)
        } else if (240 === (248 & TT)) {
          let oT = (7 & TT) << 18 | (63 & zT[WT++]) << 12 | (63 & zT[WT++]) << 6 | 63 & zT[WT++];
          oT > 65535 && (oT -= 65536, kT.push(oT >>> 10 & 1023 | 55296), oT = 56320 | 1023 & oT), kT.push(oT)
        } else kT.push(TT);
        kT.length >= 4096 && (oT += tT.apply(String, kT), kT.length = 0)
      }
      return kT.length > 0 && (oT += tT.apply(String, kT)), oT
    }

    function lT(TT) {
      let oT = new Array(TT);
      for (let IT = 0; IT < TT; IT++) oT[IT] = jT();
      return KT.freezeData ? Object.freeze(oT) : oT
    }

    function sT(TT) {
      if (KT.mapsAsObjects) {
        let oT = {};
        for (let IT = 0; IT < TT; IT++) {
          let TT = dT();
          "__proto__" === TT && (TT = "__proto_"), oT[TT] = jT()
        }
        return oT
      } {
        let oT = new Map;
        for (let IT = 0; IT < TT; IT++) oT.set(jT(), jT());
        return oT
      }
    }
    var tT = String.fromCharCode;

    function GT(TT) {
      let oT = WT,
        IT = new Array(TT);
      for (let iT = 0; iT < TT; iT++) {
        const TT = zT[WT++];
        if ((128 & TT) > 0) return void(WT = oT);
        IT[iT] = TT
      }
      return tT.apply(String, IT)
    }

    function pT(TT) {
      if (TT < 4) {
        if (TT < 2) {
          if (0 === TT) return "";
          {
            let TT = zT[WT++];
            return (128 & TT) > 1 ? void(WT -= 1) : tT(TT)
          }
        } {
          let oT = zT[WT++],
            IT = zT[WT++];
          if ((128 & oT) > 0 || (128 & IT) > 0) return void(WT -= 2);
          if (TT < 3) return tT(oT, IT);
          let iT = zT[WT++];
          return (128 & iT) > 0 ? void(WT -= 3) : tT(oT, IT, iT)
        }
      } {
        let oT = zT[WT++],
          IT = zT[WT++],
          iT = zT[WT++],
          kT = zT[WT++];
        if ((128 & oT) > 0 || (128 & IT) > 0 || (128 & iT) > 0 || (128 & kT) > 0) return void(WT -= 4);
        if (TT < 6) {
          if (4 === TT) return tT(oT, IT, iT, kT);
          {
            let TT = zT[WT++];
            return (128 & TT) > 0 ? void(WT -= 5) : tT(oT, IT, iT, kT, TT)
          }
        }
        if (TT < 8) {
          let XT = zT[WT++],
            BT = zT[WT++];
          if ((128 & XT) > 0 || (128 & BT) > 0) return void(WT -= 6);
          if (TT < 7) return tT(oT, IT, iT, kT, XT, BT);
          let FT = zT[WT++];
          return (128 & FT) > 0 ? void(WT -= 7) : tT(oT, IT, iT, kT, XT, BT, FT)
        } {
          let XT = zT[WT++],
            BT = zT[WT++],
            FT = zT[WT++],
            ST = zT[WT++];
          if ((128 & XT) > 0 || (128 & BT) > 0 || (128 & FT) > 0 || (128 & ST) > 0) return void(WT -= 8);
          if (TT < 10) {
            if (8 === TT) return tT(oT, IT, iT, kT, XT, BT, FT, ST);
            {
              let TT = zT[WT++];
              return (128 & TT) > 0 ? void(WT -= 9) : tT(oT, IT, iT, kT, XT, BT, FT, ST, TT)
            }
          }
          if (TT < 12) {
            let DT = zT[WT++],
              LT = zT[WT++];
            if ((128 & DT) > 0 || (128 & LT) > 0) return void(WT -= 10);
            if (TT < 11) return tT(oT, IT, iT, kT, XT, BT, FT, ST, DT, LT);
            let xT = zT[WT++];
            return (128 & xT) > 0 ? void(WT -= 11) : tT(oT, IT, iT, kT, XT, BT, FT, ST, DT, LT, xT)
          } {
            let DT = zT[WT++],
              LT = zT[WT++],
              xT = zT[WT++],
              cT = zT[WT++];
            if ((128 & DT) > 0 || (128 & LT) > 0 || (128 & xT) > 0 || (128 & cT) > 0) return void(WT -= 12);
            if (TT < 14) {
              if (12 === TT) return tT(oT, IT, iT, kT, XT, BT, FT, ST, DT, LT, xT, cT);
              {
                let TT = zT[WT++];
                return (128 & TT) > 0 ? void(WT -= 13) : tT(oT, IT, iT, kT, XT, BT, FT, ST, DT, LT, xT, cT, TT)
              }
            } {
              let KT = zT[WT++],
                MT = zT[WT++];
              if ((128 & KT) > 0 || (128 & MT) > 0) return void(WT -= 14);
              if (TT < 15) return tT(oT, IT, iT, kT, XT, BT, FT, ST, DT, LT, xT, cT, KT, MT);
              let rT = zT[WT++];
              return (128 & rT) > 0 ? void(WT -= 15) : tT(oT, IT, iT, kT, XT, BT, FT, ST, DT, LT, xT, cT, KT, MT, rT)
            }
          }
        }
      }
    }

    function bT() {
      let TT, oT = zT[WT++];
      if (oT < 192) TT = oT - 160;
      else switch (oT) {
        case 217:
          TT = zT[WT++];
          break;
        case 218:
          TT = LT.getUint16(WT), WT += 2;
          break;
        case 219:
          TT = LT.getUint32(WT), WT += 4;
          break;
        default:
          throw new Error("Expected string")
      }
      return ZT(TT)
    }

    function yT(TT) {
      return KT.copyBuffers ? Uint8Array.prototype.slice.call(zT, WT, WT += TT) : zT.subarray(WT, WT += TT)
    }

    function NT(TT) {
      let oT = zT[WT++];
      if (AT[oT]) {
        let IT;
        return AT[oT](zT.subarray(WT, IT = WT += TT), (TT => {
          WT = TT;
          try {
            return jT()
          } finally {
            WT = IT
          }
        }))
      }
      throw new Error("Unknown extension type " + oT)
    }
    var PT = new Array(4096);

    function dT() {
      let TT = zT[WT++];
      if (!(TT >= 160 && TT < 192)) return WT--, VT(jT());
      if (TT -= 160, rT >= WT) return FT.slice(WT - MT, (WT += TT) - MT);
      if (!(0 == rT && kT < 180)) return QT(TT);
      let oT, IT = 4095 & (TT << 5 ^ (TT > 1 ? LT.getUint16(WT) : TT > 0 ? zT[WT] : 0)),
        iT = PT[IT],
        XT = WT,
        BT = WT + TT - 3,
        ST = 0;
      if (iT && iT.bytes == TT) {
        for (; XT < BT;) {
          if (oT = LT.getUint32(XT), oT != iT[ST++]) {
            XT = 1879048192;
            break
          }
          XT += 4
        }
        for (BT += 3; XT < BT;)
          if (oT = zT[XT++], oT != iT[ST++]) {
            XT = 1879048192;
            break
          } if (XT === BT) return WT = XT, iT.string;
        BT -= 3, XT = WT
      }
      for (iT = [], PT[IT] = iT, iT.bytes = TT; XT < BT;) oT = LT.getUint32(XT), iT.push(oT), XT += 4;
      for (BT += 3; XT < BT;) oT = zT[XT++], iT.push(oT);
      let DT = TT < 16 ? pT(TT) : GT(TT);
      return iT.string = null != DT ? DT : QT(TT)
    }

    function VT(TT) {
      if ("string" === typeof TT) return TT;
      if ("number" === typeof TT || "boolean" === typeof TT || "bigint" === typeof TT) return TT.toString();
      if (null == TT) return TT + "";
      if (KT.allowArraysInMapKeys && Array.isArray(TT) && TT.flat().every((TT => ["string", "number", "boolean", "bigint"].includes(typeof TT)))) return TT.flat().toString();
      throw new Error("Invalid property type for record: " + typeof TT)
    }
    const To = (TT, oT) => {
      let IT = jT().map(VT),
        iT = TT;
      void 0 !== oT && (TT = TT < 32 ? -((oT << 5) + TT) : (oT << 5) + TT, IT.highByte = oT);
      let zT = BT[TT];
      return zT && (zT.isShared || uT) && ((BT.restoreStructures || (BT.restoreStructures = []))[TT] = zT), BT[TT] = IT, IT.read = UT(IT, iT), IT.read()
    };
    AT[0] = () => {}, AT[0].noBuffer = !0, AT[66] = TT => {
      let oT = TT.length,
        IT = BigInt(128 & TT[0] ? TT[0] - 256 : TT[0]);
      for (let iT = 1; iT < oT; iT++) IT <<= BigInt(8), IT += BigInt(TT[iT]);
      return IT
    };
    let oo = {
      Error: Error,
      TypeError: TypeError,
      ReferenceError: ReferenceError
    };
    AT[101] = () => {
      let TT = jT();
      return (oo[TT[0]] || Error)(TT[1], {
        cause: TT[2]
      })
    }, AT[105] = TT => {
      if (!1 === KT.structuredClone) throw new Error("Structured clone extension is disabled");
      let oT = LT.getUint32(WT - 4);
      DT || (DT = new Map);
      let IT, iT = zT[WT];
      IT = iT >= 144 && iT < 160 || 220 == iT || 221 == iT ? [] : {};
      let kT = {
        target: IT
      };
      DT.set(oT, kT);
      let XT = jT();
      return kT.used ? Object.assign(IT, XT) : (kT.target = XT, XT)
    }, AT[112] = TT => {
      if (!1 === KT.structuredClone) throw new Error("Structured clone extension is disabled");
      let oT = LT.getUint32(WT - 4),
        IT = DT.get(oT);
      return IT.used = !0, IT.target
    }, AT[115] = () => new Set(jT());
    const Io = ["Int8", "Uint8", "Uint8Clamped", "Int16", "Uint16", "Int32", "Uint32", "Float32", "Float64", "BigInt64", "BigUint64"].map((TT => TT + "Array"));
    let io = "object" === typeof globalThis ? globalThis : window;
    AT[116] = TT => {
      let oT = TT[0],
        IT = Io[oT];
      if (!IT) {
        if (16 === oT) {
          let oT = new ArrayBuffer(TT.length - 1);
          return new Uint8Array(oT).set(TT.subarray(1)), oT
        }
        throw new Error("Could not find typed array for code " + oT)
      }
      return new io[IT](Uint8Array.prototype.slice.call(TT, 1).buffer)
    }, AT[120] = () => {
      let TT = jT();
      return new RegExp(TT[0], TT[1])
    };
    const zo = [];

    function ko(TT) {
      RT && RT();
      let oT = kT,
        IT = WT,
        iT = cT,
        XT = MT,
        AT = rT,
        gT = FT,
        hT = xT,
        wT = DT,
        mT = ST,
        eT = new Uint8Array(zT.slice(0, kT)),
        vT = BT,
        ET = BT.slice(0, BT.length),
        fT = KT,
        CT = uT,
        jT = TT();
      return kT = oT, WT = IT, cT = iT, MT = XT, rT = AT, FT = gT, xT = hT, DT = wT, ST = mT, zT = eT, uT = CT, (BT = vT).splice(0, BT.length, ...ET), KT = fT, LT = new DataView(zT.buffer, zT.byteOffset, zT.byteLength), jT
    }

    function Wo() {
      zT = null, DT = null, BT = null
    }
    AT[98] = TT => {
      let oT = (TT[0] << 24) + (TT[1] << 16) + (TT[2] << 8) + TT[3],
        IT = WT;
      return WT += oT - TT.length, ST = zo, (ST = [bT(), bT()]).position0 = 0, ST.position1 = 0, ST.postBundlePosition = WT, WT = IT, jT()
    }, AT[255] = TT => 4 == TT.length ? new Date(1e3 * (16777216 * TT[0] + (TT[1] << 16) + (TT[2] << 8) + TT[3])) : 8 == TT.length ? new Date(((TT[0] << 22) + (TT[1] << 14) + (TT[2] << 6) + (TT[3] >> 2)) / 1e6 + 1e3 * (4294967296 * (3 & TT[3]) + 16777216 * TT[4] + (TT[5] << 16) + (TT[6] << 8) + TT[7])) : 12 == TT.length ? new Date(((TT[0] << 24) + (TT[1] << 16) + (TT[2] << 8) + TT[3]) / 1e6 + 1e3 * ((128 & TT[4] ? -281474976710656 : 0) + 1099511627776 * TT[6] + 4294967296 * TT[7] + 16777216 * TT[8] + (TT[9] << 16) + (TT[10] << 8) + TT[11])) : new Date("invalid");
    const Xo = new Array(147);
    for (let WI = 0; WI < 256; WI++) Xo[WI] = +("1e" + Math.floor(45.15 - .30103 * WI));
    const Bo = ET;
    var Fo = new ET({
      useRecords: !1
    });
    const So = Fo.unpack,
      Do = Fo.unpackMultiple,
      Lo = Fo.unpack,
      xo = {
        NEVER: 0,
        ALWAYS: 1,
        DECIMAL_ROUND: 3,
        DECIMAL_FIT: 4
      };
    let co, Ko, Mo, ro = new Float32Array(1),
      Ao = new Uint8Array(ro.buffer, 0, 4);

    function go(TT) {
      ro[0] = TT;
      let oT = Xo[(127 & Ao[3]) << 1 | Ao[2] >> 7];
      return (oT * TT + (TT > 0 ? .5 : -.5) | 0) / oT
    }
    try {
      co = new TextEncoder
    } catch (kI) {}
    const ho = "undefined" !== typeof Buffer,
      wo = ho ? function(TT) {
        return Buffer.allocUnsafeSlow(TT)
      } : Uint8Array,
      mo = ho ? Buffer : Uint8Array,
      eo = ho ? 4294967296 : 2144337920;
    let Ro, uo, vo, Eo, fo, Co = 0,
      jo = null;
    const Jo = /[\u0080-\uFFFF]/,
      Uo = Symbol("record-id");
    class ao extends ET {
      constructor(TT) {
        let oT, IT, iT, zT;
        super(TT), this.offset = 0;
        let kT = mo.prototype.utf8Write ? function(TT, oT) {
            return Ro.utf8Write(TT, oT, Ro.byteLength - oT)
          } : !(!co || !co.encodeInto) && function(TT, oT) {
            return co.encodeInto(TT, Ro.subarray(oT)).written
          },
          WT = this;
        TT || (TT = {});
        let XT = TT && TT.sequential,
          BT = TT.structures || TT.saveStructures,
          FT = TT.maxSharedStructures;
        if (null == FT && (FT = BT ? 32 : 0), FT > 8160) throw new Error("Maximum maxSharedStructure is 8160");
        TT.structuredClone && void 0 == TT.moreTypes && (this.moreTypes = !0);
        let ST = TT.maxOwnStructures;
        null == ST && (ST = BT ? 32 : 64), this.structures || 0 == TT.useRecords || (this.structures = []);
        let DT = FT > 32 || ST + FT > 64,
          LT = FT + 64,
          xT = FT + ST + 64;
        if (xT > 8256) throw new Error("Maximum maxSharedStructure + maxOwnStructure is 8192");
        let cT = [],
          KT = 0,
          MT = 0;
        this.pack = this.encode = function(TT, kT) {
          if (Ro || (Ro = new wo(8192), vo = Ro.dataView || (Ro.dataView = new DataView(Ro.buffer, 0, 8192)), Co = 0), Eo = Ro.length - 10, Eo - Co < 2048 ? (Ro = new wo(Ro.length), vo = Ro.dataView || (Ro.dataView = new DataView(Ro.buffer, 0, Ro.length)), Eo = Ro.length - 10, Co = 0) : Co = Co + 7 & 2147483640, oT = Co, kT & TI && (Co += 255 & kT), zT = WT.structuredClone ? new Map : null, WT.bundleStrings && "string" !== typeof TT ? (jo = [], jo.size = 1 / 0) : jo = null, iT = WT.structures, iT) {
            iT.uninitialized && (iT = WT._mergeStructures(WT.getStructures()));
            let TT = iT.sharedLength || 0;
            if (TT > FT) throw new Error("Shared structures is larger than maximum shared structures, try increasing maxSharedStructures to " + iT.sharedLength);
            if (!iT.transitions) {
              iT.transitions = Object.create(null);
              for (let oT = 0; oT < TT; oT++) {
                let TT = iT[oT];
                if (!TT) continue;
                let IT, zT = iT.transitions;
                for (let oT = 0, iT = TT.length; oT < iT; oT++) {
                  let iT = TT[oT];
                  IT = zT[iT], IT || (IT = zT[iT] = Object.create(null)), zT = IT
                }
                zT[Uo] = oT + 64
              }
              this.lastNamedStructuresLength = TT
            }
            XT || (iT.nextId = TT + 64)
          }
          let BT;
          IT && (IT = !1);
          try {
            WT.randomAccessStructure && TT && TT.constructor && TT.constructor === Object ? ET(TT) : gT(TT);
            let IT = jo;
            if (jo && Ho(oT, gT, 0), zT && zT.idsToInsert) {
              let TT = zT.idsToInsert.sort(((TT, oT) => TT.offset > oT.offset ? 1 : -1)),
                iT = TT.length,
                kT = -1;
              for (; IT && iT > 0;) {
                let zT = TT[--iT].offset + oT;
                zT < IT.stringsPosition + oT && -1 === kT && (kT = 0), zT > IT.position + oT ? kT >= 0 && (kT += 6) : (kT >= 0 && (vo.setUint32(IT.position + oT, vo.getUint32(IT.position + oT) + kT), kT = -1), IT = IT.previous, iT++)
              }
              kT >= 0 && IT && vo.setUint32(IT.position + oT, vo.getUint32(IT.position + oT) + kT), Co += 6 * TT.length, Co > Eo && RT(Co), WT.offset = Co;
              let XT = function(TT, oT) {
                let IT, iT = 6 * oT.length,
                  zT = TT.length - iT;
                for (; IT = oT.pop();) {
                  let oT = IT.offset,
                    kT = IT.id;
                  TT.copyWithin(oT + iT, oT, zT), iT -= 6;
                  let WT = oT + iT;
                  TT[WT++] = 214, TT[WT++] = 105, TT[WT++] = kT >> 24, TT[WT++] = kT >> 16 & 255, TT[WT++] = kT >> 8 & 255, TT[WT++] = 255 & kT, zT = oT
                }
                return TT
              }(Ro.subarray(oT, Co), TT);
              return zT = null, XT
            }
            return WT.offset = Co, kT & Po ? (Ro.start = oT, Ro.end = Co, Ro) : Ro.subarray(oT, Co)
          } catch (kI) {
            throw BT = kI, kI
          } finally {
            if (iT && (rT(), IT && WT.saveStructures)) {
              let IT = iT.sharedLength || 0,
                zT = Ro.subarray(oT, Co),
                XT = qo(iT, WT);
              if (!BT) return !1 === WT.saveStructures(XT, XT.isCompatible) ? WT.pack(TT, kT) : (WT.lastNamedStructuresLength = IT, Ro.length > 1073741824 && (Ro = null), zT)
            }
            Ro.length > 1073741824 && (Ro = null), kT & Vo && (Co = oT)
          }
        };
        const rT = () => {
            MT < 10 && MT++;
            let TT = iT.sharedLength || 0;
            if (iT.length > TT && !XT && (iT.length = TT), KT > 1e4) iT.transitions = null, MT = 0, KT = 0, cT.length > 0 && (cT = []);
            else if (cT.length > 0 && !XT) {
              for (let TT = 0, oT = cT.length; TT < oT; TT++) cT[TT][Uo] = 0;
              cT = []
            }
          },
          AT = TT => {
            var oT = TT.length;
            oT < 16 ? Ro[Co++] = 144 | oT : oT < 65536 ? (Ro[Co++] = 220, Ro[Co++] = oT >> 8, Ro[Co++] = 255 & oT) : (Ro[Co++] = 221, vo.setUint32(Co, oT), Co += 4);
            for (let IT = 0; IT < oT; IT++) gT(TT[IT])
          },
          gT = TT => {
            Co > Eo && (Ro = RT(Co));
            var IT, iT = typeof TT;
            if ("string" === iT) {
              let iT, zT = TT.length;
              if (jo && zT >= 4 && zT < 4096) {
                if ((jo.size += zT) > 21760) {
                  let TT, IT, iT = (jo[0] ? 3 * jo[0].length + jo[1].length : 0) + 10;
                  Co + iT > Eo && (Ro = RT(Co + iT)), jo.position ? (IT = jo, Ro[Co] = 200, Co += 3, Ro[Co++] = 98, TT = Co - oT, Co += 4, Ho(oT, gT, 0), vo.setUint16(TT + oT - 3, Co - oT - TT)) : (Ro[Co++] = 214, Ro[Co++] = 98, TT = Co - oT, Co += 4), jo = ["", ""], jo.previous = IT, jo.size = 0, jo.position = TT
                }
                let IT = Jo.test(TT);
                return jo[IT ? 0 : 1] += TT, Ro[Co++] = 193, void gT(IT ? -zT : zT)
              }
              iT = zT < 32 ? 1 : zT < 256 ? 2 : zT < 65536 ? 3 : 5;
              let WT = 3 * zT;
              if (Co + WT > Eo && (Ro = RT(Co + WT)), zT < 64 || !kT) {
                let oT, kT, WT, XT = Co + iT;
                for (oT = 0; oT < zT; oT++) kT = TT.charCodeAt(oT), kT < 128 ? Ro[XT++] = kT : kT < 2048 ? (Ro[XT++] = kT >> 6 | 192, Ro[XT++] = 63 & kT | 128) : 55296 === (64512 & kT) && 56320 === (64512 & (WT = TT.charCodeAt(oT + 1))) ? (kT = 65536 + ((1023 & kT) << 10) + (1023 & WT), oT++, Ro[XT++] = kT >> 18 | 240, Ro[XT++] = kT >> 12 & 63 | 128, Ro[XT++] = kT >> 6 & 63 | 128, Ro[XT++] = 63 & kT | 128) : (Ro[XT++] = kT >> 12 | 224, Ro[XT++] = kT >> 6 & 63 | 128, Ro[XT++] = 63 & kT | 128);
                IT = XT - Co - iT
              } else IT = kT(TT, Co + iT);
              IT < 32 ? Ro[Co++] = 160 | IT : IT < 256 ? (iT < 2 && Ro.copyWithin(Co + 2, Co + 1, Co + 1 + IT), Ro[Co++] = 217, Ro[Co++] = IT) : IT < 65536 ? (iT < 3 && Ro.copyWithin(Co + 3, Co + 2, Co + 2 + IT), Ro[Co++] = 218, Ro[Co++] = IT >> 8, Ro[Co++] = 255 & IT) : (iT < 5 && Ro.copyWithin(Co + 5, Co + 3, Co + 3 + IT), Ro[Co++] = 219, vo.setUint32(Co, IT), Co += 4), Co += IT
            } else if ("number" === iT)
              if (TT >>> 0 === TT) TT < 32 || TT < 128 && !1 === this.useRecords || TT < 64 && !this.randomAccessStructure ? Ro[Co++] = TT : TT < 256 ? (Ro[Co++] = 204, Ro[Co++] = TT) : TT < 65536 ? (Ro[Co++] = 205, Ro[Co++] = TT >> 8, Ro[Co++] = 255 & TT) : (Ro[Co++] = 206, vo.setUint32(Co, TT), Co += 4);
              else if ((TT | 0) === TT) TT >= -32 ? Ro[Co++] = 256 + TT : TT >= -128 ? (Ro[Co++] = 208, Ro[Co++] = TT + 256) : TT >= -32768 ? (Ro[Co++] = 209, vo.setInt16(Co, TT), Co += 2) : (Ro[Co++] = 210, vo.setInt32(Co, TT), Co += 4);
            else {
              let oT;
              if ((oT = this.useFloat32) > 0 && TT < 4294967296 && TT >= -2147483648) {
                let IT;
                if (Ro[Co++] = 202, vo.setFloat32(Co, TT), oT < 4 || ((IT = TT * Xo[(127 & Ro[Co]) << 1 | Ro[Co + 1] >> 7]) | 0) === IT) return void(Co += 4);
                Co--
              }
              Ro[Co++] = 203, vo.setFloat64(Co, TT), Co += 8
            } else if ("object" === iT || "function" === iT)
              if (TT) {
                if (zT) {
                  let IT = zT.get(TT);
                  if (IT) {
                    if (!IT.id) {
                      let TT = zT.idsToInsert || (zT.idsToInsert = []);
                      IT.id = TT.push(IT)
                    }
                    return Ro[Co++] = 214, Ro[Co++] = 112, vo.setUint32(Co, IT.id), void(Co += 4)
                  }
                  zT.set(TT, {
                    offset: Co - oT
                  })
                }
                let kT = TT.constructor;
                if (kT === Object) eT(TT);
                else if (kT === Array) AT(TT);
                else if (kT === Map)
                  if (this.mapAsEmptyObject) Ro[Co++] = 128;
                  else {
                    (IT = TT.size) < 16 ? Ro[Co++] = 128 | IT : IT < 65536 ? (Ro[Co++] = 222, Ro[Co++] = IT >> 8, Ro[Co++] = 255 & IT) : (Ro[Co++] = 223, vo.setUint32(Co, IT), Co += 4);
                    for (let [oT, IT] of TT) gT(oT), gT(IT)
                  }
                else {
                  for (let oT = 0, IT = Ko.length; oT < IT; oT++) {
                    if (TT instanceof Mo[oT]) {
                      let IT = Ko[oT];
                      if (IT.write) {
                        IT.type && (Ro[Co++] = 212, Ro[Co++] = IT.type, Ro[Co++] = 0);
                        let oT = IT.write.call(this, TT);
                        return void(oT === TT ? Array.isArray(TT) ? AT(TT) : eT(TT) : gT(oT))
                      }
                      let iT, zT = Ro,
                        kT = vo,
                        WT = Co;
                      Ro = null;
                      try {
                        iT = IT.pack.call(this, TT, (TT => (Ro = zT, zT = null, Co += TT, Co > Eo && RT(Co), {
                          target: Ro,
                          targetView: vo,
                          position: Co - TT
                        })), gT)
                      } finally {
                        zT && (Ro = zT, vo = kT, Co = WT, Eo = Ro.length - 10)
                      }
                      return void(iT && (iT.length + Co > Eo && RT(iT.length + Co), Co = Oo(iT, Ro, Co, IT.type)))
                    }
                  }
                  if (Array.isArray(TT)) AT(TT);
                  else {
                    if (TT.toJSON) {
                      const oT = TT.toJSON();
                      if (oT !== TT) return gT(oT)
                    }
                    if ("function" === iT) return gT(this.writeFunction && this.writeFunction(TT));
                    eT(TT)
                  }
                }
              } else Ro[Co++] = 192;
            else if ("boolean" === iT) Ro[Co++] = TT ? 195 : 194;
            else if ("bigint" === iT) {
              if (TT < BigInt(1) << BigInt(63) && TT >= -(BigInt(1) << BigInt(63))) Ro[Co++] = 211, vo.setBigInt64(Co, TT);
              else if (TT < BigInt(1) << BigInt(64) && TT > 0) Ro[Co++] = 207, vo.setBigUint64(Co, TT);
              else {
                if (!this.largeBigIntToFloat) {
                  if (this.largeBigIntToString) return gT(TT.toString());
                  if (this.useBigIntExtension && TT < BigInt(2) ** BigInt(1023) && TT > -(BigInt(2) ** BigInt(1023))) {
                    Ro[Co++] = 199, Co++, Ro[Co++] = 66;
                    let oT, IT = [];
                    do {
                      let iT = TT & BigInt(255);
                      oT = (iT & BigInt(128)) === (TT < BigInt(0) ? BigInt(128) : BigInt(0)), IT.push(iT), TT >>= BigInt(8)
                    } while (TT !== BigInt(0) && TT !== BigInt(-1) || !oT);
                    Ro[Co - 2] = IT.length;
                    for (let TT = IT.length; TT > 0;) Ro[Co++] = Number(IT[--TT]);
                    return
                  }
                  throw new RangeError(TT + " was too large to fit in MessagePack 64-bit integer format, use useBigIntExtension, or set largeBigIntToFloat to convert to float-64, or set largeBigIntToString to convert to string")
                }
                Ro[Co++] = 203, vo.setFloat64(Co, Number(TT))
              }
              Co += 8
            } else {
              if ("undefined" !== iT) throw new Error("Unknown type: " + iT);
              this.encodeUndefinedAsNil ? Ro[Co++] = 192 : (Ro[Co++] = 212, Ro[Co++] = 0, Ro[Co++] = 0)
            }
          },
          hT = this.variableMapSize || this.coercibleKeyAsNumber || this.skipValues ? TT => {
            let oT;
            if (this.skipValues) {
              oT = [];
              for (let IT in TT) "function" === typeof TT.hasOwnProperty && !TT.hasOwnProperty(IT) || this.skipValues.includes(TT[IT]) || oT.push(IT)
            } else oT = Object.keys(TT);
            let IT, iT = oT.length;
            if (iT < 16 ? Ro[Co++] = 128 | iT : iT < 65536 ? (Ro[Co++] = 222, Ro[Co++] = iT >> 8, Ro[Co++] = 255 & iT) : (Ro[Co++] = 223, vo.setUint32(Co, iT), Co += 4), this.coercibleKeyAsNumber)
              for (let zT = 0; zT < iT; zT++) {
                IT = oT[zT];
                let iT = Number(IT);
                gT(isNaN(iT) ? IT : iT), gT(TT[IT])
              } else
                for (let zT = 0; zT < iT; zT++) gT(IT = oT[zT]), gT(TT[IT])
          } : TT => {
            Ro[Co++] = 222;
            let IT = Co - oT;
            Co += 2;
            let iT = 0;
            for (let oT in TT)("function" !== typeof TT.hasOwnProperty || TT.hasOwnProperty(oT)) && (gT(oT), gT(TT[oT]), iT++);
            if (iT > 65535) throw new Error('Object is too large to serialize with fast 16-bit map size, use the "variableMapSize" option to serialize this object');
            Ro[IT++ + oT] = iT >> 8, Ro[IT + oT] = 255 & iT
          },
          wT = !1 === this.useRecords ? hT : TT.progressiveRecords && !DT ? TT => {
            let IT, zT, kT = iT.transitions || (iT.transitions = Object.create(null)),
              WT = Co++ - oT;
            for (let XT in TT)
              if ("function" !== typeof TT.hasOwnProperty || TT.hasOwnProperty(XT)) {
                if (IT = kT[XT], IT) kT = IT;
                else {
                  let BT = Object.keys(TT),
                    FT = kT;
                  kT = iT.transitions;
                  let ST = 0;
                  for (let TT = 0, oT = BT.length; TT < oT; TT++) {
                    let oT = BT[TT];
                    IT = kT[oT], IT || (IT = kT[oT] = Object.create(null), ST++), kT = IT
                  }
                  WT + oT + 1 == Co ? (Co--, uT(kT, BT, ST)) : vT(kT, BT, WT, ST), zT = !0, kT = FT[XT]
                }
                gT(TT[XT])
              } if (!zT) {
              let IT = kT[Uo];
              IT ? Ro[WT + oT] = IT : vT(kT, Object.keys(TT), WT, 0)
            }
          } : TT => {
            let oT, IT = iT.transitions || (iT.transitions = Object.create(null)),
              zT = 0;
            for (let iT in TT)("function" !== typeof TT.hasOwnProperty || TT.hasOwnProperty(iT)) && (oT = IT[iT], oT || (oT = IT[iT] = Object.create(null), zT++), IT = oT);
            let kT = IT[Uo];
            kT ? kT >= 96 && DT ? (Ro[Co++] = 96 + (31 & (kT -= 96)), Ro[Co++] = kT >> 5) : Ro[Co++] = kT : uT(IT, IT.__keys__ || Object.keys(TT), zT);
            for (let iT in TT)("function" !== typeof TT.hasOwnProperty || TT.hasOwnProperty(iT)) && gT(TT[iT])
          },
          mT = "function" == typeof this.useRecords && this.useRecords,
          eT = mT ? TT => {
            mT(TT) ? wT(TT) : hT(TT)
          } : wT,
          RT = TT => {
            let IT;
            if (TT > 16777216) {
              if (TT - oT > eo) throw new Error("Packed buffer would be larger than maximum buffer size");
              IT = Math.min(eo, 4096 * Math.round(Math.max((TT - oT) * (TT > 67108864 ? 1.25 : 2), 4194304) / 4096))
            } else IT = 1 + (Math.max(TT - oT << 2, Ro.length - 1) >> 12) << 12;
            let iT = new wo(IT);
            return vo = iT.dataView || (iT.dataView = new DataView(iT.buffer, 0, IT)), TT = Math.min(TT, Ro.length), Ro.copy ? Ro.copy(iT, 0, oT, TT) : iT.set(Ro.slice(oT, TT)), Co -= oT, oT = 0, Eo = iT.length - 10, Ro = iT
          },
          uT = (TT, oT, zT) => {
            let kT = iT.nextId;
            kT || (kT = 64), kT < LT && this.shouldShareStructure && !this.shouldShareStructure(oT) ? (kT = iT.nextOwnId, kT < xT || (kT = LT), iT.nextOwnId = kT + 1) : (kT >= xT && (kT = LT), iT.nextId = kT + 1);
            let WT = oT.highByte = kT >= 96 && DT ? kT - 96 >> 5 : -1;
            TT[Uo] = kT, TT.__keys__ = oT, iT[kT - 64] = oT, kT < LT ? (oT.isShared = !0, iT.sharedLength = kT - 63, IT = !0, WT >= 0 ? (Ro[Co++] = 96 + (31 & kT), Ro[Co++] = WT) : Ro[Co++] = kT) : (WT >= 0 ? (Ro[Co++] = 213, Ro[Co++] = 114, Ro[Co++] = 96 + (31 & kT), Ro[Co++] = WT) : (Ro[Co++] = 212, Ro[Co++] = 114, Ro[Co++] = kT), zT && (KT += MT * zT), cT.length >= ST && (cT.shift()[Uo] = 0), cT.push(TT), gT(oT))
          },
          vT = (TT, IT, iT, zT) => {
            let kT = Ro,
              WT = Co,
              XT = Eo,
              BT = oT;
            Ro = uo, Co = 0, oT = 0, Ro || (uo = Ro = new wo(8192)), Eo = Ro.length - 10, uT(TT, IT, zT), uo = Ro;
            let FT = Co;
            if (Ro = kT, Co = WT, Eo = XT, oT = BT, FT > 1) {
              let TT = Co + FT - 1;
              TT > Eo && RT(TT);
              let IT = iT + oT;
              Ro.copyWithin(IT + FT, IT + 1, Co), Ro.set(uo.slice(0, FT), IT), Co = TT
            } else Ro[iT + oT] = uo[0]
          },
          ET = TT => {
            let zT = fo(TT, Ro, oT, Co, iT, RT, ((TT, oT, iT) => {
              if (iT) return IT = !0;
              Co = oT;
              let zT = Ro;
              return gT(TT), rT(), zT !== Ro ? {
                position: Co,
                targetView: vo,
                target: Ro
              } : Co
            }), this);
            if (0 === zT) return eT(TT);
            Co = zT
          }
      }
      useBuffer(TT) {
        Ro = TT, vo = Ro.dataView || (Ro.dataView = new DataView(Ro.buffer, Ro.byteOffset, Ro.byteLength)), Co = 0
      }
      set position(TT) {
        Co = TT
      }
      get position() {
        return Co
      }
      set buffer(TT) {
        Ro = TT
      }
      get buffer() {
        return Ro
      }
      clearSharedData() {
        this.structures && (this.structures = []), this.typedStructs && (this.typedStructs = [])
      }
    }

    function Yo(TT, oT, IT, iT) {
      let zT = TT.byteLength;
      if (zT + 1 < 256) {
        var {
          target: kT,
          position: WT
        } = IT(4 + zT);
        kT[WT++] = 199, kT[WT++] = zT + 1
      } else if (zT + 1 < 65536) {
        var {
          target: kT,
          position: WT
        } = IT(5 + zT);
        kT[WT++] = 200, kT[WT++] = zT + 1 >> 8, kT[WT++] = zT + 1 & 255
      } else {
        var {
          target: kT,
          position: WT,
          targetView: XT
        } = IT(7 + zT);
        kT[WT++] = 201, XT.setUint32(WT, zT + 1), WT += 4
      }
      kT[WT++] = 116, kT[WT++] = oT, TT.buffer || (TT = new Uint8Array(TT)), kT.set(new Uint8Array(TT.buffer, TT.byteOffset, TT.byteLength), WT)
    }

    function Qo(TT, oT) {
      let IT = TT.byteLength;
      var iT, zT;
      if (IT < 256) {
        var {
          target: iT,
          position: zT
        } = oT(IT + 2);
        iT[zT++] = 196, iT[zT++] = IT
      } else if (IT < 65536) {
        var {
          target: iT,
          position: zT
        } = oT(IT + 3);
        iT[zT++] = 197, iT[zT++] = IT >> 8, iT[zT++] = 255 & IT
      } else {
        var {
          target: iT,
          position: zT,
          targetView: kT
        } = oT(IT + 5);
        iT[zT++] = 198, kT.setUint32(zT, IT), zT += 4
      }
      iT.set(TT, zT)
    }

    function Oo(TT, oT, IT, iT) {
      let zT = TT.length;
      switch (zT) {
        case 1:
          oT[IT++] = 212;
          break;
        case 2:
          oT[IT++] = 213;
          break;
        case 4:
          oT[IT++] = 214;
          break;
        case 8:
          oT[IT++] = 215;
          break;
        case 16:
          oT[IT++] = 216;
          break;
        default:
          zT < 256 ? (oT[IT++] = 199, oT[IT++] = zT) : zT < 65536 ? (oT[IT++] = 200, oT[IT++] = zT >> 8, oT[IT++] = 255 & zT) : (oT[IT++] = 201, oT[IT++] = zT >> 24, oT[IT++] = zT >> 16 & 255, oT[IT++] = zT >> 8 & 255, oT[IT++] = 255 & zT)
      }
      return oT[IT++] = iT, oT.set(TT, IT), IT += zT
    }

    function Ho(TT, oT, IT) {
      if (jo.length > 0) {
        vo.setUint32(jo.position + TT, Co + IT - jo.position - TT), jo.stringsPosition = Co - TT;
        let iT = jo;
        jo = null, oT(iT[0]), oT(iT[1])
      }
    }

    function no(TT) {
      if (TT.Class) {
        if (!TT.pack && !TT.write) throw new Error("Extension has no pack or write function");
        if (TT.pack && !TT.type) throw new Error("Extension has no type (numeric code to identify the extension)");
        Mo.unshift(TT.Class), Ko.unshift(TT)
      }! function(TT) {
        TT.unpack ? AT[TT.type] = TT.unpack : AT[TT.type] = TT
      }(TT)
    }

    function qo(TT, oT) {
      return TT.isCompatible = TT => {
        let IT = !TT || (oT.lastNamedStructuresLength || 0) === TT.length;
        return IT || oT._mergeStructures(TT), IT
      }, TT
    }
    Mo = [Date, Set, Error, RegExp, ArrayBuffer, Object.getPrototypeOf(Uint8Array.prototype).constructor, hT], Ko = [{
      pack(TT, oT, IT) {
        let iT = TT.getTime() / 1e3;
        if ((this.useTimestamp32 || 0 === TT.getMilliseconds()) && iT >= 0 && iT < 4294967296) {
          let {
            target: TT,
            targetView: IT,
            position: zT
          } = oT(6);
          TT[zT++] = 214, TT[zT++] = 255, IT.setUint32(zT, iT)
        } else if (iT > 0 && iT < 4294967296) {
          let {
            target: IT,
            targetView: zT,
            position: kT
          } = oT(10);
          IT[kT++] = 215, IT[kT++] = 255, zT.setUint32(kT, 4e6 * TT.getMilliseconds() + (iT / 1e3 / 4294967296 | 0)), zT.setUint32(kT + 4, iT)
        } else if (isNaN(iT)) {
          if (this.onInvalidDate) return oT(0), IT(this.onInvalidDate());
          let {
            target: TT,
            targetView: iT,
            position: zT
          } = oT(3);
          TT[zT++] = 212, TT[zT++] = 255, TT[zT++] = 255
        } else {
          let {
            target: IT,
            targetView: zT,
            position: kT
          } = oT(15);
          IT[kT++] = 199, IT[kT++] = 12, IT[kT++] = 255, zT.setUint32(kT, 1e6 * TT.getMilliseconds()), zT.setBigInt64(kT + 4, BigInt(Math.floor(iT)))
        }
      }
    }, {
      pack(TT, oT, IT) {
        if (this.setAsEmptyObject) return oT(0), IT({});
        let iT = Array.from(TT),
          {
            target: zT,
            position: kT
          } = oT(this.moreTypes ? 3 : 0);
        this.moreTypes && (zT[kT++] = 212, zT[kT++] = 115, zT[kT++] = 0), IT(iT)
      }
    }, {
      pack(TT, oT, IT) {
        let {
          target: iT,
          position: zT
        } = oT(this.moreTypes ? 3 : 0);
        this.moreTypes && (iT[zT++] = 212, iT[zT++] = 101, iT[zT++] = 0), IT([TT.name, TT.message, TT.cause])
      }
    }, {
      pack(TT, oT, IT) {
        let {
          target: iT,
          position: zT
        } = oT(this.moreTypes ? 3 : 0);
        this.moreTypes && (iT[zT++] = 212, iT[zT++] = 120, iT[zT++] = 0), IT([TT.source, TT.flags])
      }
    }, {
      pack(TT, oT) {
        this.moreTypes ? Yo(TT, 16, oT) : Qo(ho ? Buffer.from(TT) : new Uint8Array(TT), oT)
      }
    }, {
      pack(TT, oT) {
        let IT = TT.constructor;
        IT !== mo && this.moreTypes ? Yo(TT, Io.indexOf(IT.name), oT) : Qo(TT, oT)
      }
    }, {
      pack(TT, oT) {
        let {
          target: IT,
          position: iT
        } = oT(1);
        IT[iT] = 193
      }
    }];
    let Zo = new ao({
      useRecords: !1
    });
    const so = Zo.pack,
      to = Zo.pack,
      Go = ao,
      {
        NEVER: po,
        ALWAYS: bo,
        DECIMAL_ROUND: yo,
        DECIMAL_FIT: No
      } = xo,
      Po = 512,
      Vo = 1024,
      TI = 2048;
    const oI = function(TT) {
        let oT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        if (!TT || "object" !== typeof TT) throw new Error("first argument must be an Iterable, Async Iterable, Iterator, Async Iterator, or a promise");
        const IT = new ET(oT);
        let iT;
        const zT = TT => {
          let oT;
          iT && (TT = Buffer.concat([iT, TT]), iT = void 0);
          try {
            oT = IT.unpackMultiple(TT)
          } catch (zT) {
            if (!zT.incomplete) throw zT;
            iT = TT.slice(zT.lastPosition), oT = zT.values
          }
          return oT
        };
        return "function" === typeof TT[Symbol.iterator] ? function*() {
          for (const oT of TT) yield* zT(oT)
        }() : "function" === typeof TT[Symbol.asyncIterator] ? async function*() {
          for await (const oT of TT) yield* zT(oT)
        }(): void 0
      },
      II = function(TT) {
        let oT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        if (TT && "object" === typeof TT) {
          if ("function" === typeof TT[Symbol.iterator]) return function*(TT, oT) {
            const IT = new ao(oT);
            for (const iT of TT) yield IT.pack(iT)
          }(TT, oT);
          if ("function" === typeof TT.then || "function" === typeof TT[Symbol.asyncIterator]) return async function*(TT, oT) {
            const IT = new ao(oT);
            for await (const iT of TT) yield IT.pack(iT)
          }(TT, oT);
          throw new Error("first argument must be an Iterable, Async Iterable, Iterator, Async Iterator, or a Promise")
        }
        throw new Error("first argument must be an Iterable, Async Iterable, or a Promise for an Async Iterable")
      },
      iI = !1,
      zI = !0
  },
  8521: (TT, oT, IT) => {
    IT.r(oT), IT.d(oT, {
      $changes: () => KT,
      $childType: () => MT,
      $decoder: () => ST,
      $deleteByIndex: () => xT,
      $encoder: () => FT,
      $filter: () => DT,
      $getByIndex: () => LT,
      $numFields: () => vT,
      $refId: () => XT,
      $track: () => BT,
      $values: () => wT,
      ArraySchema: () => zi,
      Callbacks: () => Wz,
      ChangeTree: () => JI,
      CollectionSchema: () => Xi,
      Decoder: () => di,
      Encoder: () => bi,
      FieldBuilder: () => Si,
      MapSchema: () => Wi,
      Metadata: () => yo,
      OPERATION: () => zT,
      Reflection: () => Iz,
      ReflectionField: () => Tz,
      ReflectionType: () => oz,
      Root: () => ai,
      Schema: () => Ji,
      SetSchema: () => Bi,
      StateCallbackStrategy: () => kz,
      StateView: () => ni,
      StreamSchema: () => Fi,
      TypeContext: () => qo,
      createPool: () => Bz,
      decode: () => go,
      decodeKeyValueOperation: () => dI,
      decodeSchemaOperation: () => PI,
      defineCustomTypes: () => eo,
      defineTypes: () => fi,
      deprecated: () => vi,
      dumpChanges: () => ji,
      encode: () => oo,
      encodeArray: () => qI,
      encodeIndexedEntry: () => HI,
      encodeKeyValueOperation: () => nI,
      encodeMapEntry: () => OI,
      encodeSchemaOperation: () => QI,
      Ac: () => ri,
      fullStateOnly: () => mi,
      getDecoderStateCallbacks: () => iz,
      getEncodeDescriptor: () => II,
      getRawChangesCallback: () => zz,
      isBuilder: () => Di,
      patchOnly: () => wi,
      registerType: () => mo,
      schema: () => Ci,
      t: () => Ki,
      type: () => ei,
      unreliable: () => gi,
      view: () => Ai
    });
    const iT = 255;
    var zT;

    function kT(TT) {
      Object.defineProperty(TT, Symbol.metadata, {
        value: void 0,
        writable: !0,
        configurable: !0,
        enumerable: !1
      })
    }! function(TT) {
      TT[TT.ADD = 128] = "ADD", TT[TT.REPLACE = 0] = "REPLACE", TT[TT.DELETE = 64] = "DELETE", TT[TT.DELETE_AND_MOVE = 96] = "DELETE_AND_MOVE", TT[TT.MOVE_AND_ADD = 160] = "MOVE_AND_ADD", TT[TT.DELETE_AND_ADD = 192] = "DELETE_AND_ADD", TT[TT.CLEAR = 10] = "CLEAR", TT[TT.REVERSE = 15] = "REVERSE", TT[TT.MOVE = 32] = "MOVE", TT[TT.DELETE_BY_REFID = 33] = "DELETE_BY_REFID", TT[TT.ADD_BY_REFID = 129] = "ADD_BY_REFID"
    }(zT || (zT = {})), Symbol.metadata ??= Symbol.for("Symbol.metadata");
    const WT = "undefined" !== typeof globalThis ? globalThis : "undefined" !== typeof global ? global : "undefined" !== typeof self ? self : "undefined" !== typeof window ? window : {};
    if ("function" === typeof Symbol && "function" !== typeof Symbol.for) {
      const TT = "colyseus.symbolRegistry",
        oT = WT[TT] || (WT[TT] = Object.create(null));
      Symbol.for = function(TT) {
        return oT[TT] || (oT[TT] = Symbol(TT))
      }, Symbol.keyFor = function(TT) {
        for (const IT in oT)
          if (oT[IT] === TT) return IT
      }
    }
    const XT = Symbol.for("$refId"),
      BT = "~track",
      FT = "~encoder",
      ST = "~decoder",
      DT = "~filter",
      LT = "~getByIndex",
      xT = "~deleteByIndex",
      cT = "~resyncPrune",
      KT = Symbol.for("$changes"),
      MT = Symbol.for("$childType"),
      rT = Symbol.for("$proxyTarget"),
      AT = "~onEncodeEnd",
      gT = "~reset",
      hT = "~onDecodeEnd",
      wT = Symbol.for("$values"),
      mT = "~builder",
      eT = "~descriptors",
      RT = "~__encodeDescriptor",
      uT = "~encoders",
      vT = "~__numFields",
      ET = "~__refTypeFieldIndexes",
      fT = "~__viewFieldIndexes",
      CT = "$__fieldIndexesByViewTag",
      jT = "~__unreliableFieldIndexes",
      JT = "~__patchOnlyFieldIndexes",
      UT = "~__fullSyncSkipIndexes",
      aT = "~__fullStateOnlyFieldIndexes",
      YT = "~__streamFieldIndexes",
      QT = "~__streamPriorities";
    let OT;
    try {
      OT = new TextEncoder
    } catch (Fz) {}
    const HT = new ArrayBuffer(8),
      nT = new Int32Array(HT),
      qT = new Float32Array(HT),
      ZT = new Float64Array(HT),
      lT = new BigInt64Array(HT),
      sT = "undefined" !== typeof Buffer && Buffer.byteLength ? Buffer.byteLength : function(TT, oT) {
        for (var IT = 0, iT = 0, zT = 0, kT = TT.length; zT < kT; zT++)(IT = TT.charCodeAt(zT)) < 128 ? iT += 1 : IT < 2048 ? iT += 2 : IT < 55296 || IT >= 57344 ? iT += 3 : (zT++, iT += 4);
        return iT
      };

    function tT(TT, oT, IT) {
      for (var iT = 0, zT = 0, kT = oT.length; zT < kT; zT++)(iT = oT.charCodeAt(zT)) < 128 ? TT[IT.offset++] = iT : iT < 2048 ? (TT[IT.offset] = 192 | iT >> 6, TT[IT.offset + 1] = 128 | 63 & iT, IT.offset += 2) : iT < 55296 || iT >= 57344 ? (TT[IT.offset] = 224 | iT >> 12, TT[IT.offset + 1] = 128 | iT >> 6 & 63, TT[IT.offset + 2] = 128 | 63 & iT, IT.offset += 3) : (zT++, iT = 65536 + ((1023 & iT) << 10 | 1023 & oT.charCodeAt(zT)), TT[IT.offset] = 240 | iT >> 18, TT[IT.offset + 1] = 128 | iT >> 12 & 63, TT[IT.offset + 2] = 128 | iT >> 6 & 63, TT[IT.offset + 3] = 128 | 63 & iT, IT.offset += 4)
    }

    function GT(TT, oT, IT) {
      TT[IT.offset++] = 255 & oT
    }

    function pT(TT, oT, IT) {
      TT[IT.offset++] = 255 & oT, TT[IT.offset++] = oT >> 8 & 255
    }

    function bT(TT, oT, IT) {
      TT[IT.offset++] = 255 & oT, TT[IT.offset++] = oT >> 8 & 255
    }

    function yT(TT, oT, IT) {
      TT[IT.offset++] = 255 & oT, TT[IT.offset++] = oT >> 8 & 255, TT[IT.offset++] = oT >> 16 & 255, TT[IT.offset++] = oT >> 24 & 255
    }

    function NT(TT, oT, IT) {
      const iT = oT >> 24,
        zT = oT >> 16,
        kT = oT >> 8,
        WT = oT;
      TT[IT.offset++] = 255 & WT, TT[IT.offset++] = 255 & kT, TT[IT.offset++] = 255 & zT, TT[IT.offset++] = 255 & iT
    }

    function PT(TT, oT, IT) {
      const iT = Math.floor(oT / Math.pow(2, 32));
      NT(TT, oT >>> 0, IT), NT(TT, iT, IT)
    }

    function dT(TT, oT, IT) {
      const iT = oT / Math.pow(2, 32) | 0;
      NT(TT, oT >>> 0, IT), NT(TT, iT, IT)
    }

    function VT(TT, oT, IT) {
      qT[0] = oT, yT(TT, nT[0], IT)
    }

    function To(TT, oT, IT) {
      ZT[0] = oT, yT(TT, nT[0], IT), yT(TT, nT[1], IT)
    }
    const oo = {
        int8: GT,
        uint8: function(TT, oT, IT) {
          TT[IT.offset++] = 255 & oT
        },
        int16: pT,
        uint16: bT,
        int32: yT,
        uint32: NT,
        int64: PT,
        uint64: dT,
        bigint64: function(TT, oT, IT) {
          lT[0] = BigInt.asIntN(64, oT), yT(TT, nT[0], IT), yT(TT, nT[1], IT)
        },
        biguint64: function(TT, oT, IT) {
          lT[0] = BigInt.asIntN(64, oT), yT(TT, nT[0], IT), yT(TT, nT[1], IT)
        },
        float32: VT,
        float64: To,
        boolean: function(TT, oT, IT) {
          TT[IT.offset++] = oT ? 1 : 0
        },
        string: function(TT, oT, IT) {
          oT || (oT = "");
          let iT = sT(oT, "utf8"),
            zT = 0;
          if (iT < 32) TT[IT.offset++] = 160 | iT, zT = 1;
          else if (iT < 256) TT[IT.offset++] = 217, TT[IT.offset++] = iT, zT = 2;
          else if (iT < 65536) TT[IT.offset++] = 218, bT(TT, iT, IT), zT = 3;
          else {
            if (!(iT < 4294967296)) throw new Error("String too long");
            TT[IT.offset++] = 219, NT(TT, iT, IT), zT = 5
          }
          return tT(TT, oT, IT), zT + iT
        },
        number: function TT(oT, IT, iT) {
          return isNaN(IT) ? TT(oT, 0, iT) : isFinite(IT) ? IT !== (0 | IT) ? Math.abs(IT) <= 34028235e31 && (qT[0] = IT, Math.abs(Math.abs(qT[0]) - Math.abs(IT)) < 1e-4) ? (oT[iT.offset++] = 202, VT(oT, IT, iT), 5) : (oT[iT.offset++] = 203, To(oT, IT, iT), 9) : IT >= 0 ? IT < 128 ? (oT[iT.offset++] = 255 & IT, 1) : IT < 256 ? (oT[iT.offset++] = 204, oT[iT.offset++] = 255 & IT, 2) : IT < 65536 ? (oT[iT.offset++] = 205, bT(oT, IT, iT), 3) : IT < 4294967296 ? (oT[iT.offset++] = 206, NT(oT, IT, iT), 5) : (oT[iT.offset++] = 207, dT(oT, IT, iT), 9) : IT >= -32 ? (oT[iT.offset++] = 224 | IT + 32, 1) : IT >= -128 ? (oT[iT.offset++] = 208, GT(oT, IT, iT), 2) : IT >= -32768 ? (oT[iT.offset++] = 209, pT(oT, IT, iT), 3) : IT >= -2147483648 ? (oT[iT.offset++] = 210, yT(oT, IT, iT), 5) : (oT[iT.offset++] = 211, PT(oT, IT, iT), 9) : TT(oT, IT > 0 ? Number.MAX_SAFE_INTEGER : -Number.MAX_SAFE_INTEGER, iT)
        },
        utf8Write: tT,
        utf8Length: sT
      },
      Io = new ArrayBuffer(8),
      io = new Int32Array(Io),
      zo = new Float32Array(Io),
      ko = new Float64Array(Io),
      Wo = new BigUint64Array(Io),
      Xo = new BigInt64Array(Io);

    function Bo(TT, oT, IT) {
      IT > TT.length - oT.offset && (IT = TT.length - oT.offset);
      for (var iT = "", zT = 0, kT = oT.offset, WT = oT.offset + IT; kT < WT; kT++) {
        var XT = TT[kT];
        if (0 !== (128 & XT))
          if (192 !== (224 & XT))
            if (224 !== (240 & XT)) {
              if (240 !== (248 & XT)) {
                console.error("decode.utf8Read(): Invalid byte " + XT + " at offset " + kT + ". Skip to end of string: " + (oT.offset + IT));
                break
              }(zT = (7 & XT) << 18 | (63 & TT[++kT]) << 12 | (63 & TT[++kT]) << 6 | 63 & TT[++kT]) >= 65536 ? (zT -= 65536, iT += String.fromCharCode(55296 + (zT >>> 10), 56320 + (1023 & zT))) : iT += String.fromCharCode(zT)
            } else iT += String.fromCharCode((15 & XT) << 12 | (63 & TT[++kT]) << 6 | 63 & TT[++kT]);
        else iT += String.fromCharCode((31 & XT) << 6 | 63 & TT[++kT]);
        else iT += String.fromCharCode(XT)
      }
      return oT.offset += IT, iT
    }

    function Fo(TT, oT) {
      return So(TT, oT) << 24 >> 24
    }

    function So(TT, oT) {
      return TT[oT.offset++]
    }

    function Do(TT, oT) {
      return Lo(TT, oT) << 16 >> 16
    }

    function Lo(TT, oT) {
      return TT[oT.offset++] | TT[oT.offset++] << 8
    }

    function xo(TT, oT) {
      return TT[oT.offset++] | TT[oT.offset++] << 8 | TT[oT.offset++] << 16 | TT[oT.offset++] << 24
    }

    function co(TT, oT) {
      return xo(TT, oT) >>> 0
    }

    function Ko(TT, oT) {
      return io[0] = xo(TT, oT), zo[0]
    }

    function Mo(TT, oT) {
      return io[0] = xo(TT, oT), io[1] = xo(TT, oT), ko[0]
    }

    function ro(TT, oT) {
      const IT = co(TT, oT);
      return xo(TT, oT) * Math.pow(2, 32) + IT
    }

    function Ao(TT, oT) {
      const IT = co(TT, oT);
      return co(TT, oT) * Math.pow(2, 32) + IT
    }
    const go = {
        utf8Read: Bo,
        int8: Fo,
        uint8: So,
        int16: Do,
        uint16: Lo,
        int32: xo,
        uint32: co,
        float32: Ko,
        float64: Mo,
        int64: ro,
        uint64: Ao,
        bigint64: function(TT, oT) {
          return io[0] = xo(TT, oT), io[1] = xo(TT, oT), Xo[0]
        },
        biguint64: function(TT, oT) {
          return io[0] = xo(TT, oT), io[1] = xo(TT, oT), Wo[0]
        },
        boolean: function(TT, oT) {
          return So(TT, oT) > 0
        },
        string: function(TT, oT) {
          const IT = TT[oT.offset++];
          let iT;
          return IT < 192 ? iT = 31 & IT : 217 === IT ? iT = So(TT, oT) : 218 === IT ? iT = Lo(TT, oT) : 219 === IT && (iT = co(TT, oT)), Bo(TT, oT, iT)
        },
        number: function(TT, oT) {
          const IT = TT[oT.offset++];
          return IT < 128 ? IT : 202 === IT ? Ko(TT, oT) : 203 === IT ? Mo(TT, oT) : 204 === IT ? So(TT, oT) : 205 === IT ? Lo(TT, oT) : 206 === IT ? co(TT, oT) : 207 === IT ? Ao(TT, oT) : 208 === IT ? Fo(TT, oT) : 209 === IT ? Do(TT, oT) : 210 === IT ? xo(TT, oT) : 211 === IT ? ro(TT, oT) : IT > 223 ? -1 * (255 - IT + 1) : void 0
        },
        stringCheck: function(TT, oT) {
          const IT = TT[oT.offset];
          return IT < 192 && IT > 160 || 217 === IT || 218 === IT || 219 === IT
        }
      },
      ho = {},
      wo = new Map;

    function mo(TT, oT) {
      oT.constructor && (Object.prototype.hasOwnProperty.call(oT, "constructor") && null == oT.constructor[Symbol.metadata] && kT(oT.constructor), wo.set(oT.constructor, TT), ho[TT] = oT), oT.encode && (oo[TT] = oT.encode), oT.decode && (go[TT] = oT.decode)
    }

    function eo(TT) {
      for (const oT in TT) mo(oT, TT[oT]);
      return TT => ei(TT)
    }
    const Ro = "ArraySchema does not support streaming \u2014 positional ops (splice / unshift / reverse) shift subsequent indexes, so holding ADDs back for a later tick under `maxPerTick` would desync the decoder. Use `t.stream(X)` (stable monotonic positions) or `t.map(X).stream()` (stable keys) instead.";

    function uo() {
      return {
        pendingByView: new Map,
        sentByView: new Map,
        broadcastPending: new Set,
        sentBroadcast: new Set,
        broadcastDeletes: new Set,
        maxPerTick: 32
      }
    }

    function vo(TT) {
      return TT._stream ??= uo()
    }

    function Eo(TT, oT, IT) {
      0 === oT.activeViews.size && vo(TT).broadcastPending.add(IT)
    }

    function fo(TT, oT, IT, iT) {
      const kT = TT._stream;
      if (void 0 === kT) return !0;
      let WT = !1;
      return kT.broadcastPending.delete(iT) ? WT = !0 : kT.sentBroadcast.delete(iT) && kT.broadcastDeletes.add(iT), oT.forEachActiveView((TT => {
        const oT = kT.pendingByView.get(TT.id);
        if (oT?.has(iT)) return oT.delete(iT), void(WT = !0);
        const XT = kT.sentByView.get(TT.id);
        if (XT?.has(iT)) {
          XT.delete(iT);
          let oT = TT.changes.get(IT);
          void 0 === oT && (oT = new Map, TT.changes.set(IT, oT)), oT.set(iT, zT.DELETE)
        }
      })), WT
    }

    function Co(TT, oT) {
      const IT = TT._stream?.pendingByView;
      if (void 0 === IT) return !1;
      for (const [iT, zT] of IT)
        if (zT.size > 0 && void 0 !== oT.activeViews.get(iT)?.deref()) return !0;
      return !1
    }

    function jo(TT) {
      const oT = TT._stream;
      return void 0 !== oT && (oT.broadcastPending.size > 0 || oT.broadcastDeletes.size > 0)
    }

    function Jo(TT, oT, IT) {
      const iT = vo(TT);
      let zT = iT.pendingByView.get(oT);
      void 0 === zT && (zT = new Set, iT.pendingByView.set(oT, zT)), zT.add(IT)
    }

    function Uo(TT, oT) {
      const IT = TT._stream;
      void 0 !== IT && (IT.pendingByView.delete(oT), IT.sentByView.delete(oT), IT.priorityByView?.delete(oT))
    }
    const ao = {
      8: "uint8",
      16: "uint16",
      32: "uint32"
    };

    function Yo(TT) {
      if (null == TT || "object" !== typeof TT) throw new Error("t.quantized(): options object with { min, max } is required.");
      const {
        min: oT,
        max: IT
      } = TT;
      if ("number" !== typeof oT || "number" !== typeof IT || !(IT > oT) || !Number.isFinite(oT) || !Number.isFinite(IT)) throw new Error(`t.quantized(): require finite min < max (got min=${oT}, max=${IT}).`);
      const iT = TT.bits ?? 16;
      if (8 !== iT && 16 !== iT && 32 !== iT) throw new Error(`t.quantized(): bits must be 8, 16 or 32 (got ${iT}).`);
      const zT = TT.mode ?? "clamp";
      if ("clamp" !== zT && "wrap" !== zT) throw new Error(`t.quantized(): mode must be "clamp" or "wrap" (got ${JSON.stringify(zT)}).`);
      const kT = "wrap" === zT,
        WT = Math.pow(2, iT);
      return {
        min: oT,
        max: IT,
        bits: iT,
        wrap: kT,
        wire: ao[iT],
        range: IT - oT,
        span: kT ? WT : oT === -IT ? WT - 2 : WT - 1
      }
    }

    function Qo(TT) {
      return null !== TT && "object" === typeof TT && void 0 !== TT.quantized
    }

    function Oo(TT, oT) {
      if (TT.wrap) {
        if (!Number.isFinite(oT)) return 0;
        const IT = TT.range;
        let iT = (oT - TT.min) % IT;
        iT < 0 && (iT += IT);
        const zT = TT.span;
        return Math.floor(iT / IT * zT + .5) % zT
      }
      if (oT !== oT) return 0;
      const IT = oT < TT.min ? TT.min : oT > TT.max ? TT.max : oT;
      return Math.floor((IT - TT.min) / TT.range * TT.span + .5)
    }

    function Ho(TT, oT) {
      return TT.min + oT / TT.span * TT.range
    }

    function no(TT) {
      const oT = oo[TT.wire];
      return (IT, iT, zT) => oT(IT, Oo(TT, iT), zT)
    }
    class qo {
      types = {};
      schemas = new Map;
      hasFilters = !1;
      static inheritedTypes = new WeakMap;
      static cachedContexts = new WeakMap;
      static register(TT) {
        const oT = Object.getPrototypeOf(TT);
        if (oT !== Ji) {
          let IT = qo.inheritedTypes.get(oT);
          IT || (IT = new Set, qo.inheritedTypes.set(oT, IT)), IT.add(TT)
        }
      }
      static cache(TT) {
        let oT = qo.cachedContexts.get(TT);
        return oT || (oT = new qo(TT), qo.cachedContexts.set(TT, oT)), oT
      }
      constructor(TT) {
        TT && this.discoverTypes(TT)
      }
      has(TT) {
        return this.schemas.has(TT)
      }
      get(TT) {
        return this.types[TT]
      }
      add(TT) {
        let oT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.schemas.size;
        return !this.schemas.has(TT) && (this.types[oT] = TT, null == TT[Symbol.metadata] && yo.initialize(TT), this.schemas.set(TT, oT), !0)
      }
      getTypeId(TT) {
        return this.schemas.get(TT)
      }
      discoverTypes(TT) {
        if (!this.add(TT)) return;
        qo.inheritedTypes.get(TT)?.forEach((TT => {
          this.discoverTypes(TT)
        }));
        let oT = TT;
        for (;
          (oT = Object.getPrototypeOf(oT)) && oT !== Ji && oT !== Function.prototype;) this.discoverTypes(oT);
        const IT = TT[Symbol.metadata];
        (IT[fT] || IT[YT]) && (this.hasFilters = !0);
        for (const iT in IT) {
          const TT = IT[iT].type;
          if ("string" !== typeof TT && !Qo(TT))
            if ("function" === typeof TT) this.discoverTypes(TT);
            else {
              const oT = Object.values(TT)[0];
              if ("string" === typeof oT) continue;
              this.discoverTypes(oT)
            }
        }
      }
      debug() {
        return `TypeContext ->\n\tSchema types: ${this.schemas.size}\n\thasFilters: ${this.hasFilters}`
      }
    }

    function Zo(TT) {
      const oT = to(TT);
      return oT ? {
        complexTypeKlass: ho[oT],
        childType: TT[oT]
      } : {
        complexTypeKlass: !1,
        childType: TT
      }
    }

    function so(TT, oT) {
      const IT = Go(TT),
        iT = to(IT),
        zT = iT && to(IT[iT]);
      if (zT) throw new Error(`${oT?`${oT}: `:""}@colyseus/schema: nested collections are not supported ("${iT}" of "${zT}"). Collections can only hold primitive types or Schema classes, wrap the inner ${zT} in a Schema class.`);
      return IT
    }

    function to(TT) {
      return "object" === typeof TT && null !== TT ? Object.keys(TT).find((TT => void 0 !== ho[TT])) : void 0
    }

    function Go(TT) {
      if ("object" !== typeof TT || null === TT) return TT;
      if (Array.isArray(TT)) return {
        array: Go(TT[0])
      };
      const oT = function(TT) {
        const oT = Object.keys(TT),
          IT = oT.filter((TT => /\d+/.test(TT)));
        if (IT.length > 0 && IT.length === oT.length / 2 && TT[TT[IT[0]]] == IT[0]) return "number";
        if (oT.length > 0 && oT.every((oT => TT[oT] === oT))) return "string"
      }(TT);
      if (oT) return oT;
      if (Qo(TT)) return "string" === typeof TT.quantized.wire ? TT : {
        quantized: Yo(TT.quantized)
      };
      if (void 0 !== TT.type) return Go(TT.type);
      const IT = to(TT);
      return IT && (TT[IT] = Go(TT[IT])), TT
    }
    const po = [ET, jT, JT, UT, aT, YT, uT];

    function bo(TT, oT, IT) {
      TT[oT] || Object.defineProperty(TT, oT, {
        value: [],
        enumerable: !1,
        configurable: !0,
        writable: !0
      }), TT[oT].push(IT)
    }
    const yo = {
        addField(TT, oT, IT, iT, zT) {
          if (oT >= 63) throw new Error(`Can't define field '${IT}'.\nSchema instances may only have up to 63 fields.`);
          TT[oT] = Object.assign(TT[oT] || {}, {
            type: iT,
            index: oT,
            name: IT
          }), Object.defineProperty(TT, eT, {
            value: TT[eT] || {},
            enumerable: !1,
            configurable: !0
          }), TT[eT][IT] = zT || {
            value: void 0,
            writable: !0,
            enumerable: !0,
            configurable: !0
          }, Object.defineProperty(TT, vT, {
            value: oT,
            enumerable: !1,
            configurable: !0
          }), Object.defineProperty(TT, IT, {
            value: oT,
            enumerable: !1,
            configurable: !0
          }), "string" === typeof TT[oT].type || Qo(TT[oT].type) || (void 0 === TT[ET] && Object.defineProperty(TT, ET, {
            value: [],
            enumerable: !1,
            configurable: !0
          }), TT[ET].push(oT));
          const kT = TT[oT].type;
          if (kT && "object" === typeof kT && void 0 !== kT.stream) {
            if (void 0 !== kT.array) throw new Error(Ro);
            TT[oT].stream = !0, TT[YT] || Object.defineProperty(TT, YT, {
              value: [],
              enumerable: !1,
              configurable: !0,
              writable: !0
            }), TT[YT].includes(oT) || TT[YT].push(oT);
            const zT = iT?.priority;
            "function" === typeof zT && yo.setStreamPriority(TT, IT, zT)
          }
        },
        setTag(TT, oT, IT) {
          const iT = TT[oT];
          if (TT[iT].tag = IT, TT[fT] || (Object.defineProperty(TT, fT, {
              value: [],
              enumerable: !1,
              configurable: !0
            }), Object.defineProperty(TT, CT, {
              value: {},
              enumerable: !1,
              configurable: !0
            })), TT[fT].push(iT), IT < 0) TT[CT][IT] || (TT[CT][IT] = []), TT[CT][IT].push(iT);
          else
            for (let zT = IT; zT > 0; zT &= zT - 1) {
              const oT = zT & -zT;
              TT[CT][oT] || (TT[CT][oT] = []), TT[CT][oT].push(iT)
            }
        },
        setUnreliable(TT, oT) {
          const IT = TT[oT];
          if ("string" !== typeof TT[IT].type) throw new Error(`@unreliable cannot be applied to ref-type field "${oT}". For ref-type fields, mark each primitive sub-field with @unreliable instead. See README "Limitations and best practices".`);
          TT[IT].unreliable = !0, TT[jT] || Object.defineProperty(TT, jT, {
            value: [],
            enumerable: !1,
            configurable: !0,
            writable: !0
          }), TT[jT].push(IT)
        },
        setPatchOnly(TT, oT) {
          const IT = TT[oT];
          if (TT[IT].fullStateOnly) throw new Error(`field "${oT}" cannot be both patchOnly and fullStateOnly \u2014 those are the only two delivery channels, so the field would never reach a client.`);
          TT[IT].patchOnly = !0, bo(TT, JT, IT), bo(TT, UT, IT)
        },
        setDeprecated(TT, oT) {
          const IT = TT[oT];
          TT[IT].deprecated = !0, bo(TT, UT, IT), Object.defineProperty(TT, IT, {
            value: TT[IT],
            enumerable: !1,
            configurable: !0
          })
        },
        setFullStateOnly(TT, oT) {
          const IT = TT[oT];
          if (TT[IT].patchOnly) throw new Error(`field "${oT}" cannot be both patchOnly and fullStateOnly \u2014 those are the only two delivery channels, so the field would never reach a client.`);
          TT[IT].fullStateOnly = !0, bo(TT, aT, IT)
        },
        setStream(TT, oT) {
          const IT = TT[oT];
          TT[IT].stream = !0, TT[YT] || Object.defineProperty(TT, YT, {
            value: [],
            enumerable: !1,
            configurable: !0,
            writable: !0
          }), TT[YT].push(IT)
        },
        setStreamPriority(TT, oT, IT) {
          const iT = TT[oT];
          TT[QT] || Object.defineProperty(TT, QT, {
            value: {},
            enumerable: !1,
            configurable: !0,
            writable: !0
          }), TT[QT][iT] = IT
        },
        getStreamPriority: (TT, oT) => TT?.[QT]?.[oT],
        defineField(TT, oT, IT, iT, zT) {
          const kT = so(zT, `${TT.name}.${iT}`),
            {
              complexTypeKlass: WT,
              childType: XT
            } = Zo(kT);
          yo.addField(oT, IT, iT, kT, ui(iT, IT, XT, WT)), oT[eT][iT] && Object.defineProperty(TT.prototype, iT, oT[eT][iT]), ("string" === typeof kT || Qo(kT)) && (oT[uT] || Object.defineProperty(oT, uT, {
            value: [],
            enumerable: !1,
            configurable: !0,
            writable: !0
          }), oT[uT][IT] = "string" === typeof kT ? oo[kT] : no(kT.quantized))
        },
        setFields(TT, oT) {
          const IT = TT.prototype.constructor;
          qo.register(IT);
          const iT = Object.getPrototypeOf(IT),
            zT = iT && iT[Symbol.metadata],
            kT = yo.initialize(IT);
          IT[BT] || (IT[BT] = Ji[BT]), IT[FT] || (IT[FT] = Ji[FT]), IT[ST] || (IT[ST] = Ji[ST]), IT.prototype.toJSON || (IT.prototype.toJSON = Ji.prototype.toJSON);
          let WT = kT[vT] ?? (zT && zT[vT]) ?? -1;
          WT++, kT[uT] || Object.defineProperty(kT, uT, {
            value: zT?.[uT] ? [...zT[uT]] : [],
            enumerable: !1,
            configurable: !0,
            writable: !0
          });
          for (const XT in oT) {
            if (void 0 !== kT[XT]) throw new Error(`@colyseus/schema: Duplicate '${XT}' definition on '${IT.name||"(anonymous)"}'.`);
            yo.defineField(IT, kT, WT, XT, oT[XT]), WT++
          }
          return TT
        },
        isDeprecated: (TT, oT) => !0 === TT[oT].deprecated,
        initialize(TT) {
          const oT = Object.getPrototypeOf(TT),
            IT = oT[Symbol.metadata];
          let iT = TT[Symbol.metadata] ?? Object.create(null);
          if (oT !== Ji && iT === IT && (iT = Object.create(null), IT)) {
            Object.setPrototypeOf(iT, IT), Object.defineProperty(iT, vT, {
              value: IT[vT],
              enumerable: !1,
              configurable: !0,
              writable: !0
            }), void 0 !== IT[fT] && (Object.defineProperty(iT, fT, {
              value: [...IT[fT]],
              enumerable: !1,
              configurable: !0,
              writable: !0
            }), Object.defineProperty(iT, CT, {
              value: {
                ...IT[CT]
              },
              enumerable: !1,
              configurable: !0,
              writable: !0
            }));
            for (const TT of po) {
              const oT = IT[TT];
              void 0 !== oT && Object.defineProperty(iT, TT, {
                value: [...oT],
                enumerable: !1,
                configurable: !0,
                writable: !0
              })
            }
            Object.defineProperty(iT, eT, {
              value: {
                ...IT[eT]
              },
              enumerable: !1,
              configurable: !0,
              writable: !0
            })
          }
          return Object.defineProperty(TT, Symbol.metadata, {
            value: iT,
            writable: !1,
            configurable: !0
          }), iT
        },
        isValidInstance: TT => TT.constructor[Symbol.metadata] && Object.prototype.hasOwnProperty.call(TT.constructor[Symbol.metadata], vT),
        getFields(TT) {
          const oT = TT[Symbol.metadata],
            IT = {};
          for (let iT = 0; iT <= oT[vT]; iT++) IT[oT[iT].name] = oT[iT].type;
          return IT
        },
        hasViewTagAtIndex: (TT, oT) => TT?.[fT]?.includes(oT),
        hasUnreliableAtIndex: (TT, oT) => TT?.[jT]?.includes(oT),
        hasPatchOnlyAtIndex: (TT, oT) => TT?.[JT]?.includes(oT),
        hasFullStateOnlyAtIndex: (TT, oT) => TT?.[aT]?.includes(oT),
        hasStreamAtIndex: (TT, oT) => TT?.[YT]?.includes(oT)
      },
      No = (TT, oT, IT) => TT(oT, IT);
    class Po {
      dirtyLow = 0;
      dirtyHigh = 0;
      ops;
      constructor(TT) {
        this.ops = new Uint8Array(Math.max(TT + 1, 1))
      }
      record(TT, oT) {
        const IT = this.ops[TT];
        0 === IT ? this.ops[TT] = oT : (IT === zT.DELETE || IT === zT.ADD && oT === zT.DELETE_AND_ADD) && (this.ops[TT] = zT.DELETE_AND_ADD), TT < 32 ? this.dirtyLow |= 1 << TT : this.dirtyHigh |= 1 << TT - 32
      }
      recordDelete(TT, oT) {
        this.ops[TT] = oT, TT < 32 ? this.dirtyLow |= 1 << TT : this.dirtyHigh |= 1 << TT - 32
      }
      recordRaw(TT, oT) {
        this.record(TT, oT)
      }
      operationAt(TT) {
        const oT = this.ops[TT];
        return 0 === oT ? void 0 : oT
      }
      setOperationAt(TT, oT) {
        this.ops[TT] = oT
      }
      forEach(TT) {
        this.forEachWithCtx(TT, No)
      }
      forEachWithCtx(TT, oT) {
        let IT = this.dirtyLow,
          iT = this.dirtyHigh;
        const zT = this.ops;
        for (; 0 !== IT;) {
          const iT = IT & -IT,
            kT = 31 - Math.clz32(iT);
          IT ^= iT, oT(TT, kT, zT[kT])
        }
        for (; 0 !== iT;) {
          const IT = iT & -iT,
            kT = 31 - Math.clz32(IT) + 32;
          iT ^= IT, oT(TT, kT, zT[kT])
        }
      }
      size() {
        return TI(this.dirtyLow) + TI(this.dirtyHigh)
      }
      has() {
        return 0 !== (this.dirtyLow | this.dirtyHigh)
      }
      reset() {
        this.dirtyLow = 0, this.dirtyHigh = 0, this.ops.fill(0)
      }
    }
    class Vo {
      Nc = new Map;
      pureOps = [];
      record(TT, oT) {
        const IT = this.Nc.get(TT);
        void 0 === IT ? this.Nc.set(TT, oT) : (IT === zT.DELETE || IT === zT.ADD && oT === zT.DELETE_AND_ADD) && this.Nc.set(TT, zT.DELETE_AND_ADD)
      }
      recordDelete(TT, oT) {
        this.Nc.set(TT, oT)
      }
      recordRaw(TT, oT) {
        this.Nc.set(TT, oT)
      }
      recordPure(TT) {
        this.pureOps.push([this.Nc.size, TT])
      }
      operationAt(TT) {
        return this.Nc.get(TT)
      }
      setOperationAt(TT, oT) {
        this.Nc.has(TT) && this.Nc.set(TT, oT)
      }
      forEach(TT) {
        this.forEachWithCtx(TT, No)
      }
      forEachWithCtx(TT, oT) {
        const IT = this.pureOps;
        if (IT.length > 0) {
          let iT = 0,
            zT = 0;
          for (const [kT, WT] of this.Nc) {
            for (; iT < IT.length && IT[iT][0] <= zT;) {
              const zT = IT[iT++][1];
              oT(TT, -zT, zT)
            }
            oT(TT, kT, WT), zT++
          }
          for (; iT < IT.length;) {
            const zT = IT[iT++][1];
            oT(TT, -zT, zT)
          }
        } else
          for (const [iT, zT] of this.Nc) oT(TT, iT, zT)
      }
      size() {
        return this.Nc.size + this.pureOps.length
      }
      has() {
        return this.Nc.size > 0 || this.pureOps.length > 0
      }
      reset() {
        this.Nc.clear(), this.pureOps.length = 0
      }
      shift(TT) {
        const oT = new Map;
        for (const [IT, iT] of this.Nc) oT.set(IT + TT, iT);
        this.Nc = oT
      }
    }

    function TI(TT) {
      return 16843009 * ((TT = (858993459 & (TT -= TT >>> 1 & 1431655765)) + (TT >>> 2 & 858993459)) + (TT >>> 4) & 252645135) >>> 24
    }

    function oI(TT) {
      if (void 0 === TT) return 0;
      let oT = 0;
      for (let IT = 0, iT = TT.length; IT < iT; IT++) {
        const iT = TT[IT];
        iT < 32 && (oT |= 1 << iT)
      }
      return oT
    }

    function II(TT) {
      const oT = TT.constructor;
      if (Object.prototype.hasOwnProperty.call(oT, RT)) return oT[RT];
      const IT = oT[Symbol.metadata],
        iT = yo.isValidInstance(TT),
        zT = (IT?.[fT]?.length ?? 0) > 0,
        kT = function(TT) {
          const oT = [],
            IT = [],
            iT = [],
            zT = [],
            kT = TT?.[vT];
          if (void 0 === kT) return {
            names: oT,
            types: IT,
            tags: iT,
            encoders: zT
          };
          const WT = TT[uT];
          for (let XT = 0; XT <= kT; XT++) {
            const kT = TT[XT];
            void 0 !== kT ? (oT[XT] = kT.name, IT[XT] = kT.type, iT[XT] = kT.tag, zT[XT] = WT?.[XT]) : (oT[XT] = void 0, IT[XT] = void 0, iT[XT] = void 0, zT[XT] = void 0)
          }
          return {
            names: oT,
            types: IT,
            tags: iT,
            encoders: zT
          }
        }(IT),
        WT = iT && !zT ? void 0 : oT[DT],
        XT = {
          encoder: oT[FT],
          filter: WT,
          metadata: IT,
          isSchema: iT,
          filterBitmask: iT ? oI(IT?.[fT]) : 0,
          hasAnyFullStateOnly: (IT?.[aT]?.length ?? 0) > 0,
          hasAnyUnreliable: (IT?.[jT]?.length ?? 0) > 0,
          hasAnyStream: (IT?.[YT]?.length ?? 0) > 0,
          hasAnyView: zT,
          fullStateOnlyBitmask: oI(IT?.[aT]),
          unreliableBitmask: oI(IT?.[jT]),
          streamBitmask: oI(IT?.[YT]),
          names: kT.names,
          types: kT.types,
          tags: kT.tags,
          encoders: kT.encoders
        };
      return Object.defineProperty(oT, RT, {
        value: XT,
        enumerable: !1,
        writable: !0,
        configurable: !0
      }), XT
    }

    function iI(TT, oT) {
      if (void 0 !== TT.parentRef && oT(TT.parentRef, TT._parentIndex)) return !0;
      for (let IT = TT.extraParents; void 0 !== IT; IT = IT.next)
        if (oT(IT.ref, IT.index)) return !0;
      return !1
    }
    const zI = (TT, oT) => {
        TT.isFieldUnreliable(oT) ? TT.ensureUnreliableRecorder().record(oT, zT.ADD) : TT.record(oT, zT.ADD)
      },
      kI = (TT, oT) => TT(oT);

    function WI(TT, oT, IT) {
      const iT = TT.refTarget;
      if (void 0 !== iT[MT]) {
        if (TT.isPatchOnly) return;
        if (Array.isArray(iT.items)) {
          const TT = iT.items;
          for (let iT = 0, zT = TT.length; iT < zT; iT++) void 0 !== TT[iT] && IT(oT, iT)
        } else if (void 0 !== iT.journal)
          for (const [TT, zT] of iT.journal.keyByIndex) iT.$items.has(zT) && IT(oT, TT);
        else if (void 0 !== iT.$items)
          for (const TT of iT.$items.keys()) IT(oT, TT)
      } else {
        const zT = TT.metadata;
        if (!zT) return;
        const kT = zT[vT] ?? -1,
          WT = zT[UT],
          XT = TT.encDescriptor.names;
        for (let TT = 0; TT <= kT; TT++) {
          const zT = XT[TT];
          if (void 0 === zT) continue;
          if (WT && WT.includes(TT)) continue;
          const kT = iT[zT];
          void 0 !== kT && null !== kT && IT(oT, TT)
        }
      }
    }

    function XI(TT, oT, IT, iT) {
      ! function(TT, oT, IT) {
        if (!oT) return;
        const iT = oT[KT],
          zT = !iT._isSchema;
        let kT;
        zT ? (oT = iT.parent, IT = iT.parentIndex, kT = oT?.[KT].metadata) : kT = iT.metadata;
        const WT = (kT?.[JT]?.includes(IT) ? vI : 0) | (kT?.[aT]?.includes(IT) ? EI : 0),
          XT = iT.flags & jI | WT,
          BT = TT.flags;
        TT.flags = BT | XT;
        XT & ~BT & EI && (TT.reset(), TT.unreliableRecorder?.reset());
        const FT = TT.root?.types;
        if (!FT?.hasFilters) return;
        const ST = kT?.[fT]?.includes(IT) ?? !1,
          DT = kT?.[YT]?.includes(IT) ?? !1,
          LT = iT.isFiltered || ST || DT;
        if (TT.isFiltered = LT, DT && !zT) {
          TT.isStreamCollection = !0;
          const oT = vo(TT.ref);
          if (void 0 === oT.priority) {
            const TT = yo.getStreamPriority(kT, IT);
            void 0 !== TT && (oT.priority = TT)
          }
          TT.root?.registerStream(TT.ref)
        }
        if (LT) {
          const oT = FI(TT);
          TT.isVisibilitySharedWithParent = iT.isFiltered && oT && !DT && (!ST || zT && kT[IT].tag !== Mi)
        }
      }(TT, oT, IT), TT.isFullStateOnly || (TT.has() && TT.root?.enqueueChangeTree(TT), TT.unreliableRecorder?.has() && TT.root?.enqueueUnreliable(TT), TT.has() || TT.unreliableRecorder?.has() || TT.root?.enqueueChangeTree(TT))
    }

    function BI(TT) {
      const oT = TT.pendingFilterRefresh;
      for (let IT = 0; IT < oT.length; IT++) {
        const TT = oT[IT];
        0 !== (TT.flags & CI) && SI(TT)
      }
      oT.length = 0
    }

    function FI(TT) {
      return TT._isSchema || "string" !== typeof TT.refTarget[MT]
    }

    function SI(TT) {
      TT.flags &= ~CI;
      const oT = TT.root;
      if (void 0 === oT || void 0 === TT.parentRef) return;
      const IT = FI(TT);
      let iT = KI(TT, TT.parentRef, TT._parentIndex, IT);
      for (let kT = TT.extraParents; void 0 !== kT && iT !== cI; kT = kT.next) iT |= KI(TT, kT.ref, kT.index, IT);
      if (0 === iT) return;
      TT.isVisibilitySharedWithParent = 0 !== (iT & xI);
      const zT = 0 === (iT & LI);
      zT !== TT.isFiltered && (TT.isFiltered = zT, zT || TT.isFullStateOnly || (TT.forEachLiveWithCtx(TT, zI), TT.has() && oT.enqueueChangeTree(TT), TT.unreliableRecorder?.has() && oT.enqueueUnreliable(TT)), TT.forEachChildWithCtx(TT, MI))
    }
    const DI = 1,
      LI = 2,
      xI = 4,
      cI = DI | LI | xI;

    function KI(TT, oT, IT, iT) {
      const zT = oT[KT];
      if (zT.root !== TT.root || ! function(TT, oT, IT) {
          const iT = oT.refTarget;
          if (oT.isArray) {
            const oT = iT.items,
              zT = oT[IT];
            if (void 0 !== zT && zT[KT] === TT) return !0;
            for (let IT = 0, iT = oT.length; IT < iT; IT++) {
              const iT = oT[IT];
              if (void 0 !== iT && iT[KT] === TT) return !0
            }
            return !1
          }
          const zT = oT.getValue(IT);
          return void 0 !== zT && zT[KT] === TT
        }(TT, zT, IT)) return 0;
      zT.flags & CI && SI(zT);
      let kT = DI;
      if (zT._isSchema) {
        void 0 !== zT.encDescriptor.tags[IT] || zT.isFieldStream(IT) || (zT.isFiltered ? iT && (kT |= xI) : kT |= LI)
      } else if (zT.isFiltered) {
        if (iT && !zT.isStreamCollection) {
          const TT = zT.parent?.[KT];
          (TT?._isSchema ? TT.encDescriptor.tags[zT.parentIndex] : void 0) !== Mi && (kT |= xI)
        }
      } else kT |= LI;
      return kT
    }
    const MI = (TT, oT, IT) => {
      SI(oT)
    };

    function rI(TT, oT, IT, iT) {
      if (TT.addParent(oT, iT), !IT) return;
      const zT = IT.add(TT);
      IT !== TT.root && (TT.root = IT, XI(TT, oT, iT));
      const kT = oT?.[KT];
      if (void 0 !== kT && void 0 !== kT.subscribedViews && void 0 !== oT[MT] && function(TT, oT, IT, iT) {
          const zT = TT.subscribedViews;
          if (void 0 === zT) return;
          const kT = TT.isStreamCollection,
            WT = kT ? TT.ref : void 0,
            XT = kT ? void 0 : IT[KT];
          for (let BT = 0, FT = zT.length; BT < FT; BT++) {
            let TT = zT[BT];
            for (; 0 !== TT;) {
              const IT = TT & -TT;
              TT ^= IT;
              const FT = 32 * BT + (31 - Math.clz32(IT)),
                ST = iT.activeViews.get(FT),
                DT = ST?.deref();
              void 0 !== DT ? kT ? Jo(WT, FT, oT) : void 0 !== XT && DT.markVisible(XT) : zT[BT] &= ~IT
            }
          }
        }(kT, iT, TT.ref, IT), zT) {
        let oT = wI[mI];
        void 0 === oT && (oT = {
          parentRef: void 0,
          root: void 0
        }, wI[mI] = oT), oT.parentRef = TT.ref, oT.root = IT, mI++, gI(TT, oT, eI), mI--
      }
    }

    function AI(TT, oT, IT) {
      TT(oT, IT)
    }

    function gI(TT, oT, IT) {
      const iT = TT.refTarget;
      if (iT[MT]) {
        if ("string" !== typeof iT[MT]) {
          const TT = iT.items;
          if (void 0 !== TT)
            for (let iT = 0, zT = TT.length; iT < zT; iT++) {
              const zT = TT[iT];
              zT && IT(oT, zT[KT], iT)
            } else {
              const TT = iT.$items,
                zT = iT._collectionIndexes;
              for (const iT of TT.keys()) {
                const kT = TT.get(iT);
                kT && IT(oT, kT[KT], zT?.[iT] ?? iT)
              }
            }
        }
      } else {
        const zT = TT.metadata,
          kT = zT?.[ET];
        if (!kT) return;
        const WT = TT.encDescriptor.names;
        for (let TT = 0, XT = kT.length; TT < XT; TT++) {
          const zT = kT[TT],
            XT = iT[WT[zT]];
          XT && IT(oT, XT[KT], zT)
        }
      }
    }

    function hI(TT, oT, IT) {
      oT.root !== TT ? oT.setRoot(TT) : TT.add(oT)
    }
    const wI = [];
    let mI = 0;

    function eI(TT, oT, IT) {
      if (oT.root === TT.root) return TT.root.add(oT), void TT.root.moveNextToParent(oT);
      oT.setParent(TT.parentRef, TT.root, IT)
    }

    function RI(TT, oT, IT) {
      const iT = (3 & IT) << 3;
      return IT < 4 ? TT >>> iT & 255 : oT >>> iT & 255
    }
    const uI = (TT, oT, IT) => TT(oT, IT);
    const vI = 16,
      EI = 32,
      fI = 128,
      CI = 256,
      jI = vI | EI;
    class JI {
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
      set isFiltered(TT) {
        this.flags = TT ? 1 | this.flags : -2 & this.flags
      }
      get isVisibilitySharedWithParent() {
        return 0 !== (2 & this.flags)
      }
      set isVisibilitySharedWithParent(TT) {
        this.flags = TT ? 2 | this.flags : -3 & this.flags
      }
      get isNew() {
        return 0 !== (4 & this.flags)
      }
      set isNew(TT) {
        this.flags = TT ? 4 | this.flags : -5 & this.flags
      }
      get isUnreliable() {
        return 0 !== (8 & this.flags)
      }
      set isUnreliable(TT) {
        this.flags = TT ? 8 | this.flags : -9 & this.flags
      }
      get isPatchOnly() {
        return 0 !== (this.flags & vI)
      }
      set isPatchOnly(TT) {
        this.flags = TT ? this.flags | vI : this.flags & ~vI
      }
      get isFullStateOnly() {
        return 0 !== (this.flags & EI)
      }
      set isFullStateOnly(TT) {
        this.flags = TT ? this.flags | EI : this.flags & ~EI
      }
      get isStreamCollection() {
        return 0 !== (64 & this.flags)
      }
      set isStreamCollection(TT) {
        this.flags = TT ? 64 | this.flags : -65 & this.flags
      }
      get needsRestage() {
        return 0 !== (this.flags & fI)
      }
      set needsRestage(TT) {
        this.flags = TT ? this.flags | fI : -129 & this.flags
      }
      get hasFilteredFields() {
        return this.isFiltered || this.encDescriptor.hasAnyView
      }
      ensureUnreliableRecorder() {
        return void 0 === this.unreliableRecorder && (this.unreliableRecorder = this._isSchema ? new Po(this.metadata?.[vT] ?? 0) : new Vo), this.unreliableRecorder
      }
      isFieldUnreliable(TT) {
        const oT = this.encDescriptor;
        return !!oT.hasAnyUnreliable && (TT < 32 ? 0 !== (oT.unreliableBitmask & 1 << TT) : yo.hasUnreliableAtIndex(this.metadata, TT))
      }
      isFieldFullStateOnly(TT) {
        if (this.isFullStateOnly) return !0;
        const oT = this.encDescriptor;
        return !!oT.hasAnyFullStateOnly && (TT < 32 ? 0 !== (oT.fullStateOnlyBitmask & 1 << TT) : yo.hasFullStateOnlyAtIndex(this.metadata, TT))
      }
      isFieldStream(TT) {
        const oT = this.encDescriptor;
        return !!oT.hasAnyStream && (TT < 32 ? 0 !== (oT.streamBitmask & 1 << TT) : yo.hasStreamAtIndex(this.metadata, TT))
      }
      constructor(TT) {
        let oT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : TT;
        this.ref = TT, this.refTarget = oT;
        const IT = II(TT);
        this.encDescriptor = IT, this.metadata = IT.metadata;
        const iT = IT.isSchema;
        if (this._isSchema = iT, this.ops = void 0, this.collDirty = void 0, this.collPureOps = void 0, iT) {
          const TT = this.metadata?.[vT] ?? 0;
          TT > 7 && (this.ops = new Uint8Array(TT + 1))
        } else this.collDirty = new Map
      }
      _opAt(TT) {
        const oT = this.ops;
        if (void 0 !== oT) return oT[TT];
        const IT = (3 & TT) << 3;
        return TT < 4 ? this.opsLow >>> IT & 255 : this.opsHigh >>> IT & 255
      }
      _opPut(TT, oT) {
        const IT = this.ops;
        if (void 0 !== IT) return void(IT[TT] = oT);
        const iT = (3 & TT) << 3,
          zT = ~(255 << iT);
        TT < 4 ? this.opsLow = this.opsLow & zT | oT << iT : this.opsHigh = this.opsHigh & zT | oT << iT
      }
      _markDirty(TT) {
        TT < 32 ? this.dirtyLow |= 1 << TT : this.dirtyHigh |= 1 << TT - 32
      }
      record(TT, oT) {
        if (this._isSchema) {
          const IT = this._opAt(TT);
          0 === IT ? this._opPut(TT, oT) : (IT === zT.DELETE || IT === zT.ADD && oT === zT.DELETE_AND_ADD) && this._opPut(TT, zT.DELETE_AND_ADD), this._markDirty(TT)
        } else {
          const IT = this.collDirty,
            iT = IT.get(TT);
          let kT;
          kT = void 0 === iT ? oT : iT === zT.DELETE || iT === zT.ADD && oT === zT.DELETE_AND_ADD ? zT.DELETE_AND_ADD : iT, IT.set(TT, kT)
        }
      }
      recordDelete(TT, oT) {
        this._isSchema ? (this._opPut(TT, oT), this._markDirty(TT)) : this.collDirty.set(TT, oT)
      }
      recordRaw(TT, oT) {
        this._isSchema ? (this._opPut(TT, oT), this._markDirty(TT)) : this.collDirty.set(TT, oT)
      }
      recordPure(TT) {
        if (this._isSchema) throw new Error("ChangeTree (Schema): pure operations are not supported");
        (this.collPureOps ??= []).push([this.collDirty.size, TT])
      }
      operationAt(TT) {
        if (this._isSchema) {
          const oT = this._opAt(TT);
          return 0 === oT ? void 0 : oT
        }
        return this.collDirty.get(TT)
      }
      setOperationAt(TT, oT) {
        if (this._isSchema) this._opPut(TT, oT);
        else {
          const IT = this.collDirty;
          IT.has(TT) && IT.set(TT, oT)
        }
      }
      forEach(TT) {
        this.forEachWithCtx(TT, uI)
      }
      forEachWithCtx(TT, oT) {
        if (this._isSchema) {
          let IT = this.dirtyLow,
            iT = this.dirtyHigh;
          const zT = this.ops;
          if (void 0 !== zT) {
            for (; 0 !== IT;) {
              const iT = IT & -IT,
                kT = 31 - Math.clz32(iT);
              IT ^= iT, oT(TT, kT, zT[kT])
            }
            for (; 0 !== iT;) {
              const IT = iT & -iT,
                kT = 31 - Math.clz32(IT) + 32;
              iT ^= IT, oT(TT, kT, zT[kT])
            }
          } else {
            const iT = this.opsLow,
              zT = this.opsHigh;
            for (; 0 !== IT;) {
              const kT = IT & -IT,
                WT = 31 - Math.clz32(kT);
              IT ^= kT, oT(TT, WT, RI(iT, zT, WT))
            }
          }
          return
        }
        const IT = this.collDirty,
          iT = this.collPureOps;
        if (void 0 !== iT && iT.length > 0) {
          let zT = 0,
            kT = 0;
          for (const [WT, XT] of IT) {
            for (; zT < iT.length && iT[zT][0] <= kT;) {
              const IT = iT[zT++][1];
              oT(TT, -IT, IT)
            }
            oT(TT, WT, XT), kT++
          }
          for (; zT < iT.length;) {
            const IT = iT[zT++][1];
            oT(TT, -IT, IT)
          }
        } else
          for (const [zT, kT] of IT) oT(TT, zT, kT)
      }
      size() {
        return this._isSchema ? TI(this.dirtyLow) + TI(this.dirtyHigh) : this.collDirty.size + (this.collPureOps?.length ?? 0)
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
      insertAt(TT, oT) {
        if (this._isSchema) throw new Error("ChangeTree (Schema): insertAt is not supported");
        const IT = this.collDirty,
          iT = new Map,
          kT = !this.paused && !this.isFullStateOnly;
        if (TT > 0)
          for (const [zT, WT] of IT) zT < TT && iT.set(zT, WT);
        if (kT)
          for (let WT = 0; WT < oT; WT++) iT.set(TT + WT, zT.ADD);
        for (const [zT, WT] of IT) zT >= TT && iT.set(zT + oT, WT);
        this.collDirty = iT, kT && this.root?.enqueueChangeTree(this)
      }
      removeAt(TT, oT) {
        if (this._isSchema) throw new Error("ChangeTree (Schema): removeAt is not supported");
        const IT = this.collDirty,
          iT = TT + oT;
        let zT = !1;
        for (const WT of IT.keys())
          if (WT >= iT) {
            zT = !0;
            break
          } if (!zT) {
          for (let oT = TT; oT < iT; oT++) IT.delete(oT);
          return
        }
        const kT = new Map;
        for (const [WT, XT] of IT) WT < TT ? kT.set(WT, XT) : WT >= iT && kT.set(WT - oT, XT);
        this.collDirty = kT
      }
      unshift(TT) {
        this.insertAt(0, TT)
      }
      setRoot(TT) {
        ! function(TT, oT) {
          TT.root = oT;
          const IT = oT.add(TT);
          XI(TT, TT.parent, TT.parentIndex), IT && gI(TT, oT, hI)
        }(this, TT)
      }
      setParent(TT, oT, IT) {
        rI(this, TT, oT, IT)
      }
      forEachChild(TT) {
        gI(this, TT, AI)
      }
      forEachChildWithCtx(TT, oT) {
        gI(this, TT, oT)
      }
      forEachLive(TT) {
        WI(this, TT, kI)
      }
      forEachLiveWithCtx(TT, oT) {
        WI(this, TT, oT)
      }
      operation(TT) {
        this.paused || this.isFullStateOnly || (this.recordPure(TT), this.root?.enqueueChangeTree(this))
      }
      _routeAndRecord(TT, oT, IT) {
        if (!this.paused && !this.isFieldFullStateOnly(TT)) {
          if (this.isFieldUnreliable(TT) && !this.isNew) {
            const iT = this.ensureUnreliableRecorder();
            return IT ? iT.recordRaw(TT, oT) : iT.record(TT, oT), void this.root?.enqueueUnreliable(this)
          }
          IT ? this.recordRaw(TT, oT) : this.record(TT, oT), this.root?.enqueueChangeTree(this)
        }
      }
      change(TT) {
        let oT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : zT.ADD;
        this._routeAndRecord(TT, oT, !1)
      }
      indexedOperation(TT, oT) {
        this._routeAndRecord(TT, oT, !0)
      }
      getChange(TT) {
        return this.operationAt(TT)
      }
      pause() {
        this.paused = !0
      }
      resume() {
        this.paused = !1
      }
      untracked(TT) {
        const oT = this.paused;
        this.paused = !0;
        try {
          return TT()
        } finally {
          this.paused = oT
        }
      }
      markDirty(TT) {
        let oT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : zT.ADD;
        const IT = this.paused;
        this.paused = !1;
        try {
          this.change(TT, oT)
        } finally {
          this.paused = IT
        }
      }
      getValue(TT) {
        let oT = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return this.refTarget[LT](TT, oT)
      }
      delete(TT, oT) {
        if (void 0 === TT) {
          try {
            throw new Error(`@colyseus/schema ${this.ref.constructor.name}: trying to delete non-existing index '${TT}'`)
          } catch (Fz) {
            console.warn(Fz)
          }
          return
        }
        if (this.paused || this.isFieldFullStateOnly(TT)) return this.getValue(TT);
        const IT = this.isFieldUnreliable(TT) && !this.isNew;
        IT ? this.ensureUnreliableRecorder().recordDelete(TT, oT ?? zT.DELETE) : this.recordDelete(TT, oT ?? zT.DELETE);
        const iT = this.getValue(TT);
        return iT && iT[KT] && this.root?.remove(iT[KT]), IT ? this.root?.enqueueUnreliable(this) : this.root?.enqueueChangeTree(this), iT
      }
      endEncode() {
        this.reset(), this.changesNode = void 0, this._isSchema || this.refTarget[AT]?.(), this.isNew = !1
      }
      endEncodeUnreliable() {
        this.unreliableRecorder?.reset(), this.unreliableChangesNode = void 0, this._isSchema || this.refTarget[AT]?.()
      }
      discard() {
        this._isSchema || this.refTarget[AT]?.(), this.reset(), this.unreliableRecorder?.reset()
      }
      discardAll() {
        const TT = TT => {
          if (TT < 0) return;
          const oT = this.getValue(TT);
          oT && oT[KT] && oT[KT].discardAll()
        };
        this.forEach(TT), this.unreliableRecorder?.forEach(TT), this.discard()
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
      addParent(TT, oT) {
        ! function(TT, oT, IT) {
          if (TT.parentRef) {
            if (TT.parentRef[KT] === oT[KT]) return void(TT._parentIndex = IT);
            if (iI(TT, ((TT, IT) => TT[KT] === oT[KT]))) return void(TT._parentIndex = IT)
          }
          void 0 === TT.parentRef ? (TT.parentRef = oT, TT._parentIndex = IT) : (TT.extraParents = {
            ref: TT.parentRef,
            index: TT._parentIndex,
            next: TT.extraParents
          }, TT.parentRef = oT, TT._parentIndex = IT)
        }(this, TT, oT)
      }
      setParentIndex(TT, oT) {
        ! function(TT, oT, IT) {
          if (void 0 !== TT.extraParents)
            if (TT.parentRef[KT] !== oT[KT]) {
              for (let iT = TT.extraParents; void 0 !== iT; iT = iT.next)
                if (iT.ref[KT] === oT[KT]) return void(iT.index = IT)
            } else TT._parentIndex = IT;
          else TT._parentIndex = IT
        }(this, TT, oT)
      }
      removeParent() {
        return function(TT, oT) {
          if (TT.parentRef && TT.parentRef[KT] === oT[KT]) return TT.extraParents ? (TT.parentRef = TT.extraParents.ref, TT._parentIndex = TT.extraParents.index, TT.extraParents = TT.extraParents.next) : (TT.parentRef = void 0, TT._parentIndex = void 0), !0;
          let IT = TT.extraParents,
            iT = null;
          for (; IT;) {
            if (IT.ref[KT] === oT[KT]) return iT ? iT.next = IT.next : TT.extraParents = IT.next, !0;
            iT = IT, IT = IT.next
          }
          return void 0 === TT.parentRef
        }(this, arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.parent)
      }
      findParent(TT) {
        return function(TT, oT) {
          if (void 0 !== TT.parentRef && oT(TT.parentRef, TT._parentIndex)) return {
            ref: TT.parentRef,
            index: TT._parentIndex
          };
          for (let IT = TT.extraParents; void 0 !== IT; IT = IT.next)
            if (oT(IT.ref, IT.index)) return {
              ref: IT.ref,
              index: IT.index
            }
        }(this, TT)
      }
      hasParent(TT) {
        return iI(this, TT)
      }
      indexInParent(TT) {
        return function(TT, oT) {
          if (TT.parentRef && TT.parentRef[KT] === oT[KT]) return TT._parentIndex;
          for (let IT = TT.extraParents; void 0 !== IT; IT = IT.next)
            if (IT.ref[KT] === oT[KT]) return IT.index
        }(this, TT)
      }
      getAllParents() {
        return function(TT) {
          const oT = [];
          TT.parentRef && oT.push({
            ref: TT.parentRef,
            index: TT._parentIndex
          });
          let IT = TT.extraParents;
          for (; IT;) oT.push({
            ref: IT.ref,
            index: IT.index
          }), IT = IT.next;
          return oT
        }(this)
      }
    }
    class UI {
      ref;
      root = void 0;
      parentRef = void 0;
      paused = !1;
      isNew = !1;
      flags = 0;
      constructor(TT) {
        this.ref = TT
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
      untracked(TT) {
        return TT()
      }
      markDirty() {}
      forEachChild(TT) {
        const oT = this.ref;
        if (oT[MT]) {
          if ("string" !== typeof oT[MT])
            for (const [IT, iT] of oT.entries()) iT && TT(iT[KT], oT._collectionIndexes?.[IT] ?? IT);
          return
        }
        const IT = oT.constructor,
          iT = IT?.[Symbol.metadata];
        if (!iT) return;
        const zT = iT[ET] ?? [];
        for (let kT = 0; kT < zT.length; kT++) {
          const IT = zT[kT],
            WT = oT[iT[IT].name];
          WT && TT(WT[KT], IT)
        }
      }
      forEachChildWithCtx(TT, oT) {
        this.forEachChild(((IT, iT) => oT(TT, IT, iT)))
      }
      forEachLive() {}
      forEachLiveWithCtx() {}
      forEach() {}
    }

    function aI(TT) {
      let oT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : TT;
      var IT;
      Object.defineProperty(TT, KT, {
        value: (IT = oT, new UI(IT)),
        enumerable: !1,
        writable: !0
      })
    }

    function YI(TT, oT, IT, iT, kT, WT, BT) {
      void 0 !== BT ? BT(oT, iT, WT) : "string" === typeof IT ? oo[IT]?.(oT, iT, WT) : null != IT[Symbol.metadata] ? (oo.number(oT, iT[XT], WT), (kT & zT.ADD) === zT.ADD && TT.tryEncodeTypeId(oT, IT, iT.constructor, WT)) : oo.number(oT, iT[XT], WT)
    }
    const QI = function(TT, oT, IT, iT, kT, WT, XT, BT) {
        if (oT[WT.offset++] = 255 & (iT | kT), kT === zT.DELETE) return;
        const FT = IT.encDescriptor,
          ST = IT.ref,
          DT = ST[wT][iT] ?? ST[FT.names[iT]];
        YI(TT, oT, FT.types[iT], DT, kT, WT, FT.encoders[iT])
      },
      OI = function(TT, oT, IT, iT, kT, WT) {
        if (oT[WT.offset++] = 255 & kT, oo.number(oT, iT, WT), kT === zT.DELETE) return;
        const XT = IT.ref;
        if ((kT & zT.ADD) === zT.ADD) {
          const TT = XT.$indexes.get(iT);
          oo.string(oT, TT, WT)
        }
        YI(TT, oT, XT[MT], XT[LT](iT), kT, WT)
      },
      HI = function(TT, oT, IT, iT, kT, WT) {
        if (oT[WT.offset++] = 255 & kT, oo.number(oT, iT, WT), kT === zT.DELETE) return;
        const XT = IT.ref;
        YI(TT, oT, XT[MT], XT[LT](iT), kT, WT)
      },
      nI = function(TT, oT, IT, iT, kT, WT) {
        const XT = IT.ref;
        (kT & zT.ADD) === zT.ADD && "function" === typeof XT.set ? OI(TT, oT, IT, iT, kT, WT) : HI(TT, oT, IT, iT, kT, WT)
      },
      qI = function(TT, oT, IT, iT, kT, WT, BT, FT) {
        const ST = IT.refTarget,
          DT = ST[MT],
          xT = "string" !== typeof DT;
        let cT;
        if (FT && IT.isFiltered && xT) {
          const TT = ST.tmpItems[iT];
          if (!TT) return;
          if (cT = TT[XT], kT === zT.DELETE) kT = zT.DELETE_BY_REFID;
          else if ((kT & zT.ADD) === zT.ADD) kT = zT.ADD_BY_REFID;
          else if ((kT & zT.MOVE) === zT.MOVE) return
        } else if (kT === zT.DELETE && xT) {
          const TT = ST.tmpItems[iT];
          if (!TT) return;
          cT = TT[XT], kT = zT.DELETE_BY_REFID
        } else cT = iT;
        if (oT[WT.offset++] = 255 & kT, oo.number(oT, cT, WT), kT === zT.DELETE || kT === zT.DELETE_BY_REFID) return;
        YI(TT, oT, DT, ST[LT](iT, BT), kT, WT)
      };

    function ZI(TT, oT, IT, iT, kT, WT, BT) {
      const FT = TT.resyncVisited;
      let ST = FT.get(TT.currentRefId);
      if (void 0 === ST && FT.set(TT.currentRefId, ST = new Set), ST.add(iT), void 0 !== kT && IT === zT.ADD && kT !== WT) {
        const IT = kT[XT];
        void 0 !== IT && (TT.root.removeRef(IT), BT?.push({
          ref: oT,
          refId: TT.currentRefId,
          op: zT.DELETE,
          dynamicIndex: iT,
          value: void 0,
          previousValue: kT
        }))
      }
    }

    function lI(TT, oT, IT, iT) {
      const zT = oT[XT];
      if (void 0 === zT || IT.has(zT)) return;
      IT.add(zT);
      const kT = oT.constructor[Symbol.metadata],
        WT = kT?.[ET];
      if (void 0 === WT) return;
      const BT = kT[JT];
      for (let XT = 0; XT < WT.length; XT++) {
        const zT = WT[XT];
        if (void 0 !== BT && BT.includes(zT)) continue;
        const FT = kT[zT],
          ST = oT[FT.name];
        ST && (Ji.is(FT.type) ? lI(TT, ST, IT, iT) : sI(TT, ST, IT, iT))
      }
    }

    function sI(TT, oT, IT, iT) {
      const kT = oT[rT] ?? oT,
        WT = kT[XT];
      if (void 0 === WT || IT.has(WT)) return;
      IT.add(WT);
      const BT = TT.resyncVisited.get(WT);
      if (void 0 === BT) return;
      const FT = TT.root;
      kT[cT](BT, ((TT, IT) => {
        iT?.push({
          ref: oT,
          refId: WT,
          op: zT.DELETE,
          dynamicIndex: IT,
          value: void 0,
          previousValue: TT
        });
        const kT = TT?.[XT];
        void 0 !== kT && FT.removeRef(kT)
      }), (oT => {
        Ji.isSchema(oT) && lI(TT, oT, IT, iT)
      }))
    }
    const tI = 1,
      GI = 2,
      pI = 3,
      bI = 4,
      yI = 5;

    function NI(TT, oT, IT, iT, kT, WT, BT, FT, ST) {
      const DT = TT.root;
      let LT;
      if ((oT & zT.DELETE) === zT.DELETE) {
        const TT = kT?.[XT];
        void 0 !== TT && DT.removeRef(TT), oT !== zT.DELETE_AND_ADD && IT[xT](iT), LT = void 0
      }
      if (oT === zT.DELETE);
      else if ("string" === typeof WT) LT = go[WT](BT, FT);
      else if (Qo(WT)) LT = function(TT, oT, IT) {
        return Ho(TT, (0, go[TT.wire])(oT, IT))
      }(WT.quantized, BT, FT);
      else if (Ji.is(WT)) {
        const IT = go.number(BT, FT);
        if (LT = DT.refs.get(IT), (oT & zT.ADD) === zT.ADD) {
          const iT = TT.getInstanceType(BT, FT, WT);
          LT || (LT = TT.createInstanceOfType(iT)), DT.addRef(IT, LT, LT !== kT || oT === zT.DELETE_AND_ADD && LT === kT)
        }
      } else {
        const IT = (cT = Object.keys(WT)[0], ho[cT]),
          iT = go.number(BT, FT);
        null !== TT.resyncVisited && function(TT, oT) {
          const IT = TT.resyncVisited;
          IT.has(oT) || IT.set(oT, new Set)
        }(TT, iT);
        const xT = DT.refs.has(iT) ? kT || DT.refs.get(iT) : IT.constructor.initializeForDecoder();
        if (LT = xT.clone(!0), LT[MT] = Object.values(WT)[0], kT) {
          let TT = kT[XT];
          if (void 0 !== TT && iT !== TT) {
            (oT & zT.DELETE) !== zT.DELETE && DT.removeRef(TT);
            const IT = kT.entries();
            let iT;
            for (;
              (iT = IT.next()) && !iT.done;) {
              const [oT, IT] = iT.value;
              "object" === typeof IT && (TT = IT[XT]), ST?.push({
                ref: kT,
                refId: TT,
                op: zT.DELETE,
                field: oT,
                value: void 0,
                previousValue: IT
              })
            }
          }
        }
        DT.addRef(iT, LT, xT !== kT || oT === zT.DELETE_AND_ADD && xT === kT)
      }
      var cT;
      return LT
    }
    const PI = function(TT, oT, IT, iT, zT) {
        const kT = oT[IT.offset++],
          WT = iT.constructor[Symbol.metadata],
          XT = kT >> 6 << 6,
          BT = kT % (XT || 255),
          FT = WT[BT];
        if (void 0 === FT) return console.warn("@colyseus/schema: field not defined at", {
          index: BT,
          ref: iT.constructor.name,
          metadata: WT
        }), -1;
        const ST = !0 === FT.deprecated,
          DT = ST ? void 0 : iT[LT](BT),
          xT = NI(TT, XT, iT, BT, DT, FT.type, oT, IT, zT);
        ST || (null !== xT && void 0 !== xT && (iT[FT.name] = xT), DT !== xT && zT?.push({
          ref: iT,
          refId: TT.currentRefId,
          op: XT,
          field: FT.name,
          value: xT,
          previousValue: DT
        }))
      },
      dI = function(TT, oT, IT, iT, kT) {
        const WT = iT[rT] ?? iT,
          XT = oT[IT.offset++];
        if (XT === zT.CLEAR) return TT.removeChildRefs(WT, kT), void WT.clear();
        const BT = go.number(oT, IT),
          FT = WT[MT],
          ST = WT.constructor.COLLECTION_KIND;
        let DT;
        (XT & zT.ADD) === zT.ADD ? ST === tI ? (DT = go.string(oT, IT), WT.setIndex(BT, DT)) : DT = BT : DT = WT.getIndex(BT);
        const xT = WT[LT](BT),
          cT = NI(TT, XT, iT, BT, xT, FT, oT, IT, kT);
        if (null !== TT.resyncVisited && ZI(TT, iT, XT, DT, xT, cT, kT), null !== cT && void 0 !== cT) switch (ST) {
          case tI:
            WT.$items.set(DT, cT);
            break;
          case GI:
            WT.$setAt(BT, cT, null !== TT.resyncVisited && XT === zT.ADD ? zT.REPLACE : XT);
            break;
          case pI:
          case bI:
          case yI:
            WT.$items.has(BT) || (WT.$items.set(BT, cT), "number" === typeof WT.$refId && BT >= WT.$refId && (WT.$refId = BT + 1));
            break;
          default:
            console.warn(`@colyseus/schema: missing COLLECTION_KIND on ${WT.constructor?.name} \u2014 item at index ${BT} was not stored.`)
        }
        xT !== cT && kT?.push({
          ref: iT,
          refId: TT.currentRefId,
          op: XT,
          dynamicIndex: DT,
          value: cT,
          previousValue: xT
        })
      },
      VI = function(TT, oT, IT, iT, kT) {
        const WT = iT[rT] ?? iT;
        let XT, BT = oT[IT.offset++];
        if (BT === zT.CLEAR) return TT.removeChildRefs(WT, kT), void WT.clear();
        if (BT === zT.REVERSE) return void WT.items.reverse();
        if (BT === zT.DELETE_BY_REFID) {
          const BT = go.number(oT, IT),
            FT = TT.root.refs.get(BT);
          if (void 0 === FT) return;
          if (TT.root.removeRef(BT), XT = WT.findIndex((TT => TT === FT)), -1 === XT) return;
          return WT[xT](XT), void kT?.push({
            ref: iT,
            refId: TT.currentRefId,
            op: zT.DELETE,
            dynamicIndex: XT,
            value: void 0,
            previousValue: FT
          })
        }
        if (BT === zT.ADD_BY_REFID) {
          const iT = go.number(oT, IT),
            zT = TT.root.refs.get(iT);
          zT && (XT = WT.findIndex((TT => TT === zT))), -1 !== XT && void 0 !== XT || (XT = WT.length)
        } else XT = go.number(oT, IT);
        const FT = WT[MT];
        let ST = XT;
        const DT = WT.items[XT],
          LT = NI(TT, BT, iT, XT, DT, FT, oT, IT, kT);
        null !== TT.resyncVisited && ZI(TT, iT, BT, XT, DT, LT, kT), null !== LT && void 0 !== LT && LT !== DT && WT.$setAt(XT, LT, null !== TT.resyncVisited && BT === zT.ADD ? zT.REPLACE : BT), DT !== LT && kT?.push({
          ref: iT,
          refId: TT.currentRefId,
          op: BT,
          dynamicIndex: ST,
          value: LT,
          previousValue: DT
        })
      };
    class Ti extends Error {}

    function oi(TT, oT, IT, iT) {
      if (!(TT instanceof oT)) throw new Ti(`a '${oT.name}' was expected, but '${TT&&TT.constructor.name}' was provided in ${IT.constructor.name}#${iT}`)
    }
    const Ii = (TT, oT) => {
        const IT = TT.toString(),
          iT = oT.toString();
        return IT < iT ? -1 : IT > iT ? 1 : 0
      },
      ii = {
        get: (TT, oT) => "symbol" === typeof oT || isNaN(oT) ? Reflect.get(TT, oT) : TT.items[oT],
        set: (TT, oT, IT) => {
          if ("symbol" !== typeof oT && !isNaN(oT)) {
            if (void 0 === IT || null === IT) TT.$deleteAt(oT);
            else {
              let iT;
              if (IT[KT]) {
                oi(IT, TT[MT], TT, oT);
                const kT = TT.items[oT];
                TT.isMovingItems ? (iT = TT.$wireIndex(Number(oT)), void 0 !== kT ? IT[KT].isNew ? TT[KT].indexedOperation(iT, zT.MOVE_AND_ADD) : (TT[KT].getChange(iT) & zT.DELETE) === zT.DELETE ? TT[KT].indexedOperation(iT, zT.DELETE_AND_MOVE) : TT[KT].indexedOperation(iT, zT.MOVE) : IT[KT].isNew && TT[KT].indexedOperation(iT, zT.ADD), IT[KT].setParent(TT, TT[KT].root, iT)) : iT = TT.$changeAt(Number(oT), IT), void 0 !== kT && kT[KT].root?.remove(kT[KT])
              } else iT = TT.$changeAt(Number(oT), IT);
              TT.items[oT] = IT, void 0 !== iT && (TT.tmpItems[iT] = IT)
            }
            return !0
          }
          return Reflect.set(TT, oT, IT)
        },
        deleteProperty: (TT, oT) => ("number" === typeof oT ? TT.$deleteAt(oT) : delete TT[oT], !0),
        has: (TT, oT) => "symbol" === typeof oT || isNaN(Number(oT)) ? Reflect.has(TT, oT) : Reflect.has(TT.items, oT)
      };
    class zi {
      [KT];
      [XT];
      [rT];
      [MT];
      items = [];
      tmpItems = [];
      deletedIndexes = [];
      isMovingItems = !1;
      _needsCompaction = !1;
      static[FT] = qI;
      static[ST] = VI;
      static COLLECTION_KIND = GI;
      static[DT](TT, oT, IT) {
        if (!IT) return !0;
        const iT = TT[rT] ?? TT;
        return "string" === typeof iT[MT] || IT.isChangeTreeVisible(iT.tmpItems[oT]?.[KT])
      }
      static is(TT) {
        return Array.isArray(TT) || void 0 !== TT.array
      }
      static from(TT) {
        return new zi(...Array.from(TT))
      }
      constructor() {
        this[MT] = void 0, this[rT] = this;
        const TT = new Proxy(this, ii);
        return Object.defineProperty(this, KT, {
          value: new JI(TT, this),
          enumerable: !1,
          writable: !0
        }), arguments.length > 0 && this.push(...arguments), TT
      }
      static initializeForDecoder() {
        const TT = Object.create(zi.prototype);
        TT.items = [], TT.isMovingItems = !1, TT._needsCompaction = !1, TT[MT] = void 0, TT[rT] = TT;
        const oT = new Proxy(TT, ii);
        return aI(TT, oT), oT
      }
      set length(TT) {
        0 === TT ? this.clear() : TT < this.items.length ? this.splice(TT, this.length - TT) : console.warn("ArraySchema: can't set .length to a higher value than its length.")
      }
      get length() {
        return this.items.length
      }
      pauseTracking() {
        this[KT].pause()
      }
      resumeTracking() {
        this[KT].resume()
      }
      untracked(TT) {
        return this[KT].untracked(TT)
      }
      get isTrackingPaused() {
        return this[KT].paused
      }
      push() {
        const TT = this[rT],
          oT = TT.items,
          IT = TT.tmpItems,
          iT = TT[KT],
          kT = TT[MT];
        let WT = IT.length;
        for (let XT = 0, BT = arguments.length; XT < BT; XT++, WT++) {
          const BT = XT < 0 || arguments.length <= XT ? void 0 : arguments[XT];
          if (void 0 === BT || null === BT) return;
          "object" === typeof BT && kT && oi(BT, kT, TT, XT), iT.indexedOperation(WT, zT.ADD), oT.push(BT), IT.push(BT), BT[KT]?.setParent(this, iT.root, WT)
        }
        return WT
      }
      pop() {
        const TT = this[rT],
          oT = TT.tmpItems,
          IT = TT.deletedIndexes;
        let iT = -1;
        for (let kT = oT.length - 1; kT >= 0; kT--)
          if (!0 !== IT[kT]) {
            iT = kT;
            break
          } if (iT < 0) return;
        const zT = TT.$isUnsentAdd(iT);
        return TT[KT].delete(iT), zT ? TT.$cancelAdd(iT) : IT[iT] = !0, TT.items.pop()
      }
      at(TT) {
        return TT < 0 && (TT += this.length), this.items[TT]
      }
      $wireIndex(TT) {
        const oT = this.deletedIndexes;
        if (0 === oT.length) return TT;
        const IT = this.tmpItems;
        let iT = 0;
        for (let zT = 0; zT < IT.length; zT++)
          if (!0 !== oT[zT]) {
            if (iT === TT) return zT;
            iT++
          } return IT.length + (TT - iT)
      }
      $isUnsentAdd(TT) {
        const oT = this[KT];
        return 0 === (576 & oT.flags) && !oT.paused && "string" !== typeof this[MT] && oT.operationAt(TT) === zT.ADD
      }
      $cancelAdd(TT) {
        let oT = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        const IT = this[KT],
          iT = this.tmpItems[TT];
        this.tmpItems.splice(TT, 1), this.deletedIndexes.length > 0 && this.deletedIndexes.splice(TT, 1), IT.removeAt(TT, 1);
        const zT = iT?.[KT];
        void 0 !== zT && void 0 === zT.root && zT.removeParent(this), oT && this.$reindexChildren(TT)
      }
      $reindexChildren(TT, oT) {
        if (!this[KT].hasFilteredFields) return;
        if ("string" === typeof this[MT]) return;
        const IT = this.tmpItems,
          iT = IT.length;
        if (void 0 !== oT)
          for (; TT < iT && IT[TT] === oT[TT];) TT++;
        for (let zT = TT; zT < iT; zT++) IT[zT]?.[KT]?.setParentIndex(this, zT)
      }
      $changeAt(TT, oT) {
        if (void 0 === oT || null === oT) return void console.error("ArraySchema items cannot be null nor undefined; Use `splice(index, 1)` instead.");
        if (this.items[TT] === oT) return;
        const IT = void 0 !== this.items[TT] ? "object" === typeof oT ? zT.DELETE_AND_ADD : zT.REPLACE : zT.ADD,
          iT = this.$wireIndex(TT),
          kT = this[KT];
        return kT.change(iT, IT), oT[KT]?.setParent(this, kT.root, iT), iT
      }
      $deleteAt(TT, oT) {
        this[KT].delete(this.$wireIndex(TT), oT)
      }
      $setAt(TT, oT, IT) {
        IT === zT.ADD && void 0 !== this.items[TT] ? this.items.splice(TT, 0, oT) : IT === zT.DELETE_AND_MOVE ? (this.items.splice(TT, 1), this.items[TT] = oT) : (TT > this.items.length && (this._needsCompaction = !0), this.items[TT] = oT)
      }
      clear() {
        const TT = this[rT];
        if (0 === TT.items.length) return;
        const oT = TT[KT];
        oT.forEachChild(((TT, IT) => {
          oT.root?.remove(TT)
        })), oT.discard(), oT.operation(zT.CLEAR), TT.items.length = 0, TT.tmpItems.length = 0
      } [gT]() {
        const TT = this[rT] ?? this,
          oT = TT[KT];
        if (oT.isStreamCollection) throw new Error("@colyseus/schema: cannot reset a streamed ArraySchema (pooling not supported).");
        const IT = TT.items;
        for (let iT = 0; iT < IT.length; iT++) IT[iT]?.[gT]?.();
        TT.items.length = 0, TT.tmpItems.length = 0, TT.deletedIndexes.length = 0, oT.recycle(), TT[XT] = void 0
      }
      concat() {
        return new zi(...this.items.concat(...arguments))
      }
      join(TT) {
        return this.items.join(TT)
      }
      reverse() {
        const TT = this[rT],
          oT = TT[KT];
        if (oT.has() || TT.deletedIndexes.length > 0) {
          const oT = TT.items.slice().reverse();
          return this.clear(), this.push(...oT), this
        }
        return oT.operation(zT.REVERSE), TT.items.reverse(), TT.tmpItems.reverse(), TT.$reindexChildren(0), this
      }
      shift() {
        const TT = this[rT],
          oT = TT.items;
        if (0 === oT.length) return;
        const IT = TT[KT],
          iT = TT.deletedIndexes;
        let kT = 0;
        for (; !0 === iT[kT];) kT++;
        const WT = TT.$isUnsentAdd(kT);
        return IT.delete(kT, zT.DELETE), WT ? TT.$cancelAdd(kT) : iT[kT] = !0, oT.shift()
      }
      slice(TT, oT) {
        const IT = new zi;
        return IT.push(...this.items.slice(TT, oT)), IT
      }
      sort() {
        let TT = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Ii;
        const oT = this[rT];
        oT.isMovingItems = !0;
        const IT = oT[KT];
        return oT.items.sort(TT).forEach(((TT, oT) => IT.change(oT, zT.REPLACE))), oT.tmpItems.sort(TT), oT.$reindexChildren(0), oT.isMovingItems = !1, this
      }
      splice(TT, oT) {
        const IT = this[rT],
          iT = IT[KT],
          kT = IT.items,
          WT = IT.tmpItems,
          XT = IT.deletedIndexes,
          BT = kT.length,
          FT = WT.length;
        for (var ST = arguments.length, DT = new Array(ST > 2 ? ST - 2 : 0), LT = 2; LT < ST; LT++) DT[LT - 2] = arguments[LT];
        const xT = DT.length,
          cT = [];
        for (let zT = 0; zT < FT; zT++) !0 !== XT[zT] && cT.push(zT);
        let MT;
        if (BT > TT) {
          void 0 === oT && (oT = BT - TT);
          for (let kT = TT; kT < TT + oT; kT++) {
            const TT = cT[kT],
              oT = IT.$isUnsentAdd(TT);
            iT.delete(TT, zT.DELETE), oT ? (MT ??= []).push(TT) : XT[TT] = !0
          }
        } else oT = 0;
        if (xT > 0) {
          const kT = cT[TT] ?? BT,
            FT = Math.min(xT, oT);
          for (let TT = 0; TT < FT; TT++) {
            const oT = kT + TT;
            let IT;
            const BT = void 0 !== MT ? MT.indexOf(oT) : -1; - 1 !== BT ? (MT.splice(BT, 1), IT = zT.ADD) : IT = XT[oT] ? zT.DELETE_AND_ADD : zT.ADD, iT.indexedOperation(oT, IT), WT[oT] = DT[TT], XT[oT] = !1, DT[TT][KT]?.setParent(this, iT.root, oT)
          }
          const ST = xT - FT;
          if (ST > 0) {
            const TT = kT + FT;
            iT.insertAt(TT, ST);
            for (let oT = 0; oT < ST; oT++) DT[FT + oT][KT]?.setParent(this, iT.root, TT + oT);
            XT.length > 0 && XT.splice(TT, 0, ...new Array(ST).fill(!1)), WT.splice(TT, 0, ...DT.slice(FT)), IT.$reindexChildren(TT + ST)
          }
        }
        if (void 0 !== MT && MT.length > 0) {
          for (let TT = MT.length - 1; TT >= 0; TT--) IT.$cancelAdd(MT[TT], !1);
          IT.$reindexChildren(MT[0])
        }
        return iT.root?.enqueueChangeTree(iT), kT.splice(TT, oT, ...DT)
      }
      unshift() {
        const TT = this[rT],
          oT = TT[KT];
        oT.unshift(arguments.length);
        for (let iT = 0; iT < arguments.length; iT++)(iT < 0 || arguments.length <= iT ? void 0 : arguments[iT])?.[KT]?.setParent(this, oT.root, iT);
        const IT = TT.deletedIndexes;
        return IT.length > 0 && IT.unshift(...new Array(arguments.length).fill(!1)), TT.tmpItems.unshift(...arguments), TT.$reindexChildren(arguments.length), TT.items.unshift(...arguments)
      }
      indexOf(TT, oT) {
        return this.items.indexOf(TT, oT)
      }
      lastIndexOf(TT) {
        let oT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.length - 1;
        return this.items.lastIndexOf(TT, oT)
      }
      every(TT, oT) {
        return this.items.every(TT, oT)
      }
      some(TT, oT) {
        return this.items.some(TT, oT)
      }
      forEach(TT, oT) {
        return this.items.forEach(TT, oT)
      }
      map(TT, oT) {
        return this.items.map(TT, oT)
      }
      filter(TT, oT) {
        return this.items.filter(TT, oT)
      }
      reduce(TT, oT) {
        return this.items.reduce.apply(this.items, arguments)
      }
      reduceRight(TT, oT) {
        return this.items.reduceRight.apply(this.items, arguments)
      }
      find(TT, oT) {
        return this.items.find(TT, oT)
      }
      findIndex(TT, oT) {
        return this.items.findIndex(TT, oT)
      }
      fill(TT, oT, IT) {
        throw new Error("ArraySchema#fill() not implemented")
      }
      copyWithin(TT, oT, IT) {
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
        return zi
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
      includes(TT, oT) {
        return this.items.includes(TT, oT)
      }
      flatMap(TT, oT) {
        throw new Error("ArraySchema#flatMap() is not supported.")
      }
      flat(TT) {
        throw new Error("ArraySchema#flat() is not supported.")
      }
      findLast() {
        return this.items.findLast.apply(this.items, arguments)
      }
      findLastIndex() {
        for (var TT = arguments.length, oT = new Array(TT), IT = 0; IT < TT; IT++) oT[IT] = arguments[IT];
        return this.items.findLastIndex.apply(this.items, arguments)
      }
      with(TT, oT) {
        const IT = this.items.slice();
        return TT < 0 && (TT += this.length), IT[TT] = oT, new zi(...IT)
      }
      toReversed() {
        return this.items.slice().reverse()
      }
      toSorted(TT) {
        return this.items.slice().sort(TT)
      }
      toSpliced(TT, oT) {
        for (var IT = arguments.length, iT = new Array(IT > 2 ? IT - 2 : 0), zT = 2; zT < IT; zT++) iT[zT - 2] = arguments[zT];
        const kT = this.items.slice();
        return kT.splice.apply(kT, arguments), kT
      }
      shuffle() {
        return this.move((TT => {
          let oT = this.items.length;
          for (; 0 != oT;) {
            let TT = Math.floor(Math.random() * oT);
            oT--, [this[oT], this[TT]] = [this[TT], this[oT]]
          }
        }))
      }
      move(TT) {
        return this.isMovingItems = !0, TT(this), this.isMovingItems = !1, this
      } [LT](TT) {
        let oT = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        const IT = this[rT] ?? this;
        return oT || IT.deletedIndexes[TT] ? IT.items[TT] : IT.tmpItems[TT] || IT.items[TT]
      } [xT](TT) {
        const oT = this[rT] ?? this;
        oT.items[TT] = void 0, oT._needsCompaction = !0
      } [AT]() {
        const TT = this.tmpItems;
        this.tmpItems = this.items.slice(), this.deletedIndexes.length > 0 && (this.$reindexChildren(0, TT), this.deletedIndexes.length = 0)
      } [hT]() {
        const TT = this[rT] ?? this;
        TT._needsCompaction && (TT._needsCompaction = !1, TT.items = TT.items.filter((TT => void 0 !== TT)))
      } [cT](TT, oT, IT) {
        const iT = this[rT] ?? this,
          zT = iT.items;
        let kT = !1;
        for (let WT = 0; WT < zT.length; WT++) {
          const XT = zT[WT];
          TT.has(WT) ? IT(XT) : (kT = !0, oT(XT, WT), iT[xT](WT))
        }
        kT && iT[hT]()
      }
      toArray() {
        return this.items.slice(0)
      }
      toJSON() {
        return this.toArray().map((TT => "function" === typeof TT.toJSON ? TT.toJSON() : TT))
      }
      clone(TT) {
        let oT;
        return TT ? (oT = new zi, oT.push(...this.items)) : oT = new zi(...this.map((TT => TT[KT] ? TT.clone() : TT))), oT
      }
    }
    mo("array", {
      constructor: zi
    });
    class ki {
      keyByIndex = new Map;
      indexByKey = Object.create(null);
      nextIndex = 0;
      snapshots;
      indexOf(TT) {
        const oT = this.indexByKey[TT];
        return void 0 === oT ? void 0 : oT
      }
      assign(TT) {
        const oT = this.nextIndex++;
        return this.indexByKey[TT] = oT, this.keyByIndex.set(oT, TT), oT
      }
      snapshot(TT, oT) {
        (this.snapshots ??= new Map).set(TT, oT)
      }
      forgetSnapshot(TT) {
        this.snapshots?.delete(TT)
      }
      snapshotAt(TT) {
        return this.snapshots?.get(TT)
      }
      setIndex(TT, oT) {
        this.keyByIndex.set(TT, oT), this.indexByKey[oT] = TT
      }
      keyOf(TT) {
        return this.keyByIndex.get(TT)
      }
      cleanupAfterEncode() {
        if (void 0 !== this.snapshots) {
          for (const [TT] of this.snapshots) {
            const oT = this.keyByIndex.get(TT);
            void 0 !== oT && (delete this.indexByKey[oT], this.keyByIndex.delete(TT))
          }
          this.snapshots.clear()
        }
      }
      reset() {
        this.indexByKey = Object.create(null), this.keyByIndex.clear(), this.snapshots?.clear(), this.nextIndex = 0
      }
    }
    class Wi {
      [KT];
      [XT];
      childType;
      [MT];
      $items = new Map;
      journal = new ki;
      _stream;
      get maxPerTick() {
        return this._stream?.maxPerTick ?? 32
      }
      set maxPerTick(TT) {
        (this._stream ??= uo()).maxPerTick = TT
      }
      get priority() {
        return this._stream?.priority
      }
      set priority(TT) {
        (this._stream ??= uo()).priority = TT
      }
      get $indexes() {
        return this.journal.keyByIndex
      }
      get _collectionIndexes() {
        return this.journal.indexByKey
      }
      static[FT] = OI;
      static[ST] = dI;
      static COLLECTION_KIND = tI;
      static[DT](TT, oT, IT) {
        if (!IT || "string" === typeof TT[MT]) return !0;
        const iT = TT[LT](oT) ?? TT.journal.snapshotAt(oT);
        return IT.isChangeTreeVisible(iT[KT])
      }
      static is(TT) {
        return void 0 !== TT.map
      }
      constructor(TT) {
        if (Object.defineProperty(this, KT, {
            value: new JI(this),
            enumerable: !1,
            writable: !0
          }), this[MT] = void 0, TT)
          if (TT instanceof Map || TT instanceof Wi) TT.forEach(((TT, oT) => this.set(oT, TT)));
          else
            for (const oT in TT) this.set(oT, TT[oT])
      }
      static initializeForDecoder() {
        const TT = Object.create(Wi.prototype);
        return TT.$items = new Map, TT.journal = new ki, TT[MT] = void 0, aI(TT), TT
      } [Symbol.iterator]() {
        return this.$items[Symbol.iterator]()
      }
      get[Symbol.toStringTag]() {
        return this.$items[Symbol.toStringTag]
      }
      static get[Symbol.species]() {
        return Wi
      }
      set(TT, oT) {
        if (void 0 === oT || null === oT) throw new Error(`MapSchema#set('${TT}', ${oT}): trying to set ${oT} value on '${TT}'.`);
        "object" === typeof oT && this[MT] && oi(oT, this[MT], this, TT), TT = TT.toString();
        const IT = this[KT],
          iT = void 0 !== oT[KT],
          kT = this.journal;
        let WT, XT = kT.indexOf(TT);
        if (void 0 !== XT) {
          WT = zT.REPLACE;
          const IT = this.$items.get(TT);
          if (IT === oT) return;
          iT && (WT = zT.DELETE_AND_ADD, void 0 !== IT && IT[KT].root?.remove(IT[KT])), void 0 !== kT.snapshotAt(XT) && kT.forgetSnapshot(XT)
        } else XT = kT.assign(TT), WT = zT.ADD;
        return this.$items.set(TT, oT), WT === zT.ADD && IT.isStreamCollection ? void 0 !== IT.root && Eo(this, IT.root, XT) : IT.change(XT, WT), iT && oT[KT].setParent(this, IT.root, XT), this
      }
      get(TT) {
        return this.$items.get(TT)
      }
      getOrInsert(TT, oT) {
        return this.$items.has(TT) ? this.$items.get(TT) : (this.set(TT, oT), oT)
      }
      getOrInsertComputed(TT, oT) {
        if (this.$items.has(TT)) return this.$items.get(TT);
        const IT = oT(TT);
        return this.set(TT, IT), IT
      }
      delete(TT) {
        if (!this.$items.has(TT)) return !1;
        const oT = this.journal.indexOf(TT),
          IT = this.$items.get(TT),
          iT = this[KT];
        if (iT.isStreamCollection) {
          const zT = iT.root;
          let kT = !1;
          return void 0 !== zT && (kT = fo(this, zT, this[XT], oT)), void 0 !== IT?.[KT] && zT?.remove(IT[KT]), this.$items.delete(TT), kT || this.journal.snapshot(oT, IT), !0
        }
        return this.journal.snapshot(oT, IT), iT.delete(oT), this.$items.delete(TT)
      }
      clear() {
        const TT = this[KT];
        TT.discard(), TT.forEachChild(((oT, IT) => {
          TT.root?.remove(oT)
        })), this.journal.reset(), this.$items.clear(), TT.operation(zT.CLEAR)
      } [gT]() {
        const TT = this[KT];
        if (TT.isStreamCollection) throw new Error("@colyseus/schema: cannot reset a streamed MapSchema (pooling not supported).");
        this.$items.forEach((TT => TT?.[gT]?.())), this.$items.clear(), this.journal.reset(), TT.recycle(), this[XT] = void 0
      }
      has(TT) {
        return this.$items.has(TT)
      }
      forEach(TT) {
        this.$items.forEach(TT)
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
        this[KT].pause()
      }
      resumeTracking() {
        this[KT].resume()
      }
      untracked(TT) {
        return this[KT].untracked(TT)
      }
      get isTrackingPaused() {
        return this[KT].paused
      }
      setIndex(TT, oT) {
        this.journal.setIndex(TT, oT)
      }
      getIndex(TT) {
        return this.journal.keyOf(TT)
      } [LT](TT) {
        const oT = this.journal.keyOf(TT);
        return void 0 !== oT ? this.$items.get(oT) : void 0
      } [xT](TT) {
        const oT = this.journal.keyOf(TT);
        void 0 !== oT && (this.$items.delete(oT), this.journal.keyByIndex.delete(TT))
      } [cT](TT, oT, IT) {
        let iT = null;
        if (this.$items.forEach(((zT, kT) => {
            TT.has(kT) ? IT(zT) : ((iT ??= new Set).add(kT), oT(zT, kT))
          })), null !== iT) {
          iT.forEach((TT => {
            this.$items.delete(TT), delete this.journal.indexByKey[TT]
          }));
          const TT = [];
          this.journal.keyByIndex.forEach(((oT, IT) => {
            iT.has(oT) && TT.push(IT)
          }));
          for (let oT = 0; oT < TT.length; oT++) this.journal.keyByIndex.delete(TT[oT])
        }
      } [AT]() {
        this.journal.cleanupAfterEncode()
      }
      _dropView(TT) {
        Uo(this, TT)
      }
      _unregister() {}
      toJSON() {
        return Object.fromEntries(Array.from(this, (TT => {
          let [oT, IT] = TT;
          return [oT, "function" === typeof IT.toJSON ? IT.toJSON() : IT]
        })))
      }
      clone(TT) {
        let oT;
        return TT ? oT = Object.assign(new Wi, this) : (oT = new Wi, this.forEach(((TT, IT) => {
          TT[KT] ? oT.set(IT, TT.clone()) : oT.set(IT, TT)
        }))), oT
      }
    }
    mo("map", {
      constructor: Wi
    });
    class Xi {
      [KT];
      [XT];
      [MT];
      $items = new Map;
      deletedItems = {};
      $refId = 0;
      _stream;
      get maxPerTick() {
        return this._stream?.maxPerTick ?? 32
      }
      set maxPerTick(TT) {
        (this._stream ??= uo()).maxPerTick = TT
      }
      get priority() {
        return this._stream?.priority
      }
      set priority(TT) {
        (this._stream ??= uo()).priority = TT
      }
      static[FT] = HI;
      static[ST] = dI;
      static COLLECTION_KIND = bI;
      static[DT](TT, oT, IT) {
        return !IT || "string" === typeof TT[MT] || IT.isChangeTreeVisible((TT[LT](oT) ?? TT.deletedItems[oT])[KT])
      }
      static is(TT) {
        return void 0 !== TT.collection
      }
      constructor(TT) {
        Object.defineProperty(this, KT, {
          value: new JI(this),
          enumerable: !1,
          writable: !0
        }), this[MT] = void 0, TT && TT.forEach((TT => this.add(TT)))
      }
      static initializeForDecoder() {
        const TT = Object.create(Xi.prototype);
        return TT.$items = new Map, TT.deletedItems = {}, TT.$refId = 0, TT[MT] = void 0, aI(TT), TT
      }
      add(TT) {
        const oT = this.$refId++,
          IT = this[KT];
        return this.$items.set(oT, TT), IT.isStreamCollection ? void 0 !== IT.root && Eo(this, IT.root, oT) : IT.change(oT), void 0 !== TT[KT] && TT[KT].setParent(this, IT.root, oT), oT
      }
      at(TT) {
        const oT = Array.from(this.$items.keys())[TT];
        return this.$items.get(oT)
      }
      entries() {
        return this.$items.entries()
      }
      delete(TT) {
        const oT = this.$items.entries();
        let IT, iT;
        for (;
          (iT = oT.next()) && !iT.done;)
          if (TT === iT.value[1]) {
            IT = iT.value[0];
            break
          } if (void 0 === IT) return !1;
        const zT = this[KT];
        if (zT.isStreamCollection) {
          const TT = zT.root,
            oT = this.$items.get(IT);
          return void 0 !== TT && fo(this, TT, this[XT], IT), void 0 !== oT?.[KT] && TT?.remove(oT[KT]), this.deletedItems[IT] = oT, this.$items.delete(IT)
        }
        return this.deletedItems[IT] = zT.delete(IT), this.$items.delete(IT)
      }
      clear() {
        const TT = this[KT];
        TT.discard(), TT.forEachChild(((oT, IT) => {
          TT.root?.remove(oT)
        })), this.$items.clear(), TT.operation(zT.CLEAR)
      } [gT]() {
        const TT = this[KT];
        if (TT.isStreamCollection) throw new Error("@colyseus/schema: cannot reset a streamed CollectionSchema (pooling not supported).");
        this.$items.forEach((TT => TT?.[gT]?.())), this.$items.clear(), this.deletedItems = {}, this.$refId = 0, TT.recycle(), this[XT] = void 0
      }
      has(TT) {
        return Array.from(this.$items.values()).some((oT => oT === TT))
      }
      forEach(TT) {
        this.$items.forEach(((oT, IT, iT) => TT(oT, IT, this)))
      }
      values() {
        return this.$items.values()
      }
      get size() {
        return this.$items.size
      }
      pauseTracking() {
        this[KT].pause()
      }
      resumeTracking() {
        this[KT].resume()
      }
      untracked(TT) {
        return this[KT].untracked(TT)
      }
      get isTrackingPaused() {
        return this[KT].paused
      } [Symbol.iterator]() {
        return this.$items.values()
      }
      setIndex(TT, oT) {}
      getIndex(TT) {
        return TT
      } [LT](TT) {
        return this.$items.get(TT)
      } [xT](TT) {
        this.$items.delete(TT)
      } [cT](TT, oT, IT) {
        let iT = null;
        if (this.$items.forEach(((zT, kT) => {
            TT.has(kT) ? IT(zT) : ((iT ??= []).push(kT), oT(zT, kT))
          })), null !== iT)
          for (let zT = 0; zT < iT.length; zT++) this[xT](iT[zT])
      } [AT]() {
        for (const TT in this.deletedItems) delete this.deletedItems[TT]
      }
      _dropView(TT) {
        Uo(this, TT)
      }
      _unregister() {}
      toArray() {
        return Array.from(this.$items.values())
      }
      toJSON() {
        const TT = [];
        return this.forEach(((oT, IT) => {
          TT.push("function" === typeof oT.toJSON ? oT.toJSON() : oT)
        })), TT
      }
      clone(TT) {
        let oT;
        return TT ? oT = Object.assign(new Xi, this) : (oT = new Xi, this.forEach((TT => {
          TT[KT] ? oT.add(TT.clone()) : oT.add(TT)
        }))), oT
      }
    }
    mo("collection", {
      constructor: Xi
    });
    class Bi {
      [KT];
      [XT];
      [MT];
      $items = new Map;
      deletedItems = {};
      $refId = 0;
      _stream;
      get maxPerTick() {
        return this._stream?.maxPerTick ?? 32
      }
      set maxPerTick(TT) {
        (this._stream ??= uo()).maxPerTick = TT
      }
      get priority() {
        return this._stream?.priority
      }
      set priority(TT) {
        (this._stream ??= uo()).priority = TT
      }
      static[FT] = HI;
      static[ST] = dI;
      static COLLECTION_KIND = pI;
      static[DT](TT, oT, IT) {
        return !IT || "string" === typeof TT[MT] || IT.isVisible((TT[LT](oT) ?? TT.deletedItems[oT])[KT])
      }
      static is(TT) {
        return void 0 !== TT.set
      }
      constructor(TT) {
        Object.defineProperty(this, KT, {
          value: new JI(this),
          enumerable: !1,
          writable: !0
        }), this[MT] = void 0, TT && TT.forEach((TT => this.add(TT)))
      }
      static initializeForDecoder() {
        const TT = Object.create(Bi.prototype);
        return TT.$items = new Map, TT.deletedItems = {}, TT.$refId = 0, TT[MT] = void 0, aI(TT), TT
      }
      add(TT) {
        if (this.has(TT)) return !1;
        const oT = this.$refId++,
          IT = this[KT];
        return this.$items.set(oT, TT), IT.isStreamCollection ? void 0 !== IT.root && Eo(this, IT.root, oT) : IT.change(oT, zT.ADD), void 0 !== TT[KT] && TT[KT].setParent(this, IT.root, oT), oT
      }
      entries() {
        return this.$items.entries()
      }
      delete(TT) {
        const oT = this.$items.entries();
        let IT, iT;
        for (;
          (iT = oT.next()) && !iT.done;)
          if (TT === iT.value[1]) {
            IT = iT.value[0];
            break
          } if (void 0 === IT) return !1;
        const zT = this[KT];
        if (zT.isStreamCollection) {
          const TT = zT.root,
            oT = this.$items.get(IT);
          return void 0 !== TT && fo(this, TT, this[XT], IT), void 0 !== oT?.[KT] && TT?.remove(oT[KT]), this.deletedItems[IT] = oT, this.$items.delete(IT)
        }
        return this.deletedItems[IT] = zT.delete(IT), this.$items.delete(IT)
      }
      clear() {
        const TT = this[KT];
        TT.discard(), this.$items.clear(), TT.operation(zT.CLEAR)
      } [gT]() {
        const TT = this[KT];
        if (TT.isStreamCollection) throw new Error("@colyseus/schema: cannot reset a streamed SetSchema (pooling not supported).");
        this.$items.forEach((TT => TT?.[gT]?.())), this.$items.clear(), this.deletedItems = {}, this.$refId = 0, TT.recycle(), this[XT] = void 0
      }
      has(TT) {
        const oT = this.$items.values();
        let IT, iT = !1;
        for (;
          (IT = oT.next()) && !IT.done;)
          if (TT === IT.value) {
            iT = !0;
            break
          } return iT
      }
      forEach(TT) {
        this.$items.forEach(((oT, IT, iT) => TT(oT, IT, this)))
      }
      values() {
        return this.$items.values()
      }
      get size() {
        return this.$items.size
      }
      pauseTracking() {
        this[KT].pause()
      }
      resumeTracking() {
        this[KT].resume()
      }
      untracked(TT) {
        return this[KT].untracked(TT)
      }
      get isTrackingPaused() {
        return this[KT].paused
      } [Symbol.iterator]() {
        return this.$items.values()
      }
      setIndex(TT, oT) {}
      getIndex(TT) {
        return TT
      } [LT](TT) {
        return this.$items.get(TT)
      } [xT](TT) {
        this.$items.delete(TT)
      } [cT](TT, oT, IT) {
        let iT = null;
        if (this.$items.forEach(((zT, kT) => {
            TT.has(kT) ? IT(zT) : ((iT ??= []).push(kT), oT(zT, kT))
          })), null !== iT)
          for (let zT = 0; zT < iT.length; zT++) this[xT](iT[zT])
      } [AT]() {
        for (const TT in this.deletedItems) delete this.deletedItems[TT]
      }
      _dropView(TT) {
        Uo(this, TT)
      }
      _unregister() {}
      toArray() {
        return Array.from(this.$items.values())
      }
      toJSON() {
        const TT = [];
        return this.forEach(((oT, IT) => {
          TT.push("function" === typeof oT.toJSON ? oT.toJSON() : oT)
        })), TT
      }
      clone(TT) {
        let oT;
        return TT ? oT = Object.assign(new Bi, this) : (oT = new Bi, this.forEach((TT => {
          TT[KT] ? oT.add(TT.clone()) : oT.add(TT)
        }))), oT
      }
    }
    mo("set", {
      constructor: Bi
    });
    class Fi {
      [KT];
      [XT];
      [MT];
      $items = new Map;
      $nextPosition = 0;
      _itemIndex = new Map;
      _stream;
      get maxPerTick() {
        return this._stream?.maxPerTick ?? 32
      }
      set maxPerTick(TT) {
        (this._stream ??= uo()).maxPerTick = TT
      }
      get priority() {
        return this._stream?.priority
      }
      set priority(TT) {
        (this._stream ??= uo()).priority = TT
      }
      static $isStream = !0;
      static[FT] = HI;
      static[ST] = dI;
      static COLLECTION_KIND = yI;
      static[DT](TT, oT, IT) {
        if (!IT) return !0;
        const iT = TT[LT](oT);
        return void 0 !== iT && IT.isVisible(iT[KT])
      }
      static is(TT) {
        return TT && void 0 !== TT.stream
      }
      constructor() {
        Object.defineProperty(this, KT, {
          value: new JI(this),
          enumerable: !1,
          writable: !0
        }), this[MT] = void 0
      }
      static initializeForDecoder() {
        const TT = Object.create(Fi.prototype);
        return TT.$items = new Map, TT.$nextPosition = 0, TT._itemIndex = new Map, TT[MT] = void 0, aI(TT), TT
      }
      add(TT) {
        if (this._itemIndex.has(TT)) return -1;
        const oT = this.$nextPosition++;
        this.$items.set(oT, TT), this._itemIndex.set(TT, oT);
        const IT = this[KT].root;
        return void 0 !== TT[KT] && TT[KT].setParent(this, IT, oT), void 0 !== IT && Eo(this, IT, oT), oT
      }
      remove(TT) {
        const oT = this._itemIndex.get(TT);
        if (void 0 === oT) return !1;
        this._itemIndex.delete(TT), this.$items.delete(oT);
        const IT = this[KT].root;
        return void 0 !== IT && (fo(this, IT, this[XT], oT), void 0 !== TT[KT] && IT.remove(TT[KT])), !0
      }
      has(TT) {
        return this._itemIndex.has(TT)
      }
      clear() {
        const TT = this[KT].root;
        if (void 0 !== TT) {
          ! function(TT, oT, IT) {
            const iT = TT._stream;
            if (void 0 !== iT) {
              iT.broadcastPending.clear();
              for (const TT of iT.sentBroadcast) iT.broadcastDeletes.add(TT);
              iT.sentBroadcast.clear(), oT.forEachActiveView((TT => {
                iT.pendingByView.get(TT.id)?.clear();
                const oT = iT.sentByView.get(TT.id);
                if (void 0 !== oT && oT.size > 0) {
                  let iT = TT.changes.get(IT);
                  void 0 === iT && (iT = new Map, TT.changes.set(IT, iT));
                  for (const TT of oT) iT.set(TT, zT.DELETE);
                  oT.clear()
                }
              }))
            }
          }(this, TT, this[XT]);
          for (const oT of this.$items.values()) void 0 !== oT[KT] && TT.remove(oT[KT])
        }
        this.$items.clear(), this._itemIndex.clear()
      }
      forEach(TT) {
        for (const [oT, IT] of this.$items) TT(IT, oT, this)
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
      setIndex(TT, oT) {}
      getIndex(TT) {
        return TT
      } [LT](TT) {
        return this.$items.get(TT)
      } [xT](TT) {
        const oT = this.$items.get(TT);
        void 0 !== oT && (this._itemIndex.delete(oT), this.$items.delete(TT))
      } [cT]() {} [AT]() {}
      toArray() {
        return Array.from(this.$items.values())
      }
      toJSON() {
        const TT = [];
        return this.forEach((oT => {
          TT.push("function" === typeof oT?.toJSON ? oT.toJSON() : oT)
        })), TT
      }
      clone(TT) {
        if (TT) {
          return Object.assign(new Fi, this)
        }
        const oT = new Fi;
        return oT.maxPerTick = this.maxPerTick, this.forEach((TT => {
          oT.add("function" === typeof TT?.clone ? TT.clone() : TT)
        })), oT
      }
      _dropView(TT) {
        Uo(this, TT)
      }
      _unregister() {}
    }
    mo("stream", {
      constructor: Fi
    });
    class Si {
      [mT] = !0;
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
      constructor(TT) {
        this._type = TT
      }
      default (TT) {
        return this._default = TT, this._hasDefault = !0, this
      }
      view(TT) {
        return this._view = TT ?? -1, this
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
        const TT = this._type;
        if (TT && "object" === typeof TT && void 0 !== TT.array) throw new Error(Ro);
        return this._stream = !0, this
      }
      priority(TT) {
        return this._streamPriority = TT, this
      }
      deprecated() {
        let TT = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
        return this._deprecated = !0, this._deprecatedThrows = TT, this
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

    function Di(TT) {
      return null != TT && !0 === TT[mT]
    }

    function Li(TT) {
      return () => new Si(TT)
    }

    function xi(TT) {
      if (Di(TT)) {
        const oT = TT._type;
        throw new Error(`t.array/map/set/collection(): a t.* builder is not a valid element type \u2014 ${"string"===typeof oT?`use the type name instead: t.array("${oT}")`:'collections accept a Schema class or a primitive type name ("string", "number", \u2026)'}.`)
      }
      return TT
    }

    function ci(TT) {
      return new Si({
        quantized: Yo(TT)
      })
    }
    const Ki = Object.freeze({
        string: Li("string"),
        number: Li("number"),
        boolean: Li("boolean"),
        int8: Li("int8"),
        uint8: Li("uint8"),
        int16: Li("int16"),
        uint16: Li("uint16"),
        int32: Li("int32"),
        uint32: Li("uint32"),
        int64: Li("int64"),
        uint64: Li("uint64"),
        float32: Li("float32"),
        float64: Li("float64"),
        bigint64: Li("bigint64"),
        biguint64: Li("biguint64"),
        ref: TT => new Si(TT),
        array: TT => new Si({
          array: xi(TT)
        }),
        map: TT => new Si({
          map: xi(TT)
        }),
        set: TT => new Si({
          set: xi(TT)
        }),
        collection: TT => new Si({
          collection: xi(TT)
        }),
        stream: TT => {
          const oT = new Si({
            stream: xi(TT)
          });
          return oT._stream = !0, oT
        },
        quantized: ci,
        angle: TT => ci({
          min: 0,
          max: 2 * Math.PI,
          mode: "wrap",
          bits: TT?.bits ?? 16
        })
      }),
      Mi = -1;

    function ri(TT) {
      return qo.register(TT), TT
    }

    function Ai() {
      let TT = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Mi;
      return function(oT, IT) {
        const iT = yo.initialize(oT.constructor);
        yo.setTag(iT, IT, TT)
      }
    }

    function gi(TT, oT) {
      const IT = yo.initialize(TT.constructor);
      yo.setUnreliable(IT, oT)
    }

    function wi(TT, oT) {
      const IT = yo.initialize(TT.constructor);
      yo.setPatchOnly(IT, oT)
    }

    function mi(TT, oT) {
      const IT = yo.initialize(TT.constructor);
      yo.setFullStateOnly(IT, oT)
    }

    function ei(TT, oT) {
      return function(IT, iT) {
        const zT = IT.constructor;
        if (!TT) throw new Error(`${zT.name}: @type() reference provided for "${iT}" is undefined. Make sure you don't have any circular dependencies.`);
        TT = so(TT, `${zT.name}.${iT}`), qo.register(zT);
        const kT = Object.getPrototypeOf(zT)[Symbol.metadata],
          WT = yo.initialize(zT);
        let XT = WT[iT];
        if (void 0 !== WT[XT]) {
          if (WT[XT].deprecated) return;
          if (void 0 !== WT[XT].type) {
            const TT = new Error(`@colyseus/schema: Duplicate '${iT}' definition on '${zT.name}'.\nCheck @type() annotation`);
            throw new Error(`${TT.message} ${TT.stack.split("\n")[4].trim()}`)
          }
        } else XT = WT[vT] ?? (kT && kT[vT]) ?? -1, XT++;
        if (oT && oT.manual) yo.addField(WT, XT, iT, TT, {
          enumerable: !0,
          configurable: !0,
          writable: !0
        });
        else {
          const {
            complexTypeKlass: oT,
            childType: IT
          } = Zo(TT);
          yo.addField(WT, XT, iT, TT, ui(iT, XT, IT, oT))
        }
        WT[eT][iT] && Object.defineProperty(IT, iT, WT[eT][iT]), ("string" === typeof TT || Qo(TT)) && (WT[uT] || Object.defineProperty(WT, uT, {
          value: [],
          enumerable: !1,
          configurable: !0,
          writable: !0
        }), WT[uT][XT] = "string" === typeof TT ? oo[TT] : no(TT.quantized))
      }
    }
    const Ri = {
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

    function ui(TT, oT, IT, iT) {
      let kT;
      return kT = iT ? function(TT, oT, IT, iT) {
        const kT = iT.constructor === zi,
          WT = iT.constructor === Wi;
        return function(TT) {
          const iT = this[wT],
            XT = iT[oT];
          if (TT !== XT) {
            if (void 0 !== TT && null !== TT) {
              if (!kT || TT instanceof zi)
                if (!WT || TT instanceof Wi) TT[MT] = IT;
                else {
                  const oT = new Wi;
                  if (oT[MT] = IT, TT instanceof Map) TT.forEach(((TT, IT) => oT.set(IT, TT)));
                  else
                    for (const IT in TT) oT.set(IT, TT[IT]);
                  TT = oT
                }
              else {
                const oT = new zi;
                oT[MT] = IT, oT.push(...TT), TT = oT
              }
              const iT = this[KT],
                FT = this.constructor;
              void 0 !== XT && null !== XT && XT[KT] ? (iT.root?.remove(XT[KT]), FT[BT](iT, oT, zT.DELETE_AND_ADD)) : FT[BT](iT, oT, zT.ADD), TT[KT]?.setParent(this, iT.root, oT)
            } else void 0 !== XT && null !== XT && this[KT].delete(oT);
            iT[oT] = TT
          }
        }
      }(0, oT, IT, iT) : "string" === typeof IT ? function(TT, oT, IT) {
        const iT = Ri[IT],
          kT = "string" === IT,
          WT = "boolean" === IT;
        return function(IT) {
          const XT = this[wT],
            FT = XT[oT];
          if (IT !== FT) {
            if (void 0 !== IT && null !== IT) {
              if (!WT && void 0 !== iT && typeof IT !== iT && (!kT || null !== IT)) {
                const oT = IT && IT.constructor ? ` (${IT.constructor.name})` : "";
                throw new Ti(`a '${iT}' was expected, but '${JSON.stringify(IT)}'${oT} was provided in ${this.constructor.name}#${TT}`)
              }
              this.constructor[BT](this[KT], oT, zT.ADD)
            } else void 0 !== FT && null !== FT && this[KT].delete(oT);
            XT[oT] = IT
          }
        }
      }(TT, oT, IT) : Qo(IT) ? function(TT, oT, IT) {
        return function(iT) {
          const kT = this[wT],
            WT = kT[oT];
          if (void 0 !== iT && null !== iT) {
            if ("number" !== typeof iT) throw new Ti(`a 'number' was expected, but '${JSON.stringify(iT)}' was provided in ${this.constructor.name}#${TT}`);
            if ((iT = Ho(IT, Oo(IT, iT))) === WT) return;
            this.constructor[BT](this[KT], oT, zT.ADD)
          } else {
            if (iT === WT) return;
            void 0 !== WT && null !== WT && this[KT].delete(oT)
          }
          kT[oT] = iT
        }
      }(TT, oT, IT.quantized) : function(TT, oT, IT) {
        return function(iT) {
          const kT = this[wT],
            WT = kT[oT];
          if (iT !== WT) {
            if (void 0 !== iT && null !== iT) {
              oi(iT, IT, this, TT);
              const kT = this[KT],
                XT = this.constructor;
              void 0 !== WT && null !== WT && WT[KT] ? (kT.root?.remove(WT[KT]), XT[BT](kT, oT, zT.DELETE_AND_ADD)) : XT[BT](kT, oT, zT.ADD), iT[KT]?.setParent(this, kT.root, oT)
            } else void 0 !== WT && null !== WT && this[KT].delete(oT);
            kT[oT] = iT
          }
        }
      }(TT, oT, IT), {
        get: function() {
          return this[wT][oT]
        },
        set: kT,
        enumerable: !0,
        configurable: !0
      }
    }

    function vi() {
      let TT = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
      return function(oT, IT) {
        const iT = yo.initialize(oT.constructor);
        yo.setDeprecated(iT, IT), TT && (iT[eT] ??= {}, iT[eT][IT] = {
          get: function() {
            throw new Error(`${IT} is deprecated.`)
          },
          set: function(TT) {},
          enumerable: !1,
          configurable: !0
        }, Object.defineProperty(oT, IT, iT[eT][IT]))
      }
    }
    let Ei = !1;

    function fi(TT, oT, IT) {
      Ei || (Ei = !0, console.warn("@colyseus/schema: defineTypes() is deprecated and will be removed in a future release. Use schema() with t.* field builders instead \u2192 https://docs.colyseus.io/state/schema"));
      for (let iT in oT) ei(oT[iT], IT)(TT.prototype, iT);
      return TT
    }

    function Ci(TT, oT) {
      let IT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Ji;
      if (null == TT || "object" !== typeof TT) throw new Error(`schema(): first argument must be a fields object (got ${typeof TT}).`);
      const iT = {},
        zT = {},
        kT = {},
        WT = {},
        XT = (TT, oT) => {
          if (oT.hasDefault)((TT, oT) => {
            "function" === typeof oT ? WT[TT] = oT : oT && "function" === typeof oT.clone ? WT[TT] = () => oT.clone() : kT[TT] = oT
          })(TT, oT.default);
          else if (!oT.optional) {
            const IT = function(TT) {
              if (TT && "object" === typeof TT) {
                if (void 0 !== TT.array) return () => new zi;
                if (void 0 !== TT.map) return () => new Wi;
                if (void 0 !== TT.set) return () => new Bi;
                if (void 0 !== TT.collection) return () => new Xi;
                if (void 0 !== TT.stream) return () => new Fi
              } else if ("function" === typeof TT && Ji.is(TT) && (!TT.prototype.initialize || 0 === TT.prototype.initialize.length)) return () => new TT
            }(oT.type);
            IT && (WT[TT] = IT)
          }
        },
        BT = {},
        FT = [],
        ST = [],
        DT = {},
        LT = [],
        xT = [],
        cT = {},
        KT = [];
      for (const wT in TT) {
        const IT = TT[wT],
          kT = `schema(${oT?`'${oT}'`:""}): field '${wT}'`;
        if (Di(IT)) {
          const TT = IT.toDefinition();
          if (TT.noSync) {
            if (void 0 !== TT.view || TT.unreliable || TT.patchOnly || TT.fullStateOnly || TT.stream) throw new Error(`${kT} uses .noSync() together with a sync-only modifier (.view/.unreliable/.patchOnly/.fullStateOnly/.stream). A local-only field cannot be synchronized.`);
            XT(wT, TT);
            continue
          }
          if (TT.patchOnly && TT.fullStateOnly) throw new Error(`${kT} uses .patchOnly() together with .fullStateOnly(). Those are the only two delivery channels, so the field would never reach a client \u2014 use .noSync() if that is intended.`);
          const oT = so(TT.type, kT);
          if ("function" === typeof oT && !Ji.is(oT)) throw new Error(`${kT} is a synced ref to non-Schema class '${oT.name||"(anonymous)"}' \u2014 use .noSync(), or Metadata.setFields().`);
          iT[wT] = oT, void 0 !== TT.view && (BT[wT] = TT.view), TT.unreliable && FT.push(wT), TT.patchOnly && ST.push(wT), TT.deprecated && (DT[wT] = TT.deprecatedThrows), TT.fullStateOnly && LT.push(wT), TT.stream && xT.push(wT), void 0 !== TT.streamPriority && (cT[wT] = TT.streamPriority), TT.optional && KT.push(wT), XT(wT, TT)
        } else {
          if ("function" !== typeof IT) throw new Error(`${kT} must be a t.* builder, Schema subclass, or method (got ${typeof IT}).`);
          Ji.is(IT) ? (iT[wT] = IT, IT.prototype.initialize && 0 !== IT.prototype.initialize.length || (WT[wT] = () => new IT)) : zT[wT] = IT
        }
      }
      const MT = TT => {
          for (const oT in kT) TT[oT] = kT[oT];
          for (const oT in WT) TT[oT] = WT[oT]()
        },
        rT = () => {
          const TT = {};
          return MT(TT), TT
        },
        AT = "function" === typeof zT.initialize,
        gT = zT.initialize ?? IT._initialize,
        hT = class extends IT {
          constructor() {
            for (var TT = arguments.length, oT = new Array(TT), IT = 0; IT < TT; IT++) oT[IT] = arguments[IT];
            const zT = oT[0];
            void 0 === zT ? (super(), MT(this)) : super(Object.assign(rT(), AT ? (TT => {
              const oT = Object.keys(iT),
                IT = {};
              for (const iT in TT) oT.includes(iT) || (IT[iT] = TT[iT]);
              return IT
            })(zT) : zT)), gT && new.target === hT && gT.apply(this, oT)
          }
        };
      oT && Object.defineProperty(hT, "name", {
        value: oT
      }), yo.setFields(hT, iT), hT._getDefaultValues = rT, hT._initialize = gT, Object.assign(hT.prototype, zT);
      for (const wT in BT) Ai(BT[wT])(hT.prototype, wT);
      for (const wT of FT) gi(hT.prototype, wT);
      for (const wT of ST) wi(hT.prototype, wT);
      for (const wT in DT) vi(DT[wT])(hT.prototype, wT);
      if (LT.length > 0 || xT.length > 0) {
        const TT = hT[Symbol.metadata];
        for (const oT of LT) yo.setFullStateOnly(TT, oT);
        for (const oT of xT) yo.setStream(TT, oT);
        for (const oT in cT) yo.setStreamPriority(TT, oT, cT[oT])
      }
      if (KT.length > 0) {
        const TT = hT[Symbol.metadata];
        for (const oT of KT) TT[TT[oT]].optional = !0
      }
      return hT.extend = (TT, oT) => Ci(TT, oT, hT), hT
    }

    function ji(TT) {
      const oT = TT[KT].root,
        IT = {
          ops: {},
          refs: []
        };
      let iT = oT.changes.next;
      for (; iT;) {
        const TT = iT.changeTree;
        void 0 !== TT ? (IT.refs.push(`refId#${TT.ref[XT]}`), TT.forEach(((TT, oT) => {
          if (TT < 0 || !oT) return;
          const iT = zT[oT];
          IT.ops[iT] || (IT.ops[iT] = 0), IT.ops[iT]++
        })), iT = iT.next) : iT = iT.next
      }
      return IT
    }
    class Ji {
      static[FT] = QI;
      static[ST] = PI;
      [XT];
      [wT];
      static initialize(TT) {
        Object.defineProperty(TT, KT, {
          value: new JI(TT),
          enumerable: !1,
          writable: !0
        }), TT[wT] = []
      }
      static initializeForDecoder() {
        const TT = Object.create(this.prototype);
        return aI(TT), TT[wT] = [], TT
      }
      static reset(TT) {
        const oT = TT?.[KT];
        if (void 0 === oT || "function" !== typeof oT.recycle) throw new Error("@colyseus/schema: Schema.reset() requires a tracked (encoder-side) instance.");
        if (void 0 !== oT.extraParents) throw new Error(`@colyseus/schema: cannot reset a shared instance (${TT.constructor.name}) with multiple parents.`);
        TT[gT]()
      } [gT]() {
        const TT = this.constructor[Symbol.metadata],
          oT = TT?.[ET] ?? [],
          IT = this[wT];
        for (let iT = 0; iT < oT.length; iT++) {
          const TT = IT[oT[iT]];
          TT?.[gT]?.()
        }
        this[KT].recycle(), this[XT] = void 0
      }
      static is(TT) {
        const oT = TT[Symbol.metadata];
        return "object" === typeof oT && null !== oT
      }
      static isSchema(TT) {
        return "function" === typeof TT?.assign
      }
      static[BT](TT, oT) {
        let IT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : zT.ADD;
        TT.change(oT, IT)
      }
      static[DT](TT, oT, IT) {
        const iT = TT.constructor[Symbol.metadata],
          zT = iT[oT]?.tag;
        return void 0 === IT ? void 0 === zT : void 0 === zT || (zT === Mi ? IT.isChangeTreeVisible(TT[KT]) : IT.hasTagOnTree(TT[KT], zT))
      }
      constructor(TT) {
        Ji.initialize(this), TT && Ji.assignProps(this, TT)
      }
      assign(TT) {
        return Ji.assignProps(this, TT), this
      }
      static assignProps(TT, oT) {
        const IT = TT.constructor[Symbol.metadata];
        if (IT && void 0 !== IT[vT])
          for (let zT = 0; zT <= IT[vT]; zT++) {
            const iT = IT[zT];
            if (!iT) continue;
            const kT = oT[iT.name];
            void 0 !== kT && (TT[iT.name] = kT)
          }
        const iT = Object.keys(oT);
        for (let zT = 0; zT < iT.length; zT++) {
          const kT = iT[zT];
          IT && void 0 !== IT[kT] || (TT[kT] = oT[kT])
        }
      }
      restore(TT) {
        const oT = this.constructor[Symbol.metadata];
        for (const IT in oT) {
          const iT = oT[IT],
            zT = iT.name,
            kT = iT.type,
            WT = TT[zT];
          if (void 0 !== WT && null !== WT)
            if ("string" === typeof kT) this[zT] = WT;
            else if (Ji.is(kT)) {
            const TT = new kT;
            TT.restore(WT), this[zT] = TT
          } else if ("object" === typeof kT) {
            const TT = Object.keys(kT)[0],
              oT = kT[TT];
            if ("map" === TT) {
              const TT = this[zT];
              for (const IT in WT)
                if (Ji.is(oT)) {
                  const iT = new oT;
                  iT.restore(WT[IT]), TT.set(IT, iT)
                } else TT.set(IT, WT[IT])
            } else if ("array" === TT) {
              const TT = this[zT];
              for (let IT = 0; IT < WT.length; IT++)
                if (Ji.is(oT)) {
                  const iT = new oT;
                  iT.restore(WT[IT]), TT.push(iT)
                } else TT.push(WT[IT])
            }
          }
        }
        return this
      }
      setDirty(TT, oT) {
        const IT = this.constructor[Symbol.metadata];
        this[KT].change(IT[IT[TT]].index, oT)
      }
      pauseTracking() {
        this[KT].pause()
      }
      resumeTracking() {
        this[KT].resume()
      }
      untracked(TT) {
        return this[KT].untracked(TT)
      }
      get isTrackingPaused() {
        return this[KT].paused
      }
      clone() {
        const TT = Object.create(this.constructor.prototype);
        Ji.initialize(TT);
        const oT = this.constructor[Symbol.metadata];
        for (const IT in oT) {
          const iT = oT[IT].name;
          "object" === typeof this[iT] && "function" === typeof this[iT]?.clone ? TT[iT] = this[iT].clone() : TT[iT] = this[iT]
        }
        return TT
      }
      toJSON() {
        const TT = {},
          oT = this.constructor[Symbol.metadata];
        for (const IT in oT) {
          const iT = oT[IT],
            zT = iT.name;
          iT.deprecated || null === this[zT] || "undefined" === typeof this[zT] || (TT[zT] = "function" === typeof this[zT].toJSON ? this[zT].toJSON() : this[zT])
        }
        return TT
      }
      discardAllChanges() {
        this[KT].discardAll()
      } [LT](TT) {
        return this[this.constructor[Symbol.metadata][TT].name]
      } [xT](TT) {
        this[this.constructor[Symbol.metadata][TT].name] = void 0
      }
      static debugRefIds(TT) {
        let oT = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          IT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          iT = arguments.length > 3 ? arguments[3] : void 0,
          zT = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "";
        const kT = oT ? ` - ${JSON.stringify(TT.toJSON())}` : "",
          WT = TT[KT],
          BT = TT[XT],
          FT = iT ? iT.root.refCount[BT] : WT.refCount,
          ST = FT > 1 ? ` [\xd7${FT}]` : "";
        let DT = `${function(TT){return new Array(TT).fill(0).map(((oT,IT)=>IT===TT-1?"\u2514\u2500 ":"   ")).join("")}(IT)}${zT}${TT.constructor.name} (refId: ${BT})${ST}${kT}\n`;
        return WT.forEachChild(((zT, kT) => {
          let WT = kT;
          "number" === typeof kT && TT.$indexes && (WT = TT.$indexes.get(kT) ?? kT);
          const XT = void 0 !== TT.forEach && void 0 !== WT ? `["${WT}"]: ` : "";
          DT += this.debugRefIds(zT.ref, oT, IT + 1, iT, XT)
        })), DT
      }
      static debugRefIdEncodingOrder(TT) {
        let oT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "allChanges";
        const IT = [],
          iT = TT[KT];
        if ("changes" === oT) {
          let TT = iT.root.changes?.next;
          for (; TT;) TT.changeTree && IT.push(TT.changeTree.ref[XT]), TT = TT.next;
          return IT
        }
        const zT = "allFilteredChanges" === oT,
          kT = new Set,
          WT = TT => {
            kT.has(TT) || (kT.add(TT), TT.isFiltered === zT && IT.push(TT.ref[XT]), TT.forEachChild(((TT, oT) => WT(TT))))
          };
        return WT(iT), IT
      }
      static debugRefIdsFromDecoder(TT) {
        return this.debugRefIds(TT.state, !1, 0, TT)
      }
      static debugChanges(TT) {
        let oT = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        const IT = TT[KT],
          iT = oT ? "allChanges" : "changes";
        let kT = `${TT.constructor.name} (${TT[XT]}) -> .${iT}:\n`;
        return oT ? IT.forEachLive((TT => {
          kT += `- [${TT}]: ADD (${JSON.stringify(IT.getValue(Number(TT),!0))})\n`
        })) : IT.forEach(((TT, oT) => {
          TT < 0 || !oT || (kT += `- [${TT}]: ${zT[oT]} (${JSON.stringify(IT.getValue(Number(TT),!1))})\n`)
        })), kT
      }
    }
    kT(Ji);
    const Ui = {
      value: 0,
      enumerable: !1,
      writable: !0
    };
    class ai {
      types;
      nextUniqueId = 0;
      changeTrees = {};
      get refCount() {
        const TT = {};
        for (const oT in this.changeTrees) TT[oT] = this.changeTrees[oT].refCount;
        return TT
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
      enqueueFilterRefresh(TT) {
        this.types.hasFilters && (TT.flags & CI || (TT.flags |= CI, this.pendingFilterRefresh.push(TT)))
      }
      _nodePool = [];
      _nextViewId = 0;
      _freeViewIds = [];
      acquireViewId() {
        return this._freeViewIds.length > 0 ? this._freeViewIds.pop() : this._nextViewId++
      }
      releaseViewId(TT) {
        this._freeViewIds.push(TT)
      }
      activeViews = new Map;
      streamTrees = new Set;
      registerView(TT) {
        this.activeViews.set(TT.id, new WeakRef(TT))
      }
      unregisterView(TT) {
        this.activeViews.delete(TT.id);
        const oT = TT.id;
        for (const IT of this.streamTrees) IT._dropView(oT)
      }
      forEachActiveView(TT) {
        for (const [oT, IT] of this.activeViews) {
          const iT = IT.deref();
          if (void 0 !== iT) TT(iT);
          else {
            this.activeViews.delete(oT);
            for (const TT of this.streamTrees) TT._dropView(oT)
          }
        }
      }
      registerStream(TT) {
        this.streamTrees.add(TT)
      }
      unregisterStream(TT) {
        this.streamTrees.delete(TT)
      }
      constructor(TT) {
        let oT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        this.types = TT, this.nextUniqueId = oT
      }
      add(TT) {
        const oT = TT.ref;
        void 0 === oT[XT] && (Ui.value = this.nextUniqueId++, Object.defineProperty(oT, XT, Ui));
        const IT = oT[XT],
          iT = void 0 === this.changeTrees[IT];
        iT && (this.changeTrees[IT] = TT), TT.needsRestage && (TT.needsRestage = !1, TT.forEachLiveWithCtx(TT, zI));
        const zT = iT ? 0 : TT.refCount;
        return TT.refCount = zT + 1, zT > 0 && this.enqueueFilterRefresh(TT), iT
      }
      remove(TT) {
        const oT = TT.refCount - 1;
        if (oT <= 0) {
          if (TT.root = void 0, delete this.changeTrees[TT.ref[XT]], TT.isStreamCollection) {
            const oT = TT.ref;
            oT._unregister?.(), this.unregisterStream(oT)
          }
          this.removeFromQueue(TT), this.removeFromUnreliableQueue(TT), TT.refCount = 0, TT.needsRestage = !0, TT.forEachChild(((oT, IT) => {
            oT.removeParent(TT.ref) && (void 0 === oT.parentRef || oT.refCount > 0 ? this.remove(oT) : this.moveNextToParent(oT))
          }))
        } else TT.refCount = oT, this.enqueueFilterRefresh(TT), this.recursivelyMoveNextToParent(TT);
        return oT
      }
      recursivelyMoveNextToParent(TT) {
        this.moveNextToParent(TT), TT.forEachChild(((TT, oT) => this.recursivelyMoveNextToParent(TT)))
      }
      moveNextToParent(TT) {
        TT.changesNode && this._moveNextToParentInList(this.changes, TT, TT.changesNode, "changesNode"), TT.unreliableChangesNode && this._moveNextToParentInList(this.unreliableChanges, TT, TT.unreliableChangesNode, "unreliableChangesNode")
      }
      _moveNextToParentInList(TT, oT, IT, iT) {
        const zT = oT.parent;
        if (!zT || !zT[KT]) return;
        const kT = zT[KT][iT];
        kT && kT !== IT && (IT.position > kT.position || (IT.prev ? IT.prev.next = IT.next : TT.next = IT.next, IT.next ? IT.next.prev = IT.prev : TT.tail = IT.prev, IT.prev = TT.tail, IT.next = void 0, TT.tail.next = IT, TT.tail = IT, IT.position = TT.nextPosition++))
      }
      enqueueChangeTree(TT) {
        (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : TT.changesNode) || (TT.changesNode = this._appendToList(this.changes, TT))
      }
      enqueueUnreliable(TT) {
        (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : TT.unreliableChangesNode) || (TT.unreliableChangesNode = this._appendToList(this.unreliableChanges, TT))
      }
      _appendToList(TT, oT) {
        const IT = this._nodePool;
        let iT;
        return IT.length > 0 ? (iT = IT.pop(), iT.changeTree = oT, iT.next = void 0, iT.prev = void 0) : iT = {
          changeTree: oT,
          next: void 0,
          prev: void 0,
          position: 0
        }, TT.next ? (iT.prev = TT.tail, TT.tail.next = iT, TT.tail = iT) : (TT.nextPosition = 0, TT.next = iT, TT.tail = iT), iT.position = TT.nextPosition++, iT
      }
      releaseNode(TT) {
        TT.changeTree = void 0, TT.prev = void 0, TT.next = void 0, this._nodePool.push(TT)
      }
      removeFromQueue(TT) {
        return this._removeNode(this.changes, TT, TT.changesNode, "changesNode")
      }
      removeFromUnreliableQueue(TT) {
        return this._removeNode(this.unreliableChanges, TT, TT.unreliableChangesNode, "unreliableChangesNode")
      }
      _removeNode(TT, oT, IT, iT) {
        return !(!IT || IT.changeTree !== oT) && (IT.prev ? IT.prev.next = IT.next : TT.next = IT.next, IT.next ? IT.next.prev = IT.prev : TT.tail = IT.prev, oT[iT] = void 0, this.releaseNode(IT), !0)
      }
    }

    function Yi(TT, oT) {
      if (-1 === oT || oT >= TT.length) return !1;
      const IT = TT.length - 1;
      for (let iT = oT; iT < IT; iT++) TT[iT] = TT[iT + 1];
      return TT.length = IT, !0
    }

    function Qi(TT, oT, IT) {
      const iT = ~IT,
        zT = TT.changeTrees;
      for (const kT in zT) {
        const TT = zT[kT],
          IT = TT.visibleViews;
        void 0 !== IT && oT < IT.length && (IT[oT] &= iT);
        const WT = TT.subscribedViews;
        void 0 !== WT && oT < WT.length && (WT[oT] &= iT);
        const XT = TT.tagViews;
        void 0 !== XT && XT.forEach((TT => {
          oT < TT.length && (TT[oT] &= iT)
        }))
      }
    }
    const Oi = new FinalizationRegistry((TT => {
      let {
        root: oT,
        id: IT,
        slot: iT,
        bit: zT
      } = TT;
      Qi(oT, iT, zT), oT.activeViews.delete(IT);
      for (const kT of oT.streamTrees) kT._dropView(IT);
      oT.releaseViewId(IT)
    }));

    function Hi(TT) {
      if (void 0 === TT) return "undefined";
      if (null === TT) return "null";
      const oT = typeof TT;
      return "string" === oT ? JSON.stringify(TT.length > 30 ? `${TT.slice(0,30)}\u2026` : TT) : "object" !== oT && "function" !== oT ? `${oT} ${String(TT)}` : Array.isArray(TT) ? `Array(${TT.length})` : TT.constructor?.name ?? "Object"
    }
    class ni {
      iterable;
      items;
      id = -1;
      _root;
      _slot = 0;
      _bit = 0;
      changes = new Map;
      constructor() {
        let TT = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        this.iterable = TT, TT && (this.items = [])
      }
      _bindRoot(TT) {
        void 0 === this._root && (this._root = TT, this.id = TT.acquireViewId(), this._slot = this.id >> 5, this._bit = 1 << (31 & this.id), TT.registerView(this), Oi.register(this, {
          root: TT,
          id: this.id,
          slot: this._slot,
          bit: this._bit
        }, this))
      }
      dispose() {
        void 0 !== this._root && (this._root.unregisterView(this), Qi(this._root, this._slot, this._bit), this._root.releaseViewId(this.id), Oi.unregister(this), this._root = void 0, this.id = -1)
      }
      isVisible(TT) {
        const oT = TT.visibleViews,
          IT = this._slot;
        return void 0 !== oT && IT < oT.length && 0 !== (oT[IT] & this._bit)
      }
      markVisible(TT) {
        const oT = this._slot;
        let IT = TT.visibleViews;
        for (void 0 === IT && (IT = TT.visibleViews = []); IT.length <= oT;) IT.push(0);
        IT[oT] |= this._bit
      }
      unmarkVisible(TT) {
        const oT = TT.visibleViews;
        if (void 0 === oT) return;
        const IT = this._slot;
        IT < oT.length && (oT[IT] &= ~this._bit)
      }
      isSubscribed(TT) {
        const oT = TT.subscribedViews,
          IT = this._slot;
        return void 0 !== oT && IT < oT.length && 0 !== (oT[IT] & this._bit)
      }
      _setSubscribed(TT) {
        const oT = this._slot;
        let IT = TT.subscribedViews;
        for (void 0 === IT && (IT = TT.subscribedViews = []); IT.length <= oT;) IT.push(0);
        IT[oT] |= this._bit
      }
      _clearSubscribed(TT) {
        const oT = TT.subscribedViews;
        if (void 0 === oT) return;
        const IT = this._slot;
        IT < oT.length && (oT[IT] &= ~this._bit)
      }
      hasTagOnTree(TT, oT) {
        const IT = TT.tagViews;
        if (void 0 === IT) return !1;
        const iT = this._slot,
          zT = this._bit;
        for (let kT = oT; 0 !== kT; kT &= kT - 1) {
          const TT = IT.get(kT & -kT);
          if (void 0 !== TT && iT < TT.length && 0 !== (TT[iT] & zT)) return !0
        }
        return !1
      }
      addTag(TT, oT) {
        if (oT === Mi) return;
        let IT = TT.tagViews;
        void 0 === IT && (IT = TT.tagViews = new Map);
        const iT = this._slot,
          zT = this._bit;
        for (let kT = oT; kT > 0; kT &= kT - 1) {
          const TT = kT & -kT;
          let oT = IT.get(TT);
          for (void 0 === oT && (oT = [], IT.set(TT, oT)); oT.length <= iT;) oT.push(0);
          oT[iT] |= zT
        }
      }
      removeTag(TT, oT) {
        if (oT === Mi) return;
        const IT = TT.tagViews;
        if (void 0 === IT) return;
        const iT = this._slot,
          zT = ~this._bit;
        for (let kT = oT; kT > 0; kT &= kT - 1) {
          const TT = IT.get(kT & -kT);
          void 0 !== TT && iT < TT.length && (TT[iT] &= zT)
        }
      }
      removeAllTagsOnTree(TT) {
        const oT = TT.tagViews;
        if (void 0 === oT) return;
        const IT = this._slot,
          iT = ~this._bit;
        oT.forEach((TT => {
          IT < TT.length && (TT[IT] &= iT)
        }))
      }
      add(TT) {
        let oT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Mi,
          IT = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        return this._add(TT, oT, IT, !1)
      }
      _addImmediate(TT) {
        let oT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Mi;
        this._add(TT, oT, !0, !0)
      }
      _add(TT, oT, IT, iT) {
        const kT = TT?.[KT];
        if (!kT) return console.warn(`StateView#add(): expected a Schema instance or collection, received ${Hi(TT)}`), !1;
        const WT = kT.parent;
        if (!WT && 0 !== TT[XT]) throw new Error(`Cannot add a detached instance to the StateView. Make sure to assign the "${kT.ref.constructor.name}" instance to the state before calling view.add()`);
        void 0 === this._root && void 0 !== kT.root && this._bindRoot(kT.root);
        const BT = WT?.[KT];
        if (!iT && BT?.isStreamCollection) return Jo(WT, this.id, kT.parentIndex), !0;
        const FT = TT.constructor[Symbol.metadata],
          ST = this.isVisible(kT);
        if (!this.iterable || !IT || ST && -1 !== this.items.indexOf(TT) || this.items.push(TT), this.markVisible(kT), IT && WT && this.addParentOf(kT, oT), !iT && kT.isStreamCollection) return !0;
        if (oT === Mi && kT.isNew) return this._markSubtreeVisible(kT, oT), !1;
        let DT = this.changes.get(TT[XT]);
        void 0 === DT && (DT = new Map, this.changes.set(TT[XT], DT));
        let LT = !1;
        const xT = kT.encDescriptor.tags;
        if (kT.forEachChild(((TT, IT) => {
            const iT = xT[IT];
            if (void 0 !== iT) {
              if (!(iT === Mi || oT !== Mi && 0 !== (iT & oT))) return
            }
            this.add(TT.ref, oT, !1) && (LT = !0)
          })), oT !== Mi) {
          this.addTag(kT, oT);
          const TT = FT?.[CT];
          if (void 0 !== TT)
            for (let IT = oT; IT > 0; IT &= IT - 1) TT[IT & -IT]?.forEach((TT => {
              kT.getChange(TT) !== zT.DELETE && DT.set(TT, zT.ADD)
            }))
        }
        if ((oT === Mi || !ST) && (!kT.isNew || LT))
          if (kT.isArray && "string" !== typeof kT.refTarget[MT]) kT.refTarget.items.length > 0 && (DT.set(-1, zT.ADD), LT = !0);
          else {
            const TT = kT.encDescriptor.tags;
            kT.forEachLive((IT => {
              const iT = TT[IT];
              (void 0 === iT || iT === Mi || oT !== Mi && 0 !== (iT & oT)) && (DT.set(IT, zT.ADD), LT = !0)
            }))
          } return LT
      }
      _markSubtreeVisible(TT, oT) {
        const IT = TT.encDescriptor.tags;
        TT.forEachChild(((TT, iT) => {
          const zT = IT[iT];
          if (void 0 !== zT) {
            if (!(zT === Mi || oT !== Mi && 0 !== (zT & oT))) return
          }
          TT.isNew ? (this.markVisible(TT), this._markSubtreeVisible(TT, oT)) : this._add(TT.ref, oT, !1, !1)
        }))
      }
      addParentOf(TT, oT) {
        const IT = TT.parent[KT],
          iT = TT.parentIndex;
        this.isVisible(IT) || this.markVisible(IT);
        const kT = IT.parent?.[KT];
        if (kT && this.addParentOf(IT, oT), IT.hasFilteredFields && IT.getChange(iT) !== zT.DELETE) {
          let kT = this.changes.get(IT.ref[XT]);
          void 0 === kT && (kT = new Map, this.changes.set(IT.ref[XT], kT));
          const WT = IT.encDescriptor.tags[iT];
          void 0 !== WT && WT !== Mi && 0 !== (WT & oT) && this.addTag(IT, oT), kT.set(IT.isArray ? TT : iT, zT.ADD)
        }
      }
      _touchAncestorsOf(TT) {
        let oT = TT.parent?.[KT];
        if (void 0 === oT) return;
        const IT = [];
        for (; void 0 !== oT;) {
          if (oT.hasFilteredFields) {
            const TT = oT.ref[XT];
            if (this.changes.has(TT)) break;
            IT.push(oT)
          }
          oT = oT.parent?.[KT]
        }
        for (let iT = IT.length - 1; iT >= 0; iT--) this.changes.set(IT[iT].ref[XT], new Map)
      }
      remove(TT) {
        let oT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Mi,
          IT = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        const iT = TT?.[KT];
        if (!iT) return console.warn(`StateView#remove(): expected a Schema instance or collection, received ${Hi(TT)}`), this;
        const kT = iT.parent?.[KT];
        if (kT?.isStreamCollection) return this.unmarkVisible(iT), this.iterable && !IT && Yi(this.items, this.items.indexOf(TT)),
          function(TT, oT, IT, iT, kT) {
            const WT = TT._stream;
            if (void 0 === WT) return !1;
            const XT = WT.pendingByView.get(oT);
            if (XT?.has(iT)) return XT.delete(iT), !1;
            const BT = WT.sentByView.get(oT);
            if (BT?.has(iT)) {
              BT.delete(iT);
              let TT = kT.get(IT);
              return void 0 === TT && (TT = new Map, kT.set(IT, TT)), TT.set(iT, zT.DELETE), !0
            }
          }(iT.parent, this.id, iT.parent[XT], iT.parentIndex, this.changes), this._recursiveDeleteVisibleChangeTree(iT), this;
        if (iT.isStreamCollection) {
          this.unmarkVisible(iT), this.iterable && !IT && Yi(this.items, this.items.indexOf(TT));
          const oT = iT.ref,
            kT = oT._stream;
          if (void 0 !== kT) {
            kT.pendingByView.get(this.id)?.clear();
            const TT = kT.sentByView.get(this.id);
            if (void 0 !== TT && TT.size > 0) {
              const IT = oT[XT];
              let iT = this.changes.get(IT);
              void 0 === iT && (iT = new Map, this.changes.set(IT, iT));
              for (const oT of TT) iT.set(oT, zT.DELETE);
              TT.clear()
            }
          }
          return this
        }
        this.unmarkVisible(iT), this.iterable && !IT && Yi(this.items, this.items.indexOf(TT));
        const WT = iT.ref,
          BT = WT.constructor[Symbol.metadata],
          FT = WT[XT];
        this._touchAncestorsOf(iT);
        let ST = this.changes.get(FT);
        if (void 0 === ST && (ST = new Map, this.changes.set(FT, ST)), oT === Mi) {
          const TT = iT.parent;
          if (TT && !yo.isValidInstance(TT) && iT.isFiltered) {
            const oT = kT.isArray ? iT : iT.parentIndex,
              IT = TT[XT];
            let WT = this.changes.get(IT);
            void 0 === WT ? (WT = new Map, this.changes.set(IT, WT)) : WT.get(oT) === zT.ADD && this._dropPendingEntries(iT), WT.set(oT, zT.DELETE), this._recursiveDeleteVisibleChangeTree(iT)
          } else BT?.[fT]?.forEach((TT => this._removeViewField(iT, ST, TT)))
        } else {
          const TT = BT?.[CT];
          if (void 0 !== TT)
            for (let IT = oT; IT > 0; IT &= IT - 1) TT[IT & -IT]?.forEach((TT => this._removeViewField(iT, ST, TT)))
        }
        return void 0 === oT ? this.removeAllTagsOnTree(iT) : this.removeTag(iT, oT), this
      }
      has(TT) {
        return this.isVisible(TT[KT])
      }
      hasTag(TT) {
        let oT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Mi;
        return this.hasTagOnTree(TT[KT], oT)
      }
      subscribe(TT, oT) {
        const IT = TT?.[KT];
        if (!IT) return console.warn(`StateView#subscribe(): expected a Schema collection, received ${Hi(TT)}`), this;
        if (void 0 === this._root && void 0 !== IT.root && this._bindRoot(IT.root), void 0 !== oT)
          if (IT.isStreamCollection) {
            const IT = vo(TT);
            null === oT ? IT.priorityByView?.delete(this.id) : (IT.priorityByView ??= new Map).set(this.id, oT)
          } else {
            const oT = TT?.constructor?.name ?? "collection",
              iT = IT.parent;
            if (void 0 === iT) console.warn(`StateView#subscribe(): \`priority\` ignored \u2014 this ${oT} is not attached to a state yet, so it cannot be identified as a stream. Subscribe after assigning it to the state.`);
            else {
              const TT = iT?.constructor?.[Symbol.metadata]?.[IT.parentIndex]?.name,
                zT = TT ? `${iT.constructor.name}#${TT}` : oT;
              console.warn(`StateView#subscribe(): \`priority\` ignored \u2014 ${zT} is a ${oT}, not a streaming collection. Declare the field with .stream() (e.g. t.map(X).stream()) or use t.stream(X) to enable priority batching.`)
            }
          } if (this.isSubscribed(IT)) return this;
        const iT = void 0 !== IT.parent && !this.isVisible(IT);
        if (iT ? (this.addParentOf(IT, Mi), this._add(TT, Mi, !1, !1)) : this.markVisible(IT), this._setSubscribed(IT), IT.isStreamCollection) {
          const oT = TT;
          IT.forEachChild(((TT, IT) => {
            Jo(oT, this.id, IT)
          }))
        } else iT || IT.forEachChild((TT => {
          this.markVisible(TT)
        }));
        return this
      }
      unsubscribe(TT) {
        const oT = TT?.[KT];
        if (!oT) return console.warn(`StateView#unsubscribe(): expected a Schema collection, received ${Hi(TT)}`), this;
        if (!this.isSubscribed(oT)) return this;
        this._clearSubscribed(oT);
        const IT = oT.ref[XT];
        if (oT.isStreamCollection) {
          const oT = TT._stream;
          if (void 0 !== oT) {
            oT.pendingByView.get(this.id)?.clear();
            const TT = oT.sentByView.get(this.id);
            if (void 0 !== TT && TT.size > 0) {
              let oT = this.changes.get(IT);
              void 0 === oT && (oT = new Map, this.changes.set(IT, oT));
              for (const IT of TT) oT.set(IT, zT.DELETE);
              TT.clear()
            }
          }
        } else {
          const TT = oT.isArray;
          let iT = this.changes.get(IT);
          oT.forEachChild(((oT, kT) => {
            void 0 === iT && (iT = new Map, this.changes.set(IT, iT)), iT.set(TT ? oT : kT, zT.DELETE), this.unmarkVisible(oT)
          }))
        }
        return this.unmarkVisible(oT), this
      }
      clear() {
        if (!this.iterable) throw new Error("StateView#clear() is only available for iterable StateView's. Use StateView(iterable: true) constructor.");
        for (let TT = 0, oT = this.items.length; TT < oT; TT++) this.remove(this.items[TT], Mi, !0);
        this.items.length = 0
      }
      isChangeTreeVisible(TT) {
        let oT = this.isVisible(TT);
        if (!oT && TT.isVisibilitySharedWithParent)
          if (this.isVisible(TT.parent[KT])) this.markVisible(TT), oT = !0;
          else
            for (let IT = TT.extraParents; void 0 !== IT; IT = IT.next) {
              const iT = IT.ref[KT];
              if (iT.isFiltered && this.isVisible(iT)) {
                this.markVisible(TT), oT = !0;
                break
              }
            }
        return oT
      }
      _recursiveDeleteVisibleChangeTree(TT) {
        TT.forEachChild((TT => {
          this.unmarkVisible(TT), this._recursiveDeleteVisibleChangeTree(TT)
        }))
      }
      _dropPendingEntries(TT) {
        this.changes.delete(TT.ref[XT]), TT.forEachChild((TT => this._dropPendingEntries(TT)))
      }
      _removeViewField(TT, oT, IT) {
        const iT = oT.get(IT) === zT.ADD;
        oT.set(IT, zT.DELETE);
        const kT = TT.ref[TT.encDescriptor.names[IT]],
          WT = kT?.[KT];
        WT && (this.unmarkVisible(WT), this._recursiveDeleteVisibleChangeTree(WT), iT && this._dropPendingEntries(WT))
      }
    }

    function qi(TT) {
      TT.structSwitchEmitted || (TT.shouldEmitSwitch && (TT.buffer[TT.it.offset++] = 255, oo.number(TT.buffer, TT.ref[XT], TT.it)), TT.structSwitchEmitted = !0)
    }

    function Zi(TT, oT) {
      ti(TT, oT, zT.ADD)
    }

    function li(TT, oT) {
      if (oT._fullSyncGen === TT.gen) return;
      oT._fullSyncGen = TT.gen;
      if (!TT.hasView || TT.view.isChangeTreeVisible(oT)) {
        const IT = oT.encDescriptor;
        TT.changeTree = oT, TT.ref = oT.ref, TT.encoder = IT.encoder, TT.filter = IT.filter, TT.metadata = IT.metadata, TT.treeIsFiltered = oT.isFiltered, TT.isSchema = IT.isSchema, TT.filterBitmask = IT.filterBitmask, TT.tags = IT.tags, TT.structSwitchEmitted = !1, TT.shouldEmitSwitch = TT.hasView || TT.it.offset > TT.initialOffset || oT !== TT.rootChangeTree, oT.isArray && oT.collDirty.size > 0 && (oT.flags |= 512), WI(oT, TT, Zi)
      }
      gI(oT, TT, si)
    }

    function si(TT, oT, IT) {
      li(TT, oT)
    }

    function ti(TT, oT, IT) {
      if (oT < 0) {
        if (TT.treeIsFiltered !== TT.emitFiltered) return;
        return qi(TT), void(TT.buffer[TT.it.offset++] = 255 & Math.abs(oT))
      }
      if ((TT.isSchema ? TT.treeIsFiltered || (oT < 32 ? 0 !== (TT.filterBitmask & 1 << oT) : void 0 !== TT.tags[oT]) : TT.treeIsFiltered) !== TT.emitFiltered) return;
      const iT = TT.isEncodeAll ? zT.ADD : IT;
      void 0 !== iT && (void 0 === TT.filter || TT.filter(TT.ref, oT, TT.view)) && (qi(TT), TT.encoder(TT.self, TT.buffer, TT.changeTree, oT, iT, TT.it, TT.isEncodeAll, TT.hasView, TT.metadata))
    }

    function Gi(TT, oT) {
      const IT = new Uint8Array(TT.length + oT.length);
      return IT.set(TT, 0), IT.set(oT, TT.length), IT
    }
    class bi {
      static BUFFER_SIZE = 16384;
      sharedBuffer = new Uint8Array(bi.BUFFER_SIZE);
      context;
      state;
      root;
      constructor(TT, oT) {
        this.context = qo.cache(TT.constructor), this.root = oT ?? new ai(this.context), this.setState(TT)
      }
      setState(TT) {
        this.state = TT, this.state[KT].setRoot(this.root)
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
        let TT = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
            offset: 0
          },
          oT = arguments.length > 1 ? arguments[1] : void 0,
          IT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : this.sharedBuffer,
          iT = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : TT.offset;
        return this._encodeChannel(TT, oT, IT, iT, !1)
      }
      encodeUnreliable() {
        let TT = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
            offset: 0
          },
          oT = arguments.length > 1 ? arguments[1] : void 0,
          IT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : this.sharedBuffer,
          iT = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : TT.offset;
        return this._encodeChannel(TT, oT, IT, iT, !0)
      }
      _encodeChannel(TT, oT, IT, iT, zT) {
        this.root.pendingFilterRefresh.length > 0 && BI(this.root);
        const kT = void 0 !== oT,
          WT = this.state[KT],
          XT = this._encodeCtx;
        XT.self = this, XT.buffer = IT, XT.it = TT, XT.view = oT, XT.isEncodeAll = !1, XT.hasView = kT, XT.emitFiltered = kT;
        let BT = zT ? this.root.unreliableChanges : this.root.changes;
        for (; BT = BT.next;) {
          const IT = BT.changeTree;
          if (kT && !oT.isChangeTreeVisible(IT)) continue;
          const FT = zT ? IT.unreliableRecorder : IT;
          if (!FT || !FT.has()) continue;
          const ST = IT.encDescriptor;
          XT.changeTree = IT, XT.ref = IT.ref, XT.encoder = ST.encoder, XT.filter = ST.filter, XT.metadata = ST.metadata, XT.treeIsFiltered = IT.isFiltered, XT.isSchema = ST.isSchema, XT.filterBitmask = ST.filterBitmask, XT.tags = ST.tags, XT.structSwitchEmitted = !1, XT.isRootTree = IT === WT, XT.shouldEmitSwitch = kT || TT.offset > iT || !XT.isRootTree, FT.forEachWithCtx(XT, ti)
        }
        return zT || kT || !this._isStreamBroadcastMode || this._emitStreamBroadcast(IT, TT), TT.offset > IT.byteLength ? (IT = this._resizeBuffer(IT, TT.offset), TT.offset = iT, this._encodeChannel(TT, oT, IT, iT, zT)) : IT.subarray(0, TT.offset)
      }
      encodeFullSync(TT, oT, IT, iT) {
        let zT = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : TT.offset;
        this.root.pendingFilterRefresh.length > 0 && BI(this.root);
        const kT = void 0 !== iT,
          WT = this.state[KT],
          XT = this._encodeCtx;
        return XT.self = this, XT.buffer = oT, XT.it = TT, XT.view = iT, XT.isEncodeAll = !0, XT.hasView = kT, XT.emitFiltered = IT, XT.gen = ++this._fullSyncGen, XT.initialOffset = zT, XT.rootChangeTree = WT, li(XT, WT), TT.offset > oT.byteLength ? (oT = this._resizeBuffer(oT, TT.offset), TT.offset = zT, this.encodeFullSync(TT, oT, IT, iT, zT)) : oT.subarray(0, TT.offset)
      }
      _resizeBuffer(TT, oT) {
        const IT = Math.ceil(oT / bi.BUFFER_SIZE) * bi.BUFFER_SIZE,
          iT = new Uint8Array(IT);
        return iT.set(TT), TT === this.sharedBuffer && (this.sharedBuffer = iT), iT
      }
      encodeAll() {
        let TT = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
            offset: 0
          },
          oT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.sharedBuffer;
        return this.encodeFullSync(TT, oT, !1)
      }
      encodeAllView(TT, oT, IT) {
        let iT = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : this.sharedBuffer;
        const zT = IT.offset;
        return iT = this.encodeFullSync(IT, iT, !0, TT, zT), Gi(iT.subarray(0, oT), iT.subarray(zT, IT.offset))
      }
      ensureCapacity(TT, oT) {
        if (oT + bi.BUFFER_SIZE <= TT.byteLength) return TT;
        const IT = Math.ceil((oT + bi.BUFFER_SIZE) / bi.BUFFER_SIZE) * bi.BUFFER_SIZE,
          iT = new Uint8Array(IT);
        return iT.set(TT.subarray(0, oT)), TT === this.sharedBuffer && (this.sharedBuffer = iT), iT
      }
      encodeView(TT, oT, IT) {
        let iT = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : this.sharedBuffer,
          kT = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4];
        const WT = IT.offset;
        this._emitStreamPriority(TT);
        for (const BT of TT.changes.keys()) {
          const oT = TT.changes.get(BT),
            kT = this.root.changeTrees[BT];
          if (void 0 === kT) {
            TT.changes.delete(BT);
            continue
          }
          if (0 === oT.size) continue;
          const WT = kT.encDescriptor,
            FT = WT.encoder,
            ST = WT.metadata,
            DT = kT.ref,
            xT = kT.refTarget;
          iT = this.ensureCapacity(iT, IT.offset), iT[IT.offset++] = 255, oo.number(iT, DT[XT], IT);
          for (const [BT, cT] of oT) {
            let oT;
            if (-1 === BT) {
              const TT = xT.tmpItems,
                oT = xT.deletedIndexes;
              for (let WT = 0; WT < TT.length; WT++) void 0 !== TT[WT] && !0 !== oT[WT] && FT(this, iT, kT, WT, zT.ADD, IT, !1, !0, ST);
              continue
            }
            if ("number" === typeof BT) oT = BT;
            else {
              const IT = BT.indexInParent(DT);
              if (void 0 === IT) continue;
              if (oT = IT, cT === zT.ADD && kT.getChange(oT) === zT.DELETE) {
                TT.changes.delete(BT.ref[XT]);
                continue
              }
            }
            FT(this, iT, kT, oT, void 0 !== xT[LT](oT) && cT || zT.DELETE, IT, !1, !0, ST)
          }
        }
        return TT.changes.clear(), iT = this.encode(IT, TT, iT), kT ? Gi(iT.subarray(0, oT), iT.subarray(WT, IT.offset)) : iT.subarray(WT, IT.offset)
      }
      encodeUnreliableView(TT, oT, IT) {
        let iT = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : this.sharedBuffer;
        const zT = IT.offset;
        return iT = this.encodeUnreliable(IT, TT, iT, zT), Gi(iT.subarray(0, oT), iT.subarray(zT, IT.offset))
      }
      _emitStreamBroadcast(TT, oT) {
        const IT = this.root.streamTrees;
        for (const iT of IT) {
          const IT = iT,
            kT = IT[KT],
            WT = IT[XT];
          if (void 0 === WT) continue;
          const BT = IT._stream,
            FT = BT.broadcastDeletes,
            ST = BT.broadcastPending,
            DT = BT.sentBroadcast,
            xT = FT.size > 0,
            cT = ST.size > 0,
            MT = kT.encDescriptor,
            rT = MT.encoder,
            AT = MT.metadata;
          if (xT || cT) {
            if (TT[oT.offset++] = 255, oo.number(TT, WT, oT), xT) {
              for (const IT of FT) rT(this, TT, kT, IT, zT.DELETE, oT, !1, !1, AT);
              FT.clear()
            }
            const iT = BT.maxPerTick,
              cT = [];
            let MT = 0;
            const gT = [];
            for (const WT of ST) {
              if (MT >= iT) break;
              const XT = IT[LT](WT);
              void 0 !== XT ? (rT(this, TT, kT, WT, zT.ADD, oT, !1, !1, AT), DT.add(WT), cT.push(XT), gT.push(WT), MT++) : gT.push(WT)
            }
            for (const TT of gT) ST.delete(TT);
            for (const IT of cT) {
              const iT = IT[KT];
              if (void 0 === iT) continue;
              const kT = IT[XT];
              if (void 0 === kT) continue;
              TT[oT.offset++] = 255, oo.number(TT, kT, oT);
              const WT = iT.encDescriptor,
                BT = WT.encoder,
                FT = WT.metadata;
              iT.forEachLive((IT => {
                yo.hasUnreliableAtIndex(FT, IT) || BT(this, TT, iT, IT, zT.ADD, oT, !1, !1, FT)
              }))
            }
          }
          for (const iT of DT) {
            const zT = IT[LT](iT);
            if (void 0 === zT) continue;
            const kT = zT[KT];
            if (void 0 === kT || !kT.has()) continue;
            const WT = zT[XT];
            if (void 0 === WT) continue;
            TT[oT.offset++] = 255, oo.number(TT, WT, oT);
            const BT = kT.encDescriptor,
              FT = BT.encoder,
              ST = BT.metadata;
            kT.forEach(((IT, iT) => {
              IT < 0 || yo.hasUnreliableAtIndex(ST, IT) || FT(this, TT, kT, IT, iT, oT, !1, !1, ST)
            }))
          }
        }
      }
      _emitStreamPriority(TT) {
        const oT = this.root.streamTrees;
        if (0 === oT.size) return;
        const IT = TT.id;
        for (const iT of oT) {
          const oT = iT,
            kT = oT._stream,
            WT = kT.pendingByView.get(IT);
          if (void 0 === WT || 0 === WT.size) continue;
          const BT = kT.priorityByView?.get(IT),
            FT = void 0 !== BT,
            ST = kT.priority,
            DT = kT.maxPerTick,
            xT = [],
            cT = [];
          if (FT || void 0 !== ST) {
            const IT = [],
              iT = [];
            let zT = 0;
            for (const kT of WT) {
              const WT = oT[LT](kT);
              if (void 0 === WT) {
                cT.push(kT);
                continue
              }
              const XT = FT ? BT(WT) : ST(TT, WT);
              if (zT < DT) {
                let TT = zT++;
                for (; TT > 0 && iT[TT - 1] < XT;) iT[TT] = iT[TT - 1], IT[TT] = IT[TT - 1], TT--;
                iT[TT] = XT, IT[TT] = kT
              } else if (XT > iT[DT - 1]) {
                let TT = DT - 1;
                for (; TT > 0 && iT[TT - 1] < XT;) iT[TT] = iT[TT - 1], IT[TT] = IT[TT - 1], TT--;
                iT[TT] = XT, IT[TT] = kT
              }
            }
            for (let TT = 0; TT < zT; TT++) xT.push(IT[TT])
          } else
            for (const TT of WT) {
              if (xT.length >= DT) break;
              xT.push(TT)
            }
          for (const TT of cT) WT.delete(TT);
          const MT = xT.length;
          let rT = kT.sentByView.get(IT);
          void 0 === rT && (rT = new Set, kT.sentByView.set(IT, rT));
          for (let IT = 0; IT < MT; IT++) {
            const iT = xT[IT],
              kT = oT[LT](iT);
            if (void 0 === kT) {
              WT.delete(iT);
              continue
            }
            TT._addImmediate(kT);
            const BT = kT[KT];
            if (void 0 !== BT) {
              const oT = kT[XT];
              let IT = TT.changes.get(oT);
              void 0 === IT && (IT = new Map, TT.changes.set(oT, IT));
              const iT = BT.metadata;
              BT.forEachLive((TT => {
                yo.hasUnreliableAtIndex(iT, TT) || IT.set(TT, zT.ADD)
              }))
            }
            WT.delete(iT), rT.add(iT)
          }
        }
      }
      discardChanges() {
        const TT = this.root.changes;
        let oT = TT.next;
        const IT = this.root;
        for (; oT;) {
          const TT = oT.next;
          oT.changeTree.endEncode(), IT.releaseNode(oT), oT = TT
        }
        TT.next = void 0, TT.tail = void 0
      }
      discardUnreliableChanges() {
        const TT = this.root.unreliableChanges;
        let oT = TT.next;
        const IT = this.root;
        for (; oT;) {
          const TT = oT.next;
          oT.changeTree.endEncodeUnreliable(), IT.releaseNode(oT), oT = TT
        }
        TT.next = void 0, TT.tail = void 0
      }
      tryEncodeTypeId(TT, oT, IT, iT) {
        const zT = this.context.getTypeId(oT),
          kT = this.context.getTypeId(IT);
        void 0 !== kT ? zT !== kT && (TT[iT.offset++] = 213, oo.number(TT, kT, iT)) : console.warn(`@colyseus/schema WARNING: Class "${IT.name}" is not registered on TypeRegistry - Please either tag the class with @entity or define a @type() field.`)
      }
      get hasChanges() {
        return void 0 !== this.root.changes.next || this._hasStreamBacklog()
      }
      get _isStreamBroadcastMode() {
        return 0 === this.root.activeViews.size && this.root.streamTrees.size > 0
      }
      _hasStreamBacklog() {
        const TT = this.root;
        if (0 === TT.streamTrees.size) return !1;
        const oT = 0 === TT.activeViews.size;
        for (const IT of TT.streamTrees)
          if (oT ? jo(IT) : Co(IT, TT)) return !0;
        return !1
      }
      get hasUnreliableChanges() {
        return void 0 !== this.root.unreliableChanges.next
      }
    }
    class yi extends Error {
      constructor(TT) {
        super(TT), this.name = "DecodingWarning"
      }
    }
    const Ni = {
      value: 0,
      enumerable: !1,
      writable: !0
    };
    class Pi {
      refs = new Map;
      refCount = {};
      deletedRefs = new Set;
      callbacks = {};
      nextUniqueId = 0;
      getNextUniqueId() {
        return this.nextUniqueId++
      }
      addRef(TT, oT) {
        let IT = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        this.refs.set(TT, oT), void 0 === oT[XT] ? (Ni.value = TT, Object.defineProperty(oT, XT, Ni)) : oT[XT] !== TT && (oT[XT] = TT), IT && (this.refCount[TT] = (this.refCount[TT] || 0) + 1), this.deletedRefs.has(TT) && this.deletedRefs.delete(TT)
      }
      removeRef(TT) {
        const oT = this.refCount[TT];
        if (void 0 !== oT)
          if (0 !== oT)(this.refCount[TT] = oT - 1) <= 0 && this.deletedRefs.add(TT);
          else try {
            const oT = this.refs.get(TT);
            throw new yi(`trying to remove refId '${TT}' with 0 refCount (${oT.constructor.name}: ${JSON.stringify(oT)})`)
          } catch (Fz) {
            console.warn(Fz)
          } else try {
            throw new yi("trying to remove refId that doesn't exist: " + TT)
          } catch (Fz) {
            console.warn(Fz)
          }
      }
      clearRefs() {
        this.refs.clear(), this.deletedRefs.clear(), this.callbacks = {}, this.refCount = {}
      }
      garbageCollectDeletedRefs() {
        this.deletedRefs.forEach((TT => {
          if (this.refCount[TT] > 0) return;
          const oT = this.refs.get(TT),
            IT = oT.constructor[Symbol.metadata];
          if (null != IT)
            for (const iT in IT) {
              const TT = oT[IT[iT].name];
              if ("object" === typeof TT && TT) {
                const oT = TT[XT];
                void 0 === oT || this.deletedRefs.has(oT) || this.removeRef(oT)
              }
            } else "function" === typeof oT[MT] && Array.from(oT.values()).forEach((TT => {
              const oT = TT[XT];
              void 0 === oT || this.deletedRefs.has(oT) || this.removeRef(oT)
            }));
          this.refs.delete(TT), delete this.refCount[TT], delete this.callbacks[TT]
        })), this.deletedRefs.clear()
      }
      addCallback(TT, oT, IT) {
        if (void 0 === TT) {
          const TT = "number" === typeof oT ? zT[oT] : oT;
          throw new Error(`Can't addCallback on '${TT}' (refId is undefined)`)
        }
        return this.callbacks[TT] || (this.callbacks[TT] = {}), this.callbacks[TT][oT] || (this.callbacks[TT][oT] = []), this.callbacks[TT][oT].push(IT), () => this.removeCallback(TT, oT, IT)
      }
      removeCallback(TT, oT, IT) {
        const iT = this.callbacks?.[TT]?.[oT]?.indexOf(IT);
        void 0 !== iT && -1 !== iT && Yi(this.callbacks[TT][oT], iT)
      }
    }
    class di {
      context;
      state;
      root;
      currentRefId = 0;
      YC;
      resyncVisited = null;
      resyncDamaged = !1;
      constructor(TT, oT) {
        this.setState(TT), this.context = oT || new qo(TT.constructor)
      }
      setState(TT) {
        this.state = TT, this.root = new Pi, this.root.addRef(0, TT)
      }
      decode(TT) {
        let oT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
            offset: 0
          },
          IT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : this.state;
        const zT = void 0 !== this.YC ? [] : null,
          kT = this.root,
          WT = TT.byteLength;
        let XT = IT.constructor[ST];
        for (this.currentRefId = 0; oT.offset < WT;) {
          if (TT[oT.offset] == iT) {
            oT.offset++, IT[hT]?.();
            const iT = go.number(TT, oT),
              zT = kT.refs.get(iT);
            zT ? (IT = zT, XT = IT.constructor[ST], this.currentRefId = iT) : (console.error(`"refId" not found: ${iT}`, {
              previousRef: IT,
              previousRefId: this.currentRefId
            }), console.warn("Please report this issue to the developers."), this.skipCurrentStructure(TT, oT, WT));
            continue
          } - 1 !== XT(this, TT, oT, IT, zT) || (console.warn("@colyseus/schema: definition mismatch"), this.skipCurrentStructure(TT, oT, WT))
        }
        return IT[hT]?.(), null !== this.resyncVisited && function(TT, oT) {
          TT.resyncDamaged ? console.warn("@colyseus/schema: resync sweep skipped \u2014 parts of the payload could not be decoded. Stale entries may persist until the next resync.") : lI(TT, TT.state, new Set, oT)
        }(this, zT), null !== zT && this.YC?.(zT), kT.garbageCollectDeletedRefs(), zT
      }
      decodeResync(TT) {
        let oT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
          offset: 0
        };
        this.resyncVisited = new Map, this.resyncDamaged = !1;
        try {
          return this.decode(TT, oT)
        } finally {
          this.resyncVisited = null
        }
      }
      skipCurrentStructure(TT, oT, IT) {
        null !== this.resyncVisited && (this.resyncDamaged = !0);
        const zT = {
          offset: oT.offset
        };
        for (; oT.offset < IT && (TT[oT.offset] !== iT || (zT.offset = oT.offset + 1, !this.root.refs.has(go.number(TT, zT))));) oT.offset++
      }
      getInstanceType(TT, oT, IT) {
        let iT;
        if (213 === TT[oT.offset]) {
          oT.offset++;
          const IT = go.number(TT, oT);
          iT = this.context.get(IT)
        }
        return iT || IT
      }
      createInstanceOfType(TT) {
        return TT.initializeForDecoder()
      }
      removeChildRefs(TT, oT) {
        const IT = "string" !== typeof TT[MT],
          iT = TT[XT];
        TT.forEach(((kT, WT) => {
          oT?.push({
            ref: TT,
            refId: iT,
            op: zT.DELETE,
            field: WT,
            value: void 0,
            previousValue: kT
          }), IT && this.root.removeRef(kT[XT])
        }))
      }
    }
    const Vi = Ci({
        min: Ki.float64(),
        max: Ki.float64(),
        bits: Ki.uint8(),
        mode: Ki.uint8()
      }, "QuantizedDescriptor"),
      Tz = Ci({
        name: Ki.string(),
        type: Ki.string(),
        referencedType: Ki.number(),
        childPrimitive: Ki.string(),
        quantized: Ki.ref(Vi).optional()
      }, "ReflectionField"),
      oz = Ci({
        id: Ki.number(),
        extendsId: Ki.number(),
        fields: Ki.array(Tz)
      }, "ReflectionType"),
      Iz = Ci({
        types: Ki.array(oz),
        rootType: Ki.number()
      }, "Reflection");

    function iz(TT) {
      const oT = TT.root,
        IT = oT.callbacks,
        iT = new WeakMap;
      let kT;

      function WT(TT, IT) {
        let FT = IT.instance?.constructor[Symbol.metadata] || TT,
          ST = IT.instance && "function" === typeof IT.instance.forEach || TT && !Ji.is(TT);
        if (FT && !ST) {
          const TT = function(TT, zT, WT, BT) {
            return BT && void 0 !== IT.instance[zT] && !iT.has(kT) && WT(IT.instance[zT], void 0), oT.addCallback(TT[XT], zT, WT)
          };
          return new Proxy({
            listen: function(oT, zT) {
              let WT = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
              if (IT.instance) return TT(IT.instance, oT, zT, WT);
              {
                let XT = () => {};
                return IT.onInstanceAvailable(((IT, BT) => {
                  XT = TT(IT, oT, zT, WT && BT && !iT.has(kT))
                })), () => XT()
              }
            },
            onChange: function(TT) {
              return oT.addCallback(IT.instance[XT], zT.REPLACE, TT)
            },
            bindTo: function(TT, iT) {
              return iT || (iT = Object.keys(FT).map((TT => FT[TT].name))), oT.addCallback(IT.instance[XT], zT.REPLACE, (() => {
                iT.forEach((oT => TT[oT] = IT.instance[oT]))
              }))
            }
          }, {
            get(TT, oT) {
              const iT = FT[FT[oT]];
              if (iT) {
                const TT = IT.instance?.[oT],
                  zT = iT => {
                    const zT = BT(IT.instance).listen(oT, ((TT, oT) => {
                      iT(TT, !1), zT?.()
                    }), !1);
                    void 0 !== TT?.[XT] && iT(TT, !0)
                  };
                return WT(iT.type, {
                  instance: void 0 !== TT?.[XT] && TT,
                  parentInstance: IT.instance,
                  onInstanceAvailable: zT
                })
              }
              return TT[oT]
            },
            has: (TT, oT) => void 0 !== FT[oT],
            set(TT, oT, IT) {
              throw new Error("not allowed")
            },
            deleteProperty(TT, oT) {
              throw new Error("not allowed")
            }
          })
        } {
          const TT = function(TT, IT, WT) {
              return WT && TT.forEach(((TT, oT) => IT(TT, oT))), oT.addCallback(TT[XT], zT.ADD, ((TT, oT) => {
                iT.set(IT, !0), kT = IT, IT(TT, oT), iT.delete(IT), kT = void 0
              }))
            },
            WT = function(TT, IT) {
              return oT.addCallback(TT[XT], zT.DELETE, IT)
            },
            BT = function(TT, IT) {
              return oT.addCallback(TT[XT], zT.REPLACE, IT)
            };
          return new Proxy({
            Om: function(oT) {
              let zT = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
              if (IT.instance) return TT(IT.instance, oT, zT && !iT.has(kT));
              if (IT.onInstanceAvailable) {
                let WT = () => {};
                return IT.onInstanceAvailable(((IT, XT) => {
                  WT = TT(IT, oT, zT && XT && !iT.has(kT))
                })), () => WT()
              }
            },
            zC: function(TT) {
              if (IT.instance) return WT(IT.instance, TT);
              if (IT.onInstanceAvailable) {
                let oT = () => {};
                return IT.onInstanceAvailable((IT => {
                  oT = WT(IT, TT)
                })), () => oT()
              }
            },
            onChange: function(TT) {
              if (IT.instance) return BT(IT.instance, TT);
              if (IT.onInstanceAvailable) {
                let oT = () => {};
                return IT.onInstanceAvailable((IT => {
                  oT = BT(IT, TT)
                })), () => oT()
              }
            }
          }, {
            get(TT, oT) {
              if (!TT[oT]) throw new Error(`Can't access '${oT}' through callback proxy. access the instance directly.`);
              return TT[oT]
            },
            has: (TT, oT) => void 0 !== TT[oT],
            set(TT, oT, IT) {
              throw new Error("not allowed")
            },
            deleteProperty(TT, oT) {
              throw new Error("not allowed")
            }
          })
        }
      }

      function BT(TT) {
        return WT(void 0, {
          instance: TT
        })
      }
      return TT.YC = function(TT) {
        const oT = new Set;
        for (let iT = 0, kT = TT.length; iT < kT; iT++) {
          const kT = TT[iT],
            WT = kT.refId,
            BT = kT.ref,
            FT = IT[WT];
          if (FT) {
            if ((kT.op & zT.DELETE) === zT.DELETE && Ji.isSchema(kT.previousValue)) {
              const TT = IT[kT.previousValue[XT]]?.[zT.DELETE];
              for (let oT = TT?.length - 1; oT >= 0; oT--) TT[oT]()
            }
            if (Ji.isSchema(BT)) {
              if (!oT.has(WT)) {
                const TT = FT?.[zT.REPLACE];
                for (let oT = TT?.length - 1; oT >= 0; oT--) TT[oT]()
              }
              if (FT.hasOwnProperty(kT.field)) {
                const TT = FT[kT.field];
                for (let oT = TT?.length - 1; oT >= 0; oT--) TT[oT](kT.value, kT.previousValue)
              }
            } else {
              if ((kT.op & zT.DELETE) === zT.DELETE) {
                if (void 0 !== kT.previousValue) {
                  const TT = FT[zT.DELETE];
                  for (let oT = TT?.length - 1; oT >= 0; oT--) TT[oT](kT.previousValue, kT.dynamicIndex ?? kT.field)
                }
                if ((kT.op & zT.ADD) === zT.ADD) {
                  const TT = FT[zT.ADD];
                  for (let oT = TT?.length - 1; oT >= 0; oT--) TT[oT](kT.value, kT.dynamicIndex ?? kT.field)
                }
              } else if ((kT.op & zT.ADD) === zT.ADD && kT.previousValue !== kT.value) {
                const TT = FT[zT.ADD];
                for (let oT = TT?.length - 1; oT >= 0; oT--) TT[oT](kT.value, kT.dynamicIndex ?? kT.field)
              }
              if (kT.value !== kT.previousValue && (void 0 !== kT.value || void 0 !== kT.previousValue)) {
                const TT = FT[zT.REPLACE];
                for (let oT = TT?.length - 1; oT >= 0; oT--) TT[oT](kT.value, kT.dynamicIndex ?? kT.field)
              }
            }
            oT.add(WT)
          }
        }
      }, BT
    }

    function zz(TT, oT) {
      TT.YC = oT
    }
    Iz.encode = function(TT) {
      let oT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
        offset: 0
      };
      const IT = TT.context,
        iT = new Iz,
        zT = new bi(iT),
        kT = IT.schemas.get(TT.state.constructor);
      kT > 0 && (iT.rootType = kT);
      const WT = new Set,
        XT = {},
        BT = TT => {
          if (void 0 === TT.extendsId || WT.has(TT.extendsId)) {
            WT.add(TT.id), iT.types.push(TT);
            const oT = XT[TT.id];
            void 0 !== oT && (delete XT[TT.id], oT.forEach((TT => BT(TT))))
          } else void 0 === XT[TT.extendsId] && (XT[TT.extendsId] = []), XT[TT.extendsId].push(TT)
        };
      IT.schemas.forEach(((TT, oT) => {
        const iT = new oz;
        iT.id = Number(TT);
        const zT = Object.getPrototypeOf(oT);
        zT !== Ji && (iT.extendsId = IT.schemas.get(zT));
        const kT = oT[Symbol.metadata];
        if (kT !== zT[Symbol.metadata]) {
          const TT = kT[vT] ?? -1;
          for (let oT = 0; oT <= TT; oT++) {
            const TT = kT[oT];
            if (void 0 === TT) continue;
            const zT = TT.name;
            if (!Object.prototype.hasOwnProperty.call(kT, zT)) continue;
            const WT = new Tz;
            let XT;
            if (WT.name = zT, "string" === typeof TT.type) XT = TT.type;
            else if (Qo(TT.type)) {
              const oT = TT.type.quantized;
              XT = "quantized";
              const IT = new Vi;
              IT.min = oT.min, IT.max = oT.max, IT.bits = oT.bits, IT.mode = oT.wrap ? 1 : 0, WT.quantized = IT
            } else {
              let oT;
              Ji.is(TT.type) ? (XT = "ref", oT = TT.type) : (XT = Object.keys(TT.type)[0], "string" === typeof TT.type[XT] ? WT.childPrimitive = TT.type[XT] : oT = TT.type[XT]), WT.referencedType = oT ? IT.getTypeId(oT) : -1
            }
            WT.type = XT, iT.fields.push(WT)
          }
        }
        BT(iT)
      }));
      for (const FT in XT) XT[FT].forEach((TT => iT.types.push(TT)));
      return zT.encodeAll(oT).slice(0, oT.offset)
    }, Iz.decode = function(TT, oT) {
      const IT = new Iz;
      new di(IT).decode(TT, oT);
      const iT = new qo;
      IT.types.forEach((TT => {
        const oT = iT.get(TT.extendsId) ?? Ji,
          IT = class extends oT {};
        qo.register(IT), iT.add(IT, TT.id)
      }), {});
      IT.types.forEach((TT => {
        const oT = iT.get(TT.id),
          zT = yo.initialize(oT),
          kT = [];
        let WT = TT;
        do {
          kT.push(WT), WT = IT.types.find((TT => TT.id === WT.extendsId))
        } while (WT);
        let XT = 0;
        kT.reverse().forEach((TT => {
          ((TT, oT, IT) => {
            oT.fields.forEach(((oT, zT) => {
              const kT = IT + zT;
              if (void 0 !== oT.quantized) {
                const IT = oT.quantized;
                yo.addField(TT, kT, oT.name, {
                  quantized: Yo({
                    min: IT.min,
                    max: IT.max,
                    bits: IT.bits,
                    mode: 1 === IT.mode ? "wrap" : "clamp"
                  })
                })
              } else if (void 0 !== oT.referencedType) {
                const IT = oT.type,
                  zT = iT.get(oT.referencedType) ?? oT.childPrimitive;
                "ref" === IT ? yo.addField(TT, kT, oT.name, zT) : yo.addField(TT, kT, oT.name, {
                  [IT]: zT
                })
              } else yo.addField(TT, kT, oT.name, oT.type)
            }))
          })(zT, TT, XT), XT += TT.fields.length
        }))
      }));
      const zT = new(iT.get(IT.rootType || 0));
      return new di(zT, iT)
    }, Iz.makeEncodable = function(TT) {
      const oT = TT[Symbol.metadata];
      if (!oT) return TT;
      const IT = oT[vT];
      if (void 0 === IT) return TT;
      for (let iT = 0; iT <= IT; iT++) {
        const IT = oT[iT];
        IT && yo.defineField(TT, oT, iT, IT.name, IT.type)
      }
      return Object.prototype.hasOwnProperty.call(TT, RT) && delete TT[RT], TT
    };
    class kz {
      Lc;
      uniqueRefIds = new Set;
      isTriggering = !1;
      constructor(TT) {
        this.Lc = TT, this.Lc.YC = this.YC.bind(this)
      }
      get callbacks() {
        return this.Lc.root.callbacks
      }
      get state() {
        return this.Lc.state
      }
      addCallback(TT, oT, IT) {
        return this.Lc.root.addCallback(TT, oT, IT)
      }
      addCallbackOrWaitCollectionAvailable(TT, oT, IT, iT) {
        let kT = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4],
          WT = () => {};
        const BT = () => WT(),
          FT = TT[oT];
        if (FT && void 0 !== FT[XT]) return kT = kT && !1 === this.isTriggering, IT === zT.ADD && kT && FT.forEach(((TT, oT) => {
          iT(TT, oT)
        })), this.addCallback(FT[XT], IT, iT);
        {
          let zT;
          return zT = this.addCallback(TT[XT], oT, ((TT, oT) => {
            null !== TT && void 0 !== TT && (zT(), WT = this.addCallback(TT[XT], IT, iT))
          })), WT = zT, BT
        }
      }
      listen() {
        return "string" === typeof(arguments.length <= 0 ? void 0 : arguments[0]) ? this.listenInstance(this.state, arguments.length <= 0 ? void 0 : arguments[0], arguments.length <= 1 ? void 0 : arguments[1], arguments.length <= 2 ? void 0 : arguments[2]) : this.listenInstance(arguments.length <= 0 ? void 0 : arguments[0], arguments.length <= 1 ? void 0 : arguments[1], arguments.length <= 2 ? void 0 : arguments[2], arguments.length <= 3 ? void 0 : arguments[3])
      }
      listenInstance(TT, oT, IT) {
        let iT = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
        iT = iT && !1 === this.isTriggering;
        const zT = TT[oT];
        return iT && null !== zT && void 0 !== zT && IT(zT, void 0), this.addCallback(TT[XT], oT, IT)
      }
      onChange() {
        if (2 === arguments.length && "string" !== typeof(arguments.length <= 0 ? void 0 : arguments[0])) {
          const TT = arguments.length <= 0 ? void 0 : arguments[0],
            oT = arguments.length <= 1 ? void 0 : arguments[1];
          return this.addCallback(TT[XT], zT.REPLACE, oT)
        }
        return "string" === typeof(arguments.length <= 0 ? void 0 : arguments[0]) ? this.addCallbackOrWaitCollectionAvailable(this.state, arguments.length <= 0 ? void 0 : arguments[0], zT.REPLACE, arguments.length <= 1 ? void 0 : arguments[1]) : this.addCallbackOrWaitCollectionAvailable(arguments.length <= 0 ? void 0 : arguments[0], arguments.length <= 1 ? void 0 : arguments[1], zT.REPLACE, arguments.length <= 2 ? void 0 : arguments[2])
      }
      Om() {
        return "string" === typeof(arguments.length <= 0 ? void 0 : arguments[0]) ? this.addCallbackOrWaitCollectionAvailable(this.state, arguments.length <= 0 ? void 0 : arguments[0], zT.ADD, arguments.length <= 1 ? void 0 : arguments[1], !1 !== (arguments.length <= 2 ? void 0 : arguments[2])) : this.addCallbackOrWaitCollectionAvailable(arguments.length <= 0 ? void 0 : arguments[0], arguments.length <= 1 ? void 0 : arguments[1], zT.ADD, arguments.length <= 2 ? void 0 : arguments[2], !1 !== (arguments.length <= 3 ? void 0 : arguments[3]))
      }
      zC() {
        return "string" === typeof(arguments.length <= 0 ? void 0 : arguments[0]) ? this.addCallbackOrWaitCollectionAvailable(this.state, arguments.length <= 0 ? void 0 : arguments[0], zT.DELETE, arguments.length <= 1 ? void 0 : arguments[1]) : this.addCallbackOrWaitCollectionAvailable(arguments.length <= 0 ? void 0 : arguments[0], arguments.length <= 1 ? void 0 : arguments[1], zT.DELETE, arguments.length <= 2 ? void 0 : arguments[2])
      }
      bindTo(TT, oT, IT) {
        let iT = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
        const kT = TT.constructor[Symbol.metadata];
        IT || (IT = Object.keys(kT).filter((TT => !isNaN(Number(TT)))).map((TT => kT[TT].name)));
        const WT = () => {
          for (const iT of IT) {
            const IT = TT[iT];
            void 0 !== IT && (oT[iT] = IT)
          }
        };
        return iT && WT(), this.addCallback(TT[XT], zT.REPLACE, WT)
      }
      YC(TT) {
        this.uniqueRefIds.clear(), this.isTriggering = !0;
        for (let oT = 0, IT = TT.length; oT < IT; oT++) {
          const IT = TT[oT],
            iT = IT.refId,
            kT = IT.ref,
            WT = this.callbacks[iT];
          if (WT) {
            if ((IT.op & zT.DELETE) === zT.DELETE && Ji.isSchema(IT.previousValue)) {
              const TT = IT.previousValue[XT],
                oT = this.callbacks[TT]?.[zT.DELETE];
              if (oT)
                for (let IT = oT.length - 1; IT >= 0; IT--) try {
                  oT[IT]()
                } catch (Fz) {
                  console.error(Fz)
                }
            }
            if (Ji.isSchema(kT)) {
              if (!this.uniqueRefIds.has(iT)) {
                const TT = WT[zT.REPLACE];
                if (TT)
                  for (let oT = TT.length - 1; oT >= 0; oT--) try {
                    TT[oT]()
                  } catch (Fz) {
                    console.error(Fz)
                  }
              }
              const TT = WT[IT.field];
              if (TT)
                for (let oT = TT.length - 1; oT >= 0; oT--) try {
                  TT[oT](IT.value, IT.previousValue)
                } catch (Fz) {
                  console.error(Fz)
                }
            } else {
              const TT = IT.dynamicIndex ?? IT.field;
              if ((IT.op & zT.DELETE) === zT.DELETE) {
                if (void 0 !== IT.previousValue) {
                  const oT = WT[zT.DELETE];
                  if (oT)
                    for (let iT = oT.length - 1; iT >= 0; iT--) try {
                      oT[iT](IT.previousValue, TT)
                    } catch (Fz) {
                      console.error(Fz)
                    }
                }
                if ((IT.op & zT.ADD) === zT.ADD) {
                  const oT = WT[zT.ADD];
                  if (oT)
                    for (let iT = oT.length - 1; iT >= 0; iT--) try {
                      oT[iT](IT.value, TT)
                    } catch (Fz) {
                      console.error(Fz)
                    }
                }
              } else if ((IT.op & zT.ADD) === zT.ADD && IT.previousValue !== IT.value) {
                const oT = WT[zT.ADD];
                if (oT)
                  for (let iT = oT.length - 1; iT >= 0; iT--) try {
                    oT[iT](IT.value, TT)
                  } catch (Fz) {
                    console.error(Fz)
                  }
              }
              if (IT.value !== IT.previousValue) {
                const oT = WT[zT.REPLACE];
                if (oT)
                  for (let iT = oT.length - 1; iT >= 0; iT--) try {
                    oT[iT](TT, IT.value)
                  } catch (Fz) {
                    console.error(Fz)
                  }
              }
            }
            this.uniqueRefIds.add(iT)
          }
        }
        this.isTriggering = !1
      }
    }
    const Wz = {
      get(TT) {
        if (TT instanceof di) return new kz(TT);
        if ("Lc" in TT.JA) return new kz(TT.JA.Lc);
        throw new Error("Invalid room or decoder")
      },
      getLegacy(TT) {
        if (TT instanceof di) return iz(TT);
        if ("Lc" in TT.JA) return iz(TT.JA.Lc);
        throw new Error("Invalid room or decoder")
      },
      getRawChanges: (TT, oT) => zz(TT, oT)
    };
    class Xz {
      _free = [];
      _factory;
      _maxSize;
      constructor(TT) {
        let oT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        this._factory = TT, this._maxSize = oT.maxSize ?? 1 / 0;
        const IT = oT.preallocate ?? 0;
        for (let iT = 0; iT < IT; iT++) this._free.push(TT())
      }
      acquire() {
        return this._free.length > 0 ? this._free.pop() : this._factory()
      }
      release(TT) {
        Ji.reset(TT), this._free.length < this._maxSize && this._free.push(TT)
      }
      get size() {
        return this._free.length
      }
    }

    function Bz(TT) {
      return new Xz((() => new TT), arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {})
    }
    mo("map", {
      constructor: Wi
    }), mo("array", {
      constructor: zi
    }), mo("set", {
      constructor: Bi
    }), mo("collection", {
      constructor: Xi
    })
  },
  8493: (TT, oT, IT) => {
    IT.r(oT), IT.d(oT, {
      __addDisposableResource: () => QT,
      __assign: () => kT,
      __asyncDelegator: () => uT,
      __asyncGenerator: () => RT,
      __asyncValues: () => vT,
      __await: () => eT,
      __awaiter: () => cT,
      __classPrivateFieldGet: () => UT,
      __classPrivateFieldIn: () => YT,
      __classPrivateFieldSet: () => aT,
      __createBinding: () => MT,
      __decorate: () => XT,
      __disposeResources: () => HT,
      __esDecorate: () => FT,
      __exportStar: () => rT,
      __extends: () => zT,
      __generator: () => KT,
      __importDefault: () => JT,
      __importStar: () => jT,
      __makeTemplateObject: () => ET,
      __metadata: () => xT,
      __param: () => BT,
      __propKey: () => DT,
      __read: () => gT,
      __rest: () => WT,
      __rewriteRelativeImportExtension: () => nT,
      __runInitializers: () => ST,
      __setFunctionName: () => LT,
      __spread: () => hT,
      __spreadArray: () => mT,
      __spreadArrays: () => wT,
      __values: () => AT,
      default: () => qT
    });
    var iT = function(TT, oT) {
      return iT = Object.setPrototypeOf || {
        __proto__: []
      }
      instanceof Array && function(TT, oT) {
        TT.__proto__ = oT
      } || function(TT, oT) {
        for (var IT in oT) Object.prototype.hasOwnProperty.call(oT, IT) && (TT[IT] = oT[IT])
      }, iT(TT, oT)
    };

    function zT(TT, oT) {
      if ("function" !== typeof oT && null !== oT) throw new TypeError("Class extends value " + String(oT) + " is not a constructor or null");

      function IT() {
        this.constructor = TT
      }
      iT(TT, oT), TT.prototype = null === oT ? Object.create(oT) : (IT.prototype = oT.prototype, new IT)
    }
    var kT = function() {
      return kT = Object.assign || function(TT) {
        for (var oT, IT = 1, iT = arguments.length; IT < iT; IT++)
          for (var zT in oT = arguments[IT]) Object.prototype.hasOwnProperty.call(oT, zT) && (TT[zT] = oT[zT]);
        return TT
      }, kT.apply(this, arguments)
    };

    function WT(TT, oT) {
      var IT = {};
      for (var iT in TT) Object.prototype.hasOwnProperty.call(TT, iT) && oT.indexOf(iT) < 0 && (IT[iT] = TT[iT]);
      if (null != TT && "function" === typeof Object.getOwnPropertySymbols) {
        var zT = 0;
        for (iT = Object.getOwnPropertySymbols(TT); zT < iT.length; zT++) oT.indexOf(iT[zT]) < 0 && Object.prototype.propertyIsEnumerable.call(TT, iT[zT]) && (IT[iT[zT]] = TT[iT[zT]])
      }
      return IT
    }

    function XT(TT, oT, IT, iT) {
      var zT, kT = arguments.length,
        WT = kT < 3 ? oT : null === iT ? iT = Object.getOwnPropertyDescriptor(oT, IT) : iT;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) WT = Reflect.decorate(TT, oT, IT, iT);
      else
        for (var XT = TT.length - 1; XT >= 0; XT--)(zT = TT[XT]) && (WT = (kT < 3 ? zT(WT) : kT > 3 ? zT(oT, IT, WT) : zT(oT, IT)) || WT);
      return kT > 3 && WT && Object.defineProperty(oT, IT, WT), WT
    }

    function BT(TT, oT) {
      return function(IT, iT) {
        oT(IT, iT, TT)
      }
    }

    function FT(TT, oT, IT, iT, zT, kT) {
      function WT(TT) {
        if (void 0 !== TT && "function" !== typeof TT) throw new TypeError("Function expected");
        return TT
      }
      for (var XT, BT = iT.kind, FT = "getter" === BT ? "get" : "setter" === BT ? "set" : "value", ST = !oT && TT ? iT.static ? TT : TT.prototype : null, DT = oT || (ST ? Object.getOwnPropertyDescriptor(ST, iT.name) : {}), LT = !1, xT = IT.length - 1; xT >= 0; xT--) {
        var cT = {};
        for (var KT in iT) cT[KT] = "access" === KT ? {} : iT[KT];
        for (var KT in iT.access) cT.access[KT] = iT.access[KT];
        cT.addInitializer = function(TT) {
          if (LT) throw new TypeError("Cannot add initializers after decoration has completed");
          kT.push(WT(TT || null))
        };
        var MT = (0, IT[xT])("accessor" === BT ? {
          get: DT.get,
          set: DT.set
        } : DT[FT], cT);
        if ("accessor" === BT) {
          if (void 0 === MT) continue;
          if (null === MT || "object" !== typeof MT) throw new TypeError("Object expected");
          (XT = WT(MT.get)) && (DT.get = XT), (XT = WT(MT.set)) && (DT.set = XT), (XT = WT(MT.init)) && zT.unshift(XT)
        } else(XT = WT(MT)) && ("field" === BT ? zT.unshift(XT) : DT[FT] = XT)
      }
      ST && Object.defineProperty(ST, iT.name, DT), LT = !0
    }

    function ST(TT, oT, IT) {
      for (var iT = arguments.length > 2, zT = 0; zT < oT.length; zT++) IT = iT ? oT[zT].call(TT, IT) : oT[zT].call(TT);
      return iT ? IT : void 0
    }

    function DT(TT) {
      return "symbol" === typeof TT ? TT : "".concat(TT)
    }

    function LT(TT, oT, IT) {
      return "symbol" === typeof oT && (oT = oT.description ? "[".concat(oT.description, "]") : ""), Object.defineProperty(TT, "name", {
        configurable: !0,
        value: IT ? "".concat(IT, " ", oT) : oT
      })
    }

    function xT(TT, oT) {
      if ("object" === typeof Reflect && "function" === typeof Reflect.metadata) return Reflect.metadata(TT, oT)
    }

    function cT(TT, oT, IT, iT) {
      return new(IT || (IT = Promise))((function(zT, kT) {
        function WT(TT) {
          try {
            BT(iT.next(TT))
          } catch (oT) {
            kT(oT)
          }
        }

        function XT(TT) {
          try {
            BT(iT.throw(TT))
          } catch (oT) {
            kT(oT)
          }
        }

        function BT(TT) {
          var oT;
          TT.done ? zT(TT.value) : (oT = TT.value, oT instanceof IT ? oT : new IT((function(TT) {
            TT(oT)
          }))).then(WT, XT)
        }
        BT((iT = iT.apply(TT, oT || [])).next())
      }))
    }

    function KT(TT, oT) {
      var IT, iT, zT, kT = {
          label: 0,
          sent: function() {
            if (1 & zT[0]) throw zT[1];
            return zT[1]
          },
          trys: [],
          ops: []
        },
        WT = Object.create(("function" === typeof Iterator ? Iterator : Object).prototype);
      return WT.next = XT(0), WT.throw = XT(1), WT.return = XT(2), "function" === typeof Symbol && (WT[Symbol.iterator] = function() {
        return this
      }), WT;

      function XT(XT) {
        return function(BT) {
          return function(XT) {
            if (IT) throw new TypeError("Generator is already executing.");
            for (; WT && (WT = 0, XT[0] && (kT = 0)), kT;) try {
              if (IT = 1, iT && (zT = 2 & XT[0] ? iT.return : XT[0] ? iT.throw || ((zT = iT.return) && zT.call(iT), 0) : iT.next) && !(zT = zT.call(iT, XT[1])).done) return zT;
              switch (iT = 0, zT && (XT = [2 & XT[0], zT.value]), XT[0]) {
                case 0:
                case 1:
                  zT = XT;
                  break;
                case 4:
                  return kT.label++, {
                    value: XT[1],
                    done: !1
                  };
                case 5:
                  kT.label++, iT = XT[1], XT = [0];
                  continue;
                case 7:
                  XT = kT.ops.pop(), kT.trys.pop();
                  continue;
                default:
                  if (!(zT = (zT = kT.trys).length > 0 && zT[zT.length - 1]) && (6 === XT[0] || 2 === XT[0])) {
                    kT = 0;
                    continue
                  }
                  if (3 === XT[0] && (!zT || XT[1] > zT[0] && XT[1] < zT[3])) {
                    kT.label = XT[1];
                    break
                  }
                  if (6 === XT[0] && kT.label < zT[1]) {
                    kT.label = zT[1], zT = XT;
                    break
                  }
                  if (zT && kT.label < zT[2]) {
                    kT.label = zT[2], kT.ops.push(XT);
                    break
                  }
                  zT[2] && kT.ops.pop(), kT.trys.pop();
                  continue
              }
              XT = oT.call(TT, kT)
            } catch (BT) {
              XT = [6, BT], iT = 0
            } finally {
              IT = zT = 0
            }
            if (5 & XT[0]) throw XT[1];
            return {
              value: XT[0] ? XT[1] : void 0,
              done: !0
            }
          }([XT, BT])
        }
      }
    }
    var MT = Object.create ? function(TT, oT, IT, iT) {
      void 0 === iT && (iT = IT);
      var zT = Object.getOwnPropertyDescriptor(oT, IT);
      zT && !("get" in zT ? !oT.__esModule : zT.writable || zT.configurable) || (zT = {
        enumerable: !0,
        get: function() {
          return oT[IT]
        }
      }), Object.defineProperty(TT, iT, zT)
    } : function(TT, oT, IT, iT) {
      void 0 === iT && (iT = IT), TT[iT] = oT[IT]
    };

    function rT(TT, oT) {
      for (var IT in TT) "default" === IT || Object.prototype.hasOwnProperty.call(oT, IT) || MT(oT, TT, IT)
    }

    function AT(TT) {
      var oT = "function" === typeof Symbol && Symbol.iterator,
        IT = oT && TT[oT],
        iT = 0;
      if (IT) return IT.call(TT);
      if (TT && "number" === typeof TT.length) return {
        next: function() {
          return TT && iT >= TT.length && (TT = void 0), {
            value: TT && TT[iT++],
            done: !TT
          }
        }
      };
      throw new TypeError(oT ? "Object is not iterable." : "Symbol.iterator is not defined.")
    }

    function gT(TT, oT) {
      var IT = "function" === typeof Symbol && TT[Symbol.iterator];
      if (!IT) return TT;
      var iT, zT, kT = IT.call(TT),
        WT = [];
      try {
        for (;
          (void 0 === oT || oT-- > 0) && !(iT = kT.next()).done;) WT.push(iT.value)
      } catch (XT) {
        zT = {
          error: XT
        }
      } finally {
        try {
          iT && !iT.done && (IT = kT.return) && IT.call(kT)
        } finally {
          if (zT) throw zT.error
        }
      }
      return WT
    }

    function hT() {
      for (var TT = [], oT = 0; oT < arguments.length; oT++) TT = TT.concat(gT(arguments[oT]));
      return TT
    }

    function wT() {
      for (var TT = 0, oT = 0, IT = arguments.length; oT < IT; oT++) TT += arguments[oT].length;
      var iT = Array(TT),
        zT = 0;
      for (oT = 0; oT < IT; oT++)
        for (var kT = arguments[oT], WT = 0, XT = kT.length; WT < XT; WT++, zT++) iT[zT] = kT[WT];
      return iT
    }

    function mT(TT, oT, IT) {
      if (IT || 2 === arguments.length)
        for (var iT, zT = 0, kT = oT.length; zT < kT; zT++) !iT && zT in oT || (iT || (iT = Array.prototype.slice.call(oT, 0, zT)), iT[zT] = oT[zT]);
      return TT.concat(iT || Array.prototype.slice.call(oT))
    }

    function eT(TT) {
      return this instanceof eT ? (this.v = TT, this) : new eT(TT)
    }

    function RT(TT, oT, IT) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var iT, zT = IT.apply(TT, oT || []),
        kT = [];
      return iT = Object.create(("function" === typeof AsyncIterator ? AsyncIterator : Object).prototype), WT("next"), WT("throw"), WT("return", (function(TT) {
        return function(oT) {
          return Promise.resolve(oT).then(TT, FT)
        }
      })), iT[Symbol.asyncIterator] = function() {
        return this
      }, iT;

      function WT(TT, oT) {
        zT[TT] && (iT[TT] = function(oT) {
          return new Promise((function(IT, iT) {
            kT.push([TT, oT, IT, iT]) > 1 || XT(TT, oT)
          }))
        }, oT && (iT[TT] = oT(iT[TT])))
      }

      function XT(TT, oT) {
        try {
          (IT = zT[TT](oT)).value instanceof eT ? Promise.resolve(IT.value.v).then(BT, FT) : ST(kT[0][2], IT)
        } catch (iT) {
          ST(kT[0][3], iT)
        }
        var IT
      }

      function BT(TT) {
        XT("next", TT)
      }

      function FT(TT) {
        XT("throw", TT)
      }

      function ST(TT, oT) {
        TT(oT), kT.shift(), kT.length && XT(kT[0][0], kT[0][1])
      }
    }

    function uT(TT) {
      var oT, IT;
      return oT = {}, iT("next"), iT("throw", (function(TT) {
        throw TT
      })), iT("return"), oT[Symbol.iterator] = function() {
        return this
      }, oT;

      function iT(iT, zT) {
        oT[iT] = TT[iT] ? function(oT) {
          return (IT = !IT) ? {
            value: eT(TT[iT](oT)),
            done: !1
          } : zT ? zT(oT) : oT
        } : zT
      }
    }

    function vT(TT) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var oT, IT = TT[Symbol.asyncIterator];
      return IT ? IT.call(TT) : (TT = AT(TT), oT = {}, iT("next"), iT("throw"), iT("return"), oT[Symbol.asyncIterator] = function() {
        return this
      }, oT);

      function iT(IT) {
        oT[IT] = TT[IT] && function(oT) {
          return new Promise((function(iT, zT) {
            (function(TT, oT, IT, iT) {
              Promise.resolve(iT).then((function(oT) {
                TT({
                  value: oT,
                  done: IT
                })
              }), oT)
            })(iT, zT, (oT = TT[IT](oT)).done, oT.value)
          }))
        }
      }
    }

    function ET(TT, oT) {
      return Object.defineProperty ? Object.defineProperty(TT, "raw", {
        value: oT
      }) : TT.raw = oT, TT
    }
    var fT = Object.create ? function(TT, oT) {
        Object.defineProperty(TT, "default", {
          enumerable: !0,
          value: oT
        })
      } : function(TT, oT) {
        TT.default = oT
      },
      CT = function(TT) {
        return CT = Object.getOwnPropertyNames || function(TT) {
          var oT = [];
          for (var IT in TT) Object.prototype.hasOwnProperty.call(TT, IT) && (oT[oT.length] = IT);
          return oT
        }, CT(TT)
      };

    function jT(TT) {
      if (TT && TT.__esModule) return TT;
      var oT = {};
      if (null != TT)
        for (var IT = CT(TT), iT = 0; iT < IT.length; iT++) "default" !== IT[iT] && MT(oT, TT, IT[iT]);
      return fT(oT, TT), oT
    }

    function JT(TT) {
      return TT && TT.__esModule ? TT : {
        default: TT
      }
    }

    function UT(TT, oT, IT, iT) {
      if ("a" === IT && !iT) throw new TypeError("Private accessor was defined without a getter");
      if ("function" === typeof oT ? TT !== oT || !iT : !oT.has(TT)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
      return "m" === IT ? iT : "a" === IT ? iT.call(TT) : iT ? iT.value : oT.get(TT)
    }

    function aT(TT, oT, IT, iT, zT) {
      if ("m" === iT) throw new TypeError("Private method is not writable");
      if ("a" === iT && !zT) throw new TypeError("Private accessor was defined without a setter");
      if ("function" === typeof oT ? TT !== oT || !zT : !oT.has(TT)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
      return "a" === iT ? zT.call(TT, IT) : zT ? zT.value = IT : oT.set(TT, IT), IT
    }

    function YT(TT, oT) {
      if (null === oT || "object" !== typeof oT && "function" !== typeof oT) throw new TypeError("Cannot use 'in' operator on non-object");
      return "function" === typeof TT ? oT === TT : TT.has(oT)
    }

    function QT(TT, oT, IT) {
      if (null !== oT && void 0 !== oT) {
        if ("object" !== typeof oT && "function" !== typeof oT) throw new TypeError("Object expected.");
        var iT, zT;
        if (IT) {
          if (!Symbol.asyncDispose) throw new TypeError("Symbol.asyncDispose is not defined.");
          iT = oT[Symbol.asyncDispose]
        }
        if (void 0 === iT) {
          if (!Symbol.dispose) throw new TypeError("Symbol.dispose is not defined.");
          iT = oT[Symbol.dispose], IT && (zT = iT)
        }
        if ("function" !== typeof iT) throw new TypeError("Object not disposable.");
        zT && (iT = function() {
          try {
            zT.call(this)
          } catch (TT) {
            return Promise.reject(TT)
          }
        }), TT.stack.push({
          value: oT,
          dispose: iT,
          async: IT
        })
      } else IT && TT.stack.push({
        async: !0
      });
      return oT
    }
    var OT = "function" === typeof SuppressedError ? SuppressedError : function(TT, oT, IT) {
      var iT = new Error(IT);
      return iT.name = "SuppressedError", iT.error = TT, iT.suppressed = oT, iT
    };

    function HT(TT) {
      function oT(oT) {
        TT.error = TT.hasError ? new OT(oT, TT.error, "An error was suppressed during disposal.") : oT, TT.hasError = !0
      }
      var IT, iT = 0;
      return function zT() {
        for (; IT = TT.stack.pop();) try {
          if (!IT.async && 1 === iT) return iT = 0, TT.stack.push(IT), Promise.resolve().then(zT);
          if (IT.dispose) {
            var kT = IT.dispose.call(IT.value);
            if (IT.async) return iT |= 2, Promise.resolve(kT).then(zT, (function(TT) {
              return oT(TT), zT()
            }))
          } else iT |= 1
        } catch (WT) {
          oT(WT)
        }
        if (1 === iT) return TT.hasError ? Promise.reject(TT.error) : Promise.resolve();
        if (TT.hasError) throw TT.error
      }()
    }

    function nT(TT, oT) {
      return "string" === typeof TT && /^\.\.?\//.test(TT) ? TT.replace(/\.(tsx)$|((?:\.d)?)((?:\.[^./]+?)?)\.([cm]?)ts$/i, (function(TT, IT, iT, zT, kT) {
        return IT ? oT ? ".jsx" : ".js" : !iT || zT && kT ? iT + zT + "." + kT.toLowerCase() + "js" : TT
      })) : TT
    }
    const qT = {
      __extends: zT,
      __assign: kT,
      __rest: WT,
      __decorate: XT,
      __param: BT,
      __esDecorate: FT,
      __runInitializers: ST,
      __propKey: DT,
      __setFunctionName: LT,
      __metadata: xT,
      __awaiter: cT,
      __generator: KT,
      __createBinding: MT,
      __exportStar: rT,
      __values: AT,
      __read: gT,
      __spread: hT,
      __spreadArrays: wT,
      __spreadArray: mT,
      __await: eT,
      __asyncGenerator: RT,
      __asyncDelegator: uT,
      __asyncValues: vT,
      __makeTemplateObject: ET,
      __importStar: jT,
      __importDefault: JT,
      __classPrivateFieldGet: UT,
      __classPrivateFieldSet: aT,
      __classPrivateFieldIn: YT,
      __addDisposableResource: QT,
      __disposeResources: HT,
      __rewriteRelativeImportExtension: nT
    }
  }
};
Object.freeze(modules);
for (const TT in modules) Object.freeze(modules[TT]);