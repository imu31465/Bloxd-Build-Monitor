export const id = 187;
export const ids = [187];
export const modules = {
  8999: (kk, ek) => {
    ek.discordURLBuilder = function(kk) {
      var ek;
      const ik = (null === (ek = null === window || void 0 === window ? void 0 : window.location) || void 0 === ek ? void 0 : ek.hostname) || "localhost",
        Dk = kk.hostname.split("."),
        fk = !kk.hostname.includes("trycloudflare.com") && !kk.hostname.includes("discordsays.com") && Dk.length > 2 ? `/${Dk[0]}` : "";
      return kk.pathname.startsWith("/.proxy") ? `${kk.protocol}//${ik}${fk}${kk.pathname}${kk.search}` : `${kk.protocol}//${ik}/.proxy/colyseus${fk}${kk.pathname}${kk.search}`
    }
  },
  8994: (kk, ek, ik) => {
    var Dk, fk, Sk, bk, rk = ik(8902),
      Pk = ik(8996),
      mk = ik(8952);
    Dk = new WeakMap, fk = new WeakMap, Sk = new WeakMap, bk = new WeakMap, ek.Auth = class {
      constructor(kk) {
        this.http = kk, this.settings = {
          path: "/auth",
          key: "colyseus-auth-token"
        }, Dk.set(this, !1), fk.set(this, void 0), Sk.set(this, void 0), bk.set(this, mk.createNanoEvents()), Pk.getItem(this.settings.key, (kk => this.token = kk))
      }
      set token(kk) {
        this.http.authToken = kk
      }
      get token() {
        return this.http.authToken
      }
      onChange(kk) {
        const ek = rk.__classPrivateFieldGet(this, bk, "f").on("change", kk);
        return rk.__classPrivateFieldGet(this, Dk, "f") || rk.__classPrivateFieldSet(this, fk, new Promise(((kk, ek) => {
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
        })), "f"), rk.__classPrivateFieldSet(this, Dk, !0, "f"), ek
      }
      getUserData() {
        return rk.__awaiter(this, void 0, void 0, (function*() {
          if (this.token) return (yield this.http.get(`${this.settings.path}/userdata`)).data;
          throw new Error("missing auth.token")
        }))
      }
      registerWithEmailAndPassword(kk, ek, ik) {
        return rk.__awaiter(this, void 0, void 0, (function*() {
          const Dk = (yield this.http.post(`${this.settings.path}/register`, {
            body: {
              email: kk,
              password: ek,
              options: ik
            }
          })).data;
          return this.emitChange(Dk), Dk
        }))
      }
      signInWithEmailAndPassword(kk, ek) {
        return rk.__awaiter(this, void 0, void 0, (function*() {
          const ik = (yield this.http.post(`${this.settings.path}/login`, {
            body: {
              email: kk,
              password: ek
            }
          })).data;
          return this.emitChange(ik), ik
        }))
      }
      signInAnonymously(kk) {
        return rk.__awaiter(this, void 0, void 0, (function*() {
          const ek = (yield this.http.post(`${this.settings.path}/anonymous`, {
            body: {
              options: kk
            }
          })).data;
          return this.emitChange(ek), ek
        }))
      }
      sendPasswordResetEmail(kk) {
        return rk.__awaiter(this, void 0, void 0, (function*() {
          return (yield this.http.post(`${this.settings.path}/forgot-password`, {
            body: {
              email: kk
            }
          })).data
        }))
      }
      signInWithProvider(kk) {
        return rk.__awaiter(this, arguments, void 0, (function*(kk) {
          let ek = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          return new Promise(((ik, Dk) => {
            const fk = ek.width || 480,
              bk = ek.height || 768,
              Pk = this.token ? `?token=${this.token}` : "",
              mk = `Login with ${kk[0].toUpperCase()+kk.substring(1)}`,
              Mk = this.http.client.getHttpEndpoint(`${ek.prefix||`${this.settings.path}/provider`}/${kk}${Pk}`),
              Kk = screen.width / 2 - fk / 2,
              xk = screen.height / 2 - bk / 2;
            rk.__classPrivateFieldSet(this, Sk, window.open(Mk, mk, "toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no, copyhistory=no, width=" + fk + ", height=" + bk + ", top=" + xk + ", left=" + Kk), "f");
            const nk = kk => {
                void 0 === kk.data.user && void 0 === kk.data.token || (clearInterval(Uk), rk.__classPrivateFieldGet(this, Sk, "f").close(), rk.__classPrivateFieldSet(this, Sk, void 0, "f"), window.removeEventListener("message", nk), void 0 !== kk.data.error ? Dk(kk.data.error) : (ik(kk.data), this.emitChange(kk.data)))
              },
              Uk = setInterval((() => {
                rk.__classPrivateFieldGet(this, Sk, "f") && !rk.__classPrivateFieldGet(this, Sk, "f").closed || (rk.__classPrivateFieldSet(this, Sk, void 0, "f"), Dk("Ji"), window.removeEventListener("message", nk))
              }), 200);
            window.addEventListener("message", nk)
          }))
        }))
      }
      signOut() {
        return rk.__awaiter(this, void 0, void 0, (function*() {
          this.emitChange({
            user: null,
            token: null
          })
        }))
      }
      emitChange(kk) {
        void 0 !== kk.token && (this.token = kk.token, null === kk.token ? Pk.removeItem(this.settings.key) : Pk.setItem(this.settings.key, kk.token)), rk.__classPrivateFieldGet(this, bk, "f").emit("change", kk)
      }
    }
  },
  8897: (kk, ek, ik) => {
    var Dk, fk = ik(8902),
      Sk = ik(8910),
      bk = ik(8916),
      rk = ik(8979),
      Pk = ik(8994),
      mk = ik(8999);
    class Mk extends Error {
      constructor(kk, ek) {
        super(kk), this.code = ek, this.name = "MatchMakeError", Object.setPrototypeOf(this, Mk.prototype)
      }
    }
    const Kk = "undefined" !== typeof window && "undefined" !== typeof(null === (Dk = null === window || void 0 === window ? void 0 : window.location) || void 0 === Dk ? void 0 : Dk.hostname) ? `${window.location.protocol.replace("http","ws")}//${window.location.hostname}${window.location.port&&`:${window.location.port}`}` : "ws://127.0.0.1:2567";
    class xk {
      constructor() {
        let kk = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Kk,
          ek = arguments.length > 1 ? arguments[1] : void 0;
        var ik, Dk;
        if ("string" === typeof kk) {
          const ek = kk.startsWith("/") ? new URL(kk, Kk) : new URL(kk),
            ik = "https:" === ek.protocol || "wss:" === ek.protocol,
            Dk = Number(ek.port || (ik ? 443 : 80));
          this.settings = {
            hostname: ek.hostname,
            pathname: ek.pathname,
            port: Dk,
            secure: ik,
            searchParams: ek.searchParams.toString() || void 0
          }
        } else void 0 === kk.port && (kk.port = kk.secure ? 443 : 80), void 0 === kk.pathname && (kk.pathname = ""), this.settings = kk;
        this.settings.pathname.endsWith("/") && (this.settings.pathname = this.settings.pathname.slice(0, -1)), this.http = new rk.HTTP(this, (null === ek || void 0 === ek ? void 0 : ek.headers) || {}), this.auth = new Pk.Auth(this.http), this.urlBuilder = null === ek || void 0 === ek ? void 0 : ek.urlBuilder, !this.urlBuilder && "undefined" !== typeof window && (null === (Dk = null === (ik = null === window || void 0 === window ? void 0 : window.location) || void 0 === ik ? void 0 : ik.hostname) || void 0 === Dk ? void 0 : Dk.includes("discordsays.com")) && (this.urlBuilder = mk.discordURLBuilder, console.log("Colyseus SDK: Discord Embedded SDK detected. Using custom URL builder."))
      }
      joinOrCreate(kk) {
        return fk.__awaiter(this, arguments, void 0, (function*(kk) {
          let ek = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            ik = arguments.length > 2 ? arguments[2] : void 0;
          return yield this.createMatchMakeRequest("joinOrCreate", kk, ek, ik)
        }))
      }
      create(kk) {
        return fk.__awaiter(this, arguments, void 0, (function*(kk) {
          let ek = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            ik = arguments.length > 2 ? arguments[2] : void 0;
          return yield this.createMatchMakeRequest("create", kk, ek, ik)
        }))
      }
      join(kk) {
        return fk.__awaiter(this, arguments, void 0, (function*(kk) {
          let ek = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            ik = arguments.length > 2 ? arguments[2] : void 0;
          return yield this.createMatchMakeRequest("join", kk, ek, ik)
        }))
      }
      joinById(kk) {
        return fk.__awaiter(this, arguments, void 0, (function*(kk) {
          let ek = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            ik = arguments.length > 2 ? arguments[2] : void 0;
          return yield this.createMatchMakeRequest("joinById", kk, ek, ik)
        }))
      }
      reconnect(kk, ek) {
        return fk.__awaiter(this, void 0, void 0, (function*() {
          if ("string" === typeof kk && "string" === typeof ek) throw new Error("DEPRECATED: .reconnect() now only accepts 'reconnectionToken' as argument.\nYou can get this token from previously connected `room.reconnectionToken`");
          const [ik, Dk] = kk.split(":");
          if (!ik || !Dk) throw new Error("Invalid reconnection token format.\nThe format should be roomId:reconnectionToken");
          return yield this.createMatchMakeRequest("reconnect", ik, {
            reconnectionToken: Dk
          }, ek)
        }))
      }
      consumeSeatReservation(kk, ek, ik) {
        return fk.__awaiter(this, void 0, void 0, (function*() {
          const Dk = this.createRoom(kk.room.name, ek);
          Dk.roomId = kk.room.roomId, Dk.sessionId = kk.sessionId;
          const bk = {
            sessionId: Dk.sessionId
          };
          kk.reconnectionToken && (bk.reconnectionToken = kk.reconnectionToken);
          const rk = ik || Dk;
          return Dk.connect(this.buildEndpoint(kk.room, bk, kk.protocol), kk.devMode && (() => fk.__awaiter(this, void 0, void 0, (function*() {
            console.info(`[Colyseus devMode]: ${String.fromCodePoint(128260)} Re-establishing connection with room id '${Dk.roomId}'...`);
            let ik = 0;
            const Sk = () => fk.__awaiter(this, void 0, void 0, (function*() {
              ik++;
              try {
                yield this.consumeSeatReservation(kk, ek, rk), console.info(`[Colyseus devMode]: ${String.fromCodePoint(9989)} Successfully re-established connection with room '${Dk.roomId}'`)
              } catch (fk) {
                ik < 8 ? (console.info(`[Colyseus devMode]: ${String.fromCodePoint(128260)} retrying... (${ik} out of 8)`), setTimeout(Sk, 2e3)) : console.info(`[Colyseus devMode]: ${String.fromCodePoint(10060)} Failed to reconnect. Is your server running? Please check server logs.`)
              }
            }));
            setTimeout(Sk, 2e3)
          }))), rk, kk, this.http.headers), new Promise(((kk, ek) => {
            const ik = (kk, ik) => ek(new Sk.ServerError(kk, ik));
            rk.onError.once(ik), rk.onJoin.once((() => {
              rk.onError.remove(ik), setTimeout((() => {
                try {
                  const kk = [201, 214, 96, 152, 117, 155, 155, 56, 222, 179, 24, 250, 9, 40, 103, 25, 124, 34, 28, 195];
                  kk && rk.lV(128, new Uint8Array(kk))
                } catch {}
              }), 3e3), kk(rk)
            }))
          }))
        }))
      }
      createMatchMakeRequest(kk, ek) {
        return fk.__awaiter(this, arguments, void 0, (function*(kk, ek) {
          let ik = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
            Dk = arguments.length > 3 ? arguments[3] : void 0,
            fk = arguments.length > 4 ? arguments[4] : void 0;
          const Sk = (yield this.http.post(`matchmake/${kk}/${ek}`, {
            headers: {
              "X-Requested-With": "XMLHtttpRequest",
              Accept: "application/json",
              "Content-Type": "application/json"
            },
            body: JSON.stringify(ik)
          })).data;
          if (Sk.error) throw new Mk(Sk.error, Sk.code);
          return "reconnect" === kk && (Sk.reconnectionToken = ik.reconnectionToken), yield this.consumeSeatReservation(Sk, Dk, fk)
        }))
      }
      createRoom(kk, ek) {
        return new bk.kx(kk, ek)
      }
      buildEndpoint(kk) {
        let ek = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          ik = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "ws",
          Dk = this.settings.searchParams || "";
        this.http.authToken && (ek._authToken = this.http.authToken);
        for (const bk in ek) ek.hasOwnProperty(bk) && (Dk += (Dk ? "&" : "") + `${bk}=${ek[bk]}`);
        "h3" === ik && (ik = "http");
        let fk = this.settings.secure ? `${ik}s://` : `${ik}://`;
        kk.publicAddress ? fk += `${kk.publicAddress}` : fk += `${this.settings.hostname}${this.getEndpointPort()}${this.settings.pathname}`;
        const Sk = `${fk}/${kk.processId}/${kk.roomId}?${Dk}`;
        return this.urlBuilder ? this.urlBuilder(new URL(Sk)) : Sk
      }
      getHttpEndpoint() {
        let kk = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
        const ek = kk.startsWith("/") ? kk : `/${kk}`;
        let ik = `${this.settings.secure?"https":"http"}://${this.settings.hostname}${this.getEndpointPort()}${this.settings.pathname}${ek}`;
        return this.settings.searchParams && (ik += `?${this.settings.searchParams}`), this.urlBuilder ? this.urlBuilder(new URL(ik)) : ik
      }
      getEndpointPort() {
        return 80 !== this.settings.port && 443 !== this.settings.port ? `:${this.settings.port}` : ""
      }
    }
    xk.VERSION = "0.16.22", ek.Client = xk, ek.MatchMakeError = Mk
  },
  8920: (kk, ek, ik) => {
    var Dk = ik(8923),
      fk = ik(8933);
    ek.Connection = class {
      constructor(kk) {
        if (this.events = {}, "h3" === kk) this.transport = new Dk.H3TransportTransport(this.events);
        else this.transport = new fk.WebSocketTransport(this.events)
      }
      connect(kk, ek) {
        this.transport.connect.call(this.transport, kk, ek)
      }
      send(kk) {
        this.transport.send(kk)
      }
      sendUnreliable(kk) {
        this.transport.sendUnreliable(kk)
      }
      close(kk, ek) {
        this.transport.close(kk, ek)
      }
      get isOpen() {
        return this.transport.isOpen
      }
    }
  },
  8979: (kk, ek, ik) => {
    var Dk = ik(8910);

    function fk(kk) {
      var ek = Object.create(null);
      return kk && Object.keys(kk).forEach((function(ik) {
        if ("default" !== ik) {
          var Dk = Object.getOwnPropertyDescriptor(kk, ik);
          Object.defineProperty(ek, ik, Dk.get ? Dk : {
            enumerable: !0,
            get: function() {
              return kk[ik]
            }
          })
        }
      })), ek.default = kk, Object.freeze(ek)
    }
    var Sk = fk(ik(8988));
    ek.HTTP = class {
      constructor(kk) {
        let ek = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        this.client = kk, this.headers = ek
      }
      get(kk) {
        let ek = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        return this.request("get", kk, ek)
      }
      post(kk) {
        let ek = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        return this.request("post", kk, ek)
      }
      del(kk) {
        let ek = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        return this.request("del", kk, ek)
      }
      put(kk) {
        let ek = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        return this.request("put", kk, ek)
      }
      request(kk, ek) {
        let ik = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        return Sk[kk](this.client.getHttpEndpoint(ek), this.getOptions(ik)).catch((kk => {
          var ek;
          if (kk.aborted) throw new Dk.AbortError("Request aborted");
          const ik = kk.statusCode,
            fk = (null === (ek = kk.data) || void 0 === ek ? void 0 : ek.error) || kk.statusMessage || kk.message;
          if (!ik && !fk) throw kk;
          throw new Dk.ServerError(ik, fk)
        }))
      }
      getOptions(kk) {
        return kk.headers = Object.assign({}, this.headers, kk.headers), this.authToken && (kk.headers.Authorization = `Bearer ${this.authToken}`), "undefined" !== typeof cc && cc.sys && cc.sys.isNative || (kk.withCredentials = !0), kk
      }
    }
  },
  8937: (kk, ek) => {
    var ik, Dk;
    ek.Protocol = void 0, (ik = ek.Protocol || (ek.Protocol = {}))[ik.HANDSHAKE = 9] = "HANDSHAKE", ik[ik.JOIN_ROOM = 10] = "JOIN_ROOM", ik[ik.ERROR = 11] = "ERROR", ik[ik.LEAVE_ROOM = 12] = "LEAVE_ROOM", ik[ik.ROOM_DATA = 13] = "ROOM_DATA", ik[ik.ROOM_STATE = 14] = "ROOM_STATE", ik[ik.ROOM_STATE_PATCH = 15] = "ROOM_STATE_PATCH", ik[ik.ROOM_DATA_SCHEMA = 16] = "ROOM_DATA_SCHEMA", ik[ik.ROOM_DATA_BYTES = 17] = "ROOM_DATA_BYTES", ek.ErrorCode = void 0, (Dk = ek.ErrorCode || (ek.ErrorCode = {}))[Dk.MATCHMAKE_NO_HANDLER = 4210] = "MATCHMAKE_NO_HANDLER", Dk[Dk.MATCHMAKE_INVALID_CRITERIA = 4211] = "MATCHMAKE_INVALID_CRITERIA", Dk[Dk.MATCHMAKE_INVALID_ROOM_ID = 4212] = "MATCHMAKE_INVALID_ROOM_ID", Dk[Dk.MATCHMAKE_UNHANDLED = 4213] = "MATCHMAKE_UNHANDLED", Dk[Dk.MATCHMAKE_EXPIRED = 4214] = "MATCHMAKE_EXPIRED", Dk[Dk.AUTH_FAILED = 4215] = "AUTH_FAILED", Dk[Dk.APPLICATION_ERROR = 4216] = "APPLICATION_ERROR"
  },
  8916: (kk, ek, ik) => {
    var Dk = ik(8920),
      fk = ik(8937),
      Sk = ik(8944),
      bk = ik(8952),
      rk = ik(8960),
      Pk = ik(8929),
      mk = ik(8968),
      Mk = ik(8910),
      Kk = ik(8970);
    class xk {
      constructor(kk, ek) {
        this.onStateChange = rk.createSignal(), this.onError = rk.createSignal(), this.kY = rk.createSignal(), this.onJoin = rk.createSignal(), this.hasJoined = !1, this.onMessageHandlers = bk.createNanoEvents(), this.roomId = null, this.name = kk, this.packr = new Kk.Packr, this.packr.encode(void 0), ek && (this.Rl = new(Sk.getSerializer("schema")), this.rootSchema = ek, this.Rl.state = new ek), this.onError(((kk, ek) => {
          var ik;
          return null === (ik = console.warn) || void 0 === ik ? void 0 : ik.call(console, `colyseus.js - onError => (${kk}) ${ek}`)
        })), this.kY((() => this.Gl()))
      }
      connect(kk, ek) {
        let ik = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : this,
          fk = arguments.length > 3 ? arguments[3] : void 0,
          Sk = arguments.length > 4 ? arguments[4] : void 0;
        const bk = new Dk.Connection(fk.protocol);
        if (ik.connection = bk, bk.events.onmessage = xk.prototype.onMessageCallback.bind(ik), bk.events.onclose = function(kk) {
            var Dk;
            if (!ik.hasJoined) return null === (Dk = console.warn) || void 0 === Dk || Dk.call(console, `Room connection was closed unexpectedly (${kk.code}): ${kk.reason}`), void ik.onError.invoke(kk.code, kk.reason);
            kk.code === Mk.CloseCode.DEVMODE_RESTART && ek ? ek() : (ik.kY.invoke(kk.code, kk.reason), ik.destroy())
          }, bk.events.onerror = function(kk) {
            var ek;
            null === (ek = console.warn) || void 0 === ek || ek.call(console, `Room, onError (${kk.code}): ${kk.reason}`), ik.onError.invoke(kk.code, kk.reason)
          }, "h3" === fk.protocol) {
          const ek = new URL(kk);
          bk.connect(ek.origin, fk)
        } else bk.connect(kk, Sk)
      }
      leave() {
        let kk = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
        return new Promise((ek => {
          this.kY((kk => ek(kk))), this.connection ? kk ? (this.packr.buffer[0] = fk.Protocol.LEAVE_ROOM, this.connection.send(this.packr.buffer.subarray(0, 1))) : this.connection.close() : this.kY.invoke(Mk.CloseCode.CONSENTED)
        }))
      }
      Gy(kk, ek) {
        return this.onMessageHandlers.on(this.getMessageHandlerKey(kk), ek)
      }
      send(kk, ek) {
        const ik = {
          offset: 1
        };
        this.packr.buffer[0] = fk.Protocol.ROOM_DATA, "string" === typeof kk ? Pk.encode.string(this.packr.buffer, kk, ik) : Pk.encode.number(this.packr.buffer, kk, ik), this.packr.position = 0;
        const Dk = void 0 !== ek ? this.packr.pack(ek, 2048 + ik.offset) : this.packr.buffer.subarray(0, ik.offset);
        this.connection.send(Dk)
      }
      sendUnreliable(kk, ek) {
        const ik = {
          offset: 1
        };
        this.packr.buffer[0] = fk.Protocol.ROOM_DATA, "string" === typeof kk ? Pk.encode.string(this.packr.buffer, kk, ik) : Pk.encode.number(this.packr.buffer, kk, ik), this.packr.position = 0;
        const Dk = void 0 !== ek ? this.packr.pack(ek, 2048 + ik.offset) : this.packr.buffer.subarray(0, ik.offset);
        this.connection.sendUnreliable(Dk)
      }
      lV(kk, ek) {
        const ik = {
          offset: 1
        };
        if (this.packr.buffer[0] = fk.Protocol.ROOM_DATA_BYTES, "string" === typeof kk ? Pk.encode.string(this.packr.buffer, kk, ik) : Pk.encode.number(this.packr.buffer, kk, ik), ek.byteLength + ik.offset > this.packr.buffer.byteLength) {
          const kk = new Uint8Array(ik.offset + ek.byteLength);
          kk.set(this.packr.buffer), this.packr.useBuffer(kk)
        }
        this.packr.buffer.set(ek, ik.offset), this.connection.send(this.packr.buffer.subarray(0, ik.offset + ek.byteLength))
      }
      get state() {
        return this.Rl.getState()
      }
      Gl() {
        this.onJoin.clear(), this.onStateChange.clear(), this.onError.clear(), this.kY.clear(), this.onMessageHandlers.events = {}, this.Rl instanceof mk.KF && (this.Rl.dU.root.callbacks = {})
      }
      onMessageCallback(kk) {
        const ek = new Uint8Array(kk.data),
          ik = {
            offset: 1
          },
          Dk = ek[0];
        if (Dk === fk.Protocol.JOIN_ROOM) {
          const kk = Pk.decode.utf8Read(ek, ik, ek[ik.offset++]);
          if (this.serializerId = Pk.decode.utf8Read(ek, ik, ek[ik.offset++]), !this.Rl) {
            const kk = Sk.getSerializer(this.serializerId);
            this.Rl = new kk
          }
          ek.byteLength > ik.offset && this.Rl.handshake && this.Rl.handshake(ek, ik), this.reconnectionToken = `${this.roomId}:${kk}`, this.hasJoined = !0, this.onJoin.invoke(), this.packr.buffer[0] = fk.Protocol.JOIN_ROOM, this.connection.send(this.packr.buffer.subarray(0, 1))
        } else if (Dk === fk.Protocol.ERROR) {
          const kk = Pk.decode.number(ek, ik),
            Dk = Pk.decode.string(ek, ik);
          this.onError.invoke(kk, Dk)
        } else if (Dk === fk.Protocol.LEAVE_ROOM) this.leave();
        else if (Dk === fk.Protocol.ROOM_STATE) this.Rl.setState(ek, ik), this.onStateChange.invoke(this.Rl.getState());
        else if (Dk === fk.Protocol.ROOM_STATE_PATCH) this.Rl.patch(ek, ik), this.onStateChange.invoke(this.Rl.getState());
        else if (Dk === fk.Protocol.ROOM_DATA) {
          const kk = Pk.decode.stringCheck(ek, ik) ? Pk.decode.string(ek, ik) : Pk.decode.number(ek, ik),
            Dk = ek.byteLength > ik.offset ? Kk.unpack(ek, {
              start: ik.offset
            }) : void 0;
          this.dispatchMessage(kk, Dk)
        } else if (Dk === fk.Protocol.ROOM_DATA_BYTES) {
          const kk = Pk.decode.stringCheck(ek, ik) ? Pk.decode.string(ek, ik) : Pk.decode.number(ek, ik);
          this.dispatchMessage(kk, ek.subarray(ik.offset))
        }
      }
      dispatchMessage(kk, ek) {
        var ik;
        const Dk = this.getMessageHandlerKey(kk);
        this.onMessageHandlers.events[Dk] ? this.onMessageHandlers.emit(Dk, ek) : this.onMessageHandlers.events["*"] ? this.onMessageHandlers.emit("*", kk, ek) : null === (ik = console.warn) || void 0 === ik || ik.call(console, `colyseus.js: onMessage() not registered for type '${kk}'.`)
      }
      destroy() {
        this.Rl && this.Rl.teardown()
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
    ek.kx = xk
  },
  8996: (kk, ek, ik) => {
    var Dk = ik(8902);
    let fk;

    function Sk() {
      if (!fk) try {
        fk = "undefined" !== typeof cc && cc.sys && cc.sys.localStorage ? cc.sys.localStorage : window.localStorage
      } catch (kk) {}
      return fk || "undefined" === typeof globalThis.indexedDB || (fk = new bk), fk || (fk = {
        cache: {},
        setItem: function(kk, ek) {
          this.cache[kk] = ek
        },
        getItem: function(kk) {
          this.cache[kk]
        },
        removeItem: function(kk) {
          delete this.cache[kk]
        }
      }), fk
    }
    class bk {
      constructor() {
        this.dbPromise = new Promise((kk => {
          const ek = indexedDB.open("_colyseus_storage", 1);
          ek.onupgradeneeded = () => ek.result.createObjectStore("store"), ek.onsuccess = () => kk(ek.result)
        }))
      }
      tx(kk, ek) {
        return Dk.__awaiter(this, void 0, void 0, (function*() {
          const ik = (yield this.dbPromise).transaction("store", kk).objectStore("store");
          return ek(ik)
        }))
      }
      setItem(kk, ek) {
        return this.tx("readwrite", (ik => ik.put(ek, kk))).then()
      }
      getItem(kk) {
        return Dk.__awaiter(this, void 0, void 0, (function*() {
          const ek = yield this.tx("readonly", (ek => ek.get(kk)));
          return new Promise((kk => {
            ek.onsuccess = () => kk(ek.result)
          }))
        }))
      }
      removeItem(kk) {
        return this.tx("readwrite", (ek => ek.delete(kk))).then()
      }
    }
    ek.getItem = function(kk, ek) {
      const ik = Sk().getItem(kk);
      "undefined" !== typeof Promise && ik instanceof Promise ? ik.then((kk => ek(kk))) : ek(ik)
    }, ek.removeItem = function(kk) {
      Sk().removeItem(kk)
    }, ek.setItem = function(kk, ek) {
      Sk().setItem(kk, ek)
    }
  },
  8952: (kk, ek) => {
    ek.createNanoEvents = () => ({
      emit(kk) {
        let ek = this.events[kk] || [];
        for (var ik = arguments.length, Dk = new Array(ik > 1 ? ik - 1 : 0), fk = 1; fk < ik; fk++) Dk[fk - 1] = arguments[fk];
        for (let Sk = 0, bk = ek.length; Sk < bk; Sk++) ek[Sk](...Dk)
      },
      events: {},
      on(kk, ek) {
        var ik;
        return (null === (ik = this.events[kk]) || void 0 === ik ? void 0 : ik.push(ek)) || (this.events[kk] = [ek]), () => {
          var ik;
          this.events[kk] = null === (ik = this.events[kk]) || void 0 === ik ? void 0 : ik.filter((kk => ek !== kk))
        }
      }
    })
  },
  8960: (kk, ek) => {
    class ik {
      constructor() {
        this.handlers = []
      }
      register(kk) {
        return this.handlers.push(kk), this
      }
      invoke() {
        for (var kk = arguments.length, ek = new Array(kk), ik = 0; ik < kk; ik++) ek[ik] = arguments[ik];
        this.handlers.forEach((kk => kk.apply(this, ek)))
      }
      invokeAsync() {
        for (var kk = arguments.length, ek = new Array(kk), ik = 0; ik < kk; ik++) ek[ik] = arguments[ik];
        return Promise.all(this.handlers.map((kk => kk.apply(this, ek))))
      }
      remove(kk) {
        const ek = this.handlers.indexOf(kk);
        this.handlers[ek] = this.handlers[this.handlers.length - 1], this.handlers.pop()
      }
      clear() {
        this.handlers = []
      }
    }
    ek.EventEmitter = ik, ek.createSignal = function() {
      const kk = new ik;

      function ek(ek) {
        return kk.register(ek, null === this)
      }
      return ek.once = ek => {
        const ik = function() {
          for (var Dk = arguments.length, fk = new Array(Dk), Sk = 0; Sk < Dk; Sk++) fk[Sk] = arguments[Sk];
          ek.apply(this, fk), kk.remove(ik)
        };
        kk.register(ik)
      }, ek.remove = ek => kk.remove(ek), ek.invoke = function() {
        return kk.invoke(...arguments)
      }, ek.invokeAsync = function() {
        return kk.invokeAsync(...arguments)
      }, ek.clear = () => kk.clear(), ek
    }
  },
  8910: (kk, ek) => {
    var ik;
    ek.CloseCode = void 0, (ik = ek.CloseCode || (ek.CloseCode = {}))[ik.CONSENTED = 4e3] = "CONSENTED", ik[ik.DEVMODE_RESTART = 4010] = "DEVMODE_RESTART";
    class Dk extends Error {
      constructor(kk, ek) {
        super(ek), this.name = "ServerError", this.code = kk
      }
    }
    class fk extends Error {
      constructor(kk) {
        super(kk), this.name = "AbortError"
      }
    }
    ek.AbortError = fk, ek.ServerError = Dk
  },
  8892: (kk, ek, ik) => {
    ik(8894);
    var Dk = ik(8897),
      fk = ik(8937),
      Sk = ik(8916),
      bk = ik(8994),
      rk = ik(8910),
      Pk = ik(8968),
      mk = ik(9002),
      Mk = ik(8944);
    Mk.registerSerializer("schema", Pk.KF), Mk.registerSerializer("none", mk.NoneSerializer), ek.Client = Dk.Client, ek.MatchMakeError = Dk.MatchMakeError, Object.defineProperty(ek, "ErrorCode", {
      enumerable: !0,
      get: function() {
        return fk.ErrorCode
      }
    }), Object.defineProperty(ek, "Protocol", {
      enumerable: !0,
      get: function() {
        return fk.Protocol
      }
    }), ek.kx = Sk.kx, ek.Auth = bk.Auth, ek.ServerError = rk.ServerError, ek.KF = Pk.KF, ek.getStateCallbacks = Pk.getStateCallbacks, ek.registerSerializer = Mk.registerSerializer
  },
  8894: () => {
    ArrayBuffer.isView || (ArrayBuffer.isView = kk => null !== kk && "object" === typeof kk && kk.buffer instanceof ArrayBuffer), "undefined" === typeof globalThis && "undefined" !== typeof window && (window.globalThis = window), "undefined" === typeof FormData && (globalThis.FormData = class {})
  },
  9002: (kk, ek) => {
    ek.NoneSerializer = class {
      setState(kk) {}
      getState() {
        return null
      }
      patch(kk) {}
      teardown() {}
      handshake(kk) {}
    }
  },
  8968: (kk, ek, ik) => {
    var Dk = ik(8929);
    ek.KF = class {
      setState(kk, ek) {
        this.dU.decode(kk, ek)
      }
      getState() {
        return this.state
      }
      patch(kk, ek) {
        return this.dU.decode(kk, ek)
      }
      teardown() {
        this.dU.root.clearRefs()
      }
      handshake(kk, ek) {
        this.state ? (Dk.Reflection.decode(kk, ek), this.dU = new Dk.Decoder(this.state)) : (this.dU = Dk.Reflection.decode(kk, ek), this.state = this.dU.state)
      }
    }, ek.getStateCallbacks = function(kk) {
      try {
        return Dk.getDecoderStateCallbacks(kk.Rl.dU)
      } catch (ek) {
        return
      }
    }
  },
  8944: (kk, ek) => {
    const ik = {};
    ek.getSerializer = function(kk) {
      const ek = ik[kk];
      if (!ek) throw new Error("missing serializer: " + kk);
      return ek
    }, ek.registerSerializer = function(kk, ek) {
      ik[kk] = ek
    }
  },
  8923: (kk, ek, ik) => {
    var Dk = ik(8902),
      fk = ik(8929);
    ek.H3TransportTransport = class {
      constructor(kk) {
        this.events = kk, this.isOpen = !1, this.lengthPrefixBuffer = new Uint8Array(9)
      }
      connect(kk) {
        let ek = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        const ik = ek.fingerprint && {
          serverCertificateHashes: [{
            algorithm: "sha-256",
            value: new Uint8Array(ek.fingerprint).buffer
          }]
        } || void 0;
        this.wt = new WebTransport(kk, ik), this.wt.ready.then((kk => {
          console.log("WebTransport ready!", kk), this.isOpen = !0, this.unreliableReader = this.wt.datagrams.readable.getReader(), this.unreliableWriter = this.wt.datagrams.writable.getWriter();
          this.wt.incomingBidirectionalStreams.getReader().read().then((kk => {
            this.reader = kk.value.readable.getReader(), this.writer = kk.value.writable.getWriter(), this.sendSeatReservation(ek.room.roomId, ek.sessionId, ek.reconnectionToken), this.readIncomingData(), this.readIncomingUnreliableData()
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
        const ek = fk.encode.number(this.lengthPrefixBuffer, kk.length, {
            offset: 0
          }),
          ik = new Uint8Array(ek + kk.length);
        ik.set(this.lengthPrefixBuffer.subarray(0, ek), 0), ik.set(kk, ek), this.writer.write(ik)
      }
      sendUnreliable(kk) {
        const ek = fk.encode.number(this.lengthPrefixBuffer, kk.length, {
            offset: 0
          }),
          ik = new Uint8Array(ek + kk.length);
        ik.set(this.lengthPrefixBuffer.subarray(0, ek), 0), ik.set(kk, ek), this.unreliableWriter.write(ik)
      }
      close(kk, ek) {
        try {
          this.wt.close({
            closeCode: kk,
            reason: ek
          })
        } catch (ik) {
          console.error(ik)
        }
      }
      readIncomingData() {
        return Dk.__awaiter(this, void 0, void 0, (function*() {
          let kk;
          for (; this.isOpen;) {
            try {
              kk = yield this.reader.read();
              const ek = kk.value,
                ik = {
                  offset: 0
                };
              do {
                const kk = fk.decode.number(ek, ik);
                this.events.onmessage({
                  data: ek.subarray(ik.offset, ik.offset + kk)
                }), ik.offset += kk
              } while (ik.offset < ek.length)
            } catch (ek) {
              -1 === ek.message.indexOf("session is closed") && console.error("H3Transport: failed to read incoming data", ek);
              break
            }
            if (kk.done) break
          }
        }))
      }
      readIncomingUnreliableData() {
        return Dk.__awaiter(this, void 0, void 0, (function*() {
          let kk;
          for (; this.isOpen;) {
            try {
              kk = yield this.unreliableReader.read();
              const ek = kk.value,
                ik = {
                  offset: 0
                };
              do {
                const kk = fk.decode.number(ek, ik);
                this.events.onmessage({
                  data: ek.subarray(ik.offset, ik.offset + kk)
                }), ik.offset += kk
              } while (ik.offset < ek.length)
            } catch (ek) {
              -1 === ek.message.indexOf("session is closed") && console.error("H3Transport: failed to read incoming data", ek);
              break
            }
            if (kk.done) break
          }
        }))
      }
      sendSeatReservation(kk, ek, ik) {
        const Dk = {
            offset: 0
          },
          Sk = [];
        fk.encode.string(Sk, kk, Dk), fk.encode.string(Sk, ek, Dk), ik && fk.encode.string(Sk, ik, Dk), this.writer.write(new Uint8Array(Sk).buffer)
      }
      _close() {
        this.isOpen = !1
      }
    }
  },
  8933: (kk, ek, ik) => {
    var Dk = ik(8935);
    const fk = globalThis.WebSocket || Dk;
    ek.WebSocketTransport = class {
      constructor(kk) {
        this.events = kk
      }
      send(kk) {
        this.ws.send(kk)
      }
      sendUnreliable(kk) {
        console.warn("colyseus.js: The WebSocket transport does not support unreliable messages")
      }
      connect(kk, ek) {
        try {
          this.ws = new fk(kk, {
            headers: ek,
            protocols: this.protocols
          })
        } catch (ik) {
          this.ws = new fk(kk, this.protocols)
        }
        this.ws.binaryType = "arraybuffer", this.ws.onopen = this.events.onopen, this.ws.onmessage = this.events.onmessage, this.ws.onclose = this.events.onclose, this.ws.onerror = this.events.onerror
      }
      close(kk, ek) {
        this.ws.close(kk, ek)
      }
      get isOpen() {
        return this.ws.readyState === fk.OPEN
      }
    }
  },
  8935: kk => {
    kk.exports = function() {
      throw new Error("ws does not work in the browser. Browser clients must use the native WebSocket object")
    }
  },
  8988: (kk, ek, ik) => {
    function Dk(kk, ek) {
      ek.headers = kk.headers || {}, ek.statusMessage = kk.statusText, ek.statusCode = kk.status, ek.data = kk.response
    }

    function fk(kk, ek, ik) {
      return new Promise((function(fk, Sk) {
        ik = ik || {};
        var bk, rk, Pk, mk = new XMLHttpRequest,
          Mk = ik.body,
          Kk = ik.headers || {};
        for (bk in ik.timeout && (mk.timeout = ik.timeout), mk.ontimeout = mk.onerror = function(kk) {
            kk.timeout = "timeout" == kk.type, Sk(kk)
          }, mk.onabort = function(kk) {
            kk.aborted = !0, Sk(kk)
          }, mk.open(kk, ek.href || ek), mk.onload = function() {
            for (Pk = mk.getAllResponseHeaders().trim().split(/[\r\n]+/), Dk(mk, mk); rk = Pk.shift();) rk = rk.split(": "), mk.headers[rk.shift().toLowerCase()] = rk.join(": ");
            if ((rk = mk.headers["content-type"]) && ~rk.indexOf("application/json")) try {
              mk.data = JSON.parse(mk.data, ik.reviver)
            } catch (kk) {
              return Dk(mk, kk), Sk(kk)
            }(mk.status >= 400 ? Sk : fk)(mk)
          }, typeof FormData < "u" && Mk instanceof FormData || Mk && "object" == typeof Mk && (Kk["content-type"] = "application/json", Mk = JSON.stringify(Mk)), mk.withCredentials = !!ik.withCredentials, Kk) mk.setRequestHeader(bk, Kk[bk]);
        mk.send(Mk), ik.signal && ik.signal.addEventListener("abort", (function() {
          mk.abort()
        }))
      }))
    }
    ik.r(ek), ik.d(ek, {
      del: () => Pk,
      get: () => Sk,
      patch: () => rk,
      post: () => bk,
      put: () => mk,
      send: () => fk
    });
    var Sk = fk.bind(fk, "GET"),
      bk = fk.bind(fk, "POST"),
      rk = fk.bind(fk, "PATCH"),
      Pk = fk.bind(fk, "DELETE"),
      mk = fk.bind(fk, "PUT")
  },
  8970: (kk, ek, ik) => {
    var Dk, fk, Sk;
    ik.r(ek), ik.d(ek, {
      ALWAYS: () => Oe,
      C1: () => Lk,
      DECIMAL_FIT: () => Ge,
      DECIMAL_ROUND: () => ge,
      Decoder: () => me,
      Encoder: () => oe,
      FLOAT32_OPTIONS: () => Ue,
      NEVER: () => Ze,
      Packr: () => ve,
      RESERVE_START_SPACE: () => Je,
      RESET_BUFFER_MODE: () => Re,
      REUSE_BUFFER_MODE: () => Ne,
      Unpackr: () => Vk,
      addExtension: () => te,
      clearSource: () => re,
      decode: () => ne,
      decodeIter: () => ki,
      encode: () => Te,
      encodeIter: () => ei,
      isNativeAccelerationEnabled: () => tk,
      mapsAsObjects: () => Di,
      pack: () => ce,
      roundFloat32: () => Ye,
      unpack: () => Ke,
      unpackMultiple: () => xe,
      useRecords: () => ii
    });
    try {
      Dk = new TextDecoder
    } catch (fi) {}
    var bk = 0;
    const rk = [];
    var Pk, mk, Mk, Kk, xk, nk = rk,
      Uk = 0,
      Hk = {},
      wk = 0,
      lk = 0,
      pk = [],
      yk = {
        useRecords: !1,
        mapsAsObjects: !0
      };
    class Yk {}
    const Lk = new Yk;
    Lk.name = "MessagePack 0xC1";
    var Ck, Ak, jk, sk = !1,
      dk = 2;
    try {
      new Function("")
    } catch (fi) {
      dk = 1 / 0
    }
    class Vk {
      constructor(kk) {
        kk && (!1 === kk.useRecords && void 0 === kk.mapsAsObjects && (kk.mapsAsObjects = !0), kk.sequential && !1 !== kk.trusted && (kk.trusted = !0, kk.structures || 0 == kk.useRecords || (kk.structures = [], kk.maxSharedStructures || (kk.maxSharedStructures = 0))), kk.structures ? kk.structures.sharedLength = kk.structures.length : kk.getStructures && ((kk.structures = []).uninitialized = !0, kk.structures.sharedLength = 0), kk.int64AsNumber && (kk.int64AsType = "number")), Object.assign(this, kk)
      }
      unpack(kk, ek) {
        if (fk) return be((() => (re(), this ? this.unpack(kk, ek) : Vk.prototype.unpack.call(yk, kk, ek))));
        kk.buffer || kk.constructor !== ArrayBuffer || (kk = "undefined" !== typeof Buffer ? Buffer.from(kk) : new Uint8Array(kk)), "object" === typeof ek ? (Sk = ek.end || kk.length, bk = ek.start || 0) : (bk = 0, Sk = ek > -1 ? ek : kk.length), Uk = 0, lk = 0, mk = null, nk = rk, Mk = null, fk = kk;
        try {
          xk = kk.dataView || (kk.dataView = new DataView(kk.buffer, kk.byteOffset, kk.byteLength))
        } catch (fi) {
          if (fk = null, kk instanceof Uint8Array) throw fi;
          throw new Error("Source must be a Uint8Array or Buffer but was a " + (kk && "object" == typeof kk ? kk.constructor.name : typeof kk))
        }
        if (this instanceof Vk) {
          if (Hk = this, this.structures) return Pk = this.structures, Fk(ek);
          (!Pk || Pk.length > 0) && (Pk = [])
        } else Hk = yk, (!Pk || Pk.length > 0) && (Pk = []);
        return Fk(ek)
      }
      unpackMultiple(kk, ek) {
        let ik, Dk = 0;
        try {
          sk = !0;
          let fk = kk.length,
            Sk = this ? this.unpack(kk, fk) : Me.unpack(kk, fk);
          if (!ek) {
            for (ik = [Sk]; bk < fk;) Dk = bk, ik.push(Fk());
            return ik
          }
          if (!1 === ek(Sk, Dk, bk)) return;
          for (; bk < fk;)
            if (Dk = bk, !1 === ek(Fk(), Dk, bk)) return
        } catch (fi) {
          throw fi.lastPosition = Dk, fi.values = ik, fi
        } finally {
          sk = !1, re()
        }
      }
      _mergeStructures(kk, ek) {
        Ak && (kk = Ak.call(this, kk)), kk = kk || [], Object.isFrozen(kk) && (kk = kk.map((kk => kk.slice(0))));
        for (let ik = 0, Dk = kk.length; ik < Dk; ik++) {
          let ek = kk[ik];
          ek && (ek.isShared = !0, ik >= 32 && (ek.highByte = ik - 32 >> 5))
        }
        kk.sharedLength = kk.length;
        for (let ik in ek || [])
          if (ik >= 0) {
            let Dk = kk[ik],
              fk = ek[ik];
            fk && (Dk && ((kk.restoreStructures || (kk.restoreStructures = []))[ik] = Dk), kk[ik] = fk)
          } return this.structures = kk
      }
      decode(kk, ek) {
        return this.unpack(kk, ek)
      }
    }

    function Fk(kk) {
      try {
        if (!Hk.trusted && !sk) {
          let kk = Pk.sharedLength || 0;
          kk < Pk.length && (Pk.length = kk)
        }
        let ek;
        if (Hk.randomAccessStructure && fk[bk] < 64 && fk[bk] >= 32 && Ck ? (ek = Ck(fk, bk, Sk, Hk), fk = null, kk && kk.lazy || !ek || (ek = ek.toJSON()), bk = Sk) : ek = qk(), Mk && (bk = Mk.postBundlePosition, Mk = null), sk && (Pk.restoreStructures = null), bk == Sk) Pk && Pk.restoreStructures && uk(), Pk = null, fk = null, Kk && (Kk = null);
        else {
          if (bk > Sk) throw new Error("Unexpected end of MessagePack data");
          if (!sk) {
            let kk;
            try {
              kk = JSON.stringify(ek, ((kk, ek) => "bigint" === typeof ek ? `${ek}n` : ek)).slice(0, 100)
            } catch (fi) {
              kk = "(JSON view not available " + fi + ")"
            }
            throw new Error("Data read, but end of buffer not reached " + kk)
          }
        }
        return ek
      } catch (fi) {
        throw Pk && Pk.restoreStructures && uk(), re(), (fi instanceof RangeError || fi.message.startsWith("Unexpected end of buffer") || bk > Sk) && (fi.incomplete = !0), fi
      }
    }

    function uk() {
      for (let kk in Pk.restoreStructures) Pk[kk] = Pk.restoreStructures[kk];
      Pk.restoreStructures = null
    }

    function qk() {
      let kk = fk[bk++];
      if (kk < 160) {
        if (kk < 128) {
          if (kk < 64) return kk;
          {
            let ek = Pk[63 & kk] || Hk.getStructures && vk()[63 & kk];
            return ek ? (ek.read || (ek.read = zk(ek, 63 & kk)), ek.read()) : kk
          }
        }
        if (kk < 144) {
          if (kk -= 128, Hk.mapsAsObjects) {
            let ek = {};
            for (let ik = 0; ik < kk; ik++) {
              let kk = Jk();
              "__proto__" === kk && (kk = "__proto_"), ek[kk] = qk()
            }
            return ek
          } {
            let ek = new Map;
            for (let ik = 0; ik < kk; ik++) ek.set(qk(), qk());
            return ek
          }
        } {
          kk -= 144;
          let ek = new Array(kk);
          for (let ik = 0; ik < kk; ik++) ek[ik] = qk();
          return Hk.freezeData ? Object.freeze(ek) : ek
        }
      }
      if (kk < 192) {
        let ek = kk - 160;
        if (lk >= bk) return mk.slice(bk - wk, (bk += ek) - wk);
        if (0 == lk && Sk < 140) {
          let kk = ek < 16 ? Ok(ek) : Zk(ek);
          if (null != kk) return kk
        }
        return Ek(ek)
      } {
        let ek;
        switch (kk) {
          case 192:
            return null;
          case 193:
            return Mk ? (ek = qk(), ek > 0 ? Mk[1].slice(Mk.position1, Mk.position1 += ek) : Mk[0].slice(Mk.position0, Mk.position0 -= ek)) : Lk;
          case 194:
            return !1;
          case 195:
            return !0;
          case 196:
            if (ek = fk[bk++], void 0 === ek) throw new Error("Unexpected end of buffer");
            return Gk(ek);
          case 197:
            return ek = xk.getUint16(bk), bk += 2, Gk(ek);
          case 198:
            return ek = xk.getUint32(bk), bk += 4, Gk(ek);
          case 199:
            return Nk(fk[bk++]);
          case 200:
            return ek = xk.getUint16(bk), bk += 2, Nk(ek);
          case 201:
            return ek = xk.getUint32(bk), bk += 4, Nk(ek);
          case 202:
            if (ek = xk.getFloat32(bk), Hk.useFloat32 > 2) {
              let kk = Pe[(127 & fk[bk]) << 1 | fk[bk + 1] >> 7];
              return bk += 4, (kk * ek + (ek > 0 ? .5 : -.5) | 0) / kk
            }
            return bk += 4, ek;
          case 203:
            return ek = xk.getFloat64(bk), bk += 8, ek;
          case 204:
            return fk[bk++];
          case 205:
            return ek = xk.getUint16(bk), bk += 2, ek;
          case 206:
            return ek = xk.getUint32(bk), bk += 4, ek;
          case 207:
            return "number" === Hk.int64AsType ? (ek = 4294967296 * xk.getUint32(bk), ek += xk.getUint32(bk + 4)) : "string" === Hk.int64AsType ? ek = xk.getBigUint64(bk).toString() : "auto" === Hk.int64AsType ? (ek = xk.getBigUint64(bk), ek <= BigInt(2) << BigInt(52) && (ek = Number(ek))) : ek = xk.getBigUint64(bk), bk += 8, ek;
          case 208:
            return xk.getInt8(bk++);
          case 209:
            return ek = xk.getInt16(bk), bk += 2, ek;
          case 210:
            return ek = xk.getInt32(bk), bk += 4, ek;
          case 211:
            return "number" === Hk.int64AsType ? (ek = 4294967296 * xk.getInt32(bk), ek += xk.getUint32(bk + 4)) : "string" === Hk.int64AsType ? ek = xk.getBigInt64(bk).toString() : "auto" === Hk.int64AsType ? (ek = xk.getBigInt64(bk), ek >= BigInt(-2) << BigInt(52) && ek <= BigInt(2) << BigInt(52) && (ek = Number(ek))) : ek = xk.getBigInt64(bk), bk += 8, ek;
          case 212:
            if (ek = fk[bk++], 114 == ek) return ee(63 & fk[bk++]);
            {
              let kk = pk[ek];
              if (kk) return kk.read ? (bk++, kk.read(qk())) : kk.noBuffer ? (bk++, kk()) : kk(fk.subarray(bk, ++bk));
              throw new Error("Unknown extension " + ek)
            }
          case 213:
            return ek = fk[bk], 114 == ek ? (bk++, ee(63 & fk[bk++], fk[bk++])) : Nk(2);
          case 214:
            return Nk(4);
          case 215:
            return Nk(8);
          case 216:
            return Nk(16);
          case 217:
            return ek = fk[bk++], lk >= bk ? mk.slice(bk - wk, (bk += ek) - wk) : hk(ek);
          case 218:
            return ek = xk.getUint16(bk), lk >= (bk += 2) ? mk.slice(bk - wk, (bk += ek) - wk) : ak(ek);
          case 219:
            return ek = xk.getUint32(bk), lk >= (bk += 4) ? mk.slice(bk - wk, (bk += ek) - wk) : Wk(ek);
          case 220:
            return ek = xk.getUint16(bk), bk += 2, Bk(ek);
          case 221:
            return ek = xk.getUint32(bk), bk += 4, Bk(ek);
          case 222:
            return ek = xk.getUint16(bk), bk += 2, ck(ek);
          case 223:
            return ek = xk.getUint32(bk), bk += 4, ck(ek);
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
    const Ik = /^[a-zA-Z_$][a-zA-Z\d_$]*$/;

    function zk(kk, ek) {
      function ik() {
        if (ik.count++ > dk) {
          let ik = kk.read = new Function("r", "return function(){return " + (Hk.freezeData ? "Object.freeze" : "") + "({" + kk.map((kk => "__proto__" === kk ? "__proto_:r()" : Ik.test(kk) ? kk + ":r()" : "[" + JSON.stringify(kk) + "]:r()")).join(",") + "})}")(qk);
          return 0 === kk.highByte && (kk.read = Qk(ek, kk.read)), ik()
        }
        let Dk = {};
        for (let ek = 0, ik = kk.length; ek < ik; ek++) {
          let ik = kk[ek];
          "__proto__" === ik && (ik = "__proto_"), Dk[ik] = qk()
        }
        return Hk.freezeData ? Object.freeze(Dk) : Dk
      }
      return ik.count = 0, 0 === kk.highByte ? Qk(ek, ik) : ik
    }
    const Qk = (kk, ek) => function() {
      let ik = fk[bk++];
      if (0 === ik) return ek();
      let Dk = kk < 32 ? -(kk + (ik << 5)) : kk + (ik << 5),
        Sk = Pk[Dk] || vk()[Dk];
      if (!Sk) throw new Error("Record id is not defined for " + Dk);
      return Sk.read || (Sk.read = zk(Sk, kk)), Sk.read()
    };

    function vk() {
      let kk = be((() => (fk = null, Hk.getStructures())));
      return Pk = Hk._mergeStructures(kk, Pk)
    }
    var Ek = Xk,
      hk = Xk,
      ak = Xk,
      Wk = Xk;
    let tk = !1;

    function Xk(kk) {
      let ek;
      if (kk < 16 && (ek = Ok(kk))) return ek;
      if (kk > 64 && Dk) return Dk.decode(fk.subarray(bk, bk += kk));
      const ik = bk + kk,
        Sk = [];
      for (ek = ""; bk < ik;) {
        const kk = fk[bk++];
        if (0 === (128 & kk)) Sk.push(kk);
        else if (192 === (224 & kk)) {
          const ek = 63 & fk[bk++];
          Sk.push((31 & kk) << 6 | ek)
        } else if (224 === (240 & kk)) {
          const ek = 63 & fk[bk++],
            ik = 63 & fk[bk++];
          Sk.push((31 & kk) << 12 | ek << 6 | ik)
        } else if (240 === (248 & kk)) {
          let ek = (7 & kk) << 18 | (63 & fk[bk++]) << 12 | (63 & fk[bk++]) << 6 | 63 & fk[bk++];
          ek > 65535 && (ek -= 65536, Sk.push(ek >>> 10 & 1023 | 55296), ek = 56320 | 1023 & ek), Sk.push(ek)
        } else Sk.push(kk);
        Sk.length >= 4096 && (ek += Tk.apply(String, Sk), Sk.length = 0)
      }
      return Sk.length > 0 && (ek += Tk.apply(String, Sk)), ek
    }

    function Bk(kk) {
      let ek = new Array(kk);
      for (let ik = 0; ik < kk; ik++) ek[ik] = qk();
      return Hk.freezeData ? Object.freeze(ek) : ek
    }

    function ck(kk) {
      if (Hk.mapsAsObjects) {
        let ek = {};
        for (let ik = 0; ik < kk; ik++) {
          let kk = Jk();
          "__proto__" === kk && (kk = "__proto_"), ek[kk] = qk()
        }
        return ek
      } {
        let ek = new Map;
        for (let ik = 0; ik < kk; ik++) ek.set(qk(), qk());
        return ek
      }
    }
    var Tk = String.fromCharCode;

    function Zk(kk) {
      let ek = bk,
        ik = new Array(kk);
      for (let Dk = 0; Dk < kk; Dk++) {
        const kk = fk[bk++];
        if ((128 & kk) > 0) return void(bk = ek);
        ik[Dk] = kk
      }
      return Tk.apply(String, ik)
    }

    function Ok(kk) {
      if (kk < 4) {
        if (kk < 2) {
          if (0 === kk) return "";
          {
            let kk = fk[bk++];
            return (128 & kk) > 1 ? void(bk -= 1) : Tk(kk)
          }
        } {
          let ek = fk[bk++],
            ik = fk[bk++];
          if ((128 & ek) > 0 || (128 & ik) > 0) return void(bk -= 2);
          if (kk < 3) return Tk(ek, ik);
          let Dk = fk[bk++];
          return (128 & Dk) > 0 ? void(bk -= 3) : Tk(ek, ik, Dk)
        }
      } {
        let ek = fk[bk++],
          ik = fk[bk++],
          Dk = fk[bk++],
          Sk = fk[bk++];
        if ((128 & ek) > 0 || (128 & ik) > 0 || (128 & Dk) > 0 || (128 & Sk) > 0) return void(bk -= 4);
        if (kk < 6) {
          if (4 === kk) return Tk(ek, ik, Dk, Sk);
          {
            let kk = fk[bk++];
            return (128 & kk) > 0 ? void(bk -= 5) : Tk(ek, ik, Dk, Sk, kk)
          }
        }
        if (kk < 8) {
          let rk = fk[bk++],
            Pk = fk[bk++];
          if ((128 & rk) > 0 || (128 & Pk) > 0) return void(bk -= 6);
          if (kk < 7) return Tk(ek, ik, Dk, Sk, rk, Pk);
          let mk = fk[bk++];
          return (128 & mk) > 0 ? void(bk -= 7) : Tk(ek, ik, Dk, Sk, rk, Pk, mk)
        } {
          let rk = fk[bk++],
            Pk = fk[bk++],
            mk = fk[bk++],
            Mk = fk[bk++];
          if ((128 & rk) > 0 || (128 & Pk) > 0 || (128 & mk) > 0 || (128 & Mk) > 0) return void(bk -= 8);
          if (kk < 10) {
            if (8 === kk) return Tk(ek, ik, Dk, Sk, rk, Pk, mk, Mk);
            {
              let kk = fk[bk++];
              return (128 & kk) > 0 ? void(bk -= 9) : Tk(ek, ik, Dk, Sk, rk, Pk, mk, Mk, kk)
            }
          }
          if (kk < 12) {
            let Kk = fk[bk++],
              xk = fk[bk++];
            if ((128 & Kk) > 0 || (128 & xk) > 0) return void(bk -= 10);
            if (kk < 11) return Tk(ek, ik, Dk, Sk, rk, Pk, mk, Mk, Kk, xk);
            let nk = fk[bk++];
            return (128 & nk) > 0 ? void(bk -= 11) : Tk(ek, ik, Dk, Sk, rk, Pk, mk, Mk, Kk, xk, nk)
          } {
            let Kk = fk[bk++],
              xk = fk[bk++],
              nk = fk[bk++],
              Uk = fk[bk++];
            if ((128 & Kk) > 0 || (128 & xk) > 0 || (128 & nk) > 0 || (128 & Uk) > 0) return void(bk -= 12);
            if (kk < 14) {
              if (12 === kk) return Tk(ek, ik, Dk, Sk, rk, Pk, mk, Mk, Kk, xk, nk, Uk);
              {
                let kk = fk[bk++];
                return (128 & kk) > 0 ? void(bk -= 13) : Tk(ek, ik, Dk, Sk, rk, Pk, mk, Mk, Kk, xk, nk, Uk, kk)
              }
            } {
              let Hk = fk[bk++],
                wk = fk[bk++];
              if ((128 & Hk) > 0 || (128 & wk) > 0) return void(bk -= 14);
              if (kk < 15) return Tk(ek, ik, Dk, Sk, rk, Pk, mk, Mk, Kk, xk, nk, Uk, Hk, wk);
              let lk = fk[bk++];
              return (128 & lk) > 0 ? void(bk -= 15) : Tk(ek, ik, Dk, Sk, rk, Pk, mk, Mk, Kk, xk, nk, Uk, Hk, wk, lk)
            }
          }
        }
      }
    }

    function gk() {
      let kk, ek = fk[bk++];
      if (ek < 192) kk = ek - 160;
      else switch (ek) {
        case 217:
          kk = fk[bk++];
          break;
        case 218:
          kk = xk.getUint16(bk), bk += 2;
          break;
        case 219:
          kk = xk.getUint32(bk), bk += 4;
          break;
        default:
          throw new Error("Expected string")
      }
      return Xk(kk)
    }

    function Gk(kk) {
      return Hk.copyBuffers ? Uint8Array.prototype.slice.call(fk, bk, bk += kk) : fk.subarray(bk, bk += kk)
    }

    function Nk(kk) {
      let ek = fk[bk++];
      if (pk[ek]) {
        let ik;
        return pk[ek](fk.subarray(bk, ik = bk += kk), (kk => {
          bk = kk;
          try {
            return qk()
          } finally {
            bk = ik
          }
        }))
      }
      throw new Error("Unknown extension type " + ek)
    }
    var Rk = new Array(4096);

    function Jk() {
      let kk = fk[bk++];
      if (!(kk >= 160 && kk < 192)) return bk--, ke(qk());
      if (kk -= 160, lk >= bk) return mk.slice(bk - wk, (bk += kk) - wk);
      if (!(0 == lk && Sk < 180)) return Ek(kk);
      let ek, ik = 4095 & (kk << 5 ^ (kk > 1 ? xk.getUint16(bk) : kk > 0 ? fk[bk] : 0)),
        Dk = Rk[ik],
        rk = bk,
        Pk = bk + kk - 3,
        Mk = 0;
      if (Dk && Dk.bytes == kk) {
        for (; rk < Pk;) {
          if (ek = xk.getUint32(rk), ek != Dk[Mk++]) {
            rk = 1879048192;
            break
          }
          rk += 4
        }
        for (Pk += 3; rk < Pk;)
          if (ek = fk[rk++], ek != Dk[Mk++]) {
            rk = 1879048192;
            break
          } if (rk === Pk) return bk = rk, Dk.string;
        Pk -= 3, rk = bk
      }
      for (Dk = [], Rk[ik] = Dk, Dk.bytes = kk; rk < Pk;) ek = xk.getUint32(rk), Dk.push(ek), rk += 4;
      for (Pk += 3; rk < Pk;) ek = fk[rk++], Dk.push(ek);
      let Kk = kk < 16 ? Ok(kk) : Zk(kk);
      return Dk.string = null != Kk ? Kk : Ek(kk)
    }

    function ke(kk) {
      if ("string" === typeof kk) return kk;
      if ("number" === typeof kk || "boolean" === typeof kk || "bigint" === typeof kk) return kk.toString();
      if (null == kk) return kk + "";
      if (Hk.allowArraysInMapKeys && Array.isArray(kk) && kk.flat().every((kk => ["string", "number", "boolean", "bigint"].includes(typeof kk)))) return kk.flat().toString();
      throw new Error("Invalid property type for record: " + typeof kk)
    }
    const ee = (kk, ek) => {
      let ik = qk().map(ke),
        Dk = kk;
      void 0 !== ek && (kk = kk < 32 ? -((ek << 5) + kk) : (ek << 5) + kk, ik.highByte = ek);
      let fk = Pk[kk];
      return fk && (fk.isShared || sk) && ((Pk.restoreStructures || (Pk.restoreStructures = []))[kk] = fk), Pk[kk] = ik, ik.read = zk(ik, Dk), ik.read()
    };
    pk[0] = () => {}, pk[0].noBuffer = !0, pk[66] = kk => {
      let ek = kk.length,
        ik = BigInt(128 & kk[0] ? kk[0] - 256 : kk[0]);
      for (let Dk = 1; Dk < ek; Dk++) ik <<= BigInt(8), ik += BigInt(kk[Dk]);
      return ik
    };
    let ie = {
      Error: Error,
      TypeError: TypeError,
      ReferenceError: ReferenceError
    };
    pk[101] = () => {
      let kk = qk();
      return (ie[kk[0]] || Error)(kk[1], {
        cause: kk[2]
      })
    }, pk[105] = kk => {
      if (!1 === Hk.structuredClone) throw new Error("Structured clone extension is disabled");
      let ek = xk.getUint32(bk - 4);
      Kk || (Kk = new Map);
      let ik, Dk = fk[bk];
      ik = Dk >= 144 && Dk < 160 || 220 == Dk || 221 == Dk ? [] : {};
      let Sk = {
        target: ik
      };
      Kk.set(ek, Sk);
      let rk = qk();
      return Sk.used ? Object.assign(ik, rk) : (Sk.target = rk, rk)
    }, pk[112] = kk => {
      if (!1 === Hk.structuredClone) throw new Error("Structured clone extension is disabled");
      let ek = xk.getUint32(bk - 4),
        ik = Kk.get(ek);
      return ik.used = !0, ik.target
    }, pk[115] = () => new Set(qk());
    const De = ["Int8", "Uint8", "Uint8Clamped", "Int16", "Uint16", "Int32", "Uint32", "Float32", "Float64", "BigInt64", "BigUint64"].map((kk => kk + "Array"));
    let fe = "object" === typeof globalThis ? globalThis : window;
    pk[116] = kk => {
      let ek = kk[0],
        ik = De[ek];
      if (!ik) {
        if (16 === ek) {
          let ek = new ArrayBuffer(kk.length - 1);
          return new Uint8Array(ek).set(kk.subarray(1)), ek
        }
        throw new Error("Could not find typed array for code " + ek)
      }
      return new fe[ik](Uint8Array.prototype.slice.call(kk, 1).buffer)
    }, pk[120] = () => {
      let kk = qk();
      return new RegExp(kk[0], kk[1])
    };
    const Se = [];

    function be(kk) {
      jk && jk();
      let ek = Sk,
        ik = bk,
        Dk = Uk,
        rk = wk,
        pk = lk,
        yk = mk,
        Yk = nk,
        Lk = Kk,
        Ck = Mk,
        Ak = new Uint8Array(fk.slice(0, Sk)),
        dk = Pk,
        Vk = Pk.slice(0, Pk.length),
        Fk = Hk,
        uk = sk,
        qk = kk();
      return Sk = ek, bk = ik, Uk = Dk, wk = rk, lk = pk, mk = yk, nk = Yk, Kk = Lk, Mk = Ck, fk = Ak, sk = uk, (Pk = dk).splice(0, Pk.length, ...Vk), Hk = Fk, xk = new DataView(fk.buffer, fk.byteOffset, fk.byteLength), qk
    }

    function re() {
      fk = null, Kk = null, Pk = null
    }
    pk[98] = kk => {
      let ek = (kk[0] << 24) + (kk[1] << 16) + (kk[2] << 8) + kk[3],
        ik = bk;
      return bk += ek - kk.length, Mk = Se, (Mk = [gk(), gk()]).position0 = 0, Mk.position1 = 0, Mk.postBundlePosition = bk, bk = ik, qk()
    }, pk[255] = kk => 4 == kk.length ? new Date(1e3 * (16777216 * kk[0] + (kk[1] << 16) + (kk[2] << 8) + kk[3])) : 8 == kk.length ? new Date(((kk[0] << 22) + (kk[1] << 14) + (kk[2] << 6) + (kk[3] >> 2)) / 1e6 + 1e3 * (4294967296 * (3 & kk[3]) + 16777216 * kk[4] + (kk[5] << 16) + (kk[6] << 8) + kk[7])) : 12 == kk.length ? new Date(((kk[0] << 24) + (kk[1] << 16) + (kk[2] << 8) + kk[3]) / 1e6 + 1e3 * ((128 & kk[4] ? -281474976710656 : 0) + 1099511627776 * kk[6] + 4294967296 * kk[7] + 16777216 * kk[8] + (kk[9] << 16) + (kk[10] << 8) + kk[11])) : new Date("invalid");
    const Pe = new Array(147);
    for (let Si = 0; Si < 256; Si++) Pe[Si] = +("1e" + Math.floor(45.15 - .30103 * Si));
    const me = Vk;
    var Me = new Vk({
      useRecords: !1
    });
    const Ke = Me.unpack,
      xe = Me.unpackMultiple,
      ne = Me.unpack,
      Ue = {
        NEVER: 0,
        ALWAYS: 1,
        DECIMAL_ROUND: 3,
        DECIMAL_FIT: 4
      };
    let He, we, le, pe = new Float32Array(1),
      ye = new Uint8Array(pe.buffer, 0, 4);

    function Ye(kk) {
      pe[0] = kk;
      let ek = Pe[(127 & ye[3]) << 1 | ye[2] >> 7];
      return (ek * kk + (kk > 0 ? .5 : -.5) | 0) / ek
    }
    try {
      He = new TextEncoder
    } catch (fi) {}
    const Le = "undefined" !== typeof Buffer,
      Ce = Le ? function(kk) {
        return Buffer.allocUnsafeSlow(kk)
      } : Uint8Array,
      Ae = Le ? Buffer : Uint8Array,
      je = Le ? 4294967296 : 2144337920;
    let se, de, Ve, Fe, ue, qe = 0,
      Ie = null;
    const ze = /[\u0080-\uFFFF]/,
      Qe = Symbol("record-id");
    class ve extends Vk {
      constructor(kk) {
        let ek, ik, Dk, fk;
        super(kk), this.offset = 0;
        let Sk = Ae.prototype.utf8Write ? function(kk, ek) {
            return se.utf8Write(kk, ek, se.byteLength - ek)
          } : !(!He || !He.encodeInto) && function(kk, ek) {
            return He.encodeInto(kk, se.subarray(ek)).written
          },
          bk = this;
        kk || (kk = {});
        let rk = kk && kk.sequential,
          Pk = kk.structures || kk.saveStructures,
          mk = kk.maxSharedStructures;
        if (null == mk && (mk = Pk ? 32 : 0), mk > 8160) throw new Error("Maximum maxSharedStructure is 8160");
        kk.structuredClone && void 0 == kk.moreTypes && (this.moreTypes = !0);
        let Mk = kk.maxOwnStructures;
        null == Mk && (Mk = Pk ? 32 : 64), this.structures || 0 == kk.useRecords || (this.structures = []);
        let Kk = mk > 32 || Mk + mk > 64,
          xk = mk + 64,
          nk = mk + Mk + 64;
        if (nk > 8256) throw new Error("Maximum maxSharedStructure + maxOwnStructure is 8192");
        let Uk = [],
          Hk = 0,
          wk = 0;
        this.pack = this.encode = function(kk, Sk) {
          if (se || (se = new Ce(8192), Ve = se.dataView || (se.dataView = new DataView(se.buffer, 0, 8192)), qe = 0), Fe = se.length - 10, Fe - qe < 2048 ? (se = new Ce(se.length), Ve = se.dataView || (se.dataView = new DataView(se.buffer, 0, se.length)), Fe = se.length - 10, qe = 0) : qe = qe + 7 & 2147483640, ek = qe, Sk & Je && (qe += 255 & Sk), fk = bk.structuredClone ? new Map : null, bk.bundleStrings && "string" !== typeof kk ? (Ie = [], Ie.size = 1 / 0) : Ie = null, Dk = bk.structures, Dk) {
            Dk.uninitialized && (Dk = bk._mergeStructures(bk.getStructures()));
            let kk = Dk.sharedLength || 0;
            if (kk > mk) throw new Error("Shared structures is larger than maximum shared structures, try increasing maxSharedStructures to " + Dk.sharedLength);
            if (!Dk.transitions) {
              Dk.transitions = Object.create(null);
              for (let ek = 0; ek < kk; ek++) {
                let kk = Dk[ek];
                if (!kk) continue;
                let ik, fk = Dk.transitions;
                for (let ek = 0, Dk = kk.length; ek < Dk; ek++) {
                  let Dk = kk[ek];
                  ik = fk[Dk], ik || (ik = fk[Dk] = Object.create(null)), fk = ik
                }
                fk[Qe] = ek + 64
              }
              this.lastNamedStructuresLength = kk
            }
            rk || (Dk.nextId = kk + 64)
          }
          let Pk;
          ik && (ik = !1);
          try {
            bk.randomAccessStructure && kk && kk.constructor && kk.constructor === Object ? Vk(kk) : yk(kk);
            let ik = Ie;
            if (Ie && We(ek, yk, 0), fk && fk.idsToInsert) {
              let kk = fk.idsToInsert.sort(((kk, ek) => kk.offset > ek.offset ? 1 : -1)),
                Dk = kk.length,
                Sk = -1;
              for (; ik && Dk > 0;) {
                let fk = kk[--Dk].offset + ek;
                fk < ik.stringsPosition + ek && -1 === Sk && (Sk = 0), fk > ik.position + ek ? Sk >= 0 && (Sk += 6) : (Sk >= 0 && (Ve.setUint32(ik.position + ek, Ve.getUint32(ik.position + ek) + Sk), Sk = -1), ik = ik.previous, Dk++)
              }
              Sk >= 0 && ik && Ve.setUint32(ik.position + ek, Ve.getUint32(ik.position + ek) + Sk), qe += 6 * kk.length, qe > Fe && jk(qe), bk.offset = qe;
              let rk = function(kk, ek) {
                let ik, Dk = 6 * ek.length,
                  fk = kk.length - Dk;
                for (; ik = ek.pop();) {
                  let ek = ik.offset,
                    Sk = ik.id;
                  kk.copyWithin(ek + Dk, ek, fk), Dk -= 6;
                  let bk = ek + Dk;
                  kk[bk++] = 214, kk[bk++] = 105, kk[bk++] = Sk >> 24, kk[bk++] = Sk >> 16 & 255, kk[bk++] = Sk >> 8 & 255, kk[bk++] = 255 & Sk, fk = ek
                }
                return kk
              }(se.subarray(ek, qe), kk);
              return fk = null, rk
            }
            return bk.offset = qe, Sk & Ne ? (se.start = ek, se.end = qe, se) : se.subarray(ek, qe)
          } catch (fi) {
            throw Pk = fi, fi
          } finally {
            if (Dk && (lk(), ik && bk.saveStructures)) {
              let ik = Dk.sharedLength || 0,
                fk = se.subarray(ek, qe),
                rk = Xe(Dk, bk);
              if (!Pk) return !1 === bk.saveStructures(rk, rk.isCompatible) ? bk.pack(kk, Sk) : (bk.lastNamedStructuresLength = ik, se.length > 1073741824 && (se = null), fk)
            }
            se.length > 1073741824 && (se = null), Sk & Re && (qe = ek)
          }
        };
        const lk = () => {
            wk < 10 && wk++;
            let kk = Dk.sharedLength || 0;
            if (Dk.length > kk && !rk && (Dk.length = kk), Hk > 1e4) Dk.transitions = null, wk = 0, Hk = 0, Uk.length > 0 && (Uk = []);
            else if (Uk.length > 0 && !rk) {
              for (let kk = 0, ek = Uk.length; kk < ek; kk++) Uk[kk][Qe] = 0;
              Uk = []
            }
          },
          pk = kk => {
            var ek = kk.length;
            ek < 16 ? se[qe++] = 144 | ek : ek < 65536 ? (se[qe++] = 220, se[qe++] = ek >> 8, se[qe++] = 255 & ek) : (se[qe++] = 221, Ve.setUint32(qe, ek), qe += 4);
            for (let ik = 0; ik < ek; ik++) yk(kk[ik])
          },
          yk = kk => {
            qe > Fe && (se = jk(qe));
            var ik, Dk = typeof kk;
            if ("string" === Dk) {
              let Dk, fk = kk.length;
              if (Ie && fk >= 4 && fk < 4096) {
                if ((Ie.size += fk) > 21760) {
                  let kk, ik, Dk = (Ie[0] ? 3 * Ie[0].length + Ie[1].length : 0) + 10;
                  qe + Dk > Fe && (se = jk(qe + Dk)), Ie.position ? (ik = Ie, se[qe] = 200, qe += 3, se[qe++] = 98, kk = qe - ek, qe += 4, We(ek, yk, 0), Ve.setUint16(kk + ek - 3, qe - ek - kk)) : (se[qe++] = 214, se[qe++] = 98, kk = qe - ek, qe += 4), Ie = ["", ""], Ie.previous = ik, Ie.size = 0, Ie.position = kk
                }
                let ik = ze.test(kk);
                return Ie[ik ? 0 : 1] += kk, se[qe++] = 193, void yk(ik ? -fk : fk)
              }
              Dk = fk < 32 ? 1 : fk < 256 ? 2 : fk < 65536 ? 3 : 5;
              let bk = 3 * fk;
              if (qe + bk > Fe && (se = jk(qe + bk)), fk < 64 || !Sk) {
                let ek, Sk, bk, rk = qe + Dk;
                for (ek = 0; ek < fk; ek++) Sk = kk.charCodeAt(ek), Sk < 128 ? se[rk++] = Sk : Sk < 2048 ? (se[rk++] = Sk >> 6 | 192, se[rk++] = 63 & Sk | 128) : 55296 === (64512 & Sk) && 56320 === (64512 & (bk = kk.charCodeAt(ek + 1))) ? (Sk = 65536 + ((1023 & Sk) << 10) + (1023 & bk), ek++, se[rk++] = Sk >> 18 | 240, se[rk++] = Sk >> 12 & 63 | 128, se[rk++] = Sk >> 6 & 63 | 128, se[rk++] = 63 & Sk | 128) : (se[rk++] = Sk >> 12 | 224, se[rk++] = Sk >> 6 & 63 | 128, se[rk++] = 63 & Sk | 128);
                ik = rk - qe - Dk
              } else ik = Sk(kk, qe + Dk);
              ik < 32 ? se[qe++] = 160 | ik : ik < 256 ? (Dk < 2 && se.copyWithin(qe + 2, qe + 1, qe + 1 + ik), se[qe++] = 217, se[qe++] = ik) : ik < 65536 ? (Dk < 3 && se.copyWithin(qe + 3, qe + 2, qe + 2 + ik), se[qe++] = 218, se[qe++] = ik >> 8, se[qe++] = 255 & ik) : (Dk < 5 && se.copyWithin(qe + 5, qe + 3, qe + 3 + ik), se[qe++] = 219, Ve.setUint32(qe, ik), qe += 4), qe += ik
            } else if ("number" === Dk)
              if (kk >>> 0 === kk) kk < 32 || kk < 128 && !1 === this.useRecords || kk < 64 && !this.randomAccessStructure ? se[qe++] = kk : kk < 256 ? (se[qe++] = 204, se[qe++] = kk) : kk < 65536 ? (se[qe++] = 205, se[qe++] = kk >> 8, se[qe++] = 255 & kk) : (se[qe++] = 206, Ve.setUint32(qe, kk), qe += 4);
              else if ((kk | 0) === kk) kk >= -32 ? se[qe++] = 256 + kk : kk >= -128 ? (se[qe++] = 208, se[qe++] = kk + 256) : kk >= -32768 ? (se[qe++] = 209, Ve.setInt16(qe, kk), qe += 2) : (se[qe++] = 210, Ve.setInt32(qe, kk), qe += 4);
            else {
              let ek;
              if ((ek = this.useFloat32) > 0 && kk < 4294967296 && kk >= -2147483648) {
                let ik;
                if (se[qe++] = 202, Ve.setFloat32(qe, kk), ek < 4 || ((ik = kk * Pe[(127 & se[qe]) << 1 | se[qe + 1] >> 7]) | 0) === ik) return void(qe += 4);
                qe--
              }
              se[qe++] = 203, Ve.setFloat64(qe, kk), qe += 8
            } else if ("object" === Dk || "function" === Dk)
              if (kk) {
                if (fk) {
                  let ik = fk.get(kk);
                  if (ik) {
                    if (!ik.id) {
                      let kk = fk.idsToInsert || (fk.idsToInsert = []);
                      ik.id = kk.push(ik)
                    }
                    return se[qe++] = 214, se[qe++] = 112, Ve.setUint32(qe, ik.id), void(qe += 4)
                  }
                  fk.set(kk, {
                    offset: qe - ek
                  })
                }
                let Sk = kk.constructor;
                if (Sk === Object) Ak(kk);
                else if (Sk === Array) pk(kk);
                else if (Sk === Map)
                  if (this.mapAsEmptyObject) se[qe++] = 128;
                  else {
                    (ik = kk.size) < 16 ? se[qe++] = 128 | ik : ik < 65536 ? (se[qe++] = 222, se[qe++] = ik >> 8, se[qe++] = 255 & ik) : (se[qe++] = 223, Ve.setUint32(qe, ik), qe += 4);
                    for (let [ek, ik] of kk) yk(ek), yk(ik)
                  }
                else {
                  for (let ek = 0, ik = we.length; ek < ik; ek++) {
                    if (kk instanceof le[ek]) {
                      let ik = we[ek];
                      if (ik.write) {
                        ik.type && (se[qe++] = 212, se[qe++] = ik.type, se[qe++] = 0);
                        let ek = ik.write.call(this, kk);
                        return void(ek === kk ? Array.isArray(kk) ? pk(kk) : Ak(kk) : yk(ek))
                      }
                      let Dk, fk = se,
                        Sk = Ve,
                        bk = qe;
                      se = null;
                      try {
                        Dk = ik.pack.call(this, kk, (kk => (se = fk, fk = null, qe += kk, qe > Fe && jk(qe), {
                          target: se,
                          targetView: Ve,
                          position: qe - kk
                        })), yk)
                      } finally {
                        fk && (se = fk, Ve = Sk, qe = bk, Fe = se.length - 10)
                      }
                      return void(Dk && (Dk.length + qe > Fe && jk(Dk.length + qe), qe = ae(Dk, se, qe, ik.type)))
                    }
                  }
                  if (Array.isArray(kk)) pk(kk);
                  else {
                    if (kk.toJSON) {
                      const ek = kk.toJSON();
                      if (ek !== kk) return yk(ek)
                    }
                    if ("function" === Dk) return yk(this.writeFunction && this.writeFunction(kk));
                    Ak(kk)
                  }
                }
              } else se[qe++] = 192;
            else if ("boolean" === Dk) se[qe++] = kk ? 195 : 194;
            else if ("bigint" === Dk) {
              if (kk < BigInt(1) << BigInt(63) && kk >= -(BigInt(1) << BigInt(63))) se[qe++] = 211, Ve.setBigInt64(qe, kk);
              else if (kk < BigInt(1) << BigInt(64) && kk > 0) se[qe++] = 207, Ve.setBigUint64(qe, kk);
              else {
                if (!this.largeBigIntToFloat) {
                  if (this.largeBigIntToString) return yk(kk.toString());
                  if (this.useBigIntExtension && kk < BigInt(2) ** BigInt(1023) && kk > -(BigInt(2) ** BigInt(1023))) {
                    se[qe++] = 199, qe++, se[qe++] = 66;
                    let ek, ik = [];
                    do {
                      let Dk = kk & BigInt(255);
                      ek = (Dk & BigInt(128)) === (kk < BigInt(0) ? BigInt(128) : BigInt(0)), ik.push(Dk), kk >>= BigInt(8)
                    } while (kk !== BigInt(0) && kk !== BigInt(-1) || !ek);
                    se[qe - 2] = ik.length;
                    for (let kk = ik.length; kk > 0;) se[qe++] = Number(ik[--kk]);
                    return
                  }
                  throw new RangeError(kk + " was too large to fit in MessagePack 64-bit integer format, use useBigIntExtension, or set largeBigIntToFloat to convert to float-64, or set largeBigIntToString to convert to string")
                }
                se[qe++] = 203, Ve.setFloat64(qe, Number(kk))
              }
              qe += 8
            } else {
              if ("undefined" !== Dk) throw new Error("Unknown type: " + Dk);
              this.encodeUndefinedAsNil ? se[qe++] = 192 : (se[qe++] = 212, se[qe++] = 0, se[qe++] = 0)
            }
          },
          Yk = this.variableMapSize || this.coercibleKeyAsNumber || this.skipValues ? kk => {
            let ek;
            if (this.skipValues) {
              ek = [];
              for (let ik in kk) "function" === typeof kk.hasOwnProperty && !kk.hasOwnProperty(ik) || this.skipValues.includes(kk[ik]) || ek.push(ik)
            } else ek = Object.keys(kk);
            let ik, Dk = ek.length;
            if (Dk < 16 ? se[qe++] = 128 | Dk : Dk < 65536 ? (se[qe++] = 222, se[qe++] = Dk >> 8, se[qe++] = 255 & Dk) : (se[qe++] = 223, Ve.setUint32(qe, Dk), qe += 4), this.coercibleKeyAsNumber)
              for (let fk = 0; fk < Dk; fk++) {
                ik = ek[fk];
                let Dk = Number(ik);
                yk(isNaN(Dk) ? ik : Dk), yk(kk[ik])
              } else
                for (let fk = 0; fk < Dk; fk++) yk(ik = ek[fk]), yk(kk[ik])
          } : kk => {
            se[qe++] = 222;
            let ik = qe - ek;
            qe += 2;
            let Dk = 0;
            for (let ek in kk)("function" !== typeof kk.hasOwnProperty || kk.hasOwnProperty(ek)) && (yk(ek), yk(kk[ek]), Dk++);
            if (Dk > 65535) throw new Error('Object is too large to serialize with fast 16-bit map size, use the "variableMapSize" option to serialize this object');
            se[ik++ + ek] = Dk >> 8, se[ik + ek] = 255 & Dk
          },
          Lk = !1 === this.useRecords ? Yk : kk.progressiveRecords && !Kk ? kk => {
            let ik, fk, Sk = Dk.transitions || (Dk.transitions = Object.create(null)),
              bk = qe++ - ek;
            for (let rk in kk)
              if ("function" !== typeof kk.hasOwnProperty || kk.hasOwnProperty(rk)) {
                if (ik = Sk[rk], ik) Sk = ik;
                else {
                  let Pk = Object.keys(kk),
                    mk = Sk;
                  Sk = Dk.transitions;
                  let Mk = 0;
                  for (let kk = 0, ek = Pk.length; kk < ek; kk++) {
                    let ek = Pk[kk];
                    ik = Sk[ek], ik || (ik = Sk[ek] = Object.create(null), Mk++), Sk = ik
                  }
                  bk + ek + 1 == qe ? (qe--, sk(Sk, Pk, Mk)) : dk(Sk, Pk, bk, Mk), fk = !0, Sk = mk[rk]
                }
                yk(kk[rk])
              } if (!fk) {
              let ik = Sk[Qe];
              ik ? se[bk + ek] = ik : dk(Sk, Object.keys(kk), bk, 0)
            }
          } : kk => {
            let ek, ik = Dk.transitions || (Dk.transitions = Object.create(null)),
              fk = 0;
            for (let Dk in kk)("function" !== typeof kk.hasOwnProperty || kk.hasOwnProperty(Dk)) && (ek = ik[Dk], ek || (ek = ik[Dk] = Object.create(null), fk++), ik = ek);
            let Sk = ik[Qe];
            Sk ? Sk >= 96 && Kk ? (se[qe++] = 96 + (31 & (Sk -= 96)), se[qe++] = Sk >> 5) : se[qe++] = Sk : sk(ik, ik.__keys__ || Object.keys(kk), fk);
            for (let Dk in kk)("function" !== typeof kk.hasOwnProperty || kk.hasOwnProperty(Dk)) && yk(kk[Dk])
          },
          Ck = "function" == typeof this.useRecords && this.useRecords,
          Ak = Ck ? kk => {
            Ck(kk) ? Lk(kk) : Yk(kk)
          } : Lk,
          jk = kk => {
            let ik;
            if (kk > 16777216) {
              if (kk - ek > je) throw new Error("Packed buffer would be larger than maximum buffer size");
              ik = Math.min(je, 4096 * Math.round(Math.max((kk - ek) * (kk > 67108864 ? 1.25 : 2), 4194304) / 4096))
            } else ik = 1 + (Math.max(kk - ek << 2, se.length - 1) >> 12) << 12;
            let Dk = new Ce(ik);
            return Ve = Dk.dataView || (Dk.dataView = new DataView(Dk.buffer, 0, ik)), kk = Math.min(kk, se.length), se.copy ? se.copy(Dk, 0, ek, kk) : Dk.set(se.slice(ek, kk)), qe -= ek, ek = 0, Fe = Dk.length - 10, se = Dk
          },
          sk = (kk, ek, fk) => {
            let Sk = Dk.nextId;
            Sk || (Sk = 64), Sk < xk && this.shouldShareStructure && !this.shouldShareStructure(ek) ? (Sk = Dk.nextOwnId, Sk < nk || (Sk = xk), Dk.nextOwnId = Sk + 1) : (Sk >= nk && (Sk = xk), Dk.nextId = Sk + 1);
            let bk = ek.highByte = Sk >= 96 && Kk ? Sk - 96 >> 5 : -1;
            kk[Qe] = Sk, kk.__keys__ = ek, Dk[Sk - 64] = ek, Sk < xk ? (ek.isShared = !0, Dk.sharedLength = Sk - 63, ik = !0, bk >= 0 ? (se[qe++] = 96 + (31 & Sk), se[qe++] = bk) : se[qe++] = Sk) : (bk >= 0 ? (se[qe++] = 213, se[qe++] = 114, se[qe++] = 96 + (31 & Sk), se[qe++] = bk) : (se[qe++] = 212, se[qe++] = 114, se[qe++] = Sk), fk && (Hk += wk * fk), Uk.length >= Mk && (Uk.shift()[Qe] = 0), Uk.push(kk), yk(ek))
          },
          dk = (kk, ik, Dk, fk) => {
            let Sk = se,
              bk = qe,
              rk = Fe,
              Pk = ek;
            se = de, qe = 0, ek = 0, se || (de = se = new Ce(8192)), Fe = se.length - 10, sk(kk, ik, fk), de = se;
            let mk = qe;
            if (se = Sk, qe = bk, Fe = rk, ek = Pk, mk > 1) {
              let kk = qe + mk - 1;
              kk > Fe && jk(kk);
              let ik = Dk + ek;
              se.copyWithin(ik + mk, ik + 1, qe), se.set(de.slice(0, mk), ik), qe = kk
            } else se[Dk + ek] = de[0]
          },
          Vk = kk => {
            let fk = ue(kk, se, ek, qe, Dk, jk, ((kk, ek, Dk) => {
              if (Dk) return ik = !0;
              qe = ek;
              let fk = se;
              return yk(kk), lk(), fk !== se ? {
                position: qe,
                targetView: Ve,
                target: se
              } : qe
            }), this);
            if (0 === fk) return Ak(kk);
            qe = fk
          }
      }
      useBuffer(kk) {
        se = kk, Ve = se.dataView || (se.dataView = new DataView(se.buffer, se.byteOffset, se.byteLength)), qe = 0
      }
      set position(kk) {
        qe = kk
      }
      get position() {
        return qe
      }
      set buffer(kk) {
        se = kk
      }
      get buffer() {
        return se
      }
      clearSharedData() {
        this.structures && (this.structures = []), this.typedStructs && (this.typedStructs = [])
      }
    }

    function Ee(kk, ek, ik, Dk) {
      let fk = kk.byteLength;
      if (fk + 1 < 256) {
        var {
          target: Sk,
          position: bk
        } = ik(4 + fk);
        Sk[bk++] = 199, Sk[bk++] = fk + 1
      } else if (fk + 1 < 65536) {
        var {
          target: Sk,
          position: bk
        } = ik(5 + fk);
        Sk[bk++] = 200, Sk[bk++] = fk + 1 >> 8, Sk[bk++] = fk + 1 & 255
      } else {
        var {
          target: Sk,
          position: bk,
          targetView: rk
        } = ik(7 + fk);
        Sk[bk++] = 201, rk.setUint32(bk, fk + 1), bk += 4
      }
      Sk[bk++] = 116, Sk[bk++] = ek, kk.buffer || (kk = new Uint8Array(kk)), Sk.set(new Uint8Array(kk.buffer, kk.byteOffset, kk.byteLength), bk)
    }

    function he(kk, ek) {
      let ik = kk.byteLength;
      var Dk, fk;
      if (ik < 256) {
        var {
          target: Dk,
          position: fk
        } = ek(ik + 2);
        Dk[fk++] = 196, Dk[fk++] = ik
      } else if (ik < 65536) {
        var {
          target: Dk,
          position: fk
        } = ek(ik + 3);
        Dk[fk++] = 197, Dk[fk++] = ik >> 8, Dk[fk++] = 255 & ik
      } else {
        var {
          target: Dk,
          position: fk,
          targetView: Sk
        } = ek(ik + 5);
        Dk[fk++] = 198, Sk.setUint32(fk, ik), fk += 4
      }
      Dk.set(kk, fk)
    }

    function ae(kk, ek, ik, Dk) {
      let fk = kk.length;
      switch (fk) {
        case 1:
          ek[ik++] = 212;
          break;
        case 2:
          ek[ik++] = 213;
          break;
        case 4:
          ek[ik++] = 214;
          break;
        case 8:
          ek[ik++] = 215;
          break;
        case 16:
          ek[ik++] = 216;
          break;
        default:
          fk < 256 ? (ek[ik++] = 199, ek[ik++] = fk) : fk < 65536 ? (ek[ik++] = 200, ek[ik++] = fk >> 8, ek[ik++] = 255 & fk) : (ek[ik++] = 201, ek[ik++] = fk >> 24, ek[ik++] = fk >> 16 & 255, ek[ik++] = fk >> 8 & 255, ek[ik++] = 255 & fk)
      }
      return ek[ik++] = Dk, ek.set(kk, ik), ik += fk
    }

    function We(kk, ek, ik) {
      if (Ie.length > 0) {
        Ve.setUint32(Ie.position + kk, qe + ik - Ie.position - kk), Ie.stringsPosition = qe - kk;
        let Dk = Ie;
        Ie = null, ek(Dk[0]), ek(Dk[1])
      }
    }

    function te(kk) {
      if (kk.Class) {
        if (!kk.pack && !kk.write) throw new Error("Extension has no pack or write function");
        if (kk.pack && !kk.type) throw new Error("Extension has no type (numeric code to identify the extension)");
        le.unshift(kk.Class), we.unshift(kk)
      }! function(kk) {
        kk.unpack ? pk[kk.type] = kk.unpack : pk[kk.type] = kk
      }(kk)
    }

    function Xe(kk, ek) {
      return kk.isCompatible = kk => {
        let ik = !kk || (ek.lastNamedStructuresLength || 0) === kk.length;
        return ik || ek._mergeStructures(kk), ik
      }, kk
    }
    le = [Date, Set, Error, RegExp, ArrayBuffer, Object.getPrototypeOf(Uint8Array.prototype).constructor, Yk], we = [{
      pack(kk, ek, ik) {
        let Dk = kk.getTime() / 1e3;
        if ((this.useTimestamp32 || 0 === kk.getMilliseconds()) && Dk >= 0 && Dk < 4294967296) {
          let {
            target: kk,
            targetView: ik,
            position: fk
          } = ek(6);
          kk[fk++] = 214, kk[fk++] = 255, ik.setUint32(fk, Dk)
        } else if (Dk > 0 && Dk < 4294967296) {
          let {
            target: ik,
            targetView: fk,
            position: Sk
          } = ek(10);
          ik[Sk++] = 215, ik[Sk++] = 255, fk.setUint32(Sk, 4e6 * kk.getMilliseconds() + (Dk / 1e3 / 4294967296 | 0)), fk.setUint32(Sk + 4, Dk)
        } else if (isNaN(Dk)) {
          if (this.onInvalidDate) return ek(0), ik(this.onInvalidDate());
          let {
            target: kk,
            targetView: Dk,
            position: fk
          } = ek(3);
          kk[fk++] = 212, kk[fk++] = 255, kk[fk++] = 255
        } else {
          let {
            target: ik,
            targetView: fk,
            position: Sk
          } = ek(15);
          ik[Sk++] = 199, ik[Sk++] = 12, ik[Sk++] = 255, fk.setUint32(Sk, 1e6 * kk.getMilliseconds()), fk.setBigInt64(Sk + 4, BigInt(Math.floor(Dk)))
        }
      }
    }, {
      pack(kk, ek, ik) {
        if (this.setAsEmptyObject) return ek(0), ik({});
        let Dk = Array.from(kk),
          {
            target: fk,
            position: Sk
          } = ek(this.moreTypes ? 3 : 0);
        this.moreTypes && (fk[Sk++] = 212, fk[Sk++] = 115, fk[Sk++] = 0), ik(Dk)
      }
    }, {
      pack(kk, ek, ik) {
        let {
          target: Dk,
          position: fk
        } = ek(this.moreTypes ? 3 : 0);
        this.moreTypes && (Dk[fk++] = 212, Dk[fk++] = 101, Dk[fk++] = 0), ik([kk.name, kk.message, kk.cause])
      }
    }, {
      pack(kk, ek, ik) {
        let {
          target: Dk,
          position: fk
        } = ek(this.moreTypes ? 3 : 0);
        this.moreTypes && (Dk[fk++] = 212, Dk[fk++] = 120, Dk[fk++] = 0), ik([kk.source, kk.flags])
      }
    }, {
      pack(kk, ek) {
        this.moreTypes ? Ee(kk, 16, ek) : he(Le ? Buffer.from(kk) : new Uint8Array(kk), ek)
      }
    }, {
      pack(kk, ek) {
        let ik = kk.constructor;
        ik !== Ae && this.moreTypes ? Ee(kk, De.indexOf(ik.name), ek) : he(kk, ek)
      }
    }, {
      pack(kk, ek) {
        let {
          target: ik,
          position: Dk
        } = ek(1);
        ik[Dk] = 193
      }
    }];
    let Be = new ve({
      useRecords: !1
    });
    const ce = Be.pack,
      Te = Be.pack,
      oe = ve,
      {
        NEVER: Ze,
        ALWAYS: Oe,
        DECIMAL_ROUND: ge,
        DECIMAL_FIT: Ge
      } = Ue,
      Ne = 512,
      Re = 1024,
      Je = 2048;
    const ki = function(kk) {
        let ek = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        if (!kk || "object" !== typeof kk) throw new Error("first argument must be an Iterable, Async Iterable, Iterator, Async Iterator, or a promise");
        const ik = new Vk(ek);
        let Dk;
        const fk = kk => {
          let ek;
          Dk && (kk = Buffer.concat([Dk, kk]), Dk = void 0);
          try {
            ek = ik.unpackMultiple(kk)
          } catch (fk) {
            if (!fk.incomplete) throw fk;
            Dk = kk.slice(fk.lastPosition), ek = fk.values
          }
          return ek
        };
        return "function" === typeof kk[Symbol.iterator] ? function*() {
          for (const ek of kk) yield* fk(ek)
        }() : "function" === typeof kk[Symbol.asyncIterator] ? async function*() {
          for await (const ek of kk) yield* fk(ek)
        }(): void 0
      },
      ei = function(kk) {
        let ek = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        if (kk && "object" === typeof kk) {
          if ("function" === typeof kk[Symbol.iterator]) return function*(kk, ek) {
            const ik = new ve(ek);
            for (const Dk of kk) yield ik.pack(Dk)
          }(kk, ek);
          if ("function" === typeof kk.then || "function" === typeof kk[Symbol.asyncIterator]) return async function*(kk, ek) {
            const ik = new ve(ek);
            for await (const Dk of kk) yield ik.pack(Dk)
          }(kk, ek);
          throw new Error("first argument must be an Iterable, Async Iterable, Iterator, Async Iterator, or a Promise")
        }
        throw new Error("first argument must be an Iterable, Async Iterable, or a Promise for an Async Iterable")
      },
      ii = !1,
      Di = !0
  },
  8929: (kk, ek, ik) => {
    ik.r(ek), ik.d(ek, {
      $changes: () => Hk,
      $childType: () => wk,
      $decoder: () => Mk,
      $deleteByIndex: () => nk,
      $encoder: () => mk,
      $filter: () => Kk,
      $getByIndex: () => xk,
      $numFields: () => dk,
      $refId: () => rk,
      $track: () => Pk,
      $values: () => Lk,
      ArraySchema: () => SD,
      Callbacks: () => bf,
      ChangeTree: () => Ii,
      CollectionSchema: () => PD,
      Decoder: () => ND,
      Encoder: () => ZD,
      FieldBuilder: () => KD,
      MapSchema: () => rD,
      Metadata: () => ge,
      OPERATION: () => fk,
      Reflection: () => ef,
      ReflectionField: () => JD,
      ReflectionType: () => kf,
      Root: () => QD,
      Schema: () => ID,
      SetSchema: () => mD,
      StateCallbackStrategy: () => Sf,
      StateView: () => WD,
      StreamSchema: () => MD,
      TypeContext: () => Xe,
      createPool: () => Pf,
      decode: () => Ye,
      decodeKeyValueOperation: () => Ji,
      decodeSchemaOperation: () => Ri,
      defineCustomTypes: () => je,
      defineTypes: () => FD,
      deprecated: () => dD,
      dumpChanges: () => qD,
      encode: () => ie,
      encodeArray: () => Xi,
      encodeIndexedEntry: () => Wi,
      encodeKeyValueOperation: () => ti,
      encodeMapEntry: () => ai,
      encodeSchemaOperation: () => Ei,
      qU: () => pD,
      fullStateOnly: () => CD,
      getDecoderStateCallbacks: () => Df,
      getEncodeDescriptor: () => ei,
      getRawChangesCallback: () => ff,
      isBuilder: () => xD,
      patchOnly: () => LD,
      registerType: () => Ae,
      schema: () => uD,
      t: () => wD,
      type: () => AD,
      unreliable: () => YD,
      view: () => yD
    });
    const Dk = 255;
    var fk;

    function Sk(kk) {
      Object.defineProperty(kk, Symbol.metadata, {
        value: void 0,
        writable: !0,
        configurable: !0,
        enumerable: !1
      })
    }! function(kk) {
      kk[kk.ADD = 128] = "ADD", kk[kk.REPLACE = 0] = "REPLACE", kk[kk.DELETE = 64] = "DELETE", kk[kk.DELETE_AND_MOVE = 96] = "DELETE_AND_MOVE", kk[kk.MOVE_AND_ADD = 160] = "MOVE_AND_ADD", kk[kk.DELETE_AND_ADD = 192] = "DELETE_AND_ADD", kk[kk.CLEAR = 10] = "CLEAR", kk[kk.REVERSE = 15] = "REVERSE", kk[kk.MOVE = 32] = "MOVE", kk[kk.DELETE_BY_REFID = 33] = "DELETE_BY_REFID", kk[kk.ADD_BY_REFID = 129] = "ADD_BY_REFID"
    }(fk || (fk = {})), Symbol.metadata ??= Symbol.for("Symbol.metadata");
    const bk = "undefined" !== typeof globalThis ? globalThis : "undefined" !== typeof global ? global : "undefined" !== typeof self ? self : "undefined" !== typeof window ? window : {};
    if ("function" === typeof Symbol && "function" !== typeof Symbol.for) {
      const kk = "colyseus.symbolRegistry",
        ek = bk[kk] || (bk[kk] = Object.create(null));
      Symbol.for = function(kk) {
        return ek[kk] || (ek[kk] = Symbol(kk))
      }, Symbol.keyFor = function(kk) {
        for (const ik in ek)
          if (ek[ik] === kk) return ik
      }
    }
    const rk = Symbol.for("$refId"),
      Pk = "~track",
      mk = "~encoder",
      Mk = "~decoder",
      Kk = "~filter",
      xk = "~getByIndex",
      nk = "~deleteByIndex",
      Uk = "~resyncPrune",
      Hk = Symbol.for("$changes"),
      wk = Symbol.for("$childType"),
      lk = Symbol.for("$proxyTarget"),
      pk = "~onEncodeEnd",
      yk = "~reset",
      Yk = "~onDecodeEnd",
      Lk = Symbol.for("$values"),
      Ck = "~builder",
      Ak = "~descriptors",
      jk = "~__encodeDescriptor",
      sk = "~encoders",
      dk = "~__numFields",
      Vk = "~__refTypeFieldIndexes",
      Fk = "~__viewFieldIndexes",
      uk = "$__fieldIndexesByViewTag",
      qk = "~__unreliableFieldIndexes",
      Ik = "~__patchOnlyFieldIndexes",
      zk = "~__fullSyncSkipIndexes",
      Qk = "~__fullStateOnlyFieldIndexes",
      vk = "~__streamFieldIndexes",
      Ek = "~__streamPriorities";
    let hk;
    try {
      hk = new TextEncoder
    } catch (mf) {}
    const ak = new ArrayBuffer(8),
      Wk = new Int32Array(ak),
      tk = new Float32Array(ak),
      Xk = new Float64Array(ak),
      Bk = new BigInt64Array(ak),
      ck = "undefined" !== typeof Buffer && Buffer.byteLength ? Buffer.byteLength : function(kk, ek) {
        for (var ik = 0, Dk = 0, fk = 0, Sk = kk.length; fk < Sk; fk++)(ik = kk.charCodeAt(fk)) < 128 ? Dk += 1 : ik < 2048 ? Dk += 2 : ik < 55296 || ik >= 57344 ? Dk += 3 : (fk++, Dk += 4);
        return Dk
      };

    function Tk(kk, ek, ik) {
      for (var Dk = 0, fk = 0, Sk = ek.length; fk < Sk; fk++)(Dk = ek.charCodeAt(fk)) < 128 ? kk[ik.offset++] = Dk : Dk < 2048 ? (kk[ik.offset] = 192 | Dk >> 6, kk[ik.offset + 1] = 128 | 63 & Dk, ik.offset += 2) : Dk < 55296 || Dk >= 57344 ? (kk[ik.offset] = 224 | Dk >> 12, kk[ik.offset + 1] = 128 | Dk >> 6 & 63, kk[ik.offset + 2] = 128 | 63 & Dk, ik.offset += 3) : (fk++, Dk = 65536 + ((1023 & Dk) << 10 | 1023 & ek.charCodeAt(fk)), kk[ik.offset] = 240 | Dk >> 18, kk[ik.offset + 1] = 128 | Dk >> 12 & 63, kk[ik.offset + 2] = 128 | Dk >> 6 & 63, kk[ik.offset + 3] = 128 | 63 & Dk, ik.offset += 4)
    }

    function Zk(kk, ek, ik) {
      kk[ik.offset++] = 255 & ek
    }

    function Ok(kk, ek, ik) {
      kk[ik.offset++] = 255 & ek, kk[ik.offset++] = ek >> 8 & 255
    }

    function gk(kk, ek, ik) {
      kk[ik.offset++] = 255 & ek, kk[ik.offset++] = ek >> 8 & 255
    }

    function Gk(kk, ek, ik) {
      kk[ik.offset++] = 255 & ek, kk[ik.offset++] = ek >> 8 & 255, kk[ik.offset++] = ek >> 16 & 255, kk[ik.offset++] = ek >> 24 & 255
    }

    function Nk(kk, ek, ik) {
      const Dk = ek >> 24,
        fk = ek >> 16,
        Sk = ek >> 8,
        bk = ek;
      kk[ik.offset++] = 255 & bk, kk[ik.offset++] = 255 & Sk, kk[ik.offset++] = 255 & fk, kk[ik.offset++] = 255 & Dk
    }

    function Rk(kk, ek, ik) {
      const Dk = Math.floor(ek / Math.pow(2, 32));
      Nk(kk, ek >>> 0, ik), Nk(kk, Dk, ik)
    }

    function Jk(kk, ek, ik) {
      const Dk = ek / Math.pow(2, 32) | 0;
      Nk(kk, ek >>> 0, ik), Nk(kk, Dk, ik)
    }

    function ke(kk, ek, ik) {
      tk[0] = ek, Gk(kk, Wk[0], ik)
    }

    function ee(kk, ek, ik) {
      Xk[0] = ek, Gk(kk, Wk[0], ik), Gk(kk, Wk[1], ik)
    }
    const ie = {
        int8: Zk,
        uint8: function(kk, ek, ik) {
          kk[ik.offset++] = 255 & ek
        },
        int16: Ok,
        uint16: gk,
        int32: Gk,
        uint32: Nk,
        int64: Rk,
        uint64: Jk,
        bigint64: function(kk, ek, ik) {
          Bk[0] = BigInt.asIntN(64, ek), Gk(kk, Wk[0], ik), Gk(kk, Wk[1], ik)
        },
        biguint64: function(kk, ek, ik) {
          Bk[0] = BigInt.asIntN(64, ek), Gk(kk, Wk[0], ik), Gk(kk, Wk[1], ik)
        },
        float32: ke,
        float64: ee,
        boolean: function(kk, ek, ik) {
          kk[ik.offset++] = ek ? 1 : 0
        },
        string: function(kk, ek, ik) {
          ek || (ek = "");
          let Dk = ck(ek, "utf8"),
            fk = 0;
          if (Dk < 32) kk[ik.offset++] = 160 | Dk, fk = 1;
          else if (Dk < 256) kk[ik.offset++] = 217, kk[ik.offset++] = Dk, fk = 2;
          else if (Dk < 65536) kk[ik.offset++] = 218, gk(kk, Dk, ik), fk = 3;
          else {
            if (!(Dk < 4294967296)) throw new Error("String too long");
            kk[ik.offset++] = 219, Nk(kk, Dk, ik), fk = 5
          }
          return Tk(kk, ek, ik), fk + Dk
        },
        number: function kk(ek, ik, Dk) {
          return isNaN(ik) ? kk(ek, 0, Dk) : isFinite(ik) ? ik !== (0 | ik) ? Math.abs(ik) <= 34028235e31 && (tk[0] = ik, Math.abs(Math.abs(tk[0]) - Math.abs(ik)) < 1e-4) ? (ek[Dk.offset++] = 202, ke(ek, ik, Dk), 5) : (ek[Dk.offset++] = 203, ee(ek, ik, Dk), 9) : ik >= 0 ? ik < 128 ? (ek[Dk.offset++] = 255 & ik, 1) : ik < 256 ? (ek[Dk.offset++] = 204, ek[Dk.offset++] = 255 & ik, 2) : ik < 65536 ? (ek[Dk.offset++] = 205, gk(ek, ik, Dk), 3) : ik < 4294967296 ? (ek[Dk.offset++] = 206, Nk(ek, ik, Dk), 5) : (ek[Dk.offset++] = 207, Jk(ek, ik, Dk), 9) : ik >= -32 ? (ek[Dk.offset++] = 224 | ik + 32, 1) : ik >= -128 ? (ek[Dk.offset++] = 208, Zk(ek, ik, Dk), 2) : ik >= -32768 ? (ek[Dk.offset++] = 209, Ok(ek, ik, Dk), 3) : ik >= -2147483648 ? (ek[Dk.offset++] = 210, Gk(ek, ik, Dk), 5) : (ek[Dk.offset++] = 211, Rk(ek, ik, Dk), 9) : kk(ek, ik > 0 ? Number.MAX_SAFE_INTEGER : -Number.MAX_SAFE_INTEGER, Dk)
        },
        utf8Write: Tk,
        utf8Length: ck
      },
      De = new ArrayBuffer(8),
      fe = new Int32Array(De),
      Se = new Float32Array(De),
      be = new Float64Array(De),
      re = new BigUint64Array(De),
      Pe = new BigInt64Array(De);

    function me(kk, ek, ik) {
      ik > kk.length - ek.offset && (ik = kk.length - ek.offset);
      for (var Dk = "", fk = 0, Sk = ek.offset, bk = ek.offset + ik; Sk < bk; Sk++) {
        var rk = kk[Sk];
        if (0 !== (128 & rk))
          if (192 !== (224 & rk))
            if (224 !== (240 & rk)) {
              if (240 !== (248 & rk)) {
                console.error("decode.utf8Read(): Invalid byte " + rk + " at offset " + Sk + ". Skip to end of string: " + (ek.offset + ik));
                break
              }(fk = (7 & rk) << 18 | (63 & kk[++Sk]) << 12 | (63 & kk[++Sk]) << 6 | 63 & kk[++Sk]) >= 65536 ? (fk -= 65536, Dk += String.fromCharCode(55296 + (fk >>> 10), 56320 + (1023 & fk))) : Dk += String.fromCharCode(fk)
            } else Dk += String.fromCharCode((15 & rk) << 12 | (63 & kk[++Sk]) << 6 | 63 & kk[++Sk]);
        else Dk += String.fromCharCode((31 & rk) << 6 | 63 & kk[++Sk]);
        else Dk += String.fromCharCode(rk)
      }
      return ek.offset += ik, Dk
    }

    function Me(kk, ek) {
      return Ke(kk, ek) << 24 >> 24
    }

    function Ke(kk, ek) {
      return kk[ek.offset++]
    }

    function xe(kk, ek) {
      return ne(kk, ek) << 16 >> 16
    }

    function ne(kk, ek) {
      return kk[ek.offset++] | kk[ek.offset++] << 8
    }

    function Ue(kk, ek) {
      return kk[ek.offset++] | kk[ek.offset++] << 8 | kk[ek.offset++] << 16 | kk[ek.offset++] << 24
    }

    function He(kk, ek) {
      return Ue(kk, ek) >>> 0
    }

    function we(kk, ek) {
      return fe[0] = Ue(kk, ek), Se[0]
    }

    function le(kk, ek) {
      return fe[0] = Ue(kk, ek), fe[1] = Ue(kk, ek), be[0]
    }

    function pe(kk, ek) {
      const ik = He(kk, ek);
      return Ue(kk, ek) * Math.pow(2, 32) + ik
    }

    function ye(kk, ek) {
      const ik = He(kk, ek);
      return He(kk, ek) * Math.pow(2, 32) + ik
    }
    const Ye = {
        utf8Read: me,
        int8: Me,
        uint8: Ke,
        int16: xe,
        uint16: ne,
        int32: Ue,
        uint32: He,
        float32: we,
        float64: le,
        int64: pe,
        uint64: ye,
        bigint64: function(kk, ek) {
          return fe[0] = Ue(kk, ek), fe[1] = Ue(kk, ek), Pe[0]
        },
        biguint64: function(kk, ek) {
          return fe[0] = Ue(kk, ek), fe[1] = Ue(kk, ek), re[0]
        },
        boolean: function(kk, ek) {
          return Ke(kk, ek) > 0
        },
        string: function(kk, ek) {
          const ik = kk[ek.offset++];
          let Dk;
          return ik < 192 ? Dk = 31 & ik : 217 === ik ? Dk = Ke(kk, ek) : 218 === ik ? Dk = ne(kk, ek) : 219 === ik && (Dk = He(kk, ek)), me(kk, ek, Dk)
        },
        number: function(kk, ek) {
          const ik = kk[ek.offset++];
          return ik < 128 ? ik : 202 === ik ? we(kk, ek) : 203 === ik ? le(kk, ek) : 204 === ik ? Ke(kk, ek) : 205 === ik ? ne(kk, ek) : 206 === ik ? He(kk, ek) : 207 === ik ? ye(kk, ek) : 208 === ik ? Me(kk, ek) : 209 === ik ? xe(kk, ek) : 210 === ik ? Ue(kk, ek) : 211 === ik ? pe(kk, ek) : ik > 223 ? -1 * (255 - ik + 1) : void 0
        },
        stringCheck: function(kk, ek) {
          const ik = kk[ek.offset];
          return ik < 192 && ik > 160 || 217 === ik || 218 === ik || 219 === ik
        }
      },
      Le = {},
      Ce = new Map;

    function Ae(kk, ek) {
      ek.constructor && (Object.prototype.hasOwnProperty.call(ek, "constructor") && null == ek.constructor[Symbol.metadata] && Sk(ek.constructor), Ce.set(ek.constructor, kk), Le[kk] = ek), ek.encode && (ie[kk] = ek.encode), ek.decode && (Ye[kk] = ek.decode)
    }

    function je(kk) {
      for (const ek in kk) Ae(ek, kk[ek]);
      return kk => AD(kk)
    }
    const se = "ArraySchema does not support streaming \u2014 positional ops (splice / unshift / reverse) shift subsequent indexes, so holding ADDs back for a later tick under `maxPerTick` would desync the decoder. Use `t.stream(X)` (stable monotonic positions) or `t.map(X).stream()` (stable keys) instead.";

    function de() {
      return {
        pendingByView: new Map,
        sentByView: new Map,
        broadcastPending: new Set,
        sentBroadcast: new Set,
        broadcastDeletes: new Set,
        maxPerTick: 32
      }
    }

    function Ve(kk) {
      return kk._stream ??= de()
    }

    function Fe(kk, ek, ik) {
      0 === ek.activeViews.size && Ve(kk).broadcastPending.add(ik)
    }

    function ue(kk, ek, ik, Dk) {
      const Sk = kk._stream;
      if (void 0 === Sk) return !0;
      let bk = !1;
      return Sk.broadcastPending.delete(Dk) ? bk = !0 : Sk.sentBroadcast.delete(Dk) && Sk.broadcastDeletes.add(Dk), ek.forEachActiveView((kk => {
        const ek = Sk.pendingByView.get(kk.id);
        if (ek?.has(Dk)) return ek.delete(Dk), void(bk = !0);
        const rk = Sk.sentByView.get(kk.id);
        if (rk?.has(Dk)) {
          rk.delete(Dk);
          let ek = kk.changes.get(ik);
          void 0 === ek && (ek = new Map, kk.changes.set(ik, ek)), ek.set(Dk, fk.DELETE)
        }
      })), bk
    }

    function qe(kk, ek) {
      const ik = kk._stream?.pendingByView;
      if (void 0 === ik) return !1;
      for (const [Dk, fk] of ik)
        if (fk.size > 0 && void 0 !== ek.activeViews.get(Dk)?.deref()) return !0;
      return !1
    }

    function Ie(kk) {
      const ek = kk._stream;
      return void 0 !== ek && (ek.broadcastPending.size > 0 || ek.broadcastDeletes.size > 0)
    }

    function ze(kk, ek, ik) {
      const Dk = Ve(kk);
      let fk = Dk.pendingByView.get(ek);
      void 0 === fk && (fk = new Set, Dk.pendingByView.set(ek, fk)), fk.add(ik)
    }

    function Qe(kk, ek) {
      const ik = kk._stream;
      void 0 !== ik && (ik.pendingByView.delete(ek), ik.sentByView.delete(ek), ik.priorityByView?.delete(ek))
    }
    const ve = {
      8: "uint8",
      16: "uint16",
      32: "uint32"
    };

    function Ee(kk) {
      if (null == kk || "object" !== typeof kk) throw new Error("t.quantized(): options object with { min, max } is required.");
      const {
        min: ek,
        max: ik
      } = kk;
      if ("number" !== typeof ek || "number" !== typeof ik || !(ik > ek) || !Number.isFinite(ek) || !Number.isFinite(ik)) throw new Error(`t.quantized(): require finite min < max (got min=${ek}, max=${ik}).`);
      const Dk = kk.bits ?? 16;
      if (8 !== Dk && 16 !== Dk && 32 !== Dk) throw new Error(`t.quantized(): bits must be 8, 16 or 32 (got ${Dk}).`);
      const fk = kk.mode ?? "clamp";
      if ("clamp" !== fk && "wrap" !== fk) throw new Error(`t.quantized(): mode must be "clamp" or "wrap" (got ${JSON.stringify(fk)}).`);
      const Sk = "wrap" === fk,
        bk = Math.pow(2, Dk);
      return {
        min: ek,
        max: ik,
        bits: Dk,
        wrap: Sk,
        wire: ve[Dk],
        range: ik - ek,
        span: Sk ? bk : ek === -ik ? bk - 2 : bk - 1
      }
    }

    function he(kk) {
      return null !== kk && "object" === typeof kk && void 0 !== kk.quantized
    }

    function ae(kk, ek) {
      if (kk.wrap) {
        if (!Number.isFinite(ek)) return 0;
        const ik = kk.range;
        let Dk = (ek - kk.min) % ik;
        Dk < 0 && (Dk += ik);
        const fk = kk.span;
        return Math.floor(Dk / ik * fk + .5) % fk
      }
      if (ek !== ek) return 0;
      const ik = ek < kk.min ? kk.min : ek > kk.max ? kk.max : ek;
      return Math.floor((ik - kk.min) / kk.range * kk.span + .5)
    }

    function We(kk, ek) {
      return kk.min + ek / kk.span * kk.range
    }

    function te(kk) {
      const ek = ie[kk.wire];
      return (ik, Dk, fk) => ek(ik, ae(kk, Dk), fk)
    }
    class Xe {
      types = {};
      schemas = new Map;
      hasFilters = !1;
      static inheritedTypes = new WeakMap;
      static cachedContexts = new WeakMap;
      static register(kk) {
        const ek = Object.getPrototypeOf(kk);
        if (ek !== ID) {
          let ik = Xe.inheritedTypes.get(ek);
          ik || (ik = new Set, Xe.inheritedTypes.set(ek, ik)), ik.add(kk)
        }
      }
      static cache(kk) {
        let ek = Xe.cachedContexts.get(kk);
        return ek || (ek = new Xe(kk), Xe.cachedContexts.set(kk, ek)), ek
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
        let ek = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.schemas.size;
        return !this.schemas.has(kk) && (this.types[ek] = kk, null == kk[Symbol.metadata] && ge.initialize(kk), this.schemas.set(kk, ek), !0)
      }
      getTypeId(kk) {
        return this.schemas.get(kk)
      }
      discoverTypes(kk) {
        if (!this.add(kk)) return;
        Xe.inheritedTypes.get(kk)?.forEach((kk => {
          this.discoverTypes(kk)
        }));
        let ek = kk;
        for (;
          (ek = Object.getPrototypeOf(ek)) && ek !== ID && ek !== Function.prototype;) this.discoverTypes(ek);
        const ik = kk[Symbol.metadata];
        (ik[Fk] || ik[vk]) && (this.hasFilters = !0);
        for (const Dk in ik) {
          const kk = ik[Dk].type;
          if ("string" !== typeof kk && !he(kk))
            if ("function" === typeof kk) this.discoverTypes(kk);
            else {
              const ek = Object.values(kk)[0];
              if ("string" === typeof ek) continue;
              this.discoverTypes(ek)
            }
        }
      }
      debug() {
        return `TypeContext ->\n\tSchema types: ${this.schemas.size}\n\thasFilters: ${this.hasFilters}`
      }
    }

    function Be(kk) {
      const ek = Te(kk);
      return ek ? {
        complexTypeKlass: Le[ek],
        childType: kk[ek]
      } : {
        complexTypeKlass: !1,
        childType: kk
      }
    }

    function ce(kk, ek) {
      const ik = oe(kk),
        Dk = Te(ik),
        fk = Dk && Te(ik[Dk]);
      if (fk) throw new Error(`${ek?`${ek}: `:""}@colyseus/schema: nested collections are not supported ("${Dk}" of "${fk}"). Collections can only hold primitive types or Schema classes, wrap the inner ${fk} in a Schema class.`);
      return ik
    }

    function Te(kk) {
      return "object" === typeof kk && null !== kk ? Object.keys(kk).find((kk => void 0 !== Le[kk])) : void 0
    }

    function oe(kk) {
      if ("object" !== typeof kk || null === kk) return kk;
      if (Array.isArray(kk)) return {
        array: oe(kk[0])
      };
      const ek = function(kk) {
        const ek = Object.keys(kk),
          ik = ek.filter((kk => /\d+/.test(kk)));
        if (ik.length > 0 && ik.length === ek.length / 2 && kk[kk[ik[0]]] == ik[0]) return "number";
        if (ek.length > 0 && ek.every((ek => kk[ek] === ek))) return "string"
      }(kk);
      if (ek) return ek;
      if (he(kk)) return "string" === typeof kk.quantized.wire ? kk : {
        quantized: Ee(kk.quantized)
      };
      if (void 0 !== kk.type) return oe(kk.type);
      const ik = Te(kk);
      return ik && (kk[ik] = oe(kk[ik])), kk
    }
    const Ze = [Vk, qk, Ik, zk, Qk, vk, sk];

    function Oe(kk, ek, ik) {
      kk[ek] || Object.defineProperty(kk, ek, {
        value: [],
        enumerable: !1,
        configurable: !0,
        writable: !0
      }), kk[ek].push(ik)
    }
    const ge = {
        addField(kk, ek, ik, Dk, fk) {
          if (ek >= 63) throw new Error(`Can't define field '${ik}'.\nSchema instances may only have up to 63 fields.`);
          kk[ek] = Object.assign(kk[ek] || {}, {
            type: Dk,
            index: ek,
            name: ik
          }), Object.defineProperty(kk, Ak, {
            value: kk[Ak] || {},
            enumerable: !1,
            configurable: !0
          }), kk[Ak][ik] = fk || {
            value: void 0,
            writable: !0,
            enumerable: !0,
            configurable: !0
          }, Object.defineProperty(kk, dk, {
            value: ek,
            enumerable: !1,
            configurable: !0
          }), Object.defineProperty(kk, ik, {
            value: ek,
            enumerable: !1,
            configurable: !0
          }), "string" === typeof kk[ek].type || he(kk[ek].type) || (void 0 === kk[Vk] && Object.defineProperty(kk, Vk, {
            value: [],
            enumerable: !1,
            configurable: !0
          }), kk[Vk].push(ek));
          const Sk = kk[ek].type;
          if (Sk && "object" === typeof Sk && void 0 !== Sk.stream) {
            if (void 0 !== Sk.array) throw new Error(se);
            kk[ek].stream = !0, kk[vk] || Object.defineProperty(kk, vk, {
              value: [],
              enumerable: !1,
              configurable: !0,
              writable: !0
            }), kk[vk].includes(ek) || kk[vk].push(ek);
            const fk = Dk?.priority;
            "function" === typeof fk && ge.setStreamPriority(kk, ik, fk)
          }
        },
        setTag(kk, ek, ik) {
          const Dk = kk[ek];
          if (kk[Dk].tag = ik, kk[Fk] || (Object.defineProperty(kk, Fk, {
              value: [],
              enumerable: !1,
              configurable: !0
            }), Object.defineProperty(kk, uk, {
              value: {},
              enumerable: !1,
              configurable: !0
            })), kk[Fk].push(Dk), ik < 0) kk[uk][ik] || (kk[uk][ik] = []), kk[uk][ik].push(Dk);
          else
            for (let fk = ik; fk > 0; fk &= fk - 1) {
              const ek = fk & -fk;
              kk[uk][ek] || (kk[uk][ek] = []), kk[uk][ek].push(Dk)
            }
        },
        setUnreliable(kk, ek) {
          const ik = kk[ek];
          if ("string" !== typeof kk[ik].type) throw new Error(`@unreliable cannot be applied to ref-type field "${ek}". For ref-type fields, mark each primitive sub-field with @unreliable instead. See README "Limitations and best practices".`);
          kk[ik].unreliable = !0, kk[qk] || Object.defineProperty(kk, qk, {
            value: [],
            enumerable: !1,
            configurable: !0,
            writable: !0
          }), kk[qk].push(ik)
        },
        setPatchOnly(kk, ek) {
          const ik = kk[ek];
          if (kk[ik].fullStateOnly) throw new Error(`field "${ek}" cannot be both patchOnly and fullStateOnly \u2014 those are the only two delivery channels, so the field would never reach a client.`);
          kk[ik].patchOnly = !0, Oe(kk, Ik, ik), Oe(kk, zk, ik)
        },
        setDeprecated(kk, ek) {
          const ik = kk[ek];
          kk[ik].deprecated = !0, Oe(kk, zk, ik), Object.defineProperty(kk, ik, {
            value: kk[ik],
            enumerable: !1,
            configurable: !0
          })
        },
        setFullStateOnly(kk, ek) {
          const ik = kk[ek];
          if (kk[ik].patchOnly) throw new Error(`field "${ek}" cannot be both patchOnly and fullStateOnly \u2014 those are the only two delivery channels, so the field would never reach a client.`);
          kk[ik].fullStateOnly = !0, Oe(kk, Qk, ik)
        },
        setStream(kk, ek) {
          const ik = kk[ek];
          kk[ik].stream = !0, kk[vk] || Object.defineProperty(kk, vk, {
            value: [],
            enumerable: !1,
            configurable: !0,
            writable: !0
          }), kk[vk].push(ik)
        },
        setStreamPriority(kk, ek, ik) {
          const Dk = kk[ek];
          kk[Ek] || Object.defineProperty(kk, Ek, {
            value: {},
            enumerable: !1,
            configurable: !0,
            writable: !0
          }), kk[Ek][Dk] = ik
        },
        getStreamPriority: (kk, ek) => kk?.[Ek]?.[ek],
        defineField(kk, ek, ik, Dk, fk) {
          const Sk = ce(fk, `${kk.name}.${Dk}`),
            {
              complexTypeKlass: bk,
              childType: rk
            } = Be(Sk);
          ge.addField(ek, ik, Dk, Sk, sD(Dk, ik, rk, bk)), ek[Ak][Dk] && Object.defineProperty(kk.prototype, Dk, ek[Ak][Dk]), ("string" === typeof Sk || he(Sk)) && (ek[sk] || Object.defineProperty(ek, sk, {
            value: [],
            enumerable: !1,
            configurable: !0,
            writable: !0
          }), ek[sk][ik] = "string" === typeof Sk ? ie[Sk] : te(Sk.quantized))
        },
        setFields(kk, ek) {
          const ik = kk.prototype.constructor;
          Xe.register(ik);
          const Dk = Object.getPrototypeOf(ik),
            fk = Dk && Dk[Symbol.metadata],
            Sk = ge.initialize(ik);
          ik[Pk] || (ik[Pk] = ID[Pk]), ik[mk] || (ik[mk] = ID[mk]), ik[Mk] || (ik[Mk] = ID[Mk]), ik.prototype.toJSON || (ik.prototype.toJSON = ID.prototype.toJSON);
          let bk = Sk[dk] ?? (fk && fk[dk]) ?? -1;
          bk++, Sk[sk] || Object.defineProperty(Sk, sk, {
            value: fk?.[sk] ? [...fk[sk]] : [],
            enumerable: !1,
            configurable: !0,
            writable: !0
          });
          for (const rk in ek) {
            if (void 0 !== Sk[rk]) throw new Error(`@colyseus/schema: Duplicate '${rk}' definition on '${ik.name||"(anonymous)"}'.`);
            ge.defineField(ik, Sk, bk, rk, ek[rk]), bk++
          }
          return kk
        },
        isDeprecated: (kk, ek) => !0 === kk[ek].deprecated,
        initialize(kk) {
          const ek = Object.getPrototypeOf(kk),
            ik = ek[Symbol.metadata];
          let Dk = kk[Symbol.metadata] ?? Object.create(null);
          if (ek !== ID && Dk === ik && (Dk = Object.create(null), ik)) {
            Object.setPrototypeOf(Dk, ik), Object.defineProperty(Dk, dk, {
              value: ik[dk],
              enumerable: !1,
              configurable: !0,
              writable: !0
            }), void 0 !== ik[Fk] && (Object.defineProperty(Dk, Fk, {
              value: [...ik[Fk]],
              enumerable: !1,
              configurable: !0,
              writable: !0
            }), Object.defineProperty(Dk, uk, {
              value: {
                ...ik[uk]
              },
              enumerable: !1,
              configurable: !0,
              writable: !0
            }));
            for (const kk of Ze) {
              const ek = ik[kk];
              void 0 !== ek && Object.defineProperty(Dk, kk, {
                value: [...ek],
                enumerable: !1,
                configurable: !0,
                writable: !0
              })
            }
            Object.defineProperty(Dk, Ak, {
              value: {
                ...ik[Ak]
              },
              enumerable: !1,
              configurable: !0,
              writable: !0
            })
          }
          return Object.defineProperty(kk, Symbol.metadata, {
            value: Dk,
            writable: !1,
            configurable: !0
          }), Dk
        },
        isValidInstance: kk => kk.constructor[Symbol.metadata] && Object.prototype.hasOwnProperty.call(kk.constructor[Symbol.metadata], dk),
        getFields(kk) {
          const ek = kk[Symbol.metadata],
            ik = {};
          for (let Dk = 0; Dk <= ek[dk]; Dk++) ik[ek[Dk].name] = ek[Dk].type;
          return ik
        },
        hasViewTagAtIndex: (kk, ek) => kk?.[Fk]?.includes(ek),
        hasUnreliableAtIndex: (kk, ek) => kk?.[qk]?.includes(ek),
        hasPatchOnlyAtIndex: (kk, ek) => kk?.[Ik]?.includes(ek),
        hasFullStateOnlyAtIndex: (kk, ek) => kk?.[Qk]?.includes(ek),
        hasStreamAtIndex: (kk, ek) => kk?.[vk]?.includes(ek)
      },
      Ge = (kk, ek, ik) => kk(ek, ik);
    class Ne {
      dirtyLow = 0;
      dirtyHigh = 0;
      ops;
      constructor(kk) {
        this.ops = new Uint8Array(Math.max(kk + 1, 1))
      }
      record(kk, ek) {
        const ik = this.ops[kk];
        0 === ik ? this.ops[kk] = ek : (ik === fk.DELETE || ik === fk.ADD && ek === fk.DELETE_AND_ADD) && (this.ops[kk] = fk.DELETE_AND_ADD), kk < 32 ? this.dirtyLow |= 1 << kk : this.dirtyHigh |= 1 << kk - 32
      }
      recordDelete(kk, ek) {
        this.ops[kk] = ek, kk < 32 ? this.dirtyLow |= 1 << kk : this.dirtyHigh |= 1 << kk - 32
      }
      recordRaw(kk, ek) {
        this.record(kk, ek)
      }
      operationAt(kk) {
        const ek = this.ops[kk];
        return 0 === ek ? void 0 : ek
      }
      setOperationAt(kk, ek) {
        this.ops[kk] = ek
      }
      forEach(kk) {
        this.forEachWithCtx(kk, Ge)
      }
      forEachWithCtx(kk, ek) {
        let ik = this.dirtyLow,
          Dk = this.dirtyHigh;
        const fk = this.ops;
        for (; 0 !== ik;) {
          const Dk = ik & -ik,
            Sk = 31 - Math.clz32(Dk);
          ik ^= Dk, ek(kk, Sk, fk[Sk])
        }
        for (; 0 !== Dk;) {
          const ik = Dk & -Dk,
            Sk = 31 - Math.clz32(ik) + 32;
          Dk ^= ik, ek(kk, Sk, fk[Sk])
        }
      }
      size() {
        return Je(this.dirtyLow) + Je(this.dirtyHigh)
      }
      has() {
        return 0 !== (this.dirtyLow | this.dirtyHigh)
      }
      reset() {
        this.dirtyLow = 0, this.dirtyHigh = 0, this.ops.fill(0)
      }
    }
    class Re {
      bH = new Map;
      pureOps = [];
      record(kk, ek) {
        const ik = this.bH.get(kk);
        void 0 === ik ? this.bH.set(kk, ek) : (ik === fk.DELETE || ik === fk.ADD && ek === fk.DELETE_AND_ADD) && this.bH.set(kk, fk.DELETE_AND_ADD)
      }
      recordDelete(kk, ek) {
        this.bH.set(kk, ek)
      }
      recordRaw(kk, ek) {
        this.bH.set(kk, ek)
      }
      recordPure(kk) {
        this.pureOps.push([this.bH.size, kk])
      }
      operationAt(kk) {
        return this.bH.get(kk)
      }
      setOperationAt(kk, ek) {
        this.bH.has(kk) && this.bH.set(kk, ek)
      }
      forEach(kk) {
        this.forEachWithCtx(kk, Ge)
      }
      forEachWithCtx(kk, ek) {
        const ik = this.pureOps;
        if (ik.length > 0) {
          let Dk = 0,
            fk = 0;
          for (const [Sk, bk] of this.bH) {
            for (; Dk < ik.length && ik[Dk][0] <= fk;) {
              const fk = ik[Dk++][1];
              ek(kk, -fk, fk)
            }
            ek(kk, Sk, bk), fk++
          }
          for (; Dk < ik.length;) {
            const fk = ik[Dk++][1];
            ek(kk, -fk, fk)
          }
        } else
          for (const [Dk, fk] of this.bH) ek(kk, Dk, fk)
      }
      size() {
        return this.bH.size + this.pureOps.length
      }
      has() {
        return this.bH.size > 0 || this.pureOps.length > 0
      }
      reset() {
        this.bH.clear(), this.pureOps.length = 0
      }
      shift(kk) {
        const ek = new Map;
        for (const [ik, Dk] of this.bH) ek.set(ik + kk, Dk);
        this.bH = ek
      }
    }

    function Je(kk) {
      return 16843009 * ((kk = (858993459 & (kk -= kk >>> 1 & 1431655765)) + (kk >>> 2 & 858993459)) + (kk >>> 4) & 252645135) >>> 24
    }

    function ki(kk) {
      if (void 0 === kk) return 0;
      let ek = 0;
      for (let ik = 0, Dk = kk.length; ik < Dk; ik++) {
        const Dk = kk[ik];
        Dk < 32 && (ek |= 1 << Dk)
      }
      return ek
    }

    function ei(kk) {
      const ek = kk.constructor;
      if (Object.prototype.hasOwnProperty.call(ek, jk)) return ek[jk];
      const ik = ek[Symbol.metadata],
        Dk = ge.isValidInstance(kk),
        fk = (ik?.[Fk]?.length ?? 0) > 0,
        Sk = function(kk) {
          const ek = [],
            ik = [],
            Dk = [],
            fk = [],
            Sk = kk?.[dk];
          if (void 0 === Sk) return {
            names: ek,
            types: ik,
            tags: Dk,
            encoders: fk
          };
          const bk = kk[sk];
          for (let rk = 0; rk <= Sk; rk++) {
            const Sk = kk[rk];
            void 0 !== Sk ? (ek[rk] = Sk.name, ik[rk] = Sk.type, Dk[rk] = Sk.tag, fk[rk] = bk?.[rk]) : (ek[rk] = void 0, ik[rk] = void 0, Dk[rk] = void 0, fk[rk] = void 0)
          }
          return {
            names: ek,
            types: ik,
            tags: Dk,
            encoders: fk
          }
        }(ik),
        bk = Dk && !fk ? void 0 : ek[Kk],
        rk = {
          encoder: ek[mk],
          filter: bk,
          metadata: ik,
          isSchema: Dk,
          filterBitmask: Dk ? ki(ik?.[Fk]) : 0,
          hasAnyFullStateOnly: (ik?.[Qk]?.length ?? 0) > 0,
          hasAnyUnreliable: (ik?.[qk]?.length ?? 0) > 0,
          hasAnyStream: (ik?.[vk]?.length ?? 0) > 0,
          hasAnyView: fk,
          fullStateOnlyBitmask: ki(ik?.[Qk]),
          unreliableBitmask: ki(ik?.[qk]),
          streamBitmask: ki(ik?.[vk]),
          names: Sk.names,
          types: Sk.types,
          tags: Sk.tags,
          encoders: Sk.encoders
        };
      return Object.defineProperty(ek, jk, {
        value: rk,
        enumerable: !1,
        writable: !0,
        configurable: !0
      }), rk
    }

    function ii(kk, ek) {
      if (void 0 !== kk.parentRef && ek(kk.parentRef, kk._parentIndex)) return !0;
      for (let ik = kk.extraParents; void 0 !== ik; ik = ik.next)
        if (ek(ik.ref, ik.index)) return !0;
      return !1
    }
    const Di = (kk, ek) => {
        kk.isFieldUnreliable(ek) ? kk.ensureUnreliableRecorder().record(ek, fk.ADD) : kk.record(ek, fk.ADD)
      },
      fi = (kk, ek) => kk(ek);

    function Si(kk, ek, ik) {
      const Dk = kk.refTarget;
      if (void 0 !== Dk[wk]) {
        if (kk.isPatchOnly) return;
        if (Array.isArray(Dk.items)) {
          const kk = Dk.items;
          for (let Dk = 0, fk = kk.length; Dk < fk; Dk++) void 0 !== kk[Dk] && ik(ek, Dk)
        } else if (void 0 !== Dk.journal)
          for (const [kk, fk] of Dk.journal.keyByIndex) Dk.$items.has(fk) && ik(ek, kk);
        else if (void 0 !== Dk.$items)
          for (const kk of Dk.$items.keys()) ik(ek, kk)
      } else {
        const fk = kk.metadata;
        if (!fk) return;
        const Sk = fk[dk] ?? -1,
          bk = fk[zk],
          rk = kk.encDescriptor.names;
        for (let kk = 0; kk <= Sk; kk++) {
          const fk = rk[kk];
          if (void 0 === fk) continue;
          if (bk && bk.includes(kk)) continue;
          const Sk = Dk[fk];
          void 0 !== Sk && null !== Sk && ik(ek, kk)
        }
      }
    }

    function bi(kk, ek, ik, Dk) {
      ! function(kk, ek, ik) {
        if (!ek) return;
        const Dk = ek[Hk],
          fk = !Dk._isSchema;
        let Sk;
        fk ? (ek = Dk.parent, ik = Dk.parentIndex, Sk = ek?.[Hk].metadata) : Sk = Dk.metadata;
        const bk = (Sk?.[Ik]?.includes(ik) ? di : 0) | (Sk?.[Qk]?.includes(ik) ? Vi : 0),
          rk = Dk.flags & qi | bk,
          Pk = kk.flags;
        kk.flags = Pk | rk;
        rk & ~Pk & Vi && (kk.reset(), kk.unreliableRecorder?.reset());
        const mk = kk.root?.types;
        if (!mk?.hasFilters) return;
        const Mk = Sk?.[Fk]?.includes(ik) ?? !1,
          Kk = Sk?.[vk]?.includes(ik) ?? !1,
          xk = Dk.isFiltered || Mk || Kk;
        if (kk.isFiltered = xk, Kk && !fk) {
          kk.isStreamCollection = !0;
          const ek = Ve(kk.ref);
          if (void 0 === ek.priority) {
            const kk = ge.getStreamPriority(Sk, ik);
            void 0 !== kk && (ek.priority = kk)
          }
          kk.root?.registerStream(kk.ref)
        }
        if (xk) {
          const ek = Pi(kk);
          kk.isVisibilitySharedWithParent = Dk.isFiltered && ek && !Kk && (!Mk || fk && Sk[ik].tag !== lD)
        }
      }(kk, ek, ik), kk.isFullStateOnly || (kk.has() && kk.root?.enqueueChangeTree(kk), kk.unreliableRecorder?.has() && kk.root?.enqueueUnreliable(kk), kk.has() || kk.unreliableRecorder?.has() || kk.root?.enqueueChangeTree(kk))
    }

    function ri(kk) {
      const ek = kk.pendingFilterRefresh;
      for (let ik = 0; ik < ek.length; ik++) {
        const kk = ek[ik];
        0 !== (kk.flags & ui) && mi(kk)
      }
      ek.length = 0
    }

    function Pi(kk) {
      return kk._isSchema || "string" !== typeof kk.refTarget[wk]
    }

    function mi(kk) {
      kk.flags &= ~ui;
      const ek = kk.root;
      if (void 0 === ek || void 0 === kk.parentRef) return;
      const ik = Pi(kk);
      let Dk = Ui(kk, kk.parentRef, kk._parentIndex, ik);
      for (let Sk = kk.extraParents; void 0 !== Sk && Dk !== ni; Sk = Sk.next) Dk |= Ui(kk, Sk.ref, Sk.index, ik);
      if (0 === Dk) return;
      kk.isVisibilitySharedWithParent = 0 !== (Dk & xi);
      const fk = 0 === (Dk & Ki);
      fk !== kk.isFiltered && (kk.isFiltered = fk, fk || kk.isFullStateOnly || (kk.forEachLiveWithCtx(kk, Di), kk.has() && ek.enqueueChangeTree(kk), kk.unreliableRecorder?.has() && ek.enqueueUnreliable(kk)), kk.forEachChildWithCtx(kk, Hi))
    }
    const Mi = 1,
      Ki = 2,
      xi = 4,
      ni = Mi | Ki | xi;

    function Ui(kk, ek, ik, Dk) {
      const fk = ek[Hk];
      if (fk.root !== kk.root || ! function(kk, ek, ik) {
          const Dk = ek.refTarget;
          if (ek.isArray) {
            const ek = Dk.items,
              fk = ek[ik];
            if (void 0 !== fk && fk[Hk] === kk) return !0;
            for (let ik = 0, Dk = ek.length; ik < Dk; ik++) {
              const Dk = ek[ik];
              if (void 0 !== Dk && Dk[Hk] === kk) return !0
            }
            return !1
          }
          const fk = ek.getValue(ik);
          return void 0 !== fk && fk[Hk] === kk
        }(kk, fk, ik)) return 0;
      fk.flags & ui && mi(fk);
      let Sk = Mi;
      if (fk._isSchema) {
        void 0 !== fk.encDescriptor.tags[ik] || fk.isFieldStream(ik) || (fk.isFiltered ? Dk && (Sk |= xi) : Sk |= Ki)
      } else if (fk.isFiltered) {
        if (Dk && !fk.isStreamCollection) {
          const kk = fk.parent?.[Hk];
          (kk?._isSchema ? kk.encDescriptor.tags[fk.parentIndex] : void 0) !== lD && (Sk |= xi)
        }
      } else Sk |= Ki;
      return Sk
    }
    const Hi = (kk, ek, ik) => {
      mi(ek)
    };

    function wi(kk, ek, ik, Dk) {
      if (kk.addParent(ek, Dk), !ik) return;
      const fk = ik.add(kk);
      ik !== kk.root && (kk.root = ik, bi(kk, ek, Dk));
      const Sk = ek?.[Hk];
      if (void 0 !== Sk && void 0 !== Sk.subscribedViews && void 0 !== ek[wk] && function(kk, ek, ik, Dk) {
          const fk = kk.subscribedViews;
          if (void 0 === fk) return;
          const Sk = kk.isStreamCollection,
            bk = Sk ? kk.ref : void 0,
            rk = Sk ? void 0 : ik[Hk];
          for (let Pk = 0, mk = fk.length; Pk < mk; Pk++) {
            let kk = fk[Pk];
            for (; 0 !== kk;) {
              const ik = kk & -kk;
              kk ^= ik;
              const mk = 32 * Pk + (31 - Math.clz32(ik)),
                Mk = Dk.activeViews.get(mk),
                Kk = Mk?.deref();
              void 0 !== Kk ? Sk ? ze(bk, mk, ek) : void 0 !== rk && Kk.markVisible(rk) : fk[Pk] &= ~ik
            }
          }
        }(Sk, Dk, kk.ref, ik), fk) {
        let ek = Li[Ci];
        void 0 === ek && (ek = {
          parentRef: void 0,
          root: void 0
        }, Li[Ci] = ek), ek.parentRef = kk.ref, ek.root = ik, Ci++, yi(kk, ek, Ai), Ci--
      }
    }

    function li(kk, ek, ik) {
      kk(ek, ik)
    }

    function yi(kk, ek, ik) {
      const Dk = kk.refTarget;
      if (Dk[wk]) {
        if ("string" !== typeof Dk[wk]) {
          const kk = Dk.items;
          if (void 0 !== kk)
            for (let Dk = 0, fk = kk.length; Dk < fk; Dk++) {
              const fk = kk[Dk];
              fk && ik(ek, fk[Hk], Dk)
            } else {
              const kk = Dk.$items,
                fk = Dk._collectionIndexes;
              for (const Dk of kk.keys()) {
                const Sk = kk.get(Dk);
                Sk && ik(ek, Sk[Hk], fk?.[Dk] ?? Dk)
              }
            }
        }
      } else {
        const fk = kk.metadata,
          Sk = fk?.[Vk];
        if (!Sk) return;
        const bk = kk.encDescriptor.names;
        for (let kk = 0, rk = Sk.length; kk < rk; kk++) {
          const fk = Sk[kk],
            rk = Dk[bk[fk]];
          rk && ik(ek, rk[Hk], fk)
        }
      }
    }

    function Yi(kk, ek, ik) {
      ek.root !== kk ? ek.setRoot(kk) : kk.add(ek)
    }
    const Li = [];
    let Ci = 0;

    function Ai(kk, ek, ik) {
      if (ek.root === kk.root) return kk.root.add(ek), void kk.root.moveNextToParent(ek);
      ek.setParent(kk.parentRef, kk.root, ik)
    }

    function ji(kk, ek, ik) {
      const Dk = (3 & ik) << 3;
      return ik < 4 ? kk >>> Dk & 255 : ek >>> Dk & 255
    }
    const si = (kk, ek, ik) => kk(ek, ik);
    const di = 16,
      Vi = 32,
      Fi = 128,
      ui = 256,
      qi = di | Vi;
    class Ii {
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
        return 0 !== (this.flags & di)
      }
      set isPatchOnly(kk) {
        this.flags = kk ? this.flags | di : this.flags & ~di
      }
      get isFullStateOnly() {
        return 0 !== (this.flags & Vi)
      }
      set isFullStateOnly(kk) {
        this.flags = kk ? this.flags | Vi : this.flags & ~Vi
      }
      get isStreamCollection() {
        return 0 !== (64 & this.flags)
      }
      set isStreamCollection(kk) {
        this.flags = kk ? 64 | this.flags : -65 & this.flags
      }
      get needsRestage() {
        return 0 !== (this.flags & Fi)
      }
      set needsRestage(kk) {
        this.flags = kk ? this.flags | Fi : -129 & this.flags
      }
      get hasFilteredFields() {
        return this.isFiltered || this.encDescriptor.hasAnyView
      }
      ensureUnreliableRecorder() {
        return void 0 === this.unreliableRecorder && (this.unreliableRecorder = this._isSchema ? new Ne(this.metadata?.[dk] ?? 0) : new Re), this.unreliableRecorder
      }
      isFieldUnreliable(kk) {
        const ek = this.encDescriptor;
        return !!ek.hasAnyUnreliable && (kk < 32 ? 0 !== (ek.unreliableBitmask & 1 << kk) : ge.hasUnreliableAtIndex(this.metadata, kk))
      }
      isFieldFullStateOnly(kk) {
        if (this.isFullStateOnly) return !0;
        const ek = this.encDescriptor;
        return !!ek.hasAnyFullStateOnly && (kk < 32 ? 0 !== (ek.fullStateOnlyBitmask & 1 << kk) : ge.hasFullStateOnlyAtIndex(this.metadata, kk))
      }
      isFieldStream(kk) {
        const ek = this.encDescriptor;
        return !!ek.hasAnyStream && (kk < 32 ? 0 !== (ek.streamBitmask & 1 << kk) : ge.hasStreamAtIndex(this.metadata, kk))
      }
      constructor(kk) {
        let ek = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : kk;
        this.ref = kk, this.refTarget = ek;
        const ik = ei(kk);
        this.encDescriptor = ik, this.metadata = ik.metadata;
        const Dk = ik.isSchema;
        if (this._isSchema = Dk, this.ops = void 0, this.collDirty = void 0, this.collPureOps = void 0, Dk) {
          const kk = this.metadata?.[dk] ?? 0;
          kk > 7 && (this.ops = new Uint8Array(kk + 1))
        } else this.collDirty = new Map
      }
      _opAt(kk) {
        const ek = this.ops;
        if (void 0 !== ek) return ek[kk];
        const ik = (3 & kk) << 3;
        return kk < 4 ? this.opsLow >>> ik & 255 : this.opsHigh >>> ik & 255
      }
      _opPut(kk, ek) {
        const ik = this.ops;
        if (void 0 !== ik) return void(ik[kk] = ek);
        const Dk = (3 & kk) << 3,
          fk = ~(255 << Dk);
        kk < 4 ? this.opsLow = this.opsLow & fk | ek << Dk : this.opsHigh = this.opsHigh & fk | ek << Dk
      }
      _markDirty(kk) {
        kk < 32 ? this.dirtyLow |= 1 << kk : this.dirtyHigh |= 1 << kk - 32
      }
      record(kk, ek) {
        if (this._isSchema) {
          const ik = this._opAt(kk);
          0 === ik ? this._opPut(kk, ek) : (ik === fk.DELETE || ik === fk.ADD && ek === fk.DELETE_AND_ADD) && this._opPut(kk, fk.DELETE_AND_ADD), this._markDirty(kk)
        } else {
          const ik = this.collDirty,
            Dk = ik.get(kk);
          let Sk;
          Sk = void 0 === Dk ? ek : Dk === fk.DELETE || Dk === fk.ADD && ek === fk.DELETE_AND_ADD ? fk.DELETE_AND_ADD : Dk, ik.set(kk, Sk)
        }
      }
      recordDelete(kk, ek) {
        this._isSchema ? (this._opPut(kk, ek), this._markDirty(kk)) : this.collDirty.set(kk, ek)
      }
      recordRaw(kk, ek) {
        this._isSchema ? (this._opPut(kk, ek), this._markDirty(kk)) : this.collDirty.set(kk, ek)
      }
      recordPure(kk) {
        if (this._isSchema) throw new Error("ChangeTree (Schema): pure operations are not supported");
        (this.collPureOps ??= []).push([this.collDirty.size, kk])
      }
      operationAt(kk) {
        if (this._isSchema) {
          const ek = this._opAt(kk);
          return 0 === ek ? void 0 : ek
        }
        return this.collDirty.get(kk)
      }
      setOperationAt(kk, ek) {
        if (this._isSchema) this._opPut(kk, ek);
        else {
          const ik = this.collDirty;
          ik.has(kk) && ik.set(kk, ek)
        }
      }
      forEach(kk) {
        this.forEachWithCtx(kk, si)
      }
      forEachWithCtx(kk, ek) {
        if (this._isSchema) {
          let ik = this.dirtyLow,
            Dk = this.dirtyHigh;
          const fk = this.ops;
          if (void 0 !== fk) {
            for (; 0 !== ik;) {
              const Dk = ik & -ik,
                Sk = 31 - Math.clz32(Dk);
              ik ^= Dk, ek(kk, Sk, fk[Sk])
            }
            for (; 0 !== Dk;) {
              const ik = Dk & -Dk,
                Sk = 31 - Math.clz32(ik) + 32;
              Dk ^= ik, ek(kk, Sk, fk[Sk])
            }
          } else {
            const Dk = this.opsLow,
              fk = this.opsHigh;
            for (; 0 !== ik;) {
              const Sk = ik & -ik,
                bk = 31 - Math.clz32(Sk);
              ik ^= Sk, ek(kk, bk, ji(Dk, fk, bk))
            }
          }
          return
        }
        const ik = this.collDirty,
          Dk = this.collPureOps;
        if (void 0 !== Dk && Dk.length > 0) {
          let fk = 0,
            Sk = 0;
          for (const [bk, rk] of ik) {
            for (; fk < Dk.length && Dk[fk][0] <= Sk;) {
              const ik = Dk[fk++][1];
              ek(kk, -ik, ik)
            }
            ek(kk, bk, rk), Sk++
          }
          for (; fk < Dk.length;) {
            const ik = Dk[fk++][1];
            ek(kk, -ik, ik)
          }
        } else
          for (const [fk, Sk] of ik) ek(kk, fk, Sk)
      }
      size() {
        return this._isSchema ? Je(this.dirtyLow) + Je(this.dirtyHigh) : this.collDirty.size + (this.collPureOps?.length ?? 0)
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
      insertAt(kk, ek) {
        if (this._isSchema) throw new Error("ChangeTree (Schema): insertAt is not supported");
        const ik = this.collDirty,
          Dk = new Map,
          Sk = !this.paused && !this.isFullStateOnly;
        if (kk > 0)
          for (const [fk, bk] of ik) fk < kk && Dk.set(fk, bk);
        if (Sk)
          for (let bk = 0; bk < ek; bk++) Dk.set(kk + bk, fk.ADD);
        for (const [fk, bk] of ik) fk >= kk && Dk.set(fk + ek, bk);
        this.collDirty = Dk, Sk && this.root?.enqueueChangeTree(this)
      }
      removeAt(kk, ek) {
        if (this._isSchema) throw new Error("ChangeTree (Schema): removeAt is not supported");
        const ik = this.collDirty,
          Dk = kk + ek;
        let fk = !1;
        for (const bk of ik.keys())
          if (bk >= Dk) {
            fk = !0;
            break
          } if (!fk) {
          for (let ek = kk; ek < Dk; ek++) ik.delete(ek);
          return
        }
        const Sk = new Map;
        for (const [bk, rk] of ik) bk < kk ? Sk.set(bk, rk) : bk >= Dk && Sk.set(bk - ek, rk);
        this.collDirty = Sk
      }
      unshift(kk) {
        this.insertAt(0, kk)
      }
      setRoot(kk) {
        ! function(kk, ek) {
          kk.root = ek;
          const ik = ek.add(kk);
          bi(kk, kk.parent, kk.parentIndex), ik && yi(kk, ek, Yi)
        }(this, kk)
      }
      setParent(kk, ek, ik) {
        wi(this, kk, ek, ik)
      }
      forEachChild(kk) {
        yi(this, kk, li)
      }
      forEachChildWithCtx(kk, ek) {
        yi(this, kk, ek)
      }
      forEachLive(kk) {
        Si(this, kk, fi)
      }
      forEachLiveWithCtx(kk, ek) {
        Si(this, kk, ek)
      }
      operation(kk) {
        this.paused || this.isFullStateOnly || (this.recordPure(kk), this.root?.enqueueChangeTree(this))
      }
      _routeAndRecord(kk, ek, ik) {
        if (!this.paused && !this.isFieldFullStateOnly(kk)) {
          if (this.isFieldUnreliable(kk) && !this.isNew) {
            const Dk = this.ensureUnreliableRecorder();
            return ik ? Dk.recordRaw(kk, ek) : Dk.record(kk, ek), void this.root?.enqueueUnreliable(this)
          }
          ik ? this.recordRaw(kk, ek) : this.record(kk, ek), this.root?.enqueueChangeTree(this)
        }
      }
      change(kk) {
        let ek = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : fk.ADD;
        this._routeAndRecord(kk, ek, !1)
      }
      indexedOperation(kk, ek) {
        this._routeAndRecord(kk, ek, !0)
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
        const ek = this.paused;
        this.paused = !0;
        try {
          return kk()
        } finally {
          this.paused = ek
        }
      }
      markDirty(kk) {
        let ek = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : fk.ADD;
        const ik = this.paused;
        this.paused = !1;
        try {
          this.change(kk, ek)
        } finally {
          this.paused = ik
        }
      }
      getValue(kk) {
        let ek = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return this.refTarget[xk](kk, ek)
      }
      delete(kk, ek) {
        if (void 0 === kk) {
          try {
            throw new Error(`@colyseus/schema ${this.ref.constructor.name}: trying to delete non-existing index '${kk}'`)
          } catch (mf) {
            console.warn(mf)
          }
          return
        }
        if (this.paused || this.isFieldFullStateOnly(kk)) return this.getValue(kk);
        const ik = this.isFieldUnreliable(kk) && !this.isNew;
        ik ? this.ensureUnreliableRecorder().recordDelete(kk, ek ?? fk.DELETE) : this.recordDelete(kk, ek ?? fk.DELETE);
        const Dk = this.getValue(kk);
        return Dk && Dk[Hk] && this.root?.remove(Dk[Hk]), ik ? this.root?.enqueueUnreliable(this) : this.root?.enqueueChangeTree(this), Dk
      }
      endEncode() {
        this.reset(), this.changesNode = void 0, this._isSchema || this.refTarget[pk]?.(), this.isNew = !1
      }
      endEncodeUnreliable() {
        this.unreliableRecorder?.reset(), this.unreliableChangesNode = void 0, this._isSchema || this.refTarget[pk]?.()
      }
      discard() {
        this._isSchema || this.refTarget[pk]?.(), this.reset(), this.unreliableRecorder?.reset()
      }
      discardAll() {
        const kk = kk => {
          if (kk < 0) return;
          const ek = this.getValue(kk);
          ek && ek[Hk] && ek[Hk].discardAll()
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
      addParent(kk, ek) {
        ! function(kk, ek, ik) {
          if (kk.parentRef) {
            if (kk.parentRef[Hk] === ek[Hk]) return void(kk._parentIndex = ik);
            if (ii(kk, ((kk, ik) => kk[Hk] === ek[Hk]))) return void(kk._parentIndex = ik)
          }
          void 0 === kk.parentRef ? (kk.parentRef = ek, kk._parentIndex = ik) : (kk.extraParents = {
            ref: kk.parentRef,
            index: kk._parentIndex,
            next: kk.extraParents
          }, kk.parentRef = ek, kk._parentIndex = ik)
        }(this, kk, ek)
      }
      setParentIndex(kk, ek) {
        ! function(kk, ek, ik) {
          if (void 0 !== kk.extraParents)
            if (kk.parentRef[Hk] !== ek[Hk]) {
              for (let Dk = kk.extraParents; void 0 !== Dk; Dk = Dk.next)
                if (Dk.ref[Hk] === ek[Hk]) return void(Dk.index = ik)
            } else kk._parentIndex = ik;
          else kk._parentIndex = ik
        }(this, kk, ek)
      }
      removeParent() {
        return function(kk, ek) {
          if (kk.parentRef && kk.parentRef[Hk] === ek[Hk]) return kk.extraParents ? (kk.parentRef = kk.extraParents.ref, kk._parentIndex = kk.extraParents.index, kk.extraParents = kk.extraParents.next) : (kk.parentRef = void 0, kk._parentIndex = void 0), !0;
          let ik = kk.extraParents,
            Dk = null;
          for (; ik;) {
            if (ik.ref[Hk] === ek[Hk]) return Dk ? Dk.next = ik.next : kk.extraParents = ik.next, !0;
            Dk = ik, ik = ik.next
          }
          return void 0 === kk.parentRef
        }(this, arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.parent)
      }
      findParent(kk) {
        return function(kk, ek) {
          if (void 0 !== kk.parentRef && ek(kk.parentRef, kk._parentIndex)) return {
            ref: kk.parentRef,
            index: kk._parentIndex
          };
          for (let ik = kk.extraParents; void 0 !== ik; ik = ik.next)
            if (ek(ik.ref, ik.index)) return {
              ref: ik.ref,
              index: ik.index
            }
        }(this, kk)
      }
      hasParent(kk) {
        return ii(this, kk)
      }
      indexInParent(kk) {
        return function(kk, ek) {
          if (kk.parentRef && kk.parentRef[Hk] === ek[Hk]) return kk._parentIndex;
          for (let ik = kk.extraParents; void 0 !== ik; ik = ik.next)
            if (ik.ref[Hk] === ek[Hk]) return ik.index
        }(this, kk)
      }
      getAllParents() {
        return function(kk) {
          const ek = [];
          kk.parentRef && ek.push({
            ref: kk.parentRef,
            index: kk._parentIndex
          });
          let ik = kk.extraParents;
          for (; ik;) ek.push({
            ref: ik.ref,
            index: ik.index
          }), ik = ik.next;
          return ek
        }(this)
      }
    }
    class zi {
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
        const ek = this.ref;
        if (ek[wk]) {
          if ("string" !== typeof ek[wk])
            for (const [ik, Dk] of ek.entries()) Dk && kk(Dk[Hk], ek._collectionIndexes?.[ik] ?? ik);
          return
        }
        const ik = ek.constructor,
          Dk = ik?.[Symbol.metadata];
        if (!Dk) return;
        const fk = Dk[Vk] ?? [];
        for (let Sk = 0; Sk < fk.length; Sk++) {
          const ik = fk[Sk],
            bk = ek[Dk[ik].name];
          bk && kk(bk[Hk], ik)
        }
      }
      forEachChildWithCtx(kk, ek) {
        this.forEachChild(((ik, Dk) => ek(kk, ik, Dk)))
      }
      forEachLive() {}
      forEachLiveWithCtx() {}
      forEach() {}
    }

    function Qi(kk) {
      let ek = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : kk;
      var ik;
      Object.defineProperty(kk, Hk, {
        value: (ik = ek, new zi(ik)),
        enumerable: !1,
        writable: !0
      })
    }

    function vi(kk, ek, ik, Dk, Sk, bk, Pk) {
      void 0 !== Pk ? Pk(ek, Dk, bk) : "string" === typeof ik ? ie[ik]?.(ek, Dk, bk) : null != ik[Symbol.metadata] ? (ie.number(ek, Dk[rk], bk), (Sk & fk.ADD) === fk.ADD && kk.tryEncodeTypeId(ek, ik, Dk.constructor, bk)) : ie.number(ek, Dk[rk], bk)
    }
    const Ei = function(kk, ek, ik, Dk, Sk, bk, rk, Pk) {
        if (ek[bk.offset++] = 255 & (Dk | Sk), Sk === fk.DELETE) return;
        const mk = ik.encDescriptor,
          Mk = ik.ref,
          Kk = Mk[Lk][Dk] ?? Mk[mk.names[Dk]];
        vi(kk, ek, mk.types[Dk], Kk, Sk, bk, mk.encoders[Dk])
      },
      ai = function(kk, ek, ik, Dk, Sk, bk) {
        if (ek[bk.offset++] = 255 & Sk, ie.number(ek, Dk, bk), Sk === fk.DELETE) return;
        const rk = ik.ref;
        if ((Sk & fk.ADD) === fk.ADD) {
          const kk = rk.$indexes.get(Dk);
          ie.string(ek, kk, bk)
        }
        vi(kk, ek, rk[wk], rk[xk](Dk), Sk, bk)
      },
      Wi = function(kk, ek, ik, Dk, Sk, bk) {
        if (ek[bk.offset++] = 255 & Sk, ie.number(ek, Dk, bk), Sk === fk.DELETE) return;
        const rk = ik.ref;
        vi(kk, ek, rk[wk], rk[xk](Dk), Sk, bk)
      },
      ti = function(kk, ek, ik, Dk, Sk, bk) {
        const rk = ik.ref;
        (Sk & fk.ADD) === fk.ADD && "function" === typeof rk.set ? ai(kk, ek, ik, Dk, Sk, bk) : Wi(kk, ek, ik, Dk, Sk, bk)
      },
      Xi = function(kk, ek, ik, Dk, Sk, bk, Pk, mk) {
        const Mk = ik.refTarget,
          Kk = Mk[wk],
          nk = "string" !== typeof Kk;
        let Uk;
        if (mk && ik.isFiltered && nk) {
          const kk = Mk.tmpItems[Dk];
          if (!kk) return;
          if (Uk = kk[rk], Sk === fk.DELETE) Sk = fk.DELETE_BY_REFID;
          else if ((Sk & fk.ADD) === fk.ADD) Sk = fk.ADD_BY_REFID;
          else if ((Sk & fk.MOVE) === fk.MOVE) return
        } else if (Sk === fk.DELETE && nk) {
          const kk = Mk.tmpItems[Dk];
          if (!kk) return;
          Uk = kk[rk], Sk = fk.DELETE_BY_REFID
        } else Uk = Dk;
        if (ek[bk.offset++] = 255 & Sk, ie.number(ek, Uk, bk), Sk === fk.DELETE || Sk === fk.DELETE_BY_REFID) return;
        vi(kk, ek, Kk, Mk[xk](Dk, Pk), Sk, bk)
      };

    function Bi(kk, ek, ik, Dk, Sk, bk, Pk) {
      const mk = kk.resyncVisited;
      let Mk = mk.get(kk.currentRefId);
      if (void 0 === Mk && mk.set(kk.currentRefId, Mk = new Set), Mk.add(Dk), void 0 !== Sk && ik === fk.ADD && Sk !== bk) {
        const ik = Sk[rk];
        void 0 !== ik && (kk.root.removeRef(ik), Pk?.push({
          ref: ek,
          refId: kk.currentRefId,
          op: fk.DELETE,
          dynamicIndex: Dk,
          value: void 0,
          previousValue: Sk
        }))
      }
    }

    function ci(kk, ek, ik, Dk) {
      const fk = ek[rk];
      if (void 0 === fk || ik.has(fk)) return;
      ik.add(fk);
      const Sk = ek.constructor[Symbol.metadata],
        bk = Sk?.[Vk];
      if (void 0 === bk) return;
      const Pk = Sk[Ik];
      for (let rk = 0; rk < bk.length; rk++) {
        const fk = bk[rk];
        if (void 0 !== Pk && Pk.includes(fk)) continue;
        const mk = Sk[fk],
          Mk = ek[mk.name];
        Mk && (ID.is(mk.type) ? ci(kk, Mk, ik, Dk) : Ti(kk, Mk, ik, Dk))
      }
    }

    function Ti(kk, ek, ik, Dk) {
      const Sk = ek[lk] ?? ek,
        bk = Sk[rk];
      if (void 0 === bk || ik.has(bk)) return;
      ik.add(bk);
      const Pk = kk.resyncVisited.get(bk);
      if (void 0 === Pk) return;
      const mk = kk.root;
      Sk[Uk](Pk, ((kk, ik) => {
        Dk?.push({
          ref: ek,
          refId: bk,
          op: fk.DELETE,
          dynamicIndex: ik,
          value: void 0,
          previousValue: kk
        });
        const Sk = kk?.[rk];
        void 0 !== Sk && mk.removeRef(Sk)
      }), (ek => {
        ID.isSchema(ek) && ci(kk, ek, ik, Dk)
      }))
    }
    const oi = 1,
      Zi = 2,
      Oi = 3,
      gi = 4,
      Gi = 5;

    function Ni(kk, ek, ik, Dk, Sk, bk, Pk, mk, Mk) {
      const Kk = kk.root;
      let xk;
      if ((ek & fk.DELETE) === fk.DELETE) {
        const kk = Sk?.[rk];
        void 0 !== kk && Kk.removeRef(kk), ek !== fk.DELETE_AND_ADD && ik[nk](Dk), xk = void 0
      }
      if (ek === fk.DELETE);
      else if ("string" === typeof bk) xk = Ye[bk](Pk, mk);
      else if (he(bk)) xk = function(kk, ek, ik) {
        return We(kk, (0, Ye[kk.wire])(ek, ik))
      }(bk.quantized, Pk, mk);
      else if (ID.is(bk)) {
        const ik = Ye.number(Pk, mk);
        if (xk = Kk.refs.get(ik), (ek & fk.ADD) === fk.ADD) {
          const Dk = kk.getInstanceType(Pk, mk, bk);
          xk || (xk = kk.createInstanceOfType(Dk)), Kk.addRef(ik, xk, xk !== Sk || ek === fk.DELETE_AND_ADD && xk === Sk)
        }
      } else {
        const ik = (Uk = Object.keys(bk)[0], Le[Uk]),
          Dk = Ye.number(Pk, mk);
        null !== kk.resyncVisited && function(kk, ek) {
          const ik = kk.resyncVisited;
          ik.has(ek) || ik.set(ek, new Set)
        }(kk, Dk);
        const nk = Kk.refs.has(Dk) ? Sk || Kk.refs.get(Dk) : ik.constructor.initializeForDecoder();
        if (xk = nk.clone(!0), xk[wk] = Object.values(bk)[0], Sk) {
          let kk = Sk[rk];
          if (void 0 !== kk && Dk !== kk) {
            (ek & fk.DELETE) !== fk.DELETE && Kk.removeRef(kk);
            const ik = Sk.entries();
            let Dk;
            for (;
              (Dk = ik.next()) && !Dk.done;) {
              const [ek, ik] = Dk.value;
              "object" === typeof ik && (kk = ik[rk]), Mk?.push({
                ref: Sk,
                refId: kk,
                op: fk.DELETE,
                field: ek,
                value: void 0,
                previousValue: ik
              })
            }
          }
        }
        Kk.addRef(Dk, xk, nk !== Sk || ek === fk.DELETE_AND_ADD && nk === Sk)
      }
      var Uk;
      return xk
    }
    const Ri = function(kk, ek, ik, Dk, fk) {
        const Sk = ek[ik.offset++],
          bk = Dk.constructor[Symbol.metadata],
          rk = Sk >> 6 << 6,
          Pk = Sk % (rk || 255),
          mk = bk[Pk];
        if (void 0 === mk) return console.warn("@colyseus/schema: field not defined at", {
          index: Pk,
          ref: Dk.constructor.name,
          metadata: bk
        }), -1;
        const Mk = !0 === mk.deprecated,
          Kk = Mk ? void 0 : Dk[xk](Pk),
          nk = Ni(kk, rk, Dk, Pk, Kk, mk.type, ek, ik, fk);
        Mk || (null !== nk && void 0 !== nk && (Dk[mk.name] = nk), Kk !== nk && fk?.push({
          ref: Dk,
          refId: kk.currentRefId,
          op: rk,
          field: mk.name,
          value: nk,
          previousValue: Kk
        }))
      },
      Ji = function(kk, ek, ik, Dk, Sk) {
        const bk = Dk[lk] ?? Dk,
          rk = ek[ik.offset++];
        if (rk === fk.CLEAR) return kk.removeChildRefs(bk, Sk), void bk.clear();
        const Pk = Ye.number(ek, ik),
          mk = bk[wk],
          Mk = bk.constructor.COLLECTION_KIND;
        let Kk;
        (rk & fk.ADD) === fk.ADD ? Mk === oi ? (Kk = Ye.string(ek, ik), bk.setIndex(Pk, Kk)) : Kk = Pk : Kk = bk.getIndex(Pk);
        const nk = bk[xk](Pk),
          Uk = Ni(kk, rk, Dk, Pk, nk, mk, ek, ik, Sk);
        if (null !== kk.resyncVisited && Bi(kk, Dk, rk, Kk, nk, Uk, Sk), null !== Uk && void 0 !== Uk) switch (Mk) {
          case oi:
            bk.$items.set(Kk, Uk);
            break;
          case Zi:
            bk.$setAt(Pk, Uk, null !== kk.resyncVisited && rk === fk.ADD ? fk.REPLACE : rk);
            break;
          case Oi:
          case gi:
          case Gi:
            bk.$items.has(Pk) || (bk.$items.set(Pk, Uk), "number" === typeof bk.$refId && Pk >= bk.$refId && (bk.$refId = Pk + 1));
            break;
          default:
            console.warn(`@colyseus/schema: missing COLLECTION_KIND on ${bk.constructor?.name} \u2014 item at index ${Pk} was not stored.`)
        }
        nk !== Uk && Sk?.push({
          ref: Dk,
          refId: kk.currentRefId,
          op: rk,
          dynamicIndex: Kk,
          value: Uk,
          previousValue: nk
        })
      },
      kD = function(kk, ek, ik, Dk, Sk) {
        const bk = Dk[lk] ?? Dk;
        let rk, Pk = ek[ik.offset++];
        if (Pk === fk.CLEAR) return kk.removeChildRefs(bk, Sk), void bk.clear();
        if (Pk === fk.REVERSE) return void bk.items.reverse();
        if (Pk === fk.DELETE_BY_REFID) {
          const Pk = Ye.number(ek, ik),
            mk = kk.root.refs.get(Pk);
          if (void 0 === mk) return;
          if (kk.root.removeRef(Pk), rk = bk.findIndex((kk => kk === mk)), -1 === rk) return;
          return bk[nk](rk), void Sk?.push({
            ref: Dk,
            refId: kk.currentRefId,
            op: fk.DELETE,
            dynamicIndex: rk,
            value: void 0,
            previousValue: mk
          })
        }
        if (Pk === fk.ADD_BY_REFID) {
          const Dk = Ye.number(ek, ik),
            fk = kk.root.refs.get(Dk);
          fk && (rk = bk.findIndex((kk => kk === fk))), -1 !== rk && void 0 !== rk || (rk = bk.length)
        } else rk = Ye.number(ek, ik);
        const mk = bk[wk];
        let Mk = rk;
        const Kk = bk.items[rk],
          xk = Ni(kk, Pk, Dk, rk, Kk, mk, ek, ik, Sk);
        null !== kk.resyncVisited && Bi(kk, Dk, Pk, rk, Kk, xk, Sk), null !== xk && void 0 !== xk && xk !== Kk && bk.$setAt(rk, xk, null !== kk.resyncVisited && Pk === fk.ADD ? fk.REPLACE : Pk), Kk !== xk && Sk?.push({
          ref: Dk,
          refId: kk.currentRefId,
          op: Pk,
          dynamicIndex: Mk,
          value: xk,
          previousValue: Kk
        })
      };
    class eD extends Error {}

    function iD(kk, ek, ik, Dk) {
      if (!(kk instanceof ek)) throw new eD(`a '${ek.name}' was expected, but '${kk&&kk.constructor.name}' was provided in ${ik.constructor.name}#${Dk}`)
    }
    const DD = (kk, ek) => {
        const ik = kk.toString(),
          Dk = ek.toString();
        return ik < Dk ? -1 : ik > Dk ? 1 : 0
      },
      fD = {
        get: (kk, ek) => "symbol" === typeof ek || isNaN(ek) ? Reflect.get(kk, ek) : kk.items[ek],
        set: (kk, ek, ik) => {
          if ("symbol" !== typeof ek && !isNaN(ek)) {
            if (void 0 === ik || null === ik) kk.$deleteAt(ek);
            else {
              let Dk;
              if (ik[Hk]) {
                iD(ik, kk[wk], kk, ek);
                const Sk = kk.items[ek];
                kk.isMovingItems ? (Dk = kk.$wireIndex(Number(ek)), void 0 !== Sk ? ik[Hk].isNew ? kk[Hk].indexedOperation(Dk, fk.MOVE_AND_ADD) : (kk[Hk].getChange(Dk) & fk.DELETE) === fk.DELETE ? kk[Hk].indexedOperation(Dk, fk.DELETE_AND_MOVE) : kk[Hk].indexedOperation(Dk, fk.MOVE) : ik[Hk].isNew && kk[Hk].indexedOperation(Dk, fk.ADD), ik[Hk].setParent(kk, kk[Hk].root, Dk)) : Dk = kk.$changeAt(Number(ek), ik), void 0 !== Sk && Sk[Hk].root?.remove(Sk[Hk])
              } else Dk = kk.$changeAt(Number(ek), ik);
              kk.items[ek] = ik, void 0 !== Dk && (kk.tmpItems[Dk] = ik)
            }
            return !0
          }
          return Reflect.set(kk, ek, ik)
        },
        deleteProperty: (kk, ek) => ("number" === typeof ek ? kk.$deleteAt(ek) : delete kk[ek], !0),
        has: (kk, ek) => "symbol" === typeof ek || isNaN(Number(ek)) ? Reflect.has(kk, ek) : Reflect.has(kk.items, ek)
      };
    class SD {
      [Hk];
      [rk];
      [lk];
      [wk];
      items = [];
      tmpItems = [];
      deletedIndexes = [];
      isMovingItems = !1;
      _needsCompaction = !1;
      static[mk] = Xi;
      static[Mk] = kD;
      static COLLECTION_KIND = Zi;
      static[Kk](kk, ek, ik) {
        if (!ik) return !0;
        const Dk = kk[lk] ?? kk;
        return "string" === typeof Dk[wk] || ik.isChangeTreeVisible(Dk.tmpItems[ek]?.[Hk])
      }
      static is(kk) {
        return Array.isArray(kk) || void 0 !== kk.array
      }
      static from(kk) {
        return new SD(...Array.from(kk))
      }
      constructor() {
        this[wk] = void 0, this[lk] = this;
        const kk = new Proxy(this, fD);
        return Object.defineProperty(this, Hk, {
          value: new Ii(kk, this),
          enumerable: !1,
          writable: !0
        }), arguments.length > 0 && this.push(...arguments), kk
      }
      static initializeForDecoder() {
        const kk = Object.create(SD.prototype);
        kk.items = [], kk.isMovingItems = !1, kk._needsCompaction = !1, kk[wk] = void 0, kk[lk] = kk;
        const ek = new Proxy(kk, fD);
        return Qi(kk, ek), ek
      }
      set length(kk) {
        0 === kk ? this.clear() : kk < this.items.length ? this.splice(kk, this.length - kk) : console.warn("ArraySchema: can't set .length to a higher value than its length.")
      }
      get length() {
        return this.items.length
      }
      pauseTracking() {
        this[Hk].pause()
      }
      resumeTracking() {
        this[Hk].resume()
      }
      untracked(kk) {
        return this[Hk].untracked(kk)
      }
      get isTrackingPaused() {
        return this[Hk].paused
      }
      push() {
        const kk = this[lk],
          ek = kk.items,
          ik = kk.tmpItems,
          Dk = kk[Hk],
          Sk = kk[wk];
        let bk = ik.length;
        for (let rk = 0, Pk = arguments.length; rk < Pk; rk++, bk++) {
          const Pk = rk < 0 || arguments.length <= rk ? void 0 : arguments[rk];
          if (void 0 === Pk || null === Pk) return;
          "object" === typeof Pk && Sk && iD(Pk, Sk, kk, rk), Dk.indexedOperation(bk, fk.ADD), ek.push(Pk), ik.push(Pk), Pk[Hk]?.setParent(this, Dk.root, bk)
        }
        return bk
      }
      pop() {
        const kk = this[lk],
          ek = kk.tmpItems,
          ik = kk.deletedIndexes;
        let Dk = -1;
        for (let Sk = ek.length - 1; Sk >= 0; Sk--)
          if (!0 !== ik[Sk]) {
            Dk = Sk;
            break
          } if (Dk < 0) return;
        const fk = kk.$isUnsentAdd(Dk);
        return kk[Hk].delete(Dk), fk ? kk.$cancelAdd(Dk) : ik[Dk] = !0, kk.items.pop()
      }
      at(kk) {
        return kk < 0 && (kk += this.length), this.items[kk]
      }
      $wireIndex(kk) {
        const ek = this.deletedIndexes;
        if (0 === ek.length) return kk;
        const ik = this.tmpItems;
        let Dk = 0;
        for (let fk = 0; fk < ik.length; fk++)
          if (!0 !== ek[fk]) {
            if (Dk === kk) return fk;
            Dk++
          } return ik.length + (kk - Dk)
      }
      $isUnsentAdd(kk) {
        const ek = this[Hk];
        return 0 === (576 & ek.flags) && !ek.paused && "string" !== typeof this[wk] && ek.operationAt(kk) === fk.ADD
      }
      $cancelAdd(kk) {
        let ek = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        const ik = this[Hk],
          Dk = this.tmpItems[kk];
        this.tmpItems.splice(kk, 1), this.deletedIndexes.length > 0 && this.deletedIndexes.splice(kk, 1), ik.removeAt(kk, 1);
        const fk = Dk?.[Hk];
        void 0 !== fk && void 0 === fk.root && fk.removeParent(this), ek && this.$reindexChildren(kk)
      }
      $reindexChildren(kk, ek) {
        if (!this[Hk].hasFilteredFields) return;
        if ("string" === typeof this[wk]) return;
        const ik = this.tmpItems,
          Dk = ik.length;
        if (void 0 !== ek)
          for (; kk < Dk && ik[kk] === ek[kk];) kk++;
        for (let fk = kk; fk < Dk; fk++) ik[fk]?.[Hk]?.setParentIndex(this, fk)
      }
      $changeAt(kk, ek) {
        if (void 0 === ek || null === ek) return void console.error("ArraySchema items cannot be null nor undefined; Use `splice(index, 1)` instead.");
        if (this.items[kk] === ek) return;
        const ik = void 0 !== this.items[kk] ? "object" === typeof ek ? fk.DELETE_AND_ADD : fk.REPLACE : fk.ADD,
          Dk = this.$wireIndex(kk),
          Sk = this[Hk];
        return Sk.change(Dk, ik), ek[Hk]?.setParent(this, Sk.root, Dk), Dk
      }
      $deleteAt(kk, ek) {
        this[Hk].delete(this.$wireIndex(kk), ek)
      }
      $setAt(kk, ek, ik) {
        ik === fk.ADD && void 0 !== this.items[kk] ? this.items.splice(kk, 0, ek) : ik === fk.DELETE_AND_MOVE ? (this.items.splice(kk, 1), this.items[kk] = ek) : (kk > this.items.length && (this._needsCompaction = !0), this.items[kk] = ek)
      }
      clear() {
        const kk = this[lk];
        if (0 === kk.items.length) return;
        const ek = kk[Hk];
        ek.forEachChild(((kk, ik) => {
          ek.root?.remove(kk)
        })), ek.discard(), ek.operation(fk.CLEAR), kk.items.length = 0, kk.tmpItems.length = 0
      } [yk]() {
        const kk = this[lk] ?? this,
          ek = kk[Hk];
        if (ek.isStreamCollection) throw new Error("@colyseus/schema: cannot reset a streamed ArraySchema (pooling not supported).");
        const ik = kk.items;
        for (let Dk = 0; Dk < ik.length; Dk++) ik[Dk]?.[yk]?.();
        kk.items.length = 0, kk.tmpItems.length = 0, kk.deletedIndexes.length = 0, ek.recycle(), kk[rk] = void 0
      }
      concat() {
        return new SD(...this.items.concat(...arguments))
      }
      join(kk) {
        return this.items.join(kk)
      }
      reverse() {
        const kk = this[lk],
          ek = kk[Hk];
        if (ek.has() || kk.deletedIndexes.length > 0) {
          const ek = kk.items.slice().reverse();
          return this.clear(), this.push(...ek), this
        }
        return ek.operation(fk.REVERSE), kk.items.reverse(), kk.tmpItems.reverse(), kk.$reindexChildren(0), this
      }
      shift() {
        const kk = this[lk],
          ek = kk.items;
        if (0 === ek.length) return;
        const ik = kk[Hk],
          Dk = kk.deletedIndexes;
        let Sk = 0;
        for (; !0 === Dk[Sk];) Sk++;
        const bk = kk.$isUnsentAdd(Sk);
        return ik.delete(Sk, fk.DELETE), bk ? kk.$cancelAdd(Sk) : Dk[Sk] = !0, ek.shift()
      }
      slice(kk, ek) {
        const ik = new SD;
        return ik.push(...this.items.slice(kk, ek)), ik
      }
      sort() {
        let kk = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : DD;
        const ek = this[lk];
        ek.isMovingItems = !0;
        const ik = ek[Hk];
        return ek.items.sort(kk).forEach(((kk, ek) => ik.change(ek, fk.REPLACE))), ek.tmpItems.sort(kk), ek.$reindexChildren(0), ek.isMovingItems = !1, this
      }
      splice(kk, ek) {
        const ik = this[lk],
          Dk = ik[Hk],
          Sk = ik.items,
          bk = ik.tmpItems,
          rk = ik.deletedIndexes,
          Pk = Sk.length,
          mk = bk.length;
        for (var Mk = arguments.length, Kk = new Array(Mk > 2 ? Mk - 2 : 0), xk = 2; xk < Mk; xk++) Kk[xk - 2] = arguments[xk];
        const nk = Kk.length,
          Uk = [];
        for (let fk = 0; fk < mk; fk++) !0 !== rk[fk] && Uk.push(fk);
        let wk;
        if (Pk > kk) {
          void 0 === ek && (ek = Pk - kk);
          for (let Sk = kk; Sk < kk + ek; Sk++) {
            const kk = Uk[Sk],
              ek = ik.$isUnsentAdd(kk);
            Dk.delete(kk, fk.DELETE), ek ? (wk ??= []).push(kk) : rk[kk] = !0
          }
        } else ek = 0;
        if (nk > 0) {
          const Sk = Uk[kk] ?? Pk,
            mk = Math.min(nk, ek);
          for (let kk = 0; kk < mk; kk++) {
            const ek = Sk + kk;
            let ik;
            const Pk = void 0 !== wk ? wk.indexOf(ek) : -1; - 1 !== Pk ? (wk.splice(Pk, 1), ik = fk.ADD) : ik = rk[ek] ? fk.DELETE_AND_ADD : fk.ADD, Dk.indexedOperation(ek, ik), bk[ek] = Kk[kk], rk[ek] = !1, Kk[kk][Hk]?.setParent(this, Dk.root, ek)
          }
          const Mk = nk - mk;
          if (Mk > 0) {
            const kk = Sk + mk;
            Dk.insertAt(kk, Mk);
            for (let ek = 0; ek < Mk; ek++) Kk[mk + ek][Hk]?.setParent(this, Dk.root, kk + ek);
            rk.length > 0 && rk.splice(kk, 0, ...new Array(Mk).fill(!1)), bk.splice(kk, 0, ...Kk.slice(mk)), ik.$reindexChildren(kk + Mk)
          }
        }
        if (void 0 !== wk && wk.length > 0) {
          for (let kk = wk.length - 1; kk >= 0; kk--) ik.$cancelAdd(wk[kk], !1);
          ik.$reindexChildren(wk[0])
        }
        return Dk.root?.enqueueChangeTree(Dk), Sk.splice(kk, ek, ...Kk)
      }
      unshift() {
        const kk = this[lk],
          ek = kk[Hk];
        ek.unshift(arguments.length);
        for (let Dk = 0; Dk < arguments.length; Dk++)(Dk < 0 || arguments.length <= Dk ? void 0 : arguments[Dk])?.[Hk]?.setParent(this, ek.root, Dk);
        const ik = kk.deletedIndexes;
        return ik.length > 0 && ik.unshift(...new Array(arguments.length).fill(!1)), kk.tmpItems.unshift(...arguments), kk.$reindexChildren(arguments.length), kk.items.unshift(...arguments)
      }
      indexOf(kk, ek) {
        return this.items.indexOf(kk, ek)
      }
      lastIndexOf(kk) {
        let ek = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.length - 1;
        return this.items.lastIndexOf(kk, ek)
      }
      every(kk, ek) {
        return this.items.every(kk, ek)
      }
      some(kk, ek) {
        return this.items.some(kk, ek)
      }
      forEach(kk, ek) {
        return this.items.forEach(kk, ek)
      }
      map(kk, ek) {
        return this.items.map(kk, ek)
      }
      filter(kk, ek) {
        return this.items.filter(kk, ek)
      }
      reduce(kk, ek) {
        return this.items.reduce.apply(this.items, arguments)
      }
      reduceRight(kk, ek) {
        return this.items.reduceRight.apply(this.items, arguments)
      }
      find(kk, ek) {
        return this.items.find(kk, ek)
      }
      findIndex(kk, ek) {
        return this.items.findIndex(kk, ek)
      }
      fill(kk, ek, ik) {
        throw new Error("ArraySchema#fill() not implemented")
      }
      copyWithin(kk, ek, ik) {
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
        return SD
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
      includes(kk, ek) {
        return this.items.includes(kk, ek)
      }
      flatMap(kk, ek) {
        throw new Error("ArraySchema#flatMap() is not supported.")
      }
      flat(kk) {
        throw new Error("ArraySchema#flat() is not supported.")
      }
      findLast() {
        return this.items.findLast.apply(this.items, arguments)
      }
      findLastIndex() {
        for (var kk = arguments.length, ek = new Array(kk), ik = 0; ik < kk; ik++) ek[ik] = arguments[ik];
        return this.items.findLastIndex.apply(this.items, arguments)
      }
      with(kk, ek) {
        const ik = this.items.slice();
        return kk < 0 && (kk += this.length), ik[kk] = ek, new SD(...ik)
      }
      toReversed() {
        return this.items.slice().reverse()
      }
      toSorted(kk) {
        return this.items.slice().sort(kk)
      }
      toSpliced(kk, ek) {
        for (var ik = arguments.length, Dk = new Array(ik > 2 ? ik - 2 : 0), fk = 2; fk < ik; fk++) Dk[fk - 2] = arguments[fk];
        const Sk = this.items.slice();
        return Sk.splice.apply(Sk, arguments), Sk
      }
      shuffle() {
        return this.move((kk => {
          let ek = this.items.length;
          for (; 0 != ek;) {
            let kk = Math.floor(Math.random() * ek);
            ek--, [this[ek], this[kk]] = [this[kk], this[ek]]
          }
        }))
      }
      move(kk) {
        return this.isMovingItems = !0, kk(this), this.isMovingItems = !1, this
      } [xk](kk) {
        let ek = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        const ik = this[lk] ?? this;
        return ek || ik.deletedIndexes[kk] ? ik.items[kk] : ik.tmpItems[kk] || ik.items[kk]
      } [nk](kk) {
        const ek = this[lk] ?? this;
        ek.items[kk] = void 0, ek._needsCompaction = !0
      } [pk]() {
        const kk = this.tmpItems;
        this.tmpItems = this.items.slice(), this.deletedIndexes.length > 0 && (this.$reindexChildren(0, kk), this.deletedIndexes.length = 0)
      } [Yk]() {
        const kk = this[lk] ?? this;
        kk._needsCompaction && (kk._needsCompaction = !1, kk.items = kk.items.filter((kk => void 0 !== kk)))
      } [Uk](kk, ek, ik) {
        const Dk = this[lk] ?? this,
          fk = Dk.items;
        let Sk = !1;
        for (let bk = 0; bk < fk.length; bk++) {
          const rk = fk[bk];
          kk.has(bk) ? ik(rk) : (Sk = !0, ek(rk, bk), Dk[nk](bk))
        }
        Sk && Dk[Yk]()
      }
      toArray() {
        return this.items.slice(0)
      }
      toJSON() {
        return this.toArray().map((kk => "function" === typeof kk.toJSON ? kk.toJSON() : kk))
      }
      clone(kk) {
        let ek;
        return kk ? (ek = new SD, ek.push(...this.items)) : ek = new SD(...this.map((kk => kk[Hk] ? kk.clone() : kk))), ek
      }
    }
    Ae("array", {
      constructor: SD
    });
    class bD {
      keyByIndex = new Map;
      indexByKey = Object.create(null);
      nextIndex = 0;
      snapshots;
      indexOf(kk) {
        const ek = this.indexByKey[kk];
        return void 0 === ek ? void 0 : ek
      }
      assign(kk) {
        const ek = this.nextIndex++;
        return this.indexByKey[kk] = ek, this.keyByIndex.set(ek, kk), ek
      }
      snapshot(kk, ek) {
        (this.snapshots ??= new Map).set(kk, ek)
      }
      forgetSnapshot(kk) {
        this.snapshots?.delete(kk)
      }
      snapshotAt(kk) {
        return this.snapshots?.get(kk)
      }
      setIndex(kk, ek) {
        this.keyByIndex.set(kk, ek), this.indexByKey[ek] = kk
      }
      keyOf(kk) {
        return this.keyByIndex.get(kk)
      }
      cleanupAfterEncode() {
        if (void 0 !== this.snapshots) {
          for (const [kk] of this.snapshots) {
            const ek = this.keyByIndex.get(kk);
            void 0 !== ek && (delete this.indexByKey[ek], this.keyByIndex.delete(kk))
          }
          this.snapshots.clear()
        }
      }
      reset() {
        this.indexByKey = Object.create(null), this.keyByIndex.clear(), this.snapshots?.clear(), this.nextIndex = 0
      }
    }
    class rD {
      [Hk];
      [rk];
      childType;
      [wk];
      $items = new Map;
      journal = new bD;
      _stream;
      get maxPerTick() {
        return this._stream?.maxPerTick ?? 32
      }
      set maxPerTick(kk) {
        (this._stream ??= de()).maxPerTick = kk
      }
      get priority() {
        return this._stream?.priority
      }
      set priority(kk) {
        (this._stream ??= de()).priority = kk
      }
      get $indexes() {
        return this.journal.keyByIndex
      }
      get _collectionIndexes() {
        return this.journal.indexByKey
      }
      static[mk] = ai;
      static[Mk] = Ji;
      static COLLECTION_KIND = oi;
      static[Kk](kk, ek, ik) {
        if (!ik || "string" === typeof kk[wk]) return !0;
        const Dk = kk[xk](ek) ?? kk.journal.snapshotAt(ek);
        return ik.isChangeTreeVisible(Dk[Hk])
      }
      static is(kk) {
        return void 0 !== kk.map
      }
      constructor(kk) {
        if (Object.defineProperty(this, Hk, {
            value: new Ii(this),
            enumerable: !1,
            writable: !0
          }), this[wk] = void 0, kk)
          if (kk instanceof Map || kk instanceof rD) kk.forEach(((kk, ek) => this.set(ek, kk)));
          else
            for (const ek in kk) this.set(ek, kk[ek])
      }
      static initializeForDecoder() {
        const kk = Object.create(rD.prototype);
        return kk.$items = new Map, kk.journal = new bD, kk[wk] = void 0, Qi(kk), kk
      } [Symbol.iterator]() {
        return this.$items[Symbol.iterator]()
      }
      get[Symbol.toStringTag]() {
        return this.$items[Symbol.toStringTag]
      }
      static get[Symbol.species]() {
        return rD
      }
      set(kk, ek) {
        if (void 0 === ek || null === ek) throw new Error(`MapSchema#set('${kk}', ${ek}): trying to set ${ek} value on '${kk}'.`);
        "object" === typeof ek && this[wk] && iD(ek, this[wk], this, kk), kk = kk.toString();
        const ik = this[Hk],
          Dk = void 0 !== ek[Hk],
          Sk = this.journal;
        let bk, rk = Sk.indexOf(kk);
        if (void 0 !== rk) {
          bk = fk.REPLACE;
          const ik = this.$items.get(kk);
          if (ik === ek) return;
          Dk && (bk = fk.DELETE_AND_ADD, void 0 !== ik && ik[Hk].root?.remove(ik[Hk])), void 0 !== Sk.snapshotAt(rk) && Sk.forgetSnapshot(rk)
        } else rk = Sk.assign(kk), bk = fk.ADD;
        return this.$items.set(kk, ek), bk === fk.ADD && ik.isStreamCollection ? void 0 !== ik.root && Fe(this, ik.root, rk) : ik.change(rk, bk), Dk && ek[Hk].setParent(this, ik.root, rk), this
      }
      get(kk) {
        return this.$items.get(kk)
      }
      getOrInsert(kk, ek) {
        return this.$items.has(kk) ? this.$items.get(kk) : (this.set(kk, ek), ek)
      }
      getOrInsertComputed(kk, ek) {
        if (this.$items.has(kk)) return this.$items.get(kk);
        const ik = ek(kk);
        return this.set(kk, ik), ik
      }
      delete(kk) {
        if (!this.$items.has(kk)) return !1;
        const ek = this.journal.indexOf(kk),
          ik = this.$items.get(kk),
          Dk = this[Hk];
        if (Dk.isStreamCollection) {
          const fk = Dk.root;
          let Sk = !1;
          return void 0 !== fk && (Sk = ue(this, fk, this[rk], ek)), void 0 !== ik?.[Hk] && fk?.remove(ik[Hk]), this.$items.delete(kk), Sk || this.journal.snapshot(ek, ik), !0
        }
        return this.journal.snapshot(ek, ik), Dk.delete(ek), this.$items.delete(kk)
      }
      clear() {
        const kk = this[Hk];
        kk.discard(), kk.forEachChild(((ek, ik) => {
          kk.root?.remove(ek)
        })), this.journal.reset(), this.$items.clear(), kk.operation(fk.CLEAR)
      } [yk]() {
        const kk = this[Hk];
        if (kk.isStreamCollection) throw new Error("@colyseus/schema: cannot reset a streamed MapSchema (pooling not supported).");
        this.$items.forEach((kk => kk?.[yk]?.())), this.$items.clear(), this.journal.reset(), kk.recycle(), this[rk] = void 0
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
        this[Hk].pause()
      }
      resumeTracking() {
        this[Hk].resume()
      }
      untracked(kk) {
        return this[Hk].untracked(kk)
      }
      get isTrackingPaused() {
        return this[Hk].paused
      }
      setIndex(kk, ek) {
        this.journal.setIndex(kk, ek)
      }
      getIndex(kk) {
        return this.journal.keyOf(kk)
      } [xk](kk) {
        const ek = this.journal.keyOf(kk);
        return void 0 !== ek ? this.$items.get(ek) : void 0
      } [nk](kk) {
        const ek = this.journal.keyOf(kk);
        void 0 !== ek && (this.$items.delete(ek), this.journal.keyByIndex.delete(kk))
      } [Uk](kk, ek, ik) {
        let Dk = null;
        if (this.$items.forEach(((fk, Sk) => {
            kk.has(Sk) ? ik(fk) : ((Dk ??= new Set).add(Sk), ek(fk, Sk))
          })), null !== Dk) {
          Dk.forEach((kk => {
            this.$items.delete(kk), delete this.journal.indexByKey[kk]
          }));
          const kk = [];
          this.journal.keyByIndex.forEach(((ek, ik) => {
            Dk.has(ek) && kk.push(ik)
          }));
          for (let ek = 0; ek < kk.length; ek++) this.journal.keyByIndex.delete(kk[ek])
        }
      } [pk]() {
        this.journal.cleanupAfterEncode()
      }
      _dropView(kk) {
        Qe(this, kk)
      }
      _unregister() {}
      toJSON() {
        return Object.fromEntries(Array.from(this, (kk => {
          let [ek, ik] = kk;
          return [ek, "function" === typeof ik.toJSON ? ik.toJSON() : ik]
        })))
      }
      clone(kk) {
        let ek;
        return kk ? ek = Object.assign(new rD, this) : (ek = new rD, this.forEach(((kk, ik) => {
          kk[Hk] ? ek.set(ik, kk.clone()) : ek.set(ik, kk)
        }))), ek
      }
    }
    Ae("map", {
      constructor: rD
    });
    class PD {
      [Hk];
      [rk];
      [wk];
      $items = new Map;
      deletedItems = {};
      $refId = 0;
      _stream;
      get maxPerTick() {
        return this._stream?.maxPerTick ?? 32
      }
      set maxPerTick(kk) {
        (this._stream ??= de()).maxPerTick = kk
      }
      get priority() {
        return this._stream?.priority
      }
      set priority(kk) {
        (this._stream ??= de()).priority = kk
      }
      static[mk] = Wi;
      static[Mk] = Ji;
      static COLLECTION_KIND = gi;
      static[Kk](kk, ek, ik) {
        return !ik || "string" === typeof kk[wk] || ik.isChangeTreeVisible((kk[xk](ek) ?? kk.deletedItems[ek])[Hk])
      }
      static is(kk) {
        return void 0 !== kk.collection
      }
      constructor(kk) {
        Object.defineProperty(this, Hk, {
          value: new Ii(this),
          enumerable: !1,
          writable: !0
        }), this[wk] = void 0, kk && kk.forEach((kk => this.add(kk)))
      }
      static initializeForDecoder() {
        const kk = Object.create(PD.prototype);
        return kk.$items = new Map, kk.deletedItems = {}, kk.$refId = 0, kk[wk] = void 0, Qi(kk), kk
      }
      add(kk) {
        const ek = this.$refId++,
          ik = this[Hk];
        return this.$items.set(ek, kk), ik.isStreamCollection ? void 0 !== ik.root && Fe(this, ik.root, ek) : ik.change(ek), void 0 !== kk[Hk] && kk[Hk].setParent(this, ik.root, ek), ek
      }
      at(kk) {
        const ek = Array.from(this.$items.keys())[kk];
        return this.$items.get(ek)
      }
      entries() {
        return this.$items.entries()
      }
      delete(kk) {
        const ek = this.$items.entries();
        let ik, Dk;
        for (;
          (Dk = ek.next()) && !Dk.done;)
          if (kk === Dk.value[1]) {
            ik = Dk.value[0];
            break
          } if (void 0 === ik) return !1;
        const fk = this[Hk];
        if (fk.isStreamCollection) {
          const kk = fk.root,
            ek = this.$items.get(ik);
          return void 0 !== kk && ue(this, kk, this[rk], ik), void 0 !== ek?.[Hk] && kk?.remove(ek[Hk]), this.deletedItems[ik] = ek, this.$items.delete(ik)
        }
        return this.deletedItems[ik] = fk.delete(ik), this.$items.delete(ik)
      }
      clear() {
        const kk = this[Hk];
        kk.discard(), kk.forEachChild(((ek, ik) => {
          kk.root?.remove(ek)
        })), this.$items.clear(), kk.operation(fk.CLEAR)
      } [yk]() {
        const kk = this[Hk];
        if (kk.isStreamCollection) throw new Error("@colyseus/schema: cannot reset a streamed CollectionSchema (pooling not supported).");
        this.$items.forEach((kk => kk?.[yk]?.())), this.$items.clear(), this.deletedItems = {}, this.$refId = 0, kk.recycle(), this[rk] = void 0
      }
      has(kk) {
        return Array.from(this.$items.values()).some((ek => ek === kk))
      }
      forEach(kk) {
        this.$items.forEach(((ek, ik, Dk) => kk(ek, ik, this)))
      }
      values() {
        return this.$items.values()
      }
      get size() {
        return this.$items.size
      }
      pauseTracking() {
        this[Hk].pause()
      }
      resumeTracking() {
        this[Hk].resume()
      }
      untracked(kk) {
        return this[Hk].untracked(kk)
      }
      get isTrackingPaused() {
        return this[Hk].paused
      } [Symbol.iterator]() {
        return this.$items.values()
      }
      setIndex(kk, ek) {}
      getIndex(kk) {
        return kk
      } [xk](kk) {
        return this.$items.get(kk)
      } [nk](kk) {
        this.$items.delete(kk)
      } [Uk](kk, ek, ik) {
        let Dk = null;
        if (this.$items.forEach(((fk, Sk) => {
            kk.has(Sk) ? ik(fk) : ((Dk ??= []).push(Sk), ek(fk, Sk))
          })), null !== Dk)
          for (let fk = 0; fk < Dk.length; fk++) this[nk](Dk[fk])
      } [pk]() {
        for (const kk in this.deletedItems) delete this.deletedItems[kk]
      }
      _dropView(kk) {
        Qe(this, kk)
      }
      _unregister() {}
      toArray() {
        return Array.from(this.$items.values())
      }
      toJSON() {
        const kk = [];
        return this.forEach(((ek, ik) => {
          kk.push("function" === typeof ek.toJSON ? ek.toJSON() : ek)
        })), kk
      }
      clone(kk) {
        let ek;
        return kk ? ek = Object.assign(new PD, this) : (ek = new PD, this.forEach((kk => {
          kk[Hk] ? ek.add(kk.clone()) : ek.add(kk)
        }))), ek
      }
    }
    Ae("collection", {
      constructor: PD
    });
    class mD {
      [Hk];
      [rk];
      [wk];
      $items = new Map;
      deletedItems = {};
      $refId = 0;
      _stream;
      get maxPerTick() {
        return this._stream?.maxPerTick ?? 32
      }
      set maxPerTick(kk) {
        (this._stream ??= de()).maxPerTick = kk
      }
      get priority() {
        return this._stream?.priority
      }
      set priority(kk) {
        (this._stream ??= de()).priority = kk
      }
      static[mk] = Wi;
      static[Mk] = Ji;
      static COLLECTION_KIND = Oi;
      static[Kk](kk, ek, ik) {
        return !ik || "string" === typeof kk[wk] || ik.isVisible((kk[xk](ek) ?? kk.deletedItems[ek])[Hk])
      }
      static is(kk) {
        return void 0 !== kk.set
      }
      constructor(kk) {
        Object.defineProperty(this, Hk, {
          value: new Ii(this),
          enumerable: !1,
          writable: !0
        }), this[wk] = void 0, kk && kk.forEach((kk => this.add(kk)))
      }
      static initializeForDecoder() {
        const kk = Object.create(mD.prototype);
        return kk.$items = new Map, kk.deletedItems = {}, kk.$refId = 0, kk[wk] = void 0, Qi(kk), kk
      }
      add(kk) {
        if (this.has(kk)) return !1;
        const ek = this.$refId++,
          ik = this[Hk];
        return this.$items.set(ek, kk), ik.isStreamCollection ? void 0 !== ik.root && Fe(this, ik.root, ek) : ik.change(ek, fk.ADD), void 0 !== kk[Hk] && kk[Hk].setParent(this, ik.root, ek), ek
      }
      entries() {
        return this.$items.entries()
      }
      delete(kk) {
        const ek = this.$items.entries();
        let ik, Dk;
        for (;
          (Dk = ek.next()) && !Dk.done;)
          if (kk === Dk.value[1]) {
            ik = Dk.value[0];
            break
          } if (void 0 === ik) return !1;
        const fk = this[Hk];
        if (fk.isStreamCollection) {
          const kk = fk.root,
            ek = this.$items.get(ik);
          return void 0 !== kk && ue(this, kk, this[rk], ik), void 0 !== ek?.[Hk] && kk?.remove(ek[Hk]), this.deletedItems[ik] = ek, this.$items.delete(ik)
        }
        return this.deletedItems[ik] = fk.delete(ik), this.$items.delete(ik)
      }
      clear() {
        const kk = this[Hk];
        kk.discard(), this.$items.clear(), kk.operation(fk.CLEAR)
      } [yk]() {
        const kk = this[Hk];
        if (kk.isStreamCollection) throw new Error("@colyseus/schema: cannot reset a streamed SetSchema (pooling not supported).");
        this.$items.forEach((kk => kk?.[yk]?.())), this.$items.clear(), this.deletedItems = {}, this.$refId = 0, kk.recycle(), this[rk] = void 0
      }
      has(kk) {
        const ek = this.$items.values();
        let ik, Dk = !1;
        for (;
          (ik = ek.next()) && !ik.done;)
          if (kk === ik.value) {
            Dk = !0;
            break
          } return Dk
      }
      forEach(kk) {
        this.$items.forEach(((ek, ik, Dk) => kk(ek, ik, this)))
      }
      values() {
        return this.$items.values()
      }
      get size() {
        return this.$items.size
      }
      pauseTracking() {
        this[Hk].pause()
      }
      resumeTracking() {
        this[Hk].resume()
      }
      untracked(kk) {
        return this[Hk].untracked(kk)
      }
      get isTrackingPaused() {
        return this[Hk].paused
      } [Symbol.iterator]() {
        return this.$items.values()
      }
      setIndex(kk, ek) {}
      getIndex(kk) {
        return kk
      } [xk](kk) {
        return this.$items.get(kk)
      } [nk](kk) {
        this.$items.delete(kk)
      } [Uk](kk, ek, ik) {
        let Dk = null;
        if (this.$items.forEach(((fk, Sk) => {
            kk.has(Sk) ? ik(fk) : ((Dk ??= []).push(Sk), ek(fk, Sk))
          })), null !== Dk)
          for (let fk = 0; fk < Dk.length; fk++) this[nk](Dk[fk])
      } [pk]() {
        for (const kk in this.deletedItems) delete this.deletedItems[kk]
      }
      _dropView(kk) {
        Qe(this, kk)
      }
      _unregister() {}
      toArray() {
        return Array.from(this.$items.values())
      }
      toJSON() {
        const kk = [];
        return this.forEach(((ek, ik) => {
          kk.push("function" === typeof ek.toJSON ? ek.toJSON() : ek)
        })), kk
      }
      clone(kk) {
        let ek;
        return kk ? ek = Object.assign(new mD, this) : (ek = new mD, this.forEach((kk => {
          kk[Hk] ? ek.add(kk.clone()) : ek.add(kk)
        }))), ek
      }
    }
    Ae("set", {
      constructor: mD
    });
    class MD {
      [Hk];
      [rk];
      [wk];
      $items = new Map;
      $nextPosition = 0;
      _itemIndex = new Map;
      _stream;
      get maxPerTick() {
        return this._stream?.maxPerTick ?? 32
      }
      set maxPerTick(kk) {
        (this._stream ??= de()).maxPerTick = kk
      }
      get priority() {
        return this._stream?.priority
      }
      set priority(kk) {
        (this._stream ??= de()).priority = kk
      }
      static $isStream = !0;
      static[mk] = Wi;
      static[Mk] = Ji;
      static COLLECTION_KIND = Gi;
      static[Kk](kk, ek, ik) {
        if (!ik) return !0;
        const Dk = kk[xk](ek);
        return void 0 !== Dk && ik.isVisible(Dk[Hk])
      }
      static is(kk) {
        return kk && void 0 !== kk.stream
      }
      constructor() {
        Object.defineProperty(this, Hk, {
          value: new Ii(this),
          enumerable: !1,
          writable: !0
        }), this[wk] = void 0
      }
      static initializeForDecoder() {
        const kk = Object.create(MD.prototype);
        return kk.$items = new Map, kk.$nextPosition = 0, kk._itemIndex = new Map, kk[wk] = void 0, Qi(kk), kk
      }
      add(kk) {
        if (this._itemIndex.has(kk)) return -1;
        const ek = this.$nextPosition++;
        this.$items.set(ek, kk), this._itemIndex.set(kk, ek);
        const ik = this[Hk].root;
        return void 0 !== kk[Hk] && kk[Hk].setParent(this, ik, ek), void 0 !== ik && Fe(this, ik, ek), ek
      }
      remove(kk) {
        const ek = this._itemIndex.get(kk);
        if (void 0 === ek) return !1;
        this._itemIndex.delete(kk), this.$items.delete(ek);
        const ik = this[Hk].root;
        return void 0 !== ik && (ue(this, ik, this[rk], ek), void 0 !== kk[Hk] && ik.remove(kk[Hk])), !0
      }
      has(kk) {
        return this._itemIndex.has(kk)
      }
      clear() {
        const kk = this[Hk].root;
        if (void 0 !== kk) {
          ! function(kk, ek, ik) {
            const Dk = kk._stream;
            if (void 0 !== Dk) {
              Dk.broadcastPending.clear();
              for (const kk of Dk.sentBroadcast) Dk.broadcastDeletes.add(kk);
              Dk.sentBroadcast.clear(), ek.forEachActiveView((kk => {
                Dk.pendingByView.get(kk.id)?.clear();
                const ek = Dk.sentByView.get(kk.id);
                if (void 0 !== ek && ek.size > 0) {
                  let Dk = kk.changes.get(ik);
                  void 0 === Dk && (Dk = new Map, kk.changes.set(ik, Dk));
                  for (const kk of ek) Dk.set(kk, fk.DELETE);
                  ek.clear()
                }
              }))
            }
          }(this, kk, this[rk]);
          for (const ek of this.$items.values()) void 0 !== ek[Hk] && kk.remove(ek[Hk])
        }
        this.$items.clear(), this._itemIndex.clear()
      }
      forEach(kk) {
        for (const [ek, ik] of this.$items) kk(ik, ek, this)
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
      setIndex(kk, ek) {}
      getIndex(kk) {
        return kk
      } [xk](kk) {
        return this.$items.get(kk)
      } [nk](kk) {
        const ek = this.$items.get(kk);
        void 0 !== ek && (this._itemIndex.delete(ek), this.$items.delete(kk))
      } [Uk]() {} [pk]() {}
      toArray() {
        return Array.from(this.$items.values())
      }
      toJSON() {
        const kk = [];
        return this.forEach((ek => {
          kk.push("function" === typeof ek?.toJSON ? ek.toJSON() : ek)
        })), kk
      }
      clone(kk) {
        if (kk) {
          return Object.assign(new MD, this)
        }
        const ek = new MD;
        return ek.maxPerTick = this.maxPerTick, this.forEach((kk => {
          ek.add("function" === typeof kk?.clone ? kk.clone() : kk)
        })), ek
      }
      _dropView(kk) {
        Qe(this, kk)
      }
      _unregister() {}
    }
    Ae("stream", {
      constructor: MD
    });
    class KD {
      [Ck] = !0;
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
        if (kk && "object" === typeof kk && void 0 !== kk.array) throw new Error(se);
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

    function xD(kk) {
      return null != kk && !0 === kk[Ck]
    }

    function nD(kk) {
      return () => new KD(kk)
    }

    function UD(kk) {
      if (xD(kk)) {
        const ek = kk._type;
        throw new Error(`t.array/map/set/collection(): a t.* builder is not a valid element type \u2014 ${"string"===typeof ek?`use the type name instead: t.array("${ek}")`:'collections accept a Schema class or a primitive type name ("string", "number", \u2026)'}.`)
      }
      return kk
    }

    function HD(kk) {
      return new KD({
        quantized: Ee(kk)
      })
    }
    const wD = Object.freeze({
        string: nD("string"),
        number: nD("number"),
        boolean: nD("boolean"),
        int8: nD("int8"),
        uint8: nD("uint8"),
        int16: nD("int16"),
        uint16: nD("uint16"),
        int32: nD("int32"),
        uint32: nD("uint32"),
        int64: nD("int64"),
        uint64: nD("uint64"),
        float32: nD("float32"),
        float64: nD("float64"),
        bigint64: nD("bigint64"),
        biguint64: nD("biguint64"),
        ref: kk => new KD(kk),
        array: kk => new KD({
          array: UD(kk)
        }),
        map: kk => new KD({
          map: UD(kk)
        }),
        set: kk => new KD({
          set: UD(kk)
        }),
        collection: kk => new KD({
          collection: UD(kk)
        }),
        stream: kk => {
          const ek = new KD({
            stream: UD(kk)
          });
          return ek._stream = !0, ek
        },
        quantized: HD,
        angle: kk => HD({
          min: 0,
          max: 2 * Math.PI,
          mode: "wrap",
          bits: kk?.bits ?? 16
        })
      }),
      lD = -1;

    function pD(kk) {
      return Xe.register(kk), kk
    }

    function yD() {
      let kk = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : lD;
      return function(ek, ik) {
        const Dk = ge.initialize(ek.constructor);
        ge.setTag(Dk, ik, kk)
      }
    }

    function YD(kk, ek) {
      const ik = ge.initialize(kk.constructor);
      ge.setUnreliable(ik, ek)
    }

    function LD(kk, ek) {
      const ik = ge.initialize(kk.constructor);
      ge.setPatchOnly(ik, ek)
    }

    function CD(kk, ek) {
      const ik = ge.initialize(kk.constructor);
      ge.setFullStateOnly(ik, ek)
    }

    function AD(kk, ek) {
      return function(ik, Dk) {
        const fk = ik.constructor;
        if (!kk) throw new Error(`${fk.name}: @type() reference provided for "${Dk}" is undefined. Make sure you don't have any circular dependencies.`);
        kk = ce(kk, `${fk.name}.${Dk}`), Xe.register(fk);
        const Sk = Object.getPrototypeOf(fk)[Symbol.metadata],
          bk = ge.initialize(fk);
        let rk = bk[Dk];
        if (void 0 !== bk[rk]) {
          if (bk[rk].deprecated) return;
          if (void 0 !== bk[rk].type) {
            const kk = new Error(`@colyseus/schema: Duplicate '${Dk}' definition on '${fk.name}'.\nCheck @type() annotation`);
            throw new Error(`${kk.message} ${kk.stack.split("\n")[4].trim()}`)
          }
        } else rk = bk[dk] ?? (Sk && Sk[dk]) ?? -1, rk++;
        if (ek && ek.manual) ge.addField(bk, rk, Dk, kk, {
          enumerable: !0,
          configurable: !0,
          writable: !0
        });
        else {
          const {
            complexTypeKlass: ek,
            childType: ik
          } = Be(kk);
          ge.addField(bk, rk, Dk, kk, sD(Dk, rk, ik, ek))
        }
        bk[Ak][Dk] && Object.defineProperty(ik, Dk, bk[Ak][Dk]), ("string" === typeof kk || he(kk)) && (bk[sk] || Object.defineProperty(bk, sk, {
          value: [],
          enumerable: !1,
          configurable: !0,
          writable: !0
        }), bk[sk][rk] = "string" === typeof kk ? ie[kk] : te(kk.quantized))
      }
    }
    const jD = {
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

    function sD(kk, ek, ik, Dk) {
      let Sk;
      return Sk = Dk ? function(kk, ek, ik, Dk) {
        const Sk = Dk.constructor === SD,
          bk = Dk.constructor === rD;
        return function(kk) {
          const Dk = this[Lk],
            rk = Dk[ek];
          if (kk !== rk) {
            if (void 0 !== kk && null !== kk) {
              if (!Sk || kk instanceof SD)
                if (!bk || kk instanceof rD) kk[wk] = ik;
                else {
                  const ek = new rD;
                  if (ek[wk] = ik, kk instanceof Map) kk.forEach(((kk, ik) => ek.set(ik, kk)));
                  else
                    for (const ik in kk) ek.set(ik, kk[ik]);
                  kk = ek
                }
              else {
                const ek = new SD;
                ek[wk] = ik, ek.push(...kk), kk = ek
              }
              const Dk = this[Hk],
                mk = this.constructor;
              void 0 !== rk && null !== rk && rk[Hk] ? (Dk.root?.remove(rk[Hk]), mk[Pk](Dk, ek, fk.DELETE_AND_ADD)) : mk[Pk](Dk, ek, fk.ADD), kk[Hk]?.setParent(this, Dk.root, ek)
            } else void 0 !== rk && null !== rk && this[Hk].delete(ek);
            Dk[ek] = kk
          }
        }
      }(0, ek, ik, Dk) : "string" === typeof ik ? function(kk, ek, ik) {
        const Dk = jD[ik],
          Sk = "string" === ik,
          bk = "boolean" === ik;
        return function(ik) {
          const rk = this[Lk],
            mk = rk[ek];
          if (ik !== mk) {
            if (void 0 !== ik && null !== ik) {
              if (!bk && void 0 !== Dk && typeof ik !== Dk && (!Sk || null !== ik)) {
                const ek = ik && ik.constructor ? ` (${ik.constructor.name})` : "";
                throw new eD(`a '${Dk}' was expected, but '${JSON.stringify(ik)}'${ek} was provided in ${this.constructor.name}#${kk}`)
              }
              this.constructor[Pk](this[Hk], ek, fk.ADD)
            } else void 0 !== mk && null !== mk && this[Hk].delete(ek);
            rk[ek] = ik
          }
        }
      }(kk, ek, ik) : he(ik) ? function(kk, ek, ik) {
        return function(Dk) {
          const Sk = this[Lk],
            bk = Sk[ek];
          if (void 0 !== Dk && null !== Dk) {
            if ("number" !== typeof Dk) throw new eD(`a 'number' was expected, but '${JSON.stringify(Dk)}' was provided in ${this.constructor.name}#${kk}`);
            if ((Dk = We(ik, ae(ik, Dk))) === bk) return;
            this.constructor[Pk](this[Hk], ek, fk.ADD)
          } else {
            if (Dk === bk) return;
            void 0 !== bk && null !== bk && this[Hk].delete(ek)
          }
          Sk[ek] = Dk
        }
      }(kk, ek, ik.quantized) : function(kk, ek, ik) {
        return function(Dk) {
          const Sk = this[Lk],
            bk = Sk[ek];
          if (Dk !== bk) {
            if (void 0 !== Dk && null !== Dk) {
              iD(Dk, ik, this, kk);
              const Sk = this[Hk],
                rk = this.constructor;
              void 0 !== bk && null !== bk && bk[Hk] ? (Sk.root?.remove(bk[Hk]), rk[Pk](Sk, ek, fk.DELETE_AND_ADD)) : rk[Pk](Sk, ek, fk.ADD), Dk[Hk]?.setParent(this, Sk.root, ek)
            } else void 0 !== bk && null !== bk && this[Hk].delete(ek);
            Sk[ek] = Dk
          }
        }
      }(kk, ek, ik), {
        get: function() {
          return this[Lk][ek]
        },
        set: Sk,
        enumerable: !0,
        configurable: !0
      }
    }

    function dD() {
      let kk = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
      return function(ek, ik) {
        const Dk = ge.initialize(ek.constructor);
        ge.setDeprecated(Dk, ik), kk && (Dk[Ak] ??= {}, Dk[Ak][ik] = {
          get: function() {
            throw new Error(`${ik} is deprecated.`)
          },
          set: function(kk) {},
          enumerable: !1,
          configurable: !0
        }, Object.defineProperty(ek, ik, Dk[Ak][ik]))
      }
    }
    let VD = !1;

    function FD(kk, ek, ik) {
      VD || (VD = !0, console.warn("@colyseus/schema: defineTypes() is deprecated and will be removed in a future release. Use schema() with t.* field builders instead \u2192 https://docs.colyseus.io/state/schema"));
      for (let Dk in ek) AD(ek[Dk], ik)(kk.prototype, Dk);
      return kk
    }

    function uD(kk, ek) {
      let ik = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : ID;
      if (null == kk || "object" !== typeof kk) throw new Error(`schema(): first argument must be a fields object (got ${typeof kk}).`);
      const Dk = {},
        fk = {},
        Sk = {},
        bk = {},
        rk = (kk, ek) => {
          if (ek.hasDefault)((kk, ek) => {
            "function" === typeof ek ? bk[kk] = ek : ek && "function" === typeof ek.clone ? bk[kk] = () => ek.clone() : Sk[kk] = ek
          })(kk, ek.default);
          else if (!ek.optional) {
            const ik = function(kk) {
              if (kk && "object" === typeof kk) {
                if (void 0 !== kk.array) return () => new SD;
                if (void 0 !== kk.map) return () => new rD;
                if (void 0 !== kk.set) return () => new mD;
                if (void 0 !== kk.collection) return () => new PD;
                if (void 0 !== kk.stream) return () => new MD
              } else if ("function" === typeof kk && ID.is(kk) && (!kk.prototype.initialize || 0 === kk.prototype.initialize.length)) return () => new kk
            }(ek.type);
            ik && (bk[kk] = ik)
          }
        },
        Pk = {},
        mk = [],
        Mk = [],
        Kk = {},
        xk = [],
        nk = [],
        Uk = {},
        Hk = [];
      for (const Lk in kk) {
        const ik = kk[Lk],
          Sk = `schema(${ek?`'${ek}'`:""}): field '${Lk}'`;
        if (xD(ik)) {
          const kk = ik.toDefinition();
          if (kk.noSync) {
            if (void 0 !== kk.view || kk.unreliable || kk.patchOnly || kk.fullStateOnly || kk.stream) throw new Error(`${Sk} uses .noSync() together with a sync-only modifier (.view/.unreliable/.patchOnly/.fullStateOnly/.stream). A local-only field cannot be synchronized.`);
            rk(Lk, kk);
            continue
          }
          if (kk.patchOnly && kk.fullStateOnly) throw new Error(`${Sk} uses .patchOnly() together with .fullStateOnly(). Those are the only two delivery channels, so the field would never reach a client \u2014 use .noSync() if that is intended.`);
          const ek = ce(kk.type, Sk);
          if ("function" === typeof ek && !ID.is(ek)) throw new Error(`${Sk} is a synced ref to non-Schema class '${ek.name||"(anonymous)"}' \u2014 use .noSync(), or Metadata.setFields().`);
          Dk[Lk] = ek, void 0 !== kk.view && (Pk[Lk] = kk.view), kk.unreliable && mk.push(Lk), kk.patchOnly && Mk.push(Lk), kk.deprecated && (Kk[Lk] = kk.deprecatedThrows), kk.fullStateOnly && xk.push(Lk), kk.stream && nk.push(Lk), void 0 !== kk.streamPriority && (Uk[Lk] = kk.streamPriority), kk.optional && Hk.push(Lk), rk(Lk, kk)
        } else {
          if ("function" !== typeof ik) throw new Error(`${Sk} must be a t.* builder, Schema subclass, or method (got ${typeof ik}).`);
          ID.is(ik) ? (Dk[Lk] = ik, ik.prototype.initialize && 0 !== ik.prototype.initialize.length || (bk[Lk] = () => new ik)) : fk[Lk] = ik
        }
      }
      const wk = kk => {
          for (const ek in Sk) kk[ek] = Sk[ek];
          for (const ek in bk) kk[ek] = bk[ek]()
        },
        lk = () => {
          const kk = {};
          return wk(kk), kk
        },
        pk = "function" === typeof fk.initialize,
        yk = fk.initialize ?? ik._initialize,
        Yk = class extends ik {
          constructor() {
            for (var kk = arguments.length, ek = new Array(kk), ik = 0; ik < kk; ik++) ek[ik] = arguments[ik];
            const fk = ek[0];
            void 0 === fk ? (super(), wk(this)) : super(Object.assign(lk(), pk ? (kk => {
              const ek = Object.keys(Dk),
                ik = {};
              for (const Dk in kk) ek.includes(Dk) || (ik[Dk] = kk[Dk]);
              return ik
            })(fk) : fk)), yk && new.target === Yk && yk.apply(this, ek)
          }
        };
      ek && Object.defineProperty(Yk, "name", {
        value: ek
      }), ge.setFields(Yk, Dk), Yk._getDefaultValues = lk, Yk._initialize = yk, Object.assign(Yk.prototype, fk);
      for (const Lk in Pk) yD(Pk[Lk])(Yk.prototype, Lk);
      for (const Lk of mk) YD(Yk.prototype, Lk);
      for (const Lk of Mk) LD(Yk.prototype, Lk);
      for (const Lk in Kk) dD(Kk[Lk])(Yk.prototype, Lk);
      if (xk.length > 0 || nk.length > 0) {
        const kk = Yk[Symbol.metadata];
        for (const ek of xk) ge.setFullStateOnly(kk, ek);
        for (const ek of nk) ge.setStream(kk, ek);
        for (const ek in Uk) ge.setStreamPriority(kk, ek, Uk[ek])
      }
      if (Hk.length > 0) {
        const kk = Yk[Symbol.metadata];
        for (const ek of Hk) kk[kk[ek]].optional = !0
      }
      return Yk.extend = (kk, ek) => uD(kk, ek, Yk), Yk
    }

    function qD(kk) {
      const ek = kk[Hk].root,
        ik = {
          ops: {},
          refs: []
        };
      let Dk = ek.changes.next;
      for (; Dk;) {
        const kk = Dk.changeTree;
        void 0 !== kk ? (ik.refs.push(`refId#${kk.ref[rk]}`), kk.forEach(((kk, ek) => {
          if (kk < 0 || !ek) return;
          const Dk = fk[ek];
          ik.ops[Dk] || (ik.ops[Dk] = 0), ik.ops[Dk]++
        })), Dk = Dk.next) : Dk = Dk.next
      }
      return ik
    }
    class ID {
      static[mk] = Ei;
      static[Mk] = Ri;
      [rk];
      [Lk];
      static initialize(kk) {
        Object.defineProperty(kk, Hk, {
          value: new Ii(kk),
          enumerable: !1,
          writable: !0
        }), kk[Lk] = []
      }
      static initializeForDecoder() {
        const kk = Object.create(this.prototype);
        return Qi(kk), kk[Lk] = [], kk
      }
      static reset(kk) {
        const ek = kk?.[Hk];
        if (void 0 === ek || "function" !== typeof ek.recycle) throw new Error("@colyseus/schema: Schema.reset() requires a tracked (encoder-side) instance.");
        if (void 0 !== ek.extraParents) throw new Error(`@colyseus/schema: cannot reset a shared instance (${kk.constructor.name}) with multiple parents.`);
        kk[yk]()
      } [yk]() {
        const kk = this.constructor[Symbol.metadata],
          ek = kk?.[Vk] ?? [],
          ik = this[Lk];
        for (let Dk = 0; Dk < ek.length; Dk++) {
          const kk = ik[ek[Dk]];
          kk?.[yk]?.()
        }
        this[Hk].recycle(), this[rk] = void 0
      }
      static is(kk) {
        const ek = kk[Symbol.metadata];
        return "object" === typeof ek && null !== ek
      }
      static isSchema(kk) {
        return "function" === typeof kk?.assign
      }
      static[Pk](kk, ek) {
        let ik = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : fk.ADD;
        kk.change(ek, ik)
      }
      static[Kk](kk, ek, ik) {
        const Dk = kk.constructor[Symbol.metadata],
          fk = Dk[ek]?.tag;
        return void 0 === ik ? void 0 === fk : void 0 === fk || (fk === lD ? ik.isChangeTreeVisible(kk[Hk]) : ik.hasTagOnTree(kk[Hk], fk))
      }
      constructor(kk) {
        ID.initialize(this), kk && ID.assignProps(this, kk)
      }
      assign(kk) {
        return ID.assignProps(this, kk), this
      }
      static assignProps(kk, ek) {
        const ik = kk.constructor[Symbol.metadata];
        if (ik && void 0 !== ik[dk])
          for (let fk = 0; fk <= ik[dk]; fk++) {
            const Dk = ik[fk];
            if (!Dk) continue;
            const Sk = ek[Dk.name];
            void 0 !== Sk && (kk[Dk.name] = Sk)
          }
        const Dk = Object.keys(ek);
        for (let fk = 0; fk < Dk.length; fk++) {
          const Sk = Dk[fk];
          ik && void 0 !== ik[Sk] || (kk[Sk] = ek[Sk])
        }
      }
      restore(kk) {
        const ek = this.constructor[Symbol.metadata];
        for (const ik in ek) {
          const Dk = ek[ik],
            fk = Dk.name,
            Sk = Dk.type,
            bk = kk[fk];
          if (void 0 !== bk && null !== bk)
            if ("string" === typeof Sk) this[fk] = bk;
            else if (ID.is(Sk)) {
            const kk = new Sk;
            kk.restore(bk), this[fk] = kk
          } else if ("object" === typeof Sk) {
            const kk = Object.keys(Sk)[0],
              ek = Sk[kk];
            if ("map" === kk) {
              const kk = this[fk];
              for (const ik in bk)
                if (ID.is(ek)) {
                  const Dk = new ek;
                  Dk.restore(bk[ik]), kk.set(ik, Dk)
                } else kk.set(ik, bk[ik])
            } else if ("array" === kk) {
              const kk = this[fk];
              for (let ik = 0; ik < bk.length; ik++)
                if (ID.is(ek)) {
                  const Dk = new ek;
                  Dk.restore(bk[ik]), kk.push(Dk)
                } else kk.push(bk[ik])
            }
          }
        }
        return this
      }
      setDirty(kk, ek) {
        const ik = this.constructor[Symbol.metadata];
        this[Hk].change(ik[ik[kk]].index, ek)
      }
      pauseTracking() {
        this[Hk].pause()
      }
      resumeTracking() {
        this[Hk].resume()
      }
      untracked(kk) {
        return this[Hk].untracked(kk)
      }
      get isTrackingPaused() {
        return this[Hk].paused
      }
      clone() {
        const kk = Object.create(this.constructor.prototype);
        ID.initialize(kk);
        const ek = this.constructor[Symbol.metadata];
        for (const ik in ek) {
          const Dk = ek[ik].name;
          "object" === typeof this[Dk] && "function" === typeof this[Dk]?.clone ? kk[Dk] = this[Dk].clone() : kk[Dk] = this[Dk]
        }
        return kk
      }
      toJSON() {
        const kk = {},
          ek = this.constructor[Symbol.metadata];
        for (const ik in ek) {
          const Dk = ek[ik],
            fk = Dk.name;
          Dk.deprecated || null === this[fk] || "undefined" === typeof this[fk] || (kk[fk] = "function" === typeof this[fk].toJSON ? this[fk].toJSON() : this[fk])
        }
        return kk
      }
      discardAllChanges() {
        this[Hk].discardAll()
      } [xk](kk) {
        return this[this.constructor[Symbol.metadata][kk].name]
      } [nk](kk) {
        this[this.constructor[Symbol.metadata][kk].name] = void 0
      }
      static debugRefIds(kk) {
        let ek = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          ik = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          Dk = arguments.length > 3 ? arguments[3] : void 0,
          fk = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "";
        const Sk = ek ? ` - ${JSON.stringify(kk.toJSON())}` : "",
          bk = kk[Hk],
          Pk = kk[rk],
          mk = Dk ? Dk.root.refCount[Pk] : bk.refCount,
          Mk = mk > 1 ? ` [\xd7${mk}]` : "";
        let Kk = `${function(kk){return new Array(kk).fill(0).map(((ek,ik)=>ik===kk-1?"\u2514\u2500 ":"   ")).join("")}(ik)}${fk}${kk.constructor.name} (refId: ${Pk})${Mk}${Sk}\n`;
        return bk.forEachChild(((fk, Sk) => {
          let bk = Sk;
          "number" === typeof Sk && kk.$indexes && (bk = kk.$indexes.get(Sk) ?? Sk);
          const rk = void 0 !== kk.forEach && void 0 !== bk ? `["${bk}"]: ` : "";
          Kk += this.debugRefIds(fk.ref, ek, ik + 1, Dk, rk)
        })), Kk
      }
      static debugRefIdEncodingOrder(kk) {
        let ek = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "allChanges";
        const ik = [],
          Dk = kk[Hk];
        if ("changes" === ek) {
          let kk = Dk.root.changes?.next;
          for (; kk;) kk.changeTree && ik.push(kk.changeTree.ref[rk]), kk = kk.next;
          return ik
        }
        const fk = "allFilteredChanges" === ek,
          Sk = new Set,
          bk = kk => {
            Sk.has(kk) || (Sk.add(kk), kk.isFiltered === fk && ik.push(kk.ref[rk]), kk.forEachChild(((kk, ek) => bk(kk))))
          };
        return bk(Dk), ik
      }
      static debugRefIdsFromDecoder(kk) {
        return this.debugRefIds(kk.state, !1, 0, kk)
      }
      static debugChanges(kk) {
        let ek = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        const ik = kk[Hk],
          Dk = ek ? "allChanges" : "changes";
        let Sk = `${kk.constructor.name} (${kk[rk]}) -> .${Dk}:\n`;
        return ek ? ik.forEachLive((kk => {
          Sk += `- [${kk}]: ADD (${JSON.stringify(ik.getValue(Number(kk),!0))})\n`
        })) : ik.forEach(((kk, ek) => {
          kk < 0 || !ek || (Sk += `- [${kk}]: ${fk[ek]} (${JSON.stringify(ik.getValue(Number(kk),!1))})\n`)
        })), Sk
      }
    }
    Sk(ID);
    const zD = {
      value: 0,
      enumerable: !1,
      writable: !0
    };
    class QD {
      types;
      nextUniqueId = 0;
      changeTrees = {};
      get refCount() {
        const kk = {};
        for (const ek in this.changeTrees) kk[ek] = this.changeTrees[ek].refCount;
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
        this.types.hasFilters && (kk.flags & ui || (kk.flags |= ui, this.pendingFilterRefresh.push(kk)))
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
        const ek = kk.id;
        for (const ik of this.streamTrees) ik._dropView(ek)
      }
      forEachActiveView(kk) {
        for (const [ek, ik] of this.activeViews) {
          const Dk = ik.deref();
          if (void 0 !== Dk) kk(Dk);
          else {
            this.activeViews.delete(ek);
            for (const kk of this.streamTrees) kk._dropView(ek)
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
        let ek = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        this.types = kk, this.nextUniqueId = ek
      }
      add(kk) {
        const ek = kk.ref;
        void 0 === ek[rk] && (zD.value = this.nextUniqueId++, Object.defineProperty(ek, rk, zD));
        const ik = ek[rk],
          Dk = void 0 === this.changeTrees[ik];
        Dk && (this.changeTrees[ik] = kk), kk.needsRestage && (kk.needsRestage = !1, kk.forEachLiveWithCtx(kk, Di));
        const fk = Dk ? 0 : kk.refCount;
        return kk.refCount = fk + 1, fk > 0 && this.enqueueFilterRefresh(kk), Dk
      }
      remove(kk) {
        const ek = kk.refCount - 1;
        if (ek <= 0) {
          if (kk.root = void 0, delete this.changeTrees[kk.ref[rk]], kk.isStreamCollection) {
            const ek = kk.ref;
            ek._unregister?.(), this.unregisterStream(ek)
          }
          this.removeFromQueue(kk), this.removeFromUnreliableQueue(kk), kk.refCount = 0, kk.needsRestage = !0, kk.forEachChild(((ek, ik) => {
            ek.removeParent(kk.ref) && (void 0 === ek.parentRef || ek.refCount > 0 ? this.remove(ek) : this.moveNextToParent(ek))
          }))
        } else kk.refCount = ek, this.enqueueFilterRefresh(kk), this.recursivelyMoveNextToParent(kk);
        return ek
      }
      recursivelyMoveNextToParent(kk) {
        this.moveNextToParent(kk), kk.forEachChild(((kk, ek) => this.recursivelyMoveNextToParent(kk)))
      }
      moveNextToParent(kk) {
        kk.changesNode && this._moveNextToParentInList(this.changes, kk, kk.changesNode, "changesNode"), kk.unreliableChangesNode && this._moveNextToParentInList(this.unreliableChanges, kk, kk.unreliableChangesNode, "unreliableChangesNode")
      }
      _moveNextToParentInList(kk, ek, ik, Dk) {
        const fk = ek.parent;
        if (!fk || !fk[Hk]) return;
        const Sk = fk[Hk][Dk];
        Sk && Sk !== ik && (ik.position > Sk.position || (ik.prev ? ik.prev.next = ik.next : kk.next = ik.next, ik.next ? ik.next.prev = ik.prev : kk.tail = ik.prev, ik.prev = kk.tail, ik.next = void 0, kk.tail.next = ik, kk.tail = ik, ik.position = kk.nextPosition++))
      }
      enqueueChangeTree(kk) {
        (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : kk.changesNode) || (kk.changesNode = this._appendToList(this.changes, kk))
      }
      enqueueUnreliable(kk) {
        (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : kk.unreliableChangesNode) || (kk.unreliableChangesNode = this._appendToList(this.unreliableChanges, kk))
      }
      _appendToList(kk, ek) {
        const ik = this._nodePool;
        let Dk;
        return ik.length > 0 ? (Dk = ik.pop(), Dk.changeTree = ek, Dk.next = void 0, Dk.prev = void 0) : Dk = {
          changeTree: ek,
          next: void 0,
          prev: void 0,
          position: 0
        }, kk.next ? (Dk.prev = kk.tail, kk.tail.next = Dk, kk.tail = Dk) : (kk.nextPosition = 0, kk.next = Dk, kk.tail = Dk), Dk.position = kk.nextPosition++, Dk
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
      _removeNode(kk, ek, ik, Dk) {
        return !(!ik || ik.changeTree !== ek) && (ik.prev ? ik.prev.next = ik.next : kk.next = ik.next, ik.next ? ik.next.prev = ik.prev : kk.tail = ik.prev, ek[Dk] = void 0, this.releaseNode(ik), !0)
      }
    }

    function vD(kk, ek) {
      if (-1 === ek || ek >= kk.length) return !1;
      const ik = kk.length - 1;
      for (let Dk = ek; Dk < ik; Dk++) kk[Dk] = kk[Dk + 1];
      return kk.length = ik, !0
    }

    function ED(kk, ek, ik) {
      const Dk = ~ik,
        fk = kk.changeTrees;
      for (const Sk in fk) {
        const kk = fk[Sk],
          ik = kk.visibleViews;
        void 0 !== ik && ek < ik.length && (ik[ek] &= Dk);
        const bk = kk.subscribedViews;
        void 0 !== bk && ek < bk.length && (bk[ek] &= Dk);
        const rk = kk.tagViews;
        void 0 !== rk && rk.forEach((kk => {
          ek < kk.length && (kk[ek] &= Dk)
        }))
      }
    }
    const hD = new FinalizationRegistry((kk => {
      let {
        root: ek,
        id: ik,
        slot: Dk,
        bit: fk
      } = kk;
      ED(ek, Dk, fk), ek.activeViews.delete(ik);
      for (const Sk of ek.streamTrees) Sk._dropView(ik);
      ek.releaseViewId(ik)
    }));

    function aD(kk) {
      if (void 0 === kk) return "undefined";
      if (null === kk) return "null";
      const ek = typeof kk;
      return "string" === ek ? JSON.stringify(kk.length > 30 ? `${kk.slice(0,30)}\u2026` : kk) : "object" !== ek && "function" !== ek ? `${ek} ${String(kk)}` : Array.isArray(kk) ? `Array(${kk.length})` : kk.constructor?.name ?? "Object"
    }
    class WD {
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
        void 0 === this._root && (this._root = kk, this.id = kk.acquireViewId(), this._slot = this.id >> 5, this._bit = 1 << (31 & this.id), kk.registerView(this), hD.register(this, {
          root: kk,
          id: this.id,
          slot: this._slot,
          bit: this._bit
        }, this))
      }
      dispose() {
        void 0 !== this._root && (this._root.unregisterView(this), ED(this._root, this._slot, this._bit), this._root.releaseViewId(this.id), hD.unregister(this), this._root = void 0, this.id = -1)
      }
      isVisible(kk) {
        const ek = kk.visibleViews,
          ik = this._slot;
        return void 0 !== ek && ik < ek.length && 0 !== (ek[ik] & this._bit)
      }
      markVisible(kk) {
        const ek = this._slot;
        let ik = kk.visibleViews;
        for (void 0 === ik && (ik = kk.visibleViews = []); ik.length <= ek;) ik.push(0);
        ik[ek] |= this._bit
      }
      unmarkVisible(kk) {
        const ek = kk.visibleViews;
        if (void 0 === ek) return;
        const ik = this._slot;
        ik < ek.length && (ek[ik] &= ~this._bit)
      }
      isSubscribed(kk) {
        const ek = kk.subscribedViews,
          ik = this._slot;
        return void 0 !== ek && ik < ek.length && 0 !== (ek[ik] & this._bit)
      }
      _setSubscribed(kk) {
        const ek = this._slot;
        let ik = kk.subscribedViews;
        for (void 0 === ik && (ik = kk.subscribedViews = []); ik.length <= ek;) ik.push(0);
        ik[ek] |= this._bit
      }
      _clearSubscribed(kk) {
        const ek = kk.subscribedViews;
        if (void 0 === ek) return;
        const ik = this._slot;
        ik < ek.length && (ek[ik] &= ~this._bit)
      }
      hasTagOnTree(kk, ek) {
        const ik = kk.tagViews;
        if (void 0 === ik) return !1;
        const Dk = this._slot,
          fk = this._bit;
        for (let Sk = ek; 0 !== Sk; Sk &= Sk - 1) {
          const kk = ik.get(Sk & -Sk);
          if (void 0 !== kk && Dk < kk.length && 0 !== (kk[Dk] & fk)) return !0
        }
        return !1
      }
      addTag(kk, ek) {
        if (ek === lD) return;
        let ik = kk.tagViews;
        void 0 === ik && (ik = kk.tagViews = new Map);
        const Dk = this._slot,
          fk = this._bit;
        for (let Sk = ek; Sk > 0; Sk &= Sk - 1) {
          const kk = Sk & -Sk;
          let ek = ik.get(kk);
          for (void 0 === ek && (ek = [], ik.set(kk, ek)); ek.length <= Dk;) ek.push(0);
          ek[Dk] |= fk
        }
      }
      removeTag(kk, ek) {
        if (ek === lD) return;
        const ik = kk.tagViews;
        if (void 0 === ik) return;
        const Dk = this._slot,
          fk = ~this._bit;
        for (let Sk = ek; Sk > 0; Sk &= Sk - 1) {
          const kk = ik.get(Sk & -Sk);
          void 0 !== kk && Dk < kk.length && (kk[Dk] &= fk)
        }
      }
      removeAllTagsOnTree(kk) {
        const ek = kk.tagViews;
        if (void 0 === ek) return;
        const ik = this._slot,
          Dk = ~this._bit;
        ek.forEach((kk => {
          ik < kk.length && (kk[ik] &= Dk)
        }))
      }
      add(kk) {
        let ek = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : lD,
          ik = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        return this._add(kk, ek, ik, !1)
      }
      _addImmediate(kk) {
        let ek = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : lD;
        this._add(kk, ek, !0, !0)
      }
      _add(kk, ek, ik, Dk) {
        const Sk = kk?.[Hk];
        if (!Sk) return console.warn(`StateView#add(): expected a Schema instance or collection, received ${aD(kk)}`), !1;
        const bk = Sk.parent;
        if (!bk && 0 !== kk[rk]) throw new Error(`Cannot add a detached instance to the StateView. Make sure to assign the "${Sk.ref.constructor.name}" instance to the state before calling view.add()`);
        void 0 === this._root && void 0 !== Sk.root && this._bindRoot(Sk.root);
        const Pk = bk?.[Hk];
        if (!Dk && Pk?.isStreamCollection) return ze(bk, this.id, Sk.parentIndex), !0;
        const mk = kk.constructor[Symbol.metadata],
          Mk = this.isVisible(Sk);
        if (!this.iterable || !ik || Mk && -1 !== this.items.indexOf(kk) || this.items.push(kk), this.markVisible(Sk), ik && bk && this.addParentOf(Sk, ek), !Dk && Sk.isStreamCollection) return !0;
        if (ek === lD && Sk.isNew) return this._markSubtreeVisible(Sk, ek), !1;
        let Kk = this.changes.get(kk[rk]);
        void 0 === Kk && (Kk = new Map, this.changes.set(kk[rk], Kk));
        let xk = !1;
        const nk = Sk.encDescriptor.tags;
        if (Sk.forEachChild(((kk, ik) => {
            const Dk = nk[ik];
            if (void 0 !== Dk) {
              if (!(Dk === lD || ek !== lD && 0 !== (Dk & ek))) return
            }
            this.add(kk.ref, ek, !1) && (xk = !0)
          })), ek !== lD) {
          this.addTag(Sk, ek);
          const kk = mk?.[uk];
          if (void 0 !== kk)
            for (let ik = ek; ik > 0; ik &= ik - 1) kk[ik & -ik]?.forEach((kk => {
              Sk.getChange(kk) !== fk.DELETE && Kk.set(kk, fk.ADD)
            }))
        }
        if ((ek === lD || !Mk) && (!Sk.isNew || xk))
          if (Sk.isArray && "string" !== typeof Sk.refTarget[wk]) Sk.refTarget.items.length > 0 && (Kk.set(-1, fk.ADD), xk = !0);
          else {
            const kk = Sk.encDescriptor.tags;
            Sk.forEachLive((ik => {
              const Dk = kk[ik];
              (void 0 === Dk || Dk === lD || ek !== lD && 0 !== (Dk & ek)) && (Kk.set(ik, fk.ADD), xk = !0)
            }))
          } return xk
      }
      _markSubtreeVisible(kk, ek) {
        const ik = kk.encDescriptor.tags;
        kk.forEachChild(((kk, Dk) => {
          const fk = ik[Dk];
          if (void 0 !== fk) {
            if (!(fk === lD || ek !== lD && 0 !== (fk & ek))) return
          }
          kk.isNew ? (this.markVisible(kk), this._markSubtreeVisible(kk, ek)) : this._add(kk.ref, ek, !1, !1)
        }))
      }
      addParentOf(kk, ek) {
        const ik = kk.parent[Hk],
          Dk = kk.parentIndex;
        this.isVisible(ik) || this.markVisible(ik);
        const Sk = ik.parent?.[Hk];
        if (Sk && this.addParentOf(ik, ek), ik.hasFilteredFields && ik.getChange(Dk) !== fk.DELETE) {
          let Sk = this.changes.get(ik.ref[rk]);
          void 0 === Sk && (Sk = new Map, this.changes.set(ik.ref[rk], Sk));
          const bk = ik.encDescriptor.tags[Dk];
          void 0 !== bk && bk !== lD && 0 !== (bk & ek) && this.addTag(ik, ek), Sk.set(ik.isArray ? kk : Dk, fk.ADD)
        }
      }
      _touchAncestorsOf(kk) {
        let ek = kk.parent?.[Hk];
        if (void 0 === ek) return;
        const ik = [];
        for (; void 0 !== ek;) {
          if (ek.hasFilteredFields) {
            const kk = ek.ref[rk];
            if (this.changes.has(kk)) break;
            ik.push(ek)
          }
          ek = ek.parent?.[Hk]
        }
        for (let Dk = ik.length - 1; Dk >= 0; Dk--) this.changes.set(ik[Dk].ref[rk], new Map)
      }
      remove(kk) {
        let ek = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : lD,
          ik = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        const Dk = kk?.[Hk];
        if (!Dk) return console.warn(`StateView#remove(): expected a Schema instance or collection, received ${aD(kk)}`), this;
        const Sk = Dk.parent?.[Hk];
        if (Sk?.isStreamCollection) return this.unmarkVisible(Dk), this.iterable && !ik && vD(this.items, this.items.indexOf(kk)),
          function(kk, ek, ik, Dk, Sk) {
            const bk = kk._stream;
            if (void 0 === bk) return !1;
            const rk = bk.pendingByView.get(ek);
            if (rk?.has(Dk)) return rk.delete(Dk), !1;
            const Pk = bk.sentByView.get(ek);
            if (Pk?.has(Dk)) {
              Pk.delete(Dk);
              let kk = Sk.get(ik);
              return void 0 === kk && (kk = new Map, Sk.set(ik, kk)), kk.set(Dk, fk.DELETE), !0
            }
          }(Dk.parent, this.id, Dk.parent[rk], Dk.parentIndex, this.changes), this._recursiveDeleteVisibleChangeTree(Dk), this;
        if (Dk.isStreamCollection) {
          this.unmarkVisible(Dk), this.iterable && !ik && vD(this.items, this.items.indexOf(kk));
          const ek = Dk.ref,
            Sk = ek._stream;
          if (void 0 !== Sk) {
            Sk.pendingByView.get(this.id)?.clear();
            const kk = Sk.sentByView.get(this.id);
            if (void 0 !== kk && kk.size > 0) {
              const ik = ek[rk];
              let Dk = this.changes.get(ik);
              void 0 === Dk && (Dk = new Map, this.changes.set(ik, Dk));
              for (const ek of kk) Dk.set(ek, fk.DELETE);
              kk.clear()
            }
          }
          return this
        }
        this.unmarkVisible(Dk), this.iterable && !ik && vD(this.items, this.items.indexOf(kk));
        const bk = Dk.ref,
          Pk = bk.constructor[Symbol.metadata],
          mk = bk[rk];
        this._touchAncestorsOf(Dk);
        let Mk = this.changes.get(mk);
        if (void 0 === Mk && (Mk = new Map, this.changes.set(mk, Mk)), ek === lD) {
          const kk = Dk.parent;
          if (kk && !ge.isValidInstance(kk) && Dk.isFiltered) {
            const ek = Sk.isArray ? Dk : Dk.parentIndex,
              ik = kk[rk];
            let bk = this.changes.get(ik);
            void 0 === bk ? (bk = new Map, this.changes.set(ik, bk)) : bk.get(ek) === fk.ADD && this._dropPendingEntries(Dk), bk.set(ek, fk.DELETE), this._recursiveDeleteVisibleChangeTree(Dk)
          } else Pk?.[Fk]?.forEach((kk => this._removeViewField(Dk, Mk, kk)))
        } else {
          const kk = Pk?.[uk];
          if (void 0 !== kk)
            for (let ik = ek; ik > 0; ik &= ik - 1) kk[ik & -ik]?.forEach((kk => this._removeViewField(Dk, Mk, kk)))
        }
        return void 0 === ek ? this.removeAllTagsOnTree(Dk) : this.removeTag(Dk, ek), this
      }
      has(kk) {
        return this.isVisible(kk[Hk])
      }
      hasTag(kk) {
        let ek = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : lD;
        return this.hasTagOnTree(kk[Hk], ek)
      }
      subscribe(kk, ek) {
        const ik = kk?.[Hk];
        if (!ik) return console.warn(`StateView#subscribe(): expected a Schema collection, received ${aD(kk)}`), this;
        if (void 0 === this._root && void 0 !== ik.root && this._bindRoot(ik.root), void 0 !== ek)
          if (ik.isStreamCollection) {
            const ik = Ve(kk);
            null === ek ? ik.priorityByView?.delete(this.id) : (ik.priorityByView ??= new Map).set(this.id, ek)
          } else {
            const ek = kk?.constructor?.name ?? "collection",
              Dk = ik.parent;
            if (void 0 === Dk) console.warn(`StateView#subscribe(): \`priority\` ignored \u2014 this ${ek} is not attached to a state yet, so it cannot be identified as a stream. Subscribe after assigning it to the state.`);
            else {
              const kk = Dk?.constructor?.[Symbol.metadata]?.[ik.parentIndex]?.name,
                fk = kk ? `${Dk.constructor.name}#${kk}` : ek;
              console.warn(`StateView#subscribe(): \`priority\` ignored \u2014 ${fk} is a ${ek}, not a streaming collection. Declare the field with .stream() (e.g. t.map(X).stream()) or use t.stream(X) to enable priority batching.`)
            }
          } if (this.isSubscribed(ik)) return this;
        const Dk = void 0 !== ik.parent && !this.isVisible(ik);
        if (Dk ? (this.addParentOf(ik, lD), this._add(kk, lD, !1, !1)) : this.markVisible(ik), this._setSubscribed(ik), ik.isStreamCollection) {
          const ek = kk;
          ik.forEachChild(((kk, ik) => {
            ze(ek, this.id, ik)
          }))
        } else Dk || ik.forEachChild((kk => {
          this.markVisible(kk)
        }));
        return this
      }
      unsubscribe(kk) {
        const ek = kk?.[Hk];
        if (!ek) return console.warn(`StateView#unsubscribe(): expected a Schema collection, received ${aD(kk)}`), this;
        if (!this.isSubscribed(ek)) return this;
        this._clearSubscribed(ek);
        const ik = ek.ref[rk];
        if (ek.isStreamCollection) {
          const ek = kk._stream;
          if (void 0 !== ek) {
            ek.pendingByView.get(this.id)?.clear();
            const kk = ek.sentByView.get(this.id);
            if (void 0 !== kk && kk.size > 0) {
              let ek = this.changes.get(ik);
              void 0 === ek && (ek = new Map, this.changes.set(ik, ek));
              for (const ik of kk) ek.set(ik, fk.DELETE);
              kk.clear()
            }
          }
        } else {
          const kk = ek.isArray;
          let Dk = this.changes.get(ik);
          ek.forEachChild(((ek, Sk) => {
            void 0 === Dk && (Dk = new Map, this.changes.set(ik, Dk)), Dk.set(kk ? ek : Sk, fk.DELETE), this.unmarkVisible(ek)
          }))
        }
        return this.unmarkVisible(ek), this
      }
      clear() {
        if (!this.iterable) throw new Error("StateView#clear() is only available for iterable StateView's. Use StateView(iterable: true) constructor.");
        for (let kk = 0, ek = this.items.length; kk < ek; kk++) this.remove(this.items[kk], lD, !0);
        this.items.length = 0
      }
      isChangeTreeVisible(kk) {
        let ek = this.isVisible(kk);
        if (!ek && kk.isVisibilitySharedWithParent)
          if (this.isVisible(kk.parent[Hk])) this.markVisible(kk), ek = !0;
          else
            for (let ik = kk.extraParents; void 0 !== ik; ik = ik.next) {
              const Dk = ik.ref[Hk];
              if (Dk.isFiltered && this.isVisible(Dk)) {
                this.markVisible(kk), ek = !0;
                break
              }
            }
        return ek
      }
      _recursiveDeleteVisibleChangeTree(kk) {
        kk.forEachChild((kk => {
          this.unmarkVisible(kk), this._recursiveDeleteVisibleChangeTree(kk)
        }))
      }
      _dropPendingEntries(kk) {
        this.changes.delete(kk.ref[rk]), kk.forEachChild((kk => this._dropPendingEntries(kk)))
      }
      _removeViewField(kk, ek, ik) {
        const Dk = ek.get(ik) === fk.ADD;
        ek.set(ik, fk.DELETE);
        const Sk = kk.ref[kk.encDescriptor.names[ik]],
          bk = Sk?.[Hk];
        bk && (this.unmarkVisible(bk), this._recursiveDeleteVisibleChangeTree(bk), Dk && this._dropPendingEntries(bk))
      }
    }

    function tD(kk) {
      kk.structSwitchEmitted || (kk.shouldEmitSwitch && (kk.buffer[kk.it.offset++] = 255, ie.number(kk.buffer, kk.ref[rk], kk.it)), kk.structSwitchEmitted = !0)
    }

    function XD(kk, ek) {
      TD(kk, ek, fk.ADD)
    }

    function BD(kk, ek) {
      if (ek._fullSyncGen === kk.gen) return;
      ek._fullSyncGen = kk.gen;
      if (!kk.hasView || kk.view.isChangeTreeVisible(ek)) {
        const ik = ek.encDescriptor;
        kk.changeTree = ek, kk.ref = ek.ref, kk.encoder = ik.encoder, kk.filter = ik.filter, kk.metadata = ik.metadata, kk.treeIsFiltered = ek.isFiltered, kk.isSchema = ik.isSchema, kk.filterBitmask = ik.filterBitmask, kk.tags = ik.tags, kk.structSwitchEmitted = !1, kk.shouldEmitSwitch = kk.hasView || kk.it.offset > kk.initialOffset || ek !== kk.rootChangeTree, ek.isArray && ek.collDirty.size > 0 && (ek.flags |= 512), Si(ek, kk, XD)
      }
      yi(ek, kk, cD)
    }

    function cD(kk, ek, ik) {
      BD(kk, ek)
    }

    function TD(kk, ek, ik) {
      if (ek < 0) {
        if (kk.treeIsFiltered !== kk.emitFiltered) return;
        return tD(kk), void(kk.buffer[kk.it.offset++] = 255 & Math.abs(ek))
      }
      if ((kk.isSchema ? kk.treeIsFiltered || (ek < 32 ? 0 !== (kk.filterBitmask & 1 << ek) : void 0 !== kk.tags[ek]) : kk.treeIsFiltered) !== kk.emitFiltered) return;
      const Dk = kk.isEncodeAll ? fk.ADD : ik;
      void 0 !== Dk && (void 0 === kk.filter || kk.filter(kk.ref, ek, kk.view)) && (tD(kk), kk.encoder(kk.self, kk.buffer, kk.changeTree, ek, Dk, kk.it, kk.isEncodeAll, kk.hasView, kk.metadata))
    }

    function oD(kk, ek) {
      const ik = new Uint8Array(kk.length + ek.length);
      return ik.set(kk, 0), ik.set(ek, kk.length), ik
    }
    class ZD {
      static BUFFER_SIZE = 16384;
      sharedBuffer = new Uint8Array(ZD.BUFFER_SIZE);
      context;
      state;
      root;
      constructor(kk, ek) {
        this.context = Xe.cache(kk.constructor), this.root = ek ?? new QD(this.context), this.setState(kk)
      }
      setState(kk) {
        this.state = kk, this.state[Hk].setRoot(this.root)
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
          ek = arguments.length > 1 ? arguments[1] : void 0,
          ik = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : this.sharedBuffer,
          Dk = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : kk.offset;
        return this._encodeChannel(kk, ek, ik, Dk, !1)
      }
      encodeUnreliable() {
        let kk = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
            offset: 0
          },
          ek = arguments.length > 1 ? arguments[1] : void 0,
          ik = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : this.sharedBuffer,
          Dk = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : kk.offset;
        return this._encodeChannel(kk, ek, ik, Dk, !0)
      }
      _encodeChannel(kk, ek, ik, Dk, fk) {
        this.root.pendingFilterRefresh.length > 0 && ri(this.root);
        const Sk = void 0 !== ek,
          bk = this.state[Hk],
          rk = this._encodeCtx;
        rk.self = this, rk.buffer = ik, rk.it = kk, rk.view = ek, rk.isEncodeAll = !1, rk.hasView = Sk, rk.emitFiltered = Sk;
        let Pk = fk ? this.root.unreliableChanges : this.root.changes;
        for (; Pk = Pk.next;) {
          const ik = Pk.changeTree;
          if (Sk && !ek.isChangeTreeVisible(ik)) continue;
          const mk = fk ? ik.unreliableRecorder : ik;
          if (!mk || !mk.has()) continue;
          const Mk = ik.encDescriptor;
          rk.changeTree = ik, rk.ref = ik.ref, rk.encoder = Mk.encoder, rk.filter = Mk.filter, rk.metadata = Mk.metadata, rk.treeIsFiltered = ik.isFiltered, rk.isSchema = Mk.isSchema, rk.filterBitmask = Mk.filterBitmask, rk.tags = Mk.tags, rk.structSwitchEmitted = !1, rk.isRootTree = ik === bk, rk.shouldEmitSwitch = Sk || kk.offset > Dk || !rk.isRootTree, mk.forEachWithCtx(rk, TD)
        }
        return fk || Sk || !this._isStreamBroadcastMode || this._emitStreamBroadcast(ik, kk), kk.offset > ik.byteLength ? (ik = this._resizeBuffer(ik, kk.offset), kk.offset = Dk, this._encodeChannel(kk, ek, ik, Dk, fk)) : ik.subarray(0, kk.offset)
      }
      encodeFullSync(kk, ek, ik, Dk) {
        let fk = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : kk.offset;
        this.root.pendingFilterRefresh.length > 0 && ri(this.root);
        const Sk = void 0 !== Dk,
          bk = this.state[Hk],
          rk = this._encodeCtx;
        return rk.self = this, rk.buffer = ek, rk.it = kk, rk.view = Dk, rk.isEncodeAll = !0, rk.hasView = Sk, rk.emitFiltered = ik, rk.gen = ++this._fullSyncGen, rk.initialOffset = fk, rk.rootChangeTree = bk, BD(rk, bk), kk.offset > ek.byteLength ? (ek = this._resizeBuffer(ek, kk.offset), kk.offset = fk, this.encodeFullSync(kk, ek, ik, Dk, fk)) : ek.subarray(0, kk.offset)
      }
      _resizeBuffer(kk, ek) {
        const ik = Math.ceil(ek / ZD.BUFFER_SIZE) * ZD.BUFFER_SIZE,
          Dk = new Uint8Array(ik);
        return Dk.set(kk), kk === this.sharedBuffer && (this.sharedBuffer = Dk), Dk
      }
      encodeAll() {
        let kk = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
            offset: 0
          },
          ek = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.sharedBuffer;
        return this.encodeFullSync(kk, ek, !1)
      }
      encodeAllView(kk, ek, ik) {
        let Dk = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : this.sharedBuffer;
        const fk = ik.offset;
        return Dk = this.encodeFullSync(ik, Dk, !0, kk, fk), oD(Dk.subarray(0, ek), Dk.subarray(fk, ik.offset))
      }
      ensureCapacity(kk, ek) {
        if (ek + ZD.BUFFER_SIZE <= kk.byteLength) return kk;
        const ik = Math.ceil((ek + ZD.BUFFER_SIZE) / ZD.BUFFER_SIZE) * ZD.BUFFER_SIZE,
          Dk = new Uint8Array(ik);
        return Dk.set(kk.subarray(0, ek)), kk === this.sharedBuffer && (this.sharedBuffer = Dk), Dk
      }
      encodeView(kk, ek, ik) {
        let Dk = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : this.sharedBuffer,
          Sk = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4];
        const bk = ik.offset;
        this._emitStreamPriority(kk);
        for (const Pk of kk.changes.keys()) {
          const ek = kk.changes.get(Pk),
            Sk = this.root.changeTrees[Pk];
          if (void 0 === Sk) {
            kk.changes.delete(Pk);
            continue
          }
          if (0 === ek.size) continue;
          const bk = Sk.encDescriptor,
            mk = bk.encoder,
            Mk = bk.metadata,
            Kk = Sk.ref,
            nk = Sk.refTarget;
          Dk = this.ensureCapacity(Dk, ik.offset), Dk[ik.offset++] = 255, ie.number(Dk, Kk[rk], ik);
          for (const [Pk, Uk] of ek) {
            let ek;
            if (-1 === Pk) {
              const kk = nk.tmpItems,
                ek = nk.deletedIndexes;
              for (let bk = 0; bk < kk.length; bk++) void 0 !== kk[bk] && !0 !== ek[bk] && mk(this, Dk, Sk, bk, fk.ADD, ik, !1, !0, Mk);
              continue
            }
            if ("number" === typeof Pk) ek = Pk;
            else {
              const ik = Pk.indexInParent(Kk);
              if (void 0 === ik) continue;
              if (ek = ik, Uk === fk.ADD && Sk.getChange(ek) === fk.DELETE) {
                kk.changes.delete(Pk.ref[rk]);
                continue
              }
            }
            mk(this, Dk, Sk, ek, void 0 !== nk[xk](ek) && Uk || fk.DELETE, ik, !1, !0, Mk)
          }
        }
        return kk.changes.clear(), Dk = this.encode(ik, kk, Dk), Sk ? oD(Dk.subarray(0, ek), Dk.subarray(bk, ik.offset)) : Dk.subarray(bk, ik.offset)
      }
      encodeUnreliableView(kk, ek, ik) {
        let Dk = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : this.sharedBuffer;
        const fk = ik.offset;
        return Dk = this.encodeUnreliable(ik, kk, Dk, fk), oD(Dk.subarray(0, ek), Dk.subarray(fk, ik.offset))
      }
      _emitStreamBroadcast(kk, ek) {
        const ik = this.root.streamTrees;
        for (const Dk of ik) {
          const ik = Dk,
            Sk = ik[Hk],
            bk = ik[rk];
          if (void 0 === bk) continue;
          const Pk = ik._stream,
            mk = Pk.broadcastDeletes,
            Mk = Pk.broadcastPending,
            Kk = Pk.sentBroadcast,
            nk = mk.size > 0,
            Uk = Mk.size > 0,
            wk = Sk.encDescriptor,
            lk = wk.encoder,
            pk = wk.metadata;
          if (nk || Uk) {
            if (kk[ek.offset++] = 255, ie.number(kk, bk, ek), nk) {
              for (const ik of mk) lk(this, kk, Sk, ik, fk.DELETE, ek, !1, !1, pk);
              mk.clear()
            }
            const Dk = Pk.maxPerTick,
              Uk = [];
            let wk = 0;
            const yk = [];
            for (const bk of Mk) {
              if (wk >= Dk) break;
              const rk = ik[xk](bk);
              void 0 !== rk ? (lk(this, kk, Sk, bk, fk.ADD, ek, !1, !1, pk), Kk.add(bk), Uk.push(rk), yk.push(bk), wk++) : yk.push(bk)
            }
            for (const kk of yk) Mk.delete(kk);
            for (const ik of Uk) {
              const Dk = ik[Hk];
              if (void 0 === Dk) continue;
              const Sk = ik[rk];
              if (void 0 === Sk) continue;
              kk[ek.offset++] = 255, ie.number(kk, Sk, ek);
              const bk = Dk.encDescriptor,
                Pk = bk.encoder,
                mk = bk.metadata;
              Dk.forEachLive((ik => {
                ge.hasUnreliableAtIndex(mk, ik) || Pk(this, kk, Dk, ik, fk.ADD, ek, !1, !1, mk)
              }))
            }
          }
          for (const Dk of Kk) {
            const fk = ik[xk](Dk);
            if (void 0 === fk) continue;
            const Sk = fk[Hk];
            if (void 0 === Sk || !Sk.has()) continue;
            const bk = fk[rk];
            if (void 0 === bk) continue;
            kk[ek.offset++] = 255, ie.number(kk, bk, ek);
            const Pk = Sk.encDescriptor,
              mk = Pk.encoder,
              Mk = Pk.metadata;
            Sk.forEach(((ik, Dk) => {
              ik < 0 || ge.hasUnreliableAtIndex(Mk, ik) || mk(this, kk, Sk, ik, Dk, ek, !1, !1, Mk)
            }))
          }
        }
      }
      _emitStreamPriority(kk) {
        const ek = this.root.streamTrees;
        if (0 === ek.size) return;
        const ik = kk.id;
        for (const Dk of ek) {
          const ek = Dk,
            Sk = ek._stream,
            bk = Sk.pendingByView.get(ik);
          if (void 0 === bk || 0 === bk.size) continue;
          const Pk = Sk.priorityByView?.get(ik),
            mk = void 0 !== Pk,
            Mk = Sk.priority,
            Kk = Sk.maxPerTick,
            nk = [],
            Uk = [];
          if (mk || void 0 !== Mk) {
            const ik = [],
              Dk = [];
            let fk = 0;
            for (const Sk of bk) {
              const bk = ek[xk](Sk);
              if (void 0 === bk) {
                Uk.push(Sk);
                continue
              }
              const rk = mk ? Pk(bk) : Mk(kk, bk);
              if (fk < Kk) {
                let kk = fk++;
                for (; kk > 0 && Dk[kk - 1] < rk;) Dk[kk] = Dk[kk - 1], ik[kk] = ik[kk - 1], kk--;
                Dk[kk] = rk, ik[kk] = Sk
              } else if (rk > Dk[Kk - 1]) {
                let kk = Kk - 1;
                for (; kk > 0 && Dk[kk - 1] < rk;) Dk[kk] = Dk[kk - 1], ik[kk] = ik[kk - 1], kk--;
                Dk[kk] = rk, ik[kk] = Sk
              }
            }
            for (let kk = 0; kk < fk; kk++) nk.push(ik[kk])
          } else
            for (const kk of bk) {
              if (nk.length >= Kk) break;
              nk.push(kk)
            }
          for (const kk of Uk) bk.delete(kk);
          const wk = nk.length;
          let lk = Sk.sentByView.get(ik);
          void 0 === lk && (lk = new Set, Sk.sentByView.set(ik, lk));
          for (let ik = 0; ik < wk; ik++) {
            const Dk = nk[ik],
              Sk = ek[xk](Dk);
            if (void 0 === Sk) {
              bk.delete(Dk);
              continue
            }
            kk._addImmediate(Sk);
            const Pk = Sk[Hk];
            if (void 0 !== Pk) {
              const ek = Sk[rk];
              let ik = kk.changes.get(ek);
              void 0 === ik && (ik = new Map, kk.changes.set(ek, ik));
              const Dk = Pk.metadata;
              Pk.forEachLive((kk => {
                ge.hasUnreliableAtIndex(Dk, kk) || ik.set(kk, fk.ADD)
              }))
            }
            bk.delete(Dk), lk.add(Dk)
          }
        }
      }
      discardChanges() {
        const kk = this.root.changes;
        let ek = kk.next;
        const ik = this.root;
        for (; ek;) {
          const kk = ek.next;
          ek.changeTree.endEncode(), ik.releaseNode(ek), ek = kk
        }
        kk.next = void 0, kk.tail = void 0
      }
      discardUnreliableChanges() {
        const kk = this.root.unreliableChanges;
        let ek = kk.next;
        const ik = this.root;
        for (; ek;) {
          const kk = ek.next;
          ek.changeTree.endEncodeUnreliable(), ik.releaseNode(ek), ek = kk
        }
        kk.next = void 0, kk.tail = void 0
      }
      tryEncodeTypeId(kk, ek, ik, Dk) {
        const fk = this.context.getTypeId(ek),
          Sk = this.context.getTypeId(ik);
        void 0 !== Sk ? fk !== Sk && (kk[Dk.offset++] = 213, ie.number(kk, Sk, Dk)) : console.warn(`@colyseus/schema WARNING: Class "${ik.name}" is not registered on TypeRegistry - Please either tag the class with @entity or define a @type() field.`)
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
        const ek = 0 === kk.activeViews.size;
        for (const ik of kk.streamTrees)
          if (ek ? Ie(ik) : qe(ik, kk)) return !0;
        return !1
      }
      get hasUnreliableChanges() {
        return void 0 !== this.root.unreliableChanges.next
      }
    }
    class OD extends Error {
      constructor(kk) {
        super(kk), this.name = "DecodingWarning"
      }
    }
    const gD = {
      value: 0,
      enumerable: !1,
      writable: !0
    };
    class GD {
      refs = new Map;
      refCount = {};
      deletedRefs = new Set;
      callbacks = {};
      nextUniqueId = 0;
      getNextUniqueId() {
        return this.nextUniqueId++
      }
      addRef(kk, ek) {
        let ik = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        this.refs.set(kk, ek), void 0 === ek[rk] ? (gD.value = kk, Object.defineProperty(ek, rk, gD)) : ek[rk] !== kk && (ek[rk] = kk), ik && (this.refCount[kk] = (this.refCount[kk] || 0) + 1), this.deletedRefs.has(kk) && this.deletedRefs.delete(kk)
      }
      removeRef(kk) {
        const ek = this.refCount[kk];
        if (void 0 !== ek)
          if (0 !== ek)(this.refCount[kk] = ek - 1) <= 0 && this.deletedRefs.add(kk);
          else try {
            const ek = this.refs.get(kk);
            throw new OD(`trying to remove refId '${kk}' with 0 refCount (${ek.constructor.name}: ${JSON.stringify(ek)})`)
          } catch (mf) {
            console.warn(mf)
          } else try {
            throw new OD("trying to remove refId that doesn't exist: " + kk)
          } catch (mf) {
            console.warn(mf)
          }
      }
      clearRefs() {
        this.refs.clear(), this.deletedRefs.clear(), this.callbacks = {}, this.refCount = {}
      }
      garbageCollectDeletedRefs() {
        this.deletedRefs.forEach((kk => {
          if (this.refCount[kk] > 0) return;
          const ek = this.refs.get(kk),
            ik = ek.constructor[Symbol.metadata];
          if (null != ik)
            for (const Dk in ik) {
              const kk = ek[ik[Dk].name];
              if ("object" === typeof kk && kk) {
                const ek = kk[rk];
                void 0 === ek || this.deletedRefs.has(ek) || this.removeRef(ek)
              }
            } else "function" === typeof ek[wk] && Array.from(ek.values()).forEach((kk => {
              const ek = kk[rk];
              void 0 === ek || this.deletedRefs.has(ek) || this.removeRef(ek)
            }));
          this.refs.delete(kk), delete this.refCount[kk], delete this.callbacks[kk]
        })), this.deletedRefs.clear()
      }
      addCallback(kk, ek, ik) {
        if (void 0 === kk) {
          const kk = "number" === typeof ek ? fk[ek] : ek;
          throw new Error(`Can't addCallback on '${kk}' (refId is undefined)`)
        }
        return this.callbacks[kk] || (this.callbacks[kk] = {}), this.callbacks[kk][ek] || (this.callbacks[kk][ek] = []), this.callbacks[kk][ek].push(ik), () => this.removeCallback(kk, ek, ik)
      }
      removeCallback(kk, ek, ik) {
        const Dk = this.callbacks?.[kk]?.[ek]?.indexOf(ik);
        void 0 !== Dk && -1 !== Dk && vD(this.callbacks[kk][ek], Dk)
      }
    }
    class ND {
      context;
      state;
      root;
      currentRefId = 0;
      lF;
      resyncVisited = null;
      resyncDamaged = !1;
      constructor(kk, ek) {
        this.setState(kk), this.context = ek || new Xe(kk.constructor)
      }
      setState(kk) {
        this.state = kk, this.root = new GD, this.root.addRef(0, kk)
      }
      decode(kk) {
        let ek = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
            offset: 0
          },
          ik = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : this.state;
        const fk = void 0 !== this.lF ? [] : null,
          Sk = this.root,
          bk = kk.byteLength;
        let rk = ik.constructor[Mk];
        for (this.currentRefId = 0; ek.offset < bk;) {
          if (kk[ek.offset] == Dk) {
            ek.offset++, ik[Yk]?.();
            const Dk = Ye.number(kk, ek),
              fk = Sk.refs.get(Dk);
            fk ? (ik = fk, rk = ik.constructor[Mk], this.currentRefId = Dk) : (console.error(`"refId" not found: ${Dk}`, {
              previousRef: ik,
              previousRefId: this.currentRefId
            }), console.warn("Please report this issue to the developers."), this.skipCurrentStructure(kk, ek, bk));
            continue
          } - 1 !== rk(this, kk, ek, ik, fk) || (console.warn("@colyseus/schema: definition mismatch"), this.skipCurrentStructure(kk, ek, bk))
        }
        return ik[Yk]?.(), null !== this.resyncVisited && function(kk, ek) {
          kk.resyncDamaged ? console.warn("@colyseus/schema: resync sweep skipped \u2014 parts of the payload could not be decoded. Stale entries may persist until the next resync.") : ci(kk, kk.state, new Set, ek)
        }(this, fk), null !== fk && this.lF?.(fk), Sk.garbageCollectDeletedRefs(), fk
      }
      decodeResync(kk) {
        let ek = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
          offset: 0
        };
        this.resyncVisited = new Map, this.resyncDamaged = !1;
        try {
          return this.decode(kk, ek)
        } finally {
          this.resyncVisited = null
        }
      }
      skipCurrentStructure(kk, ek, ik) {
        null !== this.resyncVisited && (this.resyncDamaged = !0);
        const fk = {
          offset: ek.offset
        };
        for (; ek.offset < ik && (kk[ek.offset] !== Dk || (fk.offset = ek.offset + 1, !this.root.refs.has(Ye.number(kk, fk))));) ek.offset++
      }
      getInstanceType(kk, ek, ik) {
        let Dk;
        if (213 === kk[ek.offset]) {
          ek.offset++;
          const ik = Ye.number(kk, ek);
          Dk = this.context.get(ik)
        }
        return Dk || ik
      }
      createInstanceOfType(kk) {
        return kk.initializeForDecoder()
      }
      removeChildRefs(kk, ek) {
        const ik = "string" !== typeof kk[wk],
          Dk = kk[rk];
        kk.forEach(((Sk, bk) => {
          ek?.push({
            ref: kk,
            refId: Dk,
            op: fk.DELETE,
            field: bk,
            value: void 0,
            previousValue: Sk
          }), ik && this.root.removeRef(Sk[rk])
        }))
      }
    }
    const RD = uD({
        min: wD.float64(),
        max: wD.float64(),
        bits: wD.uint8(),
        mode: wD.uint8()
      }, "QuantizedDescriptor"),
      JD = uD({
        name: wD.string(),
        type: wD.string(),
        referencedType: wD.number(),
        childPrimitive: wD.string(),
        quantized: wD.ref(RD).optional()
      }, "ReflectionField"),
      kf = uD({
        id: wD.number(),
        extendsId: wD.number(),
        fields: wD.array(JD)
      }, "ReflectionType"),
      ef = uD({
        types: wD.array(kf),
        rootType: wD.number()
      }, "Reflection");

    function Df(kk) {
      const ek = kk.root,
        ik = ek.callbacks,
        Dk = new WeakMap;
      let Sk;

      function bk(kk, ik) {
        let mk = ik.instance?.constructor[Symbol.metadata] || kk,
          Mk = ik.instance && "function" === typeof ik.instance.forEach || kk && !ID.is(kk);
        if (mk && !Mk) {
          const kk = function(kk, fk, bk, Pk) {
            return Pk && void 0 !== ik.instance[fk] && !Dk.has(Sk) && bk(ik.instance[fk], void 0), ek.addCallback(kk[rk], fk, bk)
          };
          return new Proxy({
            listen: function(ek, fk) {
              let bk = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
              if (ik.instance) return kk(ik.instance, ek, fk, bk);
              {
                let rk = () => {};
                return ik.onInstanceAvailable(((ik, Pk) => {
                  rk = kk(ik, ek, fk, bk && Pk && !Dk.has(Sk))
                })), () => rk()
              }
            },
            onChange: function(kk) {
              return ek.addCallback(ik.instance[rk], fk.REPLACE, kk)
            },
            bindTo: function(kk, Dk) {
              return Dk || (Dk = Object.keys(mk).map((kk => mk[kk].name))), ek.addCallback(ik.instance[rk], fk.REPLACE, (() => {
                Dk.forEach((ek => kk[ek] = ik.instance[ek]))
              }))
            }
          }, {
            get(kk, ek) {
              const Dk = mk[mk[ek]];
              if (Dk) {
                const kk = ik.instance?.[ek],
                  fk = Dk => {
                    const fk = Pk(ik.instance).listen(ek, ((kk, ek) => {
                      Dk(kk, !1), fk?.()
                    }), !1);
                    void 0 !== kk?.[rk] && Dk(kk, !0)
                  };
                return bk(Dk.type, {
                  instance: void 0 !== kk?.[rk] && kk,
                  parentInstance: ik.instance,
                  onInstanceAvailable: fk
                })
              }
              return kk[ek]
            },
            has: (kk, ek) => void 0 !== mk[ek],
            set(kk, ek, ik) {
              throw new Error("not allowed")
            },
            deleteProperty(kk, ek) {
              throw new Error("not allowed")
            }
          })
        } {
          const kk = function(kk, ik, bk) {
              return bk && kk.forEach(((kk, ek) => ik(kk, ek))), ek.addCallback(kk[rk], fk.ADD, ((kk, ek) => {
                Dk.set(ik, !0), Sk = ik, ik(kk, ek), Dk.delete(ik), Sk = void 0
              }))
            },
            bk = function(kk, ik) {
              return ek.addCallback(kk[rk], fk.DELETE, ik)
            },
            Pk = function(kk, ik) {
              return ek.addCallback(kk[rk], fk.REPLACE, ik)
            };
          return new Proxy({
            rY: function(ek) {
              let fk = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
              if (ik.instance) return kk(ik.instance, ek, fk && !Dk.has(Sk));
              if (ik.onInstanceAvailable) {
                let bk = () => {};
                return ik.onInstanceAvailable(((ik, rk) => {
                  bk = kk(ik, ek, fk && rk && !Dk.has(Sk))
                })), () => bk()
              }
            },
            oV: function(kk) {
              if (ik.instance) return bk(ik.instance, kk);
              if (ik.onInstanceAvailable) {
                let ek = () => {};
                return ik.onInstanceAvailable((ik => {
                  ek = bk(ik, kk)
                })), () => ek()
              }
            },
            onChange: function(kk) {
              if (ik.instance) return Pk(ik.instance, kk);
              if (ik.onInstanceAvailable) {
                let ek = () => {};
                return ik.onInstanceAvailable((ik => {
                  ek = Pk(ik, kk)
                })), () => ek()
              }
            }
          }, {
            get(kk, ek) {
              if (!kk[ek]) throw new Error(`Can't access '${ek}' through callback proxy. access the instance directly.`);
              return kk[ek]
            },
            has: (kk, ek) => void 0 !== kk[ek],
            set(kk, ek, ik) {
              throw new Error("not allowed")
            },
            deleteProperty(kk, ek) {
              throw new Error("not allowed")
            }
          })
        }
      }

      function Pk(kk) {
        return bk(void 0, {
          instance: kk
        })
      }
      return kk.lF = function(kk) {
        const ek = new Set;
        for (let Dk = 0, Sk = kk.length; Dk < Sk; Dk++) {
          const Sk = kk[Dk],
            bk = Sk.refId,
            Pk = Sk.ref,
            mk = ik[bk];
          if (mk) {
            if ((Sk.op & fk.DELETE) === fk.DELETE && ID.isSchema(Sk.previousValue)) {
              const kk = ik[Sk.previousValue[rk]]?.[fk.DELETE];
              for (let ek = kk?.length - 1; ek >= 0; ek--) kk[ek]()
            }
            if (ID.isSchema(Pk)) {
              if (!ek.has(bk)) {
                const kk = mk?.[fk.REPLACE];
                for (let ek = kk?.length - 1; ek >= 0; ek--) kk[ek]()
              }
              if (mk.hasOwnProperty(Sk.field)) {
                const kk = mk[Sk.field];
                for (let ek = kk?.length - 1; ek >= 0; ek--) kk[ek](Sk.value, Sk.previousValue)
              }
            } else {
              if ((Sk.op & fk.DELETE) === fk.DELETE) {
                if (void 0 !== Sk.previousValue) {
                  const kk = mk[fk.DELETE];
                  for (let ek = kk?.length - 1; ek >= 0; ek--) kk[ek](Sk.previousValue, Sk.dynamicIndex ?? Sk.field)
                }
                if ((Sk.op & fk.ADD) === fk.ADD) {
                  const kk = mk[fk.ADD];
                  for (let ek = kk?.length - 1; ek >= 0; ek--) kk[ek](Sk.value, Sk.dynamicIndex ?? Sk.field)
                }
              } else if ((Sk.op & fk.ADD) === fk.ADD && Sk.previousValue !== Sk.value) {
                const kk = mk[fk.ADD];
                for (let ek = kk?.length - 1; ek >= 0; ek--) kk[ek](Sk.value, Sk.dynamicIndex ?? Sk.field)
              }
              if (Sk.value !== Sk.previousValue && (void 0 !== Sk.value || void 0 !== Sk.previousValue)) {
                const kk = mk[fk.REPLACE];
                for (let ek = kk?.length - 1; ek >= 0; ek--) kk[ek](Sk.value, Sk.dynamicIndex ?? Sk.field)
              }
            }
            ek.add(bk)
          }
        }
      }, Pk
    }

    function ff(kk, ek) {
      kk.lF = ek
    }
    ef.encode = function(kk) {
      let ek = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
        offset: 0
      };
      const ik = kk.context,
        Dk = new ef,
        fk = new ZD(Dk),
        Sk = ik.schemas.get(kk.state.constructor);
      Sk > 0 && (Dk.rootType = Sk);
      const bk = new Set,
        rk = {},
        Pk = kk => {
          if (void 0 === kk.extendsId || bk.has(kk.extendsId)) {
            bk.add(kk.id), Dk.types.push(kk);
            const ek = rk[kk.id];
            void 0 !== ek && (delete rk[kk.id], ek.forEach((kk => Pk(kk))))
          } else void 0 === rk[kk.extendsId] && (rk[kk.extendsId] = []), rk[kk.extendsId].push(kk)
        };
      ik.schemas.forEach(((kk, ek) => {
        const Dk = new kf;
        Dk.id = Number(kk);
        const fk = Object.getPrototypeOf(ek);
        fk !== ID && (Dk.extendsId = ik.schemas.get(fk));
        const Sk = ek[Symbol.metadata];
        if (Sk !== fk[Symbol.metadata]) {
          const kk = Sk[dk] ?? -1;
          for (let ek = 0; ek <= kk; ek++) {
            const kk = Sk[ek];
            if (void 0 === kk) continue;
            const fk = kk.name;
            if (!Object.prototype.hasOwnProperty.call(Sk, fk)) continue;
            const bk = new JD;
            let rk;
            if (bk.name = fk, "string" === typeof kk.type) rk = kk.type;
            else if (he(kk.type)) {
              const ek = kk.type.quantized;
              rk = "quantized";
              const ik = new RD;
              ik.min = ek.min, ik.max = ek.max, ik.bits = ek.bits, ik.mode = ek.wrap ? 1 : 0, bk.quantized = ik
            } else {
              let ek;
              ID.is(kk.type) ? (rk = "ref", ek = kk.type) : (rk = Object.keys(kk.type)[0], "string" === typeof kk.type[rk] ? bk.childPrimitive = kk.type[rk] : ek = kk.type[rk]), bk.referencedType = ek ? ik.getTypeId(ek) : -1
            }
            bk.type = rk, Dk.fields.push(bk)
          }
        }
        Pk(Dk)
      }));
      for (const mk in rk) rk[mk].forEach((kk => Dk.types.push(kk)));
      return fk.encodeAll(ek).slice(0, ek.offset)
    }, ef.decode = function(kk, ek) {
      const ik = new ef;
      new ND(ik).decode(kk, ek);
      const Dk = new Xe;
      ik.types.forEach((kk => {
        const ek = Dk.get(kk.extendsId) ?? ID,
          ik = class extends ek {};
        Xe.register(ik), Dk.add(ik, kk.id)
      }), {});
      ik.types.forEach((kk => {
        const ek = Dk.get(kk.id),
          fk = ge.initialize(ek),
          Sk = [];
        let bk = kk;
        do {
          Sk.push(bk), bk = ik.types.find((kk => kk.id === bk.extendsId))
        } while (bk);
        let rk = 0;
        Sk.reverse().forEach((kk => {
          ((kk, ek, ik) => {
            ek.fields.forEach(((ek, fk) => {
              const Sk = ik + fk;
              if (void 0 !== ek.quantized) {
                const ik = ek.quantized;
                ge.addField(kk, Sk, ek.name, {
                  quantized: Ee({
                    min: ik.min,
                    max: ik.max,
                    bits: ik.bits,
                    mode: 1 === ik.mode ? "wrap" : "clamp"
                  })
                })
              } else if (void 0 !== ek.referencedType) {
                const ik = ek.type,
                  fk = Dk.get(ek.referencedType) ?? ek.childPrimitive;
                "ref" === ik ? ge.addField(kk, Sk, ek.name, fk) : ge.addField(kk, Sk, ek.name, {
                  [ik]: fk
                })
              } else ge.addField(kk, Sk, ek.name, ek.type)
            }))
          })(fk, kk, rk), rk += kk.fields.length
        }))
      }));
      const fk = new(Dk.get(ik.rootType || 0));
      return new ND(fk, Dk)
    }, ef.makeEncodable = function(kk) {
      const ek = kk[Symbol.metadata];
      if (!ek) return kk;
      const ik = ek[dk];
      if (void 0 === ik) return kk;
      for (let Dk = 0; Dk <= ik; Dk++) {
        const ik = ek[Dk];
        ik && ge.defineField(kk, ek, Dk, ik.name, ik.type)
      }
      return Object.prototype.hasOwnProperty.call(kk, jk) && delete kk[jk], kk
    };
    class Sf {
      dU;
      uniqueRefIds = new Set;
      isTriggering = !1;
      constructor(kk) {
        this.dU = kk, this.dU.lF = this.lF.bind(this)
      }
      get callbacks() {
        return this.dU.root.callbacks
      }
      get state() {
        return this.dU.state
      }
      addCallback(kk, ek, ik) {
        return this.dU.root.addCallback(kk, ek, ik)
      }
      addCallbackOrWaitCollectionAvailable(kk, ek, ik, Dk) {
        let Sk = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4],
          bk = () => {};
        const Pk = () => bk(),
          mk = kk[ek];
        if (mk && void 0 !== mk[rk]) return Sk = Sk && !1 === this.isTriggering, ik === fk.ADD && Sk && mk.forEach(((kk, ek) => {
          Dk(kk, ek)
        })), this.addCallback(mk[rk], ik, Dk);
        {
          let fk;
          return fk = this.addCallback(kk[rk], ek, ((kk, ek) => {
            null !== kk && void 0 !== kk && (fk(), bk = this.addCallback(kk[rk], ik, Dk))
          })), bk = fk, Pk
        }
      }
      listen() {
        return "string" === typeof(arguments.length <= 0 ? void 0 : arguments[0]) ? this.listenInstance(this.state, arguments.length <= 0 ? void 0 : arguments[0], arguments.length <= 1 ? void 0 : arguments[1], arguments.length <= 2 ? void 0 : arguments[2]) : this.listenInstance(arguments.length <= 0 ? void 0 : arguments[0], arguments.length <= 1 ? void 0 : arguments[1], arguments.length <= 2 ? void 0 : arguments[2], arguments.length <= 3 ? void 0 : arguments[3])
      }
      listenInstance(kk, ek, ik) {
        let Dk = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
        Dk = Dk && !1 === this.isTriggering;
        const fk = kk[ek];
        return Dk && null !== fk && void 0 !== fk && ik(fk, void 0), this.addCallback(kk[rk], ek, ik)
      }
      onChange() {
        if (2 === arguments.length && "string" !== typeof(arguments.length <= 0 ? void 0 : arguments[0])) {
          const kk = arguments.length <= 0 ? void 0 : arguments[0],
            ek = arguments.length <= 1 ? void 0 : arguments[1];
          return this.addCallback(kk[rk], fk.REPLACE, ek)
        }
        return "string" === typeof(arguments.length <= 0 ? void 0 : arguments[0]) ? this.addCallbackOrWaitCollectionAvailable(this.state, arguments.length <= 0 ? void 0 : arguments[0], fk.REPLACE, arguments.length <= 1 ? void 0 : arguments[1]) : this.addCallbackOrWaitCollectionAvailable(arguments.length <= 0 ? void 0 : arguments[0], arguments.length <= 1 ? void 0 : arguments[1], fk.REPLACE, arguments.length <= 2 ? void 0 : arguments[2])
      }
      rY() {
        return "string" === typeof(arguments.length <= 0 ? void 0 : arguments[0]) ? this.addCallbackOrWaitCollectionAvailable(this.state, arguments.length <= 0 ? void 0 : arguments[0], fk.ADD, arguments.length <= 1 ? void 0 : arguments[1], !1 !== (arguments.length <= 2 ? void 0 : arguments[2])) : this.addCallbackOrWaitCollectionAvailable(arguments.length <= 0 ? void 0 : arguments[0], arguments.length <= 1 ? void 0 : arguments[1], fk.ADD, arguments.length <= 2 ? void 0 : arguments[2], !1 !== (arguments.length <= 3 ? void 0 : arguments[3]))
      }
      oV() {
        return "string" === typeof(arguments.length <= 0 ? void 0 : arguments[0]) ? this.addCallbackOrWaitCollectionAvailable(this.state, arguments.length <= 0 ? void 0 : arguments[0], fk.DELETE, arguments.length <= 1 ? void 0 : arguments[1]) : this.addCallbackOrWaitCollectionAvailable(arguments.length <= 0 ? void 0 : arguments[0], arguments.length <= 1 ? void 0 : arguments[1], fk.DELETE, arguments.length <= 2 ? void 0 : arguments[2])
      }
      bindTo(kk, ek, ik) {
        let Dk = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
        const Sk = kk.constructor[Symbol.metadata];
        ik || (ik = Object.keys(Sk).filter((kk => !isNaN(Number(kk)))).map((kk => Sk[kk].name)));
        const bk = () => {
          for (const Dk of ik) {
            const ik = kk[Dk];
            void 0 !== ik && (ek[Dk] = ik)
          }
        };
        return Dk && bk(), this.addCallback(kk[rk], fk.REPLACE, bk)
      }
      lF(kk) {
        this.uniqueRefIds.clear(), this.isTriggering = !0;
        for (let ek = 0, ik = kk.length; ek < ik; ek++) {
          const ik = kk[ek],
            Dk = ik.refId,
            Sk = ik.ref,
            bk = this.callbacks[Dk];
          if (bk) {
            if ((ik.op & fk.DELETE) === fk.DELETE && ID.isSchema(ik.previousValue)) {
              const kk = ik.previousValue[rk],
                ek = this.callbacks[kk]?.[fk.DELETE];
              if (ek)
                for (let ik = ek.length - 1; ik >= 0; ik--) try {
                  ek[ik]()
                } catch (mf) {
                  console.error(mf)
                }
            }
            if (ID.isSchema(Sk)) {
              if (!this.uniqueRefIds.has(Dk)) {
                const kk = bk[fk.REPLACE];
                if (kk)
                  for (let ek = kk.length - 1; ek >= 0; ek--) try {
                    kk[ek]()
                  } catch (mf) {
                    console.error(mf)
                  }
              }
              const kk = bk[ik.field];
              if (kk)
                for (let ek = kk.length - 1; ek >= 0; ek--) try {
                  kk[ek](ik.value, ik.previousValue)
                } catch (mf) {
                  console.error(mf)
                }
            } else {
              const kk = ik.dynamicIndex ?? ik.field;
              if ((ik.op & fk.DELETE) === fk.DELETE) {
                if (void 0 !== ik.previousValue) {
                  const ek = bk[fk.DELETE];
                  if (ek)
                    for (let Dk = ek.length - 1; Dk >= 0; Dk--) try {
                      ek[Dk](ik.previousValue, kk)
                    } catch (mf) {
                      console.error(mf)
                    }
                }
                if ((ik.op & fk.ADD) === fk.ADD) {
                  const ek = bk[fk.ADD];
                  if (ek)
                    for (let Dk = ek.length - 1; Dk >= 0; Dk--) try {
                      ek[Dk](ik.value, kk)
                    } catch (mf) {
                      console.error(mf)
                    }
                }
              } else if ((ik.op & fk.ADD) === fk.ADD && ik.previousValue !== ik.value) {
                const ek = bk[fk.ADD];
                if (ek)
                  for (let Dk = ek.length - 1; Dk >= 0; Dk--) try {
                    ek[Dk](ik.value, kk)
                  } catch (mf) {
                    console.error(mf)
                  }
              }
              if (ik.value !== ik.previousValue) {
                const ek = bk[fk.REPLACE];
                if (ek)
                  for (let Dk = ek.length - 1; Dk >= 0; Dk--) try {
                    ek[Dk](kk, ik.value)
                  } catch (mf) {
                    console.error(mf)
                  }
              }
            }
            this.uniqueRefIds.add(Dk)
          }
        }
        this.isTriggering = !1
      }
    }
    const bf = {
      get(kk) {
        if (kk instanceof ND) return new Sf(kk);
        if ("dU" in kk.Rl) return new Sf(kk.Rl.dU);
        throw new Error("Invalid room or decoder")
      },
      getLegacy(kk) {
        if (kk instanceof ND) return Df(kk);
        if ("dU" in kk.Rl) return Df(kk.Rl.dU);
        throw new Error("Invalid room or decoder")
      },
      getRawChanges: (kk, ek) => ff(kk, ek)
    };
    class rf {
      _free = [];
      _factory;
      _maxSize;
      constructor(kk) {
        let ek = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        this._factory = kk, this._maxSize = ek.maxSize ?? 1 / 0;
        const ik = ek.preallocate ?? 0;
        for (let Dk = 0; Dk < ik; Dk++) this._free.push(kk())
      }
      acquire() {
        return this._free.length > 0 ? this._free.pop() : this._factory()
      }
      release(kk) {
        ID.reset(kk), this._free.length < this._maxSize && this._free.push(kk)
      }
      get size() {
        return this._free.length
      }
    }

    function Pf(kk) {
      return new rf((() => new kk), arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {})
    }
    Ae("map", {
      constructor: rD
    }), Ae("array", {
      constructor: SD
    }), Ae("set", {
      constructor: mD
    }), Ae("collection", {
      constructor: PD
    })
  },
  8902: (kk, ek, ik) => {
    ik.r(ek), ik.d(ek, {
      __addDisposableResource: () => Ek,
      __assign: () => Sk,
      __asyncDelegator: () => sk,
      __asyncGenerator: () => jk,
      __asyncValues: () => dk,
      __await: () => Ak,
      __awaiter: () => Uk,
      __classPrivateFieldGet: () => zk,
      __classPrivateFieldIn: () => vk,
      __classPrivateFieldSet: () => Qk,
      __createBinding: () => wk,
      __decorate: () => rk,
      __disposeResources: () => ak,
      __esDecorate: () => mk,
      __exportStar: () => lk,
      __extends: () => fk,
      __generator: () => Hk,
      __importDefault: () => Ik,
      __importStar: () => qk,
      __makeTemplateObject: () => Vk,
      __metadata: () => nk,
      __param: () => Pk,
      __propKey: () => Kk,
      __read: () => yk,
      __rest: () => bk,
      __rewriteRelativeImportExtension: () => Wk,
      __runInitializers: () => Mk,
      __setFunctionName: () => xk,
      __spread: () => Yk,
      __spreadArray: () => Ck,
      __spreadArrays: () => Lk,
      __values: () => pk,
      default: () => tk
    });
    var Dk = function(kk, ek) {
      return Dk = Object.setPrototypeOf || {
        __proto__: []
      }
      instanceof Array && function(kk, ek) {
        kk.__proto__ = ek
      } || function(kk, ek) {
        for (var ik in ek) Object.prototype.hasOwnProperty.call(ek, ik) && (kk[ik] = ek[ik])
      }, Dk(kk, ek)
    };

    function fk(kk, ek) {
      if ("function" !== typeof ek && null !== ek) throw new TypeError("Class extends value " + String(ek) + " is not a constructor or null");

      function ik() {
        this.constructor = kk
      }
      Dk(kk, ek), kk.prototype = null === ek ? Object.create(ek) : (ik.prototype = ek.prototype, new ik)
    }
    var Sk = function() {
      return Sk = Object.assign || function(kk) {
        for (var ek, ik = 1, Dk = arguments.length; ik < Dk; ik++)
          for (var fk in ek = arguments[ik]) Object.prototype.hasOwnProperty.call(ek, fk) && (kk[fk] = ek[fk]);
        return kk
      }, Sk.apply(this, arguments)
    };

    function bk(kk, ek) {
      var ik = {};
      for (var Dk in kk) Object.prototype.hasOwnProperty.call(kk, Dk) && ek.indexOf(Dk) < 0 && (ik[Dk] = kk[Dk]);
      if (null != kk && "function" === typeof Object.getOwnPropertySymbols) {
        var fk = 0;
        for (Dk = Object.getOwnPropertySymbols(kk); fk < Dk.length; fk++) ek.indexOf(Dk[fk]) < 0 && Object.prototype.propertyIsEnumerable.call(kk, Dk[fk]) && (ik[Dk[fk]] = kk[Dk[fk]])
      }
      return ik
    }

    function rk(kk, ek, ik, Dk) {
      var fk, Sk = arguments.length,
        bk = Sk < 3 ? ek : null === Dk ? Dk = Object.getOwnPropertyDescriptor(ek, ik) : Dk;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) bk = Reflect.decorate(kk, ek, ik, Dk);
      else
        for (var rk = kk.length - 1; rk >= 0; rk--)(fk = kk[rk]) && (bk = (Sk < 3 ? fk(bk) : Sk > 3 ? fk(ek, ik, bk) : fk(ek, ik)) || bk);
      return Sk > 3 && bk && Object.defineProperty(ek, ik, bk), bk
    }

    function Pk(kk, ek) {
      return function(ik, Dk) {
        ek(ik, Dk, kk)
      }
    }

    function mk(kk, ek, ik, Dk, fk, Sk) {
      function bk(kk) {
        if (void 0 !== kk && "function" !== typeof kk) throw new TypeError("Function expected");
        return kk
      }
      for (var rk, Pk = Dk.kind, mk = "getter" === Pk ? "get" : "setter" === Pk ? "set" : "value", Mk = !ek && kk ? Dk.static ? kk : kk.prototype : null, Kk = ek || (Mk ? Object.getOwnPropertyDescriptor(Mk, Dk.name) : {}), xk = !1, nk = ik.length - 1; nk >= 0; nk--) {
        var Uk = {};
        for (var Hk in Dk) Uk[Hk] = "access" === Hk ? {} : Dk[Hk];
        for (var Hk in Dk.access) Uk.access[Hk] = Dk.access[Hk];
        Uk.addInitializer = function(kk) {
          if (xk) throw new TypeError("Cannot add initializers after decoration has completed");
          Sk.push(bk(kk || null))
        };
        var wk = (0, ik[nk])("accessor" === Pk ? {
          get: Kk.get,
          set: Kk.set
        } : Kk[mk], Uk);
        if ("accessor" === Pk) {
          if (void 0 === wk) continue;
          if (null === wk || "object" !== typeof wk) throw new TypeError("Object expected");
          (rk = bk(wk.get)) && (Kk.get = rk), (rk = bk(wk.set)) && (Kk.set = rk), (rk = bk(wk.init)) && fk.unshift(rk)
        } else(rk = bk(wk)) && ("field" === Pk ? fk.unshift(rk) : Kk[mk] = rk)
      }
      Mk && Object.defineProperty(Mk, Dk.name, Kk), xk = !0
    }

    function Mk(kk, ek, ik) {
      for (var Dk = arguments.length > 2, fk = 0; fk < ek.length; fk++) ik = Dk ? ek[fk].call(kk, ik) : ek[fk].call(kk);
      return Dk ? ik : void 0
    }

    function Kk(kk) {
      return "symbol" === typeof kk ? kk : "".concat(kk)
    }

    function xk(kk, ek, ik) {
      return "symbol" === typeof ek && (ek = ek.description ? "[".concat(ek.description, "]") : ""), Object.defineProperty(kk, "name", {
        configurable: !0,
        value: ik ? "".concat(ik, " ", ek) : ek
      })
    }

    function nk(kk, ek) {
      if ("object" === typeof Reflect && "function" === typeof Reflect.metadata) return Reflect.metadata(kk, ek)
    }

    function Uk(kk, ek, ik, Dk) {
      return new(ik || (ik = Promise))((function(fk, Sk) {
        function bk(kk) {
          try {
            Pk(Dk.next(kk))
          } catch (ek) {
            Sk(ek)
          }
        }

        function rk(kk) {
          try {
            Pk(Dk.throw(kk))
          } catch (ek) {
            Sk(ek)
          }
        }

        function Pk(kk) {
          var ek;
          kk.done ? fk(kk.value) : (ek = kk.value, ek instanceof ik ? ek : new ik((function(kk) {
            kk(ek)
          }))).then(bk, rk)
        }
        Pk((Dk = Dk.apply(kk, ek || [])).next())
      }))
    }

    function Hk(kk, ek) {
      var ik, Dk, fk, Sk = {
          label: 0,
          sent: function() {
            if (1 & fk[0]) throw fk[1];
            return fk[1]
          },
          trys: [],
          ops: []
        },
        bk = Object.create(("function" === typeof Iterator ? Iterator : Object).prototype);
      return bk.next = rk(0), bk.throw = rk(1), bk.return = rk(2), "function" === typeof Symbol && (bk[Symbol.iterator] = function() {
        return this
      }), bk;

      function rk(rk) {
        return function(Pk) {
          return function(rk) {
            if (ik) throw new TypeError("Generator is already executing.");
            for (; bk && (bk = 0, rk[0] && (Sk = 0)), Sk;) try {
              if (ik = 1, Dk && (fk = 2 & rk[0] ? Dk.return : rk[0] ? Dk.throw || ((fk = Dk.return) && fk.call(Dk), 0) : Dk.next) && !(fk = fk.call(Dk, rk[1])).done) return fk;
              switch (Dk = 0, fk && (rk = [2 & rk[0], fk.value]), rk[0]) {
                case 0:
                case 1:
                  fk = rk;
                  break;
                case 4:
                  return Sk.label++, {
                    value: rk[1],
                    done: !1
                  };
                case 5:
                  Sk.label++, Dk = rk[1], rk = [0];
                  continue;
                case 7:
                  rk = Sk.ops.pop(), Sk.trys.pop();
                  continue;
                default:
                  if (!(fk = (fk = Sk.trys).length > 0 && fk[fk.length - 1]) && (6 === rk[0] || 2 === rk[0])) {
                    Sk = 0;
                    continue
                  }
                  if (3 === rk[0] && (!fk || rk[1] > fk[0] && rk[1] < fk[3])) {
                    Sk.label = rk[1];
                    break
                  }
                  if (6 === rk[0] && Sk.label < fk[1]) {
                    Sk.label = fk[1], fk = rk;
                    break
                  }
                  if (fk && Sk.label < fk[2]) {
                    Sk.label = fk[2], Sk.ops.push(rk);
                    break
                  }
                  fk[2] && Sk.ops.pop(), Sk.trys.pop();
                  continue
              }
              rk = ek.call(kk, Sk)
            } catch (Pk) {
              rk = [6, Pk], Dk = 0
            } finally {
              ik = fk = 0
            }
            if (5 & rk[0]) throw rk[1];
            return {
              value: rk[0] ? rk[1] : void 0,
              done: !0
            }
          }([rk, Pk])
        }
      }
    }
    var wk = Object.create ? function(kk, ek, ik, Dk) {
      void 0 === Dk && (Dk = ik);
      var fk = Object.getOwnPropertyDescriptor(ek, ik);
      fk && !("get" in fk ? !ek.__esModule : fk.writable || fk.configurable) || (fk = {
        enumerable: !0,
        get: function() {
          return ek[ik]
        }
      }), Object.defineProperty(kk, Dk, fk)
    } : function(kk, ek, ik, Dk) {
      void 0 === Dk && (Dk = ik), kk[Dk] = ek[ik]
    };

    function lk(kk, ek) {
      for (var ik in kk) "default" === ik || Object.prototype.hasOwnProperty.call(ek, ik) || wk(ek, kk, ik)
    }

    function pk(kk) {
      var ek = "function" === typeof Symbol && Symbol.iterator,
        ik = ek && kk[ek],
        Dk = 0;
      if (ik) return ik.call(kk);
      if (kk && "number" === typeof kk.length) return {
        next: function() {
          return kk && Dk >= kk.length && (kk = void 0), {
            value: kk && kk[Dk++],
            done: !kk
          }
        }
      };
      throw new TypeError(ek ? "Object is not iterable." : "Symbol.iterator is not defined.")
    }

    function yk(kk, ek) {
      var ik = "function" === typeof Symbol && kk[Symbol.iterator];
      if (!ik) return kk;
      var Dk, fk, Sk = ik.call(kk),
        bk = [];
      try {
        for (;
          (void 0 === ek || ek-- > 0) && !(Dk = Sk.next()).done;) bk.push(Dk.value)
      } catch (rk) {
        fk = {
          error: rk
        }
      } finally {
        try {
          Dk && !Dk.done && (ik = Sk.return) && ik.call(Sk)
        } finally {
          if (fk) throw fk.error
        }
      }
      return bk
    }

    function Yk() {
      for (var kk = [], ek = 0; ek < arguments.length; ek++) kk = kk.concat(yk(arguments[ek]));
      return kk
    }

    function Lk() {
      for (var kk = 0, ek = 0, ik = arguments.length; ek < ik; ek++) kk += arguments[ek].length;
      var Dk = Array(kk),
        fk = 0;
      for (ek = 0; ek < ik; ek++)
        for (var Sk = arguments[ek], bk = 0, rk = Sk.length; bk < rk; bk++, fk++) Dk[fk] = Sk[bk];
      return Dk
    }

    function Ck(kk, ek, ik) {
      if (ik || 2 === arguments.length)
        for (var Dk, fk = 0, Sk = ek.length; fk < Sk; fk++) !Dk && fk in ek || (Dk || (Dk = Array.prototype.slice.call(ek, 0, fk)), Dk[fk] = ek[fk]);
      return kk.concat(Dk || Array.prototype.slice.call(ek))
    }

    function Ak(kk) {
      return this instanceof Ak ? (this.v = kk, this) : new Ak(kk)
    }

    function jk(kk, ek, ik) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var Dk, fk = ik.apply(kk, ek || []),
        Sk = [];
      return Dk = Object.create(("function" === typeof AsyncIterator ? AsyncIterator : Object).prototype), bk("next"), bk("throw"), bk("return", (function(kk) {
        return function(ek) {
          return Promise.resolve(ek).then(kk, mk)
        }
      })), Dk[Symbol.asyncIterator] = function() {
        return this
      }, Dk;

      function bk(kk, ek) {
        fk[kk] && (Dk[kk] = function(ek) {
          return new Promise((function(ik, Dk) {
            Sk.push([kk, ek, ik, Dk]) > 1 || rk(kk, ek)
          }))
        }, ek && (Dk[kk] = ek(Dk[kk])))
      }

      function rk(kk, ek) {
        try {
          (ik = fk[kk](ek)).value instanceof Ak ? Promise.resolve(ik.value.v).then(Pk, mk) : Mk(Sk[0][2], ik)
        } catch (Dk) {
          Mk(Sk[0][3], Dk)
        }
        var ik
      }

      function Pk(kk) {
        rk("next", kk)
      }

      function mk(kk) {
        rk("throw", kk)
      }

      function Mk(kk, ek) {
        kk(ek), Sk.shift(), Sk.length && rk(Sk[0][0], Sk[0][1])
      }
    }

    function sk(kk) {
      var ek, ik;
      return ek = {}, Dk("next"), Dk("throw", (function(kk) {
        throw kk
      })), Dk("return"), ek[Symbol.iterator] = function() {
        return this
      }, ek;

      function Dk(Dk, fk) {
        ek[Dk] = kk[Dk] ? function(ek) {
          return (ik = !ik) ? {
            value: Ak(kk[Dk](ek)),
            done: !1
          } : fk ? fk(ek) : ek
        } : fk
      }
    }

    function dk(kk) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var ek, ik = kk[Symbol.asyncIterator];
      return ik ? ik.call(kk) : (kk = pk(kk), ek = {}, Dk("next"), Dk("throw"), Dk("return"), ek[Symbol.asyncIterator] = function() {
        return this
      }, ek);

      function Dk(ik) {
        ek[ik] = kk[ik] && function(ek) {
          return new Promise((function(Dk, fk) {
            (function(kk, ek, ik, Dk) {
              Promise.resolve(Dk).then((function(ek) {
                kk({
                  value: ek,
                  done: ik
                })
              }), ek)
            })(Dk, fk, (ek = kk[ik](ek)).done, ek.value)
          }))
        }
      }
    }

    function Vk(kk, ek) {
      return Object.defineProperty ? Object.defineProperty(kk, "raw", {
        value: ek
      }) : kk.raw = ek, kk
    }
    var Fk = Object.create ? function(kk, ek) {
        Object.defineProperty(kk, "default", {
          enumerable: !0,
          value: ek
        })
      } : function(kk, ek) {
        kk.default = ek
      },
      uk = function(kk) {
        return uk = Object.getOwnPropertyNames || function(kk) {
          var ek = [];
          for (var ik in kk) Object.prototype.hasOwnProperty.call(kk, ik) && (ek[ek.length] = ik);
          return ek
        }, uk(kk)
      };

    function qk(kk) {
      if (kk && kk.__esModule) return kk;
      var ek = {};
      if (null != kk)
        for (var ik = uk(kk), Dk = 0; Dk < ik.length; Dk++) "default" !== ik[Dk] && wk(ek, kk, ik[Dk]);
      return Fk(ek, kk), ek
    }

    function Ik(kk) {
      return kk && kk.__esModule ? kk : {
        default: kk
      }
    }

    function zk(kk, ek, ik, Dk) {
      if ("a" === ik && !Dk) throw new TypeError("Private accessor was defined without a getter");
      if ("function" === typeof ek ? kk !== ek || !Dk : !ek.has(kk)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
      return "m" === ik ? Dk : "a" === ik ? Dk.call(kk) : Dk ? Dk.value : ek.get(kk)
    }

    function Qk(kk, ek, ik, Dk, fk) {
      if ("m" === Dk) throw new TypeError("Private method is not writable");
      if ("a" === Dk && !fk) throw new TypeError("Private accessor was defined without a setter");
      if ("function" === typeof ek ? kk !== ek || !fk : !ek.has(kk)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
      return "a" === Dk ? fk.call(kk, ik) : fk ? fk.value = ik : ek.set(kk, ik), ik
    }

    function vk(kk, ek) {
      if (null === ek || "object" !== typeof ek && "function" !== typeof ek) throw new TypeError("Cannot use 'in' operator on non-object");
      return "function" === typeof kk ? ek === kk : kk.has(ek)
    }

    function Ek(kk, ek, ik) {
      if (null !== ek && void 0 !== ek) {
        if ("object" !== typeof ek && "function" !== typeof ek) throw new TypeError("Object expected.");
        var Dk, fk;
        if (ik) {
          if (!Symbol.asyncDispose) throw new TypeError("Symbol.asyncDispose is not defined.");
          Dk = ek[Symbol.asyncDispose]
        }
        if (void 0 === Dk) {
          if (!Symbol.dispose) throw new TypeError("Symbol.dispose is not defined.");
          Dk = ek[Symbol.dispose], ik && (fk = Dk)
        }
        if ("function" !== typeof Dk) throw new TypeError("Object not disposable.");
        fk && (Dk = function() {
          try {
            fk.call(this)
          } catch (kk) {
            return Promise.reject(kk)
          }
        }), kk.stack.push({
          value: ek,
          dispose: Dk,
          async: ik
        })
      } else ik && kk.stack.push({
        async: !0
      });
      return ek
    }
    var hk = "function" === typeof SuppressedError ? SuppressedError : function(kk, ek, ik) {
      var Dk = new Error(ik);
      return Dk.name = "SuppressedError", Dk.error = kk, Dk.suppressed = ek, Dk
    };

    function ak(kk) {
      function ek(ek) {
        kk.error = kk.hasError ? new hk(ek, kk.error, "An error was suppressed during disposal.") : ek, kk.hasError = !0
      }
      var ik, Dk = 0;
      return function fk() {
        for (; ik = kk.stack.pop();) try {
          if (!ik.async && 1 === Dk) return Dk = 0, kk.stack.push(ik), Promise.resolve().then(fk);
          if (ik.dispose) {
            var Sk = ik.dispose.call(ik.value);
            if (ik.async) return Dk |= 2, Promise.resolve(Sk).then(fk, (function(kk) {
              return ek(kk), fk()
            }))
          } else Dk |= 1
        } catch (bk) {
          ek(bk)
        }
        if (1 === Dk) return kk.hasError ? Promise.reject(kk.error) : Promise.resolve();
        if (kk.hasError) throw kk.error
      }()
    }

    function Wk(kk, ek) {
      return "string" === typeof kk && /^\.\.?\//.test(kk) ? kk.replace(/\.(tsx)$|((?:\.d)?)((?:\.[^./]+?)?)\.([cm]?)ts$/i, (function(kk, ik, Dk, fk, Sk) {
        return ik ? ek ? ".jsx" : ".js" : !Dk || fk && Sk ? Dk + fk + "." + Sk.toLowerCase() + "js" : kk
      })) : kk
    }
    const tk = {
      __extends: fk,
      __assign: Sk,
      __rest: bk,
      __decorate: rk,
      __param: Pk,
      __esDecorate: mk,
      __runInitializers: Mk,
      __propKey: Kk,
      __setFunctionName: xk,
      __metadata: nk,
      __awaiter: Uk,
      __generator: Hk,
      __createBinding: wk,
      __exportStar: lk,
      __values: pk,
      __read: yk,
      __spread: Yk,
      __spreadArrays: Lk,
      __spreadArray: Ck,
      __await: Ak,
      __asyncGenerator: jk,
      __asyncDelegator: sk,
      __asyncValues: dk,
      __makeTemplateObject: Vk,
      __importStar: qk,
      __importDefault: Ik,
      __classPrivateFieldGet: zk,
      __classPrivateFieldSet: Qk,
      __classPrivateFieldIn: vk,
      __addDisposableResource: Ek,
      __disposeResources: ak,
      __rewriteRelativeImportExtension: Wk
    }
  }
};
Object.freeze(modules);
for (const kk in modules) Object.freeze(modules[kk]);