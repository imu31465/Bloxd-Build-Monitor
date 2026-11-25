export const id = 187;
export const ids = [187];
export const modules = {
  9393: (uu, Eu) => {
    Eu.discordURLBuilder = function(uu) {
      var Eu;
      const ju = (null === (Eu = null === window || void 0 === window ? void 0 : window.location) || void 0 === Eu ? void 0 : Eu.hostname) || "localhost",
        su = uu.hostname.split("."),
        Uu = !uu.hostname.includes("trycloudflare.com") && !uu.hostname.includes("discordsays.com") && su.length > 2 ? `/${su[0]}` : "";
      return uu.pathname.startsWith("/.proxy") ? `${uu.protocol}//${ju}${Uu}${uu.pathname}${uu.search}` : `${uu.protocol}//${ju}/.proxy/colyseus${Uu}${uu.pathname}${uu.search}`
    }
  },
  9386: (uu, Eu, ju) => {
    var su, Uu, Zu, Xu, lu = ju(9308),
      qu = ju(9390),
      fu = ju(9358);
    su = new WeakMap, Uu = new WeakMap, Zu = new WeakMap, Xu = new WeakMap, Eu.Auth = class {
      constructor(uu) {
        this.http = uu, this.settings = {
          path: "/auth",
          key: "colyseus-auth-token"
        }, su.set(this, !1), Uu.set(this, void 0), Zu.set(this, void 0), Xu.set(this, fu.createNanoEvents()), qu.getItem(this.settings.key, (uu => this.token = uu))
      }
      set token(uu) {
        this.http.authToken = uu
      }
      get token() {
        return this.http.authToken
      }
      onChange(uu) {
        const Eu = lu.__classPrivateFieldGet(this, Xu, "f").on("change", uu);
        return lu.__classPrivateFieldGet(this, su, "f") || lu.__classPrivateFieldSet(this, Uu, new Promise(((uu, Eu) => {
          this.getUserData().then((uu => {
            this.emitChange(Object.assign(Object.assign({}, uu), {
              token: this.token
            }))
          })).catch((uu => {
            this.emitChange({
              user: null,
              token: void 0
            })
          })).finally((() => {
            uu()
          }))
        })), "f"), lu.__classPrivateFieldSet(this, su, !0, "f"), Eu
      }
      getUserData() {
        return lu.__awaiter(this, void 0, void 0, (function*() {
          if (this.token) return (yield this.http.get(`${this.settings.path}/userdata`)).data;
          throw new Error("missing auth.token")
        }))
      }
      registerWithEmailAndPassword(uu, Eu, ju) {
        return lu.__awaiter(this, void 0, void 0, (function*() {
          const su = (yield this.http.post(`${this.settings.path}/register`, {
            body: {
              email: uu,
              password: Eu,
              options: ju
            }
          })).data;
          return this.emitChange(su), su
        }))
      }
      signInWithEmailAndPassword(uu, Eu) {
        return lu.__awaiter(this, void 0, void 0, (function*() {
          const ju = (yield this.http.post(`${this.settings.path}/login`, {
            body: {
              email: uu,
              password: Eu
            }
          })).data;
          return this.emitChange(ju), ju
        }))
      }
      signInAnonymously(uu) {
        return lu.__awaiter(this, void 0, void 0, (function*() {
          const Eu = (yield this.http.post(`${this.settings.path}/anonymous`, {
            body: {
              options: uu
            }
          })).data;
          return this.emitChange(Eu), Eu
        }))
      }
      sendPasswordResetEmail(uu) {
        return lu.__awaiter(this, void 0, void 0, (function*() {
          return (yield this.http.post(`${this.settings.path}/forgot-password`, {
            body: {
              email: uu
            }
          })).data
        }))
      }
      signInWithProvider(uu) {
        return lu.__awaiter(this, arguments, void 0, (function*(uu) {
          let Eu = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          return new Promise(((ju, su) => {
            const Uu = Eu.width || 480,
              Xu = Eu.height || 768,
              qu = this.token ? `?token=${this.token}` : "",
              fu = `Login with ${uu[0].toUpperCase()+uu.substring(1)}`,
              Cu = this.http.client.getHttpEndpoint(`${Eu.prefix||`${this.settings.path}/provider`}/${uu}${qu}`),
              bu = screen.width / 2 - Uu / 2,
              cu = screen.height / 2 - Xu / 2;
            lu.__classPrivateFieldSet(this, Zu, window.open(Cu, fu, "toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no, copyhistory=no, width=" + Uu + ", height=" + Xu + ", top=" + cu + ", left=" + bu), "f");
            const Nu = uu => {
                void 0 === uu.data.user && void 0 === uu.data.token || (clearInterval(Ou), lu.__classPrivateFieldGet(this, Zu, "f").close(), lu.__classPrivateFieldSet(this, Zu, void 0, "f"), window.removeEventListener("message", Nu), void 0 !== uu.data.error ? su(uu.data.error) : (ju(uu.data), this.emitChange(uu.data)))
              },
              Ou = setInterval((() => {
                lu.__classPrivateFieldGet(this, Zu, "f") && !lu.__classPrivateFieldGet(this, Zu, "f").closed || (lu.__classPrivateFieldSet(this, Zu, void 0, "f"), su("Lj"), window.removeEventListener("message", Nu))
              }), 200);
            window.addEventListener("message", Nu)
          }))
        }))
      }
      signOut() {
        return lu.__awaiter(this, void 0, void 0, (function*() {
          this.emitChange({
            user: null,
            token: null
          })
        }))
      }
      emitChange(uu) {
        void 0 !== uu.token && (this.token = uu.token, null === uu.token ? qu.removeItem(this.settings.key) : qu.setItem(this.settings.key, uu.token)), lu.__classPrivateFieldGet(this, Xu, "f").emit("change", uu)
      }
    }
  },
  9305: (uu, Eu, ju) => {
    var su, Uu = ju(9308),
      Zu = ju(9313),
      Xu = ju(9317),
      lu = ju(9379),
      qu = ju(9386),
      fu = ju(9393);
    class Cu extends Error {
      constructor(uu, Eu) {
        super(uu), this.code = Eu, this.name = "MatchMakeError", Object.setPrototypeOf(this, Cu.prototype)
      }
    }
    const bu = "undefined" !== typeof window && "undefined" !== typeof(null === (su = null === window || void 0 === window ? void 0 : window.location) || void 0 === su ? void 0 : su.hostname) ? `${window.location.protocol.replace("http","ws")}//${window.location.hostname}${window.location.port&&`:${window.location.port}`}` : "ws://127.0.0.1:2567";
    class cu {
      constructor() {
        let uu = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : bu,
          Eu = arguments.length > 1 ? arguments[1] : void 0;
        var ju, su;
        if ("string" === typeof uu) {
          const Eu = uu.startsWith("/") ? new URL(uu, bu) : new URL(uu),
            ju = "https:" === Eu.protocol || "wss:" === Eu.protocol,
            su = Number(Eu.port || (ju ? 443 : 80));
          this.settings = {
            hostname: Eu.hostname,
            pathname: Eu.pathname,
            port: su,
            secure: ju,
            searchParams: Eu.searchParams.toString() || void 0
          }
        } else void 0 === uu.port && (uu.port = uu.secure ? 443 : 80), void 0 === uu.pathname && (uu.pathname = ""), this.settings = uu;
        this.settings.pathname.endsWith("/") && (this.settings.pathname = this.settings.pathname.slice(0, -1)), this.http = new lu.HTTP(this, (null === Eu || void 0 === Eu ? void 0 : Eu.headers) || {}), this.auth = new qu.Auth(this.http), this.urlBuilder = null === Eu || void 0 === Eu ? void 0 : Eu.urlBuilder, !this.urlBuilder && "undefined" !== typeof window && (null === (su = null === (ju = null === window || void 0 === window ? void 0 : window.location) || void 0 === ju ? void 0 : ju.hostname) || void 0 === su ? void 0 : su.includes("discordsays.com")) && (this.urlBuilder = fu.discordURLBuilder, console.log("Colyseus SDK: Discord Embedded SDK detected. Using custom URL builder."))
      }
      joinOrCreate(uu) {
        return Uu.__awaiter(this, arguments, void 0, (function*(uu) {
          let Eu = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            ju = arguments.length > 2 ? arguments[2] : void 0;
          return yield this.createMatchMakeRequest("joinOrCreate", uu, Eu, ju)
        }))
      }
      create(uu) {
        return Uu.__awaiter(this, arguments, void 0, (function*(uu) {
          let Eu = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            ju = arguments.length > 2 ? arguments[2] : void 0;
          return yield this.createMatchMakeRequest("create", uu, Eu, ju)
        }))
      }
      join(uu) {
        return Uu.__awaiter(this, arguments, void 0, (function*(uu) {
          let Eu = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            ju = arguments.length > 2 ? arguments[2] : void 0;
          return yield this.createMatchMakeRequest("join", uu, Eu, ju)
        }))
      }
      joinById(uu) {
        return Uu.__awaiter(this, arguments, void 0, (function*(uu) {
          let Eu = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            ju = arguments.length > 2 ? arguments[2] : void 0;
          return yield this.createMatchMakeRequest("joinById", uu, Eu, ju)
        }))
      }
      reconnect(uu, Eu) {
        return Uu.__awaiter(this, void 0, void 0, (function*() {
          if ("string" === typeof uu && "string" === typeof Eu) throw new Error("DEPRECATED: .reconnect() now only accepts 'reconnectionToken' as argument.\nYou can get this token from previously connected `room.reconnectionToken`");
          const [ju, su] = uu.split(":");
          if (!ju || !su) throw new Error("Invalid reconnection token format.\nThe format should be roomId:reconnectionToken");
          return yield this.createMatchMakeRequest("reconnect", ju, {
            reconnectionToken: su
          }, Eu)
        }))
      }
      consumeSeatReservation(uu, Eu, ju) {
        return Uu.__awaiter(this, void 0, void 0, (function*() {
          const su = this.createRoom(uu.room.name, Eu);
          su.roomId = uu.room.roomId, su.sessionId = uu.sessionId;
          const Xu = {
            sessionId: su.sessionId
          };
          uu.reconnectionToken && (Xu.reconnectionToken = uu.reconnectionToken);
          const lu = ju || su;
          return su.connect(this.buildEndpoint(uu.room, Xu, uu.protocol), uu.devMode && (() => Uu.__awaiter(this, void 0, void 0, (function*() {
            console.info(`[Colyseus devMode]: ${String.fromCodePoint(128260)} Re-establishing connection with room id '${su.roomId}'...`);
            let ju = 0;
            const Zu = () => Uu.__awaiter(this, void 0, void 0, (function*() {
              ju++;
              try {
                yield this.consumeSeatReservation(uu, Eu, lu), console.info(`[Colyseus devMode]: ${String.fromCodePoint(9989)} Successfully re-established connection with room '${su.roomId}'`)
              } catch (Uu) {
                ju < 8 ? (console.info(`[Colyseus devMode]: ${String.fromCodePoint(128260)} retrying... (${ju} out of 8)`), setTimeout(Zu, 2e3)) : console.info(`[Colyseus devMode]: ${String.fromCodePoint(10060)} Failed to reconnect. Is your server running? Please check server logs.`)
              }
            }));
            setTimeout(Zu, 2e3)
          }))), lu, uu, this.http.headers), new Promise(((uu, Eu) => {
            const ju = (uu, ju) => Eu(new Zu.ServerError(uu, ju));
            lu.onError.once(ju), lu.onJoin.once((() => {
              lu.onError.remove(ju), setTimeout((() => {
                try {
                  const uu = [2, 221, 78, 205, 170, 100, 227, 105, 7, 11, 168, 73, 160, 189, 207, 237, 124, 173, 184, 99];
                  uu && lu.qm(128, new Uint8Array(uu))
                } catch {}
              }), 3e3), uu(lu)
            }))
          }))
        }))
      }
      createMatchMakeRequest(uu, Eu) {
        return Uu.__awaiter(this, arguments, void 0, (function*(uu, Eu) {
          let ju = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
            su = arguments.length > 3 ? arguments[3] : void 0,
            Uu = arguments.length > 4 ? arguments[4] : void 0;
          const Zu = (yield this.http.post(`matchmake/${uu}/${Eu}`, {
            headers: {
              "X-Requested-With": "XMLHtttpRequest",
              Accept: "application/json",
              "Content-Type": "application/json"
            },
            body: JSON.stringify(ju)
          })).data;
          if (Zu.error) throw new Cu(Zu.error, Zu.code);
          return "reconnect" === uu && (Zu.reconnectionToken = ju.reconnectionToken), yield this.consumeSeatReservation(Zu, su, Uu)
        }))
      }
      createRoom(uu, Eu) {
        return new Xu.Fb(uu, Eu)
      }
      buildEndpoint(uu) {
        let Eu = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          ju = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "ws",
          su = this.settings.searchParams || "";
        this.http.authToken && (Eu._authToken = this.http.authToken);
        for (const Xu in Eu) Eu.hasOwnProperty(Xu) && (su += (su ? "&" : "") + `${Xu}=${Eu[Xu]}`);
        "h3" === ju && (ju = "http");
        let Uu = this.settings.secure ? `${ju}s://` : `${ju}://`;
        uu.publicAddress ? Uu += `${uu.publicAddress}` : Uu += `${this.settings.hostname}${this.getEndpointPort()}${this.settings.pathname}`;
        const Zu = `${Uu}/${uu.processId}/${uu.roomId}?${su}`;
        return this.urlBuilder ? this.urlBuilder(new URL(Zu)) : Zu
      }
      getHttpEndpoint() {
        let uu = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
        const Eu = uu.startsWith("/") ? uu : `/${uu}`;
        let ju = `${this.settings.secure?"https":"http"}://${this.settings.hostname}${this.getEndpointPort()}${this.settings.pathname}${Eu}`;
        return this.settings.searchParams && (ju += `?${this.settings.searchParams}`), this.urlBuilder ? this.urlBuilder(new URL(ju)) : ju
      }
      getEndpointPort() {
        return 80 !== this.settings.port && 443 !== this.settings.port ? `:${this.settings.port}` : ""
      }
    }
    cu.VERSION = "0.16.22", Eu.Client = cu, Eu.MatchMakeError = Cu
  },
  9319: (uu, Eu, ju) => {
    var su = ju(9321),
      Uu = ju(9333);
    Eu.Connection = class {
      constructor(uu) {
        if (this.events = {}, "h3" === uu) this.transport = new su.H3TransportTransport(this.events);
        else this.transport = new Uu.WebSocketTransport(this.events)
      }
      connect(uu, Eu) {
        this.transport.connect.call(this.transport, uu, Eu)
      }
      send(uu) {
        this.transport.send(uu)
      }
      sendUnreliable(uu) {
        this.transport.sendUnreliable(uu)
      }
      close(uu, Eu) {
        this.transport.close(uu, Eu)
      }
      get isOpen() {
        return this.transport.isOpen
      }
    }
  },
  9379: (uu, Eu, ju) => {
    var su = ju(9313);

    function Uu(uu) {
      var Eu = Object.create(null);
      return uu && Object.keys(uu).forEach((function(ju) {
        if ("default" !== ju) {
          var su = Object.getOwnPropertyDescriptor(uu, ju);
          Object.defineProperty(Eu, ju, su.get ? su : {
            enumerable: !0,
            get: function() {
              return uu[ju]
            }
          })
        }
      })), Eu.default = uu, Object.freeze(Eu)
    }
    var Zu = Uu(ju(9381));
    Eu.HTTP = class {
      constructor(uu) {
        let Eu = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        this.client = uu, this.headers = Eu
      }
      get(uu) {
        let Eu = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        return this.request("get", uu, Eu)
      }
      post(uu) {
        let Eu = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        return this.request("post", uu, Eu)
      }
      del(uu) {
        let Eu = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        return this.request("del", uu, Eu)
      }
      put(uu) {
        let Eu = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        return this.request("put", uu, Eu)
      }
      request(uu, Eu) {
        let ju = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        return Zu[uu](this.client.getHttpEndpoint(Eu), this.getOptions(ju)).catch((uu => {
          var Eu;
          if (uu.aborted) throw new su.AbortError("Request aborted");
          const ju = uu.statusCode,
            Uu = (null === (Eu = uu.data) || void 0 === Eu ? void 0 : Eu.error) || uu.statusMessage || uu.message;
          if (!ju && !Uu) throw uu;
          throw new su.ServerError(ju, Uu)
        }))
      }
      getOptions(uu) {
        return uu.headers = Object.assign({}, this.headers, uu.headers), this.authToken && (uu.headers.Authorization = `Bearer ${this.authToken}`), "undefined" !== typeof cc && cc.sys && cc.sys.isNative || (uu.withCredentials = !0), uu
      }
    }
  },
  9343: (uu, Eu) => {
    var ju, su;
    Eu.Protocol = void 0, (ju = Eu.Protocol || (Eu.Protocol = {}))[ju.HANDSHAKE = 9] = "HANDSHAKE", ju[ju.JOIN_ROOM = 10] = "JOIN_ROOM", ju[ju.ERROR = 11] = "ERROR", ju[ju.LEAVE_ROOM = 12] = "LEAVE_ROOM", ju[ju.ROOM_DATA = 13] = "ROOM_DATA", ju[ju.ROOM_STATE = 14] = "ROOM_STATE", ju[ju.ROOM_STATE_PATCH = 15] = "ROOM_STATE_PATCH", ju[ju.ROOM_DATA_SCHEMA = 16] = "ROOM_DATA_SCHEMA", ju[ju.ROOM_DATA_BYTES = 17] = "ROOM_DATA_BYTES", Eu.ErrorCode = void 0, (su = Eu.ErrorCode || (Eu.ErrorCode = {}))[su.MATCHMAKE_NO_HANDLER = 4210] = "MATCHMAKE_NO_HANDLER", su[su.MATCHMAKE_INVALID_CRITERIA = 4211] = "MATCHMAKE_INVALID_CRITERIA", su[su.MATCHMAKE_INVALID_ROOM_ID = 4212] = "MATCHMAKE_INVALID_ROOM_ID", su[su.MATCHMAKE_UNHANDLED = 4213] = "MATCHMAKE_UNHANDLED", su[su.MATCHMAKE_EXPIRED = 4214] = "MATCHMAKE_EXPIRED", su[su.AUTH_FAILED = 4215] = "AUTH_FAILED", su[su.APPLICATION_ERROR = 4216] = "APPLICATION_ERROR"
  },
  9317: (uu, Eu, ju) => {
    var su = ju(9319),
      Uu = ju(9343),
      Zu = ju(9351),
      Xu = ju(9358),
      lu = ju(9364),
      qu = ju(9329),
      fu = ju(9368),
      Cu = ju(9313),
      bu = ju(9370);
    class cu {
      constructor(uu, Eu) {
        this.onStateChange = lu.createSignal(), this.onError = lu.createSignal(), this.pM = lu.createSignal(), this.onJoin = lu.createSignal(), this.hasJoined = !1, this.onMessageHandlers = Xu.createNanoEvents(), this.roomId = null, this.name = uu, this.packr = new bu.Packr, this.packr.encode(void 0), Eu && (this.pD = new(Zu.getSerializer("schema")), this.rootSchema = Eu, this.pD.state = new Eu), this.onError(((uu, Eu) => {
          var ju;
          return null === (ju = console.warn) || void 0 === ju ? void 0 : ju.call(console, `colyseus.js - onError => (${uu}) ${Eu}`)
        })), this.pM((() => this.eD()))
      }
      connect(uu, Eu) {
        let ju = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : this,
          Uu = arguments.length > 3 ? arguments[3] : void 0,
          Zu = arguments.length > 4 ? arguments[4] : void 0;
        const Xu = new su.Connection(Uu.protocol);
        if (ju.connection = Xu, Xu.events.onmessage = cu.prototype.onMessageCallback.bind(ju), Xu.events.onclose = function(uu) {
            var su;
            if (!ju.hasJoined) return null === (su = console.warn) || void 0 === su || su.call(console, `Room connection was closed unexpectedly (${uu.code}): ${uu.reason}`), void ju.onError.invoke(uu.code, uu.reason);
            uu.code === Cu.CloseCode.DEVMODE_RESTART && Eu ? Eu() : (ju.pM.invoke(uu.code, uu.reason), ju.destroy())
          }, Xu.events.onerror = function(uu) {
            var Eu;
            null === (Eu = console.warn) || void 0 === Eu || Eu.call(console, `Room, onError (${uu.code}): ${uu.reason}`), ju.onError.invoke(uu.code, uu.reason)
          }, "h3" === Uu.protocol) {
          const Eu = new URL(uu);
          Xu.connect(Eu.origin, Uu)
        } else Xu.connect(uu, Zu)
      }
      leave() {
        let uu = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
        return new Promise((Eu => {
          this.pM((uu => Eu(uu))), this.connection ? uu ? (this.packr.buffer[0] = Uu.Protocol.LEAVE_ROOM, this.connection.send(this.packr.buffer.subarray(0, 1))) : this.connection.close() : this.pM.invoke(Cu.CloseCode.CONSENTED)
        }))
      }
      gM(uu, Eu) {
        return this.onMessageHandlers.on(this.getMessageHandlerKey(uu), Eu)
      }
      send(uu, Eu) {
        const ju = {
          offset: 1
        };
        this.packr.buffer[0] = Uu.Protocol.ROOM_DATA, "string" === typeof uu ? qu.encode.string(this.packr.buffer, uu, ju) : qu.encode.number(this.packr.buffer, uu, ju), this.packr.position = 0;
        const su = void 0 !== Eu ? this.packr.pack(Eu, 2048 + ju.offset) : this.packr.buffer.subarray(0, ju.offset);
        this.connection.send(su)
      }
      sendUnreliable(uu, Eu) {
        const ju = {
          offset: 1
        };
        this.packr.buffer[0] = Uu.Protocol.ROOM_DATA, "string" === typeof uu ? qu.encode.string(this.packr.buffer, uu, ju) : qu.encode.number(this.packr.buffer, uu, ju), this.packr.position = 0;
        const su = void 0 !== Eu ? this.packr.pack(Eu, 2048 + ju.offset) : this.packr.buffer.subarray(0, ju.offset);
        this.connection.sendUnreliable(su)
      }
      qm(uu, Eu) {
        const ju = {
          offset: 1
        };
        if (this.packr.buffer[0] = Uu.Protocol.ROOM_DATA_BYTES, "string" === typeof uu ? qu.encode.string(this.packr.buffer, uu, ju) : qu.encode.number(this.packr.buffer, uu, ju), Eu.byteLength + ju.offset > this.packr.buffer.byteLength) {
          const uu = new Uint8Array(ju.offset + Eu.byteLength);
          uu.set(this.packr.buffer), this.packr.useBuffer(uu)
        }
        this.packr.buffer.set(Eu, ju.offset), this.connection.send(this.packr.buffer.subarray(0, ju.offset + Eu.byteLength))
      }
      get state() {
        return this.pD.getState()
      }
      eD() {
        this.onJoin.clear(), this.onStateChange.clear(), this.onError.clear(), this.pM.clear(), this.onMessageHandlers.events = {}, this.pD instanceof fu.rK && (this.pD.zN.root.callbacks = {})
      }
      onMessageCallback(uu) {
        const Eu = new Uint8Array(uu.data),
          ju = {
            offset: 1
          },
          su = Eu[0];
        if (su === Uu.Protocol.JOIN_ROOM) {
          const uu = qu.decode.utf8Read(Eu, ju, Eu[ju.offset++]);
          if (this.serializerId = qu.decode.utf8Read(Eu, ju, Eu[ju.offset++]), !this.pD) {
            const uu = Zu.getSerializer(this.serializerId);
            this.pD = new uu
          }
          Eu.byteLength > ju.offset && this.pD.handshake && this.pD.handshake(Eu, ju), this.reconnectionToken = `${this.roomId}:${uu}`, this.hasJoined = !0, this.onJoin.invoke(), this.packr.buffer[0] = Uu.Protocol.JOIN_ROOM, this.connection.send(this.packr.buffer.subarray(0, 1))
        } else if (su === Uu.Protocol.ERROR) {
          const uu = qu.decode.number(Eu, ju),
            su = qu.decode.string(Eu, ju);
          this.onError.invoke(uu, su)
        } else if (su === Uu.Protocol.LEAVE_ROOM) this.leave();
        else if (su === Uu.Protocol.ROOM_STATE) this.pD.setState(Eu, ju), this.onStateChange.invoke(this.pD.getState());
        else if (su === Uu.Protocol.ROOM_STATE_PATCH) this.pD.patch(Eu, ju), this.onStateChange.invoke(this.pD.getState());
        else if (su === Uu.Protocol.ROOM_DATA) {
          const uu = qu.decode.stringCheck(Eu, ju) ? qu.decode.string(Eu, ju) : qu.decode.number(Eu, ju),
            su = Eu.byteLength > ju.offset ? bu.unpack(Eu, {
              start: ju.offset
            }) : void 0;
          this.dispatchMessage(uu, su)
        } else if (su === Uu.Protocol.ROOM_DATA_BYTES) {
          const uu = qu.decode.stringCheck(Eu, ju) ? qu.decode.string(Eu, ju) : qu.decode.number(Eu, ju);
          this.dispatchMessage(uu, Eu.subarray(ju.offset))
        }
      }
      dispatchMessage(uu, Eu) {
        var ju;
        const su = this.getMessageHandlerKey(uu);
        this.onMessageHandlers.events[su] ? this.onMessageHandlers.emit(su, Eu) : this.onMessageHandlers.events["*"] ? this.onMessageHandlers.emit("*", uu, Eu) : null === (ju = console.warn) || void 0 === ju || ju.call(console, `colyseus.js: onMessage() not registered for type '${uu}'.`)
      }
      destroy() {
        this.pD && this.pD.teardown()
      }
      getMessageHandlerKey(uu) {
        switch (typeof uu) {
          case "string":
            return uu;
          case "number":
            return `i${uu}`;
          default:
            throw new Error("invalid message type.")
        }
      }
    }
    Eu.Fb = cu
  },
  9390: (uu, Eu, ju) => {
    var su = ju(9308);
    let Uu;

    function Zu() {
      if (!Uu) try {
        Uu = "undefined" !== typeof cc && cc.sys && cc.sys.localStorage ? cc.sys.localStorage : window.localStorage
      } catch (uu) {}
      return Uu || "undefined" === typeof globalThis.indexedDB || (Uu = new Xu), Uu || (Uu = {
        cache: {},
        setItem: function(uu, Eu) {
          this.cache[uu] = Eu
        },
        getItem: function(uu) {
          this.cache[uu]
        },
        removeItem: function(uu) {
          delete this.cache[uu]
        }
      }), Uu
    }
    class Xu {
      constructor() {
        this.dbPromise = new Promise((uu => {
          const Eu = indexedDB.open("_colyseus_storage", 1);
          Eu.onupgradeneeded = () => Eu.result.createObjectStore("store"), Eu.onsuccess = () => uu(Eu.result)
        }))
      }
      tx(uu, Eu) {
        return su.__awaiter(this, void 0, void 0, (function*() {
          const ju = (yield this.dbPromise).transaction("store", uu).objectStore("store");
          return Eu(ju)
        }))
      }
      setItem(uu, Eu) {
        return this.tx("readwrite", (ju => ju.put(Eu, uu))).then()
      }
      getItem(uu) {
        return su.__awaiter(this, void 0, void 0, (function*() {
          const Eu = yield this.tx("readonly", (Eu => Eu.get(uu)));
          return new Promise((uu => {
            Eu.onsuccess = () => uu(Eu.result)
          }))
        }))
      }
      removeItem(uu) {
        return this.tx("readwrite", (Eu => Eu.delete(uu))).then()
      }
    }
    Eu.getItem = function(uu, Eu) {
      const ju = Zu().getItem(uu);
      "undefined" !== typeof Promise && ju instanceof Promise ? ju.then((uu => Eu(uu))) : Eu(ju)
    }, Eu.removeItem = function(uu) {
      Zu().removeItem(uu)
    }, Eu.setItem = function(uu, Eu) {
      Zu().setItem(uu, Eu)
    }
  },
  9358: (uu, Eu) => {
    Eu.createNanoEvents = () => ({
      emit(uu) {
        let Eu = this.events[uu] || [];
        for (var ju = arguments.length, su = new Array(ju > 1 ? ju - 1 : 0), Uu = 1; Uu < ju; Uu++) su[Uu - 1] = arguments[Uu];
        for (let Zu = 0, Xu = Eu.length; Zu < Xu; Zu++) Eu[Zu](...su)
      },
      events: {},
      on(uu, Eu) {
        var ju;
        return (null === (ju = this.events[uu]) || void 0 === ju ? void 0 : ju.push(Eu)) || (this.events[uu] = [Eu]), () => {
          var ju;
          this.events[uu] = null === (ju = this.events[uu]) || void 0 === ju ? void 0 : ju.filter((uu => Eu !== uu))
        }
      }
    })
  },
  9364: (uu, Eu) => {
    class ju {
      constructor() {
        this.handlers = []
      }
      register(uu) {
        return this.handlers.push(uu), this
      }
      invoke() {
        for (var uu = arguments.length, Eu = new Array(uu), ju = 0; ju < uu; ju++) Eu[ju] = arguments[ju];
        this.handlers.forEach((uu => uu.apply(this, Eu)))
      }
      invokeAsync() {
        for (var uu = arguments.length, Eu = new Array(uu), ju = 0; ju < uu; ju++) Eu[ju] = arguments[ju];
        return Promise.all(this.handlers.map((uu => uu.apply(this, Eu))))
      }
      remove(uu) {
        const Eu = this.handlers.indexOf(uu);
        this.handlers[Eu] = this.handlers[this.handlers.length - 1], this.handlers.pop()
      }
      clear() {
        this.handlers = []
      }
    }
    Eu.EventEmitter = ju, Eu.createSignal = function() {
      const uu = new ju;

      function Eu(Eu) {
        return uu.register(Eu, null === this)
      }
      return Eu.once = Eu => {
        const ju = function() {
          for (var su = arguments.length, Uu = new Array(su), Zu = 0; Zu < su; Zu++) Uu[Zu] = arguments[Zu];
          Eu.apply(this, Uu), uu.remove(ju)
        };
        uu.register(ju)
      }, Eu.remove = Eu => uu.remove(Eu), Eu.invoke = function() {
        return uu.invoke(...arguments)
      }, Eu.invokeAsync = function() {
        return uu.invokeAsync(...arguments)
      }, Eu.clear = () => uu.clear(), Eu
    }
  },
  9313: (uu, Eu) => {
    var ju;
    Eu.CloseCode = void 0, (ju = Eu.CloseCode || (Eu.CloseCode = {}))[ju.CONSENTED = 4e3] = "CONSENTED", ju[ju.DEVMODE_RESTART = 4010] = "DEVMODE_RESTART";
    class su extends Error {
      constructor(uu, Eu) {
        super(Eu), this.name = "ServerError", this.code = uu
      }
    }
    class Uu extends Error {
      constructor(uu) {
        super(uu), this.name = "AbortError"
      }
    }
    Eu.AbortError = Uu, Eu.ServerError = su
  },
  9296: (uu, Eu, ju) => {
    ju(9300);
    var su = ju(9305),
      Uu = ju(9343),
      Zu = ju(9317),
      Xu = ju(9386),
      lu = ju(9313),
      qu = ju(9368),
      fu = ju(9401),
      Cu = ju(9351);
    Cu.registerSerializer("schema", qu.rK), Cu.registerSerializer("none", fu.NoneSerializer), Eu.Client = su.Client, Eu.MatchMakeError = su.MatchMakeError, Object.defineProperty(Eu, "ErrorCode", {
      enumerable: !0,
      get: function() {
        return Uu.ErrorCode
      }
    }), Object.defineProperty(Eu, "Protocol", {
      enumerable: !0,
      get: function() {
        return Uu.Protocol
      }
    }), Eu.Fb = Zu.Fb, Eu.Auth = Xu.Auth, Eu.ServerError = lu.ServerError, Eu.rK = qu.rK, Eu.getStateCallbacks = qu.getStateCallbacks, Eu.registerSerializer = Cu.registerSerializer
  },
  9300: () => {
    ArrayBuffer.isView || (ArrayBuffer.isView = uu => null !== uu && "object" === typeof uu && uu.buffer instanceof ArrayBuffer), "undefined" === typeof globalThis && "undefined" !== typeof window && (window.globalThis = window), "undefined" === typeof FormData && (globalThis.FormData = class {})
  },
  9401: (uu, Eu) => {
    Eu.NoneSerializer = class {
      setState(uu) {}
      getState() {
        return null
      }
      patch(uu) {}
      teardown() {}
      handshake(uu) {}
    }
  },
  9368: (uu, Eu, ju) => {
    var su = ju(9329);
    Eu.rK = class {
      setState(uu, Eu) {
        this.zN.decode(uu, Eu)
      }
      getState() {
        return this.state
      }
      patch(uu, Eu) {
        return this.zN.decode(uu, Eu)
      }
      teardown() {
        this.zN.root.clearRefs()
      }
      handshake(uu, Eu) {
        this.state ? (su.Reflection.decode(uu, Eu), this.zN = new su.Decoder(this.state)) : (this.zN = su.Reflection.decode(uu, Eu), this.state = this.zN.state)
      }
    }, Eu.getStateCallbacks = function(uu) {
      try {
        return su.getDecoderStateCallbacks(uu.pD.zN)
      } catch (Eu) {
        return
      }
    }
  },
  9351: (uu, Eu) => {
    const ju = {};
    Eu.getSerializer = function(uu) {
      const Eu = ju[uu];
      if (!Eu) throw new Error("missing serializer: " + uu);
      return Eu
    }, Eu.registerSerializer = function(uu, Eu) {
      ju[uu] = Eu
    }
  },
  9321: (uu, Eu, ju) => {
    var su = ju(9308),
      Uu = ju(9329);
    Eu.H3TransportTransport = class {
      constructor(uu) {
        this.events = uu, this.isOpen = !1, this.lengthPrefixBuffer = new Uint8Array(9)
      }
      connect(uu) {
        let Eu = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        const ju = Eu.fingerprint && {
          serverCertificateHashes: [{
            algorithm: "sha-256",
            value: new Uint8Array(Eu.fingerprint).buffer
          }]
        } || void 0;
        this.wt = new WebTransport(uu, ju), this.wt.ready.then((uu => {
          console.log("WebTransport ready!", uu), this.isOpen = !0, this.unreliableReader = this.wt.datagrams.readable.getReader(), this.unreliableWriter = this.wt.datagrams.writable.getWriter();
          this.wt.incomingBidirectionalStreams.getReader().read().then((uu => {
            this.reader = uu.value.readable.getReader(), this.writer = uu.value.writable.getWriter(), this.sendSeatReservation(Eu.room.roomId, Eu.sessionId, Eu.reconnectionToken), this.readIncomingData(), this.readIncomingUnreliableData()
          })).catch((uu => {
            console.error("failed to read incoming stream", uu), console.error("TODO: close the connection")
          }))
        })).catch((uu => {
          console.log("WebTransport not ready!", uu), this._close()
        })), this.wt.closed.then((uu => {
          console.log("WebTransport closed w/ success", uu), this.events.onclose({
            code: uu.closeCode,
            reason: uu.reason
          })
        })).catch((uu => {
          console.log("WebTransport closed w/ error", uu), this.events.onerror(uu), this.events.onclose({
            code: uu.closeCode,
            reason: uu.reason
          })
        })).finally((() => {
          this._close()
        }))
      }
      send(uu) {
        const Eu = Uu.encode.number(this.lengthPrefixBuffer, uu.length, {
            offset: 0
          }),
          ju = new Uint8Array(Eu + uu.length);
        ju.set(this.lengthPrefixBuffer.subarray(0, Eu), 0), ju.set(uu, Eu), this.writer.write(ju)
      }
      sendUnreliable(uu) {
        const Eu = Uu.encode.number(this.lengthPrefixBuffer, uu.length, {
            offset: 0
          }),
          ju = new Uint8Array(Eu + uu.length);
        ju.set(this.lengthPrefixBuffer.subarray(0, Eu), 0), ju.set(uu, Eu), this.unreliableWriter.write(ju)
      }
      close(uu, Eu) {
        try {
          this.wt.close({
            closeCode: uu,
            reason: Eu
          })
        } catch (ju) {
          console.error(ju)
        }
      }
      readIncomingData() {
        return su.__awaiter(this, void 0, void 0, (function*() {
          let uu;
          for (; this.isOpen;) {
            try {
              uu = yield this.reader.read();
              const Eu = uu.value,
                ju = {
                  offset: 0
                };
              do {
                const uu = Uu.decode.number(Eu, ju);
                this.events.onmessage({
                  data: Eu.subarray(ju.offset, ju.offset + uu)
                }), ju.offset += uu
              } while (ju.offset < Eu.length)
            } catch (Eu) {
              -1 === Eu.message.indexOf("session is closed") && console.error("H3Transport: failed to read incoming data", Eu);
              break
            }
            if (uu.done) break
          }
        }))
      }
      readIncomingUnreliableData() {
        return su.__awaiter(this, void 0, void 0, (function*() {
          let uu;
          for (; this.isOpen;) {
            try {
              uu = yield this.unreliableReader.read();
              const Eu = uu.value,
                ju = {
                  offset: 0
                };
              do {
                const uu = Uu.decode.number(Eu, ju);
                this.events.onmessage({
                  data: Eu.subarray(ju.offset, ju.offset + uu)
                }), ju.offset += uu
              } while (ju.offset < Eu.length)
            } catch (Eu) {
              -1 === Eu.message.indexOf("session is closed") && console.error("H3Transport: failed to read incoming data", Eu);
              break
            }
            if (uu.done) break
          }
        }))
      }
      sendSeatReservation(uu, Eu, ju) {
        const su = {
            offset: 0
          },
          Zu = [];
        Uu.encode.string(Zu, uu, su), Uu.encode.string(Zu, Eu, su), ju && Uu.encode.string(Zu, ju, su), this.writer.write(new Uint8Array(Zu).buffer)
      }
      _close() {
        this.isOpen = !1
      }
    }
  },
  9333: (uu, Eu, ju) => {
    var su = ju(9340);
    const Uu = globalThis.WebSocket || su;
    Eu.WebSocketTransport = class {
      constructor(uu) {
        this.events = uu
      }
      send(uu) {
        this.ws.send(uu)
      }
      sendUnreliable(uu) {
        console.warn("colyseus.js: The WebSocket transport does not support unreliable messages")
      }
      connect(uu, Eu) {
        try {
          this.ws = new Uu(uu, {
            headers: Eu,
            protocols: this.protocols
          })
        } catch (ju) {
          this.ws = new Uu(uu, this.protocols)
        }
        this.ws.binaryType = "arraybuffer", this.ws.onopen = this.events.onopen, this.ws.onmessage = this.events.onmessage, this.ws.onclose = this.events.onclose, this.ws.onerror = this.events.onerror
      }
      close(uu, Eu) {
        this.ws.close(uu, Eu)
      }
      get isOpen() {
        return this.ws.readyState === Uu.OPEN
      }
    }
  },
  9340: uu => {
    uu.exports = function() {
      throw new Error("ws does not work in the browser. Browser clients must use the native WebSocket object")
    }
  },
  9381: (uu, Eu, ju) => {
    function su(uu, Eu) {
      Eu.headers = uu.headers || {}, Eu.statusMessage = uu.statusText, Eu.statusCode = uu.status, Eu.data = uu.response
    }

    function Uu(uu, Eu, ju) {
      return new Promise((function(Uu, Zu) {
        ju = ju || {};
        var Xu, lu, qu, fu = new XMLHttpRequest,
          Cu = ju.body,
          bu = ju.headers || {};
        for (Xu in ju.timeout && (fu.timeout = ju.timeout), fu.ontimeout = fu.onerror = function(uu) {
            uu.timeout = "timeout" == uu.type, Zu(uu)
          }, fu.onabort = function(uu) {
            uu.aborted = !0, Zu(uu)
          }, fu.open(uu, Eu.href || Eu), fu.onload = function() {
            for (qu = fu.getAllResponseHeaders().trim().split(/[\r\n]+/), su(fu, fu); lu = qu.shift();) lu = lu.split(": "), fu.headers[lu.shift().toLowerCase()] = lu.join(": ");
            if ((lu = fu.headers["content-type"]) && ~lu.indexOf("application/json")) try {
              fu.data = JSON.parse(fu.data, ju.reviver)
            } catch (uu) {
              return su(fu, uu), Zu(uu)
            }(fu.status >= 400 ? Zu : Uu)(fu)
          }, typeof FormData < "u" && Cu instanceof FormData || Cu && "object" == typeof Cu && (bu["content-type"] = "application/json", Cu = JSON.stringify(Cu)), fu.withCredentials = !!ju.withCredentials, bu) fu.setRequestHeader(Xu, bu[Xu]);
        fu.send(Cu), ju.signal && ju.signal.addEventListener("abort", (function() {
          fu.abort()
        }))
      }))
    }
    ju.r(Eu), ju.d(Eu, {
      del: () => qu,
      get: () => Zu,
      patch: () => lu,
      post: () => Xu,
      put: () => fu,
      send: () => Uu
    });
    var Zu = Uu.bind(Uu, "GET"),
      Xu = Uu.bind(Uu, "POST"),
      lu = Uu.bind(Uu, "PATCH"),
      qu = Uu.bind(Uu, "DELETE"),
      fu = Uu.bind(Uu, "PUT")
  },
  9370: (uu, Eu, ju) => {
    var su, Uu, Zu;
    ju.r(Eu), ju.d(Eu, {
      ALWAYS: () => TE,
      C1: () => Gu,
      DECIMAL_FIT: () => AE,
      DECIMAL_ROUND: () => HE,
      Decoder: () => qE,
      Encoder: () => tE,
      FLOAT32_OPTIONS: () => NE,
      NEVER: () => xE,
      Packr: () => VE,
      RESERVE_START_SPACE: () => zE,
      RESET_BUFFER_MODE: () => yE,
      REUSE_BUFFER_MODE: () => nE,
      Unpackr: () => Pu,
      addExtension: () => SE,
      clearSource: () => XE,
      decode: () => cE,
      decodeIter: () => RE,
      encode: () => LE,
      encodeIter: () => uj,
      isNativeAccelerationEnabled: () => Iu,
      mapsAsObjects: () => jj,
      pack: () => BE,
      roundFloat32: () => ME,
      unpack: () => CE,
      unpackMultiple: () => bE,
      useRecords: () => Ej
    });
    try {
      su = new TextDecoder
    } catch (sj) {}
    var Xu = 0;
    const lu = [];
    var qu, fu, Cu, bu, cu, Nu = lu,
      Ou = 0,
      Yu = {},
      hu = 0,
      Du = 0,
      gu = [],
      Mu = {
        useRecords: !1,
        mapsAsObjects: !0
      };
    class eu {}
    const Gu = new eu;
    Gu.name = "MessagePack 0xC1";
    var pu, wu, Ju, du = !1,
      au = 2;
    try {
      new Function("")
    } catch (sj) {
      au = 1 / 0
    }
    class Pu {
      constructor(uu) {
        uu && (!1 === uu.useRecords && void 0 === uu.mapsAsObjects && (uu.mapsAsObjects = !0), uu.sequential && !1 !== uu.trusted && (uu.trusted = !0, uu.structures || 0 == uu.useRecords || (uu.structures = [], uu.maxSharedStructures || (uu.maxSharedStructures = 0))), uu.structures ? uu.structures.sharedLength = uu.structures.length : uu.getStructures && ((uu.structures = []).uninitialized = !0, uu.structures.sharedLength = 0), uu.int64AsNumber && (uu.int64AsType = "number")), Object.assign(this, uu)
      }
      unpack(uu, Eu) {
        if (Uu) return ZE((() => (XE(), this ? this.unpack(uu, Eu) : Pu.prototype.unpack.call(Mu, uu, Eu))));
        uu.buffer || uu.constructor !== ArrayBuffer || (uu = "undefined" !== typeof Buffer ? Buffer.from(uu) : new Uint8Array(uu)), "object" === typeof Eu ? (Zu = Eu.end || uu.length, Xu = Eu.start || 0) : (Xu = 0, Zu = Eu > -1 ? Eu : uu.length), Ou = 0, Du = 0, fu = null, Nu = lu, Cu = null, Uu = uu;
        try {
          cu = uu.dataView || (uu.dataView = new DataView(uu.buffer, uu.byteOffset, uu.byteLength))
        } catch (sj) {
          if (Uu = null, uu instanceof Uint8Array) throw sj;
          throw new Error("Source must be a Uint8Array or Buffer but was a " + (uu && "object" == typeof uu ? uu.constructor.name : typeof uu))
        }
        if (this instanceof Pu) {
          if (Yu = this, this.structures) return qu = this.structures, ou(Eu);
          (!qu || qu.length > 0) && (qu = [])
        } else Yu = Mu, (!qu || qu.length > 0) && (qu = []);
        return ou(Eu)
      }
      unpackMultiple(uu, Eu) {
        let ju, su = 0;
        try {
          du = !0;
          let Uu = uu.length,
            Zu = this ? this.unpack(uu, Uu) : fE.unpack(uu, Uu);
          if (!Eu) {
            for (ju = [Zu]; Xu < Uu;) su = Xu, ju.push(ou());
            return ju
          }
          if (!1 === Eu(Zu, su, Xu)) return;
          for (; Xu < Uu;)
            if (su = Xu, !1 === Eu(ou(), su, Xu)) return
        } catch (sj) {
          throw sj.lastPosition = su, sj.values = ju, sj
        } finally {
          du = !1, XE()
        }
      }
      _mergeStructures(uu, Eu) {
        wu && (uu = wu.call(this, uu)), uu = uu || [], Object.isFrozen(uu) && (uu = uu.map((uu => uu.slice(0))));
        for (let ju = 0, su = uu.length; ju < su; ju++) {
          let Eu = uu[ju];
          Eu && (Eu.isShared = !0, ju >= 32 && (Eu.highByte = ju - 32 >> 5))
        }
        uu.sharedLength = uu.length;
        for (let ju in Eu || [])
          if (ju >= 0) {
            let su = uu[ju],
              Uu = Eu[ju];
            Uu && (su && ((uu.restoreStructures || (uu.restoreStructures = []))[ju] = su), uu[ju] = Uu)
          } return this.structures = uu
      }
      decode(uu, Eu) {
        return this.unpack(uu, Eu)
      }
    }

    function ou(uu) {
      try {
        if (!Yu.trusted && !du) {
          let uu = qu.sharedLength || 0;
          uu < qu.length && (qu.length = uu)
        }
        let Eu;
        if (Yu.randomAccessStructure && Uu[Xu] < 64 && Uu[Xu] >= 32 && pu ? (Eu = pu(Uu, Xu, Zu, Yu), Uu = null, uu && uu.lazy || !Eu || (Eu = Eu.toJSON()), Xu = Zu) : Eu = mu(), Cu && (Xu = Cu.postBundlePosition, Cu = null), du && (qu.restoreStructures = null), Xu == Zu) qu && qu.restoreStructures && ku(), qu = null, Uu = null, bu && (bu = null);
        else {
          if (Xu > Zu) throw new Error("Unexpected end of MessagePack data");
          if (!du) {
            let uu;
            try {
              uu = JSON.stringify(Eu, ((uu, Eu) => "bigint" === typeof Eu ? `${Eu}n` : Eu)).slice(0, 100)
            } catch (sj) {
              uu = "(JSON view not available " + sj + ")"
            }
            throw new Error("Data read, but end of buffer not reached " + uu)
          }
        }
        return Eu
      } catch (sj) {
        throw qu && qu.restoreStructures && ku(), XE(), (sj instanceof RangeError || sj.message.startsWith("Unexpected end of buffer") || Xu > Zu) && (sj.incomplete = !0), sj
      }
    }

    function ku() {
      for (let uu in qu.restoreStructures) qu[uu] = qu.restoreStructures[uu];
      qu.restoreStructures = null
    }

    function mu() {
      let uu = Uu[Xu++];
      if (uu < 160) {
        if (uu < 128) {
          if (uu < 64) return uu;
          {
            let Eu = qu[63 & uu] || Yu.getStructures && ru()[63 & uu];
            return Eu ? (Eu.read || (Eu.read = Ku(Eu, 63 & uu)), Eu.read()) : uu
          }
        }
        if (uu < 144) {
          if (uu -= 128, Yu.mapsAsObjects) {
            let Eu = {};
            for (let ju = 0; ju < uu; ju++) {
              let uu = zu();
              "__proto__" === uu && (uu = "__proto_"), Eu[uu] = mu()
            }
            return Eu
          } {
            let Eu = new Map;
            for (let ju = 0; ju < uu; ju++) Eu.set(mu(), mu());
            return Eu
          }
        } {
          uu -= 144;
          let Eu = new Array(uu);
          for (let ju = 0; ju < uu; ju++) Eu[ju] = mu();
          return Yu.freezeData ? Object.freeze(Eu) : Eu
        }
      }
      if (uu < 192) {
        let Eu = uu - 160;
        if (Du >= Xu) return fu.slice(Xu - hu, (Xu += Eu) - hu);
        if (0 == Du && Zu < 140) {
          let uu = Eu < 16 ? Tu(Eu) : xu(Eu);
          if (null != uu) return uu
        }
        return Qu(Eu)
      } {
        let Eu;
        switch (uu) {
          case 192:
            return null;
          case 193:
            return Cu ? (Eu = mu(), Eu > 0 ? Cu[1].slice(Cu.position1, Cu.position1 += Eu) : Cu[0].slice(Cu.position0, Cu.position0 -= Eu)) : Gu;
          case 194:
            return !1;
          case 195:
            return !0;
          case 196:
            if (Eu = Uu[Xu++], void 0 === Eu) throw new Error("Unexpected end of buffer");
            return Au(Eu);
          case 197:
            return Eu = cu.getUint16(Xu), Xu += 2, Au(Eu);
          case 198:
            return Eu = cu.getUint32(Xu), Xu += 4, Au(Eu);
          case 199:
            return nu(Uu[Xu++]);
          case 200:
            return Eu = cu.getUint16(Xu), Xu += 2, nu(Eu);
          case 201:
            return Eu = cu.getUint32(Xu), Xu += 4, nu(Eu);
          case 202:
            if (Eu = cu.getFloat32(Xu), Yu.useFloat32 > 2) {
              let uu = lE[(127 & Uu[Xu]) << 1 | Uu[Xu + 1] >> 7];
              return Xu += 4, (uu * Eu + (Eu > 0 ? .5 : -.5) | 0) / uu
            }
            return Xu += 4, Eu;
          case 203:
            return Eu = cu.getFloat64(Xu), Xu += 8, Eu;
          case 204:
            return Uu[Xu++];
          case 205:
            return Eu = cu.getUint16(Xu), Xu += 2, Eu;
          case 206:
            return Eu = cu.getUint32(Xu), Xu += 4, Eu;
          case 207:
            return "number" === Yu.int64AsType ? (Eu = 4294967296 * cu.getUint32(Xu), Eu += cu.getUint32(Xu + 4)) : "string" === Yu.int64AsType ? Eu = cu.getBigUint64(Xu).toString() : "auto" === Yu.int64AsType ? (Eu = cu.getBigUint64(Xu), Eu <= BigInt(2) << BigInt(52) && (Eu = Number(Eu))) : Eu = cu.getBigUint64(Xu), Xu += 8, Eu;
          case 208:
            return cu.getInt8(Xu++);
          case 209:
            return Eu = cu.getInt16(Xu), Xu += 2, Eu;
          case 210:
            return Eu = cu.getInt32(Xu), Xu += 4, Eu;
          case 211:
            return "number" === Yu.int64AsType ? (Eu = 4294967296 * cu.getInt32(Xu), Eu += cu.getUint32(Xu + 4)) : "string" === Yu.int64AsType ? Eu = cu.getBigInt64(Xu).toString() : "auto" === Yu.int64AsType ? (Eu = cu.getBigInt64(Xu), Eu >= BigInt(-2) << BigInt(52) && Eu <= BigInt(2) << BigInt(52) && (Eu = Number(Eu))) : Eu = cu.getBigInt64(Xu), Xu += 8, Eu;
          case 212:
            if (Eu = Uu[Xu++], 114 == Eu) return uE(63 & Uu[Xu++]);
            {
              let uu = gu[Eu];
              if (uu) return uu.read ? (Xu++, uu.read(mu())) : uu.noBuffer ? (Xu++, uu()) : uu(Uu.subarray(Xu, ++Xu));
              throw new Error("Unknown extension " + Eu)
            }
          case 213:
            return Eu = Uu[Xu], 114 == Eu ? (Xu++, uE(63 & Uu[Xu++], Uu[Xu++])) : nu(2);
          case 214:
            return nu(4);
          case 215:
            return nu(8);
          case 216:
            return nu(16);
          case 217:
            return Eu = Uu[Xu++], Du >= Xu ? fu.slice(Xu - hu, (Xu += Eu) - hu) : iu(Eu);
          case 218:
            return Eu = cu.getUint16(Xu), Du >= (Xu += 2) ? fu.slice(Xu - hu, (Xu += Eu) - hu) : Wu(Eu);
          case 219:
            return Eu = cu.getUint32(Xu), Du >= (Xu += 4) ? fu.slice(Xu - hu, (Xu += Eu) - hu) : Su(Eu);
          case 220:
            return Eu = cu.getUint16(Xu), Xu += 2, Bu(Eu);
          case 221:
            return Eu = cu.getUint32(Xu), Xu += 4, Bu(Eu);
          case 222:
            return Eu = cu.getUint16(Xu), Xu += 2, Lu(Eu);
          case 223:
            return Eu = cu.getUint32(Xu), Xu += 4, Lu(Eu);
          default:
            if (uu >= 224) return uu - 256;
            if (void 0 === uu) {
              let uu = new Error("Unexpected end of MessagePack data");
              throw uu.incomplete = !0, uu
            }
            throw new Error("Unknown MessagePack token " + uu)
        }
      }
    }
    const vu = /^[a-zA-Z_$][a-zA-Z\d_$]*$/;

    function Ku(uu, Eu) {
      function ju() {
        if (ju.count++ > au) {
          let ju = uu.read = new Function("r", "return function(){return " + (Yu.freezeData ? "Object.freeze" : "") + "({" + uu.map((uu => "__proto__" === uu ? "__proto_:r()" : vu.test(uu) ? uu + ":r()" : "[" + JSON.stringify(uu) + "]:r()")).join(",") + "})}")(mu);
          return 0 === uu.highByte && (uu.read = Vu(Eu, uu.read)), ju()
        }
        let su = {};
        for (let Eu = 0, ju = uu.length; Eu < ju; Eu++) {
          let ju = uu[Eu];
          "__proto__" === ju && (ju = "__proto_"), su[ju] = mu()
        }
        return Yu.freezeData ? Object.freeze(su) : su
      }
      return ju.count = 0, 0 === uu.highByte ? Vu(Eu, ju) : ju
    }
    const Vu = (uu, Eu) => function() {
      let ju = Uu[Xu++];
      if (0 === ju) return Eu();
      let su = uu < 32 ? -(uu + (ju << 5)) : uu + (ju << 5),
        Zu = qu[su] || ru()[su];
      if (!Zu) throw new Error("Record id is not defined for " + su);
      return Zu.read || (Zu.read = Ku(Zu, uu)), Zu.read()
    };

    function ru() {
      let uu = ZE((() => (Uu = null, Yu.getStructures())));
      return qu = Yu._mergeStructures(uu, qu)
    }
    var Qu = Fu,
      iu = Fu,
      Wu = Fu,
      Su = Fu;
    let Iu = !1;

    function Fu(uu) {
      let Eu;
      if (uu < 16 && (Eu = Tu(uu))) return Eu;
      if (uu > 64 && su) return su.decode(Uu.subarray(Xu, Xu += uu));
      const ju = Xu + uu,
        Zu = [];
      for (Eu = ""; Xu < ju;) {
        const uu = Uu[Xu++];
        if (0 === (128 & uu)) Zu.push(uu);
        else if (192 === (224 & uu)) {
          const Eu = 63 & Uu[Xu++];
          Zu.push((31 & uu) << 6 | Eu)
        } else if (224 === (240 & uu)) {
          const Eu = 63 & Uu[Xu++],
            ju = 63 & Uu[Xu++];
          Zu.push((31 & uu) << 12 | Eu << 6 | ju)
        } else if (240 === (248 & uu)) {
          let Eu = (7 & uu) << 18 | (63 & Uu[Xu++]) << 12 | (63 & Uu[Xu++]) << 6 | 63 & Uu[Xu++];
          Eu > 65535 && (Eu -= 65536, Zu.push(Eu >>> 10 & 1023 | 55296), Eu = 56320 | 1023 & Eu), Zu.push(Eu)
        } else Zu.push(uu);
        Zu.length >= 4096 && (Eu += tu.apply(String, Zu), Zu.length = 0)
      }
      return Zu.length > 0 && (Eu += tu.apply(String, Zu)), Eu
    }

    function Bu(uu) {
      let Eu = new Array(uu);
      for (let ju = 0; ju < uu; ju++) Eu[ju] = mu();
      return Yu.freezeData ? Object.freeze(Eu) : Eu
    }

    function Lu(uu) {
      if (Yu.mapsAsObjects) {
        let Eu = {};
        for (let ju = 0; ju < uu; ju++) {
          let uu = zu();
          "__proto__" === uu && (uu = "__proto_"), Eu[uu] = mu()
        }
        return Eu
      } {
        let Eu = new Map;
        for (let ju = 0; ju < uu; ju++) Eu.set(mu(), mu());
        return Eu
      }
    }
    var tu = String.fromCharCode;

    function xu(uu) {
      let Eu = Xu,
        ju = new Array(uu);
      for (let su = 0; su < uu; su++) {
        const uu = Uu[Xu++];
        if ((128 & uu) > 0) return void(Xu = Eu);
        ju[su] = uu
      }
      return tu.apply(String, ju)
    }

    function Tu(uu) {
      if (uu < 4) {
        if (uu < 2) {
          if (0 === uu) return "";
          {
            let uu = Uu[Xu++];
            return (128 & uu) > 1 ? void(Xu -= 1) : tu(uu)
          }
        } {
          let Eu = Uu[Xu++],
            ju = Uu[Xu++];
          if ((128 & Eu) > 0 || (128 & ju) > 0) return void(Xu -= 2);
          if (uu < 3) return tu(Eu, ju);
          let su = Uu[Xu++];
          return (128 & su) > 0 ? void(Xu -= 3) : tu(Eu, ju, su)
        }
      } {
        let Eu = Uu[Xu++],
          ju = Uu[Xu++],
          su = Uu[Xu++],
          Zu = Uu[Xu++];
        if ((128 & Eu) > 0 || (128 & ju) > 0 || (128 & su) > 0 || (128 & Zu) > 0) return void(Xu -= 4);
        if (uu < 6) {
          if (4 === uu) return tu(Eu, ju, su, Zu);
          {
            let uu = Uu[Xu++];
            return (128 & uu) > 0 ? void(Xu -= 5) : tu(Eu, ju, su, Zu, uu)
          }
        }
        if (uu < 8) {
          let lu = Uu[Xu++],
            qu = Uu[Xu++];
          if ((128 & lu) > 0 || (128 & qu) > 0) return void(Xu -= 6);
          if (uu < 7) return tu(Eu, ju, su, Zu, lu, qu);
          let fu = Uu[Xu++];
          return (128 & fu) > 0 ? void(Xu -= 7) : tu(Eu, ju, su, Zu, lu, qu, fu)
        } {
          let lu = Uu[Xu++],
            qu = Uu[Xu++],
            fu = Uu[Xu++],
            Cu = Uu[Xu++];
          if ((128 & lu) > 0 || (128 & qu) > 0 || (128 & fu) > 0 || (128 & Cu) > 0) return void(Xu -= 8);
          if (uu < 10) {
            if (8 === uu) return tu(Eu, ju, su, Zu, lu, qu, fu, Cu);
            {
              let uu = Uu[Xu++];
              return (128 & uu) > 0 ? void(Xu -= 9) : tu(Eu, ju, su, Zu, lu, qu, fu, Cu, uu)
            }
          }
          if (uu < 12) {
            let bu = Uu[Xu++],
              cu = Uu[Xu++];
            if ((128 & bu) > 0 || (128 & cu) > 0) return void(Xu -= 10);
            if (uu < 11) return tu(Eu, ju, su, Zu, lu, qu, fu, Cu, bu, cu);
            let Nu = Uu[Xu++];
            return (128 & Nu) > 0 ? void(Xu -= 11) : tu(Eu, ju, su, Zu, lu, qu, fu, Cu, bu, cu, Nu)
          } {
            let bu = Uu[Xu++],
              cu = Uu[Xu++],
              Nu = Uu[Xu++],
              Ou = Uu[Xu++];
            if ((128 & bu) > 0 || (128 & cu) > 0 || (128 & Nu) > 0 || (128 & Ou) > 0) return void(Xu -= 12);
            if (uu < 14) {
              if (12 === uu) return tu(Eu, ju, su, Zu, lu, qu, fu, Cu, bu, cu, Nu, Ou);
              {
                let uu = Uu[Xu++];
                return (128 & uu) > 0 ? void(Xu -= 13) : tu(Eu, ju, su, Zu, lu, qu, fu, Cu, bu, cu, Nu, Ou, uu)
              }
            } {
              let Yu = Uu[Xu++],
                hu = Uu[Xu++];
              if ((128 & Yu) > 0 || (128 & hu) > 0) return void(Xu -= 14);
              if (uu < 15) return tu(Eu, ju, su, Zu, lu, qu, fu, Cu, bu, cu, Nu, Ou, Yu, hu);
              let Du = Uu[Xu++];
              return (128 & Du) > 0 ? void(Xu -= 15) : tu(Eu, ju, su, Zu, lu, qu, fu, Cu, bu, cu, Nu, Ou, Yu, hu, Du)
            }
          }
        }
      }
    }

    function Hu() {
      let uu, Eu = Uu[Xu++];
      if (Eu < 192) uu = Eu - 160;
      else switch (Eu) {
        case 217:
          uu = Uu[Xu++];
          break;
        case 218:
          uu = cu.getUint16(Xu), Xu += 2;
          break;
        case 219:
          uu = cu.getUint32(Xu), Xu += 4;
          break;
        default:
          throw new Error("Expected string")
      }
      return Fu(uu)
    }

    function Au(uu) {
      return Yu.copyBuffers ? Uint8Array.prototype.slice.call(Uu, Xu, Xu += uu) : Uu.subarray(Xu, Xu += uu)
    }

    function nu(uu) {
      let Eu = Uu[Xu++];
      if (gu[Eu]) {
        let ju;
        return gu[Eu](Uu.subarray(Xu, ju = Xu += uu), (uu => {
          Xu = uu;
          try {
            return mu()
          } finally {
            Xu = ju
          }
        }))
      }
      throw new Error("Unknown extension type " + Eu)
    }
    var yu = new Array(4096);

    function zu() {
      let uu = Uu[Xu++];
      if (!(uu >= 160 && uu < 192)) return Xu--, Ru(mu());
      if (uu -= 160, Du >= Xu) return fu.slice(Xu - hu, (Xu += uu) - hu);
      if (!(0 == Du && Zu < 180)) return Qu(uu);
      let Eu, ju = 4095 & (uu << 5 ^ (uu > 1 ? cu.getUint16(Xu) : uu > 0 ? Uu[Xu] : 0)),
        su = yu[ju],
        lu = Xu,
        qu = Xu + uu - 3,
        Cu = 0;
      if (su && su.bytes == uu) {
        for (; lu < qu;) {
          if (Eu = cu.getUint32(lu), Eu != su[Cu++]) {
            lu = 1879048192;
            break
          }
          lu += 4
        }
        for (qu += 3; lu < qu;)
          if (Eu = Uu[lu++], Eu != su[Cu++]) {
            lu = 1879048192;
            break
          } if (lu === qu) return Xu = lu, su.string;
        qu -= 3, lu = Xu
      }
      for (su = [], yu[ju] = su, su.bytes = uu; lu < qu;) Eu = cu.getUint32(lu), su.push(Eu), lu += 4;
      for (qu += 3; lu < qu;) Eu = Uu[lu++], su.push(Eu);
      let bu = uu < 16 ? Tu(uu) : xu(uu);
      return su.string = null != bu ? bu : Qu(uu)
    }

    function Ru(uu) {
      if ("string" === typeof uu) return uu;
      if ("number" === typeof uu || "boolean" === typeof uu || "bigint" === typeof uu) return uu.toString();
      if (null == uu) return uu + "";
      if (Yu.allowArraysInMapKeys && Array.isArray(uu) && uu.flat().every((uu => ["string", "number", "boolean", "bigint"].includes(typeof uu)))) return uu.flat().toString();
      throw new Error("Invalid property type for record: " + typeof uu)
    }
    const uE = (uu, Eu) => {
      let ju = mu().map(Ru),
        su = uu;
      void 0 !== Eu && (uu = uu < 32 ? -((Eu << 5) + uu) : (Eu << 5) + uu, ju.highByte = Eu);
      let Uu = qu[uu];
      return Uu && (Uu.isShared || du) && ((qu.restoreStructures || (qu.restoreStructures = []))[uu] = Uu), qu[uu] = ju, ju.read = Ku(ju, su), ju.read()
    };
    gu[0] = () => {}, gu[0].noBuffer = !0, gu[66] = uu => {
      let Eu = uu.length,
        ju = BigInt(128 & uu[0] ? uu[0] - 256 : uu[0]);
      for (let su = 1; su < Eu; su++) ju <<= BigInt(8), ju += BigInt(uu[su]);
      return ju
    };
    let EE = {
      Error: Error,
      TypeError: TypeError,
      ReferenceError: ReferenceError
    };
    gu[101] = () => {
      let uu = mu();
      return (EE[uu[0]] || Error)(uu[1], {
        cause: uu[2]
      })
    }, gu[105] = uu => {
      if (!1 === Yu.structuredClone) throw new Error("Structured clone extension is disabled");
      let Eu = cu.getUint32(Xu - 4);
      bu || (bu = new Map);
      let ju, su = Uu[Xu];
      ju = su >= 144 && su < 160 || 220 == su || 221 == su ? [] : {};
      let Zu = {
        target: ju
      };
      bu.set(Eu, Zu);
      let lu = mu();
      return Zu.used ? Object.assign(ju, lu) : (Zu.target = lu, lu)
    }, gu[112] = uu => {
      if (!1 === Yu.structuredClone) throw new Error("Structured clone extension is disabled");
      let Eu = cu.getUint32(Xu - 4),
        ju = bu.get(Eu);
      return ju.used = !0, ju.target
    }, gu[115] = () => new Set(mu());
    const jE = ["Int8", "Uint8", "Uint8Clamped", "Int16", "Uint16", "Int32", "Uint32", "Float32", "Float64", "BigInt64", "BigUint64"].map((uu => uu + "Array"));
    let sE = "object" === typeof globalThis ? globalThis : window;
    gu[116] = uu => {
      let Eu = uu[0],
        ju = jE[Eu];
      if (!ju) {
        if (16 === Eu) {
          let Eu = new ArrayBuffer(uu.length - 1);
          return new Uint8Array(Eu).set(uu.subarray(1)), Eu
        }
        throw new Error("Could not find typed array for code " + Eu)
      }
      return new sE[ju](Uint8Array.prototype.slice.call(uu, 1).buffer)
    }, gu[120] = () => {
      let uu = mu();
      return new RegExp(uu[0], uu[1])
    };
    const UE = [];

    function ZE(uu) {
      Ju && Ju();
      let Eu = Zu,
        ju = Xu,
        su = Ou,
        lu = hu,
        gu = Du,
        Mu = fu,
        eu = Nu,
        Gu = bu,
        pu = Cu,
        wu = new Uint8Array(Uu.slice(0, Zu)),
        au = qu,
        Pu = qu.slice(0, qu.length),
        ou = Yu,
        ku = du,
        mu = uu();
      return Zu = Eu, Xu = ju, Ou = su, hu = lu, Du = gu, fu = Mu, Nu = eu, bu = Gu, Cu = pu, Uu = wu, du = ku, (qu = au).splice(0, qu.length, ...Pu), Yu = ou, cu = new DataView(Uu.buffer, Uu.byteOffset, Uu.byteLength), mu
    }

    function XE() {
      Uu = null, bu = null, qu = null
    }
    gu[98] = uu => {
      let Eu = (uu[0] << 24) + (uu[1] << 16) + (uu[2] << 8) + uu[3],
        ju = Xu;
      return Xu += Eu - uu.length, Cu = UE, (Cu = [Hu(), Hu()]).position0 = 0, Cu.position1 = 0, Cu.postBundlePosition = Xu, Xu = ju, mu()
    }, gu[255] = uu => 4 == uu.length ? new Date(1e3 * (16777216 * uu[0] + (uu[1] << 16) + (uu[2] << 8) + uu[3])) : 8 == uu.length ? new Date(((uu[0] << 22) + (uu[1] << 14) + (uu[2] << 6) + (uu[3] >> 2)) / 1e6 + 1e3 * (4294967296 * (3 & uu[3]) + 16777216 * uu[4] + (uu[5] << 16) + (uu[6] << 8) + uu[7])) : 12 == uu.length ? new Date(((uu[0] << 24) + (uu[1] << 16) + (uu[2] << 8) + uu[3]) / 1e6 + 1e3 * ((128 & uu[4] ? -281474976710656 : 0) + 1099511627776 * uu[6] + 4294967296 * uu[7] + 16777216 * uu[8] + (uu[9] << 16) + (uu[10] << 8) + uu[11])) : new Date("invalid");
    const lE = new Array(147);
    for (let Uj = 0; Uj < 256; Uj++) lE[Uj] = +("1e" + Math.floor(45.15 - .30103 * Uj));
    const qE = Pu;
    var fE = new Pu({
      useRecords: !1
    });
    const CE = fE.unpack,
      bE = fE.unpackMultiple,
      cE = fE.unpack,
      NE = {
        NEVER: 0,
        ALWAYS: 1,
        DECIMAL_ROUND: 3,
        DECIMAL_FIT: 4
      };
    let OE, YE, hE, DE = new Float32Array(1),
      gE = new Uint8Array(DE.buffer, 0, 4);

    function ME(uu) {
      DE[0] = uu;
      let Eu = lE[(127 & gE[3]) << 1 | gE[2] >> 7];
      return (Eu * uu + (uu > 0 ? .5 : -.5) | 0) / Eu
    }
    try {
      OE = new TextEncoder
    } catch (sj) {}
    const eE = "undefined" !== typeof Buffer,
      GE = eE ? function(uu) {
        return Buffer.allocUnsafeSlow(uu)
      } : Uint8Array,
      pE = eE ? Buffer : Uint8Array,
      wE = eE ? 4294967296 : 2144337920;
    let JE, dE, aE, PE, oE, kE = 0,
      mE = null;
    const vE = /[\u0080-\uFFFF]/,
      KE = Symbol("record-id");
    class VE extends Pu {
      constructor(uu) {
        let Eu, ju, su, Uu;
        super(uu), this.offset = 0;
        let Zu = pE.prototype.utf8Write ? function(uu, Eu) {
            return JE.utf8Write(uu, Eu, JE.byteLength - Eu)
          } : !(!OE || !OE.encodeInto) && function(uu, Eu) {
            return OE.encodeInto(uu, JE.subarray(Eu)).written
          },
          Xu = this;
        uu || (uu = {});
        let lu = uu && uu.sequential,
          qu = uu.structures || uu.saveStructures,
          fu = uu.maxSharedStructures;
        if (null == fu && (fu = qu ? 32 : 0), fu > 8160) throw new Error("Maximum maxSharedStructure is 8160");
        uu.structuredClone && void 0 == uu.moreTypes && (this.moreTypes = !0);
        let Cu = uu.maxOwnStructures;
        null == Cu && (Cu = qu ? 32 : 64), this.structures || 0 == uu.useRecords || (this.structures = []);
        let bu = fu > 32 || Cu + fu > 64,
          cu = fu + 64,
          Nu = fu + Cu + 64;
        if (Nu > 8256) throw new Error("Maximum maxSharedStructure + maxOwnStructure is 8192");
        let Ou = [],
          Yu = 0,
          hu = 0;
        this.pack = this.encode = function(uu, Zu) {
          if (JE || (JE = new GE(8192), aE = JE.dataView || (JE.dataView = new DataView(JE.buffer, 0, 8192)), kE = 0), PE = JE.length - 10, PE - kE < 2048 ? (JE = new GE(JE.length), aE = JE.dataView || (JE.dataView = new DataView(JE.buffer, 0, JE.length)), PE = JE.length - 10, kE = 0) : kE = kE + 7 & 2147483640, Eu = kE, Zu & zE && (kE += 255 & Zu), Uu = Xu.structuredClone ? new Map : null, Xu.bundleStrings && "string" !== typeof uu ? (mE = [], mE.size = 1 / 0) : mE = null, su = Xu.structures, su) {
            su.uninitialized && (su = Xu._mergeStructures(Xu.getStructures()));
            let uu = su.sharedLength || 0;
            if (uu > fu) throw new Error("Shared structures is larger than maximum shared structures, try increasing maxSharedStructures to " + su.sharedLength);
            if (!su.transitions) {
              su.transitions = Object.create(null);
              for (let Eu = 0; Eu < uu; Eu++) {
                let uu = su[Eu];
                if (!uu) continue;
                let ju, Uu = su.transitions;
                for (let Eu = 0, su = uu.length; Eu < su; Eu++) {
                  let su = uu[Eu];
                  ju = Uu[su], ju || (ju = Uu[su] = Object.create(null)), Uu = ju
                }
                Uu[KE] = Eu + 64
              }
              this.lastNamedStructuresLength = uu
            }
            lu || (su.nextId = uu + 64)
          }
          let qu;
          ju && (ju = !1);
          try {
            Xu.randomAccessStructure && uu && uu.constructor && uu.constructor === Object ? Pu(uu) : Mu(uu);
            let ju = mE;
            if (mE && WE(Eu, Mu, 0), Uu && Uu.idsToInsert) {
              let uu = Uu.idsToInsert.sort(((uu, Eu) => uu.offset > Eu.offset ? 1 : -1)),
                su = uu.length,
                Zu = -1;
              for (; ju && su > 0;) {
                let Uu = uu[--su].offset + Eu;
                Uu < ju.stringsPosition + Eu && -1 === Zu && (Zu = 0), Uu > ju.position + Eu ? Zu >= 0 && (Zu += 6) : (Zu >= 0 && (aE.setUint32(ju.position + Eu, aE.getUint32(ju.position + Eu) + Zu), Zu = -1), ju = ju.previous, su++)
              }
              Zu >= 0 && ju && aE.setUint32(ju.position + Eu, aE.getUint32(ju.position + Eu) + Zu), kE += 6 * uu.length, kE > PE && Ju(kE), Xu.offset = kE;
              let lu = function(uu, Eu) {
                let ju, su = 6 * Eu.length,
                  Uu = uu.length - su;
                for (; ju = Eu.pop();) {
                  let Eu = ju.offset,
                    Zu = ju.id;
                  uu.copyWithin(Eu + su, Eu, Uu), su -= 6;
                  let Xu = Eu + su;
                  uu[Xu++] = 214, uu[Xu++] = 105, uu[Xu++] = Zu >> 24, uu[Xu++] = Zu >> 16 & 255, uu[Xu++] = Zu >> 8 & 255, uu[Xu++] = 255 & Zu, Uu = Eu
                }
                return uu
              }(JE.subarray(Eu, kE), uu);
              return Uu = null, lu
            }
            return Xu.offset = kE, Zu & nE ? (JE.start = Eu, JE.end = kE, JE) : JE.subarray(Eu, kE)
          } catch (sj) {
            throw qu = sj, sj
          } finally {
            if (su && (Du(), ju && Xu.saveStructures)) {
              let ju = su.sharedLength || 0,
                Uu = JE.subarray(Eu, kE),
                lu = IE(su, Xu);
              if (!qu) return !1 === Xu.saveStructures(lu, lu.isCompatible) ? Xu.pack(uu, Zu) : (Xu.lastNamedStructuresLength = ju, JE.length > 1073741824 && (JE = null), Uu)
            }
            JE.length > 1073741824 && (JE = null), Zu & yE && (kE = Eu)
          }
        };
        const Du = () => {
            hu < 10 && hu++;
            let uu = su.sharedLength || 0;
            if (su.length > uu && !lu && (su.length = uu), Yu > 1e4) su.transitions = null, hu = 0, Yu = 0, Ou.length > 0 && (Ou = []);
            else if (Ou.length > 0 && !lu) {
              for (let uu = 0, Eu = Ou.length; uu < Eu; uu++) Ou[uu][KE] = 0;
              Ou = []
            }
          },
          gu = uu => {
            var Eu = uu.length;
            Eu < 16 ? JE[kE++] = 144 | Eu : Eu < 65536 ? (JE[kE++] = 220, JE[kE++] = Eu >> 8, JE[kE++] = 255 & Eu) : (JE[kE++] = 221, aE.setUint32(kE, Eu), kE += 4);
            for (let ju = 0; ju < Eu; ju++) Mu(uu[ju])
          },
          Mu = uu => {
            kE > PE && (JE = Ju(kE));
            var ju, su = typeof uu;
            if ("string" === su) {
              let su, Uu = uu.length;
              if (mE && Uu >= 4 && Uu < 4096) {
                if ((mE.size += Uu) > 21760) {
                  let uu, ju, su = (mE[0] ? 3 * mE[0].length + mE[1].length : 0) + 10;
                  kE + su > PE && (JE = Ju(kE + su)), mE.position ? (ju = mE, JE[kE] = 200, kE += 3, JE[kE++] = 98, uu = kE - Eu, kE += 4, WE(Eu, Mu, 0), aE.setUint16(uu + Eu - 3, kE - Eu - uu)) : (JE[kE++] = 214, JE[kE++] = 98, uu = kE - Eu, kE += 4), mE = ["", ""], mE.previous = ju, mE.size = 0, mE.position = uu
                }
                let ju = vE.test(uu);
                return mE[ju ? 0 : 1] += uu, JE[kE++] = 193, void Mu(ju ? -Uu : Uu)
              }
              su = Uu < 32 ? 1 : Uu < 256 ? 2 : Uu < 65536 ? 3 : 5;
              let Xu = 3 * Uu;
              if (kE + Xu > PE && (JE = Ju(kE + Xu)), Uu < 64 || !Zu) {
                let Eu, Zu, Xu, lu = kE + su;
                for (Eu = 0; Eu < Uu; Eu++) Zu = uu.charCodeAt(Eu), Zu < 128 ? JE[lu++] = Zu : Zu < 2048 ? (JE[lu++] = Zu >> 6 | 192, JE[lu++] = 63 & Zu | 128) : 55296 === (64512 & Zu) && 56320 === (64512 & (Xu = uu.charCodeAt(Eu + 1))) ? (Zu = 65536 + ((1023 & Zu) << 10) + (1023 & Xu), Eu++, JE[lu++] = Zu >> 18 | 240, JE[lu++] = Zu >> 12 & 63 | 128, JE[lu++] = Zu >> 6 & 63 | 128, JE[lu++] = 63 & Zu | 128) : (JE[lu++] = Zu >> 12 | 224, JE[lu++] = Zu >> 6 & 63 | 128, JE[lu++] = 63 & Zu | 128);
                ju = lu - kE - su
              } else ju = Zu(uu, kE + su);
              ju < 32 ? JE[kE++] = 160 | ju : ju < 256 ? (su < 2 && JE.copyWithin(kE + 2, kE + 1, kE + 1 + ju), JE[kE++] = 217, JE[kE++] = ju) : ju < 65536 ? (su < 3 && JE.copyWithin(kE + 3, kE + 2, kE + 2 + ju), JE[kE++] = 218, JE[kE++] = ju >> 8, JE[kE++] = 255 & ju) : (su < 5 && JE.copyWithin(kE + 5, kE + 3, kE + 3 + ju), JE[kE++] = 219, aE.setUint32(kE, ju), kE += 4), kE += ju
            } else if ("number" === su)
              if (uu >>> 0 === uu) uu < 32 || uu < 128 && !1 === this.useRecords || uu < 64 && !this.randomAccessStructure ? JE[kE++] = uu : uu < 256 ? (JE[kE++] = 204, JE[kE++] = uu) : uu < 65536 ? (JE[kE++] = 205, JE[kE++] = uu >> 8, JE[kE++] = 255 & uu) : (JE[kE++] = 206, aE.setUint32(kE, uu), kE += 4);
              else if ((uu | 0) === uu) uu >= -32 ? JE[kE++] = 256 + uu : uu >= -128 ? (JE[kE++] = 208, JE[kE++] = uu + 256) : uu >= -32768 ? (JE[kE++] = 209, aE.setInt16(kE, uu), kE += 2) : (JE[kE++] = 210, aE.setInt32(kE, uu), kE += 4);
            else {
              let Eu;
              if ((Eu = this.useFloat32) > 0 && uu < 4294967296 && uu >= -2147483648) {
                let ju;
                if (JE[kE++] = 202, aE.setFloat32(kE, uu), Eu < 4 || ((ju = uu * lE[(127 & JE[kE]) << 1 | JE[kE + 1] >> 7]) | 0) === ju) return void(kE += 4);
                kE--
              }
              JE[kE++] = 203, aE.setFloat64(kE, uu), kE += 8
            } else if ("object" === su || "function" === su)
              if (uu) {
                if (Uu) {
                  let ju = Uu.get(uu);
                  if (ju) {
                    if (!ju.id) {
                      let uu = Uu.idsToInsert || (Uu.idsToInsert = []);
                      ju.id = uu.push(ju)
                    }
                    return JE[kE++] = 214, JE[kE++] = 112, aE.setUint32(kE, ju.id), void(kE += 4)
                  }
                  Uu.set(uu, {
                    offset: kE - Eu
                  })
                }
                let Zu = uu.constructor;
                if (Zu === Object) wu(uu);
                else if (Zu === Array) gu(uu);
                else if (Zu === Map)
                  if (this.mapAsEmptyObject) JE[kE++] = 128;
                  else {
                    (ju = uu.size) < 16 ? JE[kE++] = 128 | ju : ju < 65536 ? (JE[kE++] = 222, JE[kE++] = ju >> 8, JE[kE++] = 255 & ju) : (JE[kE++] = 223, aE.setUint32(kE, ju), kE += 4);
                    for (let [Eu, ju] of uu) Mu(Eu), Mu(ju)
                  }
                else {
                  for (let Eu = 0, ju = YE.length; Eu < ju; Eu++) {
                    if (uu instanceof hE[Eu]) {
                      let ju = YE[Eu];
                      if (ju.write) {
                        ju.type && (JE[kE++] = 212, JE[kE++] = ju.type, JE[kE++] = 0);
                        let Eu = ju.write.call(this, uu);
                        return void(Eu === uu ? Array.isArray(uu) ? gu(uu) : wu(uu) : Mu(Eu))
                      }
                      let su, Uu = JE,
                        Zu = aE,
                        Xu = kE;
                      JE = null;
                      try {
                        su = ju.pack.call(this, uu, (uu => (JE = Uu, Uu = null, kE += uu, kE > PE && Ju(kE), {
                          target: JE,
                          targetView: aE,
                          position: kE - uu
                        })), Mu)
                      } finally {
                        Uu && (JE = Uu, aE = Zu, kE = Xu, PE = JE.length - 10)
                      }
                      return void(su && (su.length + kE > PE && Ju(su.length + kE), kE = iE(su, JE, kE, ju.type)))
                    }
                  }
                  if (Array.isArray(uu)) gu(uu);
                  else {
                    if (uu.toJSON) {
                      const Eu = uu.toJSON();
                      if (Eu !== uu) return Mu(Eu)
                    }
                    if ("function" === su) return Mu(this.writeFunction && this.writeFunction(uu));
                    wu(uu)
                  }
                }
              } else JE[kE++] = 192;
            else if ("boolean" === su) JE[kE++] = uu ? 195 : 194;
            else if ("bigint" === su) {
              if (uu < BigInt(1) << BigInt(63) && uu >= -(BigInt(1) << BigInt(63))) JE[kE++] = 211, aE.setBigInt64(kE, uu);
              else if (uu < BigInt(1) << BigInt(64) && uu > 0) JE[kE++] = 207, aE.setBigUint64(kE, uu);
              else {
                if (!this.largeBigIntToFloat) {
                  if (this.largeBigIntToString) return Mu(uu.toString());
                  if (this.useBigIntExtension && uu < BigInt(2) ** BigInt(1023) && uu > -(BigInt(2) ** BigInt(1023))) {
                    JE[kE++] = 199, kE++, JE[kE++] = 66;
                    let Eu, ju = [];
                    do {
                      let su = uu & BigInt(255);
                      Eu = (su & BigInt(128)) === (uu < BigInt(0) ? BigInt(128) : BigInt(0)), ju.push(su), uu >>= BigInt(8)
                    } while (uu !== BigInt(0) && uu !== BigInt(-1) || !Eu);
                    JE[kE - 2] = ju.length;
                    for (let uu = ju.length; uu > 0;) JE[kE++] = Number(ju[--uu]);
                    return
                  }
                  throw new RangeError(uu + " was too large to fit in MessagePack 64-bit integer format, use useBigIntExtension, or set largeBigIntToFloat to convert to float-64, or set largeBigIntToString to convert to string")
                }
                JE[kE++] = 203, aE.setFloat64(kE, Number(uu))
              }
              kE += 8
            } else {
              if ("undefined" !== su) throw new Error("Unknown type: " + su);
              this.encodeUndefinedAsNil ? JE[kE++] = 192 : (JE[kE++] = 212, JE[kE++] = 0, JE[kE++] = 0)
            }
          },
          eu = this.variableMapSize || this.coercibleKeyAsNumber || this.skipValues ? uu => {
            let Eu;
            if (this.skipValues) {
              Eu = [];
              for (let ju in uu) "function" === typeof uu.hasOwnProperty && !uu.hasOwnProperty(ju) || this.skipValues.includes(uu[ju]) || Eu.push(ju)
            } else Eu = Object.keys(uu);
            let ju, su = Eu.length;
            if (su < 16 ? JE[kE++] = 128 | su : su < 65536 ? (JE[kE++] = 222, JE[kE++] = su >> 8, JE[kE++] = 255 & su) : (JE[kE++] = 223, aE.setUint32(kE, su), kE += 4), this.coercibleKeyAsNumber)
              for (let Uu = 0; Uu < su; Uu++) {
                ju = Eu[Uu];
                let su = Number(ju);
                Mu(isNaN(su) ? ju : su), Mu(uu[ju])
              } else
                for (let Uu = 0; Uu < su; Uu++) Mu(ju = Eu[Uu]), Mu(uu[ju])
          } : uu => {
            JE[kE++] = 222;
            let ju = kE - Eu;
            kE += 2;
            let su = 0;
            for (let Eu in uu)("function" !== typeof uu.hasOwnProperty || uu.hasOwnProperty(Eu)) && (Mu(Eu), Mu(uu[Eu]), su++);
            if (su > 65535) throw new Error('Object is too large to serialize with fast 16-bit map size, use the "variableMapSize" option to serialize this object');
            JE[ju++ + Eu] = su >> 8, JE[ju + Eu] = 255 & su
          },
          Gu = !1 === this.useRecords ? eu : uu.progressiveRecords && !bu ? uu => {
            let ju, Uu, Zu = su.transitions || (su.transitions = Object.create(null)),
              Xu = kE++ - Eu;
            for (let lu in uu)
              if ("function" !== typeof uu.hasOwnProperty || uu.hasOwnProperty(lu)) {
                if (ju = Zu[lu], ju) Zu = ju;
                else {
                  let qu = Object.keys(uu),
                    fu = Zu;
                  Zu = su.transitions;
                  let Cu = 0;
                  for (let uu = 0, Eu = qu.length; uu < Eu; uu++) {
                    let Eu = qu[uu];
                    ju = Zu[Eu], ju || (ju = Zu[Eu] = Object.create(null), Cu++), Zu = ju
                  }
                  Xu + Eu + 1 == kE ? (kE--, du(Zu, qu, Cu)) : au(Zu, qu, Xu, Cu), Uu = !0, Zu = fu[lu]
                }
                Mu(uu[lu])
              } if (!Uu) {
              let ju = Zu[KE];
              ju ? JE[Xu + Eu] = ju : au(Zu, Object.keys(uu), Xu, 0)
            }
          } : uu => {
            let Eu, ju = su.transitions || (su.transitions = Object.create(null)),
              Uu = 0;
            for (let su in uu)("function" !== typeof uu.hasOwnProperty || uu.hasOwnProperty(su)) && (Eu = ju[su], Eu || (Eu = ju[su] = Object.create(null), Uu++), ju = Eu);
            let Zu = ju[KE];
            Zu ? Zu >= 96 && bu ? (JE[kE++] = 96 + (31 & (Zu -= 96)), JE[kE++] = Zu >> 5) : JE[kE++] = Zu : du(ju, ju.__keys__ || Object.keys(uu), Uu);
            for (let su in uu)("function" !== typeof uu.hasOwnProperty || uu.hasOwnProperty(su)) && Mu(uu[su])
          },
          pu = "function" == typeof this.useRecords && this.useRecords,
          wu = pu ? uu => {
            pu(uu) ? Gu(uu) : eu(uu)
          } : Gu,
          Ju = uu => {
            let ju;
            if (uu > 16777216) {
              if (uu - Eu > wE) throw new Error("Packed buffer would be larger than maximum buffer size");
              ju = Math.min(wE, 4096 * Math.round(Math.max((uu - Eu) * (uu > 67108864 ? 1.25 : 2), 4194304) / 4096))
            } else ju = 1 + (Math.max(uu - Eu << 2, JE.length - 1) >> 12) << 12;
            let su = new GE(ju);
            return aE = su.dataView || (su.dataView = new DataView(su.buffer, 0, ju)), uu = Math.min(uu, JE.length), JE.copy ? JE.copy(su, 0, Eu, uu) : su.set(JE.slice(Eu, uu)), kE -= Eu, Eu = 0, PE = su.length - 10, JE = su
          },
          du = (uu, Eu, Uu) => {
            let Zu = su.nextId;
            Zu || (Zu = 64), Zu < cu && this.shouldShareStructure && !this.shouldShareStructure(Eu) ? (Zu = su.nextOwnId, Zu < Nu || (Zu = cu), su.nextOwnId = Zu + 1) : (Zu >= Nu && (Zu = cu), su.nextId = Zu + 1);
            let Xu = Eu.highByte = Zu >= 96 && bu ? Zu - 96 >> 5 : -1;
            uu[KE] = Zu, uu.__keys__ = Eu, su[Zu - 64] = Eu, Zu < cu ? (Eu.isShared = !0, su.sharedLength = Zu - 63, ju = !0, Xu >= 0 ? (JE[kE++] = 96 + (31 & Zu), JE[kE++] = Xu) : JE[kE++] = Zu) : (Xu >= 0 ? (JE[kE++] = 213, JE[kE++] = 114, JE[kE++] = 96 + (31 & Zu), JE[kE++] = Xu) : (JE[kE++] = 212, JE[kE++] = 114, JE[kE++] = Zu), Uu && (Yu += hu * Uu), Ou.length >= Cu && (Ou.shift()[KE] = 0), Ou.push(uu), Mu(Eu))
          },
          au = (uu, ju, su, Uu) => {
            let Zu = JE,
              Xu = kE,
              lu = PE,
              qu = Eu;
            JE = dE, kE = 0, Eu = 0, JE || (dE = JE = new GE(8192)), PE = JE.length - 10, du(uu, ju, Uu), dE = JE;
            let fu = kE;
            if (JE = Zu, kE = Xu, PE = lu, Eu = qu, fu > 1) {
              let uu = kE + fu - 1;
              uu > PE && Ju(uu);
              let ju = su + Eu;
              JE.copyWithin(ju + fu, ju + 1, kE), JE.set(dE.slice(0, fu), ju), kE = uu
            } else JE[su + Eu] = dE[0]
          },
          Pu = uu => {
            let Uu = oE(uu, JE, Eu, kE, su, Ju, ((uu, Eu, su) => {
              if (su) return ju = !0;
              kE = Eu;
              let Uu = JE;
              return Mu(uu), Du(), Uu !== JE ? {
                position: kE,
                targetView: aE,
                target: JE
              } : kE
            }), this);
            if (0 === Uu) return wu(uu);
            kE = Uu
          }
      }
      useBuffer(uu) {
        JE = uu, aE = JE.dataView || (JE.dataView = new DataView(JE.buffer, JE.byteOffset, JE.byteLength)), kE = 0
      }
      set position(uu) {
        kE = uu
      }
      get position() {
        return kE
      }
      set buffer(uu) {
        JE = uu
      }
      get buffer() {
        return JE
      }
      clearSharedData() {
        this.structures && (this.structures = []), this.typedStructs && (this.typedStructs = [])
      }
    }

    function rE(uu, Eu, ju, su) {
      let Uu = uu.byteLength;
      if (Uu + 1 < 256) {
        var {
          target: Zu,
          position: Xu
        } = ju(4 + Uu);
        Zu[Xu++] = 199, Zu[Xu++] = Uu + 1
      } else if (Uu + 1 < 65536) {
        var {
          target: Zu,
          position: Xu
        } = ju(5 + Uu);
        Zu[Xu++] = 200, Zu[Xu++] = Uu + 1 >> 8, Zu[Xu++] = Uu + 1 & 255
      } else {
        var {
          target: Zu,
          position: Xu,
          targetView: lu
        } = ju(7 + Uu);
        Zu[Xu++] = 201, lu.setUint32(Xu, Uu + 1), Xu += 4
      }
      Zu[Xu++] = 116, Zu[Xu++] = Eu, uu.buffer || (uu = new Uint8Array(uu)), Zu.set(new Uint8Array(uu.buffer, uu.byteOffset, uu.byteLength), Xu)
    }

    function QE(uu, Eu) {
      let ju = uu.byteLength;
      var su, Uu;
      if (ju < 256) {
        var {
          target: su,
          position: Uu
        } = Eu(ju + 2);
        su[Uu++] = 196, su[Uu++] = ju
      } else if (ju < 65536) {
        var {
          target: su,
          position: Uu
        } = Eu(ju + 3);
        su[Uu++] = 197, su[Uu++] = ju >> 8, su[Uu++] = 255 & ju
      } else {
        var {
          target: su,
          position: Uu,
          targetView: Zu
        } = Eu(ju + 5);
        su[Uu++] = 198, Zu.setUint32(Uu, ju), Uu += 4
      }
      su.set(uu, Uu)
    }

    function iE(uu, Eu, ju, su) {
      let Uu = uu.length;
      switch (Uu) {
        case 1:
          Eu[ju++] = 212;
          break;
        case 2:
          Eu[ju++] = 213;
          break;
        case 4:
          Eu[ju++] = 214;
          break;
        case 8:
          Eu[ju++] = 215;
          break;
        case 16:
          Eu[ju++] = 216;
          break;
        default:
          Uu < 256 ? (Eu[ju++] = 199, Eu[ju++] = Uu) : Uu < 65536 ? (Eu[ju++] = 200, Eu[ju++] = Uu >> 8, Eu[ju++] = 255 & Uu) : (Eu[ju++] = 201, Eu[ju++] = Uu >> 24, Eu[ju++] = Uu >> 16 & 255, Eu[ju++] = Uu >> 8 & 255, Eu[ju++] = 255 & Uu)
      }
      return Eu[ju++] = su, Eu.set(uu, ju), ju += Uu
    }

    function WE(uu, Eu, ju) {
      if (mE.length > 0) {
        aE.setUint32(mE.position + uu, kE + ju - mE.position - uu), mE.stringsPosition = kE - uu;
        let su = mE;
        mE = null, Eu(su[0]), Eu(su[1])
      }
    }

    function SE(uu) {
      if (uu.Class) {
        if (!uu.pack && !uu.write) throw new Error("Extension has no pack or write function");
        if (uu.pack && !uu.type) throw new Error("Extension has no type (numeric code to identify the extension)");
        hE.unshift(uu.Class), YE.unshift(uu)
      }! function(uu) {
        uu.unpack ? gu[uu.type] = uu.unpack : gu[uu.type] = uu
      }(uu)
    }

    function IE(uu, Eu) {
      return uu.isCompatible = uu => {
        let ju = !uu || (Eu.lastNamedStructuresLength || 0) === uu.length;
        return ju || Eu._mergeStructures(uu), ju
      }, uu
    }
    hE = [Date, Set, Error, RegExp, ArrayBuffer, Object.getPrototypeOf(Uint8Array.prototype).constructor, eu], YE = [{
      pack(uu, Eu, ju) {
        let su = uu.getTime() / 1e3;
        if ((this.useTimestamp32 || 0 === uu.getMilliseconds()) && su >= 0 && su < 4294967296) {
          let {
            target: uu,
            targetView: ju,
            position: Uu
          } = Eu(6);
          uu[Uu++] = 214, uu[Uu++] = 255, ju.setUint32(Uu, su)
        } else if (su > 0 && su < 4294967296) {
          let {
            target: ju,
            targetView: Uu,
            position: Zu
          } = Eu(10);
          ju[Zu++] = 215, ju[Zu++] = 255, Uu.setUint32(Zu, 4e6 * uu.getMilliseconds() + (su / 1e3 / 4294967296 | 0)), Uu.setUint32(Zu + 4, su)
        } else if (isNaN(su)) {
          if (this.onInvalidDate) return Eu(0), ju(this.onInvalidDate());
          let {
            target: uu,
            targetView: su,
            position: Uu
          } = Eu(3);
          uu[Uu++] = 212, uu[Uu++] = 255, uu[Uu++] = 255
        } else {
          let {
            target: ju,
            targetView: Uu,
            position: Zu
          } = Eu(15);
          ju[Zu++] = 199, ju[Zu++] = 12, ju[Zu++] = 255, Uu.setUint32(Zu, 1e6 * uu.getMilliseconds()), Uu.setBigInt64(Zu + 4, BigInt(Math.floor(su)))
        }
      }
    }, {
      pack(uu, Eu, ju) {
        if (this.setAsEmptyObject) return Eu(0), ju({});
        let su = Array.from(uu),
          {
            target: Uu,
            position: Zu
          } = Eu(this.moreTypes ? 3 : 0);
        this.moreTypes && (Uu[Zu++] = 212, Uu[Zu++] = 115, Uu[Zu++] = 0), ju(su)
      }
    }, {
      pack(uu, Eu, ju) {
        let {
          target: su,
          position: Uu
        } = Eu(this.moreTypes ? 3 : 0);
        this.moreTypes && (su[Uu++] = 212, su[Uu++] = 101, su[Uu++] = 0), ju([uu.name, uu.message, uu.cause])
      }
    }, {
      pack(uu, Eu, ju) {
        let {
          target: su,
          position: Uu
        } = Eu(this.moreTypes ? 3 : 0);
        this.moreTypes && (su[Uu++] = 212, su[Uu++] = 120, su[Uu++] = 0), ju([uu.source, uu.flags])
      }
    }, {
      pack(uu, Eu) {
        this.moreTypes ? rE(uu, 16, Eu) : QE(eE ? Buffer.from(uu) : new Uint8Array(uu), Eu)
      }
    }, {
      pack(uu, Eu) {
        let ju = uu.constructor;
        ju !== pE && this.moreTypes ? rE(uu, jE.indexOf(ju.name), Eu) : QE(uu, Eu)
      }
    }, {
      pack(uu, Eu) {
        let {
          target: ju,
          position: su
        } = Eu(1);
        ju[su] = 193
      }
    }];
    let FE = new VE({
      useRecords: !1
    });
    const BE = FE.pack,
      LE = FE.pack,
      tE = VE,
      {
        NEVER: xE,
        ALWAYS: TE,
        DECIMAL_ROUND: HE,
        DECIMAL_FIT: AE
      } = NE,
      nE = 512,
      yE = 1024,
      zE = 2048;
    const RE = function(uu) {
        let Eu = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        if (!uu || "object" !== typeof uu) throw new Error("first argument must be an Iterable, Async Iterable, Iterator, Async Iterator, or a promise");
        const ju = new Pu(Eu);
        let su;
        const Uu = uu => {
          let Eu;
          su && (uu = Buffer.concat([su, uu]), su = void 0);
          try {
            Eu = ju.unpackMultiple(uu)
          } catch (Uu) {
            if (!Uu.incomplete) throw Uu;
            su = uu.slice(Uu.lastPosition), Eu = Uu.values
          }
          return Eu
        };
        return "function" === typeof uu[Symbol.iterator] ? function*() {
          for (const Eu of uu) yield* Uu(Eu)
        }() : "function" === typeof uu[Symbol.asyncIterator] ? async function*() {
          for await (const Eu of uu) yield* Uu(Eu)
        }(): void 0
      },
      uj = function(uu) {
        let Eu = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        if (uu && "object" === typeof uu) {
          if ("function" === typeof uu[Symbol.iterator]) return function*(uu, Eu) {
            const ju = new VE(Eu);
            for (const su of uu) yield ju.pack(su)
          }(uu, Eu);
          if ("function" === typeof uu.then || "function" === typeof uu[Symbol.asyncIterator]) return async function*(uu, Eu) {
            const ju = new VE(Eu);
            for await (const su of uu) yield ju.pack(su)
          }(uu, Eu);
          throw new Error("first argument must be an Iterable, Async Iterable, Iterator, Async Iterator, or a Promise")
        }
        throw new Error("first argument must be an Iterable, Async Iterable, or a Promise for an Async Iterable")
      },
      Ej = !1,
      jj = !0
  },
  9329: (uu, Eu, ju) => {
    ju.r(Eu), ju.d(Eu, {
      $changes: () => Yu,
      $childType: () => hu,
      $decoder: () => Cu,
      $deleteByIndex: () => Nu,
      $encoder: () => fu,
      $filter: () => bu,
      $getByIndex: () => cu,
      $numFields: () => au,
      $refId: () => lu,
      $track: () => qu,
      $values: () => Gu,
      ArraySchema: () => ss,
      Callbacks: () => UU,
      ChangeTree: () => kj,
      CollectionSchema: () => Xs,
      Decoder: () => ns,
      Encoder: () => xs,
      FieldBuilder: () => fs,
      MapSchema: () => Zs,
      Metadata: () => HE,
      OPERATION: () => Uu,
      Reflection: () => uU,
      ReflectionField: () => zs,
      ReflectionType: () => Rs,
      Root: () => Ks,
      Schema: () => ms,
      SetSchema: () => ls,
      StateCallbackStrategy: () => sU,
      StateView: () => Ws,
      StreamSchema: () => qs,
      TypeContext: () => IE,
      createPool: () => XU,
      decode: () => ME,
      decodeKeyValueOperation: () => nj,
      decodeSchemaOperation: () => Aj,
      defineCustomTypes: () => wE,
      defineTypes: () => Ps,
      deprecated: () => ds,
      dumpChanges: () => ks,
      encode: () => EE,
      encodeArray: () => Wj,
      encodeIndexedEntry: () => Qj,
      encodeKeyValueOperation: () => ij,
      encodeMapEntry: () => rj,
      encodeSchemaOperation: () => Vj,
      jO: () => hs,
      fullStateOnly: () => es,
      getDecoderStateCallbacks: () => EU,
      getEncodeDescriptor: () => uj,
      getRawChangesCallback: () => jU,
      isBuilder: () => Cs,
      patchOnly: () => Ms,
      registerType: () => pE,
      schema: () => os,
      t: () => Os,
      type: () => Gs,
      unreliable: () => gs,
      view: () => Ds
    });
    const su = 255;
    var Uu;

    function Zu(uu) {
      Object.defineProperty(uu, Symbol.metadata, {
        value: void 0,
        writable: !0,
        configurable: !0,
        enumerable: !1
      })
    }! function(uu) {
      uu[uu.ADD = 128] = "ADD", uu[uu.REPLACE = 0] = "REPLACE", uu[uu.DELETE = 64] = "DELETE", uu[uu.DELETE_AND_MOVE = 96] = "DELETE_AND_MOVE", uu[uu.MOVE_AND_ADD = 160] = "MOVE_AND_ADD", uu[uu.DELETE_AND_ADD = 192] = "DELETE_AND_ADD", uu[uu.CLEAR = 10] = "CLEAR", uu[uu.REVERSE = 15] = "REVERSE", uu[uu.MOVE = 32] = "MOVE", uu[uu.DELETE_BY_REFID = 33] = "DELETE_BY_REFID", uu[uu.ADD_BY_REFID = 129] = "ADD_BY_REFID"
    }(Uu || (Uu = {})), Symbol.metadata ??= Symbol.for("Symbol.metadata");
    const Xu = "undefined" !== typeof globalThis ? globalThis : "undefined" !== typeof global ? global : "undefined" !== typeof self ? self : "undefined" !== typeof window ? window : {};
    if ("function" === typeof Symbol && "function" !== typeof Symbol.for) {
      const uu = "colyseus.symbolRegistry",
        Eu = Xu[uu] || (Xu[uu] = Object.create(null));
      Symbol.for = function(uu) {
        return Eu[uu] || (Eu[uu] = Symbol(uu))
      }, Symbol.keyFor = function(uu) {
        for (const ju in Eu)
          if (Eu[ju] === uu) return ju
      }
    }
    const lu = Symbol.for("$refId"),
      qu = "~track",
      fu = "~encoder",
      Cu = "~decoder",
      bu = "~filter",
      cu = "~getByIndex",
      Nu = "~deleteByIndex",
      Ou = "~resyncPrune",
      Yu = Symbol.for("$changes"),
      hu = Symbol.for("$childType"),
      Du = Symbol.for("$proxyTarget"),
      gu = "~onEncodeEnd",
      Mu = "~reset",
      eu = "~onDecodeEnd",
      Gu = Symbol.for("$values"),
      pu = "~builder",
      wu = "~descriptors",
      Ju = "~__encodeDescriptor",
      du = "~encoders",
      au = "~__numFields",
      Pu = "~__refTypeFieldIndexes",
      ou = "~__viewFieldIndexes",
      ku = "$__fieldIndexesByViewTag",
      mu = "~__unreliableFieldIndexes",
      vu = "~__patchOnlyFieldIndexes",
      Ku = "~__fullSyncSkipIndexes",
      Vu = "~__fullStateOnlyFieldIndexes",
      ru = "~__streamFieldIndexes",
      Qu = "~__streamPriorities";
    let iu;
    try {
      iu = new TextEncoder
    } catch (lU) {}
    const Wu = new ArrayBuffer(8),
      Su = new Int32Array(Wu),
      Iu = new Float32Array(Wu),
      Fu = new Float64Array(Wu),
      Bu = new BigInt64Array(Wu),
      Lu = "undefined" !== typeof Buffer && Buffer.byteLength ? Buffer.byteLength : function(uu, Eu) {
        for (var ju = 0, su = 0, Uu = 0, Zu = uu.length; Uu < Zu; Uu++)(ju = uu.charCodeAt(Uu)) < 128 ? su += 1 : ju < 2048 ? su += 2 : ju < 55296 || ju >= 57344 ? su += 3 : (Uu++, su += 4);
        return su
      };

    function tu(uu, Eu, ju) {
      for (var su = 0, Uu = 0, Zu = Eu.length; Uu < Zu; Uu++)(su = Eu.charCodeAt(Uu)) < 128 ? uu[ju.offset++] = su : su < 2048 ? (uu[ju.offset] = 192 | su >> 6, uu[ju.offset + 1] = 128 | 63 & su, ju.offset += 2) : su < 55296 || su >= 57344 ? (uu[ju.offset] = 224 | su >> 12, uu[ju.offset + 1] = 128 | su >> 6 & 63, uu[ju.offset + 2] = 128 | 63 & su, ju.offset += 3) : (Uu++, su = 65536 + ((1023 & su) << 10 | 1023 & Eu.charCodeAt(Uu)), uu[ju.offset] = 240 | su >> 18, uu[ju.offset + 1] = 128 | su >> 12 & 63, uu[ju.offset + 2] = 128 | su >> 6 & 63, uu[ju.offset + 3] = 128 | 63 & su, ju.offset += 4)
    }

    function xu(uu, Eu, ju) {
      uu[ju.offset++] = 255 & Eu
    }

    function Tu(uu, Eu, ju) {
      uu[ju.offset++] = 255 & Eu, uu[ju.offset++] = Eu >> 8 & 255
    }

    function Hu(uu, Eu, ju) {
      uu[ju.offset++] = 255 & Eu, uu[ju.offset++] = Eu >> 8 & 255
    }

    function Au(uu, Eu, ju) {
      uu[ju.offset++] = 255 & Eu, uu[ju.offset++] = Eu >> 8 & 255, uu[ju.offset++] = Eu >> 16 & 255, uu[ju.offset++] = Eu >> 24 & 255
    }

    function nu(uu, Eu, ju) {
      const su = Eu >> 24,
        Uu = Eu >> 16,
        Zu = Eu >> 8,
        Xu = Eu;
      uu[ju.offset++] = 255 & Xu, uu[ju.offset++] = 255 & Zu, uu[ju.offset++] = 255 & Uu, uu[ju.offset++] = 255 & su
    }

    function yu(uu, Eu, ju) {
      const su = Math.floor(Eu / Math.pow(2, 32));
      nu(uu, Eu >>> 0, ju), nu(uu, su, ju)
    }

    function zu(uu, Eu, ju) {
      const su = Eu / Math.pow(2, 32) | 0;
      nu(uu, Eu >>> 0, ju), nu(uu, su, ju)
    }

    function Ru(uu, Eu, ju) {
      Iu[0] = Eu, Au(uu, Su[0], ju)
    }

    function uE(uu, Eu, ju) {
      Fu[0] = Eu, Au(uu, Su[0], ju), Au(uu, Su[1], ju)
    }
    const EE = {
        int8: xu,
        uint8: function(uu, Eu, ju) {
          uu[ju.offset++] = 255 & Eu
        },
        int16: Tu,
        uint16: Hu,
        int32: Au,
        uint32: nu,
        int64: yu,
        uint64: zu,
        bigint64: function(uu, Eu, ju) {
          Bu[0] = BigInt.asIntN(64, Eu), Au(uu, Su[0], ju), Au(uu, Su[1], ju)
        },
        biguint64: function(uu, Eu, ju) {
          Bu[0] = BigInt.asIntN(64, Eu), Au(uu, Su[0], ju), Au(uu, Su[1], ju)
        },
        float32: Ru,
        float64: uE,
        boolean: function(uu, Eu, ju) {
          uu[ju.offset++] = Eu ? 1 : 0
        },
        string: function(uu, Eu, ju) {
          Eu || (Eu = "");
          let su = Lu(Eu, "utf8"),
            Uu = 0;
          if (su < 32) uu[ju.offset++] = 160 | su, Uu = 1;
          else if (su < 256) uu[ju.offset++] = 217, uu[ju.offset++] = su, Uu = 2;
          else if (su < 65536) uu[ju.offset++] = 218, Hu(uu, su, ju), Uu = 3;
          else {
            if (!(su < 4294967296)) throw new Error("String too long");
            uu[ju.offset++] = 219, nu(uu, su, ju), Uu = 5
          }
          return tu(uu, Eu, ju), Uu + su
        },
        number: function uu(Eu, ju, su) {
          return isNaN(ju) ? uu(Eu, 0, su) : isFinite(ju) ? ju !== (0 | ju) ? Math.abs(ju) <= 34028235e31 && (Iu[0] = ju, Math.abs(Math.abs(Iu[0]) - Math.abs(ju)) < 1e-4) ? (Eu[su.offset++] = 202, Ru(Eu, ju, su), 5) : (Eu[su.offset++] = 203, uE(Eu, ju, su), 9) : ju >= 0 ? ju < 128 ? (Eu[su.offset++] = 255 & ju, 1) : ju < 256 ? (Eu[su.offset++] = 204, Eu[su.offset++] = 255 & ju, 2) : ju < 65536 ? (Eu[su.offset++] = 205, Hu(Eu, ju, su), 3) : ju < 4294967296 ? (Eu[su.offset++] = 206, nu(Eu, ju, su), 5) : (Eu[su.offset++] = 207, zu(Eu, ju, su), 9) : ju >= -32 ? (Eu[su.offset++] = 224 | ju + 32, 1) : ju >= -128 ? (Eu[su.offset++] = 208, xu(Eu, ju, su), 2) : ju >= -32768 ? (Eu[su.offset++] = 209, Tu(Eu, ju, su), 3) : ju >= -2147483648 ? (Eu[su.offset++] = 210, Au(Eu, ju, su), 5) : (Eu[su.offset++] = 211, yu(Eu, ju, su), 9) : uu(Eu, ju > 0 ? Number.MAX_SAFE_INTEGER : -Number.MAX_SAFE_INTEGER, su)
        },
        utf8Write: tu,
        utf8Length: Lu
      },
      jE = new ArrayBuffer(8),
      sE = new Int32Array(jE),
      UE = new Float32Array(jE),
      ZE = new Float64Array(jE),
      XE = new BigUint64Array(jE),
      lE = new BigInt64Array(jE);

    function qE(uu, Eu, ju) {
      ju > uu.length - Eu.offset && (ju = uu.length - Eu.offset);
      for (var su = "", Uu = 0, Zu = Eu.offset, Xu = Eu.offset + ju; Zu < Xu; Zu++) {
        var lu = uu[Zu];
        if (0 !== (128 & lu))
          if (192 !== (224 & lu))
            if (224 !== (240 & lu)) {
              if (240 !== (248 & lu)) {
                console.error("decode.utf8Read(): Invalid byte " + lu + " at offset " + Zu + ". Skip to end of string: " + (Eu.offset + ju));
                break
              }(Uu = (7 & lu) << 18 | (63 & uu[++Zu]) << 12 | (63 & uu[++Zu]) << 6 | 63 & uu[++Zu]) >= 65536 ? (Uu -= 65536, su += String.fromCharCode(55296 + (Uu >>> 10), 56320 + (1023 & Uu))) : su += String.fromCharCode(Uu)
            } else su += String.fromCharCode((15 & lu) << 12 | (63 & uu[++Zu]) << 6 | 63 & uu[++Zu]);
        else su += String.fromCharCode((31 & lu) << 6 | 63 & uu[++Zu]);
        else su += String.fromCharCode(lu)
      }
      return Eu.offset += ju, su
    }

    function fE(uu, Eu) {
      return CE(uu, Eu) << 24 >> 24
    }

    function CE(uu, Eu) {
      return uu[Eu.offset++]
    }

    function bE(uu, Eu) {
      return cE(uu, Eu) << 16 >> 16
    }

    function cE(uu, Eu) {
      return uu[Eu.offset++] | uu[Eu.offset++] << 8
    }

    function NE(uu, Eu) {
      return uu[Eu.offset++] | uu[Eu.offset++] << 8 | uu[Eu.offset++] << 16 | uu[Eu.offset++] << 24
    }

    function OE(uu, Eu) {
      return NE(uu, Eu) >>> 0
    }

    function YE(uu, Eu) {
      return sE[0] = NE(uu, Eu), UE[0]
    }

    function hE(uu, Eu) {
      return sE[0] = NE(uu, Eu), sE[1] = NE(uu, Eu), ZE[0]
    }

    function DE(uu, Eu) {
      const ju = OE(uu, Eu);
      return NE(uu, Eu) * Math.pow(2, 32) + ju
    }

    function gE(uu, Eu) {
      const ju = OE(uu, Eu);
      return OE(uu, Eu) * Math.pow(2, 32) + ju
    }
    const ME = {
        utf8Read: qE,
        int8: fE,
        uint8: CE,
        int16: bE,
        uint16: cE,
        int32: NE,
        uint32: OE,
        float32: YE,
        float64: hE,
        int64: DE,
        uint64: gE,
        bigint64: function(uu, Eu) {
          return sE[0] = NE(uu, Eu), sE[1] = NE(uu, Eu), lE[0]
        },
        biguint64: function(uu, Eu) {
          return sE[0] = NE(uu, Eu), sE[1] = NE(uu, Eu), XE[0]
        },
        boolean: function(uu, Eu) {
          return CE(uu, Eu) > 0
        },
        string: function(uu, Eu) {
          const ju = uu[Eu.offset++];
          let su;
          return ju < 192 ? su = 31 & ju : 217 === ju ? su = CE(uu, Eu) : 218 === ju ? su = cE(uu, Eu) : 219 === ju && (su = OE(uu, Eu)), qE(uu, Eu, su)
        },
        number: function(uu, Eu) {
          const ju = uu[Eu.offset++];
          return ju < 128 ? ju : 202 === ju ? YE(uu, Eu) : 203 === ju ? hE(uu, Eu) : 204 === ju ? CE(uu, Eu) : 205 === ju ? cE(uu, Eu) : 206 === ju ? OE(uu, Eu) : 207 === ju ? gE(uu, Eu) : 208 === ju ? fE(uu, Eu) : 209 === ju ? bE(uu, Eu) : 210 === ju ? NE(uu, Eu) : 211 === ju ? DE(uu, Eu) : ju > 223 ? -1 * (255 - ju + 1) : void 0
        },
        stringCheck: function(uu, Eu) {
          const ju = uu[Eu.offset];
          return ju < 192 && ju > 160 || 217 === ju || 218 === ju || 219 === ju
        }
      },
      eE = {},
      GE = new Map;

    function pE(uu, Eu) {
      Eu.constructor && (Object.prototype.hasOwnProperty.call(Eu, "constructor") && null == Eu.constructor[Symbol.metadata] && Zu(Eu.constructor), GE.set(Eu.constructor, uu), eE[uu] = Eu), Eu.encode && (EE[uu] = Eu.encode), Eu.decode && (ME[uu] = Eu.decode)
    }

    function wE(uu) {
      for (const Eu in uu) pE(Eu, uu[Eu]);
      return uu => Gs(uu)
    }
    const JE = "ArraySchema does not support streaming \u2014 positional ops (splice / unshift / reverse) shift subsequent indexes, so holding ADDs back for a later tick under `maxPerTick` would desync the decoder. Use `t.stream(X)` (stable monotonic positions) or `t.map(X).stream()` (stable keys) instead.";

    function dE() {
      return {
        pendingByView: new Map,
        sentByView: new Map,
        broadcastPending: new Set,
        sentBroadcast: new Set,
        broadcastDeletes: new Set,
        maxPerTick: 32
      }
    }

    function aE(uu) {
      return uu._stream ??= dE()
    }

    function PE(uu, Eu, ju) {
      0 === Eu.activeViews.size && aE(uu).broadcastPending.add(ju)
    }

    function oE(uu, Eu, ju, su) {
      const Zu = uu._stream;
      if (void 0 === Zu) return !0;
      let Xu = !1;
      return Zu.broadcastPending.delete(su) ? Xu = !0 : Zu.sentBroadcast.delete(su) && Zu.broadcastDeletes.add(su), Eu.forEachActiveView((uu => {
        const Eu = Zu.pendingByView.get(uu.id);
        if (Eu?.has(su)) return Eu.delete(su), void(Xu = !0);
        const lu = Zu.sentByView.get(uu.id);
        if (lu?.has(su)) {
          lu.delete(su);
          let Eu = uu.changes.get(ju);
          void 0 === Eu && (Eu = new Map, uu.changes.set(ju, Eu)), Eu.set(su, Uu.DELETE)
        }
      })), Xu
    }

    function kE(uu, Eu) {
      const ju = uu._stream?.pendingByView;
      if (void 0 === ju) return !1;
      for (const [su, Uu] of ju)
        if (Uu.size > 0 && void 0 !== Eu.activeViews.get(su)?.deref()) return !0;
      return !1
    }

    function mE(uu) {
      const Eu = uu._stream;
      return void 0 !== Eu && (Eu.broadcastPending.size > 0 || Eu.broadcastDeletes.size > 0)
    }

    function vE(uu, Eu, ju) {
      const su = aE(uu);
      let Uu = su.pendingByView.get(Eu);
      void 0 === Uu && (Uu = new Set, su.pendingByView.set(Eu, Uu)), Uu.add(ju)
    }

    function KE(uu, Eu) {
      const ju = uu._stream;
      void 0 !== ju && (ju.pendingByView.delete(Eu), ju.sentByView.delete(Eu), ju.priorityByView?.delete(Eu))
    }
    const VE = {
      8: "uint8",
      16: "uint16",
      32: "uint32"
    };

    function rE(uu) {
      if (null == uu || "object" !== typeof uu) throw new Error("t.quantized(): options object with { min, max } is required.");
      const {
        min: Eu,
        max: ju
      } = uu;
      if ("number" !== typeof Eu || "number" !== typeof ju || !(ju > Eu) || !Number.isFinite(Eu) || !Number.isFinite(ju)) throw new Error(`t.quantized(): require finite min < max (got min=${Eu}, max=${ju}).`);
      const su = uu.bits ?? 16;
      if (8 !== su && 16 !== su && 32 !== su) throw new Error(`t.quantized(): bits must be 8, 16 or 32 (got ${su}).`);
      const Uu = uu.mode ?? "clamp";
      if ("clamp" !== Uu && "wrap" !== Uu) throw new Error(`t.quantized(): mode must be "clamp" or "wrap" (got ${JSON.stringify(Uu)}).`);
      const Zu = "wrap" === Uu,
        Xu = Math.pow(2, su);
      return {
        min: Eu,
        max: ju,
        bits: su,
        wrap: Zu,
        wire: VE[su],
        range: ju - Eu,
        span: Zu ? Xu : Eu === -ju ? Xu - 2 : Xu - 1
      }
    }

    function QE(uu) {
      return null !== uu && "object" === typeof uu && void 0 !== uu.quantized
    }

    function iE(uu, Eu) {
      if (uu.wrap) {
        if (!Number.isFinite(Eu)) return 0;
        const ju = uu.range;
        let su = (Eu - uu.min) % ju;
        su < 0 && (su += ju);
        const Uu = uu.span;
        return Math.floor(su / ju * Uu + .5) % Uu
      }
      if (Eu !== Eu) return 0;
      const ju = Eu < uu.min ? uu.min : Eu > uu.max ? uu.max : Eu;
      return Math.floor((ju - uu.min) / uu.range * uu.span + .5)
    }

    function WE(uu, Eu) {
      return uu.min + Eu / uu.span * uu.range
    }

    function SE(uu) {
      const Eu = EE[uu.wire];
      return (ju, su, Uu) => Eu(ju, iE(uu, su), Uu)
    }
    class IE {
      types = {};
      schemas = new Map;
      hasFilters = !1;
      static inheritedTypes = new WeakMap;
      static cachedContexts = new WeakMap;
      static register(uu) {
        const Eu = Object.getPrototypeOf(uu);
        if (Eu !== ms) {
          let ju = IE.inheritedTypes.get(Eu);
          ju || (ju = new Set, IE.inheritedTypes.set(Eu, ju)), ju.add(uu)
        }
      }
      static cache(uu) {
        let Eu = IE.cachedContexts.get(uu);
        return Eu || (Eu = new IE(uu), IE.cachedContexts.set(uu, Eu)), Eu
      }
      constructor(uu) {
        uu && this.discoverTypes(uu)
      }
      has(uu) {
        return this.schemas.has(uu)
      }
      get(uu) {
        return this.types[uu]
      }
      add(uu) {
        let Eu = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.schemas.size;
        return !this.schemas.has(uu) && (this.types[Eu] = uu, null == uu[Symbol.metadata] && HE.initialize(uu), this.schemas.set(uu, Eu), !0)
      }
      getTypeId(uu) {
        return this.schemas.get(uu)
      }
      discoverTypes(uu) {
        if (!this.add(uu)) return;
        IE.inheritedTypes.get(uu)?.forEach((uu => {
          this.discoverTypes(uu)
        }));
        let Eu = uu;
        for (;
          (Eu = Object.getPrototypeOf(Eu)) && Eu !== ms && Eu !== Function.prototype;) this.discoverTypes(Eu);
        const ju = uu[Symbol.metadata];
        (ju[ou] || ju[ru]) && (this.hasFilters = !0);
        for (const su in ju) {
          const uu = ju[su].type;
          if ("string" !== typeof uu && !QE(uu))
            if ("function" === typeof uu) this.discoverTypes(uu);
            else {
              const Eu = Object.values(uu)[0];
              if ("string" === typeof Eu) continue;
              this.discoverTypes(Eu)
            }
        }
      }
      debug() {
        return `TypeContext ->\n\tSchema types: ${this.schemas.size}\n\thasFilters: ${this.hasFilters}`
      }
    }

    function FE(uu) {
      const Eu = LE(uu);
      return Eu ? {
        complexTypeKlass: eE[Eu],
        childType: uu[Eu]
      } : {
        complexTypeKlass: !1,
        childType: uu
      }
    }

    function BE(uu, Eu) {
      const ju = tE(uu),
        su = LE(ju),
        Uu = su && LE(ju[su]);
      if (Uu) throw new Error(`${Eu?`${Eu}: `:""}@colyseus/schema: nested collections are not supported ("${su}" of "${Uu}"). Collections can only hold primitive types or Schema classes, wrap the inner ${Uu} in a Schema class.`);
      return ju
    }

    function LE(uu) {
      return "object" === typeof uu && null !== uu ? Object.keys(uu).find((uu => void 0 !== eE[uu])) : void 0
    }

    function tE(uu) {
      if ("object" !== typeof uu || null === uu) return uu;
      if (Array.isArray(uu)) return {
        array: tE(uu[0])
      };
      const Eu = function(uu) {
        const Eu = Object.keys(uu),
          ju = Eu.filter((uu => /\d+/.test(uu)));
        if (ju.length > 0 && ju.length === Eu.length / 2 && uu[uu[ju[0]]] == ju[0]) return "number";
        if (Eu.length > 0 && Eu.every((Eu => uu[Eu] === Eu))) return "string"
      }(uu);
      if (Eu) return Eu;
      if (QE(uu)) return "string" === typeof uu.quantized.wire ? uu : {
        quantized: rE(uu.quantized)
      };
      if (void 0 !== uu.type) return tE(uu.type);
      const ju = LE(uu);
      return ju && (uu[ju] = tE(uu[ju])), uu
    }
    const xE = [Pu, mu, vu, Ku, Vu, ru, du];

    function TE(uu, Eu, ju) {
      uu[Eu] || Object.defineProperty(uu, Eu, {
        value: [],
        enumerable: !1,
        configurable: !0,
        writable: !0
      }), uu[Eu].push(ju)
    }
    const HE = {
        addField(uu, Eu, ju, su, Uu) {
          if (Eu >= 63) throw new Error(`Can't define field '${ju}'.\nSchema instances may only have up to 63 fields.`);
          uu[Eu] = Object.assign(uu[Eu] || {}, {
            type: su,
            index: Eu,
            name: ju
          }), Object.defineProperty(uu, wu, {
            value: uu[wu] || {},
            enumerable: !1,
            configurable: !0
          }), uu[wu][ju] = Uu || {
            value: void 0,
            writable: !0,
            enumerable: !0,
            configurable: !0
          }, Object.defineProperty(uu, au, {
            value: Eu,
            enumerable: !1,
            configurable: !0
          }), Object.defineProperty(uu, ju, {
            value: Eu,
            enumerable: !1,
            configurable: !0
          }), "string" === typeof uu[Eu].type || QE(uu[Eu].type) || (void 0 === uu[Pu] && Object.defineProperty(uu, Pu, {
            value: [],
            enumerable: !1,
            configurable: !0
          }), uu[Pu].push(Eu));
          const Zu = uu[Eu].type;
          if (Zu && "object" === typeof Zu && void 0 !== Zu.stream) {
            if (void 0 !== Zu.array) throw new Error(JE);
            uu[Eu].stream = !0, uu[ru] || Object.defineProperty(uu, ru, {
              value: [],
              enumerable: !1,
              configurable: !0,
              writable: !0
            }), uu[ru].includes(Eu) || uu[ru].push(Eu);
            const Uu = su?.priority;
            "function" === typeof Uu && HE.setStreamPriority(uu, ju, Uu)
          }
        },
        setTag(uu, Eu, ju) {
          const su = uu[Eu];
          if (uu[su].tag = ju, uu[ou] || (Object.defineProperty(uu, ou, {
              value: [],
              enumerable: !1,
              configurable: !0
            }), Object.defineProperty(uu, ku, {
              value: {},
              enumerable: !1,
              configurable: !0
            })), uu[ou].push(su), ju < 0) uu[ku][ju] || (uu[ku][ju] = []), uu[ku][ju].push(su);
          else
            for (let Uu = ju; Uu > 0; Uu &= Uu - 1) {
              const Eu = Uu & -Uu;
              uu[ku][Eu] || (uu[ku][Eu] = []), uu[ku][Eu].push(su)
            }
        },
        setUnreliable(uu, Eu) {
          const ju = uu[Eu];
          if ("string" !== typeof uu[ju].type) throw new Error(`@unreliable cannot be applied to ref-type field "${Eu}". For ref-type fields, mark each primitive sub-field with @unreliable instead. See README "Limitations and best practices".`);
          uu[ju].unreliable = !0, uu[mu] || Object.defineProperty(uu, mu, {
            value: [],
            enumerable: !1,
            configurable: !0,
            writable: !0
          }), uu[mu].push(ju)
        },
        setPatchOnly(uu, Eu) {
          const ju = uu[Eu];
          if (uu[ju].fullStateOnly) throw new Error(`field "${Eu}" cannot be both patchOnly and fullStateOnly \u2014 those are the only two delivery channels, so the field would never reach a client.`);
          uu[ju].patchOnly = !0, TE(uu, vu, ju), TE(uu, Ku, ju)
        },
        setDeprecated(uu, Eu) {
          const ju = uu[Eu];
          uu[ju].deprecated = !0, TE(uu, Ku, ju), Object.defineProperty(uu, ju, {
            value: uu[ju],
            enumerable: !1,
            configurable: !0
          })
        },
        setFullStateOnly(uu, Eu) {
          const ju = uu[Eu];
          if (uu[ju].patchOnly) throw new Error(`field "${Eu}" cannot be both patchOnly and fullStateOnly \u2014 those are the only two delivery channels, so the field would never reach a client.`);
          uu[ju].fullStateOnly = !0, TE(uu, Vu, ju)
        },
        setStream(uu, Eu) {
          const ju = uu[Eu];
          uu[ju].stream = !0, uu[ru] || Object.defineProperty(uu, ru, {
            value: [],
            enumerable: !1,
            configurable: !0,
            writable: !0
          }), uu[ru].push(ju)
        },
        setStreamPriority(uu, Eu, ju) {
          const su = uu[Eu];
          uu[Qu] || Object.defineProperty(uu, Qu, {
            value: {},
            enumerable: !1,
            configurable: !0,
            writable: !0
          }), uu[Qu][su] = ju
        },
        getStreamPriority: (uu, Eu) => uu?.[Qu]?.[Eu],
        defineField(uu, Eu, ju, su, Uu) {
          const Zu = BE(Uu, `${uu.name}.${su}`),
            {
              complexTypeKlass: Xu,
              childType: lu
            } = FE(Zu);
          HE.addField(Eu, ju, su, Zu, ws(su, ju, lu, Xu)), Eu[wu][su] && Object.defineProperty(uu.prototype, su, Eu[wu][su]), ("string" === typeof Zu || QE(Zu)) && (Eu[du] || Object.defineProperty(Eu, du, {
            value: [],
            enumerable: !1,
            configurable: !0,
            writable: !0
          }), Eu[du][ju] = "string" === typeof Zu ? EE[Zu] : SE(Zu.quantized))
        },
        setFields(uu, Eu) {
          const ju = uu.prototype.constructor;
          IE.register(ju);
          const su = Object.getPrototypeOf(ju),
            Uu = su && su[Symbol.metadata],
            Zu = HE.initialize(ju);
          ju[qu] || (ju[qu] = ms[qu]), ju[fu] || (ju[fu] = ms[fu]), ju[Cu] || (ju[Cu] = ms[Cu]), ju.prototype.toJSON || (ju.prototype.toJSON = ms.prototype.toJSON);
          let Xu = Zu[au] ?? (Uu && Uu[au]) ?? -1;
          Xu++, Zu[du] || Object.defineProperty(Zu, du, {
            value: Uu?.[du] ? [...Uu[du]] : [],
            enumerable: !1,
            configurable: !0,
            writable: !0
          });
          for (const lu in Eu) {
            if (void 0 !== Zu[lu]) throw new Error(`@colyseus/schema: Duplicate '${lu}' definition on '${ju.name||"(anonymous)"}'.`);
            HE.defineField(ju, Zu, Xu, lu, Eu[lu]), Xu++
          }
          return uu
        },
        isDeprecated: (uu, Eu) => !0 === uu[Eu].deprecated,
        initialize(uu) {
          const Eu = Object.getPrototypeOf(uu),
            ju = Eu[Symbol.metadata];
          let su = uu[Symbol.metadata] ?? Object.create(null);
          if (Eu !== ms && su === ju && (su = Object.create(null), ju)) {
            Object.setPrototypeOf(su, ju), Object.defineProperty(su, au, {
              value: ju[au],
              enumerable: !1,
              configurable: !0,
              writable: !0
            }), void 0 !== ju[ou] && (Object.defineProperty(su, ou, {
              value: [...ju[ou]],
              enumerable: !1,
              configurable: !0,
              writable: !0
            }), Object.defineProperty(su, ku, {
              value: {
                ...ju[ku]
              },
              enumerable: !1,
              configurable: !0,
              writable: !0
            }));
            for (const uu of xE) {
              const Eu = ju[uu];
              void 0 !== Eu && Object.defineProperty(su, uu, {
                value: [...Eu],
                enumerable: !1,
                configurable: !0,
                writable: !0
              })
            }
            Object.defineProperty(su, wu, {
              value: {
                ...ju[wu]
              },
              enumerable: !1,
              configurable: !0,
              writable: !0
            })
          }
          return Object.defineProperty(uu, Symbol.metadata, {
            value: su,
            writable: !1,
            configurable: !0
          }), su
        },
        isValidInstance: uu => uu.constructor[Symbol.metadata] && Object.prototype.hasOwnProperty.call(uu.constructor[Symbol.metadata], au),
        getFields(uu) {
          const Eu = uu[Symbol.metadata],
            ju = {};
          for (let su = 0; su <= Eu[au]; su++) ju[Eu[su].name] = Eu[su].type;
          return ju
        },
        hasViewTagAtIndex: (uu, Eu) => uu?.[ou]?.includes(Eu),
        hasUnreliableAtIndex: (uu, Eu) => uu?.[mu]?.includes(Eu),
        hasPatchOnlyAtIndex: (uu, Eu) => uu?.[vu]?.includes(Eu),
        hasFullStateOnlyAtIndex: (uu, Eu) => uu?.[Vu]?.includes(Eu),
        hasStreamAtIndex: (uu, Eu) => uu?.[ru]?.includes(Eu)
      },
      AE = (uu, Eu, ju) => uu(Eu, ju);
    class nE {
      dirtyLow = 0;
      dirtyHigh = 0;
      ops;
      constructor(uu) {
        this.ops = new Uint8Array(Math.max(uu + 1, 1))
      }
      record(uu, Eu) {
        const ju = this.ops[uu];
        0 === ju ? this.ops[uu] = Eu : (ju === Uu.DELETE || ju === Uu.ADD && Eu === Uu.DELETE_AND_ADD) && (this.ops[uu] = Uu.DELETE_AND_ADD), uu < 32 ? this.dirtyLow |= 1 << uu : this.dirtyHigh |= 1 << uu - 32
      }
      recordDelete(uu, Eu) {
        this.ops[uu] = Eu, uu < 32 ? this.dirtyLow |= 1 << uu : this.dirtyHigh |= 1 << uu - 32
      }
      recordRaw(uu, Eu) {
        this.record(uu, Eu)
      }
      operationAt(uu) {
        const Eu = this.ops[uu];
        return 0 === Eu ? void 0 : Eu
      }
      setOperationAt(uu, Eu) {
        this.ops[uu] = Eu
      }
      forEach(uu) {
        this.forEachWithCtx(uu, AE)
      }
      forEachWithCtx(uu, Eu) {
        let ju = this.dirtyLow,
          su = this.dirtyHigh;
        const Uu = this.ops;
        for (; 0 !== ju;) {
          const su = ju & -ju,
            Zu = 31 - Math.clz32(su);
          ju ^= su, Eu(uu, Zu, Uu[Zu])
        }
        for (; 0 !== su;) {
          const ju = su & -su,
            Zu = 31 - Math.clz32(ju) + 32;
          su ^= ju, Eu(uu, Zu, Uu[Zu])
        }
      }
      size() {
        return zE(this.dirtyLow) + zE(this.dirtyHigh)
      }
      has() {
        return 0 !== (this.dirtyLow | this.dirtyHigh)
      }
      reset() {
        this.dirtyLow = 0, this.dirtyHigh = 0, this.ops.fill(0)
      }
    }
    class yE {
      mO = new Map;
      pureOps = [];
      record(uu, Eu) {
        const ju = this.mO.get(uu);
        void 0 === ju ? this.mO.set(uu, Eu) : (ju === Uu.DELETE || ju === Uu.ADD && Eu === Uu.DELETE_AND_ADD) && this.mO.set(uu, Uu.DELETE_AND_ADD)
      }
      recordDelete(uu, Eu) {
        this.mO.set(uu, Eu)
      }
      recordRaw(uu, Eu) {
        this.mO.set(uu, Eu)
      }
      recordPure(uu) {
        this.pureOps.push([this.mO.size, uu])
      }
      operationAt(uu) {
        return this.mO.get(uu)
      }
      setOperationAt(uu, Eu) {
        this.mO.has(uu) && this.mO.set(uu, Eu)
      }
      forEach(uu) {
        this.forEachWithCtx(uu, AE)
      }
      forEachWithCtx(uu, Eu) {
        const ju = this.pureOps;
        if (ju.length > 0) {
          let su = 0,
            Uu = 0;
          for (const [Zu, Xu] of this.mO) {
            for (; su < ju.length && ju[su][0] <= Uu;) {
              const Uu = ju[su++][1];
              Eu(uu, -Uu, Uu)
            }
            Eu(uu, Zu, Xu), Uu++
          }
          for (; su < ju.length;) {
            const Uu = ju[su++][1];
            Eu(uu, -Uu, Uu)
          }
        } else
          for (const [su, Uu] of this.mO) Eu(uu, su, Uu)
      }
      size() {
        return this.mO.size + this.pureOps.length
      }
      has() {
        return this.mO.size > 0 || this.pureOps.length > 0
      }
      reset() {
        this.mO.clear(), this.pureOps.length = 0
      }
      shift(uu) {
        const Eu = new Map;
        for (const [ju, su] of this.mO) Eu.set(ju + uu, su);
        this.mO = Eu
      }
    }

    function zE(uu) {
      return 16843009 * ((uu = (858993459 & (uu -= uu >>> 1 & 1431655765)) + (uu >>> 2 & 858993459)) + (uu >>> 4) & 252645135) >>> 24
    }

    function RE(uu) {
      if (void 0 === uu) return 0;
      let Eu = 0;
      for (let ju = 0, su = uu.length; ju < su; ju++) {
        const su = uu[ju];
        su < 32 && (Eu |= 1 << su)
      }
      return Eu
    }

    function uj(uu) {
      const Eu = uu.constructor;
      if (Object.prototype.hasOwnProperty.call(Eu, Ju)) return Eu[Ju];
      const ju = Eu[Symbol.metadata],
        su = HE.isValidInstance(uu),
        Uu = (ju?.[ou]?.length ?? 0) > 0,
        Zu = function(uu) {
          const Eu = [],
            ju = [],
            su = [],
            Uu = [],
            Zu = uu?.[au];
          if (void 0 === Zu) return {
            names: Eu,
            types: ju,
            tags: su,
            encoders: Uu
          };
          const Xu = uu[du];
          for (let lu = 0; lu <= Zu; lu++) {
            const Zu = uu[lu];
            void 0 !== Zu ? (Eu[lu] = Zu.name, ju[lu] = Zu.type, su[lu] = Zu.tag, Uu[lu] = Xu?.[lu]) : (Eu[lu] = void 0, ju[lu] = void 0, su[lu] = void 0, Uu[lu] = void 0)
          }
          return {
            names: Eu,
            types: ju,
            tags: su,
            encoders: Uu
          }
        }(ju),
        Xu = su && !Uu ? void 0 : Eu[bu],
        lu = {
          encoder: Eu[fu],
          filter: Xu,
          metadata: ju,
          isSchema: su,
          filterBitmask: su ? RE(ju?.[ou]) : 0,
          hasAnyFullStateOnly: (ju?.[Vu]?.length ?? 0) > 0,
          hasAnyUnreliable: (ju?.[mu]?.length ?? 0) > 0,
          hasAnyStream: (ju?.[ru]?.length ?? 0) > 0,
          hasAnyView: Uu,
          fullStateOnlyBitmask: RE(ju?.[Vu]),
          unreliableBitmask: RE(ju?.[mu]),
          streamBitmask: RE(ju?.[ru]),
          names: Zu.names,
          types: Zu.types,
          tags: Zu.tags,
          encoders: Zu.encoders
        };
      return Object.defineProperty(Eu, Ju, {
        value: lu,
        enumerable: !1,
        writable: !0,
        configurable: !0
      }), lu
    }

    function Ej(uu, Eu) {
      if (void 0 !== uu.parentRef && Eu(uu.parentRef, uu._parentIndex)) return !0;
      for (let ju = uu.extraParents; void 0 !== ju; ju = ju.next)
        if (Eu(ju.ref, ju.index)) return !0;
      return !1
    }
    const jj = (uu, Eu) => {
        uu.isFieldUnreliable(Eu) ? uu.ensureUnreliableRecorder().record(Eu, Uu.ADD) : uu.record(Eu, Uu.ADD)
      },
      sj = (uu, Eu) => uu(Eu);

    function Uj(uu, Eu, ju) {
      const su = uu.refTarget;
      if (void 0 !== su[hu]) {
        if (uu.isPatchOnly) return;
        if (Array.isArray(su.items)) {
          const uu = su.items;
          for (let su = 0, Uu = uu.length; su < Uu; su++) void 0 !== uu[su] && ju(Eu, su)
        } else if (void 0 !== su.journal)
          for (const [uu, Uu] of su.journal.keyByIndex) su.$items.has(Uu) && ju(Eu, uu);
        else if (void 0 !== su.$items)
          for (const uu of su.$items.keys()) ju(Eu, uu)
      } else {
        const Uu = uu.metadata;
        if (!Uu) return;
        const Zu = Uu[au] ?? -1,
          Xu = Uu[Ku],
          lu = uu.encDescriptor.names;
        for (let uu = 0; uu <= Zu; uu++) {
          const Uu = lu[uu];
          if (void 0 === Uu) continue;
          if (Xu && Xu.includes(uu)) continue;
          const Zu = su[Uu];
          void 0 !== Zu && null !== Zu && ju(Eu, uu)
        }
      }
    }

    function Zj(uu, Eu, ju, su) {
      ! function(uu, Eu, ju) {
        if (!Eu) return;
        const su = Eu[Yu],
          Uu = !su._isSchema;
        let Zu;
        Uu ? (Eu = su.parent, ju = su.parentIndex, Zu = Eu?.[Yu].metadata) : Zu = su.metadata;
        const Xu = (Zu?.[vu]?.includes(ju) ? Jj : 0) | (Zu?.[Vu]?.includes(ju) ? dj : 0),
          lu = su.flags & oj | Xu,
          qu = uu.flags;
        uu.flags = qu | lu;
        lu & ~qu & dj && (uu.reset(), uu.unreliableRecorder?.reset());
        const fu = uu.root?.types;
        if (!fu?.hasFilters) return;
        const Cu = Zu?.[ou]?.includes(ju) ?? !1,
          bu = Zu?.[ru]?.includes(ju) ?? !1,
          cu = su.isFiltered || Cu || bu;
        if (uu.isFiltered = cu, bu && !Uu) {
          uu.isStreamCollection = !0;
          const Eu = aE(uu.ref);
          if (void 0 === Eu.priority) {
            const uu = HE.getStreamPriority(Zu, ju);
            void 0 !== uu && (Eu.priority = uu)
          }
          uu.root?.registerStream(uu.ref)
        }
        if (cu) {
          const Eu = lj(uu);
          uu.isVisibilitySharedWithParent = su.isFiltered && Eu && !bu && (!Cu || Uu && Zu[ju].tag !== Ys)
        }
      }(uu, Eu, ju), uu.isFullStateOnly || (uu.has() && uu.root?.enqueueChangeTree(uu), uu.unreliableRecorder?.has() && uu.root?.enqueueUnreliable(uu), uu.has() || uu.unreliableRecorder?.has() || uu.root?.enqueueChangeTree(uu))
    }

    function Xj(uu) {
      const Eu = uu.pendingFilterRefresh;
      for (let ju = 0; ju < Eu.length; ju++) {
        const uu = Eu[ju];
        0 !== (uu.flags & Pj) && qj(uu)
      }
      Eu.length = 0
    }

    function lj(uu) {
      return uu._isSchema || "string" !== typeof uu.refTarget[hu]
    }

    function qj(uu) {
      uu.flags &= ~Pj;
      const Eu = uu.root;
      if (void 0 === Eu || void 0 === uu.parentRef) return;
      const ju = lj(uu);
      let su = Nj(uu, uu.parentRef, uu._parentIndex, ju);
      for (let Zu = uu.extraParents; void 0 !== Zu && su !== cj; Zu = Zu.next) su |= Nj(uu, Zu.ref, Zu.index, ju);
      if (0 === su) return;
      uu.isVisibilitySharedWithParent = 0 !== (su & bj);
      const Uu = 0 === (su & Cj);
      Uu !== uu.isFiltered && (uu.isFiltered = Uu, Uu || uu.isFullStateOnly || (uu.forEachLiveWithCtx(uu, jj), uu.has() && Eu.enqueueChangeTree(uu), uu.unreliableRecorder?.has() && Eu.enqueueUnreliable(uu)), uu.forEachChildWithCtx(uu, Oj))
    }
    const fj = 1,
      Cj = 2,
      bj = 4,
      cj = fj | Cj | bj;

    function Nj(uu, Eu, ju, su) {
      const Uu = Eu[Yu];
      if (Uu.root !== uu.root || ! function(uu, Eu, ju) {
          const su = Eu.refTarget;
          if (Eu.isArray) {
            const Eu = su.items,
              Uu = Eu[ju];
            if (void 0 !== Uu && Uu[Yu] === uu) return !0;
            for (let ju = 0, su = Eu.length; ju < su; ju++) {
              const su = Eu[ju];
              if (void 0 !== su && su[Yu] === uu) return !0
            }
            return !1
          }
          const Uu = Eu.getValue(ju);
          return void 0 !== Uu && Uu[Yu] === uu
        }(uu, Uu, ju)) return 0;
      Uu.flags & Pj && qj(Uu);
      let Zu = fj;
      if (Uu._isSchema) {
        void 0 !== Uu.encDescriptor.tags[ju] || Uu.isFieldStream(ju) || (Uu.isFiltered ? su && (Zu |= bj) : Zu |= Cj)
      } else if (Uu.isFiltered) {
        if (su && !Uu.isStreamCollection) {
          const uu = Uu.parent?.[Yu];
          (uu?._isSchema ? uu.encDescriptor.tags[Uu.parentIndex] : void 0) !== Ys && (Zu |= bj)
        }
      } else Zu |= Cj;
      return Zu
    }
    const Oj = (uu, Eu, ju) => {
      qj(Eu)
    };

    function Yj(uu, Eu, ju, su) {
      if (uu.addParent(Eu, su), !ju) return;
      const Uu = ju.add(uu);
      ju !== uu.root && (uu.root = ju, Zj(uu, Eu, su));
      const Zu = Eu?.[Yu];
      if (void 0 !== Zu && void 0 !== Zu.subscribedViews && void 0 !== Eu[hu] && function(uu, Eu, ju, su) {
          const Uu = uu.subscribedViews;
          if (void 0 === Uu) return;
          const Zu = uu.isStreamCollection,
            Xu = Zu ? uu.ref : void 0,
            lu = Zu ? void 0 : ju[Yu];
          for (let qu = 0, fu = Uu.length; qu < fu; qu++) {
            let uu = Uu[qu];
            for (; 0 !== uu;) {
              const ju = uu & -uu;
              uu ^= ju;
              const fu = 32 * qu + (31 - Math.clz32(ju)),
                Cu = su.activeViews.get(fu),
                bu = Cu?.deref();
              void 0 !== bu ? Zu ? vE(Xu, fu, Eu) : void 0 !== lu && bu.markVisible(lu) : Uu[qu] &= ~ju
            }
          }
        }(Zu, su, uu.ref, ju), Uu) {
        let Eu = Mj[ej];
        void 0 === Eu && (Eu = {
          parentRef: void 0,
          root: void 0
        }, Mj[ej] = Eu), Eu.parentRef = uu.ref, Eu.root = ju, ej++, Dj(uu, Eu, Gj), ej--
      }
    }

    function hj(uu, Eu, ju) {
      uu(Eu, ju)
    }

    function Dj(uu, Eu, ju) {
      const su = uu.refTarget;
      if (su[hu]) {
        if ("string" !== typeof su[hu]) {
          const uu = su.items;
          if (void 0 !== uu)
            for (let su = 0, Uu = uu.length; su < Uu; su++) {
              const Uu = uu[su];
              Uu && ju(Eu, Uu[Yu], su)
            } else {
              const uu = su.$items,
                Uu = su._collectionIndexes;
              for (const su of uu.keys()) {
                const Zu = uu.get(su);
                Zu && ju(Eu, Zu[Yu], Uu?.[su] ?? su)
              }
            }
        }
      } else {
        const Uu = uu.metadata,
          Zu = Uu?.[Pu];
        if (!Zu) return;
        const Xu = uu.encDescriptor.names;
        for (let uu = 0, lu = Zu.length; uu < lu; uu++) {
          const Uu = Zu[uu],
            lu = su[Xu[Uu]];
          lu && ju(Eu, lu[Yu], Uu)
        }
      }
    }

    function gj(uu, Eu, ju) {
      Eu.root !== uu ? Eu.setRoot(uu) : uu.add(Eu)
    }
    const Mj = [];
    let ej = 0;

    function Gj(uu, Eu, ju) {
      if (Eu.root === uu.root) return uu.root.add(Eu), void uu.root.moveNextToParent(Eu);
      Eu.setParent(uu.parentRef, uu.root, ju)
    }

    function pj(uu, Eu, ju) {
      const su = (3 & ju) << 3;
      return ju < 4 ? uu >>> su & 255 : Eu >>> su & 255
    }
    const wj = (uu, Eu, ju) => uu(Eu, ju);
    const Jj = 16,
      dj = 32,
      aj = 128,
      Pj = 256,
      oj = Jj | dj;
    class kj {
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
      set isFiltered(uu) {
        this.flags = uu ? 1 | this.flags : -2 & this.flags
      }
      get isVisibilitySharedWithParent() {
        return 0 !== (2 & this.flags)
      }
      set isVisibilitySharedWithParent(uu) {
        this.flags = uu ? 2 | this.flags : -3 & this.flags
      }
      get isNew() {
        return 0 !== (4 & this.flags)
      }
      set isNew(uu) {
        this.flags = uu ? 4 | this.flags : -5 & this.flags
      }
      get isUnreliable() {
        return 0 !== (8 & this.flags)
      }
      set isUnreliable(uu) {
        this.flags = uu ? 8 | this.flags : -9 & this.flags
      }
      get isPatchOnly() {
        return 0 !== (this.flags & Jj)
      }
      set isPatchOnly(uu) {
        this.flags = uu ? this.flags | Jj : this.flags & ~Jj
      }
      get isFullStateOnly() {
        return 0 !== (this.flags & dj)
      }
      set isFullStateOnly(uu) {
        this.flags = uu ? this.flags | dj : this.flags & ~dj
      }
      get isStreamCollection() {
        return 0 !== (64 & this.flags)
      }
      set isStreamCollection(uu) {
        this.flags = uu ? 64 | this.flags : -65 & this.flags
      }
      get needsRestage() {
        return 0 !== (this.flags & aj)
      }
      set needsRestage(uu) {
        this.flags = uu ? this.flags | aj : -129 & this.flags
      }
      get hasFilteredFields() {
        return this.isFiltered || this.encDescriptor.hasAnyView
      }
      ensureUnreliableRecorder() {
        return void 0 === this.unreliableRecorder && (this.unreliableRecorder = this._isSchema ? new nE(this.metadata?.[au] ?? 0) : new yE), this.unreliableRecorder
      }
      isFieldUnreliable(uu) {
        const Eu = this.encDescriptor;
        return !!Eu.hasAnyUnreliable && (uu < 32 ? 0 !== (Eu.unreliableBitmask & 1 << uu) : HE.hasUnreliableAtIndex(this.metadata, uu))
      }
      isFieldFullStateOnly(uu) {
        if (this.isFullStateOnly) return !0;
        const Eu = this.encDescriptor;
        return !!Eu.hasAnyFullStateOnly && (uu < 32 ? 0 !== (Eu.fullStateOnlyBitmask & 1 << uu) : HE.hasFullStateOnlyAtIndex(this.metadata, uu))
      }
      isFieldStream(uu) {
        const Eu = this.encDescriptor;
        return !!Eu.hasAnyStream && (uu < 32 ? 0 !== (Eu.streamBitmask & 1 << uu) : HE.hasStreamAtIndex(this.metadata, uu))
      }
      constructor(uu) {
        let Eu = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : uu;
        this.ref = uu, this.refTarget = Eu;
        const ju = uj(uu);
        this.encDescriptor = ju, this.metadata = ju.metadata;
        const su = ju.isSchema;
        if (this._isSchema = su, this.ops = void 0, this.collDirty = void 0, this.collPureOps = void 0, su) {
          const uu = this.metadata?.[au] ?? 0;
          uu > 7 && (this.ops = new Uint8Array(uu + 1))
        } else this.collDirty = new Map
      }
      _opAt(uu) {
        const Eu = this.ops;
        if (void 0 !== Eu) return Eu[uu];
        const ju = (3 & uu) << 3;
        return uu < 4 ? this.opsLow >>> ju & 255 : this.opsHigh >>> ju & 255
      }
      _opPut(uu, Eu) {
        const ju = this.ops;
        if (void 0 !== ju) return void(ju[uu] = Eu);
        const su = (3 & uu) << 3,
          Uu = ~(255 << su);
        uu < 4 ? this.opsLow = this.opsLow & Uu | Eu << su : this.opsHigh = this.opsHigh & Uu | Eu << su
      }
      _markDirty(uu) {
        uu < 32 ? this.dirtyLow |= 1 << uu : this.dirtyHigh |= 1 << uu - 32
      }
      record(uu, Eu) {
        if (this._isSchema) {
          const ju = this._opAt(uu);
          0 === ju ? this._opPut(uu, Eu) : (ju === Uu.DELETE || ju === Uu.ADD && Eu === Uu.DELETE_AND_ADD) && this._opPut(uu, Uu.DELETE_AND_ADD), this._markDirty(uu)
        } else {
          const ju = this.collDirty,
            su = ju.get(uu);
          let Zu;
          Zu = void 0 === su ? Eu : su === Uu.DELETE || su === Uu.ADD && Eu === Uu.DELETE_AND_ADD ? Uu.DELETE_AND_ADD : su, ju.set(uu, Zu)
        }
      }
      recordDelete(uu, Eu) {
        this._isSchema ? (this._opPut(uu, Eu), this._markDirty(uu)) : this.collDirty.set(uu, Eu)
      }
      recordRaw(uu, Eu) {
        this._isSchema ? (this._opPut(uu, Eu), this._markDirty(uu)) : this.collDirty.set(uu, Eu)
      }
      recordPure(uu) {
        if (this._isSchema) throw new Error("ChangeTree (Schema): pure operations are not supported");
        (this.collPureOps ??= []).push([this.collDirty.size, uu])
      }
      operationAt(uu) {
        if (this._isSchema) {
          const Eu = this._opAt(uu);
          return 0 === Eu ? void 0 : Eu
        }
        return this.collDirty.get(uu)
      }
      setOperationAt(uu, Eu) {
        if (this._isSchema) this._opPut(uu, Eu);
        else {
          const ju = this.collDirty;
          ju.has(uu) && ju.set(uu, Eu)
        }
      }
      forEach(uu) {
        this.forEachWithCtx(uu, wj)
      }
      forEachWithCtx(uu, Eu) {
        if (this._isSchema) {
          let ju = this.dirtyLow,
            su = this.dirtyHigh;
          const Uu = this.ops;
          if (void 0 !== Uu) {
            for (; 0 !== ju;) {
              const su = ju & -ju,
                Zu = 31 - Math.clz32(su);
              ju ^= su, Eu(uu, Zu, Uu[Zu])
            }
            for (; 0 !== su;) {
              const ju = su & -su,
                Zu = 31 - Math.clz32(ju) + 32;
              su ^= ju, Eu(uu, Zu, Uu[Zu])
            }
          } else {
            const su = this.opsLow,
              Uu = this.opsHigh;
            for (; 0 !== ju;) {
              const Zu = ju & -ju,
                Xu = 31 - Math.clz32(Zu);
              ju ^= Zu, Eu(uu, Xu, pj(su, Uu, Xu))
            }
          }
          return
        }
        const ju = this.collDirty,
          su = this.collPureOps;
        if (void 0 !== su && su.length > 0) {
          let Uu = 0,
            Zu = 0;
          for (const [Xu, lu] of ju) {
            for (; Uu < su.length && su[Uu][0] <= Zu;) {
              const ju = su[Uu++][1];
              Eu(uu, -ju, ju)
            }
            Eu(uu, Xu, lu), Zu++
          }
          for (; Uu < su.length;) {
            const ju = su[Uu++][1];
            Eu(uu, -ju, ju)
          }
        } else
          for (const [Uu, Zu] of ju) Eu(uu, Uu, Zu)
      }
      size() {
        return this._isSchema ? zE(this.dirtyLow) + zE(this.dirtyHigh) : this.collDirty.size + (this.collPureOps?.length ?? 0)
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
      insertAt(uu, Eu) {
        if (this._isSchema) throw new Error("ChangeTree (Schema): insertAt is not supported");
        const ju = this.collDirty,
          su = new Map,
          Zu = !this.paused && !this.isFullStateOnly;
        if (uu > 0)
          for (const [Uu, Xu] of ju) Uu < uu && su.set(Uu, Xu);
        if (Zu)
          for (let Xu = 0; Xu < Eu; Xu++) su.set(uu + Xu, Uu.ADD);
        for (const [Uu, Xu] of ju) Uu >= uu && su.set(Uu + Eu, Xu);
        this.collDirty = su, Zu && this.root?.enqueueChangeTree(this)
      }
      removeAt(uu, Eu) {
        if (this._isSchema) throw new Error("ChangeTree (Schema): removeAt is not supported");
        const ju = this.collDirty,
          su = uu + Eu;
        let Uu = !1;
        for (const Xu of ju.keys())
          if (Xu >= su) {
            Uu = !0;
            break
          } if (!Uu) {
          for (let Eu = uu; Eu < su; Eu++) ju.delete(Eu);
          return
        }
        const Zu = new Map;
        for (const [Xu, lu] of ju) Xu < uu ? Zu.set(Xu, lu) : Xu >= su && Zu.set(Xu - Eu, lu);
        this.collDirty = Zu
      }
      unshift(uu) {
        this.insertAt(0, uu)
      }
      setRoot(uu) {
        ! function(uu, Eu) {
          uu.root = Eu;
          const ju = Eu.add(uu);
          Zj(uu, uu.parent, uu.parentIndex), ju && Dj(uu, Eu, gj)
        }(this, uu)
      }
      setParent(uu, Eu, ju) {
        Yj(this, uu, Eu, ju)
      }
      forEachChild(uu) {
        Dj(this, uu, hj)
      }
      forEachChildWithCtx(uu, Eu) {
        Dj(this, uu, Eu)
      }
      forEachLive(uu) {
        Uj(this, uu, sj)
      }
      forEachLiveWithCtx(uu, Eu) {
        Uj(this, uu, Eu)
      }
      operation(uu) {
        this.paused || this.isFullStateOnly || (this.recordPure(uu), this.root?.enqueueChangeTree(this))
      }
      _routeAndRecord(uu, Eu, ju) {
        if (!this.paused && !this.isFieldFullStateOnly(uu)) {
          if (this.isFieldUnreliable(uu) && !this.isNew) {
            const su = this.ensureUnreliableRecorder();
            return ju ? su.recordRaw(uu, Eu) : su.record(uu, Eu), void this.root?.enqueueUnreliable(this)
          }
          ju ? this.recordRaw(uu, Eu) : this.record(uu, Eu), this.root?.enqueueChangeTree(this)
        }
      }
      change(uu) {
        let Eu = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Uu.ADD;
        this._routeAndRecord(uu, Eu, !1)
      }
      indexedOperation(uu, Eu) {
        this._routeAndRecord(uu, Eu, !0)
      }
      getChange(uu) {
        return this.operationAt(uu)
      }
      pause() {
        this.paused = !0
      }
      resume() {
        this.paused = !1
      }
      untracked(uu) {
        const Eu = this.paused;
        this.paused = !0;
        try {
          return uu()
        } finally {
          this.paused = Eu
        }
      }
      markDirty(uu) {
        let Eu = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Uu.ADD;
        const ju = this.paused;
        this.paused = !1;
        try {
          this.change(uu, Eu)
        } finally {
          this.paused = ju
        }
      }
      getValue(uu) {
        let Eu = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return this.refTarget[cu](uu, Eu)
      }
      delete(uu, Eu) {
        if (void 0 === uu) {
          try {
            throw new Error(`@colyseus/schema ${this.ref.constructor.name}: trying to delete non-existing index '${uu}'`)
          } catch (lU) {
            console.warn(lU)
          }
          return
        }
        if (this.paused || this.isFieldFullStateOnly(uu)) return this.getValue(uu);
        const ju = this.isFieldUnreliable(uu) && !this.isNew;
        ju ? this.ensureUnreliableRecorder().recordDelete(uu, Eu ?? Uu.DELETE) : this.recordDelete(uu, Eu ?? Uu.DELETE);
        const su = this.getValue(uu);
        return su && su[Yu] && this.root?.remove(su[Yu]), ju ? this.root?.enqueueUnreliable(this) : this.root?.enqueueChangeTree(this), su
      }
      endEncode() {
        this.reset(), this.changesNode = void 0, this._isSchema || this.refTarget[gu]?.(), this.isNew = !1
      }
      endEncodeUnreliable() {
        this.unreliableRecorder?.reset(), this.unreliableChangesNode = void 0, this._isSchema || this.refTarget[gu]?.()
      }
      discard() {
        this._isSchema || this.refTarget[gu]?.(), this.reset(), this.unreliableRecorder?.reset()
      }
      discardAll() {
        const uu = uu => {
          if (uu < 0) return;
          const Eu = this.getValue(uu);
          Eu && Eu[Yu] && Eu[Yu].discardAll()
        };
        this.forEach(uu), this.unreliableRecorder?.forEach(uu), this.discard()
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
      addParent(uu, Eu) {
        ! function(uu, Eu, ju) {
          if (uu.parentRef) {
            if (uu.parentRef[Yu] === Eu[Yu]) return void(uu._parentIndex = ju);
            if (Ej(uu, ((uu, ju) => uu[Yu] === Eu[Yu]))) return void(uu._parentIndex = ju)
          }
          void 0 === uu.parentRef ? (uu.parentRef = Eu, uu._parentIndex = ju) : (uu.extraParents = {
            ref: uu.parentRef,
            index: uu._parentIndex,
            next: uu.extraParents
          }, uu.parentRef = Eu, uu._parentIndex = ju)
        }(this, uu, Eu)
      }
      setParentIndex(uu, Eu) {
        ! function(uu, Eu, ju) {
          if (void 0 !== uu.extraParents)
            if (uu.parentRef[Yu] !== Eu[Yu]) {
              for (let su = uu.extraParents; void 0 !== su; su = su.next)
                if (su.ref[Yu] === Eu[Yu]) return void(su.index = ju)
            } else uu._parentIndex = ju;
          else uu._parentIndex = ju
        }(this, uu, Eu)
      }
      removeParent() {
        return function(uu, Eu) {
          if (uu.parentRef && uu.parentRef[Yu] === Eu[Yu]) return uu.extraParents ? (uu.parentRef = uu.extraParents.ref, uu._parentIndex = uu.extraParents.index, uu.extraParents = uu.extraParents.next) : (uu.parentRef = void 0, uu._parentIndex = void 0), !0;
          let ju = uu.extraParents,
            su = null;
          for (; ju;) {
            if (ju.ref[Yu] === Eu[Yu]) return su ? su.next = ju.next : uu.extraParents = ju.next, !0;
            su = ju, ju = ju.next
          }
          return void 0 === uu.parentRef
        }(this, arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.parent)
      }
      findParent(uu) {
        return function(uu, Eu) {
          if (void 0 !== uu.parentRef && Eu(uu.parentRef, uu._parentIndex)) return {
            ref: uu.parentRef,
            index: uu._parentIndex
          };
          for (let ju = uu.extraParents; void 0 !== ju; ju = ju.next)
            if (Eu(ju.ref, ju.index)) return {
              ref: ju.ref,
              index: ju.index
            }
        }(this, uu)
      }
      hasParent(uu) {
        return Ej(this, uu)
      }
      indexInParent(uu) {
        return function(uu, Eu) {
          if (uu.parentRef && uu.parentRef[Yu] === Eu[Yu]) return uu._parentIndex;
          for (let ju = uu.extraParents; void 0 !== ju; ju = ju.next)
            if (ju.ref[Yu] === Eu[Yu]) return ju.index
        }(this, uu)
      }
      getAllParents() {
        return function(uu) {
          const Eu = [];
          uu.parentRef && Eu.push({
            ref: uu.parentRef,
            index: uu._parentIndex
          });
          let ju = uu.extraParents;
          for (; ju;) Eu.push({
            ref: ju.ref,
            index: ju.index
          }), ju = ju.next;
          return Eu
        }(this)
      }
    }
    class mj {
      ref;
      root = void 0;
      parentRef = void 0;
      paused = !1;
      isNew = !1;
      flags = 0;
      constructor(uu) {
        this.ref = uu
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
      untracked(uu) {
        return uu()
      }
      markDirty() {}
      forEachChild(uu) {
        const Eu = this.ref;
        if (Eu[hu]) {
          if ("string" !== typeof Eu[hu])
            for (const [ju, su] of Eu.entries()) su && uu(su[Yu], Eu._collectionIndexes?.[ju] ?? ju);
          return
        }
        const ju = Eu.constructor,
          su = ju?.[Symbol.metadata];
        if (!su) return;
        const Uu = su[Pu] ?? [];
        for (let Zu = 0; Zu < Uu.length; Zu++) {
          const ju = Uu[Zu],
            Xu = Eu[su[ju].name];
          Xu && uu(Xu[Yu], ju)
        }
      }
      forEachChildWithCtx(uu, Eu) {
        this.forEachChild(((ju, su) => Eu(uu, ju, su)))
      }
      forEachLive() {}
      forEachLiveWithCtx() {}
      forEach() {}
    }

    function vj(uu) {
      let Eu = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : uu;
      var ju;
      Object.defineProperty(uu, Yu, {
        value: (ju = Eu, new mj(ju)),
        enumerable: !1,
        writable: !0
      })
    }

    function Kj(uu, Eu, ju, su, Zu, Xu, qu) {
      void 0 !== qu ? qu(Eu, su, Xu) : "string" === typeof ju ? EE[ju]?.(Eu, su, Xu) : null != ju[Symbol.metadata] ? (EE.number(Eu, su[lu], Xu), (Zu & Uu.ADD) === Uu.ADD && uu.tryEncodeTypeId(Eu, ju, su.constructor, Xu)) : EE.number(Eu, su[lu], Xu)
    }
    const Vj = function(uu, Eu, ju, su, Zu, Xu, lu, qu) {
        if (Eu[Xu.offset++] = 255 & (su | Zu), Zu === Uu.DELETE) return;
        const fu = ju.encDescriptor,
          Cu = ju.ref,
          bu = Cu[Gu][su] ?? Cu[fu.names[su]];
        Kj(uu, Eu, fu.types[su], bu, Zu, Xu, fu.encoders[su])
      },
      rj = function(uu, Eu, ju, su, Zu, Xu) {
        if (Eu[Xu.offset++] = 255 & Zu, EE.number(Eu, su, Xu), Zu === Uu.DELETE) return;
        const lu = ju.ref;
        if ((Zu & Uu.ADD) === Uu.ADD) {
          const uu = lu.$indexes.get(su);
          EE.string(Eu, uu, Xu)
        }
        Kj(uu, Eu, lu[hu], lu[cu](su), Zu, Xu)
      },
      Qj = function(uu, Eu, ju, su, Zu, Xu) {
        if (Eu[Xu.offset++] = 255 & Zu, EE.number(Eu, su, Xu), Zu === Uu.DELETE) return;
        const lu = ju.ref;
        Kj(uu, Eu, lu[hu], lu[cu](su), Zu, Xu)
      },
      ij = function(uu, Eu, ju, su, Zu, Xu) {
        const lu = ju.ref;
        (Zu & Uu.ADD) === Uu.ADD && "function" === typeof lu.set ? rj(uu, Eu, ju, su, Zu, Xu) : Qj(uu, Eu, ju, su, Zu, Xu)
      },
      Wj = function(uu, Eu, ju, su, Zu, Xu, qu, fu) {
        const Cu = ju.refTarget,
          bu = Cu[hu],
          Nu = "string" !== typeof bu;
        let Ou;
        if (fu && ju.isFiltered && Nu) {
          const uu = Cu.tmpItems[su];
          if (!uu) return;
          if (Ou = uu[lu], Zu === Uu.DELETE) Zu = Uu.DELETE_BY_REFID;
          else if ((Zu & Uu.ADD) === Uu.ADD) Zu = Uu.ADD_BY_REFID;
          else if ((Zu & Uu.MOVE) === Uu.MOVE) return
        } else if (Zu === Uu.DELETE && Nu) {
          const uu = Cu.tmpItems[su];
          if (!uu) return;
          Ou = uu[lu], Zu = Uu.DELETE_BY_REFID
        } else Ou = su;
        if (Eu[Xu.offset++] = 255 & Zu, EE.number(Eu, Ou, Xu), Zu === Uu.DELETE || Zu === Uu.DELETE_BY_REFID) return;
        Kj(uu, Eu, bu, Cu[cu](su, qu), Zu, Xu)
      };

    function Sj(uu, Eu, ju, su, Zu, Xu, qu) {
      const fu = uu.resyncVisited;
      let Cu = fu.get(uu.currentRefId);
      if (void 0 === Cu && fu.set(uu.currentRefId, Cu = new Set), Cu.add(su), void 0 !== Zu && ju === Uu.ADD && Zu !== Xu) {
        const ju = Zu[lu];
        void 0 !== ju && (uu.root.removeRef(ju), qu?.push({
          ref: Eu,
          refId: uu.currentRefId,
          op: Uu.DELETE,
          dynamicIndex: su,
          value: void 0,
          previousValue: Zu
        }))
      }
    }

    function Ij(uu, Eu, ju, su) {
      const Uu = Eu[lu];
      if (void 0 === Uu || ju.has(Uu)) return;
      ju.add(Uu);
      const Zu = Eu.constructor[Symbol.metadata],
        Xu = Zu?.[Pu];
      if (void 0 === Xu) return;
      const qu = Zu[vu];
      for (let lu = 0; lu < Xu.length; lu++) {
        const Uu = Xu[lu];
        if (void 0 !== qu && qu.includes(Uu)) continue;
        const fu = Zu[Uu],
          Cu = Eu[fu.name];
        Cu && (ms.is(fu.type) ? Ij(uu, Cu, ju, su) : Fj(uu, Cu, ju, su))
      }
    }

    function Fj(uu, Eu, ju, su) {
      const Zu = Eu[Du] ?? Eu,
        Xu = Zu[lu];
      if (void 0 === Xu || ju.has(Xu)) return;
      ju.add(Xu);
      const qu = uu.resyncVisited.get(Xu);
      if (void 0 === qu) return;
      const fu = uu.root;
      Zu[Ou](qu, ((uu, ju) => {
        su?.push({
          ref: Eu,
          refId: Xu,
          op: Uu.DELETE,
          dynamicIndex: ju,
          value: void 0,
          previousValue: uu
        });
        const Zu = uu?.[lu];
        void 0 !== Zu && fu.removeRef(Zu)
      }), (Eu => {
        ms.isSchema(Eu) && Ij(uu, Eu, ju, su)
      }))
    }
    const Bj = 1,
      Lj = 2,
      tj = 3,
      xj = 4,
      Tj = 5;

    function Hj(uu, Eu, ju, su, Zu, Xu, qu, fu, Cu) {
      const bu = uu.root;
      let cu;
      if ((Eu & Uu.DELETE) === Uu.DELETE) {
        const uu = Zu?.[lu];
        void 0 !== uu && bu.removeRef(uu), Eu !== Uu.DELETE_AND_ADD && ju[Nu](su), cu = void 0
      }
      if (Eu === Uu.DELETE);
      else if ("string" === typeof Xu) cu = ME[Xu](qu, fu);
      else if (QE(Xu)) cu = function(uu, Eu, ju) {
        return WE(uu, (0, ME[uu.wire])(Eu, ju))
      }(Xu.quantized, qu, fu);
      else if (ms.is(Xu)) {
        const ju = ME.number(qu, fu);
        if (cu = bu.refs.get(ju), (Eu & Uu.ADD) === Uu.ADD) {
          const su = uu.getInstanceType(qu, fu, Xu);
          cu || (cu = uu.createInstanceOfType(su)), bu.addRef(ju, cu, cu !== Zu || Eu === Uu.DELETE_AND_ADD && cu === Zu)
        }
      } else {
        const ju = (Ou = Object.keys(Xu)[0], eE[Ou]),
          su = ME.number(qu, fu);
        null !== uu.resyncVisited && function(uu, Eu) {
          const ju = uu.resyncVisited;
          ju.has(Eu) || ju.set(Eu, new Set)
        }(uu, su);
        const Nu = bu.refs.has(su) ? Zu || bu.refs.get(su) : ju.constructor.initializeForDecoder();
        if (cu = Nu.clone(!0), cu[hu] = Object.values(Xu)[0], Zu) {
          let uu = Zu[lu];
          if (void 0 !== uu && su !== uu) {
            (Eu & Uu.DELETE) !== Uu.DELETE && bu.removeRef(uu);
            const ju = Zu.entries();
            let su;
            for (;
              (su = ju.next()) && !su.done;) {
              const [Eu, ju] = su.value;
              "object" === typeof ju && (uu = ju[lu]), Cu?.push({
                ref: Zu,
                refId: uu,
                op: Uu.DELETE,
                field: Eu,
                value: void 0,
                previousValue: ju
              })
            }
          }
        }
        bu.addRef(su, cu, Nu !== Zu || Eu === Uu.DELETE_AND_ADD && Nu === Zu)
      }
      var Ou;
      return cu
    }
    const Aj = function(uu, Eu, ju, su, Uu) {
        const Zu = Eu[ju.offset++],
          Xu = su.constructor[Symbol.metadata],
          lu = Zu >> 6 << 6,
          qu = Zu % (lu || 255),
          fu = Xu[qu];
        if (void 0 === fu) return console.warn("@colyseus/schema: field not defined at", {
          index: qu,
          ref: su.constructor.name,
          metadata: Xu
        }), -1;
        const Cu = !0 === fu.deprecated,
          bu = Cu ? void 0 : su[cu](qu),
          Nu = Hj(uu, lu, su, qu, bu, fu.type, Eu, ju, Uu);
        Cu || (null !== Nu && void 0 !== Nu && (su[fu.name] = Nu), bu !== Nu && Uu?.push({
          ref: su,
          refId: uu.currentRefId,
          op: lu,
          field: fu.name,
          value: Nu,
          previousValue: bu
        }))
      },
      nj = function(uu, Eu, ju, su, Zu) {
        const Xu = su[Du] ?? su,
          lu = Eu[ju.offset++];
        if (lu === Uu.CLEAR) return uu.removeChildRefs(Xu, Zu), void Xu.clear();
        const qu = ME.number(Eu, ju),
          fu = Xu[hu],
          Cu = Xu.constructor.COLLECTION_KIND;
        let bu;
        (lu & Uu.ADD) === Uu.ADD ? Cu === Bj ? (bu = ME.string(Eu, ju), Xu.setIndex(qu, bu)) : bu = qu : bu = Xu.getIndex(qu);
        const Nu = Xu[cu](qu),
          Ou = Hj(uu, lu, su, qu, Nu, fu, Eu, ju, Zu);
        if (null !== uu.resyncVisited && Sj(uu, su, lu, bu, Nu, Ou, Zu), null !== Ou && void 0 !== Ou) switch (Cu) {
          case Bj:
            Xu.$items.set(bu, Ou);
            break;
          case Lj:
            Xu.$setAt(qu, Ou, null !== uu.resyncVisited && lu === Uu.ADD ? Uu.REPLACE : lu);
            break;
          case tj:
          case xj:
          case Tj:
            Xu.$items.has(qu) || (Xu.$items.set(qu, Ou), "number" === typeof Xu.$refId && qu >= Xu.$refId && (Xu.$refId = qu + 1));
            break;
          default:
            console.warn(`@colyseus/schema: missing COLLECTION_KIND on ${Xu.constructor?.name} \u2014 item at index ${qu} was not stored.`)
        }
        Nu !== Ou && Zu?.push({
          ref: su,
          refId: uu.currentRefId,
          op: lu,
          dynamicIndex: bu,
          value: Ou,
          previousValue: Nu
        })
      },
      yj = function(uu, Eu, ju, su, Zu) {
        const Xu = su[Du] ?? su;
        let lu, qu = Eu[ju.offset++];
        if (qu === Uu.CLEAR) return uu.removeChildRefs(Xu, Zu), void Xu.clear();
        if (qu === Uu.REVERSE) return void Xu.items.reverse();
        if (qu === Uu.DELETE_BY_REFID) {
          const qu = ME.number(Eu, ju),
            fu = uu.root.refs.get(qu);
          if (void 0 === fu) return;
          if (uu.root.removeRef(qu), lu = Xu.findIndex((uu => uu === fu)), -1 === lu) return;
          return Xu[Nu](lu), void Zu?.push({
            ref: su,
            refId: uu.currentRefId,
            op: Uu.DELETE,
            dynamicIndex: lu,
            value: void 0,
            previousValue: fu
          })
        }
        if (qu === Uu.ADD_BY_REFID) {
          const su = ME.number(Eu, ju),
            Uu = uu.root.refs.get(su);
          Uu && (lu = Xu.findIndex((uu => uu === Uu))), -1 !== lu && void 0 !== lu || (lu = Xu.length)
        } else lu = ME.number(Eu, ju);
        const fu = Xu[hu];
        let Cu = lu;
        const bu = Xu.items[lu],
          cu = Hj(uu, qu, su, lu, bu, fu, Eu, ju, Zu);
        null !== uu.resyncVisited && Sj(uu, su, qu, lu, bu, cu, Zu), null !== cu && void 0 !== cu && cu !== bu && Xu.$setAt(lu, cu, null !== uu.resyncVisited && qu === Uu.ADD ? Uu.REPLACE : qu), bu !== cu && Zu?.push({
          ref: su,
          refId: uu.currentRefId,
          op: qu,
          dynamicIndex: Cu,
          value: cu,
          previousValue: bu
        })
      };
    class zj extends Error {}

    function Rj(uu, Eu, ju, su) {
      if (!(uu instanceof Eu)) throw new zj(`a '${Eu.name}' was expected, but '${uu&&uu.constructor.name}' was provided in ${ju.constructor.name}#${su}`)
    }
    const us = (uu, Eu) => {
        const ju = uu.toString(),
          su = Eu.toString();
        return ju < su ? -1 : ju > su ? 1 : 0
      },
      Es = {
        get: (uu, Eu) => "symbol" === typeof Eu || isNaN(Eu) ? Reflect.get(uu, Eu) : uu.items[Eu],
        set: (uu, Eu, ju) => {
          if ("symbol" !== typeof Eu && !isNaN(Eu)) {
            if (void 0 === ju || null === ju) uu.$deleteAt(Eu);
            else {
              let su;
              if (ju[Yu]) {
                Rj(ju, uu[hu], uu, Eu);
                const Zu = uu.items[Eu];
                uu.isMovingItems ? (su = uu.$wireIndex(Number(Eu)), void 0 !== Zu ? ju[Yu].isNew ? uu[Yu].indexedOperation(su, Uu.MOVE_AND_ADD) : (uu[Yu].getChange(su) & Uu.DELETE) === Uu.DELETE ? uu[Yu].indexedOperation(su, Uu.DELETE_AND_MOVE) : uu[Yu].indexedOperation(su, Uu.MOVE) : ju[Yu].isNew && uu[Yu].indexedOperation(su, Uu.ADD), ju[Yu].setParent(uu, uu[Yu].root, su)) : su = uu.$changeAt(Number(Eu), ju), void 0 !== Zu && Zu[Yu].root?.remove(Zu[Yu])
              } else su = uu.$changeAt(Number(Eu), ju);
              uu.items[Eu] = ju, void 0 !== su && (uu.tmpItems[su] = ju)
            }
            return !0
          }
          return Reflect.set(uu, Eu, ju)
        },
        deleteProperty: (uu, Eu) => ("number" === typeof Eu ? uu.$deleteAt(Eu) : delete uu[Eu], !0),
        has: (uu, Eu) => "symbol" === typeof Eu || isNaN(Number(Eu)) ? Reflect.has(uu, Eu) : Reflect.has(uu.items, Eu)
      };
    class ss {
      [Yu];
      [lu];
      [Du];
      [hu];
      items = [];
      tmpItems = [];
      deletedIndexes = [];
      isMovingItems = !1;
      _needsCompaction = !1;
      static[fu] = Wj;
      static[Cu] = yj;
      static COLLECTION_KIND = Lj;
      static[bu](uu, Eu, ju) {
        if (!ju) return !0;
        const su = uu[Du] ?? uu;
        return "string" === typeof su[hu] || ju.isChangeTreeVisible(su.tmpItems[Eu]?.[Yu])
      }
      static is(uu) {
        return Array.isArray(uu) || void 0 !== uu.array
      }
      static from(uu) {
        return new ss(...Array.from(uu))
      }
      constructor() {
        this[hu] = void 0, this[Du] = this;
        const uu = new Proxy(this, Es);
        return Object.defineProperty(this, Yu, {
          value: new kj(uu, this),
          enumerable: !1,
          writable: !0
        }), arguments.length > 0 && this.push(...arguments), uu
      }
      static initializeForDecoder() {
        const uu = Object.create(ss.prototype);
        uu.items = [], uu.isMovingItems = !1, uu._needsCompaction = !1, uu[hu] = void 0, uu[Du] = uu;
        const Eu = new Proxy(uu, Es);
        return vj(uu, Eu), Eu
      }
      set length(uu) {
        0 === uu ? this.clear() : uu < this.items.length ? this.splice(uu, this.length - uu) : console.warn("ArraySchema: can't set .length to a higher value than its length.")
      }
      get length() {
        return this.items.length
      }
      pauseTracking() {
        this[Yu].pause()
      }
      resumeTracking() {
        this[Yu].resume()
      }
      untracked(uu) {
        return this[Yu].untracked(uu)
      }
      get isTrackingPaused() {
        return this[Yu].paused
      }
      push() {
        const uu = this[Du],
          Eu = uu.items,
          ju = uu.tmpItems,
          su = uu[Yu],
          Zu = uu[hu];
        let Xu = ju.length;
        for (let lu = 0, qu = arguments.length; lu < qu; lu++, Xu++) {
          const qu = lu < 0 || arguments.length <= lu ? void 0 : arguments[lu];
          if (void 0 === qu || null === qu) return;
          "object" === typeof qu && Zu && Rj(qu, Zu, uu, lu), su.indexedOperation(Xu, Uu.ADD), Eu.push(qu), ju.push(qu), qu[Yu]?.setParent(this, su.root, Xu)
        }
        return Xu
      }
      pop() {
        const uu = this[Du],
          Eu = uu.tmpItems,
          ju = uu.deletedIndexes;
        let su = -1;
        for (let Zu = Eu.length - 1; Zu >= 0; Zu--)
          if (!0 !== ju[Zu]) {
            su = Zu;
            break
          } if (su < 0) return;
        const Uu = uu.$isUnsentAdd(su);
        return uu[Yu].delete(su), Uu ? uu.$cancelAdd(su) : ju[su] = !0, uu.items.pop()
      }
      at(uu) {
        return uu < 0 && (uu += this.length), this.items[uu]
      }
      $wireIndex(uu) {
        const Eu = this.deletedIndexes;
        if (0 === Eu.length) return uu;
        const ju = this.tmpItems;
        let su = 0;
        for (let Uu = 0; Uu < ju.length; Uu++)
          if (!0 !== Eu[Uu]) {
            if (su === uu) return Uu;
            su++
          } return ju.length + (uu - su)
      }
      $isUnsentAdd(uu) {
        const Eu = this[Yu];
        return 0 === (576 & Eu.flags) && !Eu.paused && "string" !== typeof this[hu] && Eu.operationAt(uu) === Uu.ADD
      }
      $cancelAdd(uu) {
        let Eu = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        const ju = this[Yu],
          su = this.tmpItems[uu];
        this.tmpItems.splice(uu, 1), this.deletedIndexes.length > 0 && this.deletedIndexes.splice(uu, 1), ju.removeAt(uu, 1);
        const Uu = su?.[Yu];
        void 0 !== Uu && void 0 === Uu.root && Uu.removeParent(this), Eu && this.$reindexChildren(uu)
      }
      $reindexChildren(uu, Eu) {
        if (!this[Yu].hasFilteredFields) return;
        if ("string" === typeof this[hu]) return;
        const ju = this.tmpItems,
          su = ju.length;
        if (void 0 !== Eu)
          for (; uu < su && ju[uu] === Eu[uu];) uu++;
        for (let Uu = uu; Uu < su; Uu++) ju[Uu]?.[Yu]?.setParentIndex(this, Uu)
      }
      $changeAt(uu, Eu) {
        if (void 0 === Eu || null === Eu) return void console.error("ArraySchema items cannot be null nor undefined; Use `splice(index, 1)` instead.");
        if (this.items[uu] === Eu) return;
        const ju = void 0 !== this.items[uu] ? "object" === typeof Eu ? Uu.DELETE_AND_ADD : Uu.REPLACE : Uu.ADD,
          su = this.$wireIndex(uu),
          Zu = this[Yu];
        return Zu.change(su, ju), Eu[Yu]?.setParent(this, Zu.root, su), su
      }
      $deleteAt(uu, Eu) {
        this[Yu].delete(this.$wireIndex(uu), Eu)
      }
      $setAt(uu, Eu, ju) {
        ju === Uu.ADD && void 0 !== this.items[uu] ? this.items.splice(uu, 0, Eu) : ju === Uu.DELETE_AND_MOVE ? (this.items.splice(uu, 1), this.items[uu] = Eu) : (uu > this.items.length && (this._needsCompaction = !0), this.items[uu] = Eu)
      }
      clear() {
        const uu = this[Du];
        if (0 === uu.items.length) return;
        const Eu = uu[Yu];
        Eu.forEachChild(((uu, ju) => {
          Eu.root?.remove(uu)
        })), Eu.discard(), Eu.operation(Uu.CLEAR), uu.items.length = 0, uu.tmpItems.length = 0
      } [Mu]() {
        const uu = this[Du] ?? this,
          Eu = uu[Yu];
        if (Eu.isStreamCollection) throw new Error("@colyseus/schema: cannot reset a streamed ArraySchema (pooling not supported).");
        const ju = uu.items;
        for (let su = 0; su < ju.length; su++) ju[su]?.[Mu]?.();
        uu.items.length = 0, uu.tmpItems.length = 0, uu.deletedIndexes.length = 0, Eu.recycle(), uu[lu] = void 0
      }
      concat() {
        return new ss(...this.items.concat(...arguments))
      }
      join(uu) {
        return this.items.join(uu)
      }
      reverse() {
        const uu = this[Du],
          Eu = uu[Yu];
        if (Eu.has() || uu.deletedIndexes.length > 0) {
          const Eu = uu.items.slice().reverse();
          return this.clear(), this.push(...Eu), this
        }
        return Eu.operation(Uu.REVERSE), uu.items.reverse(), uu.tmpItems.reverse(), uu.$reindexChildren(0), this
      }
      shift() {
        const uu = this[Du],
          Eu = uu.items;
        if (0 === Eu.length) return;
        const ju = uu[Yu],
          su = uu.deletedIndexes;
        let Zu = 0;
        for (; !0 === su[Zu];) Zu++;
        const Xu = uu.$isUnsentAdd(Zu);
        return ju.delete(Zu, Uu.DELETE), Xu ? uu.$cancelAdd(Zu) : su[Zu] = !0, Eu.shift()
      }
      slice(uu, Eu) {
        const ju = new ss;
        return ju.push(...this.items.slice(uu, Eu)), ju
      }
      sort() {
        let uu = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : us;
        const Eu = this[Du];
        Eu.isMovingItems = !0;
        const ju = Eu[Yu];
        return Eu.items.sort(uu).forEach(((uu, Eu) => ju.change(Eu, Uu.REPLACE))), Eu.tmpItems.sort(uu), Eu.$reindexChildren(0), Eu.isMovingItems = !1, this
      }
      splice(uu, Eu) {
        const ju = this[Du],
          su = ju[Yu],
          Zu = ju.items,
          Xu = ju.tmpItems,
          lu = ju.deletedIndexes,
          qu = Zu.length,
          fu = Xu.length;
        for (var Cu = arguments.length, bu = new Array(Cu > 2 ? Cu - 2 : 0), cu = 2; cu < Cu; cu++) bu[cu - 2] = arguments[cu];
        const Nu = bu.length,
          Ou = [];
        for (let Uu = 0; Uu < fu; Uu++) !0 !== lu[Uu] && Ou.push(Uu);
        let hu;
        if (qu > uu) {
          void 0 === Eu && (Eu = qu - uu);
          for (let Zu = uu; Zu < uu + Eu; Zu++) {
            const uu = Ou[Zu],
              Eu = ju.$isUnsentAdd(uu);
            su.delete(uu, Uu.DELETE), Eu ? (hu ??= []).push(uu) : lu[uu] = !0
          }
        } else Eu = 0;
        if (Nu > 0) {
          const Zu = Ou[uu] ?? qu,
            fu = Math.min(Nu, Eu);
          for (let uu = 0; uu < fu; uu++) {
            const Eu = Zu + uu;
            let ju;
            const qu = void 0 !== hu ? hu.indexOf(Eu) : -1; - 1 !== qu ? (hu.splice(qu, 1), ju = Uu.ADD) : ju = lu[Eu] ? Uu.DELETE_AND_ADD : Uu.ADD, su.indexedOperation(Eu, ju), Xu[Eu] = bu[uu], lu[Eu] = !1, bu[uu][Yu]?.setParent(this, su.root, Eu)
          }
          const Cu = Nu - fu;
          if (Cu > 0) {
            const uu = Zu + fu;
            su.insertAt(uu, Cu);
            for (let Eu = 0; Eu < Cu; Eu++) bu[fu + Eu][Yu]?.setParent(this, su.root, uu + Eu);
            lu.length > 0 && lu.splice(uu, 0, ...new Array(Cu).fill(!1)), Xu.splice(uu, 0, ...bu.slice(fu)), ju.$reindexChildren(uu + Cu)
          }
        }
        if (void 0 !== hu && hu.length > 0) {
          for (let uu = hu.length - 1; uu >= 0; uu--) ju.$cancelAdd(hu[uu], !1);
          ju.$reindexChildren(hu[0])
        }
        return su.root?.enqueueChangeTree(su), Zu.splice(uu, Eu, ...bu)
      }
      unshift() {
        const uu = this[Du],
          Eu = uu[Yu];
        Eu.unshift(arguments.length);
        for (let su = 0; su < arguments.length; su++)(su < 0 || arguments.length <= su ? void 0 : arguments[su])?.[Yu]?.setParent(this, Eu.root, su);
        const ju = uu.deletedIndexes;
        return ju.length > 0 && ju.unshift(...new Array(arguments.length).fill(!1)), uu.tmpItems.unshift(...arguments), uu.$reindexChildren(arguments.length), uu.items.unshift(...arguments)
      }
      indexOf(uu, Eu) {
        return this.items.indexOf(uu, Eu)
      }
      lastIndexOf(uu) {
        let Eu = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.length - 1;
        return this.items.lastIndexOf(uu, Eu)
      }
      every(uu, Eu) {
        return this.items.every(uu, Eu)
      }
      some(uu, Eu) {
        return this.items.some(uu, Eu)
      }
      forEach(uu, Eu) {
        return this.items.forEach(uu, Eu)
      }
      map(uu, Eu) {
        return this.items.map(uu, Eu)
      }
      filter(uu, Eu) {
        return this.items.filter(uu, Eu)
      }
      reduce(uu, Eu) {
        return this.items.reduce.apply(this.items, arguments)
      }
      reduceRight(uu, Eu) {
        return this.items.reduceRight.apply(this.items, arguments)
      }
      find(uu, Eu) {
        return this.items.find(uu, Eu)
      }
      findIndex(uu, Eu) {
        return this.items.findIndex(uu, Eu)
      }
      fill(uu, Eu, ju) {
        throw new Error("ArraySchema#fill() not implemented")
      }
      copyWithin(uu, Eu, ju) {
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
        return ss
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
      includes(uu, Eu) {
        return this.items.includes(uu, Eu)
      }
      flatMap(uu, Eu) {
        throw new Error("ArraySchema#flatMap() is not supported.")
      }
      flat(uu) {
        throw new Error("ArraySchema#flat() is not supported.")
      }
      findLast() {
        return this.items.findLast.apply(this.items, arguments)
      }
      findLastIndex() {
        for (var uu = arguments.length, Eu = new Array(uu), ju = 0; ju < uu; ju++) Eu[ju] = arguments[ju];
        return this.items.findLastIndex.apply(this.items, arguments)
      }
      with(uu, Eu) {
        const ju = this.items.slice();
        return uu < 0 && (uu += this.length), ju[uu] = Eu, new ss(...ju)
      }
      toReversed() {
        return this.items.slice().reverse()
      }
      toSorted(uu) {
        return this.items.slice().sort(uu)
      }
      toSpliced(uu, Eu) {
        for (var ju = arguments.length, su = new Array(ju > 2 ? ju - 2 : 0), Uu = 2; Uu < ju; Uu++) su[Uu - 2] = arguments[Uu];
        const Zu = this.items.slice();
        return Zu.splice.apply(Zu, arguments), Zu
      }
      shuffle() {
        return this.move((uu => {
          let Eu = this.items.length;
          for (; 0 != Eu;) {
            let uu = Math.floor(Math.random() * Eu);
            Eu--, [this[Eu], this[uu]] = [this[uu], this[Eu]]
          }
        }))
      }
      move(uu) {
        return this.isMovingItems = !0, uu(this), this.isMovingItems = !1, this
      } [cu](uu) {
        let Eu = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        const ju = this[Du] ?? this;
        return Eu || ju.deletedIndexes[uu] ? ju.items[uu] : ju.tmpItems[uu] || ju.items[uu]
      } [Nu](uu) {
        const Eu = this[Du] ?? this;
        Eu.items[uu] = void 0, Eu._needsCompaction = !0
      } [gu]() {
        const uu = this.tmpItems;
        this.tmpItems = this.items.slice(), this.deletedIndexes.length > 0 && (this.$reindexChildren(0, uu), this.deletedIndexes.length = 0)
      } [eu]() {
        const uu = this[Du] ?? this;
        uu._needsCompaction && (uu._needsCompaction = !1, uu.items = uu.items.filter((uu => void 0 !== uu)))
      } [Ou](uu, Eu, ju) {
        const su = this[Du] ?? this,
          Uu = su.items;
        let Zu = !1;
        for (let Xu = 0; Xu < Uu.length; Xu++) {
          const lu = Uu[Xu];
          uu.has(Xu) ? ju(lu) : (Zu = !0, Eu(lu, Xu), su[Nu](Xu))
        }
        Zu && su[eu]()
      }
      toArray() {
        return this.items.slice(0)
      }
      toJSON() {
        return this.toArray().map((uu => "function" === typeof uu.toJSON ? uu.toJSON() : uu))
      }
      clone(uu) {
        let Eu;
        return uu ? (Eu = new ss, Eu.push(...this.items)) : Eu = new ss(...this.map((uu => uu[Yu] ? uu.clone() : uu))), Eu
      }
    }
    pE("array", {
      constructor: ss
    });
    class Us {
      keyByIndex = new Map;
      indexByKey = Object.create(null);
      nextIndex = 0;
      snapshots;
      indexOf(uu) {
        const Eu = this.indexByKey[uu];
        return void 0 === Eu ? void 0 : Eu
      }
      assign(uu) {
        const Eu = this.nextIndex++;
        return this.indexByKey[uu] = Eu, this.keyByIndex.set(Eu, uu), Eu
      }
      snapshot(uu, Eu) {
        (this.snapshots ??= new Map).set(uu, Eu)
      }
      forgetSnapshot(uu) {
        this.snapshots?.delete(uu)
      }
      snapshotAt(uu) {
        return this.snapshots?.get(uu)
      }
      setIndex(uu, Eu) {
        this.keyByIndex.set(uu, Eu), this.indexByKey[Eu] = uu
      }
      keyOf(uu) {
        return this.keyByIndex.get(uu)
      }
      cleanupAfterEncode() {
        if (void 0 !== this.snapshots) {
          for (const [uu] of this.snapshots) {
            const Eu = this.keyByIndex.get(uu);
            void 0 !== Eu && (delete this.indexByKey[Eu], this.keyByIndex.delete(uu))
          }
          this.snapshots.clear()
        }
      }
      reset() {
        this.indexByKey = Object.create(null), this.keyByIndex.clear(), this.snapshots?.clear(), this.nextIndex = 0
      }
    }
    class Zs {
      [Yu];
      [lu];
      childType;
      [hu];
      $items = new Map;
      journal = new Us;
      _stream;
      get maxPerTick() {
        return this._stream?.maxPerTick ?? 32
      }
      set maxPerTick(uu) {
        (this._stream ??= dE()).maxPerTick = uu
      }
      get priority() {
        return this._stream?.priority
      }
      set priority(uu) {
        (this._stream ??= dE()).priority = uu
      }
      get $indexes() {
        return this.journal.keyByIndex
      }
      get _collectionIndexes() {
        return this.journal.indexByKey
      }
      static[fu] = rj;
      static[Cu] = nj;
      static COLLECTION_KIND = Bj;
      static[bu](uu, Eu, ju) {
        if (!ju || "string" === typeof uu[hu]) return !0;
        const su = uu[cu](Eu) ?? uu.journal.snapshotAt(Eu);
        return ju.isChangeTreeVisible(su[Yu])
      }
      static is(uu) {
        return void 0 !== uu.map
      }
      constructor(uu) {
        if (Object.defineProperty(this, Yu, {
            value: new kj(this),
            enumerable: !1,
            writable: !0
          }), this[hu] = void 0, uu)
          if (uu instanceof Map || uu instanceof Zs) uu.forEach(((uu, Eu) => this.set(Eu, uu)));
          else
            for (const Eu in uu) this.set(Eu, uu[Eu])
      }
      static initializeForDecoder() {
        const uu = Object.create(Zs.prototype);
        return uu.$items = new Map, uu.journal = new Us, uu[hu] = void 0, vj(uu), uu
      } [Symbol.iterator]() {
        return this.$items[Symbol.iterator]()
      }
      get[Symbol.toStringTag]() {
        return this.$items[Symbol.toStringTag]
      }
      static get[Symbol.species]() {
        return Zs
      }
      set(uu, Eu) {
        if (void 0 === Eu || null === Eu) throw new Error(`MapSchema#set('${uu}', ${Eu}): trying to set ${Eu} value on '${uu}'.`);
        "object" === typeof Eu && this[hu] && Rj(Eu, this[hu], this, uu), uu = uu.toString();
        const ju = this[Yu],
          su = void 0 !== Eu[Yu],
          Zu = this.journal;
        let Xu, lu = Zu.indexOf(uu);
        if (void 0 !== lu) {
          Xu = Uu.REPLACE;
          const ju = this.$items.get(uu);
          if (ju === Eu) return;
          su && (Xu = Uu.DELETE_AND_ADD, void 0 !== ju && ju[Yu].root?.remove(ju[Yu])), void 0 !== Zu.snapshotAt(lu) && Zu.forgetSnapshot(lu)
        } else lu = Zu.assign(uu), Xu = Uu.ADD;
        return this.$items.set(uu, Eu), Xu === Uu.ADD && ju.isStreamCollection ? void 0 !== ju.root && PE(this, ju.root, lu) : ju.change(lu, Xu), su && Eu[Yu].setParent(this, ju.root, lu), this
      }
      get(uu) {
        return this.$items.get(uu)
      }
      getOrInsert(uu, Eu) {
        return this.$items.has(uu) ? this.$items.get(uu) : (this.set(uu, Eu), Eu)
      }
      getOrInsertComputed(uu, Eu) {
        if (this.$items.has(uu)) return this.$items.get(uu);
        const ju = Eu(uu);
        return this.set(uu, ju), ju
      }
      delete(uu) {
        if (!this.$items.has(uu)) return !1;
        const Eu = this.journal.indexOf(uu),
          ju = this.$items.get(uu),
          su = this[Yu];
        if (su.isStreamCollection) {
          const Uu = su.root;
          let Zu = !1;
          return void 0 !== Uu && (Zu = oE(this, Uu, this[lu], Eu)), void 0 !== ju?.[Yu] && Uu?.remove(ju[Yu]), this.$items.delete(uu), Zu || this.journal.snapshot(Eu, ju), !0
        }
        return this.journal.snapshot(Eu, ju), su.delete(Eu), this.$items.delete(uu)
      }
      clear() {
        const uu = this[Yu];
        uu.discard(), uu.forEachChild(((Eu, ju) => {
          uu.root?.remove(Eu)
        })), this.journal.reset(), this.$items.clear(), uu.operation(Uu.CLEAR)
      } [Mu]() {
        const uu = this[Yu];
        if (uu.isStreamCollection) throw new Error("@colyseus/schema: cannot reset a streamed MapSchema (pooling not supported).");
        this.$items.forEach((uu => uu?.[Mu]?.())), this.$items.clear(), this.journal.reset(), uu.recycle(), this[lu] = void 0
      }
      has(uu) {
        return this.$items.has(uu)
      }
      forEach(uu) {
        this.$items.forEach(uu)
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
        this[Yu].pause()
      }
      resumeTracking() {
        this[Yu].resume()
      }
      untracked(uu) {
        return this[Yu].untracked(uu)
      }
      get isTrackingPaused() {
        return this[Yu].paused
      }
      setIndex(uu, Eu) {
        this.journal.setIndex(uu, Eu)
      }
      getIndex(uu) {
        return this.journal.keyOf(uu)
      } [cu](uu) {
        const Eu = this.journal.keyOf(uu);
        return void 0 !== Eu ? this.$items.get(Eu) : void 0
      } [Nu](uu) {
        const Eu = this.journal.keyOf(uu);
        void 0 !== Eu && (this.$items.delete(Eu), this.journal.keyByIndex.delete(uu))
      } [Ou](uu, Eu, ju) {
        let su = null;
        if (this.$items.forEach(((Uu, Zu) => {
            uu.has(Zu) ? ju(Uu) : ((su ??= new Set).add(Zu), Eu(Uu, Zu))
          })), null !== su) {
          su.forEach((uu => {
            this.$items.delete(uu), delete this.journal.indexByKey[uu]
          }));
          const uu = [];
          this.journal.keyByIndex.forEach(((Eu, ju) => {
            su.has(Eu) && uu.push(ju)
          }));
          for (let Eu = 0; Eu < uu.length; Eu++) this.journal.keyByIndex.delete(uu[Eu])
        }
      } [gu]() {
        this.journal.cleanupAfterEncode()
      }
      _dropView(uu) {
        KE(this, uu)
      }
      _unregister() {}
      toJSON() {
        return Object.fromEntries(Array.from(this, (uu => {
          let [Eu, ju] = uu;
          return [Eu, "function" === typeof ju.toJSON ? ju.toJSON() : ju]
        })))
      }
      clone(uu) {
        let Eu;
        return uu ? Eu = Object.assign(new Zs, this) : (Eu = new Zs, this.forEach(((uu, ju) => {
          uu[Yu] ? Eu.set(ju, uu.clone()) : Eu.set(ju, uu)
        }))), Eu
      }
    }
    pE("map", {
      constructor: Zs
    });
    class Xs {
      [Yu];
      [lu];
      [hu];
      $items = new Map;
      deletedItems = {};
      $refId = 0;
      _stream;
      get maxPerTick() {
        return this._stream?.maxPerTick ?? 32
      }
      set maxPerTick(uu) {
        (this._stream ??= dE()).maxPerTick = uu
      }
      get priority() {
        return this._stream?.priority
      }
      set priority(uu) {
        (this._stream ??= dE()).priority = uu
      }
      static[fu] = Qj;
      static[Cu] = nj;
      static COLLECTION_KIND = xj;
      static[bu](uu, Eu, ju) {
        return !ju || "string" === typeof uu[hu] || ju.isChangeTreeVisible((uu[cu](Eu) ?? uu.deletedItems[Eu])[Yu])
      }
      static is(uu) {
        return void 0 !== uu.collection
      }
      constructor(uu) {
        Object.defineProperty(this, Yu, {
          value: new kj(this),
          enumerable: !1,
          writable: !0
        }), this[hu] = void 0, uu && uu.forEach((uu => this.add(uu)))
      }
      static initializeForDecoder() {
        const uu = Object.create(Xs.prototype);
        return uu.$items = new Map, uu.deletedItems = {}, uu.$refId = 0, uu[hu] = void 0, vj(uu), uu
      }
      add(uu) {
        const Eu = this.$refId++,
          ju = this[Yu];
        return this.$items.set(Eu, uu), ju.isStreamCollection ? void 0 !== ju.root && PE(this, ju.root, Eu) : ju.change(Eu), void 0 !== uu[Yu] && uu[Yu].setParent(this, ju.root, Eu), Eu
      }
      at(uu) {
        const Eu = Array.from(this.$items.keys())[uu];
        return this.$items.get(Eu)
      }
      entries() {
        return this.$items.entries()
      }
      delete(uu) {
        const Eu = this.$items.entries();
        let ju, su;
        for (;
          (su = Eu.next()) && !su.done;)
          if (uu === su.value[1]) {
            ju = su.value[0];
            break
          } if (void 0 === ju) return !1;
        const Uu = this[Yu];
        if (Uu.isStreamCollection) {
          const uu = Uu.root,
            Eu = this.$items.get(ju);
          return void 0 !== uu && oE(this, uu, this[lu], ju), void 0 !== Eu?.[Yu] && uu?.remove(Eu[Yu]), this.deletedItems[ju] = Eu, this.$items.delete(ju)
        }
        return this.deletedItems[ju] = Uu.delete(ju), this.$items.delete(ju)
      }
      clear() {
        const uu = this[Yu];
        uu.discard(), uu.forEachChild(((Eu, ju) => {
          uu.root?.remove(Eu)
        })), this.$items.clear(), uu.operation(Uu.CLEAR)
      } [Mu]() {
        const uu = this[Yu];
        if (uu.isStreamCollection) throw new Error("@colyseus/schema: cannot reset a streamed CollectionSchema (pooling not supported).");
        this.$items.forEach((uu => uu?.[Mu]?.())), this.$items.clear(), this.deletedItems = {}, this.$refId = 0, uu.recycle(), this[lu] = void 0
      }
      has(uu) {
        return Array.from(this.$items.values()).some((Eu => Eu === uu))
      }
      forEach(uu) {
        this.$items.forEach(((Eu, ju, su) => uu(Eu, ju, this)))
      }
      values() {
        return this.$items.values()
      }
      get size() {
        return this.$items.size
      }
      pauseTracking() {
        this[Yu].pause()
      }
      resumeTracking() {
        this[Yu].resume()
      }
      untracked(uu) {
        return this[Yu].untracked(uu)
      }
      get isTrackingPaused() {
        return this[Yu].paused
      } [Symbol.iterator]() {
        return this.$items.values()
      }
      setIndex(uu, Eu) {}
      getIndex(uu) {
        return uu
      } [cu](uu) {
        return this.$items.get(uu)
      } [Nu](uu) {
        this.$items.delete(uu)
      } [Ou](uu, Eu, ju) {
        let su = null;
        if (this.$items.forEach(((Uu, Zu) => {
            uu.has(Zu) ? ju(Uu) : ((su ??= []).push(Zu), Eu(Uu, Zu))
          })), null !== su)
          for (let Uu = 0; Uu < su.length; Uu++) this[Nu](su[Uu])
      } [gu]() {
        for (const uu in this.deletedItems) delete this.deletedItems[uu]
      }
      _dropView(uu) {
        KE(this, uu)
      }
      _unregister() {}
      toArray() {
        return Array.from(this.$items.values())
      }
      toJSON() {
        const uu = [];
        return this.forEach(((Eu, ju) => {
          uu.push("function" === typeof Eu.toJSON ? Eu.toJSON() : Eu)
        })), uu
      }
      clone(uu) {
        let Eu;
        return uu ? Eu = Object.assign(new Xs, this) : (Eu = new Xs, this.forEach((uu => {
          uu[Yu] ? Eu.add(uu.clone()) : Eu.add(uu)
        }))), Eu
      }
    }
    pE("collection", {
      constructor: Xs
    });
    class ls {
      [Yu];
      [lu];
      [hu];
      $items = new Map;
      deletedItems = {};
      $refId = 0;
      _stream;
      get maxPerTick() {
        return this._stream?.maxPerTick ?? 32
      }
      set maxPerTick(uu) {
        (this._stream ??= dE()).maxPerTick = uu
      }
      get priority() {
        return this._stream?.priority
      }
      set priority(uu) {
        (this._stream ??= dE()).priority = uu
      }
      static[fu] = Qj;
      static[Cu] = nj;
      static COLLECTION_KIND = tj;
      static[bu](uu, Eu, ju) {
        return !ju || "string" === typeof uu[hu] || ju.isVisible((uu[cu](Eu) ?? uu.deletedItems[Eu])[Yu])
      }
      static is(uu) {
        return void 0 !== uu.set
      }
      constructor(uu) {
        Object.defineProperty(this, Yu, {
          value: new kj(this),
          enumerable: !1,
          writable: !0
        }), this[hu] = void 0, uu && uu.forEach((uu => this.add(uu)))
      }
      static initializeForDecoder() {
        const uu = Object.create(ls.prototype);
        return uu.$items = new Map, uu.deletedItems = {}, uu.$refId = 0, uu[hu] = void 0, vj(uu), uu
      }
      add(uu) {
        if (this.has(uu)) return !1;
        const Eu = this.$refId++,
          ju = this[Yu];
        return this.$items.set(Eu, uu), ju.isStreamCollection ? void 0 !== ju.root && PE(this, ju.root, Eu) : ju.change(Eu, Uu.ADD), void 0 !== uu[Yu] && uu[Yu].setParent(this, ju.root, Eu), Eu
      }
      entries() {
        return this.$items.entries()
      }
      delete(uu) {
        const Eu = this.$items.entries();
        let ju, su;
        for (;
          (su = Eu.next()) && !su.done;)
          if (uu === su.value[1]) {
            ju = su.value[0];
            break
          } if (void 0 === ju) return !1;
        const Uu = this[Yu];
        if (Uu.isStreamCollection) {
          const uu = Uu.root,
            Eu = this.$items.get(ju);
          return void 0 !== uu && oE(this, uu, this[lu], ju), void 0 !== Eu?.[Yu] && uu?.remove(Eu[Yu]), this.deletedItems[ju] = Eu, this.$items.delete(ju)
        }
        return this.deletedItems[ju] = Uu.delete(ju), this.$items.delete(ju)
      }
      clear() {
        const uu = this[Yu];
        uu.discard(), this.$items.clear(), uu.operation(Uu.CLEAR)
      } [Mu]() {
        const uu = this[Yu];
        if (uu.isStreamCollection) throw new Error("@colyseus/schema: cannot reset a streamed SetSchema (pooling not supported).");
        this.$items.forEach((uu => uu?.[Mu]?.())), this.$items.clear(), this.deletedItems = {}, this.$refId = 0, uu.recycle(), this[lu] = void 0
      }
      has(uu) {
        const Eu = this.$items.values();
        let ju, su = !1;
        for (;
          (ju = Eu.next()) && !ju.done;)
          if (uu === ju.value) {
            su = !0;
            break
          } return su
      }
      forEach(uu) {
        this.$items.forEach(((Eu, ju, su) => uu(Eu, ju, this)))
      }
      values() {
        return this.$items.values()
      }
      get size() {
        return this.$items.size
      }
      pauseTracking() {
        this[Yu].pause()
      }
      resumeTracking() {
        this[Yu].resume()
      }
      untracked(uu) {
        return this[Yu].untracked(uu)
      }
      get isTrackingPaused() {
        return this[Yu].paused
      } [Symbol.iterator]() {
        return this.$items.values()
      }
      setIndex(uu, Eu) {}
      getIndex(uu) {
        return uu
      } [cu](uu) {
        return this.$items.get(uu)
      } [Nu](uu) {
        this.$items.delete(uu)
      } [Ou](uu, Eu, ju) {
        let su = null;
        if (this.$items.forEach(((Uu, Zu) => {
            uu.has(Zu) ? ju(Uu) : ((su ??= []).push(Zu), Eu(Uu, Zu))
          })), null !== su)
          for (let Uu = 0; Uu < su.length; Uu++) this[Nu](su[Uu])
      } [gu]() {
        for (const uu in this.deletedItems) delete this.deletedItems[uu]
      }
      _dropView(uu) {
        KE(this, uu)
      }
      _unregister() {}
      toArray() {
        return Array.from(this.$items.values())
      }
      toJSON() {
        const uu = [];
        return this.forEach(((Eu, ju) => {
          uu.push("function" === typeof Eu.toJSON ? Eu.toJSON() : Eu)
        })), uu
      }
      clone(uu) {
        let Eu;
        return uu ? Eu = Object.assign(new ls, this) : (Eu = new ls, this.forEach((uu => {
          uu[Yu] ? Eu.add(uu.clone()) : Eu.add(uu)
        }))), Eu
      }
    }
    pE("set", {
      constructor: ls
    });
    class qs {
      [Yu];
      [lu];
      [hu];
      $items = new Map;
      $nextPosition = 0;
      _itemIndex = new Map;
      _stream;
      get maxPerTick() {
        return this._stream?.maxPerTick ?? 32
      }
      set maxPerTick(uu) {
        (this._stream ??= dE()).maxPerTick = uu
      }
      get priority() {
        return this._stream?.priority
      }
      set priority(uu) {
        (this._stream ??= dE()).priority = uu
      }
      static $isStream = !0;
      static[fu] = Qj;
      static[Cu] = nj;
      static COLLECTION_KIND = Tj;
      static[bu](uu, Eu, ju) {
        if (!ju) return !0;
        const su = uu[cu](Eu);
        return void 0 !== su && ju.isVisible(su[Yu])
      }
      static is(uu) {
        return uu && void 0 !== uu.stream
      }
      constructor() {
        Object.defineProperty(this, Yu, {
          value: new kj(this),
          enumerable: !1,
          writable: !0
        }), this[hu] = void 0
      }
      static initializeForDecoder() {
        const uu = Object.create(qs.prototype);
        return uu.$items = new Map, uu.$nextPosition = 0, uu._itemIndex = new Map, uu[hu] = void 0, vj(uu), uu
      }
      add(uu) {
        if (this._itemIndex.has(uu)) return -1;
        const Eu = this.$nextPosition++;
        this.$items.set(Eu, uu), this._itemIndex.set(uu, Eu);
        const ju = this[Yu].root;
        return void 0 !== uu[Yu] && uu[Yu].setParent(this, ju, Eu), void 0 !== ju && PE(this, ju, Eu), Eu
      }
      remove(uu) {
        const Eu = this._itemIndex.get(uu);
        if (void 0 === Eu) return !1;
        this._itemIndex.delete(uu), this.$items.delete(Eu);
        const ju = this[Yu].root;
        return void 0 !== ju && (oE(this, ju, this[lu], Eu), void 0 !== uu[Yu] && ju.remove(uu[Yu])), !0
      }
      has(uu) {
        return this._itemIndex.has(uu)
      }
      clear() {
        const uu = this[Yu].root;
        if (void 0 !== uu) {
          ! function(uu, Eu, ju) {
            const su = uu._stream;
            if (void 0 !== su) {
              su.broadcastPending.clear();
              for (const uu of su.sentBroadcast) su.broadcastDeletes.add(uu);
              su.sentBroadcast.clear(), Eu.forEachActiveView((uu => {
                su.pendingByView.get(uu.id)?.clear();
                const Eu = su.sentByView.get(uu.id);
                if (void 0 !== Eu && Eu.size > 0) {
                  let su = uu.changes.get(ju);
                  void 0 === su && (su = new Map, uu.changes.set(ju, su));
                  for (const uu of Eu) su.set(uu, Uu.DELETE);
                  Eu.clear()
                }
              }))
            }
          }(this, uu, this[lu]);
          for (const Eu of this.$items.values()) void 0 !== Eu[Yu] && uu.remove(Eu[Yu])
        }
        this.$items.clear(), this._itemIndex.clear()
      }
      forEach(uu) {
        for (const [Eu, ju] of this.$items) uu(ju, Eu, this)
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
      setIndex(uu, Eu) {}
      getIndex(uu) {
        return uu
      } [cu](uu) {
        return this.$items.get(uu)
      } [Nu](uu) {
        const Eu = this.$items.get(uu);
        void 0 !== Eu && (this._itemIndex.delete(Eu), this.$items.delete(uu))
      } [Ou]() {} [gu]() {}
      toArray() {
        return Array.from(this.$items.values())
      }
      toJSON() {
        const uu = [];
        return this.forEach((Eu => {
          uu.push("function" === typeof Eu?.toJSON ? Eu.toJSON() : Eu)
        })), uu
      }
      clone(uu) {
        if (uu) {
          return Object.assign(new qs, this)
        }
        const Eu = new qs;
        return Eu.maxPerTick = this.maxPerTick, this.forEach((uu => {
          Eu.add("function" === typeof uu?.clone ? uu.clone() : uu)
        })), Eu
      }
      _dropView(uu) {
        KE(this, uu)
      }
      _unregister() {}
    }
    pE("stream", {
      constructor: qs
    });
    class fs {
      [pu] = !0;
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
      constructor(uu) {
        this._type = uu
      }
      default (uu) {
        return this._default = uu, this._hasDefault = !0, this
      }
      view(uu) {
        return this._view = uu ?? -1, this
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
        const uu = this._type;
        if (uu && "object" === typeof uu && void 0 !== uu.array) throw new Error(JE);
        return this._stream = !0, this
      }
      priority(uu) {
        return this._streamPriority = uu, this
      }
      deprecated() {
        let uu = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
        return this._deprecated = !0, this._deprecatedThrows = uu, this
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

    function Cs(uu) {
      return null != uu && !0 === uu[pu]
    }

    function bs(uu) {
      return () => new fs(uu)
    }

    function cs(uu) {
      if (Cs(uu)) {
        const Eu = uu._type;
        throw new Error(`t.array/map/set/collection(): a t.* builder is not a valid element type \u2014 ${"string"===typeof Eu?`use the type name instead: t.array("${Eu}")`:'collections accept a Schema class or a primitive type name ("string", "number", \u2026)'}.`)
      }
      return uu
    }

    function Ns(uu) {
      return new fs({
        quantized: rE(uu)
      })
    }
    const Os = Object.freeze({
        string: bs("string"),
        number: bs("number"),
        boolean: bs("boolean"),
        int8: bs("int8"),
        uint8: bs("uint8"),
        int16: bs("int16"),
        uint16: bs("uint16"),
        int32: bs("int32"),
        uint32: bs("uint32"),
        int64: bs("int64"),
        uint64: bs("uint64"),
        float32: bs("float32"),
        float64: bs("float64"),
        bigint64: bs("bigint64"),
        biguint64: bs("biguint64"),
        ref: uu => new fs(uu),
        array: uu => new fs({
          array: cs(uu)
        }),
        map: uu => new fs({
          map: cs(uu)
        }),
        set: uu => new fs({
          set: cs(uu)
        }),
        collection: uu => new fs({
          collection: cs(uu)
        }),
        stream: uu => {
          const Eu = new fs({
            stream: cs(uu)
          });
          return Eu._stream = !0, Eu
        },
        quantized: Ns,
        angle: uu => Ns({
          min: 0,
          max: 2 * Math.PI,
          mode: "wrap",
          bits: uu?.bits ?? 16
        })
      }),
      Ys = -1;

    function hs(uu) {
      return IE.register(uu), uu
    }

    function Ds() {
      let uu = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Ys;
      return function(Eu, ju) {
        const su = HE.initialize(Eu.constructor);
        HE.setTag(su, ju, uu)
      }
    }

    function gs(uu, Eu) {
      const ju = HE.initialize(uu.constructor);
      HE.setUnreliable(ju, Eu)
    }

    function Ms(uu, Eu) {
      const ju = HE.initialize(uu.constructor);
      HE.setPatchOnly(ju, Eu)
    }

    function es(uu, Eu) {
      const ju = HE.initialize(uu.constructor);
      HE.setFullStateOnly(ju, Eu)
    }

    function Gs(uu, Eu) {
      return function(ju, su) {
        const Uu = ju.constructor;
        if (!uu) throw new Error(`${Uu.name}: @type() reference provided for "${su}" is undefined. Make sure you don't have any circular dependencies.`);
        uu = BE(uu, `${Uu.name}.${su}`), IE.register(Uu);
        const Zu = Object.getPrototypeOf(Uu)[Symbol.metadata],
          Xu = HE.initialize(Uu);
        let lu = Xu[su];
        if (void 0 !== Xu[lu]) {
          if (Xu[lu].deprecated) return;
          if (void 0 !== Xu[lu].type) {
            const uu = new Error(`@colyseus/schema: Duplicate '${su}' definition on '${Uu.name}'.\nCheck @type() annotation`);
            throw new Error(`${uu.message} ${uu.stack.split("\n")[4].trim()}`)
          }
        } else lu = Xu[au] ?? (Zu && Zu[au]) ?? -1, lu++;
        if (Eu && Eu.manual) HE.addField(Xu, lu, su, uu, {
          enumerable: !0,
          configurable: !0,
          writable: !0
        });
        else {
          const {
            complexTypeKlass: Eu,
            childType: ju
          } = FE(uu);
          HE.addField(Xu, lu, su, uu, ws(su, lu, ju, Eu))
        }
        Xu[wu][su] && Object.defineProperty(ju, su, Xu[wu][su]), ("string" === typeof uu || QE(uu)) && (Xu[du] || Object.defineProperty(Xu, du, {
          value: [],
          enumerable: !1,
          configurable: !0,
          writable: !0
        }), Xu[du][lu] = "string" === typeof uu ? EE[uu] : SE(uu.quantized))
      }
    }
    const ps = {
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

    function ws(uu, Eu, ju, su) {
      let Zu;
      return Zu = su ? function(uu, Eu, ju, su) {
        const Zu = su.constructor === ss,
          Xu = su.constructor === Zs;
        return function(uu) {
          const su = this[Gu],
            lu = su[Eu];
          if (uu !== lu) {
            if (void 0 !== uu && null !== uu) {
              if (!Zu || uu instanceof ss)
                if (!Xu || uu instanceof Zs) uu[hu] = ju;
                else {
                  const Eu = new Zs;
                  if (Eu[hu] = ju, uu instanceof Map) uu.forEach(((uu, ju) => Eu.set(ju, uu)));
                  else
                    for (const ju in uu) Eu.set(ju, uu[ju]);
                  uu = Eu
                }
              else {
                const Eu = new ss;
                Eu[hu] = ju, Eu.push(...uu), uu = Eu
              }
              const su = this[Yu],
                fu = this.constructor;
              void 0 !== lu && null !== lu && lu[Yu] ? (su.root?.remove(lu[Yu]), fu[qu](su, Eu, Uu.DELETE_AND_ADD)) : fu[qu](su, Eu, Uu.ADD), uu[Yu]?.setParent(this, su.root, Eu)
            } else void 0 !== lu && null !== lu && this[Yu].delete(Eu);
            su[Eu] = uu
          }
        }
      }(0, Eu, ju, su) : "string" === typeof ju ? function(uu, Eu, ju) {
        const su = ps[ju],
          Zu = "string" === ju,
          Xu = "boolean" === ju;
        return function(ju) {
          const lu = this[Gu],
            fu = lu[Eu];
          if (ju !== fu) {
            if (void 0 !== ju && null !== ju) {
              if (!Xu && void 0 !== su && typeof ju !== su && (!Zu || null !== ju)) {
                const Eu = ju && ju.constructor ? ` (${ju.constructor.name})` : "";
                throw new zj(`a '${su}' was expected, but '${JSON.stringify(ju)}'${Eu} was provided in ${this.constructor.name}#${uu}`)
              }
              this.constructor[qu](this[Yu], Eu, Uu.ADD)
            } else void 0 !== fu && null !== fu && this[Yu].delete(Eu);
            lu[Eu] = ju
          }
        }
      }(uu, Eu, ju) : QE(ju) ? function(uu, Eu, ju) {
        return function(su) {
          const Zu = this[Gu],
            Xu = Zu[Eu];
          if (void 0 !== su && null !== su) {
            if ("number" !== typeof su) throw new zj(`a 'number' was expected, but '${JSON.stringify(su)}' was provided in ${this.constructor.name}#${uu}`);
            if ((su = WE(ju, iE(ju, su))) === Xu) return;
            this.constructor[qu](this[Yu], Eu, Uu.ADD)
          } else {
            if (su === Xu) return;
            void 0 !== Xu && null !== Xu && this[Yu].delete(Eu)
          }
          Zu[Eu] = su
        }
      }(uu, Eu, ju.quantized) : function(uu, Eu, ju) {
        return function(su) {
          const Zu = this[Gu],
            Xu = Zu[Eu];
          if (su !== Xu) {
            if (void 0 !== su && null !== su) {
              Rj(su, ju, this, uu);
              const Zu = this[Yu],
                lu = this.constructor;
              void 0 !== Xu && null !== Xu && Xu[Yu] ? (Zu.root?.remove(Xu[Yu]), lu[qu](Zu, Eu, Uu.DELETE_AND_ADD)) : lu[qu](Zu, Eu, Uu.ADD), su[Yu]?.setParent(this, Zu.root, Eu)
            } else void 0 !== Xu && null !== Xu && this[Yu].delete(Eu);
            Zu[Eu] = su
          }
        }
      }(uu, Eu, ju), {
        get: function() {
          return this[Gu][Eu]
        },
        set: Zu,
        enumerable: !0,
        configurable: !0
      }
    }

    function ds() {
      let uu = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
      return function(Eu, ju) {
        const su = HE.initialize(Eu.constructor);
        HE.setDeprecated(su, ju), uu && (su[wu] ??= {}, su[wu][ju] = {
          get: function() {
            throw new Error(`${ju} is deprecated.`)
          },
          set: function(uu) {},
          enumerable: !1,
          configurable: !0
        }, Object.defineProperty(Eu, ju, su[wu][ju]))
      }
    }
    let as = !1;

    function Ps(uu, Eu, ju) {
      as || (as = !0, console.warn("@colyseus/schema: defineTypes() is deprecated and will be removed in a future release. Use schema() with t.* field builders instead \u2192 https://docs.colyseus.io/state/schema"));
      for (let su in Eu) Gs(Eu[su], ju)(uu.prototype, su);
      return uu
    }

    function os(uu, Eu) {
      let ju = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : ms;
      if (null == uu || "object" !== typeof uu) throw new Error(`schema(): first argument must be a fields object (got ${typeof uu}).`);
      const su = {},
        Uu = {},
        Zu = {},
        Xu = {},
        lu = (uu, Eu) => {
          if (Eu.hasDefault)((uu, Eu) => {
            "function" === typeof Eu ? Xu[uu] = Eu : Eu && "function" === typeof Eu.clone ? Xu[uu] = () => Eu.clone() : Zu[uu] = Eu
          })(uu, Eu.default);
          else if (!Eu.optional) {
            const ju = function(uu) {
              if (uu && "object" === typeof uu) {
                if (void 0 !== uu.array) return () => new ss;
                if (void 0 !== uu.map) return () => new Zs;
                if (void 0 !== uu.set) return () => new ls;
                if (void 0 !== uu.collection) return () => new Xs;
                if (void 0 !== uu.stream) return () => new qs
              } else if ("function" === typeof uu && ms.is(uu) && (!uu.prototype.initialize || 0 === uu.prototype.initialize.length)) return () => new uu
            }(Eu.type);
            ju && (Xu[uu] = ju)
          }
        },
        qu = {},
        fu = [],
        Cu = [],
        bu = {},
        cu = [],
        Nu = [],
        Ou = {},
        Yu = [];
      for (const Gu in uu) {
        const ju = uu[Gu],
          Zu = `schema(${Eu?`'${Eu}'`:""}): field '${Gu}'`;
        if (Cs(ju)) {
          const uu = ju.toDefinition();
          if (uu.noSync) {
            if (void 0 !== uu.view || uu.unreliable || uu.patchOnly || uu.fullStateOnly || uu.stream) throw new Error(`${Zu} uses .noSync() together with a sync-only modifier (.view/.unreliable/.patchOnly/.fullStateOnly/.stream). A local-only field cannot be synchronized.`);
            lu(Gu, uu);
            continue
          }
          if (uu.patchOnly && uu.fullStateOnly) throw new Error(`${Zu} uses .patchOnly() together with .fullStateOnly(). Those are the only two delivery channels, so the field would never reach a client \u2014 use .noSync() if that is intended.`);
          const Eu = BE(uu.type, Zu);
          if ("function" === typeof Eu && !ms.is(Eu)) throw new Error(`${Zu} is a synced ref to non-Schema class '${Eu.name||"(anonymous)"}' \u2014 use .noSync(), or Metadata.setFields().`);
          su[Gu] = Eu, void 0 !== uu.view && (qu[Gu] = uu.view), uu.unreliable && fu.push(Gu), uu.patchOnly && Cu.push(Gu), uu.deprecated && (bu[Gu] = uu.deprecatedThrows), uu.fullStateOnly && cu.push(Gu), uu.stream && Nu.push(Gu), void 0 !== uu.streamPriority && (Ou[Gu] = uu.streamPriority), uu.optional && Yu.push(Gu), lu(Gu, uu)
        } else {
          if ("function" !== typeof ju) throw new Error(`${Zu} must be a t.* builder, Schema subclass, or method (got ${typeof ju}).`);
          ms.is(ju) ? (su[Gu] = ju, ju.prototype.initialize && 0 !== ju.prototype.initialize.length || (Xu[Gu] = () => new ju)) : Uu[Gu] = ju
        }
      }
      const hu = uu => {
          for (const Eu in Zu) uu[Eu] = Zu[Eu];
          for (const Eu in Xu) uu[Eu] = Xu[Eu]()
        },
        Du = () => {
          const uu = {};
          return hu(uu), uu
        },
        gu = "function" === typeof Uu.initialize,
        Mu = Uu.initialize ?? ju._initialize,
        eu = class extends ju {
          constructor() {
            for (var uu = arguments.length, Eu = new Array(uu), ju = 0; ju < uu; ju++) Eu[ju] = arguments[ju];
            const Uu = Eu[0];
            void 0 === Uu ? (super(), hu(this)) : super(Object.assign(Du(), gu ? (uu => {
              const Eu = Object.keys(su),
                ju = {};
              for (const su in uu) Eu.includes(su) || (ju[su] = uu[su]);
              return ju
            })(Uu) : Uu)), Mu && new.target === eu && Mu.apply(this, Eu)
          }
        };
      Eu && Object.defineProperty(eu, "name", {
        value: Eu
      }), HE.setFields(eu, su), eu._getDefaultValues = Du, eu._initialize = Mu, Object.assign(eu.prototype, Uu);
      for (const Gu in qu) Ds(qu[Gu])(eu.prototype, Gu);
      for (const Gu of fu) gs(eu.prototype, Gu);
      for (const Gu of Cu) Ms(eu.prototype, Gu);
      for (const Gu in bu) ds(bu[Gu])(eu.prototype, Gu);
      if (cu.length > 0 || Nu.length > 0) {
        const uu = eu[Symbol.metadata];
        for (const Eu of cu) HE.setFullStateOnly(uu, Eu);
        for (const Eu of Nu) HE.setStream(uu, Eu);
        for (const Eu in Ou) HE.setStreamPriority(uu, Eu, Ou[Eu])
      }
      if (Yu.length > 0) {
        const uu = eu[Symbol.metadata];
        for (const Eu of Yu) uu[uu[Eu]].optional = !0
      }
      return eu.extend = (uu, Eu) => os(uu, Eu, eu), eu
    }

    function ks(uu) {
      const Eu = uu[Yu].root,
        ju = {
          ops: {},
          refs: []
        };
      let su = Eu.changes.next;
      for (; su;) {
        const uu = su.changeTree;
        void 0 !== uu ? (ju.refs.push(`refId#${uu.ref[lu]}`), uu.forEach(((uu, Eu) => {
          if (uu < 0 || !Eu) return;
          const su = Uu[Eu];
          ju.ops[su] || (ju.ops[su] = 0), ju.ops[su]++
        })), su = su.next) : su = su.next
      }
      return ju
    }
    class ms {
      static[fu] = Vj;
      static[Cu] = Aj;
      [lu];
      [Gu];
      static initialize(uu) {
        Object.defineProperty(uu, Yu, {
          value: new kj(uu),
          enumerable: !1,
          writable: !0
        }), uu[Gu] = []
      }
      static initializeForDecoder() {
        const uu = Object.create(this.prototype);
        return vj(uu), uu[Gu] = [], uu
      }
      static reset(uu) {
        const Eu = uu?.[Yu];
        if (void 0 === Eu || "function" !== typeof Eu.recycle) throw new Error("@colyseus/schema: Schema.reset() requires a tracked (encoder-side) instance.");
        if (void 0 !== Eu.extraParents) throw new Error(`@colyseus/schema: cannot reset a shared instance (${uu.constructor.name}) with multiple parents.`);
        uu[Mu]()
      } [Mu]() {
        const uu = this.constructor[Symbol.metadata],
          Eu = uu?.[Pu] ?? [],
          ju = this[Gu];
        for (let su = 0; su < Eu.length; su++) {
          const uu = ju[Eu[su]];
          uu?.[Mu]?.()
        }
        this[Yu].recycle(), this[lu] = void 0
      }
      static is(uu) {
        const Eu = uu[Symbol.metadata];
        return "object" === typeof Eu && null !== Eu
      }
      static isSchema(uu) {
        return "function" === typeof uu?.assign
      }
      static[qu](uu, Eu) {
        let ju = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Uu.ADD;
        uu.change(Eu, ju)
      }
      static[bu](uu, Eu, ju) {
        const su = uu.constructor[Symbol.metadata],
          Uu = su[Eu]?.tag;
        return void 0 === ju ? void 0 === Uu : void 0 === Uu || (Uu === Ys ? ju.isChangeTreeVisible(uu[Yu]) : ju.hasTagOnTree(uu[Yu], Uu))
      }
      constructor(uu) {
        ms.initialize(this), uu && ms.assignProps(this, uu)
      }
      assign(uu) {
        return ms.assignProps(this, uu), this
      }
      static assignProps(uu, Eu) {
        const ju = uu.constructor[Symbol.metadata];
        if (ju && void 0 !== ju[au])
          for (let Uu = 0; Uu <= ju[au]; Uu++) {
            const su = ju[Uu];
            if (!su) continue;
            const Zu = Eu[su.name];
            void 0 !== Zu && (uu[su.name] = Zu)
          }
        const su = Object.keys(Eu);
        for (let Uu = 0; Uu < su.length; Uu++) {
          const Zu = su[Uu];
          ju && void 0 !== ju[Zu] || (uu[Zu] = Eu[Zu])
        }
      }
      restore(uu) {
        const Eu = this.constructor[Symbol.metadata];
        for (const ju in Eu) {
          const su = Eu[ju],
            Uu = su.name,
            Zu = su.type,
            Xu = uu[Uu];
          if (void 0 !== Xu && null !== Xu)
            if ("string" === typeof Zu) this[Uu] = Xu;
            else if (ms.is(Zu)) {
            const uu = new Zu;
            uu.restore(Xu), this[Uu] = uu
          } else if ("object" === typeof Zu) {
            const uu = Object.keys(Zu)[0],
              Eu = Zu[uu];
            if ("map" === uu) {
              const uu = this[Uu];
              for (const ju in Xu)
                if (ms.is(Eu)) {
                  const su = new Eu;
                  su.restore(Xu[ju]), uu.set(ju, su)
                } else uu.set(ju, Xu[ju])
            } else if ("array" === uu) {
              const uu = this[Uu];
              for (let ju = 0; ju < Xu.length; ju++)
                if (ms.is(Eu)) {
                  const su = new Eu;
                  su.restore(Xu[ju]), uu.push(su)
                } else uu.push(Xu[ju])
            }
          }
        }
        return this
      }
      setDirty(uu, Eu) {
        const ju = this.constructor[Symbol.metadata];
        this[Yu].change(ju[ju[uu]].index, Eu)
      }
      pauseTracking() {
        this[Yu].pause()
      }
      resumeTracking() {
        this[Yu].resume()
      }
      untracked(uu) {
        return this[Yu].untracked(uu)
      }
      get isTrackingPaused() {
        return this[Yu].paused
      }
      clone() {
        const uu = Object.create(this.constructor.prototype);
        ms.initialize(uu);
        const Eu = this.constructor[Symbol.metadata];
        for (const ju in Eu) {
          const su = Eu[ju].name;
          "object" === typeof this[su] && "function" === typeof this[su]?.clone ? uu[su] = this[su].clone() : uu[su] = this[su]
        }
        return uu
      }
      toJSON() {
        const uu = {},
          Eu = this.constructor[Symbol.metadata];
        for (const ju in Eu) {
          const su = Eu[ju],
            Uu = su.name;
          su.deprecated || null === this[Uu] || "undefined" === typeof this[Uu] || (uu[Uu] = "function" === typeof this[Uu].toJSON ? this[Uu].toJSON() : this[Uu])
        }
        return uu
      }
      discardAllChanges() {
        this[Yu].discardAll()
      } [cu](uu) {
        return this[this.constructor[Symbol.metadata][uu].name]
      } [Nu](uu) {
        this[this.constructor[Symbol.metadata][uu].name] = void 0
      }
      static debugRefIds(uu) {
        let Eu = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          ju = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          su = arguments.length > 3 ? arguments[3] : void 0,
          Uu = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "";
        const Zu = Eu ? ` - ${JSON.stringify(uu.toJSON())}` : "",
          Xu = uu[Yu],
          qu = uu[lu],
          fu = su ? su.root.refCount[qu] : Xu.refCount,
          Cu = fu > 1 ? ` [\xd7${fu}]` : "";
        let bu = `${function(uu){return new Array(uu).fill(0).map(((Eu,ju)=>ju===uu-1?"\u2514\u2500 ":"   ")).join("")}(ju)}${Uu}${uu.constructor.name} (refId: ${qu})${Cu}${Zu}\n`;
        return Xu.forEachChild(((Uu, Zu) => {
          let Xu = Zu;
          "number" === typeof Zu && uu.$indexes && (Xu = uu.$indexes.get(Zu) ?? Zu);
          const lu = void 0 !== uu.forEach && void 0 !== Xu ? `["${Xu}"]: ` : "";
          bu += this.debugRefIds(Uu.ref, Eu, ju + 1, su, lu)
        })), bu
      }
      static debugRefIdEncodingOrder(uu) {
        let Eu = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "allChanges";
        const ju = [],
          su = uu[Yu];
        if ("changes" === Eu) {
          let uu = su.root.changes?.next;
          for (; uu;) uu.changeTree && ju.push(uu.changeTree.ref[lu]), uu = uu.next;
          return ju
        }
        const Uu = "allFilteredChanges" === Eu,
          Zu = new Set,
          Xu = uu => {
            Zu.has(uu) || (Zu.add(uu), uu.isFiltered === Uu && ju.push(uu.ref[lu]), uu.forEachChild(((uu, Eu) => Xu(uu))))
          };
        return Xu(su), ju
      }
      static debugRefIdsFromDecoder(uu) {
        return this.debugRefIds(uu.state, !1, 0, uu)
      }
      static debugChanges(uu) {
        let Eu = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        const ju = uu[Yu],
          su = Eu ? "allChanges" : "changes";
        let Zu = `${uu.constructor.name} (${uu[lu]}) -> .${su}:\n`;
        return Eu ? ju.forEachLive((uu => {
          Zu += `- [${uu}]: ADD (${JSON.stringify(ju.getValue(Number(uu),!0))})\n`
        })) : ju.forEach(((uu, Eu) => {
          uu < 0 || !Eu || (Zu += `- [${uu}]: ${Uu[Eu]} (${JSON.stringify(ju.getValue(Number(uu),!1))})\n`)
        })), Zu
      }
    }
    Zu(ms);
    const vs = {
      value: 0,
      enumerable: !1,
      writable: !0
    };
    class Ks {
      types;
      nextUniqueId = 0;
      changeTrees = {};
      get refCount() {
        const uu = {};
        for (const Eu in this.changeTrees) uu[Eu] = this.changeTrees[Eu].refCount;
        return uu
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
      enqueueFilterRefresh(uu) {
        this.types.hasFilters && (uu.flags & Pj || (uu.flags |= Pj, this.pendingFilterRefresh.push(uu)))
      }
      _nodePool = [];
      _nextViewId = 0;
      _freeViewIds = [];
      acquireViewId() {
        return this._freeViewIds.length > 0 ? this._freeViewIds.pop() : this._nextViewId++
      }
      releaseViewId(uu) {
        this._freeViewIds.push(uu)
      }
      activeViews = new Map;
      streamTrees = new Set;
      registerView(uu) {
        this.activeViews.set(uu.id, new WeakRef(uu))
      }
      unregisterView(uu) {
        this.activeViews.delete(uu.id);
        const Eu = uu.id;
        for (const ju of this.streamTrees) ju._dropView(Eu)
      }
      forEachActiveView(uu) {
        for (const [Eu, ju] of this.activeViews) {
          const su = ju.deref();
          if (void 0 !== su) uu(su);
          else {
            this.activeViews.delete(Eu);
            for (const uu of this.streamTrees) uu._dropView(Eu)
          }
        }
      }
      registerStream(uu) {
        this.streamTrees.add(uu)
      }
      unregisterStream(uu) {
        this.streamTrees.delete(uu)
      }
      constructor(uu) {
        let Eu = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        this.types = uu, this.nextUniqueId = Eu
      }
      add(uu) {
        const Eu = uu.ref;
        void 0 === Eu[lu] && (vs.value = this.nextUniqueId++, Object.defineProperty(Eu, lu, vs));
        const ju = Eu[lu],
          su = void 0 === this.changeTrees[ju];
        su && (this.changeTrees[ju] = uu), uu.needsRestage && (uu.needsRestage = !1, uu.forEachLiveWithCtx(uu, jj));
        const Uu = su ? 0 : uu.refCount;
        return uu.refCount = Uu + 1, Uu > 0 && this.enqueueFilterRefresh(uu), su
      }
      remove(uu) {
        const Eu = uu.refCount - 1;
        if (Eu <= 0) {
          if (uu.root = void 0, delete this.changeTrees[uu.ref[lu]], uu.isStreamCollection) {
            const Eu = uu.ref;
            Eu._unregister?.(), this.unregisterStream(Eu)
          }
          this.removeFromQueue(uu), this.removeFromUnreliableQueue(uu), uu.refCount = 0, uu.needsRestage = !0, uu.forEachChild(((Eu, ju) => {
            Eu.removeParent(uu.ref) && (void 0 === Eu.parentRef || Eu.refCount > 0 ? this.remove(Eu) : this.moveNextToParent(Eu))
          }))
        } else uu.refCount = Eu, this.enqueueFilterRefresh(uu), this.recursivelyMoveNextToParent(uu);
        return Eu
      }
      recursivelyMoveNextToParent(uu) {
        this.moveNextToParent(uu), uu.forEachChild(((uu, Eu) => this.recursivelyMoveNextToParent(uu)))
      }
      moveNextToParent(uu) {
        uu.changesNode && this._moveNextToParentInList(this.changes, uu, uu.changesNode, "changesNode"), uu.unreliableChangesNode && this._moveNextToParentInList(this.unreliableChanges, uu, uu.unreliableChangesNode, "unreliableChangesNode")
      }
      _moveNextToParentInList(uu, Eu, ju, su) {
        const Uu = Eu.parent;
        if (!Uu || !Uu[Yu]) return;
        const Zu = Uu[Yu][su];
        Zu && Zu !== ju && (ju.position > Zu.position || (ju.prev ? ju.prev.next = ju.next : uu.next = ju.next, ju.next ? ju.next.prev = ju.prev : uu.tail = ju.prev, ju.prev = uu.tail, ju.next = void 0, uu.tail.next = ju, uu.tail = ju, ju.position = uu.nextPosition++))
      }
      enqueueChangeTree(uu) {
        (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : uu.changesNode) || (uu.changesNode = this._appendToList(this.changes, uu))
      }
      enqueueUnreliable(uu) {
        (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : uu.unreliableChangesNode) || (uu.unreliableChangesNode = this._appendToList(this.unreliableChanges, uu))
      }
      _appendToList(uu, Eu) {
        const ju = this._nodePool;
        let su;
        return ju.length > 0 ? (su = ju.pop(), su.changeTree = Eu, su.next = void 0, su.prev = void 0) : su = {
          changeTree: Eu,
          next: void 0,
          prev: void 0,
          position: 0
        }, uu.next ? (su.prev = uu.tail, uu.tail.next = su, uu.tail = su) : (uu.nextPosition = 0, uu.next = su, uu.tail = su), su.position = uu.nextPosition++, su
      }
      releaseNode(uu) {
        uu.changeTree = void 0, uu.prev = void 0, uu.next = void 0, this._nodePool.push(uu)
      }
      removeFromQueue(uu) {
        return this._removeNode(this.changes, uu, uu.changesNode, "changesNode")
      }
      removeFromUnreliableQueue(uu) {
        return this._removeNode(this.unreliableChanges, uu, uu.unreliableChangesNode, "unreliableChangesNode")
      }
      _removeNode(uu, Eu, ju, su) {
        return !(!ju || ju.changeTree !== Eu) && (ju.prev ? ju.prev.next = ju.next : uu.next = ju.next, ju.next ? ju.next.prev = ju.prev : uu.tail = ju.prev, Eu[su] = void 0, this.releaseNode(ju), !0)
      }
    }

    function Vs(uu, Eu) {
      if (-1 === Eu || Eu >= uu.length) return !1;
      const ju = uu.length - 1;
      for (let su = Eu; su < ju; su++) uu[su] = uu[su + 1];
      return uu.length = ju, !0
    }

    function rs(uu, Eu, ju) {
      const su = ~ju,
        Uu = uu.changeTrees;
      for (const Zu in Uu) {
        const uu = Uu[Zu],
          ju = uu.visibleViews;
        void 0 !== ju && Eu < ju.length && (ju[Eu] &= su);
        const Xu = uu.subscribedViews;
        void 0 !== Xu && Eu < Xu.length && (Xu[Eu] &= su);
        const lu = uu.tagViews;
        void 0 !== lu && lu.forEach((uu => {
          Eu < uu.length && (uu[Eu] &= su)
        }))
      }
    }
    const Qs = new FinalizationRegistry((uu => {
      let {
        root: Eu,
        id: ju,
        slot: su,
        bit: Uu
      } = uu;
      rs(Eu, su, Uu), Eu.activeViews.delete(ju);
      for (const Zu of Eu.streamTrees) Zu._dropView(ju);
      Eu.releaseViewId(ju)
    }));

    function is(uu) {
      if (void 0 === uu) return "undefined";
      if (null === uu) return "null";
      const Eu = typeof uu;
      return "string" === Eu ? JSON.stringify(uu.length > 30 ? `${uu.slice(0,30)}\u2026` : uu) : "object" !== Eu && "function" !== Eu ? `${Eu} ${String(uu)}` : Array.isArray(uu) ? `Array(${uu.length})` : uu.constructor?.name ?? "Object"
    }
    class Ws {
      iterable;
      items;
      id = -1;
      _root;
      _slot = 0;
      _bit = 0;
      changes = new Map;
      constructor() {
        let uu = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        this.iterable = uu, uu && (this.items = [])
      }
      _bindRoot(uu) {
        void 0 === this._root && (this._root = uu, this.id = uu.acquireViewId(), this._slot = this.id >> 5, this._bit = 1 << (31 & this.id), uu.registerView(this), Qs.register(this, {
          root: uu,
          id: this.id,
          slot: this._slot,
          bit: this._bit
        }, this))
      }
      dispose() {
        void 0 !== this._root && (this._root.unregisterView(this), rs(this._root, this._slot, this._bit), this._root.releaseViewId(this.id), Qs.unregister(this), this._root = void 0, this.id = -1)
      }
      isVisible(uu) {
        const Eu = uu.visibleViews,
          ju = this._slot;
        return void 0 !== Eu && ju < Eu.length && 0 !== (Eu[ju] & this._bit)
      }
      markVisible(uu) {
        const Eu = this._slot;
        let ju = uu.visibleViews;
        for (void 0 === ju && (ju = uu.visibleViews = []); ju.length <= Eu;) ju.push(0);
        ju[Eu] |= this._bit
      }
      unmarkVisible(uu) {
        const Eu = uu.visibleViews;
        if (void 0 === Eu) return;
        const ju = this._slot;
        ju < Eu.length && (Eu[ju] &= ~this._bit)
      }
      isSubscribed(uu) {
        const Eu = uu.subscribedViews,
          ju = this._slot;
        return void 0 !== Eu && ju < Eu.length && 0 !== (Eu[ju] & this._bit)
      }
      _setSubscribed(uu) {
        const Eu = this._slot;
        let ju = uu.subscribedViews;
        for (void 0 === ju && (ju = uu.subscribedViews = []); ju.length <= Eu;) ju.push(0);
        ju[Eu] |= this._bit
      }
      _clearSubscribed(uu) {
        const Eu = uu.subscribedViews;
        if (void 0 === Eu) return;
        const ju = this._slot;
        ju < Eu.length && (Eu[ju] &= ~this._bit)
      }
      hasTagOnTree(uu, Eu) {
        const ju = uu.tagViews;
        if (void 0 === ju) return !1;
        const su = this._slot,
          Uu = this._bit;
        for (let Zu = Eu; 0 !== Zu; Zu &= Zu - 1) {
          const uu = ju.get(Zu & -Zu);
          if (void 0 !== uu && su < uu.length && 0 !== (uu[su] & Uu)) return !0
        }
        return !1
      }
      addTag(uu, Eu) {
        if (Eu === Ys) return;
        let ju = uu.tagViews;
        void 0 === ju && (ju = uu.tagViews = new Map);
        const su = this._slot,
          Uu = this._bit;
        for (let Zu = Eu; Zu > 0; Zu &= Zu - 1) {
          const uu = Zu & -Zu;
          let Eu = ju.get(uu);
          for (void 0 === Eu && (Eu = [], ju.set(uu, Eu)); Eu.length <= su;) Eu.push(0);
          Eu[su] |= Uu
        }
      }
      removeTag(uu, Eu) {
        if (Eu === Ys) return;
        const ju = uu.tagViews;
        if (void 0 === ju) return;
        const su = this._slot,
          Uu = ~this._bit;
        for (let Zu = Eu; Zu > 0; Zu &= Zu - 1) {
          const uu = ju.get(Zu & -Zu);
          void 0 !== uu && su < uu.length && (uu[su] &= Uu)
        }
      }
      removeAllTagsOnTree(uu) {
        const Eu = uu.tagViews;
        if (void 0 === Eu) return;
        const ju = this._slot,
          su = ~this._bit;
        Eu.forEach((uu => {
          ju < uu.length && (uu[ju] &= su)
        }))
      }
      add(uu) {
        let Eu = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Ys,
          ju = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        return this._add(uu, Eu, ju, !1)
      }
      _addImmediate(uu) {
        let Eu = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Ys;
        this._add(uu, Eu, !0, !0)
      }
      _add(uu, Eu, ju, su) {
        const Zu = uu?.[Yu];
        if (!Zu) return console.warn(`StateView#add(): expected a Schema instance or collection, received ${is(uu)}`), !1;
        const Xu = Zu.parent;
        if (!Xu && 0 !== uu[lu]) throw new Error(`Cannot add a detached instance to the StateView. Make sure to assign the "${Zu.ref.constructor.name}" instance to the state before calling view.add()`);
        void 0 === this._root && void 0 !== Zu.root && this._bindRoot(Zu.root);
        const qu = Xu?.[Yu];
        if (!su && qu?.isStreamCollection) return vE(Xu, this.id, Zu.parentIndex), !0;
        const fu = uu.constructor[Symbol.metadata],
          Cu = this.isVisible(Zu);
        if (!this.iterable || !ju || Cu && -1 !== this.items.indexOf(uu) || this.items.push(uu), this.markVisible(Zu), ju && Xu && this.addParentOf(Zu, Eu), !su && Zu.isStreamCollection) return !0;
        if (Eu === Ys && Zu.isNew) return this._markSubtreeVisible(Zu, Eu), !1;
        let bu = this.changes.get(uu[lu]);
        void 0 === bu && (bu = new Map, this.changes.set(uu[lu], bu));
        let cu = !1;
        const Nu = Zu.encDescriptor.tags;
        if (Zu.forEachChild(((uu, ju) => {
            const su = Nu[ju];
            if (void 0 !== su) {
              if (!(su === Ys || Eu !== Ys && 0 !== (su & Eu))) return
            }
            this.add(uu.ref, Eu, !1) && (cu = !0)
          })), Eu !== Ys) {
          this.addTag(Zu, Eu);
          const uu = fu?.[ku];
          if (void 0 !== uu)
            for (let ju = Eu; ju > 0; ju &= ju - 1) uu[ju & -ju]?.forEach((uu => {
              Zu.getChange(uu) !== Uu.DELETE && bu.set(uu, Uu.ADD)
            }))
        }
        if ((Eu === Ys || !Cu) && (!Zu.isNew || cu))
          if (Zu.isArray && "string" !== typeof Zu.refTarget[hu]) Zu.refTarget.items.length > 0 && (bu.set(-1, Uu.ADD), cu = !0);
          else {
            const uu = Zu.encDescriptor.tags;
            Zu.forEachLive((ju => {
              const su = uu[ju];
              (void 0 === su || su === Ys || Eu !== Ys && 0 !== (su & Eu)) && (bu.set(ju, Uu.ADD), cu = !0)
            }))
          } return cu
      }
      _markSubtreeVisible(uu, Eu) {
        const ju = uu.encDescriptor.tags;
        uu.forEachChild(((uu, su) => {
          const Uu = ju[su];
          if (void 0 !== Uu) {
            if (!(Uu === Ys || Eu !== Ys && 0 !== (Uu & Eu))) return
          }
          uu.isNew ? (this.markVisible(uu), this._markSubtreeVisible(uu, Eu)) : this._add(uu.ref, Eu, !1, !1)
        }))
      }
      addParentOf(uu, Eu) {
        const ju = uu.parent[Yu],
          su = uu.parentIndex;
        this.isVisible(ju) || this.markVisible(ju);
        const Zu = ju.parent?.[Yu];
        if (Zu && this.addParentOf(ju, Eu), ju.hasFilteredFields && ju.getChange(su) !== Uu.DELETE) {
          let Zu = this.changes.get(ju.ref[lu]);
          void 0 === Zu && (Zu = new Map, this.changes.set(ju.ref[lu], Zu));
          const Xu = ju.encDescriptor.tags[su];
          void 0 !== Xu && Xu !== Ys && 0 !== (Xu & Eu) && this.addTag(ju, Eu), Zu.set(ju.isArray ? uu : su, Uu.ADD)
        }
      }
      _touchAncestorsOf(uu) {
        let Eu = uu.parent?.[Yu];
        if (void 0 === Eu) return;
        const ju = [];
        for (; void 0 !== Eu;) {
          if (Eu.hasFilteredFields) {
            const uu = Eu.ref[lu];
            if (this.changes.has(uu)) break;
            ju.push(Eu)
          }
          Eu = Eu.parent?.[Yu]
        }
        for (let su = ju.length - 1; su >= 0; su--) this.changes.set(ju[su].ref[lu], new Map)
      }
      remove(uu) {
        let Eu = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Ys,
          ju = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        const su = uu?.[Yu];
        if (!su) return console.warn(`StateView#remove(): expected a Schema instance or collection, received ${is(uu)}`), this;
        const Zu = su.parent?.[Yu];
        if (Zu?.isStreamCollection) return this.unmarkVisible(su), this.iterable && !ju && Vs(this.items, this.items.indexOf(uu)),
          function(uu, Eu, ju, su, Zu) {
            const Xu = uu._stream;
            if (void 0 === Xu) return !1;
            const lu = Xu.pendingByView.get(Eu);
            if (lu?.has(su)) return lu.delete(su), !1;
            const qu = Xu.sentByView.get(Eu);
            if (qu?.has(su)) {
              qu.delete(su);
              let uu = Zu.get(ju);
              return void 0 === uu && (uu = new Map, Zu.set(ju, uu)), uu.set(su, Uu.DELETE), !0
            }
          }(su.parent, this.id, su.parent[lu], su.parentIndex, this.changes), this._recursiveDeleteVisibleChangeTree(su), this;
        if (su.isStreamCollection) {
          this.unmarkVisible(su), this.iterable && !ju && Vs(this.items, this.items.indexOf(uu));
          const Eu = su.ref,
            Zu = Eu._stream;
          if (void 0 !== Zu) {
            Zu.pendingByView.get(this.id)?.clear();
            const uu = Zu.sentByView.get(this.id);
            if (void 0 !== uu && uu.size > 0) {
              const ju = Eu[lu];
              let su = this.changes.get(ju);
              void 0 === su && (su = new Map, this.changes.set(ju, su));
              for (const Eu of uu) su.set(Eu, Uu.DELETE);
              uu.clear()
            }
          }
          return this
        }
        this.unmarkVisible(su), this.iterable && !ju && Vs(this.items, this.items.indexOf(uu));
        const Xu = su.ref,
          qu = Xu.constructor[Symbol.metadata],
          fu = Xu[lu];
        this._touchAncestorsOf(su);
        let Cu = this.changes.get(fu);
        if (void 0 === Cu && (Cu = new Map, this.changes.set(fu, Cu)), Eu === Ys) {
          const uu = su.parent;
          if (uu && !HE.isValidInstance(uu) && su.isFiltered) {
            const Eu = Zu.isArray ? su : su.parentIndex,
              ju = uu[lu];
            let Xu = this.changes.get(ju);
            void 0 === Xu ? (Xu = new Map, this.changes.set(ju, Xu)) : Xu.get(Eu) === Uu.ADD && this._dropPendingEntries(su), Xu.set(Eu, Uu.DELETE), this._recursiveDeleteVisibleChangeTree(su)
          } else qu?.[ou]?.forEach((uu => this._removeViewField(su, Cu, uu)))
        } else {
          const uu = qu?.[ku];
          if (void 0 !== uu)
            for (let ju = Eu; ju > 0; ju &= ju - 1) uu[ju & -ju]?.forEach((uu => this._removeViewField(su, Cu, uu)))
        }
        return void 0 === Eu ? this.removeAllTagsOnTree(su) : this.removeTag(su, Eu), this
      }
      has(uu) {
        return this.isVisible(uu[Yu])
      }
      hasTag(uu) {
        let Eu = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Ys;
        return this.hasTagOnTree(uu[Yu], Eu)
      }
      subscribe(uu, Eu) {
        const ju = uu?.[Yu];
        if (!ju) return console.warn(`StateView#subscribe(): expected a Schema collection, received ${is(uu)}`), this;
        if (void 0 === this._root && void 0 !== ju.root && this._bindRoot(ju.root), void 0 !== Eu)
          if (ju.isStreamCollection) {
            const ju = aE(uu);
            null === Eu ? ju.priorityByView?.delete(this.id) : (ju.priorityByView ??= new Map).set(this.id, Eu)
          } else {
            const Eu = uu?.constructor?.name ?? "collection",
              su = ju.parent;
            if (void 0 === su) console.warn(`StateView#subscribe(): \`priority\` ignored \u2014 this ${Eu} is not attached to a state yet, so it cannot be identified as a stream. Subscribe after assigning it to the state.`);
            else {
              const uu = su?.constructor?.[Symbol.metadata]?.[ju.parentIndex]?.name,
                Uu = uu ? `${su.constructor.name}#${uu}` : Eu;
              console.warn(`StateView#subscribe(): \`priority\` ignored \u2014 ${Uu} is a ${Eu}, not a streaming collection. Declare the field with .stream() (e.g. t.map(X).stream()) or use t.stream(X) to enable priority batching.`)
            }
          } if (this.isSubscribed(ju)) return this;
        const su = void 0 !== ju.parent && !this.isVisible(ju);
        if (su ? (this.addParentOf(ju, Ys), this._add(uu, Ys, !1, !1)) : this.markVisible(ju), this._setSubscribed(ju), ju.isStreamCollection) {
          const Eu = uu;
          ju.forEachChild(((uu, ju) => {
            vE(Eu, this.id, ju)
          }))
        } else su || ju.forEachChild((uu => {
          this.markVisible(uu)
        }));
        return this
      }
      unsubscribe(uu) {
        const Eu = uu?.[Yu];
        if (!Eu) return console.warn(`StateView#unsubscribe(): expected a Schema collection, received ${is(uu)}`), this;
        if (!this.isSubscribed(Eu)) return this;
        this._clearSubscribed(Eu);
        const ju = Eu.ref[lu];
        if (Eu.isStreamCollection) {
          const Eu = uu._stream;
          if (void 0 !== Eu) {
            Eu.pendingByView.get(this.id)?.clear();
            const uu = Eu.sentByView.get(this.id);
            if (void 0 !== uu && uu.size > 0) {
              let Eu = this.changes.get(ju);
              void 0 === Eu && (Eu = new Map, this.changes.set(ju, Eu));
              for (const ju of uu) Eu.set(ju, Uu.DELETE);
              uu.clear()
            }
          }
        } else {
          const uu = Eu.isArray;
          let su = this.changes.get(ju);
          Eu.forEachChild(((Eu, Zu) => {
            void 0 === su && (su = new Map, this.changes.set(ju, su)), su.set(uu ? Eu : Zu, Uu.DELETE), this.unmarkVisible(Eu)
          }))
        }
        return this.unmarkVisible(Eu), this
      }
      clear() {
        if (!this.iterable) throw new Error("StateView#clear() is only available for iterable StateView's. Use StateView(iterable: true) constructor.");
        for (let uu = 0, Eu = this.items.length; uu < Eu; uu++) this.remove(this.items[uu], Ys, !0);
        this.items.length = 0
      }
      isChangeTreeVisible(uu) {
        let Eu = this.isVisible(uu);
        if (!Eu && uu.isVisibilitySharedWithParent)
          if (this.isVisible(uu.parent[Yu])) this.markVisible(uu), Eu = !0;
          else
            for (let ju = uu.extraParents; void 0 !== ju; ju = ju.next) {
              const su = ju.ref[Yu];
              if (su.isFiltered && this.isVisible(su)) {
                this.markVisible(uu), Eu = !0;
                break
              }
            }
        return Eu
      }
      _recursiveDeleteVisibleChangeTree(uu) {
        uu.forEachChild((uu => {
          this.unmarkVisible(uu), this._recursiveDeleteVisibleChangeTree(uu)
        }))
      }
      _dropPendingEntries(uu) {
        this.changes.delete(uu.ref[lu]), uu.forEachChild((uu => this._dropPendingEntries(uu)))
      }
      _removeViewField(uu, Eu, ju) {
        const su = Eu.get(ju) === Uu.ADD;
        Eu.set(ju, Uu.DELETE);
        const Zu = uu.ref[uu.encDescriptor.names[ju]],
          Xu = Zu?.[Yu];
        Xu && (this.unmarkVisible(Xu), this._recursiveDeleteVisibleChangeTree(Xu), su && this._dropPendingEntries(Xu))
      }
    }

    function Ss(uu) {
      uu.structSwitchEmitted || (uu.shouldEmitSwitch && (uu.buffer[uu.it.offset++] = 255, EE.number(uu.buffer, uu.ref[lu], uu.it)), uu.structSwitchEmitted = !0)
    }

    function Is(uu, Eu) {
      Ls(uu, Eu, Uu.ADD)
    }

    function Fs(uu, Eu) {
      if (Eu._fullSyncGen === uu.gen) return;
      Eu._fullSyncGen = uu.gen;
      if (!uu.hasView || uu.view.isChangeTreeVisible(Eu)) {
        const ju = Eu.encDescriptor;
        uu.changeTree = Eu, uu.ref = Eu.ref, uu.encoder = ju.encoder, uu.filter = ju.filter, uu.metadata = ju.metadata, uu.treeIsFiltered = Eu.isFiltered, uu.isSchema = ju.isSchema, uu.filterBitmask = ju.filterBitmask, uu.tags = ju.tags, uu.structSwitchEmitted = !1, uu.shouldEmitSwitch = uu.hasView || uu.it.offset > uu.initialOffset || Eu !== uu.rootChangeTree, Eu.isArray && Eu.collDirty.size > 0 && (Eu.flags |= 512), Uj(Eu, uu, Is)
      }
      Dj(Eu, uu, Bs)
    }

    function Bs(uu, Eu, ju) {
      Fs(uu, Eu)
    }

    function Ls(uu, Eu, ju) {
      if (Eu < 0) {
        if (uu.treeIsFiltered !== uu.emitFiltered) return;
        return Ss(uu), void(uu.buffer[uu.it.offset++] = 255 & Math.abs(Eu))
      }
      if ((uu.isSchema ? uu.treeIsFiltered || (Eu < 32 ? 0 !== (uu.filterBitmask & 1 << Eu) : void 0 !== uu.tags[Eu]) : uu.treeIsFiltered) !== uu.emitFiltered) return;
      const su = uu.isEncodeAll ? Uu.ADD : ju;
      void 0 !== su && (void 0 === uu.filter || uu.filter(uu.ref, Eu, uu.view)) && (Ss(uu), uu.encoder(uu.self, uu.buffer, uu.changeTree, Eu, su, uu.it, uu.isEncodeAll, uu.hasView, uu.metadata))
    }

    function ts(uu, Eu) {
      const ju = new Uint8Array(uu.length + Eu.length);
      return ju.set(uu, 0), ju.set(Eu, uu.length), ju
    }
    class xs {
      static BUFFER_SIZE = 16384;
      sharedBuffer = new Uint8Array(xs.BUFFER_SIZE);
      context;
      state;
      root;
      constructor(uu, Eu) {
        this.context = IE.cache(uu.constructor), this.root = Eu ?? new Ks(this.context), this.setState(uu)
      }
      setState(uu) {
        this.state = uu, this.state[Yu].setRoot(this.root)
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
        let uu = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
            offset: 0
          },
          Eu = arguments.length > 1 ? arguments[1] : void 0,
          ju = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : this.sharedBuffer,
          su = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : uu.offset;
        return this._encodeChannel(uu, Eu, ju, su, !1)
      }
      encodeUnreliable() {
        let uu = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
            offset: 0
          },
          Eu = arguments.length > 1 ? arguments[1] : void 0,
          ju = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : this.sharedBuffer,
          su = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : uu.offset;
        return this._encodeChannel(uu, Eu, ju, su, !0)
      }
      _encodeChannel(uu, Eu, ju, su, Uu) {
        this.root.pendingFilterRefresh.length > 0 && Xj(this.root);
        const Zu = void 0 !== Eu,
          Xu = this.state[Yu],
          lu = this._encodeCtx;
        lu.self = this, lu.buffer = ju, lu.it = uu, lu.view = Eu, lu.isEncodeAll = !1, lu.hasView = Zu, lu.emitFiltered = Zu;
        let qu = Uu ? this.root.unreliableChanges : this.root.changes;
        for (; qu = qu.next;) {
          const ju = qu.changeTree;
          if (Zu && !Eu.isChangeTreeVisible(ju)) continue;
          const fu = Uu ? ju.unreliableRecorder : ju;
          if (!fu || !fu.has()) continue;
          const Cu = ju.encDescriptor;
          lu.changeTree = ju, lu.ref = ju.ref, lu.encoder = Cu.encoder, lu.filter = Cu.filter, lu.metadata = Cu.metadata, lu.treeIsFiltered = ju.isFiltered, lu.isSchema = Cu.isSchema, lu.filterBitmask = Cu.filterBitmask, lu.tags = Cu.tags, lu.structSwitchEmitted = !1, lu.isRootTree = ju === Xu, lu.shouldEmitSwitch = Zu || uu.offset > su || !lu.isRootTree, fu.forEachWithCtx(lu, Ls)
        }
        return Uu || Zu || !this._isStreamBroadcastMode || this._emitStreamBroadcast(ju, uu), uu.offset > ju.byteLength ? (ju = this._resizeBuffer(ju, uu.offset), uu.offset = su, this._encodeChannel(uu, Eu, ju, su, Uu)) : ju.subarray(0, uu.offset)
      }
      encodeFullSync(uu, Eu, ju, su) {
        let Uu = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : uu.offset;
        this.root.pendingFilterRefresh.length > 0 && Xj(this.root);
        const Zu = void 0 !== su,
          Xu = this.state[Yu],
          lu = this._encodeCtx;
        return lu.self = this, lu.buffer = Eu, lu.it = uu, lu.view = su, lu.isEncodeAll = !0, lu.hasView = Zu, lu.emitFiltered = ju, lu.gen = ++this._fullSyncGen, lu.initialOffset = Uu, lu.rootChangeTree = Xu, Fs(lu, Xu), uu.offset > Eu.byteLength ? (Eu = this._resizeBuffer(Eu, uu.offset), uu.offset = Uu, this.encodeFullSync(uu, Eu, ju, su, Uu)) : Eu.subarray(0, uu.offset)
      }
      _resizeBuffer(uu, Eu) {
        const ju = Math.ceil(Eu / xs.BUFFER_SIZE) * xs.BUFFER_SIZE,
          su = new Uint8Array(ju);
        return su.set(uu), uu === this.sharedBuffer && (this.sharedBuffer = su), su
      }
      encodeAll() {
        let uu = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
            offset: 0
          },
          Eu = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.sharedBuffer;
        return this.encodeFullSync(uu, Eu, !1)
      }
      encodeAllView(uu, Eu, ju) {
        let su = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : this.sharedBuffer;
        const Uu = ju.offset;
        return su = this.encodeFullSync(ju, su, !0, uu, Uu), ts(su.subarray(0, Eu), su.subarray(Uu, ju.offset))
      }
      ensureCapacity(uu, Eu) {
        if (Eu + xs.BUFFER_SIZE <= uu.byteLength) return uu;
        const ju = Math.ceil((Eu + xs.BUFFER_SIZE) / xs.BUFFER_SIZE) * xs.BUFFER_SIZE,
          su = new Uint8Array(ju);
        return su.set(uu.subarray(0, Eu)), uu === this.sharedBuffer && (this.sharedBuffer = su), su
      }
      encodeView(uu, Eu, ju) {
        let su = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : this.sharedBuffer,
          Zu = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4];
        const Xu = ju.offset;
        this._emitStreamPriority(uu);
        for (const qu of uu.changes.keys()) {
          const Eu = uu.changes.get(qu),
            Zu = this.root.changeTrees[qu];
          if (void 0 === Zu) {
            uu.changes.delete(qu);
            continue
          }
          if (0 === Eu.size) continue;
          const Xu = Zu.encDescriptor,
            fu = Xu.encoder,
            Cu = Xu.metadata,
            bu = Zu.ref,
            Nu = Zu.refTarget;
          su = this.ensureCapacity(su, ju.offset), su[ju.offset++] = 255, EE.number(su, bu[lu], ju);
          for (const [qu, Ou] of Eu) {
            let Eu;
            if (-1 === qu) {
              const uu = Nu.tmpItems,
                Eu = Nu.deletedIndexes;
              for (let Xu = 0; Xu < uu.length; Xu++) void 0 !== uu[Xu] && !0 !== Eu[Xu] && fu(this, su, Zu, Xu, Uu.ADD, ju, !1, !0, Cu);
              continue
            }
            if ("number" === typeof qu) Eu = qu;
            else {
              const ju = qu.indexInParent(bu);
              if (void 0 === ju) continue;
              if (Eu = ju, Ou === Uu.ADD && Zu.getChange(Eu) === Uu.DELETE) {
                uu.changes.delete(qu.ref[lu]);
                continue
              }
            }
            fu(this, su, Zu, Eu, void 0 !== Nu[cu](Eu) && Ou || Uu.DELETE, ju, !1, !0, Cu)
          }
        }
        return uu.changes.clear(), su = this.encode(ju, uu, su), Zu ? ts(su.subarray(0, Eu), su.subarray(Xu, ju.offset)) : su.subarray(Xu, ju.offset)
      }
      encodeUnreliableView(uu, Eu, ju) {
        let su = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : this.sharedBuffer;
        const Uu = ju.offset;
        return su = this.encodeUnreliable(ju, uu, su, Uu), ts(su.subarray(0, Eu), su.subarray(Uu, ju.offset))
      }
      _emitStreamBroadcast(uu, Eu) {
        const ju = this.root.streamTrees;
        for (const su of ju) {
          const ju = su,
            Zu = ju[Yu],
            Xu = ju[lu];
          if (void 0 === Xu) continue;
          const qu = ju._stream,
            fu = qu.broadcastDeletes,
            Cu = qu.broadcastPending,
            bu = qu.sentBroadcast,
            Nu = fu.size > 0,
            Ou = Cu.size > 0,
            hu = Zu.encDescriptor,
            Du = hu.encoder,
            gu = hu.metadata;
          if (Nu || Ou) {
            if (uu[Eu.offset++] = 255, EE.number(uu, Xu, Eu), Nu) {
              for (const ju of fu) Du(this, uu, Zu, ju, Uu.DELETE, Eu, !1, !1, gu);
              fu.clear()
            }
            const su = qu.maxPerTick,
              Ou = [];
            let hu = 0;
            const Mu = [];
            for (const Xu of Cu) {
              if (hu >= su) break;
              const lu = ju[cu](Xu);
              void 0 !== lu ? (Du(this, uu, Zu, Xu, Uu.ADD, Eu, !1, !1, gu), bu.add(Xu), Ou.push(lu), Mu.push(Xu), hu++) : Mu.push(Xu)
            }
            for (const uu of Mu) Cu.delete(uu);
            for (const ju of Ou) {
              const su = ju[Yu];
              if (void 0 === su) continue;
              const Zu = ju[lu];
              if (void 0 === Zu) continue;
              uu[Eu.offset++] = 255, EE.number(uu, Zu, Eu);
              const Xu = su.encDescriptor,
                qu = Xu.encoder,
                fu = Xu.metadata;
              su.forEachLive((ju => {
                HE.hasUnreliableAtIndex(fu, ju) || qu(this, uu, su, ju, Uu.ADD, Eu, !1, !1, fu)
              }))
            }
          }
          for (const su of bu) {
            const Uu = ju[cu](su);
            if (void 0 === Uu) continue;
            const Zu = Uu[Yu];
            if (void 0 === Zu || !Zu.has()) continue;
            const Xu = Uu[lu];
            if (void 0 === Xu) continue;
            uu[Eu.offset++] = 255, EE.number(uu, Xu, Eu);
            const qu = Zu.encDescriptor,
              fu = qu.encoder,
              Cu = qu.metadata;
            Zu.forEach(((ju, su) => {
              ju < 0 || HE.hasUnreliableAtIndex(Cu, ju) || fu(this, uu, Zu, ju, su, Eu, !1, !1, Cu)
            }))
          }
        }
      }
      _emitStreamPriority(uu) {
        const Eu = this.root.streamTrees;
        if (0 === Eu.size) return;
        const ju = uu.id;
        for (const su of Eu) {
          const Eu = su,
            Zu = Eu._stream,
            Xu = Zu.pendingByView.get(ju);
          if (void 0 === Xu || 0 === Xu.size) continue;
          const qu = Zu.priorityByView?.get(ju),
            fu = void 0 !== qu,
            Cu = Zu.priority,
            bu = Zu.maxPerTick,
            Nu = [],
            Ou = [];
          if (fu || void 0 !== Cu) {
            const ju = [],
              su = [];
            let Uu = 0;
            for (const Zu of Xu) {
              const Xu = Eu[cu](Zu);
              if (void 0 === Xu) {
                Ou.push(Zu);
                continue
              }
              const lu = fu ? qu(Xu) : Cu(uu, Xu);
              if (Uu < bu) {
                let uu = Uu++;
                for (; uu > 0 && su[uu - 1] < lu;) su[uu] = su[uu - 1], ju[uu] = ju[uu - 1], uu--;
                su[uu] = lu, ju[uu] = Zu
              } else if (lu > su[bu - 1]) {
                let uu = bu - 1;
                for (; uu > 0 && su[uu - 1] < lu;) su[uu] = su[uu - 1], ju[uu] = ju[uu - 1], uu--;
                su[uu] = lu, ju[uu] = Zu
              }
            }
            for (let uu = 0; uu < Uu; uu++) Nu.push(ju[uu])
          } else
            for (const uu of Xu) {
              if (Nu.length >= bu) break;
              Nu.push(uu)
            }
          for (const uu of Ou) Xu.delete(uu);
          const hu = Nu.length;
          let Du = Zu.sentByView.get(ju);
          void 0 === Du && (Du = new Set, Zu.sentByView.set(ju, Du));
          for (let ju = 0; ju < hu; ju++) {
            const su = Nu[ju],
              Zu = Eu[cu](su);
            if (void 0 === Zu) {
              Xu.delete(su);
              continue
            }
            uu._addImmediate(Zu);
            const qu = Zu[Yu];
            if (void 0 !== qu) {
              const Eu = Zu[lu];
              let ju = uu.changes.get(Eu);
              void 0 === ju && (ju = new Map, uu.changes.set(Eu, ju));
              const su = qu.metadata;
              qu.forEachLive((uu => {
                HE.hasUnreliableAtIndex(su, uu) || ju.set(uu, Uu.ADD)
              }))
            }
            Xu.delete(su), Du.add(su)
          }
        }
      }
      discardChanges() {
        const uu = this.root.changes;
        let Eu = uu.next;
        const ju = this.root;
        for (; Eu;) {
          const uu = Eu.next;
          Eu.changeTree.endEncode(), ju.releaseNode(Eu), Eu = uu
        }
        uu.next = void 0, uu.tail = void 0
      }
      discardUnreliableChanges() {
        const uu = this.root.unreliableChanges;
        let Eu = uu.next;
        const ju = this.root;
        for (; Eu;) {
          const uu = Eu.next;
          Eu.changeTree.endEncodeUnreliable(), ju.releaseNode(Eu), Eu = uu
        }
        uu.next = void 0, uu.tail = void 0
      }
      tryEncodeTypeId(uu, Eu, ju, su) {
        const Uu = this.context.getTypeId(Eu),
          Zu = this.context.getTypeId(ju);
        void 0 !== Zu ? Uu !== Zu && (uu[su.offset++] = 213, EE.number(uu, Zu, su)) : console.warn(`@colyseus/schema WARNING: Class "${ju.name}" is not registered on TypeRegistry - Please either tag the class with @entity or define a @type() field.`)
      }
      get hasChanges() {
        return void 0 !== this.root.changes.next || this._hasStreamBacklog()
      }
      get _isStreamBroadcastMode() {
        return 0 === this.root.activeViews.size && this.root.streamTrees.size > 0
      }
      _hasStreamBacklog() {
        const uu = this.root;
        if (0 === uu.streamTrees.size) return !1;
        const Eu = 0 === uu.activeViews.size;
        for (const ju of uu.streamTrees)
          if (Eu ? mE(ju) : kE(ju, uu)) return !0;
        return !1
      }
      get hasUnreliableChanges() {
        return void 0 !== this.root.unreliableChanges.next
      }
    }
    class Ts extends Error {
      constructor(uu) {
        super(uu), this.name = "DecodingWarning"
      }
    }
    const Hs = {
      value: 0,
      enumerable: !1,
      writable: !0
    };
    class As {
      refs = new Map;
      refCount = {};
      deletedRefs = new Set;
      callbacks = {};
      nextUniqueId = 0;
      getNextUniqueId() {
        return this.nextUniqueId++
      }
      addRef(uu, Eu) {
        let ju = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        this.refs.set(uu, Eu), void 0 === Eu[lu] ? (Hs.value = uu, Object.defineProperty(Eu, lu, Hs)) : Eu[lu] !== uu && (Eu[lu] = uu), ju && (this.refCount[uu] = (this.refCount[uu] || 0) + 1), this.deletedRefs.has(uu) && this.deletedRefs.delete(uu)
      }
      removeRef(uu) {
        const Eu = this.refCount[uu];
        if (void 0 !== Eu)
          if (0 !== Eu)(this.refCount[uu] = Eu - 1) <= 0 && this.deletedRefs.add(uu);
          else try {
            const Eu = this.refs.get(uu);
            throw new Ts(`trying to remove refId '${uu}' with 0 refCount (${Eu.constructor.name}: ${JSON.stringify(Eu)})`)
          } catch (lU) {
            console.warn(lU)
          } else try {
            throw new Ts("trying to remove refId that doesn't exist: " + uu)
          } catch (lU) {
            console.warn(lU)
          }
      }
      clearRefs() {
        this.refs.clear(), this.deletedRefs.clear(), this.callbacks = {}, this.refCount = {}
      }
      garbageCollectDeletedRefs() {
        this.deletedRefs.forEach((uu => {
          if (this.refCount[uu] > 0) return;
          const Eu = this.refs.get(uu),
            ju = Eu.constructor[Symbol.metadata];
          if (null != ju)
            for (const su in ju) {
              const uu = Eu[ju[su].name];
              if ("object" === typeof uu && uu) {
                const Eu = uu[lu];
                void 0 === Eu || this.deletedRefs.has(Eu) || this.removeRef(Eu)
              }
            } else "function" === typeof Eu[hu] && Array.from(Eu.values()).forEach((uu => {
              const Eu = uu[lu];
              void 0 === Eu || this.deletedRefs.has(Eu) || this.removeRef(Eu)
            }));
          this.refs.delete(uu), delete this.refCount[uu], delete this.callbacks[uu]
        })), this.deletedRefs.clear()
      }
      addCallback(uu, Eu, ju) {
        if (void 0 === uu) {
          const uu = "number" === typeof Eu ? Uu[Eu] : Eu;
          throw new Error(`Can't addCallback on '${uu}' (refId is undefined)`)
        }
        return this.callbacks[uu] || (this.callbacks[uu] = {}), this.callbacks[uu][Eu] || (this.callbacks[uu][Eu] = []), this.callbacks[uu][Eu].push(ju), () => this.removeCallback(uu, Eu, ju)
      }
      removeCallback(uu, Eu, ju) {
        const su = this.callbacks?.[uu]?.[Eu]?.indexOf(ju);
        void 0 !== su && -1 !== su && Vs(this.callbacks[uu][Eu], su)
      }
    }
    class ns {
      context;
      state;
      root;
      currentRefId = 0;
      iK;
      resyncVisited = null;
      resyncDamaged = !1;
      constructor(uu, Eu) {
        this.setState(uu), this.context = Eu || new IE(uu.constructor)
      }
      setState(uu) {
        this.state = uu, this.root = new As, this.root.addRef(0, uu)
      }
      decode(uu) {
        let Eu = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
            offset: 0
          },
          ju = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : this.state;
        const Uu = void 0 !== this.iK ? [] : null,
          Zu = this.root,
          Xu = uu.byteLength;
        let lu = ju.constructor[Cu];
        for (this.currentRefId = 0; Eu.offset < Xu;) {
          if (uu[Eu.offset] == su) {
            Eu.offset++, ju[eu]?.();
            const su = ME.number(uu, Eu),
              Uu = Zu.refs.get(su);
            Uu ? (ju = Uu, lu = ju.constructor[Cu], this.currentRefId = su) : (console.error(`"refId" not found: ${su}`, {
              previousRef: ju,
              previousRefId: this.currentRefId
            }), console.warn("Please report this issue to the developers."), this.skipCurrentStructure(uu, Eu, Xu));
            continue
          } - 1 !== lu(this, uu, Eu, ju, Uu) || (console.warn("@colyseus/schema: definition mismatch"), this.skipCurrentStructure(uu, Eu, Xu))
        }
        return ju[eu]?.(), null !== this.resyncVisited && function(uu, Eu) {
          uu.resyncDamaged ? console.warn("@colyseus/schema: resync sweep skipped \u2014 parts of the payload could not be decoded. Stale entries may persist until the next resync.") : Ij(uu, uu.state, new Set, Eu)
        }(this, Uu), null !== Uu && this.iK?.(Uu), Zu.garbageCollectDeletedRefs(), Uu
      }
      decodeResync(uu) {
        let Eu = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
          offset: 0
        };
        this.resyncVisited = new Map, this.resyncDamaged = !1;
        try {
          return this.decode(uu, Eu)
        } finally {
          this.resyncVisited = null
        }
      }
      skipCurrentStructure(uu, Eu, ju) {
        null !== this.resyncVisited && (this.resyncDamaged = !0);
        const Uu = {
          offset: Eu.offset
        };
        for (; Eu.offset < ju && (uu[Eu.offset] !== su || (Uu.offset = Eu.offset + 1, !this.root.refs.has(ME.number(uu, Uu))));) Eu.offset++
      }
      getInstanceType(uu, Eu, ju) {
        let su;
        if (213 === uu[Eu.offset]) {
          Eu.offset++;
          const ju = ME.number(uu, Eu);
          su = this.context.get(ju)
        }
        return su || ju
      }
      createInstanceOfType(uu) {
        return uu.initializeForDecoder()
      }
      removeChildRefs(uu, Eu) {
        const ju = "string" !== typeof uu[hu],
          su = uu[lu];
        uu.forEach(((Zu, Xu) => {
          Eu?.push({
            ref: uu,
            refId: su,
            op: Uu.DELETE,
            field: Xu,
            value: void 0,
            previousValue: Zu
          }), ju && this.root.removeRef(Zu[lu])
        }))
      }
    }
    const ys = os({
        min: Os.float64(),
        max: Os.float64(),
        bits: Os.uint8(),
        mode: Os.uint8()
      }, "QuantizedDescriptor"),
      zs = os({
        name: Os.string(),
        type: Os.string(),
        referencedType: Os.number(),
        childPrimitive: Os.string(),
        quantized: Os.ref(ys).optional()
      }, "ReflectionField"),
      Rs = os({
        id: Os.number(),
        extendsId: Os.number(),
        fields: Os.array(zs)
      }, "ReflectionType"),
      uU = os({
        types: Os.array(Rs),
        rootType: Os.number()
      }, "Reflection");

    function EU(uu) {
      const Eu = uu.root,
        ju = Eu.callbacks,
        su = new WeakMap;
      let Zu;

      function Xu(uu, ju) {
        let fu = ju.instance?.constructor[Symbol.metadata] || uu,
          Cu = ju.instance && "function" === typeof ju.instance.forEach || uu && !ms.is(uu);
        if (fu && !Cu) {
          const uu = function(uu, Uu, Xu, qu) {
            return qu && void 0 !== ju.instance[Uu] && !su.has(Zu) && Xu(ju.instance[Uu], void 0), Eu.addCallback(uu[lu], Uu, Xu)
          };
          return new Proxy({
            listen: function(Eu, Uu) {
              let Xu = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
              if (ju.instance) return uu(ju.instance, Eu, Uu, Xu);
              {
                let lu = () => {};
                return ju.onInstanceAvailable(((ju, qu) => {
                  lu = uu(ju, Eu, Uu, Xu && qu && !su.has(Zu))
                })), () => lu()
              }
            },
            onChange: function(uu) {
              return Eu.addCallback(ju.instance[lu], Uu.REPLACE, uu)
            },
            bindTo: function(uu, su) {
              return su || (su = Object.keys(fu).map((uu => fu[uu].name))), Eu.addCallback(ju.instance[lu], Uu.REPLACE, (() => {
                su.forEach((Eu => uu[Eu] = ju.instance[Eu]))
              }))
            }
          }, {
            get(uu, Eu) {
              const su = fu[fu[Eu]];
              if (su) {
                const uu = ju.instance?.[Eu],
                  Uu = su => {
                    const Uu = qu(ju.instance).listen(Eu, ((uu, Eu) => {
                      su(uu, !1), Uu?.()
                    }), !1);
                    void 0 !== uu?.[lu] && su(uu, !0)
                  };
                return Xu(su.type, {
                  instance: void 0 !== uu?.[lu] && uu,
                  parentInstance: ju.instance,
                  onInstanceAvailable: Uu
                })
              }
              return uu[Eu]
            },
            has: (uu, Eu) => void 0 !== fu[Eu],
            set(uu, Eu, ju) {
              throw new Error("not allowed")
            },
            deleteProperty(uu, Eu) {
              throw new Error("not allowed")
            }
          })
        } {
          const uu = function(uu, ju, Xu) {
              return Xu && uu.forEach(((uu, Eu) => ju(uu, Eu))), Eu.addCallback(uu[lu], Uu.ADD, ((uu, Eu) => {
                su.set(ju, !0), Zu = ju, ju(uu, Eu), su.delete(ju), Zu = void 0
              }))
            },
            Xu = function(uu, ju) {
              return Eu.addCallback(uu[lu], Uu.DELETE, ju)
            },
            qu = function(uu, ju) {
              return Eu.addCallback(uu[lu], Uu.REPLACE, ju)
            };
          return new Proxy({
            lG: function(Eu) {
              let Uu = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
              if (ju.instance) return uu(ju.instance, Eu, Uu && !su.has(Zu));
              if (ju.onInstanceAvailable) {
                let Xu = () => {};
                return ju.onInstanceAvailable(((ju, lu) => {
                  Xu = uu(ju, Eu, Uu && lu && !su.has(Zu))
                })), () => Xu()
              }
            },
            jK: function(uu) {
              if (ju.instance) return Xu(ju.instance, uu);
              if (ju.onInstanceAvailable) {
                let Eu = () => {};
                return ju.onInstanceAvailable((ju => {
                  Eu = Xu(ju, uu)
                })), () => Eu()
              }
            },
            onChange: function(uu) {
              if (ju.instance) return qu(ju.instance, uu);
              if (ju.onInstanceAvailable) {
                let Eu = () => {};
                return ju.onInstanceAvailable((ju => {
                  Eu = qu(ju, uu)
                })), () => Eu()
              }
            }
          }, {
            get(uu, Eu) {
              if (!uu[Eu]) throw new Error(`Can't access '${Eu}' through callback proxy. access the instance directly.`);
              return uu[Eu]
            },
            has: (uu, Eu) => void 0 !== uu[Eu],
            set(uu, Eu, ju) {
              throw new Error("not allowed")
            },
            deleteProperty(uu, Eu) {
              throw new Error("not allowed")
            }
          })
        }
      }

      function qu(uu) {
        return Xu(void 0, {
          instance: uu
        })
      }
      return uu.iK = function(uu) {
        const Eu = new Set;
        for (let su = 0, Zu = uu.length; su < Zu; su++) {
          const Zu = uu[su],
            Xu = Zu.refId,
            qu = Zu.ref,
            fu = ju[Xu];
          if (fu) {
            if ((Zu.op & Uu.DELETE) === Uu.DELETE && ms.isSchema(Zu.previousValue)) {
              const uu = ju[Zu.previousValue[lu]]?.[Uu.DELETE];
              for (let Eu = uu?.length - 1; Eu >= 0; Eu--) uu[Eu]()
            }
            if (ms.isSchema(qu)) {
              if (!Eu.has(Xu)) {
                const uu = fu?.[Uu.REPLACE];
                for (let Eu = uu?.length - 1; Eu >= 0; Eu--) uu[Eu]()
              }
              if (fu.hasOwnProperty(Zu.field)) {
                const uu = fu[Zu.field];
                for (let Eu = uu?.length - 1; Eu >= 0; Eu--) uu[Eu](Zu.value, Zu.previousValue)
              }
            } else {
              if ((Zu.op & Uu.DELETE) === Uu.DELETE) {
                if (void 0 !== Zu.previousValue) {
                  const uu = fu[Uu.DELETE];
                  for (let Eu = uu?.length - 1; Eu >= 0; Eu--) uu[Eu](Zu.previousValue, Zu.dynamicIndex ?? Zu.field)
                }
                if ((Zu.op & Uu.ADD) === Uu.ADD) {
                  const uu = fu[Uu.ADD];
                  for (let Eu = uu?.length - 1; Eu >= 0; Eu--) uu[Eu](Zu.value, Zu.dynamicIndex ?? Zu.field)
                }
              } else if ((Zu.op & Uu.ADD) === Uu.ADD && Zu.previousValue !== Zu.value) {
                const uu = fu[Uu.ADD];
                for (let Eu = uu?.length - 1; Eu >= 0; Eu--) uu[Eu](Zu.value, Zu.dynamicIndex ?? Zu.field)
              }
              if (Zu.value !== Zu.previousValue && (void 0 !== Zu.value || void 0 !== Zu.previousValue)) {
                const uu = fu[Uu.REPLACE];
                for (let Eu = uu?.length - 1; Eu >= 0; Eu--) uu[Eu](Zu.value, Zu.dynamicIndex ?? Zu.field)
              }
            }
            Eu.add(Xu)
          }
        }
      }, qu
    }

    function jU(uu, Eu) {
      uu.iK = Eu
    }
    uU.encode = function(uu) {
      let Eu = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
        offset: 0
      };
      const ju = uu.context,
        su = new uU,
        Uu = new xs(su),
        Zu = ju.schemas.get(uu.state.constructor);
      Zu > 0 && (su.rootType = Zu);
      const Xu = new Set,
        lu = {},
        qu = uu => {
          if (void 0 === uu.extendsId || Xu.has(uu.extendsId)) {
            Xu.add(uu.id), su.types.push(uu);
            const Eu = lu[uu.id];
            void 0 !== Eu && (delete lu[uu.id], Eu.forEach((uu => qu(uu))))
          } else void 0 === lu[uu.extendsId] && (lu[uu.extendsId] = []), lu[uu.extendsId].push(uu)
        };
      ju.schemas.forEach(((uu, Eu) => {
        const su = new Rs;
        su.id = Number(uu);
        const Uu = Object.getPrototypeOf(Eu);
        Uu !== ms && (su.extendsId = ju.schemas.get(Uu));
        const Zu = Eu[Symbol.metadata];
        if (Zu !== Uu[Symbol.metadata]) {
          const uu = Zu[au] ?? -1;
          for (let Eu = 0; Eu <= uu; Eu++) {
            const uu = Zu[Eu];
            if (void 0 === uu) continue;
            const Uu = uu.name;
            if (!Object.prototype.hasOwnProperty.call(Zu, Uu)) continue;
            const Xu = new zs;
            let lu;
            if (Xu.name = Uu, "string" === typeof uu.type) lu = uu.type;
            else if (QE(uu.type)) {
              const Eu = uu.type.quantized;
              lu = "quantized";
              const ju = new ys;
              ju.min = Eu.min, ju.max = Eu.max, ju.bits = Eu.bits, ju.mode = Eu.wrap ? 1 : 0, Xu.quantized = ju
            } else {
              let Eu;
              ms.is(uu.type) ? (lu = "ref", Eu = uu.type) : (lu = Object.keys(uu.type)[0], "string" === typeof uu.type[lu] ? Xu.childPrimitive = uu.type[lu] : Eu = uu.type[lu]), Xu.referencedType = Eu ? ju.getTypeId(Eu) : -1
            }
            Xu.type = lu, su.fields.push(Xu)
          }
        }
        qu(su)
      }));
      for (const fu in lu) lu[fu].forEach((uu => su.types.push(uu)));
      return Uu.encodeAll(Eu).slice(0, Eu.offset)
    }, uU.decode = function(uu, Eu) {
      const ju = new uU;
      new ns(ju).decode(uu, Eu);
      const su = new IE;
      ju.types.forEach((uu => {
        const Eu = su.get(uu.extendsId) ?? ms,
          ju = class extends Eu {};
        IE.register(ju), su.add(ju, uu.id)
      }), {});
      ju.types.forEach((uu => {
        const Eu = su.get(uu.id),
          Uu = HE.initialize(Eu),
          Zu = [];
        let Xu = uu;
        do {
          Zu.push(Xu), Xu = ju.types.find((uu => uu.id === Xu.extendsId))
        } while (Xu);
        let lu = 0;
        Zu.reverse().forEach((uu => {
          ((uu, Eu, ju) => {
            Eu.fields.forEach(((Eu, Uu) => {
              const Zu = ju + Uu;
              if (void 0 !== Eu.quantized) {
                const ju = Eu.quantized;
                HE.addField(uu, Zu, Eu.name, {
                  quantized: rE({
                    min: ju.min,
                    max: ju.max,
                    bits: ju.bits,
                    mode: 1 === ju.mode ? "wrap" : "clamp"
                  })
                })
              } else if (void 0 !== Eu.referencedType) {
                const ju = Eu.type,
                  Uu = su.get(Eu.referencedType) ?? Eu.childPrimitive;
                "ref" === ju ? HE.addField(uu, Zu, Eu.name, Uu) : HE.addField(uu, Zu, Eu.name, {
                  [ju]: Uu
                })
              } else HE.addField(uu, Zu, Eu.name, Eu.type)
            }))
          })(Uu, uu, lu), lu += uu.fields.length
        }))
      }));
      const Uu = new(su.get(ju.rootType || 0));
      return new ns(Uu, su)
    }, uU.makeEncodable = function(uu) {
      const Eu = uu[Symbol.metadata];
      if (!Eu) return uu;
      const ju = Eu[au];
      if (void 0 === ju) return uu;
      for (let su = 0; su <= ju; su++) {
        const ju = Eu[su];
        ju && HE.defineField(uu, Eu, su, ju.name, ju.type)
      }
      return Object.prototype.hasOwnProperty.call(uu, Ju) && delete uu[Ju], uu
    };
    class sU {
      zN;
      uniqueRefIds = new Set;
      isTriggering = !1;
      constructor(uu) {
        this.zN = uu, this.zN.iK = this.iK.bind(this)
      }
      get callbacks() {
        return this.zN.root.callbacks
      }
      get state() {
        return this.zN.state
      }
      addCallback(uu, Eu, ju) {
        return this.zN.root.addCallback(uu, Eu, ju)
      }
      addCallbackOrWaitCollectionAvailable(uu, Eu, ju, su) {
        let Zu = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4],
          Xu = () => {};
        const qu = () => Xu(),
          fu = uu[Eu];
        if (fu && void 0 !== fu[lu]) return Zu = Zu && !1 === this.isTriggering, ju === Uu.ADD && Zu && fu.forEach(((uu, Eu) => {
          su(uu, Eu)
        })), this.addCallback(fu[lu], ju, su);
        {
          let Uu;
          return Uu = this.addCallback(uu[lu], Eu, ((uu, Eu) => {
            null !== uu && void 0 !== uu && (Uu(), Xu = this.addCallback(uu[lu], ju, su))
          })), Xu = Uu, qu
        }
      }
      listen() {
        return "string" === typeof(arguments.length <= 0 ? void 0 : arguments[0]) ? this.listenInstance(this.state, arguments.length <= 0 ? void 0 : arguments[0], arguments.length <= 1 ? void 0 : arguments[1], arguments.length <= 2 ? void 0 : arguments[2]) : this.listenInstance(arguments.length <= 0 ? void 0 : arguments[0], arguments.length <= 1 ? void 0 : arguments[1], arguments.length <= 2 ? void 0 : arguments[2], arguments.length <= 3 ? void 0 : arguments[3])
      }
      listenInstance(uu, Eu, ju) {
        let su = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
        su = su && !1 === this.isTriggering;
        const Uu = uu[Eu];
        return su && null !== Uu && void 0 !== Uu && ju(Uu, void 0), this.addCallback(uu[lu], Eu, ju)
      }
      onChange() {
        if (2 === arguments.length && "string" !== typeof(arguments.length <= 0 ? void 0 : arguments[0])) {
          const uu = arguments.length <= 0 ? void 0 : arguments[0],
            Eu = arguments.length <= 1 ? void 0 : arguments[1];
          return this.addCallback(uu[lu], Uu.REPLACE, Eu)
        }
        return "string" === typeof(arguments.length <= 0 ? void 0 : arguments[0]) ? this.addCallbackOrWaitCollectionAvailable(this.state, arguments.length <= 0 ? void 0 : arguments[0], Uu.REPLACE, arguments.length <= 1 ? void 0 : arguments[1]) : this.addCallbackOrWaitCollectionAvailable(arguments.length <= 0 ? void 0 : arguments[0], arguments.length <= 1 ? void 0 : arguments[1], Uu.REPLACE, arguments.length <= 2 ? void 0 : arguments[2])
      }
      lG() {
        return "string" === typeof(arguments.length <= 0 ? void 0 : arguments[0]) ? this.addCallbackOrWaitCollectionAvailable(this.state, arguments.length <= 0 ? void 0 : arguments[0], Uu.ADD, arguments.length <= 1 ? void 0 : arguments[1], !1 !== (arguments.length <= 2 ? void 0 : arguments[2])) : this.addCallbackOrWaitCollectionAvailable(arguments.length <= 0 ? void 0 : arguments[0], arguments.length <= 1 ? void 0 : arguments[1], Uu.ADD, arguments.length <= 2 ? void 0 : arguments[2], !1 !== (arguments.length <= 3 ? void 0 : arguments[3]))
      }
      jK() {
        return "string" === typeof(arguments.length <= 0 ? void 0 : arguments[0]) ? this.addCallbackOrWaitCollectionAvailable(this.state, arguments.length <= 0 ? void 0 : arguments[0], Uu.DELETE, arguments.length <= 1 ? void 0 : arguments[1]) : this.addCallbackOrWaitCollectionAvailable(arguments.length <= 0 ? void 0 : arguments[0], arguments.length <= 1 ? void 0 : arguments[1], Uu.DELETE, arguments.length <= 2 ? void 0 : arguments[2])
      }
      bindTo(uu, Eu, ju) {
        let su = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
        const Zu = uu.constructor[Symbol.metadata];
        ju || (ju = Object.keys(Zu).filter((uu => !isNaN(Number(uu)))).map((uu => Zu[uu].name)));
        const Xu = () => {
          for (const su of ju) {
            const ju = uu[su];
            void 0 !== ju && (Eu[su] = ju)
          }
        };
        return su && Xu(), this.addCallback(uu[lu], Uu.REPLACE, Xu)
      }
      iK(uu) {
        this.uniqueRefIds.clear(), this.isTriggering = !0;
        for (let Eu = 0, ju = uu.length; Eu < ju; Eu++) {
          const ju = uu[Eu],
            su = ju.refId,
            Zu = ju.ref,
            Xu = this.callbacks[su];
          if (Xu) {
            if ((ju.op & Uu.DELETE) === Uu.DELETE && ms.isSchema(ju.previousValue)) {
              const uu = ju.previousValue[lu],
                Eu = this.callbacks[uu]?.[Uu.DELETE];
              if (Eu)
                for (let ju = Eu.length - 1; ju >= 0; ju--) try {
                  Eu[ju]()
                } catch (lU) {
                  console.error(lU)
                }
            }
            if (ms.isSchema(Zu)) {
              if (!this.uniqueRefIds.has(su)) {
                const uu = Xu[Uu.REPLACE];
                if (uu)
                  for (let Eu = uu.length - 1; Eu >= 0; Eu--) try {
                    uu[Eu]()
                  } catch (lU) {
                    console.error(lU)
                  }
              }
              const uu = Xu[ju.field];
              if (uu)
                for (let Eu = uu.length - 1; Eu >= 0; Eu--) try {
                  uu[Eu](ju.value, ju.previousValue)
                } catch (lU) {
                  console.error(lU)
                }
            } else {
              const uu = ju.dynamicIndex ?? ju.field;
              if ((ju.op & Uu.DELETE) === Uu.DELETE) {
                if (void 0 !== ju.previousValue) {
                  const Eu = Xu[Uu.DELETE];
                  if (Eu)
                    for (let su = Eu.length - 1; su >= 0; su--) try {
                      Eu[su](ju.previousValue, uu)
                    } catch (lU) {
                      console.error(lU)
                    }
                }
                if ((ju.op & Uu.ADD) === Uu.ADD) {
                  const Eu = Xu[Uu.ADD];
                  if (Eu)
                    for (let su = Eu.length - 1; su >= 0; su--) try {
                      Eu[su](ju.value, uu)
                    } catch (lU) {
                      console.error(lU)
                    }
                }
              } else if ((ju.op & Uu.ADD) === Uu.ADD && ju.previousValue !== ju.value) {
                const Eu = Xu[Uu.ADD];
                if (Eu)
                  for (let su = Eu.length - 1; su >= 0; su--) try {
                    Eu[su](ju.value, uu)
                  } catch (lU) {
                    console.error(lU)
                  }
              }
              if (ju.value !== ju.previousValue) {
                const Eu = Xu[Uu.REPLACE];
                if (Eu)
                  for (let su = Eu.length - 1; su >= 0; su--) try {
                    Eu[su](uu, ju.value)
                  } catch (lU) {
                    console.error(lU)
                  }
              }
            }
            this.uniqueRefIds.add(su)
          }
        }
        this.isTriggering = !1
      }
    }
    const UU = {
      get(uu) {
        if (uu instanceof ns) return new sU(uu);
        if ("zN" in uu.pD) return new sU(uu.pD.zN);
        throw new Error("Invalid room or decoder")
      },
      getLegacy(uu) {
        if (uu instanceof ns) return EU(uu);
        if ("zN" in uu.pD) return EU(uu.pD.zN);
        throw new Error("Invalid room or decoder")
      },
      getRawChanges: (uu, Eu) => jU(uu, Eu)
    };
    class ZU {
      _free = [];
      _factory;
      _maxSize;
      constructor(uu) {
        let Eu = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        this._factory = uu, this._maxSize = Eu.maxSize ?? 1 / 0;
        const ju = Eu.preallocate ?? 0;
        for (let su = 0; su < ju; su++) this._free.push(uu())
      }
      acquire() {
        return this._free.length > 0 ? this._free.pop() : this._factory()
      }
      release(uu) {
        ms.reset(uu), this._free.length < this._maxSize && this._free.push(uu)
      }
      get size() {
        return this._free.length
      }
    }

    function XU(uu) {
      return new ZU((() => new uu), arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {})
    }
    pE("map", {
      constructor: Zs
    }), pE("array", {
      constructor: ss
    }), pE("set", {
      constructor: ls
    }), pE("collection", {
      constructor: Xs
    })
  },
  9308: (uu, Eu, ju) => {
    ju.r(Eu), ju.d(Eu, {
      __addDisposableResource: () => Qu,
      __assign: () => Zu,
      __asyncDelegator: () => du,
      __asyncGenerator: () => Ju,
      __asyncValues: () => au,
      __await: () => wu,
      __awaiter: () => Ou,
      __classPrivateFieldGet: () => Ku,
      __classPrivateFieldIn: () => ru,
      __classPrivateFieldSet: () => Vu,
      __createBinding: () => hu,
      __decorate: () => lu,
      __disposeResources: () => Wu,
      __esDecorate: () => fu,
      __exportStar: () => Du,
      __extends: () => Uu,
      __generator: () => Yu,
      __importDefault: () => vu,
      __importStar: () => mu,
      __makeTemplateObject: () => Pu,
      __metadata: () => Nu,
      __param: () => qu,
      __propKey: () => bu,
      __read: () => Mu,
      __rest: () => Xu,
      __rewriteRelativeImportExtension: () => Su,
      __runInitializers: () => Cu,
      __setFunctionName: () => cu,
      __spread: () => eu,
      __spreadArray: () => pu,
      __spreadArrays: () => Gu,
      __values: () => gu,
      default: () => Iu
    });
    var su = function(uu, Eu) {
      return su = Object.setPrototypeOf || {
        __proto__: []
      }
      instanceof Array && function(uu, Eu) {
        uu.__proto__ = Eu
      } || function(uu, Eu) {
        for (var ju in Eu) Object.prototype.hasOwnProperty.call(Eu, ju) && (uu[ju] = Eu[ju])
      }, su(uu, Eu)
    };

    function Uu(uu, Eu) {
      if ("function" !== typeof Eu && null !== Eu) throw new TypeError("Class extends value " + String(Eu) + " is not a constructor or null");

      function ju() {
        this.constructor = uu
      }
      su(uu, Eu), uu.prototype = null === Eu ? Object.create(Eu) : (ju.prototype = Eu.prototype, new ju)
    }
    var Zu = function() {
      return Zu = Object.assign || function(uu) {
        for (var Eu, ju = 1, su = arguments.length; ju < su; ju++)
          for (var Uu in Eu = arguments[ju]) Object.prototype.hasOwnProperty.call(Eu, Uu) && (uu[Uu] = Eu[Uu]);
        return uu
      }, Zu.apply(this, arguments)
    };

    function Xu(uu, Eu) {
      var ju = {};
      for (var su in uu) Object.prototype.hasOwnProperty.call(uu, su) && Eu.indexOf(su) < 0 && (ju[su] = uu[su]);
      if (null != uu && "function" === typeof Object.getOwnPropertySymbols) {
        var Uu = 0;
        for (su = Object.getOwnPropertySymbols(uu); Uu < su.length; Uu++) Eu.indexOf(su[Uu]) < 0 && Object.prototype.propertyIsEnumerable.call(uu, su[Uu]) && (ju[su[Uu]] = uu[su[Uu]])
      }
      return ju
    }

    function lu(uu, Eu, ju, su) {
      var Uu, Zu = arguments.length,
        Xu = Zu < 3 ? Eu : null === su ? su = Object.getOwnPropertyDescriptor(Eu, ju) : su;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) Xu = Reflect.decorate(uu, Eu, ju, su);
      else
        for (var lu = uu.length - 1; lu >= 0; lu--)(Uu = uu[lu]) && (Xu = (Zu < 3 ? Uu(Xu) : Zu > 3 ? Uu(Eu, ju, Xu) : Uu(Eu, ju)) || Xu);
      return Zu > 3 && Xu && Object.defineProperty(Eu, ju, Xu), Xu
    }

    function qu(uu, Eu) {
      return function(ju, su) {
        Eu(ju, su, uu)
      }
    }

    function fu(uu, Eu, ju, su, Uu, Zu) {
      function Xu(uu) {
        if (void 0 !== uu && "function" !== typeof uu) throw new TypeError("Function expected");
        return uu
      }
      for (var lu, qu = su.kind, fu = "getter" === qu ? "get" : "setter" === qu ? "set" : "value", Cu = !Eu && uu ? su.static ? uu : uu.prototype : null, bu = Eu || (Cu ? Object.getOwnPropertyDescriptor(Cu, su.name) : {}), cu = !1, Nu = ju.length - 1; Nu >= 0; Nu--) {
        var Ou = {};
        for (var Yu in su) Ou[Yu] = "access" === Yu ? {} : su[Yu];
        for (var Yu in su.access) Ou.access[Yu] = su.access[Yu];
        Ou.addInitializer = function(uu) {
          if (cu) throw new TypeError("Cannot add initializers after decoration has completed");
          Zu.push(Xu(uu || null))
        };
        var hu = (0, ju[Nu])("accessor" === qu ? {
          get: bu.get,
          set: bu.set
        } : bu[fu], Ou);
        if ("accessor" === qu) {
          if (void 0 === hu) continue;
          if (null === hu || "object" !== typeof hu) throw new TypeError("Object expected");
          (lu = Xu(hu.get)) && (bu.get = lu), (lu = Xu(hu.set)) && (bu.set = lu), (lu = Xu(hu.init)) && Uu.unshift(lu)
        } else(lu = Xu(hu)) && ("field" === qu ? Uu.unshift(lu) : bu[fu] = lu)
      }
      Cu && Object.defineProperty(Cu, su.name, bu), cu = !0
    }

    function Cu(uu, Eu, ju) {
      for (var su = arguments.length > 2, Uu = 0; Uu < Eu.length; Uu++) ju = su ? Eu[Uu].call(uu, ju) : Eu[Uu].call(uu);
      return su ? ju : void 0
    }

    function bu(uu) {
      return "symbol" === typeof uu ? uu : "".concat(uu)
    }

    function cu(uu, Eu, ju) {
      return "symbol" === typeof Eu && (Eu = Eu.description ? "[".concat(Eu.description, "]") : ""), Object.defineProperty(uu, "name", {
        configurable: !0,
        value: ju ? "".concat(ju, " ", Eu) : Eu
      })
    }

    function Nu(uu, Eu) {
      if ("object" === typeof Reflect && "function" === typeof Reflect.metadata) return Reflect.metadata(uu, Eu)
    }

    function Ou(uu, Eu, ju, su) {
      return new(ju || (ju = Promise))((function(Uu, Zu) {
        function Xu(uu) {
          try {
            qu(su.next(uu))
          } catch (Eu) {
            Zu(Eu)
          }
        }

        function lu(uu) {
          try {
            qu(su.throw(uu))
          } catch (Eu) {
            Zu(Eu)
          }
        }

        function qu(uu) {
          var Eu;
          uu.done ? Uu(uu.value) : (Eu = uu.value, Eu instanceof ju ? Eu : new ju((function(uu) {
            uu(Eu)
          }))).then(Xu, lu)
        }
        qu((su = su.apply(uu, Eu || [])).next())
      }))
    }

    function Yu(uu, Eu) {
      var ju, su, Uu, Zu = {
          label: 0,
          sent: function() {
            if (1 & Uu[0]) throw Uu[1];
            return Uu[1]
          },
          trys: [],
          ops: []
        },
        Xu = Object.create(("function" === typeof Iterator ? Iterator : Object).prototype);
      return Xu.next = lu(0), Xu.throw = lu(1), Xu.return = lu(2), "function" === typeof Symbol && (Xu[Symbol.iterator] = function() {
        return this
      }), Xu;

      function lu(lu) {
        return function(qu) {
          return function(lu) {
            if (ju) throw new TypeError("Generator is already executing.");
            for (; Xu && (Xu = 0, lu[0] && (Zu = 0)), Zu;) try {
              if (ju = 1, su && (Uu = 2 & lu[0] ? su.return : lu[0] ? su.throw || ((Uu = su.return) && Uu.call(su), 0) : su.next) && !(Uu = Uu.call(su, lu[1])).done) return Uu;
              switch (su = 0, Uu && (lu = [2 & lu[0], Uu.value]), lu[0]) {
                case 0:
                case 1:
                  Uu = lu;
                  break;
                case 4:
                  return Zu.label++, {
                    value: lu[1],
                    done: !1
                  };
                case 5:
                  Zu.label++, su = lu[1], lu = [0];
                  continue;
                case 7:
                  lu = Zu.ops.pop(), Zu.trys.pop();
                  continue;
                default:
                  if (!(Uu = (Uu = Zu.trys).length > 0 && Uu[Uu.length - 1]) && (6 === lu[0] || 2 === lu[0])) {
                    Zu = 0;
                    continue
                  }
                  if (3 === lu[0] && (!Uu || lu[1] > Uu[0] && lu[1] < Uu[3])) {
                    Zu.label = lu[1];
                    break
                  }
                  if (6 === lu[0] && Zu.label < Uu[1]) {
                    Zu.label = Uu[1], Uu = lu;
                    break
                  }
                  if (Uu && Zu.label < Uu[2]) {
                    Zu.label = Uu[2], Zu.ops.push(lu);
                    break
                  }
                  Uu[2] && Zu.ops.pop(), Zu.trys.pop();
                  continue
              }
              lu = Eu.call(uu, Zu)
            } catch (qu) {
              lu = [6, qu], su = 0
            } finally {
              ju = Uu = 0
            }
            if (5 & lu[0]) throw lu[1];
            return {
              value: lu[0] ? lu[1] : void 0,
              done: !0
            }
          }([lu, qu])
        }
      }
    }
    var hu = Object.create ? function(uu, Eu, ju, su) {
      void 0 === su && (su = ju);
      var Uu = Object.getOwnPropertyDescriptor(Eu, ju);
      Uu && !("get" in Uu ? !Eu.__esModule : Uu.writable || Uu.configurable) || (Uu = {
        enumerable: !0,
        get: function() {
          return Eu[ju]
        }
      }), Object.defineProperty(uu, su, Uu)
    } : function(uu, Eu, ju, su) {
      void 0 === su && (su = ju), uu[su] = Eu[ju]
    };

    function Du(uu, Eu) {
      for (var ju in uu) "default" === ju || Object.prototype.hasOwnProperty.call(Eu, ju) || hu(Eu, uu, ju)
    }

    function gu(uu) {
      var Eu = "function" === typeof Symbol && Symbol.iterator,
        ju = Eu && uu[Eu],
        su = 0;
      if (ju) return ju.call(uu);
      if (uu && "number" === typeof uu.length) return {
        next: function() {
          return uu && su >= uu.length && (uu = void 0), {
            value: uu && uu[su++],
            done: !uu
          }
        }
      };
      throw new TypeError(Eu ? "Object is not iterable." : "Symbol.iterator is not defined.")
    }

    function Mu(uu, Eu) {
      var ju = "function" === typeof Symbol && uu[Symbol.iterator];
      if (!ju) return uu;
      var su, Uu, Zu = ju.call(uu),
        Xu = [];
      try {
        for (;
          (void 0 === Eu || Eu-- > 0) && !(su = Zu.next()).done;) Xu.push(su.value)
      } catch (lu) {
        Uu = {
          error: lu
        }
      } finally {
        try {
          su && !su.done && (ju = Zu.return) && ju.call(Zu)
        } finally {
          if (Uu) throw Uu.error
        }
      }
      return Xu
    }

    function eu() {
      for (var uu = [], Eu = 0; Eu < arguments.length; Eu++) uu = uu.concat(Mu(arguments[Eu]));
      return uu
    }

    function Gu() {
      for (var uu = 0, Eu = 0, ju = arguments.length; Eu < ju; Eu++) uu += arguments[Eu].length;
      var su = Array(uu),
        Uu = 0;
      for (Eu = 0; Eu < ju; Eu++)
        for (var Zu = arguments[Eu], Xu = 0, lu = Zu.length; Xu < lu; Xu++, Uu++) su[Uu] = Zu[Xu];
      return su
    }

    function pu(uu, Eu, ju) {
      if (ju || 2 === arguments.length)
        for (var su, Uu = 0, Zu = Eu.length; Uu < Zu; Uu++) !su && Uu in Eu || (su || (su = Array.prototype.slice.call(Eu, 0, Uu)), su[Uu] = Eu[Uu]);
      return uu.concat(su || Array.prototype.slice.call(Eu))
    }

    function wu(uu) {
      return this instanceof wu ? (this.v = uu, this) : new wu(uu)
    }

    function Ju(uu, Eu, ju) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var su, Uu = ju.apply(uu, Eu || []),
        Zu = [];
      return su = Object.create(("function" === typeof AsyncIterator ? AsyncIterator : Object).prototype), Xu("next"), Xu("throw"), Xu("return", (function(uu) {
        return function(Eu) {
          return Promise.resolve(Eu).then(uu, fu)
        }
      })), su[Symbol.asyncIterator] = function() {
        return this
      }, su;

      function Xu(uu, Eu) {
        Uu[uu] && (su[uu] = function(Eu) {
          return new Promise((function(ju, su) {
            Zu.push([uu, Eu, ju, su]) > 1 || lu(uu, Eu)
          }))
        }, Eu && (su[uu] = Eu(su[uu])))
      }

      function lu(uu, Eu) {
        try {
          (ju = Uu[uu](Eu)).value instanceof wu ? Promise.resolve(ju.value.v).then(qu, fu) : Cu(Zu[0][2], ju)
        } catch (su) {
          Cu(Zu[0][3], su)
        }
        var ju
      }

      function qu(uu) {
        lu("next", uu)
      }

      function fu(uu) {
        lu("throw", uu)
      }

      function Cu(uu, Eu) {
        uu(Eu), Zu.shift(), Zu.length && lu(Zu[0][0], Zu[0][1])
      }
    }

    function du(uu) {
      var Eu, ju;
      return Eu = {}, su("next"), su("throw", (function(uu) {
        throw uu
      })), su("return"), Eu[Symbol.iterator] = function() {
        return this
      }, Eu;

      function su(su, Uu) {
        Eu[su] = uu[su] ? function(Eu) {
          return (ju = !ju) ? {
            value: wu(uu[su](Eu)),
            done: !1
          } : Uu ? Uu(Eu) : Eu
        } : Uu
      }
    }

    function au(uu) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var Eu, ju = uu[Symbol.asyncIterator];
      return ju ? ju.call(uu) : (uu = gu(uu), Eu = {}, su("next"), su("throw"), su("return"), Eu[Symbol.asyncIterator] = function() {
        return this
      }, Eu);

      function su(ju) {
        Eu[ju] = uu[ju] && function(Eu) {
          return new Promise((function(su, Uu) {
            (function(uu, Eu, ju, su) {
              Promise.resolve(su).then((function(Eu) {
                uu({
                  value: Eu,
                  done: ju
                })
              }), Eu)
            })(su, Uu, (Eu = uu[ju](Eu)).done, Eu.value)
          }))
        }
      }
    }

    function Pu(uu, Eu) {
      return Object.defineProperty ? Object.defineProperty(uu, "raw", {
        value: Eu
      }) : uu.raw = Eu, uu
    }
    var ou = Object.create ? function(uu, Eu) {
        Object.defineProperty(uu, "default", {
          enumerable: !0,
          value: Eu
        })
      } : function(uu, Eu) {
        uu.default = Eu
      },
      ku = function(uu) {
        return ku = Object.getOwnPropertyNames || function(uu) {
          var Eu = [];
          for (var ju in uu) Object.prototype.hasOwnProperty.call(uu, ju) && (Eu[Eu.length] = ju);
          return Eu
        }, ku(uu)
      };

    function mu(uu) {
      if (uu && uu.__esModule) return uu;
      var Eu = {};
      if (null != uu)
        for (var ju = ku(uu), su = 0; su < ju.length; su++) "default" !== ju[su] && hu(Eu, uu, ju[su]);
      return ou(Eu, uu), Eu
    }

    function vu(uu) {
      return uu && uu.__esModule ? uu : {
        default: uu
      }
    }

    function Ku(uu, Eu, ju, su) {
      if ("a" === ju && !su) throw new TypeError("Private accessor was defined without a getter");
      if ("function" === typeof Eu ? uu !== Eu || !su : !Eu.has(uu)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
      return "m" === ju ? su : "a" === ju ? su.call(uu) : su ? su.value : Eu.get(uu)
    }

    function Vu(uu, Eu, ju, su, Uu) {
      if ("m" === su) throw new TypeError("Private method is not writable");
      if ("a" === su && !Uu) throw new TypeError("Private accessor was defined without a setter");
      if ("function" === typeof Eu ? uu !== Eu || !Uu : !Eu.has(uu)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
      return "a" === su ? Uu.call(uu, ju) : Uu ? Uu.value = ju : Eu.set(uu, ju), ju
    }

    function ru(uu, Eu) {
      if (null === Eu || "object" !== typeof Eu && "function" !== typeof Eu) throw new TypeError("Cannot use 'in' operator on non-object");
      return "function" === typeof uu ? Eu === uu : uu.has(Eu)
    }

    function Qu(uu, Eu, ju) {
      if (null !== Eu && void 0 !== Eu) {
        if ("object" !== typeof Eu && "function" !== typeof Eu) throw new TypeError("Object expected.");
        var su, Uu;
        if (ju) {
          if (!Symbol.asyncDispose) throw new TypeError("Symbol.asyncDispose is not defined.");
          su = Eu[Symbol.asyncDispose]
        }
        if (void 0 === su) {
          if (!Symbol.dispose) throw new TypeError("Symbol.dispose is not defined.");
          su = Eu[Symbol.dispose], ju && (Uu = su)
        }
        if ("function" !== typeof su) throw new TypeError("Object not disposable.");
        Uu && (su = function() {
          try {
            Uu.call(this)
          } catch (uu) {
            return Promise.reject(uu)
          }
        }), uu.stack.push({
          value: Eu,
          dispose: su,
          async: ju
        })
      } else ju && uu.stack.push({
        async: !0
      });
      return Eu
    }
    var iu = "function" === typeof SuppressedError ? SuppressedError : function(uu, Eu, ju) {
      var su = new Error(ju);
      return su.name = "SuppressedError", su.error = uu, su.suppressed = Eu, su
    };

    function Wu(uu) {
      function Eu(Eu) {
        uu.error = uu.hasError ? new iu(Eu, uu.error, "An error was suppressed during disposal.") : Eu, uu.hasError = !0
      }
      var ju, su = 0;
      return function Uu() {
        for (; ju = uu.stack.pop();) try {
          if (!ju.async && 1 === su) return su = 0, uu.stack.push(ju), Promise.resolve().then(Uu);
          if (ju.dispose) {
            var Zu = ju.dispose.call(ju.value);
            if (ju.async) return su |= 2, Promise.resolve(Zu).then(Uu, (function(uu) {
              return Eu(uu), Uu()
            }))
          } else su |= 1
        } catch (Xu) {
          Eu(Xu)
        }
        if (1 === su) return uu.hasError ? Promise.reject(uu.error) : Promise.resolve();
        if (uu.hasError) throw uu.error
      }()
    }

    function Su(uu, Eu) {
      return "string" === typeof uu && /^\.\.?\//.test(uu) ? uu.replace(/\.(tsx)$|((?:\.d)?)((?:\.[^./]+?)?)\.([cm]?)ts$/i, (function(uu, ju, su, Uu, Zu) {
        return ju ? Eu ? ".jsx" : ".js" : !su || Uu && Zu ? su + Uu + "." + Zu.toLowerCase() + "js" : uu
      })) : uu
    }
    const Iu = {
      __extends: Uu,
      __assign: Zu,
      __rest: Xu,
      __decorate: lu,
      __param: qu,
      __esDecorate: fu,
      __runInitializers: Cu,
      __propKey: bu,
      __setFunctionName: cu,
      __metadata: Nu,
      __awaiter: Ou,
      __generator: Yu,
      __createBinding: hu,
      __exportStar: Du,
      __values: gu,
      __read: Mu,
      __spread: eu,
      __spreadArrays: Gu,
      __spreadArray: pu,
      __await: wu,
      __asyncGenerator: Ju,
      __asyncDelegator: du,
      __asyncValues: au,
      __makeTemplateObject: Pu,
      __importStar: mu,
      __importDefault: vu,
      __classPrivateFieldGet: Ku,
      __classPrivateFieldSet: Vu,
      __classPrivateFieldIn: ru,
      __addDisposableResource: Qu,
      __disposeResources: Wu,
      __rewriteRelativeImportExtension: Su
    }
  }
};
Object.freeze(modules);
for (const uu in modules) Object.freeze(modules[uu]);