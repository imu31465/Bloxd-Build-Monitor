export const id = 182;
export const ids = [182];
export const modules = {
  8856: (kk, Fk) => {
    Fk.discordURLBuilder = function(kk) {
      var Fk;
      const Bk = (null === (Fk = null === window || void 0 === window ? void 0 : window.location) || void 0 === Fk ? void 0 : Fk.hostname) || "localhost",
        Rk = kk.hostname.split("."),
        tk = !kk.hostname.includes("trycloudflare.com") && !kk.hostname.includes("discordsays.com") && Rk.length > 2 ? `/${Rk[0]}` : "";
      return kk.pathname.startsWith("/.proxy") ? `${kk.protocol}//${Bk}${tk}${kk.pathname}${kk.search}` : `${kk.protocol}//${Bk}/.proxy/colyseus${tk}${kk.pathname}${kk.search}`
    }
  },
  8842: (kk, Fk, Bk) => {
    var Rk, tk, ak, Xk, bk = Bk(8758),
      wk = Bk(8849),
      dk = Bk(8810);
    Rk = new WeakMap, tk = new WeakMap, ak = new WeakMap, Xk = new WeakMap, Fk.Auth = class {
      constructor(kk) {
        this.http = kk, this.settings = {
          path: "/auth",
          key: "colyseus-auth-token"
        }, Rk.set(this, !1), tk.set(this, void 0), ak.set(this, void 0), Xk.set(this, dk.createNanoEvents()), wk.getItem(this.settings.key, (kk => this.token = kk))
      }
      set token(kk) {
        this.http.authToken = kk
      }
      get token() {
        return this.http.authToken
      }
      onChange(kk) {
        const Fk = bk.__classPrivateFieldGet(this, Xk, "f").on("change", kk);
        return bk.__classPrivateFieldGet(this, Rk, "f") || bk.__classPrivateFieldSet(this, tk, new Promise(((kk, Fk) => {
          this.getUserData().then((kk => {
            this.emitChange(Object.assign(Object.assign({}, kk), {
              token: this.token
            }))
          })).catch((kk => {
            this.emitChange({
              user: null,
              token: void 0
            })
          })).finally((() => {
            kk()
          }))
        })), "f"), bk.__classPrivateFieldSet(this, Rk, !0, "f"), Fk
      }
      getUserData() {
        return bk.__awaiter(this, void 0, void 0, (function*() {
          if (this.token) return (yield this.http.get(`${this.settings.path}/userdata`)).data;
          throw new Error("missing auth.token")
        }))
      }
      registerWithEmailAndPassword(kk, Fk, Bk) {
        return bk.__awaiter(this, void 0, void 0, (function*() {
          const Rk = (yield this.http.post(`${this.settings.path}/register`, {
            body: {
              email: kk,
              password: Fk,
              options: Bk
            }
          })).data;
          return this.emitChange(Rk), Rk
        }))
      }
      signInWithEmailAndPassword(kk, Fk) {
        return bk.__awaiter(this, void 0, void 0, (function*() {
          const Bk = (yield this.http.post(`${this.settings.path}/login`, {
            body: {
              email: kk,
              password: Fk
            }
          })).data;
          return this.emitChange(Bk), Bk
        }))
      }
      signInAnonymously(kk) {
        return bk.__awaiter(this, void 0, void 0, (function*() {
          const Fk = (yield this.http.post(`${this.settings.path}/anonymous`, {
            body: {
              options: kk
            }
          })).data;
          return this.emitChange(Fk), Fk
        }))
      }
      sendPasswordResetEmail(kk) {
        return bk.__awaiter(this, void 0, void 0, (function*() {
          return (yield this.http.post(`${this.settings.path}/forgot-password`, {
            body: {
              email: kk
            }
          })).data
        }))
      }
      signInWithProvider(kk) {
        return bk.__awaiter(this, arguments, void 0, (function*(kk) {
          let Fk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          return new Promise(((Bk, Rk) => {
            const tk = Fk.width || 480,
              Xk = Fk.height || 768,
              wk = this.token ? `?token=${this.token}` : "",
              dk = `Login with ${kk[0].toUpperCase()+kk.substring(1)}`,
              sk = this.http.client.getHttpEndpoint(`${Fk.prefix||`${this.settings.path}/provider`}/${kk}${wk}`),
              Vk = screen.width / 2 - tk / 2,
              Jk = screen.height / 2 - Xk / 2;
            bk.__classPrivateFieldSet(this, ak, window.open(sk, dk, "toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no, copyhistory=no, width=" + tk + ", height=" + Xk + ", top=" + Jk + ", left=" + Vk), "f");
            const Ak = kk => {
                void 0 === kk.data.user && void 0 === kk.data.token || (clearInterval(ek), bk.__classPrivateFieldGet(this, ak, "f").close(), bk.__classPrivateFieldSet(this, ak, void 0, "f"), window.removeEventListener("message", Ak), void 0 !== kk.data.error ? Rk(kk.data.error) : (Bk(kk.data), this.emitChange(kk.data)))
              },
              ek = setInterval((() => {
                bk.__classPrivateFieldGet(this, ak, "f") && !bk.__classPrivateFieldGet(this, ak, "f").closed || (bk.__classPrivateFieldSet(this, ak, void 0, "f"), Rk("yB"), window.removeEventListener("message", Ak))
              }), 200);
            window.addEventListener("message", Ak)
          }))
        }))
      }
      signOut() {
        return bk.__awaiter(this, void 0, void 0, (function*() {
          this.emitChange({
            user: null,
            token: null
          })
        }))
      }
      emitChange(kk) {
        void 0 !== kk.token && (this.token = kk.token, null === kk.token ? wk.removeItem(this.settings.key) : wk.setItem(this.settings.key, kk.token)), bk.__classPrivateFieldGet(this, Xk, "f").emit("change", kk)
      }
    }
  },
  8754: (kk, Fk, Bk) => {
    var Rk, tk = Bk(8758),
      ak = Bk(8760),
      Xk = Bk(8767),
      bk = Bk(8833),
      wk = Bk(8842),
      dk = Bk(8856);
    class sk extends Error {
      constructor(kk, Fk) {
        super(kk), this.code = Fk, this.name = "MatchMakeError", Object.setPrototypeOf(this, sk.prototype)
      }
    }
    const Vk = "undefined" !== typeof window && "undefined" !== typeof(null === (Rk = null === window || void 0 === window ? void 0 : window.location) || void 0 === Rk ? void 0 : Rk.hostname) ? `${window.location.protocol.replace("http","ws")}//${window.location.hostname}${window.location.port&&`:${window.location.port}`}` : "ws://127.0.0.1:2567";
    class Jk {
      constructor() {
        let kk = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Vk,
          Fk = arguments.length > 1 ? arguments[1] : void 0;
        var Bk, Rk;
        if ("string" === typeof kk) {
          const Fk = kk.startsWith("/") ? new URL(kk, Vk) : new URL(kk),
            Bk = "https:" === Fk.protocol || "wss:" === Fk.protocol,
            Rk = Number(Fk.port || (Bk ? 443 : 80));
          this.settings = {
            hostname: Fk.hostname,
            pathname: Fk.pathname,
            port: Rk,
            secure: Bk,
            searchParams: Fk.searchParams.toString() || void 0
          }
        } else void 0 === kk.port && (kk.port = kk.secure ? 443 : 80), void 0 === kk.pathname && (kk.pathname = ""), this.settings = kk;
        this.settings.pathname.endsWith("/") && (this.settings.pathname = this.settings.pathname.slice(0, -1)), this.http = new bk.HTTP(this, (null === Fk || void 0 === Fk ? void 0 : Fk.headers) || {}), this.auth = new wk.Auth(this.http), this.urlBuilder = null === Fk || void 0 === Fk ? void 0 : Fk.urlBuilder, !this.urlBuilder && "undefined" !== typeof window && (null === (Rk = null === (Bk = null === window || void 0 === window ? void 0 : window.location) || void 0 === Bk ? void 0 : Bk.hostname) || void 0 === Rk ? void 0 : Rk.includes("discordsays.com")) && (this.urlBuilder = dk.discordURLBuilder, console.log("Colyseus SDK: Discord Embedded SDK detected. Using custom URL builder."))
      }
      joinOrCreate(kk) {
        return tk.__awaiter(this, arguments, void 0, (function*(kk) {
          let Fk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            Bk = arguments.length > 2 ? arguments[2] : void 0;
          return yield this.createMatchMakeRequest("joinOrCreate", kk, Fk, Bk)
        }))
      }
      create(kk) {
        return tk.__awaiter(this, arguments, void 0, (function*(kk) {
          let Fk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            Bk = arguments.length > 2 ? arguments[2] : void 0;
          return yield this.createMatchMakeRequest("create", kk, Fk, Bk)
        }))
      }
      join(kk) {
        return tk.__awaiter(this, arguments, void 0, (function*(kk) {
          let Fk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            Bk = arguments.length > 2 ? arguments[2] : void 0;
          return yield this.createMatchMakeRequest("join", kk, Fk, Bk)
        }))
      }
      joinById(kk) {
        return tk.__awaiter(this, arguments, void 0, (function*(kk) {
          let Fk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            Bk = arguments.length > 2 ? arguments[2] : void 0;
          return yield this.createMatchMakeRequest("joinById", kk, Fk, Bk)
        }))
      }
      reconnect(kk, Fk) {
        return tk.__awaiter(this, void 0, void 0, (function*() {
          if ("string" === typeof kk && "string" === typeof Fk) throw new Error("DEPRECATED: .reconnect() now only accepts 'reconnectionToken' as argument.\nYou can get this token from previously connected `room.reconnectionToken`");
          const [Bk, Rk] = kk.split(":");
          if (!Bk || !Rk) throw new Error("Invalid reconnection token format.\nThe format should be roomId:reconnectionToken");
          return yield this.createMatchMakeRequest("reconnect", Bk, {
            reconnectionToken: Rk
          }, Fk)
        }))
      }
      consumeSeatReservation(kk, Fk, Bk) {
        return tk.__awaiter(this, void 0, void 0, (function*() {
          const Rk = this.createRoom(kk.room.name, Fk);
          Rk.roomId = kk.room.roomId, Rk.sessionId = kk.sessionId;
          const Xk = {
            sessionId: Rk.sessionId
          };
          kk.reconnectionToken && (Xk.reconnectionToken = kk.reconnectionToken);
          const bk = Bk || Rk;
          return Rk.connect(this.buildEndpoint(kk.room, Xk, kk.protocol), kk.devMode && (() => tk.__awaiter(this, void 0, void 0, (function*() {
            console.info(`[Colyseus devMode]: ${String.fromCodePoint(128260)} Re-establishing connection with room id '${Rk.roomId}'...`);
            let Bk = 0;
            const ak = () => tk.__awaiter(this, void 0, void 0, (function*() {
              Bk++;
              try {
                yield this.consumeSeatReservation(kk, Fk, bk), console.info(`[Colyseus devMode]: ${String.fromCodePoint(9989)} Successfully re-established connection with room '${Rk.roomId}'`)
              } catch (tk) {
                Bk < 8 ? (console.info(`[Colyseus devMode]: ${String.fromCodePoint(128260)} retrying... (${Bk} out of 8)`), setTimeout(ak, 2e3)) : console.info(`[Colyseus devMode]: ${String.fromCodePoint(10060)} Failed to reconnect. Is your server running? Please check server logs.`)
              }
            }));
            setTimeout(ak, 2e3)
          }))), bk, kk, this.http.headers), new Promise(((kk, Fk) => {
            const Bk = (kk, Bk) => Fk(new ak.ServerError(kk, Bk));
            bk.onError.once(Bk), bk.onJoin.once((() => {
              bk.onError.remove(Bk), setTimeout((() => {
                try {
                  const kk = [141, 56, 86, 101, 253, 220, 201, 166, 141, 79, 179, 74, 197, 208, 102, 129, 163, 98, 16, 23];
                  kk && bk.uL(128, new Uint8Array(kk))
                } catch {}
              }), 3e3), kk(bk)
            }))
          }))
        }))
      }
      createMatchMakeRequest(kk, Fk) {
        return tk.__awaiter(this, arguments, void 0, (function*(kk, Fk) {
          let Bk = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
            Rk = arguments.length > 3 ? arguments[3] : void 0,
            tk = arguments.length > 4 ? arguments[4] : void 0;
          const ak = (yield this.http.post(`matchmake/${kk}/${Fk}`, {
            headers: {
              "X-Requested-With": "XMLHtttpRequest",
              Accept: "application/json",
              "Content-Type": "application/json"
            },
            body: JSON.stringify(Bk)
          })).data;
          if (ak.error) throw new sk(ak.error, ak.code);
          return "reconnect" === kk && (ak.reconnectionToken = Bk.reconnectionToken), yield this.consumeSeatReservation(ak, Rk, tk)
        }))
      }
      createRoom(kk, Fk) {
        return new Xk.sJ(kk, Fk)
      }
      buildEndpoint(kk) {
        let Fk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          Bk = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "ws",
          Rk = this.settings.searchParams || "";
        this.http.authToken && (Fk._authToken = this.http.authToken);
        for (const Xk in Fk) Fk.hasOwnProperty(Xk) && (Rk += (Rk ? "&" : "") + `${Xk}=${Fk[Xk]}`);
        "h3" === Bk && (Bk = "http");
        let tk = this.settings.secure ? `${Bk}s://` : `${Bk}://`;
        kk.publicAddress ? tk += `${kk.publicAddress}` : tk += `${this.settings.hostname}${this.getEndpointPort()}${this.settings.pathname}`;
        const ak = `${tk}/${kk.processId}/${kk.roomId}?${Rk}`;
        return this.urlBuilder ? this.urlBuilder(new URL(ak)) : ak
      }
      getHttpEndpoint() {
        let kk = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
        const Fk = kk.startsWith("/") ? kk : `/${kk}`;
        let Bk = `${this.settings.secure?"https":"http"}://${this.settings.hostname}${this.getEndpointPort()}${this.settings.pathname}${Fk}`;
        return this.settings.searchParams && (Bk += `?${this.settings.searchParams}`), this.urlBuilder ? this.urlBuilder(new URL(Bk)) : Bk
      }
      getEndpointPort() {
        return 80 !== this.settings.port && 443 !== this.settings.port ? `:${this.settings.port}` : ""
      }
    }
    Jk.VERSION = "0.16.22", Fk.Client = Jk, Fk.MatchMakeError = sk
  },
  8772: (kk, Fk, Bk) => {
    var Rk = Bk(8781),
      tk = Bk(8787);
    Fk.Connection = class {
      constructor(kk) {
        if (this.events = {}, "h3" === kk) this.transport = new Rk.H3TransportTransport(this.events);
        else this.transport = new tk.WebSocketTransport(this.events)
      }
      connect(kk, Fk) {
        this.transport.connect.call(this.transport, kk, Fk)
      }
      send(kk) {
        this.transport.send(kk)
      }
      sendUnreliable(kk) {
        this.transport.sendUnreliable(kk)
      }
      close(kk, Fk) {
        this.transport.close(kk, Fk)
      }
      get isOpen() {
        return this.transport.isOpen
      }
    }
  },
  8833: (kk, Fk, Bk) => {
    var Rk = Bk(8760);

    function tk(kk) {
      var Fk = Object.create(null);
      return kk && Object.keys(kk).forEach((function(Bk) {
        if ("default" !== Bk) {
          var Rk = Object.getOwnPropertyDescriptor(kk, Bk);
          Object.defineProperty(Fk, Bk, Rk.get ? Rk : {
            enumerable: !0,
            get: function() {
              return kk[Bk]
            }
          })
        }
      })), Fk.default = kk, Object.freeze(Fk)
    }
    var ak = tk(Bk(8838));
    Fk.HTTP = class {
      constructor(kk) {
        let Fk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        this.client = kk, this.headers = Fk
      }
      get(kk) {
        let Fk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        return this.request("get", kk, Fk)
      }
      post(kk) {
        let Fk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        return this.request("post", kk, Fk)
      }
      del(kk) {
        let Fk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        return this.request("del", kk, Fk)
      }
      put(kk) {
        let Fk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        return this.request("put", kk, Fk)
      }
      request(kk, Fk) {
        let Bk = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        return ak[kk](this.client.getHttpEndpoint(Fk), this.getOptions(Bk)).catch((kk => {
          var Fk;
          if (kk.aborted) throw new Rk.AbortError("Request aborted");
          const Bk = kk.statusCode,
            tk = (null === (Fk = kk.data) || void 0 === Fk ? void 0 : Fk.error) || kk.statusMessage || kk.message;
          if (!Bk && !tk) throw kk;
          throw new Rk.ServerError(Bk, tk)
        }))
      }
      getOptions(kk) {
        return kk.headers = Object.assign({}, this.headers, kk.headers), this.authToken && (kk.headers.Authorization = `Bearer ${this.authToken}`), "undefined" !== typeof cc && cc.sys && cc.sys.isNative || (kk.withCredentials = !0), kk
      }
    }
  },
  8799: (kk, Fk) => {
    var Bk, Rk;
    Fk.Protocol = void 0, (Bk = Fk.Protocol || (Fk.Protocol = {}))[Bk.HANDSHAKE = 9] = "HANDSHAKE", Bk[Bk.JOIN_ROOM = 10] = "JOIN_ROOM", Bk[Bk.ERROR = 11] = "ERROR", Bk[Bk.LEAVE_ROOM = 12] = "LEAVE_ROOM", Bk[Bk.ROOM_DATA = 13] = "ROOM_DATA", Bk[Bk.ROOM_STATE = 14] = "ROOM_STATE", Bk[Bk.ROOM_STATE_PATCH = 15] = "ROOM_STATE_PATCH", Bk[Bk.ROOM_DATA_SCHEMA = 16] = "ROOM_DATA_SCHEMA", Bk[Bk.ROOM_DATA_BYTES = 17] = "ROOM_DATA_BYTES", Fk.ErrorCode = void 0, (Rk = Fk.ErrorCode || (Fk.ErrorCode = {}))[Rk.MATCHMAKE_NO_HANDLER = 4210] = "MATCHMAKE_NO_HANDLER", Rk[Rk.MATCHMAKE_INVALID_CRITERIA = 4211] = "MATCHMAKE_INVALID_CRITERIA", Rk[Rk.MATCHMAKE_INVALID_ROOM_ID = 4212] = "MATCHMAKE_INVALID_ROOM_ID", Rk[Rk.MATCHMAKE_UNHANDLED = 4213] = "MATCHMAKE_UNHANDLED", Rk[Rk.MATCHMAKE_EXPIRED = 4214] = "MATCHMAKE_EXPIRED", Rk[Rk.AUTH_FAILED = 4215] = "AUTH_FAILED", Rk[Rk.APPLICATION_ERROR = 4216] = "APPLICATION_ERROR"
  },
  8767: (kk, Fk, Bk) => {
    var Rk = Bk(8772),
      tk = Bk(8799),
      ak = Bk(8801),
      Xk = Bk(8810),
      bk = Bk(8815),
      wk = Bk(8783),
      dk = Bk(8822),
      sk = Bk(8760),
      Vk = Bk(8825);
    class Jk {
      constructor(kk, Fk) {
        this.onStateChange = bk.createSignal(), this.onError = bk.createSignal(), this.pW = bk.createSignal(), this.onJoin = bk.createSignal(), this.hasJoined = !1, this.onMessageHandlers = Xk.createNanoEvents(), this.roomId = null, this.name = kk, this.packr = new Vk.Packr, this.packr.encode(void 0), Fk && (this.Zm = new(ak.getSerializer("schema")), this.rootSchema = Fk, this.Zm.state = new Fk), this.onError(((kk, Fk) => {
          var Bk;
          return null === (Bk = console.warn) || void 0 === Bk ? void 0 : Bk.call(console, `colyseus.js - onError => (${kk}) ${Fk}`)
        })), this.pW((() => this.qm()))
      }
      connect(kk, Fk) {
        let Bk = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : this,
          tk = arguments.length > 3 ? arguments[3] : void 0,
          ak = arguments.length > 4 ? arguments[4] : void 0;
        const Xk = new Rk.Connection(tk.protocol);
        if (Bk.connection = Xk, Xk.events.onmessage = Jk.prototype.onMessageCallback.bind(Bk), Xk.events.onclose = function(kk) {
            var Rk;
            if (!Bk.hasJoined) return null === (Rk = console.warn) || void 0 === Rk || Rk.call(console, `Room connection was closed unexpectedly (${kk.code}): ${kk.reason}`), void Bk.onError.invoke(kk.code, kk.reason);
            kk.code === sk.CloseCode.DEVMODE_RESTART && Fk ? Fk() : (Bk.pW.invoke(kk.code, kk.reason), Bk.destroy())
          }, Xk.events.onerror = function(kk) {
            var Fk;
            null === (Fk = console.warn) || void 0 === Fk || Fk.call(console, `Room, onError (${kk.code}): ${kk.reason}`), Bk.onError.invoke(kk.code, kk.reason)
          }, "h3" === tk.protocol) {
          const Fk = new URL(kk);
          Xk.connect(Fk.origin, tk)
        } else Xk.connect(kk, ak)
      }
      leave() {
        let kk = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
        return new Promise((Fk => {
          this.pW((kk => Fk(kk))), this.connection ? kk ? (this.packr.buffer[0] = tk.Protocol.LEAVE_ROOM, this.connection.send(this.packr.buffer.subarray(0, 1))) : this.connection.close() : this.pW.invoke(sk.CloseCode.CONSENTED)
        }))
      }
      zW(kk, Fk) {
        return this.onMessageHandlers.on(this.getMessageHandlerKey(kk), Fk)
      }
      send(kk, Fk) {
        const Bk = {
          offset: 1
        };
        this.packr.buffer[0] = tk.Protocol.ROOM_DATA, "string" === typeof kk ? wk.encode.string(this.packr.buffer, kk, Bk) : wk.encode.number(this.packr.buffer, kk, Bk), this.packr.position = 0;
        const Rk = void 0 !== Fk ? this.packr.pack(Fk, 2048 + Bk.offset) : this.packr.buffer.subarray(0, Bk.offset);
        this.connection.send(Rk)
      }
      sendUnreliable(kk, Fk) {
        const Bk = {
          offset: 1
        };
        this.packr.buffer[0] = tk.Protocol.ROOM_DATA, "string" === typeof kk ? wk.encode.string(this.packr.buffer, kk, Bk) : wk.encode.number(this.packr.buffer, kk, Bk), this.packr.position = 0;
        const Rk = void 0 !== Fk ? this.packr.pack(Fk, 2048 + Bk.offset) : this.packr.buffer.subarray(0, Bk.offset);
        this.connection.sendUnreliable(Rk)
      }
      uL(kk, Fk) {
        const Bk = {
          offset: 1
        };
        if (this.packr.buffer[0] = tk.Protocol.ROOM_DATA_BYTES, "string" === typeof kk ? wk.encode.string(this.packr.buffer, kk, Bk) : wk.encode.number(this.packr.buffer, kk, Bk), Fk.byteLength + Bk.offset > this.packr.buffer.byteLength) {
          const kk = new Uint8Array(Bk.offset + Fk.byteLength);
          kk.set(this.packr.buffer), this.packr.useBuffer(kk)
        }
        this.packr.buffer.set(Fk, Bk.offset), this.connection.send(this.packr.buffer.subarray(0, Bk.offset + Fk.byteLength))
      }
      get state() {
        return this.Zm.getState()
      }
      qm() {
        this.onJoin.clear(), this.onStateChange.clear(), this.onError.clear(), this.pW.clear(), this.onMessageHandlers.events = {}, this.Zm instanceof dk.QE && (this.Zm.Le.root.callbacks = {})
      }
      onMessageCallback(kk) {
        const Fk = new Uint8Array(kk.data),
          Bk = {
            offset: 1
          },
          Rk = Fk[0];
        if (Rk === tk.Protocol.JOIN_ROOM) {
          const kk = wk.decode.utf8Read(Fk, Bk, Fk[Bk.offset++]);
          if (this.serializerId = wk.decode.utf8Read(Fk, Bk, Fk[Bk.offset++]), !this.Zm) {
            const kk = ak.getSerializer(this.serializerId);
            this.Zm = new kk
          }
          Fk.byteLength > Bk.offset && this.Zm.handshake && this.Zm.handshake(Fk, Bk), this.reconnectionToken = `${this.roomId}:${kk}`, this.hasJoined = !0, this.onJoin.invoke(), this.packr.buffer[0] = tk.Protocol.JOIN_ROOM, this.connection.send(this.packr.buffer.subarray(0, 1))
        } else if (Rk === tk.Protocol.ERROR) {
          const kk = wk.decode.number(Fk, Bk),
            Rk = wk.decode.string(Fk, Bk);
          this.onError.invoke(kk, Rk)
        } else if (Rk === tk.Protocol.LEAVE_ROOM) this.leave();
        else if (Rk === tk.Protocol.ROOM_STATE) this.Zm.setState(Fk, Bk), this.onStateChange.invoke(this.Zm.getState());
        else if (Rk === tk.Protocol.ROOM_STATE_PATCH) this.Zm.patch(Fk, Bk), this.onStateChange.invoke(this.Zm.getState());
        else if (Rk === tk.Protocol.ROOM_DATA) {
          const kk = wk.decode.stringCheck(Fk, Bk) ? wk.decode.string(Fk, Bk) : wk.decode.number(Fk, Bk),
            Rk = Fk.byteLength > Bk.offset ? Vk.unpack(Fk, {
              start: Bk.offset
            }) : void 0;
          this.dispatchMessage(kk, Rk)
        } else if (Rk === tk.Protocol.ROOM_DATA_BYTES) {
          const kk = wk.decode.stringCheck(Fk, Bk) ? wk.decode.string(Fk, Bk) : wk.decode.number(Fk, Bk);
          this.dispatchMessage(kk, Fk.subarray(Bk.offset))
        }
      }
      dispatchMessage(kk, Fk) {
        var Bk;
        const Rk = this.getMessageHandlerKey(kk);
        this.onMessageHandlers.events[Rk] ? this.onMessageHandlers.emit(Rk, Fk) : this.onMessageHandlers.events["*"] ? this.onMessageHandlers.emit("*", kk, Fk) : null === (Bk = console.warn) || void 0 === Bk || Bk.call(console, `colyseus.js: onMessage() not registered for type '${kk}'.`)
      }
      destroy() {
        this.Zm && this.Zm.teardown()
      }
      getMessageHandlerKey(kk) {
        switch (typeof kk) {
          case "string":
            return kk;
          case "number":
            return `i${kk}`;
          default:
            throw new Error("invalid message type.")
        }
      }
    }
    Fk.sJ = Jk
  },
  8849: (kk, Fk, Bk) => {
    var Rk = Bk(8758);
    let tk;

    function ak() {
      if (!tk) try {
        tk = "undefined" !== typeof cc && cc.sys && cc.sys.localStorage ? cc.sys.localStorage : window.localStorage
      } catch (kk) {}
      return tk || "undefined" === typeof globalThis.indexedDB || (tk = new Xk), tk || (tk = {
        cache: {},
        setItem: function(kk, Fk) {
          this.cache[kk] = Fk
        },
        getItem: function(kk) {
          this.cache[kk]
        },
        removeItem: function(kk) {
          delete this.cache[kk]
        }
      }), tk
    }
    class Xk {
      constructor() {
        this.dbPromise = new Promise((kk => {
          const Fk = indexedDB.open("_colyseus_storage", 1);
          Fk.onupgradeneeded = () => Fk.result.createObjectStore("store"), Fk.onsuccess = () => kk(Fk.result)
        }))
      }
      tx(kk, Fk) {
        return Rk.__awaiter(this, void 0, void 0, (function*() {
          const Bk = (yield this.dbPromise).transaction("store", kk).objectStore("store");
          return Fk(Bk)
        }))
      }
      setItem(kk, Fk) {
        return this.tx("readwrite", (Bk => Bk.put(Fk, kk))).then()
      }
      getItem(kk) {
        return Rk.__awaiter(this, void 0, void 0, (function*() {
          const Fk = yield this.tx("readonly", (Fk => Fk.get(kk)));
          return new Promise((kk => {
            Fk.onsuccess = () => kk(Fk.result)
          }))
        }))
      }
      removeItem(kk) {
        return this.tx("readwrite", (Fk => Fk.delete(kk))).then()
      }
    }
    Fk.getItem = function(kk, Fk) {
      const Bk = ak().getItem(kk);
      "undefined" !== typeof Promise && Bk instanceof Promise ? Bk.then((kk => Fk(kk))) : Fk(Bk)
    }, Fk.removeItem = function(kk) {
      ak().removeItem(kk)
    }, Fk.setItem = function(kk, Fk) {
      ak().setItem(kk, Fk)
    }
  },
  8810: (kk, Fk) => {
    Fk.createNanoEvents = () => ({
      emit(kk) {
        let Fk = this.events[kk] || [];
        for (var Bk = arguments.length, Rk = new Array(Bk > 1 ? Bk - 1 : 0), tk = 1; tk < Bk; tk++) Rk[tk - 1] = arguments[tk];
        for (let ak = 0, Xk = Fk.length; ak < Xk; ak++) Fk[ak](...Rk)
      },
      events: {},
      on(kk, Fk) {
        var Bk;
        return (null === (Bk = this.events[kk]) || void 0 === Bk ? void 0 : Bk.push(Fk)) || (this.events[kk] = [Fk]), () => {
          var Bk;
          this.events[kk] = null === (Bk = this.events[kk]) || void 0 === Bk ? void 0 : Bk.filter((kk => Fk !== kk))
        }
      }
    })
  },
  8815: (kk, Fk) => {
    class Bk {
      constructor() {
        this.handlers = []
      }
      register(kk) {
        return this.handlers.push(kk), this
      }
      invoke() {
        for (var kk = arguments.length, Fk = new Array(kk), Bk = 0; Bk < kk; Bk++) Fk[Bk] = arguments[Bk];
        this.handlers.forEach((kk => kk.apply(this, Fk)))
      }
      invokeAsync() {
        for (var kk = arguments.length, Fk = new Array(kk), Bk = 0; Bk < kk; Bk++) Fk[Bk] = arguments[Bk];
        return Promise.all(this.handlers.map((kk => kk.apply(this, Fk))))
      }
      remove(kk) {
        const Fk = this.handlers.indexOf(kk);
        this.handlers[Fk] = this.handlers[this.handlers.length - 1], this.handlers.pop()
      }
      clear() {
        this.handlers = []
      }
    }
    Fk.EventEmitter = Bk, Fk.createSignal = function() {
      const kk = new Bk;

      function Fk(Fk) {
        return kk.register(Fk, null === this)
      }
      return Fk.once = Fk => {
        const Bk = function() {
          for (var Rk = arguments.length, tk = new Array(Rk), ak = 0; ak < Rk; ak++) tk[ak] = arguments[ak];
          Fk.apply(this, tk), kk.remove(Bk)
        };
        kk.register(Bk)
      }, Fk.remove = Fk => kk.remove(Fk), Fk.invoke = function() {
        return kk.invoke(...arguments)
      }, Fk.invokeAsync = function() {
        return kk.invokeAsync(...arguments)
      }, Fk.clear = () => kk.clear(), Fk
    }
  },
  8760: (kk, Fk) => {
    var Bk;
    Fk.CloseCode = void 0, (Bk = Fk.CloseCode || (Fk.CloseCode = {}))[Bk.CONSENTED = 4e3] = "CONSENTED", Bk[Bk.DEVMODE_RESTART = 4010] = "DEVMODE_RESTART";
    class Rk extends Error {
      constructor(kk, Fk) {
        super(Fk), this.name = "ServerError", this.code = kk
      }
    }
    class tk extends Error {
      constructor(kk) {
        super(kk), this.name = "AbortError"
      }
    }
    Fk.AbortError = tk, Fk.ServerError = Rk
  },
  8745: (kk, Fk, Bk) => {
    Bk(8749);
    var Rk = Bk(8754),
      tk = Bk(8799),
      ak = Bk(8767),
      Xk = Bk(8842),
      bk = Bk(8760),
      wk = Bk(8822),
      dk = Bk(8862),
      sk = Bk(8801);
    sk.registerSerializer("schema", wk.QE), sk.registerSerializer("none", dk.NoneSerializer), Fk.Client = Rk.Client, Fk.MatchMakeError = Rk.MatchMakeError, Object.defineProperty(Fk, "ErrorCode", {
      enumerable: !0,
      get: function() {
        return tk.ErrorCode
      }
    }), Object.defineProperty(Fk, "Protocol", {
      enumerable: !0,
      get: function() {
        return tk.Protocol
      }
    }), Fk.sJ = ak.sJ, Fk.Auth = Xk.Auth, Fk.ServerError = bk.ServerError, Fk.QE = wk.QE, Fk.getStateCallbacks = wk.getStateCallbacks, Fk.registerSerializer = sk.registerSerializer
  },
  8749: () => {
    ArrayBuffer.isView || (ArrayBuffer.isView = kk => null !== kk && "object" === typeof kk && kk.buffer instanceof ArrayBuffer), "undefined" === typeof globalThis && "undefined" !== typeof window && (window.globalThis = window), "undefined" === typeof FormData && (globalThis.FormData = class {})
  },
  8862: (kk, Fk) => {
    Fk.NoneSerializer = class {
      setState(kk) {}
      getState() {
        return null
      }
      patch(kk) {}
      teardown() {}
      handshake(kk) {}
    }
  },
  8822: (kk, Fk, Bk) => {
    var Rk = Bk(8783);
    Fk.QE = class {
      setState(kk, Fk) {
        this.Le.decode(kk, Fk)
      }
      getState() {
        return this.state
      }
      patch(kk, Fk) {
        return this.Le.decode(kk, Fk)
      }
      teardown() {
        this.Le.root.clearRefs()
      }
      handshake(kk, Fk) {
        this.state ? (Rk.Reflection.decode(kk, Fk), this.Le = new Rk.Decoder(this.state)) : (this.Le = Rk.Reflection.decode(kk, Fk), this.state = this.Le.state)
      }
    }, Fk.getStateCallbacks = function(kk) {
      try {
        return Rk.getDecoderStateCallbacks(kk.Zm.Le)
      } catch (Fk) {
        return
      }
    }
  },
  8801: (kk, Fk) => {
    const Bk = {};
    Fk.getSerializer = function(kk) {
      const Fk = Bk[kk];
      if (!Fk) throw new Error("missing serializer: " + kk);
      return Fk
    }, Fk.registerSerializer = function(kk, Fk) {
      Bk[kk] = Fk
    }
  },
  8781: (kk, Fk, Bk) => {
    var Rk = Bk(8758),
      tk = Bk(8783);
    Fk.H3TransportTransport = class {
      constructor(kk) {
        this.events = kk, this.isOpen = !1, this.lengthPrefixBuffer = new Uint8Array(9)
      }
      connect(kk) {
        let Fk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        const Bk = Fk.fingerprint && {
          serverCertificateHashes: [{
            algorithm: "sha-256",
            value: new Uint8Array(Fk.fingerprint).buffer
          }]
        } || void 0;
        this.wt = new WebTransport(kk, Bk), this.wt.ready.then((kk => {
          console.log("WebTransport ready!", kk), this.isOpen = !0, this.unreliableReader = this.wt.datagrams.readable.getReader(), this.unreliableWriter = this.wt.datagrams.writable.getWriter();
          this.wt.incomingBidirectionalStreams.getReader().read().then((kk => {
            this.reader = kk.value.readable.getReader(), this.writer = kk.value.writable.getWriter(), this.sendSeatReservation(Fk.room.roomId, Fk.sessionId, Fk.reconnectionToken), this.readIncomingData(), this.readIncomingUnreliableData()
          })).catch((kk => {
            console.error("failed to read incoming stream", kk), console.error("TODO: close the connection")
          }))
        })).catch((kk => {
          console.log("WebTransport not ready!", kk), this._close()
        })), this.wt.closed.then((kk => {
          console.log("WebTransport closed w/ success", kk), this.events.onclose({
            code: kk.closeCode,
            reason: kk.reason
          })
        })).catch((kk => {
          console.log("WebTransport closed w/ error", kk), this.events.onerror(kk), this.events.onclose({
            code: kk.closeCode,
            reason: kk.reason
          })
        })).finally((() => {
          this._close()
        }))
      }
      send(kk) {
        const Fk = tk.encode.number(this.lengthPrefixBuffer, kk.length, {
            offset: 0
          }),
          Bk = new Uint8Array(Fk + kk.length);
        Bk.set(this.lengthPrefixBuffer.subarray(0, Fk), 0), Bk.set(kk, Fk), this.writer.write(Bk)
      }
      sendUnreliable(kk) {
        const Fk = tk.encode.number(this.lengthPrefixBuffer, kk.length, {
            offset: 0
          }),
          Bk = new Uint8Array(Fk + kk.length);
        Bk.set(this.lengthPrefixBuffer.subarray(0, Fk), 0), Bk.set(kk, Fk), this.unreliableWriter.write(Bk)
      }
      close(kk, Fk) {
        try {
          this.wt.close({
            closeCode: kk,
            reason: Fk
          })
        } catch (Bk) {
          console.error(Bk)
        }
      }
      readIncomingData() {
        return Rk.__awaiter(this, void 0, void 0, (function*() {
          let kk;
          for (; this.isOpen;) {
            try {
              kk = yield this.reader.read();
              const Fk = kk.value,
                Bk = {
                  offset: 0
                };
              do {
                const kk = tk.decode.number(Fk, Bk);
                this.events.onmessage({
                  data: Fk.subarray(Bk.offset, Bk.offset + kk)
                }), Bk.offset += kk
              } while (Bk.offset < Fk.length)
            } catch (Fk) {
              -1 === Fk.message.indexOf("session is closed") && console.error("H3Transport: failed to read incoming data", Fk);
              break
            }
            if (kk.done) break
          }
        }))
      }
      readIncomingUnreliableData() {
        return Rk.__awaiter(this, void 0, void 0, (function*() {
          let kk;
          for (; this.isOpen;) {
            try {
              kk = yield this.unreliableReader.read();
              const Fk = kk.value,
                Bk = {
                  offset: 0
                };
              do {
                const kk = tk.decode.number(Fk, Bk);
                this.events.onmessage({
                  data: Fk.subarray(Bk.offset, Bk.offset + kk)
                }), Bk.offset += kk
              } while (Bk.offset < Fk.length)
            } catch (Fk) {
              -1 === Fk.message.indexOf("session is closed") && console.error("H3Transport: failed to read incoming data", Fk);
              break
            }
            if (kk.done) break
          }
        }))
      }
      sendSeatReservation(kk, Fk, Bk) {
        const Rk = {
            offset: 0
          },
          ak = [];
        tk.encode.string(ak, kk, Rk), tk.encode.string(ak, Fk, Rk), Bk && tk.encode.string(ak, Bk, Rk), this.writer.write(new Uint8Array(ak).buffer)
      }
      _close() {
        this.isOpen = !1
      }
    }
  },
  8787: (kk, Fk, Bk) => {
    var Rk = Bk(8794);
    const tk = globalThis.WebSocket || Rk;
    Fk.WebSocketTransport = class {
      constructor(kk) {
        this.events = kk
      }
      send(kk) {
        this.ws.send(kk)
      }
      sendUnreliable(kk) {
        console.warn("colyseus.js: The WebSocket transport does not support unreliable messages")
      }
      connect(kk, Fk) {
        try {
          this.ws = new tk(kk, {
            headers: Fk,
            protocols: this.protocols
          })
        } catch (Bk) {
          this.ws = new tk(kk, this.protocols)
        }
        this.ws.binaryType = "arraybuffer", this.ws.onopen = this.events.onopen, this.ws.onmessage = this.events.onmessage, this.ws.onclose = this.events.onclose, this.ws.onerror = this.events.onerror
      }
      close(kk, Fk) {
        this.ws.close(kk, Fk)
      }
      get isOpen() {
        return this.ws.readyState === tk.OPEN
      }
    }
  },
  8794: kk => {
    kk.exports = function() {
      throw new Error("ws does not work in the browser. Browser clients must use the native WebSocket object")
    }
  },
  8838: (kk, Fk, Bk) => {
    function Rk(kk, Fk) {
      Fk.headers = kk.headers || {}, Fk.statusMessage = kk.statusText, Fk.statusCode = kk.status, Fk.data = kk.response
    }

    function tk(kk, Fk, Bk) {
      return new Promise((function(tk, ak) {
        Bk = Bk || {};
        var Xk, bk, wk, dk = new XMLHttpRequest,
          sk = Bk.body,
          Vk = Bk.headers || {};
        for (Xk in Bk.timeout && (dk.timeout = Bk.timeout), dk.ontimeout = dk.onerror = function(kk) {
            kk.timeout = "timeout" == kk.type, ak(kk)
          }, dk.onabort = function(kk) {
            kk.aborted = !0, ak(kk)
          }, dk.open(kk, Fk.href || Fk), dk.onload = function() {
            for (wk = dk.getAllResponseHeaders().trim().split(/[\r\n]+/), Rk(dk, dk); bk = wk.shift();) bk = bk.split(": "), dk.headers[bk.shift().toLowerCase()] = bk.join(": ");
            if ((bk = dk.headers["content-type"]) && ~bk.indexOf("application/json")) try {
              dk.data = JSON.parse(dk.data, Bk.reviver)
            } catch (kk) {
              return Rk(dk, kk), ak(kk)
            }(dk.status >= 400 ? ak : tk)(dk)
          }, typeof FormData < "u" && sk instanceof FormData || sk && "object" == typeof sk && (Vk["content-type"] = "application/json", sk = JSON.stringify(sk)), dk.withCredentials = !!Bk.withCredentials, Vk) dk.setRequestHeader(Xk, Vk[Xk]);
        dk.send(sk), Bk.signal && Bk.signal.addEventListener("abort", (function() {
          dk.abort()
        }))
      }))
    }
    Bk.r(Fk), Bk.d(Fk, {
      del: () => wk,
      get: () => ak,
      patch: () => bk,
      post: () => Xk,
      put: () => dk,
      send: () => tk
    });
    var ak = tk.bind(tk, "GET"),
      Xk = tk.bind(tk, "POST"),
      bk = tk.bind(tk, "PATCH"),
      wk = tk.bind(tk, "DELETE"),
      dk = tk.bind(tk, "PUT")
  },
  8825: (kk, Fk, Bk) => {
    var Rk, tk, ak;
    Bk.r(Fk), Bk.d(Fk, {
      ALWAYS: () => xF,
      C1: () => Yk,
      DECIMAL_FIT: () => lF,
      DECIMAL_ROUND: () => jF,
      Decoder: () => dF,
      Encoder: () => pF,
      FLOAT32_OPTIONS: () => eF,
      NEVER: () => KF,
      Packr: () => GF,
      RESERVE_START_SPACE: () => QF,
      RESET_BUFFER_MODE: () => IF,
      REUSE_BUFFER_MODE: () => nF,
      Unpackr: () => Hk,
      addExtension: () => PF,
      clearSource: () => bF,
      decode: () => AF,
      decodeIter: () => kB,
      encode: () => ZF,
      encodeIter: () => FB,
      isNativeAccelerationEnabled: () => hk,
      mapsAsObjects: () => RB,
      pack: () => CF,
      roundFloat32: () => iF,
      unpack: () => VF,
      unpackMultiple: () => JF,
      useRecords: () => BB
    });
    try {
      Rk = new TextDecoder
    } catch (tB) {}
    var Xk = 0;
    const bk = [];
    var wk, dk, sk, Vk, Jk, Ak = bk,
      ek = 0,
      yk = {},
      fk = 0,
      mk = 0,
      Wk = [],
      vk = {
        useRecords: !1,
        mapsAsObjects: !0
      };
    class ik {}
    const Yk = new ik;
    Yk.name = "MessagePack 0xC1";
    var Lk, Ok, Ek, Sk = !1,
      Nk = 2;
    try {
      new Function("")
    } catch (tB) {
      Nk = 1 / 0
    }
    class Hk {
      constructor(kk) {
        kk && (!1 === kk.useRecords && void 0 === kk.mapsAsObjects && (kk.mapsAsObjects = !0), kk.sequential && !1 !== kk.trusted && (kk.trusted = !0, kk.structures || 0 == kk.useRecords || (kk.structures = [], kk.maxSharedStructures || (kk.maxSharedStructures = 0))), kk.structures ? kk.structures.sharedLength = kk.structures.length : kk.getStructures && ((kk.structures = []).uninitialized = !0, kk.structures.sharedLength = 0), kk.int64AsNumber && (kk.int64AsType = "number")), Object.assign(this, kk)
      }
      unpack(kk, Fk) {
        if (tk) return XF((() => (bF(), this ? this.unpack(kk, Fk) : Hk.prototype.unpack.call(vk, kk, Fk))));
        kk.buffer || kk.constructor !== ArrayBuffer || (kk = "undefined" !== typeof Buffer ? Buffer.from(kk) : new Uint8Array(kk)), "object" === typeof Fk ? (ak = Fk.end || kk.length, Xk = Fk.start || 0) : (Xk = 0, ak = Fk > -1 ? Fk : kk.length), ek = 0, mk = 0, dk = null, Ak = bk, sk = null, tk = kk;
        try {
          Jk = kk.dataView || (kk.dataView = new DataView(kk.buffer, kk.byteOffset, kk.byteLength))
        } catch (tB) {
          if (tk = null, kk instanceof Uint8Array) throw tB;
          throw new Error("Source must be a Uint8Array or Buffer but was a " + (kk && "object" == typeof kk ? kk.constructor.name : typeof kk))
        }
        if (this instanceof Hk) {
          if (yk = this, this.structures) return wk = this.structures, uk(Fk);
          (!wk || wk.length > 0) && (wk = [])
        } else yk = vk, (!wk || wk.length > 0) && (wk = []);
        return uk(Fk)
      }
      unpackMultiple(kk, Fk) {
        let Bk, Rk = 0;
        try {
          Sk = !0;
          let tk = kk.length,
            ak = this ? this.unpack(kk, tk) : sF.unpack(kk, tk);
          if (!Fk) {
            for (Bk = [ak]; Xk < tk;) Rk = Xk, Bk.push(uk());
            return Bk
          }
          if (!1 === Fk(ak, Rk, Xk)) return;
          for (; Xk < tk;)
            if (Rk = Xk, !1 === Fk(uk(), Rk, Xk)) return
        } catch (tB) {
          throw tB.lastPosition = Rk, tB.values = Bk, tB
        } finally {
          Sk = !1, bF()
        }
      }
      _mergeStructures(kk, Fk) {
        Ok && (kk = Ok.call(this, kk)), kk = kk || [], Object.isFrozen(kk) && (kk = kk.map((kk => kk.slice(0))));
        for (let Bk = 0, Rk = kk.length; Bk < Rk; Bk++) {
          let Fk = kk[Bk];
          Fk && (Fk.isShared = !0, Bk >= 32 && (Fk.highByte = Bk - 32 >> 5))
        }
        kk.sharedLength = kk.length;
        for (let Bk in Fk || [])
          if (Bk >= 0) {
            let Rk = kk[Bk],
              tk = Fk[Bk];
            tk && (Rk && ((kk.restoreStructures || (kk.restoreStructures = []))[Bk] = Rk), kk[Bk] = tk)
          } return this.structures = kk
      }
      decode(kk, Fk) {
        return this.unpack(kk, Fk)
      }
    }

    function uk(kk) {
      try {
        if (!yk.trusted && !Sk) {
          let kk = wk.sharedLength || 0;
          kk < wk.length && (wk.length = kk)
        }
        let Fk;
        if (yk.randomAccessStructure && tk[Xk] < 64 && tk[Xk] >= 32 && Lk ? (Fk = Lk(tk, Xk, ak, yk), tk = null, kk && kk.lazy || !Fk || (Fk = Fk.toJSON()), Xk = ak) : Fk = gk(), sk && (Xk = sk.postBundlePosition, sk = null), Sk && (wk.restoreStructures = null), Xk == ak) wk && wk.restoreStructures && Mk(), wk = null, tk = null, Vk && (Vk = null);
        else {
          if (Xk > ak) throw new Error("Unexpected end of MessagePack data");
          if (!Sk) {
            let kk;
            try {
              kk = JSON.stringify(Fk, ((kk, Fk) => "bigint" === typeof Fk ? `${Fk}n` : Fk)).slice(0, 100)
            } catch (tB) {
              kk = "(JSON view not available " + tB + ")"
            }
            throw new Error("Data read, but end of buffer not reached " + kk)
          }
        }
        return Fk
      } catch (tB) {
        throw wk && wk.restoreStructures && Mk(), bF(), (tB instanceof RangeError || tB.message.startsWith("Unexpected end of buffer") || Xk > ak) && (tB.incomplete = !0), tB
      }
    }

    function Mk() {
      for (let kk in wk.restoreStructures) wk[kk] = wk.restoreStructures[kk];
      wk.restoreStructures = null
    }

    function gk() {
      let kk = tk[Xk++];
      if (kk < 160) {
        if (kk < 128) {
          if (kk < 64) return kk;
          {
            let Fk = wk[63 & kk] || yk.getStructures && Tk()[63 & kk];
            return Fk ? (Fk.read || (Fk.read = ck(Fk, 63 & kk)), Fk.read()) : kk
          }
        }
        if (kk < 144) {
          if (kk -= 128, yk.mapsAsObjects) {
            let Fk = {};
            for (let Bk = 0; Bk < kk; Bk++) {
              let kk = Qk();
              "__proto__" === kk && (kk = "__proto_"), Fk[kk] = gk()
            }
            return Fk
          } {
            let Fk = new Map;
            for (let Bk = 0; Bk < kk; Bk++) Fk.set(gk(), gk());
            return Fk
          }
        } {
          kk -= 144;
          let Fk = new Array(kk);
          for (let Bk = 0; Bk < kk; Bk++) Fk[Bk] = gk();
          return yk.freezeData ? Object.freeze(Fk) : Fk
        }
      }
      if (kk < 192) {
        let Fk = kk - 160;
        if (mk >= Xk) return dk.slice(Xk - fk, (Xk += Fk) - fk);
        if (0 == mk && ak < 140) {
          let kk = Fk < 16 ? xk(Fk) : Kk(Fk);
          if (null != kk) return kk
        }
        return rk(Fk)
      } {
        let Fk;
        switch (kk) {
          case 192:
            return null;
          case 193:
            return sk ? (Fk = gk(), Fk > 0 ? sk[1].slice(sk.position1, sk.position1 += Fk) : sk[0].slice(sk.position0, sk.position0 -= Fk)) : Yk;
          case 194:
            return !1;
          case 195:
            return !0;
          case 196:
            if (Fk = tk[Xk++], void 0 === Fk) throw new Error("Unexpected end of buffer");
            return lk(Fk);
          case 197:
            return Fk = Jk.getUint16(Xk), Xk += 2, lk(Fk);
          case 198:
            return Fk = Jk.getUint32(Xk), Xk += 4, lk(Fk);
          case 199:
            return nk(tk[Xk++]);
          case 200:
            return Fk = Jk.getUint16(Xk), Xk += 2, nk(Fk);
          case 201:
            return Fk = Jk.getUint32(Xk), Xk += 4, nk(Fk);
          case 202:
            if (Fk = Jk.getFloat32(Xk), yk.useFloat32 > 2) {
              let kk = wF[(127 & tk[Xk]) << 1 | tk[Xk + 1] >> 7];
              return Xk += 4, (kk * Fk + (Fk > 0 ? .5 : -.5) | 0) / kk
            }
            return Xk += 4, Fk;
          case 203:
            return Fk = Jk.getFloat64(Xk), Xk += 8, Fk;
          case 204:
            return tk[Xk++];
          case 205:
            return Fk = Jk.getUint16(Xk), Xk += 2, Fk;
          case 206:
            return Fk = Jk.getUint32(Xk), Xk += 4, Fk;
          case 207:
            return "number" === yk.int64AsType ? (Fk = 4294967296 * Jk.getUint32(Xk), Fk += Jk.getUint32(Xk + 4)) : "string" === yk.int64AsType ? Fk = Jk.getBigUint64(Xk).toString() : "auto" === yk.int64AsType ? (Fk = Jk.getBigUint64(Xk), Fk <= BigInt(2) << BigInt(52) && (Fk = Number(Fk))) : Fk = Jk.getBigUint64(Xk), Xk += 8, Fk;
          case 208:
            return Jk.getInt8(Xk++);
          case 209:
            return Fk = Jk.getInt16(Xk), Xk += 2, Fk;
          case 210:
            return Fk = Jk.getInt32(Xk), Xk += 4, Fk;
          case 211:
            return "number" === yk.int64AsType ? (Fk = 4294967296 * Jk.getInt32(Xk), Fk += Jk.getUint32(Xk + 4)) : "string" === yk.int64AsType ? Fk = Jk.getBigInt64(Xk).toString() : "auto" === yk.int64AsType ? (Fk = Jk.getBigInt64(Xk), Fk >= BigInt(-2) << BigInt(52) && Fk <= BigInt(2) << BigInt(52) && (Fk = Number(Fk))) : Fk = Jk.getBigInt64(Xk), Xk += 8, Fk;
          case 212:
            if (Fk = tk[Xk++], 114 == Fk) return FF(63 & tk[Xk++]);
            {
              let kk = Wk[Fk];
              if (kk) return kk.read ? (Xk++, kk.read(gk())) : kk.noBuffer ? (Xk++, kk()) : kk(tk.subarray(Xk, ++Xk));
              throw new Error("Unknown extension " + Fk)
            }
          case 213:
            return Fk = tk[Xk], 114 == Fk ? (Xk++, FF(63 & tk[Xk++], tk[Xk++])) : nk(2);
          case 214:
            return nk(4);
          case 215:
            return nk(8);
          case 216:
            return nk(16);
          case 217:
            return Fk = tk[Xk++], mk >= Xk ? dk.slice(Xk - fk, (Xk += Fk) - fk) : Dk(Fk);
          case 218:
            return Fk = Jk.getUint16(Xk), mk >= (Xk += 2) ? dk.slice(Xk - fk, (Xk += Fk) - fk) : zk(Fk);
          case 219:
            return Fk = Jk.getUint32(Xk), mk >= (Xk += 4) ? dk.slice(Xk - fk, (Xk += Fk) - fk) : Pk(Fk);
          case 220:
            return Fk = Jk.getUint16(Xk), Xk += 2, Ck(Fk);
          case 221:
            return Fk = Jk.getUint32(Xk), Xk += 4, Ck(Fk);
          case 222:
            return Fk = Jk.getUint16(Xk), Xk += 2, Zk(Fk);
          case 223:
            return Fk = Jk.getUint32(Xk), Xk += 4, Zk(Fk);
          default:
            if (kk >= 224) return kk - 256;
            if (void 0 === kk) {
              let kk = new Error("Unexpected end of MessagePack data");
              throw kk.incomplete = !0, kk
            }
            throw new Error("Unknown MessagePack token " + kk)
        }
      }
    }
    const Uk = /^[a-zA-Z_$][a-zA-Z\d_$]*$/;

    function ck(kk, Fk) {
      function Bk() {
        if (Bk.count++ > Nk) {
          let Bk = kk.read = new Function("r", "return function(){return " + (yk.freezeData ? "Object.freeze" : "") + "({" + kk.map((kk => "__proto__" === kk ? "__proto_:r()" : Uk.test(kk) ? kk + ":r()" : "[" + JSON.stringify(kk) + "]:r()")).join(",") + "})}")(gk);
          return 0 === kk.highByte && (kk.read = Gk(Fk, kk.read)), Bk()
        }
        let Rk = {};
        for (let Fk = 0, Bk = kk.length; Fk < Bk; Fk++) {
          let Bk = kk[Fk];
          "__proto__" === Bk && (Bk = "__proto_"), Rk[Bk] = gk()
        }
        return yk.freezeData ? Object.freeze(Rk) : Rk
      }
      return Bk.count = 0, 0 === kk.highByte ? Gk(Fk, Bk) : Bk
    }
    const Gk = (kk, Fk) => function() {
      let Bk = tk[Xk++];
      if (0 === Bk) return Fk();
      let Rk = kk < 32 ? -(kk + (Bk << 5)) : kk + (Bk << 5),
        ak = wk[Rk] || Tk()[Rk];
      if (!ak) throw new Error("Record id is not defined for " + Rk);
      return ak.read || (ak.read = ck(ak, kk)), ak.read()
    };

    function Tk() {
      let kk = XF((() => (tk = null, yk.getStructures())));
      return wk = yk._mergeStructures(kk, wk)
    }
    var rk = qk,
      Dk = qk,
      zk = qk,
      Pk = qk;
    let hk = !1;

    function qk(kk) {
      let Fk;
      if (kk < 16 && (Fk = xk(kk))) return Fk;
      if (kk > 64 && Rk) return Rk.decode(tk.subarray(Xk, Xk += kk));
      const Bk = Xk + kk,
        ak = [];
      for (Fk = ""; Xk < Bk;) {
        const kk = tk[Xk++];
        if (0 === (128 & kk)) ak.push(kk);
        else if (192 === (224 & kk)) {
          const Fk = 63 & tk[Xk++];
          ak.push((31 & kk) << 6 | Fk)
        } else if (224 === (240 & kk)) {
          const Fk = 63 & tk[Xk++],
            Bk = 63 & tk[Xk++];
          ak.push((31 & kk) << 12 | Fk << 6 | Bk)
        } else if (240 === (248 & kk)) {
          let Fk = (7 & kk) << 18 | (63 & tk[Xk++]) << 12 | (63 & tk[Xk++]) << 6 | 63 & tk[Xk++];
          Fk > 65535 && (Fk -= 65536, ak.push(Fk >>> 10 & 1023 | 55296), Fk = 56320 | 1023 & Fk), ak.push(Fk)
        } else ak.push(kk);
        ak.length >= 4096 && (Fk += pk.apply(String, ak), ak.length = 0)
      }
      return ak.length > 0 && (Fk += pk.apply(String, ak)), Fk
    }

    function Ck(kk) {
      let Fk = new Array(kk);
      for (let Bk = 0; Bk < kk; Bk++) Fk[Bk] = gk();
      return yk.freezeData ? Object.freeze(Fk) : Fk
    }

    function Zk(kk) {
      if (yk.mapsAsObjects) {
        let Fk = {};
        for (let Bk = 0; Bk < kk; Bk++) {
          let kk = Qk();
          "__proto__" === kk && (kk = "__proto_"), Fk[kk] = gk()
        }
        return Fk
      } {
        let Fk = new Map;
        for (let Bk = 0; Bk < kk; Bk++) Fk.set(gk(), gk());
        return Fk
      }
    }
    var pk = String.fromCharCode;

    function Kk(kk) {
      let Fk = Xk,
        Bk = new Array(kk);
      for (let Rk = 0; Rk < kk; Rk++) {
        const kk = tk[Xk++];
        if ((128 & kk) > 0) return void(Xk = Fk);
        Bk[Rk] = kk
      }
      return pk.apply(String, Bk)
    }

    function xk(kk) {
      if (kk < 4) {
        if (kk < 2) {
          if (0 === kk) return "";
          {
            let kk = tk[Xk++];
            return (128 & kk) > 1 ? void(Xk -= 1) : pk(kk)
          }
        } {
          let Fk = tk[Xk++],
            Bk = tk[Xk++];
          if ((128 & Fk) > 0 || (128 & Bk) > 0) return void(Xk -= 2);
          if (kk < 3) return pk(Fk, Bk);
          let Rk = tk[Xk++];
          return (128 & Rk) > 0 ? void(Xk -= 3) : pk(Fk, Bk, Rk)
        }
      } {
        let Fk = tk[Xk++],
          Bk = tk[Xk++],
          Rk = tk[Xk++],
          ak = tk[Xk++];
        if ((128 & Fk) > 0 || (128 & Bk) > 0 || (128 & Rk) > 0 || (128 & ak) > 0) return void(Xk -= 4);
        if (kk < 6) {
          if (4 === kk) return pk(Fk, Bk, Rk, ak);
          {
            let kk = tk[Xk++];
            return (128 & kk) > 0 ? void(Xk -= 5) : pk(Fk, Bk, Rk, ak, kk)
          }
        }
        if (kk < 8) {
          let bk = tk[Xk++],
            wk = tk[Xk++];
          if ((128 & bk) > 0 || (128 & wk) > 0) return void(Xk -= 6);
          if (kk < 7) return pk(Fk, Bk, Rk, ak, bk, wk);
          let dk = tk[Xk++];
          return (128 & dk) > 0 ? void(Xk -= 7) : pk(Fk, Bk, Rk, ak, bk, wk, dk)
        } {
          let bk = tk[Xk++],
            wk = tk[Xk++],
            dk = tk[Xk++],
            sk = tk[Xk++];
          if ((128 & bk) > 0 || (128 & wk) > 0 || (128 & dk) > 0 || (128 & sk) > 0) return void(Xk -= 8);
          if (kk < 10) {
            if (8 === kk) return pk(Fk, Bk, Rk, ak, bk, wk, dk, sk);
            {
              let kk = tk[Xk++];
              return (128 & kk) > 0 ? void(Xk -= 9) : pk(Fk, Bk, Rk, ak, bk, wk, dk, sk, kk)
            }
          }
          if (kk < 12) {
            let Vk = tk[Xk++],
              Jk = tk[Xk++];
            if ((128 & Vk) > 0 || (128 & Jk) > 0) return void(Xk -= 10);
            if (kk < 11) return pk(Fk, Bk, Rk, ak, bk, wk, dk, sk, Vk, Jk);
            let Ak = tk[Xk++];
            return (128 & Ak) > 0 ? void(Xk -= 11) : pk(Fk, Bk, Rk, ak, bk, wk, dk, sk, Vk, Jk, Ak)
          } {
            let Vk = tk[Xk++],
              Jk = tk[Xk++],
              Ak = tk[Xk++],
              ek = tk[Xk++];
            if ((128 & Vk) > 0 || (128 & Jk) > 0 || (128 & Ak) > 0 || (128 & ek) > 0) return void(Xk -= 12);
            if (kk < 14) {
              if (12 === kk) return pk(Fk, Bk, Rk, ak, bk, wk, dk, sk, Vk, Jk, Ak, ek);
              {
                let kk = tk[Xk++];
                return (128 & kk) > 0 ? void(Xk -= 13) : pk(Fk, Bk, Rk, ak, bk, wk, dk, sk, Vk, Jk, Ak, ek, kk)
              }
            } {
              let yk = tk[Xk++],
                fk = tk[Xk++];
              if ((128 & yk) > 0 || (128 & fk) > 0) return void(Xk -= 14);
              if (kk < 15) return pk(Fk, Bk, Rk, ak, bk, wk, dk, sk, Vk, Jk, Ak, ek, yk, fk);
              let mk = tk[Xk++];
              return (128 & mk) > 0 ? void(Xk -= 15) : pk(Fk, Bk, Rk, ak, bk, wk, dk, sk, Vk, Jk, Ak, ek, yk, fk, mk)
            }
          }
        }
      }
    }

    function jk() {
      let kk, Fk = tk[Xk++];
      if (Fk < 192) kk = Fk - 160;
      else switch (Fk) {
        case 217:
          kk = tk[Xk++];
          break;
        case 218:
          kk = Jk.getUint16(Xk), Xk += 2;
          break;
        case 219:
          kk = Jk.getUint32(Xk), Xk += 4;
          break;
        default:
          throw new Error("Expected string")
      }
      return qk(kk)
    }

    function lk(kk) {
      return yk.copyBuffers ? Uint8Array.prototype.slice.call(tk, Xk, Xk += kk) : tk.subarray(Xk, Xk += kk)
    }

    function nk(kk) {
      let Fk = tk[Xk++];
      if (Wk[Fk]) {
        let Bk;
        return Wk[Fk](tk.subarray(Xk, Bk = Xk += kk), (kk => {
          Xk = kk;
          try {
            return gk()
          } finally {
            Xk = Bk
          }
        }))
      }
      throw new Error("Unknown extension type " + Fk)
    }
    var Ik = new Array(4096);

    function Qk() {
      let kk = tk[Xk++];
      if (!(kk >= 160 && kk < 192)) return Xk--, kF(gk());
      if (kk -= 160, mk >= Xk) return dk.slice(Xk - fk, (Xk += kk) - fk);
      if (!(0 == mk && ak < 180)) return rk(kk);
      let Fk, Bk = 4095 & (kk << 5 ^ (kk > 1 ? Jk.getUint16(Xk) : kk > 0 ? tk[Xk] : 0)),
        Rk = Ik[Bk],
        bk = Xk,
        wk = Xk + kk - 3,
        sk = 0;
      if (Rk && Rk.bytes == kk) {
        for (; bk < wk;) {
          if (Fk = Jk.getUint32(bk), Fk != Rk[sk++]) {
            bk = 1879048192;
            break
          }
          bk += 4
        }
        for (wk += 3; bk < wk;)
          if (Fk = tk[bk++], Fk != Rk[sk++]) {
            bk = 1879048192;
            break
          } if (bk === wk) return Xk = bk, Rk.string;
        wk -= 3, bk = Xk
      }
      for (Rk = [], Ik[Bk] = Rk, Rk.bytes = kk; bk < wk;) Fk = Jk.getUint32(bk), Rk.push(Fk), bk += 4;
      for (wk += 3; bk < wk;) Fk = tk[bk++], Rk.push(Fk);
      let Vk = kk < 16 ? xk(kk) : Kk(kk);
      return Rk.string = null != Vk ? Vk : rk(kk)
    }

    function kF(kk) {
      if ("string" === typeof kk) return kk;
      if ("number" === typeof kk || "boolean" === typeof kk || "bigint" === typeof kk) return kk.toString();
      if (null == kk) return kk + "";
      if (yk.allowArraysInMapKeys && Array.isArray(kk) && kk.flat().every((kk => ["string", "number", "boolean", "bigint"].includes(typeof kk)))) return kk.flat().toString();
      throw new Error("Invalid property type for record: " + typeof kk)
    }
    const FF = (kk, Fk) => {
      let Bk = gk().map(kF),
        Rk = kk;
      void 0 !== Fk && (kk = kk < 32 ? -((Fk << 5) + kk) : (Fk << 5) + kk, Bk.highByte = Fk);
      let tk = wk[kk];
      return tk && (tk.isShared || Sk) && ((wk.restoreStructures || (wk.restoreStructures = []))[kk] = tk), wk[kk] = Bk, Bk.read = ck(Bk, Rk), Bk.read()
    };
    Wk[0] = () => {}, Wk[0].noBuffer = !0, Wk[66] = kk => {
      let Fk = kk.length,
        Bk = BigInt(128 & kk[0] ? kk[0] - 256 : kk[0]);
      for (let Rk = 1; Rk < Fk; Rk++) Bk <<= BigInt(8), Bk += BigInt(kk[Rk]);
      return Bk
    };
    let BF = {
      Error: Error,
      TypeError: TypeError,
      ReferenceError: ReferenceError
    };
    Wk[101] = () => {
      let kk = gk();
      return (BF[kk[0]] || Error)(kk[1], {
        cause: kk[2]
      })
    }, Wk[105] = kk => {
      if (!1 === yk.structuredClone) throw new Error("Structured clone extension is disabled");
      let Fk = Jk.getUint32(Xk - 4);
      Vk || (Vk = new Map);
      let Bk, Rk = tk[Xk];
      Bk = Rk >= 144 && Rk < 160 || 220 == Rk || 221 == Rk ? [] : {};
      let ak = {
        target: Bk
      };
      Vk.set(Fk, ak);
      let bk = gk();
      return ak.used ? Object.assign(Bk, bk) : (ak.target = bk, bk)
    }, Wk[112] = kk => {
      if (!1 === yk.structuredClone) throw new Error("Structured clone extension is disabled");
      let Fk = Jk.getUint32(Xk - 4),
        Bk = Vk.get(Fk);
      return Bk.used = !0, Bk.target
    }, Wk[115] = () => new Set(gk());
    const RF = ["Int8", "Uint8", "Uint8Clamped", "Int16", "Uint16", "Int32", "Uint32", "Float32", "Float64", "BigInt64", "BigUint64"].map((kk => kk + "Array"));
    let tF = "object" === typeof globalThis ? globalThis : window;
    Wk[116] = kk => {
      let Fk = kk[0],
        Bk = RF[Fk];
      if (!Bk) {
        if (16 === Fk) {
          let Fk = new ArrayBuffer(kk.length - 1);
          return new Uint8Array(Fk).set(kk.subarray(1)), Fk
        }
        throw new Error("Could not find typed array for code " + Fk)
      }
      return new tF[Bk](Uint8Array.prototype.slice.call(kk, 1).buffer)
    }, Wk[120] = () => {
      let kk = gk();
      return new RegExp(kk[0], kk[1])
    };
    const aF = [];

    function XF(kk) {
      Ek && Ek();
      let Fk = ak,
        Bk = Xk,
        Rk = ek,
        bk = fk,
        Wk = mk,
        vk = dk,
        ik = Ak,
        Yk = Vk,
        Lk = sk,
        Ok = new Uint8Array(tk.slice(0, ak)),
        Nk = wk,
        Hk = wk.slice(0, wk.length),
        uk = yk,
        Mk = Sk,
        gk = kk();
      return ak = Fk, Xk = Bk, ek = Rk, fk = bk, mk = Wk, dk = vk, Ak = ik, Vk = Yk, sk = Lk, tk = Ok, Sk = Mk, (wk = Nk).splice(0, wk.length, ...Hk), yk = uk, Jk = new DataView(tk.buffer, tk.byteOffset, tk.byteLength), gk
    }

    function bF() {
      tk = null, Vk = null, wk = null
    }
    Wk[98] = kk => {
      let Fk = (kk[0] << 24) + (kk[1] << 16) + (kk[2] << 8) + kk[3],
        Bk = Xk;
      return Xk += Fk - kk.length, sk = aF, (sk = [jk(), jk()]).position0 = 0, sk.position1 = 0, sk.postBundlePosition = Xk, Xk = Bk, gk()
    }, Wk[255] = kk => 4 == kk.length ? new Date(1e3 * (16777216 * kk[0] + (kk[1] << 16) + (kk[2] << 8) + kk[3])) : 8 == kk.length ? new Date(((kk[0] << 22) + (kk[1] << 14) + (kk[2] << 6) + (kk[3] >> 2)) / 1e6 + 1e3 * (4294967296 * (3 & kk[3]) + 16777216 * kk[4] + (kk[5] << 16) + (kk[6] << 8) + kk[7])) : 12 == kk.length ? new Date(((kk[0] << 24) + (kk[1] << 16) + (kk[2] << 8) + kk[3]) / 1e6 + 1e3 * ((128 & kk[4] ? -281474976710656 : 0) + 1099511627776 * kk[6] + 4294967296 * kk[7] + 16777216 * kk[8] + (kk[9] << 16) + (kk[10] << 8) + kk[11])) : new Date("invalid");
    const wF = new Array(147);
    for (let aB = 0; aB < 256; aB++) wF[aB] = +("1e" + Math.floor(45.15 - .30103 * aB));
    const dF = Hk;
    var sF = new Hk({
      useRecords: !1
    });
    const VF = sF.unpack,
      JF = sF.unpackMultiple,
      AF = sF.unpack,
      eF = {
        NEVER: 0,
        ALWAYS: 1,
        DECIMAL_ROUND: 3,
        DECIMAL_FIT: 4
      };
    let yF, fF, mF, WF = new Float32Array(1),
      vF = new Uint8Array(WF.buffer, 0, 4);

    function iF(kk) {
      WF[0] = kk;
      let Fk = wF[(127 & vF[3]) << 1 | vF[2] >> 7];
      return (Fk * kk + (kk > 0 ? .5 : -.5) | 0) / Fk
    }
    try {
      yF = new TextEncoder
    } catch (tB) {}
    const YF = "undefined" !== typeof Buffer,
      oF = YF ? function(kk) {
        return Buffer.allocUnsafeSlow(kk)
      } : Uint8Array,
      LF = YF ? Buffer : Uint8Array,
      OF = YF ? 4294967296 : 2144337920;
    let EF, SF, NF, HF, uF, MF = 0,
      gF = null;
    const UF = /[\u0080-\uFFFF]/,
      cF = Symbol("record-id");
    class GF extends Hk {
      constructor(kk) {
        let Fk, Bk, Rk, tk;
        super(kk), this.offset = 0;
        let ak = LF.prototype.utf8Write ? function(kk, Fk) {
            return EF.utf8Write(kk, Fk, EF.byteLength - Fk)
          } : !(!yF || !yF.encodeInto) && function(kk, Fk) {
            return yF.encodeInto(kk, EF.subarray(Fk)).written
          },
          Xk = this;
        kk || (kk = {});
        let bk = kk && kk.sequential,
          wk = kk.structures || kk.saveStructures,
          dk = kk.maxSharedStructures;
        if (null == dk && (dk = wk ? 32 : 0), dk > 8160) throw new Error("Maximum maxSharedStructure is 8160");
        kk.structuredClone && void 0 == kk.moreTypes && (this.moreTypes = !0);
        let sk = kk.maxOwnStructures;
        null == sk && (sk = wk ? 32 : 64), this.structures || 0 == kk.useRecords || (this.structures = []);
        let Vk = dk > 32 || sk + dk > 64,
          Jk = dk + 64,
          Ak = dk + sk + 64;
        if (Ak > 8256) throw new Error("Maximum maxSharedStructure + maxOwnStructure is 8192");
        let ek = [],
          yk = 0,
          fk = 0;
        this.pack = this.encode = function(kk, ak) {
          if (EF || (EF = new oF(8192), NF = EF.dataView || (EF.dataView = new DataView(EF.buffer, 0, 8192)), MF = 0), HF = EF.length - 10, HF - MF < 2048 ? (EF = new oF(EF.length), NF = EF.dataView || (EF.dataView = new DataView(EF.buffer, 0, EF.length)), HF = EF.length - 10, MF = 0) : MF = MF + 7 & 2147483640, Fk = MF, ak & QF && (MF += 255 & ak), tk = Xk.structuredClone ? new Map : null, Xk.bundleStrings && "string" !== typeof kk ? (gF = [], gF.size = 1 / 0) : gF = null, Rk = Xk.structures, Rk) {
            Rk.uninitialized && (Rk = Xk._mergeStructures(Xk.getStructures()));
            let kk = Rk.sharedLength || 0;
            if (kk > dk) throw new Error("Shared structures is larger than maximum shared structures, try increasing maxSharedStructures to " + Rk.sharedLength);
            if (!Rk.transitions) {
              Rk.transitions = Object.create(null);
              for (let Fk = 0; Fk < kk; Fk++) {
                let kk = Rk[Fk];
                if (!kk) continue;
                let Bk, tk = Rk.transitions;
                for (let Fk = 0, Rk = kk.length; Fk < Rk; Fk++) {
                  let Rk = kk[Fk];
                  Bk = tk[Rk], Bk || (Bk = tk[Rk] = Object.create(null)), tk = Bk
                }
                tk[cF] = Fk + 64
              }
              this.lastNamedStructuresLength = kk
            }
            bk || (Rk.nextId = kk + 64)
          }
          let wk;
          Bk && (Bk = !1);
          try {
            Xk.randomAccessStructure && kk && kk.constructor && kk.constructor === Object ? Hk(kk) : vk(kk);
            let Bk = gF;
            if (gF && zF(Fk, vk, 0), tk && tk.idsToInsert) {
              let kk = tk.idsToInsert.sort(((kk, Fk) => kk.offset > Fk.offset ? 1 : -1)),
                Rk = kk.length,
                ak = -1;
              for (; Bk && Rk > 0;) {
                let tk = kk[--Rk].offset + Fk;
                tk < Bk.stringsPosition + Fk && -1 === ak && (ak = 0), tk > Bk.position + Fk ? ak >= 0 && (ak += 6) : (ak >= 0 && (NF.setUint32(Bk.position + Fk, NF.getUint32(Bk.position + Fk) + ak), ak = -1), Bk = Bk.previous, Rk++)
              }
              ak >= 0 && Bk && NF.setUint32(Bk.position + Fk, NF.getUint32(Bk.position + Fk) + ak), MF += 6 * kk.length, MF > HF && Ek(MF), Xk.offset = MF;
              let bk = function(kk, Fk) {
                let Bk, Rk = 6 * Fk.length,
                  tk = kk.length - Rk;
                for (; Bk = Fk.pop();) {
                  let Fk = Bk.offset,
                    ak = Bk.id;
                  kk.copyWithin(Fk + Rk, Fk, tk), Rk -= 6;
                  let Xk = Fk + Rk;
                  kk[Xk++] = 214, kk[Xk++] = 105, kk[Xk++] = ak >> 24, kk[Xk++] = ak >> 16 & 255, kk[Xk++] = ak >> 8 & 255, kk[Xk++] = 255 & ak, tk = Fk
                }
                return kk
              }(EF.subarray(Fk, MF), kk);
              return tk = null, bk
            }
            return Xk.offset = MF, ak & nF ? (EF.start = Fk, EF.end = MF, EF) : EF.subarray(Fk, MF)
          } catch (tB) {
            throw wk = tB, tB
          } finally {
            if (Rk && (mk(), Bk && Xk.saveStructures)) {
              let Bk = Rk.sharedLength || 0,
                tk = EF.subarray(Fk, MF),
                bk = hF(Rk, Xk);
              if (!wk) return !1 === Xk.saveStructures(bk, bk.isCompatible) ? Xk.pack(kk, ak) : (Xk.lastNamedStructuresLength = Bk, EF.length > 1073741824 && (EF = null), tk)
            }
            EF.length > 1073741824 && (EF = null), ak & IF && (MF = Fk)
          }
        };
        const mk = () => {
            fk < 10 && fk++;
            let kk = Rk.sharedLength || 0;
            if (Rk.length > kk && !bk && (Rk.length = kk), yk > 1e4) Rk.transitions = null, fk = 0, yk = 0, ek.length > 0 && (ek = []);
            else if (ek.length > 0 && !bk) {
              for (let kk = 0, Fk = ek.length; kk < Fk; kk++) ek[kk][cF] = 0;
              ek = []
            }
          },
          Wk = kk => {
            var Fk = kk.length;
            Fk < 16 ? EF[MF++] = 144 | Fk : Fk < 65536 ? (EF[MF++] = 220, EF[MF++] = Fk >> 8, EF[MF++] = 255 & Fk) : (EF[MF++] = 221, NF.setUint32(MF, Fk), MF += 4);
            for (let Bk = 0; Bk < Fk; Bk++) vk(kk[Bk])
          },
          vk = kk => {
            MF > HF && (EF = Ek(MF));
            var Bk, Rk = typeof kk;
            if ("string" === Rk) {
              let Rk, tk = kk.length;
              if (gF && tk >= 4 && tk < 4096) {
                if ((gF.size += tk) > 21760) {
                  let kk, Bk, Rk = (gF[0] ? 3 * gF[0].length + gF[1].length : 0) + 10;
                  MF + Rk > HF && (EF = Ek(MF + Rk)), gF.position ? (Bk = gF, EF[MF] = 200, MF += 3, EF[MF++] = 98, kk = MF - Fk, MF += 4, zF(Fk, vk, 0), NF.setUint16(kk + Fk - 3, MF - Fk - kk)) : (EF[MF++] = 214, EF[MF++] = 98, kk = MF - Fk, MF += 4), gF = ["", ""], gF.previous = Bk, gF.size = 0, gF.position = kk
                }
                let Bk = UF.test(kk);
                return gF[Bk ? 0 : 1] += kk, EF[MF++] = 193, void vk(Bk ? -tk : tk)
              }
              Rk = tk < 32 ? 1 : tk < 256 ? 2 : tk < 65536 ? 3 : 5;
              let Xk = 3 * tk;
              if (MF + Xk > HF && (EF = Ek(MF + Xk)), tk < 64 || !ak) {
                let Fk, ak, Xk, bk = MF + Rk;
                for (Fk = 0; Fk < tk; Fk++) ak = kk.charCodeAt(Fk), ak < 128 ? EF[bk++] = ak : ak < 2048 ? (EF[bk++] = ak >> 6 | 192, EF[bk++] = 63 & ak | 128) : 55296 === (64512 & ak) && 56320 === (64512 & (Xk = kk.charCodeAt(Fk + 1))) ? (ak = 65536 + ((1023 & ak) << 10) + (1023 & Xk), Fk++, EF[bk++] = ak >> 18 | 240, EF[bk++] = ak >> 12 & 63 | 128, EF[bk++] = ak >> 6 & 63 | 128, EF[bk++] = 63 & ak | 128) : (EF[bk++] = ak >> 12 | 224, EF[bk++] = ak >> 6 & 63 | 128, EF[bk++] = 63 & ak | 128);
                Bk = bk - MF - Rk
              } else Bk = ak(kk, MF + Rk);
              Bk < 32 ? EF[MF++] = 160 | Bk : Bk < 256 ? (Rk < 2 && EF.copyWithin(MF + 2, MF + 1, MF + 1 + Bk), EF[MF++] = 217, EF[MF++] = Bk) : Bk < 65536 ? (Rk < 3 && EF.copyWithin(MF + 3, MF + 2, MF + 2 + Bk), EF[MF++] = 218, EF[MF++] = Bk >> 8, EF[MF++] = 255 & Bk) : (Rk < 5 && EF.copyWithin(MF + 5, MF + 3, MF + 3 + Bk), EF[MF++] = 219, NF.setUint32(MF, Bk), MF += 4), MF += Bk
            } else if ("number" === Rk)
              if (kk >>> 0 === kk) kk < 32 || kk < 128 && !1 === this.useRecords || kk < 64 && !this.randomAccessStructure ? EF[MF++] = kk : kk < 256 ? (EF[MF++] = 204, EF[MF++] = kk) : kk < 65536 ? (EF[MF++] = 205, EF[MF++] = kk >> 8, EF[MF++] = 255 & kk) : (EF[MF++] = 206, NF.setUint32(MF, kk), MF += 4);
              else if ((kk | 0) === kk) kk >= -32 ? EF[MF++] = 256 + kk : kk >= -128 ? (EF[MF++] = 208, EF[MF++] = kk + 256) : kk >= -32768 ? (EF[MF++] = 209, NF.setInt16(MF, kk), MF += 2) : (EF[MF++] = 210, NF.setInt32(MF, kk), MF += 4);
            else {
              let Fk;
              if ((Fk = this.useFloat32) > 0 && kk < 4294967296 && kk >= -2147483648) {
                let Bk;
                if (EF[MF++] = 202, NF.setFloat32(MF, kk), Fk < 4 || ((Bk = kk * wF[(127 & EF[MF]) << 1 | EF[MF + 1] >> 7]) | 0) === Bk) return void(MF += 4);
                MF--
              }
              EF[MF++] = 203, NF.setFloat64(MF, kk), MF += 8
            } else if ("object" === Rk || "function" === Rk)
              if (kk) {
                if (tk) {
                  let Bk = tk.get(kk);
                  if (Bk) {
                    if (!Bk.id) {
                      let kk = tk.idsToInsert || (tk.idsToInsert = []);
                      Bk.id = kk.push(Bk)
                    }
                    return EF[MF++] = 214, EF[MF++] = 112, NF.setUint32(MF, Bk.id), void(MF += 4)
                  }
                  tk.set(kk, {
                    offset: MF - Fk
                  })
                }
                let ak = kk.constructor;
                if (ak === Object) Ok(kk);
                else if (ak === Array) Wk(kk);
                else if (ak === Map)
                  if (this.mapAsEmptyObject) EF[MF++] = 128;
                  else {
                    (Bk = kk.size) < 16 ? EF[MF++] = 128 | Bk : Bk < 65536 ? (EF[MF++] = 222, EF[MF++] = Bk >> 8, EF[MF++] = 255 & Bk) : (EF[MF++] = 223, NF.setUint32(MF, Bk), MF += 4);
                    for (let [Fk, Bk] of kk) vk(Fk), vk(Bk)
                  }
                else {
                  for (let Fk = 0, Bk = fF.length; Fk < Bk; Fk++) {
                    if (kk instanceof mF[Fk]) {
                      let Bk = fF[Fk];
                      if (Bk.write) {
                        Bk.type && (EF[MF++] = 212, EF[MF++] = Bk.type, EF[MF++] = 0);
                        let Fk = Bk.write.call(this, kk);
                        return void(Fk === kk ? Array.isArray(kk) ? Wk(kk) : Ok(kk) : vk(Fk))
                      }
                      let Rk, tk = EF,
                        ak = NF,
                        Xk = MF;
                      EF = null;
                      try {
                        Rk = Bk.pack.call(this, kk, (kk => (EF = tk, tk = null, MF += kk, MF > HF && Ek(MF), {
                          target: EF,
                          targetView: NF,
                          position: MF - kk
                        })), vk)
                      } finally {
                        tk && (EF = tk, NF = ak, MF = Xk, HF = EF.length - 10)
                      }
                      return void(Rk && (Rk.length + MF > HF && Ek(Rk.length + MF), MF = DF(Rk, EF, MF, Bk.type)))
                    }
                  }
                  if (Array.isArray(kk)) Wk(kk);
                  else {
                    if (kk.toJSON) {
                      const Fk = kk.toJSON();
                      if (Fk !== kk) return vk(Fk)
                    }
                    if ("function" === Rk) return vk(this.writeFunction && this.writeFunction(kk));
                    Ok(kk)
                  }
                }
              } else EF[MF++] = 192;
            else if ("boolean" === Rk) EF[MF++] = kk ? 195 : 194;
            else if ("bigint" === Rk) {
              if (kk < BigInt(1) << BigInt(63) && kk >= -(BigInt(1) << BigInt(63))) EF[MF++] = 211, NF.setBigInt64(MF, kk);
              else if (kk < BigInt(1) << BigInt(64) && kk > 0) EF[MF++] = 207, NF.setBigUint64(MF, kk);
              else {
                if (!this.largeBigIntToFloat) {
                  if (this.largeBigIntToString) return vk(kk.toString());
                  if (this.useBigIntExtension && kk < BigInt(2) ** BigInt(1023) && kk > -(BigInt(2) ** BigInt(1023))) {
                    EF[MF++] = 199, MF++, EF[MF++] = 66;
                    let Fk, Bk = [];
                    do {
                      let Rk = kk & BigInt(255);
                      Fk = (Rk & BigInt(128)) === (kk < BigInt(0) ? BigInt(128) : BigInt(0)), Bk.push(Rk), kk >>= BigInt(8)
                    } while (kk !== BigInt(0) && kk !== BigInt(-1) || !Fk);
                    EF[MF - 2] = Bk.length;
                    for (let kk = Bk.length; kk > 0;) EF[MF++] = Number(Bk[--kk]);
                    return
                  }
                  throw new RangeError(kk + " was too large to fit in MessagePack 64-bit integer format, use useBigIntExtension, or set largeBigIntToFloat to convert to float-64, or set largeBigIntToString to convert to string")
                }
                EF[MF++] = 203, NF.setFloat64(MF, Number(kk))
              }
              MF += 8
            } else {
              if ("undefined" !== Rk) throw new Error("Unknown type: " + Rk);
              this.encodeUndefinedAsNil ? EF[MF++] = 192 : (EF[MF++] = 212, EF[MF++] = 0, EF[MF++] = 0)
            }
          },
          ik = this.variableMapSize || this.coercibleKeyAsNumber || this.skipValues ? kk => {
            let Fk;
            if (this.skipValues) {
              Fk = [];
              for (let Bk in kk) "function" === typeof kk.hasOwnProperty && !kk.hasOwnProperty(Bk) || this.skipValues.includes(kk[Bk]) || Fk.push(Bk)
            } else Fk = Object.keys(kk);
            let Bk, Rk = Fk.length;
            if (Rk < 16 ? EF[MF++] = 128 | Rk : Rk < 65536 ? (EF[MF++] = 222, EF[MF++] = Rk >> 8, EF[MF++] = 255 & Rk) : (EF[MF++] = 223, NF.setUint32(MF, Rk), MF += 4), this.coercibleKeyAsNumber)
              for (let tk = 0; tk < Rk; tk++) {
                Bk = Fk[tk];
                let Rk = Number(Bk);
                vk(isNaN(Rk) ? Bk : Rk), vk(kk[Bk])
              } else
                for (let tk = 0; tk < Rk; tk++) vk(Bk = Fk[tk]), vk(kk[Bk])
          } : kk => {
            EF[MF++] = 222;
            let Bk = MF - Fk;
            MF += 2;
            let Rk = 0;
            for (let Fk in kk)("function" !== typeof kk.hasOwnProperty || kk.hasOwnProperty(Fk)) && (vk(Fk), vk(kk[Fk]), Rk++);
            if (Rk > 65535) throw new Error('Object is too large to serialize with fast 16-bit map size, use the "variableMapSize" option to serialize this object');
            EF[Bk++ + Fk] = Rk >> 8, EF[Bk + Fk] = 255 & Rk
          },
          Yk = !1 === this.useRecords ? ik : kk.progressiveRecords && !Vk ? kk => {
            let Bk, tk, ak = Rk.transitions || (Rk.transitions = Object.create(null)),
              Xk = MF++ - Fk;
            for (let bk in kk)
              if ("function" !== typeof kk.hasOwnProperty || kk.hasOwnProperty(bk)) {
                if (Bk = ak[bk], Bk) ak = Bk;
                else {
                  let wk = Object.keys(kk),
                    dk = ak;
                  ak = Rk.transitions;
                  let sk = 0;
                  for (let kk = 0, Fk = wk.length; kk < Fk; kk++) {
                    let Fk = wk[kk];
                    Bk = ak[Fk], Bk || (Bk = ak[Fk] = Object.create(null), sk++), ak = Bk
                  }
                  Xk + Fk + 1 == MF ? (MF--, Sk(ak, wk, sk)) : Nk(ak, wk, Xk, sk), tk = !0, ak = dk[bk]
                }
                vk(kk[bk])
              } if (!tk) {
              let Bk = ak[cF];
              Bk ? EF[Xk + Fk] = Bk : Nk(ak, Object.keys(kk), Xk, 0)
            }
          } : kk => {
            let Fk, Bk = Rk.transitions || (Rk.transitions = Object.create(null)),
              tk = 0;
            for (let Rk in kk)("function" !== typeof kk.hasOwnProperty || kk.hasOwnProperty(Rk)) && (Fk = Bk[Rk], Fk || (Fk = Bk[Rk] = Object.create(null), tk++), Bk = Fk);
            let ak = Bk[cF];
            ak ? ak >= 96 && Vk ? (EF[MF++] = 96 + (31 & (ak -= 96)), EF[MF++] = ak >> 5) : EF[MF++] = ak : Sk(Bk, Bk.__keys__ || Object.keys(kk), tk);
            for (let Rk in kk)("function" !== typeof kk.hasOwnProperty || kk.hasOwnProperty(Rk)) && vk(kk[Rk])
          },
          Lk = "function" == typeof this.useRecords && this.useRecords,
          Ok = Lk ? kk => {
            Lk(kk) ? Yk(kk) : ik(kk)
          } : Yk,
          Ek = kk => {
            let Bk;
            if (kk > 16777216) {
              if (kk - Fk > OF) throw new Error("Packed buffer would be larger than maximum buffer size");
              Bk = Math.min(OF, 4096 * Math.round(Math.max((kk - Fk) * (kk > 67108864 ? 1.25 : 2), 4194304) / 4096))
            } else Bk = 1 + (Math.max(kk - Fk << 2, EF.length - 1) >> 12) << 12;
            let Rk = new oF(Bk);
            return NF = Rk.dataView || (Rk.dataView = new DataView(Rk.buffer, 0, Bk)), kk = Math.min(kk, EF.length), EF.copy ? EF.copy(Rk, 0, Fk, kk) : Rk.set(EF.slice(Fk, kk)), MF -= Fk, Fk = 0, HF = Rk.length - 10, EF = Rk
          },
          Sk = (kk, Fk, tk) => {
            let ak = Rk.nextId;
            ak || (ak = 64), ak < Jk && this.shouldShareStructure && !this.shouldShareStructure(Fk) ? (ak = Rk.nextOwnId, ak < Ak || (ak = Jk), Rk.nextOwnId = ak + 1) : (ak >= Ak && (ak = Jk), Rk.nextId = ak + 1);
            let Xk = Fk.highByte = ak >= 96 && Vk ? ak - 96 >> 5 : -1;
            kk[cF] = ak, kk.__keys__ = Fk, Rk[ak - 64] = Fk, ak < Jk ? (Fk.isShared = !0, Rk.sharedLength = ak - 63, Bk = !0, Xk >= 0 ? (EF[MF++] = 96 + (31 & ak), EF[MF++] = Xk) : EF[MF++] = ak) : (Xk >= 0 ? (EF[MF++] = 213, EF[MF++] = 114, EF[MF++] = 96 + (31 & ak), EF[MF++] = Xk) : (EF[MF++] = 212, EF[MF++] = 114, EF[MF++] = ak), tk && (yk += fk * tk), ek.length >= sk && (ek.shift()[cF] = 0), ek.push(kk), vk(Fk))
          },
          Nk = (kk, Bk, Rk, tk) => {
            let ak = EF,
              Xk = MF,
              bk = HF,
              wk = Fk;
            EF = SF, MF = 0, Fk = 0, EF || (SF = EF = new oF(8192)), HF = EF.length - 10, Sk(kk, Bk, tk), SF = EF;
            let dk = MF;
            if (EF = ak, MF = Xk, HF = bk, Fk = wk, dk > 1) {
              let kk = MF + dk - 1;
              kk > HF && Ek(kk);
              let Bk = Rk + Fk;
              EF.copyWithin(Bk + dk, Bk + 1, MF), EF.set(SF.slice(0, dk), Bk), MF = kk
            } else EF[Rk + Fk] = SF[0]
          },
          Hk = kk => {
            let tk = uF(kk, EF, Fk, MF, Rk, Ek, ((kk, Fk, Rk) => {
              if (Rk) return Bk = !0;
              MF = Fk;
              let tk = EF;
              return vk(kk), mk(), tk !== EF ? {
                position: MF,
                targetView: NF,
                target: EF
              } : MF
            }), this);
            if (0 === tk) return Ok(kk);
            MF = tk
          }
      }
      useBuffer(kk) {
        EF = kk, NF = EF.dataView || (EF.dataView = new DataView(EF.buffer, EF.byteOffset, EF.byteLength)), MF = 0
      }
      set position(kk) {
        MF = kk
      }
      get position() {
        return MF
      }
      set buffer(kk) {
        EF = kk
      }
      get buffer() {
        return EF
      }
      clearSharedData() {
        this.structures && (this.structures = []), this.typedStructs && (this.typedStructs = [])
      }
    }

    function TF(kk, Fk, Bk, Rk) {
      let tk = kk.byteLength;
      if (tk + 1 < 256) {
        var {
          target: ak,
          position: Xk
        } = Bk(4 + tk);
        ak[Xk++] = 199, ak[Xk++] = tk + 1
      } else if (tk + 1 < 65536) {
        var {
          target: ak,
          position: Xk
        } = Bk(5 + tk);
        ak[Xk++] = 200, ak[Xk++] = tk + 1 >> 8, ak[Xk++] = tk + 1 & 255
      } else {
        var {
          target: ak,
          position: Xk,
          targetView: bk
        } = Bk(7 + tk);
        ak[Xk++] = 201, bk.setUint32(Xk, tk + 1), Xk += 4
      }
      ak[Xk++] = 116, ak[Xk++] = Fk, kk.buffer || (kk = new Uint8Array(kk)), ak.set(new Uint8Array(kk.buffer, kk.byteOffset, kk.byteLength), Xk)
    }

    function rF(kk, Fk) {
      let Bk = kk.byteLength;
      var Rk, tk;
      if (Bk < 256) {
        var {
          target: Rk,
          position: tk
        } = Fk(Bk + 2);
        Rk[tk++] = 196, Rk[tk++] = Bk
      } else if (Bk < 65536) {
        var {
          target: Rk,
          position: tk
        } = Fk(Bk + 3);
        Rk[tk++] = 197, Rk[tk++] = Bk >> 8, Rk[tk++] = 255 & Bk
      } else {
        var {
          target: Rk,
          position: tk,
          targetView: ak
        } = Fk(Bk + 5);
        Rk[tk++] = 198, ak.setUint32(tk, Bk), tk += 4
      }
      Rk.set(kk, tk)
    }

    function DF(kk, Fk, Bk, Rk) {
      let tk = kk.length;
      switch (tk) {
        case 1:
          Fk[Bk++] = 212;
          break;
        case 2:
          Fk[Bk++] = 213;
          break;
        case 4:
          Fk[Bk++] = 214;
          break;
        case 8:
          Fk[Bk++] = 215;
          break;
        case 16:
          Fk[Bk++] = 216;
          break;
        default:
          tk < 256 ? (Fk[Bk++] = 199, Fk[Bk++] = tk) : tk < 65536 ? (Fk[Bk++] = 200, Fk[Bk++] = tk >> 8, Fk[Bk++] = 255 & tk) : (Fk[Bk++] = 201, Fk[Bk++] = tk >> 24, Fk[Bk++] = tk >> 16 & 255, Fk[Bk++] = tk >> 8 & 255, Fk[Bk++] = 255 & tk)
      }
      return Fk[Bk++] = Rk, Fk.set(kk, Bk), Bk += tk
    }

    function zF(kk, Fk, Bk) {
      if (gF.length > 0) {
        NF.setUint32(gF.position + kk, MF + Bk - gF.position - kk), gF.stringsPosition = MF - kk;
        let Rk = gF;
        gF = null, Fk(Rk[0]), Fk(Rk[1])
      }
    }

    function PF(kk) {
      if (kk.Class) {
        if (!kk.pack && !kk.write) throw new Error("Extension has no pack or write function");
        if (kk.pack && !kk.type) throw new Error("Extension has no type (numeric code to identify the extension)");
        mF.unshift(kk.Class), fF.unshift(kk)
      }! function(kk) {
        kk.unpack ? Wk[kk.type] = kk.unpack : Wk[kk.type] = kk
      }(kk)
    }

    function hF(kk, Fk) {
      return kk.isCompatible = kk => {
        let Bk = !kk || (Fk.lastNamedStructuresLength || 0) === kk.length;
        return Bk || Fk._mergeStructures(kk), Bk
      }, kk
    }
    mF = [Date, Set, Error, RegExp, ArrayBuffer, Object.getPrototypeOf(Uint8Array.prototype).constructor, ik], fF = [{
      pack(kk, Fk, Bk) {
        let Rk = kk.getTime() / 1e3;
        if ((this.useTimestamp32 || 0 === kk.getMilliseconds()) && Rk >= 0 && Rk < 4294967296) {
          let {
            target: kk,
            targetView: Bk,
            position: tk
          } = Fk(6);
          kk[tk++] = 214, kk[tk++] = 255, Bk.setUint32(tk, Rk)
        } else if (Rk > 0 && Rk < 4294967296) {
          let {
            target: Bk,
            targetView: tk,
            position: ak
          } = Fk(10);
          Bk[ak++] = 215, Bk[ak++] = 255, tk.setUint32(ak, 4e6 * kk.getMilliseconds() + (Rk / 1e3 / 4294967296 | 0)), tk.setUint32(ak + 4, Rk)
        } else if (isNaN(Rk)) {
          if (this.onInvalidDate) return Fk(0), Bk(this.onInvalidDate());
          let {
            target: kk,
            targetView: Rk,
            position: tk
          } = Fk(3);
          kk[tk++] = 212, kk[tk++] = 255, kk[tk++] = 255
        } else {
          let {
            target: Bk,
            targetView: tk,
            position: ak
          } = Fk(15);
          Bk[ak++] = 199, Bk[ak++] = 12, Bk[ak++] = 255, tk.setUint32(ak, 1e6 * kk.getMilliseconds()), tk.setBigInt64(ak + 4, BigInt(Math.floor(Rk)))
        }
      }
    }, {
      pack(kk, Fk, Bk) {
        if (this.setAsEmptyObject) return Fk(0), Bk({});
        let Rk = Array.from(kk),
          {
            target: tk,
            position: ak
          } = Fk(this.moreTypes ? 3 : 0);
        this.moreTypes && (tk[ak++] = 212, tk[ak++] = 115, tk[ak++] = 0), Bk(Rk)
      }
    }, {
      pack(kk, Fk, Bk) {
        let {
          target: Rk,
          position: tk
        } = Fk(this.moreTypes ? 3 : 0);
        this.moreTypes && (Rk[tk++] = 212, Rk[tk++] = 101, Rk[tk++] = 0), Bk([kk.name, kk.message, kk.cause])
      }
    }, {
      pack(kk, Fk, Bk) {
        let {
          target: Rk,
          position: tk
        } = Fk(this.moreTypes ? 3 : 0);
        this.moreTypes && (Rk[tk++] = 212, Rk[tk++] = 120, Rk[tk++] = 0), Bk([kk.source, kk.flags])
      }
    }, {
      pack(kk, Fk) {
        this.moreTypes ? TF(kk, 16, Fk) : rF(YF ? Buffer.from(kk) : new Uint8Array(kk), Fk)
      }
    }, {
      pack(kk, Fk) {
        let Bk = kk.constructor;
        Bk !== LF && this.moreTypes ? TF(kk, RF.indexOf(Bk.name), Fk) : rF(kk, Fk)
      }
    }, {
      pack(kk, Fk) {
        let {
          target: Bk,
          position: Rk
        } = Fk(1);
        Bk[Rk] = 193
      }
    }];
    let qF = new GF({
      useRecords: !1
    });
    const CF = qF.pack,
      ZF = qF.pack,
      pF = GF,
      {
        NEVER: KF,
        ALWAYS: xF,
        DECIMAL_ROUND: jF,
        DECIMAL_FIT: lF
      } = eF,
      nF = 512,
      IF = 1024,
      QF = 2048;
    const kB = function(kk) {
        let Fk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        if (!kk || "object" !== typeof kk) throw new Error("first argument must be an Iterable, Async Iterable, Iterator, Async Iterator, or a promise");
        const Bk = new Hk(Fk);
        let Rk;
        const tk = kk => {
          let Fk;
          Rk && (kk = Buffer.concat([Rk, kk]), Rk = void 0);
          try {
            Fk = Bk.unpackMultiple(kk)
          } catch (tk) {
            if (!tk.incomplete) throw tk;
            Rk = kk.slice(tk.lastPosition), Fk = tk.values
          }
          return Fk
        };
        return "function" === typeof kk[Symbol.iterator] ? function*() {
          for (const Fk of kk) yield* tk(Fk)
        }() : "function" === typeof kk[Symbol.asyncIterator] ? async function*() {
          for await (const Fk of kk) yield* tk(Fk)
        }(): void 0
      },
      FB = function(kk) {
        let Fk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        if (kk && "object" === typeof kk) {
          if ("function" === typeof kk[Symbol.iterator]) return function*(kk, Fk) {
            const Bk = new GF(Fk);
            for (const Rk of kk) yield Bk.pack(Rk)
          }(kk, Fk);
          if ("function" === typeof kk.then || "function" === typeof kk[Symbol.asyncIterator]) return async function*(kk, Fk) {
            const Bk = new GF(Fk);
            for await (const Rk of kk) yield Bk.pack(Rk)
          }(kk, Fk);
          throw new Error("first argument must be an Iterable, Async Iterable, Iterator, Async Iterator, or a Promise")
        }
        throw new Error("first argument must be an Iterable, Async Iterable, or a Promise for an Async Iterable")
      },
      BB = !1,
      RB = !0
  },
  8783: (kk, Fk, Bk) => {
    Bk.r(Fk), Bk.d(Fk, {
      $changes: () => yk,
      $childType: () => fk,
      $decoder: () => sk,
      $deleteByIndex: () => Ak,
      $encoder: () => dk,
      $filter: () => Vk,
      $getByIndex: () => Jk,
      $numFields: () => Nk,
      $refId: () => bk,
      $track: () => wk,
      $values: () => Yk,
      ArraySchema: () => RR,
      Callbacks: () => Rt,
      ChangeTree: () => MB,
      CollectionSchema: () => XR,
      Decoder: () => jR,
      Encoder: () => ZR,
      FieldBuilder: () => dR,
      MapSchema: () => aR,
      Metadata: () => jF,
      OPERATION: () => tk,
      Reflection: () => QR,
      ReflectionField: () => nR,
      ReflectionType: () => IR,
      Root: () => gR,
      Schema: () => uR,
      SetSchema: () => bR,
      StateCallbackStrategy: () => Bt,
      StateView: () => rR,
      StreamSchema: () => wR,
      TypeContext: () => hF,
      createPool: () => Xt,
      decode: () => iF,
      decodeKeyValueOperation: () => nB,
      decodeSchemaOperation: () => lB,
      defineCustomTypes: () => OF,
      defineTypes: () => SR,
      deprecated: () => OR,
      dumpChanges: () => HR,
      encode: () => BF,
      encodeArray: () => zB,
      encodeIndexedEntry: () => rB,
      encodeKeyValueOperation: () => DB,
      encodeMapEntry: () => TB,
      encodeSchemaOperation: () => GB,
      Ne: () => fR,
      fullStateOnly: () => iR,
      getDecoderStateCallbacks: () => kt,
      getEncodeDescriptor: () => FB,
      getRawChangesCallback: () => Ft,
      isBuilder: () => sR,
      patchOnly: () => vR,
      registerType: () => LF,
      schema: () => NR,
      t: () => eR,
      type: () => YR,
      unreliable: () => WR,
      view: () => mR
    });
    const Rk = 255;
    var tk;

    function ak(kk) {
      Object.defineProperty(kk, Symbol.metadata, {
        value: void 0,
        writable: !0,
        configurable: !0,
        enumerable: !1
      })
    }! function(kk) {
      kk[kk.ADD = 128] = "ADD", kk[kk.REPLACE = 0] = "REPLACE", kk[kk.DELETE = 64] = "DELETE", kk[kk.DELETE_AND_MOVE = 96] = "DELETE_AND_MOVE", kk[kk.MOVE_AND_ADD = 160] = "MOVE_AND_ADD", kk[kk.DELETE_AND_ADD = 192] = "DELETE_AND_ADD", kk[kk.CLEAR = 10] = "CLEAR", kk[kk.REVERSE = 15] = "REVERSE", kk[kk.MOVE = 32] = "MOVE", kk[kk.DELETE_BY_REFID = 33] = "DELETE_BY_REFID", kk[kk.ADD_BY_REFID = 129] = "ADD_BY_REFID"
    }(tk || (tk = {})), Symbol.metadata ??= Symbol.for("Symbol.metadata");
    const Xk = "undefined" !== typeof globalThis ? globalThis : "undefined" !== typeof global ? global : "undefined" !== typeof self ? self : "undefined" !== typeof window ? window : {};
    if ("function" === typeof Symbol && "function" !== typeof Symbol.for) {
      const kk = "colyseus.symbolRegistry",
        Fk = Xk[kk] || (Xk[kk] = Object.create(null));
      Symbol.for = function(kk) {
        return Fk[kk] || (Fk[kk] = Symbol(kk))
      }, Symbol.keyFor = function(kk) {
        for (const Bk in Fk)
          if (Fk[Bk] === kk) return Bk
      }
    }
    const bk = Symbol.for("$refId"),
      wk = "~track",
      dk = "~encoder",
      sk = "~decoder",
      Vk = "~filter",
      Jk = "~getByIndex",
      Ak = "~deleteByIndex",
      ek = "~resyncPrune",
      yk = Symbol.for("$changes"),
      fk = Symbol.for("$childType"),
      mk = Symbol.for("$proxyTarget"),
      Wk = "~onEncodeEnd",
      vk = "~reset",
      ik = "~onDecodeEnd",
      Yk = Symbol.for("$values"),
      Lk = "~builder",
      Ok = "~descriptors",
      Ek = "~__encodeDescriptor",
      Sk = "~encoders",
      Nk = "~__numFields",
      Hk = "~__refTypeFieldIndexes",
      uk = "~__viewFieldIndexes",
      Mk = "$__fieldIndexesByViewTag",
      gk = "~__unreliableFieldIndexes",
      Uk = "~__patchOnlyFieldIndexes",
      ck = "~__fullSyncSkipIndexes",
      Gk = "~__fullStateOnlyFieldIndexes",
      Tk = "~__streamFieldIndexes",
      rk = "~__streamPriorities";
    let Dk;
    try {
      Dk = new TextEncoder
    } catch (bt) {}
    const zk = new ArrayBuffer(8),
      Pk = new Int32Array(zk),
      hk = new Float32Array(zk),
      qk = new Float64Array(zk),
      Ck = new BigInt64Array(zk),
      Zk = "undefined" !== typeof Buffer && Buffer.byteLength ? Buffer.byteLength : function(kk, Fk) {
        for (var Bk = 0, Rk = 0, tk = 0, ak = kk.length; tk < ak; tk++)(Bk = kk.charCodeAt(tk)) < 128 ? Rk += 1 : Bk < 2048 ? Rk += 2 : Bk < 55296 || Bk >= 57344 ? Rk += 3 : (tk++, Rk += 4);
        return Rk
      };

    function pk(kk, Fk, Bk) {
      for (var Rk = 0, tk = 0, ak = Fk.length; tk < ak; tk++)(Rk = Fk.charCodeAt(tk)) < 128 ? kk[Bk.offset++] = Rk : Rk < 2048 ? (kk[Bk.offset] = 192 | Rk >> 6, kk[Bk.offset + 1] = 128 | 63 & Rk, Bk.offset += 2) : Rk < 55296 || Rk >= 57344 ? (kk[Bk.offset] = 224 | Rk >> 12, kk[Bk.offset + 1] = 128 | Rk >> 6 & 63, kk[Bk.offset + 2] = 128 | 63 & Rk, Bk.offset += 3) : (tk++, Rk = 65536 + ((1023 & Rk) << 10 | 1023 & Fk.charCodeAt(tk)), kk[Bk.offset] = 240 | Rk >> 18, kk[Bk.offset + 1] = 128 | Rk >> 12 & 63, kk[Bk.offset + 2] = 128 | Rk >> 6 & 63, kk[Bk.offset + 3] = 128 | 63 & Rk, Bk.offset += 4)
    }

    function Kk(kk, Fk, Bk) {
      kk[Bk.offset++] = 255 & Fk
    }

    function xk(kk, Fk, Bk) {
      kk[Bk.offset++] = 255 & Fk, kk[Bk.offset++] = Fk >> 8 & 255
    }

    function jk(kk, Fk, Bk) {
      kk[Bk.offset++] = 255 & Fk, kk[Bk.offset++] = Fk >> 8 & 255
    }

    function lk(kk, Fk, Bk) {
      kk[Bk.offset++] = 255 & Fk, kk[Bk.offset++] = Fk >> 8 & 255, kk[Bk.offset++] = Fk >> 16 & 255, kk[Bk.offset++] = Fk >> 24 & 255
    }

    function nk(kk, Fk, Bk) {
      const Rk = Fk >> 24,
        tk = Fk >> 16,
        ak = Fk >> 8,
        Xk = Fk;
      kk[Bk.offset++] = 255 & Xk, kk[Bk.offset++] = 255 & ak, kk[Bk.offset++] = 255 & tk, kk[Bk.offset++] = 255 & Rk
    }

    function Ik(kk, Fk, Bk) {
      const Rk = Math.floor(Fk / Math.pow(2, 32));
      nk(kk, Fk >>> 0, Bk), nk(kk, Rk, Bk)
    }

    function Qk(kk, Fk, Bk) {
      const Rk = Fk / Math.pow(2, 32) | 0;
      nk(kk, Fk >>> 0, Bk), nk(kk, Rk, Bk)
    }

    function kF(kk, Fk, Bk) {
      hk[0] = Fk, lk(kk, Pk[0], Bk)
    }

    function FF(kk, Fk, Bk) {
      qk[0] = Fk, lk(kk, Pk[0], Bk), lk(kk, Pk[1], Bk)
    }
    const BF = {
        int8: Kk,
        uint8: function(kk, Fk, Bk) {
          kk[Bk.offset++] = 255 & Fk
        },
        int16: xk,
        uint16: jk,
        int32: lk,
        uint32: nk,
        int64: Ik,
        uint64: Qk,
        bigint64: function(kk, Fk, Bk) {
          Ck[0] = BigInt.asIntN(64, Fk), lk(kk, Pk[0], Bk), lk(kk, Pk[1], Bk)
        },
        biguint64: function(kk, Fk, Bk) {
          Ck[0] = BigInt.asIntN(64, Fk), lk(kk, Pk[0], Bk), lk(kk, Pk[1], Bk)
        },
        float32: kF,
        float64: FF,
        boolean: function(kk, Fk, Bk) {
          kk[Bk.offset++] = Fk ? 1 : 0
        },
        string: function(kk, Fk, Bk) {
          Fk || (Fk = "");
          let Rk = Zk(Fk, "utf8"),
            tk = 0;
          if (Rk < 32) kk[Bk.offset++] = 160 | Rk, tk = 1;
          else if (Rk < 256) kk[Bk.offset++] = 217, kk[Bk.offset++] = Rk, tk = 2;
          else if (Rk < 65536) kk[Bk.offset++] = 218, jk(kk, Rk, Bk), tk = 3;
          else {
            if (!(Rk < 4294967296)) throw new Error("String too long");
            kk[Bk.offset++] = 219, nk(kk, Rk, Bk), tk = 5
          }
          return pk(kk, Fk, Bk), tk + Rk
        },
        number: function kk(Fk, Bk, Rk) {
          return isNaN(Bk) ? kk(Fk, 0, Rk) : isFinite(Bk) ? Bk !== (0 | Bk) ? Math.abs(Bk) <= 34028235e31 && (hk[0] = Bk, Math.abs(Math.abs(hk[0]) - Math.abs(Bk)) < 1e-4) ? (Fk[Rk.offset++] = 202, kF(Fk, Bk, Rk), 5) : (Fk[Rk.offset++] = 203, FF(Fk, Bk, Rk), 9) : Bk >= 0 ? Bk < 128 ? (Fk[Rk.offset++] = 255 & Bk, 1) : Bk < 256 ? (Fk[Rk.offset++] = 204, Fk[Rk.offset++] = 255 & Bk, 2) : Bk < 65536 ? (Fk[Rk.offset++] = 205, jk(Fk, Bk, Rk), 3) : Bk < 4294967296 ? (Fk[Rk.offset++] = 206, nk(Fk, Bk, Rk), 5) : (Fk[Rk.offset++] = 207, Qk(Fk, Bk, Rk), 9) : Bk >= -32 ? (Fk[Rk.offset++] = 224 | Bk + 32, 1) : Bk >= -128 ? (Fk[Rk.offset++] = 208, Kk(Fk, Bk, Rk), 2) : Bk >= -32768 ? (Fk[Rk.offset++] = 209, xk(Fk, Bk, Rk), 3) : Bk >= -2147483648 ? (Fk[Rk.offset++] = 210, lk(Fk, Bk, Rk), 5) : (Fk[Rk.offset++] = 211, Ik(Fk, Bk, Rk), 9) : kk(Fk, Bk > 0 ? Number.MAX_SAFE_INTEGER : -Number.MAX_SAFE_INTEGER, Rk)
        },
        utf8Write: pk,
        utf8Length: Zk
      },
      RF = new ArrayBuffer(8),
      tF = new Int32Array(RF),
      aF = new Float32Array(RF),
      XF = new Float64Array(RF),
      bF = new BigUint64Array(RF),
      wF = new BigInt64Array(RF);

    function dF(kk, Fk, Bk) {
      Bk > kk.length - Fk.offset && (Bk = kk.length - Fk.offset);
      for (var Rk = "", tk = 0, ak = Fk.offset, Xk = Fk.offset + Bk; ak < Xk; ak++) {
        var bk = kk[ak];
        if (0 !== (128 & bk))
          if (192 !== (224 & bk))
            if (224 !== (240 & bk)) {
              if (240 !== (248 & bk)) {
                console.error("decode.utf8Read(): Invalid byte " + bk + " at offset " + ak + ". Skip to end of string: " + (Fk.offset + Bk));
                break
              }(tk = (7 & bk) << 18 | (63 & kk[++ak]) << 12 | (63 & kk[++ak]) << 6 | 63 & kk[++ak]) >= 65536 ? (tk -= 65536, Rk += String.fromCharCode(55296 + (tk >>> 10), 56320 + (1023 & tk))) : Rk += String.fromCharCode(tk)
            } else Rk += String.fromCharCode((15 & bk) << 12 | (63 & kk[++ak]) << 6 | 63 & kk[++ak]);
        else Rk += String.fromCharCode((31 & bk) << 6 | 63 & kk[++ak]);
        else Rk += String.fromCharCode(bk)
      }
      return Fk.offset += Bk, Rk
    }

    function sF(kk, Fk) {
      return VF(kk, Fk) << 24 >> 24
    }

    function VF(kk, Fk) {
      return kk[Fk.offset++]
    }

    function JF(kk, Fk) {
      return AF(kk, Fk) << 16 >> 16
    }

    function AF(kk, Fk) {
      return kk[Fk.offset++] | kk[Fk.offset++] << 8
    }

    function eF(kk, Fk) {
      return kk[Fk.offset++] | kk[Fk.offset++] << 8 | kk[Fk.offset++] << 16 | kk[Fk.offset++] << 24
    }

    function yF(kk, Fk) {
      return eF(kk, Fk) >>> 0
    }

    function fF(kk, Fk) {
      return tF[0] = eF(kk, Fk), aF[0]
    }

    function mF(kk, Fk) {
      return tF[0] = eF(kk, Fk), tF[1] = eF(kk, Fk), XF[0]
    }

    function WF(kk, Fk) {
      const Bk = yF(kk, Fk);
      return eF(kk, Fk) * Math.pow(2, 32) + Bk
    }

    function vF(kk, Fk) {
      const Bk = yF(kk, Fk);
      return yF(kk, Fk) * Math.pow(2, 32) + Bk
    }
    const iF = {
        utf8Read: dF,
        int8: sF,
        uint8: VF,
        int16: JF,
        uint16: AF,
        int32: eF,
        uint32: yF,
        float32: fF,
        float64: mF,
        int64: WF,
        uint64: vF,
        bigint64: function(kk, Fk) {
          return tF[0] = eF(kk, Fk), tF[1] = eF(kk, Fk), wF[0]
        },
        biguint64: function(kk, Fk) {
          return tF[0] = eF(kk, Fk), tF[1] = eF(kk, Fk), bF[0]
        },
        boolean: function(kk, Fk) {
          return VF(kk, Fk) > 0
        },
        string: function(kk, Fk) {
          const Bk = kk[Fk.offset++];
          let Rk;
          return Bk < 192 ? Rk = 31 & Bk : 217 === Bk ? Rk = VF(kk, Fk) : 218 === Bk ? Rk = AF(kk, Fk) : 219 === Bk && (Rk = yF(kk, Fk)), dF(kk, Fk, Rk)
        },
        number: function(kk, Fk) {
          const Bk = kk[Fk.offset++];
          return Bk < 128 ? Bk : 202 === Bk ? fF(kk, Fk) : 203 === Bk ? mF(kk, Fk) : 204 === Bk ? VF(kk, Fk) : 205 === Bk ? AF(kk, Fk) : 206 === Bk ? yF(kk, Fk) : 207 === Bk ? vF(kk, Fk) : 208 === Bk ? sF(kk, Fk) : 209 === Bk ? JF(kk, Fk) : 210 === Bk ? eF(kk, Fk) : 211 === Bk ? WF(kk, Fk) : Bk > 223 ? -1 * (255 - Bk + 1) : void 0
        },
        stringCheck: function(kk, Fk) {
          const Bk = kk[Fk.offset];
          return Bk < 192 && Bk > 160 || 217 === Bk || 218 === Bk || 219 === Bk
        }
      },
      YF = {},
      oF = new Map;

    function LF(kk, Fk) {
      Fk.constructor && (Object.prototype.hasOwnProperty.call(Fk, "constructor") && null == Fk.constructor[Symbol.metadata] && ak(Fk.constructor), oF.set(Fk.constructor, kk), YF[kk] = Fk), Fk.encode && (BF[kk] = Fk.encode), Fk.decode && (iF[kk] = Fk.decode)
    }

    function OF(kk) {
      for (const Fk in kk) LF(Fk, kk[Fk]);
      return kk => YR(kk)
    }
    const EF = "ArraySchema does not support streaming \u2014 positional ops (splice / unshift / reverse) shift subsequent indexes, so holding ADDs back for a later tick under `maxPerTick` would desync the decoder. Use `t.stream(X)` (stable monotonic positions) or `t.map(X).stream()` (stable keys) instead.";

    function SF() {
      return {
        pendingByView: new Map,
        sentByView: new Map,
        broadcastPending: new Set,
        sentBroadcast: new Set,
        broadcastDeletes: new Set,
        maxPerTick: 32
      }
    }

    function NF(kk) {
      return kk._stream ??= SF()
    }

    function HF(kk, Fk, Bk) {
      0 === Fk.activeViews.size && NF(kk).broadcastPending.add(Bk)
    }

    function uF(kk, Fk, Bk, Rk) {
      const ak = kk._stream;
      if (void 0 === ak) return !0;
      let Xk = !1;
      return ak.broadcastPending.delete(Rk) ? Xk = !0 : ak.sentBroadcast.delete(Rk) && ak.broadcastDeletes.add(Rk), Fk.forEachActiveView((kk => {
        const Fk = ak.pendingByView.get(kk.id);
        if (Fk?.has(Rk)) return Fk.delete(Rk), void(Xk = !0);
        const bk = ak.sentByView.get(kk.id);
        if (bk?.has(Rk)) {
          bk.delete(Rk);
          let Fk = kk.changes.get(Bk);
          void 0 === Fk && (Fk = new Map, kk.changes.set(Bk, Fk)), Fk.set(Rk, tk.DELETE)
        }
      })), Xk
    }

    function MF(kk, Fk) {
      const Bk = kk._stream?.pendingByView;
      if (void 0 === Bk) return !1;
      for (const [Rk, tk] of Bk)
        if (tk.size > 0 && void 0 !== Fk.activeViews.get(Rk)?.deref()) return !0;
      return !1
    }

    function gF(kk) {
      const Fk = kk._stream;
      return void 0 !== Fk && (Fk.broadcastPending.size > 0 || Fk.broadcastDeletes.size > 0)
    }

    function UF(kk, Fk, Bk) {
      const Rk = NF(kk);
      let tk = Rk.pendingByView.get(Fk);
      void 0 === tk && (tk = new Set, Rk.pendingByView.set(Fk, tk)), tk.add(Bk)
    }

    function cF(kk, Fk) {
      const Bk = kk._stream;
      void 0 !== Bk && (Bk.pendingByView.delete(Fk), Bk.sentByView.delete(Fk), Bk.priorityByView?.delete(Fk))
    }
    const GF = {
      8: "uint8",
      16: "uint16",
      32: "uint32"
    };

    function TF(kk) {
      if (null == kk || "object" !== typeof kk) throw new Error("t.quantized(): options object with { min, max } is required.");
      const {
        min: Fk,
        max: Bk
      } = kk;
      if ("number" !== typeof Fk || "number" !== typeof Bk || !(Bk > Fk) || !Number.isFinite(Fk) || !Number.isFinite(Bk)) throw new Error(`t.quantized(): require finite min < max (got min=${Fk}, max=${Bk}).`);
      const Rk = kk.bits ?? 16;
      if (8 !== Rk && 16 !== Rk && 32 !== Rk) throw new Error(`t.quantized(): bits must be 8, 16 or 32 (got ${Rk}).`);
      const tk = kk.mode ?? "clamp";
      if ("clamp" !== tk && "wrap" !== tk) throw new Error(`t.quantized(): mode must be "clamp" or "wrap" (got ${JSON.stringify(tk)}).`);
      const ak = "wrap" === tk,
        Xk = Math.pow(2, Rk);
      return {
        min: Fk,
        max: Bk,
        bits: Rk,
        wrap: ak,
        wire: GF[Rk],
        range: Bk - Fk,
        span: ak ? Xk : Fk === -Bk ? Xk - 2 : Xk - 1
      }
    }

    function rF(kk) {
      return null !== kk && "object" === typeof kk && void 0 !== kk.quantized
    }

    function DF(kk, Fk) {
      if (kk.wrap) {
        if (!Number.isFinite(Fk)) return 0;
        const Bk = kk.range;
        let Rk = (Fk - kk.min) % Bk;
        Rk < 0 && (Rk += Bk);
        const tk = kk.span;
        return Math.floor(Rk / Bk * tk + .5) % tk
      }
      if (Fk !== Fk) return 0;
      const Bk = Fk < kk.min ? kk.min : Fk > kk.max ? kk.max : Fk;
      return Math.floor((Bk - kk.min) / kk.range * kk.span + .5)
    }

    function zF(kk, Fk) {
      return kk.min + Fk / kk.span * kk.range
    }

    function PF(kk) {
      const Fk = BF[kk.wire];
      return (Bk, Rk, tk) => Fk(Bk, DF(kk, Rk), tk)
    }
    class hF {
      types = {};
      schemas = new Map;
      hasFilters = !1;
      static inheritedTypes = new WeakMap;
      static cachedContexts = new WeakMap;
      static register(kk) {
        const Fk = Object.getPrototypeOf(kk);
        if (Fk !== uR) {
          let Bk = hF.inheritedTypes.get(Fk);
          Bk || (Bk = new Set, hF.inheritedTypes.set(Fk, Bk)), Bk.add(kk)
        }
      }
      static cache(kk) {
        let Fk = hF.cachedContexts.get(kk);
        return Fk || (Fk = new hF(kk), hF.cachedContexts.set(kk, Fk)), Fk
      }
      constructor(kk) {
        kk && this.discoverTypes(kk)
      }
      has(kk) {
        return this.schemas.has(kk)
      }
      get(kk) {
        return this.types[kk]
      }
      add(kk) {
        let Fk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.schemas.size;
        return !this.schemas.has(kk) && (this.types[Fk] = kk, null == kk[Symbol.metadata] && jF.initialize(kk), this.schemas.set(kk, Fk), !0)
      }
      getTypeId(kk) {
        return this.schemas.get(kk)
      }
      discoverTypes(kk) {
        if (!this.add(kk)) return;
        hF.inheritedTypes.get(kk)?.forEach((kk => {
          this.discoverTypes(kk)
        }));
        let Fk = kk;
        for (;
          (Fk = Object.getPrototypeOf(Fk)) && Fk !== uR && Fk !== Function.prototype;) this.discoverTypes(Fk);
        const Bk = kk[Symbol.metadata];
        (Bk[uk] || Bk[Tk]) && (this.hasFilters = !0);
        for (const Rk in Bk) {
          const kk = Bk[Rk].type;
          if ("string" !== typeof kk && !rF(kk))
            if ("function" === typeof kk) this.discoverTypes(kk);
            else {
              const Fk = Object.values(kk)[0];
              if ("string" === typeof Fk) continue;
              this.discoverTypes(Fk)
            }
        }
      }
      debug() {
        return `TypeContext ->\n\tSchema types: ${this.schemas.size}\n\thasFilters: ${this.hasFilters}`
      }
    }

    function qF(kk) {
      const Fk = ZF(kk);
      return Fk ? {
        complexTypeKlass: YF[Fk],
        childType: kk[Fk]
      } : {
        complexTypeKlass: !1,
        childType: kk
      }
    }

    function CF(kk, Fk) {
      const Bk = pF(kk),
        Rk = ZF(Bk),
        tk = Rk && ZF(Bk[Rk]);
      if (tk) throw new Error(`${Fk?`${Fk}: `:""}@colyseus/schema: nested collections are not supported ("${Rk}" of "${tk}"). Collections can only hold primitive types or Schema classes, wrap the inner ${tk} in a Schema class.`);
      return Bk
    }

    function ZF(kk) {
      return "object" === typeof kk && null !== kk ? Object.keys(kk).find((kk => void 0 !== YF[kk])) : void 0
    }

    function pF(kk) {
      if ("object" !== typeof kk || null === kk) return kk;
      if (Array.isArray(kk)) return {
        array: pF(kk[0])
      };
      const Fk = function(kk) {
        const Fk = Object.keys(kk),
          Bk = Fk.filter((kk => /\d+/.test(kk)));
        if (Bk.length > 0 && Bk.length === Fk.length / 2 && kk[kk[Bk[0]]] == Bk[0]) return "number";
        if (Fk.length > 0 && Fk.every((Fk => kk[Fk] === Fk))) return "string"
      }(kk);
      if (Fk) return Fk;
      if (rF(kk)) return "string" === typeof kk.quantized.wire ? kk : {
        quantized: TF(kk.quantized)
      };
      if (void 0 !== kk.type) return pF(kk.type);
      const Bk = ZF(kk);
      return Bk && (kk[Bk] = pF(kk[Bk])), kk
    }
    const KF = [Hk, gk, Uk, ck, Gk, Tk, Sk];

    function xF(kk, Fk, Bk) {
      kk[Fk] || Object.defineProperty(kk, Fk, {
        value: [],
        enumerable: !1,
        configurable: !0,
        writable: !0
      }), kk[Fk].push(Bk)
    }
    const jF = {
        addField(kk, Fk, Bk, Rk, tk) {
          if (Fk >= 63) throw new Error(`Can't define field '${Bk}'.\nSchema instances may only have up to 63 fields.`);
          kk[Fk] = Object.assign(kk[Fk] || {}, {
            type: Rk,
            index: Fk,
            name: Bk
          }), Object.defineProperty(kk, Ok, {
            value: kk[Ok] || {},
            enumerable: !1,
            configurable: !0
          }), kk[Ok][Bk] = tk || {
            value: void 0,
            writable: !0,
            enumerable: !0,
            configurable: !0
          }, Object.defineProperty(kk, Nk, {
            value: Fk,
            enumerable: !1,
            configurable: !0
          }), Object.defineProperty(kk, Bk, {
            value: Fk,
            enumerable: !1,
            configurable: !0
          }), "string" === typeof kk[Fk].type || rF(kk[Fk].type) || (void 0 === kk[Hk] && Object.defineProperty(kk, Hk, {
            value: [],
            enumerable: !1,
            configurable: !0
          }), kk[Hk].push(Fk));
          const ak = kk[Fk].type;
          if (ak && "object" === typeof ak && void 0 !== ak.stream) {
            if (void 0 !== ak.array) throw new Error(EF);
            kk[Fk].stream = !0, kk[Tk] || Object.defineProperty(kk, Tk, {
              value: [],
              enumerable: !1,
              configurable: !0,
              writable: !0
            }), kk[Tk].includes(Fk) || kk[Tk].push(Fk);
            const tk = Rk?.priority;
            "function" === typeof tk && jF.setStreamPriority(kk, Bk, tk)
          }
        },
        setTag(kk, Fk, Bk) {
          const Rk = kk[Fk];
          if (kk[Rk].tag = Bk, kk[uk] || (Object.defineProperty(kk, uk, {
              value: [],
              enumerable: !1,
              configurable: !0
            }), Object.defineProperty(kk, Mk, {
              value: {},
              enumerable: !1,
              configurable: !0
            })), kk[uk].push(Rk), Bk < 0) kk[Mk][Bk] || (kk[Mk][Bk] = []), kk[Mk][Bk].push(Rk);
          else
            for (let tk = Bk; tk > 0; tk &= tk - 1) {
              const Fk = tk & -tk;
              kk[Mk][Fk] || (kk[Mk][Fk] = []), kk[Mk][Fk].push(Rk)
            }
        },
        setUnreliable(kk, Fk) {
          const Bk = kk[Fk];
          if ("string" !== typeof kk[Bk].type) throw new Error(`@unreliable cannot be applied to ref-type field "${Fk}". For ref-type fields, mark each primitive sub-field with @unreliable instead. See README "Limitations and best practices".`);
          kk[Bk].unreliable = !0, kk[gk] || Object.defineProperty(kk, gk, {
            value: [],
            enumerable: !1,
            configurable: !0,
            writable: !0
          }), kk[gk].push(Bk)
        },
        setPatchOnly(kk, Fk) {
          const Bk = kk[Fk];
          if (kk[Bk].fullStateOnly) throw new Error(`field "${Fk}" cannot be both patchOnly and fullStateOnly \u2014 those are the only two delivery channels, so the field would never reach a client.`);
          kk[Bk].patchOnly = !0, xF(kk, Uk, Bk), xF(kk, ck, Bk)
        },
        setDeprecated(kk, Fk) {
          const Bk = kk[Fk];
          kk[Bk].deprecated = !0, xF(kk, ck, Bk), Object.defineProperty(kk, Bk, {
            value: kk[Bk],
            enumerable: !1,
            configurable: !0
          })
        },
        setFullStateOnly(kk, Fk) {
          const Bk = kk[Fk];
          if (kk[Bk].patchOnly) throw new Error(`field "${Fk}" cannot be both patchOnly and fullStateOnly \u2014 those are the only two delivery channels, so the field would never reach a client.`);
          kk[Bk].fullStateOnly = !0, xF(kk, Gk, Bk)
        },
        setStream(kk, Fk) {
          const Bk = kk[Fk];
          kk[Bk].stream = !0, kk[Tk] || Object.defineProperty(kk, Tk, {
            value: [],
            enumerable: !1,
            configurable: !0,
            writable: !0
          }), kk[Tk].push(Bk)
        },
        setStreamPriority(kk, Fk, Bk) {
          const Rk = kk[Fk];
          kk[rk] || Object.defineProperty(kk, rk, {
            value: {},
            enumerable: !1,
            configurable: !0,
            writable: !0
          }), kk[rk][Rk] = Bk
        },
        getStreamPriority: (kk, Fk) => kk?.[rk]?.[Fk],
        defineField(kk, Fk, Bk, Rk, tk) {
          const ak = CF(tk, `${kk.name}.${Rk}`),
            {
              complexTypeKlass: Xk,
              childType: bk
            } = qF(ak);
          jF.addField(Fk, Bk, Rk, ak, LR(Rk, Bk, bk, Xk)), Fk[Ok][Rk] && Object.defineProperty(kk.prototype, Rk, Fk[Ok][Rk]), ("string" === typeof ak || rF(ak)) && (Fk[Sk] || Object.defineProperty(Fk, Sk, {
            value: [],
            enumerable: !1,
            configurable: !0,
            writable: !0
          }), Fk[Sk][Bk] = "string" === typeof ak ? BF[ak] : PF(ak.quantized))
        },
        setFields(kk, Fk) {
          const Bk = kk.prototype.constructor;
          hF.register(Bk);
          const Rk = Object.getPrototypeOf(Bk),
            tk = Rk && Rk[Symbol.metadata],
            ak = jF.initialize(Bk);
          Bk[wk] || (Bk[wk] = uR[wk]), Bk[dk] || (Bk[dk] = uR[dk]), Bk[sk] || (Bk[sk] = uR[sk]), Bk.prototype.toJSON || (Bk.prototype.toJSON = uR.prototype.toJSON);
          let Xk = ak[Nk] ?? (tk && tk[Nk]) ?? -1;
          Xk++, ak[Sk] || Object.defineProperty(ak, Sk, {
            value: tk?.[Sk] ? [...tk[Sk]] : [],
            enumerable: !1,
            configurable: !0,
            writable: !0
          });
          for (const bk in Fk) {
            if (void 0 !== ak[bk]) throw new Error(`@colyseus/schema: Duplicate '${bk}' definition on '${Bk.name||"(anonymous)"}'.`);
            jF.defineField(Bk, ak, Xk, bk, Fk[bk]), Xk++
          }
          return kk
        },
        isDeprecated: (kk, Fk) => !0 === kk[Fk].deprecated,
        initialize(kk) {
          const Fk = Object.getPrototypeOf(kk),
            Bk = Fk[Symbol.metadata];
          let Rk = kk[Symbol.metadata] ?? Object.create(null);
          if (Fk !== uR && Rk === Bk && (Rk = Object.create(null), Bk)) {
            Object.setPrototypeOf(Rk, Bk), Object.defineProperty(Rk, Nk, {
              value: Bk[Nk],
              enumerable: !1,
              configurable: !0,
              writable: !0
            }), void 0 !== Bk[uk] && (Object.defineProperty(Rk, uk, {
              value: [...Bk[uk]],
              enumerable: !1,
              configurable: !0,
              writable: !0
            }), Object.defineProperty(Rk, Mk, {
              value: {
                ...Bk[Mk]
              },
              enumerable: !1,
              configurable: !0,
              writable: !0
            }));
            for (const kk of KF) {
              const Fk = Bk[kk];
              void 0 !== Fk && Object.defineProperty(Rk, kk, {
                value: [...Fk],
                enumerable: !1,
                configurable: !0,
                writable: !0
              })
            }
            Object.defineProperty(Rk, Ok, {
              value: {
                ...Bk[Ok]
              },
              enumerable: !1,
              configurable: !0,
              writable: !0
            })
          }
          return Object.defineProperty(kk, Symbol.metadata, {
            value: Rk,
            writable: !1,
            configurable: !0
          }), Rk
        },
        isValidInstance: kk => kk.constructor[Symbol.metadata] && Object.prototype.hasOwnProperty.call(kk.constructor[Symbol.metadata], Nk),
        getFields(kk) {
          const Fk = kk[Symbol.metadata],
            Bk = {};
          for (let Rk = 0; Rk <= Fk[Nk]; Rk++) Bk[Fk[Rk].name] = Fk[Rk].type;
          return Bk
        },
        hasViewTagAtIndex: (kk, Fk) => kk?.[uk]?.includes(Fk),
        hasUnreliableAtIndex: (kk, Fk) => kk?.[gk]?.includes(Fk),
        hasPatchOnlyAtIndex: (kk, Fk) => kk?.[Uk]?.includes(Fk),
        hasFullStateOnlyAtIndex: (kk, Fk) => kk?.[Gk]?.includes(Fk),
        hasStreamAtIndex: (kk, Fk) => kk?.[Tk]?.includes(Fk)
      },
      lF = (kk, Fk, Bk) => kk(Fk, Bk);
    class nF {
      dirtyLow = 0;
      dirtyHigh = 0;
      ops;
      constructor(kk) {
        this.ops = new Uint8Array(Math.max(kk + 1, 1))
      }
      record(kk, Fk) {
        const Bk = this.ops[kk];
        0 === Bk ? this.ops[kk] = Fk : (Bk === tk.DELETE || Bk === tk.ADD && Fk === tk.DELETE_AND_ADD) && (this.ops[kk] = tk.DELETE_AND_ADD), kk < 32 ? this.dirtyLow |= 1 << kk : this.dirtyHigh |= 1 << kk - 32
      }
      recordDelete(kk, Fk) {
        this.ops[kk] = Fk, kk < 32 ? this.dirtyLow |= 1 << kk : this.dirtyHigh |= 1 << kk - 32
      }
      recordRaw(kk, Fk) {
        this.record(kk, Fk)
      }
      operationAt(kk) {
        const Fk = this.ops[kk];
        return 0 === Fk ? void 0 : Fk
      }
      setOperationAt(kk, Fk) {
        this.ops[kk] = Fk
      }
      forEach(kk) {
        this.forEachWithCtx(kk, lF)
      }
      forEachWithCtx(kk, Fk) {
        let Bk = this.dirtyLow,
          Rk = this.dirtyHigh;
        const tk = this.ops;
        for (; 0 !== Bk;) {
          const Rk = Bk & -Bk,
            ak = 31 - Math.clz32(Rk);
          Bk ^= Rk, Fk(kk, ak, tk[ak])
        }
        for (; 0 !== Rk;) {
          const Bk = Rk & -Rk,
            ak = 31 - Math.clz32(Bk) + 32;
          Rk ^= Bk, Fk(kk, ak, tk[ak])
        }
      }
      size() {
        return QF(this.dirtyLow) + QF(this.dirtyHigh)
      }
      has() {
        return 0 !== (this.dirtyLow | this.dirtyHigh)
      }
      reset() {
        this.dirtyLow = 0, this.dirtyHigh = 0, this.ops.fill(0)
      }
    }
    class IF {
      Xy = new Map;
      pureOps = [];
      record(kk, Fk) {
        const Bk = this.Xy.get(kk);
        void 0 === Bk ? this.Xy.set(kk, Fk) : (Bk === tk.DELETE || Bk === tk.ADD && Fk === tk.DELETE_AND_ADD) && this.Xy.set(kk, tk.DELETE_AND_ADD)
      }
      recordDelete(kk, Fk) {
        this.Xy.set(kk, Fk)
      }
      recordRaw(kk, Fk) {
        this.Xy.set(kk, Fk)
      }
      recordPure(kk) {
        this.pureOps.push([this.Xy.size, kk])
      }
      operationAt(kk) {
        return this.Xy.get(kk)
      }
      setOperationAt(kk, Fk) {
        this.Xy.has(kk) && this.Xy.set(kk, Fk)
      }
      forEach(kk) {
        this.forEachWithCtx(kk, lF)
      }
      forEachWithCtx(kk, Fk) {
        const Bk = this.pureOps;
        if (Bk.length > 0) {
          let Rk = 0,
            tk = 0;
          for (const [ak, Xk] of this.Xy) {
            for (; Rk < Bk.length && Bk[Rk][0] <= tk;) {
              const tk = Bk[Rk++][1];
              Fk(kk, -tk, tk)
            }
            Fk(kk, ak, Xk), tk++
          }
          for (; Rk < Bk.length;) {
            const tk = Bk[Rk++][1];
            Fk(kk, -tk, tk)
          }
        } else
          for (const [Rk, tk] of this.Xy) Fk(kk, Rk, tk)
      }
      size() {
        return this.Xy.size + this.pureOps.length
      }
      has() {
        return this.Xy.size > 0 || this.pureOps.length > 0
      }
      reset() {
        this.Xy.clear(), this.pureOps.length = 0
      }
      shift(kk) {
        const Fk = new Map;
        for (const [Bk, Rk] of this.Xy) Fk.set(Bk + kk, Rk);
        this.Xy = Fk
      }
    }

    function QF(kk) {
      return 16843009 * ((kk = (858993459 & (kk -= kk >>> 1 & 1431655765)) + (kk >>> 2 & 858993459)) + (kk >>> 4) & 252645135) >>> 24
    }

    function kB(kk) {
      if (void 0 === kk) return 0;
      let Fk = 0;
      for (let Bk = 0, Rk = kk.length; Bk < Rk; Bk++) {
        const Rk = kk[Bk];
        Rk < 32 && (Fk |= 1 << Rk)
      }
      return Fk
    }

    function FB(kk) {
      const Fk = kk.constructor;
      if (Object.prototype.hasOwnProperty.call(Fk, Ek)) return Fk[Ek];
      const Bk = Fk[Symbol.metadata],
        Rk = jF.isValidInstance(kk),
        tk = (Bk?.[uk]?.length ?? 0) > 0,
        ak = function(kk) {
          const Fk = [],
            Bk = [],
            Rk = [],
            tk = [],
            ak = kk?.[Nk];
          if (void 0 === ak) return {
            names: Fk,
            types: Bk,
            tags: Rk,
            encoders: tk
          };
          const Xk = kk[Sk];
          for (let bk = 0; bk <= ak; bk++) {
            const ak = kk[bk];
            void 0 !== ak ? (Fk[bk] = ak.name, Bk[bk] = ak.type, Rk[bk] = ak.tag, tk[bk] = Xk?.[bk]) : (Fk[bk] = void 0, Bk[bk] = void 0, Rk[bk] = void 0, tk[bk] = void 0)
          }
          return {
            names: Fk,
            types: Bk,
            tags: Rk,
            encoders: tk
          }
        }(Bk),
        Xk = Rk && !tk ? void 0 : Fk[Vk],
        bk = {
          encoder: Fk[dk],
          filter: Xk,
          metadata: Bk,
          isSchema: Rk,
          filterBitmask: Rk ? kB(Bk?.[uk]) : 0,
          hasAnyFullStateOnly: (Bk?.[Gk]?.length ?? 0) > 0,
          hasAnyUnreliable: (Bk?.[gk]?.length ?? 0) > 0,
          hasAnyStream: (Bk?.[Tk]?.length ?? 0) > 0,
          hasAnyView: tk,
          fullStateOnlyBitmask: kB(Bk?.[Gk]),
          unreliableBitmask: kB(Bk?.[gk]),
          streamBitmask: kB(Bk?.[Tk]),
          names: ak.names,
          types: ak.types,
          tags: ak.tags,
          encoders: ak.encoders
        };
      return Object.defineProperty(Fk, Ek, {
        value: bk,
        enumerable: !1,
        writable: !0,
        configurable: !0
      }), bk
    }

    function BB(kk, Fk) {
      if (void 0 !== kk.parentRef && Fk(kk.parentRef, kk._parentIndex)) return !0;
      for (let Bk = kk.extraParents; void 0 !== Bk; Bk = Bk.next)
        if (Fk(Bk.ref, Bk.index)) return !0;
      return !1
    }
    const RB = (kk, Fk) => {
        kk.isFieldUnreliable(Fk) ? kk.ensureUnreliableRecorder().record(Fk, tk.ADD) : kk.record(Fk, tk.ADD)
      },
      tB = (kk, Fk) => kk(Fk);

    function aB(kk, Fk, Bk) {
      const Rk = kk.refTarget;
      if (void 0 !== Rk[fk]) {
        if (kk.isPatchOnly) return;
        if (Array.isArray(Rk.items)) {
          const kk = Rk.items;
          for (let Rk = 0, tk = kk.length; Rk < tk; Rk++) void 0 !== kk[Rk] && Bk(Fk, Rk)
        } else if (void 0 !== Rk.journal)
          for (const [kk, tk] of Rk.journal.keyByIndex) Rk.$items.has(tk) && Bk(Fk, kk);
        else if (void 0 !== Rk.$items)
          for (const kk of Rk.$items.keys()) Bk(Fk, kk)
      } else {
        const tk = kk.metadata;
        if (!tk) return;
        const ak = tk[Nk] ?? -1,
          Xk = tk[ck],
          bk = kk.encDescriptor.names;
        for (let kk = 0; kk <= ak; kk++) {
          const tk = bk[kk];
          if (void 0 === tk) continue;
          if (Xk && Xk.includes(kk)) continue;
          const ak = Rk[tk];
          void 0 !== ak && null !== ak && Bk(Fk, kk)
        }
      }
    }

    function XB(kk, Fk, Bk, Rk) {
      ! function(kk, Fk, Bk) {
        if (!Fk) return;
        const Rk = Fk[yk],
          tk = !Rk._isSchema;
        let ak;
        tk ? (Fk = Rk.parent, Bk = Rk.parentIndex, ak = Fk?.[yk].metadata) : ak = Rk.metadata;
        const Xk = (ak?.[Uk]?.includes(Bk) ? EB : 0) | (ak?.[Gk]?.includes(Bk) ? SB : 0),
          bk = Rk.flags & uB | Xk,
          wk = kk.flags;
        kk.flags = wk | bk;
        bk & ~wk & SB && (kk.reset(), kk.unreliableRecorder?.reset());
        const dk = kk.root?.types;
        if (!dk?.hasFilters) return;
        const sk = ak?.[uk]?.includes(Bk) ?? !1,
          Vk = ak?.[Tk]?.includes(Bk) ?? !1,
          Jk = Rk.isFiltered || sk || Vk;
        if (kk.isFiltered = Jk, Vk && !tk) {
          kk.isStreamCollection = !0;
          const Fk = NF(kk.ref);
          if (void 0 === Fk.priority) {
            const kk = jF.getStreamPriority(ak, Bk);
            void 0 !== kk && (Fk.priority = kk)
          }
          kk.root?.registerStream(kk.ref)
        }
        if (Jk) {
          const Fk = wB(kk);
          kk.isVisibilitySharedWithParent = Rk.isFiltered && Fk && !Vk && (!sk || tk && ak[Bk].tag !== yR)
        }
      }(kk, Fk, Bk), kk.isFullStateOnly || (kk.has() && kk.root?.enqueueChangeTree(kk), kk.unreliableRecorder?.has() && kk.root?.enqueueUnreliable(kk), kk.has() || kk.unreliableRecorder?.has() || kk.root?.enqueueChangeTree(kk))
    }

    function bB(kk) {
      const Fk = kk.pendingFilterRefresh;
      for (let Bk = 0; Bk < Fk.length; Bk++) {
        const kk = Fk[Bk];
        0 !== (kk.flags & HB) && dB(kk)
      }
      Fk.length = 0
    }

    function wB(kk) {
      return kk._isSchema || "string" !== typeof kk.refTarget[fk]
    }

    function dB(kk) {
      kk.flags &= ~HB;
      const Fk = kk.root;
      if (void 0 === Fk || void 0 === kk.parentRef) return;
      const Bk = wB(kk);
      let Rk = eB(kk, kk.parentRef, kk._parentIndex, Bk);
      for (let ak = kk.extraParents; void 0 !== ak && Rk !== AB; ak = ak.next) Rk |= eB(kk, ak.ref, ak.index, Bk);
      if (0 === Rk) return;
      kk.isVisibilitySharedWithParent = 0 !== (Rk & JB);
      const tk = 0 === (Rk & VB);
      tk !== kk.isFiltered && (kk.isFiltered = tk, tk || kk.isFullStateOnly || (kk.forEachLiveWithCtx(kk, RB), kk.has() && Fk.enqueueChangeTree(kk), kk.unreliableRecorder?.has() && Fk.enqueueUnreliable(kk)), kk.forEachChildWithCtx(kk, yB))
    }
    const sB = 1,
      VB = 2,
      JB = 4,
      AB = sB | VB | JB;

    function eB(kk, Fk, Bk, Rk) {
      const tk = Fk[yk];
      if (tk.root !== kk.root || ! function(kk, Fk, Bk) {
          const Rk = Fk.refTarget;
          if (Fk.isArray) {
            const Fk = Rk.items,
              tk = Fk[Bk];
            if (void 0 !== tk && tk[yk] === kk) return !0;
            for (let Bk = 0, Rk = Fk.length; Bk < Rk; Bk++) {
              const Rk = Fk[Bk];
              if (void 0 !== Rk && Rk[yk] === kk) return !0
            }
            return !1
          }
          const tk = Fk.getValue(Bk);
          return void 0 !== tk && tk[yk] === kk
        }(kk, tk, Bk)) return 0;
      tk.flags & HB && dB(tk);
      let ak = sB;
      if (tk._isSchema) {
        void 0 !== tk.encDescriptor.tags[Bk] || tk.isFieldStream(Bk) || (tk.isFiltered ? Rk && (ak |= JB) : ak |= VB)
      } else if (tk.isFiltered) {
        if (Rk && !tk.isStreamCollection) {
          const kk = tk.parent?.[yk];
          (kk?._isSchema ? kk.encDescriptor.tags[tk.parentIndex] : void 0) !== yR && (ak |= JB)
        }
      } else ak |= VB;
      return ak
    }
    const yB = (kk, Fk, Bk) => {
      dB(Fk)
    };

    function fB(kk, Fk, Bk, Rk) {
      if (kk.addParent(Fk, Rk), !Bk) return;
      const tk = Bk.add(kk);
      Bk !== kk.root && (kk.root = Bk, XB(kk, Fk, Rk));
      const ak = Fk?.[yk];
      if (void 0 !== ak && void 0 !== ak.subscribedViews && void 0 !== Fk[fk] && function(kk, Fk, Bk, Rk) {
          const tk = kk.subscribedViews;
          if (void 0 === tk) return;
          const ak = kk.isStreamCollection,
            Xk = ak ? kk.ref : void 0,
            bk = ak ? void 0 : Bk[yk];
          for (let wk = 0, dk = tk.length; wk < dk; wk++) {
            let kk = tk[wk];
            for (; 0 !== kk;) {
              const Bk = kk & -kk;
              kk ^= Bk;
              const dk = 32 * wk + (31 - Math.clz32(Bk)),
                sk = Rk.activeViews.get(dk),
                Vk = sk?.deref();
              void 0 !== Vk ? ak ? UF(Xk, dk, Fk) : void 0 !== bk && Vk.markVisible(bk) : tk[wk] &= ~Bk
            }
          }
        }(ak, Rk, kk.ref, Bk), tk) {
        let Fk = iB[YB];
        void 0 === Fk && (Fk = {
          parentRef: void 0,
          root: void 0
        }, iB[YB] = Fk), Fk.parentRef = kk.ref, Fk.root = Bk, YB++, WB(kk, Fk, oB), YB--
      }
    }

    function mB(kk, Fk, Bk) {
      kk(Fk, Bk)
    }

    function WB(kk, Fk, Bk) {
      const Rk = kk.refTarget;
      if (Rk[fk]) {
        if ("string" !== typeof Rk[fk]) {
          const kk = Rk.items;
          if (void 0 !== kk)
            for (let Rk = 0, tk = kk.length; Rk < tk; Rk++) {
              const tk = kk[Rk];
              tk && Bk(Fk, tk[yk], Rk)
            } else {
              const kk = Rk.$items,
                tk = Rk._collectionIndexes;
              for (const Rk of kk.keys()) {
                const ak = kk.get(Rk);
                ak && Bk(Fk, ak[yk], tk?.[Rk] ?? Rk)
              }
            }
        }
      } else {
        const tk = kk.metadata,
          ak = tk?.[Hk];
        if (!ak) return;
        const Xk = kk.encDescriptor.names;
        for (let kk = 0, bk = ak.length; kk < bk; kk++) {
          const tk = ak[kk],
            bk = Rk[Xk[tk]];
          bk && Bk(Fk, bk[yk], tk)
        }
      }
    }

    function vB(kk, Fk, Bk) {
      Fk.root !== kk ? Fk.setRoot(kk) : kk.add(Fk)
    }
    const iB = [];
    let YB = 0;

    function oB(kk, Fk, Bk) {
      if (Fk.root === kk.root) return kk.root.add(Fk), void kk.root.moveNextToParent(Fk);
      Fk.setParent(kk.parentRef, kk.root, Bk)
    }

    function LB(kk, Fk, Bk) {
      const Rk = (3 & Bk) << 3;
      return Bk < 4 ? kk >>> Rk & 255 : Fk >>> Rk & 255
    }
    const OB = (kk, Fk, Bk) => kk(Fk, Bk);
    const EB = 16,
      SB = 32,
      NB = 128,
      HB = 256,
      uB = EB | SB;
    class MB {
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
      set isFiltered(kk) {
        this.flags = kk ? 1 | this.flags : -2 & this.flags
      }
      get isVisibilitySharedWithParent() {
        return 0 !== (2 & this.flags)
      }
      set isVisibilitySharedWithParent(kk) {
        this.flags = kk ? 2 | this.flags : -3 & this.flags
      }
      get isNew() {
        return 0 !== (4 & this.flags)
      }
      set isNew(kk) {
        this.flags = kk ? 4 | this.flags : -5 & this.flags
      }
      get isUnreliable() {
        return 0 !== (8 & this.flags)
      }
      set isUnreliable(kk) {
        this.flags = kk ? 8 | this.flags : -9 & this.flags
      }
      get isPatchOnly() {
        return 0 !== (this.flags & EB)
      }
      set isPatchOnly(kk) {
        this.flags = kk ? this.flags | EB : this.flags & ~EB
      }
      get isFullStateOnly() {
        return 0 !== (this.flags & SB)
      }
      set isFullStateOnly(kk) {
        this.flags = kk ? this.flags | SB : this.flags & ~SB
      }
      get isStreamCollection() {
        return 0 !== (64 & this.flags)
      }
      set isStreamCollection(kk) {
        this.flags = kk ? 64 | this.flags : -65 & this.flags
      }
      get needsRestage() {
        return 0 !== (this.flags & NB)
      }
      set needsRestage(kk) {
        this.flags = kk ? this.flags | NB : -129 & this.flags
      }
      get hasFilteredFields() {
        return this.isFiltered || this.encDescriptor.hasAnyView
      }
      ensureUnreliableRecorder() {
        return void 0 === this.unreliableRecorder && (this.unreliableRecorder = this._isSchema ? new nF(this.metadata?.[Nk] ?? 0) : new IF), this.unreliableRecorder
      }
      isFieldUnreliable(kk) {
        const Fk = this.encDescriptor;
        return !!Fk.hasAnyUnreliable && (kk < 32 ? 0 !== (Fk.unreliableBitmask & 1 << kk) : jF.hasUnreliableAtIndex(this.metadata, kk))
      }
      isFieldFullStateOnly(kk) {
        if (this.isFullStateOnly) return !0;
        const Fk = this.encDescriptor;
        return !!Fk.hasAnyFullStateOnly && (kk < 32 ? 0 !== (Fk.fullStateOnlyBitmask & 1 << kk) : jF.hasFullStateOnlyAtIndex(this.metadata, kk))
      }
      isFieldStream(kk) {
        const Fk = this.encDescriptor;
        return !!Fk.hasAnyStream && (kk < 32 ? 0 !== (Fk.streamBitmask & 1 << kk) : jF.hasStreamAtIndex(this.metadata, kk))
      }
      constructor(kk) {
        let Fk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : kk;
        this.ref = kk, this.refTarget = Fk;
        const Bk = FB(kk);
        this.encDescriptor = Bk, this.metadata = Bk.metadata;
        const Rk = Bk.isSchema;
        if (this._isSchema = Rk, this.ops = void 0, this.collDirty = void 0, this.collPureOps = void 0, Rk) {
          const kk = this.metadata?.[Nk] ?? 0;
          kk > 7 && (this.ops = new Uint8Array(kk + 1))
        } else this.collDirty = new Map
      }
      _opAt(kk) {
        const Fk = this.ops;
        if (void 0 !== Fk) return Fk[kk];
        const Bk = (3 & kk) << 3;
        return kk < 4 ? this.opsLow >>> Bk & 255 : this.opsHigh >>> Bk & 255
      }
      _opPut(kk, Fk) {
        const Bk = this.ops;
        if (void 0 !== Bk) return void(Bk[kk] = Fk);
        const Rk = (3 & kk) << 3,
          tk = ~(255 << Rk);
        kk < 4 ? this.opsLow = this.opsLow & tk | Fk << Rk : this.opsHigh = this.opsHigh & tk | Fk << Rk
      }
      _markDirty(kk) {
        kk < 32 ? this.dirtyLow |= 1 << kk : this.dirtyHigh |= 1 << kk - 32
      }
      record(kk, Fk) {
        if (this._isSchema) {
          const Bk = this._opAt(kk);
          0 === Bk ? this._opPut(kk, Fk) : (Bk === tk.DELETE || Bk === tk.ADD && Fk === tk.DELETE_AND_ADD) && this._opPut(kk, tk.DELETE_AND_ADD), this._markDirty(kk)
        } else {
          const Bk = this.collDirty,
            Rk = Bk.get(kk);
          let ak;
          ak = void 0 === Rk ? Fk : Rk === tk.DELETE || Rk === tk.ADD && Fk === tk.DELETE_AND_ADD ? tk.DELETE_AND_ADD : Rk, Bk.set(kk, ak)
        }
      }
      recordDelete(kk, Fk) {
        this._isSchema ? (this._opPut(kk, Fk), this._markDirty(kk)) : this.collDirty.set(kk, Fk)
      }
      recordRaw(kk, Fk) {
        this._isSchema ? (this._opPut(kk, Fk), this._markDirty(kk)) : this.collDirty.set(kk, Fk)
      }
      recordPure(kk) {
        if (this._isSchema) throw new Error("ChangeTree (Schema): pure operations are not supported");
        (this.collPureOps ??= []).push([this.collDirty.size, kk])
      }
      operationAt(kk) {
        if (this._isSchema) {
          const Fk = this._opAt(kk);
          return 0 === Fk ? void 0 : Fk
        }
        return this.collDirty.get(kk)
      }
      setOperationAt(kk, Fk) {
        if (this._isSchema) this._opPut(kk, Fk);
        else {
          const Bk = this.collDirty;
          Bk.has(kk) && Bk.set(kk, Fk)
        }
      }
      forEach(kk) {
        this.forEachWithCtx(kk, OB)
      }
      forEachWithCtx(kk, Fk) {
        if (this._isSchema) {
          let Bk = this.dirtyLow,
            Rk = this.dirtyHigh;
          const tk = this.ops;
          if (void 0 !== tk) {
            for (; 0 !== Bk;) {
              const Rk = Bk & -Bk,
                ak = 31 - Math.clz32(Rk);
              Bk ^= Rk, Fk(kk, ak, tk[ak])
            }
            for (; 0 !== Rk;) {
              const Bk = Rk & -Rk,
                ak = 31 - Math.clz32(Bk) + 32;
              Rk ^= Bk, Fk(kk, ak, tk[ak])
            }
          } else {
            const Rk = this.opsLow,
              tk = this.opsHigh;
            for (; 0 !== Bk;) {
              const ak = Bk & -Bk,
                Xk = 31 - Math.clz32(ak);
              Bk ^= ak, Fk(kk, Xk, LB(Rk, tk, Xk))
            }
          }
          return
        }
        const Bk = this.collDirty,
          Rk = this.collPureOps;
        if (void 0 !== Rk && Rk.length > 0) {
          let tk = 0,
            ak = 0;
          for (const [Xk, bk] of Bk) {
            for (; tk < Rk.length && Rk[tk][0] <= ak;) {
              const Bk = Rk[tk++][1];
              Fk(kk, -Bk, Bk)
            }
            Fk(kk, Xk, bk), ak++
          }
          for (; tk < Rk.length;) {
            const Bk = Rk[tk++][1];
            Fk(kk, -Bk, Bk)
          }
        } else
          for (const [tk, ak] of Bk) Fk(kk, tk, ak)
      }
      size() {
        return this._isSchema ? QF(this.dirtyLow) + QF(this.dirtyHigh) : this.collDirty.size + (this.collPureOps?.length ?? 0)
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
      insertAt(kk, Fk) {
        if (this._isSchema) throw new Error("ChangeTree (Schema): insertAt is not supported");
        const Bk = this.collDirty,
          Rk = new Map,
          ak = !this.paused && !this.isFullStateOnly;
        if (kk > 0)
          for (const [tk, Xk] of Bk) tk < kk && Rk.set(tk, Xk);
        if (ak)
          for (let Xk = 0; Xk < Fk; Xk++) Rk.set(kk + Xk, tk.ADD);
        for (const [tk, Xk] of Bk) tk >= kk && Rk.set(tk + Fk, Xk);
        this.collDirty = Rk, ak && this.root?.enqueueChangeTree(this)
      }
      removeAt(kk, Fk) {
        if (this._isSchema) throw new Error("ChangeTree (Schema): removeAt is not supported");
        const Bk = this.collDirty,
          Rk = kk + Fk;
        let tk = !1;
        for (const Xk of Bk.keys())
          if (Xk >= Rk) {
            tk = !0;
            break
          } if (!tk) {
          for (let Fk = kk; Fk < Rk; Fk++) Bk.delete(Fk);
          return
        }
        const ak = new Map;
        for (const [Xk, bk] of Bk) Xk < kk ? ak.set(Xk, bk) : Xk >= Rk && ak.set(Xk - Fk, bk);
        this.collDirty = ak
      }
      unshift(kk) {
        this.insertAt(0, kk)
      }
      setRoot(kk) {
        ! function(kk, Fk) {
          kk.root = Fk;
          const Bk = Fk.add(kk);
          XB(kk, kk.parent, kk.parentIndex), Bk && WB(kk, Fk, vB)
        }(this, kk)
      }
      setParent(kk, Fk, Bk) {
        fB(this, kk, Fk, Bk)
      }
      forEachChild(kk) {
        WB(this, kk, mB)
      }
      forEachChildWithCtx(kk, Fk) {
        WB(this, kk, Fk)
      }
      forEachLive(kk) {
        aB(this, kk, tB)
      }
      forEachLiveWithCtx(kk, Fk) {
        aB(this, kk, Fk)
      }
      operation(kk) {
        this.paused || this.isFullStateOnly || (this.recordPure(kk), this.root?.enqueueChangeTree(this))
      }
      _routeAndRecord(kk, Fk, Bk) {
        if (!this.paused && !this.isFieldFullStateOnly(kk)) {
          if (this.isFieldUnreliable(kk) && !this.isNew) {
            const Rk = this.ensureUnreliableRecorder();
            return Bk ? Rk.recordRaw(kk, Fk) : Rk.record(kk, Fk), void this.root?.enqueueUnreliable(this)
          }
          Bk ? this.recordRaw(kk, Fk) : this.record(kk, Fk), this.root?.enqueueChangeTree(this)
        }
      }
      change(kk) {
        let Fk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : tk.ADD;
        this._routeAndRecord(kk, Fk, !1)
      }
      indexedOperation(kk, Fk) {
        this._routeAndRecord(kk, Fk, !0)
      }
      getChange(kk) {
        return this.operationAt(kk)
      }
      pause() {
        this.paused = !0
      }
      resume() {
        this.paused = !1
      }
      untracked(kk) {
        const Fk = this.paused;
        this.paused = !0;
        try {
          return kk()
        } finally {
          this.paused = Fk
        }
      }
      markDirty(kk) {
        let Fk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : tk.ADD;
        const Bk = this.paused;
        this.paused = !1;
        try {
          this.change(kk, Fk)
        } finally {
          this.paused = Bk
        }
      }
      getValue(kk) {
        let Fk = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return this.refTarget[Jk](kk, Fk)
      }
      delete(kk, Fk) {
        if (void 0 === kk) {
          try {
            throw new Error(`@colyseus/schema ${this.ref.constructor.name}: trying to delete non-existing index '${kk}'`)
          } catch (bt) {
            console.warn(bt)
          }
          return
        }
        if (this.paused || this.isFieldFullStateOnly(kk)) return this.getValue(kk);
        const Bk = this.isFieldUnreliable(kk) && !this.isNew;
        Bk ? this.ensureUnreliableRecorder().recordDelete(kk, Fk ?? tk.DELETE) : this.recordDelete(kk, Fk ?? tk.DELETE);
        const Rk = this.getValue(kk);
        return Rk && Rk[yk] && this.root?.remove(Rk[yk]), Bk ? this.root?.enqueueUnreliable(this) : this.root?.enqueueChangeTree(this), Rk
      }
      endEncode() {
        this.reset(), this.changesNode = void 0, this._isSchema || this.refTarget[Wk]?.(), this.isNew = !1
      }
      endEncodeUnreliable() {
        this.unreliableRecorder?.reset(), this.unreliableChangesNode = void 0, this._isSchema || this.refTarget[Wk]?.()
      }
      discard() {
        this._isSchema || this.refTarget[Wk]?.(), this.reset(), this.unreliableRecorder?.reset()
      }
      discardAll() {
        const kk = kk => {
          if (kk < 0) return;
          const Fk = this.getValue(kk);
          Fk && Fk[yk] && Fk[yk].discardAll()
        };
        this.forEach(kk), this.unreliableRecorder?.forEach(kk), this.discard()
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
      addParent(kk, Fk) {
        ! function(kk, Fk, Bk) {
          if (kk.parentRef) {
            if (kk.parentRef[yk] === Fk[yk]) return void(kk._parentIndex = Bk);
            if (BB(kk, ((kk, Bk) => kk[yk] === Fk[yk]))) return void(kk._parentIndex = Bk)
          }
          void 0 === kk.parentRef ? (kk.parentRef = Fk, kk._parentIndex = Bk) : (kk.extraParents = {
            ref: kk.parentRef,
            index: kk._parentIndex,
            next: kk.extraParents
          }, kk.parentRef = Fk, kk._parentIndex = Bk)
        }(this, kk, Fk)
      }
      setParentIndex(kk, Fk) {
        ! function(kk, Fk, Bk) {
          if (void 0 !== kk.extraParents)
            if (kk.parentRef[yk] !== Fk[yk]) {
              for (let Rk = kk.extraParents; void 0 !== Rk; Rk = Rk.next)
                if (Rk.ref[yk] === Fk[yk]) return void(Rk.index = Bk)
            } else kk._parentIndex = Bk;
          else kk._parentIndex = Bk
        }(this, kk, Fk)
      }
      removeParent() {
        return function(kk, Fk) {
          if (kk.parentRef && kk.parentRef[yk] === Fk[yk]) return kk.extraParents ? (kk.parentRef = kk.extraParents.ref, kk._parentIndex = kk.extraParents.index, kk.extraParents = kk.extraParents.next) : (kk.parentRef = void 0, kk._parentIndex = void 0), !0;
          let Bk = kk.extraParents,
            Rk = null;
          for (; Bk;) {
            if (Bk.ref[yk] === Fk[yk]) return Rk ? Rk.next = Bk.next : kk.extraParents = Bk.next, !0;
            Rk = Bk, Bk = Bk.next
          }
          return void 0 === kk.parentRef
        }(this, arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.parent)
      }
      findParent(kk) {
        return function(kk, Fk) {
          if (void 0 !== kk.parentRef && Fk(kk.parentRef, kk._parentIndex)) return {
            ref: kk.parentRef,
            index: kk._parentIndex
          };
          for (let Bk = kk.extraParents; void 0 !== Bk; Bk = Bk.next)
            if (Fk(Bk.ref, Bk.index)) return {
              ref: Bk.ref,
              index: Bk.index
            }
        }(this, kk)
      }
      hasParent(kk) {
        return BB(this, kk)
      }
      indexInParent(kk) {
        return function(kk, Fk) {
          if (kk.parentRef && kk.parentRef[yk] === Fk[yk]) return kk._parentIndex;
          for (let Bk = kk.extraParents; void 0 !== Bk; Bk = Bk.next)
            if (Bk.ref[yk] === Fk[yk]) return Bk.index
        }(this, kk)
      }
      getAllParents() {
        return function(kk) {
          const Fk = [];
          kk.parentRef && Fk.push({
            ref: kk.parentRef,
            index: kk._parentIndex
          });
          let Bk = kk.extraParents;
          for (; Bk;) Fk.push({
            ref: Bk.ref,
            index: Bk.index
          }), Bk = Bk.next;
          return Fk
        }(this)
      }
    }
    class gB {
      ref;
      root = void 0;
      parentRef = void 0;
      paused = !1;
      isNew = !1;
      flags = 0;
      constructor(kk) {
        this.ref = kk
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
      untracked(kk) {
        return kk()
      }
      markDirty() {}
      forEachChild(kk) {
        const Fk = this.ref;
        if (Fk[fk]) {
          if ("string" !== typeof Fk[fk])
            for (const [Bk, Rk] of Fk.entries()) Rk && kk(Rk[yk], Fk._collectionIndexes?.[Bk] ?? Bk);
          return
        }
        const Bk = Fk.constructor,
          Rk = Bk?.[Symbol.metadata];
        if (!Rk) return;
        const tk = Rk[Hk] ?? [];
        for (let ak = 0; ak < tk.length; ak++) {
          const Bk = tk[ak],
            Xk = Fk[Rk[Bk].name];
          Xk && kk(Xk[yk], Bk)
        }
      }
      forEachChildWithCtx(kk, Fk) {
        this.forEachChild(((Bk, Rk) => Fk(kk, Bk, Rk)))
      }
      forEachLive() {}
      forEachLiveWithCtx() {}
      forEach() {}
    }

    function UB(kk) {
      let Fk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : kk;
      var Bk;
      Object.defineProperty(kk, yk, {
        value: (Bk = Fk, new gB(Bk)),
        enumerable: !1,
        writable: !0
      })
    }

    function cB(kk, Fk, Bk, Rk, ak, Xk, wk) {
      void 0 !== wk ? wk(Fk, Rk, Xk) : "string" === typeof Bk ? BF[Bk]?.(Fk, Rk, Xk) : null != Bk[Symbol.metadata] ? (BF.number(Fk, Rk[bk], Xk), (ak & tk.ADD) === tk.ADD && kk.tryEncodeTypeId(Fk, Bk, Rk.constructor, Xk)) : BF.number(Fk, Rk[bk], Xk)
    }
    const GB = function(kk, Fk, Bk, Rk, ak, Xk, bk, wk) {
        if (Fk[Xk.offset++] = 255 & (Rk | ak), ak === tk.DELETE) return;
        const dk = Bk.encDescriptor,
          sk = Bk.ref,
          Vk = sk[Yk][Rk] ?? sk[dk.names[Rk]];
        cB(kk, Fk, dk.types[Rk], Vk, ak, Xk, dk.encoders[Rk])
      },
      TB = function(kk, Fk, Bk, Rk, ak, Xk) {
        if (Fk[Xk.offset++] = 255 & ak, BF.number(Fk, Rk, Xk), ak === tk.DELETE) return;
        const bk = Bk.ref;
        if ((ak & tk.ADD) === tk.ADD) {
          const kk = bk.$indexes.get(Rk);
          BF.string(Fk, kk, Xk)
        }
        cB(kk, Fk, bk[fk], bk[Jk](Rk), ak, Xk)
      },
      rB = function(kk, Fk, Bk, Rk, ak, Xk) {
        if (Fk[Xk.offset++] = 255 & ak, BF.number(Fk, Rk, Xk), ak === tk.DELETE) return;
        const bk = Bk.ref;
        cB(kk, Fk, bk[fk], bk[Jk](Rk), ak, Xk)
      },
      DB = function(kk, Fk, Bk, Rk, ak, Xk) {
        const bk = Bk.ref;
        (ak & tk.ADD) === tk.ADD && "function" === typeof bk.set ? TB(kk, Fk, Bk, Rk, ak, Xk) : rB(kk, Fk, Bk, Rk, ak, Xk)
      },
      zB = function(kk, Fk, Bk, Rk, ak, Xk, wk, dk) {
        const sk = Bk.refTarget,
          Vk = sk[fk],
          Ak = "string" !== typeof Vk;
        let ek;
        if (dk && Bk.isFiltered && Ak) {
          const kk = sk.tmpItems[Rk];
          if (!kk) return;
          if (ek = kk[bk], ak === tk.DELETE) ak = tk.DELETE_BY_REFID;
          else if ((ak & tk.ADD) === tk.ADD) ak = tk.ADD_BY_REFID;
          else if ((ak & tk.MOVE) === tk.MOVE) return
        } else if (ak === tk.DELETE && Ak) {
          const kk = sk.tmpItems[Rk];
          if (!kk) return;
          ek = kk[bk], ak = tk.DELETE_BY_REFID
        } else ek = Rk;
        if (Fk[Xk.offset++] = 255 & ak, BF.number(Fk, ek, Xk), ak === tk.DELETE || ak === tk.DELETE_BY_REFID) return;
        cB(kk, Fk, Vk, sk[Jk](Rk, wk), ak, Xk)
      };

    function PB(kk, Fk, Bk, Rk, ak, Xk, wk) {
      const dk = kk.resyncVisited;
      let sk = dk.get(kk.currentRefId);
      if (void 0 === sk && dk.set(kk.currentRefId, sk = new Set), sk.add(Rk), void 0 !== ak && Bk === tk.ADD && ak !== Xk) {
        const Bk = ak[bk];
        void 0 !== Bk && (kk.root.removeRef(Bk), wk?.push({
          ref: Fk,
          refId: kk.currentRefId,
          op: tk.DELETE,
          dynamicIndex: Rk,
          value: void 0,
          previousValue: ak
        }))
      }
    }

    function hB(kk, Fk, Bk, Rk) {
      const tk = Fk[bk];
      if (void 0 === tk || Bk.has(tk)) return;
      Bk.add(tk);
      const ak = Fk.constructor[Symbol.metadata],
        Xk = ak?.[Hk];
      if (void 0 === Xk) return;
      const wk = ak[Uk];
      for (let bk = 0; bk < Xk.length; bk++) {
        const tk = Xk[bk];
        if (void 0 !== wk && wk.includes(tk)) continue;
        const dk = ak[tk],
          sk = Fk[dk.name];
        sk && (uR.is(dk.type) ? hB(kk, sk, Bk, Rk) : qB(kk, sk, Bk, Rk))
      }
    }

    function qB(kk, Fk, Bk, Rk) {
      const ak = Fk[mk] ?? Fk,
        Xk = ak[bk];
      if (void 0 === Xk || Bk.has(Xk)) return;
      Bk.add(Xk);
      const wk = kk.resyncVisited.get(Xk);
      if (void 0 === wk) return;
      const dk = kk.root;
      ak[ek](wk, ((kk, Bk) => {
        Rk?.push({
          ref: Fk,
          refId: Xk,
          op: tk.DELETE,
          dynamicIndex: Bk,
          value: void 0,
          previousValue: kk
        });
        const ak = kk?.[bk];
        void 0 !== ak && dk.removeRef(ak)
      }), (Fk => {
        uR.isSchema(Fk) && hB(kk, Fk, Bk, Rk)
      }))
    }
    const CB = 1,
      ZB = 2,
      pB = 3,
      KB = 4,
      xB = 5;

    function jB(kk, Fk, Bk, Rk, ak, Xk, wk, dk, sk) {
      const Vk = kk.root;
      let Jk;
      if ((Fk & tk.DELETE) === tk.DELETE) {
        const kk = ak?.[bk];
        void 0 !== kk && Vk.removeRef(kk), Fk !== tk.DELETE_AND_ADD && Bk[Ak](Rk), Jk = void 0
      }
      if (Fk === tk.DELETE);
      else if ("string" === typeof Xk) Jk = iF[Xk](wk, dk);
      else if (rF(Xk)) Jk = function(kk, Fk, Bk) {
        return zF(kk, (0, iF[kk.wire])(Fk, Bk))
      }(Xk.quantized, wk, dk);
      else if (uR.is(Xk)) {
        const Bk = iF.number(wk, dk);
        if (Jk = Vk.refs.get(Bk), (Fk & tk.ADD) === tk.ADD) {
          const Rk = kk.getInstanceType(wk, dk, Xk);
          Jk || (Jk = kk.createInstanceOfType(Rk)), Vk.addRef(Bk, Jk, Jk !== ak || Fk === tk.DELETE_AND_ADD && Jk === ak)
        }
      } else {
        const Bk = (ek = Object.keys(Xk)[0], YF[ek]),
          Rk = iF.number(wk, dk);
        null !== kk.resyncVisited && function(kk, Fk) {
          const Bk = kk.resyncVisited;
          Bk.has(Fk) || Bk.set(Fk, new Set)
        }(kk, Rk);
        const Ak = Vk.refs.has(Rk) ? ak || Vk.refs.get(Rk) : Bk.constructor.initializeForDecoder();
        if (Jk = Ak.clone(!0), Jk[fk] = Object.values(Xk)[0], ak) {
          let kk = ak[bk];
          if (void 0 !== kk && Rk !== kk) {
            (Fk & tk.DELETE) !== tk.DELETE && Vk.removeRef(kk);
            const Bk = ak.entries();
            let Rk;
            for (;
              (Rk = Bk.next()) && !Rk.done;) {
              const [Fk, Bk] = Rk.value;
              "object" === typeof Bk && (kk = Bk[bk]), sk?.push({
                ref: ak,
                refId: kk,
                op: tk.DELETE,
                field: Fk,
                value: void 0,
                previousValue: Bk
              })
            }
          }
        }
        Vk.addRef(Rk, Jk, Ak !== ak || Fk === tk.DELETE_AND_ADD && Ak === ak)
      }
      var ek;
      return Jk
    }
    const lB = function(kk, Fk, Bk, Rk, tk) {
        const ak = Fk[Bk.offset++],
          Xk = Rk.constructor[Symbol.metadata],
          bk = ak >> 6 << 6,
          wk = ak % (bk || 255),
          dk = Xk[wk];
        if (void 0 === dk) return console.warn("@colyseus/schema: field not defined at", {
          index: wk,
          ref: Rk.constructor.name,
          metadata: Xk
        }), -1;
        const sk = !0 === dk.deprecated,
          Vk = sk ? void 0 : Rk[Jk](wk),
          Ak = jB(kk, bk, Rk, wk, Vk, dk.type, Fk, Bk, tk);
        sk || (null !== Ak && void 0 !== Ak && (Rk[dk.name] = Ak), Vk !== Ak && tk?.push({
          ref: Rk,
          refId: kk.currentRefId,
          op: bk,
          field: dk.name,
          value: Ak,
          previousValue: Vk
        }))
      },
      nB = function(kk, Fk, Bk, Rk, ak) {
        const Xk = Rk[mk] ?? Rk,
          bk = Fk[Bk.offset++];
        if (bk === tk.CLEAR) return kk.removeChildRefs(Xk, ak), void Xk.clear();
        const wk = iF.number(Fk, Bk),
          dk = Xk[fk],
          sk = Xk.constructor.COLLECTION_KIND;
        let Vk;
        (bk & tk.ADD) === tk.ADD ? sk === CB ? (Vk = iF.string(Fk, Bk), Xk.setIndex(wk, Vk)) : Vk = wk : Vk = Xk.getIndex(wk);
        const Ak = Xk[Jk](wk),
          ek = jB(kk, bk, Rk, wk, Ak, dk, Fk, Bk, ak);
        if (null !== kk.resyncVisited && PB(kk, Rk, bk, Vk, Ak, ek, ak), null !== ek && void 0 !== ek) switch (sk) {
          case CB:
            Xk.$items.set(Vk, ek);
            break;
          case ZB:
            Xk.$setAt(wk, ek, null !== kk.resyncVisited && bk === tk.ADD ? tk.REPLACE : bk);
            break;
          case pB:
          case KB:
          case xB:
            Xk.$items.has(wk) || (Xk.$items.set(wk, ek), "number" === typeof Xk.$refId && wk >= Xk.$refId && (Xk.$refId = wk + 1));
            break;
          default:
            console.warn(`@colyseus/schema: missing COLLECTION_KIND on ${Xk.constructor?.name} \u2014 item at index ${wk} was not stored.`)
        }
        Ak !== ek && ak?.push({
          ref: Rk,
          refId: kk.currentRefId,
          op: bk,
          dynamicIndex: Vk,
          value: ek,
          previousValue: Ak
        })
      },
      IB = function(kk, Fk, Bk, Rk, ak) {
        const Xk = Rk[mk] ?? Rk;
        let bk, wk = Fk[Bk.offset++];
        if (wk === tk.CLEAR) return kk.removeChildRefs(Xk, ak), void Xk.clear();
        if (wk === tk.REVERSE) return void Xk.items.reverse();
        if (wk === tk.DELETE_BY_REFID) {
          const wk = iF.number(Fk, Bk),
            dk = kk.root.refs.get(wk);
          if (void 0 === dk) return;
          if (kk.root.removeRef(wk), bk = Xk.findIndex((kk => kk === dk)), -1 === bk) return;
          return Xk[Ak](bk), void ak?.push({
            ref: Rk,
            refId: kk.currentRefId,
            op: tk.DELETE,
            dynamicIndex: bk,
            value: void 0,
            previousValue: dk
          })
        }
        if (wk === tk.ADD_BY_REFID) {
          const Rk = iF.number(Fk, Bk),
            tk = kk.root.refs.get(Rk);
          tk && (bk = Xk.findIndex((kk => kk === tk))), -1 !== bk && void 0 !== bk || (bk = Xk.length)
        } else bk = iF.number(Fk, Bk);
        const dk = Xk[fk];
        let sk = bk;
        const Vk = Xk.items[bk],
          Jk = jB(kk, wk, Rk, bk, Vk, dk, Fk, Bk, ak);
        null !== kk.resyncVisited && PB(kk, Rk, wk, bk, Vk, Jk, ak), null !== Jk && void 0 !== Jk && Jk !== Vk && Xk.$setAt(bk, Jk, null !== kk.resyncVisited && wk === tk.ADD ? tk.REPLACE : wk), Vk !== Jk && ak?.push({
          ref: Rk,
          refId: kk.currentRefId,
          op: wk,
          dynamicIndex: sk,
          value: Jk,
          previousValue: Vk
        })
      };
    class QB extends Error {}

    function kR(kk, Fk, Bk, Rk) {
      if (!(kk instanceof Fk)) throw new QB(`a '${Fk.name}' was expected, but '${kk&&kk.constructor.name}' was provided in ${Bk.constructor.name}#${Rk}`)
    }
    const FR = (kk, Fk) => {
        const Bk = kk.toString(),
          Rk = Fk.toString();
        return Bk < Rk ? -1 : Bk > Rk ? 1 : 0
      },
      BR = {
        get: (kk, Fk) => "symbol" === typeof Fk || isNaN(Fk) ? Reflect.get(kk, Fk) : kk.items[Fk],
        set: (kk, Fk, Bk) => {
          if ("symbol" !== typeof Fk && !isNaN(Fk)) {
            if (void 0 === Bk || null === Bk) kk.$deleteAt(Fk);
            else {
              let Rk;
              if (Bk[yk]) {
                kR(Bk, kk[fk], kk, Fk);
                const ak = kk.items[Fk];
                kk.isMovingItems ? (Rk = kk.$wireIndex(Number(Fk)), void 0 !== ak ? Bk[yk].isNew ? kk[yk].indexedOperation(Rk, tk.MOVE_AND_ADD) : (kk[yk].getChange(Rk) & tk.DELETE) === tk.DELETE ? kk[yk].indexedOperation(Rk, tk.DELETE_AND_MOVE) : kk[yk].indexedOperation(Rk, tk.MOVE) : Bk[yk].isNew && kk[yk].indexedOperation(Rk, tk.ADD), Bk[yk].setParent(kk, kk[yk].root, Rk)) : Rk = kk.$changeAt(Number(Fk), Bk), void 0 !== ak && ak[yk].root?.remove(ak[yk])
              } else Rk = kk.$changeAt(Number(Fk), Bk);
              kk.items[Fk] = Bk, void 0 !== Rk && (kk.tmpItems[Rk] = Bk)
            }
            return !0
          }
          return Reflect.set(kk, Fk, Bk)
        },
        deleteProperty: (kk, Fk) => ("number" === typeof Fk ? kk.$deleteAt(Fk) : delete kk[Fk], !0),
        has: (kk, Fk) => "symbol" === typeof Fk || isNaN(Number(Fk)) ? Reflect.has(kk, Fk) : Reflect.has(kk.items, Fk)
      };
    class RR {
      [yk];
      [bk];
      [mk];
      [fk];
      items = [];
      tmpItems = [];
      deletedIndexes = [];
      isMovingItems = !1;
      _needsCompaction = !1;
      static[dk] = zB;
      static[sk] = IB;
      static COLLECTION_KIND = ZB;
      static[Vk](kk, Fk, Bk) {
        if (!Bk) return !0;
        const Rk = kk[mk] ?? kk;
        return "string" === typeof Rk[fk] || Bk.isChangeTreeVisible(Rk.tmpItems[Fk]?.[yk])
      }
      static is(kk) {
        return Array.isArray(kk) || void 0 !== kk.array
      }
      static from(kk) {
        return new RR(...Array.from(kk))
      }
      constructor() {
        this[fk] = void 0, this[mk] = this;
        const kk = new Proxy(this, BR);
        return Object.defineProperty(this, yk, {
          value: new MB(kk, this),
          enumerable: !1,
          writable: !0
        }), arguments.length > 0 && this.push(...arguments), kk
      }
      static initializeForDecoder() {
        const kk = Object.create(RR.prototype);
        kk.items = [], kk.isMovingItems = !1, kk._needsCompaction = !1, kk[fk] = void 0, kk[mk] = kk;
        const Fk = new Proxy(kk, BR);
        return UB(kk, Fk), Fk
      }
      set length(kk) {
        0 === kk ? this.clear() : kk < this.items.length ? this.splice(kk, this.length - kk) : console.warn("ArraySchema: can't set .length to a higher value than its length.")
      }
      get length() {
        return this.items.length
      }
      pauseTracking() {
        this[yk].pause()
      }
      resumeTracking() {
        this[yk].resume()
      }
      untracked(kk) {
        return this[yk].untracked(kk)
      }
      get isTrackingPaused() {
        return this[yk].paused
      }
      push() {
        const kk = this[mk],
          Fk = kk.items,
          Bk = kk.tmpItems,
          Rk = kk[yk],
          ak = kk[fk];
        let Xk = Bk.length;
        for (let bk = 0, wk = arguments.length; bk < wk; bk++, Xk++) {
          const wk = bk < 0 || arguments.length <= bk ? void 0 : arguments[bk];
          if (void 0 === wk || null === wk) return;
          "object" === typeof wk && ak && kR(wk, ak, kk, bk), Rk.indexedOperation(Xk, tk.ADD), Fk.push(wk), Bk.push(wk), wk[yk]?.setParent(this, Rk.root, Xk)
        }
        return Xk
      }
      pop() {
        const kk = this[mk],
          Fk = kk.tmpItems,
          Bk = kk.deletedIndexes;
        let Rk = -1;
        for (let ak = Fk.length - 1; ak >= 0; ak--)
          if (!0 !== Bk[ak]) {
            Rk = ak;
            break
          } if (Rk < 0) return;
        const tk = kk.$isUnsentAdd(Rk);
        return kk[yk].delete(Rk), tk ? kk.$cancelAdd(Rk) : Bk[Rk] = !0, kk.items.pop()
      }
      at(kk) {
        return kk < 0 && (kk += this.length), this.items[kk]
      }
      $wireIndex(kk) {
        const Fk = this.deletedIndexes;
        if (0 === Fk.length) return kk;
        const Bk = this.tmpItems;
        let Rk = 0;
        for (let tk = 0; tk < Bk.length; tk++)
          if (!0 !== Fk[tk]) {
            if (Rk === kk) return tk;
            Rk++
          } return Bk.length + (kk - Rk)
      }
      $isUnsentAdd(kk) {
        const Fk = this[yk];
        return 0 === (576 & Fk.flags) && !Fk.paused && "string" !== typeof this[fk] && Fk.operationAt(kk) === tk.ADD
      }
      $cancelAdd(kk) {
        let Fk = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        const Bk = this[yk],
          Rk = this.tmpItems[kk];
        this.tmpItems.splice(kk, 1), this.deletedIndexes.length > 0 && this.deletedIndexes.splice(kk, 1), Bk.removeAt(kk, 1);
        const tk = Rk?.[yk];
        void 0 !== tk && void 0 === tk.root && tk.removeParent(this), Fk && this.$reindexChildren(kk)
      }
      $reindexChildren(kk, Fk) {
        if (!this[yk].hasFilteredFields) return;
        if ("string" === typeof this[fk]) return;
        const Bk = this.tmpItems,
          Rk = Bk.length;
        if (void 0 !== Fk)
          for (; kk < Rk && Bk[kk] === Fk[kk];) kk++;
        for (let tk = kk; tk < Rk; tk++) Bk[tk]?.[yk]?.setParentIndex(this, tk)
      }
      $changeAt(kk, Fk) {
        if (void 0 === Fk || null === Fk) return void console.error("ArraySchema items cannot be null nor undefined; Use `splice(index, 1)` instead.");
        if (this.items[kk] === Fk) return;
        const Bk = void 0 !== this.items[kk] ? "object" === typeof Fk ? tk.DELETE_AND_ADD : tk.REPLACE : tk.ADD,
          Rk = this.$wireIndex(kk),
          ak = this[yk];
        return ak.change(Rk, Bk), Fk[yk]?.setParent(this, ak.root, Rk), Rk
      }
      $deleteAt(kk, Fk) {
        this[yk].delete(this.$wireIndex(kk), Fk)
      }
      $setAt(kk, Fk, Bk) {
        Bk === tk.ADD && void 0 !== this.items[kk] ? this.items.splice(kk, 0, Fk) : Bk === tk.DELETE_AND_MOVE ? (this.items.splice(kk, 1), this.items[kk] = Fk) : (kk > this.items.length && (this._needsCompaction = !0), this.items[kk] = Fk)
      }
      clear() {
        const kk = this[mk];
        if (0 === kk.items.length) return;
        const Fk = kk[yk];
        Fk.forEachChild(((kk, Bk) => {
          Fk.root?.remove(kk)
        })), Fk.discard(), Fk.operation(tk.CLEAR), kk.items.length = 0, kk.tmpItems.length = 0
      } [vk]() {
        const kk = this[mk] ?? this,
          Fk = kk[yk];
        if (Fk.isStreamCollection) throw new Error("@colyseus/schema: cannot reset a streamed ArraySchema (pooling not supported).");
        const Bk = kk.items;
        for (let Rk = 0; Rk < Bk.length; Rk++) Bk[Rk]?.[vk]?.();
        kk.items.length = 0, kk.tmpItems.length = 0, kk.deletedIndexes.length = 0, Fk.recycle(), kk[bk] = void 0
      }
      concat() {
        return new RR(...this.items.concat(...arguments))
      }
      join(kk) {
        return this.items.join(kk)
      }
      reverse() {
        const kk = this[mk],
          Fk = kk[yk];
        if (Fk.has() || kk.deletedIndexes.length > 0) {
          const Fk = kk.items.slice().reverse();
          return this.clear(), this.push(...Fk), this
        }
        return Fk.operation(tk.REVERSE), kk.items.reverse(), kk.tmpItems.reverse(), kk.$reindexChildren(0), this
      }
      shift() {
        const kk = this[mk],
          Fk = kk.items;
        if (0 === Fk.length) return;
        const Bk = kk[yk],
          Rk = kk.deletedIndexes;
        let ak = 0;
        for (; !0 === Rk[ak];) ak++;
        const Xk = kk.$isUnsentAdd(ak);
        return Bk.delete(ak, tk.DELETE), Xk ? kk.$cancelAdd(ak) : Rk[ak] = !0, Fk.shift()
      }
      slice(kk, Fk) {
        const Bk = new RR;
        return Bk.push(...this.items.slice(kk, Fk)), Bk
      }
      sort() {
        let kk = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : FR;
        const Fk = this[mk];
        Fk.isMovingItems = !0;
        const Bk = Fk[yk];
        return Fk.items.sort(kk).forEach(((kk, Fk) => Bk.change(Fk, tk.REPLACE))), Fk.tmpItems.sort(kk), Fk.$reindexChildren(0), Fk.isMovingItems = !1, this
      }
      splice(kk, Fk) {
        const Bk = this[mk],
          Rk = Bk[yk],
          ak = Bk.items,
          Xk = Bk.tmpItems,
          bk = Bk.deletedIndexes,
          wk = ak.length,
          dk = Xk.length;
        for (var sk = arguments.length, Vk = new Array(sk > 2 ? sk - 2 : 0), Jk = 2; Jk < sk; Jk++) Vk[Jk - 2] = arguments[Jk];
        const Ak = Vk.length,
          ek = [];
        for (let tk = 0; tk < dk; tk++) !0 !== bk[tk] && ek.push(tk);
        let fk;
        if (wk > kk) {
          void 0 === Fk && (Fk = wk - kk);
          for (let ak = kk; ak < kk + Fk; ak++) {
            const kk = ek[ak],
              Fk = Bk.$isUnsentAdd(kk);
            Rk.delete(kk, tk.DELETE), Fk ? (fk ??= []).push(kk) : bk[kk] = !0
          }
        } else Fk = 0;
        if (Ak > 0) {
          const ak = ek[kk] ?? wk,
            dk = Math.min(Ak, Fk);
          for (let kk = 0; kk < dk; kk++) {
            const Fk = ak + kk;
            let Bk;
            const wk = void 0 !== fk ? fk.indexOf(Fk) : -1; - 1 !== wk ? (fk.splice(wk, 1), Bk = tk.ADD) : Bk = bk[Fk] ? tk.DELETE_AND_ADD : tk.ADD, Rk.indexedOperation(Fk, Bk), Xk[Fk] = Vk[kk], bk[Fk] = !1, Vk[kk][yk]?.setParent(this, Rk.root, Fk)
          }
          const sk = Ak - dk;
          if (sk > 0) {
            const kk = ak + dk;
            Rk.insertAt(kk, sk);
            for (let Fk = 0; Fk < sk; Fk++) Vk[dk + Fk][yk]?.setParent(this, Rk.root, kk + Fk);
            bk.length > 0 && bk.splice(kk, 0, ...new Array(sk).fill(!1)), Xk.splice(kk, 0, ...Vk.slice(dk)), Bk.$reindexChildren(kk + sk)
          }
        }
        if (void 0 !== fk && fk.length > 0) {
          for (let kk = fk.length - 1; kk >= 0; kk--) Bk.$cancelAdd(fk[kk], !1);
          Bk.$reindexChildren(fk[0])
        }
        return Rk.root?.enqueueChangeTree(Rk), ak.splice(kk, Fk, ...Vk)
      }
      unshift() {
        const kk = this[mk],
          Fk = kk[yk];
        Fk.unshift(arguments.length);
        for (let Rk = 0; Rk < arguments.length; Rk++)(Rk < 0 || arguments.length <= Rk ? void 0 : arguments[Rk])?.[yk]?.setParent(this, Fk.root, Rk);
        const Bk = kk.deletedIndexes;
        return Bk.length > 0 && Bk.unshift(...new Array(arguments.length).fill(!1)), kk.tmpItems.unshift(...arguments), kk.$reindexChildren(arguments.length), kk.items.unshift(...arguments)
      }
      indexOf(kk, Fk) {
        return this.items.indexOf(kk, Fk)
      }
      lastIndexOf(kk) {
        let Fk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.length - 1;
        return this.items.lastIndexOf(kk, Fk)
      }
      every(kk, Fk) {
        return this.items.every(kk, Fk)
      }
      some(kk, Fk) {
        return this.items.some(kk, Fk)
      }
      forEach(kk, Fk) {
        return this.items.forEach(kk, Fk)
      }
      map(kk, Fk) {
        return this.items.map(kk, Fk)
      }
      filter(kk, Fk) {
        return this.items.filter(kk, Fk)
      }
      reduce(kk, Fk) {
        return this.items.reduce.apply(this.items, arguments)
      }
      reduceRight(kk, Fk) {
        return this.items.reduceRight.apply(this.items, arguments)
      }
      find(kk, Fk) {
        return this.items.find(kk, Fk)
      }
      findIndex(kk, Fk) {
        return this.items.findIndex(kk, Fk)
      }
      fill(kk, Fk, Bk) {
        throw new Error("ArraySchema#fill() not implemented")
      }
      copyWithin(kk, Fk, Bk) {
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
        return RR
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
      includes(kk, Fk) {
        return this.items.includes(kk, Fk)
      }
      flatMap(kk, Fk) {
        throw new Error("ArraySchema#flatMap() is not supported.")
      }
      flat(kk) {
        throw new Error("ArraySchema#flat() is not supported.")
      }
      findLast() {
        return this.items.findLast.apply(this.items, arguments)
      }
      findLastIndex() {
        for (var kk = arguments.length, Fk = new Array(kk), Bk = 0; Bk < kk; Bk++) Fk[Bk] = arguments[Bk];
        return this.items.findLastIndex.apply(this.items, arguments)
      }
      with(kk, Fk) {
        const Bk = this.items.slice();
        return kk < 0 && (kk += this.length), Bk[kk] = Fk, new RR(...Bk)
      }
      toReversed() {
        return this.items.slice().reverse()
      }
      toSorted(kk) {
        return this.items.slice().sort(kk)
      }
      toSpliced(kk, Fk) {
        for (var Bk = arguments.length, Rk = new Array(Bk > 2 ? Bk - 2 : 0), tk = 2; tk < Bk; tk++) Rk[tk - 2] = arguments[tk];
        const ak = this.items.slice();
        return ak.splice.apply(ak, arguments), ak
      }
      shuffle() {
        return this.move((kk => {
          let Fk = this.items.length;
          for (; 0 != Fk;) {
            let kk = Math.floor(Math.random() * Fk);
            Fk--, [this[Fk], this[kk]] = [this[kk], this[Fk]]
          }
        }))
      }
      move(kk) {
        return this.isMovingItems = !0, kk(this), this.isMovingItems = !1, this
      } [Jk](kk) {
        let Fk = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        const Bk = this[mk] ?? this;
        return Fk || Bk.deletedIndexes[kk] ? Bk.items[kk] : Bk.tmpItems[kk] || Bk.items[kk]
      } [Ak](kk) {
        const Fk = this[mk] ?? this;
        Fk.items[kk] = void 0, Fk._needsCompaction = !0
      } [Wk]() {
        const kk = this.tmpItems;
        this.tmpItems = this.items.slice(), this.deletedIndexes.length > 0 && (this.$reindexChildren(0, kk), this.deletedIndexes.length = 0)
      } [ik]() {
        const kk = this[mk] ?? this;
        kk._needsCompaction && (kk._needsCompaction = !1, kk.items = kk.items.filter((kk => void 0 !== kk)))
      } [ek](kk, Fk, Bk) {
        const Rk = this[mk] ?? this,
          tk = Rk.items;
        let ak = !1;
        for (let Xk = 0; Xk < tk.length; Xk++) {
          const bk = tk[Xk];
          kk.has(Xk) ? Bk(bk) : (ak = !0, Fk(bk, Xk), Rk[Ak](Xk))
        }
        ak && Rk[ik]()
      }
      toArray() {
        return this.items.slice(0)
      }
      toJSON() {
        return this.toArray().map((kk => "function" === typeof kk.toJSON ? kk.toJSON() : kk))
      }
      clone(kk) {
        let Fk;
        return kk ? (Fk = new RR, Fk.push(...this.items)) : Fk = new RR(...this.map((kk => kk[yk] ? kk.clone() : kk))), Fk
      }
    }
    LF("array", {
      constructor: RR
    });
    class tR {
      keyByIndex = new Map;
      indexByKey = Object.create(null);
      nextIndex = 0;
      snapshots;
      indexOf(kk) {
        const Fk = this.indexByKey[kk];
        return void 0 === Fk ? void 0 : Fk
      }
      assign(kk) {
        const Fk = this.nextIndex++;
        return this.indexByKey[kk] = Fk, this.keyByIndex.set(Fk, kk), Fk
      }
      snapshot(kk, Fk) {
        (this.snapshots ??= new Map).set(kk, Fk)
      }
      forgetSnapshot(kk) {
        this.snapshots?.delete(kk)
      }
      snapshotAt(kk) {
        return this.snapshots?.get(kk)
      }
      setIndex(kk, Fk) {
        this.keyByIndex.set(kk, Fk), this.indexByKey[Fk] = kk
      }
      keyOf(kk) {
        return this.keyByIndex.get(kk)
      }
      cleanupAfterEncode() {
        if (void 0 !== this.snapshots) {
          for (const [kk] of this.snapshots) {
            const Fk = this.keyByIndex.get(kk);
            void 0 !== Fk && (delete this.indexByKey[Fk], this.keyByIndex.delete(kk))
          }
          this.snapshots.clear()
        }
      }
      reset() {
        this.indexByKey = Object.create(null), this.keyByIndex.clear(), this.snapshots?.clear(), this.nextIndex = 0
      }
    }
    class aR {
      [yk];
      [bk];
      childType;
      [fk];
      $items = new Map;
      journal = new tR;
      _stream;
      get maxPerTick() {
        return this._stream?.maxPerTick ?? 32
      }
      set maxPerTick(kk) {
        (this._stream ??= SF()).maxPerTick = kk
      }
      get priority() {
        return this._stream?.priority
      }
      set priority(kk) {
        (this._stream ??= SF()).priority = kk
      }
      get $indexes() {
        return this.journal.keyByIndex
      }
      get _collectionIndexes() {
        return this.journal.indexByKey
      }
      static[dk] = TB;
      static[sk] = nB;
      static COLLECTION_KIND = CB;
      static[Vk](kk, Fk, Bk) {
        if (!Bk || "string" === typeof kk[fk]) return !0;
        const Rk = kk[Jk](Fk) ?? kk.journal.snapshotAt(Fk);
        return Bk.isChangeTreeVisible(Rk[yk])
      }
      static is(kk) {
        return void 0 !== kk.map
      }
      constructor(kk) {
        if (Object.defineProperty(this, yk, {
            value: new MB(this),
            enumerable: !1,
            writable: !0
          }), this[fk] = void 0, kk)
          if (kk instanceof Map || kk instanceof aR) kk.forEach(((kk, Fk) => this.set(Fk, kk)));
          else
            for (const Fk in kk) this.set(Fk, kk[Fk])
      }
      static initializeForDecoder() {
        const kk = Object.create(aR.prototype);
        return kk.$items = new Map, kk.journal = new tR, kk[fk] = void 0, UB(kk), kk
      } [Symbol.iterator]() {
        return this.$items[Symbol.iterator]()
      }
      get[Symbol.toStringTag]() {
        return this.$items[Symbol.toStringTag]
      }
      static get[Symbol.species]() {
        return aR
      }
      set(kk, Fk) {
        if (void 0 === Fk || null === Fk) throw new Error(`MapSchema#set('${kk}', ${Fk}): trying to set ${Fk} value on '${kk}'.`);
        "object" === typeof Fk && this[fk] && kR(Fk, this[fk], this, kk), kk = kk.toString();
        const Bk = this[yk],
          Rk = void 0 !== Fk[yk],
          ak = this.journal;
        let Xk, bk = ak.indexOf(kk);
        if (void 0 !== bk) {
          Xk = tk.REPLACE;
          const Bk = this.$items.get(kk);
          if (Bk === Fk) return;
          Rk && (Xk = tk.DELETE_AND_ADD, void 0 !== Bk && Bk[yk].root?.remove(Bk[yk])), void 0 !== ak.snapshotAt(bk) && ak.forgetSnapshot(bk)
        } else bk = ak.assign(kk), Xk = tk.ADD;
        return this.$items.set(kk, Fk), Xk === tk.ADD && Bk.isStreamCollection ? void 0 !== Bk.root && HF(this, Bk.root, bk) : Bk.change(bk, Xk), Rk && Fk[yk].setParent(this, Bk.root, bk), this
      }
      get(kk) {
        return this.$items.get(kk)
      }
      getOrInsert(kk, Fk) {
        return this.$items.has(kk) ? this.$items.get(kk) : (this.set(kk, Fk), Fk)
      }
      getOrInsertComputed(kk, Fk) {
        if (this.$items.has(kk)) return this.$items.get(kk);
        const Bk = Fk(kk);
        return this.set(kk, Bk), Bk
      }
      delete(kk) {
        if (!this.$items.has(kk)) return !1;
        const Fk = this.journal.indexOf(kk),
          Bk = this.$items.get(kk),
          Rk = this[yk];
        if (Rk.isStreamCollection) {
          const tk = Rk.root;
          let ak = !1;
          return void 0 !== tk && (ak = uF(this, tk, this[bk], Fk)), void 0 !== Bk?.[yk] && tk?.remove(Bk[yk]), this.$items.delete(kk), ak || this.journal.snapshot(Fk, Bk), !0
        }
        return this.journal.snapshot(Fk, Bk), Rk.delete(Fk), this.$items.delete(kk)
      }
      clear() {
        const kk = this[yk];
        kk.discard(), kk.forEachChild(((Fk, Bk) => {
          kk.root?.remove(Fk)
        })), this.journal.reset(), this.$items.clear(), kk.operation(tk.CLEAR)
      } [vk]() {
        const kk = this[yk];
        if (kk.isStreamCollection) throw new Error("@colyseus/schema: cannot reset a streamed MapSchema (pooling not supported).");
        this.$items.forEach((kk => kk?.[vk]?.())), this.$items.clear(), this.journal.reset(), kk.recycle(), this[bk] = void 0
      }
      has(kk) {
        return this.$items.has(kk)
      }
      forEach(kk) {
        this.$items.forEach(kk)
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
        this[yk].pause()
      }
      resumeTracking() {
        this[yk].resume()
      }
      untracked(kk) {
        return this[yk].untracked(kk)
      }
      get isTrackingPaused() {
        return this[yk].paused
      }
      setIndex(kk, Fk) {
        this.journal.setIndex(kk, Fk)
      }
      getIndex(kk) {
        return this.journal.keyOf(kk)
      } [Jk](kk) {
        const Fk = this.journal.keyOf(kk);
        return void 0 !== Fk ? this.$items.get(Fk) : void 0
      } [Ak](kk) {
        const Fk = this.journal.keyOf(kk);
        void 0 !== Fk && (this.$items.delete(Fk), this.journal.keyByIndex.delete(kk))
      } [ek](kk, Fk, Bk) {
        let Rk = null;
        if (this.$items.forEach(((tk, ak) => {
            kk.has(ak) ? Bk(tk) : ((Rk ??= new Set).add(ak), Fk(tk, ak))
          })), null !== Rk) {
          Rk.forEach((kk => {
            this.$items.delete(kk), delete this.journal.indexByKey[kk]
          }));
          const kk = [];
          this.journal.keyByIndex.forEach(((Fk, Bk) => {
            Rk.has(Fk) && kk.push(Bk)
          }));
          for (let Fk = 0; Fk < kk.length; Fk++) this.journal.keyByIndex.delete(kk[Fk])
        }
      } [Wk]() {
        this.journal.cleanupAfterEncode()
      }
      _dropView(kk) {
        cF(this, kk)
      }
      _unregister() {}
      toJSON() {
        return Object.fromEntries(Array.from(this, (kk => {
          let [Fk, Bk] = kk;
          return [Fk, "function" === typeof Bk.toJSON ? Bk.toJSON() : Bk]
        })))
      }
      clone(kk) {
        let Fk;
        return kk ? Fk = Object.assign(new aR, this) : (Fk = new aR, this.forEach(((kk, Bk) => {
          kk[yk] ? Fk.set(Bk, kk.clone()) : Fk.set(Bk, kk)
        }))), Fk
      }
    }
    LF("map", {
      constructor: aR
    });
    class XR {
      [yk];
      [bk];
      [fk];
      $items = new Map;
      deletedItems = {};
      $refId = 0;
      _stream;
      get maxPerTick() {
        return this._stream?.maxPerTick ?? 32
      }
      set maxPerTick(kk) {
        (this._stream ??= SF()).maxPerTick = kk
      }
      get priority() {
        return this._stream?.priority
      }
      set priority(kk) {
        (this._stream ??= SF()).priority = kk
      }
      static[dk] = rB;
      static[sk] = nB;
      static COLLECTION_KIND = KB;
      static[Vk](kk, Fk, Bk) {
        return !Bk || "string" === typeof kk[fk] || Bk.isChangeTreeVisible((kk[Jk](Fk) ?? kk.deletedItems[Fk])[yk])
      }
      static is(kk) {
        return void 0 !== kk.collection
      }
      constructor(kk) {
        Object.defineProperty(this, yk, {
          value: new MB(this),
          enumerable: !1,
          writable: !0
        }), this[fk] = void 0, kk && kk.forEach((kk => this.add(kk)))
      }
      static initializeForDecoder() {
        const kk = Object.create(XR.prototype);
        return kk.$items = new Map, kk.deletedItems = {}, kk.$refId = 0, kk[fk] = void 0, UB(kk), kk
      }
      add(kk) {
        const Fk = this.$refId++,
          Bk = this[yk];
        return this.$items.set(Fk, kk), Bk.isStreamCollection ? void 0 !== Bk.root && HF(this, Bk.root, Fk) : Bk.change(Fk), void 0 !== kk[yk] && kk[yk].setParent(this, Bk.root, Fk), Fk
      }
      at(kk) {
        const Fk = Array.from(this.$items.keys())[kk];
        return this.$items.get(Fk)
      }
      entries() {
        return this.$items.entries()
      }
      delete(kk) {
        const Fk = this.$items.entries();
        let Bk, Rk;
        for (;
          (Rk = Fk.next()) && !Rk.done;)
          if (kk === Rk.value[1]) {
            Bk = Rk.value[0];
            break
          } if (void 0 === Bk) return !1;
        const tk = this[yk];
        if (tk.isStreamCollection) {
          const kk = tk.root,
            Fk = this.$items.get(Bk);
          return void 0 !== kk && uF(this, kk, this[bk], Bk), void 0 !== Fk?.[yk] && kk?.remove(Fk[yk]), this.deletedItems[Bk] = Fk, this.$items.delete(Bk)
        }
        return this.deletedItems[Bk] = tk.delete(Bk), this.$items.delete(Bk)
      }
      clear() {
        const kk = this[yk];
        kk.discard(), kk.forEachChild(((Fk, Bk) => {
          kk.root?.remove(Fk)
        })), this.$items.clear(), kk.operation(tk.CLEAR)
      } [vk]() {
        const kk = this[yk];
        if (kk.isStreamCollection) throw new Error("@colyseus/schema: cannot reset a streamed CollectionSchema (pooling not supported).");
        this.$items.forEach((kk => kk?.[vk]?.())), this.$items.clear(), this.deletedItems = {}, this.$refId = 0, kk.recycle(), this[bk] = void 0
      }
      has(kk) {
        return Array.from(this.$items.values()).some((Fk => Fk === kk))
      }
      forEach(kk) {
        this.$items.forEach(((Fk, Bk, Rk) => kk(Fk, Bk, this)))
      }
      values() {
        return this.$items.values()
      }
      get size() {
        return this.$items.size
      }
      pauseTracking() {
        this[yk].pause()
      }
      resumeTracking() {
        this[yk].resume()
      }
      untracked(kk) {
        return this[yk].untracked(kk)
      }
      get isTrackingPaused() {
        return this[yk].paused
      } [Symbol.iterator]() {
        return this.$items.values()
      }
      setIndex(kk, Fk) {}
      getIndex(kk) {
        return kk
      } [Jk](kk) {
        return this.$items.get(kk)
      } [Ak](kk) {
        this.$items.delete(kk)
      } [ek](kk, Fk, Bk) {
        let Rk = null;
        if (this.$items.forEach(((tk, ak) => {
            kk.has(ak) ? Bk(tk) : ((Rk ??= []).push(ak), Fk(tk, ak))
          })), null !== Rk)
          for (let tk = 0; tk < Rk.length; tk++) this[Ak](Rk[tk])
      } [Wk]() {
        for (const kk in this.deletedItems) delete this.deletedItems[kk]
      }
      _dropView(kk) {
        cF(this, kk)
      }
      _unregister() {}
      toArray() {
        return Array.from(this.$items.values())
      }
      toJSON() {
        const kk = [];
        return this.forEach(((Fk, Bk) => {
          kk.push("function" === typeof Fk.toJSON ? Fk.toJSON() : Fk)
        })), kk
      }
      clone(kk) {
        let Fk;
        return kk ? Fk = Object.assign(new XR, this) : (Fk = new XR, this.forEach((kk => {
          kk[yk] ? Fk.add(kk.clone()) : Fk.add(kk)
        }))), Fk
      }
    }
    LF("collection", {
      constructor: XR
    });
    class bR {
      [yk];
      [bk];
      [fk];
      $items = new Map;
      deletedItems = {};
      $refId = 0;
      _stream;
      get maxPerTick() {
        return this._stream?.maxPerTick ?? 32
      }
      set maxPerTick(kk) {
        (this._stream ??= SF()).maxPerTick = kk
      }
      get priority() {
        return this._stream?.priority
      }
      set priority(kk) {
        (this._stream ??= SF()).priority = kk
      }
      static[dk] = rB;
      static[sk] = nB;
      static COLLECTION_KIND = pB;
      static[Vk](kk, Fk, Bk) {
        return !Bk || "string" === typeof kk[fk] || Bk.isVisible((kk[Jk](Fk) ?? kk.deletedItems[Fk])[yk])
      }
      static is(kk) {
        return void 0 !== kk.set
      }
      constructor(kk) {
        Object.defineProperty(this, yk, {
          value: new MB(this),
          enumerable: !1,
          writable: !0
        }), this[fk] = void 0, kk && kk.forEach((kk => this.add(kk)))
      }
      static initializeForDecoder() {
        const kk = Object.create(bR.prototype);
        return kk.$items = new Map, kk.deletedItems = {}, kk.$refId = 0, kk[fk] = void 0, UB(kk), kk
      }
      add(kk) {
        if (this.has(kk)) return !1;
        const Fk = this.$refId++,
          Bk = this[yk];
        return this.$items.set(Fk, kk), Bk.isStreamCollection ? void 0 !== Bk.root && HF(this, Bk.root, Fk) : Bk.change(Fk, tk.ADD), void 0 !== kk[yk] && kk[yk].setParent(this, Bk.root, Fk), Fk
      }
      entries() {
        return this.$items.entries()
      }
      delete(kk) {
        const Fk = this.$items.entries();
        let Bk, Rk;
        for (;
          (Rk = Fk.next()) && !Rk.done;)
          if (kk === Rk.value[1]) {
            Bk = Rk.value[0];
            break
          } if (void 0 === Bk) return !1;
        const tk = this[yk];
        if (tk.isStreamCollection) {
          const kk = tk.root,
            Fk = this.$items.get(Bk);
          return void 0 !== kk && uF(this, kk, this[bk], Bk), void 0 !== Fk?.[yk] && kk?.remove(Fk[yk]), this.deletedItems[Bk] = Fk, this.$items.delete(Bk)
        }
        return this.deletedItems[Bk] = tk.delete(Bk), this.$items.delete(Bk)
      }
      clear() {
        const kk = this[yk];
        kk.discard(), this.$items.clear(), kk.operation(tk.CLEAR)
      } [vk]() {
        const kk = this[yk];
        if (kk.isStreamCollection) throw new Error("@colyseus/schema: cannot reset a streamed SetSchema (pooling not supported).");
        this.$items.forEach((kk => kk?.[vk]?.())), this.$items.clear(), this.deletedItems = {}, this.$refId = 0, kk.recycle(), this[bk] = void 0
      }
      has(kk) {
        const Fk = this.$items.values();
        let Bk, Rk = !1;
        for (;
          (Bk = Fk.next()) && !Bk.done;)
          if (kk === Bk.value) {
            Rk = !0;
            break
          } return Rk
      }
      forEach(kk) {
        this.$items.forEach(((Fk, Bk, Rk) => kk(Fk, Bk, this)))
      }
      values() {
        return this.$items.values()
      }
      get size() {
        return this.$items.size
      }
      pauseTracking() {
        this[yk].pause()
      }
      resumeTracking() {
        this[yk].resume()
      }
      untracked(kk) {
        return this[yk].untracked(kk)
      }
      get isTrackingPaused() {
        return this[yk].paused
      } [Symbol.iterator]() {
        return this.$items.values()
      }
      setIndex(kk, Fk) {}
      getIndex(kk) {
        return kk
      } [Jk](kk) {
        return this.$items.get(kk)
      } [Ak](kk) {
        this.$items.delete(kk)
      } [ek](kk, Fk, Bk) {
        let Rk = null;
        if (this.$items.forEach(((tk, ak) => {
            kk.has(ak) ? Bk(tk) : ((Rk ??= []).push(ak), Fk(tk, ak))
          })), null !== Rk)
          for (let tk = 0; tk < Rk.length; tk++) this[Ak](Rk[tk])
      } [Wk]() {
        for (const kk in this.deletedItems) delete this.deletedItems[kk]
      }
      _dropView(kk) {
        cF(this, kk)
      }
      _unregister() {}
      toArray() {
        return Array.from(this.$items.values())
      }
      toJSON() {
        const kk = [];
        return this.forEach(((Fk, Bk) => {
          kk.push("function" === typeof Fk.toJSON ? Fk.toJSON() : Fk)
        })), kk
      }
      clone(kk) {
        let Fk;
        return kk ? Fk = Object.assign(new bR, this) : (Fk = new bR, this.forEach((kk => {
          kk[yk] ? Fk.add(kk.clone()) : Fk.add(kk)
        }))), Fk
      }
    }
    LF("set", {
      constructor: bR
    });
    class wR {
      [yk];
      [bk];
      [fk];
      $items = new Map;
      $nextPosition = 0;
      _itemIndex = new Map;
      _stream;
      get maxPerTick() {
        return this._stream?.maxPerTick ?? 32
      }
      set maxPerTick(kk) {
        (this._stream ??= SF()).maxPerTick = kk
      }
      get priority() {
        return this._stream?.priority
      }
      set priority(kk) {
        (this._stream ??= SF()).priority = kk
      }
      static $isStream = !0;
      static[dk] = rB;
      static[sk] = nB;
      static COLLECTION_KIND = xB;
      static[Vk](kk, Fk, Bk) {
        if (!Bk) return !0;
        const Rk = kk[Jk](Fk);
        return void 0 !== Rk && Bk.isVisible(Rk[yk])
      }
      static is(kk) {
        return kk && void 0 !== kk.stream
      }
      constructor() {
        Object.defineProperty(this, yk, {
          value: new MB(this),
          enumerable: !1,
          writable: !0
        }), this[fk] = void 0
      }
      static initializeForDecoder() {
        const kk = Object.create(wR.prototype);
        return kk.$items = new Map, kk.$nextPosition = 0, kk._itemIndex = new Map, kk[fk] = void 0, UB(kk), kk
      }
      add(kk) {
        if (this._itemIndex.has(kk)) return -1;
        const Fk = this.$nextPosition++;
        this.$items.set(Fk, kk), this._itemIndex.set(kk, Fk);
        const Bk = this[yk].root;
        return void 0 !== kk[yk] && kk[yk].setParent(this, Bk, Fk), void 0 !== Bk && HF(this, Bk, Fk), Fk
      }
      remove(kk) {
        const Fk = this._itemIndex.get(kk);
        if (void 0 === Fk) return !1;
        this._itemIndex.delete(kk), this.$items.delete(Fk);
        const Bk = this[yk].root;
        return void 0 !== Bk && (uF(this, Bk, this[bk], Fk), void 0 !== kk[yk] && Bk.remove(kk[yk])), !0
      }
      has(kk) {
        return this._itemIndex.has(kk)
      }
      clear() {
        const kk = this[yk].root;
        if (void 0 !== kk) {
          ! function(kk, Fk, Bk) {
            const Rk = kk._stream;
            if (void 0 !== Rk) {
              Rk.broadcastPending.clear();
              for (const kk of Rk.sentBroadcast) Rk.broadcastDeletes.add(kk);
              Rk.sentBroadcast.clear(), Fk.forEachActiveView((kk => {
                Rk.pendingByView.get(kk.id)?.clear();
                const Fk = Rk.sentByView.get(kk.id);
                if (void 0 !== Fk && Fk.size > 0) {
                  let Rk = kk.changes.get(Bk);
                  void 0 === Rk && (Rk = new Map, kk.changes.set(Bk, Rk));
                  for (const kk of Fk) Rk.set(kk, tk.DELETE);
                  Fk.clear()
                }
              }))
            }
          }(this, kk, this[bk]);
          for (const Fk of this.$items.values()) void 0 !== Fk[yk] && kk.remove(Fk[yk])
        }
        this.$items.clear(), this._itemIndex.clear()
      }
      forEach(kk) {
        for (const [Fk, Bk] of this.$items) kk(Bk, Fk, this)
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
      setIndex(kk, Fk) {}
      getIndex(kk) {
        return kk
      } [Jk](kk) {
        return this.$items.get(kk)
      } [Ak](kk) {
        const Fk = this.$items.get(kk);
        void 0 !== Fk && (this._itemIndex.delete(Fk), this.$items.delete(kk))
      } [ek]() {} [Wk]() {}
      toArray() {
        return Array.from(this.$items.values())
      }
      toJSON() {
        const kk = [];
        return this.forEach((Fk => {
          kk.push("function" === typeof Fk?.toJSON ? Fk.toJSON() : Fk)
        })), kk
      }
      clone(kk) {
        if (kk) {
          return Object.assign(new wR, this)
        }
        const Fk = new wR;
        return Fk.maxPerTick = this.maxPerTick, this.forEach((kk => {
          Fk.add("function" === typeof kk?.clone ? kk.clone() : kk)
        })), Fk
      }
      _dropView(kk) {
        cF(this, kk)
      }
      _unregister() {}
    }
    LF("stream", {
      constructor: wR
    });
    class dR {
      [Lk] = !0;
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
      constructor(kk) {
        this._type = kk
      }
      default (kk) {
        return this._default = kk, this._hasDefault = !0, this
      }
      view(kk) {
        return this._view = kk ?? -1, this
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
        const kk = this._type;
        if (kk && "object" === typeof kk && void 0 !== kk.array) throw new Error(EF);
        return this._stream = !0, this
      }
      priority(kk) {
        return this._streamPriority = kk, this
      }
      deprecated() {
        let kk = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
        return this._deprecated = !0, this._deprecatedThrows = kk, this
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

    function sR(kk) {
      return null != kk && !0 === kk[Lk]
    }

    function VR(kk) {
      return () => new dR(kk)
    }

    function JR(kk) {
      if (sR(kk)) {
        const Fk = kk._type;
        throw new Error(`t.array/map/set/collection(): a t.* builder is not a valid element type \u2014 ${"string"===typeof Fk?`use the type name instead: t.array("${Fk}")`:'collections accept a Schema class or a primitive type name ("string", "number", \u2026)'}.`)
      }
      return kk
    }

    function AR(kk) {
      return new dR({
        quantized: TF(kk)
      })
    }
    const eR = Object.freeze({
        string: VR("string"),
        number: VR("number"),
        boolean: VR("boolean"),
        int8: VR("int8"),
        uint8: VR("uint8"),
        int16: VR("int16"),
        uint16: VR("uint16"),
        int32: VR("int32"),
        uint32: VR("uint32"),
        int64: VR("int64"),
        uint64: VR("uint64"),
        float32: VR("float32"),
        float64: VR("float64"),
        bigint64: VR("bigint64"),
        biguint64: VR("biguint64"),
        ref: kk => new dR(kk),
        array: kk => new dR({
          array: JR(kk)
        }),
        map: kk => new dR({
          map: JR(kk)
        }),
        set: kk => new dR({
          set: JR(kk)
        }),
        collection: kk => new dR({
          collection: JR(kk)
        }),
        stream: kk => {
          const Fk = new dR({
            stream: JR(kk)
          });
          return Fk._stream = !0, Fk
        },
        quantized: AR,
        angle: kk => AR({
          min: 0,
          max: 2 * Math.PI,
          mode: "wrap",
          bits: kk?.bits ?? 16
        })
      }),
      yR = -1;

    function fR(kk) {
      return hF.register(kk), kk
    }

    function mR() {
      let kk = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : yR;
      return function(Fk, Bk) {
        const Rk = jF.initialize(Fk.constructor);
        jF.setTag(Rk, Bk, kk)
      }
    }

    function WR(kk, Fk) {
      const Bk = jF.initialize(kk.constructor);
      jF.setUnreliable(Bk, Fk)
    }

    function vR(kk, Fk) {
      const Bk = jF.initialize(kk.constructor);
      jF.setPatchOnly(Bk, Fk)
    }

    function iR(kk, Fk) {
      const Bk = jF.initialize(kk.constructor);
      jF.setFullStateOnly(Bk, Fk)
    }

    function YR(kk, Fk) {
      return function(Bk, Rk) {
        const tk = Bk.constructor;
        if (!kk) throw new Error(`${tk.name}: @type() reference provided for "${Rk}" is undefined. Make sure you don't have any circular dependencies.`);
        kk = CF(kk, `${tk.name}.${Rk}`), hF.register(tk);
        const ak = Object.getPrototypeOf(tk)[Symbol.metadata],
          Xk = jF.initialize(tk);
        let bk = Xk[Rk];
        if (void 0 !== Xk[bk]) {
          if (Xk[bk].deprecated) return;
          if (void 0 !== Xk[bk].type) {
            const kk = new Error(`@colyseus/schema: Duplicate '${Rk}' definition on '${tk.name}'.\nCheck @type() annotation`);
            throw new Error(`${kk.message} ${kk.stack.split("\n")[4].trim()}`)
          }
        } else bk = Xk[Nk] ?? (ak && ak[Nk]) ?? -1, bk++;
        if (Fk && Fk.manual) jF.addField(Xk, bk, Rk, kk, {
          enumerable: !0,
          configurable: !0,
          writable: !0
        });
        else {
          const {
            complexTypeKlass: Fk,
            childType: Bk
          } = qF(kk);
          jF.addField(Xk, bk, Rk, kk, LR(Rk, bk, Bk, Fk))
        }
        Xk[Ok][Rk] && Object.defineProperty(Bk, Rk, Xk[Ok][Rk]), ("string" === typeof kk || rF(kk)) && (Xk[Sk] || Object.defineProperty(Xk, Sk, {
          value: [],
          enumerable: !1,
          configurable: !0,
          writable: !0
        }), Xk[Sk][bk] = "string" === typeof kk ? BF[kk] : PF(kk.quantized))
      }
    }
    const oR = {
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

    function LR(kk, Fk, Bk, Rk) {
      let ak;
      return ak = Rk ? function(kk, Fk, Bk, Rk) {
        const ak = Rk.constructor === RR,
          Xk = Rk.constructor === aR;
        return function(kk) {
          const Rk = this[Yk],
            bk = Rk[Fk];
          if (kk !== bk) {
            if (void 0 !== kk && null !== kk) {
              if (!ak || kk instanceof RR)
                if (!Xk || kk instanceof aR) kk[fk] = Bk;
                else {
                  const Fk = new aR;
                  if (Fk[fk] = Bk, kk instanceof Map) kk.forEach(((kk, Bk) => Fk.set(Bk, kk)));
                  else
                    for (const Bk in kk) Fk.set(Bk, kk[Bk]);
                  kk = Fk
                }
              else {
                const Fk = new RR;
                Fk[fk] = Bk, Fk.push(...kk), kk = Fk
              }
              const Rk = this[yk],
                dk = this.constructor;
              void 0 !== bk && null !== bk && bk[yk] ? (Rk.root?.remove(bk[yk]), dk[wk](Rk, Fk, tk.DELETE_AND_ADD)) : dk[wk](Rk, Fk, tk.ADD), kk[yk]?.setParent(this, Rk.root, Fk)
            } else void 0 !== bk && null !== bk && this[yk].delete(Fk);
            Rk[Fk] = kk
          }
        }
      }(0, Fk, Bk, Rk) : "string" === typeof Bk ? function(kk, Fk, Bk) {
        const Rk = oR[Bk],
          ak = "string" === Bk,
          Xk = "boolean" === Bk;
        return function(Bk) {
          const bk = this[Yk],
            dk = bk[Fk];
          if (Bk !== dk) {
            if (void 0 !== Bk && null !== Bk) {
              if (!Xk && void 0 !== Rk && typeof Bk !== Rk && (!ak || null !== Bk)) {
                const Fk = Bk && Bk.constructor ? ` (${Bk.constructor.name})` : "";
                throw new QB(`a '${Rk}' was expected, but '${JSON.stringify(Bk)}'${Fk} was provided in ${this.constructor.name}#${kk}`)
              }
              this.constructor[wk](this[yk], Fk, tk.ADD)
            } else void 0 !== dk && null !== dk && this[yk].delete(Fk);
            bk[Fk] = Bk
          }
        }
      }(kk, Fk, Bk) : rF(Bk) ? function(kk, Fk, Bk) {
        return function(Rk) {
          const ak = this[Yk],
            Xk = ak[Fk];
          if (void 0 !== Rk && null !== Rk) {
            if ("number" !== typeof Rk) throw new QB(`a 'number' was expected, but '${JSON.stringify(Rk)}' was provided in ${this.constructor.name}#${kk}`);
            if ((Rk = zF(Bk, DF(Bk, Rk))) === Xk) return;
            this.constructor[wk](this[yk], Fk, tk.ADD)
          } else {
            if (Rk === Xk) return;
            void 0 !== Xk && null !== Xk && this[yk].delete(Fk)
          }
          ak[Fk] = Rk
        }
      }(kk, Fk, Bk.quantized) : function(kk, Fk, Bk) {
        return function(Rk) {
          const ak = this[Yk],
            Xk = ak[Fk];
          if (Rk !== Xk) {
            if (void 0 !== Rk && null !== Rk) {
              kR(Rk, Bk, this, kk);
              const ak = this[yk],
                bk = this.constructor;
              void 0 !== Xk && null !== Xk && Xk[yk] ? (ak.root?.remove(Xk[yk]), bk[wk](ak, Fk, tk.DELETE_AND_ADD)) : bk[wk](ak, Fk, tk.ADD), Rk[yk]?.setParent(this, ak.root, Fk)
            } else void 0 !== Xk && null !== Xk && this[yk].delete(Fk);
            ak[Fk] = Rk
          }
        }
      }(kk, Fk, Bk), {
        get: function() {
          return this[Yk][Fk]
        },
        set: ak,
        enumerable: !0,
        configurable: !0
      }
    }

    function OR() {
      let kk = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
      return function(Fk, Bk) {
        const Rk = jF.initialize(Fk.constructor);
        jF.setDeprecated(Rk, Bk), kk && (Rk[Ok] ??= {}, Rk[Ok][Bk] = {
          get: function() {
            throw new Error(`${Bk} is deprecated.`)
          },
          set: function(kk) {},
          enumerable: !1,
          configurable: !0
        }, Object.defineProperty(Fk, Bk, Rk[Ok][Bk]))
      }
    }
    let ER = !1;

    function SR(kk, Fk, Bk) {
      ER || (ER = !0, console.warn("@colyseus/schema: defineTypes() is deprecated and will be removed in a future release. Use schema() with t.* field builders instead \u2192 https://docs.colyseus.io/state/schema"));
      for (let Rk in Fk) YR(Fk[Rk], Bk)(kk.prototype, Rk);
      return kk
    }

    function NR(kk, Fk) {
      let Bk = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : uR;
      if (null == kk || "object" !== typeof kk) throw new Error(`schema(): first argument must be a fields object (got ${typeof kk}).`);
      const Rk = {},
        tk = {},
        ak = {},
        Xk = {},
        bk = (kk, Fk) => {
          if (Fk.hasDefault)((kk, Fk) => {
            "function" === typeof Fk ? Xk[kk] = Fk : Fk && "function" === typeof Fk.clone ? Xk[kk] = () => Fk.clone() : ak[kk] = Fk
          })(kk, Fk.default);
          else if (!Fk.optional) {
            const Bk = function(kk) {
              if (kk && "object" === typeof kk) {
                if (void 0 !== kk.array) return () => new RR;
                if (void 0 !== kk.map) return () => new aR;
                if (void 0 !== kk.set) return () => new bR;
                if (void 0 !== kk.collection) return () => new XR;
                if (void 0 !== kk.stream) return () => new wR
              } else if ("function" === typeof kk && uR.is(kk) && (!kk.prototype.initialize || 0 === kk.prototype.initialize.length)) return () => new kk
            }(Fk.type);
            Bk && (Xk[kk] = Bk)
          }
        },
        wk = {},
        dk = [],
        sk = [],
        Vk = {},
        Jk = [],
        Ak = [],
        ek = {},
        yk = [];
      for (const Yk in kk) {
        const Bk = kk[Yk],
          ak = `schema(${Fk?`'${Fk}'`:""}): field '${Yk}'`;
        if (sR(Bk)) {
          const kk = Bk.toDefinition();
          if (kk.noSync) {
            if (void 0 !== kk.view || kk.unreliable || kk.patchOnly || kk.fullStateOnly || kk.stream) throw new Error(`${ak} uses .noSync() together with a sync-only modifier (.view/.unreliable/.patchOnly/.fullStateOnly/.stream). A local-only field cannot be synchronized.`);
            bk(Yk, kk);
            continue
          }
          if (kk.patchOnly && kk.fullStateOnly) throw new Error(`${ak} uses .patchOnly() together with .fullStateOnly(). Those are the only two delivery channels, so the field would never reach a client \u2014 use .noSync() if that is intended.`);
          const Fk = CF(kk.type, ak);
          if ("function" === typeof Fk && !uR.is(Fk)) throw new Error(`${ak} is a synced ref to non-Schema class '${Fk.name||"(anonymous)"}' \u2014 use .noSync(), or Metadata.setFields().`);
          Rk[Yk] = Fk, void 0 !== kk.view && (wk[Yk] = kk.view), kk.unreliable && dk.push(Yk), kk.patchOnly && sk.push(Yk), kk.deprecated && (Vk[Yk] = kk.deprecatedThrows), kk.fullStateOnly && Jk.push(Yk), kk.stream && Ak.push(Yk), void 0 !== kk.streamPriority && (ek[Yk] = kk.streamPriority), kk.optional && yk.push(Yk), bk(Yk, kk)
        } else {
          if ("function" !== typeof Bk) throw new Error(`${ak} must be a t.* builder, Schema subclass, or method (got ${typeof Bk}).`);
          uR.is(Bk) ? (Rk[Yk] = Bk, Bk.prototype.initialize && 0 !== Bk.prototype.initialize.length || (Xk[Yk] = () => new Bk)) : tk[Yk] = Bk
        }
      }
      const fk = kk => {
          for (const Fk in ak) kk[Fk] = ak[Fk];
          for (const Fk in Xk) kk[Fk] = Xk[Fk]()
        },
        mk = () => {
          const kk = {};
          return fk(kk), kk
        },
        Wk = "function" === typeof tk.initialize,
        vk = tk.initialize ?? Bk._initialize,
        ik = class extends Bk {
          constructor() {
            for (var kk = arguments.length, Fk = new Array(kk), Bk = 0; Bk < kk; Bk++) Fk[Bk] = arguments[Bk];
            const tk = Fk[0];
            void 0 === tk ? (super(), fk(this)) : super(Object.assign(mk(), Wk ? (kk => {
              const Fk = Object.keys(Rk),
                Bk = {};
              for (const Rk in kk) Fk.includes(Rk) || (Bk[Rk] = kk[Rk]);
              return Bk
            })(tk) : tk)), vk && new.target === ik && vk.apply(this, Fk)
          }
        };
      Fk && Object.defineProperty(ik, "name", {
        value: Fk
      }), jF.setFields(ik, Rk), ik._getDefaultValues = mk, ik._initialize = vk, Object.assign(ik.prototype, tk);
      for (const Yk in wk) mR(wk[Yk])(ik.prototype, Yk);
      for (const Yk of dk) WR(ik.prototype, Yk);
      for (const Yk of sk) vR(ik.prototype, Yk);
      for (const Yk in Vk) OR(Vk[Yk])(ik.prototype, Yk);
      if (Jk.length > 0 || Ak.length > 0) {
        const kk = ik[Symbol.metadata];
        for (const Fk of Jk) jF.setFullStateOnly(kk, Fk);
        for (const Fk of Ak) jF.setStream(kk, Fk);
        for (const Fk in ek) jF.setStreamPriority(kk, Fk, ek[Fk])
      }
      if (yk.length > 0) {
        const kk = ik[Symbol.metadata];
        for (const Fk of yk) kk[kk[Fk]].optional = !0
      }
      return ik.extend = (kk, Fk) => NR(kk, Fk, ik), ik
    }

    function HR(kk) {
      const Fk = kk[yk].root,
        Bk = {
          ops: {},
          refs: []
        };
      let Rk = Fk.changes.next;
      for (; Rk;) {
        const kk = Rk.changeTree;
        void 0 !== kk ? (Bk.refs.push(`refId#${kk.ref[bk]}`), kk.forEach(((kk, Fk) => {
          if (kk < 0 || !Fk) return;
          const Rk = tk[Fk];
          Bk.ops[Rk] || (Bk.ops[Rk] = 0), Bk.ops[Rk]++
        })), Rk = Rk.next) : Rk = Rk.next
      }
      return Bk
    }
    class uR {
      static[dk] = GB;
      static[sk] = lB;
      [bk];
      [Yk];
      static initialize(kk) {
        Object.defineProperty(kk, yk, {
          value: new MB(kk),
          enumerable: !1,
          writable: !0
        }), kk[Yk] = []
      }
      static initializeForDecoder() {
        const kk = Object.create(this.prototype);
        return UB(kk), kk[Yk] = [], kk
      }
      static reset(kk) {
        const Fk = kk?.[yk];
        if (void 0 === Fk || "function" !== typeof Fk.recycle) throw new Error("@colyseus/schema: Schema.reset() requires a tracked (encoder-side) instance.");
        if (void 0 !== Fk.extraParents) throw new Error(`@colyseus/schema: cannot reset a shared instance (${kk.constructor.name}) with multiple parents.`);
        kk[vk]()
      } [vk]() {
        const kk = this.constructor[Symbol.metadata],
          Fk = kk?.[Hk] ?? [],
          Bk = this[Yk];
        for (let Rk = 0; Rk < Fk.length; Rk++) {
          const kk = Bk[Fk[Rk]];
          kk?.[vk]?.()
        }
        this[yk].recycle(), this[bk] = void 0
      }
      static is(kk) {
        const Fk = kk[Symbol.metadata];
        return "object" === typeof Fk && null !== Fk
      }
      static isSchema(kk) {
        return "function" === typeof kk?.assign
      }
      static[wk](kk, Fk) {
        let Bk = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : tk.ADD;
        kk.change(Fk, Bk)
      }
      static[Vk](kk, Fk, Bk) {
        const Rk = kk.constructor[Symbol.metadata],
          tk = Rk[Fk]?.tag;
        return void 0 === Bk ? void 0 === tk : void 0 === tk || (tk === yR ? Bk.isChangeTreeVisible(kk[yk]) : Bk.hasTagOnTree(kk[yk], tk))
      }
      constructor(kk) {
        uR.initialize(this), kk && uR.assignProps(this, kk)
      }
      assign(kk) {
        return uR.assignProps(this, kk), this
      }
      static assignProps(kk, Fk) {
        const Bk = kk.constructor[Symbol.metadata];
        if (Bk && void 0 !== Bk[Nk])
          for (let tk = 0; tk <= Bk[Nk]; tk++) {
            const Rk = Bk[tk];
            if (!Rk) continue;
            const ak = Fk[Rk.name];
            void 0 !== ak && (kk[Rk.name] = ak)
          }
        const Rk = Object.keys(Fk);
        for (let tk = 0; tk < Rk.length; tk++) {
          const ak = Rk[tk];
          Bk && void 0 !== Bk[ak] || (kk[ak] = Fk[ak])
        }
      }
      restore(kk) {
        const Fk = this.constructor[Symbol.metadata];
        for (const Bk in Fk) {
          const Rk = Fk[Bk],
            tk = Rk.name,
            ak = Rk.type,
            Xk = kk[tk];
          if (void 0 !== Xk && null !== Xk)
            if ("string" === typeof ak) this[tk] = Xk;
            else if (uR.is(ak)) {
            const kk = new ak;
            kk.restore(Xk), this[tk] = kk
          } else if ("object" === typeof ak) {
            const kk = Object.keys(ak)[0],
              Fk = ak[kk];
            if ("map" === kk) {
              const kk = this[tk];
              for (const Bk in Xk)
                if (uR.is(Fk)) {
                  const Rk = new Fk;
                  Rk.restore(Xk[Bk]), kk.set(Bk, Rk)
                } else kk.set(Bk, Xk[Bk])
            } else if ("array" === kk) {
              const kk = this[tk];
              for (let Bk = 0; Bk < Xk.length; Bk++)
                if (uR.is(Fk)) {
                  const Rk = new Fk;
                  Rk.restore(Xk[Bk]), kk.push(Rk)
                } else kk.push(Xk[Bk])
            }
          }
        }
        return this
      }
      setDirty(kk, Fk) {
        const Bk = this.constructor[Symbol.metadata];
        this[yk].change(Bk[Bk[kk]].index, Fk)
      }
      pauseTracking() {
        this[yk].pause()
      }
      resumeTracking() {
        this[yk].resume()
      }
      untracked(kk) {
        return this[yk].untracked(kk)
      }
      get isTrackingPaused() {
        return this[yk].paused
      }
      clone() {
        const kk = Object.create(this.constructor.prototype);
        uR.initialize(kk);
        const Fk = this.constructor[Symbol.metadata];
        for (const Bk in Fk) {
          const Rk = Fk[Bk].name;
          "object" === typeof this[Rk] && "function" === typeof this[Rk]?.clone ? kk[Rk] = this[Rk].clone() : kk[Rk] = this[Rk]
        }
        return kk
      }
      toJSON() {
        const kk = {},
          Fk = this.constructor[Symbol.metadata];
        for (const Bk in Fk) {
          const Rk = Fk[Bk],
            tk = Rk.name;
          Rk.deprecated || null === this[tk] || "undefined" === typeof this[tk] || (kk[tk] = "function" === typeof this[tk].toJSON ? this[tk].toJSON() : this[tk])
        }
        return kk
      }
      discardAllChanges() {
        this[yk].discardAll()
      } [Jk](kk) {
        return this[this.constructor[Symbol.metadata][kk].name]
      } [Ak](kk) {
        this[this.constructor[Symbol.metadata][kk].name] = void 0
      }
      static debugRefIds(kk) {
        let Fk = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          Bk = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          Rk = arguments.length > 3 ? arguments[3] : void 0,
          tk = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "";
        const ak = Fk ? ` - ${JSON.stringify(kk.toJSON())}` : "",
          Xk = kk[yk],
          wk = kk[bk],
          dk = Rk ? Rk.root.refCount[wk] : Xk.refCount,
          sk = dk > 1 ? ` [\xd7${dk}]` : "";
        let Vk = `${function(kk){return new Array(kk).fill(0).map(((Fk,Bk)=>Bk===kk-1?"\u2514\u2500 ":"   ")).join("")}(Bk)}${tk}${kk.constructor.name} (refId: ${wk})${sk}${ak}\n`;
        return Xk.forEachChild(((tk, ak) => {
          let Xk = ak;
          "number" === typeof ak && kk.$indexes && (Xk = kk.$indexes.get(ak) ?? ak);
          const bk = void 0 !== kk.forEach && void 0 !== Xk ? `["${Xk}"]: ` : "";
          Vk += this.debugRefIds(tk.ref, Fk, Bk + 1, Rk, bk)
        })), Vk
      }
      static debugRefIdEncodingOrder(kk) {
        let Fk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "allChanges";
        const Bk = [],
          Rk = kk[yk];
        if ("changes" === Fk) {
          let kk = Rk.root.changes?.next;
          for (; kk;) kk.changeTree && Bk.push(kk.changeTree.ref[bk]), kk = kk.next;
          return Bk
        }
        const tk = "allFilteredChanges" === Fk,
          ak = new Set,
          Xk = kk => {
            ak.has(kk) || (ak.add(kk), kk.isFiltered === tk && Bk.push(kk.ref[bk]), kk.forEachChild(((kk, Fk) => Xk(kk))))
          };
        return Xk(Rk), Bk
      }
      static debugRefIdsFromDecoder(kk) {
        return this.debugRefIds(kk.state, !1, 0, kk)
      }
      static debugChanges(kk) {
        let Fk = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        const Bk = kk[yk],
          Rk = Fk ? "allChanges" : "changes";
        let ak = `${kk.constructor.name} (${kk[bk]}) -> .${Rk}:\n`;
        return Fk ? Bk.forEachLive((kk => {
          ak += `- [${kk}]: ADD (${JSON.stringify(Bk.getValue(Number(kk),!0))})\n`
        })) : Bk.forEach(((kk, Fk) => {
          kk < 0 || !Fk || (ak += `- [${kk}]: ${tk[Fk]} (${JSON.stringify(Bk.getValue(Number(kk),!1))})\n`)
        })), ak
      }
    }
    ak(uR);
    const MR = {
      value: 0,
      enumerable: !1,
      writable: !0
    };
    class gR {
      types;
      nextUniqueId = 0;
      changeTrees = {};
      get refCount() {
        const kk = {};
        for (const Fk in this.changeTrees) kk[Fk] = this.changeTrees[Fk].refCount;
        return kk
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
      enqueueFilterRefresh(kk) {
        this.types.hasFilters && (kk.flags & HB || (kk.flags |= HB, this.pendingFilterRefresh.push(kk)))
      }
      _nodePool = [];
      _nextViewId = 0;
      _freeViewIds = [];
      acquireViewId() {
        return this._freeViewIds.length > 0 ? this._freeViewIds.pop() : this._nextViewId++
      }
      releaseViewId(kk) {
        this._freeViewIds.push(kk)
      }
      activeViews = new Map;
      streamTrees = new Set;
      registerView(kk) {
        this.activeViews.set(kk.id, new WeakRef(kk))
      }
      unregisterView(kk) {
        this.activeViews.delete(kk.id);
        const Fk = kk.id;
        for (const Bk of this.streamTrees) Bk._dropView(Fk)
      }
      forEachActiveView(kk) {
        for (const [Fk, Bk] of this.activeViews) {
          const Rk = Bk.deref();
          if (void 0 !== Rk) kk(Rk);
          else {
            this.activeViews.delete(Fk);
            for (const kk of this.streamTrees) kk._dropView(Fk)
          }
        }
      }
      registerStream(kk) {
        this.streamTrees.add(kk)
      }
      unregisterStream(kk) {
        this.streamTrees.delete(kk)
      }
      constructor(kk) {
        let Fk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        this.types = kk, this.nextUniqueId = Fk
      }
      add(kk) {
        const Fk = kk.ref;
        void 0 === Fk[bk] && (MR.value = this.nextUniqueId++, Object.defineProperty(Fk, bk, MR));
        const Bk = Fk[bk],
          Rk = void 0 === this.changeTrees[Bk];
        Rk && (this.changeTrees[Bk] = kk), kk.needsRestage && (kk.needsRestage = !1, kk.forEachLiveWithCtx(kk, RB));
        const tk = Rk ? 0 : kk.refCount;
        return kk.refCount = tk + 1, tk > 0 && this.enqueueFilterRefresh(kk), Rk
      }
      remove(kk) {
        const Fk = kk.refCount - 1;
        if (Fk <= 0) {
          if (kk.root = void 0, delete this.changeTrees[kk.ref[bk]], kk.isStreamCollection) {
            const Fk = kk.ref;
            Fk._unregister?.(), this.unregisterStream(Fk)
          }
          this.removeFromQueue(kk), this.removeFromUnreliableQueue(kk), kk.refCount = 0, kk.needsRestage = !0, kk.forEachChild(((Fk, Bk) => {
            Fk.removeParent(kk.ref) && (void 0 === Fk.parentRef || Fk.refCount > 0 ? this.remove(Fk) : this.moveNextToParent(Fk))
          }))
        } else kk.refCount = Fk, this.enqueueFilterRefresh(kk), this.recursivelyMoveNextToParent(kk);
        return Fk
      }
      recursivelyMoveNextToParent(kk) {
        this.moveNextToParent(kk), kk.forEachChild(((kk, Fk) => this.recursivelyMoveNextToParent(kk)))
      }
      moveNextToParent(kk) {
        kk.changesNode && this._moveNextToParentInList(this.changes, kk, kk.changesNode, "changesNode"), kk.unreliableChangesNode && this._moveNextToParentInList(this.unreliableChanges, kk, kk.unreliableChangesNode, "unreliableChangesNode")
      }
      _moveNextToParentInList(kk, Fk, Bk, Rk) {
        const tk = Fk.parent;
        if (!tk || !tk[yk]) return;
        const ak = tk[yk][Rk];
        ak && ak !== Bk && (Bk.position > ak.position || (Bk.prev ? Bk.prev.next = Bk.next : kk.next = Bk.next, Bk.next ? Bk.next.prev = Bk.prev : kk.tail = Bk.prev, Bk.prev = kk.tail, Bk.next = void 0, kk.tail.next = Bk, kk.tail = Bk, Bk.position = kk.nextPosition++))
      }
      enqueueChangeTree(kk) {
        (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : kk.changesNode) || (kk.changesNode = this._appendToList(this.changes, kk))
      }
      enqueueUnreliable(kk) {
        (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : kk.unreliableChangesNode) || (kk.unreliableChangesNode = this._appendToList(this.unreliableChanges, kk))
      }
      _appendToList(kk, Fk) {
        const Bk = this._nodePool;
        let Rk;
        return Bk.length > 0 ? (Rk = Bk.pop(), Rk.changeTree = Fk, Rk.next = void 0, Rk.prev = void 0) : Rk = {
          changeTree: Fk,
          next: void 0,
          prev: void 0,
          position: 0
        }, kk.next ? (Rk.prev = kk.tail, kk.tail.next = Rk, kk.tail = Rk) : (kk.nextPosition = 0, kk.next = Rk, kk.tail = Rk), Rk.position = kk.nextPosition++, Rk
      }
      releaseNode(kk) {
        kk.changeTree = void 0, kk.prev = void 0, kk.next = void 0, this._nodePool.push(kk)
      }
      removeFromQueue(kk) {
        return this._removeNode(this.changes, kk, kk.changesNode, "changesNode")
      }
      removeFromUnreliableQueue(kk) {
        return this._removeNode(this.unreliableChanges, kk, kk.unreliableChangesNode, "unreliableChangesNode")
      }
      _removeNode(kk, Fk, Bk, Rk) {
        return !(!Bk || Bk.changeTree !== Fk) && (Bk.prev ? Bk.prev.next = Bk.next : kk.next = Bk.next, Bk.next ? Bk.next.prev = Bk.prev : kk.tail = Bk.prev, Fk[Rk] = void 0, this.releaseNode(Bk), !0)
      }
    }

    function UR(kk, Fk) {
      if (-1 === Fk || Fk >= kk.length) return !1;
      const Bk = kk.length - 1;
      for (let Rk = Fk; Rk < Bk; Rk++) kk[Rk] = kk[Rk + 1];
      return kk.length = Bk, !0
    }

    function cR(kk, Fk, Bk) {
      const Rk = ~Bk,
        tk = kk.changeTrees;
      for (const ak in tk) {
        const kk = tk[ak],
          Bk = kk.visibleViews;
        void 0 !== Bk && Fk < Bk.length && (Bk[Fk] &= Rk);
        const Xk = kk.subscribedViews;
        void 0 !== Xk && Fk < Xk.length && (Xk[Fk] &= Rk);
        const bk = kk.tagViews;
        void 0 !== bk && bk.forEach((kk => {
          Fk < kk.length && (kk[Fk] &= Rk)
        }))
      }
    }
    const GR = new FinalizationRegistry((kk => {
      let {
        root: Fk,
        id: Bk,
        slot: Rk,
        bit: tk
      } = kk;
      cR(Fk, Rk, tk), Fk.activeViews.delete(Bk);
      for (const ak of Fk.streamTrees) ak._dropView(Bk);
      Fk.releaseViewId(Bk)
    }));

    function TR(kk) {
      if (void 0 === kk) return "undefined";
      if (null === kk) return "null";
      const Fk = typeof kk;
      return "string" === Fk ? JSON.stringify(kk.length > 30 ? `${kk.slice(0,30)}\u2026` : kk) : "object" !== Fk && "function" !== Fk ? `${Fk} ${String(kk)}` : Array.isArray(kk) ? `Array(${kk.length})` : kk.constructor?.name ?? "Object"
    }
    class rR {
      iterable;
      items;
      id = -1;
      _root;
      _slot = 0;
      _bit = 0;
      changes = new Map;
      constructor() {
        let kk = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        this.iterable = kk, kk && (this.items = [])
      }
      _bindRoot(kk) {
        void 0 === this._root && (this._root = kk, this.id = kk.acquireViewId(), this._slot = this.id >> 5, this._bit = 1 << (31 & this.id), kk.registerView(this), GR.register(this, {
          root: kk,
          id: this.id,
          slot: this._slot,
          bit: this._bit
        }, this))
      }
      dispose() {
        void 0 !== this._root && (this._root.unregisterView(this), cR(this._root, this._slot, this._bit), this._root.releaseViewId(this.id), GR.unregister(this), this._root = void 0, this.id = -1)
      }
      isVisible(kk) {
        const Fk = kk.visibleViews,
          Bk = this._slot;
        return void 0 !== Fk && Bk < Fk.length && 0 !== (Fk[Bk] & this._bit)
      }
      markVisible(kk) {
        const Fk = this._slot;
        let Bk = kk.visibleViews;
        for (void 0 === Bk && (Bk = kk.visibleViews = []); Bk.length <= Fk;) Bk.push(0);
        Bk[Fk] |= this._bit
      }
      unmarkVisible(kk) {
        const Fk = kk.visibleViews;
        if (void 0 === Fk) return;
        const Bk = this._slot;
        Bk < Fk.length && (Fk[Bk] &= ~this._bit)
      }
      isSubscribed(kk) {
        const Fk = kk.subscribedViews,
          Bk = this._slot;
        return void 0 !== Fk && Bk < Fk.length && 0 !== (Fk[Bk] & this._bit)
      }
      _setSubscribed(kk) {
        const Fk = this._slot;
        let Bk = kk.subscribedViews;
        for (void 0 === Bk && (Bk = kk.subscribedViews = []); Bk.length <= Fk;) Bk.push(0);
        Bk[Fk] |= this._bit
      }
      _clearSubscribed(kk) {
        const Fk = kk.subscribedViews;
        if (void 0 === Fk) return;
        const Bk = this._slot;
        Bk < Fk.length && (Fk[Bk] &= ~this._bit)
      }
      hasTagOnTree(kk, Fk) {
        const Bk = kk.tagViews;
        if (void 0 === Bk) return !1;
        const Rk = this._slot,
          tk = this._bit;
        for (let ak = Fk; 0 !== ak; ak &= ak - 1) {
          const kk = Bk.get(ak & -ak);
          if (void 0 !== kk && Rk < kk.length && 0 !== (kk[Rk] & tk)) return !0
        }
        return !1
      }
      addTag(kk, Fk) {
        if (Fk === yR) return;
        let Bk = kk.tagViews;
        void 0 === Bk && (Bk = kk.tagViews = new Map);
        const Rk = this._slot,
          tk = this._bit;
        for (let ak = Fk; ak > 0; ak &= ak - 1) {
          const kk = ak & -ak;
          let Fk = Bk.get(kk);
          for (void 0 === Fk && (Fk = [], Bk.set(kk, Fk)); Fk.length <= Rk;) Fk.push(0);
          Fk[Rk] |= tk
        }
      }
      removeTag(kk, Fk) {
        if (Fk === yR) return;
        const Bk = kk.tagViews;
        if (void 0 === Bk) return;
        const Rk = this._slot,
          tk = ~this._bit;
        for (let ak = Fk; ak > 0; ak &= ak - 1) {
          const kk = Bk.get(ak & -ak);
          void 0 !== kk && Rk < kk.length && (kk[Rk] &= tk)
        }
      }
      removeAllTagsOnTree(kk) {
        const Fk = kk.tagViews;
        if (void 0 === Fk) return;
        const Bk = this._slot,
          Rk = ~this._bit;
        Fk.forEach((kk => {
          Bk < kk.length && (kk[Bk] &= Rk)
        }))
      }
      add(kk) {
        let Fk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : yR,
          Bk = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        return this._add(kk, Fk, Bk, !1)
      }
      _addImmediate(kk) {
        let Fk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : yR;
        this._add(kk, Fk, !0, !0)
      }
      _add(kk, Fk, Bk, Rk) {
        const ak = kk?.[yk];
        if (!ak) return console.warn(`StateView#add(): expected a Schema instance or collection, received ${TR(kk)}`), !1;
        const Xk = ak.parent;
        if (!Xk && 0 !== kk[bk]) throw new Error(`Cannot add a detached instance to the StateView. Make sure to assign the "${ak.ref.constructor.name}" instance to the state before calling view.add()`);
        void 0 === this._root && void 0 !== ak.root && this._bindRoot(ak.root);
        const wk = Xk?.[yk];
        if (!Rk && wk?.isStreamCollection) return UF(Xk, this.id, ak.parentIndex), !0;
        const dk = kk.constructor[Symbol.metadata],
          sk = this.isVisible(ak);
        if (!this.iterable || !Bk || sk && -1 !== this.items.indexOf(kk) || this.items.push(kk), this.markVisible(ak), Bk && Xk && this.addParentOf(ak, Fk), !Rk && ak.isStreamCollection) return !0;
        if (Fk === yR && ak.isNew) return this._markSubtreeVisible(ak, Fk), !1;
        let Vk = this.changes.get(kk[bk]);
        void 0 === Vk && (Vk = new Map, this.changes.set(kk[bk], Vk));
        let Jk = !1;
        const Ak = ak.encDescriptor.tags;
        if (ak.forEachChild(((kk, Bk) => {
            const Rk = Ak[Bk];
            if (void 0 !== Rk) {
              if (!(Rk === yR || Fk !== yR && 0 !== (Rk & Fk))) return
            }
            this.add(kk.ref, Fk, !1) && (Jk = !0)
          })), Fk !== yR) {
          this.addTag(ak, Fk);
          const kk = dk?.[Mk];
          if (void 0 !== kk)
            for (let Bk = Fk; Bk > 0; Bk &= Bk - 1) kk[Bk & -Bk]?.forEach((kk => {
              ak.getChange(kk) !== tk.DELETE && Vk.set(kk, tk.ADD)
            }))
        }
        if ((Fk === yR || !sk) && (!ak.isNew || Jk))
          if (ak.isArray && "string" !== typeof ak.refTarget[fk]) ak.refTarget.items.length > 0 && (Vk.set(-1, tk.ADD), Jk = !0);
          else {
            const kk = ak.encDescriptor.tags;
            ak.forEachLive((Bk => {
              const Rk = kk[Bk];
              (void 0 === Rk || Rk === yR || Fk !== yR && 0 !== (Rk & Fk)) && (Vk.set(Bk, tk.ADD), Jk = !0)
            }))
          } return Jk
      }
      _markSubtreeVisible(kk, Fk) {
        const Bk = kk.encDescriptor.tags;
        kk.forEachChild(((kk, Rk) => {
          const tk = Bk[Rk];
          if (void 0 !== tk) {
            if (!(tk === yR || Fk !== yR && 0 !== (tk & Fk))) return
          }
          kk.isNew ? (this.markVisible(kk), this._markSubtreeVisible(kk, Fk)) : this._add(kk.ref, Fk, !1, !1)
        }))
      }
      addParentOf(kk, Fk) {
        const Bk = kk.parent[yk],
          Rk = kk.parentIndex;
        this.isVisible(Bk) || this.markVisible(Bk);
        const ak = Bk.parent?.[yk];
        if (ak && this.addParentOf(Bk, Fk), Bk.hasFilteredFields && Bk.getChange(Rk) !== tk.DELETE) {
          let ak = this.changes.get(Bk.ref[bk]);
          void 0 === ak && (ak = new Map, this.changes.set(Bk.ref[bk], ak));
          const Xk = Bk.encDescriptor.tags[Rk];
          void 0 !== Xk && Xk !== yR && 0 !== (Xk & Fk) && this.addTag(Bk, Fk), ak.set(Bk.isArray ? kk : Rk, tk.ADD)
        }
      }
      _touchAncestorsOf(kk) {
        let Fk = kk.parent?.[yk];
        if (void 0 === Fk) return;
        const Bk = [];
        for (; void 0 !== Fk;) {
          if (Fk.hasFilteredFields) {
            const kk = Fk.ref[bk];
            if (this.changes.has(kk)) break;
            Bk.push(Fk)
          }
          Fk = Fk.parent?.[yk]
        }
        for (let Rk = Bk.length - 1; Rk >= 0; Rk--) this.changes.set(Bk[Rk].ref[bk], new Map)
      }
      remove(kk) {
        let Fk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : yR,
          Bk = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        const Rk = kk?.[yk];
        if (!Rk) return console.warn(`StateView#remove(): expected a Schema instance or collection, received ${TR(kk)}`), this;
        const ak = Rk.parent?.[yk];
        if (ak?.isStreamCollection) return this.unmarkVisible(Rk), this.iterable && !Bk && UR(this.items, this.items.indexOf(kk)),
          function(kk, Fk, Bk, Rk, ak) {
            const Xk = kk._stream;
            if (void 0 === Xk) return !1;
            const bk = Xk.pendingByView.get(Fk);
            if (bk?.has(Rk)) return bk.delete(Rk), !1;
            const wk = Xk.sentByView.get(Fk);
            if (wk?.has(Rk)) {
              wk.delete(Rk);
              let kk = ak.get(Bk);
              return void 0 === kk && (kk = new Map, ak.set(Bk, kk)), kk.set(Rk, tk.DELETE), !0
            }
          }(Rk.parent, this.id, Rk.parent[bk], Rk.parentIndex, this.changes), this._recursiveDeleteVisibleChangeTree(Rk), this;
        if (Rk.isStreamCollection) {
          this.unmarkVisible(Rk), this.iterable && !Bk && UR(this.items, this.items.indexOf(kk));
          const Fk = Rk.ref,
            ak = Fk._stream;
          if (void 0 !== ak) {
            ak.pendingByView.get(this.id)?.clear();
            const kk = ak.sentByView.get(this.id);
            if (void 0 !== kk && kk.size > 0) {
              const Bk = Fk[bk];
              let Rk = this.changes.get(Bk);
              void 0 === Rk && (Rk = new Map, this.changes.set(Bk, Rk));
              for (const Fk of kk) Rk.set(Fk, tk.DELETE);
              kk.clear()
            }
          }
          return this
        }
        this.unmarkVisible(Rk), this.iterable && !Bk && UR(this.items, this.items.indexOf(kk));
        const Xk = Rk.ref,
          wk = Xk.constructor[Symbol.metadata],
          dk = Xk[bk];
        this._touchAncestorsOf(Rk);
        let sk = this.changes.get(dk);
        if (void 0 === sk && (sk = new Map, this.changes.set(dk, sk)), Fk === yR) {
          const kk = Rk.parent;
          if (kk && !jF.isValidInstance(kk) && Rk.isFiltered) {
            const Fk = ak.isArray ? Rk : Rk.parentIndex,
              Bk = kk[bk];
            let Xk = this.changes.get(Bk);
            void 0 === Xk ? (Xk = new Map, this.changes.set(Bk, Xk)) : Xk.get(Fk) === tk.ADD && this._dropPendingEntries(Rk), Xk.set(Fk, tk.DELETE), this._recursiveDeleteVisibleChangeTree(Rk)
          } else wk?.[uk]?.forEach((kk => this._removeViewField(Rk, sk, kk)))
        } else {
          const kk = wk?.[Mk];
          if (void 0 !== kk)
            for (let Bk = Fk; Bk > 0; Bk &= Bk - 1) kk[Bk & -Bk]?.forEach((kk => this._removeViewField(Rk, sk, kk)))
        }
        return void 0 === Fk ? this.removeAllTagsOnTree(Rk) : this.removeTag(Rk, Fk), this
      }
      has(kk) {
        return this.isVisible(kk[yk])
      }
      hasTag(kk) {
        let Fk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : yR;
        return this.hasTagOnTree(kk[yk], Fk)
      }
      subscribe(kk, Fk) {
        const Bk = kk?.[yk];
        if (!Bk) return console.warn(`StateView#subscribe(): expected a Schema collection, received ${TR(kk)}`), this;
        if (void 0 === this._root && void 0 !== Bk.root && this._bindRoot(Bk.root), void 0 !== Fk)
          if (Bk.isStreamCollection) {
            const Bk = NF(kk);
            null === Fk ? Bk.priorityByView?.delete(this.id) : (Bk.priorityByView ??= new Map).set(this.id, Fk)
          } else {
            const Fk = kk?.constructor?.name ?? "collection",
              Rk = Bk.parent;
            if (void 0 === Rk) console.warn(`StateView#subscribe(): \`priority\` ignored \u2014 this ${Fk} is not attached to a state yet, so it cannot be identified as a stream. Subscribe after assigning it to the state.`);
            else {
              const kk = Rk?.constructor?.[Symbol.metadata]?.[Bk.parentIndex]?.name,
                tk = kk ? `${Rk.constructor.name}#${kk}` : Fk;
              console.warn(`StateView#subscribe(): \`priority\` ignored \u2014 ${tk} is a ${Fk}, not a streaming collection. Declare the field with .stream() (e.g. t.map(X).stream()) or use t.stream(X) to enable priority batching.`)
            }
          } if (this.isSubscribed(Bk)) return this;
        const Rk = void 0 !== Bk.parent && !this.isVisible(Bk);
        if (Rk ? (this.addParentOf(Bk, yR), this._add(kk, yR, !1, !1)) : this.markVisible(Bk), this._setSubscribed(Bk), Bk.isStreamCollection) {
          const Fk = kk;
          Bk.forEachChild(((kk, Bk) => {
            UF(Fk, this.id, Bk)
          }))
        } else Rk || Bk.forEachChild((kk => {
          this.markVisible(kk)
        }));
        return this
      }
      unsubscribe(kk) {
        const Fk = kk?.[yk];
        if (!Fk) return console.warn(`StateView#unsubscribe(): expected a Schema collection, received ${TR(kk)}`), this;
        if (!this.isSubscribed(Fk)) return this;
        this._clearSubscribed(Fk);
        const Bk = Fk.ref[bk];
        if (Fk.isStreamCollection) {
          const Fk = kk._stream;
          if (void 0 !== Fk) {
            Fk.pendingByView.get(this.id)?.clear();
            const kk = Fk.sentByView.get(this.id);
            if (void 0 !== kk && kk.size > 0) {
              let Fk = this.changes.get(Bk);
              void 0 === Fk && (Fk = new Map, this.changes.set(Bk, Fk));
              for (const Bk of kk) Fk.set(Bk, tk.DELETE);
              kk.clear()
            }
          }
        } else {
          const kk = Fk.isArray;
          let Rk = this.changes.get(Bk);
          Fk.forEachChild(((Fk, ak) => {
            void 0 === Rk && (Rk = new Map, this.changes.set(Bk, Rk)), Rk.set(kk ? Fk : ak, tk.DELETE), this.unmarkVisible(Fk)
          }))
        }
        return this.unmarkVisible(Fk), this
      }
      clear() {
        if (!this.iterable) throw new Error("StateView#clear() is only available for iterable StateView's. Use StateView(iterable: true) constructor.");
        for (let kk = 0, Fk = this.items.length; kk < Fk; kk++) this.remove(this.items[kk], yR, !0);
        this.items.length = 0
      }
      isChangeTreeVisible(kk) {
        let Fk = this.isVisible(kk);
        if (!Fk && kk.isVisibilitySharedWithParent)
          if (this.isVisible(kk.parent[yk])) this.markVisible(kk), Fk = !0;
          else
            for (let Bk = kk.extraParents; void 0 !== Bk; Bk = Bk.next) {
              const Rk = Bk.ref[yk];
              if (Rk.isFiltered && this.isVisible(Rk)) {
                this.markVisible(kk), Fk = !0;
                break
              }
            }
        return Fk
      }
      _recursiveDeleteVisibleChangeTree(kk) {
        kk.forEachChild((kk => {
          this.unmarkVisible(kk), this._recursiveDeleteVisibleChangeTree(kk)
        }))
      }
      _dropPendingEntries(kk) {
        this.changes.delete(kk.ref[bk]), kk.forEachChild((kk => this._dropPendingEntries(kk)))
      }
      _removeViewField(kk, Fk, Bk) {
        const Rk = Fk.get(Bk) === tk.ADD;
        Fk.set(Bk, tk.DELETE);
        const ak = kk.ref[kk.encDescriptor.names[Bk]],
          Xk = ak?.[yk];
        Xk && (this.unmarkVisible(Xk), this._recursiveDeleteVisibleChangeTree(Xk), Rk && this._dropPendingEntries(Xk))
      }
    }

    function DR(kk) {
      kk.structSwitchEmitted || (kk.shouldEmitSwitch && (kk.buffer[kk.it.offset++] = 255, BF.number(kk.buffer, kk.ref[bk], kk.it)), kk.structSwitchEmitted = !0)
    }

    function zR(kk, Fk) {
      qR(kk, Fk, tk.ADD)
    }

    function PR(kk, Fk) {
      if (Fk._fullSyncGen === kk.gen) return;
      Fk._fullSyncGen = kk.gen;
      if (!kk.hasView || kk.view.isChangeTreeVisible(Fk)) {
        const Bk = Fk.encDescriptor;
        kk.changeTree = Fk, kk.ref = Fk.ref, kk.encoder = Bk.encoder, kk.filter = Bk.filter, kk.metadata = Bk.metadata, kk.treeIsFiltered = Fk.isFiltered, kk.isSchema = Bk.isSchema, kk.filterBitmask = Bk.filterBitmask, kk.tags = Bk.tags, kk.structSwitchEmitted = !1, kk.shouldEmitSwitch = kk.hasView || kk.it.offset > kk.initialOffset || Fk !== kk.rootChangeTree, Fk.isArray && Fk.collDirty.size > 0 && (Fk.flags |= 512), aB(Fk, kk, zR)
      }
      WB(Fk, kk, hR)
    }

    function hR(kk, Fk, Bk) {
      PR(kk, Fk)
    }

    function qR(kk, Fk, Bk) {
      if (Fk < 0) {
        if (kk.treeIsFiltered !== kk.emitFiltered) return;
        return DR(kk), void(kk.buffer[kk.it.offset++] = 255 & Math.abs(Fk))
      }
      if ((kk.isSchema ? kk.treeIsFiltered || (Fk < 32 ? 0 !== (kk.filterBitmask & 1 << Fk) : void 0 !== kk.tags[Fk]) : kk.treeIsFiltered) !== kk.emitFiltered) return;
      const Rk = kk.isEncodeAll ? tk.ADD : Bk;
      void 0 !== Rk && (void 0 === kk.filter || kk.filter(kk.ref, Fk, kk.view)) && (DR(kk), kk.encoder(kk.self, kk.buffer, kk.changeTree, Fk, Rk, kk.it, kk.isEncodeAll, kk.hasView, kk.metadata))
    }

    function CR(kk, Fk) {
      const Bk = new Uint8Array(kk.length + Fk.length);
      return Bk.set(kk, 0), Bk.set(Fk, kk.length), Bk
    }
    class ZR {
      static BUFFER_SIZE = 16384;
      sharedBuffer = new Uint8Array(ZR.BUFFER_SIZE);
      context;
      state;
      root;
      constructor(kk, Fk) {
        this.context = hF.cache(kk.constructor), this.root = Fk ?? new gR(this.context), this.setState(kk)
      }
      setState(kk) {
        this.state = kk, this.state[yk].setRoot(this.root)
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
        let kk = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
            offset: 0
          },
          Fk = arguments.length > 1 ? arguments[1] : void 0,
          Bk = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : this.sharedBuffer,
          Rk = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : kk.offset;
        return this._encodeChannel(kk, Fk, Bk, Rk, !1)
      }
      encodeUnreliable() {
        let kk = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
            offset: 0
          },
          Fk = arguments.length > 1 ? arguments[1] : void 0,
          Bk = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : this.sharedBuffer,
          Rk = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : kk.offset;
        return this._encodeChannel(kk, Fk, Bk, Rk, !0)
      }
      _encodeChannel(kk, Fk, Bk, Rk, tk) {
        this.root.pendingFilterRefresh.length > 0 && bB(this.root);
        const ak = void 0 !== Fk,
          Xk = this.state[yk],
          bk = this._encodeCtx;
        bk.self = this, bk.buffer = Bk, bk.it = kk, bk.view = Fk, bk.isEncodeAll = !1, bk.hasView = ak, bk.emitFiltered = ak;
        let wk = tk ? this.root.unreliableChanges : this.root.changes;
        for (; wk = wk.next;) {
          const Bk = wk.changeTree;
          if (ak && !Fk.isChangeTreeVisible(Bk)) continue;
          const dk = tk ? Bk.unreliableRecorder : Bk;
          if (!dk || !dk.has()) continue;
          const sk = Bk.encDescriptor;
          bk.changeTree = Bk, bk.ref = Bk.ref, bk.encoder = sk.encoder, bk.filter = sk.filter, bk.metadata = sk.metadata, bk.treeIsFiltered = Bk.isFiltered, bk.isSchema = sk.isSchema, bk.filterBitmask = sk.filterBitmask, bk.tags = sk.tags, bk.structSwitchEmitted = !1, bk.isRootTree = Bk === Xk, bk.shouldEmitSwitch = ak || kk.offset > Rk || !bk.isRootTree, dk.forEachWithCtx(bk, qR)
        }
        return tk || ak || !this._isStreamBroadcastMode || this._emitStreamBroadcast(Bk, kk), kk.offset > Bk.byteLength ? (Bk = this._resizeBuffer(Bk, kk.offset), kk.offset = Rk, this._encodeChannel(kk, Fk, Bk, Rk, tk)) : Bk.subarray(0, kk.offset)
      }
      encodeFullSync(kk, Fk, Bk, Rk) {
        let tk = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : kk.offset;
        this.root.pendingFilterRefresh.length > 0 && bB(this.root);
        const ak = void 0 !== Rk,
          Xk = this.state[yk],
          bk = this._encodeCtx;
        return bk.self = this, bk.buffer = Fk, bk.it = kk, bk.view = Rk, bk.isEncodeAll = !0, bk.hasView = ak, bk.emitFiltered = Bk, bk.gen = ++this._fullSyncGen, bk.initialOffset = tk, bk.rootChangeTree = Xk, PR(bk, Xk), kk.offset > Fk.byteLength ? (Fk = this._resizeBuffer(Fk, kk.offset), kk.offset = tk, this.encodeFullSync(kk, Fk, Bk, Rk, tk)) : Fk.subarray(0, kk.offset)
      }
      _resizeBuffer(kk, Fk) {
        const Bk = Math.ceil(Fk / ZR.BUFFER_SIZE) * ZR.BUFFER_SIZE,
          Rk = new Uint8Array(Bk);
        return Rk.set(kk), kk === this.sharedBuffer && (this.sharedBuffer = Rk), Rk
      }
      encodeAll() {
        let kk = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
            offset: 0
          },
          Fk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.sharedBuffer;
        return this.encodeFullSync(kk, Fk, !1)
      }
      encodeAllView(kk, Fk, Bk) {
        let Rk = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : this.sharedBuffer;
        const tk = Bk.offset;
        return Rk = this.encodeFullSync(Bk, Rk, !0, kk, tk), CR(Rk.subarray(0, Fk), Rk.subarray(tk, Bk.offset))
      }
      ensureCapacity(kk, Fk) {
        if (Fk + ZR.BUFFER_SIZE <= kk.byteLength) return kk;
        const Bk = Math.ceil((Fk + ZR.BUFFER_SIZE) / ZR.BUFFER_SIZE) * ZR.BUFFER_SIZE,
          Rk = new Uint8Array(Bk);
        return Rk.set(kk.subarray(0, Fk)), kk === this.sharedBuffer && (this.sharedBuffer = Rk), Rk
      }
      encodeView(kk, Fk, Bk) {
        let Rk = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : this.sharedBuffer,
          ak = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4];
        const Xk = Bk.offset;
        this._emitStreamPriority(kk);
        for (const wk of kk.changes.keys()) {
          const Fk = kk.changes.get(wk),
            ak = this.root.changeTrees[wk];
          if (void 0 === ak) {
            kk.changes.delete(wk);
            continue
          }
          if (0 === Fk.size) continue;
          const Xk = ak.encDescriptor,
            dk = Xk.encoder,
            sk = Xk.metadata,
            Vk = ak.ref,
            Ak = ak.refTarget;
          Rk = this.ensureCapacity(Rk, Bk.offset), Rk[Bk.offset++] = 255, BF.number(Rk, Vk[bk], Bk);
          for (const [wk, ek] of Fk) {
            let Fk;
            if (-1 === wk) {
              const kk = Ak.tmpItems,
                Fk = Ak.deletedIndexes;
              for (let Xk = 0; Xk < kk.length; Xk++) void 0 !== kk[Xk] && !0 !== Fk[Xk] && dk(this, Rk, ak, Xk, tk.ADD, Bk, !1, !0, sk);
              continue
            }
            if ("number" === typeof wk) Fk = wk;
            else {
              const Bk = wk.indexInParent(Vk);
              if (void 0 === Bk) continue;
              if (Fk = Bk, ek === tk.ADD && ak.getChange(Fk) === tk.DELETE) {
                kk.changes.delete(wk.ref[bk]);
                continue
              }
            }
            dk(this, Rk, ak, Fk, void 0 !== Ak[Jk](Fk) && ek || tk.DELETE, Bk, !1, !0, sk)
          }
        }
        return kk.changes.clear(), Rk = this.encode(Bk, kk, Rk), ak ? CR(Rk.subarray(0, Fk), Rk.subarray(Xk, Bk.offset)) : Rk.subarray(Xk, Bk.offset)
      }
      encodeUnreliableView(kk, Fk, Bk) {
        let Rk = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : this.sharedBuffer;
        const tk = Bk.offset;
        return Rk = this.encodeUnreliable(Bk, kk, Rk, tk), CR(Rk.subarray(0, Fk), Rk.subarray(tk, Bk.offset))
      }
      _emitStreamBroadcast(kk, Fk) {
        const Bk = this.root.streamTrees;
        for (const Rk of Bk) {
          const Bk = Rk,
            ak = Bk[yk],
            Xk = Bk[bk];
          if (void 0 === Xk) continue;
          const wk = Bk._stream,
            dk = wk.broadcastDeletes,
            sk = wk.broadcastPending,
            Vk = wk.sentBroadcast,
            Ak = dk.size > 0,
            ek = sk.size > 0,
            fk = ak.encDescriptor,
            mk = fk.encoder,
            Wk = fk.metadata;
          if (Ak || ek) {
            if (kk[Fk.offset++] = 255, BF.number(kk, Xk, Fk), Ak) {
              for (const Bk of dk) mk(this, kk, ak, Bk, tk.DELETE, Fk, !1, !1, Wk);
              dk.clear()
            }
            const Rk = wk.maxPerTick,
              ek = [];
            let fk = 0;
            const vk = [];
            for (const Xk of sk) {
              if (fk >= Rk) break;
              const bk = Bk[Jk](Xk);
              void 0 !== bk ? (mk(this, kk, ak, Xk, tk.ADD, Fk, !1, !1, Wk), Vk.add(Xk), ek.push(bk), vk.push(Xk), fk++) : vk.push(Xk)
            }
            for (const kk of vk) sk.delete(kk);
            for (const Bk of ek) {
              const Rk = Bk[yk];
              if (void 0 === Rk) continue;
              const ak = Bk[bk];
              if (void 0 === ak) continue;
              kk[Fk.offset++] = 255, BF.number(kk, ak, Fk);
              const Xk = Rk.encDescriptor,
                wk = Xk.encoder,
                dk = Xk.metadata;
              Rk.forEachLive((Bk => {
                jF.hasUnreliableAtIndex(dk, Bk) || wk(this, kk, Rk, Bk, tk.ADD, Fk, !1, !1, dk)
              }))
            }
          }
          for (const Rk of Vk) {
            const tk = Bk[Jk](Rk);
            if (void 0 === tk) continue;
            const ak = tk[yk];
            if (void 0 === ak || !ak.has()) continue;
            const Xk = tk[bk];
            if (void 0 === Xk) continue;
            kk[Fk.offset++] = 255, BF.number(kk, Xk, Fk);
            const wk = ak.encDescriptor,
              dk = wk.encoder,
              sk = wk.metadata;
            ak.forEach(((Bk, Rk) => {
              Bk < 0 || jF.hasUnreliableAtIndex(sk, Bk) || dk(this, kk, ak, Bk, Rk, Fk, !1, !1, sk)
            }))
          }
        }
      }
      _emitStreamPriority(kk) {
        const Fk = this.root.streamTrees;
        if (0 === Fk.size) return;
        const Bk = kk.id;
        for (const Rk of Fk) {
          const Fk = Rk,
            ak = Fk._stream,
            Xk = ak.pendingByView.get(Bk);
          if (void 0 === Xk || 0 === Xk.size) continue;
          const wk = ak.priorityByView?.get(Bk),
            dk = void 0 !== wk,
            sk = ak.priority,
            Vk = ak.maxPerTick,
            Ak = [],
            ek = [];
          if (dk || void 0 !== sk) {
            const Bk = [],
              Rk = [];
            let tk = 0;
            for (const ak of Xk) {
              const Xk = Fk[Jk](ak);
              if (void 0 === Xk) {
                ek.push(ak);
                continue
              }
              const bk = dk ? wk(Xk) : sk(kk, Xk);
              if (tk < Vk) {
                let kk = tk++;
                for (; kk > 0 && Rk[kk - 1] < bk;) Rk[kk] = Rk[kk - 1], Bk[kk] = Bk[kk - 1], kk--;
                Rk[kk] = bk, Bk[kk] = ak
              } else if (bk > Rk[Vk - 1]) {
                let kk = Vk - 1;
                for (; kk > 0 && Rk[kk - 1] < bk;) Rk[kk] = Rk[kk - 1], Bk[kk] = Bk[kk - 1], kk--;
                Rk[kk] = bk, Bk[kk] = ak
              }
            }
            for (let kk = 0; kk < tk; kk++) Ak.push(Bk[kk])
          } else
            for (const kk of Xk) {
              if (Ak.length >= Vk) break;
              Ak.push(kk)
            }
          for (const kk of ek) Xk.delete(kk);
          const fk = Ak.length;
          let mk = ak.sentByView.get(Bk);
          void 0 === mk && (mk = new Set, ak.sentByView.set(Bk, mk));
          for (let Bk = 0; Bk < fk; Bk++) {
            const Rk = Ak[Bk],
              ak = Fk[Jk](Rk);
            if (void 0 === ak) {
              Xk.delete(Rk);
              continue
            }
            kk._addImmediate(ak);
            const wk = ak[yk];
            if (void 0 !== wk) {
              const Fk = ak[bk];
              let Bk = kk.changes.get(Fk);
              void 0 === Bk && (Bk = new Map, kk.changes.set(Fk, Bk));
              const Rk = wk.metadata;
              wk.forEachLive((kk => {
                jF.hasUnreliableAtIndex(Rk, kk) || Bk.set(kk, tk.ADD)
              }))
            }
            Xk.delete(Rk), mk.add(Rk)
          }
        }
      }
      discardChanges() {
        const kk = this.root.changes;
        let Fk = kk.next;
        const Bk = this.root;
        for (; Fk;) {
          const kk = Fk.next;
          Fk.changeTree.endEncode(), Bk.releaseNode(Fk), Fk = kk
        }
        kk.next = void 0, kk.tail = void 0
      }
      discardUnreliableChanges() {
        const kk = this.root.unreliableChanges;
        let Fk = kk.next;
        const Bk = this.root;
        for (; Fk;) {
          const kk = Fk.next;
          Fk.changeTree.endEncodeUnreliable(), Bk.releaseNode(Fk), Fk = kk
        }
        kk.next = void 0, kk.tail = void 0
      }
      tryEncodeTypeId(kk, Fk, Bk, Rk) {
        const tk = this.context.getTypeId(Fk),
          ak = this.context.getTypeId(Bk);
        void 0 !== ak ? tk !== ak && (kk[Rk.offset++] = 213, BF.number(kk, ak, Rk)) : console.warn(`@colyseus/schema WARNING: Class "${Bk.name}" is not registered on TypeRegistry - Please either tag the class with @entity or define a @type() field.`)
      }
      get hasChanges() {
        return void 0 !== this.root.changes.next || this._hasStreamBacklog()
      }
      get _isStreamBroadcastMode() {
        return 0 === this.root.activeViews.size && this.root.streamTrees.size > 0
      }
      _hasStreamBacklog() {
        const kk = this.root;
        if (0 === kk.streamTrees.size) return !1;
        const Fk = 0 === kk.activeViews.size;
        for (const Bk of kk.streamTrees)
          if (Fk ? gF(Bk) : MF(Bk, kk)) return !0;
        return !1
      }
      get hasUnreliableChanges() {
        return void 0 !== this.root.unreliableChanges.next
      }
    }
    class pR extends Error {
      constructor(kk) {
        super(kk), this.name = "DecodingWarning"
      }
    }
    const KR = {
      value: 0,
      enumerable: !1,
      writable: !0
    };
    class xR {
      refs = new Map;
      refCount = {};
      deletedRefs = new Set;
      callbacks = {};
      nextUniqueId = 0;
      getNextUniqueId() {
        return this.nextUniqueId++
      }
      addRef(kk, Fk) {
        let Bk = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        this.refs.set(kk, Fk), void 0 === Fk[bk] ? (KR.value = kk, Object.defineProperty(Fk, bk, KR)) : Fk[bk] !== kk && (Fk[bk] = kk), Bk && (this.refCount[kk] = (this.refCount[kk] || 0) + 1), this.deletedRefs.has(kk) && this.deletedRefs.delete(kk)
      }
      removeRef(kk) {
        const Fk = this.refCount[kk];
        if (void 0 !== Fk)
          if (0 !== Fk)(this.refCount[kk] = Fk - 1) <= 0 && this.deletedRefs.add(kk);
          else try {
            const Fk = this.refs.get(kk);
            throw new pR(`trying to remove refId '${kk}' with 0 refCount (${Fk.constructor.name}: ${JSON.stringify(Fk)})`)
          } catch (bt) {
            console.warn(bt)
          } else try {
            throw new pR("trying to remove refId that doesn't exist: " + kk)
          } catch (bt) {
            console.warn(bt)
          }
      }
      clearRefs() {
        this.refs.clear(), this.deletedRefs.clear(), this.callbacks = {}, this.refCount = {}
      }
      garbageCollectDeletedRefs() {
        this.deletedRefs.forEach((kk => {
          if (this.refCount[kk] > 0) return;
          const Fk = this.refs.get(kk),
            Bk = Fk.constructor[Symbol.metadata];
          if (null != Bk)
            for (const Rk in Bk) {
              const kk = Fk[Bk[Rk].name];
              if ("object" === typeof kk && kk) {
                const Fk = kk[bk];
                void 0 === Fk || this.deletedRefs.has(Fk) || this.removeRef(Fk)
              }
            } else "function" === typeof Fk[fk] && Array.from(Fk.values()).forEach((kk => {
              const Fk = kk[bk];
              void 0 === Fk || this.deletedRefs.has(Fk) || this.removeRef(Fk)
            }));
          this.refs.delete(kk), delete this.refCount[kk], delete this.callbacks[kk]
        })), this.deletedRefs.clear()
      }
      addCallback(kk, Fk, Bk) {
        if (void 0 === kk) {
          const kk = "number" === typeof Fk ? tk[Fk] : Fk;
          throw new Error(`Can't addCallback on '${kk}' (refId is undefined)`)
        }
        return this.callbacks[kk] || (this.callbacks[kk] = {}), this.callbacks[kk][Fk] || (this.callbacks[kk][Fk] = []), this.callbacks[kk][Fk].push(Bk), () => this.removeCallback(kk, Fk, Bk)
      }
      removeCallback(kk, Fk, Bk) {
        const Rk = this.callbacks?.[kk]?.[Fk]?.indexOf(Bk);
        void 0 !== Rk && -1 !== Rk && UR(this.callbacks[kk][Fk], Rk)
      }
    }
    class jR {
      context;
      state;
      root;
      currentRefId = 0;
      kS;
      resyncVisited = null;
      resyncDamaged = !1;
      constructor(kk, Fk) {
        this.setState(kk), this.context = Fk || new hF(kk.constructor)
      }
      setState(kk) {
        this.state = kk, this.root = new xR, this.root.addRef(0, kk)
      }
      decode(kk) {
        let Fk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
            offset: 0
          },
          Bk = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : this.state;
        const tk = void 0 !== this.kS ? [] : null,
          ak = this.root,
          Xk = kk.byteLength;
        let bk = Bk.constructor[sk];
        for (this.currentRefId = 0; Fk.offset < Xk;) {
          if (kk[Fk.offset] == Rk) {
            Fk.offset++, Bk[ik]?.();
            const Rk = iF.number(kk, Fk),
              tk = ak.refs.get(Rk);
            tk ? (Bk = tk, bk = Bk.constructor[sk], this.currentRefId = Rk) : (console.error(`"refId" not found: ${Rk}`, {
              previousRef: Bk,
              previousRefId: this.currentRefId
            }), console.warn("Please report this issue to the developers."), this.skipCurrentStructure(kk, Fk, Xk));
            continue
          } - 1 !== bk(this, kk, Fk, Bk, tk) || (console.warn("@colyseus/schema: definition mismatch"), this.skipCurrentStructure(kk, Fk, Xk))
        }
        return Bk[ik]?.(), null !== this.resyncVisited && function(kk, Fk) {
          kk.resyncDamaged ? console.warn("@colyseus/schema: resync sweep skipped \u2014 parts of the payload could not be decoded. Stale entries may persist until the next resync.") : hB(kk, kk.state, new Set, Fk)
        }(this, tk), null !== tk && this.kS?.(tk), ak.garbageCollectDeletedRefs(), tk
      }
      decodeResync(kk) {
        let Fk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
          offset: 0
        };
        this.resyncVisited = new Map, this.resyncDamaged = !1;
        try {
          return this.decode(kk, Fk)
        } finally {
          this.resyncVisited = null
        }
      }
      skipCurrentStructure(kk, Fk, Bk) {
        null !== this.resyncVisited && (this.resyncDamaged = !0);
        const tk = {
          offset: Fk.offset
        };
        for (; Fk.offset < Bk && (kk[Fk.offset] !== Rk || (tk.offset = Fk.offset + 1, !this.root.refs.has(iF.number(kk, tk))));) Fk.offset++
      }
      getInstanceType(kk, Fk, Bk) {
        let Rk;
        if (213 === kk[Fk.offset]) {
          Fk.offset++;
          const Bk = iF.number(kk, Fk);
          Rk = this.context.get(Bk)
        }
        return Rk || Bk
      }
      createInstanceOfType(kk) {
        return kk.initializeForDecoder()
      }
      removeChildRefs(kk, Fk) {
        const Bk = "string" !== typeof kk[fk],
          Rk = kk[bk];
        kk.forEach(((ak, Xk) => {
          Fk?.push({
            ref: kk,
            refId: Rk,
            op: tk.DELETE,
            field: Xk,
            value: void 0,
            previousValue: ak
          }), Bk && this.root.removeRef(ak[bk])
        }))
      }
    }
    const lR = NR({
        min: eR.float64(),
        max: eR.float64(),
        bits: eR.uint8(),
        mode: eR.uint8()
      }, "QuantizedDescriptor"),
      nR = NR({
        name: eR.string(),
        type: eR.string(),
        referencedType: eR.number(),
        childPrimitive: eR.string(),
        quantized: eR.ref(lR).optional()
      }, "ReflectionField"),
      IR = NR({
        id: eR.number(),
        extendsId: eR.number(),
        fields: eR.array(nR)
      }, "ReflectionType"),
      QR = NR({
        types: eR.array(IR),
        rootType: eR.number()
      }, "Reflection");

    function kt(kk) {
      const Fk = kk.root,
        Bk = Fk.callbacks,
        Rk = new WeakMap;
      let ak;

      function Xk(kk, Bk) {
        let dk = Bk.instance?.constructor[Symbol.metadata] || kk,
          sk = Bk.instance && "function" === typeof Bk.instance.forEach || kk && !uR.is(kk);
        if (dk && !sk) {
          const kk = function(kk, tk, Xk, wk) {
            return wk && void 0 !== Bk.instance[tk] && !Rk.has(ak) && Xk(Bk.instance[tk], void 0), Fk.addCallback(kk[bk], tk, Xk)
          };
          return new Proxy({
            listen: function(Fk, tk) {
              let Xk = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
              if (Bk.instance) return kk(Bk.instance, Fk, tk, Xk);
              {
                let bk = () => {};
                return Bk.onInstanceAvailable(((Bk, wk) => {
                  bk = kk(Bk, Fk, tk, Xk && wk && !Rk.has(ak))
                })), () => bk()
              }
            },
            onChange: function(kk) {
              return Fk.addCallback(Bk.instance[bk], tk.REPLACE, kk)
            },
            bindTo: function(kk, Rk) {
              return Rk || (Rk = Object.keys(dk).map((kk => dk[kk].name))), Fk.addCallback(Bk.instance[bk], tk.REPLACE, (() => {
                Rk.forEach((Fk => kk[Fk] = Bk.instance[Fk]))
              }))
            }
          }, {
            get(kk, Fk) {
              const Rk = dk[dk[Fk]];
              if (Rk) {
                const kk = Bk.instance?.[Fk],
                  tk = Rk => {
                    const tk = wk(Bk.instance).listen(Fk, ((kk, Fk) => {
                      Rk(kk, !1), tk?.()
                    }), !1);
                    void 0 !== kk?.[bk] && Rk(kk, !0)
                  };
                return Xk(Rk.type, {
                  instance: void 0 !== kk?.[bk] && kk,
                  parentInstance: Bk.instance,
                  onInstanceAvailable: tk
                })
              }
              return kk[Fk]
            },
            has: (kk, Fk) => void 0 !== dk[Fk],
            set(kk, Fk, Bk) {
              throw new Error("not allowed")
            },
            deleteProperty(kk, Fk) {
              throw new Error("not allowed")
            }
          })
        } {
          const kk = function(kk, Bk, Xk) {
              return Xk && kk.forEach(((kk, Fk) => Bk(kk, Fk))), Fk.addCallback(kk[bk], tk.ADD, ((kk, Fk) => {
                Rk.set(Bk, !0), ak = Bk, Bk(kk, Fk), Rk.delete(Bk), ak = void 0
              }))
            },
            Xk = function(kk, Bk) {
              return Fk.addCallback(kk[bk], tk.DELETE, Bk)
            },
            wk = function(kk, Bk) {
              return Fk.addCallback(kk[bk], tk.REPLACE, Bk)
            };
          return new Proxy({
            Av: function(Fk) {
              let tk = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
              if (Bk.instance) return kk(Bk.instance, Fk, tk && !Rk.has(ak));
              if (Bk.onInstanceAvailable) {
                let Xk = () => {};
                return Bk.onInstanceAvailable(((Bk, bk) => {
                  Xk = kk(Bk, Fk, tk && bk && !Rk.has(ak))
                })), () => Xk()
              }
            },
            yE: function(kk) {
              if (Bk.instance) return Xk(Bk.instance, kk);
              if (Bk.onInstanceAvailable) {
                let Fk = () => {};
                return Bk.onInstanceAvailable((Bk => {
                  Fk = Xk(Bk, kk)
                })), () => Fk()
              }
            },
            onChange: function(kk) {
              if (Bk.instance) return wk(Bk.instance, kk);
              if (Bk.onInstanceAvailable) {
                let Fk = () => {};
                return Bk.onInstanceAvailable((Bk => {
                  Fk = wk(Bk, kk)
                })), () => Fk()
              }
            }
          }, {
            get(kk, Fk) {
              if (!kk[Fk]) throw new Error(`Can't access '${Fk}' through callback proxy. access the instance directly.`);
              return kk[Fk]
            },
            has: (kk, Fk) => void 0 !== kk[Fk],
            set(kk, Fk, Bk) {
              throw new Error("not allowed")
            },
            deleteProperty(kk, Fk) {
              throw new Error("not allowed")
            }
          })
        }
      }

      function wk(kk) {
        return Xk(void 0, {
          instance: kk
        })
      }
      return kk.kS = function(kk) {
        const Fk = new Set;
        for (let Rk = 0, ak = kk.length; Rk < ak; Rk++) {
          const ak = kk[Rk],
            Xk = ak.refId,
            wk = ak.ref,
            dk = Bk[Xk];
          if (dk) {
            if ((ak.op & tk.DELETE) === tk.DELETE && uR.isSchema(ak.previousValue)) {
              const kk = Bk[ak.previousValue[bk]]?.[tk.DELETE];
              for (let Fk = kk?.length - 1; Fk >= 0; Fk--) kk[Fk]()
            }
            if (uR.isSchema(wk)) {
              if (!Fk.has(Xk)) {
                const kk = dk?.[tk.REPLACE];
                for (let Fk = kk?.length - 1; Fk >= 0; Fk--) kk[Fk]()
              }
              if (dk.hasOwnProperty(ak.field)) {
                const kk = dk[ak.field];
                for (let Fk = kk?.length - 1; Fk >= 0; Fk--) kk[Fk](ak.value, ak.previousValue)
              }
            } else {
              if ((ak.op & tk.DELETE) === tk.DELETE) {
                if (void 0 !== ak.previousValue) {
                  const kk = dk[tk.DELETE];
                  for (let Fk = kk?.length - 1; Fk >= 0; Fk--) kk[Fk](ak.previousValue, ak.dynamicIndex ?? ak.field)
                }
                if ((ak.op & tk.ADD) === tk.ADD) {
                  const kk = dk[tk.ADD];
                  for (let Fk = kk?.length - 1; Fk >= 0; Fk--) kk[Fk](ak.value, ak.dynamicIndex ?? ak.field)
                }
              } else if ((ak.op & tk.ADD) === tk.ADD && ak.previousValue !== ak.value) {
                const kk = dk[tk.ADD];
                for (let Fk = kk?.length - 1; Fk >= 0; Fk--) kk[Fk](ak.value, ak.dynamicIndex ?? ak.field)
              }
              if (ak.value !== ak.previousValue && (void 0 !== ak.value || void 0 !== ak.previousValue)) {
                const kk = dk[tk.REPLACE];
                for (let Fk = kk?.length - 1; Fk >= 0; Fk--) kk[Fk](ak.value, ak.dynamicIndex ?? ak.field)
              }
            }
            Fk.add(Xk)
          }
        }
      }, wk
    }

    function Ft(kk, Fk) {
      kk.kS = Fk
    }
    QR.encode = function(kk) {
      let Fk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
        offset: 0
      };
      const Bk = kk.context,
        Rk = new QR,
        tk = new ZR(Rk),
        ak = Bk.schemas.get(kk.state.constructor);
      ak > 0 && (Rk.rootType = ak);
      const Xk = new Set,
        bk = {},
        wk = kk => {
          if (void 0 === kk.extendsId || Xk.has(kk.extendsId)) {
            Xk.add(kk.id), Rk.types.push(kk);
            const Fk = bk[kk.id];
            void 0 !== Fk && (delete bk[kk.id], Fk.forEach((kk => wk(kk))))
          } else void 0 === bk[kk.extendsId] && (bk[kk.extendsId] = []), bk[kk.extendsId].push(kk)
        };
      Bk.schemas.forEach(((kk, Fk) => {
        const Rk = new IR;
        Rk.id = Number(kk);
        const tk = Object.getPrototypeOf(Fk);
        tk !== uR && (Rk.extendsId = Bk.schemas.get(tk));
        const ak = Fk[Symbol.metadata];
        if (ak !== tk[Symbol.metadata]) {
          const kk = ak[Nk] ?? -1;
          for (let Fk = 0; Fk <= kk; Fk++) {
            const kk = ak[Fk];
            if (void 0 === kk) continue;
            const tk = kk.name;
            if (!Object.prototype.hasOwnProperty.call(ak, tk)) continue;
            const Xk = new nR;
            let bk;
            if (Xk.name = tk, "string" === typeof kk.type) bk = kk.type;
            else if (rF(kk.type)) {
              const Fk = kk.type.quantized;
              bk = "quantized";
              const Bk = new lR;
              Bk.min = Fk.min, Bk.max = Fk.max, Bk.bits = Fk.bits, Bk.mode = Fk.wrap ? 1 : 0, Xk.quantized = Bk
            } else {
              let Fk;
              uR.is(kk.type) ? (bk = "ref", Fk = kk.type) : (bk = Object.keys(kk.type)[0], "string" === typeof kk.type[bk] ? Xk.childPrimitive = kk.type[bk] : Fk = kk.type[bk]), Xk.referencedType = Fk ? Bk.getTypeId(Fk) : -1
            }
            Xk.type = bk, Rk.fields.push(Xk)
          }
        }
        wk(Rk)
      }));
      for (const dk in bk) bk[dk].forEach((kk => Rk.types.push(kk)));
      return tk.encodeAll(Fk).slice(0, Fk.offset)
    }, QR.decode = function(kk, Fk) {
      const Bk = new QR;
      new jR(Bk).decode(kk, Fk);
      const Rk = new hF;
      Bk.types.forEach((kk => {
        const Fk = Rk.get(kk.extendsId) ?? uR,
          Bk = class extends Fk {};
        hF.register(Bk), Rk.add(Bk, kk.id)
      }), {});
      Bk.types.forEach((kk => {
        const Fk = Rk.get(kk.id),
          tk = jF.initialize(Fk),
          ak = [];
        let Xk = kk;
        do {
          ak.push(Xk), Xk = Bk.types.find((kk => kk.id === Xk.extendsId))
        } while (Xk);
        let bk = 0;
        ak.reverse().forEach((kk => {
          ((kk, Fk, Bk) => {
            Fk.fields.forEach(((Fk, tk) => {
              const ak = Bk + tk;
              if (void 0 !== Fk.quantized) {
                const Bk = Fk.quantized;
                jF.addField(kk, ak, Fk.name, {
                  quantized: TF({
                    min: Bk.min,
                    max: Bk.max,
                    bits: Bk.bits,
                    mode: 1 === Bk.mode ? "wrap" : "clamp"
                  })
                })
              } else if (void 0 !== Fk.referencedType) {
                const Bk = Fk.type,
                  tk = Rk.get(Fk.referencedType) ?? Fk.childPrimitive;
                "ref" === Bk ? jF.addField(kk, ak, Fk.name, tk) : jF.addField(kk, ak, Fk.name, {
                  [Bk]: tk
                })
              } else jF.addField(kk, ak, Fk.name, Fk.type)
            }))
          })(tk, kk, bk), bk += kk.fields.length
        }))
      }));
      const tk = new(Rk.get(Bk.rootType || 0));
      return new jR(tk, Rk)
    }, QR.makeEncodable = function(kk) {
      const Fk = kk[Symbol.metadata];
      if (!Fk) return kk;
      const Bk = Fk[Nk];
      if (void 0 === Bk) return kk;
      for (let Rk = 0; Rk <= Bk; Rk++) {
        const Bk = Fk[Rk];
        Bk && jF.defineField(kk, Fk, Rk, Bk.name, Bk.type)
      }
      return Object.prototype.hasOwnProperty.call(kk, Ek) && delete kk[Ek], kk
    };
    class Bt {
      Le;
      uniqueRefIds = new Set;
      isTriggering = !1;
      constructor(kk) {
        this.Le = kk, this.Le.kS = this.kS.bind(this)
      }
      get callbacks() {
        return this.Le.root.callbacks
      }
      get state() {
        return this.Le.state
      }
      addCallback(kk, Fk, Bk) {
        return this.Le.root.addCallback(kk, Fk, Bk)
      }
      addCallbackOrWaitCollectionAvailable(kk, Fk, Bk, Rk) {
        let ak = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4],
          Xk = () => {};
        const wk = () => Xk(),
          dk = kk[Fk];
        if (dk && void 0 !== dk[bk]) return ak = ak && !1 === this.isTriggering, Bk === tk.ADD && ak && dk.forEach(((kk, Fk) => {
          Rk(kk, Fk)
        })), this.addCallback(dk[bk], Bk, Rk);
        {
          let tk;
          return tk = this.addCallback(kk[bk], Fk, ((kk, Fk) => {
            null !== kk && void 0 !== kk && (tk(), Xk = this.addCallback(kk[bk], Bk, Rk))
          })), Xk = tk, wk
        }
      }
      listen() {
        return "string" === typeof(arguments.length <= 0 ? void 0 : arguments[0]) ? this.listenInstance(this.state, arguments.length <= 0 ? void 0 : arguments[0], arguments.length <= 1 ? void 0 : arguments[1], arguments.length <= 2 ? void 0 : arguments[2]) : this.listenInstance(arguments.length <= 0 ? void 0 : arguments[0], arguments.length <= 1 ? void 0 : arguments[1], arguments.length <= 2 ? void 0 : arguments[2], arguments.length <= 3 ? void 0 : arguments[3])
      }
      listenInstance(kk, Fk, Bk) {
        let Rk = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
        Rk = Rk && !1 === this.isTriggering;
        const tk = kk[Fk];
        return Rk && null !== tk && void 0 !== tk && Bk(tk, void 0), this.addCallback(kk[bk], Fk, Bk)
      }
      onChange() {
        if (2 === arguments.length && "string" !== typeof(arguments.length <= 0 ? void 0 : arguments[0])) {
          const kk = arguments.length <= 0 ? void 0 : arguments[0],
            Fk = arguments.length <= 1 ? void 0 : arguments[1];
          return this.addCallback(kk[bk], tk.REPLACE, Fk)
        }
        return "string" === typeof(arguments.length <= 0 ? void 0 : arguments[0]) ? this.addCallbackOrWaitCollectionAvailable(this.state, arguments.length <= 0 ? void 0 : arguments[0], tk.REPLACE, arguments.length <= 1 ? void 0 : arguments[1]) : this.addCallbackOrWaitCollectionAvailable(arguments.length <= 0 ? void 0 : arguments[0], arguments.length <= 1 ? void 0 : arguments[1], tk.REPLACE, arguments.length <= 2 ? void 0 : arguments[2])
      }
      Av() {
        return "string" === typeof(arguments.length <= 0 ? void 0 : arguments[0]) ? this.addCallbackOrWaitCollectionAvailable(this.state, arguments.length <= 0 ? void 0 : arguments[0], tk.ADD, arguments.length <= 1 ? void 0 : arguments[1], !1 !== (arguments.length <= 2 ? void 0 : arguments[2])) : this.addCallbackOrWaitCollectionAvailable(arguments.length <= 0 ? void 0 : arguments[0], arguments.length <= 1 ? void 0 : arguments[1], tk.ADD, arguments.length <= 2 ? void 0 : arguments[2], !1 !== (arguments.length <= 3 ? void 0 : arguments[3]))
      }
      yE() {
        return "string" === typeof(arguments.length <= 0 ? void 0 : arguments[0]) ? this.addCallbackOrWaitCollectionAvailable(this.state, arguments.length <= 0 ? void 0 : arguments[0], tk.DELETE, arguments.length <= 1 ? void 0 : arguments[1]) : this.addCallbackOrWaitCollectionAvailable(arguments.length <= 0 ? void 0 : arguments[0], arguments.length <= 1 ? void 0 : arguments[1], tk.DELETE, arguments.length <= 2 ? void 0 : arguments[2])
      }
      bindTo(kk, Fk, Bk) {
        let Rk = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
        const ak = kk.constructor[Symbol.metadata];
        Bk || (Bk = Object.keys(ak).filter((kk => !isNaN(Number(kk)))).map((kk => ak[kk].name)));
        const Xk = () => {
          for (const Rk of Bk) {
            const Bk = kk[Rk];
            void 0 !== Bk && (Fk[Rk] = Bk)
          }
        };
        return Rk && Xk(), this.addCallback(kk[bk], tk.REPLACE, Xk)
      }
      kS(kk) {
        this.uniqueRefIds.clear(), this.isTriggering = !0;
        for (let Fk = 0, Bk = kk.length; Fk < Bk; Fk++) {
          const Bk = kk[Fk],
            Rk = Bk.refId,
            ak = Bk.ref,
            Xk = this.callbacks[Rk];
          if (Xk) {
            if ((Bk.op & tk.DELETE) === tk.DELETE && uR.isSchema(Bk.previousValue)) {
              const kk = Bk.previousValue[bk],
                Fk = this.callbacks[kk]?.[tk.DELETE];
              if (Fk)
                for (let Bk = Fk.length - 1; Bk >= 0; Bk--) try {
                  Fk[Bk]()
                } catch (bt) {
                  console.error(bt)
                }
            }
            if (uR.isSchema(ak)) {
              if (!this.uniqueRefIds.has(Rk)) {
                const kk = Xk[tk.REPLACE];
                if (kk)
                  for (let Fk = kk.length - 1; Fk >= 0; Fk--) try {
                    kk[Fk]()
                  } catch (bt) {
                    console.error(bt)
                  }
              }
              const kk = Xk[Bk.field];
              if (kk)
                for (let Fk = kk.length - 1; Fk >= 0; Fk--) try {
                  kk[Fk](Bk.value, Bk.previousValue)
                } catch (bt) {
                  console.error(bt)
                }
            } else {
              const kk = Bk.dynamicIndex ?? Bk.field;
              if ((Bk.op & tk.DELETE) === tk.DELETE) {
                if (void 0 !== Bk.previousValue) {
                  const Fk = Xk[tk.DELETE];
                  if (Fk)
                    for (let Rk = Fk.length - 1; Rk >= 0; Rk--) try {
                      Fk[Rk](Bk.previousValue, kk)
                    } catch (bt) {
                      console.error(bt)
                    }
                }
                if ((Bk.op & tk.ADD) === tk.ADD) {
                  const Fk = Xk[tk.ADD];
                  if (Fk)
                    for (let Rk = Fk.length - 1; Rk >= 0; Rk--) try {
                      Fk[Rk](Bk.value, kk)
                    } catch (bt) {
                      console.error(bt)
                    }
                }
              } else if ((Bk.op & tk.ADD) === tk.ADD && Bk.previousValue !== Bk.value) {
                const Fk = Xk[tk.ADD];
                if (Fk)
                  for (let Rk = Fk.length - 1; Rk >= 0; Rk--) try {
                    Fk[Rk](Bk.value, kk)
                  } catch (bt) {
                    console.error(bt)
                  }
              }
              if (Bk.value !== Bk.previousValue) {
                const Fk = Xk[tk.REPLACE];
                if (Fk)
                  for (let Rk = Fk.length - 1; Rk >= 0; Rk--) try {
                    Fk[Rk](kk, Bk.value)
                  } catch (bt) {
                    console.error(bt)
                  }
              }
            }
            this.uniqueRefIds.add(Rk)
          }
        }
        this.isTriggering = !1
      }
    }
    const Rt = {
      get(kk) {
        if (kk instanceof jR) return new Bt(kk);
        if ("Le" in kk.Zm) return new Bt(kk.Zm.Le);
        throw new Error("Invalid room or decoder")
      },
      getLegacy(kk) {
        if (kk instanceof jR) return kt(kk);
        if ("Le" in kk.Zm) return kt(kk.Zm.Le);
        throw new Error("Invalid room or decoder")
      },
      getRawChanges: (kk, Fk) => Ft(kk, Fk)
    };
    class tt {
      _free = [];
      _factory;
      _maxSize;
      constructor(kk) {
        let Fk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        this._factory = kk, this._maxSize = Fk.maxSize ?? 1 / 0;
        const Bk = Fk.preallocate ?? 0;
        for (let Rk = 0; Rk < Bk; Rk++) this._free.push(kk())
      }
      acquire() {
        return this._free.length > 0 ? this._free.pop() : this._factory()
      }
      release(kk) {
        uR.reset(kk), this._free.length < this._maxSize && this._free.push(kk)
      }
      get size() {
        return this._free.length
      }
    }

    function Xt(kk) {
      return new tt((() => new kk), arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {})
    }
    LF("map", {
      constructor: aR
    }), LF("array", {
      constructor: RR
    }), LF("set", {
      constructor: bR
    }), LF("collection", {
      constructor: XR
    })
  },
  8758: (kk, Fk, Bk) => {
    Bk.r(Fk), Bk.d(Fk, {
      __addDisposableResource: () => rk,
      __assign: () => ak,
      __asyncDelegator: () => Sk,
      __asyncGenerator: () => Ek,
      __asyncValues: () => Nk,
      __await: () => Ok,
      __awaiter: () => ek,
      __classPrivateFieldGet: () => ck,
      __classPrivateFieldIn: () => Tk,
      __classPrivateFieldSet: () => Gk,
      __createBinding: () => fk,
      __decorate: () => bk,
      __disposeResources: () => zk,
      __esDecorate: () => dk,
      __exportStar: () => mk,
      __extends: () => tk,
      __generator: () => yk,
      __importDefault: () => Uk,
      __importStar: () => gk,
      __makeTemplateObject: () => Hk,
      __metadata: () => Ak,
      __param: () => wk,
      __propKey: () => Vk,
      __read: () => vk,
      __rest: () => Xk,
      __rewriteRelativeImportExtension: () => Pk,
      __runInitializers: () => sk,
      __setFunctionName: () => Jk,
      __spread: () => ik,
      __spreadArray: () => Lk,
      __spreadArrays: () => Yk,
      __values: () => Wk,
      default: () => hk
    });
    var Rk = function(kk, Fk) {
      return Rk = Object.setPrototypeOf || {
        __proto__: []
      }
      instanceof Array && function(kk, Fk) {
        kk.__proto__ = Fk
      } || function(kk, Fk) {
        for (var Bk in Fk) Object.prototype.hasOwnProperty.call(Fk, Bk) && (kk[Bk] = Fk[Bk])
      }, Rk(kk, Fk)
    };

    function tk(kk, Fk) {
      if ("function" !== typeof Fk && null !== Fk) throw new TypeError("Class extends value " + String(Fk) + " is not a constructor or null");

      function Bk() {
        this.constructor = kk
      }
      Rk(kk, Fk), kk.prototype = null === Fk ? Object.create(Fk) : (Bk.prototype = Fk.prototype, new Bk)
    }
    var ak = function() {
      return ak = Object.assign || function(kk) {
        for (var Fk, Bk = 1, Rk = arguments.length; Bk < Rk; Bk++)
          for (var tk in Fk = arguments[Bk]) Object.prototype.hasOwnProperty.call(Fk, tk) && (kk[tk] = Fk[tk]);
        return kk
      }, ak.apply(this, arguments)
    };

    function Xk(kk, Fk) {
      var Bk = {};
      for (var Rk in kk) Object.prototype.hasOwnProperty.call(kk, Rk) && Fk.indexOf(Rk) < 0 && (Bk[Rk] = kk[Rk]);
      if (null != kk && "function" === typeof Object.getOwnPropertySymbols) {
        var tk = 0;
        for (Rk = Object.getOwnPropertySymbols(kk); tk < Rk.length; tk++) Fk.indexOf(Rk[tk]) < 0 && Object.prototype.propertyIsEnumerable.call(kk, Rk[tk]) && (Bk[Rk[tk]] = kk[Rk[tk]])
      }
      return Bk
    }

    function bk(kk, Fk, Bk, Rk) {
      var tk, ak = arguments.length,
        Xk = ak < 3 ? Fk : null === Rk ? Rk = Object.getOwnPropertyDescriptor(Fk, Bk) : Rk;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) Xk = Reflect.decorate(kk, Fk, Bk, Rk);
      else
        for (var bk = kk.length - 1; bk >= 0; bk--)(tk = kk[bk]) && (Xk = (ak < 3 ? tk(Xk) : ak > 3 ? tk(Fk, Bk, Xk) : tk(Fk, Bk)) || Xk);
      return ak > 3 && Xk && Object.defineProperty(Fk, Bk, Xk), Xk
    }

    function wk(kk, Fk) {
      return function(Bk, Rk) {
        Fk(Bk, Rk, kk)
      }
    }

    function dk(kk, Fk, Bk, Rk, tk, ak) {
      function Xk(kk) {
        if (void 0 !== kk && "function" !== typeof kk) throw new TypeError("Function expected");
        return kk
      }
      for (var bk, wk = Rk.kind, dk = "getter" === wk ? "get" : "setter" === wk ? "set" : "value", sk = !Fk && kk ? Rk.static ? kk : kk.prototype : null, Vk = Fk || (sk ? Object.getOwnPropertyDescriptor(sk, Rk.name) : {}), Jk = !1, Ak = Bk.length - 1; Ak >= 0; Ak--) {
        var ek = {};
        for (var yk in Rk) ek[yk] = "access" === yk ? {} : Rk[yk];
        for (var yk in Rk.access) ek.access[yk] = Rk.access[yk];
        ek.addInitializer = function(kk) {
          if (Jk) throw new TypeError("Cannot add initializers after decoration has completed");
          ak.push(Xk(kk || null))
        };
        var fk = (0, Bk[Ak])("accessor" === wk ? {
          get: Vk.get,
          set: Vk.set
        } : Vk[dk], ek);
        if ("accessor" === wk) {
          if (void 0 === fk) continue;
          if (null === fk || "object" !== typeof fk) throw new TypeError("Object expected");
          (bk = Xk(fk.get)) && (Vk.get = bk), (bk = Xk(fk.set)) && (Vk.set = bk), (bk = Xk(fk.init)) && tk.unshift(bk)
        } else(bk = Xk(fk)) && ("field" === wk ? tk.unshift(bk) : Vk[dk] = bk)
      }
      sk && Object.defineProperty(sk, Rk.name, Vk), Jk = !0
    }

    function sk(kk, Fk, Bk) {
      for (var Rk = arguments.length > 2, tk = 0; tk < Fk.length; tk++) Bk = Rk ? Fk[tk].call(kk, Bk) : Fk[tk].call(kk);
      return Rk ? Bk : void 0
    }

    function Vk(kk) {
      return "symbol" === typeof kk ? kk : "".concat(kk)
    }

    function Jk(kk, Fk, Bk) {
      return "symbol" === typeof Fk && (Fk = Fk.description ? "[".concat(Fk.description, "]") : ""), Object.defineProperty(kk, "name", {
        configurable: !0,
        value: Bk ? "".concat(Bk, " ", Fk) : Fk
      })
    }

    function Ak(kk, Fk) {
      if ("object" === typeof Reflect && "function" === typeof Reflect.metadata) return Reflect.metadata(kk, Fk)
    }

    function ek(kk, Fk, Bk, Rk) {
      return new(Bk || (Bk = Promise))((function(tk, ak) {
        function Xk(kk) {
          try {
            wk(Rk.next(kk))
          } catch (Fk) {
            ak(Fk)
          }
        }

        function bk(kk) {
          try {
            wk(Rk.throw(kk))
          } catch (Fk) {
            ak(Fk)
          }
        }

        function wk(kk) {
          var Fk;
          kk.done ? tk(kk.value) : (Fk = kk.value, Fk instanceof Bk ? Fk : new Bk((function(kk) {
            kk(Fk)
          }))).then(Xk, bk)
        }
        wk((Rk = Rk.apply(kk, Fk || [])).next())
      }))
    }

    function yk(kk, Fk) {
      var Bk, Rk, tk, ak = {
          label: 0,
          sent: function() {
            if (1 & tk[0]) throw tk[1];
            return tk[1]
          },
          trys: [],
          ops: []
        },
        Xk = Object.create(("function" === typeof Iterator ? Iterator : Object).prototype);
      return Xk.next = bk(0), Xk.throw = bk(1), Xk.return = bk(2), "function" === typeof Symbol && (Xk[Symbol.iterator] = function() {
        return this
      }), Xk;

      function bk(bk) {
        return function(wk) {
          return function(bk) {
            if (Bk) throw new TypeError("Generator is already executing.");
            for (; Xk && (Xk = 0, bk[0] && (ak = 0)), ak;) try {
              if (Bk = 1, Rk && (tk = 2 & bk[0] ? Rk.return : bk[0] ? Rk.throw || ((tk = Rk.return) && tk.call(Rk), 0) : Rk.next) && !(tk = tk.call(Rk, bk[1])).done) return tk;
              switch (Rk = 0, tk && (bk = [2 & bk[0], tk.value]), bk[0]) {
                case 0:
                case 1:
                  tk = bk;
                  break;
                case 4:
                  return ak.label++, {
                    value: bk[1],
                    done: !1
                  };
                case 5:
                  ak.label++, Rk = bk[1], bk = [0];
                  continue;
                case 7:
                  bk = ak.ops.pop(), ak.trys.pop();
                  continue;
                default:
                  if (!(tk = (tk = ak.trys).length > 0 && tk[tk.length - 1]) && (6 === bk[0] || 2 === bk[0])) {
                    ak = 0;
                    continue
                  }
                  if (3 === bk[0] && (!tk || bk[1] > tk[0] && bk[1] < tk[3])) {
                    ak.label = bk[1];
                    break
                  }
                  if (6 === bk[0] && ak.label < tk[1]) {
                    ak.label = tk[1], tk = bk;
                    break
                  }
                  if (tk && ak.label < tk[2]) {
                    ak.label = tk[2], ak.ops.push(bk);
                    break
                  }
                  tk[2] && ak.ops.pop(), ak.trys.pop();
                  continue
              }
              bk = Fk.call(kk, ak)
            } catch (wk) {
              bk = [6, wk], Rk = 0
            } finally {
              Bk = tk = 0
            }
            if (5 & bk[0]) throw bk[1];
            return {
              value: bk[0] ? bk[1] : void 0,
              done: !0
            }
          }([bk, wk])
        }
      }
    }
    var fk = Object.create ? function(kk, Fk, Bk, Rk) {
      void 0 === Rk && (Rk = Bk);
      var tk = Object.getOwnPropertyDescriptor(Fk, Bk);
      tk && !("get" in tk ? !Fk.__esModule : tk.writable || tk.configurable) || (tk = {
        enumerable: !0,
        get: function() {
          return Fk[Bk]
        }
      }), Object.defineProperty(kk, Rk, tk)
    } : function(kk, Fk, Bk, Rk) {
      void 0 === Rk && (Rk = Bk), kk[Rk] = Fk[Bk]
    };

    function mk(kk, Fk) {
      for (var Bk in kk) "default" === Bk || Object.prototype.hasOwnProperty.call(Fk, Bk) || fk(Fk, kk, Bk)
    }

    function Wk(kk) {
      var Fk = "function" === typeof Symbol && Symbol.iterator,
        Bk = Fk && kk[Fk],
        Rk = 0;
      if (Bk) return Bk.call(kk);
      if (kk && "number" === typeof kk.length) return {
        next: function() {
          return kk && Rk >= kk.length && (kk = void 0), {
            value: kk && kk[Rk++],
            done: !kk
          }
        }
      };
      throw new TypeError(Fk ? "Object is not iterable." : "Symbol.iterator is not defined.")
    }

    function vk(kk, Fk) {
      var Bk = "function" === typeof Symbol && kk[Symbol.iterator];
      if (!Bk) return kk;
      var Rk, tk, ak = Bk.call(kk),
        Xk = [];
      try {
        for (;
          (void 0 === Fk || Fk-- > 0) && !(Rk = ak.next()).done;) Xk.push(Rk.value)
      } catch (bk) {
        tk = {
          error: bk
        }
      } finally {
        try {
          Rk && !Rk.done && (Bk = ak.return) && Bk.call(ak)
        } finally {
          if (tk) throw tk.error
        }
      }
      return Xk
    }

    function ik() {
      for (var kk = [], Fk = 0; Fk < arguments.length; Fk++) kk = kk.concat(vk(arguments[Fk]));
      return kk
    }

    function Yk() {
      for (var kk = 0, Fk = 0, Bk = arguments.length; Fk < Bk; Fk++) kk += arguments[Fk].length;
      var Rk = Array(kk),
        tk = 0;
      for (Fk = 0; Fk < Bk; Fk++)
        for (var ak = arguments[Fk], Xk = 0, bk = ak.length; Xk < bk; Xk++, tk++) Rk[tk] = ak[Xk];
      return Rk
    }

    function Lk(kk, Fk, Bk) {
      if (Bk || 2 === arguments.length)
        for (var Rk, tk = 0, ak = Fk.length; tk < ak; tk++) !Rk && tk in Fk || (Rk || (Rk = Array.prototype.slice.call(Fk, 0, tk)), Rk[tk] = Fk[tk]);
      return kk.concat(Rk || Array.prototype.slice.call(Fk))
    }

    function Ok(kk) {
      return this instanceof Ok ? (this.v = kk, this) : new Ok(kk)
    }

    function Ek(kk, Fk, Bk) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var Rk, tk = Bk.apply(kk, Fk || []),
        ak = [];
      return Rk = Object.create(("function" === typeof AsyncIterator ? AsyncIterator : Object).prototype), Xk("next"), Xk("throw"), Xk("return", (function(kk) {
        return function(Fk) {
          return Promise.resolve(Fk).then(kk, dk)
        }
      })), Rk[Symbol.asyncIterator] = function() {
        return this
      }, Rk;

      function Xk(kk, Fk) {
        tk[kk] && (Rk[kk] = function(Fk) {
          return new Promise((function(Bk, Rk) {
            ak.push([kk, Fk, Bk, Rk]) > 1 || bk(kk, Fk)
          }))
        }, Fk && (Rk[kk] = Fk(Rk[kk])))
      }

      function bk(kk, Fk) {
        try {
          (Bk = tk[kk](Fk)).value instanceof Ok ? Promise.resolve(Bk.value.v).then(wk, dk) : sk(ak[0][2], Bk)
        } catch (Rk) {
          sk(ak[0][3], Rk)
        }
        var Bk
      }

      function wk(kk) {
        bk("next", kk)
      }

      function dk(kk) {
        bk("throw", kk)
      }

      function sk(kk, Fk) {
        kk(Fk), ak.shift(), ak.length && bk(ak[0][0], ak[0][1])
      }
    }

    function Sk(kk) {
      var Fk, Bk;
      return Fk = {}, Rk("next"), Rk("throw", (function(kk) {
        throw kk
      })), Rk("return"), Fk[Symbol.iterator] = function() {
        return this
      }, Fk;

      function Rk(Rk, tk) {
        Fk[Rk] = kk[Rk] ? function(Fk) {
          return (Bk = !Bk) ? {
            value: Ok(kk[Rk](Fk)),
            done: !1
          } : tk ? tk(Fk) : Fk
        } : tk
      }
    }

    function Nk(kk) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var Fk, Bk = kk[Symbol.asyncIterator];
      return Bk ? Bk.call(kk) : (kk = Wk(kk), Fk = {}, Rk("next"), Rk("throw"), Rk("return"), Fk[Symbol.asyncIterator] = function() {
        return this
      }, Fk);

      function Rk(Bk) {
        Fk[Bk] = kk[Bk] && function(Fk) {
          return new Promise((function(Rk, tk) {
            (function(kk, Fk, Bk, Rk) {
              Promise.resolve(Rk).then((function(Fk) {
                kk({
                  value: Fk,
                  done: Bk
                })
              }), Fk)
            })(Rk, tk, (Fk = kk[Bk](Fk)).done, Fk.value)
          }))
        }
      }
    }

    function Hk(kk, Fk) {
      return Object.defineProperty ? Object.defineProperty(kk, "raw", {
        value: Fk
      }) : kk.raw = Fk, kk
    }
    var uk = Object.create ? function(kk, Fk) {
        Object.defineProperty(kk, "default", {
          enumerable: !0,
          value: Fk
        })
      } : function(kk, Fk) {
        kk.default = Fk
      },
      Mk = function(kk) {
        return Mk = Object.getOwnPropertyNames || function(kk) {
          var Fk = [];
          for (var Bk in kk) Object.prototype.hasOwnProperty.call(kk, Bk) && (Fk[Fk.length] = Bk);
          return Fk
        }, Mk(kk)
      };

    function gk(kk) {
      if (kk && kk.__esModule) return kk;
      var Fk = {};
      if (null != kk)
        for (var Bk = Mk(kk), Rk = 0; Rk < Bk.length; Rk++) "default" !== Bk[Rk] && fk(Fk, kk, Bk[Rk]);
      return uk(Fk, kk), Fk
    }

    function Uk(kk) {
      return kk && kk.__esModule ? kk : {
        default: kk
      }
    }

    function ck(kk, Fk, Bk, Rk) {
      if ("a" === Bk && !Rk) throw new TypeError("Private accessor was defined without a getter");
      if ("function" === typeof Fk ? kk !== Fk || !Rk : !Fk.has(kk)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
      return "m" === Bk ? Rk : "a" === Bk ? Rk.call(kk) : Rk ? Rk.value : Fk.get(kk)
    }

    function Gk(kk, Fk, Bk, Rk, tk) {
      if ("m" === Rk) throw new TypeError("Private method is not writable");
      if ("a" === Rk && !tk) throw new TypeError("Private accessor was defined without a setter");
      if ("function" === typeof Fk ? kk !== Fk || !tk : !Fk.has(kk)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
      return "a" === Rk ? tk.call(kk, Bk) : tk ? tk.value = Bk : Fk.set(kk, Bk), Bk
    }

    function Tk(kk, Fk) {
      if (null === Fk || "object" !== typeof Fk && "function" !== typeof Fk) throw new TypeError("Cannot use 'in' operator on non-object");
      return "function" === typeof kk ? Fk === kk : kk.has(Fk)
    }

    function rk(kk, Fk, Bk) {
      if (null !== Fk && void 0 !== Fk) {
        if ("object" !== typeof Fk && "function" !== typeof Fk) throw new TypeError("Object expected.");
        var Rk, tk;
        if (Bk) {
          if (!Symbol.asyncDispose) throw new TypeError("Symbol.asyncDispose is not defined.");
          Rk = Fk[Symbol.asyncDispose]
        }
        if (void 0 === Rk) {
          if (!Symbol.dispose) throw new TypeError("Symbol.dispose is not defined.");
          Rk = Fk[Symbol.dispose], Bk && (tk = Rk)
        }
        if ("function" !== typeof Rk) throw new TypeError("Object not disposable.");
        tk && (Rk = function() {
          try {
            tk.call(this)
          } catch (kk) {
            return Promise.reject(kk)
          }
        }), kk.stack.push({
          value: Fk,
          dispose: Rk,
          async: Bk
        })
      } else Bk && kk.stack.push({
        async: !0
      });
      return Fk
    }
    var Dk = "function" === typeof SuppressedError ? SuppressedError : function(kk, Fk, Bk) {
      var Rk = new Error(Bk);
      return Rk.name = "SuppressedError", Rk.error = kk, Rk.suppressed = Fk, Rk
    };

    function zk(kk) {
      function Fk(Fk) {
        kk.error = kk.hasError ? new Dk(Fk, kk.error, "An error was suppressed during disposal.") : Fk, kk.hasError = !0
      }
      var Bk, Rk = 0;
      return function tk() {
        for (; Bk = kk.stack.pop();) try {
          if (!Bk.async && 1 === Rk) return Rk = 0, kk.stack.push(Bk), Promise.resolve().then(tk);
          if (Bk.dispose) {
            var ak = Bk.dispose.call(Bk.value);
            if (Bk.async) return Rk |= 2, Promise.resolve(ak).then(tk, (function(kk) {
              return Fk(kk), tk()
            }))
          } else Rk |= 1
        } catch (Xk) {
          Fk(Xk)
        }
        if (1 === Rk) return kk.hasError ? Promise.reject(kk.error) : Promise.resolve();
        if (kk.hasError) throw kk.error
      }()
    }

    function Pk(kk, Fk) {
      return "string" === typeof kk && /^\.\.?\//.test(kk) ? kk.replace(/\.(tsx)$|((?:\.d)?)((?:\.[^./]+?)?)\.([cm]?)ts$/i, (function(kk, Bk, Rk, tk, ak) {
        return Bk ? Fk ? ".jsx" : ".js" : !Rk || tk && ak ? Rk + tk + "." + ak.toLowerCase() + "js" : kk
      })) : kk
    }
    const hk = {
      __extends: tk,
      __assign: ak,
      __rest: Xk,
      __decorate: bk,
      __param: wk,
      __esDecorate: dk,
      __runInitializers: sk,
      __propKey: Vk,
      __setFunctionName: Jk,
      __metadata: Ak,
      __awaiter: ek,
      __generator: yk,
      __createBinding: fk,
      __exportStar: mk,
      __values: Wk,
      __read: vk,
      __spread: ik,
      __spreadArrays: Yk,
      __spreadArray: Lk,
      __await: Ok,
      __asyncGenerator: Ek,
      __asyncDelegator: Sk,
      __asyncValues: Nk,
      __makeTemplateObject: Hk,
      __importStar: gk,
      __importDefault: Uk,
      __classPrivateFieldGet: ck,
      __classPrivateFieldSet: Gk,
      __classPrivateFieldIn: Tk,
      __addDisposableResource: rk,
      __disposeResources: zk,
      __rewriteRelativeImportExtension: Pk
    }
  }
};
Object.freeze(modules);
for (const kk in modules) Object.freeze(modules[kk]);