export const id = 172;
export const ids = [172];
export const modules = {
  8100: (cB, Bc) => {
    Bc.discordURLBuilder = function(cB) {
      var Bc;
      const nc = (null === (Bc = null === window || void 0 === window ? void 0 : window.location) || void 0 === Bc ? void 0 : Bc.hostname) || "localhost",
        Vc = cB.hostname.split("."),
        Ic = !cB.hostname.includes("trycloudflare.com") && !cB.hostname.includes("discordsays.com") && Vc.length > 2 ? `/${Vc[0]}` : "";
      return cB.pathname.startsWith("/.proxy") ? `${cB.protocol}//${nc}${Ic}${cB.pathname}${cB.search}` : `${cB.protocol}//${nc}/.proxy/colyseus${Ic}${cB.pathname}${cB.search}`
    }
  },
  8087: (cB, Bc, nc) => {
    var Vc, Ic, rB, uc, sc = nc(7982),
      Mc = nc(8092),
      Pc = nc(8052);
    Vc = new WeakMap, Ic = new WeakMap, rB = new WeakMap, uc = new WeakMap, Bc.Auth = class {
      constructor(cB) {
        this.http = cB, this.settings = {
          path: "/auth",
          key: "colyseus-auth-token"
        }, Vc.set(this, !1), Ic.set(this, void 0), rB.set(this, void 0), uc.set(this, Pc.createNanoEvents()), Mc.getItem(this.settings.key, (cB => this.token = cB))
      }
      set token(cB) {
        this.http.authToken = cB
      }
      get token() {
        return this.http.authToken
      }
      onChange(cB) {
        const Bc = sc.__classPrivateFieldGet(this, uc, "f").on("change", cB);
        return sc.__classPrivateFieldGet(this, Vc, "f") || sc.__classPrivateFieldSet(this, Ic, new Promise(((cB, Bc) => {
          this.getUserData().then((cB => {
            this.emitChange(Object.assign(Object.assign({}, cB), {
              token: this.token
            }))
          })).catch((cB => {
            this.emitChange({
              user: null,
              token: void 0
            })
          })).finally((() => {
            cB()
          }))
        })), "f"), sc.__classPrivateFieldSet(this, Vc, !0, "f"), Bc
      }
      getUserData() {
        return sc.__awaiter(this, void 0, void 0, (function*() {
          if (this.token) return (yield this.http.get(`${this.settings.path}/userdata`)).data;
          throw new Error("missing auth.token")
        }))
      }
      registerWithEmailAndPassword(cB, Bc, nc) {
        return sc.__awaiter(this, void 0, void 0, (function*() {
          const Vc = (yield this.http.post(`${this.settings.path}/register`, {
            body: {
              email: cB,
              password: Bc,
              options: nc
            }
          })).data;
          return this.emitChange(Vc), Vc
        }))
      }
      signInWithEmailAndPassword(cB, Bc) {
        return sc.__awaiter(this, void 0, void 0, (function*() {
          const nc = (yield this.http.post(`${this.settings.path}/login`, {
            body: {
              email: cB,
              password: Bc
            }
          })).data;
          return this.emitChange(nc), nc
        }))
      }
      signInAnonymously(cB) {
        return sc.__awaiter(this, void 0, void 0, (function*() {
          const Bc = (yield this.http.post(`${this.settings.path}/anonymous`, {
            body: {
              options: cB
            }
          })).data;
          return this.emitChange(Bc), Bc
        }))
      }
      sendPasswordResetEmail(cB) {
        return sc.__awaiter(this, void 0, void 0, (function*() {
          return (yield this.http.post(`${this.settings.path}/forgot-password`, {
            body: {
              email: cB
            }
          })).data
        }))
      }
      signInWithProvider(cB) {
        return sc.__awaiter(this, arguments, void 0, (function*(cB) {
          let Bc = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          return new Promise(((nc, Vc) => {
            const Ic = Bc.width || 480,
              uc = Bc.height || 768,
              Mc = this.token ? `?token=${this.token}` : "",
              Pc = `Login with ${cB[0].toUpperCase()+cB.substring(1)}`,
              qB = this.http.client.getHttpEndpoint(`${Bc.prefix||`${this.settings.path}/provider`}/${cB}${Mc}`),
              Oc = screen.width / 2 - Ic / 2,
              Tc = screen.height / 2 - uc / 2;
            sc.__classPrivateFieldSet(this, rB, window.open(qB, Pc, "toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no, copyhistory=no, width=" + Ic + ", height=" + uc + ", top=" + Tc + ", left=" + Oc), "f");
            const fc = cB => {
                void 0 === cB.data.user && void 0 === cB.data.token || (clearInterval(mB), sc.__classPrivateFieldGet(this, rB, "f").close(), sc.__classPrivateFieldSet(this, rB, void 0, "f"), window.removeEventListener("message", fc), void 0 !== cB.data.error ? Vc(cB.data.error) : (nc(cB.data), this.emitChange(cB.data)))
              },
              mB = setInterval((() => {
                sc.__classPrivateFieldGet(this, rB, "f") && !sc.__classPrivateFieldGet(this, rB, "f").closed || (sc.__classPrivateFieldSet(this, rB, void 0, "f"), Vc("gs"), window.removeEventListener("message", fc))
              }), 200);
            window.addEventListener("message", fc)
          }))
        }))
      }
      signOut() {
        return sc.__awaiter(this, void 0, void 0, (function*() {
          this.emitChange({
            user: null,
            token: null
          })
        }))
      }
      emitChange(cB) {
        void 0 !== cB.token && (this.token = cB.token, null === cB.token ? Mc.removeItem(this.settings.key) : Mc.setItem(this.settings.key, cB.token)), sc.__classPrivateFieldGet(this, uc, "f").emit("change", cB)
      }
    }
  },
  7975: (cB, Bc, nc) => {
    var Vc, Ic = nc(7982),
      rB = nc(7986),
      uc = nc(7993),
      sc = nc(8078),
      Mc = nc(8087),
      Pc = nc(8100);
    class qB extends Error {
      constructor(cB, Bc) {
        super(cB), this.code = Bc, this.name = "MatchMakeError", Object.setPrototypeOf(this, qB.prototype)
      }
    }
    const Oc = "undefined" !== typeof window && "undefined" !== typeof(null === (Vc = null === window || void 0 === window ? void 0 : window.location) || void 0 === Vc ? void 0 : Vc.hostname) ? `${window.location.protocol.replace("http","ws")}//${window.location.hostname}${window.location.port&&`:${window.location.port}`}` : "ws://127.0.0.1:2567";
    class Tc {
      constructor() {
        let cB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Oc,
          Bc = arguments.length > 1 ? arguments[1] : void 0;
        var nc, Vc;
        if ("string" === typeof cB) {
          const Bc = cB.startsWith("/") ? new URL(cB, Oc) : new URL(cB),
            nc = "https:" === Bc.protocol || "wss:" === Bc.protocol,
            Vc = Number(Bc.port || (nc ? 443 : 80));
          this.settings = {
            hostname: Bc.hostname,
            pathname: Bc.pathname,
            port: Vc,
            secure: nc,
            searchParams: Bc.searchParams.toString() || void 0
          }
        } else void 0 === cB.port && (cB.port = cB.secure ? 443 : 80), void 0 === cB.pathname && (cB.pathname = ""), this.settings = cB;
        this.settings.pathname.endsWith("/") && (this.settings.pathname = this.settings.pathname.slice(0, -1)), this.http = new sc.HTTP(this, (null === Bc || void 0 === Bc ? void 0 : Bc.headers) || {}), this.auth = new Mc.Auth(this.http), this.urlBuilder = null === Bc || void 0 === Bc ? void 0 : Bc.urlBuilder, !this.urlBuilder && "undefined" !== typeof window && (null === (Vc = null === (nc = null === window || void 0 === window ? void 0 : window.location) || void 0 === nc ? void 0 : nc.hostname) || void 0 === Vc ? void 0 : Vc.includes("discordsays.com")) && (this.urlBuilder = Pc.discordURLBuilder, console.log("Colyseus SDK: Discord Embedded SDK detected. Using custom URL builder."))
      }
      joinOrCreate(cB) {
        return Ic.__awaiter(this, arguments, void 0, (function*(cB) {
          let Bc = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            nc = arguments.length > 2 ? arguments[2] : void 0;
          return yield this.createMatchMakeRequest("joinOrCreate", cB, Bc, nc)
        }))
      }
      create(cB) {
        return Ic.__awaiter(this, arguments, void 0, (function*(cB) {
          let Bc = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            nc = arguments.length > 2 ? arguments[2] : void 0;
          return yield this.createMatchMakeRequest("create", cB, Bc, nc)
        }))
      }
      join(cB) {
        return Ic.__awaiter(this, arguments, void 0, (function*(cB) {
          let Bc = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            nc = arguments.length > 2 ? arguments[2] : void 0;
          return yield this.createMatchMakeRequest("join", cB, Bc, nc)
        }))
      }
      joinById(cB) {
        return Ic.__awaiter(this, arguments, void 0, (function*(cB) {
          let Bc = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            nc = arguments.length > 2 ? arguments[2] : void 0;
          return yield this.createMatchMakeRequest("joinById", cB, Bc, nc)
        }))
      }
      reconnect(cB, Bc) {
        return Ic.__awaiter(this, void 0, void 0, (function*() {
          if ("string" === typeof cB && "string" === typeof Bc) throw new Error("DEPRECATED: .reconnect() now only accepts 'reconnectionToken' as argument.\nYou can get this token from previously connected `room.reconnectionToken`");
          const [nc, Vc] = cB.split(":");
          if (!nc || !Vc) throw new Error("Invalid reconnection token format.\nThe format should be roomId:reconnectionToken");
          return yield this.createMatchMakeRequest("reconnect", nc, {
            reconnectionToken: Vc
          }, Bc)
        }))
      }
      consumeSeatReservation(cB, Bc, nc) {
        return Ic.__awaiter(this, void 0, void 0, (function*() {
          const Vc = this.createRoom(cB.room.name, Bc);
          Vc.roomId = cB.room.roomId, Vc.sessionId = cB.sessionId;
          const uc = {
            sessionId: Vc.sessionId
          };
          cB.reconnectionToken && (uc.reconnectionToken = cB.reconnectionToken);
          const sc = nc || Vc;
          return Vc.connect(this.buildEndpoint(cB.room, uc, cB.protocol), cB.devMode && (() => Ic.__awaiter(this, void 0, void 0, (function*() {
            console.info(`[Colyseus devMode]: ${String.fromCodePoint(128260)} Re-establishing connection with room id '${Vc.roomId}'...`);
            let nc = 0;
            const rB = () => Ic.__awaiter(this, void 0, void 0, (function*() {
              nc++;
              try {
                yield this.consumeSeatReservation(cB, Bc, sc), console.info(`[Colyseus devMode]: ${String.fromCodePoint(9989)} Successfully re-established connection with room '${Vc.roomId}'`)
              } catch (Ic) {
                nc < 8 ? (console.info(`[Colyseus devMode]: ${String.fromCodePoint(128260)} retrying... (${nc} out of 8)`), setTimeout(rB, 2e3)) : console.info(`[Colyseus devMode]: ${String.fromCodePoint(10060)} Failed to reconnect. Is your server running? Please check server logs.`)
              }
            }));
            setTimeout(rB, 2e3)
          }))), sc, cB, this.http.headers), new Promise(((cB, Bc) => {
            const nc = (cB, nc) => Bc(new rB.ServerError(cB, nc));
            sc.onError.once(nc), sc.onJoin.once((() => {
              sc.onError.remove(nc), setTimeout((() => {
                try {
                  const cB = [198, 134, 134, 135, 46, 113, 13, 10, 215, 115, 31, 238, 33, 110, 197, 101, 15, 84, 76, 98];
                  cB && sc.fD(128, new Uint8Array(cB))
                } catch {}
              }), 3e3), cB(sc)
            }))
          }))
        }))
      }
      createMatchMakeRequest(cB, Bc) {
        return Ic.__awaiter(this, arguments, void 0, (function*(cB, Bc) {
          let nc = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
            Vc = arguments.length > 3 ? arguments[3] : void 0,
            Ic = arguments.length > 4 ? arguments[4] : void 0;
          const rB = (yield this.http.post(`matchmake/${cB}/${Bc}`, {
            headers: {
              "X-Requested-With": "XMLHtttpRequest",
              Accept: "application/json",
              "Content-Type": "application/json"
            },
            body: JSON.stringify(nc)
          })).data;
          if (rB.error) throw new qB(rB.error, rB.code);
          return "reconnect" === cB && (rB.reconnectionToken = nc.reconnectionToken), yield this.consumeSeatReservation(rB, Vc, Ic)
        }))
      }
      createRoom(cB, Bc) {
        return new uc.Kc(cB, Bc)
      }
      buildEndpoint(cB) {
        let Bc = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          nc = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "ws",
          Vc = this.settings.searchParams || "";
        this.http.authToken && (Bc._authToken = this.http.authToken);
        for (const uc in Bc) Bc.hasOwnProperty(uc) && (Vc += (Vc ? "&" : "") + `${uc}=${Bc[uc]}`);
        "h3" === nc && (nc = "http");
        let Ic = this.settings.secure ? `${nc}s://` : `${nc}://`;
        cB.publicAddress ? Ic += `${cB.publicAddress}` : Ic += `${this.settings.hostname}${this.getEndpointPort()}${this.settings.pathname}`;
        const rB = `${Ic}/${cB.processId}/${cB.roomId}?${Vc}`;
        return this.urlBuilder ? this.urlBuilder(new URL(rB)) : rB
      }
      getHttpEndpoint() {
        let cB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
        const Bc = cB.startsWith("/") ? cB : `/${cB}`;
        let nc = `${this.settings.secure?"https":"http"}://${this.settings.hostname}${this.getEndpointPort()}${this.settings.pathname}${Bc}`;
        return this.settings.searchParams && (nc += `?${this.settings.searchParams}`), this.urlBuilder ? this.urlBuilder(new URL(nc)) : nc
      }
      getEndpointPort() {
        return 80 !== this.settings.port && 443 !== this.settings.port ? `:${this.settings.port}` : ""
      }
    }
    Tc.VERSION = "0.16.22", Bc.Client = Tc, Bc.MatchMakeError = qB
  },
  7999: (cB, Bc, nc) => {
    var Vc = nc(8006),
      Ic = nc(8020);
    Bc.Connection = class {
      constructor(cB) {
        if (this.events = {}, "h3" === cB) this.transport = new Vc.H3TransportTransport(this.events);
        else this.transport = new Ic.WebSocketTransport(this.events)
      }
      connect(cB, Bc) {
        this.transport.connect.call(this.transport, cB, Bc)
      }
      send(cB) {
        this.transport.send(cB)
      }
      sendUnreliable(cB) {
        this.transport.sendUnreliable(cB)
      }
      close(cB, Bc) {
        this.transport.close(cB, Bc)
      }
      get isOpen() {
        return this.transport.isOpen
      }
    }
  },
  8078: (cB, Bc, nc) => {
    var Vc = nc(7986);

    function Ic(cB) {
      var Bc = Object.create(null);
      return cB && Object.keys(cB).forEach((function(nc) {
        if ("default" !== nc) {
          var Vc = Object.getOwnPropertyDescriptor(cB, nc);
          Object.defineProperty(Bc, nc, Vc.get ? Vc : {
            enumerable: !0,
            get: function() {
              return cB[nc]
            }
          })
        }
      })), Bc.default = cB, Object.freeze(Bc)
    }
    var rB = Ic(nc(8082));
    Bc.HTTP = class {
      constructor(cB) {
        let Bc = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        this.client = cB, this.headers = Bc
      }
      get(cB) {
        let Bc = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        return this.request("get", cB, Bc)
      }
      post(cB) {
        let Bc = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        return this.request("post", cB, Bc)
      }
      del(cB) {
        let Bc = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        return this.request("del", cB, Bc)
      }
      put(cB) {
        let Bc = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        return this.request("put", cB, Bc)
      }
      request(cB, Bc) {
        let nc = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        return rB[cB](this.client.getHttpEndpoint(Bc), this.getOptions(nc)).catch((cB => {
          var Bc;
          if (cB.aborted) throw new Vc.AbortError("Request aborted");
          const nc = cB.statusCode,
            Ic = (null === (Bc = cB.data) || void 0 === Bc ? void 0 : Bc.error) || cB.statusMessage || cB.message;
          if (!nc && !Ic) throw cB;
          throw new Vc.ServerError(nc, Ic)
        }))
      }
      getOptions(cB) {
        return cB.headers = Object.assign({}, this.headers, cB.headers), this.authToken && (cB.headers.Authorization = `Bearer ${this.authToken}`), "undefined" !== typeof cc && cc.sys && cc.sys.isNative || (cB.withCredentials = !0), cB
      }
    }
  },
  8038: (cB, Bc) => {
    var nc, Vc;
    Bc.Protocol = void 0, (nc = Bc.Protocol || (Bc.Protocol = {}))[nc.HANDSHAKE = 9] = "HANDSHAKE", nc[nc.JOIN_ROOM = 10] = "JOIN_ROOM", nc[nc.ERROR = 11] = "ERROR", nc[nc.LEAVE_ROOM = 12] = "LEAVE_ROOM", nc[nc.ROOM_DATA = 13] = "ROOM_DATA", nc[nc.ROOM_STATE = 14] = "ROOM_STATE", nc[nc.ROOM_STATE_PATCH = 15] = "ROOM_STATE_PATCH", nc[nc.ROOM_DATA_SCHEMA = 16] = "ROOM_DATA_SCHEMA", nc[nc.ROOM_DATA_BYTES = 17] = "ROOM_DATA_BYTES", Bc.ErrorCode = void 0, (Vc = Bc.ErrorCode || (Bc.ErrorCode = {}))[Vc.MATCHMAKE_NO_HANDLER = 4210] = "MATCHMAKE_NO_HANDLER", Vc[Vc.MATCHMAKE_INVALID_CRITERIA = 4211] = "MATCHMAKE_INVALID_CRITERIA", Vc[Vc.MATCHMAKE_INVALID_ROOM_ID = 4212] = "MATCHMAKE_INVALID_ROOM_ID", Vc[Vc.MATCHMAKE_UNHANDLED = 4213] = "MATCHMAKE_UNHANDLED", Vc[Vc.MATCHMAKE_EXPIRED = 4214] = "MATCHMAKE_EXPIRED", Vc[Vc.AUTH_FAILED = 4215] = "AUTH_FAILED", Vc[Vc.APPLICATION_ERROR = 4216] = "APPLICATION_ERROR"
  },
  7993: (cB, Bc, nc) => {
    var Vc = nc(7999),
      Ic = nc(8038),
      rB = nc(8045),
      uc = nc(8052),
      sc = nc(8059),
      Mc = nc(8015),
      Pc = nc(8064),
      qB = nc(7986),
      Oc = nc(8073);
    class Tc {
      constructor(cB, Bc) {
        this.onStateChange = sc.createSignal(), this.onError = sc.createSignal(), this.yC = sc.createSignal(), this.onJoin = sc.createSignal(), this.hasJoined = !1, this.onMessageHandlers = uc.createNanoEvents(), this.roomId = null, this.name = cB, this.packr = new Oc.Packr, this.packr.encode(void 0), Bc && (this.hq = new(rB.getSerializer("schema")), this.rootSchema = Bc, this.hq.state = new Bc), this.onError(((cB, Bc) => {
          var nc;
          return null === (nc = console.warn) || void 0 === nc ? void 0 : nc.call(console, `colyseus.js - onError => (${cB}) ${Bc}`)
        })), this.yC((() => this.uq()))
      }
      connect(cB, Bc) {
        let nc = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : this,
          Ic = arguments.length > 3 ? arguments[3] : void 0,
          rB = arguments.length > 4 ? arguments[4] : void 0;
        const uc = new Vc.Connection(Ic.protocol);
        if (nc.connection = uc, uc.events.onmessage = Tc.prototype.onMessageCallback.bind(nc), uc.events.onclose = function(cB) {
            var Vc;
            if (!nc.hasJoined) return null === (Vc = console.warn) || void 0 === Vc || Vc.call(console, `Room connection was closed unexpectedly (${cB.code}): ${cB.reason}`), void nc.onError.invoke(cB.code, cB.reason);
            cB.code === qB.CloseCode.DEVMODE_RESTART && Bc ? Bc() : (nc.yC.invoke(cB.code, cB.reason), nc.destroy())
          }, uc.events.onerror = function(cB) {
            var Bc;
            null === (Bc = console.warn) || void 0 === Bc || Bc.call(console, `Room, onError (${cB.code}): ${cB.reason}`), nc.onError.invoke(cB.code, cB.reason)
          }, "h3" === Ic.protocol) {
          const Bc = new URL(cB);
          uc.connect(Bc.origin, Ic)
        } else uc.connect(cB, rB)
      }
      OV() {
        let cB = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
        return new Promise((Bc => {
          this.yC((cB => Bc(cB))), this.connection ? cB ? (this.packr.buffer[0] = Ic.Protocol.LEAVE_ROOM, this.connection.send(this.packr.buffer.subarray(0, 1))) : this.connection.close() : this.yC.invoke(qB.CloseCode.CONSENTED)
        }))
      }
      tC(cB, Bc) {
        return this.onMessageHandlers.on(this.getMessageHandlerKey(cB), Bc)
      }
      send(cB, Bc) {
        const nc = {
          offset: 1
        };
        this.packr.buffer[0] = Ic.Protocol.ROOM_DATA, "string" === typeof cB ? Mc.encode.string(this.packr.buffer, cB, nc) : Mc.encode.number(this.packr.buffer, cB, nc), this.packr.position = 0;
        const Vc = void 0 !== Bc ? this.packr.pack(Bc, 2048 + nc.offset) : this.packr.buffer.subarray(0, nc.offset);
        this.connection.send(Vc)
      }
      sendUnreliable(cB, Bc) {
        const nc = {
          offset: 1
        };
        this.packr.buffer[0] = Ic.Protocol.ROOM_DATA, "string" === typeof cB ? Mc.encode.string(this.packr.buffer, cB, nc) : Mc.encode.number(this.packr.buffer, cB, nc), this.packr.position = 0;
        const Vc = void 0 !== Bc ? this.packr.pack(Bc, 2048 + nc.offset) : this.packr.buffer.subarray(0, nc.offset);
        this.connection.sendUnreliable(Vc)
      }
      fD(cB, Bc) {
        const nc = {
          offset: 1
        };
        if (this.packr.buffer[0] = Ic.Protocol.ROOM_DATA_BYTES, "string" === typeof cB ? Mc.encode.string(this.packr.buffer, cB, nc) : Mc.encode.number(this.packr.buffer, cB, nc), Bc.byteLength + nc.offset > this.packr.buffer.byteLength) {
          const cB = new Uint8Array(nc.offset + Bc.byteLength);
          cB.set(this.packr.buffer), this.packr.useBuffer(cB)
        }
        this.packr.buffer.set(Bc, nc.offset), this.connection.send(this.packr.buffer.subarray(0, nc.offset + Bc.byteLength))
      }
      get state() {
        return this.hq.getState()
      }
      uq() {
        this.onJoin.clear(), this.onStateChange.clear(), this.onError.clear(), this.yC.clear(), this.onMessageHandlers.events = {}, this.hq instanceof Pc.DBc && (this.hq.an.root.callbacks = {})
      }
      onMessageCallback(cB) {
        const Bc = new Uint8Array(cB.data),
          nc = {
            offset: 1
          },
          Vc = Bc[0];
        if (Vc === Ic.Protocol.JOIN_ROOM) {
          const cB = Mc.decode.utf8Read(Bc, nc, Bc[nc.offset++]);
          if (this.serializerId = Mc.decode.utf8Read(Bc, nc, Bc[nc.offset++]), !this.hq) {
            const cB = rB.getSerializer(this.serializerId);
            this.hq = new cB
          }
          Bc.byteLength > nc.offset && this.hq.handshake && this.hq.handshake(Bc, nc), this.reconnectionToken = `${this.roomId}:${cB}`, this.hasJoined = !0, this.onJoin.invoke(), this.packr.buffer[0] = Ic.Protocol.JOIN_ROOM, this.connection.send(this.packr.buffer.subarray(0, 1))
        } else if (Vc === Ic.Protocol.ERROR) {
          const cB = Mc.decode.number(Bc, nc),
            Vc = Mc.decode.string(Bc, nc);
          this.onError.invoke(cB, Vc)
        } else if (Vc === Ic.Protocol.LEAVE_ROOM) this.OV();
        else if (Vc === Ic.Protocol.ROOM_STATE) this.hq.setState(Bc, nc), this.onStateChange.invoke(this.hq.getState());
        else if (Vc === Ic.Protocol.ROOM_STATE_PATCH) this.hq.patch(Bc, nc), this.onStateChange.invoke(this.hq.getState());
        else if (Vc === Ic.Protocol.ROOM_DATA) {
          const cB = Mc.decode.stringCheck(Bc, nc) ? Mc.decode.string(Bc, nc) : Mc.decode.number(Bc, nc),
            Vc = Bc.byteLength > nc.offset ? Oc.unpack(Bc, {
              start: nc.offset
            }) : void 0;
          this.dispatchMessage(cB, Vc)
        } else if (Vc === Ic.Protocol.ROOM_DATA_BYTES) {
          const cB = Mc.decode.stringCheck(Bc, nc) ? Mc.decode.string(Bc, nc) : Mc.decode.number(Bc, nc);
          this.dispatchMessage(cB, Bc.subarray(nc.offset))
        }
      }
      dispatchMessage(cB, Bc) {
        var nc;
        const Vc = this.getMessageHandlerKey(cB);
        this.onMessageHandlers.events[Vc] ? this.onMessageHandlers.emit(Vc, Bc) : this.onMessageHandlers.events["*"] ? this.onMessageHandlers.emit("*", cB, Bc) : null === (nc = console.warn) || void 0 === nc || nc.call(console, `colyseus.js: onMessage() not registered for type '${cB}'.`)
      }
      destroy() {
        this.hq && this.hq.teardown()
      }
      getMessageHandlerKey(cB) {
        switch (typeof cB) {
          case "string":
            return cB;
          case "number":
            return `i${cB}`;
          default:
            throw new Error("invalid message type.")
        }
      }
    }
    Bc.Kc = Tc
  },
  8092: (cB, Bc, nc) => {
    var Vc = nc(7982);
    let Ic;

    function rB() {
      if (!Ic) try {
        Ic = "undefined" !== typeof cc && cc.sys && cc.sys.localStorage ? cc.sys.localStorage : window.localStorage
      } catch (cB) {}
      return Ic || "undefined" === typeof globalThis.indexedDB || (Ic = new uc), Ic || (Ic = {
        cache: {},
        setItem: function(cB, Bc) {
          this.cache[cB] = Bc
        },
        getItem: function(cB) {
          this.cache[cB]
        },
        removeItem: function(cB) {
          delete this.cache[cB]
        }
      }), Ic
    }
    class uc {
      constructor() {
        this.dbPromise = new Promise((cB => {
          const Bc = indexedDB.open("_colyseus_storage", 1);
          Bc.onupgradeneeded = () => Bc.result.createObjectStore("store"), Bc.onsuccess = () => cB(Bc.result)
        }))
      }
      tx(cB, Bc) {
        return Vc.__awaiter(this, void 0, void 0, (function*() {
          const nc = (yield this.dbPromise).transaction("store", cB).objectStore("store");
          return Bc(nc)
        }))
      }
      setItem(cB, Bc) {
        return this.tx("readwrite", (nc => nc.put(Bc, cB))).then()
      }
      getItem(cB) {
        return Vc.__awaiter(this, void 0, void 0, (function*() {
          const Bc = yield this.tx("readonly", (Bc => Bc.get(cB)));
          return new Promise((cB => {
            Bc.onsuccess = () => cB(Bc.result)
          }))
        }))
      }
      removeItem(cB) {
        return this.tx("readwrite", (Bc => Bc.delete(cB))).then()
      }
    }
    Bc.getItem = function(cB, Bc) {
      const nc = rB().getItem(cB);
      "undefined" !== typeof Promise && nc instanceof Promise ? nc.then((cB => Bc(cB))) : Bc(nc)
    }, Bc.removeItem = function(cB) {
      rB().removeItem(cB)
    }, Bc.setItem = function(cB, Bc) {
      rB().setItem(cB, Bc)
    }
  },
  8052: (cB, Bc) => {
    Bc.createNanoEvents = () => ({
      emit(cB) {
        let Bc = this.events[cB] || [];
        for (var nc = arguments.length, Vc = new Array(nc > 1 ? nc - 1 : 0), Ic = 1; Ic < nc; Ic++) Vc[Ic - 1] = arguments[Ic];
        for (let rB = 0, uc = Bc.length; rB < uc; rB++) Bc[rB](...Vc)
      },
      events: {},
      on(cB, Bc) {
        var nc;
        return (null === (nc = this.events[cB]) || void 0 === nc ? void 0 : nc.push(Bc)) || (this.events[cB] = [Bc]), () => {
          var nc;
          this.events[cB] = null === (nc = this.events[cB]) || void 0 === nc ? void 0 : nc.filter((cB => Bc !== cB))
        }
      }
    })
  },
  8059: (cB, Bc) => {
    class nc {
      constructor() {
        this.handlers = []
      }
      register(cB) {
        return this.handlers.push(cB), this
      }
      invoke() {
        for (var cB = arguments.length, Bc = new Array(cB), nc = 0; nc < cB; nc++) Bc[nc] = arguments[nc];
        this.handlers.forEach((cB => cB.apply(this, Bc)))
      }
      invokeAsync() {
        for (var cB = arguments.length, Bc = new Array(cB), nc = 0; nc < cB; nc++) Bc[nc] = arguments[nc];
        return Promise.all(this.handlers.map((cB => cB.apply(this, Bc))))
      }
      remove(cB) {
        const Bc = this.handlers.indexOf(cB);
        this.handlers[Bc] = this.handlers[this.handlers.length - 1], this.handlers.pop()
      }
      clear() {
        this.handlers = []
      }
    }
    Bc.EventEmitter = nc, Bc.createSignal = function() {
      const cB = new nc;

      function Bc(Bc) {
        return cB.register(Bc, null === this)
      }
      return Bc.once = Bc => {
        const nc = function() {
          for (var Vc = arguments.length, Ic = new Array(Vc), rB = 0; rB < Vc; rB++) Ic[rB] = arguments[rB];
          Bc.apply(this, Ic), cB.remove(nc)
        };
        cB.register(nc)
      }, Bc.remove = Bc => cB.remove(Bc), Bc.invoke = function() {
        return cB.invoke(...arguments)
      }, Bc.invokeAsync = function() {
        return cB.invokeAsync(...arguments)
      }, Bc.clear = () => cB.clear(), Bc
    }
  },
  7986: (cB, Bc) => {
    var nc;
    Bc.CloseCode = void 0, (nc = Bc.CloseCode || (Bc.CloseCode = {}))[nc.CONSENTED = 4e3] = "CONSENTED", nc[nc.DEVMODE_RESTART = 4010] = "DEVMODE_RESTART";
    class Vc extends Error {
      constructor(cB, Bc) {
        super(Bc), this.name = "ServerError", this.code = cB
      }
    }
    class Ic extends Error {
      constructor(cB) {
        super(cB), this.name = "AbortError"
      }
    }
    Bc.AbortError = Ic, Bc.ServerError = Vc
  },
  7964: (cB, Bc, nc) => {
    nc(7970);
    var Vc = nc(7975),
      Ic = nc(8038),
      rB = nc(7993),
      uc = nc(8087),
      sc = nc(7986),
      Mc = nc(8064),
      Pc = nc(8102),
      qB = nc(8045);
    qB.registerSerializer("schema", Mc.DBc), qB.registerSerializer("none", Pc.NoneSerializer), Bc.Client = Vc.Client, Bc.MatchMakeError = Vc.MatchMakeError, Object.defineProperty(Bc, "ErrorCode", {
      enumerable: !0,
      get: function() {
        return Ic.ErrorCode
      }
    }), Object.defineProperty(Bc, "Protocol", {
      enumerable: !0,
      get: function() {
        return Ic.Protocol
      }
    }), Bc.Kc = rB.Kc, Bc.Auth = uc.Auth, Bc.ServerError = sc.ServerError, Bc.DBc = Mc.DBc, Bc.getStateCallbacks = Mc.getStateCallbacks, Bc.registerSerializer = qB.registerSerializer
  },
  7970: () => {
    ArrayBuffer.isView || (ArrayBuffer.isView = cB => null !== cB && "object" === typeof cB && cB.buffer instanceof ArrayBuffer), "undefined" === typeof globalThis && "undefined" !== typeof window && (window.globalThis = window), "undefined" === typeof FormData && (globalThis.FormData = class {})
  },
  8102: (cB, Bc) => {
    Bc.NoneSerializer = class {
      setState(cB) {}
      getState() {
        return null
      }
      patch(cB) {}
      teardown() {}
      handshake(cB) {}
    }
  },
  8064: (cB, Bc, nc) => {
    var Vc = nc(8015);
    Bc.DBc = class {
      setState(cB, Bc) {
        this.an.decode(cB, Bc)
      }
      getState() {
        return this.state
      }
      patch(cB, Bc) {
        return this.an.decode(cB, Bc)
      }
      teardown() {
        this.an.root.clearRefs()
      }
      handshake(cB, Bc) {
        this.state ? (Vc.Reflection.decode(cB, Bc), this.an = new Vc.Decoder(this.state)) : (this.an = Vc.Reflection.decode(cB, Bc), this.state = this.an.state)
      }
    }, Bc.getStateCallbacks = function(cB) {
      try {
        return Vc.getDecoderStateCallbacks(cB.hq.an)
      } catch (Bc) {
        return
      }
    }
  },
  8045: (cB, Bc) => {
    const nc = {};
    Bc.getSerializer = function(cB) {
      const Bc = nc[cB];
      if (!Bc) throw new Error("missing serializer: " + cB);
      return Bc
    }, Bc.registerSerializer = function(cB, Bc) {
      nc[cB] = Bc
    }
  },
  8006: (cB, Bc, nc) => {
    var Vc = nc(7982),
      Ic = nc(8015);
    Bc.H3TransportTransport = class {
      constructor(cB) {
        this.events = cB, this.isOpen = !1, this.lengthPrefixBuffer = new Uint8Array(9)
      }
      connect(cB) {
        let Bc = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        const nc = Bc.fingerprint && {
          serverCertificateHashes: [{
            algorithm: "sha-256",
            value: new Uint8Array(Bc.fingerprint).buffer
          }]
        } || void 0;
        this.wt = new WebTransport(cB, nc), this.wt.ready.then((cB => {
          console.log("WebTransport ready!", cB), this.isOpen = !0, this.unreliableReader = this.wt.datagrams.readable.getReader(), this.unreliableWriter = this.wt.datagrams.writable.getWriter();
          this.wt.incomingBidirectionalStreams.getReader().read().then((cB => {
            this.reader = cB.value.readable.getReader(), this.writer = cB.value.writable.getWriter(), this.sendSeatReservation(Bc.room.roomId, Bc.sessionId, Bc.reconnectionToken), this.readIncomingData(), this.readIncomingUnreliableData()
          })).catch((cB => {
            console.error("failed to read incoming stream", cB), console.error("TODO: close the connection")
          }))
        })).catch((cB => {
          console.log("WebTransport not ready!", cB), this._close()
        })), this.wt.closed.then((cB => {
          console.log("WebTransport closed w/ success", cB), this.events.onclose({
            code: cB.closeCode,
            reason: cB.reason
          })
        })).catch((cB => {
          console.log("WebTransport closed w/ error", cB), this.events.onerror(cB), this.events.onclose({
            code: cB.closeCode,
            reason: cB.reason
          })
        })).finally((() => {
          this._close()
        }))
      }
      send(cB) {
        const Bc = Ic.encode.number(this.lengthPrefixBuffer, cB.length, {
            offset: 0
          }),
          nc = new Uint8Array(Bc + cB.length);
        nc.set(this.lengthPrefixBuffer.subarray(0, Bc), 0), nc.set(cB, Bc), this.writer.write(nc)
      }
      sendUnreliable(cB) {
        const Bc = Ic.encode.number(this.lengthPrefixBuffer, cB.length, {
            offset: 0
          }),
          nc = new Uint8Array(Bc + cB.length);
        nc.set(this.lengthPrefixBuffer.subarray(0, Bc), 0), nc.set(cB, Bc), this.unreliableWriter.write(nc)
      }
      close(cB, Bc) {
        try {
          this.wt.close({
            closeCode: cB,
            reason: Bc
          })
        } catch (nc) {
          console.error(nc)
        }
      }
      readIncomingData() {
        return Vc.__awaiter(this, void 0, void 0, (function*() {
          let cB;
          for (; this.isOpen;) {
            try {
              cB = yield this.reader.read();
              const Bc = cB.value,
                nc = {
                  offset: 0
                };
              do {
                const cB = Ic.decode.number(Bc, nc);
                this.events.onmessage({
                  data: Bc.subarray(nc.offset, nc.offset + cB)
                }), nc.offset += cB
              } while (nc.offset < Bc.length)
            } catch (Bc) {
              -1 === Bc.message.indexOf("session is closed") && console.error("H3Transport: failed to read incoming data", Bc);
              break
            }
            if (cB.done) break
          }
        }))
      }
      readIncomingUnreliableData() {
        return Vc.__awaiter(this, void 0, void 0, (function*() {
          let cB;
          for (; this.isOpen;) {
            try {
              cB = yield this.unreliableReader.read();
              const Bc = cB.value,
                nc = {
                  offset: 0
                };
              do {
                const cB = Ic.decode.number(Bc, nc);
                this.events.onmessage({
                  data: Bc.subarray(nc.offset, nc.offset + cB)
                }), nc.offset += cB
              } while (nc.offset < Bc.length)
            } catch (Bc) {
              -1 === Bc.message.indexOf("session is closed") && console.error("H3Transport: failed to read incoming data", Bc);
              break
            }
            if (cB.done) break
          }
        }))
      }
      sendSeatReservation(cB, Bc, nc) {
        const Vc = {
            offset: 0
          },
          rB = [];
        Ic.encode.string(rB, cB, Vc), Ic.encode.string(rB, Bc, Vc), nc && Ic.encode.string(rB, nc, Vc), this.writer.write(new Uint8Array(rB).buffer)
      }
      _close() {
        this.isOpen = !1
      }
    }
  },
  8020: (cB, Bc, nc) => {
    var Vc = nc(8029);
    const Ic = globalThis.WebSocket || Vc;
    Bc.WebSocketTransport = class {
      constructor(cB) {
        this.events = cB
      }
      send(cB) {
        this.ws.send(cB)
      }
      sendUnreliable(cB) {
        console.warn("colyseus.js: The WebSocket transport does not support unreliable messages")
      }
      connect(cB, Bc) {
        try {
          this.ws = new Ic(cB, {
            headers: Bc,
            protocols: this.protocols
          })
        } catch (nc) {
          this.ws = new Ic(cB, this.protocols)
        }
        this.ws.binaryType = "arraybuffer", this.ws.onopen = this.events.onopen, this.ws.onmessage = this.events.onmessage, this.ws.onclose = this.events.onclose, this.ws.onerror = this.events.onerror
      }
      close(cB, Bc) {
        this.ws.close(cB, Bc)
      }
      get isOpen() {
        return this.ws.readyState === Ic.OPEN
      }
    }
  },
  8029: cB => {
    cB.exports = function() {
      throw new Error("ws does not work in the browser. Browser clients must use the native WebSocket object")
    }
  },
  8082: (cB, Bc, nc) => {
    function Vc(cB, Bc) {
      Bc.headers = cB.headers || {}, Bc.statusMessage = cB.statusText, Bc.statusCode = cB.status, Bc.data = cB.response
    }

    function Ic(cB, Bc, nc) {
      return new Promise((function(Ic, rB) {
        nc = nc || {};
        var uc, sc, Mc, Pc = new XMLHttpRequest,
          qB = nc.body,
          Oc = nc.headers || {};
        for (uc in nc.timeout && (Pc.timeout = nc.timeout), Pc.ontimeout = Pc.onerror = function(cB) {
            cB.timeout = "timeout" == cB.type, rB(cB)
          }, Pc.onabort = function(cB) {
            cB.aborted = !0, rB(cB)
          }, Pc.open(cB, Bc.href || Bc), Pc.onload = function() {
            for (Mc = Pc.getAllResponseHeaders().trim().split(/[\r\n]+/), Vc(Pc, Pc); sc = Mc.shift();) sc = sc.split(": "), Pc.headers[sc.shift().toLowerCase()] = sc.join(": ");
            if ((sc = Pc.headers["content-type"]) && ~sc.indexOf("application/json")) try {
              Pc.data = JSON.parse(Pc.data, nc.reviver)
            } catch (cB) {
              return Vc(Pc, cB), rB(cB)
            }(Pc.status >= 400 ? rB : Ic)(Pc)
          }, typeof FormData < "u" && qB instanceof FormData || qB && "object" == typeof qB && (Oc["content-type"] = "application/json", qB = JSON.stringify(qB)), Pc.withCredentials = !!nc.withCredentials, Oc) Pc.setRequestHeader(uc, Oc[uc]);
        Pc.send(qB), nc.signal && nc.signal.addEventListener("abort", (function() {
          Pc.abort()
        }))
      }))
    }
    nc.r(Bc), nc.d(Bc, {
      del: () => Mc,
      get: () => rB,
      patch: () => sc,
      post: () => uc,
      put: () => Pc,
      send: () => Ic
    });
    var rB = Ic.bind(Ic, "GET"),
      uc = Ic.bind(Ic, "POST"),
      sc = Ic.bind(Ic, "PATCH"),
      Mc = Ic.bind(Ic, "DELETE"),
      Pc = Ic.bind(Ic, "PUT")
  },
  8073: (cB, Bc, nc) => {
    var Vc, Ic, rB;
    nc.r(Bc), nc.d(Bc, {
      ALWAYS: () => RB,
      C1: () => hc,
      DECIMAL_FIT: () => xn,
      DECIMAL_ROUND: () => KB,
      Decoder: () => MB,
      Encoder: () => JB,
      FLOAT32_OPTIONS: () => fB,
      NEVER: () => jn,
      Packr: () => DB,
      RESERVE_START_SPACE: () => GB,
      RESET_BUFFER_MODE: () => AB,
      REUSE_BUFFER_MODE: () => dB,
      Unpackr: () => Uc,
      addExtension: () => wB,
      clearSource: () => uB,
      decode: () => TB,
      decodeIter: () => cV,
      encode: () => FB,
      encodeIter: () => Bn,
      isNativeAccelerationEnabled: () => kB,
      mapsAsObjects: () => Vn,
      pack: () => HB,
      roundFloat32: () => zn,
      unpack: () => qn,
      unpackMultiple: () => OB,
      useRecords: () => nn
    });
    try {
      Vc = new TextDecoder
    } catch (In) {}
    var uc = 0;
    const sc = [];
    var Mc, Pc, qB, Oc, Tc, fc = sc,
      mB = 0,
      ec = {},
      tB = 0,
      Sc = 0,
      yB = [],
      zB = {
        useRecords: !1,
        mapsAsObjects: !0
      };
    class pc {}
    const hc = new pc;
    hc.name = "MessagePack 0xC1";
    var aB, lc, Yc, Lc = !1,
      gB = 2;
    try {
      new Function("")
    } catch (In) {
      gB = 1 / 0
    }
    class Uc {
      constructor(cB) {
        cB && (!1 === cB.useRecords && void 0 === cB.mapsAsObjects && (cB.mapsAsObjects = !0), cB.sequential && !1 !== cB.trusted && (cB.trusted = !0, cB.structures || 0 == cB.useRecords || (cB.structures = [], cB.maxSharedStructures || (cB.maxSharedStructures = 0))), cB.structures ? cB.structures.sharedLength = cB.structures.length : cB.getStructures && ((cB.structures = []).uninitialized = !0, cB.structures.sharedLength = 0), cB.int64AsNumber && (cB.int64AsType = "number")), Object.assign(this, cB)
      }
      unpack(cB, Bc) {
        if (Ic) return rn((() => (uB(), this ? this.unpack(cB, Bc) : Uc.prototype.unpack.call(zB, cB, Bc))));
        cB.buffer || cB.constructor !== ArrayBuffer || (cB = "undefined" !== typeof Buffer ? Buffer.from(cB) : new Uint8Array(cB)), "object" === typeof Bc ? (rB = Bc.end || cB.length, uc = Bc.start || 0) : (uc = 0, rB = Bc > -1 ? Bc : cB.length), mB = 0, Sc = 0, Pc = null, fc = sc, qB = null, Ic = cB;
        try {
          Tc = cB.dataView || (cB.dataView = new DataView(cB.buffer, cB.byteOffset, cB.byteLength))
        } catch (In) {
          if (Ic = null, cB instanceof Uint8Array) throw In;
          throw new Error("Source must be a Uint8Array or Buffer but was a " + (cB && "object" == typeof cB ? cB.constructor.name : typeof cB))
        }
        if (this instanceof Uc) {
          if (ec = this, this.structures) return Mc = this.structures, bB(Bc);
          (!Mc || Mc.length > 0) && (Mc = [])
        } else ec = zB, (!Mc || Mc.length > 0) && (Mc = []);
        return bB(Bc)
      }
      unpackMultiple(cB, Bc) {
        let nc, Vc = 0;
        try {
          Lc = !0;
          let Ic = cB.length,
            rB = this ? this.unpack(cB, Ic) : PB.unpack(cB, Ic);
          if (!Bc) {
            for (nc = [rB]; uc < Ic;) Vc = uc, nc.push(bB());
            return nc
          }
          if (!1 === Bc(rB, Vc, uc)) return;
          for (; uc < Ic;)
            if (Vc = uc, !1 === Bc(bB(), Vc, uc)) return
        } catch (In) {
          throw In.lastPosition = Vc, In.values = nc, In
        } finally {
          Lc = !1, uB()
        }
      }
      _mergeStructures(cB, Bc) {
        lc && (cB = lc.call(this, cB)), cB = cB || [], Object.isFrozen(cB) && (cB = cB.map((cB => cB.slice(0))));
        for (let nc = 0, Vc = cB.length; nc < Vc; nc++) {
          let Bc = cB[nc];
          Bc && (Bc.isShared = !0, nc >= 32 && (Bc.highByte = nc - 32 >> 5))
        }
        cB.sharedLength = cB.length;
        for (let nc in Bc || [])
          if (nc >= 0) {
            let Vc = cB[nc],
              Ic = Bc[nc];
            Ic && (Vc && ((cB.restoreStructures || (cB.restoreStructures = []))[nc] = Vc), cB[nc] = Ic)
          } return this.structures = cB
      }
      decode(cB, Bc) {
        return this.unpack(cB, Bc)
      }
    }

    function bB(cB) {
      try {
        if (!ec.trusted && !Lc) {
          let cB = Mc.sharedLength || 0;
          cB < Mc.length && (Mc.length = cB)
        }
        let Bc;
        if (ec.randomAccessStructure && Ic[uc] < 64 && Ic[uc] >= 32 && aB ? (Bc = aB(Ic, uc, rB, ec), Ic = null, cB && cB.lazy || !Bc || (Bc = Bc.toJSON()), uc = rB) : Bc = Qc(), qB && (uc = qB.postBundlePosition, qB = null), Lc && (Mc.restoreStructures = null), uc == rB) Mc && Mc.restoreStructures && Zc(), Mc = null, Ic = null, Oc && (Oc = null);
        else {
          if (uc > rB) throw new Error("Unexpected end of MessagePack data");
          if (!Lc) {
            let cB;
            try {
              cB = JSON.stringify(Bc, ((cB, Bc) => "bigint" === typeof Bc ? `${Bc}n` : Bc)).slice(0, 100)
            } catch (In) {
              cB = "(JSON view not available " + In + ")"
            }
            throw new Error("Data read, but end of buffer not reached " + cB)
          }
        }
        return Bc
      } catch (In) {
        throw Mc && Mc.restoreStructures && Zc(), uB(), (In instanceof RangeError || In.message.startsWith("Unexpected end of buffer") || uc > rB) && (In.incomplete = !0), In
      }
    }

    function Zc() {
      for (let cB in Mc.restoreStructures) Mc[cB] = Mc.restoreStructures[cB];
      Mc.restoreStructures = null
    }

    function Qc() {
      let cB = Ic[uc++];
      if (cB < 160) {
        if (cB < 128) {
          if (cB < 64) return cB;
          {
            let Bc = Mc[63 & cB] || ec.getStructures && Nc()[63 & cB];
            return Bc ? (Bc.read || (Bc.read = vB(Bc, 63 & cB)), Bc.read()) : cB
          }
        }
        if (cB < 144) {
          if (cB -= 128, ec.mapsAsObjects) {
            let Bc = {};
            for (let nc = 0; nc < cB; nc++) {
              let cB = Ac();
              "__proto__" === cB && (cB = "__proto_"), Bc[cB] = Qc()
            }
            return Bc
          } {
            let Bc = new Map;
            for (let nc = 0; nc < cB; nc++) Bc.set(Qc(), Qc());
            return Bc
          }
        } {
          cB -= 144;
          let Bc = new Array(cB);
          for (let nc = 0; nc < cB; nc++) Bc[nc] = Qc();
          return ec.freezeData ? Object.freeze(Bc) : Bc
        }
      }
      if (cB < 192) {
        let Bc = cB - 160;
        if (Sc >= uc) return Pc.slice(uc - tB, (uc += Bc) - tB);
        if (0 == Sc && rB < 140) {
          let cB = Bc < 16 ? Rc(Bc) : jB(Bc);
          if (null != cB) return cB
        }
        return Ec(Bc)
      } {
        let Bc;
        switch (cB) {
          case 192:
            return null;
          case 193:
            return qB ? (Bc = Qc(), Bc > 0 ? qB[1].slice(qB.position1, qB.position1 += Bc) : qB[0].slice(qB.position0, qB.position0 -= Bc)) : hc;
          case 194:
            return !1;
          case 195:
            return !0;
          case 196:
            if (Bc = Ic[uc++], void 0 === Bc) throw new Error("Unexpected end of buffer");
            return Kc(Bc);
          case 197:
            return Bc = Tc.getUint16(uc), uc += 2, Kc(Bc);
          case 198:
            return Bc = Tc.getUint32(uc), uc += 4, Kc(Bc);
          case 199:
            return xB(Ic[uc++]);
          case 200:
            return Bc = Tc.getUint16(uc), uc += 2, xB(Bc);
          case 201:
            return Bc = Tc.getUint32(uc), uc += 4, xB(Bc);
          case 202:
            if (Bc = Tc.getFloat32(uc), ec.useFloat32 > 2) {
              let cB = sB[(127 & Ic[uc]) << 1 | Ic[uc + 1] >> 7];
              return uc += 4, (cB * Bc + (Bc > 0 ? .5 : -.5) | 0) / cB
            }
            return uc += 4, Bc;
          case 203:
            return Bc = Tc.getFloat64(uc), uc += 8, Bc;
          case 204:
            return Ic[uc++];
          case 205:
            return Bc = Tc.getUint16(uc), uc += 2, Bc;
          case 206:
            return Bc = Tc.getUint32(uc), uc += 4, Bc;
          case 207:
            return "number" === ec.int64AsType ? (Bc = 4294967296 * Tc.getUint32(uc), Bc += Tc.getUint32(uc + 4)) : "string" === ec.int64AsType ? Bc = Tc.getBigUint64(uc).toString() : "auto" === ec.int64AsType ? (Bc = Tc.getBigUint64(uc), Bc <= BigInt(2) << BigInt(52) && (Bc = Number(Bc))) : Bc = Tc.getBigUint64(uc), uc += 8, Bc;
          case 208:
            return Tc.getInt8(uc++);
          case 209:
            return Bc = Tc.getInt16(uc), uc += 2, Bc;
          case 210:
            return Bc = Tc.getInt32(uc), uc += 4, Bc;
          case 211:
            return "number" === ec.int64AsType ? (Bc = 4294967296 * Tc.getInt32(uc), Bc += Tc.getUint32(uc + 4)) : "string" === ec.int64AsType ? Bc = Tc.getBigInt64(uc).toString() : "auto" === ec.int64AsType ? (Bc = Tc.getBigInt64(uc), Bc >= BigInt(-2) << BigInt(52) && Bc <= BigInt(2) << BigInt(52) && (Bc = Number(Bc))) : Bc = Tc.getBigInt64(uc), uc += 8, Bc;
          case 212:
            if (Bc = Ic[uc++], 114 == Bc) return cn(63 & Ic[uc++]);
            {
              let cB = yB[Bc];
              if (cB) return cB.read ? (uc++, cB.read(Qc())) : cB.noBuffer ? (uc++, cB()) : cB(Ic.subarray(uc, ++uc));
              throw new Error("Unknown extension " + Bc)
            }
          case 213:
            return Bc = Ic[uc], 114 == Bc ? (uc++, cn(63 & Ic[uc++], Ic[uc++])) : xB(2);
          case 214:
            return xB(4);
          case 215:
            return xB(8);
          case 216:
            return xB(16);
          case 217:
            return Bc = Ic[uc++], Sc >= uc ? Pc.slice(uc - tB, (uc += Bc) - tB) : oc(Bc);
          case 218:
            return Bc = Tc.getUint16(uc), Sc >= (uc += 2) ? Pc.slice(uc - tB, (uc += Bc) - tB) : Wc(Bc);
          case 219:
            return Bc = Tc.getUint32(uc), Sc >= (uc += 4) ? Pc.slice(uc - tB, (uc += Bc) - tB) : wc(Bc);
          case 220:
            return Bc = Tc.getUint16(uc), uc += 2, Hc(Bc);
          case 221:
            return Bc = Tc.getUint32(uc), uc += 4, Hc(Bc);
          case 222:
            return Bc = Tc.getUint16(uc), uc += 2, Fc(Bc);
          case 223:
            return Bc = Tc.getUint32(uc), uc += 4, Fc(Bc);
          default:
            if (cB >= 224) return cB - 256;
            if (void 0 === cB) {
              let cB = new Error("Unexpected end of MessagePack data");
              throw cB.incomplete = !0, cB
            }
            throw new Error("Unknown MessagePack token " + cB)
        }
      }
    }
    const Cc = /^[a-zA-Z_$][a-zA-Z\d_$]*$/;

    function vB(cB, Bc) {
      function nc() {
        if (nc.count++ > gB) {
          let nc = cB.read = new Function("r", "return function(){return " + (ec.freezeData ? "Object.freeze" : "") + "({" + cB.map((cB => "__proto__" === cB ? "__proto_:r()" : Cc.test(cB) ? cB + ":r()" : "[" + JSON.stringify(cB) + "]:r()")).join(",") + "})}")(Qc);
          return 0 === cB.highByte && (cB.read = Dc(Bc, cB.read)), nc()
        }
        let Vc = {};
        for (let Bc = 0, nc = cB.length; Bc < nc; Bc++) {
          let nc = cB[Bc];
          "__proto__" === nc && (nc = "__proto_"), Vc[nc] = Qc()
        }
        return ec.freezeData ? Object.freeze(Vc) : Vc
      }
      return nc.count = 0, 0 === cB.highByte ? Dc(Bc, nc) : nc
    }
    const Dc = (cB, Bc) => function() {
      let nc = Ic[uc++];
      if (0 === nc) return Bc();
      let Vc = cB < 32 ? -(cB + (nc << 5)) : cB + (nc << 5),
        rB = Mc[Vc] || Nc()[Vc];
      if (!rB) throw new Error("Record id is not defined for " + Vc);
      return rB.read || (rB.read = vB(rB, cB)), rB.read()
    };

    function Nc() {
      let cB = rn((() => (Ic = null, ec.getStructures())));
      return Mc = ec._mergeStructures(cB, Mc)
    }
    var Ec = Xc,
      oc = Xc,
      Wc = Xc,
      wc = Xc;
    let kB = !1;

    function Xc(cB) {
      let Bc;
      if (cB < 16 && (Bc = Rc(cB))) return Bc;
      if (cB > 64 && Vc) return Vc.decode(Ic.subarray(uc, uc += cB));
      const nc = uc + cB,
        rB = [];
      for (Bc = ""; uc < nc;) {
        const cB = Ic[uc++];
        if (0 === (128 & cB)) rB.push(cB);
        else if (192 === (224 & cB)) {
          const Bc = 63 & Ic[uc++];
          rB.push((31 & cB) << 6 | Bc)
        } else if (224 === (240 & cB)) {
          const Bc = 63 & Ic[uc++],
            nc = 63 & Ic[uc++];
          rB.push((31 & cB) << 12 | Bc << 6 | nc)
        } else if (240 === (248 & cB)) {
          let Bc = (7 & cB) << 18 | (63 & Ic[uc++]) << 12 | (63 & Ic[uc++]) << 6 | 63 & Ic[uc++];
          Bc > 65535 && (Bc -= 65536, rB.push(Bc >>> 10 & 1023 | 55296), Bc = 56320 | 1023 & Bc), rB.push(Bc)
        } else rB.push(cB);
        rB.length >= 4096 && (Bc += Jc.apply(String, rB), rB.length = 0)
      }
      return rB.length > 0 && (Bc += Jc.apply(String, rB)), Bc
    }

    function Hc(cB) {
      let Bc = new Array(cB);
      for (let nc = 0; nc < cB; nc++) Bc[nc] = Qc();
      return ec.freezeData ? Object.freeze(Bc) : Bc
    }

    function Fc(cB) {
      if (ec.mapsAsObjects) {
        let Bc = {};
        for (let nc = 0; nc < cB; nc++) {
          let cB = Ac();
          "__proto__" === cB && (cB = "__proto_"), Bc[cB] = Qc()
        }
        return Bc
      } {
        let Bc = new Map;
        for (let nc = 0; nc < cB; nc++) Bc.set(Qc(), Qc());
        return Bc
      }
    }
    var Jc = String.fromCharCode;

    function jB(cB) {
      let Bc = uc,
        nc = new Array(cB);
      for (let Vc = 0; Vc < cB; Vc++) {
        const cB = Ic[uc++];
        if ((128 & cB) > 0) return void(uc = Bc);
        nc[Vc] = cB
      }
      return Jc.apply(String, nc)
    }

    function Rc(cB) {
      if (cB < 4) {
        if (cB < 2) {
          if (0 === cB) return "";
          {
            let cB = Ic[uc++];
            return (128 & cB) > 1 ? void(uc -= 1) : Jc(cB)
          }
        } {
          let Bc = Ic[uc++],
            nc = Ic[uc++];
          if ((128 & Bc) > 0 || (128 & nc) > 0) return void(uc -= 2);
          if (cB < 3) return Jc(Bc, nc);
          let Vc = Ic[uc++];
          return (128 & Vc) > 0 ? void(uc -= 3) : Jc(Bc, nc, Vc)
        }
      } {
        let Bc = Ic[uc++],
          nc = Ic[uc++],
          Vc = Ic[uc++],
          rB = Ic[uc++];
        if ((128 & Bc) > 0 || (128 & nc) > 0 || (128 & Vc) > 0 || (128 & rB) > 0) return void(uc -= 4);
        if (cB < 6) {
          if (4 === cB) return Jc(Bc, nc, Vc, rB);
          {
            let cB = Ic[uc++];
            return (128 & cB) > 0 ? void(uc -= 5) : Jc(Bc, nc, Vc, rB, cB)
          }
        }
        if (cB < 8) {
          let sc = Ic[uc++],
            Mc = Ic[uc++];
          if ((128 & sc) > 0 || (128 & Mc) > 0) return void(uc -= 6);
          if (cB < 7) return Jc(Bc, nc, Vc, rB, sc, Mc);
          let Pc = Ic[uc++];
          return (128 & Pc) > 0 ? void(uc -= 7) : Jc(Bc, nc, Vc, rB, sc, Mc, Pc)
        } {
          let sc = Ic[uc++],
            Mc = Ic[uc++],
            Pc = Ic[uc++],
            qB = Ic[uc++];
          if ((128 & sc) > 0 || (128 & Mc) > 0 || (128 & Pc) > 0 || (128 & qB) > 0) return void(uc -= 8);
          if (cB < 10) {
            if (8 === cB) return Jc(Bc, nc, Vc, rB, sc, Mc, Pc, qB);
            {
              let cB = Ic[uc++];
              return (128 & cB) > 0 ? void(uc -= 9) : Jc(Bc, nc, Vc, rB, sc, Mc, Pc, qB, cB)
            }
          }
          if (cB < 12) {
            let Oc = Ic[uc++],
              Tc = Ic[uc++];
            if ((128 & Oc) > 0 || (128 & Tc) > 0) return void(uc -= 10);
            if (cB < 11) return Jc(Bc, nc, Vc, rB, sc, Mc, Pc, qB, Oc, Tc);
            let fc = Ic[uc++];
            return (128 & fc) > 0 ? void(uc -= 11) : Jc(Bc, nc, Vc, rB, sc, Mc, Pc, qB, Oc, Tc, fc)
          } {
            let Oc = Ic[uc++],
              Tc = Ic[uc++],
              fc = Ic[uc++],
              mB = Ic[uc++];
            if ((128 & Oc) > 0 || (128 & Tc) > 0 || (128 & fc) > 0 || (128 & mB) > 0) return void(uc -= 12);
            if (cB < 14) {
              if (12 === cB) return Jc(Bc, nc, Vc, rB, sc, Mc, Pc, qB, Oc, Tc, fc, mB);
              {
                let cB = Ic[uc++];
                return (128 & cB) > 0 ? void(uc -= 13) : Jc(Bc, nc, Vc, rB, sc, Mc, Pc, qB, Oc, Tc, fc, mB, cB)
              }
            } {
              let ec = Ic[uc++],
                tB = Ic[uc++];
              if ((128 & ec) > 0 || (128 & tB) > 0) return void(uc -= 14);
              if (cB < 15) return Jc(Bc, nc, Vc, rB, sc, Mc, Pc, qB, Oc, Tc, fc, mB, ec, tB);
              let Sc = Ic[uc++];
              return (128 & Sc) > 0 ? void(uc -= 15) : Jc(Bc, nc, Vc, rB, sc, Mc, Pc, qB, Oc, Tc, fc, mB, ec, tB, Sc)
            }
          }
        }
      }
    }

    function iB() {
      let cB, Bc = Ic[uc++];
      if (Bc < 192) cB = Bc - 160;
      else switch (Bc) {
        case 217:
          cB = Ic[uc++];
          break;
        case 218:
          cB = Tc.getUint16(uc), uc += 2;
          break;
        case 219:
          cB = Tc.getUint32(uc), uc += 4;
          break;
        default:
          throw new Error("Expected string")
      }
      return Xc(cB)
    }

    function Kc(cB) {
      return ec.copyBuffers ? Uint8Array.prototype.slice.call(Ic, uc, uc += cB) : Ic.subarray(uc, uc += cB)
    }

    function xB(cB) {
      let Bc = Ic[uc++];
      if (yB[Bc]) {
        let nc;
        return yB[Bc](Ic.subarray(uc, nc = uc += cB), (cB => {
          uc = cB;
          try {
            return Qc()
          } finally {
            uc = nc
          }
        }))
      }
      throw new Error("Unknown extension type " + Bc)
    }
    var dc = new Array(4096);

    function Ac() {
      let cB = Ic[uc++];
      if (!(cB >= 160 && cB < 192)) return uc--, Gc(Qc());
      if (cB -= 160, Sc >= uc) return Pc.slice(uc - tB, (uc += cB) - tB);
      if (!(0 == Sc && rB < 180)) return Ec(cB);
      let Bc, nc = 4095 & (cB << 5 ^ (cB > 1 ? Tc.getUint16(uc) : cB > 0 ? Ic[uc] : 0)),
        Vc = dc[nc],
        sc = uc,
        Mc = uc + cB - 3,
        qB = 0;
      if (Vc && Vc.bytes == cB) {
        for (; sc < Mc;) {
          if (Bc = Tc.getUint32(sc), Bc != Vc[qB++]) {
            sc = 1879048192;
            break
          }
          sc += 4
        }
        for (Mc += 3; sc < Mc;)
          if (Bc = Ic[sc++], Bc != Vc[qB++]) {
            sc = 1879048192;
            break
          } if (sc === Mc) return uc = sc, Vc.string;
        Mc -= 3, sc = uc
      }
      for (Vc = [], dc[nc] = Vc, Vc.bytes = cB; sc < Mc;) Bc = Tc.getUint32(sc), Vc.push(Bc), sc += 4;
      for (Mc += 3; sc < Mc;) Bc = Ic[sc++], Vc.push(Bc);
      let Oc = cB < 16 ? Rc(cB) : jB(cB);
      return Vc.string = null != Oc ? Oc : Ec(cB)
    }

    function Gc(cB) {
      if ("string" === typeof cB) return cB;
      if ("number" === typeof cB || "boolean" === typeof cB || "bigint" === typeof cB) return cB.toString();
      if (null == cB) return cB + "";
      if (ec.allowArraysInMapKeys && Array.isArray(cB) && cB.flat().every((cB => ["string", "number", "boolean", "bigint"].includes(typeof cB)))) return cB.flat().toString();
      throw new Error("Invalid property type for record: " + typeof cB)
    }
    const cn = (cB, Bc) => {
      let nc = Qc().map(Gc),
        Vc = cB;
      void 0 !== Bc && (cB = cB < 32 ? -((Bc << 5) + cB) : (Bc << 5) + cB, nc.highByte = Bc);
      let Ic = Mc[cB];
      return Ic && (Ic.isShared || Lc) && ((Mc.restoreStructures || (Mc.restoreStructures = []))[cB] = Ic), Mc[cB] = nc, nc.read = vB(nc, Vc), nc.read()
    };
    yB[0] = () => {}, yB[0].noBuffer = !0, yB[66] = cB => {
      let Bc = cB.length,
        nc = BigInt(128 & cB[0] ? cB[0] - 256 : cB[0]);
      for (let Vc = 1; Vc < Bc; Vc++) nc <<= BigInt(8), nc += BigInt(cB[Vc]);
      return nc
    };
    let BB = {
      Error: Error,
      TypeError: TypeError,
      ReferenceError: ReferenceError
    };
    yB[101] = () => {
      let cB = Qc();
      return (BB[cB[0]] || Error)(cB[1], {
        cause: cB[2]
      })
    }, yB[105] = cB => {
      if (!1 === ec.structuredClone) throw new Error("Structured clone extension is disabled");
      let Bc = Tc.getUint32(uc - 4);
      Oc || (Oc = new Map);
      let nc, Vc = Ic[uc];
      nc = Vc >= 144 && Vc < 160 || 220 == Vc || 221 == Vc ? [] : {};
      let rB = {
        target: nc
      };
      Oc.set(Bc, rB);
      let sc = Qc();
      return rB.used ? Object.assign(nc, sc) : (rB.target = sc, sc)
    }, yB[112] = cB => {
      if (!1 === ec.structuredClone) throw new Error("Structured clone extension is disabled");
      let Bc = Tc.getUint32(uc - 4),
        nc = Oc.get(Bc);
      return nc.used = !0, nc.target
    }, yB[115] = () => new Set(Qc());
    const nB = ["Int8", "Uint8", "Uint8Clamped", "Int16", "Uint16", "Int32", "Uint32", "Float32", "Float64", "BigInt64", "BigUint64"].map((cB => cB + "Array"));
    let VB = "object" === typeof globalThis ? globalThis : window;
    yB[116] = cB => {
      let Bc = cB[0],
        nc = nB[Bc];
      if (!nc) {
        if (16 === Bc) {
          let Bc = new ArrayBuffer(cB.length - 1);
          return new Uint8Array(Bc).set(cB.subarray(1)), Bc
        }
        throw new Error("Could not find typed array for code " + Bc)
      }
      return new VB[nc](Uint8Array.prototype.slice.call(cB, 1).buffer)
    }, yB[120] = () => {
      let cB = Qc();
      return new RegExp(cB[0], cB[1])
    };
    const IB = [];

    function rn(cB) {
      Yc && Yc();
      let Bc = rB,
        nc = uc,
        Vc = mB,
        sc = tB,
        yB = Sc,
        zB = Pc,
        pc = fc,
        hc = Oc,
        aB = qB,
        lc = new Uint8Array(Ic.slice(0, rB)),
        gB = Mc,
        Uc = Mc.slice(0, Mc.length),
        bB = ec,
        Zc = Lc,
        Qc = cB();
      return rB = Bc, uc = nc, mB = Vc, tB = sc, Sc = yB, Pc = zB, fc = pc, Oc = hc, qB = aB, Ic = lc, Lc = Zc, (Mc = gB).splice(0, Mc.length, ...Uc), ec = bB, Tc = new DataView(Ic.buffer, Ic.byteOffset, Ic.byteLength), Qc
    }

    function uB() {
      Ic = null, Oc = null, Mc = null
    }
    yB[98] = cB => {
      let Bc = (cB[0] << 24) + (cB[1] << 16) + (cB[2] << 8) + cB[3],
        nc = uc;
      return uc += Bc - cB.length, qB = IB, (qB = [iB(), iB()]).position0 = 0, qB.position1 = 0, qB.postBundlePosition = uc, uc = nc, Qc()
    }, yB[255] = cB => 4 == cB.length ? new Date(1e3 * (16777216 * cB[0] + (cB[1] << 16) + (cB[2] << 8) + cB[3])) : 8 == cB.length ? new Date(((cB[0] << 22) + (cB[1] << 14) + (cB[2] << 6) + (cB[3] >> 2)) / 1e6 + 1e3 * (4294967296 * (3 & cB[3]) + 16777216 * cB[4] + (cB[5] << 16) + (cB[6] << 8) + cB[7])) : 12 == cB.length ? new Date(((cB[0] << 24) + (cB[1] << 16) + (cB[2] << 8) + cB[3]) / 1e6 + 1e3 * ((128 & cB[4] ? -281474976710656 : 0) + 1099511627776 * cB[6] + 4294967296 * cB[7] + 16777216 * cB[8] + (cB[9] << 16) + (cB[10] << 8) + cB[11])) : new Date("invalid");
    const sB = new Array(147);
    for (let rV = 0; rV < 256; rV++) sB[rV] = +("1e" + Math.floor(45.15 - .30103 * rV));
    const MB = Uc;
    var PB = new Uc({
      useRecords: !1
    });
    const qn = PB.unpack,
      OB = PB.unpackMultiple,
      TB = PB.unpack,
      fB = {
        NEVER: 0,
        ALWAYS: 1,
        DECIMAL_ROUND: 3,
        DECIMAL_FIT: 4
      };
    let mn, eB, tn, SB = new Float32Array(1),
      yn = new Uint8Array(SB.buffer, 0, 4);

    function zn(cB) {
      SB[0] = cB;
      let Bc = sB[(127 & yn[3]) << 1 | yn[2] >> 7];
      return (Bc * cB + (cB > 0 ? .5 : -.5) | 0) / Bc
    }
    try {
      mn = new TextEncoder
    } catch (In) {}
    const pB = "undefined" !== typeof Buffer,
      hB = pB ? function(cB) {
        return Buffer.allocUnsafeSlow(cB)
      } : Uint8Array,
      an = pB ? Buffer : Uint8Array,
      lB = pB ? 4294967296 : 2144337920;
    let YB, LB, gn, UB, bn, ZB = 0,
      QB = null;
    const CB = /[\u0080-\uFFFF]/,
      vn = Symbol("record-id");
    class DB extends Uc {
      constructor(cB) {
        let Bc, nc, Vc, Ic;
        super(cB), this.offset = 0;
        let rB = an.prototype.utf8Write ? function(cB, Bc) {
            return YB.utf8Write(cB, Bc, YB.byteLength - Bc)
          } : !(!mn || !mn.encodeInto) && function(cB, Bc) {
            return mn.encodeInto(cB, YB.subarray(Bc)).written
          },
          uc = this;
        cB || (cB = {});
        let sc = cB && cB.sequential,
          Mc = cB.structures || cB.saveStructures,
          Pc = cB.maxSharedStructures;
        if (null == Pc && (Pc = Mc ? 32 : 0), Pc > 8160) throw new Error("Maximum maxSharedStructure is 8160");
        cB.structuredClone && void 0 == cB.moreTypes && (this.moreTypes = !0);
        let qB = cB.maxOwnStructures;
        null == qB && (qB = Mc ? 32 : 64), this.structures || 0 == cB.useRecords || (this.structures = []);
        let Oc = Pc > 32 || qB + Pc > 64,
          Tc = Pc + 64,
          fc = Pc + qB + 64;
        if (fc > 8256) throw new Error("Maximum maxSharedStructure + maxOwnStructure is 8192");
        let mB = [],
          ec = 0,
          tB = 0;
        this.pack = this.encode = function(cB, rB) {
          if (YB || (YB = new hB(8192), gn = YB.dataView || (YB.dataView = new DataView(YB.buffer, 0, 8192)), ZB = 0), UB = YB.length - 10, UB - ZB < 2048 ? (YB = new hB(YB.length), gn = YB.dataView || (YB.dataView = new DataView(YB.buffer, 0, YB.length)), UB = YB.length - 10, ZB = 0) : ZB = ZB + 7 & 2147483640, Bc = ZB, rB & GB && (ZB += 255 & rB), Ic = uc.structuredClone ? new Map : null, uc.bundleStrings && "string" !== typeof cB ? (QB = [], QB.size = 1 / 0) : QB = null, Vc = uc.structures, Vc) {
            Vc.uninitialized && (Vc = uc._mergeStructures(uc.getStructures()));
            let cB = Vc.sharedLength || 0;
            if (cB > Pc) throw new Error("Shared structures is larger than maximum shared structures, try increasing maxSharedStructures to " + Vc.sharedLength);
            if (!Vc.transitions) {
              Vc.transitions = Object.create(null);
              for (let Bc = 0; Bc < cB; Bc++) {
                let cB = Vc[Bc];
                if (!cB) continue;
                let nc, Ic = Vc.transitions;
                for (let Bc = 0, Vc = cB.length; Bc < Vc; Bc++) {
                  let Vc = cB[Bc];
                  nc = Ic[Vc], nc || (nc = Ic[Vc] = Object.create(null)), Ic = nc
                }
                Ic[vn] = Bc + 64
              }
              this.lastNamedStructuresLength = cB
            }
            sc || (Vc.nextId = cB + 64)
          }
          let Mc;
          nc && (nc = !1);
          try {
            uc.randomAccessStructure && cB && cB.constructor && cB.constructor === Object ? Uc(cB) : zB(cB);
            let nc = QB;
            if (QB && WB(Bc, zB, 0), Ic && Ic.idsToInsert) {
              let cB = Ic.idsToInsert.sort(((cB, Bc) => cB.offset > Bc.offset ? 1 : -1)),
                Vc = cB.length,
                rB = -1;
              for (; nc && Vc > 0;) {
                let Ic = cB[--Vc].offset + Bc;
                Ic < nc.stringsPosition + Bc && -1 === rB && (rB = 0), Ic > nc.position + Bc ? rB >= 0 && (rB += 6) : (rB >= 0 && (gn.setUint32(nc.position + Bc, gn.getUint32(nc.position + Bc) + rB), rB = -1), nc = nc.previous, Vc++)
              }
              rB >= 0 && nc && gn.setUint32(nc.position + Bc, gn.getUint32(nc.position + Bc) + rB), ZB += 6 * cB.length, ZB > UB && Yc(ZB), uc.offset = ZB;
              let sc = function(cB, Bc) {
                let nc, Vc = 6 * Bc.length,
                  Ic = cB.length - Vc;
                for (; nc = Bc.pop();) {
                  let Bc = nc.offset,
                    rB = nc.id;
                  cB.copyWithin(Bc + Vc, Bc, Ic), Vc -= 6;
                  let uc = Bc + Vc;
                  cB[uc++] = 214, cB[uc++] = 105, cB[uc++] = rB >> 24, cB[uc++] = rB >> 16 & 255, cB[uc++] = rB >> 8 & 255, cB[uc++] = 255 & rB, Ic = Bc
                }
                return cB
              }(YB.subarray(Bc, ZB), cB);
              return Ic = null, sc
            }
            return uc.offset = ZB, rB & dB ? (YB.start = Bc, YB.end = ZB, YB) : YB.subarray(Bc, ZB)
          } catch (In) {
            throw Mc = In, In
          } finally {
            if (Vc && (Sc(), nc && uc.saveStructures)) {
              let nc = Vc.sharedLength || 0,
                Ic = YB.subarray(Bc, ZB),
                sc = kn(Vc, uc);
              if (!Mc) return !1 === uc.saveStructures(sc, sc.isCompatible) ? uc.pack(cB, rB) : (uc.lastNamedStructuresLength = nc, YB.length > 1073741824 && (YB = null), Ic)
            }
            YB.length > 1073741824 && (YB = null), rB & AB && (ZB = Bc)
          }
        };
        const Sc = () => {
            tB < 10 && tB++;
            let cB = Vc.sharedLength || 0;
            if (Vc.length > cB && !sc && (Vc.length = cB), ec > 1e4) Vc.transitions = null, tB = 0, ec = 0, mB.length > 0 && (mB = []);
            else if (mB.length > 0 && !sc) {
              for (let cB = 0, Bc = mB.length; cB < Bc; cB++) mB[cB][vn] = 0;
              mB = []
            }
          },
          yB = cB => {
            var Bc = cB.length;
            Bc < 16 ? YB[ZB++] = 144 | Bc : Bc < 65536 ? (YB[ZB++] = 220, YB[ZB++] = Bc >> 8, YB[ZB++] = 255 & Bc) : (YB[ZB++] = 221, gn.setUint32(ZB, Bc), ZB += 4);
            for (let nc = 0; nc < Bc; nc++) zB(cB[nc])
          },
          zB = cB => {
            ZB > UB && (YB = Yc(ZB));
            var nc, Vc = typeof cB;
            if ("string" === Vc) {
              let Vc, Ic = cB.length;
              if (QB && Ic >= 4 && Ic < 4096) {
                if ((QB.size += Ic) > 21760) {
                  let cB, nc, Vc = (QB[0] ? 3 * QB[0].length + QB[1].length : 0) + 10;
                  ZB + Vc > UB && (YB = Yc(ZB + Vc)), QB.position ? (nc = QB, YB[ZB] = 200, ZB += 3, YB[ZB++] = 98, cB = ZB - Bc, ZB += 4, WB(Bc, zB, 0), gn.setUint16(cB + Bc - 3, ZB - Bc - cB)) : (YB[ZB++] = 214, YB[ZB++] = 98, cB = ZB - Bc, ZB += 4), QB = ["", ""], QB.previous = nc, QB.size = 0, QB.position = cB
                }
                let nc = CB.test(cB);
                return QB[nc ? 0 : 1] += cB, YB[ZB++] = 193, void zB(nc ? -Ic : Ic)
              }
              Vc = Ic < 32 ? 1 : Ic < 256 ? 2 : Ic < 65536 ? 3 : 5;
              let uc = 3 * Ic;
              if (ZB + uc > UB && (YB = Yc(ZB + uc)), Ic < 64 || !rB) {
                let Bc, rB, uc, sc = ZB + Vc;
                for (Bc = 0; Bc < Ic; Bc++) rB = cB.charCodeAt(Bc), rB < 128 ? YB[sc++] = rB : rB < 2048 ? (YB[sc++] = rB >> 6 | 192, YB[sc++] = 63 & rB | 128) : 55296 === (64512 & rB) && 56320 === (64512 & (uc = cB.charCodeAt(Bc + 1))) ? (rB = 65536 + ((1023 & rB) << 10) + (1023 & uc), Bc++, YB[sc++] = rB >> 18 | 240, YB[sc++] = rB >> 12 & 63 | 128, YB[sc++] = rB >> 6 & 63 | 128, YB[sc++] = 63 & rB | 128) : (YB[sc++] = rB >> 12 | 224, YB[sc++] = rB >> 6 & 63 | 128, YB[sc++] = 63 & rB | 128);
                nc = sc - ZB - Vc
              } else nc = rB(cB, ZB + Vc);
              nc < 32 ? YB[ZB++] = 160 | nc : nc < 256 ? (Vc < 2 && YB.copyWithin(ZB + 2, ZB + 1, ZB + 1 + nc), YB[ZB++] = 217, YB[ZB++] = nc) : nc < 65536 ? (Vc < 3 && YB.copyWithin(ZB + 3, ZB + 2, ZB + 2 + nc), YB[ZB++] = 218, YB[ZB++] = nc >> 8, YB[ZB++] = 255 & nc) : (Vc < 5 && YB.copyWithin(ZB + 5, ZB + 3, ZB + 3 + nc), YB[ZB++] = 219, gn.setUint32(ZB, nc), ZB += 4), ZB += nc
            } else if ("number" === Vc)
              if (cB >>> 0 === cB) cB < 32 || cB < 128 && !1 === this.useRecords || cB < 64 && !this.randomAccessStructure ? YB[ZB++] = cB : cB < 256 ? (YB[ZB++] = 204, YB[ZB++] = cB) : cB < 65536 ? (YB[ZB++] = 205, YB[ZB++] = cB >> 8, YB[ZB++] = 255 & cB) : (YB[ZB++] = 206, gn.setUint32(ZB, cB), ZB += 4);
              else if ((cB | 0) === cB) cB >= -32 ? YB[ZB++] = 256 + cB : cB >= -128 ? (YB[ZB++] = 208, YB[ZB++] = cB + 256) : cB >= -32768 ? (YB[ZB++] = 209, gn.setInt16(ZB, cB), ZB += 2) : (YB[ZB++] = 210, gn.setInt32(ZB, cB), ZB += 4);
            else {
              let Bc;
              if ((Bc = this.useFloat32) > 0 && cB < 4294967296 && cB >= -2147483648) {
                let nc;
                if (YB[ZB++] = 202, gn.setFloat32(ZB, cB), Bc < 4 || ((nc = cB * sB[(127 & YB[ZB]) << 1 | YB[ZB + 1] >> 7]) | 0) === nc) return void(ZB += 4);
                ZB--
              }
              YB[ZB++] = 203, gn.setFloat64(ZB, cB), ZB += 8
            } else if ("object" === Vc || "function" === Vc)
              if (cB) {
                if (Ic) {
                  let nc = Ic.get(cB);
                  if (nc) {
                    if (!nc.id) {
                      let cB = Ic.idsToInsert || (Ic.idsToInsert = []);
                      nc.id = cB.push(nc)
                    }
                    return YB[ZB++] = 214, YB[ZB++] = 112, gn.setUint32(ZB, nc.id), void(ZB += 4)
                  }
                  Ic.set(cB, {
                    offset: ZB - Bc
                  })
                }
                let rB = cB.constructor;
                if (rB === Object) lc(cB);
                else if (rB === Array) yB(cB);
                else if (rB === Map)
                  if (this.mapAsEmptyObject) YB[ZB++] = 128;
                  else {
                    (nc = cB.size) < 16 ? YB[ZB++] = 128 | nc : nc < 65536 ? (YB[ZB++] = 222, YB[ZB++] = nc >> 8, YB[ZB++] = 255 & nc) : (YB[ZB++] = 223, gn.setUint32(ZB, nc), ZB += 4);
                    for (let [Bc, nc] of cB) zB(Bc), zB(nc)
                  }
                else {
                  for (let Bc = 0, nc = eB.length; Bc < nc; Bc++) {
                    if (cB instanceof tn[Bc]) {
                      let nc = eB[Bc];
                      if (nc.write) {
                        nc.type && (YB[ZB++] = 212, YB[ZB++] = nc.type, YB[ZB++] = 0);
                        let Bc = nc.write.call(this, cB);
                        return void(Bc === cB ? Array.isArray(cB) ? yB(cB) : lc(cB) : zB(Bc))
                      }
                      let Vc, Ic = YB,
                        rB = gn,
                        uc = ZB;
                      YB = null;
                      try {
                        Vc = nc.pack.call(this, cB, (cB => (YB = Ic, Ic = null, ZB += cB, ZB > UB && Yc(ZB), {
                          target: YB,
                          targetView: gn,
                          position: ZB - cB
                        })), zB)
                      } finally {
                        Ic && (YB = Ic, gn = rB, ZB = uc, UB = YB.length - 10)
                      }
                      return void(Vc && (Vc.length + ZB > UB && Yc(Vc.length + ZB), ZB = oB(Vc, YB, ZB, nc.type)))
                    }
                  }
                  if (Array.isArray(cB)) yB(cB);
                  else {
                    if (cB.toJSON) {
                      const Bc = cB.toJSON();
                      if (Bc !== cB) return zB(Bc)
                    }
                    if ("function" === Vc) return zB(this.writeFunction && this.writeFunction(cB));
                    lc(cB)
                  }
                }
              } else YB[ZB++] = 192;
            else if ("boolean" === Vc) YB[ZB++] = cB ? 195 : 194;
            else if ("bigint" === Vc) {
              if (cB < BigInt(1) << BigInt(63) && cB >= -(BigInt(1) << BigInt(63))) YB[ZB++] = 211, gn.setBigInt64(ZB, cB);
              else if (cB < BigInt(1) << BigInt(64) && cB > 0) YB[ZB++] = 207, gn.setBigUint64(ZB, cB);
              else {
                if (!this.largeBigIntToFloat) {
                  if (this.largeBigIntToString) return zB(cB.toString());
                  if (this.useBigIntExtension && cB < BigInt(2) ** BigInt(1023) && cB > -(BigInt(2) ** BigInt(1023))) {
                    YB[ZB++] = 199, ZB++, YB[ZB++] = 66;
                    let Bc, nc = [];
                    do {
                      let Vc = cB & BigInt(255);
                      Bc = (Vc & BigInt(128)) === (cB < BigInt(0) ? BigInt(128) : BigInt(0)), nc.push(Vc), cB >>= BigInt(8)
                    } while (cB !== BigInt(0) && cB !== BigInt(-1) || !Bc);
                    YB[ZB - 2] = nc.length;
                    for (let cB = nc.length; cB > 0;) YB[ZB++] = Number(nc[--cB]);
                    return
                  }
                  throw new RangeError(cB + " was too large to fit in MessagePack 64-bit integer format, use useBigIntExtension, or set largeBigIntToFloat to convert to float-64, or set largeBigIntToString to convert to string")
                }
                YB[ZB++] = 203, gn.setFloat64(ZB, Number(cB))
              }
              ZB += 8
            } else {
              if ("undefined" !== Vc) throw new Error("Unknown type: " + Vc);
              this.encodeUndefinedAsNil ? YB[ZB++] = 192 : (YB[ZB++] = 212, YB[ZB++] = 0, YB[ZB++] = 0)
            }
          },
          pc = this.variableMapSize || this.coercibleKeyAsNumber || this.skipValues ? cB => {
            let Bc;
            if (this.skipValues) {
              Bc = [];
              for (let nc in cB) "function" === typeof cB.hasOwnProperty && !cB.hasOwnProperty(nc) || this.skipValues.includes(cB[nc]) || Bc.push(nc)
            } else Bc = Object.keys(cB);
            let nc, Vc = Bc.length;
            if (Vc < 16 ? YB[ZB++] = 128 | Vc : Vc < 65536 ? (YB[ZB++] = 222, YB[ZB++] = Vc >> 8, YB[ZB++] = 255 & Vc) : (YB[ZB++] = 223, gn.setUint32(ZB, Vc), ZB += 4), this.coercibleKeyAsNumber)
              for (let Ic = 0; Ic < Vc; Ic++) {
                nc = Bc[Ic];
                let Vc = Number(nc);
                zB(isNaN(Vc) ? nc : Vc), zB(cB[nc])
              } else
                for (let Ic = 0; Ic < Vc; Ic++) zB(nc = Bc[Ic]), zB(cB[nc])
          } : cB => {
            YB[ZB++] = 222;
            let nc = ZB - Bc;
            ZB += 2;
            let Vc = 0;
            for (let Bc in cB)("function" !== typeof cB.hasOwnProperty || cB.hasOwnProperty(Bc)) && (zB(Bc), zB(cB[Bc]), Vc++);
            if (Vc > 65535) throw new Error('Object is too large to serialize with fast 16-bit map size, use the "variableMapSize" option to serialize this object');
            YB[nc++ + Bc] = Vc >> 8, YB[nc + Bc] = 255 & Vc
          },
          hc = !1 === this.useRecords ? pc : cB.progressiveRecords && !Oc ? cB => {
            let nc, Ic, rB = Vc.transitions || (Vc.transitions = Object.create(null)),
              uc = ZB++ - Bc;
            for (let sc in cB)
              if ("function" !== typeof cB.hasOwnProperty || cB.hasOwnProperty(sc)) {
                if (nc = rB[sc], nc) rB = nc;
                else {
                  let Mc = Object.keys(cB),
                    Pc = rB;
                  rB = Vc.transitions;
                  let qB = 0;
                  for (let cB = 0, Bc = Mc.length; cB < Bc; cB++) {
                    let Bc = Mc[cB];
                    nc = rB[Bc], nc || (nc = rB[Bc] = Object.create(null), qB++), rB = nc
                  }
                  uc + Bc + 1 == ZB ? (ZB--, Lc(rB, Mc, qB)) : gB(rB, Mc, uc, qB), Ic = !0, rB = Pc[sc]
                }
                zB(cB[sc])
              } if (!Ic) {
              let nc = rB[vn];
              nc ? YB[uc + Bc] = nc : gB(rB, Object.keys(cB), uc, 0)
            }
          } : cB => {
            let Bc, nc = Vc.transitions || (Vc.transitions = Object.create(null)),
              Ic = 0;
            for (let Vc in cB)("function" !== typeof cB.hasOwnProperty || cB.hasOwnProperty(Vc)) && (Bc = nc[Vc], Bc || (Bc = nc[Vc] = Object.create(null), Ic++), nc = Bc);
            let rB = nc[vn];
            rB ? rB >= 96 && Oc ? (YB[ZB++] = 96 + (31 & (rB -= 96)), YB[ZB++] = rB >> 5) : YB[ZB++] = rB : Lc(nc, nc.__keys__ || Object.keys(cB), Ic);
            for (let Vc in cB)("function" !== typeof cB.hasOwnProperty || cB.hasOwnProperty(Vc)) && zB(cB[Vc])
          },
          aB = "function" == typeof this.useRecords && this.useRecords,
          lc = aB ? cB => {
            aB(cB) ? hc(cB) : pc(cB)
          } : hc,
          Yc = cB => {
            let nc;
            if (cB > 16777216) {
              if (cB - Bc > lB) throw new Error("Packed buffer would be larger than maximum buffer size");
              nc = Math.min(lB, 4096 * Math.round(Math.max((cB - Bc) * (cB > 67108864 ? 1.25 : 2), 4194304) / 4096))
            } else nc = 1 + (Math.max(cB - Bc << 2, YB.length - 1) >> 12) << 12;
            let Vc = new hB(nc);
            return gn = Vc.dataView || (Vc.dataView = new DataView(Vc.buffer, 0, nc)), cB = Math.min(cB, YB.length), YB.copy ? YB.copy(Vc, 0, Bc, cB) : Vc.set(YB.slice(Bc, cB)), ZB -= Bc, Bc = 0, UB = Vc.length - 10, YB = Vc
          },
          Lc = (cB, Bc, Ic) => {
            let rB = Vc.nextId;
            rB || (rB = 64), rB < Tc && this.shouldShareStructure && !this.shouldShareStructure(Bc) ? (rB = Vc.nextOwnId, rB < fc || (rB = Tc), Vc.nextOwnId = rB + 1) : (rB >= fc && (rB = Tc), Vc.nextId = rB + 1);
            let uc = Bc.highByte = rB >= 96 && Oc ? rB - 96 >> 5 : -1;
            cB[vn] = rB, cB.__keys__ = Bc, Vc[rB - 64] = Bc, rB < Tc ? (Bc.isShared = !0, Vc.sharedLength = rB - 63, nc = !0, uc >= 0 ? (YB[ZB++] = 96 + (31 & rB), YB[ZB++] = uc) : YB[ZB++] = rB) : (uc >= 0 ? (YB[ZB++] = 213, YB[ZB++] = 114, YB[ZB++] = 96 + (31 & rB), YB[ZB++] = uc) : (YB[ZB++] = 212, YB[ZB++] = 114, YB[ZB++] = rB), Ic && (ec += tB * Ic), mB.length >= qB && (mB.shift()[vn] = 0), mB.push(cB), zB(Bc))
          },
          gB = (cB, nc, Vc, Ic) => {
            let rB = YB,
              uc = ZB,
              sc = UB,
              Mc = Bc;
            YB = LB, ZB = 0, Bc = 0, YB || (LB = YB = new hB(8192)), UB = YB.length - 10, Lc(cB, nc, Ic), LB = YB;
            let Pc = ZB;
            if (YB = rB, ZB = uc, UB = sc, Bc = Mc, Pc > 1) {
              let cB = ZB + Pc - 1;
              cB > UB && Yc(cB);
              let nc = Vc + Bc;
              YB.copyWithin(nc + Pc, nc + 1, ZB), YB.set(LB.slice(0, Pc), nc), ZB = cB
            } else YB[Vc + Bc] = LB[0]
          },
          Uc = cB => {
            let Ic = bn(cB, YB, Bc, ZB, Vc, Yc, ((cB, Bc, Vc) => {
              if (Vc) return nc = !0;
              ZB = Bc;
              let Ic = YB;
              return zB(cB), Sc(), Ic !== YB ? {
                position: ZB,
                targetView: gn,
                target: YB
              } : ZB
            }), this);
            if (0 === Ic) return lc(cB);
            ZB = Ic
          }
      }
      useBuffer(cB) {
        YB = cB, gn = YB.dataView || (YB.dataView = new DataView(YB.buffer, YB.byteOffset, YB.byteLength)), ZB = 0
      }
      set position(cB) {
        ZB = cB
      }
      get position() {
        return ZB
      }
      set buffer(cB) {
        YB = cB
      }
      get buffer() {
        return YB
      }
      clearSharedData() {
        this.structures && (this.structures = []), this.typedStructs && (this.typedStructs = [])
      }
    }

    function NB(cB, Bc, nc, Vc) {
      let Ic = cB.byteLength;
      if (Ic + 1 < 256) {
        var {
          target: rB,
          position: uc
        } = nc(4 + Ic);
        rB[uc++] = 199, rB[uc++] = Ic + 1
      } else if (Ic + 1 < 65536) {
        var {
          target: rB,
          position: uc
        } = nc(5 + Ic);
        rB[uc++] = 200, rB[uc++] = Ic + 1 >> 8, rB[uc++] = Ic + 1 & 255
      } else {
        var {
          target: rB,
          position: uc,
          targetView: sc
        } = nc(7 + Ic);
        rB[uc++] = 201, sc.setUint32(uc, Ic + 1), uc += 4
      }
      rB[uc++] = 116, rB[uc++] = Bc, cB.buffer || (cB = new Uint8Array(cB)), rB.set(new Uint8Array(cB.buffer, cB.byteOffset, cB.byteLength), uc)
    }

    function EB(cB, Bc) {
      let nc = cB.byteLength;
      var Vc, Ic;
      if (nc < 256) {
        var {
          target: Vc,
          position: Ic
        } = Bc(nc + 2);
        Vc[Ic++] = 196, Vc[Ic++] = nc
      } else if (nc < 65536) {
        var {
          target: Vc,
          position: Ic
        } = Bc(nc + 3);
        Vc[Ic++] = 197, Vc[Ic++] = nc >> 8, Vc[Ic++] = 255 & nc
      } else {
        var {
          target: Vc,
          position: Ic,
          targetView: rB
        } = Bc(nc + 5);
        Vc[Ic++] = 198, rB.setUint32(Ic, nc), Ic += 4
      }
      Vc.set(cB, Ic)
    }

    function oB(cB, Bc, nc, Vc) {
      let Ic = cB.length;
      switch (Ic) {
        case 1:
          Bc[nc++] = 212;
          break;
        case 2:
          Bc[nc++] = 213;
          break;
        case 4:
          Bc[nc++] = 214;
          break;
        case 8:
          Bc[nc++] = 215;
          break;
        case 16:
          Bc[nc++] = 216;
          break;
        default:
          Ic < 256 ? (Bc[nc++] = 199, Bc[nc++] = Ic) : Ic < 65536 ? (Bc[nc++] = 200, Bc[nc++] = Ic >> 8, Bc[nc++] = 255 & Ic) : (Bc[nc++] = 201, Bc[nc++] = Ic >> 24, Bc[nc++] = Ic >> 16 & 255, Bc[nc++] = Ic >> 8 & 255, Bc[nc++] = 255 & Ic)
      }
      return Bc[nc++] = Vc, Bc.set(cB, nc), nc += Ic
    }

    function WB(cB, Bc, nc) {
      if (QB.length > 0) {
        gn.setUint32(QB.position + cB, ZB + nc - QB.position - cB), QB.stringsPosition = ZB - cB;
        let Vc = QB;
        QB = null, Bc(Vc[0]), Bc(Vc[1])
      }
    }

    function wB(cB) {
      if (cB.Class) {
        if (!cB.pack && !cB.write) throw new Error("Extension has no pack or write function");
        if (cB.pack && !cB.type) throw new Error("Extension has no type (numeric code to identify the extension)");
        tn.unshift(cB.Class), eB.unshift(cB)
      }! function(cB) {
        cB.unpack ? yB[cB.type] = cB.unpack : yB[cB.type] = cB
      }(cB)
    }

    function kn(cB, Bc) {
      return cB.isCompatible = cB => {
        let nc = !cB || (Bc.lastNamedStructuresLength || 0) === cB.length;
        return nc || Bc._mergeStructures(cB), nc
      }, cB
    }
    tn = [Date, Set, Error, RegExp, ArrayBuffer, Object.getPrototypeOf(Uint8Array.prototype).constructor, pc], eB = [{
      pack(cB, Bc, nc) {
        let Vc = cB.getTime() / 1e3;
        if ((this.useTimestamp32 || 0 === cB.getMilliseconds()) && Vc >= 0 && Vc < 4294967296) {
          let {
            target: cB,
            targetView: nc,
            position: Ic
          } = Bc(6);
          cB[Ic++] = 214, cB[Ic++] = 255, nc.setUint32(Ic, Vc)
        } else if (Vc > 0 && Vc < 4294967296) {
          let {
            target: nc,
            targetView: Ic,
            position: rB
          } = Bc(10);
          nc[rB++] = 215, nc[rB++] = 255, Ic.setUint32(rB, 4e6 * cB.getMilliseconds() + (Vc / 1e3 / 4294967296 | 0)), Ic.setUint32(rB + 4, Vc)
        } else if (isNaN(Vc)) {
          if (this.onInvalidDate) return Bc(0), nc(this.onInvalidDate());
          let {
            target: cB,
            targetView: Vc,
            position: Ic
          } = Bc(3);
          cB[Ic++] = 212, cB[Ic++] = 255, cB[Ic++] = 255
        } else {
          let {
            target: nc,
            targetView: Ic,
            position: rB
          } = Bc(15);
          nc[rB++] = 199, nc[rB++] = 12, nc[rB++] = 255, Ic.setUint32(rB, 1e6 * cB.getMilliseconds()), Ic.setBigInt64(rB + 4, BigInt(Math.floor(Vc)))
        }
      }
    }, {
      pack(cB, Bc, nc) {
        if (this.setAsEmptyObject) return Bc(0), nc({});
        let Vc = Array.from(cB),
          {
            target: Ic,
            position: rB
          } = Bc(this.moreTypes ? 3 : 0);
        this.moreTypes && (Ic[rB++] = 212, Ic[rB++] = 115, Ic[rB++] = 0), nc(Vc)
      }
    }, {
      pack(cB, Bc, nc) {
        let {
          target: Vc,
          position: Ic
        } = Bc(this.moreTypes ? 3 : 0);
        this.moreTypes && (Vc[Ic++] = 212, Vc[Ic++] = 101, Vc[Ic++] = 0), nc([cB.name, cB.message, cB.cause])
      }
    }, {
      pack(cB, Bc, nc) {
        let {
          target: Vc,
          position: Ic
        } = Bc(this.moreTypes ? 3 : 0);
        this.moreTypes && (Vc[Ic++] = 212, Vc[Ic++] = 120, Vc[Ic++] = 0), nc([cB.source, cB.flags])
      }
    }, {
      pack(cB, Bc) {
        this.moreTypes ? NB(cB, 16, Bc) : EB(pB ? Buffer.from(cB) : new Uint8Array(cB), Bc)
      }
    }, {
      pack(cB, Bc) {
        let nc = cB.constructor;
        nc !== an && this.moreTypes ? NB(cB, nB.indexOf(nc.name), Bc) : EB(cB, Bc)
      }
    }, {
      pack(cB, Bc) {
        let {
          target: nc,
          position: Vc
        } = Bc(1);
        nc[Vc] = 193
      }
    }];
    let XB = new DB({
      useRecords: !1
    });
    const HB = XB.pack,
      FB = XB.pack,
      JB = DB,
      {
        NEVER: jn,
        ALWAYS: RB,
        DECIMAL_ROUND: KB,
        DECIMAL_FIT: xn
      } = fB,
      dB = 512,
      AB = 1024,
      GB = 2048;
    const cV = function(cB) {
        let Bc = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        if (!cB || "object" !== typeof cB) throw new Error("first argument must be an Iterable, Async Iterable, Iterator, Async Iterator, or a promise");
        const nc = new Uc(Bc);
        let Vc;
        const Ic = cB => {
          let Bc;
          Vc && (cB = Buffer.concat([Vc, cB]), Vc = void 0);
          try {
            Bc = nc.unpackMultiple(cB)
          } catch (Ic) {
            if (!Ic.incomplete) throw Ic;
            Vc = cB.slice(Ic.lastPosition), Bc = Ic.values
          }
          return Bc
        };
        return "function" === typeof cB[Symbol.iterator] ? function*() {
          for (const Bc of cB) yield* Ic(Bc)
        }() : "function" === typeof cB[Symbol.asyncIterator] ? async function*() {
          for await (const Bc of cB) yield* Ic(Bc)
        }(): void 0
      },
      Bn = function(cB) {
        let Bc = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        if (cB && "object" === typeof cB) {
          if ("function" === typeof cB[Symbol.iterator]) return function*(cB, Bc) {
            const nc = new DB(Bc);
            for (const Vc of cB) yield nc.pack(Vc)
          }(cB, Bc);
          if ("function" === typeof cB.then || "function" === typeof cB[Symbol.asyncIterator]) return async function*(cB, Bc) {
            const nc = new DB(Bc);
            for await (const Vc of cB) yield nc.pack(Vc)
          }(cB, Bc);
          throw new Error("first argument must be an Iterable, Async Iterable, Iterator, Async Iterator, or a Promise")
        }
        throw new Error("first argument must be an Iterable, Async Iterable, or a Promise for an Async Iterable")
      },
      nn = !1,
      Vn = !0
  },
  8015: (cB, Bc, nc) => {
    nc.r(Bc), nc.d(Bc, {
      $changes: () => ec,
      $childType: () => tB,
      $decoder: () => qB,
      $deleteByIndex: () => fc,
      $encoder: () => Pc,
      $filter: () => Oc,
      $getByIndex: () => Tc,
      $numFields: () => gB,
      $refId: () => sc,
      $track: () => Mc,
      $values: () => hc,
      ArraySchema: () => VV,
      Callbacks: () => VI,
      ChangeTree: () => Qn,
      CollectionSchema: () => uV,
      Decoder: () => KV,
      Encoder: () => JV,
      FieldBuilder: () => PV,
      MapSchema: () => rI,
      Metadata: () => KB,
      OPERATION: () => Ic,
      Reflection: () => GV,
      ReflectionField: () => dV,
      ReflectionType: () => AV,
      Root: () => CV,
      Schema: () => ZV,
      SetSchema: () => sV,
      StateCallbackStrategy: () => nI,
      StateView: () => oV,
      StreamSchema: () => MV,
      TypeContext: () => kn,
      createPool: () => rr,
      decode: () => zn,
      decodeKeyValueOperation: () => dn,
      decodeSchemaOperation: () => xV,
      defineCustomTypes: () => lB,
      defineTypes: () => gI,
      deprecated: () => YV,
      dumpChanges: () => bI,
      encode: () => BB,
      encodeArray: () => wn,
      encodeIndexedEntry: () => onc,
      encodeKeyValueOperation: () => Wn,
      encodeMapEntry: () => En,
      encodeSchemaOperation: () => Nn,
      aI: () => tI,
      fullStateOnly: () => pV,
      getDecoderStateCallbacks: () => cr,
      getEncodeDescriptor: () => Bn,
      getRawChangesCallback: () => BI,
      isBuilder: () => qI,
      patchOnly: () => zI,
      registerType: () => an,
      schema: () => UV,
      t: () => mI,
      type: () => hV,
      unreliable: () => yI,
      view: () => SV
    });
    const Vc = 255;
    var Ic;

    function rB(cB) {
      Object.defineProperty(cB, Symbol.metadata, {
        value: void 0,
        writable: !0,
        configurable: !0,
        enumerable: !1
      })
    }! function(cB) {
      cB[cB.ADD = 128] = "ADD", cB[cB.REPLACE = 0] = "REPLACE", cB[cB.DELETE = 64] = "DELETE", cB[cB.DELETE_AND_MOVE = 96] = "DELETE_AND_MOVE", cB[cB.MOVE_AND_ADD = 160] = "MOVE_AND_ADD", cB[cB.DELETE_AND_ADD = 192] = "DELETE_AND_ADD", cB[cB.CLEAR = 10] = "CLEAR", cB[cB.REVERSE = 15] = "REVERSE", cB[cB.MOVE = 32] = "MOVE", cB[cB.DELETE_BY_REFID = 33] = "DELETE_BY_REFID", cB[cB.ADD_BY_REFID = 129] = "ADD_BY_REFID"
    }(Ic || (Ic = {})), Symbol.metadata ??= Symbol.for("Symbol.metadata");
    const uc = "undefined" !== typeof globalThis ? globalThis : "undefined" !== typeof global ? global : "undefined" !== typeof self ? self : "undefined" !== typeof window ? window : {};
    if ("function" === typeof Symbol && "function" !== typeof Symbol.for) {
      const cB = "colyseus.symbolRegistry",
        Bc = uc[cB] || (uc[cB] = Object.create(null));
      Symbol.for = function(cB) {
        return Bc[cB] || (Bc[cB] = Symbol(cB))
      }, Symbol.keyFor = function(cB) {
        for (const nc in Bc)
          if (Bc[nc] === cB) return nc
      }
    }
    const sc = Symbol.for("$refId"),
      Mc = "~track",
      Pc = "~encoder",
      qB = "~decoder",
      Oc = "~filter",
      Tc = "~getByIndex",
      fc = "~deleteByIndex",
      mB = "~resyncPrune",
      ec = Symbol.for("$changes"),
      tB = Symbol.for("$childType"),
      Sc = Symbol.for("$proxyTarget"),
      yB = "~onEncodeEnd",
      zB = "~reset",
      pc = "~onDecodeEnd",
      hc = Symbol.for("$values"),
      aB = "~builder",
      lc = "~descriptors",
      Yc = "~__encodeDescriptor",
      Lc = "~encoders",
      gB = "~__numFields",
      Uc = "~__refTypeFieldIndexes",
      bB = "~__viewFieldIndexes",
      Zc = "$__fieldIndexesByViewTag",
      Qc = "~__unreliableFieldIndexes",
      Cc = "~__patchOnlyFieldIndexes",
      vB = "~__fullSyncSkipIndexes",
      Dc = "~__fullStateOnlyFieldIndexes",
      Nc = "~__streamFieldIndexes",
      Ec = "~__streamPriorities";
    let oc;
    try {
      oc = new TextEncoder
    } catch (uI) {}
    const Wc = new ArrayBuffer(8),
      wc = new Int32Array(Wc),
      kB = new Float32Array(Wc),
      Xc = new Float64Array(Wc),
      Hc = new BigInt64Array(Wc),
      Fc = "undefined" !== typeof Buffer && Buffer.byteLength ? Buffer.byteLength : function(cB, Bc) {
        for (var nc = 0, Vc = 0, Ic = 0, rB = cB.length; Ic < rB; Ic++)(nc = cB.charCodeAt(Ic)) < 128 ? Vc += 1 : nc < 2048 ? Vc += 2 : nc < 55296 || nc >= 57344 ? Vc += 3 : (Ic++, Vc += 4);
        return Vc
      };

    function Jc(cB, Bc, nc) {
      for (var Vc = 0, Ic = 0, rB = Bc.length; Ic < rB; Ic++)(Vc = Bc.charCodeAt(Ic)) < 128 ? cB[nc.offset++] = Vc : Vc < 2048 ? (cB[nc.offset] = 192 | Vc >> 6, cB[nc.offset + 1] = 128 | 63 & Vc, nc.offset += 2) : Vc < 55296 || Vc >= 57344 ? (cB[nc.offset] = 224 | Vc >> 12, cB[nc.offset + 1] = 128 | Vc >> 6 & 63, cB[nc.offset + 2] = 128 | 63 & Vc, nc.offset += 3) : (Ic++, Vc = 65536 + ((1023 & Vc) << 10 | 1023 & Bc.charCodeAt(Ic)), cB[nc.offset] = 240 | Vc >> 18, cB[nc.offset + 1] = 128 | Vc >> 12 & 63, cB[nc.offset + 2] = 128 | Vc >> 6 & 63, cB[nc.offset + 3] = 128 | 63 & Vc, nc.offset += 4)
    }

    function jB(cB, Bc, nc) {
      cB[nc.offset++] = 255 & Bc
    }

    function Rc(cB, Bc, nc) {
      cB[nc.offset++] = 255 & Bc, cB[nc.offset++] = Bc >> 8 & 255
    }

    function iB(cB, Bc, nc) {
      cB[nc.offset++] = 255 & Bc, cB[nc.offset++] = Bc >> 8 & 255
    }

    function Kc(cB, Bc, nc) {
      cB[nc.offset++] = 255 & Bc, cB[nc.offset++] = Bc >> 8 & 255, cB[nc.offset++] = Bc >> 16 & 255, cB[nc.offset++] = Bc >> 24 & 255
    }

    function xB(cB, Bc, nc) {
      const Vc = Bc >> 24,
        Ic = Bc >> 16,
        rB = Bc >> 8,
        uc = Bc;
      cB[nc.offset++] = 255 & uc, cB[nc.offset++] = 255 & rB, cB[nc.offset++] = 255 & Ic, cB[nc.offset++] = 255 & Vc
    }

    function dc(cB, Bc, nc) {
      const Vc = Math.floor(Bc / Math.pow(2, 32));
      xB(cB, Bc >>> 0, nc), xB(cB, Vc, nc)
    }

    function Ac(cB, Bc, nc) {
      const Vc = Bc / Math.pow(2, 32) | 0;
      xB(cB, Bc >>> 0, nc), xB(cB, Vc, nc)
    }

    function Gc(cB, Bc, nc) {
      kB[0] = Bc, Kc(cB, wc[0], nc)
    }

    function cn(cB, Bc, nc) {
      Xc[0] = Bc, Kc(cB, wc[0], nc), Kc(cB, wc[1], nc)
    }
    const BB = {
        int8: jB,
        uint8: function(cB, Bc, nc) {
          cB[nc.offset++] = 255 & Bc
        },
        int16: Rc,
        uint16: iB,
        int32: Kc,
        uint32: xB,
        int64: dc,
        uint64: Ac,
        bigint64: function(cB, Bc, nc) {
          Hc[0] = BigInt.asIntN(64, Bc), Kc(cB, wc[0], nc), Kc(cB, wc[1], nc)
        },
        biguint64: function(cB, Bc, nc) {
          Hc[0] = BigInt.asIntN(64, Bc), Kc(cB, wc[0], nc), Kc(cB, wc[1], nc)
        },
        float32: Gc,
        float64: cn,
        boolean: function(cB, Bc, nc) {
          cB[nc.offset++] = Bc ? 1 : 0
        },
        string: function(cB, Bc, nc) {
          Bc || (Bc = "");
          let Vc = Fc(Bc, "utf8"),
            Ic = 0;
          if (Vc < 32) cB[nc.offset++] = 160 | Vc, Ic = 1;
          else if (Vc < 256) cB[nc.offset++] = 217, cB[nc.offset++] = Vc, Ic = 2;
          else if (Vc < 65536) cB[nc.offset++] = 218, iB(cB, Vc, nc), Ic = 3;
          else {
            if (!(Vc < 4294967296)) throw new Error("String too long");
            cB[nc.offset++] = 219, xB(cB, Vc, nc), Ic = 5
          }
          return Jc(cB, Bc, nc), Ic + Vc
        },
        number: function cB(Bc, nc, Vc) {
          return isNaN(nc) ? cB(Bc, 0, Vc) : isFinite(nc) ? nc !== (0 | nc) ? Math.abs(nc) <= 34028235e31 && (kB[0] = nc, Math.abs(Math.abs(kB[0]) - Math.abs(nc)) < 1e-4) ? (Bc[Vc.offset++] = 202, Gc(Bc, nc, Vc), 5) : (Bc[Vc.offset++] = 203, cn(Bc, nc, Vc), 9) : nc >= 0 ? nc < 128 ? (Bc[Vc.offset++] = 255 & nc, 1) : nc < 256 ? (Bc[Vc.offset++] = 204, Bc[Vc.offset++] = 255 & nc, 2) : nc < 65536 ? (Bc[Vc.offset++] = 205, iB(Bc, nc, Vc), 3) : nc < 4294967296 ? (Bc[Vc.offset++] = 206, xB(Bc, nc, Vc), 5) : (Bc[Vc.offset++] = 207, Ac(Bc, nc, Vc), 9) : nc >= -32 ? (Bc[Vc.offset++] = 224 | nc + 32, 1) : nc >= -128 ? (Bc[Vc.offset++] = 208, jB(Bc, nc, Vc), 2) : nc >= -32768 ? (Bc[Vc.offset++] = 209, Rc(Bc, nc, Vc), 3) : nc >= -2147483648 ? (Bc[Vc.offset++] = 210, Kc(Bc, nc, Vc), 5) : (Bc[Vc.offset++] = 211, dc(Bc, nc, Vc), 9) : cB(Bc, nc > 0 ? Number.MAX_SAFE_INTEGER : -Number.MAX_SAFE_INTEGER, Vc)
        },
        utf8Write: Jc,
        utf8Length: Fc
      },
      nB = new ArrayBuffer(8),
      VB = new Int32Array(nB),
      IB = new Float32Array(nB),
      rn = new Float64Array(nB),
      uB = new BigUint64Array(nB),
      sB = new BigInt64Array(nB);

    function MB(cB, Bc, nc) {
      nc > cB.length - Bc.offset && (nc = cB.length - Bc.offset);
      for (var Vc = "", Ic = 0, rB = Bc.offset, uc = Bc.offset + nc; rB < uc; rB++) {
        var sc = cB[rB];
        if (0 !== (128 & sc))
          if (192 !== (224 & sc))
            if (224 !== (240 & sc)) {
              if (240 !== (248 & sc)) {
                console.error("decode.utf8Read(): Invalid byte " + sc + " at offset " + rB + ". Skip to end of string: " + (Bc.offset + nc));
                break
              }(Ic = (7 & sc) << 18 | (63 & cB[++rB]) << 12 | (63 & cB[++rB]) << 6 | 63 & cB[++rB]) >= 65536 ? (Ic -= 65536, Vc += String.fromCharCode(55296 + (Ic >>> 10), 56320 + (1023 & Ic))) : Vc += String.fromCharCode(Ic)
            } else Vc += String.fromCharCode((15 & sc) << 12 | (63 & cB[++rB]) << 6 | 63 & cB[++rB]);
        else Vc += String.fromCharCode((31 & sc) << 6 | 63 & cB[++rB]);
        else Vc += String.fromCharCode(sc)
      }
      return Bc.offset += nc, Vc
    }

    function PB(cB, Bc) {
      return qn(cB, Bc) << 24 >> 24
    }

    function qn(cB, Bc) {
      return cB[Bc.offset++]
    }

    function OB(cB, Bc) {
      return TB(cB, Bc) << 16 >> 16
    }

    function TB(cB, Bc) {
      return cB[Bc.offset++] | cB[Bc.offset++] << 8
    }

    function fB(cB, Bc) {
      return cB[Bc.offset++] | cB[Bc.offset++] << 8 | cB[Bc.offset++] << 16 | cB[Bc.offset++] << 24
    }

    function mn(cB, Bc) {
      return fB(cB, Bc) >>> 0
    }

    function eB(cB, Bc) {
      return VB[0] = fB(cB, Bc), IB[0]
    }

    function tn(cB, Bc) {
      return VB[0] = fB(cB, Bc), VB[1] = fB(cB, Bc), rn[0]
    }

    function SB(cB, Bc) {
      const nc = mn(cB, Bc);
      return fB(cB, Bc) * Math.pow(2, 32) + nc
    }

    function yn(cB, Bc) {
      const nc = mn(cB, Bc);
      return mn(cB, Bc) * Math.pow(2, 32) + nc
    }
    const zn = {
        utf8Read: MB,
        int8: PB,
        uint8: qn,
        int16: OB,
        uint16: TB,
        int32: fB,
        uint32: mn,
        float32: eB,
        float64: tn,
        int64: SB,
        uint64: yn,
        bigint64: function(cB, Bc) {
          return VB[0] = fB(cB, Bc), VB[1] = fB(cB, Bc), sB[0]
        },
        biguint64: function(cB, Bc) {
          return VB[0] = fB(cB, Bc), VB[1] = fB(cB, Bc), uB[0]
        },
        boolean: function(cB, Bc) {
          return qn(cB, Bc) > 0
        },
        string: function(cB, Bc) {
          const nc = cB[Bc.offset++];
          let Vc;
          return nc < 192 ? Vc = 31 & nc : 217 === nc ? Vc = qn(cB, Bc) : 218 === nc ? Vc = TB(cB, Bc) : 219 === nc && (Vc = mn(cB, Bc)), MB(cB, Bc, Vc)
        },
        number: function(cB, Bc) {
          const nc = cB[Bc.offset++];
          return nc < 128 ? nc : 202 === nc ? eB(cB, Bc) : 203 === nc ? tn(cB, Bc) : 204 === nc ? qn(cB, Bc) : 205 === nc ? TB(cB, Bc) : 206 === nc ? mn(cB, Bc) : 207 === nc ? yn(cB, Bc) : 208 === nc ? PB(cB, Bc) : 209 === nc ? OB(cB, Bc) : 210 === nc ? fB(cB, Bc) : 211 === nc ? SB(cB, Bc) : nc > 223 ? -1 * (255 - nc + 1) : void 0
        },
        stringCheck: function(cB, Bc) {
          const nc = cB[Bc.offset];
          return nc < 192 && nc > 160 || 217 === nc || 218 === nc || 219 === nc
        }
      },
      pB = {},
      hB = new Map;

    function an(cB, Bc) {
      Bc.constructor && (Object.prototype.hasOwnProperty.call(Bc, "constructor") && null == Bc.constructor[Symbol.metadata] && rB(Bc.constructor), hB.set(Bc.constructor, cB), pB[cB] = Bc), Bc.encode && (BB[cB] = Bc.encode), Bc.decode && (zn[cB] = Bc.decode)
    }

    function lB(cB) {
      for (const Bc in cB) an(Bc, cB[Bc]);
      return cB => hV(cB)
    }
    const YB = "ArraySchema does not support streaming \u2014 positional ops (splice / unshift / reverse) shift subsequent indexes, so holding ADDs back for a later tick under `maxPerTick` would desync the decoder. Use `t.stream(X)` (stable monotonic positions) or `t.map(X).stream()` (stable keys) instead.";

    function LB() {
      return {
        pendingByView: new Map,
        sentByView: new Map,
        broadcastPending: new Set,
        sentBroadcast: new Set,
        broadcastDeletes: new Set,
        maxPerTick: 32
      }
    }

    function gn(cB) {
      return cB._stream ??= LB()
    }

    function UB(cB, Bc, nc) {
      0 === Bc.activeViews.size && gn(cB).broadcastPending.add(nc)
    }

    function bn(cB, Bc, nc, Vc) {
      const rB = cB._stream;
      if (void 0 === rB) return !0;
      let uc = !1;
      return rB.broadcastPending.delete(Vc) ? uc = !0 : rB.sentBroadcast.delete(Vc) && rB.broadcastDeletes.add(Vc), Bc.forEachActiveView((cB => {
        const Bc = rB.pendingByView.get(cB.id);
        if (Bc?.has(Vc)) return Bc.delete(Vc), void(uc = !0);
        const sc = rB.sentByView.get(cB.id);
        if (sc?.has(Vc)) {
          sc.delete(Vc);
          let Bc = cB.changes.get(nc);
          void 0 === Bc && (Bc = new Map, cB.changes.set(nc, Bc)), Bc.set(Vc, Ic.DELETE)
        }
      })), uc
    }

    function ZB(cB, Bc) {
      const nc = cB._stream?.pendingByView;
      if (void 0 === nc) return !1;
      for (const [Vc, Ic] of nc)
        if (Ic.size > 0 && void 0 !== Bc.activeViews.get(Vc)?.deref()) return !0;
      return !1
    }

    function QB(cB) {
      const Bc = cB._stream;
      return void 0 !== Bc && (Bc.broadcastPending.size > 0 || Bc.broadcastDeletes.size > 0)
    }

    function CB(cB, Bc, nc) {
      const Vc = gn(cB);
      let Ic = Vc.pendingByView.get(Bc);
      void 0 === Ic && (Ic = new Set, Vc.pendingByView.set(Bc, Ic)), Ic.add(nc)
    }

    function vn(cB, Bc) {
      const nc = cB._stream;
      void 0 !== nc && (nc.pendingByView.delete(Bc), nc.sentByView.delete(Bc), nc.priorityByView?.delete(Bc))
    }
    const DB = {
      8: "uint8",
      16: "uint16",
      32: "uint32"
    };

    function NB(cB) {
      if (null == cB || "object" !== typeof cB) throw new Error("t.quantized(): options object with { min, max } is required.");
      const {
        min: Bc,
        max: nc
      } = cB;
      if ("number" !== typeof Bc || "number" !== typeof nc || !(nc > Bc) || !Number.isFinite(Bc) || !Number.isFinite(nc)) throw new Error(`t.quantized(): require finite min < max (got min=${Bc}, max=${nc}).`);
      const Vc = cB.bits ?? 16;
      if (8 !== Vc && 16 !== Vc && 32 !== Vc) throw new Error(`t.quantized(): bits must be 8, 16 or 32 (got ${Vc}).`);
      const Ic = cB.mode ?? "clamp";
      if ("clamp" !== Ic && "wrap" !== Ic) throw new Error(`t.quantized(): mode must be "clamp" or "wrap" (got ${JSON.stringify(Ic)}).`);
      const rB = "wrap" === Ic,
        uc = Math.pow(2, Vc);
      return {
        min: Bc,
        max: nc,
        bits: Vc,
        wrap: rB,
        wire: DB[Vc],
        range: nc - Bc,
        span: rB ? uc : Bc === -nc ? uc - 2 : uc - 1
      }
    }

    function EB(cB) {
      return null !== cB && "object" === typeof cB && void 0 !== cB.quantized
    }

    function oB(cB, Bc) {
      if (cB.wrap) {
        if (!Number.isFinite(Bc)) return 0;
        const nc = cB.range;
        let Vc = (Bc - cB.min) % nc;
        Vc < 0 && (Vc += nc);
        const Ic = cB.span;
        return Math.floor(Vc / nc * Ic + .5) % Ic
      }
      if (Bc !== Bc) return 0;
      const nc = Bc < cB.min ? cB.min : Bc > cB.max ? cB.max : Bc;
      return Math.floor((nc - cB.min) / cB.range * cB.span + .5)
    }

    function WB(cB, Bc) {
      return cB.min + Bc / cB.span * cB.range
    }

    function wB(cB) {
      const Bc = BB[cB.wire];
      return (nc, Vc, Ic) => Bc(nc, oB(cB, Vc), Ic)
    }
    class kn {
      types = {};
      schemas = new Map;
      hasFilters = !1;
      static inheritedTypes = new WeakMap;
      static cachedContexts = new WeakMap;
      static register(cB) {
        const Bc = Object.getPrototypeOf(cB);
        if (Bc !== ZV) {
          let nc = kn.inheritedTypes.get(Bc);
          nc || (nc = new Set, kn.inheritedTypes.set(Bc, nc)), nc.add(cB)
        }
      }
      static cache(cB) {
        let Bc = kn.cachedContexts.get(cB);
        return Bc || (Bc = new kn(cB), kn.cachedContexts.set(cB, Bc)), Bc
      }
      constructor(cB) {
        cB && this.discoverTypes(cB)
      }
      has(cB) {
        return this.schemas.has(cB)
      }
      get(cB) {
        return this.types[cB]
      }
      add(cB) {
        let Bc = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.schemas.size;
        return !this.schemas.has(cB) && (this.types[Bc] = cB, null == cB[Symbol.metadata] && KB.initialize(cB), this.schemas.set(cB, Bc), !0)
      }
      getTypeId(cB) {
        return this.schemas.get(cB)
      }
      discoverTypes(cB) {
        if (!this.add(cB)) return;
        kn.inheritedTypes.get(cB)?.forEach((cB => {
          this.discoverTypes(cB)
        }));
        let Bc = cB;
        for (;
          (Bc = Object.getPrototypeOf(Bc)) && Bc !== ZV && Bc !== Function.prototype;) this.discoverTypes(Bc);
        const nc = cB[Symbol.metadata];
        (nc[bB] || nc[Nc]) && (this.hasFilters = !0);
        for (const Vc in nc) {
          const cB = nc[Vc].type;
          if ("string" !== typeof cB && !EB(cB))
            if ("function" === typeof cB) this.discoverTypes(cB);
            else {
              const Bc = Object.values(cB)[0];
              if ("string" === typeof Bc) continue;
              this.discoverTypes(Bc)
            }
        }
      }
      debug() {
        return `TypeContext ->\n\tSchema types: ${this.schemas.size}\n\thasFilters: ${this.hasFilters}`
      }
    }

    function XB(cB) {
      const Bc = FB(cB);
      return Bc ? {
        complexTypeKlass: pB[Bc],
        childType: cB[Bc]
      } : {
        complexTypeKlass: !1,
        childType: cB
      }
    }

    function HB(cB, Bc) {
      const nc = JB(cB),
        Vc = FB(nc),
        Ic = Vc && FB(nc[Vc]);
      if (Ic) throw new Error(`${Bc?`${Bc}: `:""}@colyseus/schema: nested collections are not supported ("${Vc}" of "${Ic}"). Collections can only hold primitive types or Schema classes, wrap the inner ${Ic} in a Schema class.`);
      return nc
    }

    function FB(cB) {
      return "object" === typeof cB && null !== cB ? Object.keys(cB).find((cB => void 0 !== pB[cB])) : void 0
    }

    function JB(cB) {
      if ("object" !== typeof cB || null === cB) return cB;
      if (Array.isArray(cB)) return {
        array: JB(cB[0])
      };
      const Bc = function(cB) {
        const Bc = Object.keys(cB),
          nc = Bc.filter((cB => /\d+/.test(cB)));
        if (nc.length > 0 && nc.length === Bc.length / 2 && cB[cB[nc[0]]] == nc[0]) return "number";
        if (Bc.length > 0 && Bc.every((Bc => cB[Bc] === Bc))) return "string"
      }(cB);
      if (Bc) return Bc;
      if (EB(cB)) return "string" === typeof cB.quantized.wire ? cB : {
        quantized: NB(cB.quantized)
      };
      if (void 0 !== cB.type) return JB(cB.type);
      const nc = FB(cB);
      return nc && (cB[nc] = JB(cB[nc])), cB
    }
    const jn = [Uc, Qc, Cc, vB, Dc, Nc, Lc];

    function RB(cB, Bc, nc) {
      cB[Bc] || Object.defineProperty(cB, Bc, {
        value: [],
        enumerable: !1,
        configurable: !0,
        writable: !0
      }), cB[Bc].push(nc)
    }
    const KB = {
        addField(cB, Bc, nc, Vc, Ic) {
          if (Bc >= 63) throw new Error(`Can't define field '${nc}'.\nSchema instances may only have up to 63 fields.`);
          cB[Bc] = Object.assign(cB[Bc] || {}, {
            type: Vc,
            index: Bc,
            name: nc
          }), Object.defineProperty(cB, lc, {
            value: cB[lc] || {},
            enumerable: !1,
            configurable: !0
          }), cB[lc][nc] = Ic || {
            value: void 0,
            writable: !0,
            enumerable: !0,
            configurable: !0
          }, Object.defineProperty(cB, gB, {
            value: Bc,
            enumerable: !1,
            configurable: !0
          }), Object.defineProperty(cB, nc, {
            value: Bc,
            enumerable: !1,
            configurable: !0
          }), "string" === typeof cB[Bc].type || EB(cB[Bc].type) || (void 0 === cB[Uc] && Object.defineProperty(cB, Uc, {
            value: [],
            enumerable: !1,
            configurable: !0
          }), cB[Uc].push(Bc));
          const rB = cB[Bc].type;
          if (rB && "object" === typeof rB && void 0 !== rB.stream) {
            if (void 0 !== rB.array) throw new Error(YB);
            cB[Bc].stream = !0, cB[Nc] || Object.defineProperty(cB, Nc, {
              value: [],
              enumerable: !1,
              configurable: !0,
              writable: !0
            }), cB[Nc].includes(Bc) || cB[Nc].push(Bc);
            const Ic = Vc?.priority;
            "function" === typeof Ic && KB.setStreamPriority(cB, nc, Ic)
          }
        },
        setTag(cB, Bc, nc) {
          const Vc = cB[Bc];
          if (cB[Vc].tag = nc, cB[bB] || (Object.defineProperty(cB, bB, {
              value: [],
              enumerable: !1,
              configurable: !0
            }), Object.defineProperty(cB, Zc, {
              value: {},
              enumerable: !1,
              configurable: !0
            })), cB[bB].push(Vc), nc < 0) cB[Zc][nc] || (cB[Zc][nc] = []), cB[Zc][nc].push(Vc);
          else
            for (let Ic = nc; Ic > 0; Ic &= Ic - 1) {
              const Bc = Ic & -Ic;
              cB[Zc][Bc] || (cB[Zc][Bc] = []), cB[Zc][Bc].push(Vc)
            }
        },
        setUnreliable(cB, Bc) {
          const nc = cB[Bc];
          if ("string" !== typeof cB[nc].type) throw new Error(`@unreliable cannot be applied to ref-type field "${Bc}". For ref-type fields, mark each primitive sub-field with @unreliable instead. See README "Limitations and best practices".`);
          cB[nc].unreliable = !0, cB[Qc] || Object.defineProperty(cB, Qc, {
            value: [],
            enumerable: !1,
            configurable: !0,
            writable: !0
          }), cB[Qc].push(nc)
        },
        setPatchOnly(cB, Bc) {
          const nc = cB[Bc];
          if (cB[nc].fullStateOnly) throw new Error(`field "${Bc}" cannot be both patchOnly and fullStateOnly \u2014 those are the only two delivery channels, so the field would never reach a client.`);
          cB[nc].patchOnly = !0, RB(cB, Cc, nc), RB(cB, vB, nc)
        },
        setDeprecated(cB, Bc) {
          const nc = cB[Bc];
          cB[nc].deprecated = !0, RB(cB, vB, nc), Object.defineProperty(cB, nc, {
            value: cB[nc],
            enumerable: !1,
            configurable: !0
          })
        },
        setFullStateOnly(cB, Bc) {
          const nc = cB[Bc];
          if (cB[nc].patchOnly) throw new Error(`field "${Bc}" cannot be both patchOnly and fullStateOnly \u2014 those are the only two delivery channels, so the field would never reach a client.`);
          cB[nc].fullStateOnly = !0, RB(cB, Dc, nc)
        },
        setStream(cB, Bc) {
          const nc = cB[Bc];
          cB[nc].stream = !0, cB[Nc] || Object.defineProperty(cB, Nc, {
            value: [],
            enumerable: !1,
            configurable: !0,
            writable: !0
          }), cB[Nc].push(nc)
        },
        setStreamPriority(cB, Bc, nc) {
          const Vc = cB[Bc];
          cB[Ec] || Object.defineProperty(cB, Ec, {
            value: {},
            enumerable: !1,
            configurable: !0,
            writable: !0
          }), cB[Ec][Vc] = nc
        },
        getStreamPriority: (cB, Bc) => cB?.[Ec]?.[Bc],
        defineField(cB, Bc, nc, Vc, Ic) {
          const rB = HB(Ic, `${cB.name}.${Vc}`),
            {
              complexTypeKlass: uc,
              childType: sc
            } = XB(rB);
          KB.addField(Bc, nc, Vc, rB, lV(Vc, nc, sc, uc)), Bc[lc][Vc] && Object.defineProperty(cB.prototype, Vc, Bc[lc][Vc]), ("string" === typeof rB || EB(rB)) && (Bc[Lc] || Object.defineProperty(Bc, Lc, {
            value: [],
            enumerable: !1,
            configurable: !0,
            writable: !0
          }), Bc[Lc][nc] = "string" === typeof rB ? BB[rB] : wB(rB.quantized))
        },
        setFields(cB, Bc) {
          const nc = cB.prototype.constructor;
          kn.register(nc);
          const Vc = Object.getPrototypeOf(nc),
            Ic = Vc && Vc[Symbol.metadata],
            rB = KB.initialize(nc);
          nc[Mc] || (nc[Mc] = ZV[Mc]), nc[Pc] || (nc[Pc] = ZV[Pc]), nc[qB] || (nc[qB] = ZV[qB]), nc.prototype.toJSON || (nc.prototype.toJSON = ZV.prototype.toJSON);
          let uc = rB[gB] ?? (Ic && Ic[gB]) ?? -1;
          uc++, rB[Lc] || Object.defineProperty(rB, Lc, {
            value: Ic?.[Lc] ? [...Ic[Lc]] : [],
            enumerable: !1,
            configurable: !0,
            writable: !0
          });
          for (const sc in Bc) {
            if (void 0 !== rB[sc]) throw new Error(`@colyseus/schema: Duplicate '${sc}' definition on '${nc.name||"(anonymous)"}'.`);
            KB.defineField(nc, rB, uc, sc, Bc[sc]), uc++
          }
          return cB
        },
        isDeprecated: (cB, Bc) => !0 === cB[Bc].deprecated,
        initialize(cB) {
          const Bc = Object.getPrototypeOf(cB),
            nc = Bc[Symbol.metadata];
          let Vc = cB[Symbol.metadata] ?? Object.create(null);
          if (Bc !== ZV && Vc === nc && (Vc = Object.create(null), nc)) {
            Object.setPrototypeOf(Vc, nc), Object.defineProperty(Vc, gB, {
              value: nc[gB],
              enumerable: !1,
              configurable: !0,
              writable: !0
            }), void 0 !== nc[bB] && (Object.defineProperty(Vc, bB, {
              value: [...nc[bB]],
              enumerable: !1,
              configurable: !0,
              writable: !0
            }), Object.defineProperty(Vc, Zc, {
              value: {
                ...nc[Zc]
              },
              enumerable: !1,
              configurable: !0,
              writable: !0
            }));
            for (const cB of jn) {
              const Bc = nc[cB];
              void 0 !== Bc && Object.defineProperty(Vc, cB, {
                value: [...Bc],
                enumerable: !1,
                configurable: !0,
                writable: !0
              })
            }
            Object.defineProperty(Vc, lc, {
              value: {
                ...nc[lc]
              },
              enumerable: !1,
              configurable: !0,
              writable: !0
            })
          }
          return Object.defineProperty(cB, Symbol.metadata, {
            value: Vc,
            writable: !1,
            configurable: !0
          }), Vc
        },
        isValidInstance: cB => cB.constructor[Symbol.metadata] && Object.prototype.hasOwnProperty.call(cB.constructor[Symbol.metadata], gB),
        getFields(cB) {
          const Bc = cB[Symbol.metadata],
            nc = {};
          for (let Vc = 0; Vc <= Bc[gB]; Vc++) nc[Bc[Vc].name] = Bc[Vc].type;
          return nc
        },
        hasViewTagAtIndex: (cB, Bc) => cB?.[bB]?.includes(Bc),
        hasUnreliableAtIndex: (cB, Bc) => cB?.[Qc]?.includes(Bc),
        hasPatchOnlyAtIndex: (cB, Bc) => cB?.[Cc]?.includes(Bc),
        hasFullStateOnlyAtIndex: (cB, Bc) => cB?.[Dc]?.includes(Bc),
        hasStreamAtIndex: (cB, Bc) => cB?.[Nc]?.includes(Bc)
      },
      xn = (cB, Bc, nc) => cB(Bc, nc);
    class dB {
      dirtyLow = 0;
      dirtyHigh = 0;
      ops;
      constructor(cB) {
        this.ops = new Uint8Array(Math.max(cB + 1, 1))
      }
      record(cB, Bc) {
        const nc = this.ops[cB];
        0 === nc ? this.ops[cB] = Bc : (nc === Ic.DELETE || nc === Ic.ADD && Bc === Ic.DELETE_AND_ADD) && (this.ops[cB] = Ic.DELETE_AND_ADD), cB < 32 ? this.dirtyLow |= 1 << cB : this.dirtyHigh |= 1 << cB - 32
      }
      recordDelete(cB, Bc) {
        this.ops[cB] = Bc, cB < 32 ? this.dirtyLow |= 1 << cB : this.dirtyHigh |= 1 << cB - 32
      }
      recordRaw(cB, Bc) {
        this.record(cB, Bc)
      }
      operationAt(cB) {
        const Bc = this.ops[cB];
        return 0 === Bc ? void 0 : Bc
      }
      setOperationAt(cB, Bc) {
        this.ops[cB] = Bc
      }
      forEach(cB) {
        this.forEachWithCtx(cB, xn)
      }
      forEachWithCtx(cB, Bc) {
        let nc = this.dirtyLow,
          Vc = this.dirtyHigh;
        const Ic = this.ops;
        for (; 0 !== nc;) {
          const Vc = nc & -nc,
            rB = 31 - Math.clz32(Vc);
          nc ^= Vc, Bc(cB, rB, Ic[rB])
        }
        for (; 0 !== Vc;) {
          const nc = Vc & -Vc,
            rB = 31 - Math.clz32(nc) + 32;
          Vc ^= nc, Bc(cB, rB, Ic[rB])
        }
      }
      size() {
        return GB(this.dirtyLow) + GB(this.dirtyHigh)
      }
      has() {
        return 0 !== (this.dirtyLow | this.dirtyHigh)
      }
      reset() {
        this.dirtyLow = 0, this.dirtyHigh = 0, this.ops.fill(0)
      }
    }
    class AB {
      BI = new Map;
      pureOps = [];
      record(cB, Bc) {
        const nc = this.BI.get(cB);
        void 0 === nc ? this.BI.set(cB, Bc) : (nc === Ic.DELETE || nc === Ic.ADD && Bc === Ic.DELETE_AND_ADD) && this.BI.set(cB, Ic.DELETE_AND_ADD)
      }
      recordDelete(cB, Bc) {
        this.BI.set(cB, Bc)
      }
      recordRaw(cB, Bc) {
        this.BI.set(cB, Bc)
      }
      recordPure(cB) {
        this.pureOps.push([this.BI.size, cB])
      }
      operationAt(cB) {
        return this.BI.get(cB)
      }
      setOperationAt(cB, Bc) {
        this.BI.has(cB) && this.BI.set(cB, Bc)
      }
      forEach(cB) {
        this.forEachWithCtx(cB, xn)
      }
      forEachWithCtx(cB, Bc) {
        const nc = this.pureOps;
        if (nc.length > 0) {
          let Vc = 0,
            Ic = 0;
          for (const [rB, uc] of this.BI) {
            for (; Vc < nc.length && nc[Vc][0] <= Ic;) {
              const Ic = nc[Vc++][1];
              Bc(cB, -Ic, Ic)
            }
            Bc(cB, rB, uc), Ic++
          }
          for (; Vc < nc.length;) {
            const Ic = nc[Vc++][1];
            Bc(cB, -Ic, Ic)
          }
        } else
          for (const [Vc, Ic] of this.BI) Bc(cB, Vc, Ic)
      }
      size() {
        return this.BI.size + this.pureOps.length
      }
      has() {
        return this.BI.size > 0 || this.pureOps.length > 0
      }
      reset() {
        this.BI.clear(), this.pureOps.length = 0
      }
      shift(cB) {
        const Bc = new Map;
        for (const [nc, Vc] of this.BI) Bc.set(nc + cB, Vc);
        this.BI = Bc
      }
    }

    function GB(cB) {
      return 16843009 * ((cB = (858993459 & (cB -= cB >>> 1 & 1431655765)) + (cB >>> 2 & 858993459)) + (cB >>> 4) & 252645135) >>> 24
    }

    function cV(cB) {
      if (void 0 === cB) return 0;
      let Bc = 0;
      for (let nc = 0, Vc = cB.length; nc < Vc; nc++) {
        const Vc = cB[nc];
        Vc < 32 && (Bc |= 1 << Vc)
      }
      return Bc
    }

    function Bn(cB) {
      const Bc = cB.constructor;
      if (Object.prototype.hasOwnProperty.call(Bc, Yc)) return Bc[Yc];
      const nc = Bc[Symbol.metadata],
        Vc = KB.isValidInstance(cB),
        Ic = (nc?.[bB]?.length ?? 0) > 0,
        rB = function(cB) {
          const Bc = [],
            nc = [],
            Vc = [],
            Ic = [],
            rB = cB?.[gB];
          if (void 0 === rB) return {
            names: Bc,
            types: nc,
            tags: Vc,
            encoders: Ic
          };
          const uc = cB[Lc];
          for (let sc = 0; sc <= rB; sc++) {
            const rB = cB[sc];
            void 0 !== rB ? (Bc[sc] = rB.name, nc[sc] = rB.type, Vc[sc] = rB.tag, Ic[sc] = uc?.[sc]) : (Bc[sc] = void 0, nc[sc] = void 0, Vc[sc] = void 0, Ic[sc] = void 0)
          }
          return {
            names: Bc,
            types: nc,
            tags: Vc,
            encoders: Ic
          }
        }(nc),
        uc = Vc && !Ic ? void 0 : Bc[Oc],
        sc = {
          encoder: Bc[Pc],
          filter: uc,
          metadata: nc,
          isSchema: Vc,
          filterBitmask: Vc ? cV(nc?.[bB]) : 0,
          hasAnyFullStateOnly: (nc?.[Dc]?.length ?? 0) > 0,
          hasAnyUnreliable: (nc?.[Qc]?.length ?? 0) > 0,
          hasAnyStream: (nc?.[Nc]?.length ?? 0) > 0,
          hasAnyView: Ic,
          fullStateOnlyBitmask: cV(nc?.[Dc]),
          unreliableBitmask: cV(nc?.[Qc]),
          streamBitmask: cV(nc?.[Nc]),
          names: rB.names,
          types: rB.types,
          tags: rB.tags,
          encoders: rB.encoders
        };
      return Object.defineProperty(Bc, Yc, {
        value: sc,
        enumerable: !1,
        writable: !0,
        configurable: !0
      }), sc
    }

    function nn(cB, Bc) {
      if (void 0 !== cB.parentRef && Bc(cB.parentRef, cB._parentIndex)) return !0;
      for (let nc = cB.extraParents; void 0 !== nc; nc = nc.next)
        if (Bc(nc.ref, nc.index)) return !0;
      return !1
    }
    const Vn = (cB, Bc) => {
        cB.isFieldUnreliable(Bc) ? cB.ensureUnreliableRecorder().record(Bc, Ic.ADD) : cB.record(Bc, Ic.ADD)
      },
      In = (cB, Bc) => cB(Bc);

    function rV(cB, Bc, nc) {
      const Vc = cB.refTarget;
      if (void 0 !== Vc[tB]) {
        if (cB.isPatchOnly) return;
        if (Array.isArray(Vc.items)) {
          const cB = Vc.items;
          for (let Vc = 0, Ic = cB.length; Vc < Ic; Vc++) void 0 !== cB[Vc] && nc(Bc, Vc)
        } else if (void 0 !== Vc.journal)
          for (const [cB, Ic] of Vc.journal.keyByIndex) Vc.$items.has(Ic) && nc(Bc, cB);
        else if (void 0 !== Vc.$items)
          for (const cB of Vc.$items.keys()) nc(Bc, cB)
      } else {
        const Ic = cB.metadata;
        if (!Ic) return;
        const rB = Ic[gB] ?? -1,
          uc = Ic[vB],
          sc = cB.encDescriptor.names;
        for (let cB = 0; cB <= rB; cB++) {
          const Ic = sc[cB];
          if (void 0 === Ic) continue;
          if (uc && uc.includes(cB)) continue;
          const rB = Vc[Ic];
          void 0 !== rB && null !== rB && nc(Bc, cB)
        }
      }
    }

    function un(cB, Bc, nc, Vc) {
      ! function(cB, Bc, nc) {
        if (!Bc) return;
        const Vc = Bc[ec],
          Ic = !Vc._isSchema;
        let rB;
        Ic ? (Bc = Vc.parent, nc = Vc.parentIndex, rB = Bc?.[ec].metadata) : rB = Vc.metadata;
        const uc = (rB?.[Cc]?.includes(nc) ? Ln : 0) | (rB?.[Dc]?.includes(nc) ? gV : 0),
          sc = Vc.flags & Zn | uc,
          Mc = cB.flags;
        cB.flags = Mc | sc;
        sc & ~Mc & gV && (cB.reset(), cB.unreliableRecorder?.reset());
        const Pc = cB.root?.types;
        if (!Pc?.hasFilters) return;
        const qB = rB?.[bB]?.includes(nc) ?? !1,
          Oc = rB?.[Nc]?.includes(nc) ?? !1,
          Tc = Vc.isFiltered || qB || Oc;
        if (cB.isFiltered = Tc, Oc && !Ic) {
          cB.isStreamCollection = !0;
          const Bc = gn(cB.ref);
          if (void 0 === Bc.priority) {
            const cB = KB.getStreamPriority(rB, nc);
            void 0 !== cB && (Bc.priority = cB)
          }
          cB.root?.registerStream(cB.ref)
        }
        if (Tc) {
          const Bc = Mn(cB);
          cB.isVisibilitySharedWithParent = Vc.isFiltered && Bc && !Oc && (!qB || Ic && rB[nc].tag !== eV)
        }
      }(cB, Bc, nc), cB.isFullStateOnly || (cB.has() && cB.root?.enqueueChangeTree(cB), cB.unreliableRecorder?.has() && cB.root?.enqueueUnreliable(cB), cB.has() || cB.unreliableRecorder?.has() || cB.root?.enqueueChangeTree(cB))
    }

    function sn(cB) {
      const Bc = cB.pendingFilterRefresh;
      for (let nc = 0; nc < Bc.length; nc++) {
        const cB = Bc[nc];
        0 !== (cB.flags & bV) && Pn(cB)
      }
      Bc.length = 0
    }

    function Mn(cB) {
      return cB._isSchema || "string" !== typeof cB.refTarget[tB]
    }

    function Pn(cB) {
      cB.flags &= ~bV;
      const Bc = cB.root;
      if (void 0 === Bc || void 0 === cB.parentRef) return;
      const nc = Mn(cB);
      let Vc = mV(cB, cB.parentRef, cB._parentIndex, nc);
      for (let rB = cB.extraParents; void 0 !== rB && Vc !== fn; rB = rB.next) Vc |= mV(cB, rB.ref, rB.index, nc);
      if (0 === Vc) return;
      cB.isVisibilitySharedWithParent = 0 !== (Vc & Tn);
      const Ic = 0 === (Vc & On);
      Ic !== cB.isFiltered && (cB.isFiltered = Ic, Ic || cB.isFullStateOnly || (cB.forEachLiveWithCtx(cB, Vn), cB.has() && Bc.enqueueChangeTree(cB), cB.unreliableRecorder?.has() && Bc.enqueueUnreliable(cB)), cB.forEachChildWithCtx(cB, en))
    }
    const qV = 1,
      On = 2,
      Tn = 4,
      fn = qV | On | Tn;

    function mV(cB, Bc, nc, Vc) {
      const Ic = Bc[ec];
      if (Ic.root !== cB.root || ! function(cB, Bc, nc) {
          const Vc = Bc.refTarget;
          if (Bc.isArray) {
            const Bc = Vc.items,
              Ic = Bc[nc];
            if (void 0 !== Ic && Ic[ec] === cB) return !0;
            for (let nc = 0, Vc = Bc.length; nc < Vc; nc++) {
              const Vc = Bc[nc];
              if (void 0 !== Vc && Vc[ec] === cB) return !0
            }
            return !1
          }
          const Ic = Bc.getValue(nc);
          return void 0 !== Ic && Ic[ec] === cB
        }(cB, Ic, nc)) return 0;
      Ic.flags & bV && Pn(Ic);
      let rB = qV;
      if (Ic._isSchema) {
        void 0 !== Ic.encDescriptor.tags[nc] || Ic.isFieldStream(nc) || (Ic.isFiltered ? Vc && (rB |= Tn) : rB |= On)
      } else if (Ic.isFiltered) {
        if (Vc && !Ic.isStreamCollection) {
          const cB = Ic.parent?.[ec];
          (cB?._isSchema ? cB.encDescriptor.tags[Ic.parentIndex] : void 0) !== eV && (rB |= Tn)
        }
      } else rB |= On;
      return rB
    }
    const en = (cB, Bc, nc) => {
      Pn(Bc)
    };

    function tV(cB, Bc, nc, Vc) {
      if (cB.addParent(Bc, Vc), !nc) return;
      const Ic = nc.add(cB);
      nc !== cB.root && (cB.root = nc, un(cB, Bc, Vc));
      const rB = Bc?.[ec];
      if (void 0 !== rB && void 0 !== rB.subscribedViews && void 0 !== Bc[tB] && function(cB, Bc, nc, Vc) {
          const Ic = cB.subscribedViews;
          if (void 0 === Ic) return;
          const rB = cB.isStreamCollection,
            uc = rB ? cB.ref : void 0,
            sc = rB ? void 0 : nc[ec];
          for (let Mc = 0, Pc = Ic.length; Mc < Pc; Mc++) {
            let cB = Ic[Mc];
            for (; 0 !== cB;) {
              const nc = cB & -cB;
              cB ^= nc;
              const Pc = 32 * Mc + (31 - Math.clz32(nc)),
                qB = Vc.activeViews.get(Pc),
                Oc = qB?.deref();
              void 0 !== Oc ? rB ? CB(uc, Pc, Bc) : void 0 !== sc && Oc.markVisible(sc) : Ic[Mc] &= ~nc
            }
          }
        }(rB, Vc, cB.ref, nc), Ic) {
        let Bc = pn[hn];
        void 0 === Bc && (Bc = {
          parentRef: void 0,
          root: void 0
        }, pn[hn] = Bc), Bc.parentRef = cB.ref, Bc.root = nc, hn++, yV(cB, Bc, aV), hn--
      }
    }

    function Sn(cB, Bc, nc) {
      cB(Bc, nc)
    }

    function yV(cB, Bc, nc) {
      const Vc = cB.refTarget;
      if (Vc[tB]) {
        if ("string" !== typeof Vc[tB]) {
          const cB = Vc.items;
          if (void 0 !== cB)
            for (let Vc = 0, Ic = cB.length; Vc < Ic; Vc++) {
              const Ic = cB[Vc];
              Ic && nc(Bc, Ic[ec], Vc)
            } else {
              const cB = Vc.$items,
                Ic = Vc._collectionIndexes;
              for (const Vc of cB.keys()) {
                const rB = cB.get(Vc);
                rB && nc(Bc, rB[ec], Ic?.[Vc] ?? Vc)
              }
            }
        }
      } else {
        const Ic = cB.metadata,
          rB = Ic?.[Uc];
        if (!rB) return;
        const uc = cB.encDescriptor.names;
        for (let cB = 0, sc = rB.length; cB < sc; cB++) {
          const Ic = rB[cB],
            sc = Vc[uc[Ic]];
          sc && nc(Bc, sc[ec], Ic)
        }
      }
    }

    function zV(cB, Bc, nc) {
      Bc.root !== cB ? Bc.setRoot(cB) : cB.add(Bc)
    }
    const pn = [];
    let hn = 0;

    function aV(cB, Bc, nc) {
      if (Bc.root === cB.root) return cB.root.add(Bc), void cB.root.moveNextToParent(Bc);
      Bc.setParent(cB.parentRef, cB.root, nc)
    }

    function lnc(cB, Bc, nc) {
      const Vc = (3 & nc) << 3;
      return nc < 4 ? cB >>> Vc & 255 : Bc >>> Vc & 255
    }
    const Yn = (cB, Bc, nc) => cB(Bc, nc);
    const Ln = 16,
      gV = 32,
      Un = 128,
      bV = 256,
      Zn = Ln | gV;
    class Qn {
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
      set isFiltered(cB) {
        this.flags = cB ? 1 | this.flags : -2 & this.flags
      }
      get isVisibilitySharedWithParent() {
        return 0 !== (2 & this.flags)
      }
      set isVisibilitySharedWithParent(cB) {
        this.flags = cB ? 2 | this.flags : -3 & this.flags
      }
      get isNew() {
        return 0 !== (4 & this.flags)
      }
      set isNew(cB) {
        this.flags = cB ? 4 | this.flags : -5 & this.flags
      }
      get isUnreliable() {
        return 0 !== (8 & this.flags)
      }
      set isUnreliable(cB) {
        this.flags = cB ? 8 | this.flags : -9 & this.flags
      }
      get isPatchOnly() {
        return 0 !== (this.flags & Ln)
      }
      set isPatchOnly(cB) {
        this.flags = cB ? this.flags | Ln : this.flags & ~Ln
      }
      get isFullStateOnly() {
        return 0 !== (this.flags & gV)
      }
      set isFullStateOnly(cB) {
        this.flags = cB ? this.flags | gV : this.flags & ~gV
      }
      get isStreamCollection() {
        return 0 !== (64 & this.flags)
      }
      set isStreamCollection(cB) {
        this.flags = cB ? 64 | this.flags : -65 & this.flags
      }
      get needsRestage() {
        return 0 !== (this.flags & Un)
      }
      set needsRestage(cB) {
        this.flags = cB ? this.flags | Un : -129 & this.flags
      }
      get hasFilteredFields() {
        return this.isFiltered || this.encDescriptor.hasAnyView
      }
      ensureUnreliableRecorder() {
        return void 0 === this.unreliableRecorder && (this.unreliableRecorder = this._isSchema ? new dB(this.metadata?.[gB] ?? 0) : new AB), this.unreliableRecorder
      }
      isFieldUnreliable(cB) {
        const Bc = this.encDescriptor;
        return !!Bc.hasAnyUnreliable && (cB < 32 ? 0 !== (Bc.unreliableBitmask & 1 << cB) : KB.hasUnreliableAtIndex(this.metadata, cB))
      }
      isFieldFullStateOnly(cB) {
        if (this.isFullStateOnly) return !0;
        const Bc = this.encDescriptor;
        return !!Bc.hasAnyFullStateOnly && (cB < 32 ? 0 !== (Bc.fullStateOnlyBitmask & 1 << cB) : KB.hasFullStateOnlyAtIndex(this.metadata, cB))
      }
      isFieldStream(cB) {
        const Bc = this.encDescriptor;
        return !!Bc.hasAnyStream && (cB < 32 ? 0 !== (Bc.streamBitmask & 1 << cB) : KB.hasStreamAtIndex(this.metadata, cB))
      }
      constructor(cB) {
        let Bc = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : cB;
        this.ref = cB, this.refTarget = Bc;
        const nc = Bn(cB);
        this.encDescriptor = nc, this.metadata = nc.metadata;
        const Vc = nc.isSchema;
        if (this._isSchema = Vc, this.ops = void 0, this.collDirty = void 0, this.collPureOps = void 0, Vc) {
          const cB = this.metadata?.[gB] ?? 0;
          cB > 7 && (this.ops = new Uint8Array(cB + 1))
        } else this.collDirty = new Map
      }
      _opAt(cB) {
        const Bc = this.ops;
        if (void 0 !== Bc) return Bc[cB];
        const nc = (3 & cB) << 3;
        return cB < 4 ? this.opsLow >>> nc & 255 : this.opsHigh >>> nc & 255
      }
      _opPut(cB, Bc) {
        const nc = this.ops;
        if (void 0 !== nc) return void(nc[cB] = Bc);
        const Vc = (3 & cB) << 3,
          Ic = ~(255 << Vc);
        cB < 4 ? this.opsLow = this.opsLow & Ic | Bc << Vc : this.opsHigh = this.opsHigh & Ic | Bc << Vc
      }
      _markDirty(cB) {
        cB < 32 ? this.dirtyLow |= 1 << cB : this.dirtyHigh |= 1 << cB - 32
      }
      record(cB, Bc) {
        if (this._isSchema) {
          const nc = this._opAt(cB);
          0 === nc ? this._opPut(cB, Bc) : (nc === Ic.DELETE || nc === Ic.ADD && Bc === Ic.DELETE_AND_ADD) && this._opPut(cB, Ic.DELETE_AND_ADD), this._markDirty(cB)
        } else {
          const nc = this.collDirty,
            Vc = nc.get(cB);
          let rB;
          rB = void 0 === Vc ? Bc : Vc === Ic.DELETE || Vc === Ic.ADD && Bc === Ic.DELETE_AND_ADD ? Ic.DELETE_AND_ADD : Vc, nc.set(cB, rB)
        }
      }
      recordDelete(cB, Bc) {
        this._isSchema ? (this._opPut(cB, Bc), this._markDirty(cB)) : this.collDirty.set(cB, Bc)
      }
      recordRaw(cB, Bc) {
        this._isSchema ? (this._opPut(cB, Bc), this._markDirty(cB)) : this.collDirty.set(cB, Bc)
      }
      recordPure(cB) {
        if (this._isSchema) throw new Error("ChangeTree (Schema): pure operations are not supported");
        (this.collPureOps ??= []).push([this.collDirty.size, cB])
      }
      operationAt(cB) {
        if (this._isSchema) {
          const Bc = this._opAt(cB);
          return 0 === Bc ? void 0 : Bc
        }
        return this.collDirty.get(cB)
      }
      setOperationAt(cB, Bc) {
        if (this._isSchema) this._opPut(cB, Bc);
        else {
          const nc = this.collDirty;
          nc.has(cB) && nc.set(cB, Bc)
        }
      }
      forEach(cB) {
        this.forEachWithCtx(cB, Yn)
      }
      forEachWithCtx(cB, Bc) {
        if (this._isSchema) {
          let nc = this.dirtyLow,
            Vc = this.dirtyHigh;
          const Ic = this.ops;
          if (void 0 !== Ic) {
            for (; 0 !== nc;) {
              const Vc = nc & -nc,
                rB = 31 - Math.clz32(Vc);
              nc ^= Vc, Bc(cB, rB, Ic[rB])
            }
            for (; 0 !== Vc;) {
              const nc = Vc & -Vc,
                rB = 31 - Math.clz32(nc) + 32;
              Vc ^= nc, Bc(cB, rB, Ic[rB])
            }
          } else {
            const Vc = this.opsLow,
              Ic = this.opsHigh;
            for (; 0 !== nc;) {
              const rB = nc & -nc,
                uc = 31 - Math.clz32(rB);
              nc ^= rB, Bc(cB, uc, lnc(Vc, Ic, uc))
            }
          }
          return
        }
        const nc = this.collDirty,
          Vc = this.collPureOps;
        if (void 0 !== Vc && Vc.length > 0) {
          let Ic = 0,
            rB = 0;
          for (const [uc, sc] of nc) {
            for (; Ic < Vc.length && Vc[Ic][0] <= rB;) {
              const nc = Vc[Ic++][1];
              Bc(cB, -nc, nc)
            }
            Bc(cB, uc, sc), rB++
          }
          for (; Ic < Vc.length;) {
            const nc = Vc[Ic++][1];
            Bc(cB, -nc, nc)
          }
        } else
          for (const [Ic, rB] of nc) Bc(cB, Ic, rB)
      }
      size() {
        return this._isSchema ? GB(this.dirtyLow) + GB(this.dirtyHigh) : this.collDirty.size + (this.collPureOps?.length ?? 0)
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
      insertAt(cB, Bc) {
        if (this._isSchema) throw new Error("ChangeTree (Schema): insertAt is not supported");
        const nc = this.collDirty,
          Vc = new Map,
          rB = !this.paused && !this.isFullStateOnly;
        if (cB > 0)
          for (const [Ic, uc] of nc) Ic < cB && Vc.set(Ic, uc);
        if (rB)
          for (let uc = 0; uc < Bc; uc++) Vc.set(cB + uc, Ic.ADD);
        for (const [Ic, uc] of nc) Ic >= cB && Vc.set(Ic + Bc, uc);
        this.collDirty = Vc, rB && this.root?.enqueueChangeTree(this)
      }
      removeAt(cB, Bc) {
        if (this._isSchema) throw new Error("ChangeTree (Schema): removeAt is not supported");
        const nc = this.collDirty,
          Vc = cB + Bc;
        let Ic = !1;
        for (const uc of nc.keys())
          if (uc >= Vc) {
            Ic = !0;
            break
          } if (!Ic) {
          for (let Bc = cB; Bc < Vc; Bc++) nc.delete(Bc);
          return
        }
        const rB = new Map;
        for (const [uc, sc] of nc) uc < cB ? rB.set(uc, sc) : uc >= Vc && rB.set(uc - Bc, sc);
        this.collDirty = rB
      }
      unshift(cB) {
        this.insertAt(0, cB)
      }
      setRoot(cB) {
        ! function(cB, Bc) {
          cB.root = Bc;
          const nc = Bc.add(cB);
          un(cB, cB.parent, cB.parentIndex), nc && yV(cB, Bc, zV)
        }(this, cB)
      }
      setParent(cB, Bc, nc) {
        tV(this, cB, Bc, nc)
      }
      forEachChild(cB) {
        yV(this, cB, Sn)
      }
      forEachChildWithCtx(cB, Bc) {
        yV(this, cB, Bc)
      }
      forEachLive(cB) {
        rV(this, cB, In)
      }
      forEachLiveWithCtx(cB, Bc) {
        rV(this, cB, Bc)
      }
      operation(cB) {
        this.paused || this.isFullStateOnly || (this.recordPure(cB), this.root?.enqueueChangeTree(this))
      }
      _routeAndRecord(cB, Bc, nc) {
        if (!this.paused && !this.isFieldFullStateOnly(cB)) {
          if (this.isFieldUnreliable(cB) && !this.isNew) {
            const Vc = this.ensureUnreliableRecorder();
            return nc ? Vc.recordRaw(cB, Bc) : Vc.record(cB, Bc), void this.root?.enqueueUnreliable(this)
          }
          nc ? this.recordRaw(cB, Bc) : this.record(cB, Bc), this.root?.enqueueChangeTree(this)
        }
      }
      change(cB) {
        let Bc = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Ic.ADD;
        this._routeAndRecord(cB, Bc, !1)
      }
      indexedOperation(cB, Bc) {
        this._routeAndRecord(cB, Bc, !0)
      }
      getChange(cB) {
        return this.operationAt(cB)
      }
      pause() {
        this.paused = !0
      }
      resume() {
        this.paused = !1
      }
      untracked(cB) {
        const Bc = this.paused;
        this.paused = !0;
        try {
          return cB()
        } finally {
          this.paused = Bc
        }
      }
      markDirty(cB) {
        let Bc = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Ic.ADD;
        const nc = this.paused;
        this.paused = !1;
        try {
          this.change(cB, Bc)
        } finally {
          this.paused = nc
        }
      }
      getValue(cB) {
        let Bc = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return this.refTarget[Tc](cB, Bc)
      }
      delete(cB, Bc) {
        if (void 0 === cB) {
          try {
            throw new Error(`@colyseus/schema ${this.ref.constructor.name}: trying to delete non-existing index '${cB}'`)
          } catch (uI) {
            console.warn(uI)
          }
          return
        }
        if (this.paused || this.isFieldFullStateOnly(cB)) return this.getValue(cB);
        const nc = this.isFieldUnreliable(cB) && !this.isNew;
        nc ? this.ensureUnreliableRecorder().recordDelete(cB, Bc ?? Ic.DELETE) : this.recordDelete(cB, Bc ?? Ic.DELETE);
        const Vc = this.getValue(cB);
        return Vc && Vc[ec] && this.root?.remove(Vc[ec]), nc ? this.root?.enqueueUnreliable(this) : this.root?.enqueueChangeTree(this), Vc
      }
      endEncode() {
        this.reset(), this.changesNode = void 0, this._isSchema || this.refTarget[yB]?.(), this.isNew = !1
      }
      endEncodeUnreliable() {
        this.unreliableRecorder?.reset(), this.unreliableChangesNode = void 0, this._isSchema || this.refTarget[yB]?.()
      }
      discard() {
        this._isSchema || this.refTarget[yB]?.(), this.reset(), this.unreliableRecorder?.reset()
      }
      discardAll() {
        const cB = cB => {
          if (cB < 0) return;
          const Bc = this.getValue(cB);
          Bc && Bc[ec] && Bc[ec].discardAll()
        };
        this.forEach(cB), this.unreliableRecorder?.forEach(cB), this.discard()
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
      addParent(cB, Bc) {
        ! function(cB, Bc, nc) {
          if (cB.parentRef) {
            if (cB.parentRef[ec] === Bc[ec]) return void(cB._parentIndex = nc);
            if (nn(cB, ((cB, nc) => cB[ec] === Bc[ec]))) return void(cB._parentIndex = nc)
          }
          void 0 === cB.parentRef ? (cB.parentRef = Bc, cB._parentIndex = nc) : (cB.extraParents = {
            ref: cB.parentRef,
            index: cB._parentIndex,
            next: cB.extraParents
          }, cB.parentRef = Bc, cB._parentIndex = nc)
        }(this, cB, Bc)
      }
      setParentIndex(cB, Bc) {
        ! function(cB, Bc, nc) {
          if (void 0 !== cB.extraParents)
            if (cB.parentRef[ec] !== Bc[ec]) {
              for (let Vc = cB.extraParents; void 0 !== Vc; Vc = Vc.next)
                if (Vc.ref[ec] === Bc[ec]) return void(Vc.index = nc)
            } else cB._parentIndex = nc;
          else cB._parentIndex = nc
        }(this, cB, Bc)
      }
      removeParent() {
        return function(cB, Bc) {
          if (cB.parentRef && cB.parentRef[ec] === Bc[ec]) return cB.extraParents ? (cB.parentRef = cB.extraParents.ref, cB._parentIndex = cB.extraParents.index, cB.extraParents = cB.extraParents.next) : (cB.parentRef = void 0, cB._parentIndex = void 0), !0;
          let nc = cB.extraParents,
            Vc = null;
          for (; nc;) {
            if (nc.ref[ec] === Bc[ec]) return Vc ? Vc.next = nc.next : cB.extraParents = nc.next, !0;
            Vc = nc, nc = nc.next
          }
          return void 0 === cB.parentRef
        }(this, arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.parent)
      }
      findParent(cB) {
        return function(cB, Bc) {
          if (void 0 !== cB.parentRef && Bc(cB.parentRef, cB._parentIndex)) return {
            ref: cB.parentRef,
            index: cB._parentIndex
          };
          for (let nc = cB.extraParents; void 0 !== nc; nc = nc.next)
            if (Bc(nc.ref, nc.index)) return {
              ref: nc.ref,
              index: nc.index
            }
        }(this, cB)
      }
      hasParent(cB) {
        return nn(this, cB)
      }
      indexInParent(cB) {
        return function(cB, Bc) {
          if (cB.parentRef && cB.parentRef[ec] === Bc[ec]) return cB._parentIndex;
          for (let nc = cB.extraParents; void 0 !== nc; nc = nc.next)
            if (nc.ref[ec] === Bc[ec]) return nc.index
        }(this, cB)
      }
      getAllParents() {
        return function(cB) {
          const Bc = [];
          cB.parentRef && Bc.push({
            ref: cB.parentRef,
            index: cB._parentIndex
          });
          let nc = cB.extraParents;
          for (; nc;) Bc.push({
            ref: nc.ref,
            index: nc.index
          }), nc = nc.next;
          return Bc
        }(this)
      }
    }
    class Cn {
      ref;
      root = void 0;
      parentRef = void 0;
      paused = !1;
      isNew = !1;
      flags = 0;
      constructor(cB) {
        this.ref = cB
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
      untracked(cB) {
        return cB()
      }
      markDirty() {}
      forEachChild(cB) {
        const Bc = this.ref;
        if (Bc[tB]) {
          if ("string" !== typeof Bc[tB])
            for (const [nc, Vc] of Bc.entries()) Vc && cB(Vc[ec], Bc._collectionIndexes?.[nc] ?? nc);
          return
        }
        const nc = Bc.constructor,
          Vc = nc?.[Symbol.metadata];
        if (!Vc) return;
        const Ic = Vc[Uc] ?? [];
        for (let rB = 0; rB < Ic.length; rB++) {
          const nc = Ic[rB],
            uc = Bc[Vc[nc].name];
          uc && cB(uc[ec], nc)
        }
      }
      forEachChildWithCtx(cB, Bc) {
        this.forEachChild(((nc, Vc) => Bc(cB, nc, Vc)))
      }
      forEachLive() {}
      forEachLiveWithCtx() {}
      forEach() {}
    }

    function vV(cB) {
      let Bc = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : cB;
      var nc;
      Object.defineProperty(cB, ec, {
        value: (nc = Bc, new Cn(nc)),
        enumerable: !1,
        writable: !0
      })
    }

    function Dn(cB, Bc, nc, Vc, rB, uc, Mc) {
      void 0 !== Mc ? Mc(Bc, Vc, uc) : "string" === typeof nc ? BB[nc]?.(Bc, Vc, uc) : null != nc[Symbol.metadata] ? (BB.number(Bc, Vc[sc], uc), (rB & Ic.ADD) === Ic.ADD && cB.tryEncodeTypeId(Bc, nc, Vc.constructor, uc)) : BB.number(Bc, Vc[sc], uc)
    }
    const Nn = function(cB, Bc, nc, Vc, rB, uc, sc, Mc) {
        if (Bc[uc.offset++] = 255 & (Vc | rB), rB === Ic.DELETE) return;
        const Pc = nc.encDescriptor,
          qB = nc.ref,
          Oc = qB[hc][Vc] ?? qB[Pc.names[Vc]];
        Dn(cB, Bc, Pc.types[Vc], Oc, rB, uc, Pc.encoders[Vc])
      },
      En = function(cB, Bc, nc, Vc, rB, uc) {
        if (Bc[uc.offset++] = 255 & rB, BB.number(Bc, Vc, uc), rB === Ic.DELETE) return;
        const sc = nc.ref;
        if ((rB & Ic.ADD) === Ic.ADD) {
          const cB = sc.$indexes.get(Vc);
          BB.string(Bc, cB, uc)
        }
        Dn(cB, Bc, sc[tB], sc[Tc](Vc), rB, uc)
      },
      onc = function(cB, Bc, nc, Vc, rB, uc) {
        if (Bc[uc.offset++] = 255 & rB, BB.number(Bc, Vc, uc), rB === Ic.DELETE) return;
        const sc = nc.ref;
        Dn(cB, Bc, sc[tB], sc[Tc](Vc), rB, uc)
      },
      Wn = function(cB, Bc, nc, Vc, rB, uc) {
        const sc = nc.ref;
        (rB & Ic.ADD) === Ic.ADD && "function" === typeof sc.set ? En(cB, Bc, nc, Vc, rB, uc) : onc(cB, Bc, nc, Vc, rB, uc)
      },
      wn = function(cB, Bc, nc, Vc, rB, uc, Mc, Pc) {
        const qB = nc.refTarget,
          Oc = qB[tB],
          fc = "string" !== typeof Oc;
        let mB;
        if (Pc && nc.isFiltered && fc) {
          const cB = qB.tmpItems[Vc];
          if (!cB) return;
          if (mB = cB[sc], rB === Ic.DELETE) rB = Ic.DELETE_BY_REFID;
          else if ((rB & Ic.ADD) === Ic.ADD) rB = Ic.ADD_BY_REFID;
          else if ((rB & Ic.MOVE) === Ic.MOVE) return
        } else if (rB === Ic.DELETE && fc) {
          const cB = qB.tmpItems[Vc];
          if (!cB) return;
          mB = cB[sc], rB = Ic.DELETE_BY_REFID
        } else mB = Vc;
        if (Bc[uc.offset++] = 255 & rB, BB.number(Bc, mB, uc), rB === Ic.DELETE || rB === Ic.DELETE_BY_REFID) return;
        Dn(cB, Bc, Oc, qB[Tc](Vc, Mc), rB, uc)
      };

    function kV(cB, Bc, nc, Vc, rB, uc, Mc) {
      const Pc = cB.resyncVisited;
      let qB = Pc.get(cB.currentRefId);
      if (void 0 === qB && Pc.set(cB.currentRefId, qB = new Set), qB.add(Vc), void 0 !== rB && nc === Ic.ADD && rB !== uc) {
        const nc = rB[sc];
        void 0 !== nc && (cB.root.removeRef(nc), Mc?.push({
          ref: Bc,
          refId: cB.currentRefId,
          op: Ic.DELETE,
          dynamicIndex: Vc,
          value: void 0,
          previousValue: rB
        }))
      }
    }

    function Xn(cB, Bc, nc, Vc) {
      const Ic = Bc[sc];
      if (void 0 === Ic || nc.has(Ic)) return;
      nc.add(Ic);
      const rB = Bc.constructor[Symbol.metadata],
        uc = rB?.[Uc];
      if (void 0 === uc) return;
      const Mc = rB[Cc];
      for (let sc = 0; sc < uc.length; sc++) {
        const Ic = uc[sc];
        if (void 0 !== Mc && Mc.includes(Ic)) continue;
        const Pc = rB[Ic],
          qB = Bc[Pc.name];
        qB && (ZV.is(Pc.type) ? Xn(cB, qB, nc, Vc) : Hn(cB, qB, nc, Vc))
      }
    }

    function Hn(cB, Bc, nc, Vc) {
      const rB = Bc[Sc] ?? Bc,
        uc = rB[sc];
      if (void 0 === uc || nc.has(uc)) return;
      nc.add(uc);
      const Mc = cB.resyncVisited.get(uc);
      if (void 0 === Mc) return;
      const Pc = cB.root;
      rB[mB](Mc, ((cB, nc) => {
        Vc?.push({
          ref: Bc,
          refId: uc,
          op: Ic.DELETE,
          dynamicIndex: nc,
          value: void 0,
          previousValue: cB
        });
        const rB = cB?.[sc];
        void 0 !== rB && Pc.removeRef(rB)
      }), (Bc => {
        ZV.isSchema(Bc) && Xn(cB, Bc, nc, Vc)
      }))
    }
    const Fn = 1,
      Jn = 2,
      jV = 3,
      Rn = 4,
      iV = 5;

    function Kn(cB, Bc, nc, Vc, rB, uc, Mc, Pc, qB) {
      const Oc = cB.root;
      let Tc;
      if ((Bc & Ic.DELETE) === Ic.DELETE) {
        const cB = rB?.[sc];
        void 0 !== cB && Oc.removeRef(cB), Bc !== Ic.DELETE_AND_ADD && nc[fc](Vc), Tc = void 0
      }
      if (Bc === Ic.DELETE);
      else if ("string" === typeof uc) Tc = zn[uc](Mc, Pc);
      else if (EB(uc)) Tc = function(cB, Bc, nc) {
        return WB(cB, (0, zn[cB.wire])(Bc, nc))
      }(uc.quantized, Mc, Pc);
      else if (ZV.is(uc)) {
        const nc = zn.number(Mc, Pc);
        if (Tc = Oc.refs.get(nc), (Bc & Ic.ADD) === Ic.ADD) {
          const Vc = cB.getInstanceType(Mc, Pc, uc);
          Tc || (Tc = cB.createInstanceOfType(Vc)), Oc.addRef(nc, Tc, Tc !== rB || Bc === Ic.DELETE_AND_ADD && Tc === rB)
        }
      } else {
        const nc = (mB = Object.keys(uc)[0], pB[mB]),
          Vc = zn.number(Mc, Pc);
        null !== cB.resyncVisited && function(cB, Bc) {
          const nc = cB.resyncVisited;
          nc.has(Bc) || nc.set(Bc, new Set)
        }(cB, Vc);
        const fc = Oc.refs.has(Vc) ? rB || Oc.refs.get(Vc) : nc.constructor.initializeForDecoder();
        if (Tc = fc.clone(!0), Tc[tB] = Object.values(uc)[0], rB) {
          let cB = rB[sc];
          if (void 0 !== cB && Vc !== cB) {
            (Bc & Ic.DELETE) !== Ic.DELETE && Oc.removeRef(cB);
            const nc = rB.entries();
            let Vc;
            for (;
              (Vc = nc.next()) && !Vc.done;) {
              const [Bc, nc] = Vc.value;
              "object" === typeof nc && (cB = nc[sc]), qB?.push({
                ref: rB,
                refId: cB,
                op: Ic.DELETE,
                field: Bc,
                value: void 0,
                previousValue: nc
              })
            }
          }
        }
        Oc.addRef(Vc, Tc, fc !== rB || Bc === Ic.DELETE_AND_ADD && fc === rB)
      }
      var mB;
      return Tc
    }
    const xV = function(cB, Bc, nc, Vc, Ic) {
        const rB = Bc[nc.offset++],
          uc = Vc.constructor[Symbol.metadata],
          sc = rB >> 6 << 6,
          Mc = rB % (sc || 255),
          Pc = uc[Mc];
        if (void 0 === Pc) return console.warn("@colyseus/schema: field not defined at", {
          index: Mc,
          ref: Vc.constructor.name,
          metadata: uc
        }), -1;
        const qB = !0 === Pc.deprecated,
          Oc = qB ? void 0 : Vc[Tc](Mc),
          fc = Kn(cB, sc, Vc, Mc, Oc, Pc.type, Bc, nc, Ic);
        qB || (null !== fc && void 0 !== fc && (Vc[Pc.name] = fc), Oc !== fc && Ic?.push({
          ref: Vc,
          refId: cB.currentRefId,
          op: sc,
          field: Pc.name,
          value: fc,
          previousValue: Oc
        }))
      },
      dn = function(cB, Bc, nc, Vc, rB) {
        const uc = Vc[Sc] ?? Vc,
          sc = Bc[nc.offset++];
        if (sc === Ic.CLEAR) return cB.removeChildRefs(uc, rB), void uc.clear();
        const Mc = zn.number(Bc, nc),
          Pc = uc[tB],
          qB = uc.constructor.COLLECTION_KIND;
        let Oc;
        (sc & Ic.ADD) === Ic.ADD ? qB === Fn ? (Oc = zn.string(Bc, nc), uc.setIndex(Mc, Oc)) : Oc = Mc : Oc = uc.getIndex(Mc);
        const fc = uc[Tc](Mc),
          mB = Kn(cB, sc, Vc, Mc, fc, Pc, Bc, nc, rB);
        if (null !== cB.resyncVisited && kV(cB, Vc, sc, Oc, fc, mB, rB), null !== mB && void 0 !== mB) switch (qB) {
          case Fn:
            uc.$items.set(Oc, mB);
            break;
          case Jn:
            uc.$setAt(Mc, mB, null !== cB.resyncVisited && sc === Ic.ADD ? Ic.REPLACE : sc);
            break;
          case jV:
          case Rn:
          case iV:
            uc.$items.has(Mc) || (uc.$items.set(Mc, mB), "number" === typeof uc.$refId && Mc >= uc.$refId && (uc.$refId = Mc + 1));
            break;
          default:
            console.warn(`@colyseus/schema: missing COLLECTION_KIND on ${uc.constructor?.name} \u2014 item at index ${Mc} was not stored.`)
        }
        fc !== mB && rB?.push({
          ref: Vc,
          refId: cB.currentRefId,
          op: sc,
          dynamicIndex: Oc,
          value: mB,
          previousValue: fc
        })
      },
      An = function(cB, Bc, nc, Vc, rB) {
        const uc = Vc[Sc] ?? Vc;
        let sc, Mc = Bc[nc.offset++];
        if (Mc === Ic.CLEAR) return cB.removeChildRefs(uc, rB), void uc.clear();
        if (Mc === Ic.REVERSE) return void uc.items.reverse();
        if (Mc === Ic.DELETE_BY_REFID) {
          const Mc = zn.number(Bc, nc),
            Pc = cB.root.refs.get(Mc);
          if (void 0 === Pc) return;
          if (cB.root.removeRef(Mc), sc = uc.findIndex((cB => cB === Pc)), -1 === sc) return;
          return uc[fc](sc), void rB?.push({
            ref: Vc,
            refId: cB.currentRefId,
            op: Ic.DELETE,
            dynamicIndex: sc,
            value: void 0,
            previousValue: Pc
          })
        }
        if (Mc === Ic.ADD_BY_REFID) {
          const Vc = zn.number(Bc, nc),
            Ic = cB.root.refs.get(Vc);
          Ic && (sc = uc.findIndex((cB => cB === Ic))), -1 !== sc && void 0 !== sc || (sc = uc.length)
        } else sc = zn.number(Bc, nc);
        const Pc = uc[tB];
        let qB = sc;
        const Oc = uc.items[sc],
          Tc = Kn(cB, Mc, Vc, sc, Oc, Pc, Bc, nc, rB);
        null !== cB.resyncVisited && kV(cB, Vc, Mc, sc, Oc, Tc, rB), null !== Tc && void 0 !== Tc && Tc !== Oc && uc.$setAt(sc, Tc, null !== cB.resyncVisited && Mc === Ic.ADD ? Ic.REPLACE : Mc), Oc !== Tc && rB?.push({
          ref: Vc,
          refId: cB.currentRefId,
          op: Mc,
          dynamicIndex: qB,
          value: Tc,
          previousValue: Oc
        })
      };
    class Gn extends Error {}

    function cI(cB, Bc, nc, Vc) {
      if (!(cB instanceof Bc)) throw new Gn(`a '${Bc.name}' was expected, but '${cB&&cB.constructor.name}' was provided in ${nc.constructor.name}#${Vc}`)
    }
    const BV = (cB, Bc) => {
        const nc = cB.toString(),
          Vc = Bc.toString();
        return nc < Vc ? -1 : nc > Vc ? 1 : 0
      },
      nV = {
        get: (cB, Bc) => "symbol" === typeof Bc || isNaN(Bc) ? Reflect.get(cB, Bc) : cB.items[Bc],
        set: (cB, Bc, nc) => {
          if ("symbol" !== typeof Bc && !isNaN(Bc)) {
            if (void 0 === nc || null === nc) cB.$deleteAt(Bc);
            else {
              let Vc;
              if (nc[ec]) {
                cI(nc, cB[tB], cB, Bc);
                const rB = cB.items[Bc];
                cB.isMovingItems ? (Vc = cB.$wireIndex(Number(Bc)), void 0 !== rB ? nc[ec].isNew ? cB[ec].indexedOperation(Vc, Ic.MOVE_AND_ADD) : (cB[ec].getChange(Vc) & Ic.DELETE) === Ic.DELETE ? cB[ec].indexedOperation(Vc, Ic.DELETE_AND_MOVE) : cB[ec].indexedOperation(Vc, Ic.MOVE) : nc[ec].isNew && cB[ec].indexedOperation(Vc, Ic.ADD), nc[ec].setParent(cB, cB[ec].root, Vc)) : Vc = cB.$changeAt(Number(Bc), nc), void 0 !== rB && rB[ec].root?.remove(rB[ec])
              } else Vc = cB.$changeAt(Number(Bc), nc);
              cB.items[Bc] = nc, void 0 !== Vc && (cB.tmpItems[Vc] = nc)
            }
            return !0
          }
          return Reflect.set(cB, Bc, nc)
        },
        deleteProperty: (cB, Bc) => ("number" === typeof Bc ? cB.$deleteAt(Bc) : delete cB[Bc], !0),
        has: (cB, Bc) => "symbol" === typeof Bc || isNaN(Number(Bc)) ? Reflect.has(cB, Bc) : Reflect.has(cB.items, Bc)
      };
    class VV {
      [ec];
      [sc];
      [Sc];
      [tB];
      items = [];
      tmpItems = [];
      deletedIndexes = [];
      isMovingItems = !1;
      _needsCompaction = !1;
      static[Pc] = wn;
      static[qB] = An;
      static COLLECTION_KIND = Jn;
      static[Oc](cB, Bc, nc) {
        if (!nc) return !0;
        const Vc = cB[Sc] ?? cB;
        return "string" === typeof Vc[tB] || nc.isChangeTreeVisible(Vc.tmpItems[Bc]?.[ec])
      }
      static is(cB) {
        return Array.isArray(cB) || void 0 !== cB.array
      }
      static from(cB) {
        return new VV(...Array.from(cB))
      }
      constructor() {
        this[tB] = void 0, this[Sc] = this;
        const cB = new Proxy(this, nV);
        return Object.defineProperty(this, ec, {
          value: new Qn(cB, this),
          enumerable: !1,
          writable: !0
        }), arguments.length > 0 && this.push(...arguments), cB
      }
      static initializeForDecoder() {
        const cB = Object.create(VV.prototype);
        cB.items = [], cB.isMovingItems = !1, cB._needsCompaction = !1, cB[tB] = void 0, cB[Sc] = cB;
        const Bc = new Proxy(cB, nV);
        return vV(cB, Bc), Bc
      }
      set length(cB) {
        0 === cB ? this.clear() : cB < this.items.length ? this.splice(cB, this.length - cB) : console.warn("ArraySchema: can't set .length to a higher value than its length.")
      }
      get length() {
        return this.items.length
      }
      pauseTracking() {
        this[ec].pause()
      }
      resumeTracking() {
        this[ec].resume()
      }
      untracked(cB) {
        return this[ec].untracked(cB)
      }
      get isTrackingPaused() {
        return this[ec].paused
      }
      push() {
        const cB = this[Sc],
          Bc = cB.items,
          nc = cB.tmpItems,
          Vc = cB[ec],
          rB = cB[tB];
        let uc = nc.length;
        for (let sc = 0, Mc = arguments.length; sc < Mc; sc++, uc++) {
          const Mc = sc < 0 || arguments.length <= sc ? void 0 : arguments[sc];
          if (void 0 === Mc || null === Mc) return;
          "object" === typeof Mc && rB && cI(Mc, rB, cB, sc), Vc.indexedOperation(uc, Ic.ADD), Bc.push(Mc), nc.push(Mc), Mc[ec]?.setParent(this, Vc.root, uc)
        }
        return uc
      }
      pop() {
        const cB = this[Sc],
          Bc = cB.tmpItems,
          nc = cB.deletedIndexes;
        let Vc = -1;
        for (let rB = Bc.length - 1; rB >= 0; rB--)
          if (!0 !== nc[rB]) {
            Vc = rB;
            break
          } if (Vc < 0) return;
        const Ic = cB.$isUnsentAdd(Vc);
        return cB[ec].delete(Vc), Ic ? cB.$cancelAdd(Vc) : nc[Vc] = !0, cB.items.pop()
      }
      at(cB) {
        return cB < 0 && (cB += this.length), this.items[cB]
      }
      $wireIndex(cB) {
        const Bc = this.deletedIndexes;
        if (0 === Bc.length) return cB;
        const nc = this.tmpItems;
        let Vc = 0;
        for (let Ic = 0; Ic < nc.length; Ic++)
          if (!0 !== Bc[Ic]) {
            if (Vc === cB) return Ic;
            Vc++
          } return nc.length + (cB - Vc)
      }
      $isUnsentAdd(cB) {
        const Bc = this[ec];
        return 0 === (576 & Bc.flags) && !Bc.paused && "string" !== typeof this[tB] && Bc.operationAt(cB) === Ic.ADD
      }
      $cancelAdd(cB) {
        let Bc = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        const nc = this[ec],
          Vc = this.tmpItems[cB];
        this.tmpItems.splice(cB, 1), this.deletedIndexes.length > 0 && this.deletedIndexes.splice(cB, 1), nc.removeAt(cB, 1);
        const Ic = Vc?.[ec];
        void 0 !== Ic && void 0 === Ic.root && Ic.removeParent(this), Bc && this.$reindexChildren(cB)
      }
      $reindexChildren(cB, Bc) {
        if (!this[ec].hasFilteredFields) return;
        if ("string" === typeof this[tB]) return;
        const nc = this.tmpItems,
          Vc = nc.length;
        if (void 0 !== Bc)
          for (; cB < Vc && nc[cB] === Bc[cB];) cB++;
        for (let Ic = cB; Ic < Vc; Ic++) nc[Ic]?.[ec]?.setParentIndex(this, Ic)
      }
      $changeAt(cB, Bc) {
        if (void 0 === Bc || null === Bc) return void console.error("ArraySchema items cannot be null nor undefined; Use `splice(index, 1)` instead.");
        if (this.items[cB] === Bc) return;
        const nc = void 0 !== this.items[cB] ? "object" === typeof Bc ? Ic.DELETE_AND_ADD : Ic.REPLACE : Ic.ADD,
          Vc = this.$wireIndex(cB),
          rB = this[ec];
        return rB.change(Vc, nc), Bc[ec]?.setParent(this, rB.root, Vc), Vc
      }
      $deleteAt(cB, Bc) {
        this[ec].delete(this.$wireIndex(cB), Bc)
      }
      $setAt(cB, Bc, nc) {
        nc === Ic.ADD && void 0 !== this.items[cB] ? this.items.splice(cB, 0, Bc) : nc === Ic.DELETE_AND_MOVE ? (this.items.splice(cB, 1), this.items[cB] = Bc) : (cB > this.items.length && (this._needsCompaction = !0), this.items[cB] = Bc)
      }
      clear() {
        const cB = this[Sc];
        if (0 === cB.items.length) return;
        const Bc = cB[ec];
        Bc.forEachChild(((cB, nc) => {
          Bc.root?.remove(cB)
        })), Bc.discard(), Bc.operation(Ic.CLEAR), cB.items.length = 0, cB.tmpItems.length = 0
      } [zB]() {
        const cB = this[Sc] ?? this,
          Bc = cB[ec];
        if (Bc.isStreamCollection) throw new Error("@colyseus/schema: cannot reset a streamed ArraySchema (pooling not supported).");
        const nc = cB.items;
        for (let Vc = 0; Vc < nc.length; Vc++) nc[Vc]?.[zB]?.();
        cB.items.length = 0, cB.tmpItems.length = 0, cB.deletedIndexes.length = 0, Bc.recycle(), cB[sc] = void 0
      }
      concat() {
        return new VV(...this.items.concat(...arguments))
      }
      join(cB) {
        return this.items.join(cB)
      }
      reverse() {
        const cB = this[Sc],
          Bc = cB[ec];
        if (Bc.has() || cB.deletedIndexes.length > 0) {
          const Bc = cB.items.slice().reverse();
          return this.clear(), this.push(...Bc), this
        }
        return Bc.operation(Ic.REVERSE), cB.items.reverse(), cB.tmpItems.reverse(), cB.$reindexChildren(0), this
      }
      shift() {
        const cB = this[Sc],
          Bc = cB.items;
        if (0 === Bc.length) return;
        const nc = cB[ec],
          Vc = cB.deletedIndexes;
        let rB = 0;
        for (; !0 === Vc[rB];) rB++;
        const uc = cB.$isUnsentAdd(rB);
        return nc.delete(rB, Ic.DELETE), uc ? cB.$cancelAdd(rB) : Vc[rB] = !0, Bc.shift()
      }
      slice(cB, Bc) {
        const nc = new VV;
        return nc.push(...this.items.slice(cB, Bc)), nc
      }
      sort() {
        let cB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : BV;
        const Bc = this[Sc];
        Bc.isMovingItems = !0;
        const nc = Bc[ec];
        return Bc.items.sort(cB).forEach(((cB, Bc) => nc.change(Bc, Ic.REPLACE))), Bc.tmpItems.sort(cB), Bc.$reindexChildren(0), Bc.isMovingItems = !1, this
      }
      splice(cB, Bc) {
        const nc = this[Sc],
          Vc = nc[ec],
          rB = nc.items,
          uc = nc.tmpItems,
          sc = nc.deletedIndexes,
          Mc = rB.length,
          Pc = uc.length;
        for (var qB = arguments.length, Oc = new Array(qB > 2 ? qB - 2 : 0), Tc = 2; Tc < qB; Tc++) Oc[Tc - 2] = arguments[Tc];
        const fc = Oc.length,
          mB = [];
        for (let Ic = 0; Ic < Pc; Ic++) !0 !== sc[Ic] && mB.push(Ic);
        let tB;
        if (Mc > cB) {
          void 0 === Bc && (Bc = Mc - cB);
          for (let rB = cB; rB < cB + Bc; rB++) {
            const cB = mB[rB],
              Bc = nc.$isUnsentAdd(cB);
            Vc.delete(cB, Ic.DELETE), Bc ? (tB ??= []).push(cB) : sc[cB] = !0
          }
        } else Bc = 0;
        if (fc > 0) {
          const rB = mB[cB] ?? Mc,
            Pc = Math.min(fc, Bc);
          for (let cB = 0; cB < Pc; cB++) {
            const Bc = rB + cB;
            let nc;
            const Mc = void 0 !== tB ? tB.indexOf(Bc) : -1; - 1 !== Mc ? (tB.splice(Mc, 1), nc = Ic.ADD) : nc = sc[Bc] ? Ic.DELETE_AND_ADD : Ic.ADD, Vc.indexedOperation(Bc, nc), uc[Bc] = Oc[cB], sc[Bc] = !1, Oc[cB][ec]?.setParent(this, Vc.root, Bc)
          }
          const qB = fc - Pc;
          if (qB > 0) {
            const cB = rB + Pc;
            Vc.insertAt(cB, qB);
            for (let Bc = 0; Bc < qB; Bc++) Oc[Pc + Bc][ec]?.setParent(this, Vc.root, cB + Bc);
            sc.length > 0 && sc.splice(cB, 0, ...new Array(qB).fill(!1)), uc.splice(cB, 0, ...Oc.slice(Pc)), nc.$reindexChildren(cB + qB)
          }
        }
        if (void 0 !== tB && tB.length > 0) {
          for (let cB = tB.length - 1; cB >= 0; cB--) nc.$cancelAdd(tB[cB], !1);
          nc.$reindexChildren(tB[0])
        }
        return Vc.root?.enqueueChangeTree(Vc), rB.splice(cB, Bc, ...Oc)
      }
      unshift() {
        const cB = this[Sc],
          Bc = cB[ec];
        Bc.unshift(arguments.length);
        for (let Vc = 0; Vc < arguments.length; Vc++)(Vc < 0 || arguments.length <= Vc ? void 0 : arguments[Vc])?.[ec]?.setParent(this, Bc.root, Vc);
        const nc = cB.deletedIndexes;
        return nc.length > 0 && nc.unshift(...new Array(arguments.length).fill(!1)), cB.tmpItems.unshift(...arguments), cB.$reindexChildren(arguments.length), cB.items.unshift(...arguments)
      }
      indexOf(cB, Bc) {
        return this.items.indexOf(cB, Bc)
      }
      lastIndexOf(cB) {
        let Bc = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.length - 1;
        return this.items.lastIndexOf(cB, Bc)
      }
      every(cB, Bc) {
        return this.items.every(cB, Bc)
      }
      some(cB, Bc) {
        return this.items.some(cB, Bc)
      }
      forEach(cB, Bc) {
        return this.items.forEach(cB, Bc)
      }
      map(cB, Bc) {
        return this.items.map(cB, Bc)
      }
      filter(cB, Bc) {
        return this.items.filter(cB, Bc)
      }
      reduce(cB, Bc) {
        return this.items.reduce.apply(this.items, arguments)
      }
      reduceRight(cB, Bc) {
        return this.items.reduceRight.apply(this.items, arguments)
      }
      find(cB, Bc) {
        return this.items.find(cB, Bc)
      }
      findIndex(cB, Bc) {
        return this.items.findIndex(cB, Bc)
      }
      fill(cB, Bc, nc) {
        throw new Error("ArraySchema#fill() not implemented")
      }
      copyWithin(cB, Bc, nc) {
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
        return VV
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
      includes(cB, Bc) {
        return this.items.includes(cB, Bc)
      }
      flatMap(cB, Bc) {
        throw new Error("ArraySchema#flatMap() is not supported.")
      }
      flat(cB) {
        throw new Error("ArraySchema#flat() is not supported.")
      }
      findLast() {
        return this.items.findLast.apply(this.items, arguments)
      }
      findLastIndex() {
        for (var cB = arguments.length, Bc = new Array(cB), nc = 0; nc < cB; nc++) Bc[nc] = arguments[nc];
        return this.items.findLastIndex.apply(this.items, arguments)
      }
      with(cB, Bc) {
        const nc = this.items.slice();
        return cB < 0 && (cB += this.length), nc[cB] = Bc, new VV(...nc)
      }
      toReversed() {
        return this.items.slice().reverse()
      }
      toSorted(cB) {
        return this.items.slice().sort(cB)
      }
      toSpliced(cB, Bc) {
        for (var nc = arguments.length, Vc = new Array(nc > 2 ? nc - 2 : 0), Ic = 2; Ic < nc; Ic++) Vc[Ic - 2] = arguments[Ic];
        const rB = this.items.slice();
        return rB.splice.apply(rB, arguments), rB
      }
      shuffle() {
        return this.move((cB => {
          let Bc = this.items.length;
          for (; 0 != Bc;) {
            let cB = Math.floor(Math.random() * Bc);
            Bc--, [this[Bc], this[cB]] = [this[cB], this[Bc]]
          }
        }))
      }
      move(cB) {
        return this.isMovingItems = !0, cB(this), this.isMovingItems = !1, this
      } [Tc](cB) {
        let Bc = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        const nc = this[Sc] ?? this;
        return Bc || nc.deletedIndexes[cB] ? nc.items[cB] : nc.tmpItems[cB] || nc.items[cB]
      } [fc](cB) {
        const Bc = this[Sc] ?? this;
        Bc.items[cB] = void 0, Bc._needsCompaction = !0
      } [yB]() {
        const cB = this.tmpItems;
        this.tmpItems = this.items.slice(), this.deletedIndexes.length > 0 && (this.$reindexChildren(0, cB), this.deletedIndexes.length = 0)
      } [pc]() {
        const cB = this[Sc] ?? this;
        cB._needsCompaction && (cB._needsCompaction = !1, cB.items = cB.items.filter((cB => void 0 !== cB)))
      } [mB](cB, Bc, nc) {
        const Vc = this[Sc] ?? this,
          Ic = Vc.items;
        let rB = !1;
        for (let uc = 0; uc < Ic.length; uc++) {
          const sc = Ic[uc];
          cB.has(uc) ? nc(sc) : (rB = !0, Bc(sc, uc), Vc[fc](uc))
        }
        rB && Vc[pc]()
      }
      toArray() {
        return this.items.slice(0)
      }
      toJSON() {
        return this.toArray().map((cB => "function" === typeof cB.toJSON ? cB.toJSON() : cB))
      }
      clone(cB) {
        let Bc;
        return cB ? (Bc = new VV, Bc.push(...this.items)) : Bc = new VV(...this.map((cB => cB[ec] ? cB.clone() : cB))), Bc
      }
    }
    an("array", {
      constructor: VV
    });
    class IV {
      keyByIndex = new Map;
      indexByKey = Object.create(null);
      nextIndex = 0;
      snapshots;
      indexOf(cB) {
        const Bc = this.indexByKey[cB];
        return void 0 === Bc ? void 0 : Bc
      }
      assign(cB) {
        const Bc = this.nextIndex++;
        return this.indexByKey[cB] = Bc, this.keyByIndex.set(Bc, cB), Bc
      }
      snapshot(cB, Bc) {
        (this.snapshots ??= new Map).set(cB, Bc)
      }
      forgetSnapshot(cB) {
        this.snapshots?.delete(cB)
      }
      snapshotAt(cB) {
        return this.snapshots?.get(cB)
      }
      setIndex(cB, Bc) {
        this.keyByIndex.set(cB, Bc), this.indexByKey[Bc] = cB
      }
      keyOf(cB) {
        return this.keyByIndex.get(cB)
      }
      cleanupAfterEncode() {
        if (void 0 !== this.snapshots) {
          for (const [cB] of this.snapshots) {
            const Bc = this.keyByIndex.get(cB);
            void 0 !== Bc && (delete this.indexByKey[Bc], this.keyByIndex.delete(cB))
          }
          this.snapshots.clear()
        }
      }
      reset() {
        this.indexByKey = Object.create(null), this.keyByIndex.clear(), this.snapshots?.clear(), this.nextIndex = 0
      }
    }
    class rI {
      [ec];
      [sc];
      childType;
      [tB];
      $items = new Map;
      journal = new IV;
      _stream;
      get maxPerTick() {
        return this._stream?.maxPerTick ?? 32
      }
      set maxPerTick(cB) {
        (this._stream ??= LB()).maxPerTick = cB
      }
      get priority() {
        return this._stream?.priority
      }
      set priority(cB) {
        (this._stream ??= LB()).priority = cB
      }
      get $indexes() {
        return this.journal.keyByIndex
      }
      get _collectionIndexes() {
        return this.journal.indexByKey
      }
      static[Pc] = En;
      static[qB] = dn;
      static COLLECTION_KIND = Fn;
      static[Oc](cB, Bc, nc) {
        if (!nc || "string" === typeof cB[tB]) return !0;
        const Vc = cB[Tc](Bc) ?? cB.journal.snapshotAt(Bc);
        return nc.isChangeTreeVisible(Vc[ec])
      }
      static is(cB) {
        return void 0 !== cB.map
      }
      constructor(cB) {
        if (Object.defineProperty(this, ec, {
            value: new Qn(this),
            enumerable: !1,
            writable: !0
          }), this[tB] = void 0, cB)
          if (cB instanceof Map || cB instanceof rI) cB.forEach(((cB, Bc) => this.set(Bc, cB)));
          else
            for (const Bc in cB) this.set(Bc, cB[Bc])
      }
      static initializeForDecoder() {
        const cB = Object.create(rI.prototype);
        return cB.$items = new Map, cB.journal = new IV, cB[tB] = void 0, vV(cB), cB
      } [Symbol.iterator]() {
        return this.$items[Symbol.iterator]()
      }
      get[Symbol.toStringTag]() {
        return this.$items[Symbol.toStringTag]
      }
      static get[Symbol.species]() {
        return rI
      }
      set(cB, Bc) {
        if (void 0 === Bc || null === Bc) throw new Error(`MapSchema#set('${cB}', ${Bc}): trying to set ${Bc} value on '${cB}'.`);
        "object" === typeof Bc && this[tB] && cI(Bc, this[tB], this, cB), cB = cB.toString();
        const nc = this[ec],
          Vc = void 0 !== Bc[ec],
          rB = this.journal;
        let uc, sc = rB.indexOf(cB);
        if (void 0 !== sc) {
          uc = Ic.REPLACE;
          const nc = this.$items.get(cB);
          if (nc === Bc) return;
          Vc && (uc = Ic.DELETE_AND_ADD, void 0 !== nc && nc[ec].root?.remove(nc[ec])), void 0 !== rB.snapshotAt(sc) && rB.forgetSnapshot(sc)
        } else sc = rB.assign(cB), uc = Ic.ADD;
        return this.$items.set(cB, Bc), uc === Ic.ADD && nc.isStreamCollection ? void 0 !== nc.root && UB(this, nc.root, sc) : nc.change(sc, uc), Vc && Bc[ec].setParent(this, nc.root, sc), this
      }
      get(cB) {
        return this.$items.get(cB)
      }
      getOrInsert(cB, Bc) {
        return this.$items.has(cB) ? this.$items.get(cB) : (this.set(cB, Bc), Bc)
      }
      getOrInsertComputed(cB, Bc) {
        if (this.$items.has(cB)) return this.$items.get(cB);
        const nc = Bc(cB);
        return this.set(cB, nc), nc
      }
      delete(cB) {
        if (!this.$items.has(cB)) return !1;
        const Bc = this.journal.indexOf(cB),
          nc = this.$items.get(cB),
          Vc = this[ec];
        if (Vc.isStreamCollection) {
          const Ic = Vc.root;
          let rB = !1;
          return void 0 !== Ic && (rB = bn(this, Ic, this[sc], Bc)), void 0 !== nc?.[ec] && Ic?.remove(nc[ec]), this.$items.delete(cB), rB || this.journal.snapshot(Bc, nc), !0
        }
        return this.journal.snapshot(Bc, nc), Vc.delete(Bc), this.$items.delete(cB)
      }
      clear() {
        const cB = this[ec];
        cB.discard(), cB.forEachChild(((Bc, nc) => {
          cB.root?.remove(Bc)
        })), this.journal.reset(), this.$items.clear(), cB.operation(Ic.CLEAR)
      } [zB]() {
        const cB = this[ec];
        if (cB.isStreamCollection) throw new Error("@colyseus/schema: cannot reset a streamed MapSchema (pooling not supported).");
        this.$items.forEach((cB => cB?.[zB]?.())), this.$items.clear(), this.journal.reset(), cB.recycle(), this[sc] = void 0
      }
      has(cB) {
        return this.$items.has(cB)
      }
      forEach(cB) {
        this.$items.forEach(cB)
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
        this[ec].pause()
      }
      resumeTracking() {
        this[ec].resume()
      }
      untracked(cB) {
        return this[ec].untracked(cB)
      }
      get isTrackingPaused() {
        return this[ec].paused
      }
      setIndex(cB, Bc) {
        this.journal.setIndex(cB, Bc)
      }
      getIndex(cB) {
        return this.journal.keyOf(cB)
      } [Tc](cB) {
        const Bc = this.journal.keyOf(cB);
        return void 0 !== Bc ? this.$items.get(Bc) : void 0
      } [fc](cB) {
        const Bc = this.journal.keyOf(cB);
        void 0 !== Bc && (this.$items.delete(Bc), this.journal.keyByIndex.delete(cB))
      } [mB](cB, Bc, nc) {
        let Vc = null;
        if (this.$items.forEach(((Ic, rB) => {
            cB.has(rB) ? nc(Ic) : ((Vc ??= new Set).add(rB), Bc(Ic, rB))
          })), null !== Vc) {
          Vc.forEach((cB => {
            this.$items.delete(cB), delete this.journal.indexByKey[cB]
          }));
          const cB = [];
          this.journal.keyByIndex.forEach(((Bc, nc) => {
            Vc.has(Bc) && cB.push(nc)
          }));
          for (let Bc = 0; Bc < cB.length; Bc++) this.journal.keyByIndex.delete(cB[Bc])
        }
      } [yB]() {
        this.journal.cleanupAfterEncode()
      }
      _dropView(cB) {
        vn(this, cB)
      }
      _unregister() {}
      toJSON() {
        return Object.fromEntries(Array.from(this, (cB => {
          let [Bc, nc] = cB;
          return [Bc, "function" === typeof nc.toJSON ? nc.toJSON() : nc]
        })))
      }
      clone(cB) {
        let Bc;
        return cB ? Bc = Object.assign(new rI, this) : (Bc = new rI, this.forEach(((cB, nc) => {
          cB[ec] ? Bc.set(nc, cB.clone()) : Bc.set(nc, cB)
        }))), Bc
      }
    }
    an("map", {
      constructor: rI
    });
    class uV {
      [ec];
      [sc];
      [tB];
      $items = new Map;
      deletedItems = {};
      $refId = 0;
      _stream;
      get maxPerTick() {
        return this._stream?.maxPerTick ?? 32
      }
      set maxPerTick(cB) {
        (this._stream ??= LB()).maxPerTick = cB
      }
      get priority() {
        return this._stream?.priority
      }
      set priority(cB) {
        (this._stream ??= LB()).priority = cB
      }
      static[Pc] = onc;
      static[qB] = dn;
      static COLLECTION_KIND = Rn;
      static[Oc](cB, Bc, nc) {
        return !nc || "string" === typeof cB[tB] || nc.isChangeTreeVisible((cB[Tc](Bc) ?? cB.deletedItems[Bc])[ec])
      }
      static is(cB) {
        return void 0 !== cB.collection
      }
      constructor(cB) {
        Object.defineProperty(this, ec, {
          value: new Qn(this),
          enumerable: !1,
          writable: !0
        }), this[tB] = void 0, cB && cB.forEach((cB => this.add(cB)))
      }
      static initializeForDecoder() {
        const cB = Object.create(uV.prototype);
        return cB.$items = new Map, cB.deletedItems = {}, cB.$refId = 0, cB[tB] = void 0, vV(cB), cB
      }
      add(cB) {
        const Bc = this.$refId++,
          nc = this[ec];
        return this.$items.set(Bc, cB), nc.isStreamCollection ? void 0 !== nc.root && UB(this, nc.root, Bc) : nc.change(Bc), void 0 !== cB[ec] && cB[ec].setParent(this, nc.root, Bc), Bc
      }
      at(cB) {
        const Bc = Array.from(this.$items.keys())[cB];
        return this.$items.get(Bc)
      }
      entries() {
        return this.$items.entries()
      }
      delete(cB) {
        const Bc = this.$items.entries();
        let nc, Vc;
        for (;
          (Vc = Bc.next()) && !Vc.done;)
          if (cB === Vc.value[1]) {
            nc = Vc.value[0];
            break
          } if (void 0 === nc) return !1;
        const Ic = this[ec];
        if (Ic.isStreamCollection) {
          const cB = Ic.root,
            Bc = this.$items.get(nc);
          return void 0 !== cB && bn(this, cB, this[sc], nc), void 0 !== Bc?.[ec] && cB?.remove(Bc[ec]), this.deletedItems[nc] = Bc, this.$items.delete(nc)
        }
        return this.deletedItems[nc] = Ic.delete(nc), this.$items.delete(nc)
      }
      clear() {
        const cB = this[ec];
        cB.discard(), cB.forEachChild(((Bc, nc) => {
          cB.root?.remove(Bc)
        })), this.$items.clear(), cB.operation(Ic.CLEAR)
      } [zB]() {
        const cB = this[ec];
        if (cB.isStreamCollection) throw new Error("@colyseus/schema: cannot reset a streamed CollectionSchema (pooling not supported).");
        this.$items.forEach((cB => cB?.[zB]?.())), this.$items.clear(), this.deletedItems = {}, this.$refId = 0, cB.recycle(), this[sc] = void 0
      }
      has(cB) {
        return Array.from(this.$items.values()).some((Bc => Bc === cB))
      }
      forEach(cB) {
        this.$items.forEach(((Bc, nc, Vc) => cB(Bc, nc, this)))
      }
      values() {
        return this.$items.values()
      }
      get size() {
        return this.$items.size
      }
      pauseTracking() {
        this[ec].pause()
      }
      resumeTracking() {
        this[ec].resume()
      }
      untracked(cB) {
        return this[ec].untracked(cB)
      }
      get isTrackingPaused() {
        return this[ec].paused
      } [Symbol.iterator]() {
        return this.$items.values()
      }
      setIndex(cB, Bc) {}
      getIndex(cB) {
        return cB
      } [Tc](cB) {
        return this.$items.get(cB)
      } [fc](cB) {
        this.$items.delete(cB)
      } [mB](cB, Bc, nc) {
        let Vc = null;
        if (this.$items.forEach(((Ic, rB) => {
            cB.has(rB) ? nc(Ic) : ((Vc ??= []).push(rB), Bc(Ic, rB))
          })), null !== Vc)
          for (let Ic = 0; Ic < Vc.length; Ic++) this[fc](Vc[Ic])
      } [yB]() {
        for (const cB in this.deletedItems) delete this.deletedItems[cB]
      }
      _dropView(cB) {
        vn(this, cB)
      }
      _unregister() {}
      toArray() {
        return Array.from(this.$items.values())
      }
      toJSON() {
        const cB = [];
        return this.forEach(((Bc, nc) => {
          cB.push("function" === typeof Bc.toJSON ? Bc.toJSON() : Bc)
        })), cB
      }
      clone(cB) {
        let Bc;
        return cB ? Bc = Object.assign(new uV, this) : (Bc = new uV, this.forEach((cB => {
          cB[ec] ? Bc.add(cB.clone()) : Bc.add(cB)
        }))), Bc
      }
    }
    an("collection", {
      constructor: uV
    });
    class sV {
      [ec];
      [sc];
      [tB];
      $items = new Map;
      deletedItems = {};
      $refId = 0;
      _stream;
      get maxPerTick() {
        return this._stream?.maxPerTick ?? 32
      }
      set maxPerTick(cB) {
        (this._stream ??= LB()).maxPerTick = cB
      }
      get priority() {
        return this._stream?.priority
      }
      set priority(cB) {
        (this._stream ??= LB()).priority = cB
      }
      static[Pc] = onc;
      static[qB] = dn;
      static COLLECTION_KIND = jV;
      static[Oc](cB, Bc, nc) {
        return !nc || "string" === typeof cB[tB] || nc.isVisible((cB[Tc](Bc) ?? cB.deletedItems[Bc])[ec])
      }
      static is(cB) {
        return void 0 !== cB.set
      }
      constructor(cB) {
        Object.defineProperty(this, ec, {
          value: new Qn(this),
          enumerable: !1,
          writable: !0
        }), this[tB] = void 0, cB && cB.forEach((cB => this.add(cB)))
      }
      static initializeForDecoder() {
        const cB = Object.create(sV.prototype);
        return cB.$items = new Map, cB.deletedItems = {}, cB.$refId = 0, cB[tB] = void 0, vV(cB), cB
      }
      add(cB) {
        if (this.has(cB)) return !1;
        const Bc = this.$refId++,
          nc = this[ec];
        return this.$items.set(Bc, cB), nc.isStreamCollection ? void 0 !== nc.root && UB(this, nc.root, Bc) : nc.change(Bc, Ic.ADD), void 0 !== cB[ec] && cB[ec].setParent(this, nc.root, Bc), Bc
      }
      entries() {
        return this.$items.entries()
      }
      delete(cB) {
        const Bc = this.$items.entries();
        let nc, Vc;
        for (;
          (Vc = Bc.next()) && !Vc.done;)
          if (cB === Vc.value[1]) {
            nc = Vc.value[0];
            break
          } if (void 0 === nc) return !1;
        const Ic = this[ec];
        if (Ic.isStreamCollection) {
          const cB = Ic.root,
            Bc = this.$items.get(nc);
          return void 0 !== cB && bn(this, cB, this[sc], nc), void 0 !== Bc?.[ec] && cB?.remove(Bc[ec]), this.deletedItems[nc] = Bc, this.$items.delete(nc)
        }
        return this.deletedItems[nc] = Ic.delete(nc), this.$items.delete(nc)
      }
      clear() {
        const cB = this[ec];
        cB.discard(), this.$items.clear(), cB.operation(Ic.CLEAR)
      } [zB]() {
        const cB = this[ec];
        if (cB.isStreamCollection) throw new Error("@colyseus/schema: cannot reset a streamed SetSchema (pooling not supported).");
        this.$items.forEach((cB => cB?.[zB]?.())), this.$items.clear(), this.deletedItems = {}, this.$refId = 0, cB.recycle(), this[sc] = void 0
      }
      has(cB) {
        const Bc = this.$items.values();
        let nc, Vc = !1;
        for (;
          (nc = Bc.next()) && !nc.done;)
          if (cB === nc.value) {
            Vc = !0;
            break
          } return Vc
      }
      forEach(cB) {
        this.$items.forEach(((Bc, nc, Vc) => cB(Bc, nc, this)))
      }
      values() {
        return this.$items.values()
      }
      get size() {
        return this.$items.size
      }
      pauseTracking() {
        this[ec].pause()
      }
      resumeTracking() {
        this[ec].resume()
      }
      untracked(cB) {
        return this[ec].untracked(cB)
      }
      get isTrackingPaused() {
        return this[ec].paused
      } [Symbol.iterator]() {
        return this.$items.values()
      }
      setIndex(cB, Bc) {}
      getIndex(cB) {
        return cB
      } [Tc](cB) {
        return this.$items.get(cB)
      } [fc](cB) {
        this.$items.delete(cB)
      } [mB](cB, Bc, nc) {
        let Vc = null;
        if (this.$items.forEach(((Ic, rB) => {
            cB.has(rB) ? nc(Ic) : ((Vc ??= []).push(rB), Bc(Ic, rB))
          })), null !== Vc)
          for (let Ic = 0; Ic < Vc.length; Ic++) this[fc](Vc[Ic])
      } [yB]() {
        for (const cB in this.deletedItems) delete this.deletedItems[cB]
      }
      _dropView(cB) {
        vn(this, cB)
      }
      _unregister() {}
      toArray() {
        return Array.from(this.$items.values())
      }
      toJSON() {
        const cB = [];
        return this.forEach(((Bc, nc) => {
          cB.push("function" === typeof Bc.toJSON ? Bc.toJSON() : Bc)
        })), cB
      }
      clone(cB) {
        let Bc;
        return cB ? Bc = Object.assign(new sV, this) : (Bc = new sV, this.forEach((cB => {
          cB[ec] ? Bc.add(cB.clone()) : Bc.add(cB)
        }))), Bc
      }
    }
    an("set", {
      constructor: sV
    });
    class MV {
      [ec];
      [sc];
      [tB];
      $items = new Map;
      $nextPosition = 0;
      _itemIndex = new Map;
      _stream;
      get maxPerTick() {
        return this._stream?.maxPerTick ?? 32
      }
      set maxPerTick(cB) {
        (this._stream ??= LB()).maxPerTick = cB
      }
      get priority() {
        return this._stream?.priority
      }
      set priority(cB) {
        (this._stream ??= LB()).priority = cB
      }
      static $isStream = !0;
      static[Pc] = onc;
      static[qB] = dn;
      static COLLECTION_KIND = iV;
      static[Oc](cB, Bc, nc) {
        if (!nc) return !0;
        const Vc = cB[Tc](Bc);
        return void 0 !== Vc && nc.isVisible(Vc[ec])
      }
      static is(cB) {
        return cB && void 0 !== cB.stream
      }
      constructor() {
        Object.defineProperty(this, ec, {
          value: new Qn(this),
          enumerable: !1,
          writable: !0
        }), this[tB] = void 0
      }
      static initializeForDecoder() {
        const cB = Object.create(MV.prototype);
        return cB.$items = new Map, cB.$nextPosition = 0, cB._itemIndex = new Map, cB[tB] = void 0, vV(cB), cB
      }
      add(cB) {
        if (this._itemIndex.has(cB)) return -1;
        const Bc = this.$nextPosition++;
        this.$items.set(Bc, cB), this._itemIndex.set(cB, Bc);
        const nc = this[ec].root;
        return void 0 !== cB[ec] && cB[ec].setParent(this, nc, Bc), void 0 !== nc && UB(this, nc, Bc), Bc
      }
      remove(cB) {
        const Bc = this._itemIndex.get(cB);
        if (void 0 === Bc) return !1;
        this._itemIndex.delete(cB), this.$items.delete(Bc);
        const nc = this[ec].root;
        return void 0 !== nc && (bn(this, nc, this[sc], Bc), void 0 !== cB[ec] && nc.remove(cB[ec])), !0
      }
      has(cB) {
        return this._itemIndex.has(cB)
      }
      clear() {
        const cB = this[ec].root;
        if (void 0 !== cB) {
          ! function(cB, Bc, nc) {
            const Vc = cB._stream;
            if (void 0 !== Vc) {
              Vc.broadcastPending.clear();
              for (const cB of Vc.sentBroadcast) Vc.broadcastDeletes.add(cB);
              Vc.sentBroadcast.clear(), Bc.forEachActiveView((cB => {
                Vc.pendingByView.get(cB.id)?.clear();
                const Bc = Vc.sentByView.get(cB.id);
                if (void 0 !== Bc && Bc.size > 0) {
                  let Vc = cB.changes.get(nc);
                  void 0 === Vc && (Vc = new Map, cB.changes.set(nc, Vc));
                  for (const cB of Bc) Vc.set(cB, Ic.DELETE);
                  Bc.clear()
                }
              }))
            }
          }(this, cB, this[sc]);
          for (const Bc of this.$items.values()) void 0 !== Bc[ec] && cB.remove(Bc[ec])
        }
        this.$items.clear(), this._itemIndex.clear()
      }
      forEach(cB) {
        for (const [Bc, nc] of this.$items) cB(nc, Bc, this)
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
      setIndex(cB, Bc) {}
      getIndex(cB) {
        return cB
      } [Tc](cB) {
        return this.$items.get(cB)
      } [fc](cB) {
        const Bc = this.$items.get(cB);
        void 0 !== Bc && (this._itemIndex.delete(Bc), this.$items.delete(cB))
      } [mB]() {} [yB]() {}
      toArray() {
        return Array.from(this.$items.values())
      }
      toJSON() {
        const cB = [];
        return this.forEach((Bc => {
          cB.push("function" === typeof Bc?.toJSON ? Bc.toJSON() : Bc)
        })), cB
      }
      clone(cB) {
        if (cB) {
          return Object.assign(new MV, this)
        }
        const Bc = new MV;
        return Bc.maxPerTick = this.maxPerTick, this.forEach((cB => {
          Bc.add("function" === typeof cB?.clone ? cB.clone() : cB)
        })), Bc
      }
      _dropView(cB) {
        vn(this, cB)
      }
      _unregister() {}
    }
    an("stream", {
      constructor: MV
    });
    class PV {
      [aB] = !0;
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
      constructor(cB) {
        this._type = cB
      }
      default (cB) {
        return this._default = cB, this._hasDefault = !0, this
      }
      view(cB) {
        return this._view = cB ?? -1, this
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
        const cB = this._type;
        if (cB && "object" === typeof cB && void 0 !== cB.array) throw new Error(YB);
        return this._stream = !0, this
      }
      priority(cB) {
        return this._streamPriority = cB, this
      }
      deprecated() {
        let cB = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
        return this._deprecated = !0, this._deprecatedThrows = cB, this
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

    function qI(cB) {
      return null != cB && !0 === cB[aB]
    }

    function OV(cB) {
      return () => new PV(cB)
    }

    function TV(cB) {
      if (qI(cB)) {
        const Bc = cB._type;
        throw new Error(`t.array/map/set/collection(): a t.* builder is not a valid element type \u2014 ${"string"===typeof Bc?`use the type name instead: t.array("${Bc}")`:'collections accept a Schema class or a primitive type name ("string", "number", \u2026)'}.`)
      }
      return cB
    }

    function fV(cB) {
      return new PV({
        quantized: NB(cB)
      })
    }
    const mI = Object.freeze({
        string: OV("string"),
        number: OV("number"),
        boolean: OV("boolean"),
        int8: OV("int8"),
        uint8: OV("uint8"),
        int16: OV("int16"),
        uint16: OV("uint16"),
        int32: OV("int32"),
        uint32: OV("uint32"),
        int64: OV("int64"),
        uint64: OV("uint64"),
        float32: OV("float32"),
        float64: OV("float64"),
        bigint64: OV("bigint64"),
        biguint64: OV("biguint64"),
        ref: cB => new PV(cB),
        array: cB => new PV({
          array: TV(cB)
        }),
        map: cB => new PV({
          map: TV(cB)
        }),
        set: cB => new PV({
          set: TV(cB)
        }),
        collection: cB => new PV({
          collection: TV(cB)
        }),
        stream: cB => {
          const Bc = new PV({
            stream: TV(cB)
          });
          return Bc._stream = !0, Bc
        },
        quantized: fV,
        angle: cB => fV({
          min: 0,
          max: 2 * Math.PI,
          mode: "wrap",
          bits: cB?.bits ?? 16
        })
      }),
      eV = -1;

    function tI(cB) {
      return kn.register(cB), cB
    }

    function SV() {
      let cB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eV;
      return function(Bc, nc) {
        const Vc = KB.initialize(Bc.constructor);
        KB.setTag(Vc, nc, cB)
      }
    }

    function yI(cB, Bc) {
      const nc = KB.initialize(cB.constructor);
      KB.setUnreliable(nc, Bc)
    }

    function zI(cB, Bc) {
      const nc = KB.initialize(cB.constructor);
      KB.setPatchOnly(nc, Bc)
    }

    function pV(cB, Bc) {
      const nc = KB.initialize(cB.constructor);
      KB.setFullStateOnly(nc, Bc)
    }

    function hV(cB, Bc) {
      return function(nc, Vc) {
        const Ic = nc.constructor;
        if (!cB) throw new Error(`${Ic.name}: @type() reference provided for "${Vc}" is undefined. Make sure you don't have any circular dependencies.`);
        cB = HB(cB, `${Ic.name}.${Vc}`), kn.register(Ic);
        const rB = Object.getPrototypeOf(Ic)[Symbol.metadata],
          uc = KB.initialize(Ic);
        let sc = uc[Vc];
        if (void 0 !== uc[sc]) {
          if (uc[sc].deprecated) return;
          if (void 0 !== uc[sc].type) {
            const cB = new Error(`@colyseus/schema: Duplicate '${Vc}' definition on '${Ic.name}'.\nCheck @type() annotation`);
            throw new Error(`${cB.message} ${cB.stack.split("\n")[4].trim()}`)
          }
        } else sc = uc[gB] ?? (rB && rB[gB]) ?? -1, sc++;
        if (Bc && Bc.manual) KB.addField(uc, sc, Vc, cB, {
          enumerable: !0,
          configurable: !0,
          writable: !0
        });
        else {
          const {
            complexTypeKlass: Bc,
            childType: nc
          } = XB(cB);
          KB.addField(uc, sc, Vc, cB, lV(Vc, sc, nc, Bc))
        }
        uc[lc][Vc] && Object.defineProperty(nc, Vc, uc[lc][Vc]), ("string" === typeof cB || EB(cB)) && (uc[Lc] || Object.defineProperty(uc, Lc, {
          value: [],
          enumerable: !1,
          configurable: !0,
          writable: !0
        }), uc[Lc][sc] = "string" === typeof cB ? BB[cB] : wB(cB.quantized))
      }
    }
    const aI = {
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

    function lV(cB, Bc, nc, Vc) {
      let rB;
      return rB = Vc ? function(cB, Bc, nc, Vc) {
        const rB = Vc.constructor === VV,
          uc = Vc.constructor === rI;
        return function(cB) {
          const Vc = this[hc],
            sc = Vc[Bc];
          if (cB !== sc) {
            if (void 0 !== cB && null !== cB) {
              if (!rB || cB instanceof VV)
                if (!uc || cB instanceof rI) cB[tB] = nc;
                else {
                  const Bc = new rI;
                  if (Bc[tB] = nc, cB instanceof Map) cB.forEach(((cB, nc) => Bc.set(nc, cB)));
                  else
                    for (const nc in cB) Bc.set(nc, cB[nc]);
                  cB = Bc
                }
              else {
                const Bc = new VV;
                Bc[tB] = nc, Bc.push(...cB), cB = Bc
              }
              const Vc = this[ec],
                Pc = this.constructor;
              void 0 !== sc && null !== sc && sc[ec] ? (Vc.root?.remove(sc[ec]), Pc[Mc](Vc, Bc, Ic.DELETE_AND_ADD)) : Pc[Mc](Vc, Bc, Ic.ADD), cB[ec]?.setParent(this, Vc.root, Bc)
            } else void 0 !== sc && null !== sc && this[ec].delete(Bc);
            Vc[Bc] = cB
          }
        }
      }(0, Bc, nc, Vc) : "string" === typeof nc ? function(cB, Bc, nc) {
        const Vc = aI[nc],
          rB = "string" === nc,
          uc = "boolean" === nc;
        return function(nc) {
          const sc = this[hc],
            Pc = sc[Bc];
          if (nc !== Pc) {
            if (void 0 !== nc && null !== nc) {
              if (!uc && void 0 !== Vc && typeof nc !== Vc && (!rB || null !== nc)) {
                const Bc = nc && nc.constructor ? ` (${nc.constructor.name})` : "";
                throw new Gn(`a '${Vc}' was expected, but '${JSON.stringify(nc)}'${Bc} was provided in ${this.constructor.name}#${cB}`)
              }
              this.constructor[Mc](this[ec], Bc, Ic.ADD)
            } else void 0 !== Pc && null !== Pc && this[ec].delete(Bc);
            sc[Bc] = nc
          }
        }
      }(cB, Bc, nc) : EB(nc) ? function(cB, Bc, nc) {
        return function(Vc) {
          const rB = this[hc],
            uc = rB[Bc];
          if (void 0 !== Vc && null !== Vc) {
            if ("number" !== typeof Vc) throw new Gn(`a 'number' was expected, but '${JSON.stringify(Vc)}' was provided in ${this.constructor.name}#${cB}`);
            if ((Vc = WB(nc, oB(nc, Vc))) === uc) return;
            this.constructor[Mc](this[ec], Bc, Ic.ADD)
          } else {
            if (Vc === uc) return;
            void 0 !== uc && null !== uc && this[ec].delete(Bc)
          }
          rB[Bc] = Vc
        }
      }(cB, Bc, nc.quantized) : function(cB, Bc, nc) {
        return function(Vc) {
          const rB = this[hc],
            uc = rB[Bc];
          if (Vc !== uc) {
            if (void 0 !== Vc && null !== Vc) {
              cI(Vc, nc, this, cB);
              const rB = this[ec],
                sc = this.constructor;
              void 0 !== uc && null !== uc && uc[ec] ? (rB.root?.remove(uc[ec]), sc[Mc](rB, Bc, Ic.DELETE_AND_ADD)) : sc[Mc](rB, Bc, Ic.ADD), Vc[ec]?.setParent(this, rB.root, Bc)
            } else void 0 !== uc && null !== uc && this[ec].delete(Bc);
            rB[Bc] = Vc
          }
        }
      }(cB, Bc, nc), {
        get: function() {
          return this[hc][Bc]
        },
        set: rB,
        enumerable: !0,
        configurable: !0
      }
    }

    function YV() {
      let cB = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
      return function(Bc, nc) {
        const Vc = KB.initialize(Bc.constructor);
        KB.setDeprecated(Vc, nc), cB && (Vc[lc] ??= {}, Vc[lc][nc] = {
          get: function() {
            throw new Error(`${nc} is deprecated.`)
          },
          set: function(cB) {},
          enumerable: !1,
          configurable: !0
        }, Object.defineProperty(Bc, nc, Vc[lc][nc]))
      }
    }
    let LV = !1;

    function gI(cB, Bc, nc) {
      LV || (LV = !0, console.warn("@colyseus/schema: defineTypes() is deprecated and will be removed in a future release. Use schema() with t.* field builders instead \u2192 https://docs.colyseus.io/state/schema"));
      for (let Vc in Bc) hV(Bc[Vc], nc)(cB.prototype, Vc);
      return cB
    }

    function UV(cB, Bc) {
      let nc = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : ZV;
      if (null == cB || "object" !== typeof cB) throw new Error(`schema(): first argument must be a fields object (got ${typeof cB}).`);
      const Vc = {},
        Ic = {},
        rB = {},
        uc = {},
        sc = (cB, Bc) => {
          if (Bc.hasDefault)((cB, Bc) => {
            "function" === typeof Bc ? uc[cB] = Bc : Bc && "function" === typeof Bc.clone ? uc[cB] = () => Bc.clone() : rB[cB] = Bc
          })(cB, Bc.default);
          else if (!Bc.optional) {
            const nc = function(cB) {
              if (cB && "object" === typeof cB) {
                if (void 0 !== cB.array) return () => new VV;
                if (void 0 !== cB.map) return () => new rI;
                if (void 0 !== cB.set) return () => new sV;
                if (void 0 !== cB.collection) return () => new uV;
                if (void 0 !== cB.stream) return () => new MV
              } else if ("function" === typeof cB && ZV.is(cB) && (!cB.prototype.initialize || 0 === cB.prototype.initialize.length)) return () => new cB
            }(Bc.type);
            nc && (uc[cB] = nc)
          }
        },
        Mc = {},
        Pc = [],
        qB = [],
        Oc = {},
        Tc = [],
        fc = [],
        mB = {},
        ec = [];
      for (const hc in cB) {
        const nc = cB[hc],
          rB = `schema(${Bc?`'${Bc}'`:""}): field '${hc}'`;
        if (qI(nc)) {
          const cB = nc.toDefinition();
          if (cB.noSync) {
            if (void 0 !== cB.view || cB.unreliable || cB.patchOnly || cB.fullStateOnly || cB.stream) throw new Error(`${rB} uses .noSync() together with a sync-only modifier (.view/.unreliable/.patchOnly/.fullStateOnly/.stream). A local-only field cannot be synchronized.`);
            sc(hc, cB);
            continue
          }
          if (cB.patchOnly && cB.fullStateOnly) throw new Error(`${rB} uses .patchOnly() together with .fullStateOnly(). Those are the only two delivery channels, so the field would never reach a client \u2014 use .noSync() if that is intended.`);
          const Bc = HB(cB.type, rB);
          if ("function" === typeof Bc && !ZV.is(Bc)) throw new Error(`${rB} is a synced ref to non-Schema class '${Bc.name||"(anonymous)"}' \u2014 use .noSync(), or Metadata.setFields().`);
          Vc[hc] = Bc, void 0 !== cB.view && (Mc[hc] = cB.view), cB.unreliable && Pc.push(hc), cB.patchOnly && qB.push(hc), cB.deprecated && (Oc[hc] = cB.deprecatedThrows), cB.fullStateOnly && Tc.push(hc), cB.stream && fc.push(hc), void 0 !== cB.streamPriority && (mB[hc] = cB.streamPriority), cB.optional && ec.push(hc), sc(hc, cB)
        } else {
          if ("function" !== typeof nc) throw new Error(`${rB} must be a t.* builder, Schema subclass, or method (got ${typeof nc}).`);
          ZV.is(nc) ? (Vc[hc] = nc, nc.prototype.initialize && 0 !== nc.prototype.initialize.length || (uc[hc] = () => new nc)) : Ic[hc] = nc
        }
      }
      const tB = cB => {
          for (const Bc in rB) cB[Bc] = rB[Bc];
          for (const Bc in uc) cB[Bc] = uc[Bc]()
        },
        Sc = () => {
          const cB = {};
          return tB(cB), cB
        },
        yB = "function" === typeof Ic.initialize,
        zB = Ic.initialize ?? nc._initialize,
        pc = class extends nc {
          constructor() {
            for (var cB = arguments.length, Bc = new Array(cB), nc = 0; nc < cB; nc++) Bc[nc] = arguments[nc];
            const Ic = Bc[0];
            void 0 === Ic ? (super(), tB(this)) : super(Object.assign(Sc(), yB ? (cB => {
              const Bc = Object.keys(Vc),
                nc = {};
              for (const Vc in cB) Bc.includes(Vc) || (nc[Vc] = cB[Vc]);
              return nc
            })(Ic) : Ic)), zB && new.target === pc && zB.apply(this, Bc)
          }
        };
      Bc && Object.defineProperty(pc, "name", {
        value: Bc
      }), KB.setFields(pc, Vc), pc._getDefaultValues = Sc, pc._initialize = zB, Object.assign(pc.prototype, Ic);
      for (const hc in Mc) SV(Mc[hc])(pc.prototype, hc);
      for (const hc of Pc) yI(pc.prototype, hc);
      for (const hc of qB) zI(pc.prototype, hc);
      for (const hc in Oc) YV(Oc[hc])(pc.prototype, hc);
      if (Tc.length > 0 || fc.length > 0) {
        const cB = pc[Symbol.metadata];
        for (const Bc of Tc) KB.setFullStateOnly(cB, Bc);
        for (const Bc of fc) KB.setStream(cB, Bc);
        for (const Bc in mB) KB.setStreamPriority(cB, Bc, mB[Bc])
      }
      if (ec.length > 0) {
        const cB = pc[Symbol.metadata];
        for (const Bc of ec) cB[cB[Bc]].optional = !0
      }
      return pc.extend = (cB, Bc) => UV(cB, Bc, pc), pc
    }

    function bI(cB) {
      const Bc = cB[ec].root,
        nc = {
          ops: {},
          refs: []
        };
      let Vc = Bc.changes.next;
      for (; Vc;) {
        const cB = Vc.changeTree;
        void 0 !== cB ? (nc.refs.push(`refId#${cB.ref[sc]}`), cB.forEach(((cB, Bc) => {
          if (cB < 0 || !Bc) return;
          const Vc = Ic[Bc];
          nc.ops[Vc] || (nc.ops[Vc] = 0), nc.ops[Vc]++
        })), Vc = Vc.next) : Vc = Vc.next
      }
      return nc
    }
    class ZV {
      static[Pc] = Nn;
      static[qB] = xV;
      [sc];
      [hc];
      static initialize(cB) {
        Object.defineProperty(cB, ec, {
          value: new Qn(cB),
          enumerable: !1,
          writable: !0
        }), cB[hc] = []
      }
      static initializeForDecoder() {
        const cB = Object.create(this.prototype);
        return vV(cB), cB[hc] = [], cB
      }
      static reset(cB) {
        const Bc = cB?.[ec];
        if (void 0 === Bc || "function" !== typeof Bc.recycle) throw new Error("@colyseus/schema: Schema.reset() requires a tracked (encoder-side) instance.");
        if (void 0 !== Bc.extraParents) throw new Error(`@colyseus/schema: cannot reset a shared instance (${cB.constructor.name}) with multiple parents.`);
        cB[zB]()
      } [zB]() {
        const cB = this.constructor[Symbol.metadata],
          Bc = cB?.[Uc] ?? [],
          nc = this[hc];
        for (let Vc = 0; Vc < Bc.length; Vc++) {
          const cB = nc[Bc[Vc]];
          cB?.[zB]?.()
        }
        this[ec].recycle(), this[sc] = void 0
      }
      static is(cB) {
        const Bc = cB[Symbol.metadata];
        return "object" === typeof Bc && null !== Bc
      }
      static isSchema(cB) {
        return "function" === typeof cB?.assign
      }
      static[Mc](cB, Bc) {
        let nc = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Ic.ADD;
        cB.change(Bc, nc)
      }
      static[Oc](cB, Bc, nc) {
        const Vc = cB.constructor[Symbol.metadata],
          Ic = Vc[Bc]?.tag;
        return void 0 === nc ? void 0 === Ic : void 0 === Ic || (Ic === eV ? nc.isChangeTreeVisible(cB[ec]) : nc.hasTagOnTree(cB[ec], Ic))
      }
      constructor(cB) {
        ZV.initialize(this), cB && ZV.assignProps(this, cB)
      }
      assign(cB) {
        return ZV.assignProps(this, cB), this
      }
      static assignProps(cB, Bc) {
        const nc = cB.constructor[Symbol.metadata];
        if (nc && void 0 !== nc[gB])
          for (let Ic = 0; Ic <= nc[gB]; Ic++) {
            const Vc = nc[Ic];
            if (!Vc) continue;
            const rB = Bc[Vc.name];
            void 0 !== rB && (cB[Vc.name] = rB)
          }
        const Vc = Object.keys(Bc);
        for (let Ic = 0; Ic < Vc.length; Ic++) {
          const rB = Vc[Ic];
          nc && void 0 !== nc[rB] || (cB[rB] = Bc[rB])
        }
      }
      restore(cB) {
        const Bc = this.constructor[Symbol.metadata];
        for (const nc in Bc) {
          const Vc = Bc[nc],
            Ic = Vc.name,
            rB = Vc.type,
            uc = cB[Ic];
          if (void 0 !== uc && null !== uc)
            if ("string" === typeof rB) this[Ic] = uc;
            else if (ZV.is(rB)) {
            const cB = new rB;
            cB.restore(uc), this[Ic] = cB
          } else if ("object" === typeof rB) {
            const cB = Object.keys(rB)[0],
              Bc = rB[cB];
            if ("map" === cB) {
              const cB = this[Ic];
              for (const nc in uc)
                if (ZV.is(Bc)) {
                  const Vc = new Bc;
                  Vc.restore(uc[nc]), cB.set(nc, Vc)
                } else cB.set(nc, uc[nc])
            } else if ("array" === cB) {
              const cB = this[Ic];
              for (let nc = 0; nc < uc.length; nc++)
                if (ZV.is(Bc)) {
                  const Vc = new Bc;
                  Vc.restore(uc[nc]), cB.push(Vc)
                } else cB.push(uc[nc])
            }
          }
        }
        return this
      }
      setDirty(cB, Bc) {
        const nc = this.constructor[Symbol.metadata];
        this[ec].change(nc[nc[cB]].index, Bc)
      }
      pauseTracking() {
        this[ec].pause()
      }
      resumeTracking() {
        this[ec].resume()
      }
      untracked(cB) {
        return this[ec].untracked(cB)
      }
      get isTrackingPaused() {
        return this[ec].paused
      }
      clone() {
        const cB = Object.create(this.constructor.prototype);
        ZV.initialize(cB);
        const Bc = this.constructor[Symbol.metadata];
        for (const nc in Bc) {
          const Vc = Bc[nc].name;
          "object" === typeof this[Vc] && "function" === typeof this[Vc]?.clone ? cB[Vc] = this[Vc].clone() : cB[Vc] = this[Vc]
        }
        return cB
      }
      toJSON() {
        const cB = {},
          Bc = this.constructor[Symbol.metadata];
        for (const nc in Bc) {
          const Vc = Bc[nc],
            Ic = Vc.name;
          Vc.deprecated || null === this[Ic] || "undefined" === typeof this[Ic] || (cB[Ic] = "function" === typeof this[Ic].toJSON ? this[Ic].toJSON() : this[Ic])
        }
        return cB
      }
      discardAllChanges() {
        this[ec].discardAll()
      } [Tc](cB) {
        return this[this.constructor[Symbol.metadata][cB].name]
      } [fc](cB) {
        this[this.constructor[Symbol.metadata][cB].name] = void 0
      }
      static debugRefIds(cB) {
        let Bc = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          nc = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          Vc = arguments.length > 3 ? arguments[3] : void 0,
          Ic = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "";
        const rB = Bc ? ` - ${JSON.stringify(cB.toJSON())}` : "",
          uc = cB[ec],
          Mc = cB[sc],
          Pc = Vc ? Vc.root.refCount[Mc] : uc.refCount,
          qB = Pc > 1 ? ` [\xd7${Pc}]` : "";
        let Oc = `${function(cB){return new Array(cB).fill(0).map(((Bc,nc)=>nc===cB-1?"\u2514\u2500 ":"   ")).join("")}(nc)}${Ic}${cB.constructor.name} (refId: ${Mc})${qB}${rB}\n`;
        return uc.forEachChild(((Ic, rB) => {
          let uc = rB;
          "number" === typeof rB && cB.$indexes && (uc = cB.$indexes.get(rB) ?? rB);
          const sc = void 0 !== cB.forEach && void 0 !== uc ? `["${uc}"]: ` : "";
          Oc += this.debugRefIds(Ic.ref, Bc, nc + 1, Vc, sc)
        })), Oc
      }
      static debugRefIdEncodingOrder(cB) {
        let Bc = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "allChanges";
        const nc = [],
          Vc = cB[ec];
        if ("changes" === Bc) {
          let cB = Vc.root.changes?.next;
          for (; cB;) cB.changeTree && nc.push(cB.changeTree.ref[sc]), cB = cB.next;
          return nc
        }
        const Ic = "allFilteredChanges" === Bc,
          rB = new Set,
          uc = cB => {
            rB.has(cB) || (rB.add(cB), cB.isFiltered === Ic && nc.push(cB.ref[sc]), cB.forEachChild(((cB, Bc) => uc(cB))))
          };
        return uc(Vc), nc
      }
      static debugRefIdsFromDecoder(cB) {
        return this.debugRefIds(cB.state, !1, 0, cB)
      }
      static debugChanges(cB) {
        let Bc = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        const nc = cB[ec],
          Vc = Bc ? "allChanges" : "changes";
        let rB = `${cB.constructor.name} (${cB[sc]}) -> .${Vc}:\n`;
        return Bc ? nc.forEachLive((cB => {
          rB += `- [${cB}]: ADD (${JSON.stringify(nc.getValue(Number(cB),!0))})\n`
        })) : nc.forEach(((cB, Bc) => {
          cB < 0 || !Bc || (rB += `- [${cB}]: ${Ic[Bc]} (${JSON.stringify(nc.getValue(Number(cB),!1))})\n`)
        })), rB
      }
    }
    rB(ZV);
    const QV = {
      value: 0,
      enumerable: !1,
      writable: !0
    };
    class CV {
      types;
      nextUniqueId = 0;
      changeTrees = {};
      get refCount() {
        const cB = {};
        for (const Bc in this.changeTrees) cB[Bc] = this.changeTrees[Bc].refCount;
        return cB
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
      enqueueFilterRefresh(cB) {
        this.types.hasFilters && (cB.flags & bV || (cB.flags |= bV, this.pendingFilterRefresh.push(cB)))
      }
      _nodePool = [];
      _nextViewId = 0;
      _freeViewIds = [];
      acquireViewId() {
        return this._freeViewIds.length > 0 ? this._freeViewIds.pop() : this._nextViewId++
      }
      releaseViewId(cB) {
        this._freeViewIds.push(cB)
      }
      activeViews = new Map;
      streamTrees = new Set;
      registerView(cB) {
        this.activeViews.set(cB.id, new WeakRef(cB))
      }
      unregisterView(cB) {
        this.activeViews.delete(cB.id);
        const Bc = cB.id;
        for (const nc of this.streamTrees) nc._dropView(Bc)
      }
      forEachActiveView(cB) {
        for (const [Bc, nc] of this.activeViews) {
          const Vc = nc.deref();
          if (void 0 !== Vc) cB(Vc);
          else {
            this.activeViews.delete(Bc);
            for (const cB of this.streamTrees) cB._dropView(Bc)
          }
        }
      }
      registerStream(cB) {
        this.streamTrees.add(cB)
      }
      unregisterStream(cB) {
        this.streamTrees.delete(cB)
      }
      constructor(cB) {
        let Bc = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        this.types = cB, this.nextUniqueId = Bc
      }
      add(cB) {
        const Bc = cB.ref;
        void 0 === Bc[sc] && (QV.value = this.nextUniqueId++, Object.defineProperty(Bc, sc, QV));
        const nc = Bc[sc],
          Vc = void 0 === this.changeTrees[nc];
        Vc && (this.changeTrees[nc] = cB), cB.needsRestage && (cB.needsRestage = !1, cB.forEachLiveWithCtx(cB, Vn));
        const Ic = Vc ? 0 : cB.refCount;
        return cB.refCount = Ic + 1, Ic > 0 && this.enqueueFilterRefresh(cB), Vc
      }
      remove(cB) {
        const Bc = cB.refCount - 1;
        if (Bc <= 0) {
          if (cB.root = void 0, delete this.changeTrees[cB.ref[sc]], cB.isStreamCollection) {
            const Bc = cB.ref;
            Bc._unregister?.(), this.unregisterStream(Bc)
          }
          this.removeFromQueue(cB), this.removeFromUnreliableQueue(cB), cB.refCount = 0, cB.needsRestage = !0, cB.forEachChild(((Bc, nc) => {
            Bc.removeParent(cB.ref) && (void 0 === Bc.parentRef || Bc.refCount > 0 ? this.remove(Bc) : this.moveNextToParent(Bc))
          }))
        } else cB.refCount = Bc, this.enqueueFilterRefresh(cB), this.recursivelyMoveNextToParent(cB);
        return Bc
      }
      recursivelyMoveNextToParent(cB) {
        this.moveNextToParent(cB), cB.forEachChild(((cB, Bc) => this.recursivelyMoveNextToParent(cB)))
      }
      moveNextToParent(cB) {
        cB.changesNode && this._moveNextToParentInList(this.changes, cB, cB.changesNode, "changesNode"), cB.unreliableChangesNode && this._moveNextToParentInList(this.unreliableChanges, cB, cB.unreliableChangesNode, "unreliableChangesNode")
      }
      _moveNextToParentInList(cB, Bc, nc, Vc) {
        const Ic = Bc.parent;
        if (!Ic || !Ic[ec]) return;
        const rB = Ic[ec][Vc];
        rB && rB !== nc && (nc.position > rB.position || (nc.prev ? nc.prev.next = nc.next : cB.next = nc.next, nc.next ? nc.next.prev = nc.prev : cB.tail = nc.prev, nc.prev = cB.tail, nc.next = void 0, cB.tail.next = nc, cB.tail = nc, nc.position = cB.nextPosition++))
      }
      enqueueChangeTree(cB) {
        (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : cB.changesNode) || (cB.changesNode = this._appendToList(this.changes, cB))
      }
      enqueueUnreliable(cB) {
        (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : cB.unreliableChangesNode) || (cB.unreliableChangesNode = this._appendToList(this.unreliableChanges, cB))
      }
      _appendToList(cB, Bc) {
        const nc = this._nodePool;
        let Vc;
        return nc.length > 0 ? (Vc = nc.pop(), Vc.changeTree = Bc, Vc.next = void 0, Vc.prev = void 0) : Vc = {
          changeTree: Bc,
          next: void 0,
          prev: void 0,
          position: 0
        }, cB.next ? (Vc.prev = cB.tail, cB.tail.next = Vc, cB.tail = Vc) : (cB.nextPosition = 0, cB.next = Vc, cB.tail = Vc), Vc.position = cB.nextPosition++, Vc
      }
      releaseNode(cB) {
        cB.changeTree = void 0, cB.prev = void 0, cB.next = void 0, this._nodePool.push(cB)
      }
      removeFromQueue(cB) {
        return this._removeNode(this.changes, cB, cB.changesNode, "changesNode")
      }
      removeFromUnreliableQueue(cB) {
        return this._removeNode(this.unreliableChanges, cB, cB.unreliableChangesNode, "unreliableChangesNode")
      }
      _removeNode(cB, Bc, nc, Vc) {
        return !(!nc || nc.changeTree !== Bc) && (nc.prev ? nc.prev.next = nc.next : cB.next = nc.next, nc.next ? nc.next.prev = nc.prev : cB.tail = nc.prev, Bc[Vc] = void 0, this.releaseNode(nc), !0)
      }
    }

    function vI(cB, Bc) {
      if (-1 === Bc || Bc >= cB.length) return !1;
      const nc = cB.length - 1;
      for (let Vc = Bc; Vc < nc; Vc++) cB[Vc] = cB[Vc + 1];
      return cB.length = nc, !0
    }

    function DV(cB, Bc, nc) {
      const Vc = ~nc,
        Ic = cB.changeTrees;
      for (const rB in Ic) {
        const cB = Ic[rB],
          nc = cB.visibleViews;
        void 0 !== nc && Bc < nc.length && (nc[Bc] &= Vc);
        const uc = cB.subscribedViews;
        void 0 !== uc && Bc < uc.length && (uc[Bc] &= Vc);
        const sc = cB.tagViews;
        void 0 !== sc && sc.forEach((cB => {
          Bc < cB.length && (cB[Bc] &= Vc)
        }))
      }
    }
    const NV = new FinalizationRegistry((cB => {
      let {
        root: Bc,
        id: nc,
        slot: Vc,
        bit: Ic
      } = cB;
      DV(Bc, Vc, Ic), Bc.activeViews.delete(nc);
      for (const rB of Bc.streamTrees) rB._dropView(nc);
      Bc.releaseViewId(nc)
    }));

    function EV(cB) {
      if (void 0 === cB) return "undefined";
      if (null === cB) return "null";
      const Bc = typeof cB;
      return "string" === Bc ? JSON.stringify(cB.length > 30 ? `${cB.slice(0,30)}\u2026` : cB) : "object" !== Bc && "function" !== Bc ? `${Bc} ${String(cB)}` : Array.isArray(cB) ? `Array(${cB.length})` : cB.constructor?.name ?? "Object"
    }
    class oV {
      iterable;
      items;
      id = -1;
      _root;
      _slot = 0;
      _bit = 0;
      changes = new Map;
      constructor() {
        let cB = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        this.iterable = cB, cB && (this.items = [])
      }
      _bindRoot(cB) {
        void 0 === this._root && (this._root = cB, this.id = cB.acquireViewId(), this._slot = this.id >> 5, this._bit = 1 << (31 & this.id), cB.registerView(this), NV.register(this, {
          root: cB,
          id: this.id,
          slot: this._slot,
          bit: this._bit
        }, this))
      }
      dispose() {
        void 0 !== this._root && (this._root.unregisterView(this), DV(this._root, this._slot, this._bit), this._root.releaseViewId(this.id), NV.unregister(this), this._root = void 0, this.id = -1)
      }
      isVisible(cB) {
        const Bc = cB.visibleViews,
          nc = this._slot;
        return void 0 !== Bc && nc < Bc.length && 0 !== (Bc[nc] & this._bit)
      }
      markVisible(cB) {
        const Bc = this._slot;
        let nc = cB.visibleViews;
        for (void 0 === nc && (nc = cB.visibleViews = []); nc.length <= Bc;) nc.push(0);
        nc[Bc] |= this._bit
      }
      unmarkVisible(cB) {
        const Bc = cB.visibleViews;
        if (void 0 === Bc) return;
        const nc = this._slot;
        nc < Bc.length && (Bc[nc] &= ~this._bit)
      }
      isSubscribed(cB) {
        const Bc = cB.subscribedViews,
          nc = this._slot;
        return void 0 !== Bc && nc < Bc.length && 0 !== (Bc[nc] & this._bit)
      }
      _setSubscribed(cB) {
        const Bc = this._slot;
        let nc = cB.subscribedViews;
        for (void 0 === nc && (nc = cB.subscribedViews = []); nc.length <= Bc;) nc.push(0);
        nc[Bc] |= this._bit
      }
      _clearSubscribed(cB) {
        const Bc = cB.subscribedViews;
        if (void 0 === Bc) return;
        const nc = this._slot;
        nc < Bc.length && (Bc[nc] &= ~this._bit)
      }
      hasTagOnTree(cB, Bc) {
        const nc = cB.tagViews;
        if (void 0 === nc) return !1;
        const Vc = this._slot,
          Ic = this._bit;
        for (let rB = Bc; 0 !== rB; rB &= rB - 1) {
          const cB = nc.get(rB & -rB);
          if (void 0 !== cB && Vc < cB.length && 0 !== (cB[Vc] & Ic)) return !0
        }
        return !1
      }
      addTag(cB, Bc) {
        if (Bc === eV) return;
        let nc = cB.tagViews;
        void 0 === nc && (nc = cB.tagViews = new Map);
        const Vc = this._slot,
          Ic = this._bit;
        for (let rB = Bc; rB > 0; rB &= rB - 1) {
          const cB = rB & -rB;
          let Bc = nc.get(cB);
          for (void 0 === Bc && (Bc = [], nc.set(cB, Bc)); Bc.length <= Vc;) Bc.push(0);
          Bc[Vc] |= Ic
        }
      }
      removeTag(cB, Bc) {
        if (Bc === eV) return;
        const nc = cB.tagViews;
        if (void 0 === nc) return;
        const Vc = this._slot,
          Ic = ~this._bit;
        for (let rB = Bc; rB > 0; rB &= rB - 1) {
          const cB = nc.get(rB & -rB);
          void 0 !== cB && Vc < cB.length && (cB[Vc] &= Ic)
        }
      }
      removeAllTagsOnTree(cB) {
        const Bc = cB.tagViews;
        if (void 0 === Bc) return;
        const nc = this._slot,
          Vc = ~this._bit;
        Bc.forEach((cB => {
          nc < cB.length && (cB[nc] &= Vc)
        }))
      }
      add(cB) {
        let Bc = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eV,
          nc = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        return this._add(cB, Bc, nc, !1)
      }
      _addImmediate(cB) {
        let Bc = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eV;
        this._add(cB, Bc, !0, !0)
      }
      _add(cB, Bc, nc, Vc) {
        const rB = cB?.[ec];
        if (!rB) return console.warn(`StateView#add(): expected a Schema instance or collection, received ${EV(cB)}`), !1;
        const uc = rB.parent;
        if (!uc && 0 !== cB[sc]) throw new Error(`Cannot add a detached instance to the StateView. Make sure to assign the "${rB.ref.constructor.name}" instance to the state before calling view.add()`);
        void 0 === this._root && void 0 !== rB.root && this._bindRoot(rB.root);
        const Mc = uc?.[ec];
        if (!Vc && Mc?.isStreamCollection) return CB(uc, this.id, rB.parentIndex), !0;
        const Pc = cB.constructor[Symbol.metadata],
          qB = this.isVisible(rB);
        if (!this.iterable || !nc || qB && -1 !== this.items.indexOf(cB) || this.items.push(cB), this.markVisible(rB), nc && uc && this.addParentOf(rB, Bc), !Vc && rB.isStreamCollection) return !0;
        if (Bc === eV && rB.isNew) return this._markSubtreeVisible(rB, Bc), !1;
        let Oc = this.changes.get(cB[sc]);
        void 0 === Oc && (Oc = new Map, this.changes.set(cB[sc], Oc));
        let Tc = !1;
        const fc = rB.encDescriptor.tags;
        if (rB.forEachChild(((cB, nc) => {
            const Vc = fc[nc];
            if (void 0 !== Vc) {
              if (!(Vc === eV || Bc !== eV && 0 !== (Vc & Bc))) return
            }
            this.add(cB.ref, Bc, !1) && (Tc = !0)
          })), Bc !== eV) {
          this.addTag(rB, Bc);
          const cB = Pc?.[Zc];
          if (void 0 !== cB)
            for (let nc = Bc; nc > 0; nc &= nc - 1) cB[nc & -nc]?.forEach((cB => {
              rB.getChange(cB) !== Ic.DELETE && Oc.set(cB, Ic.ADD)
            }))
        }
        if ((Bc === eV || !qB) && (!rB.isNew || Tc))
          if (rB.isArray && "string" !== typeof rB.refTarget[tB]) rB.refTarget.items.length > 0 && (Oc.set(-1, Ic.ADD), Tc = !0);
          else {
            const cB = rB.encDescriptor.tags;
            rB.forEachLive((nc => {
              const Vc = cB[nc];
              (void 0 === Vc || Vc === eV || Bc !== eV && 0 !== (Vc & Bc)) && (Oc.set(nc, Ic.ADD), Tc = !0)
            }))
          } return Tc
      }
      _markSubtreeVisible(cB, Bc) {
        const nc = cB.encDescriptor.tags;
        cB.forEachChild(((cB, Vc) => {
          const Ic = nc[Vc];
          if (void 0 !== Ic) {
            if (!(Ic === eV || Bc !== eV && 0 !== (Ic & Bc))) return
          }
          cB.isNew ? (this.markVisible(cB), this._markSubtreeVisible(cB, Bc)) : this._add(cB.ref, Bc, !1, !1)
        }))
      }
      addParentOf(cB, Bc) {
        const nc = cB.parent[ec],
          Vc = cB.parentIndex;
        this.isVisible(nc) || this.markVisible(nc);
        const rB = nc.parent?.[ec];
        if (rB && this.addParentOf(nc, Bc), nc.hasFilteredFields && nc.getChange(Vc) !== Ic.DELETE) {
          let rB = this.changes.get(nc.ref[sc]);
          void 0 === rB && (rB = new Map, this.changes.set(nc.ref[sc], rB));
          const uc = nc.encDescriptor.tags[Vc];
          void 0 !== uc && uc !== eV && 0 !== (uc & Bc) && this.addTag(nc, Bc), rB.set(nc.isArray ? cB : Vc, Ic.ADD)
        }
      }
      _touchAncestorsOf(cB) {
        let Bc = cB.parent?.[ec];
        if (void 0 === Bc) return;
        const nc = [];
        for (; void 0 !== Bc;) {
          if (Bc.hasFilteredFields) {
            const cB = Bc.ref[sc];
            if (this.changes.has(cB)) break;
            nc.push(Bc)
          }
          Bc = Bc.parent?.[ec]
        }
        for (let Vc = nc.length - 1; Vc >= 0; Vc--) this.changes.set(nc[Vc].ref[sc], new Map)
      }
      remove(cB) {
        let Bc = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eV,
          nc = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        const Vc = cB?.[ec];
        if (!Vc) return console.warn(`StateView#remove(): expected a Schema instance or collection, received ${EV(cB)}`), this;
        const rB = Vc.parent?.[ec];
        if (rB?.isStreamCollection) return this.unmarkVisible(Vc), this.iterable && !nc && vI(this.items, this.items.indexOf(cB)),
          function(cB, Bc, nc, Vc, rB) {
            const uc = cB._stream;
            if (void 0 === uc) return !1;
            const sc = uc.pendingByView.get(Bc);
            if (sc?.has(Vc)) return sc.delete(Vc), !1;
            const Mc = uc.sentByView.get(Bc);
            if (Mc?.has(Vc)) {
              Mc.delete(Vc);
              let cB = rB.get(nc);
              return void 0 === cB && (cB = new Map, rB.set(nc, cB)), cB.set(Vc, Ic.DELETE), !0
            }
          }(Vc.parent, this.id, Vc.parent[sc], Vc.parentIndex, this.changes), this._recursiveDeleteVisibleChangeTree(Vc), this;
        if (Vc.isStreamCollection) {
          this.unmarkVisible(Vc), this.iterable && !nc && vI(this.items, this.items.indexOf(cB));
          const Bc = Vc.ref,
            rB = Bc._stream;
          if (void 0 !== rB) {
            rB.pendingByView.get(this.id)?.clear();
            const cB = rB.sentByView.get(this.id);
            if (void 0 !== cB && cB.size > 0) {
              const nc = Bc[sc];
              let Vc = this.changes.get(nc);
              void 0 === Vc && (Vc = new Map, this.changes.set(nc, Vc));
              for (const Bc of cB) Vc.set(Bc, Ic.DELETE);
              cB.clear()
            }
          }
          return this
        }
        this.unmarkVisible(Vc), this.iterable && !nc && vI(this.items, this.items.indexOf(cB));
        const uc = Vc.ref,
          Mc = uc.constructor[Symbol.metadata],
          Pc = uc[sc];
        this._touchAncestorsOf(Vc);
        let qB = this.changes.get(Pc);
        if (void 0 === qB && (qB = new Map, this.changes.set(Pc, qB)), Bc === eV) {
          const cB = Vc.parent;
          if (cB && !KB.isValidInstance(cB) && Vc.isFiltered) {
            const Bc = rB.isArray ? Vc : Vc.parentIndex,
              nc = cB[sc];
            let uc = this.changes.get(nc);
            void 0 === uc ? (uc = new Map, this.changes.set(nc, uc)) : uc.get(Bc) === Ic.ADD && this._dropPendingEntries(Vc), uc.set(Bc, Ic.DELETE), this._recursiveDeleteVisibleChangeTree(Vc)
          } else Mc?.[bB]?.forEach((cB => this._removeViewField(Vc, qB, cB)))
        } else {
          const cB = Mc?.[Zc];
          if (void 0 !== cB)
            for (let nc = Bc; nc > 0; nc &= nc - 1) cB[nc & -nc]?.forEach((cB => this._removeViewField(Vc, qB, cB)))
        }
        return void 0 === Bc ? this.removeAllTagsOnTree(Vc) : this.removeTag(Vc, Bc), this
      }
      has(cB) {
        return this.isVisible(cB[ec])
      }
      hasTag(cB) {
        let Bc = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eV;
        return this.hasTagOnTree(cB[ec], Bc)
      }
      subscribe(cB, Bc) {
        const nc = cB?.[ec];
        if (!nc) return console.warn(`StateView#subscribe(): expected a Schema collection, received ${EV(cB)}`), this;
        if (void 0 === this._root && void 0 !== nc.root && this._bindRoot(nc.root), void 0 !== Bc)
          if (nc.isStreamCollection) {
            const nc = gn(cB);
            null === Bc ? nc.priorityByView?.delete(this.id) : (nc.priorityByView ??= new Map).set(this.id, Bc)
          } else {
            const Bc = cB?.constructor?.name ?? "collection",
              Vc = nc.parent;
            if (void 0 === Vc) console.warn(`StateView#subscribe(): \`priority\` ignored \u2014 this ${Bc} is not attached to a state yet, so it cannot be identified as a stream. Subscribe after assigning it to the state.`);
            else {
              const cB = Vc?.constructor?.[Symbol.metadata]?.[nc.parentIndex]?.name,
                Ic = cB ? `${Vc.constructor.name}#${cB}` : Bc;
              console.warn(`StateView#subscribe(): \`priority\` ignored \u2014 ${Ic} is a ${Bc}, not a streaming collection. Declare the field with .stream() (e.g. t.map(X).stream()) or use t.stream(X) to enable priority batching.`)
            }
          } if (this.isSubscribed(nc)) return this;
        const Vc = void 0 !== nc.parent && !this.isVisible(nc);
        if (Vc ? (this.addParentOf(nc, eV), this._add(cB, eV, !1, !1)) : this.markVisible(nc), this._setSubscribed(nc), nc.isStreamCollection) {
          const Bc = cB;
          nc.forEachChild(((cB, nc) => {
            CB(Bc, this.id, nc)
          }))
        } else Vc || nc.forEachChild((cB => {
          this.markVisible(cB)
        }));
        return this
      }
      unsubscribe(cB) {
        const Bc = cB?.[ec];
        if (!Bc) return console.warn(`StateView#unsubscribe(): expected a Schema collection, received ${EV(cB)}`), this;
        if (!this.isSubscribed(Bc)) return this;
        this._clearSubscribed(Bc);
        const nc = Bc.ref[sc];
        if (Bc.isStreamCollection) {
          const Bc = cB._stream;
          if (void 0 !== Bc) {
            Bc.pendingByView.get(this.id)?.clear();
            const cB = Bc.sentByView.get(this.id);
            if (void 0 !== cB && cB.size > 0) {
              let Bc = this.changes.get(nc);
              void 0 === Bc && (Bc = new Map, this.changes.set(nc, Bc));
              for (const nc of cB) Bc.set(nc, Ic.DELETE);
              cB.clear()
            }
          }
        } else {
          const cB = Bc.isArray;
          let Vc = this.changes.get(nc);
          Bc.forEachChild(((Bc, rB) => {
            void 0 === Vc && (Vc = new Map, this.changes.set(nc, Vc)), Vc.set(cB ? Bc : rB, Ic.DELETE), this.unmarkVisible(Bc)
          }))
        }
        return this.unmarkVisible(Bc), this
      }
      clear() {
        if (!this.iterable) throw new Error("StateView#clear() is only available for iterable StateView's. Use StateView(iterable: true) constructor.");
        for (let cB = 0, Bc = this.items.length; cB < Bc; cB++) this.remove(this.items[cB], eV, !0);
        this.items.length = 0
      }
      isChangeTreeVisible(cB) {
        let Bc = this.isVisible(cB);
        if (!Bc && cB.isVisibilitySharedWithParent)
          if (this.isVisible(cB.parent[ec])) this.markVisible(cB), Bc = !0;
          else
            for (let nc = cB.extraParents; void 0 !== nc; nc = nc.next) {
              const Vc = nc.ref[ec];
              if (Vc.isFiltered && this.isVisible(Vc)) {
                this.markVisible(cB), Bc = !0;
                break
              }
            }
        return Bc
      }
      _recursiveDeleteVisibleChangeTree(cB) {
        cB.forEachChild((cB => {
          this.unmarkVisible(cB), this._recursiveDeleteVisibleChangeTree(cB)
        }))
      }
      _dropPendingEntries(cB) {
        this.changes.delete(cB.ref[sc]), cB.forEachChild((cB => this._dropPendingEntries(cB)))
      }
      _removeViewField(cB, Bc, nc) {
        const Vc = Bc.get(nc) === Ic.ADD;
        Bc.set(nc, Ic.DELETE);
        const rB = cB.ref[cB.encDescriptor.names[nc]],
          uc = rB?.[ec];
        uc && (this.unmarkVisible(uc), this._recursiveDeleteVisibleChangeTree(uc), Vc && this._dropPendingEntries(uc))
      }
    }

    function WV(cB) {
      cB.structSwitchEmitted || (cB.shouldEmitSwitch && (cB.buffer[cB.it.offset++] = 255, BB.number(cB.buffer, cB.ref[sc], cB.it)), cB.structSwitchEmitted = !0)
    }

    function wV(cB, Bc) {
      HV(cB, Bc, Ic.ADD)
    }

    function kI(cB, Bc) {
      if (Bc._fullSyncGen === cB.gen) return;
      Bc._fullSyncGen = cB.gen;
      if (!cB.hasView || cB.view.isChangeTreeVisible(Bc)) {
        const nc = Bc.encDescriptor;
        cB.changeTree = Bc, cB.ref = Bc.ref, cB.encoder = nc.encoder, cB.filter = nc.filter, cB.metadata = nc.metadata, cB.treeIsFiltered = Bc.isFiltered, cB.isSchema = nc.isSchema, cB.filterBitmask = nc.filterBitmask, cB.tags = nc.tags, cB.structSwitchEmitted = !1, cB.shouldEmitSwitch = cB.hasView || cB.it.offset > cB.initialOffset || Bc !== cB.rootChangeTree, Bc.isArray && Bc.collDirty.size > 0 && (Bc.flags |= 512), rV(Bc, cB, wV)
      }
      yV(Bc, cB, XV)
    }

    function XV(cB, Bc, nc) {
      kI(cB, Bc)
    }

    function HV(cB, Bc, nc) {
      if (Bc < 0) {
        if (cB.treeIsFiltered !== cB.emitFiltered) return;
        return WV(cB), void(cB.buffer[cB.it.offset++] = 255 & Math.abs(Bc))
      }
      if ((cB.isSchema ? cB.treeIsFiltered || (Bc < 32 ? 0 !== (cB.filterBitmask & 1 << Bc) : void 0 !== cB.tags[Bc]) : cB.treeIsFiltered) !== cB.emitFiltered) return;
      const Vc = cB.isEncodeAll ? Ic.ADD : nc;
      void 0 !== Vc && (void 0 === cB.filter || cB.filter(cB.ref, Bc, cB.view)) && (WV(cB), cB.encoder(cB.self, cB.buffer, cB.changeTree, Bc, Vc, cB.it, cB.isEncodeAll, cB.hasView, cB.metadata))
    }

    function FV(cB, Bc) {
      const nc = new Uint8Array(cB.length + Bc.length);
      return nc.set(cB, 0), nc.set(Bc, cB.length), nc
    }
    class JV {
      static BUFFER_SIZE = 16384;
      sharedBuffer = new Uint8Array(JV.BUFFER_SIZE);
      context;
      state;
      root;
      constructor(cB, Bc) {
        this.context = kn.cache(cB.constructor), this.root = Bc ?? new CV(this.context), this.setState(cB)
      }
      setState(cB) {
        this.state = cB, this.state[ec].setRoot(this.root)
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
        let cB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
            offset: 0
          },
          Bc = arguments.length > 1 ? arguments[1] : void 0,
          nc = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : this.sharedBuffer,
          Vc = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : cB.offset;
        return this._encodeChannel(cB, Bc, nc, Vc, !1)
      }
      encodeUnreliable() {
        let cB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
            offset: 0
          },
          Bc = arguments.length > 1 ? arguments[1] : void 0,
          nc = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : this.sharedBuffer,
          Vc = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : cB.offset;
        return this._encodeChannel(cB, Bc, nc, Vc, !0)
      }
      _encodeChannel(cB, Bc, nc, Vc, Ic) {
        this.root.pendingFilterRefresh.length > 0 && sn(this.root);
        const rB = void 0 !== Bc,
          uc = this.state[ec],
          sc = this._encodeCtx;
        sc.self = this, sc.buffer = nc, sc.it = cB, sc.view = Bc, sc.isEncodeAll = !1, sc.hasView = rB, sc.emitFiltered = rB;
        let Mc = Ic ? this.root.unreliableChanges : this.root.changes;
        for (; Mc = Mc.next;) {
          const nc = Mc.changeTree;
          if (rB && !Bc.isChangeTreeVisible(nc)) continue;
          const Pc = Ic ? nc.unreliableRecorder : nc;
          if (!Pc || !Pc.has()) continue;
          const qB = nc.encDescriptor;
          sc.changeTree = nc, sc.ref = nc.ref, sc.encoder = qB.encoder, sc.filter = qB.filter, sc.metadata = qB.metadata, sc.treeIsFiltered = nc.isFiltered, sc.isSchema = qB.isSchema, sc.filterBitmask = qB.filterBitmask, sc.tags = qB.tags, sc.structSwitchEmitted = !1, sc.isRootTree = nc === uc, sc.shouldEmitSwitch = rB || cB.offset > Vc || !sc.isRootTree, Pc.forEachWithCtx(sc, HV)
        }
        return Ic || rB || !this._isStreamBroadcastMode || this._emitStreamBroadcast(nc, cB), cB.offset > nc.byteLength ? (nc = this._resizeBuffer(nc, cB.offset), cB.offset = Vc, this._encodeChannel(cB, Bc, nc, Vc, Ic)) : nc.subarray(0, cB.offset)
      }
      encodeFullSync(cB, Bc, nc, Vc) {
        let Ic = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : cB.offset;
        this.root.pendingFilterRefresh.length > 0 && sn(this.root);
        const rB = void 0 !== Vc,
          uc = this.state[ec],
          sc = this._encodeCtx;
        return sc.self = this, sc.buffer = Bc, sc.it = cB, sc.view = Vc, sc.isEncodeAll = !0, sc.hasView = rB, sc.emitFiltered = nc, sc.gen = ++this._fullSyncGen, sc.initialOffset = Ic, sc.rootChangeTree = uc, kI(sc, uc), cB.offset > Bc.byteLength ? (Bc = this._resizeBuffer(Bc, cB.offset), cB.offset = Ic, this.encodeFullSync(cB, Bc, nc, Vc, Ic)) : Bc.subarray(0, cB.offset)
      }
      _resizeBuffer(cB, Bc) {
        const nc = Math.ceil(Bc / JV.BUFFER_SIZE) * JV.BUFFER_SIZE,
          Vc = new Uint8Array(nc);
        return Vc.set(cB), cB === this.sharedBuffer && (this.sharedBuffer = Vc), Vc
      }
      encodeAll() {
        let cB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
            offset: 0
          },
          Bc = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.sharedBuffer;
        return this.encodeFullSync(cB, Bc, !1)
      }
      encodeAllView(cB, Bc, nc) {
        let Vc = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : this.sharedBuffer;
        const Ic = nc.offset;
        return Vc = this.encodeFullSync(nc, Vc, !0, cB, Ic), FV(Vc.subarray(0, Bc), Vc.subarray(Ic, nc.offset))
      }
      ensureCapacity(cB, Bc) {
        if (Bc + JV.BUFFER_SIZE <= cB.byteLength) return cB;
        const nc = Math.ceil((Bc + JV.BUFFER_SIZE) / JV.BUFFER_SIZE) * JV.BUFFER_SIZE,
          Vc = new Uint8Array(nc);
        return Vc.set(cB.subarray(0, Bc)), cB === this.sharedBuffer && (this.sharedBuffer = Vc), Vc
      }
      encodeView(cB, Bc, nc) {
        let Vc = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : this.sharedBuffer,
          rB = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4];
        const uc = nc.offset;
        this._emitStreamPriority(cB);
        for (const Mc of cB.changes.keys()) {
          const Bc = cB.changes.get(Mc),
            rB = this.root.changeTrees[Mc];
          if (void 0 === rB) {
            cB.changes.delete(Mc);
            continue
          }
          if (0 === Bc.size) continue;
          const uc = rB.encDescriptor,
            Pc = uc.encoder,
            qB = uc.metadata,
            Oc = rB.ref,
            fc = rB.refTarget;
          Vc = this.ensureCapacity(Vc, nc.offset), Vc[nc.offset++] = 255, BB.number(Vc, Oc[sc], nc);
          for (const [Mc, mB] of Bc) {
            let Bc;
            if (-1 === Mc) {
              const cB = fc.tmpItems,
                Bc = fc.deletedIndexes;
              for (let uc = 0; uc < cB.length; uc++) void 0 !== cB[uc] && !0 !== Bc[uc] && Pc(this, Vc, rB, uc, Ic.ADD, nc, !1, !0, qB);
              continue
            }
            if ("number" === typeof Mc) Bc = Mc;
            else {
              const nc = Mc.indexInParent(Oc);
              if (void 0 === nc) continue;
              if (Bc = nc, mB === Ic.ADD && rB.getChange(Bc) === Ic.DELETE) {
                cB.changes.delete(Mc.ref[sc]);
                continue
              }
            }
            Pc(this, Vc, rB, Bc, void 0 !== fc[Tc](Bc) && mB || Ic.DELETE, nc, !1, !0, qB)
          }
        }
        return cB.changes.clear(), Vc = this.encode(nc, cB, Vc), rB ? FV(Vc.subarray(0, Bc), Vc.subarray(uc, nc.offset)) : Vc.subarray(uc, nc.offset)
      }
      encodeUnreliableView(cB, Bc, nc) {
        let Vc = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : this.sharedBuffer;
        const Ic = nc.offset;
        return Vc = this.encodeUnreliable(nc, cB, Vc, Ic), FV(Vc.subarray(0, Bc), Vc.subarray(Ic, nc.offset))
      }
      _emitStreamBroadcast(cB, Bc) {
        const nc = this.root.streamTrees;
        for (const Vc of nc) {
          const nc = Vc,
            rB = nc[ec],
            uc = nc[sc];
          if (void 0 === uc) continue;
          const Mc = nc._stream,
            Pc = Mc.broadcastDeletes,
            qB = Mc.broadcastPending,
            Oc = Mc.sentBroadcast,
            fc = Pc.size > 0,
            mB = qB.size > 0,
            tB = rB.encDescriptor,
            Sc = tB.encoder,
            yB = tB.metadata;
          if (fc || mB) {
            if (cB[Bc.offset++] = 255, BB.number(cB, uc, Bc), fc) {
              for (const nc of Pc) Sc(this, cB, rB, nc, Ic.DELETE, Bc, !1, !1, yB);
              Pc.clear()
            }
            const Vc = Mc.maxPerTick,
              mB = [];
            let tB = 0;
            const zB = [];
            for (const uc of qB) {
              if (tB >= Vc) break;
              const sc = nc[Tc](uc);
              void 0 !== sc ? (Sc(this, cB, rB, uc, Ic.ADD, Bc, !1, !1, yB), Oc.add(uc), mB.push(sc), zB.push(uc), tB++) : zB.push(uc)
            }
            for (const cB of zB) qB.delete(cB);
            for (const nc of mB) {
              const Vc = nc[ec];
              if (void 0 === Vc) continue;
              const rB = nc[sc];
              if (void 0 === rB) continue;
              cB[Bc.offset++] = 255, BB.number(cB, rB, Bc);
              const uc = Vc.encDescriptor,
                Mc = uc.encoder,
                Pc = uc.metadata;
              Vc.forEachLive((nc => {
                KB.hasUnreliableAtIndex(Pc, nc) || Mc(this, cB, Vc, nc, Ic.ADD, Bc, !1, !1, Pc)
              }))
            }
          }
          for (const Vc of Oc) {
            const Ic = nc[Tc](Vc);
            if (void 0 === Ic) continue;
            const rB = Ic[ec];
            if (void 0 === rB || !rB.has()) continue;
            const uc = Ic[sc];
            if (void 0 === uc) continue;
            cB[Bc.offset++] = 255, BB.number(cB, uc, Bc);
            const Mc = rB.encDescriptor,
              Pc = Mc.encoder,
              qB = Mc.metadata;
            rB.forEach(((nc, Vc) => {
              nc < 0 || KB.hasUnreliableAtIndex(qB, nc) || Pc(this, cB, rB, nc, Vc, Bc, !1, !1, qB)
            }))
          }
        }
      }
      _emitStreamPriority(cB) {
        const Bc = this.root.streamTrees;
        if (0 === Bc.size) return;
        const nc = cB.id;
        for (const Vc of Bc) {
          const Bc = Vc,
            rB = Bc._stream,
            uc = rB.pendingByView.get(nc);
          if (void 0 === uc || 0 === uc.size) continue;
          const Mc = rB.priorityByView?.get(nc),
            Pc = void 0 !== Mc,
            qB = rB.priority,
            Oc = rB.maxPerTick,
            fc = [],
            mB = [];
          if (Pc || void 0 !== qB) {
            const nc = [],
              Vc = [];
            let Ic = 0;
            for (const rB of uc) {
              const uc = Bc[Tc](rB);
              if (void 0 === uc) {
                mB.push(rB);
                continue
              }
              const sc = Pc ? Mc(uc) : qB(cB, uc);
              if (Ic < Oc) {
                let cB = Ic++;
                for (; cB > 0 && Vc[cB - 1] < sc;) Vc[cB] = Vc[cB - 1], nc[cB] = nc[cB - 1], cB--;
                Vc[cB] = sc, nc[cB] = rB
              } else if (sc > Vc[Oc - 1]) {
                let cB = Oc - 1;
                for (; cB > 0 && Vc[cB - 1] < sc;) Vc[cB] = Vc[cB - 1], nc[cB] = nc[cB - 1], cB--;
                Vc[cB] = sc, nc[cB] = rB
              }
            }
            for (let cB = 0; cB < Ic; cB++) fc.push(nc[cB])
          } else
            for (const cB of uc) {
              if (fc.length >= Oc) break;
              fc.push(cB)
            }
          for (const cB of mB) uc.delete(cB);
          const tB = fc.length;
          let Sc = rB.sentByView.get(nc);
          void 0 === Sc && (Sc = new Set, rB.sentByView.set(nc, Sc));
          for (let nc = 0; nc < tB; nc++) {
            const Vc = fc[nc],
              rB = Bc[Tc](Vc);
            if (void 0 === rB) {
              uc.delete(Vc);
              continue
            }
            cB._addImmediate(rB);
            const Mc = rB[ec];
            if (void 0 !== Mc) {
              const Bc = rB[sc];
              let nc = cB.changes.get(Bc);
              void 0 === nc && (nc = new Map, cB.changes.set(Bc, nc));
              const Vc = Mc.metadata;
              Mc.forEachLive((cB => {
                KB.hasUnreliableAtIndex(Vc, cB) || nc.set(cB, Ic.ADD)
              }))
            }
            uc.delete(Vc), Sc.add(Vc)
          }
        }
      }
      discardChanges() {
        const cB = this.root.changes;
        let Bc = cB.next;
        const nc = this.root;
        for (; Bc;) {
          const cB = Bc.next;
          Bc.changeTree.endEncode(), nc.releaseNode(Bc), Bc = cB
        }
        cB.next = void 0, cB.tail = void 0
      }
      discardUnreliableChanges() {
        const cB = this.root.unreliableChanges;
        let Bc = cB.next;
        const nc = this.root;
        for (; Bc;) {
          const cB = Bc.next;
          Bc.changeTree.endEncodeUnreliable(), nc.releaseNode(Bc), Bc = cB
        }
        cB.next = void 0, cB.tail = void 0
      }
      tryEncodeTypeId(cB, Bc, nc, Vc) {
        const Ic = this.context.getTypeId(Bc),
          rB = this.context.getTypeId(nc);
        void 0 !== rB ? Ic !== rB && (cB[Vc.offset++] = 213, BB.number(cB, rB, Vc)) : console.warn(`@colyseus/schema WARNING: Class "${nc.name}" is not registered on TypeRegistry - Please either tag the class with @entity or define a @type() field.`)
      }
      get hasChanges() {
        return void 0 !== this.root.changes.next || this._hasStreamBacklog()
      }
      get _isStreamBroadcastMode() {
        return 0 === this.root.activeViews.size && this.root.streamTrees.size > 0
      }
      _hasStreamBacklog() {
        const cB = this.root;
        if (0 === cB.streamTrees.size) return !1;
        const Bc = 0 === cB.activeViews.size;
        for (const nc of cB.streamTrees)
          if (Bc ? QB(nc) : ZB(nc, cB)) return !0;
        return !1
      }
      get hasUnreliableChanges() {
        return void 0 !== this.root.unreliableChanges.next
      }
    }
    class jI extends Error {
      constructor(cB) {
        super(cB), this.name = "DecodingWarning"
      }
    }
    const RV = {
      value: 0,
      enumerable: !1,
      writable: !0
    };
    class iI {
      refs = new Map;
      refCount = {};
      deletedRefs = new Set;
      callbacks = {};
      nextUniqueId = 0;
      getNextUniqueId() {
        return this.nextUniqueId++
      }
      addRef(cB, Bc) {
        let nc = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        this.refs.set(cB, Bc), void 0 === Bc[sc] ? (RV.value = cB, Object.defineProperty(Bc, sc, RV)) : Bc[sc] !== cB && (Bc[sc] = cB), nc && (this.refCount[cB] = (this.refCount[cB] || 0) + 1), this.deletedRefs.has(cB) && this.deletedRefs.delete(cB)
      }
      removeRef(cB) {
        const Bc = this.refCount[cB];
        if (void 0 !== Bc)
          if (0 !== Bc)(this.refCount[cB] = Bc - 1) <= 0 && this.deletedRefs.add(cB);
          else try {
            const Bc = this.refs.get(cB);
            throw new jI(`trying to remove refId '${cB}' with 0 refCount (${Bc.constructor.name}: ${JSON.stringify(Bc)})`)
          } catch (uI) {
            console.warn(uI)
          } else try {
            throw new jI("trying to remove refId that doesn't exist: " + cB)
          } catch (uI) {
            console.warn(uI)
          }
      }
      clearRefs() {
        this.refs.clear(), this.deletedRefs.clear(), this.callbacks = {}, this.refCount = {}
      }
      garbageCollectDeletedRefs() {
        this.deletedRefs.forEach((cB => {
          if (this.refCount[cB] > 0) return;
          const Bc = this.refs.get(cB),
            nc = Bc.constructor[Symbol.metadata];
          if (null != nc)
            for (const Vc in nc) {
              const cB = Bc[nc[Vc].name];
              if ("object" === typeof cB && cB) {
                const Bc = cB[sc];
                void 0 === Bc || this.deletedRefs.has(Bc) || this.removeRef(Bc)
              }
            } else "function" === typeof Bc[tB] && Array.from(Bc.values()).forEach((cB => {
              const Bc = cB[sc];
              void 0 === Bc || this.deletedRefs.has(Bc) || this.removeRef(Bc)
            }));
          this.refs.delete(cB), delete this.refCount[cB], delete this.callbacks[cB]
        })), this.deletedRefs.clear()
      }
      addCallback(cB, Bc, nc) {
        if (void 0 === cB) {
          const cB = "number" === typeof Bc ? Ic[Bc] : Bc;
          throw new Error(`Can't addCallback on '${cB}' (refId is undefined)`)
        }
        return this.callbacks[cB] || (this.callbacks[cB] = {}), this.callbacks[cB][Bc] || (this.callbacks[cB][Bc] = []), this.callbacks[cB][Bc].push(nc), () => this.removeCallback(cB, Bc, nc)
      }
      removeCallback(cB, Bc, nc) {
        const Vc = this.callbacks?.[cB]?.[Bc]?.indexOf(nc);
        void 0 !== Vc && -1 !== Vc && vI(this.callbacks[cB][Bc], Vc)
      }
    }
    class KV {
      context;
      state;
      root;
      currentRefId = 0;
      NBc;
      resyncVisited = null;
      resyncDamaged = !1;
      constructor(cB, Bc) {
        this.setState(cB), this.context = Bc || new kn(cB.constructor)
      }
      setState(cB) {
        this.state = cB, this.root = new iI, this.root.addRef(0, cB)
      }
      decode(cB) {
        let Bc = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
            offset: 0
          },
          nc = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : this.state;
        const Ic = void 0 !== this.NBc ? [] : null,
          rB = this.root,
          uc = cB.byteLength;
        let sc = nc.constructor[qB];
        for (this.currentRefId = 0; Bc.offset < uc;) {
          if (cB[Bc.offset] == Vc) {
            Bc.offset++, nc[pc]?.();
            const Vc = zn.number(cB, Bc),
              Ic = rB.refs.get(Vc);
            Ic ? (nc = Ic, sc = nc.constructor[qB], this.currentRefId = Vc) : (console.error(`"refId" not found: ${Vc}`, {
              previousRef: nc,
              previousRefId: this.currentRefId
            }), console.warn("Please report this issue to the developers."), this.skipCurrentStructure(cB, Bc, uc));
            continue
          } - 1 !== sc(this, cB, Bc, nc, Ic) || (console.warn("@colyseus/schema: definition mismatch"), this.skipCurrentStructure(cB, Bc, uc))
        }
        return nc[pc]?.(), null !== this.resyncVisited && function(cB, Bc) {
          cB.resyncDamaged ? console.warn("@colyseus/schema: resync sweep skipped \u2014 parts of the payload could not be decoded. Stale entries may persist until the next resync.") : Xn(cB, cB.state, new Set, Bc)
        }(this, Ic), null !== Ic && this.NBc?.(Ic), rB.garbageCollectDeletedRefs(), Ic
      }
      decodeResync(cB) {
        let Bc = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
          offset: 0
        };
        this.resyncVisited = new Map, this.resyncDamaged = !1;
        try {
          return this.decode(cB, Bc)
        } finally {
          this.resyncVisited = null
        }
      }
      skipCurrentStructure(cB, Bc, nc) {
        null !== this.resyncVisited && (this.resyncDamaged = !0);
        const Ic = {
          offset: Bc.offset
        };
        for (; Bc.offset < nc && (cB[Bc.offset] !== Vc || (Ic.offset = Bc.offset + 1, !this.root.refs.has(zn.number(cB, Ic))));) Bc.offset++
      }
      getInstanceType(cB, Bc, nc) {
        let Vc;
        if (213 === cB[Bc.offset]) {
          Bc.offset++;
          const nc = zn.number(cB, Bc);
          Vc = this.context.get(nc)
        }
        return Vc || nc
      }
      createInstanceOfType(cB) {
        return cB.initializeForDecoder()
      }
      removeChildRefs(cB, Bc) {
        const nc = "string" !== typeof cB[tB],
          Vc = cB[sc];
        cB.forEach(((rB, uc) => {
          Bc?.push({
            ref: cB,
            refId: Vc,
            op: Ic.DELETE,
            field: uc,
            value: void 0,
            previousValue: rB
          }), nc && this.root.removeRef(rB[sc])
        }))
      }
    }
    const xI = UV({
        min: mI.float64(),
        max: mI.float64(),
        bits: mI.uint8(),
        mode: mI.uint8()
      }, "QuantizedDescriptor"),
      dV = UV({
        name: mI.string(),
        type: mI.string(),
        referencedType: mI.number(),
        childPrimitive: mI.string(),
        quantized: mI.ref(xI).optional()
      }, "ReflectionField"),
      AV = UV({
        id: mI.number(),
        extendsId: mI.number(),
        fields: mI.array(dV)
      }, "ReflectionType"),
      GV = UV({
        types: mI.array(AV),
        rootType: mI.number()
      }, "Reflection");

    function cr(cB) {
      const Bc = cB.root,
        nc = Bc.callbacks,
        Vc = new WeakMap;
      let rB;

      function uc(cB, nc) {
        let Pc = nc.instance?.constructor[Symbol.metadata] || cB,
          qB = nc.instance && "function" === typeof nc.instance.forEach || cB && !ZV.is(cB);
        if (Pc && !qB) {
          const cB = function(cB, Ic, uc, Mc) {
            return Mc && void 0 !== nc.instance[Ic] && !Vc.has(rB) && uc(nc.instance[Ic], void 0), Bc.addCallback(cB[sc], Ic, uc)
          };
          return new Proxy({
            listen: function(Bc, Ic) {
              let uc = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
              if (nc.instance) return cB(nc.instance, Bc, Ic, uc);
              {
                let sc = () => {};
                return nc.onInstanceAvailable(((nc, Mc) => {
                  sc = cB(nc, Bc, Ic, uc && Mc && !Vc.has(rB))
                })), () => sc()
              }
            },
            onChange: function(cB) {
              return Bc.addCallback(nc.instance[sc], Ic.REPLACE, cB)
            },
            bindTo: function(cB, Vc) {
              return Vc || (Vc = Object.keys(Pc).map((cB => Pc[cB].name))), Bc.addCallback(nc.instance[sc], Ic.REPLACE, (() => {
                Vc.forEach((Bc => cB[Bc] = nc.instance[Bc]))
              }))
            }
          }, {
            get(cB, Bc) {
              const Vc = Pc[Pc[Bc]];
              if (Vc) {
                const cB = nc.instance?.[Bc],
                  Ic = Vc => {
                    const Ic = Mc(nc.instance).listen(Bc, ((cB, Bc) => {
                      Vc(cB, !1), Ic?.()
                    }), !1);
                    void 0 !== cB?.[sc] && Vc(cB, !0)
                  };
                return uc(Vc.type, {
                  instance: void 0 !== cB?.[sc] && cB,
                  parentInstance: nc.instance,
                  onInstanceAvailable: Ic
                })
              }
              return cB[Bc]
            },
            has: (cB, Bc) => void 0 !== Pc[Bc],
            set(cB, Bc, nc) {
              throw new Error("not allowed")
            },
            deleteProperty(cB, Bc) {
              throw new Error("not allowed")
            }
          })
        } {
          const cB = function(cB, nc, uc) {
              return uc && cB.forEach(((cB, Bc) => nc(cB, Bc))), Bc.addCallback(cB[sc], Ic.ADD, ((cB, Bc) => {
                Vc.set(nc, !0), rB = nc, nc(cB, Bc), Vc.delete(nc), rB = void 0
              }))
            },
            uc = function(cB, nc) {
              return Bc.addCallback(cB[sc], Ic.DELETE, nc)
            },
            Mc = function(cB, nc) {
              return Bc.addCallback(cB[sc], Ic.REPLACE, nc)
            };
          return new Proxy({
            FQ: function(Bc) {
              let Ic = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
              if (nc.instance) return cB(nc.instance, Bc, Ic && !Vc.has(rB));
              if (nc.onInstanceAvailable) {
                let uc = () => {};
                return nc.onInstanceAvailable(((nc, sc) => {
                  uc = cB(nc, Bc, Ic && sc && !Vc.has(rB))
                })), () => uc()
              }
            },
            YBc: function(cB) {
              if (nc.instance) return uc(nc.instance, cB);
              if (nc.onInstanceAvailable) {
                let Bc = () => {};
                return nc.onInstanceAvailable((nc => {
                  Bc = uc(nc, cB)
                })), () => Bc()
              }
            },
            onChange: function(cB) {
              if (nc.instance) return Mc(nc.instance, cB);
              if (nc.onInstanceAvailable) {
                let Bc = () => {};
                return nc.onInstanceAvailable((nc => {
                  Bc = Mc(nc, cB)
                })), () => Bc()
              }
            }
          }, {
            get(cB, Bc) {
              if (!cB[Bc]) throw new Error(`Can't access '${Bc}' through callback proxy. access the instance directly.`);
              return cB[Bc]
            },
            has: (cB, Bc) => void 0 !== cB[Bc],
            set(cB, Bc, nc) {
              throw new Error("not allowed")
            },
            deleteProperty(cB, Bc) {
              throw new Error("not allowed")
            }
          })
        }
      }

      function Mc(cB) {
        return uc(void 0, {
          instance: cB
        })
      }
      return cB.NBc = function(cB) {
        const Bc = new Set;
        for (let Vc = 0, rB = cB.length; Vc < rB; Vc++) {
          const rB = cB[Vc],
            uc = rB.refId,
            Mc = rB.ref,
            Pc = nc[uc];
          if (Pc) {
            if ((rB.op & Ic.DELETE) === Ic.DELETE && ZV.isSchema(rB.previousValue)) {
              const cB = nc[rB.previousValue[sc]]?.[Ic.DELETE];
              for (let Bc = cB?.length - 1; Bc >= 0; Bc--) cB[Bc]()
            }
            if (ZV.isSchema(Mc)) {
              if (!Bc.has(uc)) {
                const cB = Pc?.[Ic.REPLACE];
                for (let Bc = cB?.length - 1; Bc >= 0; Bc--) cB[Bc]()
              }
              if (Pc.hasOwnProperty(rB.field)) {
                const cB = Pc[rB.field];
                for (let Bc = cB?.length - 1; Bc >= 0; Bc--) cB[Bc](rB.value, rB.previousValue)
              }
            } else {
              if ((rB.op & Ic.DELETE) === Ic.DELETE) {
                if (void 0 !== rB.previousValue) {
                  const cB = Pc[Ic.DELETE];
                  for (let Bc = cB?.length - 1; Bc >= 0; Bc--) cB[Bc](rB.previousValue, rB.dynamicIndex ?? rB.field)
                }
                if ((rB.op & Ic.ADD) === Ic.ADD) {
                  const cB = Pc[Ic.ADD];
                  for (let Bc = cB?.length - 1; Bc >= 0; Bc--) cB[Bc](rB.value, rB.dynamicIndex ?? rB.field)
                }
              } else if ((rB.op & Ic.ADD) === Ic.ADD && rB.previousValue !== rB.value) {
                const cB = Pc[Ic.ADD];
                for (let Bc = cB?.length - 1; Bc >= 0; Bc--) cB[Bc](rB.value, rB.dynamicIndex ?? rB.field)
              }
              if (rB.value !== rB.previousValue && (void 0 !== rB.value || void 0 !== rB.previousValue)) {
                const cB = Pc[Ic.REPLACE];
                for (let Bc = cB?.length - 1; Bc >= 0; Bc--) cB[Bc](rB.value, rB.dynamicIndex ?? rB.field)
              }
            }
            Bc.add(uc)
          }
        }
      }, Mc
    }

    function BI(cB, Bc) {
      cB.NBc = Bc
    }
    GV.encode = function(cB) {
      let Bc = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
        offset: 0
      };
      const nc = cB.context,
        Vc = new GV,
        Ic = new JV(Vc),
        rB = nc.schemas.get(cB.state.constructor);
      rB > 0 && (Vc.rootType = rB);
      const uc = new Set,
        sc = {},
        Mc = cB => {
          if (void 0 === cB.extendsId || uc.has(cB.extendsId)) {
            uc.add(cB.id), Vc.types.push(cB);
            const Bc = sc[cB.id];
            void 0 !== Bc && (delete sc[cB.id], Bc.forEach((cB => Mc(cB))))
          } else void 0 === sc[cB.extendsId] && (sc[cB.extendsId] = []), sc[cB.extendsId].push(cB)
        };
      nc.schemas.forEach(((cB, Bc) => {
        const Vc = new AV;
        Vc.id = Number(cB);
        const Ic = Object.getPrototypeOf(Bc);
        Ic !== ZV && (Vc.extendsId = nc.schemas.get(Ic));
        const rB = Bc[Symbol.metadata];
        if (rB !== Ic[Symbol.metadata]) {
          const cB = rB[gB] ?? -1;
          for (let Bc = 0; Bc <= cB; Bc++) {
            const cB = rB[Bc];
            if (void 0 === cB) continue;
            const Ic = cB.name;
            if (!Object.prototype.hasOwnProperty.call(rB, Ic)) continue;
            const uc = new dV;
            let sc;
            if (uc.name = Ic, "string" === typeof cB.type) sc = cB.type;
            else if (EB(cB.type)) {
              const Bc = cB.type.quantized;
              sc = "quantized";
              const nc = new xI;
              nc.min = Bc.min, nc.max = Bc.max, nc.bits = Bc.bits, nc.mode = Bc.wrap ? 1 : 0, uc.quantized = nc
            } else {
              let Bc;
              ZV.is(cB.type) ? (sc = "ref", Bc = cB.type) : (sc = Object.keys(cB.type)[0], "string" === typeof cB.type[sc] ? uc.childPrimitive = cB.type[sc] : Bc = cB.type[sc]), uc.referencedType = Bc ? nc.getTypeId(Bc) : -1
            }
            uc.type = sc, Vc.fields.push(uc)
          }
        }
        Mc(Vc)
      }));
      for (const Pc in sc) sc[Pc].forEach((cB => Vc.types.push(cB)));
      return Ic.encodeAll(Bc).slice(0, Bc.offset)
    }, GV.decode = function(cB, Bc) {
      const nc = new GV;
      new KV(nc).decode(cB, Bc);
      const Vc = new kn;
      nc.types.forEach((cB => {
        const Bc = Vc.get(cB.extendsId) ?? ZV,
          nc = class extends Bc {};
        kn.register(nc), Vc.add(nc, cB.id)
      }), {});
      nc.types.forEach((cB => {
        const Bc = Vc.get(cB.id),
          Ic = KB.initialize(Bc),
          rB = [];
        let uc = cB;
        do {
          rB.push(uc), uc = nc.types.find((cB => cB.id === uc.extendsId))
        } while (uc);
        let sc = 0;
        rB.reverse().forEach((cB => {
          ((cB, Bc, nc) => {
            Bc.fields.forEach(((Bc, Ic) => {
              const rB = nc + Ic;
              if (void 0 !== Bc.quantized) {
                const nc = Bc.quantized;
                KB.addField(cB, rB, Bc.name, {
                  quantized: NB({
                    min: nc.min,
                    max: nc.max,
                    bits: nc.bits,
                    mode: 1 === nc.mode ? "wrap" : "clamp"
                  })
                })
              } else if (void 0 !== Bc.referencedType) {
                const nc = Bc.type,
                  Ic = Vc.get(Bc.referencedType) ?? Bc.childPrimitive;
                "ref" === nc ? KB.addField(cB, rB, Bc.name, Ic) : KB.addField(cB, rB, Bc.name, {
                  [nc]: Ic
                })
              } else KB.addField(cB, rB, Bc.name, Bc.type)
            }))
          })(Ic, cB, sc), sc += cB.fields.length
        }))
      }));
      const Ic = new(Vc.get(nc.rootType || 0));
      return new KV(Ic, Vc)
    }, GV.makeEncodable = function(cB) {
      const Bc = cB[Symbol.metadata];
      if (!Bc) return cB;
      const nc = Bc[gB];
      if (void 0 === nc) return cB;
      for (let Vc = 0; Vc <= nc; Vc++) {
        const nc = Bc[Vc];
        nc && KB.defineField(cB, Bc, Vc, nc.name, nc.type)
      }
      return Object.prototype.hasOwnProperty.call(cB, Yc) && delete cB[Yc], cB
    };
    class nI {
      an;
      uniqueRefIds = new Set;
      isTriggering = !1;
      constructor(cB) {
        this.an = cB, this.an.NBc = this.NBc.bind(this)
      }
      get callbacks() {
        return this.an.root.callbacks
      }
      get state() {
        return this.an.state
      }
      addCallback(cB, Bc, nc) {
        return this.an.root.addCallback(cB, Bc, nc)
      }
      addCallbackOrWaitCollectionAvailable(cB, Bc, nc, Vc) {
        let rB = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4],
          uc = () => {};
        const Mc = () => uc(),
          Pc = cB[Bc];
        if (Pc && void 0 !== Pc[sc]) return rB = rB && !1 === this.isTriggering, nc === Ic.ADD && rB && Pc.forEach(((cB, Bc) => {
          Vc(cB, Bc)
        })), this.addCallback(Pc[sc], nc, Vc);
        {
          let Ic;
          return Ic = this.addCallback(cB[sc], Bc, ((cB, Bc) => {
            null !== cB && void 0 !== cB && (Ic(), uc = this.addCallback(cB[sc], nc, Vc))
          })), uc = Ic, Mc
        }
      }
      listen() {
        return "string" === typeof(arguments.length <= 0 ? void 0 : arguments[0]) ? this.listenInstance(this.state, arguments.length <= 0 ? void 0 : arguments[0], arguments.length <= 1 ? void 0 : arguments[1], arguments.length <= 2 ? void 0 : arguments[2]) : this.listenInstance(arguments.length <= 0 ? void 0 : arguments[0], arguments.length <= 1 ? void 0 : arguments[1], arguments.length <= 2 ? void 0 : arguments[2], arguments.length <= 3 ? void 0 : arguments[3])
      }
      listenInstance(cB, Bc, nc) {
        let Vc = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
        Vc = Vc && !1 === this.isTriggering;
        const Ic = cB[Bc];
        return Vc && null !== Ic && void 0 !== Ic && nc(Ic, void 0), this.addCallback(cB[sc], Bc, nc)
      }
      onChange() {
        if (2 === arguments.length && "string" !== typeof(arguments.length <= 0 ? void 0 : arguments[0])) {
          const cB = arguments.length <= 0 ? void 0 : arguments[0],
            Bc = arguments.length <= 1 ? void 0 : arguments[1];
          return this.addCallback(cB[sc], Ic.REPLACE, Bc)
        }
        return "string" === typeof(arguments.length <= 0 ? void 0 : arguments[0]) ? this.addCallbackOrWaitCollectionAvailable(this.state, arguments.length <= 0 ? void 0 : arguments[0], Ic.REPLACE, arguments.length <= 1 ? void 0 : arguments[1]) : this.addCallbackOrWaitCollectionAvailable(arguments.length <= 0 ? void 0 : arguments[0], arguments.length <= 1 ? void 0 : arguments[1], Ic.REPLACE, arguments.length <= 2 ? void 0 : arguments[2])
      }
      FQ() {
        return "string" === typeof(arguments.length <= 0 ? void 0 : arguments[0]) ? this.addCallbackOrWaitCollectionAvailable(this.state, arguments.length <= 0 ? void 0 : arguments[0], Ic.ADD, arguments.length <= 1 ? void 0 : arguments[1], !1 !== (arguments.length <= 2 ? void 0 : arguments[2])) : this.addCallbackOrWaitCollectionAvailable(arguments.length <= 0 ? void 0 : arguments[0], arguments.length <= 1 ? void 0 : arguments[1], Ic.ADD, arguments.length <= 2 ? void 0 : arguments[2], !1 !== (arguments.length <= 3 ? void 0 : arguments[3]))
      }
      YBc() {
        return "string" === typeof(arguments.length <= 0 ? void 0 : arguments[0]) ? this.addCallbackOrWaitCollectionAvailable(this.state, arguments.length <= 0 ? void 0 : arguments[0], Ic.DELETE, arguments.length <= 1 ? void 0 : arguments[1]) : this.addCallbackOrWaitCollectionAvailable(arguments.length <= 0 ? void 0 : arguments[0], arguments.length <= 1 ? void 0 : arguments[1], Ic.DELETE, arguments.length <= 2 ? void 0 : arguments[2])
      }
      bindTo(cB, Bc, nc) {
        let Vc = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
        const rB = cB.constructor[Symbol.metadata];
        nc || (nc = Object.keys(rB).filter((cB => !isNaN(Number(cB)))).map((cB => rB[cB].name)));
        const uc = () => {
          for (const Vc of nc) {
            const nc = cB[Vc];
            void 0 !== nc && (Bc[Vc] = nc)
          }
        };
        return Vc && uc(), this.addCallback(cB[sc], Ic.REPLACE, uc)
      }
      NBc(cB) {
        this.uniqueRefIds.clear(), this.isTriggering = !0;
        for (let Bc = 0, nc = cB.length; Bc < nc; Bc++) {
          const nc = cB[Bc],
            Vc = nc.refId,
            rB = nc.ref,
            uc = this.callbacks[Vc];
          if (uc) {
            if ((nc.op & Ic.DELETE) === Ic.DELETE && ZV.isSchema(nc.previousValue)) {
              const cB = nc.previousValue[sc],
                Bc = this.callbacks[cB]?.[Ic.DELETE];
              if (Bc)
                for (let nc = Bc.length - 1; nc >= 0; nc--) try {
                  Bc[nc]()
                } catch (uI) {
                  console.error(uI)
                }
            }
            if (ZV.isSchema(rB)) {
              if (!this.uniqueRefIds.has(Vc)) {
                const cB = uc[Ic.REPLACE];
                if (cB)
                  for (let Bc = cB.length - 1; Bc >= 0; Bc--) try {
                    cB[Bc]()
                  } catch (uI) {
                    console.error(uI)
                  }
              }
              const cB = uc[nc.field];
              if (cB)
                for (let Bc = cB.length - 1; Bc >= 0; Bc--) try {
                  cB[Bc](nc.value, nc.previousValue)
                } catch (uI) {
                  console.error(uI)
                }
            } else {
              const cB = nc.dynamicIndex ?? nc.field;
              if ((nc.op & Ic.DELETE) === Ic.DELETE) {
                if (void 0 !== nc.previousValue) {
                  const Bc = uc[Ic.DELETE];
                  if (Bc)
                    for (let Vc = Bc.length - 1; Vc >= 0; Vc--) try {
                      Bc[Vc](nc.previousValue, cB)
                    } catch (uI) {
                      console.error(uI)
                    }
                }
                if ((nc.op & Ic.ADD) === Ic.ADD) {
                  const Bc = uc[Ic.ADD];
                  if (Bc)
                    for (let Vc = Bc.length - 1; Vc >= 0; Vc--) try {
                      Bc[Vc](nc.value, cB)
                    } catch (uI) {
                      console.error(uI)
                    }
                }
              } else if ((nc.op & Ic.ADD) === Ic.ADD && nc.previousValue !== nc.value) {
                const Bc = uc[Ic.ADD];
                if (Bc)
                  for (let Vc = Bc.length - 1; Vc >= 0; Vc--) try {
                    Bc[Vc](nc.value, cB)
                  } catch (uI) {
                    console.error(uI)
                  }
              }
              if (nc.value !== nc.previousValue) {
                const Bc = uc[Ic.REPLACE];
                if (Bc)
                  for (let Vc = Bc.length - 1; Vc >= 0; Vc--) try {
                    Bc[Vc](cB, nc.value)
                  } catch (uI) {
                    console.error(uI)
                  }
              }
            }
            this.uniqueRefIds.add(Vc)
          }
        }
        this.isTriggering = !1
      }
    }
    const VI = {
      get(cB) {
        if (cB instanceof KV) return new nI(cB);
        if ("an" in cB.hq) return new nI(cB.hq.an);
        throw new Error("Invalid room or decoder")
      },
      getLegacy(cB) {
        if (cB instanceof KV) return cr(cB);
        if ("an" in cB.hq) return cr(cB.hq.an);
        throw new Error("Invalid room or decoder")
      },
      getRawChanges: (cB, Bc) => BI(cB, Bc)
    };
    class II {
      _free = [];
      _factory;
      _maxSize;
      constructor(cB) {
        let Bc = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        this._factory = cB, this._maxSize = Bc.maxSize ?? 1 / 0;
        const nc = Bc.preallocate ?? 0;
        for (let Vc = 0; Vc < nc; Vc++) this._free.push(cB())
      }
      acquire() {
        return this._free.length > 0 ? this._free.pop() : this._factory()
      }
      release(cB) {
        ZV.reset(cB), this._free.length < this._maxSize && this._free.push(cB)
      }
      get size() {
        return this._free.length
      }
    }

    function rr(cB) {
      return new II((() => new cB), arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {})
    }
    an("map", {
      constructor: rI
    }), an("array", {
      constructor: VV
    }), an("set", {
      constructor: sV
    }), an("collection", {
      constructor: uV
    })
  },
  7982: (cB, Bc, nc) => {
    nc.r(Bc), nc.d(Bc, {
      __addDisposableResource: () => Ec,
      __assign: () => rB,
      __asyncDelegator: () => Lc,
      __asyncGenerator: () => Yc,
      __asyncValues: () => gB,
      __await: () => lc,
      __awaiter: () => mB,
      __classPrivateFieldGet: () => vB,
      __classPrivateFieldIn: () => Nc,
      __classPrivateFieldSet: () => Dc,
      __createBinding: () => tB,
      __decorate: () => sc,
      __disposeResources: () => Wc,
      __esDecorate: () => Pc,
      __exportStar: () => Sc,
      __extends: () => Ic,
      __generator: () => ec,
      __importDefault: () => Cc,
      __importStar: () => Qc,
      __makeTemplateObject: () => Uc,
      __metadata: () => fc,
      __param: () => Mc,
      __propKey: () => Oc,
      __read: () => zB,
      __rest: () => uc,
      __rewriteRelativeImportExtension: () => wc,
      __runInitializers: () => qB,
      __setFunctionName: () => Tc,
      __spread: () => pc,
      __spreadArray: () => aB,
      __spreadArrays: () => hc,
      __values: () => yB,
      default: () => kB
    });
    var Vc = function(cB, Bc) {
      return Vc = Object.setPrototypeOf || {
        __proto__: []
      }
      instanceof Array && function(cB, Bc) {
        cB.__proto__ = Bc
      } || function(cB, Bc) {
        for (var nc in Bc) Object.prototype.hasOwnProperty.call(Bc, nc) && (cB[nc] = Bc[nc])
      }, Vc(cB, Bc)
    };

    function Ic(cB, Bc) {
      if ("function" !== typeof Bc && null !== Bc) throw new TypeError("Class extends value " + String(Bc) + " is not a constructor or null");

      function nc() {
        this.constructor = cB
      }
      Vc(cB, Bc), cB.prototype = null === Bc ? Object.create(Bc) : (nc.prototype = Bc.prototype, new nc)
    }
    var rB = function() {
      return rB = Object.assign || function(cB) {
        for (var Bc, nc = 1, Vc = arguments.length; nc < Vc; nc++)
          for (var Ic in Bc = arguments[nc]) Object.prototype.hasOwnProperty.call(Bc, Ic) && (cB[Ic] = Bc[Ic]);
        return cB
      }, rB.apply(this, arguments)
    };

    function uc(cB, Bc) {
      var nc = {};
      for (var Vc in cB) Object.prototype.hasOwnProperty.call(cB, Vc) && Bc.indexOf(Vc) < 0 && (nc[Vc] = cB[Vc]);
      if (null != cB && "function" === typeof Object.getOwnPropertySymbols) {
        var Ic = 0;
        for (Vc = Object.getOwnPropertySymbols(cB); Ic < Vc.length; Ic++) Bc.indexOf(Vc[Ic]) < 0 && Object.prototype.propertyIsEnumerable.call(cB, Vc[Ic]) && (nc[Vc[Ic]] = cB[Vc[Ic]])
      }
      return nc
    }

    function sc(cB, Bc, nc, Vc) {
      var Ic, rB = arguments.length,
        uc = rB < 3 ? Bc : null === Vc ? Vc = Object.getOwnPropertyDescriptor(Bc, nc) : Vc;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) uc = Reflect.decorate(cB, Bc, nc, Vc);
      else
        for (var sc = cB.length - 1; sc >= 0; sc--)(Ic = cB[sc]) && (uc = (rB < 3 ? Ic(uc) : rB > 3 ? Ic(Bc, nc, uc) : Ic(Bc, nc)) || uc);
      return rB > 3 && uc && Object.defineProperty(Bc, nc, uc), uc
    }

    function Mc(cB, Bc) {
      return function(nc, Vc) {
        Bc(nc, Vc, cB)
      }
    }

    function Pc(cB, Bc, nc, Vc, Ic, rB) {
      function uc(cB) {
        if (void 0 !== cB && "function" !== typeof cB) throw new TypeError("Function expected");
        return cB
      }
      for (var sc, Mc = Vc.kind, Pc = "getter" === Mc ? "get" : "setter" === Mc ? "set" : "value", qB = !Bc && cB ? Vc.static ? cB : cB.prototype : null, Oc = Bc || (qB ? Object.getOwnPropertyDescriptor(qB, Vc.name) : {}), Tc = !1, fc = nc.length - 1; fc >= 0; fc--) {
        var mB = {};
        for (var ec in Vc) mB[ec] = "access" === ec ? {} : Vc[ec];
        for (var ec in Vc.access) mB.access[ec] = Vc.access[ec];
        mB.addInitializer = function(cB) {
          if (Tc) throw new TypeError("Cannot add initializers after decoration has completed");
          rB.push(uc(cB || null))
        };
        var tB = (0, nc[fc])("accessor" === Mc ? {
          get: Oc.get,
          set: Oc.set
        } : Oc[Pc], mB);
        if ("accessor" === Mc) {
          if (void 0 === tB) continue;
          if (null === tB || "object" !== typeof tB) throw new TypeError("Object expected");
          (sc = uc(tB.get)) && (Oc.get = sc), (sc = uc(tB.set)) && (Oc.set = sc), (sc = uc(tB.init)) && Ic.unshift(sc)
        } else(sc = uc(tB)) && ("field" === Mc ? Ic.unshift(sc) : Oc[Pc] = sc)
      }
      qB && Object.defineProperty(qB, Vc.name, Oc), Tc = !0
    }

    function qB(cB, Bc, nc) {
      for (var Vc = arguments.length > 2, Ic = 0; Ic < Bc.length; Ic++) nc = Vc ? Bc[Ic].call(cB, nc) : Bc[Ic].call(cB);
      return Vc ? nc : void 0
    }

    function Oc(cB) {
      return "symbol" === typeof cB ? cB : "".concat(cB)
    }

    function Tc(cB, Bc, nc) {
      return "symbol" === typeof Bc && (Bc = Bc.description ? "[".concat(Bc.description, "]") : ""), Object.defineProperty(cB, "name", {
        configurable: !0,
        value: nc ? "".concat(nc, " ", Bc) : Bc
      })
    }

    function fc(cB, Bc) {
      if ("object" === typeof Reflect && "function" === typeof Reflect.metadata) return Reflect.metadata(cB, Bc)
    }

    function mB(cB, Bc, nc, Vc) {
      return new(nc || (nc = Promise))((function(Ic, rB) {
        function uc(cB) {
          try {
            Mc(Vc.next(cB))
          } catch (Bc) {
            rB(Bc)
          }
        }

        function sc(cB) {
          try {
            Mc(Vc.throw(cB))
          } catch (Bc) {
            rB(Bc)
          }
        }

        function Mc(cB) {
          var Bc;
          cB.done ? Ic(cB.value) : (Bc = cB.value, Bc instanceof nc ? Bc : new nc((function(cB) {
            cB(Bc)
          }))).then(uc, sc)
        }
        Mc((Vc = Vc.apply(cB, Bc || [])).next())
      }))
    }

    function ec(cB, Bc) {
      var nc, Vc, Ic, rB = {
          label: 0,
          sent: function() {
            if (1 & Ic[0]) throw Ic[1];
            return Ic[1]
          },
          trys: [],
          ops: []
        },
        uc = Object.create(("function" === typeof Iterator ? Iterator : Object).prototype);
      return uc.next = sc(0), uc.throw = sc(1), uc.return = sc(2), "function" === typeof Symbol && (uc[Symbol.iterator] = function() {
        return this
      }), uc;

      function sc(sc) {
        return function(Mc) {
          return function(sc) {
            if (nc) throw new TypeError("Generator is already executing.");
            for (; uc && (uc = 0, sc[0] && (rB = 0)), rB;) try {
              if (nc = 1, Vc && (Ic = 2 & sc[0] ? Vc.return : sc[0] ? Vc.throw || ((Ic = Vc.return) && Ic.call(Vc), 0) : Vc.next) && !(Ic = Ic.call(Vc, sc[1])).done) return Ic;
              switch (Vc = 0, Ic && (sc = [2 & sc[0], Ic.value]), sc[0]) {
                case 0:
                case 1:
                  Ic = sc;
                  break;
                case 4:
                  return rB.label++, {
                    value: sc[1],
                    done: !1
                  };
                case 5:
                  rB.label++, Vc = sc[1], sc = [0];
                  continue;
                case 7:
                  sc = rB.ops.pop(), rB.trys.pop();
                  continue;
                default:
                  if (!(Ic = (Ic = rB.trys).length > 0 && Ic[Ic.length - 1]) && (6 === sc[0] || 2 === sc[0])) {
                    rB = 0;
                    continue
                  }
                  if (3 === sc[0] && (!Ic || sc[1] > Ic[0] && sc[1] < Ic[3])) {
                    rB.label = sc[1];
                    break
                  }
                  if (6 === sc[0] && rB.label < Ic[1]) {
                    rB.label = Ic[1], Ic = sc;
                    break
                  }
                  if (Ic && rB.label < Ic[2]) {
                    rB.label = Ic[2], rB.ops.push(sc);
                    break
                  }
                  Ic[2] && rB.ops.pop(), rB.trys.pop();
                  continue
              }
              sc = Bc.call(cB, rB)
            } catch (Mc) {
              sc = [6, Mc], Vc = 0
            } finally {
              nc = Ic = 0
            }
            if (5 & sc[0]) throw sc[1];
            return {
              value: sc[0] ? sc[1] : void 0,
              done: !0
            }
          }([sc, Mc])
        }
      }
    }
    var tB = Object.create ? function(cB, Bc, nc, Vc) {
      void 0 === Vc && (Vc = nc);
      var Ic = Object.getOwnPropertyDescriptor(Bc, nc);
      Ic && !("get" in Ic ? !Bc.__esModule : Ic.writable || Ic.configurable) || (Ic = {
        enumerable: !0,
        get: function() {
          return Bc[nc]
        }
      }), Object.defineProperty(cB, Vc, Ic)
    } : function(cB, Bc, nc, Vc) {
      void 0 === Vc && (Vc = nc), cB[Vc] = Bc[nc]
    };

    function Sc(cB, Bc) {
      for (var nc in cB) "default" === nc || Object.prototype.hasOwnProperty.call(Bc, nc) || tB(Bc, cB, nc)
    }

    function yB(cB) {
      var Bc = "function" === typeof Symbol && Symbol.iterator,
        nc = Bc && cB[Bc],
        Vc = 0;
      if (nc) return nc.call(cB);
      if (cB && "number" === typeof cB.length) return {
        next: function() {
          return cB && Vc >= cB.length && (cB = void 0), {
            value: cB && cB[Vc++],
            done: !cB
          }
        }
      };
      throw new TypeError(Bc ? "Object is not iterable." : "Symbol.iterator is not defined.")
    }

    function zB(cB, Bc) {
      var nc = "function" === typeof Symbol && cB[Symbol.iterator];
      if (!nc) return cB;
      var Vc, Ic, rB = nc.call(cB),
        uc = [];
      try {
        for (;
          (void 0 === Bc || Bc-- > 0) && !(Vc = rB.next()).done;) uc.push(Vc.value)
      } catch (sc) {
        Ic = {
          error: sc
        }
      } finally {
        try {
          Vc && !Vc.done && (nc = rB.return) && nc.call(rB)
        } finally {
          if (Ic) throw Ic.error
        }
      }
      return uc
    }

    function pc() {
      for (var cB = [], Bc = 0; Bc < arguments.length; Bc++) cB = cB.concat(zB(arguments[Bc]));
      return cB
    }

    function hc() {
      for (var cB = 0, Bc = 0, nc = arguments.length; Bc < nc; Bc++) cB += arguments[Bc].length;
      var Vc = Array(cB),
        Ic = 0;
      for (Bc = 0; Bc < nc; Bc++)
        for (var rB = arguments[Bc], uc = 0, sc = rB.length; uc < sc; uc++, Ic++) Vc[Ic] = rB[uc];
      return Vc
    }

    function aB(cB, Bc, nc) {
      if (nc || 2 === arguments.length)
        for (var Vc, Ic = 0, rB = Bc.length; Ic < rB; Ic++) !Vc && Ic in Bc || (Vc || (Vc = Array.prototype.slice.call(Bc, 0, Ic)), Vc[Ic] = Bc[Ic]);
      return cB.concat(Vc || Array.prototype.slice.call(Bc))
    }

    function lc(cB) {
      return this instanceof lc ? (this.v = cB, this) : new lc(cB)
    }

    function Yc(cB, Bc, nc) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var Vc, Ic = nc.apply(cB, Bc || []),
        rB = [];
      return Vc = Object.create(("function" === typeof AsyncIterator ? AsyncIterator : Object).prototype), uc("next"), uc("throw"), uc("return", (function(cB) {
        return function(Bc) {
          return Promise.resolve(Bc).then(cB, Pc)
        }
      })), Vc[Symbol.asyncIterator] = function() {
        return this
      }, Vc;

      function uc(cB, Bc) {
        Ic[cB] && (Vc[cB] = function(Bc) {
          return new Promise((function(nc, Vc) {
            rB.push([cB, Bc, nc, Vc]) > 1 || sc(cB, Bc)
          }))
        }, Bc && (Vc[cB] = Bc(Vc[cB])))
      }

      function sc(cB, Bc) {
        try {
          (nc = Ic[cB](Bc)).value instanceof lc ? Promise.resolve(nc.value.v).then(Mc, Pc) : qB(rB[0][2], nc)
        } catch (Vc) {
          qB(rB[0][3], Vc)
        }
        var nc
      }

      function Mc(cB) {
        sc("next", cB)
      }

      function Pc(cB) {
        sc("throw", cB)
      }

      function qB(cB, Bc) {
        cB(Bc), rB.shift(), rB.length && sc(rB[0][0], rB[0][1])
      }
    }

    function Lc(cB) {
      var Bc, nc;
      return Bc = {}, Vc("next"), Vc("throw", (function(cB) {
        throw cB
      })), Vc("return"), Bc[Symbol.iterator] = function() {
        return this
      }, Bc;

      function Vc(Vc, Ic) {
        Bc[Vc] = cB[Vc] ? function(Bc) {
          return (nc = !nc) ? {
            value: lc(cB[Vc](Bc)),
            done: !1
          } : Ic ? Ic(Bc) : Bc
        } : Ic
      }
    }

    function gB(cB) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var Bc, nc = cB[Symbol.asyncIterator];
      return nc ? nc.call(cB) : (cB = yB(cB), Bc = {}, Vc("next"), Vc("throw"), Vc("return"), Bc[Symbol.asyncIterator] = function() {
        return this
      }, Bc);

      function Vc(nc) {
        Bc[nc] = cB[nc] && function(Bc) {
          return new Promise((function(Vc, Ic) {
            (function(cB, Bc, nc, Vc) {
              Promise.resolve(Vc).then((function(Bc) {
                cB({
                  value: Bc,
                  done: nc
                })
              }), Bc)
            })(Vc, Ic, (Bc = cB[nc](Bc)).done, Bc.value)
          }))
        }
      }
    }

    function Uc(cB, Bc) {
      return Object.defineProperty ? Object.defineProperty(cB, "raw", {
        value: Bc
      }) : cB.raw = Bc, cB
    }
    var bB = Object.create ? function(cB, Bc) {
        Object.defineProperty(cB, "default", {
          enumerable: !0,
          value: Bc
        })
      } : function(cB, Bc) {
        cB.default = Bc
      },
      Zc = function(cB) {
        return Zc = Object.getOwnPropertyNames || function(cB) {
          var Bc = [];
          for (var nc in cB) Object.prototype.hasOwnProperty.call(cB, nc) && (Bc[Bc.length] = nc);
          return Bc
        }, Zc(cB)
      };

    function Qc(cB) {
      if (cB && cB.__esModule) return cB;
      var Bc = {};
      if (null != cB)
        for (var nc = Zc(cB), Vc = 0; Vc < nc.length; Vc++) "default" !== nc[Vc] && tB(Bc, cB, nc[Vc]);
      return bB(Bc, cB), Bc
    }

    function Cc(cB) {
      return cB && cB.__esModule ? cB : {
        default: cB
      }
    }

    function vB(cB, Bc, nc, Vc) {
      if ("a" === nc && !Vc) throw new TypeError("Private accessor was defined without a getter");
      if ("function" === typeof Bc ? cB !== Bc || !Vc : !Bc.has(cB)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
      return "m" === nc ? Vc : "a" === nc ? Vc.call(cB) : Vc ? Vc.value : Bc.get(cB)
    }

    function Dc(cB, Bc, nc, Vc, Ic) {
      if ("m" === Vc) throw new TypeError("Private method is not writable");
      if ("a" === Vc && !Ic) throw new TypeError("Private accessor was defined without a setter");
      if ("function" === typeof Bc ? cB !== Bc || !Ic : !Bc.has(cB)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
      return "a" === Vc ? Ic.call(cB, nc) : Ic ? Ic.value = nc : Bc.set(cB, nc), nc
    }

    function Nc(cB, Bc) {
      if (null === Bc || "object" !== typeof Bc && "function" !== typeof Bc) throw new TypeError("Cannot use 'in' operator on non-object");
      return "function" === typeof cB ? Bc === cB : cB.has(Bc)
    }

    function Ec(cB, Bc, nc) {
      if (null !== Bc && void 0 !== Bc) {
        if ("object" !== typeof Bc && "function" !== typeof Bc) throw new TypeError("Object expected.");
        var Vc, Ic;
        if (nc) {
          if (!Symbol.asyncDispose) throw new TypeError("Symbol.asyncDispose is not defined.");
          Vc = Bc[Symbol.asyncDispose]
        }
        if (void 0 === Vc) {
          if (!Symbol.dispose) throw new TypeError("Symbol.dispose is not defined.");
          Vc = Bc[Symbol.dispose], nc && (Ic = Vc)
        }
        if ("function" !== typeof Vc) throw new TypeError("Object not disposable.");
        Ic && (Vc = function() {
          try {
            Ic.call(this)
          } catch (cB) {
            return Promise.reject(cB)
          }
        }), cB.stack.push({
          value: Bc,
          dispose: Vc,
          async: nc
        })
      } else nc && cB.stack.push({
        async: !0
      });
      return Bc
    }
    var oc = "function" === typeof SuppressedError ? SuppressedError : function(cB, Bc, nc) {
      var Vc = new Error(nc);
      return Vc.name = "SuppressedError", Vc.error = cB, Vc.suppressed = Bc, Vc
    };

    function Wc(cB) {
      function Bc(Bc) {
        cB.error = cB.hasError ? new oc(Bc, cB.error, "An error was suppressed during disposal.") : Bc, cB.hasError = !0
      }
      var nc, Vc = 0;
      return function Ic() {
        for (; nc = cB.stack.pop();) try {
          if (!nc.async && 1 === Vc) return Vc = 0, cB.stack.push(nc), Promise.resolve().then(Ic);
          if (nc.dispose) {
            var rB = nc.dispose.call(nc.value);
            if (nc.async) return Vc |= 2, Promise.resolve(rB).then(Ic, (function(cB) {
              return Bc(cB), Ic()
            }))
          } else Vc |= 1
        } catch (uc) {
          Bc(uc)
        }
        if (1 === Vc) return cB.hasError ? Promise.reject(cB.error) : Promise.resolve();
        if (cB.hasError) throw cB.error
      }()
    }

    function wc(cB, Bc) {
      return "string" === typeof cB && /^\.\.?\//.test(cB) ? cB.replace(/\.(tsx)$|((?:\.d)?)((?:\.[^./]+?)?)\.([cm]?)ts$/i, (function(cB, nc, Vc, Ic, rB) {
        return nc ? Bc ? ".jsx" : ".js" : !Vc || Ic && rB ? Vc + Ic + "." + rB.toLowerCase() + "js" : cB
      })) : cB
    }
    const kB = {
      __extends: Ic,
      __assign: rB,
      __rest: uc,
      __decorate: sc,
      __param: Mc,
      __esDecorate: Pc,
      __runInitializers: qB,
      __propKey: Oc,
      __setFunctionName: Tc,
      __metadata: fc,
      __awaiter: mB,
      __generator: ec,
      __createBinding: tB,
      __exportStar: Sc,
      __values: yB,
      __read: zB,
      __spread: pc,
      __spreadArrays: hc,
      __spreadArray: aB,
      __await: lc,
      __asyncGenerator: Yc,
      __asyncDelegator: Lc,
      __asyncValues: gB,
      __makeTemplateObject: Uc,
      __importStar: Qc,
      __importDefault: Cc,
      __classPrivateFieldGet: vB,
      __classPrivateFieldSet: Dc,
      __classPrivateFieldIn: Nc,
      __addDisposableResource: Ec,
      __disposeResources: Wc,
      __rewriteRelativeImportExtension: wc
    }
  }
};
Object.freeze(modules);
for (const cB in modules) Object.freeze(modules[cB]);