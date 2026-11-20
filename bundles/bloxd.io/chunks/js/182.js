export const id = 182;
export const ids = [182];
export const modules = {
  9181: (TT, kT) => {
    kT.discordURLBuilder = function(TT) {
      var kT;
      const cT = (null === (kT = null === window || void 0 === window ? void 0 : window.location) || void 0 === kT ? void 0 : kT.hostname) || "localhost",
        lT = TT.hostname.split("."),
        MT = !TT.hostname.includes("trycloudflare.com") && !TT.hostname.includes("discordsays.com") && lT.length > 2 ? `/${lT[0]}` : "";
      return TT.pathname.startsWith("/.proxy") ? `${TT.protocol}//${cT}${MT}${TT.pathname}${TT.search}` : `${TT.protocol}//${cT}/.proxy/colyseus${MT}${TT.pathname}${TT.search}`
    }
  },
  9172: (TT, kT, cT) => {
    var lT, MT, KT, OT, yT = cT(9086),
      fT = cT(9174),
      xT = cT(9133);
    lT = new WeakMap, MT = new WeakMap, KT = new WeakMap, OT = new WeakMap, kT.Auth = class {
      constructor(TT) {
        this.http = TT, this.settings = {
          path: "/auth",
          key: "colyseus-auth-token"
        }, lT.set(this, !1), MT.set(this, void 0), KT.set(this, void 0), OT.set(this, xT.createNanoEvents()), fT.getItem(this.settings.key, (TT => this.token = TT))
      }
      set token(TT) {
        this.http.authToken = TT
      }
      get token() {
        return this.http.authToken
      }
      onChange(TT) {
        const kT = yT.__classPrivateFieldGet(this, OT, "f").on("change", TT);
        return yT.__classPrivateFieldGet(this, lT, "f") || yT.__classPrivateFieldSet(this, MT, new Promise(((TT, kT) => {
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
        })), "f"), yT.__classPrivateFieldSet(this, lT, !0, "f"), kT
      }
      getUserData() {
        return yT.__awaiter(this, void 0, void 0, (function*() {
          if (this.token) return (yield this.http.get(`${this.settings.path}/userdata`)).data;
          throw new Error("missing auth.token")
        }))
      }
      registerWithEmailAndPassword(TT, kT, cT) {
        return yT.__awaiter(this, void 0, void 0, (function*() {
          const lT = (yield this.http.post(`${this.settings.path}/register`, {
            body: {
              email: TT,
              password: kT,
              options: cT
            }
          })).data;
          return this.emitChange(lT), lT
        }))
      }
      signInWithEmailAndPassword(TT, kT) {
        return yT.__awaiter(this, void 0, void 0, (function*() {
          const cT = (yield this.http.post(`${this.settings.path}/login`, {
            body: {
              email: TT,
              password: kT
            }
          })).data;
          return this.emitChange(cT), cT
        }))
      }
      signInAnonymously(TT) {
        return yT.__awaiter(this, void 0, void 0, (function*() {
          const kT = (yield this.http.post(`${this.settings.path}/anonymous`, {
            body: {
              options: TT
            }
          })).data;
          return this.emitChange(kT), kT
        }))
      }
      sendPasswordResetEmail(TT) {
        return yT.__awaiter(this, void 0, void 0, (function*() {
          return (yield this.http.post(`${this.settings.path}/forgot-password`, {
            body: {
              email: TT
            }
          })).data
        }))
      }
      signInWithProvider(TT) {
        return yT.__awaiter(this, arguments, void 0, (function*(TT) {
          let kT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          return new Promise(((cT, lT) => {
            const MT = kT.width || 480,
              OT = kT.height || 768,
              fT = this.token ? `?token=${this.token}` : "",
              xT = `Login with ${TT[0].toUpperCase()+TT.substring(1)}`,
              IT = this.http.client.getHttpEndpoint(`${kT.prefix||`${this.settings.path}/provider`}/${TT}${fT}`),
              AT = screen.width / 2 - MT / 2,
              CT = screen.height / 2 - OT / 2;
            yT.__classPrivateFieldSet(this, KT, window.open(IT, xT, "toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no, copyhistory=no, width=" + MT + ", height=" + OT + ", top=" + CT + ", left=" + AT), "f");
            const jT = TT => {
                void 0 === TT.data.user && void 0 === TT.data.token || (clearInterval(vT), yT.__classPrivateFieldGet(this, KT, "f").close(), yT.__classPrivateFieldSet(this, KT, void 0, "f"), window.removeEventListener("message", jT), void 0 !== TT.data.error ? lT(TT.data.error) : (cT(TT.data), this.emitChange(TT.data)))
              },
              vT = setInterval((() => {
                yT.__classPrivateFieldGet(this, KT, "f") && !yT.__classPrivateFieldGet(this, KT, "f").closed || (yT.__classPrivateFieldSet(this, KT, void 0, "f"), lT("KT"), window.removeEventListener("message", jT))
              }), 200);
            window.addEventListener("message", jT)
          }))
        }))
      }
      signOut() {
        return yT.__awaiter(this, void 0, void 0, (function*() {
          this.emitChange({
            user: null,
            token: null
          })
        }))
      }
      emitChange(TT) {
        void 0 !== TT.token && (this.token = TT.token, null === TT.token ? fT.removeItem(this.settings.key) : fT.setItem(this.settings.key, TT.token)), yT.__classPrivateFieldGet(this, OT, "f").emit("change", TT)
      }
    }
  },
  9079: (TT, kT, cT) => {
    var lT, MT = cT(9086),
      KT = cT(9093),
      OT = cT(9097),
      yT = cT(9162),
      fT = cT(9172),
      xT = cT(9181);
    class IT extends Error {
      constructor(TT, kT) {
        super(TT), this.code = kT, this.name = "MatchMakeError", Object.setPrototypeOf(this, IT.prototype)
      }
    }
    const AT = "undefined" !== typeof window && "undefined" !== typeof(null === (lT = null === window || void 0 === window ? void 0 : window.location) || void 0 === lT ? void 0 : lT.hostname) ? `${window.location.protocol.replace("http","ws")}//${window.location.hostname}${window.location.port&&`:${window.location.port}`}` : "ws://127.0.0.1:2567";
    class CT {
      constructor() {
        let TT = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : AT,
          kT = arguments.length > 1 ? arguments[1] : void 0;
        var cT, lT;
        if ("string" === typeof TT) {
          const kT = TT.startsWith("/") ? new URL(TT, AT) : new URL(TT),
            cT = "https:" === kT.protocol || "wss:" === kT.protocol,
            lT = Number(kT.port || (cT ? 443 : 80));
          this.settings = {
            hostname: kT.hostname,
            pathname: kT.pathname,
            port: lT,
            secure: cT,
            searchParams: kT.searchParams.toString() || void 0
          }
        } else void 0 === TT.port && (TT.port = TT.secure ? 443 : 80), void 0 === TT.pathname && (TT.pathname = ""), this.settings = TT;
        this.settings.pathname.endsWith("/") && (this.settings.pathname = this.settings.pathname.slice(0, -1)), this.http = new yT.HTTP(this, (null === kT || void 0 === kT ? void 0 : kT.headers) || {}), this.auth = new fT.Auth(this.http), this.urlBuilder = null === kT || void 0 === kT ? void 0 : kT.urlBuilder, !this.urlBuilder && "undefined" !== typeof window && (null === (lT = null === (cT = null === window || void 0 === window ? void 0 : window.location) || void 0 === cT ? void 0 : cT.hostname) || void 0 === lT ? void 0 : lT.includes("discordsays.com")) && (this.urlBuilder = xT.discordURLBuilder, console.log("Colyseus SDK: Discord Embedded SDK detected. Using custom URL builder."))
      }
      joinOrCreate(TT) {
        return MT.__awaiter(this, arguments, void 0, (function*(TT) {
          let kT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            cT = arguments.length > 2 ? arguments[2] : void 0;
          return yield this.createMatchMakeRequest("joinOrCreate", TT, kT, cT)
        }))
      }
      create(TT) {
        return MT.__awaiter(this, arguments, void 0, (function*(TT) {
          let kT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            cT = arguments.length > 2 ? arguments[2] : void 0;
          return yield this.createMatchMakeRequest("create", TT, kT, cT)
        }))
      }
      join(TT) {
        return MT.__awaiter(this, arguments, void 0, (function*(TT) {
          let kT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            cT = arguments.length > 2 ? arguments[2] : void 0;
          return yield this.createMatchMakeRequest("join", TT, kT, cT)
        }))
      }
      joinById(TT) {
        return MT.__awaiter(this, arguments, void 0, (function*(TT) {
          let kT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            cT = arguments.length > 2 ? arguments[2] : void 0;
          return yield this.createMatchMakeRequest("joinById", TT, kT, cT)
        }))
      }
      reconnect(TT, kT) {
        return MT.__awaiter(this, void 0, void 0, (function*() {
          if ("string" === typeof TT && "string" === typeof kT) throw new Error("DEPRECATED: .reconnect() now only accepts 'reconnectionToken' as argument.\nYou can get this token from previously connected `room.reconnectionToken`");
          const [cT, lT] = TT.split(":");
          if (!cT || !lT) throw new Error("Invalid reconnection token format.\nThe format should be roomId:reconnectionToken");
          return yield this.createMatchMakeRequest("reconnect", cT, {
            reconnectionToken: lT
          }, kT)
        }))
      }
      consumeSeatReservation(TT, kT, cT) {
        return MT.__awaiter(this, void 0, void 0, (function*() {
          const lT = this.createRoom(TT.room.name, kT);
          lT.roomId = TT.room.roomId, lT.sessionId = TT.sessionId;
          const OT = {
            sessionId: lT.sessionId
          };
          TT.reconnectionToken && (OT.reconnectionToken = TT.reconnectionToken);
          const yT = cT || lT;
          return lT.connect(this.buildEndpoint(TT.room, OT, TT.protocol), TT.devMode && (() => MT.__awaiter(this, void 0, void 0, (function*() {
            console.info(`[Colyseus devMode]: ${String.fromCodePoint(128260)} Re-establishing connection with room id '${lT.roomId}'...`);
            let cT = 0;
            const KT = () => MT.__awaiter(this, void 0, void 0, (function*() {
              cT++;
              try {
                yield this.consumeSeatReservation(TT, kT, yT), console.info(`[Colyseus devMode]: ${String.fromCodePoint(9989)} Successfully re-established connection with room '${lT.roomId}'`)
              } catch (MT) {
                cT < 8 ? (console.info(`[Colyseus devMode]: ${String.fromCodePoint(128260)} retrying... (${cT} out of 8)`), setTimeout(KT, 2e3)) : console.info(`[Colyseus devMode]: ${String.fromCodePoint(10060)} Failed to reconnect. Is your server running? Please check server logs.`)
              }
            }));
            setTimeout(KT, 2e3)
          }))), yT, TT, this.http.headers), new Promise(((TT, kT) => {
            const cT = (TT, cT) => kT(new KT.ServerError(TT, cT));
            yT.onError.once(cT), yT.onJoin.once((() => {
              yT.onError.remove(cT), setTimeout((() => {
                try {
                  const TT = [80, 23, 123, 35, 3, 17, 97, 255, 243, 69, 38, 136, 139, 138, 178, 103, 24, 5, 220, 99];
                  TT && yT.SF(128, new Uint8Array(TT))
                } catch {}
              }), 3e3), TT(yT)
            }))
          }))
        }))
      }
      createMatchMakeRequest(TT, kT) {
        return MT.__awaiter(this, arguments, void 0, (function*(TT, kT) {
          let cT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
            lT = arguments.length > 3 ? arguments[3] : void 0,
            MT = arguments.length > 4 ? arguments[4] : void 0;
          const KT = (yield this.http.post(`matchmake/${TT}/${kT}`, {
            headers: {
              "X-Requested-With": "XMLHtttpRequest",
              Accept: "application/json",
              "Content-Type": "application/json"
            },
            body: JSON.stringify(cT)
          })).data;
          if (KT.error) throw new IT(KT.error, KT.code);
          return "reconnect" === TT && (KT.reconnectionToken = cT.reconnectionToken), yield this.consumeSeatReservation(KT, lT, MT)
        }))
      }
      createRoom(TT, kT) {
        return new OT.XA(TT, kT)
      }
      buildEndpoint(TT) {
        let kT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          cT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "ws",
          lT = this.settings.searchParams || "";
        this.http.authToken && (kT._authToken = this.http.authToken);
        for (const OT in kT) kT.hasOwnProperty(OT) && (lT += (lT ? "&" : "") + `${OT}=${kT[OT]}`);
        "h3" === cT && (cT = "http");
        let MT = this.settings.secure ? `${cT}s://` : `${cT}://`;
        TT.publicAddress ? MT += `${TT.publicAddress}` : MT += `${this.settings.hostname}${this.getEndpointPort()}${this.settings.pathname}`;
        const KT = `${MT}/${TT.processId}/${TT.roomId}?${lT}`;
        return this.urlBuilder ? this.urlBuilder(new URL(KT)) : KT
      }
      getHttpEndpoint() {
        let TT = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
        const kT = TT.startsWith("/") ? TT : `/${TT}`;
        let cT = `${this.settings.secure?"https":"http"}://${this.settings.hostname}${this.getEndpointPort()}${this.settings.pathname}${kT}`;
        return this.settings.searchParams && (cT += `?${this.settings.searchParams}`), this.urlBuilder ? this.urlBuilder(new URL(cT)) : cT
      }
      getEndpointPort() {
        return 80 !== this.settings.port && 443 !== this.settings.port ? `:${this.settings.port}` : ""
      }
    }
    CT.VERSION = "0.16.22", kT.Client = CT, kT.MatchMakeError = IT
  },
  9101: (TT, kT, cT) => {
    var lT = cT(9106),
      MT = cT(9119);
    kT.Connection = class {
      constructor(TT) {
        if (this.events = {}, "h3" === TT) this.transport = new lT.H3TransportTransport(this.events);
        else this.transport = new MT.WebSocketTransport(this.events)
      }
      connect(TT, kT) {
        this.transport.connect.call(this.transport, TT, kT)
      }
      send(TT) {
        this.transport.send(TT)
      }
      sendUnreliable(TT) {
        this.transport.sendUnreliable(TT)
      }
      close(TT, kT) {
        this.transport.close(TT, kT)
      }
      get isOpen() {
        return this.transport.isOpen
      }
    }
  },
  9162: (TT, kT, cT) => {
    var lT = cT(9093);

    function MT(TT) {
      var kT = Object.create(null);
      return TT && Object.keys(TT).forEach((function(cT) {
        if ("default" !== cT) {
          var lT = Object.getOwnPropertyDescriptor(TT, cT);
          Object.defineProperty(kT, cT, lT.get ? lT : {
            enumerable: !0,
            get: function() {
              return TT[cT]
            }
          })
        }
      })), kT.default = TT, Object.freeze(kT)
    }
    var KT = MT(cT(9167));
    kT.HTTP = class {
      constructor(TT) {
        let kT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        this.client = TT, this.headers = kT
      }
      get(TT) {
        let kT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        return this.request("get", TT, kT)
      }
      post(TT) {
        let kT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        return this.request("post", TT, kT)
      }
      del(TT) {
        let kT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        return this.request("del", TT, kT)
      }
      put(TT) {
        let kT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        return this.request("put", TT, kT)
      }
      request(TT, kT) {
        let cT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        return KT[TT](this.client.getHttpEndpoint(kT), this.getOptions(cT)).catch((TT => {
          var kT;
          if (TT.aborted) throw new lT.AbortError("Request aborted");
          const cT = TT.statusCode,
            MT = (null === (kT = TT.data) || void 0 === kT ? void 0 : kT.error) || TT.statusMessage || TT.message;
          if (!cT && !MT) throw TT;
          throw new lT.ServerError(cT, MT)
        }))
      }
      getOptions(TT) {
        return TT.headers = Object.assign({}, this.headers, TT.headers), this.authToken && (TT.headers.Authorization = `Bearer ${this.authToken}`), "undefined" !== typeof cc && cc.sys && cc.sys.isNative || (TT.withCredentials = !0), TT
      }
    }
  },
  9124: (TT, kT) => {
    var cT, lT;
    kT.Protocol = void 0, (cT = kT.Protocol || (kT.Protocol = {}))[cT.HANDSHAKE = 9] = "HANDSHAKE", cT[cT.JOIN_ROOM = 10] = "JOIN_ROOM", cT[cT.ERROR = 11] = "ERROR", cT[cT.LEAVE_ROOM = 12] = "LEAVE_ROOM", cT[cT.ROOM_DATA = 13] = "ROOM_DATA", cT[cT.ROOM_STATE = 14] = "ROOM_STATE", cT[cT.ROOM_STATE_PATCH = 15] = "ROOM_STATE_PATCH", cT[cT.ROOM_DATA_SCHEMA = 16] = "ROOM_DATA_SCHEMA", cT[cT.ROOM_DATA_BYTES = 17] = "ROOM_DATA_BYTES", kT.ErrorCode = void 0, (lT = kT.ErrorCode || (kT.ErrorCode = {}))[lT.MATCHMAKE_NO_HANDLER = 4210] = "MATCHMAKE_NO_HANDLER", lT[lT.MATCHMAKE_INVALID_CRITERIA = 4211] = "MATCHMAKE_INVALID_CRITERIA", lT[lT.MATCHMAKE_INVALID_ROOM_ID = 4212] = "MATCHMAKE_INVALID_ROOM_ID", lT[lT.MATCHMAKE_UNHANDLED = 4213] = "MATCHMAKE_UNHANDLED", lT[lT.MATCHMAKE_EXPIRED = 4214] = "MATCHMAKE_EXPIRED", lT[lT.AUTH_FAILED = 4215] = "AUTH_FAILED", lT[lT.APPLICATION_ERROR = 4216] = "APPLICATION_ERROR"
  },
  9097: (TT, kT, cT) => {
    var lT = cT(9101),
      MT = cT(9124),
      KT = cT(9127),
      OT = cT(9133),
      yT = cT(9139),
      fT = cT(9115),
      xT = cT(9145),
      IT = cT(9093),
      AT = cT(9154);
    class CT {
      constructor(TT, kT) {
        this.onStateChange = yT.createSignal(), this.onError = yT.createSignal(), this.ZF = yT.createSignal(), this.onJoin = yT.createSignal(), this.hasJoined = !1, this.onMessageHandlers = OT.createNanoEvents(), this.roomId = null, this.name = TT, this.packr = new AT.Packr, this.packr.encode(void 0), kT && (this.aN = new(KT.getSerializer("schema")), this.rootSchema = kT, this.aN.state = new kT), this.onError(((TT, kT) => {
          var cT;
          return null === (cT = console.warn) || void 0 === cT ? void 0 : cT.call(console, `colyseus.js - onError => (${TT}) ${kT}`)
        })), this.ZF((() => this.hN()))
      }
      connect(TT, kT) {
        let cT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : this,
          MT = arguments.length > 3 ? arguments[3] : void 0,
          KT = arguments.length > 4 ? arguments[4] : void 0;
        const OT = new lT.Connection(MT.protocol);
        if (cT.connection = OT, OT.events.onmessage = CT.prototype.onMessageCallback.bind(cT), OT.events.onclose = function(TT) {
            var lT;
            if (!cT.hasJoined) return null === (lT = console.warn) || void 0 === lT || lT.call(console, `Room connection was closed unexpectedly (${TT.code}): ${TT.reason}`), void cT.onError.invoke(TT.code, TT.reason);
            TT.code === IT.CloseCode.DEVMODE_RESTART && kT ? kT() : (cT.ZF.invoke(TT.code, TT.reason), cT.destroy())
          }, OT.events.onerror = function(TT) {
            var kT;
            null === (kT = console.warn) || void 0 === kT || kT.call(console, `Room, onError (${TT.code}): ${TT.reason}`), cT.onError.invoke(TT.code, TT.reason)
          }, "h3" === MT.protocol) {
          const kT = new URL(TT);
          OT.connect(kT.origin, MT)
        } else OT.connect(TT, KT)
      }
      leave() {
        let TT = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
        return new Promise((kT => {
          this.ZF((TT => kT(TT))), this.connection ? TT ? (this.packr.buffer[0] = MT.Protocol.LEAVE_ROOM, this.connection.send(this.packr.buffer.subarray(0, 1))) : this.connection.close() : this.ZF.invoke(IT.CloseCode.CONSENTED)
        }))
      }
      yN(TT, kT) {
        return this.onMessageHandlers.on(this.getMessageHandlerKey(TT), kT)
      }
      send(TT, kT) {
        const cT = {
          offset: 1
        };
        this.packr.buffer[0] = MT.Protocol.ROOM_DATA, "string" === typeof TT ? fT.encode.string(this.packr.buffer, TT, cT) : fT.encode.number(this.packr.buffer, TT, cT), this.packr.position = 0;
        const lT = void 0 !== kT ? this.packr.pack(kT, 2048 + cT.offset) : this.packr.buffer.subarray(0, cT.offset);
        this.connection.send(lT)
      }
      sendUnreliable(TT, kT) {
        const cT = {
          offset: 1
        };
        this.packr.buffer[0] = MT.Protocol.ROOM_DATA, "string" === typeof TT ? fT.encode.string(this.packr.buffer, TT, cT) : fT.encode.number(this.packr.buffer, TT, cT), this.packr.position = 0;
        const lT = void 0 !== kT ? this.packr.pack(kT, 2048 + cT.offset) : this.packr.buffer.subarray(0, cT.offset);
        this.connection.sendUnreliable(lT)
      }
      SF(TT, kT) {
        const cT = {
          offset: 1
        };
        if (this.packr.buffer[0] = MT.Protocol.ROOM_DATA_BYTES, "string" === typeof TT ? fT.encode.string(this.packr.buffer, TT, cT) : fT.encode.number(this.packr.buffer, TT, cT), kT.byteLength + cT.offset > this.packr.buffer.byteLength) {
          const TT = new Uint8Array(cT.offset + kT.byteLength);
          TT.set(this.packr.buffer), this.packr.useBuffer(TT)
        }
        this.packr.buffer.set(kT, cT.offset), this.connection.send(this.packr.buffer.subarray(0, cT.offset + kT.byteLength))
      }
      get state() {
        return this.aN.getState()
      }
      hN() {
        this.onJoin.clear(), this.onStateChange.clear(), this.onError.clear(), this.ZF.clear(), this.onMessageHandlers.events = {}, this.aN instanceof xT.Yz && (this.aN.pj.root.callbacks = {})
      }
      onMessageCallback(TT) {
        const kT = new Uint8Array(TT.data),
          cT = {
            offset: 1
          },
          lT = kT[0];
        if (lT === MT.Protocol.JOIN_ROOM) {
          const TT = fT.decode.utf8Read(kT, cT, kT[cT.offset++]);
          if (this.serializerId = fT.decode.utf8Read(kT, cT, kT[cT.offset++]), !this.aN) {
            const TT = KT.getSerializer(this.serializerId);
            this.aN = new TT
          }
          kT.byteLength > cT.offset && this.aN.handshake && this.aN.handshake(kT, cT), this.reconnectionToken = `${this.roomId}:${TT}`, this.hasJoined = !0, this.onJoin.invoke(), this.packr.buffer[0] = MT.Protocol.JOIN_ROOM, this.connection.send(this.packr.buffer.subarray(0, 1))
        } else if (lT === MT.Protocol.ERROR) {
          const TT = fT.decode.number(kT, cT),
            lT = fT.decode.string(kT, cT);
          this.onError.invoke(TT, lT)
        } else if (lT === MT.Protocol.LEAVE_ROOM) this.leave();
        else if (lT === MT.Protocol.ROOM_STATE) this.aN.setState(kT, cT), this.onStateChange.invoke(this.aN.getState());
        else if (lT === MT.Protocol.ROOM_STATE_PATCH) this.aN.patch(kT, cT), this.onStateChange.invoke(this.aN.getState());
        else if (lT === MT.Protocol.ROOM_DATA) {
          const TT = fT.decode.stringCheck(kT, cT) ? fT.decode.string(kT, cT) : fT.decode.number(kT, cT),
            lT = kT.byteLength > cT.offset ? AT.unpack(kT, {
              start: cT.offset
            }) : void 0;
          this.dispatchMessage(TT, lT)
        } else if (lT === MT.Protocol.ROOM_DATA_BYTES) {
          const TT = fT.decode.stringCheck(kT, cT) ? fT.decode.string(kT, cT) : fT.decode.number(kT, cT);
          this.dispatchMessage(TT, kT.subarray(cT.offset))
        }
      }
      dispatchMessage(TT, kT) {
        var cT;
        const lT = this.getMessageHandlerKey(TT);
        this.onMessageHandlers.events[lT] ? this.onMessageHandlers.emit(lT, kT) : this.onMessageHandlers.events["*"] ? this.onMessageHandlers.emit("*", TT, kT) : null === (cT = console.warn) || void 0 === cT || cT.call(console, `colyseus.js: onMessage() not registered for type '${TT}'.`)
      }
      destroy() {
        this.aN && this.aN.teardown()
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
    kT.XA = CT
  },
  9174: (TT, kT, cT) => {
    var lT = cT(9086);
    let MT;

    function KT() {
      if (!MT) try {
        MT = "undefined" !== typeof cc && cc.sys && cc.sys.localStorage ? cc.sys.localStorage : window.localStorage
      } catch (TT) {}
      return MT || "undefined" === typeof globalThis.indexedDB || (MT = new OT), MT || (MT = {
        cache: {},
        setItem: function(TT, kT) {
          this.cache[TT] = kT
        },
        getItem: function(TT) {
          this.cache[TT]
        },
        removeItem: function(TT) {
          delete this.cache[TT]
        }
      }), MT
    }
    class OT {
      constructor() {
        this.dbPromise = new Promise((TT => {
          const kT = indexedDB.open("_colyseus_storage", 1);
          kT.onupgradeneeded = () => kT.result.createObjectStore("store"), kT.onsuccess = () => TT(kT.result)
        }))
      }
      tx(TT, kT) {
        return lT.__awaiter(this, void 0, void 0, (function*() {
          const cT = (yield this.dbPromise).transaction("store", TT).objectStore("store");
          return kT(cT)
        }))
      }
      setItem(TT, kT) {
        return this.tx("readwrite", (cT => cT.put(kT, TT))).then()
      }
      getItem(TT) {
        return lT.__awaiter(this, void 0, void 0, (function*() {
          const kT = yield this.tx("readonly", (kT => kT.get(TT)));
          return new Promise((TT => {
            kT.onsuccess = () => TT(kT.result)
          }))
        }))
      }
      removeItem(TT) {
        return this.tx("readwrite", (kT => kT.delete(TT))).then()
      }
    }
    kT.getItem = function(TT, kT) {
      const cT = KT().getItem(TT);
      "undefined" !== typeof Promise && cT instanceof Promise ? cT.then((TT => kT(TT))) : kT(cT)
    }, kT.removeItem = function(TT) {
      KT().removeItem(TT)
    }, kT.setItem = function(TT, kT) {
      KT().setItem(TT, kT)
    }
  },
  9133: (TT, kT) => {
    kT.createNanoEvents = () => ({
      emit(TT) {
        let kT = this.events[TT] || [];
        for (var cT = arguments.length, lT = new Array(cT > 1 ? cT - 1 : 0), MT = 1; MT < cT; MT++) lT[MT - 1] = arguments[MT];
        for (let KT = 0, OT = kT.length; KT < OT; KT++) kT[KT](...lT)
      },
      events: {},
      on(TT, kT) {
        var cT;
        return (null === (cT = this.events[TT]) || void 0 === cT ? void 0 : cT.push(kT)) || (this.events[TT] = [kT]), () => {
          var cT;
          this.events[TT] = null === (cT = this.events[TT]) || void 0 === cT ? void 0 : cT.filter((TT => kT !== TT))
        }
      }
    })
  },
  9139: (TT, kT) => {
    class cT {
      constructor() {
        this.handlers = []
      }
      register(TT) {
        return this.handlers.push(TT), this
      }
      invoke() {
        for (var TT = arguments.length, kT = new Array(TT), cT = 0; cT < TT; cT++) kT[cT] = arguments[cT];
        this.handlers.forEach((TT => TT.apply(this, kT)))
      }
      invokeAsync() {
        for (var TT = arguments.length, kT = new Array(TT), cT = 0; cT < TT; cT++) kT[cT] = arguments[cT];
        return Promise.all(this.handlers.map((TT => TT.apply(this, kT))))
      }
      remove(TT) {
        const kT = this.handlers.indexOf(TT);
        this.handlers[kT] = this.handlers[this.handlers.length - 1], this.handlers.pop()
      }
      clear() {
        this.handlers = []
      }
    }
    kT.EventEmitter = cT, kT.createSignal = function() {
      const TT = new cT;

      function kT(kT) {
        return TT.register(kT, null === this)
      }
      return kT.once = kT => {
        const cT = function() {
          for (var lT = arguments.length, MT = new Array(lT), KT = 0; KT < lT; KT++) MT[KT] = arguments[KT];
          kT.apply(this, MT), TT.remove(cT)
        };
        TT.register(cT)
      }, kT.remove = kT => TT.remove(kT), kT.invoke = function() {
        return TT.invoke(...arguments)
      }, kT.invokeAsync = function() {
        return TT.invokeAsync(...arguments)
      }, kT.clear = () => TT.clear(), kT
    }
  },
  9093: (TT, kT) => {
    var cT;
    kT.CloseCode = void 0, (cT = kT.CloseCode || (kT.CloseCode = {}))[cT.CONSENTED = 4e3] = "CONSENTED", cT[cT.DEVMODE_RESTART = 4010] = "DEVMODE_RESTART";
    class lT extends Error {
      constructor(TT, kT) {
        super(kT), this.name = "ServerError", this.code = TT
      }
    }
    class MT extends Error {
      constructor(TT) {
        super(TT), this.name = "AbortError"
      }
    }
    kT.AbortError = MT, kT.ServerError = lT
  },
  9071: (TT, kT, cT) => {
    cT(9076);
    var lT = cT(9079),
      MT = cT(9124),
      KT = cT(9097),
      OT = cT(9172),
      yT = cT(9093),
      fT = cT(9145),
      xT = cT(9186),
      IT = cT(9127);
    IT.registerSerializer("schema", fT.Yz), IT.registerSerializer("none", xT.NoneSerializer), kT.Client = lT.Client, kT.MatchMakeError = lT.MatchMakeError, Object.defineProperty(kT, "ErrorCode", {
      enumerable: !0,
      get: function() {
        return MT.ErrorCode
      }
    }), Object.defineProperty(kT, "Protocol", {
      enumerable: !0,
      get: function() {
        return MT.Protocol
      }
    }), kT.XA = KT.XA, kT.Auth = OT.Auth, kT.ServerError = yT.ServerError, kT.Yz = fT.Yz, kT.getStateCallbacks = fT.getStateCallbacks, kT.registerSerializer = IT.registerSerializer
  },
  9076: () => {
    ArrayBuffer.isView || (ArrayBuffer.isView = TT => null !== TT && "object" === typeof TT && TT.buffer instanceof ArrayBuffer), "undefined" === typeof globalThis && "undefined" !== typeof window && (window.globalThis = window), "undefined" === typeof FormData && (globalThis.FormData = class {})
  },
  9186: (TT, kT) => {
    kT.NoneSerializer = class {
      setState(TT) {}
      getState() {
        return null
      }
      patch(TT) {}
      teardown() {}
      handshake(TT) {}
    }
  },
  9145: (TT, kT, cT) => {
    var lT = cT(9115);
    kT.Yz = class {
      setState(TT, kT) {
        this.pj.decode(TT, kT)
      }
      getState() {
        return this.state
      }
      patch(TT, kT) {
        return this.pj.decode(TT, kT)
      }
      teardown() {
        this.pj.root.clearRefs()
      }
      handshake(TT, kT) {
        this.state ? (lT.Reflection.decode(TT, kT), this.pj = new lT.Decoder(this.state)) : (this.pj = lT.Reflection.decode(TT, kT), this.state = this.pj.state)
      }
    }, kT.getStateCallbacks = function(TT) {
      try {
        return lT.getDecoderStateCallbacks(TT.aN.pj)
      } catch (kT) {
        return
      }
    }
  },
  9127: (TT, kT) => {
    const cT = {};
    kT.getSerializer = function(TT) {
      const kT = cT[TT];
      if (!kT) throw new Error("missing serializer: " + TT);
      return kT
    }, kT.registerSerializer = function(TT, kT) {
      cT[TT] = kT
    }
  },
  9106: (TT, kT, cT) => {
    var lT = cT(9086),
      MT = cT(9115);
    kT.H3TransportTransport = class {
      constructor(TT) {
        this.events = TT, this.isOpen = !1, this.lengthPrefixBuffer = new Uint8Array(9)
      }
      connect(TT) {
        let kT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        const cT = kT.fingerprint && {
          serverCertificateHashes: [{
            algorithm: "sha-256",
            value: new Uint8Array(kT.fingerprint).buffer
          }]
        } || void 0;
        this.wt = new WebTransport(TT, cT), this.wt.ready.then((TT => {
          console.log("WebTransport ready!", TT), this.isOpen = !0, this.unreliableReader = this.wt.datagrams.readable.getReader(), this.unreliableWriter = this.wt.datagrams.writable.getWriter();
          this.wt.incomingBidirectionalStreams.getReader().read().then((TT => {
            this.reader = TT.value.readable.getReader(), this.writer = TT.value.writable.getWriter(), this.sendSeatReservation(kT.room.roomId, kT.sessionId, kT.reconnectionToken), this.readIncomingData(), this.readIncomingUnreliableData()
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
        const kT = MT.encode.number(this.lengthPrefixBuffer, TT.length, {
            offset: 0
          }),
          cT = new Uint8Array(kT + TT.length);
        cT.set(this.lengthPrefixBuffer.subarray(0, kT), 0), cT.set(TT, kT), this.writer.write(cT)
      }
      sendUnreliable(TT) {
        const kT = MT.encode.number(this.lengthPrefixBuffer, TT.length, {
            offset: 0
          }),
          cT = new Uint8Array(kT + TT.length);
        cT.set(this.lengthPrefixBuffer.subarray(0, kT), 0), cT.set(TT, kT), this.unreliableWriter.write(cT)
      }
      close(TT, kT) {
        try {
          this.wt.close({
            closeCode: TT,
            reason: kT
          })
        } catch (cT) {
          console.error(cT)
        }
      }
      readIncomingData() {
        return lT.__awaiter(this, void 0, void 0, (function*() {
          let TT;
          for (; this.isOpen;) {
            try {
              TT = yield this.reader.read();
              const kT = TT.value,
                cT = {
                  offset: 0
                };
              do {
                const TT = MT.decode.number(kT, cT);
                this.events.onmessage({
                  data: kT.subarray(cT.offset, cT.offset + TT)
                }), cT.offset += TT
              } while (cT.offset < kT.length)
            } catch (kT) {
              -1 === kT.message.indexOf("session is closed") && console.error("H3Transport: failed to read incoming data", kT);
              break
            }
            if (TT.done) break
          }
        }))
      }
      readIncomingUnreliableData() {
        return lT.__awaiter(this, void 0, void 0, (function*() {
          let TT;
          for (; this.isOpen;) {
            try {
              TT = yield this.unreliableReader.read();
              const kT = TT.value,
                cT = {
                  offset: 0
                };
              do {
                const TT = MT.decode.number(kT, cT);
                this.events.onmessage({
                  data: kT.subarray(cT.offset, cT.offset + TT)
                }), cT.offset += TT
              } while (cT.offset < kT.length)
            } catch (kT) {
              -1 === kT.message.indexOf("session is closed") && console.error("H3Transport: failed to read incoming data", kT);
              break
            }
            if (TT.done) break
          }
        }))
      }
      sendSeatReservation(TT, kT, cT) {
        const lT = {
            offset: 0
          },
          KT = [];
        MT.encode.string(KT, TT, lT), MT.encode.string(KT, kT, lT), cT && MT.encode.string(KT, cT, lT), this.writer.write(new Uint8Array(KT).buffer)
      }
      _close() {
        this.isOpen = !1
      }
    }
  },
  9119: (TT, kT, cT) => {
    var lT = cT(9121);
    const MT = globalThis.WebSocket || lT;
    kT.WebSocketTransport = class {
      constructor(TT) {
        this.events = TT
      }
      send(TT) {
        this.ws.send(TT)
      }
      sendUnreliable(TT) {
        console.warn("colyseus.js: The WebSocket transport does not support unreliable messages")
      }
      connect(TT, kT) {
        try {
          this.ws = new MT(TT, {
            headers: kT,
            protocols: this.protocols
          })
        } catch (cT) {
          this.ws = new MT(TT, this.protocols)
        }
        this.ws.binaryType = "arraybuffer", this.ws.onopen = this.events.onopen, this.ws.onmessage = this.events.onmessage, this.ws.onclose = this.events.onclose, this.ws.onerror = this.events.onerror
      }
      close(TT, kT) {
        this.ws.close(TT, kT)
      }
      get isOpen() {
        return this.ws.readyState === MT.OPEN
      }
    }
  },
  9121: TT => {
    TT.exports = function() {
      throw new Error("ws does not work in the browser. Browser clients must use the native WebSocket object")
    }
  },
  9167: (TT, kT, cT) => {
    function lT(TT, kT) {
      kT.headers = TT.headers || {}, kT.statusMessage = TT.statusText, kT.statusCode = TT.status, kT.data = TT.response
    }

    function MT(TT, kT, cT) {
      return new Promise((function(MT, KT) {
        cT = cT || {};
        var OT, yT, fT, xT = new XMLHttpRequest,
          IT = cT.body,
          AT = cT.headers || {};
        for (OT in cT.timeout && (xT.timeout = cT.timeout), xT.ontimeout = xT.onerror = function(TT) {
            TT.timeout = "timeout" == TT.type, KT(TT)
          }, xT.onabort = function(TT) {
            TT.aborted = !0, KT(TT)
          }, xT.open(TT, kT.href || kT), xT.onload = function() {
            for (fT = xT.getAllResponseHeaders().trim().split(/[\r\n]+/), lT(xT, xT); yT = fT.shift();) yT = yT.split(": "), xT.headers[yT.shift().toLowerCase()] = yT.join(": ");
            if ((yT = xT.headers["content-type"]) && ~yT.indexOf("application/json")) try {
              xT.data = JSON.parse(xT.data, cT.reviver)
            } catch (TT) {
              return lT(xT, TT), KT(TT)
            }(xT.status >= 400 ? KT : MT)(xT)
          }, typeof FormData < "u" && IT instanceof FormData || IT && "object" == typeof IT && (AT["content-type"] = "application/json", IT = JSON.stringify(IT)), xT.withCredentials = !!cT.withCredentials, AT) xT.setRequestHeader(OT, AT[OT]);
        xT.send(IT), cT.signal && cT.signal.addEventListener("abort", (function() {
          xT.abort()
        }))
      }))
    }
    cT.r(kT), cT.d(kT, {
      del: () => fT,
      get: () => KT,
      patch: () => yT,
      post: () => OT,
      put: () => xT,
      send: () => MT
    });
    var KT = MT.bind(MT, "GET"),
      OT = MT.bind(MT, "POST"),
      yT = MT.bind(MT, "PATCH"),
      fT = MT.bind(MT, "DELETE"),
      xT = MT.bind(MT, "PUT")
  },
  9154: (TT, kT, cT) => {
    var lT, MT, KT;
    cT.r(kT), cT.d(kT, {
      ALWAYS: () => Wk,
      C1: () => aT,
      DECIMAL_FIT: () => pk,
      DECIMAL_ROUND: () => nk,
      Decoder: () => fk,
      Encoder: () => Yk,
      FLOAT32_OPTIONS: () => jk,
      NEVER: () => Bk,
      Packr: () => Vk,
      RESERVE_START_SPACE: () => sk,
      RESET_BUFFER_MODE: () => qk,
      REUSE_BUFFER_MODE: () => ik,
      Unpackr: () => bT,
      addExtension: () => dk,
      clearSource: () => Ok,
      decode: () => Ck,
      decodeIter: () => Tc,
      encode: () => Uk,
      encodeIter: () => kc,
      isNativeAccelerationEnabled: () => dT,
      mapsAsObjects: () => lc,
      pack: () => gk,
      roundFloat32: () => Sk,
      unpack: () => Ik,
      unpackMultiple: () => Ak,
      useRecords: () => cc
    });
    try {
      lT = new TextDecoder
    } catch (Mc) {}
    var OT = 0;
    const yT = [];
    var fT, xT, IT, AT, CT, jT = yT,
      vT = 0,
      tT = {},
      hT = 0,
      NT = 0,
      QT = [],
      ST = {
        useRecords: !1,
        mapsAsObjects: !0
      };
    class DT {}
    const aT = new DT;
    aT.name = "MessagePack 0xC1";
    var FT, rT, PT, wT = !1,
      mT = 2;
    try {
      new Function("")
    } catch (Mc) {
      mT = 1 / 0
    }
    class bT {
      constructor(TT) {
        TT && (!1 === TT.useRecords && void 0 === TT.mapsAsObjects && (TT.mapsAsObjects = !0), TT.sequential && !1 !== TT.trusted && (TT.trusted = !0, TT.structures || 0 == TT.useRecords || (TT.structures = [], TT.maxSharedStructures || (TT.maxSharedStructures = 0))), TT.structures ? TT.structures.sharedLength = TT.structures.length : TT.getStructures && ((TT.structures = []).uninitialized = !0, TT.structures.sharedLength = 0), TT.int64AsNumber && (TT.int64AsType = "number")), Object.assign(this, TT)
      }
      unpack(TT, kT) {
        if (MT) return Kk((() => (Ok(), this ? this.unpack(TT, kT) : bT.prototype.unpack.call(ST, TT, kT))));
        TT.buffer || TT.constructor !== ArrayBuffer || (TT = "undefined" !== typeof Buffer ? Buffer.from(TT) : new Uint8Array(TT)), "object" === typeof kT ? (KT = kT.end || TT.length, OT = kT.start || 0) : (OT = 0, KT = kT > -1 ? kT : TT.length), vT = 0, NT = 0, xT = null, jT = yT, IT = null, MT = TT;
        try {
          CT = TT.dataView || (TT.dataView = new DataView(TT.buffer, TT.byteOffset, TT.byteLength))
        } catch (Mc) {
          if (MT = null, TT instanceof Uint8Array) throw Mc;
          throw new Error("Source must be a Uint8Array or Buffer but was a " + (TT && "object" == typeof TT ? TT.constructor.name : typeof TT))
        }
        if (this instanceof bT) {
          if (tT = this, this.structures) return fT = this.structures, zT(kT);
          (!fT || fT.length > 0) && (fT = [])
        } else tT = ST, (!fT || fT.length > 0) && (fT = []);
        return zT(kT)
      }
      unpackMultiple(TT, kT) {
        let cT, lT = 0;
        try {
          wT = !0;
          let MT = TT.length,
            KT = this ? this.unpack(TT, MT) : xk.unpack(TT, MT);
          if (!kT) {
            for (cT = [KT]; OT < MT;) lT = OT, cT.push(zT());
            return cT
          }
          if (!1 === kT(KT, lT, OT)) return;
          for (; OT < MT;)
            if (lT = OT, !1 === kT(zT(), lT, OT)) return
        } catch (Mc) {
          throw Mc.lastPosition = lT, Mc.values = cT, Mc
        } finally {
          wT = !1, Ok()
        }
      }
      _mergeStructures(TT, kT) {
        rT && (TT = rT.call(this, TT)), TT = TT || [], Object.isFrozen(TT) && (TT = TT.map((TT => TT.slice(0))));
        for (let cT = 0, lT = TT.length; cT < lT; cT++) {
          let kT = TT[cT];
          kT && (kT.isShared = !0, cT >= 32 && (kT.highByte = cT - 32 >> 5))
        }
        TT.sharedLength = TT.length;
        for (let cT in kT || [])
          if (cT >= 0) {
            let lT = TT[cT],
              MT = kT[cT];
            MT && (lT && ((TT.restoreStructures || (TT.restoreStructures = []))[cT] = lT), TT[cT] = MT)
          } return this.structures = TT
      }
      decode(TT, kT) {
        return this.unpack(TT, kT)
      }
    }

    function zT(TT) {
      try {
        if (!tT.trusted && !wT) {
          let TT = fT.sharedLength || 0;
          TT < fT.length && (fT.length = TT)
        }
        let kT;
        if (tT.randomAccessStructure && MT[OT] < 64 && MT[OT] >= 32 && FT ? (kT = FT(MT, OT, KT, tT), MT = null, TT && TT.lazy || !kT || (kT = kT.toJSON()), OT = KT) : kT = oT(), IT && (OT = IT.postBundlePosition, IT = null), wT && (fT.restoreStructures = null), OT == KT) fT && fT.restoreStructures && JT(), fT = null, MT = null, AT && (AT = null);
        else {
          if (OT > KT) throw new Error("Unexpected end of MessagePack data");
          if (!wT) {
            let TT;
            try {
              TT = JSON.stringify(kT, ((TT, kT) => "bigint" === typeof kT ? `${kT}n` : kT)).slice(0, 100)
            } catch (Mc) {
              TT = "(JSON view not available " + Mc + ")"
            }
            throw new Error("Data read, but end of buffer not reached " + TT)
          }
        }
        return kT
      } catch (Mc) {
        throw fT && fT.restoreStructures && JT(), Ok(), (Mc instanceof RangeError || Mc.message.startsWith("Unexpected end of buffer") || OT > KT) && (Mc.incomplete = !0), Mc
      }
    }

    function JT() {
      for (let TT in fT.restoreStructures) fT[TT] = fT.restoreStructures[TT];
      fT.restoreStructures = null
    }

    function oT() {
      let TT = MT[OT++];
      if (TT < 160) {
        if (TT < 128) {
          if (TT < 64) return TT;
          {
            let kT = fT[63 & TT] || tT.getStructures && VT()[63 & TT];
            return kT ? (kT.read || (kT.read = eT(kT, 63 & TT)), kT.read()) : TT
          }
        }
        if (TT < 144) {
          if (TT -= 128, tT.mapsAsObjects) {
            let kT = {};
            for (let cT = 0; cT < TT; cT++) {
              let TT = qT();
              "__proto__" === TT && (TT = "__proto_"), kT[TT] = oT()
            }
            return kT
          } {
            let kT = new Map;
            for (let cT = 0; cT < TT; cT++) kT.set(oT(), oT());
            return kT
          }
        } {
          TT -= 144;
          let kT = new Array(TT);
          for (let cT = 0; cT < TT; cT++) kT[cT] = oT();
          return tT.freezeData ? Object.freeze(kT) : kT
        }
      }
      if (TT < 192) {
        let kT = TT - 160;
        if (NT >= OT) return xT.slice(OT - hT, (OT += kT) - hT);
        if (0 == NT && KT < 140) {
          let TT = kT < 16 ? BT(kT) : YT(kT);
          if (null != TT) return TT
        }
        return ET(kT)
      } {
        let kT;
        switch (TT) {
          case 192:
            return null;
          case 193:
            return IT ? (kT = oT(), kT > 0 ? IT[1].slice(IT.position1, IT.position1 += kT) : IT[0].slice(IT.position0, IT.position0 -= kT)) : aT;
          case 194:
            return !1;
          case 195:
            return !0;
          case 196:
            if (kT = MT[OT++], void 0 === kT) throw new Error("Unexpected end of buffer");
            return nT(kT);
          case 197:
            return kT = CT.getUint16(OT), OT += 2, nT(kT);
          case 198:
            return kT = CT.getUint32(OT), OT += 4, nT(kT);
          case 199:
            return pT(MT[OT++]);
          case 200:
            return kT = CT.getUint16(OT), OT += 2, pT(kT);
          case 201:
            return kT = CT.getUint32(OT), OT += 4, pT(kT);
          case 202:
            if (kT = CT.getFloat32(OT), tT.useFloat32 > 2) {
              let TT = yk[(127 & MT[OT]) << 1 | MT[OT + 1] >> 7];
              return OT += 4, (TT * kT + (kT > 0 ? .5 : -.5) | 0) / TT
            }
            return OT += 4, kT;
          case 203:
            return kT = CT.getFloat64(OT), OT += 8, kT;
          case 204:
            return MT[OT++];
          case 205:
            return kT = CT.getUint16(OT), OT += 2, kT;
          case 206:
            return kT = CT.getUint32(OT), OT += 4, kT;
          case 207:
            return "number" === tT.int64AsType ? (kT = 4294967296 * CT.getUint32(OT), kT += CT.getUint32(OT + 4)) : "string" === tT.int64AsType ? kT = CT.getBigUint64(OT).toString() : "auto" === tT.int64AsType ? (kT = CT.getBigUint64(OT), kT <= BigInt(2) << BigInt(52) && (kT = Number(kT))) : kT = CT.getBigUint64(OT), OT += 8, kT;
          case 208:
            return CT.getInt8(OT++);
          case 209:
            return kT = CT.getInt16(OT), OT += 2, kT;
          case 210:
            return kT = CT.getInt32(OT), OT += 4, kT;
          case 211:
            return "number" === tT.int64AsType ? (kT = 4294967296 * CT.getInt32(OT), kT += CT.getUint32(OT + 4)) : "string" === tT.int64AsType ? kT = CT.getBigInt64(OT).toString() : "auto" === tT.int64AsType ? (kT = CT.getBigInt64(OT), kT >= BigInt(-2) << BigInt(52) && kT <= BigInt(2) << BigInt(52) && (kT = Number(kT))) : kT = CT.getBigInt64(OT), OT += 8, kT;
          case 212:
            if (kT = MT[OT++], 114 == kT) return Tk(63 & MT[OT++]);
            {
              let TT = QT[kT];
              if (TT) return TT.read ? (OT++, TT.read(oT())) : TT.noBuffer ? (OT++, TT()) : TT(MT.subarray(OT, ++OT));
              throw new Error("Unknown extension " + kT)
            }
          case 213:
            return kT = MT[OT], 114 == kT ? (OT++, Tk(63 & MT[OT++], MT[OT++])) : pT(2);
          case 214:
            return pT(4);
          case 215:
            return pT(8);
          case 216:
            return pT(16);
          case 217:
            return kT = MT[OT++], NT >= OT ? xT.slice(OT - hT, (OT += kT) - hT) : ZT(kT);
          case 218:
            return kT = CT.getUint16(OT), NT >= (OT += 2) ? xT.slice(OT - hT, (OT += kT) - hT) : uT(kT);
          case 219:
            return kT = CT.getUint32(OT), NT >= (OT += 4) ? xT.slice(OT - hT, (OT += kT) - hT) : XT(kT);
          case 220:
            return kT = CT.getUint16(OT), OT += 2, RT(kT);
          case 221:
            return kT = CT.getUint32(OT), OT += 4, RT(kT);
          case 222:
            return kT = CT.getUint16(OT), OT += 2, gT(kT);
          case 223:
            return kT = CT.getUint32(OT), OT += 4, gT(kT);
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
    const HT = /^[a-zA-Z_$][a-zA-Z\d_$]*$/;

    function eT(TT, kT) {
      function cT() {
        if (cT.count++ > mT) {
          let cT = TT.read = new Function("r", "return function(){return " + (tT.freezeData ? "Object.freeze" : "") + "({" + TT.map((TT => "__proto__" === TT ? "__proto_:r()" : HT.test(TT) ? TT + ":r()" : "[" + JSON.stringify(TT) + "]:r()")).join(",") + "})}")(oT);
          return 0 === TT.highByte && (TT.read = GT(kT, TT.read)), cT()
        }
        let lT = {};
        for (let kT = 0, cT = TT.length; kT < cT; kT++) {
          let cT = TT[kT];
          "__proto__" === cT && (cT = "__proto_"), lT[cT] = oT()
        }
        return tT.freezeData ? Object.freeze(lT) : lT
      }
      return cT.count = 0, 0 === TT.highByte ? GT(kT, cT) : cT
    }
    const GT = (TT, kT) => function() {
      let cT = MT[OT++];
      if (0 === cT) return kT();
      let lT = TT < 32 ? -(TT + (cT << 5)) : TT + (cT << 5),
        KT = fT[lT] || VT()[lT];
      if (!KT) throw new Error("Record id is not defined for " + lT);
      return KT.read || (KT.read = eT(KT, TT)), KT.read()
    };

    function VT() {
      let TT = Kk((() => (MT = null, tT.getStructures())));
      return fT = tT._mergeStructures(TT, fT)
    }
    var ET = LT,
      ZT = LT,
      uT = LT,
      XT = LT;
    let dT = !1;

    function LT(TT) {
      let kT;
      if (TT < 16 && (kT = BT(TT))) return kT;
      if (TT > 64 && lT) return lT.decode(MT.subarray(OT, OT += TT));
      const cT = OT + TT,
        KT = [];
      for (kT = ""; OT < cT;) {
        const TT = MT[OT++];
        if (0 === (128 & TT)) KT.push(TT);
        else if (192 === (224 & TT)) {
          const kT = 63 & MT[OT++];
          KT.push((31 & TT) << 6 | kT)
        } else if (224 === (240 & TT)) {
          const kT = 63 & MT[OT++],
            cT = 63 & MT[OT++];
          KT.push((31 & TT) << 12 | kT << 6 | cT)
        } else if (240 === (248 & TT)) {
          let kT = (7 & TT) << 18 | (63 & MT[OT++]) << 12 | (63 & MT[OT++]) << 6 | 63 & MT[OT++];
          kT > 65535 && (kT -= 65536, KT.push(kT >>> 10 & 1023 | 55296), kT = 56320 | 1023 & kT), KT.push(kT)
        } else KT.push(TT);
        KT.length >= 4096 && (kT += UT.apply(String, KT), KT.length = 0)
      }
      return KT.length > 0 && (kT += UT.apply(String, KT)), kT
    }

    function RT(TT) {
      let kT = new Array(TT);
      for (let cT = 0; cT < TT; cT++) kT[cT] = oT();
      return tT.freezeData ? Object.freeze(kT) : kT
    }

    function gT(TT) {
      if (tT.mapsAsObjects) {
        let kT = {};
        for (let cT = 0; cT < TT; cT++) {
          let TT = qT();
          "__proto__" === TT && (TT = "__proto_"), kT[TT] = oT()
        }
        return kT
      } {
        let kT = new Map;
        for (let cT = 0; cT < TT; cT++) kT.set(oT(), oT());
        return kT
      }
    }
    var UT = String.fromCharCode;

    function YT(TT) {
      let kT = OT,
        cT = new Array(TT);
      for (let lT = 0; lT < TT; lT++) {
        const TT = MT[OT++];
        if ((128 & TT) > 0) return void(OT = kT);
        cT[lT] = TT
      }
      return UT.apply(String, cT)
    }

    function BT(TT) {
      if (TT < 4) {
        if (TT < 2) {
          if (0 === TT) return "";
          {
            let TT = MT[OT++];
            return (128 & TT) > 1 ? void(OT -= 1) : UT(TT)
          }
        } {
          let kT = MT[OT++],
            cT = MT[OT++];
          if ((128 & kT) > 0 || (128 & cT) > 0) return void(OT -= 2);
          if (TT < 3) return UT(kT, cT);
          let lT = MT[OT++];
          return (128 & lT) > 0 ? void(OT -= 3) : UT(kT, cT, lT)
        }
      } {
        let kT = MT[OT++],
          cT = MT[OT++],
          lT = MT[OT++],
          KT = MT[OT++];
        if ((128 & kT) > 0 || (128 & cT) > 0 || (128 & lT) > 0 || (128 & KT) > 0) return void(OT -= 4);
        if (TT < 6) {
          if (4 === TT) return UT(kT, cT, lT, KT);
          {
            let TT = MT[OT++];
            return (128 & TT) > 0 ? void(OT -= 5) : UT(kT, cT, lT, KT, TT)
          }
        }
        if (TT < 8) {
          let yT = MT[OT++],
            fT = MT[OT++];
          if ((128 & yT) > 0 || (128 & fT) > 0) return void(OT -= 6);
          if (TT < 7) return UT(kT, cT, lT, KT, yT, fT);
          let xT = MT[OT++];
          return (128 & xT) > 0 ? void(OT -= 7) : UT(kT, cT, lT, KT, yT, fT, xT)
        } {
          let yT = MT[OT++],
            fT = MT[OT++],
            xT = MT[OT++],
            IT = MT[OT++];
          if ((128 & yT) > 0 || (128 & fT) > 0 || (128 & xT) > 0 || (128 & IT) > 0) return void(OT -= 8);
          if (TT < 10) {
            if (8 === TT) return UT(kT, cT, lT, KT, yT, fT, xT, IT);
            {
              let TT = MT[OT++];
              return (128 & TT) > 0 ? void(OT -= 9) : UT(kT, cT, lT, KT, yT, fT, xT, IT, TT)
            }
          }
          if (TT < 12) {
            let AT = MT[OT++],
              CT = MT[OT++];
            if ((128 & AT) > 0 || (128 & CT) > 0) return void(OT -= 10);
            if (TT < 11) return UT(kT, cT, lT, KT, yT, fT, xT, IT, AT, CT);
            let jT = MT[OT++];
            return (128 & jT) > 0 ? void(OT -= 11) : UT(kT, cT, lT, KT, yT, fT, xT, IT, AT, CT, jT)
          } {
            let AT = MT[OT++],
              CT = MT[OT++],
              jT = MT[OT++],
              vT = MT[OT++];
            if ((128 & AT) > 0 || (128 & CT) > 0 || (128 & jT) > 0 || (128 & vT) > 0) return void(OT -= 12);
            if (TT < 14) {
              if (12 === TT) return UT(kT, cT, lT, KT, yT, fT, xT, IT, AT, CT, jT, vT);
              {
                let TT = MT[OT++];
                return (128 & TT) > 0 ? void(OT -= 13) : UT(kT, cT, lT, KT, yT, fT, xT, IT, AT, CT, jT, vT, TT)
              }
            } {
              let tT = MT[OT++],
                hT = MT[OT++];
              if ((128 & tT) > 0 || (128 & hT) > 0) return void(OT -= 14);
              if (TT < 15) return UT(kT, cT, lT, KT, yT, fT, xT, IT, AT, CT, jT, vT, tT, hT);
              let NT = MT[OT++];
              return (128 & NT) > 0 ? void(OT -= 15) : UT(kT, cT, lT, KT, yT, fT, xT, IT, AT, CT, jT, vT, tT, hT, NT)
            }
          }
        }
      }
    }

    function WT() {
      let TT, kT = MT[OT++];
      if (kT < 192) TT = kT - 160;
      else switch (kT) {
        case 217:
          TT = MT[OT++];
          break;
        case 218:
          TT = CT.getUint16(OT), OT += 2;
          break;
        case 219:
          TT = CT.getUint32(OT), OT += 4;
          break;
        default:
          throw new Error("Expected string")
      }
      return LT(TT)
    }

    function nT(TT) {
      return tT.copyBuffers ? Uint8Array.prototype.slice.call(MT, OT, OT += TT) : MT.subarray(OT, OT += TT)
    }

    function pT(TT) {
      let kT = MT[OT++];
      if (QT[kT]) {
        let cT;
        return QT[kT](MT.subarray(OT, cT = OT += TT), (TT => {
          OT = TT;
          try {
            return oT()
          } finally {
            OT = cT
          }
        }))
      }
      throw new Error("Unknown extension type " + kT)
    }
    var iT = new Array(4096);

    function qT() {
      let TT = MT[OT++];
      if (!(TT >= 160 && TT < 192)) return OT--, sT(oT());
      if (TT -= 160, NT >= OT) return xT.slice(OT - hT, (OT += TT) - hT);
      if (!(0 == NT && KT < 180)) return ET(TT);
      let kT, cT = 4095 & (TT << 5 ^ (TT > 1 ? CT.getUint16(OT) : TT > 0 ? MT[OT] : 0)),
        lT = iT[cT],
        yT = OT,
        fT = OT + TT - 3,
        IT = 0;
      if (lT && lT.bytes == TT) {
        for (; yT < fT;) {
          if (kT = CT.getUint32(yT), kT != lT[IT++]) {
            yT = 1879048192;
            break
          }
          yT += 4
        }
        for (fT += 3; yT < fT;)
          if (kT = MT[yT++], kT != lT[IT++]) {
            yT = 1879048192;
            break
          } if (yT === fT) return OT = yT, lT.string;
        fT -= 3, yT = OT
      }
      for (lT = [], iT[cT] = lT, lT.bytes = TT; yT < fT;) kT = CT.getUint32(yT), lT.push(kT), yT += 4;
      for (fT += 3; yT < fT;) kT = MT[yT++], lT.push(kT);
      let AT = TT < 16 ? BT(TT) : YT(TT);
      return lT.string = null != AT ? AT : ET(TT)
    }

    function sT(TT) {
      if ("string" === typeof TT) return TT;
      if ("number" === typeof TT || "boolean" === typeof TT || "bigint" === typeof TT) return TT.toString();
      if (null == TT) return TT + "";
      if (tT.allowArraysInMapKeys && Array.isArray(TT) && TT.flat().every((TT => ["string", "number", "boolean", "bigint"].includes(typeof TT)))) return TT.flat().toString();
      throw new Error("Invalid property type for record: " + typeof TT)
    }
    const Tk = (TT, kT) => {
      let cT = oT().map(sT),
        lT = TT;
      void 0 !== kT && (TT = TT < 32 ? -((kT << 5) + TT) : (kT << 5) + TT, cT.highByte = kT);
      let MT = fT[TT];
      return MT && (MT.isShared || wT) && ((fT.restoreStructures || (fT.restoreStructures = []))[TT] = MT), fT[TT] = cT, cT.read = eT(cT, lT), cT.read()
    };
    QT[0] = () => {}, QT[0].noBuffer = !0, QT[66] = TT => {
      let kT = TT.length,
        cT = BigInt(128 & TT[0] ? TT[0] - 256 : TT[0]);
      for (let lT = 1; lT < kT; lT++) cT <<= BigInt(8), cT += BigInt(TT[lT]);
      return cT
    };
    let kk = {
      Error: Error,
      TypeError: TypeError,
      ReferenceError: ReferenceError
    };
    QT[101] = () => {
      let TT = oT();
      return (kk[TT[0]] || Error)(TT[1], {
        cause: TT[2]
      })
    }, QT[105] = TT => {
      if (!1 === tT.structuredClone) throw new Error("Structured clone extension is disabled");
      let kT = CT.getUint32(OT - 4);
      AT || (AT = new Map);
      let cT, lT = MT[OT];
      cT = lT >= 144 && lT < 160 || 220 == lT || 221 == lT ? [] : {};
      let KT = {
        target: cT
      };
      AT.set(kT, KT);
      let yT = oT();
      return KT.used ? Object.assign(cT, yT) : (KT.target = yT, yT)
    }, QT[112] = TT => {
      if (!1 === tT.structuredClone) throw new Error("Structured clone extension is disabled");
      let kT = CT.getUint32(OT - 4),
        cT = AT.get(kT);
      return cT.used = !0, cT.target
    }, QT[115] = () => new Set(oT());
    const ck = ["Int8", "Uint8", "Uint8Clamped", "Int16", "Uint16", "Int32", "Uint32", "Float32", "Float64", "BigInt64", "BigUint64"].map((TT => TT + "Array"));
    let lk = "object" === typeof globalThis ? globalThis : window;
    QT[116] = TT => {
      let kT = TT[0],
        cT = ck[kT];
      if (!cT) {
        if (16 === kT) {
          let kT = new ArrayBuffer(TT.length - 1);
          return new Uint8Array(kT).set(TT.subarray(1)), kT
        }
        throw new Error("Could not find typed array for code " + kT)
      }
      return new lk[cT](Uint8Array.prototype.slice.call(TT, 1).buffer)
    }, QT[120] = () => {
      let TT = oT();
      return new RegExp(TT[0], TT[1])
    };
    const Mk = [];

    function Kk(TT) {
      PT && PT();
      let kT = KT,
        cT = OT,
        lT = vT,
        yT = hT,
        QT = NT,
        ST = xT,
        DT = jT,
        aT = AT,
        FT = IT,
        rT = new Uint8Array(MT.slice(0, KT)),
        mT = fT,
        bT = fT.slice(0, fT.length),
        zT = tT,
        JT = wT,
        oT = TT();
      return KT = kT, OT = cT, vT = lT, hT = yT, NT = QT, xT = ST, jT = DT, AT = aT, IT = FT, MT = rT, wT = JT, (fT = mT).splice(0, fT.length, ...bT), tT = zT, CT = new DataView(MT.buffer, MT.byteOffset, MT.byteLength), oT
    }

    function Ok() {
      MT = null, AT = null, fT = null
    }
    QT[98] = TT => {
      let kT = (TT[0] << 24) + (TT[1] << 16) + (TT[2] << 8) + TT[3],
        cT = OT;
      return OT += kT - TT.length, IT = Mk, (IT = [WT(), WT()]).position0 = 0, IT.position1 = 0, IT.postBundlePosition = OT, OT = cT, oT()
    }, QT[255] = TT => 4 == TT.length ? new Date(1e3 * (16777216 * TT[0] + (TT[1] << 16) + (TT[2] << 8) + TT[3])) : 8 == TT.length ? new Date(((TT[0] << 22) + (TT[1] << 14) + (TT[2] << 6) + (TT[3] >> 2)) / 1e6 + 1e3 * (4294967296 * (3 & TT[3]) + 16777216 * TT[4] + (TT[5] << 16) + (TT[6] << 8) + TT[7])) : 12 == TT.length ? new Date(((TT[0] << 24) + (TT[1] << 16) + (TT[2] << 8) + TT[3]) / 1e6 + 1e3 * ((128 & TT[4] ? -281474976710656 : 0) + 1099511627776 * TT[6] + 4294967296 * TT[7] + 16777216 * TT[8] + (TT[9] << 16) + (TT[10] << 8) + TT[11])) : new Date("invalid");
    const yk = new Array(147);
    for (let Kc = 0; Kc < 256; Kc++) yk[Kc] = +("1e" + Math.floor(45.15 - .30103 * Kc));
    const fk = bT;
    var xk = new bT({
      useRecords: !1
    });
    const Ik = xk.unpack,
      Ak = xk.unpackMultiple,
      Ck = xk.unpack,
      jk = {
        NEVER: 0,
        ALWAYS: 1,
        DECIMAL_ROUND: 3,
        DECIMAL_FIT: 4
      };
    let vk, tk, hk, Nk = new Float32Array(1),
      Qk = new Uint8Array(Nk.buffer, 0, 4);

    function Sk(TT) {
      Nk[0] = TT;
      let kT = yk[(127 & Qk[3]) << 1 | Qk[2] >> 7];
      return (kT * TT + (TT > 0 ? .5 : -.5) | 0) / kT
    }
    try {
      vk = new TextEncoder
    } catch (Mc) {}
    const Dk = "undefined" !== typeof Buffer,
      ak = Dk ? function(TT) {
        return Buffer.allocUnsafeSlow(TT)
      } : Uint8Array,
      Fk = Dk ? Buffer : Uint8Array,
      rk = Dk ? 4294967296 : 2144337920;
    let Pk, wk, mk, bk, zk, Jk = 0,
      Hk = null;
    const ek = /[\u0080-\uFFFF]/,
      Gk = Symbol("record-id");
    class Vk extends bT {
      constructor(TT) {
        let kT, cT, lT, MT;
        super(TT), this.offset = 0;
        let KT = Fk.prototype.utf8Write ? function(TT, kT) {
            return Pk.utf8Write(TT, kT, Pk.byteLength - kT)
          } : !(!vk || !vk.encodeInto) && function(TT, kT) {
            return vk.encodeInto(TT, Pk.subarray(kT)).written
          },
          OT = this;
        TT || (TT = {});
        let yT = TT && TT.sequential,
          fT = TT.structures || TT.saveStructures,
          xT = TT.maxSharedStructures;
        if (null == xT && (xT = fT ? 32 : 0), xT > 8160) throw new Error("Maximum maxSharedStructure is 8160");
        TT.structuredClone && void 0 == TT.moreTypes && (this.moreTypes = !0);
        let IT = TT.maxOwnStructures;
        null == IT && (IT = fT ? 32 : 64), this.structures || 0 == TT.useRecords || (this.structures = []);
        let AT = xT > 32 || IT + xT > 64,
          CT = xT + 64,
          jT = xT + IT + 64;
        if (jT > 8256) throw new Error("Maximum maxSharedStructure + maxOwnStructure is 8192");
        let vT = [],
          tT = 0,
          hT = 0;
        this.pack = this.encode = function(TT, KT) {
          if (Pk || (Pk = new ak(8192), mk = Pk.dataView || (Pk.dataView = new DataView(Pk.buffer, 0, 8192)), Jk = 0), bk = Pk.length - 10, bk - Jk < 2048 ? (Pk = new ak(Pk.length), mk = Pk.dataView || (Pk.dataView = new DataView(Pk.buffer, 0, Pk.length)), bk = Pk.length - 10, Jk = 0) : Jk = Jk + 7 & 2147483640, kT = Jk, KT & sk && (Jk += 255 & KT), MT = OT.structuredClone ? new Map : null, OT.bundleStrings && "string" !== typeof TT ? (Hk = [], Hk.size = 1 / 0) : Hk = null, lT = OT.structures, lT) {
            lT.uninitialized && (lT = OT._mergeStructures(OT.getStructures()));
            let TT = lT.sharedLength || 0;
            if (TT > xT) throw new Error("Shared structures is larger than maximum shared structures, try increasing maxSharedStructures to " + lT.sharedLength);
            if (!lT.transitions) {
              lT.transitions = Object.create(null);
              for (let kT = 0; kT < TT; kT++) {
                let TT = lT[kT];
                if (!TT) continue;
                let cT, MT = lT.transitions;
                for (let kT = 0, lT = TT.length; kT < lT; kT++) {
                  let lT = TT[kT];
                  cT = MT[lT], cT || (cT = MT[lT] = Object.create(null)), MT = cT
                }
                MT[Gk] = kT + 64
              }
              this.lastNamedStructuresLength = TT
            }
            yT || (lT.nextId = TT + 64)
          }
          let fT;
          cT && (cT = !1);
          try {
            OT.randomAccessStructure && TT && TT.constructor && TT.constructor === Object ? bT(TT) : ST(TT);
            let cT = Hk;
            if (Hk && Xk(kT, ST, 0), MT && MT.idsToInsert) {
              let TT = MT.idsToInsert.sort(((TT, kT) => TT.offset > kT.offset ? 1 : -1)),
                lT = TT.length,
                KT = -1;
              for (; cT && lT > 0;) {
                let MT = TT[--lT].offset + kT;
                MT < cT.stringsPosition + kT && -1 === KT && (KT = 0), MT > cT.position + kT ? KT >= 0 && (KT += 6) : (KT >= 0 && (mk.setUint32(cT.position + kT, mk.getUint32(cT.position + kT) + KT), KT = -1), cT = cT.previous, lT++)
              }
              KT >= 0 && cT && mk.setUint32(cT.position + kT, mk.getUint32(cT.position + kT) + KT), Jk += 6 * TT.length, Jk > bk && PT(Jk), OT.offset = Jk;
              let yT = function(TT, kT) {
                let cT, lT = 6 * kT.length,
                  MT = TT.length - lT;
                for (; cT = kT.pop();) {
                  let kT = cT.offset,
                    KT = cT.id;
                  TT.copyWithin(kT + lT, kT, MT), lT -= 6;
                  let OT = kT + lT;
                  TT[OT++] = 214, TT[OT++] = 105, TT[OT++] = KT >> 24, TT[OT++] = KT >> 16 & 255, TT[OT++] = KT >> 8 & 255, TT[OT++] = 255 & KT, MT = kT
                }
                return TT
              }(Pk.subarray(kT, Jk), TT);
              return MT = null, yT
            }
            return OT.offset = Jk, KT & ik ? (Pk.start = kT, Pk.end = Jk, Pk) : Pk.subarray(kT, Jk)
          } catch (Mc) {
            throw fT = Mc, Mc
          } finally {
            if (lT && (NT(), cT && OT.saveStructures)) {
              let cT = lT.sharedLength || 0,
                MT = Pk.subarray(kT, Jk),
                yT = Lk(lT, OT);
              if (!fT) return !1 === OT.saveStructures(yT, yT.isCompatible) ? OT.pack(TT, KT) : (OT.lastNamedStructuresLength = cT, Pk.length > 1073741824 && (Pk = null), MT)
            }
            Pk.length > 1073741824 && (Pk = null), KT & qk && (Jk = kT)
          }
        };
        const NT = () => {
            hT < 10 && hT++;
            let TT = lT.sharedLength || 0;
            if (lT.length > TT && !yT && (lT.length = TT), tT > 1e4) lT.transitions = null, hT = 0, tT = 0, vT.length > 0 && (vT = []);
            else if (vT.length > 0 && !yT) {
              for (let TT = 0, kT = vT.length; TT < kT; TT++) vT[TT][Gk] = 0;
              vT = []
            }
          },
          QT = TT => {
            var kT = TT.length;
            kT < 16 ? Pk[Jk++] = 144 | kT : kT < 65536 ? (Pk[Jk++] = 220, Pk[Jk++] = kT >> 8, Pk[Jk++] = 255 & kT) : (Pk[Jk++] = 221, mk.setUint32(Jk, kT), Jk += 4);
            for (let cT = 0; cT < kT; cT++) ST(TT[cT])
          },
          ST = TT => {
            Jk > bk && (Pk = PT(Jk));
            var cT, lT = typeof TT;
            if ("string" === lT) {
              let lT, MT = TT.length;
              if (Hk && MT >= 4 && MT < 4096) {
                if ((Hk.size += MT) > 21760) {
                  let TT, cT, lT = (Hk[0] ? 3 * Hk[0].length + Hk[1].length : 0) + 10;
                  Jk + lT > bk && (Pk = PT(Jk + lT)), Hk.position ? (cT = Hk, Pk[Jk] = 200, Jk += 3, Pk[Jk++] = 98, TT = Jk - kT, Jk += 4, Xk(kT, ST, 0), mk.setUint16(TT + kT - 3, Jk - kT - TT)) : (Pk[Jk++] = 214, Pk[Jk++] = 98, TT = Jk - kT, Jk += 4), Hk = ["", ""], Hk.previous = cT, Hk.size = 0, Hk.position = TT
                }
                let cT = ek.test(TT);
                return Hk[cT ? 0 : 1] += TT, Pk[Jk++] = 193, void ST(cT ? -MT : MT)
              }
              lT = MT < 32 ? 1 : MT < 256 ? 2 : MT < 65536 ? 3 : 5;
              let OT = 3 * MT;
              if (Jk + OT > bk && (Pk = PT(Jk + OT)), MT < 64 || !KT) {
                let kT, KT, OT, yT = Jk + lT;
                for (kT = 0; kT < MT; kT++) KT = TT.charCodeAt(kT), KT < 128 ? Pk[yT++] = KT : KT < 2048 ? (Pk[yT++] = KT >> 6 | 192, Pk[yT++] = 63 & KT | 128) : 55296 === (64512 & KT) && 56320 === (64512 & (OT = TT.charCodeAt(kT + 1))) ? (KT = 65536 + ((1023 & KT) << 10) + (1023 & OT), kT++, Pk[yT++] = KT >> 18 | 240, Pk[yT++] = KT >> 12 & 63 | 128, Pk[yT++] = KT >> 6 & 63 | 128, Pk[yT++] = 63 & KT | 128) : (Pk[yT++] = KT >> 12 | 224, Pk[yT++] = KT >> 6 & 63 | 128, Pk[yT++] = 63 & KT | 128);
                cT = yT - Jk - lT
              } else cT = KT(TT, Jk + lT);
              cT < 32 ? Pk[Jk++] = 160 | cT : cT < 256 ? (lT < 2 && Pk.copyWithin(Jk + 2, Jk + 1, Jk + 1 + cT), Pk[Jk++] = 217, Pk[Jk++] = cT) : cT < 65536 ? (lT < 3 && Pk.copyWithin(Jk + 3, Jk + 2, Jk + 2 + cT), Pk[Jk++] = 218, Pk[Jk++] = cT >> 8, Pk[Jk++] = 255 & cT) : (lT < 5 && Pk.copyWithin(Jk + 5, Jk + 3, Jk + 3 + cT), Pk[Jk++] = 219, mk.setUint32(Jk, cT), Jk += 4), Jk += cT
            } else if ("number" === lT)
              if (TT >>> 0 === TT) TT < 32 || TT < 128 && !1 === this.useRecords || TT < 64 && !this.randomAccessStructure ? Pk[Jk++] = TT : TT < 256 ? (Pk[Jk++] = 204, Pk[Jk++] = TT) : TT < 65536 ? (Pk[Jk++] = 205, Pk[Jk++] = TT >> 8, Pk[Jk++] = 255 & TT) : (Pk[Jk++] = 206, mk.setUint32(Jk, TT), Jk += 4);
              else if ((TT | 0) === TT) TT >= -32 ? Pk[Jk++] = 256 + TT : TT >= -128 ? (Pk[Jk++] = 208, Pk[Jk++] = TT + 256) : TT >= -32768 ? (Pk[Jk++] = 209, mk.setInt16(Jk, TT), Jk += 2) : (Pk[Jk++] = 210, mk.setInt32(Jk, TT), Jk += 4);
            else {
              let kT;
              if ((kT = this.useFloat32) > 0 && TT < 4294967296 && TT >= -2147483648) {
                let cT;
                if (Pk[Jk++] = 202, mk.setFloat32(Jk, TT), kT < 4 || ((cT = TT * yk[(127 & Pk[Jk]) << 1 | Pk[Jk + 1] >> 7]) | 0) === cT) return void(Jk += 4);
                Jk--
              }
              Pk[Jk++] = 203, mk.setFloat64(Jk, TT), Jk += 8
            } else if ("object" === lT || "function" === lT)
              if (TT) {
                if (MT) {
                  let cT = MT.get(TT);
                  if (cT) {
                    if (!cT.id) {
                      let TT = MT.idsToInsert || (MT.idsToInsert = []);
                      cT.id = TT.push(cT)
                    }
                    return Pk[Jk++] = 214, Pk[Jk++] = 112, mk.setUint32(Jk, cT.id), void(Jk += 4)
                  }
                  MT.set(TT, {
                    offset: Jk - kT
                  })
                }
                let KT = TT.constructor;
                if (KT === Object) rT(TT);
                else if (KT === Array) QT(TT);
                else if (KT === Map)
                  if (this.mapAsEmptyObject) Pk[Jk++] = 128;
                  else {
                    (cT = TT.size) < 16 ? Pk[Jk++] = 128 | cT : cT < 65536 ? (Pk[Jk++] = 222, Pk[Jk++] = cT >> 8, Pk[Jk++] = 255 & cT) : (Pk[Jk++] = 223, mk.setUint32(Jk, cT), Jk += 4);
                    for (let [kT, cT] of TT) ST(kT), ST(cT)
                  }
                else {
                  for (let kT = 0, cT = tk.length; kT < cT; kT++) {
                    if (TT instanceof hk[kT]) {
                      let cT = tk[kT];
                      if (cT.write) {
                        cT.type && (Pk[Jk++] = 212, Pk[Jk++] = cT.type, Pk[Jk++] = 0);
                        let kT = cT.write.call(this, TT);
                        return void(kT === TT ? Array.isArray(TT) ? QT(TT) : rT(TT) : ST(kT))
                      }
                      let lT, MT = Pk,
                        KT = mk,
                        OT = Jk;
                      Pk = null;
                      try {
                        lT = cT.pack.call(this, TT, (TT => (Pk = MT, MT = null, Jk += TT, Jk > bk && PT(Jk), {
                          target: Pk,
                          targetView: mk,
                          position: Jk - TT
                        })), ST)
                      } finally {
                        MT && (Pk = MT, mk = KT, Jk = OT, bk = Pk.length - 10)
                      }
                      return void(lT && (lT.length + Jk > bk && PT(lT.length + Jk), Jk = uk(lT, Pk, Jk, cT.type)))
                    }
                  }
                  if (Array.isArray(TT)) QT(TT);
                  else {
                    if (TT.toJSON) {
                      const kT = TT.toJSON();
                      if (kT !== TT) return ST(kT)
                    }
                    if ("function" === lT) return ST(this.writeFunction && this.writeFunction(TT));
                    rT(TT)
                  }
                }
              } else Pk[Jk++] = 192;
            else if ("boolean" === lT) Pk[Jk++] = TT ? 195 : 194;
            else if ("bigint" === lT) {
              if (TT < BigInt(1) << BigInt(63) && TT >= -(BigInt(1) << BigInt(63))) Pk[Jk++] = 211, mk.setBigInt64(Jk, TT);
              else if (TT < BigInt(1) << BigInt(64) && TT > 0) Pk[Jk++] = 207, mk.setBigUint64(Jk, TT);
              else {
                if (!this.largeBigIntToFloat) {
                  if (this.largeBigIntToString) return ST(TT.toString());
                  if (this.useBigIntExtension && TT < BigInt(2) ** BigInt(1023) && TT > -(BigInt(2) ** BigInt(1023))) {
                    Pk[Jk++] = 199, Jk++, Pk[Jk++] = 66;
                    let kT, cT = [];
                    do {
                      let lT = TT & BigInt(255);
                      kT = (lT & BigInt(128)) === (TT < BigInt(0) ? BigInt(128) : BigInt(0)), cT.push(lT), TT >>= BigInt(8)
                    } while (TT !== BigInt(0) && TT !== BigInt(-1) || !kT);
                    Pk[Jk - 2] = cT.length;
                    for (let TT = cT.length; TT > 0;) Pk[Jk++] = Number(cT[--TT]);
                    return
                  }
                  throw new RangeError(TT + " was too large to fit in MessagePack 64-bit integer format, use useBigIntExtension, or set largeBigIntToFloat to convert to float-64, or set largeBigIntToString to convert to string")
                }
                Pk[Jk++] = 203, mk.setFloat64(Jk, Number(TT))
              }
              Jk += 8
            } else {
              if ("undefined" !== lT) throw new Error("Unknown type: " + lT);
              this.encodeUndefinedAsNil ? Pk[Jk++] = 192 : (Pk[Jk++] = 212, Pk[Jk++] = 0, Pk[Jk++] = 0)
            }
          },
          DT = this.variableMapSize || this.coercibleKeyAsNumber || this.skipValues ? TT => {
            let kT;
            if (this.skipValues) {
              kT = [];
              for (let cT in TT) "function" === typeof TT.hasOwnProperty && !TT.hasOwnProperty(cT) || this.skipValues.includes(TT[cT]) || kT.push(cT)
            } else kT = Object.keys(TT);
            let cT, lT = kT.length;
            if (lT < 16 ? Pk[Jk++] = 128 | lT : lT < 65536 ? (Pk[Jk++] = 222, Pk[Jk++] = lT >> 8, Pk[Jk++] = 255 & lT) : (Pk[Jk++] = 223, mk.setUint32(Jk, lT), Jk += 4), this.coercibleKeyAsNumber)
              for (let MT = 0; MT < lT; MT++) {
                cT = kT[MT];
                let lT = Number(cT);
                ST(isNaN(lT) ? cT : lT), ST(TT[cT])
              } else
                for (let MT = 0; MT < lT; MT++) ST(cT = kT[MT]), ST(TT[cT])
          } : TT => {
            Pk[Jk++] = 222;
            let cT = Jk - kT;
            Jk += 2;
            let lT = 0;
            for (let kT in TT)("function" !== typeof TT.hasOwnProperty || TT.hasOwnProperty(kT)) && (ST(kT), ST(TT[kT]), lT++);
            if (lT > 65535) throw new Error('Object is too large to serialize with fast 16-bit map size, use the "variableMapSize" option to serialize this object');
            Pk[cT++ + kT] = lT >> 8, Pk[cT + kT] = 255 & lT
          },
          aT = !1 === this.useRecords ? DT : TT.progressiveRecords && !AT ? TT => {
            let cT, MT, KT = lT.transitions || (lT.transitions = Object.create(null)),
              OT = Jk++ - kT;
            for (let yT in TT)
              if ("function" !== typeof TT.hasOwnProperty || TT.hasOwnProperty(yT)) {
                if (cT = KT[yT], cT) KT = cT;
                else {
                  let fT = Object.keys(TT),
                    xT = KT;
                  KT = lT.transitions;
                  let IT = 0;
                  for (let TT = 0, kT = fT.length; TT < kT; TT++) {
                    let kT = fT[TT];
                    cT = KT[kT], cT || (cT = KT[kT] = Object.create(null), IT++), KT = cT
                  }
                  OT + kT + 1 == Jk ? (Jk--, wT(KT, fT, IT)) : mT(KT, fT, OT, IT), MT = !0, KT = xT[yT]
                }
                ST(TT[yT])
              } if (!MT) {
              let cT = KT[Gk];
              cT ? Pk[OT + kT] = cT : mT(KT, Object.keys(TT), OT, 0)
            }
          } : TT => {
            let kT, cT = lT.transitions || (lT.transitions = Object.create(null)),
              MT = 0;
            for (let lT in TT)("function" !== typeof TT.hasOwnProperty || TT.hasOwnProperty(lT)) && (kT = cT[lT], kT || (kT = cT[lT] = Object.create(null), MT++), cT = kT);
            let KT = cT[Gk];
            KT ? KT >= 96 && AT ? (Pk[Jk++] = 96 + (31 & (KT -= 96)), Pk[Jk++] = KT >> 5) : Pk[Jk++] = KT : wT(cT, cT.__keys__ || Object.keys(TT), MT);
            for (let lT in TT)("function" !== typeof TT.hasOwnProperty || TT.hasOwnProperty(lT)) && ST(TT[lT])
          },
          FT = "function" == typeof this.useRecords && this.useRecords,
          rT = FT ? TT => {
            FT(TT) ? aT(TT) : DT(TT)
          } : aT,
          PT = TT => {
            let cT;
            if (TT > 16777216) {
              if (TT - kT > rk) throw new Error("Packed buffer would be larger than maximum buffer size");
              cT = Math.min(rk, 4096 * Math.round(Math.max((TT - kT) * (TT > 67108864 ? 1.25 : 2), 4194304) / 4096))
            } else cT = 1 + (Math.max(TT - kT << 2, Pk.length - 1) >> 12) << 12;
            let lT = new ak(cT);
            return mk = lT.dataView || (lT.dataView = new DataView(lT.buffer, 0, cT)), TT = Math.min(TT, Pk.length), Pk.copy ? Pk.copy(lT, 0, kT, TT) : lT.set(Pk.slice(kT, TT)), Jk -= kT, kT = 0, bk = lT.length - 10, Pk = lT
          },
          wT = (TT, kT, MT) => {
            let KT = lT.nextId;
            KT || (KT = 64), KT < CT && this.shouldShareStructure && !this.shouldShareStructure(kT) ? (KT = lT.nextOwnId, KT < jT || (KT = CT), lT.nextOwnId = KT + 1) : (KT >= jT && (KT = CT), lT.nextId = KT + 1);
            let OT = kT.highByte = KT >= 96 && AT ? KT - 96 >> 5 : -1;
            TT[Gk] = KT, TT.__keys__ = kT, lT[KT - 64] = kT, KT < CT ? (kT.isShared = !0, lT.sharedLength = KT - 63, cT = !0, OT >= 0 ? (Pk[Jk++] = 96 + (31 & KT), Pk[Jk++] = OT) : Pk[Jk++] = KT) : (OT >= 0 ? (Pk[Jk++] = 213, Pk[Jk++] = 114, Pk[Jk++] = 96 + (31 & KT), Pk[Jk++] = OT) : (Pk[Jk++] = 212, Pk[Jk++] = 114, Pk[Jk++] = KT), MT && (tT += hT * MT), vT.length >= IT && (vT.shift()[Gk] = 0), vT.push(TT), ST(kT))
          },
          mT = (TT, cT, lT, MT) => {
            let KT = Pk,
              OT = Jk,
              yT = bk,
              fT = kT;
            Pk = wk, Jk = 0, kT = 0, Pk || (wk = Pk = new ak(8192)), bk = Pk.length - 10, wT(TT, cT, MT), wk = Pk;
            let xT = Jk;
            if (Pk = KT, Jk = OT, bk = yT, kT = fT, xT > 1) {
              let TT = Jk + xT - 1;
              TT > bk && PT(TT);
              let cT = lT + kT;
              Pk.copyWithin(cT + xT, cT + 1, Jk), Pk.set(wk.slice(0, xT), cT), Jk = TT
            } else Pk[lT + kT] = wk[0]
          },
          bT = TT => {
            let MT = zk(TT, Pk, kT, Jk, lT, PT, ((TT, kT, lT) => {
              if (lT) return cT = !0;
              Jk = kT;
              let MT = Pk;
              return ST(TT), NT(), MT !== Pk ? {
                position: Jk,
                targetView: mk,
                target: Pk
              } : Jk
            }), this);
            if (0 === MT) return rT(TT);
            Jk = MT
          }
      }
      useBuffer(TT) {
        Pk = TT, mk = Pk.dataView || (Pk.dataView = new DataView(Pk.buffer, Pk.byteOffset, Pk.byteLength)), Jk = 0
      }
      set position(TT) {
        Jk = TT
      }
      get position() {
        return Jk
      }
      set buffer(TT) {
        Pk = TT
      }
      get buffer() {
        return Pk
      }
      clearSharedData() {
        this.structures && (this.structures = []), this.typedStructs && (this.typedStructs = [])
      }
    }

    function Ek(TT, kT, cT, lT) {
      let MT = TT.byteLength;
      if (MT + 1 < 256) {
        var {
          target: KT,
          position: OT
        } = cT(4 + MT);
        KT[OT++] = 199, KT[OT++] = MT + 1
      } else if (MT + 1 < 65536) {
        var {
          target: KT,
          position: OT
        } = cT(5 + MT);
        KT[OT++] = 200, KT[OT++] = MT + 1 >> 8, KT[OT++] = MT + 1 & 255
      } else {
        var {
          target: KT,
          position: OT,
          targetView: yT
        } = cT(7 + MT);
        KT[OT++] = 201, yT.setUint32(OT, MT + 1), OT += 4
      }
      KT[OT++] = 116, KT[OT++] = kT, TT.buffer || (TT = new Uint8Array(TT)), KT.set(new Uint8Array(TT.buffer, TT.byteOffset, TT.byteLength), OT)
    }

    function Zk(TT, kT) {
      let cT = TT.byteLength;
      var lT, MT;
      if (cT < 256) {
        var {
          target: lT,
          position: MT
        } = kT(cT + 2);
        lT[MT++] = 196, lT[MT++] = cT
      } else if (cT < 65536) {
        var {
          target: lT,
          position: MT
        } = kT(cT + 3);
        lT[MT++] = 197, lT[MT++] = cT >> 8, lT[MT++] = 255 & cT
      } else {
        var {
          target: lT,
          position: MT,
          targetView: KT
        } = kT(cT + 5);
        lT[MT++] = 198, KT.setUint32(MT, cT), MT += 4
      }
      lT.set(TT, MT)
    }

    function uk(TT, kT, cT, lT) {
      let MT = TT.length;
      switch (MT) {
        case 1:
          kT[cT++] = 212;
          break;
        case 2:
          kT[cT++] = 213;
          break;
        case 4:
          kT[cT++] = 214;
          break;
        case 8:
          kT[cT++] = 215;
          break;
        case 16:
          kT[cT++] = 216;
          break;
        default:
          MT < 256 ? (kT[cT++] = 199, kT[cT++] = MT) : MT < 65536 ? (kT[cT++] = 200, kT[cT++] = MT >> 8, kT[cT++] = 255 & MT) : (kT[cT++] = 201, kT[cT++] = MT >> 24, kT[cT++] = MT >> 16 & 255, kT[cT++] = MT >> 8 & 255, kT[cT++] = 255 & MT)
      }
      return kT[cT++] = lT, kT.set(TT, cT), cT += MT
    }

    function Xk(TT, kT, cT) {
      if (Hk.length > 0) {
        mk.setUint32(Hk.position + TT, Jk + cT - Hk.position - TT), Hk.stringsPosition = Jk - TT;
        let lT = Hk;
        Hk = null, kT(lT[0]), kT(lT[1])
      }
    }

    function dk(TT) {
      if (TT.Class) {
        if (!TT.pack && !TT.write) throw new Error("Extension has no pack or write function");
        if (TT.pack && !TT.type) throw new Error("Extension has no type (numeric code to identify the extension)");
        hk.unshift(TT.Class), tk.unshift(TT)
      }! function(TT) {
        TT.unpack ? QT[TT.type] = TT.unpack : QT[TT.type] = TT
      }(TT)
    }

    function Lk(TT, kT) {
      return TT.isCompatible = TT => {
        let cT = !TT || (kT.lastNamedStructuresLength || 0) === TT.length;
        return cT || kT._mergeStructures(TT), cT
      }, TT
    }
    hk = [Date, Set, Error, RegExp, ArrayBuffer, Object.getPrototypeOf(Uint8Array.prototype).constructor, DT], tk = [{
      pack(TT, kT, cT) {
        let lT = TT.getTime() / 1e3;
        if ((this.useTimestamp32 || 0 === TT.getMilliseconds()) && lT >= 0 && lT < 4294967296) {
          let {
            target: TT,
            targetView: cT,
            position: MT
          } = kT(6);
          TT[MT++] = 214, TT[MT++] = 255, cT.setUint32(MT, lT)
        } else if (lT > 0 && lT < 4294967296) {
          let {
            target: cT,
            targetView: MT,
            position: KT
          } = kT(10);
          cT[KT++] = 215, cT[KT++] = 255, MT.setUint32(KT, 4e6 * TT.getMilliseconds() + (lT / 1e3 / 4294967296 | 0)), MT.setUint32(KT + 4, lT)
        } else if (isNaN(lT)) {
          if (this.onInvalidDate) return kT(0), cT(this.onInvalidDate());
          let {
            target: TT,
            targetView: lT,
            position: MT
          } = kT(3);
          TT[MT++] = 212, TT[MT++] = 255, TT[MT++] = 255
        } else {
          let {
            target: cT,
            targetView: MT,
            position: KT
          } = kT(15);
          cT[KT++] = 199, cT[KT++] = 12, cT[KT++] = 255, MT.setUint32(KT, 1e6 * TT.getMilliseconds()), MT.setBigInt64(KT + 4, BigInt(Math.floor(lT)))
        }
      }
    }, {
      pack(TT, kT, cT) {
        if (this.setAsEmptyObject) return kT(0), cT({});
        let lT = Array.from(TT),
          {
            target: MT,
            position: KT
          } = kT(this.moreTypes ? 3 : 0);
        this.moreTypes && (MT[KT++] = 212, MT[KT++] = 115, MT[KT++] = 0), cT(lT)
      }
    }, {
      pack(TT, kT, cT) {
        let {
          target: lT,
          position: MT
        } = kT(this.moreTypes ? 3 : 0);
        this.moreTypes && (lT[MT++] = 212, lT[MT++] = 101, lT[MT++] = 0), cT([TT.name, TT.message, TT.cause])
      }
    }, {
      pack(TT, kT, cT) {
        let {
          target: lT,
          position: MT
        } = kT(this.moreTypes ? 3 : 0);
        this.moreTypes && (lT[MT++] = 212, lT[MT++] = 120, lT[MT++] = 0), cT([TT.source, TT.flags])
      }
    }, {
      pack(TT, kT) {
        this.moreTypes ? Ek(TT, 16, kT) : Zk(Dk ? Buffer.from(TT) : new Uint8Array(TT), kT)
      }
    }, {
      pack(TT, kT) {
        let cT = TT.constructor;
        cT !== Fk && this.moreTypes ? Ek(TT, ck.indexOf(cT.name), kT) : Zk(TT, kT)
      }
    }, {
      pack(TT, kT) {
        let {
          target: cT,
          position: lT
        } = kT(1);
        cT[lT] = 193
      }
    }];
    let Rk = new Vk({
      useRecords: !1
    });
    const gk = Rk.pack,
      Uk = Rk.pack,
      Yk = Vk,
      {
        NEVER: Bk,
        ALWAYS: Wk,
        DECIMAL_ROUND: nk,
        DECIMAL_FIT: pk
      } = jk,
      ik = 512,
      qk = 1024,
      sk = 2048;
    const Tc = function(TT) {
        let kT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        if (!TT || "object" !== typeof TT) throw new Error("first argument must be an Iterable, Async Iterable, Iterator, Async Iterator, or a promise");
        const cT = new bT(kT);
        let lT;
        const MT = TT => {
          let kT;
          lT && (TT = Buffer.concat([lT, TT]), lT = void 0);
          try {
            kT = cT.unpackMultiple(TT)
          } catch (MT) {
            if (!MT.incomplete) throw MT;
            lT = TT.slice(MT.lastPosition), kT = MT.values
          }
          return kT
        };
        return "function" === typeof TT[Symbol.iterator] ? function*() {
          for (const kT of TT) yield* MT(kT)
        }() : "function" === typeof TT[Symbol.asyncIterator] ? async function*() {
          for await (const kT of TT) yield* MT(kT)
        }(): void 0
      },
      kc = function(TT) {
        let kT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        if (TT && "object" === typeof TT) {
          if ("function" === typeof TT[Symbol.iterator]) return function*(TT, kT) {
            const cT = new Vk(kT);
            for (const lT of TT) yield cT.pack(lT)
          }(TT, kT);
          if ("function" === typeof TT.then || "function" === typeof TT[Symbol.asyncIterator]) return async function*(TT, kT) {
            const cT = new Vk(kT);
            for await (const lT of TT) yield cT.pack(lT)
          }(TT, kT);
          throw new Error("first argument must be an Iterable, Async Iterable, Iterator, Async Iterator, or a Promise")
        }
        throw new Error("first argument must be an Iterable, Async Iterable, or a Promise for an Async Iterable")
      },
      cc = !1,
      lc = !0
  },
  9115: (TT, kT, cT) => {
    cT.r(kT), cT.d(kT, {
      $changes: () => tT,
      $childType: () => hT,
      $decoder: () => IT,
      $deleteByIndex: () => jT,
      $encoder: () => xT,
      $filter: () => AT,
      $getByIndex: () => CT,
      $numFields: () => mT,
      $refId: () => yT,
      $track: () => fT,
      $values: () => aT,
      ArraySchema: () => ll,
      Callbacks: () => lM,
      ChangeTree: () => oc,
      CollectionSchema: () => Ol,
      Decoder: () => nl,
      Encoder: () => Ul,
      FieldBuilder: () => xl,
      MapSchema: () => Kl,
      Metadata: () => nk,
      OPERATION: () => MT,
      Reflection: () => sl,
      ReflectionField: () => il,
      ReflectionType: () => ql,
      Root: () => Hl,
      Schema: () => Jl,
      SetSchema: () => yl,
      StateCallbackStrategy: () => cM,
      StateView: () => Zl,
      StreamSchema: () => fl,
      TypeContext: () => Lk,
      createPool: () => KM,
      decode: () => Sk,
      decodeKeyValueOperation: () => ic,
      decodeSchemaOperation: () => pc,
      defineCustomTypes: () => rk,
      defineTypes: () => ml,
      deprecated: () => Pl,
      dumpChanges: () => zl,
      encode: () => kk,
      encodeArray: () => Xc,
      encodeIndexedEntry: () => Zc,
      encodeKeyValueOperation: () => uc,
      encodeMapEntry: () => Ec,
      encodeSchemaOperation: () => Vc,
      Tv: () => hl,
      fullStateOnly: () => Dl,
      getDecoderStateCallbacks: () => TM,
      getEncodeDescriptor: () => kc,
      getRawChangesCallback: () => kM,
      isBuilder: () => Il,
      patchOnly: () => Sl,
      registerType: () => Fk,
      schema: () => bl,
      t: () => vl,
      type: () => al,
      unreliable: () => Ql,
      view: () => Nl
    });
    const lT = 255;
    var MT;

    function KT(TT) {
      Object.defineProperty(TT, Symbol.metadata, {
        value: void 0,
        writable: !0,
        configurable: !0,
        enumerable: !1
      })
    }! function(TT) {
      TT[TT.ADD = 128] = "ADD", TT[TT.REPLACE = 0] = "REPLACE", TT[TT.DELETE = 64] = "DELETE", TT[TT.DELETE_AND_MOVE = 96] = "DELETE_AND_MOVE", TT[TT.MOVE_AND_ADD = 160] = "MOVE_AND_ADD", TT[TT.DELETE_AND_ADD = 192] = "DELETE_AND_ADD", TT[TT.CLEAR = 10] = "CLEAR", TT[TT.REVERSE = 15] = "REVERSE", TT[TT.MOVE = 32] = "MOVE", TT[TT.DELETE_BY_REFID = 33] = "DELETE_BY_REFID", TT[TT.ADD_BY_REFID = 129] = "ADD_BY_REFID"
    }(MT || (MT = {})), Symbol.metadata ??= Symbol.for("Symbol.metadata");
    const OT = "undefined" !== typeof globalThis ? globalThis : "undefined" !== typeof global ? global : "undefined" !== typeof self ? self : "undefined" !== typeof window ? window : {};
    if ("function" === typeof Symbol && "function" !== typeof Symbol.for) {
      const TT = "colyseus.symbolRegistry",
        kT = OT[TT] || (OT[TT] = Object.create(null));
      Symbol.for = function(TT) {
        return kT[TT] || (kT[TT] = Symbol(TT))
      }, Symbol.keyFor = function(TT) {
        for (const cT in kT)
          if (kT[cT] === TT) return cT
      }
    }
    const yT = Symbol.for("$refId"),
      fT = "~track",
      xT = "~encoder",
      IT = "~decoder",
      AT = "~filter",
      CT = "~getByIndex",
      jT = "~deleteByIndex",
      vT = "~resyncPrune",
      tT = Symbol.for("$changes"),
      hT = Symbol.for("$childType"),
      NT = Symbol.for("$proxyTarget"),
      QT = "~onEncodeEnd",
      ST = "~reset",
      DT = "~onDecodeEnd",
      aT = Symbol.for("$values"),
      FT = "~builder",
      rT = "~descriptors",
      PT = "~__encodeDescriptor",
      wT = "~encoders",
      mT = "~__numFields",
      bT = "~__refTypeFieldIndexes",
      zT = "~__viewFieldIndexes",
      JT = "$__fieldIndexesByViewTag",
      oT = "~__unreliableFieldIndexes",
      HT = "~__patchOnlyFieldIndexes",
      eT = "~__fullSyncSkipIndexes",
      GT = "~__fullStateOnlyFieldIndexes",
      VT = "~__streamFieldIndexes",
      ET = "~__streamPriorities";
    let ZT;
    try {
      ZT = new TextEncoder
    } catch (OM) {}
    const uT = new ArrayBuffer(8),
      XT = new Int32Array(uT),
      dT = new Float32Array(uT),
      LT = new Float64Array(uT),
      RT = new BigInt64Array(uT),
      gT = "undefined" !== typeof Buffer && Buffer.byteLength ? Buffer.byteLength : function(TT, kT) {
        for (var cT = 0, lT = 0, MT = 0, KT = TT.length; MT < KT; MT++)(cT = TT.charCodeAt(MT)) < 128 ? lT += 1 : cT < 2048 ? lT += 2 : cT < 55296 || cT >= 57344 ? lT += 3 : (MT++, lT += 4);
        return lT
      };

    function UT(TT, kT, cT) {
      for (var lT = 0, MT = 0, KT = kT.length; MT < KT; MT++)(lT = kT.charCodeAt(MT)) < 128 ? TT[cT.offset++] = lT : lT < 2048 ? (TT[cT.offset] = 192 | lT >> 6, TT[cT.offset + 1] = 128 | 63 & lT, cT.offset += 2) : lT < 55296 || lT >= 57344 ? (TT[cT.offset] = 224 | lT >> 12, TT[cT.offset + 1] = 128 | lT >> 6 & 63, TT[cT.offset + 2] = 128 | 63 & lT, cT.offset += 3) : (MT++, lT = 65536 + ((1023 & lT) << 10 | 1023 & kT.charCodeAt(MT)), TT[cT.offset] = 240 | lT >> 18, TT[cT.offset + 1] = 128 | lT >> 12 & 63, TT[cT.offset + 2] = 128 | lT >> 6 & 63, TT[cT.offset + 3] = 128 | 63 & lT, cT.offset += 4)
    }

    function YT(TT, kT, cT) {
      TT[cT.offset++] = 255 & kT
    }

    function BT(TT, kT, cT) {
      TT[cT.offset++] = 255 & kT, TT[cT.offset++] = kT >> 8 & 255
    }

    function WT(TT, kT, cT) {
      TT[cT.offset++] = 255 & kT, TT[cT.offset++] = kT >> 8 & 255
    }

    function nT(TT, kT, cT) {
      TT[cT.offset++] = 255 & kT, TT[cT.offset++] = kT >> 8 & 255, TT[cT.offset++] = kT >> 16 & 255, TT[cT.offset++] = kT >> 24 & 255
    }

    function pT(TT, kT, cT) {
      const lT = kT >> 24,
        MT = kT >> 16,
        KT = kT >> 8,
        OT = kT;
      TT[cT.offset++] = 255 & OT, TT[cT.offset++] = 255 & KT, TT[cT.offset++] = 255 & MT, TT[cT.offset++] = 255 & lT
    }

    function iT(TT, kT, cT) {
      const lT = Math.floor(kT / Math.pow(2, 32));
      pT(TT, kT >>> 0, cT), pT(TT, lT, cT)
    }

    function qT(TT, kT, cT) {
      const lT = kT / Math.pow(2, 32) | 0;
      pT(TT, kT >>> 0, cT), pT(TT, lT, cT)
    }

    function sT(TT, kT, cT) {
      dT[0] = kT, nT(TT, XT[0], cT)
    }

    function Tk(TT, kT, cT) {
      LT[0] = kT, nT(TT, XT[0], cT), nT(TT, XT[1], cT)
    }
    const kk = {
        int8: YT,
        uint8: function(TT, kT, cT) {
          TT[cT.offset++] = 255 & kT
        },
        int16: BT,
        uint16: WT,
        int32: nT,
        uint32: pT,
        int64: iT,
        uint64: qT,
        bigint64: function(TT, kT, cT) {
          RT[0] = BigInt.asIntN(64, kT), nT(TT, XT[0], cT), nT(TT, XT[1], cT)
        },
        biguint64: function(TT, kT, cT) {
          RT[0] = BigInt.asIntN(64, kT), nT(TT, XT[0], cT), nT(TT, XT[1], cT)
        },
        float32: sT,
        float64: Tk,
        boolean: function(TT, kT, cT) {
          TT[cT.offset++] = kT ? 1 : 0
        },
        string: function(TT, kT, cT) {
          kT || (kT = "");
          let lT = gT(kT, "utf8"),
            MT = 0;
          if (lT < 32) TT[cT.offset++] = 160 | lT, MT = 1;
          else if (lT < 256) TT[cT.offset++] = 217, TT[cT.offset++] = lT, MT = 2;
          else if (lT < 65536) TT[cT.offset++] = 218, WT(TT, lT, cT), MT = 3;
          else {
            if (!(lT < 4294967296)) throw new Error("String too long");
            TT[cT.offset++] = 219, pT(TT, lT, cT), MT = 5
          }
          return UT(TT, kT, cT), MT + lT
        },
        number: function TT(kT, cT, lT) {
          return isNaN(cT) ? TT(kT, 0, lT) : isFinite(cT) ? cT !== (0 | cT) ? Math.abs(cT) <= 34028235e31 && (dT[0] = cT, Math.abs(Math.abs(dT[0]) - Math.abs(cT)) < 1e-4) ? (kT[lT.offset++] = 202, sT(kT, cT, lT), 5) : (kT[lT.offset++] = 203, Tk(kT, cT, lT), 9) : cT >= 0 ? cT < 128 ? (kT[lT.offset++] = 255 & cT, 1) : cT < 256 ? (kT[lT.offset++] = 204, kT[lT.offset++] = 255 & cT, 2) : cT < 65536 ? (kT[lT.offset++] = 205, WT(kT, cT, lT), 3) : cT < 4294967296 ? (kT[lT.offset++] = 206, pT(kT, cT, lT), 5) : (kT[lT.offset++] = 207, qT(kT, cT, lT), 9) : cT >= -32 ? (kT[lT.offset++] = 224 | cT + 32, 1) : cT >= -128 ? (kT[lT.offset++] = 208, YT(kT, cT, lT), 2) : cT >= -32768 ? (kT[lT.offset++] = 209, BT(kT, cT, lT), 3) : cT >= -2147483648 ? (kT[lT.offset++] = 210, nT(kT, cT, lT), 5) : (kT[lT.offset++] = 211, iT(kT, cT, lT), 9) : TT(kT, cT > 0 ? Number.MAX_SAFE_INTEGER : -Number.MAX_SAFE_INTEGER, lT)
        },
        utf8Write: UT,
        utf8Length: gT
      },
      ck = new ArrayBuffer(8),
      lk = new Int32Array(ck),
      Mk = new Float32Array(ck),
      Kk = new Float64Array(ck),
      Ok = new BigUint64Array(ck),
      yk = new BigInt64Array(ck);

    function fk(TT, kT, cT) {
      cT > TT.length - kT.offset && (cT = TT.length - kT.offset);
      for (var lT = "", MT = 0, KT = kT.offset, OT = kT.offset + cT; KT < OT; KT++) {
        var yT = TT[KT];
        if (0 !== (128 & yT))
          if (192 !== (224 & yT))
            if (224 !== (240 & yT)) {
              if (240 !== (248 & yT)) {
                console.error("decode.utf8Read(): Invalid byte " + yT + " at offset " + KT + ". Skip to end of string: " + (kT.offset + cT));
                break
              }(MT = (7 & yT) << 18 | (63 & TT[++KT]) << 12 | (63 & TT[++KT]) << 6 | 63 & TT[++KT]) >= 65536 ? (MT -= 65536, lT += String.fromCharCode(55296 + (MT >>> 10), 56320 + (1023 & MT))) : lT += String.fromCharCode(MT)
            } else lT += String.fromCharCode((15 & yT) << 12 | (63 & TT[++KT]) << 6 | 63 & TT[++KT]);
        else lT += String.fromCharCode((31 & yT) << 6 | 63 & TT[++KT]);
        else lT += String.fromCharCode(yT)
      }
      return kT.offset += cT, lT
    }

    function xk(TT, kT) {
      return Ik(TT, kT) << 24 >> 24
    }

    function Ik(TT, kT) {
      return TT[kT.offset++]
    }

    function Ak(TT, kT) {
      return Ck(TT, kT) << 16 >> 16
    }

    function Ck(TT, kT) {
      return TT[kT.offset++] | TT[kT.offset++] << 8
    }

    function jk(TT, kT) {
      return TT[kT.offset++] | TT[kT.offset++] << 8 | TT[kT.offset++] << 16 | TT[kT.offset++] << 24
    }

    function vk(TT, kT) {
      return jk(TT, kT) >>> 0
    }

    function tk(TT, kT) {
      return lk[0] = jk(TT, kT), Mk[0]
    }

    function hk(TT, kT) {
      return lk[0] = jk(TT, kT), lk[1] = jk(TT, kT), Kk[0]
    }

    function Nk(TT, kT) {
      const cT = vk(TT, kT);
      return jk(TT, kT) * Math.pow(2, 32) + cT
    }

    function Qk(TT, kT) {
      const cT = vk(TT, kT);
      return vk(TT, kT) * Math.pow(2, 32) + cT
    }
    const Sk = {
        utf8Read: fk,
        int8: xk,
        uint8: Ik,
        int16: Ak,
        uint16: Ck,
        int32: jk,
        uint32: vk,
        float32: tk,
        float64: hk,
        int64: Nk,
        uint64: Qk,
        bigint64: function(TT, kT) {
          return lk[0] = jk(TT, kT), lk[1] = jk(TT, kT), yk[0]
        },
        biguint64: function(TT, kT) {
          return lk[0] = jk(TT, kT), lk[1] = jk(TT, kT), Ok[0]
        },
        boolean: function(TT, kT) {
          return Ik(TT, kT) > 0
        },
        string: function(TT, kT) {
          const cT = TT[kT.offset++];
          let lT;
          return cT < 192 ? lT = 31 & cT : 217 === cT ? lT = Ik(TT, kT) : 218 === cT ? lT = Ck(TT, kT) : 219 === cT && (lT = vk(TT, kT)), fk(TT, kT, lT)
        },
        number: function(TT, kT) {
          const cT = TT[kT.offset++];
          return cT < 128 ? cT : 202 === cT ? tk(TT, kT) : 203 === cT ? hk(TT, kT) : 204 === cT ? Ik(TT, kT) : 205 === cT ? Ck(TT, kT) : 206 === cT ? vk(TT, kT) : 207 === cT ? Qk(TT, kT) : 208 === cT ? xk(TT, kT) : 209 === cT ? Ak(TT, kT) : 210 === cT ? jk(TT, kT) : 211 === cT ? Nk(TT, kT) : cT > 223 ? -1 * (255 - cT + 1) : void 0
        },
        stringCheck: function(TT, kT) {
          const cT = TT[kT.offset];
          return cT < 192 && cT > 160 || 217 === cT || 218 === cT || 219 === cT
        }
      },
      Dk = {},
      ak = new Map;

    function Fk(TT, kT) {
      kT.constructor && (Object.prototype.hasOwnProperty.call(kT, "constructor") && null == kT.constructor[Symbol.metadata] && KT(kT.constructor), ak.set(kT.constructor, TT), Dk[TT] = kT), kT.encode && (kk[TT] = kT.encode), kT.decode && (Sk[TT] = kT.decode)
    }

    function rk(TT) {
      for (const kT in TT) Fk(kT, TT[kT]);
      return TT => al(TT)
    }
    const Pk = "ArraySchema does not support streaming \u2014 positional ops (splice / unshift / reverse) shift subsequent indexes, so holding ADDs back for a later tick under `maxPerTick` would desync the decoder. Use `t.stream(X)` (stable monotonic positions) or `t.map(X).stream()` (stable keys) instead.";

    function wk() {
      return {
        pendingByView: new Map,
        sentByView: new Map,
        broadcastPending: new Set,
        sentBroadcast: new Set,
        broadcastDeletes: new Set,
        maxPerTick: 32
      }
    }

    function mk(TT) {
      return TT._stream ??= wk()
    }

    function bk(TT, kT, cT) {
      0 === kT.activeViews.size && mk(TT).broadcastPending.add(cT)
    }

    function zk(TT, kT, cT, lT) {
      const KT = TT._stream;
      if (void 0 === KT) return !0;
      let OT = !1;
      return KT.broadcastPending.delete(lT) ? OT = !0 : KT.sentBroadcast.delete(lT) && KT.broadcastDeletes.add(lT), kT.forEachActiveView((TT => {
        const kT = KT.pendingByView.get(TT.id);
        if (kT?.has(lT)) return kT.delete(lT), void(OT = !0);
        const yT = KT.sentByView.get(TT.id);
        if (yT?.has(lT)) {
          yT.delete(lT);
          let kT = TT.changes.get(cT);
          void 0 === kT && (kT = new Map, TT.changes.set(cT, kT)), kT.set(lT, MT.DELETE)
        }
      })), OT
    }

    function Jk(TT, kT) {
      const cT = TT._stream?.pendingByView;
      if (void 0 === cT) return !1;
      for (const [lT, MT] of cT)
        if (MT.size > 0 && void 0 !== kT.activeViews.get(lT)?.deref()) return !0;
      return !1
    }

    function Hk(TT) {
      const kT = TT._stream;
      return void 0 !== kT && (kT.broadcastPending.size > 0 || kT.broadcastDeletes.size > 0)
    }

    function ek(TT, kT, cT) {
      const lT = mk(TT);
      let MT = lT.pendingByView.get(kT);
      void 0 === MT && (MT = new Set, lT.pendingByView.set(kT, MT)), MT.add(cT)
    }

    function Gk(TT, kT) {
      const cT = TT._stream;
      void 0 !== cT && (cT.pendingByView.delete(kT), cT.sentByView.delete(kT), cT.priorityByView?.delete(kT))
    }
    const Vk = {
      8: "uint8",
      16: "uint16",
      32: "uint32"
    };

    function Ek(TT) {
      if (null == TT || "object" !== typeof TT) throw new Error("t.quantized(): options object with { min, max } is required.");
      const {
        min: kT,
        max: cT
      } = TT;
      if ("number" !== typeof kT || "number" !== typeof cT || !(cT > kT) || !Number.isFinite(kT) || !Number.isFinite(cT)) throw new Error(`t.quantized(): require finite min < max (got min=${kT}, max=${cT}).`);
      const lT = TT.bits ?? 16;
      if (8 !== lT && 16 !== lT && 32 !== lT) throw new Error(`t.quantized(): bits must be 8, 16 or 32 (got ${lT}).`);
      const MT = TT.mode ?? "clamp";
      if ("clamp" !== MT && "wrap" !== MT) throw new Error(`t.quantized(): mode must be "clamp" or "wrap" (got ${JSON.stringify(MT)}).`);
      const KT = "wrap" === MT,
        OT = Math.pow(2, lT);
      return {
        min: kT,
        max: cT,
        bits: lT,
        wrap: KT,
        wire: Vk[lT],
        range: cT - kT,
        span: KT ? OT : kT === -cT ? OT - 2 : OT - 1
      }
    }

    function Zk(TT) {
      return null !== TT && "object" === typeof TT && void 0 !== TT.quantized
    }

    function uk(TT, kT) {
      if (TT.wrap) {
        if (!Number.isFinite(kT)) return 0;
        const cT = TT.range;
        let lT = (kT - TT.min) % cT;
        lT < 0 && (lT += cT);
        const MT = TT.span;
        return Math.floor(lT / cT * MT + .5) % MT
      }
      if (kT !== kT) return 0;
      const cT = kT < TT.min ? TT.min : kT > TT.max ? TT.max : kT;
      return Math.floor((cT - TT.min) / TT.range * TT.span + .5)
    }

    function Xk(TT, kT) {
      return TT.min + kT / TT.span * TT.range
    }

    function dk(TT) {
      const kT = kk[TT.wire];
      return (cT, lT, MT) => kT(cT, uk(TT, lT), MT)
    }
    class Lk {
      types = {};
      schemas = new Map;
      hasFilters = !1;
      static inheritedTypes = new WeakMap;
      static cachedContexts = new WeakMap;
      static register(TT) {
        const kT = Object.getPrototypeOf(TT);
        if (kT !== Jl) {
          let cT = Lk.inheritedTypes.get(kT);
          cT || (cT = new Set, Lk.inheritedTypes.set(kT, cT)), cT.add(TT)
        }
      }
      static cache(TT) {
        let kT = Lk.cachedContexts.get(TT);
        return kT || (kT = new Lk(TT), Lk.cachedContexts.set(TT, kT)), kT
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
        let kT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.schemas.size;
        return !this.schemas.has(TT) && (this.types[kT] = TT, null == TT[Symbol.metadata] && nk.initialize(TT), this.schemas.set(TT, kT), !0)
      }
      getTypeId(TT) {
        return this.schemas.get(TT)
      }
      discoverTypes(TT) {
        if (!this.add(TT)) return;
        Lk.inheritedTypes.get(TT)?.forEach((TT => {
          this.discoverTypes(TT)
        }));
        let kT = TT;
        for (;
          (kT = Object.getPrototypeOf(kT)) && kT !== Jl && kT !== Function.prototype;) this.discoverTypes(kT);
        const cT = TT[Symbol.metadata];
        (cT[zT] || cT[VT]) && (this.hasFilters = !0);
        for (const lT in cT) {
          const TT = cT[lT].type;
          if ("string" !== typeof TT && !Zk(TT))
            if ("function" === typeof TT) this.discoverTypes(TT);
            else {
              const kT = Object.values(TT)[0];
              if ("string" === typeof kT) continue;
              this.discoverTypes(kT)
            }
        }
      }
      debug() {
        return `TypeContext ->\n\tSchema types: ${this.schemas.size}\n\thasFilters: ${this.hasFilters}`
      }
    }

    function Rk(TT) {
      const kT = Uk(TT);
      return kT ? {
        complexTypeKlass: Dk[kT],
        childType: TT[kT]
      } : {
        complexTypeKlass: !1,
        childType: TT
      }
    }

    function gk(TT, kT) {
      const cT = Yk(TT),
        lT = Uk(cT),
        MT = lT && Uk(cT[lT]);
      if (MT) throw new Error(`${kT?`${kT}: `:""}@colyseus/schema: nested collections are not supported ("${lT}" of "${MT}"). Collections can only hold primitive types or Schema classes, wrap the inner ${MT} in a Schema class.`);
      return cT
    }

    function Uk(TT) {
      return "object" === typeof TT && null !== TT ? Object.keys(TT).find((TT => void 0 !== Dk[TT])) : void 0
    }

    function Yk(TT) {
      if ("object" !== typeof TT || null === TT) return TT;
      if (Array.isArray(TT)) return {
        array: Yk(TT[0])
      };
      const kT = function(TT) {
        const kT = Object.keys(TT),
          cT = kT.filter((TT => /\d+/.test(TT)));
        if (cT.length > 0 && cT.length === kT.length / 2 && TT[TT[cT[0]]] == cT[0]) return "number";
        if (kT.length > 0 && kT.every((kT => TT[kT] === kT))) return "string"
      }(TT);
      if (kT) return kT;
      if (Zk(TT)) return "string" === typeof TT.quantized.wire ? TT : {
        quantized: Ek(TT.quantized)
      };
      if (void 0 !== TT.type) return Yk(TT.type);
      const cT = Uk(TT);
      return cT && (TT[cT] = Yk(TT[cT])), TT
    }
    const Bk = [bT, oT, HT, eT, GT, VT, wT];

    function Wk(TT, kT, cT) {
      TT[kT] || Object.defineProperty(TT, kT, {
        value: [],
        enumerable: !1,
        configurable: !0,
        writable: !0
      }), TT[kT].push(cT)
    }
    const nk = {
        addField(TT, kT, cT, lT, MT) {
          if (kT >= 63) throw new Error(`Can't define field '${cT}'.\nSchema instances may only have up to 63 fields.`);
          TT[kT] = Object.assign(TT[kT] || {}, {
            type: lT,
            index: kT,
            name: cT
          }), Object.defineProperty(TT, rT, {
            value: TT[rT] || {},
            enumerable: !1,
            configurable: !0
          }), TT[rT][cT] = MT || {
            value: void 0,
            writable: !0,
            enumerable: !0,
            configurable: !0
          }, Object.defineProperty(TT, mT, {
            value: kT,
            enumerable: !1,
            configurable: !0
          }), Object.defineProperty(TT, cT, {
            value: kT,
            enumerable: !1,
            configurable: !0
          }), "string" === typeof TT[kT].type || Zk(TT[kT].type) || (void 0 === TT[bT] && Object.defineProperty(TT, bT, {
            value: [],
            enumerable: !1,
            configurable: !0
          }), TT[bT].push(kT));
          const KT = TT[kT].type;
          if (KT && "object" === typeof KT && void 0 !== KT.stream) {
            if (void 0 !== KT.array) throw new Error(Pk);
            TT[kT].stream = !0, TT[VT] || Object.defineProperty(TT, VT, {
              value: [],
              enumerable: !1,
              configurable: !0,
              writable: !0
            }), TT[VT].includes(kT) || TT[VT].push(kT);
            const MT = lT?.priority;
            "function" === typeof MT && nk.setStreamPriority(TT, cT, MT)
          }
        },
        setTag(TT, kT, cT) {
          const lT = TT[kT];
          if (TT[lT].tag = cT, TT[zT] || (Object.defineProperty(TT, zT, {
              value: [],
              enumerable: !1,
              configurable: !0
            }), Object.defineProperty(TT, JT, {
              value: {},
              enumerable: !1,
              configurable: !0
            })), TT[zT].push(lT), cT < 0) TT[JT][cT] || (TT[JT][cT] = []), TT[JT][cT].push(lT);
          else
            for (let MT = cT; MT > 0; MT &= MT - 1) {
              const kT = MT & -MT;
              TT[JT][kT] || (TT[JT][kT] = []), TT[JT][kT].push(lT)
            }
        },
        setUnreliable(TT, kT) {
          const cT = TT[kT];
          if ("string" !== typeof TT[cT].type) throw new Error(`@unreliable cannot be applied to ref-type field "${kT}". For ref-type fields, mark each primitive sub-field with @unreliable instead. See README "Limitations and best practices".`);
          TT[cT].unreliable = !0, TT[oT] || Object.defineProperty(TT, oT, {
            value: [],
            enumerable: !1,
            configurable: !0,
            writable: !0
          }), TT[oT].push(cT)
        },
        setPatchOnly(TT, kT) {
          const cT = TT[kT];
          if (TT[cT].fullStateOnly) throw new Error(`field "${kT}" cannot be both patchOnly and fullStateOnly \u2014 those are the only two delivery channels, so the field would never reach a client.`);
          TT[cT].patchOnly = !0, Wk(TT, HT, cT), Wk(TT, eT, cT)
        },
        setDeprecated(TT, kT) {
          const cT = TT[kT];
          TT[cT].deprecated = !0, Wk(TT, eT, cT), Object.defineProperty(TT, cT, {
            value: TT[cT],
            enumerable: !1,
            configurable: !0
          })
        },
        setFullStateOnly(TT, kT) {
          const cT = TT[kT];
          if (TT[cT].patchOnly) throw new Error(`field "${kT}" cannot be both patchOnly and fullStateOnly \u2014 those are the only two delivery channels, so the field would never reach a client.`);
          TT[cT].fullStateOnly = !0, Wk(TT, GT, cT)
        },
        setStream(TT, kT) {
          const cT = TT[kT];
          TT[cT].stream = !0, TT[VT] || Object.defineProperty(TT, VT, {
            value: [],
            enumerable: !1,
            configurable: !0,
            writable: !0
          }), TT[VT].push(cT)
        },
        setStreamPriority(TT, kT, cT) {
          const lT = TT[kT];
          TT[ET] || Object.defineProperty(TT, ET, {
            value: {},
            enumerable: !1,
            configurable: !0,
            writable: !0
          }), TT[ET][lT] = cT
        },
        getStreamPriority: (TT, kT) => TT?.[ET]?.[kT],
        defineField(TT, kT, cT, lT, MT) {
          const KT = gk(MT, `${TT.name}.${lT}`),
            {
              complexTypeKlass: OT,
              childType: yT
            } = Rk(KT);
          nk.addField(kT, cT, lT, KT, rl(lT, cT, yT, OT)), kT[rT][lT] && Object.defineProperty(TT.prototype, lT, kT[rT][lT]), ("string" === typeof KT || Zk(KT)) && (kT[wT] || Object.defineProperty(kT, wT, {
            value: [],
            enumerable: !1,
            configurable: !0,
            writable: !0
          }), kT[wT][cT] = "string" === typeof KT ? kk[KT] : dk(KT.quantized))
        },
        setFields(TT, kT) {
          const cT = TT.prototype.constructor;
          Lk.register(cT);
          const lT = Object.getPrototypeOf(cT),
            MT = lT && lT[Symbol.metadata],
            KT = nk.initialize(cT);
          cT[fT] || (cT[fT] = Jl[fT]), cT[xT] || (cT[xT] = Jl[xT]), cT[IT] || (cT[IT] = Jl[IT]), cT.prototype.toJSON || (cT.prototype.toJSON = Jl.prototype.toJSON);
          let OT = KT[mT] ?? (MT && MT[mT]) ?? -1;
          OT++, KT[wT] || Object.defineProperty(KT, wT, {
            value: MT?.[wT] ? [...MT[wT]] : [],
            enumerable: !1,
            configurable: !0,
            writable: !0
          });
          for (const yT in kT) {
            if (void 0 !== KT[yT]) throw new Error(`@colyseus/schema: Duplicate '${yT}' definition on '${cT.name||"(anonymous)"}'.`);
            nk.defineField(cT, KT, OT, yT, kT[yT]), OT++
          }
          return TT
        },
        isDeprecated: (TT, kT) => !0 === TT[kT].deprecated,
        initialize(TT) {
          const kT = Object.getPrototypeOf(TT),
            cT = kT[Symbol.metadata];
          let lT = TT[Symbol.metadata] ?? Object.create(null);
          if (kT !== Jl && lT === cT && (lT = Object.create(null), cT)) {
            Object.setPrototypeOf(lT, cT), Object.defineProperty(lT, mT, {
              value: cT[mT],
              enumerable: !1,
              configurable: !0,
              writable: !0
            }), void 0 !== cT[zT] && (Object.defineProperty(lT, zT, {
              value: [...cT[zT]],
              enumerable: !1,
              configurable: !0,
              writable: !0
            }), Object.defineProperty(lT, JT, {
              value: {
                ...cT[JT]
              },
              enumerable: !1,
              configurable: !0,
              writable: !0
            }));
            for (const TT of Bk) {
              const kT = cT[TT];
              void 0 !== kT && Object.defineProperty(lT, TT, {
                value: [...kT],
                enumerable: !1,
                configurable: !0,
                writable: !0
              })
            }
            Object.defineProperty(lT, rT, {
              value: {
                ...cT[rT]
              },
              enumerable: !1,
              configurable: !0,
              writable: !0
            })
          }
          return Object.defineProperty(TT, Symbol.metadata, {
            value: lT,
            writable: !1,
            configurable: !0
          }), lT
        },
        isValidInstance: TT => TT.constructor[Symbol.metadata] && Object.prototype.hasOwnProperty.call(TT.constructor[Symbol.metadata], mT),
        getFields(TT) {
          const kT = TT[Symbol.metadata],
            cT = {};
          for (let lT = 0; lT <= kT[mT]; lT++) cT[kT[lT].name] = kT[lT].type;
          return cT
        },
        hasViewTagAtIndex: (TT, kT) => TT?.[zT]?.includes(kT),
        hasUnreliableAtIndex: (TT, kT) => TT?.[oT]?.includes(kT),
        hasPatchOnlyAtIndex: (TT, kT) => TT?.[HT]?.includes(kT),
        hasFullStateOnlyAtIndex: (TT, kT) => TT?.[GT]?.includes(kT),
        hasStreamAtIndex: (TT, kT) => TT?.[VT]?.includes(kT)
      },
      pk = (TT, kT, cT) => TT(kT, cT);
    class ik {
      dirtyLow = 0;
      dirtyHigh = 0;
      ops;
      constructor(TT) {
        this.ops = new Uint8Array(Math.max(TT + 1, 1))
      }
      record(TT, kT) {
        const cT = this.ops[TT];
        0 === cT ? this.ops[TT] = kT : (cT === MT.DELETE || cT === MT.ADD && kT === MT.DELETE_AND_ADD) && (this.ops[TT] = MT.DELETE_AND_ADD), TT < 32 ? this.dirtyLow |= 1 << TT : this.dirtyHigh |= 1 << TT - 32
      }
      recordDelete(TT, kT) {
        this.ops[TT] = kT, TT < 32 ? this.dirtyLow |= 1 << TT : this.dirtyHigh |= 1 << TT - 32
      }
      recordRaw(TT, kT) {
        this.record(TT, kT)
      }
      operationAt(TT) {
        const kT = this.ops[TT];
        return 0 === kT ? void 0 : kT
      }
      setOperationAt(TT, kT) {
        this.ops[TT] = kT
      }
      forEach(TT) {
        this.forEachWithCtx(TT, pk)
      }
      forEachWithCtx(TT, kT) {
        let cT = this.dirtyLow,
          lT = this.dirtyHigh;
        const MT = this.ops;
        for (; 0 !== cT;) {
          const lT = cT & -cT,
            KT = 31 - Math.clz32(lT);
          cT ^= lT, kT(TT, KT, MT[KT])
        }
        for (; 0 !== lT;) {
          const cT = lT & -lT,
            KT = 31 - Math.clz32(cT) + 32;
          lT ^= cT, kT(TT, KT, MT[KT])
        }
      }
      size() {
        return sk(this.dirtyLow) + sk(this.dirtyHigh)
      }
      has() {
        return 0 !== (this.dirtyLow | this.dirtyHigh)
      }
      reset() {
        this.dirtyLow = 0, this.dirtyHigh = 0, this.ops.fill(0)
      }
    }
    class qk {
      bv = new Map;
      pureOps = [];
      record(TT, kT) {
        const cT = this.bv.get(TT);
        void 0 === cT ? this.bv.set(TT, kT) : (cT === MT.DELETE || cT === MT.ADD && kT === MT.DELETE_AND_ADD) && this.bv.set(TT, MT.DELETE_AND_ADD)
      }
      recordDelete(TT, kT) {
        this.bv.set(TT, kT)
      }
      recordRaw(TT, kT) {
        this.bv.set(TT, kT)
      }
      recordPure(TT) {
        this.pureOps.push([this.bv.size, TT])
      }
      operationAt(TT) {
        return this.bv.get(TT)
      }
      setOperationAt(TT, kT) {
        this.bv.has(TT) && this.bv.set(TT, kT)
      }
      forEach(TT) {
        this.forEachWithCtx(TT, pk)
      }
      forEachWithCtx(TT, kT) {
        const cT = this.pureOps;
        if (cT.length > 0) {
          let lT = 0,
            MT = 0;
          for (const [KT, OT] of this.bv) {
            for (; lT < cT.length && cT[lT][0] <= MT;) {
              const MT = cT[lT++][1];
              kT(TT, -MT, MT)
            }
            kT(TT, KT, OT), MT++
          }
          for (; lT < cT.length;) {
            const MT = cT[lT++][1];
            kT(TT, -MT, MT)
          }
        } else
          for (const [lT, MT] of this.bv) kT(TT, lT, MT)
      }
      size() {
        return this.bv.size + this.pureOps.length
      }
      has() {
        return this.bv.size > 0 || this.pureOps.length > 0
      }
      reset() {
        this.bv.clear(), this.pureOps.length = 0
      }
      shift(TT) {
        const kT = new Map;
        for (const [cT, lT] of this.bv) kT.set(cT + TT, lT);
        this.bv = kT
      }
    }

    function sk(TT) {
      return 16843009 * ((TT = (858993459 & (TT -= TT >>> 1 & 1431655765)) + (TT >>> 2 & 858993459)) + (TT >>> 4) & 252645135) >>> 24
    }

    function Tc(TT) {
      if (void 0 === TT) return 0;
      let kT = 0;
      for (let cT = 0, lT = TT.length; cT < lT; cT++) {
        const lT = TT[cT];
        lT < 32 && (kT |= 1 << lT)
      }
      return kT
    }

    function kc(TT) {
      const kT = TT.constructor;
      if (Object.prototype.hasOwnProperty.call(kT, PT)) return kT[PT];
      const cT = kT[Symbol.metadata],
        lT = nk.isValidInstance(TT),
        MT = (cT?.[zT]?.length ?? 0) > 0,
        KT = function(TT) {
          const kT = [],
            cT = [],
            lT = [],
            MT = [],
            KT = TT?.[mT];
          if (void 0 === KT) return {
            names: kT,
            types: cT,
            tags: lT,
            encoders: MT
          };
          const OT = TT[wT];
          for (let yT = 0; yT <= KT; yT++) {
            const KT = TT[yT];
            void 0 !== KT ? (kT[yT] = KT.name, cT[yT] = KT.type, lT[yT] = KT.tag, MT[yT] = OT?.[yT]) : (kT[yT] = void 0, cT[yT] = void 0, lT[yT] = void 0, MT[yT] = void 0)
          }
          return {
            names: kT,
            types: cT,
            tags: lT,
            encoders: MT
          }
        }(cT),
        OT = lT && !MT ? void 0 : kT[AT],
        yT = {
          encoder: kT[xT],
          filter: OT,
          metadata: cT,
          isSchema: lT,
          filterBitmask: lT ? Tc(cT?.[zT]) : 0,
          hasAnyFullStateOnly: (cT?.[GT]?.length ?? 0) > 0,
          hasAnyUnreliable: (cT?.[oT]?.length ?? 0) > 0,
          hasAnyStream: (cT?.[VT]?.length ?? 0) > 0,
          hasAnyView: MT,
          fullStateOnlyBitmask: Tc(cT?.[GT]),
          unreliableBitmask: Tc(cT?.[oT]),
          streamBitmask: Tc(cT?.[VT]),
          names: KT.names,
          types: KT.types,
          tags: KT.tags,
          encoders: KT.encoders
        };
      return Object.defineProperty(kT, PT, {
        value: yT,
        enumerable: !1,
        writable: !0,
        configurable: !0
      }), yT
    }

    function cc(TT, kT) {
      if (void 0 !== TT.parentRef && kT(TT.parentRef, TT._parentIndex)) return !0;
      for (let cT = TT.extraParents; void 0 !== cT; cT = cT.next)
        if (kT(cT.ref, cT.index)) return !0;
      return !1
    }
    const lc = (TT, kT) => {
        TT.isFieldUnreliable(kT) ? TT.ensureUnreliableRecorder().record(kT, MT.ADD) : TT.record(kT, MT.ADD)
      },
      Mc = (TT, kT) => TT(kT);

    function Kc(TT, kT, cT) {
      const lT = TT.refTarget;
      if (void 0 !== lT[hT]) {
        if (TT.isPatchOnly) return;
        if (Array.isArray(lT.items)) {
          const TT = lT.items;
          for (let lT = 0, MT = TT.length; lT < MT; lT++) void 0 !== TT[lT] && cT(kT, lT)
        } else if (void 0 !== lT.journal)
          for (const [TT, MT] of lT.journal.keyByIndex) lT.$items.has(MT) && cT(kT, TT);
        else if (void 0 !== lT.$items)
          for (const TT of lT.$items.keys()) cT(kT, TT)
      } else {
        const MT = TT.metadata;
        if (!MT) return;
        const KT = MT[mT] ?? -1,
          OT = MT[eT],
          yT = TT.encDescriptor.names;
        for (let TT = 0; TT <= KT; TT++) {
          const MT = yT[TT];
          if (void 0 === MT) continue;
          if (OT && OT.includes(TT)) continue;
          const KT = lT[MT];
          void 0 !== KT && null !== KT && cT(kT, TT)
        }
      }
    }

    function Oc(TT, kT, cT, lT) {
      ! function(TT, kT, cT) {
        if (!kT) return;
        const lT = kT[tT],
          MT = !lT._isSchema;
        let KT;
        MT ? (kT = lT.parent, cT = lT.parentIndex, KT = kT?.[tT].metadata) : KT = lT.metadata;
        const OT = (KT?.[HT]?.includes(cT) ? wc : 0) | (KT?.[GT]?.includes(cT) ? mc : 0),
          yT = lT.flags & Jc | OT,
          fT = TT.flags;
        TT.flags = fT | yT;
        yT & ~fT & mc && (TT.reset(), TT.unreliableRecorder?.reset());
        const xT = TT.root?.types;
        if (!xT?.hasFilters) return;
        const IT = KT?.[zT]?.includes(cT) ?? !1,
          AT = KT?.[VT]?.includes(cT) ?? !1,
          CT = lT.isFiltered || IT || AT;
        if (TT.isFiltered = CT, AT && !MT) {
          TT.isStreamCollection = !0;
          const kT = mk(TT.ref);
          if (void 0 === kT.priority) {
            const TT = nk.getStreamPriority(KT, cT);
            void 0 !== TT && (kT.priority = TT)
          }
          TT.root?.registerStream(TT.ref)
        }
        if (CT) {
          const kT = fc(TT);
          TT.isVisibilitySharedWithParent = lT.isFiltered && kT && !AT && (!IT || MT && KT[cT].tag !== tl)
        }
      }(TT, kT, cT), TT.isFullStateOnly || (TT.has() && TT.root?.enqueueChangeTree(TT), TT.unreliableRecorder?.has() && TT.root?.enqueueUnreliable(TT), TT.has() || TT.unreliableRecorder?.has() || TT.root?.enqueueChangeTree(TT))
    }

    function yc(TT) {
      const kT = TT.pendingFilterRefresh;
      for (let cT = 0; cT < kT.length; cT++) {
        const TT = kT[cT];
        0 !== (TT.flags & zc) && xc(TT)
      }
      kT.length = 0
    }

    function fc(TT) {
      return TT._isSchema || "string" !== typeof TT.refTarget[hT]
    }

    function xc(TT) {
      TT.flags &= ~zc;
      const kT = TT.root;
      if (void 0 === kT || void 0 === TT.parentRef) return;
      const cT = fc(TT);
      let lT = vc(TT, TT.parentRef, TT._parentIndex, cT);
      for (let KT = TT.extraParents; void 0 !== KT && lT !== jc; KT = KT.next) lT |= vc(TT, KT.ref, KT.index, cT);
      if (0 === lT) return;
      TT.isVisibilitySharedWithParent = 0 !== (lT & Cc);
      const MT = 0 === (lT & Ac);
      MT !== TT.isFiltered && (TT.isFiltered = MT, MT || TT.isFullStateOnly || (TT.forEachLiveWithCtx(TT, lc), TT.has() && kT.enqueueChangeTree(TT), TT.unreliableRecorder?.has() && kT.enqueueUnreliable(TT)), TT.forEachChildWithCtx(TT, tc))
    }
    const Ic = 1,
      Ac = 2,
      Cc = 4,
      jc = Ic | Ac | Cc;

    function vc(TT, kT, cT, lT) {
      const MT = kT[tT];
      if (MT.root !== TT.root || ! function(TT, kT, cT) {
          const lT = kT.refTarget;
          if (kT.isArray) {
            const kT = lT.items,
              MT = kT[cT];
            if (void 0 !== MT && MT[tT] === TT) return !0;
            for (let cT = 0, lT = kT.length; cT < lT; cT++) {
              const lT = kT[cT];
              if (void 0 !== lT && lT[tT] === TT) return !0
            }
            return !1
          }
          const MT = kT.getValue(cT);
          return void 0 !== MT && MT[tT] === TT
        }(TT, MT, cT)) return 0;
      MT.flags & zc && xc(MT);
      let KT = Ic;
      if (MT._isSchema) {
        void 0 !== MT.encDescriptor.tags[cT] || MT.isFieldStream(cT) || (MT.isFiltered ? lT && (KT |= Cc) : KT |= Ac)
      } else if (MT.isFiltered) {
        if (lT && !MT.isStreamCollection) {
          const TT = MT.parent?.[tT];
          (TT?._isSchema ? TT.encDescriptor.tags[MT.parentIndex] : void 0) !== tl && (KT |= Cc)
        }
      } else KT |= Ac;
      return KT
    }
    const tc = (TT, kT, cT) => {
      xc(kT)
    };

    function hc(TT, kT, cT, lT) {
      if (TT.addParent(kT, lT), !cT) return;
      const MT = cT.add(TT);
      cT !== TT.root && (TT.root = cT, Oc(TT, kT, lT));
      const KT = kT?.[tT];
      if (void 0 !== KT && void 0 !== KT.subscribedViews && void 0 !== kT[hT] && function(TT, kT, cT, lT) {
          const MT = TT.subscribedViews;
          if (void 0 === MT) return;
          const KT = TT.isStreamCollection,
            OT = KT ? TT.ref : void 0,
            yT = KT ? void 0 : cT[tT];
          for (let fT = 0, xT = MT.length; fT < xT; fT++) {
            let TT = MT[fT];
            for (; 0 !== TT;) {
              const cT = TT & -TT;
              TT ^= cT;
              const xT = 32 * fT + (31 - Math.clz32(cT)),
                IT = lT.activeViews.get(xT),
                AT = IT?.deref();
              void 0 !== AT ? KT ? ek(OT, xT, kT) : void 0 !== yT && AT.markVisible(yT) : MT[fT] &= ~cT
            }
          }
        }(KT, lT, TT.ref, cT), MT) {
        let kT = Dc[ac];
        void 0 === kT && (kT = {
          parentRef: void 0,
          root: void 0
        }, Dc[ac] = kT), kT.parentRef = TT.ref, kT.root = cT, ac++, Qc(TT, kT, Fc), ac--
      }
    }

    function Nc(TT, kT, cT) {
      TT(kT, cT)
    }

    function Qc(TT, kT, cT) {
      const lT = TT.refTarget;
      if (lT[hT]) {
        if ("string" !== typeof lT[hT]) {
          const TT = lT.items;
          if (void 0 !== TT)
            for (let lT = 0, MT = TT.length; lT < MT; lT++) {
              const MT = TT[lT];
              MT && cT(kT, MT[tT], lT)
            } else {
              const TT = lT.$items,
                MT = lT._collectionIndexes;
              for (const lT of TT.keys()) {
                const KT = TT.get(lT);
                KT && cT(kT, KT[tT], MT?.[lT] ?? lT)
              }
            }
        }
      } else {
        const MT = TT.metadata,
          KT = MT?.[bT];
        if (!KT) return;
        const OT = TT.encDescriptor.names;
        for (let TT = 0, yT = KT.length; TT < yT; TT++) {
          const MT = KT[TT],
            yT = lT[OT[MT]];
          yT && cT(kT, yT[tT], MT)
        }
      }
    }

    function Sc(TT, kT, cT) {
      kT.root !== TT ? kT.setRoot(TT) : TT.add(kT)
    }
    const Dc = [];
    let ac = 0;

    function Fc(TT, kT, cT) {
      if (kT.root === TT.root) return TT.root.add(kT), void TT.root.moveNextToParent(kT);
      kT.setParent(TT.parentRef, TT.root, cT)
    }

    function rc(TT, kT, cT) {
      const lT = (3 & cT) << 3;
      return cT < 4 ? TT >>> lT & 255 : kT >>> lT & 255
    }
    const Pc = (TT, kT, cT) => TT(kT, cT);
    const wc = 16,
      mc = 32,
      bc = 128,
      zc = 256,
      Jc = wc | mc;
    class oc {
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
        return 0 !== (this.flags & wc)
      }
      set isPatchOnly(TT) {
        this.flags = TT ? this.flags | wc : this.flags & ~wc
      }
      get isFullStateOnly() {
        return 0 !== (this.flags & mc)
      }
      set isFullStateOnly(TT) {
        this.flags = TT ? this.flags | mc : this.flags & ~mc
      }
      get isStreamCollection() {
        return 0 !== (64 & this.flags)
      }
      set isStreamCollection(TT) {
        this.flags = TT ? 64 | this.flags : -65 & this.flags
      }
      get needsRestage() {
        return 0 !== (this.flags & bc)
      }
      set needsRestage(TT) {
        this.flags = TT ? this.flags | bc : -129 & this.flags
      }
      get hasFilteredFields() {
        return this.isFiltered || this.encDescriptor.hasAnyView
      }
      ensureUnreliableRecorder() {
        return void 0 === this.unreliableRecorder && (this.unreliableRecorder = this._isSchema ? new ik(this.metadata?.[mT] ?? 0) : new qk), this.unreliableRecorder
      }
      isFieldUnreliable(TT) {
        const kT = this.encDescriptor;
        return !!kT.hasAnyUnreliable && (TT < 32 ? 0 !== (kT.unreliableBitmask & 1 << TT) : nk.hasUnreliableAtIndex(this.metadata, TT))
      }
      isFieldFullStateOnly(TT) {
        if (this.isFullStateOnly) return !0;
        const kT = this.encDescriptor;
        return !!kT.hasAnyFullStateOnly && (TT < 32 ? 0 !== (kT.fullStateOnlyBitmask & 1 << TT) : nk.hasFullStateOnlyAtIndex(this.metadata, TT))
      }
      isFieldStream(TT) {
        const kT = this.encDescriptor;
        return !!kT.hasAnyStream && (TT < 32 ? 0 !== (kT.streamBitmask & 1 << TT) : nk.hasStreamAtIndex(this.metadata, TT))
      }
      constructor(TT) {
        let kT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : TT;
        this.ref = TT, this.refTarget = kT;
        const cT = kc(TT);
        this.encDescriptor = cT, this.metadata = cT.metadata;
        const lT = cT.isSchema;
        if (this._isSchema = lT, this.ops = void 0, this.collDirty = void 0, this.collPureOps = void 0, lT) {
          const TT = this.metadata?.[mT] ?? 0;
          TT > 7 && (this.ops = new Uint8Array(TT + 1))
        } else this.collDirty = new Map
      }
      _opAt(TT) {
        const kT = this.ops;
        if (void 0 !== kT) return kT[TT];
        const cT = (3 & TT) << 3;
        return TT < 4 ? this.opsLow >>> cT & 255 : this.opsHigh >>> cT & 255
      }
      _opPut(TT, kT) {
        const cT = this.ops;
        if (void 0 !== cT) return void(cT[TT] = kT);
        const lT = (3 & TT) << 3,
          MT = ~(255 << lT);
        TT < 4 ? this.opsLow = this.opsLow & MT | kT << lT : this.opsHigh = this.opsHigh & MT | kT << lT
      }
      _markDirty(TT) {
        TT < 32 ? this.dirtyLow |= 1 << TT : this.dirtyHigh |= 1 << TT - 32
      }
      record(TT, kT) {
        if (this._isSchema) {
          const cT = this._opAt(TT);
          0 === cT ? this._opPut(TT, kT) : (cT === MT.DELETE || cT === MT.ADD && kT === MT.DELETE_AND_ADD) && this._opPut(TT, MT.DELETE_AND_ADD), this._markDirty(TT)
        } else {
          const cT = this.collDirty,
            lT = cT.get(TT);
          let KT;
          KT = void 0 === lT ? kT : lT === MT.DELETE || lT === MT.ADD && kT === MT.DELETE_AND_ADD ? MT.DELETE_AND_ADD : lT, cT.set(TT, KT)
        }
      }
      recordDelete(TT, kT) {
        this._isSchema ? (this._opPut(TT, kT), this._markDirty(TT)) : this.collDirty.set(TT, kT)
      }
      recordRaw(TT, kT) {
        this._isSchema ? (this._opPut(TT, kT), this._markDirty(TT)) : this.collDirty.set(TT, kT)
      }
      recordPure(TT) {
        if (this._isSchema) throw new Error("ChangeTree (Schema): pure operations are not supported");
        (this.collPureOps ??= []).push([this.collDirty.size, TT])
      }
      operationAt(TT) {
        if (this._isSchema) {
          const kT = this._opAt(TT);
          return 0 === kT ? void 0 : kT
        }
        return this.collDirty.get(TT)
      }
      setOperationAt(TT, kT) {
        if (this._isSchema) this._opPut(TT, kT);
        else {
          const cT = this.collDirty;
          cT.has(TT) && cT.set(TT, kT)
        }
      }
      forEach(TT) {
        this.forEachWithCtx(TT, Pc)
      }
      forEachWithCtx(TT, kT) {
        if (this._isSchema) {
          let cT = this.dirtyLow,
            lT = this.dirtyHigh;
          const MT = this.ops;
          if (void 0 !== MT) {
            for (; 0 !== cT;) {
              const lT = cT & -cT,
                KT = 31 - Math.clz32(lT);
              cT ^= lT, kT(TT, KT, MT[KT])
            }
            for (; 0 !== lT;) {
              const cT = lT & -lT,
                KT = 31 - Math.clz32(cT) + 32;
              lT ^= cT, kT(TT, KT, MT[KT])
            }
          } else {
            const lT = this.opsLow,
              MT = this.opsHigh;
            for (; 0 !== cT;) {
              const KT = cT & -cT,
                OT = 31 - Math.clz32(KT);
              cT ^= KT, kT(TT, OT, rc(lT, MT, OT))
            }
          }
          return
        }
        const cT = this.collDirty,
          lT = this.collPureOps;
        if (void 0 !== lT && lT.length > 0) {
          let MT = 0,
            KT = 0;
          for (const [OT, yT] of cT) {
            for (; MT < lT.length && lT[MT][0] <= KT;) {
              const cT = lT[MT++][1];
              kT(TT, -cT, cT)
            }
            kT(TT, OT, yT), KT++
          }
          for (; MT < lT.length;) {
            const cT = lT[MT++][1];
            kT(TT, -cT, cT)
          }
        } else
          for (const [MT, KT] of cT) kT(TT, MT, KT)
      }
      size() {
        return this._isSchema ? sk(this.dirtyLow) + sk(this.dirtyHigh) : this.collDirty.size + (this.collPureOps?.length ?? 0)
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
      insertAt(TT, kT) {
        if (this._isSchema) throw new Error("ChangeTree (Schema): insertAt is not supported");
        const cT = this.collDirty,
          lT = new Map,
          KT = !this.paused && !this.isFullStateOnly;
        if (TT > 0)
          for (const [MT, OT] of cT) MT < TT && lT.set(MT, OT);
        if (KT)
          for (let OT = 0; OT < kT; OT++) lT.set(TT + OT, MT.ADD);
        for (const [MT, OT] of cT) MT >= TT && lT.set(MT + kT, OT);
        this.collDirty = lT, KT && this.root?.enqueueChangeTree(this)
      }
      removeAt(TT, kT) {
        if (this._isSchema) throw new Error("ChangeTree (Schema): removeAt is not supported");
        const cT = this.collDirty,
          lT = TT + kT;
        let MT = !1;
        for (const OT of cT.keys())
          if (OT >= lT) {
            MT = !0;
            break
          } if (!MT) {
          for (let kT = TT; kT < lT; kT++) cT.delete(kT);
          return
        }
        const KT = new Map;
        for (const [OT, yT] of cT) OT < TT ? KT.set(OT, yT) : OT >= lT && KT.set(OT - kT, yT);
        this.collDirty = KT
      }
      unshift(TT) {
        this.insertAt(0, TT)
      }
      setRoot(TT) {
        ! function(TT, kT) {
          TT.root = kT;
          const cT = kT.add(TT);
          Oc(TT, TT.parent, TT.parentIndex), cT && Qc(TT, kT, Sc)
        }(this, TT)
      }
      setParent(TT, kT, cT) {
        hc(this, TT, kT, cT)
      }
      forEachChild(TT) {
        Qc(this, TT, Nc)
      }
      forEachChildWithCtx(TT, kT) {
        Qc(this, TT, kT)
      }
      forEachLive(TT) {
        Kc(this, TT, Mc)
      }
      forEachLiveWithCtx(TT, kT) {
        Kc(this, TT, kT)
      }
      operation(TT) {
        this.paused || this.isFullStateOnly || (this.recordPure(TT), this.root?.enqueueChangeTree(this))
      }
      _routeAndRecord(TT, kT, cT) {
        if (!this.paused && !this.isFieldFullStateOnly(TT)) {
          if (this.isFieldUnreliable(TT) && !this.isNew) {
            const lT = this.ensureUnreliableRecorder();
            return cT ? lT.recordRaw(TT, kT) : lT.record(TT, kT), void this.root?.enqueueUnreliable(this)
          }
          cT ? this.recordRaw(TT, kT) : this.record(TT, kT), this.root?.enqueueChangeTree(this)
        }
      }
      change(TT) {
        let kT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : MT.ADD;
        this._routeAndRecord(TT, kT, !1)
      }
      indexedOperation(TT, kT) {
        this._routeAndRecord(TT, kT, !0)
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
        const kT = this.paused;
        this.paused = !0;
        try {
          return TT()
        } finally {
          this.paused = kT
        }
      }
      markDirty(TT) {
        let kT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : MT.ADD;
        const cT = this.paused;
        this.paused = !1;
        try {
          this.change(TT, kT)
        } finally {
          this.paused = cT
        }
      }
      getValue(TT) {
        let kT = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return this.refTarget[CT](TT, kT)
      }
      delete(TT, kT) {
        if (void 0 === TT) {
          try {
            throw new Error(`@colyseus/schema ${this.ref.constructor.name}: trying to delete non-existing index '${TT}'`)
          } catch (OM) {
            console.warn(OM)
          }
          return
        }
        if (this.paused || this.isFieldFullStateOnly(TT)) return this.getValue(TT);
        const cT = this.isFieldUnreliable(TT) && !this.isNew;
        cT ? this.ensureUnreliableRecorder().recordDelete(TT, kT ?? MT.DELETE) : this.recordDelete(TT, kT ?? MT.DELETE);
        const lT = this.getValue(TT);
        return lT && lT[tT] && this.root?.remove(lT[tT]), cT ? this.root?.enqueueUnreliable(this) : this.root?.enqueueChangeTree(this), lT
      }
      endEncode() {
        this.reset(), this.changesNode = void 0, this._isSchema || this.refTarget[QT]?.(), this.isNew = !1
      }
      endEncodeUnreliable() {
        this.unreliableRecorder?.reset(), this.unreliableChangesNode = void 0, this._isSchema || this.refTarget[QT]?.()
      }
      discard() {
        this._isSchema || this.refTarget[QT]?.(), this.reset(), this.unreliableRecorder?.reset()
      }
      discardAll() {
        const TT = TT => {
          if (TT < 0) return;
          const kT = this.getValue(TT);
          kT && kT[tT] && kT[tT].discardAll()
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
      addParent(TT, kT) {
        ! function(TT, kT, cT) {
          if (TT.parentRef) {
            if (TT.parentRef[tT] === kT[tT]) return void(TT._parentIndex = cT);
            if (cc(TT, ((TT, cT) => TT[tT] === kT[tT]))) return void(TT._parentIndex = cT)
          }
          void 0 === TT.parentRef ? (TT.parentRef = kT, TT._parentIndex = cT) : (TT.extraParents = {
            ref: TT.parentRef,
            index: TT._parentIndex,
            next: TT.extraParents
          }, TT.parentRef = kT, TT._parentIndex = cT)
        }(this, TT, kT)
      }
      setParentIndex(TT, kT) {
        ! function(TT, kT, cT) {
          if (void 0 !== TT.extraParents)
            if (TT.parentRef[tT] !== kT[tT]) {
              for (let lT = TT.extraParents; void 0 !== lT; lT = lT.next)
                if (lT.ref[tT] === kT[tT]) return void(lT.index = cT)
            } else TT._parentIndex = cT;
          else TT._parentIndex = cT
        }(this, TT, kT)
      }
      removeParent() {
        return function(TT, kT) {
          if (TT.parentRef && TT.parentRef[tT] === kT[tT]) return TT.extraParents ? (TT.parentRef = TT.extraParents.ref, TT._parentIndex = TT.extraParents.index, TT.extraParents = TT.extraParents.next) : (TT.parentRef = void 0, TT._parentIndex = void 0), !0;
          let cT = TT.extraParents,
            lT = null;
          for (; cT;) {
            if (cT.ref[tT] === kT[tT]) return lT ? lT.next = cT.next : TT.extraParents = cT.next, !0;
            lT = cT, cT = cT.next
          }
          return void 0 === TT.parentRef
        }(this, arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.parent)
      }
      findParent(TT) {
        return function(TT, kT) {
          if (void 0 !== TT.parentRef && kT(TT.parentRef, TT._parentIndex)) return {
            ref: TT.parentRef,
            index: TT._parentIndex
          };
          for (let cT = TT.extraParents; void 0 !== cT; cT = cT.next)
            if (kT(cT.ref, cT.index)) return {
              ref: cT.ref,
              index: cT.index
            }
        }(this, TT)
      }
      hasParent(TT) {
        return cc(this, TT)
      }
      indexInParent(TT) {
        return function(TT, kT) {
          if (TT.parentRef && TT.parentRef[tT] === kT[tT]) return TT._parentIndex;
          for (let cT = TT.extraParents; void 0 !== cT; cT = cT.next)
            if (cT.ref[tT] === kT[tT]) return cT.index
        }(this, TT)
      }
      getAllParents() {
        return function(TT) {
          const kT = [];
          TT.parentRef && kT.push({
            ref: TT.parentRef,
            index: TT._parentIndex
          });
          let cT = TT.extraParents;
          for (; cT;) kT.push({
            ref: cT.ref,
            index: cT.index
          }), cT = cT.next;
          return kT
        }(this)
      }
    }
    class Hc {
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
        const kT = this.ref;
        if (kT[hT]) {
          if ("string" !== typeof kT[hT])
            for (const [cT, lT] of kT.entries()) lT && TT(lT[tT], kT._collectionIndexes?.[cT] ?? cT);
          return
        }
        const cT = kT.constructor,
          lT = cT?.[Symbol.metadata];
        if (!lT) return;
        const MT = lT[bT] ?? [];
        for (let KT = 0; KT < MT.length; KT++) {
          const cT = MT[KT],
            OT = kT[lT[cT].name];
          OT && TT(OT[tT], cT)
        }
      }
      forEachChildWithCtx(TT, kT) {
        this.forEachChild(((cT, lT) => kT(TT, cT, lT)))
      }
      forEachLive() {}
      forEachLiveWithCtx() {}
      forEach() {}
    }

    function ec(TT) {
      let kT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : TT;
      var cT;
      Object.defineProperty(TT, tT, {
        value: (cT = kT, new Hc(cT)),
        enumerable: !1,
        writable: !0
      })
    }

    function Gc(TT, kT, cT, lT, KT, OT, fT) {
      void 0 !== fT ? fT(kT, lT, OT) : "string" === typeof cT ? kk[cT]?.(kT, lT, OT) : null != cT[Symbol.metadata] ? (kk.number(kT, lT[yT], OT), (KT & MT.ADD) === MT.ADD && TT.tryEncodeTypeId(kT, cT, lT.constructor, OT)) : kk.number(kT, lT[yT], OT)
    }
    const Vc = function(TT, kT, cT, lT, KT, OT, yT, fT) {
        if (kT[OT.offset++] = 255 & (lT | KT), KT === MT.DELETE) return;
        const xT = cT.encDescriptor,
          IT = cT.ref,
          AT = IT[aT][lT] ?? IT[xT.names[lT]];
        Gc(TT, kT, xT.types[lT], AT, KT, OT, xT.encoders[lT])
      },
      Ec = function(TT, kT, cT, lT, KT, OT) {
        if (kT[OT.offset++] = 255 & KT, kk.number(kT, lT, OT), KT === MT.DELETE) return;
        const yT = cT.ref;
        if ((KT & MT.ADD) === MT.ADD) {
          const TT = yT.$indexes.get(lT);
          kk.string(kT, TT, OT)
        }
        Gc(TT, kT, yT[hT], yT[CT](lT), KT, OT)
      },
      Zc = function(TT, kT, cT, lT, KT, OT) {
        if (kT[OT.offset++] = 255 & KT, kk.number(kT, lT, OT), KT === MT.DELETE) return;
        const yT = cT.ref;
        Gc(TT, kT, yT[hT], yT[CT](lT), KT, OT)
      },
      uc = function(TT, kT, cT, lT, KT, OT) {
        const yT = cT.ref;
        (KT & MT.ADD) === MT.ADD && "function" === typeof yT.set ? Ec(TT, kT, cT, lT, KT, OT) : Zc(TT, kT, cT, lT, KT, OT)
      },
      Xc = function(TT, kT, cT, lT, KT, OT, fT, xT) {
        const IT = cT.refTarget,
          AT = IT[hT],
          jT = "string" !== typeof AT;
        let vT;
        if (xT && cT.isFiltered && jT) {
          const TT = IT.tmpItems[lT];
          if (!TT) return;
          if (vT = TT[yT], KT === MT.DELETE) KT = MT.DELETE_BY_REFID;
          else if ((KT & MT.ADD) === MT.ADD) KT = MT.ADD_BY_REFID;
          else if ((KT & MT.MOVE) === MT.MOVE) return
        } else if (KT === MT.DELETE && jT) {
          const TT = IT.tmpItems[lT];
          if (!TT) return;
          vT = TT[yT], KT = MT.DELETE_BY_REFID
        } else vT = lT;
        if (kT[OT.offset++] = 255 & KT, kk.number(kT, vT, OT), KT === MT.DELETE || KT === MT.DELETE_BY_REFID) return;
        Gc(TT, kT, AT, IT[CT](lT, fT), KT, OT)
      };

    function dc(TT, kT, cT, lT, KT, OT, fT) {
      const xT = TT.resyncVisited;
      let IT = xT.get(TT.currentRefId);
      if (void 0 === IT && xT.set(TT.currentRefId, IT = new Set), IT.add(lT), void 0 !== KT && cT === MT.ADD && KT !== OT) {
        const cT = KT[yT];
        void 0 !== cT && (TT.root.removeRef(cT), fT?.push({
          ref: kT,
          refId: TT.currentRefId,
          op: MT.DELETE,
          dynamicIndex: lT,
          value: void 0,
          previousValue: KT
        }))
      }
    }

    function Lc(TT, kT, cT, lT) {
      const MT = kT[yT];
      if (void 0 === MT || cT.has(MT)) return;
      cT.add(MT);
      const KT = kT.constructor[Symbol.metadata],
        OT = KT?.[bT];
      if (void 0 === OT) return;
      const fT = KT[HT];
      for (let yT = 0; yT < OT.length; yT++) {
        const MT = OT[yT];
        if (void 0 !== fT && fT.includes(MT)) continue;
        const xT = KT[MT],
          IT = kT[xT.name];
        IT && (Jl.is(xT.type) ? Lc(TT, IT, cT, lT) : Rc(TT, IT, cT, lT))
      }
    }

    function Rc(TT, kT, cT, lT) {
      const KT = kT[NT] ?? kT,
        OT = KT[yT];
      if (void 0 === OT || cT.has(OT)) return;
      cT.add(OT);
      const fT = TT.resyncVisited.get(OT);
      if (void 0 === fT) return;
      const xT = TT.root;
      KT[vT](fT, ((TT, cT) => {
        lT?.push({
          ref: kT,
          refId: OT,
          op: MT.DELETE,
          dynamicIndex: cT,
          value: void 0,
          previousValue: TT
        });
        const KT = TT?.[yT];
        void 0 !== KT && xT.removeRef(KT)
      }), (kT => {
        Jl.isSchema(kT) && Lc(TT, kT, cT, lT)
      }))
    }
    const gc = 1,
      Uc = 2,
      Yc = 3,
      Bc = 4,
      Wc = 5;

    function nc(TT, kT, cT, lT, KT, OT, fT, xT, IT) {
      const AT = TT.root;
      let CT;
      if ((kT & MT.DELETE) === MT.DELETE) {
        const TT = KT?.[yT];
        void 0 !== TT && AT.removeRef(TT), kT !== MT.DELETE_AND_ADD && cT[jT](lT), CT = void 0
      }
      if (kT === MT.DELETE);
      else if ("string" === typeof OT) CT = Sk[OT](fT, xT);
      else if (Zk(OT)) CT = function(TT, kT, cT) {
        return Xk(TT, (0, Sk[TT.wire])(kT, cT))
      }(OT.quantized, fT, xT);
      else if (Jl.is(OT)) {
        const cT = Sk.number(fT, xT);
        if (CT = AT.refs.get(cT), (kT & MT.ADD) === MT.ADD) {
          const lT = TT.getInstanceType(fT, xT, OT);
          CT || (CT = TT.createInstanceOfType(lT)), AT.addRef(cT, CT, CT !== KT || kT === MT.DELETE_AND_ADD && CT === KT)
        }
      } else {
        const cT = (vT = Object.keys(OT)[0], Dk[vT]),
          lT = Sk.number(fT, xT);
        null !== TT.resyncVisited && function(TT, kT) {
          const cT = TT.resyncVisited;
          cT.has(kT) || cT.set(kT, new Set)
        }(TT, lT);
        const jT = AT.refs.has(lT) ? KT || AT.refs.get(lT) : cT.constructor.initializeForDecoder();
        if (CT = jT.clone(!0), CT[hT] = Object.values(OT)[0], KT) {
          let TT = KT[yT];
          if (void 0 !== TT && lT !== TT) {
            (kT & MT.DELETE) !== MT.DELETE && AT.removeRef(TT);
            const cT = KT.entries();
            let lT;
            for (;
              (lT = cT.next()) && !lT.done;) {
              const [kT, cT] = lT.value;
              "object" === typeof cT && (TT = cT[yT]), IT?.push({
                ref: KT,
                refId: TT,
                op: MT.DELETE,
                field: kT,
                value: void 0,
                previousValue: cT
              })
            }
          }
        }
        AT.addRef(lT, CT, jT !== KT || kT === MT.DELETE_AND_ADD && jT === KT)
      }
      var vT;
      return CT
    }
    const pc = function(TT, kT, cT, lT, MT) {
        const KT = kT[cT.offset++],
          OT = lT.constructor[Symbol.metadata],
          yT = KT >> 6 << 6,
          fT = KT % (yT || 255),
          xT = OT[fT];
        if (void 0 === xT) return console.warn("@colyseus/schema: field not defined at", {
          index: fT,
          ref: lT.constructor.name,
          metadata: OT
        }), -1;
        const IT = !0 === xT.deprecated,
          AT = IT ? void 0 : lT[CT](fT),
          jT = nc(TT, yT, lT, fT, AT, xT.type, kT, cT, MT);
        IT || (null !== jT && void 0 !== jT && (lT[xT.name] = jT), AT !== jT && MT?.push({
          ref: lT,
          refId: TT.currentRefId,
          op: yT,
          field: xT.name,
          value: jT,
          previousValue: AT
        }))
      },
      ic = function(TT, kT, cT, lT, KT) {
        const OT = lT[NT] ?? lT,
          yT = kT[cT.offset++];
        if (yT === MT.CLEAR) return TT.removeChildRefs(OT, KT), void OT.clear();
        const fT = Sk.number(kT, cT),
          xT = OT[hT],
          IT = OT.constructor.COLLECTION_KIND;
        let AT;
        (yT & MT.ADD) === MT.ADD ? IT === gc ? (AT = Sk.string(kT, cT), OT.setIndex(fT, AT)) : AT = fT : AT = OT.getIndex(fT);
        const jT = OT[CT](fT),
          vT = nc(TT, yT, lT, fT, jT, xT, kT, cT, KT);
        if (null !== TT.resyncVisited && dc(TT, lT, yT, AT, jT, vT, KT), null !== vT && void 0 !== vT) switch (IT) {
          case gc:
            OT.$items.set(AT, vT);
            break;
          case Uc:
            OT.$setAt(fT, vT, null !== TT.resyncVisited && yT === MT.ADD ? MT.REPLACE : yT);
            break;
          case Yc:
          case Bc:
          case Wc:
            OT.$items.has(fT) || (OT.$items.set(fT, vT), "number" === typeof OT.$refId && fT >= OT.$refId && (OT.$refId = fT + 1));
            break;
          default:
            console.warn(`@colyseus/schema: missing COLLECTION_KIND on ${OT.constructor?.name} \u2014 item at index ${fT} was not stored.`)
        }
        jT !== vT && KT?.push({
          ref: lT,
          refId: TT.currentRefId,
          op: yT,
          dynamicIndex: AT,
          value: vT,
          previousValue: jT
        })
      },
      qc = function(TT, kT, cT, lT, KT) {
        const OT = lT[NT] ?? lT;
        let yT, fT = kT[cT.offset++];
        if (fT === MT.CLEAR) return TT.removeChildRefs(OT, KT), void OT.clear();
        if (fT === MT.REVERSE) return void OT.items.reverse();
        if (fT === MT.DELETE_BY_REFID) {
          const fT = Sk.number(kT, cT),
            xT = TT.root.refs.get(fT);
          if (void 0 === xT) return;
          if (TT.root.removeRef(fT), yT = OT.findIndex((TT => TT === xT)), -1 === yT) return;
          return OT[jT](yT), void KT?.push({
            ref: lT,
            refId: TT.currentRefId,
            op: MT.DELETE,
            dynamicIndex: yT,
            value: void 0,
            previousValue: xT
          })
        }
        if (fT === MT.ADD_BY_REFID) {
          const lT = Sk.number(kT, cT),
            MT = TT.root.refs.get(lT);
          MT && (yT = OT.findIndex((TT => TT === MT))), -1 !== yT && void 0 !== yT || (yT = OT.length)
        } else yT = Sk.number(kT, cT);
        const xT = OT[hT];
        let IT = yT;
        const AT = OT.items[yT],
          CT = nc(TT, fT, lT, yT, AT, xT, kT, cT, KT);
        null !== TT.resyncVisited && dc(TT, lT, fT, yT, AT, CT, KT), null !== CT && void 0 !== CT && CT !== AT && OT.$setAt(yT, CT, null !== TT.resyncVisited && fT === MT.ADD ? MT.REPLACE : fT), AT !== CT && KT?.push({
          ref: lT,
          refId: TT.currentRefId,
          op: fT,
          dynamicIndex: IT,
          value: CT,
          previousValue: AT
        })
      };
    class sc extends Error {}

    function Tl(TT, kT, cT, lT) {
      if (!(TT instanceof kT)) throw new sc(`a '${kT.name}' was expected, but '${TT&&TT.constructor.name}' was provided in ${cT.constructor.name}#${lT}`)
    }
    const kl = (TT, kT) => {
        const cT = TT.toString(),
          lT = kT.toString();
        return cT < lT ? -1 : cT > lT ? 1 : 0
      },
      cl = {
        get: (TT, kT) => "symbol" === typeof kT || isNaN(kT) ? Reflect.get(TT, kT) : TT.items[kT],
        set: (TT, kT, cT) => {
          if ("symbol" !== typeof kT && !isNaN(kT)) {
            if (void 0 === cT || null === cT) TT.$deleteAt(kT);
            else {
              let lT;
              if (cT[tT]) {
                Tl(cT, TT[hT], TT, kT);
                const KT = TT.items[kT];
                TT.isMovingItems ? (lT = TT.$wireIndex(Number(kT)), void 0 !== KT ? cT[tT].isNew ? TT[tT].indexedOperation(lT, MT.MOVE_AND_ADD) : (TT[tT].getChange(lT) & MT.DELETE) === MT.DELETE ? TT[tT].indexedOperation(lT, MT.DELETE_AND_MOVE) : TT[tT].indexedOperation(lT, MT.MOVE) : cT[tT].isNew && TT[tT].indexedOperation(lT, MT.ADD), cT[tT].setParent(TT, TT[tT].root, lT)) : lT = TT.$changeAt(Number(kT), cT), void 0 !== KT && KT[tT].root?.remove(KT[tT])
              } else lT = TT.$changeAt(Number(kT), cT);
              TT.items[kT] = cT, void 0 !== lT && (TT.tmpItems[lT] = cT)
            }
            return !0
          }
          return Reflect.set(TT, kT, cT)
        },
        deleteProperty: (TT, kT) => ("number" === typeof kT ? TT.$deleteAt(kT) : delete TT[kT], !0),
        has: (TT, kT) => "symbol" === typeof kT || isNaN(Number(kT)) ? Reflect.has(TT, kT) : Reflect.has(TT.items, kT)
      };
    class ll {
      [tT];
      [yT];
      [NT];
      [hT];
      items = [];
      tmpItems = [];
      deletedIndexes = [];
      isMovingItems = !1;
      _needsCompaction = !1;
      static[xT] = Xc;
      static[IT] = qc;
      static COLLECTION_KIND = Uc;
      static[AT](TT, kT, cT) {
        if (!cT) return !0;
        const lT = TT[NT] ?? TT;
        return "string" === typeof lT[hT] || cT.isChangeTreeVisible(lT.tmpItems[kT]?.[tT])
      }
      static is(TT) {
        return Array.isArray(TT) || void 0 !== TT.array
      }
      static from(TT) {
        return new ll(...Array.from(TT))
      }
      constructor() {
        this[hT] = void 0, this[NT] = this;
        const TT = new Proxy(this, cl);
        return Object.defineProperty(this, tT, {
          value: new oc(TT, this),
          enumerable: !1,
          writable: !0
        }), arguments.length > 0 && this.push(...arguments), TT
      }
      static initializeForDecoder() {
        const TT = Object.create(ll.prototype);
        TT.items = [], TT.isMovingItems = !1, TT._needsCompaction = !1, TT[hT] = void 0, TT[NT] = TT;
        const kT = new Proxy(TT, cl);
        return ec(TT, kT), kT
      }
      set length(TT) {
        0 === TT ? this.clear() : TT < this.items.length ? this.splice(TT, this.length - TT) : console.warn("ArraySchema: can't set .length to a higher value than its length.")
      }
      get length() {
        return this.items.length
      }
      pauseTracking() {
        this[tT].pause()
      }
      resumeTracking() {
        this[tT].resume()
      }
      untracked(TT) {
        return this[tT].untracked(TT)
      }
      get isTrackingPaused() {
        return this[tT].paused
      }
      push() {
        const TT = this[NT],
          kT = TT.items,
          cT = TT.tmpItems,
          lT = TT[tT],
          KT = TT[hT];
        let OT = cT.length;
        for (let yT = 0, fT = arguments.length; yT < fT; yT++, OT++) {
          const fT = yT < 0 || arguments.length <= yT ? void 0 : arguments[yT];
          if (void 0 === fT || null === fT) return;
          "object" === typeof fT && KT && Tl(fT, KT, TT, yT), lT.indexedOperation(OT, MT.ADD), kT.push(fT), cT.push(fT), fT[tT]?.setParent(this, lT.root, OT)
        }
        return OT
      }
      pop() {
        const TT = this[NT],
          kT = TT.tmpItems,
          cT = TT.deletedIndexes;
        let lT = -1;
        for (let KT = kT.length - 1; KT >= 0; KT--)
          if (!0 !== cT[KT]) {
            lT = KT;
            break
          } if (lT < 0) return;
        const MT = TT.$isUnsentAdd(lT);
        return TT[tT].delete(lT), MT ? TT.$cancelAdd(lT) : cT[lT] = !0, TT.items.pop()
      }
      at(TT) {
        return TT < 0 && (TT += this.length), this.items[TT]
      }
      $wireIndex(TT) {
        const kT = this.deletedIndexes;
        if (0 === kT.length) return TT;
        const cT = this.tmpItems;
        let lT = 0;
        for (let MT = 0; MT < cT.length; MT++)
          if (!0 !== kT[MT]) {
            if (lT === TT) return MT;
            lT++
          } return cT.length + (TT - lT)
      }
      $isUnsentAdd(TT) {
        const kT = this[tT];
        return 0 === (576 & kT.flags) && !kT.paused && "string" !== typeof this[hT] && kT.operationAt(TT) === MT.ADD
      }
      $cancelAdd(TT) {
        let kT = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        const cT = this[tT],
          lT = this.tmpItems[TT];
        this.tmpItems.splice(TT, 1), this.deletedIndexes.length > 0 && this.deletedIndexes.splice(TT, 1), cT.removeAt(TT, 1);
        const MT = lT?.[tT];
        void 0 !== MT && void 0 === MT.root && MT.removeParent(this), kT && this.$reindexChildren(TT)
      }
      $reindexChildren(TT, kT) {
        if (!this[tT].hasFilteredFields) return;
        if ("string" === typeof this[hT]) return;
        const cT = this.tmpItems,
          lT = cT.length;
        if (void 0 !== kT)
          for (; TT < lT && cT[TT] === kT[TT];) TT++;
        for (let MT = TT; MT < lT; MT++) cT[MT]?.[tT]?.setParentIndex(this, MT)
      }
      $changeAt(TT, kT) {
        if (void 0 === kT || null === kT) return void console.error("ArraySchema items cannot be null nor undefined; Use `splice(index, 1)` instead.");
        if (this.items[TT] === kT) return;
        const cT = void 0 !== this.items[TT] ? "object" === typeof kT ? MT.DELETE_AND_ADD : MT.REPLACE : MT.ADD,
          lT = this.$wireIndex(TT),
          KT = this[tT];
        return KT.change(lT, cT), kT[tT]?.setParent(this, KT.root, lT), lT
      }
      $deleteAt(TT, kT) {
        this[tT].delete(this.$wireIndex(TT), kT)
      }
      $setAt(TT, kT, cT) {
        cT === MT.ADD && void 0 !== this.items[TT] ? this.items.splice(TT, 0, kT) : cT === MT.DELETE_AND_MOVE ? (this.items.splice(TT, 1), this.items[TT] = kT) : (TT > this.items.length && (this._needsCompaction = !0), this.items[TT] = kT)
      }
      clear() {
        const TT = this[NT];
        if (0 === TT.items.length) return;
        const kT = TT[tT];
        kT.forEachChild(((TT, cT) => {
          kT.root?.remove(TT)
        })), kT.discard(), kT.operation(MT.CLEAR), TT.items.length = 0, TT.tmpItems.length = 0
      } [ST]() {
        const TT = this[NT] ?? this,
          kT = TT[tT];
        if (kT.isStreamCollection) throw new Error("@colyseus/schema: cannot reset a streamed ArraySchema (pooling not supported).");
        const cT = TT.items;
        for (let lT = 0; lT < cT.length; lT++) cT[lT]?.[ST]?.();
        TT.items.length = 0, TT.tmpItems.length = 0, TT.deletedIndexes.length = 0, kT.recycle(), TT[yT] = void 0
      }
      concat() {
        return new ll(...this.items.concat(...arguments))
      }
      join(TT) {
        return this.items.join(TT)
      }
      reverse() {
        const TT = this[NT],
          kT = TT[tT];
        if (kT.has() || TT.deletedIndexes.length > 0) {
          const kT = TT.items.slice().reverse();
          return this.clear(), this.push(...kT), this
        }
        return kT.operation(MT.REVERSE), TT.items.reverse(), TT.tmpItems.reverse(), TT.$reindexChildren(0), this
      }
      shift() {
        const TT = this[NT],
          kT = TT.items;
        if (0 === kT.length) return;
        const cT = TT[tT],
          lT = TT.deletedIndexes;
        let KT = 0;
        for (; !0 === lT[KT];) KT++;
        const OT = TT.$isUnsentAdd(KT);
        return cT.delete(KT, MT.DELETE), OT ? TT.$cancelAdd(KT) : lT[KT] = !0, kT.shift()
      }
      slice(TT, kT) {
        const cT = new ll;
        return cT.push(...this.items.slice(TT, kT)), cT
      }
      sort() {
        let TT = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : kl;
        const kT = this[NT];
        kT.isMovingItems = !0;
        const cT = kT[tT];
        return kT.items.sort(TT).forEach(((TT, kT) => cT.change(kT, MT.REPLACE))), kT.tmpItems.sort(TT), kT.$reindexChildren(0), kT.isMovingItems = !1, this
      }
      splice(TT, kT) {
        const cT = this[NT],
          lT = cT[tT],
          KT = cT.items,
          OT = cT.tmpItems,
          yT = cT.deletedIndexes,
          fT = KT.length,
          xT = OT.length;
        for (var IT = arguments.length, AT = new Array(IT > 2 ? IT - 2 : 0), CT = 2; CT < IT; CT++) AT[CT - 2] = arguments[CT];
        const jT = AT.length,
          vT = [];
        for (let MT = 0; MT < xT; MT++) !0 !== yT[MT] && vT.push(MT);
        let hT;
        if (fT > TT) {
          void 0 === kT && (kT = fT - TT);
          for (let KT = TT; KT < TT + kT; KT++) {
            const TT = vT[KT],
              kT = cT.$isUnsentAdd(TT);
            lT.delete(TT, MT.DELETE), kT ? (hT ??= []).push(TT) : yT[TT] = !0
          }
        } else kT = 0;
        if (jT > 0) {
          const KT = vT[TT] ?? fT,
            xT = Math.min(jT, kT);
          for (let TT = 0; TT < xT; TT++) {
            const kT = KT + TT;
            let cT;
            const fT = void 0 !== hT ? hT.indexOf(kT) : -1; - 1 !== fT ? (hT.splice(fT, 1), cT = MT.ADD) : cT = yT[kT] ? MT.DELETE_AND_ADD : MT.ADD, lT.indexedOperation(kT, cT), OT[kT] = AT[TT], yT[kT] = !1, AT[TT][tT]?.setParent(this, lT.root, kT)
          }
          const IT = jT - xT;
          if (IT > 0) {
            const TT = KT + xT;
            lT.insertAt(TT, IT);
            for (let kT = 0; kT < IT; kT++) AT[xT + kT][tT]?.setParent(this, lT.root, TT + kT);
            yT.length > 0 && yT.splice(TT, 0, ...new Array(IT).fill(!1)), OT.splice(TT, 0, ...AT.slice(xT)), cT.$reindexChildren(TT + IT)
          }
        }
        if (void 0 !== hT && hT.length > 0) {
          for (let TT = hT.length - 1; TT >= 0; TT--) cT.$cancelAdd(hT[TT], !1);
          cT.$reindexChildren(hT[0])
        }
        return lT.root?.enqueueChangeTree(lT), KT.splice(TT, kT, ...AT)
      }
      unshift() {
        const TT = this[NT],
          kT = TT[tT];
        kT.unshift(arguments.length);
        for (let lT = 0; lT < arguments.length; lT++)(lT < 0 || arguments.length <= lT ? void 0 : arguments[lT])?.[tT]?.setParent(this, kT.root, lT);
        const cT = TT.deletedIndexes;
        return cT.length > 0 && cT.unshift(...new Array(arguments.length).fill(!1)), TT.tmpItems.unshift(...arguments), TT.$reindexChildren(arguments.length), TT.items.unshift(...arguments)
      }
      indexOf(TT, kT) {
        return this.items.indexOf(TT, kT)
      }
      lastIndexOf(TT) {
        let kT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.length - 1;
        return this.items.lastIndexOf(TT, kT)
      }
      every(TT, kT) {
        return this.items.every(TT, kT)
      }
      some(TT, kT) {
        return this.items.some(TT, kT)
      }
      forEach(TT, kT) {
        return this.items.forEach(TT, kT)
      }
      map(TT, kT) {
        return this.items.map(TT, kT)
      }
      filter(TT, kT) {
        return this.items.filter(TT, kT)
      }
      reduce(TT, kT) {
        return this.items.reduce.apply(this.items, arguments)
      }
      reduceRight(TT, kT) {
        return this.items.reduceRight.apply(this.items, arguments)
      }
      find(TT, kT) {
        return this.items.find(TT, kT)
      }
      findIndex(TT, kT) {
        return this.items.findIndex(TT, kT)
      }
      fill(TT, kT, cT) {
        throw new Error("ArraySchema#fill() not implemented")
      }
      copyWithin(TT, kT, cT) {
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
        return ll
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
      includes(TT, kT) {
        return this.items.includes(TT, kT)
      }
      flatMap(TT, kT) {
        throw new Error("ArraySchema#flatMap() is not supported.")
      }
      flat(TT) {
        throw new Error("ArraySchema#flat() is not supported.")
      }
      findLast() {
        return this.items.findLast.apply(this.items, arguments)
      }
      findLastIndex() {
        for (var TT = arguments.length, kT = new Array(TT), cT = 0; cT < TT; cT++) kT[cT] = arguments[cT];
        return this.items.findLastIndex.apply(this.items, arguments)
      }
      with(TT, kT) {
        const cT = this.items.slice();
        return TT < 0 && (TT += this.length), cT[TT] = kT, new ll(...cT)
      }
      toReversed() {
        return this.items.slice().reverse()
      }
      toSorted(TT) {
        return this.items.slice().sort(TT)
      }
      toSpliced(TT, kT) {
        for (var cT = arguments.length, lT = new Array(cT > 2 ? cT - 2 : 0), MT = 2; MT < cT; MT++) lT[MT - 2] = arguments[MT];
        const KT = this.items.slice();
        return KT.splice.apply(KT, arguments), KT
      }
      shuffle() {
        return this.move((TT => {
          let kT = this.items.length;
          for (; 0 != kT;) {
            let TT = Math.floor(Math.random() * kT);
            kT--, [this[kT], this[TT]] = [this[TT], this[kT]]
          }
        }))
      }
      move(TT) {
        return this.isMovingItems = !0, TT(this), this.isMovingItems = !1, this
      } [CT](TT) {
        let kT = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        const cT = this[NT] ?? this;
        return kT || cT.deletedIndexes[TT] ? cT.items[TT] : cT.tmpItems[TT] || cT.items[TT]
      } [jT](TT) {
        const kT = this[NT] ?? this;
        kT.items[TT] = void 0, kT._needsCompaction = !0
      } [QT]() {
        const TT = this.tmpItems;
        this.tmpItems = this.items.slice(), this.deletedIndexes.length > 0 && (this.$reindexChildren(0, TT), this.deletedIndexes.length = 0)
      } [DT]() {
        const TT = this[NT] ?? this;
        TT._needsCompaction && (TT._needsCompaction = !1, TT.items = TT.items.filter((TT => void 0 !== TT)))
      } [vT](TT, kT, cT) {
        const lT = this[NT] ?? this,
          MT = lT.items;
        let KT = !1;
        for (let OT = 0; OT < MT.length; OT++) {
          const yT = MT[OT];
          TT.has(OT) ? cT(yT) : (KT = !0, kT(yT, OT), lT[jT](OT))
        }
        KT && lT[DT]()
      }
      toArray() {
        return this.items.slice(0)
      }
      toJSON() {
        return this.toArray().map((TT => "function" === typeof TT.toJSON ? TT.toJSON() : TT))
      }
      clone(TT) {
        let kT;
        return TT ? (kT = new ll, kT.push(...this.items)) : kT = new ll(...this.map((TT => TT[tT] ? TT.clone() : TT))), kT
      }
    }
    Fk("array", {
      constructor: ll
    });
    class Ml {
      keyByIndex = new Map;
      indexByKey = Object.create(null);
      nextIndex = 0;
      snapshots;
      indexOf(TT) {
        const kT = this.indexByKey[TT];
        return void 0 === kT ? void 0 : kT
      }
      assign(TT) {
        const kT = this.nextIndex++;
        return this.indexByKey[TT] = kT, this.keyByIndex.set(kT, TT), kT
      }
      snapshot(TT, kT) {
        (this.snapshots ??= new Map).set(TT, kT)
      }
      forgetSnapshot(TT) {
        this.snapshots?.delete(TT)
      }
      snapshotAt(TT) {
        return this.snapshots?.get(TT)
      }
      setIndex(TT, kT) {
        this.keyByIndex.set(TT, kT), this.indexByKey[kT] = TT
      }
      keyOf(TT) {
        return this.keyByIndex.get(TT)
      }
      cleanupAfterEncode() {
        if (void 0 !== this.snapshots) {
          for (const [TT] of this.snapshots) {
            const kT = this.keyByIndex.get(TT);
            void 0 !== kT && (delete this.indexByKey[kT], this.keyByIndex.delete(TT))
          }
          this.snapshots.clear()
        }
      }
      reset() {
        this.indexByKey = Object.create(null), this.keyByIndex.clear(), this.snapshots?.clear(), this.nextIndex = 0
      }
    }
    class Kl {
      [tT];
      [yT];
      childType;
      [hT];
      $items = new Map;
      journal = new Ml;
      _stream;
      get maxPerTick() {
        return this._stream?.maxPerTick ?? 32
      }
      set maxPerTick(TT) {
        (this._stream ??= wk()).maxPerTick = TT
      }
      get priority() {
        return this._stream?.priority
      }
      set priority(TT) {
        (this._stream ??= wk()).priority = TT
      }
      get $indexes() {
        return this.journal.keyByIndex
      }
      get _collectionIndexes() {
        return this.journal.indexByKey
      }
      static[xT] = Ec;
      static[IT] = ic;
      static COLLECTION_KIND = gc;
      static[AT](TT, kT, cT) {
        if (!cT || "string" === typeof TT[hT]) return !0;
        const lT = TT[CT](kT) ?? TT.journal.snapshotAt(kT);
        return cT.isChangeTreeVisible(lT[tT])
      }
      static is(TT) {
        return void 0 !== TT.map
      }
      constructor(TT) {
        if (Object.defineProperty(this, tT, {
            value: new oc(this),
            enumerable: !1,
            writable: !0
          }), this[hT] = void 0, TT)
          if (TT instanceof Map || TT instanceof Kl) TT.forEach(((TT, kT) => this.set(kT, TT)));
          else
            for (const kT in TT) this.set(kT, TT[kT])
      }
      static initializeForDecoder() {
        const TT = Object.create(Kl.prototype);
        return TT.$items = new Map, TT.journal = new Ml, TT[hT] = void 0, ec(TT), TT
      } [Symbol.iterator]() {
        return this.$items[Symbol.iterator]()
      }
      get[Symbol.toStringTag]() {
        return this.$items[Symbol.toStringTag]
      }
      static get[Symbol.species]() {
        return Kl
      }
      set(TT, kT) {
        if (void 0 === kT || null === kT) throw new Error(`MapSchema#set('${TT}', ${kT}): trying to set ${kT} value on '${TT}'.`);
        "object" === typeof kT && this[hT] && Tl(kT, this[hT], this, TT), TT = TT.toString();
        const cT = this[tT],
          lT = void 0 !== kT[tT],
          KT = this.journal;
        let OT, yT = KT.indexOf(TT);
        if (void 0 !== yT) {
          OT = MT.REPLACE;
          const cT = this.$items.get(TT);
          if (cT === kT) return;
          lT && (OT = MT.DELETE_AND_ADD, void 0 !== cT && cT[tT].root?.remove(cT[tT])), void 0 !== KT.snapshotAt(yT) && KT.forgetSnapshot(yT)
        } else yT = KT.assign(TT), OT = MT.ADD;
        return this.$items.set(TT, kT), OT === MT.ADD && cT.isStreamCollection ? void 0 !== cT.root && bk(this, cT.root, yT) : cT.change(yT, OT), lT && kT[tT].setParent(this, cT.root, yT), this
      }
      get(TT) {
        return this.$items.get(TT)
      }
      getOrInsert(TT, kT) {
        return this.$items.has(TT) ? this.$items.get(TT) : (this.set(TT, kT), kT)
      }
      getOrInsertComputed(TT, kT) {
        if (this.$items.has(TT)) return this.$items.get(TT);
        const cT = kT(TT);
        return this.set(TT, cT), cT
      }
      delete(TT) {
        if (!this.$items.has(TT)) return !1;
        const kT = this.journal.indexOf(TT),
          cT = this.$items.get(TT),
          lT = this[tT];
        if (lT.isStreamCollection) {
          const MT = lT.root;
          let KT = !1;
          return void 0 !== MT && (KT = zk(this, MT, this[yT], kT)), void 0 !== cT?.[tT] && MT?.remove(cT[tT]), this.$items.delete(TT), KT || this.journal.snapshot(kT, cT), !0
        }
        return this.journal.snapshot(kT, cT), lT.delete(kT), this.$items.delete(TT)
      }
      clear() {
        const TT = this[tT];
        TT.discard(), TT.forEachChild(((kT, cT) => {
          TT.root?.remove(kT)
        })), this.journal.reset(), this.$items.clear(), TT.operation(MT.CLEAR)
      } [ST]() {
        const TT = this[tT];
        if (TT.isStreamCollection) throw new Error("@colyseus/schema: cannot reset a streamed MapSchema (pooling not supported).");
        this.$items.forEach((TT => TT?.[ST]?.())), this.$items.clear(), this.journal.reset(), TT.recycle(), this[yT] = void 0
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
        this[tT].pause()
      }
      resumeTracking() {
        this[tT].resume()
      }
      untracked(TT) {
        return this[tT].untracked(TT)
      }
      get isTrackingPaused() {
        return this[tT].paused
      }
      setIndex(TT, kT) {
        this.journal.setIndex(TT, kT)
      }
      getIndex(TT) {
        return this.journal.keyOf(TT)
      } [CT](TT) {
        const kT = this.journal.keyOf(TT);
        return void 0 !== kT ? this.$items.get(kT) : void 0
      } [jT](TT) {
        const kT = this.journal.keyOf(TT);
        void 0 !== kT && (this.$items.delete(kT), this.journal.keyByIndex.delete(TT))
      } [vT](TT, kT, cT) {
        let lT = null;
        if (this.$items.forEach(((MT, KT) => {
            TT.has(KT) ? cT(MT) : ((lT ??= new Set).add(KT), kT(MT, KT))
          })), null !== lT) {
          lT.forEach((TT => {
            this.$items.delete(TT), delete this.journal.indexByKey[TT]
          }));
          const TT = [];
          this.journal.keyByIndex.forEach(((kT, cT) => {
            lT.has(kT) && TT.push(cT)
          }));
          for (let kT = 0; kT < TT.length; kT++) this.journal.keyByIndex.delete(TT[kT])
        }
      } [QT]() {
        this.journal.cleanupAfterEncode()
      }
      _dropView(TT) {
        Gk(this, TT)
      }
      _unregister() {}
      toJSON() {
        return Object.fromEntries(Array.from(this, (TT => {
          let [kT, cT] = TT;
          return [kT, "function" === typeof cT.toJSON ? cT.toJSON() : cT]
        })))
      }
      clone(TT) {
        let kT;
        return TT ? kT = Object.assign(new Kl, this) : (kT = new Kl, this.forEach(((TT, cT) => {
          TT[tT] ? kT.set(cT, TT.clone()) : kT.set(cT, TT)
        }))), kT
      }
    }
    Fk("map", {
      constructor: Kl
    });
    class Ol {
      [tT];
      [yT];
      [hT];
      $items = new Map;
      deletedItems = {};
      $refId = 0;
      _stream;
      get maxPerTick() {
        return this._stream?.maxPerTick ?? 32
      }
      set maxPerTick(TT) {
        (this._stream ??= wk()).maxPerTick = TT
      }
      get priority() {
        return this._stream?.priority
      }
      set priority(TT) {
        (this._stream ??= wk()).priority = TT
      }
      static[xT] = Zc;
      static[IT] = ic;
      static COLLECTION_KIND = Bc;
      static[AT](TT, kT, cT) {
        return !cT || "string" === typeof TT[hT] || cT.isChangeTreeVisible((TT[CT](kT) ?? TT.deletedItems[kT])[tT])
      }
      static is(TT) {
        return void 0 !== TT.collection
      }
      constructor(TT) {
        Object.defineProperty(this, tT, {
          value: new oc(this),
          enumerable: !1,
          writable: !0
        }), this[hT] = void 0, TT && TT.forEach((TT => this.add(TT)))
      }
      static initializeForDecoder() {
        const TT = Object.create(Ol.prototype);
        return TT.$items = new Map, TT.deletedItems = {}, TT.$refId = 0, TT[hT] = void 0, ec(TT), TT
      }
      add(TT) {
        const kT = this.$refId++,
          cT = this[tT];
        return this.$items.set(kT, TT), cT.isStreamCollection ? void 0 !== cT.root && bk(this, cT.root, kT) : cT.change(kT), void 0 !== TT[tT] && TT[tT].setParent(this, cT.root, kT), kT
      }
      at(TT) {
        const kT = Array.from(this.$items.keys())[TT];
        return this.$items.get(kT)
      }
      entries() {
        return this.$items.entries()
      }
      delete(TT) {
        const kT = this.$items.entries();
        let cT, lT;
        for (;
          (lT = kT.next()) && !lT.done;)
          if (TT === lT.value[1]) {
            cT = lT.value[0];
            break
          } if (void 0 === cT) return !1;
        const MT = this[tT];
        if (MT.isStreamCollection) {
          const TT = MT.root,
            kT = this.$items.get(cT);
          return void 0 !== TT && zk(this, TT, this[yT], cT), void 0 !== kT?.[tT] && TT?.remove(kT[tT]), this.deletedItems[cT] = kT, this.$items.delete(cT)
        }
        return this.deletedItems[cT] = MT.delete(cT), this.$items.delete(cT)
      }
      clear() {
        const TT = this[tT];
        TT.discard(), TT.forEachChild(((kT, cT) => {
          TT.root?.remove(kT)
        })), this.$items.clear(), TT.operation(MT.CLEAR)
      } [ST]() {
        const TT = this[tT];
        if (TT.isStreamCollection) throw new Error("@colyseus/schema: cannot reset a streamed CollectionSchema (pooling not supported).");
        this.$items.forEach((TT => TT?.[ST]?.())), this.$items.clear(), this.deletedItems = {}, this.$refId = 0, TT.recycle(), this[yT] = void 0
      }
      has(TT) {
        return Array.from(this.$items.values()).some((kT => kT === TT))
      }
      forEach(TT) {
        this.$items.forEach(((kT, cT, lT) => TT(kT, cT, this)))
      }
      values() {
        return this.$items.values()
      }
      get size() {
        return this.$items.size
      }
      pauseTracking() {
        this[tT].pause()
      }
      resumeTracking() {
        this[tT].resume()
      }
      untracked(TT) {
        return this[tT].untracked(TT)
      }
      get isTrackingPaused() {
        return this[tT].paused
      } [Symbol.iterator]() {
        return this.$items.values()
      }
      setIndex(TT, kT) {}
      getIndex(TT) {
        return TT
      } [CT](TT) {
        return this.$items.get(TT)
      } [jT](TT) {
        this.$items.delete(TT)
      } [vT](TT, kT, cT) {
        let lT = null;
        if (this.$items.forEach(((MT, KT) => {
            TT.has(KT) ? cT(MT) : ((lT ??= []).push(KT), kT(MT, KT))
          })), null !== lT)
          for (let MT = 0; MT < lT.length; MT++) this[jT](lT[MT])
      } [QT]() {
        for (const TT in this.deletedItems) delete this.deletedItems[TT]
      }
      _dropView(TT) {
        Gk(this, TT)
      }
      _unregister() {}
      toArray() {
        return Array.from(this.$items.values())
      }
      toJSON() {
        const TT = [];
        return this.forEach(((kT, cT) => {
          TT.push("function" === typeof kT.toJSON ? kT.toJSON() : kT)
        })), TT
      }
      clone(TT) {
        let kT;
        return TT ? kT = Object.assign(new Ol, this) : (kT = new Ol, this.forEach((TT => {
          TT[tT] ? kT.add(TT.clone()) : kT.add(TT)
        }))), kT
      }
    }
    Fk("collection", {
      constructor: Ol
    });
    class yl {
      [tT];
      [yT];
      [hT];
      $items = new Map;
      deletedItems = {};
      $refId = 0;
      _stream;
      get maxPerTick() {
        return this._stream?.maxPerTick ?? 32
      }
      set maxPerTick(TT) {
        (this._stream ??= wk()).maxPerTick = TT
      }
      get priority() {
        return this._stream?.priority
      }
      set priority(TT) {
        (this._stream ??= wk()).priority = TT
      }
      static[xT] = Zc;
      static[IT] = ic;
      static COLLECTION_KIND = Yc;
      static[AT](TT, kT, cT) {
        return !cT || "string" === typeof TT[hT] || cT.isVisible((TT[CT](kT) ?? TT.deletedItems[kT])[tT])
      }
      static is(TT) {
        return void 0 !== TT.set
      }
      constructor(TT) {
        Object.defineProperty(this, tT, {
          value: new oc(this),
          enumerable: !1,
          writable: !0
        }), this[hT] = void 0, TT && TT.forEach((TT => this.add(TT)))
      }
      static initializeForDecoder() {
        const TT = Object.create(yl.prototype);
        return TT.$items = new Map, TT.deletedItems = {}, TT.$refId = 0, TT[hT] = void 0, ec(TT), TT
      }
      add(TT) {
        if (this.has(TT)) return !1;
        const kT = this.$refId++,
          cT = this[tT];
        return this.$items.set(kT, TT), cT.isStreamCollection ? void 0 !== cT.root && bk(this, cT.root, kT) : cT.change(kT, MT.ADD), void 0 !== TT[tT] && TT[tT].setParent(this, cT.root, kT), kT
      }
      entries() {
        return this.$items.entries()
      }
      delete(TT) {
        const kT = this.$items.entries();
        let cT, lT;
        for (;
          (lT = kT.next()) && !lT.done;)
          if (TT === lT.value[1]) {
            cT = lT.value[0];
            break
          } if (void 0 === cT) return !1;
        const MT = this[tT];
        if (MT.isStreamCollection) {
          const TT = MT.root,
            kT = this.$items.get(cT);
          return void 0 !== TT && zk(this, TT, this[yT], cT), void 0 !== kT?.[tT] && TT?.remove(kT[tT]), this.deletedItems[cT] = kT, this.$items.delete(cT)
        }
        return this.deletedItems[cT] = MT.delete(cT), this.$items.delete(cT)
      }
      clear() {
        const TT = this[tT];
        TT.discard(), this.$items.clear(), TT.operation(MT.CLEAR)
      } [ST]() {
        const TT = this[tT];
        if (TT.isStreamCollection) throw new Error("@colyseus/schema: cannot reset a streamed SetSchema (pooling not supported).");
        this.$items.forEach((TT => TT?.[ST]?.())), this.$items.clear(), this.deletedItems = {}, this.$refId = 0, TT.recycle(), this[yT] = void 0
      }
      has(TT) {
        const kT = this.$items.values();
        let cT, lT = !1;
        for (;
          (cT = kT.next()) && !cT.done;)
          if (TT === cT.value) {
            lT = !0;
            break
          } return lT
      }
      forEach(TT) {
        this.$items.forEach(((kT, cT, lT) => TT(kT, cT, this)))
      }
      values() {
        return this.$items.values()
      }
      get size() {
        return this.$items.size
      }
      pauseTracking() {
        this[tT].pause()
      }
      resumeTracking() {
        this[tT].resume()
      }
      untracked(TT) {
        return this[tT].untracked(TT)
      }
      get isTrackingPaused() {
        return this[tT].paused
      } [Symbol.iterator]() {
        return this.$items.values()
      }
      setIndex(TT, kT) {}
      getIndex(TT) {
        return TT
      } [CT](TT) {
        return this.$items.get(TT)
      } [jT](TT) {
        this.$items.delete(TT)
      } [vT](TT, kT, cT) {
        let lT = null;
        if (this.$items.forEach(((MT, KT) => {
            TT.has(KT) ? cT(MT) : ((lT ??= []).push(KT), kT(MT, KT))
          })), null !== lT)
          for (let MT = 0; MT < lT.length; MT++) this[jT](lT[MT])
      } [QT]() {
        for (const TT in this.deletedItems) delete this.deletedItems[TT]
      }
      _dropView(TT) {
        Gk(this, TT)
      }
      _unregister() {}
      toArray() {
        return Array.from(this.$items.values())
      }
      toJSON() {
        const TT = [];
        return this.forEach(((kT, cT) => {
          TT.push("function" === typeof kT.toJSON ? kT.toJSON() : kT)
        })), TT
      }
      clone(TT) {
        let kT;
        return TT ? kT = Object.assign(new yl, this) : (kT = new yl, this.forEach((TT => {
          TT[tT] ? kT.add(TT.clone()) : kT.add(TT)
        }))), kT
      }
    }
    Fk("set", {
      constructor: yl
    });
    class fl {
      [tT];
      [yT];
      [hT];
      $items = new Map;
      $nextPosition = 0;
      _itemIndex = new Map;
      _stream;
      get maxPerTick() {
        return this._stream?.maxPerTick ?? 32
      }
      set maxPerTick(TT) {
        (this._stream ??= wk()).maxPerTick = TT
      }
      get priority() {
        return this._stream?.priority
      }
      set priority(TT) {
        (this._stream ??= wk()).priority = TT
      }
      static $isStream = !0;
      static[xT] = Zc;
      static[IT] = ic;
      static COLLECTION_KIND = Wc;
      static[AT](TT, kT, cT) {
        if (!cT) return !0;
        const lT = TT[CT](kT);
        return void 0 !== lT && cT.isVisible(lT[tT])
      }
      static is(TT) {
        return TT && void 0 !== TT.stream
      }
      constructor() {
        Object.defineProperty(this, tT, {
          value: new oc(this),
          enumerable: !1,
          writable: !0
        }), this[hT] = void 0
      }
      static initializeForDecoder() {
        const TT = Object.create(fl.prototype);
        return TT.$items = new Map, TT.$nextPosition = 0, TT._itemIndex = new Map, TT[hT] = void 0, ec(TT), TT
      }
      add(TT) {
        if (this._itemIndex.has(TT)) return -1;
        const kT = this.$nextPosition++;
        this.$items.set(kT, TT), this._itemIndex.set(TT, kT);
        const cT = this[tT].root;
        return void 0 !== TT[tT] && TT[tT].setParent(this, cT, kT), void 0 !== cT && bk(this, cT, kT), kT
      }
      remove(TT) {
        const kT = this._itemIndex.get(TT);
        if (void 0 === kT) return !1;
        this._itemIndex.delete(TT), this.$items.delete(kT);
        const cT = this[tT].root;
        return void 0 !== cT && (zk(this, cT, this[yT], kT), void 0 !== TT[tT] && cT.remove(TT[tT])), !0
      }
      has(TT) {
        return this._itemIndex.has(TT)
      }
      clear() {
        const TT = this[tT].root;
        if (void 0 !== TT) {
          ! function(TT, kT, cT) {
            const lT = TT._stream;
            if (void 0 !== lT) {
              lT.broadcastPending.clear();
              for (const TT of lT.sentBroadcast) lT.broadcastDeletes.add(TT);
              lT.sentBroadcast.clear(), kT.forEachActiveView((TT => {
                lT.pendingByView.get(TT.id)?.clear();
                const kT = lT.sentByView.get(TT.id);
                if (void 0 !== kT && kT.size > 0) {
                  let lT = TT.changes.get(cT);
                  void 0 === lT && (lT = new Map, TT.changes.set(cT, lT));
                  for (const TT of kT) lT.set(TT, MT.DELETE);
                  kT.clear()
                }
              }))
            }
          }(this, TT, this[yT]);
          for (const kT of this.$items.values()) void 0 !== kT[tT] && TT.remove(kT[tT])
        }
        this.$items.clear(), this._itemIndex.clear()
      }
      forEach(TT) {
        for (const [kT, cT] of this.$items) TT(cT, kT, this)
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
      setIndex(TT, kT) {}
      getIndex(TT) {
        return TT
      } [CT](TT) {
        return this.$items.get(TT)
      } [jT](TT) {
        const kT = this.$items.get(TT);
        void 0 !== kT && (this._itemIndex.delete(kT), this.$items.delete(TT))
      } [vT]() {} [QT]() {}
      toArray() {
        return Array.from(this.$items.values())
      }
      toJSON() {
        const TT = [];
        return this.forEach((kT => {
          TT.push("function" === typeof kT?.toJSON ? kT.toJSON() : kT)
        })), TT
      }
      clone(TT) {
        if (TT) {
          return Object.assign(new fl, this)
        }
        const kT = new fl;
        return kT.maxPerTick = this.maxPerTick, this.forEach((TT => {
          kT.add("function" === typeof TT?.clone ? TT.clone() : TT)
        })), kT
      }
      _dropView(TT) {
        Gk(this, TT)
      }
      _unregister() {}
    }
    Fk("stream", {
      constructor: fl
    });
    class xl {
      [FT] = !0;
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
        if (TT && "object" === typeof TT && void 0 !== TT.array) throw new Error(Pk);
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

    function Il(TT) {
      return null != TT && !0 === TT[FT]
    }

    function Al(TT) {
      return () => new xl(TT)
    }

    function Cl(TT) {
      if (Il(TT)) {
        const kT = TT._type;
        throw new Error(`t.array/map/set/collection(): a t.* builder is not a valid element type \u2014 ${"string"===typeof kT?`use the type name instead: t.array("${kT}")`:'collections accept a Schema class or a primitive type name ("string", "number", \u2026)'}.`)
      }
      return TT
    }

    function jl(TT) {
      return new xl({
        quantized: Ek(TT)
      })
    }
    const vl = Object.freeze({
        string: Al("string"),
        number: Al("number"),
        boolean: Al("boolean"),
        int8: Al("int8"),
        uint8: Al("uint8"),
        int16: Al("int16"),
        uint16: Al("uint16"),
        int32: Al("int32"),
        uint32: Al("uint32"),
        int64: Al("int64"),
        uint64: Al("uint64"),
        float32: Al("float32"),
        float64: Al("float64"),
        bigint64: Al("bigint64"),
        biguint64: Al("biguint64"),
        ref: TT => new xl(TT),
        array: TT => new xl({
          array: Cl(TT)
        }),
        map: TT => new xl({
          map: Cl(TT)
        }),
        set: TT => new xl({
          set: Cl(TT)
        }),
        collection: TT => new xl({
          collection: Cl(TT)
        }),
        stream: TT => {
          const kT = new xl({
            stream: Cl(TT)
          });
          return kT._stream = !0, kT
        },
        quantized: jl,
        angle: TT => jl({
          min: 0,
          max: 2 * Math.PI,
          mode: "wrap",
          bits: TT?.bits ?? 16
        })
      }),
      tl = -1;

    function hl(TT) {
      return Lk.register(TT), TT
    }

    function Nl() {
      let TT = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : tl;
      return function(kT, cT) {
        const lT = nk.initialize(kT.constructor);
        nk.setTag(lT, cT, TT)
      }
    }

    function Ql(TT, kT) {
      const cT = nk.initialize(TT.constructor);
      nk.setUnreliable(cT, kT)
    }

    function Sl(TT, kT) {
      const cT = nk.initialize(TT.constructor);
      nk.setPatchOnly(cT, kT)
    }

    function Dl(TT, kT) {
      const cT = nk.initialize(TT.constructor);
      nk.setFullStateOnly(cT, kT)
    }

    function al(TT, kT) {
      return function(cT, lT) {
        const MT = cT.constructor;
        if (!TT) throw new Error(`${MT.name}: @type() reference provided for "${lT}" is undefined. Make sure you don't have any circular dependencies.`);
        TT = gk(TT, `${MT.name}.${lT}`), Lk.register(MT);
        const KT = Object.getPrototypeOf(MT)[Symbol.metadata],
          OT = nk.initialize(MT);
        let yT = OT[lT];
        if (void 0 !== OT[yT]) {
          if (OT[yT].deprecated) return;
          if (void 0 !== OT[yT].type) {
            const TT = new Error(`@colyseus/schema: Duplicate '${lT}' definition on '${MT.name}'.\nCheck @type() annotation`);
            throw new Error(`${TT.message} ${TT.stack.split("\n")[4].trim()}`)
          }
        } else yT = OT[mT] ?? (KT && KT[mT]) ?? -1, yT++;
        if (kT && kT.manual) nk.addField(OT, yT, lT, TT, {
          enumerable: !0,
          configurable: !0,
          writable: !0
        });
        else {
          const {
            complexTypeKlass: kT,
            childType: cT
          } = Rk(TT);
          nk.addField(OT, yT, lT, TT, rl(lT, yT, cT, kT))
        }
        OT[rT][lT] && Object.defineProperty(cT, lT, OT[rT][lT]), ("string" === typeof TT || Zk(TT)) && (OT[wT] || Object.defineProperty(OT, wT, {
          value: [],
          enumerable: !1,
          configurable: !0,
          writable: !0
        }), OT[wT][yT] = "string" === typeof TT ? kk[TT] : dk(TT.quantized))
      }
    }
    const Fl = {
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

    function rl(TT, kT, cT, lT) {
      let KT;
      return KT = lT ? function(TT, kT, cT, lT) {
        const KT = lT.constructor === ll,
          OT = lT.constructor === Kl;
        return function(TT) {
          const lT = this[aT],
            yT = lT[kT];
          if (TT !== yT) {
            if (void 0 !== TT && null !== TT) {
              if (!KT || TT instanceof ll)
                if (!OT || TT instanceof Kl) TT[hT] = cT;
                else {
                  const kT = new Kl;
                  if (kT[hT] = cT, TT instanceof Map) TT.forEach(((TT, cT) => kT.set(cT, TT)));
                  else
                    for (const cT in TT) kT.set(cT, TT[cT]);
                  TT = kT
                }
              else {
                const kT = new ll;
                kT[hT] = cT, kT.push(...TT), TT = kT
              }
              const lT = this[tT],
                xT = this.constructor;
              void 0 !== yT && null !== yT && yT[tT] ? (lT.root?.remove(yT[tT]), xT[fT](lT, kT, MT.DELETE_AND_ADD)) : xT[fT](lT, kT, MT.ADD), TT[tT]?.setParent(this, lT.root, kT)
            } else void 0 !== yT && null !== yT && this[tT].delete(kT);
            lT[kT] = TT
          }
        }
      }(0, kT, cT, lT) : "string" === typeof cT ? function(TT, kT, cT) {
        const lT = Fl[cT],
          KT = "string" === cT,
          OT = "boolean" === cT;
        return function(cT) {
          const yT = this[aT],
            xT = yT[kT];
          if (cT !== xT) {
            if (void 0 !== cT && null !== cT) {
              if (!OT && void 0 !== lT && typeof cT !== lT && (!KT || null !== cT)) {
                const kT = cT && cT.constructor ? ` (${cT.constructor.name})` : "";
                throw new sc(`a '${lT}' was expected, but '${JSON.stringify(cT)}'${kT} was provided in ${this.constructor.name}#${TT}`)
              }
              this.constructor[fT](this[tT], kT, MT.ADD)
            } else void 0 !== xT && null !== xT && this[tT].delete(kT);
            yT[kT] = cT
          }
        }
      }(TT, kT, cT) : Zk(cT) ? function(TT, kT, cT) {
        return function(lT) {
          const KT = this[aT],
            OT = KT[kT];
          if (void 0 !== lT && null !== lT) {
            if ("number" !== typeof lT) throw new sc(`a 'number' was expected, but '${JSON.stringify(lT)}' was provided in ${this.constructor.name}#${TT}`);
            if ((lT = Xk(cT, uk(cT, lT))) === OT) return;
            this.constructor[fT](this[tT], kT, MT.ADD)
          } else {
            if (lT === OT) return;
            void 0 !== OT && null !== OT && this[tT].delete(kT)
          }
          KT[kT] = lT
        }
      }(TT, kT, cT.quantized) : function(TT, kT, cT) {
        return function(lT) {
          const KT = this[aT],
            OT = KT[kT];
          if (lT !== OT) {
            if (void 0 !== lT && null !== lT) {
              Tl(lT, cT, this, TT);
              const KT = this[tT],
                yT = this.constructor;
              void 0 !== OT && null !== OT && OT[tT] ? (KT.root?.remove(OT[tT]), yT[fT](KT, kT, MT.DELETE_AND_ADD)) : yT[fT](KT, kT, MT.ADD), lT[tT]?.setParent(this, KT.root, kT)
            } else void 0 !== OT && null !== OT && this[tT].delete(kT);
            KT[kT] = lT
          }
        }
      }(TT, kT, cT), {
        get: function() {
          return this[aT][kT]
        },
        set: KT,
        enumerable: !0,
        configurable: !0
      }
    }

    function Pl() {
      let TT = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
      return function(kT, cT) {
        const lT = nk.initialize(kT.constructor);
        nk.setDeprecated(lT, cT), TT && (lT[rT] ??= {}, lT[rT][cT] = {
          get: function() {
            throw new Error(`${cT} is deprecated.`)
          },
          set: function(TT) {},
          enumerable: !1,
          configurable: !0
        }, Object.defineProperty(kT, cT, lT[rT][cT]))
      }
    }
    let wl = !1;

    function ml(TT, kT, cT) {
      wl || (wl = !0, console.warn("@colyseus/schema: defineTypes() is deprecated and will be removed in a future release. Use schema() with t.* field builders instead \u2192 https://docs.colyseus.io/state/schema"));
      for (let lT in kT) al(kT[lT], cT)(TT.prototype, lT);
      return TT
    }

    function bl(TT, kT) {
      let cT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Jl;
      if (null == TT || "object" !== typeof TT) throw new Error(`schema(): first argument must be a fields object (got ${typeof TT}).`);
      const lT = {},
        MT = {},
        KT = {},
        OT = {},
        yT = (TT, kT) => {
          if (kT.hasDefault)((TT, kT) => {
            "function" === typeof kT ? OT[TT] = kT : kT && "function" === typeof kT.clone ? OT[TT] = () => kT.clone() : KT[TT] = kT
          })(TT, kT.default);
          else if (!kT.optional) {
            const cT = function(TT) {
              if (TT && "object" === typeof TT) {
                if (void 0 !== TT.array) return () => new ll;
                if (void 0 !== TT.map) return () => new Kl;
                if (void 0 !== TT.set) return () => new yl;
                if (void 0 !== TT.collection) return () => new Ol;
                if (void 0 !== TT.stream) return () => new fl
              } else if ("function" === typeof TT && Jl.is(TT) && (!TT.prototype.initialize || 0 === TT.prototype.initialize.length)) return () => new TT
            }(kT.type);
            cT && (OT[TT] = cT)
          }
        },
        fT = {},
        xT = [],
        IT = [],
        AT = {},
        CT = [],
        jT = [],
        vT = {},
        tT = [];
      for (const aT in TT) {
        const cT = TT[aT],
          KT = `schema(${kT?`'${kT}'`:""}): field '${aT}'`;
        if (Il(cT)) {
          const TT = cT.toDefinition();
          if (TT.noSync) {
            if (void 0 !== TT.view || TT.unreliable || TT.patchOnly || TT.fullStateOnly || TT.stream) throw new Error(`${KT} uses .noSync() together with a sync-only modifier (.view/.unreliable/.patchOnly/.fullStateOnly/.stream). A local-only field cannot be synchronized.`);
            yT(aT, TT);
            continue
          }
          if (TT.patchOnly && TT.fullStateOnly) throw new Error(`${KT} uses .patchOnly() together with .fullStateOnly(). Those are the only two delivery channels, so the field would never reach a client \u2014 use .noSync() if that is intended.`);
          const kT = gk(TT.type, KT);
          if ("function" === typeof kT && !Jl.is(kT)) throw new Error(`${KT} is a synced ref to non-Schema class '${kT.name||"(anonymous)"}' \u2014 use .noSync(), or Metadata.setFields().`);
          lT[aT] = kT, void 0 !== TT.view && (fT[aT] = TT.view), TT.unreliable && xT.push(aT), TT.patchOnly && IT.push(aT), TT.deprecated && (AT[aT] = TT.deprecatedThrows), TT.fullStateOnly && CT.push(aT), TT.stream && jT.push(aT), void 0 !== TT.streamPriority && (vT[aT] = TT.streamPriority), TT.optional && tT.push(aT), yT(aT, TT)
        } else {
          if ("function" !== typeof cT) throw new Error(`${KT} must be a t.* builder, Schema subclass, or method (got ${typeof cT}).`);
          Jl.is(cT) ? (lT[aT] = cT, cT.prototype.initialize && 0 !== cT.prototype.initialize.length || (OT[aT] = () => new cT)) : MT[aT] = cT
        }
      }
      const hT = TT => {
          for (const kT in KT) TT[kT] = KT[kT];
          for (const kT in OT) TT[kT] = OT[kT]()
        },
        NT = () => {
          const TT = {};
          return hT(TT), TT
        },
        QT = "function" === typeof MT.initialize,
        ST = MT.initialize ?? cT._initialize,
        DT = class extends cT {
          constructor() {
            for (var TT = arguments.length, kT = new Array(TT), cT = 0; cT < TT; cT++) kT[cT] = arguments[cT];
            const MT = kT[0];
            void 0 === MT ? (super(), hT(this)) : super(Object.assign(NT(), QT ? (TT => {
              const kT = Object.keys(lT),
                cT = {};
              for (const lT in TT) kT.includes(lT) || (cT[lT] = TT[lT]);
              return cT
            })(MT) : MT)), ST && new.target === DT && ST.apply(this, kT)
          }
        };
      kT && Object.defineProperty(DT, "name", {
        value: kT
      }), nk.setFields(DT, lT), DT._getDefaultValues = NT, DT._initialize = ST, Object.assign(DT.prototype, MT);
      for (const aT in fT) Nl(fT[aT])(DT.prototype, aT);
      for (const aT of xT) Ql(DT.prototype, aT);
      for (const aT of IT) Sl(DT.prototype, aT);
      for (const aT in AT) Pl(AT[aT])(DT.prototype, aT);
      if (CT.length > 0 || jT.length > 0) {
        const TT = DT[Symbol.metadata];
        for (const kT of CT) nk.setFullStateOnly(TT, kT);
        for (const kT of jT) nk.setStream(TT, kT);
        for (const kT in vT) nk.setStreamPriority(TT, kT, vT[kT])
      }
      if (tT.length > 0) {
        const TT = DT[Symbol.metadata];
        for (const kT of tT) TT[TT[kT]].optional = !0
      }
      return DT.extend = (TT, kT) => bl(TT, kT, DT), DT
    }

    function zl(TT) {
      const kT = TT[tT].root,
        cT = {
          ops: {},
          refs: []
        };
      let lT = kT.changes.next;
      for (; lT;) {
        const TT = lT.changeTree;
        void 0 !== TT ? (cT.refs.push(`refId#${TT.ref[yT]}`), TT.forEach(((TT, kT) => {
          if (TT < 0 || !kT) return;
          const lT = MT[kT];
          cT.ops[lT] || (cT.ops[lT] = 0), cT.ops[lT]++
        })), lT = lT.next) : lT = lT.next
      }
      return cT
    }
    class Jl {
      static[xT] = Vc;
      static[IT] = pc;
      [yT];
      [aT];
      static initialize(TT) {
        Object.defineProperty(TT, tT, {
          value: new oc(TT),
          enumerable: !1,
          writable: !0
        }), TT[aT] = []
      }
      static initializeForDecoder() {
        const TT = Object.create(this.prototype);
        return ec(TT), TT[aT] = [], TT
      }
      static reset(TT) {
        const kT = TT?.[tT];
        if (void 0 === kT || "function" !== typeof kT.recycle) throw new Error("@colyseus/schema: Schema.reset() requires a tracked (encoder-side) instance.");
        if (void 0 !== kT.extraParents) throw new Error(`@colyseus/schema: cannot reset a shared instance (${TT.constructor.name}) with multiple parents.`);
        TT[ST]()
      } [ST]() {
        const TT = this.constructor[Symbol.metadata],
          kT = TT?.[bT] ?? [],
          cT = this[aT];
        for (let lT = 0; lT < kT.length; lT++) {
          const TT = cT[kT[lT]];
          TT?.[ST]?.()
        }
        this[tT].recycle(), this[yT] = void 0
      }
      static is(TT) {
        const kT = TT[Symbol.metadata];
        return "object" === typeof kT && null !== kT
      }
      static isSchema(TT) {
        return "function" === typeof TT?.assign
      }
      static[fT](TT, kT) {
        let cT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : MT.ADD;
        TT.change(kT, cT)
      }
      static[AT](TT, kT, cT) {
        const lT = TT.constructor[Symbol.metadata],
          MT = lT[kT]?.tag;
        return void 0 === cT ? void 0 === MT : void 0 === MT || (MT === tl ? cT.isChangeTreeVisible(TT[tT]) : cT.hasTagOnTree(TT[tT], MT))
      }
      constructor(TT) {
        Jl.initialize(this), TT && Jl.assignProps(this, TT)
      }
      assign(TT) {
        return Jl.assignProps(this, TT), this
      }
      static assignProps(TT, kT) {
        const cT = TT.constructor[Symbol.metadata];
        if (cT && void 0 !== cT[mT])
          for (let MT = 0; MT <= cT[mT]; MT++) {
            const lT = cT[MT];
            if (!lT) continue;
            const KT = kT[lT.name];
            void 0 !== KT && (TT[lT.name] = KT)
          }
        const lT = Object.keys(kT);
        for (let MT = 0; MT < lT.length; MT++) {
          const KT = lT[MT];
          cT && void 0 !== cT[KT] || (TT[KT] = kT[KT])
        }
      }
      restore(TT) {
        const kT = this.constructor[Symbol.metadata];
        for (const cT in kT) {
          const lT = kT[cT],
            MT = lT.name,
            KT = lT.type,
            OT = TT[MT];
          if (void 0 !== OT && null !== OT)
            if ("string" === typeof KT) this[MT] = OT;
            else if (Jl.is(KT)) {
            const TT = new KT;
            TT.restore(OT), this[MT] = TT
          } else if ("object" === typeof KT) {
            const TT = Object.keys(KT)[0],
              kT = KT[TT];
            if ("map" === TT) {
              const TT = this[MT];
              for (const cT in OT)
                if (Jl.is(kT)) {
                  const lT = new kT;
                  lT.restore(OT[cT]), TT.set(cT, lT)
                } else TT.set(cT, OT[cT])
            } else if ("array" === TT) {
              const TT = this[MT];
              for (let cT = 0; cT < OT.length; cT++)
                if (Jl.is(kT)) {
                  const lT = new kT;
                  lT.restore(OT[cT]), TT.push(lT)
                } else TT.push(OT[cT])
            }
          }
        }
        return this
      }
      setDirty(TT, kT) {
        const cT = this.constructor[Symbol.metadata];
        this[tT].change(cT[cT[TT]].index, kT)
      }
      pauseTracking() {
        this[tT].pause()
      }
      resumeTracking() {
        this[tT].resume()
      }
      untracked(TT) {
        return this[tT].untracked(TT)
      }
      get isTrackingPaused() {
        return this[tT].paused
      }
      clone() {
        const TT = Object.create(this.constructor.prototype);
        Jl.initialize(TT);
        const kT = this.constructor[Symbol.metadata];
        for (const cT in kT) {
          const lT = kT[cT].name;
          "object" === typeof this[lT] && "function" === typeof this[lT]?.clone ? TT[lT] = this[lT].clone() : TT[lT] = this[lT]
        }
        return TT
      }
      toJSON() {
        const TT = {},
          kT = this.constructor[Symbol.metadata];
        for (const cT in kT) {
          const lT = kT[cT],
            MT = lT.name;
          lT.deprecated || null === this[MT] || "undefined" === typeof this[MT] || (TT[MT] = "function" === typeof this[MT].toJSON ? this[MT].toJSON() : this[MT])
        }
        return TT
      }
      discardAllChanges() {
        this[tT].discardAll()
      } [CT](TT) {
        return this[this.constructor[Symbol.metadata][TT].name]
      } [jT](TT) {
        this[this.constructor[Symbol.metadata][TT].name] = void 0
      }
      static debugRefIds(TT) {
        let kT = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          cT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          lT = arguments.length > 3 ? arguments[3] : void 0,
          MT = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "";
        const KT = kT ? ` - ${JSON.stringify(TT.toJSON())}` : "",
          OT = TT[tT],
          fT = TT[yT],
          xT = lT ? lT.root.refCount[fT] : OT.refCount,
          IT = xT > 1 ? ` [\xd7${xT}]` : "";
        let AT = `${function(TT){return new Array(TT).fill(0).map(((kT,cT)=>cT===TT-1?"\u2514\u2500 ":"   ")).join("")}(cT)}${MT}${TT.constructor.name} (refId: ${fT})${IT}${KT}\n`;
        return OT.forEachChild(((MT, KT) => {
          let OT = KT;
          "number" === typeof KT && TT.$indexes && (OT = TT.$indexes.get(KT) ?? KT);
          const yT = void 0 !== TT.forEach && void 0 !== OT ? `["${OT}"]: ` : "";
          AT += this.debugRefIds(MT.ref, kT, cT + 1, lT, yT)
        })), AT
      }
      static debugRefIdEncodingOrder(TT) {
        let kT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "allChanges";
        const cT = [],
          lT = TT[tT];
        if ("changes" === kT) {
          let TT = lT.root.changes?.next;
          for (; TT;) TT.changeTree && cT.push(TT.changeTree.ref[yT]), TT = TT.next;
          return cT
        }
        const MT = "allFilteredChanges" === kT,
          KT = new Set,
          OT = TT => {
            KT.has(TT) || (KT.add(TT), TT.isFiltered === MT && cT.push(TT.ref[yT]), TT.forEachChild(((TT, kT) => OT(TT))))
          };
        return OT(lT), cT
      }
      static debugRefIdsFromDecoder(TT) {
        return this.debugRefIds(TT.state, !1, 0, TT)
      }
      static debugChanges(TT) {
        let kT = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        const cT = TT[tT],
          lT = kT ? "allChanges" : "changes";
        let KT = `${TT.constructor.name} (${TT[yT]}) -> .${lT}:\n`;
        return kT ? cT.forEachLive((TT => {
          KT += `- [${TT}]: ADD (${JSON.stringify(cT.getValue(Number(TT),!0))})\n`
        })) : cT.forEach(((TT, kT) => {
          TT < 0 || !kT || (KT += `- [${TT}]: ${MT[kT]} (${JSON.stringify(cT.getValue(Number(TT),!1))})\n`)
        })), KT
      }
    }
    KT(Jl);
    const ol = {
      value: 0,
      enumerable: !1,
      writable: !0
    };
    class Hl {
      types;
      nextUniqueId = 0;
      changeTrees = {};
      get refCount() {
        const TT = {};
        for (const kT in this.changeTrees) TT[kT] = this.changeTrees[kT].refCount;
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
        this.types.hasFilters && (TT.flags & zc || (TT.flags |= zc, this.pendingFilterRefresh.push(TT)))
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
        const kT = TT.id;
        for (const cT of this.streamTrees) cT._dropView(kT)
      }
      forEachActiveView(TT) {
        for (const [kT, cT] of this.activeViews) {
          const lT = cT.deref();
          if (void 0 !== lT) TT(lT);
          else {
            this.activeViews.delete(kT);
            for (const TT of this.streamTrees) TT._dropView(kT)
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
        let kT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        this.types = TT, this.nextUniqueId = kT
      }
      add(TT) {
        const kT = TT.ref;
        void 0 === kT[yT] && (ol.value = this.nextUniqueId++, Object.defineProperty(kT, yT, ol));
        const cT = kT[yT],
          lT = void 0 === this.changeTrees[cT];
        lT && (this.changeTrees[cT] = TT), TT.needsRestage && (TT.needsRestage = !1, TT.forEachLiveWithCtx(TT, lc));
        const MT = lT ? 0 : TT.refCount;
        return TT.refCount = MT + 1, MT > 0 && this.enqueueFilterRefresh(TT), lT
      }
      remove(TT) {
        const kT = TT.refCount - 1;
        if (kT <= 0) {
          if (TT.root = void 0, delete this.changeTrees[TT.ref[yT]], TT.isStreamCollection) {
            const kT = TT.ref;
            kT._unregister?.(), this.unregisterStream(kT)
          }
          this.removeFromQueue(TT), this.removeFromUnreliableQueue(TT), TT.refCount = 0, TT.needsRestage = !0, TT.forEachChild(((kT, cT) => {
            kT.removeParent(TT.ref) && (void 0 === kT.parentRef || kT.refCount > 0 ? this.remove(kT) : this.moveNextToParent(kT))
          }))
        } else TT.refCount = kT, this.enqueueFilterRefresh(TT), this.recursivelyMoveNextToParent(TT);
        return kT
      }
      recursivelyMoveNextToParent(TT) {
        this.moveNextToParent(TT), TT.forEachChild(((TT, kT) => this.recursivelyMoveNextToParent(TT)))
      }
      moveNextToParent(TT) {
        TT.changesNode && this._moveNextToParentInList(this.changes, TT, TT.changesNode, "changesNode"), TT.unreliableChangesNode && this._moveNextToParentInList(this.unreliableChanges, TT, TT.unreliableChangesNode, "unreliableChangesNode")
      }
      _moveNextToParentInList(TT, kT, cT, lT) {
        const MT = kT.parent;
        if (!MT || !MT[tT]) return;
        const KT = MT[tT][lT];
        KT && KT !== cT && (cT.position > KT.position || (cT.prev ? cT.prev.next = cT.next : TT.next = cT.next, cT.next ? cT.next.prev = cT.prev : TT.tail = cT.prev, cT.prev = TT.tail, cT.next = void 0, TT.tail.next = cT, TT.tail = cT, cT.position = TT.nextPosition++))
      }
      enqueueChangeTree(TT) {
        (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : TT.changesNode) || (TT.changesNode = this._appendToList(this.changes, TT))
      }
      enqueueUnreliable(TT) {
        (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : TT.unreliableChangesNode) || (TT.unreliableChangesNode = this._appendToList(this.unreliableChanges, TT))
      }
      _appendToList(TT, kT) {
        const cT = this._nodePool;
        let lT;
        return cT.length > 0 ? (lT = cT.pop(), lT.changeTree = kT, lT.next = void 0, lT.prev = void 0) : lT = {
          changeTree: kT,
          next: void 0,
          prev: void 0,
          position: 0
        }, TT.next ? (lT.prev = TT.tail, TT.tail.next = lT, TT.tail = lT) : (TT.nextPosition = 0, TT.next = lT, TT.tail = lT), lT.position = TT.nextPosition++, lT
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
      _removeNode(TT, kT, cT, lT) {
        return !(!cT || cT.changeTree !== kT) && (cT.prev ? cT.prev.next = cT.next : TT.next = cT.next, cT.next ? cT.next.prev = cT.prev : TT.tail = cT.prev, kT[lT] = void 0, this.releaseNode(cT), !0)
      }
    }

    function el(TT, kT) {
      if (-1 === kT || kT >= TT.length) return !1;
      const cT = TT.length - 1;
      for (let lT = kT; lT < cT; lT++) TT[lT] = TT[lT + 1];
      return TT.length = cT, !0
    }

    function Gl(TT, kT, cT) {
      const lT = ~cT,
        MT = TT.changeTrees;
      for (const KT in MT) {
        const TT = MT[KT],
          cT = TT.visibleViews;
        void 0 !== cT && kT < cT.length && (cT[kT] &= lT);
        const OT = TT.subscribedViews;
        void 0 !== OT && kT < OT.length && (OT[kT] &= lT);
        const yT = TT.tagViews;
        void 0 !== yT && yT.forEach((TT => {
          kT < TT.length && (TT[kT] &= lT)
        }))
      }
    }
    const Vl = new FinalizationRegistry((TT => {
      let {
        root: kT,
        id: cT,
        slot: lT,
        bit: MT
      } = TT;
      Gl(kT, lT, MT), kT.activeViews.delete(cT);
      for (const KT of kT.streamTrees) KT._dropView(cT);
      kT.releaseViewId(cT)
    }));

    function El(TT) {
      if (void 0 === TT) return "undefined";
      if (null === TT) return "null";
      const kT = typeof TT;
      return "string" === kT ? JSON.stringify(TT.length > 30 ? `${TT.slice(0,30)}\u2026` : TT) : "object" !== kT && "function" !== kT ? `${kT} ${String(TT)}` : Array.isArray(TT) ? `Array(${TT.length})` : TT.constructor?.name ?? "Object"
    }
    class Zl {
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
        void 0 === this._root && (this._root = TT, this.id = TT.acquireViewId(), this._slot = this.id >> 5, this._bit = 1 << (31 & this.id), TT.registerView(this), Vl.register(this, {
          root: TT,
          id: this.id,
          slot: this._slot,
          bit: this._bit
        }, this))
      }
      dispose() {
        void 0 !== this._root && (this._root.unregisterView(this), Gl(this._root, this._slot, this._bit), this._root.releaseViewId(this.id), Vl.unregister(this), this._root = void 0, this.id = -1)
      }
      isVisible(TT) {
        const kT = TT.visibleViews,
          cT = this._slot;
        return void 0 !== kT && cT < kT.length && 0 !== (kT[cT] & this._bit)
      }
      markVisible(TT) {
        const kT = this._slot;
        let cT = TT.visibleViews;
        for (void 0 === cT && (cT = TT.visibleViews = []); cT.length <= kT;) cT.push(0);
        cT[kT] |= this._bit
      }
      unmarkVisible(TT) {
        const kT = TT.visibleViews;
        if (void 0 === kT) return;
        const cT = this._slot;
        cT < kT.length && (kT[cT] &= ~this._bit)
      }
      isSubscribed(TT) {
        const kT = TT.subscribedViews,
          cT = this._slot;
        return void 0 !== kT && cT < kT.length && 0 !== (kT[cT] & this._bit)
      }
      _setSubscribed(TT) {
        const kT = this._slot;
        let cT = TT.subscribedViews;
        for (void 0 === cT && (cT = TT.subscribedViews = []); cT.length <= kT;) cT.push(0);
        cT[kT] |= this._bit
      }
      _clearSubscribed(TT) {
        const kT = TT.subscribedViews;
        if (void 0 === kT) return;
        const cT = this._slot;
        cT < kT.length && (kT[cT] &= ~this._bit)
      }
      hasTagOnTree(TT, kT) {
        const cT = TT.tagViews;
        if (void 0 === cT) return !1;
        const lT = this._slot,
          MT = this._bit;
        for (let KT = kT; 0 !== KT; KT &= KT - 1) {
          const TT = cT.get(KT & -KT);
          if (void 0 !== TT && lT < TT.length && 0 !== (TT[lT] & MT)) return !0
        }
        return !1
      }
      addTag(TT, kT) {
        if (kT === tl) return;
        let cT = TT.tagViews;
        void 0 === cT && (cT = TT.tagViews = new Map);
        const lT = this._slot,
          MT = this._bit;
        for (let KT = kT; KT > 0; KT &= KT - 1) {
          const TT = KT & -KT;
          let kT = cT.get(TT);
          for (void 0 === kT && (kT = [], cT.set(TT, kT)); kT.length <= lT;) kT.push(0);
          kT[lT] |= MT
        }
      }
      removeTag(TT, kT) {
        if (kT === tl) return;
        const cT = TT.tagViews;
        if (void 0 === cT) return;
        const lT = this._slot,
          MT = ~this._bit;
        for (let KT = kT; KT > 0; KT &= KT - 1) {
          const TT = cT.get(KT & -KT);
          void 0 !== TT && lT < TT.length && (TT[lT] &= MT)
        }
      }
      removeAllTagsOnTree(TT) {
        const kT = TT.tagViews;
        if (void 0 === kT) return;
        const cT = this._slot,
          lT = ~this._bit;
        kT.forEach((TT => {
          cT < TT.length && (TT[cT] &= lT)
        }))
      }
      add(TT) {
        let kT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : tl,
          cT = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        return this._add(TT, kT, cT, !1)
      }
      _addImmediate(TT) {
        let kT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : tl;
        this._add(TT, kT, !0, !0)
      }
      _add(TT, kT, cT, lT) {
        const KT = TT?.[tT];
        if (!KT) return console.warn(`StateView#add(): expected a Schema instance or collection, received ${El(TT)}`), !1;
        const OT = KT.parent;
        if (!OT && 0 !== TT[yT]) throw new Error(`Cannot add a detached instance to the StateView. Make sure to assign the "${KT.ref.constructor.name}" instance to the state before calling view.add()`);
        void 0 === this._root && void 0 !== KT.root && this._bindRoot(KT.root);
        const fT = OT?.[tT];
        if (!lT && fT?.isStreamCollection) return ek(OT, this.id, KT.parentIndex), !0;
        const xT = TT.constructor[Symbol.metadata],
          IT = this.isVisible(KT);
        if (!this.iterable || !cT || IT && -1 !== this.items.indexOf(TT) || this.items.push(TT), this.markVisible(KT), cT && OT && this.addParentOf(KT, kT), !lT && KT.isStreamCollection) return !0;
        if (kT === tl && KT.isNew) return this._markSubtreeVisible(KT, kT), !1;
        let AT = this.changes.get(TT[yT]);
        void 0 === AT && (AT = new Map, this.changes.set(TT[yT], AT));
        let CT = !1;
        const jT = KT.encDescriptor.tags;
        if (KT.forEachChild(((TT, cT) => {
            const lT = jT[cT];
            if (void 0 !== lT) {
              if (!(lT === tl || kT !== tl && 0 !== (lT & kT))) return
            }
            this.add(TT.ref, kT, !1) && (CT = !0)
          })), kT !== tl) {
          this.addTag(KT, kT);
          const TT = xT?.[JT];
          if (void 0 !== TT)
            for (let cT = kT; cT > 0; cT &= cT - 1) TT[cT & -cT]?.forEach((TT => {
              KT.getChange(TT) !== MT.DELETE && AT.set(TT, MT.ADD)
            }))
        }
        if ((kT === tl || !IT) && (!KT.isNew || CT))
          if (KT.isArray && "string" !== typeof KT.refTarget[hT]) KT.refTarget.items.length > 0 && (AT.set(-1, MT.ADD), CT = !0);
          else {
            const TT = KT.encDescriptor.tags;
            KT.forEachLive((cT => {
              const lT = TT[cT];
              (void 0 === lT || lT === tl || kT !== tl && 0 !== (lT & kT)) && (AT.set(cT, MT.ADD), CT = !0)
            }))
          } return CT
      }
      _markSubtreeVisible(TT, kT) {
        const cT = TT.encDescriptor.tags;
        TT.forEachChild(((TT, lT) => {
          const MT = cT[lT];
          if (void 0 !== MT) {
            if (!(MT === tl || kT !== tl && 0 !== (MT & kT))) return
          }
          TT.isNew ? (this.markVisible(TT), this._markSubtreeVisible(TT, kT)) : this._add(TT.ref, kT, !1, !1)
        }))
      }
      addParentOf(TT, kT) {
        const cT = TT.parent[tT],
          lT = TT.parentIndex;
        this.isVisible(cT) || this.markVisible(cT);
        const KT = cT.parent?.[tT];
        if (KT && this.addParentOf(cT, kT), cT.hasFilteredFields && cT.getChange(lT) !== MT.DELETE) {
          let KT = this.changes.get(cT.ref[yT]);
          void 0 === KT && (KT = new Map, this.changes.set(cT.ref[yT], KT));
          const OT = cT.encDescriptor.tags[lT];
          void 0 !== OT && OT !== tl && 0 !== (OT & kT) && this.addTag(cT, kT), KT.set(cT.isArray ? TT : lT, MT.ADD)
        }
      }
      _touchAncestorsOf(TT) {
        let kT = TT.parent?.[tT];
        if (void 0 === kT) return;
        const cT = [];
        for (; void 0 !== kT;) {
          if (kT.hasFilteredFields) {
            const TT = kT.ref[yT];
            if (this.changes.has(TT)) break;
            cT.push(kT)
          }
          kT = kT.parent?.[tT]
        }
        for (let lT = cT.length - 1; lT >= 0; lT--) this.changes.set(cT[lT].ref[yT], new Map)
      }
      remove(TT) {
        let kT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : tl,
          cT = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        const lT = TT?.[tT];
        if (!lT) return console.warn(`StateView#remove(): expected a Schema instance or collection, received ${El(TT)}`), this;
        const KT = lT.parent?.[tT];
        if (KT?.isStreamCollection) return this.unmarkVisible(lT), this.iterable && !cT && el(this.items, this.items.indexOf(TT)),
          function(TT, kT, cT, lT, KT) {
            const OT = TT._stream;
            if (void 0 === OT) return !1;
            const yT = OT.pendingByView.get(kT);
            if (yT?.has(lT)) return yT.delete(lT), !1;
            const fT = OT.sentByView.get(kT);
            if (fT?.has(lT)) {
              fT.delete(lT);
              let TT = KT.get(cT);
              return void 0 === TT && (TT = new Map, KT.set(cT, TT)), TT.set(lT, MT.DELETE), !0
            }
          }(lT.parent, this.id, lT.parent[yT], lT.parentIndex, this.changes), this._recursiveDeleteVisibleChangeTree(lT), this;
        if (lT.isStreamCollection) {
          this.unmarkVisible(lT), this.iterable && !cT && el(this.items, this.items.indexOf(TT));
          const kT = lT.ref,
            KT = kT._stream;
          if (void 0 !== KT) {
            KT.pendingByView.get(this.id)?.clear();
            const TT = KT.sentByView.get(this.id);
            if (void 0 !== TT && TT.size > 0) {
              const cT = kT[yT];
              let lT = this.changes.get(cT);
              void 0 === lT && (lT = new Map, this.changes.set(cT, lT));
              for (const kT of TT) lT.set(kT, MT.DELETE);
              TT.clear()
            }
          }
          return this
        }
        this.unmarkVisible(lT), this.iterable && !cT && el(this.items, this.items.indexOf(TT));
        const OT = lT.ref,
          fT = OT.constructor[Symbol.metadata],
          xT = OT[yT];
        this._touchAncestorsOf(lT);
        let IT = this.changes.get(xT);
        if (void 0 === IT && (IT = new Map, this.changes.set(xT, IT)), kT === tl) {
          const TT = lT.parent;
          if (TT && !nk.isValidInstance(TT) && lT.isFiltered) {
            const kT = KT.isArray ? lT : lT.parentIndex,
              cT = TT[yT];
            let OT = this.changes.get(cT);
            void 0 === OT ? (OT = new Map, this.changes.set(cT, OT)) : OT.get(kT) === MT.ADD && this._dropPendingEntries(lT), OT.set(kT, MT.DELETE), this._recursiveDeleteVisibleChangeTree(lT)
          } else fT?.[zT]?.forEach((TT => this._removeViewField(lT, IT, TT)))
        } else {
          const TT = fT?.[JT];
          if (void 0 !== TT)
            for (let cT = kT; cT > 0; cT &= cT - 1) TT[cT & -cT]?.forEach((TT => this._removeViewField(lT, IT, TT)))
        }
        return void 0 === kT ? this.removeAllTagsOnTree(lT) : this.removeTag(lT, kT), this
      }
      has(TT) {
        return this.isVisible(TT[tT])
      }
      hasTag(TT) {
        let kT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : tl;
        return this.hasTagOnTree(TT[tT], kT)
      }
      subscribe(TT, kT) {
        const cT = TT?.[tT];
        if (!cT) return console.warn(`StateView#subscribe(): expected a Schema collection, received ${El(TT)}`), this;
        if (void 0 === this._root && void 0 !== cT.root && this._bindRoot(cT.root), void 0 !== kT)
          if (cT.isStreamCollection) {
            const cT = mk(TT);
            null === kT ? cT.priorityByView?.delete(this.id) : (cT.priorityByView ??= new Map).set(this.id, kT)
          } else {
            const kT = TT?.constructor?.name ?? "collection",
              lT = cT.parent;
            if (void 0 === lT) console.warn(`StateView#subscribe(): \`priority\` ignored \u2014 this ${kT} is not attached to a state yet, so it cannot be identified as a stream. Subscribe after assigning it to the state.`);
            else {
              const TT = lT?.constructor?.[Symbol.metadata]?.[cT.parentIndex]?.name,
                MT = TT ? `${lT.constructor.name}#${TT}` : kT;
              console.warn(`StateView#subscribe(): \`priority\` ignored \u2014 ${MT} is a ${kT}, not a streaming collection. Declare the field with .stream() (e.g. t.map(X).stream()) or use t.stream(X) to enable priority batching.`)
            }
          } if (this.isSubscribed(cT)) return this;
        const lT = void 0 !== cT.parent && !this.isVisible(cT);
        if (lT ? (this.addParentOf(cT, tl), this._add(TT, tl, !1, !1)) : this.markVisible(cT), this._setSubscribed(cT), cT.isStreamCollection) {
          const kT = TT;
          cT.forEachChild(((TT, cT) => {
            ek(kT, this.id, cT)
          }))
        } else lT || cT.forEachChild((TT => {
          this.markVisible(TT)
        }));
        return this
      }
      unsubscribe(TT) {
        const kT = TT?.[tT];
        if (!kT) return console.warn(`StateView#unsubscribe(): expected a Schema collection, received ${El(TT)}`), this;
        if (!this.isSubscribed(kT)) return this;
        this._clearSubscribed(kT);
        const cT = kT.ref[yT];
        if (kT.isStreamCollection) {
          const kT = TT._stream;
          if (void 0 !== kT) {
            kT.pendingByView.get(this.id)?.clear();
            const TT = kT.sentByView.get(this.id);
            if (void 0 !== TT && TT.size > 0) {
              let kT = this.changes.get(cT);
              void 0 === kT && (kT = new Map, this.changes.set(cT, kT));
              for (const cT of TT) kT.set(cT, MT.DELETE);
              TT.clear()
            }
          }
        } else {
          const TT = kT.isArray;
          let lT = this.changes.get(cT);
          kT.forEachChild(((kT, KT) => {
            void 0 === lT && (lT = new Map, this.changes.set(cT, lT)), lT.set(TT ? kT : KT, MT.DELETE), this.unmarkVisible(kT)
          }))
        }
        return this.unmarkVisible(kT), this
      }
      clear() {
        if (!this.iterable) throw new Error("StateView#clear() is only available for iterable StateView's. Use StateView(iterable: true) constructor.");
        for (let TT = 0, kT = this.items.length; TT < kT; TT++) this.remove(this.items[TT], tl, !0);
        this.items.length = 0
      }
      isChangeTreeVisible(TT) {
        let kT = this.isVisible(TT);
        if (!kT && TT.isVisibilitySharedWithParent)
          if (this.isVisible(TT.parent[tT])) this.markVisible(TT), kT = !0;
          else
            for (let cT = TT.extraParents; void 0 !== cT; cT = cT.next) {
              const lT = cT.ref[tT];
              if (lT.isFiltered && this.isVisible(lT)) {
                this.markVisible(TT), kT = !0;
                break
              }
            }
        return kT
      }
      _recursiveDeleteVisibleChangeTree(TT) {
        TT.forEachChild((TT => {
          this.unmarkVisible(TT), this._recursiveDeleteVisibleChangeTree(TT)
        }))
      }
      _dropPendingEntries(TT) {
        this.changes.delete(TT.ref[yT]), TT.forEachChild((TT => this._dropPendingEntries(TT)))
      }
      _removeViewField(TT, kT, cT) {
        const lT = kT.get(cT) === MT.ADD;
        kT.set(cT, MT.DELETE);
        const KT = TT.ref[TT.encDescriptor.names[cT]],
          OT = KT?.[tT];
        OT && (this.unmarkVisible(OT), this._recursiveDeleteVisibleChangeTree(OT), lT && this._dropPendingEntries(OT))
      }
    }

    function ul(TT) {
      TT.structSwitchEmitted || (TT.shouldEmitSwitch && (TT.buffer[TT.it.offset++] = 255, kk.number(TT.buffer, TT.ref[yT], TT.it)), TT.structSwitchEmitted = !0)
    }

    function Xl(TT, kT) {
      Rl(TT, kT, MT.ADD)
    }

    function dl(TT, kT) {
      if (kT._fullSyncGen === TT.gen) return;
      kT._fullSyncGen = TT.gen;
      if (!TT.hasView || TT.view.isChangeTreeVisible(kT)) {
        const cT = kT.encDescriptor;
        TT.changeTree = kT, TT.ref = kT.ref, TT.encoder = cT.encoder, TT.filter = cT.filter, TT.metadata = cT.metadata, TT.treeIsFiltered = kT.isFiltered, TT.isSchema = cT.isSchema, TT.filterBitmask = cT.filterBitmask, TT.tags = cT.tags, TT.structSwitchEmitted = !1, TT.shouldEmitSwitch = TT.hasView || TT.it.offset > TT.initialOffset || kT !== TT.rootChangeTree, kT.isArray && kT.collDirty.size > 0 && (kT.flags |= 512), Kc(kT, TT, Xl)
      }
      Qc(kT, TT, Ll)
    }

    function Ll(TT, kT, cT) {
      dl(TT, kT)
    }

    function Rl(TT, kT, cT) {
      if (kT < 0) {
        if (TT.treeIsFiltered !== TT.emitFiltered) return;
        return ul(TT), void(TT.buffer[TT.it.offset++] = 255 & Math.abs(kT))
      }
      if ((TT.isSchema ? TT.treeIsFiltered || (kT < 32 ? 0 !== (TT.filterBitmask & 1 << kT) : void 0 !== TT.tags[kT]) : TT.treeIsFiltered) !== TT.emitFiltered) return;
      const lT = TT.isEncodeAll ? MT.ADD : cT;
      void 0 !== lT && (void 0 === TT.filter || TT.filter(TT.ref, kT, TT.view)) && (ul(TT), TT.encoder(TT.self, TT.buffer, TT.changeTree, kT, lT, TT.it, TT.isEncodeAll, TT.hasView, TT.metadata))
    }

    function gl(TT, kT) {
      const cT = new Uint8Array(TT.length + kT.length);
      return cT.set(TT, 0), cT.set(kT, TT.length), cT
    }
    class Ul {
      static BUFFER_SIZE = 16384;
      sharedBuffer = new Uint8Array(Ul.BUFFER_SIZE);
      context;
      state;
      root;
      constructor(TT, kT) {
        this.context = Lk.cache(TT.constructor), this.root = kT ?? new Hl(this.context), this.setState(TT)
      }
      setState(TT) {
        this.state = TT, this.state[tT].setRoot(this.root)
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
          kT = arguments.length > 1 ? arguments[1] : void 0,
          cT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : this.sharedBuffer,
          lT = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : TT.offset;
        return this._encodeChannel(TT, kT, cT, lT, !1)
      }
      encodeUnreliable() {
        let TT = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
            offset: 0
          },
          kT = arguments.length > 1 ? arguments[1] : void 0,
          cT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : this.sharedBuffer,
          lT = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : TT.offset;
        return this._encodeChannel(TT, kT, cT, lT, !0)
      }
      _encodeChannel(TT, kT, cT, lT, MT) {
        this.root.pendingFilterRefresh.length > 0 && yc(this.root);
        const KT = void 0 !== kT,
          OT = this.state[tT],
          yT = this._encodeCtx;
        yT.self = this, yT.buffer = cT, yT.it = TT, yT.view = kT, yT.isEncodeAll = !1, yT.hasView = KT, yT.emitFiltered = KT;
        let fT = MT ? this.root.unreliableChanges : this.root.changes;
        for (; fT = fT.next;) {
          const cT = fT.changeTree;
          if (KT && !kT.isChangeTreeVisible(cT)) continue;
          const xT = MT ? cT.unreliableRecorder : cT;
          if (!xT || !xT.has()) continue;
          const IT = cT.encDescriptor;
          yT.changeTree = cT, yT.ref = cT.ref, yT.encoder = IT.encoder, yT.filter = IT.filter, yT.metadata = IT.metadata, yT.treeIsFiltered = cT.isFiltered, yT.isSchema = IT.isSchema, yT.filterBitmask = IT.filterBitmask, yT.tags = IT.tags, yT.structSwitchEmitted = !1, yT.isRootTree = cT === OT, yT.shouldEmitSwitch = KT || TT.offset > lT || !yT.isRootTree, xT.forEachWithCtx(yT, Rl)
        }
        return MT || KT || !this._isStreamBroadcastMode || this._emitStreamBroadcast(cT, TT), TT.offset > cT.byteLength ? (cT = this._resizeBuffer(cT, TT.offset), TT.offset = lT, this._encodeChannel(TT, kT, cT, lT, MT)) : cT.subarray(0, TT.offset)
      }
      encodeFullSync(TT, kT, cT, lT) {
        let MT = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : TT.offset;
        this.root.pendingFilterRefresh.length > 0 && yc(this.root);
        const KT = void 0 !== lT,
          OT = this.state[tT],
          yT = this._encodeCtx;
        return yT.self = this, yT.buffer = kT, yT.it = TT, yT.view = lT, yT.isEncodeAll = !0, yT.hasView = KT, yT.emitFiltered = cT, yT.gen = ++this._fullSyncGen, yT.initialOffset = MT, yT.rootChangeTree = OT, dl(yT, OT), TT.offset > kT.byteLength ? (kT = this._resizeBuffer(kT, TT.offset), TT.offset = MT, this.encodeFullSync(TT, kT, cT, lT, MT)) : kT.subarray(0, TT.offset)
      }
      _resizeBuffer(TT, kT) {
        const cT = Math.ceil(kT / Ul.BUFFER_SIZE) * Ul.BUFFER_SIZE,
          lT = new Uint8Array(cT);
        return lT.set(TT), TT === this.sharedBuffer && (this.sharedBuffer = lT), lT
      }
      encodeAll() {
        let TT = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
            offset: 0
          },
          kT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.sharedBuffer;
        return this.encodeFullSync(TT, kT, !1)
      }
      encodeAllView(TT, kT, cT) {
        let lT = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : this.sharedBuffer;
        const MT = cT.offset;
        return lT = this.encodeFullSync(cT, lT, !0, TT, MT), gl(lT.subarray(0, kT), lT.subarray(MT, cT.offset))
      }
      ensureCapacity(TT, kT) {
        if (kT + Ul.BUFFER_SIZE <= TT.byteLength) return TT;
        const cT = Math.ceil((kT + Ul.BUFFER_SIZE) / Ul.BUFFER_SIZE) * Ul.BUFFER_SIZE,
          lT = new Uint8Array(cT);
        return lT.set(TT.subarray(0, kT)), TT === this.sharedBuffer && (this.sharedBuffer = lT), lT
      }
      encodeView(TT, kT, cT) {
        let lT = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : this.sharedBuffer,
          KT = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4];
        const OT = cT.offset;
        this._emitStreamPriority(TT);
        for (const fT of TT.changes.keys()) {
          const kT = TT.changes.get(fT),
            KT = this.root.changeTrees[fT];
          if (void 0 === KT) {
            TT.changes.delete(fT);
            continue
          }
          if (0 === kT.size) continue;
          const OT = KT.encDescriptor,
            xT = OT.encoder,
            IT = OT.metadata,
            AT = KT.ref,
            jT = KT.refTarget;
          lT = this.ensureCapacity(lT, cT.offset), lT[cT.offset++] = 255, kk.number(lT, AT[yT], cT);
          for (const [fT, vT] of kT) {
            let kT;
            if (-1 === fT) {
              const TT = jT.tmpItems,
                kT = jT.deletedIndexes;
              for (let OT = 0; OT < TT.length; OT++) void 0 !== TT[OT] && !0 !== kT[OT] && xT(this, lT, KT, OT, MT.ADD, cT, !1, !0, IT);
              continue
            }
            if ("number" === typeof fT) kT = fT;
            else {
              const cT = fT.indexInParent(AT);
              if (void 0 === cT) continue;
              if (kT = cT, vT === MT.ADD && KT.getChange(kT) === MT.DELETE) {
                TT.changes.delete(fT.ref[yT]);
                continue
              }
            }
            xT(this, lT, KT, kT, void 0 !== jT[CT](kT) && vT || MT.DELETE, cT, !1, !0, IT)
          }
        }
        return TT.changes.clear(), lT = this.encode(cT, TT, lT), KT ? gl(lT.subarray(0, kT), lT.subarray(OT, cT.offset)) : lT.subarray(OT, cT.offset)
      }
      encodeUnreliableView(TT, kT, cT) {
        let lT = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : this.sharedBuffer;
        const MT = cT.offset;
        return lT = this.encodeUnreliable(cT, TT, lT, MT), gl(lT.subarray(0, kT), lT.subarray(MT, cT.offset))
      }
      _emitStreamBroadcast(TT, kT) {
        const cT = this.root.streamTrees;
        for (const lT of cT) {
          const cT = lT,
            KT = cT[tT],
            OT = cT[yT];
          if (void 0 === OT) continue;
          const fT = cT._stream,
            xT = fT.broadcastDeletes,
            IT = fT.broadcastPending,
            AT = fT.sentBroadcast,
            jT = xT.size > 0,
            vT = IT.size > 0,
            hT = KT.encDescriptor,
            NT = hT.encoder,
            QT = hT.metadata;
          if (jT || vT) {
            if (TT[kT.offset++] = 255, kk.number(TT, OT, kT), jT) {
              for (const cT of xT) NT(this, TT, KT, cT, MT.DELETE, kT, !1, !1, QT);
              xT.clear()
            }
            const lT = fT.maxPerTick,
              vT = [];
            let hT = 0;
            const ST = [];
            for (const OT of IT) {
              if (hT >= lT) break;
              const yT = cT[CT](OT);
              void 0 !== yT ? (NT(this, TT, KT, OT, MT.ADD, kT, !1, !1, QT), AT.add(OT), vT.push(yT), ST.push(OT), hT++) : ST.push(OT)
            }
            for (const TT of ST) IT.delete(TT);
            for (const cT of vT) {
              const lT = cT[tT];
              if (void 0 === lT) continue;
              const KT = cT[yT];
              if (void 0 === KT) continue;
              TT[kT.offset++] = 255, kk.number(TT, KT, kT);
              const OT = lT.encDescriptor,
                fT = OT.encoder,
                xT = OT.metadata;
              lT.forEachLive((cT => {
                nk.hasUnreliableAtIndex(xT, cT) || fT(this, TT, lT, cT, MT.ADD, kT, !1, !1, xT)
              }))
            }
          }
          for (const lT of AT) {
            const MT = cT[CT](lT);
            if (void 0 === MT) continue;
            const KT = MT[tT];
            if (void 0 === KT || !KT.has()) continue;
            const OT = MT[yT];
            if (void 0 === OT) continue;
            TT[kT.offset++] = 255, kk.number(TT, OT, kT);
            const fT = KT.encDescriptor,
              xT = fT.encoder,
              IT = fT.metadata;
            KT.forEach(((cT, lT) => {
              cT < 0 || nk.hasUnreliableAtIndex(IT, cT) || xT(this, TT, KT, cT, lT, kT, !1, !1, IT)
            }))
          }
        }
      }
      _emitStreamPriority(TT) {
        const kT = this.root.streamTrees;
        if (0 === kT.size) return;
        const cT = TT.id;
        for (const lT of kT) {
          const kT = lT,
            KT = kT._stream,
            OT = KT.pendingByView.get(cT);
          if (void 0 === OT || 0 === OT.size) continue;
          const fT = KT.priorityByView?.get(cT),
            xT = void 0 !== fT,
            IT = KT.priority,
            AT = KT.maxPerTick,
            jT = [],
            vT = [];
          if (xT || void 0 !== IT) {
            const cT = [],
              lT = [];
            let MT = 0;
            for (const KT of OT) {
              const OT = kT[CT](KT);
              if (void 0 === OT) {
                vT.push(KT);
                continue
              }
              const yT = xT ? fT(OT) : IT(TT, OT);
              if (MT < AT) {
                let TT = MT++;
                for (; TT > 0 && lT[TT - 1] < yT;) lT[TT] = lT[TT - 1], cT[TT] = cT[TT - 1], TT--;
                lT[TT] = yT, cT[TT] = KT
              } else if (yT > lT[AT - 1]) {
                let TT = AT - 1;
                for (; TT > 0 && lT[TT - 1] < yT;) lT[TT] = lT[TT - 1], cT[TT] = cT[TT - 1], TT--;
                lT[TT] = yT, cT[TT] = KT
              }
            }
            for (let TT = 0; TT < MT; TT++) jT.push(cT[TT])
          } else
            for (const TT of OT) {
              if (jT.length >= AT) break;
              jT.push(TT)
            }
          for (const TT of vT) OT.delete(TT);
          const hT = jT.length;
          let NT = KT.sentByView.get(cT);
          void 0 === NT && (NT = new Set, KT.sentByView.set(cT, NT));
          for (let cT = 0; cT < hT; cT++) {
            const lT = jT[cT],
              KT = kT[CT](lT);
            if (void 0 === KT) {
              OT.delete(lT);
              continue
            }
            TT._addImmediate(KT);
            const fT = KT[tT];
            if (void 0 !== fT) {
              const kT = KT[yT];
              let cT = TT.changes.get(kT);
              void 0 === cT && (cT = new Map, TT.changes.set(kT, cT));
              const lT = fT.metadata;
              fT.forEachLive((TT => {
                nk.hasUnreliableAtIndex(lT, TT) || cT.set(TT, MT.ADD)
              }))
            }
            OT.delete(lT), NT.add(lT)
          }
        }
      }
      discardChanges() {
        const TT = this.root.changes;
        let kT = TT.next;
        const cT = this.root;
        for (; kT;) {
          const TT = kT.next;
          kT.changeTree.endEncode(), cT.releaseNode(kT), kT = TT
        }
        TT.next = void 0, TT.tail = void 0
      }
      discardUnreliableChanges() {
        const TT = this.root.unreliableChanges;
        let kT = TT.next;
        const cT = this.root;
        for (; kT;) {
          const TT = kT.next;
          kT.changeTree.endEncodeUnreliable(), cT.releaseNode(kT), kT = TT
        }
        TT.next = void 0, TT.tail = void 0
      }
      tryEncodeTypeId(TT, kT, cT, lT) {
        const MT = this.context.getTypeId(kT),
          KT = this.context.getTypeId(cT);
        void 0 !== KT ? MT !== KT && (TT[lT.offset++] = 213, kk.number(TT, KT, lT)) : console.warn(`@colyseus/schema WARNING: Class "${cT.name}" is not registered on TypeRegistry - Please either tag the class with @entity or define a @type() field.`)
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
        const kT = 0 === TT.activeViews.size;
        for (const cT of TT.streamTrees)
          if (kT ? Hk(cT) : Jk(cT, TT)) return !0;
        return !1
      }
      get hasUnreliableChanges() {
        return void 0 !== this.root.unreliableChanges.next
      }
    }
    class Yl extends Error {
      constructor(TT) {
        super(TT), this.name = "DecodingWarning"
      }
    }
    const Bl = {
      value: 0,
      enumerable: !1,
      writable: !0
    };
    class Wl {
      refs = new Map;
      refCount = {};
      deletedRefs = new Set;
      callbacks = {};
      nextUniqueId = 0;
      getNextUniqueId() {
        return this.nextUniqueId++
      }
      addRef(TT, kT) {
        let cT = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        this.refs.set(TT, kT), void 0 === kT[yT] ? (Bl.value = TT, Object.defineProperty(kT, yT, Bl)) : kT[yT] !== TT && (kT[yT] = TT), cT && (this.refCount[TT] = (this.refCount[TT] || 0) + 1), this.deletedRefs.has(TT) && this.deletedRefs.delete(TT)
      }
      removeRef(TT) {
        const kT = this.refCount[TT];
        if (void 0 !== kT)
          if (0 !== kT)(this.refCount[TT] = kT - 1) <= 0 && this.deletedRefs.add(TT);
          else try {
            const kT = this.refs.get(TT);
            throw new Yl(`trying to remove refId '${TT}' with 0 refCount (${kT.constructor.name}: ${JSON.stringify(kT)})`)
          } catch (OM) {
            console.warn(OM)
          } else try {
            throw new Yl("trying to remove refId that doesn't exist: " + TT)
          } catch (OM) {
            console.warn(OM)
          }
      }
      clearRefs() {
        this.refs.clear(), this.deletedRefs.clear(), this.callbacks = {}, this.refCount = {}
      }
      garbageCollectDeletedRefs() {
        this.deletedRefs.forEach((TT => {
          if (this.refCount[TT] > 0) return;
          const kT = this.refs.get(TT),
            cT = kT.constructor[Symbol.metadata];
          if (null != cT)
            for (const lT in cT) {
              const TT = kT[cT[lT].name];
              if ("object" === typeof TT && TT) {
                const kT = TT[yT];
                void 0 === kT || this.deletedRefs.has(kT) || this.removeRef(kT)
              }
            } else "function" === typeof kT[hT] && Array.from(kT.values()).forEach((TT => {
              const kT = TT[yT];
              void 0 === kT || this.deletedRefs.has(kT) || this.removeRef(kT)
            }));
          this.refs.delete(TT), delete this.refCount[TT], delete this.callbacks[TT]
        })), this.deletedRefs.clear()
      }
      addCallback(TT, kT, cT) {
        if (void 0 === TT) {
          const TT = "number" === typeof kT ? MT[kT] : kT;
          throw new Error(`Can't addCallback on '${TT}' (refId is undefined)`)
        }
        return this.callbacks[TT] || (this.callbacks[TT] = {}), this.callbacks[TT][kT] || (this.callbacks[TT][kT] = []), this.callbacks[TT][kT].push(cT), () => this.removeCallback(TT, kT, cT)
      }
      removeCallback(TT, kT, cT) {
        const lT = this.callbacks?.[TT]?.[kT]?.indexOf(cT);
        void 0 !== lT && -1 !== lT && el(this.callbacks[TT][kT], lT)
      }
    }
    class nl {
      context;
      state;
      root;
      currentRefId = 0;
      MJ;
      resyncVisited = null;
      resyncDamaged = !1;
      constructor(TT, kT) {
        this.setState(TT), this.context = kT || new Lk(TT.constructor)
      }
      setState(TT) {
        this.state = TT, this.root = new Wl, this.root.addRef(0, TT)
      }
      decode(TT) {
        let kT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
            offset: 0
          },
          cT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : this.state;
        const MT = void 0 !== this.MJ ? [] : null,
          KT = this.root,
          OT = TT.byteLength;
        let yT = cT.constructor[IT];
        for (this.currentRefId = 0; kT.offset < OT;) {
          if (TT[kT.offset] == lT) {
            kT.offset++, cT[DT]?.();
            const lT = Sk.number(TT, kT),
              MT = KT.refs.get(lT);
            MT ? (cT = MT, yT = cT.constructor[IT], this.currentRefId = lT) : (console.error(`"refId" not found: ${lT}`, {
              previousRef: cT,
              previousRefId: this.currentRefId
            }), console.warn("Please report this issue to the developers."), this.skipCurrentStructure(TT, kT, OT));
            continue
          } - 1 !== yT(this, TT, kT, cT, MT) || (console.warn("@colyseus/schema: definition mismatch"), this.skipCurrentStructure(TT, kT, OT))
        }
        return cT[DT]?.(), null !== this.resyncVisited && function(TT, kT) {
          TT.resyncDamaged ? console.warn("@colyseus/schema: resync sweep skipped \u2014 parts of the payload could not be decoded. Stale entries may persist until the next resync.") : Lc(TT, TT.state, new Set, kT)
        }(this, MT), null !== MT && this.MJ?.(MT), KT.garbageCollectDeletedRefs(), MT
      }
      decodeResync(TT) {
        let kT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
          offset: 0
        };
        this.resyncVisited = new Map, this.resyncDamaged = !1;
        try {
          return this.decode(TT, kT)
        } finally {
          this.resyncVisited = null
        }
      }
      skipCurrentStructure(TT, kT, cT) {
        null !== this.resyncVisited && (this.resyncDamaged = !0);
        const MT = {
          offset: kT.offset
        };
        for (; kT.offset < cT && (TT[kT.offset] !== lT || (MT.offset = kT.offset + 1, !this.root.refs.has(Sk.number(TT, MT))));) kT.offset++
      }
      getInstanceType(TT, kT, cT) {
        let lT;
        if (213 === TT[kT.offset]) {
          kT.offset++;
          const cT = Sk.number(TT, kT);
          lT = this.context.get(cT)
        }
        return lT || cT
      }
      createInstanceOfType(TT) {
        return TT.initializeForDecoder()
      }
      removeChildRefs(TT, kT) {
        const cT = "string" !== typeof TT[hT],
          lT = TT[yT];
        TT.forEach(((KT, OT) => {
          kT?.push({
            ref: TT,
            refId: lT,
            op: MT.DELETE,
            field: OT,
            value: void 0,
            previousValue: KT
          }), cT && this.root.removeRef(KT[yT])
        }))
      }
    }
    const pl = bl({
        min: vl.float64(),
        max: vl.float64(),
        bits: vl.uint8(),
        mode: vl.uint8()
      }, "QuantizedDescriptor"),
      il = bl({
        name: vl.string(),
        type: vl.string(),
        referencedType: vl.number(),
        childPrimitive: vl.string(),
        quantized: vl.ref(pl).optional()
      }, "ReflectionField"),
      ql = bl({
        id: vl.number(),
        extendsId: vl.number(),
        fields: vl.array(il)
      }, "ReflectionType"),
      sl = bl({
        types: vl.array(ql),
        rootType: vl.number()
      }, "Reflection");

    function TM(TT) {
      const kT = TT.root,
        cT = kT.callbacks,
        lT = new WeakMap;
      let KT;

      function OT(TT, cT) {
        let xT = cT.instance?.constructor[Symbol.metadata] || TT,
          IT = cT.instance && "function" === typeof cT.instance.forEach || TT && !Jl.is(TT);
        if (xT && !IT) {
          const TT = function(TT, MT, OT, fT) {
            return fT && void 0 !== cT.instance[MT] && !lT.has(KT) && OT(cT.instance[MT], void 0), kT.addCallback(TT[yT], MT, OT)
          };
          return new Proxy({
            listen: function(kT, MT) {
              let OT = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
              if (cT.instance) return TT(cT.instance, kT, MT, OT);
              {
                let yT = () => {};
                return cT.onInstanceAvailable(((cT, fT) => {
                  yT = TT(cT, kT, MT, OT && fT && !lT.has(KT))
                })), () => yT()
              }
            },
            onChange: function(TT) {
              return kT.addCallback(cT.instance[yT], MT.REPLACE, TT)
            },
            bindTo: function(TT, lT) {
              return lT || (lT = Object.keys(xT).map((TT => xT[TT].name))), kT.addCallback(cT.instance[yT], MT.REPLACE, (() => {
                lT.forEach((kT => TT[kT] = cT.instance[kT]))
              }))
            }
          }, {
            get(TT, kT) {
              const lT = xT[xT[kT]];
              if (lT) {
                const TT = cT.instance?.[kT],
                  MT = lT => {
                    const MT = fT(cT.instance).listen(kT, ((TT, kT) => {
                      lT(TT, !1), MT?.()
                    }), !1);
                    void 0 !== TT?.[yT] && lT(TT, !0)
                  };
                return OT(lT.type, {
                  instance: void 0 !== TT?.[yT] && TT,
                  parentInstance: cT.instance,
                  onInstanceAvailable: MT
                })
              }
              return TT[kT]
            },
            has: (TT, kT) => void 0 !== xT[kT],
            set(TT, kT, cT) {
              throw new Error("not allowed")
            },
            deleteProperty(TT, kT) {
              throw new Error("not allowed")
            }
          })
        } {
          const TT = function(TT, cT, OT) {
              return OT && TT.forEach(((TT, kT) => cT(TT, kT))), kT.addCallback(TT[yT], MT.ADD, ((TT, kT) => {
                lT.set(cT, !0), KT = cT, cT(TT, kT), lT.delete(cT), KT = void 0
              }))
            },
            OT = function(TT, cT) {
              return kT.addCallback(TT[yT], MT.DELETE, cT)
            },
            fT = function(TT, cT) {
              return kT.addCallback(TT[yT], MT.REPLACE, cT)
            };
          return new Proxy({
            uF: function(kT) {
              let MT = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
              if (cT.instance) return TT(cT.instance, kT, MT && !lT.has(KT));
              if (cT.onInstanceAvailable) {
                let OT = () => {};
                return cT.onInstanceAvailable(((cT, yT) => {
                  OT = TT(cT, kT, MT && yT && !lT.has(KT))
                })), () => OT()
              }
            },
            Om: function(TT) {
              if (cT.instance) return OT(cT.instance, TT);
              if (cT.onInstanceAvailable) {
                let kT = () => {};
                return cT.onInstanceAvailable((cT => {
                  kT = OT(cT, TT)
                })), () => kT()
              }
            },
            onChange: function(TT) {
              if (cT.instance) return fT(cT.instance, TT);
              if (cT.onInstanceAvailable) {
                let kT = () => {};
                return cT.onInstanceAvailable((cT => {
                  kT = fT(cT, TT)
                })), () => kT()
              }
            }
          }, {
            get(TT, kT) {
              if (!TT[kT]) throw new Error(`Can't access '${kT}' through callback proxy. access the instance directly.`);
              return TT[kT]
            },
            has: (TT, kT) => void 0 !== TT[kT],
            set(TT, kT, cT) {
              throw new Error("not allowed")
            },
            deleteProperty(TT, kT) {
              throw new Error("not allowed")
            }
          })
        }
      }

      function fT(TT) {
        return OT(void 0, {
          instance: TT
        })
      }
      return TT.MJ = function(TT) {
        const kT = new Set;
        for (let lT = 0, KT = TT.length; lT < KT; lT++) {
          const KT = TT[lT],
            OT = KT.refId,
            fT = KT.ref,
            xT = cT[OT];
          if (xT) {
            if ((KT.op & MT.DELETE) === MT.DELETE && Jl.isSchema(KT.previousValue)) {
              const TT = cT[KT.previousValue[yT]]?.[MT.DELETE];
              for (let kT = TT?.length - 1; kT >= 0; kT--) TT[kT]()
            }
            if (Jl.isSchema(fT)) {
              if (!kT.has(OT)) {
                const TT = xT?.[MT.REPLACE];
                for (let kT = TT?.length - 1; kT >= 0; kT--) TT[kT]()
              }
              if (xT.hasOwnProperty(KT.field)) {
                const TT = xT[KT.field];
                for (let kT = TT?.length - 1; kT >= 0; kT--) TT[kT](KT.value, KT.previousValue)
              }
            } else {
              if ((KT.op & MT.DELETE) === MT.DELETE) {
                if (void 0 !== KT.previousValue) {
                  const TT = xT[MT.DELETE];
                  for (let kT = TT?.length - 1; kT >= 0; kT--) TT[kT](KT.previousValue, KT.dynamicIndex ?? KT.field)
                }
                if ((KT.op & MT.ADD) === MT.ADD) {
                  const TT = xT[MT.ADD];
                  for (let kT = TT?.length - 1; kT >= 0; kT--) TT[kT](KT.value, KT.dynamicIndex ?? KT.field)
                }
              } else if ((KT.op & MT.ADD) === MT.ADD && KT.previousValue !== KT.value) {
                const TT = xT[MT.ADD];
                for (let kT = TT?.length - 1; kT >= 0; kT--) TT[kT](KT.value, KT.dynamicIndex ?? KT.field)
              }
              if (KT.value !== KT.previousValue && (void 0 !== KT.value || void 0 !== KT.previousValue)) {
                const TT = xT[MT.REPLACE];
                for (let kT = TT?.length - 1; kT >= 0; kT--) TT[kT](KT.value, KT.dynamicIndex ?? KT.field)
              }
            }
            kT.add(OT)
          }
        }
      }, fT
    }

    function kM(TT, kT) {
      TT.MJ = kT
    }
    sl.encode = function(TT) {
      let kT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
        offset: 0
      };
      const cT = TT.context,
        lT = new sl,
        MT = new Ul(lT),
        KT = cT.schemas.get(TT.state.constructor);
      KT > 0 && (lT.rootType = KT);
      const OT = new Set,
        yT = {},
        fT = TT => {
          if (void 0 === TT.extendsId || OT.has(TT.extendsId)) {
            OT.add(TT.id), lT.types.push(TT);
            const kT = yT[TT.id];
            void 0 !== kT && (delete yT[TT.id], kT.forEach((TT => fT(TT))))
          } else void 0 === yT[TT.extendsId] && (yT[TT.extendsId] = []), yT[TT.extendsId].push(TT)
        };
      cT.schemas.forEach(((TT, kT) => {
        const lT = new ql;
        lT.id = Number(TT);
        const MT = Object.getPrototypeOf(kT);
        MT !== Jl && (lT.extendsId = cT.schemas.get(MT));
        const KT = kT[Symbol.metadata];
        if (KT !== MT[Symbol.metadata]) {
          const TT = KT[mT] ?? -1;
          for (let kT = 0; kT <= TT; kT++) {
            const TT = KT[kT];
            if (void 0 === TT) continue;
            const MT = TT.name;
            if (!Object.prototype.hasOwnProperty.call(KT, MT)) continue;
            const OT = new il;
            let yT;
            if (OT.name = MT, "string" === typeof TT.type) yT = TT.type;
            else if (Zk(TT.type)) {
              const kT = TT.type.quantized;
              yT = "quantized";
              const cT = new pl;
              cT.min = kT.min, cT.max = kT.max, cT.bits = kT.bits, cT.mode = kT.wrap ? 1 : 0, OT.quantized = cT
            } else {
              let kT;
              Jl.is(TT.type) ? (yT = "ref", kT = TT.type) : (yT = Object.keys(TT.type)[0], "string" === typeof TT.type[yT] ? OT.childPrimitive = TT.type[yT] : kT = TT.type[yT]), OT.referencedType = kT ? cT.getTypeId(kT) : -1
            }
            OT.type = yT, lT.fields.push(OT)
          }
        }
        fT(lT)
      }));
      for (const xT in yT) yT[xT].forEach((TT => lT.types.push(TT)));
      return MT.encodeAll(kT).slice(0, kT.offset)
    }, sl.decode = function(TT, kT) {
      const cT = new sl;
      new nl(cT).decode(TT, kT);
      const lT = new Lk;
      cT.types.forEach((TT => {
        const kT = lT.get(TT.extendsId) ?? Jl,
          cT = class extends kT {};
        Lk.register(cT), lT.add(cT, TT.id)
      }), {});
      cT.types.forEach((TT => {
        const kT = lT.get(TT.id),
          MT = nk.initialize(kT),
          KT = [];
        let OT = TT;
        do {
          KT.push(OT), OT = cT.types.find((TT => TT.id === OT.extendsId))
        } while (OT);
        let yT = 0;
        KT.reverse().forEach((TT => {
          ((TT, kT, cT) => {
            kT.fields.forEach(((kT, MT) => {
              const KT = cT + MT;
              if (void 0 !== kT.quantized) {
                const cT = kT.quantized;
                nk.addField(TT, KT, kT.name, {
                  quantized: Ek({
                    min: cT.min,
                    max: cT.max,
                    bits: cT.bits,
                    mode: 1 === cT.mode ? "wrap" : "clamp"
                  })
                })
              } else if (void 0 !== kT.referencedType) {
                const cT = kT.type,
                  MT = lT.get(kT.referencedType) ?? kT.childPrimitive;
                "ref" === cT ? nk.addField(TT, KT, kT.name, MT) : nk.addField(TT, KT, kT.name, {
                  [cT]: MT
                })
              } else nk.addField(TT, KT, kT.name, kT.type)
            }))
          })(MT, TT, yT), yT += TT.fields.length
        }))
      }));
      const MT = new(lT.get(cT.rootType || 0));
      return new nl(MT, lT)
    }, sl.makeEncodable = function(TT) {
      const kT = TT[Symbol.metadata];
      if (!kT) return TT;
      const cT = kT[mT];
      if (void 0 === cT) return TT;
      for (let lT = 0; lT <= cT; lT++) {
        const cT = kT[lT];
        cT && nk.defineField(TT, kT, lT, cT.name, cT.type)
      }
      return Object.prototype.hasOwnProperty.call(TT, PT) && delete TT[PT], TT
    };
    class cM {
      pj;
      uniqueRefIds = new Set;
      isTriggering = !1;
      constructor(TT) {
        this.pj = TT, this.pj.MJ = this.MJ.bind(this)
      }
      get callbacks() {
        return this.pj.root.callbacks
      }
      get state() {
        return this.pj.state
      }
      addCallback(TT, kT, cT) {
        return this.pj.root.addCallback(TT, kT, cT)
      }
      addCallbackOrWaitCollectionAvailable(TT, kT, cT, lT) {
        let KT = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4],
          OT = () => {};
        const fT = () => OT(),
          xT = TT[kT];
        if (xT && void 0 !== xT[yT]) return KT = KT && !1 === this.isTriggering, cT === MT.ADD && KT && xT.forEach(((TT, kT) => {
          lT(TT, kT)
        })), this.addCallback(xT[yT], cT, lT);
        {
          let MT;
          return MT = this.addCallback(TT[yT], kT, ((TT, kT) => {
            null !== TT && void 0 !== TT && (MT(), OT = this.addCallback(TT[yT], cT, lT))
          })), OT = MT, fT
        }
      }
      listen() {
        return "string" === typeof(arguments.length <= 0 ? void 0 : arguments[0]) ? this.listenInstance(this.state, arguments.length <= 0 ? void 0 : arguments[0], arguments.length <= 1 ? void 0 : arguments[1], arguments.length <= 2 ? void 0 : arguments[2]) : this.listenInstance(arguments.length <= 0 ? void 0 : arguments[0], arguments.length <= 1 ? void 0 : arguments[1], arguments.length <= 2 ? void 0 : arguments[2], arguments.length <= 3 ? void 0 : arguments[3])
      }
      listenInstance(TT, kT, cT) {
        let lT = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
        lT = lT && !1 === this.isTriggering;
        const MT = TT[kT];
        return lT && null !== MT && void 0 !== MT && cT(MT, void 0), this.addCallback(TT[yT], kT, cT)
      }
      onChange() {
        if (2 === arguments.length && "string" !== typeof(arguments.length <= 0 ? void 0 : arguments[0])) {
          const TT = arguments.length <= 0 ? void 0 : arguments[0],
            kT = arguments.length <= 1 ? void 0 : arguments[1];
          return this.addCallback(TT[yT], MT.REPLACE, kT)
        }
        return "string" === typeof(arguments.length <= 0 ? void 0 : arguments[0]) ? this.addCallbackOrWaitCollectionAvailable(this.state, arguments.length <= 0 ? void 0 : arguments[0], MT.REPLACE, arguments.length <= 1 ? void 0 : arguments[1]) : this.addCallbackOrWaitCollectionAvailable(arguments.length <= 0 ? void 0 : arguments[0], arguments.length <= 1 ? void 0 : arguments[1], MT.REPLACE, arguments.length <= 2 ? void 0 : arguments[2])
      }
      uF() {
        return "string" === typeof(arguments.length <= 0 ? void 0 : arguments[0]) ? this.addCallbackOrWaitCollectionAvailable(this.state, arguments.length <= 0 ? void 0 : arguments[0], MT.ADD, arguments.length <= 1 ? void 0 : arguments[1], !1 !== (arguments.length <= 2 ? void 0 : arguments[2])) : this.addCallbackOrWaitCollectionAvailable(arguments.length <= 0 ? void 0 : arguments[0], arguments.length <= 1 ? void 0 : arguments[1], MT.ADD, arguments.length <= 2 ? void 0 : arguments[2], !1 !== (arguments.length <= 3 ? void 0 : arguments[3]))
      }
      Om() {
        return "string" === typeof(arguments.length <= 0 ? void 0 : arguments[0]) ? this.addCallbackOrWaitCollectionAvailable(this.state, arguments.length <= 0 ? void 0 : arguments[0], MT.DELETE, arguments.length <= 1 ? void 0 : arguments[1]) : this.addCallbackOrWaitCollectionAvailable(arguments.length <= 0 ? void 0 : arguments[0], arguments.length <= 1 ? void 0 : arguments[1], MT.DELETE, arguments.length <= 2 ? void 0 : arguments[2])
      }
      bindTo(TT, kT, cT) {
        let lT = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
        const KT = TT.constructor[Symbol.metadata];
        cT || (cT = Object.keys(KT).filter((TT => !isNaN(Number(TT)))).map((TT => KT[TT].name)));
        const OT = () => {
          for (const lT of cT) {
            const cT = TT[lT];
            void 0 !== cT && (kT[lT] = cT)
          }
        };
        return lT && OT(), this.addCallback(TT[yT], MT.REPLACE, OT)
      }
      MJ(TT) {
        this.uniqueRefIds.clear(), this.isTriggering = !0;
        for (let kT = 0, cT = TT.length; kT < cT; kT++) {
          const cT = TT[kT],
            lT = cT.refId,
            KT = cT.ref,
            OT = this.callbacks[lT];
          if (OT) {
            if ((cT.op & MT.DELETE) === MT.DELETE && Jl.isSchema(cT.previousValue)) {
              const TT = cT.previousValue[yT],
                kT = this.callbacks[TT]?.[MT.DELETE];
              if (kT)
                for (let cT = kT.length - 1; cT >= 0; cT--) try {
                  kT[cT]()
                } catch (OM) {
                  console.error(OM)
                }
            }
            if (Jl.isSchema(KT)) {
              if (!this.uniqueRefIds.has(lT)) {
                const TT = OT[MT.REPLACE];
                if (TT)
                  for (let kT = TT.length - 1; kT >= 0; kT--) try {
                    TT[kT]()
                  } catch (OM) {
                    console.error(OM)
                  }
              }
              const TT = OT[cT.field];
              if (TT)
                for (let kT = TT.length - 1; kT >= 0; kT--) try {
                  TT[kT](cT.value, cT.previousValue)
                } catch (OM) {
                  console.error(OM)
                }
            } else {
              const TT = cT.dynamicIndex ?? cT.field;
              if ((cT.op & MT.DELETE) === MT.DELETE) {
                if (void 0 !== cT.previousValue) {
                  const kT = OT[MT.DELETE];
                  if (kT)
                    for (let lT = kT.length - 1; lT >= 0; lT--) try {
                      kT[lT](cT.previousValue, TT)
                    } catch (OM) {
                      console.error(OM)
                    }
                }
                if ((cT.op & MT.ADD) === MT.ADD) {
                  const kT = OT[MT.ADD];
                  if (kT)
                    for (let lT = kT.length - 1; lT >= 0; lT--) try {
                      kT[lT](cT.value, TT)
                    } catch (OM) {
                      console.error(OM)
                    }
                }
              } else if ((cT.op & MT.ADD) === MT.ADD && cT.previousValue !== cT.value) {
                const kT = OT[MT.ADD];
                if (kT)
                  for (let lT = kT.length - 1; lT >= 0; lT--) try {
                    kT[lT](cT.value, TT)
                  } catch (OM) {
                    console.error(OM)
                  }
              }
              if (cT.value !== cT.previousValue) {
                const kT = OT[MT.REPLACE];
                if (kT)
                  for (let lT = kT.length - 1; lT >= 0; lT--) try {
                    kT[lT](TT, cT.value)
                  } catch (OM) {
                    console.error(OM)
                  }
              }
            }
            this.uniqueRefIds.add(lT)
          }
        }
        this.isTriggering = !1
      }
    }
    const lM = {
      get(TT) {
        if (TT instanceof nl) return new cM(TT);
        if ("pj" in TT.aN) return new cM(TT.aN.pj);
        throw new Error("Invalid room or decoder")
      },
      getLegacy(TT) {
        if (TT instanceof nl) return TM(TT);
        if ("pj" in TT.aN) return TM(TT.aN.pj);
        throw new Error("Invalid room or decoder")
      },
      getRawChanges: (TT, kT) => kM(TT, kT)
    };
    class MM {
      _free = [];
      _factory;
      _maxSize;
      constructor(TT) {
        let kT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        this._factory = TT, this._maxSize = kT.maxSize ?? 1 / 0;
        const cT = kT.preallocate ?? 0;
        for (let lT = 0; lT < cT; lT++) this._free.push(TT())
      }
      acquire() {
        return this._free.length > 0 ? this._free.pop() : this._factory()
      }
      release(TT) {
        Jl.reset(TT), this._free.length < this._maxSize && this._free.push(TT)
      }
      get size() {
        return this._free.length
      }
    }

    function KM(TT) {
      return new MM((() => new TT), arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {})
    }
    Fk("map", {
      constructor: Kl
    }), Fk("array", {
      constructor: ll
    }), Fk("set", {
      constructor: yl
    }), Fk("collection", {
      constructor: Ol
    })
  },
  9086: (TT, kT, cT) => {
    cT.r(kT), cT.d(kT, {
      __addDisposableResource: () => ET,
      __assign: () => KT,
      __asyncDelegator: () => wT,
      __asyncGenerator: () => PT,
      __asyncValues: () => mT,
      __await: () => rT,
      __awaiter: () => vT,
      __classPrivateFieldGet: () => eT,
      __classPrivateFieldIn: () => VT,
      __classPrivateFieldSet: () => GT,
      __createBinding: () => hT,
      __decorate: () => yT,
      __disposeResources: () => uT,
      __esDecorate: () => xT,
      __exportStar: () => NT,
      __extends: () => MT,
      __generator: () => tT,
      __importDefault: () => HT,
      __importStar: () => oT,
      __makeTemplateObject: () => bT,
      __metadata: () => jT,
      __param: () => fT,
      __propKey: () => AT,
      __read: () => ST,
      __rest: () => OT,
      __rewriteRelativeImportExtension: () => XT,
      __runInitializers: () => IT,
      __setFunctionName: () => CT,
      __spread: () => DT,
      __spreadArray: () => FT,
      __spreadArrays: () => aT,
      __values: () => QT,
      default: () => dT
    });
    var lT = function(TT, kT) {
      return lT = Object.setPrototypeOf || {
        __proto__: []
      }
      instanceof Array && function(TT, kT) {
        TT.__proto__ = kT
      } || function(TT, kT) {
        for (var cT in kT) Object.prototype.hasOwnProperty.call(kT, cT) && (TT[cT] = kT[cT])
      }, lT(TT, kT)
    };

    function MT(TT, kT) {
      if ("function" !== typeof kT && null !== kT) throw new TypeError("Class extends value " + String(kT) + " is not a constructor or null");

      function cT() {
        this.constructor = TT
      }
      lT(TT, kT), TT.prototype = null === kT ? Object.create(kT) : (cT.prototype = kT.prototype, new cT)
    }
    var KT = function() {
      return KT = Object.assign || function(TT) {
        for (var kT, cT = 1, lT = arguments.length; cT < lT; cT++)
          for (var MT in kT = arguments[cT]) Object.prototype.hasOwnProperty.call(kT, MT) && (TT[MT] = kT[MT]);
        return TT
      }, KT.apply(this, arguments)
    };

    function OT(TT, kT) {
      var cT = {};
      for (var lT in TT) Object.prototype.hasOwnProperty.call(TT, lT) && kT.indexOf(lT) < 0 && (cT[lT] = TT[lT]);
      if (null != TT && "function" === typeof Object.getOwnPropertySymbols) {
        var MT = 0;
        for (lT = Object.getOwnPropertySymbols(TT); MT < lT.length; MT++) kT.indexOf(lT[MT]) < 0 && Object.prototype.propertyIsEnumerable.call(TT, lT[MT]) && (cT[lT[MT]] = TT[lT[MT]])
      }
      return cT
    }

    function yT(TT, kT, cT, lT) {
      var MT, KT = arguments.length,
        OT = KT < 3 ? kT : null === lT ? lT = Object.getOwnPropertyDescriptor(kT, cT) : lT;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) OT = Reflect.decorate(TT, kT, cT, lT);
      else
        for (var yT = TT.length - 1; yT >= 0; yT--)(MT = TT[yT]) && (OT = (KT < 3 ? MT(OT) : KT > 3 ? MT(kT, cT, OT) : MT(kT, cT)) || OT);
      return KT > 3 && OT && Object.defineProperty(kT, cT, OT), OT
    }

    function fT(TT, kT) {
      return function(cT, lT) {
        kT(cT, lT, TT)
      }
    }

    function xT(TT, kT, cT, lT, MT, KT) {
      function OT(TT) {
        if (void 0 !== TT && "function" !== typeof TT) throw new TypeError("Function expected");
        return TT
      }
      for (var yT, fT = lT.kind, xT = "getter" === fT ? "get" : "setter" === fT ? "set" : "value", IT = !kT && TT ? lT.static ? TT : TT.prototype : null, AT = kT || (IT ? Object.getOwnPropertyDescriptor(IT, lT.name) : {}), CT = !1, jT = cT.length - 1; jT >= 0; jT--) {
        var vT = {};
        for (var tT in lT) vT[tT] = "access" === tT ? {} : lT[tT];
        for (var tT in lT.access) vT.access[tT] = lT.access[tT];
        vT.addInitializer = function(TT) {
          if (CT) throw new TypeError("Cannot add initializers after decoration has completed");
          KT.push(OT(TT || null))
        };
        var hT = (0, cT[jT])("accessor" === fT ? {
          get: AT.get,
          set: AT.set
        } : AT[xT], vT);
        if ("accessor" === fT) {
          if (void 0 === hT) continue;
          if (null === hT || "object" !== typeof hT) throw new TypeError("Object expected");
          (yT = OT(hT.get)) && (AT.get = yT), (yT = OT(hT.set)) && (AT.set = yT), (yT = OT(hT.init)) && MT.unshift(yT)
        } else(yT = OT(hT)) && ("field" === fT ? MT.unshift(yT) : AT[xT] = yT)
      }
      IT && Object.defineProperty(IT, lT.name, AT), CT = !0
    }

    function IT(TT, kT, cT) {
      for (var lT = arguments.length > 2, MT = 0; MT < kT.length; MT++) cT = lT ? kT[MT].call(TT, cT) : kT[MT].call(TT);
      return lT ? cT : void 0
    }

    function AT(TT) {
      return "symbol" === typeof TT ? TT : "".concat(TT)
    }

    function CT(TT, kT, cT) {
      return "symbol" === typeof kT && (kT = kT.description ? "[".concat(kT.description, "]") : ""), Object.defineProperty(TT, "name", {
        configurable: !0,
        value: cT ? "".concat(cT, " ", kT) : kT
      })
    }

    function jT(TT, kT) {
      if ("object" === typeof Reflect && "function" === typeof Reflect.metadata) return Reflect.metadata(TT, kT)
    }

    function vT(TT, kT, cT, lT) {
      return new(cT || (cT = Promise))((function(MT, KT) {
        function OT(TT) {
          try {
            fT(lT.next(TT))
          } catch (kT) {
            KT(kT)
          }
        }

        function yT(TT) {
          try {
            fT(lT.throw(TT))
          } catch (kT) {
            KT(kT)
          }
        }

        function fT(TT) {
          var kT;
          TT.done ? MT(TT.value) : (kT = TT.value, kT instanceof cT ? kT : new cT((function(TT) {
            TT(kT)
          }))).then(OT, yT)
        }
        fT((lT = lT.apply(TT, kT || [])).next())
      }))
    }

    function tT(TT, kT) {
      var cT, lT, MT, KT = {
          label: 0,
          sent: function() {
            if (1 & MT[0]) throw MT[1];
            return MT[1]
          },
          trys: [],
          ops: []
        },
        OT = Object.create(("function" === typeof Iterator ? Iterator : Object).prototype);
      return OT.next = yT(0), OT.throw = yT(1), OT.return = yT(2), "function" === typeof Symbol && (OT[Symbol.iterator] = function() {
        return this
      }), OT;

      function yT(yT) {
        return function(fT) {
          return function(yT) {
            if (cT) throw new TypeError("Generator is already executing.");
            for (; OT && (OT = 0, yT[0] && (KT = 0)), KT;) try {
              if (cT = 1, lT && (MT = 2 & yT[0] ? lT.return : yT[0] ? lT.throw || ((MT = lT.return) && MT.call(lT), 0) : lT.next) && !(MT = MT.call(lT, yT[1])).done) return MT;
              switch (lT = 0, MT && (yT = [2 & yT[0], MT.value]), yT[0]) {
                case 0:
                case 1:
                  MT = yT;
                  break;
                case 4:
                  return KT.label++, {
                    value: yT[1],
                    done: !1
                  };
                case 5:
                  KT.label++, lT = yT[1], yT = [0];
                  continue;
                case 7:
                  yT = KT.ops.pop(), KT.trys.pop();
                  continue;
                default:
                  if (!(MT = (MT = KT.trys).length > 0 && MT[MT.length - 1]) && (6 === yT[0] || 2 === yT[0])) {
                    KT = 0;
                    continue
                  }
                  if (3 === yT[0] && (!MT || yT[1] > MT[0] && yT[1] < MT[3])) {
                    KT.label = yT[1];
                    break
                  }
                  if (6 === yT[0] && KT.label < MT[1]) {
                    KT.label = MT[1], MT = yT;
                    break
                  }
                  if (MT && KT.label < MT[2]) {
                    KT.label = MT[2], KT.ops.push(yT);
                    break
                  }
                  MT[2] && KT.ops.pop(), KT.trys.pop();
                  continue
              }
              yT = kT.call(TT, KT)
            } catch (fT) {
              yT = [6, fT], lT = 0
            } finally {
              cT = MT = 0
            }
            if (5 & yT[0]) throw yT[1];
            return {
              value: yT[0] ? yT[1] : void 0,
              done: !0
            }
          }([yT, fT])
        }
      }
    }
    var hT = Object.create ? function(TT, kT, cT, lT) {
      void 0 === lT && (lT = cT);
      var MT = Object.getOwnPropertyDescriptor(kT, cT);
      MT && !("get" in MT ? !kT.__esModule : MT.writable || MT.configurable) || (MT = {
        enumerable: !0,
        get: function() {
          return kT[cT]
        }
      }), Object.defineProperty(TT, lT, MT)
    } : function(TT, kT, cT, lT) {
      void 0 === lT && (lT = cT), TT[lT] = kT[cT]
    };

    function NT(TT, kT) {
      for (var cT in TT) "default" === cT || Object.prototype.hasOwnProperty.call(kT, cT) || hT(kT, TT, cT)
    }

    function QT(TT) {
      var kT = "function" === typeof Symbol && Symbol.iterator,
        cT = kT && TT[kT],
        lT = 0;
      if (cT) return cT.call(TT);
      if (TT && "number" === typeof TT.length) return {
        next: function() {
          return TT && lT >= TT.length && (TT = void 0), {
            value: TT && TT[lT++],
            done: !TT
          }
        }
      };
      throw new TypeError(kT ? "Object is not iterable." : "Symbol.iterator is not defined.")
    }

    function ST(TT, kT) {
      var cT = "function" === typeof Symbol && TT[Symbol.iterator];
      if (!cT) return TT;
      var lT, MT, KT = cT.call(TT),
        OT = [];
      try {
        for (;
          (void 0 === kT || kT-- > 0) && !(lT = KT.next()).done;) OT.push(lT.value)
      } catch (yT) {
        MT = {
          error: yT
        }
      } finally {
        try {
          lT && !lT.done && (cT = KT.return) && cT.call(KT)
        } finally {
          if (MT) throw MT.error
        }
      }
      return OT
    }

    function DT() {
      for (var TT = [], kT = 0; kT < arguments.length; kT++) TT = TT.concat(ST(arguments[kT]));
      return TT
    }

    function aT() {
      for (var TT = 0, kT = 0, cT = arguments.length; kT < cT; kT++) TT += arguments[kT].length;
      var lT = Array(TT),
        MT = 0;
      for (kT = 0; kT < cT; kT++)
        for (var KT = arguments[kT], OT = 0, yT = KT.length; OT < yT; OT++, MT++) lT[MT] = KT[OT];
      return lT
    }

    function FT(TT, kT, cT) {
      if (cT || 2 === arguments.length)
        for (var lT, MT = 0, KT = kT.length; MT < KT; MT++) !lT && MT in kT || (lT || (lT = Array.prototype.slice.call(kT, 0, MT)), lT[MT] = kT[MT]);
      return TT.concat(lT || Array.prototype.slice.call(kT))
    }

    function rT(TT) {
      return this instanceof rT ? (this.v = TT, this) : new rT(TT)
    }

    function PT(TT, kT, cT) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var lT, MT = cT.apply(TT, kT || []),
        KT = [];
      return lT = Object.create(("function" === typeof AsyncIterator ? AsyncIterator : Object).prototype), OT("next"), OT("throw"), OT("return", (function(TT) {
        return function(kT) {
          return Promise.resolve(kT).then(TT, xT)
        }
      })), lT[Symbol.asyncIterator] = function() {
        return this
      }, lT;

      function OT(TT, kT) {
        MT[TT] && (lT[TT] = function(kT) {
          return new Promise((function(cT, lT) {
            KT.push([TT, kT, cT, lT]) > 1 || yT(TT, kT)
          }))
        }, kT && (lT[TT] = kT(lT[TT])))
      }

      function yT(TT, kT) {
        try {
          (cT = MT[TT](kT)).value instanceof rT ? Promise.resolve(cT.value.v).then(fT, xT) : IT(KT[0][2], cT)
        } catch (lT) {
          IT(KT[0][3], lT)
        }
        var cT
      }

      function fT(TT) {
        yT("next", TT)
      }

      function xT(TT) {
        yT("throw", TT)
      }

      function IT(TT, kT) {
        TT(kT), KT.shift(), KT.length && yT(KT[0][0], KT[0][1])
      }
    }

    function wT(TT) {
      var kT, cT;
      return kT = {}, lT("next"), lT("throw", (function(TT) {
        throw TT
      })), lT("return"), kT[Symbol.iterator] = function() {
        return this
      }, kT;

      function lT(lT, MT) {
        kT[lT] = TT[lT] ? function(kT) {
          return (cT = !cT) ? {
            value: rT(TT[lT](kT)),
            done: !1
          } : MT ? MT(kT) : kT
        } : MT
      }
    }

    function mT(TT) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var kT, cT = TT[Symbol.asyncIterator];
      return cT ? cT.call(TT) : (TT = QT(TT), kT = {}, lT("next"), lT("throw"), lT("return"), kT[Symbol.asyncIterator] = function() {
        return this
      }, kT);

      function lT(cT) {
        kT[cT] = TT[cT] && function(kT) {
          return new Promise((function(lT, MT) {
            (function(TT, kT, cT, lT) {
              Promise.resolve(lT).then((function(kT) {
                TT({
                  value: kT,
                  done: cT
                })
              }), kT)
            })(lT, MT, (kT = TT[cT](kT)).done, kT.value)
          }))
        }
      }
    }

    function bT(TT, kT) {
      return Object.defineProperty ? Object.defineProperty(TT, "raw", {
        value: kT
      }) : TT.raw = kT, TT
    }
    var zT = Object.create ? function(TT, kT) {
        Object.defineProperty(TT, "default", {
          enumerable: !0,
          value: kT
        })
      } : function(TT, kT) {
        TT.default = kT
      },
      JT = function(TT) {
        return JT = Object.getOwnPropertyNames || function(TT) {
          var kT = [];
          for (var cT in TT) Object.prototype.hasOwnProperty.call(TT, cT) && (kT[kT.length] = cT);
          return kT
        }, JT(TT)
      };

    function oT(TT) {
      if (TT && TT.__esModule) return TT;
      var kT = {};
      if (null != TT)
        for (var cT = JT(TT), lT = 0; lT < cT.length; lT++) "default" !== cT[lT] && hT(kT, TT, cT[lT]);
      return zT(kT, TT), kT
    }

    function HT(TT) {
      return TT && TT.__esModule ? TT : {
        default: TT
      }
    }

    function eT(TT, kT, cT, lT) {
      if ("a" === cT && !lT) throw new TypeError("Private accessor was defined without a getter");
      if ("function" === typeof kT ? TT !== kT || !lT : !kT.has(TT)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
      return "m" === cT ? lT : "a" === cT ? lT.call(TT) : lT ? lT.value : kT.get(TT)
    }

    function GT(TT, kT, cT, lT, MT) {
      if ("m" === lT) throw new TypeError("Private method is not writable");
      if ("a" === lT && !MT) throw new TypeError("Private accessor was defined without a setter");
      if ("function" === typeof kT ? TT !== kT || !MT : !kT.has(TT)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
      return "a" === lT ? MT.call(TT, cT) : MT ? MT.value = cT : kT.set(TT, cT), cT
    }

    function VT(TT, kT) {
      if (null === kT || "object" !== typeof kT && "function" !== typeof kT) throw new TypeError("Cannot use 'in' operator on non-object");
      return "function" === typeof TT ? kT === TT : TT.has(kT)
    }

    function ET(TT, kT, cT) {
      if (null !== kT && void 0 !== kT) {
        if ("object" !== typeof kT && "function" !== typeof kT) throw new TypeError("Object expected.");
        var lT, MT;
        if (cT) {
          if (!Symbol.asyncDispose) throw new TypeError("Symbol.asyncDispose is not defined.");
          lT = kT[Symbol.asyncDispose]
        }
        if (void 0 === lT) {
          if (!Symbol.dispose) throw new TypeError("Symbol.dispose is not defined.");
          lT = kT[Symbol.dispose], cT && (MT = lT)
        }
        if ("function" !== typeof lT) throw new TypeError("Object not disposable.");
        MT && (lT = function() {
          try {
            MT.call(this)
          } catch (TT) {
            return Promise.reject(TT)
          }
        }), TT.stack.push({
          value: kT,
          dispose: lT,
          async: cT
        })
      } else cT && TT.stack.push({
        async: !0
      });
      return kT
    }
    var ZT = "function" === typeof SuppressedError ? SuppressedError : function(TT, kT, cT) {
      var lT = new Error(cT);
      return lT.name = "SuppressedError", lT.error = TT, lT.suppressed = kT, lT
    };

    function uT(TT) {
      function kT(kT) {
        TT.error = TT.hasError ? new ZT(kT, TT.error, "An error was suppressed during disposal.") : kT, TT.hasError = !0
      }
      var cT, lT = 0;
      return function MT() {
        for (; cT = TT.stack.pop();) try {
          if (!cT.async && 1 === lT) return lT = 0, TT.stack.push(cT), Promise.resolve().then(MT);
          if (cT.dispose) {
            var KT = cT.dispose.call(cT.value);
            if (cT.async) return lT |= 2, Promise.resolve(KT).then(MT, (function(TT) {
              return kT(TT), MT()
            }))
          } else lT |= 1
        } catch (OT) {
          kT(OT)
        }
        if (1 === lT) return TT.hasError ? Promise.reject(TT.error) : Promise.resolve();
        if (TT.hasError) throw TT.error
      }()
    }

    function XT(TT, kT) {
      return "string" === typeof TT && /^\.\.?\//.test(TT) ? TT.replace(/\.(tsx)$|((?:\.d)?)((?:\.[^./]+?)?)\.([cm]?)ts$/i, (function(TT, cT, lT, MT, KT) {
        return cT ? kT ? ".jsx" : ".js" : !lT || MT && KT ? lT + MT + "." + KT.toLowerCase() + "js" : TT
      })) : TT
    }
    const dT = {
      __extends: MT,
      __assign: KT,
      __rest: OT,
      __decorate: yT,
      __param: fT,
      __esDecorate: xT,
      __runInitializers: IT,
      __propKey: AT,
      __setFunctionName: CT,
      __metadata: jT,
      __awaiter: vT,
      __generator: tT,
      __createBinding: hT,
      __exportStar: NT,
      __values: QT,
      __read: ST,
      __spread: DT,
      __spreadArrays: aT,
      __spreadArray: FT,
      __await: rT,
      __asyncGenerator: PT,
      __asyncDelegator: wT,
      __asyncValues: mT,
      __makeTemplateObject: bT,
      __importStar: oT,
      __importDefault: HT,
      __classPrivateFieldGet: eT,
      __classPrivateFieldSet: GT,
      __classPrivateFieldIn: VT,
      __addDisposableResource: ET,
      __disposeResources: uT,
      __rewriteRelativeImportExtension: XT
    }
  }
};
Object.freeze(modules);
for (const TT in modules) Object.freeze(modules[TT]);