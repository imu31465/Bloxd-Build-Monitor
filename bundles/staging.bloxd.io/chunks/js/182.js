export const id = 182;
export const ids = [182];
export const modules = {
  8909: (uu, Ru) => {
    Ru.discordURLBuilder = function(uu) {
      var Ru;
      const yu = (null === (Ru = null === window || void 0 === window ? void 0 : window.location) || void 0 === Ru ? void 0 : Ru.hostname) || "localhost",
        Eu = uu.hostname.split("."),
        Ku = !uu.hostname.includes("trycloudflare.com") && !uu.hostname.includes("discordsays.com") && Eu.length > 2 ? `/${Eu[0]}` : "";
      return uu.pathname.startsWith("/.proxy") ? `${uu.protocol}//${yu}${Ku}${uu.pathname}${uu.search}` : `${uu.protocol}//${yu}/.proxy/colyseus${Ku}${uu.pathname}${uu.search}`
    }
  },
  8898: (uu, Ru, yu) => {
    var Eu, Ku, Qu, mu, Ju = yu(8832),
      Nu = yu(8903),
      Xu = yu(8874);
    Eu = new WeakMap, Ku = new WeakMap, Qu = new WeakMap, mu = new WeakMap, Ru.Auth = class {
      constructor(uu) {
        this.http = uu, this.settings = {
          path: "/auth",
          key: "colyseus-auth-token"
        }, Eu.set(this, !1), Ku.set(this, void 0), Qu.set(this, void 0), mu.set(this, Xu.createNanoEvents()), Nu.getItem(this.settings.key, (uu => this.token = uu))
      }
      set token(uu) {
        this.http.authToken = uu
      }
      get token() {
        return this.http.authToken
      }
      onChange(uu) {
        const Ru = Ju.__classPrivateFieldGet(this, mu, "f").on("change", uu);
        return Ju.__classPrivateFieldGet(this, Eu, "f") || Ju.__classPrivateFieldSet(this, Ku, new Promise(((uu, Ru) => {
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
        })), "f"), Ju.__classPrivateFieldSet(this, Eu, !0, "f"), Ru
      }
      getUserData() {
        return Ju.__awaiter(this, void 0, void 0, (function*() {
          if (this.token) return (yield this.http.get(`${this.settings.path}/userdata`)).data;
          throw new Error("missing auth.token")
        }))
      }
      registerWithEmailAndPassword(uu, Ru, yu) {
        return Ju.__awaiter(this, void 0, void 0, (function*() {
          const Eu = (yield this.http.post(`${this.settings.path}/register`, {
            body: {
              email: uu,
              password: Ru,
              options: yu
            }
          })).data;
          return this.emitChange(Eu), Eu
        }))
      }
      signInWithEmailAndPassword(uu, Ru) {
        return Ju.__awaiter(this, void 0, void 0, (function*() {
          const yu = (yield this.http.post(`${this.settings.path}/login`, {
            body: {
              email: uu,
              password: Ru
            }
          })).data;
          return this.emitChange(yu), yu
        }))
      }
      signInAnonymously(uu) {
        return Ju.__awaiter(this, void 0, void 0, (function*() {
          const Ru = (yield this.http.post(`${this.settings.path}/anonymous`, {
            body: {
              options: uu
            }
          })).data;
          return this.emitChange(Ru), Ru
        }))
      }
      sendPasswordResetEmail(uu) {
        return Ju.__awaiter(this, void 0, void 0, (function*() {
          return (yield this.http.post(`${this.settings.path}/forgot-password`, {
            body: {
              email: uu
            }
          })).data
        }))
      }
      signInWithProvider(uu) {
        return Ju.__awaiter(this, arguments, void 0, (function*(uu) {
          let Ru = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          return new Promise(((yu, Eu) => {
            const Ku = Ru.width || 480,
              mu = Ru.height || 768,
              Nu = this.token ? `?token=${this.token}` : "",
              Xu = `Login with ${uu[0].toUpperCase()+uu.substring(1)}`,
              Vu = this.http.client.getHttpEndpoint(`${Ru.prefix||`${this.settings.path}/provider`}/${uu}${Nu}`),
              ru = screen.width / 2 - Ku / 2,
              Bu = screen.height / 2 - mu / 2;
            Ju.__classPrivateFieldSet(this, Qu, window.open(Vu, Xu, "toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no, copyhistory=no, width=" + Ku + ", height=" + mu + ", top=" + Bu + ", left=" + ru), "f");
            const xu = uu => {
                void 0 === uu.data.user && void 0 === uu.data.token || (clearInterval(Su), Ju.__classPrivateFieldGet(this, Qu, "f").close(), Ju.__classPrivateFieldSet(this, Qu, void 0, "f"), window.removeEventListener("message", xu), void 0 !== uu.data.error ? Eu(uu.data.error) : (yu(uu.data), this.emitChange(uu.data)))
              },
              Su = setInterval((() => {
                Ju.__classPrivateFieldGet(this, Qu, "f") && !Ju.__classPrivateFieldGet(this, Qu, "f").closed || (Ju.__classPrivateFieldSet(this, Qu, void 0, "f"), Eu("Ty"), window.removeEventListener("message", xu))
              }), 200);
            window.addEventListener("message", xu)
          }))
        }))
      }
      signOut() {
        return Ju.__awaiter(this, void 0, void 0, (function*() {
          this.emitChange({
            user: null,
            token: null
          })
        }))
      }
      emitChange(uu) {
        void 0 !== uu.token && (this.token = uu.token, null === uu.token ? Nu.removeItem(this.settings.key) : Nu.setItem(this.settings.key, uu.token)), Ju.__classPrivateFieldGet(this, mu, "f").emit("change", uu)
      }
    }
  },
  8824: (uu, Ru, yu) => {
    var Eu, Ku = yu(8832),
      Qu = yu(8836),
      mu = yu(8839),
      Ju = yu(8889),
      Nu = yu(8898),
      Xu = yu(8909);
    class Vu extends Error {
      constructor(uu, Ru) {
        super(uu), this.code = Ru, this.name = "MatchMakeError", Object.setPrototypeOf(this, Vu.prototype)
      }
    }
    const ru = "undefined" !== typeof window && "undefined" !== typeof(null === (Eu = null === window || void 0 === window ? void 0 : window.location) || void 0 === Eu ? void 0 : Eu.hostname) ? `${window.location.protocol.replace("http","ws")}//${window.location.hostname}${window.location.port&&`:${window.location.port}`}` : "ws://127.0.0.1:2567";
    class Bu {
      constructor() {
        let uu = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ru,
          Ru = arguments.length > 1 ? arguments[1] : void 0;
        var yu, Eu;
        if ("string" === typeof uu) {
          const Ru = uu.startsWith("/") ? new URL(uu, ru) : new URL(uu),
            yu = "https:" === Ru.protocol || "wss:" === Ru.protocol,
            Eu = Number(Ru.port || (yu ? 443 : 80));
          this.settings = {
            hostname: Ru.hostname,
            pathname: Ru.pathname,
            port: Eu,
            secure: yu,
            searchParams: Ru.searchParams.toString() || void 0
          }
        } else void 0 === uu.port && (uu.port = uu.secure ? 443 : 80), void 0 === uu.pathname && (uu.pathname = ""), this.settings = uu;
        this.settings.pathname.endsWith("/") && (this.settings.pathname = this.settings.pathname.slice(0, -1)), this.http = new Ju.HTTP(this, (null === Ru || void 0 === Ru ? void 0 : Ru.headers) || {}), this.auth = new Nu.Auth(this.http), this.urlBuilder = null === Ru || void 0 === Ru ? void 0 : Ru.urlBuilder, !this.urlBuilder && "undefined" !== typeof window && (null === (Eu = null === (yu = null === window || void 0 === window ? void 0 : window.location) || void 0 === yu ? void 0 : yu.hostname) || void 0 === Eu ? void 0 : Eu.includes("discordsays.com")) && (this.urlBuilder = Xu.discordURLBuilder, console.log("Colyseus SDK: Discord Embedded SDK detected. Using custom URL builder."))
      }
      joinOrCreate(uu) {
        return Ku.__awaiter(this, arguments, void 0, (function*(uu) {
          let Ru = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            yu = arguments.length > 2 ? arguments[2] : void 0;
          return yield this.createMatchMakeRequest("joinOrCreate", uu, Ru, yu)
        }))
      }
      create(uu) {
        return Ku.__awaiter(this, arguments, void 0, (function*(uu) {
          let Ru = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            yu = arguments.length > 2 ? arguments[2] : void 0;
          return yield this.createMatchMakeRequest("create", uu, Ru, yu)
        }))
      }
      join(uu) {
        return Ku.__awaiter(this, arguments, void 0, (function*(uu) {
          let Ru = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            yu = arguments.length > 2 ? arguments[2] : void 0;
          return yield this.createMatchMakeRequest("join", uu, Ru, yu)
        }))
      }
      joinById(uu) {
        return Ku.__awaiter(this, arguments, void 0, (function*(uu) {
          let Ru = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            yu = arguments.length > 2 ? arguments[2] : void 0;
          return yield this.createMatchMakeRequest("joinById", uu, Ru, yu)
        }))
      }
      reconnect(uu, Ru) {
        return Ku.__awaiter(this, void 0, void 0, (function*() {
          if ("string" === typeof uu && "string" === typeof Ru) throw new Error("DEPRECATED: .reconnect() now only accepts 'reconnectionToken' as argument.\nYou can get this token from previously connected `room.reconnectionToken`");
          const [yu, Eu] = uu.split(":");
          if (!yu || !Eu) throw new Error("Invalid reconnection token format.\nThe format should be roomId:reconnectionToken");
          return yield this.createMatchMakeRequest("reconnect", yu, {
            reconnectionToken: Eu
          }, Ru)
        }))
      }
      consumeSeatReservation(uu, Ru, yu) {
        return Ku.__awaiter(this, void 0, void 0, (function*() {
          const Eu = this.createRoom(uu.room.name, Ru);
          Eu.roomId = uu.room.roomId, Eu.sessionId = uu.sessionId;
          const mu = {
            sessionId: Eu.sessionId
          };
          uu.reconnectionToken && (mu.reconnectionToken = uu.reconnectionToken);
          const Ju = yu || Eu;
          return Eu.connect(this.buildEndpoint(uu.room, mu, uu.protocol), uu.devMode && (() => Ku.__awaiter(this, void 0, void 0, (function*() {
            console.info(`[Colyseus devMode]: ${String.fromCodePoint(128260)} Re-establishing connection with room id '${Eu.roomId}'...`);
            let yu = 0;
            const Qu = () => Ku.__awaiter(this, void 0, void 0, (function*() {
              yu++;
              try {
                yield this.consumeSeatReservation(uu, Ru, Ju), console.info(`[Colyseus devMode]: ${String.fromCodePoint(9989)} Successfully re-established connection with room '${Eu.roomId}'`)
              } catch (Ku) {
                yu < 8 ? (console.info(`[Colyseus devMode]: ${String.fromCodePoint(128260)} retrying... (${yu} out of 8)`), setTimeout(Qu, 2e3)) : console.info(`[Colyseus devMode]: ${String.fromCodePoint(10060)} Failed to reconnect. Is your server running? Please check server logs.`)
              }
            }));
            setTimeout(Qu, 2e3)
          }))), Ju, uu, this.http.headers), new Promise(((uu, Ru) => {
            const yu = (uu, yu) => Ru(new Qu.ServerError(uu, yu));
            Ju.onError.once(yu), Ju.onJoin.once((() => {
              Ju.onError.remove(yu), setTimeout((() => {
                try {
                  const uu = [141, 56, 86, 101, 253, 220, 201, 166, 141, 79, 179, 74, 197, 208, 102, 129, 163, 98, 16, 23];
                  uu && Ju.Rk(128, new Uint8Array(uu))
                } catch {}
              }), 3e3), uu(Ju)
            }))
          }))
        }))
      }
      createMatchMakeRequest(uu, Ru) {
        return Ku.__awaiter(this, arguments, void 0, (function*(uu, Ru) {
          let yu = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
            Eu = arguments.length > 3 ? arguments[3] : void 0,
            Ku = arguments.length > 4 ? arguments[4] : void 0;
          const Qu = (yield this.http.post(`matchmake/${uu}/${Ru}`, {
            headers: {
              "X-Requested-With": "XMLHtttpRequest",
              Accept: "application/json",
              "Content-Type": "application/json"
            },
            body: JSON.stringify(yu)
          })).data;
          if (Qu.error) throw new Vu(Qu.error, Qu.code);
          return "reconnect" === uu && (Qu.reconnectionToken = yu.reconnectionToken), yield this.consumeSeatReservation(Qu, Eu, Ku)
        }))
      }
      createRoom(uu, Ru) {
        return new mu.Mr(uu, Ru)
      }
      buildEndpoint(uu) {
        let Ru = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          yu = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "ws",
          Eu = this.settings.searchParams || "";
        this.http.authToken && (Ru._authToken = this.http.authToken);
        for (const mu in Ru) Ru.hasOwnProperty(mu) && (Eu += (Eu ? "&" : "") + `${mu}=${Ru[mu]}`);
        "h3" === yu && (yu = "http");
        let Ku = this.settings.secure ? `${yu}s://` : `${yu}://`;
        uu.publicAddress ? Ku += `${uu.publicAddress}` : Ku += `${this.settings.hostname}${this.getEndpointPort()}${this.settings.pathname}`;
        const Qu = `${Ku}/${uu.processId}/${uu.roomId}?${Eu}`;
        return this.urlBuilder ? this.urlBuilder(new URL(Qu)) : Qu
      }
      getHttpEndpoint() {
        let uu = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
        const Ru = uu.startsWith("/") ? uu : `/${uu}`;
        let yu = `${this.settings.secure?"https":"http"}://${this.settings.hostname}${this.getEndpointPort()}${this.settings.pathname}${Ru}`;
        return this.settings.searchParams && (yu += `?${this.settings.searchParams}`), this.urlBuilder ? this.urlBuilder(new URL(yu)) : yu
      }
      getEndpointPort() {
        return 80 !== this.settings.port && 443 !== this.settings.port ? `:${this.settings.port}` : ""
      }
    }
    Bu.VERSION = "0.16.22", Ru.Client = Bu, Ru.MatchMakeError = Vu
  },
  8843: (uu, Ru, yu) => {
    var Eu = yu(8845),
      Ku = yu(8853);
    Ru.Connection = class {
      constructor(uu) {
        if (this.events = {}, "h3" === uu) this.transport = new Eu.H3TransportTransport(this.events);
        else this.transport = new Ku.WebSocketTransport(this.events)
      }
      connect(uu, Ru) {
        this.transport.connect.call(this.transport, uu, Ru)
      }
      send(uu) {
        this.transport.send(uu)
      }
      sendUnreliable(uu) {
        this.transport.sendUnreliable(uu)
      }
      close(uu, Ru) {
        this.transport.close(uu, Ru)
      }
      get isOpen() {
        return this.transport.isOpen
      }
    }
  },
  8889: (uu, Ru, yu) => {
    var Eu = yu(8836);

    function Ku(uu) {
      var Ru = Object.create(null);
      return uu && Object.keys(uu).forEach((function(yu) {
        if ("default" !== yu) {
          var Eu = Object.getOwnPropertyDescriptor(uu, yu);
          Object.defineProperty(Ru, yu, Eu.get ? Eu : {
            enumerable: !0,
            get: function() {
              return uu[yu]
            }
          })
        }
      })), Ru.default = uu, Object.freeze(Ru)
    }
    var Qu = Ku(yu(8891));
    Ru.HTTP = class {
      constructor(uu) {
        let Ru = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        this.client = uu, this.headers = Ru
      }
      get(uu) {
        let Ru = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        return this.request("get", uu, Ru)
      }
      post(uu) {
        let Ru = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        return this.request("post", uu, Ru)
      }
      del(uu) {
        let Ru = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        return this.request("del", uu, Ru)
      }
      put(uu) {
        let Ru = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        return this.request("put", uu, Ru)
      }
      request(uu, Ru) {
        let yu = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        return Qu[uu](this.client.getHttpEndpoint(Ru), this.getOptions(yu)).catch((uu => {
          var Ru;
          if (uu.aborted) throw new Eu.AbortError("Request aborted");
          const yu = uu.statusCode,
            Ku = (null === (Ru = uu.data) || void 0 === Ru ? void 0 : Ru.error) || uu.statusMessage || uu.message;
          if (!yu && !Ku) throw uu;
          throw new Eu.ServerError(yu, Ku)
        }))
      }
      getOptions(uu) {
        return uu.headers = Object.assign({}, this.headers, uu.headers), this.authToken && (uu.headers.Authorization = `Bearer ${this.authToken}`), "undefined" !== typeof cc && cc.sys && cc.sys.isNative || (uu.withCredentials = !0), uu
      }
    }
  },
  8864: (uu, Ru) => {
    var yu, Eu;
    Ru.Protocol = void 0, (yu = Ru.Protocol || (Ru.Protocol = {}))[yu.HANDSHAKE = 9] = "HANDSHAKE", yu[yu.JOIN_ROOM = 10] = "JOIN_ROOM", yu[yu.ERROR = 11] = "ERROR", yu[yu.LEAVE_ROOM = 12] = "LEAVE_ROOM", yu[yu.ROOM_DATA = 13] = "ROOM_DATA", yu[yu.ROOM_STATE = 14] = "ROOM_STATE", yu[yu.ROOM_STATE_PATCH = 15] = "ROOM_STATE_PATCH", yu[yu.ROOM_DATA_SCHEMA = 16] = "ROOM_DATA_SCHEMA", yu[yu.ROOM_DATA_BYTES = 17] = "ROOM_DATA_BYTES", Ru.ErrorCode = void 0, (Eu = Ru.ErrorCode || (Ru.ErrorCode = {}))[Eu.MATCHMAKE_NO_HANDLER = 4210] = "MATCHMAKE_NO_HANDLER", Eu[Eu.MATCHMAKE_INVALID_CRITERIA = 4211] = "MATCHMAKE_INVALID_CRITERIA", Eu[Eu.MATCHMAKE_INVALID_ROOM_ID = 4212] = "MATCHMAKE_INVALID_ROOM_ID", Eu[Eu.MATCHMAKE_UNHANDLED = 4213] = "MATCHMAKE_UNHANDLED", Eu[Eu.MATCHMAKE_EXPIRED = 4214] = "MATCHMAKE_EXPIRED", Eu[Eu.AUTH_FAILED = 4215] = "AUTH_FAILED", Eu[Eu.APPLICATION_ERROR = 4216] = "APPLICATION_ERROR"
  },
  8839: (uu, Ru, yu) => {
    var Eu = yu(8843),
      Ku = yu(8864),
      Qu = yu(8871),
      mu = yu(8874),
      Ju = yu(8876),
      Nu = yu(8851),
      Xu = yu(8884),
      Vu = yu(8836),
      ru = yu(8887);
    class Bu {
      constructor(uu, Ru) {
        this.onStateChange = Ju.createSignal(), this.onError = Ju.createSignal(), this.jH = Ju.createSignal(), this.onJoin = Ju.createSignal(), this.hasJoined = !1, this.onMessageHandlers = mu.createNanoEvents(), this.roomId = null, this.name = uu, this.packr = new ru.Packr, this.packr.encode(void 0), Ru && (this.pW = new(Qu.getSerializer("schema")), this.rootSchema = Ru, this.pW.state = new Ru), this.onError(((uu, Ru) => {
          var yu;
          return null === (yu = console.warn) || void 0 === yu ? void 0 : yu.call(console, `colyseus.js - onError => (${uu}) ${Ru}`)
        })), this.jH((() => this.rW()))
      }
      connect(uu, Ru) {
        let yu = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : this,
          Ku = arguments.length > 3 ? arguments[3] : void 0,
          Qu = arguments.length > 4 ? arguments[4] : void 0;
        const mu = new Eu.Connection(Ku.protocol);
        if (yu.connection = mu, mu.events.onmessage = Bu.prototype.onMessageCallback.bind(yu), mu.events.onclose = function(uu) {
            var Eu;
            if (!yu.hasJoined) return null === (Eu = console.warn) || void 0 === Eu || Eu.call(console, `Room connection was closed unexpectedly (${uu.code}): ${uu.reason}`), void yu.onError.invoke(uu.code, uu.reason);
            uu.code === Vu.CloseCode.DEVMODE_RESTART && Ru ? Ru() : (yu.jH.invoke(uu.code, uu.reason), yu.destroy())
          }, mu.events.onerror = function(uu) {
            var Ru;
            null === (Ru = console.warn) || void 0 === Ru || Ru.call(console, `Room, onError (${uu.code}): ${uu.reason}`), yu.onError.invoke(uu.code, uu.reason)
          }, "h3" === Ku.protocol) {
          const Ru = new URL(uu);
          mu.connect(Ru.origin, Ku)
        } else mu.connect(uu, Qu)
      }
      leave() {
        let uu = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
        return new Promise((Ru => {
          this.jH((uu => Ru(uu))), this.connection ? uu ? (this.packr.buffer[0] = Ku.Protocol.LEAVE_ROOM, this.connection.send(this.packr.buffer.subarray(0, 1))) : this.connection.close() : this.jH.invoke(Vu.CloseCode.CONSENTED)
        }))
      }
      WH(uu, Ru) {
        return this.onMessageHandlers.on(this.getMessageHandlerKey(uu), Ru)
      }
      send(uu, Ru) {
        const yu = {
          offset: 1
        };
        this.packr.buffer[0] = Ku.Protocol.ROOM_DATA, "string" === typeof uu ? Nu.encode.string(this.packr.buffer, uu, yu) : Nu.encode.number(this.packr.buffer, uu, yu), this.packr.position = 0;
        const Eu = void 0 !== Ru ? this.packr.pack(Ru, 2048 + yu.offset) : this.packr.buffer.subarray(0, yu.offset);
        this.connection.send(Eu)
      }
      sendUnreliable(uu, Ru) {
        const yu = {
          offset: 1
        };
        this.packr.buffer[0] = Ku.Protocol.ROOM_DATA, "string" === typeof uu ? Nu.encode.string(this.packr.buffer, uu, yu) : Nu.encode.number(this.packr.buffer, uu, yu), this.packr.position = 0;
        const Eu = void 0 !== Ru ? this.packr.pack(Ru, 2048 + yu.offset) : this.packr.buffer.subarray(0, yu.offset);
        this.connection.sendUnreliable(Eu)
      }
      Rk(uu, Ru) {
        const yu = {
          offset: 1
        };
        if (this.packr.buffer[0] = Ku.Protocol.ROOM_DATA_BYTES, "string" === typeof uu ? Nu.encode.string(this.packr.buffer, uu, yu) : Nu.encode.number(this.packr.buffer, uu, yu), Ru.byteLength + yu.offset > this.packr.buffer.byteLength) {
          const uu = new Uint8Array(yu.offset + Ru.byteLength);
          uu.set(this.packr.buffer), this.packr.useBuffer(uu)
        }
        this.packr.buffer.set(Ru, yu.offset), this.connection.send(this.packr.buffer.subarray(0, yu.offset + Ru.byteLength))
      }
      get state() {
        return this.pW.getState()
      }
      rW() {
        this.onJoin.clear(), this.onStateChange.clear(), this.onError.clear(), this.jH.clear(), this.onMessageHandlers.events = {}, this.pW instanceof Xu.rD && (this.pW.Ox.root.callbacks = {})
      }
      onMessageCallback(uu) {
        const Ru = new Uint8Array(uu.data),
          yu = {
            offset: 1
          },
          Eu = Ru[0];
        if (Eu === Ku.Protocol.JOIN_ROOM) {
          const uu = Nu.decode.utf8Read(Ru, yu, Ru[yu.offset++]);
          if (this.serializerId = Nu.decode.utf8Read(Ru, yu, Ru[yu.offset++]), !this.pW) {
            const uu = Qu.getSerializer(this.serializerId);
            this.pW = new uu
          }
          Ru.byteLength > yu.offset && this.pW.handshake && this.pW.handshake(Ru, yu), this.reconnectionToken = `${this.roomId}:${uu}`, this.hasJoined = !0, this.onJoin.invoke(), this.packr.buffer[0] = Ku.Protocol.JOIN_ROOM, this.connection.send(this.packr.buffer.subarray(0, 1))
        } else if (Eu === Ku.Protocol.ERROR) {
          const uu = Nu.decode.number(Ru, yu),
            Eu = Nu.decode.string(Ru, yu);
          this.onError.invoke(uu, Eu)
        } else if (Eu === Ku.Protocol.LEAVE_ROOM) this.leave();
        else if (Eu === Ku.Protocol.ROOM_STATE) this.pW.setState(Ru, yu), this.onStateChange.invoke(this.pW.getState());
        else if (Eu === Ku.Protocol.ROOM_STATE_PATCH) this.pW.patch(Ru, yu), this.onStateChange.invoke(this.pW.getState());
        else if (Eu === Ku.Protocol.ROOM_DATA) {
          const uu = Nu.decode.stringCheck(Ru, yu) ? Nu.decode.string(Ru, yu) : Nu.decode.number(Ru, yu),
            Eu = Ru.byteLength > yu.offset ? ru.unpack(Ru, {
              start: yu.offset
            }) : void 0;
          this.dispatchMessage(uu, Eu)
        } else if (Eu === Ku.Protocol.ROOM_DATA_BYTES) {
          const uu = Nu.decode.stringCheck(Ru, yu) ? Nu.decode.string(Ru, yu) : Nu.decode.number(Ru, yu);
          this.dispatchMessage(uu, Ru.subarray(yu.offset))
        }
      }
      dispatchMessage(uu, Ru) {
        var yu;
        const Eu = this.getMessageHandlerKey(uu);
        this.onMessageHandlers.events[Eu] ? this.onMessageHandlers.emit(Eu, Ru) : this.onMessageHandlers.events["*"] ? this.onMessageHandlers.emit("*", uu, Ru) : null === (yu = console.warn) || void 0 === yu || yu.call(console, `colyseus.js: onMessage() not registered for type '${uu}'.`)
      }
      destroy() {
        this.pW && this.pW.teardown()
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
    Ru.Mr = Bu
  },
  8903: (uu, Ru, yu) => {
    var Eu = yu(8832);
    let Ku;

    function Qu() {
      if (!Ku) try {
        Ku = "undefined" !== typeof cc && cc.sys && cc.sys.localStorage ? cc.sys.localStorage : window.localStorage
      } catch (uu) {}
      return Ku || "undefined" === typeof globalThis.indexedDB || (Ku = new mu), Ku || (Ku = {
        cache: {},
        setItem: function(uu, Ru) {
          this.cache[uu] = Ru
        },
        getItem: function(uu) {
          this.cache[uu]
        },
        removeItem: function(uu) {
          delete this.cache[uu]
        }
      }), Ku
    }
    class mu {
      constructor() {
        this.dbPromise = new Promise((uu => {
          const Ru = indexedDB.open("_colyseus_storage", 1);
          Ru.onupgradeneeded = () => Ru.result.createObjectStore("store"), Ru.onsuccess = () => uu(Ru.result)
        }))
      }
      tx(uu, Ru) {
        return Eu.__awaiter(this, void 0, void 0, (function*() {
          const yu = (yield this.dbPromise).transaction("store", uu).objectStore("store");
          return Ru(yu)
        }))
      }
      setItem(uu, Ru) {
        return this.tx("readwrite", (yu => yu.put(Ru, uu))).then()
      }
      getItem(uu) {
        return Eu.__awaiter(this, void 0, void 0, (function*() {
          const Ru = yield this.tx("readonly", (Ru => Ru.get(uu)));
          return new Promise((uu => {
            Ru.onsuccess = () => uu(Ru.result)
          }))
        }))
      }
      removeItem(uu) {
        return this.tx("readwrite", (Ru => Ru.delete(uu))).then()
      }
    }
    Ru.getItem = function(uu, Ru) {
      const yu = Qu().getItem(uu);
      "undefined" !== typeof Promise && yu instanceof Promise ? yu.then((uu => Ru(uu))) : Ru(yu)
    }, Ru.removeItem = function(uu) {
      Qu().removeItem(uu)
    }, Ru.setItem = function(uu, Ru) {
      Qu().setItem(uu, Ru)
    }
  },
  8874: (uu, Ru) => {
    Ru.createNanoEvents = () => ({
      emit(uu) {
        let Ru = this.events[uu] || [];
        for (var yu = arguments.length, Eu = new Array(yu > 1 ? yu - 1 : 0), Ku = 1; Ku < yu; Ku++) Eu[Ku - 1] = arguments[Ku];
        for (let Qu = 0, mu = Ru.length; Qu < mu; Qu++) Ru[Qu](...Eu)
      },
      events: {},
      on(uu, Ru) {
        var yu;
        return (null === (yu = this.events[uu]) || void 0 === yu ? void 0 : yu.push(Ru)) || (this.events[uu] = [Ru]), () => {
          var yu;
          this.events[uu] = null === (yu = this.events[uu]) || void 0 === yu ? void 0 : yu.filter((uu => Ru !== uu))
        }
      }
    })
  },
  8876: (uu, Ru) => {
    class yu {
      constructor() {
        this.handlers = []
      }
      register(uu) {
        return this.handlers.push(uu), this
      }
      invoke() {
        for (var uu = arguments.length, Ru = new Array(uu), yu = 0; yu < uu; yu++) Ru[yu] = arguments[yu];
        this.handlers.forEach((uu => uu.apply(this, Ru)))
      }
      invokeAsync() {
        for (var uu = arguments.length, Ru = new Array(uu), yu = 0; yu < uu; yu++) Ru[yu] = arguments[yu];
        return Promise.all(this.handlers.map((uu => uu.apply(this, Ru))))
      }
      remove(uu) {
        const Ru = this.handlers.indexOf(uu);
        this.handlers[Ru] = this.handlers[this.handlers.length - 1], this.handlers.pop()
      }
      clear() {
        this.handlers = []
      }
    }
    Ru.EventEmitter = yu, Ru.createSignal = function() {
      const uu = new yu;

      function Ru(Ru) {
        return uu.register(Ru, null === this)
      }
      return Ru.once = Ru => {
        const yu = function() {
          for (var Eu = arguments.length, Ku = new Array(Eu), Qu = 0; Qu < Eu; Qu++) Ku[Qu] = arguments[Qu];
          Ru.apply(this, Ku), uu.remove(yu)
        };
        uu.register(yu)
      }, Ru.remove = Ru => uu.remove(Ru), Ru.invoke = function() {
        return uu.invoke(...arguments)
      }, Ru.invokeAsync = function() {
        return uu.invokeAsync(...arguments)
      }, Ru.clear = () => uu.clear(), Ru
    }
  },
  8836: (uu, Ru) => {
    var yu;
    Ru.CloseCode = void 0, (yu = Ru.CloseCode || (Ru.CloseCode = {}))[yu.CONSENTED = 4e3] = "CONSENTED", yu[yu.DEVMODE_RESTART = 4010] = "DEVMODE_RESTART";
    class Eu extends Error {
      constructor(uu, Ru) {
        super(Ru), this.name = "ServerError", this.code = uu
      }
    }
    class Ku extends Error {
      constructor(uu) {
        super(uu), this.name = "AbortError"
      }
    }
    Ru.AbortError = Ku, Ru.ServerError = Eu
  },
  8811: (uu, Ru, yu) => {
    yu(8815);
    var Eu = yu(8824),
      Ku = yu(8864),
      Qu = yu(8839),
      mu = yu(8898),
      Ju = yu(8836),
      Nu = yu(8884),
      Xu = yu(8912),
      Vu = yu(8871);
    Vu.registerSerializer("schema", Nu.rD), Vu.registerSerializer("none", Xu.NoneSerializer), Ru.Client = Eu.Client, Ru.MatchMakeError = Eu.MatchMakeError, Object.defineProperty(Ru, "ErrorCode", {
      enumerable: !0,
      get: function() {
        return Ku.ErrorCode
      }
    }), Object.defineProperty(Ru, "Protocol", {
      enumerable: !0,
      get: function() {
        return Ku.Protocol
      }
    }), Ru.Mr = Qu.Mr, Ru.Auth = mu.Auth, Ru.ServerError = Ju.ServerError, Ru.rD = Nu.rD, Ru.getStateCallbacks = Nu.getStateCallbacks, Ru.registerSerializer = Vu.registerSerializer
  },
  8815: () => {
    ArrayBuffer.isView || (ArrayBuffer.isView = uu => null !== uu && "object" === typeof uu && uu.buffer instanceof ArrayBuffer), "undefined" === typeof globalThis && "undefined" !== typeof window && (window.globalThis = window), "undefined" === typeof FormData && (globalThis.FormData = class {})
  },
  8912: (uu, Ru) => {
    Ru.NoneSerializer = class {
      setState(uu) {}
      getState() {
        return null
      }
      patch(uu) {}
      teardown() {}
      handshake(uu) {}
    }
  },
  8884: (uu, Ru, yu) => {
    var Eu = yu(8851);
    Ru.rD = class {
      setState(uu, Ru) {
        this.Ox.decode(uu, Ru)
      }
      getState() {
        return this.state
      }
      patch(uu, Ru) {
        return this.Ox.decode(uu, Ru)
      }
      teardown() {
        this.Ox.root.clearRefs()
      }
      handshake(uu, Ru) {
        this.state ? (Eu.Reflection.decode(uu, Ru), this.Ox = new Eu.Decoder(this.state)) : (this.Ox = Eu.Reflection.decode(uu, Ru), this.state = this.Ox.state)
      }
    }, Ru.getStateCallbacks = function(uu) {
      try {
        return Eu.getDecoderStateCallbacks(uu.pW.Ox)
      } catch (Ru) {
        return
      }
    }
  },
  8871: (uu, Ru) => {
    const yu = {};
    Ru.getSerializer = function(uu) {
      const Ru = yu[uu];
      if (!Ru) throw new Error("missing serializer: " + uu);
      return Ru
    }, Ru.registerSerializer = function(uu, Ru) {
      yu[uu] = Ru
    }
  },
  8845: (uu, Ru, yu) => {
    var Eu = yu(8832),
      Ku = yu(8851);
    Ru.H3TransportTransport = class {
      constructor(uu) {
        this.events = uu, this.isOpen = !1, this.lengthPrefixBuffer = new Uint8Array(9)
      }
      connect(uu) {
        let Ru = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        const yu = Ru.fingerprint && {
          serverCertificateHashes: [{
            algorithm: "sha-256",
            value: new Uint8Array(Ru.fingerprint).buffer
          }]
        } || void 0;
        this.wt = new WebTransport(uu, yu), this.wt.ready.then((uu => {
          console.log("WebTransport ready!", uu), this.isOpen = !0, this.unreliableReader = this.wt.datagrams.readable.getReader(), this.unreliableWriter = this.wt.datagrams.writable.getWriter();
          this.wt.incomingBidirectionalStreams.getReader().read().then((uu => {
            this.reader = uu.value.readable.getReader(), this.writer = uu.value.writable.getWriter(), this.sendSeatReservation(Ru.room.roomId, Ru.sessionId, Ru.reconnectionToken), this.readIncomingData(), this.readIncomingUnreliableData()
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
        const Ru = Ku.encode.number(this.lengthPrefixBuffer, uu.length, {
            offset: 0
          }),
          yu = new Uint8Array(Ru + uu.length);
        yu.set(this.lengthPrefixBuffer.subarray(0, Ru), 0), yu.set(uu, Ru), this.writer.write(yu)
      }
      sendUnreliable(uu) {
        const Ru = Ku.encode.number(this.lengthPrefixBuffer, uu.length, {
            offset: 0
          }),
          yu = new Uint8Array(Ru + uu.length);
        yu.set(this.lengthPrefixBuffer.subarray(0, Ru), 0), yu.set(uu, Ru), this.unreliableWriter.write(yu)
      }
      close(uu, Ru) {
        try {
          this.wt.close({
            closeCode: uu,
            reason: Ru
          })
        } catch (yu) {
          console.error(yu)
        }
      }
      readIncomingData() {
        return Eu.__awaiter(this, void 0, void 0, (function*() {
          let uu;
          for (; this.isOpen;) {
            try {
              uu = yield this.reader.read();
              const Ru = uu.value,
                yu = {
                  offset: 0
                };
              do {
                const uu = Ku.decode.number(Ru, yu);
                this.events.onmessage({
                  data: Ru.subarray(yu.offset, yu.offset + uu)
                }), yu.offset += uu
              } while (yu.offset < Ru.length)
            } catch (Ru) {
              -1 === Ru.message.indexOf("session is closed") && console.error("H3Transport: failed to read incoming data", Ru);
              break
            }
            if (uu.done) break
          }
        }))
      }
      readIncomingUnreliableData() {
        return Eu.__awaiter(this, void 0, void 0, (function*() {
          let uu;
          for (; this.isOpen;) {
            try {
              uu = yield this.unreliableReader.read();
              const Ru = uu.value,
                yu = {
                  offset: 0
                };
              do {
                const uu = Ku.decode.number(Ru, yu);
                this.events.onmessage({
                  data: Ru.subarray(yu.offset, yu.offset + uu)
                }), yu.offset += uu
              } while (yu.offset < Ru.length)
            } catch (Ru) {
              -1 === Ru.message.indexOf("session is closed") && console.error("H3Transport: failed to read incoming data", Ru);
              break
            }
            if (uu.done) break
          }
        }))
      }
      sendSeatReservation(uu, Ru, yu) {
        const Eu = {
            offset: 0
          },
          Qu = [];
        Ku.encode.string(Qu, uu, Eu), Ku.encode.string(Qu, Ru, Eu), yu && Ku.encode.string(Qu, yu, Eu), this.writer.write(new Uint8Array(Qu).buffer)
      }
      _close() {
        this.isOpen = !1
      }
    }
  },
  8853: (uu, Ru, yu) => {
    var Eu = yu(8860);
    const Ku = globalThis.WebSocket || Eu;
    Ru.WebSocketTransport = class {
      constructor(uu) {
        this.events = uu
      }
      send(uu) {
        this.ws.send(uu)
      }
      sendUnreliable(uu) {
        console.warn("colyseus.js: The WebSocket transport does not support unreliable messages")
      }
      connect(uu, Ru) {
        try {
          this.ws = new Ku(uu, {
            headers: Ru,
            protocols: this.protocols
          })
        } catch (yu) {
          this.ws = new Ku(uu, this.protocols)
        }
        this.ws.binaryType = "arraybuffer", this.ws.onopen = this.events.onopen, this.ws.onmessage = this.events.onmessage, this.ws.onclose = this.events.onclose, this.ws.onerror = this.events.onerror
      }
      close(uu, Ru) {
        this.ws.close(uu, Ru)
      }
      get isOpen() {
        return this.ws.readyState === Ku.OPEN
      }
    }
  },
  8860: uu => {
    uu.exports = function() {
      throw new Error("ws does not work in the browser. Browser clients must use the native WebSocket object")
    }
  },
  8891: (uu, Ru, yu) => {
    function Eu(uu, Ru) {
      Ru.headers = uu.headers || {}, Ru.statusMessage = uu.statusText, Ru.statusCode = uu.status, Ru.data = uu.response
    }

    function Ku(uu, Ru, yu) {
      return new Promise((function(Ku, Qu) {
        yu = yu || {};
        var mu, Ju, Nu, Xu = new XMLHttpRequest,
          Vu = yu.body,
          ru = yu.headers || {};
        for (mu in yu.timeout && (Xu.timeout = yu.timeout), Xu.ontimeout = Xu.onerror = function(uu) {
            uu.timeout = "timeout" == uu.type, Qu(uu)
          }, Xu.onabort = function(uu) {
            uu.aborted = !0, Qu(uu)
          }, Xu.open(uu, Ru.href || Ru), Xu.onload = function() {
            for (Nu = Xu.getAllResponseHeaders().trim().split(/[\r\n]+/), Eu(Xu, Xu); Ju = Nu.shift();) Ju = Ju.split(": "), Xu.headers[Ju.shift().toLowerCase()] = Ju.join(": ");
            if ((Ju = Xu.headers["content-type"]) && ~Ju.indexOf("application/json")) try {
              Xu.data = JSON.parse(Xu.data, yu.reviver)
            } catch (uu) {
              return Eu(Xu, uu), Qu(uu)
            }(Xu.status >= 400 ? Qu : Ku)(Xu)
          }, typeof FormData < "u" && Vu instanceof FormData || Vu && "object" == typeof Vu && (ru["content-type"] = "application/json", Vu = JSON.stringify(Vu)), Xu.withCredentials = !!yu.withCredentials, ru) Xu.setRequestHeader(mu, ru[mu]);
        Xu.send(Vu), yu.signal && yu.signal.addEventListener("abort", (function() {
          Xu.abort()
        }))
      }))
    }
    yu.r(Ru), yu.d(Ru, {
      del: () => Nu,
      get: () => Qu,
      patch: () => Ju,
      post: () => mu,
      put: () => Xu,
      send: () => Ku
    });
    var Qu = Ku.bind(Ku, "GET"),
      mu = Ku.bind(Ku, "POST"),
      Ju = Ku.bind(Ku, "PATCH"),
      Nu = Ku.bind(Ku, "DELETE"),
      Xu = Ku.bind(Ku, "PUT")
  },
  8887: (uu, Ru, yu) => {
    var Eu, Ku, Qu;
    yu.r(Ru), yu.d(Ru, {
      ALWAYS: () => YR,
      C1: () => bu,
      DECIMAL_FIT: () => qR,
      DECIMAL_ROUND: () => oR,
      Decoder: () => NR,
      Encoder: () => PR,
      FLOAT32_OPTIONS: () => xR,
      NEVER: () => iR,
      Packr: () => tR,
      RESERVE_START_SPACE: () => aR,
      RESET_BUFFER_MODE: () => vR,
      REUSE_BUFFER_MODE: () => OR,
      Unpackr: () => Mu,
      addExtension: () => zR,
      clearSource: () => mR,
      decode: () => BR,
      decodeIter: () => fR,
      encode: () => hR,
      encodeIter: () => uy,
      isNativeAccelerationEnabled: () => Fu,
      mapsAsObjects: () => yy,
      pack: () => ZR,
      roundFloat32: () => HR,
      unpack: () => VR,
      unpackMultiple: () => rR,
      useRecords: () => Ry
    });
    try {
      Eu = new TextDecoder
    } catch (Ey) {}
    var mu = 0;
    const Ju = [];
    var Nu, Xu, Vu, ru, Bu, xu = Ju,
      Su = 0,
      pu = {},
      Tu = 0,
      Wu = 0,
      ju = [],
      Hu = {
        useRecords: !1,
        mapsAsObjects: !0
      };
    class du {}
    const bu = new du;
    bu.name = "MessagePack 0xC1";
    var Cu, ku, eu, Au = !1,
      Du = 2;
    try {
      new Function("")
    } catch (Ey) {
      Du = 1 / 0
    }
    class Mu {
      constructor(uu) {
        uu && (!1 === uu.useRecords && void 0 === uu.mapsAsObjects && (uu.mapsAsObjects = !0), uu.sequential && !1 !== uu.trusted && (uu.trusted = !0, uu.structures || 0 == uu.useRecords || (uu.structures = [], uu.maxSharedStructures || (uu.maxSharedStructures = 0))), uu.structures ? uu.structures.sharedLength = uu.structures.length : uu.getStructures && ((uu.structures = []).uninitialized = !0, uu.structures.sharedLength = 0), uu.int64AsNumber && (uu.int64AsType = "number")), Object.assign(this, uu)
      }
      unpack(uu, Ru) {
        if (Ku) return QR((() => (mR(), this ? this.unpack(uu, Ru) : Mu.prototype.unpack.call(Hu, uu, Ru))));
        uu.buffer || uu.constructor !== ArrayBuffer || (uu = "undefined" !== typeof Buffer ? Buffer.from(uu) : new Uint8Array(uu)), "object" === typeof Ru ? (Qu = Ru.end || uu.length, mu = Ru.start || 0) : (mu = 0, Qu = Ru > -1 ? Ru : uu.length), Su = 0, Wu = 0, Xu = null, xu = Ju, Vu = null, Ku = uu;
        try {
          Bu = uu.dataView || (uu.dataView = new DataView(uu.buffer, uu.byteOffset, uu.byteLength))
        } catch (Ey) {
          if (Ku = null, uu instanceof Uint8Array) throw Ey;
          throw new Error("Source must be a Uint8Array or Buffer but was a " + (uu && "object" == typeof uu ? uu.constructor.name : typeof uu))
        }
        if (this instanceof Mu) {
          if (pu = this, this.structures) return Nu = this.structures, Iu(Ru);
          (!Nu || Nu.length > 0) && (Nu = [])
        } else pu = Hu, (!Nu || Nu.length > 0) && (Nu = []);
        return Iu(Ru)
      }
      unpackMultiple(uu, Ru) {
        let yu, Eu = 0;
        try {
          Au = !0;
          let Ku = uu.length,
            Qu = this ? this.unpack(uu, Ku) : XR.unpack(uu, Ku);
          if (!Ru) {
            for (yu = [Qu]; mu < Ku;) Eu = mu, yu.push(Iu());
            return yu
          }
          if (!1 === Ru(Qu, Eu, mu)) return;
          for (; mu < Ku;)
            if (Eu = mu, !1 === Ru(Iu(), Eu, mu)) return
        } catch (Ey) {
          throw Ey.lastPosition = Eu, Ey.values = yu, Ey
        } finally {
          Au = !1, mR()
        }
      }
      _mergeStructures(uu, Ru) {
        ku && (uu = ku.call(this, uu)), uu = uu || [], Object.isFrozen(uu) && (uu = uu.map((uu => uu.slice(0))));
        for (let yu = 0, Eu = uu.length; yu < Eu; yu++) {
          let Ru = uu[yu];
          Ru && (Ru.isShared = !0, yu >= 32 && (Ru.highByte = yu - 32 >> 5))
        }
        uu.sharedLength = uu.length;
        for (let yu in Ru || [])
          if (yu >= 0) {
            let Eu = uu[yu],
              Ku = Ru[yu];
            Ku && (Eu && ((uu.restoreStructures || (uu.restoreStructures = []))[yu] = Eu), uu[yu] = Ku)
          } return this.structures = uu
      }
      decode(uu, Ru) {
        return this.unpack(uu, Ru)
      }
    }

    function Iu(uu) {
      try {
        if (!pu.trusted && !Au) {
          let uu = Nu.sharedLength || 0;
          uu < Nu.length && (Nu.length = uu)
        }
        let Ru;
        if (pu.randomAccessStructure && Ku[mu] < 64 && Ku[mu] >= 32 && Cu ? (Ru = Cu(Ku, mu, Qu, pu), Ku = null, uu && uu.lazy || !Ru || (Ru = Ru.toJSON()), mu = Qu) : Ru = Uu(), Vu && (mu = Vu.postBundlePosition, Vu = null), Au && (Nu.restoreStructures = null), mu == Qu) Nu && Nu.restoreStructures && Gu(), Nu = null, Ku = null, ru && (ru = null);
        else {
          if (mu > Qu) throw new Error("Unexpected end of MessagePack data");
          if (!Au) {
            let uu;
            try {
              uu = JSON.stringify(Ru, ((uu, Ru) => "bigint" === typeof Ru ? `${Ru}n` : Ru)).slice(0, 100)
            } catch (Ey) {
              uu = "(JSON view not available " + Ey + ")"
            }
            throw new Error("Data read, but end of buffer not reached " + uu)
          }
        }
        return Ru
      } catch (Ey) {
        throw Nu && Nu.restoreStructures && Gu(), mR(), (Ey instanceof RangeError || Ey.message.startsWith("Unexpected end of buffer") || mu > Qu) && (Ey.incomplete = !0), Ey
      }
    }

    function Gu() {
      for (let uu in Nu.restoreStructures) Nu[uu] = Nu.restoreStructures[uu];
      Nu.restoreStructures = null
    }

    function Uu() {
      let uu = Ku[mu++];
      if (uu < 160) {
        if (uu < 128) {
          if (uu < 64) return uu;
          {
            let Ru = Nu[63 & uu] || pu.getStructures && lu()[63 & uu];
            return Ru ? (Ru.read || (Ru.read = su(Ru, 63 & uu)), Ru.read()) : uu
          }
        }
        if (uu < 144) {
          if (uu -= 128, pu.mapsAsObjects) {
            let Ru = {};
            for (let yu = 0; yu < uu; yu++) {
              let uu = au();
              "__proto__" === uu && (uu = "__proto_"), Ru[uu] = Uu()
            }
            return Ru
          } {
            let Ru = new Map;
            for (let yu = 0; yu < uu; yu++) Ru.set(Uu(), Uu());
            return Ru
          }
        } {
          uu -= 144;
          let Ru = new Array(uu);
          for (let yu = 0; yu < uu; yu++) Ru[yu] = Uu();
          return pu.freezeData ? Object.freeze(Ru) : Ru
        }
      }
      if (uu < 192) {
        let Ru = uu - 160;
        if (Wu >= mu) return Xu.slice(mu - Tu, (mu += Ru) - Tu);
        if (0 == Wu && Qu < 140) {
          let uu = Ru < 16 ? Yu(Ru) : iu(Ru);
          if (null != uu) return uu
        }
        return gu(Ru)
      } {
        let Ru;
        switch (uu) {
          case 192:
            return null;
          case 193:
            return Vu ? (Ru = Uu(), Ru > 0 ? Vu[1].slice(Vu.position1, Vu.position1 += Ru) : Vu[0].slice(Vu.position0, Vu.position0 -= Ru)) : bu;
          case 194:
            return !1;
          case 195:
            return !0;
          case 196:
            if (Ru = Ku[mu++], void 0 === Ru) throw new Error("Unexpected end of buffer");
            return qu(Ru);
          case 197:
            return Ru = Bu.getUint16(mu), mu += 2, qu(Ru);
          case 198:
            return Ru = Bu.getUint32(mu), mu += 4, qu(Ru);
          case 199:
            return Ou(Ku[mu++]);
          case 200:
            return Ru = Bu.getUint16(mu), mu += 2, Ou(Ru);
          case 201:
            return Ru = Bu.getUint32(mu), mu += 4, Ou(Ru);
          case 202:
            if (Ru = Bu.getFloat32(mu), pu.useFloat32 > 2) {
              let uu = JR[(127 & Ku[mu]) << 1 | Ku[mu + 1] >> 7];
              return mu += 4, (uu * Ru + (Ru > 0 ? .5 : -.5) | 0) / uu
            }
            return mu += 4, Ru;
          case 203:
            return Ru = Bu.getFloat64(mu), mu += 8, Ru;
          case 204:
            return Ku[mu++];
          case 205:
            return Ru = Bu.getUint16(mu), mu += 2, Ru;
          case 206:
            return Ru = Bu.getUint32(mu), mu += 4, Ru;
          case 207:
            return "number" === pu.int64AsType ? (Ru = 4294967296 * Bu.getUint32(mu), Ru += Bu.getUint32(mu + 4)) : "string" === pu.int64AsType ? Ru = Bu.getBigUint64(mu).toString() : "auto" === pu.int64AsType ? (Ru = Bu.getBigUint64(mu), Ru <= BigInt(2) << BigInt(52) && (Ru = Number(Ru))) : Ru = Bu.getBigUint64(mu), mu += 8, Ru;
          case 208:
            return Bu.getInt8(mu++);
          case 209:
            return Ru = Bu.getInt16(mu), mu += 2, Ru;
          case 210:
            return Ru = Bu.getInt32(mu), mu += 4, Ru;
          case 211:
            return "number" === pu.int64AsType ? (Ru = 4294967296 * Bu.getInt32(mu), Ru += Bu.getUint32(mu + 4)) : "string" === pu.int64AsType ? Ru = Bu.getBigInt64(mu).toString() : "auto" === pu.int64AsType ? (Ru = Bu.getBigInt64(mu), Ru >= BigInt(-2) << BigInt(52) && Ru <= BigInt(2) << BigInt(52) && (Ru = Number(Ru))) : Ru = Bu.getBigInt64(mu), mu += 8, Ru;
          case 212:
            if (Ru = Ku[mu++], 114 == Ru) return uR(63 & Ku[mu++]);
            {
              let uu = ju[Ru];
              if (uu) return uu.read ? (mu++, uu.read(Uu())) : uu.noBuffer ? (mu++, uu()) : uu(Ku.subarray(mu, ++mu));
              throw new Error("Unknown extension " + Ru)
            }
          case 213:
            return Ru = Ku[mu], 114 == Ru ? (mu++, uR(63 & Ku[mu++], Ku[mu++])) : Ou(2);
          case 214:
            return Ou(4);
          case 215:
            return Ou(8);
          case 216:
            return Ou(16);
          case 217:
            return Ru = Ku[mu++], Wu >= mu ? Xu.slice(mu - Tu, (mu += Ru) - Tu) : cu(Ru);
          case 218:
            return Ru = Bu.getUint16(mu), Wu >= (mu += 2) ? Xu.slice(mu - Tu, (mu += Ru) - Tu) : Lu(Ru);
          case 219:
            return Ru = Bu.getUint32(mu), Wu >= (mu += 4) ? Xu.slice(mu - Tu, (mu += Ru) - Tu) : zu(Ru);
          case 220:
            return Ru = Bu.getUint16(mu), mu += 2, Zu(Ru);
          case 221:
            return Ru = Bu.getUint32(mu), mu += 4, Zu(Ru);
          case 222:
            return Ru = Bu.getUint16(mu), mu += 2, hu(Ru);
          case 223:
            return Ru = Bu.getUint32(mu), mu += 4, hu(Ru);
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
    const nu = /^[a-zA-Z_$][a-zA-Z\d_$]*$/;

    function su(uu, Ru) {
      function yu() {
        if (yu.count++ > Du) {
          let yu = uu.read = new Function("r", "return function(){return " + (pu.freezeData ? "Object.freeze" : "") + "({" + uu.map((uu => "__proto__" === uu ? "__proto_:r()" : nu.test(uu) ? uu + ":r()" : "[" + JSON.stringify(uu) + "]:r()")).join(",") + "})}")(Uu);
          return 0 === uu.highByte && (uu.read = tu(Ru, uu.read)), yu()
        }
        let Eu = {};
        for (let Ru = 0, yu = uu.length; Ru < yu; Ru++) {
          let yu = uu[Ru];
          "__proto__" === yu && (yu = "__proto_"), Eu[yu] = Uu()
        }
        return pu.freezeData ? Object.freeze(Eu) : Eu
      }
      return yu.count = 0, 0 === uu.highByte ? tu(Ru, yu) : yu
    }
    const tu = (uu, Ru) => function() {
      let yu = Ku[mu++];
      if (0 === yu) return Ru();
      let Eu = uu < 32 ? -(uu + (yu << 5)) : uu + (yu << 5),
        Qu = Nu[Eu] || lu()[Eu];
      if (!Qu) throw new Error("Record id is not defined for " + Eu);
      return Qu.read || (Qu.read = su(Qu, uu)), Qu.read()
    };

    function lu() {
      let uu = QR((() => (Ku = null, pu.getStructures())));
      return Nu = pu._mergeStructures(uu, Nu)
    }
    var gu = wu,
      cu = wu,
      Lu = wu,
      zu = wu;
    let Fu = !1;

    function wu(uu) {
      let Ru;
      if (uu < 16 && (Ru = Yu(uu))) return Ru;
      if (uu > 64 && Eu) return Eu.decode(Ku.subarray(mu, mu += uu));
      const yu = mu + uu,
        Qu = [];
      for (Ru = ""; mu < yu;) {
        const uu = Ku[mu++];
        if (0 === (128 & uu)) Qu.push(uu);
        else if (192 === (224 & uu)) {
          const Ru = 63 & Ku[mu++];
          Qu.push((31 & uu) << 6 | Ru)
        } else if (224 === (240 & uu)) {
          const Ru = 63 & Ku[mu++],
            yu = 63 & Ku[mu++];
          Qu.push((31 & uu) << 12 | Ru << 6 | yu)
        } else if (240 === (248 & uu)) {
          let Ru = (7 & uu) << 18 | (63 & Ku[mu++]) << 12 | (63 & Ku[mu++]) << 6 | 63 & Ku[mu++];
          Ru > 65535 && (Ru -= 65536, Qu.push(Ru >>> 10 & 1023 | 55296), Ru = 56320 | 1023 & Ru), Qu.push(Ru)
        } else Qu.push(uu);
        Qu.length >= 4096 && (Ru += Pu.apply(String, Qu), Qu.length = 0)
      }
      return Qu.length > 0 && (Ru += Pu.apply(String, Qu)), Ru
    }

    function Zu(uu) {
      let Ru = new Array(uu);
      for (let yu = 0; yu < uu; yu++) Ru[yu] = Uu();
      return pu.freezeData ? Object.freeze(Ru) : Ru
    }

    function hu(uu) {
      if (pu.mapsAsObjects) {
        let Ru = {};
        for (let yu = 0; yu < uu; yu++) {
          let uu = au();
          "__proto__" === uu && (uu = "__proto_"), Ru[uu] = Uu()
        }
        return Ru
      } {
        let Ru = new Map;
        for (let yu = 0; yu < uu; yu++) Ru.set(Uu(), Uu());
        return Ru
      }
    }
    var Pu = String.fromCharCode;

    function iu(uu) {
      let Ru = mu,
        yu = new Array(uu);
      for (let Eu = 0; Eu < uu; Eu++) {
        const uu = Ku[mu++];
        if ((128 & uu) > 0) return void(mu = Ru);
        yu[Eu] = uu
      }
      return Pu.apply(String, yu)
    }

    function Yu(uu) {
      if (uu < 4) {
        if (uu < 2) {
          if (0 === uu) return "";
          {
            let uu = Ku[mu++];
            return (128 & uu) > 1 ? void(mu -= 1) : Pu(uu)
          }
        } {
          let Ru = Ku[mu++],
            yu = Ku[mu++];
          if ((128 & Ru) > 0 || (128 & yu) > 0) return void(mu -= 2);
          if (uu < 3) return Pu(Ru, yu);
          let Eu = Ku[mu++];
          return (128 & Eu) > 0 ? void(mu -= 3) : Pu(Ru, yu, Eu)
        }
      } {
        let Ru = Ku[mu++],
          yu = Ku[mu++],
          Eu = Ku[mu++],
          Qu = Ku[mu++];
        if ((128 & Ru) > 0 || (128 & yu) > 0 || (128 & Eu) > 0 || (128 & Qu) > 0) return void(mu -= 4);
        if (uu < 6) {
          if (4 === uu) return Pu(Ru, yu, Eu, Qu);
          {
            let uu = Ku[mu++];
            return (128 & uu) > 0 ? void(mu -= 5) : Pu(Ru, yu, Eu, Qu, uu)
          }
        }
        if (uu < 8) {
          let Ju = Ku[mu++],
            Nu = Ku[mu++];
          if ((128 & Ju) > 0 || (128 & Nu) > 0) return void(mu -= 6);
          if (uu < 7) return Pu(Ru, yu, Eu, Qu, Ju, Nu);
          let Xu = Ku[mu++];
          return (128 & Xu) > 0 ? void(mu -= 7) : Pu(Ru, yu, Eu, Qu, Ju, Nu, Xu)
        } {
          let Ju = Ku[mu++],
            Nu = Ku[mu++],
            Xu = Ku[mu++],
            Vu = Ku[mu++];
          if ((128 & Ju) > 0 || (128 & Nu) > 0 || (128 & Xu) > 0 || (128 & Vu) > 0) return void(mu -= 8);
          if (uu < 10) {
            if (8 === uu) return Pu(Ru, yu, Eu, Qu, Ju, Nu, Xu, Vu);
            {
              let uu = Ku[mu++];
              return (128 & uu) > 0 ? void(mu -= 9) : Pu(Ru, yu, Eu, Qu, Ju, Nu, Xu, Vu, uu)
            }
          }
          if (uu < 12) {
            let ru = Ku[mu++],
              Bu = Ku[mu++];
            if ((128 & ru) > 0 || (128 & Bu) > 0) return void(mu -= 10);
            if (uu < 11) return Pu(Ru, yu, Eu, Qu, Ju, Nu, Xu, Vu, ru, Bu);
            let xu = Ku[mu++];
            return (128 & xu) > 0 ? void(mu -= 11) : Pu(Ru, yu, Eu, Qu, Ju, Nu, Xu, Vu, ru, Bu, xu)
          } {
            let ru = Ku[mu++],
              Bu = Ku[mu++],
              xu = Ku[mu++],
              Su = Ku[mu++];
            if ((128 & ru) > 0 || (128 & Bu) > 0 || (128 & xu) > 0 || (128 & Su) > 0) return void(mu -= 12);
            if (uu < 14) {
              if (12 === uu) return Pu(Ru, yu, Eu, Qu, Ju, Nu, Xu, Vu, ru, Bu, xu, Su);
              {
                let uu = Ku[mu++];
                return (128 & uu) > 0 ? void(mu -= 13) : Pu(Ru, yu, Eu, Qu, Ju, Nu, Xu, Vu, ru, Bu, xu, Su, uu)
              }
            } {
              let pu = Ku[mu++],
                Tu = Ku[mu++];
              if ((128 & pu) > 0 || (128 & Tu) > 0) return void(mu -= 14);
              if (uu < 15) return Pu(Ru, yu, Eu, Qu, Ju, Nu, Xu, Vu, ru, Bu, xu, Su, pu, Tu);
              let Wu = Ku[mu++];
              return (128 & Wu) > 0 ? void(mu -= 15) : Pu(Ru, yu, Eu, Qu, Ju, Nu, Xu, Vu, ru, Bu, xu, Su, pu, Tu, Wu)
            }
          }
        }
      }
    }

    function ou() {
      let uu, Ru = Ku[mu++];
      if (Ru < 192) uu = Ru - 160;
      else switch (Ru) {
        case 217:
          uu = Ku[mu++];
          break;
        case 218:
          uu = Bu.getUint16(mu), mu += 2;
          break;
        case 219:
          uu = Bu.getUint32(mu), mu += 4;
          break;
        default:
          throw new Error("Expected string")
      }
      return wu(uu)
    }

    function qu(uu) {
      return pu.copyBuffers ? Uint8Array.prototype.slice.call(Ku, mu, mu += uu) : Ku.subarray(mu, mu += uu)
    }

    function Ou(uu) {
      let Ru = Ku[mu++];
      if (ju[Ru]) {
        let yu;
        return ju[Ru](Ku.subarray(mu, yu = mu += uu), (uu => {
          mu = uu;
          try {
            return Uu()
          } finally {
            mu = yu
          }
        }))
      }
      throw new Error("Unknown extension type " + Ru)
    }
    var vu = new Array(4096);

    function au() {
      let uu = Ku[mu++];
      if (!(uu >= 160 && uu < 192)) return mu--, fu(Uu());
      if (uu -= 160, Wu >= mu) return Xu.slice(mu - Tu, (mu += uu) - Tu);
      if (!(0 == Wu && Qu < 180)) return gu(uu);
      let Ru, yu = 4095 & (uu << 5 ^ (uu > 1 ? Bu.getUint16(mu) : uu > 0 ? Ku[mu] : 0)),
        Eu = vu[yu],
        Ju = mu,
        Nu = mu + uu - 3,
        Vu = 0;
      if (Eu && Eu.bytes == uu) {
        for (; Ju < Nu;) {
          if (Ru = Bu.getUint32(Ju), Ru != Eu[Vu++]) {
            Ju = 1879048192;
            break
          }
          Ju += 4
        }
        for (Nu += 3; Ju < Nu;)
          if (Ru = Ku[Ju++], Ru != Eu[Vu++]) {
            Ju = 1879048192;
            break
          } if (Ju === Nu) return mu = Ju, Eu.string;
        Nu -= 3, Ju = mu
      }
      for (Eu = [], vu[yu] = Eu, Eu.bytes = uu; Ju < Nu;) Ru = Bu.getUint32(Ju), Eu.push(Ru), Ju += 4;
      for (Nu += 3; Ju < Nu;) Ru = Ku[Ju++], Eu.push(Ru);
      let ru = uu < 16 ? Yu(uu) : iu(uu);
      return Eu.string = null != ru ? ru : gu(uu)
    }

    function fu(uu) {
      if ("string" === typeof uu) return uu;
      if ("number" === typeof uu || "boolean" === typeof uu || "bigint" === typeof uu) return uu.toString();
      if (null == uu) return uu + "";
      if (pu.allowArraysInMapKeys && Array.isArray(uu) && uu.flat().every((uu => ["string", "number", "boolean", "bigint"].includes(typeof uu)))) return uu.flat().toString();
      throw new Error("Invalid property type for record: " + typeof uu)
    }
    const uR = (uu, Ru) => {
      let yu = Uu().map(fu),
        Eu = uu;
      void 0 !== Ru && (uu = uu < 32 ? -((Ru << 5) + uu) : (Ru << 5) + uu, yu.highByte = Ru);
      let Ku = Nu[uu];
      return Ku && (Ku.isShared || Au) && ((Nu.restoreStructures || (Nu.restoreStructures = []))[uu] = Ku), Nu[uu] = yu, yu.read = su(yu, Eu), yu.read()
    };
    ju[0] = () => {}, ju[0].noBuffer = !0, ju[66] = uu => {
      let Ru = uu.length,
        yu = BigInt(128 & uu[0] ? uu[0] - 256 : uu[0]);
      for (let Eu = 1; Eu < Ru; Eu++) yu <<= BigInt(8), yu += BigInt(uu[Eu]);
      return yu
    };
    let RR = {
      Error: Error,
      TypeError: TypeError,
      ReferenceError: ReferenceError
    };
    ju[101] = () => {
      let uu = Uu();
      return (RR[uu[0]] || Error)(uu[1], {
        cause: uu[2]
      })
    }, ju[105] = uu => {
      if (!1 === pu.structuredClone) throw new Error("Structured clone extension is disabled");
      let Ru = Bu.getUint32(mu - 4);
      ru || (ru = new Map);
      let yu, Eu = Ku[mu];
      yu = Eu >= 144 && Eu < 160 || 220 == Eu || 221 == Eu ? [] : {};
      let Qu = {
        target: yu
      };
      ru.set(Ru, Qu);
      let Ju = Uu();
      return Qu.used ? Object.assign(yu, Ju) : (Qu.target = Ju, Ju)
    }, ju[112] = uu => {
      if (!1 === pu.structuredClone) throw new Error("Structured clone extension is disabled");
      let Ru = Bu.getUint32(mu - 4),
        yu = ru.get(Ru);
      return yu.used = !0, yu.target
    }, ju[115] = () => new Set(Uu());
    const yR = ["Int8", "Uint8", "Uint8Clamped", "Int16", "Uint16", "Int32", "Uint32", "Float32", "Float64", "BigInt64", "BigUint64"].map((uu => uu + "Array"));
    let ER = "object" === typeof globalThis ? globalThis : window;
    ju[116] = uu => {
      let Ru = uu[0],
        yu = yR[Ru];
      if (!yu) {
        if (16 === Ru) {
          let Ru = new ArrayBuffer(uu.length - 1);
          return new Uint8Array(Ru).set(uu.subarray(1)), Ru
        }
        throw new Error("Could not find typed array for code " + Ru)
      }
      return new ER[yu](Uint8Array.prototype.slice.call(uu, 1).buffer)
    }, ju[120] = () => {
      let uu = Uu();
      return new RegExp(uu[0], uu[1])
    };
    const KR = [];

    function QR(uu) {
      eu && eu();
      let Ru = Qu,
        yu = mu,
        Eu = Su,
        Ju = Tu,
        ju = Wu,
        Hu = Xu,
        du = xu,
        bu = ru,
        Cu = Vu,
        ku = new Uint8Array(Ku.slice(0, Qu)),
        Du = Nu,
        Mu = Nu.slice(0, Nu.length),
        Iu = pu,
        Gu = Au,
        Uu = uu();
      return Qu = Ru, mu = yu, Su = Eu, Tu = Ju, Wu = ju, Xu = Hu, xu = du, ru = bu, Vu = Cu, Ku = ku, Au = Gu, (Nu = Du).splice(0, Nu.length, ...Mu), pu = Iu, Bu = new DataView(Ku.buffer, Ku.byteOffset, Ku.byteLength), Uu
    }

    function mR() {
      Ku = null, ru = null, Nu = null
    }
    ju[98] = uu => {
      let Ru = (uu[0] << 24) + (uu[1] << 16) + (uu[2] << 8) + uu[3],
        yu = mu;
      return mu += Ru - uu.length, Vu = KR, (Vu = [ou(), ou()]).position0 = 0, Vu.position1 = 0, Vu.postBundlePosition = mu, mu = yu, Uu()
    }, ju[255] = uu => 4 == uu.length ? new Date(1e3 * (16777216 * uu[0] + (uu[1] << 16) + (uu[2] << 8) + uu[3])) : 8 == uu.length ? new Date(((uu[0] << 22) + (uu[1] << 14) + (uu[2] << 6) + (uu[3] >> 2)) / 1e6 + 1e3 * (4294967296 * (3 & uu[3]) + 16777216 * uu[4] + (uu[5] << 16) + (uu[6] << 8) + uu[7])) : 12 == uu.length ? new Date(((uu[0] << 24) + (uu[1] << 16) + (uu[2] << 8) + uu[3]) / 1e6 + 1e3 * ((128 & uu[4] ? -281474976710656 : 0) + 1099511627776 * uu[6] + 4294967296 * uu[7] + 16777216 * uu[8] + (uu[9] << 16) + (uu[10] << 8) + uu[11])) : new Date("invalid");
    const JR = new Array(147);
    for (let Ky = 0; Ky < 256; Ky++) JR[Ky] = +("1e" + Math.floor(45.15 - .30103 * Ky));
    const NR = Mu;
    var XR = new Mu({
      useRecords: !1
    });
    const VR = XR.unpack,
      rR = XR.unpackMultiple,
      BR = XR.unpack,
      xR = {
        NEVER: 0,
        ALWAYS: 1,
        DECIMAL_ROUND: 3,
        DECIMAL_FIT: 4
      };
    let SR, pR, TR, WR = new Float32Array(1),
      jR = new Uint8Array(WR.buffer, 0, 4);

    function HR(uu) {
      WR[0] = uu;
      let Ru = JR[(127 & jR[3]) << 1 | jR[2] >> 7];
      return (Ru * uu + (uu > 0 ? .5 : -.5) | 0) / Ru
    }
    try {
      SR = new TextEncoder
    } catch (Ey) {}
    const dR = "undefined" !== typeof Buffer,
      bR = dR ? function(uu) {
        return Buffer.allocUnsafeSlow(uu)
      } : Uint8Array,
      CR = dR ? Buffer : Uint8Array,
      kR = dR ? 4294967296 : 2144337920;
    let eR, AR, DR, MR, IR, GR = 0,
      UR = null;
    const nR = /[\u0080-\uFFFF]/,
      sR = Symbol("record-id");
    class tR extends Mu {
      constructor(uu) {
        let Ru, yu, Eu, Ku;
        super(uu), this.offset = 0;
        let Qu = CR.prototype.utf8Write ? function(uu, Ru) {
            return eR.utf8Write(uu, Ru, eR.byteLength - Ru)
          } : !(!SR || !SR.encodeInto) && function(uu, Ru) {
            return SR.encodeInto(uu, eR.subarray(Ru)).written
          },
          mu = this;
        uu || (uu = {});
        let Ju = uu && uu.sequential,
          Nu = uu.structures || uu.saveStructures,
          Xu = uu.maxSharedStructures;
        if (null == Xu && (Xu = Nu ? 32 : 0), Xu > 8160) throw new Error("Maximum maxSharedStructure is 8160");
        uu.structuredClone && void 0 == uu.moreTypes && (this.moreTypes = !0);
        let Vu = uu.maxOwnStructures;
        null == Vu && (Vu = Nu ? 32 : 64), this.structures || 0 == uu.useRecords || (this.structures = []);
        let ru = Xu > 32 || Vu + Xu > 64,
          Bu = Xu + 64,
          xu = Xu + Vu + 64;
        if (xu > 8256) throw new Error("Maximum maxSharedStructure + maxOwnStructure is 8192");
        let Su = [],
          pu = 0,
          Tu = 0;
        this.pack = this.encode = function(uu, Qu) {
          if (eR || (eR = new bR(8192), DR = eR.dataView || (eR.dataView = new DataView(eR.buffer, 0, 8192)), GR = 0), MR = eR.length - 10, MR - GR < 2048 ? (eR = new bR(eR.length), DR = eR.dataView || (eR.dataView = new DataView(eR.buffer, 0, eR.length)), MR = eR.length - 10, GR = 0) : GR = GR + 7 & 2147483640, Ru = GR, Qu & aR && (GR += 255 & Qu), Ku = mu.structuredClone ? new Map : null, mu.bundleStrings && "string" !== typeof uu ? (UR = [], UR.size = 1 / 0) : UR = null, Eu = mu.structures, Eu) {
            Eu.uninitialized && (Eu = mu._mergeStructures(mu.getStructures()));
            let uu = Eu.sharedLength || 0;
            if (uu > Xu) throw new Error("Shared structures is larger than maximum shared structures, try increasing maxSharedStructures to " + Eu.sharedLength);
            if (!Eu.transitions) {
              Eu.transitions = Object.create(null);
              for (let Ru = 0; Ru < uu; Ru++) {
                let uu = Eu[Ru];
                if (!uu) continue;
                let yu, Ku = Eu.transitions;
                for (let Ru = 0, Eu = uu.length; Ru < Eu; Ru++) {
                  let Eu = uu[Ru];
                  yu = Ku[Eu], yu || (yu = Ku[Eu] = Object.create(null)), Ku = yu
                }
                Ku[sR] = Ru + 64
              }
              this.lastNamedStructuresLength = uu
            }
            Ju || (Eu.nextId = uu + 64)
          }
          let Nu;
          yu && (yu = !1);
          try {
            mu.randomAccessStructure && uu && uu.constructor && uu.constructor === Object ? Mu(uu) : Hu(uu);
            let yu = UR;
            if (UR && LR(Ru, Hu, 0), Ku && Ku.idsToInsert) {
              let uu = Ku.idsToInsert.sort(((uu, Ru) => uu.offset > Ru.offset ? 1 : -1)),
                Eu = uu.length,
                Qu = -1;
              for (; yu && Eu > 0;) {
                let Ku = uu[--Eu].offset + Ru;
                Ku < yu.stringsPosition + Ru && -1 === Qu && (Qu = 0), Ku > yu.position + Ru ? Qu >= 0 && (Qu += 6) : (Qu >= 0 && (DR.setUint32(yu.position + Ru, DR.getUint32(yu.position + Ru) + Qu), Qu = -1), yu = yu.previous, Eu++)
              }
              Qu >= 0 && yu && DR.setUint32(yu.position + Ru, DR.getUint32(yu.position + Ru) + Qu), GR += 6 * uu.length, GR > MR && eu(GR), mu.offset = GR;
              let Ju = function(uu, Ru) {
                let yu, Eu = 6 * Ru.length,
                  Ku = uu.length - Eu;
                for (; yu = Ru.pop();) {
                  let Ru = yu.offset,
                    Qu = yu.id;
                  uu.copyWithin(Ru + Eu, Ru, Ku), Eu -= 6;
                  let mu = Ru + Eu;
                  uu[mu++] = 214, uu[mu++] = 105, uu[mu++] = Qu >> 24, uu[mu++] = Qu >> 16 & 255, uu[mu++] = Qu >> 8 & 255, uu[mu++] = 255 & Qu, Ku = Ru
                }
                return uu
              }(eR.subarray(Ru, GR), uu);
              return Ku = null, Ju
            }
            return mu.offset = GR, Qu & OR ? (eR.start = Ru, eR.end = GR, eR) : eR.subarray(Ru, GR)
          } catch (Ey) {
            throw Nu = Ey, Ey
          } finally {
            if (Eu && (Wu(), yu && mu.saveStructures)) {
              let yu = Eu.sharedLength || 0,
                Ku = eR.subarray(Ru, GR),
                Ju = FR(Eu, mu);
              if (!Nu) return !1 === mu.saveStructures(Ju, Ju.isCompatible) ? mu.pack(uu, Qu) : (mu.lastNamedStructuresLength = yu, eR.length > 1073741824 && (eR = null), Ku)
            }
            eR.length > 1073741824 && (eR = null), Qu & vR && (GR = Ru)
          }
        };
        const Wu = () => {
            Tu < 10 && Tu++;
            let uu = Eu.sharedLength || 0;
            if (Eu.length > uu && !Ju && (Eu.length = uu), pu > 1e4) Eu.transitions = null, Tu = 0, pu = 0, Su.length > 0 && (Su = []);
            else if (Su.length > 0 && !Ju) {
              for (let uu = 0, Ru = Su.length; uu < Ru; uu++) Su[uu][sR] = 0;
              Su = []
            }
          },
          ju = uu => {
            var Ru = uu.length;
            Ru < 16 ? eR[GR++] = 144 | Ru : Ru < 65536 ? (eR[GR++] = 220, eR[GR++] = Ru >> 8, eR[GR++] = 255 & Ru) : (eR[GR++] = 221, DR.setUint32(GR, Ru), GR += 4);
            for (let yu = 0; yu < Ru; yu++) Hu(uu[yu])
          },
          Hu = uu => {
            GR > MR && (eR = eu(GR));
            var yu, Eu = typeof uu;
            if ("string" === Eu) {
              let Eu, Ku = uu.length;
              if (UR && Ku >= 4 && Ku < 4096) {
                if ((UR.size += Ku) > 21760) {
                  let uu, yu, Eu = (UR[0] ? 3 * UR[0].length + UR[1].length : 0) + 10;
                  GR + Eu > MR && (eR = eu(GR + Eu)), UR.position ? (yu = UR, eR[GR] = 200, GR += 3, eR[GR++] = 98, uu = GR - Ru, GR += 4, LR(Ru, Hu, 0), DR.setUint16(uu + Ru - 3, GR - Ru - uu)) : (eR[GR++] = 214, eR[GR++] = 98, uu = GR - Ru, GR += 4), UR = ["", ""], UR.previous = yu, UR.size = 0, UR.position = uu
                }
                let yu = nR.test(uu);
                return UR[yu ? 0 : 1] += uu, eR[GR++] = 193, void Hu(yu ? -Ku : Ku)
              }
              Eu = Ku < 32 ? 1 : Ku < 256 ? 2 : Ku < 65536 ? 3 : 5;
              let mu = 3 * Ku;
              if (GR + mu > MR && (eR = eu(GR + mu)), Ku < 64 || !Qu) {
                let Ru, Qu, mu, Ju = GR + Eu;
                for (Ru = 0; Ru < Ku; Ru++) Qu = uu.charCodeAt(Ru), Qu < 128 ? eR[Ju++] = Qu : Qu < 2048 ? (eR[Ju++] = Qu >> 6 | 192, eR[Ju++] = 63 & Qu | 128) : 55296 === (64512 & Qu) && 56320 === (64512 & (mu = uu.charCodeAt(Ru + 1))) ? (Qu = 65536 + ((1023 & Qu) << 10) + (1023 & mu), Ru++, eR[Ju++] = Qu >> 18 | 240, eR[Ju++] = Qu >> 12 & 63 | 128, eR[Ju++] = Qu >> 6 & 63 | 128, eR[Ju++] = 63 & Qu | 128) : (eR[Ju++] = Qu >> 12 | 224, eR[Ju++] = Qu >> 6 & 63 | 128, eR[Ju++] = 63 & Qu | 128);
                yu = Ju - GR - Eu
              } else yu = Qu(uu, GR + Eu);
              yu < 32 ? eR[GR++] = 160 | yu : yu < 256 ? (Eu < 2 && eR.copyWithin(GR + 2, GR + 1, GR + 1 + yu), eR[GR++] = 217, eR[GR++] = yu) : yu < 65536 ? (Eu < 3 && eR.copyWithin(GR + 3, GR + 2, GR + 2 + yu), eR[GR++] = 218, eR[GR++] = yu >> 8, eR[GR++] = 255 & yu) : (Eu < 5 && eR.copyWithin(GR + 5, GR + 3, GR + 3 + yu), eR[GR++] = 219, DR.setUint32(GR, yu), GR += 4), GR += yu
            } else if ("number" === Eu)
              if (uu >>> 0 === uu) uu < 32 || uu < 128 && !1 === this.useRecords || uu < 64 && !this.randomAccessStructure ? eR[GR++] = uu : uu < 256 ? (eR[GR++] = 204, eR[GR++] = uu) : uu < 65536 ? (eR[GR++] = 205, eR[GR++] = uu >> 8, eR[GR++] = 255 & uu) : (eR[GR++] = 206, DR.setUint32(GR, uu), GR += 4);
              else if ((uu | 0) === uu) uu >= -32 ? eR[GR++] = 256 + uu : uu >= -128 ? (eR[GR++] = 208, eR[GR++] = uu + 256) : uu >= -32768 ? (eR[GR++] = 209, DR.setInt16(GR, uu), GR += 2) : (eR[GR++] = 210, DR.setInt32(GR, uu), GR += 4);
            else {
              let Ru;
              if ((Ru = this.useFloat32) > 0 && uu < 4294967296 && uu >= -2147483648) {
                let yu;
                if (eR[GR++] = 202, DR.setFloat32(GR, uu), Ru < 4 || ((yu = uu * JR[(127 & eR[GR]) << 1 | eR[GR + 1] >> 7]) | 0) === yu) return void(GR += 4);
                GR--
              }
              eR[GR++] = 203, DR.setFloat64(GR, uu), GR += 8
            } else if ("object" === Eu || "function" === Eu)
              if (uu) {
                if (Ku) {
                  let yu = Ku.get(uu);
                  if (yu) {
                    if (!yu.id) {
                      let uu = Ku.idsToInsert || (Ku.idsToInsert = []);
                      yu.id = uu.push(yu)
                    }
                    return eR[GR++] = 214, eR[GR++] = 112, DR.setUint32(GR, yu.id), void(GR += 4)
                  }
                  Ku.set(uu, {
                    offset: GR - Ru
                  })
                }
                let Qu = uu.constructor;
                if (Qu === Object) ku(uu);
                else if (Qu === Array) ju(uu);
                else if (Qu === Map)
                  if (this.mapAsEmptyObject) eR[GR++] = 128;
                  else {
                    (yu = uu.size) < 16 ? eR[GR++] = 128 | yu : yu < 65536 ? (eR[GR++] = 222, eR[GR++] = yu >> 8, eR[GR++] = 255 & yu) : (eR[GR++] = 223, DR.setUint32(GR, yu), GR += 4);
                    for (let [Ru, yu] of uu) Hu(Ru), Hu(yu)
                  }
                else {
                  for (let Ru = 0, yu = pR.length; Ru < yu; Ru++) {
                    if (uu instanceof TR[Ru]) {
                      let yu = pR[Ru];
                      if (yu.write) {
                        yu.type && (eR[GR++] = 212, eR[GR++] = yu.type, eR[GR++] = 0);
                        let Ru = yu.write.call(this, uu);
                        return void(Ru === uu ? Array.isArray(uu) ? ju(uu) : ku(uu) : Hu(Ru))
                      }
                      let Eu, Ku = eR,
                        Qu = DR,
                        mu = GR;
                      eR = null;
                      try {
                        Eu = yu.pack.call(this, uu, (uu => (eR = Ku, Ku = null, GR += uu, GR > MR && eu(GR), {
                          target: eR,
                          targetView: DR,
                          position: GR - uu
                        })), Hu)
                      } finally {
                        Ku && (eR = Ku, DR = Qu, GR = mu, MR = eR.length - 10)
                      }
                      return void(Eu && (Eu.length + GR > MR && eu(Eu.length + GR), GR = cR(Eu, eR, GR, yu.type)))
                    }
                  }
                  if (Array.isArray(uu)) ju(uu);
                  else {
                    if (uu.toJSON) {
                      const Ru = uu.toJSON();
                      if (Ru !== uu) return Hu(Ru)
                    }
                    if ("function" === Eu) return Hu(this.writeFunction && this.writeFunction(uu));
                    ku(uu)
                  }
                }
              } else eR[GR++] = 192;
            else if ("boolean" === Eu) eR[GR++] = uu ? 195 : 194;
            else if ("bigint" === Eu) {
              if (uu < BigInt(1) << BigInt(63) && uu >= -(BigInt(1) << BigInt(63))) eR[GR++] = 211, DR.setBigInt64(GR, uu);
              else if (uu < BigInt(1) << BigInt(64) && uu > 0) eR[GR++] = 207, DR.setBigUint64(GR, uu);
              else {
                if (!this.largeBigIntToFloat) {
                  if (this.largeBigIntToString) return Hu(uu.toString());
                  if (this.useBigIntExtension && uu < BigInt(2) ** BigInt(1023) && uu > -(BigInt(2) ** BigInt(1023))) {
                    eR[GR++] = 199, GR++, eR[GR++] = 66;
                    let Ru, yu = [];
                    do {
                      let Eu = uu & BigInt(255);
                      Ru = (Eu & BigInt(128)) === (uu < BigInt(0) ? BigInt(128) : BigInt(0)), yu.push(Eu), uu >>= BigInt(8)
                    } while (uu !== BigInt(0) && uu !== BigInt(-1) || !Ru);
                    eR[GR - 2] = yu.length;
                    for (let uu = yu.length; uu > 0;) eR[GR++] = Number(yu[--uu]);
                    return
                  }
                  throw new RangeError(uu + " was too large to fit in MessagePack 64-bit integer format, use useBigIntExtension, or set largeBigIntToFloat to convert to float-64, or set largeBigIntToString to convert to string")
                }
                eR[GR++] = 203, DR.setFloat64(GR, Number(uu))
              }
              GR += 8
            } else {
              if ("undefined" !== Eu) throw new Error("Unknown type: " + Eu);
              this.encodeUndefinedAsNil ? eR[GR++] = 192 : (eR[GR++] = 212, eR[GR++] = 0, eR[GR++] = 0)
            }
          },
          du = this.variableMapSize || this.coercibleKeyAsNumber || this.skipValues ? uu => {
            let Ru;
            if (this.skipValues) {
              Ru = [];
              for (let yu in uu) "function" === typeof uu.hasOwnProperty && !uu.hasOwnProperty(yu) || this.skipValues.includes(uu[yu]) || Ru.push(yu)
            } else Ru = Object.keys(uu);
            let yu, Eu = Ru.length;
            if (Eu < 16 ? eR[GR++] = 128 | Eu : Eu < 65536 ? (eR[GR++] = 222, eR[GR++] = Eu >> 8, eR[GR++] = 255 & Eu) : (eR[GR++] = 223, DR.setUint32(GR, Eu), GR += 4), this.coercibleKeyAsNumber)
              for (let Ku = 0; Ku < Eu; Ku++) {
                yu = Ru[Ku];
                let Eu = Number(yu);
                Hu(isNaN(Eu) ? yu : Eu), Hu(uu[yu])
              } else
                for (let Ku = 0; Ku < Eu; Ku++) Hu(yu = Ru[Ku]), Hu(uu[yu])
          } : uu => {
            eR[GR++] = 222;
            let yu = GR - Ru;
            GR += 2;
            let Eu = 0;
            for (let Ru in uu)("function" !== typeof uu.hasOwnProperty || uu.hasOwnProperty(Ru)) && (Hu(Ru), Hu(uu[Ru]), Eu++);
            if (Eu > 65535) throw new Error('Object is too large to serialize with fast 16-bit map size, use the "variableMapSize" option to serialize this object');
            eR[yu++ + Ru] = Eu >> 8, eR[yu + Ru] = 255 & Eu
          },
          bu = !1 === this.useRecords ? du : uu.progressiveRecords && !ru ? uu => {
            let yu, Ku, Qu = Eu.transitions || (Eu.transitions = Object.create(null)),
              mu = GR++ - Ru;
            for (let Ju in uu)
              if ("function" !== typeof uu.hasOwnProperty || uu.hasOwnProperty(Ju)) {
                if (yu = Qu[Ju], yu) Qu = yu;
                else {
                  let Nu = Object.keys(uu),
                    Xu = Qu;
                  Qu = Eu.transitions;
                  let Vu = 0;
                  for (let uu = 0, Ru = Nu.length; uu < Ru; uu++) {
                    let Ru = Nu[uu];
                    yu = Qu[Ru], yu || (yu = Qu[Ru] = Object.create(null), Vu++), Qu = yu
                  }
                  mu + Ru + 1 == GR ? (GR--, Au(Qu, Nu, Vu)) : Du(Qu, Nu, mu, Vu), Ku = !0, Qu = Xu[Ju]
                }
                Hu(uu[Ju])
              } if (!Ku) {
              let yu = Qu[sR];
              yu ? eR[mu + Ru] = yu : Du(Qu, Object.keys(uu), mu, 0)
            }
          } : uu => {
            let Ru, yu = Eu.transitions || (Eu.transitions = Object.create(null)),
              Ku = 0;
            for (let Eu in uu)("function" !== typeof uu.hasOwnProperty || uu.hasOwnProperty(Eu)) && (Ru = yu[Eu], Ru || (Ru = yu[Eu] = Object.create(null), Ku++), yu = Ru);
            let Qu = yu[sR];
            Qu ? Qu >= 96 && ru ? (eR[GR++] = 96 + (31 & (Qu -= 96)), eR[GR++] = Qu >> 5) : eR[GR++] = Qu : Au(yu, yu.__keys__ || Object.keys(uu), Ku);
            for (let Eu in uu)("function" !== typeof uu.hasOwnProperty || uu.hasOwnProperty(Eu)) && Hu(uu[Eu])
          },
          Cu = "function" == typeof this.useRecords && this.useRecords,
          ku = Cu ? uu => {
            Cu(uu) ? bu(uu) : du(uu)
          } : bu,
          eu = uu => {
            let yu;
            if (uu > 16777216) {
              if (uu - Ru > kR) throw new Error("Packed buffer would be larger than maximum buffer size");
              yu = Math.min(kR, 4096 * Math.round(Math.max((uu - Ru) * (uu > 67108864 ? 1.25 : 2), 4194304) / 4096))
            } else yu = 1 + (Math.max(uu - Ru << 2, eR.length - 1) >> 12) << 12;
            let Eu = new bR(yu);
            return DR = Eu.dataView || (Eu.dataView = new DataView(Eu.buffer, 0, yu)), uu = Math.min(uu, eR.length), eR.copy ? eR.copy(Eu, 0, Ru, uu) : Eu.set(eR.slice(Ru, uu)), GR -= Ru, Ru = 0, MR = Eu.length - 10, eR = Eu
          },
          Au = (uu, Ru, Ku) => {
            let Qu = Eu.nextId;
            Qu || (Qu = 64), Qu < Bu && this.shouldShareStructure && !this.shouldShareStructure(Ru) ? (Qu = Eu.nextOwnId, Qu < xu || (Qu = Bu), Eu.nextOwnId = Qu + 1) : (Qu >= xu && (Qu = Bu), Eu.nextId = Qu + 1);
            let mu = Ru.highByte = Qu >= 96 && ru ? Qu - 96 >> 5 : -1;
            uu[sR] = Qu, uu.__keys__ = Ru, Eu[Qu - 64] = Ru, Qu < Bu ? (Ru.isShared = !0, Eu.sharedLength = Qu - 63, yu = !0, mu >= 0 ? (eR[GR++] = 96 + (31 & Qu), eR[GR++] = mu) : eR[GR++] = Qu) : (mu >= 0 ? (eR[GR++] = 213, eR[GR++] = 114, eR[GR++] = 96 + (31 & Qu), eR[GR++] = mu) : (eR[GR++] = 212, eR[GR++] = 114, eR[GR++] = Qu), Ku && (pu += Tu * Ku), Su.length >= Vu && (Su.shift()[sR] = 0), Su.push(uu), Hu(Ru))
          },
          Du = (uu, yu, Eu, Ku) => {
            let Qu = eR,
              mu = GR,
              Ju = MR,
              Nu = Ru;
            eR = AR, GR = 0, Ru = 0, eR || (AR = eR = new bR(8192)), MR = eR.length - 10, Au(uu, yu, Ku), AR = eR;
            let Xu = GR;
            if (eR = Qu, GR = mu, MR = Ju, Ru = Nu, Xu > 1) {
              let uu = GR + Xu - 1;
              uu > MR && eu(uu);
              let yu = Eu + Ru;
              eR.copyWithin(yu + Xu, yu + 1, GR), eR.set(AR.slice(0, Xu), yu), GR = uu
            } else eR[Eu + Ru] = AR[0]
          },
          Mu = uu => {
            let Ku = IR(uu, eR, Ru, GR, Eu, eu, ((uu, Ru, Eu) => {
              if (Eu) return yu = !0;
              GR = Ru;
              let Ku = eR;
              return Hu(uu), Wu(), Ku !== eR ? {
                position: GR,
                targetView: DR,
                target: eR
              } : GR
            }), this);
            if (0 === Ku) return ku(uu);
            GR = Ku
          }
      }
      useBuffer(uu) {
        eR = uu, DR = eR.dataView || (eR.dataView = new DataView(eR.buffer, eR.byteOffset, eR.byteLength)), GR = 0
      }
      set position(uu) {
        GR = uu
      }
      get position() {
        return GR
      }
      set buffer(uu) {
        eR = uu
      }
      get buffer() {
        return eR
      }
      clearSharedData() {
        this.structures && (this.structures = []), this.typedStructs && (this.typedStructs = [])
      }
    }

    function lR(uu, Ru, yu, Eu) {
      let Ku = uu.byteLength;
      if (Ku + 1 < 256) {
        var {
          target: Qu,
          position: mu
        } = yu(4 + Ku);
        Qu[mu++] = 199, Qu[mu++] = Ku + 1
      } else if (Ku + 1 < 65536) {
        var {
          target: Qu,
          position: mu
        } = yu(5 + Ku);
        Qu[mu++] = 200, Qu[mu++] = Ku + 1 >> 8, Qu[mu++] = Ku + 1 & 255
      } else {
        var {
          target: Qu,
          position: mu,
          targetView: Ju
        } = yu(7 + Ku);
        Qu[mu++] = 201, Ju.setUint32(mu, Ku + 1), mu += 4
      }
      Qu[mu++] = 116, Qu[mu++] = Ru, uu.buffer || (uu = new Uint8Array(uu)), Qu.set(new Uint8Array(uu.buffer, uu.byteOffset, uu.byteLength), mu)
    }

    function gR(uu, Ru) {
      let yu = uu.byteLength;
      var Eu, Ku;
      if (yu < 256) {
        var {
          target: Eu,
          position: Ku
        } = Ru(yu + 2);
        Eu[Ku++] = 196, Eu[Ku++] = yu
      } else if (yu < 65536) {
        var {
          target: Eu,
          position: Ku
        } = Ru(yu + 3);
        Eu[Ku++] = 197, Eu[Ku++] = yu >> 8, Eu[Ku++] = 255 & yu
      } else {
        var {
          target: Eu,
          position: Ku,
          targetView: Qu
        } = Ru(yu + 5);
        Eu[Ku++] = 198, Qu.setUint32(Ku, yu), Ku += 4
      }
      Eu.set(uu, Ku)
    }

    function cR(uu, Ru, yu, Eu) {
      let Ku = uu.length;
      switch (Ku) {
        case 1:
          Ru[yu++] = 212;
          break;
        case 2:
          Ru[yu++] = 213;
          break;
        case 4:
          Ru[yu++] = 214;
          break;
        case 8:
          Ru[yu++] = 215;
          break;
        case 16:
          Ru[yu++] = 216;
          break;
        default:
          Ku < 256 ? (Ru[yu++] = 199, Ru[yu++] = Ku) : Ku < 65536 ? (Ru[yu++] = 200, Ru[yu++] = Ku >> 8, Ru[yu++] = 255 & Ku) : (Ru[yu++] = 201, Ru[yu++] = Ku >> 24, Ru[yu++] = Ku >> 16 & 255, Ru[yu++] = Ku >> 8 & 255, Ru[yu++] = 255 & Ku)
      }
      return Ru[yu++] = Eu, Ru.set(uu, yu), yu += Ku
    }

    function LR(uu, Ru, yu) {
      if (UR.length > 0) {
        DR.setUint32(UR.position + uu, GR + yu - UR.position - uu), UR.stringsPosition = GR - uu;
        let Eu = UR;
        UR = null, Ru(Eu[0]), Ru(Eu[1])
      }
    }

    function zR(uu) {
      if (uu.Class) {
        if (!uu.pack && !uu.write) throw new Error("Extension has no pack or write function");
        if (uu.pack && !uu.type) throw new Error("Extension has no type (numeric code to identify the extension)");
        TR.unshift(uu.Class), pR.unshift(uu)
      }! function(uu) {
        uu.unpack ? ju[uu.type] = uu.unpack : ju[uu.type] = uu
      }(uu)
    }

    function FR(uu, Ru) {
      return uu.isCompatible = uu => {
        let yu = !uu || (Ru.lastNamedStructuresLength || 0) === uu.length;
        return yu || Ru._mergeStructures(uu), yu
      }, uu
    }
    TR = [Date, Set, Error, RegExp, ArrayBuffer, Object.getPrototypeOf(Uint8Array.prototype).constructor, du], pR = [{
      pack(uu, Ru, yu) {
        let Eu = uu.getTime() / 1e3;
        if ((this.useTimestamp32 || 0 === uu.getMilliseconds()) && Eu >= 0 && Eu < 4294967296) {
          let {
            target: uu,
            targetView: yu,
            position: Ku
          } = Ru(6);
          uu[Ku++] = 214, uu[Ku++] = 255, yu.setUint32(Ku, Eu)
        } else if (Eu > 0 && Eu < 4294967296) {
          let {
            target: yu,
            targetView: Ku,
            position: Qu
          } = Ru(10);
          yu[Qu++] = 215, yu[Qu++] = 255, Ku.setUint32(Qu, 4e6 * uu.getMilliseconds() + (Eu / 1e3 / 4294967296 | 0)), Ku.setUint32(Qu + 4, Eu)
        } else if (isNaN(Eu)) {
          if (this.onInvalidDate) return Ru(0), yu(this.onInvalidDate());
          let {
            target: uu,
            targetView: Eu,
            position: Ku
          } = Ru(3);
          uu[Ku++] = 212, uu[Ku++] = 255, uu[Ku++] = 255
        } else {
          let {
            target: yu,
            targetView: Ku,
            position: Qu
          } = Ru(15);
          yu[Qu++] = 199, yu[Qu++] = 12, yu[Qu++] = 255, Ku.setUint32(Qu, 1e6 * uu.getMilliseconds()), Ku.setBigInt64(Qu + 4, BigInt(Math.floor(Eu)))
        }
      }
    }, {
      pack(uu, Ru, yu) {
        if (this.setAsEmptyObject) return Ru(0), yu({});
        let Eu = Array.from(uu),
          {
            target: Ku,
            position: Qu
          } = Ru(this.moreTypes ? 3 : 0);
        this.moreTypes && (Ku[Qu++] = 212, Ku[Qu++] = 115, Ku[Qu++] = 0), yu(Eu)
      }
    }, {
      pack(uu, Ru, yu) {
        let {
          target: Eu,
          position: Ku
        } = Ru(this.moreTypes ? 3 : 0);
        this.moreTypes && (Eu[Ku++] = 212, Eu[Ku++] = 101, Eu[Ku++] = 0), yu([uu.name, uu.message, uu.cause])
      }
    }, {
      pack(uu, Ru, yu) {
        let {
          target: Eu,
          position: Ku
        } = Ru(this.moreTypes ? 3 : 0);
        this.moreTypes && (Eu[Ku++] = 212, Eu[Ku++] = 120, Eu[Ku++] = 0), yu([uu.source, uu.flags])
      }
    }, {
      pack(uu, Ru) {
        this.moreTypes ? lR(uu, 16, Ru) : gR(dR ? Buffer.from(uu) : new Uint8Array(uu), Ru)
      }
    }, {
      pack(uu, Ru) {
        let yu = uu.constructor;
        yu !== CR && this.moreTypes ? lR(uu, yR.indexOf(yu.name), Ru) : gR(uu, Ru)
      }
    }, {
      pack(uu, Ru) {
        let {
          target: yu,
          position: Eu
        } = Ru(1);
        yu[Eu] = 193
      }
    }];
    let wR = new tR({
      useRecords: !1
    });
    const ZR = wR.pack,
      hR = wR.pack,
      PR = tR,
      {
        NEVER: iR,
        ALWAYS: YR,
        DECIMAL_ROUND: oR,
        DECIMAL_FIT: qR
      } = xR,
      OR = 512,
      vR = 1024,
      aR = 2048;
    const fR = function(uu) {
        let Ru = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        if (!uu || "object" !== typeof uu) throw new Error("first argument must be an Iterable, Async Iterable, Iterator, Async Iterator, or a promise");
        const yu = new Mu(Ru);
        let Eu;
        const Ku = uu => {
          let Ru;
          Eu && (uu = Buffer.concat([Eu, uu]), Eu = void 0);
          try {
            Ru = yu.unpackMultiple(uu)
          } catch (Ku) {
            if (!Ku.incomplete) throw Ku;
            Eu = uu.slice(Ku.lastPosition), Ru = Ku.values
          }
          return Ru
        };
        return "function" === typeof uu[Symbol.iterator] ? function*() {
          for (const Ru of uu) yield* Ku(Ru)
        }() : "function" === typeof uu[Symbol.asyncIterator] ? async function*() {
          for await (const Ru of uu) yield* Ku(Ru)
        }(): void 0
      },
      uy = function(uu) {
        let Ru = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        if (uu && "object" === typeof uu) {
          if ("function" === typeof uu[Symbol.iterator]) return function*(uu, Ru) {
            const yu = new tR(Ru);
            for (const Eu of uu) yield yu.pack(Eu)
          }(uu, Ru);
          if ("function" === typeof uu.then || "function" === typeof uu[Symbol.asyncIterator]) return async function*(uu, Ru) {
            const yu = new tR(Ru);
            for await (const Eu of uu) yield yu.pack(Eu)
          }(uu, Ru);
          throw new Error("first argument must be an Iterable, Async Iterable, Iterator, Async Iterator, or a Promise")
        }
        throw new Error("first argument must be an Iterable, Async Iterable, or a Promise for an Async Iterable")
      },
      Ry = !1,
      yy = !0
  },
  8851: (uu, Ru, yu) => {
    yu.r(Ru), yu.d(Ru, {
      $changes: () => pu,
      $childType: () => Tu,
      $decoder: () => Vu,
      $deleteByIndex: () => xu,
      $encoder: () => Xu,
      $filter: () => ru,
      $getByIndex: () => Bu,
      $numFields: () => Du,
      $refId: () => Ju,
      $track: () => Nu,
      $values: () => bu,
      ArraySchema: () => yE,
      Callbacks: () => yK,
      ChangeTree: () => Gy,
      CollectionSchema: () => QE,
      Decoder: () => oE,
      Encoder: () => hE,
      FieldBuilder: () => NE,
      MapSchema: () => KE,
      Metadata: () => oR,
      OPERATION: () => Ku,
      Reflection: () => aE,
      ReflectionField: () => OE,
      ReflectionType: () => vE,
      Root: () => UE,
      Schema: () => IE,
      SetSchema: () => mE,
      StateCallbackStrategy: () => RK,
      StateView: () => gE,
      StreamSchema: () => JE,
      TypeContext: () => FR,
      createPool: () => KK,
      decode: () => HR,
      decodeKeyValueOperation: () => Oy,
      decodeSchemaOperation: () => qy,
      defineCustomTypes: () => kR,
      defineTypes: () => AE,
      deprecated: () => kE,
      dumpChanges: () => ME,
      encode: () => RR,
      encodeArray: () => Ly,
      encodeIndexedEntry: () => gy,
      encodeKeyValueOperation: () => cy,
      encodeMapEntry: () => ly,
      encodeSchemaOperation: () => ty,
      yS: () => pE,
      fullStateOnly: () => HE,
      getDecoderStateCallbacks: () => fE,
      getEncodeDescriptor: () => uy,
      getRawChangesCallback: () => uK,
      isBuilder: () => XE,
      patchOnly: () => jE,
      registerType: () => CR,
      schema: () => DE,
      t: () => xE,
      type: () => dE,
      unreliable: () => WE,
      view: () => TE
    });
    const Eu = 255;
    var Ku;

    function Qu(uu) {
      Object.defineProperty(uu, Symbol.metadata, {
        value: void 0,
        writable: !0,
        configurable: !0,
        enumerable: !1
      })
    }! function(uu) {
      uu[uu.ADD = 128] = "ADD", uu[uu.REPLACE = 0] = "REPLACE", uu[uu.DELETE = 64] = "DELETE", uu[uu.DELETE_AND_MOVE = 96] = "DELETE_AND_MOVE", uu[uu.MOVE_AND_ADD = 160] = "MOVE_AND_ADD", uu[uu.DELETE_AND_ADD = 192] = "DELETE_AND_ADD", uu[uu.CLEAR = 10] = "CLEAR", uu[uu.REVERSE = 15] = "REVERSE", uu[uu.MOVE = 32] = "MOVE", uu[uu.DELETE_BY_REFID = 33] = "DELETE_BY_REFID", uu[uu.ADD_BY_REFID = 129] = "ADD_BY_REFID"
    }(Ku || (Ku = {})), Symbol.metadata ??= Symbol.for("Symbol.metadata");
    const mu = "undefined" !== typeof globalThis ? globalThis : "undefined" !== typeof global ? global : "undefined" !== typeof self ? self : "undefined" !== typeof window ? window : {};
    if ("function" === typeof Symbol && "function" !== typeof Symbol.for) {
      const uu = "colyseus.symbolRegistry",
        Ru = mu[uu] || (mu[uu] = Object.create(null));
      Symbol.for = function(uu) {
        return Ru[uu] || (Ru[uu] = Symbol(uu))
      }, Symbol.keyFor = function(uu) {
        for (const yu in Ru)
          if (Ru[yu] === uu) return yu
      }
    }
    const Ju = Symbol.for("$refId"),
      Nu = "~track",
      Xu = "~encoder",
      Vu = "~decoder",
      ru = "~filter",
      Bu = "~getByIndex",
      xu = "~deleteByIndex",
      Su = "~resyncPrune",
      pu = Symbol.for("$changes"),
      Tu = Symbol.for("$childType"),
      Wu = Symbol.for("$proxyTarget"),
      ju = "~onEncodeEnd",
      Hu = "~reset",
      du = "~onDecodeEnd",
      bu = Symbol.for("$values"),
      Cu = "~builder",
      ku = "~descriptors",
      eu = "~__encodeDescriptor",
      Au = "~encoders",
      Du = "~__numFields",
      Mu = "~__refTypeFieldIndexes",
      Iu = "~__viewFieldIndexes",
      Gu = "$__fieldIndexesByViewTag",
      Uu = "~__unreliableFieldIndexes",
      nu = "~__patchOnlyFieldIndexes",
      su = "~__fullSyncSkipIndexes",
      tu = "~__fullStateOnlyFieldIndexes",
      lu = "~__streamFieldIndexes",
      gu = "~__streamPriorities";
    let cu;
    try {
      cu = new TextEncoder
    } catch (QK) {}
    const Lu = new ArrayBuffer(8),
      zu = new Int32Array(Lu),
      Fu = new Float32Array(Lu),
      wu = new Float64Array(Lu),
      Zu = new BigInt64Array(Lu),
      hu = "undefined" !== typeof Buffer && Buffer.byteLength ? Buffer.byteLength : function(uu, Ru) {
        for (var yu = 0, Eu = 0, Ku = 0, Qu = uu.length; Ku < Qu; Ku++)(yu = uu.charCodeAt(Ku)) < 128 ? Eu += 1 : yu < 2048 ? Eu += 2 : yu < 55296 || yu >= 57344 ? Eu += 3 : (Ku++, Eu += 4);
        return Eu
      };

    function Pu(uu, Ru, yu) {
      for (var Eu = 0, Ku = 0, Qu = Ru.length; Ku < Qu; Ku++)(Eu = Ru.charCodeAt(Ku)) < 128 ? uu[yu.offset++] = Eu : Eu < 2048 ? (uu[yu.offset] = 192 | Eu >> 6, uu[yu.offset + 1] = 128 | 63 & Eu, yu.offset += 2) : Eu < 55296 || Eu >= 57344 ? (uu[yu.offset] = 224 | Eu >> 12, uu[yu.offset + 1] = 128 | Eu >> 6 & 63, uu[yu.offset + 2] = 128 | 63 & Eu, yu.offset += 3) : (Ku++, Eu = 65536 + ((1023 & Eu) << 10 | 1023 & Ru.charCodeAt(Ku)), uu[yu.offset] = 240 | Eu >> 18, uu[yu.offset + 1] = 128 | Eu >> 12 & 63, uu[yu.offset + 2] = 128 | Eu >> 6 & 63, uu[yu.offset + 3] = 128 | 63 & Eu, yu.offset += 4)
    }

    function iu(uu, Ru, yu) {
      uu[yu.offset++] = 255 & Ru
    }

    function Yu(uu, Ru, yu) {
      uu[yu.offset++] = 255 & Ru, uu[yu.offset++] = Ru >> 8 & 255
    }

    function ou(uu, Ru, yu) {
      uu[yu.offset++] = 255 & Ru, uu[yu.offset++] = Ru >> 8 & 255
    }

    function qu(uu, Ru, yu) {
      uu[yu.offset++] = 255 & Ru, uu[yu.offset++] = Ru >> 8 & 255, uu[yu.offset++] = Ru >> 16 & 255, uu[yu.offset++] = Ru >> 24 & 255
    }

    function Ou(uu, Ru, yu) {
      const Eu = Ru >> 24,
        Ku = Ru >> 16,
        Qu = Ru >> 8,
        mu = Ru;
      uu[yu.offset++] = 255 & mu, uu[yu.offset++] = 255 & Qu, uu[yu.offset++] = 255 & Ku, uu[yu.offset++] = 255 & Eu
    }

    function vu(uu, Ru, yu) {
      const Eu = Math.floor(Ru / Math.pow(2, 32));
      Ou(uu, Ru >>> 0, yu), Ou(uu, Eu, yu)
    }

    function au(uu, Ru, yu) {
      const Eu = Ru / Math.pow(2, 32) | 0;
      Ou(uu, Ru >>> 0, yu), Ou(uu, Eu, yu)
    }

    function fu(uu, Ru, yu) {
      Fu[0] = Ru, qu(uu, zu[0], yu)
    }

    function uR(uu, Ru, yu) {
      wu[0] = Ru, qu(uu, zu[0], yu), qu(uu, zu[1], yu)
    }
    const RR = {
        int8: iu,
        uint8: function(uu, Ru, yu) {
          uu[yu.offset++] = 255 & Ru
        },
        int16: Yu,
        uint16: ou,
        int32: qu,
        uint32: Ou,
        int64: vu,
        uint64: au,
        bigint64: function(uu, Ru, yu) {
          Zu[0] = BigInt.asIntN(64, Ru), qu(uu, zu[0], yu), qu(uu, zu[1], yu)
        },
        biguint64: function(uu, Ru, yu) {
          Zu[0] = BigInt.asIntN(64, Ru), qu(uu, zu[0], yu), qu(uu, zu[1], yu)
        },
        float32: fu,
        float64: uR,
        boolean: function(uu, Ru, yu) {
          uu[yu.offset++] = Ru ? 1 : 0
        },
        string: function(uu, Ru, yu) {
          Ru || (Ru = "");
          let Eu = hu(Ru, "utf8"),
            Ku = 0;
          if (Eu < 32) uu[yu.offset++] = 160 | Eu, Ku = 1;
          else if (Eu < 256) uu[yu.offset++] = 217, uu[yu.offset++] = Eu, Ku = 2;
          else if (Eu < 65536) uu[yu.offset++] = 218, ou(uu, Eu, yu), Ku = 3;
          else {
            if (!(Eu < 4294967296)) throw new Error("String too long");
            uu[yu.offset++] = 219, Ou(uu, Eu, yu), Ku = 5
          }
          return Pu(uu, Ru, yu), Ku + Eu
        },
        number: function uu(Ru, yu, Eu) {
          return isNaN(yu) ? uu(Ru, 0, Eu) : isFinite(yu) ? yu !== (0 | yu) ? Math.abs(yu) <= 34028235e31 && (Fu[0] = yu, Math.abs(Math.abs(Fu[0]) - Math.abs(yu)) < 1e-4) ? (Ru[Eu.offset++] = 202, fu(Ru, yu, Eu), 5) : (Ru[Eu.offset++] = 203, uR(Ru, yu, Eu), 9) : yu >= 0 ? yu < 128 ? (Ru[Eu.offset++] = 255 & yu, 1) : yu < 256 ? (Ru[Eu.offset++] = 204, Ru[Eu.offset++] = 255 & yu, 2) : yu < 65536 ? (Ru[Eu.offset++] = 205, ou(Ru, yu, Eu), 3) : yu < 4294967296 ? (Ru[Eu.offset++] = 206, Ou(Ru, yu, Eu), 5) : (Ru[Eu.offset++] = 207, au(Ru, yu, Eu), 9) : yu >= -32 ? (Ru[Eu.offset++] = 224 | yu + 32, 1) : yu >= -128 ? (Ru[Eu.offset++] = 208, iu(Ru, yu, Eu), 2) : yu >= -32768 ? (Ru[Eu.offset++] = 209, Yu(Ru, yu, Eu), 3) : yu >= -2147483648 ? (Ru[Eu.offset++] = 210, qu(Ru, yu, Eu), 5) : (Ru[Eu.offset++] = 211, vu(Ru, yu, Eu), 9) : uu(Ru, yu > 0 ? Number.MAX_SAFE_INTEGER : -Number.MAX_SAFE_INTEGER, Eu)
        },
        utf8Write: Pu,
        utf8Length: hu
      },
      yR = new ArrayBuffer(8),
      ER = new Int32Array(yR),
      KR = new Float32Array(yR),
      QR = new Float64Array(yR),
      mR = new BigUint64Array(yR),
      JR = new BigInt64Array(yR);

    function NR(uu, Ru, yu) {
      yu > uu.length - Ru.offset && (yu = uu.length - Ru.offset);
      for (var Eu = "", Ku = 0, Qu = Ru.offset, mu = Ru.offset + yu; Qu < mu; Qu++) {
        var Ju = uu[Qu];
        if (0 !== (128 & Ju))
          if (192 !== (224 & Ju))
            if (224 !== (240 & Ju)) {
              if (240 !== (248 & Ju)) {
                console.error("decode.utf8Read(): Invalid byte " + Ju + " at offset " + Qu + ". Skip to end of string: " + (Ru.offset + yu));
                break
              }(Ku = (7 & Ju) << 18 | (63 & uu[++Qu]) << 12 | (63 & uu[++Qu]) << 6 | 63 & uu[++Qu]) >= 65536 ? (Ku -= 65536, Eu += String.fromCharCode(55296 + (Ku >>> 10), 56320 + (1023 & Ku))) : Eu += String.fromCharCode(Ku)
            } else Eu += String.fromCharCode((15 & Ju) << 12 | (63 & uu[++Qu]) << 6 | 63 & uu[++Qu]);
        else Eu += String.fromCharCode((31 & Ju) << 6 | 63 & uu[++Qu]);
        else Eu += String.fromCharCode(Ju)
      }
      return Ru.offset += yu, Eu
    }

    function XR(uu, Ru) {
      return VR(uu, Ru) << 24 >> 24
    }

    function VR(uu, Ru) {
      return uu[Ru.offset++]
    }

    function rR(uu, Ru) {
      return BR(uu, Ru) << 16 >> 16
    }

    function BR(uu, Ru) {
      return uu[Ru.offset++] | uu[Ru.offset++] << 8
    }

    function xR(uu, Ru) {
      return uu[Ru.offset++] | uu[Ru.offset++] << 8 | uu[Ru.offset++] << 16 | uu[Ru.offset++] << 24
    }

    function SR(uu, Ru) {
      return xR(uu, Ru) >>> 0
    }

    function pR(uu, Ru) {
      return ER[0] = xR(uu, Ru), KR[0]
    }

    function TR(uu, Ru) {
      return ER[0] = xR(uu, Ru), ER[1] = xR(uu, Ru), QR[0]
    }

    function WR(uu, Ru) {
      const yu = SR(uu, Ru);
      return xR(uu, Ru) * Math.pow(2, 32) + yu
    }

    function jR(uu, Ru) {
      const yu = SR(uu, Ru);
      return SR(uu, Ru) * Math.pow(2, 32) + yu
    }
    const HR = {
        utf8Read: NR,
        int8: XR,
        uint8: VR,
        int16: rR,
        uint16: BR,
        int32: xR,
        uint32: SR,
        float32: pR,
        float64: TR,
        int64: WR,
        uint64: jR,
        bigint64: function(uu, Ru) {
          return ER[0] = xR(uu, Ru), ER[1] = xR(uu, Ru), JR[0]
        },
        biguint64: function(uu, Ru) {
          return ER[0] = xR(uu, Ru), ER[1] = xR(uu, Ru), mR[0]
        },
        boolean: function(uu, Ru) {
          return VR(uu, Ru) > 0
        },
        string: function(uu, Ru) {
          const yu = uu[Ru.offset++];
          let Eu;
          return yu < 192 ? Eu = 31 & yu : 217 === yu ? Eu = VR(uu, Ru) : 218 === yu ? Eu = BR(uu, Ru) : 219 === yu && (Eu = SR(uu, Ru)), NR(uu, Ru, Eu)
        },
        number: function(uu, Ru) {
          const yu = uu[Ru.offset++];
          return yu < 128 ? yu : 202 === yu ? pR(uu, Ru) : 203 === yu ? TR(uu, Ru) : 204 === yu ? VR(uu, Ru) : 205 === yu ? BR(uu, Ru) : 206 === yu ? SR(uu, Ru) : 207 === yu ? jR(uu, Ru) : 208 === yu ? XR(uu, Ru) : 209 === yu ? rR(uu, Ru) : 210 === yu ? xR(uu, Ru) : 211 === yu ? WR(uu, Ru) : yu > 223 ? -1 * (255 - yu + 1) : void 0
        },
        stringCheck: function(uu, Ru) {
          const yu = uu[Ru.offset];
          return yu < 192 && yu > 160 || 217 === yu || 218 === yu || 219 === yu
        }
      },
      dR = {},
      bR = new Map;

    function CR(uu, Ru) {
      Ru.constructor && (Object.prototype.hasOwnProperty.call(Ru, "constructor") && null == Ru.constructor[Symbol.metadata] && Qu(Ru.constructor), bR.set(Ru.constructor, uu), dR[uu] = Ru), Ru.encode && (RR[uu] = Ru.encode), Ru.decode && (HR[uu] = Ru.decode)
    }

    function kR(uu) {
      for (const Ru in uu) CR(Ru, uu[Ru]);
      return uu => dE(uu)
    }
    const eR = "ArraySchema does not support streaming \u2014 positional ops (splice / unshift / reverse) shift subsequent indexes, so holding ADDs back for a later tick under `maxPerTick` would desync the decoder. Use `t.stream(X)` (stable monotonic positions) or `t.map(X).stream()` (stable keys) instead.";

    function AR() {
      return {
        pendingByView: new Map,
        sentByView: new Map,
        broadcastPending: new Set,
        sentBroadcast: new Set,
        broadcastDeletes: new Set,
        maxPerTick: 32
      }
    }

    function DR(uu) {
      return uu._stream ??= AR()
    }

    function MR(uu, Ru, yu) {
      0 === Ru.activeViews.size && DR(uu).broadcastPending.add(yu)
    }

    function IR(uu, Ru, yu, Eu) {
      const Qu = uu._stream;
      if (void 0 === Qu) return !0;
      let mu = !1;
      return Qu.broadcastPending.delete(Eu) ? mu = !0 : Qu.sentBroadcast.delete(Eu) && Qu.broadcastDeletes.add(Eu), Ru.forEachActiveView((uu => {
        const Ru = Qu.pendingByView.get(uu.id);
        if (Ru?.has(Eu)) return Ru.delete(Eu), void(mu = !0);
        const Ju = Qu.sentByView.get(uu.id);
        if (Ju?.has(Eu)) {
          Ju.delete(Eu);
          let Ru = uu.changes.get(yu);
          void 0 === Ru && (Ru = new Map, uu.changes.set(yu, Ru)), Ru.set(Eu, Ku.DELETE)
        }
      })), mu
    }

    function GR(uu, Ru) {
      const yu = uu._stream?.pendingByView;
      if (void 0 === yu) return !1;
      for (const [Eu, Ku] of yu)
        if (Ku.size > 0 && void 0 !== Ru.activeViews.get(Eu)?.deref()) return !0;
      return !1
    }

    function UR(uu) {
      const Ru = uu._stream;
      return void 0 !== Ru && (Ru.broadcastPending.size > 0 || Ru.broadcastDeletes.size > 0)
    }

    function nR(uu, Ru, yu) {
      const Eu = DR(uu);
      let Ku = Eu.pendingByView.get(Ru);
      void 0 === Ku && (Ku = new Set, Eu.pendingByView.set(Ru, Ku)), Ku.add(yu)
    }

    function sR(uu, Ru) {
      const yu = uu._stream;
      void 0 !== yu && (yu.pendingByView.delete(Ru), yu.sentByView.delete(Ru), yu.priorityByView?.delete(Ru))
    }
    const tR = {
      8: "uint8",
      16: "uint16",
      32: "uint32"
    };

    function lR(uu) {
      if (null == uu || "object" !== typeof uu) throw new Error("t.quantized(): options object with { min, max } is required.");
      const {
        min: Ru,
        max: yu
      } = uu;
      if ("number" !== typeof Ru || "number" !== typeof yu || !(yu > Ru) || !Number.isFinite(Ru) || !Number.isFinite(yu)) throw new Error(`t.quantized(): require finite min < max (got min=${Ru}, max=${yu}).`);
      const Eu = uu.bits ?? 16;
      if (8 !== Eu && 16 !== Eu && 32 !== Eu) throw new Error(`t.quantized(): bits must be 8, 16 or 32 (got ${Eu}).`);
      const Ku = uu.mode ?? "clamp";
      if ("clamp" !== Ku && "wrap" !== Ku) throw new Error(`t.quantized(): mode must be "clamp" or "wrap" (got ${JSON.stringify(Ku)}).`);
      const Qu = "wrap" === Ku,
        mu = Math.pow(2, Eu);
      return {
        min: Ru,
        max: yu,
        bits: Eu,
        wrap: Qu,
        wire: tR[Eu],
        range: yu - Ru,
        span: Qu ? mu : Ru === -yu ? mu - 2 : mu - 1
      }
    }

    function gR(uu) {
      return null !== uu && "object" === typeof uu && void 0 !== uu.quantized
    }

    function cR(uu, Ru) {
      if (uu.wrap) {
        if (!Number.isFinite(Ru)) return 0;
        const yu = uu.range;
        let Eu = (Ru - uu.min) % yu;
        Eu < 0 && (Eu += yu);
        const Ku = uu.span;
        return Math.floor(Eu / yu * Ku + .5) % Ku
      }
      if (Ru !== Ru) return 0;
      const yu = Ru < uu.min ? uu.min : Ru > uu.max ? uu.max : Ru;
      return Math.floor((yu - uu.min) / uu.range * uu.span + .5)
    }

    function LR(uu, Ru) {
      return uu.min + Ru / uu.span * uu.range
    }

    function zR(uu) {
      const Ru = RR[uu.wire];
      return (yu, Eu, Ku) => Ru(yu, cR(uu, Eu), Ku)
    }
    class FR {
      types = {};
      schemas = new Map;
      hasFilters = !1;
      static inheritedTypes = new WeakMap;
      static cachedContexts = new WeakMap;
      static register(uu) {
        const Ru = Object.getPrototypeOf(uu);
        if (Ru !== IE) {
          let yu = FR.inheritedTypes.get(Ru);
          yu || (yu = new Set, FR.inheritedTypes.set(Ru, yu)), yu.add(uu)
        }
      }
      static cache(uu) {
        let Ru = FR.cachedContexts.get(uu);
        return Ru || (Ru = new FR(uu), FR.cachedContexts.set(uu, Ru)), Ru
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
        let Ru = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.schemas.size;
        return !this.schemas.has(uu) && (this.types[Ru] = uu, null == uu[Symbol.metadata] && oR.initialize(uu), this.schemas.set(uu, Ru), !0)
      }
      getTypeId(uu) {
        return this.schemas.get(uu)
      }
      discoverTypes(uu) {
        if (!this.add(uu)) return;
        FR.inheritedTypes.get(uu)?.forEach((uu => {
          this.discoverTypes(uu)
        }));
        let Ru = uu;
        for (;
          (Ru = Object.getPrototypeOf(Ru)) && Ru !== IE && Ru !== Function.prototype;) this.discoverTypes(Ru);
        const yu = uu[Symbol.metadata];
        (yu[Iu] || yu[lu]) && (this.hasFilters = !0);
        for (const Eu in yu) {
          const uu = yu[Eu].type;
          if ("string" !== typeof uu && !gR(uu))
            if ("function" === typeof uu) this.discoverTypes(uu);
            else {
              const Ru = Object.values(uu)[0];
              if ("string" === typeof Ru) continue;
              this.discoverTypes(Ru)
            }
        }
      }
      debug() {
        return `TypeContext ->\n\tSchema types: ${this.schemas.size}\n\thasFilters: ${this.hasFilters}`
      }
    }

    function wR(uu) {
      const Ru = hR(uu);
      return Ru ? {
        complexTypeKlass: dR[Ru],
        childType: uu[Ru]
      } : {
        complexTypeKlass: !1,
        childType: uu
      }
    }

    function ZR(uu, Ru) {
      const yu = PR(uu),
        Eu = hR(yu),
        Ku = Eu && hR(yu[Eu]);
      if (Ku) throw new Error(`${Ru?`${Ru}: `:""}@colyseus/schema: nested collections are not supported ("${Eu}" of "${Ku}"). Collections can only hold primitive types or Schema classes, wrap the inner ${Ku} in a Schema class.`);
      return yu
    }

    function hR(uu) {
      return "object" === typeof uu && null !== uu ? Object.keys(uu).find((uu => void 0 !== dR[uu])) : void 0
    }

    function PR(uu) {
      if ("object" !== typeof uu || null === uu) return uu;
      if (Array.isArray(uu)) return {
        array: PR(uu[0])
      };
      const Ru = function(uu) {
        const Ru = Object.keys(uu),
          yu = Ru.filter((uu => /\d+/.test(uu)));
        if (yu.length > 0 && yu.length === Ru.length / 2 && uu[uu[yu[0]]] == yu[0]) return "number";
        if (Ru.length > 0 && Ru.every((Ru => uu[Ru] === Ru))) return "string"
      }(uu);
      if (Ru) return Ru;
      if (gR(uu)) return "string" === typeof uu.quantized.wire ? uu : {
        quantized: lR(uu.quantized)
      };
      if (void 0 !== uu.type) return PR(uu.type);
      const yu = hR(uu);
      return yu && (uu[yu] = PR(uu[yu])), uu
    }
    const iR = [Mu, Uu, nu, su, tu, lu, Au];

    function YR(uu, Ru, yu) {
      uu[Ru] || Object.defineProperty(uu, Ru, {
        value: [],
        enumerable: !1,
        configurable: !0,
        writable: !0
      }), uu[Ru].push(yu)
    }
    const oR = {
        addField(uu, Ru, yu, Eu, Ku) {
          if (Ru >= 63) throw new Error(`Can't define field '${yu}'.\nSchema instances may only have up to 63 fields.`);
          uu[Ru] = Object.assign(uu[Ru] || {}, {
            type: Eu,
            index: Ru,
            name: yu
          }), Object.defineProperty(uu, ku, {
            value: uu[ku] || {},
            enumerable: !1,
            configurable: !0
          }), uu[ku][yu] = Ku || {
            value: void 0,
            writable: !0,
            enumerable: !0,
            configurable: !0
          }, Object.defineProperty(uu, Du, {
            value: Ru,
            enumerable: !1,
            configurable: !0
          }), Object.defineProperty(uu, yu, {
            value: Ru,
            enumerable: !1,
            configurable: !0
          }), "string" === typeof uu[Ru].type || gR(uu[Ru].type) || (void 0 === uu[Mu] && Object.defineProperty(uu, Mu, {
            value: [],
            enumerable: !1,
            configurable: !0
          }), uu[Mu].push(Ru));
          const Qu = uu[Ru].type;
          if (Qu && "object" === typeof Qu && void 0 !== Qu.stream) {
            if (void 0 !== Qu.array) throw new Error(eR);
            uu[Ru].stream = !0, uu[lu] || Object.defineProperty(uu, lu, {
              value: [],
              enumerable: !1,
              configurable: !0,
              writable: !0
            }), uu[lu].includes(Ru) || uu[lu].push(Ru);
            const Ku = Eu?.priority;
            "function" === typeof Ku && oR.setStreamPriority(uu, yu, Ku)
          }
        },
        setTag(uu, Ru, yu) {
          const Eu = uu[Ru];
          if (uu[Eu].tag = yu, uu[Iu] || (Object.defineProperty(uu, Iu, {
              value: [],
              enumerable: !1,
              configurable: !0
            }), Object.defineProperty(uu, Gu, {
              value: {},
              enumerable: !1,
              configurable: !0
            })), uu[Iu].push(Eu), yu < 0) uu[Gu][yu] || (uu[Gu][yu] = []), uu[Gu][yu].push(Eu);
          else
            for (let Ku = yu; Ku > 0; Ku &= Ku - 1) {
              const Ru = Ku & -Ku;
              uu[Gu][Ru] || (uu[Gu][Ru] = []), uu[Gu][Ru].push(Eu)
            }
        },
        setUnreliable(uu, Ru) {
          const yu = uu[Ru];
          if ("string" !== typeof uu[yu].type) throw new Error(`@unreliable cannot be applied to ref-type field "${Ru}". For ref-type fields, mark each primitive sub-field with @unreliable instead. See README "Limitations and best practices".`);
          uu[yu].unreliable = !0, uu[Uu] || Object.defineProperty(uu, Uu, {
            value: [],
            enumerable: !1,
            configurable: !0,
            writable: !0
          }), uu[Uu].push(yu)
        },
        setPatchOnly(uu, Ru) {
          const yu = uu[Ru];
          if (uu[yu].fullStateOnly) throw new Error(`field "${Ru}" cannot be both patchOnly and fullStateOnly \u2014 those are the only two delivery channels, so the field would never reach a client.`);
          uu[yu].patchOnly = !0, YR(uu, nu, yu), YR(uu, su, yu)
        },
        setDeprecated(uu, Ru) {
          const yu = uu[Ru];
          uu[yu].deprecated = !0, YR(uu, su, yu), Object.defineProperty(uu, yu, {
            value: uu[yu],
            enumerable: !1,
            configurable: !0
          })
        },
        setFullStateOnly(uu, Ru) {
          const yu = uu[Ru];
          if (uu[yu].patchOnly) throw new Error(`field "${Ru}" cannot be both patchOnly and fullStateOnly \u2014 those are the only two delivery channels, so the field would never reach a client.`);
          uu[yu].fullStateOnly = !0, YR(uu, tu, yu)
        },
        setStream(uu, Ru) {
          const yu = uu[Ru];
          uu[yu].stream = !0, uu[lu] || Object.defineProperty(uu, lu, {
            value: [],
            enumerable: !1,
            configurable: !0,
            writable: !0
          }), uu[lu].push(yu)
        },
        setStreamPriority(uu, Ru, yu) {
          const Eu = uu[Ru];
          uu[gu] || Object.defineProperty(uu, gu, {
            value: {},
            enumerable: !1,
            configurable: !0,
            writable: !0
          }), uu[gu][Eu] = yu
        },
        getStreamPriority: (uu, Ru) => uu?.[gu]?.[Ru],
        defineField(uu, Ru, yu, Eu, Ku) {
          const Qu = ZR(Ku, `${uu.name}.${Eu}`),
            {
              complexTypeKlass: mu,
              childType: Ju
            } = wR(Qu);
          oR.addField(Ru, yu, Eu, Qu, CE(Eu, yu, Ju, mu)), Ru[ku][Eu] && Object.defineProperty(uu.prototype, Eu, Ru[ku][Eu]), ("string" === typeof Qu || gR(Qu)) && (Ru[Au] || Object.defineProperty(Ru, Au, {
            value: [],
            enumerable: !1,
            configurable: !0,
            writable: !0
          }), Ru[Au][yu] = "string" === typeof Qu ? RR[Qu] : zR(Qu.quantized))
        },
        setFields(uu, Ru) {
          const yu = uu.prototype.constructor;
          FR.register(yu);
          const Eu = Object.getPrototypeOf(yu),
            Ku = Eu && Eu[Symbol.metadata],
            Qu = oR.initialize(yu);
          yu[Nu] || (yu[Nu] = IE[Nu]), yu[Xu] || (yu[Xu] = IE[Xu]), yu[Vu] || (yu[Vu] = IE[Vu]), yu.prototype.toJSON || (yu.prototype.toJSON = IE.prototype.toJSON);
          let mu = Qu[Du] ?? (Ku && Ku[Du]) ?? -1;
          mu++, Qu[Au] || Object.defineProperty(Qu, Au, {
            value: Ku?.[Au] ? [...Ku[Au]] : [],
            enumerable: !1,
            configurable: !0,
            writable: !0
          });
          for (const Ju in Ru) {
            if (void 0 !== Qu[Ju]) throw new Error(`@colyseus/schema: Duplicate '${Ju}' definition on '${yu.name||"(anonymous)"}'.`);
            oR.defineField(yu, Qu, mu, Ju, Ru[Ju]), mu++
          }
          return uu
        },
        isDeprecated: (uu, Ru) => !0 === uu[Ru].deprecated,
        initialize(uu) {
          const Ru = Object.getPrototypeOf(uu),
            yu = Ru[Symbol.metadata];
          let Eu = uu[Symbol.metadata] ?? Object.create(null);
          if (Ru !== IE && Eu === yu && (Eu = Object.create(null), yu)) {
            Object.setPrototypeOf(Eu, yu), Object.defineProperty(Eu, Du, {
              value: yu[Du],
              enumerable: !1,
              configurable: !0,
              writable: !0
            }), void 0 !== yu[Iu] && (Object.defineProperty(Eu, Iu, {
              value: [...yu[Iu]],
              enumerable: !1,
              configurable: !0,
              writable: !0
            }), Object.defineProperty(Eu, Gu, {
              value: {
                ...yu[Gu]
              },
              enumerable: !1,
              configurable: !0,
              writable: !0
            }));
            for (const uu of iR) {
              const Ru = yu[uu];
              void 0 !== Ru && Object.defineProperty(Eu, uu, {
                value: [...Ru],
                enumerable: !1,
                configurable: !0,
                writable: !0
              })
            }
            Object.defineProperty(Eu, ku, {
              value: {
                ...yu[ku]
              },
              enumerable: !1,
              configurable: !0,
              writable: !0
            })
          }
          return Object.defineProperty(uu, Symbol.metadata, {
            value: Eu,
            writable: !1,
            configurable: !0
          }), Eu
        },
        isValidInstance: uu => uu.constructor[Symbol.metadata] && Object.prototype.hasOwnProperty.call(uu.constructor[Symbol.metadata], Du),
        getFields(uu) {
          const Ru = uu[Symbol.metadata],
            yu = {};
          for (let Eu = 0; Eu <= Ru[Du]; Eu++) yu[Ru[Eu].name] = Ru[Eu].type;
          return yu
        },
        hasViewTagAtIndex: (uu, Ru) => uu?.[Iu]?.includes(Ru),
        hasUnreliableAtIndex: (uu, Ru) => uu?.[Uu]?.includes(Ru),
        hasPatchOnlyAtIndex: (uu, Ru) => uu?.[nu]?.includes(Ru),
        hasFullStateOnlyAtIndex: (uu, Ru) => uu?.[tu]?.includes(Ru),
        hasStreamAtIndex: (uu, Ru) => uu?.[lu]?.includes(Ru)
      },
      qR = (uu, Ru, yu) => uu(Ru, yu);
    class OR {
      dirtyLow = 0;
      dirtyHigh = 0;
      ops;
      constructor(uu) {
        this.ops = new Uint8Array(Math.max(uu + 1, 1))
      }
      record(uu, Ru) {
        const yu = this.ops[uu];
        0 === yu ? this.ops[uu] = Ru : (yu === Ku.DELETE || yu === Ku.ADD && Ru === Ku.DELETE_AND_ADD) && (this.ops[uu] = Ku.DELETE_AND_ADD), uu < 32 ? this.dirtyLow |= 1 << uu : this.dirtyHigh |= 1 << uu - 32
      }
      recordDelete(uu, Ru) {
        this.ops[uu] = Ru, uu < 32 ? this.dirtyLow |= 1 << uu : this.dirtyHigh |= 1 << uu - 32
      }
      recordRaw(uu, Ru) {
        this.record(uu, Ru)
      }
      operationAt(uu) {
        const Ru = this.ops[uu];
        return 0 === Ru ? void 0 : Ru
      }
      setOperationAt(uu, Ru) {
        this.ops[uu] = Ru
      }
      forEach(uu) {
        this.forEachWithCtx(uu, qR)
      }
      forEachWithCtx(uu, Ru) {
        let yu = this.dirtyLow,
          Eu = this.dirtyHigh;
        const Ku = this.ops;
        for (; 0 !== yu;) {
          const Eu = yu & -yu,
            Qu = 31 - Math.clz32(Eu);
          yu ^= Eu, Ru(uu, Qu, Ku[Qu])
        }
        for (; 0 !== Eu;) {
          const yu = Eu & -Eu,
            Qu = 31 - Math.clz32(yu) + 32;
          Eu ^= yu, Ru(uu, Qu, Ku[Qu])
        }
      }
      size() {
        return aR(this.dirtyLow) + aR(this.dirtyHigh)
      }
      has() {
        return 0 !== (this.dirtyLow | this.dirtyHigh)
      }
      reset() {
        this.dirtyLow = 0, this.dirtyHigh = 0, this.ops.fill(0)
      }
    }
    class vR {
      tS = new Map;
      pureOps = [];
      record(uu, Ru) {
        const yu = this.tS.get(uu);
        void 0 === yu ? this.tS.set(uu, Ru) : (yu === Ku.DELETE || yu === Ku.ADD && Ru === Ku.DELETE_AND_ADD) && this.tS.set(uu, Ku.DELETE_AND_ADD)
      }
      recordDelete(uu, Ru) {
        this.tS.set(uu, Ru)
      }
      recordRaw(uu, Ru) {
        this.tS.set(uu, Ru)
      }
      recordPure(uu) {
        this.pureOps.push([this.tS.size, uu])
      }
      operationAt(uu) {
        return this.tS.get(uu)
      }
      setOperationAt(uu, Ru) {
        this.tS.has(uu) && this.tS.set(uu, Ru)
      }
      forEach(uu) {
        this.forEachWithCtx(uu, qR)
      }
      forEachWithCtx(uu, Ru) {
        const yu = this.pureOps;
        if (yu.length > 0) {
          let Eu = 0,
            Ku = 0;
          for (const [Qu, mu] of this.tS) {
            for (; Eu < yu.length && yu[Eu][0] <= Ku;) {
              const Ku = yu[Eu++][1];
              Ru(uu, -Ku, Ku)
            }
            Ru(uu, Qu, mu), Ku++
          }
          for (; Eu < yu.length;) {
            const Ku = yu[Eu++][1];
            Ru(uu, -Ku, Ku)
          }
        } else
          for (const [Eu, Ku] of this.tS) Ru(uu, Eu, Ku)
      }
      size() {
        return this.tS.size + this.pureOps.length
      }
      has() {
        return this.tS.size > 0 || this.pureOps.length > 0
      }
      reset() {
        this.tS.clear(), this.pureOps.length = 0
      }
      shift(uu) {
        const Ru = new Map;
        for (const [yu, Eu] of this.tS) Ru.set(yu + uu, Eu);
        this.tS = Ru
      }
    }

    function aR(uu) {
      return 16843009 * ((uu = (858993459 & (uu -= uu >>> 1 & 1431655765)) + (uu >>> 2 & 858993459)) + (uu >>> 4) & 252645135) >>> 24
    }

    function fR(uu) {
      if (void 0 === uu) return 0;
      let Ru = 0;
      for (let yu = 0, Eu = uu.length; yu < Eu; yu++) {
        const Eu = uu[yu];
        Eu < 32 && (Ru |= 1 << Eu)
      }
      return Ru
    }

    function uy(uu) {
      const Ru = uu.constructor;
      if (Object.prototype.hasOwnProperty.call(Ru, eu)) return Ru[eu];
      const yu = Ru[Symbol.metadata],
        Eu = oR.isValidInstance(uu),
        Ku = (yu?.[Iu]?.length ?? 0) > 0,
        Qu = function(uu) {
          const Ru = [],
            yu = [],
            Eu = [],
            Ku = [],
            Qu = uu?.[Du];
          if (void 0 === Qu) return {
            names: Ru,
            types: yu,
            tags: Eu,
            encoders: Ku
          };
          const mu = uu[Au];
          for (let Ju = 0; Ju <= Qu; Ju++) {
            const Qu = uu[Ju];
            void 0 !== Qu ? (Ru[Ju] = Qu.name, yu[Ju] = Qu.type, Eu[Ju] = Qu.tag, Ku[Ju] = mu?.[Ju]) : (Ru[Ju] = void 0, yu[Ju] = void 0, Eu[Ju] = void 0, Ku[Ju] = void 0)
          }
          return {
            names: Ru,
            types: yu,
            tags: Eu,
            encoders: Ku
          }
        }(yu),
        mu = Eu && !Ku ? void 0 : Ru[ru],
        Ju = {
          encoder: Ru[Xu],
          filter: mu,
          metadata: yu,
          isSchema: Eu,
          filterBitmask: Eu ? fR(yu?.[Iu]) : 0,
          hasAnyFullStateOnly: (yu?.[tu]?.length ?? 0) > 0,
          hasAnyUnreliable: (yu?.[Uu]?.length ?? 0) > 0,
          hasAnyStream: (yu?.[lu]?.length ?? 0) > 0,
          hasAnyView: Ku,
          fullStateOnlyBitmask: fR(yu?.[tu]),
          unreliableBitmask: fR(yu?.[Uu]),
          streamBitmask: fR(yu?.[lu]),
          names: Qu.names,
          types: Qu.types,
          tags: Qu.tags,
          encoders: Qu.encoders
        };
      return Object.defineProperty(Ru, eu, {
        value: Ju,
        enumerable: !1,
        writable: !0,
        configurable: !0
      }), Ju
    }

    function Ry(uu, Ru) {
      if (void 0 !== uu.parentRef && Ru(uu.parentRef, uu._parentIndex)) return !0;
      for (let yu = uu.extraParents; void 0 !== yu; yu = yu.next)
        if (Ru(yu.ref, yu.index)) return !0;
      return !1
    }
    const yy = (uu, Ru) => {
        uu.isFieldUnreliable(Ru) ? uu.ensureUnreliableRecorder().record(Ru, Ku.ADD) : uu.record(Ru, Ku.ADD)
      },
      Ey = (uu, Ru) => uu(Ru);

    function Ky(uu, Ru, yu) {
      const Eu = uu.refTarget;
      if (void 0 !== Eu[Tu]) {
        if (uu.isPatchOnly) return;
        if (Array.isArray(Eu.items)) {
          const uu = Eu.items;
          for (let Eu = 0, Ku = uu.length; Eu < Ku; Eu++) void 0 !== uu[Eu] && yu(Ru, Eu)
        } else if (void 0 !== Eu.journal)
          for (const [uu, Ku] of Eu.journal.keyByIndex) Eu.$items.has(Ku) && yu(Ru, uu);
        else if (void 0 !== Eu.$items)
          for (const uu of Eu.$items.keys()) yu(Ru, uu)
      } else {
        const Ku = uu.metadata;
        if (!Ku) return;
        const Qu = Ku[Du] ?? -1,
          mu = Ku[su],
          Ju = uu.encDescriptor.names;
        for (let uu = 0; uu <= Qu; uu++) {
          const Ku = Ju[uu];
          if (void 0 === Ku) continue;
          if (mu && mu.includes(uu)) continue;
          const Qu = Eu[Ku];
          void 0 !== Qu && null !== Qu && yu(Ru, uu)
        }
      }
    }

    function Qy(uu, Ru, yu, Eu) {
      ! function(uu, Ru, yu) {
        if (!Ru) return;
        const Eu = Ru[pu],
          Ku = !Eu._isSchema;
        let Qu;
        Ku ? (Ru = Eu.parent, yu = Eu.parentIndex, Qu = Ru?.[pu].metadata) : Qu = Eu.metadata;
        const mu = (Qu?.[nu]?.includes(yu) ? ey : 0) | (Qu?.[tu]?.includes(yu) ? Ay : 0),
          Ju = Eu.flags & Iy | mu,
          Nu = uu.flags;
        uu.flags = Nu | Ju;
        Ju & ~Nu & Ay && (uu.reset(), uu.unreliableRecorder?.reset());
        const Xu = uu.root?.types;
        if (!Xu?.hasFilters) return;
        const Vu = Qu?.[Iu]?.includes(yu) ?? !1,
          ru = Qu?.[lu]?.includes(yu) ?? !1,
          Bu = Eu.isFiltered || Vu || ru;
        if (uu.isFiltered = Bu, ru && !Ku) {
          uu.isStreamCollection = !0;
          const Ru = DR(uu.ref);
          if (void 0 === Ru.priority) {
            const uu = oR.getStreamPriority(Qu, yu);
            void 0 !== uu && (Ru.priority = uu)
          }
          uu.root?.registerStream(uu.ref)
        }
        if (Bu) {
          const Ru = Jy(uu);
          uu.isVisibilitySharedWithParent = Eu.isFiltered && Ru && !ru && (!Vu || Ku && Qu[yu].tag !== SE)
        }
      }(uu, Ru, yu), uu.isFullStateOnly || (uu.has() && uu.root?.enqueueChangeTree(uu), uu.unreliableRecorder?.has() && uu.root?.enqueueUnreliable(uu), uu.has() || uu.unreliableRecorder?.has() || uu.root?.enqueueChangeTree(uu))
    }

    function my(uu) {
      const Ru = uu.pendingFilterRefresh;
      for (let yu = 0; yu < Ru.length; yu++) {
        const uu = Ru[yu];
        0 !== (uu.flags & My) && Ny(uu)
      }
      Ru.length = 0
    }

    function Jy(uu) {
      return uu._isSchema || "string" !== typeof uu.refTarget[Tu]
    }

    function Ny(uu) {
      uu.flags &= ~My;
      const Ru = uu.root;
      if (void 0 === Ru || void 0 === uu.parentRef) return;
      const yu = Jy(uu);
      let Eu = xy(uu, uu.parentRef, uu._parentIndex, yu);
      for (let Qu = uu.extraParents; void 0 !== Qu && Eu !== By; Qu = Qu.next) Eu |= xy(uu, Qu.ref, Qu.index, yu);
      if (0 === Eu) return;
      uu.isVisibilitySharedWithParent = 0 !== (Eu & ry);
      const Ku = 0 === (Eu & Vy);
      Ku !== uu.isFiltered && (uu.isFiltered = Ku, Ku || uu.isFullStateOnly || (uu.forEachLiveWithCtx(uu, yy), uu.has() && Ru.enqueueChangeTree(uu), uu.unreliableRecorder?.has() && Ru.enqueueUnreliable(uu)), uu.forEachChildWithCtx(uu, Sy))
    }
    const Xy = 1,
      Vy = 2,
      ry = 4,
      By = Xy | Vy | ry;

    function xy(uu, Ru, yu, Eu) {
      const Ku = Ru[pu];
      if (Ku.root !== uu.root || ! function(uu, Ru, yu) {
          const Eu = Ru.refTarget;
          if (Ru.isArray) {
            const Ru = Eu.items,
              Ku = Ru[yu];
            if (void 0 !== Ku && Ku[pu] === uu) return !0;
            for (let yu = 0, Eu = Ru.length; yu < Eu; yu++) {
              const Eu = Ru[yu];
              if (void 0 !== Eu && Eu[pu] === uu) return !0
            }
            return !1
          }
          const Ku = Ru.getValue(yu);
          return void 0 !== Ku && Ku[pu] === uu
        }(uu, Ku, yu)) return 0;
      Ku.flags & My && Ny(Ku);
      let Qu = Xy;
      if (Ku._isSchema) {
        void 0 !== Ku.encDescriptor.tags[yu] || Ku.isFieldStream(yu) || (Ku.isFiltered ? Eu && (Qu |= ry) : Qu |= Vy)
      } else if (Ku.isFiltered) {
        if (Eu && !Ku.isStreamCollection) {
          const uu = Ku.parent?.[pu];
          (uu?._isSchema ? uu.encDescriptor.tags[Ku.parentIndex] : void 0) !== SE && (Qu |= ry)
        }
      } else Qu |= Vy;
      return Qu
    }
    const Sy = (uu, Ru, yu) => {
      Ny(Ru)
    };

    function py(uu, Ru, yu, Eu) {
      if (uu.addParent(Ru, Eu), !yu) return;
      const Ku = yu.add(uu);
      yu !== uu.root && (uu.root = yu, Qy(uu, Ru, Eu));
      const Qu = Ru?.[pu];
      if (void 0 !== Qu && void 0 !== Qu.subscribedViews && void 0 !== Ru[Tu] && function(uu, Ru, yu, Eu) {
          const Ku = uu.subscribedViews;
          if (void 0 === Ku) return;
          const Qu = uu.isStreamCollection,
            mu = Qu ? uu.ref : void 0,
            Ju = Qu ? void 0 : yu[pu];
          for (let Nu = 0, Xu = Ku.length; Nu < Xu; Nu++) {
            let uu = Ku[Nu];
            for (; 0 !== uu;) {
              const yu = uu & -uu;
              uu ^= yu;
              const Xu = 32 * Nu + (31 - Math.clz32(yu)),
                Vu = Eu.activeViews.get(Xu),
                ru = Vu?.deref();
              void 0 !== ru ? Qu ? nR(mu, Xu, Ru) : void 0 !== Ju && ru.markVisible(Ju) : Ku[Nu] &= ~yu
            }
          }
        }(Qu, Eu, uu.ref, yu), Ku) {
        let Ru = Hy[dy];
        void 0 === Ru && (Ru = {
          parentRef: void 0,
          root: void 0
        }, Hy[dy] = Ru), Ru.parentRef = uu.ref, Ru.root = yu, dy++, Wy(uu, Ru, by), dy--
      }
    }

    function Ty(uu, Ru, yu) {
      uu(Ru, yu)
    }

    function Wy(uu, Ru, yu) {
      const Eu = uu.refTarget;
      if (Eu[Tu]) {
        if ("string" !== typeof Eu[Tu]) {
          const uu = Eu.items;
          if (void 0 !== uu)
            for (let Eu = 0, Ku = uu.length; Eu < Ku; Eu++) {
              const Ku = uu[Eu];
              Ku && yu(Ru, Ku[pu], Eu)
            } else {
              const uu = Eu.$items,
                Ku = Eu._collectionIndexes;
              for (const Eu of uu.keys()) {
                const Qu = uu.get(Eu);
                Qu && yu(Ru, Qu[pu], Ku?.[Eu] ?? Eu)
              }
            }
        }
      } else {
        const Ku = uu.metadata,
          Qu = Ku?.[Mu];
        if (!Qu) return;
        const mu = uu.encDescriptor.names;
        for (let uu = 0, Ju = Qu.length; uu < Ju; uu++) {
          const Ku = Qu[uu],
            Ju = Eu[mu[Ku]];
          Ju && yu(Ru, Ju[pu], Ku)
        }
      }
    }

    function jy(uu, Ru, yu) {
      Ru.root !== uu ? Ru.setRoot(uu) : uu.add(Ru)
    }
    const Hy = [];
    let dy = 0;

    function by(uu, Ru, yu) {
      if (Ru.root === uu.root) return uu.root.add(Ru), void uu.root.moveNextToParent(Ru);
      Ru.setParent(uu.parentRef, uu.root, yu)
    }

    function Cy(uu, Ru, yu) {
      const Eu = (3 & yu) << 3;
      return yu < 4 ? uu >>> Eu & 255 : Ru >>> Eu & 255
    }
    const ky = (uu, Ru, yu) => uu(Ru, yu);
    const ey = 16,
      Ay = 32,
      Dy = 128,
      My = 256,
      Iy = ey | Ay;
    class Gy {
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
        return 0 !== (this.flags & ey)
      }
      set isPatchOnly(uu) {
        this.flags = uu ? this.flags | ey : this.flags & ~ey
      }
      get isFullStateOnly() {
        return 0 !== (this.flags & Ay)
      }
      set isFullStateOnly(uu) {
        this.flags = uu ? this.flags | Ay : this.flags & ~Ay
      }
      get isStreamCollection() {
        return 0 !== (64 & this.flags)
      }
      set isStreamCollection(uu) {
        this.flags = uu ? 64 | this.flags : -65 & this.flags
      }
      get needsRestage() {
        return 0 !== (this.flags & Dy)
      }
      set needsRestage(uu) {
        this.flags = uu ? this.flags | Dy : -129 & this.flags
      }
      get hasFilteredFields() {
        return this.isFiltered || this.encDescriptor.hasAnyView
      }
      ensureUnreliableRecorder() {
        return void 0 === this.unreliableRecorder && (this.unreliableRecorder = this._isSchema ? new OR(this.metadata?.[Du] ?? 0) : new vR), this.unreliableRecorder
      }
      isFieldUnreliable(uu) {
        const Ru = this.encDescriptor;
        return !!Ru.hasAnyUnreliable && (uu < 32 ? 0 !== (Ru.unreliableBitmask & 1 << uu) : oR.hasUnreliableAtIndex(this.metadata, uu))
      }
      isFieldFullStateOnly(uu) {
        if (this.isFullStateOnly) return !0;
        const Ru = this.encDescriptor;
        return !!Ru.hasAnyFullStateOnly && (uu < 32 ? 0 !== (Ru.fullStateOnlyBitmask & 1 << uu) : oR.hasFullStateOnlyAtIndex(this.metadata, uu))
      }
      isFieldStream(uu) {
        const Ru = this.encDescriptor;
        return !!Ru.hasAnyStream && (uu < 32 ? 0 !== (Ru.streamBitmask & 1 << uu) : oR.hasStreamAtIndex(this.metadata, uu))
      }
      constructor(uu) {
        let Ru = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : uu;
        this.ref = uu, this.refTarget = Ru;
        const yu = uy(uu);
        this.encDescriptor = yu, this.metadata = yu.metadata;
        const Eu = yu.isSchema;
        if (this._isSchema = Eu, this.ops = void 0, this.collDirty = void 0, this.collPureOps = void 0, Eu) {
          const uu = this.metadata?.[Du] ?? 0;
          uu > 7 && (this.ops = new Uint8Array(uu + 1))
        } else this.collDirty = new Map
      }
      _opAt(uu) {
        const Ru = this.ops;
        if (void 0 !== Ru) return Ru[uu];
        const yu = (3 & uu) << 3;
        return uu < 4 ? this.opsLow >>> yu & 255 : this.opsHigh >>> yu & 255
      }
      _opPut(uu, Ru) {
        const yu = this.ops;
        if (void 0 !== yu) return void(yu[uu] = Ru);
        const Eu = (3 & uu) << 3,
          Ku = ~(255 << Eu);
        uu < 4 ? this.opsLow = this.opsLow & Ku | Ru << Eu : this.opsHigh = this.opsHigh & Ku | Ru << Eu
      }
      _markDirty(uu) {
        uu < 32 ? this.dirtyLow |= 1 << uu : this.dirtyHigh |= 1 << uu - 32
      }
      record(uu, Ru) {
        if (this._isSchema) {
          const yu = this._opAt(uu);
          0 === yu ? this._opPut(uu, Ru) : (yu === Ku.DELETE || yu === Ku.ADD && Ru === Ku.DELETE_AND_ADD) && this._opPut(uu, Ku.DELETE_AND_ADD), this._markDirty(uu)
        } else {
          const yu = this.collDirty,
            Eu = yu.get(uu);
          let Qu;
          Qu = void 0 === Eu ? Ru : Eu === Ku.DELETE || Eu === Ku.ADD && Ru === Ku.DELETE_AND_ADD ? Ku.DELETE_AND_ADD : Eu, yu.set(uu, Qu)
        }
      }
      recordDelete(uu, Ru) {
        this._isSchema ? (this._opPut(uu, Ru), this._markDirty(uu)) : this.collDirty.set(uu, Ru)
      }
      recordRaw(uu, Ru) {
        this._isSchema ? (this._opPut(uu, Ru), this._markDirty(uu)) : this.collDirty.set(uu, Ru)
      }
      recordPure(uu) {
        if (this._isSchema) throw new Error("ChangeTree (Schema): pure operations are not supported");
        (this.collPureOps ??= []).push([this.collDirty.size, uu])
      }
      operationAt(uu) {
        if (this._isSchema) {
          const Ru = this._opAt(uu);
          return 0 === Ru ? void 0 : Ru
        }
        return this.collDirty.get(uu)
      }
      setOperationAt(uu, Ru) {
        if (this._isSchema) this._opPut(uu, Ru);
        else {
          const yu = this.collDirty;
          yu.has(uu) && yu.set(uu, Ru)
        }
      }
      forEach(uu) {
        this.forEachWithCtx(uu, ky)
      }
      forEachWithCtx(uu, Ru) {
        if (this._isSchema) {
          let yu = this.dirtyLow,
            Eu = this.dirtyHigh;
          const Ku = this.ops;
          if (void 0 !== Ku) {
            for (; 0 !== yu;) {
              const Eu = yu & -yu,
                Qu = 31 - Math.clz32(Eu);
              yu ^= Eu, Ru(uu, Qu, Ku[Qu])
            }
            for (; 0 !== Eu;) {
              const yu = Eu & -Eu,
                Qu = 31 - Math.clz32(yu) + 32;
              Eu ^= yu, Ru(uu, Qu, Ku[Qu])
            }
          } else {
            const Eu = this.opsLow,
              Ku = this.opsHigh;
            for (; 0 !== yu;) {
              const Qu = yu & -yu,
                mu = 31 - Math.clz32(Qu);
              yu ^= Qu, Ru(uu, mu, Cy(Eu, Ku, mu))
            }
          }
          return
        }
        const yu = this.collDirty,
          Eu = this.collPureOps;
        if (void 0 !== Eu && Eu.length > 0) {
          let Ku = 0,
            Qu = 0;
          for (const [mu, Ju] of yu) {
            for (; Ku < Eu.length && Eu[Ku][0] <= Qu;) {
              const yu = Eu[Ku++][1];
              Ru(uu, -yu, yu)
            }
            Ru(uu, mu, Ju), Qu++
          }
          for (; Ku < Eu.length;) {
            const yu = Eu[Ku++][1];
            Ru(uu, -yu, yu)
          }
        } else
          for (const [Ku, Qu] of yu) Ru(uu, Ku, Qu)
      }
      size() {
        return this._isSchema ? aR(this.dirtyLow) + aR(this.dirtyHigh) : this.collDirty.size + (this.collPureOps?.length ?? 0)
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
      insertAt(uu, Ru) {
        if (this._isSchema) throw new Error("ChangeTree (Schema): insertAt is not supported");
        const yu = this.collDirty,
          Eu = new Map,
          Qu = !this.paused && !this.isFullStateOnly;
        if (uu > 0)
          for (const [Ku, mu] of yu) Ku < uu && Eu.set(Ku, mu);
        if (Qu)
          for (let mu = 0; mu < Ru; mu++) Eu.set(uu + mu, Ku.ADD);
        for (const [Ku, mu] of yu) Ku >= uu && Eu.set(Ku + Ru, mu);
        this.collDirty = Eu, Qu && this.root?.enqueueChangeTree(this)
      }
      removeAt(uu, Ru) {
        if (this._isSchema) throw new Error("ChangeTree (Schema): removeAt is not supported");
        const yu = this.collDirty,
          Eu = uu + Ru;
        let Ku = !1;
        for (const mu of yu.keys())
          if (mu >= Eu) {
            Ku = !0;
            break
          } if (!Ku) {
          for (let Ru = uu; Ru < Eu; Ru++) yu.delete(Ru);
          return
        }
        const Qu = new Map;
        for (const [mu, Ju] of yu) mu < uu ? Qu.set(mu, Ju) : mu >= Eu && Qu.set(mu - Ru, Ju);
        this.collDirty = Qu
      }
      unshift(uu) {
        this.insertAt(0, uu)
      }
      setRoot(uu) {
        ! function(uu, Ru) {
          uu.root = Ru;
          const yu = Ru.add(uu);
          Qy(uu, uu.parent, uu.parentIndex), yu && Wy(uu, Ru, jy)
        }(this, uu)
      }
      setParent(uu, Ru, yu) {
        py(this, uu, Ru, yu)
      }
      forEachChild(uu) {
        Wy(this, uu, Ty)
      }
      forEachChildWithCtx(uu, Ru) {
        Wy(this, uu, Ru)
      }
      forEachLive(uu) {
        Ky(this, uu, Ey)
      }
      forEachLiveWithCtx(uu, Ru) {
        Ky(this, uu, Ru)
      }
      operation(uu) {
        this.paused || this.isFullStateOnly || (this.recordPure(uu), this.root?.enqueueChangeTree(this))
      }
      _routeAndRecord(uu, Ru, yu) {
        if (!this.paused && !this.isFieldFullStateOnly(uu)) {
          if (this.isFieldUnreliable(uu) && !this.isNew) {
            const Eu = this.ensureUnreliableRecorder();
            return yu ? Eu.recordRaw(uu, Ru) : Eu.record(uu, Ru), void this.root?.enqueueUnreliable(this)
          }
          yu ? this.recordRaw(uu, Ru) : this.record(uu, Ru), this.root?.enqueueChangeTree(this)
        }
      }
      change(uu) {
        let Ru = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Ku.ADD;
        this._routeAndRecord(uu, Ru, !1)
      }
      indexedOperation(uu, Ru) {
        this._routeAndRecord(uu, Ru, !0)
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
        const Ru = this.paused;
        this.paused = !0;
        try {
          return uu()
        } finally {
          this.paused = Ru
        }
      }
      markDirty(uu) {
        let Ru = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Ku.ADD;
        const yu = this.paused;
        this.paused = !1;
        try {
          this.change(uu, Ru)
        } finally {
          this.paused = yu
        }
      }
      getValue(uu) {
        let Ru = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return this.refTarget[Bu](uu, Ru)
      }
      delete(uu, Ru) {
        if (void 0 === uu) {
          try {
            throw new Error(`@colyseus/schema ${this.ref.constructor.name}: trying to delete non-existing index '${uu}'`)
          } catch (QK) {
            console.warn(QK)
          }
          return
        }
        if (this.paused || this.isFieldFullStateOnly(uu)) return this.getValue(uu);
        const yu = this.isFieldUnreliable(uu) && !this.isNew;
        yu ? this.ensureUnreliableRecorder().recordDelete(uu, Ru ?? Ku.DELETE) : this.recordDelete(uu, Ru ?? Ku.DELETE);
        const Eu = this.getValue(uu);
        return Eu && Eu[pu] && this.root?.remove(Eu[pu]), yu ? this.root?.enqueueUnreliable(this) : this.root?.enqueueChangeTree(this), Eu
      }
      endEncode() {
        this.reset(), this.changesNode = void 0, this._isSchema || this.refTarget[ju]?.(), this.isNew = !1
      }
      endEncodeUnreliable() {
        this.unreliableRecorder?.reset(), this.unreliableChangesNode = void 0, this._isSchema || this.refTarget[ju]?.()
      }
      discard() {
        this._isSchema || this.refTarget[ju]?.(), this.reset(), this.unreliableRecorder?.reset()
      }
      discardAll() {
        const uu = uu => {
          if (uu < 0) return;
          const Ru = this.getValue(uu);
          Ru && Ru[pu] && Ru[pu].discardAll()
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
      addParent(uu, Ru) {
        ! function(uu, Ru, yu) {
          if (uu.parentRef) {
            if (uu.parentRef[pu] === Ru[pu]) return void(uu._parentIndex = yu);
            if (Ry(uu, ((uu, yu) => uu[pu] === Ru[pu]))) return void(uu._parentIndex = yu)
          }
          void 0 === uu.parentRef ? (uu.parentRef = Ru, uu._parentIndex = yu) : (uu.extraParents = {
            ref: uu.parentRef,
            index: uu._parentIndex,
            next: uu.extraParents
          }, uu.parentRef = Ru, uu._parentIndex = yu)
        }(this, uu, Ru)
      }
      setParentIndex(uu, Ru) {
        ! function(uu, Ru, yu) {
          if (void 0 !== uu.extraParents)
            if (uu.parentRef[pu] !== Ru[pu]) {
              for (let Eu = uu.extraParents; void 0 !== Eu; Eu = Eu.next)
                if (Eu.ref[pu] === Ru[pu]) return void(Eu.index = yu)
            } else uu._parentIndex = yu;
          else uu._parentIndex = yu
        }(this, uu, Ru)
      }
      removeParent() {
        return function(uu, Ru) {
          if (uu.parentRef && uu.parentRef[pu] === Ru[pu]) return uu.extraParents ? (uu.parentRef = uu.extraParents.ref, uu._parentIndex = uu.extraParents.index, uu.extraParents = uu.extraParents.next) : (uu.parentRef = void 0, uu._parentIndex = void 0), !0;
          let yu = uu.extraParents,
            Eu = null;
          for (; yu;) {
            if (yu.ref[pu] === Ru[pu]) return Eu ? Eu.next = yu.next : uu.extraParents = yu.next, !0;
            Eu = yu, yu = yu.next
          }
          return void 0 === uu.parentRef
        }(this, arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.parent)
      }
      findParent(uu) {
        return function(uu, Ru) {
          if (void 0 !== uu.parentRef && Ru(uu.parentRef, uu._parentIndex)) return {
            ref: uu.parentRef,
            index: uu._parentIndex
          };
          for (let yu = uu.extraParents; void 0 !== yu; yu = yu.next)
            if (Ru(yu.ref, yu.index)) return {
              ref: yu.ref,
              index: yu.index
            }
        }(this, uu)
      }
      hasParent(uu) {
        return Ry(this, uu)
      }
      indexInParent(uu) {
        return function(uu, Ru) {
          if (uu.parentRef && uu.parentRef[pu] === Ru[pu]) return uu._parentIndex;
          for (let yu = uu.extraParents; void 0 !== yu; yu = yu.next)
            if (yu.ref[pu] === Ru[pu]) return yu.index
        }(this, uu)
      }
      getAllParents() {
        return function(uu) {
          const Ru = [];
          uu.parentRef && Ru.push({
            ref: uu.parentRef,
            index: uu._parentIndex
          });
          let yu = uu.extraParents;
          for (; yu;) Ru.push({
            ref: yu.ref,
            index: yu.index
          }), yu = yu.next;
          return Ru
        }(this)
      }
    }
    class Uy {
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
        const Ru = this.ref;
        if (Ru[Tu]) {
          if ("string" !== typeof Ru[Tu])
            for (const [yu, Eu] of Ru.entries()) Eu && uu(Eu[pu], Ru._collectionIndexes?.[yu] ?? yu);
          return
        }
        const yu = Ru.constructor,
          Eu = yu?.[Symbol.metadata];
        if (!Eu) return;
        const Ku = Eu[Mu] ?? [];
        for (let Qu = 0; Qu < Ku.length; Qu++) {
          const yu = Ku[Qu],
            mu = Ru[Eu[yu].name];
          mu && uu(mu[pu], yu)
        }
      }
      forEachChildWithCtx(uu, Ru) {
        this.forEachChild(((yu, Eu) => Ru(uu, yu, Eu)))
      }
      forEachLive() {}
      forEachLiveWithCtx() {}
      forEach() {}
    }

    function ny(uu) {
      let Ru = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : uu;
      var yu;
      Object.defineProperty(uu, pu, {
        value: (yu = Ru, new Uy(yu)),
        enumerable: !1,
        writable: !0
      })
    }

    function sy(uu, Ru, yu, Eu, Qu, mu, Nu) {
      void 0 !== Nu ? Nu(Ru, Eu, mu) : "string" === typeof yu ? RR[yu]?.(Ru, Eu, mu) : null != yu[Symbol.metadata] ? (RR.number(Ru, Eu[Ju], mu), (Qu & Ku.ADD) === Ku.ADD && uu.tryEncodeTypeId(Ru, yu, Eu.constructor, mu)) : RR.number(Ru, Eu[Ju], mu)
    }
    const ty = function(uu, Ru, yu, Eu, Qu, mu, Ju, Nu) {
        if (Ru[mu.offset++] = 255 & (Eu | Qu), Qu === Ku.DELETE) return;
        const Xu = yu.encDescriptor,
          Vu = yu.ref,
          ru = Vu[bu][Eu] ?? Vu[Xu.names[Eu]];
        sy(uu, Ru, Xu.types[Eu], ru, Qu, mu, Xu.encoders[Eu])
      },
      ly = function(uu, Ru, yu, Eu, Qu, mu) {
        if (Ru[mu.offset++] = 255 & Qu, RR.number(Ru, Eu, mu), Qu === Ku.DELETE) return;
        const Ju = yu.ref;
        if ((Qu & Ku.ADD) === Ku.ADD) {
          const uu = Ju.$indexes.get(Eu);
          RR.string(Ru, uu, mu)
        }
        sy(uu, Ru, Ju[Tu], Ju[Bu](Eu), Qu, mu)
      },
      gy = function(uu, Ru, yu, Eu, Qu, mu) {
        if (Ru[mu.offset++] = 255 & Qu, RR.number(Ru, Eu, mu), Qu === Ku.DELETE) return;
        const Ju = yu.ref;
        sy(uu, Ru, Ju[Tu], Ju[Bu](Eu), Qu, mu)
      },
      cy = function(uu, Ru, yu, Eu, Qu, mu) {
        const Ju = yu.ref;
        (Qu & Ku.ADD) === Ku.ADD && "function" === typeof Ju.set ? ly(uu, Ru, yu, Eu, Qu, mu) : gy(uu, Ru, yu, Eu, Qu, mu)
      },
      Ly = function(uu, Ru, yu, Eu, Qu, mu, Nu, Xu) {
        const Vu = yu.refTarget,
          ru = Vu[Tu],
          xu = "string" !== typeof ru;
        let Su;
        if (Xu && yu.isFiltered && xu) {
          const uu = Vu.tmpItems[Eu];
          if (!uu) return;
          if (Su = uu[Ju], Qu === Ku.DELETE) Qu = Ku.DELETE_BY_REFID;
          else if ((Qu & Ku.ADD) === Ku.ADD) Qu = Ku.ADD_BY_REFID;
          else if ((Qu & Ku.MOVE) === Ku.MOVE) return
        } else if (Qu === Ku.DELETE && xu) {
          const uu = Vu.tmpItems[Eu];
          if (!uu) return;
          Su = uu[Ju], Qu = Ku.DELETE_BY_REFID
        } else Su = Eu;
        if (Ru[mu.offset++] = 255 & Qu, RR.number(Ru, Su, mu), Qu === Ku.DELETE || Qu === Ku.DELETE_BY_REFID) return;
        sy(uu, Ru, ru, Vu[Bu](Eu, Nu), Qu, mu)
      };

    function zy(uu, Ru, yu, Eu, Qu, mu, Nu) {
      const Xu = uu.resyncVisited;
      let Vu = Xu.get(uu.currentRefId);
      if (void 0 === Vu && Xu.set(uu.currentRefId, Vu = new Set), Vu.add(Eu), void 0 !== Qu && yu === Ku.ADD && Qu !== mu) {
        const yu = Qu[Ju];
        void 0 !== yu && (uu.root.removeRef(yu), Nu?.push({
          ref: Ru,
          refId: uu.currentRefId,
          op: Ku.DELETE,
          dynamicIndex: Eu,
          value: void 0,
          previousValue: Qu
        }))
      }
    }

    function Fy(uu, Ru, yu, Eu) {
      const Ku = Ru[Ju];
      if (void 0 === Ku || yu.has(Ku)) return;
      yu.add(Ku);
      const Qu = Ru.constructor[Symbol.metadata],
        mu = Qu?.[Mu];
      if (void 0 === mu) return;
      const Nu = Qu[nu];
      for (let Ju = 0; Ju < mu.length; Ju++) {
        const Ku = mu[Ju];
        if (void 0 !== Nu && Nu.includes(Ku)) continue;
        const Xu = Qu[Ku],
          Vu = Ru[Xu.name];
        Vu && (IE.is(Xu.type) ? Fy(uu, Vu, yu, Eu) : wy(uu, Vu, yu, Eu))
      }
    }

    function wy(uu, Ru, yu, Eu) {
      const Qu = Ru[Wu] ?? Ru,
        mu = Qu[Ju];
      if (void 0 === mu || yu.has(mu)) return;
      yu.add(mu);
      const Nu = uu.resyncVisited.get(mu);
      if (void 0 === Nu) return;
      const Xu = uu.root;
      Qu[Su](Nu, ((uu, yu) => {
        Eu?.push({
          ref: Ru,
          refId: mu,
          op: Ku.DELETE,
          dynamicIndex: yu,
          value: void 0,
          previousValue: uu
        });
        const Qu = uu?.[Ju];
        void 0 !== Qu && Xu.removeRef(Qu)
      }), (Ru => {
        IE.isSchema(Ru) && Fy(uu, Ru, yu, Eu)
      }))
    }
    const Zy = 1,
      hy = 2,
      Py = 3,
      iy = 4,
      Yy = 5;

    function oy(uu, Ru, yu, Eu, Qu, mu, Nu, Xu, Vu) {
      const ru = uu.root;
      let Bu;
      if ((Ru & Ku.DELETE) === Ku.DELETE) {
        const uu = Qu?.[Ju];
        void 0 !== uu && ru.removeRef(uu), Ru !== Ku.DELETE_AND_ADD && yu[xu](Eu), Bu = void 0
      }
      if (Ru === Ku.DELETE);
      else if ("string" === typeof mu) Bu = HR[mu](Nu, Xu);
      else if (gR(mu)) Bu = function(uu, Ru, yu) {
        return LR(uu, (0, HR[uu.wire])(Ru, yu))
      }(mu.quantized, Nu, Xu);
      else if (IE.is(mu)) {
        const yu = HR.number(Nu, Xu);
        if (Bu = ru.refs.get(yu), (Ru & Ku.ADD) === Ku.ADD) {
          const Eu = uu.getInstanceType(Nu, Xu, mu);
          Bu || (Bu = uu.createInstanceOfType(Eu)), ru.addRef(yu, Bu, Bu !== Qu || Ru === Ku.DELETE_AND_ADD && Bu === Qu)
        }
      } else {
        const yu = (Su = Object.keys(mu)[0], dR[Su]),
          Eu = HR.number(Nu, Xu);
        null !== uu.resyncVisited && function(uu, Ru) {
          const yu = uu.resyncVisited;
          yu.has(Ru) || yu.set(Ru, new Set)
        }(uu, Eu);
        const xu = ru.refs.has(Eu) ? Qu || ru.refs.get(Eu) : yu.constructor.initializeForDecoder();
        if (Bu = xu.clone(!0), Bu[Tu] = Object.values(mu)[0], Qu) {
          let uu = Qu[Ju];
          if (void 0 !== uu && Eu !== uu) {
            (Ru & Ku.DELETE) !== Ku.DELETE && ru.removeRef(uu);
            const yu = Qu.entries();
            let Eu;
            for (;
              (Eu = yu.next()) && !Eu.done;) {
              const [Ru, yu] = Eu.value;
              "object" === typeof yu && (uu = yu[Ju]), Vu?.push({
                ref: Qu,
                refId: uu,
                op: Ku.DELETE,
                field: Ru,
                value: void 0,
                previousValue: yu
              })
            }
          }
        }
        ru.addRef(Eu, Bu, xu !== Qu || Ru === Ku.DELETE_AND_ADD && xu === Qu)
      }
      var Su;
      return Bu
    }
    const qy = function(uu, Ru, yu, Eu, Ku) {
        const Qu = Ru[yu.offset++],
          mu = Eu.constructor[Symbol.metadata],
          Ju = Qu >> 6 << 6,
          Nu = Qu % (Ju || 255),
          Xu = mu[Nu];
        if (void 0 === Xu) return console.warn("@colyseus/schema: field not defined at", {
          index: Nu,
          ref: Eu.constructor.name,
          metadata: mu
        }), -1;
        const Vu = !0 === Xu.deprecated,
          ru = Vu ? void 0 : Eu[Bu](Nu),
          xu = oy(uu, Ju, Eu, Nu, ru, Xu.type, Ru, yu, Ku);
        Vu || (null !== xu && void 0 !== xu && (Eu[Xu.name] = xu), ru !== xu && Ku?.push({
          ref: Eu,
          refId: uu.currentRefId,
          op: Ju,
          field: Xu.name,
          value: xu,
          previousValue: ru
        }))
      },
      Oy = function(uu, Ru, yu, Eu, Qu) {
        const mu = Eu[Wu] ?? Eu,
          Ju = Ru[yu.offset++];
        if (Ju === Ku.CLEAR) return uu.removeChildRefs(mu, Qu), void mu.clear();
        const Nu = HR.number(Ru, yu),
          Xu = mu[Tu],
          Vu = mu.constructor.COLLECTION_KIND;
        let ru;
        (Ju & Ku.ADD) === Ku.ADD ? Vu === Zy ? (ru = HR.string(Ru, yu), mu.setIndex(Nu, ru)) : ru = Nu : ru = mu.getIndex(Nu);
        const xu = mu[Bu](Nu),
          Su = oy(uu, Ju, Eu, Nu, xu, Xu, Ru, yu, Qu);
        if (null !== uu.resyncVisited && zy(uu, Eu, Ju, ru, xu, Su, Qu), null !== Su && void 0 !== Su) switch (Vu) {
          case Zy:
            mu.$items.set(ru, Su);
            break;
          case hy:
            mu.$setAt(Nu, Su, null !== uu.resyncVisited && Ju === Ku.ADD ? Ku.REPLACE : Ju);
            break;
          case Py:
          case iy:
          case Yy:
            mu.$items.has(Nu) || (mu.$items.set(Nu, Su), "number" === typeof mu.$refId && Nu >= mu.$refId && (mu.$refId = Nu + 1));
            break;
          default:
            console.warn(`@colyseus/schema: missing COLLECTION_KIND on ${mu.constructor?.name} \u2014 item at index ${Nu} was not stored.`)
        }
        xu !== Su && Qu?.push({
          ref: Eu,
          refId: uu.currentRefId,
          op: Ju,
          dynamicIndex: ru,
          value: Su,
          previousValue: xu
        })
      },
      vy = function(uu, Ru, yu, Eu, Qu) {
        const mu = Eu[Wu] ?? Eu;
        let Ju, Nu = Ru[yu.offset++];
        if (Nu === Ku.CLEAR) return uu.removeChildRefs(mu, Qu), void mu.clear();
        if (Nu === Ku.REVERSE) return void mu.items.reverse();
        if (Nu === Ku.DELETE_BY_REFID) {
          const Nu = HR.number(Ru, yu),
            Xu = uu.root.refs.get(Nu);
          if (void 0 === Xu) return;
          if (uu.root.removeRef(Nu), Ju = mu.findIndex((uu => uu === Xu)), -1 === Ju) return;
          return mu[xu](Ju), void Qu?.push({
            ref: Eu,
            refId: uu.currentRefId,
            op: Ku.DELETE,
            dynamicIndex: Ju,
            value: void 0,
            previousValue: Xu
          })
        }
        if (Nu === Ku.ADD_BY_REFID) {
          const Eu = HR.number(Ru, yu),
            Ku = uu.root.refs.get(Eu);
          Ku && (Ju = mu.findIndex((uu => uu === Ku))), -1 !== Ju && void 0 !== Ju || (Ju = mu.length)
        } else Ju = HR.number(Ru, yu);
        const Xu = mu[Tu];
        let Vu = Ju;
        const ru = mu.items[Ju],
          Bu = oy(uu, Nu, Eu, Ju, ru, Xu, Ru, yu, Qu);
        null !== uu.resyncVisited && zy(uu, Eu, Nu, Ju, ru, Bu, Qu), null !== Bu && void 0 !== Bu && Bu !== ru && mu.$setAt(Ju, Bu, null !== uu.resyncVisited && Nu === Ku.ADD ? Ku.REPLACE : Nu), ru !== Bu && Qu?.push({
          ref: Eu,
          refId: uu.currentRefId,
          op: Nu,
          dynamicIndex: Vu,
          value: Bu,
          previousValue: ru
        })
      };
    class ay extends Error {}

    function fy(uu, Ru, yu, Eu) {
      if (!(uu instanceof Ru)) throw new ay(`a '${Ru.name}' was expected, but '${uu&&uu.constructor.name}' was provided in ${yu.constructor.name}#${Eu}`)
    }
    const uE = (uu, Ru) => {
        const yu = uu.toString(),
          Eu = Ru.toString();
        return yu < Eu ? -1 : yu > Eu ? 1 : 0
      },
      RE = {
        get: (uu, Ru) => "symbol" === typeof Ru || isNaN(Ru) ? Reflect.get(uu, Ru) : uu.items[Ru],
        set: (uu, Ru, yu) => {
          if ("symbol" !== typeof Ru && !isNaN(Ru)) {
            if (void 0 === yu || null === yu) uu.$deleteAt(Ru);
            else {
              let Eu;
              if (yu[pu]) {
                fy(yu, uu[Tu], uu, Ru);
                const Qu = uu.items[Ru];
                uu.isMovingItems ? (Eu = uu.$wireIndex(Number(Ru)), void 0 !== Qu ? yu[pu].isNew ? uu[pu].indexedOperation(Eu, Ku.MOVE_AND_ADD) : (uu[pu].getChange(Eu) & Ku.DELETE) === Ku.DELETE ? uu[pu].indexedOperation(Eu, Ku.DELETE_AND_MOVE) : uu[pu].indexedOperation(Eu, Ku.MOVE) : yu[pu].isNew && uu[pu].indexedOperation(Eu, Ku.ADD), yu[pu].setParent(uu, uu[pu].root, Eu)) : Eu = uu.$changeAt(Number(Ru), yu), void 0 !== Qu && Qu[pu].root?.remove(Qu[pu])
              } else Eu = uu.$changeAt(Number(Ru), yu);
              uu.items[Ru] = yu, void 0 !== Eu && (uu.tmpItems[Eu] = yu)
            }
            return !0
          }
          return Reflect.set(uu, Ru, yu)
        },
        deleteProperty: (uu, Ru) => ("number" === typeof Ru ? uu.$deleteAt(Ru) : delete uu[Ru], !0),
        has: (uu, Ru) => "symbol" === typeof Ru || isNaN(Number(Ru)) ? Reflect.has(uu, Ru) : Reflect.has(uu.items, Ru)
      };
    class yE {
      [pu];
      [Ju];
      [Wu];
      [Tu];
      items = [];
      tmpItems = [];
      deletedIndexes = [];
      isMovingItems = !1;
      _needsCompaction = !1;
      static[Xu] = Ly;
      static[Vu] = vy;
      static COLLECTION_KIND = hy;
      static[ru](uu, Ru, yu) {
        if (!yu) return !0;
        const Eu = uu[Wu] ?? uu;
        return "string" === typeof Eu[Tu] || yu.isChangeTreeVisible(Eu.tmpItems[Ru]?.[pu])
      }
      static is(uu) {
        return Array.isArray(uu) || void 0 !== uu.array
      }
      static from(uu) {
        return new yE(...Array.from(uu))
      }
      constructor() {
        this[Tu] = void 0, this[Wu] = this;
        const uu = new Proxy(this, RE);
        return Object.defineProperty(this, pu, {
          value: new Gy(uu, this),
          enumerable: !1,
          writable: !0
        }), arguments.length > 0 && this.push(...arguments), uu
      }
      static initializeForDecoder() {
        const uu = Object.create(yE.prototype);
        uu.items = [], uu.isMovingItems = !1, uu._needsCompaction = !1, uu[Tu] = void 0, uu[Wu] = uu;
        const Ru = new Proxy(uu, RE);
        return ny(uu, Ru), Ru
      }
      set length(uu) {
        0 === uu ? this.clear() : uu < this.items.length ? this.splice(uu, this.length - uu) : console.warn("ArraySchema: can't set .length to a higher value than its length.")
      }
      get length() {
        return this.items.length
      }
      pauseTracking() {
        this[pu].pause()
      }
      resumeTracking() {
        this[pu].resume()
      }
      untracked(uu) {
        return this[pu].untracked(uu)
      }
      get isTrackingPaused() {
        return this[pu].paused
      }
      push() {
        const uu = this[Wu],
          Ru = uu.items,
          yu = uu.tmpItems,
          Eu = uu[pu],
          Qu = uu[Tu];
        let mu = yu.length;
        for (let Ju = 0, Nu = arguments.length; Ju < Nu; Ju++, mu++) {
          const Nu = Ju < 0 || arguments.length <= Ju ? void 0 : arguments[Ju];
          if (void 0 === Nu || null === Nu) return;
          "object" === typeof Nu && Qu && fy(Nu, Qu, uu, Ju), Eu.indexedOperation(mu, Ku.ADD), Ru.push(Nu), yu.push(Nu), Nu[pu]?.setParent(this, Eu.root, mu)
        }
        return mu
      }
      pop() {
        const uu = this[Wu],
          Ru = uu.tmpItems,
          yu = uu.deletedIndexes;
        let Eu = -1;
        for (let Qu = Ru.length - 1; Qu >= 0; Qu--)
          if (!0 !== yu[Qu]) {
            Eu = Qu;
            break
          } if (Eu < 0) return;
        const Ku = uu.$isUnsentAdd(Eu);
        return uu[pu].delete(Eu), Ku ? uu.$cancelAdd(Eu) : yu[Eu] = !0, uu.items.pop()
      }
      at(uu) {
        return uu < 0 && (uu += this.length), this.items[uu]
      }
      $wireIndex(uu) {
        const Ru = this.deletedIndexes;
        if (0 === Ru.length) return uu;
        const yu = this.tmpItems;
        let Eu = 0;
        for (let Ku = 0; Ku < yu.length; Ku++)
          if (!0 !== Ru[Ku]) {
            if (Eu === uu) return Ku;
            Eu++
          } return yu.length + (uu - Eu)
      }
      $isUnsentAdd(uu) {
        const Ru = this[pu];
        return 0 === (576 & Ru.flags) && !Ru.paused && "string" !== typeof this[Tu] && Ru.operationAt(uu) === Ku.ADD
      }
      $cancelAdd(uu) {
        let Ru = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        const yu = this[pu],
          Eu = this.tmpItems[uu];
        this.tmpItems.splice(uu, 1), this.deletedIndexes.length > 0 && this.deletedIndexes.splice(uu, 1), yu.removeAt(uu, 1);
        const Ku = Eu?.[pu];
        void 0 !== Ku && void 0 === Ku.root && Ku.removeParent(this), Ru && this.$reindexChildren(uu)
      }
      $reindexChildren(uu, Ru) {
        if (!this[pu].hasFilteredFields) return;
        if ("string" === typeof this[Tu]) return;
        const yu = this.tmpItems,
          Eu = yu.length;
        if (void 0 !== Ru)
          for (; uu < Eu && yu[uu] === Ru[uu];) uu++;
        for (let Ku = uu; Ku < Eu; Ku++) yu[Ku]?.[pu]?.setParentIndex(this, Ku)
      }
      $changeAt(uu, Ru) {
        if (void 0 === Ru || null === Ru) return void console.error("ArraySchema items cannot be null nor undefined; Use `splice(index, 1)` instead.");
        if (this.items[uu] === Ru) return;
        const yu = void 0 !== this.items[uu] ? "object" === typeof Ru ? Ku.DELETE_AND_ADD : Ku.REPLACE : Ku.ADD,
          Eu = this.$wireIndex(uu),
          Qu = this[pu];
        return Qu.change(Eu, yu), Ru[pu]?.setParent(this, Qu.root, Eu), Eu
      }
      $deleteAt(uu, Ru) {
        this[pu].delete(this.$wireIndex(uu), Ru)
      }
      $setAt(uu, Ru, yu) {
        yu === Ku.ADD && void 0 !== this.items[uu] ? this.items.splice(uu, 0, Ru) : yu === Ku.DELETE_AND_MOVE ? (this.items.splice(uu, 1), this.items[uu] = Ru) : (uu > this.items.length && (this._needsCompaction = !0), this.items[uu] = Ru)
      }
      clear() {
        const uu = this[Wu];
        if (0 === uu.items.length) return;
        const Ru = uu[pu];
        Ru.forEachChild(((uu, yu) => {
          Ru.root?.remove(uu)
        })), Ru.discard(), Ru.operation(Ku.CLEAR), uu.items.length = 0, uu.tmpItems.length = 0
      } [Hu]() {
        const uu = this[Wu] ?? this,
          Ru = uu[pu];
        if (Ru.isStreamCollection) throw new Error("@colyseus/schema: cannot reset a streamed ArraySchema (pooling not supported).");
        const yu = uu.items;
        for (let Eu = 0; Eu < yu.length; Eu++) yu[Eu]?.[Hu]?.();
        uu.items.length = 0, uu.tmpItems.length = 0, uu.deletedIndexes.length = 0, Ru.recycle(), uu[Ju] = void 0
      }
      concat() {
        return new yE(...this.items.concat(...arguments))
      }
      join(uu) {
        return this.items.join(uu)
      }
      reverse() {
        const uu = this[Wu],
          Ru = uu[pu];
        if (Ru.has() || uu.deletedIndexes.length > 0) {
          const Ru = uu.items.slice().reverse();
          return this.clear(), this.push(...Ru), this
        }
        return Ru.operation(Ku.REVERSE), uu.items.reverse(), uu.tmpItems.reverse(), uu.$reindexChildren(0), this
      }
      shift() {
        const uu = this[Wu],
          Ru = uu.items;
        if (0 === Ru.length) return;
        const yu = uu[pu],
          Eu = uu.deletedIndexes;
        let Qu = 0;
        for (; !0 === Eu[Qu];) Qu++;
        const mu = uu.$isUnsentAdd(Qu);
        return yu.delete(Qu, Ku.DELETE), mu ? uu.$cancelAdd(Qu) : Eu[Qu] = !0, Ru.shift()
      }
      slice(uu, Ru) {
        const yu = new yE;
        return yu.push(...this.items.slice(uu, Ru)), yu
      }
      sort() {
        let uu = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : uE;
        const Ru = this[Wu];
        Ru.isMovingItems = !0;
        const yu = Ru[pu];
        return Ru.items.sort(uu).forEach(((uu, Ru) => yu.change(Ru, Ku.REPLACE))), Ru.tmpItems.sort(uu), Ru.$reindexChildren(0), Ru.isMovingItems = !1, this
      }
      splice(uu, Ru) {
        const yu = this[Wu],
          Eu = yu[pu],
          Qu = yu.items,
          mu = yu.tmpItems,
          Ju = yu.deletedIndexes,
          Nu = Qu.length,
          Xu = mu.length;
        for (var Vu = arguments.length, ru = new Array(Vu > 2 ? Vu - 2 : 0), Bu = 2; Bu < Vu; Bu++) ru[Bu - 2] = arguments[Bu];
        const xu = ru.length,
          Su = [];
        for (let Ku = 0; Ku < Xu; Ku++) !0 !== Ju[Ku] && Su.push(Ku);
        let Tu;
        if (Nu > uu) {
          void 0 === Ru && (Ru = Nu - uu);
          for (let Qu = uu; Qu < uu + Ru; Qu++) {
            const uu = Su[Qu],
              Ru = yu.$isUnsentAdd(uu);
            Eu.delete(uu, Ku.DELETE), Ru ? (Tu ??= []).push(uu) : Ju[uu] = !0
          }
        } else Ru = 0;
        if (xu > 0) {
          const Qu = Su[uu] ?? Nu,
            Xu = Math.min(xu, Ru);
          for (let uu = 0; uu < Xu; uu++) {
            const Ru = Qu + uu;
            let yu;
            const Nu = void 0 !== Tu ? Tu.indexOf(Ru) : -1; - 1 !== Nu ? (Tu.splice(Nu, 1), yu = Ku.ADD) : yu = Ju[Ru] ? Ku.DELETE_AND_ADD : Ku.ADD, Eu.indexedOperation(Ru, yu), mu[Ru] = ru[uu], Ju[Ru] = !1, ru[uu][pu]?.setParent(this, Eu.root, Ru)
          }
          const Vu = xu - Xu;
          if (Vu > 0) {
            const uu = Qu + Xu;
            Eu.insertAt(uu, Vu);
            for (let Ru = 0; Ru < Vu; Ru++) ru[Xu + Ru][pu]?.setParent(this, Eu.root, uu + Ru);
            Ju.length > 0 && Ju.splice(uu, 0, ...new Array(Vu).fill(!1)), mu.splice(uu, 0, ...ru.slice(Xu)), yu.$reindexChildren(uu + Vu)
          }
        }
        if (void 0 !== Tu && Tu.length > 0) {
          for (let uu = Tu.length - 1; uu >= 0; uu--) yu.$cancelAdd(Tu[uu], !1);
          yu.$reindexChildren(Tu[0])
        }
        return Eu.root?.enqueueChangeTree(Eu), Qu.splice(uu, Ru, ...ru)
      }
      unshift() {
        const uu = this[Wu],
          Ru = uu[pu];
        Ru.unshift(arguments.length);
        for (let Eu = 0; Eu < arguments.length; Eu++)(Eu < 0 || arguments.length <= Eu ? void 0 : arguments[Eu])?.[pu]?.setParent(this, Ru.root, Eu);
        const yu = uu.deletedIndexes;
        return yu.length > 0 && yu.unshift(...new Array(arguments.length).fill(!1)), uu.tmpItems.unshift(...arguments), uu.$reindexChildren(arguments.length), uu.items.unshift(...arguments)
      }
      indexOf(uu, Ru) {
        return this.items.indexOf(uu, Ru)
      }
      lastIndexOf(uu) {
        let Ru = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.length - 1;
        return this.items.lastIndexOf(uu, Ru)
      }
      every(uu, Ru) {
        return this.items.every(uu, Ru)
      }
      some(uu, Ru) {
        return this.items.some(uu, Ru)
      }
      forEach(uu, Ru) {
        return this.items.forEach(uu, Ru)
      }
      map(uu, Ru) {
        return this.items.map(uu, Ru)
      }
      filter(uu, Ru) {
        return this.items.filter(uu, Ru)
      }
      reduce(uu, Ru) {
        return this.items.reduce.apply(this.items, arguments)
      }
      reduceRight(uu, Ru) {
        return this.items.reduceRight.apply(this.items, arguments)
      }
      find(uu, Ru) {
        return this.items.find(uu, Ru)
      }
      findIndex(uu, Ru) {
        return this.items.findIndex(uu, Ru)
      }
      fill(uu, Ru, yu) {
        throw new Error("ArraySchema#fill() not implemented")
      }
      copyWithin(uu, Ru, yu) {
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
        return yE
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
      includes(uu, Ru) {
        return this.items.includes(uu, Ru)
      }
      flatMap(uu, Ru) {
        throw new Error("ArraySchema#flatMap() is not supported.")
      }
      flat(uu) {
        throw new Error("ArraySchema#flat() is not supported.")
      }
      findLast() {
        return this.items.findLast.apply(this.items, arguments)
      }
      findLastIndex() {
        for (var uu = arguments.length, Ru = new Array(uu), yu = 0; yu < uu; yu++) Ru[yu] = arguments[yu];
        return this.items.findLastIndex.apply(this.items, arguments)
      }
      with(uu, Ru) {
        const yu = this.items.slice();
        return uu < 0 && (uu += this.length), yu[uu] = Ru, new yE(...yu)
      }
      toReversed() {
        return this.items.slice().reverse()
      }
      toSorted(uu) {
        return this.items.slice().sort(uu)
      }
      toSpliced(uu, Ru) {
        for (var yu = arguments.length, Eu = new Array(yu > 2 ? yu - 2 : 0), Ku = 2; Ku < yu; Ku++) Eu[Ku - 2] = arguments[Ku];
        const Qu = this.items.slice();
        return Qu.splice.apply(Qu, arguments), Qu
      }
      shuffle() {
        return this.move((uu => {
          let Ru = this.items.length;
          for (; 0 != Ru;) {
            let uu = Math.floor(Math.random() * Ru);
            Ru--, [this[Ru], this[uu]] = [this[uu], this[Ru]]
          }
        }))
      }
      move(uu) {
        return this.isMovingItems = !0, uu(this), this.isMovingItems = !1, this
      } [Bu](uu) {
        let Ru = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        const yu = this[Wu] ?? this;
        return Ru || yu.deletedIndexes[uu] ? yu.items[uu] : yu.tmpItems[uu] || yu.items[uu]
      } [xu](uu) {
        const Ru = this[Wu] ?? this;
        Ru.items[uu] = void 0, Ru._needsCompaction = !0
      } [ju]() {
        const uu = this.tmpItems;
        this.tmpItems = this.items.slice(), this.deletedIndexes.length > 0 && (this.$reindexChildren(0, uu), this.deletedIndexes.length = 0)
      } [du]() {
        const uu = this[Wu] ?? this;
        uu._needsCompaction && (uu._needsCompaction = !1, uu.items = uu.items.filter((uu => void 0 !== uu)))
      } [Su](uu, Ru, yu) {
        const Eu = this[Wu] ?? this,
          Ku = Eu.items;
        let Qu = !1;
        for (let mu = 0; mu < Ku.length; mu++) {
          const Ju = Ku[mu];
          uu.has(mu) ? yu(Ju) : (Qu = !0, Ru(Ju, mu), Eu[xu](mu))
        }
        Qu && Eu[du]()
      }
      toArray() {
        return this.items.slice(0)
      }
      toJSON() {
        return this.toArray().map((uu => "function" === typeof uu.toJSON ? uu.toJSON() : uu))
      }
      clone(uu) {
        let Ru;
        return uu ? (Ru = new yE, Ru.push(...this.items)) : Ru = new yE(...this.map((uu => uu[pu] ? uu.clone() : uu))), Ru
      }
    }
    CR("array", {
      constructor: yE
    });
    class EE {
      keyByIndex = new Map;
      indexByKey = Object.create(null);
      nextIndex = 0;
      snapshots;
      indexOf(uu) {
        const Ru = this.indexByKey[uu];
        return void 0 === Ru ? void 0 : Ru
      }
      assign(uu) {
        const Ru = this.nextIndex++;
        return this.indexByKey[uu] = Ru, this.keyByIndex.set(Ru, uu), Ru
      }
      snapshot(uu, Ru) {
        (this.snapshots ??= new Map).set(uu, Ru)
      }
      forgetSnapshot(uu) {
        this.snapshots?.delete(uu)
      }
      snapshotAt(uu) {
        return this.snapshots?.get(uu)
      }
      setIndex(uu, Ru) {
        this.keyByIndex.set(uu, Ru), this.indexByKey[Ru] = uu
      }
      keyOf(uu) {
        return this.keyByIndex.get(uu)
      }
      cleanupAfterEncode() {
        if (void 0 !== this.snapshots) {
          for (const [uu] of this.snapshots) {
            const Ru = this.keyByIndex.get(uu);
            void 0 !== Ru && (delete this.indexByKey[Ru], this.keyByIndex.delete(uu))
          }
          this.snapshots.clear()
        }
      }
      reset() {
        this.indexByKey = Object.create(null), this.keyByIndex.clear(), this.snapshots?.clear(), this.nextIndex = 0
      }
    }
    class KE {
      [pu];
      [Ju];
      childType;
      [Tu];
      $items = new Map;
      journal = new EE;
      _stream;
      get maxPerTick() {
        return this._stream?.maxPerTick ?? 32
      }
      set maxPerTick(uu) {
        (this._stream ??= AR()).maxPerTick = uu
      }
      get priority() {
        return this._stream?.priority
      }
      set priority(uu) {
        (this._stream ??= AR()).priority = uu
      }
      get $indexes() {
        return this.journal.keyByIndex
      }
      get _collectionIndexes() {
        return this.journal.indexByKey
      }
      static[Xu] = ly;
      static[Vu] = Oy;
      static COLLECTION_KIND = Zy;
      static[ru](uu, Ru, yu) {
        if (!yu || "string" === typeof uu[Tu]) return !0;
        const Eu = uu[Bu](Ru) ?? uu.journal.snapshotAt(Ru);
        return yu.isChangeTreeVisible(Eu[pu])
      }
      static is(uu) {
        return void 0 !== uu.map
      }
      constructor(uu) {
        if (Object.defineProperty(this, pu, {
            value: new Gy(this),
            enumerable: !1,
            writable: !0
          }), this[Tu] = void 0, uu)
          if (uu instanceof Map || uu instanceof KE) uu.forEach(((uu, Ru) => this.set(Ru, uu)));
          else
            for (const Ru in uu) this.set(Ru, uu[Ru])
      }
      static initializeForDecoder() {
        const uu = Object.create(KE.prototype);
        return uu.$items = new Map, uu.journal = new EE, uu[Tu] = void 0, ny(uu), uu
      } [Symbol.iterator]() {
        return this.$items[Symbol.iterator]()
      }
      get[Symbol.toStringTag]() {
        return this.$items[Symbol.toStringTag]
      }
      static get[Symbol.species]() {
        return KE
      }
      set(uu, Ru) {
        if (void 0 === Ru || null === Ru) throw new Error(`MapSchema#set('${uu}', ${Ru}): trying to set ${Ru} value on '${uu}'.`);
        "object" === typeof Ru && this[Tu] && fy(Ru, this[Tu], this, uu), uu = uu.toString();
        const yu = this[pu],
          Eu = void 0 !== Ru[pu],
          Qu = this.journal;
        let mu, Ju = Qu.indexOf(uu);
        if (void 0 !== Ju) {
          mu = Ku.REPLACE;
          const yu = this.$items.get(uu);
          if (yu === Ru) return;
          Eu && (mu = Ku.DELETE_AND_ADD, void 0 !== yu && yu[pu].root?.remove(yu[pu])), void 0 !== Qu.snapshotAt(Ju) && Qu.forgetSnapshot(Ju)
        } else Ju = Qu.assign(uu), mu = Ku.ADD;
        return this.$items.set(uu, Ru), mu === Ku.ADD && yu.isStreamCollection ? void 0 !== yu.root && MR(this, yu.root, Ju) : yu.change(Ju, mu), Eu && Ru[pu].setParent(this, yu.root, Ju), this
      }
      get(uu) {
        return this.$items.get(uu)
      }
      getOrInsert(uu, Ru) {
        return this.$items.has(uu) ? this.$items.get(uu) : (this.set(uu, Ru), Ru)
      }
      getOrInsertComputed(uu, Ru) {
        if (this.$items.has(uu)) return this.$items.get(uu);
        const yu = Ru(uu);
        return this.set(uu, yu), yu
      }
      delete(uu) {
        if (!this.$items.has(uu)) return !1;
        const Ru = this.journal.indexOf(uu),
          yu = this.$items.get(uu),
          Eu = this[pu];
        if (Eu.isStreamCollection) {
          const Ku = Eu.root;
          let Qu = !1;
          return void 0 !== Ku && (Qu = IR(this, Ku, this[Ju], Ru)), void 0 !== yu?.[pu] && Ku?.remove(yu[pu]), this.$items.delete(uu), Qu || this.journal.snapshot(Ru, yu), !0
        }
        return this.journal.snapshot(Ru, yu), Eu.delete(Ru), this.$items.delete(uu)
      }
      clear() {
        const uu = this[pu];
        uu.discard(), uu.forEachChild(((Ru, yu) => {
          uu.root?.remove(Ru)
        })), this.journal.reset(), this.$items.clear(), uu.operation(Ku.CLEAR)
      } [Hu]() {
        const uu = this[pu];
        if (uu.isStreamCollection) throw new Error("@colyseus/schema: cannot reset a streamed MapSchema (pooling not supported).");
        this.$items.forEach((uu => uu?.[Hu]?.())), this.$items.clear(), this.journal.reset(), uu.recycle(), this[Ju] = void 0
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
        this[pu].pause()
      }
      resumeTracking() {
        this[pu].resume()
      }
      untracked(uu) {
        return this[pu].untracked(uu)
      }
      get isTrackingPaused() {
        return this[pu].paused
      }
      setIndex(uu, Ru) {
        this.journal.setIndex(uu, Ru)
      }
      getIndex(uu) {
        return this.journal.keyOf(uu)
      } [Bu](uu) {
        const Ru = this.journal.keyOf(uu);
        return void 0 !== Ru ? this.$items.get(Ru) : void 0
      } [xu](uu) {
        const Ru = this.journal.keyOf(uu);
        void 0 !== Ru && (this.$items.delete(Ru), this.journal.keyByIndex.delete(uu))
      } [Su](uu, Ru, yu) {
        let Eu = null;
        if (this.$items.forEach(((Ku, Qu) => {
            uu.has(Qu) ? yu(Ku) : ((Eu ??= new Set).add(Qu), Ru(Ku, Qu))
          })), null !== Eu) {
          Eu.forEach((uu => {
            this.$items.delete(uu), delete this.journal.indexByKey[uu]
          }));
          const uu = [];
          this.journal.keyByIndex.forEach(((Ru, yu) => {
            Eu.has(Ru) && uu.push(yu)
          }));
          for (let Ru = 0; Ru < uu.length; Ru++) this.journal.keyByIndex.delete(uu[Ru])
        }
      } [ju]() {
        this.journal.cleanupAfterEncode()
      }
      _dropView(uu) {
        sR(this, uu)
      }
      _unregister() {}
      toJSON() {
        return Object.fromEntries(Array.from(this, (uu => {
          let [Ru, yu] = uu;
          return [Ru, "function" === typeof yu.toJSON ? yu.toJSON() : yu]
        })))
      }
      clone(uu) {
        let Ru;
        return uu ? Ru = Object.assign(new KE, this) : (Ru = new KE, this.forEach(((uu, yu) => {
          uu[pu] ? Ru.set(yu, uu.clone()) : Ru.set(yu, uu)
        }))), Ru
      }
    }
    CR("map", {
      constructor: KE
    });
    class QE {
      [pu];
      [Ju];
      [Tu];
      $items = new Map;
      deletedItems = {};
      $refId = 0;
      _stream;
      get maxPerTick() {
        return this._stream?.maxPerTick ?? 32
      }
      set maxPerTick(uu) {
        (this._stream ??= AR()).maxPerTick = uu
      }
      get priority() {
        return this._stream?.priority
      }
      set priority(uu) {
        (this._stream ??= AR()).priority = uu
      }
      static[Xu] = gy;
      static[Vu] = Oy;
      static COLLECTION_KIND = iy;
      static[ru](uu, Ru, yu) {
        return !yu || "string" === typeof uu[Tu] || yu.isChangeTreeVisible((uu[Bu](Ru) ?? uu.deletedItems[Ru])[pu])
      }
      static is(uu) {
        return void 0 !== uu.collection
      }
      constructor(uu) {
        Object.defineProperty(this, pu, {
          value: new Gy(this),
          enumerable: !1,
          writable: !0
        }), this[Tu] = void 0, uu && uu.forEach((uu => this.add(uu)))
      }
      static initializeForDecoder() {
        const uu = Object.create(QE.prototype);
        return uu.$items = new Map, uu.deletedItems = {}, uu.$refId = 0, uu[Tu] = void 0, ny(uu), uu
      }
      add(uu) {
        const Ru = this.$refId++,
          yu = this[pu];
        return this.$items.set(Ru, uu), yu.isStreamCollection ? void 0 !== yu.root && MR(this, yu.root, Ru) : yu.change(Ru), void 0 !== uu[pu] && uu[pu].setParent(this, yu.root, Ru), Ru
      }
      at(uu) {
        const Ru = Array.from(this.$items.keys())[uu];
        return this.$items.get(Ru)
      }
      entries() {
        return this.$items.entries()
      }
      delete(uu) {
        const Ru = this.$items.entries();
        let yu, Eu;
        for (;
          (Eu = Ru.next()) && !Eu.done;)
          if (uu === Eu.value[1]) {
            yu = Eu.value[0];
            break
          } if (void 0 === yu) return !1;
        const Ku = this[pu];
        if (Ku.isStreamCollection) {
          const uu = Ku.root,
            Ru = this.$items.get(yu);
          return void 0 !== uu && IR(this, uu, this[Ju], yu), void 0 !== Ru?.[pu] && uu?.remove(Ru[pu]), this.deletedItems[yu] = Ru, this.$items.delete(yu)
        }
        return this.deletedItems[yu] = Ku.delete(yu), this.$items.delete(yu)
      }
      clear() {
        const uu = this[pu];
        uu.discard(), uu.forEachChild(((Ru, yu) => {
          uu.root?.remove(Ru)
        })), this.$items.clear(), uu.operation(Ku.CLEAR)
      } [Hu]() {
        const uu = this[pu];
        if (uu.isStreamCollection) throw new Error("@colyseus/schema: cannot reset a streamed CollectionSchema (pooling not supported).");
        this.$items.forEach((uu => uu?.[Hu]?.())), this.$items.clear(), this.deletedItems = {}, this.$refId = 0, uu.recycle(), this[Ju] = void 0
      }
      has(uu) {
        return Array.from(this.$items.values()).some((Ru => Ru === uu))
      }
      forEach(uu) {
        this.$items.forEach(((Ru, yu, Eu) => uu(Ru, yu, this)))
      }
      values() {
        return this.$items.values()
      }
      get size() {
        return this.$items.size
      }
      pauseTracking() {
        this[pu].pause()
      }
      resumeTracking() {
        this[pu].resume()
      }
      untracked(uu) {
        return this[pu].untracked(uu)
      }
      get isTrackingPaused() {
        return this[pu].paused
      } [Symbol.iterator]() {
        return this.$items.values()
      }
      setIndex(uu, Ru) {}
      getIndex(uu) {
        return uu
      } [Bu](uu) {
        return this.$items.get(uu)
      } [xu](uu) {
        this.$items.delete(uu)
      } [Su](uu, Ru, yu) {
        let Eu = null;
        if (this.$items.forEach(((Ku, Qu) => {
            uu.has(Qu) ? yu(Ku) : ((Eu ??= []).push(Qu), Ru(Ku, Qu))
          })), null !== Eu)
          for (let Ku = 0; Ku < Eu.length; Ku++) this[xu](Eu[Ku])
      } [ju]() {
        for (const uu in this.deletedItems) delete this.deletedItems[uu]
      }
      _dropView(uu) {
        sR(this, uu)
      }
      _unregister() {}
      toArray() {
        return Array.from(this.$items.values())
      }
      toJSON() {
        const uu = [];
        return this.forEach(((Ru, yu) => {
          uu.push("function" === typeof Ru.toJSON ? Ru.toJSON() : Ru)
        })), uu
      }
      clone(uu) {
        let Ru;
        return uu ? Ru = Object.assign(new QE, this) : (Ru = new QE, this.forEach((uu => {
          uu[pu] ? Ru.add(uu.clone()) : Ru.add(uu)
        }))), Ru
      }
    }
    CR("collection", {
      constructor: QE
    });
    class mE {
      [pu];
      [Ju];
      [Tu];
      $items = new Map;
      deletedItems = {};
      $refId = 0;
      _stream;
      get maxPerTick() {
        return this._stream?.maxPerTick ?? 32
      }
      set maxPerTick(uu) {
        (this._stream ??= AR()).maxPerTick = uu
      }
      get priority() {
        return this._stream?.priority
      }
      set priority(uu) {
        (this._stream ??= AR()).priority = uu
      }
      static[Xu] = gy;
      static[Vu] = Oy;
      static COLLECTION_KIND = Py;
      static[ru](uu, Ru, yu) {
        return !yu || "string" === typeof uu[Tu] || yu.isVisible((uu[Bu](Ru) ?? uu.deletedItems[Ru])[pu])
      }
      static is(uu) {
        return void 0 !== uu.set
      }
      constructor(uu) {
        Object.defineProperty(this, pu, {
          value: new Gy(this),
          enumerable: !1,
          writable: !0
        }), this[Tu] = void 0, uu && uu.forEach((uu => this.add(uu)))
      }
      static initializeForDecoder() {
        const uu = Object.create(mE.prototype);
        return uu.$items = new Map, uu.deletedItems = {}, uu.$refId = 0, uu[Tu] = void 0, ny(uu), uu
      }
      add(uu) {
        if (this.has(uu)) return !1;
        const Ru = this.$refId++,
          yu = this[pu];
        return this.$items.set(Ru, uu), yu.isStreamCollection ? void 0 !== yu.root && MR(this, yu.root, Ru) : yu.change(Ru, Ku.ADD), void 0 !== uu[pu] && uu[pu].setParent(this, yu.root, Ru), Ru
      }
      entries() {
        return this.$items.entries()
      }
      delete(uu) {
        const Ru = this.$items.entries();
        let yu, Eu;
        for (;
          (Eu = Ru.next()) && !Eu.done;)
          if (uu === Eu.value[1]) {
            yu = Eu.value[0];
            break
          } if (void 0 === yu) return !1;
        const Ku = this[pu];
        if (Ku.isStreamCollection) {
          const uu = Ku.root,
            Ru = this.$items.get(yu);
          return void 0 !== uu && IR(this, uu, this[Ju], yu), void 0 !== Ru?.[pu] && uu?.remove(Ru[pu]), this.deletedItems[yu] = Ru, this.$items.delete(yu)
        }
        return this.deletedItems[yu] = Ku.delete(yu), this.$items.delete(yu)
      }
      clear() {
        const uu = this[pu];
        uu.discard(), this.$items.clear(), uu.operation(Ku.CLEAR)
      } [Hu]() {
        const uu = this[pu];
        if (uu.isStreamCollection) throw new Error("@colyseus/schema: cannot reset a streamed SetSchema (pooling not supported).");
        this.$items.forEach((uu => uu?.[Hu]?.())), this.$items.clear(), this.deletedItems = {}, this.$refId = 0, uu.recycle(), this[Ju] = void 0
      }
      has(uu) {
        const Ru = this.$items.values();
        let yu, Eu = !1;
        for (;
          (yu = Ru.next()) && !yu.done;)
          if (uu === yu.value) {
            Eu = !0;
            break
          } return Eu
      }
      forEach(uu) {
        this.$items.forEach(((Ru, yu, Eu) => uu(Ru, yu, this)))
      }
      values() {
        return this.$items.values()
      }
      get size() {
        return this.$items.size
      }
      pauseTracking() {
        this[pu].pause()
      }
      resumeTracking() {
        this[pu].resume()
      }
      untracked(uu) {
        return this[pu].untracked(uu)
      }
      get isTrackingPaused() {
        return this[pu].paused
      } [Symbol.iterator]() {
        return this.$items.values()
      }
      setIndex(uu, Ru) {}
      getIndex(uu) {
        return uu
      } [Bu](uu) {
        return this.$items.get(uu)
      } [xu](uu) {
        this.$items.delete(uu)
      } [Su](uu, Ru, yu) {
        let Eu = null;
        if (this.$items.forEach(((Ku, Qu) => {
            uu.has(Qu) ? yu(Ku) : ((Eu ??= []).push(Qu), Ru(Ku, Qu))
          })), null !== Eu)
          for (let Ku = 0; Ku < Eu.length; Ku++) this[xu](Eu[Ku])
      } [ju]() {
        for (const uu in this.deletedItems) delete this.deletedItems[uu]
      }
      _dropView(uu) {
        sR(this, uu)
      }
      _unregister() {}
      toArray() {
        return Array.from(this.$items.values())
      }
      toJSON() {
        const uu = [];
        return this.forEach(((Ru, yu) => {
          uu.push("function" === typeof Ru.toJSON ? Ru.toJSON() : Ru)
        })), uu
      }
      clone(uu) {
        let Ru;
        return uu ? Ru = Object.assign(new mE, this) : (Ru = new mE, this.forEach((uu => {
          uu[pu] ? Ru.add(uu.clone()) : Ru.add(uu)
        }))), Ru
      }
    }
    CR("set", {
      constructor: mE
    });
    class JE {
      [pu];
      [Ju];
      [Tu];
      $items = new Map;
      $nextPosition = 0;
      _itemIndex = new Map;
      _stream;
      get maxPerTick() {
        return this._stream?.maxPerTick ?? 32
      }
      set maxPerTick(uu) {
        (this._stream ??= AR()).maxPerTick = uu
      }
      get priority() {
        return this._stream?.priority
      }
      set priority(uu) {
        (this._stream ??= AR()).priority = uu
      }
      static $isStream = !0;
      static[Xu] = gy;
      static[Vu] = Oy;
      static COLLECTION_KIND = Yy;
      static[ru](uu, Ru, yu) {
        if (!yu) return !0;
        const Eu = uu[Bu](Ru);
        return void 0 !== Eu && yu.isVisible(Eu[pu])
      }
      static is(uu) {
        return uu && void 0 !== uu.stream
      }
      constructor() {
        Object.defineProperty(this, pu, {
          value: new Gy(this),
          enumerable: !1,
          writable: !0
        }), this[Tu] = void 0
      }
      static initializeForDecoder() {
        const uu = Object.create(JE.prototype);
        return uu.$items = new Map, uu.$nextPosition = 0, uu._itemIndex = new Map, uu[Tu] = void 0, ny(uu), uu
      }
      add(uu) {
        if (this._itemIndex.has(uu)) return -1;
        const Ru = this.$nextPosition++;
        this.$items.set(Ru, uu), this._itemIndex.set(uu, Ru);
        const yu = this[pu].root;
        return void 0 !== uu[pu] && uu[pu].setParent(this, yu, Ru), void 0 !== yu && MR(this, yu, Ru), Ru
      }
      remove(uu) {
        const Ru = this._itemIndex.get(uu);
        if (void 0 === Ru) return !1;
        this._itemIndex.delete(uu), this.$items.delete(Ru);
        const yu = this[pu].root;
        return void 0 !== yu && (IR(this, yu, this[Ju], Ru), void 0 !== uu[pu] && yu.remove(uu[pu])), !0
      }
      has(uu) {
        return this._itemIndex.has(uu)
      }
      clear() {
        const uu = this[pu].root;
        if (void 0 !== uu) {
          ! function(uu, Ru, yu) {
            const Eu = uu._stream;
            if (void 0 !== Eu) {
              Eu.broadcastPending.clear();
              for (const uu of Eu.sentBroadcast) Eu.broadcastDeletes.add(uu);
              Eu.sentBroadcast.clear(), Ru.forEachActiveView((uu => {
                Eu.pendingByView.get(uu.id)?.clear();
                const Ru = Eu.sentByView.get(uu.id);
                if (void 0 !== Ru && Ru.size > 0) {
                  let Eu = uu.changes.get(yu);
                  void 0 === Eu && (Eu = new Map, uu.changes.set(yu, Eu));
                  for (const uu of Ru) Eu.set(uu, Ku.DELETE);
                  Ru.clear()
                }
              }))
            }
          }(this, uu, this[Ju]);
          for (const Ru of this.$items.values()) void 0 !== Ru[pu] && uu.remove(Ru[pu])
        }
        this.$items.clear(), this._itemIndex.clear()
      }
      forEach(uu) {
        for (const [Ru, yu] of this.$items) uu(yu, Ru, this)
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
      setIndex(uu, Ru) {}
      getIndex(uu) {
        return uu
      } [Bu](uu) {
        return this.$items.get(uu)
      } [xu](uu) {
        const Ru = this.$items.get(uu);
        void 0 !== Ru && (this._itemIndex.delete(Ru), this.$items.delete(uu))
      } [Su]() {} [ju]() {}
      toArray() {
        return Array.from(this.$items.values())
      }
      toJSON() {
        const uu = [];
        return this.forEach((Ru => {
          uu.push("function" === typeof Ru?.toJSON ? Ru.toJSON() : Ru)
        })), uu
      }
      clone(uu) {
        if (uu) {
          return Object.assign(new JE, this)
        }
        const Ru = new JE;
        return Ru.maxPerTick = this.maxPerTick, this.forEach((uu => {
          Ru.add("function" === typeof uu?.clone ? uu.clone() : uu)
        })), Ru
      }
      _dropView(uu) {
        sR(this, uu)
      }
      _unregister() {}
    }
    CR("stream", {
      constructor: JE
    });
    class NE {
      [Cu] = !0;
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
        if (uu && "object" === typeof uu && void 0 !== uu.array) throw new Error(eR);
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

    function XE(uu) {
      return null != uu && !0 === uu[Cu]
    }

    function VE(uu) {
      return () => new NE(uu)
    }

    function rE(uu) {
      if (XE(uu)) {
        const Ru = uu._type;
        throw new Error(`t.array/map/set/collection(): a t.* builder is not a valid element type \u2014 ${"string"===typeof Ru?`use the type name instead: t.array("${Ru}")`:'collections accept a Schema class or a primitive type name ("string", "number", \u2026)'}.`)
      }
      return uu
    }

    function BE(uu) {
      return new NE({
        quantized: lR(uu)
      })
    }
    const xE = Object.freeze({
        string: VE("string"),
        number: VE("number"),
        boolean: VE("boolean"),
        int8: VE("int8"),
        uint8: VE("uint8"),
        int16: VE("int16"),
        uint16: VE("uint16"),
        int32: VE("int32"),
        uint32: VE("uint32"),
        int64: VE("int64"),
        uint64: VE("uint64"),
        float32: VE("float32"),
        float64: VE("float64"),
        bigint64: VE("bigint64"),
        biguint64: VE("biguint64"),
        ref: uu => new NE(uu),
        array: uu => new NE({
          array: rE(uu)
        }),
        map: uu => new NE({
          map: rE(uu)
        }),
        set: uu => new NE({
          set: rE(uu)
        }),
        collection: uu => new NE({
          collection: rE(uu)
        }),
        stream: uu => {
          const Ru = new NE({
            stream: rE(uu)
          });
          return Ru._stream = !0, Ru
        },
        quantized: BE,
        angle: uu => BE({
          min: 0,
          max: 2 * Math.PI,
          mode: "wrap",
          bits: uu?.bits ?? 16
        })
      }),
      SE = -1;

    function pE(uu) {
      return FR.register(uu), uu
    }

    function TE() {
      let uu = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : SE;
      return function(Ru, yu) {
        const Eu = oR.initialize(Ru.constructor);
        oR.setTag(Eu, yu, uu)
      }
    }

    function WE(uu, Ru) {
      const yu = oR.initialize(uu.constructor);
      oR.setUnreliable(yu, Ru)
    }

    function jE(uu, Ru) {
      const yu = oR.initialize(uu.constructor);
      oR.setPatchOnly(yu, Ru)
    }

    function HE(uu, Ru) {
      const yu = oR.initialize(uu.constructor);
      oR.setFullStateOnly(yu, Ru)
    }

    function dE(uu, Ru) {
      return function(yu, Eu) {
        const Ku = yu.constructor;
        if (!uu) throw new Error(`${Ku.name}: @type() reference provided for "${Eu}" is undefined. Make sure you don't have any circular dependencies.`);
        uu = ZR(uu, `${Ku.name}.${Eu}`), FR.register(Ku);
        const Qu = Object.getPrototypeOf(Ku)[Symbol.metadata],
          mu = oR.initialize(Ku);
        let Ju = mu[Eu];
        if (void 0 !== mu[Ju]) {
          if (mu[Ju].deprecated) return;
          if (void 0 !== mu[Ju].type) {
            const uu = new Error(`@colyseus/schema: Duplicate '${Eu}' definition on '${Ku.name}'.\nCheck @type() annotation`);
            throw new Error(`${uu.message} ${uu.stack.split("\n")[4].trim()}`)
          }
        } else Ju = mu[Du] ?? (Qu && Qu[Du]) ?? -1, Ju++;
        if (Ru && Ru.manual) oR.addField(mu, Ju, Eu, uu, {
          enumerable: !0,
          configurable: !0,
          writable: !0
        });
        else {
          const {
            complexTypeKlass: Ru,
            childType: yu
          } = wR(uu);
          oR.addField(mu, Ju, Eu, uu, CE(Eu, Ju, yu, Ru))
        }
        mu[ku][Eu] && Object.defineProperty(yu, Eu, mu[ku][Eu]), ("string" === typeof uu || gR(uu)) && (mu[Au] || Object.defineProperty(mu, Au, {
          value: [],
          enumerable: !1,
          configurable: !0,
          writable: !0
        }), mu[Au][Ju] = "string" === typeof uu ? RR[uu] : zR(uu.quantized))
      }
    }
    const bE = {
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

    function CE(uu, Ru, yu, Eu) {
      let Qu;
      return Qu = Eu ? function(uu, Ru, yu, Eu) {
        const Qu = Eu.constructor === yE,
          mu = Eu.constructor === KE;
        return function(uu) {
          const Eu = this[bu],
            Ju = Eu[Ru];
          if (uu !== Ju) {
            if (void 0 !== uu && null !== uu) {
              if (!Qu || uu instanceof yE)
                if (!mu || uu instanceof KE) uu[Tu] = yu;
                else {
                  const Ru = new KE;
                  if (Ru[Tu] = yu, uu instanceof Map) uu.forEach(((uu, yu) => Ru.set(yu, uu)));
                  else
                    for (const yu in uu) Ru.set(yu, uu[yu]);
                  uu = Ru
                }
              else {
                const Ru = new yE;
                Ru[Tu] = yu, Ru.push(...uu), uu = Ru
              }
              const Eu = this[pu],
                Xu = this.constructor;
              void 0 !== Ju && null !== Ju && Ju[pu] ? (Eu.root?.remove(Ju[pu]), Xu[Nu](Eu, Ru, Ku.DELETE_AND_ADD)) : Xu[Nu](Eu, Ru, Ku.ADD), uu[pu]?.setParent(this, Eu.root, Ru)
            } else void 0 !== Ju && null !== Ju && this[pu].delete(Ru);
            Eu[Ru] = uu
          }
        }
      }(0, Ru, yu, Eu) : "string" === typeof yu ? function(uu, Ru, yu) {
        const Eu = bE[yu],
          Qu = "string" === yu,
          mu = "boolean" === yu;
        return function(yu) {
          const Ju = this[bu],
            Xu = Ju[Ru];
          if (yu !== Xu) {
            if (void 0 !== yu && null !== yu) {
              if (!mu && void 0 !== Eu && typeof yu !== Eu && (!Qu || null !== yu)) {
                const Ru = yu && yu.constructor ? ` (${yu.constructor.name})` : "";
                throw new ay(`a '${Eu}' was expected, but '${JSON.stringify(yu)}'${Ru} was provided in ${this.constructor.name}#${uu}`)
              }
              this.constructor[Nu](this[pu], Ru, Ku.ADD)
            } else void 0 !== Xu && null !== Xu && this[pu].delete(Ru);
            Ju[Ru] = yu
          }
        }
      }(uu, Ru, yu) : gR(yu) ? function(uu, Ru, yu) {
        return function(Eu) {
          const Qu = this[bu],
            mu = Qu[Ru];
          if (void 0 !== Eu && null !== Eu) {
            if ("number" !== typeof Eu) throw new ay(`a 'number' was expected, but '${JSON.stringify(Eu)}' was provided in ${this.constructor.name}#${uu}`);
            if ((Eu = LR(yu, cR(yu, Eu))) === mu) return;
            this.constructor[Nu](this[pu], Ru, Ku.ADD)
          } else {
            if (Eu === mu) return;
            void 0 !== mu && null !== mu && this[pu].delete(Ru)
          }
          Qu[Ru] = Eu
        }
      }(uu, Ru, yu.quantized) : function(uu, Ru, yu) {
        return function(Eu) {
          const Qu = this[bu],
            mu = Qu[Ru];
          if (Eu !== mu) {
            if (void 0 !== Eu && null !== Eu) {
              fy(Eu, yu, this, uu);
              const Qu = this[pu],
                Ju = this.constructor;
              void 0 !== mu && null !== mu && mu[pu] ? (Qu.root?.remove(mu[pu]), Ju[Nu](Qu, Ru, Ku.DELETE_AND_ADD)) : Ju[Nu](Qu, Ru, Ku.ADD), Eu[pu]?.setParent(this, Qu.root, Ru)
            } else void 0 !== mu && null !== mu && this[pu].delete(Ru);
            Qu[Ru] = Eu
          }
        }
      }(uu, Ru, yu), {
        get: function() {
          return this[bu][Ru]
        },
        set: Qu,
        enumerable: !0,
        configurable: !0
      }
    }

    function kE() {
      let uu = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
      return function(Ru, yu) {
        const Eu = oR.initialize(Ru.constructor);
        oR.setDeprecated(Eu, yu), uu && (Eu[ku] ??= {}, Eu[ku][yu] = {
          get: function() {
            throw new Error(`${yu} is deprecated.`)
          },
          set: function(uu) {},
          enumerable: !1,
          configurable: !0
        }, Object.defineProperty(Ru, yu, Eu[ku][yu]))
      }
    }
    let eE = !1;

    function AE(uu, Ru, yu) {
      eE || (eE = !0, console.warn("@colyseus/schema: defineTypes() is deprecated and will be removed in a future release. Use schema() with t.* field builders instead \u2192 https://docs.colyseus.io/state/schema"));
      for (let Eu in Ru) dE(Ru[Eu], yu)(uu.prototype, Eu);
      return uu
    }

    function DE(uu, Ru) {
      let yu = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : IE;
      if (null == uu || "object" !== typeof uu) throw new Error(`schema(): first argument must be a fields object (got ${typeof uu}).`);
      const Eu = {},
        Ku = {},
        Qu = {},
        mu = {},
        Ju = (uu, Ru) => {
          if (Ru.hasDefault)((uu, Ru) => {
            "function" === typeof Ru ? mu[uu] = Ru : Ru && "function" === typeof Ru.clone ? mu[uu] = () => Ru.clone() : Qu[uu] = Ru
          })(uu, Ru.default);
          else if (!Ru.optional) {
            const yu = function(uu) {
              if (uu && "object" === typeof uu) {
                if (void 0 !== uu.array) return () => new yE;
                if (void 0 !== uu.map) return () => new KE;
                if (void 0 !== uu.set) return () => new mE;
                if (void 0 !== uu.collection) return () => new QE;
                if (void 0 !== uu.stream) return () => new JE
              } else if ("function" === typeof uu && IE.is(uu) && (!uu.prototype.initialize || 0 === uu.prototype.initialize.length)) return () => new uu
            }(Ru.type);
            yu && (mu[uu] = yu)
          }
        },
        Nu = {},
        Xu = [],
        Vu = [],
        ru = {},
        Bu = [],
        xu = [],
        Su = {},
        pu = [];
      for (const bu in uu) {
        const yu = uu[bu],
          Qu = `schema(${Ru?`'${Ru}'`:""}): field '${bu}'`;
        if (XE(yu)) {
          const uu = yu.toDefinition();
          if (uu.noSync) {
            if (void 0 !== uu.view || uu.unreliable || uu.patchOnly || uu.fullStateOnly || uu.stream) throw new Error(`${Qu} uses .noSync() together with a sync-only modifier (.view/.unreliable/.patchOnly/.fullStateOnly/.stream). A local-only field cannot be synchronized.`);
            Ju(bu, uu);
            continue
          }
          if (uu.patchOnly && uu.fullStateOnly) throw new Error(`${Qu} uses .patchOnly() together with .fullStateOnly(). Those are the only two delivery channels, so the field would never reach a client \u2014 use .noSync() if that is intended.`);
          const Ru = ZR(uu.type, Qu);
          if ("function" === typeof Ru && !IE.is(Ru)) throw new Error(`${Qu} is a synced ref to non-Schema class '${Ru.name||"(anonymous)"}' \u2014 use .noSync(), or Metadata.setFields().`);
          Eu[bu] = Ru, void 0 !== uu.view && (Nu[bu] = uu.view), uu.unreliable && Xu.push(bu), uu.patchOnly && Vu.push(bu), uu.deprecated && (ru[bu] = uu.deprecatedThrows), uu.fullStateOnly && Bu.push(bu), uu.stream && xu.push(bu), void 0 !== uu.streamPriority && (Su[bu] = uu.streamPriority), uu.optional && pu.push(bu), Ju(bu, uu)
        } else {
          if ("function" !== typeof yu) throw new Error(`${Qu} must be a t.* builder, Schema subclass, or method (got ${typeof yu}).`);
          IE.is(yu) ? (Eu[bu] = yu, yu.prototype.initialize && 0 !== yu.prototype.initialize.length || (mu[bu] = () => new yu)) : Ku[bu] = yu
        }
      }
      const Tu = uu => {
          for (const Ru in Qu) uu[Ru] = Qu[Ru];
          for (const Ru in mu) uu[Ru] = mu[Ru]()
        },
        Wu = () => {
          const uu = {};
          return Tu(uu), uu
        },
        ju = "function" === typeof Ku.initialize,
        Hu = Ku.initialize ?? yu._initialize,
        du = class extends yu {
          constructor() {
            for (var uu = arguments.length, Ru = new Array(uu), yu = 0; yu < uu; yu++) Ru[yu] = arguments[yu];
            const Ku = Ru[0];
            void 0 === Ku ? (super(), Tu(this)) : super(Object.assign(Wu(), ju ? (uu => {
              const Ru = Object.keys(Eu),
                yu = {};
              for (const Eu in uu) Ru.includes(Eu) || (yu[Eu] = uu[Eu]);
              return yu
            })(Ku) : Ku)), Hu && new.target === du && Hu.apply(this, Ru)
          }
        };
      Ru && Object.defineProperty(du, "name", {
        value: Ru
      }), oR.setFields(du, Eu), du._getDefaultValues = Wu, du._initialize = Hu, Object.assign(du.prototype, Ku);
      for (const bu in Nu) TE(Nu[bu])(du.prototype, bu);
      for (const bu of Xu) WE(du.prototype, bu);
      for (const bu of Vu) jE(du.prototype, bu);
      for (const bu in ru) kE(ru[bu])(du.prototype, bu);
      if (Bu.length > 0 || xu.length > 0) {
        const uu = du[Symbol.metadata];
        for (const Ru of Bu) oR.setFullStateOnly(uu, Ru);
        for (const Ru of xu) oR.setStream(uu, Ru);
        for (const Ru in Su) oR.setStreamPriority(uu, Ru, Su[Ru])
      }
      if (pu.length > 0) {
        const uu = du[Symbol.metadata];
        for (const Ru of pu) uu[uu[Ru]].optional = !0
      }
      return du.extend = (uu, Ru) => DE(uu, Ru, du), du
    }

    function ME(uu) {
      const Ru = uu[pu].root,
        yu = {
          ops: {},
          refs: []
        };
      let Eu = Ru.changes.next;
      for (; Eu;) {
        const uu = Eu.changeTree;
        void 0 !== uu ? (yu.refs.push(`refId#${uu.ref[Ju]}`), uu.forEach(((uu, Ru) => {
          if (uu < 0 || !Ru) return;
          const Eu = Ku[Ru];
          yu.ops[Eu] || (yu.ops[Eu] = 0), yu.ops[Eu]++
        })), Eu = Eu.next) : Eu = Eu.next
      }
      return yu
    }
    class IE {
      static[Xu] = ty;
      static[Vu] = qy;
      [Ju];
      [bu];
      static initialize(uu) {
        Object.defineProperty(uu, pu, {
          value: new Gy(uu),
          enumerable: !1,
          writable: !0
        }), uu[bu] = []
      }
      static initializeForDecoder() {
        const uu = Object.create(this.prototype);
        return ny(uu), uu[bu] = [], uu
      }
      static reset(uu) {
        const Ru = uu?.[pu];
        if (void 0 === Ru || "function" !== typeof Ru.recycle) throw new Error("@colyseus/schema: Schema.reset() requires a tracked (encoder-side) instance.");
        if (void 0 !== Ru.extraParents) throw new Error(`@colyseus/schema: cannot reset a shared instance (${uu.constructor.name}) with multiple parents.`);
        uu[Hu]()
      } [Hu]() {
        const uu = this.constructor[Symbol.metadata],
          Ru = uu?.[Mu] ?? [],
          yu = this[bu];
        for (let Eu = 0; Eu < Ru.length; Eu++) {
          const uu = yu[Ru[Eu]];
          uu?.[Hu]?.()
        }
        this[pu].recycle(), this[Ju] = void 0
      }
      static is(uu) {
        const Ru = uu[Symbol.metadata];
        return "object" === typeof Ru && null !== Ru
      }
      static isSchema(uu) {
        return "function" === typeof uu?.assign
      }
      static[Nu](uu, Ru) {
        let yu = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Ku.ADD;
        uu.change(Ru, yu)
      }
      static[ru](uu, Ru, yu) {
        const Eu = uu.constructor[Symbol.metadata],
          Ku = Eu[Ru]?.tag;
        return void 0 === yu ? void 0 === Ku : void 0 === Ku || (Ku === SE ? yu.isChangeTreeVisible(uu[pu]) : yu.hasTagOnTree(uu[pu], Ku))
      }
      constructor(uu) {
        IE.initialize(this), uu && IE.assignProps(this, uu)
      }
      assign(uu) {
        return IE.assignProps(this, uu), this
      }
      static assignProps(uu, Ru) {
        const yu = uu.constructor[Symbol.metadata];
        if (yu && void 0 !== yu[Du])
          for (let Ku = 0; Ku <= yu[Du]; Ku++) {
            const Eu = yu[Ku];
            if (!Eu) continue;
            const Qu = Ru[Eu.name];
            void 0 !== Qu && (uu[Eu.name] = Qu)
          }
        const Eu = Object.keys(Ru);
        for (let Ku = 0; Ku < Eu.length; Ku++) {
          const Qu = Eu[Ku];
          yu && void 0 !== yu[Qu] || (uu[Qu] = Ru[Qu])
        }
      }
      restore(uu) {
        const Ru = this.constructor[Symbol.metadata];
        for (const yu in Ru) {
          const Eu = Ru[yu],
            Ku = Eu.name,
            Qu = Eu.type,
            mu = uu[Ku];
          if (void 0 !== mu && null !== mu)
            if ("string" === typeof Qu) this[Ku] = mu;
            else if (IE.is(Qu)) {
            const uu = new Qu;
            uu.restore(mu), this[Ku] = uu
          } else if ("object" === typeof Qu) {
            const uu = Object.keys(Qu)[0],
              Ru = Qu[uu];
            if ("map" === uu) {
              const uu = this[Ku];
              for (const yu in mu)
                if (IE.is(Ru)) {
                  const Eu = new Ru;
                  Eu.restore(mu[yu]), uu.set(yu, Eu)
                } else uu.set(yu, mu[yu])
            } else if ("array" === uu) {
              const uu = this[Ku];
              for (let yu = 0; yu < mu.length; yu++)
                if (IE.is(Ru)) {
                  const Eu = new Ru;
                  Eu.restore(mu[yu]), uu.push(Eu)
                } else uu.push(mu[yu])
            }
          }
        }
        return this
      }
      setDirty(uu, Ru) {
        const yu = this.constructor[Symbol.metadata];
        this[pu].change(yu[yu[uu]].index, Ru)
      }
      pauseTracking() {
        this[pu].pause()
      }
      resumeTracking() {
        this[pu].resume()
      }
      untracked(uu) {
        return this[pu].untracked(uu)
      }
      get isTrackingPaused() {
        return this[pu].paused
      }
      clone() {
        const uu = Object.create(this.constructor.prototype);
        IE.initialize(uu);
        const Ru = this.constructor[Symbol.metadata];
        for (const yu in Ru) {
          const Eu = Ru[yu].name;
          "object" === typeof this[Eu] && "function" === typeof this[Eu]?.clone ? uu[Eu] = this[Eu].clone() : uu[Eu] = this[Eu]
        }
        return uu
      }
      toJSON() {
        const uu = {},
          Ru = this.constructor[Symbol.metadata];
        for (const yu in Ru) {
          const Eu = Ru[yu],
            Ku = Eu.name;
          Eu.deprecated || null === this[Ku] || "undefined" === typeof this[Ku] || (uu[Ku] = "function" === typeof this[Ku].toJSON ? this[Ku].toJSON() : this[Ku])
        }
        return uu
      }
      discardAllChanges() {
        this[pu].discardAll()
      } [Bu](uu) {
        return this[this.constructor[Symbol.metadata][uu].name]
      } [xu](uu) {
        this[this.constructor[Symbol.metadata][uu].name] = void 0
      }
      static debugRefIds(uu) {
        let Ru = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          yu = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          Eu = arguments.length > 3 ? arguments[3] : void 0,
          Ku = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "";
        const Qu = Ru ? ` - ${JSON.stringify(uu.toJSON())}` : "",
          mu = uu[pu],
          Nu = uu[Ju],
          Xu = Eu ? Eu.root.refCount[Nu] : mu.refCount,
          Vu = Xu > 1 ? ` [\xd7${Xu}]` : "";
        let ru = `${function(uu){return new Array(uu).fill(0).map(((Ru,yu)=>yu===uu-1?"\u2514\u2500 ":"   ")).join("")}(yu)}${Ku}${uu.constructor.name} (refId: ${Nu})${Vu}${Qu}\n`;
        return mu.forEachChild(((Ku, Qu) => {
          let mu = Qu;
          "number" === typeof Qu && uu.$indexes && (mu = uu.$indexes.get(Qu) ?? Qu);
          const Ju = void 0 !== uu.forEach && void 0 !== mu ? `["${mu}"]: ` : "";
          ru += this.debugRefIds(Ku.ref, Ru, yu + 1, Eu, Ju)
        })), ru
      }
      static debugRefIdEncodingOrder(uu) {
        let Ru = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "allChanges";
        const yu = [],
          Eu = uu[pu];
        if ("changes" === Ru) {
          let uu = Eu.root.changes?.next;
          for (; uu;) uu.changeTree && yu.push(uu.changeTree.ref[Ju]), uu = uu.next;
          return yu
        }
        const Ku = "allFilteredChanges" === Ru,
          Qu = new Set,
          mu = uu => {
            Qu.has(uu) || (Qu.add(uu), uu.isFiltered === Ku && yu.push(uu.ref[Ju]), uu.forEachChild(((uu, Ru) => mu(uu))))
          };
        return mu(Eu), yu
      }
      static debugRefIdsFromDecoder(uu) {
        return this.debugRefIds(uu.state, !1, 0, uu)
      }
      static debugChanges(uu) {
        let Ru = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        const yu = uu[pu],
          Eu = Ru ? "allChanges" : "changes";
        let Qu = `${uu.constructor.name} (${uu[Ju]}) -> .${Eu}:\n`;
        return Ru ? yu.forEachLive((uu => {
          Qu += `- [${uu}]: ADD (${JSON.stringify(yu.getValue(Number(uu),!0))})\n`
        })) : yu.forEach(((uu, Ru) => {
          uu < 0 || !Ru || (Qu += `- [${uu}]: ${Ku[Ru]} (${JSON.stringify(yu.getValue(Number(uu),!1))})\n`)
        })), Qu
      }
    }
    Qu(IE);
    const GE = {
      value: 0,
      enumerable: !1,
      writable: !0
    };
    class UE {
      types;
      nextUniqueId = 0;
      changeTrees = {};
      get refCount() {
        const uu = {};
        for (const Ru in this.changeTrees) uu[Ru] = this.changeTrees[Ru].refCount;
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
        this.types.hasFilters && (uu.flags & My || (uu.flags |= My, this.pendingFilterRefresh.push(uu)))
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
        const Ru = uu.id;
        for (const yu of this.streamTrees) yu._dropView(Ru)
      }
      forEachActiveView(uu) {
        for (const [Ru, yu] of this.activeViews) {
          const Eu = yu.deref();
          if (void 0 !== Eu) uu(Eu);
          else {
            this.activeViews.delete(Ru);
            for (const uu of this.streamTrees) uu._dropView(Ru)
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
        let Ru = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        this.types = uu, this.nextUniqueId = Ru
      }
      add(uu) {
        const Ru = uu.ref;
        void 0 === Ru[Ju] && (GE.value = this.nextUniqueId++, Object.defineProperty(Ru, Ju, GE));
        const yu = Ru[Ju],
          Eu = void 0 === this.changeTrees[yu];
        Eu && (this.changeTrees[yu] = uu), uu.needsRestage && (uu.needsRestage = !1, uu.forEachLiveWithCtx(uu, yy));
        const Ku = Eu ? 0 : uu.refCount;
        return uu.refCount = Ku + 1, Ku > 0 && this.enqueueFilterRefresh(uu), Eu
      }
      remove(uu) {
        const Ru = uu.refCount - 1;
        if (Ru <= 0) {
          if (uu.root = void 0, delete this.changeTrees[uu.ref[Ju]], uu.isStreamCollection) {
            const Ru = uu.ref;
            Ru._unregister?.(), this.unregisterStream(Ru)
          }
          this.removeFromQueue(uu), this.removeFromUnreliableQueue(uu), uu.refCount = 0, uu.needsRestage = !0, uu.forEachChild(((Ru, yu) => {
            Ru.removeParent(uu.ref) && (void 0 === Ru.parentRef || Ru.refCount > 0 ? this.remove(Ru) : this.moveNextToParent(Ru))
          }))
        } else uu.refCount = Ru, this.enqueueFilterRefresh(uu), this.recursivelyMoveNextToParent(uu);
        return Ru
      }
      recursivelyMoveNextToParent(uu) {
        this.moveNextToParent(uu), uu.forEachChild(((uu, Ru) => this.recursivelyMoveNextToParent(uu)))
      }
      moveNextToParent(uu) {
        uu.changesNode && this._moveNextToParentInList(this.changes, uu, uu.changesNode, "changesNode"), uu.unreliableChangesNode && this._moveNextToParentInList(this.unreliableChanges, uu, uu.unreliableChangesNode, "unreliableChangesNode")
      }
      _moveNextToParentInList(uu, Ru, yu, Eu) {
        const Ku = Ru.parent;
        if (!Ku || !Ku[pu]) return;
        const Qu = Ku[pu][Eu];
        Qu && Qu !== yu && (yu.position > Qu.position || (yu.prev ? yu.prev.next = yu.next : uu.next = yu.next, yu.next ? yu.next.prev = yu.prev : uu.tail = yu.prev, yu.prev = uu.tail, yu.next = void 0, uu.tail.next = yu, uu.tail = yu, yu.position = uu.nextPosition++))
      }
      enqueueChangeTree(uu) {
        (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : uu.changesNode) || (uu.changesNode = this._appendToList(this.changes, uu))
      }
      enqueueUnreliable(uu) {
        (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : uu.unreliableChangesNode) || (uu.unreliableChangesNode = this._appendToList(this.unreliableChanges, uu))
      }
      _appendToList(uu, Ru) {
        const yu = this._nodePool;
        let Eu;
        return yu.length > 0 ? (Eu = yu.pop(), Eu.changeTree = Ru, Eu.next = void 0, Eu.prev = void 0) : Eu = {
          changeTree: Ru,
          next: void 0,
          prev: void 0,
          position: 0
        }, uu.next ? (Eu.prev = uu.tail, uu.tail.next = Eu, uu.tail = Eu) : (uu.nextPosition = 0, uu.next = Eu, uu.tail = Eu), Eu.position = uu.nextPosition++, Eu
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
      _removeNode(uu, Ru, yu, Eu) {
        return !(!yu || yu.changeTree !== Ru) && (yu.prev ? yu.prev.next = yu.next : uu.next = yu.next, yu.next ? yu.next.prev = yu.prev : uu.tail = yu.prev, Ru[Eu] = void 0, this.releaseNode(yu), !0)
      }
    }

    function nE(uu, Ru) {
      if (-1 === Ru || Ru >= uu.length) return !1;
      const yu = uu.length - 1;
      for (let Eu = Ru; Eu < yu; Eu++) uu[Eu] = uu[Eu + 1];
      return uu.length = yu, !0
    }

    function sE(uu, Ru, yu) {
      const Eu = ~yu,
        Ku = uu.changeTrees;
      for (const Qu in Ku) {
        const uu = Ku[Qu],
          yu = uu.visibleViews;
        void 0 !== yu && Ru < yu.length && (yu[Ru] &= Eu);
        const mu = uu.subscribedViews;
        void 0 !== mu && Ru < mu.length && (mu[Ru] &= Eu);
        const Ju = uu.tagViews;
        void 0 !== Ju && Ju.forEach((uu => {
          Ru < uu.length && (uu[Ru] &= Eu)
        }))
      }
    }
    const tE = new FinalizationRegistry((uu => {
      let {
        root: Ru,
        id: yu,
        slot: Eu,
        bit: Ku
      } = uu;
      sE(Ru, Eu, Ku), Ru.activeViews.delete(yu);
      for (const Qu of Ru.streamTrees) Qu._dropView(yu);
      Ru.releaseViewId(yu)
    }));

    function lE(uu) {
      if (void 0 === uu) return "undefined";
      if (null === uu) return "null";
      const Ru = typeof uu;
      return "string" === Ru ? JSON.stringify(uu.length > 30 ? `${uu.slice(0,30)}\u2026` : uu) : "object" !== Ru && "function" !== Ru ? `${Ru} ${String(uu)}` : Array.isArray(uu) ? `Array(${uu.length})` : uu.constructor?.name ?? "Object"
    }
    class gE {
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
        void 0 === this._root && (this._root = uu, this.id = uu.acquireViewId(), this._slot = this.id >> 5, this._bit = 1 << (31 & this.id), uu.registerView(this), tE.register(this, {
          root: uu,
          id: this.id,
          slot: this._slot,
          bit: this._bit
        }, this))
      }
      dispose() {
        void 0 !== this._root && (this._root.unregisterView(this), sE(this._root, this._slot, this._bit), this._root.releaseViewId(this.id), tE.unregister(this), this._root = void 0, this.id = -1)
      }
      isVisible(uu) {
        const Ru = uu.visibleViews,
          yu = this._slot;
        return void 0 !== Ru && yu < Ru.length && 0 !== (Ru[yu] & this._bit)
      }
      markVisible(uu) {
        const Ru = this._slot;
        let yu = uu.visibleViews;
        for (void 0 === yu && (yu = uu.visibleViews = []); yu.length <= Ru;) yu.push(0);
        yu[Ru] |= this._bit
      }
      unmarkVisible(uu) {
        const Ru = uu.visibleViews;
        if (void 0 === Ru) return;
        const yu = this._slot;
        yu < Ru.length && (Ru[yu] &= ~this._bit)
      }
      isSubscribed(uu) {
        const Ru = uu.subscribedViews,
          yu = this._slot;
        return void 0 !== Ru && yu < Ru.length && 0 !== (Ru[yu] & this._bit)
      }
      _setSubscribed(uu) {
        const Ru = this._slot;
        let yu = uu.subscribedViews;
        for (void 0 === yu && (yu = uu.subscribedViews = []); yu.length <= Ru;) yu.push(0);
        yu[Ru] |= this._bit
      }
      _clearSubscribed(uu) {
        const Ru = uu.subscribedViews;
        if (void 0 === Ru) return;
        const yu = this._slot;
        yu < Ru.length && (Ru[yu] &= ~this._bit)
      }
      hasTagOnTree(uu, Ru) {
        const yu = uu.tagViews;
        if (void 0 === yu) return !1;
        const Eu = this._slot,
          Ku = this._bit;
        for (let Qu = Ru; 0 !== Qu; Qu &= Qu - 1) {
          const uu = yu.get(Qu & -Qu);
          if (void 0 !== uu && Eu < uu.length && 0 !== (uu[Eu] & Ku)) return !0
        }
        return !1
      }
      addTag(uu, Ru) {
        if (Ru === SE) return;
        let yu = uu.tagViews;
        void 0 === yu && (yu = uu.tagViews = new Map);
        const Eu = this._slot,
          Ku = this._bit;
        for (let Qu = Ru; Qu > 0; Qu &= Qu - 1) {
          const uu = Qu & -Qu;
          let Ru = yu.get(uu);
          for (void 0 === Ru && (Ru = [], yu.set(uu, Ru)); Ru.length <= Eu;) Ru.push(0);
          Ru[Eu] |= Ku
        }
      }
      removeTag(uu, Ru) {
        if (Ru === SE) return;
        const yu = uu.tagViews;
        if (void 0 === yu) return;
        const Eu = this._slot,
          Ku = ~this._bit;
        for (let Qu = Ru; Qu > 0; Qu &= Qu - 1) {
          const uu = yu.get(Qu & -Qu);
          void 0 !== uu && Eu < uu.length && (uu[Eu] &= Ku)
        }
      }
      removeAllTagsOnTree(uu) {
        const Ru = uu.tagViews;
        if (void 0 === Ru) return;
        const yu = this._slot,
          Eu = ~this._bit;
        Ru.forEach((uu => {
          yu < uu.length && (uu[yu] &= Eu)
        }))
      }
      add(uu) {
        let Ru = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : SE,
          yu = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        return this._add(uu, Ru, yu, !1)
      }
      _addImmediate(uu) {
        let Ru = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : SE;
        this._add(uu, Ru, !0, !0)
      }
      _add(uu, Ru, yu, Eu) {
        const Qu = uu?.[pu];
        if (!Qu) return console.warn(`StateView#add(): expected a Schema instance or collection, received ${lE(uu)}`), !1;
        const mu = Qu.parent;
        if (!mu && 0 !== uu[Ju]) throw new Error(`Cannot add a detached instance to the StateView. Make sure to assign the "${Qu.ref.constructor.name}" instance to the state before calling view.add()`);
        void 0 === this._root && void 0 !== Qu.root && this._bindRoot(Qu.root);
        const Nu = mu?.[pu];
        if (!Eu && Nu?.isStreamCollection) return nR(mu, this.id, Qu.parentIndex), !0;
        const Xu = uu.constructor[Symbol.metadata],
          Vu = this.isVisible(Qu);
        if (!this.iterable || !yu || Vu && -1 !== this.items.indexOf(uu) || this.items.push(uu), this.markVisible(Qu), yu && mu && this.addParentOf(Qu, Ru), !Eu && Qu.isStreamCollection) return !0;
        if (Ru === SE && Qu.isNew) return this._markSubtreeVisible(Qu, Ru), !1;
        let ru = this.changes.get(uu[Ju]);
        void 0 === ru && (ru = new Map, this.changes.set(uu[Ju], ru));
        let Bu = !1;
        const xu = Qu.encDescriptor.tags;
        if (Qu.forEachChild(((uu, yu) => {
            const Eu = xu[yu];
            if (void 0 !== Eu) {
              if (!(Eu === SE || Ru !== SE && 0 !== (Eu & Ru))) return
            }
            this.add(uu.ref, Ru, !1) && (Bu = !0)
          })), Ru !== SE) {
          this.addTag(Qu, Ru);
          const uu = Xu?.[Gu];
          if (void 0 !== uu)
            for (let yu = Ru; yu > 0; yu &= yu - 1) uu[yu & -yu]?.forEach((uu => {
              Qu.getChange(uu) !== Ku.DELETE && ru.set(uu, Ku.ADD)
            }))
        }
        if ((Ru === SE || !Vu) && (!Qu.isNew || Bu))
          if (Qu.isArray && "string" !== typeof Qu.refTarget[Tu]) Qu.refTarget.items.length > 0 && (ru.set(-1, Ku.ADD), Bu = !0);
          else {
            const uu = Qu.encDescriptor.tags;
            Qu.forEachLive((yu => {
              const Eu = uu[yu];
              (void 0 === Eu || Eu === SE || Ru !== SE && 0 !== (Eu & Ru)) && (ru.set(yu, Ku.ADD), Bu = !0)
            }))
          } return Bu
      }
      _markSubtreeVisible(uu, Ru) {
        const yu = uu.encDescriptor.tags;
        uu.forEachChild(((uu, Eu) => {
          const Ku = yu[Eu];
          if (void 0 !== Ku) {
            if (!(Ku === SE || Ru !== SE && 0 !== (Ku & Ru))) return
          }
          uu.isNew ? (this.markVisible(uu), this._markSubtreeVisible(uu, Ru)) : this._add(uu.ref, Ru, !1, !1)
        }))
      }
      addParentOf(uu, Ru) {
        const yu = uu.parent[pu],
          Eu = uu.parentIndex;
        this.isVisible(yu) || this.markVisible(yu);
        const Qu = yu.parent?.[pu];
        if (Qu && this.addParentOf(yu, Ru), yu.hasFilteredFields && yu.getChange(Eu) !== Ku.DELETE) {
          let Qu = this.changes.get(yu.ref[Ju]);
          void 0 === Qu && (Qu = new Map, this.changes.set(yu.ref[Ju], Qu));
          const mu = yu.encDescriptor.tags[Eu];
          void 0 !== mu && mu !== SE && 0 !== (mu & Ru) && this.addTag(yu, Ru), Qu.set(yu.isArray ? uu : Eu, Ku.ADD)
        }
      }
      _touchAncestorsOf(uu) {
        let Ru = uu.parent?.[pu];
        if (void 0 === Ru) return;
        const yu = [];
        for (; void 0 !== Ru;) {
          if (Ru.hasFilteredFields) {
            const uu = Ru.ref[Ju];
            if (this.changes.has(uu)) break;
            yu.push(Ru)
          }
          Ru = Ru.parent?.[pu]
        }
        for (let Eu = yu.length - 1; Eu >= 0; Eu--) this.changes.set(yu[Eu].ref[Ju], new Map)
      }
      remove(uu) {
        let Ru = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : SE,
          yu = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        const Eu = uu?.[pu];
        if (!Eu) return console.warn(`StateView#remove(): expected a Schema instance or collection, received ${lE(uu)}`), this;
        const Qu = Eu.parent?.[pu];
        if (Qu?.isStreamCollection) return this.unmarkVisible(Eu), this.iterable && !yu && nE(this.items, this.items.indexOf(uu)),
          function(uu, Ru, yu, Eu, Qu) {
            const mu = uu._stream;
            if (void 0 === mu) return !1;
            const Ju = mu.pendingByView.get(Ru);
            if (Ju?.has(Eu)) return Ju.delete(Eu), !1;
            const Nu = mu.sentByView.get(Ru);
            if (Nu?.has(Eu)) {
              Nu.delete(Eu);
              let uu = Qu.get(yu);
              return void 0 === uu && (uu = new Map, Qu.set(yu, uu)), uu.set(Eu, Ku.DELETE), !0
            }
          }(Eu.parent, this.id, Eu.parent[Ju], Eu.parentIndex, this.changes), this._recursiveDeleteVisibleChangeTree(Eu), this;
        if (Eu.isStreamCollection) {
          this.unmarkVisible(Eu), this.iterable && !yu && nE(this.items, this.items.indexOf(uu));
          const Ru = Eu.ref,
            Qu = Ru._stream;
          if (void 0 !== Qu) {
            Qu.pendingByView.get(this.id)?.clear();
            const uu = Qu.sentByView.get(this.id);
            if (void 0 !== uu && uu.size > 0) {
              const yu = Ru[Ju];
              let Eu = this.changes.get(yu);
              void 0 === Eu && (Eu = new Map, this.changes.set(yu, Eu));
              for (const Ru of uu) Eu.set(Ru, Ku.DELETE);
              uu.clear()
            }
          }
          return this
        }
        this.unmarkVisible(Eu), this.iterable && !yu && nE(this.items, this.items.indexOf(uu));
        const mu = Eu.ref,
          Nu = mu.constructor[Symbol.metadata],
          Xu = mu[Ju];
        this._touchAncestorsOf(Eu);
        let Vu = this.changes.get(Xu);
        if (void 0 === Vu && (Vu = new Map, this.changes.set(Xu, Vu)), Ru === SE) {
          const uu = Eu.parent;
          if (uu && !oR.isValidInstance(uu) && Eu.isFiltered) {
            const Ru = Qu.isArray ? Eu : Eu.parentIndex,
              yu = uu[Ju];
            let mu = this.changes.get(yu);
            void 0 === mu ? (mu = new Map, this.changes.set(yu, mu)) : mu.get(Ru) === Ku.ADD && this._dropPendingEntries(Eu), mu.set(Ru, Ku.DELETE), this._recursiveDeleteVisibleChangeTree(Eu)
          } else Nu?.[Iu]?.forEach((uu => this._removeViewField(Eu, Vu, uu)))
        } else {
          const uu = Nu?.[Gu];
          if (void 0 !== uu)
            for (let yu = Ru; yu > 0; yu &= yu - 1) uu[yu & -yu]?.forEach((uu => this._removeViewField(Eu, Vu, uu)))
        }
        return void 0 === Ru ? this.removeAllTagsOnTree(Eu) : this.removeTag(Eu, Ru), this
      }
      has(uu) {
        return this.isVisible(uu[pu])
      }
      hasTag(uu) {
        let Ru = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : SE;
        return this.hasTagOnTree(uu[pu], Ru)
      }
      subscribe(uu, Ru) {
        const yu = uu?.[pu];
        if (!yu) return console.warn(`StateView#subscribe(): expected a Schema collection, received ${lE(uu)}`), this;
        if (void 0 === this._root && void 0 !== yu.root && this._bindRoot(yu.root), void 0 !== Ru)
          if (yu.isStreamCollection) {
            const yu = DR(uu);
            null === Ru ? yu.priorityByView?.delete(this.id) : (yu.priorityByView ??= new Map).set(this.id, Ru)
          } else {
            const Ru = uu?.constructor?.name ?? "collection",
              Eu = yu.parent;
            if (void 0 === Eu) console.warn(`StateView#subscribe(): \`priority\` ignored \u2014 this ${Ru} is not attached to a state yet, so it cannot be identified as a stream. Subscribe after assigning it to the state.`);
            else {
              const uu = Eu?.constructor?.[Symbol.metadata]?.[yu.parentIndex]?.name,
                Ku = uu ? `${Eu.constructor.name}#${uu}` : Ru;
              console.warn(`StateView#subscribe(): \`priority\` ignored \u2014 ${Ku} is a ${Ru}, not a streaming collection. Declare the field with .stream() (e.g. t.map(X).stream()) or use t.stream(X) to enable priority batching.`)
            }
          } if (this.isSubscribed(yu)) return this;
        const Eu = void 0 !== yu.parent && !this.isVisible(yu);
        if (Eu ? (this.addParentOf(yu, SE), this._add(uu, SE, !1, !1)) : this.markVisible(yu), this._setSubscribed(yu), yu.isStreamCollection) {
          const Ru = uu;
          yu.forEachChild(((uu, yu) => {
            nR(Ru, this.id, yu)
          }))
        } else Eu || yu.forEachChild((uu => {
          this.markVisible(uu)
        }));
        return this
      }
      unsubscribe(uu) {
        const Ru = uu?.[pu];
        if (!Ru) return console.warn(`StateView#unsubscribe(): expected a Schema collection, received ${lE(uu)}`), this;
        if (!this.isSubscribed(Ru)) return this;
        this._clearSubscribed(Ru);
        const yu = Ru.ref[Ju];
        if (Ru.isStreamCollection) {
          const Ru = uu._stream;
          if (void 0 !== Ru) {
            Ru.pendingByView.get(this.id)?.clear();
            const uu = Ru.sentByView.get(this.id);
            if (void 0 !== uu && uu.size > 0) {
              let Ru = this.changes.get(yu);
              void 0 === Ru && (Ru = new Map, this.changes.set(yu, Ru));
              for (const yu of uu) Ru.set(yu, Ku.DELETE);
              uu.clear()
            }
          }
        } else {
          const uu = Ru.isArray;
          let Eu = this.changes.get(yu);
          Ru.forEachChild(((Ru, Qu) => {
            void 0 === Eu && (Eu = new Map, this.changes.set(yu, Eu)), Eu.set(uu ? Ru : Qu, Ku.DELETE), this.unmarkVisible(Ru)
          }))
        }
        return this.unmarkVisible(Ru), this
      }
      clear() {
        if (!this.iterable) throw new Error("StateView#clear() is only available for iterable StateView's. Use StateView(iterable: true) constructor.");
        for (let uu = 0, Ru = this.items.length; uu < Ru; uu++) this.remove(this.items[uu], SE, !0);
        this.items.length = 0
      }
      isChangeTreeVisible(uu) {
        let Ru = this.isVisible(uu);
        if (!Ru && uu.isVisibilitySharedWithParent)
          if (this.isVisible(uu.parent[pu])) this.markVisible(uu), Ru = !0;
          else
            for (let yu = uu.extraParents; void 0 !== yu; yu = yu.next) {
              const Eu = yu.ref[pu];
              if (Eu.isFiltered && this.isVisible(Eu)) {
                this.markVisible(uu), Ru = !0;
                break
              }
            }
        return Ru
      }
      _recursiveDeleteVisibleChangeTree(uu) {
        uu.forEachChild((uu => {
          this.unmarkVisible(uu), this._recursiveDeleteVisibleChangeTree(uu)
        }))
      }
      _dropPendingEntries(uu) {
        this.changes.delete(uu.ref[Ju]), uu.forEachChild((uu => this._dropPendingEntries(uu)))
      }
      _removeViewField(uu, Ru, yu) {
        const Eu = Ru.get(yu) === Ku.ADD;
        Ru.set(yu, Ku.DELETE);
        const Qu = uu.ref[uu.encDescriptor.names[yu]],
          mu = Qu?.[pu];
        mu && (this.unmarkVisible(mu), this._recursiveDeleteVisibleChangeTree(mu), Eu && this._dropPendingEntries(mu))
      }
    }

    function cE(uu) {
      uu.structSwitchEmitted || (uu.shouldEmitSwitch && (uu.buffer[uu.it.offset++] = 255, RR.number(uu.buffer, uu.ref[Ju], uu.it)), uu.structSwitchEmitted = !0)
    }

    function LE(uu, Ru) {
      wE(uu, Ru, Ku.ADD)
    }

    function zE(uu, Ru) {
      if (Ru._fullSyncGen === uu.gen) return;
      Ru._fullSyncGen = uu.gen;
      if (!uu.hasView || uu.view.isChangeTreeVisible(Ru)) {
        const yu = Ru.encDescriptor;
        uu.changeTree = Ru, uu.ref = Ru.ref, uu.encoder = yu.encoder, uu.filter = yu.filter, uu.metadata = yu.metadata, uu.treeIsFiltered = Ru.isFiltered, uu.isSchema = yu.isSchema, uu.filterBitmask = yu.filterBitmask, uu.tags = yu.tags, uu.structSwitchEmitted = !1, uu.shouldEmitSwitch = uu.hasView || uu.it.offset > uu.initialOffset || Ru !== uu.rootChangeTree, Ru.isArray && Ru.collDirty.size > 0 && (Ru.flags |= 512), Ky(Ru, uu, LE)
      }
      Wy(Ru, uu, FE)
    }

    function FE(uu, Ru, yu) {
      zE(uu, Ru)
    }

    function wE(uu, Ru, yu) {
      if (Ru < 0) {
        if (uu.treeIsFiltered !== uu.emitFiltered) return;
        return cE(uu), void(uu.buffer[uu.it.offset++] = 255 & Math.abs(Ru))
      }
      if ((uu.isSchema ? uu.treeIsFiltered || (Ru < 32 ? 0 !== (uu.filterBitmask & 1 << Ru) : void 0 !== uu.tags[Ru]) : uu.treeIsFiltered) !== uu.emitFiltered) return;
      const Eu = uu.isEncodeAll ? Ku.ADD : yu;
      void 0 !== Eu && (void 0 === uu.filter || uu.filter(uu.ref, Ru, uu.view)) && (cE(uu), uu.encoder(uu.self, uu.buffer, uu.changeTree, Ru, Eu, uu.it, uu.isEncodeAll, uu.hasView, uu.metadata))
    }

    function ZE(uu, Ru) {
      const yu = new Uint8Array(uu.length + Ru.length);
      return yu.set(uu, 0), yu.set(Ru, uu.length), yu
    }
    class hE {
      static BUFFER_SIZE = 16384;
      sharedBuffer = new Uint8Array(hE.BUFFER_SIZE);
      context;
      state;
      root;
      constructor(uu, Ru) {
        this.context = FR.cache(uu.constructor), this.root = Ru ?? new UE(this.context), this.setState(uu)
      }
      setState(uu) {
        this.state = uu, this.state[pu].setRoot(this.root)
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
          Ru = arguments.length > 1 ? arguments[1] : void 0,
          yu = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : this.sharedBuffer,
          Eu = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : uu.offset;
        return this._encodeChannel(uu, Ru, yu, Eu, !1)
      }
      encodeUnreliable() {
        let uu = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
            offset: 0
          },
          Ru = arguments.length > 1 ? arguments[1] : void 0,
          yu = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : this.sharedBuffer,
          Eu = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : uu.offset;
        return this._encodeChannel(uu, Ru, yu, Eu, !0)
      }
      _encodeChannel(uu, Ru, yu, Eu, Ku) {
        this.root.pendingFilterRefresh.length > 0 && my(this.root);
        const Qu = void 0 !== Ru,
          mu = this.state[pu],
          Ju = this._encodeCtx;
        Ju.self = this, Ju.buffer = yu, Ju.it = uu, Ju.view = Ru, Ju.isEncodeAll = !1, Ju.hasView = Qu, Ju.emitFiltered = Qu;
        let Nu = Ku ? this.root.unreliableChanges : this.root.changes;
        for (; Nu = Nu.next;) {
          const yu = Nu.changeTree;
          if (Qu && !Ru.isChangeTreeVisible(yu)) continue;
          const Xu = Ku ? yu.unreliableRecorder : yu;
          if (!Xu || !Xu.has()) continue;
          const Vu = yu.encDescriptor;
          Ju.changeTree = yu, Ju.ref = yu.ref, Ju.encoder = Vu.encoder, Ju.filter = Vu.filter, Ju.metadata = Vu.metadata, Ju.treeIsFiltered = yu.isFiltered, Ju.isSchema = Vu.isSchema, Ju.filterBitmask = Vu.filterBitmask, Ju.tags = Vu.tags, Ju.structSwitchEmitted = !1, Ju.isRootTree = yu === mu, Ju.shouldEmitSwitch = Qu || uu.offset > Eu || !Ju.isRootTree, Xu.forEachWithCtx(Ju, wE)
        }
        return Ku || Qu || !this._isStreamBroadcastMode || this._emitStreamBroadcast(yu, uu), uu.offset > yu.byteLength ? (yu = this._resizeBuffer(yu, uu.offset), uu.offset = Eu, this._encodeChannel(uu, Ru, yu, Eu, Ku)) : yu.subarray(0, uu.offset)
      }
      encodeFullSync(uu, Ru, yu, Eu) {
        let Ku = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : uu.offset;
        this.root.pendingFilterRefresh.length > 0 && my(this.root);
        const Qu = void 0 !== Eu,
          mu = this.state[pu],
          Ju = this._encodeCtx;
        return Ju.self = this, Ju.buffer = Ru, Ju.it = uu, Ju.view = Eu, Ju.isEncodeAll = !0, Ju.hasView = Qu, Ju.emitFiltered = yu, Ju.gen = ++this._fullSyncGen, Ju.initialOffset = Ku, Ju.rootChangeTree = mu, zE(Ju, mu), uu.offset > Ru.byteLength ? (Ru = this._resizeBuffer(Ru, uu.offset), uu.offset = Ku, this.encodeFullSync(uu, Ru, yu, Eu, Ku)) : Ru.subarray(0, uu.offset)
      }
      _resizeBuffer(uu, Ru) {
        const yu = Math.ceil(Ru / hE.BUFFER_SIZE) * hE.BUFFER_SIZE,
          Eu = new Uint8Array(yu);
        return Eu.set(uu), uu === this.sharedBuffer && (this.sharedBuffer = Eu), Eu
      }
      encodeAll() {
        let uu = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
            offset: 0
          },
          Ru = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.sharedBuffer;
        return this.encodeFullSync(uu, Ru, !1)
      }
      encodeAllView(uu, Ru, yu) {
        let Eu = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : this.sharedBuffer;
        const Ku = yu.offset;
        return Eu = this.encodeFullSync(yu, Eu, !0, uu, Ku), ZE(Eu.subarray(0, Ru), Eu.subarray(Ku, yu.offset))
      }
      ensureCapacity(uu, Ru) {
        if (Ru + hE.BUFFER_SIZE <= uu.byteLength) return uu;
        const yu = Math.ceil((Ru + hE.BUFFER_SIZE) / hE.BUFFER_SIZE) * hE.BUFFER_SIZE,
          Eu = new Uint8Array(yu);
        return Eu.set(uu.subarray(0, Ru)), uu === this.sharedBuffer && (this.sharedBuffer = Eu), Eu
      }
      encodeView(uu, Ru, yu) {
        let Eu = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : this.sharedBuffer,
          Qu = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4];
        const mu = yu.offset;
        this._emitStreamPriority(uu);
        for (const Nu of uu.changes.keys()) {
          const Ru = uu.changes.get(Nu),
            Qu = this.root.changeTrees[Nu];
          if (void 0 === Qu) {
            uu.changes.delete(Nu);
            continue
          }
          if (0 === Ru.size) continue;
          const mu = Qu.encDescriptor,
            Xu = mu.encoder,
            Vu = mu.metadata,
            ru = Qu.ref,
            xu = Qu.refTarget;
          Eu = this.ensureCapacity(Eu, yu.offset), Eu[yu.offset++] = 255, RR.number(Eu, ru[Ju], yu);
          for (const [Nu, Su] of Ru) {
            let Ru;
            if (-1 === Nu) {
              const uu = xu.tmpItems,
                Ru = xu.deletedIndexes;
              for (let mu = 0; mu < uu.length; mu++) void 0 !== uu[mu] && !0 !== Ru[mu] && Xu(this, Eu, Qu, mu, Ku.ADD, yu, !1, !0, Vu);
              continue
            }
            if ("number" === typeof Nu) Ru = Nu;
            else {
              const yu = Nu.indexInParent(ru);
              if (void 0 === yu) continue;
              if (Ru = yu, Su === Ku.ADD && Qu.getChange(Ru) === Ku.DELETE) {
                uu.changes.delete(Nu.ref[Ju]);
                continue
              }
            }
            Xu(this, Eu, Qu, Ru, void 0 !== xu[Bu](Ru) && Su || Ku.DELETE, yu, !1, !0, Vu)
          }
        }
        return uu.changes.clear(), Eu = this.encode(yu, uu, Eu), Qu ? ZE(Eu.subarray(0, Ru), Eu.subarray(mu, yu.offset)) : Eu.subarray(mu, yu.offset)
      }
      encodeUnreliableView(uu, Ru, yu) {
        let Eu = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : this.sharedBuffer;
        const Ku = yu.offset;
        return Eu = this.encodeUnreliable(yu, uu, Eu, Ku), ZE(Eu.subarray(0, Ru), Eu.subarray(Ku, yu.offset))
      }
      _emitStreamBroadcast(uu, Ru) {
        const yu = this.root.streamTrees;
        for (const Eu of yu) {
          const yu = Eu,
            Qu = yu[pu],
            mu = yu[Ju];
          if (void 0 === mu) continue;
          const Nu = yu._stream,
            Xu = Nu.broadcastDeletes,
            Vu = Nu.broadcastPending,
            ru = Nu.sentBroadcast,
            xu = Xu.size > 0,
            Su = Vu.size > 0,
            Tu = Qu.encDescriptor,
            Wu = Tu.encoder,
            ju = Tu.metadata;
          if (xu || Su) {
            if (uu[Ru.offset++] = 255, RR.number(uu, mu, Ru), xu) {
              for (const yu of Xu) Wu(this, uu, Qu, yu, Ku.DELETE, Ru, !1, !1, ju);
              Xu.clear()
            }
            const Eu = Nu.maxPerTick,
              Su = [];
            let Tu = 0;
            const Hu = [];
            for (const mu of Vu) {
              if (Tu >= Eu) break;
              const Ju = yu[Bu](mu);
              void 0 !== Ju ? (Wu(this, uu, Qu, mu, Ku.ADD, Ru, !1, !1, ju), ru.add(mu), Su.push(Ju), Hu.push(mu), Tu++) : Hu.push(mu)
            }
            for (const uu of Hu) Vu.delete(uu);
            for (const yu of Su) {
              const Eu = yu[pu];
              if (void 0 === Eu) continue;
              const Qu = yu[Ju];
              if (void 0 === Qu) continue;
              uu[Ru.offset++] = 255, RR.number(uu, Qu, Ru);
              const mu = Eu.encDescriptor,
                Nu = mu.encoder,
                Xu = mu.metadata;
              Eu.forEachLive((yu => {
                oR.hasUnreliableAtIndex(Xu, yu) || Nu(this, uu, Eu, yu, Ku.ADD, Ru, !1, !1, Xu)
              }))
            }
          }
          for (const Eu of ru) {
            const Ku = yu[Bu](Eu);
            if (void 0 === Ku) continue;
            const Qu = Ku[pu];
            if (void 0 === Qu || !Qu.has()) continue;
            const mu = Ku[Ju];
            if (void 0 === mu) continue;
            uu[Ru.offset++] = 255, RR.number(uu, mu, Ru);
            const Nu = Qu.encDescriptor,
              Xu = Nu.encoder,
              Vu = Nu.metadata;
            Qu.forEach(((yu, Eu) => {
              yu < 0 || oR.hasUnreliableAtIndex(Vu, yu) || Xu(this, uu, Qu, yu, Eu, Ru, !1, !1, Vu)
            }))
          }
        }
      }
      _emitStreamPriority(uu) {
        const Ru = this.root.streamTrees;
        if (0 === Ru.size) return;
        const yu = uu.id;
        for (const Eu of Ru) {
          const Ru = Eu,
            Qu = Ru._stream,
            mu = Qu.pendingByView.get(yu);
          if (void 0 === mu || 0 === mu.size) continue;
          const Nu = Qu.priorityByView?.get(yu),
            Xu = void 0 !== Nu,
            Vu = Qu.priority,
            ru = Qu.maxPerTick,
            xu = [],
            Su = [];
          if (Xu || void 0 !== Vu) {
            const yu = [],
              Eu = [];
            let Ku = 0;
            for (const Qu of mu) {
              const mu = Ru[Bu](Qu);
              if (void 0 === mu) {
                Su.push(Qu);
                continue
              }
              const Ju = Xu ? Nu(mu) : Vu(uu, mu);
              if (Ku < ru) {
                let uu = Ku++;
                for (; uu > 0 && Eu[uu - 1] < Ju;) Eu[uu] = Eu[uu - 1], yu[uu] = yu[uu - 1], uu--;
                Eu[uu] = Ju, yu[uu] = Qu
              } else if (Ju > Eu[ru - 1]) {
                let uu = ru - 1;
                for (; uu > 0 && Eu[uu - 1] < Ju;) Eu[uu] = Eu[uu - 1], yu[uu] = yu[uu - 1], uu--;
                Eu[uu] = Ju, yu[uu] = Qu
              }
            }
            for (let uu = 0; uu < Ku; uu++) xu.push(yu[uu])
          } else
            for (const uu of mu) {
              if (xu.length >= ru) break;
              xu.push(uu)
            }
          for (const uu of Su) mu.delete(uu);
          const Tu = xu.length;
          let Wu = Qu.sentByView.get(yu);
          void 0 === Wu && (Wu = new Set, Qu.sentByView.set(yu, Wu));
          for (let yu = 0; yu < Tu; yu++) {
            const Eu = xu[yu],
              Qu = Ru[Bu](Eu);
            if (void 0 === Qu) {
              mu.delete(Eu);
              continue
            }
            uu._addImmediate(Qu);
            const Nu = Qu[pu];
            if (void 0 !== Nu) {
              const Ru = Qu[Ju];
              let yu = uu.changes.get(Ru);
              void 0 === yu && (yu = new Map, uu.changes.set(Ru, yu));
              const Eu = Nu.metadata;
              Nu.forEachLive((uu => {
                oR.hasUnreliableAtIndex(Eu, uu) || yu.set(uu, Ku.ADD)
              }))
            }
            mu.delete(Eu), Wu.add(Eu)
          }
        }
      }
      discardChanges() {
        const uu = this.root.changes;
        let Ru = uu.next;
        const yu = this.root;
        for (; Ru;) {
          const uu = Ru.next;
          Ru.changeTree.endEncode(), yu.releaseNode(Ru), Ru = uu
        }
        uu.next = void 0, uu.tail = void 0
      }
      discardUnreliableChanges() {
        const uu = this.root.unreliableChanges;
        let Ru = uu.next;
        const yu = this.root;
        for (; Ru;) {
          const uu = Ru.next;
          Ru.changeTree.endEncodeUnreliable(), yu.releaseNode(Ru), Ru = uu
        }
        uu.next = void 0, uu.tail = void 0
      }
      tryEncodeTypeId(uu, Ru, yu, Eu) {
        const Ku = this.context.getTypeId(Ru),
          Qu = this.context.getTypeId(yu);
        void 0 !== Qu ? Ku !== Qu && (uu[Eu.offset++] = 213, RR.number(uu, Qu, Eu)) : console.warn(`@colyseus/schema WARNING: Class "${yu.name}" is not registered on TypeRegistry - Please either tag the class with @entity or define a @type() field.`)
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
        const Ru = 0 === uu.activeViews.size;
        for (const yu of uu.streamTrees)
          if (Ru ? UR(yu) : GR(yu, uu)) return !0;
        return !1
      }
      get hasUnreliableChanges() {
        return void 0 !== this.root.unreliableChanges.next
      }
    }
    class PE extends Error {
      constructor(uu) {
        super(uu), this.name = "DecodingWarning"
      }
    }
    const iE = {
      value: 0,
      enumerable: !1,
      writable: !0
    };
    class YE {
      refs = new Map;
      refCount = {};
      deletedRefs = new Set;
      callbacks = {};
      nextUniqueId = 0;
      getNextUniqueId() {
        return this.nextUniqueId++
      }
      addRef(uu, Ru) {
        let yu = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        this.refs.set(uu, Ru), void 0 === Ru[Ju] ? (iE.value = uu, Object.defineProperty(Ru, Ju, iE)) : Ru[Ju] !== uu && (Ru[Ju] = uu), yu && (this.refCount[uu] = (this.refCount[uu] || 0) + 1), this.deletedRefs.has(uu) && this.deletedRefs.delete(uu)
      }
      removeRef(uu) {
        const Ru = this.refCount[uu];
        if (void 0 !== Ru)
          if (0 !== Ru)(this.refCount[uu] = Ru - 1) <= 0 && this.deletedRefs.add(uu);
          else try {
            const Ru = this.refs.get(uu);
            throw new PE(`trying to remove refId '${uu}' with 0 refCount (${Ru.constructor.name}: ${JSON.stringify(Ru)})`)
          } catch (QK) {
            console.warn(QK)
          } else try {
            throw new PE("trying to remove refId that doesn't exist: " + uu)
          } catch (QK) {
            console.warn(QK)
          }
      }
      clearRefs() {
        this.refs.clear(), this.deletedRefs.clear(), this.callbacks = {}, this.refCount = {}
      }
      garbageCollectDeletedRefs() {
        this.deletedRefs.forEach((uu => {
          if (this.refCount[uu] > 0) return;
          const Ru = this.refs.get(uu),
            yu = Ru.constructor[Symbol.metadata];
          if (null != yu)
            for (const Eu in yu) {
              const uu = Ru[yu[Eu].name];
              if ("object" === typeof uu && uu) {
                const Ru = uu[Ju];
                void 0 === Ru || this.deletedRefs.has(Ru) || this.removeRef(Ru)
              }
            } else "function" === typeof Ru[Tu] && Array.from(Ru.values()).forEach((uu => {
              const Ru = uu[Ju];
              void 0 === Ru || this.deletedRefs.has(Ru) || this.removeRef(Ru)
            }));
          this.refs.delete(uu), delete this.refCount[uu], delete this.callbacks[uu]
        })), this.deletedRefs.clear()
      }
      addCallback(uu, Ru, yu) {
        if (void 0 === uu) {
          const uu = "number" === typeof Ru ? Ku[Ru] : Ru;
          throw new Error(`Can't addCallback on '${uu}' (refId is undefined)`)
        }
        return this.callbacks[uu] || (this.callbacks[uu] = {}), this.callbacks[uu][Ru] || (this.callbacks[uu][Ru] = []), this.callbacks[uu][Ru].push(yu), () => this.removeCallback(uu, Ru, yu)
      }
      removeCallback(uu, Ru, yu) {
        const Eu = this.callbacks?.[uu]?.[Ru]?.indexOf(yu);
        void 0 !== Eu && -1 !== Eu && nE(this.callbacks[uu][Ru], Eu)
      }
    }
    class oE {
      context;
      state;
      root;
      currentRefId = 0;
      pD;
      resyncVisited = null;
      resyncDamaged = !1;
      constructor(uu, Ru) {
        this.setState(uu), this.context = Ru || new FR(uu.constructor)
      }
      setState(uu) {
        this.state = uu, this.root = new YE, this.root.addRef(0, uu)
      }
      decode(uu) {
        let Ru = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
            offset: 0
          },
          yu = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : this.state;
        const Ku = void 0 !== this.pD ? [] : null,
          Qu = this.root,
          mu = uu.byteLength;
        let Ju = yu.constructor[Vu];
        for (this.currentRefId = 0; Ru.offset < mu;) {
          if (uu[Ru.offset] == Eu) {
            Ru.offset++, yu[du]?.();
            const Eu = HR.number(uu, Ru),
              Ku = Qu.refs.get(Eu);
            Ku ? (yu = Ku, Ju = yu.constructor[Vu], this.currentRefId = Eu) : (console.error(`"refId" not found: ${Eu}`, {
              previousRef: yu,
              previousRefId: this.currentRefId
            }), console.warn("Please report this issue to the developers."), this.skipCurrentStructure(uu, Ru, mu));
            continue
          } - 1 !== Ju(this, uu, Ru, yu, Ku) || (console.warn("@colyseus/schema: definition mismatch"), this.skipCurrentStructure(uu, Ru, mu))
        }
        return yu[du]?.(), null !== this.resyncVisited && function(uu, Ru) {
          uu.resyncDamaged ? console.warn("@colyseus/schema: resync sweep skipped \u2014 parts of the payload could not be decoded. Stale entries may persist until the next resync.") : Fy(uu, uu.state, new Set, Ru)
        }(this, Ku), null !== Ku && this.pD?.(Ku), Qu.garbageCollectDeletedRefs(), Ku
      }
      decodeResync(uu) {
        let Ru = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
          offset: 0
        };
        this.resyncVisited = new Map, this.resyncDamaged = !1;
        try {
          return this.decode(uu, Ru)
        } finally {
          this.resyncVisited = null
        }
      }
      skipCurrentStructure(uu, Ru, yu) {
        null !== this.resyncVisited && (this.resyncDamaged = !0);
        const Ku = {
          offset: Ru.offset
        };
        for (; Ru.offset < yu && (uu[Ru.offset] !== Eu || (Ku.offset = Ru.offset + 1, !this.root.refs.has(HR.number(uu, Ku))));) Ru.offset++
      }
      getInstanceType(uu, Ru, yu) {
        let Eu;
        if (213 === uu[Ru.offset]) {
          Ru.offset++;
          const yu = HR.number(uu, Ru);
          Eu = this.context.get(yu)
        }
        return Eu || yu
      }
      createInstanceOfType(uu) {
        return uu.initializeForDecoder()
      }
      removeChildRefs(uu, Ru) {
        const yu = "string" !== typeof uu[Tu],
          Eu = uu[Ju];
        uu.forEach(((Qu, mu) => {
          Ru?.push({
            ref: uu,
            refId: Eu,
            op: Ku.DELETE,
            field: mu,
            value: void 0,
            previousValue: Qu
          }), yu && this.root.removeRef(Qu[Ju])
        }))
      }
    }
    const qE = DE({
        min: xE.float64(),
        max: xE.float64(),
        bits: xE.uint8(),
        mode: xE.uint8()
      }, "QuantizedDescriptor"),
      OE = DE({
        name: xE.string(),
        type: xE.string(),
        referencedType: xE.number(),
        childPrimitive: xE.string(),
        quantized: xE.ref(qE).optional()
      }, "ReflectionField"),
      vE = DE({
        id: xE.number(),
        extendsId: xE.number(),
        fields: xE.array(OE)
      }, "ReflectionType"),
      aE = DE({
        types: xE.array(vE),
        rootType: xE.number()
      }, "Reflection");

    function fE(uu) {
      const Ru = uu.root,
        yu = Ru.callbacks,
        Eu = new WeakMap;
      let Qu;

      function mu(uu, yu) {
        let Xu = yu.instance?.constructor[Symbol.metadata] || uu,
          Vu = yu.instance && "function" === typeof yu.instance.forEach || uu && !IE.is(uu);
        if (Xu && !Vu) {
          const uu = function(uu, Ku, mu, Nu) {
            return Nu && void 0 !== yu.instance[Ku] && !Eu.has(Qu) && mu(yu.instance[Ku], void 0), Ru.addCallback(uu[Ju], Ku, mu)
          };
          return new Proxy({
            listen: function(Ru, Ku) {
              let mu = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
              if (yu.instance) return uu(yu.instance, Ru, Ku, mu);
              {
                let Ju = () => {};
                return yu.onInstanceAvailable(((yu, Nu) => {
                  Ju = uu(yu, Ru, Ku, mu && Nu && !Eu.has(Qu))
                })), () => Ju()
              }
            },
            onChange: function(uu) {
              return Ru.addCallback(yu.instance[Ju], Ku.REPLACE, uu)
            },
            bindTo: function(uu, Eu) {
              return Eu || (Eu = Object.keys(Xu).map((uu => Xu[uu].name))), Ru.addCallback(yu.instance[Ju], Ku.REPLACE, (() => {
                Eu.forEach((Ru => uu[Ru] = yu.instance[Ru]))
              }))
            }
          }, {
            get(uu, Ru) {
              const Eu = Xu[Xu[Ru]];
              if (Eu) {
                const uu = yu.instance?.[Ru],
                  Ku = Eu => {
                    const Ku = Nu(yu.instance).listen(Ru, ((uu, Ru) => {
                      Eu(uu, !1), Ku?.()
                    }), !1);
                    void 0 !== uu?.[Ju] && Eu(uu, !0)
                  };
                return mu(Eu.type, {
                  instance: void 0 !== uu?.[Ju] && uu,
                  parentInstance: yu.instance,
                  onInstanceAvailable: Ku
                })
              }
              return uu[Ru]
            },
            has: (uu, Ru) => void 0 !== Xu[Ru],
            set(uu, Ru, yu) {
              throw new Error("not allowed")
            },
            deleteProperty(uu, Ru) {
              throw new Error("not allowed")
            }
          })
        } {
          const uu = function(uu, yu, mu) {
              return mu && uu.forEach(((uu, Ru) => yu(uu, Ru))), Ru.addCallback(uu[Ju], Ku.ADD, ((uu, Ru) => {
                Eu.set(yu, !0), Qu = yu, yu(uu, Ru), Eu.delete(yu), Qu = void 0
              }))
            },
            mu = function(uu, yu) {
              return Ru.addCallback(uu[Ju], Ku.DELETE, yu)
            },
            Nu = function(uu, yu) {
              return Ru.addCallback(uu[Ju], Ku.REPLACE, yu)
            };
          return new Proxy({
            UH: function(Ru) {
              let Ku = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
              if (yu.instance) return uu(yu.instance, Ru, Ku && !Eu.has(Qu));
              if (yu.onInstanceAvailable) {
                let mu = () => {};
                return yu.onInstanceAvailable(((yu, Ju) => {
                  mu = uu(yu, Ru, Ku && Ju && !Eu.has(Qu))
                })), () => mu()
              }
            },
            JA: function(uu) {
              if (yu.instance) return mu(yu.instance, uu);
              if (yu.onInstanceAvailable) {
                let Ru = () => {};
                return yu.onInstanceAvailable((yu => {
                  Ru = mu(yu, uu)
                })), () => Ru()
              }
            },
            onChange: function(uu) {
              if (yu.instance) return Nu(yu.instance, uu);
              if (yu.onInstanceAvailable) {
                let Ru = () => {};
                return yu.onInstanceAvailable((yu => {
                  Ru = Nu(yu, uu)
                })), () => Ru()
              }
            }
          }, {
            get(uu, Ru) {
              if (!uu[Ru]) throw new Error(`Can't access '${Ru}' through callback proxy. access the instance directly.`);
              return uu[Ru]
            },
            has: (uu, Ru) => void 0 !== uu[Ru],
            set(uu, Ru, yu) {
              throw new Error("not allowed")
            },
            deleteProperty(uu, Ru) {
              throw new Error("not allowed")
            }
          })
        }
      }

      function Nu(uu) {
        return mu(void 0, {
          instance: uu
        })
      }
      return uu.pD = function(uu) {
        const Ru = new Set;
        for (let Eu = 0, Qu = uu.length; Eu < Qu; Eu++) {
          const Qu = uu[Eu],
            mu = Qu.refId,
            Nu = Qu.ref,
            Xu = yu[mu];
          if (Xu) {
            if ((Qu.op & Ku.DELETE) === Ku.DELETE && IE.isSchema(Qu.previousValue)) {
              const uu = yu[Qu.previousValue[Ju]]?.[Ku.DELETE];
              for (let Ru = uu?.length - 1; Ru >= 0; Ru--) uu[Ru]()
            }
            if (IE.isSchema(Nu)) {
              if (!Ru.has(mu)) {
                const uu = Xu?.[Ku.REPLACE];
                for (let Ru = uu?.length - 1; Ru >= 0; Ru--) uu[Ru]()
              }
              if (Xu.hasOwnProperty(Qu.field)) {
                const uu = Xu[Qu.field];
                for (let Ru = uu?.length - 1; Ru >= 0; Ru--) uu[Ru](Qu.value, Qu.previousValue)
              }
            } else {
              if ((Qu.op & Ku.DELETE) === Ku.DELETE) {
                if (void 0 !== Qu.previousValue) {
                  const uu = Xu[Ku.DELETE];
                  for (let Ru = uu?.length - 1; Ru >= 0; Ru--) uu[Ru](Qu.previousValue, Qu.dynamicIndex ?? Qu.field)
                }
                if ((Qu.op & Ku.ADD) === Ku.ADD) {
                  const uu = Xu[Ku.ADD];
                  for (let Ru = uu?.length - 1; Ru >= 0; Ru--) uu[Ru](Qu.value, Qu.dynamicIndex ?? Qu.field)
                }
              } else if ((Qu.op & Ku.ADD) === Ku.ADD && Qu.previousValue !== Qu.value) {
                const uu = Xu[Ku.ADD];
                for (let Ru = uu?.length - 1; Ru >= 0; Ru--) uu[Ru](Qu.value, Qu.dynamicIndex ?? Qu.field)
              }
              if (Qu.value !== Qu.previousValue && (void 0 !== Qu.value || void 0 !== Qu.previousValue)) {
                const uu = Xu[Ku.REPLACE];
                for (let Ru = uu?.length - 1; Ru >= 0; Ru--) uu[Ru](Qu.value, Qu.dynamicIndex ?? Qu.field)
              }
            }
            Ru.add(mu)
          }
        }
      }, Nu
    }

    function uK(uu, Ru) {
      uu.pD = Ru
    }
    aE.encode = function(uu) {
      let Ru = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
        offset: 0
      };
      const yu = uu.context,
        Eu = new aE,
        Ku = new hE(Eu),
        Qu = yu.schemas.get(uu.state.constructor);
      Qu > 0 && (Eu.rootType = Qu);
      const mu = new Set,
        Ju = {},
        Nu = uu => {
          if (void 0 === uu.extendsId || mu.has(uu.extendsId)) {
            mu.add(uu.id), Eu.types.push(uu);
            const Ru = Ju[uu.id];
            void 0 !== Ru && (delete Ju[uu.id], Ru.forEach((uu => Nu(uu))))
          } else void 0 === Ju[uu.extendsId] && (Ju[uu.extendsId] = []), Ju[uu.extendsId].push(uu)
        };
      yu.schemas.forEach(((uu, Ru) => {
        const Eu = new vE;
        Eu.id = Number(uu);
        const Ku = Object.getPrototypeOf(Ru);
        Ku !== IE && (Eu.extendsId = yu.schemas.get(Ku));
        const Qu = Ru[Symbol.metadata];
        if (Qu !== Ku[Symbol.metadata]) {
          const uu = Qu[Du] ?? -1;
          for (let Ru = 0; Ru <= uu; Ru++) {
            const uu = Qu[Ru];
            if (void 0 === uu) continue;
            const Ku = uu.name;
            if (!Object.prototype.hasOwnProperty.call(Qu, Ku)) continue;
            const mu = new OE;
            let Ju;
            if (mu.name = Ku, "string" === typeof uu.type) Ju = uu.type;
            else if (gR(uu.type)) {
              const Ru = uu.type.quantized;
              Ju = "quantized";
              const yu = new qE;
              yu.min = Ru.min, yu.max = Ru.max, yu.bits = Ru.bits, yu.mode = Ru.wrap ? 1 : 0, mu.quantized = yu
            } else {
              let Ru;
              IE.is(uu.type) ? (Ju = "ref", Ru = uu.type) : (Ju = Object.keys(uu.type)[0], "string" === typeof uu.type[Ju] ? mu.childPrimitive = uu.type[Ju] : Ru = uu.type[Ju]), mu.referencedType = Ru ? yu.getTypeId(Ru) : -1
            }
            mu.type = Ju, Eu.fields.push(mu)
          }
        }
        Nu(Eu)
      }));
      for (const Xu in Ju) Ju[Xu].forEach((uu => Eu.types.push(uu)));
      return Ku.encodeAll(Ru).slice(0, Ru.offset)
    }, aE.decode = function(uu, Ru) {
      const yu = new aE;
      new oE(yu).decode(uu, Ru);
      const Eu = new FR;
      yu.types.forEach((uu => {
        const Ru = Eu.get(uu.extendsId) ?? IE,
          yu = class extends Ru {};
        FR.register(yu), Eu.add(yu, uu.id)
      }), {});
      yu.types.forEach((uu => {
        const Ru = Eu.get(uu.id),
          Ku = oR.initialize(Ru),
          Qu = [];
        let mu = uu;
        do {
          Qu.push(mu), mu = yu.types.find((uu => uu.id === mu.extendsId))
        } while (mu);
        let Ju = 0;
        Qu.reverse().forEach((uu => {
          ((uu, Ru, yu) => {
            Ru.fields.forEach(((Ru, Ku) => {
              const Qu = yu + Ku;
              if (void 0 !== Ru.quantized) {
                const yu = Ru.quantized;
                oR.addField(uu, Qu, Ru.name, {
                  quantized: lR({
                    min: yu.min,
                    max: yu.max,
                    bits: yu.bits,
                    mode: 1 === yu.mode ? "wrap" : "clamp"
                  })
                })
              } else if (void 0 !== Ru.referencedType) {
                const yu = Ru.type,
                  Ku = Eu.get(Ru.referencedType) ?? Ru.childPrimitive;
                "ref" === yu ? oR.addField(uu, Qu, Ru.name, Ku) : oR.addField(uu, Qu, Ru.name, {
                  [yu]: Ku
                })
              } else oR.addField(uu, Qu, Ru.name, Ru.type)
            }))
          })(Ku, uu, Ju), Ju += uu.fields.length
        }))
      }));
      const Ku = new(Eu.get(yu.rootType || 0));
      return new oE(Ku, Eu)
    }, aE.makeEncodable = function(uu) {
      const Ru = uu[Symbol.metadata];
      if (!Ru) return uu;
      const yu = Ru[Du];
      if (void 0 === yu) return uu;
      for (let Eu = 0; Eu <= yu; Eu++) {
        const yu = Ru[Eu];
        yu && oR.defineField(uu, Ru, Eu, yu.name, yu.type)
      }
      return Object.prototype.hasOwnProperty.call(uu, eu) && delete uu[eu], uu
    };
    class RK {
      Ox;
      uniqueRefIds = new Set;
      isTriggering = !1;
      constructor(uu) {
        this.Ox = uu, this.Ox.pD = this.pD.bind(this)
      }
      get callbacks() {
        return this.Ox.root.callbacks
      }
      get state() {
        return this.Ox.state
      }
      addCallback(uu, Ru, yu) {
        return this.Ox.root.addCallback(uu, Ru, yu)
      }
      addCallbackOrWaitCollectionAvailable(uu, Ru, yu, Eu) {
        let Qu = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4],
          mu = () => {};
        const Nu = () => mu(),
          Xu = uu[Ru];
        if (Xu && void 0 !== Xu[Ju]) return Qu = Qu && !1 === this.isTriggering, yu === Ku.ADD && Qu && Xu.forEach(((uu, Ru) => {
          Eu(uu, Ru)
        })), this.addCallback(Xu[Ju], yu, Eu);
        {
          let Ku;
          return Ku = this.addCallback(uu[Ju], Ru, ((uu, Ru) => {
            null !== uu && void 0 !== uu && (Ku(), mu = this.addCallback(uu[Ju], yu, Eu))
          })), mu = Ku, Nu
        }
      }
      listen() {
        return "string" === typeof(arguments.length <= 0 ? void 0 : arguments[0]) ? this.listenInstance(this.state, arguments.length <= 0 ? void 0 : arguments[0], arguments.length <= 1 ? void 0 : arguments[1], arguments.length <= 2 ? void 0 : arguments[2]) : this.listenInstance(arguments.length <= 0 ? void 0 : arguments[0], arguments.length <= 1 ? void 0 : arguments[1], arguments.length <= 2 ? void 0 : arguments[2], arguments.length <= 3 ? void 0 : arguments[3])
      }
      listenInstance(uu, Ru, yu) {
        let Eu = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
        Eu = Eu && !1 === this.isTriggering;
        const Ku = uu[Ru];
        return Eu && null !== Ku && void 0 !== Ku && yu(Ku, void 0), this.addCallback(uu[Ju], Ru, yu)
      }
      onChange() {
        if (2 === arguments.length && "string" !== typeof(arguments.length <= 0 ? void 0 : arguments[0])) {
          const uu = arguments.length <= 0 ? void 0 : arguments[0],
            Ru = arguments.length <= 1 ? void 0 : arguments[1];
          return this.addCallback(uu[Ju], Ku.REPLACE, Ru)
        }
        return "string" === typeof(arguments.length <= 0 ? void 0 : arguments[0]) ? this.addCallbackOrWaitCollectionAvailable(this.state, arguments.length <= 0 ? void 0 : arguments[0], Ku.REPLACE, arguments.length <= 1 ? void 0 : arguments[1]) : this.addCallbackOrWaitCollectionAvailable(arguments.length <= 0 ? void 0 : arguments[0], arguments.length <= 1 ? void 0 : arguments[1], Ku.REPLACE, arguments.length <= 2 ? void 0 : arguments[2])
      }
      UH() {
        return "string" === typeof(arguments.length <= 0 ? void 0 : arguments[0]) ? this.addCallbackOrWaitCollectionAvailable(this.state, arguments.length <= 0 ? void 0 : arguments[0], Ku.ADD, arguments.length <= 1 ? void 0 : arguments[1], !1 !== (arguments.length <= 2 ? void 0 : arguments[2])) : this.addCallbackOrWaitCollectionAvailable(arguments.length <= 0 ? void 0 : arguments[0], arguments.length <= 1 ? void 0 : arguments[1], Ku.ADD, arguments.length <= 2 ? void 0 : arguments[2], !1 !== (arguments.length <= 3 ? void 0 : arguments[3]))
      }
      JA() {
        return "string" === typeof(arguments.length <= 0 ? void 0 : arguments[0]) ? this.addCallbackOrWaitCollectionAvailable(this.state, arguments.length <= 0 ? void 0 : arguments[0], Ku.DELETE, arguments.length <= 1 ? void 0 : arguments[1]) : this.addCallbackOrWaitCollectionAvailable(arguments.length <= 0 ? void 0 : arguments[0], arguments.length <= 1 ? void 0 : arguments[1], Ku.DELETE, arguments.length <= 2 ? void 0 : arguments[2])
      }
      bindTo(uu, Ru, yu) {
        let Eu = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
        const Qu = uu.constructor[Symbol.metadata];
        yu || (yu = Object.keys(Qu).filter((uu => !isNaN(Number(uu)))).map((uu => Qu[uu].name)));
        const mu = () => {
          for (const Eu of yu) {
            const yu = uu[Eu];
            void 0 !== yu && (Ru[Eu] = yu)
          }
        };
        return Eu && mu(), this.addCallback(uu[Ju], Ku.REPLACE, mu)
      }
      pD(uu) {
        this.uniqueRefIds.clear(), this.isTriggering = !0;
        for (let Ru = 0, yu = uu.length; Ru < yu; Ru++) {
          const yu = uu[Ru],
            Eu = yu.refId,
            Qu = yu.ref,
            mu = this.callbacks[Eu];
          if (mu) {
            if ((yu.op & Ku.DELETE) === Ku.DELETE && IE.isSchema(yu.previousValue)) {
              const uu = yu.previousValue[Ju],
                Ru = this.callbacks[uu]?.[Ku.DELETE];
              if (Ru)
                for (let yu = Ru.length - 1; yu >= 0; yu--) try {
                  Ru[yu]()
                } catch (QK) {
                  console.error(QK)
                }
            }
            if (IE.isSchema(Qu)) {
              if (!this.uniqueRefIds.has(Eu)) {
                const uu = mu[Ku.REPLACE];
                if (uu)
                  for (let Ru = uu.length - 1; Ru >= 0; Ru--) try {
                    uu[Ru]()
                  } catch (QK) {
                    console.error(QK)
                  }
              }
              const uu = mu[yu.field];
              if (uu)
                for (let Ru = uu.length - 1; Ru >= 0; Ru--) try {
                  uu[Ru](yu.value, yu.previousValue)
                } catch (QK) {
                  console.error(QK)
                }
            } else {
              const uu = yu.dynamicIndex ?? yu.field;
              if ((yu.op & Ku.DELETE) === Ku.DELETE) {
                if (void 0 !== yu.previousValue) {
                  const Ru = mu[Ku.DELETE];
                  if (Ru)
                    for (let Eu = Ru.length - 1; Eu >= 0; Eu--) try {
                      Ru[Eu](yu.previousValue, uu)
                    } catch (QK) {
                      console.error(QK)
                    }
                }
                if ((yu.op & Ku.ADD) === Ku.ADD) {
                  const Ru = mu[Ku.ADD];
                  if (Ru)
                    for (let Eu = Ru.length - 1; Eu >= 0; Eu--) try {
                      Ru[Eu](yu.value, uu)
                    } catch (QK) {
                      console.error(QK)
                    }
                }
              } else if ((yu.op & Ku.ADD) === Ku.ADD && yu.previousValue !== yu.value) {
                const Ru = mu[Ku.ADD];
                if (Ru)
                  for (let Eu = Ru.length - 1; Eu >= 0; Eu--) try {
                    Ru[Eu](yu.value, uu)
                  } catch (QK) {
                    console.error(QK)
                  }
              }
              if (yu.value !== yu.previousValue) {
                const Ru = mu[Ku.REPLACE];
                if (Ru)
                  for (let Eu = Ru.length - 1; Eu >= 0; Eu--) try {
                    Ru[Eu](uu, yu.value)
                  } catch (QK) {
                    console.error(QK)
                  }
              }
            }
            this.uniqueRefIds.add(Eu)
          }
        }
        this.isTriggering = !1
      }
    }
    const yK = {
      get(uu) {
        if (uu instanceof oE) return new RK(uu);
        if ("Ox" in uu.pW) return new RK(uu.pW.Ox);
        throw new Error("Invalid room or decoder")
      },
      getLegacy(uu) {
        if (uu instanceof oE) return fE(uu);
        if ("Ox" in uu.pW) return fE(uu.pW.Ox);
        throw new Error("Invalid room or decoder")
      },
      getRawChanges: (uu, Ru) => uK(uu, Ru)
    };
    class EK {
      _free = [];
      _factory;
      _maxSize;
      constructor(uu) {
        let Ru = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        this._factory = uu, this._maxSize = Ru.maxSize ?? 1 / 0;
        const yu = Ru.preallocate ?? 0;
        for (let Eu = 0; Eu < yu; Eu++) this._free.push(uu())
      }
      acquire() {
        return this._free.length > 0 ? this._free.pop() : this._factory()
      }
      release(uu) {
        IE.reset(uu), this._free.length < this._maxSize && this._free.push(uu)
      }
      get size() {
        return this._free.length
      }
    }

    function KK(uu) {
      return new EK((() => new uu), arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {})
    }
    CR("map", {
      constructor: KE
    }), CR("array", {
      constructor: yE
    }), CR("set", {
      constructor: mE
    }), CR("collection", {
      constructor: QE
    })
  },
  8832: (uu, Ru, yu) => {
    yu.r(Ru), yu.d(Ru, {
      __addDisposableResource: () => gu,
      __assign: () => Qu,
      __asyncDelegator: () => Au,
      __asyncGenerator: () => eu,
      __asyncValues: () => Du,
      __await: () => ku,
      __awaiter: () => Su,
      __classPrivateFieldGet: () => su,
      __classPrivateFieldIn: () => lu,
      __classPrivateFieldSet: () => tu,
      __createBinding: () => Tu,
      __decorate: () => Ju,
      __disposeResources: () => Lu,
      __esDecorate: () => Xu,
      __exportStar: () => Wu,
      __extends: () => Ku,
      __generator: () => pu,
      __importDefault: () => nu,
      __importStar: () => Uu,
      __makeTemplateObject: () => Mu,
      __metadata: () => xu,
      __param: () => Nu,
      __propKey: () => ru,
      __read: () => Hu,
      __rest: () => mu,
      __rewriteRelativeImportExtension: () => zu,
      __runInitializers: () => Vu,
      __setFunctionName: () => Bu,
      __spread: () => du,
      __spreadArray: () => Cu,
      __spreadArrays: () => bu,
      __values: () => ju,
      default: () => Fu
    });
    var Eu = function(uu, Ru) {
      return Eu = Object.setPrototypeOf || {
        __proto__: []
      }
      instanceof Array && function(uu, Ru) {
        uu.__proto__ = Ru
      } || function(uu, Ru) {
        for (var yu in Ru) Object.prototype.hasOwnProperty.call(Ru, yu) && (uu[yu] = Ru[yu])
      }, Eu(uu, Ru)
    };

    function Ku(uu, Ru) {
      if ("function" !== typeof Ru && null !== Ru) throw new TypeError("Class extends value " + String(Ru) + " is not a constructor or null");

      function yu() {
        this.constructor = uu
      }
      Eu(uu, Ru), uu.prototype = null === Ru ? Object.create(Ru) : (yu.prototype = Ru.prototype, new yu)
    }
    var Qu = function() {
      return Qu = Object.assign || function(uu) {
        for (var Ru, yu = 1, Eu = arguments.length; yu < Eu; yu++)
          for (var Ku in Ru = arguments[yu]) Object.prototype.hasOwnProperty.call(Ru, Ku) && (uu[Ku] = Ru[Ku]);
        return uu
      }, Qu.apply(this, arguments)
    };

    function mu(uu, Ru) {
      var yu = {};
      for (var Eu in uu) Object.prototype.hasOwnProperty.call(uu, Eu) && Ru.indexOf(Eu) < 0 && (yu[Eu] = uu[Eu]);
      if (null != uu && "function" === typeof Object.getOwnPropertySymbols) {
        var Ku = 0;
        for (Eu = Object.getOwnPropertySymbols(uu); Ku < Eu.length; Ku++) Ru.indexOf(Eu[Ku]) < 0 && Object.prototype.propertyIsEnumerable.call(uu, Eu[Ku]) && (yu[Eu[Ku]] = uu[Eu[Ku]])
      }
      return yu
    }

    function Ju(uu, Ru, yu, Eu) {
      var Ku, Qu = arguments.length,
        mu = Qu < 3 ? Ru : null === Eu ? Eu = Object.getOwnPropertyDescriptor(Ru, yu) : Eu;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) mu = Reflect.decorate(uu, Ru, yu, Eu);
      else
        for (var Ju = uu.length - 1; Ju >= 0; Ju--)(Ku = uu[Ju]) && (mu = (Qu < 3 ? Ku(mu) : Qu > 3 ? Ku(Ru, yu, mu) : Ku(Ru, yu)) || mu);
      return Qu > 3 && mu && Object.defineProperty(Ru, yu, mu), mu
    }

    function Nu(uu, Ru) {
      return function(yu, Eu) {
        Ru(yu, Eu, uu)
      }
    }

    function Xu(uu, Ru, yu, Eu, Ku, Qu) {
      function mu(uu) {
        if (void 0 !== uu && "function" !== typeof uu) throw new TypeError("Function expected");
        return uu
      }
      for (var Ju, Nu = Eu.kind, Xu = "getter" === Nu ? "get" : "setter" === Nu ? "set" : "value", Vu = !Ru && uu ? Eu.static ? uu : uu.prototype : null, ru = Ru || (Vu ? Object.getOwnPropertyDescriptor(Vu, Eu.name) : {}), Bu = !1, xu = yu.length - 1; xu >= 0; xu--) {
        var Su = {};
        for (var pu in Eu) Su[pu] = "access" === pu ? {} : Eu[pu];
        for (var pu in Eu.access) Su.access[pu] = Eu.access[pu];
        Su.addInitializer = function(uu) {
          if (Bu) throw new TypeError("Cannot add initializers after decoration has completed");
          Qu.push(mu(uu || null))
        };
        var Tu = (0, yu[xu])("accessor" === Nu ? {
          get: ru.get,
          set: ru.set
        } : ru[Xu], Su);
        if ("accessor" === Nu) {
          if (void 0 === Tu) continue;
          if (null === Tu || "object" !== typeof Tu) throw new TypeError("Object expected");
          (Ju = mu(Tu.get)) && (ru.get = Ju), (Ju = mu(Tu.set)) && (ru.set = Ju), (Ju = mu(Tu.init)) && Ku.unshift(Ju)
        } else(Ju = mu(Tu)) && ("field" === Nu ? Ku.unshift(Ju) : ru[Xu] = Ju)
      }
      Vu && Object.defineProperty(Vu, Eu.name, ru), Bu = !0
    }

    function Vu(uu, Ru, yu) {
      for (var Eu = arguments.length > 2, Ku = 0; Ku < Ru.length; Ku++) yu = Eu ? Ru[Ku].call(uu, yu) : Ru[Ku].call(uu);
      return Eu ? yu : void 0
    }

    function ru(uu) {
      return "symbol" === typeof uu ? uu : "".concat(uu)
    }

    function Bu(uu, Ru, yu) {
      return "symbol" === typeof Ru && (Ru = Ru.description ? "[".concat(Ru.description, "]") : ""), Object.defineProperty(uu, "name", {
        configurable: !0,
        value: yu ? "".concat(yu, " ", Ru) : Ru
      })
    }

    function xu(uu, Ru) {
      if ("object" === typeof Reflect && "function" === typeof Reflect.metadata) return Reflect.metadata(uu, Ru)
    }

    function Su(uu, Ru, yu, Eu) {
      return new(yu || (yu = Promise))((function(Ku, Qu) {
        function mu(uu) {
          try {
            Nu(Eu.next(uu))
          } catch (Ru) {
            Qu(Ru)
          }
        }

        function Ju(uu) {
          try {
            Nu(Eu.throw(uu))
          } catch (Ru) {
            Qu(Ru)
          }
        }

        function Nu(uu) {
          var Ru;
          uu.done ? Ku(uu.value) : (Ru = uu.value, Ru instanceof yu ? Ru : new yu((function(uu) {
            uu(Ru)
          }))).then(mu, Ju)
        }
        Nu((Eu = Eu.apply(uu, Ru || [])).next())
      }))
    }

    function pu(uu, Ru) {
      var yu, Eu, Ku, Qu = {
          label: 0,
          sent: function() {
            if (1 & Ku[0]) throw Ku[1];
            return Ku[1]
          },
          trys: [],
          ops: []
        },
        mu = Object.create(("function" === typeof Iterator ? Iterator : Object).prototype);
      return mu.next = Ju(0), mu.throw = Ju(1), mu.return = Ju(2), "function" === typeof Symbol && (mu[Symbol.iterator] = function() {
        return this
      }), mu;

      function Ju(Ju) {
        return function(Nu) {
          return function(Ju) {
            if (yu) throw new TypeError("Generator is already executing.");
            for (; mu && (mu = 0, Ju[0] && (Qu = 0)), Qu;) try {
              if (yu = 1, Eu && (Ku = 2 & Ju[0] ? Eu.return : Ju[0] ? Eu.throw || ((Ku = Eu.return) && Ku.call(Eu), 0) : Eu.next) && !(Ku = Ku.call(Eu, Ju[1])).done) return Ku;
              switch (Eu = 0, Ku && (Ju = [2 & Ju[0], Ku.value]), Ju[0]) {
                case 0:
                case 1:
                  Ku = Ju;
                  break;
                case 4:
                  return Qu.label++, {
                    value: Ju[1],
                    done: !1
                  };
                case 5:
                  Qu.label++, Eu = Ju[1], Ju = [0];
                  continue;
                case 7:
                  Ju = Qu.ops.pop(), Qu.trys.pop();
                  continue;
                default:
                  if (!(Ku = (Ku = Qu.trys).length > 0 && Ku[Ku.length - 1]) && (6 === Ju[0] || 2 === Ju[0])) {
                    Qu = 0;
                    continue
                  }
                  if (3 === Ju[0] && (!Ku || Ju[1] > Ku[0] && Ju[1] < Ku[3])) {
                    Qu.label = Ju[1];
                    break
                  }
                  if (6 === Ju[0] && Qu.label < Ku[1]) {
                    Qu.label = Ku[1], Ku = Ju;
                    break
                  }
                  if (Ku && Qu.label < Ku[2]) {
                    Qu.label = Ku[2], Qu.ops.push(Ju);
                    break
                  }
                  Ku[2] && Qu.ops.pop(), Qu.trys.pop();
                  continue
              }
              Ju = Ru.call(uu, Qu)
            } catch (Nu) {
              Ju = [6, Nu], Eu = 0
            } finally {
              yu = Ku = 0
            }
            if (5 & Ju[0]) throw Ju[1];
            return {
              value: Ju[0] ? Ju[1] : void 0,
              done: !0
            }
          }([Ju, Nu])
        }
      }
    }
    var Tu = Object.create ? function(uu, Ru, yu, Eu) {
      void 0 === Eu && (Eu = yu);
      var Ku = Object.getOwnPropertyDescriptor(Ru, yu);
      Ku && !("get" in Ku ? !Ru.__esModule : Ku.writable || Ku.configurable) || (Ku = {
        enumerable: !0,
        get: function() {
          return Ru[yu]
        }
      }), Object.defineProperty(uu, Eu, Ku)
    } : function(uu, Ru, yu, Eu) {
      void 0 === Eu && (Eu = yu), uu[Eu] = Ru[yu]
    };

    function Wu(uu, Ru) {
      for (var yu in uu) "default" === yu || Object.prototype.hasOwnProperty.call(Ru, yu) || Tu(Ru, uu, yu)
    }

    function ju(uu) {
      var Ru = "function" === typeof Symbol && Symbol.iterator,
        yu = Ru && uu[Ru],
        Eu = 0;
      if (yu) return yu.call(uu);
      if (uu && "number" === typeof uu.length) return {
        next: function() {
          return uu && Eu >= uu.length && (uu = void 0), {
            value: uu && uu[Eu++],
            done: !uu
          }
        }
      };
      throw new TypeError(Ru ? "Object is not iterable." : "Symbol.iterator is not defined.")
    }

    function Hu(uu, Ru) {
      var yu = "function" === typeof Symbol && uu[Symbol.iterator];
      if (!yu) return uu;
      var Eu, Ku, Qu = yu.call(uu),
        mu = [];
      try {
        for (;
          (void 0 === Ru || Ru-- > 0) && !(Eu = Qu.next()).done;) mu.push(Eu.value)
      } catch (Ju) {
        Ku = {
          error: Ju
        }
      } finally {
        try {
          Eu && !Eu.done && (yu = Qu.return) && yu.call(Qu)
        } finally {
          if (Ku) throw Ku.error
        }
      }
      return mu
    }

    function du() {
      for (var uu = [], Ru = 0; Ru < arguments.length; Ru++) uu = uu.concat(Hu(arguments[Ru]));
      return uu
    }

    function bu() {
      for (var uu = 0, Ru = 0, yu = arguments.length; Ru < yu; Ru++) uu += arguments[Ru].length;
      var Eu = Array(uu),
        Ku = 0;
      for (Ru = 0; Ru < yu; Ru++)
        for (var Qu = arguments[Ru], mu = 0, Ju = Qu.length; mu < Ju; mu++, Ku++) Eu[Ku] = Qu[mu];
      return Eu
    }

    function Cu(uu, Ru, yu) {
      if (yu || 2 === arguments.length)
        for (var Eu, Ku = 0, Qu = Ru.length; Ku < Qu; Ku++) !Eu && Ku in Ru || (Eu || (Eu = Array.prototype.slice.call(Ru, 0, Ku)), Eu[Ku] = Ru[Ku]);
      return uu.concat(Eu || Array.prototype.slice.call(Ru))
    }

    function ku(uu) {
      return this instanceof ku ? (this.v = uu, this) : new ku(uu)
    }

    function eu(uu, Ru, yu) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var Eu, Ku = yu.apply(uu, Ru || []),
        Qu = [];
      return Eu = Object.create(("function" === typeof AsyncIterator ? AsyncIterator : Object).prototype), mu("next"), mu("throw"), mu("return", (function(uu) {
        return function(Ru) {
          return Promise.resolve(Ru).then(uu, Xu)
        }
      })), Eu[Symbol.asyncIterator] = function() {
        return this
      }, Eu;

      function mu(uu, Ru) {
        Ku[uu] && (Eu[uu] = function(Ru) {
          return new Promise((function(yu, Eu) {
            Qu.push([uu, Ru, yu, Eu]) > 1 || Ju(uu, Ru)
          }))
        }, Ru && (Eu[uu] = Ru(Eu[uu])))
      }

      function Ju(uu, Ru) {
        try {
          (yu = Ku[uu](Ru)).value instanceof ku ? Promise.resolve(yu.value.v).then(Nu, Xu) : Vu(Qu[0][2], yu)
        } catch (Eu) {
          Vu(Qu[0][3], Eu)
        }
        var yu
      }

      function Nu(uu) {
        Ju("next", uu)
      }

      function Xu(uu) {
        Ju("throw", uu)
      }

      function Vu(uu, Ru) {
        uu(Ru), Qu.shift(), Qu.length && Ju(Qu[0][0], Qu[0][1])
      }
    }

    function Au(uu) {
      var Ru, yu;
      return Ru = {}, Eu("next"), Eu("throw", (function(uu) {
        throw uu
      })), Eu("return"), Ru[Symbol.iterator] = function() {
        return this
      }, Ru;

      function Eu(Eu, Ku) {
        Ru[Eu] = uu[Eu] ? function(Ru) {
          return (yu = !yu) ? {
            value: ku(uu[Eu](Ru)),
            done: !1
          } : Ku ? Ku(Ru) : Ru
        } : Ku
      }
    }

    function Du(uu) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var Ru, yu = uu[Symbol.asyncIterator];
      return yu ? yu.call(uu) : (uu = ju(uu), Ru = {}, Eu("next"), Eu("throw"), Eu("return"), Ru[Symbol.asyncIterator] = function() {
        return this
      }, Ru);

      function Eu(yu) {
        Ru[yu] = uu[yu] && function(Ru) {
          return new Promise((function(Eu, Ku) {
            (function(uu, Ru, yu, Eu) {
              Promise.resolve(Eu).then((function(Ru) {
                uu({
                  value: Ru,
                  done: yu
                })
              }), Ru)
            })(Eu, Ku, (Ru = uu[yu](Ru)).done, Ru.value)
          }))
        }
      }
    }

    function Mu(uu, Ru) {
      return Object.defineProperty ? Object.defineProperty(uu, "raw", {
        value: Ru
      }) : uu.raw = Ru, uu
    }
    var Iu = Object.create ? function(uu, Ru) {
        Object.defineProperty(uu, "default", {
          enumerable: !0,
          value: Ru
        })
      } : function(uu, Ru) {
        uu.default = Ru
      },
      Gu = function(uu) {
        return Gu = Object.getOwnPropertyNames || function(uu) {
          var Ru = [];
          for (var yu in uu) Object.prototype.hasOwnProperty.call(uu, yu) && (Ru[Ru.length] = yu);
          return Ru
        }, Gu(uu)
      };

    function Uu(uu) {
      if (uu && uu.__esModule) return uu;
      var Ru = {};
      if (null != uu)
        for (var yu = Gu(uu), Eu = 0; Eu < yu.length; Eu++) "default" !== yu[Eu] && Tu(Ru, uu, yu[Eu]);
      return Iu(Ru, uu), Ru
    }

    function nu(uu) {
      return uu && uu.__esModule ? uu : {
        default: uu
      }
    }

    function su(uu, Ru, yu, Eu) {
      if ("a" === yu && !Eu) throw new TypeError("Private accessor was defined without a getter");
      if ("function" === typeof Ru ? uu !== Ru || !Eu : !Ru.has(uu)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
      return "m" === yu ? Eu : "a" === yu ? Eu.call(uu) : Eu ? Eu.value : Ru.get(uu)
    }

    function tu(uu, Ru, yu, Eu, Ku) {
      if ("m" === Eu) throw new TypeError("Private method is not writable");
      if ("a" === Eu && !Ku) throw new TypeError("Private accessor was defined without a setter");
      if ("function" === typeof Ru ? uu !== Ru || !Ku : !Ru.has(uu)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
      return "a" === Eu ? Ku.call(uu, yu) : Ku ? Ku.value = yu : Ru.set(uu, yu), yu
    }

    function lu(uu, Ru) {
      if (null === Ru || "object" !== typeof Ru && "function" !== typeof Ru) throw new TypeError("Cannot use 'in' operator on non-object");
      return "function" === typeof uu ? Ru === uu : uu.has(Ru)
    }

    function gu(uu, Ru, yu) {
      if (null !== Ru && void 0 !== Ru) {
        if ("object" !== typeof Ru && "function" !== typeof Ru) throw new TypeError("Object expected.");
        var Eu, Ku;
        if (yu) {
          if (!Symbol.asyncDispose) throw new TypeError("Symbol.asyncDispose is not defined.");
          Eu = Ru[Symbol.asyncDispose]
        }
        if (void 0 === Eu) {
          if (!Symbol.dispose) throw new TypeError("Symbol.dispose is not defined.");
          Eu = Ru[Symbol.dispose], yu && (Ku = Eu)
        }
        if ("function" !== typeof Eu) throw new TypeError("Object not disposable.");
        Ku && (Eu = function() {
          try {
            Ku.call(this)
          } catch (uu) {
            return Promise.reject(uu)
          }
        }), uu.stack.push({
          value: Ru,
          dispose: Eu,
          async: yu
        })
      } else yu && uu.stack.push({
        async: !0
      });
      return Ru
    }
    var cu = "function" === typeof SuppressedError ? SuppressedError : function(uu, Ru, yu) {
      var Eu = new Error(yu);
      return Eu.name = "SuppressedError", Eu.error = uu, Eu.suppressed = Ru, Eu
    };

    function Lu(uu) {
      function Ru(Ru) {
        uu.error = uu.hasError ? new cu(Ru, uu.error, "An error was suppressed during disposal.") : Ru, uu.hasError = !0
      }
      var yu, Eu = 0;
      return function Ku() {
        for (; yu = uu.stack.pop();) try {
          if (!yu.async && 1 === Eu) return Eu = 0, uu.stack.push(yu), Promise.resolve().then(Ku);
          if (yu.dispose) {
            var Qu = yu.dispose.call(yu.value);
            if (yu.async) return Eu |= 2, Promise.resolve(Qu).then(Ku, (function(uu) {
              return Ru(uu), Ku()
            }))
          } else Eu |= 1
        } catch (mu) {
          Ru(mu)
        }
        if (1 === Eu) return uu.hasError ? Promise.reject(uu.error) : Promise.resolve();
        if (uu.hasError) throw uu.error
      }()
    }

    function zu(uu, Ru) {
      return "string" === typeof uu && /^\.\.?\//.test(uu) ? uu.replace(/\.(tsx)$|((?:\.d)?)((?:\.[^./]+?)?)\.([cm]?)ts$/i, (function(uu, yu, Eu, Ku, Qu) {
        return yu ? Ru ? ".jsx" : ".js" : !Eu || Ku && Qu ? Eu + Ku + "." + Qu.toLowerCase() + "js" : uu
      })) : uu
    }
    const Fu = {
      __extends: Ku,
      __assign: Qu,
      __rest: mu,
      __decorate: Ju,
      __param: Nu,
      __esDecorate: Xu,
      __runInitializers: Vu,
      __propKey: ru,
      __setFunctionName: Bu,
      __metadata: xu,
      __awaiter: Su,
      __generator: pu,
      __createBinding: Tu,
      __exportStar: Wu,
      __values: ju,
      __read: Hu,
      __spread: du,
      __spreadArrays: bu,
      __spreadArray: Cu,
      __await: ku,
      __asyncGenerator: eu,
      __asyncDelegator: Au,
      __asyncValues: Du,
      __makeTemplateObject: Mu,
      __importStar: Uu,
      __importDefault: nu,
      __classPrivateFieldGet: su,
      __classPrivateFieldSet: tu,
      __classPrivateFieldIn: lu,
      __addDisposableResource: gu,
      __disposeResources: Lu,
      __rewriteRelativeImportExtension: zu
    }
  }
};
Object.freeze(modules);
for (const uu in modules) Object.freeze(modules[uu]);