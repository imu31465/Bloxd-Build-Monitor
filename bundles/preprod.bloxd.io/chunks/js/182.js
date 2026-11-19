export const id = 182;
export const ids = [182];
export const modules = {
  8835: (zz, uz) => {
    uz.discordURLBuilder = function(zz) {
      var uz;
      const bz = (null === (uz = null === window || void 0 === window ? void 0 : window.location) || void 0 === uz ? void 0 : uz.hostname) || "localhost",
        Ez = zz.hostname.split("."),
        nz = !zz.hostname.includes("trycloudflare.com") && !zz.hostname.includes("discordsays.com") && Ez.length > 2 ? `/${Ez[0]}` : "";
      return zz.pathname.startsWith("/.proxy") ? `${zz.protocol}//${bz}${nz}${zz.pathname}${zz.search}` : `${zz.protocol}//${bz}/.proxy/colyseus${nz}${zz.pathname}${zz.search}`
    }
  },
  8819: (zz, uz, bz) => {
    var Ez, nz, iz, lz, Mz = bz(8747),
      tz = bz(8826),
      Hz = bz(8793);
    Ez = new WeakMap, nz = new WeakMap, iz = new WeakMap, lz = new WeakMap, uz.Auth = class {
      constructor(zz) {
        this.http = zz, this.settings = {
          path: "/auth",
          key: "colyseus-auth-token"
        }, Ez.set(this, !1), nz.set(this, void 0), iz.set(this, void 0), lz.set(this, Hz.createNanoEvents()), tz.getItem(this.settings.key, (zz => this.token = zz))
      }
      set token(zz) {
        this.http.authToken = zz
      }
      get token() {
        return this.http.authToken
      }
      onChange(zz) {
        const uz = Mz.__classPrivateFieldGet(this, lz, "f").on("change", zz);
        return Mz.__classPrivateFieldGet(this, Ez, "f") || Mz.__classPrivateFieldSet(this, nz, new Promise(((zz, uz) => {
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
        })), "f"), Mz.__classPrivateFieldSet(this, Ez, !0, "f"), uz
      }
      getUserData() {
        return Mz.__awaiter(this, void 0, void 0, (function*() {
          if (this.token) return (yield this.http.get(`${this.settings.path}/userdata`)).data;
          throw new Error("missing auth.token")
        }))
      }
      registerWithEmailAndPassword(zz, uz, bz) {
        return Mz.__awaiter(this, void 0, void 0, (function*() {
          const Ez = (yield this.http.post(`${this.settings.path}/register`, {
            body: {
              email: zz,
              password: uz,
              options: bz
            }
          })).data;
          return this.emitChange(Ez), Ez
        }))
      }
      signInWithEmailAndPassword(zz, uz) {
        return Mz.__awaiter(this, void 0, void 0, (function*() {
          const bz = (yield this.http.post(`${this.settings.path}/login`, {
            body: {
              email: zz,
              password: uz
            }
          })).data;
          return this.emitChange(bz), bz
        }))
      }
      signInAnonymously(zz) {
        return Mz.__awaiter(this, void 0, void 0, (function*() {
          const uz = (yield this.http.post(`${this.settings.path}/anonymous`, {
            body: {
              options: zz
            }
          })).data;
          return this.emitChange(uz), uz
        }))
      }
      sendPasswordResetEmail(zz) {
        return Mz.__awaiter(this, void 0, void 0, (function*() {
          return (yield this.http.post(`${this.settings.path}/forgot-password`, {
            body: {
              email: zz
            }
          })).data
        }))
      }
      signInWithProvider(zz) {
        return Mz.__awaiter(this, arguments, void 0, (function*(zz) {
          let uz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          return new Promise(((bz, Ez) => {
            const nz = uz.width || 480,
              lz = uz.height || 768,
              tz = this.token ? `?token=${this.token}` : "",
              Hz = `Login with ${zz[0].toUpperCase()+zz.substring(1)}`,
              Oz = this.http.client.getHttpEndpoint(`${uz.prefix||`${this.settings.path}/provider`}/${zz}${tz}`),
              pz = screen.width / 2 - nz / 2,
              dz = screen.height / 2 - lz / 2;
            Mz.__classPrivateFieldSet(this, iz, window.open(Oz, Hz, "toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no, copyhistory=no, width=" + nz + ", height=" + lz + ", top=" + dz + ", left=" + pz), "f");
            const Fz = zz => {
                void 0 === zz.data.user && void 0 === zz.data.token || (clearInterval(Zz), Mz.__classPrivateFieldGet(this, iz, "f").close(), Mz.__classPrivateFieldSet(this, iz, void 0, "f"), window.removeEventListener("message", Fz), void 0 !== zz.data.error ? Ez(zz.data.error) : (bz(zz.data), this.emitChange(zz.data)))
              },
              Zz = setInterval((() => {
                Mz.__classPrivateFieldGet(this, iz, "f") && !Mz.__classPrivateFieldGet(this, iz, "f").closed || (Mz.__classPrivateFieldSet(this, iz, void 0, "f"), Ez("ob"), window.removeEventListener("message", Fz))
              }), 200);
            window.addEventListener("message", Fz)
          }))
        }))
      }
      signOut() {
        return Mz.__awaiter(this, void 0, void 0, (function*() {
          this.emitChange({
            user: null,
            token: null
          })
        }))
      }
      emitChange(zz) {
        void 0 !== zz.token && (this.token = zz.token, null === zz.token ? tz.removeItem(this.settings.key) : tz.setItem(this.settings.key, zz.token)), Mz.__classPrivateFieldGet(this, lz, "f").emit("change", zz)
      }
    }
  },
  8743: (zz, uz, bz) => {
    var Ez, nz = bz(8747),
      iz = bz(8754),
      lz = bz(8756),
      Mz = bz(8812),
      tz = bz(8819),
      Hz = bz(8835);
    class Oz extends Error {
      constructor(zz, uz) {
        super(zz), this.code = uz, this.name = "MatchMakeError", Object.setPrototypeOf(this, Oz.prototype)
      }
    }
    const pz = "undefined" !== typeof window && "undefined" !== typeof(null === (Ez = null === window || void 0 === window ? void 0 : window.location) || void 0 === Ez ? void 0 : Ez.hostname) ? `${window.location.protocol.replace("http","ws")}//${window.location.hostname}${window.location.port&&`:${window.location.port}`}` : "ws://127.0.0.1:2567";
    class dz {
      constructor() {
        let zz = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : pz,
          uz = arguments.length > 1 ? arguments[1] : void 0;
        var bz, Ez;
        if ("string" === typeof zz) {
          const uz = zz.startsWith("/") ? new URL(zz, pz) : new URL(zz),
            bz = "https:" === uz.protocol || "wss:" === uz.protocol,
            Ez = Number(uz.port || (bz ? 443 : 80));
          this.settings = {
            hostname: uz.hostname,
            pathname: uz.pathname,
            port: Ez,
            secure: bz,
            searchParams: uz.searchParams.toString() || void 0
          }
        } else void 0 === zz.port && (zz.port = zz.secure ? 443 : 80), void 0 === zz.pathname && (zz.pathname = ""), this.settings = zz;
        this.settings.pathname.endsWith("/") && (this.settings.pathname = this.settings.pathname.slice(0, -1)), this.http = new Mz.HTTP(this, (null === uz || void 0 === uz ? void 0 : uz.headers) || {}), this.auth = new tz.Auth(this.http), this.urlBuilder = null === uz || void 0 === uz ? void 0 : uz.urlBuilder, !this.urlBuilder && "undefined" !== typeof window && (null === (Ez = null === (bz = null === window || void 0 === window ? void 0 : window.location) || void 0 === bz ? void 0 : bz.hostname) || void 0 === Ez ? void 0 : Ez.includes("discordsays.com")) && (this.urlBuilder = Hz.discordURLBuilder, console.log("Colyseus SDK: Discord Embedded SDK detected. Using custom URL builder."))
      }
      joinOrCreate(zz) {
        return nz.__awaiter(this, arguments, void 0, (function*(zz) {
          let uz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            bz = arguments.length > 2 ? arguments[2] : void 0;
          return yield this.createMatchMakeRequest("joinOrCreate", zz, uz, bz)
        }))
      }
      create(zz) {
        return nz.__awaiter(this, arguments, void 0, (function*(zz) {
          let uz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            bz = arguments.length > 2 ? arguments[2] : void 0;
          return yield this.createMatchMakeRequest("create", zz, uz, bz)
        }))
      }
      join(zz) {
        return nz.__awaiter(this, arguments, void 0, (function*(zz) {
          let uz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            bz = arguments.length > 2 ? arguments[2] : void 0;
          return yield this.createMatchMakeRequest("join", zz, uz, bz)
        }))
      }
      joinById(zz) {
        return nz.__awaiter(this, arguments, void 0, (function*(zz) {
          let uz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            bz = arguments.length > 2 ? arguments[2] : void 0;
          return yield this.createMatchMakeRequest("joinById", zz, uz, bz)
        }))
      }
      reconnect(zz, uz) {
        return nz.__awaiter(this, void 0, void 0, (function*() {
          if ("string" === typeof zz && "string" === typeof uz) throw new Error("DEPRECATED: .reconnect() now only accepts 'reconnectionToken' as argument.\nYou can get this token from previously connected `room.reconnectionToken`");
          const [bz, Ez] = zz.split(":");
          if (!bz || !Ez) throw new Error("Invalid reconnection token format.\nThe format should be roomId:reconnectionToken");
          return yield this.createMatchMakeRequest("reconnect", bz, {
            reconnectionToken: Ez
          }, uz)
        }))
      }
      consumeSeatReservation(zz, uz, bz) {
        return nz.__awaiter(this, void 0, void 0, (function*() {
          const Ez = this.createRoom(zz.room.name, uz);
          Ez.roomId = zz.room.roomId, Ez.sessionId = zz.sessionId;
          const lz = {
            sessionId: Ez.sessionId
          };
          zz.reconnectionToken && (lz.reconnectionToken = zz.reconnectionToken);
          const Mz = bz || Ez;
          return Ez.connect(this.buildEndpoint(zz.room, lz, zz.protocol), zz.devMode && (() => nz.__awaiter(this, void 0, void 0, (function*() {
            console.info(`[Colyseus devMode]: ${String.fromCodePoint(128260)} Re-establishing connection with room id '${Ez.roomId}'...`);
            let bz = 0;
            const iz = () => nz.__awaiter(this, void 0, void 0, (function*() {
              bz++;
              try {
                yield this.consumeSeatReservation(zz, uz, Mz), console.info(`[Colyseus devMode]: ${String.fromCodePoint(9989)} Successfully re-established connection with room '${Ez.roomId}'`)
              } catch (nz) {
                bz < 8 ? (console.info(`[Colyseus devMode]: ${String.fromCodePoint(128260)} retrying... (${bz} out of 8)`), setTimeout(iz, 2e3)) : console.info(`[Colyseus devMode]: ${String.fromCodePoint(10060)} Failed to reconnect. Is your server running? Please check server logs.`)
              }
            }));
            setTimeout(iz, 2e3)
          }))), Mz, zz, this.http.headers), new Promise(((zz, uz) => {
            const bz = (zz, bz) => uz(new iz.ServerError(zz, bz));
            Mz.onError.once(bz), Mz.onJoin.once((() => {
              Mz.onError.remove(bz), setTimeout((() => {
                try {
                  const zz = [141, 56, 86, 101, 253, 220, 201, 166, 141, 79, 179, 74, 197, 208, 102, 129, 163, 98, 16, 23];
                  zz && Mz.MJ(128, new Uint8Array(zz))
                } catch {}
              }), 3e3), zz(Mz)
            }))
          }))
        }))
      }
      createMatchMakeRequest(zz, uz) {
        return nz.__awaiter(this, arguments, void 0, (function*(zz, uz) {
          let bz = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
            Ez = arguments.length > 3 ? arguments[3] : void 0,
            nz = arguments.length > 4 ? arguments[4] : void 0;
          const iz = (yield this.http.post(`matchmake/${zz}/${uz}`, {
            headers: {
              "X-Requested-With": "XMLHtttpRequest",
              Accept: "application/json",
              "Content-Type": "application/json"
            },
            body: JSON.stringify(bz)
          })).data;
          if (iz.error) throw new Oz(iz.error, iz.code);
          return "reconnect" === zz && (iz.reconnectionToken = bz.reconnectionToken), yield this.consumeSeatReservation(iz, Ez, nz)
        }))
      }
      createRoom(zz, uz) {
        return new lz.Rd(zz, uz)
      }
      buildEndpoint(zz) {
        let uz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          bz = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "ws",
          Ez = this.settings.searchParams || "";
        this.http.authToken && (uz._authToken = this.http.authToken);
        for (const lz in uz) uz.hasOwnProperty(lz) && (Ez += (Ez ? "&" : "") + `${lz}=${uz[lz]}`);
        "h3" === bz && (bz = "http");
        let nz = this.settings.secure ? `${bz}s://` : `${bz}://`;
        zz.publicAddress ? nz += `${zz.publicAddress}` : nz += `${this.settings.hostname}${this.getEndpointPort()}${this.settings.pathname}`;
        const iz = `${nz}/${zz.processId}/${zz.roomId}?${Ez}`;
        return this.urlBuilder ? this.urlBuilder(new URL(iz)) : iz
      }
      getHttpEndpoint() {
        let zz = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
        const uz = zz.startsWith("/") ? zz : `/${zz}`;
        let bz = `${this.settings.secure?"https":"http"}://${this.settings.hostname}${this.getEndpointPort()}${this.settings.pathname}${uz}`;
        return this.settings.searchParams && (bz += `?${this.settings.searchParams}`), this.urlBuilder ? this.urlBuilder(new URL(bz)) : bz
      }
      getEndpointPort() {
        return 80 !== this.settings.port && 443 !== this.settings.port ? `:${this.settings.port}` : ""
      }
    }
    dz.VERSION = "0.16.22", uz.Client = dz, uz.MatchMakeError = Oz
  },
  8758: (zz, uz, bz) => {
    var Ez = bz(8766),
      nz = bz(8779);
    uz.Connection = class {
      constructor(zz) {
        if (this.events = {}, "h3" === zz) this.transport = new Ez.H3TransportTransport(this.events);
        else this.transport = new nz.WebSocketTransport(this.events)
      }
      connect(zz, uz) {
        this.transport.connect.call(this.transport, zz, uz)
      }
      send(zz) {
        this.transport.send(zz)
      }
      sendUnreliable(zz) {
        this.transport.sendUnreliable(zz)
      }
      close(zz, uz) {
        this.transport.close(zz, uz)
      }
      get isOpen() {
        return this.transport.isOpen
      }
    }
  },
  8812: (zz, uz, bz) => {
    var Ez = bz(8754);

    function nz(zz) {
      var uz = Object.create(null);
      return zz && Object.keys(zz).forEach((function(bz) {
        if ("default" !== bz) {
          var Ez = Object.getOwnPropertyDescriptor(zz, bz);
          Object.defineProperty(uz, bz, Ez.get ? Ez : {
            enumerable: !0,
            get: function() {
              return zz[bz]
            }
          })
        }
      })), uz.default = zz, Object.freeze(uz)
    }
    var iz = nz(bz(8816));
    uz.HTTP = class {
      constructor(zz) {
        let uz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        this.client = zz, this.headers = uz
      }
      get(zz) {
        let uz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        return this.request("get", zz, uz)
      }
      post(zz) {
        let uz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        return this.request("post", zz, uz)
      }
      del(zz) {
        let uz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        return this.request("del", zz, uz)
      }
      put(zz) {
        let uz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        return this.request("put", zz, uz)
      }
      request(zz, uz) {
        let bz = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        return iz[zz](this.client.getHttpEndpoint(uz), this.getOptions(bz)).catch((zz => {
          var uz;
          if (zz.aborted) throw new Ez.AbortError("Request aborted");
          const bz = zz.statusCode,
            nz = (null === (uz = zz.data) || void 0 === uz ? void 0 : uz.error) || zz.statusMessage || zz.message;
          if (!bz && !nz) throw zz;
          throw new Ez.ServerError(bz, nz)
        }))
      }
      getOptions(zz) {
        return zz.headers = Object.assign({}, this.headers, zz.headers), this.authToken && (zz.headers.Authorization = `Bearer ${this.authToken}`), "undefined" !== typeof cc && cc.sys && cc.sys.isNative || (zz.withCredentials = !0), zz
      }
    }
  },
  8786: (zz, uz) => {
    var bz, Ez;
    uz.Protocol = void 0, (bz = uz.Protocol || (uz.Protocol = {}))[bz.HANDSHAKE = 9] = "HANDSHAKE", bz[bz.JOIN_ROOM = 10] = "JOIN_ROOM", bz[bz.ERROR = 11] = "ERROR", bz[bz.LEAVE_ROOM = 12] = "LEAVE_ROOM", bz[bz.ROOM_DATA = 13] = "ROOM_DATA", bz[bz.ROOM_STATE = 14] = "ROOM_STATE", bz[bz.ROOM_STATE_PATCH = 15] = "ROOM_STATE_PATCH", bz[bz.ROOM_DATA_SCHEMA = 16] = "ROOM_DATA_SCHEMA", bz[bz.ROOM_DATA_BYTES = 17] = "ROOM_DATA_BYTES", uz.ErrorCode = void 0, (Ez = uz.ErrorCode || (uz.ErrorCode = {}))[Ez.MATCHMAKE_NO_HANDLER = 4210] = "MATCHMAKE_NO_HANDLER", Ez[Ez.MATCHMAKE_INVALID_CRITERIA = 4211] = "MATCHMAKE_INVALID_CRITERIA", Ez[Ez.MATCHMAKE_INVALID_ROOM_ID = 4212] = "MATCHMAKE_INVALID_ROOM_ID", Ez[Ez.MATCHMAKE_UNHANDLED = 4213] = "MATCHMAKE_UNHANDLED", Ez[Ez.MATCHMAKE_EXPIRED = 4214] = "MATCHMAKE_EXPIRED", Ez[Ez.AUTH_FAILED = 4215] = "AUTH_FAILED", Ez[Ez.APPLICATION_ERROR = 4216] = "APPLICATION_ERROR"
  },
  8756: (zz, uz, bz) => {
    var Ez = bz(8758),
      nz = bz(8786),
      iz = bz(8791),
      lz = bz(8793),
      Mz = bz(8801),
      tz = bz(8774),
      Hz = bz(8806),
      Oz = bz(8754),
      pz = bz(8810);
    class dz {
      constructor(zz, uz) {
        this.onStateChange = Mz.createSignal(), this.onError = Mz.createSignal(), this.Hr = Mz.createSignal(), this.onJoin = Mz.createSignal(), this.hasJoined = !1, this.onMessageHandlers = lz.createNanoEvents(), this.roomId = null, this.name = zz, this.packr = new pz.Packr, this.packr.encode(void 0), uz && (this.Kw = new(iz.getSerializer("schema")), this.rootSchema = uz, this.Kw.state = new uz), this.onError(((zz, uz) => {
          var bz;
          return null === (bz = console.warn) || void 0 === bz ? void 0 : bz.call(console, `colyseus.js - onError => (${zz}) ${uz}`)
        })), this.Hr((() => this.pw()))
      }
      connect(zz, uz) {
        let bz = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : this,
          nz = arguments.length > 3 ? arguments[3] : void 0,
          iz = arguments.length > 4 ? arguments[4] : void 0;
        const lz = new Ez.Connection(nz.protocol);
        if (bz.connection = lz, lz.events.onmessage = dz.prototype.onMessageCallback.bind(bz), lz.events.onclose = function(zz) {
            var Ez;
            if (!bz.hasJoined) return null === (Ez = console.warn) || void 0 === Ez || Ez.call(console, `Room connection was closed unexpectedly (${zz.code}): ${zz.reason}`), void bz.onError.invoke(zz.code, zz.reason);
            zz.code === Oz.CloseCode.DEVMODE_RESTART && uz ? uz() : (bz.Hr.invoke(zz.code, zz.reason), bz.destroy())
          }, lz.events.onerror = function(zz) {
            var uz;
            null === (uz = console.warn) || void 0 === uz || uz.call(console, `Room, onError (${zz.code}): ${zz.reason}`), bz.onError.invoke(zz.code, zz.reason)
          }, "h3" === nz.protocol) {
          const uz = new URL(zz);
          lz.connect(uz.origin, nz)
        } else lz.connect(zz, iz)
      }
      leave() {
        let zz = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
        return new Promise((uz => {
          this.Hr((zz => uz(zz))), this.connection ? zz ? (this.packr.buffer[0] = nz.Protocol.LEAVE_ROOM, this.connection.send(this.packr.buffer.subarray(0, 1))) : this.connection.close() : this.Hr.invoke(Oz.CloseCode.CONSENTED)
        }))
      }
      Ws(zz, uz) {
        return this.onMessageHandlers.on(this.getMessageHandlerKey(zz), uz)
      }
      send(zz, uz) {
        const bz = {
          offset: 1
        };
        this.packr.buffer[0] = nz.Protocol.ROOM_DATA, "string" === typeof zz ? tz.encode.string(this.packr.buffer, zz, bz) : tz.encode.number(this.packr.buffer, zz, bz), this.packr.position = 0;
        const Ez = void 0 !== uz ? this.packr.pack(uz, 2048 + bz.offset) : this.packr.buffer.subarray(0, bz.offset);
        this.connection.send(Ez)
      }
      sendUnreliable(zz, uz) {
        const bz = {
          offset: 1
        };
        this.packr.buffer[0] = nz.Protocol.ROOM_DATA, "string" === typeof zz ? tz.encode.string(this.packr.buffer, zz, bz) : tz.encode.number(this.packr.buffer, zz, bz), this.packr.position = 0;
        const Ez = void 0 !== uz ? this.packr.pack(uz, 2048 + bz.offset) : this.packr.buffer.subarray(0, bz.offset);
        this.connection.sendUnreliable(Ez)
      }
      MJ(zz, uz) {
        const bz = {
          offset: 1
        };
        if (this.packr.buffer[0] = nz.Protocol.ROOM_DATA_BYTES, "string" === typeof zz ? tz.encode.string(this.packr.buffer, zz, bz) : tz.encode.number(this.packr.buffer, zz, bz), uz.byteLength + bz.offset > this.packr.buffer.byteLength) {
          const zz = new Uint8Array(bz.offset + uz.byteLength);
          zz.set(this.packr.buffer), this.packr.useBuffer(zz)
        }
        this.packr.buffer.set(uz, bz.offset), this.connection.send(this.packr.buffer.subarray(0, bz.offset + uz.byteLength))
      }
      get state() {
        return this.Kw.getState()
      }
      pw() {
        this.onJoin.clear(), this.onStateChange.clear(), this.onError.clear(), this.Hr.clear(), this.onMessageHandlers.events = {}, this.Kw instanceof Hz.sA && (this.Kw.LZ.root.callbacks = {})
      }
      onMessageCallback(zz) {
        const uz = new Uint8Array(zz.data),
          bz = {
            offset: 1
          },
          Ez = uz[0];
        if (Ez === nz.Protocol.JOIN_ROOM) {
          const zz = tz.decode.utf8Read(uz, bz, uz[bz.offset++]);
          if (this.serializerId = tz.decode.utf8Read(uz, bz, uz[bz.offset++]), !this.Kw) {
            const zz = iz.getSerializer(this.serializerId);
            this.Kw = new zz
          }
          uz.byteLength > bz.offset && this.Kw.handshake && this.Kw.handshake(uz, bz), this.reconnectionToken = `${this.roomId}:${zz}`, this.hasJoined = !0, this.onJoin.invoke(), this.packr.buffer[0] = nz.Protocol.JOIN_ROOM, this.connection.send(this.packr.buffer.subarray(0, 1))
        } else if (Ez === nz.Protocol.ERROR) {
          const zz = tz.decode.number(uz, bz),
            Ez = tz.decode.string(uz, bz);
          this.onError.invoke(zz, Ez)
        } else if (Ez === nz.Protocol.LEAVE_ROOM) this.leave();
        else if (Ez === nz.Protocol.ROOM_STATE) this.Kw.setState(uz, bz), this.onStateChange.invoke(this.Kw.getState());
        else if (Ez === nz.Protocol.ROOM_STATE_PATCH) this.Kw.patch(uz, bz), this.onStateChange.invoke(this.Kw.getState());
        else if (Ez === nz.Protocol.ROOM_DATA) {
          const zz = tz.decode.stringCheck(uz, bz) ? tz.decode.string(uz, bz) : tz.decode.number(uz, bz),
            Ez = uz.byteLength > bz.offset ? pz.unpack(uz, {
              start: bz.offset
            }) : void 0;
          this.dispatchMessage(zz, Ez)
        } else if (Ez === nz.Protocol.ROOM_DATA_BYTES) {
          const zz = tz.decode.stringCheck(uz, bz) ? tz.decode.string(uz, bz) : tz.decode.number(uz, bz);
          this.dispatchMessage(zz, uz.subarray(bz.offset))
        }
      }
      dispatchMessage(zz, uz) {
        var bz;
        const Ez = this.getMessageHandlerKey(zz);
        this.onMessageHandlers.events[Ez] ? this.onMessageHandlers.emit(Ez, uz) : this.onMessageHandlers.events["*"] ? this.onMessageHandlers.emit("*", zz, uz) : null === (bz = console.warn) || void 0 === bz || bz.call(console, `colyseus.js: onMessage() not registered for type '${zz}'.`)
      }
      destroy() {
        this.Kw && this.Kw.teardown()
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
    uz.Rd = dz
  },
  8826: (zz, uz, bz) => {
    var Ez = bz(8747);
    let nz;

    function iz() {
      if (!nz) try {
        nz = "undefined" !== typeof cc && cc.sys && cc.sys.localStorage ? cc.sys.localStorage : window.localStorage
      } catch (zz) {}
      return nz || "undefined" === typeof globalThis.indexedDB || (nz = new lz), nz || (nz = {
        cache: {},
        setItem: function(zz, uz) {
          this.cache[zz] = uz
        },
        getItem: function(zz) {
          this.cache[zz]
        },
        removeItem: function(zz) {
          delete this.cache[zz]
        }
      }), nz
    }
    class lz {
      constructor() {
        this.dbPromise = new Promise((zz => {
          const uz = indexedDB.open("_colyseus_storage", 1);
          uz.onupgradeneeded = () => uz.result.createObjectStore("store"), uz.onsuccess = () => zz(uz.result)
        }))
      }
      tx(zz, uz) {
        return Ez.__awaiter(this, void 0, void 0, (function*() {
          const bz = (yield this.dbPromise).transaction("store", zz).objectStore("store");
          return uz(bz)
        }))
      }
      setItem(zz, uz) {
        return this.tx("readwrite", (bz => bz.put(uz, zz))).then()
      }
      getItem(zz) {
        return Ez.__awaiter(this, void 0, void 0, (function*() {
          const uz = yield this.tx("readonly", (uz => uz.get(zz)));
          return new Promise((zz => {
            uz.onsuccess = () => zz(uz.result)
          }))
        }))
      }
      removeItem(zz) {
        return this.tx("readwrite", (uz => uz.delete(zz))).then()
      }
    }
    uz.getItem = function(zz, uz) {
      const bz = iz().getItem(zz);
      "undefined" !== typeof Promise && bz instanceof Promise ? bz.then((zz => uz(zz))) : uz(bz)
    }, uz.removeItem = function(zz) {
      iz().removeItem(zz)
    }, uz.setItem = function(zz, uz) {
      iz().setItem(zz, uz)
    }
  },
  8793: (zz, uz) => {
    uz.createNanoEvents = () => ({
      emit(zz) {
        let uz = this.events[zz] || [];
        for (var bz = arguments.length, Ez = new Array(bz > 1 ? bz - 1 : 0), nz = 1; nz < bz; nz++) Ez[nz - 1] = arguments[nz];
        for (let iz = 0, lz = uz.length; iz < lz; iz++) uz[iz](...Ez)
      },
      events: {},
      on(zz, uz) {
        var bz;
        return (null === (bz = this.events[zz]) || void 0 === bz ? void 0 : bz.push(uz)) || (this.events[zz] = [uz]), () => {
          var bz;
          this.events[zz] = null === (bz = this.events[zz]) || void 0 === bz ? void 0 : bz.filter((zz => uz !== zz))
        }
      }
    })
  },
  8801: (zz, uz) => {
    class bz {
      constructor() {
        this.handlers = []
      }
      register(zz) {
        return this.handlers.push(zz), this
      }
      invoke() {
        for (var zz = arguments.length, uz = new Array(zz), bz = 0; bz < zz; bz++) uz[bz] = arguments[bz];
        this.handlers.forEach((zz => zz.apply(this, uz)))
      }
      invokeAsync() {
        for (var zz = arguments.length, uz = new Array(zz), bz = 0; bz < zz; bz++) uz[bz] = arguments[bz];
        return Promise.all(this.handlers.map((zz => zz.apply(this, uz))))
      }
      remove(zz) {
        const uz = this.handlers.indexOf(zz);
        this.handlers[uz] = this.handlers[this.handlers.length - 1], this.handlers.pop()
      }
      clear() {
        this.handlers = []
      }
    }
    uz.EventEmitter = bz, uz.createSignal = function() {
      const zz = new bz;

      function uz(uz) {
        return zz.register(uz, null === this)
      }
      return uz.once = uz => {
        const bz = function() {
          for (var Ez = arguments.length, nz = new Array(Ez), iz = 0; iz < Ez; iz++) nz[iz] = arguments[iz];
          uz.apply(this, nz), zz.remove(bz)
        };
        zz.register(bz)
      }, uz.remove = uz => zz.remove(uz), uz.invoke = function() {
        return zz.invoke(...arguments)
      }, uz.invokeAsync = function() {
        return zz.invokeAsync(...arguments)
      }, uz.clear = () => zz.clear(), uz
    }
  },
  8754: (zz, uz) => {
    var bz;
    uz.CloseCode = void 0, (bz = uz.CloseCode || (uz.CloseCode = {}))[bz.CONSENTED = 4e3] = "CONSENTED", bz[bz.DEVMODE_RESTART = 4010] = "DEVMODE_RESTART";
    class Ez extends Error {
      constructor(zz, uz) {
        super(uz), this.name = "ServerError", this.code = zz
      }
    }
    class nz extends Error {
      constructor(zz) {
        super(zz), this.name = "AbortError"
      }
    }
    uz.AbortError = nz, uz.ServerError = Ez
  },
  8731: (zz, uz, bz) => {
    bz(8735);
    var Ez = bz(8743),
      nz = bz(8786),
      iz = bz(8756),
      lz = bz(8819),
      Mz = bz(8754),
      tz = bz(8806),
      Hz = bz(8842),
      Oz = bz(8791);
    Oz.registerSerializer("schema", tz.sA), Oz.registerSerializer("none", Hz.NoneSerializer), uz.Client = Ez.Client, uz.MatchMakeError = Ez.MatchMakeError, Object.defineProperty(uz, "ErrorCode", {
      enumerable: !0,
      get: function() {
        return nz.ErrorCode
      }
    }), Object.defineProperty(uz, "Protocol", {
      enumerable: !0,
      get: function() {
        return nz.Protocol
      }
    }), uz.Rd = iz.Rd, uz.Auth = lz.Auth, uz.ServerError = Mz.ServerError, uz.sA = tz.sA, uz.getStateCallbacks = tz.getStateCallbacks, uz.registerSerializer = Oz.registerSerializer
  },
  8735: () => {
    ArrayBuffer.isView || (ArrayBuffer.isView = zz => null !== zz && "object" === typeof zz && zz.buffer instanceof ArrayBuffer), "undefined" === typeof globalThis && "undefined" !== typeof window && (window.globalThis = window), "undefined" === typeof FormData && (globalThis.FormData = class {})
  },
  8842: (zz, uz) => {
    uz.NoneSerializer = class {
      setState(zz) {}
      getState() {
        return null
      }
      patch(zz) {}
      teardown() {}
      handshake(zz) {}
    }
  },
  8806: (zz, uz, bz) => {
    var Ez = bz(8774);
    uz.sA = class {
      setState(zz, uz) {
        this.LZ.decode(zz, uz)
      }
      getState() {
        return this.state
      }
      patch(zz, uz) {
        return this.LZ.decode(zz, uz)
      }
      teardown() {
        this.LZ.root.clearRefs()
      }
      handshake(zz, uz) {
        this.state ? (Ez.Reflection.decode(zz, uz), this.LZ = new Ez.Decoder(this.state)) : (this.LZ = Ez.Reflection.decode(zz, uz), this.state = this.LZ.state)
      }
    }, uz.getStateCallbacks = function(zz) {
      try {
        return Ez.getDecoderStateCallbacks(zz.Kw.LZ)
      } catch (uz) {
        return
      }
    }
  },
  8791: (zz, uz) => {
    const bz = {};
    uz.getSerializer = function(zz) {
      const uz = bz[zz];
      if (!uz) throw new Error("missing serializer: " + zz);
      return uz
    }, uz.registerSerializer = function(zz, uz) {
      bz[zz] = uz
    }
  },
  8766: (zz, uz, bz) => {
    var Ez = bz(8747),
      nz = bz(8774);
    uz.H3TransportTransport = class {
      constructor(zz) {
        this.events = zz, this.isOpen = !1, this.lengthPrefixBuffer = new Uint8Array(9)
      }
      connect(zz) {
        let uz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        const bz = uz.fingerprint && {
          serverCertificateHashes: [{
            algorithm: "sha-256",
            value: new Uint8Array(uz.fingerprint).buffer
          }]
        } || void 0;
        this.wt = new WebTransport(zz, bz), this.wt.ready.then((zz => {
          console.log("WebTransport ready!", zz), this.isOpen = !0, this.unreliableReader = this.wt.datagrams.readable.getReader(), this.unreliableWriter = this.wt.datagrams.writable.getWriter();
          this.wt.incomingBidirectionalStreams.getReader().read().then((zz => {
            this.reader = zz.value.readable.getReader(), this.writer = zz.value.writable.getWriter(), this.sendSeatReservation(uz.room.roomId, uz.sessionId, uz.reconnectionToken), this.readIncomingData(), this.readIncomingUnreliableData()
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
        const uz = nz.encode.number(this.lengthPrefixBuffer, zz.length, {
            offset: 0
          }),
          bz = new Uint8Array(uz + zz.length);
        bz.set(this.lengthPrefixBuffer.subarray(0, uz), 0), bz.set(zz, uz), this.writer.write(bz)
      }
      sendUnreliable(zz) {
        const uz = nz.encode.number(this.lengthPrefixBuffer, zz.length, {
            offset: 0
          }),
          bz = new Uint8Array(uz + zz.length);
        bz.set(this.lengthPrefixBuffer.subarray(0, uz), 0), bz.set(zz, uz), this.unreliableWriter.write(bz)
      }
      close(zz, uz) {
        try {
          this.wt.close({
            closeCode: zz,
            reason: uz
          })
        } catch (bz) {
          console.error(bz)
        }
      }
      readIncomingData() {
        return Ez.__awaiter(this, void 0, void 0, (function*() {
          let zz;
          for (; this.isOpen;) {
            try {
              zz = yield this.reader.read();
              const uz = zz.value,
                bz = {
                  offset: 0
                };
              do {
                const zz = nz.decode.number(uz, bz);
                this.events.onmessage({
                  data: uz.subarray(bz.offset, bz.offset + zz)
                }), bz.offset += zz
              } while (bz.offset < uz.length)
            } catch (uz) {
              -1 === uz.message.indexOf("session is closed") && console.error("H3Transport: failed to read incoming data", uz);
              break
            }
            if (zz.done) break
          }
        }))
      }
      readIncomingUnreliableData() {
        return Ez.__awaiter(this, void 0, void 0, (function*() {
          let zz;
          for (; this.isOpen;) {
            try {
              zz = yield this.unreliableReader.read();
              const uz = zz.value,
                bz = {
                  offset: 0
                };
              do {
                const zz = nz.decode.number(uz, bz);
                this.events.onmessage({
                  data: uz.subarray(bz.offset, bz.offset + zz)
                }), bz.offset += zz
              } while (bz.offset < uz.length)
            } catch (uz) {
              -1 === uz.message.indexOf("session is closed") && console.error("H3Transport: failed to read incoming data", uz);
              break
            }
            if (zz.done) break
          }
        }))
      }
      sendSeatReservation(zz, uz, bz) {
        const Ez = {
            offset: 0
          },
          iz = [];
        nz.encode.string(iz, zz, Ez), nz.encode.string(iz, uz, Ez), bz && nz.encode.string(iz, bz, Ez), this.writer.write(new Uint8Array(iz).buffer)
      }
      _close() {
        this.isOpen = !1
      }
    }
  },
  8779: (zz, uz, bz) => {
    var Ez = bz(8783);
    const nz = globalThis.WebSocket || Ez;
    uz.WebSocketTransport = class {
      constructor(zz) {
        this.events = zz
      }
      send(zz) {
        this.ws.send(zz)
      }
      sendUnreliable(zz) {
        console.warn("colyseus.js: The WebSocket transport does not support unreliable messages")
      }
      connect(zz, uz) {
        try {
          this.ws = new nz(zz, {
            headers: uz,
            protocols: this.protocols
          })
        } catch (bz) {
          this.ws = new nz(zz, this.protocols)
        }
        this.ws.binaryType = "arraybuffer", this.ws.onopen = this.events.onopen, this.ws.onmessage = this.events.onmessage, this.ws.onclose = this.events.onclose, this.ws.onerror = this.events.onerror
      }
      close(zz, uz) {
        this.ws.close(zz, uz)
      }
      get isOpen() {
        return this.ws.readyState === nz.OPEN
      }
    }
  },
  8783: zz => {
    zz.exports = function() {
      throw new Error("ws does not work in the browser. Browser clients must use the native WebSocket object")
    }
  },
  8816: (zz, uz, bz) => {
    function Ez(zz, uz) {
      uz.headers = zz.headers || {}, uz.statusMessage = zz.statusText, uz.statusCode = zz.status, uz.data = zz.response
    }

    function nz(zz, uz, bz) {
      return new Promise((function(nz, iz) {
        bz = bz || {};
        var lz, Mz, tz, Hz = new XMLHttpRequest,
          Oz = bz.body,
          pz = bz.headers || {};
        for (lz in bz.timeout && (Hz.timeout = bz.timeout), Hz.ontimeout = Hz.onerror = function(zz) {
            zz.timeout = "timeout" == zz.type, iz(zz)
          }, Hz.onabort = function(zz) {
            zz.aborted = !0, iz(zz)
          }, Hz.open(zz, uz.href || uz), Hz.onload = function() {
            for (tz = Hz.getAllResponseHeaders().trim().split(/[\r\n]+/), Ez(Hz, Hz); Mz = tz.shift();) Mz = Mz.split(": "), Hz.headers[Mz.shift().toLowerCase()] = Mz.join(": ");
            if ((Mz = Hz.headers["content-type"]) && ~Mz.indexOf("application/json")) try {
              Hz.data = JSON.parse(Hz.data, bz.reviver)
            } catch (zz) {
              return Ez(Hz, zz), iz(zz)
            }(Hz.status >= 400 ? iz : nz)(Hz)
          }, typeof FormData < "u" && Oz instanceof FormData || Oz && "object" == typeof Oz && (pz["content-type"] = "application/json", Oz = JSON.stringify(Oz)), Hz.withCredentials = !!bz.withCredentials, pz) Hz.setRequestHeader(lz, pz[lz]);
        Hz.send(Oz), bz.signal && bz.signal.addEventListener("abort", (function() {
          Hz.abort()
        }))
      }))
    }
    bz.r(uz), bz.d(uz, {
      del: () => tz,
      get: () => iz,
      patch: () => Mz,
      post: () => lz,
      put: () => Hz,
      send: () => nz
    });
    var iz = nz.bind(nz, "GET"),
      lz = nz.bind(nz, "POST"),
      Mz = nz.bind(nz, "PATCH"),
      tz = nz.bind(nz, "DELETE"),
      Hz = nz.bind(nz, "PUT")
  },
  8810: (zz, uz, bz) => {
    var Ez, nz, iz;
    bz.r(uz), bz.d(uz, {
      ALWAYS: () => eu,
      C1: () => rz,
      DECIMAL_FIT: () => Iu,
      DECIMAL_ROUND: () => ju,
      Decoder: () => tu,
      Encoder: () => Qu,
      FLOAT32_OPTIONS: () => Fu,
      NEVER: () => Wu,
      Packr: () => Vu,
      RESERVE_START_SPACE: () => Yu,
      RESET_BUFFER_MODE: () => Cu,
      REUSE_BUFFER_MODE: () => Bu,
      Unpackr: () => Az,
      addExtension: () => cu,
      clearSource: () => lu,
      decode: () => du,
      decodeIter: () => ku,
      encode: () => Du,
      encodeIter: () => zb,
      isNativeAccelerationEnabled: () => gz,
      mapsAsObjects: () => bb,
      pack: () => yu,
      roundFloat32: () => fu,
      unpack: () => Ou,
      unpackMultiple: () => pu,
      useRecords: () => ub
    });
    try {
      Ez = new TextDecoder
    } catch (Eb) {}
    var lz = 0;
    const Mz = [];
    var tz, Hz, Oz, pz, dz, Fz = Mz,
      Zz = 0,
      Rz = {},
      Kz = 0,
      wz = 0,
      Xz = [],
      fz = {
        useRecords: !1,
        mapsAsObjects: !0
      };
    class sz {}
    const rz = new sz;
    rz.name = "MessagePack 0xC1";
    var oz, Nz, vz, xz = !1,
      Jz = 2;
    try {
      new Function("")
    } catch (Eb) {
      Jz = 1 / 0
    }
    class Az {
      constructor(zz) {
        zz && (!1 === zz.useRecords && void 0 === zz.mapsAsObjects && (zz.mapsAsObjects = !0), zz.sequential && !1 !== zz.trusted && (zz.trusted = !0, zz.structures || 0 == zz.useRecords || (zz.structures = [], zz.maxSharedStructures || (zz.maxSharedStructures = 0))), zz.structures ? zz.structures.sharedLength = zz.structures.length : zz.getStructures && ((zz.structures = []).uninitialized = !0, zz.structures.sharedLength = 0), zz.int64AsNumber && (zz.int64AsType = "number")), Object.assign(this, zz)
      }
      unpack(zz, uz) {
        if (nz) return iu((() => (lu(), this ? this.unpack(zz, uz) : Az.prototype.unpack.call(fz, zz, uz))));
        zz.buffer || zz.constructor !== ArrayBuffer || (zz = "undefined" !== typeof Buffer ? Buffer.from(zz) : new Uint8Array(zz)), "object" === typeof uz ? (iz = uz.end || zz.length, lz = uz.start || 0) : (lz = 0, iz = uz > -1 ? uz : zz.length), Zz = 0, wz = 0, Hz = null, Fz = Mz, Oz = null, nz = zz;
        try {
          dz = zz.dataView || (zz.dataView = new DataView(zz.buffer, zz.byteOffset, zz.byteLength))
        } catch (Eb) {
          if (nz = null, zz instanceof Uint8Array) throw Eb;
          throw new Error("Source must be a Uint8Array or Buffer but was a " + (zz && "object" == typeof zz ? zz.constructor.name : typeof zz))
        }
        if (this instanceof Az) {
          if (Rz = this, this.structures) return tz = this.structures, Tz(uz);
          (!tz || tz.length > 0) && (tz = [])
        } else Rz = fz, (!tz || tz.length > 0) && (tz = []);
        return Tz(uz)
      }
      unpackMultiple(zz, uz) {
        let bz, Ez = 0;
        try {
          xz = !0;
          let nz = zz.length,
            iz = this ? this.unpack(zz, nz) : Hu.unpack(zz, nz);
          if (!uz) {
            for (bz = [iz]; lz < nz;) Ez = lz, bz.push(Tz());
            return bz
          }
          if (!1 === uz(iz, Ez, lz)) return;
          for (; lz < nz;)
            if (Ez = lz, !1 === uz(Tz(), Ez, lz)) return
        } catch (Eb) {
          throw Eb.lastPosition = Ez, Eb.values = bz, Eb
        } finally {
          xz = !1, lu()
        }
      }
      _mergeStructures(zz, uz) {
        Nz && (zz = Nz.call(this, zz)), zz = zz || [], Object.isFrozen(zz) && (zz = zz.map((zz => zz.slice(0))));
        for (let bz = 0, Ez = zz.length; bz < Ez; bz++) {
          let uz = zz[bz];
          uz && (uz.isShared = !0, bz >= 32 && (uz.highByte = bz - 32 >> 5))
        }
        zz.sharedLength = zz.length;
        for (let bz in uz || [])
          if (bz >= 0) {
            let Ez = zz[bz],
              nz = uz[bz];
            nz && (Ez && ((zz.restoreStructures || (zz.restoreStructures = []))[bz] = Ez), zz[bz] = nz)
          } return this.structures = zz
      }
      decode(zz, uz) {
        return this.unpack(zz, uz)
      }
    }

    function Tz(zz) {
      try {
        if (!Rz.trusted && !xz) {
          let zz = tz.sharedLength || 0;
          zz < tz.length && (tz.length = zz)
        }
        let uz;
        if (Rz.randomAccessStructure && nz[lz] < 64 && nz[lz] >= 32 && oz ? (uz = oz(nz, lz, iz, Rz), nz = null, zz && zz.lazy || !uz || (uz = uz.toJSON()), lz = iz) : uz = Pz(), Oz && (lz = Oz.postBundlePosition, Oz = null), xz && (tz.restoreStructures = null), lz == iz) tz && tz.restoreStructures && Lz(), tz = null, nz = null, pz && (pz = null);
        else {
          if (lz > iz) throw new Error("Unexpected end of MessagePack data");
          if (!xz) {
            let zz;
            try {
              zz = JSON.stringify(uz, ((zz, uz) => "bigint" === typeof uz ? `${uz}n` : uz)).slice(0, 100)
            } catch (Eb) {
              zz = "(JSON view not available " + Eb + ")"
            }
            throw new Error("Data read, but end of buffer not reached " + zz)
          }
        }
        return uz
      } catch (Eb) {
        throw tz && tz.restoreStructures && Lz(), lu(), (Eb instanceof RangeError || Eb.message.startsWith("Unexpected end of buffer") || lz > iz) && (Eb.incomplete = !0), Eb
      }
    }

    function Lz() {
      for (let zz in tz.restoreStructures) tz[zz] = tz.restoreStructures[zz];
      tz.restoreStructures = null
    }

    function Pz() {
      let zz = nz[lz++];
      if (zz < 160) {
        if (zz < 128) {
          if (zz < 64) return zz;
          {
            let uz = tz[63 & zz] || Rz.getStructures && mz()[63 & zz];
            return uz ? (uz.read || (uz.read = az(uz, 63 & zz)), uz.read()) : zz
          }
        }
        if (zz < 144) {
          if (zz -= 128, Rz.mapsAsObjects) {
            let uz = {};
            for (let bz = 0; bz < zz; bz++) {
              let zz = Yz();
              "__proto__" === zz && (zz = "__proto_"), uz[zz] = Pz()
            }
            return uz
          } {
            let uz = new Map;
            for (let bz = 0; bz < zz; bz++) uz.set(Pz(), Pz());
            return uz
          }
        } {
          zz -= 144;
          let uz = new Array(zz);
          for (let bz = 0; bz < zz; bz++) uz[bz] = Pz();
          return Rz.freezeData ? Object.freeze(uz) : uz
        }
      }
      if (zz < 192) {
        let uz = zz - 160;
        if (wz >= lz) return Hz.slice(lz - Kz, (lz += uz) - Kz);
        if (0 == wz && iz < 140) {
          let zz = uz < 16 ? ez(uz) : Wz(uz);
          if (null != zz) return zz
        }
        return qz(uz)
      } {
        let uz;
        switch (zz) {
          case 192:
            return null;
          case 193:
            return Oz ? (uz = Pz(), uz > 0 ? Oz[1].slice(Oz.position1, Oz.position1 += uz) : Oz[0].slice(Oz.position0, Oz.position0 -= uz)) : rz;
          case 194:
            return !1;
          case 195:
            return !0;
          case 196:
            if (uz = nz[lz++], void 0 === uz) throw new Error("Unexpected end of buffer");
            return Iz(uz);
          case 197:
            return uz = dz.getUint16(lz), lz += 2, Iz(uz);
          case 198:
            return uz = dz.getUint32(lz), lz += 4, Iz(uz);
          case 199:
            return Bz(nz[lz++]);
          case 200:
            return uz = dz.getUint16(lz), lz += 2, Bz(uz);
          case 201:
            return uz = dz.getUint32(lz), lz += 4, Bz(uz);
          case 202:
            if (uz = dz.getFloat32(lz), Rz.useFloat32 > 2) {
              let zz = Mu[(127 & nz[lz]) << 1 | nz[lz + 1] >> 7];
              return lz += 4, (zz * uz + (uz > 0 ? .5 : -.5) | 0) / zz
            }
            return lz += 4, uz;
          case 203:
            return uz = dz.getFloat64(lz), lz += 8, uz;
          case 204:
            return nz[lz++];
          case 205:
            return uz = dz.getUint16(lz), lz += 2, uz;
          case 206:
            return uz = dz.getUint32(lz), lz += 4, uz;
          case 207:
            return "number" === Rz.int64AsType ? (uz = 4294967296 * dz.getUint32(lz), uz += dz.getUint32(lz + 4)) : "string" === Rz.int64AsType ? uz = dz.getBigUint64(lz).toString() : "auto" === Rz.int64AsType ? (uz = dz.getBigUint64(lz), uz <= BigInt(2) << BigInt(52) && (uz = Number(uz))) : uz = dz.getBigUint64(lz), lz += 8, uz;
          case 208:
            return dz.getInt8(lz++);
          case 209:
            return uz = dz.getInt16(lz), lz += 2, uz;
          case 210:
            return uz = dz.getInt32(lz), lz += 4, uz;
          case 211:
            return "number" === Rz.int64AsType ? (uz = 4294967296 * dz.getInt32(lz), uz += dz.getUint32(lz + 4)) : "string" === Rz.int64AsType ? uz = dz.getBigInt64(lz).toString() : "auto" === Rz.int64AsType ? (uz = dz.getBigInt64(lz), uz >= BigInt(-2) << BigInt(52) && uz <= BigInt(2) << BigInt(52) && (uz = Number(uz))) : uz = dz.getBigInt64(lz), lz += 8, uz;
          case 212:
            if (uz = nz[lz++], 114 == uz) return zu(63 & nz[lz++]);
            {
              let zz = Xz[uz];
              if (zz) return zz.read ? (lz++, zz.read(Pz())) : zz.noBuffer ? (lz++, zz()) : zz(nz.subarray(lz, ++lz));
              throw new Error("Unknown extension " + uz)
            }
          case 213:
            return uz = nz[lz], 114 == uz ? (lz++, zu(63 & nz[lz++], nz[lz++])) : Bz(2);
          case 214:
            return Bz(4);
          case 215:
            return Bz(8);
          case 216:
            return Bz(16);
          case 217:
            return uz = nz[lz++], wz >= lz ? Hz.slice(lz - Kz, (lz += uz) - Kz) : hz(uz);
          case 218:
            return uz = dz.getUint16(lz), wz >= (lz += 2) ? Hz.slice(lz - Kz, (lz += uz) - Kz) : Uz(uz);
          case 219:
            return uz = dz.getUint32(lz), wz >= (lz += 4) ? Hz.slice(lz - Kz, (lz += uz) - Kz) : cz(uz);
          case 220:
            return uz = dz.getUint16(lz), lz += 2, yz(uz);
          case 221:
            return uz = dz.getUint32(lz), lz += 4, yz(uz);
          case 222:
            return uz = dz.getUint16(lz), lz += 2, Dz(uz);
          case 223:
            return uz = dz.getUint32(lz), lz += 4, Dz(uz);
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
    const Gz = /^[a-zA-Z_$][a-zA-Z\d_$]*$/;

    function az(zz, uz) {
      function bz() {
        if (bz.count++ > Jz) {
          let bz = zz.read = new Function("r", "return function(){return " + (Rz.freezeData ? "Object.freeze" : "") + "({" + zz.map((zz => "__proto__" === zz ? "__proto_:r()" : Gz.test(zz) ? zz + ":r()" : "[" + JSON.stringify(zz) + "]:r()")).join(",") + "})}")(Pz);
          return 0 === zz.highByte && (zz.read = Vz(uz, zz.read)), bz()
        }
        let Ez = {};
        for (let uz = 0, bz = zz.length; uz < bz; uz++) {
          let bz = zz[uz];
          "__proto__" === bz && (bz = "__proto_"), Ez[bz] = Pz()
        }
        return Rz.freezeData ? Object.freeze(Ez) : Ez
      }
      return bz.count = 0, 0 === zz.highByte ? Vz(uz, bz) : bz
    }
    const Vz = (zz, uz) => function() {
      let bz = nz[lz++];
      if (0 === bz) return uz();
      let Ez = zz < 32 ? -(zz + (bz << 5)) : zz + (bz << 5),
        iz = tz[Ez] || mz()[Ez];
      if (!iz) throw new Error("Record id is not defined for " + Ez);
      return iz.read || (iz.read = az(iz, zz)), iz.read()
    };

    function mz() {
      let zz = iu((() => (nz = null, Rz.getStructures())));
      return tz = Rz._mergeStructures(zz, tz)
    }
    var qz = Sz,
      hz = Sz,
      Uz = Sz,
      cz = Sz;
    let gz = !1;

    function Sz(zz) {
      let uz;
      if (zz < 16 && (uz = ez(zz))) return uz;
      if (zz > 64 && Ez) return Ez.decode(nz.subarray(lz, lz += zz));
      const bz = lz + zz,
        iz = [];
      for (uz = ""; lz < bz;) {
        const zz = nz[lz++];
        if (0 === (128 & zz)) iz.push(zz);
        else if (192 === (224 & zz)) {
          const uz = 63 & nz[lz++];
          iz.push((31 & zz) << 6 | uz)
        } else if (224 === (240 & zz)) {
          const uz = 63 & nz[lz++],
            bz = 63 & nz[lz++];
          iz.push((31 & zz) << 12 | uz << 6 | bz)
        } else if (240 === (248 & zz)) {
          let uz = (7 & zz) << 18 | (63 & nz[lz++]) << 12 | (63 & nz[lz++]) << 6 | 63 & nz[lz++];
          uz > 65535 && (uz -= 65536, iz.push(uz >>> 10 & 1023 | 55296), uz = 56320 | 1023 & uz), iz.push(uz)
        } else iz.push(zz);
        iz.length >= 4096 && (uz += Qz.apply(String, iz), iz.length = 0)
      }
      return iz.length > 0 && (uz += Qz.apply(String, iz)), uz
    }

    function yz(zz) {
      let uz = new Array(zz);
      for (let bz = 0; bz < zz; bz++) uz[bz] = Pz();
      return Rz.freezeData ? Object.freeze(uz) : uz
    }

    function Dz(zz) {
      if (Rz.mapsAsObjects) {
        let uz = {};
        for (let bz = 0; bz < zz; bz++) {
          let zz = Yz();
          "__proto__" === zz && (zz = "__proto_"), uz[zz] = Pz()
        }
        return uz
      } {
        let uz = new Map;
        for (let bz = 0; bz < zz; bz++) uz.set(Pz(), Pz());
        return uz
      }
    }
    var Qz = String.fromCharCode;

    function Wz(zz) {
      let uz = lz,
        bz = new Array(zz);
      for (let Ez = 0; Ez < zz; Ez++) {
        const zz = nz[lz++];
        if ((128 & zz) > 0) return void(lz = uz);
        bz[Ez] = zz
      }
      return Qz.apply(String, bz)
    }

    function ez(zz) {
      if (zz < 4) {
        if (zz < 2) {
          if (0 === zz) return "";
          {
            let zz = nz[lz++];
            return (128 & zz) > 1 ? void(lz -= 1) : Qz(zz)
          }
        } {
          let uz = nz[lz++],
            bz = nz[lz++];
          if ((128 & uz) > 0 || (128 & bz) > 0) return void(lz -= 2);
          if (zz < 3) return Qz(uz, bz);
          let Ez = nz[lz++];
          return (128 & Ez) > 0 ? void(lz -= 3) : Qz(uz, bz, Ez)
        }
      } {
        let uz = nz[lz++],
          bz = nz[lz++],
          Ez = nz[lz++],
          iz = nz[lz++];
        if ((128 & uz) > 0 || (128 & bz) > 0 || (128 & Ez) > 0 || (128 & iz) > 0) return void(lz -= 4);
        if (zz < 6) {
          if (4 === zz) return Qz(uz, bz, Ez, iz);
          {
            let zz = nz[lz++];
            return (128 & zz) > 0 ? void(lz -= 5) : Qz(uz, bz, Ez, iz, zz)
          }
        }
        if (zz < 8) {
          let Mz = nz[lz++],
            tz = nz[lz++];
          if ((128 & Mz) > 0 || (128 & tz) > 0) return void(lz -= 6);
          if (zz < 7) return Qz(uz, bz, Ez, iz, Mz, tz);
          let Hz = nz[lz++];
          return (128 & Hz) > 0 ? void(lz -= 7) : Qz(uz, bz, Ez, iz, Mz, tz, Hz)
        } {
          let Mz = nz[lz++],
            tz = nz[lz++],
            Hz = nz[lz++],
            Oz = nz[lz++];
          if ((128 & Mz) > 0 || (128 & tz) > 0 || (128 & Hz) > 0 || (128 & Oz) > 0) return void(lz -= 8);
          if (zz < 10) {
            if (8 === zz) return Qz(uz, bz, Ez, iz, Mz, tz, Hz, Oz);
            {
              let zz = nz[lz++];
              return (128 & zz) > 0 ? void(lz -= 9) : Qz(uz, bz, Ez, iz, Mz, tz, Hz, Oz, zz)
            }
          }
          if (zz < 12) {
            let pz = nz[lz++],
              dz = nz[lz++];
            if ((128 & pz) > 0 || (128 & dz) > 0) return void(lz -= 10);
            if (zz < 11) return Qz(uz, bz, Ez, iz, Mz, tz, Hz, Oz, pz, dz);
            let Fz = nz[lz++];
            return (128 & Fz) > 0 ? void(lz -= 11) : Qz(uz, bz, Ez, iz, Mz, tz, Hz, Oz, pz, dz, Fz)
          } {
            let pz = nz[lz++],
              dz = nz[lz++],
              Fz = nz[lz++],
              Zz = nz[lz++];
            if ((128 & pz) > 0 || (128 & dz) > 0 || (128 & Fz) > 0 || (128 & Zz) > 0) return void(lz -= 12);
            if (zz < 14) {
              if (12 === zz) return Qz(uz, bz, Ez, iz, Mz, tz, Hz, Oz, pz, dz, Fz, Zz);
              {
                let zz = nz[lz++];
                return (128 & zz) > 0 ? void(lz -= 13) : Qz(uz, bz, Ez, iz, Mz, tz, Hz, Oz, pz, dz, Fz, Zz, zz)
              }
            } {
              let Rz = nz[lz++],
                Kz = nz[lz++];
              if ((128 & Rz) > 0 || (128 & Kz) > 0) return void(lz -= 14);
              if (zz < 15) return Qz(uz, bz, Ez, iz, Mz, tz, Hz, Oz, pz, dz, Fz, Zz, Rz, Kz);
              let wz = nz[lz++];
              return (128 & wz) > 0 ? void(lz -= 15) : Qz(uz, bz, Ez, iz, Mz, tz, Hz, Oz, pz, dz, Fz, Zz, Rz, Kz, wz)
            }
          }
        }
      }
    }

    function jz() {
      let zz, uz = nz[lz++];
      if (uz < 192) zz = uz - 160;
      else switch (uz) {
        case 217:
          zz = nz[lz++];
          break;
        case 218:
          zz = dz.getUint16(lz), lz += 2;
          break;
        case 219:
          zz = dz.getUint32(lz), lz += 4;
          break;
        default:
          throw new Error("Expected string")
      }
      return Sz(zz)
    }

    function Iz(zz) {
      return Rz.copyBuffers ? Uint8Array.prototype.slice.call(nz, lz, lz += zz) : nz.subarray(lz, lz += zz)
    }

    function Bz(zz) {
      let uz = nz[lz++];
      if (Xz[uz]) {
        let bz;
        return Xz[uz](nz.subarray(lz, bz = lz += zz), (zz => {
          lz = zz;
          try {
            return Pz()
          } finally {
            lz = bz
          }
        }))
      }
      throw new Error("Unknown extension type " + uz)
    }
    var Cz = new Array(4096);

    function Yz() {
      let zz = nz[lz++];
      if (!(zz >= 160 && zz < 192)) return lz--, kz(Pz());
      if (zz -= 160, wz >= lz) return Hz.slice(lz - Kz, (lz += zz) - Kz);
      if (!(0 == wz && iz < 180)) return qz(zz);
      let uz, bz = 4095 & (zz << 5 ^ (zz > 1 ? dz.getUint16(lz) : zz > 0 ? nz[lz] : 0)),
        Ez = Cz[bz],
        Mz = lz,
        tz = lz + zz - 3,
        Oz = 0;
      if (Ez && Ez.bytes == zz) {
        for (; Mz < tz;) {
          if (uz = dz.getUint32(Mz), uz != Ez[Oz++]) {
            Mz = 1879048192;
            break
          }
          Mz += 4
        }
        for (tz += 3; Mz < tz;)
          if (uz = nz[Mz++], uz != Ez[Oz++]) {
            Mz = 1879048192;
            break
          } if (Mz === tz) return lz = Mz, Ez.string;
        tz -= 3, Mz = lz
      }
      for (Ez = [], Cz[bz] = Ez, Ez.bytes = zz; Mz < tz;) uz = dz.getUint32(Mz), Ez.push(uz), Mz += 4;
      for (tz += 3; Mz < tz;) uz = nz[Mz++], Ez.push(uz);
      let pz = zz < 16 ? ez(zz) : Wz(zz);
      return Ez.string = null != pz ? pz : qz(zz)
    }

    function kz(zz) {
      if ("string" === typeof zz) return zz;
      if ("number" === typeof zz || "boolean" === typeof zz || "bigint" === typeof zz) return zz.toString();
      if (null == zz) return zz + "";
      if (Rz.allowArraysInMapKeys && Array.isArray(zz) && zz.flat().every((zz => ["string", "number", "boolean", "bigint"].includes(typeof zz)))) return zz.flat().toString();
      throw new Error("Invalid property type for record: " + typeof zz)
    }
    const zu = (zz, uz) => {
      let bz = Pz().map(kz),
        Ez = zz;
      void 0 !== uz && (zz = zz < 32 ? -((uz << 5) + zz) : (uz << 5) + zz, bz.highByte = uz);
      let nz = tz[zz];
      return nz && (nz.isShared || xz) && ((tz.restoreStructures || (tz.restoreStructures = []))[zz] = nz), tz[zz] = bz, bz.read = az(bz, Ez), bz.read()
    };
    Xz[0] = () => {}, Xz[0].noBuffer = !0, Xz[66] = zz => {
      let uz = zz.length,
        bz = BigInt(128 & zz[0] ? zz[0] - 256 : zz[0]);
      for (let Ez = 1; Ez < uz; Ez++) bz <<= BigInt(8), bz += BigInt(zz[Ez]);
      return bz
    };
    let uu = {
      Error: Error,
      TypeError: TypeError,
      ReferenceError: ReferenceError
    };
    Xz[101] = () => {
      let zz = Pz();
      return (uu[zz[0]] || Error)(zz[1], {
        cause: zz[2]
      })
    }, Xz[105] = zz => {
      if (!1 === Rz.structuredClone) throw new Error("Structured clone extension is disabled");
      let uz = dz.getUint32(lz - 4);
      pz || (pz = new Map);
      let bz, Ez = nz[lz];
      bz = Ez >= 144 && Ez < 160 || 220 == Ez || 221 == Ez ? [] : {};
      let iz = {
        target: bz
      };
      pz.set(uz, iz);
      let Mz = Pz();
      return iz.used ? Object.assign(bz, Mz) : (iz.target = Mz, Mz)
    }, Xz[112] = zz => {
      if (!1 === Rz.structuredClone) throw new Error("Structured clone extension is disabled");
      let uz = dz.getUint32(lz - 4),
        bz = pz.get(uz);
      return bz.used = !0, bz.target
    }, Xz[115] = () => new Set(Pz());
    const bu = ["Int8", "Uint8", "Uint8Clamped", "Int16", "Uint16", "Int32", "Uint32", "Float32", "Float64", "BigInt64", "BigUint64"].map((zz => zz + "Array"));
    let Eu = "object" === typeof globalThis ? globalThis : window;
    Xz[116] = zz => {
      let uz = zz[0],
        bz = bu[uz];
      if (!bz) {
        if (16 === uz) {
          let uz = new ArrayBuffer(zz.length - 1);
          return new Uint8Array(uz).set(zz.subarray(1)), uz
        }
        throw new Error("Could not find typed array for code " + uz)
      }
      return new Eu[bz](Uint8Array.prototype.slice.call(zz, 1).buffer)
    }, Xz[120] = () => {
      let zz = Pz();
      return new RegExp(zz[0], zz[1])
    };
    const nu = [];

    function iu(zz) {
      vz && vz();
      let uz = iz,
        bz = lz,
        Ez = Zz,
        Mz = Kz,
        Xz = wz,
        fz = Hz,
        sz = Fz,
        rz = pz,
        oz = Oz,
        Nz = new Uint8Array(nz.slice(0, iz)),
        Jz = tz,
        Az = tz.slice(0, tz.length),
        Tz = Rz,
        Lz = xz,
        Pz = zz();
      return iz = uz, lz = bz, Zz = Ez, Kz = Mz, wz = Xz, Hz = fz, Fz = sz, pz = rz, Oz = oz, nz = Nz, xz = Lz, (tz = Jz).splice(0, tz.length, ...Az), Rz = Tz, dz = new DataView(nz.buffer, nz.byteOffset, nz.byteLength), Pz
    }

    function lu() {
      nz = null, pz = null, tz = null
    }
    Xz[98] = zz => {
      let uz = (zz[0] << 24) + (zz[1] << 16) + (zz[2] << 8) + zz[3],
        bz = lz;
      return lz += uz - zz.length, Oz = nu, (Oz = [jz(), jz()]).position0 = 0, Oz.position1 = 0, Oz.postBundlePosition = lz, lz = bz, Pz()
    }, Xz[255] = zz => 4 == zz.length ? new Date(1e3 * (16777216 * zz[0] + (zz[1] << 16) + (zz[2] << 8) + zz[3])) : 8 == zz.length ? new Date(((zz[0] << 22) + (zz[1] << 14) + (zz[2] << 6) + (zz[3] >> 2)) / 1e6 + 1e3 * (4294967296 * (3 & zz[3]) + 16777216 * zz[4] + (zz[5] << 16) + (zz[6] << 8) + zz[7])) : 12 == zz.length ? new Date(((zz[0] << 24) + (zz[1] << 16) + (zz[2] << 8) + zz[3]) / 1e6 + 1e3 * ((128 & zz[4] ? -281474976710656 : 0) + 1099511627776 * zz[6] + 4294967296 * zz[7] + 16777216 * zz[8] + (zz[9] << 16) + (zz[10] << 8) + zz[11])) : new Date("invalid");
    const Mu = new Array(147);
    for (let nb = 0; nb < 256; nb++) Mu[nb] = +("1e" + Math.floor(45.15 - .30103 * nb));
    const tu = Az;
    var Hu = new Az({
      useRecords: !1
    });
    const Ou = Hu.unpack,
      pu = Hu.unpackMultiple,
      du = Hu.unpack,
      Fu = {
        NEVER: 0,
        ALWAYS: 1,
        DECIMAL_ROUND: 3,
        DECIMAL_FIT: 4
      };
    let Zu, Ru, Ku, wu = new Float32Array(1),
      Xu = new Uint8Array(wu.buffer, 0, 4);

    function fu(zz) {
      wu[0] = zz;
      let uz = Mu[(127 & Xu[3]) << 1 | Xu[2] >> 7];
      return (uz * zz + (zz > 0 ? .5 : -.5) | 0) / uz
    }
    try {
      Zu = new TextEncoder
    } catch (Eb) {}
    const su = "undefined" !== typeof Buffer,
      ru = su ? function(zz) {
        return Buffer.allocUnsafeSlow(zz)
      } : Uint8Array,
      ou = su ? Buffer : Uint8Array,
      Nu = su ? 4294967296 : 2144337920;
    let vu, xu, Ju, Au, Tu, Lu = 0,
      Pu = null;
    const Gu = /[\u0080-\uFFFF]/,
      au = Symbol("record-id");
    class Vu extends Az {
      constructor(zz) {
        let uz, bz, Ez, nz;
        super(zz), this.offset = 0;
        let iz = ou.prototype.utf8Write ? function(zz, uz) {
            return vu.utf8Write(zz, uz, vu.byteLength - uz)
          } : !(!Zu || !Zu.encodeInto) && function(zz, uz) {
            return Zu.encodeInto(zz, vu.subarray(uz)).written
          },
          lz = this;
        zz || (zz = {});
        let Mz = zz && zz.sequential,
          tz = zz.structures || zz.saveStructures,
          Hz = zz.maxSharedStructures;
        if (null == Hz && (Hz = tz ? 32 : 0), Hz > 8160) throw new Error("Maximum maxSharedStructure is 8160");
        zz.structuredClone && void 0 == zz.moreTypes && (this.moreTypes = !0);
        let Oz = zz.maxOwnStructures;
        null == Oz && (Oz = tz ? 32 : 64), this.structures || 0 == zz.useRecords || (this.structures = []);
        let pz = Hz > 32 || Oz + Hz > 64,
          dz = Hz + 64,
          Fz = Hz + Oz + 64;
        if (Fz > 8256) throw new Error("Maximum maxSharedStructure + maxOwnStructure is 8192");
        let Zz = [],
          Rz = 0,
          Kz = 0;
        this.pack = this.encode = function(zz, iz) {
          if (vu || (vu = new ru(8192), Ju = vu.dataView || (vu.dataView = new DataView(vu.buffer, 0, 8192)), Lu = 0), Au = vu.length - 10, Au - Lu < 2048 ? (vu = new ru(vu.length), Ju = vu.dataView || (vu.dataView = new DataView(vu.buffer, 0, vu.length)), Au = vu.length - 10, Lu = 0) : Lu = Lu + 7 & 2147483640, uz = Lu, iz & Yu && (Lu += 255 & iz), nz = lz.structuredClone ? new Map : null, lz.bundleStrings && "string" !== typeof zz ? (Pu = [], Pu.size = 1 / 0) : Pu = null, Ez = lz.structures, Ez) {
            Ez.uninitialized && (Ez = lz._mergeStructures(lz.getStructures()));
            let zz = Ez.sharedLength || 0;
            if (zz > Hz) throw new Error("Shared structures is larger than maximum shared structures, try increasing maxSharedStructures to " + Ez.sharedLength);
            if (!Ez.transitions) {
              Ez.transitions = Object.create(null);
              for (let uz = 0; uz < zz; uz++) {
                let zz = Ez[uz];
                if (!zz) continue;
                let bz, nz = Ez.transitions;
                for (let uz = 0, Ez = zz.length; uz < Ez; uz++) {
                  let Ez = zz[uz];
                  bz = nz[Ez], bz || (bz = nz[Ez] = Object.create(null)), nz = bz
                }
                nz[au] = uz + 64
              }
              this.lastNamedStructuresLength = zz
            }
            Mz || (Ez.nextId = zz + 64)
          }
          let tz;
          bz && (bz = !1);
          try {
            lz.randomAccessStructure && zz && zz.constructor && zz.constructor === Object ? Az(zz) : fz(zz);
            let bz = Pu;
            if (Pu && Uu(uz, fz, 0), nz && nz.idsToInsert) {
              let zz = nz.idsToInsert.sort(((zz, uz) => zz.offset > uz.offset ? 1 : -1)),
                Ez = zz.length,
                iz = -1;
              for (; bz && Ez > 0;) {
                let nz = zz[--Ez].offset + uz;
                nz < bz.stringsPosition + uz && -1 === iz && (iz = 0), nz > bz.position + uz ? iz >= 0 && (iz += 6) : (iz >= 0 && (Ju.setUint32(bz.position + uz, Ju.getUint32(bz.position + uz) + iz), iz = -1), bz = bz.previous, Ez++)
              }
              iz >= 0 && bz && Ju.setUint32(bz.position + uz, Ju.getUint32(bz.position + uz) + iz), Lu += 6 * zz.length, Lu > Au && vz(Lu), lz.offset = Lu;
              let Mz = function(zz, uz) {
                let bz, Ez = 6 * uz.length,
                  nz = zz.length - Ez;
                for (; bz = uz.pop();) {
                  let uz = bz.offset,
                    iz = bz.id;
                  zz.copyWithin(uz + Ez, uz, nz), Ez -= 6;
                  let lz = uz + Ez;
                  zz[lz++] = 214, zz[lz++] = 105, zz[lz++] = iz >> 24, zz[lz++] = iz >> 16 & 255, zz[lz++] = iz >> 8 & 255, zz[lz++] = 255 & iz, nz = uz
                }
                return zz
              }(vu.subarray(uz, Lu), zz);
              return nz = null, Mz
            }
            return lz.offset = Lu, iz & Bu ? (vu.start = uz, vu.end = Lu, vu) : vu.subarray(uz, Lu)
          } catch (Eb) {
            throw tz = Eb, Eb
          } finally {
            if (Ez && (wz(), bz && lz.saveStructures)) {
              let bz = Ez.sharedLength || 0,
                nz = vu.subarray(uz, Lu),
                Mz = gu(Ez, lz);
              if (!tz) return !1 === lz.saveStructures(Mz, Mz.isCompatible) ? lz.pack(zz, iz) : (lz.lastNamedStructuresLength = bz, vu.length > 1073741824 && (vu = null), nz)
            }
            vu.length > 1073741824 && (vu = null), iz & Cu && (Lu = uz)
          }
        };
        const wz = () => {
            Kz < 10 && Kz++;
            let zz = Ez.sharedLength || 0;
            if (Ez.length > zz && !Mz && (Ez.length = zz), Rz > 1e4) Ez.transitions = null, Kz = 0, Rz = 0, Zz.length > 0 && (Zz = []);
            else if (Zz.length > 0 && !Mz) {
              for (let zz = 0, uz = Zz.length; zz < uz; zz++) Zz[zz][au] = 0;
              Zz = []
            }
          },
          Xz = zz => {
            var uz = zz.length;
            uz < 16 ? vu[Lu++] = 144 | uz : uz < 65536 ? (vu[Lu++] = 220, vu[Lu++] = uz >> 8, vu[Lu++] = 255 & uz) : (vu[Lu++] = 221, Ju.setUint32(Lu, uz), Lu += 4);
            for (let bz = 0; bz < uz; bz++) fz(zz[bz])
          },
          fz = zz => {
            Lu > Au && (vu = vz(Lu));
            var bz, Ez = typeof zz;
            if ("string" === Ez) {
              let Ez, nz = zz.length;
              if (Pu && nz >= 4 && nz < 4096) {
                if ((Pu.size += nz) > 21760) {
                  let zz, bz, Ez = (Pu[0] ? 3 * Pu[0].length + Pu[1].length : 0) + 10;
                  Lu + Ez > Au && (vu = vz(Lu + Ez)), Pu.position ? (bz = Pu, vu[Lu] = 200, Lu += 3, vu[Lu++] = 98, zz = Lu - uz, Lu += 4, Uu(uz, fz, 0), Ju.setUint16(zz + uz - 3, Lu - uz - zz)) : (vu[Lu++] = 214, vu[Lu++] = 98, zz = Lu - uz, Lu += 4), Pu = ["", ""], Pu.previous = bz, Pu.size = 0, Pu.position = zz
                }
                let bz = Gu.test(zz);
                return Pu[bz ? 0 : 1] += zz, vu[Lu++] = 193, void fz(bz ? -nz : nz)
              }
              Ez = nz < 32 ? 1 : nz < 256 ? 2 : nz < 65536 ? 3 : 5;
              let lz = 3 * nz;
              if (Lu + lz > Au && (vu = vz(Lu + lz)), nz < 64 || !iz) {
                let uz, iz, lz, Mz = Lu + Ez;
                for (uz = 0; uz < nz; uz++) iz = zz.charCodeAt(uz), iz < 128 ? vu[Mz++] = iz : iz < 2048 ? (vu[Mz++] = iz >> 6 | 192, vu[Mz++] = 63 & iz | 128) : 55296 === (64512 & iz) && 56320 === (64512 & (lz = zz.charCodeAt(uz + 1))) ? (iz = 65536 + ((1023 & iz) << 10) + (1023 & lz), uz++, vu[Mz++] = iz >> 18 | 240, vu[Mz++] = iz >> 12 & 63 | 128, vu[Mz++] = iz >> 6 & 63 | 128, vu[Mz++] = 63 & iz | 128) : (vu[Mz++] = iz >> 12 | 224, vu[Mz++] = iz >> 6 & 63 | 128, vu[Mz++] = 63 & iz | 128);
                bz = Mz - Lu - Ez
              } else bz = iz(zz, Lu + Ez);
              bz < 32 ? vu[Lu++] = 160 | bz : bz < 256 ? (Ez < 2 && vu.copyWithin(Lu + 2, Lu + 1, Lu + 1 + bz), vu[Lu++] = 217, vu[Lu++] = bz) : bz < 65536 ? (Ez < 3 && vu.copyWithin(Lu + 3, Lu + 2, Lu + 2 + bz), vu[Lu++] = 218, vu[Lu++] = bz >> 8, vu[Lu++] = 255 & bz) : (Ez < 5 && vu.copyWithin(Lu + 5, Lu + 3, Lu + 3 + bz), vu[Lu++] = 219, Ju.setUint32(Lu, bz), Lu += 4), Lu += bz
            } else if ("number" === Ez)
              if (zz >>> 0 === zz) zz < 32 || zz < 128 && !1 === this.useRecords || zz < 64 && !this.randomAccessStructure ? vu[Lu++] = zz : zz < 256 ? (vu[Lu++] = 204, vu[Lu++] = zz) : zz < 65536 ? (vu[Lu++] = 205, vu[Lu++] = zz >> 8, vu[Lu++] = 255 & zz) : (vu[Lu++] = 206, Ju.setUint32(Lu, zz), Lu += 4);
              else if ((zz | 0) === zz) zz >= -32 ? vu[Lu++] = 256 + zz : zz >= -128 ? (vu[Lu++] = 208, vu[Lu++] = zz + 256) : zz >= -32768 ? (vu[Lu++] = 209, Ju.setInt16(Lu, zz), Lu += 2) : (vu[Lu++] = 210, Ju.setInt32(Lu, zz), Lu += 4);
            else {
              let uz;
              if ((uz = this.useFloat32) > 0 && zz < 4294967296 && zz >= -2147483648) {
                let bz;
                if (vu[Lu++] = 202, Ju.setFloat32(Lu, zz), uz < 4 || ((bz = zz * Mu[(127 & vu[Lu]) << 1 | vu[Lu + 1] >> 7]) | 0) === bz) return void(Lu += 4);
                Lu--
              }
              vu[Lu++] = 203, Ju.setFloat64(Lu, zz), Lu += 8
            } else if ("object" === Ez || "function" === Ez)
              if (zz) {
                if (nz) {
                  let bz = nz.get(zz);
                  if (bz) {
                    if (!bz.id) {
                      let zz = nz.idsToInsert || (nz.idsToInsert = []);
                      bz.id = zz.push(bz)
                    }
                    return vu[Lu++] = 214, vu[Lu++] = 112, Ju.setUint32(Lu, bz.id), void(Lu += 4)
                  }
                  nz.set(zz, {
                    offset: Lu - uz
                  })
                }
                let iz = zz.constructor;
                if (iz === Object) Nz(zz);
                else if (iz === Array) Xz(zz);
                else if (iz === Map)
                  if (this.mapAsEmptyObject) vu[Lu++] = 128;
                  else {
                    (bz = zz.size) < 16 ? vu[Lu++] = 128 | bz : bz < 65536 ? (vu[Lu++] = 222, vu[Lu++] = bz >> 8, vu[Lu++] = 255 & bz) : (vu[Lu++] = 223, Ju.setUint32(Lu, bz), Lu += 4);
                    for (let [uz, bz] of zz) fz(uz), fz(bz)
                  }
                else {
                  for (let uz = 0, bz = Ru.length; uz < bz; uz++) {
                    if (zz instanceof Ku[uz]) {
                      let bz = Ru[uz];
                      if (bz.write) {
                        bz.type && (vu[Lu++] = 212, vu[Lu++] = bz.type, vu[Lu++] = 0);
                        let uz = bz.write.call(this, zz);
                        return void(uz === zz ? Array.isArray(zz) ? Xz(zz) : Nz(zz) : fz(uz))
                      }
                      let Ez, nz = vu,
                        iz = Ju,
                        lz = Lu;
                      vu = null;
                      try {
                        Ez = bz.pack.call(this, zz, (zz => (vu = nz, nz = null, Lu += zz, Lu > Au && vz(Lu), {
                          target: vu,
                          targetView: Ju,
                          position: Lu - zz
                        })), fz)
                      } finally {
                        nz && (vu = nz, Ju = iz, Lu = lz, Au = vu.length - 10)
                      }
                      return void(Ez && (Ez.length + Lu > Au && vz(Ez.length + Lu), Lu = hu(Ez, vu, Lu, bz.type)))
                    }
                  }
                  if (Array.isArray(zz)) Xz(zz);
                  else {
                    if (zz.toJSON) {
                      const uz = zz.toJSON();
                      if (uz !== zz) return fz(uz)
                    }
                    if ("function" === Ez) return fz(this.writeFunction && this.writeFunction(zz));
                    Nz(zz)
                  }
                }
              } else vu[Lu++] = 192;
            else if ("boolean" === Ez) vu[Lu++] = zz ? 195 : 194;
            else if ("bigint" === Ez) {
              if (zz < BigInt(1) << BigInt(63) && zz >= -(BigInt(1) << BigInt(63))) vu[Lu++] = 211, Ju.setBigInt64(Lu, zz);
              else if (zz < BigInt(1) << BigInt(64) && zz > 0) vu[Lu++] = 207, Ju.setBigUint64(Lu, zz);
              else {
                if (!this.largeBigIntToFloat) {
                  if (this.largeBigIntToString) return fz(zz.toString());
                  if (this.useBigIntExtension && zz < BigInt(2) ** BigInt(1023) && zz > -(BigInt(2) ** BigInt(1023))) {
                    vu[Lu++] = 199, Lu++, vu[Lu++] = 66;
                    let uz, bz = [];
                    do {
                      let Ez = zz & BigInt(255);
                      uz = (Ez & BigInt(128)) === (zz < BigInt(0) ? BigInt(128) : BigInt(0)), bz.push(Ez), zz >>= BigInt(8)
                    } while (zz !== BigInt(0) && zz !== BigInt(-1) || !uz);
                    vu[Lu - 2] = bz.length;
                    for (let zz = bz.length; zz > 0;) vu[Lu++] = Number(bz[--zz]);
                    return
                  }
                  throw new RangeError(zz + " was too large to fit in MessagePack 64-bit integer format, use useBigIntExtension, or set largeBigIntToFloat to convert to float-64, or set largeBigIntToString to convert to string")
                }
                vu[Lu++] = 203, Ju.setFloat64(Lu, Number(zz))
              }
              Lu += 8
            } else {
              if ("undefined" !== Ez) throw new Error("Unknown type: " + Ez);
              this.encodeUndefinedAsNil ? vu[Lu++] = 192 : (vu[Lu++] = 212, vu[Lu++] = 0, vu[Lu++] = 0)
            }
          },
          sz = this.variableMapSize || this.coercibleKeyAsNumber || this.skipValues ? zz => {
            let uz;
            if (this.skipValues) {
              uz = [];
              for (let bz in zz) "function" === typeof zz.hasOwnProperty && !zz.hasOwnProperty(bz) || this.skipValues.includes(zz[bz]) || uz.push(bz)
            } else uz = Object.keys(zz);
            let bz, Ez = uz.length;
            if (Ez < 16 ? vu[Lu++] = 128 | Ez : Ez < 65536 ? (vu[Lu++] = 222, vu[Lu++] = Ez >> 8, vu[Lu++] = 255 & Ez) : (vu[Lu++] = 223, Ju.setUint32(Lu, Ez), Lu += 4), this.coercibleKeyAsNumber)
              for (let nz = 0; nz < Ez; nz++) {
                bz = uz[nz];
                let Ez = Number(bz);
                fz(isNaN(Ez) ? bz : Ez), fz(zz[bz])
              } else
                for (let nz = 0; nz < Ez; nz++) fz(bz = uz[nz]), fz(zz[bz])
          } : zz => {
            vu[Lu++] = 222;
            let bz = Lu - uz;
            Lu += 2;
            let Ez = 0;
            for (let uz in zz)("function" !== typeof zz.hasOwnProperty || zz.hasOwnProperty(uz)) && (fz(uz), fz(zz[uz]), Ez++);
            if (Ez > 65535) throw new Error('Object is too large to serialize with fast 16-bit map size, use the "variableMapSize" option to serialize this object');
            vu[bz++ + uz] = Ez >> 8, vu[bz + uz] = 255 & Ez
          },
          rz = !1 === this.useRecords ? sz : zz.progressiveRecords && !pz ? zz => {
            let bz, nz, iz = Ez.transitions || (Ez.transitions = Object.create(null)),
              lz = Lu++ - uz;
            for (let Mz in zz)
              if ("function" !== typeof zz.hasOwnProperty || zz.hasOwnProperty(Mz)) {
                if (bz = iz[Mz], bz) iz = bz;
                else {
                  let tz = Object.keys(zz),
                    Hz = iz;
                  iz = Ez.transitions;
                  let Oz = 0;
                  for (let zz = 0, uz = tz.length; zz < uz; zz++) {
                    let uz = tz[zz];
                    bz = iz[uz], bz || (bz = iz[uz] = Object.create(null), Oz++), iz = bz
                  }
                  lz + uz + 1 == Lu ? (Lu--, xz(iz, tz, Oz)) : Jz(iz, tz, lz, Oz), nz = !0, iz = Hz[Mz]
                }
                fz(zz[Mz])
              } if (!nz) {
              let bz = iz[au];
              bz ? vu[lz + uz] = bz : Jz(iz, Object.keys(zz), lz, 0)
            }
          } : zz => {
            let uz, bz = Ez.transitions || (Ez.transitions = Object.create(null)),
              nz = 0;
            for (let Ez in zz)("function" !== typeof zz.hasOwnProperty || zz.hasOwnProperty(Ez)) && (uz = bz[Ez], uz || (uz = bz[Ez] = Object.create(null), nz++), bz = uz);
            let iz = bz[au];
            iz ? iz >= 96 && pz ? (vu[Lu++] = 96 + (31 & (iz -= 96)), vu[Lu++] = iz >> 5) : vu[Lu++] = iz : xz(bz, bz.__keys__ || Object.keys(zz), nz);
            for (let Ez in zz)("function" !== typeof zz.hasOwnProperty || zz.hasOwnProperty(Ez)) && fz(zz[Ez])
          },
          oz = "function" == typeof this.useRecords && this.useRecords,
          Nz = oz ? zz => {
            oz(zz) ? rz(zz) : sz(zz)
          } : rz,
          vz = zz => {
            let bz;
            if (zz > 16777216) {
              if (zz - uz > Nu) throw new Error("Packed buffer would be larger than maximum buffer size");
              bz = Math.min(Nu, 4096 * Math.round(Math.max((zz - uz) * (zz > 67108864 ? 1.25 : 2), 4194304) / 4096))
            } else bz = 1 + (Math.max(zz - uz << 2, vu.length - 1) >> 12) << 12;
            let Ez = new ru(bz);
            return Ju = Ez.dataView || (Ez.dataView = new DataView(Ez.buffer, 0, bz)), zz = Math.min(zz, vu.length), vu.copy ? vu.copy(Ez, 0, uz, zz) : Ez.set(vu.slice(uz, zz)), Lu -= uz, uz = 0, Au = Ez.length - 10, vu = Ez
          },
          xz = (zz, uz, nz) => {
            let iz = Ez.nextId;
            iz || (iz = 64), iz < dz && this.shouldShareStructure && !this.shouldShareStructure(uz) ? (iz = Ez.nextOwnId, iz < Fz || (iz = dz), Ez.nextOwnId = iz + 1) : (iz >= Fz && (iz = dz), Ez.nextId = iz + 1);
            let lz = uz.highByte = iz >= 96 && pz ? iz - 96 >> 5 : -1;
            zz[au] = iz, zz.__keys__ = uz, Ez[iz - 64] = uz, iz < dz ? (uz.isShared = !0, Ez.sharedLength = iz - 63, bz = !0, lz >= 0 ? (vu[Lu++] = 96 + (31 & iz), vu[Lu++] = lz) : vu[Lu++] = iz) : (lz >= 0 ? (vu[Lu++] = 213, vu[Lu++] = 114, vu[Lu++] = 96 + (31 & iz), vu[Lu++] = lz) : (vu[Lu++] = 212, vu[Lu++] = 114, vu[Lu++] = iz), nz && (Rz += Kz * nz), Zz.length >= Oz && (Zz.shift()[au] = 0), Zz.push(zz), fz(uz))
          },
          Jz = (zz, bz, Ez, nz) => {
            let iz = vu,
              lz = Lu,
              Mz = Au,
              tz = uz;
            vu = xu, Lu = 0, uz = 0, vu || (xu = vu = new ru(8192)), Au = vu.length - 10, xz(zz, bz, nz), xu = vu;
            let Hz = Lu;
            if (vu = iz, Lu = lz, Au = Mz, uz = tz, Hz > 1) {
              let zz = Lu + Hz - 1;
              zz > Au && vz(zz);
              let bz = Ez + uz;
              vu.copyWithin(bz + Hz, bz + 1, Lu), vu.set(xu.slice(0, Hz), bz), Lu = zz
            } else vu[Ez + uz] = xu[0]
          },
          Az = zz => {
            let nz = Tu(zz, vu, uz, Lu, Ez, vz, ((zz, uz, Ez) => {
              if (Ez) return bz = !0;
              Lu = uz;
              let nz = vu;
              return fz(zz), wz(), nz !== vu ? {
                position: Lu,
                targetView: Ju,
                target: vu
              } : Lu
            }), this);
            if (0 === nz) return Nz(zz);
            Lu = nz
          }
      }
      useBuffer(zz) {
        vu = zz, Ju = vu.dataView || (vu.dataView = new DataView(vu.buffer, vu.byteOffset, vu.byteLength)), Lu = 0
      }
      set position(zz) {
        Lu = zz
      }
      get position() {
        return Lu
      }
      set buffer(zz) {
        vu = zz
      }
      get buffer() {
        return vu
      }
      clearSharedData() {
        this.structures && (this.structures = []), this.typedStructs && (this.typedStructs = [])
      }
    }

    function mu(zz, uz, bz, Ez) {
      let nz = zz.byteLength;
      if (nz + 1 < 256) {
        var {
          target: iz,
          position: lz
        } = bz(4 + nz);
        iz[lz++] = 199, iz[lz++] = nz + 1
      } else if (nz + 1 < 65536) {
        var {
          target: iz,
          position: lz
        } = bz(5 + nz);
        iz[lz++] = 200, iz[lz++] = nz + 1 >> 8, iz[lz++] = nz + 1 & 255
      } else {
        var {
          target: iz,
          position: lz,
          targetView: Mz
        } = bz(7 + nz);
        iz[lz++] = 201, Mz.setUint32(lz, nz + 1), lz += 4
      }
      iz[lz++] = 116, iz[lz++] = uz, zz.buffer || (zz = new Uint8Array(zz)), iz.set(new Uint8Array(zz.buffer, zz.byteOffset, zz.byteLength), lz)
    }

    function qu(zz, uz) {
      let bz = zz.byteLength;
      var Ez, nz;
      if (bz < 256) {
        var {
          target: Ez,
          position: nz
        } = uz(bz + 2);
        Ez[nz++] = 196, Ez[nz++] = bz
      } else if (bz < 65536) {
        var {
          target: Ez,
          position: nz
        } = uz(bz + 3);
        Ez[nz++] = 197, Ez[nz++] = bz >> 8, Ez[nz++] = 255 & bz
      } else {
        var {
          target: Ez,
          position: nz,
          targetView: iz
        } = uz(bz + 5);
        Ez[nz++] = 198, iz.setUint32(nz, bz), nz += 4
      }
      Ez.set(zz, nz)
    }

    function hu(zz, uz, bz, Ez) {
      let nz = zz.length;
      switch (nz) {
        case 1:
          uz[bz++] = 212;
          break;
        case 2:
          uz[bz++] = 213;
          break;
        case 4:
          uz[bz++] = 214;
          break;
        case 8:
          uz[bz++] = 215;
          break;
        case 16:
          uz[bz++] = 216;
          break;
        default:
          nz < 256 ? (uz[bz++] = 199, uz[bz++] = nz) : nz < 65536 ? (uz[bz++] = 200, uz[bz++] = nz >> 8, uz[bz++] = 255 & nz) : (uz[bz++] = 201, uz[bz++] = nz >> 24, uz[bz++] = nz >> 16 & 255, uz[bz++] = nz >> 8 & 255, uz[bz++] = 255 & nz)
      }
      return uz[bz++] = Ez, uz.set(zz, bz), bz += nz
    }

    function Uu(zz, uz, bz) {
      if (Pu.length > 0) {
        Ju.setUint32(Pu.position + zz, Lu + bz - Pu.position - zz), Pu.stringsPosition = Lu - zz;
        let Ez = Pu;
        Pu = null, uz(Ez[0]), uz(Ez[1])
      }
    }

    function cu(zz) {
      if (zz.Class) {
        if (!zz.pack && !zz.write) throw new Error("Extension has no pack or write function");
        if (zz.pack && !zz.type) throw new Error("Extension has no type (numeric code to identify the extension)");
        Ku.unshift(zz.Class), Ru.unshift(zz)
      }! function(zz) {
        zz.unpack ? Xz[zz.type] = zz.unpack : Xz[zz.type] = zz
      }(zz)
    }

    function gu(zz, uz) {
      return zz.isCompatible = zz => {
        let bz = !zz || (uz.lastNamedStructuresLength || 0) === zz.length;
        return bz || uz._mergeStructures(zz), bz
      }, zz
    }
    Ku = [Date, Set, Error, RegExp, ArrayBuffer, Object.getPrototypeOf(Uint8Array.prototype).constructor, sz], Ru = [{
      pack(zz, uz, bz) {
        let Ez = zz.getTime() / 1e3;
        if ((this.useTimestamp32 || 0 === zz.getMilliseconds()) && Ez >= 0 && Ez < 4294967296) {
          let {
            target: zz,
            targetView: bz,
            position: nz
          } = uz(6);
          zz[nz++] = 214, zz[nz++] = 255, bz.setUint32(nz, Ez)
        } else if (Ez > 0 && Ez < 4294967296) {
          let {
            target: bz,
            targetView: nz,
            position: iz
          } = uz(10);
          bz[iz++] = 215, bz[iz++] = 255, nz.setUint32(iz, 4e6 * zz.getMilliseconds() + (Ez / 1e3 / 4294967296 | 0)), nz.setUint32(iz + 4, Ez)
        } else if (isNaN(Ez)) {
          if (this.onInvalidDate) return uz(0), bz(this.onInvalidDate());
          let {
            target: zz,
            targetView: Ez,
            position: nz
          } = uz(3);
          zz[nz++] = 212, zz[nz++] = 255, zz[nz++] = 255
        } else {
          let {
            target: bz,
            targetView: nz,
            position: iz
          } = uz(15);
          bz[iz++] = 199, bz[iz++] = 12, bz[iz++] = 255, nz.setUint32(iz, 1e6 * zz.getMilliseconds()), nz.setBigInt64(iz + 4, BigInt(Math.floor(Ez)))
        }
      }
    }, {
      pack(zz, uz, bz) {
        if (this.setAsEmptyObject) return uz(0), bz({});
        let Ez = Array.from(zz),
          {
            target: nz,
            position: iz
          } = uz(this.moreTypes ? 3 : 0);
        this.moreTypes && (nz[iz++] = 212, nz[iz++] = 115, nz[iz++] = 0), bz(Ez)
      }
    }, {
      pack(zz, uz, bz) {
        let {
          target: Ez,
          position: nz
        } = uz(this.moreTypes ? 3 : 0);
        this.moreTypes && (Ez[nz++] = 212, Ez[nz++] = 101, Ez[nz++] = 0), bz([zz.name, zz.message, zz.cause])
      }
    }, {
      pack(zz, uz, bz) {
        let {
          target: Ez,
          position: nz
        } = uz(this.moreTypes ? 3 : 0);
        this.moreTypes && (Ez[nz++] = 212, Ez[nz++] = 120, Ez[nz++] = 0), bz([zz.source, zz.flags])
      }
    }, {
      pack(zz, uz) {
        this.moreTypes ? mu(zz, 16, uz) : qu(su ? Buffer.from(zz) : new Uint8Array(zz), uz)
      }
    }, {
      pack(zz, uz) {
        let bz = zz.constructor;
        bz !== ou && this.moreTypes ? mu(zz, bu.indexOf(bz.name), uz) : qu(zz, uz)
      }
    }, {
      pack(zz, uz) {
        let {
          target: bz,
          position: Ez
        } = uz(1);
        bz[Ez] = 193
      }
    }];
    let Su = new Vu({
      useRecords: !1
    });
    const yu = Su.pack,
      Du = Su.pack,
      Qu = Vu,
      {
        NEVER: Wu,
        ALWAYS: eu,
        DECIMAL_ROUND: ju,
        DECIMAL_FIT: Iu
      } = Fu,
      Bu = 512,
      Cu = 1024,
      Yu = 2048;
    const ku = function(zz) {
        let uz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        if (!zz || "object" !== typeof zz) throw new Error("first argument must be an Iterable, Async Iterable, Iterator, Async Iterator, or a promise");
        const bz = new Az(uz);
        let Ez;
        const nz = zz => {
          let uz;
          Ez && (zz = Buffer.concat([Ez, zz]), Ez = void 0);
          try {
            uz = bz.unpackMultiple(zz)
          } catch (nz) {
            if (!nz.incomplete) throw nz;
            Ez = zz.slice(nz.lastPosition), uz = nz.values
          }
          return uz
        };
        return "function" === typeof zz[Symbol.iterator] ? function*() {
          for (const uz of zz) yield* nz(uz)
        }() : "function" === typeof zz[Symbol.asyncIterator] ? async function*() {
          for await (const uz of zz) yield* nz(uz)
        }(): void 0
      },
      zb = function(zz) {
        let uz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        if (zz && "object" === typeof zz) {
          if ("function" === typeof zz[Symbol.iterator]) return function*(zz, uz) {
            const bz = new Vu(uz);
            for (const Ez of zz) yield bz.pack(Ez)
          }(zz, uz);
          if ("function" === typeof zz.then || "function" === typeof zz[Symbol.asyncIterator]) return async function*(zz, uz) {
            const bz = new Vu(uz);
            for await (const Ez of zz) yield bz.pack(Ez)
          }(zz, uz);
          throw new Error("first argument must be an Iterable, Async Iterable, Iterator, Async Iterator, or a Promise")
        }
        throw new Error("first argument must be an Iterable, Async Iterable, or a Promise for an Async Iterable")
      },
      ub = !1,
      bb = !0
  },
  8774: (zz, uz, bz) => {
    bz.r(uz), bz.d(uz, {
      $changes: () => Rz,
      $childType: () => Kz,
      $decoder: () => Oz,
      $deleteByIndex: () => Fz,
      $encoder: () => Hz,
      $filter: () => pz,
      $getByIndex: () => dz,
      $numFields: () => Jz,
      $refId: () => Mz,
      $track: () => tz,
      $values: () => rz,
      ArraySchema: () => bE,
      Callbacks: () => bn,
      ChangeTree: () => Lb,
      CollectionSchema: () => iE,
      Decoder: () => jE,
      Encoder: () => DE,
      FieldBuilder: () => tE,
      MapSchema: () => nE,
      Metadata: () => ju,
      OPERATION: () => nz,
      Reflection: () => YE,
      ReflectionField: () => BE,
      ReflectionType: () => CE,
      Root: () => PE,
      Schema: () => TE,
      SetSchema: () => lE,
      StateCallbackStrategy: () => un,
      StateView: () => qE,
      StreamSchema: () => ME,
      TypeContext: () => gu,
      createPool: () => nn,
      decode: () => fu,
      decodeKeyValueOperation: () => Bb,
      decodeSchemaOperation: () => Ib,
      defineCustomTypes: () => Nu,
      defineTypes: () => xE,
      deprecated: () => NE,
      dumpChanges: () => AE,
      encode: () => uu,
      encodeArray: () => Ub,
      encodeIndexedEntry: () => qb,
      encodeKeyValueOperation: () => hb,
      encodeMapEntry: () => mb,
      encodeSchemaOperation: () => Vb,
      VZ: () => RE,
      fullStateOnly: () => fE,
      getDecoderStateCallbacks: () => kE,
      getEncodeDescriptor: () => zb,
      getRawChangesCallback: () => zn,
      isBuilder: () => HE,
      patchOnly: () => XE,
      registerType: () => ou,
      schema: () => JE,
      t: () => FE,
      type: () => sE,
      unreliable: () => wE,
      view: () => KE
    });
    const Ez = 255;
    var nz;

    function iz(zz) {
      Object.defineProperty(zz, Symbol.metadata, {
        value: void 0,
        writable: !0,
        configurable: !0,
        enumerable: !1
      })
    }! function(zz) {
      zz[zz.ADD = 128] = "ADD", zz[zz.REPLACE = 0] = "REPLACE", zz[zz.DELETE = 64] = "DELETE", zz[zz.DELETE_AND_MOVE = 96] = "DELETE_AND_MOVE", zz[zz.MOVE_AND_ADD = 160] = "MOVE_AND_ADD", zz[zz.DELETE_AND_ADD = 192] = "DELETE_AND_ADD", zz[zz.CLEAR = 10] = "CLEAR", zz[zz.REVERSE = 15] = "REVERSE", zz[zz.MOVE = 32] = "MOVE", zz[zz.DELETE_BY_REFID = 33] = "DELETE_BY_REFID", zz[zz.ADD_BY_REFID = 129] = "ADD_BY_REFID"
    }(nz || (nz = {})), Symbol.metadata ??= Symbol.for("Symbol.metadata");
    const lz = "undefined" !== typeof globalThis ? globalThis : "undefined" !== typeof global ? global : "undefined" !== typeof self ? self : "undefined" !== typeof window ? window : {};
    if ("function" === typeof Symbol && "function" !== typeof Symbol.for) {
      const zz = "colyseus.symbolRegistry",
        uz = lz[zz] || (lz[zz] = Object.create(null));
      Symbol.for = function(zz) {
        return uz[zz] || (uz[zz] = Symbol(zz))
      }, Symbol.keyFor = function(zz) {
        for (const bz in uz)
          if (uz[bz] === zz) return bz
      }
    }
    const Mz = Symbol.for("$refId"),
      tz = "~track",
      Hz = "~encoder",
      Oz = "~decoder",
      pz = "~filter",
      dz = "~getByIndex",
      Fz = "~deleteByIndex",
      Zz = "~resyncPrune",
      Rz = Symbol.for("$changes"),
      Kz = Symbol.for("$childType"),
      wz = Symbol.for("$proxyTarget"),
      Xz = "~onEncodeEnd",
      fz = "~reset",
      sz = "~onDecodeEnd",
      rz = Symbol.for("$values"),
      oz = "~builder",
      Nz = "~descriptors",
      vz = "~__encodeDescriptor",
      xz = "~encoders",
      Jz = "~__numFields",
      Az = "~__refTypeFieldIndexes",
      Tz = "~__viewFieldIndexes",
      Lz = "$__fieldIndexesByViewTag",
      Pz = "~__unreliableFieldIndexes",
      Gz = "~__patchOnlyFieldIndexes",
      az = "~__fullSyncSkipIndexes",
      Vz = "~__fullStateOnlyFieldIndexes",
      mz = "~__streamFieldIndexes",
      qz = "~__streamPriorities";
    let hz;
    try {
      hz = new TextEncoder
    } catch (Mn) {}
    const Uz = new ArrayBuffer(8),
      cz = new Int32Array(Uz),
      gz = new Float32Array(Uz),
      Sz = new Float64Array(Uz),
      yz = new BigInt64Array(Uz),
      Dz = "undefined" !== typeof Buffer && Buffer.byteLength ? Buffer.byteLength : function(zz, uz) {
        for (var bz = 0, Ez = 0, nz = 0, iz = zz.length; nz < iz; nz++)(bz = zz.charCodeAt(nz)) < 128 ? Ez += 1 : bz < 2048 ? Ez += 2 : bz < 55296 || bz >= 57344 ? Ez += 3 : (nz++, Ez += 4);
        return Ez
      };

    function Qz(zz, uz, bz) {
      for (var Ez = 0, nz = 0, iz = uz.length; nz < iz; nz++)(Ez = uz.charCodeAt(nz)) < 128 ? zz[bz.offset++] = Ez : Ez < 2048 ? (zz[bz.offset] = 192 | Ez >> 6, zz[bz.offset + 1] = 128 | 63 & Ez, bz.offset += 2) : Ez < 55296 || Ez >= 57344 ? (zz[bz.offset] = 224 | Ez >> 12, zz[bz.offset + 1] = 128 | Ez >> 6 & 63, zz[bz.offset + 2] = 128 | 63 & Ez, bz.offset += 3) : (nz++, Ez = 65536 + ((1023 & Ez) << 10 | 1023 & uz.charCodeAt(nz)), zz[bz.offset] = 240 | Ez >> 18, zz[bz.offset + 1] = 128 | Ez >> 12 & 63, zz[bz.offset + 2] = 128 | Ez >> 6 & 63, zz[bz.offset + 3] = 128 | 63 & Ez, bz.offset += 4)
    }

    function Wz(zz, uz, bz) {
      zz[bz.offset++] = 255 & uz
    }

    function ez(zz, uz, bz) {
      zz[bz.offset++] = 255 & uz, zz[bz.offset++] = uz >> 8 & 255
    }

    function jz(zz, uz, bz) {
      zz[bz.offset++] = 255 & uz, zz[bz.offset++] = uz >> 8 & 255
    }

    function Iz(zz, uz, bz) {
      zz[bz.offset++] = 255 & uz, zz[bz.offset++] = uz >> 8 & 255, zz[bz.offset++] = uz >> 16 & 255, zz[bz.offset++] = uz >> 24 & 255
    }

    function Bz(zz, uz, bz) {
      const Ez = uz >> 24,
        nz = uz >> 16,
        iz = uz >> 8,
        lz = uz;
      zz[bz.offset++] = 255 & lz, zz[bz.offset++] = 255 & iz, zz[bz.offset++] = 255 & nz, zz[bz.offset++] = 255 & Ez
    }

    function Cz(zz, uz, bz) {
      const Ez = Math.floor(uz / Math.pow(2, 32));
      Bz(zz, uz >>> 0, bz), Bz(zz, Ez, bz)
    }

    function Yz(zz, uz, bz) {
      const Ez = uz / Math.pow(2, 32) | 0;
      Bz(zz, uz >>> 0, bz), Bz(zz, Ez, bz)
    }

    function kz(zz, uz, bz) {
      gz[0] = uz, Iz(zz, cz[0], bz)
    }

    function zu(zz, uz, bz) {
      Sz[0] = uz, Iz(zz, cz[0], bz), Iz(zz, cz[1], bz)
    }
    const uu = {
        int8: Wz,
        uint8: function(zz, uz, bz) {
          zz[bz.offset++] = 255 & uz
        },
        int16: ez,
        uint16: jz,
        int32: Iz,
        uint32: Bz,
        int64: Cz,
        uint64: Yz,
        bigint64: function(zz, uz, bz) {
          yz[0] = BigInt.asIntN(64, uz), Iz(zz, cz[0], bz), Iz(zz, cz[1], bz)
        },
        biguint64: function(zz, uz, bz) {
          yz[0] = BigInt.asIntN(64, uz), Iz(zz, cz[0], bz), Iz(zz, cz[1], bz)
        },
        float32: kz,
        float64: zu,
        boolean: function(zz, uz, bz) {
          zz[bz.offset++] = uz ? 1 : 0
        },
        string: function(zz, uz, bz) {
          uz || (uz = "");
          let Ez = Dz(uz, "utf8"),
            nz = 0;
          if (Ez < 32) zz[bz.offset++] = 160 | Ez, nz = 1;
          else if (Ez < 256) zz[bz.offset++] = 217, zz[bz.offset++] = Ez, nz = 2;
          else if (Ez < 65536) zz[bz.offset++] = 218, jz(zz, Ez, bz), nz = 3;
          else {
            if (!(Ez < 4294967296)) throw new Error("String too long");
            zz[bz.offset++] = 219, Bz(zz, Ez, bz), nz = 5
          }
          return Qz(zz, uz, bz), nz + Ez
        },
        number: function zz(uz, bz, Ez) {
          return isNaN(bz) ? zz(uz, 0, Ez) : isFinite(bz) ? bz !== (0 | bz) ? Math.abs(bz) <= 34028235e31 && (gz[0] = bz, Math.abs(Math.abs(gz[0]) - Math.abs(bz)) < 1e-4) ? (uz[Ez.offset++] = 202, kz(uz, bz, Ez), 5) : (uz[Ez.offset++] = 203, zu(uz, bz, Ez), 9) : bz >= 0 ? bz < 128 ? (uz[Ez.offset++] = 255 & bz, 1) : bz < 256 ? (uz[Ez.offset++] = 204, uz[Ez.offset++] = 255 & bz, 2) : bz < 65536 ? (uz[Ez.offset++] = 205, jz(uz, bz, Ez), 3) : bz < 4294967296 ? (uz[Ez.offset++] = 206, Bz(uz, bz, Ez), 5) : (uz[Ez.offset++] = 207, Yz(uz, bz, Ez), 9) : bz >= -32 ? (uz[Ez.offset++] = 224 | bz + 32, 1) : bz >= -128 ? (uz[Ez.offset++] = 208, Wz(uz, bz, Ez), 2) : bz >= -32768 ? (uz[Ez.offset++] = 209, ez(uz, bz, Ez), 3) : bz >= -2147483648 ? (uz[Ez.offset++] = 210, Iz(uz, bz, Ez), 5) : (uz[Ez.offset++] = 211, Cz(uz, bz, Ez), 9) : zz(uz, bz > 0 ? Number.MAX_SAFE_INTEGER : -Number.MAX_SAFE_INTEGER, Ez)
        },
        utf8Write: Qz,
        utf8Length: Dz
      },
      bu = new ArrayBuffer(8),
      Eu = new Int32Array(bu),
      nu = new Float32Array(bu),
      iu = new Float64Array(bu),
      lu = new BigUint64Array(bu),
      Mu = new BigInt64Array(bu);

    function tu(zz, uz, bz) {
      bz > zz.length - uz.offset && (bz = zz.length - uz.offset);
      for (var Ez = "", nz = 0, iz = uz.offset, lz = uz.offset + bz; iz < lz; iz++) {
        var Mz = zz[iz];
        if (0 !== (128 & Mz))
          if (192 !== (224 & Mz))
            if (224 !== (240 & Mz)) {
              if (240 !== (248 & Mz)) {
                console.error("decode.utf8Read(): Invalid byte " + Mz + " at offset " + iz + ". Skip to end of string: " + (uz.offset + bz));
                break
              }(nz = (7 & Mz) << 18 | (63 & zz[++iz]) << 12 | (63 & zz[++iz]) << 6 | 63 & zz[++iz]) >= 65536 ? (nz -= 65536, Ez += String.fromCharCode(55296 + (nz >>> 10), 56320 + (1023 & nz))) : Ez += String.fromCharCode(nz)
            } else Ez += String.fromCharCode((15 & Mz) << 12 | (63 & zz[++iz]) << 6 | 63 & zz[++iz]);
        else Ez += String.fromCharCode((31 & Mz) << 6 | 63 & zz[++iz]);
        else Ez += String.fromCharCode(Mz)
      }
      return uz.offset += bz, Ez
    }

    function Hu(zz, uz) {
      return Ou(zz, uz) << 24 >> 24
    }

    function Ou(zz, uz) {
      return zz[uz.offset++]
    }

    function pu(zz, uz) {
      return du(zz, uz) << 16 >> 16
    }

    function du(zz, uz) {
      return zz[uz.offset++] | zz[uz.offset++] << 8
    }

    function Fu(zz, uz) {
      return zz[uz.offset++] | zz[uz.offset++] << 8 | zz[uz.offset++] << 16 | zz[uz.offset++] << 24
    }

    function Zu(zz, uz) {
      return Fu(zz, uz) >>> 0
    }

    function Ru(zz, uz) {
      return Eu[0] = Fu(zz, uz), nu[0]
    }

    function Ku(zz, uz) {
      return Eu[0] = Fu(zz, uz), Eu[1] = Fu(zz, uz), iu[0]
    }

    function wu(zz, uz) {
      const bz = Zu(zz, uz);
      return Fu(zz, uz) * Math.pow(2, 32) + bz
    }

    function Xu(zz, uz) {
      const bz = Zu(zz, uz);
      return Zu(zz, uz) * Math.pow(2, 32) + bz
    }
    const fu = {
        utf8Read: tu,
        int8: Hu,
        uint8: Ou,
        int16: pu,
        uint16: du,
        int32: Fu,
        uint32: Zu,
        float32: Ru,
        float64: Ku,
        int64: wu,
        uint64: Xu,
        bigint64: function(zz, uz) {
          return Eu[0] = Fu(zz, uz), Eu[1] = Fu(zz, uz), Mu[0]
        },
        biguint64: function(zz, uz) {
          return Eu[0] = Fu(zz, uz), Eu[1] = Fu(zz, uz), lu[0]
        },
        boolean: function(zz, uz) {
          return Ou(zz, uz) > 0
        },
        string: function(zz, uz) {
          const bz = zz[uz.offset++];
          let Ez;
          return bz < 192 ? Ez = 31 & bz : 217 === bz ? Ez = Ou(zz, uz) : 218 === bz ? Ez = du(zz, uz) : 219 === bz && (Ez = Zu(zz, uz)), tu(zz, uz, Ez)
        },
        number: function(zz, uz) {
          const bz = zz[uz.offset++];
          return bz < 128 ? bz : 202 === bz ? Ru(zz, uz) : 203 === bz ? Ku(zz, uz) : 204 === bz ? Ou(zz, uz) : 205 === bz ? du(zz, uz) : 206 === bz ? Zu(zz, uz) : 207 === bz ? Xu(zz, uz) : 208 === bz ? Hu(zz, uz) : 209 === bz ? pu(zz, uz) : 210 === bz ? Fu(zz, uz) : 211 === bz ? wu(zz, uz) : bz > 223 ? -1 * (255 - bz + 1) : void 0
        },
        stringCheck: function(zz, uz) {
          const bz = zz[uz.offset];
          return bz < 192 && bz > 160 || 217 === bz || 218 === bz || 219 === bz
        }
      },
      su = {},
      ru = new Map;

    function ou(zz, uz) {
      uz.constructor && (Object.prototype.hasOwnProperty.call(uz, "constructor") && null == uz.constructor[Symbol.metadata] && iz(uz.constructor), ru.set(uz.constructor, zz), su[zz] = uz), uz.encode && (uu[zz] = uz.encode), uz.decode && (fu[zz] = uz.decode)
    }

    function Nu(zz) {
      for (const uz in zz) ou(uz, zz[uz]);
      return zz => sE(zz)
    }
    const vu = "ArraySchema does not support streaming \u2014 positional ops (splice / unshift / reverse) shift subsequent indexes, so holding ADDs back for a later tick under `maxPerTick` would desync the decoder. Use `t.stream(X)` (stable monotonic positions) or `t.map(X).stream()` (stable keys) instead.";

    function xu() {
      return {
        pendingByView: new Map,
        sentByView: new Map,
        broadcastPending: new Set,
        sentBroadcast: new Set,
        broadcastDeletes: new Set,
        maxPerTick: 32
      }
    }

    function Ju(zz) {
      return zz._stream ??= xu()
    }

    function Au(zz, uz, bz) {
      0 === uz.activeViews.size && Ju(zz).broadcastPending.add(bz)
    }

    function Tu(zz, uz, bz, Ez) {
      const iz = zz._stream;
      if (void 0 === iz) return !0;
      let lz = !1;
      return iz.broadcastPending.delete(Ez) ? lz = !0 : iz.sentBroadcast.delete(Ez) && iz.broadcastDeletes.add(Ez), uz.forEachActiveView((zz => {
        const uz = iz.pendingByView.get(zz.id);
        if (uz?.has(Ez)) return uz.delete(Ez), void(lz = !0);
        const Mz = iz.sentByView.get(zz.id);
        if (Mz?.has(Ez)) {
          Mz.delete(Ez);
          let uz = zz.changes.get(bz);
          void 0 === uz && (uz = new Map, zz.changes.set(bz, uz)), uz.set(Ez, nz.DELETE)
        }
      })), lz
    }

    function Lu(zz, uz) {
      const bz = zz._stream?.pendingByView;
      if (void 0 === bz) return !1;
      for (const [Ez, nz] of bz)
        if (nz.size > 0 && void 0 !== uz.activeViews.get(Ez)?.deref()) return !0;
      return !1
    }

    function Pu(zz) {
      const uz = zz._stream;
      return void 0 !== uz && (uz.broadcastPending.size > 0 || uz.broadcastDeletes.size > 0)
    }

    function Gu(zz, uz, bz) {
      const Ez = Ju(zz);
      let nz = Ez.pendingByView.get(uz);
      void 0 === nz && (nz = new Set, Ez.pendingByView.set(uz, nz)), nz.add(bz)
    }

    function au(zz, uz) {
      const bz = zz._stream;
      void 0 !== bz && (bz.pendingByView.delete(uz), bz.sentByView.delete(uz), bz.priorityByView?.delete(uz))
    }
    const Vu = {
      8: "uint8",
      16: "uint16",
      32: "uint32"
    };

    function mu(zz) {
      if (null == zz || "object" !== typeof zz) throw new Error("t.quantized(): options object with { min, max } is required.");
      const {
        min: uz,
        max: bz
      } = zz;
      if ("number" !== typeof uz || "number" !== typeof bz || !(bz > uz) || !Number.isFinite(uz) || !Number.isFinite(bz)) throw new Error(`t.quantized(): require finite min < max (got min=${uz}, max=${bz}).`);
      const Ez = zz.bits ?? 16;
      if (8 !== Ez && 16 !== Ez && 32 !== Ez) throw new Error(`t.quantized(): bits must be 8, 16 or 32 (got ${Ez}).`);
      const nz = zz.mode ?? "clamp";
      if ("clamp" !== nz && "wrap" !== nz) throw new Error(`t.quantized(): mode must be "clamp" or "wrap" (got ${JSON.stringify(nz)}).`);
      const iz = "wrap" === nz,
        lz = Math.pow(2, Ez);
      return {
        min: uz,
        max: bz,
        bits: Ez,
        wrap: iz,
        wire: Vu[Ez],
        range: bz - uz,
        span: iz ? lz : uz === -bz ? lz - 2 : lz - 1
      }
    }

    function qu(zz) {
      return null !== zz && "object" === typeof zz && void 0 !== zz.quantized
    }

    function hu(zz, uz) {
      if (zz.wrap) {
        if (!Number.isFinite(uz)) return 0;
        const bz = zz.range;
        let Ez = (uz - zz.min) % bz;
        Ez < 0 && (Ez += bz);
        const nz = zz.span;
        return Math.floor(Ez / bz * nz + .5) % nz
      }
      if (uz !== uz) return 0;
      const bz = uz < zz.min ? zz.min : uz > zz.max ? zz.max : uz;
      return Math.floor((bz - zz.min) / zz.range * zz.span + .5)
    }

    function Uu(zz, uz) {
      return zz.min + uz / zz.span * zz.range
    }

    function cu(zz) {
      const uz = uu[zz.wire];
      return (bz, Ez, nz) => uz(bz, hu(zz, Ez), nz)
    }
    class gu {
      types = {};
      schemas = new Map;
      hasFilters = !1;
      static inheritedTypes = new WeakMap;
      static cachedContexts = new WeakMap;
      static register(zz) {
        const uz = Object.getPrototypeOf(zz);
        if (uz !== TE) {
          let bz = gu.inheritedTypes.get(uz);
          bz || (bz = new Set, gu.inheritedTypes.set(uz, bz)), bz.add(zz)
        }
      }
      static cache(zz) {
        let uz = gu.cachedContexts.get(zz);
        return uz || (uz = new gu(zz), gu.cachedContexts.set(zz, uz)), uz
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
        let uz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.schemas.size;
        return !this.schemas.has(zz) && (this.types[uz] = zz, null == zz[Symbol.metadata] && ju.initialize(zz), this.schemas.set(zz, uz), !0)
      }
      getTypeId(zz) {
        return this.schemas.get(zz)
      }
      discoverTypes(zz) {
        if (!this.add(zz)) return;
        gu.inheritedTypes.get(zz)?.forEach((zz => {
          this.discoverTypes(zz)
        }));
        let uz = zz;
        for (;
          (uz = Object.getPrototypeOf(uz)) && uz !== TE && uz !== Function.prototype;) this.discoverTypes(uz);
        const bz = zz[Symbol.metadata];
        (bz[Tz] || bz[mz]) && (this.hasFilters = !0);
        for (const Ez in bz) {
          const zz = bz[Ez].type;
          if ("string" !== typeof zz && !qu(zz))
            if ("function" === typeof zz) this.discoverTypes(zz);
            else {
              const uz = Object.values(zz)[0];
              if ("string" === typeof uz) continue;
              this.discoverTypes(uz)
            }
        }
      }
      debug() {
        return `TypeContext ->\n\tSchema types: ${this.schemas.size}\n\thasFilters: ${this.hasFilters}`
      }
    }

    function Su(zz) {
      const uz = Du(zz);
      return uz ? {
        complexTypeKlass: su[uz],
        childType: zz[uz]
      } : {
        complexTypeKlass: !1,
        childType: zz
      }
    }

    function yu(zz, uz) {
      const bz = Qu(zz),
        Ez = Du(bz),
        nz = Ez && Du(bz[Ez]);
      if (nz) throw new Error(`${uz?`${uz}: `:""}@colyseus/schema: nested collections are not supported ("${Ez}" of "${nz}"). Collections can only hold primitive types or Schema classes, wrap the inner ${nz} in a Schema class.`);
      return bz
    }

    function Du(zz) {
      return "object" === typeof zz && null !== zz ? Object.keys(zz).find((zz => void 0 !== su[zz])) : void 0
    }

    function Qu(zz) {
      if ("object" !== typeof zz || null === zz) return zz;
      if (Array.isArray(zz)) return {
        array: Qu(zz[0])
      };
      const uz = function(zz) {
        const uz = Object.keys(zz),
          bz = uz.filter((zz => /\d+/.test(zz)));
        if (bz.length > 0 && bz.length === uz.length / 2 && zz[zz[bz[0]]] == bz[0]) return "number";
        if (uz.length > 0 && uz.every((uz => zz[uz] === uz))) return "string"
      }(zz);
      if (uz) return uz;
      if (qu(zz)) return "string" === typeof zz.quantized.wire ? zz : {
        quantized: mu(zz.quantized)
      };
      if (void 0 !== zz.type) return Qu(zz.type);
      const bz = Du(zz);
      return bz && (zz[bz] = Qu(zz[bz])), zz
    }
    const Wu = [Az, Pz, Gz, az, Vz, mz, xz];

    function eu(zz, uz, bz) {
      zz[uz] || Object.defineProperty(zz, uz, {
        value: [],
        enumerable: !1,
        configurable: !0,
        writable: !0
      }), zz[uz].push(bz)
    }
    const ju = {
        addField(zz, uz, bz, Ez, nz) {
          if (uz >= 63) throw new Error(`Can't define field '${bz}'.\nSchema instances may only have up to 63 fields.`);
          zz[uz] = Object.assign(zz[uz] || {}, {
            type: Ez,
            index: uz,
            name: bz
          }), Object.defineProperty(zz, Nz, {
            value: zz[Nz] || {},
            enumerable: !1,
            configurable: !0
          }), zz[Nz][bz] = nz || {
            value: void 0,
            writable: !0,
            enumerable: !0,
            configurable: !0
          }, Object.defineProperty(zz, Jz, {
            value: uz,
            enumerable: !1,
            configurable: !0
          }), Object.defineProperty(zz, bz, {
            value: uz,
            enumerable: !1,
            configurable: !0
          }), "string" === typeof zz[uz].type || qu(zz[uz].type) || (void 0 === zz[Az] && Object.defineProperty(zz, Az, {
            value: [],
            enumerable: !1,
            configurable: !0
          }), zz[Az].push(uz));
          const iz = zz[uz].type;
          if (iz && "object" === typeof iz && void 0 !== iz.stream) {
            if (void 0 !== iz.array) throw new Error(vu);
            zz[uz].stream = !0, zz[mz] || Object.defineProperty(zz, mz, {
              value: [],
              enumerable: !1,
              configurable: !0,
              writable: !0
            }), zz[mz].includes(uz) || zz[mz].push(uz);
            const nz = Ez?.priority;
            "function" === typeof nz && ju.setStreamPriority(zz, bz, nz)
          }
        },
        setTag(zz, uz, bz) {
          const Ez = zz[uz];
          if (zz[Ez].tag = bz, zz[Tz] || (Object.defineProperty(zz, Tz, {
              value: [],
              enumerable: !1,
              configurable: !0
            }), Object.defineProperty(zz, Lz, {
              value: {},
              enumerable: !1,
              configurable: !0
            })), zz[Tz].push(Ez), bz < 0) zz[Lz][bz] || (zz[Lz][bz] = []), zz[Lz][bz].push(Ez);
          else
            for (let nz = bz; nz > 0; nz &= nz - 1) {
              const uz = nz & -nz;
              zz[Lz][uz] || (zz[Lz][uz] = []), zz[Lz][uz].push(Ez)
            }
        },
        setUnreliable(zz, uz) {
          const bz = zz[uz];
          if ("string" !== typeof zz[bz].type) throw new Error(`@unreliable cannot be applied to ref-type field "${uz}". For ref-type fields, mark each primitive sub-field with @unreliable instead. See README "Limitations and best practices".`);
          zz[bz].unreliable = !0, zz[Pz] || Object.defineProperty(zz, Pz, {
            value: [],
            enumerable: !1,
            configurable: !0,
            writable: !0
          }), zz[Pz].push(bz)
        },
        setPatchOnly(zz, uz) {
          const bz = zz[uz];
          if (zz[bz].fullStateOnly) throw new Error(`field "${uz}" cannot be both patchOnly and fullStateOnly \u2014 those are the only two delivery channels, so the field would never reach a client.`);
          zz[bz].patchOnly = !0, eu(zz, Gz, bz), eu(zz, az, bz)
        },
        setDeprecated(zz, uz) {
          const bz = zz[uz];
          zz[bz].deprecated = !0, eu(zz, az, bz), Object.defineProperty(zz, bz, {
            value: zz[bz],
            enumerable: !1,
            configurable: !0
          })
        },
        setFullStateOnly(zz, uz) {
          const bz = zz[uz];
          if (zz[bz].patchOnly) throw new Error(`field "${uz}" cannot be both patchOnly and fullStateOnly \u2014 those are the only two delivery channels, so the field would never reach a client.`);
          zz[bz].fullStateOnly = !0, eu(zz, Vz, bz)
        },
        setStream(zz, uz) {
          const bz = zz[uz];
          zz[bz].stream = !0, zz[mz] || Object.defineProperty(zz, mz, {
            value: [],
            enumerable: !1,
            configurable: !0,
            writable: !0
          }), zz[mz].push(bz)
        },
        setStreamPriority(zz, uz, bz) {
          const Ez = zz[uz];
          zz[qz] || Object.defineProperty(zz, qz, {
            value: {},
            enumerable: !1,
            configurable: !0,
            writable: !0
          }), zz[qz][Ez] = bz
        },
        getStreamPriority: (zz, uz) => zz?.[qz]?.[uz],
        defineField(zz, uz, bz, Ez, nz) {
          const iz = yu(nz, `${zz.name}.${Ez}`),
            {
              complexTypeKlass: lz,
              childType: Mz
            } = Su(iz);
          ju.addField(uz, bz, Ez, iz, oE(Ez, bz, Mz, lz)), uz[Nz][Ez] && Object.defineProperty(zz.prototype, Ez, uz[Nz][Ez]), ("string" === typeof iz || qu(iz)) && (uz[xz] || Object.defineProperty(uz, xz, {
            value: [],
            enumerable: !1,
            configurable: !0,
            writable: !0
          }), uz[xz][bz] = "string" === typeof iz ? uu[iz] : cu(iz.quantized))
        },
        setFields(zz, uz) {
          const bz = zz.prototype.constructor;
          gu.register(bz);
          const Ez = Object.getPrototypeOf(bz),
            nz = Ez && Ez[Symbol.metadata],
            iz = ju.initialize(bz);
          bz[tz] || (bz[tz] = TE[tz]), bz[Hz] || (bz[Hz] = TE[Hz]), bz[Oz] || (bz[Oz] = TE[Oz]), bz.prototype.toJSON || (bz.prototype.toJSON = TE.prototype.toJSON);
          let lz = iz[Jz] ?? (nz && nz[Jz]) ?? -1;
          lz++, iz[xz] || Object.defineProperty(iz, xz, {
            value: nz?.[xz] ? [...nz[xz]] : [],
            enumerable: !1,
            configurable: !0,
            writable: !0
          });
          for (const Mz in uz) {
            if (void 0 !== iz[Mz]) throw new Error(`@colyseus/schema: Duplicate '${Mz}' definition on '${bz.name||"(anonymous)"}'.`);
            ju.defineField(bz, iz, lz, Mz, uz[Mz]), lz++
          }
          return zz
        },
        isDeprecated: (zz, uz) => !0 === zz[uz].deprecated,
        initialize(zz) {
          const uz = Object.getPrototypeOf(zz),
            bz = uz[Symbol.metadata];
          let Ez = zz[Symbol.metadata] ?? Object.create(null);
          if (uz !== TE && Ez === bz && (Ez = Object.create(null), bz)) {
            Object.setPrototypeOf(Ez, bz), Object.defineProperty(Ez, Jz, {
              value: bz[Jz],
              enumerable: !1,
              configurable: !0,
              writable: !0
            }), void 0 !== bz[Tz] && (Object.defineProperty(Ez, Tz, {
              value: [...bz[Tz]],
              enumerable: !1,
              configurable: !0,
              writable: !0
            }), Object.defineProperty(Ez, Lz, {
              value: {
                ...bz[Lz]
              },
              enumerable: !1,
              configurable: !0,
              writable: !0
            }));
            for (const zz of Wu) {
              const uz = bz[zz];
              void 0 !== uz && Object.defineProperty(Ez, zz, {
                value: [...uz],
                enumerable: !1,
                configurable: !0,
                writable: !0
              })
            }
            Object.defineProperty(Ez, Nz, {
              value: {
                ...bz[Nz]
              },
              enumerable: !1,
              configurable: !0,
              writable: !0
            })
          }
          return Object.defineProperty(zz, Symbol.metadata, {
            value: Ez,
            writable: !1,
            configurable: !0
          }), Ez
        },
        isValidInstance: zz => zz.constructor[Symbol.metadata] && Object.prototype.hasOwnProperty.call(zz.constructor[Symbol.metadata], Jz),
        getFields(zz) {
          const uz = zz[Symbol.metadata],
            bz = {};
          for (let Ez = 0; Ez <= uz[Jz]; Ez++) bz[uz[Ez].name] = uz[Ez].type;
          return bz
        },
        hasViewTagAtIndex: (zz, uz) => zz?.[Tz]?.includes(uz),
        hasUnreliableAtIndex: (zz, uz) => zz?.[Pz]?.includes(uz),
        hasPatchOnlyAtIndex: (zz, uz) => zz?.[Gz]?.includes(uz),
        hasFullStateOnlyAtIndex: (zz, uz) => zz?.[Vz]?.includes(uz),
        hasStreamAtIndex: (zz, uz) => zz?.[mz]?.includes(uz)
      },
      Iu = (zz, uz, bz) => zz(uz, bz);
    class Bu {
      dirtyLow = 0;
      dirtyHigh = 0;
      ops;
      constructor(zz) {
        this.ops = new Uint8Array(Math.max(zz + 1, 1))
      }
      record(zz, uz) {
        const bz = this.ops[zz];
        0 === bz ? this.ops[zz] = uz : (bz === nz.DELETE || bz === nz.ADD && uz === nz.DELETE_AND_ADD) && (this.ops[zz] = nz.DELETE_AND_ADD), zz < 32 ? this.dirtyLow |= 1 << zz : this.dirtyHigh |= 1 << zz - 32
      }
      recordDelete(zz, uz) {
        this.ops[zz] = uz, zz < 32 ? this.dirtyLow |= 1 << zz : this.dirtyHigh |= 1 << zz - 32
      }
      recordRaw(zz, uz) {
        this.record(zz, uz)
      }
      operationAt(zz) {
        const uz = this.ops[zz];
        return 0 === uz ? void 0 : uz
      }
      setOperationAt(zz, uz) {
        this.ops[zz] = uz
      }
      forEach(zz) {
        this.forEachWithCtx(zz, Iu)
      }
      forEachWithCtx(zz, uz) {
        let bz = this.dirtyLow,
          Ez = this.dirtyHigh;
        const nz = this.ops;
        for (; 0 !== bz;) {
          const Ez = bz & -bz,
            iz = 31 - Math.clz32(Ez);
          bz ^= Ez, uz(zz, iz, nz[iz])
        }
        for (; 0 !== Ez;) {
          const bz = Ez & -Ez,
            iz = 31 - Math.clz32(bz) + 32;
          Ez ^= bz, uz(zz, iz, nz[iz])
        }
      }
      size() {
        return Yu(this.dirtyLow) + Yu(this.dirtyHigh)
      }
      has() {
        return 0 !== (this.dirtyLow | this.dirtyHigh)
      }
      reset() {
        this.dirtyLow = 0, this.dirtyHigh = 0, this.ops.fill(0)
      }
    }
    class Cu {
      tR = new Map;
      pureOps = [];
      record(zz, uz) {
        const bz = this.tR.get(zz);
        void 0 === bz ? this.tR.set(zz, uz) : (bz === nz.DELETE || bz === nz.ADD && uz === nz.DELETE_AND_ADD) && this.tR.set(zz, nz.DELETE_AND_ADD)
      }
      recordDelete(zz, uz) {
        this.tR.set(zz, uz)
      }
      recordRaw(zz, uz) {
        this.tR.set(zz, uz)
      }
      recordPure(zz) {
        this.pureOps.push([this.tR.size, zz])
      }
      operationAt(zz) {
        return this.tR.get(zz)
      }
      setOperationAt(zz, uz) {
        this.tR.has(zz) && this.tR.set(zz, uz)
      }
      forEach(zz) {
        this.forEachWithCtx(zz, Iu)
      }
      forEachWithCtx(zz, uz) {
        const bz = this.pureOps;
        if (bz.length > 0) {
          let Ez = 0,
            nz = 0;
          for (const [iz, lz] of this.tR) {
            for (; Ez < bz.length && bz[Ez][0] <= nz;) {
              const nz = bz[Ez++][1];
              uz(zz, -nz, nz)
            }
            uz(zz, iz, lz), nz++
          }
          for (; Ez < bz.length;) {
            const nz = bz[Ez++][1];
            uz(zz, -nz, nz)
          }
        } else
          for (const [Ez, nz] of this.tR) uz(zz, Ez, nz)
      }
      size() {
        return this.tR.size + this.pureOps.length
      }
      has() {
        return this.tR.size > 0 || this.pureOps.length > 0
      }
      reset() {
        this.tR.clear(), this.pureOps.length = 0
      }
      shift(zz) {
        const uz = new Map;
        for (const [bz, Ez] of this.tR) uz.set(bz + zz, Ez);
        this.tR = uz
      }
    }

    function Yu(zz) {
      return 16843009 * ((zz = (858993459 & (zz -= zz >>> 1 & 1431655765)) + (zz >>> 2 & 858993459)) + (zz >>> 4) & 252645135) >>> 24
    }

    function ku(zz) {
      if (void 0 === zz) return 0;
      let uz = 0;
      for (let bz = 0, Ez = zz.length; bz < Ez; bz++) {
        const Ez = zz[bz];
        Ez < 32 && (uz |= 1 << Ez)
      }
      return uz
    }

    function zb(zz) {
      const uz = zz.constructor;
      if (Object.prototype.hasOwnProperty.call(uz, vz)) return uz[vz];
      const bz = uz[Symbol.metadata],
        Ez = ju.isValidInstance(zz),
        nz = (bz?.[Tz]?.length ?? 0) > 0,
        iz = function(zz) {
          const uz = [],
            bz = [],
            Ez = [],
            nz = [],
            iz = zz?.[Jz];
          if (void 0 === iz) return {
            names: uz,
            types: bz,
            tags: Ez,
            encoders: nz
          };
          const lz = zz[xz];
          for (let Mz = 0; Mz <= iz; Mz++) {
            const iz = zz[Mz];
            void 0 !== iz ? (uz[Mz] = iz.name, bz[Mz] = iz.type, Ez[Mz] = iz.tag, nz[Mz] = lz?.[Mz]) : (uz[Mz] = void 0, bz[Mz] = void 0, Ez[Mz] = void 0, nz[Mz] = void 0)
          }
          return {
            names: uz,
            types: bz,
            tags: Ez,
            encoders: nz
          }
        }(bz),
        lz = Ez && !nz ? void 0 : uz[pz],
        Mz = {
          encoder: uz[Hz],
          filter: lz,
          metadata: bz,
          isSchema: Ez,
          filterBitmask: Ez ? ku(bz?.[Tz]) : 0,
          hasAnyFullStateOnly: (bz?.[Vz]?.length ?? 0) > 0,
          hasAnyUnreliable: (bz?.[Pz]?.length ?? 0) > 0,
          hasAnyStream: (bz?.[mz]?.length ?? 0) > 0,
          hasAnyView: nz,
          fullStateOnlyBitmask: ku(bz?.[Vz]),
          unreliableBitmask: ku(bz?.[Pz]),
          streamBitmask: ku(bz?.[mz]),
          names: iz.names,
          types: iz.types,
          tags: iz.tags,
          encoders: iz.encoders
        };
      return Object.defineProperty(uz, vz, {
        value: Mz,
        enumerable: !1,
        writable: !0,
        configurable: !0
      }), Mz
    }

    function ub(zz, uz) {
      if (void 0 !== zz.parentRef && uz(zz.parentRef, zz._parentIndex)) return !0;
      for (let bz = zz.extraParents; void 0 !== bz; bz = bz.next)
        if (uz(bz.ref, bz.index)) return !0;
      return !1
    }
    const bb = (zz, uz) => {
        zz.isFieldUnreliable(uz) ? zz.ensureUnreliableRecorder().record(uz, nz.ADD) : zz.record(uz, nz.ADD)
      },
      Eb = (zz, uz) => zz(uz);

    function nb(zz, uz, bz) {
      const Ez = zz.refTarget;
      if (void 0 !== Ez[Kz]) {
        if (zz.isPatchOnly) return;
        if (Array.isArray(Ez.items)) {
          const zz = Ez.items;
          for (let Ez = 0, nz = zz.length; Ez < nz; Ez++) void 0 !== zz[Ez] && bz(uz, Ez)
        } else if (void 0 !== Ez.journal)
          for (const [zz, nz] of Ez.journal.keyByIndex) Ez.$items.has(nz) && bz(uz, zz);
        else if (void 0 !== Ez.$items)
          for (const zz of Ez.$items.keys()) bz(uz, zz)
      } else {
        const nz = zz.metadata;
        if (!nz) return;
        const iz = nz[Jz] ?? -1,
          lz = nz[az],
          Mz = zz.encDescriptor.names;
        for (let zz = 0; zz <= iz; zz++) {
          const nz = Mz[zz];
          if (void 0 === nz) continue;
          if (lz && lz.includes(zz)) continue;
          const iz = Ez[nz];
          void 0 !== iz && null !== iz && bz(uz, zz)
        }
      }
    }

    function ib(zz, uz, bz, Ez) {
      ! function(zz, uz, bz) {
        if (!uz) return;
        const Ez = uz[Rz],
          nz = !Ez._isSchema;
        let iz;
        nz ? (uz = Ez.parent, bz = Ez.parentIndex, iz = uz?.[Rz].metadata) : iz = Ez.metadata;
        const lz = (iz?.[Gz]?.includes(bz) ? vb : 0) | (iz?.[Vz]?.includes(bz) ? xb : 0),
          Mz = Ez.flags & Tb | lz,
          tz = zz.flags;
        zz.flags = tz | Mz;
        Mz & ~tz & xb && (zz.reset(), zz.unreliableRecorder?.reset());
        const Hz = zz.root?.types;
        if (!Hz?.hasFilters) return;
        const Oz = iz?.[Tz]?.includes(bz) ?? !1,
          pz = iz?.[mz]?.includes(bz) ?? !1,
          dz = Ez.isFiltered || Oz || pz;
        if (zz.isFiltered = dz, pz && !nz) {
          zz.isStreamCollection = !0;
          const uz = Ju(zz.ref);
          if (void 0 === uz.priority) {
            const zz = ju.getStreamPriority(iz, bz);
            void 0 !== zz && (uz.priority = zz)
          }
          zz.root?.registerStream(zz.ref)
        }
        if (dz) {
          const uz = Mb(zz);
          zz.isVisibilitySharedWithParent = Ez.isFiltered && uz && !pz && (!Oz || nz && iz[bz].tag !== ZE)
        }
      }(zz, uz, bz), zz.isFullStateOnly || (zz.has() && zz.root?.enqueueChangeTree(zz), zz.unreliableRecorder?.has() && zz.root?.enqueueUnreliable(zz), zz.has() || zz.unreliableRecorder?.has() || zz.root?.enqueueChangeTree(zz))
    }

    function lb(zz) {
      const uz = zz.pendingFilterRefresh;
      for (let bz = 0; bz < uz.length; bz++) {
        const zz = uz[bz];
        0 !== (zz.flags & Ab) && tb(zz)
      }
      uz.length = 0
    }

    function Mb(zz) {
      return zz._isSchema || "string" !== typeof zz.refTarget[Kz]
    }

    function tb(zz) {
      zz.flags &= ~Ab;
      const uz = zz.root;
      if (void 0 === uz || void 0 === zz.parentRef) return;
      const bz = Mb(zz);
      let Ez = Fb(zz, zz.parentRef, zz._parentIndex, bz);
      for (let iz = zz.extraParents; void 0 !== iz && Ez !== db; iz = iz.next) Ez |= Fb(zz, iz.ref, iz.index, bz);
      if (0 === Ez) return;
      zz.isVisibilitySharedWithParent = 0 !== (Ez & pb);
      const nz = 0 === (Ez & Ob);
      nz !== zz.isFiltered && (zz.isFiltered = nz, nz || zz.isFullStateOnly || (zz.forEachLiveWithCtx(zz, bb), zz.has() && uz.enqueueChangeTree(zz), zz.unreliableRecorder?.has() && uz.enqueueUnreliable(zz)), zz.forEachChildWithCtx(zz, Zb))
    }
    const Hb = 1,
      Ob = 2,
      pb = 4,
      db = Hb | Ob | pb;

    function Fb(zz, uz, bz, Ez) {
      const nz = uz[Rz];
      if (nz.root !== zz.root || ! function(zz, uz, bz) {
          const Ez = uz.refTarget;
          if (uz.isArray) {
            const uz = Ez.items,
              nz = uz[bz];
            if (void 0 !== nz && nz[Rz] === zz) return !0;
            for (let bz = 0, Ez = uz.length; bz < Ez; bz++) {
              const Ez = uz[bz];
              if (void 0 !== Ez && Ez[Rz] === zz) return !0
            }
            return !1
          }
          const nz = uz.getValue(bz);
          return void 0 !== nz && nz[Rz] === zz
        }(zz, nz, bz)) return 0;
      nz.flags & Ab && tb(nz);
      let iz = Hb;
      if (nz._isSchema) {
        void 0 !== nz.encDescriptor.tags[bz] || nz.isFieldStream(bz) || (nz.isFiltered ? Ez && (iz |= pb) : iz |= Ob)
      } else if (nz.isFiltered) {
        if (Ez && !nz.isStreamCollection) {
          const zz = nz.parent?.[Rz];
          (zz?._isSchema ? zz.encDescriptor.tags[nz.parentIndex] : void 0) !== ZE && (iz |= pb)
        }
      } else iz |= Ob;
      return iz
    }
    const Zb = (zz, uz, bz) => {
      tb(uz)
    };

    function Rb(zz, uz, bz, Ez) {
      if (zz.addParent(uz, Ez), !bz) return;
      const nz = bz.add(zz);
      bz !== zz.root && (zz.root = bz, ib(zz, uz, Ez));
      const iz = uz?.[Rz];
      if (void 0 !== iz && void 0 !== iz.subscribedViews && void 0 !== uz[Kz] && function(zz, uz, bz, Ez) {
          const nz = zz.subscribedViews;
          if (void 0 === nz) return;
          const iz = zz.isStreamCollection,
            lz = iz ? zz.ref : void 0,
            Mz = iz ? void 0 : bz[Rz];
          for (let tz = 0, Hz = nz.length; tz < Hz; tz++) {
            let zz = nz[tz];
            for (; 0 !== zz;) {
              const bz = zz & -zz;
              zz ^= bz;
              const Hz = 32 * tz + (31 - Math.clz32(bz)),
                Oz = Ez.activeViews.get(Hz),
                pz = Oz?.deref();
              void 0 !== pz ? iz ? Gu(lz, Hz, uz) : void 0 !== Mz && pz.markVisible(Mz) : nz[tz] &= ~bz
            }
          }
        }(iz, Ez, zz.ref, bz), nz) {
        let uz = fb[sb];
        void 0 === uz && (uz = {
          parentRef: void 0,
          root: void 0
        }, fb[sb] = uz), uz.parentRef = zz.ref, uz.root = bz, sb++, wb(zz, uz, rb), sb--
      }
    }

    function Kb(zz, uz, bz) {
      zz(uz, bz)
    }

    function wb(zz, uz, bz) {
      const Ez = zz.refTarget;
      if (Ez[Kz]) {
        if ("string" !== typeof Ez[Kz]) {
          const zz = Ez.items;
          if (void 0 !== zz)
            for (let Ez = 0, nz = zz.length; Ez < nz; Ez++) {
              const nz = zz[Ez];
              nz && bz(uz, nz[Rz], Ez)
            } else {
              const zz = Ez.$items,
                nz = Ez._collectionIndexes;
              for (const Ez of zz.keys()) {
                const iz = zz.get(Ez);
                iz && bz(uz, iz[Rz], nz?.[Ez] ?? Ez)
              }
            }
        }
      } else {
        const nz = zz.metadata,
          iz = nz?.[Az];
        if (!iz) return;
        const lz = zz.encDescriptor.names;
        for (let zz = 0, Mz = iz.length; zz < Mz; zz++) {
          const nz = iz[zz],
            Mz = Ez[lz[nz]];
          Mz && bz(uz, Mz[Rz], nz)
        }
      }
    }

    function Xb(zz, uz, bz) {
      uz.root !== zz ? uz.setRoot(zz) : zz.add(uz)
    }
    const fb = [];
    let sb = 0;

    function rb(zz, uz, bz) {
      if (uz.root === zz.root) return zz.root.add(uz), void zz.root.moveNextToParent(uz);
      uz.setParent(zz.parentRef, zz.root, bz)
    }

    function ob(zz, uz, bz) {
      const Ez = (3 & bz) << 3;
      return bz < 4 ? zz >>> Ez & 255 : uz >>> Ez & 255
    }
    const Nb = (zz, uz, bz) => zz(uz, bz);
    const vb = 16,
      xb = 32,
      Jb = 128,
      Ab = 256,
      Tb = vb | xb;
    class Lb {
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
        return 0 !== (this.flags & vb)
      }
      set isPatchOnly(zz) {
        this.flags = zz ? this.flags | vb : this.flags & ~vb
      }
      get isFullStateOnly() {
        return 0 !== (this.flags & xb)
      }
      set isFullStateOnly(zz) {
        this.flags = zz ? this.flags | xb : this.flags & ~xb
      }
      get isStreamCollection() {
        return 0 !== (64 & this.flags)
      }
      set isStreamCollection(zz) {
        this.flags = zz ? 64 | this.flags : -65 & this.flags
      }
      get needsRestage() {
        return 0 !== (this.flags & Jb)
      }
      set needsRestage(zz) {
        this.flags = zz ? this.flags | Jb : -129 & this.flags
      }
      get hasFilteredFields() {
        return this.isFiltered || this.encDescriptor.hasAnyView
      }
      ensureUnreliableRecorder() {
        return void 0 === this.unreliableRecorder && (this.unreliableRecorder = this._isSchema ? new Bu(this.metadata?.[Jz] ?? 0) : new Cu), this.unreliableRecorder
      }
      isFieldUnreliable(zz) {
        const uz = this.encDescriptor;
        return !!uz.hasAnyUnreliable && (zz < 32 ? 0 !== (uz.unreliableBitmask & 1 << zz) : ju.hasUnreliableAtIndex(this.metadata, zz))
      }
      isFieldFullStateOnly(zz) {
        if (this.isFullStateOnly) return !0;
        const uz = this.encDescriptor;
        return !!uz.hasAnyFullStateOnly && (zz < 32 ? 0 !== (uz.fullStateOnlyBitmask & 1 << zz) : ju.hasFullStateOnlyAtIndex(this.metadata, zz))
      }
      isFieldStream(zz) {
        const uz = this.encDescriptor;
        return !!uz.hasAnyStream && (zz < 32 ? 0 !== (uz.streamBitmask & 1 << zz) : ju.hasStreamAtIndex(this.metadata, zz))
      }
      constructor(zz) {
        let uz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : zz;
        this.ref = zz, this.refTarget = uz;
        const bz = zb(zz);
        this.encDescriptor = bz, this.metadata = bz.metadata;
        const Ez = bz.isSchema;
        if (this._isSchema = Ez, this.ops = void 0, this.collDirty = void 0, this.collPureOps = void 0, Ez) {
          const zz = this.metadata?.[Jz] ?? 0;
          zz > 7 && (this.ops = new Uint8Array(zz + 1))
        } else this.collDirty = new Map
      }
      _opAt(zz) {
        const uz = this.ops;
        if (void 0 !== uz) return uz[zz];
        const bz = (3 & zz) << 3;
        return zz < 4 ? this.opsLow >>> bz & 255 : this.opsHigh >>> bz & 255
      }
      _opPut(zz, uz) {
        const bz = this.ops;
        if (void 0 !== bz) return void(bz[zz] = uz);
        const Ez = (3 & zz) << 3,
          nz = ~(255 << Ez);
        zz < 4 ? this.opsLow = this.opsLow & nz | uz << Ez : this.opsHigh = this.opsHigh & nz | uz << Ez
      }
      _markDirty(zz) {
        zz < 32 ? this.dirtyLow |= 1 << zz : this.dirtyHigh |= 1 << zz - 32
      }
      record(zz, uz) {
        if (this._isSchema) {
          const bz = this._opAt(zz);
          0 === bz ? this._opPut(zz, uz) : (bz === nz.DELETE || bz === nz.ADD && uz === nz.DELETE_AND_ADD) && this._opPut(zz, nz.DELETE_AND_ADD), this._markDirty(zz)
        } else {
          const bz = this.collDirty,
            Ez = bz.get(zz);
          let iz;
          iz = void 0 === Ez ? uz : Ez === nz.DELETE || Ez === nz.ADD && uz === nz.DELETE_AND_ADD ? nz.DELETE_AND_ADD : Ez, bz.set(zz, iz)
        }
      }
      recordDelete(zz, uz) {
        this._isSchema ? (this._opPut(zz, uz), this._markDirty(zz)) : this.collDirty.set(zz, uz)
      }
      recordRaw(zz, uz) {
        this._isSchema ? (this._opPut(zz, uz), this._markDirty(zz)) : this.collDirty.set(zz, uz)
      }
      recordPure(zz) {
        if (this._isSchema) throw new Error("ChangeTree (Schema): pure operations are not supported");
        (this.collPureOps ??= []).push([this.collDirty.size, zz])
      }
      operationAt(zz) {
        if (this._isSchema) {
          const uz = this._opAt(zz);
          return 0 === uz ? void 0 : uz
        }
        return this.collDirty.get(zz)
      }
      setOperationAt(zz, uz) {
        if (this._isSchema) this._opPut(zz, uz);
        else {
          const bz = this.collDirty;
          bz.has(zz) && bz.set(zz, uz)
        }
      }
      forEach(zz) {
        this.forEachWithCtx(zz, Nb)
      }
      forEachWithCtx(zz, uz) {
        if (this._isSchema) {
          let bz = this.dirtyLow,
            Ez = this.dirtyHigh;
          const nz = this.ops;
          if (void 0 !== nz) {
            for (; 0 !== bz;) {
              const Ez = bz & -bz,
                iz = 31 - Math.clz32(Ez);
              bz ^= Ez, uz(zz, iz, nz[iz])
            }
            for (; 0 !== Ez;) {
              const bz = Ez & -Ez,
                iz = 31 - Math.clz32(bz) + 32;
              Ez ^= bz, uz(zz, iz, nz[iz])
            }
          } else {
            const Ez = this.opsLow,
              nz = this.opsHigh;
            for (; 0 !== bz;) {
              const iz = bz & -bz,
                lz = 31 - Math.clz32(iz);
              bz ^= iz, uz(zz, lz, ob(Ez, nz, lz))
            }
          }
          return
        }
        const bz = this.collDirty,
          Ez = this.collPureOps;
        if (void 0 !== Ez && Ez.length > 0) {
          let nz = 0,
            iz = 0;
          for (const [lz, Mz] of bz) {
            for (; nz < Ez.length && Ez[nz][0] <= iz;) {
              const bz = Ez[nz++][1];
              uz(zz, -bz, bz)
            }
            uz(zz, lz, Mz), iz++
          }
          for (; nz < Ez.length;) {
            const bz = Ez[nz++][1];
            uz(zz, -bz, bz)
          }
        } else
          for (const [nz, iz] of bz) uz(zz, nz, iz)
      }
      size() {
        return this._isSchema ? Yu(this.dirtyLow) + Yu(this.dirtyHigh) : this.collDirty.size + (this.collPureOps?.length ?? 0)
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
      insertAt(zz, uz) {
        if (this._isSchema) throw new Error("ChangeTree (Schema): insertAt is not supported");
        const bz = this.collDirty,
          Ez = new Map,
          iz = !this.paused && !this.isFullStateOnly;
        if (zz > 0)
          for (const [nz, lz] of bz) nz < zz && Ez.set(nz, lz);
        if (iz)
          for (let lz = 0; lz < uz; lz++) Ez.set(zz + lz, nz.ADD);
        for (const [nz, lz] of bz) nz >= zz && Ez.set(nz + uz, lz);
        this.collDirty = Ez, iz && this.root?.enqueueChangeTree(this)
      }
      removeAt(zz, uz) {
        if (this._isSchema) throw new Error("ChangeTree (Schema): removeAt is not supported");
        const bz = this.collDirty,
          Ez = zz + uz;
        let nz = !1;
        for (const lz of bz.keys())
          if (lz >= Ez) {
            nz = !0;
            break
          } if (!nz) {
          for (let uz = zz; uz < Ez; uz++) bz.delete(uz);
          return
        }
        const iz = new Map;
        for (const [lz, Mz] of bz) lz < zz ? iz.set(lz, Mz) : lz >= Ez && iz.set(lz - uz, Mz);
        this.collDirty = iz
      }
      unshift(zz) {
        this.insertAt(0, zz)
      }
      setRoot(zz) {
        ! function(zz, uz) {
          zz.root = uz;
          const bz = uz.add(zz);
          ib(zz, zz.parent, zz.parentIndex), bz && wb(zz, uz, Xb)
        }(this, zz)
      }
      setParent(zz, uz, bz) {
        Rb(this, zz, uz, bz)
      }
      forEachChild(zz) {
        wb(this, zz, Kb)
      }
      forEachChildWithCtx(zz, uz) {
        wb(this, zz, uz)
      }
      forEachLive(zz) {
        nb(this, zz, Eb)
      }
      forEachLiveWithCtx(zz, uz) {
        nb(this, zz, uz)
      }
      operation(zz) {
        this.paused || this.isFullStateOnly || (this.recordPure(zz), this.root?.enqueueChangeTree(this))
      }
      _routeAndRecord(zz, uz, bz) {
        if (!this.paused && !this.isFieldFullStateOnly(zz)) {
          if (this.isFieldUnreliable(zz) && !this.isNew) {
            const Ez = this.ensureUnreliableRecorder();
            return bz ? Ez.recordRaw(zz, uz) : Ez.record(zz, uz), void this.root?.enqueueUnreliable(this)
          }
          bz ? this.recordRaw(zz, uz) : this.record(zz, uz), this.root?.enqueueChangeTree(this)
        }
      }
      change(zz) {
        let uz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : nz.ADD;
        this._routeAndRecord(zz, uz, !1)
      }
      indexedOperation(zz, uz) {
        this._routeAndRecord(zz, uz, !0)
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
        const uz = this.paused;
        this.paused = !0;
        try {
          return zz()
        } finally {
          this.paused = uz
        }
      }
      markDirty(zz) {
        let uz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : nz.ADD;
        const bz = this.paused;
        this.paused = !1;
        try {
          this.change(zz, uz)
        } finally {
          this.paused = bz
        }
      }
      getValue(zz) {
        let uz = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return this.refTarget[dz](zz, uz)
      }
      delete(zz, uz) {
        if (void 0 === zz) {
          try {
            throw new Error(`@colyseus/schema ${this.ref.constructor.name}: trying to delete non-existing index '${zz}'`)
          } catch (Mn) {
            console.warn(Mn)
          }
          return
        }
        if (this.paused || this.isFieldFullStateOnly(zz)) return this.getValue(zz);
        const bz = this.isFieldUnreliable(zz) && !this.isNew;
        bz ? this.ensureUnreliableRecorder().recordDelete(zz, uz ?? nz.DELETE) : this.recordDelete(zz, uz ?? nz.DELETE);
        const Ez = this.getValue(zz);
        return Ez && Ez[Rz] && this.root?.remove(Ez[Rz]), bz ? this.root?.enqueueUnreliable(this) : this.root?.enqueueChangeTree(this), Ez
      }
      endEncode() {
        this.reset(), this.changesNode = void 0, this._isSchema || this.refTarget[Xz]?.(), this.isNew = !1
      }
      endEncodeUnreliable() {
        this.unreliableRecorder?.reset(), this.unreliableChangesNode = void 0, this._isSchema || this.refTarget[Xz]?.()
      }
      discard() {
        this._isSchema || this.refTarget[Xz]?.(), this.reset(), this.unreliableRecorder?.reset()
      }
      discardAll() {
        const zz = zz => {
          if (zz < 0) return;
          const uz = this.getValue(zz);
          uz && uz[Rz] && uz[Rz].discardAll()
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
      addParent(zz, uz) {
        ! function(zz, uz, bz) {
          if (zz.parentRef) {
            if (zz.parentRef[Rz] === uz[Rz]) return void(zz._parentIndex = bz);
            if (ub(zz, ((zz, bz) => zz[Rz] === uz[Rz]))) return void(zz._parentIndex = bz)
          }
          void 0 === zz.parentRef ? (zz.parentRef = uz, zz._parentIndex = bz) : (zz.extraParents = {
            ref: zz.parentRef,
            index: zz._parentIndex,
            next: zz.extraParents
          }, zz.parentRef = uz, zz._parentIndex = bz)
        }(this, zz, uz)
      }
      setParentIndex(zz, uz) {
        ! function(zz, uz, bz) {
          if (void 0 !== zz.extraParents)
            if (zz.parentRef[Rz] !== uz[Rz]) {
              for (let Ez = zz.extraParents; void 0 !== Ez; Ez = Ez.next)
                if (Ez.ref[Rz] === uz[Rz]) return void(Ez.index = bz)
            } else zz._parentIndex = bz;
          else zz._parentIndex = bz
        }(this, zz, uz)
      }
      removeParent() {
        return function(zz, uz) {
          if (zz.parentRef && zz.parentRef[Rz] === uz[Rz]) return zz.extraParents ? (zz.parentRef = zz.extraParents.ref, zz._parentIndex = zz.extraParents.index, zz.extraParents = zz.extraParents.next) : (zz.parentRef = void 0, zz._parentIndex = void 0), !0;
          let bz = zz.extraParents,
            Ez = null;
          for (; bz;) {
            if (bz.ref[Rz] === uz[Rz]) return Ez ? Ez.next = bz.next : zz.extraParents = bz.next, !0;
            Ez = bz, bz = bz.next
          }
          return void 0 === zz.parentRef
        }(this, arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.parent)
      }
      findParent(zz) {
        return function(zz, uz) {
          if (void 0 !== zz.parentRef && uz(zz.parentRef, zz._parentIndex)) return {
            ref: zz.parentRef,
            index: zz._parentIndex
          };
          for (let bz = zz.extraParents; void 0 !== bz; bz = bz.next)
            if (uz(bz.ref, bz.index)) return {
              ref: bz.ref,
              index: bz.index
            }
        }(this, zz)
      }
      hasParent(zz) {
        return ub(this, zz)
      }
      indexInParent(zz) {
        return function(zz, uz) {
          if (zz.parentRef && zz.parentRef[Rz] === uz[Rz]) return zz._parentIndex;
          for (let bz = zz.extraParents; void 0 !== bz; bz = bz.next)
            if (bz.ref[Rz] === uz[Rz]) return bz.index
        }(this, zz)
      }
      getAllParents() {
        return function(zz) {
          const uz = [];
          zz.parentRef && uz.push({
            ref: zz.parentRef,
            index: zz._parentIndex
          });
          let bz = zz.extraParents;
          for (; bz;) uz.push({
            ref: bz.ref,
            index: bz.index
          }), bz = bz.next;
          return uz
        }(this)
      }
    }
    class Pb {
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
        const uz = this.ref;
        if (uz[Kz]) {
          if ("string" !== typeof uz[Kz])
            for (const [bz, Ez] of uz.entries()) Ez && zz(Ez[Rz], uz._collectionIndexes?.[bz] ?? bz);
          return
        }
        const bz = uz.constructor,
          Ez = bz?.[Symbol.metadata];
        if (!Ez) return;
        const nz = Ez[Az] ?? [];
        for (let iz = 0; iz < nz.length; iz++) {
          const bz = nz[iz],
            lz = uz[Ez[bz].name];
          lz && zz(lz[Rz], bz)
        }
      }
      forEachChildWithCtx(zz, uz) {
        this.forEachChild(((bz, Ez) => uz(zz, bz, Ez)))
      }
      forEachLive() {}
      forEachLiveWithCtx() {}
      forEach() {}
    }

    function Gb(zz) {
      let uz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : zz;
      var bz;
      Object.defineProperty(zz, Rz, {
        value: (bz = uz, new Pb(bz)),
        enumerable: !1,
        writable: !0
      })
    }

    function ab(zz, uz, bz, Ez, iz, lz, tz) {
      void 0 !== tz ? tz(uz, Ez, lz) : "string" === typeof bz ? uu[bz]?.(uz, Ez, lz) : null != bz[Symbol.metadata] ? (uu.number(uz, Ez[Mz], lz), (iz & nz.ADD) === nz.ADD && zz.tryEncodeTypeId(uz, bz, Ez.constructor, lz)) : uu.number(uz, Ez[Mz], lz)
    }
    const Vb = function(zz, uz, bz, Ez, iz, lz, Mz, tz) {
        if (uz[lz.offset++] = 255 & (Ez | iz), iz === nz.DELETE) return;
        const Hz = bz.encDescriptor,
          Oz = bz.ref,
          pz = Oz[rz][Ez] ?? Oz[Hz.names[Ez]];
        ab(zz, uz, Hz.types[Ez], pz, iz, lz, Hz.encoders[Ez])
      },
      mb = function(zz, uz, bz, Ez, iz, lz) {
        if (uz[lz.offset++] = 255 & iz, uu.number(uz, Ez, lz), iz === nz.DELETE) return;
        const Mz = bz.ref;
        if ((iz & nz.ADD) === nz.ADD) {
          const zz = Mz.$indexes.get(Ez);
          uu.string(uz, zz, lz)
        }
        ab(zz, uz, Mz[Kz], Mz[dz](Ez), iz, lz)
      },
      qb = function(zz, uz, bz, Ez, iz, lz) {
        if (uz[lz.offset++] = 255 & iz, uu.number(uz, Ez, lz), iz === nz.DELETE) return;
        const Mz = bz.ref;
        ab(zz, uz, Mz[Kz], Mz[dz](Ez), iz, lz)
      },
      hb = function(zz, uz, bz, Ez, iz, lz) {
        const Mz = bz.ref;
        (iz & nz.ADD) === nz.ADD && "function" === typeof Mz.set ? mb(zz, uz, bz, Ez, iz, lz) : qb(zz, uz, bz, Ez, iz, lz)
      },
      Ub = function(zz, uz, bz, Ez, iz, lz, tz, Hz) {
        const Oz = bz.refTarget,
          pz = Oz[Kz],
          Fz = "string" !== typeof pz;
        let Zz;
        if (Hz && bz.isFiltered && Fz) {
          const zz = Oz.tmpItems[Ez];
          if (!zz) return;
          if (Zz = zz[Mz], iz === nz.DELETE) iz = nz.DELETE_BY_REFID;
          else if ((iz & nz.ADD) === nz.ADD) iz = nz.ADD_BY_REFID;
          else if ((iz & nz.MOVE) === nz.MOVE) return
        } else if (iz === nz.DELETE && Fz) {
          const zz = Oz.tmpItems[Ez];
          if (!zz) return;
          Zz = zz[Mz], iz = nz.DELETE_BY_REFID
        } else Zz = Ez;
        if (uz[lz.offset++] = 255 & iz, uu.number(uz, Zz, lz), iz === nz.DELETE || iz === nz.DELETE_BY_REFID) return;
        ab(zz, uz, pz, Oz[dz](Ez, tz), iz, lz)
      };

    function cb(zz, uz, bz, Ez, iz, lz, tz) {
      const Hz = zz.resyncVisited;
      let Oz = Hz.get(zz.currentRefId);
      if (void 0 === Oz && Hz.set(zz.currentRefId, Oz = new Set), Oz.add(Ez), void 0 !== iz && bz === nz.ADD && iz !== lz) {
        const bz = iz[Mz];
        void 0 !== bz && (zz.root.removeRef(bz), tz?.push({
          ref: uz,
          refId: zz.currentRefId,
          op: nz.DELETE,
          dynamicIndex: Ez,
          value: void 0,
          previousValue: iz
        }))
      }
    }

    function gb(zz, uz, bz, Ez) {
      const nz = uz[Mz];
      if (void 0 === nz || bz.has(nz)) return;
      bz.add(nz);
      const iz = uz.constructor[Symbol.metadata],
        lz = iz?.[Az];
      if (void 0 === lz) return;
      const tz = iz[Gz];
      for (let Mz = 0; Mz < lz.length; Mz++) {
        const nz = lz[Mz];
        if (void 0 !== tz && tz.includes(nz)) continue;
        const Hz = iz[nz],
          Oz = uz[Hz.name];
        Oz && (TE.is(Hz.type) ? gb(zz, Oz, bz, Ez) : Sb(zz, Oz, bz, Ez))
      }
    }

    function Sb(zz, uz, bz, Ez) {
      const iz = uz[wz] ?? uz,
        lz = iz[Mz];
      if (void 0 === lz || bz.has(lz)) return;
      bz.add(lz);
      const tz = zz.resyncVisited.get(lz);
      if (void 0 === tz) return;
      const Hz = zz.root;
      iz[Zz](tz, ((zz, bz) => {
        Ez?.push({
          ref: uz,
          refId: lz,
          op: nz.DELETE,
          dynamicIndex: bz,
          value: void 0,
          previousValue: zz
        });
        const iz = zz?.[Mz];
        void 0 !== iz && Hz.removeRef(iz)
      }), (uz => {
        TE.isSchema(uz) && gb(zz, uz, bz, Ez)
      }))
    }
    const yb = 1,
      Db = 2,
      Qb = 3,
      Wb = 4,
      eb = 5;

    function jb(zz, uz, bz, Ez, iz, lz, tz, Hz, Oz) {
      const pz = zz.root;
      let dz;
      if ((uz & nz.DELETE) === nz.DELETE) {
        const zz = iz?.[Mz];
        void 0 !== zz && pz.removeRef(zz), uz !== nz.DELETE_AND_ADD && bz[Fz](Ez), dz = void 0
      }
      if (uz === nz.DELETE);
      else if ("string" === typeof lz) dz = fu[lz](tz, Hz);
      else if (qu(lz)) dz = function(zz, uz, bz) {
        return Uu(zz, (0, fu[zz.wire])(uz, bz))
      }(lz.quantized, tz, Hz);
      else if (TE.is(lz)) {
        const bz = fu.number(tz, Hz);
        if (dz = pz.refs.get(bz), (uz & nz.ADD) === nz.ADD) {
          const Ez = zz.getInstanceType(tz, Hz, lz);
          dz || (dz = zz.createInstanceOfType(Ez)), pz.addRef(bz, dz, dz !== iz || uz === nz.DELETE_AND_ADD && dz === iz)
        }
      } else {
        const bz = (Zz = Object.keys(lz)[0], su[Zz]),
          Ez = fu.number(tz, Hz);
        null !== zz.resyncVisited && function(zz, uz) {
          const bz = zz.resyncVisited;
          bz.has(uz) || bz.set(uz, new Set)
        }(zz, Ez);
        const Fz = pz.refs.has(Ez) ? iz || pz.refs.get(Ez) : bz.constructor.initializeForDecoder();
        if (dz = Fz.clone(!0), dz[Kz] = Object.values(lz)[0], iz) {
          let zz = iz[Mz];
          if (void 0 !== zz && Ez !== zz) {
            (uz & nz.DELETE) !== nz.DELETE && pz.removeRef(zz);
            const bz = iz.entries();
            let Ez;
            for (;
              (Ez = bz.next()) && !Ez.done;) {
              const [uz, bz] = Ez.value;
              "object" === typeof bz && (zz = bz[Mz]), Oz?.push({
                ref: iz,
                refId: zz,
                op: nz.DELETE,
                field: uz,
                value: void 0,
                previousValue: bz
              })
            }
          }
        }
        pz.addRef(Ez, dz, Fz !== iz || uz === nz.DELETE_AND_ADD && Fz === iz)
      }
      var Zz;
      return dz
    }
    const Ib = function(zz, uz, bz, Ez, nz) {
        const iz = uz[bz.offset++],
          lz = Ez.constructor[Symbol.metadata],
          Mz = iz >> 6 << 6,
          tz = iz % (Mz || 255),
          Hz = lz[tz];
        if (void 0 === Hz) return console.warn("@colyseus/schema: field not defined at", {
          index: tz,
          ref: Ez.constructor.name,
          metadata: lz
        }), -1;
        const Oz = !0 === Hz.deprecated,
          pz = Oz ? void 0 : Ez[dz](tz),
          Fz = jb(zz, Mz, Ez, tz, pz, Hz.type, uz, bz, nz);
        Oz || (null !== Fz && void 0 !== Fz && (Ez[Hz.name] = Fz), pz !== Fz && nz?.push({
          ref: Ez,
          refId: zz.currentRefId,
          op: Mz,
          field: Hz.name,
          value: Fz,
          previousValue: pz
        }))
      },
      Bb = function(zz, uz, bz, Ez, iz) {
        const lz = Ez[wz] ?? Ez,
          Mz = uz[bz.offset++];
        if (Mz === nz.CLEAR) return zz.removeChildRefs(lz, iz), void lz.clear();
        const tz = fu.number(uz, bz),
          Hz = lz[Kz],
          Oz = lz.constructor.COLLECTION_KIND;
        let pz;
        (Mz & nz.ADD) === nz.ADD ? Oz === yb ? (pz = fu.string(uz, bz), lz.setIndex(tz, pz)) : pz = tz : pz = lz.getIndex(tz);
        const Fz = lz[dz](tz),
          Zz = jb(zz, Mz, Ez, tz, Fz, Hz, uz, bz, iz);
        if (null !== zz.resyncVisited && cb(zz, Ez, Mz, pz, Fz, Zz, iz), null !== Zz && void 0 !== Zz) switch (Oz) {
          case yb:
            lz.$items.set(pz, Zz);
            break;
          case Db:
            lz.$setAt(tz, Zz, null !== zz.resyncVisited && Mz === nz.ADD ? nz.REPLACE : Mz);
            break;
          case Qb:
          case Wb:
          case eb:
            lz.$items.has(tz) || (lz.$items.set(tz, Zz), "number" === typeof lz.$refId && tz >= lz.$refId && (lz.$refId = tz + 1));
            break;
          default:
            console.warn(`@colyseus/schema: missing COLLECTION_KIND on ${lz.constructor?.name} \u2014 item at index ${tz} was not stored.`)
        }
        Fz !== Zz && iz?.push({
          ref: Ez,
          refId: zz.currentRefId,
          op: Mz,
          dynamicIndex: pz,
          value: Zz,
          previousValue: Fz
        })
      },
      Cb = function(zz, uz, bz, Ez, iz) {
        const lz = Ez[wz] ?? Ez;
        let Mz, tz = uz[bz.offset++];
        if (tz === nz.CLEAR) return zz.removeChildRefs(lz, iz), void lz.clear();
        if (tz === nz.REVERSE) return void lz.items.reverse();
        if (tz === nz.DELETE_BY_REFID) {
          const tz = fu.number(uz, bz),
            Hz = zz.root.refs.get(tz);
          if (void 0 === Hz) return;
          if (zz.root.removeRef(tz), Mz = lz.findIndex((zz => zz === Hz)), -1 === Mz) return;
          return lz[Fz](Mz), void iz?.push({
            ref: Ez,
            refId: zz.currentRefId,
            op: nz.DELETE,
            dynamicIndex: Mz,
            value: void 0,
            previousValue: Hz
          })
        }
        if (tz === nz.ADD_BY_REFID) {
          const Ez = fu.number(uz, bz),
            nz = zz.root.refs.get(Ez);
          nz && (Mz = lz.findIndex((zz => zz === nz))), -1 !== Mz && void 0 !== Mz || (Mz = lz.length)
        } else Mz = fu.number(uz, bz);
        const Hz = lz[Kz];
        let Oz = Mz;
        const pz = lz.items[Mz],
          dz = jb(zz, tz, Ez, Mz, pz, Hz, uz, bz, iz);
        null !== zz.resyncVisited && cb(zz, Ez, tz, Mz, pz, dz, iz), null !== dz && void 0 !== dz && dz !== pz && lz.$setAt(Mz, dz, null !== zz.resyncVisited && tz === nz.ADD ? nz.REPLACE : tz), pz !== dz && iz?.push({
          ref: Ez,
          refId: zz.currentRefId,
          op: tz,
          dynamicIndex: Oz,
          value: dz,
          previousValue: pz
        })
      };
    class Yb extends Error {}

    function kb(zz, uz, bz, Ez) {
      if (!(zz instanceof uz)) throw new Yb(`a '${uz.name}' was expected, but '${zz&&zz.constructor.name}' was provided in ${bz.constructor.name}#${Ez}`)
    }
    const zE = (zz, uz) => {
        const bz = zz.toString(),
          Ez = uz.toString();
        return bz < Ez ? -1 : bz > Ez ? 1 : 0
      },
      uE = {
        get: (zz, uz) => "symbol" === typeof uz || isNaN(uz) ? Reflect.get(zz, uz) : zz.items[uz],
        set: (zz, uz, bz) => {
          if ("symbol" !== typeof uz && !isNaN(uz)) {
            if (void 0 === bz || null === bz) zz.$deleteAt(uz);
            else {
              let Ez;
              if (bz[Rz]) {
                kb(bz, zz[Kz], zz, uz);
                const iz = zz.items[uz];
                zz.isMovingItems ? (Ez = zz.$wireIndex(Number(uz)), void 0 !== iz ? bz[Rz].isNew ? zz[Rz].indexedOperation(Ez, nz.MOVE_AND_ADD) : (zz[Rz].getChange(Ez) & nz.DELETE) === nz.DELETE ? zz[Rz].indexedOperation(Ez, nz.DELETE_AND_MOVE) : zz[Rz].indexedOperation(Ez, nz.MOVE) : bz[Rz].isNew && zz[Rz].indexedOperation(Ez, nz.ADD), bz[Rz].setParent(zz, zz[Rz].root, Ez)) : Ez = zz.$changeAt(Number(uz), bz), void 0 !== iz && iz[Rz].root?.remove(iz[Rz])
              } else Ez = zz.$changeAt(Number(uz), bz);
              zz.items[uz] = bz, void 0 !== Ez && (zz.tmpItems[Ez] = bz)
            }
            return !0
          }
          return Reflect.set(zz, uz, bz)
        },
        deleteProperty: (zz, uz) => ("number" === typeof uz ? zz.$deleteAt(uz) : delete zz[uz], !0),
        has: (zz, uz) => "symbol" === typeof uz || isNaN(Number(uz)) ? Reflect.has(zz, uz) : Reflect.has(zz.items, uz)
      };
    class bE {
      [Rz];
      [Mz];
      [wz];
      [Kz];
      items = [];
      tmpItems = [];
      deletedIndexes = [];
      isMovingItems = !1;
      _needsCompaction = !1;
      static[Hz] = Ub;
      static[Oz] = Cb;
      static COLLECTION_KIND = Db;
      static[pz](zz, uz, bz) {
        if (!bz) return !0;
        const Ez = zz[wz] ?? zz;
        return "string" === typeof Ez[Kz] || bz.isChangeTreeVisible(Ez.tmpItems[uz]?.[Rz])
      }
      static is(zz) {
        return Array.isArray(zz) || void 0 !== zz.array
      }
      static from(zz) {
        return new bE(...Array.from(zz))
      }
      constructor() {
        this[Kz] = void 0, this[wz] = this;
        const zz = new Proxy(this, uE);
        return Object.defineProperty(this, Rz, {
          value: new Lb(zz, this),
          enumerable: !1,
          writable: !0
        }), arguments.length > 0 && this.push(...arguments), zz
      }
      static initializeForDecoder() {
        const zz = Object.create(bE.prototype);
        zz.items = [], zz.isMovingItems = !1, zz._needsCompaction = !1, zz[Kz] = void 0, zz[wz] = zz;
        const uz = new Proxy(zz, uE);
        return Gb(zz, uz), uz
      }
      set length(zz) {
        0 === zz ? this.clear() : zz < this.items.length ? this.splice(zz, this.length - zz) : console.warn("ArraySchema: can't set .length to a higher value than its length.")
      }
      get length() {
        return this.items.length
      }
      pauseTracking() {
        this[Rz].pause()
      }
      resumeTracking() {
        this[Rz].resume()
      }
      untracked(zz) {
        return this[Rz].untracked(zz)
      }
      get isTrackingPaused() {
        return this[Rz].paused
      }
      push() {
        const zz = this[wz],
          uz = zz.items,
          bz = zz.tmpItems,
          Ez = zz[Rz],
          iz = zz[Kz];
        let lz = bz.length;
        for (let Mz = 0, tz = arguments.length; Mz < tz; Mz++, lz++) {
          const tz = Mz < 0 || arguments.length <= Mz ? void 0 : arguments[Mz];
          if (void 0 === tz || null === tz) return;
          "object" === typeof tz && iz && kb(tz, iz, zz, Mz), Ez.indexedOperation(lz, nz.ADD), uz.push(tz), bz.push(tz), tz[Rz]?.setParent(this, Ez.root, lz)
        }
        return lz
      }
      pop() {
        const zz = this[wz],
          uz = zz.tmpItems,
          bz = zz.deletedIndexes;
        let Ez = -1;
        for (let iz = uz.length - 1; iz >= 0; iz--)
          if (!0 !== bz[iz]) {
            Ez = iz;
            break
          } if (Ez < 0) return;
        const nz = zz.$isUnsentAdd(Ez);
        return zz[Rz].delete(Ez), nz ? zz.$cancelAdd(Ez) : bz[Ez] = !0, zz.items.pop()
      }
      at(zz) {
        return zz < 0 && (zz += this.length), this.items[zz]
      }
      $wireIndex(zz) {
        const uz = this.deletedIndexes;
        if (0 === uz.length) return zz;
        const bz = this.tmpItems;
        let Ez = 0;
        for (let nz = 0; nz < bz.length; nz++)
          if (!0 !== uz[nz]) {
            if (Ez === zz) return nz;
            Ez++
          } return bz.length + (zz - Ez)
      }
      $isUnsentAdd(zz) {
        const uz = this[Rz];
        return 0 === (576 & uz.flags) && !uz.paused && "string" !== typeof this[Kz] && uz.operationAt(zz) === nz.ADD
      }
      $cancelAdd(zz) {
        let uz = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        const bz = this[Rz],
          Ez = this.tmpItems[zz];
        this.tmpItems.splice(zz, 1), this.deletedIndexes.length > 0 && this.deletedIndexes.splice(zz, 1), bz.removeAt(zz, 1);
        const nz = Ez?.[Rz];
        void 0 !== nz && void 0 === nz.root && nz.removeParent(this), uz && this.$reindexChildren(zz)
      }
      $reindexChildren(zz, uz) {
        if (!this[Rz].hasFilteredFields) return;
        if ("string" === typeof this[Kz]) return;
        const bz = this.tmpItems,
          Ez = bz.length;
        if (void 0 !== uz)
          for (; zz < Ez && bz[zz] === uz[zz];) zz++;
        for (let nz = zz; nz < Ez; nz++) bz[nz]?.[Rz]?.setParentIndex(this, nz)
      }
      $changeAt(zz, uz) {
        if (void 0 === uz || null === uz) return void console.error("ArraySchema items cannot be null nor undefined; Use `splice(index, 1)` instead.");
        if (this.items[zz] === uz) return;
        const bz = void 0 !== this.items[zz] ? "object" === typeof uz ? nz.DELETE_AND_ADD : nz.REPLACE : nz.ADD,
          Ez = this.$wireIndex(zz),
          iz = this[Rz];
        return iz.change(Ez, bz), uz[Rz]?.setParent(this, iz.root, Ez), Ez
      }
      $deleteAt(zz, uz) {
        this[Rz].delete(this.$wireIndex(zz), uz)
      }
      $setAt(zz, uz, bz) {
        bz === nz.ADD && void 0 !== this.items[zz] ? this.items.splice(zz, 0, uz) : bz === nz.DELETE_AND_MOVE ? (this.items.splice(zz, 1), this.items[zz] = uz) : (zz > this.items.length && (this._needsCompaction = !0), this.items[zz] = uz)
      }
      clear() {
        const zz = this[wz];
        if (0 === zz.items.length) return;
        const uz = zz[Rz];
        uz.forEachChild(((zz, bz) => {
          uz.root?.remove(zz)
        })), uz.discard(), uz.operation(nz.CLEAR), zz.items.length = 0, zz.tmpItems.length = 0
      } [fz]() {
        const zz = this[wz] ?? this,
          uz = zz[Rz];
        if (uz.isStreamCollection) throw new Error("@colyseus/schema: cannot reset a streamed ArraySchema (pooling not supported).");
        const bz = zz.items;
        for (let Ez = 0; Ez < bz.length; Ez++) bz[Ez]?.[fz]?.();
        zz.items.length = 0, zz.tmpItems.length = 0, zz.deletedIndexes.length = 0, uz.recycle(), zz[Mz] = void 0
      }
      concat() {
        return new bE(...this.items.concat(...arguments))
      }
      join(zz) {
        return this.items.join(zz)
      }
      reverse() {
        const zz = this[wz],
          uz = zz[Rz];
        if (uz.has() || zz.deletedIndexes.length > 0) {
          const uz = zz.items.slice().reverse();
          return this.clear(), this.push(...uz), this
        }
        return uz.operation(nz.REVERSE), zz.items.reverse(), zz.tmpItems.reverse(), zz.$reindexChildren(0), this
      }
      shift() {
        const zz = this[wz],
          uz = zz.items;
        if (0 === uz.length) return;
        const bz = zz[Rz],
          Ez = zz.deletedIndexes;
        let iz = 0;
        for (; !0 === Ez[iz];) iz++;
        const lz = zz.$isUnsentAdd(iz);
        return bz.delete(iz, nz.DELETE), lz ? zz.$cancelAdd(iz) : Ez[iz] = !0, uz.shift()
      }
      slice(zz, uz) {
        const bz = new bE;
        return bz.push(...this.items.slice(zz, uz)), bz
      }
      sort() {
        let zz = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : zE;
        const uz = this[wz];
        uz.isMovingItems = !0;
        const bz = uz[Rz];
        return uz.items.sort(zz).forEach(((zz, uz) => bz.change(uz, nz.REPLACE))), uz.tmpItems.sort(zz), uz.$reindexChildren(0), uz.isMovingItems = !1, this
      }
      splice(zz, uz) {
        const bz = this[wz],
          Ez = bz[Rz],
          iz = bz.items,
          lz = bz.tmpItems,
          Mz = bz.deletedIndexes,
          tz = iz.length,
          Hz = lz.length;
        for (var Oz = arguments.length, pz = new Array(Oz > 2 ? Oz - 2 : 0), dz = 2; dz < Oz; dz++) pz[dz - 2] = arguments[dz];
        const Fz = pz.length,
          Zz = [];
        for (let nz = 0; nz < Hz; nz++) !0 !== Mz[nz] && Zz.push(nz);
        let Kz;
        if (tz > zz) {
          void 0 === uz && (uz = tz - zz);
          for (let iz = zz; iz < zz + uz; iz++) {
            const zz = Zz[iz],
              uz = bz.$isUnsentAdd(zz);
            Ez.delete(zz, nz.DELETE), uz ? (Kz ??= []).push(zz) : Mz[zz] = !0
          }
        } else uz = 0;
        if (Fz > 0) {
          const iz = Zz[zz] ?? tz,
            Hz = Math.min(Fz, uz);
          for (let zz = 0; zz < Hz; zz++) {
            const uz = iz + zz;
            let bz;
            const tz = void 0 !== Kz ? Kz.indexOf(uz) : -1; - 1 !== tz ? (Kz.splice(tz, 1), bz = nz.ADD) : bz = Mz[uz] ? nz.DELETE_AND_ADD : nz.ADD, Ez.indexedOperation(uz, bz), lz[uz] = pz[zz], Mz[uz] = !1, pz[zz][Rz]?.setParent(this, Ez.root, uz)
          }
          const Oz = Fz - Hz;
          if (Oz > 0) {
            const zz = iz + Hz;
            Ez.insertAt(zz, Oz);
            for (let uz = 0; uz < Oz; uz++) pz[Hz + uz][Rz]?.setParent(this, Ez.root, zz + uz);
            Mz.length > 0 && Mz.splice(zz, 0, ...new Array(Oz).fill(!1)), lz.splice(zz, 0, ...pz.slice(Hz)), bz.$reindexChildren(zz + Oz)
          }
        }
        if (void 0 !== Kz && Kz.length > 0) {
          for (let zz = Kz.length - 1; zz >= 0; zz--) bz.$cancelAdd(Kz[zz], !1);
          bz.$reindexChildren(Kz[0])
        }
        return Ez.root?.enqueueChangeTree(Ez), iz.splice(zz, uz, ...pz)
      }
      unshift() {
        const zz = this[wz],
          uz = zz[Rz];
        uz.unshift(arguments.length);
        for (let Ez = 0; Ez < arguments.length; Ez++)(Ez < 0 || arguments.length <= Ez ? void 0 : arguments[Ez])?.[Rz]?.setParent(this, uz.root, Ez);
        const bz = zz.deletedIndexes;
        return bz.length > 0 && bz.unshift(...new Array(arguments.length).fill(!1)), zz.tmpItems.unshift(...arguments), zz.$reindexChildren(arguments.length), zz.items.unshift(...arguments)
      }
      indexOf(zz, uz) {
        return this.items.indexOf(zz, uz)
      }
      lastIndexOf(zz) {
        let uz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.length - 1;
        return this.items.lastIndexOf(zz, uz)
      }
      every(zz, uz) {
        return this.items.every(zz, uz)
      }
      some(zz, uz) {
        return this.items.some(zz, uz)
      }
      forEach(zz, uz) {
        return this.items.forEach(zz, uz)
      }
      map(zz, uz) {
        return this.items.map(zz, uz)
      }
      filter(zz, uz) {
        return this.items.filter(zz, uz)
      }
      reduce(zz, uz) {
        return this.items.reduce.apply(this.items, arguments)
      }
      reduceRight(zz, uz) {
        return this.items.reduceRight.apply(this.items, arguments)
      }
      find(zz, uz) {
        return this.items.find(zz, uz)
      }
      findIndex(zz, uz) {
        return this.items.findIndex(zz, uz)
      }
      fill(zz, uz, bz) {
        throw new Error("ArraySchema#fill() not implemented")
      }
      copyWithin(zz, uz, bz) {
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
        return bE
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
      includes(zz, uz) {
        return this.items.includes(zz, uz)
      }
      flatMap(zz, uz) {
        throw new Error("ArraySchema#flatMap() is not supported.")
      }
      flat(zz) {
        throw new Error("ArraySchema#flat() is not supported.")
      }
      findLast() {
        return this.items.findLast.apply(this.items, arguments)
      }
      findLastIndex() {
        for (var zz = arguments.length, uz = new Array(zz), bz = 0; bz < zz; bz++) uz[bz] = arguments[bz];
        return this.items.findLastIndex.apply(this.items, arguments)
      }
      with(zz, uz) {
        const bz = this.items.slice();
        return zz < 0 && (zz += this.length), bz[zz] = uz, new bE(...bz)
      }
      toReversed() {
        return this.items.slice().reverse()
      }
      toSorted(zz) {
        return this.items.slice().sort(zz)
      }
      toSpliced(zz, uz) {
        for (var bz = arguments.length, Ez = new Array(bz > 2 ? bz - 2 : 0), nz = 2; nz < bz; nz++) Ez[nz - 2] = arguments[nz];
        const iz = this.items.slice();
        return iz.splice.apply(iz, arguments), iz
      }
      shuffle() {
        return this.move((zz => {
          let uz = this.items.length;
          for (; 0 != uz;) {
            let zz = Math.floor(Math.random() * uz);
            uz--, [this[uz], this[zz]] = [this[zz], this[uz]]
          }
        }))
      }
      move(zz) {
        return this.isMovingItems = !0, zz(this), this.isMovingItems = !1, this
      } [dz](zz) {
        let uz = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        const bz = this[wz] ?? this;
        return uz || bz.deletedIndexes[zz] ? bz.items[zz] : bz.tmpItems[zz] || bz.items[zz]
      } [Fz](zz) {
        const uz = this[wz] ?? this;
        uz.items[zz] = void 0, uz._needsCompaction = !0
      } [Xz]() {
        const zz = this.tmpItems;
        this.tmpItems = this.items.slice(), this.deletedIndexes.length > 0 && (this.$reindexChildren(0, zz), this.deletedIndexes.length = 0)
      } [sz]() {
        const zz = this[wz] ?? this;
        zz._needsCompaction && (zz._needsCompaction = !1, zz.items = zz.items.filter((zz => void 0 !== zz)))
      } [Zz](zz, uz, bz) {
        const Ez = this[wz] ?? this,
          nz = Ez.items;
        let iz = !1;
        for (let lz = 0; lz < nz.length; lz++) {
          const Mz = nz[lz];
          zz.has(lz) ? bz(Mz) : (iz = !0, uz(Mz, lz), Ez[Fz](lz))
        }
        iz && Ez[sz]()
      }
      toArray() {
        return this.items.slice(0)
      }
      toJSON() {
        return this.toArray().map((zz => "function" === typeof zz.toJSON ? zz.toJSON() : zz))
      }
      clone(zz) {
        let uz;
        return zz ? (uz = new bE, uz.push(...this.items)) : uz = new bE(...this.map((zz => zz[Rz] ? zz.clone() : zz))), uz
      }
    }
    ou("array", {
      constructor: bE
    });
    class EE {
      keyByIndex = new Map;
      indexByKey = Object.create(null);
      nextIndex = 0;
      snapshots;
      indexOf(zz) {
        const uz = this.indexByKey[zz];
        return void 0 === uz ? void 0 : uz
      }
      assign(zz) {
        const uz = this.nextIndex++;
        return this.indexByKey[zz] = uz, this.keyByIndex.set(uz, zz), uz
      }
      snapshot(zz, uz) {
        (this.snapshots ??= new Map).set(zz, uz)
      }
      forgetSnapshot(zz) {
        this.snapshots?.delete(zz)
      }
      snapshotAt(zz) {
        return this.snapshots?.get(zz)
      }
      setIndex(zz, uz) {
        this.keyByIndex.set(zz, uz), this.indexByKey[uz] = zz
      }
      keyOf(zz) {
        return this.keyByIndex.get(zz)
      }
      cleanupAfterEncode() {
        if (void 0 !== this.snapshots) {
          for (const [zz] of this.snapshots) {
            const uz = this.keyByIndex.get(zz);
            void 0 !== uz && (delete this.indexByKey[uz], this.keyByIndex.delete(zz))
          }
          this.snapshots.clear()
        }
      }
      reset() {
        this.indexByKey = Object.create(null), this.keyByIndex.clear(), this.snapshots?.clear(), this.nextIndex = 0
      }
    }
    class nE {
      [Rz];
      [Mz];
      childType;
      [Kz];
      $items = new Map;
      journal = new EE;
      _stream;
      get maxPerTick() {
        return this._stream?.maxPerTick ?? 32
      }
      set maxPerTick(zz) {
        (this._stream ??= xu()).maxPerTick = zz
      }
      get priority() {
        return this._stream?.priority
      }
      set priority(zz) {
        (this._stream ??= xu()).priority = zz
      }
      get $indexes() {
        return this.journal.keyByIndex
      }
      get _collectionIndexes() {
        return this.journal.indexByKey
      }
      static[Hz] = mb;
      static[Oz] = Bb;
      static COLLECTION_KIND = yb;
      static[pz](zz, uz, bz) {
        if (!bz || "string" === typeof zz[Kz]) return !0;
        const Ez = zz[dz](uz) ?? zz.journal.snapshotAt(uz);
        return bz.isChangeTreeVisible(Ez[Rz])
      }
      static is(zz) {
        return void 0 !== zz.map
      }
      constructor(zz) {
        if (Object.defineProperty(this, Rz, {
            value: new Lb(this),
            enumerable: !1,
            writable: !0
          }), this[Kz] = void 0, zz)
          if (zz instanceof Map || zz instanceof nE) zz.forEach(((zz, uz) => this.set(uz, zz)));
          else
            for (const uz in zz) this.set(uz, zz[uz])
      }
      static initializeForDecoder() {
        const zz = Object.create(nE.prototype);
        return zz.$items = new Map, zz.journal = new EE, zz[Kz] = void 0, Gb(zz), zz
      } [Symbol.iterator]() {
        return this.$items[Symbol.iterator]()
      }
      get[Symbol.toStringTag]() {
        return this.$items[Symbol.toStringTag]
      }
      static get[Symbol.species]() {
        return nE
      }
      set(zz, uz) {
        if (void 0 === uz || null === uz) throw new Error(`MapSchema#set('${zz}', ${uz}): trying to set ${uz} value on '${zz}'.`);
        "object" === typeof uz && this[Kz] && kb(uz, this[Kz], this, zz), zz = zz.toString();
        const bz = this[Rz],
          Ez = void 0 !== uz[Rz],
          iz = this.journal;
        let lz, Mz = iz.indexOf(zz);
        if (void 0 !== Mz) {
          lz = nz.REPLACE;
          const bz = this.$items.get(zz);
          if (bz === uz) return;
          Ez && (lz = nz.DELETE_AND_ADD, void 0 !== bz && bz[Rz].root?.remove(bz[Rz])), void 0 !== iz.snapshotAt(Mz) && iz.forgetSnapshot(Mz)
        } else Mz = iz.assign(zz), lz = nz.ADD;
        return this.$items.set(zz, uz), lz === nz.ADD && bz.isStreamCollection ? void 0 !== bz.root && Au(this, bz.root, Mz) : bz.change(Mz, lz), Ez && uz[Rz].setParent(this, bz.root, Mz), this
      }
      get(zz) {
        return this.$items.get(zz)
      }
      getOrInsert(zz, uz) {
        return this.$items.has(zz) ? this.$items.get(zz) : (this.set(zz, uz), uz)
      }
      getOrInsertComputed(zz, uz) {
        if (this.$items.has(zz)) return this.$items.get(zz);
        const bz = uz(zz);
        return this.set(zz, bz), bz
      }
      delete(zz) {
        if (!this.$items.has(zz)) return !1;
        const uz = this.journal.indexOf(zz),
          bz = this.$items.get(zz),
          Ez = this[Rz];
        if (Ez.isStreamCollection) {
          const nz = Ez.root;
          let iz = !1;
          return void 0 !== nz && (iz = Tu(this, nz, this[Mz], uz)), void 0 !== bz?.[Rz] && nz?.remove(bz[Rz]), this.$items.delete(zz), iz || this.journal.snapshot(uz, bz), !0
        }
        return this.journal.snapshot(uz, bz), Ez.delete(uz), this.$items.delete(zz)
      }
      clear() {
        const zz = this[Rz];
        zz.discard(), zz.forEachChild(((uz, bz) => {
          zz.root?.remove(uz)
        })), this.journal.reset(), this.$items.clear(), zz.operation(nz.CLEAR)
      } [fz]() {
        const zz = this[Rz];
        if (zz.isStreamCollection) throw new Error("@colyseus/schema: cannot reset a streamed MapSchema (pooling not supported).");
        this.$items.forEach((zz => zz?.[fz]?.())), this.$items.clear(), this.journal.reset(), zz.recycle(), this[Mz] = void 0
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
        this[Rz].pause()
      }
      resumeTracking() {
        this[Rz].resume()
      }
      untracked(zz) {
        return this[Rz].untracked(zz)
      }
      get isTrackingPaused() {
        return this[Rz].paused
      }
      setIndex(zz, uz) {
        this.journal.setIndex(zz, uz)
      }
      getIndex(zz) {
        return this.journal.keyOf(zz)
      } [dz](zz) {
        const uz = this.journal.keyOf(zz);
        return void 0 !== uz ? this.$items.get(uz) : void 0
      } [Fz](zz) {
        const uz = this.journal.keyOf(zz);
        void 0 !== uz && (this.$items.delete(uz), this.journal.keyByIndex.delete(zz))
      } [Zz](zz, uz, bz) {
        let Ez = null;
        if (this.$items.forEach(((nz, iz) => {
            zz.has(iz) ? bz(nz) : ((Ez ??= new Set).add(iz), uz(nz, iz))
          })), null !== Ez) {
          Ez.forEach((zz => {
            this.$items.delete(zz), delete this.journal.indexByKey[zz]
          }));
          const zz = [];
          this.journal.keyByIndex.forEach(((uz, bz) => {
            Ez.has(uz) && zz.push(bz)
          }));
          for (let uz = 0; uz < zz.length; uz++) this.journal.keyByIndex.delete(zz[uz])
        }
      } [Xz]() {
        this.journal.cleanupAfterEncode()
      }
      _dropView(zz) {
        au(this, zz)
      }
      _unregister() {}
      toJSON() {
        return Object.fromEntries(Array.from(this, (zz => {
          let [uz, bz] = zz;
          return [uz, "function" === typeof bz.toJSON ? bz.toJSON() : bz]
        })))
      }
      clone(zz) {
        let uz;
        return zz ? uz = Object.assign(new nE, this) : (uz = new nE, this.forEach(((zz, bz) => {
          zz[Rz] ? uz.set(bz, zz.clone()) : uz.set(bz, zz)
        }))), uz
      }
    }
    ou("map", {
      constructor: nE
    });
    class iE {
      [Rz];
      [Mz];
      [Kz];
      $items = new Map;
      deletedItems = {};
      $refId = 0;
      _stream;
      get maxPerTick() {
        return this._stream?.maxPerTick ?? 32
      }
      set maxPerTick(zz) {
        (this._stream ??= xu()).maxPerTick = zz
      }
      get priority() {
        return this._stream?.priority
      }
      set priority(zz) {
        (this._stream ??= xu()).priority = zz
      }
      static[Hz] = qb;
      static[Oz] = Bb;
      static COLLECTION_KIND = Wb;
      static[pz](zz, uz, bz) {
        return !bz || "string" === typeof zz[Kz] || bz.isChangeTreeVisible((zz[dz](uz) ?? zz.deletedItems[uz])[Rz])
      }
      static is(zz) {
        return void 0 !== zz.collection
      }
      constructor(zz) {
        Object.defineProperty(this, Rz, {
          value: new Lb(this),
          enumerable: !1,
          writable: !0
        }), this[Kz] = void 0, zz && zz.forEach((zz => this.add(zz)))
      }
      static initializeForDecoder() {
        const zz = Object.create(iE.prototype);
        return zz.$items = new Map, zz.deletedItems = {}, zz.$refId = 0, zz[Kz] = void 0, Gb(zz), zz
      }
      add(zz) {
        const uz = this.$refId++,
          bz = this[Rz];
        return this.$items.set(uz, zz), bz.isStreamCollection ? void 0 !== bz.root && Au(this, bz.root, uz) : bz.change(uz), void 0 !== zz[Rz] && zz[Rz].setParent(this, bz.root, uz), uz
      }
      at(zz) {
        const uz = Array.from(this.$items.keys())[zz];
        return this.$items.get(uz)
      }
      entries() {
        return this.$items.entries()
      }
      delete(zz) {
        const uz = this.$items.entries();
        let bz, Ez;
        for (;
          (Ez = uz.next()) && !Ez.done;)
          if (zz === Ez.value[1]) {
            bz = Ez.value[0];
            break
          } if (void 0 === bz) return !1;
        const nz = this[Rz];
        if (nz.isStreamCollection) {
          const zz = nz.root,
            uz = this.$items.get(bz);
          return void 0 !== zz && Tu(this, zz, this[Mz], bz), void 0 !== uz?.[Rz] && zz?.remove(uz[Rz]), this.deletedItems[bz] = uz, this.$items.delete(bz)
        }
        return this.deletedItems[bz] = nz.delete(bz), this.$items.delete(bz)
      }
      clear() {
        const zz = this[Rz];
        zz.discard(), zz.forEachChild(((uz, bz) => {
          zz.root?.remove(uz)
        })), this.$items.clear(), zz.operation(nz.CLEAR)
      } [fz]() {
        const zz = this[Rz];
        if (zz.isStreamCollection) throw new Error("@colyseus/schema: cannot reset a streamed CollectionSchema (pooling not supported).");
        this.$items.forEach((zz => zz?.[fz]?.())), this.$items.clear(), this.deletedItems = {}, this.$refId = 0, zz.recycle(), this[Mz] = void 0
      }
      has(zz) {
        return Array.from(this.$items.values()).some((uz => uz === zz))
      }
      forEach(zz) {
        this.$items.forEach(((uz, bz, Ez) => zz(uz, bz, this)))
      }
      values() {
        return this.$items.values()
      }
      get size() {
        return this.$items.size
      }
      pauseTracking() {
        this[Rz].pause()
      }
      resumeTracking() {
        this[Rz].resume()
      }
      untracked(zz) {
        return this[Rz].untracked(zz)
      }
      get isTrackingPaused() {
        return this[Rz].paused
      } [Symbol.iterator]() {
        return this.$items.values()
      }
      setIndex(zz, uz) {}
      getIndex(zz) {
        return zz
      } [dz](zz) {
        return this.$items.get(zz)
      } [Fz](zz) {
        this.$items.delete(zz)
      } [Zz](zz, uz, bz) {
        let Ez = null;
        if (this.$items.forEach(((nz, iz) => {
            zz.has(iz) ? bz(nz) : ((Ez ??= []).push(iz), uz(nz, iz))
          })), null !== Ez)
          for (let nz = 0; nz < Ez.length; nz++) this[Fz](Ez[nz])
      } [Xz]() {
        for (const zz in this.deletedItems) delete this.deletedItems[zz]
      }
      _dropView(zz) {
        au(this, zz)
      }
      _unregister() {}
      toArray() {
        return Array.from(this.$items.values())
      }
      toJSON() {
        const zz = [];
        return this.forEach(((uz, bz) => {
          zz.push("function" === typeof uz.toJSON ? uz.toJSON() : uz)
        })), zz
      }
      clone(zz) {
        let uz;
        return zz ? uz = Object.assign(new iE, this) : (uz = new iE, this.forEach((zz => {
          zz[Rz] ? uz.add(zz.clone()) : uz.add(zz)
        }))), uz
      }
    }
    ou("collection", {
      constructor: iE
    });
    class lE {
      [Rz];
      [Mz];
      [Kz];
      $items = new Map;
      deletedItems = {};
      $refId = 0;
      _stream;
      get maxPerTick() {
        return this._stream?.maxPerTick ?? 32
      }
      set maxPerTick(zz) {
        (this._stream ??= xu()).maxPerTick = zz
      }
      get priority() {
        return this._stream?.priority
      }
      set priority(zz) {
        (this._stream ??= xu()).priority = zz
      }
      static[Hz] = qb;
      static[Oz] = Bb;
      static COLLECTION_KIND = Qb;
      static[pz](zz, uz, bz) {
        return !bz || "string" === typeof zz[Kz] || bz.isVisible((zz[dz](uz) ?? zz.deletedItems[uz])[Rz])
      }
      static is(zz) {
        return void 0 !== zz.set
      }
      constructor(zz) {
        Object.defineProperty(this, Rz, {
          value: new Lb(this),
          enumerable: !1,
          writable: !0
        }), this[Kz] = void 0, zz && zz.forEach((zz => this.add(zz)))
      }
      static initializeForDecoder() {
        const zz = Object.create(lE.prototype);
        return zz.$items = new Map, zz.deletedItems = {}, zz.$refId = 0, zz[Kz] = void 0, Gb(zz), zz
      }
      add(zz) {
        if (this.has(zz)) return !1;
        const uz = this.$refId++,
          bz = this[Rz];
        return this.$items.set(uz, zz), bz.isStreamCollection ? void 0 !== bz.root && Au(this, bz.root, uz) : bz.change(uz, nz.ADD), void 0 !== zz[Rz] && zz[Rz].setParent(this, bz.root, uz), uz
      }
      entries() {
        return this.$items.entries()
      }
      delete(zz) {
        const uz = this.$items.entries();
        let bz, Ez;
        for (;
          (Ez = uz.next()) && !Ez.done;)
          if (zz === Ez.value[1]) {
            bz = Ez.value[0];
            break
          } if (void 0 === bz) return !1;
        const nz = this[Rz];
        if (nz.isStreamCollection) {
          const zz = nz.root,
            uz = this.$items.get(bz);
          return void 0 !== zz && Tu(this, zz, this[Mz], bz), void 0 !== uz?.[Rz] && zz?.remove(uz[Rz]), this.deletedItems[bz] = uz, this.$items.delete(bz)
        }
        return this.deletedItems[bz] = nz.delete(bz), this.$items.delete(bz)
      }
      clear() {
        const zz = this[Rz];
        zz.discard(), this.$items.clear(), zz.operation(nz.CLEAR)
      } [fz]() {
        const zz = this[Rz];
        if (zz.isStreamCollection) throw new Error("@colyseus/schema: cannot reset a streamed SetSchema (pooling not supported).");
        this.$items.forEach((zz => zz?.[fz]?.())), this.$items.clear(), this.deletedItems = {}, this.$refId = 0, zz.recycle(), this[Mz] = void 0
      }
      has(zz) {
        const uz = this.$items.values();
        let bz, Ez = !1;
        for (;
          (bz = uz.next()) && !bz.done;)
          if (zz === bz.value) {
            Ez = !0;
            break
          } return Ez
      }
      forEach(zz) {
        this.$items.forEach(((uz, bz, Ez) => zz(uz, bz, this)))
      }
      values() {
        return this.$items.values()
      }
      get size() {
        return this.$items.size
      }
      pauseTracking() {
        this[Rz].pause()
      }
      resumeTracking() {
        this[Rz].resume()
      }
      untracked(zz) {
        return this[Rz].untracked(zz)
      }
      get isTrackingPaused() {
        return this[Rz].paused
      } [Symbol.iterator]() {
        return this.$items.values()
      }
      setIndex(zz, uz) {}
      getIndex(zz) {
        return zz
      } [dz](zz) {
        return this.$items.get(zz)
      } [Fz](zz) {
        this.$items.delete(zz)
      } [Zz](zz, uz, bz) {
        let Ez = null;
        if (this.$items.forEach(((nz, iz) => {
            zz.has(iz) ? bz(nz) : ((Ez ??= []).push(iz), uz(nz, iz))
          })), null !== Ez)
          for (let nz = 0; nz < Ez.length; nz++) this[Fz](Ez[nz])
      } [Xz]() {
        for (const zz in this.deletedItems) delete this.deletedItems[zz]
      }
      _dropView(zz) {
        au(this, zz)
      }
      _unregister() {}
      toArray() {
        return Array.from(this.$items.values())
      }
      toJSON() {
        const zz = [];
        return this.forEach(((uz, bz) => {
          zz.push("function" === typeof uz.toJSON ? uz.toJSON() : uz)
        })), zz
      }
      clone(zz) {
        let uz;
        return zz ? uz = Object.assign(new lE, this) : (uz = new lE, this.forEach((zz => {
          zz[Rz] ? uz.add(zz.clone()) : uz.add(zz)
        }))), uz
      }
    }
    ou("set", {
      constructor: lE
    });
    class ME {
      [Rz];
      [Mz];
      [Kz];
      $items = new Map;
      $nextPosition = 0;
      _itemIndex = new Map;
      _stream;
      get maxPerTick() {
        return this._stream?.maxPerTick ?? 32
      }
      set maxPerTick(zz) {
        (this._stream ??= xu()).maxPerTick = zz
      }
      get priority() {
        return this._stream?.priority
      }
      set priority(zz) {
        (this._stream ??= xu()).priority = zz
      }
      static $isStream = !0;
      static[Hz] = qb;
      static[Oz] = Bb;
      static COLLECTION_KIND = eb;
      static[pz](zz, uz, bz) {
        if (!bz) return !0;
        const Ez = zz[dz](uz);
        return void 0 !== Ez && bz.isVisible(Ez[Rz])
      }
      static is(zz) {
        return zz && void 0 !== zz.stream
      }
      constructor() {
        Object.defineProperty(this, Rz, {
          value: new Lb(this),
          enumerable: !1,
          writable: !0
        }), this[Kz] = void 0
      }
      static initializeForDecoder() {
        const zz = Object.create(ME.prototype);
        return zz.$items = new Map, zz.$nextPosition = 0, zz._itemIndex = new Map, zz[Kz] = void 0, Gb(zz), zz
      }
      add(zz) {
        if (this._itemIndex.has(zz)) return -1;
        const uz = this.$nextPosition++;
        this.$items.set(uz, zz), this._itemIndex.set(zz, uz);
        const bz = this[Rz].root;
        return void 0 !== zz[Rz] && zz[Rz].setParent(this, bz, uz), void 0 !== bz && Au(this, bz, uz), uz
      }
      remove(zz) {
        const uz = this._itemIndex.get(zz);
        if (void 0 === uz) return !1;
        this._itemIndex.delete(zz), this.$items.delete(uz);
        const bz = this[Rz].root;
        return void 0 !== bz && (Tu(this, bz, this[Mz], uz), void 0 !== zz[Rz] && bz.remove(zz[Rz])), !0
      }
      has(zz) {
        return this._itemIndex.has(zz)
      }
      clear() {
        const zz = this[Rz].root;
        if (void 0 !== zz) {
          ! function(zz, uz, bz) {
            const Ez = zz._stream;
            if (void 0 !== Ez) {
              Ez.broadcastPending.clear();
              for (const zz of Ez.sentBroadcast) Ez.broadcastDeletes.add(zz);
              Ez.sentBroadcast.clear(), uz.forEachActiveView((zz => {
                Ez.pendingByView.get(zz.id)?.clear();
                const uz = Ez.sentByView.get(zz.id);
                if (void 0 !== uz && uz.size > 0) {
                  let Ez = zz.changes.get(bz);
                  void 0 === Ez && (Ez = new Map, zz.changes.set(bz, Ez));
                  for (const zz of uz) Ez.set(zz, nz.DELETE);
                  uz.clear()
                }
              }))
            }
          }(this, zz, this[Mz]);
          for (const uz of this.$items.values()) void 0 !== uz[Rz] && zz.remove(uz[Rz])
        }
        this.$items.clear(), this._itemIndex.clear()
      }
      forEach(zz) {
        for (const [uz, bz] of this.$items) zz(bz, uz, this)
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
      setIndex(zz, uz) {}
      getIndex(zz) {
        return zz
      } [dz](zz) {
        return this.$items.get(zz)
      } [Fz](zz) {
        const uz = this.$items.get(zz);
        void 0 !== uz && (this._itemIndex.delete(uz), this.$items.delete(zz))
      } [Zz]() {} [Xz]() {}
      toArray() {
        return Array.from(this.$items.values())
      }
      toJSON() {
        const zz = [];
        return this.forEach((uz => {
          zz.push("function" === typeof uz?.toJSON ? uz.toJSON() : uz)
        })), zz
      }
      clone(zz) {
        if (zz) {
          return Object.assign(new ME, this)
        }
        const uz = new ME;
        return uz.maxPerTick = this.maxPerTick, this.forEach((zz => {
          uz.add("function" === typeof zz?.clone ? zz.clone() : zz)
        })), uz
      }
      _dropView(zz) {
        au(this, zz)
      }
      _unregister() {}
    }
    ou("stream", {
      constructor: ME
    });
    class tE {
      [oz] = !0;
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
        if (zz && "object" === typeof zz && void 0 !== zz.array) throw new Error(vu);
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

    function HE(zz) {
      return null != zz && !0 === zz[oz]
    }

    function OE(zz) {
      return () => new tE(zz)
    }

    function pE(zz) {
      if (HE(zz)) {
        const uz = zz._type;
        throw new Error(`t.array/map/set/collection(): a t.* builder is not a valid element type \u2014 ${"string"===typeof uz?`use the type name instead: t.array("${uz}")`:'collections accept a Schema class or a primitive type name ("string", "number", \u2026)'}.`)
      }
      return zz
    }

    function dE(zz) {
      return new tE({
        quantized: mu(zz)
      })
    }
    const FE = Object.freeze({
        string: OE("string"),
        number: OE("number"),
        boolean: OE("boolean"),
        int8: OE("int8"),
        uint8: OE("uint8"),
        int16: OE("int16"),
        uint16: OE("uint16"),
        int32: OE("int32"),
        uint32: OE("uint32"),
        int64: OE("int64"),
        uint64: OE("uint64"),
        float32: OE("float32"),
        float64: OE("float64"),
        bigint64: OE("bigint64"),
        biguint64: OE("biguint64"),
        ref: zz => new tE(zz),
        array: zz => new tE({
          array: pE(zz)
        }),
        map: zz => new tE({
          map: pE(zz)
        }),
        set: zz => new tE({
          set: pE(zz)
        }),
        collection: zz => new tE({
          collection: pE(zz)
        }),
        stream: zz => {
          const uz = new tE({
            stream: pE(zz)
          });
          return uz._stream = !0, uz
        },
        quantized: dE,
        angle: zz => dE({
          min: 0,
          max: 2 * Math.PI,
          mode: "wrap",
          bits: zz?.bits ?? 16
        })
      }),
      ZE = -1;

    function RE(zz) {
      return gu.register(zz), zz
    }

    function KE() {
      let zz = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ZE;
      return function(uz, bz) {
        const Ez = ju.initialize(uz.constructor);
        ju.setTag(Ez, bz, zz)
      }
    }

    function wE(zz, uz) {
      const bz = ju.initialize(zz.constructor);
      ju.setUnreliable(bz, uz)
    }

    function XE(zz, uz) {
      const bz = ju.initialize(zz.constructor);
      ju.setPatchOnly(bz, uz)
    }

    function fE(zz, uz) {
      const bz = ju.initialize(zz.constructor);
      ju.setFullStateOnly(bz, uz)
    }

    function sE(zz, uz) {
      return function(bz, Ez) {
        const nz = bz.constructor;
        if (!zz) throw new Error(`${nz.name}: @type() reference provided for "${Ez}" is undefined. Make sure you don't have any circular dependencies.`);
        zz = yu(zz, `${nz.name}.${Ez}`), gu.register(nz);
        const iz = Object.getPrototypeOf(nz)[Symbol.metadata],
          lz = ju.initialize(nz);
        let Mz = lz[Ez];
        if (void 0 !== lz[Mz]) {
          if (lz[Mz].deprecated) return;
          if (void 0 !== lz[Mz].type) {
            const zz = new Error(`@colyseus/schema: Duplicate '${Ez}' definition on '${nz.name}'.\nCheck @type() annotation`);
            throw new Error(`${zz.message} ${zz.stack.split("\n")[4].trim()}`)
          }
        } else Mz = lz[Jz] ?? (iz && iz[Jz]) ?? -1, Mz++;
        if (uz && uz.manual) ju.addField(lz, Mz, Ez, zz, {
          enumerable: !0,
          configurable: !0,
          writable: !0
        });
        else {
          const {
            complexTypeKlass: uz,
            childType: bz
          } = Su(zz);
          ju.addField(lz, Mz, Ez, zz, oE(Ez, Mz, bz, uz))
        }
        lz[Nz][Ez] && Object.defineProperty(bz, Ez, lz[Nz][Ez]), ("string" === typeof zz || qu(zz)) && (lz[xz] || Object.defineProperty(lz, xz, {
          value: [],
          enumerable: !1,
          configurable: !0,
          writable: !0
        }), lz[xz][Mz] = "string" === typeof zz ? uu[zz] : cu(zz.quantized))
      }
    }
    const rE = {
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

    function oE(zz, uz, bz, Ez) {
      let iz;
      return iz = Ez ? function(zz, uz, bz, Ez) {
        const iz = Ez.constructor === bE,
          lz = Ez.constructor === nE;
        return function(zz) {
          const Ez = this[rz],
            Mz = Ez[uz];
          if (zz !== Mz) {
            if (void 0 !== zz && null !== zz) {
              if (!iz || zz instanceof bE)
                if (!lz || zz instanceof nE) zz[Kz] = bz;
                else {
                  const uz = new nE;
                  if (uz[Kz] = bz, zz instanceof Map) zz.forEach(((zz, bz) => uz.set(bz, zz)));
                  else
                    for (const bz in zz) uz.set(bz, zz[bz]);
                  zz = uz
                }
              else {
                const uz = new bE;
                uz[Kz] = bz, uz.push(...zz), zz = uz
              }
              const Ez = this[Rz],
                Hz = this.constructor;
              void 0 !== Mz && null !== Mz && Mz[Rz] ? (Ez.root?.remove(Mz[Rz]), Hz[tz](Ez, uz, nz.DELETE_AND_ADD)) : Hz[tz](Ez, uz, nz.ADD), zz[Rz]?.setParent(this, Ez.root, uz)
            } else void 0 !== Mz && null !== Mz && this[Rz].delete(uz);
            Ez[uz] = zz
          }
        }
      }(0, uz, bz, Ez) : "string" === typeof bz ? function(zz, uz, bz) {
        const Ez = rE[bz],
          iz = "string" === bz,
          lz = "boolean" === bz;
        return function(bz) {
          const Mz = this[rz],
            Hz = Mz[uz];
          if (bz !== Hz) {
            if (void 0 !== bz && null !== bz) {
              if (!lz && void 0 !== Ez && typeof bz !== Ez && (!iz || null !== bz)) {
                const uz = bz && bz.constructor ? ` (${bz.constructor.name})` : "";
                throw new Yb(`a '${Ez}' was expected, but '${JSON.stringify(bz)}'${uz} was provided in ${this.constructor.name}#${zz}`)
              }
              this.constructor[tz](this[Rz], uz, nz.ADD)
            } else void 0 !== Hz && null !== Hz && this[Rz].delete(uz);
            Mz[uz] = bz
          }
        }
      }(zz, uz, bz) : qu(bz) ? function(zz, uz, bz) {
        return function(Ez) {
          const iz = this[rz],
            lz = iz[uz];
          if (void 0 !== Ez && null !== Ez) {
            if ("number" !== typeof Ez) throw new Yb(`a 'number' was expected, but '${JSON.stringify(Ez)}' was provided in ${this.constructor.name}#${zz}`);
            if ((Ez = Uu(bz, hu(bz, Ez))) === lz) return;
            this.constructor[tz](this[Rz], uz, nz.ADD)
          } else {
            if (Ez === lz) return;
            void 0 !== lz && null !== lz && this[Rz].delete(uz)
          }
          iz[uz] = Ez
        }
      }(zz, uz, bz.quantized) : function(zz, uz, bz) {
        return function(Ez) {
          const iz = this[rz],
            lz = iz[uz];
          if (Ez !== lz) {
            if (void 0 !== Ez && null !== Ez) {
              kb(Ez, bz, this, zz);
              const iz = this[Rz],
                Mz = this.constructor;
              void 0 !== lz && null !== lz && lz[Rz] ? (iz.root?.remove(lz[Rz]), Mz[tz](iz, uz, nz.DELETE_AND_ADD)) : Mz[tz](iz, uz, nz.ADD), Ez[Rz]?.setParent(this, iz.root, uz)
            } else void 0 !== lz && null !== lz && this[Rz].delete(uz);
            iz[uz] = Ez
          }
        }
      }(zz, uz, bz), {
        get: function() {
          return this[rz][uz]
        },
        set: iz,
        enumerable: !0,
        configurable: !0
      }
    }

    function NE() {
      let zz = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
      return function(uz, bz) {
        const Ez = ju.initialize(uz.constructor);
        ju.setDeprecated(Ez, bz), zz && (Ez[Nz] ??= {}, Ez[Nz][bz] = {
          get: function() {
            throw new Error(`${bz} is deprecated.`)
          },
          set: function(zz) {},
          enumerable: !1,
          configurable: !0
        }, Object.defineProperty(uz, bz, Ez[Nz][bz]))
      }
    }
    let vE = !1;

    function xE(zz, uz, bz) {
      vE || (vE = !0, console.warn("@colyseus/schema: defineTypes() is deprecated and will be removed in a future release. Use schema() with t.* field builders instead \u2192 https://docs.colyseus.io/state/schema"));
      for (let Ez in uz) sE(uz[Ez], bz)(zz.prototype, Ez);
      return zz
    }

    function JE(zz, uz) {
      let bz = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : TE;
      if (null == zz || "object" !== typeof zz) throw new Error(`schema(): first argument must be a fields object (got ${typeof zz}).`);
      const Ez = {},
        nz = {},
        iz = {},
        lz = {},
        Mz = (zz, uz) => {
          if (uz.hasDefault)((zz, uz) => {
            "function" === typeof uz ? lz[zz] = uz : uz && "function" === typeof uz.clone ? lz[zz] = () => uz.clone() : iz[zz] = uz
          })(zz, uz.default);
          else if (!uz.optional) {
            const bz = function(zz) {
              if (zz && "object" === typeof zz) {
                if (void 0 !== zz.array) return () => new bE;
                if (void 0 !== zz.map) return () => new nE;
                if (void 0 !== zz.set) return () => new lE;
                if (void 0 !== zz.collection) return () => new iE;
                if (void 0 !== zz.stream) return () => new ME
              } else if ("function" === typeof zz && TE.is(zz) && (!zz.prototype.initialize || 0 === zz.prototype.initialize.length)) return () => new zz
            }(uz.type);
            bz && (lz[zz] = bz)
          }
        },
        tz = {},
        Hz = [],
        Oz = [],
        pz = {},
        dz = [],
        Fz = [],
        Zz = {},
        Rz = [];
      for (const rz in zz) {
        const bz = zz[rz],
          iz = `schema(${uz?`'${uz}'`:""}): field '${rz}'`;
        if (HE(bz)) {
          const zz = bz.toDefinition();
          if (zz.noSync) {
            if (void 0 !== zz.view || zz.unreliable || zz.patchOnly || zz.fullStateOnly || zz.stream) throw new Error(`${iz} uses .noSync() together with a sync-only modifier (.view/.unreliable/.patchOnly/.fullStateOnly/.stream). A local-only field cannot be synchronized.`);
            Mz(rz, zz);
            continue
          }
          if (zz.patchOnly && zz.fullStateOnly) throw new Error(`${iz} uses .patchOnly() together with .fullStateOnly(). Those are the only two delivery channels, so the field would never reach a client \u2014 use .noSync() if that is intended.`);
          const uz = yu(zz.type, iz);
          if ("function" === typeof uz && !TE.is(uz)) throw new Error(`${iz} is a synced ref to non-Schema class '${uz.name||"(anonymous)"}' \u2014 use .noSync(), or Metadata.setFields().`);
          Ez[rz] = uz, void 0 !== zz.view && (tz[rz] = zz.view), zz.unreliable && Hz.push(rz), zz.patchOnly && Oz.push(rz), zz.deprecated && (pz[rz] = zz.deprecatedThrows), zz.fullStateOnly && dz.push(rz), zz.stream && Fz.push(rz), void 0 !== zz.streamPriority && (Zz[rz] = zz.streamPriority), zz.optional && Rz.push(rz), Mz(rz, zz)
        } else {
          if ("function" !== typeof bz) throw new Error(`${iz} must be a t.* builder, Schema subclass, or method (got ${typeof bz}).`);
          TE.is(bz) ? (Ez[rz] = bz, bz.prototype.initialize && 0 !== bz.prototype.initialize.length || (lz[rz] = () => new bz)) : nz[rz] = bz
        }
      }
      const Kz = zz => {
          for (const uz in iz) zz[uz] = iz[uz];
          for (const uz in lz) zz[uz] = lz[uz]()
        },
        wz = () => {
          const zz = {};
          return Kz(zz), zz
        },
        Xz = "function" === typeof nz.initialize,
        fz = nz.initialize ?? bz._initialize,
        sz = class extends bz {
          constructor() {
            for (var zz = arguments.length, uz = new Array(zz), bz = 0; bz < zz; bz++) uz[bz] = arguments[bz];
            const nz = uz[0];
            void 0 === nz ? (super(), Kz(this)) : super(Object.assign(wz(), Xz ? (zz => {
              const uz = Object.keys(Ez),
                bz = {};
              for (const Ez in zz) uz.includes(Ez) || (bz[Ez] = zz[Ez]);
              return bz
            })(nz) : nz)), fz && new.target === sz && fz.apply(this, uz)
          }
        };
      uz && Object.defineProperty(sz, "name", {
        value: uz
      }), ju.setFields(sz, Ez), sz._getDefaultValues = wz, sz._initialize = fz, Object.assign(sz.prototype, nz);
      for (const rz in tz) KE(tz[rz])(sz.prototype, rz);
      for (const rz of Hz) wE(sz.prototype, rz);
      for (const rz of Oz) XE(sz.prototype, rz);
      for (const rz in pz) NE(pz[rz])(sz.prototype, rz);
      if (dz.length > 0 || Fz.length > 0) {
        const zz = sz[Symbol.metadata];
        for (const uz of dz) ju.setFullStateOnly(zz, uz);
        for (const uz of Fz) ju.setStream(zz, uz);
        for (const uz in Zz) ju.setStreamPriority(zz, uz, Zz[uz])
      }
      if (Rz.length > 0) {
        const zz = sz[Symbol.metadata];
        for (const uz of Rz) zz[zz[uz]].optional = !0
      }
      return sz.extend = (zz, uz) => JE(zz, uz, sz), sz
    }

    function AE(zz) {
      const uz = zz[Rz].root,
        bz = {
          ops: {},
          refs: []
        };
      let Ez = uz.changes.next;
      for (; Ez;) {
        const zz = Ez.changeTree;
        void 0 !== zz ? (bz.refs.push(`refId#${zz.ref[Mz]}`), zz.forEach(((zz, uz) => {
          if (zz < 0 || !uz) return;
          const Ez = nz[uz];
          bz.ops[Ez] || (bz.ops[Ez] = 0), bz.ops[Ez]++
        })), Ez = Ez.next) : Ez = Ez.next
      }
      return bz
    }
    class TE {
      static[Hz] = Vb;
      static[Oz] = Ib;
      [Mz];
      [rz];
      static initialize(zz) {
        Object.defineProperty(zz, Rz, {
          value: new Lb(zz),
          enumerable: !1,
          writable: !0
        }), zz[rz] = []
      }
      static initializeForDecoder() {
        const zz = Object.create(this.prototype);
        return Gb(zz), zz[rz] = [], zz
      }
      static reset(zz) {
        const uz = zz?.[Rz];
        if (void 0 === uz || "function" !== typeof uz.recycle) throw new Error("@colyseus/schema: Schema.reset() requires a tracked (encoder-side) instance.");
        if (void 0 !== uz.extraParents) throw new Error(`@colyseus/schema: cannot reset a shared instance (${zz.constructor.name}) with multiple parents.`);
        zz[fz]()
      } [fz]() {
        const zz = this.constructor[Symbol.metadata],
          uz = zz?.[Az] ?? [],
          bz = this[rz];
        for (let Ez = 0; Ez < uz.length; Ez++) {
          const zz = bz[uz[Ez]];
          zz?.[fz]?.()
        }
        this[Rz].recycle(), this[Mz] = void 0
      }
      static is(zz) {
        const uz = zz[Symbol.metadata];
        return "object" === typeof uz && null !== uz
      }
      static isSchema(zz) {
        return "function" === typeof zz?.assign
      }
      static[tz](zz, uz) {
        let bz = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : nz.ADD;
        zz.change(uz, bz)
      }
      static[pz](zz, uz, bz) {
        const Ez = zz.constructor[Symbol.metadata],
          nz = Ez[uz]?.tag;
        return void 0 === bz ? void 0 === nz : void 0 === nz || (nz === ZE ? bz.isChangeTreeVisible(zz[Rz]) : bz.hasTagOnTree(zz[Rz], nz))
      }
      constructor(zz) {
        TE.initialize(this), zz && TE.assignProps(this, zz)
      }
      assign(zz) {
        return TE.assignProps(this, zz), this
      }
      static assignProps(zz, uz) {
        const bz = zz.constructor[Symbol.metadata];
        if (bz && void 0 !== bz[Jz])
          for (let nz = 0; nz <= bz[Jz]; nz++) {
            const Ez = bz[nz];
            if (!Ez) continue;
            const iz = uz[Ez.name];
            void 0 !== iz && (zz[Ez.name] = iz)
          }
        const Ez = Object.keys(uz);
        for (let nz = 0; nz < Ez.length; nz++) {
          const iz = Ez[nz];
          bz && void 0 !== bz[iz] || (zz[iz] = uz[iz])
        }
      }
      restore(zz) {
        const uz = this.constructor[Symbol.metadata];
        for (const bz in uz) {
          const Ez = uz[bz],
            nz = Ez.name,
            iz = Ez.type,
            lz = zz[nz];
          if (void 0 !== lz && null !== lz)
            if ("string" === typeof iz) this[nz] = lz;
            else if (TE.is(iz)) {
            const zz = new iz;
            zz.restore(lz), this[nz] = zz
          } else if ("object" === typeof iz) {
            const zz = Object.keys(iz)[0],
              uz = iz[zz];
            if ("map" === zz) {
              const zz = this[nz];
              for (const bz in lz)
                if (TE.is(uz)) {
                  const Ez = new uz;
                  Ez.restore(lz[bz]), zz.set(bz, Ez)
                } else zz.set(bz, lz[bz])
            } else if ("array" === zz) {
              const zz = this[nz];
              for (let bz = 0; bz < lz.length; bz++)
                if (TE.is(uz)) {
                  const Ez = new uz;
                  Ez.restore(lz[bz]), zz.push(Ez)
                } else zz.push(lz[bz])
            }
          }
        }
        return this
      }
      setDirty(zz, uz) {
        const bz = this.constructor[Symbol.metadata];
        this[Rz].change(bz[bz[zz]].index, uz)
      }
      pauseTracking() {
        this[Rz].pause()
      }
      resumeTracking() {
        this[Rz].resume()
      }
      untracked(zz) {
        return this[Rz].untracked(zz)
      }
      get isTrackingPaused() {
        return this[Rz].paused
      }
      clone() {
        const zz = Object.create(this.constructor.prototype);
        TE.initialize(zz);
        const uz = this.constructor[Symbol.metadata];
        for (const bz in uz) {
          const Ez = uz[bz].name;
          "object" === typeof this[Ez] && "function" === typeof this[Ez]?.clone ? zz[Ez] = this[Ez].clone() : zz[Ez] = this[Ez]
        }
        return zz
      }
      toJSON() {
        const zz = {},
          uz = this.constructor[Symbol.metadata];
        for (const bz in uz) {
          const Ez = uz[bz],
            nz = Ez.name;
          Ez.deprecated || null === this[nz] || "undefined" === typeof this[nz] || (zz[nz] = "function" === typeof this[nz].toJSON ? this[nz].toJSON() : this[nz])
        }
        return zz
      }
      discardAllChanges() {
        this[Rz].discardAll()
      } [dz](zz) {
        return this[this.constructor[Symbol.metadata][zz].name]
      } [Fz](zz) {
        this[this.constructor[Symbol.metadata][zz].name] = void 0
      }
      static debugRefIds(zz) {
        let uz = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          bz = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          Ez = arguments.length > 3 ? arguments[3] : void 0,
          nz = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "";
        const iz = uz ? ` - ${JSON.stringify(zz.toJSON())}` : "",
          lz = zz[Rz],
          tz = zz[Mz],
          Hz = Ez ? Ez.root.refCount[tz] : lz.refCount,
          Oz = Hz > 1 ? ` [\xd7${Hz}]` : "";
        let pz = `${function(zz){return new Array(zz).fill(0).map(((uz,bz)=>bz===zz-1?"\u2514\u2500 ":"   ")).join("")}(bz)}${nz}${zz.constructor.name} (refId: ${tz})${Oz}${iz}\n`;
        return lz.forEachChild(((nz, iz) => {
          let lz = iz;
          "number" === typeof iz && zz.$indexes && (lz = zz.$indexes.get(iz) ?? iz);
          const Mz = void 0 !== zz.forEach && void 0 !== lz ? `["${lz}"]: ` : "";
          pz += this.debugRefIds(nz.ref, uz, bz + 1, Ez, Mz)
        })), pz
      }
      static debugRefIdEncodingOrder(zz) {
        let uz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "allChanges";
        const bz = [],
          Ez = zz[Rz];
        if ("changes" === uz) {
          let zz = Ez.root.changes?.next;
          for (; zz;) zz.changeTree && bz.push(zz.changeTree.ref[Mz]), zz = zz.next;
          return bz
        }
        const nz = "allFilteredChanges" === uz,
          iz = new Set,
          lz = zz => {
            iz.has(zz) || (iz.add(zz), zz.isFiltered === nz && bz.push(zz.ref[Mz]), zz.forEachChild(((zz, uz) => lz(zz))))
          };
        return lz(Ez), bz
      }
      static debugRefIdsFromDecoder(zz) {
        return this.debugRefIds(zz.state, !1, 0, zz)
      }
      static debugChanges(zz) {
        let uz = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        const bz = zz[Rz],
          Ez = uz ? "allChanges" : "changes";
        let iz = `${zz.constructor.name} (${zz[Mz]}) -> .${Ez}:\n`;
        return uz ? bz.forEachLive((zz => {
          iz += `- [${zz}]: ADD (${JSON.stringify(bz.getValue(Number(zz),!0))})\n`
        })) : bz.forEach(((zz, uz) => {
          zz < 0 || !uz || (iz += `- [${zz}]: ${nz[uz]} (${JSON.stringify(bz.getValue(Number(zz),!1))})\n`)
        })), iz
      }
    }
    iz(TE);
    const LE = {
      value: 0,
      enumerable: !1,
      writable: !0
    };
    class PE {
      types;
      nextUniqueId = 0;
      changeTrees = {};
      get refCount() {
        const zz = {};
        for (const uz in this.changeTrees) zz[uz] = this.changeTrees[uz].refCount;
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
        this.types.hasFilters && (zz.flags & Ab || (zz.flags |= Ab, this.pendingFilterRefresh.push(zz)))
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
        const uz = zz.id;
        for (const bz of this.streamTrees) bz._dropView(uz)
      }
      forEachActiveView(zz) {
        for (const [uz, bz] of this.activeViews) {
          const Ez = bz.deref();
          if (void 0 !== Ez) zz(Ez);
          else {
            this.activeViews.delete(uz);
            for (const zz of this.streamTrees) zz._dropView(uz)
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
        let uz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        this.types = zz, this.nextUniqueId = uz
      }
      add(zz) {
        const uz = zz.ref;
        void 0 === uz[Mz] && (LE.value = this.nextUniqueId++, Object.defineProperty(uz, Mz, LE));
        const bz = uz[Mz],
          Ez = void 0 === this.changeTrees[bz];
        Ez && (this.changeTrees[bz] = zz), zz.needsRestage && (zz.needsRestage = !1, zz.forEachLiveWithCtx(zz, bb));
        const nz = Ez ? 0 : zz.refCount;
        return zz.refCount = nz + 1, nz > 0 && this.enqueueFilterRefresh(zz), Ez
      }
      remove(zz) {
        const uz = zz.refCount - 1;
        if (uz <= 0) {
          if (zz.root = void 0, delete this.changeTrees[zz.ref[Mz]], zz.isStreamCollection) {
            const uz = zz.ref;
            uz._unregister?.(), this.unregisterStream(uz)
          }
          this.removeFromQueue(zz), this.removeFromUnreliableQueue(zz), zz.refCount = 0, zz.needsRestage = !0, zz.forEachChild(((uz, bz) => {
            uz.removeParent(zz.ref) && (void 0 === uz.parentRef || uz.refCount > 0 ? this.remove(uz) : this.moveNextToParent(uz))
          }))
        } else zz.refCount = uz, this.enqueueFilterRefresh(zz), this.recursivelyMoveNextToParent(zz);
        return uz
      }
      recursivelyMoveNextToParent(zz) {
        this.moveNextToParent(zz), zz.forEachChild(((zz, uz) => this.recursivelyMoveNextToParent(zz)))
      }
      moveNextToParent(zz) {
        zz.changesNode && this._moveNextToParentInList(this.changes, zz, zz.changesNode, "changesNode"), zz.unreliableChangesNode && this._moveNextToParentInList(this.unreliableChanges, zz, zz.unreliableChangesNode, "unreliableChangesNode")
      }
      _moveNextToParentInList(zz, uz, bz, Ez) {
        const nz = uz.parent;
        if (!nz || !nz[Rz]) return;
        const iz = nz[Rz][Ez];
        iz && iz !== bz && (bz.position > iz.position || (bz.prev ? bz.prev.next = bz.next : zz.next = bz.next, bz.next ? bz.next.prev = bz.prev : zz.tail = bz.prev, bz.prev = zz.tail, bz.next = void 0, zz.tail.next = bz, zz.tail = bz, bz.position = zz.nextPosition++))
      }
      enqueueChangeTree(zz) {
        (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : zz.changesNode) || (zz.changesNode = this._appendToList(this.changes, zz))
      }
      enqueueUnreliable(zz) {
        (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : zz.unreliableChangesNode) || (zz.unreliableChangesNode = this._appendToList(this.unreliableChanges, zz))
      }
      _appendToList(zz, uz) {
        const bz = this._nodePool;
        let Ez;
        return bz.length > 0 ? (Ez = bz.pop(), Ez.changeTree = uz, Ez.next = void 0, Ez.prev = void 0) : Ez = {
          changeTree: uz,
          next: void 0,
          prev: void 0,
          position: 0
        }, zz.next ? (Ez.prev = zz.tail, zz.tail.next = Ez, zz.tail = Ez) : (zz.nextPosition = 0, zz.next = Ez, zz.tail = Ez), Ez.position = zz.nextPosition++, Ez
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
      _removeNode(zz, uz, bz, Ez) {
        return !(!bz || bz.changeTree !== uz) && (bz.prev ? bz.prev.next = bz.next : zz.next = bz.next, bz.next ? bz.next.prev = bz.prev : zz.tail = bz.prev, uz[Ez] = void 0, this.releaseNode(bz), !0)
      }
    }

    function GE(zz, uz) {
      if (-1 === uz || uz >= zz.length) return !1;
      const bz = zz.length - 1;
      for (let Ez = uz; Ez < bz; Ez++) zz[Ez] = zz[Ez + 1];
      return zz.length = bz, !0
    }

    function aE(zz, uz, bz) {
      const Ez = ~bz,
        nz = zz.changeTrees;
      for (const iz in nz) {
        const zz = nz[iz],
          bz = zz.visibleViews;
        void 0 !== bz && uz < bz.length && (bz[uz] &= Ez);
        const lz = zz.subscribedViews;
        void 0 !== lz && uz < lz.length && (lz[uz] &= Ez);
        const Mz = zz.tagViews;
        void 0 !== Mz && Mz.forEach((zz => {
          uz < zz.length && (zz[uz] &= Ez)
        }))
      }
    }
    const VE = new FinalizationRegistry((zz => {
      let {
        root: uz,
        id: bz,
        slot: Ez,
        bit: nz
      } = zz;
      aE(uz, Ez, nz), uz.activeViews.delete(bz);
      for (const iz of uz.streamTrees) iz._dropView(bz);
      uz.releaseViewId(bz)
    }));

    function mE(zz) {
      if (void 0 === zz) return "undefined";
      if (null === zz) return "null";
      const uz = typeof zz;
      return "string" === uz ? JSON.stringify(zz.length > 30 ? `${zz.slice(0,30)}\u2026` : zz) : "object" !== uz && "function" !== uz ? `${uz} ${String(zz)}` : Array.isArray(zz) ? `Array(${zz.length})` : zz.constructor?.name ?? "Object"
    }
    class qE {
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
        void 0 === this._root && (this._root = zz, this.id = zz.acquireViewId(), this._slot = this.id >> 5, this._bit = 1 << (31 & this.id), zz.registerView(this), VE.register(this, {
          root: zz,
          id: this.id,
          slot: this._slot,
          bit: this._bit
        }, this))
      }
      dispose() {
        void 0 !== this._root && (this._root.unregisterView(this), aE(this._root, this._slot, this._bit), this._root.releaseViewId(this.id), VE.unregister(this), this._root = void 0, this.id = -1)
      }
      isVisible(zz) {
        const uz = zz.visibleViews,
          bz = this._slot;
        return void 0 !== uz && bz < uz.length && 0 !== (uz[bz] & this._bit)
      }
      markVisible(zz) {
        const uz = this._slot;
        let bz = zz.visibleViews;
        for (void 0 === bz && (bz = zz.visibleViews = []); bz.length <= uz;) bz.push(0);
        bz[uz] |= this._bit
      }
      unmarkVisible(zz) {
        const uz = zz.visibleViews;
        if (void 0 === uz) return;
        const bz = this._slot;
        bz < uz.length && (uz[bz] &= ~this._bit)
      }
      isSubscribed(zz) {
        const uz = zz.subscribedViews,
          bz = this._slot;
        return void 0 !== uz && bz < uz.length && 0 !== (uz[bz] & this._bit)
      }
      _setSubscribed(zz) {
        const uz = this._slot;
        let bz = zz.subscribedViews;
        for (void 0 === bz && (bz = zz.subscribedViews = []); bz.length <= uz;) bz.push(0);
        bz[uz] |= this._bit
      }
      _clearSubscribed(zz) {
        const uz = zz.subscribedViews;
        if (void 0 === uz) return;
        const bz = this._slot;
        bz < uz.length && (uz[bz] &= ~this._bit)
      }
      hasTagOnTree(zz, uz) {
        const bz = zz.tagViews;
        if (void 0 === bz) return !1;
        const Ez = this._slot,
          nz = this._bit;
        for (let iz = uz; 0 !== iz; iz &= iz - 1) {
          const zz = bz.get(iz & -iz);
          if (void 0 !== zz && Ez < zz.length && 0 !== (zz[Ez] & nz)) return !0
        }
        return !1
      }
      addTag(zz, uz) {
        if (uz === ZE) return;
        let bz = zz.tagViews;
        void 0 === bz && (bz = zz.tagViews = new Map);
        const Ez = this._slot,
          nz = this._bit;
        for (let iz = uz; iz > 0; iz &= iz - 1) {
          const zz = iz & -iz;
          let uz = bz.get(zz);
          for (void 0 === uz && (uz = [], bz.set(zz, uz)); uz.length <= Ez;) uz.push(0);
          uz[Ez] |= nz
        }
      }
      removeTag(zz, uz) {
        if (uz === ZE) return;
        const bz = zz.tagViews;
        if (void 0 === bz) return;
        const Ez = this._slot,
          nz = ~this._bit;
        for (let iz = uz; iz > 0; iz &= iz - 1) {
          const zz = bz.get(iz & -iz);
          void 0 !== zz && Ez < zz.length && (zz[Ez] &= nz)
        }
      }
      removeAllTagsOnTree(zz) {
        const uz = zz.tagViews;
        if (void 0 === uz) return;
        const bz = this._slot,
          Ez = ~this._bit;
        uz.forEach((zz => {
          bz < zz.length && (zz[bz] &= Ez)
        }))
      }
      add(zz) {
        let uz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ZE,
          bz = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        return this._add(zz, uz, bz, !1)
      }
      _addImmediate(zz) {
        let uz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ZE;
        this._add(zz, uz, !0, !0)
      }
      _add(zz, uz, bz, Ez) {
        const iz = zz?.[Rz];
        if (!iz) return console.warn(`StateView#add(): expected a Schema instance or collection, received ${mE(zz)}`), !1;
        const lz = iz.parent;
        if (!lz && 0 !== zz[Mz]) throw new Error(`Cannot add a detached instance to the StateView. Make sure to assign the "${iz.ref.constructor.name}" instance to the state before calling view.add()`);
        void 0 === this._root && void 0 !== iz.root && this._bindRoot(iz.root);
        const tz = lz?.[Rz];
        if (!Ez && tz?.isStreamCollection) return Gu(lz, this.id, iz.parentIndex), !0;
        const Hz = zz.constructor[Symbol.metadata],
          Oz = this.isVisible(iz);
        if (!this.iterable || !bz || Oz && -1 !== this.items.indexOf(zz) || this.items.push(zz), this.markVisible(iz), bz && lz && this.addParentOf(iz, uz), !Ez && iz.isStreamCollection) return !0;
        if (uz === ZE && iz.isNew) return this._markSubtreeVisible(iz, uz), !1;
        let pz = this.changes.get(zz[Mz]);
        void 0 === pz && (pz = new Map, this.changes.set(zz[Mz], pz));
        let dz = !1;
        const Fz = iz.encDescriptor.tags;
        if (iz.forEachChild(((zz, bz) => {
            const Ez = Fz[bz];
            if (void 0 !== Ez) {
              if (!(Ez === ZE || uz !== ZE && 0 !== (Ez & uz))) return
            }
            this.add(zz.ref, uz, !1) && (dz = !0)
          })), uz !== ZE) {
          this.addTag(iz, uz);
          const zz = Hz?.[Lz];
          if (void 0 !== zz)
            for (let bz = uz; bz > 0; bz &= bz - 1) zz[bz & -bz]?.forEach((zz => {
              iz.getChange(zz) !== nz.DELETE && pz.set(zz, nz.ADD)
            }))
        }
        if ((uz === ZE || !Oz) && (!iz.isNew || dz))
          if (iz.isArray && "string" !== typeof iz.refTarget[Kz]) iz.refTarget.items.length > 0 && (pz.set(-1, nz.ADD), dz = !0);
          else {
            const zz = iz.encDescriptor.tags;
            iz.forEachLive((bz => {
              const Ez = zz[bz];
              (void 0 === Ez || Ez === ZE || uz !== ZE && 0 !== (Ez & uz)) && (pz.set(bz, nz.ADD), dz = !0)
            }))
          } return dz
      }
      _markSubtreeVisible(zz, uz) {
        const bz = zz.encDescriptor.tags;
        zz.forEachChild(((zz, Ez) => {
          const nz = bz[Ez];
          if (void 0 !== nz) {
            if (!(nz === ZE || uz !== ZE && 0 !== (nz & uz))) return
          }
          zz.isNew ? (this.markVisible(zz), this._markSubtreeVisible(zz, uz)) : this._add(zz.ref, uz, !1, !1)
        }))
      }
      addParentOf(zz, uz) {
        const bz = zz.parent[Rz],
          Ez = zz.parentIndex;
        this.isVisible(bz) || this.markVisible(bz);
        const iz = bz.parent?.[Rz];
        if (iz && this.addParentOf(bz, uz), bz.hasFilteredFields && bz.getChange(Ez) !== nz.DELETE) {
          let iz = this.changes.get(bz.ref[Mz]);
          void 0 === iz && (iz = new Map, this.changes.set(bz.ref[Mz], iz));
          const lz = bz.encDescriptor.tags[Ez];
          void 0 !== lz && lz !== ZE && 0 !== (lz & uz) && this.addTag(bz, uz), iz.set(bz.isArray ? zz : Ez, nz.ADD)
        }
      }
      _touchAncestorsOf(zz) {
        let uz = zz.parent?.[Rz];
        if (void 0 === uz) return;
        const bz = [];
        for (; void 0 !== uz;) {
          if (uz.hasFilteredFields) {
            const zz = uz.ref[Mz];
            if (this.changes.has(zz)) break;
            bz.push(uz)
          }
          uz = uz.parent?.[Rz]
        }
        for (let Ez = bz.length - 1; Ez >= 0; Ez--) this.changes.set(bz[Ez].ref[Mz], new Map)
      }
      remove(zz) {
        let uz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ZE,
          bz = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        const Ez = zz?.[Rz];
        if (!Ez) return console.warn(`StateView#remove(): expected a Schema instance or collection, received ${mE(zz)}`), this;
        const iz = Ez.parent?.[Rz];
        if (iz?.isStreamCollection) return this.unmarkVisible(Ez), this.iterable && !bz && GE(this.items, this.items.indexOf(zz)),
          function(zz, uz, bz, Ez, iz) {
            const lz = zz._stream;
            if (void 0 === lz) return !1;
            const Mz = lz.pendingByView.get(uz);
            if (Mz?.has(Ez)) return Mz.delete(Ez), !1;
            const tz = lz.sentByView.get(uz);
            if (tz?.has(Ez)) {
              tz.delete(Ez);
              let zz = iz.get(bz);
              return void 0 === zz && (zz = new Map, iz.set(bz, zz)), zz.set(Ez, nz.DELETE), !0
            }
          }(Ez.parent, this.id, Ez.parent[Mz], Ez.parentIndex, this.changes), this._recursiveDeleteVisibleChangeTree(Ez), this;
        if (Ez.isStreamCollection) {
          this.unmarkVisible(Ez), this.iterable && !bz && GE(this.items, this.items.indexOf(zz));
          const uz = Ez.ref,
            iz = uz._stream;
          if (void 0 !== iz) {
            iz.pendingByView.get(this.id)?.clear();
            const zz = iz.sentByView.get(this.id);
            if (void 0 !== zz && zz.size > 0) {
              const bz = uz[Mz];
              let Ez = this.changes.get(bz);
              void 0 === Ez && (Ez = new Map, this.changes.set(bz, Ez));
              for (const uz of zz) Ez.set(uz, nz.DELETE);
              zz.clear()
            }
          }
          return this
        }
        this.unmarkVisible(Ez), this.iterable && !bz && GE(this.items, this.items.indexOf(zz));
        const lz = Ez.ref,
          tz = lz.constructor[Symbol.metadata],
          Hz = lz[Mz];
        this._touchAncestorsOf(Ez);
        let Oz = this.changes.get(Hz);
        if (void 0 === Oz && (Oz = new Map, this.changes.set(Hz, Oz)), uz === ZE) {
          const zz = Ez.parent;
          if (zz && !ju.isValidInstance(zz) && Ez.isFiltered) {
            const uz = iz.isArray ? Ez : Ez.parentIndex,
              bz = zz[Mz];
            let lz = this.changes.get(bz);
            void 0 === lz ? (lz = new Map, this.changes.set(bz, lz)) : lz.get(uz) === nz.ADD && this._dropPendingEntries(Ez), lz.set(uz, nz.DELETE), this._recursiveDeleteVisibleChangeTree(Ez)
          } else tz?.[Tz]?.forEach((zz => this._removeViewField(Ez, Oz, zz)))
        } else {
          const zz = tz?.[Lz];
          if (void 0 !== zz)
            for (let bz = uz; bz > 0; bz &= bz - 1) zz[bz & -bz]?.forEach((zz => this._removeViewField(Ez, Oz, zz)))
        }
        return void 0 === uz ? this.removeAllTagsOnTree(Ez) : this.removeTag(Ez, uz), this
      }
      has(zz) {
        return this.isVisible(zz[Rz])
      }
      hasTag(zz) {
        let uz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ZE;
        return this.hasTagOnTree(zz[Rz], uz)
      }
      subscribe(zz, uz) {
        const bz = zz?.[Rz];
        if (!bz) return console.warn(`StateView#subscribe(): expected a Schema collection, received ${mE(zz)}`), this;
        if (void 0 === this._root && void 0 !== bz.root && this._bindRoot(bz.root), void 0 !== uz)
          if (bz.isStreamCollection) {
            const bz = Ju(zz);
            null === uz ? bz.priorityByView?.delete(this.id) : (bz.priorityByView ??= new Map).set(this.id, uz)
          } else {
            const uz = zz?.constructor?.name ?? "collection",
              Ez = bz.parent;
            if (void 0 === Ez) console.warn(`StateView#subscribe(): \`priority\` ignored \u2014 this ${uz} is not attached to a state yet, so it cannot be identified as a stream. Subscribe after assigning it to the state.`);
            else {
              const zz = Ez?.constructor?.[Symbol.metadata]?.[bz.parentIndex]?.name,
                nz = zz ? `${Ez.constructor.name}#${zz}` : uz;
              console.warn(`StateView#subscribe(): \`priority\` ignored \u2014 ${nz} is a ${uz}, not a streaming collection. Declare the field with .stream() (e.g. t.map(X).stream()) or use t.stream(X) to enable priority batching.`)
            }
          } if (this.isSubscribed(bz)) return this;
        const Ez = void 0 !== bz.parent && !this.isVisible(bz);
        if (Ez ? (this.addParentOf(bz, ZE), this._add(zz, ZE, !1, !1)) : this.markVisible(bz), this._setSubscribed(bz), bz.isStreamCollection) {
          const uz = zz;
          bz.forEachChild(((zz, bz) => {
            Gu(uz, this.id, bz)
          }))
        } else Ez || bz.forEachChild((zz => {
          this.markVisible(zz)
        }));
        return this
      }
      unsubscribe(zz) {
        const uz = zz?.[Rz];
        if (!uz) return console.warn(`StateView#unsubscribe(): expected a Schema collection, received ${mE(zz)}`), this;
        if (!this.isSubscribed(uz)) return this;
        this._clearSubscribed(uz);
        const bz = uz.ref[Mz];
        if (uz.isStreamCollection) {
          const uz = zz._stream;
          if (void 0 !== uz) {
            uz.pendingByView.get(this.id)?.clear();
            const zz = uz.sentByView.get(this.id);
            if (void 0 !== zz && zz.size > 0) {
              let uz = this.changes.get(bz);
              void 0 === uz && (uz = new Map, this.changes.set(bz, uz));
              for (const bz of zz) uz.set(bz, nz.DELETE);
              zz.clear()
            }
          }
        } else {
          const zz = uz.isArray;
          let Ez = this.changes.get(bz);
          uz.forEachChild(((uz, iz) => {
            void 0 === Ez && (Ez = new Map, this.changes.set(bz, Ez)), Ez.set(zz ? uz : iz, nz.DELETE), this.unmarkVisible(uz)
          }))
        }
        return this.unmarkVisible(uz), this
      }
      clear() {
        if (!this.iterable) throw new Error("StateView#clear() is only available for iterable StateView's. Use StateView(iterable: true) constructor.");
        for (let zz = 0, uz = this.items.length; zz < uz; zz++) this.remove(this.items[zz], ZE, !0);
        this.items.length = 0
      }
      isChangeTreeVisible(zz) {
        let uz = this.isVisible(zz);
        if (!uz && zz.isVisibilitySharedWithParent)
          if (this.isVisible(zz.parent[Rz])) this.markVisible(zz), uz = !0;
          else
            for (let bz = zz.extraParents; void 0 !== bz; bz = bz.next) {
              const Ez = bz.ref[Rz];
              if (Ez.isFiltered && this.isVisible(Ez)) {
                this.markVisible(zz), uz = !0;
                break
              }
            }
        return uz
      }
      _recursiveDeleteVisibleChangeTree(zz) {
        zz.forEachChild((zz => {
          this.unmarkVisible(zz), this._recursiveDeleteVisibleChangeTree(zz)
        }))
      }
      _dropPendingEntries(zz) {
        this.changes.delete(zz.ref[Mz]), zz.forEachChild((zz => this._dropPendingEntries(zz)))
      }
      _removeViewField(zz, uz, bz) {
        const Ez = uz.get(bz) === nz.ADD;
        uz.set(bz, nz.DELETE);
        const iz = zz.ref[zz.encDescriptor.names[bz]],
          lz = iz?.[Rz];
        lz && (this.unmarkVisible(lz), this._recursiveDeleteVisibleChangeTree(lz), Ez && this._dropPendingEntries(lz))
      }
    }

    function hE(zz) {
      zz.structSwitchEmitted || (zz.shouldEmitSwitch && (zz.buffer[zz.it.offset++] = 255, uu.number(zz.buffer, zz.ref[Mz], zz.it)), zz.structSwitchEmitted = !0)
    }

    function UE(zz, uz) {
      SE(zz, uz, nz.ADD)
    }

    function cE(zz, uz) {
      if (uz._fullSyncGen === zz.gen) return;
      uz._fullSyncGen = zz.gen;
      if (!zz.hasView || zz.view.isChangeTreeVisible(uz)) {
        const bz = uz.encDescriptor;
        zz.changeTree = uz, zz.ref = uz.ref, zz.encoder = bz.encoder, zz.filter = bz.filter, zz.metadata = bz.metadata, zz.treeIsFiltered = uz.isFiltered, zz.isSchema = bz.isSchema, zz.filterBitmask = bz.filterBitmask, zz.tags = bz.tags, zz.structSwitchEmitted = !1, zz.shouldEmitSwitch = zz.hasView || zz.it.offset > zz.initialOffset || uz !== zz.rootChangeTree, uz.isArray && uz.collDirty.size > 0 && (uz.flags |= 512), nb(uz, zz, UE)
      }
      wb(uz, zz, gE)
    }

    function gE(zz, uz, bz) {
      cE(zz, uz)
    }

    function SE(zz, uz, bz) {
      if (uz < 0) {
        if (zz.treeIsFiltered !== zz.emitFiltered) return;
        return hE(zz), void(zz.buffer[zz.it.offset++] = 255 & Math.abs(uz))
      }
      if ((zz.isSchema ? zz.treeIsFiltered || (uz < 32 ? 0 !== (zz.filterBitmask & 1 << uz) : void 0 !== zz.tags[uz]) : zz.treeIsFiltered) !== zz.emitFiltered) return;
      const Ez = zz.isEncodeAll ? nz.ADD : bz;
      void 0 !== Ez && (void 0 === zz.filter || zz.filter(zz.ref, uz, zz.view)) && (hE(zz), zz.encoder(zz.self, zz.buffer, zz.changeTree, uz, Ez, zz.it, zz.isEncodeAll, zz.hasView, zz.metadata))
    }

    function yE(zz, uz) {
      const bz = new Uint8Array(zz.length + uz.length);
      return bz.set(zz, 0), bz.set(uz, zz.length), bz
    }
    class DE {
      static BUFFER_SIZE = 16384;
      sharedBuffer = new Uint8Array(DE.BUFFER_SIZE);
      context;
      state;
      root;
      constructor(zz, uz) {
        this.context = gu.cache(zz.constructor), this.root = uz ?? new PE(this.context), this.setState(zz)
      }
      setState(zz) {
        this.state = zz, this.state[Rz].setRoot(this.root)
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
          uz = arguments.length > 1 ? arguments[1] : void 0,
          bz = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : this.sharedBuffer,
          Ez = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : zz.offset;
        return this._encodeChannel(zz, uz, bz, Ez, !1)
      }
      encodeUnreliable() {
        let zz = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
            offset: 0
          },
          uz = arguments.length > 1 ? arguments[1] : void 0,
          bz = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : this.sharedBuffer,
          Ez = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : zz.offset;
        return this._encodeChannel(zz, uz, bz, Ez, !0)
      }
      _encodeChannel(zz, uz, bz, Ez, nz) {
        this.root.pendingFilterRefresh.length > 0 && lb(this.root);
        const iz = void 0 !== uz,
          lz = this.state[Rz],
          Mz = this._encodeCtx;
        Mz.self = this, Mz.buffer = bz, Mz.it = zz, Mz.view = uz, Mz.isEncodeAll = !1, Mz.hasView = iz, Mz.emitFiltered = iz;
        let tz = nz ? this.root.unreliableChanges : this.root.changes;
        for (; tz = tz.next;) {
          const bz = tz.changeTree;
          if (iz && !uz.isChangeTreeVisible(bz)) continue;
          const Hz = nz ? bz.unreliableRecorder : bz;
          if (!Hz || !Hz.has()) continue;
          const Oz = bz.encDescriptor;
          Mz.changeTree = bz, Mz.ref = bz.ref, Mz.encoder = Oz.encoder, Mz.filter = Oz.filter, Mz.metadata = Oz.metadata, Mz.treeIsFiltered = bz.isFiltered, Mz.isSchema = Oz.isSchema, Mz.filterBitmask = Oz.filterBitmask, Mz.tags = Oz.tags, Mz.structSwitchEmitted = !1, Mz.isRootTree = bz === lz, Mz.shouldEmitSwitch = iz || zz.offset > Ez || !Mz.isRootTree, Hz.forEachWithCtx(Mz, SE)
        }
        return nz || iz || !this._isStreamBroadcastMode || this._emitStreamBroadcast(bz, zz), zz.offset > bz.byteLength ? (bz = this._resizeBuffer(bz, zz.offset), zz.offset = Ez, this._encodeChannel(zz, uz, bz, Ez, nz)) : bz.subarray(0, zz.offset)
      }
      encodeFullSync(zz, uz, bz, Ez) {
        let nz = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : zz.offset;
        this.root.pendingFilterRefresh.length > 0 && lb(this.root);
        const iz = void 0 !== Ez,
          lz = this.state[Rz],
          Mz = this._encodeCtx;
        return Mz.self = this, Mz.buffer = uz, Mz.it = zz, Mz.view = Ez, Mz.isEncodeAll = !0, Mz.hasView = iz, Mz.emitFiltered = bz, Mz.gen = ++this._fullSyncGen, Mz.initialOffset = nz, Mz.rootChangeTree = lz, cE(Mz, lz), zz.offset > uz.byteLength ? (uz = this._resizeBuffer(uz, zz.offset), zz.offset = nz, this.encodeFullSync(zz, uz, bz, Ez, nz)) : uz.subarray(0, zz.offset)
      }
      _resizeBuffer(zz, uz) {
        const bz = Math.ceil(uz / DE.BUFFER_SIZE) * DE.BUFFER_SIZE,
          Ez = new Uint8Array(bz);
        return Ez.set(zz), zz === this.sharedBuffer && (this.sharedBuffer = Ez), Ez
      }
      encodeAll() {
        let zz = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
            offset: 0
          },
          uz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.sharedBuffer;
        return this.encodeFullSync(zz, uz, !1)
      }
      encodeAllView(zz, uz, bz) {
        let Ez = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : this.sharedBuffer;
        const nz = bz.offset;
        return Ez = this.encodeFullSync(bz, Ez, !0, zz, nz), yE(Ez.subarray(0, uz), Ez.subarray(nz, bz.offset))
      }
      ensureCapacity(zz, uz) {
        if (uz + DE.BUFFER_SIZE <= zz.byteLength) return zz;
        const bz = Math.ceil((uz + DE.BUFFER_SIZE) / DE.BUFFER_SIZE) * DE.BUFFER_SIZE,
          Ez = new Uint8Array(bz);
        return Ez.set(zz.subarray(0, uz)), zz === this.sharedBuffer && (this.sharedBuffer = Ez), Ez
      }
      encodeView(zz, uz, bz) {
        let Ez = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : this.sharedBuffer,
          iz = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4];
        const lz = bz.offset;
        this._emitStreamPriority(zz);
        for (const tz of zz.changes.keys()) {
          const uz = zz.changes.get(tz),
            iz = this.root.changeTrees[tz];
          if (void 0 === iz) {
            zz.changes.delete(tz);
            continue
          }
          if (0 === uz.size) continue;
          const lz = iz.encDescriptor,
            Hz = lz.encoder,
            Oz = lz.metadata,
            pz = iz.ref,
            Fz = iz.refTarget;
          Ez = this.ensureCapacity(Ez, bz.offset), Ez[bz.offset++] = 255, uu.number(Ez, pz[Mz], bz);
          for (const [tz, Zz] of uz) {
            let uz;
            if (-1 === tz) {
              const zz = Fz.tmpItems,
                uz = Fz.deletedIndexes;
              for (let lz = 0; lz < zz.length; lz++) void 0 !== zz[lz] && !0 !== uz[lz] && Hz(this, Ez, iz, lz, nz.ADD, bz, !1, !0, Oz);
              continue
            }
            if ("number" === typeof tz) uz = tz;
            else {
              const bz = tz.indexInParent(pz);
              if (void 0 === bz) continue;
              if (uz = bz, Zz === nz.ADD && iz.getChange(uz) === nz.DELETE) {
                zz.changes.delete(tz.ref[Mz]);
                continue
              }
            }
            Hz(this, Ez, iz, uz, void 0 !== Fz[dz](uz) && Zz || nz.DELETE, bz, !1, !0, Oz)
          }
        }
        return zz.changes.clear(), Ez = this.encode(bz, zz, Ez), iz ? yE(Ez.subarray(0, uz), Ez.subarray(lz, bz.offset)) : Ez.subarray(lz, bz.offset)
      }
      encodeUnreliableView(zz, uz, bz) {
        let Ez = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : this.sharedBuffer;
        const nz = bz.offset;
        return Ez = this.encodeUnreliable(bz, zz, Ez, nz), yE(Ez.subarray(0, uz), Ez.subarray(nz, bz.offset))
      }
      _emitStreamBroadcast(zz, uz) {
        const bz = this.root.streamTrees;
        for (const Ez of bz) {
          const bz = Ez,
            iz = bz[Rz],
            lz = bz[Mz];
          if (void 0 === lz) continue;
          const tz = bz._stream,
            Hz = tz.broadcastDeletes,
            Oz = tz.broadcastPending,
            pz = tz.sentBroadcast,
            Fz = Hz.size > 0,
            Zz = Oz.size > 0,
            Kz = iz.encDescriptor,
            wz = Kz.encoder,
            Xz = Kz.metadata;
          if (Fz || Zz) {
            if (zz[uz.offset++] = 255, uu.number(zz, lz, uz), Fz) {
              for (const bz of Hz) wz(this, zz, iz, bz, nz.DELETE, uz, !1, !1, Xz);
              Hz.clear()
            }
            const Ez = tz.maxPerTick,
              Zz = [];
            let Kz = 0;
            const fz = [];
            for (const lz of Oz) {
              if (Kz >= Ez) break;
              const Mz = bz[dz](lz);
              void 0 !== Mz ? (wz(this, zz, iz, lz, nz.ADD, uz, !1, !1, Xz), pz.add(lz), Zz.push(Mz), fz.push(lz), Kz++) : fz.push(lz)
            }
            for (const zz of fz) Oz.delete(zz);
            for (const bz of Zz) {
              const Ez = bz[Rz];
              if (void 0 === Ez) continue;
              const iz = bz[Mz];
              if (void 0 === iz) continue;
              zz[uz.offset++] = 255, uu.number(zz, iz, uz);
              const lz = Ez.encDescriptor,
                tz = lz.encoder,
                Hz = lz.metadata;
              Ez.forEachLive((bz => {
                ju.hasUnreliableAtIndex(Hz, bz) || tz(this, zz, Ez, bz, nz.ADD, uz, !1, !1, Hz)
              }))
            }
          }
          for (const Ez of pz) {
            const nz = bz[dz](Ez);
            if (void 0 === nz) continue;
            const iz = nz[Rz];
            if (void 0 === iz || !iz.has()) continue;
            const lz = nz[Mz];
            if (void 0 === lz) continue;
            zz[uz.offset++] = 255, uu.number(zz, lz, uz);
            const tz = iz.encDescriptor,
              Hz = tz.encoder,
              Oz = tz.metadata;
            iz.forEach(((bz, Ez) => {
              bz < 0 || ju.hasUnreliableAtIndex(Oz, bz) || Hz(this, zz, iz, bz, Ez, uz, !1, !1, Oz)
            }))
          }
        }
      }
      _emitStreamPriority(zz) {
        const uz = this.root.streamTrees;
        if (0 === uz.size) return;
        const bz = zz.id;
        for (const Ez of uz) {
          const uz = Ez,
            iz = uz._stream,
            lz = iz.pendingByView.get(bz);
          if (void 0 === lz || 0 === lz.size) continue;
          const tz = iz.priorityByView?.get(bz),
            Hz = void 0 !== tz,
            Oz = iz.priority,
            pz = iz.maxPerTick,
            Fz = [],
            Zz = [];
          if (Hz || void 0 !== Oz) {
            const bz = [],
              Ez = [];
            let nz = 0;
            for (const iz of lz) {
              const lz = uz[dz](iz);
              if (void 0 === lz) {
                Zz.push(iz);
                continue
              }
              const Mz = Hz ? tz(lz) : Oz(zz, lz);
              if (nz < pz) {
                let zz = nz++;
                for (; zz > 0 && Ez[zz - 1] < Mz;) Ez[zz] = Ez[zz - 1], bz[zz] = bz[zz - 1], zz--;
                Ez[zz] = Mz, bz[zz] = iz
              } else if (Mz > Ez[pz - 1]) {
                let zz = pz - 1;
                for (; zz > 0 && Ez[zz - 1] < Mz;) Ez[zz] = Ez[zz - 1], bz[zz] = bz[zz - 1], zz--;
                Ez[zz] = Mz, bz[zz] = iz
              }
            }
            for (let zz = 0; zz < nz; zz++) Fz.push(bz[zz])
          } else
            for (const zz of lz) {
              if (Fz.length >= pz) break;
              Fz.push(zz)
            }
          for (const zz of Zz) lz.delete(zz);
          const Kz = Fz.length;
          let wz = iz.sentByView.get(bz);
          void 0 === wz && (wz = new Set, iz.sentByView.set(bz, wz));
          for (let bz = 0; bz < Kz; bz++) {
            const Ez = Fz[bz],
              iz = uz[dz](Ez);
            if (void 0 === iz) {
              lz.delete(Ez);
              continue
            }
            zz._addImmediate(iz);
            const tz = iz[Rz];
            if (void 0 !== tz) {
              const uz = iz[Mz];
              let bz = zz.changes.get(uz);
              void 0 === bz && (bz = new Map, zz.changes.set(uz, bz));
              const Ez = tz.metadata;
              tz.forEachLive((zz => {
                ju.hasUnreliableAtIndex(Ez, zz) || bz.set(zz, nz.ADD)
              }))
            }
            lz.delete(Ez), wz.add(Ez)
          }
        }
      }
      discardChanges() {
        const zz = this.root.changes;
        let uz = zz.next;
        const bz = this.root;
        for (; uz;) {
          const zz = uz.next;
          uz.changeTree.endEncode(), bz.releaseNode(uz), uz = zz
        }
        zz.next = void 0, zz.tail = void 0
      }
      discardUnreliableChanges() {
        const zz = this.root.unreliableChanges;
        let uz = zz.next;
        const bz = this.root;
        for (; uz;) {
          const zz = uz.next;
          uz.changeTree.endEncodeUnreliable(), bz.releaseNode(uz), uz = zz
        }
        zz.next = void 0, zz.tail = void 0
      }
      tryEncodeTypeId(zz, uz, bz, Ez) {
        const nz = this.context.getTypeId(uz),
          iz = this.context.getTypeId(bz);
        void 0 !== iz ? nz !== iz && (zz[Ez.offset++] = 213, uu.number(zz, iz, Ez)) : console.warn(`@colyseus/schema WARNING: Class "${bz.name}" is not registered on TypeRegistry - Please either tag the class with @entity or define a @type() field.`)
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
        const uz = 0 === zz.activeViews.size;
        for (const bz of zz.streamTrees)
          if (uz ? Pu(bz) : Lu(bz, zz)) return !0;
        return !1
      }
      get hasUnreliableChanges() {
        return void 0 !== this.root.unreliableChanges.next
      }
    }
    class QE extends Error {
      constructor(zz) {
        super(zz), this.name = "DecodingWarning"
      }
    }
    const WE = {
      value: 0,
      enumerable: !1,
      writable: !0
    };
    class eE {
      refs = new Map;
      refCount = {};
      deletedRefs = new Set;
      callbacks = {};
      nextUniqueId = 0;
      getNextUniqueId() {
        return this.nextUniqueId++
      }
      addRef(zz, uz) {
        let bz = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        this.refs.set(zz, uz), void 0 === uz[Mz] ? (WE.value = zz, Object.defineProperty(uz, Mz, WE)) : uz[Mz] !== zz && (uz[Mz] = zz), bz && (this.refCount[zz] = (this.refCount[zz] || 0) + 1), this.deletedRefs.has(zz) && this.deletedRefs.delete(zz)
      }
      removeRef(zz) {
        const uz = this.refCount[zz];
        if (void 0 !== uz)
          if (0 !== uz)(this.refCount[zz] = uz - 1) <= 0 && this.deletedRefs.add(zz);
          else try {
            const uz = this.refs.get(zz);
            throw new QE(`trying to remove refId '${zz}' with 0 refCount (${uz.constructor.name}: ${JSON.stringify(uz)})`)
          } catch (Mn) {
            console.warn(Mn)
          } else try {
            throw new QE("trying to remove refId that doesn't exist: " + zz)
          } catch (Mn) {
            console.warn(Mn)
          }
      }
      clearRefs() {
        this.refs.clear(), this.deletedRefs.clear(), this.callbacks = {}, this.refCount = {}
      }
      garbageCollectDeletedRefs() {
        this.deletedRefs.forEach((zz => {
          if (this.refCount[zz] > 0) return;
          const uz = this.refs.get(zz),
            bz = uz.constructor[Symbol.metadata];
          if (null != bz)
            for (const Ez in bz) {
              const zz = uz[bz[Ez].name];
              if ("object" === typeof zz && zz) {
                const uz = zz[Mz];
                void 0 === uz || this.deletedRefs.has(uz) || this.removeRef(uz)
              }
            } else "function" === typeof uz[Kz] && Array.from(uz.values()).forEach((zz => {
              const uz = zz[Mz];
              void 0 === uz || this.deletedRefs.has(uz) || this.removeRef(uz)
            }));
          this.refs.delete(zz), delete this.refCount[zz], delete this.callbacks[zz]
        })), this.deletedRefs.clear()
      }
      addCallback(zz, uz, bz) {
        if (void 0 === zz) {
          const zz = "number" === typeof uz ? nz[uz] : uz;
          throw new Error(`Can't addCallback on '${zz}' (refId is undefined)`)
        }
        return this.callbacks[zz] || (this.callbacks[zz] = {}), this.callbacks[zz][uz] || (this.callbacks[zz][uz] = []), this.callbacks[zz][uz].push(bz), () => this.removeCallback(zz, uz, bz)
      }
      removeCallback(zz, uz, bz) {
        const Ez = this.callbacks?.[zz]?.[uz]?.indexOf(bz);
        void 0 !== Ez && -1 !== Ez && GE(this.callbacks[zz][uz], Ez)
      }
    }
    class jE {
      context;
      state;
      root;
      currentRefId = 0;
      rA;
      resyncVisited = null;
      resyncDamaged = !1;
      constructor(zz, uz) {
        this.setState(zz), this.context = uz || new gu(zz.constructor)
      }
      setState(zz) {
        this.state = zz, this.root = new eE, this.root.addRef(0, zz)
      }
      decode(zz) {
        let uz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
            offset: 0
          },
          bz = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : this.state;
        const nz = void 0 !== this.rA ? [] : null,
          iz = this.root,
          lz = zz.byteLength;
        let Mz = bz.constructor[Oz];
        for (this.currentRefId = 0; uz.offset < lz;) {
          if (zz[uz.offset] == Ez) {
            uz.offset++, bz[sz]?.();
            const Ez = fu.number(zz, uz),
              nz = iz.refs.get(Ez);
            nz ? (bz = nz, Mz = bz.constructor[Oz], this.currentRefId = Ez) : (console.error(`"refId" not found: ${Ez}`, {
              previousRef: bz,
              previousRefId: this.currentRefId
            }), console.warn("Please report this issue to the developers."), this.skipCurrentStructure(zz, uz, lz));
            continue
          } - 1 !== Mz(this, zz, uz, bz, nz) || (console.warn("@colyseus/schema: definition mismatch"), this.skipCurrentStructure(zz, uz, lz))
        }
        return bz[sz]?.(), null !== this.resyncVisited && function(zz, uz) {
          zz.resyncDamaged ? console.warn("@colyseus/schema: resync sweep skipped \u2014 parts of the payload could not be decoded. Stale entries may persist until the next resync.") : gb(zz, zz.state, new Set, uz)
        }(this, nz), null !== nz && this.rA?.(nz), iz.garbageCollectDeletedRefs(), nz
      }
      decodeResync(zz) {
        let uz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
          offset: 0
        };
        this.resyncVisited = new Map, this.resyncDamaged = !1;
        try {
          return this.decode(zz, uz)
        } finally {
          this.resyncVisited = null
        }
      }
      skipCurrentStructure(zz, uz, bz) {
        null !== this.resyncVisited && (this.resyncDamaged = !0);
        const nz = {
          offset: uz.offset
        };
        for (; uz.offset < bz && (zz[uz.offset] !== Ez || (nz.offset = uz.offset + 1, !this.root.refs.has(fu.number(zz, nz))));) uz.offset++
      }
      getInstanceType(zz, uz, bz) {
        let Ez;
        if (213 === zz[uz.offset]) {
          uz.offset++;
          const bz = fu.number(zz, uz);
          Ez = this.context.get(bz)
        }
        return Ez || bz
      }
      createInstanceOfType(zz) {
        return zz.initializeForDecoder()
      }
      removeChildRefs(zz, uz) {
        const bz = "string" !== typeof zz[Kz],
          Ez = zz[Mz];
        zz.forEach(((iz, lz) => {
          uz?.push({
            ref: zz,
            refId: Ez,
            op: nz.DELETE,
            field: lz,
            value: void 0,
            previousValue: iz
          }), bz && this.root.removeRef(iz[Mz])
        }))
      }
    }
    const IE = JE({
        min: FE.float64(),
        max: FE.float64(),
        bits: FE.uint8(),
        mode: FE.uint8()
      }, "QuantizedDescriptor"),
      BE = JE({
        name: FE.string(),
        type: FE.string(),
        referencedType: FE.number(),
        childPrimitive: FE.string(),
        quantized: FE.ref(IE).optional()
      }, "ReflectionField"),
      CE = JE({
        id: FE.number(),
        extendsId: FE.number(),
        fields: FE.array(BE)
      }, "ReflectionType"),
      YE = JE({
        types: FE.array(CE),
        rootType: FE.number()
      }, "Reflection");

    function kE(zz) {
      const uz = zz.root,
        bz = uz.callbacks,
        Ez = new WeakMap;
      let iz;

      function lz(zz, bz) {
        let Hz = bz.instance?.constructor[Symbol.metadata] || zz,
          Oz = bz.instance && "function" === typeof bz.instance.forEach || zz && !TE.is(zz);
        if (Hz && !Oz) {
          const zz = function(zz, nz, lz, tz) {
            return tz && void 0 !== bz.instance[nz] && !Ez.has(iz) && lz(bz.instance[nz], void 0), uz.addCallback(zz[Mz], nz, lz)
          };
          return new Proxy({
            listen: function(uz, nz) {
              let lz = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
              if (bz.instance) return zz(bz.instance, uz, nz, lz);
              {
                let Mz = () => {};
                return bz.onInstanceAvailable(((bz, tz) => {
                  Mz = zz(bz, uz, nz, lz && tz && !Ez.has(iz))
                })), () => Mz()
              }
            },
            onChange: function(zz) {
              return uz.addCallback(bz.instance[Mz], nz.REPLACE, zz)
            },
            bindTo: function(zz, Ez) {
              return Ez || (Ez = Object.keys(Hz).map((zz => Hz[zz].name))), uz.addCallback(bz.instance[Mz], nz.REPLACE, (() => {
                Ez.forEach((uz => zz[uz] = bz.instance[uz]))
              }))
            }
          }, {
            get(zz, uz) {
              const Ez = Hz[Hz[uz]];
              if (Ez) {
                const zz = bz.instance?.[uz],
                  nz = Ez => {
                    const nz = tz(bz.instance).listen(uz, ((zz, uz) => {
                      Ez(zz, !1), nz?.()
                    }), !1);
                    void 0 !== zz?.[Mz] && Ez(zz, !0)
                  };
                return lz(Ez.type, {
                  instance: void 0 !== zz?.[Mz] && zz,
                  parentInstance: bz.instance,
                  onInstanceAvailable: nz
                })
              }
              return zz[uz]
            },
            has: (zz, uz) => void 0 !== Hz[uz],
            set(zz, uz, bz) {
              throw new Error("not allowed")
            },
            deleteProperty(zz, uz) {
              throw new Error("not allowed")
            }
          })
        } {
          const zz = function(zz, bz, lz) {
              return lz && zz.forEach(((zz, uz) => bz(zz, uz))), uz.addCallback(zz[Mz], nz.ADD, ((zz, uz) => {
                Ez.set(bz, !0), iz = bz, bz(zz, uz), Ez.delete(bz), iz = void 0
              }))
            },
            lz = function(zz, bz) {
              return uz.addCallback(zz[Mz], nz.DELETE, bz)
            },
            tz = function(zz, bz) {
              return uz.addCallback(zz[Mz], nz.REPLACE, bz)
            };
          return new Proxy({
            Qr: function(uz) {
              let nz = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
              if (bz.instance) return zz(bz.instance, uz, nz && !Ez.has(iz));
              if (bz.onInstanceAvailable) {
                let lz = () => {};
                return bz.onInstanceAvailable(((bz, Mz) => {
                  lz = zz(bz, uz, nz && Mz && !Ez.has(iz))
                })), () => lz()
              }
            },
            aJ: function(zz) {
              if (bz.instance) return lz(bz.instance, zz);
              if (bz.onInstanceAvailable) {
                let uz = () => {};
                return bz.onInstanceAvailable((bz => {
                  uz = lz(bz, zz)
                })), () => uz()
              }
            },
            onChange: function(zz) {
              if (bz.instance) return tz(bz.instance, zz);
              if (bz.onInstanceAvailable) {
                let uz = () => {};
                return bz.onInstanceAvailable((bz => {
                  uz = tz(bz, zz)
                })), () => uz()
              }
            }
          }, {
            get(zz, uz) {
              if (!zz[uz]) throw new Error(`Can't access '${uz}' through callback proxy. access the instance directly.`);
              return zz[uz]
            },
            has: (zz, uz) => void 0 !== zz[uz],
            set(zz, uz, bz) {
              throw new Error("not allowed")
            },
            deleteProperty(zz, uz) {
              throw new Error("not allowed")
            }
          })
        }
      }

      function tz(zz) {
        return lz(void 0, {
          instance: zz
        })
      }
      return zz.rA = function(zz) {
        const uz = new Set;
        for (let Ez = 0, iz = zz.length; Ez < iz; Ez++) {
          const iz = zz[Ez],
            lz = iz.refId,
            tz = iz.ref,
            Hz = bz[lz];
          if (Hz) {
            if ((iz.op & nz.DELETE) === nz.DELETE && TE.isSchema(iz.previousValue)) {
              const zz = bz[iz.previousValue[Mz]]?.[nz.DELETE];
              for (let uz = zz?.length - 1; uz >= 0; uz--) zz[uz]()
            }
            if (TE.isSchema(tz)) {
              if (!uz.has(lz)) {
                const zz = Hz?.[nz.REPLACE];
                for (let uz = zz?.length - 1; uz >= 0; uz--) zz[uz]()
              }
              if (Hz.hasOwnProperty(iz.field)) {
                const zz = Hz[iz.field];
                for (let uz = zz?.length - 1; uz >= 0; uz--) zz[uz](iz.value, iz.previousValue)
              }
            } else {
              if ((iz.op & nz.DELETE) === nz.DELETE) {
                if (void 0 !== iz.previousValue) {
                  const zz = Hz[nz.DELETE];
                  for (let uz = zz?.length - 1; uz >= 0; uz--) zz[uz](iz.previousValue, iz.dynamicIndex ?? iz.field)
                }
                if ((iz.op & nz.ADD) === nz.ADD) {
                  const zz = Hz[nz.ADD];
                  for (let uz = zz?.length - 1; uz >= 0; uz--) zz[uz](iz.value, iz.dynamicIndex ?? iz.field)
                }
              } else if ((iz.op & nz.ADD) === nz.ADD && iz.previousValue !== iz.value) {
                const zz = Hz[nz.ADD];
                for (let uz = zz?.length - 1; uz >= 0; uz--) zz[uz](iz.value, iz.dynamicIndex ?? iz.field)
              }
              if (iz.value !== iz.previousValue && (void 0 !== iz.value || void 0 !== iz.previousValue)) {
                const zz = Hz[nz.REPLACE];
                for (let uz = zz?.length - 1; uz >= 0; uz--) zz[uz](iz.value, iz.dynamicIndex ?? iz.field)
              }
            }
            uz.add(lz)
          }
        }
      }, tz
    }

    function zn(zz, uz) {
      zz.rA = uz
    }
    YE.encode = function(zz) {
      let uz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
        offset: 0
      };
      const bz = zz.context,
        Ez = new YE,
        nz = new DE(Ez),
        iz = bz.schemas.get(zz.state.constructor);
      iz > 0 && (Ez.rootType = iz);
      const lz = new Set,
        Mz = {},
        tz = zz => {
          if (void 0 === zz.extendsId || lz.has(zz.extendsId)) {
            lz.add(zz.id), Ez.types.push(zz);
            const uz = Mz[zz.id];
            void 0 !== uz && (delete Mz[zz.id], uz.forEach((zz => tz(zz))))
          } else void 0 === Mz[zz.extendsId] && (Mz[zz.extendsId] = []), Mz[zz.extendsId].push(zz)
        };
      bz.schemas.forEach(((zz, uz) => {
        const Ez = new CE;
        Ez.id = Number(zz);
        const nz = Object.getPrototypeOf(uz);
        nz !== TE && (Ez.extendsId = bz.schemas.get(nz));
        const iz = uz[Symbol.metadata];
        if (iz !== nz[Symbol.metadata]) {
          const zz = iz[Jz] ?? -1;
          for (let uz = 0; uz <= zz; uz++) {
            const zz = iz[uz];
            if (void 0 === zz) continue;
            const nz = zz.name;
            if (!Object.prototype.hasOwnProperty.call(iz, nz)) continue;
            const lz = new BE;
            let Mz;
            if (lz.name = nz, "string" === typeof zz.type) Mz = zz.type;
            else if (qu(zz.type)) {
              const uz = zz.type.quantized;
              Mz = "quantized";
              const bz = new IE;
              bz.min = uz.min, bz.max = uz.max, bz.bits = uz.bits, bz.mode = uz.wrap ? 1 : 0, lz.quantized = bz
            } else {
              let uz;
              TE.is(zz.type) ? (Mz = "ref", uz = zz.type) : (Mz = Object.keys(zz.type)[0], "string" === typeof zz.type[Mz] ? lz.childPrimitive = zz.type[Mz] : uz = zz.type[Mz]), lz.referencedType = uz ? bz.getTypeId(uz) : -1
            }
            lz.type = Mz, Ez.fields.push(lz)
          }
        }
        tz(Ez)
      }));
      for (const Hz in Mz) Mz[Hz].forEach((zz => Ez.types.push(zz)));
      return nz.encodeAll(uz).slice(0, uz.offset)
    }, YE.decode = function(zz, uz) {
      const bz = new YE;
      new jE(bz).decode(zz, uz);
      const Ez = new gu;
      bz.types.forEach((zz => {
        const uz = Ez.get(zz.extendsId) ?? TE,
          bz = class extends uz {};
        gu.register(bz), Ez.add(bz, zz.id)
      }), {});
      bz.types.forEach((zz => {
        const uz = Ez.get(zz.id),
          nz = ju.initialize(uz),
          iz = [];
        let lz = zz;
        do {
          iz.push(lz), lz = bz.types.find((zz => zz.id === lz.extendsId))
        } while (lz);
        let Mz = 0;
        iz.reverse().forEach((zz => {
          ((zz, uz, bz) => {
            uz.fields.forEach(((uz, nz) => {
              const iz = bz + nz;
              if (void 0 !== uz.quantized) {
                const bz = uz.quantized;
                ju.addField(zz, iz, uz.name, {
                  quantized: mu({
                    min: bz.min,
                    max: bz.max,
                    bits: bz.bits,
                    mode: 1 === bz.mode ? "wrap" : "clamp"
                  })
                })
              } else if (void 0 !== uz.referencedType) {
                const bz = uz.type,
                  nz = Ez.get(uz.referencedType) ?? uz.childPrimitive;
                "ref" === bz ? ju.addField(zz, iz, uz.name, nz) : ju.addField(zz, iz, uz.name, {
                  [bz]: nz
                })
              } else ju.addField(zz, iz, uz.name, uz.type)
            }))
          })(nz, zz, Mz), Mz += zz.fields.length
        }))
      }));
      const nz = new(Ez.get(bz.rootType || 0));
      return new jE(nz, Ez)
    }, YE.makeEncodable = function(zz) {
      const uz = zz[Symbol.metadata];
      if (!uz) return zz;
      const bz = uz[Jz];
      if (void 0 === bz) return zz;
      for (let Ez = 0; Ez <= bz; Ez++) {
        const bz = uz[Ez];
        bz && ju.defineField(zz, uz, Ez, bz.name, bz.type)
      }
      return Object.prototype.hasOwnProperty.call(zz, vz) && delete zz[vz], zz
    };
    class un {
      LZ;
      uniqueRefIds = new Set;
      isTriggering = !1;
      constructor(zz) {
        this.LZ = zz, this.LZ.rA = this.rA.bind(this)
      }
      get callbacks() {
        return this.LZ.root.callbacks
      }
      get state() {
        return this.LZ.state
      }
      addCallback(zz, uz, bz) {
        return this.LZ.root.addCallback(zz, uz, bz)
      }
      addCallbackOrWaitCollectionAvailable(zz, uz, bz, Ez) {
        let iz = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4],
          lz = () => {};
        const tz = () => lz(),
          Hz = zz[uz];
        if (Hz && void 0 !== Hz[Mz]) return iz = iz && !1 === this.isTriggering, bz === nz.ADD && iz && Hz.forEach(((zz, uz) => {
          Ez(zz, uz)
        })), this.addCallback(Hz[Mz], bz, Ez);
        {
          let nz;
          return nz = this.addCallback(zz[Mz], uz, ((zz, uz) => {
            null !== zz && void 0 !== zz && (nz(), lz = this.addCallback(zz[Mz], bz, Ez))
          })), lz = nz, tz
        }
      }
      listen() {
        return "string" === typeof(arguments.length <= 0 ? void 0 : arguments[0]) ? this.listenInstance(this.state, arguments.length <= 0 ? void 0 : arguments[0], arguments.length <= 1 ? void 0 : arguments[1], arguments.length <= 2 ? void 0 : arguments[2]) : this.listenInstance(arguments.length <= 0 ? void 0 : arguments[0], arguments.length <= 1 ? void 0 : arguments[1], arguments.length <= 2 ? void 0 : arguments[2], arguments.length <= 3 ? void 0 : arguments[3])
      }
      listenInstance(zz, uz, bz) {
        let Ez = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
        Ez = Ez && !1 === this.isTriggering;
        const nz = zz[uz];
        return Ez && null !== nz && void 0 !== nz && bz(nz, void 0), this.addCallback(zz[Mz], uz, bz)
      }
      onChange() {
        if (2 === arguments.length && "string" !== typeof(arguments.length <= 0 ? void 0 : arguments[0])) {
          const zz = arguments.length <= 0 ? void 0 : arguments[0],
            uz = arguments.length <= 1 ? void 0 : arguments[1];
          return this.addCallback(zz[Mz], nz.REPLACE, uz)
        }
        return "string" === typeof(arguments.length <= 0 ? void 0 : arguments[0]) ? this.addCallbackOrWaitCollectionAvailable(this.state, arguments.length <= 0 ? void 0 : arguments[0], nz.REPLACE, arguments.length <= 1 ? void 0 : arguments[1]) : this.addCallbackOrWaitCollectionAvailable(arguments.length <= 0 ? void 0 : arguments[0], arguments.length <= 1 ? void 0 : arguments[1], nz.REPLACE, arguments.length <= 2 ? void 0 : arguments[2])
      }
      Qr() {
        return "string" === typeof(arguments.length <= 0 ? void 0 : arguments[0]) ? this.addCallbackOrWaitCollectionAvailable(this.state, arguments.length <= 0 ? void 0 : arguments[0], nz.ADD, arguments.length <= 1 ? void 0 : arguments[1], !1 !== (arguments.length <= 2 ? void 0 : arguments[2])) : this.addCallbackOrWaitCollectionAvailable(arguments.length <= 0 ? void 0 : arguments[0], arguments.length <= 1 ? void 0 : arguments[1], nz.ADD, arguments.length <= 2 ? void 0 : arguments[2], !1 !== (arguments.length <= 3 ? void 0 : arguments[3]))
      }
      aJ() {
        return "string" === typeof(arguments.length <= 0 ? void 0 : arguments[0]) ? this.addCallbackOrWaitCollectionAvailable(this.state, arguments.length <= 0 ? void 0 : arguments[0], nz.DELETE, arguments.length <= 1 ? void 0 : arguments[1]) : this.addCallbackOrWaitCollectionAvailable(arguments.length <= 0 ? void 0 : arguments[0], arguments.length <= 1 ? void 0 : arguments[1], nz.DELETE, arguments.length <= 2 ? void 0 : arguments[2])
      }
      bindTo(zz, uz, bz) {
        let Ez = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
        const iz = zz.constructor[Symbol.metadata];
        bz || (bz = Object.keys(iz).filter((zz => !isNaN(Number(zz)))).map((zz => iz[zz].name)));
        const lz = () => {
          for (const Ez of bz) {
            const bz = zz[Ez];
            void 0 !== bz && (uz[Ez] = bz)
          }
        };
        return Ez && lz(), this.addCallback(zz[Mz], nz.REPLACE, lz)
      }
      rA(zz) {
        this.uniqueRefIds.clear(), this.isTriggering = !0;
        for (let uz = 0, bz = zz.length; uz < bz; uz++) {
          const bz = zz[uz],
            Ez = bz.refId,
            iz = bz.ref,
            lz = this.callbacks[Ez];
          if (lz) {
            if ((bz.op & nz.DELETE) === nz.DELETE && TE.isSchema(bz.previousValue)) {
              const zz = bz.previousValue[Mz],
                uz = this.callbacks[zz]?.[nz.DELETE];
              if (uz)
                for (let bz = uz.length - 1; bz >= 0; bz--) try {
                  uz[bz]()
                } catch (Mn) {
                  console.error(Mn)
                }
            }
            if (TE.isSchema(iz)) {
              if (!this.uniqueRefIds.has(Ez)) {
                const zz = lz[nz.REPLACE];
                if (zz)
                  for (let uz = zz.length - 1; uz >= 0; uz--) try {
                    zz[uz]()
                  } catch (Mn) {
                    console.error(Mn)
                  }
              }
              const zz = lz[bz.field];
              if (zz)
                for (let uz = zz.length - 1; uz >= 0; uz--) try {
                  zz[uz](bz.value, bz.previousValue)
                } catch (Mn) {
                  console.error(Mn)
                }
            } else {
              const zz = bz.dynamicIndex ?? bz.field;
              if ((bz.op & nz.DELETE) === nz.DELETE) {
                if (void 0 !== bz.previousValue) {
                  const uz = lz[nz.DELETE];
                  if (uz)
                    for (let Ez = uz.length - 1; Ez >= 0; Ez--) try {
                      uz[Ez](bz.previousValue, zz)
                    } catch (Mn) {
                      console.error(Mn)
                    }
                }
                if ((bz.op & nz.ADD) === nz.ADD) {
                  const uz = lz[nz.ADD];
                  if (uz)
                    for (let Ez = uz.length - 1; Ez >= 0; Ez--) try {
                      uz[Ez](bz.value, zz)
                    } catch (Mn) {
                      console.error(Mn)
                    }
                }
              } else if ((bz.op & nz.ADD) === nz.ADD && bz.previousValue !== bz.value) {
                const uz = lz[nz.ADD];
                if (uz)
                  for (let Ez = uz.length - 1; Ez >= 0; Ez--) try {
                    uz[Ez](bz.value, zz)
                  } catch (Mn) {
                    console.error(Mn)
                  }
              }
              if (bz.value !== bz.previousValue) {
                const uz = lz[nz.REPLACE];
                if (uz)
                  for (let Ez = uz.length - 1; Ez >= 0; Ez--) try {
                    uz[Ez](zz, bz.value)
                  } catch (Mn) {
                    console.error(Mn)
                  }
              }
            }
            this.uniqueRefIds.add(Ez)
          }
        }
        this.isTriggering = !1
      }
    }
    const bn = {
      get(zz) {
        if (zz instanceof jE) return new un(zz);
        if ("LZ" in zz.Kw) return new un(zz.Kw.LZ);
        throw new Error("Invalid room or decoder")
      },
      getLegacy(zz) {
        if (zz instanceof jE) return kE(zz);
        if ("LZ" in zz.Kw) return kE(zz.Kw.LZ);
        throw new Error("Invalid room or decoder")
      },
      getRawChanges: (zz, uz) => zn(zz, uz)
    };
    class En {
      _free = [];
      _factory;
      _maxSize;
      constructor(zz) {
        let uz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        this._factory = zz, this._maxSize = uz.maxSize ?? 1 / 0;
        const bz = uz.preallocate ?? 0;
        for (let Ez = 0; Ez < bz; Ez++) this._free.push(zz())
      }
      acquire() {
        return this._free.length > 0 ? this._free.pop() : this._factory()
      }
      release(zz) {
        TE.reset(zz), this._free.length < this._maxSize && this._free.push(zz)
      }
      get size() {
        return this._free.length
      }
    }

    function nn(zz) {
      return new En((() => new zz), arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {})
    }
    ou("map", {
      constructor: nE
    }), ou("array", {
      constructor: bE
    }), ou("set", {
      constructor: lE
    }), ou("collection", {
      constructor: iE
    })
  },
  8747: (zz, uz, bz) => {
    bz.r(uz), bz.d(uz, {
      __addDisposableResource: () => qz,
      __assign: () => iz,
      __asyncDelegator: () => xz,
      __asyncGenerator: () => vz,
      __asyncValues: () => Jz,
      __await: () => Nz,
      __awaiter: () => Zz,
      __classPrivateFieldGet: () => az,
      __classPrivateFieldIn: () => mz,
      __classPrivateFieldSet: () => Vz,
      __createBinding: () => Kz,
      __decorate: () => Mz,
      __disposeResources: () => Uz,
      __esDecorate: () => Hz,
      __exportStar: () => wz,
      __extends: () => nz,
      __generator: () => Rz,
      __importDefault: () => Gz,
      __importStar: () => Pz,
      __makeTemplateObject: () => Az,
      __metadata: () => Fz,
      __param: () => tz,
      __propKey: () => pz,
      __read: () => fz,
      __rest: () => lz,
      __rewriteRelativeImportExtension: () => cz,
      __runInitializers: () => Oz,
      __setFunctionName: () => dz,
      __spread: () => sz,
      __spreadArray: () => oz,
      __spreadArrays: () => rz,
      __values: () => Xz,
      default: () => gz
    });
    var Ez = function(zz, uz) {
      return Ez = Object.setPrototypeOf || {
        __proto__: []
      }
      instanceof Array && function(zz, uz) {
        zz.__proto__ = uz
      } || function(zz, uz) {
        for (var bz in uz) Object.prototype.hasOwnProperty.call(uz, bz) && (zz[bz] = uz[bz])
      }, Ez(zz, uz)
    };

    function nz(zz, uz) {
      if ("function" !== typeof uz && null !== uz) throw new TypeError("Class extends value " + String(uz) + " is not a constructor or null");

      function bz() {
        this.constructor = zz
      }
      Ez(zz, uz), zz.prototype = null === uz ? Object.create(uz) : (bz.prototype = uz.prototype, new bz)
    }
    var iz = function() {
      return iz = Object.assign || function(zz) {
        for (var uz, bz = 1, Ez = arguments.length; bz < Ez; bz++)
          for (var nz in uz = arguments[bz]) Object.prototype.hasOwnProperty.call(uz, nz) && (zz[nz] = uz[nz]);
        return zz
      }, iz.apply(this, arguments)
    };

    function lz(zz, uz) {
      var bz = {};
      for (var Ez in zz) Object.prototype.hasOwnProperty.call(zz, Ez) && uz.indexOf(Ez) < 0 && (bz[Ez] = zz[Ez]);
      if (null != zz && "function" === typeof Object.getOwnPropertySymbols) {
        var nz = 0;
        for (Ez = Object.getOwnPropertySymbols(zz); nz < Ez.length; nz++) uz.indexOf(Ez[nz]) < 0 && Object.prototype.propertyIsEnumerable.call(zz, Ez[nz]) && (bz[Ez[nz]] = zz[Ez[nz]])
      }
      return bz
    }

    function Mz(zz, uz, bz, Ez) {
      var nz, iz = arguments.length,
        lz = iz < 3 ? uz : null === Ez ? Ez = Object.getOwnPropertyDescriptor(uz, bz) : Ez;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) lz = Reflect.decorate(zz, uz, bz, Ez);
      else
        for (var Mz = zz.length - 1; Mz >= 0; Mz--)(nz = zz[Mz]) && (lz = (iz < 3 ? nz(lz) : iz > 3 ? nz(uz, bz, lz) : nz(uz, bz)) || lz);
      return iz > 3 && lz && Object.defineProperty(uz, bz, lz), lz
    }

    function tz(zz, uz) {
      return function(bz, Ez) {
        uz(bz, Ez, zz)
      }
    }

    function Hz(zz, uz, bz, Ez, nz, iz) {
      function lz(zz) {
        if (void 0 !== zz && "function" !== typeof zz) throw new TypeError("Function expected");
        return zz
      }
      for (var Mz, tz = Ez.kind, Hz = "getter" === tz ? "get" : "setter" === tz ? "set" : "value", Oz = !uz && zz ? Ez.static ? zz : zz.prototype : null, pz = uz || (Oz ? Object.getOwnPropertyDescriptor(Oz, Ez.name) : {}), dz = !1, Fz = bz.length - 1; Fz >= 0; Fz--) {
        var Zz = {};
        for (var Rz in Ez) Zz[Rz] = "access" === Rz ? {} : Ez[Rz];
        for (var Rz in Ez.access) Zz.access[Rz] = Ez.access[Rz];
        Zz.addInitializer = function(zz) {
          if (dz) throw new TypeError("Cannot add initializers after decoration has completed");
          iz.push(lz(zz || null))
        };
        var Kz = (0, bz[Fz])("accessor" === tz ? {
          get: pz.get,
          set: pz.set
        } : pz[Hz], Zz);
        if ("accessor" === tz) {
          if (void 0 === Kz) continue;
          if (null === Kz || "object" !== typeof Kz) throw new TypeError("Object expected");
          (Mz = lz(Kz.get)) && (pz.get = Mz), (Mz = lz(Kz.set)) && (pz.set = Mz), (Mz = lz(Kz.init)) && nz.unshift(Mz)
        } else(Mz = lz(Kz)) && ("field" === tz ? nz.unshift(Mz) : pz[Hz] = Mz)
      }
      Oz && Object.defineProperty(Oz, Ez.name, pz), dz = !0
    }

    function Oz(zz, uz, bz) {
      for (var Ez = arguments.length > 2, nz = 0; nz < uz.length; nz++) bz = Ez ? uz[nz].call(zz, bz) : uz[nz].call(zz);
      return Ez ? bz : void 0
    }

    function pz(zz) {
      return "symbol" === typeof zz ? zz : "".concat(zz)
    }

    function dz(zz, uz, bz) {
      return "symbol" === typeof uz && (uz = uz.description ? "[".concat(uz.description, "]") : ""), Object.defineProperty(zz, "name", {
        configurable: !0,
        value: bz ? "".concat(bz, " ", uz) : uz
      })
    }

    function Fz(zz, uz) {
      if ("object" === typeof Reflect && "function" === typeof Reflect.metadata) return Reflect.metadata(zz, uz)
    }

    function Zz(zz, uz, bz, Ez) {
      return new(bz || (bz = Promise))((function(nz, iz) {
        function lz(zz) {
          try {
            tz(Ez.next(zz))
          } catch (uz) {
            iz(uz)
          }
        }

        function Mz(zz) {
          try {
            tz(Ez.throw(zz))
          } catch (uz) {
            iz(uz)
          }
        }

        function tz(zz) {
          var uz;
          zz.done ? nz(zz.value) : (uz = zz.value, uz instanceof bz ? uz : new bz((function(zz) {
            zz(uz)
          }))).then(lz, Mz)
        }
        tz((Ez = Ez.apply(zz, uz || [])).next())
      }))
    }

    function Rz(zz, uz) {
      var bz, Ez, nz, iz = {
          label: 0,
          sent: function() {
            if (1 & nz[0]) throw nz[1];
            return nz[1]
          },
          trys: [],
          ops: []
        },
        lz = Object.create(("function" === typeof Iterator ? Iterator : Object).prototype);
      return lz.next = Mz(0), lz.throw = Mz(1), lz.return = Mz(2), "function" === typeof Symbol && (lz[Symbol.iterator] = function() {
        return this
      }), lz;

      function Mz(Mz) {
        return function(tz) {
          return function(Mz) {
            if (bz) throw new TypeError("Generator is already executing.");
            for (; lz && (lz = 0, Mz[0] && (iz = 0)), iz;) try {
              if (bz = 1, Ez && (nz = 2 & Mz[0] ? Ez.return : Mz[0] ? Ez.throw || ((nz = Ez.return) && nz.call(Ez), 0) : Ez.next) && !(nz = nz.call(Ez, Mz[1])).done) return nz;
              switch (Ez = 0, nz && (Mz = [2 & Mz[0], nz.value]), Mz[0]) {
                case 0:
                case 1:
                  nz = Mz;
                  break;
                case 4:
                  return iz.label++, {
                    value: Mz[1],
                    done: !1
                  };
                case 5:
                  iz.label++, Ez = Mz[1], Mz = [0];
                  continue;
                case 7:
                  Mz = iz.ops.pop(), iz.trys.pop();
                  continue;
                default:
                  if (!(nz = (nz = iz.trys).length > 0 && nz[nz.length - 1]) && (6 === Mz[0] || 2 === Mz[0])) {
                    iz = 0;
                    continue
                  }
                  if (3 === Mz[0] && (!nz || Mz[1] > nz[0] && Mz[1] < nz[3])) {
                    iz.label = Mz[1];
                    break
                  }
                  if (6 === Mz[0] && iz.label < nz[1]) {
                    iz.label = nz[1], nz = Mz;
                    break
                  }
                  if (nz && iz.label < nz[2]) {
                    iz.label = nz[2], iz.ops.push(Mz);
                    break
                  }
                  nz[2] && iz.ops.pop(), iz.trys.pop();
                  continue
              }
              Mz = uz.call(zz, iz)
            } catch (tz) {
              Mz = [6, tz], Ez = 0
            } finally {
              bz = nz = 0
            }
            if (5 & Mz[0]) throw Mz[1];
            return {
              value: Mz[0] ? Mz[1] : void 0,
              done: !0
            }
          }([Mz, tz])
        }
      }
    }
    var Kz = Object.create ? function(zz, uz, bz, Ez) {
      void 0 === Ez && (Ez = bz);
      var nz = Object.getOwnPropertyDescriptor(uz, bz);
      nz && !("get" in nz ? !uz.__esModule : nz.writable || nz.configurable) || (nz = {
        enumerable: !0,
        get: function() {
          return uz[bz]
        }
      }), Object.defineProperty(zz, Ez, nz)
    } : function(zz, uz, bz, Ez) {
      void 0 === Ez && (Ez = bz), zz[Ez] = uz[bz]
    };

    function wz(zz, uz) {
      for (var bz in zz) "default" === bz || Object.prototype.hasOwnProperty.call(uz, bz) || Kz(uz, zz, bz)
    }

    function Xz(zz) {
      var uz = "function" === typeof Symbol && Symbol.iterator,
        bz = uz && zz[uz],
        Ez = 0;
      if (bz) return bz.call(zz);
      if (zz && "number" === typeof zz.length) return {
        next: function() {
          return zz && Ez >= zz.length && (zz = void 0), {
            value: zz && zz[Ez++],
            done: !zz
          }
        }
      };
      throw new TypeError(uz ? "Object is not iterable." : "Symbol.iterator is not defined.")
    }

    function fz(zz, uz) {
      var bz = "function" === typeof Symbol && zz[Symbol.iterator];
      if (!bz) return zz;
      var Ez, nz, iz = bz.call(zz),
        lz = [];
      try {
        for (;
          (void 0 === uz || uz-- > 0) && !(Ez = iz.next()).done;) lz.push(Ez.value)
      } catch (Mz) {
        nz = {
          error: Mz
        }
      } finally {
        try {
          Ez && !Ez.done && (bz = iz.return) && bz.call(iz)
        } finally {
          if (nz) throw nz.error
        }
      }
      return lz
    }

    function sz() {
      for (var zz = [], uz = 0; uz < arguments.length; uz++) zz = zz.concat(fz(arguments[uz]));
      return zz
    }

    function rz() {
      for (var zz = 0, uz = 0, bz = arguments.length; uz < bz; uz++) zz += arguments[uz].length;
      var Ez = Array(zz),
        nz = 0;
      for (uz = 0; uz < bz; uz++)
        for (var iz = arguments[uz], lz = 0, Mz = iz.length; lz < Mz; lz++, nz++) Ez[nz] = iz[lz];
      return Ez
    }

    function oz(zz, uz, bz) {
      if (bz || 2 === arguments.length)
        for (var Ez, nz = 0, iz = uz.length; nz < iz; nz++) !Ez && nz in uz || (Ez || (Ez = Array.prototype.slice.call(uz, 0, nz)), Ez[nz] = uz[nz]);
      return zz.concat(Ez || Array.prototype.slice.call(uz))
    }

    function Nz(zz) {
      return this instanceof Nz ? (this.v = zz, this) : new Nz(zz)
    }

    function vz(zz, uz, bz) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var Ez, nz = bz.apply(zz, uz || []),
        iz = [];
      return Ez = Object.create(("function" === typeof AsyncIterator ? AsyncIterator : Object).prototype), lz("next"), lz("throw"), lz("return", (function(zz) {
        return function(uz) {
          return Promise.resolve(uz).then(zz, Hz)
        }
      })), Ez[Symbol.asyncIterator] = function() {
        return this
      }, Ez;

      function lz(zz, uz) {
        nz[zz] && (Ez[zz] = function(uz) {
          return new Promise((function(bz, Ez) {
            iz.push([zz, uz, bz, Ez]) > 1 || Mz(zz, uz)
          }))
        }, uz && (Ez[zz] = uz(Ez[zz])))
      }

      function Mz(zz, uz) {
        try {
          (bz = nz[zz](uz)).value instanceof Nz ? Promise.resolve(bz.value.v).then(tz, Hz) : Oz(iz[0][2], bz)
        } catch (Ez) {
          Oz(iz[0][3], Ez)
        }
        var bz
      }

      function tz(zz) {
        Mz("next", zz)
      }

      function Hz(zz) {
        Mz("throw", zz)
      }

      function Oz(zz, uz) {
        zz(uz), iz.shift(), iz.length && Mz(iz[0][0], iz[0][1])
      }
    }

    function xz(zz) {
      var uz, bz;
      return uz = {}, Ez("next"), Ez("throw", (function(zz) {
        throw zz
      })), Ez("return"), uz[Symbol.iterator] = function() {
        return this
      }, uz;

      function Ez(Ez, nz) {
        uz[Ez] = zz[Ez] ? function(uz) {
          return (bz = !bz) ? {
            value: Nz(zz[Ez](uz)),
            done: !1
          } : nz ? nz(uz) : uz
        } : nz
      }
    }

    function Jz(zz) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var uz, bz = zz[Symbol.asyncIterator];
      return bz ? bz.call(zz) : (zz = Xz(zz), uz = {}, Ez("next"), Ez("throw"), Ez("return"), uz[Symbol.asyncIterator] = function() {
        return this
      }, uz);

      function Ez(bz) {
        uz[bz] = zz[bz] && function(uz) {
          return new Promise((function(Ez, nz) {
            (function(zz, uz, bz, Ez) {
              Promise.resolve(Ez).then((function(uz) {
                zz({
                  value: uz,
                  done: bz
                })
              }), uz)
            })(Ez, nz, (uz = zz[bz](uz)).done, uz.value)
          }))
        }
      }
    }

    function Az(zz, uz) {
      return Object.defineProperty ? Object.defineProperty(zz, "raw", {
        value: uz
      }) : zz.raw = uz, zz
    }
    var Tz = Object.create ? function(zz, uz) {
        Object.defineProperty(zz, "default", {
          enumerable: !0,
          value: uz
        })
      } : function(zz, uz) {
        zz.default = uz
      },
      Lz = function(zz) {
        return Lz = Object.getOwnPropertyNames || function(zz) {
          var uz = [];
          for (var bz in zz) Object.prototype.hasOwnProperty.call(zz, bz) && (uz[uz.length] = bz);
          return uz
        }, Lz(zz)
      };

    function Pz(zz) {
      if (zz && zz.__esModule) return zz;
      var uz = {};
      if (null != zz)
        for (var bz = Lz(zz), Ez = 0; Ez < bz.length; Ez++) "default" !== bz[Ez] && Kz(uz, zz, bz[Ez]);
      return Tz(uz, zz), uz
    }

    function Gz(zz) {
      return zz && zz.__esModule ? zz : {
        default: zz
      }
    }

    function az(zz, uz, bz, Ez) {
      if ("a" === bz && !Ez) throw new TypeError("Private accessor was defined without a getter");
      if ("function" === typeof uz ? zz !== uz || !Ez : !uz.has(zz)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
      return "m" === bz ? Ez : "a" === bz ? Ez.call(zz) : Ez ? Ez.value : uz.get(zz)
    }

    function Vz(zz, uz, bz, Ez, nz) {
      if ("m" === Ez) throw new TypeError("Private method is not writable");
      if ("a" === Ez && !nz) throw new TypeError("Private accessor was defined without a setter");
      if ("function" === typeof uz ? zz !== uz || !nz : !uz.has(zz)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
      return "a" === Ez ? nz.call(zz, bz) : nz ? nz.value = bz : uz.set(zz, bz), bz
    }

    function mz(zz, uz) {
      if (null === uz || "object" !== typeof uz && "function" !== typeof uz) throw new TypeError("Cannot use 'in' operator on non-object");
      return "function" === typeof zz ? uz === zz : zz.has(uz)
    }

    function qz(zz, uz, bz) {
      if (null !== uz && void 0 !== uz) {
        if ("object" !== typeof uz && "function" !== typeof uz) throw new TypeError("Object expected.");
        var Ez, nz;
        if (bz) {
          if (!Symbol.asyncDispose) throw new TypeError("Symbol.asyncDispose is not defined.");
          Ez = uz[Symbol.asyncDispose]
        }
        if (void 0 === Ez) {
          if (!Symbol.dispose) throw new TypeError("Symbol.dispose is not defined.");
          Ez = uz[Symbol.dispose], bz && (nz = Ez)
        }
        if ("function" !== typeof Ez) throw new TypeError("Object not disposable.");
        nz && (Ez = function() {
          try {
            nz.call(this)
          } catch (zz) {
            return Promise.reject(zz)
          }
        }), zz.stack.push({
          value: uz,
          dispose: Ez,
          async: bz
        })
      } else bz && zz.stack.push({
        async: !0
      });
      return uz
    }
    var hz = "function" === typeof SuppressedError ? SuppressedError : function(zz, uz, bz) {
      var Ez = new Error(bz);
      return Ez.name = "SuppressedError", Ez.error = zz, Ez.suppressed = uz, Ez
    };

    function Uz(zz) {
      function uz(uz) {
        zz.error = zz.hasError ? new hz(uz, zz.error, "An error was suppressed during disposal.") : uz, zz.hasError = !0
      }
      var bz, Ez = 0;
      return function nz() {
        for (; bz = zz.stack.pop();) try {
          if (!bz.async && 1 === Ez) return Ez = 0, zz.stack.push(bz), Promise.resolve().then(nz);
          if (bz.dispose) {
            var iz = bz.dispose.call(bz.value);
            if (bz.async) return Ez |= 2, Promise.resolve(iz).then(nz, (function(zz) {
              return uz(zz), nz()
            }))
          } else Ez |= 1
        } catch (lz) {
          uz(lz)
        }
        if (1 === Ez) return zz.hasError ? Promise.reject(zz.error) : Promise.resolve();
        if (zz.hasError) throw zz.error
      }()
    }

    function cz(zz, uz) {
      return "string" === typeof zz && /^\.\.?\//.test(zz) ? zz.replace(/\.(tsx)$|((?:\.d)?)((?:\.[^./]+?)?)\.([cm]?)ts$/i, (function(zz, bz, Ez, nz, iz) {
        return bz ? uz ? ".jsx" : ".js" : !Ez || nz && iz ? Ez + nz + "." + iz.toLowerCase() + "js" : zz
      })) : zz
    }
    const gz = {
      __extends: nz,
      __assign: iz,
      __rest: lz,
      __decorate: Mz,
      __param: tz,
      __esDecorate: Hz,
      __runInitializers: Oz,
      __propKey: pz,
      __setFunctionName: dz,
      __metadata: Fz,
      __awaiter: Zz,
      __generator: Rz,
      __createBinding: Kz,
      __exportStar: wz,
      __values: Xz,
      __read: fz,
      __spread: sz,
      __spreadArrays: rz,
      __spreadArray: oz,
      __await: Nz,
      __asyncGenerator: vz,
      __asyncDelegator: xz,
      __asyncValues: Jz,
      __makeTemplateObject: Az,
      __importStar: Pz,
      __importDefault: Gz,
      __classPrivateFieldGet: az,
      __classPrivateFieldSet: Vz,
      __classPrivateFieldIn: mz,
      __addDisposableResource: qz,
      __disposeResources: Uz,
      __rewriteRelativeImportExtension: cz
    }
  }
};
Object.freeze(modules);
for (const zz in modules) Object.freeze(modules[zz]);