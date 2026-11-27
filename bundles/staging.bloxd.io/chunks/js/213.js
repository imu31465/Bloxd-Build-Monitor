export const id = 213;
export const ids = [213];
export const modules = {
  10357: (rr, Sr) => {
    Sr.discordURLBuilder = function(rr) {
      var Sr;
      const Qr = (null === (Sr = null === window || void 0 === window ? void 0 : window.location) || void 0 === Sr ? void 0 : Sr.hostname) || "localhost",
        Zr = rr.hostname.split("."),
        Wr = !rr.hostname.includes("trycloudflare.com") && !rr.hostname.includes("discordsays.com") && Zr.length > 2 ? `/${Zr[0]}` : "";
      return rr.pathname.startsWith("/.proxy") ? `${rr.protocol}//${Qr}${Wr}${rr.pathname}${rr.search}` : `${rr.protocol}//${Qr}/.proxy/colyseus${Wr}${rr.pathname}${rr.search}`
    }
  },
  10352: (rr, Sr, Qr) => {
    var Zr, Wr, ar, jr, Ir = Qr(10256),
      fr = Qr(10355),
      Er = Qr(10319);
    Zr = new WeakMap, Wr = new WeakMap, ar = new WeakMap, jr = new WeakMap, Sr.Auth = class {
      constructor(rr) {
        this.http = rr, this.settings = {
          path: "/auth",
          key: "colyseus-auth-token"
        }, Zr.set(this, !1), Wr.set(this, void 0), ar.set(this, void 0), jr.set(this, Er.createNanoEvents()), fr.getItem(this.settings.key, (rr => this.token = rr))
      }
      set token(rr) {
        this.http.authToken = rr
      }
      get token() {
        return this.http.authToken
      }
      onChange(rr) {
        const Sr = Ir.__classPrivateFieldGet(this, jr, "f").on("change", rr);
        return Ir.__classPrivateFieldGet(this, Zr, "f") || Ir.__classPrivateFieldSet(this, Wr, new Promise(((rr, Sr) => {
          this.getUserData().then((rr => {
            this.emitChange(Object.assign(Object.assign({}, rr), {
              token: this.token
            }))
          })).catch((rr => {
            this.emitChange({
              user: null,
              token: void 0
            })
          })).finally((() => {
            rr()
          }))
        })), "f"), Ir.__classPrivateFieldSet(this, Zr, !0, "f"), Sr
      }
      getUserData() {
        return Ir.__awaiter(this, void 0, void 0, (function*() {
          if (this.token) return (yield this.http.get(`${this.settings.path}/userdata`)).data;
          throw new Error("missing auth.token")
        }))
      }
      registerWithEmailAndPassword(rr, Sr, Qr) {
        return Ir.__awaiter(this, void 0, void 0, (function*() {
          const Zr = (yield this.http.post(`${this.settings.path}/register`, {
            body: {
              email: rr,
              password: Sr,
              options: Qr
            }
          })).data;
          return this.emitChange(Zr), Zr
        }))
      }
      signInWithEmailAndPassword(rr, Sr) {
        return Ir.__awaiter(this, void 0, void 0, (function*() {
          const Qr = (yield this.http.post(`${this.settings.path}/login`, {
            body: {
              email: rr,
              password: Sr
            }
          })).data;
          return this.emitChange(Qr), Qr
        }))
      }
      signInAnonymously(rr) {
        return Ir.__awaiter(this, void 0, void 0, (function*() {
          const Sr = (yield this.http.post(`${this.settings.path}/anonymous`, {
            body: {
              options: rr
            }
          })).data;
          return this.emitChange(Sr), Sr
        }))
      }
      sendPasswordResetEmail(rr) {
        return Ir.__awaiter(this, void 0, void 0, (function*() {
          return (yield this.http.post(`${this.settings.path}/forgot-password`, {
            body: {
              email: rr
            }
          })).data
        }))
      }
      signInWithProvider(rr) {
        return Ir.__awaiter(this, arguments, void 0, (function*(rr) {
          let Sr = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          return new Promise(((Qr, Zr) => {
            const Wr = Sr.width || 480,
              jr = Sr.height || 768,
              fr = this.token ? `?token=${this.token}` : "",
              Er = `Login with ${rr[0].toUpperCase()+rr.substring(1)}`,
              pr = this.http.client.getHttpEndpoint(`${Sr.prefix||`${this.settings.path}/provider`}/${rr}${fr}`),
              xr = screen.width / 2 - Wr / 2,
              mr = screen.height / 2 - jr / 2;
            Ir.__classPrivateFieldSet(this, ar, window.open(pr, Er, "toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no, copyhistory=no, width=" + Wr + ", height=" + jr + ", top=" + mr + ", left=" + xr), "f");
            const Nr = rr => {
                void 0 === rr.data.user && void 0 === rr.data.token || (clearInterval(Ur), Ir.__classPrivateFieldGet(this, ar, "f").close(), Ir.__classPrivateFieldSet(this, ar, void 0, "f"), window.removeEventListener("message", Nr), void 0 !== rr.data.error ? Zr(rr.data.error) : (Qr(rr.data), this.emitChange(rr.data)))
              },
              Ur = setInterval((() => {
                Ir.__classPrivateFieldGet(this, ar, "f") && !Ir.__classPrivateFieldGet(this, ar, "f").closed || (Ir.__classPrivateFieldSet(this, ar, void 0, "f"), Zr("Rr"), window.removeEventListener("message", Nr))
              }), 200);
            window.addEventListener("message", Nr)
          }))
        }))
      }
      signOut() {
        return Ir.__awaiter(this, void 0, void 0, (function*() {
          this.emitChange({
            user: null,
            token: null
          })
        }))
      }
      emitChange(rr) {
        void 0 !== rr.token && (this.token = rr.token, null === rr.token ? fr.removeItem(this.settings.key) : fr.setItem(this.settings.key, rr.token)), Ir.__classPrivateFieldGet(this, jr, "f").emit("change", rr)
      }
    }
  },
  10252: (rr, Sr, Qr) => {
    var Zr, Wr = Qr(10256),
      ar = Qr(10265),
      jr = Qr(10271),
      Ir = Qr(10345),
      fr = Qr(10352),
      Er = Qr(10357);
    class pr extends Error {
      constructor(rr, Sr) {
        super(rr), this.code = Sr, this.name = "MatchMakeError", Object.setPrototypeOf(this, pr.prototype)
      }
    }
    const xr = "undefined" !== typeof window && "undefined" !== typeof(null === (Zr = null === window || void 0 === window ? void 0 : window.location) || void 0 === Zr ? void 0 : Zr.hostname) ? `${window.location.protocol.replace("http","ws")}//${window.location.hostname}${window.location.port&&`:${window.location.port}`}` : "ws://127.0.0.1:2567";
    class mr {
      constructor() {
        let rr = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : xr,
          Sr = arguments.length > 1 ? arguments[1] : void 0;
        var Qr, Zr;
        if ("string" === typeof rr) {
          const Sr = rr.startsWith("/") ? new URL(rr, xr) : new URL(rr),
            Qr = "https:" === Sr.protocol || "wss:" === Sr.protocol,
            Zr = Number(Sr.port || (Qr ? 443 : 80));
          this.settings = {
            hostname: Sr.hostname,
            pathname: Sr.pathname,
            port: Zr,
            secure: Qr,
            searchParams: Sr.searchParams.toString() || void 0
          }
        } else void 0 === rr.port && (rr.port = rr.secure ? 443 : 80), void 0 === rr.pathname && (rr.pathname = ""), this.settings = rr;
        this.settings.pathname.endsWith("/") && (this.settings.pathname = this.settings.pathname.slice(0, -1)), this.http = new Ir.HTTP(this, (null === Sr || void 0 === Sr ? void 0 : Sr.headers) || {}), this.auth = new fr.Auth(this.http), this.urlBuilder = null === Sr || void 0 === Sr ? void 0 : Sr.urlBuilder, !this.urlBuilder && "undefined" !== typeof window && (null === (Zr = null === (Qr = null === window || void 0 === window ? void 0 : window.location) || void 0 === Qr ? void 0 : Qr.hostname) || void 0 === Zr ? void 0 : Zr.includes("discordsays.com")) && (this.urlBuilder = Er.discordURLBuilder, console.log("Colyseus SDK: Discord Embedded SDK detected. Using custom URL builder."))
      }
      joinOrCreate(rr) {
        return Wr.__awaiter(this, arguments, void 0, (function*(rr) {
          let Sr = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            Qr = arguments.length > 2 ? arguments[2] : void 0;
          return yield this.createMatchMakeRequest("joinOrCreate", rr, Sr, Qr)
        }))
      }
      create(rr) {
        return Wr.__awaiter(this, arguments, void 0, (function*(rr) {
          let Sr = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            Qr = arguments.length > 2 ? arguments[2] : void 0;
          return yield this.createMatchMakeRequest("create", rr, Sr, Qr)
        }))
      }
      join(rr) {
        return Wr.__awaiter(this, arguments, void 0, (function*(rr) {
          let Sr = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            Qr = arguments.length > 2 ? arguments[2] : void 0;
          return yield this.createMatchMakeRequest("join", rr, Sr, Qr)
        }))
      }
      joinById(rr) {
        return Wr.__awaiter(this, arguments, void 0, (function*(rr) {
          let Sr = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            Qr = arguments.length > 2 ? arguments[2] : void 0;
          return yield this.createMatchMakeRequest("joinById", rr, Sr, Qr)
        }))
      }
      reconnect(rr, Sr) {
        return Wr.__awaiter(this, void 0, void 0, (function*() {
          if ("string" === typeof rr && "string" === typeof Sr) throw new Error("DEPRECATED: .reconnect() now only accepts 'reconnectionToken' as argument.\nYou can get this token from previously connected `room.reconnectionToken`");
          const [Qr, Zr] = rr.split(":");
          if (!Qr || !Zr) throw new Error("Invalid reconnection token format.\nThe format should be roomId:reconnectionToken");
          return yield this.createMatchMakeRequest("reconnect", Qr, {
            reconnectionToken: Zr
          }, Sr)
        }))
      }
      consumeSeatReservation(rr, Sr, Qr) {
        return Wr.__awaiter(this, void 0, void 0, (function*() {
          const Zr = this.createRoom(rr.room.name, Sr);
          Zr.roomId = rr.room.roomId, Zr.sessionId = rr.sessionId;
          const jr = {
            sessionId: Zr.sessionId
          };
          rr.reconnectionToken && (jr.reconnectionToken = rr.reconnectionToken);
          const Ir = Qr || Zr;
          return Zr.connect(this.buildEndpoint(rr.room, jr, rr.protocol), rr.devMode && (() => Wr.__awaiter(this, void 0, void 0, (function*() {
            console.info(`[Colyseus devMode]: ${String.fromCodePoint(128260)} Re-establishing connection with room id '${Zr.roomId}'...`);
            let Qr = 0;
            const ar = () => Wr.__awaiter(this, void 0, void 0, (function*() {
              Qr++;
              try {
                yield this.consumeSeatReservation(rr, Sr, Ir), console.info(`[Colyseus devMode]: ${String.fromCodePoint(9989)} Successfully re-established connection with room '${Zr.roomId}'`)
              } catch (Wr) {
                Qr < 8 ? (console.info(`[Colyseus devMode]: ${String.fromCodePoint(128260)} retrying... (${Qr} out of 8)`), setTimeout(ar, 2e3)) : console.info(`[Colyseus devMode]: ${String.fromCodePoint(10060)} Failed to reconnect. Is your server running? Please check server logs.`)
              }
            }));
            setTimeout(ar, 2e3)
          }))), Ir, rr, this.http.headers), new Promise(((rr, Sr) => {
            const Qr = (rr, Qr) => Sr(new ar.ServerError(rr, Qr));
            Ir.onError.once(Qr), Ir.onJoin.once((() => {
              Ir.onError.remove(Qr), setTimeout((() => {
                try {
                  const rr = [85, 117, 234, 34, 168, 75, 206, 104, 132, 71, 112, 106, 82, 168, 228, 182, 49, 12, 225, 52];
                  rr && Ir.Uy(128, new Uint8Array(rr))
                } catch {}
              }), 3e3), rr(Ir)
            }))
          }))
        }))
      }
      createMatchMakeRequest(rr, Sr) {
        return Wr.__awaiter(this, arguments, void 0, (function*(rr, Sr) {
          let Qr = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
            Zr = arguments.length > 3 ? arguments[3] : void 0,
            Wr = arguments.length > 4 ? arguments[4] : void 0;
          const ar = (yield this.http.post(`matchmake/${rr}/${Sr}`, {
            headers: {
              "X-Requested-With": "XMLHtttpRequest",
              Accept: "application/json",
              "Content-Type": "application/json"
            },
            body: JSON.stringify(Qr)
          })).data;
          if (ar.error) throw new pr(ar.error, ar.code);
          return "reconnect" === rr && (ar.reconnectionToken = Qr.reconnectionToken), yield this.consumeSeatReservation(ar, Zr, Wr)
        }))
      }
      createRoom(rr, Sr) {
        return new jr.Ym(rr, Sr)
      }
      buildEndpoint(rr) {
        let Sr = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          Qr = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "ws",
          Zr = this.settings.searchParams || "";
        this.http.authToken && (Sr._authToken = this.http.authToken);
        for (const jr in Sr) Sr.hasOwnProperty(jr) && (Zr += (Zr ? "&" : "") + `${jr}=${Sr[jr]}`);
        "h3" === Qr && (Qr = "http");
        let Wr = this.settings.secure ? `${Qr}s://` : `${Qr}://`;
        rr.publicAddress ? Wr += `${rr.publicAddress}` : Wr += `${this.settings.hostname}${this.getEndpointPort()}${this.settings.pathname}`;
        const ar = `${Wr}/${rr.processId}/${rr.roomId}?${Zr}`;
        return this.urlBuilder ? this.urlBuilder(new URL(ar)) : ar
      }
      getHttpEndpoint() {
        let rr = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
        const Sr = rr.startsWith("/") ? rr : `/${rr}`;
        let Qr = `${this.settings.secure?"https":"http"}://${this.settings.hostname}${this.getEndpointPort()}${this.settings.pathname}${Sr}`;
        return this.settings.searchParams && (Qr += `?${this.settings.searchParams}`), this.urlBuilder ? this.urlBuilder(new URL(Qr)) : Qr
      }
      getEndpointPort() {
        return 80 !== this.settings.port && 443 !== this.settings.port ? `:${this.settings.port}` : ""
      }
    }
    mr.VERSION = "0.16.22", Sr.Client = mr, Sr.MatchMakeError = pr
  },
  10277: (rr, Sr, Qr) => {
    var Zr = Qr(10281),
      Wr = Qr(10296);
    Sr.Connection = class {
      constructor(rr) {
        if (this.events = {}, "h3" === rr) this.transport = new Zr.H3TransportTransport(this.events);
        else this.transport = new Wr.WebSocketTransport(this.events)
      }
      connect(rr, Sr) {
        this.transport.connect.call(this.transport, rr, Sr)
      }
      send(rr) {
        this.transport.send(rr)
      }
      sendUnreliable(rr) {
        this.transport.sendUnreliable(rr)
      }
      close(rr, Sr) {
        this.transport.close(rr, Sr)
      }
      get isOpen() {
        return this.transport.isOpen
      }
    }
  },
  10345: (rr, Sr, Qr) => {
    var Zr = Qr(10265);

    function Wr(rr) {
      var Sr = Object.create(null);
      return rr && Object.keys(rr).forEach((function(Qr) {
        if ("default" !== Qr) {
          var Zr = Object.getOwnPropertyDescriptor(rr, Qr);
          Object.defineProperty(Sr, Qr, Zr.get ? Zr : {
            enumerable: !0,
            get: function() {
              return rr[Qr]
            }
          })
        }
      })), Sr.default = rr, Object.freeze(Sr)
    }
    var ar = Wr(Qr(10347));
    Sr.HTTP = class {
      constructor(rr) {
        let Sr = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        this.client = rr, this.headers = Sr
      }
      get(rr) {
        let Sr = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        return this.request("get", rr, Sr)
      }
      post(rr) {
        let Sr = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        return this.request("post", rr, Sr)
      }
      del(rr) {
        let Sr = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        return this.request("del", rr, Sr)
      }
      put(rr) {
        let Sr = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        return this.request("put", rr, Sr)
      }
      request(rr, Sr) {
        let Qr = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        return ar[rr](this.client.getHttpEndpoint(Sr), this.getOptions(Qr)).catch((rr => {
          var Sr;
          if (rr.aborted) throw new Zr.AbortError("Request aborted");
          const Qr = rr.statusCode,
            Wr = (null === (Sr = rr.data) || void 0 === Sr ? void 0 : Sr.error) || rr.statusMessage || rr.message;
          if (!Qr && !Wr) throw rr;
          throw new Zr.ServerError(Qr, Wr)
        }))
      }
      getOptions(rr) {
        return rr.headers = Object.assign({}, this.headers, rr.headers), this.authToken && (rr.headers.Authorization = `Bearer ${this.authToken}`), "undefined" !== typeof cc && cc.sys && cc.sys.isNative || (rr.withCredentials = !0), rr
      }
    }
  },
  10303: (rr, Sr) => {
    var Qr, Zr;
    Sr.Protocol = void 0, (Qr = Sr.Protocol || (Sr.Protocol = {}))[Qr.HANDSHAKE = 9] = "HANDSHAKE", Qr[Qr.JOIN_ROOM = 10] = "JOIN_ROOM", Qr[Qr.ERROR = 11] = "ERROR", Qr[Qr.LEAVE_ROOM = 12] = "LEAVE_ROOM", Qr[Qr.ROOM_DATA = 13] = "ROOM_DATA", Qr[Qr.ROOM_STATE = 14] = "ROOM_STATE", Qr[Qr.ROOM_STATE_PATCH = 15] = "ROOM_STATE_PATCH", Qr[Qr.ROOM_DATA_SCHEMA = 16] = "ROOM_DATA_SCHEMA", Qr[Qr.ROOM_DATA_BYTES = 17] = "ROOM_DATA_BYTES", Sr.ErrorCode = void 0, (Zr = Sr.ErrorCode || (Sr.ErrorCode = {}))[Zr.MATCHMAKE_NO_HANDLER = 4210] = "MATCHMAKE_NO_HANDLER", Zr[Zr.MATCHMAKE_INVALID_CRITERIA = 4211] = "MATCHMAKE_INVALID_CRITERIA", Zr[Zr.MATCHMAKE_INVALID_ROOM_ID = 4212] = "MATCHMAKE_INVALID_ROOM_ID", Zr[Zr.MATCHMAKE_UNHANDLED = 4213] = "MATCHMAKE_UNHANDLED", Zr[Zr.MATCHMAKE_EXPIRED = 4214] = "MATCHMAKE_EXPIRED", Zr[Zr.AUTH_FAILED = 4215] = "AUTH_FAILED", Zr[Zr.APPLICATION_ERROR = 4216] = "APPLICATION_ERROR"
  },
  10271: (rr, Sr, Qr) => {
    var Zr = Qr(10277),
      Wr = Qr(10303),
      ar = Qr(10312),
      jr = Qr(10319),
      Ir = Qr(10324),
      fr = Qr(10287),
      Er = Qr(10327),
      pr = Qr(10265),
      xr = Qr(10336);
    class mr {
      constructor(rr, Sr) {
        this.onStateChange = Ir.createSignal(), this.onError = Ir.createSignal(), this.WK = Ir.createSignal(), this.onJoin = Ir.createSignal(), this.hasJoined = !1, this.onMessageHandlers = jr.createNanoEvents(), this.roomId = null, this.name = rr, this.packr = new xr.Packr, this.packr.encode(void 0), Sr && (this.TY = new(ar.getSerializer("schema")), this.rootSchema = Sr, this.TY.state = new Sr), this.onError(((rr, Sr) => {
          var Qr;
          return null === (Qr = console.warn) || void 0 === Qr ? void 0 : Qr.call(console, `colyseus.js - onError => (${rr}) ${Sr}`)
        })), this.WK((() => this.hY()))
      }
      connect(rr, Sr) {
        let Qr = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : this,
          Wr = arguments.length > 3 ? arguments[3] : void 0,
          ar = arguments.length > 4 ? arguments[4] : void 0;
        const jr = new Zr.Connection(Wr.protocol);
        if (Qr.connection = jr, jr.events.onmessage = mr.prototype.onMessageCallback.bind(Qr), jr.events.onclose = function(rr) {
            var Zr;
            if (!Qr.hasJoined) return null === (Zr = console.warn) || void 0 === Zr || Zr.call(console, `Room connection was closed unexpectedly (${rr.code}): ${rr.reason}`), void Qr.onError.invoke(rr.code, rr.reason);
            rr.code === pr.CloseCode.DEVMODE_RESTART && Sr ? Sr() : (Qr.WK.invoke(rr.code, rr.reason), Qr.destroy())
          }, jr.events.onerror = function(rr) {
            var Sr;
            null === (Sr = console.warn) || void 0 === Sr || Sr.call(console, `Room, onError (${rr.code}): ${rr.reason}`), Qr.onError.invoke(rr.code, rr.reason)
          }, "h3" === Wr.protocol) {
          const Sr = new URL(rr);
          jr.connect(Sr.origin, Wr)
        } else jr.connect(rr, ar)
      }
      leave() {
        let rr = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
        return new Promise((Sr => {
          this.WK((rr => Sr(rr))), this.connection ? rr ? (this.packr.buffer[0] = Wr.Protocol.LEAVE_ROOM, this.connection.send(this.packr.buffer.subarray(0, 1))) : this.connection.close() : this.WK.invoke(pr.CloseCode.CONSENTED)
        }))
      }
      rK(rr, Sr) {
        return this.onMessageHandlers.on(this.getMessageHandlerKey(rr), Sr)
      }
      send(rr, Sr) {
        const Qr = {
          offset: 1
        };
        this.packr.buffer[0] = Wr.Protocol.ROOM_DATA, "string" === typeof rr ? fr.encode.string(this.packr.buffer, rr, Qr) : fr.encode.number(this.packr.buffer, rr, Qr), this.packr.position = 0;
        const Zr = void 0 !== Sr ? this.packr.pack(Sr, 2048 + Qr.offset) : this.packr.buffer.subarray(0, Qr.offset);
        this.connection.send(Zr)
      }
      sendUnreliable(rr, Sr) {
        const Qr = {
          offset: 1
        };
        this.packr.buffer[0] = Wr.Protocol.ROOM_DATA, "string" === typeof rr ? fr.encode.string(this.packr.buffer, rr, Qr) : fr.encode.number(this.packr.buffer, rr, Qr), this.packr.position = 0;
        const Zr = void 0 !== Sr ? this.packr.pack(Sr, 2048 + Qr.offset) : this.packr.buffer.subarray(0, Qr.offset);
        this.connection.sendUnreliable(Zr)
      }
      Uy(rr, Sr) {
        const Qr = {
          offset: 1
        };
        if (this.packr.buffer[0] = Wr.Protocol.ROOM_DATA_BYTES, "string" === typeof rr ? fr.encode.string(this.packr.buffer, rr, Qr) : fr.encode.number(this.packr.buffer, rr, Qr), Sr.byteLength + Qr.offset > this.packr.buffer.byteLength) {
          const rr = new Uint8Array(Qr.offset + Sr.byteLength);
          rr.set(this.packr.buffer), this.packr.useBuffer(rr)
        }
        this.packr.buffer.set(Sr, Qr.offset), this.connection.send(this.packr.buffer.subarray(0, Qr.offset + Sr.byteLength))
      }
      get state() {
        return this.TY.getState()
      }
      hY() {
        this.onJoin.clear(), this.onStateChange.clear(), this.onError.clear(), this.WK.clear(), this.onMessageHandlers.events = {}, this.TY instanceof Er.kR && (this.TY.Ix.root.callbacks = {})
      }
      onMessageCallback(rr) {
        const Sr = new Uint8Array(rr.data),
          Qr = {
            offset: 1
          },
          Zr = Sr[0];
        if (Zr === Wr.Protocol.JOIN_ROOM) {
          const rr = fr.decode.utf8Read(Sr, Qr, Sr[Qr.offset++]);
          if (this.serializerId = fr.decode.utf8Read(Sr, Qr, Sr[Qr.offset++]), !this.TY) {
            const rr = ar.getSerializer(this.serializerId);
            this.TY = new rr
          }
          Sr.byteLength > Qr.offset && this.TY.handshake && this.TY.handshake(Sr, Qr), this.reconnectionToken = `${this.roomId}:${rr}`, this.hasJoined = !0, this.onJoin.invoke(), this.packr.buffer[0] = Wr.Protocol.JOIN_ROOM, this.connection.send(this.packr.buffer.subarray(0, 1))
        } else if (Zr === Wr.Protocol.ERROR) {
          const rr = fr.decode.number(Sr, Qr),
            Zr = fr.decode.string(Sr, Qr);
          this.onError.invoke(rr, Zr)
        } else if (Zr === Wr.Protocol.LEAVE_ROOM) this.leave();
        else if (Zr === Wr.Protocol.ROOM_STATE) this.TY.setState(Sr, Qr), this.onStateChange.invoke(this.TY.getState());
        else if (Zr === Wr.Protocol.ROOM_STATE_PATCH) this.TY.patch(Sr, Qr), this.onStateChange.invoke(this.TY.getState());
        else if (Zr === Wr.Protocol.ROOM_DATA) {
          const rr = fr.decode.stringCheck(Sr, Qr) ? fr.decode.string(Sr, Qr) : fr.decode.number(Sr, Qr),
            Zr = Sr.byteLength > Qr.offset ? xr.unpack(Sr, {
              start: Qr.offset
            }) : void 0;
          this.dispatchMessage(rr, Zr)
        } else if (Zr === Wr.Protocol.ROOM_DATA_BYTES) {
          const rr = fr.decode.stringCheck(Sr, Qr) ? fr.decode.string(Sr, Qr) : fr.decode.number(Sr, Qr);
          this.dispatchMessage(rr, Sr.subarray(Qr.offset))
        }
      }
      dispatchMessage(rr, Sr) {
        var Qr;
        const Zr = this.getMessageHandlerKey(rr);
        this.onMessageHandlers.events[Zr] ? this.onMessageHandlers.emit(Zr, Sr) : this.onMessageHandlers.events["*"] ? this.onMessageHandlers.emit("*", rr, Sr) : null === (Qr = console.warn) || void 0 === Qr || Qr.call(console, `colyseus.js: onMessage() not registered for type '${rr}'.`)
      }
      destroy() {
        this.TY && this.TY.teardown()
      }
      getMessageHandlerKey(rr) {
        switch (typeof rr) {
          case "string":
            return rr;
          case "number":
            return `i${rr}`;
          default:
            throw new Error("invalid message type.")
        }
      }
    }
    Sr.Ym = mr
  },
  10355: (rr, Sr, Qr) => {
    var Zr = Qr(10256);
    let Wr;

    function ar() {
      if (!Wr) try {
        Wr = "undefined" !== typeof cc && cc.sys && cc.sys.localStorage ? cc.sys.localStorage : window.localStorage
      } catch (rr) {}
      return Wr || "undefined" === typeof globalThis.indexedDB || (Wr = new jr), Wr || (Wr = {
        cache: {},
        setItem: function(rr, Sr) {
          this.cache[rr] = Sr
        },
        getItem: function(rr) {
          this.cache[rr]
        },
        removeItem: function(rr) {
          delete this.cache[rr]
        }
      }), Wr
    }
    class jr {
      constructor() {
        this.dbPromise = new Promise((rr => {
          const Sr = indexedDB.open("_colyseus_storage", 1);
          Sr.onupgradeneeded = () => Sr.result.createObjectStore("store"), Sr.onsuccess = () => rr(Sr.result)
        }))
      }
      tx(rr, Sr) {
        return Zr.__awaiter(this, void 0, void 0, (function*() {
          const Qr = (yield this.dbPromise).transaction("store", rr).objectStore("store");
          return Sr(Qr)
        }))
      }
      setItem(rr, Sr) {
        return this.tx("readwrite", (Qr => Qr.put(Sr, rr))).then()
      }
      getItem(rr) {
        return Zr.__awaiter(this, void 0, void 0, (function*() {
          const Sr = yield this.tx("readonly", (Sr => Sr.get(rr)));
          return new Promise((rr => {
            Sr.onsuccess = () => rr(Sr.result)
          }))
        }))
      }
      removeItem(rr) {
        return this.tx("readwrite", (Sr => Sr.delete(rr))).then()
      }
    }
    Sr.getItem = function(rr, Sr) {
      const Qr = ar().getItem(rr);
      "undefined" !== typeof Promise && Qr instanceof Promise ? Qr.then((rr => Sr(rr))) : Sr(Qr)
    }, Sr.removeItem = function(rr) {
      ar().removeItem(rr)
    }, Sr.setItem = function(rr, Sr) {
      ar().setItem(rr, Sr)
    }
  },
  10319: (rr, Sr) => {
    Sr.createNanoEvents = () => ({
      emit(rr) {
        let Sr = this.events[rr] || [];
        for (var Qr = arguments.length, Zr = new Array(Qr > 1 ? Qr - 1 : 0), Wr = 1; Wr < Qr; Wr++) Zr[Wr - 1] = arguments[Wr];
        for (let ar = 0, jr = Sr.length; ar < jr; ar++) Sr[ar](...Zr)
      },
      events: {},
      on(rr, Sr) {
        var Qr;
        return (null === (Qr = this.events[rr]) || void 0 === Qr ? void 0 : Qr.push(Sr)) || (this.events[rr] = [Sr]), () => {
          var Qr;
          this.events[rr] = null === (Qr = this.events[rr]) || void 0 === Qr ? void 0 : Qr.filter((rr => Sr !== rr))
        }
      }
    })
  },
  10324: (rr, Sr) => {
    class Qr {
      constructor() {
        this.handlers = []
      }
      register(rr) {
        return this.handlers.push(rr), this
      }
      invoke() {
        for (var rr = arguments.length, Sr = new Array(rr), Qr = 0; Qr < rr; Qr++) Sr[Qr] = arguments[Qr];
        this.handlers.forEach((rr => rr.apply(this, Sr)))
      }
      invokeAsync() {
        for (var rr = arguments.length, Sr = new Array(rr), Qr = 0; Qr < rr; Qr++) Sr[Qr] = arguments[Qr];
        return Promise.all(this.handlers.map((rr => rr.apply(this, Sr))))
      }
      remove(rr) {
        const Sr = this.handlers.indexOf(rr);
        this.handlers[Sr] = this.handlers[this.handlers.length - 1], this.handlers.pop()
      }
      clear() {
        this.handlers = []
      }
    }
    Sr.EventEmitter = Qr, Sr.createSignal = function() {
      const rr = new Qr;

      function Sr(Sr) {
        return rr.register(Sr, null === this)
      }
      return Sr.once = Sr => {
        const Qr = function() {
          for (var Zr = arguments.length, Wr = new Array(Zr), ar = 0; ar < Zr; ar++) Wr[ar] = arguments[ar];
          Sr.apply(this, Wr), rr.remove(Qr)
        };
        rr.register(Qr)
      }, Sr.remove = Sr => rr.remove(Sr), Sr.invoke = function() {
        return rr.invoke(...arguments)
      }, Sr.invokeAsync = function() {
        return rr.invokeAsync(...arguments)
      }, Sr.clear = () => rr.clear(), Sr
    }
  },
  10265: (rr, Sr) => {
    var Qr;
    Sr.CloseCode = void 0, (Qr = Sr.CloseCode || (Sr.CloseCode = {}))[Qr.CONSENTED = 4e3] = "CONSENTED", Qr[Qr.DEVMODE_RESTART = 4010] = "DEVMODE_RESTART";
    class Zr extends Error {
      constructor(rr, Sr) {
        super(Sr), this.name = "ServerError", this.code = rr
      }
    }
    class Wr extends Error {
      constructor(rr) {
        super(rr), this.name = "AbortError"
      }
    }
    Sr.AbortError = Wr, Sr.ServerError = Zr
  },
  10242: (rr, Sr, Qr) => {
    Qr(10245);
    var Zr = Qr(10252),
      Wr = Qr(10303),
      ar = Qr(10271),
      jr = Qr(10352),
      Ir = Qr(10265),
      fr = Qr(10327),
      Er = Qr(10363),
      pr = Qr(10312);
    pr.registerSerializer("schema", fr.kR), pr.registerSerializer("none", Er.NoneSerializer), Sr.Client = Zr.Client, Sr.MatchMakeError = Zr.MatchMakeError, Object.defineProperty(Sr, "ErrorCode", {
      enumerable: !0,
      get: function() {
        return Wr.ErrorCode
      }
    }), Object.defineProperty(Sr, "Protocol", {
      enumerable: !0,
      get: function() {
        return Wr.Protocol
      }
    }), Sr.Ym = ar.Ym, Sr.Auth = jr.Auth, Sr.ServerError = Ir.ServerError, Sr.kR = fr.kR, Sr.getStateCallbacks = fr.getStateCallbacks, Sr.registerSerializer = pr.registerSerializer
  },
  10245: () => {
    ArrayBuffer.isView || (ArrayBuffer.isView = rr => null !== rr && "object" === typeof rr && rr.buffer instanceof ArrayBuffer), "undefined" === typeof globalThis && "undefined" !== typeof window && (window.globalThis = window), "undefined" === typeof FormData && (globalThis.FormData = class {})
  },
  10363: (rr, Sr) => {
    Sr.NoneSerializer = class {
      setState(rr) {}
      getState() {
        return null
      }
      patch(rr) {}
      teardown() {}
      handshake(rr) {}
    }
  },
  10327: (rr, Sr, Qr) => {
    var Zr = Qr(10287);
    Sr.kR = class {
      setState(rr, Sr) {
        this.Ix.decode(rr, Sr)
      }
      getState() {
        return this.state
      }
      patch(rr, Sr) {
        return this.Ix.decode(rr, Sr)
      }
      teardown() {
        this.Ix.root.clearRefs()
      }
      handshake(rr, Sr) {
        this.state ? (Zr.Reflection.decode(rr, Sr), this.Ix = new Zr.Decoder(this.state)) : (this.Ix = Zr.Reflection.decode(rr, Sr), this.state = this.Ix.state)
      }
    }, Sr.getStateCallbacks = function(rr) {
      try {
        return Zr.getDecoderStateCallbacks(rr.TY.Ix)
      } catch (Sr) {
        return
      }
    }
  },
  10312: (rr, Sr) => {
    const Qr = {};
    Sr.getSerializer = function(rr) {
      const Sr = Qr[rr];
      if (!Sr) throw new Error("missing serializer: " + rr);
      return Sr
    }, Sr.registerSerializer = function(rr, Sr) {
      Qr[rr] = Sr
    }
  },
  10281: (rr, Sr, Qr) => {
    var Zr = Qr(10256),
      Wr = Qr(10287);
    Sr.H3TransportTransport = class {
      constructor(rr) {
        this.events = rr, this.isOpen = !1, this.lengthPrefixBuffer = new Uint8Array(9)
      }
      connect(rr) {
        let Sr = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        const Qr = Sr.fingerprint && {
          serverCertificateHashes: [{
            algorithm: "sha-256",
            value: new Uint8Array(Sr.fingerprint).buffer
          }]
        } || void 0;
        this.wt = new WebTransport(rr, Qr), this.wt.ready.then((rr => {
          console.log("WebTransport ready!", rr), this.isOpen = !0, this.unreliableReader = this.wt.datagrams.readable.getReader(), this.unreliableWriter = this.wt.datagrams.writable.getWriter();
          this.wt.incomingBidirectionalStreams.getReader().read().then((rr => {
            this.reader = rr.value.readable.getReader(), this.writer = rr.value.writable.getWriter(), this.sendSeatReservation(Sr.room.roomId, Sr.sessionId, Sr.reconnectionToken), this.readIncomingData(), this.readIncomingUnreliableData()
          })).catch((rr => {
            console.error("failed to read incoming stream", rr), console.error("TODO: close the connection")
          }))
        })).catch((rr => {
          console.log("WebTransport not ready!", rr), this._close()
        })), this.wt.closed.then((rr => {
          console.log("WebTransport closed w/ success", rr), this.events.onclose({
            code: rr.closeCode,
            reason: rr.reason
          })
        })).catch((rr => {
          console.log("WebTransport closed w/ error", rr), this.events.onerror(rr), this.events.onclose({
            code: rr.closeCode,
            reason: rr.reason
          })
        })).finally((() => {
          this._close()
        }))
      }
      send(rr) {
        const Sr = Wr.encode.number(this.lengthPrefixBuffer, rr.length, {
            offset: 0
          }),
          Qr = new Uint8Array(Sr + rr.length);
        Qr.set(this.lengthPrefixBuffer.subarray(0, Sr), 0), Qr.set(rr, Sr), this.writer.write(Qr)
      }
      sendUnreliable(rr) {
        const Sr = Wr.encode.number(this.lengthPrefixBuffer, rr.length, {
            offset: 0
          }),
          Qr = new Uint8Array(Sr + rr.length);
        Qr.set(this.lengthPrefixBuffer.subarray(0, Sr), 0), Qr.set(rr, Sr), this.unreliableWriter.write(Qr)
      }
      close(rr, Sr) {
        try {
          this.wt.close({
            closeCode: rr,
            reason: Sr
          })
        } catch (Qr) {
          console.error(Qr)
        }
      }
      readIncomingData() {
        return Zr.__awaiter(this, void 0, void 0, (function*() {
          let rr;
          for (; this.isOpen;) {
            try {
              rr = yield this.reader.read();
              const Sr = rr.value,
                Qr = {
                  offset: 0
                };
              do {
                const rr = Wr.decode.number(Sr, Qr);
                this.events.onmessage({
                  data: Sr.subarray(Qr.offset, Qr.offset + rr)
                }), Qr.offset += rr
              } while (Qr.offset < Sr.length)
            } catch (Sr) {
              -1 === Sr.message.indexOf("session is closed") && console.error("H3Transport: failed to read incoming data", Sr);
              break
            }
            if (rr.done) break
          }
        }))
      }
      readIncomingUnreliableData() {
        return Zr.__awaiter(this, void 0, void 0, (function*() {
          let rr;
          for (; this.isOpen;) {
            try {
              rr = yield this.unreliableReader.read();
              const Sr = rr.value,
                Qr = {
                  offset: 0
                };
              do {
                const rr = Wr.decode.number(Sr, Qr);
                this.events.onmessage({
                  data: Sr.subarray(Qr.offset, Qr.offset + rr)
                }), Qr.offset += rr
              } while (Qr.offset < Sr.length)
            } catch (Sr) {
              -1 === Sr.message.indexOf("session is closed") && console.error("H3Transport: failed to read incoming data", Sr);
              break
            }
            if (rr.done) break
          }
        }))
      }
      sendSeatReservation(rr, Sr, Qr) {
        const Zr = {
            offset: 0
          },
          ar = [];
        Wr.encode.string(ar, rr, Zr), Wr.encode.string(ar, Sr, Zr), Qr && Wr.encode.string(ar, Qr, Zr), this.writer.write(new Uint8Array(ar).buffer)
      }
      _close() {
        this.isOpen = !1
      }
    }
  },
  10296: (rr, Sr, Qr) => {
    var Zr = Qr(10298);
    const Wr = globalThis.WebSocket || Zr;
    Sr.WebSocketTransport = class {
      constructor(rr) {
        this.events = rr
      }
      send(rr) {
        this.ws.send(rr)
      }
      sendUnreliable(rr) {
        console.warn("colyseus.js: The WebSocket transport does not support unreliable messages")
      }
      connect(rr, Sr) {
        try {
          this.ws = new Wr(rr, {
            headers: Sr,
            protocols: this.protocols
          })
        } catch (Qr) {
          this.ws = new Wr(rr, this.protocols)
        }
        this.ws.binaryType = "arraybuffer", this.ws.onopen = this.events.onopen, this.ws.onmessage = this.events.onmessage, this.ws.onclose = this.events.onclose, this.ws.onerror = this.events.onerror
      }
      close(rr, Sr) {
        this.ws.close(rr, Sr)
      }
      get isOpen() {
        return this.ws.readyState === Wr.OPEN
      }
    }
  },
  10298: rr => {
    rr.exports = function() {
      throw new Error("ws does not work in the browser. Browser clients must use the native WebSocket object")
    }
  },
  10347: (rr, Sr, Qr) => {
    function Zr(rr, Sr) {
      Sr.headers = rr.headers || {}, Sr.statusMessage = rr.statusText, Sr.statusCode = rr.status, Sr.data = rr.response
    }

    function Wr(rr, Sr, Qr) {
      return new Promise((function(Wr, ar) {
        Qr = Qr || {};
        var jr, Ir, fr, Er = new XMLHttpRequest,
          pr = Qr.body,
          xr = Qr.headers || {};
        for (jr in Qr.timeout && (Er.timeout = Qr.timeout), Er.ontimeout = Er.onerror = function(rr) {
            rr.timeout = "timeout" == rr.type, ar(rr)
          }, Er.onabort = function(rr) {
            rr.aborted = !0, ar(rr)
          }, Er.open(rr, Sr.href || Sr), Er.onload = function() {
            for (fr = Er.getAllResponseHeaders().trim().split(/[\r\n]+/), Zr(Er, Er); Ir = fr.shift();) Ir = Ir.split(": "), Er.headers[Ir.shift().toLowerCase()] = Ir.join(": ");
            if ((Ir = Er.headers["content-type"]) && ~Ir.indexOf("application/json")) try {
              Er.data = JSON.parse(Er.data, Qr.reviver)
            } catch (rr) {
              return Zr(Er, rr), ar(rr)
            }(Er.status >= 400 ? ar : Wr)(Er)
          }, typeof FormData < "u" && pr instanceof FormData || pr && "object" == typeof pr && (xr["content-type"] = "application/json", pr = JSON.stringify(pr)), Er.withCredentials = !!Qr.withCredentials, xr) Er.setRequestHeader(jr, xr[jr]);
        Er.send(pr), Qr.signal && Qr.signal.addEventListener("abort", (function() {
          Er.abort()
        }))
      }))
    }
    Qr.r(Sr), Qr.d(Sr, {
      del: () => fr,
      get: () => ar,
      patch: () => Ir,
      post: () => jr,
      put: () => Er,
      send: () => Wr
    });
    var ar = Wr.bind(Wr, "GET"),
      jr = Wr.bind(Wr, "POST"),
      Ir = Wr.bind(Wr, "PATCH"),
      fr = Wr.bind(Wr, "DELETE"),
      Er = Wr.bind(Wr, "PUT")
  },
  10336: (rr, Sr, Qr) => {
    var Zr, Wr, ar;
    Qr.r(Sr), Qr.d(Sr, {
      ALWAYS: () => oS,
      C1: () => Kr,
      DECIMAL_FIT: () => JS,
      DECIMAL_ROUND: () => bS,
      Decoder: () => fS,
      Encoder: () => cS,
      FLOAT32_OPTIONS: () => NS,
      NEVER: () => FS,
      Packr: () => RS,
      RESERVE_START_SPACE: () => sS,
      RESET_BUFFER_MODE: () => dS,
      REUSE_BUFFER_MODE: () => DS,
      Unpackr: () => Lr,
      addExtension: () => kS,
      clearSource: () => jS,
      decode: () => mS,
      decodeIter: () => uS,
      encode: () => wS,
      encodeIter: () => rQ,
      isNativeAccelerationEnabled: () => Ar,
      mapsAsObjects: () => QQ,
      pack: () => iS,
      roundFloat32: () => nS,
      unpack: () => pS,
      unpackMultiple: () => xS,
      useRecords: () => SQ
    });
    try {
      Zr = new TextDecoder
    } catch (ZQ) {}
    var jr = 0;
    const Ir = [];
    var fr, Er, pr, xr, mr, Nr = Ir,
      Ur = 0,
      tr = {},
      hr = 0,
      zr = 0,
      Yr = [],
      nr = {
        useRecords: !1,
        mapsAsObjects: !0
      };
    class er {}
    const Kr = new er;
    Kr.name = "MessagePack 0xC1";
    var yr, Br, Tr, vr = !1,
      Or = 2;
    try {
      new Function("")
    } catch (ZQ) {
      Or = 1 / 0
    }
    class Lr {
      constructor(rr) {
        rr && (!1 === rr.useRecords && void 0 === rr.mapsAsObjects && (rr.mapsAsObjects = !0), rr.sequential && !1 !== rr.trusted && (rr.trusted = !0, rr.structures || 0 == rr.useRecords || (rr.structures = [], rr.maxSharedStructures || (rr.maxSharedStructures = 0))), rr.structures ? rr.structures.sharedLength = rr.structures.length : rr.getStructures && ((rr.structures = []).uninitialized = !0, rr.structures.sharedLength = 0), rr.int64AsNumber && (rr.int64AsType = "number")), Object.assign(this, rr)
      }
      unpack(rr, Sr) {
        if (Wr) return aS((() => (jS(), this ? this.unpack(rr, Sr) : Lr.prototype.unpack.call(nr, rr, Sr))));
        rr.buffer || rr.constructor !== ArrayBuffer || (rr = "undefined" !== typeof Buffer ? Buffer.from(rr) : new Uint8Array(rr)), "object" === typeof Sr ? (ar = Sr.end || rr.length, jr = Sr.start || 0) : (jr = 0, ar = Sr > -1 ? Sr : rr.length), Ur = 0, zr = 0, Er = null, Nr = Ir, pr = null, Wr = rr;
        try {
          mr = rr.dataView || (rr.dataView = new DataView(rr.buffer, rr.byteOffset, rr.byteLength))
        } catch (ZQ) {
          if (Wr = null, rr instanceof Uint8Array) throw ZQ;
          throw new Error("Source must be a Uint8Array or Buffer but was a " + (rr && "object" == typeof rr ? rr.constructor.name : typeof rr))
        }
        if (this instanceof Lr) {
          if (tr = this, this.structures) return fr = this.structures, lr(Sr);
          (!fr || fr.length > 0) && (fr = [])
        } else tr = nr, (!fr || fr.length > 0) && (fr = []);
        return lr(Sr)
      }
      unpackMultiple(rr, Sr) {
        let Qr, Zr = 0;
        try {
          vr = !0;
          let Wr = rr.length,
            ar = this ? this.unpack(rr, Wr) : ES.unpack(rr, Wr);
          if (!Sr) {
            for (Qr = [ar]; jr < Wr;) Zr = jr, Qr.push(lr());
            return Qr
          }
          if (!1 === Sr(ar, Zr, jr)) return;
          for (; jr < Wr;)
            if (Zr = jr, !1 === Sr(lr(), Zr, jr)) return
        } catch (ZQ) {
          throw ZQ.lastPosition = Zr, ZQ.values = Qr, ZQ
        } finally {
          vr = !1, jS()
        }
      }
      _mergeStructures(rr, Sr) {
        Br && (rr = Br.call(this, rr)), rr = rr || [], Object.isFrozen(rr) && (rr = rr.map((rr => rr.slice(0))));
        for (let Qr = 0, Zr = rr.length; Qr < Zr; Qr++) {
          let Sr = rr[Qr];
          Sr && (Sr.isShared = !0, Qr >= 32 && (Sr.highByte = Qr - 32 >> 5))
        }
        rr.sharedLength = rr.length;
        for (let Qr in Sr || [])
          if (Qr >= 0) {
            let Zr = rr[Qr],
              Wr = Sr[Qr];
            Wr && (Zr && ((rr.restoreStructures || (rr.restoreStructures = []))[Qr] = Zr), rr[Qr] = Wr)
          } return this.structures = rr
      }
      decode(rr, Sr) {
        return this.unpack(rr, Sr)
      }
    }

    function lr(rr) {
      try {
        if (!tr.trusted && !vr) {
          let rr = fr.sharedLength || 0;
          rr < fr.length && (fr.length = rr)
        }
        let Sr;
        if (tr.randomAccessStructure && Wr[jr] < 64 && Wr[jr] >= 32 && yr ? (Sr = yr(Wr, jr, ar, tr), Wr = null, rr && rr.lazy || !Sr || (Sr = Sr.toJSON()), jr = ar) : Sr = Pr(), pr && (jr = pr.postBundlePosition, pr = null), vr && (fr.restoreStructures = null), jr == ar) fr && fr.restoreStructures && Xr(), fr = null, Wr = null, xr && (xr = null);
        else {
          if (jr > ar) throw new Error("Unexpected end of MessagePack data");
          if (!vr) {
            let rr;
            try {
              rr = JSON.stringify(Sr, ((rr, Sr) => "bigint" === typeof Sr ? `${Sr}n` : Sr)).slice(0, 100)
            } catch (ZQ) {
              rr = "(JSON view not available " + ZQ + ")"
            }
            throw new Error("Data read, but end of buffer not reached " + rr)
          }
        }
        return Sr
      } catch (ZQ) {
        throw fr && fr.restoreStructures && Xr(), jS(), (ZQ instanceof RangeError || ZQ.message.startsWith("Unexpected end of buffer") || jr > ar) && (ZQ.incomplete = !0), ZQ
      }
    }

    function Xr() {
      for (let rr in fr.restoreStructures) fr[rr] = fr.restoreStructures[rr];
      fr.restoreStructures = null
    }

    function Pr() {
      let rr = Wr[jr++];
      if (rr < 160) {
        if (rr < 128) {
          if (rr < 64) return rr;
          {
            let Sr = fr[63 & rr] || tr.getStructures && gr()[63 & rr];
            return Sr ? (Sr.read || (Sr.read = qr(Sr, 63 & rr)), Sr.read()) : rr
          }
        }
        if (rr < 144) {
          if (rr -= 128, tr.mapsAsObjects) {
            let Sr = {};
            for (let Qr = 0; Qr < rr; Qr++) {
              let rr = sr();
              "__proto__" === rr && (rr = "__proto_"), Sr[rr] = Pr()
            }
            return Sr
          } {
            let Sr = new Map;
            for (let Qr = 0; Qr < rr; Qr++) Sr.set(Pr(), Pr());
            return Sr
          }
        } {
          rr -= 144;
          let Sr = new Array(rr);
          for (let Qr = 0; Qr < rr; Qr++) Sr[Qr] = Pr();
          return tr.freezeData ? Object.freeze(Sr) : Sr
        }
      }
      if (rr < 192) {
        let Sr = rr - 160;
        if (zr >= jr) return Er.slice(jr - hr, (jr += Sr) - hr);
        if (0 == zr && ar < 140) {
          let rr = Sr < 16 ? or(Sr) : Fr(Sr);
          if (null != rr) return rr
        }
        return Cr(Sr)
      } {
        let Sr;
        switch (rr) {
          case 192:
            return null;
          case 193:
            return pr ? (Sr = Pr(), Sr > 0 ? pr[1].slice(pr.position1, pr.position1 += Sr) : pr[0].slice(pr.position0, pr.position0 -= Sr)) : Kr;
          case 194:
            return !1;
          case 195:
            return !0;
          case 196:
            if (Sr = Wr[jr++], void 0 === Sr) throw new Error("Unexpected end of buffer");
            return Jr(Sr);
          case 197:
            return Sr = mr.getUint16(jr), jr += 2, Jr(Sr);
          case 198:
            return Sr = mr.getUint32(jr), jr += 4, Jr(Sr);
          case 199:
            return Dr(Wr[jr++]);
          case 200:
            return Sr = mr.getUint16(jr), jr += 2, Dr(Sr);
          case 201:
            return Sr = mr.getUint32(jr), jr += 4, Dr(Sr);
          case 202:
            if (Sr = mr.getFloat32(jr), tr.useFloat32 > 2) {
              let rr = IS[(127 & Wr[jr]) << 1 | Wr[jr + 1] >> 7];
              return jr += 4, (rr * Sr + (Sr > 0 ? .5 : -.5) | 0) / rr
            }
            return jr += 4, Sr;
          case 203:
            return Sr = mr.getFloat64(jr), jr += 8, Sr;
          case 204:
            return Wr[jr++];
          case 205:
            return Sr = mr.getUint16(jr), jr += 2, Sr;
          case 206:
            return Sr = mr.getUint32(jr), jr += 4, Sr;
          case 207:
            return "number" === tr.int64AsType ? (Sr = 4294967296 * mr.getUint32(jr), Sr += mr.getUint32(jr + 4)) : "string" === tr.int64AsType ? Sr = mr.getBigUint64(jr).toString() : "auto" === tr.int64AsType ? (Sr = mr.getBigUint64(jr), Sr <= BigInt(2) << BigInt(52) && (Sr = Number(Sr))) : Sr = mr.getBigUint64(jr), jr += 8, Sr;
          case 208:
            return mr.getInt8(jr++);
          case 209:
            return Sr = mr.getInt16(jr), jr += 2, Sr;
          case 210:
            return Sr = mr.getInt32(jr), jr += 4, Sr;
          case 211:
            return "number" === tr.int64AsType ? (Sr = 4294967296 * mr.getInt32(jr), Sr += mr.getUint32(jr + 4)) : "string" === tr.int64AsType ? Sr = mr.getBigInt64(jr).toString() : "auto" === tr.int64AsType ? (Sr = mr.getBigInt64(jr), Sr >= BigInt(-2) << BigInt(52) && Sr <= BigInt(2) << BigInt(52) && (Sr = Number(Sr))) : Sr = mr.getBigInt64(jr), jr += 8, Sr;
          case 212:
            if (Sr = Wr[jr++], 114 == Sr) return rS(63 & Wr[jr++]);
            {
              let rr = Yr[Sr];
              if (rr) return rr.read ? (jr++, rr.read(Pr())) : rr.noBuffer ? (jr++, rr()) : rr(Wr.subarray(jr, ++jr));
              throw new Error("Unknown extension " + Sr)
            }
          case 213:
            return Sr = Wr[jr], 114 == Sr ? (jr++, rS(63 & Wr[jr++], Wr[jr++])) : Dr(2);
          case 214:
            return Dr(4);
          case 215:
            return Dr(8);
          case 216:
            return Dr(16);
          case 217:
            return Sr = Wr[jr++], zr >= jr ? Er.slice(jr - hr, (jr += Sr) - hr) : Mr(Sr);
          case 218:
            return Sr = mr.getUint16(jr), zr >= (jr += 2) ? Er.slice(jr - hr, (jr += Sr) - hr) : Gr(Sr);
          case 219:
            return Sr = mr.getUint32(jr), zr >= (jr += 4) ? Er.slice(jr - hr, (jr += Sr) - hr) : kr(Sr);
          case 220:
            return Sr = mr.getUint16(jr), jr += 2, ir(Sr);
          case 221:
            return Sr = mr.getUint32(jr), jr += 4, ir(Sr);
          case 222:
            return Sr = mr.getUint16(jr), jr += 2, wr(Sr);
          case 223:
            return Sr = mr.getUint32(jr), jr += 4, wr(Sr);
          default:
            if (rr >= 224) return rr - 256;
            if (void 0 === rr) {
              let rr = new Error("Unexpected end of MessagePack data");
              throw rr.incomplete = !0, rr
            }
            throw new Error("Unknown MessagePack token " + rr)
        }
      }
    }
    const Hr = /^[a-zA-Z_$][a-zA-Z\d_$]*$/;

    function qr(rr, Sr) {
      function Qr() {
        if (Qr.count++ > Or) {
          let Qr = rr.read = new Function("r", "return function(){return " + (tr.freezeData ? "Object.freeze" : "") + "({" + rr.map((rr => "__proto__" === rr ? "__proto_:r()" : Hr.test(rr) ? rr + ":r()" : "[" + JSON.stringify(rr) + "]:r()")).join(",") + "})}")(Pr);
          return 0 === rr.highByte && (rr.read = Rr(Sr, rr.read)), Qr()
        }
        let Zr = {};
        for (let Sr = 0, Qr = rr.length; Sr < Qr; Sr++) {
          let Qr = rr[Sr];
          "__proto__" === Qr && (Qr = "__proto_"), Zr[Qr] = Pr()
        }
        return tr.freezeData ? Object.freeze(Zr) : Zr
      }
      return Qr.count = 0, 0 === rr.highByte ? Rr(Sr, Qr) : Qr
    }
    const Rr = (rr, Sr) => function() {
      let Qr = Wr[jr++];
      if (0 === Qr) return Sr();
      let Zr = rr < 32 ? -(rr + (Qr << 5)) : rr + (Qr << 5),
        ar = fr[Zr] || gr()[Zr];
      if (!ar) throw new Error("Record id is not defined for " + Zr);
      return ar.read || (ar.read = qr(ar, rr)), ar.read()
    };

    function gr() {
      let rr = aS((() => (Wr = null, tr.getStructures())));
      return fr = tr._mergeStructures(rr, fr)
    }
    var Cr = Vr,
      Mr = Vr,
      Gr = Vr,
      kr = Vr;
    let Ar = !1;

    function Vr(rr) {
      let Sr;
      if (rr < 16 && (Sr = or(rr))) return Sr;
      if (rr > 64 && Zr) return Zr.decode(Wr.subarray(jr, jr += rr));
      const Qr = jr + rr,
        ar = [];
      for (Sr = ""; jr < Qr;) {
        const rr = Wr[jr++];
        if (0 === (128 & rr)) ar.push(rr);
        else if (192 === (224 & rr)) {
          const Sr = 63 & Wr[jr++];
          ar.push((31 & rr) << 6 | Sr)
        } else if (224 === (240 & rr)) {
          const Sr = 63 & Wr[jr++],
            Qr = 63 & Wr[jr++];
          ar.push((31 & rr) << 12 | Sr << 6 | Qr)
        } else if (240 === (248 & rr)) {
          let Sr = (7 & rr) << 18 | (63 & Wr[jr++]) << 12 | (63 & Wr[jr++]) << 6 | 63 & Wr[jr++];
          Sr > 65535 && (Sr -= 65536, ar.push(Sr >>> 10 & 1023 | 55296), Sr = 56320 | 1023 & Sr), ar.push(Sr)
        } else ar.push(rr);
        ar.length >= 4096 && (Sr += cr.apply(String, ar), ar.length = 0)
      }
      return ar.length > 0 && (Sr += cr.apply(String, ar)), Sr
    }

    function ir(rr) {
      let Sr = new Array(rr);
      for (let Qr = 0; Qr < rr; Qr++) Sr[Qr] = Pr();
      return tr.freezeData ? Object.freeze(Sr) : Sr
    }

    function wr(rr) {
      if (tr.mapsAsObjects) {
        let Sr = {};
        for (let Qr = 0; Qr < rr; Qr++) {
          let rr = sr();
          "__proto__" === rr && (rr = "__proto_"), Sr[rr] = Pr()
        }
        return Sr
      } {
        let Sr = new Map;
        for (let Qr = 0; Qr < rr; Qr++) Sr.set(Pr(), Pr());
        return Sr
      }
    }
    var cr = String.fromCharCode;

    function Fr(rr) {
      let Sr = jr,
        Qr = new Array(rr);
      for (let Zr = 0; Zr < rr; Zr++) {
        const rr = Wr[jr++];
        if ((128 & rr) > 0) return void(jr = Sr);
        Qr[Zr] = rr
      }
      return cr.apply(String, Qr)
    }

    function or(rr) {
      if (rr < 4) {
        if (rr < 2) {
          if (0 === rr) return "";
          {
            let rr = Wr[jr++];
            return (128 & rr) > 1 ? void(jr -= 1) : cr(rr)
          }
        } {
          let Sr = Wr[jr++],
            Qr = Wr[jr++];
          if ((128 & Sr) > 0 || (128 & Qr) > 0) return void(jr -= 2);
          if (rr < 3) return cr(Sr, Qr);
          let Zr = Wr[jr++];
          return (128 & Zr) > 0 ? void(jr -= 3) : cr(Sr, Qr, Zr)
        }
      } {
        let Sr = Wr[jr++],
          Qr = Wr[jr++],
          Zr = Wr[jr++],
          ar = Wr[jr++];
        if ((128 & Sr) > 0 || (128 & Qr) > 0 || (128 & Zr) > 0 || (128 & ar) > 0) return void(jr -= 4);
        if (rr < 6) {
          if (4 === rr) return cr(Sr, Qr, Zr, ar);
          {
            let rr = Wr[jr++];
            return (128 & rr) > 0 ? void(jr -= 5) : cr(Sr, Qr, Zr, ar, rr)
          }
        }
        if (rr < 8) {
          let Ir = Wr[jr++],
            fr = Wr[jr++];
          if ((128 & Ir) > 0 || (128 & fr) > 0) return void(jr -= 6);
          if (rr < 7) return cr(Sr, Qr, Zr, ar, Ir, fr);
          let Er = Wr[jr++];
          return (128 & Er) > 0 ? void(jr -= 7) : cr(Sr, Qr, Zr, ar, Ir, fr, Er)
        } {
          let Ir = Wr[jr++],
            fr = Wr[jr++],
            Er = Wr[jr++],
            pr = Wr[jr++];
          if ((128 & Ir) > 0 || (128 & fr) > 0 || (128 & Er) > 0 || (128 & pr) > 0) return void(jr -= 8);
          if (rr < 10) {
            if (8 === rr) return cr(Sr, Qr, Zr, ar, Ir, fr, Er, pr);
            {
              let rr = Wr[jr++];
              return (128 & rr) > 0 ? void(jr -= 9) : cr(Sr, Qr, Zr, ar, Ir, fr, Er, pr, rr)
            }
          }
          if (rr < 12) {
            let xr = Wr[jr++],
              mr = Wr[jr++];
            if ((128 & xr) > 0 || (128 & mr) > 0) return void(jr -= 10);
            if (rr < 11) return cr(Sr, Qr, Zr, ar, Ir, fr, Er, pr, xr, mr);
            let Nr = Wr[jr++];
            return (128 & Nr) > 0 ? void(jr -= 11) : cr(Sr, Qr, Zr, ar, Ir, fr, Er, pr, xr, mr, Nr)
          } {
            let xr = Wr[jr++],
              mr = Wr[jr++],
              Nr = Wr[jr++],
              Ur = Wr[jr++];
            if ((128 & xr) > 0 || (128 & mr) > 0 || (128 & Nr) > 0 || (128 & Ur) > 0) return void(jr -= 12);
            if (rr < 14) {
              if (12 === rr) return cr(Sr, Qr, Zr, ar, Ir, fr, Er, pr, xr, mr, Nr, Ur);
              {
                let rr = Wr[jr++];
                return (128 & rr) > 0 ? void(jr -= 13) : cr(Sr, Qr, Zr, ar, Ir, fr, Er, pr, xr, mr, Nr, Ur, rr)
              }
            } {
              let tr = Wr[jr++],
                hr = Wr[jr++];
              if ((128 & tr) > 0 || (128 & hr) > 0) return void(jr -= 14);
              if (rr < 15) return cr(Sr, Qr, Zr, ar, Ir, fr, Er, pr, xr, mr, Nr, Ur, tr, hr);
              let zr = Wr[jr++];
              return (128 & zr) > 0 ? void(jr -= 15) : cr(Sr, Qr, Zr, ar, Ir, fr, Er, pr, xr, mr, Nr, Ur, tr, hr, zr)
            }
          }
        }
      }
    }

    function br() {
      let rr, Sr = Wr[jr++];
      if (Sr < 192) rr = Sr - 160;
      else switch (Sr) {
        case 217:
          rr = Wr[jr++];
          break;
        case 218:
          rr = mr.getUint16(jr), jr += 2;
          break;
        case 219:
          rr = mr.getUint32(jr), jr += 4;
          break;
        default:
          throw new Error("Expected string")
      }
      return Vr(rr)
    }

    function Jr(rr) {
      return tr.copyBuffers ? Uint8Array.prototype.slice.call(Wr, jr, jr += rr) : Wr.subarray(jr, jr += rr)
    }

    function Dr(rr) {
      let Sr = Wr[jr++];
      if (Yr[Sr]) {
        let Qr;
        return Yr[Sr](Wr.subarray(jr, Qr = jr += rr), (rr => {
          jr = rr;
          try {
            return Pr()
          } finally {
            jr = Qr
          }
        }))
      }
      throw new Error("Unknown extension type " + Sr)
    }
    var dr = new Array(4096);

    function sr() {
      let rr = Wr[jr++];
      if (!(rr >= 160 && rr < 192)) return jr--, ur(Pr());
      if (rr -= 160, zr >= jr) return Er.slice(jr - hr, (jr += rr) - hr);
      if (!(0 == zr && ar < 180)) return Cr(rr);
      let Sr, Qr = 4095 & (rr << 5 ^ (rr > 1 ? mr.getUint16(jr) : rr > 0 ? Wr[jr] : 0)),
        Zr = dr[Qr],
        Ir = jr,
        fr = jr + rr - 3,
        pr = 0;
      if (Zr && Zr.bytes == rr) {
        for (; Ir < fr;) {
          if (Sr = mr.getUint32(Ir), Sr != Zr[pr++]) {
            Ir = 1879048192;
            break
          }
          Ir += 4
        }
        for (fr += 3; Ir < fr;)
          if (Sr = Wr[Ir++], Sr != Zr[pr++]) {
            Ir = 1879048192;
            break
          } if (Ir === fr) return jr = Ir, Zr.string;
        fr -= 3, Ir = jr
      }
      for (Zr = [], dr[Qr] = Zr, Zr.bytes = rr; Ir < fr;) Sr = mr.getUint32(Ir), Zr.push(Sr), Ir += 4;
      for (fr += 3; Ir < fr;) Sr = Wr[Ir++], Zr.push(Sr);
      let xr = rr < 16 ? or(rr) : Fr(rr);
      return Zr.string = null != xr ? xr : Cr(rr)
    }

    function ur(rr) {
      if ("string" === typeof rr) return rr;
      if ("number" === typeof rr || "boolean" === typeof rr || "bigint" === typeof rr) return rr.toString();
      if (null == rr) return rr + "";
      if (tr.allowArraysInMapKeys && Array.isArray(rr) && rr.flat().every((rr => ["string", "number", "boolean", "bigint"].includes(typeof rr)))) return rr.flat().toString();
      throw new Error("Invalid property type for record: " + typeof rr)
    }
    const rS = (rr, Sr) => {
      let Qr = Pr().map(ur),
        Zr = rr;
      void 0 !== Sr && (rr = rr < 32 ? -((Sr << 5) + rr) : (Sr << 5) + rr, Qr.highByte = Sr);
      let Wr = fr[rr];
      return Wr && (Wr.isShared || vr) && ((fr.restoreStructures || (fr.restoreStructures = []))[rr] = Wr), fr[rr] = Qr, Qr.read = qr(Qr, Zr), Qr.read()
    };
    Yr[0] = () => {}, Yr[0].noBuffer = !0, Yr[66] = rr => {
      let Sr = rr.length,
        Qr = BigInt(128 & rr[0] ? rr[0] - 256 : rr[0]);
      for (let Zr = 1; Zr < Sr; Zr++) Qr <<= BigInt(8), Qr += BigInt(rr[Zr]);
      return Qr
    };
    let SS = {
      Error: Error,
      TypeError: TypeError,
      ReferenceError: ReferenceError
    };
    Yr[101] = () => {
      let rr = Pr();
      return (SS[rr[0]] || Error)(rr[1], {
        cause: rr[2]
      })
    }, Yr[105] = rr => {
      if (!1 === tr.structuredClone) throw new Error("Structured clone extension is disabled");
      let Sr = mr.getUint32(jr - 4);
      xr || (xr = new Map);
      let Qr, Zr = Wr[jr];
      Qr = Zr >= 144 && Zr < 160 || 220 == Zr || 221 == Zr ? [] : {};
      let ar = {
        target: Qr
      };
      xr.set(Sr, ar);
      let Ir = Pr();
      return ar.used ? Object.assign(Qr, Ir) : (ar.target = Ir, Ir)
    }, Yr[112] = rr => {
      if (!1 === tr.structuredClone) throw new Error("Structured clone extension is disabled");
      let Sr = mr.getUint32(jr - 4),
        Qr = xr.get(Sr);
      return Qr.used = !0, Qr.target
    }, Yr[115] = () => new Set(Pr());
    const QS = ["Int8", "Uint8", "Uint8Clamped", "Int16", "Uint16", "Int32", "Uint32", "Float32", "Float64", "BigInt64", "BigUint64"].map((rr => rr + "Array"));
    let ZS = "object" === typeof globalThis ? globalThis : window;
    Yr[116] = rr => {
      let Sr = rr[0],
        Qr = QS[Sr];
      if (!Qr) {
        if (16 === Sr) {
          let Sr = new ArrayBuffer(rr.length - 1);
          return new Uint8Array(Sr).set(rr.subarray(1)), Sr
        }
        throw new Error("Could not find typed array for code " + Sr)
      }
      return new ZS[Qr](Uint8Array.prototype.slice.call(rr, 1).buffer)
    }, Yr[120] = () => {
      let rr = Pr();
      return new RegExp(rr[0], rr[1])
    };
    const WS = [];

    function aS(rr) {
      Tr && Tr();
      let Sr = ar,
        Qr = jr,
        Zr = Ur,
        Ir = hr,
        Yr = zr,
        nr = Er,
        er = Nr,
        Kr = xr,
        yr = pr,
        Br = new Uint8Array(Wr.slice(0, ar)),
        Or = fr,
        Lr = fr.slice(0, fr.length),
        lr = tr,
        Xr = vr,
        Pr = rr();
      return ar = Sr, jr = Qr, Ur = Zr, hr = Ir, zr = Yr, Er = nr, Nr = er, xr = Kr, pr = yr, Wr = Br, vr = Xr, (fr = Or).splice(0, fr.length, ...Lr), tr = lr, mr = new DataView(Wr.buffer, Wr.byteOffset, Wr.byteLength), Pr
    }

    function jS() {
      Wr = null, xr = null, fr = null
    }
    Yr[98] = rr => {
      let Sr = (rr[0] << 24) + (rr[1] << 16) + (rr[2] << 8) + rr[3],
        Qr = jr;
      return jr += Sr - rr.length, pr = WS, (pr = [br(), br()]).position0 = 0, pr.position1 = 0, pr.postBundlePosition = jr, jr = Qr, Pr()
    }, Yr[255] = rr => 4 == rr.length ? new Date(1e3 * (16777216 * rr[0] + (rr[1] << 16) + (rr[2] << 8) + rr[3])) : 8 == rr.length ? new Date(((rr[0] << 22) + (rr[1] << 14) + (rr[2] << 6) + (rr[3] >> 2)) / 1e6 + 1e3 * (4294967296 * (3 & rr[3]) + 16777216 * rr[4] + (rr[5] << 16) + (rr[6] << 8) + rr[7])) : 12 == rr.length ? new Date(((rr[0] << 24) + (rr[1] << 16) + (rr[2] << 8) + rr[3]) / 1e6 + 1e3 * ((128 & rr[4] ? -281474976710656 : 0) + 1099511627776 * rr[6] + 4294967296 * rr[7] + 16777216 * rr[8] + (rr[9] << 16) + (rr[10] << 8) + rr[11])) : new Date("invalid");
    const IS = new Array(147);
    for (let WQ = 0; WQ < 256; WQ++) IS[WQ] = +("1e" + Math.floor(45.15 - .30103 * WQ));
    const fS = Lr;
    var ES = new Lr({
      useRecords: !1
    });
    const pS = ES.unpack,
      xS = ES.unpackMultiple,
      mS = ES.unpack,
      NS = {
        NEVER: 0,
        ALWAYS: 1,
        DECIMAL_ROUND: 3,
        DECIMAL_FIT: 4
      };
    let US, tS, hS, zS = new Float32Array(1),
      YS = new Uint8Array(zS.buffer, 0, 4);

    function nS(rr) {
      zS[0] = rr;
      let Sr = IS[(127 & YS[3]) << 1 | YS[2] >> 7];
      return (Sr * rr + (rr > 0 ? .5 : -.5) | 0) / Sr
    }
    try {
      US = new TextEncoder
    } catch (ZQ) {}
    const eS = "undefined" !== typeof Buffer,
      KS = eS ? function(rr) {
        return Buffer.allocUnsafeSlow(rr)
      } : Uint8Array,
      yS = eS ? Buffer : Uint8Array,
      BS = eS ? 4294967296 : 2144337920;
    let TS, vS, OS, LS, lS, XS = 0,
      PS = null;
    const HS = /[\u0080-\uFFFF]/,
      qS = Symbol("record-id");
    class RS extends Lr {
      constructor(rr) {
        let Sr, Qr, Zr, Wr;
        super(rr), this.offset = 0;
        let ar = yS.prototype.utf8Write ? function(rr, Sr) {
            return TS.utf8Write(rr, Sr, TS.byteLength - Sr)
          } : !(!US || !US.encodeInto) && function(rr, Sr) {
            return US.encodeInto(rr, TS.subarray(Sr)).written
          },
          jr = this;
        rr || (rr = {});
        let Ir = rr && rr.sequential,
          fr = rr.structures || rr.saveStructures,
          Er = rr.maxSharedStructures;
        if (null == Er && (Er = fr ? 32 : 0), Er > 8160) throw new Error("Maximum maxSharedStructure is 8160");
        rr.structuredClone && void 0 == rr.moreTypes && (this.moreTypes = !0);
        let pr = rr.maxOwnStructures;
        null == pr && (pr = fr ? 32 : 64), this.structures || 0 == rr.useRecords || (this.structures = []);
        let xr = Er > 32 || pr + Er > 64,
          mr = Er + 64,
          Nr = Er + pr + 64;
        if (Nr > 8256) throw new Error("Maximum maxSharedStructure + maxOwnStructure is 8192");
        let Ur = [],
          tr = 0,
          hr = 0;
        this.pack = this.encode = function(rr, ar) {
          if (TS || (TS = new KS(8192), OS = TS.dataView || (TS.dataView = new DataView(TS.buffer, 0, 8192)), XS = 0), LS = TS.length - 10, LS - XS < 2048 ? (TS = new KS(TS.length), OS = TS.dataView || (TS.dataView = new DataView(TS.buffer, 0, TS.length)), LS = TS.length - 10, XS = 0) : XS = XS + 7 & 2147483640, Sr = XS, ar & sS && (XS += 255 & ar), Wr = jr.structuredClone ? new Map : null, jr.bundleStrings && "string" !== typeof rr ? (PS = [], PS.size = 1 / 0) : PS = null, Zr = jr.structures, Zr) {
            Zr.uninitialized && (Zr = jr._mergeStructures(jr.getStructures()));
            let rr = Zr.sharedLength || 0;
            if (rr > Er) throw new Error("Shared structures is larger than maximum shared structures, try increasing maxSharedStructures to " + Zr.sharedLength);
            if (!Zr.transitions) {
              Zr.transitions = Object.create(null);
              for (let Sr = 0; Sr < rr; Sr++) {
                let rr = Zr[Sr];
                if (!rr) continue;
                let Qr, Wr = Zr.transitions;
                for (let Sr = 0, Zr = rr.length; Sr < Zr; Sr++) {
                  let Zr = rr[Sr];
                  Qr = Wr[Zr], Qr || (Qr = Wr[Zr] = Object.create(null)), Wr = Qr
                }
                Wr[qS] = Sr + 64
              }
              this.lastNamedStructuresLength = rr
            }
            Ir || (Zr.nextId = rr + 64)
          }
          let fr;
          Qr && (Qr = !1);
          try {
            jr.randomAccessStructure && rr && rr.constructor && rr.constructor === Object ? Lr(rr) : nr(rr);
            let Qr = PS;
            if (PS && GS(Sr, nr, 0), Wr && Wr.idsToInsert) {
              let rr = Wr.idsToInsert.sort(((rr, Sr) => rr.offset > Sr.offset ? 1 : -1)),
                Zr = rr.length,
                ar = -1;
              for (; Qr && Zr > 0;) {
                let Wr = rr[--Zr].offset + Sr;
                Wr < Qr.stringsPosition + Sr && -1 === ar && (ar = 0), Wr > Qr.position + Sr ? ar >= 0 && (ar += 6) : (ar >= 0 && (OS.setUint32(Qr.position + Sr, OS.getUint32(Qr.position + Sr) + ar), ar = -1), Qr = Qr.previous, Zr++)
              }
              ar >= 0 && Qr && OS.setUint32(Qr.position + Sr, OS.getUint32(Qr.position + Sr) + ar), XS += 6 * rr.length, XS > LS && Tr(XS), jr.offset = XS;
              let Ir = function(rr, Sr) {
                let Qr, Zr = 6 * Sr.length,
                  Wr = rr.length - Zr;
                for (; Qr = Sr.pop();) {
                  let Sr = Qr.offset,
                    ar = Qr.id;
                  rr.copyWithin(Sr + Zr, Sr, Wr), Zr -= 6;
                  let jr = Sr + Zr;
                  rr[jr++] = 214, rr[jr++] = 105, rr[jr++] = ar >> 24, rr[jr++] = ar >> 16 & 255, rr[jr++] = ar >> 8 & 255, rr[jr++] = 255 & ar, Wr = Sr
                }
                return rr
              }(TS.subarray(Sr, XS), rr);
              return Wr = null, Ir
            }
            return jr.offset = XS, ar & DS ? (TS.start = Sr, TS.end = XS, TS) : TS.subarray(Sr, XS)
          } catch (ZQ) {
            throw fr = ZQ, ZQ
          } finally {
            if (Zr && (zr(), Qr && jr.saveStructures)) {
              let Qr = Zr.sharedLength || 0,
                Wr = TS.subarray(Sr, XS),
                Ir = AS(Zr, jr);
              if (!fr) return !1 === jr.saveStructures(Ir, Ir.isCompatible) ? jr.pack(rr, ar) : (jr.lastNamedStructuresLength = Qr, TS.length > 1073741824 && (TS = null), Wr)
            }
            TS.length > 1073741824 && (TS = null), ar & dS && (XS = Sr)
          }
        };
        const zr = () => {
            hr < 10 && hr++;
            let rr = Zr.sharedLength || 0;
            if (Zr.length > rr && !Ir && (Zr.length = rr), tr > 1e4) Zr.transitions = null, hr = 0, tr = 0, Ur.length > 0 && (Ur = []);
            else if (Ur.length > 0 && !Ir) {
              for (let rr = 0, Sr = Ur.length; rr < Sr; rr++) Ur[rr][qS] = 0;
              Ur = []
            }
          },
          Yr = rr => {
            var Sr = rr.length;
            Sr < 16 ? TS[XS++] = 144 | Sr : Sr < 65536 ? (TS[XS++] = 220, TS[XS++] = Sr >> 8, TS[XS++] = 255 & Sr) : (TS[XS++] = 221, OS.setUint32(XS, Sr), XS += 4);
            for (let Qr = 0; Qr < Sr; Qr++) nr(rr[Qr])
          },
          nr = rr => {
            XS > LS && (TS = Tr(XS));
            var Qr, Zr = typeof rr;
            if ("string" === Zr) {
              let Zr, Wr = rr.length;
              if (PS && Wr >= 4 && Wr < 4096) {
                if ((PS.size += Wr) > 21760) {
                  let rr, Qr, Zr = (PS[0] ? 3 * PS[0].length + PS[1].length : 0) + 10;
                  XS + Zr > LS && (TS = Tr(XS + Zr)), PS.position ? (Qr = PS, TS[XS] = 200, XS += 3, TS[XS++] = 98, rr = XS - Sr, XS += 4, GS(Sr, nr, 0), OS.setUint16(rr + Sr - 3, XS - Sr - rr)) : (TS[XS++] = 214, TS[XS++] = 98, rr = XS - Sr, XS += 4), PS = ["", ""], PS.previous = Qr, PS.size = 0, PS.position = rr
                }
                let Qr = HS.test(rr);
                return PS[Qr ? 0 : 1] += rr, TS[XS++] = 193, void nr(Qr ? -Wr : Wr)
              }
              Zr = Wr < 32 ? 1 : Wr < 256 ? 2 : Wr < 65536 ? 3 : 5;
              let jr = 3 * Wr;
              if (XS + jr > LS && (TS = Tr(XS + jr)), Wr < 64 || !ar) {
                let Sr, ar, jr, Ir = XS + Zr;
                for (Sr = 0; Sr < Wr; Sr++) ar = rr.charCodeAt(Sr), ar < 128 ? TS[Ir++] = ar : ar < 2048 ? (TS[Ir++] = ar >> 6 | 192, TS[Ir++] = 63 & ar | 128) : 55296 === (64512 & ar) && 56320 === (64512 & (jr = rr.charCodeAt(Sr + 1))) ? (ar = 65536 + ((1023 & ar) << 10) + (1023 & jr), Sr++, TS[Ir++] = ar >> 18 | 240, TS[Ir++] = ar >> 12 & 63 | 128, TS[Ir++] = ar >> 6 & 63 | 128, TS[Ir++] = 63 & ar | 128) : (TS[Ir++] = ar >> 12 | 224, TS[Ir++] = ar >> 6 & 63 | 128, TS[Ir++] = 63 & ar | 128);
                Qr = Ir - XS - Zr
              } else Qr = ar(rr, XS + Zr);
              Qr < 32 ? TS[XS++] = 160 | Qr : Qr < 256 ? (Zr < 2 && TS.copyWithin(XS + 2, XS + 1, XS + 1 + Qr), TS[XS++] = 217, TS[XS++] = Qr) : Qr < 65536 ? (Zr < 3 && TS.copyWithin(XS + 3, XS + 2, XS + 2 + Qr), TS[XS++] = 218, TS[XS++] = Qr >> 8, TS[XS++] = 255 & Qr) : (Zr < 5 && TS.copyWithin(XS + 5, XS + 3, XS + 3 + Qr), TS[XS++] = 219, OS.setUint32(XS, Qr), XS += 4), XS += Qr
            } else if ("number" === Zr)
              if (rr >>> 0 === rr) rr < 32 || rr < 128 && !1 === this.useRecords || rr < 64 && !this.randomAccessStructure ? TS[XS++] = rr : rr < 256 ? (TS[XS++] = 204, TS[XS++] = rr) : rr < 65536 ? (TS[XS++] = 205, TS[XS++] = rr >> 8, TS[XS++] = 255 & rr) : (TS[XS++] = 206, OS.setUint32(XS, rr), XS += 4);
              else if ((rr | 0) === rr) rr >= -32 ? TS[XS++] = 256 + rr : rr >= -128 ? (TS[XS++] = 208, TS[XS++] = rr + 256) : rr >= -32768 ? (TS[XS++] = 209, OS.setInt16(XS, rr), XS += 2) : (TS[XS++] = 210, OS.setInt32(XS, rr), XS += 4);
            else {
              let Sr;
              if ((Sr = this.useFloat32) > 0 && rr < 4294967296 && rr >= -2147483648) {
                let Qr;
                if (TS[XS++] = 202, OS.setFloat32(XS, rr), Sr < 4 || ((Qr = rr * IS[(127 & TS[XS]) << 1 | TS[XS + 1] >> 7]) | 0) === Qr) return void(XS += 4);
                XS--
              }
              TS[XS++] = 203, OS.setFloat64(XS, rr), XS += 8
            } else if ("object" === Zr || "function" === Zr)
              if (rr) {
                if (Wr) {
                  let Qr = Wr.get(rr);
                  if (Qr) {
                    if (!Qr.id) {
                      let rr = Wr.idsToInsert || (Wr.idsToInsert = []);
                      Qr.id = rr.push(Qr)
                    }
                    return TS[XS++] = 214, TS[XS++] = 112, OS.setUint32(XS, Qr.id), void(XS += 4)
                  }
                  Wr.set(rr, {
                    offset: XS - Sr
                  })
                }
                let ar = rr.constructor;
                if (ar === Object) Br(rr);
                else if (ar === Array) Yr(rr);
                else if (ar === Map)
                  if (this.mapAsEmptyObject) TS[XS++] = 128;
                  else {
                    (Qr = rr.size) < 16 ? TS[XS++] = 128 | Qr : Qr < 65536 ? (TS[XS++] = 222, TS[XS++] = Qr >> 8, TS[XS++] = 255 & Qr) : (TS[XS++] = 223, OS.setUint32(XS, Qr), XS += 4);
                    for (let [Sr, Qr] of rr) nr(Sr), nr(Qr)
                  }
                else {
                  for (let Sr = 0, Qr = tS.length; Sr < Qr; Sr++) {
                    if (rr instanceof hS[Sr]) {
                      let Qr = tS[Sr];
                      if (Qr.write) {
                        Qr.type && (TS[XS++] = 212, TS[XS++] = Qr.type, TS[XS++] = 0);
                        let Sr = Qr.write.call(this, rr);
                        return void(Sr === rr ? Array.isArray(rr) ? Yr(rr) : Br(rr) : nr(Sr))
                      }
                      let Zr, Wr = TS,
                        ar = OS,
                        jr = XS;
                      TS = null;
                      try {
                        Zr = Qr.pack.call(this, rr, (rr => (TS = Wr, Wr = null, XS += rr, XS > LS && Tr(XS), {
                          target: TS,
                          targetView: OS,
                          position: XS - rr
                        })), nr)
                      } finally {
                        Wr && (TS = Wr, OS = ar, XS = jr, LS = TS.length - 10)
                      }
                      return void(Zr && (Zr.length + XS > LS && Tr(Zr.length + XS), XS = MS(Zr, TS, XS, Qr.type)))
                    }
                  }
                  if (Array.isArray(rr)) Yr(rr);
                  else {
                    if (rr.toJSON) {
                      const Sr = rr.toJSON();
                      if (Sr !== rr) return nr(Sr)
                    }
                    if ("function" === Zr) return nr(this.writeFunction && this.writeFunction(rr));
                    Br(rr)
                  }
                }
              } else TS[XS++] = 192;
            else if ("boolean" === Zr) TS[XS++] = rr ? 195 : 194;
            else if ("bigint" === Zr) {
              if (rr < BigInt(1) << BigInt(63) && rr >= -(BigInt(1) << BigInt(63))) TS[XS++] = 211, OS.setBigInt64(XS, rr);
              else if (rr < BigInt(1) << BigInt(64) && rr > 0) TS[XS++] = 207, OS.setBigUint64(XS, rr);
              else {
                if (!this.largeBigIntToFloat) {
                  if (this.largeBigIntToString) return nr(rr.toString());
                  if (this.useBigIntExtension && rr < BigInt(2) ** BigInt(1023) && rr > -(BigInt(2) ** BigInt(1023))) {
                    TS[XS++] = 199, XS++, TS[XS++] = 66;
                    let Sr, Qr = [];
                    do {
                      let Zr = rr & BigInt(255);
                      Sr = (Zr & BigInt(128)) === (rr < BigInt(0) ? BigInt(128) : BigInt(0)), Qr.push(Zr), rr >>= BigInt(8)
                    } while (rr !== BigInt(0) && rr !== BigInt(-1) || !Sr);
                    TS[XS - 2] = Qr.length;
                    for (let rr = Qr.length; rr > 0;) TS[XS++] = Number(Qr[--rr]);
                    return
                  }
                  throw new RangeError(rr + " was too large to fit in MessagePack 64-bit integer format, use useBigIntExtension, or set largeBigIntToFloat to convert to float-64, or set largeBigIntToString to convert to string")
                }
                TS[XS++] = 203, OS.setFloat64(XS, Number(rr))
              }
              XS += 8
            } else {
              if ("undefined" !== Zr) throw new Error("Unknown type: " + Zr);
              this.encodeUndefinedAsNil ? TS[XS++] = 192 : (TS[XS++] = 212, TS[XS++] = 0, TS[XS++] = 0)
            }
          },
          er = this.variableMapSize || this.coercibleKeyAsNumber || this.skipValues ? rr => {
            let Sr;
            if (this.skipValues) {
              Sr = [];
              for (let Qr in rr) "function" === typeof rr.hasOwnProperty && !rr.hasOwnProperty(Qr) || this.skipValues.includes(rr[Qr]) || Sr.push(Qr)
            } else Sr = Object.keys(rr);
            let Qr, Zr = Sr.length;
            if (Zr < 16 ? TS[XS++] = 128 | Zr : Zr < 65536 ? (TS[XS++] = 222, TS[XS++] = Zr >> 8, TS[XS++] = 255 & Zr) : (TS[XS++] = 223, OS.setUint32(XS, Zr), XS += 4), this.coercibleKeyAsNumber)
              for (let Wr = 0; Wr < Zr; Wr++) {
                Qr = Sr[Wr];
                let Zr = Number(Qr);
                nr(isNaN(Zr) ? Qr : Zr), nr(rr[Qr])
              } else
                for (let Wr = 0; Wr < Zr; Wr++) nr(Qr = Sr[Wr]), nr(rr[Qr])
          } : rr => {
            TS[XS++] = 222;
            let Qr = XS - Sr;
            XS += 2;
            let Zr = 0;
            for (let Sr in rr)("function" !== typeof rr.hasOwnProperty || rr.hasOwnProperty(Sr)) && (nr(Sr), nr(rr[Sr]), Zr++);
            if (Zr > 65535) throw new Error('Object is too large to serialize with fast 16-bit map size, use the "variableMapSize" option to serialize this object');
            TS[Qr++ + Sr] = Zr >> 8, TS[Qr + Sr] = 255 & Zr
          },
          Kr = !1 === this.useRecords ? er : rr.progressiveRecords && !xr ? rr => {
            let Qr, Wr, ar = Zr.transitions || (Zr.transitions = Object.create(null)),
              jr = XS++ - Sr;
            for (let Ir in rr)
              if ("function" !== typeof rr.hasOwnProperty || rr.hasOwnProperty(Ir)) {
                if (Qr = ar[Ir], Qr) ar = Qr;
                else {
                  let fr = Object.keys(rr),
                    Er = ar;
                  ar = Zr.transitions;
                  let pr = 0;
                  for (let rr = 0, Sr = fr.length; rr < Sr; rr++) {
                    let Sr = fr[rr];
                    Qr = ar[Sr], Qr || (Qr = ar[Sr] = Object.create(null), pr++), ar = Qr
                  }
                  jr + Sr + 1 == XS ? (XS--, vr(ar, fr, pr)) : Or(ar, fr, jr, pr), Wr = !0, ar = Er[Ir]
                }
                nr(rr[Ir])
              } if (!Wr) {
              let Qr = ar[qS];
              Qr ? TS[jr + Sr] = Qr : Or(ar, Object.keys(rr), jr, 0)
            }
          } : rr => {
            let Sr, Qr = Zr.transitions || (Zr.transitions = Object.create(null)),
              Wr = 0;
            for (let Zr in rr)("function" !== typeof rr.hasOwnProperty || rr.hasOwnProperty(Zr)) && (Sr = Qr[Zr], Sr || (Sr = Qr[Zr] = Object.create(null), Wr++), Qr = Sr);
            let ar = Qr[qS];
            ar ? ar >= 96 && xr ? (TS[XS++] = 96 + (31 & (ar -= 96)), TS[XS++] = ar >> 5) : TS[XS++] = ar : vr(Qr, Qr.__keys__ || Object.keys(rr), Wr);
            for (let Zr in rr)("function" !== typeof rr.hasOwnProperty || rr.hasOwnProperty(Zr)) && nr(rr[Zr])
          },
          yr = "function" == typeof this.useRecords && this.useRecords,
          Br = yr ? rr => {
            yr(rr) ? Kr(rr) : er(rr)
          } : Kr,
          Tr = rr => {
            let Qr;
            if (rr > 16777216) {
              if (rr - Sr > BS) throw new Error("Packed buffer would be larger than maximum buffer size");
              Qr = Math.min(BS, 4096 * Math.round(Math.max((rr - Sr) * (rr > 67108864 ? 1.25 : 2), 4194304) / 4096))
            } else Qr = 1 + (Math.max(rr - Sr << 2, TS.length - 1) >> 12) << 12;
            let Zr = new KS(Qr);
            return OS = Zr.dataView || (Zr.dataView = new DataView(Zr.buffer, 0, Qr)), rr = Math.min(rr, TS.length), TS.copy ? TS.copy(Zr, 0, Sr, rr) : Zr.set(TS.slice(Sr, rr)), XS -= Sr, Sr = 0, LS = Zr.length - 10, TS = Zr
          },
          vr = (rr, Sr, Wr) => {
            let ar = Zr.nextId;
            ar || (ar = 64), ar < mr && this.shouldShareStructure && !this.shouldShareStructure(Sr) ? (ar = Zr.nextOwnId, ar < Nr || (ar = mr), Zr.nextOwnId = ar + 1) : (ar >= Nr && (ar = mr), Zr.nextId = ar + 1);
            let jr = Sr.highByte = ar >= 96 && xr ? ar - 96 >> 5 : -1;
            rr[qS] = ar, rr.__keys__ = Sr, Zr[ar - 64] = Sr, ar < mr ? (Sr.isShared = !0, Zr.sharedLength = ar - 63, Qr = !0, jr >= 0 ? (TS[XS++] = 96 + (31 & ar), TS[XS++] = jr) : TS[XS++] = ar) : (jr >= 0 ? (TS[XS++] = 213, TS[XS++] = 114, TS[XS++] = 96 + (31 & ar), TS[XS++] = jr) : (TS[XS++] = 212, TS[XS++] = 114, TS[XS++] = ar), Wr && (tr += hr * Wr), Ur.length >= pr && (Ur.shift()[qS] = 0), Ur.push(rr), nr(Sr))
          },
          Or = (rr, Qr, Zr, Wr) => {
            let ar = TS,
              jr = XS,
              Ir = LS,
              fr = Sr;
            TS = vS, XS = 0, Sr = 0, TS || (vS = TS = new KS(8192)), LS = TS.length - 10, vr(rr, Qr, Wr), vS = TS;
            let Er = XS;
            if (TS = ar, XS = jr, LS = Ir, Sr = fr, Er > 1) {
              let rr = XS + Er - 1;
              rr > LS && Tr(rr);
              let Qr = Zr + Sr;
              TS.copyWithin(Qr + Er, Qr + 1, XS), TS.set(vS.slice(0, Er), Qr), XS = rr
            } else TS[Zr + Sr] = vS[0]
          },
          Lr = rr => {
            let Wr = lS(rr, TS, Sr, XS, Zr, Tr, ((rr, Sr, Zr) => {
              if (Zr) return Qr = !0;
              XS = Sr;
              let Wr = TS;
              return nr(rr), zr(), Wr !== TS ? {
                position: XS,
                targetView: OS,
                target: TS
              } : XS
            }), this);
            if (0 === Wr) return Br(rr);
            XS = Wr
          }
      }
      useBuffer(rr) {
        TS = rr, OS = TS.dataView || (TS.dataView = new DataView(TS.buffer, TS.byteOffset, TS.byteLength)), XS = 0
      }
      set position(rr) {
        XS = rr
      }
      get position() {
        return XS
      }
      set buffer(rr) {
        TS = rr
      }
      get buffer() {
        return TS
      }
      clearSharedData() {
        this.structures && (this.structures = []), this.typedStructs && (this.typedStructs = [])
      }
    }

    function gS(rr, Sr, Qr, Zr) {
      let Wr = rr.byteLength;
      if (Wr + 1 < 256) {
        var {
          target: ar,
          position: jr
        } = Qr(4 + Wr);
        ar[jr++] = 199, ar[jr++] = Wr + 1
      } else if (Wr + 1 < 65536) {
        var {
          target: ar,
          position: jr
        } = Qr(5 + Wr);
        ar[jr++] = 200, ar[jr++] = Wr + 1 >> 8, ar[jr++] = Wr + 1 & 255
      } else {
        var {
          target: ar,
          position: jr,
          targetView: Ir
        } = Qr(7 + Wr);
        ar[jr++] = 201, Ir.setUint32(jr, Wr + 1), jr += 4
      }
      ar[jr++] = 116, ar[jr++] = Sr, rr.buffer || (rr = new Uint8Array(rr)), ar.set(new Uint8Array(rr.buffer, rr.byteOffset, rr.byteLength), jr)
    }

    function CS(rr, Sr) {
      let Qr = rr.byteLength;
      var Zr, Wr;
      if (Qr < 256) {
        var {
          target: Zr,
          position: Wr
        } = Sr(Qr + 2);
        Zr[Wr++] = 196, Zr[Wr++] = Qr
      } else if (Qr < 65536) {
        var {
          target: Zr,
          position: Wr
        } = Sr(Qr + 3);
        Zr[Wr++] = 197, Zr[Wr++] = Qr >> 8, Zr[Wr++] = 255 & Qr
      } else {
        var {
          target: Zr,
          position: Wr,
          targetView: ar
        } = Sr(Qr + 5);
        Zr[Wr++] = 198, ar.setUint32(Wr, Qr), Wr += 4
      }
      Zr.set(rr, Wr)
    }

    function MS(rr, Sr, Qr, Zr) {
      let Wr = rr.length;
      switch (Wr) {
        case 1:
          Sr[Qr++] = 212;
          break;
        case 2:
          Sr[Qr++] = 213;
          break;
        case 4:
          Sr[Qr++] = 214;
          break;
        case 8:
          Sr[Qr++] = 215;
          break;
        case 16:
          Sr[Qr++] = 216;
          break;
        default:
          Wr < 256 ? (Sr[Qr++] = 199, Sr[Qr++] = Wr) : Wr < 65536 ? (Sr[Qr++] = 200, Sr[Qr++] = Wr >> 8, Sr[Qr++] = 255 & Wr) : (Sr[Qr++] = 201, Sr[Qr++] = Wr >> 24, Sr[Qr++] = Wr >> 16 & 255, Sr[Qr++] = Wr >> 8 & 255, Sr[Qr++] = 255 & Wr)
      }
      return Sr[Qr++] = Zr, Sr.set(rr, Qr), Qr += Wr
    }

    function GS(rr, Sr, Qr) {
      if (PS.length > 0) {
        OS.setUint32(PS.position + rr, XS + Qr - PS.position - rr), PS.stringsPosition = XS - rr;
        let Zr = PS;
        PS = null, Sr(Zr[0]), Sr(Zr[1])
      }
    }

    function kS(rr) {
      if (rr.Class) {
        if (!rr.pack && !rr.write) throw new Error("Extension has no pack or write function");
        if (rr.pack && !rr.type) throw new Error("Extension has no type (numeric code to identify the extension)");
        hS.unshift(rr.Class), tS.unshift(rr)
      }! function(rr) {
        rr.unpack ? Yr[rr.type] = rr.unpack : Yr[rr.type] = rr
      }(rr)
    }

    function AS(rr, Sr) {
      return rr.isCompatible = rr => {
        let Qr = !rr || (Sr.lastNamedStructuresLength || 0) === rr.length;
        return Qr || Sr._mergeStructures(rr), Qr
      }, rr
    }
    hS = [Date, Set, Error, RegExp, ArrayBuffer, Object.getPrototypeOf(Uint8Array.prototype).constructor, er], tS = [{
      pack(rr, Sr, Qr) {
        let Zr = rr.getTime() / 1e3;
        if ((this.useTimestamp32 || 0 === rr.getMilliseconds()) && Zr >= 0 && Zr < 4294967296) {
          let {
            target: rr,
            targetView: Qr,
            position: Wr
          } = Sr(6);
          rr[Wr++] = 214, rr[Wr++] = 255, Qr.setUint32(Wr, Zr)
        } else if (Zr > 0 && Zr < 4294967296) {
          let {
            target: Qr,
            targetView: Wr,
            position: ar
          } = Sr(10);
          Qr[ar++] = 215, Qr[ar++] = 255, Wr.setUint32(ar, 4e6 * rr.getMilliseconds() + (Zr / 1e3 / 4294967296 | 0)), Wr.setUint32(ar + 4, Zr)
        } else if (isNaN(Zr)) {
          if (this.onInvalidDate) return Sr(0), Qr(this.onInvalidDate());
          let {
            target: rr,
            targetView: Zr,
            position: Wr
          } = Sr(3);
          rr[Wr++] = 212, rr[Wr++] = 255, rr[Wr++] = 255
        } else {
          let {
            target: Qr,
            targetView: Wr,
            position: ar
          } = Sr(15);
          Qr[ar++] = 199, Qr[ar++] = 12, Qr[ar++] = 255, Wr.setUint32(ar, 1e6 * rr.getMilliseconds()), Wr.setBigInt64(ar + 4, BigInt(Math.floor(Zr)))
        }
      }
    }, {
      pack(rr, Sr, Qr) {
        if (this.setAsEmptyObject) return Sr(0), Qr({});
        let Zr = Array.from(rr),
          {
            target: Wr,
            position: ar
          } = Sr(this.moreTypes ? 3 : 0);
        this.moreTypes && (Wr[ar++] = 212, Wr[ar++] = 115, Wr[ar++] = 0), Qr(Zr)
      }
    }, {
      pack(rr, Sr, Qr) {
        let {
          target: Zr,
          position: Wr
        } = Sr(this.moreTypes ? 3 : 0);
        this.moreTypes && (Zr[Wr++] = 212, Zr[Wr++] = 101, Zr[Wr++] = 0), Qr([rr.name, rr.message, rr.cause])
      }
    }, {
      pack(rr, Sr, Qr) {
        let {
          target: Zr,
          position: Wr
        } = Sr(this.moreTypes ? 3 : 0);
        this.moreTypes && (Zr[Wr++] = 212, Zr[Wr++] = 120, Zr[Wr++] = 0), Qr([rr.source, rr.flags])
      }
    }, {
      pack(rr, Sr) {
        this.moreTypes ? gS(rr, 16, Sr) : CS(eS ? Buffer.from(rr) : new Uint8Array(rr), Sr)
      }
    }, {
      pack(rr, Sr) {
        let Qr = rr.constructor;
        Qr !== yS && this.moreTypes ? gS(rr, QS.indexOf(Qr.name), Sr) : CS(rr, Sr)
      }
    }, {
      pack(rr, Sr) {
        let {
          target: Qr,
          position: Zr
        } = Sr(1);
        Qr[Zr] = 193
      }
    }];
    let VS = new RS({
      useRecords: !1
    });
    const iS = VS.pack,
      wS = VS.pack,
      cS = RS,
      {
        NEVER: FS,
        ALWAYS: oS,
        DECIMAL_ROUND: bS,
        DECIMAL_FIT: JS
      } = NS,
      DS = 512,
      dS = 1024,
      sS = 2048;
    const uS = function(rr) {
        let Sr = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        if (!rr || "object" !== typeof rr) throw new Error("first argument must be an Iterable, Async Iterable, Iterator, Async Iterator, or a promise");
        const Qr = new Lr(Sr);
        let Zr;
        const Wr = rr => {
          let Sr;
          Zr && (rr = Buffer.concat([Zr, rr]), Zr = void 0);
          try {
            Sr = Qr.unpackMultiple(rr)
          } catch (Wr) {
            if (!Wr.incomplete) throw Wr;
            Zr = rr.slice(Wr.lastPosition), Sr = Wr.values
          }
          return Sr
        };
        return "function" === typeof rr[Symbol.iterator] ? function*() {
          for (const Sr of rr) yield* Wr(Sr)
        }() : "function" === typeof rr[Symbol.asyncIterator] ? async function*() {
          for await (const Sr of rr) yield* Wr(Sr)
        }(): void 0
      },
      rQ = function(rr) {
        let Sr = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        if (rr && "object" === typeof rr) {
          if ("function" === typeof rr[Symbol.iterator]) return function*(rr, Sr) {
            const Qr = new RS(Sr);
            for (const Zr of rr) yield Qr.pack(Zr)
          }(rr, Sr);
          if ("function" === typeof rr.then || "function" === typeof rr[Symbol.asyncIterator]) return async function*(rr, Sr) {
            const Qr = new RS(Sr);
            for await (const Zr of rr) yield Qr.pack(Zr)
          }(rr, Sr);
          throw new Error("first argument must be an Iterable, Async Iterable, Iterator, Async Iterator, or a Promise")
        }
        throw new Error("first argument must be an Iterable, Async Iterable, or a Promise for an Async Iterable")
      },
      SQ = !1,
      QQ = !0
  },
  10287: (rr, Sr, Qr) => {
    Qr.r(Sr), Qr.d(Sr, {
      $changes: () => tr,
      $childType: () => hr,
      $decoder: () => pr,
      $deleteByIndex: () => Nr,
      $encoder: () => Er,
      $filter: () => xr,
      $getByIndex: () => mr,
      $numFields: () => Or,
      $refId: () => Ir,
      $track: () => fr,
      $values: () => Kr,
      ArraySchema: () => QZ,
      Callbacks: () => QW,
      ChangeTree: () => XQ,
      CollectionSchema: () => aZ,
      Decoder: () => bZ,
      Encoder: () => wZ,
      FieldBuilder: () => fZ,
      MapSchema: () => WZ,
      Metadata: () => bS,
      OPERATION: () => Wr,
      Reflection: () => sZ,
      ReflectionField: () => DZ,
      ReflectionType: () => dZ,
      Root: () => PZ,
      Schema: () => lZ,
      SetSchema: () => jZ,
      StateCallbackStrategy: () => SW,
      StateView: () => CZ,
      StreamSchema: () => IZ,
      TypeContext: () => AS,
      createPool: () => WW,
      decode: () => nS,
      decodeKeyValueOperation: () => DQ,
      decodeSchemaOperation: () => JQ,
      defineCustomTypes: () => BS,
      defineTypes: () => vZ,
      deprecated: () => BZ,
      dumpChanges: () => LZ,
      encode: () => SS,
      encodeArray: () => GQ,
      encodeIndexedEntry: () => CQ,
      encodeKeyValueOperation: () => MQ,
      encodeMapEntry: () => gQ,
      encodeSchemaOperation: () => RQ,
      nU: () => tZ,
      fullStateOnly: () => nZ,
      getDecoderStateCallbacks: () => uZ,
      getEncodeDescriptor: () => rQ,
      getRawChangesCallback: () => rW,
      isBuilder: () => EZ,
      patchOnly: () => YZ,
      registerType: () => yS,
      schema: () => OZ,
      t: () => NZ,
      type: () => eZ,
      unreliable: () => zZ,
      view: () => hZ
    });
    const Zr = 255;
    var Wr;

    function ar(rr) {
      Object.defineProperty(rr, Symbol.metadata, {
        value: void 0,
        writable: !0,
        configurable: !0,
        enumerable: !1
      })
    }! function(rr) {
      rr[rr.ADD = 128] = "ADD", rr[rr.REPLACE = 0] = "REPLACE", rr[rr.DELETE = 64] = "DELETE", rr[rr.DELETE_AND_MOVE = 96] = "DELETE_AND_MOVE", rr[rr.MOVE_AND_ADD = 160] = "MOVE_AND_ADD", rr[rr.DELETE_AND_ADD = 192] = "DELETE_AND_ADD", rr[rr.CLEAR = 10] = "CLEAR", rr[rr.REVERSE = 15] = "REVERSE", rr[rr.MOVE = 32] = "MOVE", rr[rr.DELETE_BY_REFID = 33] = "DELETE_BY_REFID", rr[rr.ADD_BY_REFID = 129] = "ADD_BY_REFID"
    }(Wr || (Wr = {})), Symbol.metadata ??= Symbol.for("Symbol.metadata");
    const jr = "undefined" !== typeof globalThis ? globalThis : "undefined" !== typeof global ? global : "undefined" !== typeof self ? self : "undefined" !== typeof window ? window : {};
    if ("function" === typeof Symbol && "function" !== typeof Symbol.for) {
      const rr = "colyseus.symbolRegistry",
        Sr = jr[rr] || (jr[rr] = Object.create(null));
      Symbol.for = function(rr) {
        return Sr[rr] || (Sr[rr] = Symbol(rr))
      }, Symbol.keyFor = function(rr) {
        for (const Qr in Sr)
          if (Sr[Qr] === rr) return Qr
      }
    }
    const Ir = Symbol.for("$refId"),
      fr = "~track",
      Er = "~encoder",
      pr = "~decoder",
      xr = "~filter",
      mr = "~getByIndex",
      Nr = "~deleteByIndex",
      Ur = "~resyncPrune",
      tr = Symbol.for("$changes"),
      hr = Symbol.for("$childType"),
      zr = Symbol.for("$proxyTarget"),
      Yr = "~onEncodeEnd",
      nr = "~reset",
      er = "~onDecodeEnd",
      Kr = Symbol.for("$values"),
      yr = "~builder",
      Br = "~descriptors",
      Tr = "~__encodeDescriptor",
      vr = "~encoders",
      Or = "~__numFields",
      Lr = "~__refTypeFieldIndexes",
      lr = "~__viewFieldIndexes",
      Xr = "$__fieldIndexesByViewTag",
      Pr = "~__unreliableFieldIndexes",
      Hr = "~__patchOnlyFieldIndexes",
      qr = "~__fullSyncSkipIndexes",
      Rr = "~__fullStateOnlyFieldIndexes",
      gr = "~__streamFieldIndexes",
      Cr = "~__streamPriorities";
    let Mr;
    try {
      Mr = new TextEncoder
    } catch (aW) {}
    const Gr = new ArrayBuffer(8),
      kr = new Int32Array(Gr),
      Ar = new Float32Array(Gr),
      Vr = new Float64Array(Gr),
      ir = new BigInt64Array(Gr),
      wr = "undefined" !== typeof Buffer && Buffer.byteLength ? Buffer.byteLength : function(rr, Sr) {
        for (var Qr = 0, Zr = 0, Wr = 0, ar = rr.length; Wr < ar; Wr++)(Qr = rr.charCodeAt(Wr)) < 128 ? Zr += 1 : Qr < 2048 ? Zr += 2 : Qr < 55296 || Qr >= 57344 ? Zr += 3 : (Wr++, Zr += 4);
        return Zr
      };

    function cr(rr, Sr, Qr) {
      for (var Zr = 0, Wr = 0, ar = Sr.length; Wr < ar; Wr++)(Zr = Sr.charCodeAt(Wr)) < 128 ? rr[Qr.offset++] = Zr : Zr < 2048 ? (rr[Qr.offset] = 192 | Zr >> 6, rr[Qr.offset + 1] = 128 | 63 & Zr, Qr.offset += 2) : Zr < 55296 || Zr >= 57344 ? (rr[Qr.offset] = 224 | Zr >> 12, rr[Qr.offset + 1] = 128 | Zr >> 6 & 63, rr[Qr.offset + 2] = 128 | 63 & Zr, Qr.offset += 3) : (Wr++, Zr = 65536 + ((1023 & Zr) << 10 | 1023 & Sr.charCodeAt(Wr)), rr[Qr.offset] = 240 | Zr >> 18, rr[Qr.offset + 1] = 128 | Zr >> 12 & 63, rr[Qr.offset + 2] = 128 | Zr >> 6 & 63, rr[Qr.offset + 3] = 128 | 63 & Zr, Qr.offset += 4)
    }

    function Fr(rr, Sr, Qr) {
      rr[Qr.offset++] = 255 & Sr
    }

    function or(rr, Sr, Qr) {
      rr[Qr.offset++] = 255 & Sr, rr[Qr.offset++] = Sr >> 8 & 255
    }

    function br(rr, Sr, Qr) {
      rr[Qr.offset++] = 255 & Sr, rr[Qr.offset++] = Sr >> 8 & 255
    }

    function Jr(rr, Sr, Qr) {
      rr[Qr.offset++] = 255 & Sr, rr[Qr.offset++] = Sr >> 8 & 255, rr[Qr.offset++] = Sr >> 16 & 255, rr[Qr.offset++] = Sr >> 24 & 255
    }

    function Dr(rr, Sr, Qr) {
      const Zr = Sr >> 24,
        Wr = Sr >> 16,
        ar = Sr >> 8,
        jr = Sr;
      rr[Qr.offset++] = 255 & jr, rr[Qr.offset++] = 255 & ar, rr[Qr.offset++] = 255 & Wr, rr[Qr.offset++] = 255 & Zr
    }

    function dr(rr, Sr, Qr) {
      const Zr = Math.floor(Sr / Math.pow(2, 32));
      Dr(rr, Sr >>> 0, Qr), Dr(rr, Zr, Qr)
    }

    function sr(rr, Sr, Qr) {
      const Zr = Sr / Math.pow(2, 32) | 0;
      Dr(rr, Sr >>> 0, Qr), Dr(rr, Zr, Qr)
    }

    function ur(rr, Sr, Qr) {
      Ar[0] = Sr, Jr(rr, kr[0], Qr)
    }

    function rS(rr, Sr, Qr) {
      Vr[0] = Sr, Jr(rr, kr[0], Qr), Jr(rr, kr[1], Qr)
    }
    const SS = {
        int8: Fr,
        uint8: function(rr, Sr, Qr) {
          rr[Qr.offset++] = 255 & Sr
        },
        int16: or,
        uint16: br,
        int32: Jr,
        uint32: Dr,
        int64: dr,
        uint64: sr,
        bigint64: function(rr, Sr, Qr) {
          ir[0] = BigInt.asIntN(64, Sr), Jr(rr, kr[0], Qr), Jr(rr, kr[1], Qr)
        },
        biguint64: function(rr, Sr, Qr) {
          ir[0] = BigInt.asIntN(64, Sr), Jr(rr, kr[0], Qr), Jr(rr, kr[1], Qr)
        },
        float32: ur,
        float64: rS,
        boolean: function(rr, Sr, Qr) {
          rr[Qr.offset++] = Sr ? 1 : 0
        },
        string: function(rr, Sr, Qr) {
          Sr || (Sr = "");
          let Zr = wr(Sr, "utf8"),
            Wr = 0;
          if (Zr < 32) rr[Qr.offset++] = 160 | Zr, Wr = 1;
          else if (Zr < 256) rr[Qr.offset++] = 217, rr[Qr.offset++] = Zr, Wr = 2;
          else if (Zr < 65536) rr[Qr.offset++] = 218, br(rr, Zr, Qr), Wr = 3;
          else {
            if (!(Zr < 4294967296)) throw new Error("String too long");
            rr[Qr.offset++] = 219, Dr(rr, Zr, Qr), Wr = 5
          }
          return cr(rr, Sr, Qr), Wr + Zr
        },
        number: function rr(Sr, Qr, Zr) {
          return isNaN(Qr) ? rr(Sr, 0, Zr) : isFinite(Qr) ? Qr !== (0 | Qr) ? Math.abs(Qr) <= 34028235e31 && (Ar[0] = Qr, Math.abs(Math.abs(Ar[0]) - Math.abs(Qr)) < 1e-4) ? (Sr[Zr.offset++] = 202, ur(Sr, Qr, Zr), 5) : (Sr[Zr.offset++] = 203, rS(Sr, Qr, Zr), 9) : Qr >= 0 ? Qr < 128 ? (Sr[Zr.offset++] = 255 & Qr, 1) : Qr < 256 ? (Sr[Zr.offset++] = 204, Sr[Zr.offset++] = 255 & Qr, 2) : Qr < 65536 ? (Sr[Zr.offset++] = 205, br(Sr, Qr, Zr), 3) : Qr < 4294967296 ? (Sr[Zr.offset++] = 206, Dr(Sr, Qr, Zr), 5) : (Sr[Zr.offset++] = 207, sr(Sr, Qr, Zr), 9) : Qr >= -32 ? (Sr[Zr.offset++] = 224 | Qr + 32, 1) : Qr >= -128 ? (Sr[Zr.offset++] = 208, Fr(Sr, Qr, Zr), 2) : Qr >= -32768 ? (Sr[Zr.offset++] = 209, or(Sr, Qr, Zr), 3) : Qr >= -2147483648 ? (Sr[Zr.offset++] = 210, Jr(Sr, Qr, Zr), 5) : (Sr[Zr.offset++] = 211, dr(Sr, Qr, Zr), 9) : rr(Sr, Qr > 0 ? Number.MAX_SAFE_INTEGER : -Number.MAX_SAFE_INTEGER, Zr)
        },
        utf8Write: cr,
        utf8Length: wr
      },
      QS = new ArrayBuffer(8),
      ZS = new Int32Array(QS),
      WS = new Float32Array(QS),
      aS = new Float64Array(QS),
      jS = new BigUint64Array(QS),
      IS = new BigInt64Array(QS);

    function fS(rr, Sr, Qr) {
      Qr > rr.length - Sr.offset && (Qr = rr.length - Sr.offset);
      for (var Zr = "", Wr = 0, ar = Sr.offset, jr = Sr.offset + Qr; ar < jr; ar++) {
        var Ir = rr[ar];
        if (0 !== (128 & Ir))
          if (192 !== (224 & Ir))
            if (224 !== (240 & Ir)) {
              if (240 !== (248 & Ir)) {
                console.error("decode.utf8Read(): Invalid byte " + Ir + " at offset " + ar + ". Skip to end of string: " + (Sr.offset + Qr));
                break
              }(Wr = (7 & Ir) << 18 | (63 & rr[++ar]) << 12 | (63 & rr[++ar]) << 6 | 63 & rr[++ar]) >= 65536 ? (Wr -= 65536, Zr += String.fromCharCode(55296 + (Wr >>> 10), 56320 + (1023 & Wr))) : Zr += String.fromCharCode(Wr)
            } else Zr += String.fromCharCode((15 & Ir) << 12 | (63 & rr[++ar]) << 6 | 63 & rr[++ar]);
        else Zr += String.fromCharCode((31 & Ir) << 6 | 63 & rr[++ar]);
        else Zr += String.fromCharCode(Ir)
      }
      return Sr.offset += Qr, Zr
    }

    function ES(rr, Sr) {
      return pS(rr, Sr) << 24 >> 24
    }

    function pS(rr, Sr) {
      return rr[Sr.offset++]
    }

    function xS(rr, Sr) {
      return mS(rr, Sr) << 16 >> 16
    }

    function mS(rr, Sr) {
      return rr[Sr.offset++] | rr[Sr.offset++] << 8
    }

    function NS(rr, Sr) {
      return rr[Sr.offset++] | rr[Sr.offset++] << 8 | rr[Sr.offset++] << 16 | rr[Sr.offset++] << 24
    }

    function US(rr, Sr) {
      return NS(rr, Sr) >>> 0
    }

    function tS(rr, Sr) {
      return ZS[0] = NS(rr, Sr), WS[0]
    }

    function hS(rr, Sr) {
      return ZS[0] = NS(rr, Sr), ZS[1] = NS(rr, Sr), aS[0]
    }

    function zS(rr, Sr) {
      const Qr = US(rr, Sr);
      return NS(rr, Sr) * Math.pow(2, 32) + Qr
    }

    function YS(rr, Sr) {
      const Qr = US(rr, Sr);
      return US(rr, Sr) * Math.pow(2, 32) + Qr
    }
    const nS = {
        utf8Read: fS,
        int8: ES,
        uint8: pS,
        int16: xS,
        uint16: mS,
        int32: NS,
        uint32: US,
        float32: tS,
        float64: hS,
        int64: zS,
        uint64: YS,
        bigint64: function(rr, Sr) {
          return ZS[0] = NS(rr, Sr), ZS[1] = NS(rr, Sr), IS[0]
        },
        biguint64: function(rr, Sr) {
          return ZS[0] = NS(rr, Sr), ZS[1] = NS(rr, Sr), jS[0]
        },
        boolean: function(rr, Sr) {
          return pS(rr, Sr) > 0
        },
        string: function(rr, Sr) {
          const Qr = rr[Sr.offset++];
          let Zr;
          return Qr < 192 ? Zr = 31 & Qr : 217 === Qr ? Zr = pS(rr, Sr) : 218 === Qr ? Zr = mS(rr, Sr) : 219 === Qr && (Zr = US(rr, Sr)), fS(rr, Sr, Zr)
        },
        number: function(rr, Sr) {
          const Qr = rr[Sr.offset++];
          return Qr < 128 ? Qr : 202 === Qr ? tS(rr, Sr) : 203 === Qr ? hS(rr, Sr) : 204 === Qr ? pS(rr, Sr) : 205 === Qr ? mS(rr, Sr) : 206 === Qr ? US(rr, Sr) : 207 === Qr ? YS(rr, Sr) : 208 === Qr ? ES(rr, Sr) : 209 === Qr ? xS(rr, Sr) : 210 === Qr ? NS(rr, Sr) : 211 === Qr ? zS(rr, Sr) : Qr > 223 ? -1 * (255 - Qr + 1) : void 0
        },
        stringCheck: function(rr, Sr) {
          const Qr = rr[Sr.offset];
          return Qr < 192 && Qr > 160 || 217 === Qr || 218 === Qr || 219 === Qr
        }
      },
      eS = {},
      KS = new Map;

    function yS(rr, Sr) {
      Sr.constructor && (Object.prototype.hasOwnProperty.call(Sr, "constructor") && null == Sr.constructor[Symbol.metadata] && ar(Sr.constructor), KS.set(Sr.constructor, rr), eS[rr] = Sr), Sr.encode && (SS[rr] = Sr.encode), Sr.decode && (nS[rr] = Sr.decode)
    }

    function BS(rr) {
      for (const Sr in rr) yS(Sr, rr[Sr]);
      return rr => eZ(rr)
    }
    const TS = "ArraySchema does not support streaming \u2014 positional ops (splice / unshift / reverse) shift subsequent indexes, so holding ADDs back for a later tick under `maxPerTick` would desync the decoder. Use `t.stream(X)` (stable monotonic positions) or `t.map(X).stream()` (stable keys) instead.";

    function vS() {
      return {
        pendingByView: new Map,
        sentByView: new Map,
        broadcastPending: new Set,
        sentBroadcast: new Set,
        broadcastDeletes: new Set,
        maxPerTick: 32
      }
    }

    function OS(rr) {
      return rr._stream ??= vS()
    }

    function LS(rr, Sr, Qr) {
      0 === Sr.activeViews.size && OS(rr).broadcastPending.add(Qr)
    }

    function lS(rr, Sr, Qr, Zr) {
      const ar = rr._stream;
      if (void 0 === ar) return !0;
      let jr = !1;
      return ar.broadcastPending.delete(Zr) ? jr = !0 : ar.sentBroadcast.delete(Zr) && ar.broadcastDeletes.add(Zr), Sr.forEachActiveView((rr => {
        const Sr = ar.pendingByView.get(rr.id);
        if (Sr?.has(Zr)) return Sr.delete(Zr), void(jr = !0);
        const Ir = ar.sentByView.get(rr.id);
        if (Ir?.has(Zr)) {
          Ir.delete(Zr);
          let Sr = rr.changes.get(Qr);
          void 0 === Sr && (Sr = new Map, rr.changes.set(Qr, Sr)), Sr.set(Zr, Wr.DELETE)
        }
      })), jr
    }

    function XS(rr, Sr) {
      const Qr = rr._stream?.pendingByView;
      if (void 0 === Qr) return !1;
      for (const [Zr, Wr] of Qr)
        if (Wr.size > 0 && void 0 !== Sr.activeViews.get(Zr)?.deref()) return !0;
      return !1
    }

    function PS(rr) {
      const Sr = rr._stream;
      return void 0 !== Sr && (Sr.broadcastPending.size > 0 || Sr.broadcastDeletes.size > 0)
    }

    function HS(rr, Sr, Qr) {
      const Zr = OS(rr);
      let Wr = Zr.pendingByView.get(Sr);
      void 0 === Wr && (Wr = new Set, Zr.pendingByView.set(Sr, Wr)), Wr.add(Qr)
    }

    function qS(rr, Sr) {
      const Qr = rr._stream;
      void 0 !== Qr && (Qr.pendingByView.delete(Sr), Qr.sentByView.delete(Sr), Qr.priorityByView?.delete(Sr))
    }
    const RS = {
      8: "uint8",
      16: "uint16",
      32: "uint32"
    };

    function gS(rr) {
      if (null == rr || "object" !== typeof rr) throw new Error("t.quantized(): options object with { min, max } is required.");
      const {
        min: Sr,
        max: Qr
      } = rr;
      if ("number" !== typeof Sr || "number" !== typeof Qr || !(Qr > Sr) || !Number.isFinite(Sr) || !Number.isFinite(Qr)) throw new Error(`t.quantized(): require finite min < max (got min=${Sr}, max=${Qr}).`);
      const Zr = rr.bits ?? 16;
      if (8 !== Zr && 16 !== Zr && 32 !== Zr) throw new Error(`t.quantized(): bits must be 8, 16 or 32 (got ${Zr}).`);
      const Wr = rr.mode ?? "clamp";
      if ("clamp" !== Wr && "wrap" !== Wr) throw new Error(`t.quantized(): mode must be "clamp" or "wrap" (got ${JSON.stringify(Wr)}).`);
      const ar = "wrap" === Wr,
        jr = Math.pow(2, Zr);
      return {
        min: Sr,
        max: Qr,
        bits: Zr,
        wrap: ar,
        wire: RS[Zr],
        range: Qr - Sr,
        span: ar ? jr : Sr === -Qr ? jr - 2 : jr - 1
      }
    }

    function CS(rr) {
      return null !== rr && "object" === typeof rr && void 0 !== rr.quantized
    }

    function MS(rr, Sr) {
      if (rr.wrap) {
        if (!Number.isFinite(Sr)) return 0;
        const Qr = rr.range;
        let Zr = (Sr - rr.min) % Qr;
        Zr < 0 && (Zr += Qr);
        const Wr = rr.span;
        return Math.floor(Zr / Qr * Wr + .5) % Wr
      }
      if (Sr !== Sr) return 0;
      const Qr = Sr < rr.min ? rr.min : Sr > rr.max ? rr.max : Sr;
      return Math.floor((Qr - rr.min) / rr.range * rr.span + .5)
    }

    function GS(rr, Sr) {
      return rr.min + Sr / rr.span * rr.range
    }

    function kS(rr) {
      const Sr = SS[rr.wire];
      return (Qr, Zr, Wr) => Sr(Qr, MS(rr, Zr), Wr)
    }
    class AS {
      types = {};
      schemas = new Map;
      hasFilters = !1;
      static inheritedTypes = new WeakMap;
      static cachedContexts = new WeakMap;
      static register(rr) {
        const Sr = Object.getPrototypeOf(rr);
        if (Sr !== lZ) {
          let Qr = AS.inheritedTypes.get(Sr);
          Qr || (Qr = new Set, AS.inheritedTypes.set(Sr, Qr)), Qr.add(rr)
        }
      }
      static cache(rr) {
        let Sr = AS.cachedContexts.get(rr);
        return Sr || (Sr = new AS(rr), AS.cachedContexts.set(rr, Sr)), Sr
      }
      constructor(rr) {
        rr && this.discoverTypes(rr)
      }
      has(rr) {
        return this.schemas.has(rr)
      }
      get(rr) {
        return this.types[rr]
      }
      add(rr) {
        let Sr = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.schemas.size;
        return !this.schemas.has(rr) && (this.types[Sr] = rr, null == rr[Symbol.metadata] && bS.initialize(rr), this.schemas.set(rr, Sr), !0)
      }
      getTypeId(rr) {
        return this.schemas.get(rr)
      }
      discoverTypes(rr) {
        if (!this.add(rr)) return;
        AS.inheritedTypes.get(rr)?.forEach((rr => {
          this.discoverTypes(rr)
        }));
        let Sr = rr;
        for (;
          (Sr = Object.getPrototypeOf(Sr)) && Sr !== lZ && Sr !== Function.prototype;) this.discoverTypes(Sr);
        const Qr = rr[Symbol.metadata];
        (Qr[lr] || Qr[gr]) && (this.hasFilters = !0);
        for (const Zr in Qr) {
          const rr = Qr[Zr].type;
          if ("string" !== typeof rr && !CS(rr))
            if ("function" === typeof rr) this.discoverTypes(rr);
            else {
              const Sr = Object.values(rr)[0];
              if ("string" === typeof Sr) continue;
              this.discoverTypes(Sr)
            }
        }
      }
      debug() {
        return `TypeContext ->\n\tSchema types: ${this.schemas.size}\n\thasFilters: ${this.hasFilters}`
      }
    }

    function VS(rr) {
      const Sr = wS(rr);
      return Sr ? {
        complexTypeKlass: eS[Sr],
        childType: rr[Sr]
      } : {
        complexTypeKlass: !1,
        childType: rr
      }
    }

    function iS(rr, Sr) {
      const Qr = cS(rr),
        Zr = wS(Qr),
        Wr = Zr && wS(Qr[Zr]);
      if (Wr) throw new Error(`${Sr?`${Sr}: `:""}@colyseus/schema: nested collections are not supported ("${Zr}" of "${Wr}"). Collections can only hold primitive types or Schema classes, wrap the inner ${Wr} in a Schema class.`);
      return Qr
    }

    function wS(rr) {
      return "object" === typeof rr && null !== rr ? Object.keys(rr).find((rr => void 0 !== eS[rr])) : void 0
    }

    function cS(rr) {
      if ("object" !== typeof rr || null === rr) return rr;
      if (Array.isArray(rr)) return {
        array: cS(rr[0])
      };
      const Sr = function(rr) {
        const Sr = Object.keys(rr),
          Qr = Sr.filter((rr => /\d+/.test(rr)));
        if (Qr.length > 0 && Qr.length === Sr.length / 2 && rr[rr[Qr[0]]] == Qr[0]) return "number";
        if (Sr.length > 0 && Sr.every((Sr => rr[Sr] === Sr))) return "string"
      }(rr);
      if (Sr) return Sr;
      if (CS(rr)) return "string" === typeof rr.quantized.wire ? rr : {
        quantized: gS(rr.quantized)
      };
      if (void 0 !== rr.type) return cS(rr.type);
      const Qr = wS(rr);
      return Qr && (rr[Qr] = cS(rr[Qr])), rr
    }
    const FS = [Lr, Pr, Hr, qr, Rr, gr, vr];

    function oS(rr, Sr, Qr) {
      rr[Sr] || Object.defineProperty(rr, Sr, {
        value: [],
        enumerable: !1,
        configurable: !0,
        writable: !0
      }), rr[Sr].push(Qr)
    }
    const bS = {
        addField(rr, Sr, Qr, Zr, Wr) {
          if (Sr >= 63) throw new Error(`Can't define field '${Qr}'.\nSchema instances may only have up to 63 fields.`);
          rr[Sr] = Object.assign(rr[Sr] || {}, {
            type: Zr,
            index: Sr,
            name: Qr
          }), Object.defineProperty(rr, Br, {
            value: rr[Br] || {},
            enumerable: !1,
            configurable: !0
          }), rr[Br][Qr] = Wr || {
            value: void 0,
            writable: !0,
            enumerable: !0,
            configurable: !0
          }, Object.defineProperty(rr, Or, {
            value: Sr,
            enumerable: !1,
            configurable: !0
          }), Object.defineProperty(rr, Qr, {
            value: Sr,
            enumerable: !1,
            configurable: !0
          }), "string" === typeof rr[Sr].type || CS(rr[Sr].type) || (void 0 === rr[Lr] && Object.defineProperty(rr, Lr, {
            value: [],
            enumerable: !1,
            configurable: !0
          }), rr[Lr].push(Sr));
          const ar = rr[Sr].type;
          if (ar && "object" === typeof ar && void 0 !== ar.stream) {
            if (void 0 !== ar.array) throw new Error(TS);
            rr[Sr].stream = !0, rr[gr] || Object.defineProperty(rr, gr, {
              value: [],
              enumerable: !1,
              configurable: !0,
              writable: !0
            }), rr[gr].includes(Sr) || rr[gr].push(Sr);
            const Wr = Zr?.priority;
            "function" === typeof Wr && bS.setStreamPriority(rr, Qr, Wr)
          }
        },
        setTag(rr, Sr, Qr) {
          const Zr = rr[Sr];
          if (rr[Zr].tag = Qr, rr[lr] || (Object.defineProperty(rr, lr, {
              value: [],
              enumerable: !1,
              configurable: !0
            }), Object.defineProperty(rr, Xr, {
              value: {},
              enumerable: !1,
              configurable: !0
            })), rr[lr].push(Zr), Qr < 0) rr[Xr][Qr] || (rr[Xr][Qr] = []), rr[Xr][Qr].push(Zr);
          else
            for (let Wr = Qr; Wr > 0; Wr &= Wr - 1) {
              const Sr = Wr & -Wr;
              rr[Xr][Sr] || (rr[Xr][Sr] = []), rr[Xr][Sr].push(Zr)
            }
        },
        setUnreliable(rr, Sr) {
          const Qr = rr[Sr];
          if ("string" !== typeof rr[Qr].type) throw new Error(`@unreliable cannot be applied to ref-type field "${Sr}". For ref-type fields, mark each primitive sub-field with @unreliable instead. See README "Limitations and best practices".`);
          rr[Qr].unreliable = !0, rr[Pr] || Object.defineProperty(rr, Pr, {
            value: [],
            enumerable: !1,
            configurable: !0,
            writable: !0
          }), rr[Pr].push(Qr)
        },
        setPatchOnly(rr, Sr) {
          const Qr = rr[Sr];
          if (rr[Qr].fullStateOnly) throw new Error(`field "${Sr}" cannot be both patchOnly and fullStateOnly \u2014 those are the only two delivery channels, so the field would never reach a client.`);
          rr[Qr].patchOnly = !0, oS(rr, Hr, Qr), oS(rr, qr, Qr)
        },
        setDeprecated(rr, Sr) {
          const Qr = rr[Sr];
          rr[Qr].deprecated = !0, oS(rr, qr, Qr), Object.defineProperty(rr, Qr, {
            value: rr[Qr],
            enumerable: !1,
            configurable: !0
          })
        },
        setFullStateOnly(rr, Sr) {
          const Qr = rr[Sr];
          if (rr[Qr].patchOnly) throw new Error(`field "${Sr}" cannot be both patchOnly and fullStateOnly \u2014 those are the only two delivery channels, so the field would never reach a client.`);
          rr[Qr].fullStateOnly = !0, oS(rr, Rr, Qr)
        },
        setStream(rr, Sr) {
          const Qr = rr[Sr];
          rr[Qr].stream = !0, rr[gr] || Object.defineProperty(rr, gr, {
            value: [],
            enumerable: !1,
            configurable: !0,
            writable: !0
          }), rr[gr].push(Qr)
        },
        setStreamPriority(rr, Sr, Qr) {
          const Zr = rr[Sr];
          rr[Cr] || Object.defineProperty(rr, Cr, {
            value: {},
            enumerable: !1,
            configurable: !0,
            writable: !0
          }), rr[Cr][Zr] = Qr
        },
        getStreamPriority: (rr, Sr) => rr?.[Cr]?.[Sr],
        defineField(rr, Sr, Qr, Zr, Wr) {
          const ar = iS(Wr, `${rr.name}.${Zr}`),
            {
              complexTypeKlass: jr,
              childType: Ir
            } = VS(ar);
          bS.addField(Sr, Qr, Zr, ar, yZ(Zr, Qr, Ir, jr)), Sr[Br][Zr] && Object.defineProperty(rr.prototype, Zr, Sr[Br][Zr]), ("string" === typeof ar || CS(ar)) && (Sr[vr] || Object.defineProperty(Sr, vr, {
            value: [],
            enumerable: !1,
            configurable: !0,
            writable: !0
          }), Sr[vr][Qr] = "string" === typeof ar ? SS[ar] : kS(ar.quantized))
        },
        setFields(rr, Sr) {
          const Qr = rr.prototype.constructor;
          AS.register(Qr);
          const Zr = Object.getPrototypeOf(Qr),
            Wr = Zr && Zr[Symbol.metadata],
            ar = bS.initialize(Qr);
          Qr[fr] || (Qr[fr] = lZ[fr]), Qr[Er] || (Qr[Er] = lZ[Er]), Qr[pr] || (Qr[pr] = lZ[pr]), Qr.prototype.toJSON || (Qr.prototype.toJSON = lZ.prototype.toJSON);
          let jr = ar[Or] ?? (Wr && Wr[Or]) ?? -1;
          jr++, ar[vr] || Object.defineProperty(ar, vr, {
            value: Wr?.[vr] ? [...Wr[vr]] : [],
            enumerable: !1,
            configurable: !0,
            writable: !0
          });
          for (const Ir in Sr) {
            if (void 0 !== ar[Ir]) throw new Error(`@colyseus/schema: Duplicate '${Ir}' definition on '${Qr.name||"(anonymous)"}'.`);
            bS.defineField(Qr, ar, jr, Ir, Sr[Ir]), jr++
          }
          return rr
        },
        isDeprecated: (rr, Sr) => !0 === rr[Sr].deprecated,
        initialize(rr) {
          const Sr = Object.getPrototypeOf(rr),
            Qr = Sr[Symbol.metadata];
          let Zr = rr[Symbol.metadata] ?? Object.create(null);
          if (Sr !== lZ && Zr === Qr && (Zr = Object.create(null), Qr)) {
            Object.setPrototypeOf(Zr, Qr), Object.defineProperty(Zr, Or, {
              value: Qr[Or],
              enumerable: !1,
              configurable: !0,
              writable: !0
            }), void 0 !== Qr[lr] && (Object.defineProperty(Zr, lr, {
              value: [...Qr[lr]],
              enumerable: !1,
              configurable: !0,
              writable: !0
            }), Object.defineProperty(Zr, Xr, {
              value: {
                ...Qr[Xr]
              },
              enumerable: !1,
              configurable: !0,
              writable: !0
            }));
            for (const rr of FS) {
              const Sr = Qr[rr];
              void 0 !== Sr && Object.defineProperty(Zr, rr, {
                value: [...Sr],
                enumerable: !1,
                configurable: !0,
                writable: !0
              })
            }
            Object.defineProperty(Zr, Br, {
              value: {
                ...Qr[Br]
              },
              enumerable: !1,
              configurable: !0,
              writable: !0
            })
          }
          return Object.defineProperty(rr, Symbol.metadata, {
            value: Zr,
            writable: !1,
            configurable: !0
          }), Zr
        },
        isValidInstance: rr => rr.constructor[Symbol.metadata] && Object.prototype.hasOwnProperty.call(rr.constructor[Symbol.metadata], Or),
        getFields(rr) {
          const Sr = rr[Symbol.metadata],
            Qr = {};
          for (let Zr = 0; Zr <= Sr[Or]; Zr++) Qr[Sr[Zr].name] = Sr[Zr].type;
          return Qr
        },
        hasViewTagAtIndex: (rr, Sr) => rr?.[lr]?.includes(Sr),
        hasUnreliableAtIndex: (rr, Sr) => rr?.[Pr]?.includes(Sr),
        hasPatchOnlyAtIndex: (rr, Sr) => rr?.[Hr]?.includes(Sr),
        hasFullStateOnlyAtIndex: (rr, Sr) => rr?.[Rr]?.includes(Sr),
        hasStreamAtIndex: (rr, Sr) => rr?.[gr]?.includes(Sr)
      },
      JS = (rr, Sr, Qr) => rr(Sr, Qr);
    class DS {
      dirtyLow = 0;
      dirtyHigh = 0;
      ops;
      constructor(rr) {
        this.ops = new Uint8Array(Math.max(rr + 1, 1))
      }
      record(rr, Sr) {
        const Qr = this.ops[rr];
        0 === Qr ? this.ops[rr] = Sr : (Qr === Wr.DELETE || Qr === Wr.ADD && Sr === Wr.DELETE_AND_ADD) && (this.ops[rr] = Wr.DELETE_AND_ADD), rr < 32 ? this.dirtyLow |= 1 << rr : this.dirtyHigh |= 1 << rr - 32
      }
      recordDelete(rr, Sr) {
        this.ops[rr] = Sr, rr < 32 ? this.dirtyLow |= 1 << rr : this.dirtyHigh |= 1 << rr - 32
      }
      recordRaw(rr, Sr) {
        this.record(rr, Sr)
      }
      operationAt(rr) {
        const Sr = this.ops[rr];
        return 0 === Sr ? void 0 : Sr
      }
      setOperationAt(rr, Sr) {
        this.ops[rr] = Sr
      }
      forEach(rr) {
        this.forEachWithCtx(rr, JS)
      }
      forEachWithCtx(rr, Sr) {
        let Qr = this.dirtyLow,
          Zr = this.dirtyHigh;
        const Wr = this.ops;
        for (; 0 !== Qr;) {
          const Zr = Qr & -Qr,
            ar = 31 - Math.clz32(Zr);
          Qr ^= Zr, Sr(rr, ar, Wr[ar])
        }
        for (; 0 !== Zr;) {
          const Qr = Zr & -Zr,
            ar = 31 - Math.clz32(Qr) + 32;
          Zr ^= Qr, Sr(rr, ar, Wr[ar])
        }
      }
      size() {
        return sS(this.dirtyLow) + sS(this.dirtyHigh)
      }
      has() {
        return 0 !== (this.dirtyLow | this.dirtyHigh)
      }
      reset() {
        this.dirtyLow = 0, this.dirtyHigh = 0, this.ops.fill(0)
      }
    }
    class dS {
      cU = new Map;
      pureOps = [];
      record(rr, Sr) {
        const Qr = this.cU.get(rr);
        void 0 === Qr ? this.cU.set(rr, Sr) : (Qr === Wr.DELETE || Qr === Wr.ADD && Sr === Wr.DELETE_AND_ADD) && this.cU.set(rr, Wr.DELETE_AND_ADD)
      }
      recordDelete(rr, Sr) {
        this.cU.set(rr, Sr)
      }
      recordRaw(rr, Sr) {
        this.cU.set(rr, Sr)
      }
      recordPure(rr) {
        this.pureOps.push([this.cU.size, rr])
      }
      operationAt(rr) {
        return this.cU.get(rr)
      }
      setOperationAt(rr, Sr) {
        this.cU.has(rr) && this.cU.set(rr, Sr)
      }
      forEach(rr) {
        this.forEachWithCtx(rr, JS)
      }
      forEachWithCtx(rr, Sr) {
        const Qr = this.pureOps;
        if (Qr.length > 0) {
          let Zr = 0,
            Wr = 0;
          for (const [ar, jr] of this.cU) {
            for (; Zr < Qr.length && Qr[Zr][0] <= Wr;) {
              const Wr = Qr[Zr++][1];
              Sr(rr, -Wr, Wr)
            }
            Sr(rr, ar, jr), Wr++
          }
          for (; Zr < Qr.length;) {
            const Wr = Qr[Zr++][1];
            Sr(rr, -Wr, Wr)
          }
        } else
          for (const [Zr, Wr] of this.cU) Sr(rr, Zr, Wr)
      }
      size() {
        return this.cU.size + this.pureOps.length
      }
      has() {
        return this.cU.size > 0 || this.pureOps.length > 0
      }
      reset() {
        this.cU.clear(), this.pureOps.length = 0
      }
      shift(rr) {
        const Sr = new Map;
        for (const [Qr, Zr] of this.cU) Sr.set(Qr + rr, Zr);
        this.cU = Sr
      }
    }

    function sS(rr) {
      return 16843009 * ((rr = (858993459 & (rr -= rr >>> 1 & 1431655765)) + (rr >>> 2 & 858993459)) + (rr >>> 4) & 252645135) >>> 24
    }

    function uS(rr) {
      if (void 0 === rr) return 0;
      let Sr = 0;
      for (let Qr = 0, Zr = rr.length; Qr < Zr; Qr++) {
        const Zr = rr[Qr];
        Zr < 32 && (Sr |= 1 << Zr)
      }
      return Sr
    }

    function rQ(rr) {
      const Sr = rr.constructor;
      if (Object.prototype.hasOwnProperty.call(Sr, Tr)) return Sr[Tr];
      const Qr = Sr[Symbol.metadata],
        Zr = bS.isValidInstance(rr),
        Wr = (Qr?.[lr]?.length ?? 0) > 0,
        ar = function(rr) {
          const Sr = [],
            Qr = [],
            Zr = [],
            Wr = [],
            ar = rr?.[Or];
          if (void 0 === ar) return {
            names: Sr,
            types: Qr,
            tags: Zr,
            encoders: Wr
          };
          const jr = rr[vr];
          for (let Ir = 0; Ir <= ar; Ir++) {
            const ar = rr[Ir];
            void 0 !== ar ? (Sr[Ir] = ar.name, Qr[Ir] = ar.type, Zr[Ir] = ar.tag, Wr[Ir] = jr?.[Ir]) : (Sr[Ir] = void 0, Qr[Ir] = void 0, Zr[Ir] = void 0, Wr[Ir] = void 0)
          }
          return {
            names: Sr,
            types: Qr,
            tags: Zr,
            encoders: Wr
          }
        }(Qr),
        jr = Zr && !Wr ? void 0 : Sr[xr],
        Ir = {
          encoder: Sr[Er],
          filter: jr,
          metadata: Qr,
          isSchema: Zr,
          filterBitmask: Zr ? uS(Qr?.[lr]) : 0,
          hasAnyFullStateOnly: (Qr?.[Rr]?.length ?? 0) > 0,
          hasAnyUnreliable: (Qr?.[Pr]?.length ?? 0) > 0,
          hasAnyStream: (Qr?.[gr]?.length ?? 0) > 0,
          hasAnyView: Wr,
          fullStateOnlyBitmask: uS(Qr?.[Rr]),
          unreliableBitmask: uS(Qr?.[Pr]),
          streamBitmask: uS(Qr?.[gr]),
          names: ar.names,
          types: ar.types,
          tags: ar.tags,
          encoders: ar.encoders
        };
      return Object.defineProperty(Sr, Tr, {
        value: Ir,
        enumerable: !1,
        writable: !0,
        configurable: !0
      }), Ir
    }

    function SQ(rr, Sr) {
      if (void 0 !== rr.parentRef && Sr(rr.parentRef, rr._parentIndex)) return !0;
      for (let Qr = rr.extraParents; void 0 !== Qr; Qr = Qr.next)
        if (Sr(Qr.ref, Qr.index)) return !0;
      return !1
    }
    const QQ = (rr, Sr) => {
        rr.isFieldUnreliable(Sr) ? rr.ensureUnreliableRecorder().record(Sr, Wr.ADD) : rr.record(Sr, Wr.ADD)
      },
      ZQ = (rr, Sr) => rr(Sr);

    function WQ(rr, Sr, Qr) {
      const Zr = rr.refTarget;
      if (void 0 !== Zr[hr]) {
        if (rr.isPatchOnly) return;
        if (Array.isArray(Zr.items)) {
          const rr = Zr.items;
          for (let Zr = 0, Wr = rr.length; Zr < Wr; Zr++) void 0 !== rr[Zr] && Qr(Sr, Zr)
        } else if (void 0 !== Zr.journal)
          for (const [rr, Wr] of Zr.journal.keyByIndex) Zr.$items.has(Wr) && Qr(Sr, rr);
        else if (void 0 !== Zr.$items)
          for (const rr of Zr.$items.keys()) Qr(Sr, rr)
      } else {
        const Wr = rr.metadata;
        if (!Wr) return;
        const ar = Wr[Or] ?? -1,
          jr = Wr[qr],
          Ir = rr.encDescriptor.names;
        for (let rr = 0; rr <= ar; rr++) {
          const Wr = Ir[rr];
          if (void 0 === Wr) continue;
          if (jr && jr.includes(rr)) continue;
          const ar = Zr[Wr];
          void 0 !== ar && null !== ar && Qr(Sr, rr)
        }
      }
    }

    function aQ(rr, Sr, Qr, Zr) {
      ! function(rr, Sr, Qr) {
        if (!Sr) return;
        const Zr = Sr[tr],
          Wr = !Zr._isSchema;
        let ar;
        Wr ? (Sr = Zr.parent, Qr = Zr.parentIndex, ar = Sr?.[tr].metadata) : ar = Zr.metadata;
        const jr = (ar?.[Hr]?.includes(Qr) ? TQ : 0) | (ar?.[Rr]?.includes(Qr) ? vQ : 0),
          Ir = Zr.flags & lQ | jr,
          fr = rr.flags;
        rr.flags = fr | Ir;
        Ir & ~fr & vQ && (rr.reset(), rr.unreliableRecorder?.reset());
        const Er = rr.root?.types;
        if (!Er?.hasFilters) return;
        const pr = ar?.[lr]?.includes(Qr) ?? !1,
          xr = ar?.[gr]?.includes(Qr) ?? !1,
          mr = Zr.isFiltered || pr || xr;
        if (rr.isFiltered = mr, xr && !Wr) {
          rr.isStreamCollection = !0;
          const Sr = OS(rr.ref);
          if (void 0 === Sr.priority) {
            const rr = bS.getStreamPriority(ar, Qr);
            void 0 !== rr && (Sr.priority = rr)
          }
          rr.root?.registerStream(rr.ref)
        }
        if (mr) {
          const Sr = IQ(rr);
          rr.isVisibilitySharedWithParent = Zr.isFiltered && Sr && !xr && (!pr || Wr && ar[Qr].tag !== UZ)
        }
      }(rr, Sr, Qr), rr.isFullStateOnly || (rr.has() && rr.root?.enqueueChangeTree(rr), rr.unreliableRecorder?.has() && rr.root?.enqueueUnreliable(rr), rr.has() || rr.unreliableRecorder?.has() || rr.root?.enqueueChangeTree(rr))
    }

    function jQ(rr) {
      const Sr = rr.pendingFilterRefresh;
      for (let Qr = 0; Qr < Sr.length; Qr++) {
        const rr = Sr[Qr];
        0 !== (rr.flags & LQ) && fQ(rr)
      }
      Sr.length = 0
    }

    function IQ(rr) {
      return rr._isSchema || "string" !== typeof rr.refTarget[hr]
    }

    function fQ(rr) {
      rr.flags &= ~LQ;
      const Sr = rr.root;
      if (void 0 === Sr || void 0 === rr.parentRef) return;
      const Qr = IQ(rr);
      let Zr = NQ(rr, rr.parentRef, rr._parentIndex, Qr);
      for (let ar = rr.extraParents; void 0 !== ar && Zr !== mQ; ar = ar.next) Zr |= NQ(rr, ar.ref, ar.index, Qr);
      if (0 === Zr) return;
      rr.isVisibilitySharedWithParent = 0 !== (Zr & xQ);
      const Wr = 0 === (Zr & pQ);
      Wr !== rr.isFiltered && (rr.isFiltered = Wr, Wr || rr.isFullStateOnly || (rr.forEachLiveWithCtx(rr, QQ), rr.has() && Sr.enqueueChangeTree(rr), rr.unreliableRecorder?.has() && Sr.enqueueUnreliable(rr)), rr.forEachChildWithCtx(rr, UQ))
    }
    const EQ = 1,
      pQ = 2,
      xQ = 4,
      mQ = EQ | pQ | xQ;

    function NQ(rr, Sr, Qr, Zr) {
      const Wr = Sr[tr];
      if (Wr.root !== rr.root || ! function(rr, Sr, Qr) {
          const Zr = Sr.refTarget;
          if (Sr.isArray) {
            const Sr = Zr.items,
              Wr = Sr[Qr];
            if (void 0 !== Wr && Wr[tr] === rr) return !0;
            for (let Qr = 0, Zr = Sr.length; Qr < Zr; Qr++) {
              const Zr = Sr[Qr];
              if (void 0 !== Zr && Zr[tr] === rr) return !0
            }
            return !1
          }
          const Wr = Sr.getValue(Qr);
          return void 0 !== Wr && Wr[tr] === rr
        }(rr, Wr, Qr)) return 0;
      Wr.flags & LQ && fQ(Wr);
      let ar = EQ;
      if (Wr._isSchema) {
        void 0 !== Wr.encDescriptor.tags[Qr] || Wr.isFieldStream(Qr) || (Wr.isFiltered ? Zr && (ar |= xQ) : ar |= pQ)
      } else if (Wr.isFiltered) {
        if (Zr && !Wr.isStreamCollection) {
          const rr = Wr.parent?.[tr];
          (rr?._isSchema ? rr.encDescriptor.tags[Wr.parentIndex] : void 0) !== UZ && (ar |= xQ)
        }
      } else ar |= pQ;
      return ar
    }
    const UQ = (rr, Sr, Qr) => {
      fQ(Sr)
    };

    function tQ(rr, Sr, Qr, Zr) {
      if (rr.addParent(Sr, Zr), !Qr) return;
      const Wr = Qr.add(rr);
      Qr !== rr.root && (rr.root = Qr, aQ(rr, Sr, Zr));
      const ar = Sr?.[tr];
      if (void 0 !== ar && void 0 !== ar.subscribedViews && void 0 !== Sr[hr] && function(rr, Sr, Qr, Zr) {
          const Wr = rr.subscribedViews;
          if (void 0 === Wr) return;
          const ar = rr.isStreamCollection,
            jr = ar ? rr.ref : void 0,
            Ir = ar ? void 0 : Qr[tr];
          for (let fr = 0, Er = Wr.length; fr < Er; fr++) {
            let rr = Wr[fr];
            for (; 0 !== rr;) {
              const Qr = rr & -rr;
              rr ^= Qr;
              const Er = 32 * fr + (31 - Math.clz32(Qr)),
                pr = Zr.activeViews.get(Er),
                xr = pr?.deref();
              void 0 !== xr ? ar ? HS(jr, Er, Sr) : void 0 !== Ir && xr.markVisible(Ir) : Wr[fr] &= ~Qr
            }
          }
        }(ar, Zr, rr.ref, Qr), Wr) {
        let Sr = nQ[eQ];
        void 0 === Sr && (Sr = {
          parentRef: void 0,
          root: void 0
        }, nQ[eQ] = Sr), Sr.parentRef = rr.ref, Sr.root = Qr, eQ++, zQ(rr, Sr, KQ), eQ--
      }
    }

    function hQ(rr, Sr, Qr) {
      rr(Sr, Qr)
    }

    function zQ(rr, Sr, Qr) {
      const Zr = rr.refTarget;
      if (Zr[hr]) {
        if ("string" !== typeof Zr[hr]) {
          const rr = Zr.items;
          if (void 0 !== rr)
            for (let Zr = 0, Wr = rr.length; Zr < Wr; Zr++) {
              const Wr = rr[Zr];
              Wr && Qr(Sr, Wr[tr], Zr)
            } else {
              const rr = Zr.$items,
                Wr = Zr._collectionIndexes;
              for (const Zr of rr.keys()) {
                const ar = rr.get(Zr);
                ar && Qr(Sr, ar[tr], Wr?.[Zr] ?? Zr)
              }
            }
        }
      } else {
        const Wr = rr.metadata,
          ar = Wr?.[Lr];
        if (!ar) return;
        const jr = rr.encDescriptor.names;
        for (let rr = 0, Ir = ar.length; rr < Ir; rr++) {
          const Wr = ar[rr],
            Ir = Zr[jr[Wr]];
          Ir && Qr(Sr, Ir[tr], Wr)
        }
      }
    }

    function YQ(rr, Sr, Qr) {
      Sr.root !== rr ? Sr.setRoot(rr) : rr.add(Sr)
    }
    const nQ = [];
    let eQ = 0;

    function KQ(rr, Sr, Qr) {
      if (Sr.root === rr.root) return rr.root.add(Sr), void rr.root.moveNextToParent(Sr);
      Sr.setParent(rr.parentRef, rr.root, Qr)
    }

    function yQ(rr, Sr, Qr) {
      const Zr = (3 & Qr) << 3;
      return Qr < 4 ? rr >>> Zr & 255 : Sr >>> Zr & 255
    }
    const BQ = (rr, Sr, Qr) => rr(Sr, Qr);
    const TQ = 16,
      vQ = 32,
      OQ = 128,
      LQ = 256,
      lQ = TQ | vQ;
    class XQ {
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
      set isFiltered(rr) {
        this.flags = rr ? 1 | this.flags : -2 & this.flags
      }
      get isVisibilitySharedWithParent() {
        return 0 !== (2 & this.flags)
      }
      set isVisibilitySharedWithParent(rr) {
        this.flags = rr ? 2 | this.flags : -3 & this.flags
      }
      get isNew() {
        return 0 !== (4 & this.flags)
      }
      set isNew(rr) {
        this.flags = rr ? 4 | this.flags : -5 & this.flags
      }
      get isUnreliable() {
        return 0 !== (8 & this.flags)
      }
      set isUnreliable(rr) {
        this.flags = rr ? 8 | this.flags : -9 & this.flags
      }
      get isPatchOnly() {
        return 0 !== (this.flags & TQ)
      }
      set isPatchOnly(rr) {
        this.flags = rr ? this.flags | TQ : this.flags & ~TQ
      }
      get isFullStateOnly() {
        return 0 !== (this.flags & vQ)
      }
      set isFullStateOnly(rr) {
        this.flags = rr ? this.flags | vQ : this.flags & ~vQ
      }
      get isStreamCollection() {
        return 0 !== (64 & this.flags)
      }
      set isStreamCollection(rr) {
        this.flags = rr ? 64 | this.flags : -65 & this.flags
      }
      get needsRestage() {
        return 0 !== (this.flags & OQ)
      }
      set needsRestage(rr) {
        this.flags = rr ? this.flags | OQ : -129 & this.flags
      }
      get hasFilteredFields() {
        return this.isFiltered || this.encDescriptor.hasAnyView
      }
      ensureUnreliableRecorder() {
        return void 0 === this.unreliableRecorder && (this.unreliableRecorder = this._isSchema ? new DS(this.metadata?.[Or] ?? 0) : new dS), this.unreliableRecorder
      }
      isFieldUnreliable(rr) {
        const Sr = this.encDescriptor;
        return !!Sr.hasAnyUnreliable && (rr < 32 ? 0 !== (Sr.unreliableBitmask & 1 << rr) : bS.hasUnreliableAtIndex(this.metadata, rr))
      }
      isFieldFullStateOnly(rr) {
        if (this.isFullStateOnly) return !0;
        const Sr = this.encDescriptor;
        return !!Sr.hasAnyFullStateOnly && (rr < 32 ? 0 !== (Sr.fullStateOnlyBitmask & 1 << rr) : bS.hasFullStateOnlyAtIndex(this.metadata, rr))
      }
      isFieldStream(rr) {
        const Sr = this.encDescriptor;
        return !!Sr.hasAnyStream && (rr < 32 ? 0 !== (Sr.streamBitmask & 1 << rr) : bS.hasStreamAtIndex(this.metadata, rr))
      }
      constructor(rr) {
        let Sr = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : rr;
        this.ref = rr, this.refTarget = Sr;
        const Qr = rQ(rr);
        this.encDescriptor = Qr, this.metadata = Qr.metadata;
        const Zr = Qr.isSchema;
        if (this._isSchema = Zr, this.ops = void 0, this.collDirty = void 0, this.collPureOps = void 0, Zr) {
          const rr = this.metadata?.[Or] ?? 0;
          rr > 7 && (this.ops = new Uint8Array(rr + 1))
        } else this.collDirty = new Map
      }
      _opAt(rr) {
        const Sr = this.ops;
        if (void 0 !== Sr) return Sr[rr];
        const Qr = (3 & rr) << 3;
        return rr < 4 ? this.opsLow >>> Qr & 255 : this.opsHigh >>> Qr & 255
      }
      _opPut(rr, Sr) {
        const Qr = this.ops;
        if (void 0 !== Qr) return void(Qr[rr] = Sr);
        const Zr = (3 & rr) << 3,
          Wr = ~(255 << Zr);
        rr < 4 ? this.opsLow = this.opsLow & Wr | Sr << Zr : this.opsHigh = this.opsHigh & Wr | Sr << Zr
      }
      _markDirty(rr) {
        rr < 32 ? this.dirtyLow |= 1 << rr : this.dirtyHigh |= 1 << rr - 32
      }
      record(rr, Sr) {
        if (this._isSchema) {
          const Qr = this._opAt(rr);
          0 === Qr ? this._opPut(rr, Sr) : (Qr === Wr.DELETE || Qr === Wr.ADD && Sr === Wr.DELETE_AND_ADD) && this._opPut(rr, Wr.DELETE_AND_ADD), this._markDirty(rr)
        } else {
          const Qr = this.collDirty,
            Zr = Qr.get(rr);
          let ar;
          ar = void 0 === Zr ? Sr : Zr === Wr.DELETE || Zr === Wr.ADD && Sr === Wr.DELETE_AND_ADD ? Wr.DELETE_AND_ADD : Zr, Qr.set(rr, ar)
        }
      }
      recordDelete(rr, Sr) {
        this._isSchema ? (this._opPut(rr, Sr), this._markDirty(rr)) : this.collDirty.set(rr, Sr)
      }
      recordRaw(rr, Sr) {
        this._isSchema ? (this._opPut(rr, Sr), this._markDirty(rr)) : this.collDirty.set(rr, Sr)
      }
      recordPure(rr) {
        if (this._isSchema) throw new Error("ChangeTree (Schema): pure operations are not supported");
        (this.collPureOps ??= []).push([this.collDirty.size, rr])
      }
      operationAt(rr) {
        if (this._isSchema) {
          const Sr = this._opAt(rr);
          return 0 === Sr ? void 0 : Sr
        }
        return this.collDirty.get(rr)
      }
      setOperationAt(rr, Sr) {
        if (this._isSchema) this._opPut(rr, Sr);
        else {
          const Qr = this.collDirty;
          Qr.has(rr) && Qr.set(rr, Sr)
        }
      }
      forEach(rr) {
        this.forEachWithCtx(rr, BQ)
      }
      forEachWithCtx(rr, Sr) {
        if (this._isSchema) {
          let Qr = this.dirtyLow,
            Zr = this.dirtyHigh;
          const Wr = this.ops;
          if (void 0 !== Wr) {
            for (; 0 !== Qr;) {
              const Zr = Qr & -Qr,
                ar = 31 - Math.clz32(Zr);
              Qr ^= Zr, Sr(rr, ar, Wr[ar])
            }
            for (; 0 !== Zr;) {
              const Qr = Zr & -Zr,
                ar = 31 - Math.clz32(Qr) + 32;
              Zr ^= Qr, Sr(rr, ar, Wr[ar])
            }
          } else {
            const Zr = this.opsLow,
              Wr = this.opsHigh;
            for (; 0 !== Qr;) {
              const ar = Qr & -Qr,
                jr = 31 - Math.clz32(ar);
              Qr ^= ar, Sr(rr, jr, yQ(Zr, Wr, jr))
            }
          }
          return
        }
        const Qr = this.collDirty,
          Zr = this.collPureOps;
        if (void 0 !== Zr && Zr.length > 0) {
          let Wr = 0,
            ar = 0;
          for (const [jr, Ir] of Qr) {
            for (; Wr < Zr.length && Zr[Wr][0] <= ar;) {
              const Qr = Zr[Wr++][1];
              Sr(rr, -Qr, Qr)
            }
            Sr(rr, jr, Ir), ar++
          }
          for (; Wr < Zr.length;) {
            const Qr = Zr[Wr++][1];
            Sr(rr, -Qr, Qr)
          }
        } else
          for (const [Wr, ar] of Qr) Sr(rr, Wr, ar)
      }
      size() {
        return this._isSchema ? sS(this.dirtyLow) + sS(this.dirtyHigh) : this.collDirty.size + (this.collPureOps?.length ?? 0)
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
      insertAt(rr, Sr) {
        if (this._isSchema) throw new Error("ChangeTree (Schema): insertAt is not supported");
        const Qr = this.collDirty,
          Zr = new Map,
          ar = !this.paused && !this.isFullStateOnly;
        if (rr > 0)
          for (const [Wr, jr] of Qr) Wr < rr && Zr.set(Wr, jr);
        if (ar)
          for (let jr = 0; jr < Sr; jr++) Zr.set(rr + jr, Wr.ADD);
        for (const [Wr, jr] of Qr) Wr >= rr && Zr.set(Wr + Sr, jr);
        this.collDirty = Zr, ar && this.root?.enqueueChangeTree(this)
      }
      removeAt(rr, Sr) {
        if (this._isSchema) throw new Error("ChangeTree (Schema): removeAt is not supported");
        const Qr = this.collDirty,
          Zr = rr + Sr;
        let Wr = !1;
        for (const jr of Qr.keys())
          if (jr >= Zr) {
            Wr = !0;
            break
          } if (!Wr) {
          for (let Sr = rr; Sr < Zr; Sr++) Qr.delete(Sr);
          return
        }
        const ar = new Map;
        for (const [jr, Ir] of Qr) jr < rr ? ar.set(jr, Ir) : jr >= Zr && ar.set(jr - Sr, Ir);
        this.collDirty = ar
      }
      unshift(rr) {
        this.insertAt(0, rr)
      }
      setRoot(rr) {
        ! function(rr, Sr) {
          rr.root = Sr;
          const Qr = Sr.add(rr);
          aQ(rr, rr.parent, rr.parentIndex), Qr && zQ(rr, Sr, YQ)
        }(this, rr)
      }
      setParent(rr, Sr, Qr) {
        tQ(this, rr, Sr, Qr)
      }
      forEachChild(rr) {
        zQ(this, rr, hQ)
      }
      forEachChildWithCtx(rr, Sr) {
        zQ(this, rr, Sr)
      }
      forEachLive(rr) {
        WQ(this, rr, ZQ)
      }
      forEachLiveWithCtx(rr, Sr) {
        WQ(this, rr, Sr)
      }
      operation(rr) {
        this.paused || this.isFullStateOnly || (this.recordPure(rr), this.root?.enqueueChangeTree(this))
      }
      _routeAndRecord(rr, Sr, Qr) {
        if (!this.paused && !this.isFieldFullStateOnly(rr)) {
          if (this.isFieldUnreliable(rr) && !this.isNew) {
            const Zr = this.ensureUnreliableRecorder();
            return Qr ? Zr.recordRaw(rr, Sr) : Zr.record(rr, Sr), void this.root?.enqueueUnreliable(this)
          }
          Qr ? this.recordRaw(rr, Sr) : this.record(rr, Sr), this.root?.enqueueChangeTree(this)
        }
      }
      change(rr) {
        let Sr = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Wr.ADD;
        this._routeAndRecord(rr, Sr, !1)
      }
      indexedOperation(rr, Sr) {
        this._routeAndRecord(rr, Sr, !0)
      }
      getChange(rr) {
        return this.operationAt(rr)
      }
      pause() {
        this.paused = !0
      }
      resume() {
        this.paused = !1
      }
      untracked(rr) {
        const Sr = this.paused;
        this.paused = !0;
        try {
          return rr()
        } finally {
          this.paused = Sr
        }
      }
      markDirty(rr) {
        let Sr = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Wr.ADD;
        const Qr = this.paused;
        this.paused = !1;
        try {
          this.change(rr, Sr)
        } finally {
          this.paused = Qr
        }
      }
      getValue(rr) {
        let Sr = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return this.refTarget[mr](rr, Sr)
      }
      delete(rr, Sr) {
        if (void 0 === rr) {
          try {
            throw new Error(`@colyseus/schema ${this.ref.constructor.name}: trying to delete non-existing index '${rr}'`)
          } catch (aW) {
            console.warn(aW)
          }
          return
        }
        if (this.paused || this.isFieldFullStateOnly(rr)) return this.getValue(rr);
        const Qr = this.isFieldUnreliable(rr) && !this.isNew;
        Qr ? this.ensureUnreliableRecorder().recordDelete(rr, Sr ?? Wr.DELETE) : this.recordDelete(rr, Sr ?? Wr.DELETE);
        const Zr = this.getValue(rr);
        return Zr && Zr[tr] && this.root?.remove(Zr[tr]), Qr ? this.root?.enqueueUnreliable(this) : this.root?.enqueueChangeTree(this), Zr
      }
      endEncode() {
        this.reset(), this.changesNode = void 0, this._isSchema || this.refTarget[Yr]?.(), this.isNew = !1
      }
      endEncodeUnreliable() {
        this.unreliableRecorder?.reset(), this.unreliableChangesNode = void 0, this._isSchema || this.refTarget[Yr]?.()
      }
      discard() {
        this._isSchema || this.refTarget[Yr]?.(), this.reset(), this.unreliableRecorder?.reset()
      }
      discardAll() {
        const rr = rr => {
          if (rr < 0) return;
          const Sr = this.getValue(rr);
          Sr && Sr[tr] && Sr[tr].discardAll()
        };
        this.forEach(rr), this.unreliableRecorder?.forEach(rr), this.discard()
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
      addParent(rr, Sr) {
        ! function(rr, Sr, Qr) {
          if (rr.parentRef) {
            if (rr.parentRef[tr] === Sr[tr]) return void(rr._parentIndex = Qr);
            if (SQ(rr, ((rr, Qr) => rr[tr] === Sr[tr]))) return void(rr._parentIndex = Qr)
          }
          void 0 === rr.parentRef ? (rr.parentRef = Sr, rr._parentIndex = Qr) : (rr.extraParents = {
            ref: rr.parentRef,
            index: rr._parentIndex,
            next: rr.extraParents
          }, rr.parentRef = Sr, rr._parentIndex = Qr)
        }(this, rr, Sr)
      }
      setParentIndex(rr, Sr) {
        ! function(rr, Sr, Qr) {
          if (void 0 !== rr.extraParents)
            if (rr.parentRef[tr] !== Sr[tr]) {
              for (let Zr = rr.extraParents; void 0 !== Zr; Zr = Zr.next)
                if (Zr.ref[tr] === Sr[tr]) return void(Zr.index = Qr)
            } else rr._parentIndex = Qr;
          else rr._parentIndex = Qr
        }(this, rr, Sr)
      }
      removeParent() {
        return function(rr, Sr) {
          if (rr.parentRef && rr.parentRef[tr] === Sr[tr]) return rr.extraParents ? (rr.parentRef = rr.extraParents.ref, rr._parentIndex = rr.extraParents.index, rr.extraParents = rr.extraParents.next) : (rr.parentRef = void 0, rr._parentIndex = void 0), !0;
          let Qr = rr.extraParents,
            Zr = null;
          for (; Qr;) {
            if (Qr.ref[tr] === Sr[tr]) return Zr ? Zr.next = Qr.next : rr.extraParents = Qr.next, !0;
            Zr = Qr, Qr = Qr.next
          }
          return void 0 === rr.parentRef
        }(this, arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.parent)
      }
      findParent(rr) {
        return function(rr, Sr) {
          if (void 0 !== rr.parentRef && Sr(rr.parentRef, rr._parentIndex)) return {
            ref: rr.parentRef,
            index: rr._parentIndex
          };
          for (let Qr = rr.extraParents; void 0 !== Qr; Qr = Qr.next)
            if (Sr(Qr.ref, Qr.index)) return {
              ref: Qr.ref,
              index: Qr.index
            }
        }(this, rr)
      }
      hasParent(rr) {
        return SQ(this, rr)
      }
      indexInParent(rr) {
        return function(rr, Sr) {
          if (rr.parentRef && rr.parentRef[tr] === Sr[tr]) return rr._parentIndex;
          for (let Qr = rr.extraParents; void 0 !== Qr; Qr = Qr.next)
            if (Qr.ref[tr] === Sr[tr]) return Qr.index
        }(this, rr)
      }
      getAllParents() {
        return function(rr) {
          const Sr = [];
          rr.parentRef && Sr.push({
            ref: rr.parentRef,
            index: rr._parentIndex
          });
          let Qr = rr.extraParents;
          for (; Qr;) Sr.push({
            ref: Qr.ref,
            index: Qr.index
          }), Qr = Qr.next;
          return Sr
        }(this)
      }
    }
    class PQ {
      ref;
      root = void 0;
      parentRef = void 0;
      paused = !1;
      isNew = !1;
      flags = 0;
      constructor(rr) {
        this.ref = rr
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
      untracked(rr) {
        return rr()
      }
      markDirty() {}
      forEachChild(rr) {
        const Sr = this.ref;
        if (Sr[hr]) {
          if ("string" !== typeof Sr[hr])
            for (const [Qr, Zr] of Sr.entries()) Zr && rr(Zr[tr], Sr._collectionIndexes?.[Qr] ?? Qr);
          return
        }
        const Qr = Sr.constructor,
          Zr = Qr?.[Symbol.metadata];
        if (!Zr) return;
        const Wr = Zr[Lr] ?? [];
        for (let ar = 0; ar < Wr.length; ar++) {
          const Qr = Wr[ar],
            jr = Sr[Zr[Qr].name];
          jr && rr(jr[tr], Qr)
        }
      }
      forEachChildWithCtx(rr, Sr) {
        this.forEachChild(((Qr, Zr) => Sr(rr, Qr, Zr)))
      }
      forEachLive() {}
      forEachLiveWithCtx() {}
      forEach() {}
    }

    function HQ(rr) {
      let Sr = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : rr;
      var Qr;
      Object.defineProperty(rr, tr, {
        value: (Qr = Sr, new PQ(Qr)),
        enumerable: !1,
        writable: !0
      })
    }

    function qQ(rr, Sr, Qr, Zr, ar, jr, fr) {
      void 0 !== fr ? fr(Sr, Zr, jr) : "string" === typeof Qr ? SS[Qr]?.(Sr, Zr, jr) : null != Qr[Symbol.metadata] ? (SS.number(Sr, Zr[Ir], jr), (ar & Wr.ADD) === Wr.ADD && rr.tryEncodeTypeId(Sr, Qr, Zr.constructor, jr)) : SS.number(Sr, Zr[Ir], jr)
    }
    const RQ = function(rr, Sr, Qr, Zr, ar, jr, Ir, fr) {
        if (Sr[jr.offset++] = 255 & (Zr | ar), ar === Wr.DELETE) return;
        const Er = Qr.encDescriptor,
          pr = Qr.ref,
          xr = pr[Kr][Zr] ?? pr[Er.names[Zr]];
        qQ(rr, Sr, Er.types[Zr], xr, ar, jr, Er.encoders[Zr])
      },
      gQ = function(rr, Sr, Qr, Zr, ar, jr) {
        if (Sr[jr.offset++] = 255 & ar, SS.number(Sr, Zr, jr), ar === Wr.DELETE) return;
        const Ir = Qr.ref;
        if ((ar & Wr.ADD) === Wr.ADD) {
          const rr = Ir.$indexes.get(Zr);
          SS.string(Sr, rr, jr)
        }
        qQ(rr, Sr, Ir[hr], Ir[mr](Zr), ar, jr)
      },
      CQ = function(rr, Sr, Qr, Zr, ar, jr) {
        if (Sr[jr.offset++] = 255 & ar, SS.number(Sr, Zr, jr), ar === Wr.DELETE) return;
        const Ir = Qr.ref;
        qQ(rr, Sr, Ir[hr], Ir[mr](Zr), ar, jr)
      },
      MQ = function(rr, Sr, Qr, Zr, ar, jr) {
        const Ir = Qr.ref;
        (ar & Wr.ADD) === Wr.ADD && "function" === typeof Ir.set ? gQ(rr, Sr, Qr, Zr, ar, jr) : CQ(rr, Sr, Qr, Zr, ar, jr)
      },
      GQ = function(rr, Sr, Qr, Zr, ar, jr, fr, Er) {
        const pr = Qr.refTarget,
          xr = pr[hr],
          Nr = "string" !== typeof xr;
        let Ur;
        if (Er && Qr.isFiltered && Nr) {
          const rr = pr.tmpItems[Zr];
          if (!rr) return;
          if (Ur = rr[Ir], ar === Wr.DELETE) ar = Wr.DELETE_BY_REFID;
          else if ((ar & Wr.ADD) === Wr.ADD) ar = Wr.ADD_BY_REFID;
          else if ((ar & Wr.MOVE) === Wr.MOVE) return
        } else if (ar === Wr.DELETE && Nr) {
          const rr = pr.tmpItems[Zr];
          if (!rr) return;
          Ur = rr[Ir], ar = Wr.DELETE_BY_REFID
        } else Ur = Zr;
        if (Sr[jr.offset++] = 255 & ar, SS.number(Sr, Ur, jr), ar === Wr.DELETE || ar === Wr.DELETE_BY_REFID) return;
        qQ(rr, Sr, xr, pr[mr](Zr, fr), ar, jr)
      };

    function kQ(rr, Sr, Qr, Zr, ar, jr, fr) {
      const Er = rr.resyncVisited;
      let pr = Er.get(rr.currentRefId);
      if (void 0 === pr && Er.set(rr.currentRefId, pr = new Set), pr.add(Zr), void 0 !== ar && Qr === Wr.ADD && ar !== jr) {
        const Qr = ar[Ir];
        void 0 !== Qr && (rr.root.removeRef(Qr), fr?.push({
          ref: Sr,
          refId: rr.currentRefId,
          op: Wr.DELETE,
          dynamicIndex: Zr,
          value: void 0,
          previousValue: ar
        }))
      }
    }

    function AQ(rr, Sr, Qr, Zr) {
      const Wr = Sr[Ir];
      if (void 0 === Wr || Qr.has(Wr)) return;
      Qr.add(Wr);
      const ar = Sr.constructor[Symbol.metadata],
        jr = ar?.[Lr];
      if (void 0 === jr) return;
      const fr = ar[Hr];
      for (let Ir = 0; Ir < jr.length; Ir++) {
        const Wr = jr[Ir];
        if (void 0 !== fr && fr.includes(Wr)) continue;
        const Er = ar[Wr],
          pr = Sr[Er.name];
        pr && (lZ.is(Er.type) ? AQ(rr, pr, Qr, Zr) : VQ(rr, pr, Qr, Zr))
      }
    }

    function VQ(rr, Sr, Qr, Zr) {
      const ar = Sr[zr] ?? Sr,
        jr = ar[Ir];
      if (void 0 === jr || Qr.has(jr)) return;
      Qr.add(jr);
      const fr = rr.resyncVisited.get(jr);
      if (void 0 === fr) return;
      const Er = rr.root;
      ar[Ur](fr, ((rr, Qr) => {
        Zr?.push({
          ref: Sr,
          refId: jr,
          op: Wr.DELETE,
          dynamicIndex: Qr,
          value: void 0,
          previousValue: rr
        });
        const ar = rr?.[Ir];
        void 0 !== ar && Er.removeRef(ar)
      }), (Sr => {
        lZ.isSchema(Sr) && AQ(rr, Sr, Qr, Zr)
      }))
    }
    const iQ = 1,
      wQ = 2,
      cQ = 3,
      FQ = 4,
      oQ = 5;

    function bQ(rr, Sr, Qr, Zr, ar, jr, fr, Er, pr) {
      const xr = rr.root;
      let mr;
      if ((Sr & Wr.DELETE) === Wr.DELETE) {
        const rr = ar?.[Ir];
        void 0 !== rr && xr.removeRef(rr), Sr !== Wr.DELETE_AND_ADD && Qr[Nr](Zr), mr = void 0
      }
      if (Sr === Wr.DELETE);
      else if ("string" === typeof jr) mr = nS[jr](fr, Er);
      else if (CS(jr)) mr = function(rr, Sr, Qr) {
        return GS(rr, (0, nS[rr.wire])(Sr, Qr))
      }(jr.quantized, fr, Er);
      else if (lZ.is(jr)) {
        const Qr = nS.number(fr, Er);
        if (mr = xr.refs.get(Qr), (Sr & Wr.ADD) === Wr.ADD) {
          const Zr = rr.getInstanceType(fr, Er, jr);
          mr || (mr = rr.createInstanceOfType(Zr)), xr.addRef(Qr, mr, mr !== ar || Sr === Wr.DELETE_AND_ADD && mr === ar)
        }
      } else {
        const Qr = (Ur = Object.keys(jr)[0], eS[Ur]),
          Zr = nS.number(fr, Er);
        null !== rr.resyncVisited && function(rr, Sr) {
          const Qr = rr.resyncVisited;
          Qr.has(Sr) || Qr.set(Sr, new Set)
        }(rr, Zr);
        const Nr = xr.refs.has(Zr) ? ar || xr.refs.get(Zr) : Qr.constructor.initializeForDecoder();
        if (mr = Nr.clone(!0), mr[hr] = Object.values(jr)[0], ar) {
          let rr = ar[Ir];
          if (void 0 !== rr && Zr !== rr) {
            (Sr & Wr.DELETE) !== Wr.DELETE && xr.removeRef(rr);
            const Qr = ar.entries();
            let Zr;
            for (;
              (Zr = Qr.next()) && !Zr.done;) {
              const [Sr, Qr] = Zr.value;
              "object" === typeof Qr && (rr = Qr[Ir]), pr?.push({
                ref: ar,
                refId: rr,
                op: Wr.DELETE,
                field: Sr,
                value: void 0,
                previousValue: Qr
              })
            }
          }
        }
        xr.addRef(Zr, mr, Nr !== ar || Sr === Wr.DELETE_AND_ADD && Nr === ar)
      }
      var Ur;
      return mr
    }
    const JQ = function(rr, Sr, Qr, Zr, Wr) {
        const ar = Sr[Qr.offset++],
          jr = Zr.constructor[Symbol.metadata],
          Ir = ar >> 6 << 6,
          fr = ar % (Ir || 255),
          Er = jr[fr];
        if (void 0 === Er) return console.warn("@colyseus/schema: field not defined at", {
          index: fr,
          ref: Zr.constructor.name,
          metadata: jr
        }), -1;
        const pr = !0 === Er.deprecated,
          xr = pr ? void 0 : Zr[mr](fr),
          Nr = bQ(rr, Ir, Zr, fr, xr, Er.type, Sr, Qr, Wr);
        pr || (null !== Nr && void 0 !== Nr && (Zr[Er.name] = Nr), xr !== Nr && Wr?.push({
          ref: Zr,
          refId: rr.currentRefId,
          op: Ir,
          field: Er.name,
          value: Nr,
          previousValue: xr
        }))
      },
      DQ = function(rr, Sr, Qr, Zr, ar) {
        const jr = Zr[zr] ?? Zr,
          Ir = Sr[Qr.offset++];
        if (Ir === Wr.CLEAR) return rr.removeChildRefs(jr, ar), void jr.clear();
        const fr = nS.number(Sr, Qr),
          Er = jr[hr],
          pr = jr.constructor.COLLECTION_KIND;
        let xr;
        (Ir & Wr.ADD) === Wr.ADD ? pr === iQ ? (xr = nS.string(Sr, Qr), jr.setIndex(fr, xr)) : xr = fr : xr = jr.getIndex(fr);
        const Nr = jr[mr](fr),
          Ur = bQ(rr, Ir, Zr, fr, Nr, Er, Sr, Qr, ar);
        if (null !== rr.resyncVisited && kQ(rr, Zr, Ir, xr, Nr, Ur, ar), null !== Ur && void 0 !== Ur) switch (pr) {
          case iQ:
            jr.$items.set(xr, Ur);
            break;
          case wQ:
            jr.$setAt(fr, Ur, null !== rr.resyncVisited && Ir === Wr.ADD ? Wr.REPLACE : Ir);
            break;
          case cQ:
          case FQ:
          case oQ:
            jr.$items.has(fr) || (jr.$items.set(fr, Ur), "number" === typeof jr.$refId && fr >= jr.$refId && (jr.$refId = fr + 1));
            break;
          default:
            console.warn(`@colyseus/schema: missing COLLECTION_KIND on ${jr.constructor?.name} \u2014 item at index ${fr} was not stored.`)
        }
        Nr !== Ur && ar?.push({
          ref: Zr,
          refId: rr.currentRefId,
          op: Ir,
          dynamicIndex: xr,
          value: Ur,
          previousValue: Nr
        })
      },
      dQ = function(rr, Sr, Qr, Zr, ar) {
        const jr = Zr[zr] ?? Zr;
        let Ir, fr = Sr[Qr.offset++];
        if (fr === Wr.CLEAR) return rr.removeChildRefs(jr, ar), void jr.clear();
        if (fr === Wr.REVERSE) return void jr.items.reverse();
        if (fr === Wr.DELETE_BY_REFID) {
          const fr = nS.number(Sr, Qr),
            Er = rr.root.refs.get(fr);
          if (void 0 === Er) return;
          if (rr.root.removeRef(fr), Ir = jr.findIndex((rr => rr === Er)), -1 === Ir) return;
          return jr[Nr](Ir), void ar?.push({
            ref: Zr,
            refId: rr.currentRefId,
            op: Wr.DELETE,
            dynamicIndex: Ir,
            value: void 0,
            previousValue: Er
          })
        }
        if (fr === Wr.ADD_BY_REFID) {
          const Zr = nS.number(Sr, Qr),
            Wr = rr.root.refs.get(Zr);
          Wr && (Ir = jr.findIndex((rr => rr === Wr))), -1 !== Ir && void 0 !== Ir || (Ir = jr.length)
        } else Ir = nS.number(Sr, Qr);
        const Er = jr[hr];
        let pr = Ir;
        const xr = jr.items[Ir],
          mr = bQ(rr, fr, Zr, Ir, xr, Er, Sr, Qr, ar);
        null !== rr.resyncVisited && kQ(rr, Zr, fr, Ir, xr, mr, ar), null !== mr && void 0 !== mr && mr !== xr && jr.$setAt(Ir, mr, null !== rr.resyncVisited && fr === Wr.ADD ? Wr.REPLACE : fr), xr !== mr && ar?.push({
          ref: Zr,
          refId: rr.currentRefId,
          op: fr,
          dynamicIndex: pr,
          value: mr,
          previousValue: xr
        })
      };
    class sQ extends Error {}

    function uQ(rr, Sr, Qr, Zr) {
      if (!(rr instanceof Sr)) throw new sQ(`a '${Sr.name}' was expected, but '${rr&&rr.constructor.name}' was provided in ${Qr.constructor.name}#${Zr}`)
    }
    const rZ = (rr, Sr) => {
        const Qr = rr.toString(),
          Zr = Sr.toString();
        return Qr < Zr ? -1 : Qr > Zr ? 1 : 0
      },
      SZ = {
        get: (rr, Sr) => "symbol" === typeof Sr || isNaN(Sr) ? Reflect.get(rr, Sr) : rr.items[Sr],
        set: (rr, Sr, Qr) => {
          if ("symbol" !== typeof Sr && !isNaN(Sr)) {
            if (void 0 === Qr || null === Qr) rr.$deleteAt(Sr);
            else {
              let Zr;
              if (Qr[tr]) {
                uQ(Qr, rr[hr], rr, Sr);
                const ar = rr.items[Sr];
                rr.isMovingItems ? (Zr = rr.$wireIndex(Number(Sr)), void 0 !== ar ? Qr[tr].isNew ? rr[tr].indexedOperation(Zr, Wr.MOVE_AND_ADD) : (rr[tr].getChange(Zr) & Wr.DELETE) === Wr.DELETE ? rr[tr].indexedOperation(Zr, Wr.DELETE_AND_MOVE) : rr[tr].indexedOperation(Zr, Wr.MOVE) : Qr[tr].isNew && rr[tr].indexedOperation(Zr, Wr.ADD), Qr[tr].setParent(rr, rr[tr].root, Zr)) : Zr = rr.$changeAt(Number(Sr), Qr), void 0 !== ar && ar[tr].root?.remove(ar[tr])
              } else Zr = rr.$changeAt(Number(Sr), Qr);
              rr.items[Sr] = Qr, void 0 !== Zr && (rr.tmpItems[Zr] = Qr)
            }
            return !0
          }
          return Reflect.set(rr, Sr, Qr)
        },
        deleteProperty: (rr, Sr) => ("number" === typeof Sr ? rr.$deleteAt(Sr) : delete rr[Sr], !0),
        has: (rr, Sr) => "symbol" === typeof Sr || isNaN(Number(Sr)) ? Reflect.has(rr, Sr) : Reflect.has(rr.items, Sr)
      };
    class QZ {
      [tr];
      [Ir];
      [zr];
      [hr];
      items = [];
      tmpItems = [];
      deletedIndexes = [];
      isMovingItems = !1;
      _needsCompaction = !1;
      static[Er] = GQ;
      static[pr] = dQ;
      static COLLECTION_KIND = wQ;
      static[xr](rr, Sr, Qr) {
        if (!Qr) return !0;
        const Zr = rr[zr] ?? rr;
        return "string" === typeof Zr[hr] || Qr.isChangeTreeVisible(Zr.tmpItems[Sr]?.[tr])
      }
      static is(rr) {
        return Array.isArray(rr) || void 0 !== rr.array
      }
      static from(rr) {
        return new QZ(...Array.from(rr))
      }
      constructor() {
        this[hr] = void 0, this[zr] = this;
        const rr = new Proxy(this, SZ);
        return Object.defineProperty(this, tr, {
          value: new XQ(rr, this),
          enumerable: !1,
          writable: !0
        }), arguments.length > 0 && this.push(...arguments), rr
      }
      static initializeForDecoder() {
        const rr = Object.create(QZ.prototype);
        rr.items = [], rr.isMovingItems = !1, rr._needsCompaction = !1, rr[hr] = void 0, rr[zr] = rr;
        const Sr = new Proxy(rr, SZ);
        return HQ(rr, Sr), Sr
      }
      set length(rr) {
        0 === rr ? this.clear() : rr < this.items.length ? this.splice(rr, this.length - rr) : console.warn("ArraySchema: can't set .length to a higher value than its length.")
      }
      get length() {
        return this.items.length
      }
      pauseTracking() {
        this[tr].pause()
      }
      resumeTracking() {
        this[tr].resume()
      }
      untracked(rr) {
        return this[tr].untracked(rr)
      }
      get isTrackingPaused() {
        return this[tr].paused
      }
      push() {
        const rr = this[zr],
          Sr = rr.items,
          Qr = rr.tmpItems,
          Zr = rr[tr],
          ar = rr[hr];
        let jr = Qr.length;
        for (let Ir = 0, fr = arguments.length; Ir < fr; Ir++, jr++) {
          const fr = Ir < 0 || arguments.length <= Ir ? void 0 : arguments[Ir];
          if (void 0 === fr || null === fr) return;
          "object" === typeof fr && ar && uQ(fr, ar, rr, Ir), Zr.indexedOperation(jr, Wr.ADD), Sr.push(fr), Qr.push(fr), fr[tr]?.setParent(this, Zr.root, jr)
        }
        return jr
      }
      pop() {
        const rr = this[zr],
          Sr = rr.tmpItems,
          Qr = rr.deletedIndexes;
        let Zr = -1;
        for (let ar = Sr.length - 1; ar >= 0; ar--)
          if (!0 !== Qr[ar]) {
            Zr = ar;
            break
          } if (Zr < 0) return;
        const Wr = rr.$isUnsentAdd(Zr);
        return rr[tr].delete(Zr), Wr ? rr.$cancelAdd(Zr) : Qr[Zr] = !0, rr.items.pop()
      }
      at(rr) {
        return rr < 0 && (rr += this.length), this.items[rr]
      }
      $wireIndex(rr) {
        const Sr = this.deletedIndexes;
        if (0 === Sr.length) return rr;
        const Qr = this.tmpItems;
        let Zr = 0;
        for (let Wr = 0; Wr < Qr.length; Wr++)
          if (!0 !== Sr[Wr]) {
            if (Zr === rr) return Wr;
            Zr++
          } return Qr.length + (rr - Zr)
      }
      $isUnsentAdd(rr) {
        const Sr = this[tr];
        return 0 === (576 & Sr.flags) && !Sr.paused && "string" !== typeof this[hr] && Sr.operationAt(rr) === Wr.ADD
      }
      $cancelAdd(rr) {
        let Sr = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        const Qr = this[tr],
          Zr = this.tmpItems[rr];
        this.tmpItems.splice(rr, 1), this.deletedIndexes.length > 0 && this.deletedIndexes.splice(rr, 1), Qr.removeAt(rr, 1);
        const Wr = Zr?.[tr];
        void 0 !== Wr && void 0 === Wr.root && Wr.removeParent(this), Sr && this.$reindexChildren(rr)
      }
      $reindexChildren(rr, Sr) {
        if (!this[tr].hasFilteredFields) return;
        if ("string" === typeof this[hr]) return;
        const Qr = this.tmpItems,
          Zr = Qr.length;
        if (void 0 !== Sr)
          for (; rr < Zr && Qr[rr] === Sr[rr];) rr++;
        for (let Wr = rr; Wr < Zr; Wr++) Qr[Wr]?.[tr]?.setParentIndex(this, Wr)
      }
      $changeAt(rr, Sr) {
        if (void 0 === Sr || null === Sr) return void console.error("ArraySchema items cannot be null nor undefined; Use `splice(index, 1)` instead.");
        if (this.items[rr] === Sr) return;
        const Qr = void 0 !== this.items[rr] ? "object" === typeof Sr ? Wr.DELETE_AND_ADD : Wr.REPLACE : Wr.ADD,
          Zr = this.$wireIndex(rr),
          ar = this[tr];
        return ar.change(Zr, Qr), Sr[tr]?.setParent(this, ar.root, Zr), Zr
      }
      $deleteAt(rr, Sr) {
        this[tr].delete(this.$wireIndex(rr), Sr)
      }
      $setAt(rr, Sr, Qr) {
        Qr === Wr.ADD && void 0 !== this.items[rr] ? this.items.splice(rr, 0, Sr) : Qr === Wr.DELETE_AND_MOVE ? (this.items.splice(rr, 1), this.items[rr] = Sr) : (rr > this.items.length && (this._needsCompaction = !0), this.items[rr] = Sr)
      }
      clear() {
        const rr = this[zr];
        if (0 === rr.items.length) return;
        const Sr = rr[tr];
        Sr.forEachChild(((rr, Qr) => {
          Sr.root?.remove(rr)
        })), Sr.discard(), Sr.operation(Wr.CLEAR), rr.items.length = 0, rr.tmpItems.length = 0
      } [nr]() {
        const rr = this[zr] ?? this,
          Sr = rr[tr];
        if (Sr.isStreamCollection) throw new Error("@colyseus/schema: cannot reset a streamed ArraySchema (pooling not supported).");
        const Qr = rr.items;
        for (let Zr = 0; Zr < Qr.length; Zr++) Qr[Zr]?.[nr]?.();
        rr.items.length = 0, rr.tmpItems.length = 0, rr.deletedIndexes.length = 0, Sr.recycle(), rr[Ir] = void 0
      }
      concat() {
        return new QZ(...this.items.concat(...arguments))
      }
      join(rr) {
        return this.items.join(rr)
      }
      reverse() {
        const rr = this[zr],
          Sr = rr[tr];
        if (Sr.has() || rr.deletedIndexes.length > 0) {
          const Sr = rr.items.slice().reverse();
          return this.clear(), this.push(...Sr), this
        }
        return Sr.operation(Wr.REVERSE), rr.items.reverse(), rr.tmpItems.reverse(), rr.$reindexChildren(0), this
      }
      shift() {
        const rr = this[zr],
          Sr = rr.items;
        if (0 === Sr.length) return;
        const Qr = rr[tr],
          Zr = rr.deletedIndexes;
        let ar = 0;
        for (; !0 === Zr[ar];) ar++;
        const jr = rr.$isUnsentAdd(ar);
        return Qr.delete(ar, Wr.DELETE), jr ? rr.$cancelAdd(ar) : Zr[ar] = !0, Sr.shift()
      }
      slice(rr, Sr) {
        const Qr = new QZ;
        return Qr.push(...this.items.slice(rr, Sr)), Qr
      }
      sort() {
        let rr = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : rZ;
        const Sr = this[zr];
        Sr.isMovingItems = !0;
        const Qr = Sr[tr];
        return Sr.items.sort(rr).forEach(((rr, Sr) => Qr.change(Sr, Wr.REPLACE))), Sr.tmpItems.sort(rr), Sr.$reindexChildren(0), Sr.isMovingItems = !1, this
      }
      splice(rr, Sr) {
        const Qr = this[zr],
          Zr = Qr[tr],
          ar = Qr.items,
          jr = Qr.tmpItems,
          Ir = Qr.deletedIndexes,
          fr = ar.length,
          Er = jr.length;
        for (var pr = arguments.length, xr = new Array(pr > 2 ? pr - 2 : 0), mr = 2; mr < pr; mr++) xr[mr - 2] = arguments[mr];
        const Nr = xr.length,
          Ur = [];
        for (let Wr = 0; Wr < Er; Wr++) !0 !== Ir[Wr] && Ur.push(Wr);
        let hr;
        if (fr > rr) {
          void 0 === Sr && (Sr = fr - rr);
          for (let ar = rr; ar < rr + Sr; ar++) {
            const rr = Ur[ar],
              Sr = Qr.$isUnsentAdd(rr);
            Zr.delete(rr, Wr.DELETE), Sr ? (hr ??= []).push(rr) : Ir[rr] = !0
          }
        } else Sr = 0;
        if (Nr > 0) {
          const ar = Ur[rr] ?? fr,
            Er = Math.min(Nr, Sr);
          for (let rr = 0; rr < Er; rr++) {
            const Sr = ar + rr;
            let Qr;
            const fr = void 0 !== hr ? hr.indexOf(Sr) : -1; - 1 !== fr ? (hr.splice(fr, 1), Qr = Wr.ADD) : Qr = Ir[Sr] ? Wr.DELETE_AND_ADD : Wr.ADD, Zr.indexedOperation(Sr, Qr), jr[Sr] = xr[rr], Ir[Sr] = !1, xr[rr][tr]?.setParent(this, Zr.root, Sr)
          }
          const pr = Nr - Er;
          if (pr > 0) {
            const rr = ar + Er;
            Zr.insertAt(rr, pr);
            for (let Sr = 0; Sr < pr; Sr++) xr[Er + Sr][tr]?.setParent(this, Zr.root, rr + Sr);
            Ir.length > 0 && Ir.splice(rr, 0, ...new Array(pr).fill(!1)), jr.splice(rr, 0, ...xr.slice(Er)), Qr.$reindexChildren(rr + pr)
          }
        }
        if (void 0 !== hr && hr.length > 0) {
          for (let rr = hr.length - 1; rr >= 0; rr--) Qr.$cancelAdd(hr[rr], !1);
          Qr.$reindexChildren(hr[0])
        }
        return Zr.root?.enqueueChangeTree(Zr), ar.splice(rr, Sr, ...xr)
      }
      unshift() {
        const rr = this[zr],
          Sr = rr[tr];
        Sr.unshift(arguments.length);
        for (let Zr = 0; Zr < arguments.length; Zr++)(Zr < 0 || arguments.length <= Zr ? void 0 : arguments[Zr])?.[tr]?.setParent(this, Sr.root, Zr);
        const Qr = rr.deletedIndexes;
        return Qr.length > 0 && Qr.unshift(...new Array(arguments.length).fill(!1)), rr.tmpItems.unshift(...arguments), rr.$reindexChildren(arguments.length), rr.items.unshift(...arguments)
      }
      indexOf(rr, Sr) {
        return this.items.indexOf(rr, Sr)
      }
      lastIndexOf(rr) {
        let Sr = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.length - 1;
        return this.items.lastIndexOf(rr, Sr)
      }
      every(rr, Sr) {
        return this.items.every(rr, Sr)
      }
      some(rr, Sr) {
        return this.items.some(rr, Sr)
      }
      forEach(rr, Sr) {
        return this.items.forEach(rr, Sr)
      }
      map(rr, Sr) {
        return this.items.map(rr, Sr)
      }
      filter(rr, Sr) {
        return this.items.filter(rr, Sr)
      }
      reduce(rr, Sr) {
        return this.items.reduce.apply(this.items, arguments)
      }
      reduceRight(rr, Sr) {
        return this.items.reduceRight.apply(this.items, arguments)
      }
      find(rr, Sr) {
        return this.items.find(rr, Sr)
      }
      findIndex(rr, Sr) {
        return this.items.findIndex(rr, Sr)
      }
      fill(rr, Sr, Qr) {
        throw new Error("ArraySchema#fill() not implemented")
      }
      copyWithin(rr, Sr, Qr) {
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
        return QZ
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
      includes(rr, Sr) {
        return this.items.includes(rr, Sr)
      }
      flatMap(rr, Sr) {
        throw new Error("ArraySchema#flatMap() is not supported.")
      }
      flat(rr) {
        throw new Error("ArraySchema#flat() is not supported.")
      }
      findLast() {
        return this.items.findLast.apply(this.items, arguments)
      }
      findLastIndex() {
        for (var rr = arguments.length, Sr = new Array(rr), Qr = 0; Qr < rr; Qr++) Sr[Qr] = arguments[Qr];
        return this.items.findLastIndex.apply(this.items, arguments)
      }
      with(rr, Sr) {
        const Qr = this.items.slice();
        return rr < 0 && (rr += this.length), Qr[rr] = Sr, new QZ(...Qr)
      }
      toReversed() {
        return this.items.slice().reverse()
      }
      toSorted(rr) {
        return this.items.slice().sort(rr)
      }
      toSpliced(rr, Sr) {
        for (var Qr = arguments.length, Zr = new Array(Qr > 2 ? Qr - 2 : 0), Wr = 2; Wr < Qr; Wr++) Zr[Wr - 2] = arguments[Wr];
        const ar = this.items.slice();
        return ar.splice.apply(ar, arguments), ar
      }
      shuffle() {
        return this.move((rr => {
          let Sr = this.items.length;
          for (; 0 != Sr;) {
            let rr = Math.floor(Math.random() * Sr);
            Sr--, [this[Sr], this[rr]] = [this[rr], this[Sr]]
          }
        }))
      }
      move(rr) {
        return this.isMovingItems = !0, rr(this), this.isMovingItems = !1, this
      } [mr](rr) {
        let Sr = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        const Qr = this[zr] ?? this;
        return Sr || Qr.deletedIndexes[rr] ? Qr.items[rr] : Qr.tmpItems[rr] || Qr.items[rr]
      } [Nr](rr) {
        const Sr = this[zr] ?? this;
        Sr.items[rr] = void 0, Sr._needsCompaction = !0
      } [Yr]() {
        const rr = this.tmpItems;
        this.tmpItems = this.items.slice(), this.deletedIndexes.length > 0 && (this.$reindexChildren(0, rr), this.deletedIndexes.length = 0)
      } [er]() {
        const rr = this[zr] ?? this;
        rr._needsCompaction && (rr._needsCompaction = !1, rr.items = rr.items.filter((rr => void 0 !== rr)))
      } [Ur](rr, Sr, Qr) {
        const Zr = this[zr] ?? this,
          Wr = Zr.items;
        let ar = !1;
        for (let jr = 0; jr < Wr.length; jr++) {
          const Ir = Wr[jr];
          rr.has(jr) ? Qr(Ir) : (ar = !0, Sr(Ir, jr), Zr[Nr](jr))
        }
        ar && Zr[er]()
      }
      toArray() {
        return this.items.slice(0)
      }
      toJSON() {
        return this.toArray().map((rr => "function" === typeof rr.toJSON ? rr.toJSON() : rr))
      }
      clone(rr) {
        let Sr;
        return rr ? (Sr = new QZ, Sr.push(...this.items)) : Sr = new QZ(...this.map((rr => rr[tr] ? rr.clone() : rr))), Sr
      }
    }
    yS("array", {
      constructor: QZ
    });
    class ZZ {
      keyByIndex = new Map;
      indexByKey = Object.create(null);
      nextIndex = 0;
      snapshots;
      indexOf(rr) {
        const Sr = this.indexByKey[rr];
        return void 0 === Sr ? void 0 : Sr
      }
      assign(rr) {
        const Sr = this.nextIndex++;
        return this.indexByKey[rr] = Sr, this.keyByIndex.set(Sr, rr), Sr
      }
      snapshot(rr, Sr) {
        (this.snapshots ??= new Map).set(rr, Sr)
      }
      forgetSnapshot(rr) {
        this.snapshots?.delete(rr)
      }
      snapshotAt(rr) {
        return this.snapshots?.get(rr)
      }
      setIndex(rr, Sr) {
        this.keyByIndex.set(rr, Sr), this.indexByKey[Sr] = rr
      }
      keyOf(rr) {
        return this.keyByIndex.get(rr)
      }
      cleanupAfterEncode() {
        if (void 0 !== this.snapshots) {
          for (const [rr] of this.snapshots) {
            const Sr = this.keyByIndex.get(rr);
            void 0 !== Sr && (delete this.indexByKey[Sr], this.keyByIndex.delete(rr))
          }
          this.snapshots.clear()
        }
      }
      reset() {
        this.indexByKey = Object.create(null), this.keyByIndex.clear(), this.snapshots?.clear(), this.nextIndex = 0
      }
    }
    class WZ {
      [tr];
      [Ir];
      childType;
      [hr];
      $items = new Map;
      journal = new ZZ;
      _stream;
      get maxPerTick() {
        return this._stream?.maxPerTick ?? 32
      }
      set maxPerTick(rr) {
        (this._stream ??= vS()).maxPerTick = rr
      }
      get priority() {
        return this._stream?.priority
      }
      set priority(rr) {
        (this._stream ??= vS()).priority = rr
      }
      get $indexes() {
        return this.journal.keyByIndex
      }
      get _collectionIndexes() {
        return this.journal.indexByKey
      }
      static[Er] = gQ;
      static[pr] = DQ;
      static COLLECTION_KIND = iQ;
      static[xr](rr, Sr, Qr) {
        if (!Qr || "string" === typeof rr[hr]) return !0;
        const Zr = rr[mr](Sr) ?? rr.journal.snapshotAt(Sr);
        return Qr.isChangeTreeVisible(Zr[tr])
      }
      static is(rr) {
        return void 0 !== rr.map
      }
      constructor(rr) {
        if (Object.defineProperty(this, tr, {
            value: new XQ(this),
            enumerable: !1,
            writable: !0
          }), this[hr] = void 0, rr)
          if (rr instanceof Map || rr instanceof WZ) rr.forEach(((rr, Sr) => this.set(Sr, rr)));
          else
            for (const Sr in rr) this.set(Sr, rr[Sr])
      }
      static initializeForDecoder() {
        const rr = Object.create(WZ.prototype);
        return rr.$items = new Map, rr.journal = new ZZ, rr[hr] = void 0, HQ(rr), rr
      } [Symbol.iterator]() {
        return this.$items[Symbol.iterator]()
      }
      get[Symbol.toStringTag]() {
        return this.$items[Symbol.toStringTag]
      }
      static get[Symbol.species]() {
        return WZ
      }
      set(rr, Sr) {
        if (void 0 === Sr || null === Sr) throw new Error(`MapSchema#set('${rr}', ${Sr}): trying to set ${Sr} value on '${rr}'.`);
        "object" === typeof Sr && this[hr] && uQ(Sr, this[hr], this, rr), rr = rr.toString();
        const Qr = this[tr],
          Zr = void 0 !== Sr[tr],
          ar = this.journal;
        let jr, Ir = ar.indexOf(rr);
        if (void 0 !== Ir) {
          jr = Wr.REPLACE;
          const Qr = this.$items.get(rr);
          if (Qr === Sr) return;
          Zr && (jr = Wr.DELETE_AND_ADD, void 0 !== Qr && Qr[tr].root?.remove(Qr[tr])), void 0 !== ar.snapshotAt(Ir) && ar.forgetSnapshot(Ir)
        } else Ir = ar.assign(rr), jr = Wr.ADD;
        return this.$items.set(rr, Sr), jr === Wr.ADD && Qr.isStreamCollection ? void 0 !== Qr.root && LS(this, Qr.root, Ir) : Qr.change(Ir, jr), Zr && Sr[tr].setParent(this, Qr.root, Ir), this
      }
      get(rr) {
        return this.$items.get(rr)
      }
      getOrInsert(rr, Sr) {
        return this.$items.has(rr) ? this.$items.get(rr) : (this.set(rr, Sr), Sr)
      }
      getOrInsertComputed(rr, Sr) {
        if (this.$items.has(rr)) return this.$items.get(rr);
        const Qr = Sr(rr);
        return this.set(rr, Qr), Qr
      }
      delete(rr) {
        if (!this.$items.has(rr)) return !1;
        const Sr = this.journal.indexOf(rr),
          Qr = this.$items.get(rr),
          Zr = this[tr];
        if (Zr.isStreamCollection) {
          const Wr = Zr.root;
          let ar = !1;
          return void 0 !== Wr && (ar = lS(this, Wr, this[Ir], Sr)), void 0 !== Qr?.[tr] && Wr?.remove(Qr[tr]), this.$items.delete(rr), ar || this.journal.snapshot(Sr, Qr), !0
        }
        return this.journal.snapshot(Sr, Qr), Zr.delete(Sr), this.$items.delete(rr)
      }
      clear() {
        const rr = this[tr];
        rr.discard(), rr.forEachChild(((Sr, Qr) => {
          rr.root?.remove(Sr)
        })), this.journal.reset(), this.$items.clear(), rr.operation(Wr.CLEAR)
      } [nr]() {
        const rr = this[tr];
        if (rr.isStreamCollection) throw new Error("@colyseus/schema: cannot reset a streamed MapSchema (pooling not supported).");
        this.$items.forEach((rr => rr?.[nr]?.())), this.$items.clear(), this.journal.reset(), rr.recycle(), this[Ir] = void 0
      }
      has(rr) {
        return this.$items.has(rr)
      }
      forEach(rr) {
        this.$items.forEach(rr)
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
        this[tr].pause()
      }
      resumeTracking() {
        this[tr].resume()
      }
      untracked(rr) {
        return this[tr].untracked(rr)
      }
      get isTrackingPaused() {
        return this[tr].paused
      }
      setIndex(rr, Sr) {
        this.journal.setIndex(rr, Sr)
      }
      getIndex(rr) {
        return this.journal.keyOf(rr)
      } [mr](rr) {
        const Sr = this.journal.keyOf(rr);
        return void 0 !== Sr ? this.$items.get(Sr) : void 0
      } [Nr](rr) {
        const Sr = this.journal.keyOf(rr);
        void 0 !== Sr && (this.$items.delete(Sr), this.journal.keyByIndex.delete(rr))
      } [Ur](rr, Sr, Qr) {
        let Zr = null;
        if (this.$items.forEach(((Wr, ar) => {
            rr.has(ar) ? Qr(Wr) : ((Zr ??= new Set).add(ar), Sr(Wr, ar))
          })), null !== Zr) {
          Zr.forEach((rr => {
            this.$items.delete(rr), delete this.journal.indexByKey[rr]
          }));
          const rr = [];
          this.journal.keyByIndex.forEach(((Sr, Qr) => {
            Zr.has(Sr) && rr.push(Qr)
          }));
          for (let Sr = 0; Sr < rr.length; Sr++) this.journal.keyByIndex.delete(rr[Sr])
        }
      } [Yr]() {
        this.journal.cleanupAfterEncode()
      }
      _dropView(rr) {
        qS(this, rr)
      }
      _unregister() {}
      toJSON() {
        return Object.fromEntries(Array.from(this, (rr => {
          let [Sr, Qr] = rr;
          return [Sr, "function" === typeof Qr.toJSON ? Qr.toJSON() : Qr]
        })))
      }
      clone(rr) {
        let Sr;
        return rr ? Sr = Object.assign(new WZ, this) : (Sr = new WZ, this.forEach(((rr, Qr) => {
          rr[tr] ? Sr.set(Qr, rr.clone()) : Sr.set(Qr, rr)
        }))), Sr
      }
    }
    yS("map", {
      constructor: WZ
    });
    class aZ {
      [tr];
      [Ir];
      [hr];
      $items = new Map;
      deletedItems = {};
      $refId = 0;
      _stream;
      get maxPerTick() {
        return this._stream?.maxPerTick ?? 32
      }
      set maxPerTick(rr) {
        (this._stream ??= vS()).maxPerTick = rr
      }
      get priority() {
        return this._stream?.priority
      }
      set priority(rr) {
        (this._stream ??= vS()).priority = rr
      }
      static[Er] = CQ;
      static[pr] = DQ;
      static COLLECTION_KIND = FQ;
      static[xr](rr, Sr, Qr) {
        return !Qr || "string" === typeof rr[hr] || Qr.isChangeTreeVisible((rr[mr](Sr) ?? rr.deletedItems[Sr])[tr])
      }
      static is(rr) {
        return void 0 !== rr.collection
      }
      constructor(rr) {
        Object.defineProperty(this, tr, {
          value: new XQ(this),
          enumerable: !1,
          writable: !0
        }), this[hr] = void 0, rr && rr.forEach((rr => this.add(rr)))
      }
      static initializeForDecoder() {
        const rr = Object.create(aZ.prototype);
        return rr.$items = new Map, rr.deletedItems = {}, rr.$refId = 0, rr[hr] = void 0, HQ(rr), rr
      }
      add(rr) {
        const Sr = this.$refId++,
          Qr = this[tr];
        return this.$items.set(Sr, rr), Qr.isStreamCollection ? void 0 !== Qr.root && LS(this, Qr.root, Sr) : Qr.change(Sr), void 0 !== rr[tr] && rr[tr].setParent(this, Qr.root, Sr), Sr
      }
      at(rr) {
        const Sr = Array.from(this.$items.keys())[rr];
        return this.$items.get(Sr)
      }
      entries() {
        return this.$items.entries()
      }
      delete(rr) {
        const Sr = this.$items.entries();
        let Qr, Zr;
        for (;
          (Zr = Sr.next()) && !Zr.done;)
          if (rr === Zr.value[1]) {
            Qr = Zr.value[0];
            break
          } if (void 0 === Qr) return !1;
        const Wr = this[tr];
        if (Wr.isStreamCollection) {
          const rr = Wr.root,
            Sr = this.$items.get(Qr);
          return void 0 !== rr && lS(this, rr, this[Ir], Qr), void 0 !== Sr?.[tr] && rr?.remove(Sr[tr]), this.deletedItems[Qr] = Sr, this.$items.delete(Qr)
        }
        return this.deletedItems[Qr] = Wr.delete(Qr), this.$items.delete(Qr)
      }
      clear() {
        const rr = this[tr];
        rr.discard(), rr.forEachChild(((Sr, Qr) => {
          rr.root?.remove(Sr)
        })), this.$items.clear(), rr.operation(Wr.CLEAR)
      } [nr]() {
        const rr = this[tr];
        if (rr.isStreamCollection) throw new Error("@colyseus/schema: cannot reset a streamed CollectionSchema (pooling not supported).");
        this.$items.forEach((rr => rr?.[nr]?.())), this.$items.clear(), this.deletedItems = {}, this.$refId = 0, rr.recycle(), this[Ir] = void 0
      }
      has(rr) {
        return Array.from(this.$items.values()).some((Sr => Sr === rr))
      }
      forEach(rr) {
        this.$items.forEach(((Sr, Qr, Zr) => rr(Sr, Qr, this)))
      }
      values() {
        return this.$items.values()
      }
      get size() {
        return this.$items.size
      }
      pauseTracking() {
        this[tr].pause()
      }
      resumeTracking() {
        this[tr].resume()
      }
      untracked(rr) {
        return this[tr].untracked(rr)
      }
      get isTrackingPaused() {
        return this[tr].paused
      } [Symbol.iterator]() {
        return this.$items.values()
      }
      setIndex(rr, Sr) {}
      getIndex(rr) {
        return rr
      } [mr](rr) {
        return this.$items.get(rr)
      } [Nr](rr) {
        this.$items.delete(rr)
      } [Ur](rr, Sr, Qr) {
        let Zr = null;
        if (this.$items.forEach(((Wr, ar) => {
            rr.has(ar) ? Qr(Wr) : ((Zr ??= []).push(ar), Sr(Wr, ar))
          })), null !== Zr)
          for (let Wr = 0; Wr < Zr.length; Wr++) this[Nr](Zr[Wr])
      } [Yr]() {
        for (const rr in this.deletedItems) delete this.deletedItems[rr]
      }
      _dropView(rr) {
        qS(this, rr)
      }
      _unregister() {}
      toArray() {
        return Array.from(this.$items.values())
      }
      toJSON() {
        const rr = [];
        return this.forEach(((Sr, Qr) => {
          rr.push("function" === typeof Sr.toJSON ? Sr.toJSON() : Sr)
        })), rr
      }
      clone(rr) {
        let Sr;
        return rr ? Sr = Object.assign(new aZ, this) : (Sr = new aZ, this.forEach((rr => {
          rr[tr] ? Sr.add(rr.clone()) : Sr.add(rr)
        }))), Sr
      }
    }
    yS("collection", {
      constructor: aZ
    });
    class jZ {
      [tr];
      [Ir];
      [hr];
      $items = new Map;
      deletedItems = {};
      $refId = 0;
      _stream;
      get maxPerTick() {
        return this._stream?.maxPerTick ?? 32
      }
      set maxPerTick(rr) {
        (this._stream ??= vS()).maxPerTick = rr
      }
      get priority() {
        return this._stream?.priority
      }
      set priority(rr) {
        (this._stream ??= vS()).priority = rr
      }
      static[Er] = CQ;
      static[pr] = DQ;
      static COLLECTION_KIND = cQ;
      static[xr](rr, Sr, Qr) {
        return !Qr || "string" === typeof rr[hr] || Qr.isVisible((rr[mr](Sr) ?? rr.deletedItems[Sr])[tr])
      }
      static is(rr) {
        return void 0 !== rr.set
      }
      constructor(rr) {
        Object.defineProperty(this, tr, {
          value: new XQ(this),
          enumerable: !1,
          writable: !0
        }), this[hr] = void 0, rr && rr.forEach((rr => this.add(rr)))
      }
      static initializeForDecoder() {
        const rr = Object.create(jZ.prototype);
        return rr.$items = new Map, rr.deletedItems = {}, rr.$refId = 0, rr[hr] = void 0, HQ(rr), rr
      }
      add(rr) {
        if (this.has(rr)) return !1;
        const Sr = this.$refId++,
          Qr = this[tr];
        return this.$items.set(Sr, rr), Qr.isStreamCollection ? void 0 !== Qr.root && LS(this, Qr.root, Sr) : Qr.change(Sr, Wr.ADD), void 0 !== rr[tr] && rr[tr].setParent(this, Qr.root, Sr), Sr
      }
      entries() {
        return this.$items.entries()
      }
      delete(rr) {
        const Sr = this.$items.entries();
        let Qr, Zr;
        for (;
          (Zr = Sr.next()) && !Zr.done;)
          if (rr === Zr.value[1]) {
            Qr = Zr.value[0];
            break
          } if (void 0 === Qr) return !1;
        const Wr = this[tr];
        if (Wr.isStreamCollection) {
          const rr = Wr.root,
            Sr = this.$items.get(Qr);
          return void 0 !== rr && lS(this, rr, this[Ir], Qr), void 0 !== Sr?.[tr] && rr?.remove(Sr[tr]), this.deletedItems[Qr] = Sr, this.$items.delete(Qr)
        }
        return this.deletedItems[Qr] = Wr.delete(Qr), this.$items.delete(Qr)
      }
      clear() {
        const rr = this[tr];
        rr.discard(), this.$items.clear(), rr.operation(Wr.CLEAR)
      } [nr]() {
        const rr = this[tr];
        if (rr.isStreamCollection) throw new Error("@colyseus/schema: cannot reset a streamed SetSchema (pooling not supported).");
        this.$items.forEach((rr => rr?.[nr]?.())), this.$items.clear(), this.deletedItems = {}, this.$refId = 0, rr.recycle(), this[Ir] = void 0
      }
      has(rr) {
        const Sr = this.$items.values();
        let Qr, Zr = !1;
        for (;
          (Qr = Sr.next()) && !Qr.done;)
          if (rr === Qr.value) {
            Zr = !0;
            break
          } return Zr
      }
      forEach(rr) {
        this.$items.forEach(((Sr, Qr, Zr) => rr(Sr, Qr, this)))
      }
      values() {
        return this.$items.values()
      }
      get size() {
        return this.$items.size
      }
      pauseTracking() {
        this[tr].pause()
      }
      resumeTracking() {
        this[tr].resume()
      }
      untracked(rr) {
        return this[tr].untracked(rr)
      }
      get isTrackingPaused() {
        return this[tr].paused
      } [Symbol.iterator]() {
        return this.$items.values()
      }
      setIndex(rr, Sr) {}
      getIndex(rr) {
        return rr
      } [mr](rr) {
        return this.$items.get(rr)
      } [Nr](rr) {
        this.$items.delete(rr)
      } [Ur](rr, Sr, Qr) {
        let Zr = null;
        if (this.$items.forEach(((Wr, ar) => {
            rr.has(ar) ? Qr(Wr) : ((Zr ??= []).push(ar), Sr(Wr, ar))
          })), null !== Zr)
          for (let Wr = 0; Wr < Zr.length; Wr++) this[Nr](Zr[Wr])
      } [Yr]() {
        for (const rr in this.deletedItems) delete this.deletedItems[rr]
      }
      _dropView(rr) {
        qS(this, rr)
      }
      _unregister() {}
      toArray() {
        return Array.from(this.$items.values())
      }
      toJSON() {
        const rr = [];
        return this.forEach(((Sr, Qr) => {
          rr.push("function" === typeof Sr.toJSON ? Sr.toJSON() : Sr)
        })), rr
      }
      clone(rr) {
        let Sr;
        return rr ? Sr = Object.assign(new jZ, this) : (Sr = new jZ, this.forEach((rr => {
          rr[tr] ? Sr.add(rr.clone()) : Sr.add(rr)
        }))), Sr
      }
    }
    yS("set", {
      constructor: jZ
    });
    class IZ {
      [tr];
      [Ir];
      [hr];
      $items = new Map;
      $nextPosition = 0;
      _itemIndex = new Map;
      _stream;
      get maxPerTick() {
        return this._stream?.maxPerTick ?? 32
      }
      set maxPerTick(rr) {
        (this._stream ??= vS()).maxPerTick = rr
      }
      get priority() {
        return this._stream?.priority
      }
      set priority(rr) {
        (this._stream ??= vS()).priority = rr
      }
      static $isStream = !0;
      static[Er] = CQ;
      static[pr] = DQ;
      static COLLECTION_KIND = oQ;
      static[xr](rr, Sr, Qr) {
        if (!Qr) return !0;
        const Zr = rr[mr](Sr);
        return void 0 !== Zr && Qr.isVisible(Zr[tr])
      }
      static is(rr) {
        return rr && void 0 !== rr.stream
      }
      constructor() {
        Object.defineProperty(this, tr, {
          value: new XQ(this),
          enumerable: !1,
          writable: !0
        }), this[hr] = void 0
      }
      static initializeForDecoder() {
        const rr = Object.create(IZ.prototype);
        return rr.$items = new Map, rr.$nextPosition = 0, rr._itemIndex = new Map, rr[hr] = void 0, HQ(rr), rr
      }
      add(rr) {
        if (this._itemIndex.has(rr)) return -1;
        const Sr = this.$nextPosition++;
        this.$items.set(Sr, rr), this._itemIndex.set(rr, Sr);
        const Qr = this[tr].root;
        return void 0 !== rr[tr] && rr[tr].setParent(this, Qr, Sr), void 0 !== Qr && LS(this, Qr, Sr), Sr
      }
      remove(rr) {
        const Sr = this._itemIndex.get(rr);
        if (void 0 === Sr) return !1;
        this._itemIndex.delete(rr), this.$items.delete(Sr);
        const Qr = this[tr].root;
        return void 0 !== Qr && (lS(this, Qr, this[Ir], Sr), void 0 !== rr[tr] && Qr.remove(rr[tr])), !0
      }
      has(rr) {
        return this._itemIndex.has(rr)
      }
      clear() {
        const rr = this[tr].root;
        if (void 0 !== rr) {
          ! function(rr, Sr, Qr) {
            const Zr = rr._stream;
            if (void 0 !== Zr) {
              Zr.broadcastPending.clear();
              for (const rr of Zr.sentBroadcast) Zr.broadcastDeletes.add(rr);
              Zr.sentBroadcast.clear(), Sr.forEachActiveView((rr => {
                Zr.pendingByView.get(rr.id)?.clear();
                const Sr = Zr.sentByView.get(rr.id);
                if (void 0 !== Sr && Sr.size > 0) {
                  let Zr = rr.changes.get(Qr);
                  void 0 === Zr && (Zr = new Map, rr.changes.set(Qr, Zr));
                  for (const rr of Sr) Zr.set(rr, Wr.DELETE);
                  Sr.clear()
                }
              }))
            }
          }(this, rr, this[Ir]);
          for (const Sr of this.$items.values()) void 0 !== Sr[tr] && rr.remove(Sr[tr])
        }
        this.$items.clear(), this._itemIndex.clear()
      }
      forEach(rr) {
        for (const [Sr, Qr] of this.$items) rr(Qr, Sr, this)
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
      setIndex(rr, Sr) {}
      getIndex(rr) {
        return rr
      } [mr](rr) {
        return this.$items.get(rr)
      } [Nr](rr) {
        const Sr = this.$items.get(rr);
        void 0 !== Sr && (this._itemIndex.delete(Sr), this.$items.delete(rr))
      } [Ur]() {} [Yr]() {}
      toArray() {
        return Array.from(this.$items.values())
      }
      toJSON() {
        const rr = [];
        return this.forEach((Sr => {
          rr.push("function" === typeof Sr?.toJSON ? Sr.toJSON() : Sr)
        })), rr
      }
      clone(rr) {
        if (rr) {
          return Object.assign(new IZ, this)
        }
        const Sr = new IZ;
        return Sr.maxPerTick = this.maxPerTick, this.forEach((rr => {
          Sr.add("function" === typeof rr?.clone ? rr.clone() : rr)
        })), Sr
      }
      _dropView(rr) {
        qS(this, rr)
      }
      _unregister() {}
    }
    yS("stream", {
      constructor: IZ
    });
    class fZ {
      [yr] = !0;
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
      constructor(rr) {
        this._type = rr
      }
      default (rr) {
        return this._default = rr, this._hasDefault = !0, this
      }
      view(rr) {
        return this._view = rr ?? -1, this
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
        const rr = this._type;
        if (rr && "object" === typeof rr && void 0 !== rr.array) throw new Error(TS);
        return this._stream = !0, this
      }
      priority(rr) {
        return this._streamPriority = rr, this
      }
      deprecated() {
        let rr = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
        return this._deprecated = !0, this._deprecatedThrows = rr, this
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

    function EZ(rr) {
      return null != rr && !0 === rr[yr]
    }

    function pZ(rr) {
      return () => new fZ(rr)
    }

    function xZ(rr) {
      if (EZ(rr)) {
        const Sr = rr._type;
        throw new Error(`t.array/map/set/collection(): a t.* builder is not a valid element type \u2014 ${"string"===typeof Sr?`use the type name instead: t.array("${Sr}")`:'collections accept a Schema class or a primitive type name ("string", "number", \u2026)'}.`)
      }
      return rr
    }

    function mZ(rr) {
      return new fZ({
        quantized: gS(rr)
      })
    }
    const NZ = Object.freeze({
        string: pZ("string"),
        number: pZ("number"),
        boolean: pZ("boolean"),
        int8: pZ("int8"),
        uint8: pZ("uint8"),
        int16: pZ("int16"),
        uint16: pZ("uint16"),
        int32: pZ("int32"),
        uint32: pZ("uint32"),
        int64: pZ("int64"),
        uint64: pZ("uint64"),
        float32: pZ("float32"),
        float64: pZ("float64"),
        bigint64: pZ("bigint64"),
        biguint64: pZ("biguint64"),
        ref: rr => new fZ(rr),
        array: rr => new fZ({
          array: xZ(rr)
        }),
        map: rr => new fZ({
          map: xZ(rr)
        }),
        set: rr => new fZ({
          set: xZ(rr)
        }),
        collection: rr => new fZ({
          collection: xZ(rr)
        }),
        stream: rr => {
          const Sr = new fZ({
            stream: xZ(rr)
          });
          return Sr._stream = !0, Sr
        },
        quantized: mZ,
        angle: rr => mZ({
          min: 0,
          max: 2 * Math.PI,
          mode: "wrap",
          bits: rr?.bits ?? 16
        })
      }),
      UZ = -1;

    function tZ(rr) {
      return AS.register(rr), rr
    }

    function hZ() {
      let rr = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : UZ;
      return function(Sr, Qr) {
        const Zr = bS.initialize(Sr.constructor);
        bS.setTag(Zr, Qr, rr)
      }
    }

    function zZ(rr, Sr) {
      const Qr = bS.initialize(rr.constructor);
      bS.setUnreliable(Qr, Sr)
    }

    function YZ(rr, Sr) {
      const Qr = bS.initialize(rr.constructor);
      bS.setPatchOnly(Qr, Sr)
    }

    function nZ(rr, Sr) {
      const Qr = bS.initialize(rr.constructor);
      bS.setFullStateOnly(Qr, Sr)
    }

    function eZ(rr, Sr) {
      return function(Qr, Zr) {
        const Wr = Qr.constructor;
        if (!rr) throw new Error(`${Wr.name}: @type() reference provided for "${Zr}" is undefined. Make sure you don't have any circular dependencies.`);
        rr = iS(rr, `${Wr.name}.${Zr}`), AS.register(Wr);
        const ar = Object.getPrototypeOf(Wr)[Symbol.metadata],
          jr = bS.initialize(Wr);
        let Ir = jr[Zr];
        if (void 0 !== jr[Ir]) {
          if (jr[Ir].deprecated) return;
          if (void 0 !== jr[Ir].type) {
            const rr = new Error(`@colyseus/schema: Duplicate '${Zr}' definition on '${Wr.name}'.\nCheck @type() annotation`);
            throw new Error(`${rr.message} ${rr.stack.split("\n")[4].trim()}`)
          }
        } else Ir = jr[Or] ?? (ar && ar[Or]) ?? -1, Ir++;
        if (Sr && Sr.manual) bS.addField(jr, Ir, Zr, rr, {
          enumerable: !0,
          configurable: !0,
          writable: !0
        });
        else {
          const {
            complexTypeKlass: Sr,
            childType: Qr
          } = VS(rr);
          bS.addField(jr, Ir, Zr, rr, yZ(Zr, Ir, Qr, Sr))
        }
        jr[Br][Zr] && Object.defineProperty(Qr, Zr, jr[Br][Zr]), ("string" === typeof rr || CS(rr)) && (jr[vr] || Object.defineProperty(jr, vr, {
          value: [],
          enumerable: !1,
          configurable: !0,
          writable: !0
        }), jr[vr][Ir] = "string" === typeof rr ? SS[rr] : kS(rr.quantized))
      }
    }
    const KZ = {
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

    function yZ(rr, Sr, Qr, Zr) {
      let ar;
      return ar = Zr ? function(rr, Sr, Qr, Zr) {
        const ar = Zr.constructor === QZ,
          jr = Zr.constructor === WZ;
        return function(rr) {
          const Zr = this[Kr],
            Ir = Zr[Sr];
          if (rr !== Ir) {
            if (void 0 !== rr && null !== rr) {
              if (!ar || rr instanceof QZ)
                if (!jr || rr instanceof WZ) rr[hr] = Qr;
                else {
                  const Sr = new WZ;
                  if (Sr[hr] = Qr, rr instanceof Map) rr.forEach(((rr, Qr) => Sr.set(Qr, rr)));
                  else
                    for (const Qr in rr) Sr.set(Qr, rr[Qr]);
                  rr = Sr
                }
              else {
                const Sr = new QZ;
                Sr[hr] = Qr, Sr.push(...rr), rr = Sr
              }
              const Zr = this[tr],
                Er = this.constructor;
              void 0 !== Ir && null !== Ir && Ir[tr] ? (Zr.root?.remove(Ir[tr]), Er[fr](Zr, Sr, Wr.DELETE_AND_ADD)) : Er[fr](Zr, Sr, Wr.ADD), rr[tr]?.setParent(this, Zr.root, Sr)
            } else void 0 !== Ir && null !== Ir && this[tr].delete(Sr);
            Zr[Sr] = rr
          }
        }
      }(0, Sr, Qr, Zr) : "string" === typeof Qr ? function(rr, Sr, Qr) {
        const Zr = KZ[Qr],
          ar = "string" === Qr,
          jr = "boolean" === Qr;
        return function(Qr) {
          const Ir = this[Kr],
            Er = Ir[Sr];
          if (Qr !== Er) {
            if (void 0 !== Qr && null !== Qr) {
              if (!jr && void 0 !== Zr && typeof Qr !== Zr && (!ar || null !== Qr)) {
                const Sr = Qr && Qr.constructor ? ` (${Qr.constructor.name})` : "";
                throw new sQ(`a '${Zr}' was expected, but '${JSON.stringify(Qr)}'${Sr} was provided in ${this.constructor.name}#${rr}`)
              }
              this.constructor[fr](this[tr], Sr, Wr.ADD)
            } else void 0 !== Er && null !== Er && this[tr].delete(Sr);
            Ir[Sr] = Qr
          }
        }
      }(rr, Sr, Qr) : CS(Qr) ? function(rr, Sr, Qr) {
        return function(Zr) {
          const ar = this[Kr],
            jr = ar[Sr];
          if (void 0 !== Zr && null !== Zr) {
            if ("number" !== typeof Zr) throw new sQ(`a 'number' was expected, but '${JSON.stringify(Zr)}' was provided in ${this.constructor.name}#${rr}`);
            if ((Zr = GS(Qr, MS(Qr, Zr))) === jr) return;
            this.constructor[fr](this[tr], Sr, Wr.ADD)
          } else {
            if (Zr === jr) return;
            void 0 !== jr && null !== jr && this[tr].delete(Sr)
          }
          ar[Sr] = Zr
        }
      }(rr, Sr, Qr.quantized) : function(rr, Sr, Qr) {
        return function(Zr) {
          const ar = this[Kr],
            jr = ar[Sr];
          if (Zr !== jr) {
            if (void 0 !== Zr && null !== Zr) {
              uQ(Zr, Qr, this, rr);
              const ar = this[tr],
                Ir = this.constructor;
              void 0 !== jr && null !== jr && jr[tr] ? (ar.root?.remove(jr[tr]), Ir[fr](ar, Sr, Wr.DELETE_AND_ADD)) : Ir[fr](ar, Sr, Wr.ADD), Zr[tr]?.setParent(this, ar.root, Sr)
            } else void 0 !== jr && null !== jr && this[tr].delete(Sr);
            ar[Sr] = Zr
          }
        }
      }(rr, Sr, Qr), {
        get: function() {
          return this[Kr][Sr]
        },
        set: ar,
        enumerable: !0,
        configurable: !0
      }
    }

    function BZ() {
      let rr = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
      return function(Sr, Qr) {
        const Zr = bS.initialize(Sr.constructor);
        bS.setDeprecated(Zr, Qr), rr && (Zr[Br] ??= {}, Zr[Br][Qr] = {
          get: function() {
            throw new Error(`${Qr} is deprecated.`)
          },
          set: function(rr) {},
          enumerable: !1,
          configurable: !0
        }, Object.defineProperty(Sr, Qr, Zr[Br][Qr]))
      }
    }
    let TZ = !1;

    function vZ(rr, Sr, Qr) {
      TZ || (TZ = !0, console.warn("@colyseus/schema: defineTypes() is deprecated and will be removed in a future release. Use schema() with t.* field builders instead \u2192 https://docs.colyseus.io/state/schema"));
      for (let Zr in Sr) eZ(Sr[Zr], Qr)(rr.prototype, Zr);
      return rr
    }

    function OZ(rr, Sr) {
      let Qr = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : lZ;
      if (null == rr || "object" !== typeof rr) throw new Error(`schema(): first argument must be a fields object (got ${typeof rr}).`);
      const Zr = {},
        Wr = {},
        ar = {},
        jr = {},
        Ir = (rr, Sr) => {
          if (Sr.hasDefault)((rr, Sr) => {
            "function" === typeof Sr ? jr[rr] = Sr : Sr && "function" === typeof Sr.clone ? jr[rr] = () => Sr.clone() : ar[rr] = Sr
          })(rr, Sr.default);
          else if (!Sr.optional) {
            const Qr = function(rr) {
              if (rr && "object" === typeof rr) {
                if (void 0 !== rr.array) return () => new QZ;
                if (void 0 !== rr.map) return () => new WZ;
                if (void 0 !== rr.set) return () => new jZ;
                if (void 0 !== rr.collection) return () => new aZ;
                if (void 0 !== rr.stream) return () => new IZ
              } else if ("function" === typeof rr && lZ.is(rr) && (!rr.prototype.initialize || 0 === rr.prototype.initialize.length)) return () => new rr
            }(Sr.type);
            Qr && (jr[rr] = Qr)
          }
        },
        fr = {},
        Er = [],
        pr = [],
        xr = {},
        mr = [],
        Nr = [],
        Ur = {},
        tr = [];
      for (const Kr in rr) {
        const Qr = rr[Kr],
          ar = `schema(${Sr?`'${Sr}'`:""}): field '${Kr}'`;
        if (EZ(Qr)) {
          const rr = Qr.toDefinition();
          if (rr.noSync) {
            if (void 0 !== rr.view || rr.unreliable || rr.patchOnly || rr.fullStateOnly || rr.stream) throw new Error(`${ar} uses .noSync() together with a sync-only modifier (.view/.unreliable/.patchOnly/.fullStateOnly/.stream). A local-only field cannot be synchronized.`);
            Ir(Kr, rr);
            continue
          }
          if (rr.patchOnly && rr.fullStateOnly) throw new Error(`${ar} uses .patchOnly() together with .fullStateOnly(). Those are the only two delivery channels, so the field would never reach a client \u2014 use .noSync() if that is intended.`);
          const Sr = iS(rr.type, ar);
          if ("function" === typeof Sr && !lZ.is(Sr)) throw new Error(`${ar} is a synced ref to non-Schema class '${Sr.name||"(anonymous)"}' \u2014 use .noSync(), or Metadata.setFields().`);
          Zr[Kr] = Sr, void 0 !== rr.view && (fr[Kr] = rr.view), rr.unreliable && Er.push(Kr), rr.patchOnly && pr.push(Kr), rr.deprecated && (xr[Kr] = rr.deprecatedThrows), rr.fullStateOnly && mr.push(Kr), rr.stream && Nr.push(Kr), void 0 !== rr.streamPriority && (Ur[Kr] = rr.streamPriority), rr.optional && tr.push(Kr), Ir(Kr, rr)
        } else {
          if ("function" !== typeof Qr) throw new Error(`${ar} must be a t.* builder, Schema subclass, or method (got ${typeof Qr}).`);
          lZ.is(Qr) ? (Zr[Kr] = Qr, Qr.prototype.initialize && 0 !== Qr.prototype.initialize.length || (jr[Kr] = () => new Qr)) : Wr[Kr] = Qr
        }
      }
      const hr = rr => {
          for (const Sr in ar) rr[Sr] = ar[Sr];
          for (const Sr in jr) rr[Sr] = jr[Sr]()
        },
        zr = () => {
          const rr = {};
          return hr(rr), rr
        },
        Yr = "function" === typeof Wr.initialize,
        nr = Wr.initialize ?? Qr._initialize,
        er = class extends Qr {
          constructor() {
            for (var rr = arguments.length, Sr = new Array(rr), Qr = 0; Qr < rr; Qr++) Sr[Qr] = arguments[Qr];
            const Wr = Sr[0];
            void 0 === Wr ? (super(), hr(this)) : super(Object.assign(zr(), Yr ? (rr => {
              const Sr = Object.keys(Zr),
                Qr = {};
              for (const Zr in rr) Sr.includes(Zr) || (Qr[Zr] = rr[Zr]);
              return Qr
            })(Wr) : Wr)), nr && new.target === er && nr.apply(this, Sr)
          }
        };
      Sr && Object.defineProperty(er, "name", {
        value: Sr
      }), bS.setFields(er, Zr), er._getDefaultValues = zr, er._initialize = nr, Object.assign(er.prototype, Wr);
      for (const Kr in fr) hZ(fr[Kr])(er.prototype, Kr);
      for (const Kr of Er) zZ(er.prototype, Kr);
      for (const Kr of pr) YZ(er.prototype, Kr);
      for (const Kr in xr) BZ(xr[Kr])(er.prototype, Kr);
      if (mr.length > 0 || Nr.length > 0) {
        const rr = er[Symbol.metadata];
        for (const Sr of mr) bS.setFullStateOnly(rr, Sr);
        for (const Sr of Nr) bS.setStream(rr, Sr);
        for (const Sr in Ur) bS.setStreamPriority(rr, Sr, Ur[Sr])
      }
      if (tr.length > 0) {
        const rr = er[Symbol.metadata];
        for (const Sr of tr) rr[rr[Sr]].optional = !0
      }
      return er.extend = (rr, Sr) => OZ(rr, Sr, er), er
    }

    function LZ(rr) {
      const Sr = rr[tr].root,
        Qr = {
          ops: {},
          refs: []
        };
      let Zr = Sr.changes.next;
      for (; Zr;) {
        const rr = Zr.changeTree;
        void 0 !== rr ? (Qr.refs.push(`refId#${rr.ref[Ir]}`), rr.forEach(((rr, Sr) => {
          if (rr < 0 || !Sr) return;
          const Zr = Wr[Sr];
          Qr.ops[Zr] || (Qr.ops[Zr] = 0), Qr.ops[Zr]++
        })), Zr = Zr.next) : Zr = Zr.next
      }
      return Qr
    }
    class lZ {
      static[Er] = RQ;
      static[pr] = JQ;
      [Ir];
      [Kr];
      static initialize(rr) {
        Object.defineProperty(rr, tr, {
          value: new XQ(rr),
          enumerable: !1,
          writable: !0
        }), rr[Kr] = []
      }
      static initializeForDecoder() {
        const rr = Object.create(this.prototype);
        return HQ(rr), rr[Kr] = [], rr
      }
      static reset(rr) {
        const Sr = rr?.[tr];
        if (void 0 === Sr || "function" !== typeof Sr.recycle) throw new Error("@colyseus/schema: Schema.reset() requires a tracked (encoder-side) instance.");
        if (void 0 !== Sr.extraParents) throw new Error(`@colyseus/schema: cannot reset a shared instance (${rr.constructor.name}) with multiple parents.`);
        rr[nr]()
      } [nr]() {
        const rr = this.constructor[Symbol.metadata],
          Sr = rr?.[Lr] ?? [],
          Qr = this[Kr];
        for (let Zr = 0; Zr < Sr.length; Zr++) {
          const rr = Qr[Sr[Zr]];
          rr?.[nr]?.()
        }
        this[tr].recycle(), this[Ir] = void 0
      }
      static is(rr) {
        const Sr = rr[Symbol.metadata];
        return "object" === typeof Sr && null !== Sr
      }
      static isSchema(rr) {
        return "function" === typeof rr?.assign
      }
      static[fr](rr, Sr) {
        let Qr = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Wr.ADD;
        rr.change(Sr, Qr)
      }
      static[xr](rr, Sr, Qr) {
        const Zr = rr.constructor[Symbol.metadata],
          Wr = Zr[Sr]?.tag;
        return void 0 === Qr ? void 0 === Wr : void 0 === Wr || (Wr === UZ ? Qr.isChangeTreeVisible(rr[tr]) : Qr.hasTagOnTree(rr[tr], Wr))
      }
      constructor(rr) {
        lZ.initialize(this), rr && lZ.assignProps(this, rr)
      }
      assign(rr) {
        return lZ.assignProps(this, rr), this
      }
      static assignProps(rr, Sr) {
        const Qr = rr.constructor[Symbol.metadata];
        if (Qr && void 0 !== Qr[Or])
          for (let Wr = 0; Wr <= Qr[Or]; Wr++) {
            const Zr = Qr[Wr];
            if (!Zr) continue;
            const ar = Sr[Zr.name];
            void 0 !== ar && (rr[Zr.name] = ar)
          }
        const Zr = Object.keys(Sr);
        for (let Wr = 0; Wr < Zr.length; Wr++) {
          const ar = Zr[Wr];
          Qr && void 0 !== Qr[ar] || (rr[ar] = Sr[ar])
        }
      }
      restore(rr) {
        const Sr = this.constructor[Symbol.metadata];
        for (const Qr in Sr) {
          const Zr = Sr[Qr],
            Wr = Zr.name,
            ar = Zr.type,
            jr = rr[Wr];
          if (void 0 !== jr && null !== jr)
            if ("string" === typeof ar) this[Wr] = jr;
            else if (lZ.is(ar)) {
            const rr = new ar;
            rr.restore(jr), this[Wr] = rr
          } else if ("object" === typeof ar) {
            const rr = Object.keys(ar)[0],
              Sr = ar[rr];
            if ("map" === rr) {
              const rr = this[Wr];
              for (const Qr in jr)
                if (lZ.is(Sr)) {
                  const Zr = new Sr;
                  Zr.restore(jr[Qr]), rr.set(Qr, Zr)
                } else rr.set(Qr, jr[Qr])
            } else if ("array" === rr) {
              const rr = this[Wr];
              for (let Qr = 0; Qr < jr.length; Qr++)
                if (lZ.is(Sr)) {
                  const Zr = new Sr;
                  Zr.restore(jr[Qr]), rr.push(Zr)
                } else rr.push(jr[Qr])
            }
          }
        }
        return this
      }
      setDirty(rr, Sr) {
        const Qr = this.constructor[Symbol.metadata];
        this[tr].change(Qr[Qr[rr]].index, Sr)
      }
      pauseTracking() {
        this[tr].pause()
      }
      resumeTracking() {
        this[tr].resume()
      }
      untracked(rr) {
        return this[tr].untracked(rr)
      }
      get isTrackingPaused() {
        return this[tr].paused
      }
      clone() {
        const rr = Object.create(this.constructor.prototype);
        lZ.initialize(rr);
        const Sr = this.constructor[Symbol.metadata];
        for (const Qr in Sr) {
          const Zr = Sr[Qr].name;
          "object" === typeof this[Zr] && "function" === typeof this[Zr]?.clone ? rr[Zr] = this[Zr].clone() : rr[Zr] = this[Zr]
        }
        return rr
      }
      toJSON() {
        const rr = {},
          Sr = this.constructor[Symbol.metadata];
        for (const Qr in Sr) {
          const Zr = Sr[Qr],
            Wr = Zr.name;
          Zr.deprecated || null === this[Wr] || "undefined" === typeof this[Wr] || (rr[Wr] = "function" === typeof this[Wr].toJSON ? this[Wr].toJSON() : this[Wr])
        }
        return rr
      }
      discardAllChanges() {
        this[tr].discardAll()
      } [mr](rr) {
        return this[this.constructor[Symbol.metadata][rr].name]
      } [Nr](rr) {
        this[this.constructor[Symbol.metadata][rr].name] = void 0
      }
      static debugRefIds(rr) {
        let Sr = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          Qr = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          Zr = arguments.length > 3 ? arguments[3] : void 0,
          Wr = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "";
        const ar = Sr ? ` - ${JSON.stringify(rr.toJSON())}` : "",
          jr = rr[tr],
          fr = rr[Ir],
          Er = Zr ? Zr.root.refCount[fr] : jr.refCount,
          pr = Er > 1 ? ` [\xd7${Er}]` : "";
        let xr = `${function(rr){return new Array(rr).fill(0).map(((Sr,Qr)=>Qr===rr-1?"\u2514\u2500 ":"   ")).join("")}(Qr)}${Wr}${rr.constructor.name} (refId: ${fr})${pr}${ar}\n`;
        return jr.forEachChild(((Wr, ar) => {
          let jr = ar;
          "number" === typeof ar && rr.$indexes && (jr = rr.$indexes.get(ar) ?? ar);
          const Ir = void 0 !== rr.forEach && void 0 !== jr ? `["${jr}"]: ` : "";
          xr += this.debugRefIds(Wr.ref, Sr, Qr + 1, Zr, Ir)
        })), xr
      }
      static debugRefIdEncodingOrder(rr) {
        let Sr = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "allChanges";
        const Qr = [],
          Zr = rr[tr];
        if ("changes" === Sr) {
          let rr = Zr.root.changes?.next;
          for (; rr;) rr.changeTree && Qr.push(rr.changeTree.ref[Ir]), rr = rr.next;
          return Qr
        }
        const Wr = "allFilteredChanges" === Sr,
          ar = new Set,
          jr = rr => {
            ar.has(rr) || (ar.add(rr), rr.isFiltered === Wr && Qr.push(rr.ref[Ir]), rr.forEachChild(((rr, Sr) => jr(rr))))
          };
        return jr(Zr), Qr
      }
      static debugRefIdsFromDecoder(rr) {
        return this.debugRefIds(rr.state, !1, 0, rr)
      }
      static debugChanges(rr) {
        let Sr = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        const Qr = rr[tr],
          Zr = Sr ? "allChanges" : "changes";
        let ar = `${rr.constructor.name} (${rr[Ir]}) -> .${Zr}:\n`;
        return Sr ? Qr.forEachLive((rr => {
          ar += `- [${rr}]: ADD (${JSON.stringify(Qr.getValue(Number(rr),!0))})\n`
        })) : Qr.forEach(((rr, Sr) => {
          rr < 0 || !Sr || (ar += `- [${rr}]: ${Wr[Sr]} (${JSON.stringify(Qr.getValue(Number(rr),!1))})\n`)
        })), ar
      }
    }
    ar(lZ);
    const XZ = {
      value: 0,
      enumerable: !1,
      writable: !0
    };
    class PZ {
      types;
      nextUniqueId = 0;
      changeTrees = {};
      get refCount() {
        const rr = {};
        for (const Sr in this.changeTrees) rr[Sr] = this.changeTrees[Sr].refCount;
        return rr
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
      enqueueFilterRefresh(rr) {
        this.types.hasFilters && (rr.flags & LQ || (rr.flags |= LQ, this.pendingFilterRefresh.push(rr)))
      }
      _nodePool = [];
      _nextViewId = 0;
      _freeViewIds = [];
      acquireViewId() {
        return this._freeViewIds.length > 0 ? this._freeViewIds.pop() : this._nextViewId++
      }
      releaseViewId(rr) {
        this._freeViewIds.push(rr)
      }
      activeViews = new Map;
      streamTrees = new Set;
      registerView(rr) {
        this.activeViews.set(rr.id, new WeakRef(rr))
      }
      unregisterView(rr) {
        this.activeViews.delete(rr.id);
        const Sr = rr.id;
        for (const Qr of this.streamTrees) Qr._dropView(Sr)
      }
      forEachActiveView(rr) {
        for (const [Sr, Qr] of this.activeViews) {
          const Zr = Qr.deref();
          if (void 0 !== Zr) rr(Zr);
          else {
            this.activeViews.delete(Sr);
            for (const rr of this.streamTrees) rr._dropView(Sr)
          }
        }
      }
      registerStream(rr) {
        this.streamTrees.add(rr)
      }
      unregisterStream(rr) {
        this.streamTrees.delete(rr)
      }
      constructor(rr) {
        let Sr = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        this.types = rr, this.nextUniqueId = Sr
      }
      add(rr) {
        const Sr = rr.ref;
        void 0 === Sr[Ir] && (XZ.value = this.nextUniqueId++, Object.defineProperty(Sr, Ir, XZ));
        const Qr = Sr[Ir],
          Zr = void 0 === this.changeTrees[Qr];
        Zr && (this.changeTrees[Qr] = rr), rr.needsRestage && (rr.needsRestage = !1, rr.forEachLiveWithCtx(rr, QQ));
        const Wr = Zr ? 0 : rr.refCount;
        return rr.refCount = Wr + 1, Wr > 0 && this.enqueueFilterRefresh(rr), Zr
      }
      remove(rr) {
        const Sr = rr.refCount - 1;
        if (Sr <= 0) {
          if (rr.root = void 0, delete this.changeTrees[rr.ref[Ir]], rr.isStreamCollection) {
            const Sr = rr.ref;
            Sr._unregister?.(), this.unregisterStream(Sr)
          }
          this.removeFromQueue(rr), this.removeFromUnreliableQueue(rr), rr.refCount = 0, rr.needsRestage = !0, rr.forEachChild(((Sr, Qr) => {
            Sr.removeParent(rr.ref) && (void 0 === Sr.parentRef || Sr.refCount > 0 ? this.remove(Sr) : this.moveNextToParent(Sr))
          }))
        } else rr.refCount = Sr, this.enqueueFilterRefresh(rr), this.recursivelyMoveNextToParent(rr);
        return Sr
      }
      recursivelyMoveNextToParent(rr) {
        this.moveNextToParent(rr), rr.forEachChild(((rr, Sr) => this.recursivelyMoveNextToParent(rr)))
      }
      moveNextToParent(rr) {
        rr.changesNode && this._moveNextToParentInList(this.changes, rr, rr.changesNode, "changesNode"), rr.unreliableChangesNode && this._moveNextToParentInList(this.unreliableChanges, rr, rr.unreliableChangesNode, "unreliableChangesNode")
      }
      _moveNextToParentInList(rr, Sr, Qr, Zr) {
        const Wr = Sr.parent;
        if (!Wr || !Wr[tr]) return;
        const ar = Wr[tr][Zr];
        ar && ar !== Qr && (Qr.position > ar.position || (Qr.prev ? Qr.prev.next = Qr.next : rr.next = Qr.next, Qr.next ? Qr.next.prev = Qr.prev : rr.tail = Qr.prev, Qr.prev = rr.tail, Qr.next = void 0, rr.tail.next = Qr, rr.tail = Qr, Qr.position = rr.nextPosition++))
      }
      enqueueChangeTree(rr) {
        (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : rr.changesNode) || (rr.changesNode = this._appendToList(this.changes, rr))
      }
      enqueueUnreliable(rr) {
        (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : rr.unreliableChangesNode) || (rr.unreliableChangesNode = this._appendToList(this.unreliableChanges, rr))
      }
      _appendToList(rr, Sr) {
        const Qr = this._nodePool;
        let Zr;
        return Qr.length > 0 ? (Zr = Qr.pop(), Zr.changeTree = Sr, Zr.next = void 0, Zr.prev = void 0) : Zr = {
          changeTree: Sr,
          next: void 0,
          prev: void 0,
          position: 0
        }, rr.next ? (Zr.prev = rr.tail, rr.tail.next = Zr, rr.tail = Zr) : (rr.nextPosition = 0, rr.next = Zr, rr.tail = Zr), Zr.position = rr.nextPosition++, Zr
      }
      releaseNode(rr) {
        rr.changeTree = void 0, rr.prev = void 0, rr.next = void 0, this._nodePool.push(rr)
      }
      removeFromQueue(rr) {
        return this._removeNode(this.changes, rr, rr.changesNode, "changesNode")
      }
      removeFromUnreliableQueue(rr) {
        return this._removeNode(this.unreliableChanges, rr, rr.unreliableChangesNode, "unreliableChangesNode")
      }
      _removeNode(rr, Sr, Qr, Zr) {
        return !(!Qr || Qr.changeTree !== Sr) && (Qr.prev ? Qr.prev.next = Qr.next : rr.next = Qr.next, Qr.next ? Qr.next.prev = Qr.prev : rr.tail = Qr.prev, Sr[Zr] = void 0, this.releaseNode(Qr), !0)
      }
    }

    function HZ(rr, Sr) {
      if (-1 === Sr || Sr >= rr.length) return !1;
      const Qr = rr.length - 1;
      for (let Zr = Sr; Zr < Qr; Zr++) rr[Zr] = rr[Zr + 1];
      return rr.length = Qr, !0
    }

    function qZ(rr, Sr, Qr) {
      const Zr = ~Qr,
        Wr = rr.changeTrees;
      for (const ar in Wr) {
        const rr = Wr[ar],
          Qr = rr.visibleViews;
        void 0 !== Qr && Sr < Qr.length && (Qr[Sr] &= Zr);
        const jr = rr.subscribedViews;
        void 0 !== jr && Sr < jr.length && (jr[Sr] &= Zr);
        const Ir = rr.tagViews;
        void 0 !== Ir && Ir.forEach((rr => {
          Sr < rr.length && (rr[Sr] &= Zr)
        }))
      }
    }
    const RZ = new FinalizationRegistry((rr => {
      let {
        root: Sr,
        id: Qr,
        slot: Zr,
        bit: Wr
      } = rr;
      qZ(Sr, Zr, Wr), Sr.activeViews.delete(Qr);
      for (const ar of Sr.streamTrees) ar._dropView(Qr);
      Sr.releaseViewId(Qr)
    }));

    function gZ(rr) {
      if (void 0 === rr) return "undefined";
      if (null === rr) return "null";
      const Sr = typeof rr;
      return "string" === Sr ? JSON.stringify(rr.length > 30 ? `${rr.slice(0,30)}\u2026` : rr) : "object" !== Sr && "function" !== Sr ? `${Sr} ${String(rr)}` : Array.isArray(rr) ? `Array(${rr.length})` : rr.constructor?.name ?? "Object"
    }
    class CZ {
      iterable;
      items;
      id = -1;
      _root;
      _slot = 0;
      _bit = 0;
      changes = new Map;
      constructor() {
        let rr = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        this.iterable = rr, rr && (this.items = [])
      }
      _bindRoot(rr) {
        void 0 === this._root && (this._root = rr, this.id = rr.acquireViewId(), this._slot = this.id >> 5, this._bit = 1 << (31 & this.id), rr.registerView(this), RZ.register(this, {
          root: rr,
          id: this.id,
          slot: this._slot,
          bit: this._bit
        }, this))
      }
      dispose() {
        void 0 !== this._root && (this._root.unregisterView(this), qZ(this._root, this._slot, this._bit), this._root.releaseViewId(this.id), RZ.unregister(this), this._root = void 0, this.id = -1)
      }
      isVisible(rr) {
        const Sr = rr.visibleViews,
          Qr = this._slot;
        return void 0 !== Sr && Qr < Sr.length && 0 !== (Sr[Qr] & this._bit)
      }
      markVisible(rr) {
        const Sr = this._slot;
        let Qr = rr.visibleViews;
        for (void 0 === Qr && (Qr = rr.visibleViews = []); Qr.length <= Sr;) Qr.push(0);
        Qr[Sr] |= this._bit
      }
      unmarkVisible(rr) {
        const Sr = rr.visibleViews;
        if (void 0 === Sr) return;
        const Qr = this._slot;
        Qr < Sr.length && (Sr[Qr] &= ~this._bit)
      }
      isSubscribed(rr) {
        const Sr = rr.subscribedViews,
          Qr = this._slot;
        return void 0 !== Sr && Qr < Sr.length && 0 !== (Sr[Qr] & this._bit)
      }
      _setSubscribed(rr) {
        const Sr = this._slot;
        let Qr = rr.subscribedViews;
        for (void 0 === Qr && (Qr = rr.subscribedViews = []); Qr.length <= Sr;) Qr.push(0);
        Qr[Sr] |= this._bit
      }
      _clearSubscribed(rr) {
        const Sr = rr.subscribedViews;
        if (void 0 === Sr) return;
        const Qr = this._slot;
        Qr < Sr.length && (Sr[Qr] &= ~this._bit)
      }
      hasTagOnTree(rr, Sr) {
        const Qr = rr.tagViews;
        if (void 0 === Qr) return !1;
        const Zr = this._slot,
          Wr = this._bit;
        for (let ar = Sr; 0 !== ar; ar &= ar - 1) {
          const rr = Qr.get(ar & -ar);
          if (void 0 !== rr && Zr < rr.length && 0 !== (rr[Zr] & Wr)) return !0
        }
        return !1
      }
      addTag(rr, Sr) {
        if (Sr === UZ) return;
        let Qr = rr.tagViews;
        void 0 === Qr && (Qr = rr.tagViews = new Map);
        const Zr = this._slot,
          Wr = this._bit;
        for (let ar = Sr; ar > 0; ar &= ar - 1) {
          const rr = ar & -ar;
          let Sr = Qr.get(rr);
          for (void 0 === Sr && (Sr = [], Qr.set(rr, Sr)); Sr.length <= Zr;) Sr.push(0);
          Sr[Zr] |= Wr
        }
      }
      removeTag(rr, Sr) {
        if (Sr === UZ) return;
        const Qr = rr.tagViews;
        if (void 0 === Qr) return;
        const Zr = this._slot,
          Wr = ~this._bit;
        for (let ar = Sr; ar > 0; ar &= ar - 1) {
          const rr = Qr.get(ar & -ar);
          void 0 !== rr && Zr < rr.length && (rr[Zr] &= Wr)
        }
      }
      removeAllTagsOnTree(rr) {
        const Sr = rr.tagViews;
        if (void 0 === Sr) return;
        const Qr = this._slot,
          Zr = ~this._bit;
        Sr.forEach((rr => {
          Qr < rr.length && (rr[Qr] &= Zr)
        }))
      }
      add(rr) {
        let Sr = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : UZ,
          Qr = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        return this._add(rr, Sr, Qr, !1)
      }
      _addImmediate(rr) {
        let Sr = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : UZ;
        this._add(rr, Sr, !0, !0)
      }
      _add(rr, Sr, Qr, Zr) {
        const ar = rr?.[tr];
        if (!ar) return console.warn(`StateView#add(): expected a Schema instance or collection, received ${gZ(rr)}`), !1;
        const jr = ar.parent;
        if (!jr && 0 !== rr[Ir]) throw new Error(`Cannot add a detached instance to the StateView. Make sure to assign the "${ar.ref.constructor.name}" instance to the state before calling view.add()`);
        void 0 === this._root && void 0 !== ar.root && this._bindRoot(ar.root);
        const fr = jr?.[tr];
        if (!Zr && fr?.isStreamCollection) return HS(jr, this.id, ar.parentIndex), !0;
        const Er = rr.constructor[Symbol.metadata],
          pr = this.isVisible(ar);
        if (!this.iterable || !Qr || pr && -1 !== this.items.indexOf(rr) || this.items.push(rr), this.markVisible(ar), Qr && jr && this.addParentOf(ar, Sr), !Zr && ar.isStreamCollection) return !0;
        if (Sr === UZ && ar.isNew) return this._markSubtreeVisible(ar, Sr), !1;
        let xr = this.changes.get(rr[Ir]);
        void 0 === xr && (xr = new Map, this.changes.set(rr[Ir], xr));
        let mr = !1;
        const Nr = ar.encDescriptor.tags;
        if (ar.forEachChild(((rr, Qr) => {
            const Zr = Nr[Qr];
            if (void 0 !== Zr) {
              if (!(Zr === UZ || Sr !== UZ && 0 !== (Zr & Sr))) return
            }
            this.add(rr.ref, Sr, !1) && (mr = !0)
          })), Sr !== UZ) {
          this.addTag(ar, Sr);
          const rr = Er?.[Xr];
          if (void 0 !== rr)
            for (let Qr = Sr; Qr > 0; Qr &= Qr - 1) rr[Qr & -Qr]?.forEach((rr => {
              ar.getChange(rr) !== Wr.DELETE && xr.set(rr, Wr.ADD)
            }))
        }
        if ((Sr === UZ || !pr) && (!ar.isNew || mr))
          if (ar.isArray && "string" !== typeof ar.refTarget[hr]) ar.refTarget.items.length > 0 && (xr.set(-1, Wr.ADD), mr = !0);
          else {
            const rr = ar.encDescriptor.tags;
            ar.forEachLive((Qr => {
              const Zr = rr[Qr];
              (void 0 === Zr || Zr === UZ || Sr !== UZ && 0 !== (Zr & Sr)) && (xr.set(Qr, Wr.ADD), mr = !0)
            }))
          } return mr
      }
      _markSubtreeVisible(rr, Sr) {
        const Qr = rr.encDescriptor.tags;
        rr.forEachChild(((rr, Zr) => {
          const Wr = Qr[Zr];
          if (void 0 !== Wr) {
            if (!(Wr === UZ || Sr !== UZ && 0 !== (Wr & Sr))) return
          }
          rr.isNew ? (this.markVisible(rr), this._markSubtreeVisible(rr, Sr)) : this._add(rr.ref, Sr, !1, !1)
        }))
      }
      addParentOf(rr, Sr) {
        const Qr = rr.parent[tr],
          Zr = rr.parentIndex;
        this.isVisible(Qr) || this.markVisible(Qr);
        const ar = Qr.parent?.[tr];
        if (ar && this.addParentOf(Qr, Sr), Qr.hasFilteredFields && Qr.getChange(Zr) !== Wr.DELETE) {
          let ar = this.changes.get(Qr.ref[Ir]);
          void 0 === ar && (ar = new Map, this.changes.set(Qr.ref[Ir], ar));
          const jr = Qr.encDescriptor.tags[Zr];
          void 0 !== jr && jr !== UZ && 0 !== (jr & Sr) && this.addTag(Qr, Sr), ar.set(Qr.isArray ? rr : Zr, Wr.ADD)
        }
      }
      _touchAncestorsOf(rr) {
        let Sr = rr.parent?.[tr];
        if (void 0 === Sr) return;
        const Qr = [];
        for (; void 0 !== Sr;) {
          if (Sr.hasFilteredFields) {
            const rr = Sr.ref[Ir];
            if (this.changes.has(rr)) break;
            Qr.push(Sr)
          }
          Sr = Sr.parent?.[tr]
        }
        for (let Zr = Qr.length - 1; Zr >= 0; Zr--) this.changes.set(Qr[Zr].ref[Ir], new Map)
      }
      remove(rr) {
        let Sr = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : UZ,
          Qr = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        const Zr = rr?.[tr];
        if (!Zr) return console.warn(`StateView#remove(): expected a Schema instance or collection, received ${gZ(rr)}`), this;
        const ar = Zr.parent?.[tr];
        if (ar?.isStreamCollection) return this.unmarkVisible(Zr), this.iterable && !Qr && HZ(this.items, this.items.indexOf(rr)),
          function(rr, Sr, Qr, Zr, ar) {
            const jr = rr._stream;
            if (void 0 === jr) return !1;
            const Ir = jr.pendingByView.get(Sr);
            if (Ir?.has(Zr)) return Ir.delete(Zr), !1;
            const fr = jr.sentByView.get(Sr);
            if (fr?.has(Zr)) {
              fr.delete(Zr);
              let rr = ar.get(Qr);
              return void 0 === rr && (rr = new Map, ar.set(Qr, rr)), rr.set(Zr, Wr.DELETE), !0
            }
          }(Zr.parent, this.id, Zr.parent[Ir], Zr.parentIndex, this.changes), this._recursiveDeleteVisibleChangeTree(Zr), this;
        if (Zr.isStreamCollection) {
          this.unmarkVisible(Zr), this.iterable && !Qr && HZ(this.items, this.items.indexOf(rr));
          const Sr = Zr.ref,
            ar = Sr._stream;
          if (void 0 !== ar) {
            ar.pendingByView.get(this.id)?.clear();
            const rr = ar.sentByView.get(this.id);
            if (void 0 !== rr && rr.size > 0) {
              const Qr = Sr[Ir];
              let Zr = this.changes.get(Qr);
              void 0 === Zr && (Zr = new Map, this.changes.set(Qr, Zr));
              for (const Sr of rr) Zr.set(Sr, Wr.DELETE);
              rr.clear()
            }
          }
          return this
        }
        this.unmarkVisible(Zr), this.iterable && !Qr && HZ(this.items, this.items.indexOf(rr));
        const jr = Zr.ref,
          fr = jr.constructor[Symbol.metadata],
          Er = jr[Ir];
        this._touchAncestorsOf(Zr);
        let pr = this.changes.get(Er);
        if (void 0 === pr && (pr = new Map, this.changes.set(Er, pr)), Sr === UZ) {
          const rr = Zr.parent;
          if (rr && !bS.isValidInstance(rr) && Zr.isFiltered) {
            const Sr = ar.isArray ? Zr : Zr.parentIndex,
              Qr = rr[Ir];
            let jr = this.changes.get(Qr);
            void 0 === jr ? (jr = new Map, this.changes.set(Qr, jr)) : jr.get(Sr) === Wr.ADD && this._dropPendingEntries(Zr), jr.set(Sr, Wr.DELETE), this._recursiveDeleteVisibleChangeTree(Zr)
          } else fr?.[lr]?.forEach((rr => this._removeViewField(Zr, pr, rr)))
        } else {
          const rr = fr?.[Xr];
          if (void 0 !== rr)
            for (let Qr = Sr; Qr > 0; Qr &= Qr - 1) rr[Qr & -Qr]?.forEach((rr => this._removeViewField(Zr, pr, rr)))
        }
        return void 0 === Sr ? this.removeAllTagsOnTree(Zr) : this.removeTag(Zr, Sr), this
      }
      has(rr) {
        return this.isVisible(rr[tr])
      }
      hasTag(rr) {
        let Sr = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : UZ;
        return this.hasTagOnTree(rr[tr], Sr)
      }
      subscribe(rr, Sr) {
        const Qr = rr?.[tr];
        if (!Qr) return console.warn(`StateView#subscribe(): expected a Schema collection, received ${gZ(rr)}`), this;
        if (void 0 === this._root && void 0 !== Qr.root && this._bindRoot(Qr.root), void 0 !== Sr)
          if (Qr.isStreamCollection) {
            const Qr = OS(rr);
            null === Sr ? Qr.priorityByView?.delete(this.id) : (Qr.priorityByView ??= new Map).set(this.id, Sr)
          } else {
            const Sr = rr?.constructor?.name ?? "collection",
              Zr = Qr.parent;
            if (void 0 === Zr) console.warn(`StateView#subscribe(): \`priority\` ignored \u2014 this ${Sr} is not attached to a state yet, so it cannot be identified as a stream. Subscribe after assigning it to the state.`);
            else {
              const rr = Zr?.constructor?.[Symbol.metadata]?.[Qr.parentIndex]?.name,
                Wr = rr ? `${Zr.constructor.name}#${rr}` : Sr;
              console.warn(`StateView#subscribe(): \`priority\` ignored \u2014 ${Wr} is a ${Sr}, not a streaming collection. Declare the field with .stream() (e.g. t.map(X).stream()) or use t.stream(X) to enable priority batching.`)
            }
          } if (this.isSubscribed(Qr)) return this;
        const Zr = void 0 !== Qr.parent && !this.isVisible(Qr);
        if (Zr ? (this.addParentOf(Qr, UZ), this._add(rr, UZ, !1, !1)) : this.markVisible(Qr), this._setSubscribed(Qr), Qr.isStreamCollection) {
          const Sr = rr;
          Qr.forEachChild(((rr, Qr) => {
            HS(Sr, this.id, Qr)
          }))
        } else Zr || Qr.forEachChild((rr => {
          this.markVisible(rr)
        }));
        return this
      }
      unsubscribe(rr) {
        const Sr = rr?.[tr];
        if (!Sr) return console.warn(`StateView#unsubscribe(): expected a Schema collection, received ${gZ(rr)}`), this;
        if (!this.isSubscribed(Sr)) return this;
        this._clearSubscribed(Sr);
        const Qr = Sr.ref[Ir];
        if (Sr.isStreamCollection) {
          const Sr = rr._stream;
          if (void 0 !== Sr) {
            Sr.pendingByView.get(this.id)?.clear();
            const rr = Sr.sentByView.get(this.id);
            if (void 0 !== rr && rr.size > 0) {
              let Sr = this.changes.get(Qr);
              void 0 === Sr && (Sr = new Map, this.changes.set(Qr, Sr));
              for (const Qr of rr) Sr.set(Qr, Wr.DELETE);
              rr.clear()
            }
          }
        } else {
          const rr = Sr.isArray;
          let Zr = this.changes.get(Qr);
          Sr.forEachChild(((Sr, ar) => {
            void 0 === Zr && (Zr = new Map, this.changes.set(Qr, Zr)), Zr.set(rr ? Sr : ar, Wr.DELETE), this.unmarkVisible(Sr)
          }))
        }
        return this.unmarkVisible(Sr), this
      }
      clear() {
        if (!this.iterable) throw new Error("StateView#clear() is only available for iterable StateView's. Use StateView(iterable: true) constructor.");
        for (let rr = 0, Sr = this.items.length; rr < Sr; rr++) this.remove(this.items[rr], UZ, !0);
        this.items.length = 0
      }
      isChangeTreeVisible(rr) {
        let Sr = this.isVisible(rr);
        if (!Sr && rr.isVisibilitySharedWithParent)
          if (this.isVisible(rr.parent[tr])) this.markVisible(rr), Sr = !0;
          else
            for (let Qr = rr.extraParents; void 0 !== Qr; Qr = Qr.next) {
              const Zr = Qr.ref[tr];
              if (Zr.isFiltered && this.isVisible(Zr)) {
                this.markVisible(rr), Sr = !0;
                break
              }
            }
        return Sr
      }
      _recursiveDeleteVisibleChangeTree(rr) {
        rr.forEachChild((rr => {
          this.unmarkVisible(rr), this._recursiveDeleteVisibleChangeTree(rr)
        }))
      }
      _dropPendingEntries(rr) {
        this.changes.delete(rr.ref[Ir]), rr.forEachChild((rr => this._dropPendingEntries(rr)))
      }
      _removeViewField(rr, Sr, Qr) {
        const Zr = Sr.get(Qr) === Wr.ADD;
        Sr.set(Qr, Wr.DELETE);
        const ar = rr.ref[rr.encDescriptor.names[Qr]],
          jr = ar?.[tr];
        jr && (this.unmarkVisible(jr), this._recursiveDeleteVisibleChangeTree(jr), Zr && this._dropPendingEntries(jr))
      }
    }

    function MZ(rr) {
      rr.structSwitchEmitted || (rr.shouldEmitSwitch && (rr.buffer[rr.it.offset++] = 255, SS.number(rr.buffer, rr.ref[Ir], rr.it)), rr.structSwitchEmitted = !0)
    }

    function GZ(rr, Sr) {
      VZ(rr, Sr, Wr.ADD)
    }

    function kZ(rr, Sr) {
      if (Sr._fullSyncGen === rr.gen) return;
      Sr._fullSyncGen = rr.gen;
      if (!rr.hasView || rr.view.isChangeTreeVisible(Sr)) {
        const Qr = Sr.encDescriptor;
        rr.changeTree = Sr, rr.ref = Sr.ref, rr.encoder = Qr.encoder, rr.filter = Qr.filter, rr.metadata = Qr.metadata, rr.treeIsFiltered = Sr.isFiltered, rr.isSchema = Qr.isSchema, rr.filterBitmask = Qr.filterBitmask, rr.tags = Qr.tags, rr.structSwitchEmitted = !1, rr.shouldEmitSwitch = rr.hasView || rr.it.offset > rr.initialOffset || Sr !== rr.rootChangeTree, Sr.isArray && Sr.collDirty.size > 0 && (Sr.flags |= 512), WQ(Sr, rr, GZ)
      }
      zQ(Sr, rr, AZ)
    }

    function AZ(rr, Sr, Qr) {
      kZ(rr, Sr)
    }

    function VZ(rr, Sr, Qr) {
      if (Sr < 0) {
        if (rr.treeIsFiltered !== rr.emitFiltered) return;
        return MZ(rr), void(rr.buffer[rr.it.offset++] = 255 & Math.abs(Sr))
      }
      if ((rr.isSchema ? rr.treeIsFiltered || (Sr < 32 ? 0 !== (rr.filterBitmask & 1 << Sr) : void 0 !== rr.tags[Sr]) : rr.treeIsFiltered) !== rr.emitFiltered) return;
      const Zr = rr.isEncodeAll ? Wr.ADD : Qr;
      void 0 !== Zr && (void 0 === rr.filter || rr.filter(rr.ref, Sr, rr.view)) && (MZ(rr), rr.encoder(rr.self, rr.buffer, rr.changeTree, Sr, Zr, rr.it, rr.isEncodeAll, rr.hasView, rr.metadata))
    }

    function iZ(rr, Sr) {
      const Qr = new Uint8Array(rr.length + Sr.length);
      return Qr.set(rr, 0), Qr.set(Sr, rr.length), Qr
    }
    class wZ {
      static BUFFER_SIZE = 16384;
      sharedBuffer = new Uint8Array(wZ.BUFFER_SIZE);
      context;
      state;
      root;
      constructor(rr, Sr) {
        this.context = AS.cache(rr.constructor), this.root = Sr ?? new PZ(this.context), this.setState(rr)
      }
      setState(rr) {
        this.state = rr, this.state[tr].setRoot(this.root)
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
        let rr = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
            offset: 0
          },
          Sr = arguments.length > 1 ? arguments[1] : void 0,
          Qr = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : this.sharedBuffer,
          Zr = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : rr.offset;
        return this._encodeChannel(rr, Sr, Qr, Zr, !1)
      }
      encodeUnreliable() {
        let rr = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
            offset: 0
          },
          Sr = arguments.length > 1 ? arguments[1] : void 0,
          Qr = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : this.sharedBuffer,
          Zr = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : rr.offset;
        return this._encodeChannel(rr, Sr, Qr, Zr, !0)
      }
      _encodeChannel(rr, Sr, Qr, Zr, Wr) {
        this.root.pendingFilterRefresh.length > 0 && jQ(this.root);
        const ar = void 0 !== Sr,
          jr = this.state[tr],
          Ir = this._encodeCtx;
        Ir.self = this, Ir.buffer = Qr, Ir.it = rr, Ir.view = Sr, Ir.isEncodeAll = !1, Ir.hasView = ar, Ir.emitFiltered = ar;
        let fr = Wr ? this.root.unreliableChanges : this.root.changes;
        for (; fr = fr.next;) {
          const Qr = fr.changeTree;
          if (ar && !Sr.isChangeTreeVisible(Qr)) continue;
          const Er = Wr ? Qr.unreliableRecorder : Qr;
          if (!Er || !Er.has()) continue;
          const pr = Qr.encDescriptor;
          Ir.changeTree = Qr, Ir.ref = Qr.ref, Ir.encoder = pr.encoder, Ir.filter = pr.filter, Ir.metadata = pr.metadata, Ir.treeIsFiltered = Qr.isFiltered, Ir.isSchema = pr.isSchema, Ir.filterBitmask = pr.filterBitmask, Ir.tags = pr.tags, Ir.structSwitchEmitted = !1, Ir.isRootTree = Qr === jr, Ir.shouldEmitSwitch = ar || rr.offset > Zr || !Ir.isRootTree, Er.forEachWithCtx(Ir, VZ)
        }
        return Wr || ar || !this._isStreamBroadcastMode || this._emitStreamBroadcast(Qr, rr), rr.offset > Qr.byteLength ? (Qr = this._resizeBuffer(Qr, rr.offset), rr.offset = Zr, this._encodeChannel(rr, Sr, Qr, Zr, Wr)) : Qr.subarray(0, rr.offset)
      }
      encodeFullSync(rr, Sr, Qr, Zr) {
        let Wr = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : rr.offset;
        this.root.pendingFilterRefresh.length > 0 && jQ(this.root);
        const ar = void 0 !== Zr,
          jr = this.state[tr],
          Ir = this._encodeCtx;
        return Ir.self = this, Ir.buffer = Sr, Ir.it = rr, Ir.view = Zr, Ir.isEncodeAll = !0, Ir.hasView = ar, Ir.emitFiltered = Qr, Ir.gen = ++this._fullSyncGen, Ir.initialOffset = Wr, Ir.rootChangeTree = jr, kZ(Ir, jr), rr.offset > Sr.byteLength ? (Sr = this._resizeBuffer(Sr, rr.offset), rr.offset = Wr, this.encodeFullSync(rr, Sr, Qr, Zr, Wr)) : Sr.subarray(0, rr.offset)
      }
      _resizeBuffer(rr, Sr) {
        const Qr = Math.ceil(Sr / wZ.BUFFER_SIZE) * wZ.BUFFER_SIZE,
          Zr = new Uint8Array(Qr);
        return Zr.set(rr), rr === this.sharedBuffer && (this.sharedBuffer = Zr), Zr
      }
      encodeAll() {
        let rr = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
            offset: 0
          },
          Sr = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.sharedBuffer;
        return this.encodeFullSync(rr, Sr, !1)
      }
      encodeAllView(rr, Sr, Qr) {
        let Zr = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : this.sharedBuffer;
        const Wr = Qr.offset;
        return Zr = this.encodeFullSync(Qr, Zr, !0, rr, Wr), iZ(Zr.subarray(0, Sr), Zr.subarray(Wr, Qr.offset))
      }
      ensureCapacity(rr, Sr) {
        if (Sr + wZ.BUFFER_SIZE <= rr.byteLength) return rr;
        const Qr = Math.ceil((Sr + wZ.BUFFER_SIZE) / wZ.BUFFER_SIZE) * wZ.BUFFER_SIZE,
          Zr = new Uint8Array(Qr);
        return Zr.set(rr.subarray(0, Sr)), rr === this.sharedBuffer && (this.sharedBuffer = Zr), Zr
      }
      encodeView(rr, Sr, Qr) {
        let Zr = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : this.sharedBuffer,
          ar = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4];
        const jr = Qr.offset;
        this._emitStreamPriority(rr);
        for (const fr of rr.changes.keys()) {
          const Sr = rr.changes.get(fr),
            ar = this.root.changeTrees[fr];
          if (void 0 === ar) {
            rr.changes.delete(fr);
            continue
          }
          if (0 === Sr.size) continue;
          const jr = ar.encDescriptor,
            Er = jr.encoder,
            pr = jr.metadata,
            xr = ar.ref,
            Nr = ar.refTarget;
          Zr = this.ensureCapacity(Zr, Qr.offset), Zr[Qr.offset++] = 255, SS.number(Zr, xr[Ir], Qr);
          for (const [fr, Ur] of Sr) {
            let Sr;
            if (-1 === fr) {
              const rr = Nr.tmpItems,
                Sr = Nr.deletedIndexes;
              for (let jr = 0; jr < rr.length; jr++) void 0 !== rr[jr] && !0 !== Sr[jr] && Er(this, Zr, ar, jr, Wr.ADD, Qr, !1, !0, pr);
              continue
            }
            if ("number" === typeof fr) Sr = fr;
            else {
              const Qr = fr.indexInParent(xr);
              if (void 0 === Qr) continue;
              if (Sr = Qr, Ur === Wr.ADD && ar.getChange(Sr) === Wr.DELETE) {
                rr.changes.delete(fr.ref[Ir]);
                continue
              }
            }
            Er(this, Zr, ar, Sr, void 0 !== Nr[mr](Sr) && Ur || Wr.DELETE, Qr, !1, !0, pr)
          }
        }
        return rr.changes.clear(), Zr = this.encode(Qr, rr, Zr), ar ? iZ(Zr.subarray(0, Sr), Zr.subarray(jr, Qr.offset)) : Zr.subarray(jr, Qr.offset)
      }
      encodeUnreliableView(rr, Sr, Qr) {
        let Zr = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : this.sharedBuffer;
        const Wr = Qr.offset;
        return Zr = this.encodeUnreliable(Qr, rr, Zr, Wr), iZ(Zr.subarray(0, Sr), Zr.subarray(Wr, Qr.offset))
      }
      _emitStreamBroadcast(rr, Sr) {
        const Qr = this.root.streamTrees;
        for (const Zr of Qr) {
          const Qr = Zr,
            ar = Qr[tr],
            jr = Qr[Ir];
          if (void 0 === jr) continue;
          const fr = Qr._stream,
            Er = fr.broadcastDeletes,
            pr = fr.broadcastPending,
            xr = fr.sentBroadcast,
            Nr = Er.size > 0,
            Ur = pr.size > 0,
            hr = ar.encDescriptor,
            zr = hr.encoder,
            Yr = hr.metadata;
          if (Nr || Ur) {
            if (rr[Sr.offset++] = 255, SS.number(rr, jr, Sr), Nr) {
              for (const Qr of Er) zr(this, rr, ar, Qr, Wr.DELETE, Sr, !1, !1, Yr);
              Er.clear()
            }
            const Zr = fr.maxPerTick,
              Ur = [];
            let hr = 0;
            const nr = [];
            for (const jr of pr) {
              if (hr >= Zr) break;
              const Ir = Qr[mr](jr);
              void 0 !== Ir ? (zr(this, rr, ar, jr, Wr.ADD, Sr, !1, !1, Yr), xr.add(jr), Ur.push(Ir), nr.push(jr), hr++) : nr.push(jr)
            }
            for (const rr of nr) pr.delete(rr);
            for (const Qr of Ur) {
              const Zr = Qr[tr];
              if (void 0 === Zr) continue;
              const ar = Qr[Ir];
              if (void 0 === ar) continue;
              rr[Sr.offset++] = 255, SS.number(rr, ar, Sr);
              const jr = Zr.encDescriptor,
                fr = jr.encoder,
                Er = jr.metadata;
              Zr.forEachLive((Qr => {
                bS.hasUnreliableAtIndex(Er, Qr) || fr(this, rr, Zr, Qr, Wr.ADD, Sr, !1, !1, Er)
              }))
            }
          }
          for (const Zr of xr) {
            const Wr = Qr[mr](Zr);
            if (void 0 === Wr) continue;
            const ar = Wr[tr];
            if (void 0 === ar || !ar.has()) continue;
            const jr = Wr[Ir];
            if (void 0 === jr) continue;
            rr[Sr.offset++] = 255, SS.number(rr, jr, Sr);
            const fr = ar.encDescriptor,
              Er = fr.encoder,
              pr = fr.metadata;
            ar.forEach(((Qr, Zr) => {
              Qr < 0 || bS.hasUnreliableAtIndex(pr, Qr) || Er(this, rr, ar, Qr, Zr, Sr, !1, !1, pr)
            }))
          }
        }
      }
      _emitStreamPriority(rr) {
        const Sr = this.root.streamTrees;
        if (0 === Sr.size) return;
        const Qr = rr.id;
        for (const Zr of Sr) {
          const Sr = Zr,
            ar = Sr._stream,
            jr = ar.pendingByView.get(Qr);
          if (void 0 === jr || 0 === jr.size) continue;
          const fr = ar.priorityByView?.get(Qr),
            Er = void 0 !== fr,
            pr = ar.priority,
            xr = ar.maxPerTick,
            Nr = [],
            Ur = [];
          if (Er || void 0 !== pr) {
            const Qr = [],
              Zr = [];
            let Wr = 0;
            for (const ar of jr) {
              const jr = Sr[mr](ar);
              if (void 0 === jr) {
                Ur.push(ar);
                continue
              }
              const Ir = Er ? fr(jr) : pr(rr, jr);
              if (Wr < xr) {
                let rr = Wr++;
                for (; rr > 0 && Zr[rr - 1] < Ir;) Zr[rr] = Zr[rr - 1], Qr[rr] = Qr[rr - 1], rr--;
                Zr[rr] = Ir, Qr[rr] = ar
              } else if (Ir > Zr[xr - 1]) {
                let rr = xr - 1;
                for (; rr > 0 && Zr[rr - 1] < Ir;) Zr[rr] = Zr[rr - 1], Qr[rr] = Qr[rr - 1], rr--;
                Zr[rr] = Ir, Qr[rr] = ar
              }
            }
            for (let rr = 0; rr < Wr; rr++) Nr.push(Qr[rr])
          } else
            for (const rr of jr) {
              if (Nr.length >= xr) break;
              Nr.push(rr)
            }
          for (const rr of Ur) jr.delete(rr);
          const hr = Nr.length;
          let zr = ar.sentByView.get(Qr);
          void 0 === zr && (zr = new Set, ar.sentByView.set(Qr, zr));
          for (let Qr = 0; Qr < hr; Qr++) {
            const Zr = Nr[Qr],
              ar = Sr[mr](Zr);
            if (void 0 === ar) {
              jr.delete(Zr);
              continue
            }
            rr._addImmediate(ar);
            const fr = ar[tr];
            if (void 0 !== fr) {
              const Sr = ar[Ir];
              let Qr = rr.changes.get(Sr);
              void 0 === Qr && (Qr = new Map, rr.changes.set(Sr, Qr));
              const Zr = fr.metadata;
              fr.forEachLive((rr => {
                bS.hasUnreliableAtIndex(Zr, rr) || Qr.set(rr, Wr.ADD)
              }))
            }
            jr.delete(Zr), zr.add(Zr)
          }
        }
      }
      discardChanges() {
        const rr = this.root.changes;
        let Sr = rr.next;
        const Qr = this.root;
        for (; Sr;) {
          const rr = Sr.next;
          Sr.changeTree.endEncode(), Qr.releaseNode(Sr), Sr = rr
        }
        rr.next = void 0, rr.tail = void 0
      }
      discardUnreliableChanges() {
        const rr = this.root.unreliableChanges;
        let Sr = rr.next;
        const Qr = this.root;
        for (; Sr;) {
          const rr = Sr.next;
          Sr.changeTree.endEncodeUnreliable(), Qr.releaseNode(Sr), Sr = rr
        }
        rr.next = void 0, rr.tail = void 0
      }
      tryEncodeTypeId(rr, Sr, Qr, Zr) {
        const Wr = this.context.getTypeId(Sr),
          ar = this.context.getTypeId(Qr);
        void 0 !== ar ? Wr !== ar && (rr[Zr.offset++] = 213, SS.number(rr, ar, Zr)) : console.warn(`@colyseus/schema WARNING: Class "${Qr.name}" is not registered on TypeRegistry - Please either tag the class with @entity or define a @type() field.`)
      }
      get hasChanges() {
        return void 0 !== this.root.changes.next || this._hasStreamBacklog()
      }
      get _isStreamBroadcastMode() {
        return 0 === this.root.activeViews.size && this.root.streamTrees.size > 0
      }
      _hasStreamBacklog() {
        const rr = this.root;
        if (0 === rr.streamTrees.size) return !1;
        const Sr = 0 === rr.activeViews.size;
        for (const Qr of rr.streamTrees)
          if (Sr ? PS(Qr) : XS(Qr, rr)) return !0;
        return !1
      }
      get hasUnreliableChanges() {
        return void 0 !== this.root.unreliableChanges.next
      }
    }
    class cZ extends Error {
      constructor(rr) {
        super(rr), this.name = "DecodingWarning"
      }
    }
    const FZ = {
      value: 0,
      enumerable: !1,
      writable: !0
    };
    class oZ {
      refs = new Map;
      refCount = {};
      deletedRefs = new Set;
      callbacks = {};
      nextUniqueId = 0;
      getNextUniqueId() {
        return this.nextUniqueId++
      }
      addRef(rr, Sr) {
        let Qr = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        this.refs.set(rr, Sr), void 0 === Sr[Ir] ? (FZ.value = rr, Object.defineProperty(Sr, Ir, FZ)) : Sr[Ir] !== rr && (Sr[Ir] = rr), Qr && (this.refCount[rr] = (this.refCount[rr] || 0) + 1), this.deletedRefs.has(rr) && this.deletedRefs.delete(rr)
      }
      removeRef(rr) {
        const Sr = this.refCount[rr];
        if (void 0 !== Sr)
          if (0 !== Sr)(this.refCount[rr] = Sr - 1) <= 0 && this.deletedRefs.add(rr);
          else try {
            const Sr = this.refs.get(rr);
            throw new cZ(`trying to remove refId '${rr}' with 0 refCount (${Sr.constructor.name}: ${JSON.stringify(Sr)})`)
          } catch (aW) {
            console.warn(aW)
          } else try {
            throw new cZ("trying to remove refId that doesn't exist: " + rr)
          } catch (aW) {
            console.warn(aW)
          }
      }
      clearRefs() {
        this.refs.clear(), this.deletedRefs.clear(), this.callbacks = {}, this.refCount = {}
      }
      garbageCollectDeletedRefs() {
        this.deletedRefs.forEach((rr => {
          if (this.refCount[rr] > 0) return;
          const Sr = this.refs.get(rr),
            Qr = Sr.constructor[Symbol.metadata];
          if (null != Qr)
            for (const Zr in Qr) {
              const rr = Sr[Qr[Zr].name];
              if ("object" === typeof rr && rr) {
                const Sr = rr[Ir];
                void 0 === Sr || this.deletedRefs.has(Sr) || this.removeRef(Sr)
              }
            } else "function" === typeof Sr[hr] && Array.from(Sr.values()).forEach((rr => {
              const Sr = rr[Ir];
              void 0 === Sr || this.deletedRefs.has(Sr) || this.removeRef(Sr)
            }));
          this.refs.delete(rr), delete this.refCount[rr], delete this.callbacks[rr]
        })), this.deletedRefs.clear()
      }
      addCallback(rr, Sr, Qr) {
        if (void 0 === rr) {
          const rr = "number" === typeof Sr ? Wr[Sr] : Sr;
          throw new Error(`Can't addCallback on '${rr}' (refId is undefined)`)
        }
        return this.callbacks[rr] || (this.callbacks[rr] = {}), this.callbacks[rr][Sr] || (this.callbacks[rr][Sr] = []), this.callbacks[rr][Sr].push(Qr), () => this.removeCallback(rr, Sr, Qr)
      }
      removeCallback(rr, Sr, Qr) {
        const Zr = this.callbacks?.[rr]?.[Sr]?.indexOf(Qr);
        void 0 !== Zr && -1 !== Zr && HZ(this.callbacks[rr][Sr], Zr)
      }
    }
    class bZ {
      context;
      state;
      root;
      currentRefId = 0;
      oR;
      resyncVisited = null;
      resyncDamaged = !1;
      constructor(rr, Sr) {
        this.setState(rr), this.context = Sr || new AS(rr.constructor)
      }
      setState(rr) {
        this.state = rr, this.root = new oZ, this.root.addRef(0, rr)
      }
      decode(rr) {
        let Sr = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
            offset: 0
          },
          Qr = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : this.state;
        const Wr = void 0 !== this.oR ? [] : null,
          ar = this.root,
          jr = rr.byteLength;
        let Ir = Qr.constructor[pr];
        for (this.currentRefId = 0; Sr.offset < jr;) {
          if (rr[Sr.offset] == Zr) {
            Sr.offset++, Qr[er]?.();
            const Zr = nS.number(rr, Sr),
              Wr = ar.refs.get(Zr);
            Wr ? (Qr = Wr, Ir = Qr.constructor[pr], this.currentRefId = Zr) : (console.error(`"refId" not found: ${Zr}`, {
              previousRef: Qr,
              previousRefId: this.currentRefId
            }), console.warn("Please report this issue to the developers."), this.skipCurrentStructure(rr, Sr, jr));
            continue
          } - 1 !== Ir(this, rr, Sr, Qr, Wr) || (console.warn("@colyseus/schema: definition mismatch"), this.skipCurrentStructure(rr, Sr, jr))
        }
        return Qr[er]?.(), null !== this.resyncVisited && function(rr, Sr) {
          rr.resyncDamaged ? console.warn("@colyseus/schema: resync sweep skipped \u2014 parts of the payload could not be decoded. Stale entries may persist until the next resync.") : AQ(rr, rr.state, new Set, Sr)
        }(this, Wr), null !== Wr && this.oR?.(Wr), ar.garbageCollectDeletedRefs(), Wr
      }
      decodeResync(rr) {
        let Sr = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
          offset: 0
        };
        this.resyncVisited = new Map, this.resyncDamaged = !1;
        try {
          return this.decode(rr, Sr)
        } finally {
          this.resyncVisited = null
        }
      }
      skipCurrentStructure(rr, Sr, Qr) {
        null !== this.resyncVisited && (this.resyncDamaged = !0);
        const Wr = {
          offset: Sr.offset
        };
        for (; Sr.offset < Qr && (rr[Sr.offset] !== Zr || (Wr.offset = Sr.offset + 1, !this.root.refs.has(nS.number(rr, Wr))));) Sr.offset++
      }
      getInstanceType(rr, Sr, Qr) {
        let Zr;
        if (213 === rr[Sr.offset]) {
          Sr.offset++;
          const Qr = nS.number(rr, Sr);
          Zr = this.context.get(Qr)
        }
        return Zr || Qr
      }
      createInstanceOfType(rr) {
        return rr.initializeForDecoder()
      }
      removeChildRefs(rr, Sr) {
        const Qr = "string" !== typeof rr[hr],
          Zr = rr[Ir];
        rr.forEach(((ar, jr) => {
          Sr?.push({
            ref: rr,
            refId: Zr,
            op: Wr.DELETE,
            field: jr,
            value: void 0,
            previousValue: ar
          }), Qr && this.root.removeRef(ar[Ir])
        }))
      }
    }
    const JZ = OZ({
        min: NZ.float64(),
        max: NZ.float64(),
        bits: NZ.uint8(),
        mode: NZ.uint8()
      }, "QuantizedDescriptor"),
      DZ = OZ({
        name: NZ.string(),
        type: NZ.string(),
        referencedType: NZ.number(),
        childPrimitive: NZ.string(),
        quantized: NZ.ref(JZ).optional()
      }, "ReflectionField"),
      dZ = OZ({
        id: NZ.number(),
        extendsId: NZ.number(),
        fields: NZ.array(DZ)
      }, "ReflectionType"),
      sZ = OZ({
        types: NZ.array(dZ),
        rootType: NZ.number()
      }, "Reflection");

    function uZ(rr) {
      const Sr = rr.root,
        Qr = Sr.callbacks,
        Zr = new WeakMap;
      let ar;

      function jr(rr, Qr) {
        let Er = Qr.instance?.constructor[Symbol.metadata] || rr,
          pr = Qr.instance && "function" === typeof Qr.instance.forEach || rr && !lZ.is(rr);
        if (Er && !pr) {
          const rr = function(rr, Wr, jr, fr) {
            return fr && void 0 !== Qr.instance[Wr] && !Zr.has(ar) && jr(Qr.instance[Wr], void 0), Sr.addCallback(rr[Ir], Wr, jr)
          };
          return new Proxy({
            listen: function(Sr, Wr) {
              let jr = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
              if (Qr.instance) return rr(Qr.instance, Sr, Wr, jr);
              {
                let Ir = () => {};
                return Qr.onInstanceAvailable(((Qr, fr) => {
                  Ir = rr(Qr, Sr, Wr, jr && fr && !Zr.has(ar))
                })), () => Ir()
              }
            },
            onChange: function(rr) {
              return Sr.addCallback(Qr.instance[Ir], Wr.REPLACE, rr)
            },
            bindTo: function(rr, Zr) {
              return Zr || (Zr = Object.keys(Er).map((rr => Er[rr].name))), Sr.addCallback(Qr.instance[Ir], Wr.REPLACE, (() => {
                Zr.forEach((Sr => rr[Sr] = Qr.instance[Sr]))
              }))
            }
          }, {
            get(rr, Sr) {
              const Zr = Er[Er[Sr]];
              if (Zr) {
                const rr = Qr.instance?.[Sr],
                  Wr = Zr => {
                    const Wr = fr(Qr.instance).listen(Sr, ((rr, Sr) => {
                      Zr(rr, !1), Wr?.()
                    }), !1);
                    void 0 !== rr?.[Ir] && Zr(rr, !0)
                  };
                return jr(Zr.type, {
                  instance: void 0 !== rr?.[Ir] && rr,
                  parentInstance: Qr.instance,
                  onInstanceAvailable: Wr
                })
              }
              return rr[Sr]
            },
            has: (rr, Sr) => void 0 !== Er[Sr],
            set(rr, Sr, Qr) {
              throw new Error("not allowed")
            },
            deleteProperty(rr, Sr) {
              throw new Error("not allowed")
            }
          })
        } {
          const rr = function(rr, Qr, jr) {
              return jr && rr.forEach(((rr, Sr) => Qr(rr, Sr))), Sr.addCallback(rr[Ir], Wr.ADD, ((rr, Sr) => {
                Zr.set(Qr, !0), ar = Qr, Qr(rr, Sr), Zr.delete(Qr), ar = void 0
              }))
            },
            jr = function(rr, Qr) {
              return Sr.addCallback(rr[Ir], Wr.DELETE, Qr)
            },
            fr = function(rr, Qr) {
              return Sr.addCallback(rr[Ir], Wr.REPLACE, Qr)
            };
          return new Proxy({
            zB: function(Sr) {
              let Wr = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
              if (Qr.instance) return rr(Qr.instance, Sr, Wr && !Zr.has(ar));
              if (Qr.onInstanceAvailable) {
                let jr = () => {};
                return Qr.onInstanceAvailable(((Qr, Ir) => {
                  jr = rr(Qr, Sr, Wr && Ir && !Zr.has(ar))
                })), () => jr()
              }
            },
            bq: function(rr) {
              if (Qr.instance) return jr(Qr.instance, rr);
              if (Qr.onInstanceAvailable) {
                let Sr = () => {};
                return Qr.onInstanceAvailable((Qr => {
                  Sr = jr(Qr, rr)
                })), () => Sr()
              }
            },
            onChange: function(rr) {
              if (Qr.instance) return fr(Qr.instance, rr);
              if (Qr.onInstanceAvailable) {
                let Sr = () => {};
                return Qr.onInstanceAvailable((Qr => {
                  Sr = fr(Qr, rr)
                })), () => Sr()
              }
            }
          }, {
            get(rr, Sr) {
              if (!rr[Sr]) throw new Error(`Can't access '${Sr}' through callback proxy. access the instance directly.`);
              return rr[Sr]
            },
            has: (rr, Sr) => void 0 !== rr[Sr],
            set(rr, Sr, Qr) {
              throw new Error("not allowed")
            },
            deleteProperty(rr, Sr) {
              throw new Error("not allowed")
            }
          })
        }
      }

      function fr(rr) {
        return jr(void 0, {
          instance: rr
        })
      }
      return rr.oR = function(rr) {
        const Sr = new Set;
        for (let Zr = 0, ar = rr.length; Zr < ar; Zr++) {
          const ar = rr[Zr],
            jr = ar.refId,
            fr = ar.ref,
            Er = Qr[jr];
          if (Er) {
            if ((ar.op & Wr.DELETE) === Wr.DELETE && lZ.isSchema(ar.previousValue)) {
              const rr = Qr[ar.previousValue[Ir]]?.[Wr.DELETE];
              for (let Sr = rr?.length - 1; Sr >= 0; Sr--) rr[Sr]()
            }
            if (lZ.isSchema(fr)) {
              if (!Sr.has(jr)) {
                const rr = Er?.[Wr.REPLACE];
                for (let Sr = rr?.length - 1; Sr >= 0; Sr--) rr[Sr]()
              }
              if (Er.hasOwnProperty(ar.field)) {
                const rr = Er[ar.field];
                for (let Sr = rr?.length - 1; Sr >= 0; Sr--) rr[Sr](ar.value, ar.previousValue)
              }
            } else {
              if ((ar.op & Wr.DELETE) === Wr.DELETE) {
                if (void 0 !== ar.previousValue) {
                  const rr = Er[Wr.DELETE];
                  for (let Sr = rr?.length - 1; Sr >= 0; Sr--) rr[Sr](ar.previousValue, ar.dynamicIndex ?? ar.field)
                }
                if ((ar.op & Wr.ADD) === Wr.ADD) {
                  const rr = Er[Wr.ADD];
                  for (let Sr = rr?.length - 1; Sr >= 0; Sr--) rr[Sr](ar.value, ar.dynamicIndex ?? ar.field)
                }
              } else if ((ar.op & Wr.ADD) === Wr.ADD && ar.previousValue !== ar.value) {
                const rr = Er[Wr.ADD];
                for (let Sr = rr?.length - 1; Sr >= 0; Sr--) rr[Sr](ar.value, ar.dynamicIndex ?? ar.field)
              }
              if (ar.value !== ar.previousValue && (void 0 !== ar.value || void 0 !== ar.previousValue)) {
                const rr = Er[Wr.REPLACE];
                for (let Sr = rr?.length - 1; Sr >= 0; Sr--) rr[Sr](ar.value, ar.dynamicIndex ?? ar.field)
              }
            }
            Sr.add(jr)
          }
        }
      }, fr
    }

    function rW(rr, Sr) {
      rr.oR = Sr
    }
    sZ.encode = function(rr) {
      let Sr = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
        offset: 0
      };
      const Qr = rr.context,
        Zr = new sZ,
        Wr = new wZ(Zr),
        ar = Qr.schemas.get(rr.state.constructor);
      ar > 0 && (Zr.rootType = ar);
      const jr = new Set,
        Ir = {},
        fr = rr => {
          if (void 0 === rr.extendsId || jr.has(rr.extendsId)) {
            jr.add(rr.id), Zr.types.push(rr);
            const Sr = Ir[rr.id];
            void 0 !== Sr && (delete Ir[rr.id], Sr.forEach((rr => fr(rr))))
          } else void 0 === Ir[rr.extendsId] && (Ir[rr.extendsId] = []), Ir[rr.extendsId].push(rr)
        };
      Qr.schemas.forEach(((rr, Sr) => {
        const Zr = new dZ;
        Zr.id = Number(rr);
        const Wr = Object.getPrototypeOf(Sr);
        Wr !== lZ && (Zr.extendsId = Qr.schemas.get(Wr));
        const ar = Sr[Symbol.metadata];
        if (ar !== Wr[Symbol.metadata]) {
          const rr = ar[Or] ?? -1;
          for (let Sr = 0; Sr <= rr; Sr++) {
            const rr = ar[Sr];
            if (void 0 === rr) continue;
            const Wr = rr.name;
            if (!Object.prototype.hasOwnProperty.call(ar, Wr)) continue;
            const jr = new DZ;
            let Ir;
            if (jr.name = Wr, "string" === typeof rr.type) Ir = rr.type;
            else if (CS(rr.type)) {
              const Sr = rr.type.quantized;
              Ir = "quantized";
              const Qr = new JZ;
              Qr.min = Sr.min, Qr.max = Sr.max, Qr.bits = Sr.bits, Qr.mode = Sr.wrap ? 1 : 0, jr.quantized = Qr
            } else {
              let Sr;
              lZ.is(rr.type) ? (Ir = "ref", Sr = rr.type) : (Ir = Object.keys(rr.type)[0], "string" === typeof rr.type[Ir] ? jr.childPrimitive = rr.type[Ir] : Sr = rr.type[Ir]), jr.referencedType = Sr ? Qr.getTypeId(Sr) : -1
            }
            jr.type = Ir, Zr.fields.push(jr)
          }
        }
        fr(Zr)
      }));
      for (const Er in Ir) Ir[Er].forEach((rr => Zr.types.push(rr)));
      return Wr.encodeAll(Sr).slice(0, Sr.offset)
    }, sZ.decode = function(rr, Sr) {
      const Qr = new sZ;
      new bZ(Qr).decode(rr, Sr);
      const Zr = new AS;
      Qr.types.forEach((rr => {
        const Sr = Zr.get(rr.extendsId) ?? lZ,
          Qr = class extends Sr {};
        AS.register(Qr), Zr.add(Qr, rr.id)
      }), {});
      Qr.types.forEach((rr => {
        const Sr = Zr.get(rr.id),
          Wr = bS.initialize(Sr),
          ar = [];
        let jr = rr;
        do {
          ar.push(jr), jr = Qr.types.find((rr => rr.id === jr.extendsId))
        } while (jr);
        let Ir = 0;
        ar.reverse().forEach((rr => {
          ((rr, Sr, Qr) => {
            Sr.fields.forEach(((Sr, Wr) => {
              const ar = Qr + Wr;
              if (void 0 !== Sr.quantized) {
                const Qr = Sr.quantized;
                bS.addField(rr, ar, Sr.name, {
                  quantized: gS({
                    min: Qr.min,
                    max: Qr.max,
                    bits: Qr.bits,
                    mode: 1 === Qr.mode ? "wrap" : "clamp"
                  })
                })
              } else if (void 0 !== Sr.referencedType) {
                const Qr = Sr.type,
                  Wr = Zr.get(Sr.referencedType) ?? Sr.childPrimitive;
                "ref" === Qr ? bS.addField(rr, ar, Sr.name, Wr) : bS.addField(rr, ar, Sr.name, {
                  [Qr]: Wr
                })
              } else bS.addField(rr, ar, Sr.name, Sr.type)
            }))
          })(Wr, rr, Ir), Ir += rr.fields.length
        }))
      }));
      const Wr = new(Zr.get(Qr.rootType || 0));
      return new bZ(Wr, Zr)
    }, sZ.makeEncodable = function(rr) {
      const Sr = rr[Symbol.metadata];
      if (!Sr) return rr;
      const Qr = Sr[Or];
      if (void 0 === Qr) return rr;
      for (let Zr = 0; Zr <= Qr; Zr++) {
        const Qr = Sr[Zr];
        Qr && bS.defineField(rr, Sr, Zr, Qr.name, Qr.type)
      }
      return Object.prototype.hasOwnProperty.call(rr, Tr) && delete rr[Tr], rr
    };
    class SW {
      Ix;
      uniqueRefIds = new Set;
      isTriggering = !1;
      constructor(rr) {
        this.Ix = rr, this.Ix.oR = this.oR.bind(this)
      }
      get callbacks() {
        return this.Ix.root.callbacks
      }
      get state() {
        return this.Ix.state
      }
      addCallback(rr, Sr, Qr) {
        return this.Ix.root.addCallback(rr, Sr, Qr)
      }
      addCallbackOrWaitCollectionAvailable(rr, Sr, Qr, Zr) {
        let ar = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4],
          jr = () => {};
        const fr = () => jr(),
          Er = rr[Sr];
        if (Er && void 0 !== Er[Ir]) return ar = ar && !1 === this.isTriggering, Qr === Wr.ADD && ar && Er.forEach(((rr, Sr) => {
          Zr(rr, Sr)
        })), this.addCallback(Er[Ir], Qr, Zr);
        {
          let Wr;
          return Wr = this.addCallback(rr[Ir], Sr, ((rr, Sr) => {
            null !== rr && void 0 !== rr && (Wr(), jr = this.addCallback(rr[Ir], Qr, Zr))
          })), jr = Wr, fr
        }
      }
      listen() {
        return "string" === typeof(arguments.length <= 0 ? void 0 : arguments[0]) ? this.listenInstance(this.state, arguments.length <= 0 ? void 0 : arguments[0], arguments.length <= 1 ? void 0 : arguments[1], arguments.length <= 2 ? void 0 : arguments[2]) : this.listenInstance(arguments.length <= 0 ? void 0 : arguments[0], arguments.length <= 1 ? void 0 : arguments[1], arguments.length <= 2 ? void 0 : arguments[2], arguments.length <= 3 ? void 0 : arguments[3])
      }
      listenInstance(rr, Sr, Qr) {
        let Zr = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
        Zr = Zr && !1 === this.isTriggering;
        const Wr = rr[Sr];
        return Zr && null !== Wr && void 0 !== Wr && Qr(Wr, void 0), this.addCallback(rr[Ir], Sr, Qr)
      }
      onChange() {
        if (2 === arguments.length && "string" !== typeof(arguments.length <= 0 ? void 0 : arguments[0])) {
          const rr = arguments.length <= 0 ? void 0 : arguments[0],
            Sr = arguments.length <= 1 ? void 0 : arguments[1];
          return this.addCallback(rr[Ir], Wr.REPLACE, Sr)
        }
        return "string" === typeof(arguments.length <= 0 ? void 0 : arguments[0]) ? this.addCallbackOrWaitCollectionAvailable(this.state, arguments.length <= 0 ? void 0 : arguments[0], Wr.REPLACE, arguments.length <= 1 ? void 0 : arguments[1]) : this.addCallbackOrWaitCollectionAvailable(arguments.length <= 0 ? void 0 : arguments[0], arguments.length <= 1 ? void 0 : arguments[1], Wr.REPLACE, arguments.length <= 2 ? void 0 : arguments[2])
      }
      zB() {
        return "string" === typeof(arguments.length <= 0 ? void 0 : arguments[0]) ? this.addCallbackOrWaitCollectionAvailable(this.state, arguments.length <= 0 ? void 0 : arguments[0], Wr.ADD, arguments.length <= 1 ? void 0 : arguments[1], !1 !== (arguments.length <= 2 ? void 0 : arguments[2])) : this.addCallbackOrWaitCollectionAvailable(arguments.length <= 0 ? void 0 : arguments[0], arguments.length <= 1 ? void 0 : arguments[1], Wr.ADD, arguments.length <= 2 ? void 0 : arguments[2], !1 !== (arguments.length <= 3 ? void 0 : arguments[3]))
      }
      bq() {
        return "string" === typeof(arguments.length <= 0 ? void 0 : arguments[0]) ? this.addCallbackOrWaitCollectionAvailable(this.state, arguments.length <= 0 ? void 0 : arguments[0], Wr.DELETE, arguments.length <= 1 ? void 0 : arguments[1]) : this.addCallbackOrWaitCollectionAvailable(arguments.length <= 0 ? void 0 : arguments[0], arguments.length <= 1 ? void 0 : arguments[1], Wr.DELETE, arguments.length <= 2 ? void 0 : arguments[2])
      }
      bindTo(rr, Sr, Qr) {
        let Zr = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
        const ar = rr.constructor[Symbol.metadata];
        Qr || (Qr = Object.keys(ar).filter((rr => !isNaN(Number(rr)))).map((rr => ar[rr].name)));
        const jr = () => {
          for (const Zr of Qr) {
            const Qr = rr[Zr];
            void 0 !== Qr && (Sr[Zr] = Qr)
          }
        };
        return Zr && jr(), this.addCallback(rr[Ir], Wr.REPLACE, jr)
      }
      oR(rr) {
        this.uniqueRefIds.clear(), this.isTriggering = !0;
        for (let Sr = 0, Qr = rr.length; Sr < Qr; Sr++) {
          const Qr = rr[Sr],
            Zr = Qr.refId,
            ar = Qr.ref,
            jr = this.callbacks[Zr];
          if (jr) {
            if ((Qr.op & Wr.DELETE) === Wr.DELETE && lZ.isSchema(Qr.previousValue)) {
              const rr = Qr.previousValue[Ir],
                Sr = this.callbacks[rr]?.[Wr.DELETE];
              if (Sr)
                for (let Qr = Sr.length - 1; Qr >= 0; Qr--) try {
                  Sr[Qr]()
                } catch (aW) {
                  console.error(aW)
                }
            }
            if (lZ.isSchema(ar)) {
              if (!this.uniqueRefIds.has(Zr)) {
                const rr = jr[Wr.REPLACE];
                if (rr)
                  for (let Sr = rr.length - 1; Sr >= 0; Sr--) try {
                    rr[Sr]()
                  } catch (aW) {
                    console.error(aW)
                  }
              }
              const rr = jr[Qr.field];
              if (rr)
                for (let Sr = rr.length - 1; Sr >= 0; Sr--) try {
                  rr[Sr](Qr.value, Qr.previousValue)
                } catch (aW) {
                  console.error(aW)
                }
            } else {
              const rr = Qr.dynamicIndex ?? Qr.field;
              if ((Qr.op & Wr.DELETE) === Wr.DELETE) {
                if (void 0 !== Qr.previousValue) {
                  const Sr = jr[Wr.DELETE];
                  if (Sr)
                    for (let Zr = Sr.length - 1; Zr >= 0; Zr--) try {
                      Sr[Zr](Qr.previousValue, rr)
                    } catch (aW) {
                      console.error(aW)
                    }
                }
                if ((Qr.op & Wr.ADD) === Wr.ADD) {
                  const Sr = jr[Wr.ADD];
                  if (Sr)
                    for (let Zr = Sr.length - 1; Zr >= 0; Zr--) try {
                      Sr[Zr](Qr.value, rr)
                    } catch (aW) {
                      console.error(aW)
                    }
                }
              } else if ((Qr.op & Wr.ADD) === Wr.ADD && Qr.previousValue !== Qr.value) {
                const Sr = jr[Wr.ADD];
                if (Sr)
                  for (let Zr = Sr.length - 1; Zr >= 0; Zr--) try {
                    Sr[Zr](Qr.value, rr)
                  } catch (aW) {
                    console.error(aW)
                  }
              }
              if (Qr.value !== Qr.previousValue) {
                const Sr = jr[Wr.REPLACE];
                if (Sr)
                  for (let Zr = Sr.length - 1; Zr >= 0; Zr--) try {
                    Sr[Zr](rr, Qr.value)
                  } catch (aW) {
                    console.error(aW)
                  }
              }
            }
            this.uniqueRefIds.add(Zr)
          }
        }
        this.isTriggering = !1
      }
    }
    const QW = {
      get(rr) {
        if (rr instanceof bZ) return new SW(rr);
        if ("Ix" in rr.TY) return new SW(rr.TY.Ix);
        throw new Error("Invalid room or decoder")
      },
      getLegacy(rr) {
        if (rr instanceof bZ) return uZ(rr);
        if ("Ix" in rr.TY) return uZ(rr.TY.Ix);
        throw new Error("Invalid room or decoder")
      },
      getRawChanges: (rr, Sr) => rW(rr, Sr)
    };
    class ZW {
      _free = [];
      _factory;
      _maxSize;
      constructor(rr) {
        let Sr = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        this._factory = rr, this._maxSize = Sr.maxSize ?? 1 / 0;
        const Qr = Sr.preallocate ?? 0;
        for (let Zr = 0; Zr < Qr; Zr++) this._free.push(rr())
      }
      acquire() {
        return this._free.length > 0 ? this._free.pop() : this._factory()
      }
      release(rr) {
        lZ.reset(rr), this._free.length < this._maxSize && this._free.push(rr)
      }
      get size() {
        return this._free.length
      }
    }

    function WW(rr) {
      return new ZW((() => new rr), arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {})
    }
    yS("map", {
      constructor: WZ
    }), yS("array", {
      constructor: QZ
    }), yS("set", {
      constructor: jZ
    }), yS("collection", {
      constructor: aZ
    })
  },
  10256: (rr, Sr, Qr) => {
    Qr.r(Sr), Qr.d(Sr, {
      __addDisposableResource: () => Cr,
      __assign: () => ar,
      __asyncDelegator: () => vr,
      __asyncGenerator: () => Tr,
      __asyncValues: () => Or,
      __await: () => Br,
      __awaiter: () => Ur,
      __classPrivateFieldGet: () => qr,
      __classPrivateFieldIn: () => gr,
      __classPrivateFieldSet: () => Rr,
      __createBinding: () => hr,
      __decorate: () => Ir,
      __disposeResources: () => Gr,
      __esDecorate: () => Er,
      __exportStar: () => zr,
      __extends: () => Wr,
      __generator: () => tr,
      __importDefault: () => Hr,
      __importStar: () => Pr,
      __makeTemplateObject: () => Lr,
      __metadata: () => Nr,
      __param: () => fr,
      __propKey: () => xr,
      __read: () => nr,
      __rest: () => jr,
      __rewriteRelativeImportExtension: () => kr,
      __runInitializers: () => pr,
      __setFunctionName: () => mr,
      __spread: () => er,
      __spreadArray: () => yr,
      __spreadArrays: () => Kr,
      __values: () => Yr,
      default: () => Ar
    });
    var Zr = function(rr, Sr) {
      return Zr = Object.setPrototypeOf || {
        __proto__: []
      }
      instanceof Array && function(rr, Sr) {
        rr.__proto__ = Sr
      } || function(rr, Sr) {
        for (var Qr in Sr) Object.prototype.hasOwnProperty.call(Sr, Qr) && (rr[Qr] = Sr[Qr])
      }, Zr(rr, Sr)
    };

    function Wr(rr, Sr) {
      if ("function" !== typeof Sr && null !== Sr) throw new TypeError("Class extends value " + String(Sr) + " is not a constructor or null");

      function Qr() {
        this.constructor = rr
      }
      Zr(rr, Sr), rr.prototype = null === Sr ? Object.create(Sr) : (Qr.prototype = Sr.prototype, new Qr)
    }
    var ar = function() {
      return ar = Object.assign || function(rr) {
        for (var Sr, Qr = 1, Zr = arguments.length; Qr < Zr; Qr++)
          for (var Wr in Sr = arguments[Qr]) Object.prototype.hasOwnProperty.call(Sr, Wr) && (rr[Wr] = Sr[Wr]);
        return rr
      }, ar.apply(this, arguments)
    };

    function jr(rr, Sr) {
      var Qr = {};
      for (var Zr in rr) Object.prototype.hasOwnProperty.call(rr, Zr) && Sr.indexOf(Zr) < 0 && (Qr[Zr] = rr[Zr]);
      if (null != rr && "function" === typeof Object.getOwnPropertySymbols) {
        var Wr = 0;
        for (Zr = Object.getOwnPropertySymbols(rr); Wr < Zr.length; Wr++) Sr.indexOf(Zr[Wr]) < 0 && Object.prototype.propertyIsEnumerable.call(rr, Zr[Wr]) && (Qr[Zr[Wr]] = rr[Zr[Wr]])
      }
      return Qr
    }

    function Ir(rr, Sr, Qr, Zr) {
      var Wr, ar = arguments.length,
        jr = ar < 3 ? Sr : null === Zr ? Zr = Object.getOwnPropertyDescriptor(Sr, Qr) : Zr;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) jr = Reflect.decorate(rr, Sr, Qr, Zr);
      else
        for (var Ir = rr.length - 1; Ir >= 0; Ir--)(Wr = rr[Ir]) && (jr = (ar < 3 ? Wr(jr) : ar > 3 ? Wr(Sr, Qr, jr) : Wr(Sr, Qr)) || jr);
      return ar > 3 && jr && Object.defineProperty(Sr, Qr, jr), jr
    }

    function fr(rr, Sr) {
      return function(Qr, Zr) {
        Sr(Qr, Zr, rr)
      }
    }

    function Er(rr, Sr, Qr, Zr, Wr, ar) {
      function jr(rr) {
        if (void 0 !== rr && "function" !== typeof rr) throw new TypeError("Function expected");
        return rr
      }
      for (var Ir, fr = Zr.kind, Er = "getter" === fr ? "get" : "setter" === fr ? "set" : "value", pr = !Sr && rr ? Zr.static ? rr : rr.prototype : null, xr = Sr || (pr ? Object.getOwnPropertyDescriptor(pr, Zr.name) : {}), mr = !1, Nr = Qr.length - 1; Nr >= 0; Nr--) {
        var Ur = {};
        for (var tr in Zr) Ur[tr] = "access" === tr ? {} : Zr[tr];
        for (var tr in Zr.access) Ur.access[tr] = Zr.access[tr];
        Ur.addInitializer = function(rr) {
          if (mr) throw new TypeError("Cannot add initializers after decoration has completed");
          ar.push(jr(rr || null))
        };
        var hr = (0, Qr[Nr])("accessor" === fr ? {
          get: xr.get,
          set: xr.set
        } : xr[Er], Ur);
        if ("accessor" === fr) {
          if (void 0 === hr) continue;
          if (null === hr || "object" !== typeof hr) throw new TypeError("Object expected");
          (Ir = jr(hr.get)) && (xr.get = Ir), (Ir = jr(hr.set)) && (xr.set = Ir), (Ir = jr(hr.init)) && Wr.unshift(Ir)
        } else(Ir = jr(hr)) && ("field" === fr ? Wr.unshift(Ir) : xr[Er] = Ir)
      }
      pr && Object.defineProperty(pr, Zr.name, xr), mr = !0
    }

    function pr(rr, Sr, Qr) {
      for (var Zr = arguments.length > 2, Wr = 0; Wr < Sr.length; Wr++) Qr = Zr ? Sr[Wr].call(rr, Qr) : Sr[Wr].call(rr);
      return Zr ? Qr : void 0
    }

    function xr(rr) {
      return "symbol" === typeof rr ? rr : "".concat(rr)
    }

    function mr(rr, Sr, Qr) {
      return "symbol" === typeof Sr && (Sr = Sr.description ? "[".concat(Sr.description, "]") : ""), Object.defineProperty(rr, "name", {
        configurable: !0,
        value: Qr ? "".concat(Qr, " ", Sr) : Sr
      })
    }

    function Nr(rr, Sr) {
      if ("object" === typeof Reflect && "function" === typeof Reflect.metadata) return Reflect.metadata(rr, Sr)
    }

    function Ur(rr, Sr, Qr, Zr) {
      return new(Qr || (Qr = Promise))((function(Wr, ar) {
        function jr(rr) {
          try {
            fr(Zr.next(rr))
          } catch (Sr) {
            ar(Sr)
          }
        }

        function Ir(rr) {
          try {
            fr(Zr.throw(rr))
          } catch (Sr) {
            ar(Sr)
          }
        }

        function fr(rr) {
          var Sr;
          rr.done ? Wr(rr.value) : (Sr = rr.value, Sr instanceof Qr ? Sr : new Qr((function(rr) {
            rr(Sr)
          }))).then(jr, Ir)
        }
        fr((Zr = Zr.apply(rr, Sr || [])).next())
      }))
    }

    function tr(rr, Sr) {
      var Qr, Zr, Wr, ar = {
          label: 0,
          sent: function() {
            if (1 & Wr[0]) throw Wr[1];
            return Wr[1]
          },
          trys: [],
          ops: []
        },
        jr = Object.create(("function" === typeof Iterator ? Iterator : Object).prototype);
      return jr.next = Ir(0), jr.throw = Ir(1), jr.return = Ir(2), "function" === typeof Symbol && (jr[Symbol.iterator] = function() {
        return this
      }), jr;

      function Ir(Ir) {
        return function(fr) {
          return function(Ir) {
            if (Qr) throw new TypeError("Generator is already executing.");
            for (; jr && (jr = 0, Ir[0] && (ar = 0)), ar;) try {
              if (Qr = 1, Zr && (Wr = 2 & Ir[0] ? Zr.return : Ir[0] ? Zr.throw || ((Wr = Zr.return) && Wr.call(Zr), 0) : Zr.next) && !(Wr = Wr.call(Zr, Ir[1])).done) return Wr;
              switch (Zr = 0, Wr && (Ir = [2 & Ir[0], Wr.value]), Ir[0]) {
                case 0:
                case 1:
                  Wr = Ir;
                  break;
                case 4:
                  return ar.label++, {
                    value: Ir[1],
                    done: !1
                  };
                case 5:
                  ar.label++, Zr = Ir[1], Ir = [0];
                  continue;
                case 7:
                  Ir = ar.ops.pop(), ar.trys.pop();
                  continue;
                default:
                  if (!(Wr = (Wr = ar.trys).length > 0 && Wr[Wr.length - 1]) && (6 === Ir[0] || 2 === Ir[0])) {
                    ar = 0;
                    continue
                  }
                  if (3 === Ir[0] && (!Wr || Ir[1] > Wr[0] && Ir[1] < Wr[3])) {
                    ar.label = Ir[1];
                    break
                  }
                  if (6 === Ir[0] && ar.label < Wr[1]) {
                    ar.label = Wr[1], Wr = Ir;
                    break
                  }
                  if (Wr && ar.label < Wr[2]) {
                    ar.label = Wr[2], ar.ops.push(Ir);
                    break
                  }
                  Wr[2] && ar.ops.pop(), ar.trys.pop();
                  continue
              }
              Ir = Sr.call(rr, ar)
            } catch (fr) {
              Ir = [6, fr], Zr = 0
            } finally {
              Qr = Wr = 0
            }
            if (5 & Ir[0]) throw Ir[1];
            return {
              value: Ir[0] ? Ir[1] : void 0,
              done: !0
            }
          }([Ir, fr])
        }
      }
    }
    var hr = Object.create ? function(rr, Sr, Qr, Zr) {
      void 0 === Zr && (Zr = Qr);
      var Wr = Object.getOwnPropertyDescriptor(Sr, Qr);
      Wr && !("get" in Wr ? !Sr.__esModule : Wr.writable || Wr.configurable) || (Wr = {
        enumerable: !0,
        get: function() {
          return Sr[Qr]
        }
      }), Object.defineProperty(rr, Zr, Wr)
    } : function(rr, Sr, Qr, Zr) {
      void 0 === Zr && (Zr = Qr), rr[Zr] = Sr[Qr]
    };

    function zr(rr, Sr) {
      for (var Qr in rr) "default" === Qr || Object.prototype.hasOwnProperty.call(Sr, Qr) || hr(Sr, rr, Qr)
    }

    function Yr(rr) {
      var Sr = "function" === typeof Symbol && Symbol.iterator,
        Qr = Sr && rr[Sr],
        Zr = 0;
      if (Qr) return Qr.call(rr);
      if (rr && "number" === typeof rr.length) return {
        next: function() {
          return rr && Zr >= rr.length && (rr = void 0), {
            value: rr && rr[Zr++],
            done: !rr
          }
        }
      };
      throw new TypeError(Sr ? "Object is not iterable." : "Symbol.iterator is not defined.")
    }

    function nr(rr, Sr) {
      var Qr = "function" === typeof Symbol && rr[Symbol.iterator];
      if (!Qr) return rr;
      var Zr, Wr, ar = Qr.call(rr),
        jr = [];
      try {
        for (;
          (void 0 === Sr || Sr-- > 0) && !(Zr = ar.next()).done;) jr.push(Zr.value)
      } catch (Ir) {
        Wr = {
          error: Ir
        }
      } finally {
        try {
          Zr && !Zr.done && (Qr = ar.return) && Qr.call(ar)
        } finally {
          if (Wr) throw Wr.error
        }
      }
      return jr
    }

    function er() {
      for (var rr = [], Sr = 0; Sr < arguments.length; Sr++) rr = rr.concat(nr(arguments[Sr]));
      return rr
    }

    function Kr() {
      for (var rr = 0, Sr = 0, Qr = arguments.length; Sr < Qr; Sr++) rr += arguments[Sr].length;
      var Zr = Array(rr),
        Wr = 0;
      for (Sr = 0; Sr < Qr; Sr++)
        for (var ar = arguments[Sr], jr = 0, Ir = ar.length; jr < Ir; jr++, Wr++) Zr[Wr] = ar[jr];
      return Zr
    }

    function yr(rr, Sr, Qr) {
      if (Qr || 2 === arguments.length)
        for (var Zr, Wr = 0, ar = Sr.length; Wr < ar; Wr++) !Zr && Wr in Sr || (Zr || (Zr = Array.prototype.slice.call(Sr, 0, Wr)), Zr[Wr] = Sr[Wr]);
      return rr.concat(Zr || Array.prototype.slice.call(Sr))
    }

    function Br(rr) {
      return this instanceof Br ? (this.v = rr, this) : new Br(rr)
    }

    function Tr(rr, Sr, Qr) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var Zr, Wr = Qr.apply(rr, Sr || []),
        ar = [];
      return Zr = Object.create(("function" === typeof AsyncIterator ? AsyncIterator : Object).prototype), jr("next"), jr("throw"), jr("return", (function(rr) {
        return function(Sr) {
          return Promise.resolve(Sr).then(rr, Er)
        }
      })), Zr[Symbol.asyncIterator] = function() {
        return this
      }, Zr;

      function jr(rr, Sr) {
        Wr[rr] && (Zr[rr] = function(Sr) {
          return new Promise((function(Qr, Zr) {
            ar.push([rr, Sr, Qr, Zr]) > 1 || Ir(rr, Sr)
          }))
        }, Sr && (Zr[rr] = Sr(Zr[rr])))
      }

      function Ir(rr, Sr) {
        try {
          (Qr = Wr[rr](Sr)).value instanceof Br ? Promise.resolve(Qr.value.v).then(fr, Er) : pr(ar[0][2], Qr)
        } catch (Zr) {
          pr(ar[0][3], Zr)
        }
        var Qr
      }

      function fr(rr) {
        Ir("next", rr)
      }

      function Er(rr) {
        Ir("throw", rr)
      }

      function pr(rr, Sr) {
        rr(Sr), ar.shift(), ar.length && Ir(ar[0][0], ar[0][1])
      }
    }

    function vr(rr) {
      var Sr, Qr;
      return Sr = {}, Zr("next"), Zr("throw", (function(rr) {
        throw rr
      })), Zr("return"), Sr[Symbol.iterator] = function() {
        return this
      }, Sr;

      function Zr(Zr, Wr) {
        Sr[Zr] = rr[Zr] ? function(Sr) {
          return (Qr = !Qr) ? {
            value: Br(rr[Zr](Sr)),
            done: !1
          } : Wr ? Wr(Sr) : Sr
        } : Wr
      }
    }

    function Or(rr) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var Sr, Qr = rr[Symbol.asyncIterator];
      return Qr ? Qr.call(rr) : (rr = Yr(rr), Sr = {}, Zr("next"), Zr("throw"), Zr("return"), Sr[Symbol.asyncIterator] = function() {
        return this
      }, Sr);

      function Zr(Qr) {
        Sr[Qr] = rr[Qr] && function(Sr) {
          return new Promise((function(Zr, Wr) {
            (function(rr, Sr, Qr, Zr) {
              Promise.resolve(Zr).then((function(Sr) {
                rr({
                  value: Sr,
                  done: Qr
                })
              }), Sr)
            })(Zr, Wr, (Sr = rr[Qr](Sr)).done, Sr.value)
          }))
        }
      }
    }

    function Lr(rr, Sr) {
      return Object.defineProperty ? Object.defineProperty(rr, "raw", {
        value: Sr
      }) : rr.raw = Sr, rr
    }
    var lr = Object.create ? function(rr, Sr) {
        Object.defineProperty(rr, "default", {
          enumerable: !0,
          value: Sr
        })
      } : function(rr, Sr) {
        rr.default = Sr
      },
      Xr = function(rr) {
        return Xr = Object.getOwnPropertyNames || function(rr) {
          var Sr = [];
          for (var Qr in rr) Object.prototype.hasOwnProperty.call(rr, Qr) && (Sr[Sr.length] = Qr);
          return Sr
        }, Xr(rr)
      };

    function Pr(rr) {
      if (rr && rr.__esModule) return rr;
      var Sr = {};
      if (null != rr)
        for (var Qr = Xr(rr), Zr = 0; Zr < Qr.length; Zr++) "default" !== Qr[Zr] && hr(Sr, rr, Qr[Zr]);
      return lr(Sr, rr), Sr
    }

    function Hr(rr) {
      return rr && rr.__esModule ? rr : {
        default: rr
      }
    }

    function qr(rr, Sr, Qr, Zr) {
      if ("a" === Qr && !Zr) throw new TypeError("Private accessor was defined without a getter");
      if ("function" === typeof Sr ? rr !== Sr || !Zr : !Sr.has(rr)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
      return "m" === Qr ? Zr : "a" === Qr ? Zr.call(rr) : Zr ? Zr.value : Sr.get(rr)
    }

    function Rr(rr, Sr, Qr, Zr, Wr) {
      if ("m" === Zr) throw new TypeError("Private method is not writable");
      if ("a" === Zr && !Wr) throw new TypeError("Private accessor was defined without a setter");
      if ("function" === typeof Sr ? rr !== Sr || !Wr : !Sr.has(rr)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
      return "a" === Zr ? Wr.call(rr, Qr) : Wr ? Wr.value = Qr : Sr.set(rr, Qr), Qr
    }

    function gr(rr, Sr) {
      if (null === Sr || "object" !== typeof Sr && "function" !== typeof Sr) throw new TypeError("Cannot use 'in' operator on non-object");
      return "function" === typeof rr ? Sr === rr : rr.has(Sr)
    }

    function Cr(rr, Sr, Qr) {
      if (null !== Sr && void 0 !== Sr) {
        if ("object" !== typeof Sr && "function" !== typeof Sr) throw new TypeError("Object expected.");
        var Zr, Wr;
        if (Qr) {
          if (!Symbol.asyncDispose) throw new TypeError("Symbol.asyncDispose is not defined.");
          Zr = Sr[Symbol.asyncDispose]
        }
        if (void 0 === Zr) {
          if (!Symbol.dispose) throw new TypeError("Symbol.dispose is not defined.");
          Zr = Sr[Symbol.dispose], Qr && (Wr = Zr)
        }
        if ("function" !== typeof Zr) throw new TypeError("Object not disposable.");
        Wr && (Zr = function() {
          try {
            Wr.call(this)
          } catch (rr) {
            return Promise.reject(rr)
          }
        }), rr.stack.push({
          value: Sr,
          dispose: Zr,
          async: Qr
        })
      } else Qr && rr.stack.push({
        async: !0
      });
      return Sr
    }
    var Mr = "function" === typeof SuppressedError ? SuppressedError : function(rr, Sr, Qr) {
      var Zr = new Error(Qr);
      return Zr.name = "SuppressedError", Zr.error = rr, Zr.suppressed = Sr, Zr
    };

    function Gr(rr) {
      function Sr(Sr) {
        rr.error = rr.hasError ? new Mr(Sr, rr.error, "An error was suppressed during disposal.") : Sr, rr.hasError = !0
      }
      var Qr, Zr = 0;
      return function Wr() {
        for (; Qr = rr.stack.pop();) try {
          if (!Qr.async && 1 === Zr) return Zr = 0, rr.stack.push(Qr), Promise.resolve().then(Wr);
          if (Qr.dispose) {
            var ar = Qr.dispose.call(Qr.value);
            if (Qr.async) return Zr |= 2, Promise.resolve(ar).then(Wr, (function(rr) {
              return Sr(rr), Wr()
            }))
          } else Zr |= 1
        } catch (jr) {
          Sr(jr)
        }
        if (1 === Zr) return rr.hasError ? Promise.reject(rr.error) : Promise.resolve();
        if (rr.hasError) throw rr.error
      }()
    }

    function kr(rr, Sr) {
      return "string" === typeof rr && /^\.\.?\//.test(rr) ? rr.replace(/\.(tsx)$|((?:\.d)?)((?:\.[^./]+?)?)\.([cm]?)ts$/i, (function(rr, Qr, Zr, Wr, ar) {
        return Qr ? Sr ? ".jsx" : ".js" : !Zr || Wr && ar ? Zr + Wr + "." + ar.toLowerCase() + "js" : rr
      })) : rr
    }
    const Ar = {
      __extends: Wr,
      __assign: ar,
      __rest: jr,
      __decorate: Ir,
      __param: fr,
      __esDecorate: Er,
      __runInitializers: pr,
      __propKey: xr,
      __setFunctionName: mr,
      __metadata: Nr,
      __awaiter: Ur,
      __generator: tr,
      __createBinding: hr,
      __exportStar: zr,
      __values: Yr,
      __read: nr,
      __spread: er,
      __spreadArrays: Kr,
      __spreadArray: yr,
      __await: Br,
      __asyncGenerator: Tr,
      __asyncDelegator: vr,
      __asyncValues: Or,
      __makeTemplateObject: Lr,
      __importStar: Pr,
      __importDefault: Hr,
      __classPrivateFieldGet: qr,
      __classPrivateFieldSet: Rr,
      __classPrivateFieldIn: gr,
      __addDisposableResource: Cr,
      __disposeResources: Gr,
      __rewriteRelativeImportExtension: kr
    }
  }
};
Object.freeze(modules);
for (const rr in modules) Object.freeze(modules[rr]);