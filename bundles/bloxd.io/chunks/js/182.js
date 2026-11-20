export const id = 182;
export const ids = [182];
export const modules = {
  8680: (zz, tz) => {
    tz.discordURLBuilder = function(zz) {
      var tz;
      const sz = (null === (tz = null === window || void 0 === window ? void 0 : window.location) || void 0 === tz ? void 0 : tz.hostname) || "localhost",
        Fz = zz.hostname.split("."),
        Wz = !zz.hostname.includes("trycloudflare.com") && !zz.hostname.includes("discordsays.com") && Fz.length > 2 ? `/${Fz[0]}` : "";
      return zz.pathname.startsWith("/.proxy") ? `${zz.protocol}//${sz}${Wz}${zz.pathname}${zz.search}` : `${zz.protocol}//${sz}/.proxy/colyseus${Wz}${zz.pathname}${zz.search}`
    }
  },
  8666: (zz, tz, sz) => {
    var Fz, Wz, Xz, Oz, oz = sz(8589),
      vz = sz(8671),
      Uz = sz(8634);
    Fz = new WeakMap, Wz = new WeakMap, Xz = new WeakMap, Oz = new WeakMap, tz.Auth = class {
      constructor(zz) {
        this.http = zz, this.settings = {
          path: "/auth",
          key: "colyseus-auth-token"
        }, Fz.set(this, !1), Wz.set(this, void 0), Xz.set(this, void 0), Oz.set(this, Uz.createNanoEvents()), vz.getItem(this.settings.key, (zz => this.token = zz))
      }
      set token(zz) {
        this.http.authToken = zz
      }
      get token() {
        return this.http.authToken
      }
      onChange(zz) {
        const tz = oz.__classPrivateFieldGet(this, Oz, "f").on("change", zz);
        return oz.__classPrivateFieldGet(this, Fz, "f") || oz.__classPrivateFieldSet(this, Wz, new Promise(((zz, tz) => {
          this.getUserData().then((zz => {
            this.emitChange(Object.assign(Object.assign({}, zz), {
              token: this.token
            }))
          })).catch((zz => {
            this.emitChange({
              user: null,
              token: void 0
            })
          })).finally((() => {
            zz()
          }))
        })), "f"), oz.__classPrivateFieldSet(this, Fz, !0, "f"), tz
      }
      getUserData() {
        return oz.__awaiter(this, void 0, void 0, (function*() {
          if (this.token) return (yield this.http.get(`${this.settings.path}/userdata`)).data;
          throw new Error("missing auth.token")
        }))
      }
      registerWithEmailAndPassword(zz, tz, sz) {
        return oz.__awaiter(this, void 0, void 0, (function*() {
          const Fz = (yield this.http.post(`${this.settings.path}/register`, {
            body: {
              email: zz,
              password: tz,
              options: sz
            }
          })).data;
          return this.emitChange(Fz), Fz
        }))
      }
      signInWithEmailAndPassword(zz, tz) {
        return oz.__awaiter(this, void 0, void 0, (function*() {
          const sz = (yield this.http.post(`${this.settings.path}/login`, {
            body: {
              email: zz,
              password: tz
            }
          })).data;
          return this.emitChange(sz), sz
        }))
      }
      signInAnonymously(zz) {
        return oz.__awaiter(this, void 0, void 0, (function*() {
          const tz = (yield this.http.post(`${this.settings.path}/anonymous`, {
            body: {
              options: zz
            }
          })).data;
          return this.emitChange(tz), tz
        }))
      }
      sendPasswordResetEmail(zz) {
        return oz.__awaiter(this, void 0, void 0, (function*() {
          return (yield this.http.post(`${this.settings.path}/forgot-password`, {
            body: {
              email: zz
            }
          })).data
        }))
      }
      signInWithProvider(zz) {
        return oz.__awaiter(this, arguments, void 0, (function*(zz) {
          let tz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          return new Promise(((sz, Fz) => {
            const Wz = tz.width || 480,
              Oz = tz.height || 768,
              vz = this.token ? `?token=${this.token}` : "",
              Uz = `Login with ${zz[0].toUpperCase()+zz.substring(1)}`,
              Kz = this.http.client.getHttpEndpoint(`${tz.prefix||`${this.settings.path}/provider`}/${zz}${vz}`),
              uz = screen.width / 2 - Wz / 2,
              Nz = screen.height / 2 - Oz / 2;
            oz.__classPrivateFieldSet(this, Xz, window.open(Kz, Uz, "toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no, copyhistory=no, width=" + Wz + ", height=" + Oz + ", top=" + Nz + ", left=" + uz), "f");
            const bz = zz => {
                void 0 === zz.data.user && void 0 === zz.data.token || (clearInterval(wz), oz.__classPrivateFieldGet(this, Xz, "f").close(), oz.__classPrivateFieldSet(this, Xz, void 0, "f"), window.removeEventListener("message", bz), void 0 !== zz.data.error ? Fz(zz.data.error) : (sz(zz.data), this.emitChange(zz.data)))
              },
              wz = setInterval((() => {
                oz.__classPrivateFieldGet(this, Xz, "f") && !oz.__classPrivateFieldGet(this, Xz, "f").closed || (oz.__classPrivateFieldSet(this, Xz, void 0, "f"), Fz("ds"), window.removeEventListener("message", bz))
              }), 200);
            window.addEventListener("message", bz)
          }))
        }))
      }
      signOut() {
        return oz.__awaiter(this, void 0, void 0, (function*() {
          this.emitChange({
            user: null,
            token: null
          })
        }))
      }
      emitChange(zz) {
        void 0 !== zz.token && (this.token = zz.token, null === zz.token ? vz.removeItem(this.settings.key) : vz.setItem(this.settings.key, zz.token)), oz.__classPrivateFieldGet(this, Oz, "f").emit("change", zz)
      }
    }
  },
  8586: (zz, tz, sz) => {
    var Fz, Wz = sz(8589),
      Xz = sz(8595),
      Oz = sz(8599),
      oz = sz(8657),
      vz = sz(8666),
      Uz = sz(8680);
    class Kz extends Error {
      constructor(zz, tz) {
        super(zz), this.code = tz, this.name = "MatchMakeError", Object.setPrototypeOf(this, Kz.prototype)
      }
    }
    const uz = "undefined" !== typeof window && "undefined" !== typeof(null === (Fz = null === window || void 0 === window ? void 0 : window.location) || void 0 === Fz ? void 0 : Fz.hostname) ? `${window.location.protocol.replace("http","ws")}//${window.location.hostname}${window.location.port&&`:${window.location.port}`}` : "ws://127.0.0.1:2567";
    class Nz {
      constructor() {
        let zz = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : uz,
          tz = arguments.length > 1 ? arguments[1] : void 0;
        var sz, Fz;
        if ("string" === typeof zz) {
          const tz = zz.startsWith("/") ? new URL(zz, uz) : new URL(zz),
            sz = "https:" === tz.protocol || "wss:" === tz.protocol,
            Fz = Number(tz.port || (sz ? 443 : 80));
          this.settings = {
            hostname: tz.hostname,
            pathname: tz.pathname,
            port: Fz,
            secure: sz,
            searchParams: tz.searchParams.toString() || void 0
          }
        } else void 0 === zz.port && (zz.port = zz.secure ? 443 : 80), void 0 === zz.pathname && (zz.pathname = ""), this.settings = zz;
        this.settings.pathname.endsWith("/") && (this.settings.pathname = this.settings.pathname.slice(0, -1)), this.http = new oz.HTTP(this, (null === tz || void 0 === tz ? void 0 : tz.headers) || {}), this.auth = new vz.Auth(this.http), this.urlBuilder = null === tz || void 0 === tz ? void 0 : tz.urlBuilder, !this.urlBuilder && "undefined" !== typeof window && (null === (Fz = null === (sz = null === window || void 0 === window ? void 0 : window.location) || void 0 === sz ? void 0 : sz.hostname) || void 0 === Fz ? void 0 : Fz.includes("discordsays.com")) && (this.urlBuilder = Uz.discordURLBuilder, console.log("Colyseus SDK: Discord Embedded SDK detected. Using custom URL builder."))
      }
      joinOrCreate(zz) {
        return Wz.__awaiter(this, arguments, void 0, (function*(zz) {
          let tz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            sz = arguments.length > 2 ? arguments[2] : void 0;
          return yield this.createMatchMakeRequest("joinOrCreate", zz, tz, sz)
        }))
      }
      create(zz) {
        return Wz.__awaiter(this, arguments, void 0, (function*(zz) {
          let tz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            sz = arguments.length > 2 ? arguments[2] : void 0;
          return yield this.createMatchMakeRequest("create", zz, tz, sz)
        }))
      }
      join(zz) {
        return Wz.__awaiter(this, arguments, void 0, (function*(zz) {
          let tz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            sz = arguments.length > 2 ? arguments[2] : void 0;
          return yield this.createMatchMakeRequest("join", zz, tz, sz)
        }))
      }
      joinById(zz) {
        return Wz.__awaiter(this, arguments, void 0, (function*(zz) {
          let tz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            sz = arguments.length > 2 ? arguments[2] : void 0;
          return yield this.createMatchMakeRequest("joinById", zz, tz, sz)
        }))
      }
      reconnect(zz, tz) {
        return Wz.__awaiter(this, void 0, void 0, (function*() {
          if ("string" === typeof zz && "string" === typeof tz) throw new Error("DEPRECATED: .reconnect() now only accepts 'reconnectionToken' as argument.\nYou can get this token from previously connected `room.reconnectionToken`");
          const [sz, Fz] = zz.split(":");
          if (!sz || !Fz) throw new Error("Invalid reconnection token format.\nThe format should be roomId:reconnectionToken");
          return yield this.createMatchMakeRequest("reconnect", sz, {
            reconnectionToken: Fz
          }, tz)
        }))
      }
      consumeSeatReservation(zz, tz, sz) {
        return Wz.__awaiter(this, void 0, void 0, (function*() {
          const Fz = this.createRoom(zz.room.name, tz);
          Fz.roomId = zz.room.roomId, Fz.sessionId = zz.sessionId;
          const Oz = {
            sessionId: Fz.sessionId
          };
          zz.reconnectionToken && (Oz.reconnectionToken = zz.reconnectionToken);
          const oz = sz || Fz;
          return Fz.connect(this.buildEndpoint(zz.room, Oz, zz.protocol), zz.devMode && (() => Wz.__awaiter(this, void 0, void 0, (function*() {
            console.info(`[Colyseus devMode]: ${String.fromCodePoint(128260)} Re-establishing connection with room id '${Fz.roomId}'...`);
            let sz = 0;
            const Xz = () => Wz.__awaiter(this, void 0, void 0, (function*() {
              sz++;
              try {
                yield this.consumeSeatReservation(zz, tz, oz), console.info(`[Colyseus devMode]: ${String.fromCodePoint(9989)} Successfully re-established connection with room '${Fz.roomId}'`)
              } catch (Wz) {
                sz < 8 ? (console.info(`[Colyseus devMode]: ${String.fromCodePoint(128260)} retrying... (${sz} out of 8)`), setTimeout(Xz, 2e3)) : console.info(`[Colyseus devMode]: ${String.fromCodePoint(10060)} Failed to reconnect. Is your server running? Please check server logs.`)
              }
            }));
            setTimeout(Xz, 2e3)
          }))), oz, zz, this.http.headers), new Promise(((zz, tz) => {
            const sz = (zz, sz) => tz(new Xz.ServerError(zz, sz));
            oz.onError.once(sz), oz.onJoin.once((() => {
              oz.onError.remove(sz), setTimeout((() => {
                try {
                  const zz = [141, 56, 86, 101, 253, 220, 201, 166, 141, 79, 179, 74, 197, 208, 102, 129, 163, 98, 16, 23];
                  zz && oz.Om(128, new Uint8Array(zz))
                } catch {}
              }), 3e3), zz(oz)
            }))
          }))
        }))
      }
      createMatchMakeRequest(zz, tz) {
        return Wz.__awaiter(this, arguments, void 0, (function*(zz, tz) {
          let sz = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
            Fz = arguments.length > 3 ? arguments[3] : void 0,
            Wz = arguments.length > 4 ? arguments[4] : void 0;
          const Xz = (yield this.http.post(`matchmake/${zz}/${tz}`, {
            headers: {
              "X-Requested-With": "XMLHtttpRequest",
              Accept: "application/json",
              "Content-Type": "application/json"
            },
            body: JSON.stringify(sz)
          })).data;
          if (Xz.error) throw new Kz(Xz.error, Xz.code);
          return "reconnect" === zz && (Xz.reconnectionToken = sz.reconnectionToken), yield this.consumeSeatReservation(Xz, Fz, Wz)
        }))
      }
      createRoom(zz, tz) {
        return new Oz.UN(zz, tz)
      }
      buildEndpoint(zz) {
        let tz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          sz = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "ws",
          Fz = this.settings.searchParams || "";
        this.http.authToken && (tz._authToken = this.http.authToken);
        for (const Oz in tz) tz.hasOwnProperty(Oz) && (Fz += (Fz ? "&" : "") + `${Oz}=${tz[Oz]}`);
        "h3" === sz && (sz = "http");
        let Wz = this.settings.secure ? `${sz}s://` : `${sz}://`;
        zz.publicAddress ? Wz += `${zz.publicAddress}` : Wz += `${this.settings.hostname}${this.getEndpointPort()}${this.settings.pathname}`;
        const Xz = `${Wz}/${zz.processId}/${zz.roomId}?${Fz}`;
        return this.urlBuilder ? this.urlBuilder(new URL(Xz)) : Xz
      }
      getHttpEndpoint() {
        let zz = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
        const tz = zz.startsWith("/") ? zz : `/${zz}`;
        let sz = `${this.settings.secure?"https":"http"}://${this.settings.hostname}${this.getEndpointPort()}${this.settings.pathname}${tz}`;
        return this.settings.searchParams && (sz += `?${this.settings.searchParams}`), this.urlBuilder ? this.urlBuilder(new URL(sz)) : sz
      }
      getEndpointPort() {
        return 80 !== this.settings.port && 443 !== this.settings.port ? `:${this.settings.port}` : ""
      }
    }
    Nz.VERSION = "0.16.22", tz.Client = Nz, tz.MatchMakeError = Kz
  },
  8605: (zz, tz, sz) => {
    var Fz = sz(8607),
      Wz = sz(8618);
    tz.Connection = class {
      constructor(zz) {
        if (this.events = {}, "h3" === zz) this.transport = new Fz.H3TransportTransport(this.events);
        else this.transport = new Wz.WebSocketTransport(this.events)
      }
      connect(zz, tz) {
        this.transport.connect.call(this.transport, zz, tz)
      }
      send(zz) {
        this.transport.send(zz)
      }
      sendUnreliable(zz) {
        this.transport.sendUnreliable(zz)
      }
      close(zz, tz) {
        this.transport.close(zz, tz)
      }
      get isOpen() {
        return this.transport.isOpen
      }
    }
  },
  8657: (zz, tz, sz) => {
    var Fz = sz(8595);

    function Wz(zz) {
      var tz = Object.create(null);
      return zz && Object.keys(zz).forEach((function(sz) {
        if ("default" !== sz) {
          var Fz = Object.getOwnPropertyDescriptor(zz, sz);
          Object.defineProperty(tz, sz, Fz.get ? Fz : {
            enumerable: !0,
            get: function() {
              return zz[sz]
            }
          })
        }
      })), tz.default = zz, Object.freeze(tz)
    }
    var Xz = Wz(sz(8659));
    tz.HTTP = class {
      constructor(zz) {
        let tz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        this.client = zz, this.headers = tz
      }
      get(zz) {
        let tz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        return this.request("get", zz, tz)
      }
      post(zz) {
        let tz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        return this.request("post", zz, tz)
      }
      del(zz) {
        let tz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        return this.request("del", zz, tz)
      }
      put(zz) {
        let tz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        return this.request("put", zz, tz)
      }
      request(zz, tz) {
        let sz = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        return Xz[zz](this.client.getHttpEndpoint(tz), this.getOptions(sz)).catch((zz => {
          var tz;
          if (zz.aborted) throw new Fz.AbortError("Request aborted");
          const sz = zz.statusCode,
            Wz = (null === (tz = zz.data) || void 0 === tz ? void 0 : tz.error) || zz.statusMessage || zz.message;
          if (!sz && !Wz) throw zz;
          throw new Fz.ServerError(sz, Wz)
        }))
      }
      getOptions(zz) {
        return zz.headers = Object.assign({}, this.headers, zz.headers), this.authToken && (zz.headers.Authorization = `Bearer ${this.authToken}`), "undefined" !== typeof cc && cc.sys && cc.sys.isNative || (zz.withCredentials = !0), zz
      }
    }
  },
  8626: (zz, tz) => {
    var sz, Fz;
    tz.Protocol = void 0, (sz = tz.Protocol || (tz.Protocol = {}))[sz.HANDSHAKE = 9] = "HANDSHAKE", sz[sz.JOIN_ROOM = 10] = "JOIN_ROOM", sz[sz.ERROR = 11] = "ERROR", sz[sz.LEAVE_ROOM = 12] = "LEAVE_ROOM", sz[sz.ROOM_DATA = 13] = "ROOM_DATA", sz[sz.ROOM_STATE = 14] = "ROOM_STATE", sz[sz.ROOM_STATE_PATCH = 15] = "ROOM_STATE_PATCH", sz[sz.ROOM_DATA_SCHEMA = 16] = "ROOM_DATA_SCHEMA", sz[sz.ROOM_DATA_BYTES = 17] = "ROOM_DATA_BYTES", tz.ErrorCode = void 0, (Fz = tz.ErrorCode || (tz.ErrorCode = {}))[Fz.MATCHMAKE_NO_HANDLER = 4210] = "MATCHMAKE_NO_HANDLER", Fz[Fz.MATCHMAKE_INVALID_CRITERIA = 4211] = "MATCHMAKE_INVALID_CRITERIA", Fz[Fz.MATCHMAKE_INVALID_ROOM_ID = 4212] = "MATCHMAKE_INVALID_ROOM_ID", Fz[Fz.MATCHMAKE_UNHANDLED = 4213] = "MATCHMAKE_UNHANDLED", Fz[Fz.MATCHMAKE_EXPIRED = 4214] = "MATCHMAKE_EXPIRED", Fz[Fz.AUTH_FAILED = 4215] = "AUTH_FAILED", Fz[Fz.APPLICATION_ERROR = 4216] = "APPLICATION_ERROR"
  },
  8599: (zz, tz, sz) => {
    var Fz = sz(8605),
      Wz = sz(8626),
      Xz = sz(8628),
      Oz = sz(8634),
      oz = sz(8638),
      vz = sz(8611),
      Uz = sz(8642),
      Kz = sz(8595),
      uz = sz(8650);
    class Nz {
      constructor(zz, tz) {
        this.onStateChange = oz.createSignal(), this.onError = oz.createSignal(), this.qB = oz.createSignal(), this.onJoin = oz.createSignal(), this.hasJoined = !1, this.onMessageHandlers = Oz.createNanoEvents(), this.roomId = null, this.name = zz, this.packr = new uz.Packr, this.packr.encode(void 0), tz && (this.xH = new(Xz.getSerializer("schema")), this.rootSchema = tz, this.xH.state = new tz), this.onError(((zz, tz) => {
          var sz;
          return null === (sz = console.warn) || void 0 === sz ? void 0 : sz.call(console, `colyseus.js - onError => (${zz}) ${tz}`)
        })), this.qB((() => this.YH()))
      }
      connect(zz, tz) {
        let sz = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : this,
          Wz = arguments.length > 3 ? arguments[3] : void 0,
          Xz = arguments.length > 4 ? arguments[4] : void 0;
        const Oz = new Fz.Connection(Wz.protocol);
        if (sz.connection = Oz, Oz.events.onmessage = Nz.prototype.onMessageCallback.bind(sz), Oz.events.onclose = function(zz) {
            var Fz;
            if (!sz.hasJoined) return null === (Fz = console.warn) || void 0 === Fz || Fz.call(console, `Room connection was closed unexpectedly (${zz.code}): ${zz.reason}`), void sz.onError.invoke(zz.code, zz.reason);
            zz.code === Kz.CloseCode.DEVMODE_RESTART && tz ? tz() : (sz.qB.invoke(zz.code, zz.reason), sz.destroy())
          }, Oz.events.onerror = function(zz) {
            var tz;
            null === (tz = console.warn) || void 0 === tz || tz.call(console, `Room, onError (${zz.code}): ${zz.reason}`), sz.onError.invoke(zz.code, zz.reason)
          }, "h3" === Wz.protocol) {
          const tz = new URL(zz);
          Oz.connect(tz.origin, Wz)
        } else Oz.connect(zz, Xz)
      }
      leave() {
        let zz = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
        return new Promise((tz => {
          this.qB((zz => tz(zz))), this.connection ? zz ? (this.packr.buffer[0] = Wz.Protocol.LEAVE_ROOM, this.connection.send(this.packr.buffer.subarray(0, 1))) : this.connection.close() : this.qB.invoke(Kz.CloseCode.CONSENTED)
        }))
      }
      nB(zz, tz) {
        return this.onMessageHandlers.on(this.getMessageHandlerKey(zz), tz)
      }
      send(zz, tz) {
        const sz = {
          offset: 1
        };
        this.packr.buffer[0] = Wz.Protocol.ROOM_DATA, "string" === typeof zz ? vz.encode.string(this.packr.buffer, zz, sz) : vz.encode.number(this.packr.buffer, zz, sz), this.packr.position = 0;
        const Fz = void 0 !== tz ? this.packr.pack(tz, 2048 + sz.offset) : this.packr.buffer.subarray(0, sz.offset);
        this.connection.send(Fz)
      }
      sendUnreliable(zz, tz) {
        const sz = {
          offset: 1
        };
        this.packr.buffer[0] = Wz.Protocol.ROOM_DATA, "string" === typeof zz ? vz.encode.string(this.packr.buffer, zz, sz) : vz.encode.number(this.packr.buffer, zz, sz), this.packr.position = 0;
        const Fz = void 0 !== tz ? this.packr.pack(tz, 2048 + sz.offset) : this.packr.buffer.subarray(0, sz.offset);
        this.connection.sendUnreliable(Fz)
      }
      Om(zz, tz) {
        const sz = {
          offset: 1
        };
        if (this.packr.buffer[0] = Wz.Protocol.ROOM_DATA_BYTES, "string" === typeof zz ? vz.encode.string(this.packr.buffer, zz, sz) : vz.encode.number(this.packr.buffer, zz, sz), tz.byteLength + sz.offset > this.packr.buffer.byteLength) {
          const zz = new Uint8Array(sz.offset + tz.byteLength);
          zz.set(this.packr.buffer), this.packr.useBuffer(zz)
        }
        this.packr.buffer.set(tz, sz.offset), this.connection.send(this.packr.buffer.subarray(0, sz.offset + tz.byteLength))
      }
      get state() {
        return this.xH.getState()
      }
      YH() {
        this.onJoin.clear(), this.onStateChange.clear(), this.onError.clear(), this.qB.clear(), this.onMessageHandlers.events = {}, this.xH instanceof Uz.GJ && (this.xH.Gw.root.callbacks = {})
      }
      onMessageCallback(zz) {
        const tz = new Uint8Array(zz.data),
          sz = {
            offset: 1
          },
          Fz = tz[0];
        if (Fz === Wz.Protocol.JOIN_ROOM) {
          const zz = vz.decode.utf8Read(tz, sz, tz[sz.offset++]);
          if (this.serializerId = vz.decode.utf8Read(tz, sz, tz[sz.offset++]), !this.xH) {
            const zz = Xz.getSerializer(this.serializerId);
            this.xH = new zz
          }
          tz.byteLength > sz.offset && this.xH.handshake && this.xH.handshake(tz, sz), this.reconnectionToken = `${this.roomId}:${zz}`, this.hasJoined = !0, this.onJoin.invoke(), this.packr.buffer[0] = Wz.Protocol.JOIN_ROOM, this.connection.send(this.packr.buffer.subarray(0, 1))
        } else if (Fz === Wz.Protocol.ERROR) {
          const zz = vz.decode.number(tz, sz),
            Fz = vz.decode.string(tz, sz);
          this.onError.invoke(zz, Fz)
        } else if (Fz === Wz.Protocol.LEAVE_ROOM) this.leave();
        else if (Fz === Wz.Protocol.ROOM_STATE) this.xH.setState(tz, sz), this.onStateChange.invoke(this.xH.getState());
        else if (Fz === Wz.Protocol.ROOM_STATE_PATCH) this.xH.patch(tz, sz), this.onStateChange.invoke(this.xH.getState());
        else if (Fz === Wz.Protocol.ROOM_DATA) {
          const zz = vz.decode.stringCheck(tz, sz) ? vz.decode.string(tz, sz) : vz.decode.number(tz, sz),
            Fz = tz.byteLength > sz.offset ? uz.unpack(tz, {
              start: sz.offset
            }) : void 0;
          this.dispatchMessage(zz, Fz)
        } else if (Fz === Wz.Protocol.ROOM_DATA_BYTES) {
          const zz = vz.decode.stringCheck(tz, sz) ? vz.decode.string(tz, sz) : vz.decode.number(tz, sz);
          this.dispatchMessage(zz, tz.subarray(sz.offset))
        }
      }
      dispatchMessage(zz, tz) {
        var sz;
        const Fz = this.getMessageHandlerKey(zz);
        this.onMessageHandlers.events[Fz] ? this.onMessageHandlers.emit(Fz, tz) : this.onMessageHandlers.events["*"] ? this.onMessageHandlers.emit("*", zz, tz) : null === (sz = console.warn) || void 0 === sz || sz.call(console, `colyseus.js: onMessage() not registered for type '${zz}'.`)
      }
      destroy() {
        this.xH && this.xH.teardown()
      }
      getMessageHandlerKey(zz) {
        switch (typeof zz) {
          case "string":
            return zz;
          case "number":
            return `i${zz}`;
          default:
            throw new Error("invalid message type.")
        }
      }
    }
    tz.UN = Nz
  },
  8671: (zz, tz, sz) => {
    var Fz = sz(8589);
    let Wz;

    function Xz() {
      if (!Wz) try {
        Wz = "undefined" !== typeof cc && cc.sys && cc.sys.localStorage ? cc.sys.localStorage : window.localStorage
      } catch (zz) {}
      return Wz || "undefined" === typeof globalThis.indexedDB || (Wz = new Oz), Wz || (Wz = {
        cache: {},
        setItem: function(zz, tz) {
          this.cache[zz] = tz
        },
        getItem: function(zz) {
          this.cache[zz]
        },
        removeItem: function(zz) {
          delete this.cache[zz]
        }
      }), Wz
    }
    class Oz {
      constructor() {
        this.dbPromise = new Promise((zz => {
          const tz = indexedDB.open("_colyseus_storage", 1);
          tz.onupgradeneeded = () => tz.result.createObjectStore("store"), tz.onsuccess = () => zz(tz.result)
        }))
      }
      tx(zz, tz) {
        return Fz.__awaiter(this, void 0, void 0, (function*() {
          const sz = (yield this.dbPromise).transaction("store", zz).objectStore("store");
          return tz(sz)
        }))
      }
      setItem(zz, tz) {
        return this.tx("readwrite", (sz => sz.put(tz, zz))).then()
      }
      getItem(zz) {
        return Fz.__awaiter(this, void 0, void 0, (function*() {
          const tz = yield this.tx("readonly", (tz => tz.get(zz)));
          return new Promise((zz => {
            tz.onsuccess = () => zz(tz.result)
          }))
        }))
      }
      removeItem(zz) {
        return this.tx("readwrite", (tz => tz.delete(zz))).then()
      }
    }
    tz.getItem = function(zz, tz) {
      const sz = Xz().getItem(zz);
      "undefined" !== typeof Promise && sz instanceof Promise ? sz.then((zz => tz(zz))) : tz(sz)
    }, tz.removeItem = function(zz) {
      Xz().removeItem(zz)
    }, tz.setItem = function(zz, tz) {
      Xz().setItem(zz, tz)
    }
  },
  8634: (zz, tz) => {
    tz.createNanoEvents = () => ({
      emit(zz) {
        let tz = this.events[zz] || [];
        for (var sz = arguments.length, Fz = new Array(sz > 1 ? sz - 1 : 0), Wz = 1; Wz < sz; Wz++) Fz[Wz - 1] = arguments[Wz];
        for (let Xz = 0, Oz = tz.length; Xz < Oz; Xz++) tz[Xz](...Fz)
      },
      events: {},
      on(zz, tz) {
        var sz;
        return (null === (sz = this.events[zz]) || void 0 === sz ? void 0 : sz.push(tz)) || (this.events[zz] = [tz]), () => {
          var sz;
          this.events[zz] = null === (sz = this.events[zz]) || void 0 === sz ? void 0 : sz.filter((zz => tz !== zz))
        }
      }
    })
  },
  8638: (zz, tz) => {
    class sz {
      constructor() {
        this.handlers = []
      }
      register(zz) {
        return this.handlers.push(zz), this
      }
      invoke() {
        for (var zz = arguments.length, tz = new Array(zz), sz = 0; sz < zz; sz++) tz[sz] = arguments[sz];
        this.handlers.forEach((zz => zz.apply(this, tz)))
      }
      invokeAsync() {
        for (var zz = arguments.length, tz = new Array(zz), sz = 0; sz < zz; sz++) tz[sz] = arguments[sz];
        return Promise.all(this.handlers.map((zz => zz.apply(this, tz))))
      }
      remove(zz) {
        const tz = this.handlers.indexOf(zz);
        this.handlers[tz] = this.handlers[this.handlers.length - 1], this.handlers.pop()
      }
      clear() {
        this.handlers = []
      }
    }
    tz.EventEmitter = sz, tz.createSignal = function() {
      const zz = new sz;

      function tz(tz) {
        return zz.register(tz, null === this)
      }
      return tz.once = tz => {
        const sz = function() {
          for (var Fz = arguments.length, Wz = new Array(Fz), Xz = 0; Xz < Fz; Xz++) Wz[Xz] = arguments[Xz];
          tz.apply(this, Wz), zz.remove(sz)
        };
        zz.register(sz)
      }, tz.remove = tz => zz.remove(tz), tz.invoke = function() {
        return zz.invoke(...arguments)
      }, tz.invokeAsync = function() {
        return zz.invokeAsync(...arguments)
      }, tz.clear = () => zz.clear(), tz
    }
  },
  8595: (zz, tz) => {
    var sz;
    tz.CloseCode = void 0, (sz = tz.CloseCode || (tz.CloseCode = {}))[sz.CONSENTED = 4e3] = "CONSENTED", sz[sz.DEVMODE_RESTART = 4010] = "DEVMODE_RESTART";
    class Fz extends Error {
      constructor(zz, tz) {
        super(tz), this.name = "ServerError", this.code = zz
      }
    }
    class Wz extends Error {
      constructor(zz) {
        super(zz), this.name = "AbortError"
      }
    }
    tz.AbortError = Wz, tz.ServerError = Fz
  },
  8570: (zz, tz, sz) => {
    sz(8577);
    var Fz = sz(8586),
      Wz = sz(8626),
      Xz = sz(8599),
      Oz = sz(8666),
      oz = sz(8595),
      vz = sz(8642),
      Uz = sz(8684),
      Kz = sz(8628);
    Kz.registerSerializer("schema", vz.GJ), Kz.registerSerializer("none", Uz.NoneSerializer), tz.Client = Fz.Client, tz.MatchMakeError = Fz.MatchMakeError, Object.defineProperty(tz, "ErrorCode", {
      enumerable: !0,
      get: function() {
        return Wz.ErrorCode
      }
    }), Object.defineProperty(tz, "Protocol", {
      enumerable: !0,
      get: function() {
        return Wz.Protocol
      }
    }), tz.UN = Xz.UN, tz.Auth = Oz.Auth, tz.ServerError = oz.ServerError, tz.GJ = vz.GJ, tz.getStateCallbacks = vz.getStateCallbacks, tz.registerSerializer = Kz.registerSerializer
  },
  8577: () => {
    ArrayBuffer.isView || (ArrayBuffer.isView = zz => null !== zz && "object" === typeof zz && zz.buffer instanceof ArrayBuffer), "undefined" === typeof globalThis && "undefined" !== typeof window && (window.globalThis = window), "undefined" === typeof FormData && (globalThis.FormData = class {})
  },
  8684: (zz, tz) => {
    tz.NoneSerializer = class {
      setState(zz) {}
      getState() {
        return null
      }
      patch(zz) {}
      teardown() {}
      handshake(zz) {}
    }
  },
  8642: (zz, tz, sz) => {
    var Fz = sz(8611);
    tz.GJ = class {
      setState(zz, tz) {
        this.Gw.decode(zz, tz)
      }
      getState() {
        return this.state
      }
      patch(zz, tz) {
        return this.Gw.decode(zz, tz)
      }
      teardown() {
        this.Gw.root.clearRefs()
      }
      handshake(zz, tz) {
        this.state ? (Fz.Reflection.decode(zz, tz), this.Gw = new Fz.Decoder(this.state)) : (this.Gw = Fz.Reflection.decode(zz, tz), this.state = this.Gw.state)
      }
    }, tz.getStateCallbacks = function(zz) {
      try {
        return Fz.getDecoderStateCallbacks(zz.xH.Gw)
      } catch (tz) {
        return
      }
    }
  },
  8628: (zz, tz) => {
    const sz = {};
    tz.getSerializer = function(zz) {
      const tz = sz[zz];
      if (!tz) throw new Error("missing serializer: " + zz);
      return tz
    }, tz.registerSerializer = function(zz, tz) {
      sz[zz] = tz
    }
  },
  8607: (zz, tz, sz) => {
    var Fz = sz(8589),
      Wz = sz(8611);
    tz.H3TransportTransport = class {
      constructor(zz) {
        this.events = zz, this.isOpen = !1, this.lengthPrefixBuffer = new Uint8Array(9)
      }
      connect(zz) {
        let tz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        const sz = tz.fingerprint && {
          serverCertificateHashes: [{
            algorithm: "sha-256",
            value: new Uint8Array(tz.fingerprint).buffer
          }]
        } || void 0;
        this.wt = new WebTransport(zz, sz), this.wt.ready.then((zz => {
          console.log("WebTransport ready!", zz), this.isOpen = !0, this.unreliableReader = this.wt.datagrams.readable.getReader(), this.unreliableWriter = this.wt.datagrams.writable.getWriter();
          this.wt.incomingBidirectionalStreams.getReader().read().then((zz => {
            this.reader = zz.value.readable.getReader(), this.writer = zz.value.writable.getWriter(), this.sendSeatReservation(tz.room.roomId, tz.sessionId, tz.reconnectionToken), this.readIncomingData(), this.readIncomingUnreliableData()
          })).catch((zz => {
            console.error("failed to read incoming stream", zz), console.error("TODO: close the connection")
          }))
        })).catch((zz => {
          console.log("WebTransport not ready!", zz), this._close()
        })), this.wt.closed.then((zz => {
          console.log("WebTransport closed w/ success", zz), this.events.onclose({
            code: zz.closeCode,
            reason: zz.reason
          })
        })).catch((zz => {
          console.log("WebTransport closed w/ error", zz), this.events.onerror(zz), this.events.onclose({
            code: zz.closeCode,
            reason: zz.reason
          })
        })).finally((() => {
          this._close()
        }))
      }
      send(zz) {
        const tz = Wz.encode.number(this.lengthPrefixBuffer, zz.length, {
            offset: 0
          }),
          sz = new Uint8Array(tz + zz.length);
        sz.set(this.lengthPrefixBuffer.subarray(0, tz), 0), sz.set(zz, tz), this.writer.write(sz)
      }
      sendUnreliable(zz) {
        const tz = Wz.encode.number(this.lengthPrefixBuffer, zz.length, {
            offset: 0
          }),
          sz = new Uint8Array(tz + zz.length);
        sz.set(this.lengthPrefixBuffer.subarray(0, tz), 0), sz.set(zz, tz), this.unreliableWriter.write(sz)
      }
      close(zz, tz) {
        try {
          this.wt.close({
            closeCode: zz,
            reason: tz
          })
        } catch (sz) {
          console.error(sz)
        }
      }
      readIncomingData() {
        return Fz.__awaiter(this, void 0, void 0, (function*() {
          let zz;
          for (; this.isOpen;) {
            try {
              zz = yield this.reader.read();
              const tz = zz.value,
                sz = {
                  offset: 0
                };
              do {
                const zz = Wz.decode.number(tz, sz);
                this.events.onmessage({
                  data: tz.subarray(sz.offset, sz.offset + zz)
                }), sz.offset += zz
              } while (sz.offset < tz.length)
            } catch (tz) {
              -1 === tz.message.indexOf("session is closed") && console.error("H3Transport: failed to read incoming data", tz);
              break
            }
            if (zz.done) break
          }
        }))
      }
      readIncomingUnreliableData() {
        return Fz.__awaiter(this, void 0, void 0, (function*() {
          let zz;
          for (; this.isOpen;) {
            try {
              zz = yield this.unreliableReader.read();
              const tz = zz.value,
                sz = {
                  offset: 0
                };
              do {
                const zz = Wz.decode.number(tz, sz);
                this.events.onmessage({
                  data: tz.subarray(sz.offset, sz.offset + zz)
                }), sz.offset += zz
              } while (sz.offset < tz.length)
            } catch (tz) {
              -1 === tz.message.indexOf("session is closed") && console.error("H3Transport: failed to read incoming data", tz);
              break
            }
            if (zz.done) break
          }
        }))
      }
      sendSeatReservation(zz, tz, sz) {
        const Fz = {
            offset: 0
          },
          Xz = [];
        Wz.encode.string(Xz, zz, Fz), Wz.encode.string(Xz, tz, Fz), sz && Wz.encode.string(Xz, sz, Fz), this.writer.write(new Uint8Array(Xz).buffer)
      }
      _close() {
        this.isOpen = !1
      }
    }
  },
  8618: (zz, tz, sz) => {
    var Fz = sz(8622);
    const Wz = globalThis.WebSocket || Fz;
    tz.WebSocketTransport = class {
      constructor(zz) {
        this.events = zz
      }
      send(zz) {
        this.ws.send(zz)
      }
      sendUnreliable(zz) {
        console.warn("colyseus.js: The WebSocket transport does not support unreliable messages")
      }
      connect(zz, tz) {
        try {
          this.ws = new Wz(zz, {
            headers: tz,
            protocols: this.protocols
          })
        } catch (sz) {
          this.ws = new Wz(zz, this.protocols)
        }
        this.ws.binaryType = "arraybuffer", this.ws.onopen = this.events.onopen, this.ws.onmessage = this.events.onmessage, this.ws.onclose = this.events.onclose, this.ws.onerror = this.events.onerror
      }
      close(zz, tz) {
        this.ws.close(zz, tz)
      }
      get isOpen() {
        return this.ws.readyState === Wz.OPEN
      }
    }
  },
  8622: zz => {
    zz.exports = function() {
      throw new Error("ws does not work in the browser. Browser clients must use the native WebSocket object")
    }
  },
  8659: (zz, tz, sz) => {
    function Fz(zz, tz) {
      tz.headers = zz.headers || {}, tz.statusMessage = zz.statusText, tz.statusCode = zz.status, tz.data = zz.response
    }

    function Wz(zz, tz, sz) {
      return new Promise((function(Wz, Xz) {
        sz = sz || {};
        var Oz, oz, vz, Uz = new XMLHttpRequest,
          Kz = sz.body,
          uz = sz.headers || {};
        for (Oz in sz.timeout && (Uz.timeout = sz.timeout), Uz.ontimeout = Uz.onerror = function(zz) {
            zz.timeout = "timeout" == zz.type, Xz(zz)
          }, Uz.onabort = function(zz) {
            zz.aborted = !0, Xz(zz)
          }, Uz.open(zz, tz.href || tz), Uz.onload = function() {
            for (vz = Uz.getAllResponseHeaders().trim().split(/[\r\n]+/), Fz(Uz, Uz); oz = vz.shift();) oz = oz.split(": "), Uz.headers[oz.shift().toLowerCase()] = oz.join(": ");
            if ((oz = Uz.headers["content-type"]) && ~oz.indexOf("application/json")) try {
              Uz.data = JSON.parse(Uz.data, sz.reviver)
            } catch (zz) {
              return Fz(Uz, zz), Xz(zz)
            }(Uz.status >= 400 ? Xz : Wz)(Uz)
          }, typeof FormData < "u" && Kz instanceof FormData || Kz && "object" == typeof Kz && (uz["content-type"] = "application/json", Kz = JSON.stringify(Kz)), Uz.withCredentials = !!sz.withCredentials, uz) Uz.setRequestHeader(Oz, uz[Oz]);
        Uz.send(Kz), sz.signal && sz.signal.addEventListener("abort", (function() {
          Uz.abort()
        }))
      }))
    }
    sz.r(tz), sz.d(tz, {
      del: () => vz,
      get: () => Xz,
      patch: () => oz,
      post: () => Oz,
      put: () => Uz,
      send: () => Wz
    });
    var Xz = Wz.bind(Wz, "GET"),
      Oz = Wz.bind(Wz, "POST"),
      oz = Wz.bind(Wz, "PATCH"),
      vz = Wz.bind(Wz, "DELETE"),
      Uz = Wz.bind(Wz, "PUT")
  },
  8650: (zz, tz, sz) => {
    var Fz, Wz, Xz;
    sz.r(tz), sz.d(tz, {
      ALWAYS: () => St,
      C1: () => Yz,
      DECIMAL_FIT: () => Rt,
      DECIMAL_ROUND: () => Vt,
      Decoder: () => vt,
      Encoder: () => nt,
      FLOAT32_OPTIONS: () => bt,
      NEVER: () => qt,
      Packr: () => At,
      RESERVE_START_SPACE: () => Et,
      RESET_BUFFER_MODE: () => ft,
      REUSE_BUFFER_MODE: () => pt,
      Unpackr: () => ez,
      addExtension: () => Qt,
      clearSource: () => Ot,
      decode: () => Nt,
      decodeIter: () => zs,
      encode: () => lt,
      encodeIter: () => ts,
      isNativeAccelerationEnabled: () => kz,
      mapsAsObjects: () => Fs,
      pack: () => Lt,
      roundFloat32: () => Pt,
      unpack: () => Kt,
      unpackMultiple: () => ut,
      useRecords: () => ss
    });
    try {
      Fz = new TextDecoder
    } catch (Ws) {}
    var Oz = 0;
    const oz = [];
    var vz, Uz, Kz, uz, Nz, bz = oz,
      wz = 0,
      Dz = {},
      gz = 0,
      Hz = 0,
      Bz = [],
      Pz = {
        useRecords: !1,
        mapsAsObjects: !0
      };
    class rz {}
    const Yz = new rz;
    Yz.name = "MessagePack 0xC1";
    var xz, mz, Jz, Iz = !1,
      Cz = 2;
    try {
      new Function("")
    } catch (Ws) {
      Cz = 1 / 0
    }
    class ez {
      constructor(zz) {
        zz && (!1 === zz.useRecords && void 0 === zz.mapsAsObjects && (zz.mapsAsObjects = !0), zz.sequential && !1 !== zz.trusted && (zz.trusted = !0, zz.structures || 0 == zz.useRecords || (zz.structures = [], zz.maxSharedStructures || (zz.maxSharedStructures = 0))), zz.structures ? zz.structures.sharedLength = zz.structures.length : zz.getStructures && ((zz.structures = []).uninitialized = !0, zz.structures.sharedLength = 0), zz.int64AsNumber && (zz.int64AsType = "number")), Object.assign(this, zz)
      }
      unpack(zz, tz) {
        if (Wz) return Xt((() => (Ot(), this ? this.unpack(zz, tz) : ez.prototype.unpack.call(Pz, zz, tz))));
        zz.buffer || zz.constructor !== ArrayBuffer || (zz = "undefined" !== typeof Buffer ? Buffer.from(zz) : new Uint8Array(zz)), "object" === typeof tz ? (Xz = tz.end || zz.length, Oz = tz.start || 0) : (Oz = 0, Xz = tz > -1 ? tz : zz.length), wz = 0, Hz = 0, Uz = null, bz = oz, Kz = null, Wz = zz;
        try {
          Nz = zz.dataView || (zz.dataView = new DataView(zz.buffer, zz.byteOffset, zz.byteLength))
        } catch (Ws) {
          if (Wz = null, zz instanceof Uint8Array) throw Ws;
          throw new Error("Source must be a Uint8Array or Buffer but was a " + (zz && "object" == typeof zz ? zz.constructor.name : typeof zz))
        }
        if (this instanceof ez) {
          if (Dz = this, this.structures) return vz = this.structures, Zz(tz);
          (!vz || vz.length > 0) && (vz = [])
        } else Dz = Pz, (!vz || vz.length > 0) && (vz = []);
        return Zz(tz)
      }
      unpackMultiple(zz, tz) {
        let sz, Fz = 0;
        try {
          Iz = !0;
          let Wz = zz.length,
            Xz = this ? this.unpack(zz, Wz) : Ut.unpack(zz, Wz);
          if (!tz) {
            for (sz = [Xz]; Oz < Wz;) Fz = Oz, sz.push(Zz());
            return sz
          }
          if (!1 === tz(Xz, Fz, Oz)) return;
          for (; Oz < Wz;)
            if (Fz = Oz, !1 === tz(Zz(), Fz, Oz)) return
        } catch (Ws) {
          throw Ws.lastPosition = Fz, Ws.values = sz, Ws
        } finally {
          Iz = !1, Ot()
        }
      }
      _mergeStructures(zz, tz) {
        mz && (zz = mz.call(this, zz)), zz = zz || [], Object.isFrozen(zz) && (zz = zz.map((zz => zz.slice(0))));
        for (let sz = 0, Fz = zz.length; sz < Fz; sz++) {
          let tz = zz[sz];
          tz && (tz.isShared = !0, sz >= 32 && (tz.highByte = sz - 32 >> 5))
        }
        zz.sharedLength = zz.length;
        for (let sz in tz || [])
          if (sz >= 0) {
            let Fz = zz[sz],
              Wz = tz[sz];
            Wz && (Fz && ((zz.restoreStructures || (zz.restoreStructures = []))[sz] = Fz), zz[sz] = Wz)
          } return this.structures = zz
      }
      decode(zz, tz) {
        return this.unpack(zz, tz)
      }
    }

    function Zz(zz) {
      try {
        if (!Dz.trusted && !Iz) {
          let zz = vz.sharedLength || 0;
          zz < vz.length && (vz.length = zz)
        }
        let tz;
        if (Dz.randomAccessStructure && Wz[Oz] < 64 && Wz[Oz] >= 32 && xz ? (tz = xz(Wz, Oz, Xz, Dz), Wz = null, zz && zz.lazy || !tz || (tz = tz.toJSON()), Oz = Xz) : tz = Tz(), Kz && (Oz = Kz.postBundlePosition, Kz = null), Iz && (vz.restoreStructures = null), Oz == Xz) vz && vz.restoreStructures && Gz(), vz = null, Wz = null, uz && (uz = null);
        else {
          if (Oz > Xz) throw new Error("Unexpected end of MessagePack data");
          if (!Iz) {
            let zz;
            try {
              zz = JSON.stringify(tz, ((zz, tz) => "bigint" === typeof tz ? `${tz}n` : tz)).slice(0, 100)
            } catch (Ws) {
              zz = "(JSON view not available " + Ws + ")"
            }
            throw new Error("Data read, but end of buffer not reached " + zz)
          }
        }
        return tz
      } catch (Ws) {
        throw vz && vz.restoreStructures && Gz(), Ot(), (Ws instanceof RangeError || Ws.message.startsWith("Unexpected end of buffer") || Oz > Xz) && (Ws.incomplete = !0), Ws
      }
    }

    function Gz() {
      for (let zz in vz.restoreStructures) vz[zz] = vz.restoreStructures[zz];
      vz.restoreStructures = null
    }

    function Tz() {
      let zz = Wz[Oz++];
      if (zz < 160) {
        if (zz < 128) {
          if (zz < 64) return zz;
          {
            let tz = vz[63 & zz] || Dz.getStructures && yz()[63 & zz];
            return tz ? (tz.read || (tz.read = jz(tz, 63 & zz)), tz.read()) : zz
          }
        }
        if (zz < 144) {
          if (zz -= 128, Dz.mapsAsObjects) {
            let tz = {};
            for (let sz = 0; sz < zz; sz++) {
              let zz = fz();
              "__proto__" === zz && (zz = "__proto_"), tz[zz] = Tz()
            }
            return tz
          } {
            let tz = new Map;
            for (let sz = 0; sz < zz; sz++) tz.set(Tz(), Tz());
            return tz
          }
        } {
          zz -= 144;
          let tz = new Array(zz);
          for (let sz = 0; sz < zz; sz++) tz[sz] = Tz();
          return Dz.freezeData ? Object.freeze(tz) : tz
        }
      }
      if (zz < 192) {
        let tz = zz - 160;
        if (Hz >= Oz) return Uz.slice(Oz - gz, (Oz += tz) - gz);
        if (0 == Hz && Xz < 140) {
          let zz = tz < 16 ? qz(tz) : az(tz);
          if (null != zz) return zz
        }
        return Mz(tz)
      } {
        let tz;
        switch (zz) {
          case 192:
            return null;
          case 193:
            return Kz ? (tz = Tz(), tz > 0 ? Kz[1].slice(Kz.position1, Kz.position1 += tz) : Kz[0].slice(Kz.position0, Kz.position0 -= tz)) : Yz;
          case 194:
            return !1;
          case 195:
            return !0;
          case 196:
            if (tz = Wz[Oz++], void 0 === tz) throw new Error("Unexpected end of buffer");
            return Vz(tz);
          case 197:
            return tz = Nz.getUint16(Oz), Oz += 2, Vz(tz);
          case 198:
            return tz = Nz.getUint32(Oz), Oz += 4, Vz(tz);
          case 199:
            return Rz(Wz[Oz++]);
          case 200:
            return tz = Nz.getUint16(Oz), Oz += 2, Rz(tz);
          case 201:
            return tz = Nz.getUint32(Oz), Oz += 4, Rz(tz);
          case 202:
            if (tz = Nz.getFloat32(Oz), Dz.useFloat32 > 2) {
              let zz = ot[(127 & Wz[Oz]) << 1 | Wz[Oz + 1] >> 7];
              return Oz += 4, (zz * tz + (tz > 0 ? .5 : -.5) | 0) / zz
            }
            return Oz += 4, tz;
          case 203:
            return tz = Nz.getFloat64(Oz), Oz += 8, tz;
          case 204:
            return Wz[Oz++];
          case 205:
            return tz = Nz.getUint16(Oz), Oz += 2, tz;
          case 206:
            return tz = Nz.getUint32(Oz), Oz += 4, tz;
          case 207:
            return "number" === Dz.int64AsType ? (tz = 4294967296 * Nz.getUint32(Oz), tz += Nz.getUint32(Oz + 4)) : "string" === Dz.int64AsType ? tz = Nz.getBigUint64(Oz).toString() : "auto" === Dz.int64AsType ? (tz = Nz.getBigUint64(Oz), tz <= BigInt(2) << BigInt(52) && (tz = Number(tz))) : tz = Nz.getBigUint64(Oz), Oz += 8, tz;
          case 208:
            return Nz.getInt8(Oz++);
          case 209:
            return tz = Nz.getInt16(Oz), Oz += 2, tz;
          case 210:
            return tz = Nz.getInt32(Oz), Oz += 4, tz;
          case 211:
            return "number" === Dz.int64AsType ? (tz = 4294967296 * Nz.getInt32(Oz), tz += Nz.getUint32(Oz + 4)) : "string" === Dz.int64AsType ? tz = Nz.getBigInt64(Oz).toString() : "auto" === Dz.int64AsType ? (tz = Nz.getBigInt64(Oz), tz >= BigInt(-2) << BigInt(52) && tz <= BigInt(2) << BigInt(52) && (tz = Number(tz))) : tz = Nz.getBigInt64(Oz), Oz += 8, tz;
          case 212:
            if (tz = Wz[Oz++], 114 == tz) return zt(63 & Wz[Oz++]);
            {
              let zz = Bz[tz];
              if (zz) return zz.read ? (Oz++, zz.read(Tz())) : zz.noBuffer ? (Oz++, zz()) : zz(Wz.subarray(Oz, ++Oz));
              throw new Error("Unknown extension " + tz)
            }
          case 213:
            return tz = Wz[Oz], 114 == tz ? (Oz++, zt(63 & Wz[Oz++], Wz[Oz++])) : Rz(2);
          case 214:
            return Rz(4);
          case 215:
            return Rz(8);
          case 216:
            return Rz(16);
          case 217:
            return tz = Wz[Oz++], Hz >= Oz ? Uz.slice(Oz - gz, (Oz += tz) - gz) : dz(tz);
          case 218:
            return tz = Nz.getUint16(Oz), Hz >= (Oz += 2) ? Uz.slice(Oz - gz, (Oz += tz) - gz) : hz(tz);
          case 219:
            return tz = Nz.getUint32(Oz), Hz >= (Oz += 4) ? Uz.slice(Oz - gz, (Oz += tz) - gz) : Qz(tz);
          case 220:
            return tz = Nz.getUint16(Oz), Oz += 2, Lz(tz);
          case 221:
            return tz = Nz.getUint32(Oz), Oz += 4, Lz(tz);
          case 222:
            return tz = Nz.getUint16(Oz), Oz += 2, lz(tz);
          case 223:
            return tz = Nz.getUint32(Oz), Oz += 4, lz(tz);
          default:
            if (zz >= 224) return zz - 256;
            if (void 0 === zz) {
              let zz = new Error("Unexpected end of MessagePack data");
              throw zz.incomplete = !0, zz
            }
            throw new Error("Unknown MessagePack token " + zz)
        }
      }
    }
    const cz = /^[a-zA-Z_$][a-zA-Z\d_$]*$/;

    function jz(zz, tz) {
      function sz() {
        if (sz.count++ > Cz) {
          let sz = zz.read = new Function("r", "return function(){return " + (Dz.freezeData ? "Object.freeze" : "") + "({" + zz.map((zz => "__proto__" === zz ? "__proto_:r()" : cz.test(zz) ? zz + ":r()" : "[" + JSON.stringify(zz) + "]:r()")).join(",") + "})}")(Tz);
          return 0 === zz.highByte && (zz.read = Az(tz, zz.read)), sz()
        }
        let Fz = {};
        for (let tz = 0, sz = zz.length; tz < sz; tz++) {
          let sz = zz[tz];
          "__proto__" === sz && (sz = "__proto_"), Fz[sz] = Tz()
        }
        return Dz.freezeData ? Object.freeze(Fz) : Fz
      }
      return sz.count = 0, 0 === zz.highByte ? Az(tz, sz) : sz
    }
    const Az = (zz, tz) => function() {
      let sz = Wz[Oz++];
      if (0 === sz) return tz();
      let Fz = zz < 32 ? -(zz + (sz << 5)) : zz + (sz << 5),
        Xz = vz[Fz] || yz()[Fz];
      if (!Xz) throw new Error("Record id is not defined for " + Fz);
      return Xz.read || (Xz.read = jz(Xz, zz)), Xz.read()
    };

    function yz() {
      let zz = Xt((() => (Wz = null, Dz.getStructures())));
      return vz = Dz._mergeStructures(zz, vz)
    }
    var Mz = iz,
      dz = iz,
      hz = iz,
      Qz = iz;
    let kz = !1;

    function iz(zz) {
      let tz;
      if (zz < 16 && (tz = qz(zz))) return tz;
      if (zz > 64 && Fz) return Fz.decode(Wz.subarray(Oz, Oz += zz));
      const sz = Oz + zz,
        Xz = [];
      for (tz = ""; Oz < sz;) {
        const zz = Wz[Oz++];
        if (0 === (128 & zz)) Xz.push(zz);
        else if (192 === (224 & zz)) {
          const tz = 63 & Wz[Oz++];
          Xz.push((31 & zz) << 6 | tz)
        } else if (224 === (240 & zz)) {
          const tz = 63 & Wz[Oz++],
            sz = 63 & Wz[Oz++];
          Xz.push((31 & zz) << 12 | tz << 6 | sz)
        } else if (240 === (248 & zz)) {
          let tz = (7 & zz) << 18 | (63 & Wz[Oz++]) << 12 | (63 & Wz[Oz++]) << 6 | 63 & Wz[Oz++];
          tz > 65535 && (tz -= 65536, Xz.push(tz >>> 10 & 1023 | 55296), tz = 56320 | 1023 & tz), Xz.push(tz)
        } else Xz.push(zz);
        Xz.length >= 4096 && (tz += nz.apply(String, Xz), Xz.length = 0)
      }
      return Xz.length > 0 && (tz += nz.apply(String, Xz)), tz
    }

    function Lz(zz) {
      let tz = new Array(zz);
      for (let sz = 0; sz < zz; sz++) tz[sz] = Tz();
      return Dz.freezeData ? Object.freeze(tz) : tz
    }

    function lz(zz) {
      if (Dz.mapsAsObjects) {
        let tz = {};
        for (let sz = 0; sz < zz; sz++) {
          let zz = fz();
          "__proto__" === zz && (zz = "__proto_"), tz[zz] = Tz()
        }
        return tz
      } {
        let tz = new Map;
        for (let sz = 0; sz < zz; sz++) tz.set(Tz(), Tz());
        return tz
      }
    }
    var nz = String.fromCharCode;

    function az(zz) {
      let tz = Oz,
        sz = new Array(zz);
      for (let Fz = 0; Fz < zz; Fz++) {
        const zz = Wz[Oz++];
        if ((128 & zz) > 0) return void(Oz = tz);
        sz[Fz] = zz
      }
      return nz.apply(String, sz)
    }

    function qz(zz) {
      if (zz < 4) {
        if (zz < 2) {
          if (0 === zz) return "";
          {
            let zz = Wz[Oz++];
            return (128 & zz) > 1 ? void(Oz -= 1) : nz(zz)
          }
        } {
          let tz = Wz[Oz++],
            sz = Wz[Oz++];
          if ((128 & tz) > 0 || (128 & sz) > 0) return void(Oz -= 2);
          if (zz < 3) return nz(tz, sz);
          let Fz = Wz[Oz++];
          return (128 & Fz) > 0 ? void(Oz -= 3) : nz(tz, sz, Fz)
        }
      } {
        let tz = Wz[Oz++],
          sz = Wz[Oz++],
          Fz = Wz[Oz++],
          Xz = Wz[Oz++];
        if ((128 & tz) > 0 || (128 & sz) > 0 || (128 & Fz) > 0 || (128 & Xz) > 0) return void(Oz -= 4);
        if (zz < 6) {
          if (4 === zz) return nz(tz, sz, Fz, Xz);
          {
            let zz = Wz[Oz++];
            return (128 & zz) > 0 ? void(Oz -= 5) : nz(tz, sz, Fz, Xz, zz)
          }
        }
        if (zz < 8) {
          let oz = Wz[Oz++],
            vz = Wz[Oz++];
          if ((128 & oz) > 0 || (128 & vz) > 0) return void(Oz -= 6);
          if (zz < 7) return nz(tz, sz, Fz, Xz, oz, vz);
          let Uz = Wz[Oz++];
          return (128 & Uz) > 0 ? void(Oz -= 7) : nz(tz, sz, Fz, Xz, oz, vz, Uz)
        } {
          let oz = Wz[Oz++],
            vz = Wz[Oz++],
            Uz = Wz[Oz++],
            Kz = Wz[Oz++];
          if ((128 & oz) > 0 || (128 & vz) > 0 || (128 & Uz) > 0 || (128 & Kz) > 0) return void(Oz -= 8);
          if (zz < 10) {
            if (8 === zz) return nz(tz, sz, Fz, Xz, oz, vz, Uz, Kz);
            {
              let zz = Wz[Oz++];
              return (128 & zz) > 0 ? void(Oz -= 9) : nz(tz, sz, Fz, Xz, oz, vz, Uz, Kz, zz)
            }
          }
          if (zz < 12) {
            let uz = Wz[Oz++],
              Nz = Wz[Oz++];
            if ((128 & uz) > 0 || (128 & Nz) > 0) return void(Oz -= 10);
            if (zz < 11) return nz(tz, sz, Fz, Xz, oz, vz, Uz, Kz, uz, Nz);
            let bz = Wz[Oz++];
            return (128 & bz) > 0 ? void(Oz -= 11) : nz(tz, sz, Fz, Xz, oz, vz, Uz, Kz, uz, Nz, bz)
          } {
            let uz = Wz[Oz++],
              Nz = Wz[Oz++],
              bz = Wz[Oz++],
              wz = Wz[Oz++];
            if ((128 & uz) > 0 || (128 & Nz) > 0 || (128 & bz) > 0 || (128 & wz) > 0) return void(Oz -= 12);
            if (zz < 14) {
              if (12 === zz) return nz(tz, sz, Fz, Xz, oz, vz, Uz, Kz, uz, Nz, bz, wz);
              {
                let zz = Wz[Oz++];
                return (128 & zz) > 0 ? void(Oz -= 13) : nz(tz, sz, Fz, Xz, oz, vz, Uz, Kz, uz, Nz, bz, wz, zz)
              }
            } {
              let Dz = Wz[Oz++],
                gz = Wz[Oz++];
              if ((128 & Dz) > 0 || (128 & gz) > 0) return void(Oz -= 14);
              if (zz < 15) return nz(tz, sz, Fz, Xz, oz, vz, Uz, Kz, uz, Nz, bz, wz, Dz, gz);
              let Hz = Wz[Oz++];
              return (128 & Hz) > 0 ? void(Oz -= 15) : nz(tz, sz, Fz, Xz, oz, vz, Uz, Kz, uz, Nz, bz, wz, Dz, gz, Hz)
            }
          }
        }
      }
    }

    function Sz() {
      let zz, tz = Wz[Oz++];
      if (tz < 192) zz = tz - 160;
      else switch (tz) {
        case 217:
          zz = Wz[Oz++];
          break;
        case 218:
          zz = Nz.getUint16(Oz), Oz += 2;
          break;
        case 219:
          zz = Nz.getUint32(Oz), Oz += 4;
          break;
        default:
          throw new Error("Expected string")
      }
      return iz(zz)
    }

    function Vz(zz) {
      return Dz.copyBuffers ? Uint8Array.prototype.slice.call(Wz, Oz, Oz += zz) : Wz.subarray(Oz, Oz += zz)
    }

    function Rz(zz) {
      let tz = Wz[Oz++];
      if (Bz[tz]) {
        let sz;
        return Bz[tz](Wz.subarray(Oz, sz = Oz += zz), (zz => {
          Oz = zz;
          try {
            return Tz()
          } finally {
            Oz = sz
          }
        }))
      }
      throw new Error("Unknown extension type " + tz)
    }
    var pz = new Array(4096);

    function fz() {
      let zz = Wz[Oz++];
      if (!(zz >= 160 && zz < 192)) return Oz--, Ez(Tz());
      if (zz -= 160, Hz >= Oz) return Uz.slice(Oz - gz, (Oz += zz) - gz);
      if (!(0 == Hz && Xz < 180)) return Mz(zz);
      let tz, sz = 4095 & (zz << 5 ^ (zz > 1 ? Nz.getUint16(Oz) : zz > 0 ? Wz[Oz] : 0)),
        Fz = pz[sz],
        oz = Oz,
        vz = Oz + zz - 3,
        Kz = 0;
      if (Fz && Fz.bytes == zz) {
        for (; oz < vz;) {
          if (tz = Nz.getUint32(oz), tz != Fz[Kz++]) {
            oz = 1879048192;
            break
          }
          oz += 4
        }
        for (vz += 3; oz < vz;)
          if (tz = Wz[oz++], tz != Fz[Kz++]) {
            oz = 1879048192;
            break
          } if (oz === vz) return Oz = oz, Fz.string;
        vz -= 3, oz = Oz
      }
      for (Fz = [], pz[sz] = Fz, Fz.bytes = zz; oz < vz;) tz = Nz.getUint32(oz), Fz.push(tz), oz += 4;
      for (vz += 3; oz < vz;) tz = Wz[oz++], Fz.push(tz);
      let uz = zz < 16 ? qz(zz) : az(zz);
      return Fz.string = null != uz ? uz : Mz(zz)
    }

    function Ez(zz) {
      if ("string" === typeof zz) return zz;
      if ("number" === typeof zz || "boolean" === typeof zz || "bigint" === typeof zz) return zz.toString();
      if (null == zz) return zz + "";
      if (Dz.allowArraysInMapKeys && Array.isArray(zz) && zz.flat().every((zz => ["string", "number", "boolean", "bigint"].includes(typeof zz)))) return zz.flat().toString();
      throw new Error("Invalid property type for record: " + typeof zz)
    }
    const zt = (zz, tz) => {
      let sz = Tz().map(Ez),
        Fz = zz;
      void 0 !== tz && (zz = zz < 32 ? -((tz << 5) + zz) : (tz << 5) + zz, sz.highByte = tz);
      let Wz = vz[zz];
      return Wz && (Wz.isShared || Iz) && ((vz.restoreStructures || (vz.restoreStructures = []))[zz] = Wz), vz[zz] = sz, sz.read = jz(sz, Fz), sz.read()
    };
    Bz[0] = () => {}, Bz[0].noBuffer = !0, Bz[66] = zz => {
      let tz = zz.length,
        sz = BigInt(128 & zz[0] ? zz[0] - 256 : zz[0]);
      for (let Fz = 1; Fz < tz; Fz++) sz <<= BigInt(8), sz += BigInt(zz[Fz]);
      return sz
    };
    let tt = {
      Error: Error,
      TypeError: TypeError,
      ReferenceError: ReferenceError
    };
    Bz[101] = () => {
      let zz = Tz();
      return (tt[zz[0]] || Error)(zz[1], {
        cause: zz[2]
      })
    }, Bz[105] = zz => {
      if (!1 === Dz.structuredClone) throw new Error("Structured clone extension is disabled");
      let tz = Nz.getUint32(Oz - 4);
      uz || (uz = new Map);
      let sz, Fz = Wz[Oz];
      sz = Fz >= 144 && Fz < 160 || 220 == Fz || 221 == Fz ? [] : {};
      let Xz = {
        target: sz
      };
      uz.set(tz, Xz);
      let oz = Tz();
      return Xz.used ? Object.assign(sz, oz) : (Xz.target = oz, oz)
    }, Bz[112] = zz => {
      if (!1 === Dz.structuredClone) throw new Error("Structured clone extension is disabled");
      let tz = Nz.getUint32(Oz - 4),
        sz = uz.get(tz);
      return sz.used = !0, sz.target
    }, Bz[115] = () => new Set(Tz());
    const st = ["Int8", "Uint8", "Uint8Clamped", "Int16", "Uint16", "Int32", "Uint32", "Float32", "Float64", "BigInt64", "BigUint64"].map((zz => zz + "Array"));
    let Ft = "object" === typeof globalThis ? globalThis : window;
    Bz[116] = zz => {
      let tz = zz[0],
        sz = st[tz];
      if (!sz) {
        if (16 === tz) {
          let tz = new ArrayBuffer(zz.length - 1);
          return new Uint8Array(tz).set(zz.subarray(1)), tz
        }
        throw new Error("Could not find typed array for code " + tz)
      }
      return new Ft[sz](Uint8Array.prototype.slice.call(zz, 1).buffer)
    }, Bz[120] = () => {
      let zz = Tz();
      return new RegExp(zz[0], zz[1])
    };
    const Wt = [];

    function Xt(zz) {
      Jz && Jz();
      let tz = Xz,
        sz = Oz,
        Fz = wz,
        oz = gz,
        Bz = Hz,
        Pz = Uz,
        rz = bz,
        Yz = uz,
        xz = Kz,
        mz = new Uint8Array(Wz.slice(0, Xz)),
        Cz = vz,
        ez = vz.slice(0, vz.length),
        Zz = Dz,
        Gz = Iz,
        Tz = zz();
      return Xz = tz, Oz = sz, wz = Fz, gz = oz, Hz = Bz, Uz = Pz, bz = rz, uz = Yz, Kz = xz, Wz = mz, Iz = Gz, (vz = Cz).splice(0, vz.length, ...ez), Dz = Zz, Nz = new DataView(Wz.buffer, Wz.byteOffset, Wz.byteLength), Tz
    }

    function Ot() {
      Wz = null, uz = null, vz = null
    }
    Bz[98] = zz => {
      let tz = (zz[0] << 24) + (zz[1] << 16) + (zz[2] << 8) + zz[3],
        sz = Oz;
      return Oz += tz - zz.length, Kz = Wt, (Kz = [Sz(), Sz()]).position0 = 0, Kz.position1 = 0, Kz.postBundlePosition = Oz, Oz = sz, Tz()
    }, Bz[255] = zz => 4 == zz.length ? new Date(1e3 * (16777216 * zz[0] + (zz[1] << 16) + (zz[2] << 8) + zz[3])) : 8 == zz.length ? new Date(((zz[0] << 22) + (zz[1] << 14) + (zz[2] << 6) + (zz[3] >> 2)) / 1e6 + 1e3 * (4294967296 * (3 & zz[3]) + 16777216 * zz[4] + (zz[5] << 16) + (zz[6] << 8) + zz[7])) : 12 == zz.length ? new Date(((zz[0] << 24) + (zz[1] << 16) + (zz[2] << 8) + zz[3]) / 1e6 + 1e3 * ((128 & zz[4] ? -281474976710656 : 0) + 1099511627776 * zz[6] + 4294967296 * zz[7] + 16777216 * zz[8] + (zz[9] << 16) + (zz[10] << 8) + zz[11])) : new Date("invalid");
    const ot = new Array(147);
    for (let Xs = 0; Xs < 256; Xs++) ot[Xs] = +("1e" + Math.floor(45.15 - .30103 * Xs));
    const vt = ez;
    var Ut = new ez({
      useRecords: !1
    });
    const Kt = Ut.unpack,
      ut = Ut.unpackMultiple,
      Nt = Ut.unpack,
      bt = {
        NEVER: 0,
        ALWAYS: 1,
        DECIMAL_ROUND: 3,
        DECIMAL_FIT: 4
      };
    let wt, Dt, gt, Ht = new Float32Array(1),
      Bt = new Uint8Array(Ht.buffer, 0, 4);

    function Pt(zz) {
      Ht[0] = zz;
      let tz = ot[(127 & Bt[3]) << 1 | Bt[2] >> 7];
      return (tz * zz + (zz > 0 ? .5 : -.5) | 0) / tz
    }
    try {
      wt = new TextEncoder
    } catch (Ws) {}
    const rt = "undefined" !== typeof Buffer,
      Yt = rt ? function(zz) {
        return Buffer.allocUnsafeSlow(zz)
      } : Uint8Array,
      xt = rt ? Buffer : Uint8Array,
      mt = rt ? 4294967296 : 2144337920;
    let Jt, It, Ct, et, Zt, Gt = 0,
      Tt = null;
    const ct = /[\u0080-\uFFFF]/,
      jt = Symbol("record-id");
    class At extends ez {
      constructor(zz) {
        let tz, sz, Fz, Wz;
        super(zz), this.offset = 0;
        let Xz = xt.prototype.utf8Write ? function(zz, tz) {
            return Jt.utf8Write(zz, tz, Jt.byteLength - tz)
          } : !(!wt || !wt.encodeInto) && function(zz, tz) {
            return wt.encodeInto(zz, Jt.subarray(tz)).written
          },
          Oz = this;
        zz || (zz = {});
        let oz = zz && zz.sequential,
          vz = zz.structures || zz.saveStructures,
          Uz = zz.maxSharedStructures;
        if (null == Uz && (Uz = vz ? 32 : 0), Uz > 8160) throw new Error("Maximum maxSharedStructure is 8160");
        zz.structuredClone && void 0 == zz.moreTypes && (this.moreTypes = !0);
        let Kz = zz.maxOwnStructures;
        null == Kz && (Kz = vz ? 32 : 64), this.structures || 0 == zz.useRecords || (this.structures = []);
        let uz = Uz > 32 || Kz + Uz > 64,
          Nz = Uz + 64,
          bz = Uz + Kz + 64;
        if (bz > 8256) throw new Error("Maximum maxSharedStructure + maxOwnStructure is 8192");
        let wz = [],
          Dz = 0,
          gz = 0;
        this.pack = this.encode = function(zz, Xz) {
          if (Jt || (Jt = new Yt(8192), Ct = Jt.dataView || (Jt.dataView = new DataView(Jt.buffer, 0, 8192)), Gt = 0), et = Jt.length - 10, et - Gt < 2048 ? (Jt = new Yt(Jt.length), Ct = Jt.dataView || (Jt.dataView = new DataView(Jt.buffer, 0, Jt.length)), et = Jt.length - 10, Gt = 0) : Gt = Gt + 7 & 2147483640, tz = Gt, Xz & Et && (Gt += 255 & Xz), Wz = Oz.structuredClone ? new Map : null, Oz.bundleStrings && "string" !== typeof zz ? (Tt = [], Tt.size = 1 / 0) : Tt = null, Fz = Oz.structures, Fz) {
            Fz.uninitialized && (Fz = Oz._mergeStructures(Oz.getStructures()));
            let zz = Fz.sharedLength || 0;
            if (zz > Uz) throw new Error("Shared structures is larger than maximum shared structures, try increasing maxSharedStructures to " + Fz.sharedLength);
            if (!Fz.transitions) {
              Fz.transitions = Object.create(null);
              for (let tz = 0; tz < zz; tz++) {
                let zz = Fz[tz];
                if (!zz) continue;
                let sz, Wz = Fz.transitions;
                for (let tz = 0, Fz = zz.length; tz < Fz; tz++) {
                  let Fz = zz[tz];
                  sz = Wz[Fz], sz || (sz = Wz[Fz] = Object.create(null)), Wz = sz
                }
                Wz[jt] = tz + 64
              }
              this.lastNamedStructuresLength = zz
            }
            oz || (Fz.nextId = zz + 64)
          }
          let vz;
          sz && (sz = !1);
          try {
            Oz.randomAccessStructure && zz && zz.constructor && zz.constructor === Object ? ez(zz) : Pz(zz);
            let sz = Tt;
            if (Tt && ht(tz, Pz, 0), Wz && Wz.idsToInsert) {
              let zz = Wz.idsToInsert.sort(((zz, tz) => zz.offset > tz.offset ? 1 : -1)),
                Fz = zz.length,
                Xz = -1;
              for (; sz && Fz > 0;) {
                let Wz = zz[--Fz].offset + tz;
                Wz < sz.stringsPosition + tz && -1 === Xz && (Xz = 0), Wz > sz.position + tz ? Xz >= 0 && (Xz += 6) : (Xz >= 0 && (Ct.setUint32(sz.position + tz, Ct.getUint32(sz.position + tz) + Xz), Xz = -1), sz = sz.previous, Fz++)
              }
              Xz >= 0 && sz && Ct.setUint32(sz.position + tz, Ct.getUint32(sz.position + tz) + Xz), Gt += 6 * zz.length, Gt > et && Jz(Gt), Oz.offset = Gt;
              let oz = function(zz, tz) {
                let sz, Fz = 6 * tz.length,
                  Wz = zz.length - Fz;
                for (; sz = tz.pop();) {
                  let tz = sz.offset,
                    Xz = sz.id;
                  zz.copyWithin(tz + Fz, tz, Wz), Fz -= 6;
                  let Oz = tz + Fz;
                  zz[Oz++] = 214, zz[Oz++] = 105, zz[Oz++] = Xz >> 24, zz[Oz++] = Xz >> 16 & 255, zz[Oz++] = Xz >> 8 & 255, zz[Oz++] = 255 & Xz, Wz = tz
                }
                return zz
              }(Jt.subarray(tz, Gt), zz);
              return Wz = null, oz
            }
            return Oz.offset = Gt, Xz & pt ? (Jt.start = tz, Jt.end = Gt, Jt) : Jt.subarray(tz, Gt)
          } catch (Ws) {
            throw vz = Ws, Ws
          } finally {
            if (Fz && (Hz(), sz && Oz.saveStructures)) {
              let sz = Fz.sharedLength || 0,
                Wz = Jt.subarray(tz, Gt),
                oz = kt(Fz, Oz);
              if (!vz) return !1 === Oz.saveStructures(oz, oz.isCompatible) ? Oz.pack(zz, Xz) : (Oz.lastNamedStructuresLength = sz, Jt.length > 1073741824 && (Jt = null), Wz)
            }
            Jt.length > 1073741824 && (Jt = null), Xz & ft && (Gt = tz)
          }
        };
        const Hz = () => {
            gz < 10 && gz++;
            let zz = Fz.sharedLength || 0;
            if (Fz.length > zz && !oz && (Fz.length = zz), Dz > 1e4) Fz.transitions = null, gz = 0, Dz = 0, wz.length > 0 && (wz = []);
            else if (wz.length > 0 && !oz) {
              for (let zz = 0, tz = wz.length; zz < tz; zz++) wz[zz][jt] = 0;
              wz = []
            }
          },
          Bz = zz => {
            var tz = zz.length;
            tz < 16 ? Jt[Gt++] = 144 | tz : tz < 65536 ? (Jt[Gt++] = 220, Jt[Gt++] = tz >> 8, Jt[Gt++] = 255 & tz) : (Jt[Gt++] = 221, Ct.setUint32(Gt, tz), Gt += 4);
            for (let sz = 0; sz < tz; sz++) Pz(zz[sz])
          },
          Pz = zz => {
            Gt > et && (Jt = Jz(Gt));
            var sz, Fz = typeof zz;
            if ("string" === Fz) {
              let Fz, Wz = zz.length;
              if (Tt && Wz >= 4 && Wz < 4096) {
                if ((Tt.size += Wz) > 21760) {
                  let zz, sz, Fz = (Tt[0] ? 3 * Tt[0].length + Tt[1].length : 0) + 10;
                  Gt + Fz > et && (Jt = Jz(Gt + Fz)), Tt.position ? (sz = Tt, Jt[Gt] = 200, Gt += 3, Jt[Gt++] = 98, zz = Gt - tz, Gt += 4, ht(tz, Pz, 0), Ct.setUint16(zz + tz - 3, Gt - tz - zz)) : (Jt[Gt++] = 214, Jt[Gt++] = 98, zz = Gt - tz, Gt += 4), Tt = ["", ""], Tt.previous = sz, Tt.size = 0, Tt.position = zz
                }
                let sz = ct.test(zz);
                return Tt[sz ? 0 : 1] += zz, Jt[Gt++] = 193, void Pz(sz ? -Wz : Wz)
              }
              Fz = Wz < 32 ? 1 : Wz < 256 ? 2 : Wz < 65536 ? 3 : 5;
              let Oz = 3 * Wz;
              if (Gt + Oz > et && (Jt = Jz(Gt + Oz)), Wz < 64 || !Xz) {
                let tz, Xz, Oz, oz = Gt + Fz;
                for (tz = 0; tz < Wz; tz++) Xz = zz.charCodeAt(tz), Xz < 128 ? Jt[oz++] = Xz : Xz < 2048 ? (Jt[oz++] = Xz >> 6 | 192, Jt[oz++] = 63 & Xz | 128) : 55296 === (64512 & Xz) && 56320 === (64512 & (Oz = zz.charCodeAt(tz + 1))) ? (Xz = 65536 + ((1023 & Xz) << 10) + (1023 & Oz), tz++, Jt[oz++] = Xz >> 18 | 240, Jt[oz++] = Xz >> 12 & 63 | 128, Jt[oz++] = Xz >> 6 & 63 | 128, Jt[oz++] = 63 & Xz | 128) : (Jt[oz++] = Xz >> 12 | 224, Jt[oz++] = Xz >> 6 & 63 | 128, Jt[oz++] = 63 & Xz | 128);
                sz = oz - Gt - Fz
              } else sz = Xz(zz, Gt + Fz);
              sz < 32 ? Jt[Gt++] = 160 | sz : sz < 256 ? (Fz < 2 && Jt.copyWithin(Gt + 2, Gt + 1, Gt + 1 + sz), Jt[Gt++] = 217, Jt[Gt++] = sz) : sz < 65536 ? (Fz < 3 && Jt.copyWithin(Gt + 3, Gt + 2, Gt + 2 + sz), Jt[Gt++] = 218, Jt[Gt++] = sz >> 8, Jt[Gt++] = 255 & sz) : (Fz < 5 && Jt.copyWithin(Gt + 5, Gt + 3, Gt + 3 + sz), Jt[Gt++] = 219, Ct.setUint32(Gt, sz), Gt += 4), Gt += sz
            } else if ("number" === Fz)
              if (zz >>> 0 === zz) zz < 32 || zz < 128 && !1 === this.useRecords || zz < 64 && !this.randomAccessStructure ? Jt[Gt++] = zz : zz < 256 ? (Jt[Gt++] = 204, Jt[Gt++] = zz) : zz < 65536 ? (Jt[Gt++] = 205, Jt[Gt++] = zz >> 8, Jt[Gt++] = 255 & zz) : (Jt[Gt++] = 206, Ct.setUint32(Gt, zz), Gt += 4);
              else if ((zz | 0) === zz) zz >= -32 ? Jt[Gt++] = 256 + zz : zz >= -128 ? (Jt[Gt++] = 208, Jt[Gt++] = zz + 256) : zz >= -32768 ? (Jt[Gt++] = 209, Ct.setInt16(Gt, zz), Gt += 2) : (Jt[Gt++] = 210, Ct.setInt32(Gt, zz), Gt += 4);
            else {
              let tz;
              if ((tz = this.useFloat32) > 0 && zz < 4294967296 && zz >= -2147483648) {
                let sz;
                if (Jt[Gt++] = 202, Ct.setFloat32(Gt, zz), tz < 4 || ((sz = zz * ot[(127 & Jt[Gt]) << 1 | Jt[Gt + 1] >> 7]) | 0) === sz) return void(Gt += 4);
                Gt--
              }
              Jt[Gt++] = 203, Ct.setFloat64(Gt, zz), Gt += 8
            } else if ("object" === Fz || "function" === Fz)
              if (zz) {
                if (Wz) {
                  let sz = Wz.get(zz);
                  if (sz) {
                    if (!sz.id) {
                      let zz = Wz.idsToInsert || (Wz.idsToInsert = []);
                      sz.id = zz.push(sz)
                    }
                    return Jt[Gt++] = 214, Jt[Gt++] = 112, Ct.setUint32(Gt, sz.id), void(Gt += 4)
                  }
                  Wz.set(zz, {
                    offset: Gt - tz
                  })
                }
                let Xz = zz.constructor;
                if (Xz === Object) mz(zz);
                else if (Xz === Array) Bz(zz);
                else if (Xz === Map)
                  if (this.mapAsEmptyObject) Jt[Gt++] = 128;
                  else {
                    (sz = zz.size) < 16 ? Jt[Gt++] = 128 | sz : sz < 65536 ? (Jt[Gt++] = 222, Jt[Gt++] = sz >> 8, Jt[Gt++] = 255 & sz) : (Jt[Gt++] = 223, Ct.setUint32(Gt, sz), Gt += 4);
                    for (let [tz, sz] of zz) Pz(tz), Pz(sz)
                  }
                else {
                  for (let tz = 0, sz = Dt.length; tz < sz; tz++) {
                    if (zz instanceof gt[tz]) {
                      let sz = Dt[tz];
                      if (sz.write) {
                        sz.type && (Jt[Gt++] = 212, Jt[Gt++] = sz.type, Jt[Gt++] = 0);
                        let tz = sz.write.call(this, zz);
                        return void(tz === zz ? Array.isArray(zz) ? Bz(zz) : mz(zz) : Pz(tz))
                      }
                      let Fz, Wz = Jt,
                        Xz = Ct,
                        Oz = Gt;
                      Jt = null;
                      try {
                        Fz = sz.pack.call(this, zz, (zz => (Jt = Wz, Wz = null, Gt += zz, Gt > et && Jz(Gt), {
                          target: Jt,
                          targetView: Ct,
                          position: Gt - zz
                        })), Pz)
                      } finally {
                        Wz && (Jt = Wz, Ct = Xz, Gt = Oz, et = Jt.length - 10)
                      }
                      return void(Fz && (Fz.length + Gt > et && Jz(Fz.length + Gt), Gt = dt(Fz, Jt, Gt, sz.type)))
                    }
                  }
                  if (Array.isArray(zz)) Bz(zz);
                  else {
                    if (zz.toJSON) {
                      const tz = zz.toJSON();
                      if (tz !== zz) return Pz(tz)
                    }
                    if ("function" === Fz) return Pz(this.writeFunction && this.writeFunction(zz));
                    mz(zz)
                  }
                }
              } else Jt[Gt++] = 192;
            else if ("boolean" === Fz) Jt[Gt++] = zz ? 195 : 194;
            else if ("bigint" === Fz) {
              if (zz < BigInt(1) << BigInt(63) && zz >= -(BigInt(1) << BigInt(63))) Jt[Gt++] = 211, Ct.setBigInt64(Gt, zz);
              else if (zz < BigInt(1) << BigInt(64) && zz > 0) Jt[Gt++] = 207, Ct.setBigUint64(Gt, zz);
              else {
                if (!this.largeBigIntToFloat) {
                  if (this.largeBigIntToString) return Pz(zz.toString());
                  if (this.useBigIntExtension && zz < BigInt(2) ** BigInt(1023) && zz > -(BigInt(2) ** BigInt(1023))) {
                    Jt[Gt++] = 199, Gt++, Jt[Gt++] = 66;
                    let tz, sz = [];
                    do {
                      let Fz = zz & BigInt(255);
                      tz = (Fz & BigInt(128)) === (zz < BigInt(0) ? BigInt(128) : BigInt(0)), sz.push(Fz), zz >>= BigInt(8)
                    } while (zz !== BigInt(0) && zz !== BigInt(-1) || !tz);
                    Jt[Gt - 2] = sz.length;
                    for (let zz = sz.length; zz > 0;) Jt[Gt++] = Number(sz[--zz]);
                    return
                  }
                  throw new RangeError(zz + " was too large to fit in MessagePack 64-bit integer format, use useBigIntExtension, or set largeBigIntToFloat to convert to float-64, or set largeBigIntToString to convert to string")
                }
                Jt[Gt++] = 203, Ct.setFloat64(Gt, Number(zz))
              }
              Gt += 8
            } else {
              if ("undefined" !== Fz) throw new Error("Unknown type: " + Fz);
              this.encodeUndefinedAsNil ? Jt[Gt++] = 192 : (Jt[Gt++] = 212, Jt[Gt++] = 0, Jt[Gt++] = 0)
            }
          },
          rz = this.variableMapSize || this.coercibleKeyAsNumber || this.skipValues ? zz => {
            let tz;
            if (this.skipValues) {
              tz = [];
              for (let sz in zz) "function" === typeof zz.hasOwnProperty && !zz.hasOwnProperty(sz) || this.skipValues.includes(zz[sz]) || tz.push(sz)
            } else tz = Object.keys(zz);
            let sz, Fz = tz.length;
            if (Fz < 16 ? Jt[Gt++] = 128 | Fz : Fz < 65536 ? (Jt[Gt++] = 222, Jt[Gt++] = Fz >> 8, Jt[Gt++] = 255 & Fz) : (Jt[Gt++] = 223, Ct.setUint32(Gt, Fz), Gt += 4), this.coercibleKeyAsNumber)
              for (let Wz = 0; Wz < Fz; Wz++) {
                sz = tz[Wz];
                let Fz = Number(sz);
                Pz(isNaN(Fz) ? sz : Fz), Pz(zz[sz])
              } else
                for (let Wz = 0; Wz < Fz; Wz++) Pz(sz = tz[Wz]), Pz(zz[sz])
          } : zz => {
            Jt[Gt++] = 222;
            let sz = Gt - tz;
            Gt += 2;
            let Fz = 0;
            for (let tz in zz)("function" !== typeof zz.hasOwnProperty || zz.hasOwnProperty(tz)) && (Pz(tz), Pz(zz[tz]), Fz++);
            if (Fz > 65535) throw new Error('Object is too large to serialize with fast 16-bit map size, use the "variableMapSize" option to serialize this object');
            Jt[sz++ + tz] = Fz >> 8, Jt[sz + tz] = 255 & Fz
          },
          Yz = !1 === this.useRecords ? rz : zz.progressiveRecords && !uz ? zz => {
            let sz, Wz, Xz = Fz.transitions || (Fz.transitions = Object.create(null)),
              Oz = Gt++ - tz;
            for (let oz in zz)
              if ("function" !== typeof zz.hasOwnProperty || zz.hasOwnProperty(oz)) {
                if (sz = Xz[oz], sz) Xz = sz;
                else {
                  let vz = Object.keys(zz),
                    Uz = Xz;
                  Xz = Fz.transitions;
                  let Kz = 0;
                  for (let zz = 0, tz = vz.length; zz < tz; zz++) {
                    let tz = vz[zz];
                    sz = Xz[tz], sz || (sz = Xz[tz] = Object.create(null), Kz++), Xz = sz
                  }
                  Oz + tz + 1 == Gt ? (Gt--, Iz(Xz, vz, Kz)) : Cz(Xz, vz, Oz, Kz), Wz = !0, Xz = Uz[oz]
                }
                Pz(zz[oz])
              } if (!Wz) {
              let sz = Xz[jt];
              sz ? Jt[Oz + tz] = sz : Cz(Xz, Object.keys(zz), Oz, 0)
            }
          } : zz => {
            let tz, sz = Fz.transitions || (Fz.transitions = Object.create(null)),
              Wz = 0;
            for (let Fz in zz)("function" !== typeof zz.hasOwnProperty || zz.hasOwnProperty(Fz)) && (tz = sz[Fz], tz || (tz = sz[Fz] = Object.create(null), Wz++), sz = tz);
            let Xz = sz[jt];
            Xz ? Xz >= 96 && uz ? (Jt[Gt++] = 96 + (31 & (Xz -= 96)), Jt[Gt++] = Xz >> 5) : Jt[Gt++] = Xz : Iz(sz, sz.__keys__ || Object.keys(zz), Wz);
            for (let Fz in zz)("function" !== typeof zz.hasOwnProperty || zz.hasOwnProperty(Fz)) && Pz(zz[Fz])
          },
          xz = "function" == typeof this.useRecords && this.useRecords,
          mz = xz ? zz => {
            xz(zz) ? Yz(zz) : rz(zz)
          } : Yz,
          Jz = zz => {
            let sz;
            if (zz > 16777216) {
              if (zz - tz > mt) throw new Error("Packed buffer would be larger than maximum buffer size");
              sz = Math.min(mt, 4096 * Math.round(Math.max((zz - tz) * (zz > 67108864 ? 1.25 : 2), 4194304) / 4096))
            } else sz = 1 + (Math.max(zz - tz << 2, Jt.length - 1) >> 12) << 12;
            let Fz = new Yt(sz);
            return Ct = Fz.dataView || (Fz.dataView = new DataView(Fz.buffer, 0, sz)), zz = Math.min(zz, Jt.length), Jt.copy ? Jt.copy(Fz, 0, tz, zz) : Fz.set(Jt.slice(tz, zz)), Gt -= tz, tz = 0, et = Fz.length - 10, Jt = Fz
          },
          Iz = (zz, tz, Wz) => {
            let Xz = Fz.nextId;
            Xz || (Xz = 64), Xz < Nz && this.shouldShareStructure && !this.shouldShareStructure(tz) ? (Xz = Fz.nextOwnId, Xz < bz || (Xz = Nz), Fz.nextOwnId = Xz + 1) : (Xz >= bz && (Xz = Nz), Fz.nextId = Xz + 1);
            let Oz = tz.highByte = Xz >= 96 && uz ? Xz - 96 >> 5 : -1;
            zz[jt] = Xz, zz.__keys__ = tz, Fz[Xz - 64] = tz, Xz < Nz ? (tz.isShared = !0, Fz.sharedLength = Xz - 63, sz = !0, Oz >= 0 ? (Jt[Gt++] = 96 + (31 & Xz), Jt[Gt++] = Oz) : Jt[Gt++] = Xz) : (Oz >= 0 ? (Jt[Gt++] = 213, Jt[Gt++] = 114, Jt[Gt++] = 96 + (31 & Xz), Jt[Gt++] = Oz) : (Jt[Gt++] = 212, Jt[Gt++] = 114, Jt[Gt++] = Xz), Wz && (Dz += gz * Wz), wz.length >= Kz && (wz.shift()[jt] = 0), wz.push(zz), Pz(tz))
          },
          Cz = (zz, sz, Fz, Wz) => {
            let Xz = Jt,
              Oz = Gt,
              oz = et,
              vz = tz;
            Jt = It, Gt = 0, tz = 0, Jt || (It = Jt = new Yt(8192)), et = Jt.length - 10, Iz(zz, sz, Wz), It = Jt;
            let Uz = Gt;
            if (Jt = Xz, Gt = Oz, et = oz, tz = vz, Uz > 1) {
              let zz = Gt + Uz - 1;
              zz > et && Jz(zz);
              let sz = Fz + tz;
              Jt.copyWithin(sz + Uz, sz + 1, Gt), Jt.set(It.slice(0, Uz), sz), Gt = zz
            } else Jt[Fz + tz] = It[0]
          },
          ez = zz => {
            let Wz = Zt(zz, Jt, tz, Gt, Fz, Jz, ((zz, tz, Fz) => {
              if (Fz) return sz = !0;
              Gt = tz;
              let Wz = Jt;
              return Pz(zz), Hz(), Wz !== Jt ? {
                position: Gt,
                targetView: Ct,
                target: Jt
              } : Gt
            }), this);
            if (0 === Wz) return mz(zz);
            Gt = Wz
          }
      }
      useBuffer(zz) {
        Jt = zz, Ct = Jt.dataView || (Jt.dataView = new DataView(Jt.buffer, Jt.byteOffset, Jt.byteLength)), Gt = 0
      }
      set position(zz) {
        Gt = zz
      }
      get position() {
        return Gt
      }
      set buffer(zz) {
        Jt = zz
      }
      get buffer() {
        return Jt
      }
      clearSharedData() {
        this.structures && (this.structures = []), this.typedStructs && (this.typedStructs = [])
      }
    }

    function yt(zz, tz, sz, Fz) {
      let Wz = zz.byteLength;
      if (Wz + 1 < 256) {
        var {
          target: Xz,
          position: Oz
        } = sz(4 + Wz);
        Xz[Oz++] = 199, Xz[Oz++] = Wz + 1
      } else if (Wz + 1 < 65536) {
        var {
          target: Xz,
          position: Oz
        } = sz(5 + Wz);
        Xz[Oz++] = 200, Xz[Oz++] = Wz + 1 >> 8, Xz[Oz++] = Wz + 1 & 255
      } else {
        var {
          target: Xz,
          position: Oz,
          targetView: oz
        } = sz(7 + Wz);
        Xz[Oz++] = 201, oz.setUint32(Oz, Wz + 1), Oz += 4
      }
      Xz[Oz++] = 116, Xz[Oz++] = tz, zz.buffer || (zz = new Uint8Array(zz)), Xz.set(new Uint8Array(zz.buffer, zz.byteOffset, zz.byteLength), Oz)
    }

    function Mt(zz, tz) {
      let sz = zz.byteLength;
      var Fz, Wz;
      if (sz < 256) {
        var {
          target: Fz,
          position: Wz
        } = tz(sz + 2);
        Fz[Wz++] = 196, Fz[Wz++] = sz
      } else if (sz < 65536) {
        var {
          target: Fz,
          position: Wz
        } = tz(sz + 3);
        Fz[Wz++] = 197, Fz[Wz++] = sz >> 8, Fz[Wz++] = 255 & sz
      } else {
        var {
          target: Fz,
          position: Wz,
          targetView: Xz
        } = tz(sz + 5);
        Fz[Wz++] = 198, Xz.setUint32(Wz, sz), Wz += 4
      }
      Fz.set(zz, Wz)
    }

    function dt(zz, tz, sz, Fz) {
      let Wz = zz.length;
      switch (Wz) {
        case 1:
          tz[sz++] = 212;
          break;
        case 2:
          tz[sz++] = 213;
          break;
        case 4:
          tz[sz++] = 214;
          break;
        case 8:
          tz[sz++] = 215;
          break;
        case 16:
          tz[sz++] = 216;
          break;
        default:
          Wz < 256 ? (tz[sz++] = 199, tz[sz++] = Wz) : Wz < 65536 ? (tz[sz++] = 200, tz[sz++] = Wz >> 8, tz[sz++] = 255 & Wz) : (tz[sz++] = 201, tz[sz++] = Wz >> 24, tz[sz++] = Wz >> 16 & 255, tz[sz++] = Wz >> 8 & 255, tz[sz++] = 255 & Wz)
      }
      return tz[sz++] = Fz, tz.set(zz, sz), sz += Wz
    }

    function ht(zz, tz, sz) {
      if (Tt.length > 0) {
        Ct.setUint32(Tt.position + zz, Gt + sz - Tt.position - zz), Tt.stringsPosition = Gt - zz;
        let Fz = Tt;
        Tt = null, tz(Fz[0]), tz(Fz[1])
      }
    }

    function Qt(zz) {
      if (zz.Class) {
        if (!zz.pack && !zz.write) throw new Error("Extension has no pack or write function");
        if (zz.pack && !zz.type) throw new Error("Extension has no type (numeric code to identify the extension)");
        gt.unshift(zz.Class), Dt.unshift(zz)
      }! function(zz) {
        zz.unpack ? Bz[zz.type] = zz.unpack : Bz[zz.type] = zz
      }(zz)
    }

    function kt(zz, tz) {
      return zz.isCompatible = zz => {
        let sz = !zz || (tz.lastNamedStructuresLength || 0) === zz.length;
        return sz || tz._mergeStructures(zz), sz
      }, zz
    }
    gt = [Date, Set, Error, RegExp, ArrayBuffer, Object.getPrototypeOf(Uint8Array.prototype).constructor, rz], Dt = [{
      pack(zz, tz, sz) {
        let Fz = zz.getTime() / 1e3;
        if ((this.useTimestamp32 || 0 === zz.getMilliseconds()) && Fz >= 0 && Fz < 4294967296) {
          let {
            target: zz,
            targetView: sz,
            position: Wz
          } = tz(6);
          zz[Wz++] = 214, zz[Wz++] = 255, sz.setUint32(Wz, Fz)
        } else if (Fz > 0 && Fz < 4294967296) {
          let {
            target: sz,
            targetView: Wz,
            position: Xz
          } = tz(10);
          sz[Xz++] = 215, sz[Xz++] = 255, Wz.setUint32(Xz, 4e6 * zz.getMilliseconds() + (Fz / 1e3 / 4294967296 | 0)), Wz.setUint32(Xz + 4, Fz)
        } else if (isNaN(Fz)) {
          if (this.onInvalidDate) return tz(0), sz(this.onInvalidDate());
          let {
            target: zz,
            targetView: Fz,
            position: Wz
          } = tz(3);
          zz[Wz++] = 212, zz[Wz++] = 255, zz[Wz++] = 255
        } else {
          let {
            target: sz,
            targetView: Wz,
            position: Xz
          } = tz(15);
          sz[Xz++] = 199, sz[Xz++] = 12, sz[Xz++] = 255, Wz.setUint32(Xz, 1e6 * zz.getMilliseconds()), Wz.setBigInt64(Xz + 4, BigInt(Math.floor(Fz)))
        }
      }
    }, {
      pack(zz, tz, sz) {
        if (this.setAsEmptyObject) return tz(0), sz({});
        let Fz = Array.from(zz),
          {
            target: Wz,
            position: Xz
          } = tz(this.moreTypes ? 3 : 0);
        this.moreTypes && (Wz[Xz++] = 212, Wz[Xz++] = 115, Wz[Xz++] = 0), sz(Fz)
      }
    }, {
      pack(zz, tz, sz) {
        let {
          target: Fz,
          position: Wz
        } = tz(this.moreTypes ? 3 : 0);
        this.moreTypes && (Fz[Wz++] = 212, Fz[Wz++] = 101, Fz[Wz++] = 0), sz([zz.name, zz.message, zz.cause])
      }
    }, {
      pack(zz, tz, sz) {
        let {
          target: Fz,
          position: Wz
        } = tz(this.moreTypes ? 3 : 0);
        this.moreTypes && (Fz[Wz++] = 212, Fz[Wz++] = 120, Fz[Wz++] = 0), sz([zz.source, zz.flags])
      }
    }, {
      pack(zz, tz) {
        this.moreTypes ? yt(zz, 16, tz) : Mt(rt ? Buffer.from(zz) : new Uint8Array(zz), tz)
      }
    }, {
      pack(zz, tz) {
        let sz = zz.constructor;
        sz !== xt && this.moreTypes ? yt(zz, st.indexOf(sz.name), tz) : Mt(zz, tz)
      }
    }, {
      pack(zz, tz) {
        let {
          target: sz,
          position: Fz
        } = tz(1);
        sz[Fz] = 193
      }
    }];
    let it = new At({
      useRecords: !1
    });
    const Lt = it.pack,
      lt = it.pack,
      nt = At,
      {
        NEVER: qt,
        ALWAYS: St,
        DECIMAL_ROUND: Vt,
        DECIMAL_FIT: Rt
      } = bt,
      pt = 512,
      ft = 1024,
      Et = 2048;
    const zs = function(zz) {
        let tz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        if (!zz || "object" !== typeof zz) throw new Error("first argument must be an Iterable, Async Iterable, Iterator, Async Iterator, or a promise");
        const sz = new ez(tz);
        let Fz;
        const Wz = zz => {
          let tz;
          Fz && (zz = Buffer.concat([Fz, zz]), Fz = void 0);
          try {
            tz = sz.unpackMultiple(zz)
          } catch (Wz) {
            if (!Wz.incomplete) throw Wz;
            Fz = zz.slice(Wz.lastPosition), tz = Wz.values
          }
          return tz
        };
        return "function" === typeof zz[Symbol.iterator] ? function*() {
          for (const tz of zz) yield* Wz(tz)
        }() : "function" === typeof zz[Symbol.asyncIterator] ? async function*() {
          for await (const tz of zz) yield* Wz(tz)
        }(): void 0
      },
      ts = function(zz) {
        let tz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        if (zz && "object" === typeof zz) {
          if ("function" === typeof zz[Symbol.iterator]) return function*(zz, tz) {
            const sz = new At(tz);
            for (const Fz of zz) yield sz.pack(Fz)
          }(zz, tz);
          if ("function" === typeof zz.then || "function" === typeof zz[Symbol.asyncIterator]) return async function*(zz, tz) {
            const sz = new At(tz);
            for await (const Fz of zz) yield sz.pack(Fz)
          }(zz, tz);
          throw new Error("first argument must be an Iterable, Async Iterable, Iterator, Async Iterator, or a Promise")
        }
        throw new Error("first argument must be an Iterable, Async Iterable, or a Promise for an Async Iterable")
      },
      ss = !1,
      Fs = !0
  },
  8611: (zz, tz, sz) => {
    sz.r(tz), sz.d(tz, {
      $changes: () => Dz,
      $childType: () => gz,
      $decoder: () => Kz,
      $deleteByIndex: () => bz,
      $encoder: () => Uz,
      $filter: () => uz,
      $getByIndex: () => Nz,
      $numFields: () => Cz,
      $refId: () => oz,
      $track: () => vz,
      $values: () => Yz,
      ArraySchema: () => XF,
      Callbacks: () => XW,
      ChangeTree: () => cs,
      CollectionSchema: () => vF,
      Decoder: () => pF,
      Encoder: () => qF,
      FieldBuilder: () => uF,
      MapSchema: () => oF,
      Metadata: () => Vt,
      OPERATION: () => Wz,
      Reflection: () => tW,
      ReflectionField: () => EF,
      ReflectionType: () => zW,
      Root: () => AF,
      Schema: () => cF,
      SetSchema: () => UF,
      StateCallbackStrategy: () => WW,
      StateView: () => QF,
      StreamSchema: () => KF,
      TypeContext: () => kt,
      createPool: () => oW,
      decode: () => Pt,
      decodeKeyValueOperation: () => Es,
      decodeSchemaOperation: () => fs,
      defineCustomTypes: () => mt,
      defineTypes: () => ZF,
      deprecated: () => CF,
      dumpChanges: () => TF,
      encode: () => tt,
      encodeArray: () => is,
      encodeIndexedEntry: () => Qs,
      encodeKeyValueOperation: () => ks,
      encodeMapEntry: () => hs,
      encodeSchemaOperation: () => ds,
      yw: () => BF,
      fullStateOnly: () => xF,
      getDecoderStateCallbacks: () => sW,
      getEncodeDescriptor: () => ts,
      getRawChangesCallback: () => FW,
      isBuilder: () => NF,
      patchOnly: () => YF,
      registerType: () => xt,
      schema: () => GF,
      t: () => gF,
      type: () => mF,
      unreliable: () => rF,
      view: () => PF
    });
    const Fz = 255;
    var Wz;

    function Xz(zz) {
      Object.defineProperty(zz, Symbol.metadata, {
        value: void 0,
        writable: !0,
        configurable: !0,
        enumerable: !1
      })
    }! function(zz) {
      zz[zz.ADD = 128] = "ADD", zz[zz.REPLACE = 0] = "REPLACE", zz[zz.DELETE = 64] = "DELETE", zz[zz.DELETE_AND_MOVE = 96] = "DELETE_AND_MOVE", zz[zz.MOVE_AND_ADD = 160] = "MOVE_AND_ADD", zz[zz.DELETE_AND_ADD = 192] = "DELETE_AND_ADD", zz[zz.CLEAR = 10] = "CLEAR", zz[zz.REVERSE = 15] = "REVERSE", zz[zz.MOVE = 32] = "MOVE", zz[zz.DELETE_BY_REFID = 33] = "DELETE_BY_REFID", zz[zz.ADD_BY_REFID = 129] = "ADD_BY_REFID"
    }(Wz || (Wz = {})), Symbol.metadata ??= Symbol.for("Symbol.metadata");
    const Oz = "undefined" !== typeof globalThis ? globalThis : "undefined" !== typeof global ? global : "undefined" !== typeof self ? self : "undefined" !== typeof window ? window : {};
    if ("function" === typeof Symbol && "function" !== typeof Symbol.for) {
      const zz = "colyseus.symbolRegistry",
        tz = Oz[zz] || (Oz[zz] = Object.create(null));
      Symbol.for = function(zz) {
        return tz[zz] || (tz[zz] = Symbol(zz))
      }, Symbol.keyFor = function(zz) {
        for (const sz in tz)
          if (tz[sz] === zz) return sz
      }
    }
    const oz = Symbol.for("$refId"),
      vz = "~track",
      Uz = "~encoder",
      Kz = "~decoder",
      uz = "~filter",
      Nz = "~getByIndex",
      bz = "~deleteByIndex",
      wz = "~resyncPrune",
      Dz = Symbol.for("$changes"),
      gz = Symbol.for("$childType"),
      Hz = Symbol.for("$proxyTarget"),
      Bz = "~onEncodeEnd",
      Pz = "~reset",
      rz = "~onDecodeEnd",
      Yz = Symbol.for("$values"),
      xz = "~builder",
      mz = "~descriptors",
      Jz = "~__encodeDescriptor",
      Iz = "~encoders",
      Cz = "~__numFields",
      ez = "~__refTypeFieldIndexes",
      Zz = "~__viewFieldIndexes",
      Gz = "$__fieldIndexesByViewTag",
      Tz = "~__unreliableFieldIndexes",
      cz = "~__patchOnlyFieldIndexes",
      jz = "~__fullSyncSkipIndexes",
      Az = "~__fullStateOnlyFieldIndexes",
      yz = "~__streamFieldIndexes",
      Mz = "~__streamPriorities";
    let dz;
    try {
      dz = new TextEncoder
    } catch (vW) {}
    const hz = new ArrayBuffer(8),
      Qz = new Int32Array(hz),
      kz = new Float32Array(hz),
      iz = new Float64Array(hz),
      Lz = new BigInt64Array(hz),
      lz = "undefined" !== typeof Buffer && Buffer.byteLength ? Buffer.byteLength : function(zz, tz) {
        for (var sz = 0, Fz = 0, Wz = 0, Xz = zz.length; Wz < Xz; Wz++)(sz = zz.charCodeAt(Wz)) < 128 ? Fz += 1 : sz < 2048 ? Fz += 2 : sz < 55296 || sz >= 57344 ? Fz += 3 : (Wz++, Fz += 4);
        return Fz
      };

    function nz(zz, tz, sz) {
      for (var Fz = 0, Wz = 0, Xz = tz.length; Wz < Xz; Wz++)(Fz = tz.charCodeAt(Wz)) < 128 ? zz[sz.offset++] = Fz : Fz < 2048 ? (zz[sz.offset] = 192 | Fz >> 6, zz[sz.offset + 1] = 128 | 63 & Fz, sz.offset += 2) : Fz < 55296 || Fz >= 57344 ? (zz[sz.offset] = 224 | Fz >> 12, zz[sz.offset + 1] = 128 | Fz >> 6 & 63, zz[sz.offset + 2] = 128 | 63 & Fz, sz.offset += 3) : (Wz++, Fz = 65536 + ((1023 & Fz) << 10 | 1023 & tz.charCodeAt(Wz)), zz[sz.offset] = 240 | Fz >> 18, zz[sz.offset + 1] = 128 | Fz >> 12 & 63, zz[sz.offset + 2] = 128 | Fz >> 6 & 63, zz[sz.offset + 3] = 128 | 63 & Fz, sz.offset += 4)
    }

    function az(zz, tz, sz) {
      zz[sz.offset++] = 255 & tz
    }

    function qz(zz, tz, sz) {
      zz[sz.offset++] = 255 & tz, zz[sz.offset++] = tz >> 8 & 255
    }

    function Sz(zz, tz, sz) {
      zz[sz.offset++] = 255 & tz, zz[sz.offset++] = tz >> 8 & 255
    }

    function Vz(zz, tz, sz) {
      zz[sz.offset++] = 255 & tz, zz[sz.offset++] = tz >> 8 & 255, zz[sz.offset++] = tz >> 16 & 255, zz[sz.offset++] = tz >> 24 & 255
    }

    function Rz(zz, tz, sz) {
      const Fz = tz >> 24,
        Wz = tz >> 16,
        Xz = tz >> 8,
        Oz = tz;
      zz[sz.offset++] = 255 & Oz, zz[sz.offset++] = 255 & Xz, zz[sz.offset++] = 255 & Wz, zz[sz.offset++] = 255 & Fz
    }

    function pz(zz, tz, sz) {
      const Fz = Math.floor(tz / Math.pow(2, 32));
      Rz(zz, tz >>> 0, sz), Rz(zz, Fz, sz)
    }

    function fz(zz, tz, sz) {
      const Fz = tz / Math.pow(2, 32) | 0;
      Rz(zz, tz >>> 0, sz), Rz(zz, Fz, sz)
    }

    function Ez(zz, tz, sz) {
      kz[0] = tz, Vz(zz, Qz[0], sz)
    }

    function zt(zz, tz, sz) {
      iz[0] = tz, Vz(zz, Qz[0], sz), Vz(zz, Qz[1], sz)
    }
    const tt = {
        int8: az,
        uint8: function(zz, tz, sz) {
          zz[sz.offset++] = 255 & tz
        },
        int16: qz,
        uint16: Sz,
        int32: Vz,
        uint32: Rz,
        int64: pz,
        uint64: fz,
        bigint64: function(zz, tz, sz) {
          Lz[0] = BigInt.asIntN(64, tz), Vz(zz, Qz[0], sz), Vz(zz, Qz[1], sz)
        },
        biguint64: function(zz, tz, sz) {
          Lz[0] = BigInt.asIntN(64, tz), Vz(zz, Qz[0], sz), Vz(zz, Qz[1], sz)
        },
        float32: Ez,
        float64: zt,
        boolean: function(zz, tz, sz) {
          zz[sz.offset++] = tz ? 1 : 0
        },
        string: function(zz, tz, sz) {
          tz || (tz = "");
          let Fz = lz(tz, "utf8"),
            Wz = 0;
          if (Fz < 32) zz[sz.offset++] = 160 | Fz, Wz = 1;
          else if (Fz < 256) zz[sz.offset++] = 217, zz[sz.offset++] = Fz, Wz = 2;
          else if (Fz < 65536) zz[sz.offset++] = 218, Sz(zz, Fz, sz), Wz = 3;
          else {
            if (!(Fz < 4294967296)) throw new Error("String too long");
            zz[sz.offset++] = 219, Rz(zz, Fz, sz), Wz = 5
          }
          return nz(zz, tz, sz), Wz + Fz
        },
        number: function zz(tz, sz, Fz) {
          return isNaN(sz) ? zz(tz, 0, Fz) : isFinite(sz) ? sz !== (0 | sz) ? Math.abs(sz) <= 34028235e31 && (kz[0] = sz, Math.abs(Math.abs(kz[0]) - Math.abs(sz)) < 1e-4) ? (tz[Fz.offset++] = 202, Ez(tz, sz, Fz), 5) : (tz[Fz.offset++] = 203, zt(tz, sz, Fz), 9) : sz >= 0 ? sz < 128 ? (tz[Fz.offset++] = 255 & sz, 1) : sz < 256 ? (tz[Fz.offset++] = 204, tz[Fz.offset++] = 255 & sz, 2) : sz < 65536 ? (tz[Fz.offset++] = 205, Sz(tz, sz, Fz), 3) : sz < 4294967296 ? (tz[Fz.offset++] = 206, Rz(tz, sz, Fz), 5) : (tz[Fz.offset++] = 207, fz(tz, sz, Fz), 9) : sz >= -32 ? (tz[Fz.offset++] = 224 | sz + 32, 1) : sz >= -128 ? (tz[Fz.offset++] = 208, az(tz, sz, Fz), 2) : sz >= -32768 ? (tz[Fz.offset++] = 209, qz(tz, sz, Fz), 3) : sz >= -2147483648 ? (tz[Fz.offset++] = 210, Vz(tz, sz, Fz), 5) : (tz[Fz.offset++] = 211, pz(tz, sz, Fz), 9) : zz(tz, sz > 0 ? Number.MAX_SAFE_INTEGER : -Number.MAX_SAFE_INTEGER, Fz)
        },
        utf8Write: nz,
        utf8Length: lz
      },
      st = new ArrayBuffer(8),
      Ft = new Int32Array(st),
      Wt = new Float32Array(st),
      Xt = new Float64Array(st),
      Ot = new BigUint64Array(st),
      ot = new BigInt64Array(st);

    function vt(zz, tz, sz) {
      sz > zz.length - tz.offset && (sz = zz.length - tz.offset);
      for (var Fz = "", Wz = 0, Xz = tz.offset, Oz = tz.offset + sz; Xz < Oz; Xz++) {
        var oz = zz[Xz];
        if (0 !== (128 & oz))
          if (192 !== (224 & oz))
            if (224 !== (240 & oz)) {
              if (240 !== (248 & oz)) {
                console.error("decode.utf8Read(): Invalid byte " + oz + " at offset " + Xz + ". Skip to end of string: " + (tz.offset + sz));
                break
              }(Wz = (7 & oz) << 18 | (63 & zz[++Xz]) << 12 | (63 & zz[++Xz]) << 6 | 63 & zz[++Xz]) >= 65536 ? (Wz -= 65536, Fz += String.fromCharCode(55296 + (Wz >>> 10), 56320 + (1023 & Wz))) : Fz += String.fromCharCode(Wz)
            } else Fz += String.fromCharCode((15 & oz) << 12 | (63 & zz[++Xz]) << 6 | 63 & zz[++Xz]);
        else Fz += String.fromCharCode((31 & oz) << 6 | 63 & zz[++Xz]);
        else Fz += String.fromCharCode(oz)
      }
      return tz.offset += sz, Fz
    }

    function Ut(zz, tz) {
      return Kt(zz, tz) << 24 >> 24
    }

    function Kt(zz, tz) {
      return zz[tz.offset++]
    }

    function ut(zz, tz) {
      return Nt(zz, tz) << 16 >> 16
    }

    function Nt(zz, tz) {
      return zz[tz.offset++] | zz[tz.offset++] << 8
    }

    function bt(zz, tz) {
      return zz[tz.offset++] | zz[tz.offset++] << 8 | zz[tz.offset++] << 16 | zz[tz.offset++] << 24
    }

    function wt(zz, tz) {
      return bt(zz, tz) >>> 0
    }

    function Dt(zz, tz) {
      return Ft[0] = bt(zz, tz), Wt[0]
    }

    function gt(zz, tz) {
      return Ft[0] = bt(zz, tz), Ft[1] = bt(zz, tz), Xt[0]
    }

    function Ht(zz, tz) {
      const sz = wt(zz, tz);
      return bt(zz, tz) * Math.pow(2, 32) + sz
    }

    function Bt(zz, tz) {
      const sz = wt(zz, tz);
      return wt(zz, tz) * Math.pow(2, 32) + sz
    }
    const Pt = {
        utf8Read: vt,
        int8: Ut,
        uint8: Kt,
        int16: ut,
        uint16: Nt,
        int32: bt,
        uint32: wt,
        float32: Dt,
        float64: gt,
        int64: Ht,
        uint64: Bt,
        bigint64: function(zz, tz) {
          return Ft[0] = bt(zz, tz), Ft[1] = bt(zz, tz), ot[0]
        },
        biguint64: function(zz, tz) {
          return Ft[0] = bt(zz, tz), Ft[1] = bt(zz, tz), Ot[0]
        },
        boolean: function(zz, tz) {
          return Kt(zz, tz) > 0
        },
        string: function(zz, tz) {
          const sz = zz[tz.offset++];
          let Fz;
          return sz < 192 ? Fz = 31 & sz : 217 === sz ? Fz = Kt(zz, tz) : 218 === sz ? Fz = Nt(zz, tz) : 219 === sz && (Fz = wt(zz, tz)), vt(zz, tz, Fz)
        },
        number: function(zz, tz) {
          const sz = zz[tz.offset++];
          return sz < 128 ? sz : 202 === sz ? Dt(zz, tz) : 203 === sz ? gt(zz, tz) : 204 === sz ? Kt(zz, tz) : 205 === sz ? Nt(zz, tz) : 206 === sz ? wt(zz, tz) : 207 === sz ? Bt(zz, tz) : 208 === sz ? Ut(zz, tz) : 209 === sz ? ut(zz, tz) : 210 === sz ? bt(zz, tz) : 211 === sz ? Ht(zz, tz) : sz > 223 ? -1 * (255 - sz + 1) : void 0
        },
        stringCheck: function(zz, tz) {
          const sz = zz[tz.offset];
          return sz < 192 && sz > 160 || 217 === sz || 218 === sz || 219 === sz
        }
      },
      rt = {},
      Yt = new Map;

    function xt(zz, tz) {
      tz.constructor && (Object.prototype.hasOwnProperty.call(tz, "constructor") && null == tz.constructor[Symbol.metadata] && Xz(tz.constructor), Yt.set(tz.constructor, zz), rt[zz] = tz), tz.encode && (tt[zz] = tz.encode), tz.decode && (Pt[zz] = tz.decode)
    }

    function mt(zz) {
      for (const tz in zz) xt(tz, zz[tz]);
      return zz => mF(zz)
    }
    const Jt = "ArraySchema does not support streaming \u2014 positional ops (splice / unshift / reverse) shift subsequent indexes, so holding ADDs back for a later tick under `maxPerTick` would desync the decoder. Use `t.stream(X)` (stable monotonic positions) or `t.map(X).stream()` (stable keys) instead.";

    function It() {
      return {
        pendingByView: new Map,
        sentByView: new Map,
        broadcastPending: new Set,
        sentBroadcast: new Set,
        broadcastDeletes: new Set,
        maxPerTick: 32
      }
    }

    function Ct(zz) {
      return zz._stream ??= It()
    }

    function et(zz, tz, sz) {
      0 === tz.activeViews.size && Ct(zz).broadcastPending.add(sz)
    }

    function Zt(zz, tz, sz, Fz) {
      const Xz = zz._stream;
      if (void 0 === Xz) return !0;
      let Oz = !1;
      return Xz.broadcastPending.delete(Fz) ? Oz = !0 : Xz.sentBroadcast.delete(Fz) && Xz.broadcastDeletes.add(Fz), tz.forEachActiveView((zz => {
        const tz = Xz.pendingByView.get(zz.id);
        if (tz?.has(Fz)) return tz.delete(Fz), void(Oz = !0);
        const oz = Xz.sentByView.get(zz.id);
        if (oz?.has(Fz)) {
          oz.delete(Fz);
          let tz = zz.changes.get(sz);
          void 0 === tz && (tz = new Map, zz.changes.set(sz, tz)), tz.set(Fz, Wz.DELETE)
        }
      })), Oz
    }

    function Gt(zz, tz) {
      const sz = zz._stream?.pendingByView;
      if (void 0 === sz) return !1;
      for (const [Fz, Wz] of sz)
        if (Wz.size > 0 && void 0 !== tz.activeViews.get(Fz)?.deref()) return !0;
      return !1
    }

    function Tt(zz) {
      const tz = zz._stream;
      return void 0 !== tz && (tz.broadcastPending.size > 0 || tz.broadcastDeletes.size > 0)
    }

    function ct(zz, tz, sz) {
      const Fz = Ct(zz);
      let Wz = Fz.pendingByView.get(tz);
      void 0 === Wz && (Wz = new Set, Fz.pendingByView.set(tz, Wz)), Wz.add(sz)
    }

    function jt(zz, tz) {
      const sz = zz._stream;
      void 0 !== sz && (sz.pendingByView.delete(tz), sz.sentByView.delete(tz), sz.priorityByView?.delete(tz))
    }
    const At = {
      8: "uint8",
      16: "uint16",
      32: "uint32"
    };

    function yt(zz) {
      if (null == zz || "object" !== typeof zz) throw new Error("t.quantized(): options object with { min, max } is required.");
      const {
        min: tz,
        max: sz
      } = zz;
      if ("number" !== typeof tz || "number" !== typeof sz || !(sz > tz) || !Number.isFinite(tz) || !Number.isFinite(sz)) throw new Error(`t.quantized(): require finite min < max (got min=${tz}, max=${sz}).`);
      const Fz = zz.bits ?? 16;
      if (8 !== Fz && 16 !== Fz && 32 !== Fz) throw new Error(`t.quantized(): bits must be 8, 16 or 32 (got ${Fz}).`);
      const Wz = zz.mode ?? "clamp";
      if ("clamp" !== Wz && "wrap" !== Wz) throw new Error(`t.quantized(): mode must be "clamp" or "wrap" (got ${JSON.stringify(Wz)}).`);
      const Xz = "wrap" === Wz,
        Oz = Math.pow(2, Fz);
      return {
        min: tz,
        max: sz,
        bits: Fz,
        wrap: Xz,
        wire: At[Fz],
        range: sz - tz,
        span: Xz ? Oz : tz === -sz ? Oz - 2 : Oz - 1
      }
    }

    function Mt(zz) {
      return null !== zz && "object" === typeof zz && void 0 !== zz.quantized
    }

    function dt(zz, tz) {
      if (zz.wrap) {
        if (!Number.isFinite(tz)) return 0;
        const sz = zz.range;
        let Fz = (tz - zz.min) % sz;
        Fz < 0 && (Fz += sz);
        const Wz = zz.span;
        return Math.floor(Fz / sz * Wz + .5) % Wz
      }
      if (tz !== tz) return 0;
      const sz = tz < zz.min ? zz.min : tz > zz.max ? zz.max : tz;
      return Math.floor((sz - zz.min) / zz.range * zz.span + .5)
    }

    function ht(zz, tz) {
      return zz.min + tz / zz.span * zz.range
    }

    function Qt(zz) {
      const tz = tt[zz.wire];
      return (sz, Fz, Wz) => tz(sz, dt(zz, Fz), Wz)
    }
    class kt {
      types = {};
      schemas = new Map;
      hasFilters = !1;
      static inheritedTypes = new WeakMap;
      static cachedContexts = new WeakMap;
      static register(zz) {
        const tz = Object.getPrototypeOf(zz);
        if (tz !== cF) {
          let sz = kt.inheritedTypes.get(tz);
          sz || (sz = new Set, kt.inheritedTypes.set(tz, sz)), sz.add(zz)
        }
      }
      static cache(zz) {
        let tz = kt.cachedContexts.get(zz);
        return tz || (tz = new kt(zz), kt.cachedContexts.set(zz, tz)), tz
      }
      constructor(zz) {
        zz && this.discoverTypes(zz)
      }
      has(zz) {
        return this.schemas.has(zz)
      }
      get(zz) {
        return this.types[zz]
      }
      add(zz) {
        let tz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.schemas.size;
        return !this.schemas.has(zz) && (this.types[tz] = zz, null == zz[Symbol.metadata] && Vt.initialize(zz), this.schemas.set(zz, tz), !0)
      }
      getTypeId(zz) {
        return this.schemas.get(zz)
      }
      discoverTypes(zz) {
        if (!this.add(zz)) return;
        kt.inheritedTypes.get(zz)?.forEach((zz => {
          this.discoverTypes(zz)
        }));
        let tz = zz;
        for (;
          (tz = Object.getPrototypeOf(tz)) && tz !== cF && tz !== Function.prototype;) this.discoverTypes(tz);
        const sz = zz[Symbol.metadata];
        (sz[Zz] || sz[yz]) && (this.hasFilters = !0);
        for (const Fz in sz) {
          const zz = sz[Fz].type;
          if ("string" !== typeof zz && !Mt(zz))
            if ("function" === typeof zz) this.discoverTypes(zz);
            else {
              const tz = Object.values(zz)[0];
              if ("string" === typeof tz) continue;
              this.discoverTypes(tz)
            }
        }
      }
      debug() {
        return `TypeContext ->\n\tSchema types: ${this.schemas.size}\n\thasFilters: ${this.hasFilters}`
      }
    }

    function it(zz) {
      const tz = lt(zz);
      return tz ? {
        complexTypeKlass: rt[tz],
        childType: zz[tz]
      } : {
        complexTypeKlass: !1,
        childType: zz
      }
    }

    function Lt(zz, tz) {
      const sz = nt(zz),
        Fz = lt(sz),
        Wz = Fz && lt(sz[Fz]);
      if (Wz) throw new Error(`${tz?`${tz}: `:""}@colyseus/schema: nested collections are not supported ("${Fz}" of "${Wz}"). Collections can only hold primitive types or Schema classes, wrap the inner ${Wz} in a Schema class.`);
      return sz
    }

    function lt(zz) {
      return "object" === typeof zz && null !== zz ? Object.keys(zz).find((zz => void 0 !== rt[zz])) : void 0
    }

    function nt(zz) {
      if ("object" !== typeof zz || null === zz) return zz;
      if (Array.isArray(zz)) return {
        array: nt(zz[0])
      };
      const tz = function(zz) {
        const tz = Object.keys(zz),
          sz = tz.filter((zz => /\d+/.test(zz)));
        if (sz.length > 0 && sz.length === tz.length / 2 && zz[zz[sz[0]]] == sz[0]) return "number";
        if (tz.length > 0 && tz.every((tz => zz[tz] === tz))) return "string"
      }(zz);
      if (tz) return tz;
      if (Mt(zz)) return "string" === typeof zz.quantized.wire ? zz : {
        quantized: yt(zz.quantized)
      };
      if (void 0 !== zz.type) return nt(zz.type);
      const sz = lt(zz);
      return sz && (zz[sz] = nt(zz[sz])), zz
    }
    const qt = [ez, Tz, cz, jz, Az, yz, Iz];

    function St(zz, tz, sz) {
      zz[tz] || Object.defineProperty(zz, tz, {
        value: [],
        enumerable: !1,
        configurable: !0,
        writable: !0
      }), zz[tz].push(sz)
    }
    const Vt = {
        addField(zz, tz, sz, Fz, Wz) {
          if (tz >= 63) throw new Error(`Can't define field '${sz}'.\nSchema instances may only have up to 63 fields.`);
          zz[tz] = Object.assign(zz[tz] || {}, {
            type: Fz,
            index: tz,
            name: sz
          }), Object.defineProperty(zz, mz, {
            value: zz[mz] || {},
            enumerable: !1,
            configurable: !0
          }), zz[mz][sz] = Wz || {
            value: void 0,
            writable: !0,
            enumerable: !0,
            configurable: !0
          }, Object.defineProperty(zz, Cz, {
            value: tz,
            enumerable: !1,
            configurable: !0
          }), Object.defineProperty(zz, sz, {
            value: tz,
            enumerable: !1,
            configurable: !0
          }), "string" === typeof zz[tz].type || Mt(zz[tz].type) || (void 0 === zz[ez] && Object.defineProperty(zz, ez, {
            value: [],
            enumerable: !1,
            configurable: !0
          }), zz[ez].push(tz));
          const Xz = zz[tz].type;
          if (Xz && "object" === typeof Xz && void 0 !== Xz.stream) {
            if (void 0 !== Xz.array) throw new Error(Jt);
            zz[tz].stream = !0, zz[yz] || Object.defineProperty(zz, yz, {
              value: [],
              enumerable: !1,
              configurable: !0,
              writable: !0
            }), zz[yz].includes(tz) || zz[yz].push(tz);
            const Wz = Fz?.priority;
            "function" === typeof Wz && Vt.setStreamPriority(zz, sz, Wz)
          }
        },
        setTag(zz, tz, sz) {
          const Fz = zz[tz];
          if (zz[Fz].tag = sz, zz[Zz] || (Object.defineProperty(zz, Zz, {
              value: [],
              enumerable: !1,
              configurable: !0
            }), Object.defineProperty(zz, Gz, {
              value: {},
              enumerable: !1,
              configurable: !0
            })), zz[Zz].push(Fz), sz < 0) zz[Gz][sz] || (zz[Gz][sz] = []), zz[Gz][sz].push(Fz);
          else
            for (let Wz = sz; Wz > 0; Wz &= Wz - 1) {
              const tz = Wz & -Wz;
              zz[Gz][tz] || (zz[Gz][tz] = []), zz[Gz][tz].push(Fz)
            }
        },
        setUnreliable(zz, tz) {
          const sz = zz[tz];
          if ("string" !== typeof zz[sz].type) throw new Error(`@unreliable cannot be applied to ref-type field "${tz}". For ref-type fields, mark each primitive sub-field with @unreliable instead. See README "Limitations and best practices".`);
          zz[sz].unreliable = !0, zz[Tz] || Object.defineProperty(zz, Tz, {
            value: [],
            enumerable: !1,
            configurable: !0,
            writable: !0
          }), zz[Tz].push(sz)
        },
        setPatchOnly(zz, tz) {
          const sz = zz[tz];
          if (zz[sz].fullStateOnly) throw new Error(`field "${tz}" cannot be both patchOnly and fullStateOnly \u2014 those are the only two delivery channels, so the field would never reach a client.`);
          zz[sz].patchOnly = !0, St(zz, cz, sz), St(zz, jz, sz)
        },
        setDeprecated(zz, tz) {
          const sz = zz[tz];
          zz[sz].deprecated = !0, St(zz, jz, sz), Object.defineProperty(zz, sz, {
            value: zz[sz],
            enumerable: !1,
            configurable: !0
          })
        },
        setFullStateOnly(zz, tz) {
          const sz = zz[tz];
          if (zz[sz].patchOnly) throw new Error(`field "${tz}" cannot be both patchOnly and fullStateOnly \u2014 those are the only two delivery channels, so the field would never reach a client.`);
          zz[sz].fullStateOnly = !0, St(zz, Az, sz)
        },
        setStream(zz, tz) {
          const sz = zz[tz];
          zz[sz].stream = !0, zz[yz] || Object.defineProperty(zz, yz, {
            value: [],
            enumerable: !1,
            configurable: !0,
            writable: !0
          }), zz[yz].push(sz)
        },
        setStreamPriority(zz, tz, sz) {
          const Fz = zz[tz];
          zz[Mz] || Object.defineProperty(zz, Mz, {
            value: {},
            enumerable: !1,
            configurable: !0,
            writable: !0
          }), zz[Mz][Fz] = sz
        },
        getStreamPriority: (zz, tz) => zz?.[Mz]?.[tz],
        defineField(zz, tz, sz, Fz, Wz) {
          const Xz = Lt(Wz, `${zz.name}.${Fz}`),
            {
              complexTypeKlass: Oz,
              childType: oz
            } = it(Xz);
          Vt.addField(tz, sz, Fz, Xz, IF(Fz, sz, oz, Oz)), tz[mz][Fz] && Object.defineProperty(zz.prototype, Fz, tz[mz][Fz]), ("string" === typeof Xz || Mt(Xz)) && (tz[Iz] || Object.defineProperty(tz, Iz, {
            value: [],
            enumerable: !1,
            configurable: !0,
            writable: !0
          }), tz[Iz][sz] = "string" === typeof Xz ? tt[Xz] : Qt(Xz.quantized))
        },
        setFields(zz, tz) {
          const sz = zz.prototype.constructor;
          kt.register(sz);
          const Fz = Object.getPrototypeOf(sz),
            Wz = Fz && Fz[Symbol.metadata],
            Xz = Vt.initialize(sz);
          sz[vz] || (sz[vz] = cF[vz]), sz[Uz] || (sz[Uz] = cF[Uz]), sz[Kz] || (sz[Kz] = cF[Kz]), sz.prototype.toJSON || (sz.prototype.toJSON = cF.prototype.toJSON);
          let Oz = Xz[Cz] ?? (Wz && Wz[Cz]) ?? -1;
          Oz++, Xz[Iz] || Object.defineProperty(Xz, Iz, {
            value: Wz?.[Iz] ? [...Wz[Iz]] : [],
            enumerable: !1,
            configurable: !0,
            writable: !0
          });
          for (const oz in tz) {
            if (void 0 !== Xz[oz]) throw new Error(`@colyseus/schema: Duplicate '${oz}' definition on '${sz.name||"(anonymous)"}'.`);
            Vt.defineField(sz, Xz, Oz, oz, tz[oz]), Oz++
          }
          return zz
        },
        isDeprecated: (zz, tz) => !0 === zz[tz].deprecated,
        initialize(zz) {
          const tz = Object.getPrototypeOf(zz),
            sz = tz[Symbol.metadata];
          let Fz = zz[Symbol.metadata] ?? Object.create(null);
          if (tz !== cF && Fz === sz && (Fz = Object.create(null), sz)) {
            Object.setPrototypeOf(Fz, sz), Object.defineProperty(Fz, Cz, {
              value: sz[Cz],
              enumerable: !1,
              configurable: !0,
              writable: !0
            }), void 0 !== sz[Zz] && (Object.defineProperty(Fz, Zz, {
              value: [...sz[Zz]],
              enumerable: !1,
              configurable: !0,
              writable: !0
            }), Object.defineProperty(Fz, Gz, {
              value: {
                ...sz[Gz]
              },
              enumerable: !1,
              configurable: !0,
              writable: !0
            }));
            for (const zz of qt) {
              const tz = sz[zz];
              void 0 !== tz && Object.defineProperty(Fz, zz, {
                value: [...tz],
                enumerable: !1,
                configurable: !0,
                writable: !0
              })
            }
            Object.defineProperty(Fz, mz, {
              value: {
                ...sz[mz]
              },
              enumerable: !1,
              configurable: !0,
              writable: !0
            })
          }
          return Object.defineProperty(zz, Symbol.metadata, {
            value: Fz,
            writable: !1,
            configurable: !0
          }), Fz
        },
        isValidInstance: zz => zz.constructor[Symbol.metadata] && Object.prototype.hasOwnProperty.call(zz.constructor[Symbol.metadata], Cz),
        getFields(zz) {
          const tz = zz[Symbol.metadata],
            sz = {};
          for (let Fz = 0; Fz <= tz[Cz]; Fz++) sz[tz[Fz].name] = tz[Fz].type;
          return sz
        },
        hasViewTagAtIndex: (zz, tz) => zz?.[Zz]?.includes(tz),
        hasUnreliableAtIndex: (zz, tz) => zz?.[Tz]?.includes(tz),
        hasPatchOnlyAtIndex: (zz, tz) => zz?.[cz]?.includes(tz),
        hasFullStateOnlyAtIndex: (zz, tz) => zz?.[Az]?.includes(tz),
        hasStreamAtIndex: (zz, tz) => zz?.[yz]?.includes(tz)
      },
      Rt = (zz, tz, sz) => zz(tz, sz);
    class pt {
      dirtyLow = 0;
      dirtyHigh = 0;
      ops;
      constructor(zz) {
        this.ops = new Uint8Array(Math.max(zz + 1, 1))
      }
      record(zz, tz) {
        const sz = this.ops[zz];
        0 === sz ? this.ops[zz] = tz : (sz === Wz.DELETE || sz === Wz.ADD && tz === Wz.DELETE_AND_ADD) && (this.ops[zz] = Wz.DELETE_AND_ADD), zz < 32 ? this.dirtyLow |= 1 << zz : this.dirtyHigh |= 1 << zz - 32
      }
      recordDelete(zz, tz) {
        this.ops[zz] = tz, zz < 32 ? this.dirtyLow |= 1 << zz : this.dirtyHigh |= 1 << zz - 32
      }
      recordRaw(zz, tz) {
        this.record(zz, tz)
      }
      operationAt(zz) {
        const tz = this.ops[zz];
        return 0 === tz ? void 0 : tz
      }
      setOperationAt(zz, tz) {
        this.ops[zz] = tz
      }
      forEach(zz) {
        this.forEachWithCtx(zz, Rt)
      }
      forEachWithCtx(zz, tz) {
        let sz = this.dirtyLow,
          Fz = this.dirtyHigh;
        const Wz = this.ops;
        for (; 0 !== sz;) {
          const Fz = sz & -sz,
            Xz = 31 - Math.clz32(Fz);
          sz ^= Fz, tz(zz, Xz, Wz[Xz])
        }
        for (; 0 !== Fz;) {
          const sz = Fz & -Fz,
            Xz = 31 - Math.clz32(sz) + 32;
          Fz ^= sz, tz(zz, Xz, Wz[Xz])
        }
      }
      size() {
        return Et(this.dirtyLow) + Et(this.dirtyHigh)
      }
      has() {
        return 0 !== (this.dirtyLow | this.dirtyHigh)
      }
      reset() {
        this.dirtyLow = 0, this.dirtyHigh = 0, this.ops.fill(0)
      }
    }
    class ft {
      KD = new Map;
      pureOps = [];
      record(zz, tz) {
        const sz = this.KD.get(zz);
        void 0 === sz ? this.KD.set(zz, tz) : (sz === Wz.DELETE || sz === Wz.ADD && tz === Wz.DELETE_AND_ADD) && this.KD.set(zz, Wz.DELETE_AND_ADD)
      }
      recordDelete(zz, tz) {
        this.KD.set(zz, tz)
      }
      recordRaw(zz, tz) {
        this.KD.set(zz, tz)
      }
      recordPure(zz) {
        this.pureOps.push([this.KD.size, zz])
      }
      operationAt(zz) {
        return this.KD.get(zz)
      }
      setOperationAt(zz, tz) {
        this.KD.has(zz) && this.KD.set(zz, tz)
      }
      forEach(zz) {
        this.forEachWithCtx(zz, Rt)
      }
      forEachWithCtx(zz, tz) {
        const sz = this.pureOps;
        if (sz.length > 0) {
          let Fz = 0,
            Wz = 0;
          for (const [Xz, Oz] of this.KD) {
            for (; Fz < sz.length && sz[Fz][0] <= Wz;) {
              const Wz = sz[Fz++][1];
              tz(zz, -Wz, Wz)
            }
            tz(zz, Xz, Oz), Wz++
          }
          for (; Fz < sz.length;) {
            const Wz = sz[Fz++][1];
            tz(zz, -Wz, Wz)
          }
        } else
          for (const [Fz, Wz] of this.KD) tz(zz, Fz, Wz)
      }
      size() {
        return this.KD.size + this.pureOps.length
      }
      has() {
        return this.KD.size > 0 || this.pureOps.length > 0
      }
      reset() {
        this.KD.clear(), this.pureOps.length = 0
      }
      shift(zz) {
        const tz = new Map;
        for (const [sz, Fz] of this.KD) tz.set(sz + zz, Fz);
        this.KD = tz
      }
    }

    function Et(zz) {
      return 16843009 * ((zz = (858993459 & (zz -= zz >>> 1 & 1431655765)) + (zz >>> 2 & 858993459)) + (zz >>> 4) & 252645135) >>> 24
    }

    function zs(zz) {
      if (void 0 === zz) return 0;
      let tz = 0;
      for (let sz = 0, Fz = zz.length; sz < Fz; sz++) {
        const Fz = zz[sz];
        Fz < 32 && (tz |= 1 << Fz)
      }
      return tz
    }

    function ts(zz) {
      const tz = zz.constructor;
      if (Object.prototype.hasOwnProperty.call(tz, Jz)) return tz[Jz];
      const sz = tz[Symbol.metadata],
        Fz = Vt.isValidInstance(zz),
        Wz = (sz?.[Zz]?.length ?? 0) > 0,
        Xz = function(zz) {
          const tz = [],
            sz = [],
            Fz = [],
            Wz = [],
            Xz = zz?.[Cz];
          if (void 0 === Xz) return {
            names: tz,
            types: sz,
            tags: Fz,
            encoders: Wz
          };
          const Oz = zz[Iz];
          for (let oz = 0; oz <= Xz; oz++) {
            const Xz = zz[oz];
            void 0 !== Xz ? (tz[oz] = Xz.name, sz[oz] = Xz.type, Fz[oz] = Xz.tag, Wz[oz] = Oz?.[oz]) : (tz[oz] = void 0, sz[oz] = void 0, Fz[oz] = void 0, Wz[oz] = void 0)
          }
          return {
            names: tz,
            types: sz,
            tags: Fz,
            encoders: Wz
          }
        }(sz),
        Oz = Fz && !Wz ? void 0 : tz[uz],
        oz = {
          encoder: tz[Uz],
          filter: Oz,
          metadata: sz,
          isSchema: Fz,
          filterBitmask: Fz ? zs(sz?.[Zz]) : 0,
          hasAnyFullStateOnly: (sz?.[Az]?.length ?? 0) > 0,
          hasAnyUnreliable: (sz?.[Tz]?.length ?? 0) > 0,
          hasAnyStream: (sz?.[yz]?.length ?? 0) > 0,
          hasAnyView: Wz,
          fullStateOnlyBitmask: zs(sz?.[Az]),
          unreliableBitmask: zs(sz?.[Tz]),
          streamBitmask: zs(sz?.[yz]),
          names: Xz.names,
          types: Xz.types,
          tags: Xz.tags,
          encoders: Xz.encoders
        };
      return Object.defineProperty(tz, Jz, {
        value: oz,
        enumerable: !1,
        writable: !0,
        configurable: !0
      }), oz
    }

    function ss(zz, tz) {
      if (void 0 !== zz.parentRef && tz(zz.parentRef, zz._parentIndex)) return !0;
      for (let sz = zz.extraParents; void 0 !== sz; sz = sz.next)
        if (tz(sz.ref, sz.index)) return !0;
      return !1
    }
    const Fs = (zz, tz) => {
        zz.isFieldUnreliable(tz) ? zz.ensureUnreliableRecorder().record(tz, Wz.ADD) : zz.record(tz, Wz.ADD)
      },
      Ws = (zz, tz) => zz(tz);

    function Xs(zz, tz, sz) {
      const Fz = zz.refTarget;
      if (void 0 !== Fz[gz]) {
        if (zz.isPatchOnly) return;
        if (Array.isArray(Fz.items)) {
          const zz = Fz.items;
          for (let Fz = 0, Wz = zz.length; Fz < Wz; Fz++) void 0 !== zz[Fz] && sz(tz, Fz)
        } else if (void 0 !== Fz.journal)
          for (const [zz, Wz] of Fz.journal.keyByIndex) Fz.$items.has(Wz) && sz(tz, zz);
        else if (void 0 !== Fz.$items)
          for (const zz of Fz.$items.keys()) sz(tz, zz)
      } else {
        const Wz = zz.metadata;
        if (!Wz) return;
        const Xz = Wz[Cz] ?? -1,
          Oz = Wz[jz],
          oz = zz.encDescriptor.names;
        for (let zz = 0; zz <= Xz; zz++) {
          const Wz = oz[zz];
          if (void 0 === Wz) continue;
          if (Oz && Oz.includes(zz)) continue;
          const Xz = Fz[Wz];
          void 0 !== Xz && null !== Xz && sz(tz, zz)
        }
      }
    }

    function Os(zz, tz, sz, Fz) {
      ! function(zz, tz, sz) {
        if (!tz) return;
        const Fz = tz[Dz],
          Wz = !Fz._isSchema;
        let Xz;
        Wz ? (tz = Fz.parent, sz = Fz.parentIndex, Xz = tz?.[Dz].metadata) : Xz = Fz.metadata;
        const Oz = (Xz?.[cz]?.includes(sz) ? Cs : 0) | (Xz?.[Az]?.includes(sz) ? es : 0),
          oz = Fz.flags & Ts | Oz,
          vz = zz.flags;
        zz.flags = vz | oz;
        oz & ~vz & es && (zz.reset(), zz.unreliableRecorder?.reset());
        const Uz = zz.root?.types;
        if (!Uz?.hasFilters) return;
        const Kz = Xz?.[Zz]?.includes(sz) ?? !1,
          uz = Xz?.[yz]?.includes(sz) ?? !1,
          Nz = Fz.isFiltered || Kz || uz;
        if (zz.isFiltered = Nz, uz && !Wz) {
          zz.isStreamCollection = !0;
          const tz = Ct(zz.ref);
          if (void 0 === tz.priority) {
            const zz = Vt.getStreamPriority(Xz, sz);
            void 0 !== zz && (tz.priority = zz)
          }
          zz.root?.registerStream(zz.ref)
        }
        if (Nz) {
          const tz = vs(zz);
          zz.isVisibilitySharedWithParent = Fz.isFiltered && tz && !uz && (!Kz || Wz && Xz[sz].tag !== HF)
        }
      }(zz, tz, sz), zz.isFullStateOnly || (zz.has() && zz.root?.enqueueChangeTree(zz), zz.unreliableRecorder?.has() && zz.root?.enqueueUnreliable(zz), zz.has() || zz.unreliableRecorder?.has() || zz.root?.enqueueChangeTree(zz))
    }

    function os(zz) {
      const tz = zz.pendingFilterRefresh;
      for (let sz = 0; sz < tz.length; sz++) {
        const zz = tz[sz];
        0 !== (zz.flags & Gs) && Us(zz)
      }
      tz.length = 0
    }

    function vs(zz) {
      return zz._isSchema || "string" !== typeof zz.refTarget[gz]
    }

    function Us(zz) {
      zz.flags &= ~Gs;
      const tz = zz.root;
      if (void 0 === tz || void 0 === zz.parentRef) return;
      const sz = vs(zz);
      let Fz = ws(zz, zz.parentRef, zz._parentIndex, sz);
      for (let Xz = zz.extraParents; void 0 !== Xz && Fz !== bs; Xz = Xz.next) Fz |= ws(zz, Xz.ref, Xz.index, sz);
      if (0 === Fz) return;
      zz.isVisibilitySharedWithParent = 0 !== (Fz & Ns);
      const Wz = 0 === (Fz & us);
      Wz !== zz.isFiltered && (zz.isFiltered = Wz, Wz || zz.isFullStateOnly || (zz.forEachLiveWithCtx(zz, Fs), zz.has() && tz.enqueueChangeTree(zz), zz.unreliableRecorder?.has() && tz.enqueueUnreliable(zz)), zz.forEachChildWithCtx(zz, Ds))
    }
    const Ks = 1,
      us = 2,
      Ns = 4,
      bs = Ks | us | Ns;

    function ws(zz, tz, sz, Fz) {
      const Wz = tz[Dz];
      if (Wz.root !== zz.root || ! function(zz, tz, sz) {
          const Fz = tz.refTarget;
          if (tz.isArray) {
            const tz = Fz.items,
              Wz = tz[sz];
            if (void 0 !== Wz && Wz[Dz] === zz) return !0;
            for (let sz = 0, Fz = tz.length; sz < Fz; sz++) {
              const Fz = tz[sz];
              if (void 0 !== Fz && Fz[Dz] === zz) return !0
            }
            return !1
          }
          const Wz = tz.getValue(sz);
          return void 0 !== Wz && Wz[Dz] === zz
        }(zz, Wz, sz)) return 0;
      Wz.flags & Gs && Us(Wz);
      let Xz = Ks;
      if (Wz._isSchema) {
        void 0 !== Wz.encDescriptor.tags[sz] || Wz.isFieldStream(sz) || (Wz.isFiltered ? Fz && (Xz |= Ns) : Xz |= us)
      } else if (Wz.isFiltered) {
        if (Fz && !Wz.isStreamCollection) {
          const zz = Wz.parent?.[Dz];
          (zz?._isSchema ? zz.encDescriptor.tags[Wz.parentIndex] : void 0) !== HF && (Xz |= Ns)
        }
      } else Xz |= us;
      return Xz
    }
    const Ds = (zz, tz, sz) => {
      Us(tz)
    };

    function gs(zz, tz, sz, Fz) {
      if (zz.addParent(tz, Fz), !sz) return;
      const Wz = sz.add(zz);
      sz !== zz.root && (zz.root = sz, Os(zz, tz, Fz));
      const Xz = tz?.[Dz];
      if (void 0 !== Xz && void 0 !== Xz.subscribedViews && void 0 !== tz[gz] && function(zz, tz, sz, Fz) {
          const Wz = zz.subscribedViews;
          if (void 0 === Wz) return;
          const Xz = zz.isStreamCollection,
            Oz = Xz ? zz.ref : void 0,
            oz = Xz ? void 0 : sz[Dz];
          for (let vz = 0, Uz = Wz.length; vz < Uz; vz++) {
            let zz = Wz[vz];
            for (; 0 !== zz;) {
              const sz = zz & -zz;
              zz ^= sz;
              const Uz = 32 * vz + (31 - Math.clz32(sz)),
                Kz = Fz.activeViews.get(Uz),
                uz = Kz?.deref();
              void 0 !== uz ? Xz ? ct(Oz, Uz, tz) : void 0 !== oz && uz.markVisible(oz) : Wz[vz] &= ~sz
            }
          }
        }(Xz, Fz, zz.ref, sz), Wz) {
        let tz = rs[Ys];
        void 0 === tz && (tz = {
          parentRef: void 0,
          root: void 0
        }, rs[Ys] = tz), tz.parentRef = zz.ref, tz.root = sz, Ys++, Bs(zz, tz, xs), Ys--
      }
    }

    function Hs(zz, tz, sz) {
      zz(tz, sz)
    }

    function Bs(zz, tz, sz) {
      const Fz = zz.refTarget;
      if (Fz[gz]) {
        if ("string" !== typeof Fz[gz]) {
          const zz = Fz.items;
          if (void 0 !== zz)
            for (let Fz = 0, Wz = zz.length; Fz < Wz; Fz++) {
              const Wz = zz[Fz];
              Wz && sz(tz, Wz[Dz], Fz)
            } else {
              const zz = Fz.$items,
                Wz = Fz._collectionIndexes;
              for (const Fz of zz.keys()) {
                const Xz = zz.get(Fz);
                Xz && sz(tz, Xz[Dz], Wz?.[Fz] ?? Fz)
              }
            }
        }
      } else {
        const Wz = zz.metadata,
          Xz = Wz?.[ez];
        if (!Xz) return;
        const Oz = zz.encDescriptor.names;
        for (let zz = 0, oz = Xz.length; zz < oz; zz++) {
          const Wz = Xz[zz],
            oz = Fz[Oz[Wz]];
          oz && sz(tz, oz[Dz], Wz)
        }
      }
    }

    function Ps(zz, tz, sz) {
      tz.root !== zz ? tz.setRoot(zz) : zz.add(tz)
    }
    const rs = [];
    let Ys = 0;

    function xs(zz, tz, sz) {
      if (tz.root === zz.root) return zz.root.add(tz), void zz.root.moveNextToParent(tz);
      tz.setParent(zz.parentRef, zz.root, sz)
    }

    function ms(zz, tz, sz) {
      const Fz = (3 & sz) << 3;
      return sz < 4 ? zz >>> Fz & 255 : tz >>> Fz & 255
    }
    const Is = (zz, tz, sz) => zz(tz, sz);
    const Cs = 16,
      es = 32,
      Zs = 128,
      Gs = 256,
      Ts = Cs | es;
    class cs {
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
      set isFiltered(zz) {
        this.flags = zz ? 1 | this.flags : -2 & this.flags
      }
      get isVisibilitySharedWithParent() {
        return 0 !== (2 & this.flags)
      }
      set isVisibilitySharedWithParent(zz) {
        this.flags = zz ? 2 | this.flags : -3 & this.flags
      }
      get isNew() {
        return 0 !== (4 & this.flags)
      }
      set isNew(zz) {
        this.flags = zz ? 4 | this.flags : -5 & this.flags
      }
      get isUnreliable() {
        return 0 !== (8 & this.flags)
      }
      set isUnreliable(zz) {
        this.flags = zz ? 8 | this.flags : -9 & this.flags
      }
      get isPatchOnly() {
        return 0 !== (this.flags & Cs)
      }
      set isPatchOnly(zz) {
        this.flags = zz ? this.flags | Cs : this.flags & ~Cs
      }
      get isFullStateOnly() {
        return 0 !== (this.flags & es)
      }
      set isFullStateOnly(zz) {
        this.flags = zz ? this.flags | es : this.flags & ~es
      }
      get isStreamCollection() {
        return 0 !== (64 & this.flags)
      }
      set isStreamCollection(zz) {
        this.flags = zz ? 64 | this.flags : -65 & this.flags
      }
      get needsRestage() {
        return 0 !== (this.flags & Zs)
      }
      set needsRestage(zz) {
        this.flags = zz ? this.flags | Zs : -129 & this.flags
      }
      get hasFilteredFields() {
        return this.isFiltered || this.encDescriptor.hasAnyView
      }
      ensureUnreliableRecorder() {
        return void 0 === this.unreliableRecorder && (this.unreliableRecorder = this._isSchema ? new pt(this.metadata?.[Cz] ?? 0) : new ft), this.unreliableRecorder
      }
      isFieldUnreliable(zz) {
        const tz = this.encDescriptor;
        return !!tz.hasAnyUnreliable && (zz < 32 ? 0 !== (tz.unreliableBitmask & 1 << zz) : Vt.hasUnreliableAtIndex(this.metadata, zz))
      }
      isFieldFullStateOnly(zz) {
        if (this.isFullStateOnly) return !0;
        const tz = this.encDescriptor;
        return !!tz.hasAnyFullStateOnly && (zz < 32 ? 0 !== (tz.fullStateOnlyBitmask & 1 << zz) : Vt.hasFullStateOnlyAtIndex(this.metadata, zz))
      }
      isFieldStream(zz) {
        const tz = this.encDescriptor;
        return !!tz.hasAnyStream && (zz < 32 ? 0 !== (tz.streamBitmask & 1 << zz) : Vt.hasStreamAtIndex(this.metadata, zz))
      }
      constructor(zz) {
        let tz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : zz;
        this.ref = zz, this.refTarget = tz;
        const sz = ts(zz);
        this.encDescriptor = sz, this.metadata = sz.metadata;
        const Fz = sz.isSchema;
        if (this._isSchema = Fz, this.ops = void 0, this.collDirty = void 0, this.collPureOps = void 0, Fz) {
          const zz = this.metadata?.[Cz] ?? 0;
          zz > 7 && (this.ops = new Uint8Array(zz + 1))
        } else this.collDirty = new Map
      }
      _opAt(zz) {
        const tz = this.ops;
        if (void 0 !== tz) return tz[zz];
        const sz = (3 & zz) << 3;
        return zz < 4 ? this.opsLow >>> sz & 255 : this.opsHigh >>> sz & 255
      }
      _opPut(zz, tz) {
        const sz = this.ops;
        if (void 0 !== sz) return void(sz[zz] = tz);
        const Fz = (3 & zz) << 3,
          Wz = ~(255 << Fz);
        zz < 4 ? this.opsLow = this.opsLow & Wz | tz << Fz : this.opsHigh = this.opsHigh & Wz | tz << Fz
      }
      _markDirty(zz) {
        zz < 32 ? this.dirtyLow |= 1 << zz : this.dirtyHigh |= 1 << zz - 32
      }
      record(zz, tz) {
        if (this._isSchema) {
          const sz = this._opAt(zz);
          0 === sz ? this._opPut(zz, tz) : (sz === Wz.DELETE || sz === Wz.ADD && tz === Wz.DELETE_AND_ADD) && this._opPut(zz, Wz.DELETE_AND_ADD), this._markDirty(zz)
        } else {
          const sz = this.collDirty,
            Fz = sz.get(zz);
          let Xz;
          Xz = void 0 === Fz ? tz : Fz === Wz.DELETE || Fz === Wz.ADD && tz === Wz.DELETE_AND_ADD ? Wz.DELETE_AND_ADD : Fz, sz.set(zz, Xz)
        }
      }
      recordDelete(zz, tz) {
        this._isSchema ? (this._opPut(zz, tz), this._markDirty(zz)) : this.collDirty.set(zz, tz)
      }
      recordRaw(zz, tz) {
        this._isSchema ? (this._opPut(zz, tz), this._markDirty(zz)) : this.collDirty.set(zz, tz)
      }
      recordPure(zz) {
        if (this._isSchema) throw new Error("ChangeTree (Schema): pure operations are not supported");
        (this.collPureOps ??= []).push([this.collDirty.size, zz])
      }
      operationAt(zz) {
        if (this._isSchema) {
          const tz = this._opAt(zz);
          return 0 === tz ? void 0 : tz
        }
        return this.collDirty.get(zz)
      }
      setOperationAt(zz, tz) {
        if (this._isSchema) this._opPut(zz, tz);
        else {
          const sz = this.collDirty;
          sz.has(zz) && sz.set(zz, tz)
        }
      }
      forEach(zz) {
        this.forEachWithCtx(zz, Is)
      }
      forEachWithCtx(zz, tz) {
        if (this._isSchema) {
          let sz = this.dirtyLow,
            Fz = this.dirtyHigh;
          const Wz = this.ops;
          if (void 0 !== Wz) {
            for (; 0 !== sz;) {
              const Fz = sz & -sz,
                Xz = 31 - Math.clz32(Fz);
              sz ^= Fz, tz(zz, Xz, Wz[Xz])
            }
            for (; 0 !== Fz;) {
              const sz = Fz & -Fz,
                Xz = 31 - Math.clz32(sz) + 32;
              Fz ^= sz, tz(zz, Xz, Wz[Xz])
            }
          } else {
            const Fz = this.opsLow,
              Wz = this.opsHigh;
            for (; 0 !== sz;) {
              const Xz = sz & -sz,
                Oz = 31 - Math.clz32(Xz);
              sz ^= Xz, tz(zz, Oz, ms(Fz, Wz, Oz))
            }
          }
          return
        }
        const sz = this.collDirty,
          Fz = this.collPureOps;
        if (void 0 !== Fz && Fz.length > 0) {
          let Wz = 0,
            Xz = 0;
          for (const [Oz, oz] of sz) {
            for (; Wz < Fz.length && Fz[Wz][0] <= Xz;) {
              const sz = Fz[Wz++][1];
              tz(zz, -sz, sz)
            }
            tz(zz, Oz, oz), Xz++
          }
          for (; Wz < Fz.length;) {
            const sz = Fz[Wz++][1];
            tz(zz, -sz, sz)
          }
        } else
          for (const [Wz, Xz] of sz) tz(zz, Wz, Xz)
      }
      size() {
        return this._isSchema ? Et(this.dirtyLow) + Et(this.dirtyHigh) : this.collDirty.size + (this.collPureOps?.length ?? 0)
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
      insertAt(zz, tz) {
        if (this._isSchema) throw new Error("ChangeTree (Schema): insertAt is not supported");
        const sz = this.collDirty,
          Fz = new Map,
          Xz = !this.paused && !this.isFullStateOnly;
        if (zz > 0)
          for (const [Wz, Oz] of sz) Wz < zz && Fz.set(Wz, Oz);
        if (Xz)
          for (let Oz = 0; Oz < tz; Oz++) Fz.set(zz + Oz, Wz.ADD);
        for (const [Wz, Oz] of sz) Wz >= zz && Fz.set(Wz + tz, Oz);
        this.collDirty = Fz, Xz && this.root?.enqueueChangeTree(this)
      }
      removeAt(zz, tz) {
        if (this._isSchema) throw new Error("ChangeTree (Schema): removeAt is not supported");
        const sz = this.collDirty,
          Fz = zz + tz;
        let Wz = !1;
        for (const Oz of sz.keys())
          if (Oz >= Fz) {
            Wz = !0;
            break
          } if (!Wz) {
          for (let tz = zz; tz < Fz; tz++) sz.delete(tz);
          return
        }
        const Xz = new Map;
        for (const [Oz, oz] of sz) Oz < zz ? Xz.set(Oz, oz) : Oz >= Fz && Xz.set(Oz - tz, oz);
        this.collDirty = Xz
      }
      unshift(zz) {
        this.insertAt(0, zz)
      }
      setRoot(zz) {
        ! function(zz, tz) {
          zz.root = tz;
          const sz = tz.add(zz);
          Os(zz, zz.parent, zz.parentIndex), sz && Bs(zz, tz, Ps)
        }(this, zz)
      }
      setParent(zz, tz, sz) {
        gs(this, zz, tz, sz)
      }
      forEachChild(zz) {
        Bs(this, zz, Hs)
      }
      forEachChildWithCtx(zz, tz) {
        Bs(this, zz, tz)
      }
      forEachLive(zz) {
        Xs(this, zz, Ws)
      }
      forEachLiveWithCtx(zz, tz) {
        Xs(this, zz, tz)
      }
      operation(zz) {
        this.paused || this.isFullStateOnly || (this.recordPure(zz), this.root?.enqueueChangeTree(this))
      }
      _routeAndRecord(zz, tz, sz) {
        if (!this.paused && !this.isFieldFullStateOnly(zz)) {
          if (this.isFieldUnreliable(zz) && !this.isNew) {
            const Fz = this.ensureUnreliableRecorder();
            return sz ? Fz.recordRaw(zz, tz) : Fz.record(zz, tz), void this.root?.enqueueUnreliable(this)
          }
          sz ? this.recordRaw(zz, tz) : this.record(zz, tz), this.root?.enqueueChangeTree(this)
        }
      }
      change(zz) {
        let tz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Wz.ADD;
        this._routeAndRecord(zz, tz, !1)
      }
      indexedOperation(zz, tz) {
        this._routeAndRecord(zz, tz, !0)
      }
      getChange(zz) {
        return this.operationAt(zz)
      }
      pause() {
        this.paused = !0
      }
      resume() {
        this.paused = !1
      }
      untracked(zz) {
        const tz = this.paused;
        this.paused = !0;
        try {
          return zz()
        } finally {
          this.paused = tz
        }
      }
      markDirty(zz) {
        let tz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Wz.ADD;
        const sz = this.paused;
        this.paused = !1;
        try {
          this.change(zz, tz)
        } finally {
          this.paused = sz
        }
      }
      getValue(zz) {
        let tz = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return this.refTarget[Nz](zz, tz)
      }
      delete(zz, tz) {
        if (void 0 === zz) {
          try {
            throw new Error(`@colyseus/schema ${this.ref.constructor.name}: trying to delete non-existing index '${zz}'`)
          } catch (vW) {
            console.warn(vW)
          }
          return
        }
        if (this.paused || this.isFieldFullStateOnly(zz)) return this.getValue(zz);
        const sz = this.isFieldUnreliable(zz) && !this.isNew;
        sz ? this.ensureUnreliableRecorder().recordDelete(zz, tz ?? Wz.DELETE) : this.recordDelete(zz, tz ?? Wz.DELETE);
        const Fz = this.getValue(zz);
        return Fz && Fz[Dz] && this.root?.remove(Fz[Dz]), sz ? this.root?.enqueueUnreliable(this) : this.root?.enqueueChangeTree(this), Fz
      }
      endEncode() {
        this.reset(), this.changesNode = void 0, this._isSchema || this.refTarget[Bz]?.(), this.isNew = !1
      }
      endEncodeUnreliable() {
        this.unreliableRecorder?.reset(), this.unreliableChangesNode = void 0, this._isSchema || this.refTarget[Bz]?.()
      }
      discard() {
        this._isSchema || this.refTarget[Bz]?.(), this.reset(), this.unreliableRecorder?.reset()
      }
      discardAll() {
        const zz = zz => {
          if (zz < 0) return;
          const tz = this.getValue(zz);
          tz && tz[Dz] && tz[Dz].discardAll()
        };
        this.forEach(zz), this.unreliableRecorder?.forEach(zz), this.discard()
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
      addParent(zz, tz) {
        ! function(zz, tz, sz) {
          if (zz.parentRef) {
            if (zz.parentRef[Dz] === tz[Dz]) return void(zz._parentIndex = sz);
            if (ss(zz, ((zz, sz) => zz[Dz] === tz[Dz]))) return void(zz._parentIndex = sz)
          }
          void 0 === zz.parentRef ? (zz.parentRef = tz, zz._parentIndex = sz) : (zz.extraParents = {
            ref: zz.parentRef,
            index: zz._parentIndex,
            next: zz.extraParents
          }, zz.parentRef = tz, zz._parentIndex = sz)
        }(this, zz, tz)
      }
      setParentIndex(zz, tz) {
        ! function(zz, tz, sz) {
          if (void 0 !== zz.extraParents)
            if (zz.parentRef[Dz] !== tz[Dz]) {
              for (let Fz = zz.extraParents; void 0 !== Fz; Fz = Fz.next)
                if (Fz.ref[Dz] === tz[Dz]) return void(Fz.index = sz)
            } else zz._parentIndex = sz;
          else zz._parentIndex = sz
        }(this, zz, tz)
      }
      removeParent() {
        return function(zz, tz) {
          if (zz.parentRef && zz.parentRef[Dz] === tz[Dz]) return zz.extraParents ? (zz.parentRef = zz.extraParents.ref, zz._parentIndex = zz.extraParents.index, zz.extraParents = zz.extraParents.next) : (zz.parentRef = void 0, zz._parentIndex = void 0), !0;
          let sz = zz.extraParents,
            Fz = null;
          for (; sz;) {
            if (sz.ref[Dz] === tz[Dz]) return Fz ? Fz.next = sz.next : zz.extraParents = sz.next, !0;
            Fz = sz, sz = sz.next
          }
          return void 0 === zz.parentRef
        }(this, arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.parent)
      }
      findParent(zz) {
        return function(zz, tz) {
          if (void 0 !== zz.parentRef && tz(zz.parentRef, zz._parentIndex)) return {
            ref: zz.parentRef,
            index: zz._parentIndex
          };
          for (let sz = zz.extraParents; void 0 !== sz; sz = sz.next)
            if (tz(sz.ref, sz.index)) return {
              ref: sz.ref,
              index: sz.index
            }
        }(this, zz)
      }
      hasParent(zz) {
        return ss(this, zz)
      }
      indexInParent(zz) {
        return function(zz, tz) {
          if (zz.parentRef && zz.parentRef[Dz] === tz[Dz]) return zz._parentIndex;
          for (let sz = zz.extraParents; void 0 !== sz; sz = sz.next)
            if (sz.ref[Dz] === tz[Dz]) return sz.index
        }(this, zz)
      }
      getAllParents() {
        return function(zz) {
          const tz = [];
          zz.parentRef && tz.push({
            ref: zz.parentRef,
            index: zz._parentIndex
          });
          let sz = zz.extraParents;
          for (; sz;) tz.push({
            ref: sz.ref,
            index: sz.index
          }), sz = sz.next;
          return tz
        }(this)
      }
    }
    class As {
      ref;
      root = void 0;
      parentRef = void 0;
      paused = !1;
      isNew = !1;
      flags = 0;
      constructor(zz) {
        this.ref = zz
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
      untracked(zz) {
        return zz()
      }
      markDirty() {}
      forEachChild(zz) {
        const tz = this.ref;
        if (tz[gz]) {
          if ("string" !== typeof tz[gz])
            for (const [sz, Fz] of tz.entries()) Fz && zz(Fz[Dz], tz._collectionIndexes?.[sz] ?? sz);
          return
        }
        const sz = tz.constructor,
          Fz = sz?.[Symbol.metadata];
        if (!Fz) return;
        const Wz = Fz[ez] ?? [];
        for (let Xz = 0; Xz < Wz.length; Xz++) {
          const sz = Wz[Xz],
            Oz = tz[Fz[sz].name];
          Oz && zz(Oz[Dz], sz)
        }
      }
      forEachChildWithCtx(zz, tz) {
        this.forEachChild(((sz, Fz) => tz(zz, sz, Fz)))
      }
      forEachLive() {}
      forEachLiveWithCtx() {}
      forEach() {}
    }

    function ys(zz) {
      let tz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : zz;
      var sz;
      Object.defineProperty(zz, Dz, {
        value: (sz = tz, new As(sz)),
        enumerable: !1,
        writable: !0
      })
    }

    function Ms(zz, tz, sz, Fz, Xz, Oz, vz) {
      void 0 !== vz ? vz(tz, Fz, Oz) : "string" === typeof sz ? tt[sz]?.(tz, Fz, Oz) : null != sz[Symbol.metadata] ? (tt.number(tz, Fz[oz], Oz), (Xz & Wz.ADD) === Wz.ADD && zz.tryEncodeTypeId(tz, sz, Fz.constructor, Oz)) : tt.number(tz, Fz[oz], Oz)
    }
    const ds = function(zz, tz, sz, Fz, Xz, Oz, oz, vz) {
        if (tz[Oz.offset++] = 255 & (Fz | Xz), Xz === Wz.DELETE) return;
        const Uz = sz.encDescriptor,
          Kz = sz.ref,
          uz = Kz[Yz][Fz] ?? Kz[Uz.names[Fz]];
        Ms(zz, tz, Uz.types[Fz], uz, Xz, Oz, Uz.encoders[Fz])
      },
      hs = function(zz, tz, sz, Fz, Xz, Oz) {
        if (tz[Oz.offset++] = 255 & Xz, tt.number(tz, Fz, Oz), Xz === Wz.DELETE) return;
        const oz = sz.ref;
        if ((Xz & Wz.ADD) === Wz.ADD) {
          const zz = oz.$indexes.get(Fz);
          tt.string(tz, zz, Oz)
        }
        Ms(zz, tz, oz[gz], oz[Nz](Fz), Xz, Oz)
      },
      Qs = function(zz, tz, sz, Fz, Xz, Oz) {
        if (tz[Oz.offset++] = 255 & Xz, tt.number(tz, Fz, Oz), Xz === Wz.DELETE) return;
        const oz = sz.ref;
        Ms(zz, tz, oz[gz], oz[Nz](Fz), Xz, Oz)
      },
      ks = function(zz, tz, sz, Fz, Xz, Oz) {
        const oz = sz.ref;
        (Xz & Wz.ADD) === Wz.ADD && "function" === typeof oz.set ? hs(zz, tz, sz, Fz, Xz, Oz) : Qs(zz, tz, sz, Fz, Xz, Oz)
      },
      is = function(zz, tz, sz, Fz, Xz, Oz, vz, Uz) {
        const Kz = sz.refTarget,
          uz = Kz[gz],
          bz = "string" !== typeof uz;
        let wz;
        if (Uz && sz.isFiltered && bz) {
          const zz = Kz.tmpItems[Fz];
          if (!zz) return;
          if (wz = zz[oz], Xz === Wz.DELETE) Xz = Wz.DELETE_BY_REFID;
          else if ((Xz & Wz.ADD) === Wz.ADD) Xz = Wz.ADD_BY_REFID;
          else if ((Xz & Wz.MOVE) === Wz.MOVE) return
        } else if (Xz === Wz.DELETE && bz) {
          const zz = Kz.tmpItems[Fz];
          if (!zz) return;
          wz = zz[oz], Xz = Wz.DELETE_BY_REFID
        } else wz = Fz;
        if (tz[Oz.offset++] = 255 & Xz, tt.number(tz, wz, Oz), Xz === Wz.DELETE || Xz === Wz.DELETE_BY_REFID) return;
        Ms(zz, tz, uz, Kz[Nz](Fz, vz), Xz, Oz)
      };

    function Ls(zz, tz, sz, Fz, Xz, Oz, vz) {
      const Uz = zz.resyncVisited;
      let Kz = Uz.get(zz.currentRefId);
      if (void 0 === Kz && Uz.set(zz.currentRefId, Kz = new Set), Kz.add(Fz), void 0 !== Xz && sz === Wz.ADD && Xz !== Oz) {
        const sz = Xz[oz];
        void 0 !== sz && (zz.root.removeRef(sz), vz?.push({
          ref: tz,
          refId: zz.currentRefId,
          op: Wz.DELETE,
          dynamicIndex: Fz,
          value: void 0,
          previousValue: Xz
        }))
      }
    }

    function ls(zz, tz, sz, Fz) {
      const Wz = tz[oz];
      if (void 0 === Wz || sz.has(Wz)) return;
      sz.add(Wz);
      const Xz = tz.constructor[Symbol.metadata],
        Oz = Xz?.[ez];
      if (void 0 === Oz) return;
      const vz = Xz[cz];
      for (let oz = 0; oz < Oz.length; oz++) {
        const Wz = Oz[oz];
        if (void 0 !== vz && vz.includes(Wz)) continue;
        const Uz = Xz[Wz],
          Kz = tz[Uz.name];
        Kz && (cF.is(Uz.type) ? ls(zz, Kz, sz, Fz) : ns(zz, Kz, sz, Fz))
      }
    }

    function ns(zz, tz, sz, Fz) {
      const Xz = tz[Hz] ?? tz,
        Oz = Xz[oz];
      if (void 0 === Oz || sz.has(Oz)) return;
      sz.add(Oz);
      const vz = zz.resyncVisited.get(Oz);
      if (void 0 === vz) return;
      const Uz = zz.root;
      Xz[wz](vz, ((zz, sz) => {
        Fz?.push({
          ref: tz,
          refId: Oz,
          op: Wz.DELETE,
          dynamicIndex: sz,
          value: void 0,
          previousValue: zz
        });
        const Xz = zz?.[oz];
        void 0 !== Xz && Uz.removeRef(Xz)
      }), (tz => {
        cF.isSchema(tz) && ls(zz, tz, sz, Fz)
      }))
    }
    const as = 1,
      qs = 2,
      Ss = 3,
      Vs = 4,
      Rs = 5;

    function ps(zz, tz, sz, Fz, Xz, Oz, vz, Uz, Kz) {
      const uz = zz.root;
      let Nz;
      if ((tz & Wz.DELETE) === Wz.DELETE) {
        const zz = Xz?.[oz];
        void 0 !== zz && uz.removeRef(zz), tz !== Wz.DELETE_AND_ADD && sz[bz](Fz), Nz = void 0
      }
      if (tz === Wz.DELETE);
      else if ("string" === typeof Oz) Nz = Pt[Oz](vz, Uz);
      else if (Mt(Oz)) Nz = function(zz, tz, sz) {
        return ht(zz, (0, Pt[zz.wire])(tz, sz))
      }(Oz.quantized, vz, Uz);
      else if (cF.is(Oz)) {
        const sz = Pt.number(vz, Uz);
        if (Nz = uz.refs.get(sz), (tz & Wz.ADD) === Wz.ADD) {
          const Fz = zz.getInstanceType(vz, Uz, Oz);
          Nz || (Nz = zz.createInstanceOfType(Fz)), uz.addRef(sz, Nz, Nz !== Xz || tz === Wz.DELETE_AND_ADD && Nz === Xz)
        }
      } else {
        const sz = (wz = Object.keys(Oz)[0], rt[wz]),
          Fz = Pt.number(vz, Uz);
        null !== zz.resyncVisited && function(zz, tz) {
          const sz = zz.resyncVisited;
          sz.has(tz) || sz.set(tz, new Set)
        }(zz, Fz);
        const bz = uz.refs.has(Fz) ? Xz || uz.refs.get(Fz) : sz.constructor.initializeForDecoder();
        if (Nz = bz.clone(!0), Nz[gz] = Object.values(Oz)[0], Xz) {
          let zz = Xz[oz];
          if (void 0 !== zz && Fz !== zz) {
            (tz & Wz.DELETE) !== Wz.DELETE && uz.removeRef(zz);
            const sz = Xz.entries();
            let Fz;
            for (;
              (Fz = sz.next()) && !Fz.done;) {
              const [tz, sz] = Fz.value;
              "object" === typeof sz && (zz = sz[oz]), Kz?.push({
                ref: Xz,
                refId: zz,
                op: Wz.DELETE,
                field: tz,
                value: void 0,
                previousValue: sz
              })
            }
          }
        }
        uz.addRef(Fz, Nz, bz !== Xz || tz === Wz.DELETE_AND_ADD && bz === Xz)
      }
      var wz;
      return Nz
    }
    const fs = function(zz, tz, sz, Fz, Wz) {
        const Xz = tz[sz.offset++],
          Oz = Fz.constructor[Symbol.metadata],
          oz = Xz >> 6 << 6,
          vz = Xz % (oz || 255),
          Uz = Oz[vz];
        if (void 0 === Uz) return console.warn("@colyseus/schema: field not defined at", {
          index: vz,
          ref: Fz.constructor.name,
          metadata: Oz
        }), -1;
        const Kz = !0 === Uz.deprecated,
          uz = Kz ? void 0 : Fz[Nz](vz),
          bz = ps(zz, oz, Fz, vz, uz, Uz.type, tz, sz, Wz);
        Kz || (null !== bz && void 0 !== bz && (Fz[Uz.name] = bz), uz !== bz && Wz?.push({
          ref: Fz,
          refId: zz.currentRefId,
          op: oz,
          field: Uz.name,
          value: bz,
          previousValue: uz
        }))
      },
      Es = function(zz, tz, sz, Fz, Xz) {
        const Oz = Fz[Hz] ?? Fz,
          oz = tz[sz.offset++];
        if (oz === Wz.CLEAR) return zz.removeChildRefs(Oz, Xz), void Oz.clear();
        const vz = Pt.number(tz, sz),
          Uz = Oz[gz],
          Kz = Oz.constructor.COLLECTION_KIND;
        let uz;
        (oz & Wz.ADD) === Wz.ADD ? Kz === as ? (uz = Pt.string(tz, sz), Oz.setIndex(vz, uz)) : uz = vz : uz = Oz.getIndex(vz);
        const bz = Oz[Nz](vz),
          wz = ps(zz, oz, Fz, vz, bz, Uz, tz, sz, Xz);
        if (null !== zz.resyncVisited && Ls(zz, Fz, oz, uz, bz, wz, Xz), null !== wz && void 0 !== wz) switch (Kz) {
          case as:
            Oz.$items.set(uz, wz);
            break;
          case qs:
            Oz.$setAt(vz, wz, null !== zz.resyncVisited && oz === Wz.ADD ? Wz.REPLACE : oz);
            break;
          case Ss:
          case Vs:
          case Rs:
            Oz.$items.has(vz) || (Oz.$items.set(vz, wz), "number" === typeof Oz.$refId && vz >= Oz.$refId && (Oz.$refId = vz + 1));
            break;
          default:
            console.warn(`@colyseus/schema: missing COLLECTION_KIND on ${Oz.constructor?.name} \u2014 item at index ${vz} was not stored.`)
        }
        bz !== wz && Xz?.push({
          ref: Fz,
          refId: zz.currentRefId,
          op: oz,
          dynamicIndex: uz,
          value: wz,
          previousValue: bz
        })
      },
      zF = function(zz, tz, sz, Fz, Xz) {
        const Oz = Fz[Hz] ?? Fz;
        let oz, vz = tz[sz.offset++];
        if (vz === Wz.CLEAR) return zz.removeChildRefs(Oz, Xz), void Oz.clear();
        if (vz === Wz.REVERSE) return void Oz.items.reverse();
        if (vz === Wz.DELETE_BY_REFID) {
          const vz = Pt.number(tz, sz),
            Uz = zz.root.refs.get(vz);
          if (void 0 === Uz) return;
          if (zz.root.removeRef(vz), oz = Oz.findIndex((zz => zz === Uz)), -1 === oz) return;
          return Oz[bz](oz), void Xz?.push({
            ref: Fz,
            refId: zz.currentRefId,
            op: Wz.DELETE,
            dynamicIndex: oz,
            value: void 0,
            previousValue: Uz
          })
        }
        if (vz === Wz.ADD_BY_REFID) {
          const Fz = Pt.number(tz, sz),
            Wz = zz.root.refs.get(Fz);
          Wz && (oz = Oz.findIndex((zz => zz === Wz))), -1 !== oz && void 0 !== oz || (oz = Oz.length)
        } else oz = Pt.number(tz, sz);
        const Uz = Oz[gz];
        let Kz = oz;
        const uz = Oz.items[oz],
          Nz = ps(zz, vz, Fz, oz, uz, Uz, tz, sz, Xz);
        null !== zz.resyncVisited && Ls(zz, Fz, vz, oz, uz, Nz, Xz), null !== Nz && void 0 !== Nz && Nz !== uz && Oz.$setAt(oz, Nz, null !== zz.resyncVisited && vz === Wz.ADD ? Wz.REPLACE : vz), uz !== Nz && Xz?.push({
          ref: Fz,
          refId: zz.currentRefId,
          op: vz,
          dynamicIndex: Kz,
          value: Nz,
          previousValue: uz
        })
      };
    class tF extends Error {}

    function sF(zz, tz, sz, Fz) {
      if (!(zz instanceof tz)) throw new tF(`a '${tz.name}' was expected, but '${zz&&zz.constructor.name}' was provided in ${sz.constructor.name}#${Fz}`)
    }
    const FF = (zz, tz) => {
        const sz = zz.toString(),
          Fz = tz.toString();
        return sz < Fz ? -1 : sz > Fz ? 1 : 0
      },
      WF = {
        get: (zz, tz) => "symbol" === typeof tz || isNaN(tz) ? Reflect.get(zz, tz) : zz.items[tz],
        set: (zz, tz, sz) => {
          if ("symbol" !== typeof tz && !isNaN(tz)) {
            if (void 0 === sz || null === sz) zz.$deleteAt(tz);
            else {
              let Fz;
              if (sz[Dz]) {
                sF(sz, zz[gz], zz, tz);
                const Xz = zz.items[tz];
                zz.isMovingItems ? (Fz = zz.$wireIndex(Number(tz)), void 0 !== Xz ? sz[Dz].isNew ? zz[Dz].indexedOperation(Fz, Wz.MOVE_AND_ADD) : (zz[Dz].getChange(Fz) & Wz.DELETE) === Wz.DELETE ? zz[Dz].indexedOperation(Fz, Wz.DELETE_AND_MOVE) : zz[Dz].indexedOperation(Fz, Wz.MOVE) : sz[Dz].isNew && zz[Dz].indexedOperation(Fz, Wz.ADD), sz[Dz].setParent(zz, zz[Dz].root, Fz)) : Fz = zz.$changeAt(Number(tz), sz), void 0 !== Xz && Xz[Dz].root?.remove(Xz[Dz])
              } else Fz = zz.$changeAt(Number(tz), sz);
              zz.items[tz] = sz, void 0 !== Fz && (zz.tmpItems[Fz] = sz)
            }
            return !0
          }
          return Reflect.set(zz, tz, sz)
        },
        deleteProperty: (zz, tz) => ("number" === typeof tz ? zz.$deleteAt(tz) : delete zz[tz], !0),
        has: (zz, tz) => "symbol" === typeof tz || isNaN(Number(tz)) ? Reflect.has(zz, tz) : Reflect.has(zz.items, tz)
      };
    class XF {
      [Dz];
      [oz];
      [Hz];
      [gz];
      items = [];
      tmpItems = [];
      deletedIndexes = [];
      isMovingItems = !1;
      _needsCompaction = !1;
      static[Uz] = is;
      static[Kz] = zF;
      static COLLECTION_KIND = qs;
      static[uz](zz, tz, sz) {
        if (!sz) return !0;
        const Fz = zz[Hz] ?? zz;
        return "string" === typeof Fz[gz] || sz.isChangeTreeVisible(Fz.tmpItems[tz]?.[Dz])
      }
      static is(zz) {
        return Array.isArray(zz) || void 0 !== zz.array
      }
      static from(zz) {
        return new XF(...Array.from(zz))
      }
      constructor() {
        this[gz] = void 0, this[Hz] = this;
        const zz = new Proxy(this, WF);
        return Object.defineProperty(this, Dz, {
          value: new cs(zz, this),
          enumerable: !1,
          writable: !0
        }), arguments.length > 0 && this.push(...arguments), zz
      }
      static initializeForDecoder() {
        const zz = Object.create(XF.prototype);
        zz.items = [], zz.isMovingItems = !1, zz._needsCompaction = !1, zz[gz] = void 0, zz[Hz] = zz;
        const tz = new Proxy(zz, WF);
        return ys(zz, tz), tz
      }
      set length(zz) {
        0 === zz ? this.clear() : zz < this.items.length ? this.splice(zz, this.length - zz) : console.warn("ArraySchema: can't set .length to a higher value than its length.")
      }
      get length() {
        return this.items.length
      }
      pauseTracking() {
        this[Dz].pause()
      }
      resumeTracking() {
        this[Dz].resume()
      }
      untracked(zz) {
        return this[Dz].untracked(zz)
      }
      get isTrackingPaused() {
        return this[Dz].paused
      }
      push() {
        const zz = this[Hz],
          tz = zz.items,
          sz = zz.tmpItems,
          Fz = zz[Dz],
          Xz = zz[gz];
        let Oz = sz.length;
        for (let oz = 0, vz = arguments.length; oz < vz; oz++, Oz++) {
          const vz = oz < 0 || arguments.length <= oz ? void 0 : arguments[oz];
          if (void 0 === vz || null === vz) return;
          "object" === typeof vz && Xz && sF(vz, Xz, zz, oz), Fz.indexedOperation(Oz, Wz.ADD), tz.push(vz), sz.push(vz), vz[Dz]?.setParent(this, Fz.root, Oz)
        }
        return Oz
      }
      pop() {
        const zz = this[Hz],
          tz = zz.tmpItems,
          sz = zz.deletedIndexes;
        let Fz = -1;
        for (let Xz = tz.length - 1; Xz >= 0; Xz--)
          if (!0 !== sz[Xz]) {
            Fz = Xz;
            break
          } if (Fz < 0) return;
        const Wz = zz.$isUnsentAdd(Fz);
        return zz[Dz].delete(Fz), Wz ? zz.$cancelAdd(Fz) : sz[Fz] = !0, zz.items.pop()
      }
      at(zz) {
        return zz < 0 && (zz += this.length), this.items[zz]
      }
      $wireIndex(zz) {
        const tz = this.deletedIndexes;
        if (0 === tz.length) return zz;
        const sz = this.tmpItems;
        let Fz = 0;
        for (let Wz = 0; Wz < sz.length; Wz++)
          if (!0 !== tz[Wz]) {
            if (Fz === zz) return Wz;
            Fz++
          } return sz.length + (zz - Fz)
      }
      $isUnsentAdd(zz) {
        const tz = this[Dz];
        return 0 === (576 & tz.flags) && !tz.paused && "string" !== typeof this[gz] && tz.operationAt(zz) === Wz.ADD
      }
      $cancelAdd(zz) {
        let tz = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        const sz = this[Dz],
          Fz = this.tmpItems[zz];
        this.tmpItems.splice(zz, 1), this.deletedIndexes.length > 0 && this.deletedIndexes.splice(zz, 1), sz.removeAt(zz, 1);
        const Wz = Fz?.[Dz];
        void 0 !== Wz && void 0 === Wz.root && Wz.removeParent(this), tz && this.$reindexChildren(zz)
      }
      $reindexChildren(zz, tz) {
        if (!this[Dz].hasFilteredFields) return;
        if ("string" === typeof this[gz]) return;
        const sz = this.tmpItems,
          Fz = sz.length;
        if (void 0 !== tz)
          for (; zz < Fz && sz[zz] === tz[zz];) zz++;
        for (let Wz = zz; Wz < Fz; Wz++) sz[Wz]?.[Dz]?.setParentIndex(this, Wz)
      }
      $changeAt(zz, tz) {
        if (void 0 === tz || null === tz) return void console.error("ArraySchema items cannot be null nor undefined; Use `splice(index, 1)` instead.");
        if (this.items[zz] === tz) return;
        const sz = void 0 !== this.items[zz] ? "object" === typeof tz ? Wz.DELETE_AND_ADD : Wz.REPLACE : Wz.ADD,
          Fz = this.$wireIndex(zz),
          Xz = this[Dz];
        return Xz.change(Fz, sz), tz[Dz]?.setParent(this, Xz.root, Fz), Fz
      }
      $deleteAt(zz, tz) {
        this[Dz].delete(this.$wireIndex(zz), tz)
      }
      $setAt(zz, tz, sz) {
        sz === Wz.ADD && void 0 !== this.items[zz] ? this.items.splice(zz, 0, tz) : sz === Wz.DELETE_AND_MOVE ? (this.items.splice(zz, 1), this.items[zz] = tz) : (zz > this.items.length && (this._needsCompaction = !0), this.items[zz] = tz)
      }
      clear() {
        const zz = this[Hz];
        if (0 === zz.items.length) return;
        const tz = zz[Dz];
        tz.forEachChild(((zz, sz) => {
          tz.root?.remove(zz)
        })), tz.discard(), tz.operation(Wz.CLEAR), zz.items.length = 0, zz.tmpItems.length = 0
      } [Pz]() {
        const zz = this[Hz] ?? this,
          tz = zz[Dz];
        if (tz.isStreamCollection) throw new Error("@colyseus/schema: cannot reset a streamed ArraySchema (pooling not supported).");
        const sz = zz.items;
        for (let Fz = 0; Fz < sz.length; Fz++) sz[Fz]?.[Pz]?.();
        zz.items.length = 0, zz.tmpItems.length = 0, zz.deletedIndexes.length = 0, tz.recycle(), zz[oz] = void 0
      }
      concat() {
        return new XF(...this.items.concat(...arguments))
      }
      join(zz) {
        return this.items.join(zz)
      }
      reverse() {
        const zz = this[Hz],
          tz = zz[Dz];
        if (tz.has() || zz.deletedIndexes.length > 0) {
          const tz = zz.items.slice().reverse();
          return this.clear(), this.push(...tz), this
        }
        return tz.operation(Wz.REVERSE), zz.items.reverse(), zz.tmpItems.reverse(), zz.$reindexChildren(0), this
      }
      shift() {
        const zz = this[Hz],
          tz = zz.items;
        if (0 === tz.length) return;
        const sz = zz[Dz],
          Fz = zz.deletedIndexes;
        let Xz = 0;
        for (; !0 === Fz[Xz];) Xz++;
        const Oz = zz.$isUnsentAdd(Xz);
        return sz.delete(Xz, Wz.DELETE), Oz ? zz.$cancelAdd(Xz) : Fz[Xz] = !0, tz.shift()
      }
      slice(zz, tz) {
        const sz = new XF;
        return sz.push(...this.items.slice(zz, tz)), sz
      }
      sort() {
        let zz = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : FF;
        const tz = this[Hz];
        tz.isMovingItems = !0;
        const sz = tz[Dz];
        return tz.items.sort(zz).forEach(((zz, tz) => sz.change(tz, Wz.REPLACE))), tz.tmpItems.sort(zz), tz.$reindexChildren(0), tz.isMovingItems = !1, this
      }
      splice(zz, tz) {
        const sz = this[Hz],
          Fz = sz[Dz],
          Xz = sz.items,
          Oz = sz.tmpItems,
          oz = sz.deletedIndexes,
          vz = Xz.length,
          Uz = Oz.length;
        for (var Kz = arguments.length, uz = new Array(Kz > 2 ? Kz - 2 : 0), Nz = 2; Nz < Kz; Nz++) uz[Nz - 2] = arguments[Nz];
        const bz = uz.length,
          wz = [];
        for (let Wz = 0; Wz < Uz; Wz++) !0 !== oz[Wz] && wz.push(Wz);
        let gz;
        if (vz > zz) {
          void 0 === tz && (tz = vz - zz);
          for (let Xz = zz; Xz < zz + tz; Xz++) {
            const zz = wz[Xz],
              tz = sz.$isUnsentAdd(zz);
            Fz.delete(zz, Wz.DELETE), tz ? (gz ??= []).push(zz) : oz[zz] = !0
          }
        } else tz = 0;
        if (bz > 0) {
          const Xz = wz[zz] ?? vz,
            Uz = Math.min(bz, tz);
          for (let zz = 0; zz < Uz; zz++) {
            const tz = Xz + zz;
            let sz;
            const vz = void 0 !== gz ? gz.indexOf(tz) : -1; - 1 !== vz ? (gz.splice(vz, 1), sz = Wz.ADD) : sz = oz[tz] ? Wz.DELETE_AND_ADD : Wz.ADD, Fz.indexedOperation(tz, sz), Oz[tz] = uz[zz], oz[tz] = !1, uz[zz][Dz]?.setParent(this, Fz.root, tz)
          }
          const Kz = bz - Uz;
          if (Kz > 0) {
            const zz = Xz + Uz;
            Fz.insertAt(zz, Kz);
            for (let tz = 0; tz < Kz; tz++) uz[Uz + tz][Dz]?.setParent(this, Fz.root, zz + tz);
            oz.length > 0 && oz.splice(zz, 0, ...new Array(Kz).fill(!1)), Oz.splice(zz, 0, ...uz.slice(Uz)), sz.$reindexChildren(zz + Kz)
          }
        }
        if (void 0 !== gz && gz.length > 0) {
          for (let zz = gz.length - 1; zz >= 0; zz--) sz.$cancelAdd(gz[zz], !1);
          sz.$reindexChildren(gz[0])
        }
        return Fz.root?.enqueueChangeTree(Fz), Xz.splice(zz, tz, ...uz)
      }
      unshift() {
        const zz = this[Hz],
          tz = zz[Dz];
        tz.unshift(arguments.length);
        for (let Fz = 0; Fz < arguments.length; Fz++)(Fz < 0 || arguments.length <= Fz ? void 0 : arguments[Fz])?.[Dz]?.setParent(this, tz.root, Fz);
        const sz = zz.deletedIndexes;
        return sz.length > 0 && sz.unshift(...new Array(arguments.length).fill(!1)), zz.tmpItems.unshift(...arguments), zz.$reindexChildren(arguments.length), zz.items.unshift(...arguments)
      }
      indexOf(zz, tz) {
        return this.items.indexOf(zz, tz)
      }
      lastIndexOf(zz) {
        let tz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.length - 1;
        return this.items.lastIndexOf(zz, tz)
      }
      every(zz, tz) {
        return this.items.every(zz, tz)
      }
      some(zz, tz) {
        return this.items.some(zz, tz)
      }
      forEach(zz, tz) {
        return this.items.forEach(zz, tz)
      }
      map(zz, tz) {
        return this.items.map(zz, tz)
      }
      filter(zz, tz) {
        return this.items.filter(zz, tz)
      }
      reduce(zz, tz) {
        return this.items.reduce.apply(this.items, arguments)
      }
      reduceRight(zz, tz) {
        return this.items.reduceRight.apply(this.items, arguments)
      }
      find(zz, tz) {
        return this.items.find(zz, tz)
      }
      findIndex(zz, tz) {
        return this.items.findIndex(zz, tz)
      }
      fill(zz, tz, sz) {
        throw new Error("ArraySchema#fill() not implemented")
      }
      copyWithin(zz, tz, sz) {
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
        return XF
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
      includes(zz, tz) {
        return this.items.includes(zz, tz)
      }
      flatMap(zz, tz) {
        throw new Error("ArraySchema#flatMap() is not supported.")
      }
      flat(zz) {
        throw new Error("ArraySchema#flat() is not supported.")
      }
      findLast() {
        return this.items.findLast.apply(this.items, arguments)
      }
      findLastIndex() {
        for (var zz = arguments.length, tz = new Array(zz), sz = 0; sz < zz; sz++) tz[sz] = arguments[sz];
        return this.items.findLastIndex.apply(this.items, arguments)
      }
      with(zz, tz) {
        const sz = this.items.slice();
        return zz < 0 && (zz += this.length), sz[zz] = tz, new XF(...sz)
      }
      toReversed() {
        return this.items.slice().reverse()
      }
      toSorted(zz) {
        return this.items.slice().sort(zz)
      }
      toSpliced(zz, tz) {
        for (var sz = arguments.length, Fz = new Array(sz > 2 ? sz - 2 : 0), Wz = 2; Wz < sz; Wz++) Fz[Wz - 2] = arguments[Wz];
        const Xz = this.items.slice();
        return Xz.splice.apply(Xz, arguments), Xz
      }
      shuffle() {
        return this.move((zz => {
          let tz = this.items.length;
          for (; 0 != tz;) {
            let zz = Math.floor(Math.random() * tz);
            tz--, [this[tz], this[zz]] = [this[zz], this[tz]]
          }
        }))
      }
      move(zz) {
        return this.isMovingItems = !0, zz(this), this.isMovingItems = !1, this
      } [Nz](zz) {
        let tz = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        const sz = this[Hz] ?? this;
        return tz || sz.deletedIndexes[zz] ? sz.items[zz] : sz.tmpItems[zz] || sz.items[zz]
      } [bz](zz) {
        const tz = this[Hz] ?? this;
        tz.items[zz] = void 0, tz._needsCompaction = !0
      } [Bz]() {
        const zz = this.tmpItems;
        this.tmpItems = this.items.slice(), this.deletedIndexes.length > 0 && (this.$reindexChildren(0, zz), this.deletedIndexes.length = 0)
      } [rz]() {
        const zz = this[Hz] ?? this;
        zz._needsCompaction && (zz._needsCompaction = !1, zz.items = zz.items.filter((zz => void 0 !== zz)))
      } [wz](zz, tz, sz) {
        const Fz = this[Hz] ?? this,
          Wz = Fz.items;
        let Xz = !1;
        for (let Oz = 0; Oz < Wz.length; Oz++) {
          const oz = Wz[Oz];
          zz.has(Oz) ? sz(oz) : (Xz = !0, tz(oz, Oz), Fz[bz](Oz))
        }
        Xz && Fz[rz]()
      }
      toArray() {
        return this.items.slice(0)
      }
      toJSON() {
        return this.toArray().map((zz => "function" === typeof zz.toJSON ? zz.toJSON() : zz))
      }
      clone(zz) {
        let tz;
        return zz ? (tz = new XF, tz.push(...this.items)) : tz = new XF(...this.map((zz => zz[Dz] ? zz.clone() : zz))), tz
      }
    }
    xt("array", {
      constructor: XF
    });
    class OF {
      keyByIndex = new Map;
      indexByKey = Object.create(null);
      nextIndex = 0;
      snapshots;
      indexOf(zz) {
        const tz = this.indexByKey[zz];
        return void 0 === tz ? void 0 : tz
      }
      assign(zz) {
        const tz = this.nextIndex++;
        return this.indexByKey[zz] = tz, this.keyByIndex.set(tz, zz), tz
      }
      snapshot(zz, tz) {
        (this.snapshots ??= new Map).set(zz, tz)
      }
      forgetSnapshot(zz) {
        this.snapshots?.delete(zz)
      }
      snapshotAt(zz) {
        return this.snapshots?.get(zz)
      }
      setIndex(zz, tz) {
        this.keyByIndex.set(zz, tz), this.indexByKey[tz] = zz
      }
      keyOf(zz) {
        return this.keyByIndex.get(zz)
      }
      cleanupAfterEncode() {
        if (void 0 !== this.snapshots) {
          for (const [zz] of this.snapshots) {
            const tz = this.keyByIndex.get(zz);
            void 0 !== tz && (delete this.indexByKey[tz], this.keyByIndex.delete(zz))
          }
          this.snapshots.clear()
        }
      }
      reset() {
        this.indexByKey = Object.create(null), this.keyByIndex.clear(), this.snapshots?.clear(), this.nextIndex = 0
      }
    }
    class oF {
      [Dz];
      [oz];
      childType;
      [gz];
      $items = new Map;
      journal = new OF;
      _stream;
      get maxPerTick() {
        return this._stream?.maxPerTick ?? 32
      }
      set maxPerTick(zz) {
        (this._stream ??= It()).maxPerTick = zz
      }
      get priority() {
        return this._stream?.priority
      }
      set priority(zz) {
        (this._stream ??= It()).priority = zz
      }
      get $indexes() {
        return this.journal.keyByIndex
      }
      get _collectionIndexes() {
        return this.journal.indexByKey
      }
      static[Uz] = hs;
      static[Kz] = Es;
      static COLLECTION_KIND = as;
      static[uz](zz, tz, sz) {
        if (!sz || "string" === typeof zz[gz]) return !0;
        const Fz = zz[Nz](tz) ?? zz.journal.snapshotAt(tz);
        return sz.isChangeTreeVisible(Fz[Dz])
      }
      static is(zz) {
        return void 0 !== zz.map
      }
      constructor(zz) {
        if (Object.defineProperty(this, Dz, {
            value: new cs(this),
            enumerable: !1,
            writable: !0
          }), this[gz] = void 0, zz)
          if (zz instanceof Map || zz instanceof oF) zz.forEach(((zz, tz) => this.set(tz, zz)));
          else
            for (const tz in zz) this.set(tz, zz[tz])
      }
      static initializeForDecoder() {
        const zz = Object.create(oF.prototype);
        return zz.$items = new Map, zz.journal = new OF, zz[gz] = void 0, ys(zz), zz
      } [Symbol.iterator]() {
        return this.$items[Symbol.iterator]()
      }
      get[Symbol.toStringTag]() {
        return this.$items[Symbol.toStringTag]
      }
      static get[Symbol.species]() {
        return oF
      }
      set(zz, tz) {
        if (void 0 === tz || null === tz) throw new Error(`MapSchema#set('${zz}', ${tz}): trying to set ${tz} value on '${zz}'.`);
        "object" === typeof tz && this[gz] && sF(tz, this[gz], this, zz), zz = zz.toString();
        const sz = this[Dz],
          Fz = void 0 !== tz[Dz],
          Xz = this.journal;
        let Oz, oz = Xz.indexOf(zz);
        if (void 0 !== oz) {
          Oz = Wz.REPLACE;
          const sz = this.$items.get(zz);
          if (sz === tz) return;
          Fz && (Oz = Wz.DELETE_AND_ADD, void 0 !== sz && sz[Dz].root?.remove(sz[Dz])), void 0 !== Xz.snapshotAt(oz) && Xz.forgetSnapshot(oz)
        } else oz = Xz.assign(zz), Oz = Wz.ADD;
        return this.$items.set(zz, tz), Oz === Wz.ADD && sz.isStreamCollection ? void 0 !== sz.root && et(this, sz.root, oz) : sz.change(oz, Oz), Fz && tz[Dz].setParent(this, sz.root, oz), this
      }
      get(zz) {
        return this.$items.get(zz)
      }
      getOrInsert(zz, tz) {
        return this.$items.has(zz) ? this.$items.get(zz) : (this.set(zz, tz), tz)
      }
      getOrInsertComputed(zz, tz) {
        if (this.$items.has(zz)) return this.$items.get(zz);
        const sz = tz(zz);
        return this.set(zz, sz), sz
      }
      delete(zz) {
        if (!this.$items.has(zz)) return !1;
        const tz = this.journal.indexOf(zz),
          sz = this.$items.get(zz),
          Fz = this[Dz];
        if (Fz.isStreamCollection) {
          const Wz = Fz.root;
          let Xz = !1;
          return void 0 !== Wz && (Xz = Zt(this, Wz, this[oz], tz)), void 0 !== sz?.[Dz] && Wz?.remove(sz[Dz]), this.$items.delete(zz), Xz || this.journal.snapshot(tz, sz), !0
        }
        return this.journal.snapshot(tz, sz), Fz.delete(tz), this.$items.delete(zz)
      }
      clear() {
        const zz = this[Dz];
        zz.discard(), zz.forEachChild(((tz, sz) => {
          zz.root?.remove(tz)
        })), this.journal.reset(), this.$items.clear(), zz.operation(Wz.CLEAR)
      } [Pz]() {
        const zz = this[Dz];
        if (zz.isStreamCollection) throw new Error("@colyseus/schema: cannot reset a streamed MapSchema (pooling not supported).");
        this.$items.forEach((zz => zz?.[Pz]?.())), this.$items.clear(), this.journal.reset(), zz.recycle(), this[oz] = void 0
      }
      has(zz) {
        return this.$items.has(zz)
      }
      forEach(zz) {
        this.$items.forEach(zz)
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
        this[Dz].pause()
      }
      resumeTracking() {
        this[Dz].resume()
      }
      untracked(zz) {
        return this[Dz].untracked(zz)
      }
      get isTrackingPaused() {
        return this[Dz].paused
      }
      setIndex(zz, tz) {
        this.journal.setIndex(zz, tz)
      }
      getIndex(zz) {
        return this.journal.keyOf(zz)
      } [Nz](zz) {
        const tz = this.journal.keyOf(zz);
        return void 0 !== tz ? this.$items.get(tz) : void 0
      } [bz](zz) {
        const tz = this.journal.keyOf(zz);
        void 0 !== tz && (this.$items.delete(tz), this.journal.keyByIndex.delete(zz))
      } [wz](zz, tz, sz) {
        let Fz = null;
        if (this.$items.forEach(((Wz, Xz) => {
            zz.has(Xz) ? sz(Wz) : ((Fz ??= new Set).add(Xz), tz(Wz, Xz))
          })), null !== Fz) {
          Fz.forEach((zz => {
            this.$items.delete(zz), delete this.journal.indexByKey[zz]
          }));
          const zz = [];
          this.journal.keyByIndex.forEach(((tz, sz) => {
            Fz.has(tz) && zz.push(sz)
          }));
          for (let tz = 0; tz < zz.length; tz++) this.journal.keyByIndex.delete(zz[tz])
        }
      } [Bz]() {
        this.journal.cleanupAfterEncode()
      }
      _dropView(zz) {
        jt(this, zz)
      }
      _unregister() {}
      toJSON() {
        return Object.fromEntries(Array.from(this, (zz => {
          let [tz, sz] = zz;
          return [tz, "function" === typeof sz.toJSON ? sz.toJSON() : sz]
        })))
      }
      clone(zz) {
        let tz;
        return zz ? tz = Object.assign(new oF, this) : (tz = new oF, this.forEach(((zz, sz) => {
          zz[Dz] ? tz.set(sz, zz.clone()) : tz.set(sz, zz)
        }))), tz
      }
    }
    xt("map", {
      constructor: oF
    });
    class vF {
      [Dz];
      [oz];
      [gz];
      $items = new Map;
      deletedItems = {};
      $refId = 0;
      _stream;
      get maxPerTick() {
        return this._stream?.maxPerTick ?? 32
      }
      set maxPerTick(zz) {
        (this._stream ??= It()).maxPerTick = zz
      }
      get priority() {
        return this._stream?.priority
      }
      set priority(zz) {
        (this._stream ??= It()).priority = zz
      }
      static[Uz] = Qs;
      static[Kz] = Es;
      static COLLECTION_KIND = Vs;
      static[uz](zz, tz, sz) {
        return !sz || "string" === typeof zz[gz] || sz.isChangeTreeVisible((zz[Nz](tz) ?? zz.deletedItems[tz])[Dz])
      }
      static is(zz) {
        return void 0 !== zz.collection
      }
      constructor(zz) {
        Object.defineProperty(this, Dz, {
          value: new cs(this),
          enumerable: !1,
          writable: !0
        }), this[gz] = void 0, zz && zz.forEach((zz => this.add(zz)))
      }
      static initializeForDecoder() {
        const zz = Object.create(vF.prototype);
        return zz.$items = new Map, zz.deletedItems = {}, zz.$refId = 0, zz[gz] = void 0, ys(zz), zz
      }
      add(zz) {
        const tz = this.$refId++,
          sz = this[Dz];
        return this.$items.set(tz, zz), sz.isStreamCollection ? void 0 !== sz.root && et(this, sz.root, tz) : sz.change(tz), void 0 !== zz[Dz] && zz[Dz].setParent(this, sz.root, tz), tz
      }
      at(zz) {
        const tz = Array.from(this.$items.keys())[zz];
        return this.$items.get(tz)
      }
      entries() {
        return this.$items.entries()
      }
      delete(zz) {
        const tz = this.$items.entries();
        let sz, Fz;
        for (;
          (Fz = tz.next()) && !Fz.done;)
          if (zz === Fz.value[1]) {
            sz = Fz.value[0];
            break
          } if (void 0 === sz) return !1;
        const Wz = this[Dz];
        if (Wz.isStreamCollection) {
          const zz = Wz.root,
            tz = this.$items.get(sz);
          return void 0 !== zz && Zt(this, zz, this[oz], sz), void 0 !== tz?.[Dz] && zz?.remove(tz[Dz]), this.deletedItems[sz] = tz, this.$items.delete(sz)
        }
        return this.deletedItems[sz] = Wz.delete(sz), this.$items.delete(sz)
      }
      clear() {
        const zz = this[Dz];
        zz.discard(), zz.forEachChild(((tz, sz) => {
          zz.root?.remove(tz)
        })), this.$items.clear(), zz.operation(Wz.CLEAR)
      } [Pz]() {
        const zz = this[Dz];
        if (zz.isStreamCollection) throw new Error("@colyseus/schema: cannot reset a streamed CollectionSchema (pooling not supported).");
        this.$items.forEach((zz => zz?.[Pz]?.())), this.$items.clear(), this.deletedItems = {}, this.$refId = 0, zz.recycle(), this[oz] = void 0
      }
      has(zz) {
        return Array.from(this.$items.values()).some((tz => tz === zz))
      }
      forEach(zz) {
        this.$items.forEach(((tz, sz, Fz) => zz(tz, sz, this)))
      }
      values() {
        return this.$items.values()
      }
      get size() {
        return this.$items.size
      }
      pauseTracking() {
        this[Dz].pause()
      }
      resumeTracking() {
        this[Dz].resume()
      }
      untracked(zz) {
        return this[Dz].untracked(zz)
      }
      get isTrackingPaused() {
        return this[Dz].paused
      } [Symbol.iterator]() {
        return this.$items.values()
      }
      setIndex(zz, tz) {}
      getIndex(zz) {
        return zz
      } [Nz](zz) {
        return this.$items.get(zz)
      } [bz](zz) {
        this.$items.delete(zz)
      } [wz](zz, tz, sz) {
        let Fz = null;
        if (this.$items.forEach(((Wz, Xz) => {
            zz.has(Xz) ? sz(Wz) : ((Fz ??= []).push(Xz), tz(Wz, Xz))
          })), null !== Fz)
          for (let Wz = 0; Wz < Fz.length; Wz++) this[bz](Fz[Wz])
      } [Bz]() {
        for (const zz in this.deletedItems) delete this.deletedItems[zz]
      }
      _dropView(zz) {
        jt(this, zz)
      }
      _unregister() {}
      toArray() {
        return Array.from(this.$items.values())
      }
      toJSON() {
        const zz = [];
        return this.forEach(((tz, sz) => {
          zz.push("function" === typeof tz.toJSON ? tz.toJSON() : tz)
        })), zz
      }
      clone(zz) {
        let tz;
        return zz ? tz = Object.assign(new vF, this) : (tz = new vF, this.forEach((zz => {
          zz[Dz] ? tz.add(zz.clone()) : tz.add(zz)
        }))), tz
      }
    }
    xt("collection", {
      constructor: vF
    });
    class UF {
      [Dz];
      [oz];
      [gz];
      $items = new Map;
      deletedItems = {};
      $refId = 0;
      _stream;
      get maxPerTick() {
        return this._stream?.maxPerTick ?? 32
      }
      set maxPerTick(zz) {
        (this._stream ??= It()).maxPerTick = zz
      }
      get priority() {
        return this._stream?.priority
      }
      set priority(zz) {
        (this._stream ??= It()).priority = zz
      }
      static[Uz] = Qs;
      static[Kz] = Es;
      static COLLECTION_KIND = Ss;
      static[uz](zz, tz, sz) {
        return !sz || "string" === typeof zz[gz] || sz.isVisible((zz[Nz](tz) ?? zz.deletedItems[tz])[Dz])
      }
      static is(zz) {
        return void 0 !== zz.set
      }
      constructor(zz) {
        Object.defineProperty(this, Dz, {
          value: new cs(this),
          enumerable: !1,
          writable: !0
        }), this[gz] = void 0, zz && zz.forEach((zz => this.add(zz)))
      }
      static initializeForDecoder() {
        const zz = Object.create(UF.prototype);
        return zz.$items = new Map, zz.deletedItems = {}, zz.$refId = 0, zz[gz] = void 0, ys(zz), zz
      }
      add(zz) {
        if (this.has(zz)) return !1;
        const tz = this.$refId++,
          sz = this[Dz];
        return this.$items.set(tz, zz), sz.isStreamCollection ? void 0 !== sz.root && et(this, sz.root, tz) : sz.change(tz, Wz.ADD), void 0 !== zz[Dz] && zz[Dz].setParent(this, sz.root, tz), tz
      }
      entries() {
        return this.$items.entries()
      }
      delete(zz) {
        const tz = this.$items.entries();
        let sz, Fz;
        for (;
          (Fz = tz.next()) && !Fz.done;)
          if (zz === Fz.value[1]) {
            sz = Fz.value[0];
            break
          } if (void 0 === sz) return !1;
        const Wz = this[Dz];
        if (Wz.isStreamCollection) {
          const zz = Wz.root,
            tz = this.$items.get(sz);
          return void 0 !== zz && Zt(this, zz, this[oz], sz), void 0 !== tz?.[Dz] && zz?.remove(tz[Dz]), this.deletedItems[sz] = tz, this.$items.delete(sz)
        }
        return this.deletedItems[sz] = Wz.delete(sz), this.$items.delete(sz)
      }
      clear() {
        const zz = this[Dz];
        zz.discard(), this.$items.clear(), zz.operation(Wz.CLEAR)
      } [Pz]() {
        const zz = this[Dz];
        if (zz.isStreamCollection) throw new Error("@colyseus/schema: cannot reset a streamed SetSchema (pooling not supported).");
        this.$items.forEach((zz => zz?.[Pz]?.())), this.$items.clear(), this.deletedItems = {}, this.$refId = 0, zz.recycle(), this[oz] = void 0
      }
      has(zz) {
        const tz = this.$items.values();
        let sz, Fz = !1;
        for (;
          (sz = tz.next()) && !sz.done;)
          if (zz === sz.value) {
            Fz = !0;
            break
          } return Fz
      }
      forEach(zz) {
        this.$items.forEach(((tz, sz, Fz) => zz(tz, sz, this)))
      }
      values() {
        return this.$items.values()
      }
      get size() {
        return this.$items.size
      }
      pauseTracking() {
        this[Dz].pause()
      }
      resumeTracking() {
        this[Dz].resume()
      }
      untracked(zz) {
        return this[Dz].untracked(zz)
      }
      get isTrackingPaused() {
        return this[Dz].paused
      } [Symbol.iterator]() {
        return this.$items.values()
      }
      setIndex(zz, tz) {}
      getIndex(zz) {
        return zz
      } [Nz](zz) {
        return this.$items.get(zz)
      } [bz](zz) {
        this.$items.delete(zz)
      } [wz](zz, tz, sz) {
        let Fz = null;
        if (this.$items.forEach(((Wz, Xz) => {
            zz.has(Xz) ? sz(Wz) : ((Fz ??= []).push(Xz), tz(Wz, Xz))
          })), null !== Fz)
          for (let Wz = 0; Wz < Fz.length; Wz++) this[bz](Fz[Wz])
      } [Bz]() {
        for (const zz in this.deletedItems) delete this.deletedItems[zz]
      }
      _dropView(zz) {
        jt(this, zz)
      }
      _unregister() {}
      toArray() {
        return Array.from(this.$items.values())
      }
      toJSON() {
        const zz = [];
        return this.forEach(((tz, sz) => {
          zz.push("function" === typeof tz.toJSON ? tz.toJSON() : tz)
        })), zz
      }
      clone(zz) {
        let tz;
        return zz ? tz = Object.assign(new UF, this) : (tz = new UF, this.forEach((zz => {
          zz[Dz] ? tz.add(zz.clone()) : tz.add(zz)
        }))), tz
      }
    }
    xt("set", {
      constructor: UF
    });
    class KF {
      [Dz];
      [oz];
      [gz];
      $items = new Map;
      $nextPosition = 0;
      _itemIndex = new Map;
      _stream;
      get maxPerTick() {
        return this._stream?.maxPerTick ?? 32
      }
      set maxPerTick(zz) {
        (this._stream ??= It()).maxPerTick = zz
      }
      get priority() {
        return this._stream?.priority
      }
      set priority(zz) {
        (this._stream ??= It()).priority = zz
      }
      static $isStream = !0;
      static[Uz] = Qs;
      static[Kz] = Es;
      static COLLECTION_KIND = Rs;
      static[uz](zz, tz, sz) {
        if (!sz) return !0;
        const Fz = zz[Nz](tz);
        return void 0 !== Fz && sz.isVisible(Fz[Dz])
      }
      static is(zz) {
        return zz && void 0 !== zz.stream
      }
      constructor() {
        Object.defineProperty(this, Dz, {
          value: new cs(this),
          enumerable: !1,
          writable: !0
        }), this[gz] = void 0
      }
      static initializeForDecoder() {
        const zz = Object.create(KF.prototype);
        return zz.$items = new Map, zz.$nextPosition = 0, zz._itemIndex = new Map, zz[gz] = void 0, ys(zz), zz
      }
      add(zz) {
        if (this._itemIndex.has(zz)) return -1;
        const tz = this.$nextPosition++;
        this.$items.set(tz, zz), this._itemIndex.set(zz, tz);
        const sz = this[Dz].root;
        return void 0 !== zz[Dz] && zz[Dz].setParent(this, sz, tz), void 0 !== sz && et(this, sz, tz), tz
      }
      remove(zz) {
        const tz = this._itemIndex.get(zz);
        if (void 0 === tz) return !1;
        this._itemIndex.delete(zz), this.$items.delete(tz);
        const sz = this[Dz].root;
        return void 0 !== sz && (Zt(this, sz, this[oz], tz), void 0 !== zz[Dz] && sz.remove(zz[Dz])), !0
      }
      has(zz) {
        return this._itemIndex.has(zz)
      }
      clear() {
        const zz = this[Dz].root;
        if (void 0 !== zz) {
          ! function(zz, tz, sz) {
            const Fz = zz._stream;
            if (void 0 !== Fz) {
              Fz.broadcastPending.clear();
              for (const zz of Fz.sentBroadcast) Fz.broadcastDeletes.add(zz);
              Fz.sentBroadcast.clear(), tz.forEachActiveView((zz => {
                Fz.pendingByView.get(zz.id)?.clear();
                const tz = Fz.sentByView.get(zz.id);
                if (void 0 !== tz && tz.size > 0) {
                  let Fz = zz.changes.get(sz);
                  void 0 === Fz && (Fz = new Map, zz.changes.set(sz, Fz));
                  for (const zz of tz) Fz.set(zz, Wz.DELETE);
                  tz.clear()
                }
              }))
            }
          }(this, zz, this[oz]);
          for (const tz of this.$items.values()) void 0 !== tz[Dz] && zz.remove(tz[Dz])
        }
        this.$items.clear(), this._itemIndex.clear()
      }
      forEach(zz) {
        for (const [tz, sz] of this.$items) zz(sz, tz, this)
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
      setIndex(zz, tz) {}
      getIndex(zz) {
        return zz
      } [Nz](zz) {
        return this.$items.get(zz)
      } [bz](zz) {
        const tz = this.$items.get(zz);
        void 0 !== tz && (this._itemIndex.delete(tz), this.$items.delete(zz))
      } [wz]() {} [Bz]() {}
      toArray() {
        return Array.from(this.$items.values())
      }
      toJSON() {
        const zz = [];
        return this.forEach((tz => {
          zz.push("function" === typeof tz?.toJSON ? tz.toJSON() : tz)
        })), zz
      }
      clone(zz) {
        if (zz) {
          return Object.assign(new KF, this)
        }
        const tz = new KF;
        return tz.maxPerTick = this.maxPerTick, this.forEach((zz => {
          tz.add("function" === typeof zz?.clone ? zz.clone() : zz)
        })), tz
      }
      _dropView(zz) {
        jt(this, zz)
      }
      _unregister() {}
    }
    xt("stream", {
      constructor: KF
    });
    class uF {
      [xz] = !0;
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
      constructor(zz) {
        this._type = zz
      }
      default (zz) {
        return this._default = zz, this._hasDefault = !0, this
      }
      view(zz) {
        return this._view = zz ?? -1, this
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
        const zz = this._type;
        if (zz && "object" === typeof zz && void 0 !== zz.array) throw new Error(Jt);
        return this._stream = !0, this
      }
      priority(zz) {
        return this._streamPriority = zz, this
      }
      deprecated() {
        let zz = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
        return this._deprecated = !0, this._deprecatedThrows = zz, this
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

    function NF(zz) {
      return null != zz && !0 === zz[xz]
    }

    function bF(zz) {
      return () => new uF(zz)
    }

    function wF(zz) {
      if (NF(zz)) {
        const tz = zz._type;
        throw new Error(`t.array/map/set/collection(): a t.* builder is not a valid element type \u2014 ${"string"===typeof tz?`use the type name instead: t.array("${tz}")`:'collections accept a Schema class or a primitive type name ("string", "number", \u2026)'}.`)
      }
      return zz
    }

    function DF(zz) {
      return new uF({
        quantized: yt(zz)
      })
    }
    const gF = Object.freeze({
        string: bF("string"),
        number: bF("number"),
        boolean: bF("boolean"),
        int8: bF("int8"),
        uint8: bF("uint8"),
        int16: bF("int16"),
        uint16: bF("uint16"),
        int32: bF("int32"),
        uint32: bF("uint32"),
        int64: bF("int64"),
        uint64: bF("uint64"),
        float32: bF("float32"),
        float64: bF("float64"),
        bigint64: bF("bigint64"),
        biguint64: bF("biguint64"),
        ref: zz => new uF(zz),
        array: zz => new uF({
          array: wF(zz)
        }),
        map: zz => new uF({
          map: wF(zz)
        }),
        set: zz => new uF({
          set: wF(zz)
        }),
        collection: zz => new uF({
          collection: wF(zz)
        }),
        stream: zz => {
          const tz = new uF({
            stream: wF(zz)
          });
          return tz._stream = !0, tz
        },
        quantized: DF,
        angle: zz => DF({
          min: 0,
          max: 2 * Math.PI,
          mode: "wrap",
          bits: zz?.bits ?? 16
        })
      }),
      HF = -1;

    function BF(zz) {
      return kt.register(zz), zz
    }

    function PF() {
      let zz = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : HF;
      return function(tz, sz) {
        const Fz = Vt.initialize(tz.constructor);
        Vt.setTag(Fz, sz, zz)
      }
    }

    function rF(zz, tz) {
      const sz = Vt.initialize(zz.constructor);
      Vt.setUnreliable(sz, tz)
    }

    function YF(zz, tz) {
      const sz = Vt.initialize(zz.constructor);
      Vt.setPatchOnly(sz, tz)
    }

    function xF(zz, tz) {
      const sz = Vt.initialize(zz.constructor);
      Vt.setFullStateOnly(sz, tz)
    }

    function mF(zz, tz) {
      return function(sz, Fz) {
        const Wz = sz.constructor;
        if (!zz) throw new Error(`${Wz.name}: @type() reference provided for "${Fz}" is undefined. Make sure you don't have any circular dependencies.`);
        zz = Lt(zz, `${Wz.name}.${Fz}`), kt.register(Wz);
        const Xz = Object.getPrototypeOf(Wz)[Symbol.metadata],
          Oz = Vt.initialize(Wz);
        let oz = Oz[Fz];
        if (void 0 !== Oz[oz]) {
          if (Oz[oz].deprecated) return;
          if (void 0 !== Oz[oz].type) {
            const zz = new Error(`@colyseus/schema: Duplicate '${Fz}' definition on '${Wz.name}'.\nCheck @type() annotation`);
            throw new Error(`${zz.message} ${zz.stack.split("\n")[4].trim()}`)
          }
        } else oz = Oz[Cz] ?? (Xz && Xz[Cz]) ?? -1, oz++;
        if (tz && tz.manual) Vt.addField(Oz, oz, Fz, zz, {
          enumerable: !0,
          configurable: !0,
          writable: !0
        });
        else {
          const {
            complexTypeKlass: tz,
            childType: sz
          } = it(zz);
          Vt.addField(Oz, oz, Fz, zz, IF(Fz, oz, sz, tz))
        }
        Oz[mz][Fz] && Object.defineProperty(sz, Fz, Oz[mz][Fz]), ("string" === typeof zz || Mt(zz)) && (Oz[Iz] || Object.defineProperty(Oz, Iz, {
          value: [],
          enumerable: !1,
          configurable: !0,
          writable: !0
        }), Oz[Iz][oz] = "string" === typeof zz ? tt[zz] : Qt(zz.quantized))
      }
    }
    const JF = {
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

    function IF(zz, tz, sz, Fz) {
      let Xz;
      return Xz = Fz ? function(zz, tz, sz, Fz) {
        const Xz = Fz.constructor === XF,
          Oz = Fz.constructor === oF;
        return function(zz) {
          const Fz = this[Yz],
            oz = Fz[tz];
          if (zz !== oz) {
            if (void 0 !== zz && null !== zz) {
              if (!Xz || zz instanceof XF)
                if (!Oz || zz instanceof oF) zz[gz] = sz;
                else {
                  const tz = new oF;
                  if (tz[gz] = sz, zz instanceof Map) zz.forEach(((zz, sz) => tz.set(sz, zz)));
                  else
                    for (const sz in zz) tz.set(sz, zz[sz]);
                  zz = tz
                }
              else {
                const tz = new XF;
                tz[gz] = sz, tz.push(...zz), zz = tz
              }
              const Fz = this[Dz],
                Uz = this.constructor;
              void 0 !== oz && null !== oz && oz[Dz] ? (Fz.root?.remove(oz[Dz]), Uz[vz](Fz, tz, Wz.DELETE_AND_ADD)) : Uz[vz](Fz, tz, Wz.ADD), zz[Dz]?.setParent(this, Fz.root, tz)
            } else void 0 !== oz && null !== oz && this[Dz].delete(tz);
            Fz[tz] = zz
          }
        }
      }(0, tz, sz, Fz) : "string" === typeof sz ? function(zz, tz, sz) {
        const Fz = JF[sz],
          Xz = "string" === sz,
          Oz = "boolean" === sz;
        return function(sz) {
          const oz = this[Yz],
            Uz = oz[tz];
          if (sz !== Uz) {
            if (void 0 !== sz && null !== sz) {
              if (!Oz && void 0 !== Fz && typeof sz !== Fz && (!Xz || null !== sz)) {
                const tz = sz && sz.constructor ? ` (${sz.constructor.name})` : "";
                throw new tF(`a '${Fz}' was expected, but '${JSON.stringify(sz)}'${tz} was provided in ${this.constructor.name}#${zz}`)
              }
              this.constructor[vz](this[Dz], tz, Wz.ADD)
            } else void 0 !== Uz && null !== Uz && this[Dz].delete(tz);
            oz[tz] = sz
          }
        }
      }(zz, tz, sz) : Mt(sz) ? function(zz, tz, sz) {
        return function(Fz) {
          const Xz = this[Yz],
            Oz = Xz[tz];
          if (void 0 !== Fz && null !== Fz) {
            if ("number" !== typeof Fz) throw new tF(`a 'number' was expected, but '${JSON.stringify(Fz)}' was provided in ${this.constructor.name}#${zz}`);
            if ((Fz = ht(sz, dt(sz, Fz))) === Oz) return;
            this.constructor[vz](this[Dz], tz, Wz.ADD)
          } else {
            if (Fz === Oz) return;
            void 0 !== Oz && null !== Oz && this[Dz].delete(tz)
          }
          Xz[tz] = Fz
        }
      }(zz, tz, sz.quantized) : function(zz, tz, sz) {
        return function(Fz) {
          const Xz = this[Yz],
            Oz = Xz[tz];
          if (Fz !== Oz) {
            if (void 0 !== Fz && null !== Fz) {
              sF(Fz, sz, this, zz);
              const Xz = this[Dz],
                oz = this.constructor;
              void 0 !== Oz && null !== Oz && Oz[Dz] ? (Xz.root?.remove(Oz[Dz]), oz[vz](Xz, tz, Wz.DELETE_AND_ADD)) : oz[vz](Xz, tz, Wz.ADD), Fz[Dz]?.setParent(this, Xz.root, tz)
            } else void 0 !== Oz && null !== Oz && this[Dz].delete(tz);
            Xz[tz] = Fz
          }
        }
      }(zz, tz, sz), {
        get: function() {
          return this[Yz][tz]
        },
        set: Xz,
        enumerable: !0,
        configurable: !0
      }
    }

    function CF() {
      let zz = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
      return function(tz, sz) {
        const Fz = Vt.initialize(tz.constructor);
        Vt.setDeprecated(Fz, sz), zz && (Fz[mz] ??= {}, Fz[mz][sz] = {
          get: function() {
            throw new Error(`${sz} is deprecated.`)
          },
          set: function(zz) {},
          enumerable: !1,
          configurable: !0
        }, Object.defineProperty(tz, sz, Fz[mz][sz]))
      }
    }
    let eF = !1;

    function ZF(zz, tz, sz) {
      eF || (eF = !0, console.warn("@colyseus/schema: defineTypes() is deprecated and will be removed in a future release. Use schema() with t.* field builders instead \u2192 https://docs.colyseus.io/state/schema"));
      for (let Fz in tz) mF(tz[Fz], sz)(zz.prototype, Fz);
      return zz
    }

    function GF(zz, tz) {
      let sz = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : cF;
      if (null == zz || "object" !== typeof zz) throw new Error(`schema(): first argument must be a fields object (got ${typeof zz}).`);
      const Fz = {},
        Wz = {},
        Xz = {},
        Oz = {},
        oz = (zz, tz) => {
          if (tz.hasDefault)((zz, tz) => {
            "function" === typeof tz ? Oz[zz] = tz : tz && "function" === typeof tz.clone ? Oz[zz] = () => tz.clone() : Xz[zz] = tz
          })(zz, tz.default);
          else if (!tz.optional) {
            const sz = function(zz) {
              if (zz && "object" === typeof zz) {
                if (void 0 !== zz.array) return () => new XF;
                if (void 0 !== zz.map) return () => new oF;
                if (void 0 !== zz.set) return () => new UF;
                if (void 0 !== zz.collection) return () => new vF;
                if (void 0 !== zz.stream) return () => new KF
              } else if ("function" === typeof zz && cF.is(zz) && (!zz.prototype.initialize || 0 === zz.prototype.initialize.length)) return () => new zz
            }(tz.type);
            sz && (Oz[zz] = sz)
          }
        },
        vz = {},
        Uz = [],
        Kz = [],
        uz = {},
        Nz = [],
        bz = [],
        wz = {},
        Dz = [];
      for (const Yz in zz) {
        const sz = zz[Yz],
          Xz = `schema(${tz?`'${tz}'`:""}): field '${Yz}'`;
        if (NF(sz)) {
          const zz = sz.toDefinition();
          if (zz.noSync) {
            if (void 0 !== zz.view || zz.unreliable || zz.patchOnly || zz.fullStateOnly || zz.stream) throw new Error(`${Xz} uses .noSync() together with a sync-only modifier (.view/.unreliable/.patchOnly/.fullStateOnly/.stream). A local-only field cannot be synchronized.`);
            oz(Yz, zz);
            continue
          }
          if (zz.patchOnly && zz.fullStateOnly) throw new Error(`${Xz} uses .patchOnly() together with .fullStateOnly(). Those are the only two delivery channels, so the field would never reach a client \u2014 use .noSync() if that is intended.`);
          const tz = Lt(zz.type, Xz);
          if ("function" === typeof tz && !cF.is(tz)) throw new Error(`${Xz} is a synced ref to non-Schema class '${tz.name||"(anonymous)"}' \u2014 use .noSync(), or Metadata.setFields().`);
          Fz[Yz] = tz, void 0 !== zz.view && (vz[Yz] = zz.view), zz.unreliable && Uz.push(Yz), zz.patchOnly && Kz.push(Yz), zz.deprecated && (uz[Yz] = zz.deprecatedThrows), zz.fullStateOnly && Nz.push(Yz), zz.stream && bz.push(Yz), void 0 !== zz.streamPriority && (wz[Yz] = zz.streamPriority), zz.optional && Dz.push(Yz), oz(Yz, zz)
        } else {
          if ("function" !== typeof sz) throw new Error(`${Xz} must be a t.* builder, Schema subclass, or method (got ${typeof sz}).`);
          cF.is(sz) ? (Fz[Yz] = sz, sz.prototype.initialize && 0 !== sz.prototype.initialize.length || (Oz[Yz] = () => new sz)) : Wz[Yz] = sz
        }
      }
      const gz = zz => {
          for (const tz in Xz) zz[tz] = Xz[tz];
          for (const tz in Oz) zz[tz] = Oz[tz]()
        },
        Hz = () => {
          const zz = {};
          return gz(zz), zz
        },
        Bz = "function" === typeof Wz.initialize,
        Pz = Wz.initialize ?? sz._initialize,
        rz = class extends sz {
          constructor() {
            for (var zz = arguments.length, tz = new Array(zz), sz = 0; sz < zz; sz++) tz[sz] = arguments[sz];
            const Wz = tz[0];
            void 0 === Wz ? (super(), gz(this)) : super(Object.assign(Hz(), Bz ? (zz => {
              const tz = Object.keys(Fz),
                sz = {};
              for (const Fz in zz) tz.includes(Fz) || (sz[Fz] = zz[Fz]);
              return sz
            })(Wz) : Wz)), Pz && new.target === rz && Pz.apply(this, tz)
          }
        };
      tz && Object.defineProperty(rz, "name", {
        value: tz
      }), Vt.setFields(rz, Fz), rz._getDefaultValues = Hz, rz._initialize = Pz, Object.assign(rz.prototype, Wz);
      for (const Yz in vz) PF(vz[Yz])(rz.prototype, Yz);
      for (const Yz of Uz) rF(rz.prototype, Yz);
      for (const Yz of Kz) YF(rz.prototype, Yz);
      for (const Yz in uz) CF(uz[Yz])(rz.prototype, Yz);
      if (Nz.length > 0 || bz.length > 0) {
        const zz = rz[Symbol.metadata];
        for (const tz of Nz) Vt.setFullStateOnly(zz, tz);
        for (const tz of bz) Vt.setStream(zz, tz);
        for (const tz in wz) Vt.setStreamPriority(zz, tz, wz[tz])
      }
      if (Dz.length > 0) {
        const zz = rz[Symbol.metadata];
        for (const tz of Dz) zz[zz[tz]].optional = !0
      }
      return rz.extend = (zz, tz) => GF(zz, tz, rz), rz
    }

    function TF(zz) {
      const tz = zz[Dz].root,
        sz = {
          ops: {},
          refs: []
        };
      let Fz = tz.changes.next;
      for (; Fz;) {
        const zz = Fz.changeTree;
        void 0 !== zz ? (sz.refs.push(`refId#${zz.ref[oz]}`), zz.forEach(((zz, tz) => {
          if (zz < 0 || !tz) return;
          const Fz = Wz[tz];
          sz.ops[Fz] || (sz.ops[Fz] = 0), sz.ops[Fz]++
        })), Fz = Fz.next) : Fz = Fz.next
      }
      return sz
    }
    class cF {
      static[Uz] = ds;
      static[Kz] = fs;
      [oz];
      [Yz];
      static initialize(zz) {
        Object.defineProperty(zz, Dz, {
          value: new cs(zz),
          enumerable: !1,
          writable: !0
        }), zz[Yz] = []
      }
      static initializeForDecoder() {
        const zz = Object.create(this.prototype);
        return ys(zz), zz[Yz] = [], zz
      }
      static reset(zz) {
        const tz = zz?.[Dz];
        if (void 0 === tz || "function" !== typeof tz.recycle) throw new Error("@colyseus/schema: Schema.reset() requires a tracked (encoder-side) instance.");
        if (void 0 !== tz.extraParents) throw new Error(`@colyseus/schema: cannot reset a shared instance (${zz.constructor.name}) with multiple parents.`);
        zz[Pz]()
      } [Pz]() {
        const zz = this.constructor[Symbol.metadata],
          tz = zz?.[ez] ?? [],
          sz = this[Yz];
        for (let Fz = 0; Fz < tz.length; Fz++) {
          const zz = sz[tz[Fz]];
          zz?.[Pz]?.()
        }
        this[Dz].recycle(), this[oz] = void 0
      }
      static is(zz) {
        const tz = zz[Symbol.metadata];
        return "object" === typeof tz && null !== tz
      }
      static isSchema(zz) {
        return "function" === typeof zz?.assign
      }
      static[vz](zz, tz) {
        let sz = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Wz.ADD;
        zz.change(tz, sz)
      }
      static[uz](zz, tz, sz) {
        const Fz = zz.constructor[Symbol.metadata],
          Wz = Fz[tz]?.tag;
        return void 0 === sz ? void 0 === Wz : void 0 === Wz || (Wz === HF ? sz.isChangeTreeVisible(zz[Dz]) : sz.hasTagOnTree(zz[Dz], Wz))
      }
      constructor(zz) {
        cF.initialize(this), zz && cF.assignProps(this, zz)
      }
      assign(zz) {
        return cF.assignProps(this, zz), this
      }
      static assignProps(zz, tz) {
        const sz = zz.constructor[Symbol.metadata];
        if (sz && void 0 !== sz[Cz])
          for (let Wz = 0; Wz <= sz[Cz]; Wz++) {
            const Fz = sz[Wz];
            if (!Fz) continue;
            const Xz = tz[Fz.name];
            void 0 !== Xz && (zz[Fz.name] = Xz)
          }
        const Fz = Object.keys(tz);
        for (let Wz = 0; Wz < Fz.length; Wz++) {
          const Xz = Fz[Wz];
          sz && void 0 !== sz[Xz] || (zz[Xz] = tz[Xz])
        }
      }
      restore(zz) {
        const tz = this.constructor[Symbol.metadata];
        for (const sz in tz) {
          const Fz = tz[sz],
            Wz = Fz.name,
            Xz = Fz.type,
            Oz = zz[Wz];
          if (void 0 !== Oz && null !== Oz)
            if ("string" === typeof Xz) this[Wz] = Oz;
            else if (cF.is(Xz)) {
            const zz = new Xz;
            zz.restore(Oz), this[Wz] = zz
          } else if ("object" === typeof Xz) {
            const zz = Object.keys(Xz)[0],
              tz = Xz[zz];
            if ("map" === zz) {
              const zz = this[Wz];
              for (const sz in Oz)
                if (cF.is(tz)) {
                  const Fz = new tz;
                  Fz.restore(Oz[sz]), zz.set(sz, Fz)
                } else zz.set(sz, Oz[sz])
            } else if ("array" === zz) {
              const zz = this[Wz];
              for (let sz = 0; sz < Oz.length; sz++)
                if (cF.is(tz)) {
                  const Fz = new tz;
                  Fz.restore(Oz[sz]), zz.push(Fz)
                } else zz.push(Oz[sz])
            }
          }
        }
        return this
      }
      setDirty(zz, tz) {
        const sz = this.constructor[Symbol.metadata];
        this[Dz].change(sz[sz[zz]].index, tz)
      }
      pauseTracking() {
        this[Dz].pause()
      }
      resumeTracking() {
        this[Dz].resume()
      }
      untracked(zz) {
        return this[Dz].untracked(zz)
      }
      get isTrackingPaused() {
        return this[Dz].paused
      }
      clone() {
        const zz = Object.create(this.constructor.prototype);
        cF.initialize(zz);
        const tz = this.constructor[Symbol.metadata];
        for (const sz in tz) {
          const Fz = tz[sz].name;
          "object" === typeof this[Fz] && "function" === typeof this[Fz]?.clone ? zz[Fz] = this[Fz].clone() : zz[Fz] = this[Fz]
        }
        return zz
      }
      toJSON() {
        const zz = {},
          tz = this.constructor[Symbol.metadata];
        for (const sz in tz) {
          const Fz = tz[sz],
            Wz = Fz.name;
          Fz.deprecated || null === this[Wz] || "undefined" === typeof this[Wz] || (zz[Wz] = "function" === typeof this[Wz].toJSON ? this[Wz].toJSON() : this[Wz])
        }
        return zz
      }
      discardAllChanges() {
        this[Dz].discardAll()
      } [Nz](zz) {
        return this[this.constructor[Symbol.metadata][zz].name]
      } [bz](zz) {
        this[this.constructor[Symbol.metadata][zz].name] = void 0
      }
      static debugRefIds(zz) {
        let tz = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          sz = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          Fz = arguments.length > 3 ? arguments[3] : void 0,
          Wz = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "";
        const Xz = tz ? ` - ${JSON.stringify(zz.toJSON())}` : "",
          Oz = zz[Dz],
          vz = zz[oz],
          Uz = Fz ? Fz.root.refCount[vz] : Oz.refCount,
          Kz = Uz > 1 ? ` [\xd7${Uz}]` : "";
        let uz = `${function(zz){return new Array(zz).fill(0).map(((tz,sz)=>sz===zz-1?"\u2514\u2500 ":"   ")).join("")}(sz)}${Wz}${zz.constructor.name} (refId: ${vz})${Kz}${Xz}\n`;
        return Oz.forEachChild(((Wz, Xz) => {
          let Oz = Xz;
          "number" === typeof Xz && zz.$indexes && (Oz = zz.$indexes.get(Xz) ?? Xz);
          const oz = void 0 !== zz.forEach && void 0 !== Oz ? `["${Oz}"]: ` : "";
          uz += this.debugRefIds(Wz.ref, tz, sz + 1, Fz, oz)
        })), uz
      }
      static debugRefIdEncodingOrder(zz) {
        let tz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "allChanges";
        const sz = [],
          Fz = zz[Dz];
        if ("changes" === tz) {
          let zz = Fz.root.changes?.next;
          for (; zz;) zz.changeTree && sz.push(zz.changeTree.ref[oz]), zz = zz.next;
          return sz
        }
        const Wz = "allFilteredChanges" === tz,
          Xz = new Set,
          Oz = zz => {
            Xz.has(zz) || (Xz.add(zz), zz.isFiltered === Wz && sz.push(zz.ref[oz]), zz.forEachChild(((zz, tz) => Oz(zz))))
          };
        return Oz(Fz), sz
      }
      static debugRefIdsFromDecoder(zz) {
        return this.debugRefIds(zz.state, !1, 0, zz)
      }
      static debugChanges(zz) {
        let tz = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        const sz = zz[Dz],
          Fz = tz ? "allChanges" : "changes";
        let Xz = `${zz.constructor.name} (${zz[oz]}) -> .${Fz}:\n`;
        return tz ? sz.forEachLive((zz => {
          Xz += `- [${zz}]: ADD (${JSON.stringify(sz.getValue(Number(zz),!0))})\n`
        })) : sz.forEach(((zz, tz) => {
          zz < 0 || !tz || (Xz += `- [${zz}]: ${Wz[tz]} (${JSON.stringify(sz.getValue(Number(zz),!1))})\n`)
        })), Xz
      }
    }
    Xz(cF);
    const jF = {
      value: 0,
      enumerable: !1,
      writable: !0
    };
    class AF {
      types;
      nextUniqueId = 0;
      changeTrees = {};
      get refCount() {
        const zz = {};
        for (const tz in this.changeTrees) zz[tz] = this.changeTrees[tz].refCount;
        return zz
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
      enqueueFilterRefresh(zz) {
        this.types.hasFilters && (zz.flags & Gs || (zz.flags |= Gs, this.pendingFilterRefresh.push(zz)))
      }
      _nodePool = [];
      _nextViewId = 0;
      _freeViewIds = [];
      acquireViewId() {
        return this._freeViewIds.length > 0 ? this._freeViewIds.pop() : this._nextViewId++
      }
      releaseViewId(zz) {
        this._freeViewIds.push(zz)
      }
      activeViews = new Map;
      streamTrees = new Set;
      registerView(zz) {
        this.activeViews.set(zz.id, new WeakRef(zz))
      }
      unregisterView(zz) {
        this.activeViews.delete(zz.id);
        const tz = zz.id;
        for (const sz of this.streamTrees) sz._dropView(tz)
      }
      forEachActiveView(zz) {
        for (const [tz, sz] of this.activeViews) {
          const Fz = sz.deref();
          if (void 0 !== Fz) zz(Fz);
          else {
            this.activeViews.delete(tz);
            for (const zz of this.streamTrees) zz._dropView(tz)
          }
        }
      }
      registerStream(zz) {
        this.streamTrees.add(zz)
      }
      unregisterStream(zz) {
        this.streamTrees.delete(zz)
      }
      constructor(zz) {
        let tz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        this.types = zz, this.nextUniqueId = tz
      }
      add(zz) {
        const tz = zz.ref;
        void 0 === tz[oz] && (jF.value = this.nextUniqueId++, Object.defineProperty(tz, oz, jF));
        const sz = tz[oz],
          Fz = void 0 === this.changeTrees[sz];
        Fz && (this.changeTrees[sz] = zz), zz.needsRestage && (zz.needsRestage = !1, zz.forEachLiveWithCtx(zz, Fs));
        const Wz = Fz ? 0 : zz.refCount;
        return zz.refCount = Wz + 1, Wz > 0 && this.enqueueFilterRefresh(zz), Fz
      }
      remove(zz) {
        const tz = zz.refCount - 1;
        if (tz <= 0) {
          if (zz.root = void 0, delete this.changeTrees[zz.ref[oz]], zz.isStreamCollection) {
            const tz = zz.ref;
            tz._unregister?.(), this.unregisterStream(tz)
          }
          this.removeFromQueue(zz), this.removeFromUnreliableQueue(zz), zz.refCount = 0, zz.needsRestage = !0, zz.forEachChild(((tz, sz) => {
            tz.removeParent(zz.ref) && (void 0 === tz.parentRef || tz.refCount > 0 ? this.remove(tz) : this.moveNextToParent(tz))
          }))
        } else zz.refCount = tz, this.enqueueFilterRefresh(zz), this.recursivelyMoveNextToParent(zz);
        return tz
      }
      recursivelyMoveNextToParent(zz) {
        this.moveNextToParent(zz), zz.forEachChild(((zz, tz) => this.recursivelyMoveNextToParent(zz)))
      }
      moveNextToParent(zz) {
        zz.changesNode && this._moveNextToParentInList(this.changes, zz, zz.changesNode, "changesNode"), zz.unreliableChangesNode && this._moveNextToParentInList(this.unreliableChanges, zz, zz.unreliableChangesNode, "unreliableChangesNode")
      }
      _moveNextToParentInList(zz, tz, sz, Fz) {
        const Wz = tz.parent;
        if (!Wz || !Wz[Dz]) return;
        const Xz = Wz[Dz][Fz];
        Xz && Xz !== sz && (sz.position > Xz.position || (sz.prev ? sz.prev.next = sz.next : zz.next = sz.next, sz.next ? sz.next.prev = sz.prev : zz.tail = sz.prev, sz.prev = zz.tail, sz.next = void 0, zz.tail.next = sz, zz.tail = sz, sz.position = zz.nextPosition++))
      }
      enqueueChangeTree(zz) {
        (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : zz.changesNode) || (zz.changesNode = this._appendToList(this.changes, zz))
      }
      enqueueUnreliable(zz) {
        (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : zz.unreliableChangesNode) || (zz.unreliableChangesNode = this._appendToList(this.unreliableChanges, zz))
      }
      _appendToList(zz, tz) {
        const sz = this._nodePool;
        let Fz;
        return sz.length > 0 ? (Fz = sz.pop(), Fz.changeTree = tz, Fz.next = void 0, Fz.prev = void 0) : Fz = {
          changeTree: tz,
          next: void 0,
          prev: void 0,
          position: 0
        }, zz.next ? (Fz.prev = zz.tail, zz.tail.next = Fz, zz.tail = Fz) : (zz.nextPosition = 0, zz.next = Fz, zz.tail = Fz), Fz.position = zz.nextPosition++, Fz
      }
      releaseNode(zz) {
        zz.changeTree = void 0, zz.prev = void 0, zz.next = void 0, this._nodePool.push(zz)
      }
      removeFromQueue(zz) {
        return this._removeNode(this.changes, zz, zz.changesNode, "changesNode")
      }
      removeFromUnreliableQueue(zz) {
        return this._removeNode(this.unreliableChanges, zz, zz.unreliableChangesNode, "unreliableChangesNode")
      }
      _removeNode(zz, tz, sz, Fz) {
        return !(!sz || sz.changeTree !== tz) && (sz.prev ? sz.prev.next = sz.next : zz.next = sz.next, sz.next ? sz.next.prev = sz.prev : zz.tail = sz.prev, tz[Fz] = void 0, this.releaseNode(sz), !0)
      }
    }

    function yF(zz, tz) {
      if (-1 === tz || tz >= zz.length) return !1;
      const sz = zz.length - 1;
      for (let Fz = tz; Fz < sz; Fz++) zz[Fz] = zz[Fz + 1];
      return zz.length = sz, !0
    }

    function MF(zz, tz, sz) {
      const Fz = ~sz,
        Wz = zz.changeTrees;
      for (const Xz in Wz) {
        const zz = Wz[Xz],
          sz = zz.visibleViews;
        void 0 !== sz && tz < sz.length && (sz[tz] &= Fz);
        const Oz = zz.subscribedViews;
        void 0 !== Oz && tz < Oz.length && (Oz[tz] &= Fz);
        const oz = zz.tagViews;
        void 0 !== oz && oz.forEach((zz => {
          tz < zz.length && (zz[tz] &= Fz)
        }))
      }
    }
    const dF = new FinalizationRegistry((zz => {
      let {
        root: tz,
        id: sz,
        slot: Fz,
        bit: Wz
      } = zz;
      MF(tz, Fz, Wz), tz.activeViews.delete(sz);
      for (const Xz of tz.streamTrees) Xz._dropView(sz);
      tz.releaseViewId(sz)
    }));

    function hF(zz) {
      if (void 0 === zz) return "undefined";
      if (null === zz) return "null";
      const tz = typeof zz;
      return "string" === tz ? JSON.stringify(zz.length > 30 ? `${zz.slice(0,30)}\u2026` : zz) : "object" !== tz && "function" !== tz ? `${tz} ${String(zz)}` : Array.isArray(zz) ? `Array(${zz.length})` : zz.constructor?.name ?? "Object"
    }
    class QF {
      iterable;
      items;
      id = -1;
      _root;
      _slot = 0;
      _bit = 0;
      changes = new Map;
      constructor() {
        let zz = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        this.iterable = zz, zz && (this.items = [])
      }
      _bindRoot(zz) {
        void 0 === this._root && (this._root = zz, this.id = zz.acquireViewId(), this._slot = this.id >> 5, this._bit = 1 << (31 & this.id), zz.registerView(this), dF.register(this, {
          root: zz,
          id: this.id,
          slot: this._slot,
          bit: this._bit
        }, this))
      }
      dispose() {
        void 0 !== this._root && (this._root.unregisterView(this), MF(this._root, this._slot, this._bit), this._root.releaseViewId(this.id), dF.unregister(this), this._root = void 0, this.id = -1)
      }
      isVisible(zz) {
        const tz = zz.visibleViews,
          sz = this._slot;
        return void 0 !== tz && sz < tz.length && 0 !== (tz[sz] & this._bit)
      }
      markVisible(zz) {
        const tz = this._slot;
        let sz = zz.visibleViews;
        for (void 0 === sz && (sz = zz.visibleViews = []); sz.length <= tz;) sz.push(0);
        sz[tz] |= this._bit
      }
      unmarkVisible(zz) {
        const tz = zz.visibleViews;
        if (void 0 === tz) return;
        const sz = this._slot;
        sz < tz.length && (tz[sz] &= ~this._bit)
      }
      isSubscribed(zz) {
        const tz = zz.subscribedViews,
          sz = this._slot;
        return void 0 !== tz && sz < tz.length && 0 !== (tz[sz] & this._bit)
      }
      _setSubscribed(zz) {
        const tz = this._slot;
        let sz = zz.subscribedViews;
        for (void 0 === sz && (sz = zz.subscribedViews = []); sz.length <= tz;) sz.push(0);
        sz[tz] |= this._bit
      }
      _clearSubscribed(zz) {
        const tz = zz.subscribedViews;
        if (void 0 === tz) return;
        const sz = this._slot;
        sz < tz.length && (tz[sz] &= ~this._bit)
      }
      hasTagOnTree(zz, tz) {
        const sz = zz.tagViews;
        if (void 0 === sz) return !1;
        const Fz = this._slot,
          Wz = this._bit;
        for (let Xz = tz; 0 !== Xz; Xz &= Xz - 1) {
          const zz = sz.get(Xz & -Xz);
          if (void 0 !== zz && Fz < zz.length && 0 !== (zz[Fz] & Wz)) return !0
        }
        return !1
      }
      addTag(zz, tz) {
        if (tz === HF) return;
        let sz = zz.tagViews;
        void 0 === sz && (sz = zz.tagViews = new Map);
        const Fz = this._slot,
          Wz = this._bit;
        for (let Xz = tz; Xz > 0; Xz &= Xz - 1) {
          const zz = Xz & -Xz;
          let tz = sz.get(zz);
          for (void 0 === tz && (tz = [], sz.set(zz, tz)); tz.length <= Fz;) tz.push(0);
          tz[Fz] |= Wz
        }
      }
      removeTag(zz, tz) {
        if (tz === HF) return;
        const sz = zz.tagViews;
        if (void 0 === sz) return;
        const Fz = this._slot,
          Wz = ~this._bit;
        for (let Xz = tz; Xz > 0; Xz &= Xz - 1) {
          const zz = sz.get(Xz & -Xz);
          void 0 !== zz && Fz < zz.length && (zz[Fz] &= Wz)
        }
      }
      removeAllTagsOnTree(zz) {
        const tz = zz.tagViews;
        if (void 0 === tz) return;
        const sz = this._slot,
          Fz = ~this._bit;
        tz.forEach((zz => {
          sz < zz.length && (zz[sz] &= Fz)
        }))
      }
      add(zz) {
        let tz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : HF,
          sz = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        return this._add(zz, tz, sz, !1)
      }
      _addImmediate(zz) {
        let tz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : HF;
        this._add(zz, tz, !0, !0)
      }
      _add(zz, tz, sz, Fz) {
        const Xz = zz?.[Dz];
        if (!Xz) return console.warn(`StateView#add(): expected a Schema instance or collection, received ${hF(zz)}`), !1;
        const Oz = Xz.parent;
        if (!Oz && 0 !== zz[oz]) throw new Error(`Cannot add a detached instance to the StateView. Make sure to assign the "${Xz.ref.constructor.name}" instance to the state before calling view.add()`);
        void 0 === this._root && void 0 !== Xz.root && this._bindRoot(Xz.root);
        const vz = Oz?.[Dz];
        if (!Fz && vz?.isStreamCollection) return ct(Oz, this.id, Xz.parentIndex), !0;
        const Uz = zz.constructor[Symbol.metadata],
          Kz = this.isVisible(Xz);
        if (!this.iterable || !sz || Kz && -1 !== this.items.indexOf(zz) || this.items.push(zz), this.markVisible(Xz), sz && Oz && this.addParentOf(Xz, tz), !Fz && Xz.isStreamCollection) return !0;
        if (tz === HF && Xz.isNew) return this._markSubtreeVisible(Xz, tz), !1;
        let uz = this.changes.get(zz[oz]);
        void 0 === uz && (uz = new Map, this.changes.set(zz[oz], uz));
        let Nz = !1;
        const bz = Xz.encDescriptor.tags;
        if (Xz.forEachChild(((zz, sz) => {
            const Fz = bz[sz];
            if (void 0 !== Fz) {
              if (!(Fz === HF || tz !== HF && 0 !== (Fz & tz))) return
            }
            this.add(zz.ref, tz, !1) && (Nz = !0)
          })), tz !== HF) {
          this.addTag(Xz, tz);
          const zz = Uz?.[Gz];
          if (void 0 !== zz)
            for (let sz = tz; sz > 0; sz &= sz - 1) zz[sz & -sz]?.forEach((zz => {
              Xz.getChange(zz) !== Wz.DELETE && uz.set(zz, Wz.ADD)
            }))
        }
        if ((tz === HF || !Kz) && (!Xz.isNew || Nz))
          if (Xz.isArray && "string" !== typeof Xz.refTarget[gz]) Xz.refTarget.items.length > 0 && (uz.set(-1, Wz.ADD), Nz = !0);
          else {
            const zz = Xz.encDescriptor.tags;
            Xz.forEachLive((sz => {
              const Fz = zz[sz];
              (void 0 === Fz || Fz === HF || tz !== HF && 0 !== (Fz & tz)) && (uz.set(sz, Wz.ADD), Nz = !0)
            }))
          } return Nz
      }
      _markSubtreeVisible(zz, tz) {
        const sz = zz.encDescriptor.tags;
        zz.forEachChild(((zz, Fz) => {
          const Wz = sz[Fz];
          if (void 0 !== Wz) {
            if (!(Wz === HF || tz !== HF && 0 !== (Wz & tz))) return
          }
          zz.isNew ? (this.markVisible(zz), this._markSubtreeVisible(zz, tz)) : this._add(zz.ref, tz, !1, !1)
        }))
      }
      addParentOf(zz, tz) {
        const sz = zz.parent[Dz],
          Fz = zz.parentIndex;
        this.isVisible(sz) || this.markVisible(sz);
        const Xz = sz.parent?.[Dz];
        if (Xz && this.addParentOf(sz, tz), sz.hasFilteredFields && sz.getChange(Fz) !== Wz.DELETE) {
          let Xz = this.changes.get(sz.ref[oz]);
          void 0 === Xz && (Xz = new Map, this.changes.set(sz.ref[oz], Xz));
          const Oz = sz.encDescriptor.tags[Fz];
          void 0 !== Oz && Oz !== HF && 0 !== (Oz & tz) && this.addTag(sz, tz), Xz.set(sz.isArray ? zz : Fz, Wz.ADD)
        }
      }
      _touchAncestorsOf(zz) {
        let tz = zz.parent?.[Dz];
        if (void 0 === tz) return;
        const sz = [];
        for (; void 0 !== tz;) {
          if (tz.hasFilteredFields) {
            const zz = tz.ref[oz];
            if (this.changes.has(zz)) break;
            sz.push(tz)
          }
          tz = tz.parent?.[Dz]
        }
        for (let Fz = sz.length - 1; Fz >= 0; Fz--) this.changes.set(sz[Fz].ref[oz], new Map)
      }
      remove(zz) {
        let tz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : HF,
          sz = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        const Fz = zz?.[Dz];
        if (!Fz) return console.warn(`StateView#remove(): expected a Schema instance or collection, received ${hF(zz)}`), this;
        const Xz = Fz.parent?.[Dz];
        if (Xz?.isStreamCollection) return this.unmarkVisible(Fz), this.iterable && !sz && yF(this.items, this.items.indexOf(zz)),
          function(zz, tz, sz, Fz, Xz) {
            const Oz = zz._stream;
            if (void 0 === Oz) return !1;
            const oz = Oz.pendingByView.get(tz);
            if (oz?.has(Fz)) return oz.delete(Fz), !1;
            const vz = Oz.sentByView.get(tz);
            if (vz?.has(Fz)) {
              vz.delete(Fz);
              let zz = Xz.get(sz);
              return void 0 === zz && (zz = new Map, Xz.set(sz, zz)), zz.set(Fz, Wz.DELETE), !0
            }
          }(Fz.parent, this.id, Fz.parent[oz], Fz.parentIndex, this.changes), this._recursiveDeleteVisibleChangeTree(Fz), this;
        if (Fz.isStreamCollection) {
          this.unmarkVisible(Fz), this.iterable && !sz && yF(this.items, this.items.indexOf(zz));
          const tz = Fz.ref,
            Xz = tz._stream;
          if (void 0 !== Xz) {
            Xz.pendingByView.get(this.id)?.clear();
            const zz = Xz.sentByView.get(this.id);
            if (void 0 !== zz && zz.size > 0) {
              const sz = tz[oz];
              let Fz = this.changes.get(sz);
              void 0 === Fz && (Fz = new Map, this.changes.set(sz, Fz));
              for (const tz of zz) Fz.set(tz, Wz.DELETE);
              zz.clear()
            }
          }
          return this
        }
        this.unmarkVisible(Fz), this.iterable && !sz && yF(this.items, this.items.indexOf(zz));
        const Oz = Fz.ref,
          vz = Oz.constructor[Symbol.metadata],
          Uz = Oz[oz];
        this._touchAncestorsOf(Fz);
        let Kz = this.changes.get(Uz);
        if (void 0 === Kz && (Kz = new Map, this.changes.set(Uz, Kz)), tz === HF) {
          const zz = Fz.parent;
          if (zz && !Vt.isValidInstance(zz) && Fz.isFiltered) {
            const tz = Xz.isArray ? Fz : Fz.parentIndex,
              sz = zz[oz];
            let Oz = this.changes.get(sz);
            void 0 === Oz ? (Oz = new Map, this.changes.set(sz, Oz)) : Oz.get(tz) === Wz.ADD && this._dropPendingEntries(Fz), Oz.set(tz, Wz.DELETE), this._recursiveDeleteVisibleChangeTree(Fz)
          } else vz?.[Zz]?.forEach((zz => this._removeViewField(Fz, Kz, zz)))
        } else {
          const zz = vz?.[Gz];
          if (void 0 !== zz)
            for (let sz = tz; sz > 0; sz &= sz - 1) zz[sz & -sz]?.forEach((zz => this._removeViewField(Fz, Kz, zz)))
        }
        return void 0 === tz ? this.removeAllTagsOnTree(Fz) : this.removeTag(Fz, tz), this
      }
      has(zz) {
        return this.isVisible(zz[Dz])
      }
      hasTag(zz) {
        let tz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : HF;
        return this.hasTagOnTree(zz[Dz], tz)
      }
      subscribe(zz, tz) {
        const sz = zz?.[Dz];
        if (!sz) return console.warn(`StateView#subscribe(): expected a Schema collection, received ${hF(zz)}`), this;
        if (void 0 === this._root && void 0 !== sz.root && this._bindRoot(sz.root), void 0 !== tz)
          if (sz.isStreamCollection) {
            const sz = Ct(zz);
            null === tz ? sz.priorityByView?.delete(this.id) : (sz.priorityByView ??= new Map).set(this.id, tz)
          } else {
            const tz = zz?.constructor?.name ?? "collection",
              Fz = sz.parent;
            if (void 0 === Fz) console.warn(`StateView#subscribe(): \`priority\` ignored \u2014 this ${tz} is not attached to a state yet, so it cannot be identified as a stream. Subscribe after assigning it to the state.`);
            else {
              const zz = Fz?.constructor?.[Symbol.metadata]?.[sz.parentIndex]?.name,
                Wz = zz ? `${Fz.constructor.name}#${zz}` : tz;
              console.warn(`StateView#subscribe(): \`priority\` ignored \u2014 ${Wz} is a ${tz}, not a streaming collection. Declare the field with .stream() (e.g. t.map(X).stream()) or use t.stream(X) to enable priority batching.`)
            }
          } if (this.isSubscribed(sz)) return this;
        const Fz = void 0 !== sz.parent && !this.isVisible(sz);
        if (Fz ? (this.addParentOf(sz, HF), this._add(zz, HF, !1, !1)) : this.markVisible(sz), this._setSubscribed(sz), sz.isStreamCollection) {
          const tz = zz;
          sz.forEachChild(((zz, sz) => {
            ct(tz, this.id, sz)
          }))
        } else Fz || sz.forEachChild((zz => {
          this.markVisible(zz)
        }));
        return this
      }
      unsubscribe(zz) {
        const tz = zz?.[Dz];
        if (!tz) return console.warn(`StateView#unsubscribe(): expected a Schema collection, received ${hF(zz)}`), this;
        if (!this.isSubscribed(tz)) return this;
        this._clearSubscribed(tz);
        const sz = tz.ref[oz];
        if (tz.isStreamCollection) {
          const tz = zz._stream;
          if (void 0 !== tz) {
            tz.pendingByView.get(this.id)?.clear();
            const zz = tz.sentByView.get(this.id);
            if (void 0 !== zz && zz.size > 0) {
              let tz = this.changes.get(sz);
              void 0 === tz && (tz = new Map, this.changes.set(sz, tz));
              for (const sz of zz) tz.set(sz, Wz.DELETE);
              zz.clear()
            }
          }
        } else {
          const zz = tz.isArray;
          let Fz = this.changes.get(sz);
          tz.forEachChild(((tz, Xz) => {
            void 0 === Fz && (Fz = new Map, this.changes.set(sz, Fz)), Fz.set(zz ? tz : Xz, Wz.DELETE), this.unmarkVisible(tz)
          }))
        }
        return this.unmarkVisible(tz), this
      }
      clear() {
        if (!this.iterable) throw new Error("StateView#clear() is only available for iterable StateView's. Use StateView(iterable: true) constructor.");
        for (let zz = 0, tz = this.items.length; zz < tz; zz++) this.remove(this.items[zz], HF, !0);
        this.items.length = 0
      }
      isChangeTreeVisible(zz) {
        let tz = this.isVisible(zz);
        if (!tz && zz.isVisibilitySharedWithParent)
          if (this.isVisible(zz.parent[Dz])) this.markVisible(zz), tz = !0;
          else
            for (let sz = zz.extraParents; void 0 !== sz; sz = sz.next) {
              const Fz = sz.ref[Dz];
              if (Fz.isFiltered && this.isVisible(Fz)) {
                this.markVisible(zz), tz = !0;
                break
              }
            }
        return tz
      }
      _recursiveDeleteVisibleChangeTree(zz) {
        zz.forEachChild((zz => {
          this.unmarkVisible(zz), this._recursiveDeleteVisibleChangeTree(zz)
        }))
      }
      _dropPendingEntries(zz) {
        this.changes.delete(zz.ref[oz]), zz.forEachChild((zz => this._dropPendingEntries(zz)))
      }
      _removeViewField(zz, tz, sz) {
        const Fz = tz.get(sz) === Wz.ADD;
        tz.set(sz, Wz.DELETE);
        const Xz = zz.ref[zz.encDescriptor.names[sz]],
          Oz = Xz?.[Dz];
        Oz && (this.unmarkVisible(Oz), this._recursiveDeleteVisibleChangeTree(Oz), Fz && this._dropPendingEntries(Oz))
      }
    }

    function kF(zz) {
      zz.structSwitchEmitted || (zz.shouldEmitSwitch && (zz.buffer[zz.it.offset++] = 255, tt.number(zz.buffer, zz.ref[oz], zz.it)), zz.structSwitchEmitted = !0)
    }

    function iF(zz, tz) {
      nF(zz, tz, Wz.ADD)
    }

    function LF(zz, tz) {
      if (tz._fullSyncGen === zz.gen) return;
      tz._fullSyncGen = zz.gen;
      if (!zz.hasView || zz.view.isChangeTreeVisible(tz)) {
        const sz = tz.encDescriptor;
        zz.changeTree = tz, zz.ref = tz.ref, zz.encoder = sz.encoder, zz.filter = sz.filter, zz.metadata = sz.metadata, zz.treeIsFiltered = tz.isFiltered, zz.isSchema = sz.isSchema, zz.filterBitmask = sz.filterBitmask, zz.tags = sz.tags, zz.structSwitchEmitted = !1, zz.shouldEmitSwitch = zz.hasView || zz.it.offset > zz.initialOffset || tz !== zz.rootChangeTree, tz.isArray && tz.collDirty.size > 0 && (tz.flags |= 512), Xs(tz, zz, iF)
      }
      Bs(tz, zz, lF)
    }

    function lF(zz, tz, sz) {
      LF(zz, tz)
    }

    function nF(zz, tz, sz) {
      if (tz < 0) {
        if (zz.treeIsFiltered !== zz.emitFiltered) return;
        return kF(zz), void(zz.buffer[zz.it.offset++] = 255 & Math.abs(tz))
      }
      if ((zz.isSchema ? zz.treeIsFiltered || (tz < 32 ? 0 !== (zz.filterBitmask & 1 << tz) : void 0 !== zz.tags[tz]) : zz.treeIsFiltered) !== zz.emitFiltered) return;
      const Fz = zz.isEncodeAll ? Wz.ADD : sz;
      void 0 !== Fz && (void 0 === zz.filter || zz.filter(zz.ref, tz, zz.view)) && (kF(zz), zz.encoder(zz.self, zz.buffer, zz.changeTree, tz, Fz, zz.it, zz.isEncodeAll, zz.hasView, zz.metadata))
    }

    function aF(zz, tz) {
      const sz = new Uint8Array(zz.length + tz.length);
      return sz.set(zz, 0), sz.set(tz, zz.length), sz
    }
    class qF {
      static BUFFER_SIZE = 16384;
      sharedBuffer = new Uint8Array(qF.BUFFER_SIZE);
      context;
      state;
      root;
      constructor(zz, tz) {
        this.context = kt.cache(zz.constructor), this.root = tz ?? new AF(this.context), this.setState(zz)
      }
      setState(zz) {
        this.state = zz, this.state[Dz].setRoot(this.root)
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
        let zz = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
            offset: 0
          },
          tz = arguments.length > 1 ? arguments[1] : void 0,
          sz = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : this.sharedBuffer,
          Fz = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : zz.offset;
        return this._encodeChannel(zz, tz, sz, Fz, !1)
      }
      encodeUnreliable() {
        let zz = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
            offset: 0
          },
          tz = arguments.length > 1 ? arguments[1] : void 0,
          sz = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : this.sharedBuffer,
          Fz = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : zz.offset;
        return this._encodeChannel(zz, tz, sz, Fz, !0)
      }
      _encodeChannel(zz, tz, sz, Fz, Wz) {
        this.root.pendingFilterRefresh.length > 0 && os(this.root);
        const Xz = void 0 !== tz,
          Oz = this.state[Dz],
          oz = this._encodeCtx;
        oz.self = this, oz.buffer = sz, oz.it = zz, oz.view = tz, oz.isEncodeAll = !1, oz.hasView = Xz, oz.emitFiltered = Xz;
        let vz = Wz ? this.root.unreliableChanges : this.root.changes;
        for (; vz = vz.next;) {
          const sz = vz.changeTree;
          if (Xz && !tz.isChangeTreeVisible(sz)) continue;
          const Uz = Wz ? sz.unreliableRecorder : sz;
          if (!Uz || !Uz.has()) continue;
          const Kz = sz.encDescriptor;
          oz.changeTree = sz, oz.ref = sz.ref, oz.encoder = Kz.encoder, oz.filter = Kz.filter, oz.metadata = Kz.metadata, oz.treeIsFiltered = sz.isFiltered, oz.isSchema = Kz.isSchema, oz.filterBitmask = Kz.filterBitmask, oz.tags = Kz.tags, oz.structSwitchEmitted = !1, oz.isRootTree = sz === Oz, oz.shouldEmitSwitch = Xz || zz.offset > Fz || !oz.isRootTree, Uz.forEachWithCtx(oz, nF)
        }
        return Wz || Xz || !this._isStreamBroadcastMode || this._emitStreamBroadcast(sz, zz), zz.offset > sz.byteLength ? (sz = this._resizeBuffer(sz, zz.offset), zz.offset = Fz, this._encodeChannel(zz, tz, sz, Fz, Wz)) : sz.subarray(0, zz.offset)
      }
      encodeFullSync(zz, tz, sz, Fz) {
        let Wz = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : zz.offset;
        this.root.pendingFilterRefresh.length > 0 && os(this.root);
        const Xz = void 0 !== Fz,
          Oz = this.state[Dz],
          oz = this._encodeCtx;
        return oz.self = this, oz.buffer = tz, oz.it = zz, oz.view = Fz, oz.isEncodeAll = !0, oz.hasView = Xz, oz.emitFiltered = sz, oz.gen = ++this._fullSyncGen, oz.initialOffset = Wz, oz.rootChangeTree = Oz, LF(oz, Oz), zz.offset > tz.byteLength ? (tz = this._resizeBuffer(tz, zz.offset), zz.offset = Wz, this.encodeFullSync(zz, tz, sz, Fz, Wz)) : tz.subarray(0, zz.offset)
      }
      _resizeBuffer(zz, tz) {
        const sz = Math.ceil(tz / qF.BUFFER_SIZE) * qF.BUFFER_SIZE,
          Fz = new Uint8Array(sz);
        return Fz.set(zz), zz === this.sharedBuffer && (this.sharedBuffer = Fz), Fz
      }
      encodeAll() {
        let zz = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
            offset: 0
          },
          tz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.sharedBuffer;
        return this.encodeFullSync(zz, tz, !1)
      }
      encodeAllView(zz, tz, sz) {
        let Fz = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : this.sharedBuffer;
        const Wz = sz.offset;
        return Fz = this.encodeFullSync(sz, Fz, !0, zz, Wz), aF(Fz.subarray(0, tz), Fz.subarray(Wz, sz.offset))
      }
      ensureCapacity(zz, tz) {
        if (tz + qF.BUFFER_SIZE <= zz.byteLength) return zz;
        const sz = Math.ceil((tz + qF.BUFFER_SIZE) / qF.BUFFER_SIZE) * qF.BUFFER_SIZE,
          Fz = new Uint8Array(sz);
        return Fz.set(zz.subarray(0, tz)), zz === this.sharedBuffer && (this.sharedBuffer = Fz), Fz
      }
      encodeView(zz, tz, sz) {
        let Fz = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : this.sharedBuffer,
          Xz = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4];
        const Oz = sz.offset;
        this._emitStreamPriority(zz);
        for (const vz of zz.changes.keys()) {
          const tz = zz.changes.get(vz),
            Xz = this.root.changeTrees[vz];
          if (void 0 === Xz) {
            zz.changes.delete(vz);
            continue
          }
          if (0 === tz.size) continue;
          const Oz = Xz.encDescriptor,
            Uz = Oz.encoder,
            Kz = Oz.metadata,
            uz = Xz.ref,
            bz = Xz.refTarget;
          Fz = this.ensureCapacity(Fz, sz.offset), Fz[sz.offset++] = 255, tt.number(Fz, uz[oz], sz);
          for (const [vz, wz] of tz) {
            let tz;
            if (-1 === vz) {
              const zz = bz.tmpItems,
                tz = bz.deletedIndexes;
              for (let Oz = 0; Oz < zz.length; Oz++) void 0 !== zz[Oz] && !0 !== tz[Oz] && Uz(this, Fz, Xz, Oz, Wz.ADD, sz, !1, !0, Kz);
              continue
            }
            if ("number" === typeof vz) tz = vz;
            else {
              const sz = vz.indexInParent(uz);
              if (void 0 === sz) continue;
              if (tz = sz, wz === Wz.ADD && Xz.getChange(tz) === Wz.DELETE) {
                zz.changes.delete(vz.ref[oz]);
                continue
              }
            }
            Uz(this, Fz, Xz, tz, void 0 !== bz[Nz](tz) && wz || Wz.DELETE, sz, !1, !0, Kz)
          }
        }
        return zz.changes.clear(), Fz = this.encode(sz, zz, Fz), Xz ? aF(Fz.subarray(0, tz), Fz.subarray(Oz, sz.offset)) : Fz.subarray(Oz, sz.offset)
      }
      encodeUnreliableView(zz, tz, sz) {
        let Fz = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : this.sharedBuffer;
        const Wz = sz.offset;
        return Fz = this.encodeUnreliable(sz, zz, Fz, Wz), aF(Fz.subarray(0, tz), Fz.subarray(Wz, sz.offset))
      }
      _emitStreamBroadcast(zz, tz) {
        const sz = this.root.streamTrees;
        for (const Fz of sz) {
          const sz = Fz,
            Xz = sz[Dz],
            Oz = sz[oz];
          if (void 0 === Oz) continue;
          const vz = sz._stream,
            Uz = vz.broadcastDeletes,
            Kz = vz.broadcastPending,
            uz = vz.sentBroadcast,
            bz = Uz.size > 0,
            wz = Kz.size > 0,
            gz = Xz.encDescriptor,
            Hz = gz.encoder,
            Bz = gz.metadata;
          if (bz || wz) {
            if (zz[tz.offset++] = 255, tt.number(zz, Oz, tz), bz) {
              for (const sz of Uz) Hz(this, zz, Xz, sz, Wz.DELETE, tz, !1, !1, Bz);
              Uz.clear()
            }
            const Fz = vz.maxPerTick,
              wz = [];
            let gz = 0;
            const Pz = [];
            for (const Oz of Kz) {
              if (gz >= Fz) break;
              const oz = sz[Nz](Oz);
              void 0 !== oz ? (Hz(this, zz, Xz, Oz, Wz.ADD, tz, !1, !1, Bz), uz.add(Oz), wz.push(oz), Pz.push(Oz), gz++) : Pz.push(Oz)
            }
            for (const zz of Pz) Kz.delete(zz);
            for (const sz of wz) {
              const Fz = sz[Dz];
              if (void 0 === Fz) continue;
              const Xz = sz[oz];
              if (void 0 === Xz) continue;
              zz[tz.offset++] = 255, tt.number(zz, Xz, tz);
              const Oz = Fz.encDescriptor,
                vz = Oz.encoder,
                Uz = Oz.metadata;
              Fz.forEachLive((sz => {
                Vt.hasUnreliableAtIndex(Uz, sz) || vz(this, zz, Fz, sz, Wz.ADD, tz, !1, !1, Uz)
              }))
            }
          }
          for (const Fz of uz) {
            const Wz = sz[Nz](Fz);
            if (void 0 === Wz) continue;
            const Xz = Wz[Dz];
            if (void 0 === Xz || !Xz.has()) continue;
            const Oz = Wz[oz];
            if (void 0 === Oz) continue;
            zz[tz.offset++] = 255, tt.number(zz, Oz, tz);
            const vz = Xz.encDescriptor,
              Uz = vz.encoder,
              Kz = vz.metadata;
            Xz.forEach(((sz, Fz) => {
              sz < 0 || Vt.hasUnreliableAtIndex(Kz, sz) || Uz(this, zz, Xz, sz, Fz, tz, !1, !1, Kz)
            }))
          }
        }
      }
      _emitStreamPriority(zz) {
        const tz = this.root.streamTrees;
        if (0 === tz.size) return;
        const sz = zz.id;
        for (const Fz of tz) {
          const tz = Fz,
            Xz = tz._stream,
            Oz = Xz.pendingByView.get(sz);
          if (void 0 === Oz || 0 === Oz.size) continue;
          const vz = Xz.priorityByView?.get(sz),
            Uz = void 0 !== vz,
            Kz = Xz.priority,
            uz = Xz.maxPerTick,
            bz = [],
            wz = [];
          if (Uz || void 0 !== Kz) {
            const sz = [],
              Fz = [];
            let Wz = 0;
            for (const Xz of Oz) {
              const Oz = tz[Nz](Xz);
              if (void 0 === Oz) {
                wz.push(Xz);
                continue
              }
              const oz = Uz ? vz(Oz) : Kz(zz, Oz);
              if (Wz < uz) {
                let zz = Wz++;
                for (; zz > 0 && Fz[zz - 1] < oz;) Fz[zz] = Fz[zz - 1], sz[zz] = sz[zz - 1], zz--;
                Fz[zz] = oz, sz[zz] = Xz
              } else if (oz > Fz[uz - 1]) {
                let zz = uz - 1;
                for (; zz > 0 && Fz[zz - 1] < oz;) Fz[zz] = Fz[zz - 1], sz[zz] = sz[zz - 1], zz--;
                Fz[zz] = oz, sz[zz] = Xz
              }
            }
            for (let zz = 0; zz < Wz; zz++) bz.push(sz[zz])
          } else
            for (const zz of Oz) {
              if (bz.length >= uz) break;
              bz.push(zz)
            }
          for (const zz of wz) Oz.delete(zz);
          const gz = bz.length;
          let Hz = Xz.sentByView.get(sz);
          void 0 === Hz && (Hz = new Set, Xz.sentByView.set(sz, Hz));
          for (let sz = 0; sz < gz; sz++) {
            const Fz = bz[sz],
              Xz = tz[Nz](Fz);
            if (void 0 === Xz) {
              Oz.delete(Fz);
              continue
            }
            zz._addImmediate(Xz);
            const vz = Xz[Dz];
            if (void 0 !== vz) {
              const tz = Xz[oz];
              let sz = zz.changes.get(tz);
              void 0 === sz && (sz = new Map, zz.changes.set(tz, sz));
              const Fz = vz.metadata;
              vz.forEachLive((zz => {
                Vt.hasUnreliableAtIndex(Fz, zz) || sz.set(zz, Wz.ADD)
              }))
            }
            Oz.delete(Fz), Hz.add(Fz)
          }
        }
      }
      discardChanges() {
        const zz = this.root.changes;
        let tz = zz.next;
        const sz = this.root;
        for (; tz;) {
          const zz = tz.next;
          tz.changeTree.endEncode(), sz.releaseNode(tz), tz = zz
        }
        zz.next = void 0, zz.tail = void 0
      }
      discardUnreliableChanges() {
        const zz = this.root.unreliableChanges;
        let tz = zz.next;
        const sz = this.root;
        for (; tz;) {
          const zz = tz.next;
          tz.changeTree.endEncodeUnreliable(), sz.releaseNode(tz), tz = zz
        }
        zz.next = void 0, zz.tail = void 0
      }
      tryEncodeTypeId(zz, tz, sz, Fz) {
        const Wz = this.context.getTypeId(tz),
          Xz = this.context.getTypeId(sz);
        void 0 !== Xz ? Wz !== Xz && (zz[Fz.offset++] = 213, tt.number(zz, Xz, Fz)) : console.warn(`@colyseus/schema WARNING: Class "${sz.name}" is not registered on TypeRegistry - Please either tag the class with @entity or define a @type() field.`)
      }
      get hasChanges() {
        return void 0 !== this.root.changes.next || this._hasStreamBacklog()
      }
      get _isStreamBroadcastMode() {
        return 0 === this.root.activeViews.size && this.root.streamTrees.size > 0
      }
      _hasStreamBacklog() {
        const zz = this.root;
        if (0 === zz.streamTrees.size) return !1;
        const tz = 0 === zz.activeViews.size;
        for (const sz of zz.streamTrees)
          if (tz ? Tt(sz) : Gt(sz, zz)) return !0;
        return !1
      }
      get hasUnreliableChanges() {
        return void 0 !== this.root.unreliableChanges.next
      }
    }
    class SF extends Error {
      constructor(zz) {
        super(zz), this.name = "DecodingWarning"
      }
    }
    const VF = {
      value: 0,
      enumerable: !1,
      writable: !0
    };
    class RF {
      refs = new Map;
      refCount = {};
      deletedRefs = new Set;
      callbacks = {};
      nextUniqueId = 0;
      getNextUniqueId() {
        return this.nextUniqueId++
      }
      addRef(zz, tz) {
        let sz = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        this.refs.set(zz, tz), void 0 === tz[oz] ? (VF.value = zz, Object.defineProperty(tz, oz, VF)) : tz[oz] !== zz && (tz[oz] = zz), sz && (this.refCount[zz] = (this.refCount[zz] || 0) + 1), this.deletedRefs.has(zz) && this.deletedRefs.delete(zz)
      }
      removeRef(zz) {
        const tz = this.refCount[zz];
        if (void 0 !== tz)
          if (0 !== tz)(this.refCount[zz] = tz - 1) <= 0 && this.deletedRefs.add(zz);
          else try {
            const tz = this.refs.get(zz);
            throw new SF(`trying to remove refId '${zz}' with 0 refCount (${tz.constructor.name}: ${JSON.stringify(tz)})`)
          } catch (vW) {
            console.warn(vW)
          } else try {
            throw new SF("trying to remove refId that doesn't exist: " + zz)
          } catch (vW) {
            console.warn(vW)
          }
      }
      clearRefs() {
        this.refs.clear(), this.deletedRefs.clear(), this.callbacks = {}, this.refCount = {}
      }
      garbageCollectDeletedRefs() {
        this.deletedRefs.forEach((zz => {
          if (this.refCount[zz] > 0) return;
          const tz = this.refs.get(zz),
            sz = tz.constructor[Symbol.metadata];
          if (null != sz)
            for (const Fz in sz) {
              const zz = tz[sz[Fz].name];
              if ("object" === typeof zz && zz) {
                const tz = zz[oz];
                void 0 === tz || this.deletedRefs.has(tz) || this.removeRef(tz)
              }
            } else "function" === typeof tz[gz] && Array.from(tz.values()).forEach((zz => {
              const tz = zz[oz];
              void 0 === tz || this.deletedRefs.has(tz) || this.removeRef(tz)
            }));
          this.refs.delete(zz), delete this.refCount[zz], delete this.callbacks[zz]
        })), this.deletedRefs.clear()
      }
      addCallback(zz, tz, sz) {
        if (void 0 === zz) {
          const zz = "number" === typeof tz ? Wz[tz] : tz;
          throw new Error(`Can't addCallback on '${zz}' (refId is undefined)`)
        }
        return this.callbacks[zz] || (this.callbacks[zz] = {}), this.callbacks[zz][tz] || (this.callbacks[zz][tz] = []), this.callbacks[zz][tz].push(sz), () => this.removeCallback(zz, tz, sz)
      }
      removeCallback(zz, tz, sz) {
        const Fz = this.callbacks?.[zz]?.[tz]?.indexOf(sz);
        void 0 !== Fz && -1 !== Fz && yF(this.callbacks[zz][tz], Fz)
      }
    }
    class pF {
      context;
      state;
      root;
      currentRefId = 0;
      yJ;
      resyncVisited = null;
      resyncDamaged = !1;
      constructor(zz, tz) {
        this.setState(zz), this.context = tz || new kt(zz.constructor)
      }
      setState(zz) {
        this.state = zz, this.root = new RF, this.root.addRef(0, zz)
      }
      decode(zz) {
        let tz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
            offset: 0
          },
          sz = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : this.state;
        const Wz = void 0 !== this.yJ ? [] : null,
          Xz = this.root,
          Oz = zz.byteLength;
        let oz = sz.constructor[Kz];
        for (this.currentRefId = 0; tz.offset < Oz;) {
          if (zz[tz.offset] == Fz) {
            tz.offset++, sz[rz]?.();
            const Fz = Pt.number(zz, tz),
              Wz = Xz.refs.get(Fz);
            Wz ? (sz = Wz, oz = sz.constructor[Kz], this.currentRefId = Fz) : (console.error(`"refId" not found: ${Fz}`, {
              previousRef: sz,
              previousRefId: this.currentRefId
            }), console.warn("Please report this issue to the developers."), this.skipCurrentStructure(zz, tz, Oz));
            continue
          } - 1 !== oz(this, zz, tz, sz, Wz) || (console.warn("@colyseus/schema: definition mismatch"), this.skipCurrentStructure(zz, tz, Oz))
        }
        return sz[rz]?.(), null !== this.resyncVisited && function(zz, tz) {
          zz.resyncDamaged ? console.warn("@colyseus/schema: resync sweep skipped \u2014 parts of the payload could not be decoded. Stale entries may persist until the next resync.") : ls(zz, zz.state, new Set, tz)
        }(this, Wz), null !== Wz && this.yJ?.(Wz), Xz.garbageCollectDeletedRefs(), Wz
      }
      decodeResync(zz) {
        let tz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
          offset: 0
        };
        this.resyncVisited = new Map, this.resyncDamaged = !1;
        try {
          return this.decode(zz, tz)
        } finally {
          this.resyncVisited = null
        }
      }
      skipCurrentStructure(zz, tz, sz) {
        null !== this.resyncVisited && (this.resyncDamaged = !0);
        const Wz = {
          offset: tz.offset
        };
        for (; tz.offset < sz && (zz[tz.offset] !== Fz || (Wz.offset = tz.offset + 1, !this.root.refs.has(Pt.number(zz, Wz))));) tz.offset++
      }
      getInstanceType(zz, tz, sz) {
        let Fz;
        if (213 === zz[tz.offset]) {
          tz.offset++;
          const sz = Pt.number(zz, tz);
          Fz = this.context.get(sz)
        }
        return Fz || sz
      }
      createInstanceOfType(zz) {
        return zz.initializeForDecoder()
      }
      removeChildRefs(zz, tz) {
        const sz = "string" !== typeof zz[gz],
          Fz = zz[oz];
        zz.forEach(((Xz, Oz) => {
          tz?.push({
            ref: zz,
            refId: Fz,
            op: Wz.DELETE,
            field: Oz,
            value: void 0,
            previousValue: Xz
          }), sz && this.root.removeRef(Xz[oz])
        }))
      }
    }
    const fF = GF({
        min: gF.float64(),
        max: gF.float64(),
        bits: gF.uint8(),
        mode: gF.uint8()
      }, "QuantizedDescriptor"),
      EF = GF({
        name: gF.string(),
        type: gF.string(),
        referencedType: gF.number(),
        childPrimitive: gF.string(),
        quantized: gF.ref(fF).optional()
      }, "ReflectionField"),
      zW = GF({
        id: gF.number(),
        extendsId: gF.number(),
        fields: gF.array(EF)
      }, "ReflectionType"),
      tW = GF({
        types: gF.array(zW),
        rootType: gF.number()
      }, "Reflection");

    function sW(zz) {
      const tz = zz.root,
        sz = tz.callbacks,
        Fz = new WeakMap;
      let Xz;

      function Oz(zz, sz) {
        let Uz = sz.instance?.constructor[Symbol.metadata] || zz,
          Kz = sz.instance && "function" === typeof sz.instance.forEach || zz && !cF.is(zz);
        if (Uz && !Kz) {
          const zz = function(zz, Wz, Oz, vz) {
            return vz && void 0 !== sz.instance[Wz] && !Fz.has(Xz) && Oz(sz.instance[Wz], void 0), tz.addCallback(zz[oz], Wz, Oz)
          };
          return new Proxy({
            listen: function(tz, Wz) {
              let Oz = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
              if (sz.instance) return zz(sz.instance, tz, Wz, Oz);
              {
                let oz = () => {};
                return sz.onInstanceAvailable(((sz, vz) => {
                  oz = zz(sz, tz, Wz, Oz && vz && !Fz.has(Xz))
                })), () => oz()
              }
            },
            onChange: function(zz) {
              return tz.addCallback(sz.instance[oz], Wz.REPLACE, zz)
            },
            bindTo: function(zz, Fz) {
              return Fz || (Fz = Object.keys(Uz).map((zz => Uz[zz].name))), tz.addCallback(sz.instance[oz], Wz.REPLACE, (() => {
                Fz.forEach((tz => zz[tz] = sz.instance[tz]))
              }))
            }
          }, {
            get(zz, tz) {
              const Fz = Uz[Uz[tz]];
              if (Fz) {
                const zz = sz.instance?.[tz],
                  Wz = Fz => {
                    const Wz = vz(sz.instance).listen(tz, ((zz, tz) => {
                      Fz(zz, !1), Wz?.()
                    }), !1);
                    void 0 !== zz?.[oz] && Fz(zz, !0)
                  };
                return Oz(Fz.type, {
                  instance: void 0 !== zz?.[oz] && zz,
                  parentInstance: sz.instance,
                  onInstanceAvailable: Wz
                })
              }
              return zz[tz]
            },
            has: (zz, tz) => void 0 !== Uz[tz],
            set(zz, tz, sz) {
              throw new Error("not allowed")
            },
            deleteProperty(zz, tz) {
              throw new Error("not allowed")
            }
          })
        } {
          const zz = function(zz, sz, Oz) {
              return Oz && zz.forEach(((zz, tz) => sz(zz, tz))), tz.addCallback(zz[oz], Wz.ADD, ((zz, tz) => {
                Fz.set(sz, !0), Xz = sz, sz(zz, tz), Fz.delete(sz), Xz = void 0
              }))
            },
            Oz = function(zz, sz) {
              return tz.addCallback(zz[oz], Wz.DELETE, sz)
            },
            vz = function(zz, sz) {
              return tz.addCallback(zz[oz], Wz.REPLACE, sz)
            };
          return new Proxy({
            Hr: function(tz) {
              let Wz = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
              if (sz.instance) return zz(sz.instance, tz, Wz && !Fz.has(Xz));
              if (sz.onInstanceAvailable) {
                let Oz = () => {};
                return sz.onInstanceAvailable(((sz, oz) => {
                  Oz = zz(sz, tz, Wz && oz && !Fz.has(Xz))
                })), () => Oz()
              }
            },
            NJ: function(zz) {
              if (sz.instance) return Oz(sz.instance, zz);
              if (sz.onInstanceAvailable) {
                let tz = () => {};
                return sz.onInstanceAvailable((sz => {
                  tz = Oz(sz, zz)
                })), () => tz()
              }
            },
            onChange: function(zz) {
              if (sz.instance) return vz(sz.instance, zz);
              if (sz.onInstanceAvailable) {
                let tz = () => {};
                return sz.onInstanceAvailable((sz => {
                  tz = vz(sz, zz)
                })), () => tz()
              }
            }
          }, {
            get(zz, tz) {
              if (!zz[tz]) throw new Error(`Can't access '${tz}' through callback proxy. access the instance directly.`);
              return zz[tz]
            },
            has: (zz, tz) => void 0 !== zz[tz],
            set(zz, tz, sz) {
              throw new Error("not allowed")
            },
            deleteProperty(zz, tz) {
              throw new Error("not allowed")
            }
          })
        }
      }

      function vz(zz) {
        return Oz(void 0, {
          instance: zz
        })
      }
      return zz.yJ = function(zz) {
        const tz = new Set;
        for (let Fz = 0, Xz = zz.length; Fz < Xz; Fz++) {
          const Xz = zz[Fz],
            Oz = Xz.refId,
            vz = Xz.ref,
            Uz = sz[Oz];
          if (Uz) {
            if ((Xz.op & Wz.DELETE) === Wz.DELETE && cF.isSchema(Xz.previousValue)) {
              const zz = sz[Xz.previousValue[oz]]?.[Wz.DELETE];
              for (let tz = zz?.length - 1; tz >= 0; tz--) zz[tz]()
            }
            if (cF.isSchema(vz)) {
              if (!tz.has(Oz)) {
                const zz = Uz?.[Wz.REPLACE];
                for (let tz = zz?.length - 1; tz >= 0; tz--) zz[tz]()
              }
              if (Uz.hasOwnProperty(Xz.field)) {
                const zz = Uz[Xz.field];
                for (let tz = zz?.length - 1; tz >= 0; tz--) zz[tz](Xz.value, Xz.previousValue)
              }
            } else {
              if ((Xz.op & Wz.DELETE) === Wz.DELETE) {
                if (void 0 !== Xz.previousValue) {
                  const zz = Uz[Wz.DELETE];
                  for (let tz = zz?.length - 1; tz >= 0; tz--) zz[tz](Xz.previousValue, Xz.dynamicIndex ?? Xz.field)
                }
                if ((Xz.op & Wz.ADD) === Wz.ADD) {
                  const zz = Uz[Wz.ADD];
                  for (let tz = zz?.length - 1; tz >= 0; tz--) zz[tz](Xz.value, Xz.dynamicIndex ?? Xz.field)
                }
              } else if ((Xz.op & Wz.ADD) === Wz.ADD && Xz.previousValue !== Xz.value) {
                const zz = Uz[Wz.ADD];
                for (let tz = zz?.length - 1; tz >= 0; tz--) zz[tz](Xz.value, Xz.dynamicIndex ?? Xz.field)
              }
              if (Xz.value !== Xz.previousValue && (void 0 !== Xz.value || void 0 !== Xz.previousValue)) {
                const zz = Uz[Wz.REPLACE];
                for (let tz = zz?.length - 1; tz >= 0; tz--) zz[tz](Xz.value, Xz.dynamicIndex ?? Xz.field)
              }
            }
            tz.add(Oz)
          }
        }
      }, vz
    }

    function FW(zz, tz) {
      zz.yJ = tz
    }
    tW.encode = function(zz) {
      let tz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
        offset: 0
      };
      const sz = zz.context,
        Fz = new tW,
        Wz = new qF(Fz),
        Xz = sz.schemas.get(zz.state.constructor);
      Xz > 0 && (Fz.rootType = Xz);
      const Oz = new Set,
        oz = {},
        vz = zz => {
          if (void 0 === zz.extendsId || Oz.has(zz.extendsId)) {
            Oz.add(zz.id), Fz.types.push(zz);
            const tz = oz[zz.id];
            void 0 !== tz && (delete oz[zz.id], tz.forEach((zz => vz(zz))))
          } else void 0 === oz[zz.extendsId] && (oz[zz.extendsId] = []), oz[zz.extendsId].push(zz)
        };
      sz.schemas.forEach(((zz, tz) => {
        const Fz = new zW;
        Fz.id = Number(zz);
        const Wz = Object.getPrototypeOf(tz);
        Wz !== cF && (Fz.extendsId = sz.schemas.get(Wz));
        const Xz = tz[Symbol.metadata];
        if (Xz !== Wz[Symbol.metadata]) {
          const zz = Xz[Cz] ?? -1;
          for (let tz = 0; tz <= zz; tz++) {
            const zz = Xz[tz];
            if (void 0 === zz) continue;
            const Wz = zz.name;
            if (!Object.prototype.hasOwnProperty.call(Xz, Wz)) continue;
            const Oz = new EF;
            let oz;
            if (Oz.name = Wz, "string" === typeof zz.type) oz = zz.type;
            else if (Mt(zz.type)) {
              const tz = zz.type.quantized;
              oz = "quantized";
              const sz = new fF;
              sz.min = tz.min, sz.max = tz.max, sz.bits = tz.bits, sz.mode = tz.wrap ? 1 : 0, Oz.quantized = sz
            } else {
              let tz;
              cF.is(zz.type) ? (oz = "ref", tz = zz.type) : (oz = Object.keys(zz.type)[0], "string" === typeof zz.type[oz] ? Oz.childPrimitive = zz.type[oz] : tz = zz.type[oz]), Oz.referencedType = tz ? sz.getTypeId(tz) : -1
            }
            Oz.type = oz, Fz.fields.push(Oz)
          }
        }
        vz(Fz)
      }));
      for (const Uz in oz) oz[Uz].forEach((zz => Fz.types.push(zz)));
      return Wz.encodeAll(tz).slice(0, tz.offset)
    }, tW.decode = function(zz, tz) {
      const sz = new tW;
      new pF(sz).decode(zz, tz);
      const Fz = new kt;
      sz.types.forEach((zz => {
        const tz = Fz.get(zz.extendsId) ?? cF,
          sz = class extends tz {};
        kt.register(sz), Fz.add(sz, zz.id)
      }), {});
      sz.types.forEach((zz => {
        const tz = Fz.get(zz.id),
          Wz = Vt.initialize(tz),
          Xz = [];
        let Oz = zz;
        do {
          Xz.push(Oz), Oz = sz.types.find((zz => zz.id === Oz.extendsId))
        } while (Oz);
        let oz = 0;
        Xz.reverse().forEach((zz => {
          ((zz, tz, sz) => {
            tz.fields.forEach(((tz, Wz) => {
              const Xz = sz + Wz;
              if (void 0 !== tz.quantized) {
                const sz = tz.quantized;
                Vt.addField(zz, Xz, tz.name, {
                  quantized: yt({
                    min: sz.min,
                    max: sz.max,
                    bits: sz.bits,
                    mode: 1 === sz.mode ? "wrap" : "clamp"
                  })
                })
              } else if (void 0 !== tz.referencedType) {
                const sz = tz.type,
                  Wz = Fz.get(tz.referencedType) ?? tz.childPrimitive;
                "ref" === sz ? Vt.addField(zz, Xz, tz.name, Wz) : Vt.addField(zz, Xz, tz.name, {
                  [sz]: Wz
                })
              } else Vt.addField(zz, Xz, tz.name, tz.type)
            }))
          })(Wz, zz, oz), oz += zz.fields.length
        }))
      }));
      const Wz = new(Fz.get(sz.rootType || 0));
      return new pF(Wz, Fz)
    }, tW.makeEncodable = function(zz) {
      const tz = zz[Symbol.metadata];
      if (!tz) return zz;
      const sz = tz[Cz];
      if (void 0 === sz) return zz;
      for (let Fz = 0; Fz <= sz; Fz++) {
        const sz = tz[Fz];
        sz && Vt.defineField(zz, tz, Fz, sz.name, sz.type)
      }
      return Object.prototype.hasOwnProperty.call(zz, Jz) && delete zz[Jz], zz
    };
    class WW {
      Gw;
      uniqueRefIds = new Set;
      isTriggering = !1;
      constructor(zz) {
        this.Gw = zz, this.Gw.yJ = this.yJ.bind(this)
      }
      get callbacks() {
        return this.Gw.root.callbacks
      }
      get state() {
        return this.Gw.state
      }
      addCallback(zz, tz, sz) {
        return this.Gw.root.addCallback(zz, tz, sz)
      }
      addCallbackOrWaitCollectionAvailable(zz, tz, sz, Fz) {
        let Xz = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4],
          Oz = () => {};
        const vz = () => Oz(),
          Uz = zz[tz];
        if (Uz && void 0 !== Uz[oz]) return Xz = Xz && !1 === this.isTriggering, sz === Wz.ADD && Xz && Uz.forEach(((zz, tz) => {
          Fz(zz, tz)
        })), this.addCallback(Uz[oz], sz, Fz);
        {
          let Wz;
          return Wz = this.addCallback(zz[oz], tz, ((zz, tz) => {
            null !== zz && void 0 !== zz && (Wz(), Oz = this.addCallback(zz[oz], sz, Fz))
          })), Oz = Wz, vz
        }
      }
      listen() {
        return "string" === typeof(arguments.length <= 0 ? void 0 : arguments[0]) ? this.listenInstance(this.state, arguments.length <= 0 ? void 0 : arguments[0], arguments.length <= 1 ? void 0 : arguments[1], arguments.length <= 2 ? void 0 : arguments[2]) : this.listenInstance(arguments.length <= 0 ? void 0 : arguments[0], arguments.length <= 1 ? void 0 : arguments[1], arguments.length <= 2 ? void 0 : arguments[2], arguments.length <= 3 ? void 0 : arguments[3])
      }
      listenInstance(zz, tz, sz) {
        let Fz = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
        Fz = Fz && !1 === this.isTriggering;
        const Wz = zz[tz];
        return Fz && null !== Wz && void 0 !== Wz && sz(Wz, void 0), this.addCallback(zz[oz], tz, sz)
      }
      onChange() {
        if (2 === arguments.length && "string" !== typeof(arguments.length <= 0 ? void 0 : arguments[0])) {
          const zz = arguments.length <= 0 ? void 0 : arguments[0],
            tz = arguments.length <= 1 ? void 0 : arguments[1];
          return this.addCallback(zz[oz], Wz.REPLACE, tz)
        }
        return "string" === typeof(arguments.length <= 0 ? void 0 : arguments[0]) ? this.addCallbackOrWaitCollectionAvailable(this.state, arguments.length <= 0 ? void 0 : arguments[0], Wz.REPLACE, arguments.length <= 1 ? void 0 : arguments[1]) : this.addCallbackOrWaitCollectionAvailable(arguments.length <= 0 ? void 0 : arguments[0], arguments.length <= 1 ? void 0 : arguments[1], Wz.REPLACE, arguments.length <= 2 ? void 0 : arguments[2])
      }
      Hr() {
        return "string" === typeof(arguments.length <= 0 ? void 0 : arguments[0]) ? this.addCallbackOrWaitCollectionAvailable(this.state, arguments.length <= 0 ? void 0 : arguments[0], Wz.ADD, arguments.length <= 1 ? void 0 : arguments[1], !1 !== (arguments.length <= 2 ? void 0 : arguments[2])) : this.addCallbackOrWaitCollectionAvailable(arguments.length <= 0 ? void 0 : arguments[0], arguments.length <= 1 ? void 0 : arguments[1], Wz.ADD, arguments.length <= 2 ? void 0 : arguments[2], !1 !== (arguments.length <= 3 ? void 0 : arguments[3]))
      }
      NJ() {
        return "string" === typeof(arguments.length <= 0 ? void 0 : arguments[0]) ? this.addCallbackOrWaitCollectionAvailable(this.state, arguments.length <= 0 ? void 0 : arguments[0], Wz.DELETE, arguments.length <= 1 ? void 0 : arguments[1]) : this.addCallbackOrWaitCollectionAvailable(arguments.length <= 0 ? void 0 : arguments[0], arguments.length <= 1 ? void 0 : arguments[1], Wz.DELETE, arguments.length <= 2 ? void 0 : arguments[2])
      }
      bindTo(zz, tz, sz) {
        let Fz = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
        const Xz = zz.constructor[Symbol.metadata];
        sz || (sz = Object.keys(Xz).filter((zz => !isNaN(Number(zz)))).map((zz => Xz[zz].name)));
        const Oz = () => {
          for (const Fz of sz) {
            const sz = zz[Fz];
            void 0 !== sz && (tz[Fz] = sz)
          }
        };
        return Fz && Oz(), this.addCallback(zz[oz], Wz.REPLACE, Oz)
      }
      yJ(zz) {
        this.uniqueRefIds.clear(), this.isTriggering = !0;
        for (let tz = 0, sz = zz.length; tz < sz; tz++) {
          const sz = zz[tz],
            Fz = sz.refId,
            Xz = sz.ref,
            Oz = this.callbacks[Fz];
          if (Oz) {
            if ((sz.op & Wz.DELETE) === Wz.DELETE && cF.isSchema(sz.previousValue)) {
              const zz = sz.previousValue[oz],
                tz = this.callbacks[zz]?.[Wz.DELETE];
              if (tz)
                for (let sz = tz.length - 1; sz >= 0; sz--) try {
                  tz[sz]()
                } catch (vW) {
                  console.error(vW)
                }
            }
            if (cF.isSchema(Xz)) {
              if (!this.uniqueRefIds.has(Fz)) {
                const zz = Oz[Wz.REPLACE];
                if (zz)
                  for (let tz = zz.length - 1; tz >= 0; tz--) try {
                    zz[tz]()
                  } catch (vW) {
                    console.error(vW)
                  }
              }
              const zz = Oz[sz.field];
              if (zz)
                for (let tz = zz.length - 1; tz >= 0; tz--) try {
                  zz[tz](sz.value, sz.previousValue)
                } catch (vW) {
                  console.error(vW)
                }
            } else {
              const zz = sz.dynamicIndex ?? sz.field;
              if ((sz.op & Wz.DELETE) === Wz.DELETE) {
                if (void 0 !== sz.previousValue) {
                  const tz = Oz[Wz.DELETE];
                  if (tz)
                    for (let Fz = tz.length - 1; Fz >= 0; Fz--) try {
                      tz[Fz](sz.previousValue, zz)
                    } catch (vW) {
                      console.error(vW)
                    }
                }
                if ((sz.op & Wz.ADD) === Wz.ADD) {
                  const tz = Oz[Wz.ADD];
                  if (tz)
                    for (let Fz = tz.length - 1; Fz >= 0; Fz--) try {
                      tz[Fz](sz.value, zz)
                    } catch (vW) {
                      console.error(vW)
                    }
                }
              } else if ((sz.op & Wz.ADD) === Wz.ADD && sz.previousValue !== sz.value) {
                const tz = Oz[Wz.ADD];
                if (tz)
                  for (let Fz = tz.length - 1; Fz >= 0; Fz--) try {
                    tz[Fz](sz.value, zz)
                  } catch (vW) {
                    console.error(vW)
                  }
              }
              if (sz.value !== sz.previousValue) {
                const tz = Oz[Wz.REPLACE];
                if (tz)
                  for (let Fz = tz.length - 1; Fz >= 0; Fz--) try {
                    tz[Fz](zz, sz.value)
                  } catch (vW) {
                    console.error(vW)
                  }
              }
            }
            this.uniqueRefIds.add(Fz)
          }
        }
        this.isTriggering = !1
      }
    }
    const XW = {
      get(zz) {
        if (zz instanceof pF) return new WW(zz);
        if ("Gw" in zz.xH) return new WW(zz.xH.Gw);
        throw new Error("Invalid room or decoder")
      },
      getLegacy(zz) {
        if (zz instanceof pF) return sW(zz);
        if ("Gw" in zz.xH) return sW(zz.xH.Gw);
        throw new Error("Invalid room or decoder")
      },
      getRawChanges: (zz, tz) => FW(zz, tz)
    };
    class OW {
      _free = [];
      _factory;
      _maxSize;
      constructor(zz) {
        let tz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        this._factory = zz, this._maxSize = tz.maxSize ?? 1 / 0;
        const sz = tz.preallocate ?? 0;
        for (let Fz = 0; Fz < sz; Fz++) this._free.push(zz())
      }
      acquire() {
        return this._free.length > 0 ? this._free.pop() : this._factory()
      }
      release(zz) {
        cF.reset(zz), this._free.length < this._maxSize && this._free.push(zz)
      }
      get size() {
        return this._free.length
      }
    }

    function oW(zz) {
      return new OW((() => new zz), arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {})
    }
    xt("map", {
      constructor: oF
    }), xt("array", {
      constructor: XF
    }), xt("set", {
      constructor: UF
    }), xt("collection", {
      constructor: vF
    })
  },
  8589: (zz, tz, sz) => {
    sz.r(tz), sz.d(tz, {
      __addDisposableResource: () => Mz,
      __assign: () => Xz,
      __asyncDelegator: () => Iz,
      __asyncGenerator: () => Jz,
      __asyncValues: () => Cz,
      __await: () => mz,
      __awaiter: () => wz,
      __classPrivateFieldGet: () => jz,
      __classPrivateFieldIn: () => yz,
      __classPrivateFieldSet: () => Az,
      __createBinding: () => gz,
      __decorate: () => oz,
      __disposeResources: () => hz,
      __esDecorate: () => Uz,
      __exportStar: () => Hz,
      __extends: () => Wz,
      __generator: () => Dz,
      __importDefault: () => cz,
      __importStar: () => Tz,
      __makeTemplateObject: () => ez,
      __metadata: () => bz,
      __param: () => vz,
      __propKey: () => uz,
      __read: () => Pz,
      __rest: () => Oz,
      __rewriteRelativeImportExtension: () => Qz,
      __runInitializers: () => Kz,
      __setFunctionName: () => Nz,
      __spread: () => rz,
      __spreadArray: () => xz,
      __spreadArrays: () => Yz,
      __values: () => Bz,
      default: () => kz
    });
    var Fz = function(zz, tz) {
      return Fz = Object.setPrototypeOf || {
        __proto__: []
      }
      instanceof Array && function(zz, tz) {
        zz.__proto__ = tz
      } || function(zz, tz) {
        for (var sz in tz) Object.prototype.hasOwnProperty.call(tz, sz) && (zz[sz] = tz[sz])
      }, Fz(zz, tz)
    };

    function Wz(zz, tz) {
      if ("function" !== typeof tz && null !== tz) throw new TypeError("Class extends value " + String(tz) + " is not a constructor or null");

      function sz() {
        this.constructor = zz
      }
      Fz(zz, tz), zz.prototype = null === tz ? Object.create(tz) : (sz.prototype = tz.prototype, new sz)
    }
    var Xz = function() {
      return Xz = Object.assign || function(zz) {
        for (var tz, sz = 1, Fz = arguments.length; sz < Fz; sz++)
          for (var Wz in tz = arguments[sz]) Object.prototype.hasOwnProperty.call(tz, Wz) && (zz[Wz] = tz[Wz]);
        return zz
      }, Xz.apply(this, arguments)
    };

    function Oz(zz, tz) {
      var sz = {};
      for (var Fz in zz) Object.prototype.hasOwnProperty.call(zz, Fz) && tz.indexOf(Fz) < 0 && (sz[Fz] = zz[Fz]);
      if (null != zz && "function" === typeof Object.getOwnPropertySymbols) {
        var Wz = 0;
        for (Fz = Object.getOwnPropertySymbols(zz); Wz < Fz.length; Wz++) tz.indexOf(Fz[Wz]) < 0 && Object.prototype.propertyIsEnumerable.call(zz, Fz[Wz]) && (sz[Fz[Wz]] = zz[Fz[Wz]])
      }
      return sz
    }

    function oz(zz, tz, sz, Fz) {
      var Wz, Xz = arguments.length,
        Oz = Xz < 3 ? tz : null === Fz ? Fz = Object.getOwnPropertyDescriptor(tz, sz) : Fz;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) Oz = Reflect.decorate(zz, tz, sz, Fz);
      else
        for (var oz = zz.length - 1; oz >= 0; oz--)(Wz = zz[oz]) && (Oz = (Xz < 3 ? Wz(Oz) : Xz > 3 ? Wz(tz, sz, Oz) : Wz(tz, sz)) || Oz);
      return Xz > 3 && Oz && Object.defineProperty(tz, sz, Oz), Oz
    }

    function vz(zz, tz) {
      return function(sz, Fz) {
        tz(sz, Fz, zz)
      }
    }

    function Uz(zz, tz, sz, Fz, Wz, Xz) {
      function Oz(zz) {
        if (void 0 !== zz && "function" !== typeof zz) throw new TypeError("Function expected");
        return zz
      }
      for (var oz, vz = Fz.kind, Uz = "getter" === vz ? "get" : "setter" === vz ? "set" : "value", Kz = !tz && zz ? Fz.static ? zz : zz.prototype : null, uz = tz || (Kz ? Object.getOwnPropertyDescriptor(Kz, Fz.name) : {}), Nz = !1, bz = sz.length - 1; bz >= 0; bz--) {
        var wz = {};
        for (var Dz in Fz) wz[Dz] = "access" === Dz ? {} : Fz[Dz];
        for (var Dz in Fz.access) wz.access[Dz] = Fz.access[Dz];
        wz.addInitializer = function(zz) {
          if (Nz) throw new TypeError("Cannot add initializers after decoration has completed");
          Xz.push(Oz(zz || null))
        };
        var gz = (0, sz[bz])("accessor" === vz ? {
          get: uz.get,
          set: uz.set
        } : uz[Uz], wz);
        if ("accessor" === vz) {
          if (void 0 === gz) continue;
          if (null === gz || "object" !== typeof gz) throw new TypeError("Object expected");
          (oz = Oz(gz.get)) && (uz.get = oz), (oz = Oz(gz.set)) && (uz.set = oz), (oz = Oz(gz.init)) && Wz.unshift(oz)
        } else(oz = Oz(gz)) && ("field" === vz ? Wz.unshift(oz) : uz[Uz] = oz)
      }
      Kz && Object.defineProperty(Kz, Fz.name, uz), Nz = !0
    }

    function Kz(zz, tz, sz) {
      for (var Fz = arguments.length > 2, Wz = 0; Wz < tz.length; Wz++) sz = Fz ? tz[Wz].call(zz, sz) : tz[Wz].call(zz);
      return Fz ? sz : void 0
    }

    function uz(zz) {
      return "symbol" === typeof zz ? zz : "".concat(zz)
    }

    function Nz(zz, tz, sz) {
      return "symbol" === typeof tz && (tz = tz.description ? "[".concat(tz.description, "]") : ""), Object.defineProperty(zz, "name", {
        configurable: !0,
        value: sz ? "".concat(sz, " ", tz) : tz
      })
    }

    function bz(zz, tz) {
      if ("object" === typeof Reflect && "function" === typeof Reflect.metadata) return Reflect.metadata(zz, tz)
    }

    function wz(zz, tz, sz, Fz) {
      return new(sz || (sz = Promise))((function(Wz, Xz) {
        function Oz(zz) {
          try {
            vz(Fz.next(zz))
          } catch (tz) {
            Xz(tz)
          }
        }

        function oz(zz) {
          try {
            vz(Fz.throw(zz))
          } catch (tz) {
            Xz(tz)
          }
        }

        function vz(zz) {
          var tz;
          zz.done ? Wz(zz.value) : (tz = zz.value, tz instanceof sz ? tz : new sz((function(zz) {
            zz(tz)
          }))).then(Oz, oz)
        }
        vz((Fz = Fz.apply(zz, tz || [])).next())
      }))
    }

    function Dz(zz, tz) {
      var sz, Fz, Wz, Xz = {
          label: 0,
          sent: function() {
            if (1 & Wz[0]) throw Wz[1];
            return Wz[1]
          },
          trys: [],
          ops: []
        },
        Oz = Object.create(("function" === typeof Iterator ? Iterator : Object).prototype);
      return Oz.next = oz(0), Oz.throw = oz(1), Oz.return = oz(2), "function" === typeof Symbol && (Oz[Symbol.iterator] = function() {
        return this
      }), Oz;

      function oz(oz) {
        return function(vz) {
          return function(oz) {
            if (sz) throw new TypeError("Generator is already executing.");
            for (; Oz && (Oz = 0, oz[0] && (Xz = 0)), Xz;) try {
              if (sz = 1, Fz && (Wz = 2 & oz[0] ? Fz.return : oz[0] ? Fz.throw || ((Wz = Fz.return) && Wz.call(Fz), 0) : Fz.next) && !(Wz = Wz.call(Fz, oz[1])).done) return Wz;
              switch (Fz = 0, Wz && (oz = [2 & oz[0], Wz.value]), oz[0]) {
                case 0:
                case 1:
                  Wz = oz;
                  break;
                case 4:
                  return Xz.label++, {
                    value: oz[1],
                    done: !1
                  };
                case 5:
                  Xz.label++, Fz = oz[1], oz = [0];
                  continue;
                case 7:
                  oz = Xz.ops.pop(), Xz.trys.pop();
                  continue;
                default:
                  if (!(Wz = (Wz = Xz.trys).length > 0 && Wz[Wz.length - 1]) && (6 === oz[0] || 2 === oz[0])) {
                    Xz = 0;
                    continue
                  }
                  if (3 === oz[0] && (!Wz || oz[1] > Wz[0] && oz[1] < Wz[3])) {
                    Xz.label = oz[1];
                    break
                  }
                  if (6 === oz[0] && Xz.label < Wz[1]) {
                    Xz.label = Wz[1], Wz = oz;
                    break
                  }
                  if (Wz && Xz.label < Wz[2]) {
                    Xz.label = Wz[2], Xz.ops.push(oz);
                    break
                  }
                  Wz[2] && Xz.ops.pop(), Xz.trys.pop();
                  continue
              }
              oz = tz.call(zz, Xz)
            } catch (vz) {
              oz = [6, vz], Fz = 0
            } finally {
              sz = Wz = 0
            }
            if (5 & oz[0]) throw oz[1];
            return {
              value: oz[0] ? oz[1] : void 0,
              done: !0
            }
          }([oz, vz])
        }
      }
    }
    var gz = Object.create ? function(zz, tz, sz, Fz) {
      void 0 === Fz && (Fz = sz);
      var Wz = Object.getOwnPropertyDescriptor(tz, sz);
      Wz && !("get" in Wz ? !tz.__esModule : Wz.writable || Wz.configurable) || (Wz = {
        enumerable: !0,
        get: function() {
          return tz[sz]
        }
      }), Object.defineProperty(zz, Fz, Wz)
    } : function(zz, tz, sz, Fz) {
      void 0 === Fz && (Fz = sz), zz[Fz] = tz[sz]
    };

    function Hz(zz, tz) {
      for (var sz in zz) "default" === sz || Object.prototype.hasOwnProperty.call(tz, sz) || gz(tz, zz, sz)
    }

    function Bz(zz) {
      var tz = "function" === typeof Symbol && Symbol.iterator,
        sz = tz && zz[tz],
        Fz = 0;
      if (sz) return sz.call(zz);
      if (zz && "number" === typeof zz.length) return {
        next: function() {
          return zz && Fz >= zz.length && (zz = void 0), {
            value: zz && zz[Fz++],
            done: !zz
          }
        }
      };
      throw new TypeError(tz ? "Object is not iterable." : "Symbol.iterator is not defined.")
    }

    function Pz(zz, tz) {
      var sz = "function" === typeof Symbol && zz[Symbol.iterator];
      if (!sz) return zz;
      var Fz, Wz, Xz = sz.call(zz),
        Oz = [];
      try {
        for (;
          (void 0 === tz || tz-- > 0) && !(Fz = Xz.next()).done;) Oz.push(Fz.value)
      } catch (oz) {
        Wz = {
          error: oz
        }
      } finally {
        try {
          Fz && !Fz.done && (sz = Xz.return) && sz.call(Xz)
        } finally {
          if (Wz) throw Wz.error
        }
      }
      return Oz
    }

    function rz() {
      for (var zz = [], tz = 0; tz < arguments.length; tz++) zz = zz.concat(Pz(arguments[tz]));
      return zz
    }

    function Yz() {
      for (var zz = 0, tz = 0, sz = arguments.length; tz < sz; tz++) zz += arguments[tz].length;
      var Fz = Array(zz),
        Wz = 0;
      for (tz = 0; tz < sz; tz++)
        for (var Xz = arguments[tz], Oz = 0, oz = Xz.length; Oz < oz; Oz++, Wz++) Fz[Wz] = Xz[Oz];
      return Fz
    }

    function xz(zz, tz, sz) {
      if (sz || 2 === arguments.length)
        for (var Fz, Wz = 0, Xz = tz.length; Wz < Xz; Wz++) !Fz && Wz in tz || (Fz || (Fz = Array.prototype.slice.call(tz, 0, Wz)), Fz[Wz] = tz[Wz]);
      return zz.concat(Fz || Array.prototype.slice.call(tz))
    }

    function mz(zz) {
      return this instanceof mz ? (this.v = zz, this) : new mz(zz)
    }

    function Jz(zz, tz, sz) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var Fz, Wz = sz.apply(zz, tz || []),
        Xz = [];
      return Fz = Object.create(("function" === typeof AsyncIterator ? AsyncIterator : Object).prototype), Oz("next"), Oz("throw"), Oz("return", (function(zz) {
        return function(tz) {
          return Promise.resolve(tz).then(zz, Uz)
        }
      })), Fz[Symbol.asyncIterator] = function() {
        return this
      }, Fz;

      function Oz(zz, tz) {
        Wz[zz] && (Fz[zz] = function(tz) {
          return new Promise((function(sz, Fz) {
            Xz.push([zz, tz, sz, Fz]) > 1 || oz(zz, tz)
          }))
        }, tz && (Fz[zz] = tz(Fz[zz])))
      }

      function oz(zz, tz) {
        try {
          (sz = Wz[zz](tz)).value instanceof mz ? Promise.resolve(sz.value.v).then(vz, Uz) : Kz(Xz[0][2], sz)
        } catch (Fz) {
          Kz(Xz[0][3], Fz)
        }
        var sz
      }

      function vz(zz) {
        oz("next", zz)
      }

      function Uz(zz) {
        oz("throw", zz)
      }

      function Kz(zz, tz) {
        zz(tz), Xz.shift(), Xz.length && oz(Xz[0][0], Xz[0][1])
      }
    }

    function Iz(zz) {
      var tz, sz;
      return tz = {}, Fz("next"), Fz("throw", (function(zz) {
        throw zz
      })), Fz("return"), tz[Symbol.iterator] = function() {
        return this
      }, tz;

      function Fz(Fz, Wz) {
        tz[Fz] = zz[Fz] ? function(tz) {
          return (sz = !sz) ? {
            value: mz(zz[Fz](tz)),
            done: !1
          } : Wz ? Wz(tz) : tz
        } : Wz
      }
    }

    function Cz(zz) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var tz, sz = zz[Symbol.asyncIterator];
      return sz ? sz.call(zz) : (zz = Bz(zz), tz = {}, Fz("next"), Fz("throw"), Fz("return"), tz[Symbol.asyncIterator] = function() {
        return this
      }, tz);

      function Fz(sz) {
        tz[sz] = zz[sz] && function(tz) {
          return new Promise((function(Fz, Wz) {
            (function(zz, tz, sz, Fz) {
              Promise.resolve(Fz).then((function(tz) {
                zz({
                  value: tz,
                  done: sz
                })
              }), tz)
            })(Fz, Wz, (tz = zz[sz](tz)).done, tz.value)
          }))
        }
      }
    }

    function ez(zz, tz) {
      return Object.defineProperty ? Object.defineProperty(zz, "raw", {
        value: tz
      }) : zz.raw = tz, zz
    }
    var Zz = Object.create ? function(zz, tz) {
        Object.defineProperty(zz, "default", {
          enumerable: !0,
          value: tz
        })
      } : function(zz, tz) {
        zz.default = tz
      },
      Gz = function(zz) {
        return Gz = Object.getOwnPropertyNames || function(zz) {
          var tz = [];
          for (var sz in zz) Object.prototype.hasOwnProperty.call(zz, sz) && (tz[tz.length] = sz);
          return tz
        }, Gz(zz)
      };

    function Tz(zz) {
      if (zz && zz.__esModule) return zz;
      var tz = {};
      if (null != zz)
        for (var sz = Gz(zz), Fz = 0; Fz < sz.length; Fz++) "default" !== sz[Fz] && gz(tz, zz, sz[Fz]);
      return Zz(tz, zz), tz
    }

    function cz(zz) {
      return zz && zz.__esModule ? zz : {
        default: zz
      }
    }

    function jz(zz, tz, sz, Fz) {
      if ("a" === sz && !Fz) throw new TypeError("Private accessor was defined without a getter");
      if ("function" === typeof tz ? zz !== tz || !Fz : !tz.has(zz)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
      return "m" === sz ? Fz : "a" === sz ? Fz.call(zz) : Fz ? Fz.value : tz.get(zz)
    }

    function Az(zz, tz, sz, Fz, Wz) {
      if ("m" === Fz) throw new TypeError("Private method is not writable");
      if ("a" === Fz && !Wz) throw new TypeError("Private accessor was defined without a setter");
      if ("function" === typeof tz ? zz !== tz || !Wz : !tz.has(zz)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
      return "a" === Fz ? Wz.call(zz, sz) : Wz ? Wz.value = sz : tz.set(zz, sz), sz
    }

    function yz(zz, tz) {
      if (null === tz || "object" !== typeof tz && "function" !== typeof tz) throw new TypeError("Cannot use 'in' operator on non-object");
      return "function" === typeof zz ? tz === zz : zz.has(tz)
    }

    function Mz(zz, tz, sz) {
      if (null !== tz && void 0 !== tz) {
        if ("object" !== typeof tz && "function" !== typeof tz) throw new TypeError("Object expected.");
        var Fz, Wz;
        if (sz) {
          if (!Symbol.asyncDispose) throw new TypeError("Symbol.asyncDispose is not defined.");
          Fz = tz[Symbol.asyncDispose]
        }
        if (void 0 === Fz) {
          if (!Symbol.dispose) throw new TypeError("Symbol.dispose is not defined.");
          Fz = tz[Symbol.dispose], sz && (Wz = Fz)
        }
        if ("function" !== typeof Fz) throw new TypeError("Object not disposable.");
        Wz && (Fz = function() {
          try {
            Wz.call(this)
          } catch (zz) {
            return Promise.reject(zz)
          }
        }), zz.stack.push({
          value: tz,
          dispose: Fz,
          async: sz
        })
      } else sz && zz.stack.push({
        async: !0
      });
      return tz
    }
    var dz = "function" === typeof SuppressedError ? SuppressedError : function(zz, tz, sz) {
      var Fz = new Error(sz);
      return Fz.name = "SuppressedError", Fz.error = zz, Fz.suppressed = tz, Fz
    };

    function hz(zz) {
      function tz(tz) {
        zz.error = zz.hasError ? new dz(tz, zz.error, "An error was suppressed during disposal.") : tz, zz.hasError = !0
      }
      var sz, Fz = 0;
      return function Wz() {
        for (; sz = zz.stack.pop();) try {
          if (!sz.async && 1 === Fz) return Fz = 0, zz.stack.push(sz), Promise.resolve().then(Wz);
          if (sz.dispose) {
            var Xz = sz.dispose.call(sz.value);
            if (sz.async) return Fz |= 2, Promise.resolve(Xz).then(Wz, (function(zz) {
              return tz(zz), Wz()
            }))
          } else Fz |= 1
        } catch (Oz) {
          tz(Oz)
        }
        if (1 === Fz) return zz.hasError ? Promise.reject(zz.error) : Promise.resolve();
        if (zz.hasError) throw zz.error
      }()
    }

    function Qz(zz, tz) {
      return "string" === typeof zz && /^\.\.?\//.test(zz) ? zz.replace(/\.(tsx)$|((?:\.d)?)((?:\.[^./]+?)?)\.([cm]?)ts$/i, (function(zz, sz, Fz, Wz, Xz) {
        return sz ? tz ? ".jsx" : ".js" : !Fz || Wz && Xz ? Fz + Wz + "." + Xz.toLowerCase() + "js" : zz
      })) : zz
    }
    const kz = {
      __extends: Wz,
      __assign: Xz,
      __rest: Oz,
      __decorate: oz,
      __param: vz,
      __esDecorate: Uz,
      __runInitializers: Kz,
      __propKey: uz,
      __setFunctionName: Nz,
      __metadata: bz,
      __awaiter: wz,
      __generator: Dz,
      __createBinding: gz,
      __exportStar: Hz,
      __values: Bz,
      __read: Pz,
      __spread: rz,
      __spreadArrays: Yz,
      __spreadArray: xz,
      __await: mz,
      __asyncGenerator: Jz,
      __asyncDelegator: Iz,
      __asyncValues: Cz,
      __makeTemplateObject: ez,
      __importStar: Tz,
      __importDefault: cz,
      __classPrivateFieldGet: jz,
      __classPrivateFieldSet: Az,
      __classPrivateFieldIn: yz,
      __addDisposableResource: Mz,
      __disposeResources: hz,
      __rewriteRelativeImportExtension: Qz
    }
  }
};
Object.freeze(modules);
for (const zz in modules) Object.freeze(modules[zz]);