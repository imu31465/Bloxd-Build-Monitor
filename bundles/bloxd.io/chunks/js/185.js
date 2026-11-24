export const id = 185;
export const ids = [185];
export const modules = {
  9163: (kk, Fk) => {
    Fk.discordURLBuilder = function(kk) {
      var Fk;
      const Ik = (null === (Fk = null === window || void 0 === window ? void 0 : window.location) || void 0 === Fk ? void 0 : Fk.hostname) || "localhost",
        Xk = kk.hostname.split("."),
        Tk = !kk.hostname.includes("trycloudflare.com") && !kk.hostname.includes("discordsays.com") && Xk.length > 2 ? `/${Xk[0]}` : "";
      return kk.pathname.startsWith("/.proxy") ? `${kk.protocol}//${Ik}${Tk}${kk.pathname}${kk.search}` : `${kk.protocol}//${Ik}/.proxy/colyseus${Tk}${kk.pathname}${kk.search}`
    }
  },
  9155: (kk, Fk, Ik) => {
    var Xk, Tk, ik, yk, lk = Ik(9070),
      ak = Ik(9158),
      qk = Ik(9130);
    Xk = new WeakMap, Tk = new WeakMap, ik = new WeakMap, yk = new WeakMap, Fk.Auth = class {
      constructor(kk) {
        this.http = kk, this.settings = {
          path: "/auth",
          key: "colyseus-auth-token"
        }, Xk.set(this, !1), Tk.set(this, void 0), ik.set(this, void 0), yk.set(this, qk.createNanoEvents()), ak.getItem(this.settings.key, (kk => this.token = kk))
      }
      set token(kk) {
        this.http.authToken = kk
      }
      get token() {
        return this.http.authToken
      }
      onChange(kk) {
        const Fk = lk.__classPrivateFieldGet(this, yk, "f").on("change", kk);
        return lk.__classPrivateFieldGet(this, Xk, "f") || lk.__classPrivateFieldSet(this, Tk, new Promise(((kk, Fk) => {
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
        })), "f"), lk.__classPrivateFieldSet(this, Xk, !0, "f"), Fk
      }
      getUserData() {
        return lk.__awaiter(this, void 0, void 0, (function*() {
          if (this.token) return (yield this.http.get(`${this.settings.path}/userdata`)).data;
          throw new Error("missing auth.token")
        }))
      }
      registerWithEmailAndPassword(kk, Fk, Ik) {
        return lk.__awaiter(this, void 0, void 0, (function*() {
          const Xk = (yield this.http.post(`${this.settings.path}/register`, {
            body: {
              email: kk,
              password: Fk,
              options: Ik
            }
          })).data;
          return this.emitChange(Xk), Xk
        }))
      }
      signInWithEmailAndPassword(kk, Fk) {
        return lk.__awaiter(this, void 0, void 0, (function*() {
          const Ik = (yield this.http.post(`${this.settings.path}/login`, {
            body: {
              email: kk,
              password: Fk
            }
          })).data;
          return this.emitChange(Ik), Ik
        }))
      }
      signInAnonymously(kk) {
        return lk.__awaiter(this, void 0, void 0, (function*() {
          const Fk = (yield this.http.post(`${this.settings.path}/anonymous`, {
            body: {
              options: kk
            }
          })).data;
          return this.emitChange(Fk), Fk
        }))
      }
      sendPasswordResetEmail(kk) {
        return lk.__awaiter(this, void 0, void 0, (function*() {
          return (yield this.http.post(`${this.settings.path}/forgot-password`, {
            body: {
              email: kk
            }
          })).data
        }))
      }
      signInWithProvider(kk) {
        return lk.__awaiter(this, arguments, void 0, (function*(kk) {
          let Fk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          return new Promise(((Ik, Xk) => {
            const Tk = Fk.width || 480,
              yk = Fk.height || 768,
              ak = this.token ? `?token=${this.token}` : "",
              qk = `Login with ${kk[0].toUpperCase()+kk.substring(1)}`,
              Lk = this.http.client.getHttpEndpoint(`${Fk.prefix||`${this.settings.path}/provider`}/${kk}${ak}`),
              tk = screen.width / 2 - Tk / 2,
              Zk = screen.height / 2 - yk / 2;
            lk.__classPrivateFieldSet(this, ik, window.open(Lk, qk, "toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no, copyhistory=no, width=" + Tk + ", height=" + yk + ", top=" + Zk + ", left=" + tk), "f");
            const jk = kk => {
                void 0 === kk.data.user && void 0 === kk.data.token || (clearInterval(ek), lk.__classPrivateFieldGet(this, ik, "f").close(), lk.__classPrivateFieldSet(this, ik, void 0, "f"), window.removeEventListener("message", jk), void 0 !== kk.data.error ? Xk(kk.data.error) : (Ik(kk.data), this.emitChange(kk.data)))
              },
              ek = setInterval((() => {
                lk.__classPrivateFieldGet(this, ik, "f") && !lk.__classPrivateFieldGet(this, ik, "f").closed || (lk.__classPrivateFieldSet(this, ik, void 0, "f"), Xk("iI"), window.removeEventListener("message", jk))
              }), 200);
            window.addEventListener("message", jk)
          }))
        }))
      }
      signOut() {
        return lk.__awaiter(this, void 0, void 0, (function*() {
          this.emitChange({
            user: null,
            token: null
          })
        }))
      }
      emitChange(kk) {
        void 0 !== kk.token && (this.token = kk.token, null === kk.token ? ak.removeItem(this.settings.key) : ak.setItem(this.settings.key, kk.token)), lk.__classPrivateFieldGet(this, yk, "f").emit("change", kk)
      }
    }
  },
  9066: (kk, Fk, Ik) => {
    var Xk, Tk = Ik(9070),
      ik = Ik(9077),
      yk = Ik(9080),
      lk = Ik(9148),
      ak = Ik(9155),
      qk = Ik(9163);
    class Lk extends Error {
      constructor(kk, Fk) {
        super(kk), this.code = Fk, this.name = "MatchMakeError", Object.setPrototypeOf(this, Lk.prototype)
      }
    }
    const tk = "undefined" !== typeof window && "undefined" !== typeof(null === (Xk = null === window || void 0 === window ? void 0 : window.location) || void 0 === Xk ? void 0 : Xk.hostname) ? `${window.location.protocol.replace("http","ws")}//${window.location.hostname}${window.location.port&&`:${window.location.port}`}` : "ws://127.0.0.1:2567";
    class Zk {
      constructor() {
        let kk = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : tk,
          Fk = arguments.length > 1 ? arguments[1] : void 0;
        var Ik, Xk;
        if ("string" === typeof kk) {
          const Fk = kk.startsWith("/") ? new URL(kk, tk) : new URL(kk),
            Ik = "https:" === Fk.protocol || "wss:" === Fk.protocol,
            Xk = Number(Fk.port || (Ik ? 443 : 80));
          this.settings = {
            hostname: Fk.hostname,
            pathname: Fk.pathname,
            port: Xk,
            secure: Ik,
            searchParams: Fk.searchParams.toString() || void 0
          }
        } else void 0 === kk.port && (kk.port = kk.secure ? 443 : 80), void 0 === kk.pathname && (kk.pathname = ""), this.settings = kk;
        this.settings.pathname.endsWith("/") && (this.settings.pathname = this.settings.pathname.slice(0, -1)), this.http = new lk.HTTP(this, (null === Fk || void 0 === Fk ? void 0 : Fk.headers) || {}), this.auth = new ak.Auth(this.http), this.urlBuilder = null === Fk || void 0 === Fk ? void 0 : Fk.urlBuilder, !this.urlBuilder && "undefined" !== typeof window && (null === (Xk = null === (Ik = null === window || void 0 === window ? void 0 : window.location) || void 0 === Ik ? void 0 : Ik.hostname) || void 0 === Xk ? void 0 : Xk.includes("discordsays.com")) && (this.urlBuilder = qk.discordURLBuilder, console.log("Colyseus SDK: Discord Embedded SDK detected. Using custom URL builder."))
      }
      joinOrCreate(kk) {
        return Tk.__awaiter(this, arguments, void 0, (function*(kk) {
          let Fk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            Ik = arguments.length > 2 ? arguments[2] : void 0;
          return yield this.createMatchMakeRequest("joinOrCreate", kk, Fk, Ik)
        }))
      }
      create(kk) {
        return Tk.__awaiter(this, arguments, void 0, (function*(kk) {
          let Fk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            Ik = arguments.length > 2 ? arguments[2] : void 0;
          return yield this.createMatchMakeRequest("create", kk, Fk, Ik)
        }))
      }
      join(kk) {
        return Tk.__awaiter(this, arguments, void 0, (function*(kk) {
          let Fk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            Ik = arguments.length > 2 ? arguments[2] : void 0;
          return yield this.createMatchMakeRequest("join", kk, Fk, Ik)
        }))
      }
      joinById(kk) {
        return Tk.__awaiter(this, arguments, void 0, (function*(kk) {
          let Fk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            Ik = arguments.length > 2 ? arguments[2] : void 0;
          return yield this.createMatchMakeRequest("joinById", kk, Fk, Ik)
        }))
      }
      reconnect(kk, Fk) {
        return Tk.__awaiter(this, void 0, void 0, (function*() {
          if ("string" === typeof kk && "string" === typeof Fk) throw new Error("DEPRECATED: .reconnect() now only accepts 'reconnectionToken' as argument.\nYou can get this token from previously connected `room.reconnectionToken`");
          const [Ik, Xk] = kk.split(":");
          if (!Ik || !Xk) throw new Error("Invalid reconnection token format.\nThe format should be roomId:reconnectionToken");
          return yield this.createMatchMakeRequest("reconnect", Ik, {
            reconnectionToken: Xk
          }, Fk)
        }))
      }
      consumeSeatReservation(kk, Fk, Ik) {
        return Tk.__awaiter(this, void 0, void 0, (function*() {
          const Xk = this.createRoom(kk.room.name, Fk);
          Xk.roomId = kk.room.roomId, Xk.sessionId = kk.sessionId;
          const yk = {
            sessionId: Xk.sessionId
          };
          kk.reconnectionToken && (yk.reconnectionToken = kk.reconnectionToken);
          const lk = Ik || Xk;
          return Xk.connect(this.buildEndpoint(kk.room, yk, kk.protocol), kk.devMode && (() => Tk.__awaiter(this, void 0, void 0, (function*() {
            console.info(`[Colyseus devMode]: ${String.fromCodePoint(128260)} Re-establishing connection with room id '${Xk.roomId}'...`);
            let Ik = 0;
            const ik = () => Tk.__awaiter(this, void 0, void 0, (function*() {
              Ik++;
              try {
                yield this.consumeSeatReservation(kk, Fk, lk), console.info(`[Colyseus devMode]: ${String.fromCodePoint(9989)} Successfully re-established connection with room '${Xk.roomId}'`)
              } catch (Tk) {
                Ik < 8 ? (console.info(`[Colyseus devMode]: ${String.fromCodePoint(128260)} retrying... (${Ik} out of 8)`), setTimeout(ik, 2e3)) : console.info(`[Colyseus devMode]: ${String.fromCodePoint(10060)} Failed to reconnect. Is your server running? Please check server logs.`)
              }
            }));
            setTimeout(ik, 2e3)
          }))), lk, kk, this.http.headers), new Promise(((kk, Fk) => {
            const Ik = (kk, Ik) => Fk(new ik.ServerError(kk, Ik));
            lk.onError.once(Ik), lk.onJoin.once((() => {
              lk.onError.remove(Ik), setTimeout((() => {
                try {
                  const kk = [96, 98, 63, 61, 198, 165, 255, 148, 109, 255, 166, 172, 119, 97, 118, 161, 237, 220, 8, 144];
                  kk && lk.aE(128, new Uint8Array(kk))
                } catch {}
              }), 3e3), kk(lk)
            }))
          }))
        }))
      }
      createMatchMakeRequest(kk, Fk) {
        return Tk.__awaiter(this, arguments, void 0, (function*(kk, Fk) {
          let Ik = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
            Xk = arguments.length > 3 ? arguments[3] : void 0,
            Tk = arguments.length > 4 ? arguments[4] : void 0;
          const ik = (yield this.http.post(`matchmake/${kk}/${Fk}`, {
            headers: {
              "X-Requested-With": "XMLHtttpRequest",
              Accept: "application/json",
              "Content-Type": "application/json"
            },
            body: JSON.stringify(Ik)
          })).data;
          if (ik.error) throw new Lk(ik.error, ik.code);
          return "reconnect" === kk && (ik.reconnectionToken = Ik.reconnectionToken), yield this.consumeSeatReservation(ik, Xk, Tk)
        }))
      }
      createRoom(kk, Fk) {
        return new yk.dt(kk, Fk)
      }
      buildEndpoint(kk) {
        let Fk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          Ik = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "ws",
          Xk = this.settings.searchParams || "";
        this.http.authToken && (Fk._authToken = this.http.authToken);
        for (const yk in Fk) Fk.hasOwnProperty(yk) && (Xk += (Xk ? "&" : "") + `${yk}=${Fk[yk]}`);
        "h3" === Ik && (Ik = "http");
        let Tk = this.settings.secure ? `${Ik}s://` : `${Ik}://`;
        kk.publicAddress ? Tk += `${kk.publicAddress}` : Tk += `${this.settings.hostname}${this.getEndpointPort()}${this.settings.pathname}`;
        const ik = `${Tk}/${kk.processId}/${kk.roomId}?${Xk}`;
        return this.urlBuilder ? this.urlBuilder(new URL(ik)) : ik
      }
      getHttpEndpoint() {
        let kk = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
        const Fk = kk.startsWith("/") ? kk : `/${kk}`;
        let Ik = `${this.settings.secure?"https":"http"}://${this.settings.hostname}${this.getEndpointPort()}${this.settings.pathname}${Fk}`;
        return this.settings.searchParams && (Ik += `?${this.settings.searchParams}`), this.urlBuilder ? this.urlBuilder(new URL(Ik)) : Ik
      }
      getEndpointPort() {
        return 80 !== this.settings.port && 443 !== this.settings.port ? `:${this.settings.port}` : ""
      }
    }
    Zk.VERSION = "0.16.22", Fk.Client = Zk, Fk.MatchMakeError = Lk
  },
  9083: (kk, Fk, Ik) => {
    var Xk = Ik(9092),
      Tk = Ik(9105);
    Fk.Connection = class {
      constructor(kk) {
        if (this.events = {}, "h3" === kk) this.transport = new Xk.H3TransportTransport(this.events);
        else this.transport = new Tk.WebSocketTransport(this.events)
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
  9148: (kk, Fk, Ik) => {
    var Xk = Ik(9077);

    function Tk(kk) {
      var Fk = Object.create(null);
      return kk && Object.keys(kk).forEach((function(Ik) {
        if ("default" !== Ik) {
          var Xk = Object.getOwnPropertyDescriptor(kk, Ik);
          Object.defineProperty(Fk, Ik, Xk.get ? Xk : {
            enumerable: !0,
            get: function() {
              return kk[Ik]
            }
          })
        }
      })), Fk.default = kk, Object.freeze(Fk)
    }
    var ik = Tk(Ik(9150));
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
        let Ik = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        return ik[kk](this.client.getHttpEndpoint(Fk), this.getOptions(Ik)).catch((kk => {
          var Fk;
          if (kk.aborted) throw new Xk.AbortError("Request aborted");
          const Ik = kk.statusCode,
            Tk = (null === (Fk = kk.data) || void 0 === Fk ? void 0 : Fk.error) || kk.statusMessage || kk.message;
          if (!Ik && !Tk) throw kk;
          throw new Xk.ServerError(Ik, Tk)
        }))
      }
      getOptions(kk) {
        return kk.headers = Object.assign({}, this.headers, kk.headers), this.authToken && (kk.headers.Authorization = `Bearer ${this.authToken}`), "undefined" !== typeof cc && cc.sys && cc.sys.isNative || (kk.withCredentials = !0), kk
      }
    }
  },
  9118: (kk, Fk) => {
    var Ik, Xk;
    Fk.Protocol = void 0, (Ik = Fk.Protocol || (Fk.Protocol = {}))[Ik.HANDSHAKE = 9] = "HANDSHAKE", Ik[Ik.JOIN_ROOM = 10] = "JOIN_ROOM", Ik[Ik.ERROR = 11] = "ERROR", Ik[Ik.LEAVE_ROOM = 12] = "LEAVE_ROOM", Ik[Ik.ROOM_DATA = 13] = "ROOM_DATA", Ik[Ik.ROOM_STATE = 14] = "ROOM_STATE", Ik[Ik.ROOM_STATE_PATCH = 15] = "ROOM_STATE_PATCH", Ik[Ik.ROOM_DATA_SCHEMA = 16] = "ROOM_DATA_SCHEMA", Ik[Ik.ROOM_DATA_BYTES = 17] = "ROOM_DATA_BYTES", Fk.ErrorCode = void 0, (Xk = Fk.ErrorCode || (Fk.ErrorCode = {}))[Xk.MATCHMAKE_NO_HANDLER = 4210] = "MATCHMAKE_NO_HANDLER", Xk[Xk.MATCHMAKE_INVALID_CRITERIA = 4211] = "MATCHMAKE_INVALID_CRITERIA", Xk[Xk.MATCHMAKE_INVALID_ROOM_ID = 4212] = "MATCHMAKE_INVALID_ROOM_ID", Xk[Xk.MATCHMAKE_UNHANDLED = 4213] = "MATCHMAKE_UNHANDLED", Xk[Xk.MATCHMAKE_EXPIRED = 4214] = "MATCHMAKE_EXPIRED", Xk[Xk.AUTH_FAILED = 4215] = "AUTH_FAILED", Xk[Xk.APPLICATION_ERROR = 4216] = "APPLICATION_ERROR"
  },
  9080: (kk, Fk, Ik) => {
    var Xk = Ik(9083),
      Tk = Ik(9118),
      ik = Ik(9121),
      yk = Ik(9130),
      lk = Ik(9135),
      ak = Ik(9098),
      qk = Ik(9137),
      Lk = Ik(9077),
      tk = Ik(9144);
    class Zk {
      constructor(kk, Fk) {
        this.onStateChange = lk.createSignal(), this.onError = lk.createSignal(), this.NJ = lk.createSignal(), this.onJoin = lk.createSignal(), this.hasJoined = !1, this.onMessageHandlers = yk.createNanoEvents(), this.roomId = null, this.name = kk, this.packr = new tk.Packr, this.packr.encode(void 0), Fk && (this.LJ = new(ik.getSerializer("schema")), this.rootSchema = Fk, this.LJ.state = new Fk), this.onError(((kk, Fk) => {
          var Ik;
          return null === (Ik = console.warn) || void 0 === Ik ? void 0 : Ik.call(console, `colyseus.js - onError => (${kk}) ${Fk}`)
        })), this.NJ((() => this.qJ()))
      }
      connect(kk, Fk) {
        let Ik = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : this,
          Tk = arguments.length > 3 ? arguments[3] : void 0,
          ik = arguments.length > 4 ? arguments[4] : void 0;
        const yk = new Xk.Connection(Tk.protocol);
        if (Ik.connection = yk, yk.events.onmessage = Zk.prototype.onMessageCallback.bind(Ik), yk.events.onclose = function(kk) {
            var Xk;
            if (!Ik.hasJoined) return null === (Xk = console.warn) || void 0 === Xk || Xk.call(console, `Room connection was closed unexpectedly (${kk.code}): ${kk.reason}`), void Ik.onError.invoke(kk.code, kk.reason);
            kk.code === Lk.CloseCode.DEVMODE_RESTART && Fk ? Fk() : (Ik.NJ.invoke(kk.code, kk.reason), Ik.destroy())
          }, yk.events.onerror = function(kk) {
            var Fk;
            null === (Fk = console.warn) || void 0 === Fk || Fk.call(console, `Room, onError (${kk.code}): ${kk.reason}`), Ik.onError.invoke(kk.code, kk.reason)
          }, "h3" === Tk.protocol) {
          const Fk = new URL(kk);
          yk.connect(Fk.origin, Tk)
        } else yk.connect(kk, ik)
      }
      leave() {
        let kk = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
        return new Promise((Fk => {
          this.NJ((kk => Fk(kk))), this.connection ? kk ? (this.packr.buffer[0] = Tk.Protocol.LEAVE_ROOM, this.connection.send(this.packr.buffer.subarray(0, 1))) : this.connection.close() : this.NJ.invoke(Lk.CloseCode.CONSENTED)
        }))
      }
      bJ(kk, Fk) {
        return this.onMessageHandlers.on(this.getMessageHandlerKey(kk), Fk)
      }
      send(kk, Fk) {
        const Ik = {
          offset: 1
        };
        this.packr.buffer[0] = Tk.Protocol.ROOM_DATA, "string" === typeof kk ? ak.encode.string(this.packr.buffer, kk, Ik) : ak.encode.number(this.packr.buffer, kk, Ik), this.packr.position = 0;
        const Xk = void 0 !== Fk ? this.packr.pack(Fk, 2048 + Ik.offset) : this.packr.buffer.subarray(0, Ik.offset);
        this.connection.send(Xk)
      }
      sendUnreliable(kk, Fk) {
        const Ik = {
          offset: 1
        };
        this.packr.buffer[0] = Tk.Protocol.ROOM_DATA, "string" === typeof kk ? ak.encode.string(this.packr.buffer, kk, Ik) : ak.encode.number(this.packr.buffer, kk, Ik), this.packr.position = 0;
        const Xk = void 0 !== Fk ? this.packr.pack(Fk, 2048 + Ik.offset) : this.packr.buffer.subarray(0, Ik.offset);
        this.connection.sendUnreliable(Xk)
      }
      aE(kk, Fk) {
        const Ik = {
          offset: 1
        };
        if (this.packr.buffer[0] = Tk.Protocol.ROOM_DATA_BYTES, "string" === typeof kk ? ak.encode.string(this.packr.buffer, kk, Ik) : ak.encode.number(this.packr.buffer, kk, Ik), Fk.byteLength + Ik.offset > this.packr.buffer.byteLength) {
          const kk = new Uint8Array(Ik.offset + Fk.byteLength);
          kk.set(this.packr.buffer), this.packr.useBuffer(kk)
        }
        this.packr.buffer.set(Fk, Ik.offset), this.connection.send(this.packr.buffer.subarray(0, Ik.offset + Fk.byteLength))
      }
      get state() {
        return this.LJ.getState()
      }
      qJ() {
        this.onJoin.clear(), this.onStateChange.clear(), this.onError.clear(), this.NJ.clear(), this.onMessageHandlers.events = {}, this.LJ instanceof qk.QG && (this.LJ.Xe.root.callbacks = {})
      }
      onMessageCallback(kk) {
        const Fk = new Uint8Array(kk.data),
          Ik = {
            offset: 1
          },
          Xk = Fk[0];
        if (Xk === Tk.Protocol.JOIN_ROOM) {
          const kk = ak.decode.utf8Read(Fk, Ik, Fk[Ik.offset++]);
          if (this.serializerId = ak.decode.utf8Read(Fk, Ik, Fk[Ik.offset++]), !this.LJ) {
            const kk = ik.getSerializer(this.serializerId);
            this.LJ = new kk
          }
          Fk.byteLength > Ik.offset && this.LJ.handshake && this.LJ.handshake(Fk, Ik), this.reconnectionToken = `${this.roomId}:${kk}`, this.hasJoined = !0, this.onJoin.invoke(), this.packr.buffer[0] = Tk.Protocol.JOIN_ROOM, this.connection.send(this.packr.buffer.subarray(0, 1))
        } else if (Xk === Tk.Protocol.ERROR) {
          const kk = ak.decode.number(Fk, Ik),
            Xk = ak.decode.string(Fk, Ik);
          this.onError.invoke(kk, Xk)
        } else if (Xk === Tk.Protocol.LEAVE_ROOM) this.leave();
        else if (Xk === Tk.Protocol.ROOM_STATE) this.LJ.setState(Fk, Ik), this.onStateChange.invoke(this.LJ.getState());
        else if (Xk === Tk.Protocol.ROOM_STATE_PATCH) this.LJ.patch(Fk, Ik), this.onStateChange.invoke(this.LJ.getState());
        else if (Xk === Tk.Protocol.ROOM_DATA) {
          const kk = ak.decode.stringCheck(Fk, Ik) ? ak.decode.string(Fk, Ik) : ak.decode.number(Fk, Ik),
            Xk = Fk.byteLength > Ik.offset ? tk.unpack(Fk, {
              start: Ik.offset
            }) : void 0;
          this.dispatchMessage(kk, Xk)
        } else if (Xk === Tk.Protocol.ROOM_DATA_BYTES) {
          const kk = ak.decode.stringCheck(Fk, Ik) ? ak.decode.string(Fk, Ik) : ak.decode.number(Fk, Ik);
          this.dispatchMessage(kk, Fk.subarray(Ik.offset))
        }
      }
      dispatchMessage(kk, Fk) {
        var Ik;
        const Xk = this.getMessageHandlerKey(kk);
        this.onMessageHandlers.events[Xk] ? this.onMessageHandlers.emit(Xk, Fk) : this.onMessageHandlers.events["*"] ? this.onMessageHandlers.emit("*", kk, Fk) : null === (Ik = console.warn) || void 0 === Ik || Ik.call(console, `colyseus.js: onMessage() not registered for type '${kk}'.`)
      }
      destroy() {
        this.LJ && this.LJ.teardown()
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
    Fk.dt = Zk
  },
  9158: (kk, Fk, Ik) => {
    var Xk = Ik(9070);
    let Tk;

    function ik() {
      if (!Tk) try {
        Tk = "undefined" !== typeof cc && cc.sys && cc.sys.localStorage ? cc.sys.localStorage : window.localStorage
      } catch (kk) {}
      return Tk || "undefined" === typeof globalThis.indexedDB || (Tk = new yk), Tk || (Tk = {
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
      }), Tk
    }
    class yk {
      constructor() {
        this.dbPromise = new Promise((kk => {
          const Fk = indexedDB.open("_colyseus_storage", 1);
          Fk.onupgradeneeded = () => Fk.result.createObjectStore("store"), Fk.onsuccess = () => kk(Fk.result)
        }))
      }
      tx(kk, Fk) {
        return Xk.__awaiter(this, void 0, void 0, (function*() {
          const Ik = (yield this.dbPromise).transaction("store", kk).objectStore("store");
          return Fk(Ik)
        }))
      }
      setItem(kk, Fk) {
        return this.tx("readwrite", (Ik => Ik.put(Fk, kk))).then()
      }
      getItem(kk) {
        return Xk.__awaiter(this, void 0, void 0, (function*() {
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
      const Ik = ik().getItem(kk);
      "undefined" !== typeof Promise && Ik instanceof Promise ? Ik.then((kk => Fk(kk))) : Fk(Ik)
    }, Fk.removeItem = function(kk) {
      ik().removeItem(kk)
    }, Fk.setItem = function(kk, Fk) {
      ik().setItem(kk, Fk)
    }
  },
  9130: (kk, Fk) => {
    Fk.createNanoEvents = () => ({
      emit(kk) {
        let Fk = this.events[kk] || [];
        for (var Ik = arguments.length, Xk = new Array(Ik > 1 ? Ik - 1 : 0), Tk = 1; Tk < Ik; Tk++) Xk[Tk - 1] = arguments[Tk];
        for (let ik = 0, yk = Fk.length; ik < yk; ik++) Fk[ik](...Xk)
      },
      events: {},
      on(kk, Fk) {
        var Ik;
        return (null === (Ik = this.events[kk]) || void 0 === Ik ? void 0 : Ik.push(Fk)) || (this.events[kk] = [Fk]), () => {
          var Ik;
          this.events[kk] = null === (Ik = this.events[kk]) || void 0 === Ik ? void 0 : Ik.filter((kk => Fk !== kk))
        }
      }
    })
  },
  9135: (kk, Fk) => {
    class Ik {
      constructor() {
        this.handlers = []
      }
      register(kk) {
        return this.handlers.push(kk), this
      }
      invoke() {
        for (var kk = arguments.length, Fk = new Array(kk), Ik = 0; Ik < kk; Ik++) Fk[Ik] = arguments[Ik];
        this.handlers.forEach((kk => kk.apply(this, Fk)))
      }
      invokeAsync() {
        for (var kk = arguments.length, Fk = new Array(kk), Ik = 0; Ik < kk; Ik++) Fk[Ik] = arguments[Ik];
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
    Fk.EventEmitter = Ik, Fk.createSignal = function() {
      const kk = new Ik;

      function Fk(Fk) {
        return kk.register(Fk, null === this)
      }
      return Fk.once = Fk => {
        const Ik = function() {
          for (var Xk = arguments.length, Tk = new Array(Xk), ik = 0; ik < Xk; ik++) Tk[ik] = arguments[ik];
          Fk.apply(this, Tk), kk.remove(Ik)
        };
        kk.register(Ik)
      }, Fk.remove = Fk => kk.remove(Fk), Fk.invoke = function() {
        return kk.invoke(...arguments)
      }, Fk.invokeAsync = function() {
        return kk.invokeAsync(...arguments)
      }, Fk.clear = () => kk.clear(), Fk
    }
  },
  9077: (kk, Fk) => {
    var Ik;
    Fk.CloseCode = void 0, (Ik = Fk.CloseCode || (Fk.CloseCode = {}))[Ik.CONSENTED = 4e3] = "CONSENTED", Ik[Ik.DEVMODE_RESTART = 4010] = "DEVMODE_RESTART";
    class Xk extends Error {
      constructor(kk, Fk) {
        super(Fk), this.name = "ServerError", this.code = kk
      }
    }
    class Tk extends Error {
      constructor(kk) {
        super(kk), this.name = "AbortError"
      }
    }
    Fk.AbortError = Tk, Fk.ServerError = Xk
  },
  9054: (kk, Fk, Ik) => {
    Ik(9061);
    var Xk = Ik(9066),
      Tk = Ik(9118),
      ik = Ik(9080),
      yk = Ik(9155),
      lk = Ik(9077),
      ak = Ik(9137),
      qk = Ik(9172),
      Lk = Ik(9121);
    Lk.registerSerializer("schema", ak.QG), Lk.registerSerializer("none", qk.NoneSerializer), Fk.Client = Xk.Client, Fk.MatchMakeError = Xk.MatchMakeError, Object.defineProperty(Fk, "ErrorCode", {
      enumerable: !0,
      get: function() {
        return Tk.ErrorCode
      }
    }), Object.defineProperty(Fk, "Protocol", {
      enumerable: !0,
      get: function() {
        return Tk.Protocol
      }
    }), Fk.dt = ik.dt, Fk.Auth = yk.Auth, Fk.ServerError = lk.ServerError, Fk.QG = ak.QG, Fk.getStateCallbacks = ak.getStateCallbacks, Fk.registerSerializer = Lk.registerSerializer
  },
  9061: () => {
    ArrayBuffer.isView || (ArrayBuffer.isView = kk => null !== kk && "object" === typeof kk && kk.buffer instanceof ArrayBuffer), "undefined" === typeof globalThis && "undefined" !== typeof window && (window.globalThis = window), "undefined" === typeof FormData && (globalThis.FormData = class {})
  },
  9172: (kk, Fk) => {
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
  9137: (kk, Fk, Ik) => {
    var Xk = Ik(9098);
    Fk.QG = class {
      setState(kk, Fk) {
        this.Xe.decode(kk, Fk)
      }
      getState() {
        return this.state
      }
      patch(kk, Fk) {
        return this.Xe.decode(kk, Fk)
      }
      teardown() {
        this.Xe.root.clearRefs()
      }
      handshake(kk, Fk) {
        this.state ? (Xk.Reflection.decode(kk, Fk), this.Xe = new Xk.Decoder(this.state)) : (this.Xe = Xk.Reflection.decode(kk, Fk), this.state = this.Xe.state)
      }
    }, Fk.getStateCallbacks = function(kk) {
      try {
        return Xk.getDecoderStateCallbacks(kk.LJ.Xe)
      } catch (Fk) {
        return
      }
    }
  },
  9121: (kk, Fk) => {
    const Ik = {};
    Fk.getSerializer = function(kk) {
      const Fk = Ik[kk];
      if (!Fk) throw new Error("missing serializer: " + kk);
      return Fk
    }, Fk.registerSerializer = function(kk, Fk) {
      Ik[kk] = Fk
    }
  },
  9092: (kk, Fk, Ik) => {
    var Xk = Ik(9070),
      Tk = Ik(9098);
    Fk.H3TransportTransport = class {
      constructor(kk) {
        this.events = kk, this.isOpen = !1, this.lengthPrefixBuffer = new Uint8Array(9)
      }
      connect(kk) {
        let Fk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        const Ik = Fk.fingerprint && {
          serverCertificateHashes: [{
            algorithm: "sha-256",
            value: new Uint8Array(Fk.fingerprint).buffer
          }]
        } || void 0;
        this.wt = new WebTransport(kk, Ik), this.wt.ready.then((kk => {
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
        const Fk = Tk.encode.number(this.lengthPrefixBuffer, kk.length, {
            offset: 0
          }),
          Ik = new Uint8Array(Fk + kk.length);
        Ik.set(this.lengthPrefixBuffer.subarray(0, Fk), 0), Ik.set(kk, Fk), this.writer.write(Ik)
      }
      sendUnreliable(kk) {
        const Fk = Tk.encode.number(this.lengthPrefixBuffer, kk.length, {
            offset: 0
          }),
          Ik = new Uint8Array(Fk + kk.length);
        Ik.set(this.lengthPrefixBuffer.subarray(0, Fk), 0), Ik.set(kk, Fk), this.unreliableWriter.write(Ik)
      }
      close(kk, Fk) {
        try {
          this.wt.close({
            closeCode: kk,
            reason: Fk
          })
        } catch (Ik) {
          console.error(Ik)
        }
      }
      readIncomingData() {
        return Xk.__awaiter(this, void 0, void 0, (function*() {
          let kk;
          for (; this.isOpen;) {
            try {
              kk = yield this.reader.read();
              const Fk = kk.value,
                Ik = {
                  offset: 0
                };
              do {
                const kk = Tk.decode.number(Fk, Ik);
                this.events.onmessage({
                  data: Fk.subarray(Ik.offset, Ik.offset + kk)
                }), Ik.offset += kk
              } while (Ik.offset < Fk.length)
            } catch (Fk) {
              -1 === Fk.message.indexOf("session is closed") && console.error("H3Transport: failed to read incoming data", Fk);
              break
            }
            if (kk.done) break
          }
        }))
      }
      readIncomingUnreliableData() {
        return Xk.__awaiter(this, void 0, void 0, (function*() {
          let kk;
          for (; this.isOpen;) {
            try {
              kk = yield this.unreliableReader.read();
              const Fk = kk.value,
                Ik = {
                  offset: 0
                };
              do {
                const kk = Tk.decode.number(Fk, Ik);
                this.events.onmessage({
                  data: Fk.subarray(Ik.offset, Ik.offset + kk)
                }), Ik.offset += kk
              } while (Ik.offset < Fk.length)
            } catch (Fk) {
              -1 === Fk.message.indexOf("session is closed") && console.error("H3Transport: failed to read incoming data", Fk);
              break
            }
            if (kk.done) break
          }
        }))
      }
      sendSeatReservation(kk, Fk, Ik) {
        const Xk = {
            offset: 0
          },
          ik = [];
        Tk.encode.string(ik, kk, Xk), Tk.encode.string(ik, Fk, Xk), Ik && Tk.encode.string(ik, Ik, Xk), this.writer.write(new Uint8Array(ik).buffer)
      }
      _close() {
        this.isOpen = !1
      }
    }
  },
  9105: (kk, Fk, Ik) => {
    var Xk = Ik(9111);
    const Tk = globalThis.WebSocket || Xk;
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
          this.ws = new Tk(kk, {
            headers: Fk,
            protocols: this.protocols
          })
        } catch (Ik) {
          this.ws = new Tk(kk, this.protocols)
        }
        this.ws.binaryType = "arraybuffer", this.ws.onopen = this.events.onopen, this.ws.onmessage = this.events.onmessage, this.ws.onclose = this.events.onclose, this.ws.onerror = this.events.onerror
      }
      close(kk, Fk) {
        this.ws.close(kk, Fk)
      }
      get isOpen() {
        return this.ws.readyState === Tk.OPEN
      }
    }
  },
  9111: kk => {
    kk.exports = function() {
      throw new Error("ws does not work in the browser. Browser clients must use the native WebSocket object")
    }
  },
  9150: (kk, Fk, Ik) => {
    function Xk(kk, Fk) {
      Fk.headers = kk.headers || {}, Fk.statusMessage = kk.statusText, Fk.statusCode = kk.status, Fk.data = kk.response
    }

    function Tk(kk, Fk, Ik) {
      return new Promise((function(Tk, ik) {
        Ik = Ik || {};
        var yk, lk, ak, qk = new XMLHttpRequest,
          Lk = Ik.body,
          tk = Ik.headers || {};
        for (yk in Ik.timeout && (qk.timeout = Ik.timeout), qk.ontimeout = qk.onerror = function(kk) {
            kk.timeout = "timeout" == kk.type, ik(kk)
          }, qk.onabort = function(kk) {
            kk.aborted = !0, ik(kk)
          }, qk.open(kk, Fk.href || Fk), qk.onload = function() {
            for (ak = qk.getAllResponseHeaders().trim().split(/[\r\n]+/), Xk(qk, qk); lk = ak.shift();) lk = lk.split(": "), qk.headers[lk.shift().toLowerCase()] = lk.join(": ");
            if ((lk = qk.headers["content-type"]) && ~lk.indexOf("application/json")) try {
              qk.data = JSON.parse(qk.data, Ik.reviver)
            } catch (kk) {
              return Xk(qk, kk), ik(kk)
            }(qk.status >= 400 ? ik : Tk)(qk)
          }, typeof FormData < "u" && Lk instanceof FormData || Lk && "object" == typeof Lk && (tk["content-type"] = "application/json", Lk = JSON.stringify(Lk)), qk.withCredentials = !!Ik.withCredentials, tk) qk.setRequestHeader(yk, tk[yk]);
        qk.send(Lk), Ik.signal && Ik.signal.addEventListener("abort", (function() {
          qk.abort()
        }))
      }))
    }
    Ik.r(Fk), Ik.d(Fk, {
      del: () => ak,
      get: () => ik,
      patch: () => lk,
      post: () => yk,
      put: () => qk,
      send: () => Tk
    });
    var ik = Tk.bind(Tk, "GET"),
      yk = Tk.bind(Tk, "POST"),
      lk = Tk.bind(Tk, "PATCH"),
      ak = Tk.bind(Tk, "DELETE"),
      qk = Tk.bind(Tk, "PUT")
  },
  9144: (kk, Fk, Ik) => {
    var Xk, Tk, ik;
    Ik.r(Fk), Ik.d(Fk, {
      ALWAYS: () => gF,
      C1: () => Qk,
      DECIMAL_FIT: () => hF,
      DECIMAL_ROUND: () => mF,
      Decoder: () => qF,
      Encoder: () => YF,
      FLOAT32_OPTIONS: () => eF,
      NEVER: () => AF,
      Packr: () => bF,
      RESERVE_START_SPACE: () => MF,
      RESET_BUFFER_MODE: () => DF,
      REUSE_BUFFER_MODE: () => rF,
      Unpackr: () => Ek,
      addExtension: () => cF,
      clearSource: () => lF,
      decode: () => jF,
      decodeIter: () => kI,
      encode: () => dF,
      encodeIter: () => FI,
      isNativeAccelerationEnabled: () => Wk,
      mapsAsObjects: () => XI,
      pack: () => BF,
      roundFloat32: () => KF,
      unpack: () => tF,
      unpackMultiple: () => ZF,
      useRecords: () => II
    });
    try {
      Xk = new TextDecoder
    } catch (TI) {}
    var yk = 0;
    const lk = [];
    var ak, qk, Lk, tk, Zk, jk = lk,
      ek = 0,
      wk = {},
      Hk = 0,
      Jk = 0,
      xk = [],
      Pk = {
        useRecords: !1,
        mapsAsObjects: !0
      };
    class Kk {}
    const Qk = new Kk;
    Qk.name = "MessagePack 0xC1";
    var sk, Vk, zk, Sk = !1,
      vk = 2;
    try {
      new Function("")
    } catch (TI) {
      vk = 1 / 0
    }
    class Ek {
      constructor(kk) {
        kk && (!1 === kk.useRecords && void 0 === kk.mapsAsObjects && (kk.mapsAsObjects = !0), kk.sequential && !1 !== kk.trusted && (kk.trusted = !0, kk.structures || 0 == kk.useRecords || (kk.structures = [], kk.maxSharedStructures || (kk.maxSharedStructures = 0))), kk.structures ? kk.structures.sharedLength = kk.structures.length : kk.getStructures && ((kk.structures = []).uninitialized = !0, kk.structures.sharedLength = 0), kk.int64AsNumber && (kk.int64AsType = "number")), Object.assign(this, kk)
      }
      unpack(kk, Fk) {
        if (Tk) return yF((() => (lF(), this ? this.unpack(kk, Fk) : Ek.prototype.unpack.call(Pk, kk, Fk))));
        kk.buffer || kk.constructor !== ArrayBuffer || (kk = "undefined" !== typeof Buffer ? Buffer.from(kk) : new Uint8Array(kk)), "object" === typeof Fk ? (ik = Fk.end || kk.length, yk = Fk.start || 0) : (yk = 0, ik = Fk > -1 ? Fk : kk.length), ek = 0, Jk = 0, qk = null, jk = lk, Lk = null, Tk = kk;
        try {
          Zk = kk.dataView || (kk.dataView = new DataView(kk.buffer, kk.byteOffset, kk.byteLength))
        } catch (TI) {
          if (Tk = null, kk instanceof Uint8Array) throw TI;
          throw new Error("Source must be a Uint8Array or Buffer but was a " + (kk && "object" == typeof kk ? kk.constructor.name : typeof kk))
        }
        if (this instanceof Ek) {
          if (wk = this, this.structures) return ak = this.structures, Ok(Fk);
          (!ak || ak.length > 0) && (ak = [])
        } else wk = Pk, (!ak || ak.length > 0) && (ak = []);
        return Ok(Fk)
      }
      unpackMultiple(kk, Fk) {
        let Ik, Xk = 0;
        try {
          Sk = !0;
          let Tk = kk.length,
            ik = this ? this.unpack(kk, Tk) : LF.unpack(kk, Tk);
          if (!Fk) {
            for (Ik = [ik]; yk < Tk;) Xk = yk, Ik.push(Ok());
            return Ik
          }
          if (!1 === Fk(ik, Xk, yk)) return;
          for (; yk < Tk;)
            if (Xk = yk, !1 === Fk(Ok(), Xk, yk)) return
        } catch (TI) {
          throw TI.lastPosition = Xk, TI.values = Ik, TI
        } finally {
          Sk = !1, lF()
        }
      }
      _mergeStructures(kk, Fk) {
        Vk && (kk = Vk.call(this, kk)), kk = kk || [], Object.isFrozen(kk) && (kk = kk.map((kk => kk.slice(0))));
        for (let Ik = 0, Xk = kk.length; Ik < Xk; Ik++) {
          let Fk = kk[Ik];
          Fk && (Fk.isShared = !0, Ik >= 32 && (Fk.highByte = Ik - 32 >> 5))
        }
        kk.sharedLength = kk.length;
        for (let Ik in Fk || [])
          if (Ik >= 0) {
            let Xk = kk[Ik],
              Tk = Fk[Ik];
            Tk && (Xk && ((kk.restoreStructures || (kk.restoreStructures = []))[Ik] = Xk), kk[Ik] = Tk)
          } return this.structures = kk
      }
      decode(kk, Fk) {
        return this.unpack(kk, Fk)
      }
    }

    function Ok(kk) {
      try {
        if (!wk.trusted && !Sk) {
          let kk = ak.sharedLength || 0;
          kk < ak.length && (ak.length = kk)
        }
        let Fk;
        if (wk.randomAccessStructure && Tk[yk] < 64 && Tk[yk] >= 32 && sk ? (Fk = sk(Tk, yk, ik, wk), Tk = null, kk && kk.lazy || !Fk || (Fk = Fk.toJSON()), yk = ik) : Fk = Gk(), Lk && (yk = Lk.postBundlePosition, Lk = null), Sk && (ak.restoreStructures = null), yk == ik) ak && ak.restoreStructures && nk(), ak = null, Tk = null, tk && (tk = null);
        else {
          if (yk > ik) throw new Error("Unexpected end of MessagePack data");
          if (!Sk) {
            let kk;
            try {
              kk = JSON.stringify(Fk, ((kk, Fk) => "bigint" === typeof Fk ? `${Fk}n` : Fk)).slice(0, 100)
            } catch (TI) {
              kk = "(JSON view not available " + TI + ")"
            }
            throw new Error("Data read, but end of buffer not reached " + kk)
          }
        }
        return Fk
      } catch (TI) {
        throw ak && ak.restoreStructures && nk(), lF(), (TI instanceof RangeError || TI.message.startsWith("Unexpected end of buffer") || yk > ik) && (TI.incomplete = !0), TI
      }
    }

    function nk() {
      for (let kk in ak.restoreStructures) ak[kk] = ak.restoreStructures[kk];
      ak.restoreStructures = null
    }

    function Gk() {
      let kk = Tk[yk++];
      if (kk < 160) {
        if (kk < 128) {
          if (kk < 64) return kk;
          {
            let Fk = ak[63 & kk] || wk.getStructures && Rk()[63 & kk];
            return Fk ? (Fk.read || (Fk.read = uk(Fk, 63 & kk)), Fk.read()) : kk
          }
        }
        if (kk < 144) {
          if (kk -= 128, wk.mapsAsObjects) {
            let Fk = {};
            for (let Ik = 0; Ik < kk; Ik++) {
              let kk = Mk();
              "__proto__" === kk && (kk = "__proto_"), Fk[kk] = Gk()
            }
            return Fk
          } {
            let Fk = new Map;
            for (let Ik = 0; Ik < kk; Ik++) Fk.set(Gk(), Gk());
            return Fk
          }
        } {
          kk -= 144;
          let Fk = new Array(kk);
          for (let Ik = 0; Ik < kk; Ik++) Fk[Ik] = Gk();
          return wk.freezeData ? Object.freeze(Fk) : Fk
        }
      }
      if (kk < 192) {
        let Fk = kk - 160;
        if (Jk >= yk) return qk.slice(yk - Hk, (yk += Fk) - Hk);
        if (0 == Jk && ik < 140) {
          let kk = Fk < 16 ? gk(Fk) : Ak(Fk);
          if (null != kk) return kk
        }
        return Uk(Fk)
      } {
        let Fk;
        switch (kk) {
          case 192:
            return null;
          case 193:
            return Lk ? (Fk = Gk(), Fk > 0 ? Lk[1].slice(Lk.position1, Lk.position1 += Fk) : Lk[0].slice(Lk.position0, Lk.position0 -= Fk)) : Qk;
          case 194:
            return !1;
          case 195:
            return !0;
          case 196:
            if (Fk = Tk[yk++], void 0 === Fk) throw new Error("Unexpected end of buffer");
            return hk(Fk);
          case 197:
            return Fk = Zk.getUint16(yk), yk += 2, hk(Fk);
          case 198:
            return Fk = Zk.getUint32(yk), yk += 4, hk(Fk);
          case 199:
            return rk(Tk[yk++]);
          case 200:
            return Fk = Zk.getUint16(yk), yk += 2, rk(Fk);
          case 201:
            return Fk = Zk.getUint32(yk), yk += 4, rk(Fk);
          case 202:
            if (Fk = Zk.getFloat32(yk), wk.useFloat32 > 2) {
              let kk = aF[(127 & Tk[yk]) << 1 | Tk[yk + 1] >> 7];
              return yk += 4, (kk * Fk + (Fk > 0 ? .5 : -.5) | 0) / kk
            }
            return yk += 4, Fk;
          case 203:
            return Fk = Zk.getFloat64(yk), yk += 8, Fk;
          case 204:
            return Tk[yk++];
          case 205:
            return Fk = Zk.getUint16(yk), yk += 2, Fk;
          case 206:
            return Fk = Zk.getUint32(yk), yk += 4, Fk;
          case 207:
            return "number" === wk.int64AsType ? (Fk = 4294967296 * Zk.getUint32(yk), Fk += Zk.getUint32(yk + 4)) : "string" === wk.int64AsType ? Fk = Zk.getBigUint64(yk).toString() : "auto" === wk.int64AsType ? (Fk = Zk.getBigUint64(yk), Fk <= BigInt(2) << BigInt(52) && (Fk = Number(Fk))) : Fk = Zk.getBigUint64(yk), yk += 8, Fk;
          case 208:
            return Zk.getInt8(yk++);
          case 209:
            return Fk = Zk.getInt16(yk), yk += 2, Fk;
          case 210:
            return Fk = Zk.getInt32(yk), yk += 4, Fk;
          case 211:
            return "number" === wk.int64AsType ? (Fk = 4294967296 * Zk.getInt32(yk), Fk += Zk.getUint32(yk + 4)) : "string" === wk.int64AsType ? Fk = Zk.getBigInt64(yk).toString() : "auto" === wk.int64AsType ? (Fk = Zk.getBigInt64(yk), Fk >= BigInt(-2) << BigInt(52) && Fk <= BigInt(2) << BigInt(52) && (Fk = Number(Fk))) : Fk = Zk.getBigInt64(yk), yk += 8, Fk;
          case 212:
            if (Fk = Tk[yk++], 114 == Fk) return FF(63 & Tk[yk++]);
            {
              let kk = xk[Fk];
              if (kk) return kk.read ? (yk++, kk.read(Gk())) : kk.noBuffer ? (yk++, kk()) : kk(Tk.subarray(yk, ++yk));
              throw new Error("Unknown extension " + Fk)
            }
          case 213:
            return Fk = Tk[yk], 114 == Fk ? (yk++, FF(63 & Tk[yk++], Tk[yk++])) : rk(2);
          case 214:
            return rk(4);
          case 215:
            return rk(8);
          case 216:
            return rk(16);
          case 217:
            return Fk = Tk[yk++], Jk >= yk ? qk.slice(yk - Hk, (yk += Fk) - Hk) : Ck(Fk);
          case 218:
            return Fk = Zk.getUint16(yk), Jk >= (yk += 2) ? qk.slice(yk - Hk, (yk += Fk) - Hk) : Nk(Fk);
          case 219:
            return Fk = Zk.getUint32(yk), Jk >= (yk += 4) ? qk.slice(yk - Hk, (yk += Fk) - Hk) : ck(Fk);
          case 220:
            return Fk = Zk.getUint16(yk), yk += 2, Bk(Fk);
          case 221:
            return Fk = Zk.getUint32(yk), yk += 4, Bk(Fk);
          case 222:
            return Fk = Zk.getUint16(yk), yk += 2, dk(Fk);
          case 223:
            return Fk = Zk.getUint32(yk), yk += 4, dk(Fk);
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
    const pk = /^[a-zA-Z_$][a-zA-Z\d_$]*$/;

    function uk(kk, Fk) {
      function Ik() {
        if (Ik.count++ > vk) {
          let Ik = kk.read = new Function("r", "return function(){return " + (wk.freezeData ? "Object.freeze" : "") + "({" + kk.map((kk => "__proto__" === kk ? "__proto_:r()" : pk.test(kk) ? kk + ":r()" : "[" + JSON.stringify(kk) + "]:r()")).join(",") + "})}")(Gk);
          return 0 === kk.highByte && (kk.read = bk(Fk, kk.read)), Ik()
        }
        let Xk = {};
        for (let Fk = 0, Ik = kk.length; Fk < Ik; Fk++) {
          let Ik = kk[Fk];
          "__proto__" === Ik && (Ik = "__proto_"), Xk[Ik] = Gk()
        }
        return wk.freezeData ? Object.freeze(Xk) : Xk
      }
      return Ik.count = 0, 0 === kk.highByte ? bk(Fk, Ik) : Ik
    }
    const bk = (kk, Fk) => function() {
      let Ik = Tk[yk++];
      if (0 === Ik) return Fk();
      let Xk = kk < 32 ? -(kk + (Ik << 5)) : kk + (Ik << 5),
        ik = ak[Xk] || Rk()[Xk];
      if (!ik) throw new Error("Record id is not defined for " + Xk);
      return ik.read || (ik.read = uk(ik, kk)), ik.read()
    };

    function Rk() {
      let kk = yF((() => (Tk = null, wk.getStructures())));
      return ak = wk._mergeStructures(kk, ak)
    }
    var Uk = fk,
      Ck = fk,
      Nk = fk,
      ck = fk;
    let Wk = !1;

    function fk(kk) {
      let Fk;
      if (kk < 16 && (Fk = gk(kk))) return Fk;
      if (kk > 64 && Xk) return Xk.decode(Tk.subarray(yk, yk += kk));
      const Ik = yk + kk,
        ik = [];
      for (Fk = ""; yk < Ik;) {
        const kk = Tk[yk++];
        if (0 === (128 & kk)) ik.push(kk);
        else if (192 === (224 & kk)) {
          const Fk = 63 & Tk[yk++];
          ik.push((31 & kk) << 6 | Fk)
        } else if (224 === (240 & kk)) {
          const Fk = 63 & Tk[yk++],
            Ik = 63 & Tk[yk++];
          ik.push((31 & kk) << 12 | Fk << 6 | Ik)
        } else if (240 === (248 & kk)) {
          let Fk = (7 & kk) << 18 | (63 & Tk[yk++]) << 12 | (63 & Tk[yk++]) << 6 | 63 & Tk[yk++];
          Fk > 65535 && (Fk -= 65536, ik.push(Fk >>> 10 & 1023 | 55296), Fk = 56320 | 1023 & Fk), ik.push(Fk)
        } else ik.push(kk);
        ik.length >= 4096 && (Fk += Yk.apply(String, ik), ik.length = 0)
      }
      return ik.length > 0 && (Fk += Yk.apply(String, ik)), Fk
    }

    function Bk(kk) {
      let Fk = new Array(kk);
      for (let Ik = 0; Ik < kk; Ik++) Fk[Ik] = Gk();
      return wk.freezeData ? Object.freeze(Fk) : Fk
    }

    function dk(kk) {
      if (wk.mapsAsObjects) {
        let Fk = {};
        for (let Ik = 0; Ik < kk; Ik++) {
          let kk = Mk();
          "__proto__" === kk && (kk = "__proto_"), Fk[kk] = Gk()
        }
        return Fk
      } {
        let Fk = new Map;
        for (let Ik = 0; Ik < kk; Ik++) Fk.set(Gk(), Gk());
        return Fk
      }
    }
    var Yk = String.fromCharCode;

    function Ak(kk) {
      let Fk = yk,
        Ik = new Array(kk);
      for (let Xk = 0; Xk < kk; Xk++) {
        const kk = Tk[yk++];
        if ((128 & kk) > 0) return void(yk = Fk);
        Ik[Xk] = kk
      }
      return Yk.apply(String, Ik)
    }

    function gk(kk) {
      if (kk < 4) {
        if (kk < 2) {
          if (0 === kk) return "";
          {
            let kk = Tk[yk++];
            return (128 & kk) > 1 ? void(yk -= 1) : Yk(kk)
          }
        } {
          let Fk = Tk[yk++],
            Ik = Tk[yk++];
          if ((128 & Fk) > 0 || (128 & Ik) > 0) return void(yk -= 2);
          if (kk < 3) return Yk(Fk, Ik);
          let Xk = Tk[yk++];
          return (128 & Xk) > 0 ? void(yk -= 3) : Yk(Fk, Ik, Xk)
        }
      } {
        let Fk = Tk[yk++],
          Ik = Tk[yk++],
          Xk = Tk[yk++],
          ik = Tk[yk++];
        if ((128 & Fk) > 0 || (128 & Ik) > 0 || (128 & Xk) > 0 || (128 & ik) > 0) return void(yk -= 4);
        if (kk < 6) {
          if (4 === kk) return Yk(Fk, Ik, Xk, ik);
          {
            let kk = Tk[yk++];
            return (128 & kk) > 0 ? void(yk -= 5) : Yk(Fk, Ik, Xk, ik, kk)
          }
        }
        if (kk < 8) {
          let lk = Tk[yk++],
            ak = Tk[yk++];
          if ((128 & lk) > 0 || (128 & ak) > 0) return void(yk -= 6);
          if (kk < 7) return Yk(Fk, Ik, Xk, ik, lk, ak);
          let qk = Tk[yk++];
          return (128 & qk) > 0 ? void(yk -= 7) : Yk(Fk, Ik, Xk, ik, lk, ak, qk)
        } {
          let lk = Tk[yk++],
            ak = Tk[yk++],
            qk = Tk[yk++],
            Lk = Tk[yk++];
          if ((128 & lk) > 0 || (128 & ak) > 0 || (128 & qk) > 0 || (128 & Lk) > 0) return void(yk -= 8);
          if (kk < 10) {
            if (8 === kk) return Yk(Fk, Ik, Xk, ik, lk, ak, qk, Lk);
            {
              let kk = Tk[yk++];
              return (128 & kk) > 0 ? void(yk -= 9) : Yk(Fk, Ik, Xk, ik, lk, ak, qk, Lk, kk)
            }
          }
          if (kk < 12) {
            let tk = Tk[yk++],
              Zk = Tk[yk++];
            if ((128 & tk) > 0 || (128 & Zk) > 0) return void(yk -= 10);
            if (kk < 11) return Yk(Fk, Ik, Xk, ik, lk, ak, qk, Lk, tk, Zk);
            let jk = Tk[yk++];
            return (128 & jk) > 0 ? void(yk -= 11) : Yk(Fk, Ik, Xk, ik, lk, ak, qk, Lk, tk, Zk, jk)
          } {
            let tk = Tk[yk++],
              Zk = Tk[yk++],
              jk = Tk[yk++],
              ek = Tk[yk++];
            if ((128 & tk) > 0 || (128 & Zk) > 0 || (128 & jk) > 0 || (128 & ek) > 0) return void(yk -= 12);
            if (kk < 14) {
              if (12 === kk) return Yk(Fk, Ik, Xk, ik, lk, ak, qk, Lk, tk, Zk, jk, ek);
              {
                let kk = Tk[yk++];
                return (128 & kk) > 0 ? void(yk -= 13) : Yk(Fk, Ik, Xk, ik, lk, ak, qk, Lk, tk, Zk, jk, ek, kk)
              }
            } {
              let wk = Tk[yk++],
                Hk = Tk[yk++];
              if ((128 & wk) > 0 || (128 & Hk) > 0) return void(yk -= 14);
              if (kk < 15) return Yk(Fk, Ik, Xk, ik, lk, ak, qk, Lk, tk, Zk, jk, ek, wk, Hk);
              let Jk = Tk[yk++];
              return (128 & Jk) > 0 ? void(yk -= 15) : Yk(Fk, Ik, Xk, ik, lk, ak, qk, Lk, tk, Zk, jk, ek, wk, Hk, Jk)
            }
          }
        }
      }
    }

    function mk() {
      let kk, Fk = Tk[yk++];
      if (Fk < 192) kk = Fk - 160;
      else switch (Fk) {
        case 217:
          kk = Tk[yk++];
          break;
        case 218:
          kk = Zk.getUint16(yk), yk += 2;
          break;
        case 219:
          kk = Zk.getUint32(yk), yk += 4;
          break;
        default:
          throw new Error("Expected string")
      }
      return fk(kk)
    }

    function hk(kk) {
      return wk.copyBuffers ? Uint8Array.prototype.slice.call(Tk, yk, yk += kk) : Tk.subarray(yk, yk += kk)
    }

    function rk(kk) {
      let Fk = Tk[yk++];
      if (xk[Fk]) {
        let Ik;
        return xk[Fk](Tk.subarray(yk, Ik = yk += kk), (kk => {
          yk = kk;
          try {
            return Gk()
          } finally {
            yk = Ik
          }
        }))
      }
      throw new Error("Unknown extension type " + Fk)
    }
    var Dk = new Array(4096);

    function Mk() {
      let kk = Tk[yk++];
      if (!(kk >= 160 && kk < 192)) return yk--, kF(Gk());
      if (kk -= 160, Jk >= yk) return qk.slice(yk - Hk, (yk += kk) - Hk);
      if (!(0 == Jk && ik < 180)) return Uk(kk);
      let Fk, Ik = 4095 & (kk << 5 ^ (kk > 1 ? Zk.getUint16(yk) : kk > 0 ? Tk[yk] : 0)),
        Xk = Dk[Ik],
        lk = yk,
        ak = yk + kk - 3,
        Lk = 0;
      if (Xk && Xk.bytes == kk) {
        for (; lk < ak;) {
          if (Fk = Zk.getUint32(lk), Fk != Xk[Lk++]) {
            lk = 1879048192;
            break
          }
          lk += 4
        }
        for (ak += 3; lk < ak;)
          if (Fk = Tk[lk++], Fk != Xk[Lk++]) {
            lk = 1879048192;
            break
          } if (lk === ak) return yk = lk, Xk.string;
        ak -= 3, lk = yk
      }
      for (Xk = [], Dk[Ik] = Xk, Xk.bytes = kk; lk < ak;) Fk = Zk.getUint32(lk), Xk.push(Fk), lk += 4;
      for (ak += 3; lk < ak;) Fk = Tk[lk++], Xk.push(Fk);
      let tk = kk < 16 ? gk(kk) : Ak(kk);
      return Xk.string = null != tk ? tk : Uk(kk)
    }

    function kF(kk) {
      if ("string" === typeof kk) return kk;
      if ("number" === typeof kk || "boolean" === typeof kk || "bigint" === typeof kk) return kk.toString();
      if (null == kk) return kk + "";
      if (wk.allowArraysInMapKeys && Array.isArray(kk) && kk.flat().every((kk => ["string", "number", "boolean", "bigint"].includes(typeof kk)))) return kk.flat().toString();
      throw new Error("Invalid property type for record: " + typeof kk)
    }
    const FF = (kk, Fk) => {
      let Ik = Gk().map(kF),
        Xk = kk;
      void 0 !== Fk && (kk = kk < 32 ? -((Fk << 5) + kk) : (Fk << 5) + kk, Ik.highByte = Fk);
      let Tk = ak[kk];
      return Tk && (Tk.isShared || Sk) && ((ak.restoreStructures || (ak.restoreStructures = []))[kk] = Tk), ak[kk] = Ik, Ik.read = uk(Ik, Xk), Ik.read()
    };
    xk[0] = () => {}, xk[0].noBuffer = !0, xk[66] = kk => {
      let Fk = kk.length,
        Ik = BigInt(128 & kk[0] ? kk[0] - 256 : kk[0]);
      for (let Xk = 1; Xk < Fk; Xk++) Ik <<= BigInt(8), Ik += BigInt(kk[Xk]);
      return Ik
    };
    let IF = {
      Error: Error,
      TypeError: TypeError,
      ReferenceError: ReferenceError
    };
    xk[101] = () => {
      let kk = Gk();
      return (IF[kk[0]] || Error)(kk[1], {
        cause: kk[2]
      })
    }, xk[105] = kk => {
      if (!1 === wk.structuredClone) throw new Error("Structured clone extension is disabled");
      let Fk = Zk.getUint32(yk - 4);
      tk || (tk = new Map);
      let Ik, Xk = Tk[yk];
      Ik = Xk >= 144 && Xk < 160 || 220 == Xk || 221 == Xk ? [] : {};
      let ik = {
        target: Ik
      };
      tk.set(Fk, ik);
      let lk = Gk();
      return ik.used ? Object.assign(Ik, lk) : (ik.target = lk, lk)
    }, xk[112] = kk => {
      if (!1 === wk.structuredClone) throw new Error("Structured clone extension is disabled");
      let Fk = Zk.getUint32(yk - 4),
        Ik = tk.get(Fk);
      return Ik.used = !0, Ik.target
    }, xk[115] = () => new Set(Gk());
    const XF = ["Int8", "Uint8", "Uint8Clamped", "Int16", "Uint16", "Int32", "Uint32", "Float32", "Float64", "BigInt64", "BigUint64"].map((kk => kk + "Array"));
    let TF = "object" === typeof globalThis ? globalThis : window;
    xk[116] = kk => {
      let Fk = kk[0],
        Ik = XF[Fk];
      if (!Ik) {
        if (16 === Fk) {
          let Fk = new ArrayBuffer(kk.length - 1);
          return new Uint8Array(Fk).set(kk.subarray(1)), Fk
        }
        throw new Error("Could not find typed array for code " + Fk)
      }
      return new TF[Ik](Uint8Array.prototype.slice.call(kk, 1).buffer)
    }, xk[120] = () => {
      let kk = Gk();
      return new RegExp(kk[0], kk[1])
    };
    const iF = [];

    function yF(kk) {
      zk && zk();
      let Fk = ik,
        Ik = yk,
        Xk = ek,
        lk = Hk,
        xk = Jk,
        Pk = qk,
        Kk = jk,
        Qk = tk,
        sk = Lk,
        Vk = new Uint8Array(Tk.slice(0, ik)),
        vk = ak,
        Ek = ak.slice(0, ak.length),
        Ok = wk,
        nk = Sk,
        Gk = kk();
      return ik = Fk, yk = Ik, ek = Xk, Hk = lk, Jk = xk, qk = Pk, jk = Kk, tk = Qk, Lk = sk, Tk = Vk, Sk = nk, (ak = vk).splice(0, ak.length, ...Ek), wk = Ok, Zk = new DataView(Tk.buffer, Tk.byteOffset, Tk.byteLength), Gk
    }

    function lF() {
      Tk = null, tk = null, ak = null
    }
    xk[98] = kk => {
      let Fk = (kk[0] << 24) + (kk[1] << 16) + (kk[2] << 8) + kk[3],
        Ik = yk;
      return yk += Fk - kk.length, Lk = iF, (Lk = [mk(), mk()]).position0 = 0, Lk.position1 = 0, Lk.postBundlePosition = yk, yk = Ik, Gk()
    }, xk[255] = kk => 4 == kk.length ? new Date(1e3 * (16777216 * kk[0] + (kk[1] << 16) + (kk[2] << 8) + kk[3])) : 8 == kk.length ? new Date(((kk[0] << 22) + (kk[1] << 14) + (kk[2] << 6) + (kk[3] >> 2)) / 1e6 + 1e3 * (4294967296 * (3 & kk[3]) + 16777216 * kk[4] + (kk[5] << 16) + (kk[6] << 8) + kk[7])) : 12 == kk.length ? new Date(((kk[0] << 24) + (kk[1] << 16) + (kk[2] << 8) + kk[3]) / 1e6 + 1e3 * ((128 & kk[4] ? -281474976710656 : 0) + 1099511627776 * kk[6] + 4294967296 * kk[7] + 16777216 * kk[8] + (kk[9] << 16) + (kk[10] << 8) + kk[11])) : new Date("invalid");
    const aF = new Array(147);
    for (let iI = 0; iI < 256; iI++) aF[iI] = +("1e" + Math.floor(45.15 - .30103 * iI));
    const qF = Ek;
    var LF = new Ek({
      useRecords: !1
    });
    const tF = LF.unpack,
      ZF = LF.unpackMultiple,
      jF = LF.unpack,
      eF = {
        NEVER: 0,
        ALWAYS: 1,
        DECIMAL_ROUND: 3,
        DECIMAL_FIT: 4
      };
    let wF, HF, JF, xF = new Float32Array(1),
      PF = new Uint8Array(xF.buffer, 0, 4);

    function KF(kk) {
      xF[0] = kk;
      let Fk = aF[(127 & PF[3]) << 1 | PF[2] >> 7];
      return (Fk * kk + (kk > 0 ? .5 : -.5) | 0) / Fk
    }
    try {
      wF = new TextEncoder
    } catch (TI) {}
    const QF = "undefined" !== typeof Buffer,
      sF = QF ? function(kk) {
        return Buffer.allocUnsafeSlow(kk)
      } : Uint8Array,
      VF = QF ? Buffer : Uint8Array,
      zF = QF ? 4294967296 : 2144337920;
    let SF, oF, vF, EF, OF, nF = 0,
      GF = null;
    const pF = /[\u0080-\uFFFF]/,
      uF = Symbol("record-id");
    class bF extends Ek {
      constructor(kk) {
        let Fk, Ik, Xk, Tk;
        super(kk), this.offset = 0;
        let ik = VF.prototype.utf8Write ? function(kk, Fk) {
            return SF.utf8Write(kk, Fk, SF.byteLength - Fk)
          } : !(!wF || !wF.encodeInto) && function(kk, Fk) {
            return wF.encodeInto(kk, SF.subarray(Fk)).written
          },
          yk = this;
        kk || (kk = {});
        let lk = kk && kk.sequential,
          ak = kk.structures || kk.saveStructures,
          qk = kk.maxSharedStructures;
        if (null == qk && (qk = ak ? 32 : 0), qk > 8160) throw new Error("Maximum maxSharedStructure is 8160");
        kk.structuredClone && void 0 == kk.moreTypes && (this.moreTypes = !0);
        let Lk = kk.maxOwnStructures;
        null == Lk && (Lk = ak ? 32 : 64), this.structures || 0 == kk.useRecords || (this.structures = []);
        let tk = qk > 32 || Lk + qk > 64,
          Zk = qk + 64,
          jk = qk + Lk + 64;
        if (jk > 8256) throw new Error("Maximum maxSharedStructure + maxOwnStructure is 8192");
        let ek = [],
          wk = 0,
          Hk = 0;
        this.pack = this.encode = function(kk, ik) {
          if (SF || (SF = new sF(8192), vF = SF.dataView || (SF.dataView = new DataView(SF.buffer, 0, 8192)), nF = 0), EF = SF.length - 10, EF - nF < 2048 ? (SF = new sF(SF.length), vF = SF.dataView || (SF.dataView = new DataView(SF.buffer, 0, SF.length)), EF = SF.length - 10, nF = 0) : nF = nF + 7 & 2147483640, Fk = nF, ik & MF && (nF += 255 & ik), Tk = yk.structuredClone ? new Map : null, yk.bundleStrings && "string" !== typeof kk ? (GF = [], GF.size = 1 / 0) : GF = null, Xk = yk.structures, Xk) {
            Xk.uninitialized && (Xk = yk._mergeStructures(yk.getStructures()));
            let kk = Xk.sharedLength || 0;
            if (kk > qk) throw new Error("Shared structures is larger than maximum shared structures, try increasing maxSharedStructures to " + Xk.sharedLength);
            if (!Xk.transitions) {
              Xk.transitions = Object.create(null);
              for (let Fk = 0; Fk < kk; Fk++) {
                let kk = Xk[Fk];
                if (!kk) continue;
                let Ik, Tk = Xk.transitions;
                for (let Fk = 0, Xk = kk.length; Fk < Xk; Fk++) {
                  let Xk = kk[Fk];
                  Ik = Tk[Xk], Ik || (Ik = Tk[Xk] = Object.create(null)), Tk = Ik
                }
                Tk[uF] = Fk + 64
              }
              this.lastNamedStructuresLength = kk
            }
            lk || (Xk.nextId = kk + 64)
          }
          let ak;
          Ik && (Ik = !1);
          try {
            yk.randomAccessStructure && kk && kk.constructor && kk.constructor === Object ? Ek(kk) : Pk(kk);
            let Ik = GF;
            if (GF && NF(Fk, Pk, 0), Tk && Tk.idsToInsert) {
              let kk = Tk.idsToInsert.sort(((kk, Fk) => kk.offset > Fk.offset ? 1 : -1)),
                Xk = kk.length,
                ik = -1;
              for (; Ik && Xk > 0;) {
                let Tk = kk[--Xk].offset + Fk;
                Tk < Ik.stringsPosition + Fk && -1 === ik && (ik = 0), Tk > Ik.position + Fk ? ik >= 0 && (ik += 6) : (ik >= 0 && (vF.setUint32(Ik.position + Fk, vF.getUint32(Ik.position + Fk) + ik), ik = -1), Ik = Ik.previous, Xk++)
              }
              ik >= 0 && Ik && vF.setUint32(Ik.position + Fk, vF.getUint32(Ik.position + Fk) + ik), nF += 6 * kk.length, nF > EF && zk(nF), yk.offset = nF;
              let lk = function(kk, Fk) {
                let Ik, Xk = 6 * Fk.length,
                  Tk = kk.length - Xk;
                for (; Ik = Fk.pop();) {
                  let Fk = Ik.offset,
                    ik = Ik.id;
                  kk.copyWithin(Fk + Xk, Fk, Tk), Xk -= 6;
                  let yk = Fk + Xk;
                  kk[yk++] = 214, kk[yk++] = 105, kk[yk++] = ik >> 24, kk[yk++] = ik >> 16 & 255, kk[yk++] = ik >> 8 & 255, kk[yk++] = 255 & ik, Tk = Fk
                }
                return kk
              }(SF.subarray(Fk, nF), kk);
              return Tk = null, lk
            }
            return yk.offset = nF, ik & rF ? (SF.start = Fk, SF.end = nF, SF) : SF.subarray(Fk, nF)
          } catch (TI) {
            throw ak = TI, TI
          } finally {
            if (Xk && (Jk(), Ik && yk.saveStructures)) {
              let Ik = Xk.sharedLength || 0,
                Tk = SF.subarray(Fk, nF),
                lk = WF(Xk, yk);
              if (!ak) return !1 === yk.saveStructures(lk, lk.isCompatible) ? yk.pack(kk, ik) : (yk.lastNamedStructuresLength = Ik, SF.length > 1073741824 && (SF = null), Tk)
            }
            SF.length > 1073741824 && (SF = null), ik & DF && (nF = Fk)
          }
        };
        const Jk = () => {
            Hk < 10 && Hk++;
            let kk = Xk.sharedLength || 0;
            if (Xk.length > kk && !lk && (Xk.length = kk), wk > 1e4) Xk.transitions = null, Hk = 0, wk = 0, ek.length > 0 && (ek = []);
            else if (ek.length > 0 && !lk) {
              for (let kk = 0, Fk = ek.length; kk < Fk; kk++) ek[kk][uF] = 0;
              ek = []
            }
          },
          xk = kk => {
            var Fk = kk.length;
            Fk < 16 ? SF[nF++] = 144 | Fk : Fk < 65536 ? (SF[nF++] = 220, SF[nF++] = Fk >> 8, SF[nF++] = 255 & Fk) : (SF[nF++] = 221, vF.setUint32(nF, Fk), nF += 4);
            for (let Ik = 0; Ik < Fk; Ik++) Pk(kk[Ik])
          },
          Pk = kk => {
            nF > EF && (SF = zk(nF));
            var Ik, Xk = typeof kk;
            if ("string" === Xk) {
              let Xk, Tk = kk.length;
              if (GF && Tk >= 4 && Tk < 4096) {
                if ((GF.size += Tk) > 21760) {
                  let kk, Ik, Xk = (GF[0] ? 3 * GF[0].length + GF[1].length : 0) + 10;
                  nF + Xk > EF && (SF = zk(nF + Xk)), GF.position ? (Ik = GF, SF[nF] = 200, nF += 3, SF[nF++] = 98, kk = nF - Fk, nF += 4, NF(Fk, Pk, 0), vF.setUint16(kk + Fk - 3, nF - Fk - kk)) : (SF[nF++] = 214, SF[nF++] = 98, kk = nF - Fk, nF += 4), GF = ["", ""], GF.previous = Ik, GF.size = 0, GF.position = kk
                }
                let Ik = pF.test(kk);
                return GF[Ik ? 0 : 1] += kk, SF[nF++] = 193, void Pk(Ik ? -Tk : Tk)
              }
              Xk = Tk < 32 ? 1 : Tk < 256 ? 2 : Tk < 65536 ? 3 : 5;
              let yk = 3 * Tk;
              if (nF + yk > EF && (SF = zk(nF + yk)), Tk < 64 || !ik) {
                let Fk, ik, yk, lk = nF + Xk;
                for (Fk = 0; Fk < Tk; Fk++) ik = kk.charCodeAt(Fk), ik < 128 ? SF[lk++] = ik : ik < 2048 ? (SF[lk++] = ik >> 6 | 192, SF[lk++] = 63 & ik | 128) : 55296 === (64512 & ik) && 56320 === (64512 & (yk = kk.charCodeAt(Fk + 1))) ? (ik = 65536 + ((1023 & ik) << 10) + (1023 & yk), Fk++, SF[lk++] = ik >> 18 | 240, SF[lk++] = ik >> 12 & 63 | 128, SF[lk++] = ik >> 6 & 63 | 128, SF[lk++] = 63 & ik | 128) : (SF[lk++] = ik >> 12 | 224, SF[lk++] = ik >> 6 & 63 | 128, SF[lk++] = 63 & ik | 128);
                Ik = lk - nF - Xk
              } else Ik = ik(kk, nF + Xk);
              Ik < 32 ? SF[nF++] = 160 | Ik : Ik < 256 ? (Xk < 2 && SF.copyWithin(nF + 2, nF + 1, nF + 1 + Ik), SF[nF++] = 217, SF[nF++] = Ik) : Ik < 65536 ? (Xk < 3 && SF.copyWithin(nF + 3, nF + 2, nF + 2 + Ik), SF[nF++] = 218, SF[nF++] = Ik >> 8, SF[nF++] = 255 & Ik) : (Xk < 5 && SF.copyWithin(nF + 5, nF + 3, nF + 3 + Ik), SF[nF++] = 219, vF.setUint32(nF, Ik), nF += 4), nF += Ik
            } else if ("number" === Xk)
              if (kk >>> 0 === kk) kk < 32 || kk < 128 && !1 === this.useRecords || kk < 64 && !this.randomAccessStructure ? SF[nF++] = kk : kk < 256 ? (SF[nF++] = 204, SF[nF++] = kk) : kk < 65536 ? (SF[nF++] = 205, SF[nF++] = kk >> 8, SF[nF++] = 255 & kk) : (SF[nF++] = 206, vF.setUint32(nF, kk), nF += 4);
              else if ((kk | 0) === kk) kk >= -32 ? SF[nF++] = 256 + kk : kk >= -128 ? (SF[nF++] = 208, SF[nF++] = kk + 256) : kk >= -32768 ? (SF[nF++] = 209, vF.setInt16(nF, kk), nF += 2) : (SF[nF++] = 210, vF.setInt32(nF, kk), nF += 4);
            else {
              let Fk;
              if ((Fk = this.useFloat32) > 0 && kk < 4294967296 && kk >= -2147483648) {
                let Ik;
                if (SF[nF++] = 202, vF.setFloat32(nF, kk), Fk < 4 || ((Ik = kk * aF[(127 & SF[nF]) << 1 | SF[nF + 1] >> 7]) | 0) === Ik) return void(nF += 4);
                nF--
              }
              SF[nF++] = 203, vF.setFloat64(nF, kk), nF += 8
            } else if ("object" === Xk || "function" === Xk)
              if (kk) {
                if (Tk) {
                  let Ik = Tk.get(kk);
                  if (Ik) {
                    if (!Ik.id) {
                      let kk = Tk.idsToInsert || (Tk.idsToInsert = []);
                      Ik.id = kk.push(Ik)
                    }
                    return SF[nF++] = 214, SF[nF++] = 112, vF.setUint32(nF, Ik.id), void(nF += 4)
                  }
                  Tk.set(kk, {
                    offset: nF - Fk
                  })
                }
                let ik = kk.constructor;
                if (ik === Object) Vk(kk);
                else if (ik === Array) xk(kk);
                else if (ik === Map)
                  if (this.mapAsEmptyObject) SF[nF++] = 128;
                  else {
                    (Ik = kk.size) < 16 ? SF[nF++] = 128 | Ik : Ik < 65536 ? (SF[nF++] = 222, SF[nF++] = Ik >> 8, SF[nF++] = 255 & Ik) : (SF[nF++] = 223, vF.setUint32(nF, Ik), nF += 4);
                    for (let [Fk, Ik] of kk) Pk(Fk), Pk(Ik)
                  }
                else {
                  for (let Fk = 0, Ik = HF.length; Fk < Ik; Fk++) {
                    if (kk instanceof JF[Fk]) {
                      let Ik = HF[Fk];
                      if (Ik.write) {
                        Ik.type && (SF[nF++] = 212, SF[nF++] = Ik.type, SF[nF++] = 0);
                        let Fk = Ik.write.call(this, kk);
                        return void(Fk === kk ? Array.isArray(kk) ? xk(kk) : Vk(kk) : Pk(Fk))
                      }
                      let Xk, Tk = SF,
                        ik = vF,
                        yk = nF;
                      SF = null;
                      try {
                        Xk = Ik.pack.call(this, kk, (kk => (SF = Tk, Tk = null, nF += kk, nF > EF && zk(nF), {
                          target: SF,
                          targetView: vF,
                          position: nF - kk
                        })), Pk)
                      } finally {
                        Tk && (SF = Tk, vF = ik, nF = yk, EF = SF.length - 10)
                      }
                      return void(Xk && (Xk.length + nF > EF && zk(Xk.length + nF), nF = CF(Xk, SF, nF, Ik.type)))
                    }
                  }
                  if (Array.isArray(kk)) xk(kk);
                  else {
                    if (kk.toJSON) {
                      const Fk = kk.toJSON();
                      if (Fk !== kk) return Pk(Fk)
                    }
                    if ("function" === Xk) return Pk(this.writeFunction && this.writeFunction(kk));
                    Vk(kk)
                  }
                }
              } else SF[nF++] = 192;
            else if ("boolean" === Xk) SF[nF++] = kk ? 195 : 194;
            else if ("bigint" === Xk) {
              if (kk < BigInt(1) << BigInt(63) && kk >= -(BigInt(1) << BigInt(63))) SF[nF++] = 211, vF.setBigInt64(nF, kk);
              else if (kk < BigInt(1) << BigInt(64) && kk > 0) SF[nF++] = 207, vF.setBigUint64(nF, kk);
              else {
                if (!this.largeBigIntToFloat) {
                  if (this.largeBigIntToString) return Pk(kk.toString());
                  if (this.useBigIntExtension && kk < BigInt(2) ** BigInt(1023) && kk > -(BigInt(2) ** BigInt(1023))) {
                    SF[nF++] = 199, nF++, SF[nF++] = 66;
                    let Fk, Ik = [];
                    do {
                      let Xk = kk & BigInt(255);
                      Fk = (Xk & BigInt(128)) === (kk < BigInt(0) ? BigInt(128) : BigInt(0)), Ik.push(Xk), kk >>= BigInt(8)
                    } while (kk !== BigInt(0) && kk !== BigInt(-1) || !Fk);
                    SF[nF - 2] = Ik.length;
                    for (let kk = Ik.length; kk > 0;) SF[nF++] = Number(Ik[--kk]);
                    return
                  }
                  throw new RangeError(kk + " was too large to fit in MessagePack 64-bit integer format, use useBigIntExtension, or set largeBigIntToFloat to convert to float-64, or set largeBigIntToString to convert to string")
                }
                SF[nF++] = 203, vF.setFloat64(nF, Number(kk))
              }
              nF += 8
            } else {
              if ("undefined" !== Xk) throw new Error("Unknown type: " + Xk);
              this.encodeUndefinedAsNil ? SF[nF++] = 192 : (SF[nF++] = 212, SF[nF++] = 0, SF[nF++] = 0)
            }
          },
          Kk = this.variableMapSize || this.coercibleKeyAsNumber || this.skipValues ? kk => {
            let Fk;
            if (this.skipValues) {
              Fk = [];
              for (let Ik in kk) "function" === typeof kk.hasOwnProperty && !kk.hasOwnProperty(Ik) || this.skipValues.includes(kk[Ik]) || Fk.push(Ik)
            } else Fk = Object.keys(kk);
            let Ik, Xk = Fk.length;
            if (Xk < 16 ? SF[nF++] = 128 | Xk : Xk < 65536 ? (SF[nF++] = 222, SF[nF++] = Xk >> 8, SF[nF++] = 255 & Xk) : (SF[nF++] = 223, vF.setUint32(nF, Xk), nF += 4), this.coercibleKeyAsNumber)
              for (let Tk = 0; Tk < Xk; Tk++) {
                Ik = Fk[Tk];
                let Xk = Number(Ik);
                Pk(isNaN(Xk) ? Ik : Xk), Pk(kk[Ik])
              } else
                for (let Tk = 0; Tk < Xk; Tk++) Pk(Ik = Fk[Tk]), Pk(kk[Ik])
          } : kk => {
            SF[nF++] = 222;
            let Ik = nF - Fk;
            nF += 2;
            let Xk = 0;
            for (let Fk in kk)("function" !== typeof kk.hasOwnProperty || kk.hasOwnProperty(Fk)) && (Pk(Fk), Pk(kk[Fk]), Xk++);
            if (Xk > 65535) throw new Error('Object is too large to serialize with fast 16-bit map size, use the "variableMapSize" option to serialize this object');
            SF[Ik++ + Fk] = Xk >> 8, SF[Ik + Fk] = 255 & Xk
          },
          Qk = !1 === this.useRecords ? Kk : kk.progressiveRecords && !tk ? kk => {
            let Ik, Tk, ik = Xk.transitions || (Xk.transitions = Object.create(null)),
              yk = nF++ - Fk;
            for (let lk in kk)
              if ("function" !== typeof kk.hasOwnProperty || kk.hasOwnProperty(lk)) {
                if (Ik = ik[lk], Ik) ik = Ik;
                else {
                  let ak = Object.keys(kk),
                    qk = ik;
                  ik = Xk.transitions;
                  let Lk = 0;
                  for (let kk = 0, Fk = ak.length; kk < Fk; kk++) {
                    let Fk = ak[kk];
                    Ik = ik[Fk], Ik || (Ik = ik[Fk] = Object.create(null), Lk++), ik = Ik
                  }
                  yk + Fk + 1 == nF ? (nF--, Sk(ik, ak, Lk)) : vk(ik, ak, yk, Lk), Tk = !0, ik = qk[lk]
                }
                Pk(kk[lk])
              } if (!Tk) {
              let Ik = ik[uF];
              Ik ? SF[yk + Fk] = Ik : vk(ik, Object.keys(kk), yk, 0)
            }
          } : kk => {
            let Fk, Ik = Xk.transitions || (Xk.transitions = Object.create(null)),
              Tk = 0;
            for (let Xk in kk)("function" !== typeof kk.hasOwnProperty || kk.hasOwnProperty(Xk)) && (Fk = Ik[Xk], Fk || (Fk = Ik[Xk] = Object.create(null), Tk++), Ik = Fk);
            let ik = Ik[uF];
            ik ? ik >= 96 && tk ? (SF[nF++] = 96 + (31 & (ik -= 96)), SF[nF++] = ik >> 5) : SF[nF++] = ik : Sk(Ik, Ik.__keys__ || Object.keys(kk), Tk);
            for (let Xk in kk)("function" !== typeof kk.hasOwnProperty || kk.hasOwnProperty(Xk)) && Pk(kk[Xk])
          },
          sk = "function" == typeof this.useRecords && this.useRecords,
          Vk = sk ? kk => {
            sk(kk) ? Qk(kk) : Kk(kk)
          } : Qk,
          zk = kk => {
            let Ik;
            if (kk > 16777216) {
              if (kk - Fk > zF) throw new Error("Packed buffer would be larger than maximum buffer size");
              Ik = Math.min(zF, 4096 * Math.round(Math.max((kk - Fk) * (kk > 67108864 ? 1.25 : 2), 4194304) / 4096))
            } else Ik = 1 + (Math.max(kk - Fk << 2, SF.length - 1) >> 12) << 12;
            let Xk = new sF(Ik);
            return vF = Xk.dataView || (Xk.dataView = new DataView(Xk.buffer, 0, Ik)), kk = Math.min(kk, SF.length), SF.copy ? SF.copy(Xk, 0, Fk, kk) : Xk.set(SF.slice(Fk, kk)), nF -= Fk, Fk = 0, EF = Xk.length - 10, SF = Xk
          },
          Sk = (kk, Fk, Tk) => {
            let ik = Xk.nextId;
            ik || (ik = 64), ik < Zk && this.shouldShareStructure && !this.shouldShareStructure(Fk) ? (ik = Xk.nextOwnId, ik < jk || (ik = Zk), Xk.nextOwnId = ik + 1) : (ik >= jk && (ik = Zk), Xk.nextId = ik + 1);
            let yk = Fk.highByte = ik >= 96 && tk ? ik - 96 >> 5 : -1;
            kk[uF] = ik, kk.__keys__ = Fk, Xk[ik - 64] = Fk, ik < Zk ? (Fk.isShared = !0, Xk.sharedLength = ik - 63, Ik = !0, yk >= 0 ? (SF[nF++] = 96 + (31 & ik), SF[nF++] = yk) : SF[nF++] = ik) : (yk >= 0 ? (SF[nF++] = 213, SF[nF++] = 114, SF[nF++] = 96 + (31 & ik), SF[nF++] = yk) : (SF[nF++] = 212, SF[nF++] = 114, SF[nF++] = ik), Tk && (wk += Hk * Tk), ek.length >= Lk && (ek.shift()[uF] = 0), ek.push(kk), Pk(Fk))
          },
          vk = (kk, Ik, Xk, Tk) => {
            let ik = SF,
              yk = nF,
              lk = EF,
              ak = Fk;
            SF = oF, nF = 0, Fk = 0, SF || (oF = SF = new sF(8192)), EF = SF.length - 10, Sk(kk, Ik, Tk), oF = SF;
            let qk = nF;
            if (SF = ik, nF = yk, EF = lk, Fk = ak, qk > 1) {
              let kk = nF + qk - 1;
              kk > EF && zk(kk);
              let Ik = Xk + Fk;
              SF.copyWithin(Ik + qk, Ik + 1, nF), SF.set(oF.slice(0, qk), Ik), nF = kk
            } else SF[Xk + Fk] = oF[0]
          },
          Ek = kk => {
            let Tk = OF(kk, SF, Fk, nF, Xk, zk, ((kk, Fk, Xk) => {
              if (Xk) return Ik = !0;
              nF = Fk;
              let Tk = SF;
              return Pk(kk), Jk(), Tk !== SF ? {
                position: nF,
                targetView: vF,
                target: SF
              } : nF
            }), this);
            if (0 === Tk) return Vk(kk);
            nF = Tk
          }
      }
      useBuffer(kk) {
        SF = kk, vF = SF.dataView || (SF.dataView = new DataView(SF.buffer, SF.byteOffset, SF.byteLength)), nF = 0
      }
      set position(kk) {
        nF = kk
      }
      get position() {
        return nF
      }
      set buffer(kk) {
        SF = kk
      }
      get buffer() {
        return SF
      }
      clearSharedData() {
        this.structures && (this.structures = []), this.typedStructs && (this.typedStructs = [])
      }
    }

    function RF(kk, Fk, Ik, Xk) {
      let Tk = kk.byteLength;
      if (Tk + 1 < 256) {
        var {
          target: ik,
          position: yk
        } = Ik(4 + Tk);
        ik[yk++] = 199, ik[yk++] = Tk + 1
      } else if (Tk + 1 < 65536) {
        var {
          target: ik,
          position: yk
        } = Ik(5 + Tk);
        ik[yk++] = 200, ik[yk++] = Tk + 1 >> 8, ik[yk++] = Tk + 1 & 255
      } else {
        var {
          target: ik,
          position: yk,
          targetView: lk
        } = Ik(7 + Tk);
        ik[yk++] = 201, lk.setUint32(yk, Tk + 1), yk += 4
      }
      ik[yk++] = 116, ik[yk++] = Fk, kk.buffer || (kk = new Uint8Array(kk)), ik.set(new Uint8Array(kk.buffer, kk.byteOffset, kk.byteLength), yk)
    }

    function UF(kk, Fk) {
      let Ik = kk.byteLength;
      var Xk, Tk;
      if (Ik < 256) {
        var {
          target: Xk,
          position: Tk
        } = Fk(Ik + 2);
        Xk[Tk++] = 196, Xk[Tk++] = Ik
      } else if (Ik < 65536) {
        var {
          target: Xk,
          position: Tk
        } = Fk(Ik + 3);
        Xk[Tk++] = 197, Xk[Tk++] = Ik >> 8, Xk[Tk++] = 255 & Ik
      } else {
        var {
          target: Xk,
          position: Tk,
          targetView: ik
        } = Fk(Ik + 5);
        Xk[Tk++] = 198, ik.setUint32(Tk, Ik), Tk += 4
      }
      Xk.set(kk, Tk)
    }

    function CF(kk, Fk, Ik, Xk) {
      let Tk = kk.length;
      switch (Tk) {
        case 1:
          Fk[Ik++] = 212;
          break;
        case 2:
          Fk[Ik++] = 213;
          break;
        case 4:
          Fk[Ik++] = 214;
          break;
        case 8:
          Fk[Ik++] = 215;
          break;
        case 16:
          Fk[Ik++] = 216;
          break;
        default:
          Tk < 256 ? (Fk[Ik++] = 199, Fk[Ik++] = Tk) : Tk < 65536 ? (Fk[Ik++] = 200, Fk[Ik++] = Tk >> 8, Fk[Ik++] = 255 & Tk) : (Fk[Ik++] = 201, Fk[Ik++] = Tk >> 24, Fk[Ik++] = Tk >> 16 & 255, Fk[Ik++] = Tk >> 8 & 255, Fk[Ik++] = 255 & Tk)
      }
      return Fk[Ik++] = Xk, Fk.set(kk, Ik), Ik += Tk
    }

    function NF(kk, Fk, Ik) {
      if (GF.length > 0) {
        vF.setUint32(GF.position + kk, nF + Ik - GF.position - kk), GF.stringsPosition = nF - kk;
        let Xk = GF;
        GF = null, Fk(Xk[0]), Fk(Xk[1])
      }
    }

    function cF(kk) {
      if (kk.Class) {
        if (!kk.pack && !kk.write) throw new Error("Extension has no pack or write function");
        if (kk.pack && !kk.type) throw new Error("Extension has no type (numeric code to identify the extension)");
        JF.unshift(kk.Class), HF.unshift(kk)
      }! function(kk) {
        kk.unpack ? xk[kk.type] = kk.unpack : xk[kk.type] = kk
      }(kk)
    }

    function WF(kk, Fk) {
      return kk.isCompatible = kk => {
        let Ik = !kk || (Fk.lastNamedStructuresLength || 0) === kk.length;
        return Ik || Fk._mergeStructures(kk), Ik
      }, kk
    }
    JF = [Date, Set, Error, RegExp, ArrayBuffer, Object.getPrototypeOf(Uint8Array.prototype).constructor, Kk], HF = [{
      pack(kk, Fk, Ik) {
        let Xk = kk.getTime() / 1e3;
        if ((this.useTimestamp32 || 0 === kk.getMilliseconds()) && Xk >= 0 && Xk < 4294967296) {
          let {
            target: kk,
            targetView: Ik,
            position: Tk
          } = Fk(6);
          kk[Tk++] = 214, kk[Tk++] = 255, Ik.setUint32(Tk, Xk)
        } else if (Xk > 0 && Xk < 4294967296) {
          let {
            target: Ik,
            targetView: Tk,
            position: ik
          } = Fk(10);
          Ik[ik++] = 215, Ik[ik++] = 255, Tk.setUint32(ik, 4e6 * kk.getMilliseconds() + (Xk / 1e3 / 4294967296 | 0)), Tk.setUint32(ik + 4, Xk)
        } else if (isNaN(Xk)) {
          if (this.onInvalidDate) return Fk(0), Ik(this.onInvalidDate());
          let {
            target: kk,
            targetView: Xk,
            position: Tk
          } = Fk(3);
          kk[Tk++] = 212, kk[Tk++] = 255, kk[Tk++] = 255
        } else {
          let {
            target: Ik,
            targetView: Tk,
            position: ik
          } = Fk(15);
          Ik[ik++] = 199, Ik[ik++] = 12, Ik[ik++] = 255, Tk.setUint32(ik, 1e6 * kk.getMilliseconds()), Tk.setBigInt64(ik + 4, BigInt(Math.floor(Xk)))
        }
      }
    }, {
      pack(kk, Fk, Ik) {
        if (this.setAsEmptyObject) return Fk(0), Ik({});
        let Xk = Array.from(kk),
          {
            target: Tk,
            position: ik
          } = Fk(this.moreTypes ? 3 : 0);
        this.moreTypes && (Tk[ik++] = 212, Tk[ik++] = 115, Tk[ik++] = 0), Ik(Xk)
      }
    }, {
      pack(kk, Fk, Ik) {
        let {
          target: Xk,
          position: Tk
        } = Fk(this.moreTypes ? 3 : 0);
        this.moreTypes && (Xk[Tk++] = 212, Xk[Tk++] = 101, Xk[Tk++] = 0), Ik([kk.name, kk.message, kk.cause])
      }
    }, {
      pack(kk, Fk, Ik) {
        let {
          target: Xk,
          position: Tk
        } = Fk(this.moreTypes ? 3 : 0);
        this.moreTypes && (Xk[Tk++] = 212, Xk[Tk++] = 120, Xk[Tk++] = 0), Ik([kk.source, kk.flags])
      }
    }, {
      pack(kk, Fk) {
        this.moreTypes ? RF(kk, 16, Fk) : UF(QF ? Buffer.from(kk) : new Uint8Array(kk), Fk)
      }
    }, {
      pack(kk, Fk) {
        let Ik = kk.constructor;
        Ik !== VF && this.moreTypes ? RF(kk, XF.indexOf(Ik.name), Fk) : UF(kk, Fk)
      }
    }, {
      pack(kk, Fk) {
        let {
          target: Ik,
          position: Xk
        } = Fk(1);
        Ik[Xk] = 193
      }
    }];
    let fF = new bF({
      useRecords: !1
    });
    const BF = fF.pack,
      dF = fF.pack,
      YF = bF,
      {
        NEVER: AF,
        ALWAYS: gF,
        DECIMAL_ROUND: mF,
        DECIMAL_FIT: hF
      } = eF,
      rF = 512,
      DF = 1024,
      MF = 2048;
    const kI = function(kk) {
        let Fk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        if (!kk || "object" !== typeof kk) throw new Error("first argument must be an Iterable, Async Iterable, Iterator, Async Iterator, or a promise");
        const Ik = new Ek(Fk);
        let Xk;
        const Tk = kk => {
          let Fk;
          Xk && (kk = Buffer.concat([Xk, kk]), Xk = void 0);
          try {
            Fk = Ik.unpackMultiple(kk)
          } catch (Tk) {
            if (!Tk.incomplete) throw Tk;
            Xk = kk.slice(Tk.lastPosition), Fk = Tk.values
          }
          return Fk
        };
        return "function" === typeof kk[Symbol.iterator] ? function*() {
          for (const Fk of kk) yield* Tk(Fk)
        }() : "function" === typeof kk[Symbol.asyncIterator] ? async function*() {
          for await (const Fk of kk) yield* Tk(Fk)
        }(): void 0
      },
      FI = function(kk) {
        let Fk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        if (kk && "object" === typeof kk) {
          if ("function" === typeof kk[Symbol.iterator]) return function*(kk, Fk) {
            const Ik = new bF(Fk);
            for (const Xk of kk) yield Ik.pack(Xk)
          }(kk, Fk);
          if ("function" === typeof kk.then || "function" === typeof kk[Symbol.asyncIterator]) return async function*(kk, Fk) {
            const Ik = new bF(Fk);
            for await (const Xk of kk) yield Ik.pack(Xk)
          }(kk, Fk);
          throw new Error("first argument must be an Iterable, Async Iterable, Iterator, Async Iterator, or a Promise")
        }
        throw new Error("first argument must be an Iterable, Async Iterable, or a Promise for an Async Iterable")
      },
      II = !1,
      XI = !0
  },
  9098: (kk, Fk, Ik) => {
    Ik.r(Fk), Ik.d(Fk, {
      $changes: () => wk,
      $childType: () => Hk,
      $decoder: () => Lk,
      $deleteByIndex: () => jk,
      $encoder: () => qk,
      $filter: () => tk,
      $getByIndex: () => Zk,
      $numFields: () => vk,
      $refId: () => lk,
      $track: () => ak,
      $values: () => Qk,
      ArraySchema: () => XX,
      Callbacks: () => XT,
      ChangeTree: () => nI,
      CollectionSchema: () => yX,
      Decoder: () => mX,
      Encoder: () => dX,
      FieldBuilder: () => qX,
      MapSchema: () => iX,
      Metadata: () => mF,
      OPERATION: () => Tk,
      Reflection: () => MX,
      ReflectionField: () => rX,
      ReflectionType: () => DX,
      Root: () => GX,
      Schema: () => OX,
      SetSchema: () => lX,
      StateCallbackStrategy: () => IT,
      StateView: () => UX,
      StreamSchema: () => aX,
      TypeContext: () => WF,
      createPool: () => iT,
      decode: () => KF,
      decodeKeyValueOperation: () => rI,
      decodeSchemaOperation: () => hI,
      defineCustomTypes: () => zF,
      defineTypes: () => oX,
      deprecated: () => zX,
      dumpChanges: () => EX,
      encode: () => IF,
      encodeArray: () => NI,
      encodeIndexedEntry: () => UI,
      encodeKeyValueOperation: () => CI,
      encodeMapEntry: () => RI,
      encodeSchemaOperation: () => bI,
      le: () => HX,
      fullStateOnly: () => KX,
      getDecoderStateCallbacks: () => kT,
      getEncodeDescriptor: () => FI,
      getRawChangesCallback: () => FT,
      isBuilder: () => LX,
      patchOnly: () => PX,
      registerType: () => VF,
      schema: () => vX,
      t: () => eX,
      type: () => QX,
      unreliable: () => xX,
      view: () => JX
    });
    const Xk = 255;
    var Tk;

    function ik(kk) {
      Object.defineProperty(kk, Symbol.metadata, {
        value: void 0,
        writable: !0,
        configurable: !0,
        enumerable: !1
      })
    }! function(kk) {
      kk[kk.ADD = 128] = "ADD", kk[kk.REPLACE = 0] = "REPLACE", kk[kk.DELETE = 64] = "DELETE", kk[kk.DELETE_AND_MOVE = 96] = "DELETE_AND_MOVE", kk[kk.MOVE_AND_ADD = 160] = "MOVE_AND_ADD", kk[kk.DELETE_AND_ADD = 192] = "DELETE_AND_ADD", kk[kk.CLEAR = 10] = "CLEAR", kk[kk.REVERSE = 15] = "REVERSE", kk[kk.MOVE = 32] = "MOVE", kk[kk.DELETE_BY_REFID = 33] = "DELETE_BY_REFID", kk[kk.ADD_BY_REFID = 129] = "ADD_BY_REFID"
    }(Tk || (Tk = {})), Symbol.metadata ??= Symbol.for("Symbol.metadata");
    const yk = "undefined" !== typeof globalThis ? globalThis : "undefined" !== typeof global ? global : "undefined" !== typeof self ? self : "undefined" !== typeof window ? window : {};
    if ("function" === typeof Symbol && "function" !== typeof Symbol.for) {
      const kk = "colyseus.symbolRegistry",
        Fk = yk[kk] || (yk[kk] = Object.create(null));
      Symbol.for = function(kk) {
        return Fk[kk] || (Fk[kk] = Symbol(kk))
      }, Symbol.keyFor = function(kk) {
        for (const Ik in Fk)
          if (Fk[Ik] === kk) return Ik
      }
    }
    const lk = Symbol.for("$refId"),
      ak = "~track",
      qk = "~encoder",
      Lk = "~decoder",
      tk = "~filter",
      Zk = "~getByIndex",
      jk = "~deleteByIndex",
      ek = "~resyncPrune",
      wk = Symbol.for("$changes"),
      Hk = Symbol.for("$childType"),
      Jk = Symbol.for("$proxyTarget"),
      xk = "~onEncodeEnd",
      Pk = "~reset",
      Kk = "~onDecodeEnd",
      Qk = Symbol.for("$values"),
      sk = "~builder",
      Vk = "~descriptors",
      zk = "~__encodeDescriptor",
      Sk = "~encoders",
      vk = "~__numFields",
      Ek = "~__refTypeFieldIndexes",
      Ok = "~__viewFieldIndexes",
      nk = "$__fieldIndexesByViewTag",
      Gk = "~__unreliableFieldIndexes",
      pk = "~__patchOnlyFieldIndexes",
      uk = "~__fullSyncSkipIndexes",
      bk = "~__fullStateOnlyFieldIndexes",
      Rk = "~__streamFieldIndexes",
      Uk = "~__streamPriorities";
    let Ck;
    try {
      Ck = new TextEncoder
    } catch (yT) {}
    const Nk = new ArrayBuffer(8),
      ck = new Int32Array(Nk),
      Wk = new Float32Array(Nk),
      fk = new Float64Array(Nk),
      Bk = new BigInt64Array(Nk),
      dk = "undefined" !== typeof Buffer && Buffer.byteLength ? Buffer.byteLength : function(kk, Fk) {
        for (var Ik = 0, Xk = 0, Tk = 0, ik = kk.length; Tk < ik; Tk++)(Ik = kk.charCodeAt(Tk)) < 128 ? Xk += 1 : Ik < 2048 ? Xk += 2 : Ik < 55296 || Ik >= 57344 ? Xk += 3 : (Tk++, Xk += 4);
        return Xk
      };

    function Yk(kk, Fk, Ik) {
      for (var Xk = 0, Tk = 0, ik = Fk.length; Tk < ik; Tk++)(Xk = Fk.charCodeAt(Tk)) < 128 ? kk[Ik.offset++] = Xk : Xk < 2048 ? (kk[Ik.offset] = 192 | Xk >> 6, kk[Ik.offset + 1] = 128 | 63 & Xk, Ik.offset += 2) : Xk < 55296 || Xk >= 57344 ? (kk[Ik.offset] = 224 | Xk >> 12, kk[Ik.offset + 1] = 128 | Xk >> 6 & 63, kk[Ik.offset + 2] = 128 | 63 & Xk, Ik.offset += 3) : (Tk++, Xk = 65536 + ((1023 & Xk) << 10 | 1023 & Fk.charCodeAt(Tk)), kk[Ik.offset] = 240 | Xk >> 18, kk[Ik.offset + 1] = 128 | Xk >> 12 & 63, kk[Ik.offset + 2] = 128 | Xk >> 6 & 63, kk[Ik.offset + 3] = 128 | 63 & Xk, Ik.offset += 4)
    }

    function Ak(kk, Fk, Ik) {
      kk[Ik.offset++] = 255 & Fk
    }

    function gk(kk, Fk, Ik) {
      kk[Ik.offset++] = 255 & Fk, kk[Ik.offset++] = Fk >> 8 & 255
    }

    function mk(kk, Fk, Ik) {
      kk[Ik.offset++] = 255 & Fk, kk[Ik.offset++] = Fk >> 8 & 255
    }

    function hk(kk, Fk, Ik) {
      kk[Ik.offset++] = 255 & Fk, kk[Ik.offset++] = Fk >> 8 & 255, kk[Ik.offset++] = Fk >> 16 & 255, kk[Ik.offset++] = Fk >> 24 & 255
    }

    function rk(kk, Fk, Ik) {
      const Xk = Fk >> 24,
        Tk = Fk >> 16,
        ik = Fk >> 8,
        yk = Fk;
      kk[Ik.offset++] = 255 & yk, kk[Ik.offset++] = 255 & ik, kk[Ik.offset++] = 255 & Tk, kk[Ik.offset++] = 255 & Xk
    }

    function Dk(kk, Fk, Ik) {
      const Xk = Math.floor(Fk / Math.pow(2, 32));
      rk(kk, Fk >>> 0, Ik), rk(kk, Xk, Ik)
    }

    function Mk(kk, Fk, Ik) {
      const Xk = Fk / Math.pow(2, 32) | 0;
      rk(kk, Fk >>> 0, Ik), rk(kk, Xk, Ik)
    }

    function kF(kk, Fk, Ik) {
      Wk[0] = Fk, hk(kk, ck[0], Ik)
    }

    function FF(kk, Fk, Ik) {
      fk[0] = Fk, hk(kk, ck[0], Ik), hk(kk, ck[1], Ik)
    }
    const IF = {
        int8: Ak,
        uint8: function(kk, Fk, Ik) {
          kk[Ik.offset++] = 255 & Fk
        },
        int16: gk,
        uint16: mk,
        int32: hk,
        uint32: rk,
        int64: Dk,
        uint64: Mk,
        bigint64: function(kk, Fk, Ik) {
          Bk[0] = BigInt.asIntN(64, Fk), hk(kk, ck[0], Ik), hk(kk, ck[1], Ik)
        },
        biguint64: function(kk, Fk, Ik) {
          Bk[0] = BigInt.asIntN(64, Fk), hk(kk, ck[0], Ik), hk(kk, ck[1], Ik)
        },
        float32: kF,
        float64: FF,
        boolean: function(kk, Fk, Ik) {
          kk[Ik.offset++] = Fk ? 1 : 0
        },
        string: function(kk, Fk, Ik) {
          Fk || (Fk = "");
          let Xk = dk(Fk, "utf8"),
            Tk = 0;
          if (Xk < 32) kk[Ik.offset++] = 160 | Xk, Tk = 1;
          else if (Xk < 256) kk[Ik.offset++] = 217, kk[Ik.offset++] = Xk, Tk = 2;
          else if (Xk < 65536) kk[Ik.offset++] = 218, mk(kk, Xk, Ik), Tk = 3;
          else {
            if (!(Xk < 4294967296)) throw new Error("String too long");
            kk[Ik.offset++] = 219, rk(kk, Xk, Ik), Tk = 5
          }
          return Yk(kk, Fk, Ik), Tk + Xk
        },
        number: function kk(Fk, Ik, Xk) {
          return isNaN(Ik) ? kk(Fk, 0, Xk) : isFinite(Ik) ? Ik !== (0 | Ik) ? Math.abs(Ik) <= 34028235e31 && (Wk[0] = Ik, Math.abs(Math.abs(Wk[0]) - Math.abs(Ik)) < 1e-4) ? (Fk[Xk.offset++] = 202, kF(Fk, Ik, Xk), 5) : (Fk[Xk.offset++] = 203, FF(Fk, Ik, Xk), 9) : Ik >= 0 ? Ik < 128 ? (Fk[Xk.offset++] = 255 & Ik, 1) : Ik < 256 ? (Fk[Xk.offset++] = 204, Fk[Xk.offset++] = 255 & Ik, 2) : Ik < 65536 ? (Fk[Xk.offset++] = 205, mk(Fk, Ik, Xk), 3) : Ik < 4294967296 ? (Fk[Xk.offset++] = 206, rk(Fk, Ik, Xk), 5) : (Fk[Xk.offset++] = 207, Mk(Fk, Ik, Xk), 9) : Ik >= -32 ? (Fk[Xk.offset++] = 224 | Ik + 32, 1) : Ik >= -128 ? (Fk[Xk.offset++] = 208, Ak(Fk, Ik, Xk), 2) : Ik >= -32768 ? (Fk[Xk.offset++] = 209, gk(Fk, Ik, Xk), 3) : Ik >= -2147483648 ? (Fk[Xk.offset++] = 210, hk(Fk, Ik, Xk), 5) : (Fk[Xk.offset++] = 211, Dk(Fk, Ik, Xk), 9) : kk(Fk, Ik > 0 ? Number.MAX_SAFE_INTEGER : -Number.MAX_SAFE_INTEGER, Xk)
        },
        utf8Write: Yk,
        utf8Length: dk
      },
      XF = new ArrayBuffer(8),
      TF = new Int32Array(XF),
      iF = new Float32Array(XF),
      yF = new Float64Array(XF),
      lF = new BigUint64Array(XF),
      aF = new BigInt64Array(XF);

    function qF(kk, Fk, Ik) {
      Ik > kk.length - Fk.offset && (Ik = kk.length - Fk.offset);
      for (var Xk = "", Tk = 0, ik = Fk.offset, yk = Fk.offset + Ik; ik < yk; ik++) {
        var lk = kk[ik];
        if (0 !== (128 & lk))
          if (192 !== (224 & lk))
            if (224 !== (240 & lk)) {
              if (240 !== (248 & lk)) {
                console.error("decode.utf8Read(): Invalid byte " + lk + " at offset " + ik + ". Skip to end of string: " + (Fk.offset + Ik));
                break
              }(Tk = (7 & lk) << 18 | (63 & kk[++ik]) << 12 | (63 & kk[++ik]) << 6 | 63 & kk[++ik]) >= 65536 ? (Tk -= 65536, Xk += String.fromCharCode(55296 + (Tk >>> 10), 56320 + (1023 & Tk))) : Xk += String.fromCharCode(Tk)
            } else Xk += String.fromCharCode((15 & lk) << 12 | (63 & kk[++ik]) << 6 | 63 & kk[++ik]);
        else Xk += String.fromCharCode((31 & lk) << 6 | 63 & kk[++ik]);
        else Xk += String.fromCharCode(lk)
      }
      return Fk.offset += Ik, Xk
    }

    function LF(kk, Fk) {
      return tF(kk, Fk) << 24 >> 24
    }

    function tF(kk, Fk) {
      return kk[Fk.offset++]
    }

    function ZF(kk, Fk) {
      return jF(kk, Fk) << 16 >> 16
    }

    function jF(kk, Fk) {
      return kk[Fk.offset++] | kk[Fk.offset++] << 8
    }

    function eF(kk, Fk) {
      return kk[Fk.offset++] | kk[Fk.offset++] << 8 | kk[Fk.offset++] << 16 | kk[Fk.offset++] << 24
    }

    function wF(kk, Fk) {
      return eF(kk, Fk) >>> 0
    }

    function HF(kk, Fk) {
      return TF[0] = eF(kk, Fk), iF[0]
    }

    function JF(kk, Fk) {
      return TF[0] = eF(kk, Fk), TF[1] = eF(kk, Fk), yF[0]
    }

    function xF(kk, Fk) {
      const Ik = wF(kk, Fk);
      return eF(kk, Fk) * Math.pow(2, 32) + Ik
    }

    function PF(kk, Fk) {
      const Ik = wF(kk, Fk);
      return wF(kk, Fk) * Math.pow(2, 32) + Ik
    }
    const KF = {
        utf8Read: qF,
        int8: LF,
        uint8: tF,
        int16: ZF,
        uint16: jF,
        int32: eF,
        uint32: wF,
        float32: HF,
        float64: JF,
        int64: xF,
        uint64: PF,
        bigint64: function(kk, Fk) {
          return TF[0] = eF(kk, Fk), TF[1] = eF(kk, Fk), aF[0]
        },
        biguint64: function(kk, Fk) {
          return TF[0] = eF(kk, Fk), TF[1] = eF(kk, Fk), lF[0]
        },
        boolean: function(kk, Fk) {
          return tF(kk, Fk) > 0
        },
        string: function(kk, Fk) {
          const Ik = kk[Fk.offset++];
          let Xk;
          return Ik < 192 ? Xk = 31 & Ik : 217 === Ik ? Xk = tF(kk, Fk) : 218 === Ik ? Xk = jF(kk, Fk) : 219 === Ik && (Xk = wF(kk, Fk)), qF(kk, Fk, Xk)
        },
        number: function(kk, Fk) {
          const Ik = kk[Fk.offset++];
          return Ik < 128 ? Ik : 202 === Ik ? HF(kk, Fk) : 203 === Ik ? JF(kk, Fk) : 204 === Ik ? tF(kk, Fk) : 205 === Ik ? jF(kk, Fk) : 206 === Ik ? wF(kk, Fk) : 207 === Ik ? PF(kk, Fk) : 208 === Ik ? LF(kk, Fk) : 209 === Ik ? ZF(kk, Fk) : 210 === Ik ? eF(kk, Fk) : 211 === Ik ? xF(kk, Fk) : Ik > 223 ? -1 * (255 - Ik + 1) : void 0
        },
        stringCheck: function(kk, Fk) {
          const Ik = kk[Fk.offset];
          return Ik < 192 && Ik > 160 || 217 === Ik || 218 === Ik || 219 === Ik
        }
      },
      QF = {},
      sF = new Map;

    function VF(kk, Fk) {
      Fk.constructor && (Object.prototype.hasOwnProperty.call(Fk, "constructor") && null == Fk.constructor[Symbol.metadata] && ik(Fk.constructor), sF.set(Fk.constructor, kk), QF[kk] = Fk), Fk.encode && (IF[kk] = Fk.encode), Fk.decode && (KF[kk] = Fk.decode)
    }

    function zF(kk) {
      for (const Fk in kk) VF(Fk, kk[Fk]);
      return kk => QX(kk)
    }
    const SF = "ArraySchema does not support streaming \u2014 positional ops (splice / unshift / reverse) shift subsequent indexes, so holding ADDs back for a later tick under `maxPerTick` would desync the decoder. Use `t.stream(X)` (stable monotonic positions) or `t.map(X).stream()` (stable keys) instead.";

    function oF() {
      return {
        pendingByView: new Map,
        sentByView: new Map,
        broadcastPending: new Set,
        sentBroadcast: new Set,
        broadcastDeletes: new Set,
        maxPerTick: 32
      }
    }

    function vF(kk) {
      return kk._stream ??= oF()
    }

    function EF(kk, Fk, Ik) {
      0 === Fk.activeViews.size && vF(kk).broadcastPending.add(Ik)
    }

    function OF(kk, Fk, Ik, Xk) {
      const ik = kk._stream;
      if (void 0 === ik) return !0;
      let yk = !1;
      return ik.broadcastPending.delete(Xk) ? yk = !0 : ik.sentBroadcast.delete(Xk) && ik.broadcastDeletes.add(Xk), Fk.forEachActiveView((kk => {
        const Fk = ik.pendingByView.get(kk.id);
        if (Fk?.has(Xk)) return Fk.delete(Xk), void(yk = !0);
        const lk = ik.sentByView.get(kk.id);
        if (lk?.has(Xk)) {
          lk.delete(Xk);
          let Fk = kk.changes.get(Ik);
          void 0 === Fk && (Fk = new Map, kk.changes.set(Ik, Fk)), Fk.set(Xk, Tk.DELETE)
        }
      })), yk
    }

    function nF(kk, Fk) {
      const Ik = kk._stream?.pendingByView;
      if (void 0 === Ik) return !1;
      for (const [Xk, Tk] of Ik)
        if (Tk.size > 0 && void 0 !== Fk.activeViews.get(Xk)?.deref()) return !0;
      return !1
    }

    function GF(kk) {
      const Fk = kk._stream;
      return void 0 !== Fk && (Fk.broadcastPending.size > 0 || Fk.broadcastDeletes.size > 0)
    }

    function pF(kk, Fk, Ik) {
      const Xk = vF(kk);
      let Tk = Xk.pendingByView.get(Fk);
      void 0 === Tk && (Tk = new Set, Xk.pendingByView.set(Fk, Tk)), Tk.add(Ik)
    }

    function uF(kk, Fk) {
      const Ik = kk._stream;
      void 0 !== Ik && (Ik.pendingByView.delete(Fk), Ik.sentByView.delete(Fk), Ik.priorityByView?.delete(Fk))
    }
    const bF = {
      8: "uint8",
      16: "uint16",
      32: "uint32"
    };

    function RF(kk) {
      if (null == kk || "object" !== typeof kk) throw new Error("t.quantized(): options object with { min, max } is required.");
      const {
        min: Fk,
        max: Ik
      } = kk;
      if ("number" !== typeof Fk || "number" !== typeof Ik || !(Ik > Fk) || !Number.isFinite(Fk) || !Number.isFinite(Ik)) throw new Error(`t.quantized(): require finite min < max (got min=${Fk}, max=${Ik}).`);
      const Xk = kk.bits ?? 16;
      if (8 !== Xk && 16 !== Xk && 32 !== Xk) throw new Error(`t.quantized(): bits must be 8, 16 or 32 (got ${Xk}).`);
      const Tk = kk.mode ?? "clamp";
      if ("clamp" !== Tk && "wrap" !== Tk) throw new Error(`t.quantized(): mode must be "clamp" or "wrap" (got ${JSON.stringify(Tk)}).`);
      const ik = "wrap" === Tk,
        yk = Math.pow(2, Xk);
      return {
        min: Fk,
        max: Ik,
        bits: Xk,
        wrap: ik,
        wire: bF[Xk],
        range: Ik - Fk,
        span: ik ? yk : Fk === -Ik ? yk - 2 : yk - 1
      }
    }

    function UF(kk) {
      return null !== kk && "object" === typeof kk && void 0 !== kk.quantized
    }

    function CF(kk, Fk) {
      if (kk.wrap) {
        if (!Number.isFinite(Fk)) return 0;
        const Ik = kk.range;
        let Xk = (Fk - kk.min) % Ik;
        Xk < 0 && (Xk += Ik);
        const Tk = kk.span;
        return Math.floor(Xk / Ik * Tk + .5) % Tk
      }
      if (Fk !== Fk) return 0;
      const Ik = Fk < kk.min ? kk.min : Fk > kk.max ? kk.max : Fk;
      return Math.floor((Ik - kk.min) / kk.range * kk.span + .5)
    }

    function NF(kk, Fk) {
      return kk.min + Fk / kk.span * kk.range
    }

    function cF(kk) {
      const Fk = IF[kk.wire];
      return (Ik, Xk, Tk) => Fk(Ik, CF(kk, Xk), Tk)
    }
    class WF {
      types = {};
      schemas = new Map;
      hasFilters = !1;
      static inheritedTypes = new WeakMap;
      static cachedContexts = new WeakMap;
      static register(kk) {
        const Fk = Object.getPrototypeOf(kk);
        if (Fk !== OX) {
          let Ik = WF.inheritedTypes.get(Fk);
          Ik || (Ik = new Set, WF.inheritedTypes.set(Fk, Ik)), Ik.add(kk)
        }
      }
      static cache(kk) {
        let Fk = WF.cachedContexts.get(kk);
        return Fk || (Fk = new WF(kk), WF.cachedContexts.set(kk, Fk)), Fk
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
        return !this.schemas.has(kk) && (this.types[Fk] = kk, null == kk[Symbol.metadata] && mF.initialize(kk), this.schemas.set(kk, Fk), !0)
      }
      getTypeId(kk) {
        return this.schemas.get(kk)
      }
      discoverTypes(kk) {
        if (!this.add(kk)) return;
        WF.inheritedTypes.get(kk)?.forEach((kk => {
          this.discoverTypes(kk)
        }));
        let Fk = kk;
        for (;
          (Fk = Object.getPrototypeOf(Fk)) && Fk !== OX && Fk !== Function.prototype;) this.discoverTypes(Fk);
        const Ik = kk[Symbol.metadata];
        (Ik[Ok] || Ik[Rk]) && (this.hasFilters = !0);
        for (const Xk in Ik) {
          const kk = Ik[Xk].type;
          if ("string" !== typeof kk && !UF(kk))
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

    function fF(kk) {
      const Fk = dF(kk);
      return Fk ? {
        complexTypeKlass: QF[Fk],
        childType: kk[Fk]
      } : {
        complexTypeKlass: !1,
        childType: kk
      }
    }

    function BF(kk, Fk) {
      const Ik = YF(kk),
        Xk = dF(Ik),
        Tk = Xk && dF(Ik[Xk]);
      if (Tk) throw new Error(`${Fk?`${Fk}: `:""}@colyseus/schema: nested collections are not supported ("${Xk}" of "${Tk}"). Collections can only hold primitive types or Schema classes, wrap the inner ${Tk} in a Schema class.`);
      return Ik
    }

    function dF(kk) {
      return "object" === typeof kk && null !== kk ? Object.keys(kk).find((kk => void 0 !== QF[kk])) : void 0
    }

    function YF(kk) {
      if ("object" !== typeof kk || null === kk) return kk;
      if (Array.isArray(kk)) return {
        array: YF(kk[0])
      };
      const Fk = function(kk) {
        const Fk = Object.keys(kk),
          Ik = Fk.filter((kk => /\d+/.test(kk)));
        if (Ik.length > 0 && Ik.length === Fk.length / 2 && kk[kk[Ik[0]]] == Ik[0]) return "number";
        if (Fk.length > 0 && Fk.every((Fk => kk[Fk] === Fk))) return "string"
      }(kk);
      if (Fk) return Fk;
      if (UF(kk)) return "string" === typeof kk.quantized.wire ? kk : {
        quantized: RF(kk.quantized)
      };
      if (void 0 !== kk.type) return YF(kk.type);
      const Ik = dF(kk);
      return Ik && (kk[Ik] = YF(kk[Ik])), kk
    }
    const AF = [Ek, Gk, pk, uk, bk, Rk, Sk];

    function gF(kk, Fk, Ik) {
      kk[Fk] || Object.defineProperty(kk, Fk, {
        value: [],
        enumerable: !1,
        configurable: !0,
        writable: !0
      }), kk[Fk].push(Ik)
    }
    const mF = {
        addField(kk, Fk, Ik, Xk, Tk) {
          if (Fk >= 63) throw new Error(`Can't define field '${Ik}'.\nSchema instances may only have up to 63 fields.`);
          kk[Fk] = Object.assign(kk[Fk] || {}, {
            type: Xk,
            index: Fk,
            name: Ik
          }), Object.defineProperty(kk, Vk, {
            value: kk[Vk] || {},
            enumerable: !1,
            configurable: !0
          }), kk[Vk][Ik] = Tk || {
            value: void 0,
            writable: !0,
            enumerable: !0,
            configurable: !0
          }, Object.defineProperty(kk, vk, {
            value: Fk,
            enumerable: !1,
            configurable: !0
          }), Object.defineProperty(kk, Ik, {
            value: Fk,
            enumerable: !1,
            configurable: !0
          }), "string" === typeof kk[Fk].type || UF(kk[Fk].type) || (void 0 === kk[Ek] && Object.defineProperty(kk, Ek, {
            value: [],
            enumerable: !1,
            configurable: !0
          }), kk[Ek].push(Fk));
          const ik = kk[Fk].type;
          if (ik && "object" === typeof ik && void 0 !== ik.stream) {
            if (void 0 !== ik.array) throw new Error(SF);
            kk[Fk].stream = !0, kk[Rk] || Object.defineProperty(kk, Rk, {
              value: [],
              enumerable: !1,
              configurable: !0,
              writable: !0
            }), kk[Rk].includes(Fk) || kk[Rk].push(Fk);
            const Tk = Xk?.priority;
            "function" === typeof Tk && mF.setStreamPriority(kk, Ik, Tk)
          }
        },
        setTag(kk, Fk, Ik) {
          const Xk = kk[Fk];
          if (kk[Xk].tag = Ik, kk[Ok] || (Object.defineProperty(kk, Ok, {
              value: [],
              enumerable: !1,
              configurable: !0
            }), Object.defineProperty(kk, nk, {
              value: {},
              enumerable: !1,
              configurable: !0
            })), kk[Ok].push(Xk), Ik < 0) kk[nk][Ik] || (kk[nk][Ik] = []), kk[nk][Ik].push(Xk);
          else
            for (let Tk = Ik; Tk > 0; Tk &= Tk - 1) {
              const Fk = Tk & -Tk;
              kk[nk][Fk] || (kk[nk][Fk] = []), kk[nk][Fk].push(Xk)
            }
        },
        setUnreliable(kk, Fk) {
          const Ik = kk[Fk];
          if ("string" !== typeof kk[Ik].type) throw new Error(`@unreliable cannot be applied to ref-type field "${Fk}". For ref-type fields, mark each primitive sub-field with @unreliable instead. See README "Limitations and best practices".`);
          kk[Ik].unreliable = !0, kk[Gk] || Object.defineProperty(kk, Gk, {
            value: [],
            enumerable: !1,
            configurable: !0,
            writable: !0
          }), kk[Gk].push(Ik)
        },
        setPatchOnly(kk, Fk) {
          const Ik = kk[Fk];
          if (kk[Ik].fullStateOnly) throw new Error(`field "${Fk}" cannot be both patchOnly and fullStateOnly \u2014 those are the only two delivery channels, so the field would never reach a client.`);
          kk[Ik].patchOnly = !0, gF(kk, pk, Ik), gF(kk, uk, Ik)
        },
        setDeprecated(kk, Fk) {
          const Ik = kk[Fk];
          kk[Ik].deprecated = !0, gF(kk, uk, Ik), Object.defineProperty(kk, Ik, {
            value: kk[Ik],
            enumerable: !1,
            configurable: !0
          })
        },
        setFullStateOnly(kk, Fk) {
          const Ik = kk[Fk];
          if (kk[Ik].patchOnly) throw new Error(`field "${Fk}" cannot be both patchOnly and fullStateOnly \u2014 those are the only two delivery channels, so the field would never reach a client.`);
          kk[Ik].fullStateOnly = !0, gF(kk, bk, Ik)
        },
        setStream(kk, Fk) {
          const Ik = kk[Fk];
          kk[Ik].stream = !0, kk[Rk] || Object.defineProperty(kk, Rk, {
            value: [],
            enumerable: !1,
            configurable: !0,
            writable: !0
          }), kk[Rk].push(Ik)
        },
        setStreamPriority(kk, Fk, Ik) {
          const Xk = kk[Fk];
          kk[Uk] || Object.defineProperty(kk, Uk, {
            value: {},
            enumerable: !1,
            configurable: !0,
            writable: !0
          }), kk[Uk][Xk] = Ik
        },
        getStreamPriority: (kk, Fk) => kk?.[Uk]?.[Fk],
        defineField(kk, Fk, Ik, Xk, Tk) {
          const ik = BF(Tk, `${kk.name}.${Xk}`),
            {
              complexTypeKlass: yk,
              childType: lk
            } = fF(ik);
          mF.addField(Fk, Ik, Xk, ik, VX(Xk, Ik, lk, yk)), Fk[Vk][Xk] && Object.defineProperty(kk.prototype, Xk, Fk[Vk][Xk]), ("string" === typeof ik || UF(ik)) && (Fk[Sk] || Object.defineProperty(Fk, Sk, {
            value: [],
            enumerable: !1,
            configurable: !0,
            writable: !0
          }), Fk[Sk][Ik] = "string" === typeof ik ? IF[ik] : cF(ik.quantized))
        },
        setFields(kk, Fk) {
          const Ik = kk.prototype.constructor;
          WF.register(Ik);
          const Xk = Object.getPrototypeOf(Ik),
            Tk = Xk && Xk[Symbol.metadata],
            ik = mF.initialize(Ik);
          Ik[ak] || (Ik[ak] = OX[ak]), Ik[qk] || (Ik[qk] = OX[qk]), Ik[Lk] || (Ik[Lk] = OX[Lk]), Ik.prototype.toJSON || (Ik.prototype.toJSON = OX.prototype.toJSON);
          let yk = ik[vk] ?? (Tk && Tk[vk]) ?? -1;
          yk++, ik[Sk] || Object.defineProperty(ik, Sk, {
            value: Tk?.[Sk] ? [...Tk[Sk]] : [],
            enumerable: !1,
            configurable: !0,
            writable: !0
          });
          for (const lk in Fk) {
            if (void 0 !== ik[lk]) throw new Error(`@colyseus/schema: Duplicate '${lk}' definition on '${Ik.name||"(anonymous)"}'.`);
            mF.defineField(Ik, ik, yk, lk, Fk[lk]), yk++
          }
          return kk
        },
        isDeprecated: (kk, Fk) => !0 === kk[Fk].deprecated,
        initialize(kk) {
          const Fk = Object.getPrototypeOf(kk),
            Ik = Fk[Symbol.metadata];
          let Xk = kk[Symbol.metadata] ?? Object.create(null);
          if (Fk !== OX && Xk === Ik && (Xk = Object.create(null), Ik)) {
            Object.setPrototypeOf(Xk, Ik), Object.defineProperty(Xk, vk, {
              value: Ik[vk],
              enumerable: !1,
              configurable: !0,
              writable: !0
            }), void 0 !== Ik[Ok] && (Object.defineProperty(Xk, Ok, {
              value: [...Ik[Ok]],
              enumerable: !1,
              configurable: !0,
              writable: !0
            }), Object.defineProperty(Xk, nk, {
              value: {
                ...Ik[nk]
              },
              enumerable: !1,
              configurable: !0,
              writable: !0
            }));
            for (const kk of AF) {
              const Fk = Ik[kk];
              void 0 !== Fk && Object.defineProperty(Xk, kk, {
                value: [...Fk],
                enumerable: !1,
                configurable: !0,
                writable: !0
              })
            }
            Object.defineProperty(Xk, Vk, {
              value: {
                ...Ik[Vk]
              },
              enumerable: !1,
              configurable: !0,
              writable: !0
            })
          }
          return Object.defineProperty(kk, Symbol.metadata, {
            value: Xk,
            writable: !1,
            configurable: !0
          }), Xk
        },
        isValidInstance: kk => kk.constructor[Symbol.metadata] && Object.prototype.hasOwnProperty.call(kk.constructor[Symbol.metadata], vk),
        getFields(kk) {
          const Fk = kk[Symbol.metadata],
            Ik = {};
          for (let Xk = 0; Xk <= Fk[vk]; Xk++) Ik[Fk[Xk].name] = Fk[Xk].type;
          return Ik
        },
        hasViewTagAtIndex: (kk, Fk) => kk?.[Ok]?.includes(Fk),
        hasUnreliableAtIndex: (kk, Fk) => kk?.[Gk]?.includes(Fk),
        hasPatchOnlyAtIndex: (kk, Fk) => kk?.[pk]?.includes(Fk),
        hasFullStateOnlyAtIndex: (kk, Fk) => kk?.[bk]?.includes(Fk),
        hasStreamAtIndex: (kk, Fk) => kk?.[Rk]?.includes(Fk)
      },
      hF = (kk, Fk, Ik) => kk(Fk, Ik);
    class rF {
      dirtyLow = 0;
      dirtyHigh = 0;
      ops;
      constructor(kk) {
        this.ops = new Uint8Array(Math.max(kk + 1, 1))
      }
      record(kk, Fk) {
        const Ik = this.ops[kk];
        0 === Ik ? this.ops[kk] = Fk : (Ik === Tk.DELETE || Ik === Tk.ADD && Fk === Tk.DELETE_AND_ADD) && (this.ops[kk] = Tk.DELETE_AND_ADD), kk < 32 ? this.dirtyLow |= 1 << kk : this.dirtyHigh |= 1 << kk - 32
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
        this.forEachWithCtx(kk, hF)
      }
      forEachWithCtx(kk, Fk) {
        let Ik = this.dirtyLow,
          Xk = this.dirtyHigh;
        const Tk = this.ops;
        for (; 0 !== Ik;) {
          const Xk = Ik & -Ik,
            ik = 31 - Math.clz32(Xk);
          Ik ^= Xk, Fk(kk, ik, Tk[ik])
        }
        for (; 0 !== Xk;) {
          const Ik = Xk & -Xk,
            ik = 31 - Math.clz32(Ik) + 32;
          Xk ^= Ik, Fk(kk, ik, Tk[ik])
        }
      }
      size() {
        return MF(this.dirtyLow) + MF(this.dirtyHigh)
      }
      has() {
        return 0 !== (this.dirtyLow | this.dirtyHigh)
      }
      reset() {
        this.dirtyLow = 0, this.dirtyHigh = 0, this.ops.fill(0)
      }
    }
    class DF {
      Ne = new Map;
      pureOps = [];
      record(kk, Fk) {
        const Ik = this.Ne.get(kk);
        void 0 === Ik ? this.Ne.set(kk, Fk) : (Ik === Tk.DELETE || Ik === Tk.ADD && Fk === Tk.DELETE_AND_ADD) && this.Ne.set(kk, Tk.DELETE_AND_ADD)
      }
      recordDelete(kk, Fk) {
        this.Ne.set(kk, Fk)
      }
      recordRaw(kk, Fk) {
        this.Ne.set(kk, Fk)
      }
      recordPure(kk) {
        this.pureOps.push([this.Ne.size, kk])
      }
      operationAt(kk) {
        return this.Ne.get(kk)
      }
      setOperationAt(kk, Fk) {
        this.Ne.has(kk) && this.Ne.set(kk, Fk)
      }
      forEach(kk) {
        this.forEachWithCtx(kk, hF)
      }
      forEachWithCtx(kk, Fk) {
        const Ik = this.pureOps;
        if (Ik.length > 0) {
          let Xk = 0,
            Tk = 0;
          for (const [ik, yk] of this.Ne) {
            for (; Xk < Ik.length && Ik[Xk][0] <= Tk;) {
              const Tk = Ik[Xk++][1];
              Fk(kk, -Tk, Tk)
            }
            Fk(kk, ik, yk), Tk++
          }
          for (; Xk < Ik.length;) {
            const Tk = Ik[Xk++][1];
            Fk(kk, -Tk, Tk)
          }
        } else
          for (const [Xk, Tk] of this.Ne) Fk(kk, Xk, Tk)
      }
      size() {
        return this.Ne.size + this.pureOps.length
      }
      has() {
        return this.Ne.size > 0 || this.pureOps.length > 0
      }
      reset() {
        this.Ne.clear(), this.pureOps.length = 0
      }
      shift(kk) {
        const Fk = new Map;
        for (const [Ik, Xk] of this.Ne) Fk.set(Ik + kk, Xk);
        this.Ne = Fk
      }
    }

    function MF(kk) {
      return 16843009 * ((kk = (858993459 & (kk -= kk >>> 1 & 1431655765)) + (kk >>> 2 & 858993459)) + (kk >>> 4) & 252645135) >>> 24
    }

    function kI(kk) {
      if (void 0 === kk) return 0;
      let Fk = 0;
      for (let Ik = 0, Xk = kk.length; Ik < Xk; Ik++) {
        const Xk = kk[Ik];
        Xk < 32 && (Fk |= 1 << Xk)
      }
      return Fk
    }

    function FI(kk) {
      const Fk = kk.constructor;
      if (Object.prototype.hasOwnProperty.call(Fk, zk)) return Fk[zk];
      const Ik = Fk[Symbol.metadata],
        Xk = mF.isValidInstance(kk),
        Tk = (Ik?.[Ok]?.length ?? 0) > 0,
        ik = function(kk) {
          const Fk = [],
            Ik = [],
            Xk = [],
            Tk = [],
            ik = kk?.[vk];
          if (void 0 === ik) return {
            names: Fk,
            types: Ik,
            tags: Xk,
            encoders: Tk
          };
          const yk = kk[Sk];
          for (let lk = 0; lk <= ik; lk++) {
            const ik = kk[lk];
            void 0 !== ik ? (Fk[lk] = ik.name, Ik[lk] = ik.type, Xk[lk] = ik.tag, Tk[lk] = yk?.[lk]) : (Fk[lk] = void 0, Ik[lk] = void 0, Xk[lk] = void 0, Tk[lk] = void 0)
          }
          return {
            names: Fk,
            types: Ik,
            tags: Xk,
            encoders: Tk
          }
        }(Ik),
        yk = Xk && !Tk ? void 0 : Fk[tk],
        lk = {
          encoder: Fk[qk],
          filter: yk,
          metadata: Ik,
          isSchema: Xk,
          filterBitmask: Xk ? kI(Ik?.[Ok]) : 0,
          hasAnyFullStateOnly: (Ik?.[bk]?.length ?? 0) > 0,
          hasAnyUnreliable: (Ik?.[Gk]?.length ?? 0) > 0,
          hasAnyStream: (Ik?.[Rk]?.length ?? 0) > 0,
          hasAnyView: Tk,
          fullStateOnlyBitmask: kI(Ik?.[bk]),
          unreliableBitmask: kI(Ik?.[Gk]),
          streamBitmask: kI(Ik?.[Rk]),
          names: ik.names,
          types: ik.types,
          tags: ik.tags,
          encoders: ik.encoders
        };
      return Object.defineProperty(Fk, zk, {
        value: lk,
        enumerable: !1,
        writable: !0,
        configurable: !0
      }), lk
    }

    function II(kk, Fk) {
      if (void 0 !== kk.parentRef && Fk(kk.parentRef, kk._parentIndex)) return !0;
      for (let Ik = kk.extraParents; void 0 !== Ik; Ik = Ik.next)
        if (Fk(Ik.ref, Ik.index)) return !0;
      return !1
    }
    const XI = (kk, Fk) => {
        kk.isFieldUnreliable(Fk) ? kk.ensureUnreliableRecorder().record(Fk, Tk.ADD) : kk.record(Fk, Tk.ADD)
      },
      TI = (kk, Fk) => kk(Fk);

    function iI(kk, Fk, Ik) {
      const Xk = kk.refTarget;
      if (void 0 !== Xk[Hk]) {
        if (kk.isPatchOnly) return;
        if (Array.isArray(Xk.items)) {
          const kk = Xk.items;
          for (let Xk = 0, Tk = kk.length; Xk < Tk; Xk++) void 0 !== kk[Xk] && Ik(Fk, Xk)
        } else if (void 0 !== Xk.journal)
          for (const [kk, Tk] of Xk.journal.keyByIndex) Xk.$items.has(Tk) && Ik(Fk, kk);
        else if (void 0 !== Xk.$items)
          for (const kk of Xk.$items.keys()) Ik(Fk, kk)
      } else {
        const Tk = kk.metadata;
        if (!Tk) return;
        const ik = Tk[vk] ?? -1,
          yk = Tk[uk],
          lk = kk.encDescriptor.names;
        for (let kk = 0; kk <= ik; kk++) {
          const Tk = lk[kk];
          if (void 0 === Tk) continue;
          if (yk && yk.includes(kk)) continue;
          const ik = Xk[Tk];
          void 0 !== ik && null !== ik && Ik(Fk, kk)
        }
      }
    }

    function yI(kk, Fk, Ik, Xk) {
      ! function(kk, Fk, Ik) {
        if (!Fk) return;
        const Xk = Fk[wk],
          Tk = !Xk._isSchema;
        let ik;
        Tk ? (Fk = Xk.parent, Ik = Xk.parentIndex, ik = Fk?.[wk].metadata) : ik = Xk.metadata;
        const yk = (ik?.[pk]?.includes(Ik) ? SI : 0) | (ik?.[bk]?.includes(Ik) ? oI : 0),
          lk = Xk.flags & OI | yk,
          ak = kk.flags;
        kk.flags = ak | lk;
        lk & ~ak & oI && (kk.reset(), kk.unreliableRecorder?.reset());
        const qk = kk.root?.types;
        if (!qk?.hasFilters) return;
        const Lk = ik?.[Ok]?.includes(Ik) ?? !1,
          tk = ik?.[Rk]?.includes(Ik) ?? !1,
          Zk = Xk.isFiltered || Lk || tk;
        if (kk.isFiltered = Zk, tk && !Tk) {
          kk.isStreamCollection = !0;
          const Fk = vF(kk.ref);
          if (void 0 === Fk.priority) {
            const kk = mF.getStreamPriority(ik, Ik);
            void 0 !== kk && (Fk.priority = kk)
          }
          kk.root?.registerStream(kk.ref)
        }
        if (Zk) {
          const Fk = aI(kk);
          kk.isVisibilitySharedWithParent = Xk.isFiltered && Fk && !tk && (!Lk || Tk && ik[Ik].tag !== wX)
        }
      }(kk, Fk, Ik), kk.isFullStateOnly || (kk.has() && kk.root?.enqueueChangeTree(kk), kk.unreliableRecorder?.has() && kk.root?.enqueueUnreliable(kk), kk.has() || kk.unreliableRecorder?.has() || kk.root?.enqueueChangeTree(kk))
    }

    function lI(kk) {
      const Fk = kk.pendingFilterRefresh;
      for (let Ik = 0; Ik < Fk.length; Ik++) {
        const kk = Fk[Ik];
        0 !== (kk.flags & EI) && qI(kk)
      }
      Fk.length = 0
    }

    function aI(kk) {
      return kk._isSchema || "string" !== typeof kk.refTarget[Hk]
    }

    function qI(kk) {
      kk.flags &= ~EI;
      const Fk = kk.root;
      if (void 0 === Fk || void 0 === kk.parentRef) return;
      const Ik = aI(kk);
      let Xk = eI(kk, kk.parentRef, kk._parentIndex, Ik);
      for (let ik = kk.extraParents; void 0 !== ik && Xk !== jI; ik = ik.next) Xk |= eI(kk, ik.ref, ik.index, Ik);
      if (0 === Xk) return;
      kk.isVisibilitySharedWithParent = 0 !== (Xk & ZI);
      const Tk = 0 === (Xk & tI);
      Tk !== kk.isFiltered && (kk.isFiltered = Tk, Tk || kk.isFullStateOnly || (kk.forEachLiveWithCtx(kk, XI), kk.has() && Fk.enqueueChangeTree(kk), kk.unreliableRecorder?.has() && Fk.enqueueUnreliable(kk)), kk.forEachChildWithCtx(kk, wI))
    }
    const LI = 1,
      tI = 2,
      ZI = 4,
      jI = LI | tI | ZI;

    function eI(kk, Fk, Ik, Xk) {
      const Tk = Fk[wk];
      if (Tk.root !== kk.root || ! function(kk, Fk, Ik) {
          const Xk = Fk.refTarget;
          if (Fk.isArray) {
            const Fk = Xk.items,
              Tk = Fk[Ik];
            if (void 0 !== Tk && Tk[wk] === kk) return !0;
            for (let Ik = 0, Xk = Fk.length; Ik < Xk; Ik++) {
              const Xk = Fk[Ik];
              if (void 0 !== Xk && Xk[wk] === kk) return !0
            }
            return !1
          }
          const Tk = Fk.getValue(Ik);
          return void 0 !== Tk && Tk[wk] === kk
        }(kk, Tk, Ik)) return 0;
      Tk.flags & EI && qI(Tk);
      let ik = LI;
      if (Tk._isSchema) {
        void 0 !== Tk.encDescriptor.tags[Ik] || Tk.isFieldStream(Ik) || (Tk.isFiltered ? Xk && (ik |= ZI) : ik |= tI)
      } else if (Tk.isFiltered) {
        if (Xk && !Tk.isStreamCollection) {
          const kk = Tk.parent?.[wk];
          (kk?._isSchema ? kk.encDescriptor.tags[Tk.parentIndex] : void 0) !== wX && (ik |= ZI)
        }
      } else ik |= tI;
      return ik
    }
    const wI = (kk, Fk, Ik) => {
      qI(Fk)
    };

    function HI(kk, Fk, Ik, Xk) {
      if (kk.addParent(Fk, Xk), !Ik) return;
      const Tk = Ik.add(kk);
      Ik !== kk.root && (kk.root = Ik, yI(kk, Fk, Xk));
      const ik = Fk?.[wk];
      if (void 0 !== ik && void 0 !== ik.subscribedViews && void 0 !== Fk[Hk] && function(kk, Fk, Ik, Xk) {
          const Tk = kk.subscribedViews;
          if (void 0 === Tk) return;
          const ik = kk.isStreamCollection,
            yk = ik ? kk.ref : void 0,
            lk = ik ? void 0 : Ik[wk];
          for (let ak = 0, qk = Tk.length; ak < qk; ak++) {
            let kk = Tk[ak];
            for (; 0 !== kk;) {
              const Ik = kk & -kk;
              kk ^= Ik;
              const qk = 32 * ak + (31 - Math.clz32(Ik)),
                Lk = Xk.activeViews.get(qk),
                tk = Lk?.deref();
              void 0 !== tk ? ik ? pF(yk, qk, Fk) : void 0 !== lk && tk.markVisible(lk) : Tk[ak] &= ~Ik
            }
          }
        }(ik, Xk, kk.ref, Ik), Tk) {
        let Fk = KI[QI];
        void 0 === Fk && (Fk = {
          parentRef: void 0,
          root: void 0
        }, KI[QI] = Fk), Fk.parentRef = kk.ref, Fk.root = Ik, QI++, xI(kk, Fk, sI), QI--
      }
    }

    function JI(kk, Fk, Ik) {
      kk(Fk, Ik)
    }

    function xI(kk, Fk, Ik) {
      const Xk = kk.refTarget;
      if (Xk[Hk]) {
        if ("string" !== typeof Xk[Hk]) {
          const kk = Xk.items;
          if (void 0 !== kk)
            for (let Xk = 0, Tk = kk.length; Xk < Tk; Xk++) {
              const Tk = kk[Xk];
              Tk && Ik(Fk, Tk[wk], Xk)
            } else {
              const kk = Xk.$items,
                Tk = Xk._collectionIndexes;
              for (const Xk of kk.keys()) {
                const ik = kk.get(Xk);
                ik && Ik(Fk, ik[wk], Tk?.[Xk] ?? Xk)
              }
            }
        }
      } else {
        const Tk = kk.metadata,
          ik = Tk?.[Ek];
        if (!ik) return;
        const yk = kk.encDescriptor.names;
        for (let kk = 0, lk = ik.length; kk < lk; kk++) {
          const Tk = ik[kk],
            lk = Xk[yk[Tk]];
          lk && Ik(Fk, lk[wk], Tk)
        }
      }
    }

    function PI(kk, Fk, Ik) {
      Fk.root !== kk ? Fk.setRoot(kk) : kk.add(Fk)
    }
    const KI = [];
    let QI = 0;

    function sI(kk, Fk, Ik) {
      if (Fk.root === kk.root) return kk.root.add(Fk), void kk.root.moveNextToParent(Fk);
      Fk.setParent(kk.parentRef, kk.root, Ik)
    }

    function VI(kk, Fk, Ik) {
      const Xk = (3 & Ik) << 3;
      return Ik < 4 ? kk >>> Xk & 255 : Fk >>> Xk & 255
    }
    const zI = (kk, Fk, Ik) => kk(Fk, Ik);
    const SI = 16,
      oI = 32,
      vI = 128,
      EI = 256,
      OI = SI | oI;
    class nI {
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
        return 0 !== (this.flags & SI)
      }
      set isPatchOnly(kk) {
        this.flags = kk ? this.flags | SI : this.flags & ~SI
      }
      get isFullStateOnly() {
        return 0 !== (this.flags & oI)
      }
      set isFullStateOnly(kk) {
        this.flags = kk ? this.flags | oI : this.flags & ~oI
      }
      get isStreamCollection() {
        return 0 !== (64 & this.flags)
      }
      set isStreamCollection(kk) {
        this.flags = kk ? 64 | this.flags : -65 & this.flags
      }
      get needsRestage() {
        return 0 !== (this.flags & vI)
      }
      set needsRestage(kk) {
        this.flags = kk ? this.flags | vI : -129 & this.flags
      }
      get hasFilteredFields() {
        return this.isFiltered || this.encDescriptor.hasAnyView
      }
      ensureUnreliableRecorder() {
        return void 0 === this.unreliableRecorder && (this.unreliableRecorder = this._isSchema ? new rF(this.metadata?.[vk] ?? 0) : new DF), this.unreliableRecorder
      }
      isFieldUnreliable(kk) {
        const Fk = this.encDescriptor;
        return !!Fk.hasAnyUnreliable && (kk < 32 ? 0 !== (Fk.unreliableBitmask & 1 << kk) : mF.hasUnreliableAtIndex(this.metadata, kk))
      }
      isFieldFullStateOnly(kk) {
        if (this.isFullStateOnly) return !0;
        const Fk = this.encDescriptor;
        return !!Fk.hasAnyFullStateOnly && (kk < 32 ? 0 !== (Fk.fullStateOnlyBitmask & 1 << kk) : mF.hasFullStateOnlyAtIndex(this.metadata, kk))
      }
      isFieldStream(kk) {
        const Fk = this.encDescriptor;
        return !!Fk.hasAnyStream && (kk < 32 ? 0 !== (Fk.streamBitmask & 1 << kk) : mF.hasStreamAtIndex(this.metadata, kk))
      }
      constructor(kk) {
        let Fk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : kk;
        this.ref = kk, this.refTarget = Fk;
        const Ik = FI(kk);
        this.encDescriptor = Ik, this.metadata = Ik.metadata;
        const Xk = Ik.isSchema;
        if (this._isSchema = Xk, this.ops = void 0, this.collDirty = void 0, this.collPureOps = void 0, Xk) {
          const kk = this.metadata?.[vk] ?? 0;
          kk > 7 && (this.ops = new Uint8Array(kk + 1))
        } else this.collDirty = new Map
      }
      _opAt(kk) {
        const Fk = this.ops;
        if (void 0 !== Fk) return Fk[kk];
        const Ik = (3 & kk) << 3;
        return kk < 4 ? this.opsLow >>> Ik & 255 : this.opsHigh >>> Ik & 255
      }
      _opPut(kk, Fk) {
        const Ik = this.ops;
        if (void 0 !== Ik) return void(Ik[kk] = Fk);
        const Xk = (3 & kk) << 3,
          Tk = ~(255 << Xk);
        kk < 4 ? this.opsLow = this.opsLow & Tk | Fk << Xk : this.opsHigh = this.opsHigh & Tk | Fk << Xk
      }
      _markDirty(kk) {
        kk < 32 ? this.dirtyLow |= 1 << kk : this.dirtyHigh |= 1 << kk - 32
      }
      record(kk, Fk) {
        if (this._isSchema) {
          const Ik = this._opAt(kk);
          0 === Ik ? this._opPut(kk, Fk) : (Ik === Tk.DELETE || Ik === Tk.ADD && Fk === Tk.DELETE_AND_ADD) && this._opPut(kk, Tk.DELETE_AND_ADD), this._markDirty(kk)
        } else {
          const Ik = this.collDirty,
            Xk = Ik.get(kk);
          let ik;
          ik = void 0 === Xk ? Fk : Xk === Tk.DELETE || Xk === Tk.ADD && Fk === Tk.DELETE_AND_ADD ? Tk.DELETE_AND_ADD : Xk, Ik.set(kk, ik)
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
          const Ik = this.collDirty;
          Ik.has(kk) && Ik.set(kk, Fk)
        }
      }
      forEach(kk) {
        this.forEachWithCtx(kk, zI)
      }
      forEachWithCtx(kk, Fk) {
        if (this._isSchema) {
          let Ik = this.dirtyLow,
            Xk = this.dirtyHigh;
          const Tk = this.ops;
          if (void 0 !== Tk) {
            for (; 0 !== Ik;) {
              const Xk = Ik & -Ik,
                ik = 31 - Math.clz32(Xk);
              Ik ^= Xk, Fk(kk, ik, Tk[ik])
            }
            for (; 0 !== Xk;) {
              const Ik = Xk & -Xk,
                ik = 31 - Math.clz32(Ik) + 32;
              Xk ^= Ik, Fk(kk, ik, Tk[ik])
            }
          } else {
            const Xk = this.opsLow,
              Tk = this.opsHigh;
            for (; 0 !== Ik;) {
              const ik = Ik & -Ik,
                yk = 31 - Math.clz32(ik);
              Ik ^= ik, Fk(kk, yk, VI(Xk, Tk, yk))
            }
          }
          return
        }
        const Ik = this.collDirty,
          Xk = this.collPureOps;
        if (void 0 !== Xk && Xk.length > 0) {
          let Tk = 0,
            ik = 0;
          for (const [yk, lk] of Ik) {
            for (; Tk < Xk.length && Xk[Tk][0] <= ik;) {
              const Ik = Xk[Tk++][1];
              Fk(kk, -Ik, Ik)
            }
            Fk(kk, yk, lk), ik++
          }
          for (; Tk < Xk.length;) {
            const Ik = Xk[Tk++][1];
            Fk(kk, -Ik, Ik)
          }
        } else
          for (const [Tk, ik] of Ik) Fk(kk, Tk, ik)
      }
      size() {
        return this._isSchema ? MF(this.dirtyLow) + MF(this.dirtyHigh) : this.collDirty.size + (this.collPureOps?.length ?? 0)
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
        const Ik = this.collDirty,
          Xk = new Map,
          ik = !this.paused && !this.isFullStateOnly;
        if (kk > 0)
          for (const [Tk, yk] of Ik) Tk < kk && Xk.set(Tk, yk);
        if (ik)
          for (let yk = 0; yk < Fk; yk++) Xk.set(kk + yk, Tk.ADD);
        for (const [Tk, yk] of Ik) Tk >= kk && Xk.set(Tk + Fk, yk);
        this.collDirty = Xk, ik && this.root?.enqueueChangeTree(this)
      }
      removeAt(kk, Fk) {
        if (this._isSchema) throw new Error("ChangeTree (Schema): removeAt is not supported");
        const Ik = this.collDirty,
          Xk = kk + Fk;
        let Tk = !1;
        for (const yk of Ik.keys())
          if (yk >= Xk) {
            Tk = !0;
            break
          } if (!Tk) {
          for (let Fk = kk; Fk < Xk; Fk++) Ik.delete(Fk);
          return
        }
        const ik = new Map;
        for (const [yk, lk] of Ik) yk < kk ? ik.set(yk, lk) : yk >= Xk && ik.set(yk - Fk, lk);
        this.collDirty = ik
      }
      unshift(kk) {
        this.insertAt(0, kk)
      }
      setRoot(kk) {
        ! function(kk, Fk) {
          kk.root = Fk;
          const Ik = Fk.add(kk);
          yI(kk, kk.parent, kk.parentIndex), Ik && xI(kk, Fk, PI)
        }(this, kk)
      }
      setParent(kk, Fk, Ik) {
        HI(this, kk, Fk, Ik)
      }
      forEachChild(kk) {
        xI(this, kk, JI)
      }
      forEachChildWithCtx(kk, Fk) {
        xI(this, kk, Fk)
      }
      forEachLive(kk) {
        iI(this, kk, TI)
      }
      forEachLiveWithCtx(kk, Fk) {
        iI(this, kk, Fk)
      }
      operation(kk) {
        this.paused || this.isFullStateOnly || (this.recordPure(kk), this.root?.enqueueChangeTree(this))
      }
      _routeAndRecord(kk, Fk, Ik) {
        if (!this.paused && !this.isFieldFullStateOnly(kk)) {
          if (this.isFieldUnreliable(kk) && !this.isNew) {
            const Xk = this.ensureUnreliableRecorder();
            return Ik ? Xk.recordRaw(kk, Fk) : Xk.record(kk, Fk), void this.root?.enqueueUnreliable(this)
          }
          Ik ? this.recordRaw(kk, Fk) : this.record(kk, Fk), this.root?.enqueueChangeTree(this)
        }
      }
      change(kk) {
        let Fk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Tk.ADD;
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
        let Fk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Tk.ADD;
        const Ik = this.paused;
        this.paused = !1;
        try {
          this.change(kk, Fk)
        } finally {
          this.paused = Ik
        }
      }
      getValue(kk) {
        let Fk = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return this.refTarget[Zk](kk, Fk)
      }
      delete(kk, Fk) {
        if (void 0 === kk) {
          try {
            throw new Error(`@colyseus/schema ${this.ref.constructor.name}: trying to delete non-existing index '${kk}'`)
          } catch (yT) {
            console.warn(yT)
          }
          return
        }
        if (this.paused || this.isFieldFullStateOnly(kk)) return this.getValue(kk);
        const Ik = this.isFieldUnreliable(kk) && !this.isNew;
        Ik ? this.ensureUnreliableRecorder().recordDelete(kk, Fk ?? Tk.DELETE) : this.recordDelete(kk, Fk ?? Tk.DELETE);
        const Xk = this.getValue(kk);
        return Xk && Xk[wk] && this.root?.remove(Xk[wk]), Ik ? this.root?.enqueueUnreliable(this) : this.root?.enqueueChangeTree(this), Xk
      }
      endEncode() {
        this.reset(), this.changesNode = void 0, this._isSchema || this.refTarget[xk]?.(), this.isNew = !1
      }
      endEncodeUnreliable() {
        this.unreliableRecorder?.reset(), this.unreliableChangesNode = void 0, this._isSchema || this.refTarget[xk]?.()
      }
      discard() {
        this._isSchema || this.refTarget[xk]?.(), this.reset(), this.unreliableRecorder?.reset()
      }
      discardAll() {
        const kk = kk => {
          if (kk < 0) return;
          const Fk = this.getValue(kk);
          Fk && Fk[wk] && Fk[wk].discardAll()
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
        ! function(kk, Fk, Ik) {
          if (kk.parentRef) {
            if (kk.parentRef[wk] === Fk[wk]) return void(kk._parentIndex = Ik);
            if (II(kk, ((kk, Ik) => kk[wk] === Fk[wk]))) return void(kk._parentIndex = Ik)
          }
          void 0 === kk.parentRef ? (kk.parentRef = Fk, kk._parentIndex = Ik) : (kk.extraParents = {
            ref: kk.parentRef,
            index: kk._parentIndex,
            next: kk.extraParents
          }, kk.parentRef = Fk, kk._parentIndex = Ik)
        }(this, kk, Fk)
      }
      setParentIndex(kk, Fk) {
        ! function(kk, Fk, Ik) {
          if (void 0 !== kk.extraParents)
            if (kk.parentRef[wk] !== Fk[wk]) {
              for (let Xk = kk.extraParents; void 0 !== Xk; Xk = Xk.next)
                if (Xk.ref[wk] === Fk[wk]) return void(Xk.index = Ik)
            } else kk._parentIndex = Ik;
          else kk._parentIndex = Ik
        }(this, kk, Fk)
      }
      removeParent() {
        return function(kk, Fk) {
          if (kk.parentRef && kk.parentRef[wk] === Fk[wk]) return kk.extraParents ? (kk.parentRef = kk.extraParents.ref, kk._parentIndex = kk.extraParents.index, kk.extraParents = kk.extraParents.next) : (kk.parentRef = void 0, kk._parentIndex = void 0), !0;
          let Ik = kk.extraParents,
            Xk = null;
          for (; Ik;) {
            if (Ik.ref[wk] === Fk[wk]) return Xk ? Xk.next = Ik.next : kk.extraParents = Ik.next, !0;
            Xk = Ik, Ik = Ik.next
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
          for (let Ik = kk.extraParents; void 0 !== Ik; Ik = Ik.next)
            if (Fk(Ik.ref, Ik.index)) return {
              ref: Ik.ref,
              index: Ik.index
            }
        }(this, kk)
      }
      hasParent(kk) {
        return II(this, kk)
      }
      indexInParent(kk) {
        return function(kk, Fk) {
          if (kk.parentRef && kk.parentRef[wk] === Fk[wk]) return kk._parentIndex;
          for (let Ik = kk.extraParents; void 0 !== Ik; Ik = Ik.next)
            if (Ik.ref[wk] === Fk[wk]) return Ik.index
        }(this, kk)
      }
      getAllParents() {
        return function(kk) {
          const Fk = [];
          kk.parentRef && Fk.push({
            ref: kk.parentRef,
            index: kk._parentIndex
          });
          let Ik = kk.extraParents;
          for (; Ik;) Fk.push({
            ref: Ik.ref,
            index: Ik.index
          }), Ik = Ik.next;
          return Fk
        }(this)
      }
    }
    class GI {
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
        if (Fk[Hk]) {
          if ("string" !== typeof Fk[Hk])
            for (const [Ik, Xk] of Fk.entries()) Xk && kk(Xk[wk], Fk._collectionIndexes?.[Ik] ?? Ik);
          return
        }
        const Ik = Fk.constructor,
          Xk = Ik?.[Symbol.metadata];
        if (!Xk) return;
        const Tk = Xk[Ek] ?? [];
        for (let ik = 0; ik < Tk.length; ik++) {
          const Ik = Tk[ik],
            yk = Fk[Xk[Ik].name];
          yk && kk(yk[wk], Ik)
        }
      }
      forEachChildWithCtx(kk, Fk) {
        this.forEachChild(((Ik, Xk) => Fk(kk, Ik, Xk)))
      }
      forEachLive() {}
      forEachLiveWithCtx() {}
      forEach() {}
    }

    function pI(kk) {
      let Fk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : kk;
      var Ik;
      Object.defineProperty(kk, wk, {
        value: (Ik = Fk, new GI(Ik)),
        enumerable: !1,
        writable: !0
      })
    }

    function uI(kk, Fk, Ik, Xk, ik, yk, ak) {
      void 0 !== ak ? ak(Fk, Xk, yk) : "string" === typeof Ik ? IF[Ik]?.(Fk, Xk, yk) : null != Ik[Symbol.metadata] ? (IF.number(Fk, Xk[lk], yk), (ik & Tk.ADD) === Tk.ADD && kk.tryEncodeTypeId(Fk, Ik, Xk.constructor, yk)) : IF.number(Fk, Xk[lk], yk)
    }
    const bI = function(kk, Fk, Ik, Xk, ik, yk, lk, ak) {
        if (Fk[yk.offset++] = 255 & (Xk | ik), ik === Tk.DELETE) return;
        const qk = Ik.encDescriptor,
          Lk = Ik.ref,
          tk = Lk[Qk][Xk] ?? Lk[qk.names[Xk]];
        uI(kk, Fk, qk.types[Xk], tk, ik, yk, qk.encoders[Xk])
      },
      RI = function(kk, Fk, Ik, Xk, ik, yk) {
        if (Fk[yk.offset++] = 255 & ik, IF.number(Fk, Xk, yk), ik === Tk.DELETE) return;
        const lk = Ik.ref;
        if ((ik & Tk.ADD) === Tk.ADD) {
          const kk = lk.$indexes.get(Xk);
          IF.string(Fk, kk, yk)
        }
        uI(kk, Fk, lk[Hk], lk[Zk](Xk), ik, yk)
      },
      UI = function(kk, Fk, Ik, Xk, ik, yk) {
        if (Fk[yk.offset++] = 255 & ik, IF.number(Fk, Xk, yk), ik === Tk.DELETE) return;
        const lk = Ik.ref;
        uI(kk, Fk, lk[Hk], lk[Zk](Xk), ik, yk)
      },
      CI = function(kk, Fk, Ik, Xk, ik, yk) {
        const lk = Ik.ref;
        (ik & Tk.ADD) === Tk.ADD && "function" === typeof lk.set ? RI(kk, Fk, Ik, Xk, ik, yk) : UI(kk, Fk, Ik, Xk, ik, yk)
      },
      NI = function(kk, Fk, Ik, Xk, ik, yk, ak, qk) {
        const Lk = Ik.refTarget,
          tk = Lk[Hk],
          jk = "string" !== typeof tk;
        let ek;
        if (qk && Ik.isFiltered && jk) {
          const kk = Lk.tmpItems[Xk];
          if (!kk) return;
          if (ek = kk[lk], ik === Tk.DELETE) ik = Tk.DELETE_BY_REFID;
          else if ((ik & Tk.ADD) === Tk.ADD) ik = Tk.ADD_BY_REFID;
          else if ((ik & Tk.MOVE) === Tk.MOVE) return
        } else if (ik === Tk.DELETE && jk) {
          const kk = Lk.tmpItems[Xk];
          if (!kk) return;
          ek = kk[lk], ik = Tk.DELETE_BY_REFID
        } else ek = Xk;
        if (Fk[yk.offset++] = 255 & ik, IF.number(Fk, ek, yk), ik === Tk.DELETE || ik === Tk.DELETE_BY_REFID) return;
        uI(kk, Fk, tk, Lk[Zk](Xk, ak), ik, yk)
      };

    function cI(kk, Fk, Ik, Xk, ik, yk, ak) {
      const qk = kk.resyncVisited;
      let Lk = qk.get(kk.currentRefId);
      if (void 0 === Lk && qk.set(kk.currentRefId, Lk = new Set), Lk.add(Xk), void 0 !== ik && Ik === Tk.ADD && ik !== yk) {
        const Ik = ik[lk];
        void 0 !== Ik && (kk.root.removeRef(Ik), ak?.push({
          ref: Fk,
          refId: kk.currentRefId,
          op: Tk.DELETE,
          dynamicIndex: Xk,
          value: void 0,
          previousValue: ik
        }))
      }
    }

    function WI(kk, Fk, Ik, Xk) {
      const Tk = Fk[lk];
      if (void 0 === Tk || Ik.has(Tk)) return;
      Ik.add(Tk);
      const ik = Fk.constructor[Symbol.metadata],
        yk = ik?.[Ek];
      if (void 0 === yk) return;
      const ak = ik[pk];
      for (let lk = 0; lk < yk.length; lk++) {
        const Tk = yk[lk];
        if (void 0 !== ak && ak.includes(Tk)) continue;
        const qk = ik[Tk],
          Lk = Fk[qk.name];
        Lk && (OX.is(qk.type) ? WI(kk, Lk, Ik, Xk) : fI(kk, Lk, Ik, Xk))
      }
    }

    function fI(kk, Fk, Ik, Xk) {
      const ik = Fk[Jk] ?? Fk,
        yk = ik[lk];
      if (void 0 === yk || Ik.has(yk)) return;
      Ik.add(yk);
      const ak = kk.resyncVisited.get(yk);
      if (void 0 === ak) return;
      const qk = kk.root;
      ik[ek](ak, ((kk, Ik) => {
        Xk?.push({
          ref: Fk,
          refId: yk,
          op: Tk.DELETE,
          dynamicIndex: Ik,
          value: void 0,
          previousValue: kk
        });
        const ik = kk?.[lk];
        void 0 !== ik && qk.removeRef(ik)
      }), (Fk => {
        OX.isSchema(Fk) && WI(kk, Fk, Ik, Xk)
      }))
    }
    const BI = 1,
      dI = 2,
      YI = 3,
      AI = 4,
      gI = 5;

    function mI(kk, Fk, Ik, Xk, ik, yk, ak, qk, Lk) {
      const tk = kk.root;
      let Zk;
      if ((Fk & Tk.DELETE) === Tk.DELETE) {
        const kk = ik?.[lk];
        void 0 !== kk && tk.removeRef(kk), Fk !== Tk.DELETE_AND_ADD && Ik[jk](Xk), Zk = void 0
      }
      if (Fk === Tk.DELETE);
      else if ("string" === typeof yk) Zk = KF[yk](ak, qk);
      else if (UF(yk)) Zk = function(kk, Fk, Ik) {
        return NF(kk, (0, KF[kk.wire])(Fk, Ik))
      }(yk.quantized, ak, qk);
      else if (OX.is(yk)) {
        const Ik = KF.number(ak, qk);
        if (Zk = tk.refs.get(Ik), (Fk & Tk.ADD) === Tk.ADD) {
          const Xk = kk.getInstanceType(ak, qk, yk);
          Zk || (Zk = kk.createInstanceOfType(Xk)), tk.addRef(Ik, Zk, Zk !== ik || Fk === Tk.DELETE_AND_ADD && Zk === ik)
        }
      } else {
        const Ik = (ek = Object.keys(yk)[0], QF[ek]),
          Xk = KF.number(ak, qk);
        null !== kk.resyncVisited && function(kk, Fk) {
          const Ik = kk.resyncVisited;
          Ik.has(Fk) || Ik.set(Fk, new Set)
        }(kk, Xk);
        const jk = tk.refs.has(Xk) ? ik || tk.refs.get(Xk) : Ik.constructor.initializeForDecoder();
        if (Zk = jk.clone(!0), Zk[Hk] = Object.values(yk)[0], ik) {
          let kk = ik[lk];
          if (void 0 !== kk && Xk !== kk) {
            (Fk & Tk.DELETE) !== Tk.DELETE && tk.removeRef(kk);
            const Ik = ik.entries();
            let Xk;
            for (;
              (Xk = Ik.next()) && !Xk.done;) {
              const [Fk, Ik] = Xk.value;
              "object" === typeof Ik && (kk = Ik[lk]), Lk?.push({
                ref: ik,
                refId: kk,
                op: Tk.DELETE,
                field: Fk,
                value: void 0,
                previousValue: Ik
              })
            }
          }
        }
        tk.addRef(Xk, Zk, jk !== ik || Fk === Tk.DELETE_AND_ADD && jk === ik)
      }
      var ek;
      return Zk
    }
    const hI = function(kk, Fk, Ik, Xk, Tk) {
        const ik = Fk[Ik.offset++],
          yk = Xk.constructor[Symbol.metadata],
          lk = ik >> 6 << 6,
          ak = ik % (lk || 255),
          qk = yk[ak];
        if (void 0 === qk) return console.warn("@colyseus/schema: field not defined at", {
          index: ak,
          ref: Xk.constructor.name,
          metadata: yk
        }), -1;
        const Lk = !0 === qk.deprecated,
          tk = Lk ? void 0 : Xk[Zk](ak),
          jk = mI(kk, lk, Xk, ak, tk, qk.type, Fk, Ik, Tk);
        Lk || (null !== jk && void 0 !== jk && (Xk[qk.name] = jk), tk !== jk && Tk?.push({
          ref: Xk,
          refId: kk.currentRefId,
          op: lk,
          field: qk.name,
          value: jk,
          previousValue: tk
        }))
      },
      rI = function(kk, Fk, Ik, Xk, ik) {
        const yk = Xk[Jk] ?? Xk,
          lk = Fk[Ik.offset++];
        if (lk === Tk.CLEAR) return kk.removeChildRefs(yk, ik), void yk.clear();
        const ak = KF.number(Fk, Ik),
          qk = yk[Hk],
          Lk = yk.constructor.COLLECTION_KIND;
        let tk;
        (lk & Tk.ADD) === Tk.ADD ? Lk === BI ? (tk = KF.string(Fk, Ik), yk.setIndex(ak, tk)) : tk = ak : tk = yk.getIndex(ak);
        const jk = yk[Zk](ak),
          ek = mI(kk, lk, Xk, ak, jk, qk, Fk, Ik, ik);
        if (null !== kk.resyncVisited && cI(kk, Xk, lk, tk, jk, ek, ik), null !== ek && void 0 !== ek) switch (Lk) {
          case BI:
            yk.$items.set(tk, ek);
            break;
          case dI:
            yk.$setAt(ak, ek, null !== kk.resyncVisited && lk === Tk.ADD ? Tk.REPLACE : lk);
            break;
          case YI:
          case AI:
          case gI:
            yk.$items.has(ak) || (yk.$items.set(ak, ek), "number" === typeof yk.$refId && ak >= yk.$refId && (yk.$refId = ak + 1));
            break;
          default:
            console.warn(`@colyseus/schema: missing COLLECTION_KIND on ${yk.constructor?.name} \u2014 item at index ${ak} was not stored.`)
        }
        jk !== ek && ik?.push({
          ref: Xk,
          refId: kk.currentRefId,
          op: lk,
          dynamicIndex: tk,
          value: ek,
          previousValue: jk
        })
      },
      DI = function(kk, Fk, Ik, Xk, ik) {
        const yk = Xk[Jk] ?? Xk;
        let lk, ak = Fk[Ik.offset++];
        if (ak === Tk.CLEAR) return kk.removeChildRefs(yk, ik), void yk.clear();
        if (ak === Tk.REVERSE) return void yk.items.reverse();
        if (ak === Tk.DELETE_BY_REFID) {
          const ak = KF.number(Fk, Ik),
            qk = kk.root.refs.get(ak);
          if (void 0 === qk) return;
          if (kk.root.removeRef(ak), lk = yk.findIndex((kk => kk === qk)), -1 === lk) return;
          return yk[jk](lk), void ik?.push({
            ref: Xk,
            refId: kk.currentRefId,
            op: Tk.DELETE,
            dynamicIndex: lk,
            value: void 0,
            previousValue: qk
          })
        }
        if (ak === Tk.ADD_BY_REFID) {
          const Xk = KF.number(Fk, Ik),
            Tk = kk.root.refs.get(Xk);
          Tk && (lk = yk.findIndex((kk => kk === Tk))), -1 !== lk && void 0 !== lk || (lk = yk.length)
        } else lk = KF.number(Fk, Ik);
        const qk = yk[Hk];
        let Lk = lk;
        const tk = yk.items[lk],
          Zk = mI(kk, ak, Xk, lk, tk, qk, Fk, Ik, ik);
        null !== kk.resyncVisited && cI(kk, Xk, ak, lk, tk, Zk, ik), null !== Zk && void 0 !== Zk && Zk !== tk && yk.$setAt(lk, Zk, null !== kk.resyncVisited && ak === Tk.ADD ? Tk.REPLACE : ak), tk !== Zk && ik?.push({
          ref: Xk,
          refId: kk.currentRefId,
          op: ak,
          dynamicIndex: Lk,
          value: Zk,
          previousValue: tk
        })
      };
    class MI extends Error {}

    function kX(kk, Fk, Ik, Xk) {
      if (!(kk instanceof Fk)) throw new MI(`a '${Fk.name}' was expected, but '${kk&&kk.constructor.name}' was provided in ${Ik.constructor.name}#${Xk}`)
    }
    const FX = (kk, Fk) => {
        const Ik = kk.toString(),
          Xk = Fk.toString();
        return Ik < Xk ? -1 : Ik > Xk ? 1 : 0
      },
      IX = {
        get: (kk, Fk) => "symbol" === typeof Fk || isNaN(Fk) ? Reflect.get(kk, Fk) : kk.items[Fk],
        set: (kk, Fk, Ik) => {
          if ("symbol" !== typeof Fk && !isNaN(Fk)) {
            if (void 0 === Ik || null === Ik) kk.$deleteAt(Fk);
            else {
              let Xk;
              if (Ik[wk]) {
                kX(Ik, kk[Hk], kk, Fk);
                const ik = kk.items[Fk];
                kk.isMovingItems ? (Xk = kk.$wireIndex(Number(Fk)), void 0 !== ik ? Ik[wk].isNew ? kk[wk].indexedOperation(Xk, Tk.MOVE_AND_ADD) : (kk[wk].getChange(Xk) & Tk.DELETE) === Tk.DELETE ? kk[wk].indexedOperation(Xk, Tk.DELETE_AND_MOVE) : kk[wk].indexedOperation(Xk, Tk.MOVE) : Ik[wk].isNew && kk[wk].indexedOperation(Xk, Tk.ADD), Ik[wk].setParent(kk, kk[wk].root, Xk)) : Xk = kk.$changeAt(Number(Fk), Ik), void 0 !== ik && ik[wk].root?.remove(ik[wk])
              } else Xk = kk.$changeAt(Number(Fk), Ik);
              kk.items[Fk] = Ik, void 0 !== Xk && (kk.tmpItems[Xk] = Ik)
            }
            return !0
          }
          return Reflect.set(kk, Fk, Ik)
        },
        deleteProperty: (kk, Fk) => ("number" === typeof Fk ? kk.$deleteAt(Fk) : delete kk[Fk], !0),
        has: (kk, Fk) => "symbol" === typeof Fk || isNaN(Number(Fk)) ? Reflect.has(kk, Fk) : Reflect.has(kk.items, Fk)
      };
    class XX {
      [wk];
      [lk];
      [Jk];
      [Hk];
      items = [];
      tmpItems = [];
      deletedIndexes = [];
      isMovingItems = !1;
      _needsCompaction = !1;
      static[qk] = NI;
      static[Lk] = DI;
      static COLLECTION_KIND = dI;
      static[tk](kk, Fk, Ik) {
        if (!Ik) return !0;
        const Xk = kk[Jk] ?? kk;
        return "string" === typeof Xk[Hk] || Ik.isChangeTreeVisible(Xk.tmpItems[Fk]?.[wk])
      }
      static is(kk) {
        return Array.isArray(kk) || void 0 !== kk.array
      }
      static from(kk) {
        return new XX(...Array.from(kk))
      }
      constructor() {
        this[Hk] = void 0, this[Jk] = this;
        const kk = new Proxy(this, IX);
        return Object.defineProperty(this, wk, {
          value: new nI(kk, this),
          enumerable: !1,
          writable: !0
        }), arguments.length > 0 && this.push(...arguments), kk
      }
      static initializeForDecoder() {
        const kk = Object.create(XX.prototype);
        kk.items = [], kk.isMovingItems = !1, kk._needsCompaction = !1, kk[Hk] = void 0, kk[Jk] = kk;
        const Fk = new Proxy(kk, IX);
        return pI(kk, Fk), Fk
      }
      set length(kk) {
        0 === kk ? this.clear() : kk < this.items.length ? this.splice(kk, this.length - kk) : console.warn("ArraySchema: can't set .length to a higher value than its length.")
      }
      get length() {
        return this.items.length
      }
      pauseTracking() {
        this[wk].pause()
      }
      resumeTracking() {
        this[wk].resume()
      }
      untracked(kk) {
        return this[wk].untracked(kk)
      }
      get isTrackingPaused() {
        return this[wk].paused
      }
      push() {
        const kk = this[Jk],
          Fk = kk.items,
          Ik = kk.tmpItems,
          Xk = kk[wk],
          ik = kk[Hk];
        let yk = Ik.length;
        for (let lk = 0, ak = arguments.length; lk < ak; lk++, yk++) {
          const ak = lk < 0 || arguments.length <= lk ? void 0 : arguments[lk];
          if (void 0 === ak || null === ak) return;
          "object" === typeof ak && ik && kX(ak, ik, kk, lk), Xk.indexedOperation(yk, Tk.ADD), Fk.push(ak), Ik.push(ak), ak[wk]?.setParent(this, Xk.root, yk)
        }
        return yk
      }
      pop() {
        const kk = this[Jk],
          Fk = kk.tmpItems,
          Ik = kk.deletedIndexes;
        let Xk = -1;
        for (let ik = Fk.length - 1; ik >= 0; ik--)
          if (!0 !== Ik[ik]) {
            Xk = ik;
            break
          } if (Xk < 0) return;
        const Tk = kk.$isUnsentAdd(Xk);
        return kk[wk].delete(Xk), Tk ? kk.$cancelAdd(Xk) : Ik[Xk] = !0, kk.items.pop()
      }
      at(kk) {
        return kk < 0 && (kk += this.length), this.items[kk]
      }
      $wireIndex(kk) {
        const Fk = this.deletedIndexes;
        if (0 === Fk.length) return kk;
        const Ik = this.tmpItems;
        let Xk = 0;
        for (let Tk = 0; Tk < Ik.length; Tk++)
          if (!0 !== Fk[Tk]) {
            if (Xk === kk) return Tk;
            Xk++
          } return Ik.length + (kk - Xk)
      }
      $isUnsentAdd(kk) {
        const Fk = this[wk];
        return 0 === (576 & Fk.flags) && !Fk.paused && "string" !== typeof this[Hk] && Fk.operationAt(kk) === Tk.ADD
      }
      $cancelAdd(kk) {
        let Fk = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        const Ik = this[wk],
          Xk = this.tmpItems[kk];
        this.tmpItems.splice(kk, 1), this.deletedIndexes.length > 0 && this.deletedIndexes.splice(kk, 1), Ik.removeAt(kk, 1);
        const Tk = Xk?.[wk];
        void 0 !== Tk && void 0 === Tk.root && Tk.removeParent(this), Fk && this.$reindexChildren(kk)
      }
      $reindexChildren(kk, Fk) {
        if (!this[wk].hasFilteredFields) return;
        if ("string" === typeof this[Hk]) return;
        const Ik = this.tmpItems,
          Xk = Ik.length;
        if (void 0 !== Fk)
          for (; kk < Xk && Ik[kk] === Fk[kk];) kk++;
        for (let Tk = kk; Tk < Xk; Tk++) Ik[Tk]?.[wk]?.setParentIndex(this, Tk)
      }
      $changeAt(kk, Fk) {
        if (void 0 === Fk || null === Fk) return void console.error("ArraySchema items cannot be null nor undefined; Use `splice(index, 1)` instead.");
        if (this.items[kk] === Fk) return;
        const Ik = void 0 !== this.items[kk] ? "object" === typeof Fk ? Tk.DELETE_AND_ADD : Tk.REPLACE : Tk.ADD,
          Xk = this.$wireIndex(kk),
          ik = this[wk];
        return ik.change(Xk, Ik), Fk[wk]?.setParent(this, ik.root, Xk), Xk
      }
      $deleteAt(kk, Fk) {
        this[wk].delete(this.$wireIndex(kk), Fk)
      }
      $setAt(kk, Fk, Ik) {
        Ik === Tk.ADD && void 0 !== this.items[kk] ? this.items.splice(kk, 0, Fk) : Ik === Tk.DELETE_AND_MOVE ? (this.items.splice(kk, 1), this.items[kk] = Fk) : (kk > this.items.length && (this._needsCompaction = !0), this.items[kk] = Fk)
      }
      clear() {
        const kk = this[Jk];
        if (0 === kk.items.length) return;
        const Fk = kk[wk];
        Fk.forEachChild(((kk, Ik) => {
          Fk.root?.remove(kk)
        })), Fk.discard(), Fk.operation(Tk.CLEAR), kk.items.length = 0, kk.tmpItems.length = 0
      } [Pk]() {
        const kk = this[Jk] ?? this,
          Fk = kk[wk];
        if (Fk.isStreamCollection) throw new Error("@colyseus/schema: cannot reset a streamed ArraySchema (pooling not supported).");
        const Ik = kk.items;
        for (let Xk = 0; Xk < Ik.length; Xk++) Ik[Xk]?.[Pk]?.();
        kk.items.length = 0, kk.tmpItems.length = 0, kk.deletedIndexes.length = 0, Fk.recycle(), kk[lk] = void 0
      }
      concat() {
        return new XX(...this.items.concat(...arguments))
      }
      join(kk) {
        return this.items.join(kk)
      }
      reverse() {
        const kk = this[Jk],
          Fk = kk[wk];
        if (Fk.has() || kk.deletedIndexes.length > 0) {
          const Fk = kk.items.slice().reverse();
          return this.clear(), this.push(...Fk), this
        }
        return Fk.operation(Tk.REVERSE), kk.items.reverse(), kk.tmpItems.reverse(), kk.$reindexChildren(0), this
      }
      shift() {
        const kk = this[Jk],
          Fk = kk.items;
        if (0 === Fk.length) return;
        const Ik = kk[wk],
          Xk = kk.deletedIndexes;
        let ik = 0;
        for (; !0 === Xk[ik];) ik++;
        const yk = kk.$isUnsentAdd(ik);
        return Ik.delete(ik, Tk.DELETE), yk ? kk.$cancelAdd(ik) : Xk[ik] = !0, Fk.shift()
      }
      slice(kk, Fk) {
        const Ik = new XX;
        return Ik.push(...this.items.slice(kk, Fk)), Ik
      }
      sort() {
        let kk = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : FX;
        const Fk = this[Jk];
        Fk.isMovingItems = !0;
        const Ik = Fk[wk];
        return Fk.items.sort(kk).forEach(((kk, Fk) => Ik.change(Fk, Tk.REPLACE))), Fk.tmpItems.sort(kk), Fk.$reindexChildren(0), Fk.isMovingItems = !1, this
      }
      splice(kk, Fk) {
        const Ik = this[Jk],
          Xk = Ik[wk],
          ik = Ik.items,
          yk = Ik.tmpItems,
          lk = Ik.deletedIndexes,
          ak = ik.length,
          qk = yk.length;
        for (var Lk = arguments.length, tk = new Array(Lk > 2 ? Lk - 2 : 0), Zk = 2; Zk < Lk; Zk++) tk[Zk - 2] = arguments[Zk];
        const jk = tk.length,
          ek = [];
        for (let Tk = 0; Tk < qk; Tk++) !0 !== lk[Tk] && ek.push(Tk);
        let Hk;
        if (ak > kk) {
          void 0 === Fk && (Fk = ak - kk);
          for (let ik = kk; ik < kk + Fk; ik++) {
            const kk = ek[ik],
              Fk = Ik.$isUnsentAdd(kk);
            Xk.delete(kk, Tk.DELETE), Fk ? (Hk ??= []).push(kk) : lk[kk] = !0
          }
        } else Fk = 0;
        if (jk > 0) {
          const ik = ek[kk] ?? ak,
            qk = Math.min(jk, Fk);
          for (let kk = 0; kk < qk; kk++) {
            const Fk = ik + kk;
            let Ik;
            const ak = void 0 !== Hk ? Hk.indexOf(Fk) : -1; - 1 !== ak ? (Hk.splice(ak, 1), Ik = Tk.ADD) : Ik = lk[Fk] ? Tk.DELETE_AND_ADD : Tk.ADD, Xk.indexedOperation(Fk, Ik), yk[Fk] = tk[kk], lk[Fk] = !1, tk[kk][wk]?.setParent(this, Xk.root, Fk)
          }
          const Lk = jk - qk;
          if (Lk > 0) {
            const kk = ik + qk;
            Xk.insertAt(kk, Lk);
            for (let Fk = 0; Fk < Lk; Fk++) tk[qk + Fk][wk]?.setParent(this, Xk.root, kk + Fk);
            lk.length > 0 && lk.splice(kk, 0, ...new Array(Lk).fill(!1)), yk.splice(kk, 0, ...tk.slice(qk)), Ik.$reindexChildren(kk + Lk)
          }
        }
        if (void 0 !== Hk && Hk.length > 0) {
          for (let kk = Hk.length - 1; kk >= 0; kk--) Ik.$cancelAdd(Hk[kk], !1);
          Ik.$reindexChildren(Hk[0])
        }
        return Xk.root?.enqueueChangeTree(Xk), ik.splice(kk, Fk, ...tk)
      }
      unshift() {
        const kk = this[Jk],
          Fk = kk[wk];
        Fk.unshift(arguments.length);
        for (let Xk = 0; Xk < arguments.length; Xk++)(Xk < 0 || arguments.length <= Xk ? void 0 : arguments[Xk])?.[wk]?.setParent(this, Fk.root, Xk);
        const Ik = kk.deletedIndexes;
        return Ik.length > 0 && Ik.unshift(...new Array(arguments.length).fill(!1)), kk.tmpItems.unshift(...arguments), kk.$reindexChildren(arguments.length), kk.items.unshift(...arguments)
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
      fill(kk, Fk, Ik) {
        throw new Error("ArraySchema#fill() not implemented")
      }
      copyWithin(kk, Fk, Ik) {
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
        return XX
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
        for (var kk = arguments.length, Fk = new Array(kk), Ik = 0; Ik < kk; Ik++) Fk[Ik] = arguments[Ik];
        return this.items.findLastIndex.apply(this.items, arguments)
      }
      with(kk, Fk) {
        const Ik = this.items.slice();
        return kk < 0 && (kk += this.length), Ik[kk] = Fk, new XX(...Ik)
      }
      toReversed() {
        return this.items.slice().reverse()
      }
      toSorted(kk) {
        return this.items.slice().sort(kk)
      }
      toSpliced(kk, Fk) {
        for (var Ik = arguments.length, Xk = new Array(Ik > 2 ? Ik - 2 : 0), Tk = 2; Tk < Ik; Tk++) Xk[Tk - 2] = arguments[Tk];
        const ik = this.items.slice();
        return ik.splice.apply(ik, arguments), ik
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
      } [Zk](kk) {
        let Fk = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        const Ik = this[Jk] ?? this;
        return Fk || Ik.deletedIndexes[kk] ? Ik.items[kk] : Ik.tmpItems[kk] || Ik.items[kk]
      } [jk](kk) {
        const Fk = this[Jk] ?? this;
        Fk.items[kk] = void 0, Fk._needsCompaction = !0
      } [xk]() {
        const kk = this.tmpItems;
        this.tmpItems = this.items.slice(), this.deletedIndexes.length > 0 && (this.$reindexChildren(0, kk), this.deletedIndexes.length = 0)
      } [Kk]() {
        const kk = this[Jk] ?? this;
        kk._needsCompaction && (kk._needsCompaction = !1, kk.items = kk.items.filter((kk => void 0 !== kk)))
      } [ek](kk, Fk, Ik) {
        const Xk = this[Jk] ?? this,
          Tk = Xk.items;
        let ik = !1;
        for (let yk = 0; yk < Tk.length; yk++) {
          const lk = Tk[yk];
          kk.has(yk) ? Ik(lk) : (ik = !0, Fk(lk, yk), Xk[jk](yk))
        }
        ik && Xk[Kk]()
      }
      toArray() {
        return this.items.slice(0)
      }
      toJSON() {
        return this.toArray().map((kk => "function" === typeof kk.toJSON ? kk.toJSON() : kk))
      }
      clone(kk) {
        let Fk;
        return kk ? (Fk = new XX, Fk.push(...this.items)) : Fk = new XX(...this.map((kk => kk[wk] ? kk.clone() : kk))), Fk
      }
    }
    VF("array", {
      constructor: XX
    });
    class TX {
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
    class iX {
      [wk];
      [lk];
      childType;
      [Hk];
      $items = new Map;
      journal = new TX;
      _stream;
      get maxPerTick() {
        return this._stream?.maxPerTick ?? 32
      }
      set maxPerTick(kk) {
        (this._stream ??= oF()).maxPerTick = kk
      }
      get priority() {
        return this._stream?.priority
      }
      set priority(kk) {
        (this._stream ??= oF()).priority = kk
      }
      get $indexes() {
        return this.journal.keyByIndex
      }
      get _collectionIndexes() {
        return this.journal.indexByKey
      }
      static[qk] = RI;
      static[Lk] = rI;
      static COLLECTION_KIND = BI;
      static[tk](kk, Fk, Ik) {
        if (!Ik || "string" === typeof kk[Hk]) return !0;
        const Xk = kk[Zk](Fk) ?? kk.journal.snapshotAt(Fk);
        return Ik.isChangeTreeVisible(Xk[wk])
      }
      static is(kk) {
        return void 0 !== kk.map
      }
      constructor(kk) {
        if (Object.defineProperty(this, wk, {
            value: new nI(this),
            enumerable: !1,
            writable: !0
          }), this[Hk] = void 0, kk)
          if (kk instanceof Map || kk instanceof iX) kk.forEach(((kk, Fk) => this.set(Fk, kk)));
          else
            for (const Fk in kk) this.set(Fk, kk[Fk])
      }
      static initializeForDecoder() {
        const kk = Object.create(iX.prototype);
        return kk.$items = new Map, kk.journal = new TX, kk[Hk] = void 0, pI(kk), kk
      } [Symbol.iterator]() {
        return this.$items[Symbol.iterator]()
      }
      get[Symbol.toStringTag]() {
        return this.$items[Symbol.toStringTag]
      }
      static get[Symbol.species]() {
        return iX
      }
      set(kk, Fk) {
        if (void 0 === Fk || null === Fk) throw new Error(`MapSchema#set('${kk}', ${Fk}): trying to set ${Fk} value on '${kk}'.`);
        "object" === typeof Fk && this[Hk] && kX(Fk, this[Hk], this, kk), kk = kk.toString();
        const Ik = this[wk],
          Xk = void 0 !== Fk[wk],
          ik = this.journal;
        let yk, lk = ik.indexOf(kk);
        if (void 0 !== lk) {
          yk = Tk.REPLACE;
          const Ik = this.$items.get(kk);
          if (Ik === Fk) return;
          Xk && (yk = Tk.DELETE_AND_ADD, void 0 !== Ik && Ik[wk].root?.remove(Ik[wk])), void 0 !== ik.snapshotAt(lk) && ik.forgetSnapshot(lk)
        } else lk = ik.assign(kk), yk = Tk.ADD;
        return this.$items.set(kk, Fk), yk === Tk.ADD && Ik.isStreamCollection ? void 0 !== Ik.root && EF(this, Ik.root, lk) : Ik.change(lk, yk), Xk && Fk[wk].setParent(this, Ik.root, lk), this
      }
      get(kk) {
        return this.$items.get(kk)
      }
      getOrInsert(kk, Fk) {
        return this.$items.has(kk) ? this.$items.get(kk) : (this.set(kk, Fk), Fk)
      }
      getOrInsertComputed(kk, Fk) {
        if (this.$items.has(kk)) return this.$items.get(kk);
        const Ik = Fk(kk);
        return this.set(kk, Ik), Ik
      }
      delete(kk) {
        if (!this.$items.has(kk)) return !1;
        const Fk = this.journal.indexOf(kk),
          Ik = this.$items.get(kk),
          Xk = this[wk];
        if (Xk.isStreamCollection) {
          const Tk = Xk.root;
          let ik = !1;
          return void 0 !== Tk && (ik = OF(this, Tk, this[lk], Fk)), void 0 !== Ik?.[wk] && Tk?.remove(Ik[wk]), this.$items.delete(kk), ik || this.journal.snapshot(Fk, Ik), !0
        }
        return this.journal.snapshot(Fk, Ik), Xk.delete(Fk), this.$items.delete(kk)
      }
      clear() {
        const kk = this[wk];
        kk.discard(), kk.forEachChild(((Fk, Ik) => {
          kk.root?.remove(Fk)
        })), this.journal.reset(), this.$items.clear(), kk.operation(Tk.CLEAR)
      } [Pk]() {
        const kk = this[wk];
        if (kk.isStreamCollection) throw new Error("@colyseus/schema: cannot reset a streamed MapSchema (pooling not supported).");
        this.$items.forEach((kk => kk?.[Pk]?.())), this.$items.clear(), this.journal.reset(), kk.recycle(), this[lk] = void 0
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
        this[wk].pause()
      }
      resumeTracking() {
        this[wk].resume()
      }
      untracked(kk) {
        return this[wk].untracked(kk)
      }
      get isTrackingPaused() {
        return this[wk].paused
      }
      setIndex(kk, Fk) {
        this.journal.setIndex(kk, Fk)
      }
      getIndex(kk) {
        return this.journal.keyOf(kk)
      } [Zk](kk) {
        const Fk = this.journal.keyOf(kk);
        return void 0 !== Fk ? this.$items.get(Fk) : void 0
      } [jk](kk) {
        const Fk = this.journal.keyOf(kk);
        void 0 !== Fk && (this.$items.delete(Fk), this.journal.keyByIndex.delete(kk))
      } [ek](kk, Fk, Ik) {
        let Xk = null;
        if (this.$items.forEach(((Tk, ik) => {
            kk.has(ik) ? Ik(Tk) : ((Xk ??= new Set).add(ik), Fk(Tk, ik))
          })), null !== Xk) {
          Xk.forEach((kk => {
            this.$items.delete(kk), delete this.journal.indexByKey[kk]
          }));
          const kk = [];
          this.journal.keyByIndex.forEach(((Fk, Ik) => {
            Xk.has(Fk) && kk.push(Ik)
          }));
          for (let Fk = 0; Fk < kk.length; Fk++) this.journal.keyByIndex.delete(kk[Fk])
        }
      } [xk]() {
        this.journal.cleanupAfterEncode()
      }
      _dropView(kk) {
        uF(this, kk)
      }
      _unregister() {}
      toJSON() {
        return Object.fromEntries(Array.from(this, (kk => {
          let [Fk, Ik] = kk;
          return [Fk, "function" === typeof Ik.toJSON ? Ik.toJSON() : Ik]
        })))
      }
      clone(kk) {
        let Fk;
        return kk ? Fk = Object.assign(new iX, this) : (Fk = new iX, this.forEach(((kk, Ik) => {
          kk[wk] ? Fk.set(Ik, kk.clone()) : Fk.set(Ik, kk)
        }))), Fk
      }
    }
    VF("map", {
      constructor: iX
    });
    class yX {
      [wk];
      [lk];
      [Hk];
      $items = new Map;
      deletedItems = {};
      $refId = 0;
      _stream;
      get maxPerTick() {
        return this._stream?.maxPerTick ?? 32
      }
      set maxPerTick(kk) {
        (this._stream ??= oF()).maxPerTick = kk
      }
      get priority() {
        return this._stream?.priority
      }
      set priority(kk) {
        (this._stream ??= oF()).priority = kk
      }
      static[qk] = UI;
      static[Lk] = rI;
      static COLLECTION_KIND = AI;
      static[tk](kk, Fk, Ik) {
        return !Ik || "string" === typeof kk[Hk] || Ik.isChangeTreeVisible((kk[Zk](Fk) ?? kk.deletedItems[Fk])[wk])
      }
      static is(kk) {
        return void 0 !== kk.collection
      }
      constructor(kk) {
        Object.defineProperty(this, wk, {
          value: new nI(this),
          enumerable: !1,
          writable: !0
        }), this[Hk] = void 0, kk && kk.forEach((kk => this.add(kk)))
      }
      static initializeForDecoder() {
        const kk = Object.create(yX.prototype);
        return kk.$items = new Map, kk.deletedItems = {}, kk.$refId = 0, kk[Hk] = void 0, pI(kk), kk
      }
      add(kk) {
        const Fk = this.$refId++,
          Ik = this[wk];
        return this.$items.set(Fk, kk), Ik.isStreamCollection ? void 0 !== Ik.root && EF(this, Ik.root, Fk) : Ik.change(Fk), void 0 !== kk[wk] && kk[wk].setParent(this, Ik.root, Fk), Fk
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
        let Ik, Xk;
        for (;
          (Xk = Fk.next()) && !Xk.done;)
          if (kk === Xk.value[1]) {
            Ik = Xk.value[0];
            break
          } if (void 0 === Ik) return !1;
        const Tk = this[wk];
        if (Tk.isStreamCollection) {
          const kk = Tk.root,
            Fk = this.$items.get(Ik);
          return void 0 !== kk && OF(this, kk, this[lk], Ik), void 0 !== Fk?.[wk] && kk?.remove(Fk[wk]), this.deletedItems[Ik] = Fk, this.$items.delete(Ik)
        }
        return this.deletedItems[Ik] = Tk.delete(Ik), this.$items.delete(Ik)
      }
      clear() {
        const kk = this[wk];
        kk.discard(), kk.forEachChild(((Fk, Ik) => {
          kk.root?.remove(Fk)
        })), this.$items.clear(), kk.operation(Tk.CLEAR)
      } [Pk]() {
        const kk = this[wk];
        if (kk.isStreamCollection) throw new Error("@colyseus/schema: cannot reset a streamed CollectionSchema (pooling not supported).");
        this.$items.forEach((kk => kk?.[Pk]?.())), this.$items.clear(), this.deletedItems = {}, this.$refId = 0, kk.recycle(), this[lk] = void 0
      }
      has(kk) {
        return Array.from(this.$items.values()).some((Fk => Fk === kk))
      }
      forEach(kk) {
        this.$items.forEach(((Fk, Ik, Xk) => kk(Fk, Ik, this)))
      }
      values() {
        return this.$items.values()
      }
      get size() {
        return this.$items.size
      }
      pauseTracking() {
        this[wk].pause()
      }
      resumeTracking() {
        this[wk].resume()
      }
      untracked(kk) {
        return this[wk].untracked(kk)
      }
      get isTrackingPaused() {
        return this[wk].paused
      } [Symbol.iterator]() {
        return this.$items.values()
      }
      setIndex(kk, Fk) {}
      getIndex(kk) {
        return kk
      } [Zk](kk) {
        return this.$items.get(kk)
      } [jk](kk) {
        this.$items.delete(kk)
      } [ek](kk, Fk, Ik) {
        let Xk = null;
        if (this.$items.forEach(((Tk, ik) => {
            kk.has(ik) ? Ik(Tk) : ((Xk ??= []).push(ik), Fk(Tk, ik))
          })), null !== Xk)
          for (let Tk = 0; Tk < Xk.length; Tk++) this[jk](Xk[Tk])
      } [xk]() {
        for (const kk in this.deletedItems) delete this.deletedItems[kk]
      }
      _dropView(kk) {
        uF(this, kk)
      }
      _unregister() {}
      toArray() {
        return Array.from(this.$items.values())
      }
      toJSON() {
        const kk = [];
        return this.forEach(((Fk, Ik) => {
          kk.push("function" === typeof Fk.toJSON ? Fk.toJSON() : Fk)
        })), kk
      }
      clone(kk) {
        let Fk;
        return kk ? Fk = Object.assign(new yX, this) : (Fk = new yX, this.forEach((kk => {
          kk[wk] ? Fk.add(kk.clone()) : Fk.add(kk)
        }))), Fk
      }
    }
    VF("collection", {
      constructor: yX
    });
    class lX {
      [wk];
      [lk];
      [Hk];
      $items = new Map;
      deletedItems = {};
      $refId = 0;
      _stream;
      get maxPerTick() {
        return this._stream?.maxPerTick ?? 32
      }
      set maxPerTick(kk) {
        (this._stream ??= oF()).maxPerTick = kk
      }
      get priority() {
        return this._stream?.priority
      }
      set priority(kk) {
        (this._stream ??= oF()).priority = kk
      }
      static[qk] = UI;
      static[Lk] = rI;
      static COLLECTION_KIND = YI;
      static[tk](kk, Fk, Ik) {
        return !Ik || "string" === typeof kk[Hk] || Ik.isVisible((kk[Zk](Fk) ?? kk.deletedItems[Fk])[wk])
      }
      static is(kk) {
        return void 0 !== kk.set
      }
      constructor(kk) {
        Object.defineProperty(this, wk, {
          value: new nI(this),
          enumerable: !1,
          writable: !0
        }), this[Hk] = void 0, kk && kk.forEach((kk => this.add(kk)))
      }
      static initializeForDecoder() {
        const kk = Object.create(lX.prototype);
        return kk.$items = new Map, kk.deletedItems = {}, kk.$refId = 0, kk[Hk] = void 0, pI(kk), kk
      }
      add(kk) {
        if (this.has(kk)) return !1;
        const Fk = this.$refId++,
          Ik = this[wk];
        return this.$items.set(Fk, kk), Ik.isStreamCollection ? void 0 !== Ik.root && EF(this, Ik.root, Fk) : Ik.change(Fk, Tk.ADD), void 0 !== kk[wk] && kk[wk].setParent(this, Ik.root, Fk), Fk
      }
      entries() {
        return this.$items.entries()
      }
      delete(kk) {
        const Fk = this.$items.entries();
        let Ik, Xk;
        for (;
          (Xk = Fk.next()) && !Xk.done;)
          if (kk === Xk.value[1]) {
            Ik = Xk.value[0];
            break
          } if (void 0 === Ik) return !1;
        const Tk = this[wk];
        if (Tk.isStreamCollection) {
          const kk = Tk.root,
            Fk = this.$items.get(Ik);
          return void 0 !== kk && OF(this, kk, this[lk], Ik), void 0 !== Fk?.[wk] && kk?.remove(Fk[wk]), this.deletedItems[Ik] = Fk, this.$items.delete(Ik)
        }
        return this.deletedItems[Ik] = Tk.delete(Ik), this.$items.delete(Ik)
      }
      clear() {
        const kk = this[wk];
        kk.discard(), this.$items.clear(), kk.operation(Tk.CLEAR)
      } [Pk]() {
        const kk = this[wk];
        if (kk.isStreamCollection) throw new Error("@colyseus/schema: cannot reset a streamed SetSchema (pooling not supported).");
        this.$items.forEach((kk => kk?.[Pk]?.())), this.$items.clear(), this.deletedItems = {}, this.$refId = 0, kk.recycle(), this[lk] = void 0
      }
      has(kk) {
        const Fk = this.$items.values();
        let Ik, Xk = !1;
        for (;
          (Ik = Fk.next()) && !Ik.done;)
          if (kk === Ik.value) {
            Xk = !0;
            break
          } return Xk
      }
      forEach(kk) {
        this.$items.forEach(((Fk, Ik, Xk) => kk(Fk, Ik, this)))
      }
      values() {
        return this.$items.values()
      }
      get size() {
        return this.$items.size
      }
      pauseTracking() {
        this[wk].pause()
      }
      resumeTracking() {
        this[wk].resume()
      }
      untracked(kk) {
        return this[wk].untracked(kk)
      }
      get isTrackingPaused() {
        return this[wk].paused
      } [Symbol.iterator]() {
        return this.$items.values()
      }
      setIndex(kk, Fk) {}
      getIndex(kk) {
        return kk
      } [Zk](kk) {
        return this.$items.get(kk)
      } [jk](kk) {
        this.$items.delete(kk)
      } [ek](kk, Fk, Ik) {
        let Xk = null;
        if (this.$items.forEach(((Tk, ik) => {
            kk.has(ik) ? Ik(Tk) : ((Xk ??= []).push(ik), Fk(Tk, ik))
          })), null !== Xk)
          for (let Tk = 0; Tk < Xk.length; Tk++) this[jk](Xk[Tk])
      } [xk]() {
        for (const kk in this.deletedItems) delete this.deletedItems[kk]
      }
      _dropView(kk) {
        uF(this, kk)
      }
      _unregister() {}
      toArray() {
        return Array.from(this.$items.values())
      }
      toJSON() {
        const kk = [];
        return this.forEach(((Fk, Ik) => {
          kk.push("function" === typeof Fk.toJSON ? Fk.toJSON() : Fk)
        })), kk
      }
      clone(kk) {
        let Fk;
        return kk ? Fk = Object.assign(new lX, this) : (Fk = new lX, this.forEach((kk => {
          kk[wk] ? Fk.add(kk.clone()) : Fk.add(kk)
        }))), Fk
      }
    }
    VF("set", {
      constructor: lX
    });
    class aX {
      [wk];
      [lk];
      [Hk];
      $items = new Map;
      $nextPosition = 0;
      _itemIndex = new Map;
      _stream;
      get maxPerTick() {
        return this._stream?.maxPerTick ?? 32
      }
      set maxPerTick(kk) {
        (this._stream ??= oF()).maxPerTick = kk
      }
      get priority() {
        return this._stream?.priority
      }
      set priority(kk) {
        (this._stream ??= oF()).priority = kk
      }
      static $isStream = !0;
      static[qk] = UI;
      static[Lk] = rI;
      static COLLECTION_KIND = gI;
      static[tk](kk, Fk, Ik) {
        if (!Ik) return !0;
        const Xk = kk[Zk](Fk);
        return void 0 !== Xk && Ik.isVisible(Xk[wk])
      }
      static is(kk) {
        return kk && void 0 !== kk.stream
      }
      constructor() {
        Object.defineProperty(this, wk, {
          value: new nI(this),
          enumerable: !1,
          writable: !0
        }), this[Hk] = void 0
      }
      static initializeForDecoder() {
        const kk = Object.create(aX.prototype);
        return kk.$items = new Map, kk.$nextPosition = 0, kk._itemIndex = new Map, kk[Hk] = void 0, pI(kk), kk
      }
      add(kk) {
        if (this._itemIndex.has(kk)) return -1;
        const Fk = this.$nextPosition++;
        this.$items.set(Fk, kk), this._itemIndex.set(kk, Fk);
        const Ik = this[wk].root;
        return void 0 !== kk[wk] && kk[wk].setParent(this, Ik, Fk), void 0 !== Ik && EF(this, Ik, Fk), Fk
      }
      remove(kk) {
        const Fk = this._itemIndex.get(kk);
        if (void 0 === Fk) return !1;
        this._itemIndex.delete(kk), this.$items.delete(Fk);
        const Ik = this[wk].root;
        return void 0 !== Ik && (OF(this, Ik, this[lk], Fk), void 0 !== kk[wk] && Ik.remove(kk[wk])), !0
      }
      has(kk) {
        return this._itemIndex.has(kk)
      }
      clear() {
        const kk = this[wk].root;
        if (void 0 !== kk) {
          ! function(kk, Fk, Ik) {
            const Xk = kk._stream;
            if (void 0 !== Xk) {
              Xk.broadcastPending.clear();
              for (const kk of Xk.sentBroadcast) Xk.broadcastDeletes.add(kk);
              Xk.sentBroadcast.clear(), Fk.forEachActiveView((kk => {
                Xk.pendingByView.get(kk.id)?.clear();
                const Fk = Xk.sentByView.get(kk.id);
                if (void 0 !== Fk && Fk.size > 0) {
                  let Xk = kk.changes.get(Ik);
                  void 0 === Xk && (Xk = new Map, kk.changes.set(Ik, Xk));
                  for (const kk of Fk) Xk.set(kk, Tk.DELETE);
                  Fk.clear()
                }
              }))
            }
          }(this, kk, this[lk]);
          for (const Fk of this.$items.values()) void 0 !== Fk[wk] && kk.remove(Fk[wk])
        }
        this.$items.clear(), this._itemIndex.clear()
      }
      forEach(kk) {
        for (const [Fk, Ik] of this.$items) kk(Ik, Fk, this)
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
      } [Zk](kk) {
        return this.$items.get(kk)
      } [jk](kk) {
        const Fk = this.$items.get(kk);
        void 0 !== Fk && (this._itemIndex.delete(Fk), this.$items.delete(kk))
      } [ek]() {} [xk]() {}
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
          return Object.assign(new aX, this)
        }
        const Fk = new aX;
        return Fk.maxPerTick = this.maxPerTick, this.forEach((kk => {
          Fk.add("function" === typeof kk?.clone ? kk.clone() : kk)
        })), Fk
      }
      _dropView(kk) {
        uF(this, kk)
      }
      _unregister() {}
    }
    VF("stream", {
      constructor: aX
    });
    class qX {
      [sk] = !0;
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
        if (kk && "object" === typeof kk && void 0 !== kk.array) throw new Error(SF);
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

    function LX(kk) {
      return null != kk && !0 === kk[sk]
    }

    function tX(kk) {
      return () => new qX(kk)
    }

    function ZX(kk) {
      if (LX(kk)) {
        const Fk = kk._type;
        throw new Error(`t.array/map/set/collection(): a t.* builder is not a valid element type \u2014 ${"string"===typeof Fk?`use the type name instead: t.array("${Fk}")`:'collections accept a Schema class or a primitive type name ("string", "number", \u2026)'}.`)
      }
      return kk
    }

    function jX(kk) {
      return new qX({
        quantized: RF(kk)
      })
    }
    const eX = Object.freeze({
        string: tX("string"),
        number: tX("number"),
        boolean: tX("boolean"),
        int8: tX("int8"),
        uint8: tX("uint8"),
        int16: tX("int16"),
        uint16: tX("uint16"),
        int32: tX("int32"),
        uint32: tX("uint32"),
        int64: tX("int64"),
        uint64: tX("uint64"),
        float32: tX("float32"),
        float64: tX("float64"),
        bigint64: tX("bigint64"),
        biguint64: tX("biguint64"),
        ref: kk => new qX(kk),
        array: kk => new qX({
          array: ZX(kk)
        }),
        map: kk => new qX({
          map: ZX(kk)
        }),
        set: kk => new qX({
          set: ZX(kk)
        }),
        collection: kk => new qX({
          collection: ZX(kk)
        }),
        stream: kk => {
          const Fk = new qX({
            stream: ZX(kk)
          });
          return Fk._stream = !0, Fk
        },
        quantized: jX,
        angle: kk => jX({
          min: 0,
          max: 2 * Math.PI,
          mode: "wrap",
          bits: kk?.bits ?? 16
        })
      }),
      wX = -1;

    function HX(kk) {
      return WF.register(kk), kk
    }

    function JX() {
      let kk = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : wX;
      return function(Fk, Ik) {
        const Xk = mF.initialize(Fk.constructor);
        mF.setTag(Xk, Ik, kk)
      }
    }

    function xX(kk, Fk) {
      const Ik = mF.initialize(kk.constructor);
      mF.setUnreliable(Ik, Fk)
    }

    function PX(kk, Fk) {
      const Ik = mF.initialize(kk.constructor);
      mF.setPatchOnly(Ik, Fk)
    }

    function KX(kk, Fk) {
      const Ik = mF.initialize(kk.constructor);
      mF.setFullStateOnly(Ik, Fk)
    }

    function QX(kk, Fk) {
      return function(Ik, Xk) {
        const Tk = Ik.constructor;
        if (!kk) throw new Error(`${Tk.name}: @type() reference provided for "${Xk}" is undefined. Make sure you don't have any circular dependencies.`);
        kk = BF(kk, `${Tk.name}.${Xk}`), WF.register(Tk);
        const ik = Object.getPrototypeOf(Tk)[Symbol.metadata],
          yk = mF.initialize(Tk);
        let lk = yk[Xk];
        if (void 0 !== yk[lk]) {
          if (yk[lk].deprecated) return;
          if (void 0 !== yk[lk].type) {
            const kk = new Error(`@colyseus/schema: Duplicate '${Xk}' definition on '${Tk.name}'.\nCheck @type() annotation`);
            throw new Error(`${kk.message} ${kk.stack.split("\n")[4].trim()}`)
          }
        } else lk = yk[vk] ?? (ik && ik[vk]) ?? -1, lk++;
        if (Fk && Fk.manual) mF.addField(yk, lk, Xk, kk, {
          enumerable: !0,
          configurable: !0,
          writable: !0
        });
        else {
          const {
            complexTypeKlass: Fk,
            childType: Ik
          } = fF(kk);
          mF.addField(yk, lk, Xk, kk, VX(Xk, lk, Ik, Fk))
        }
        yk[Vk][Xk] && Object.defineProperty(Ik, Xk, yk[Vk][Xk]), ("string" === typeof kk || UF(kk)) && (yk[Sk] || Object.defineProperty(yk, Sk, {
          value: [],
          enumerable: !1,
          configurable: !0,
          writable: !0
        }), yk[Sk][lk] = "string" === typeof kk ? IF[kk] : cF(kk.quantized))
      }
    }
    const sX = {
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

    function VX(kk, Fk, Ik, Xk) {
      let ik;
      return ik = Xk ? function(kk, Fk, Ik, Xk) {
        const ik = Xk.constructor === XX,
          yk = Xk.constructor === iX;
        return function(kk) {
          const Xk = this[Qk],
            lk = Xk[Fk];
          if (kk !== lk) {
            if (void 0 !== kk && null !== kk) {
              if (!ik || kk instanceof XX)
                if (!yk || kk instanceof iX) kk[Hk] = Ik;
                else {
                  const Fk = new iX;
                  if (Fk[Hk] = Ik, kk instanceof Map) kk.forEach(((kk, Ik) => Fk.set(Ik, kk)));
                  else
                    for (const Ik in kk) Fk.set(Ik, kk[Ik]);
                  kk = Fk
                }
              else {
                const Fk = new XX;
                Fk[Hk] = Ik, Fk.push(...kk), kk = Fk
              }
              const Xk = this[wk],
                qk = this.constructor;
              void 0 !== lk && null !== lk && lk[wk] ? (Xk.root?.remove(lk[wk]), qk[ak](Xk, Fk, Tk.DELETE_AND_ADD)) : qk[ak](Xk, Fk, Tk.ADD), kk[wk]?.setParent(this, Xk.root, Fk)
            } else void 0 !== lk && null !== lk && this[wk].delete(Fk);
            Xk[Fk] = kk
          }
        }
      }(0, Fk, Ik, Xk) : "string" === typeof Ik ? function(kk, Fk, Ik) {
        const Xk = sX[Ik],
          ik = "string" === Ik,
          yk = "boolean" === Ik;
        return function(Ik) {
          const lk = this[Qk],
            qk = lk[Fk];
          if (Ik !== qk) {
            if (void 0 !== Ik && null !== Ik) {
              if (!yk && void 0 !== Xk && typeof Ik !== Xk && (!ik || null !== Ik)) {
                const Fk = Ik && Ik.constructor ? ` (${Ik.constructor.name})` : "";
                throw new MI(`a '${Xk}' was expected, but '${JSON.stringify(Ik)}'${Fk} was provided in ${this.constructor.name}#${kk}`)
              }
              this.constructor[ak](this[wk], Fk, Tk.ADD)
            } else void 0 !== qk && null !== qk && this[wk].delete(Fk);
            lk[Fk] = Ik
          }
        }
      }(kk, Fk, Ik) : UF(Ik) ? function(kk, Fk, Ik) {
        return function(Xk) {
          const ik = this[Qk],
            yk = ik[Fk];
          if (void 0 !== Xk && null !== Xk) {
            if ("number" !== typeof Xk) throw new MI(`a 'number' was expected, but '${JSON.stringify(Xk)}' was provided in ${this.constructor.name}#${kk}`);
            if ((Xk = NF(Ik, CF(Ik, Xk))) === yk) return;
            this.constructor[ak](this[wk], Fk, Tk.ADD)
          } else {
            if (Xk === yk) return;
            void 0 !== yk && null !== yk && this[wk].delete(Fk)
          }
          ik[Fk] = Xk
        }
      }(kk, Fk, Ik.quantized) : function(kk, Fk, Ik) {
        return function(Xk) {
          const ik = this[Qk],
            yk = ik[Fk];
          if (Xk !== yk) {
            if (void 0 !== Xk && null !== Xk) {
              kX(Xk, Ik, this, kk);
              const ik = this[wk],
                lk = this.constructor;
              void 0 !== yk && null !== yk && yk[wk] ? (ik.root?.remove(yk[wk]), lk[ak](ik, Fk, Tk.DELETE_AND_ADD)) : lk[ak](ik, Fk, Tk.ADD), Xk[wk]?.setParent(this, ik.root, Fk)
            } else void 0 !== yk && null !== yk && this[wk].delete(Fk);
            ik[Fk] = Xk
          }
        }
      }(kk, Fk, Ik), {
        get: function() {
          return this[Qk][Fk]
        },
        set: ik,
        enumerable: !0,
        configurable: !0
      }
    }

    function zX() {
      let kk = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
      return function(Fk, Ik) {
        const Xk = mF.initialize(Fk.constructor);
        mF.setDeprecated(Xk, Ik), kk && (Xk[Vk] ??= {}, Xk[Vk][Ik] = {
          get: function() {
            throw new Error(`${Ik} is deprecated.`)
          },
          set: function(kk) {},
          enumerable: !1,
          configurable: !0
        }, Object.defineProperty(Fk, Ik, Xk[Vk][Ik]))
      }
    }
    let SX = !1;

    function oX(kk, Fk, Ik) {
      SX || (SX = !0, console.warn("@colyseus/schema: defineTypes() is deprecated and will be removed in a future release. Use schema() with t.* field builders instead \u2192 https://docs.colyseus.io/state/schema"));
      for (let Xk in Fk) QX(Fk[Xk], Ik)(kk.prototype, Xk);
      return kk
    }

    function vX(kk, Fk) {
      let Ik = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : OX;
      if (null == kk || "object" !== typeof kk) throw new Error(`schema(): first argument must be a fields object (got ${typeof kk}).`);
      const Xk = {},
        Tk = {},
        ik = {},
        yk = {},
        lk = (kk, Fk) => {
          if (Fk.hasDefault)((kk, Fk) => {
            "function" === typeof Fk ? yk[kk] = Fk : Fk && "function" === typeof Fk.clone ? yk[kk] = () => Fk.clone() : ik[kk] = Fk
          })(kk, Fk.default);
          else if (!Fk.optional) {
            const Ik = function(kk) {
              if (kk && "object" === typeof kk) {
                if (void 0 !== kk.array) return () => new XX;
                if (void 0 !== kk.map) return () => new iX;
                if (void 0 !== kk.set) return () => new lX;
                if (void 0 !== kk.collection) return () => new yX;
                if (void 0 !== kk.stream) return () => new aX
              } else if ("function" === typeof kk && OX.is(kk) && (!kk.prototype.initialize || 0 === kk.prototype.initialize.length)) return () => new kk
            }(Fk.type);
            Ik && (yk[kk] = Ik)
          }
        },
        ak = {},
        qk = [],
        Lk = [],
        tk = {},
        Zk = [],
        jk = [],
        ek = {},
        wk = [];
      for (const Qk in kk) {
        const Ik = kk[Qk],
          ik = `schema(${Fk?`'${Fk}'`:""}): field '${Qk}'`;
        if (LX(Ik)) {
          const kk = Ik.toDefinition();
          if (kk.noSync) {
            if (void 0 !== kk.view || kk.unreliable || kk.patchOnly || kk.fullStateOnly || kk.stream) throw new Error(`${ik} uses .noSync() together with a sync-only modifier (.view/.unreliable/.patchOnly/.fullStateOnly/.stream). A local-only field cannot be synchronized.`);
            lk(Qk, kk);
            continue
          }
          if (kk.patchOnly && kk.fullStateOnly) throw new Error(`${ik} uses .patchOnly() together with .fullStateOnly(). Those are the only two delivery channels, so the field would never reach a client \u2014 use .noSync() if that is intended.`);
          const Fk = BF(kk.type, ik);
          if ("function" === typeof Fk && !OX.is(Fk)) throw new Error(`${ik} is a synced ref to non-Schema class '${Fk.name||"(anonymous)"}' \u2014 use .noSync(), or Metadata.setFields().`);
          Xk[Qk] = Fk, void 0 !== kk.view && (ak[Qk] = kk.view), kk.unreliable && qk.push(Qk), kk.patchOnly && Lk.push(Qk), kk.deprecated && (tk[Qk] = kk.deprecatedThrows), kk.fullStateOnly && Zk.push(Qk), kk.stream && jk.push(Qk), void 0 !== kk.streamPriority && (ek[Qk] = kk.streamPriority), kk.optional && wk.push(Qk), lk(Qk, kk)
        } else {
          if ("function" !== typeof Ik) throw new Error(`${ik} must be a t.* builder, Schema subclass, or method (got ${typeof Ik}).`);
          OX.is(Ik) ? (Xk[Qk] = Ik, Ik.prototype.initialize && 0 !== Ik.prototype.initialize.length || (yk[Qk] = () => new Ik)) : Tk[Qk] = Ik
        }
      }
      const Hk = kk => {
          for (const Fk in ik) kk[Fk] = ik[Fk];
          for (const Fk in yk) kk[Fk] = yk[Fk]()
        },
        Jk = () => {
          const kk = {};
          return Hk(kk), kk
        },
        xk = "function" === typeof Tk.initialize,
        Pk = Tk.initialize ?? Ik._initialize,
        Kk = class extends Ik {
          constructor() {
            for (var kk = arguments.length, Fk = new Array(kk), Ik = 0; Ik < kk; Ik++) Fk[Ik] = arguments[Ik];
            const Tk = Fk[0];
            void 0 === Tk ? (super(), Hk(this)) : super(Object.assign(Jk(), xk ? (kk => {
              const Fk = Object.keys(Xk),
                Ik = {};
              for (const Xk in kk) Fk.includes(Xk) || (Ik[Xk] = kk[Xk]);
              return Ik
            })(Tk) : Tk)), Pk && new.target === Kk && Pk.apply(this, Fk)
          }
        };
      Fk && Object.defineProperty(Kk, "name", {
        value: Fk
      }), mF.setFields(Kk, Xk), Kk._getDefaultValues = Jk, Kk._initialize = Pk, Object.assign(Kk.prototype, Tk);
      for (const Qk in ak) JX(ak[Qk])(Kk.prototype, Qk);
      for (const Qk of qk) xX(Kk.prototype, Qk);
      for (const Qk of Lk) PX(Kk.prototype, Qk);
      for (const Qk in tk) zX(tk[Qk])(Kk.prototype, Qk);
      if (Zk.length > 0 || jk.length > 0) {
        const kk = Kk[Symbol.metadata];
        for (const Fk of Zk) mF.setFullStateOnly(kk, Fk);
        for (const Fk of jk) mF.setStream(kk, Fk);
        for (const Fk in ek) mF.setStreamPriority(kk, Fk, ek[Fk])
      }
      if (wk.length > 0) {
        const kk = Kk[Symbol.metadata];
        for (const Fk of wk) kk[kk[Fk]].optional = !0
      }
      return Kk.extend = (kk, Fk) => vX(kk, Fk, Kk), Kk
    }

    function EX(kk) {
      const Fk = kk[wk].root,
        Ik = {
          ops: {},
          refs: []
        };
      let Xk = Fk.changes.next;
      for (; Xk;) {
        const kk = Xk.changeTree;
        void 0 !== kk ? (Ik.refs.push(`refId#${kk.ref[lk]}`), kk.forEach(((kk, Fk) => {
          if (kk < 0 || !Fk) return;
          const Xk = Tk[Fk];
          Ik.ops[Xk] || (Ik.ops[Xk] = 0), Ik.ops[Xk]++
        })), Xk = Xk.next) : Xk = Xk.next
      }
      return Ik
    }
    class OX {
      static[qk] = bI;
      static[Lk] = hI;
      [lk];
      [Qk];
      static initialize(kk) {
        Object.defineProperty(kk, wk, {
          value: new nI(kk),
          enumerable: !1,
          writable: !0
        }), kk[Qk] = []
      }
      static initializeForDecoder() {
        const kk = Object.create(this.prototype);
        return pI(kk), kk[Qk] = [], kk
      }
      static reset(kk) {
        const Fk = kk?.[wk];
        if (void 0 === Fk || "function" !== typeof Fk.recycle) throw new Error("@colyseus/schema: Schema.reset() requires a tracked (encoder-side) instance.");
        if (void 0 !== Fk.extraParents) throw new Error(`@colyseus/schema: cannot reset a shared instance (${kk.constructor.name}) with multiple parents.`);
        kk[Pk]()
      } [Pk]() {
        const kk = this.constructor[Symbol.metadata],
          Fk = kk?.[Ek] ?? [],
          Ik = this[Qk];
        for (let Xk = 0; Xk < Fk.length; Xk++) {
          const kk = Ik[Fk[Xk]];
          kk?.[Pk]?.()
        }
        this[wk].recycle(), this[lk] = void 0
      }
      static is(kk) {
        const Fk = kk[Symbol.metadata];
        return "object" === typeof Fk && null !== Fk
      }
      static isSchema(kk) {
        return "function" === typeof kk?.assign
      }
      static[ak](kk, Fk) {
        let Ik = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Tk.ADD;
        kk.change(Fk, Ik)
      }
      static[tk](kk, Fk, Ik) {
        const Xk = kk.constructor[Symbol.metadata],
          Tk = Xk[Fk]?.tag;
        return void 0 === Ik ? void 0 === Tk : void 0 === Tk || (Tk === wX ? Ik.isChangeTreeVisible(kk[wk]) : Ik.hasTagOnTree(kk[wk], Tk))
      }
      constructor(kk) {
        OX.initialize(this), kk && OX.assignProps(this, kk)
      }
      assign(kk) {
        return OX.assignProps(this, kk), this
      }
      static assignProps(kk, Fk) {
        const Ik = kk.constructor[Symbol.metadata];
        if (Ik && void 0 !== Ik[vk])
          for (let Tk = 0; Tk <= Ik[vk]; Tk++) {
            const Xk = Ik[Tk];
            if (!Xk) continue;
            const ik = Fk[Xk.name];
            void 0 !== ik && (kk[Xk.name] = ik)
          }
        const Xk = Object.keys(Fk);
        for (let Tk = 0; Tk < Xk.length; Tk++) {
          const ik = Xk[Tk];
          Ik && void 0 !== Ik[ik] || (kk[ik] = Fk[ik])
        }
      }
      restore(kk) {
        const Fk = this.constructor[Symbol.metadata];
        for (const Ik in Fk) {
          const Xk = Fk[Ik],
            Tk = Xk.name,
            ik = Xk.type,
            yk = kk[Tk];
          if (void 0 !== yk && null !== yk)
            if ("string" === typeof ik) this[Tk] = yk;
            else if (OX.is(ik)) {
            const kk = new ik;
            kk.restore(yk), this[Tk] = kk
          } else if ("object" === typeof ik) {
            const kk = Object.keys(ik)[0],
              Fk = ik[kk];
            if ("map" === kk) {
              const kk = this[Tk];
              for (const Ik in yk)
                if (OX.is(Fk)) {
                  const Xk = new Fk;
                  Xk.restore(yk[Ik]), kk.set(Ik, Xk)
                } else kk.set(Ik, yk[Ik])
            } else if ("array" === kk) {
              const kk = this[Tk];
              for (let Ik = 0; Ik < yk.length; Ik++)
                if (OX.is(Fk)) {
                  const Xk = new Fk;
                  Xk.restore(yk[Ik]), kk.push(Xk)
                } else kk.push(yk[Ik])
            }
          }
        }
        return this
      }
      setDirty(kk, Fk) {
        const Ik = this.constructor[Symbol.metadata];
        this[wk].change(Ik[Ik[kk]].index, Fk)
      }
      pauseTracking() {
        this[wk].pause()
      }
      resumeTracking() {
        this[wk].resume()
      }
      untracked(kk) {
        return this[wk].untracked(kk)
      }
      get isTrackingPaused() {
        return this[wk].paused
      }
      clone() {
        const kk = Object.create(this.constructor.prototype);
        OX.initialize(kk);
        const Fk = this.constructor[Symbol.metadata];
        for (const Ik in Fk) {
          const Xk = Fk[Ik].name;
          "object" === typeof this[Xk] && "function" === typeof this[Xk]?.clone ? kk[Xk] = this[Xk].clone() : kk[Xk] = this[Xk]
        }
        return kk
      }
      toJSON() {
        const kk = {},
          Fk = this.constructor[Symbol.metadata];
        for (const Ik in Fk) {
          const Xk = Fk[Ik],
            Tk = Xk.name;
          Xk.deprecated || null === this[Tk] || "undefined" === typeof this[Tk] || (kk[Tk] = "function" === typeof this[Tk].toJSON ? this[Tk].toJSON() : this[Tk])
        }
        return kk
      }
      discardAllChanges() {
        this[wk].discardAll()
      } [Zk](kk) {
        return this[this.constructor[Symbol.metadata][kk].name]
      } [jk](kk) {
        this[this.constructor[Symbol.metadata][kk].name] = void 0
      }
      static debugRefIds(kk) {
        let Fk = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          Ik = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          Xk = arguments.length > 3 ? arguments[3] : void 0,
          Tk = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "";
        const ik = Fk ? ` - ${JSON.stringify(kk.toJSON())}` : "",
          yk = kk[wk],
          ak = kk[lk],
          qk = Xk ? Xk.root.refCount[ak] : yk.refCount,
          Lk = qk > 1 ? ` [\xd7${qk}]` : "";
        let tk = `${function(kk){return new Array(kk).fill(0).map(((Fk,Ik)=>Ik===kk-1?"\u2514\u2500 ":"   ")).join("")}(Ik)}${Tk}${kk.constructor.name} (refId: ${ak})${Lk}${ik}\n`;
        return yk.forEachChild(((Tk, ik) => {
          let yk = ik;
          "number" === typeof ik && kk.$indexes && (yk = kk.$indexes.get(ik) ?? ik);
          const lk = void 0 !== kk.forEach && void 0 !== yk ? `["${yk}"]: ` : "";
          tk += this.debugRefIds(Tk.ref, Fk, Ik + 1, Xk, lk)
        })), tk
      }
      static debugRefIdEncodingOrder(kk) {
        let Fk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "allChanges";
        const Ik = [],
          Xk = kk[wk];
        if ("changes" === Fk) {
          let kk = Xk.root.changes?.next;
          for (; kk;) kk.changeTree && Ik.push(kk.changeTree.ref[lk]), kk = kk.next;
          return Ik
        }
        const Tk = "allFilteredChanges" === Fk,
          ik = new Set,
          yk = kk => {
            ik.has(kk) || (ik.add(kk), kk.isFiltered === Tk && Ik.push(kk.ref[lk]), kk.forEachChild(((kk, Fk) => yk(kk))))
          };
        return yk(Xk), Ik
      }
      static debugRefIdsFromDecoder(kk) {
        return this.debugRefIds(kk.state, !1, 0, kk)
      }
      static debugChanges(kk) {
        let Fk = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        const Ik = kk[wk],
          Xk = Fk ? "allChanges" : "changes";
        let ik = `${kk.constructor.name} (${kk[lk]}) -> .${Xk}:\n`;
        return Fk ? Ik.forEachLive((kk => {
          ik += `- [${kk}]: ADD (${JSON.stringify(Ik.getValue(Number(kk),!0))})\n`
        })) : Ik.forEach(((kk, Fk) => {
          kk < 0 || !Fk || (ik += `- [${kk}]: ${Tk[Fk]} (${JSON.stringify(Ik.getValue(Number(kk),!1))})\n`)
        })), ik
      }
    }
    ik(OX);
    const nX = {
      value: 0,
      enumerable: !1,
      writable: !0
    };
    class GX {
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
        this.types.hasFilters && (kk.flags & EI || (kk.flags |= EI, this.pendingFilterRefresh.push(kk)))
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
        for (const Ik of this.streamTrees) Ik._dropView(Fk)
      }
      forEachActiveView(kk) {
        for (const [Fk, Ik] of this.activeViews) {
          const Xk = Ik.deref();
          if (void 0 !== Xk) kk(Xk);
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
        void 0 === Fk[lk] && (nX.value = this.nextUniqueId++, Object.defineProperty(Fk, lk, nX));
        const Ik = Fk[lk],
          Xk = void 0 === this.changeTrees[Ik];
        Xk && (this.changeTrees[Ik] = kk), kk.needsRestage && (kk.needsRestage = !1, kk.forEachLiveWithCtx(kk, XI));
        const Tk = Xk ? 0 : kk.refCount;
        return kk.refCount = Tk + 1, Tk > 0 && this.enqueueFilterRefresh(kk), Xk
      }
      remove(kk) {
        const Fk = kk.refCount - 1;
        if (Fk <= 0) {
          if (kk.root = void 0, delete this.changeTrees[kk.ref[lk]], kk.isStreamCollection) {
            const Fk = kk.ref;
            Fk._unregister?.(), this.unregisterStream(Fk)
          }
          this.removeFromQueue(kk), this.removeFromUnreliableQueue(kk), kk.refCount = 0, kk.needsRestage = !0, kk.forEachChild(((Fk, Ik) => {
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
      _moveNextToParentInList(kk, Fk, Ik, Xk) {
        const Tk = Fk.parent;
        if (!Tk || !Tk[wk]) return;
        const ik = Tk[wk][Xk];
        ik && ik !== Ik && (Ik.position > ik.position || (Ik.prev ? Ik.prev.next = Ik.next : kk.next = Ik.next, Ik.next ? Ik.next.prev = Ik.prev : kk.tail = Ik.prev, Ik.prev = kk.tail, Ik.next = void 0, kk.tail.next = Ik, kk.tail = Ik, Ik.position = kk.nextPosition++))
      }
      enqueueChangeTree(kk) {
        (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : kk.changesNode) || (kk.changesNode = this._appendToList(this.changes, kk))
      }
      enqueueUnreliable(kk) {
        (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : kk.unreliableChangesNode) || (kk.unreliableChangesNode = this._appendToList(this.unreliableChanges, kk))
      }
      _appendToList(kk, Fk) {
        const Ik = this._nodePool;
        let Xk;
        return Ik.length > 0 ? (Xk = Ik.pop(), Xk.changeTree = Fk, Xk.next = void 0, Xk.prev = void 0) : Xk = {
          changeTree: Fk,
          next: void 0,
          prev: void 0,
          position: 0
        }, kk.next ? (Xk.prev = kk.tail, kk.tail.next = Xk, kk.tail = Xk) : (kk.nextPosition = 0, kk.next = Xk, kk.tail = Xk), Xk.position = kk.nextPosition++, Xk
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
      _removeNode(kk, Fk, Ik, Xk) {
        return !(!Ik || Ik.changeTree !== Fk) && (Ik.prev ? Ik.prev.next = Ik.next : kk.next = Ik.next, Ik.next ? Ik.next.prev = Ik.prev : kk.tail = Ik.prev, Fk[Xk] = void 0, this.releaseNode(Ik), !0)
      }
    }

    function pX(kk, Fk) {
      if (-1 === Fk || Fk >= kk.length) return !1;
      const Ik = kk.length - 1;
      for (let Xk = Fk; Xk < Ik; Xk++) kk[Xk] = kk[Xk + 1];
      return kk.length = Ik, !0
    }

    function uX(kk, Fk, Ik) {
      const Xk = ~Ik,
        Tk = kk.changeTrees;
      for (const ik in Tk) {
        const kk = Tk[ik],
          Ik = kk.visibleViews;
        void 0 !== Ik && Fk < Ik.length && (Ik[Fk] &= Xk);
        const yk = kk.subscribedViews;
        void 0 !== yk && Fk < yk.length && (yk[Fk] &= Xk);
        const lk = kk.tagViews;
        void 0 !== lk && lk.forEach((kk => {
          Fk < kk.length && (kk[Fk] &= Xk)
        }))
      }
    }
    const bX = new FinalizationRegistry((kk => {
      let {
        root: Fk,
        id: Ik,
        slot: Xk,
        bit: Tk
      } = kk;
      uX(Fk, Xk, Tk), Fk.activeViews.delete(Ik);
      for (const ik of Fk.streamTrees) ik._dropView(Ik);
      Fk.releaseViewId(Ik)
    }));

    function RX(kk) {
      if (void 0 === kk) return "undefined";
      if (null === kk) return "null";
      const Fk = typeof kk;
      return "string" === Fk ? JSON.stringify(kk.length > 30 ? `${kk.slice(0,30)}\u2026` : kk) : "object" !== Fk && "function" !== Fk ? `${Fk} ${String(kk)}` : Array.isArray(kk) ? `Array(${kk.length})` : kk.constructor?.name ?? "Object"
    }
    class UX {
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
        void 0 === this._root && (this._root = kk, this.id = kk.acquireViewId(), this._slot = this.id >> 5, this._bit = 1 << (31 & this.id), kk.registerView(this), bX.register(this, {
          root: kk,
          id: this.id,
          slot: this._slot,
          bit: this._bit
        }, this))
      }
      dispose() {
        void 0 !== this._root && (this._root.unregisterView(this), uX(this._root, this._slot, this._bit), this._root.releaseViewId(this.id), bX.unregister(this), this._root = void 0, this.id = -1)
      }
      isVisible(kk) {
        const Fk = kk.visibleViews,
          Ik = this._slot;
        return void 0 !== Fk && Ik < Fk.length && 0 !== (Fk[Ik] & this._bit)
      }
      markVisible(kk) {
        const Fk = this._slot;
        let Ik = kk.visibleViews;
        for (void 0 === Ik && (Ik = kk.visibleViews = []); Ik.length <= Fk;) Ik.push(0);
        Ik[Fk] |= this._bit
      }
      unmarkVisible(kk) {
        const Fk = kk.visibleViews;
        if (void 0 === Fk) return;
        const Ik = this._slot;
        Ik < Fk.length && (Fk[Ik] &= ~this._bit)
      }
      isSubscribed(kk) {
        const Fk = kk.subscribedViews,
          Ik = this._slot;
        return void 0 !== Fk && Ik < Fk.length && 0 !== (Fk[Ik] & this._bit)
      }
      _setSubscribed(kk) {
        const Fk = this._slot;
        let Ik = kk.subscribedViews;
        for (void 0 === Ik && (Ik = kk.subscribedViews = []); Ik.length <= Fk;) Ik.push(0);
        Ik[Fk] |= this._bit
      }
      _clearSubscribed(kk) {
        const Fk = kk.subscribedViews;
        if (void 0 === Fk) return;
        const Ik = this._slot;
        Ik < Fk.length && (Fk[Ik] &= ~this._bit)
      }
      hasTagOnTree(kk, Fk) {
        const Ik = kk.tagViews;
        if (void 0 === Ik) return !1;
        const Xk = this._slot,
          Tk = this._bit;
        for (let ik = Fk; 0 !== ik; ik &= ik - 1) {
          const kk = Ik.get(ik & -ik);
          if (void 0 !== kk && Xk < kk.length && 0 !== (kk[Xk] & Tk)) return !0
        }
        return !1
      }
      addTag(kk, Fk) {
        if (Fk === wX) return;
        let Ik = kk.tagViews;
        void 0 === Ik && (Ik = kk.tagViews = new Map);
        const Xk = this._slot,
          Tk = this._bit;
        for (let ik = Fk; ik > 0; ik &= ik - 1) {
          const kk = ik & -ik;
          let Fk = Ik.get(kk);
          for (void 0 === Fk && (Fk = [], Ik.set(kk, Fk)); Fk.length <= Xk;) Fk.push(0);
          Fk[Xk] |= Tk
        }
      }
      removeTag(kk, Fk) {
        if (Fk === wX) return;
        const Ik = kk.tagViews;
        if (void 0 === Ik) return;
        const Xk = this._slot,
          Tk = ~this._bit;
        for (let ik = Fk; ik > 0; ik &= ik - 1) {
          const kk = Ik.get(ik & -ik);
          void 0 !== kk && Xk < kk.length && (kk[Xk] &= Tk)
        }
      }
      removeAllTagsOnTree(kk) {
        const Fk = kk.tagViews;
        if (void 0 === Fk) return;
        const Ik = this._slot,
          Xk = ~this._bit;
        Fk.forEach((kk => {
          Ik < kk.length && (kk[Ik] &= Xk)
        }))
      }
      add(kk) {
        let Fk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : wX,
          Ik = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        return this._add(kk, Fk, Ik, !1)
      }
      _addImmediate(kk) {
        let Fk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : wX;
        this._add(kk, Fk, !0, !0)
      }
      _add(kk, Fk, Ik, Xk) {
        const ik = kk?.[wk];
        if (!ik) return console.warn(`StateView#add(): expected a Schema instance or collection, received ${RX(kk)}`), !1;
        const yk = ik.parent;
        if (!yk && 0 !== kk[lk]) throw new Error(`Cannot add a detached instance to the StateView. Make sure to assign the "${ik.ref.constructor.name}" instance to the state before calling view.add()`);
        void 0 === this._root && void 0 !== ik.root && this._bindRoot(ik.root);
        const ak = yk?.[wk];
        if (!Xk && ak?.isStreamCollection) return pF(yk, this.id, ik.parentIndex), !0;
        const qk = kk.constructor[Symbol.metadata],
          Lk = this.isVisible(ik);
        if (!this.iterable || !Ik || Lk && -1 !== this.items.indexOf(kk) || this.items.push(kk), this.markVisible(ik), Ik && yk && this.addParentOf(ik, Fk), !Xk && ik.isStreamCollection) return !0;
        if (Fk === wX && ik.isNew) return this._markSubtreeVisible(ik, Fk), !1;
        let tk = this.changes.get(kk[lk]);
        void 0 === tk && (tk = new Map, this.changes.set(kk[lk], tk));
        let Zk = !1;
        const jk = ik.encDescriptor.tags;
        if (ik.forEachChild(((kk, Ik) => {
            const Xk = jk[Ik];
            if (void 0 !== Xk) {
              if (!(Xk === wX || Fk !== wX && 0 !== (Xk & Fk))) return
            }
            this.add(kk.ref, Fk, !1) && (Zk = !0)
          })), Fk !== wX) {
          this.addTag(ik, Fk);
          const kk = qk?.[nk];
          if (void 0 !== kk)
            for (let Ik = Fk; Ik > 0; Ik &= Ik - 1) kk[Ik & -Ik]?.forEach((kk => {
              ik.getChange(kk) !== Tk.DELETE && tk.set(kk, Tk.ADD)
            }))
        }
        if ((Fk === wX || !Lk) && (!ik.isNew || Zk))
          if (ik.isArray && "string" !== typeof ik.refTarget[Hk]) ik.refTarget.items.length > 0 && (tk.set(-1, Tk.ADD), Zk = !0);
          else {
            const kk = ik.encDescriptor.tags;
            ik.forEachLive((Ik => {
              const Xk = kk[Ik];
              (void 0 === Xk || Xk === wX || Fk !== wX && 0 !== (Xk & Fk)) && (tk.set(Ik, Tk.ADD), Zk = !0)
            }))
          } return Zk
      }
      _markSubtreeVisible(kk, Fk) {
        const Ik = kk.encDescriptor.tags;
        kk.forEachChild(((kk, Xk) => {
          const Tk = Ik[Xk];
          if (void 0 !== Tk) {
            if (!(Tk === wX || Fk !== wX && 0 !== (Tk & Fk))) return
          }
          kk.isNew ? (this.markVisible(kk), this._markSubtreeVisible(kk, Fk)) : this._add(kk.ref, Fk, !1, !1)
        }))
      }
      addParentOf(kk, Fk) {
        const Ik = kk.parent[wk],
          Xk = kk.parentIndex;
        this.isVisible(Ik) || this.markVisible(Ik);
        const ik = Ik.parent?.[wk];
        if (ik && this.addParentOf(Ik, Fk), Ik.hasFilteredFields && Ik.getChange(Xk) !== Tk.DELETE) {
          let ik = this.changes.get(Ik.ref[lk]);
          void 0 === ik && (ik = new Map, this.changes.set(Ik.ref[lk], ik));
          const yk = Ik.encDescriptor.tags[Xk];
          void 0 !== yk && yk !== wX && 0 !== (yk & Fk) && this.addTag(Ik, Fk), ik.set(Ik.isArray ? kk : Xk, Tk.ADD)
        }
      }
      _touchAncestorsOf(kk) {
        let Fk = kk.parent?.[wk];
        if (void 0 === Fk) return;
        const Ik = [];
        for (; void 0 !== Fk;) {
          if (Fk.hasFilteredFields) {
            const kk = Fk.ref[lk];
            if (this.changes.has(kk)) break;
            Ik.push(Fk)
          }
          Fk = Fk.parent?.[wk]
        }
        for (let Xk = Ik.length - 1; Xk >= 0; Xk--) this.changes.set(Ik[Xk].ref[lk], new Map)
      }
      remove(kk) {
        let Fk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : wX,
          Ik = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        const Xk = kk?.[wk];
        if (!Xk) return console.warn(`StateView#remove(): expected a Schema instance or collection, received ${RX(kk)}`), this;
        const ik = Xk.parent?.[wk];
        if (ik?.isStreamCollection) return this.unmarkVisible(Xk), this.iterable && !Ik && pX(this.items, this.items.indexOf(kk)),
          function(kk, Fk, Ik, Xk, ik) {
            const yk = kk._stream;
            if (void 0 === yk) return !1;
            const lk = yk.pendingByView.get(Fk);
            if (lk?.has(Xk)) return lk.delete(Xk), !1;
            const ak = yk.sentByView.get(Fk);
            if (ak?.has(Xk)) {
              ak.delete(Xk);
              let kk = ik.get(Ik);
              return void 0 === kk && (kk = new Map, ik.set(Ik, kk)), kk.set(Xk, Tk.DELETE), !0
            }
          }(Xk.parent, this.id, Xk.parent[lk], Xk.parentIndex, this.changes), this._recursiveDeleteVisibleChangeTree(Xk), this;
        if (Xk.isStreamCollection) {
          this.unmarkVisible(Xk), this.iterable && !Ik && pX(this.items, this.items.indexOf(kk));
          const Fk = Xk.ref,
            ik = Fk._stream;
          if (void 0 !== ik) {
            ik.pendingByView.get(this.id)?.clear();
            const kk = ik.sentByView.get(this.id);
            if (void 0 !== kk && kk.size > 0) {
              const Ik = Fk[lk];
              let Xk = this.changes.get(Ik);
              void 0 === Xk && (Xk = new Map, this.changes.set(Ik, Xk));
              for (const Fk of kk) Xk.set(Fk, Tk.DELETE);
              kk.clear()
            }
          }
          return this
        }
        this.unmarkVisible(Xk), this.iterable && !Ik && pX(this.items, this.items.indexOf(kk));
        const yk = Xk.ref,
          ak = yk.constructor[Symbol.metadata],
          qk = yk[lk];
        this._touchAncestorsOf(Xk);
        let Lk = this.changes.get(qk);
        if (void 0 === Lk && (Lk = new Map, this.changes.set(qk, Lk)), Fk === wX) {
          const kk = Xk.parent;
          if (kk && !mF.isValidInstance(kk) && Xk.isFiltered) {
            const Fk = ik.isArray ? Xk : Xk.parentIndex,
              Ik = kk[lk];
            let yk = this.changes.get(Ik);
            void 0 === yk ? (yk = new Map, this.changes.set(Ik, yk)) : yk.get(Fk) === Tk.ADD && this._dropPendingEntries(Xk), yk.set(Fk, Tk.DELETE), this._recursiveDeleteVisibleChangeTree(Xk)
          } else ak?.[Ok]?.forEach((kk => this._removeViewField(Xk, Lk, kk)))
        } else {
          const kk = ak?.[nk];
          if (void 0 !== kk)
            for (let Ik = Fk; Ik > 0; Ik &= Ik - 1) kk[Ik & -Ik]?.forEach((kk => this._removeViewField(Xk, Lk, kk)))
        }
        return void 0 === Fk ? this.removeAllTagsOnTree(Xk) : this.removeTag(Xk, Fk), this
      }
      has(kk) {
        return this.isVisible(kk[wk])
      }
      hasTag(kk) {
        let Fk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : wX;
        return this.hasTagOnTree(kk[wk], Fk)
      }
      subscribe(kk, Fk) {
        const Ik = kk?.[wk];
        if (!Ik) return console.warn(`StateView#subscribe(): expected a Schema collection, received ${RX(kk)}`), this;
        if (void 0 === this._root && void 0 !== Ik.root && this._bindRoot(Ik.root), void 0 !== Fk)
          if (Ik.isStreamCollection) {
            const Ik = vF(kk);
            null === Fk ? Ik.priorityByView?.delete(this.id) : (Ik.priorityByView ??= new Map).set(this.id, Fk)
          } else {
            const Fk = kk?.constructor?.name ?? "collection",
              Xk = Ik.parent;
            if (void 0 === Xk) console.warn(`StateView#subscribe(): \`priority\` ignored \u2014 this ${Fk} is not attached to a state yet, so it cannot be identified as a stream. Subscribe after assigning it to the state.`);
            else {
              const kk = Xk?.constructor?.[Symbol.metadata]?.[Ik.parentIndex]?.name,
                Tk = kk ? `${Xk.constructor.name}#${kk}` : Fk;
              console.warn(`StateView#subscribe(): \`priority\` ignored \u2014 ${Tk} is a ${Fk}, not a streaming collection. Declare the field with .stream() (e.g. t.map(X).stream()) or use t.stream(X) to enable priority batching.`)
            }
          } if (this.isSubscribed(Ik)) return this;
        const Xk = void 0 !== Ik.parent && !this.isVisible(Ik);
        if (Xk ? (this.addParentOf(Ik, wX), this._add(kk, wX, !1, !1)) : this.markVisible(Ik), this._setSubscribed(Ik), Ik.isStreamCollection) {
          const Fk = kk;
          Ik.forEachChild(((kk, Ik) => {
            pF(Fk, this.id, Ik)
          }))
        } else Xk || Ik.forEachChild((kk => {
          this.markVisible(kk)
        }));
        return this
      }
      unsubscribe(kk) {
        const Fk = kk?.[wk];
        if (!Fk) return console.warn(`StateView#unsubscribe(): expected a Schema collection, received ${RX(kk)}`), this;
        if (!this.isSubscribed(Fk)) return this;
        this._clearSubscribed(Fk);
        const Ik = Fk.ref[lk];
        if (Fk.isStreamCollection) {
          const Fk = kk._stream;
          if (void 0 !== Fk) {
            Fk.pendingByView.get(this.id)?.clear();
            const kk = Fk.sentByView.get(this.id);
            if (void 0 !== kk && kk.size > 0) {
              let Fk = this.changes.get(Ik);
              void 0 === Fk && (Fk = new Map, this.changes.set(Ik, Fk));
              for (const Ik of kk) Fk.set(Ik, Tk.DELETE);
              kk.clear()
            }
          }
        } else {
          const kk = Fk.isArray;
          let Xk = this.changes.get(Ik);
          Fk.forEachChild(((Fk, ik) => {
            void 0 === Xk && (Xk = new Map, this.changes.set(Ik, Xk)), Xk.set(kk ? Fk : ik, Tk.DELETE), this.unmarkVisible(Fk)
          }))
        }
        return this.unmarkVisible(Fk), this
      }
      clear() {
        if (!this.iterable) throw new Error("StateView#clear() is only available for iterable StateView's. Use StateView(iterable: true) constructor.");
        for (let kk = 0, Fk = this.items.length; kk < Fk; kk++) this.remove(this.items[kk], wX, !0);
        this.items.length = 0
      }
      isChangeTreeVisible(kk) {
        let Fk = this.isVisible(kk);
        if (!Fk && kk.isVisibilitySharedWithParent)
          if (this.isVisible(kk.parent[wk])) this.markVisible(kk), Fk = !0;
          else
            for (let Ik = kk.extraParents; void 0 !== Ik; Ik = Ik.next) {
              const Xk = Ik.ref[wk];
              if (Xk.isFiltered && this.isVisible(Xk)) {
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
        this.changes.delete(kk.ref[lk]), kk.forEachChild((kk => this._dropPendingEntries(kk)))
      }
      _removeViewField(kk, Fk, Ik) {
        const Xk = Fk.get(Ik) === Tk.ADD;
        Fk.set(Ik, Tk.DELETE);
        const ik = kk.ref[kk.encDescriptor.names[Ik]],
          yk = ik?.[wk];
        yk && (this.unmarkVisible(yk), this._recursiveDeleteVisibleChangeTree(yk), Xk && this._dropPendingEntries(yk))
      }
    }

    function CX(kk) {
      kk.structSwitchEmitted || (kk.shouldEmitSwitch && (kk.buffer[kk.it.offset++] = 255, IF.number(kk.buffer, kk.ref[lk], kk.it)), kk.structSwitchEmitted = !0)
    }

    function NX(kk, Fk) {
      fX(kk, Fk, Tk.ADD)
    }

    function cX(kk, Fk) {
      if (Fk._fullSyncGen === kk.gen) return;
      Fk._fullSyncGen = kk.gen;
      if (!kk.hasView || kk.view.isChangeTreeVisible(Fk)) {
        const Ik = Fk.encDescriptor;
        kk.changeTree = Fk, kk.ref = Fk.ref, kk.encoder = Ik.encoder, kk.filter = Ik.filter, kk.metadata = Ik.metadata, kk.treeIsFiltered = Fk.isFiltered, kk.isSchema = Ik.isSchema, kk.filterBitmask = Ik.filterBitmask, kk.tags = Ik.tags, kk.structSwitchEmitted = !1, kk.shouldEmitSwitch = kk.hasView || kk.it.offset > kk.initialOffset || Fk !== kk.rootChangeTree, Fk.isArray && Fk.collDirty.size > 0 && (Fk.flags |= 512), iI(Fk, kk, NX)
      }
      xI(Fk, kk, WX)
    }

    function WX(kk, Fk, Ik) {
      cX(kk, Fk)
    }

    function fX(kk, Fk, Ik) {
      if (Fk < 0) {
        if (kk.treeIsFiltered !== kk.emitFiltered) return;
        return CX(kk), void(kk.buffer[kk.it.offset++] = 255 & Math.abs(Fk))
      }
      if ((kk.isSchema ? kk.treeIsFiltered || (Fk < 32 ? 0 !== (kk.filterBitmask & 1 << Fk) : void 0 !== kk.tags[Fk]) : kk.treeIsFiltered) !== kk.emitFiltered) return;
      const Xk = kk.isEncodeAll ? Tk.ADD : Ik;
      void 0 !== Xk && (void 0 === kk.filter || kk.filter(kk.ref, Fk, kk.view)) && (CX(kk), kk.encoder(kk.self, kk.buffer, kk.changeTree, Fk, Xk, kk.it, kk.isEncodeAll, kk.hasView, kk.metadata))
    }

    function BX(kk, Fk) {
      const Ik = new Uint8Array(kk.length + Fk.length);
      return Ik.set(kk, 0), Ik.set(Fk, kk.length), Ik
    }
    class dX {
      static BUFFER_SIZE = 16384;
      sharedBuffer = new Uint8Array(dX.BUFFER_SIZE);
      context;
      state;
      root;
      constructor(kk, Fk) {
        this.context = WF.cache(kk.constructor), this.root = Fk ?? new GX(this.context), this.setState(kk)
      }
      setState(kk) {
        this.state = kk, this.state[wk].setRoot(this.root)
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
          Ik = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : this.sharedBuffer,
          Xk = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : kk.offset;
        return this._encodeChannel(kk, Fk, Ik, Xk, !1)
      }
      encodeUnreliable() {
        let kk = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
            offset: 0
          },
          Fk = arguments.length > 1 ? arguments[1] : void 0,
          Ik = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : this.sharedBuffer,
          Xk = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : kk.offset;
        return this._encodeChannel(kk, Fk, Ik, Xk, !0)
      }
      _encodeChannel(kk, Fk, Ik, Xk, Tk) {
        this.root.pendingFilterRefresh.length > 0 && lI(this.root);
        const ik = void 0 !== Fk,
          yk = this.state[wk],
          lk = this._encodeCtx;
        lk.self = this, lk.buffer = Ik, lk.it = kk, lk.view = Fk, lk.isEncodeAll = !1, lk.hasView = ik, lk.emitFiltered = ik;
        let ak = Tk ? this.root.unreliableChanges : this.root.changes;
        for (; ak = ak.next;) {
          const Ik = ak.changeTree;
          if (ik && !Fk.isChangeTreeVisible(Ik)) continue;
          const qk = Tk ? Ik.unreliableRecorder : Ik;
          if (!qk || !qk.has()) continue;
          const Lk = Ik.encDescriptor;
          lk.changeTree = Ik, lk.ref = Ik.ref, lk.encoder = Lk.encoder, lk.filter = Lk.filter, lk.metadata = Lk.metadata, lk.treeIsFiltered = Ik.isFiltered, lk.isSchema = Lk.isSchema, lk.filterBitmask = Lk.filterBitmask, lk.tags = Lk.tags, lk.structSwitchEmitted = !1, lk.isRootTree = Ik === yk, lk.shouldEmitSwitch = ik || kk.offset > Xk || !lk.isRootTree, qk.forEachWithCtx(lk, fX)
        }
        return Tk || ik || !this._isStreamBroadcastMode || this._emitStreamBroadcast(Ik, kk), kk.offset > Ik.byteLength ? (Ik = this._resizeBuffer(Ik, kk.offset), kk.offset = Xk, this._encodeChannel(kk, Fk, Ik, Xk, Tk)) : Ik.subarray(0, kk.offset)
      }
      encodeFullSync(kk, Fk, Ik, Xk) {
        let Tk = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : kk.offset;
        this.root.pendingFilterRefresh.length > 0 && lI(this.root);
        const ik = void 0 !== Xk,
          yk = this.state[wk],
          lk = this._encodeCtx;
        return lk.self = this, lk.buffer = Fk, lk.it = kk, lk.view = Xk, lk.isEncodeAll = !0, lk.hasView = ik, lk.emitFiltered = Ik, lk.gen = ++this._fullSyncGen, lk.initialOffset = Tk, lk.rootChangeTree = yk, cX(lk, yk), kk.offset > Fk.byteLength ? (Fk = this._resizeBuffer(Fk, kk.offset), kk.offset = Tk, this.encodeFullSync(kk, Fk, Ik, Xk, Tk)) : Fk.subarray(0, kk.offset)
      }
      _resizeBuffer(kk, Fk) {
        const Ik = Math.ceil(Fk / dX.BUFFER_SIZE) * dX.BUFFER_SIZE,
          Xk = new Uint8Array(Ik);
        return Xk.set(kk), kk === this.sharedBuffer && (this.sharedBuffer = Xk), Xk
      }
      encodeAll() {
        let kk = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
            offset: 0
          },
          Fk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.sharedBuffer;
        return this.encodeFullSync(kk, Fk, !1)
      }
      encodeAllView(kk, Fk, Ik) {
        let Xk = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : this.sharedBuffer;
        const Tk = Ik.offset;
        return Xk = this.encodeFullSync(Ik, Xk, !0, kk, Tk), BX(Xk.subarray(0, Fk), Xk.subarray(Tk, Ik.offset))
      }
      ensureCapacity(kk, Fk) {
        if (Fk + dX.BUFFER_SIZE <= kk.byteLength) return kk;
        const Ik = Math.ceil((Fk + dX.BUFFER_SIZE) / dX.BUFFER_SIZE) * dX.BUFFER_SIZE,
          Xk = new Uint8Array(Ik);
        return Xk.set(kk.subarray(0, Fk)), kk === this.sharedBuffer && (this.sharedBuffer = Xk), Xk
      }
      encodeView(kk, Fk, Ik) {
        let Xk = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : this.sharedBuffer,
          ik = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4];
        const yk = Ik.offset;
        this._emitStreamPriority(kk);
        for (const ak of kk.changes.keys()) {
          const Fk = kk.changes.get(ak),
            ik = this.root.changeTrees[ak];
          if (void 0 === ik) {
            kk.changes.delete(ak);
            continue
          }
          if (0 === Fk.size) continue;
          const yk = ik.encDescriptor,
            qk = yk.encoder,
            Lk = yk.metadata,
            tk = ik.ref,
            jk = ik.refTarget;
          Xk = this.ensureCapacity(Xk, Ik.offset), Xk[Ik.offset++] = 255, IF.number(Xk, tk[lk], Ik);
          for (const [ak, ek] of Fk) {
            let Fk;
            if (-1 === ak) {
              const kk = jk.tmpItems,
                Fk = jk.deletedIndexes;
              for (let yk = 0; yk < kk.length; yk++) void 0 !== kk[yk] && !0 !== Fk[yk] && qk(this, Xk, ik, yk, Tk.ADD, Ik, !1, !0, Lk);
              continue
            }
            if ("number" === typeof ak) Fk = ak;
            else {
              const Ik = ak.indexInParent(tk);
              if (void 0 === Ik) continue;
              if (Fk = Ik, ek === Tk.ADD && ik.getChange(Fk) === Tk.DELETE) {
                kk.changes.delete(ak.ref[lk]);
                continue
              }
            }
            qk(this, Xk, ik, Fk, void 0 !== jk[Zk](Fk) && ek || Tk.DELETE, Ik, !1, !0, Lk)
          }
        }
        return kk.changes.clear(), Xk = this.encode(Ik, kk, Xk), ik ? BX(Xk.subarray(0, Fk), Xk.subarray(yk, Ik.offset)) : Xk.subarray(yk, Ik.offset)
      }
      encodeUnreliableView(kk, Fk, Ik) {
        let Xk = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : this.sharedBuffer;
        const Tk = Ik.offset;
        return Xk = this.encodeUnreliable(Ik, kk, Xk, Tk), BX(Xk.subarray(0, Fk), Xk.subarray(Tk, Ik.offset))
      }
      _emitStreamBroadcast(kk, Fk) {
        const Ik = this.root.streamTrees;
        for (const Xk of Ik) {
          const Ik = Xk,
            ik = Ik[wk],
            yk = Ik[lk];
          if (void 0 === yk) continue;
          const ak = Ik._stream,
            qk = ak.broadcastDeletes,
            Lk = ak.broadcastPending,
            tk = ak.sentBroadcast,
            jk = qk.size > 0,
            ek = Lk.size > 0,
            Hk = ik.encDescriptor,
            Jk = Hk.encoder,
            xk = Hk.metadata;
          if (jk || ek) {
            if (kk[Fk.offset++] = 255, IF.number(kk, yk, Fk), jk) {
              for (const Ik of qk) Jk(this, kk, ik, Ik, Tk.DELETE, Fk, !1, !1, xk);
              qk.clear()
            }
            const Xk = ak.maxPerTick,
              ek = [];
            let Hk = 0;
            const Pk = [];
            for (const yk of Lk) {
              if (Hk >= Xk) break;
              const lk = Ik[Zk](yk);
              void 0 !== lk ? (Jk(this, kk, ik, yk, Tk.ADD, Fk, !1, !1, xk), tk.add(yk), ek.push(lk), Pk.push(yk), Hk++) : Pk.push(yk)
            }
            for (const kk of Pk) Lk.delete(kk);
            for (const Ik of ek) {
              const Xk = Ik[wk];
              if (void 0 === Xk) continue;
              const ik = Ik[lk];
              if (void 0 === ik) continue;
              kk[Fk.offset++] = 255, IF.number(kk, ik, Fk);
              const yk = Xk.encDescriptor,
                ak = yk.encoder,
                qk = yk.metadata;
              Xk.forEachLive((Ik => {
                mF.hasUnreliableAtIndex(qk, Ik) || ak(this, kk, Xk, Ik, Tk.ADD, Fk, !1, !1, qk)
              }))
            }
          }
          for (const Xk of tk) {
            const Tk = Ik[Zk](Xk);
            if (void 0 === Tk) continue;
            const ik = Tk[wk];
            if (void 0 === ik || !ik.has()) continue;
            const yk = Tk[lk];
            if (void 0 === yk) continue;
            kk[Fk.offset++] = 255, IF.number(kk, yk, Fk);
            const ak = ik.encDescriptor,
              qk = ak.encoder,
              Lk = ak.metadata;
            ik.forEach(((Ik, Xk) => {
              Ik < 0 || mF.hasUnreliableAtIndex(Lk, Ik) || qk(this, kk, ik, Ik, Xk, Fk, !1, !1, Lk)
            }))
          }
        }
      }
      _emitStreamPriority(kk) {
        const Fk = this.root.streamTrees;
        if (0 === Fk.size) return;
        const Ik = kk.id;
        for (const Xk of Fk) {
          const Fk = Xk,
            ik = Fk._stream,
            yk = ik.pendingByView.get(Ik);
          if (void 0 === yk || 0 === yk.size) continue;
          const ak = ik.priorityByView?.get(Ik),
            qk = void 0 !== ak,
            Lk = ik.priority,
            tk = ik.maxPerTick,
            jk = [],
            ek = [];
          if (qk || void 0 !== Lk) {
            const Ik = [],
              Xk = [];
            let Tk = 0;
            for (const ik of yk) {
              const yk = Fk[Zk](ik);
              if (void 0 === yk) {
                ek.push(ik);
                continue
              }
              const lk = qk ? ak(yk) : Lk(kk, yk);
              if (Tk < tk) {
                let kk = Tk++;
                for (; kk > 0 && Xk[kk - 1] < lk;) Xk[kk] = Xk[kk - 1], Ik[kk] = Ik[kk - 1], kk--;
                Xk[kk] = lk, Ik[kk] = ik
              } else if (lk > Xk[tk - 1]) {
                let kk = tk - 1;
                for (; kk > 0 && Xk[kk - 1] < lk;) Xk[kk] = Xk[kk - 1], Ik[kk] = Ik[kk - 1], kk--;
                Xk[kk] = lk, Ik[kk] = ik
              }
            }
            for (let kk = 0; kk < Tk; kk++) jk.push(Ik[kk])
          } else
            for (const kk of yk) {
              if (jk.length >= tk) break;
              jk.push(kk)
            }
          for (const kk of ek) yk.delete(kk);
          const Hk = jk.length;
          let Jk = ik.sentByView.get(Ik);
          void 0 === Jk && (Jk = new Set, ik.sentByView.set(Ik, Jk));
          for (let Ik = 0; Ik < Hk; Ik++) {
            const Xk = jk[Ik],
              ik = Fk[Zk](Xk);
            if (void 0 === ik) {
              yk.delete(Xk);
              continue
            }
            kk._addImmediate(ik);
            const ak = ik[wk];
            if (void 0 !== ak) {
              const Fk = ik[lk];
              let Ik = kk.changes.get(Fk);
              void 0 === Ik && (Ik = new Map, kk.changes.set(Fk, Ik));
              const Xk = ak.metadata;
              ak.forEachLive((kk => {
                mF.hasUnreliableAtIndex(Xk, kk) || Ik.set(kk, Tk.ADD)
              }))
            }
            yk.delete(Xk), Jk.add(Xk)
          }
        }
      }
      discardChanges() {
        const kk = this.root.changes;
        let Fk = kk.next;
        const Ik = this.root;
        for (; Fk;) {
          const kk = Fk.next;
          Fk.changeTree.endEncode(), Ik.releaseNode(Fk), Fk = kk
        }
        kk.next = void 0, kk.tail = void 0
      }
      discardUnreliableChanges() {
        const kk = this.root.unreliableChanges;
        let Fk = kk.next;
        const Ik = this.root;
        for (; Fk;) {
          const kk = Fk.next;
          Fk.changeTree.endEncodeUnreliable(), Ik.releaseNode(Fk), Fk = kk
        }
        kk.next = void 0, kk.tail = void 0
      }
      tryEncodeTypeId(kk, Fk, Ik, Xk) {
        const Tk = this.context.getTypeId(Fk),
          ik = this.context.getTypeId(Ik);
        void 0 !== ik ? Tk !== ik && (kk[Xk.offset++] = 213, IF.number(kk, ik, Xk)) : console.warn(`@colyseus/schema WARNING: Class "${Ik.name}" is not registered on TypeRegistry - Please either tag the class with @entity or define a @type() field.`)
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
        for (const Ik of kk.streamTrees)
          if (Fk ? GF(Ik) : nF(Ik, kk)) return !0;
        return !1
      }
      get hasUnreliableChanges() {
        return void 0 !== this.root.unreliableChanges.next
      }
    }
    class YX extends Error {
      constructor(kk) {
        super(kk), this.name = "DecodingWarning"
      }
    }
    const AX = {
      value: 0,
      enumerable: !1,
      writable: !0
    };
    class gX {
      refs = new Map;
      refCount = {};
      deletedRefs = new Set;
      callbacks = {};
      nextUniqueId = 0;
      getNextUniqueId() {
        return this.nextUniqueId++
      }
      addRef(kk, Fk) {
        let Ik = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        this.refs.set(kk, Fk), void 0 === Fk[lk] ? (AX.value = kk, Object.defineProperty(Fk, lk, AX)) : Fk[lk] !== kk && (Fk[lk] = kk), Ik && (this.refCount[kk] = (this.refCount[kk] || 0) + 1), this.deletedRefs.has(kk) && this.deletedRefs.delete(kk)
      }
      removeRef(kk) {
        const Fk = this.refCount[kk];
        if (void 0 !== Fk)
          if (0 !== Fk)(this.refCount[kk] = Fk - 1) <= 0 && this.deletedRefs.add(kk);
          else try {
            const Fk = this.refs.get(kk);
            throw new YX(`trying to remove refId '${kk}' with 0 refCount (${Fk.constructor.name}: ${JSON.stringify(Fk)})`)
          } catch (yT) {
            console.warn(yT)
          } else try {
            throw new YX("trying to remove refId that doesn't exist: " + kk)
          } catch (yT) {
            console.warn(yT)
          }
      }
      clearRefs() {
        this.refs.clear(), this.deletedRefs.clear(), this.callbacks = {}, this.refCount = {}
      }
      garbageCollectDeletedRefs() {
        this.deletedRefs.forEach((kk => {
          if (this.refCount[kk] > 0) return;
          const Fk = this.refs.get(kk),
            Ik = Fk.constructor[Symbol.metadata];
          if (null != Ik)
            for (const Xk in Ik) {
              const kk = Fk[Ik[Xk].name];
              if ("object" === typeof kk && kk) {
                const Fk = kk[lk];
                void 0 === Fk || this.deletedRefs.has(Fk) || this.removeRef(Fk)
              }
            } else "function" === typeof Fk[Hk] && Array.from(Fk.values()).forEach((kk => {
              const Fk = kk[lk];
              void 0 === Fk || this.deletedRefs.has(Fk) || this.removeRef(Fk)
            }));
          this.refs.delete(kk), delete this.refCount[kk], delete this.callbacks[kk]
        })), this.deletedRefs.clear()
      }
      addCallback(kk, Fk, Ik) {
        if (void 0 === kk) {
          const kk = "number" === typeof Fk ? Tk[Fk] : Fk;
          throw new Error(`Can't addCallback on '${kk}' (refId is undefined)`)
        }
        return this.callbacks[kk] || (this.callbacks[kk] = {}), this.callbacks[kk][Fk] || (this.callbacks[kk][Fk] = []), this.callbacks[kk][Fk].push(Ik), () => this.removeCallback(kk, Fk, Ik)
      }
      removeCallback(kk, Fk, Ik) {
        const Xk = this.callbacks?.[kk]?.[Fk]?.indexOf(Ik);
        void 0 !== Xk && -1 !== Xk && pX(this.callbacks[kk][Fk], Xk)
      }
    }
    class mX {
      context;
      state;
      root;
      currentRefId = 0;
      sG;
      resyncVisited = null;
      resyncDamaged = !1;
      constructor(kk, Fk) {
        this.setState(kk), this.context = Fk || new WF(kk.constructor)
      }
      setState(kk) {
        this.state = kk, this.root = new gX, this.root.addRef(0, kk)
      }
      decode(kk) {
        let Fk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
            offset: 0
          },
          Ik = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : this.state;
        const Tk = void 0 !== this.sG ? [] : null,
          ik = this.root,
          yk = kk.byteLength;
        let lk = Ik.constructor[Lk];
        for (this.currentRefId = 0; Fk.offset < yk;) {
          if (kk[Fk.offset] == Xk) {
            Fk.offset++, Ik[Kk]?.();
            const Xk = KF.number(kk, Fk),
              Tk = ik.refs.get(Xk);
            Tk ? (Ik = Tk, lk = Ik.constructor[Lk], this.currentRefId = Xk) : (console.error(`"refId" not found: ${Xk}`, {
              previousRef: Ik,
              previousRefId: this.currentRefId
            }), console.warn("Please report this issue to the developers."), this.skipCurrentStructure(kk, Fk, yk));
            continue
          } - 1 !== lk(this, kk, Fk, Ik, Tk) || (console.warn("@colyseus/schema: definition mismatch"), this.skipCurrentStructure(kk, Fk, yk))
        }
        return Ik[Kk]?.(), null !== this.resyncVisited && function(kk, Fk) {
          kk.resyncDamaged ? console.warn("@colyseus/schema: resync sweep skipped \u2014 parts of the payload could not be decoded. Stale entries may persist until the next resync.") : WI(kk, kk.state, new Set, Fk)
        }(this, Tk), null !== Tk && this.sG?.(Tk), ik.garbageCollectDeletedRefs(), Tk
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
      skipCurrentStructure(kk, Fk, Ik) {
        null !== this.resyncVisited && (this.resyncDamaged = !0);
        const Tk = {
          offset: Fk.offset
        };
        for (; Fk.offset < Ik && (kk[Fk.offset] !== Xk || (Tk.offset = Fk.offset + 1, !this.root.refs.has(KF.number(kk, Tk))));) Fk.offset++
      }
      getInstanceType(kk, Fk, Ik) {
        let Xk;
        if (213 === kk[Fk.offset]) {
          Fk.offset++;
          const Ik = KF.number(kk, Fk);
          Xk = this.context.get(Ik)
        }
        return Xk || Ik
      }
      createInstanceOfType(kk) {
        return kk.initializeForDecoder()
      }
      removeChildRefs(kk, Fk) {
        const Ik = "string" !== typeof kk[Hk],
          Xk = kk[lk];
        kk.forEach(((ik, yk) => {
          Fk?.push({
            ref: kk,
            refId: Xk,
            op: Tk.DELETE,
            field: yk,
            value: void 0,
            previousValue: ik
          }), Ik && this.root.removeRef(ik[lk])
        }))
      }
    }
    const hX = vX({
        min: eX.float64(),
        max: eX.float64(),
        bits: eX.uint8(),
        mode: eX.uint8()
      }, "QuantizedDescriptor"),
      rX = vX({
        name: eX.string(),
        type: eX.string(),
        referencedType: eX.number(),
        childPrimitive: eX.string(),
        quantized: eX.ref(hX).optional()
      }, "ReflectionField"),
      DX = vX({
        id: eX.number(),
        extendsId: eX.number(),
        fields: eX.array(rX)
      }, "ReflectionType"),
      MX = vX({
        types: eX.array(DX),
        rootType: eX.number()
      }, "Reflection");

    function kT(kk) {
      const Fk = kk.root,
        Ik = Fk.callbacks,
        Xk = new WeakMap;
      let ik;

      function yk(kk, Ik) {
        let qk = Ik.instance?.constructor[Symbol.metadata] || kk,
          Lk = Ik.instance && "function" === typeof Ik.instance.forEach || kk && !OX.is(kk);
        if (qk && !Lk) {
          const kk = function(kk, Tk, yk, ak) {
            return ak && void 0 !== Ik.instance[Tk] && !Xk.has(ik) && yk(Ik.instance[Tk], void 0), Fk.addCallback(kk[lk], Tk, yk)
          };
          return new Proxy({
            listen: function(Fk, Tk) {
              let yk = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
              if (Ik.instance) return kk(Ik.instance, Fk, Tk, yk);
              {
                let lk = () => {};
                return Ik.onInstanceAvailable(((Ik, ak) => {
                  lk = kk(Ik, Fk, Tk, yk && ak && !Xk.has(ik))
                })), () => lk()
              }
            },
            onChange: function(kk) {
              return Fk.addCallback(Ik.instance[lk], Tk.REPLACE, kk)
            },
            bindTo: function(kk, Xk) {
              return Xk || (Xk = Object.keys(qk).map((kk => qk[kk].name))), Fk.addCallback(Ik.instance[lk], Tk.REPLACE, (() => {
                Xk.forEach((Fk => kk[Fk] = Ik.instance[Fk]))
              }))
            }
          }, {
            get(kk, Fk) {
              const Xk = qk[qk[Fk]];
              if (Xk) {
                const kk = Ik.instance?.[Fk],
                  Tk = Xk => {
                    const Tk = ak(Ik.instance).listen(Fk, ((kk, Fk) => {
                      Xk(kk, !1), Tk?.()
                    }), !1);
                    void 0 !== kk?.[lk] && Xk(kk, !0)
                  };
                return yk(Xk.type, {
                  instance: void 0 !== kk?.[lk] && kk,
                  parentInstance: Ik.instance,
                  onInstanceAvailable: Tk
                })
              }
              return kk[Fk]
            },
            has: (kk, Fk) => void 0 !== qk[Fk],
            set(kk, Fk, Ik) {
              throw new Error("not allowed")
            },
            deleteProperty(kk, Fk) {
              throw new Error("not allowed")
            }
          })
        } {
          const kk = function(kk, Ik, yk) {
              return yk && kk.forEach(((kk, Fk) => Ik(kk, Fk))), Fk.addCallback(kk[lk], Tk.ADD, ((kk, Fk) => {
                Xk.set(Ik, !0), ik = Ik, Ik(kk, Fk), Xk.delete(Ik), ik = void 0
              }))
            },
            yk = function(kk, Ik) {
              return Fk.addCallback(kk[lk], Tk.DELETE, Ik)
            },
            ak = function(kk, Ik) {
              return Fk.addCallback(kk[lk], Tk.REPLACE, Ik)
            };
          return new Proxy({
            mJ: function(Fk) {
              let Tk = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
              if (Ik.instance) return kk(Ik.instance, Fk, Tk && !Xk.has(ik));
              if (Ik.onInstanceAvailable) {
                let yk = () => {};
                return Ik.onInstanceAvailable(((Ik, lk) => {
                  yk = kk(Ik, Fk, Tk && lk && !Xk.has(ik))
                })), () => yk()
              }
            },
            iG: function(kk) {
              if (Ik.instance) return yk(Ik.instance, kk);
              if (Ik.onInstanceAvailable) {
                let Fk = () => {};
                return Ik.onInstanceAvailable((Ik => {
                  Fk = yk(Ik, kk)
                })), () => Fk()
              }
            },
            onChange: function(kk) {
              if (Ik.instance) return ak(Ik.instance, kk);
              if (Ik.onInstanceAvailable) {
                let Fk = () => {};
                return Ik.onInstanceAvailable((Ik => {
                  Fk = ak(Ik, kk)
                })), () => Fk()
              }
            }
          }, {
            get(kk, Fk) {
              if (!kk[Fk]) throw new Error(`Can't access '${Fk}' through callback proxy. access the instance directly.`);
              return kk[Fk]
            },
            has: (kk, Fk) => void 0 !== kk[Fk],
            set(kk, Fk, Ik) {
              throw new Error("not allowed")
            },
            deleteProperty(kk, Fk) {
              throw new Error("not allowed")
            }
          })
        }
      }

      function ak(kk) {
        return yk(void 0, {
          instance: kk
        })
      }
      return kk.sG = function(kk) {
        const Fk = new Set;
        for (let Xk = 0, ik = kk.length; Xk < ik; Xk++) {
          const ik = kk[Xk],
            yk = ik.refId,
            ak = ik.ref,
            qk = Ik[yk];
          if (qk) {
            if ((ik.op & Tk.DELETE) === Tk.DELETE && OX.isSchema(ik.previousValue)) {
              const kk = Ik[ik.previousValue[lk]]?.[Tk.DELETE];
              for (let Fk = kk?.length - 1; Fk >= 0; Fk--) kk[Fk]()
            }
            if (OX.isSchema(ak)) {
              if (!Fk.has(yk)) {
                const kk = qk?.[Tk.REPLACE];
                for (let Fk = kk?.length - 1; Fk >= 0; Fk--) kk[Fk]()
              }
              if (qk.hasOwnProperty(ik.field)) {
                const kk = qk[ik.field];
                for (let Fk = kk?.length - 1; Fk >= 0; Fk--) kk[Fk](ik.value, ik.previousValue)
              }
            } else {
              if ((ik.op & Tk.DELETE) === Tk.DELETE) {
                if (void 0 !== ik.previousValue) {
                  const kk = qk[Tk.DELETE];
                  for (let Fk = kk?.length - 1; Fk >= 0; Fk--) kk[Fk](ik.previousValue, ik.dynamicIndex ?? ik.field)
                }
                if ((ik.op & Tk.ADD) === Tk.ADD) {
                  const kk = qk[Tk.ADD];
                  for (let Fk = kk?.length - 1; Fk >= 0; Fk--) kk[Fk](ik.value, ik.dynamicIndex ?? ik.field)
                }
              } else if ((ik.op & Tk.ADD) === Tk.ADD && ik.previousValue !== ik.value) {
                const kk = qk[Tk.ADD];
                for (let Fk = kk?.length - 1; Fk >= 0; Fk--) kk[Fk](ik.value, ik.dynamicIndex ?? ik.field)
              }
              if (ik.value !== ik.previousValue && (void 0 !== ik.value || void 0 !== ik.previousValue)) {
                const kk = qk[Tk.REPLACE];
                for (let Fk = kk?.length - 1; Fk >= 0; Fk--) kk[Fk](ik.value, ik.dynamicIndex ?? ik.field)
              }
            }
            Fk.add(yk)
          }
        }
      }, ak
    }

    function FT(kk, Fk) {
      kk.sG = Fk
    }
    MX.encode = function(kk) {
      let Fk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
        offset: 0
      };
      const Ik = kk.context,
        Xk = new MX,
        Tk = new dX(Xk),
        ik = Ik.schemas.get(kk.state.constructor);
      ik > 0 && (Xk.rootType = ik);
      const yk = new Set,
        lk = {},
        ak = kk => {
          if (void 0 === kk.extendsId || yk.has(kk.extendsId)) {
            yk.add(kk.id), Xk.types.push(kk);
            const Fk = lk[kk.id];
            void 0 !== Fk && (delete lk[kk.id], Fk.forEach((kk => ak(kk))))
          } else void 0 === lk[kk.extendsId] && (lk[kk.extendsId] = []), lk[kk.extendsId].push(kk)
        };
      Ik.schemas.forEach(((kk, Fk) => {
        const Xk = new DX;
        Xk.id = Number(kk);
        const Tk = Object.getPrototypeOf(Fk);
        Tk !== OX && (Xk.extendsId = Ik.schemas.get(Tk));
        const ik = Fk[Symbol.metadata];
        if (ik !== Tk[Symbol.metadata]) {
          const kk = ik[vk] ?? -1;
          for (let Fk = 0; Fk <= kk; Fk++) {
            const kk = ik[Fk];
            if (void 0 === kk) continue;
            const Tk = kk.name;
            if (!Object.prototype.hasOwnProperty.call(ik, Tk)) continue;
            const yk = new rX;
            let lk;
            if (yk.name = Tk, "string" === typeof kk.type) lk = kk.type;
            else if (UF(kk.type)) {
              const Fk = kk.type.quantized;
              lk = "quantized";
              const Ik = new hX;
              Ik.min = Fk.min, Ik.max = Fk.max, Ik.bits = Fk.bits, Ik.mode = Fk.wrap ? 1 : 0, yk.quantized = Ik
            } else {
              let Fk;
              OX.is(kk.type) ? (lk = "ref", Fk = kk.type) : (lk = Object.keys(kk.type)[0], "string" === typeof kk.type[lk] ? yk.childPrimitive = kk.type[lk] : Fk = kk.type[lk]), yk.referencedType = Fk ? Ik.getTypeId(Fk) : -1
            }
            yk.type = lk, Xk.fields.push(yk)
          }
        }
        ak(Xk)
      }));
      for (const qk in lk) lk[qk].forEach((kk => Xk.types.push(kk)));
      return Tk.encodeAll(Fk).slice(0, Fk.offset)
    }, MX.decode = function(kk, Fk) {
      const Ik = new MX;
      new mX(Ik).decode(kk, Fk);
      const Xk = new WF;
      Ik.types.forEach((kk => {
        const Fk = Xk.get(kk.extendsId) ?? OX,
          Ik = class extends Fk {};
        WF.register(Ik), Xk.add(Ik, kk.id)
      }), {});
      Ik.types.forEach((kk => {
        const Fk = Xk.get(kk.id),
          Tk = mF.initialize(Fk),
          ik = [];
        let yk = kk;
        do {
          ik.push(yk), yk = Ik.types.find((kk => kk.id === yk.extendsId))
        } while (yk);
        let lk = 0;
        ik.reverse().forEach((kk => {
          ((kk, Fk, Ik) => {
            Fk.fields.forEach(((Fk, Tk) => {
              const ik = Ik + Tk;
              if (void 0 !== Fk.quantized) {
                const Ik = Fk.quantized;
                mF.addField(kk, ik, Fk.name, {
                  quantized: RF({
                    min: Ik.min,
                    max: Ik.max,
                    bits: Ik.bits,
                    mode: 1 === Ik.mode ? "wrap" : "clamp"
                  })
                })
              } else if (void 0 !== Fk.referencedType) {
                const Ik = Fk.type,
                  Tk = Xk.get(Fk.referencedType) ?? Fk.childPrimitive;
                "ref" === Ik ? mF.addField(kk, ik, Fk.name, Tk) : mF.addField(kk, ik, Fk.name, {
                  [Ik]: Tk
                })
              } else mF.addField(kk, ik, Fk.name, Fk.type)
            }))
          })(Tk, kk, lk), lk += kk.fields.length
        }))
      }));
      const Tk = new(Xk.get(Ik.rootType || 0));
      return new mX(Tk, Xk)
    }, MX.makeEncodable = function(kk) {
      const Fk = kk[Symbol.metadata];
      if (!Fk) return kk;
      const Ik = Fk[vk];
      if (void 0 === Ik) return kk;
      for (let Xk = 0; Xk <= Ik; Xk++) {
        const Ik = Fk[Xk];
        Ik && mF.defineField(kk, Fk, Xk, Ik.name, Ik.type)
      }
      return Object.prototype.hasOwnProperty.call(kk, zk) && delete kk[zk], kk
    };
    class IT {
      Xe;
      uniqueRefIds = new Set;
      isTriggering = !1;
      constructor(kk) {
        this.Xe = kk, this.Xe.sG = this.sG.bind(this)
      }
      get callbacks() {
        return this.Xe.root.callbacks
      }
      get state() {
        return this.Xe.state
      }
      addCallback(kk, Fk, Ik) {
        return this.Xe.root.addCallback(kk, Fk, Ik)
      }
      addCallbackOrWaitCollectionAvailable(kk, Fk, Ik, Xk) {
        let ik = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4],
          yk = () => {};
        const ak = () => yk(),
          qk = kk[Fk];
        if (qk && void 0 !== qk[lk]) return ik = ik && !1 === this.isTriggering, Ik === Tk.ADD && ik && qk.forEach(((kk, Fk) => {
          Xk(kk, Fk)
        })), this.addCallback(qk[lk], Ik, Xk);
        {
          let Tk;
          return Tk = this.addCallback(kk[lk], Fk, ((kk, Fk) => {
            null !== kk && void 0 !== kk && (Tk(), yk = this.addCallback(kk[lk], Ik, Xk))
          })), yk = Tk, ak
        }
      }
      listen() {
        return "string" === typeof(arguments.length <= 0 ? void 0 : arguments[0]) ? this.listenInstance(this.state, arguments.length <= 0 ? void 0 : arguments[0], arguments.length <= 1 ? void 0 : arguments[1], arguments.length <= 2 ? void 0 : arguments[2]) : this.listenInstance(arguments.length <= 0 ? void 0 : arguments[0], arguments.length <= 1 ? void 0 : arguments[1], arguments.length <= 2 ? void 0 : arguments[2], arguments.length <= 3 ? void 0 : arguments[3])
      }
      listenInstance(kk, Fk, Ik) {
        let Xk = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
        Xk = Xk && !1 === this.isTriggering;
        const Tk = kk[Fk];
        return Xk && null !== Tk && void 0 !== Tk && Ik(Tk, void 0), this.addCallback(kk[lk], Fk, Ik)
      }
      onChange() {
        if (2 === arguments.length && "string" !== typeof(arguments.length <= 0 ? void 0 : arguments[0])) {
          const kk = arguments.length <= 0 ? void 0 : arguments[0],
            Fk = arguments.length <= 1 ? void 0 : arguments[1];
          return this.addCallback(kk[lk], Tk.REPLACE, Fk)
        }
        return "string" === typeof(arguments.length <= 0 ? void 0 : arguments[0]) ? this.addCallbackOrWaitCollectionAvailable(this.state, arguments.length <= 0 ? void 0 : arguments[0], Tk.REPLACE, arguments.length <= 1 ? void 0 : arguments[1]) : this.addCallbackOrWaitCollectionAvailable(arguments.length <= 0 ? void 0 : arguments[0], arguments.length <= 1 ? void 0 : arguments[1], Tk.REPLACE, arguments.length <= 2 ? void 0 : arguments[2])
      }
      mJ() {
        return "string" === typeof(arguments.length <= 0 ? void 0 : arguments[0]) ? this.addCallbackOrWaitCollectionAvailable(this.state, arguments.length <= 0 ? void 0 : arguments[0], Tk.ADD, arguments.length <= 1 ? void 0 : arguments[1], !1 !== (arguments.length <= 2 ? void 0 : arguments[2])) : this.addCallbackOrWaitCollectionAvailable(arguments.length <= 0 ? void 0 : arguments[0], arguments.length <= 1 ? void 0 : arguments[1], Tk.ADD, arguments.length <= 2 ? void 0 : arguments[2], !1 !== (arguments.length <= 3 ? void 0 : arguments[3]))
      }
      iG() {
        return "string" === typeof(arguments.length <= 0 ? void 0 : arguments[0]) ? this.addCallbackOrWaitCollectionAvailable(this.state, arguments.length <= 0 ? void 0 : arguments[0], Tk.DELETE, arguments.length <= 1 ? void 0 : arguments[1]) : this.addCallbackOrWaitCollectionAvailable(arguments.length <= 0 ? void 0 : arguments[0], arguments.length <= 1 ? void 0 : arguments[1], Tk.DELETE, arguments.length <= 2 ? void 0 : arguments[2])
      }
      bindTo(kk, Fk, Ik) {
        let Xk = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
        const ik = kk.constructor[Symbol.metadata];
        Ik || (Ik = Object.keys(ik).filter((kk => !isNaN(Number(kk)))).map((kk => ik[kk].name)));
        const yk = () => {
          for (const Xk of Ik) {
            const Ik = kk[Xk];
            void 0 !== Ik && (Fk[Xk] = Ik)
          }
        };
        return Xk && yk(), this.addCallback(kk[lk], Tk.REPLACE, yk)
      }
      sG(kk) {
        this.uniqueRefIds.clear(), this.isTriggering = !0;
        for (let Fk = 0, Ik = kk.length; Fk < Ik; Fk++) {
          const Ik = kk[Fk],
            Xk = Ik.refId,
            ik = Ik.ref,
            yk = this.callbacks[Xk];
          if (yk) {
            if ((Ik.op & Tk.DELETE) === Tk.DELETE && OX.isSchema(Ik.previousValue)) {
              const kk = Ik.previousValue[lk],
                Fk = this.callbacks[kk]?.[Tk.DELETE];
              if (Fk)
                for (let Ik = Fk.length - 1; Ik >= 0; Ik--) try {
                  Fk[Ik]()
                } catch (yT) {
                  console.error(yT)
                }
            }
            if (OX.isSchema(ik)) {
              if (!this.uniqueRefIds.has(Xk)) {
                const kk = yk[Tk.REPLACE];
                if (kk)
                  for (let Fk = kk.length - 1; Fk >= 0; Fk--) try {
                    kk[Fk]()
                  } catch (yT) {
                    console.error(yT)
                  }
              }
              const kk = yk[Ik.field];
              if (kk)
                for (let Fk = kk.length - 1; Fk >= 0; Fk--) try {
                  kk[Fk](Ik.value, Ik.previousValue)
                } catch (yT) {
                  console.error(yT)
                }
            } else {
              const kk = Ik.dynamicIndex ?? Ik.field;
              if ((Ik.op & Tk.DELETE) === Tk.DELETE) {
                if (void 0 !== Ik.previousValue) {
                  const Fk = yk[Tk.DELETE];
                  if (Fk)
                    for (let Xk = Fk.length - 1; Xk >= 0; Xk--) try {
                      Fk[Xk](Ik.previousValue, kk)
                    } catch (yT) {
                      console.error(yT)
                    }
                }
                if ((Ik.op & Tk.ADD) === Tk.ADD) {
                  const Fk = yk[Tk.ADD];
                  if (Fk)
                    for (let Xk = Fk.length - 1; Xk >= 0; Xk--) try {
                      Fk[Xk](Ik.value, kk)
                    } catch (yT) {
                      console.error(yT)
                    }
                }
              } else if ((Ik.op & Tk.ADD) === Tk.ADD && Ik.previousValue !== Ik.value) {
                const Fk = yk[Tk.ADD];
                if (Fk)
                  for (let Xk = Fk.length - 1; Xk >= 0; Xk--) try {
                    Fk[Xk](Ik.value, kk)
                  } catch (yT) {
                    console.error(yT)
                  }
              }
              if (Ik.value !== Ik.previousValue) {
                const Fk = yk[Tk.REPLACE];
                if (Fk)
                  for (let Xk = Fk.length - 1; Xk >= 0; Xk--) try {
                    Fk[Xk](kk, Ik.value)
                  } catch (yT) {
                    console.error(yT)
                  }
              }
            }
            this.uniqueRefIds.add(Xk)
          }
        }
        this.isTriggering = !1
      }
    }
    const XT = {
      get(kk) {
        if (kk instanceof mX) return new IT(kk);
        if ("Xe" in kk.LJ) return new IT(kk.LJ.Xe);
        throw new Error("Invalid room or decoder")
      },
      getLegacy(kk) {
        if (kk instanceof mX) return kT(kk);
        if ("Xe" in kk.LJ) return kT(kk.LJ.Xe);
        throw new Error("Invalid room or decoder")
      },
      getRawChanges: (kk, Fk) => FT(kk, Fk)
    };
    class TT {
      _free = [];
      _factory;
      _maxSize;
      constructor(kk) {
        let Fk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        this._factory = kk, this._maxSize = Fk.maxSize ?? 1 / 0;
        const Ik = Fk.preallocate ?? 0;
        for (let Xk = 0; Xk < Ik; Xk++) this._free.push(kk())
      }
      acquire() {
        return this._free.length > 0 ? this._free.pop() : this._factory()
      }
      release(kk) {
        OX.reset(kk), this._free.length < this._maxSize && this._free.push(kk)
      }
      get size() {
        return this._free.length
      }
    }

    function iT(kk) {
      return new TT((() => new kk), arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {})
    }
    VF("map", {
      constructor: iX
    }), VF("array", {
      constructor: XX
    }), VF("set", {
      constructor: lX
    }), VF("collection", {
      constructor: yX
    })
  },
  9070: (kk, Fk, Ik) => {
    Ik.r(Fk), Ik.d(Fk, {
      __addDisposableResource: () => Uk,
      __assign: () => ik,
      __asyncDelegator: () => Sk,
      __asyncGenerator: () => zk,
      __asyncValues: () => vk,
      __await: () => Vk,
      __awaiter: () => ek,
      __classPrivateFieldGet: () => uk,
      __classPrivateFieldIn: () => Rk,
      __classPrivateFieldSet: () => bk,
      __createBinding: () => Hk,
      __decorate: () => lk,
      __disposeResources: () => Nk,
      __esDecorate: () => qk,
      __exportStar: () => Jk,
      __extends: () => Tk,
      __generator: () => wk,
      __importDefault: () => pk,
      __importStar: () => Gk,
      __makeTemplateObject: () => Ek,
      __metadata: () => jk,
      __param: () => ak,
      __propKey: () => tk,
      __read: () => Pk,
      __rest: () => yk,
      __rewriteRelativeImportExtension: () => ck,
      __runInitializers: () => Lk,
      __setFunctionName: () => Zk,
      __spread: () => Kk,
      __spreadArray: () => sk,
      __spreadArrays: () => Qk,
      __values: () => xk,
      default: () => Wk
    });
    var Xk = function(kk, Fk) {
      return Xk = Object.setPrototypeOf || {
        __proto__: []
      }
      instanceof Array && function(kk, Fk) {
        kk.__proto__ = Fk
      } || function(kk, Fk) {
        for (var Ik in Fk) Object.prototype.hasOwnProperty.call(Fk, Ik) && (kk[Ik] = Fk[Ik])
      }, Xk(kk, Fk)
    };

    function Tk(kk, Fk) {
      if ("function" !== typeof Fk && null !== Fk) throw new TypeError("Class extends value " + String(Fk) + " is not a constructor or null");

      function Ik() {
        this.constructor = kk
      }
      Xk(kk, Fk), kk.prototype = null === Fk ? Object.create(Fk) : (Ik.prototype = Fk.prototype, new Ik)
    }
    var ik = function() {
      return ik = Object.assign || function(kk) {
        for (var Fk, Ik = 1, Xk = arguments.length; Ik < Xk; Ik++)
          for (var Tk in Fk = arguments[Ik]) Object.prototype.hasOwnProperty.call(Fk, Tk) && (kk[Tk] = Fk[Tk]);
        return kk
      }, ik.apply(this, arguments)
    };

    function yk(kk, Fk) {
      var Ik = {};
      for (var Xk in kk) Object.prototype.hasOwnProperty.call(kk, Xk) && Fk.indexOf(Xk) < 0 && (Ik[Xk] = kk[Xk]);
      if (null != kk && "function" === typeof Object.getOwnPropertySymbols) {
        var Tk = 0;
        for (Xk = Object.getOwnPropertySymbols(kk); Tk < Xk.length; Tk++) Fk.indexOf(Xk[Tk]) < 0 && Object.prototype.propertyIsEnumerable.call(kk, Xk[Tk]) && (Ik[Xk[Tk]] = kk[Xk[Tk]])
      }
      return Ik
    }

    function lk(kk, Fk, Ik, Xk) {
      var Tk, ik = arguments.length,
        yk = ik < 3 ? Fk : null === Xk ? Xk = Object.getOwnPropertyDescriptor(Fk, Ik) : Xk;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) yk = Reflect.decorate(kk, Fk, Ik, Xk);
      else
        for (var lk = kk.length - 1; lk >= 0; lk--)(Tk = kk[lk]) && (yk = (ik < 3 ? Tk(yk) : ik > 3 ? Tk(Fk, Ik, yk) : Tk(Fk, Ik)) || yk);
      return ik > 3 && yk && Object.defineProperty(Fk, Ik, yk), yk
    }

    function ak(kk, Fk) {
      return function(Ik, Xk) {
        Fk(Ik, Xk, kk)
      }
    }

    function qk(kk, Fk, Ik, Xk, Tk, ik) {
      function yk(kk) {
        if (void 0 !== kk && "function" !== typeof kk) throw new TypeError("Function expected");
        return kk
      }
      for (var lk, ak = Xk.kind, qk = "getter" === ak ? "get" : "setter" === ak ? "set" : "value", Lk = !Fk && kk ? Xk.static ? kk : kk.prototype : null, tk = Fk || (Lk ? Object.getOwnPropertyDescriptor(Lk, Xk.name) : {}), Zk = !1, jk = Ik.length - 1; jk >= 0; jk--) {
        var ek = {};
        for (var wk in Xk) ek[wk] = "access" === wk ? {} : Xk[wk];
        for (var wk in Xk.access) ek.access[wk] = Xk.access[wk];
        ek.addInitializer = function(kk) {
          if (Zk) throw new TypeError("Cannot add initializers after decoration has completed");
          ik.push(yk(kk || null))
        };
        var Hk = (0, Ik[jk])("accessor" === ak ? {
          get: tk.get,
          set: tk.set
        } : tk[qk], ek);
        if ("accessor" === ak) {
          if (void 0 === Hk) continue;
          if (null === Hk || "object" !== typeof Hk) throw new TypeError("Object expected");
          (lk = yk(Hk.get)) && (tk.get = lk), (lk = yk(Hk.set)) && (tk.set = lk), (lk = yk(Hk.init)) && Tk.unshift(lk)
        } else(lk = yk(Hk)) && ("field" === ak ? Tk.unshift(lk) : tk[qk] = lk)
      }
      Lk && Object.defineProperty(Lk, Xk.name, tk), Zk = !0
    }

    function Lk(kk, Fk, Ik) {
      for (var Xk = arguments.length > 2, Tk = 0; Tk < Fk.length; Tk++) Ik = Xk ? Fk[Tk].call(kk, Ik) : Fk[Tk].call(kk);
      return Xk ? Ik : void 0
    }

    function tk(kk) {
      return "symbol" === typeof kk ? kk : "".concat(kk)
    }

    function Zk(kk, Fk, Ik) {
      return "symbol" === typeof Fk && (Fk = Fk.description ? "[".concat(Fk.description, "]") : ""), Object.defineProperty(kk, "name", {
        configurable: !0,
        value: Ik ? "".concat(Ik, " ", Fk) : Fk
      })
    }

    function jk(kk, Fk) {
      if ("object" === typeof Reflect && "function" === typeof Reflect.metadata) return Reflect.metadata(kk, Fk)
    }

    function ek(kk, Fk, Ik, Xk) {
      return new(Ik || (Ik = Promise))((function(Tk, ik) {
        function yk(kk) {
          try {
            ak(Xk.next(kk))
          } catch (Fk) {
            ik(Fk)
          }
        }

        function lk(kk) {
          try {
            ak(Xk.throw(kk))
          } catch (Fk) {
            ik(Fk)
          }
        }

        function ak(kk) {
          var Fk;
          kk.done ? Tk(kk.value) : (Fk = kk.value, Fk instanceof Ik ? Fk : new Ik((function(kk) {
            kk(Fk)
          }))).then(yk, lk)
        }
        ak((Xk = Xk.apply(kk, Fk || [])).next())
      }))
    }

    function wk(kk, Fk) {
      var Ik, Xk, Tk, ik = {
          label: 0,
          sent: function() {
            if (1 & Tk[0]) throw Tk[1];
            return Tk[1]
          },
          trys: [],
          ops: []
        },
        yk = Object.create(("function" === typeof Iterator ? Iterator : Object).prototype);
      return yk.next = lk(0), yk.throw = lk(1), yk.return = lk(2), "function" === typeof Symbol && (yk[Symbol.iterator] = function() {
        return this
      }), yk;

      function lk(lk) {
        return function(ak) {
          return function(lk) {
            if (Ik) throw new TypeError("Generator is already executing.");
            for (; yk && (yk = 0, lk[0] && (ik = 0)), ik;) try {
              if (Ik = 1, Xk && (Tk = 2 & lk[0] ? Xk.return : lk[0] ? Xk.throw || ((Tk = Xk.return) && Tk.call(Xk), 0) : Xk.next) && !(Tk = Tk.call(Xk, lk[1])).done) return Tk;
              switch (Xk = 0, Tk && (lk = [2 & lk[0], Tk.value]), lk[0]) {
                case 0:
                case 1:
                  Tk = lk;
                  break;
                case 4:
                  return ik.label++, {
                    value: lk[1],
                    done: !1
                  };
                case 5:
                  ik.label++, Xk = lk[1], lk = [0];
                  continue;
                case 7:
                  lk = ik.ops.pop(), ik.trys.pop();
                  continue;
                default:
                  if (!(Tk = (Tk = ik.trys).length > 0 && Tk[Tk.length - 1]) && (6 === lk[0] || 2 === lk[0])) {
                    ik = 0;
                    continue
                  }
                  if (3 === lk[0] && (!Tk || lk[1] > Tk[0] && lk[1] < Tk[3])) {
                    ik.label = lk[1];
                    break
                  }
                  if (6 === lk[0] && ik.label < Tk[1]) {
                    ik.label = Tk[1], Tk = lk;
                    break
                  }
                  if (Tk && ik.label < Tk[2]) {
                    ik.label = Tk[2], ik.ops.push(lk);
                    break
                  }
                  Tk[2] && ik.ops.pop(), ik.trys.pop();
                  continue
              }
              lk = Fk.call(kk, ik)
            } catch (ak) {
              lk = [6, ak], Xk = 0
            } finally {
              Ik = Tk = 0
            }
            if (5 & lk[0]) throw lk[1];
            return {
              value: lk[0] ? lk[1] : void 0,
              done: !0
            }
          }([lk, ak])
        }
      }
    }
    var Hk = Object.create ? function(kk, Fk, Ik, Xk) {
      void 0 === Xk && (Xk = Ik);
      var Tk = Object.getOwnPropertyDescriptor(Fk, Ik);
      Tk && !("get" in Tk ? !Fk.__esModule : Tk.writable || Tk.configurable) || (Tk = {
        enumerable: !0,
        get: function() {
          return Fk[Ik]
        }
      }), Object.defineProperty(kk, Xk, Tk)
    } : function(kk, Fk, Ik, Xk) {
      void 0 === Xk && (Xk = Ik), kk[Xk] = Fk[Ik]
    };

    function Jk(kk, Fk) {
      for (var Ik in kk) "default" === Ik || Object.prototype.hasOwnProperty.call(Fk, Ik) || Hk(Fk, kk, Ik)
    }

    function xk(kk) {
      var Fk = "function" === typeof Symbol && Symbol.iterator,
        Ik = Fk && kk[Fk],
        Xk = 0;
      if (Ik) return Ik.call(kk);
      if (kk && "number" === typeof kk.length) return {
        next: function() {
          return kk && Xk >= kk.length && (kk = void 0), {
            value: kk && kk[Xk++],
            done: !kk
          }
        }
      };
      throw new TypeError(Fk ? "Object is not iterable." : "Symbol.iterator is not defined.")
    }

    function Pk(kk, Fk) {
      var Ik = "function" === typeof Symbol && kk[Symbol.iterator];
      if (!Ik) return kk;
      var Xk, Tk, ik = Ik.call(kk),
        yk = [];
      try {
        for (;
          (void 0 === Fk || Fk-- > 0) && !(Xk = ik.next()).done;) yk.push(Xk.value)
      } catch (lk) {
        Tk = {
          error: lk
        }
      } finally {
        try {
          Xk && !Xk.done && (Ik = ik.return) && Ik.call(ik)
        } finally {
          if (Tk) throw Tk.error
        }
      }
      return yk
    }

    function Kk() {
      for (var kk = [], Fk = 0; Fk < arguments.length; Fk++) kk = kk.concat(Pk(arguments[Fk]));
      return kk
    }

    function Qk() {
      for (var kk = 0, Fk = 0, Ik = arguments.length; Fk < Ik; Fk++) kk += arguments[Fk].length;
      var Xk = Array(kk),
        Tk = 0;
      for (Fk = 0; Fk < Ik; Fk++)
        for (var ik = arguments[Fk], yk = 0, lk = ik.length; yk < lk; yk++, Tk++) Xk[Tk] = ik[yk];
      return Xk
    }

    function sk(kk, Fk, Ik) {
      if (Ik || 2 === arguments.length)
        for (var Xk, Tk = 0, ik = Fk.length; Tk < ik; Tk++) !Xk && Tk in Fk || (Xk || (Xk = Array.prototype.slice.call(Fk, 0, Tk)), Xk[Tk] = Fk[Tk]);
      return kk.concat(Xk || Array.prototype.slice.call(Fk))
    }

    function Vk(kk) {
      return this instanceof Vk ? (this.v = kk, this) : new Vk(kk)
    }

    function zk(kk, Fk, Ik) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var Xk, Tk = Ik.apply(kk, Fk || []),
        ik = [];
      return Xk = Object.create(("function" === typeof AsyncIterator ? AsyncIterator : Object).prototype), yk("next"), yk("throw"), yk("return", (function(kk) {
        return function(Fk) {
          return Promise.resolve(Fk).then(kk, qk)
        }
      })), Xk[Symbol.asyncIterator] = function() {
        return this
      }, Xk;

      function yk(kk, Fk) {
        Tk[kk] && (Xk[kk] = function(Fk) {
          return new Promise((function(Ik, Xk) {
            ik.push([kk, Fk, Ik, Xk]) > 1 || lk(kk, Fk)
          }))
        }, Fk && (Xk[kk] = Fk(Xk[kk])))
      }

      function lk(kk, Fk) {
        try {
          (Ik = Tk[kk](Fk)).value instanceof Vk ? Promise.resolve(Ik.value.v).then(ak, qk) : Lk(ik[0][2], Ik)
        } catch (Xk) {
          Lk(ik[0][3], Xk)
        }
        var Ik
      }

      function ak(kk) {
        lk("next", kk)
      }

      function qk(kk) {
        lk("throw", kk)
      }

      function Lk(kk, Fk) {
        kk(Fk), ik.shift(), ik.length && lk(ik[0][0], ik[0][1])
      }
    }

    function Sk(kk) {
      var Fk, Ik;
      return Fk = {}, Xk("next"), Xk("throw", (function(kk) {
        throw kk
      })), Xk("return"), Fk[Symbol.iterator] = function() {
        return this
      }, Fk;

      function Xk(Xk, Tk) {
        Fk[Xk] = kk[Xk] ? function(Fk) {
          return (Ik = !Ik) ? {
            value: Vk(kk[Xk](Fk)),
            done: !1
          } : Tk ? Tk(Fk) : Fk
        } : Tk
      }
    }

    function vk(kk) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var Fk, Ik = kk[Symbol.asyncIterator];
      return Ik ? Ik.call(kk) : (kk = xk(kk), Fk = {}, Xk("next"), Xk("throw"), Xk("return"), Fk[Symbol.asyncIterator] = function() {
        return this
      }, Fk);

      function Xk(Ik) {
        Fk[Ik] = kk[Ik] && function(Fk) {
          return new Promise((function(Xk, Tk) {
            (function(kk, Fk, Ik, Xk) {
              Promise.resolve(Xk).then((function(Fk) {
                kk({
                  value: Fk,
                  done: Ik
                })
              }), Fk)
            })(Xk, Tk, (Fk = kk[Ik](Fk)).done, Fk.value)
          }))
        }
      }
    }

    function Ek(kk, Fk) {
      return Object.defineProperty ? Object.defineProperty(kk, "raw", {
        value: Fk
      }) : kk.raw = Fk, kk
    }
    var Ok = Object.create ? function(kk, Fk) {
        Object.defineProperty(kk, "default", {
          enumerable: !0,
          value: Fk
        })
      } : function(kk, Fk) {
        kk.default = Fk
      },
      nk = function(kk) {
        return nk = Object.getOwnPropertyNames || function(kk) {
          var Fk = [];
          for (var Ik in kk) Object.prototype.hasOwnProperty.call(kk, Ik) && (Fk[Fk.length] = Ik);
          return Fk
        }, nk(kk)
      };

    function Gk(kk) {
      if (kk && kk.__esModule) return kk;
      var Fk = {};
      if (null != kk)
        for (var Ik = nk(kk), Xk = 0; Xk < Ik.length; Xk++) "default" !== Ik[Xk] && Hk(Fk, kk, Ik[Xk]);
      return Ok(Fk, kk), Fk
    }

    function pk(kk) {
      return kk && kk.__esModule ? kk : {
        default: kk
      }
    }

    function uk(kk, Fk, Ik, Xk) {
      if ("a" === Ik && !Xk) throw new TypeError("Private accessor was defined without a getter");
      if ("function" === typeof Fk ? kk !== Fk || !Xk : !Fk.has(kk)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
      return "m" === Ik ? Xk : "a" === Ik ? Xk.call(kk) : Xk ? Xk.value : Fk.get(kk)
    }

    function bk(kk, Fk, Ik, Xk, Tk) {
      if ("m" === Xk) throw new TypeError("Private method is not writable");
      if ("a" === Xk && !Tk) throw new TypeError("Private accessor was defined without a setter");
      if ("function" === typeof Fk ? kk !== Fk || !Tk : !Fk.has(kk)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
      return "a" === Xk ? Tk.call(kk, Ik) : Tk ? Tk.value = Ik : Fk.set(kk, Ik), Ik
    }

    function Rk(kk, Fk) {
      if (null === Fk || "object" !== typeof Fk && "function" !== typeof Fk) throw new TypeError("Cannot use 'in' operator on non-object");
      return "function" === typeof kk ? Fk === kk : kk.has(Fk)
    }

    function Uk(kk, Fk, Ik) {
      if (null !== Fk && void 0 !== Fk) {
        if ("object" !== typeof Fk && "function" !== typeof Fk) throw new TypeError("Object expected.");
        var Xk, Tk;
        if (Ik) {
          if (!Symbol.asyncDispose) throw new TypeError("Symbol.asyncDispose is not defined.");
          Xk = Fk[Symbol.asyncDispose]
        }
        if (void 0 === Xk) {
          if (!Symbol.dispose) throw new TypeError("Symbol.dispose is not defined.");
          Xk = Fk[Symbol.dispose], Ik && (Tk = Xk)
        }
        if ("function" !== typeof Xk) throw new TypeError("Object not disposable.");
        Tk && (Xk = function() {
          try {
            Tk.call(this)
          } catch (kk) {
            return Promise.reject(kk)
          }
        }), kk.stack.push({
          value: Fk,
          dispose: Xk,
          async: Ik
        })
      } else Ik && kk.stack.push({
        async: !0
      });
      return Fk
    }
    var Ck = "function" === typeof SuppressedError ? SuppressedError : function(kk, Fk, Ik) {
      var Xk = new Error(Ik);
      return Xk.name = "SuppressedError", Xk.error = kk, Xk.suppressed = Fk, Xk
    };

    function Nk(kk) {
      function Fk(Fk) {
        kk.error = kk.hasError ? new Ck(Fk, kk.error, "An error was suppressed during disposal.") : Fk, kk.hasError = !0
      }
      var Ik, Xk = 0;
      return function Tk() {
        for (; Ik = kk.stack.pop();) try {
          if (!Ik.async && 1 === Xk) return Xk = 0, kk.stack.push(Ik), Promise.resolve().then(Tk);
          if (Ik.dispose) {
            var ik = Ik.dispose.call(Ik.value);
            if (Ik.async) return Xk |= 2, Promise.resolve(ik).then(Tk, (function(kk) {
              return Fk(kk), Tk()
            }))
          } else Xk |= 1
        } catch (yk) {
          Fk(yk)
        }
        if (1 === Xk) return kk.hasError ? Promise.reject(kk.error) : Promise.resolve();
        if (kk.hasError) throw kk.error
      }()
    }

    function ck(kk, Fk) {
      return "string" === typeof kk && /^\.\.?\//.test(kk) ? kk.replace(/\.(tsx)$|((?:\.d)?)((?:\.[^./]+?)?)\.([cm]?)ts$/i, (function(kk, Ik, Xk, Tk, ik) {
        return Ik ? Fk ? ".jsx" : ".js" : !Xk || Tk && ik ? Xk + Tk + "." + ik.toLowerCase() + "js" : kk
      })) : kk
    }
    const Wk = {
      __extends: Tk,
      __assign: ik,
      __rest: yk,
      __decorate: lk,
      __param: ak,
      __esDecorate: qk,
      __runInitializers: Lk,
      __propKey: tk,
      __setFunctionName: Zk,
      __metadata: jk,
      __awaiter: ek,
      __generator: wk,
      __createBinding: Hk,
      __exportStar: Jk,
      __values: xk,
      __read: Pk,
      __spread: Kk,
      __spreadArrays: Qk,
      __spreadArray: sk,
      __await: Vk,
      __asyncGenerator: zk,
      __asyncDelegator: Sk,
      __asyncValues: vk,
      __makeTemplateObject: Ek,
      __importStar: Gk,
      __importDefault: pk,
      __classPrivateFieldGet: uk,
      __classPrivateFieldSet: bk,
      __classPrivateFieldIn: Rk,
      __addDisposableResource: Uk,
      __disposeResources: Nk,
      __rewriteRelativeImportExtension: ck
    }
  }
};
Object.freeze(modules);
for (const kk in modules) Object.freeze(modules[kk]);