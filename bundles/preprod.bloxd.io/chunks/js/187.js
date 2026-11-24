export const id = 187;
export const ids = [187];
export const modules = {
  9322: (pp, ip) => {
    ip.discordURLBuilder = function(pp) {
      var ip;
      const cp = (null === (ip = null === window || void 0 === window ? void 0 : window.location) || void 0 === ip ? void 0 : ip.hostname) || "localhost",
        Op = pp.hostname.split("."),
        op = !pp.hostname.includes("trycloudflare.com") && !pp.hostname.includes("discordsays.com") && Op.length > 2 ? `/${Op[0]}` : "";
      return pp.pathname.startsWith("/.proxy") ? `${pp.protocol}//${cp}${op}${pp.pathname}${pp.search}` : `${pp.protocol}//${cp}/.proxy/colyseus${op}${pp.pathname}${pp.search}`
    }
  },
  9314: (pp, ip, cp) => {
    var Op, op, Ip, Sp, xp = cp(9230),
      Lp = cp(9318),
      Yp = cp(9281);
    Op = new WeakMap, op = new WeakMap, Ip = new WeakMap, Sp = new WeakMap, ip.Auth = class {
      constructor(pp) {
        this.http = pp, this.settings = {
          path: "/auth",
          key: "colyseus-auth-token"
        }, Op.set(this, !1), op.set(this, void 0), Ip.set(this, void 0), Sp.set(this, Yp.createNanoEvents()), Lp.getItem(this.settings.key, (pp => this.token = pp))
      }
      set token(pp) {
        this.http.authToken = pp
      }
      get token() {
        return this.http.authToken
      }
      onChange(pp) {
        const ip = xp.__classPrivateFieldGet(this, Sp, "f").on("change", pp);
        return xp.__classPrivateFieldGet(this, Op, "f") || xp.__classPrivateFieldSet(this, op, new Promise(((pp, ip) => {
          this.getUserData().then((pp => {
            this.emitChange(Object.assign(Object.assign({}, pp), {
              token: this.token
            }))
          })).catch((pp => {
            this.emitChange({
              user: null,
              token: void 0
            })
          })).finally((() => {
            pp()
          }))
        })), "f"), xp.__classPrivateFieldSet(this, Op, !0, "f"), ip
      }
      getUserData() {
        return xp.__awaiter(this, void 0, void 0, (function*() {
          if (this.token) return (yield this.http.get(`${this.settings.path}/userdata`)).data;
          throw new Error("missing auth.token")
        }))
      }
      registerWithEmailAndPassword(pp, ip, cp) {
        return xp.__awaiter(this, void 0, void 0, (function*() {
          const Op = (yield this.http.post(`${this.settings.path}/register`, {
            body: {
              email: pp,
              password: ip,
              options: cp
            }
          })).data;
          return this.emitChange(Op), Op
        }))
      }
      signInWithEmailAndPassword(pp, ip) {
        return xp.__awaiter(this, void 0, void 0, (function*() {
          const cp = (yield this.http.post(`${this.settings.path}/login`, {
            body: {
              email: pp,
              password: ip
            }
          })).data;
          return this.emitChange(cp), cp
        }))
      }
      signInAnonymously(pp) {
        return xp.__awaiter(this, void 0, void 0, (function*() {
          const ip = (yield this.http.post(`${this.settings.path}/anonymous`, {
            body: {
              options: pp
            }
          })).data;
          return this.emitChange(ip), ip
        }))
      }
      sendPasswordResetEmail(pp) {
        return xp.__awaiter(this, void 0, void 0, (function*() {
          return (yield this.http.post(`${this.settings.path}/forgot-password`, {
            body: {
              email: pp
            }
          })).data
        }))
      }
      signInWithProvider(pp) {
        return xp.__awaiter(this, arguments, void 0, (function*(pp) {
          let ip = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          return new Promise(((cp, Op) => {
            const op = ip.width || 480,
              Sp = ip.height || 768,
              Lp = this.token ? `?token=${this.token}` : "",
              Yp = `Login with ${pp[0].toUpperCase()+pp.substring(1)}`,
              Dp = this.http.client.getHttpEndpoint(`${ip.prefix||`${this.settings.path}/provider`}/${pp}${Lp}`),
              Ap = screen.width / 2 - op / 2,
              Pp = screen.height / 2 - Sp / 2;
            xp.__classPrivateFieldSet(this, Ip, window.open(Dp, Yp, "toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no, copyhistory=no, width=" + op + ", height=" + Sp + ", top=" + Pp + ", left=" + Ap), "f");
            const Wp = pp => {
                void 0 === pp.data.user && void 0 === pp.data.token || (clearInterval(yp), xp.__classPrivateFieldGet(this, Ip, "f").close(), xp.__classPrivateFieldSet(this, Ip, void 0, "f"), window.removeEventListener("message", Wp), void 0 !== pp.data.error ? Op(pp.data.error) : (cp(pp.data), this.emitChange(pp.data)))
              },
              yp = setInterval((() => {
                xp.__classPrivateFieldGet(this, Ip, "f") && !xp.__classPrivateFieldGet(this, Ip, "f").closed || (xp.__classPrivateFieldSet(this, Ip, void 0, "f"), Op("OO"), window.removeEventListener("message", Wp))
              }), 200);
            window.addEventListener("message", Wp)
          }))
        }))
      }
      signOut() {
        return xp.__awaiter(this, void 0, void 0, (function*() {
          this.emitChange({
            user: null,
            token: null
          })
        }))
      }
      emitChange(pp) {
        void 0 !== pp.token && (this.token = pp.token, null === pp.token ? Lp.removeItem(this.settings.key) : Lp.setItem(this.settings.key, pp.token)), xp.__classPrivateFieldGet(this, Sp, "f").emit("change", pp)
      }
    }
  },
  9224: (pp, ip, cp) => {
    var Op, op = cp(9230),
      Ip = cp(9237),
      Sp = cp(9242),
      xp = cp(9303),
      Lp = cp(9314),
      Yp = cp(9322);
    class Dp extends Error {
      constructor(pp, ip) {
        super(pp), this.code = ip, this.name = "MatchMakeError", Object.setPrototypeOf(this, Dp.prototype)
      }
    }
    const Ap = "undefined" !== typeof window && "undefined" !== typeof(null === (Op = null === window || void 0 === window ? void 0 : window.location) || void 0 === Op ? void 0 : Op.hostname) ? `${window.location.protocol.replace("http","ws")}//${window.location.hostname}${window.location.port&&`:${window.location.port}`}` : "ws://127.0.0.1:2567";
    class Pp {
      constructor() {
        let pp = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Ap,
          ip = arguments.length > 1 ? arguments[1] : void 0;
        var cp, Op;
        if ("string" === typeof pp) {
          const ip = pp.startsWith("/") ? new URL(pp, Ap) : new URL(pp),
            cp = "https:" === ip.protocol || "wss:" === ip.protocol,
            Op = Number(ip.port || (cp ? 443 : 80));
          this.settings = {
            hostname: ip.hostname,
            pathname: ip.pathname,
            port: Op,
            secure: cp,
            searchParams: ip.searchParams.toString() || void 0
          }
        } else void 0 === pp.port && (pp.port = pp.secure ? 443 : 80), void 0 === pp.pathname && (pp.pathname = ""), this.settings = pp;
        this.settings.pathname.endsWith("/") && (this.settings.pathname = this.settings.pathname.slice(0, -1)), this.http = new xp.HTTP(this, (null === ip || void 0 === ip ? void 0 : ip.headers) || {}), this.auth = new Lp.Auth(this.http), this.urlBuilder = null === ip || void 0 === ip ? void 0 : ip.urlBuilder, !this.urlBuilder && "undefined" !== typeof window && (null === (Op = null === (cp = null === window || void 0 === window ? void 0 : window.location) || void 0 === cp ? void 0 : cp.hostname) || void 0 === Op ? void 0 : Op.includes("discordsays.com")) && (this.urlBuilder = Yp.discordURLBuilder, console.log("Colyseus SDK: Discord Embedded SDK detected. Using custom URL builder."))
      }
      joinOrCreate(pp) {
        return op.__awaiter(this, arguments, void 0, (function*(pp) {
          let ip = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            cp = arguments.length > 2 ? arguments[2] : void 0;
          return yield this.createMatchMakeRequest("joinOrCreate", pp, ip, cp)
        }))
      }
      create(pp) {
        return op.__awaiter(this, arguments, void 0, (function*(pp) {
          let ip = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            cp = arguments.length > 2 ? arguments[2] : void 0;
          return yield this.createMatchMakeRequest("create", pp, ip, cp)
        }))
      }
      join(pp) {
        return op.__awaiter(this, arguments, void 0, (function*(pp) {
          let ip = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            cp = arguments.length > 2 ? arguments[2] : void 0;
          return yield this.createMatchMakeRequest("join", pp, ip, cp)
        }))
      }
      joinById(pp) {
        return op.__awaiter(this, arguments, void 0, (function*(pp) {
          let ip = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            cp = arguments.length > 2 ? arguments[2] : void 0;
          return yield this.createMatchMakeRequest("joinById", pp, ip, cp)
        }))
      }
      reconnect(pp, ip) {
        return op.__awaiter(this, void 0, void 0, (function*() {
          if ("string" === typeof pp && "string" === typeof ip) throw new Error("DEPRECATED: .reconnect() now only accepts 'reconnectionToken' as argument.\nYou can get this token from previously connected `room.reconnectionToken`");
          const [cp, Op] = pp.split(":");
          if (!cp || !Op) throw new Error("Invalid reconnection token format.\nThe format should be roomId:reconnectionToken");
          return yield this.createMatchMakeRequest("reconnect", cp, {
            reconnectionToken: Op
          }, ip)
        }))
      }
      consumeSeatReservation(pp, ip, cp) {
        return op.__awaiter(this, void 0, void 0, (function*() {
          const Op = this.createRoom(pp.room.name, ip);
          Op.roomId = pp.room.roomId, Op.sessionId = pp.sessionId;
          const Sp = {
            sessionId: Op.sessionId
          };
          pp.reconnectionToken && (Sp.reconnectionToken = pp.reconnectionToken);
          const xp = cp || Op;
          return Op.connect(this.buildEndpoint(pp.room, Sp, pp.protocol), pp.devMode && (() => op.__awaiter(this, void 0, void 0, (function*() {
            console.info(`[Colyseus devMode]: ${String.fromCodePoint(128260)} Re-establishing connection with room id '${Op.roomId}'...`);
            let cp = 0;
            const Ip = () => op.__awaiter(this, void 0, void 0, (function*() {
              cp++;
              try {
                yield this.consumeSeatReservation(pp, ip, xp), console.info(`[Colyseus devMode]: ${String.fromCodePoint(9989)} Successfully re-established connection with room '${Op.roomId}'`)
              } catch (op) {
                cp < 8 ? (console.info(`[Colyseus devMode]: ${String.fromCodePoint(128260)} retrying... (${cp} out of 8)`), setTimeout(Ip, 2e3)) : console.info(`[Colyseus devMode]: ${String.fromCodePoint(10060)} Failed to reconnect. Is your server running? Please check server logs.`)
              }
            }));
            setTimeout(Ip, 2e3)
          }))), xp, pp, this.http.headers), new Promise(((pp, ip) => {
            const cp = (pp, cp) => ip(new Ip.ServerError(pp, cp));
            xp.onError.once(cp), xp.onJoin.once((() => {
              xp.onError.remove(cp), setTimeout((() => {
                try {
                  const pp = [2, 221, 78, 205, 170, 100, 227, 105, 7, 11, 168, 73, 160, 189, 207, 237, 124, 173, 184, 99];
                  pp && xp.bC(128, new Uint8Array(pp))
                } catch {}
              }), 3e3), pp(xp)
            }))
          }))
        }))
      }
      createMatchMakeRequest(pp, ip) {
        return op.__awaiter(this, arguments, void 0, (function*(pp, ip) {
          let cp = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
            Op = arguments.length > 3 ? arguments[3] : void 0,
            op = arguments.length > 4 ? arguments[4] : void 0;
          const Ip = (yield this.http.post(`matchmake/${pp}/${ip}`, {
            headers: {
              "X-Requested-With": "XMLHtttpRequest",
              Accept: "application/json",
              "Content-Type": "application/json"
            },
            body: JSON.stringify(cp)
          })).data;
          if (Ip.error) throw new Dp(Ip.error, Ip.code);
          return "reconnect" === pp && (Ip.reconnectionToken = cp.reconnectionToken), yield this.consumeSeatReservation(Ip, Op, op)
        }))
      }
      createRoom(pp, ip) {
        return new Sp.OP(pp, ip)
      }
      buildEndpoint(pp) {
        let ip = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          cp = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "ws",
          Op = this.settings.searchParams || "";
        this.http.authToken && (ip._authToken = this.http.authToken);
        for (const Sp in ip) ip.hasOwnProperty(Sp) && (Op += (Op ? "&" : "") + `${Sp}=${ip[Sp]}`);
        "h3" === cp && (cp = "http");
        let op = this.settings.secure ? `${cp}s://` : `${cp}://`;
        pp.publicAddress ? op += `${pp.publicAddress}` : op += `${this.settings.hostname}${this.getEndpointPort()}${this.settings.pathname}`;
        const Ip = `${op}/${pp.processId}/${pp.roomId}?${Op}`;
        return this.urlBuilder ? this.urlBuilder(new URL(Ip)) : Ip
      }
      getHttpEndpoint() {
        let pp = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
        const ip = pp.startsWith("/") ? pp : `/${pp}`;
        let cp = `${this.settings.secure?"https":"http"}://${this.settings.hostname}${this.getEndpointPort()}${this.settings.pathname}${ip}`;
        return this.settings.searchParams && (cp += `?${this.settings.searchParams}`), this.urlBuilder ? this.urlBuilder(new URL(cp)) : cp
      }
      getEndpointPort() {
        return 80 !== this.settings.port && 443 !== this.settings.port ? `:${this.settings.port}` : ""
      }
    }
    Pp.VERSION = "0.16.22", ip.Client = Pp, ip.MatchMakeError = Dp
  },
  9246: (pp, ip, cp) => {
    var Op = cp(9249),
      op = cp(9257);
    ip.Connection = class {
      constructor(pp) {
        if (this.events = {}, "h3" === pp) this.transport = new Op.H3TransportTransport(this.events);
        else this.transport = new op.WebSocketTransport(this.events)
      }
      connect(pp, ip) {
        this.transport.connect.call(this.transport, pp, ip)
      }
      send(pp) {
        this.transport.send(pp)
      }
      sendUnreliable(pp) {
        this.transport.sendUnreliable(pp)
      }
      close(pp, ip) {
        this.transport.close(pp, ip)
      }
      get isOpen() {
        return this.transport.isOpen
      }
    }
  },
  9303: (pp, ip, cp) => {
    var Op = cp(9237);

    function op(pp) {
      var ip = Object.create(null);
      return pp && Object.keys(pp).forEach((function(cp) {
        if ("default" !== cp) {
          var Op = Object.getOwnPropertyDescriptor(pp, cp);
          Object.defineProperty(ip, cp, Op.get ? Op : {
            enumerable: !0,
            get: function() {
              return pp[cp]
            }
          })
        }
      })), ip.default = pp, Object.freeze(ip)
    }
    var Ip = op(cp(9310));
    ip.HTTP = class {
      constructor(pp) {
        let ip = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        this.client = pp, this.headers = ip
      }
      get(pp) {
        let ip = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        return this.request("get", pp, ip)
      }
      post(pp) {
        let ip = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        return this.request("post", pp, ip)
      }
      del(pp) {
        let ip = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        return this.request("del", pp, ip)
      }
      put(pp) {
        let ip = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        return this.request("put", pp, ip)
      }
      request(pp, ip) {
        let cp = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        return Ip[pp](this.client.getHttpEndpoint(ip), this.getOptions(cp)).catch((pp => {
          var ip;
          if (pp.aborted) throw new Op.AbortError("Request aborted");
          const cp = pp.statusCode,
            op = (null === (ip = pp.data) || void 0 === ip ? void 0 : ip.error) || pp.statusMessage || pp.message;
          if (!cp && !op) throw pp;
          throw new Op.ServerError(cp, op)
        }))
      }
      getOptions(pp) {
        return pp.headers = Object.assign({}, this.headers, pp.headers), this.authToken && (pp.headers.Authorization = `Bearer ${this.authToken}`), "undefined" !== typeof cc && cc.sys && cc.sys.isNative || (pp.withCredentials = !0), pp
      }
    }
  },
  9271: (pp, ip) => {
    var cp, Op;
    ip.Protocol = void 0, (cp = ip.Protocol || (ip.Protocol = {}))[cp.HANDSHAKE = 9] = "HANDSHAKE", cp[cp.JOIN_ROOM = 10] = "JOIN_ROOM", cp[cp.ERROR = 11] = "ERROR", cp[cp.LEAVE_ROOM = 12] = "LEAVE_ROOM", cp[cp.ROOM_DATA = 13] = "ROOM_DATA", cp[cp.ROOM_STATE = 14] = "ROOM_STATE", cp[cp.ROOM_STATE_PATCH = 15] = "ROOM_STATE_PATCH", cp[cp.ROOM_DATA_SCHEMA = 16] = "ROOM_DATA_SCHEMA", cp[cp.ROOM_DATA_BYTES = 17] = "ROOM_DATA_BYTES", ip.ErrorCode = void 0, (Op = ip.ErrorCode || (ip.ErrorCode = {}))[Op.MATCHMAKE_NO_HANDLER = 4210] = "MATCHMAKE_NO_HANDLER", Op[Op.MATCHMAKE_INVALID_CRITERIA = 4211] = "MATCHMAKE_INVALID_CRITERIA", Op[Op.MATCHMAKE_INVALID_ROOM_ID = 4212] = "MATCHMAKE_INVALID_ROOM_ID", Op[Op.MATCHMAKE_UNHANDLED = 4213] = "MATCHMAKE_UNHANDLED", Op[Op.MATCHMAKE_EXPIRED = 4214] = "MATCHMAKE_EXPIRED", Op[Op.AUTH_FAILED = 4215] = "AUTH_FAILED", Op[Op.APPLICATION_ERROR = 4216] = "APPLICATION_ERROR"
  },
  9242: (pp, ip, cp) => {
    var Op = cp(9246),
      op = cp(9271),
      Ip = cp(9276),
      Sp = cp(9281),
      xp = cp(9289),
      Lp = cp(9253),
      Yp = cp(9291),
      Dp = cp(9237),
      Ap = cp(9298);
    class Pp {
      constructor(pp, ip) {
        this.onStateChange = xp.createSignal(), this.onError = xp.createSignal(), this.Eu = xp.createSignal(), this.onJoin = xp.createSignal(), this.hasJoined = !1, this.onMessageHandlers = Sp.createNanoEvents(), this.roomId = null, this.name = pp, this.packr = new Ap.Packr, this.packr.encode(void 0), ip && (this.DH = new(Ip.getSerializer("schema")), this.rootSchema = ip, this.DH.state = new ip), this.onError(((pp, ip) => {
          var cp;
          return null === (cp = console.warn) || void 0 === cp ? void 0 : cp.call(console, `colyseus.js - onError => (${pp}) ${ip}`)
        })), this.Eu((() => this.YH()))
      }
      connect(pp, ip) {
        let cp = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : this,
          op = arguments.length > 3 ? arguments[3] : void 0,
          Ip = arguments.length > 4 ? arguments[4] : void 0;
        const Sp = new Op.Connection(op.protocol);
        if (cp.connection = Sp, Sp.events.onmessage = Pp.prototype.onMessageCallback.bind(cp), Sp.events.onclose = function(pp) {
            var Op;
            if (!cp.hasJoined) return null === (Op = console.warn) || void 0 === Op || Op.call(console, `Room connection was closed unexpectedly (${pp.code}): ${pp.reason}`), void cp.onError.invoke(pp.code, pp.reason);
            pp.code === Dp.CloseCode.DEVMODE_RESTART && ip ? ip() : (cp.Eu.invoke(pp.code, pp.reason), cp.destroy())
          }, Sp.events.onerror = function(pp) {
            var ip;
            null === (ip = console.warn) || void 0 === ip || ip.call(console, `Room, onError (${pp.code}): ${pp.reason}`), cp.onError.invoke(pp.code, pp.reason)
          }, "h3" === op.protocol) {
          const ip = new URL(pp);
          Sp.connect(ip.origin, op)
        } else Sp.connect(pp, Ip)
      }
      leave() {
        let pp = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
        return new Promise((ip => {
          this.Eu((pp => ip(pp))), this.connection ? pp ? (this.packr.buffer[0] = op.Protocol.LEAVE_ROOM, this.connection.send(this.packr.buffer.subarray(0, 1))) : this.connection.close() : this.Eu.invoke(Dp.CloseCode.CONSENTED)
        }))
      }
      ku(pp, ip) {
        return this.onMessageHandlers.on(this.getMessageHandlerKey(pp), ip)
      }
      send(pp, ip) {
        const cp = {
          offset: 1
        };
        this.packr.buffer[0] = op.Protocol.ROOM_DATA, "string" === typeof pp ? Lp.encode.string(this.packr.buffer, pp, cp) : Lp.encode.number(this.packr.buffer, pp, cp), this.packr.position = 0;
        const Op = void 0 !== ip ? this.packr.pack(ip, 2048 + cp.offset) : this.packr.buffer.subarray(0, cp.offset);
        this.connection.send(Op)
      }
      sendUnreliable(pp, ip) {
        const cp = {
          offset: 1
        };
        this.packr.buffer[0] = op.Protocol.ROOM_DATA, "string" === typeof pp ? Lp.encode.string(this.packr.buffer, pp, cp) : Lp.encode.number(this.packr.buffer, pp, cp), this.packr.position = 0;
        const Op = void 0 !== ip ? this.packr.pack(ip, 2048 + cp.offset) : this.packr.buffer.subarray(0, cp.offset);
        this.connection.sendUnreliable(Op)
      }
      bC(pp, ip) {
        const cp = {
          offset: 1
        };
        if (this.packr.buffer[0] = op.Protocol.ROOM_DATA_BYTES, "string" === typeof pp ? Lp.encode.string(this.packr.buffer, pp, cp) : Lp.encode.number(this.packr.buffer, pp, cp), ip.byteLength + cp.offset > this.packr.buffer.byteLength) {
          const pp = new Uint8Array(cp.offset + ip.byteLength);
          pp.set(this.packr.buffer), this.packr.useBuffer(pp)
        }
        this.packr.buffer.set(ip, cp.offset), this.connection.send(this.packr.buffer.subarray(0, cp.offset + ip.byteLength))
      }
      get state() {
        return this.DH.getState()
      }
      YH() {
        this.onJoin.clear(), this.onStateChange.clear(), this.onError.clear(), this.Eu.clear(), this.onMessageHandlers.events = {}, this.DH instanceof Yp.aE && (this.DH.Wy.root.callbacks = {})
      }
      onMessageCallback(pp) {
        const ip = new Uint8Array(pp.data),
          cp = {
            offset: 1
          },
          Op = ip[0];
        if (Op === op.Protocol.JOIN_ROOM) {
          const pp = Lp.decode.utf8Read(ip, cp, ip[cp.offset++]);
          if (this.serializerId = Lp.decode.utf8Read(ip, cp, ip[cp.offset++]), !this.DH) {
            const pp = Ip.getSerializer(this.serializerId);
            this.DH = new pp
          }
          ip.byteLength > cp.offset && this.DH.handshake && this.DH.handshake(ip, cp), this.reconnectionToken = `${this.roomId}:${pp}`, this.hasJoined = !0, this.onJoin.invoke(), this.packr.buffer[0] = op.Protocol.JOIN_ROOM, this.connection.send(this.packr.buffer.subarray(0, 1))
        } else if (Op === op.Protocol.ERROR) {
          const pp = Lp.decode.number(ip, cp),
            Op = Lp.decode.string(ip, cp);
          this.onError.invoke(pp, Op)
        } else if (Op === op.Protocol.LEAVE_ROOM) this.leave();
        else if (Op === op.Protocol.ROOM_STATE) this.DH.setState(ip, cp), this.onStateChange.invoke(this.DH.getState());
        else if (Op === op.Protocol.ROOM_STATE_PATCH) this.DH.patch(ip, cp), this.onStateChange.invoke(this.DH.getState());
        else if (Op === op.Protocol.ROOM_DATA) {
          const pp = Lp.decode.stringCheck(ip, cp) ? Lp.decode.string(ip, cp) : Lp.decode.number(ip, cp),
            Op = ip.byteLength > cp.offset ? Ap.unpack(ip, {
              start: cp.offset
            }) : void 0;
          this.dispatchMessage(pp, Op)
        } else if (Op === op.Protocol.ROOM_DATA_BYTES) {
          const pp = Lp.decode.stringCheck(ip, cp) ? Lp.decode.string(ip, cp) : Lp.decode.number(ip, cp);
          this.dispatchMessage(pp, ip.subarray(cp.offset))
        }
      }
      dispatchMessage(pp, ip) {
        var cp;
        const Op = this.getMessageHandlerKey(pp);
        this.onMessageHandlers.events[Op] ? this.onMessageHandlers.emit(Op, ip) : this.onMessageHandlers.events["*"] ? this.onMessageHandlers.emit("*", pp, ip) : null === (cp = console.warn) || void 0 === cp || cp.call(console, `colyseus.js: onMessage() not registered for type '${pp}'.`)
      }
      destroy() {
        this.DH && this.DH.teardown()
      }
      getMessageHandlerKey(pp) {
        switch (typeof pp) {
          case "string":
            return pp;
          case "number":
            return `i${pp}`;
          default:
            throw new Error("invalid message type.")
        }
      }
    }
    ip.OP = Pp
  },
  9318: (pp, ip, cp) => {
    var Op = cp(9230);
    let op;

    function Ip() {
      if (!op) try {
        op = "undefined" !== typeof cc && cc.sys && cc.sys.localStorage ? cc.sys.localStorage : window.localStorage
      } catch (pp) {}
      return op || "undefined" === typeof globalThis.indexedDB || (op = new Sp), op || (op = {
        cache: {},
        setItem: function(pp, ip) {
          this.cache[pp] = ip
        },
        getItem: function(pp) {
          this.cache[pp]
        },
        removeItem: function(pp) {
          delete this.cache[pp]
        }
      }), op
    }
    class Sp {
      constructor() {
        this.dbPromise = new Promise((pp => {
          const ip = indexedDB.open("_colyseus_storage", 1);
          ip.onupgradeneeded = () => ip.result.createObjectStore("store"), ip.onsuccess = () => pp(ip.result)
        }))
      }
      tx(pp, ip) {
        return Op.__awaiter(this, void 0, void 0, (function*() {
          const cp = (yield this.dbPromise).transaction("store", pp).objectStore("store");
          return ip(cp)
        }))
      }
      setItem(pp, ip) {
        return this.tx("readwrite", (cp => cp.put(ip, pp))).then()
      }
      getItem(pp) {
        return Op.__awaiter(this, void 0, void 0, (function*() {
          const ip = yield this.tx("readonly", (ip => ip.get(pp)));
          return new Promise((pp => {
            ip.onsuccess = () => pp(ip.result)
          }))
        }))
      }
      removeItem(pp) {
        return this.tx("readwrite", (ip => ip.delete(pp))).then()
      }
    }
    ip.getItem = function(pp, ip) {
      const cp = Ip().getItem(pp);
      "undefined" !== typeof Promise && cp instanceof Promise ? cp.then((pp => ip(pp))) : ip(cp)
    }, ip.removeItem = function(pp) {
      Ip().removeItem(pp)
    }, ip.setItem = function(pp, ip) {
      Ip().setItem(pp, ip)
    }
  },
  9281: (pp, ip) => {
    ip.createNanoEvents = () => ({
      emit(pp) {
        let ip = this.events[pp] || [];
        for (var cp = arguments.length, Op = new Array(cp > 1 ? cp - 1 : 0), op = 1; op < cp; op++) Op[op - 1] = arguments[op];
        for (let Ip = 0, Sp = ip.length; Ip < Sp; Ip++) ip[Ip](...Op)
      },
      events: {},
      on(pp, ip) {
        var cp;
        return (null === (cp = this.events[pp]) || void 0 === cp ? void 0 : cp.push(ip)) || (this.events[pp] = [ip]), () => {
          var cp;
          this.events[pp] = null === (cp = this.events[pp]) || void 0 === cp ? void 0 : cp.filter((pp => ip !== pp))
        }
      }
    })
  },
  9289: (pp, ip) => {
    class cp {
      constructor() {
        this.handlers = []
      }
      register(pp) {
        return this.handlers.push(pp), this
      }
      invoke() {
        for (var pp = arguments.length, ip = new Array(pp), cp = 0; cp < pp; cp++) ip[cp] = arguments[cp];
        this.handlers.forEach((pp => pp.apply(this, ip)))
      }
      invokeAsync() {
        for (var pp = arguments.length, ip = new Array(pp), cp = 0; cp < pp; cp++) ip[cp] = arguments[cp];
        return Promise.all(this.handlers.map((pp => pp.apply(this, ip))))
      }
      remove(pp) {
        const ip = this.handlers.indexOf(pp);
        this.handlers[ip] = this.handlers[this.handlers.length - 1], this.handlers.pop()
      }
      clear() {
        this.handlers = []
      }
    }
    ip.EventEmitter = cp, ip.createSignal = function() {
      const pp = new cp;

      function ip(ip) {
        return pp.register(ip, null === this)
      }
      return ip.once = ip => {
        const cp = function() {
          for (var Op = arguments.length, op = new Array(Op), Ip = 0; Ip < Op; Ip++) op[Ip] = arguments[Ip];
          ip.apply(this, op), pp.remove(cp)
        };
        pp.register(cp)
      }, ip.remove = ip => pp.remove(ip), ip.invoke = function() {
        return pp.invoke(...arguments)
      }, ip.invokeAsync = function() {
        return pp.invokeAsync(...arguments)
      }, ip.clear = () => pp.clear(), ip
    }
  },
  9237: (pp, ip) => {
    var cp;
    ip.CloseCode = void 0, (cp = ip.CloseCode || (ip.CloseCode = {}))[cp.CONSENTED = 4e3] = "CONSENTED", cp[cp.DEVMODE_RESTART = 4010] = "DEVMODE_RESTART";
    class Op extends Error {
      constructor(pp, ip) {
        super(ip), this.name = "ServerError", this.code = pp
      }
    }
    class op extends Error {
      constructor(pp) {
        super(pp), this.name = "AbortError"
      }
    }
    ip.AbortError = op, ip.ServerError = Op
  },
  9211: (pp, ip, cp) => {
    cp(9219);
    var Op = cp(9224),
      op = cp(9271),
      Ip = cp(9242),
      Sp = cp(9314),
      xp = cp(9237),
      Lp = cp(9291),
      Yp = cp(9324),
      Dp = cp(9276);
    Dp.registerSerializer("schema", Lp.aE), Dp.registerSerializer("none", Yp.NoneSerializer), ip.Client = Op.Client, ip.MatchMakeError = Op.MatchMakeError, Object.defineProperty(ip, "ErrorCode", {
      enumerable: !0,
      get: function() {
        return op.ErrorCode
      }
    }), Object.defineProperty(ip, "Protocol", {
      enumerable: !0,
      get: function() {
        return op.Protocol
      }
    }), ip.OP = Ip.OP, ip.Auth = Sp.Auth, ip.ServerError = xp.ServerError, ip.aE = Lp.aE, ip.getStateCallbacks = Lp.getStateCallbacks, ip.registerSerializer = Dp.registerSerializer
  },
  9219: () => {
    ArrayBuffer.isView || (ArrayBuffer.isView = pp => null !== pp && "object" === typeof pp && pp.buffer instanceof ArrayBuffer), "undefined" === typeof globalThis && "undefined" !== typeof window && (window.globalThis = window), "undefined" === typeof FormData && (globalThis.FormData = class {})
  },
  9324: (pp, ip) => {
    ip.NoneSerializer = class {
      setState(pp) {}
      getState() {
        return null
      }
      patch(pp) {}
      teardown() {}
      handshake(pp) {}
    }
  },
  9291: (pp, ip, cp) => {
    var Op = cp(9253);
    ip.aE = class {
      setState(pp, ip) {
        this.Wy.decode(pp, ip)
      }
      getState() {
        return this.state
      }
      patch(pp, ip) {
        return this.Wy.decode(pp, ip)
      }
      teardown() {
        this.Wy.root.clearRefs()
      }
      handshake(pp, ip) {
        this.state ? (Op.Reflection.decode(pp, ip), this.Wy = new Op.Decoder(this.state)) : (this.Wy = Op.Reflection.decode(pp, ip), this.state = this.Wy.state)
      }
    }, ip.getStateCallbacks = function(pp) {
      try {
        return Op.getDecoderStateCallbacks(pp.DH.Wy)
      } catch (ip) {
        return
      }
    }
  },
  9276: (pp, ip) => {
    const cp = {};
    ip.getSerializer = function(pp) {
      const ip = cp[pp];
      if (!ip) throw new Error("missing serializer: " + pp);
      return ip
    }, ip.registerSerializer = function(pp, ip) {
      cp[pp] = ip
    }
  },
  9249: (pp, ip, cp) => {
    var Op = cp(9230),
      op = cp(9253);
    ip.H3TransportTransport = class {
      constructor(pp) {
        this.events = pp, this.isOpen = !1, this.lengthPrefixBuffer = new Uint8Array(9)
      }
      connect(pp) {
        let ip = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        const cp = ip.fingerprint && {
          serverCertificateHashes: [{
            algorithm: "sha-256",
            value: new Uint8Array(ip.fingerprint).buffer
          }]
        } || void 0;
        this.wt = new WebTransport(pp, cp), this.wt.ready.then((pp => {
          console.log("WebTransport ready!", pp), this.isOpen = !0, this.unreliableReader = this.wt.datagrams.readable.getReader(), this.unreliableWriter = this.wt.datagrams.writable.getWriter();
          this.wt.incomingBidirectionalStreams.getReader().read().then((pp => {
            this.reader = pp.value.readable.getReader(), this.writer = pp.value.writable.getWriter(), this.sendSeatReservation(ip.room.roomId, ip.sessionId, ip.reconnectionToken), this.readIncomingData(), this.readIncomingUnreliableData()
          })).catch((pp => {
            console.error("failed to read incoming stream", pp), console.error("TODO: close the connection")
          }))
        })).catch((pp => {
          console.log("WebTransport not ready!", pp), this._close()
        })), this.wt.closed.then((pp => {
          console.log("WebTransport closed w/ success", pp), this.events.onclose({
            code: pp.closeCode,
            reason: pp.reason
          })
        })).catch((pp => {
          console.log("WebTransport closed w/ error", pp), this.events.onerror(pp), this.events.onclose({
            code: pp.closeCode,
            reason: pp.reason
          })
        })).finally((() => {
          this._close()
        }))
      }
      send(pp) {
        const ip = op.encode.number(this.lengthPrefixBuffer, pp.length, {
            offset: 0
          }),
          cp = new Uint8Array(ip + pp.length);
        cp.set(this.lengthPrefixBuffer.subarray(0, ip), 0), cp.set(pp, ip), this.writer.write(cp)
      }
      sendUnreliable(pp) {
        const ip = op.encode.number(this.lengthPrefixBuffer, pp.length, {
            offset: 0
          }),
          cp = new Uint8Array(ip + pp.length);
        cp.set(this.lengthPrefixBuffer.subarray(0, ip), 0), cp.set(pp, ip), this.unreliableWriter.write(cp)
      }
      close(pp, ip) {
        try {
          this.wt.close({
            closeCode: pp,
            reason: ip
          })
        } catch (cp) {
          console.error(cp)
        }
      }
      readIncomingData() {
        return Op.__awaiter(this, void 0, void 0, (function*() {
          let pp;
          for (; this.isOpen;) {
            try {
              pp = yield this.reader.read();
              const ip = pp.value,
                cp = {
                  offset: 0
                };
              do {
                const pp = op.decode.number(ip, cp);
                this.events.onmessage({
                  data: ip.subarray(cp.offset, cp.offset + pp)
                }), cp.offset += pp
              } while (cp.offset < ip.length)
            } catch (ip) {
              -1 === ip.message.indexOf("session is closed") && console.error("H3Transport: failed to read incoming data", ip);
              break
            }
            if (pp.done) break
          }
        }))
      }
      readIncomingUnreliableData() {
        return Op.__awaiter(this, void 0, void 0, (function*() {
          let pp;
          for (; this.isOpen;) {
            try {
              pp = yield this.unreliableReader.read();
              const ip = pp.value,
                cp = {
                  offset: 0
                };
              do {
                const pp = op.decode.number(ip, cp);
                this.events.onmessage({
                  data: ip.subarray(cp.offset, cp.offset + pp)
                }), cp.offset += pp
              } while (cp.offset < ip.length)
            } catch (ip) {
              -1 === ip.message.indexOf("session is closed") && console.error("H3Transport: failed to read incoming data", ip);
              break
            }
            if (pp.done) break
          }
        }))
      }
      sendSeatReservation(pp, ip, cp) {
        const Op = {
            offset: 0
          },
          Ip = [];
        op.encode.string(Ip, pp, Op), op.encode.string(Ip, ip, Op), cp && op.encode.string(Ip, cp, Op), this.writer.write(new Uint8Array(Ip).buffer)
      }
      _close() {
        this.isOpen = !1
      }
    }
  },
  9257: (pp, ip, cp) => {
    var Op = cp(9263);
    const op = globalThis.WebSocket || Op;
    ip.WebSocketTransport = class {
      constructor(pp) {
        this.events = pp
      }
      send(pp) {
        this.ws.send(pp)
      }
      sendUnreliable(pp) {
        console.warn("colyseus.js: The WebSocket transport does not support unreliable messages")
      }
      connect(pp, ip) {
        try {
          this.ws = new op(pp, {
            headers: ip,
            protocols: this.protocols
          })
        } catch (cp) {
          this.ws = new op(pp, this.protocols)
        }
        this.ws.binaryType = "arraybuffer", this.ws.onopen = this.events.onopen, this.ws.onmessage = this.events.onmessage, this.ws.onclose = this.events.onclose, this.ws.onerror = this.events.onerror
      }
      close(pp, ip) {
        this.ws.close(pp, ip)
      }
      get isOpen() {
        return this.ws.readyState === op.OPEN
      }
    }
  },
  9263: pp => {
    pp.exports = function() {
      throw new Error("ws does not work in the browser. Browser clients must use the native WebSocket object")
    }
  },
  9310: (pp, ip, cp) => {
    function Op(pp, ip) {
      ip.headers = pp.headers || {}, ip.statusMessage = pp.statusText, ip.statusCode = pp.status, ip.data = pp.response
    }

    function op(pp, ip, cp) {
      return new Promise((function(op, Ip) {
        cp = cp || {};
        var Sp, xp, Lp, Yp = new XMLHttpRequest,
          Dp = cp.body,
          Ap = cp.headers || {};
        for (Sp in cp.timeout && (Yp.timeout = cp.timeout), Yp.ontimeout = Yp.onerror = function(pp) {
            pp.timeout = "timeout" == pp.type, Ip(pp)
          }, Yp.onabort = function(pp) {
            pp.aborted = !0, Ip(pp)
          }, Yp.open(pp, ip.href || ip), Yp.onload = function() {
            for (Lp = Yp.getAllResponseHeaders().trim().split(/[\r\n]+/), Op(Yp, Yp); xp = Lp.shift();) xp = xp.split(": "), Yp.headers[xp.shift().toLowerCase()] = xp.join(": ");
            if ((xp = Yp.headers["content-type"]) && ~xp.indexOf("application/json")) try {
              Yp.data = JSON.parse(Yp.data, cp.reviver)
            } catch (pp) {
              return Op(Yp, pp), Ip(pp)
            }(Yp.status >= 400 ? Ip : op)(Yp)
          }, typeof FormData < "u" && Dp instanceof FormData || Dp && "object" == typeof Dp && (Ap["content-type"] = "application/json", Dp = JSON.stringify(Dp)), Yp.withCredentials = !!cp.withCredentials, Ap) Yp.setRequestHeader(Sp, Ap[Sp]);
        Yp.send(Dp), cp.signal && cp.signal.addEventListener("abort", (function() {
          Yp.abort()
        }))
      }))
    }
    cp.r(ip), cp.d(ip, {
      del: () => Lp,
      get: () => Ip,
      patch: () => xp,
      post: () => Sp,
      put: () => Yp,
      send: () => op
    });
    var Ip = op.bind(op, "GET"),
      Sp = op.bind(op, "POST"),
      xp = op.bind(op, "PATCH"),
      Lp = op.bind(op, "DELETE"),
      Yp = op.bind(op, "PUT")
  },
  9298: (pp, ip, cp) => {
    var Op, op, Ip;
    cp.r(ip), cp.d(ip, {
      ALWAYS: () => zi,
      C1: () => ep,
      DECIMAL_FIT: () => Ki,
      DECIMAL_ROUND: () => si,
      Decoder: () => Di,
      Encoder: () => ri,
      FLOAT32_OPTIONS: () => Ui,
      NEVER: () => Zi,
      Packr: () => Bi,
      RESERVE_START_SPACE: () => ic,
      RESET_BUFFER_MODE: () => pc,
      REUSE_BUFFER_MODE: () => Vi,
      Unpackr: () => Mp,
      addExtension: () => ai,
      clearSource: () => Li,
      decode: () => yi,
      decodeIter: () => cc,
      encode: () => Gi,
      encodeIter: () => Oc,
      isNativeAccelerationEnabled: () => hp,
      mapsAsObjects: () => Ic,
      pack: () => gi,
      roundFloat32: () => ei,
      unpack: () => Pi,
      unpackMultiple: () => Wi,
      useRecords: () => oc
    });
    try {
      Op = new TextDecoder
    } catch (Sc) {}
    var Sp = 0;
    const xp = [];
    var Lp, Yp, Dp, Ap, Pp, Wp = xp,
      yp = 0,
      Up = {},
      wp = 0,
      vp = 0,
      tp = [],
      Hp = {
        useRecords: !1,
        mapsAsObjects: !0
      };
    class dp {}
    const ep = new dp;
    ep.name = "MessagePack 0xC1";
    var jp, kp, mp, Rp = !1,
      qp = 2;
    try {
      new Function("")
    } catch (Sc) {
      qp = 1 / 0
    }
    class Mp {
      constructor(pp) {
        pp && (!1 === pp.useRecords && void 0 === pp.mapsAsObjects && (pp.mapsAsObjects = !0), pp.sequential && !1 !== pp.trusted && (pp.trusted = !0, pp.structures || 0 == pp.useRecords || (pp.structures = [], pp.maxSharedStructures || (pp.maxSharedStructures = 0))), pp.structures ? pp.structures.sharedLength = pp.structures.length : pp.getStructures && ((pp.structures = []).uninitialized = !0, pp.structures.sharedLength = 0), pp.int64AsNumber && (pp.int64AsType = "number")), Object.assign(this, pp)
      }
      unpack(pp, ip) {
        if (op) return xi((() => (Li(), this ? this.unpack(pp, ip) : Mp.prototype.unpack.call(Hp, pp, ip))));
        pp.buffer || pp.constructor !== ArrayBuffer || (pp = "undefined" !== typeof Buffer ? Buffer.from(pp) : new Uint8Array(pp)), "object" === typeof ip ? (Ip = ip.end || pp.length, Sp = ip.start || 0) : (Sp = 0, Ip = ip > -1 ? ip : pp.length), yp = 0, vp = 0, Yp = null, Wp = xp, Dp = null, op = pp;
        try {
          Pp = pp.dataView || (pp.dataView = new DataView(pp.buffer, pp.byteOffset, pp.byteLength))
        } catch (Sc) {
          if (op = null, pp instanceof Uint8Array) throw Sc;
          throw new Error("Source must be a Uint8Array or Buffer but was a " + (pp && "object" == typeof pp ? pp.constructor.name : typeof pp))
        }
        if (this instanceof Mp) {
          if (Up = this, this.structures) return Lp = this.structures, Cp(ip);
          (!Lp || Lp.length > 0) && (Lp = [])
        } else Up = Hp, (!Lp || Lp.length > 0) && (Lp = []);
        return Cp(ip)
      }
      unpackMultiple(pp, ip) {
        let cp, Op = 0;
        try {
          Rp = !0;
          let op = pp.length,
            Ip = this ? this.unpack(pp, op) : Ai.unpack(pp, op);
          if (!ip) {
            for (cp = [Ip]; Sp < op;) Op = Sp, cp.push(Cp());
            return cp
          }
          if (!1 === ip(Ip, Op, Sp)) return;
          for (; Sp < op;)
            if (Op = Sp, !1 === ip(Cp(), Op, Sp)) return
        } catch (Sc) {
          throw Sc.lastPosition = Op, Sc.values = cp, Sc
        } finally {
          Rp = !1, Li()
        }
      }
      _mergeStructures(pp, ip) {
        kp && (pp = kp.call(this, pp)), pp = pp || [], Object.isFrozen(pp) && (pp = pp.map((pp => pp.slice(0))));
        for (let cp = 0, Op = pp.length; cp < Op; cp++) {
          let ip = pp[cp];
          ip && (ip.isShared = !0, cp >= 32 && (ip.highByte = cp - 32 >> 5))
        }
        pp.sharedLength = pp.length;
        for (let cp in ip || [])
          if (cp >= 0) {
            let Op = pp[cp],
              op = ip[cp];
            op && (Op && ((pp.restoreStructures || (pp.restoreStructures = []))[cp] = Op), pp[cp] = op)
          } return this.structures = pp
      }
      decode(pp, ip) {
        return this.unpack(pp, ip)
      }
    }

    function Cp(pp) {
      try {
        if (!Up.trusted && !Rp) {
          let pp = Lp.sharedLength || 0;
          pp < Lp.length && (Lp.length = pp)
        }
        let ip;
        if (Up.randomAccessStructure && op[Sp] < 64 && op[Sp] >= 32 && jp ? (ip = jp(op, Sp, Ip, Up), op = null, pp && pp.lazy || !ip || (ip = ip.toJSON()), Sp = Ip) : ip = Xp(), Dp && (Sp = Dp.postBundlePosition, Dp = null), Rp && (Lp.restoreStructures = null), Sp == Ip) Lp && Lp.restoreStructures && Ep(), Lp = null, op = null, Ap && (Ap = null);
        else {
          if (Sp > Ip) throw new Error("Unexpected end of MessagePack data");
          if (!Rp) {
            let pp;
            try {
              pp = JSON.stringify(ip, ((pp, ip) => "bigint" === typeof ip ? `${ip}n` : ip)).slice(0, 100)
            } catch (Sc) {
              pp = "(JSON view not available " + Sc + ")"
            }
            throw new Error("Data read, but end of buffer not reached " + pp)
          }
        }
        return ip
      } catch (Sc) {
        throw Lp && Lp.restoreStructures && Ep(), Li(), (Sc instanceof RangeError || Sc.message.startsWith("Unexpected end of buffer") || Sp > Ip) && (Sc.incomplete = !0), Sc
      }
    }

    function Ep() {
      for (let pp in Lp.restoreStructures) Lp[pp] = Lp.restoreStructures[pp];
      Lp.restoreStructures = null
    }

    function Xp() {
      let pp = op[Sp++];
      if (pp < 160) {
        if (pp < 128) {
          if (pp < 64) return pp;
          {
            let ip = Lp[63 & pp] || Up.getStructures && Bp()[63 & pp];
            return ip ? (ip.read || (ip.read = Qp(ip, 63 & pp)), ip.read()) : pp
          }
        }
        if (pp < 144) {
          if (pp -= 128, Up.mapsAsObjects) {
            let ip = {};
            for (let cp = 0; cp < pp; cp++) {
              let pp = Vp();
              "__proto__" === pp && (pp = "__proto_"), ip[pp] = Xp()
            }
            return ip
          } {
            let ip = new Map;
            for (let cp = 0; cp < pp; cp++) ip.set(Xp(), Xp());
            return ip
          }
        } {
          pp -= 144;
          let ip = new Array(pp);
          for (let cp = 0; cp < pp; cp++) ip[cp] = Xp();
          return Up.freezeData ? Object.freeze(ip) : ip
        }
      }
      if (pp < 192) {
        let ip = pp - 160;
        if (vp >= Sp) return Yp.slice(Sp - wp, (Sp += ip) - wp);
        if (0 == vp && Ip < 140) {
          let pp = ip < 16 ? rp(ip) : Gp(ip);
          if (null != pp) return pp
        }
        return Np(ip)
      } {
        let ip;
        switch (pp) {
          case 192:
            return null;
          case 193:
            return Dp ? (ip = Xp(), ip > 0 ? Dp[1].slice(Dp.position1, Dp.position1 += ip) : Dp[0].slice(Dp.position0, Dp.position0 -= ip)) : ep;
          case 194:
            return !1;
          case 195:
            return !0;
          case 196:
            if (ip = op[Sp++], void 0 === ip) throw new Error("Unexpected end of buffer");
            return zp(ip);
          case 197:
            return ip = Pp.getUint16(Sp), Sp += 2, zp(ip);
          case 198:
            return ip = Pp.getUint32(Sp), Sp += 4, zp(ip);
          case 199:
            return sp(op[Sp++]);
          case 200:
            return ip = Pp.getUint16(Sp), Sp += 2, sp(ip);
          case 201:
            return ip = Pp.getUint32(Sp), Sp += 4, sp(ip);
          case 202:
            if (ip = Pp.getFloat32(Sp), Up.useFloat32 > 2) {
              let pp = Yi[(127 & op[Sp]) << 1 | op[Sp + 1] >> 7];
              return Sp += 4, (pp * ip + (ip > 0 ? .5 : -.5) | 0) / pp
            }
            return Sp += 4, ip;
          case 203:
            return ip = Pp.getFloat64(Sp), Sp += 8, ip;
          case 204:
            return op[Sp++];
          case 205:
            return ip = Pp.getUint16(Sp), Sp += 2, ip;
          case 206:
            return ip = Pp.getUint32(Sp), Sp += 4, ip;
          case 207:
            return "number" === Up.int64AsType ? (ip = 4294967296 * Pp.getUint32(Sp), ip += Pp.getUint32(Sp + 4)) : "string" === Up.int64AsType ? ip = Pp.getBigUint64(Sp).toString() : "auto" === Up.int64AsType ? (ip = Pp.getBigUint64(Sp), ip <= BigInt(2) << BigInt(52) && (ip = Number(ip))) : ip = Pp.getBigUint64(Sp), Sp += 8, ip;
          case 208:
            return Pp.getInt8(Sp++);
          case 209:
            return ip = Pp.getInt16(Sp), Sp += 2, ip;
          case 210:
            return ip = Pp.getInt32(Sp), Sp += 4, ip;
          case 211:
            return "number" === Up.int64AsType ? (ip = 4294967296 * Pp.getInt32(Sp), ip += Pp.getUint32(Sp + 4)) : "string" === Up.int64AsType ? ip = Pp.getBigInt64(Sp).toString() : "auto" === Up.int64AsType ? (ip = Pp.getBigInt64(Sp), ip >= BigInt(-2) << BigInt(52) && ip <= BigInt(2) << BigInt(52) && (ip = Number(ip))) : ip = Pp.getBigInt64(Sp), Sp += 8, ip;
          case 212:
            if (ip = op[Sp++], 114 == ip) return ci(63 & op[Sp++]);
            {
              let pp = tp[ip];
              if (pp) return pp.read ? (Sp++, pp.read(Xp())) : pp.noBuffer ? (Sp++, pp()) : pp(op.subarray(Sp, ++Sp));
              throw new Error("Unknown extension " + ip)
            }
          case 213:
            return ip = op[Sp], 114 == ip ? (Sp++, ci(63 & op[Sp++], op[Sp++])) : sp(2);
          case 214:
            return sp(4);
          case 215:
            return sp(8);
          case 216:
            return sp(16);
          case 217:
            return ip = op[Sp++], vp >= Sp ? Yp.slice(Sp - wp, (Sp += ip) - wp) : Tp(ip);
          case 218:
            return ip = Pp.getUint16(Sp), vp >= (Sp += 2) ? Yp.slice(Sp - wp, (Sp += ip) - wp) : fp(ip);
          case 219:
            return ip = Pp.getUint32(Sp), vp >= (Sp += 4) ? Yp.slice(Sp - wp, (Sp += ip) - wp) : bp(ip);
          case 220:
            return ip = Pp.getUint16(Sp), Sp += 2, np(ip);
          case 221:
            return ip = Pp.getUint32(Sp), Sp += 4, np(ip);
          case 222:
            return ip = Pp.getUint16(Sp), Sp += 2, Fp(ip);
          case 223:
            return ip = Pp.getUint32(Sp), Sp += 4, Fp(ip);
          default:
            if (pp >= 224) return pp - 256;
            if (void 0 === pp) {
              let pp = new Error("Unexpected end of MessagePack data");
              throw pp.incomplete = !0, pp
            }
            throw new Error("Unknown MessagePack token " + pp)
        }
      }
    }
    const lp = /^[a-zA-Z_$][a-zA-Z\d_$]*$/;

    function Qp(pp, ip) {
      function cp() {
        if (cp.count++ > qp) {
          let cp = pp.read = new Function("r", "return function(){return " + (Up.freezeData ? "Object.freeze" : "") + "({" + pp.map((pp => "__proto__" === pp ? "__proto_:r()" : lp.test(pp) ? pp + ":r()" : "[" + JSON.stringify(pp) + "]:r()")).join(",") + "})}")(Xp);
          return 0 === pp.highByte && (pp.read = Jp(ip, pp.read)), cp()
        }
        let Op = {};
        for (let ip = 0, cp = pp.length; ip < cp; ip++) {
          let cp = pp[ip];
          "__proto__" === cp && (cp = "__proto_"), Op[cp] = Xp()
        }
        return Up.freezeData ? Object.freeze(Op) : Op
      }
      return cp.count = 0, 0 === pp.highByte ? Jp(ip, cp) : cp
    }
    const Jp = (pp, ip) => function() {
      let cp = op[Sp++];
      if (0 === cp) return ip();
      let Op = pp < 32 ? -(pp + (cp << 5)) : pp + (cp << 5),
        Ip = Lp[Op] || Bp()[Op];
      if (!Ip) throw new Error("Record id is not defined for " + Op);
      return Ip.read || (Ip.read = Qp(Ip, pp)), Ip.read()
    };

    function Bp() {
      let pp = xi((() => (op = null, Up.getStructures())));
      return Lp = Up._mergeStructures(pp, Lp)
    }
    var Np = ap,
      Tp = ap,
      fp = ap,
      bp = ap;
    let hp = !1;

    function ap(pp) {
      let ip;
      if (pp < 16 && (ip = rp(pp))) return ip;
      if (pp > 64 && Op) return Op.decode(op.subarray(Sp, Sp += pp));
      const cp = Sp + pp,
        Ip = [];
      for (ip = ""; Sp < cp;) {
        const pp = op[Sp++];
        if (0 === (128 & pp)) Ip.push(pp);
        else if (192 === (224 & pp)) {
          const ip = 63 & op[Sp++];
          Ip.push((31 & pp) << 6 | ip)
        } else if (224 === (240 & pp)) {
          const ip = 63 & op[Sp++],
            cp = 63 & op[Sp++];
          Ip.push((31 & pp) << 12 | ip << 6 | cp)
        } else if (240 === (248 & pp)) {
          let ip = (7 & pp) << 18 | (63 & op[Sp++]) << 12 | (63 & op[Sp++]) << 6 | 63 & op[Sp++];
          ip > 65535 && (ip -= 65536, Ip.push(ip >>> 10 & 1023 | 55296), ip = 56320 | 1023 & ip), Ip.push(ip)
        } else Ip.push(pp);
        Ip.length >= 4096 && (ip += gp.apply(String, Ip), Ip.length = 0)
      }
      return Ip.length > 0 && (ip += gp.apply(String, Ip)), ip
    }

    function np(pp) {
      let ip = new Array(pp);
      for (let cp = 0; cp < pp; cp++) ip[cp] = Xp();
      return Up.freezeData ? Object.freeze(ip) : ip
    }

    function Fp(pp) {
      if (Up.mapsAsObjects) {
        let ip = {};
        for (let cp = 0; cp < pp; cp++) {
          let pp = Vp();
          "__proto__" === pp && (pp = "__proto_"), ip[pp] = Xp()
        }
        return ip
      } {
        let ip = new Map;
        for (let cp = 0; cp < pp; cp++) ip.set(Xp(), Xp());
        return ip
      }
    }
    var gp = String.fromCharCode;

    function Gp(pp) {
      let ip = Sp,
        cp = new Array(pp);
      for (let Op = 0; Op < pp; Op++) {
        const pp = op[Sp++];
        if ((128 & pp) > 0) return void(Sp = ip);
        cp[Op] = pp
      }
      return gp.apply(String, cp)
    }

    function rp(pp) {
      if (pp < 4) {
        if (pp < 2) {
          if (0 === pp) return "";
          {
            let pp = op[Sp++];
            return (128 & pp) > 1 ? void(Sp -= 1) : gp(pp)
          }
        } {
          let ip = op[Sp++],
            cp = op[Sp++];
          if ((128 & ip) > 0 || (128 & cp) > 0) return void(Sp -= 2);
          if (pp < 3) return gp(ip, cp);
          let Op = op[Sp++];
          return (128 & Op) > 0 ? void(Sp -= 3) : gp(ip, cp, Op)
        }
      } {
        let ip = op[Sp++],
          cp = op[Sp++],
          Op = op[Sp++],
          Ip = op[Sp++];
        if ((128 & ip) > 0 || (128 & cp) > 0 || (128 & Op) > 0 || (128 & Ip) > 0) return void(Sp -= 4);
        if (pp < 6) {
          if (4 === pp) return gp(ip, cp, Op, Ip);
          {
            let pp = op[Sp++];
            return (128 & pp) > 0 ? void(Sp -= 5) : gp(ip, cp, Op, Ip, pp)
          }
        }
        if (pp < 8) {
          let xp = op[Sp++],
            Lp = op[Sp++];
          if ((128 & xp) > 0 || (128 & Lp) > 0) return void(Sp -= 6);
          if (pp < 7) return gp(ip, cp, Op, Ip, xp, Lp);
          let Yp = op[Sp++];
          return (128 & Yp) > 0 ? void(Sp -= 7) : gp(ip, cp, Op, Ip, xp, Lp, Yp)
        } {
          let xp = op[Sp++],
            Lp = op[Sp++],
            Yp = op[Sp++],
            Dp = op[Sp++];
          if ((128 & xp) > 0 || (128 & Lp) > 0 || (128 & Yp) > 0 || (128 & Dp) > 0) return void(Sp -= 8);
          if (pp < 10) {
            if (8 === pp) return gp(ip, cp, Op, Ip, xp, Lp, Yp, Dp);
            {
              let pp = op[Sp++];
              return (128 & pp) > 0 ? void(Sp -= 9) : gp(ip, cp, Op, Ip, xp, Lp, Yp, Dp, pp)
            }
          }
          if (pp < 12) {
            let Ap = op[Sp++],
              Pp = op[Sp++];
            if ((128 & Ap) > 0 || (128 & Pp) > 0) return void(Sp -= 10);
            if (pp < 11) return gp(ip, cp, Op, Ip, xp, Lp, Yp, Dp, Ap, Pp);
            let Wp = op[Sp++];
            return (128 & Wp) > 0 ? void(Sp -= 11) : gp(ip, cp, Op, Ip, xp, Lp, Yp, Dp, Ap, Pp, Wp)
          } {
            let Ap = op[Sp++],
              Pp = op[Sp++],
              Wp = op[Sp++],
              yp = op[Sp++];
            if ((128 & Ap) > 0 || (128 & Pp) > 0 || (128 & Wp) > 0 || (128 & yp) > 0) return void(Sp -= 12);
            if (pp < 14) {
              if (12 === pp) return gp(ip, cp, Op, Ip, xp, Lp, Yp, Dp, Ap, Pp, Wp, yp);
              {
                let pp = op[Sp++];
                return (128 & pp) > 0 ? void(Sp -= 13) : gp(ip, cp, Op, Ip, xp, Lp, Yp, Dp, Ap, Pp, Wp, yp, pp)
              }
            } {
              let Up = op[Sp++],
                wp = op[Sp++];
              if ((128 & Up) > 0 || (128 & wp) > 0) return void(Sp -= 14);
              if (pp < 15) return gp(ip, cp, Op, Ip, xp, Lp, Yp, Dp, Ap, Pp, Wp, yp, Up, wp);
              let vp = op[Sp++];
              return (128 & vp) > 0 ? void(Sp -= 15) : gp(ip, cp, Op, Ip, xp, Lp, Yp, Dp, Ap, Pp, Wp, yp, Up, wp, vp)
            }
          }
        }
      }
    }

    function Zp() {
      let pp, ip = op[Sp++];
      if (ip < 192) pp = ip - 160;
      else switch (ip) {
        case 217:
          pp = op[Sp++];
          break;
        case 218:
          pp = Pp.getUint16(Sp), Sp += 2;
          break;
        case 219:
          pp = Pp.getUint32(Sp), Sp += 4;
          break;
        default:
          throw new Error("Expected string")
      }
      return ap(pp)
    }

    function zp(pp) {
      return Up.copyBuffers ? Uint8Array.prototype.slice.call(op, Sp, Sp += pp) : op.subarray(Sp, Sp += pp)
    }

    function sp(pp) {
      let ip = op[Sp++];
      if (tp[ip]) {
        let cp;
        return tp[ip](op.subarray(Sp, cp = Sp += pp), (pp => {
          Sp = pp;
          try {
            return Xp()
          } finally {
            Sp = cp
          }
        }))
      }
      throw new Error("Unknown extension type " + ip)
    }
    var Kp = new Array(4096);

    function Vp() {
      let pp = op[Sp++];
      if (!(pp >= 160 && pp < 192)) return Sp--, ii(Xp());
      if (pp -= 160, vp >= Sp) return Yp.slice(Sp - wp, (Sp += pp) - wp);
      if (!(0 == vp && Ip < 180)) return Np(pp);
      let ip, cp = 4095 & (pp << 5 ^ (pp > 1 ? Pp.getUint16(Sp) : pp > 0 ? op[Sp] : 0)),
        Op = Kp[cp],
        xp = Sp,
        Lp = Sp + pp - 3,
        Dp = 0;
      if (Op && Op.bytes == pp) {
        for (; xp < Lp;) {
          if (ip = Pp.getUint32(xp), ip != Op[Dp++]) {
            xp = 1879048192;
            break
          }
          xp += 4
        }
        for (Lp += 3; xp < Lp;)
          if (ip = op[xp++], ip != Op[Dp++]) {
            xp = 1879048192;
            break
          } if (xp === Lp) return Sp = xp, Op.string;
        Lp -= 3, xp = Sp
      }
      for (Op = [], Kp[cp] = Op, Op.bytes = pp; xp < Lp;) ip = Pp.getUint32(xp), Op.push(ip), xp += 4;
      for (Lp += 3; xp < Lp;) ip = op[xp++], Op.push(ip);
      let Ap = pp < 16 ? rp(pp) : Gp(pp);
      return Op.string = null != Ap ? Ap : Np(pp)
    }

    function ii(pp) {
      if ("string" === typeof pp) return pp;
      if ("number" === typeof pp || "boolean" === typeof pp || "bigint" === typeof pp) return pp.toString();
      if (null == pp) return pp + "";
      if (Up.allowArraysInMapKeys && Array.isArray(pp) && pp.flat().every((pp => ["string", "number", "boolean", "bigint"].includes(typeof pp)))) return pp.flat().toString();
      throw new Error("Invalid property type for record: " + typeof pp)
    }
    const ci = (pp, ip) => {
      let cp = Xp().map(ii),
        Op = pp;
      void 0 !== ip && (pp = pp < 32 ? -((ip << 5) + pp) : (ip << 5) + pp, cp.highByte = ip);
      let op = Lp[pp];
      return op && (op.isShared || Rp) && ((Lp.restoreStructures || (Lp.restoreStructures = []))[pp] = op), Lp[pp] = cp, cp.read = Qp(cp, Op), cp.read()
    };
    tp[0] = () => {}, tp[0].noBuffer = !0, tp[66] = pp => {
      let ip = pp.length,
        cp = BigInt(128 & pp[0] ? pp[0] - 256 : pp[0]);
      for (let Op = 1; Op < ip; Op++) cp <<= BigInt(8), cp += BigInt(pp[Op]);
      return cp
    };
    let Oi = {
      Error: Error,
      TypeError: TypeError,
      ReferenceError: ReferenceError
    };
    tp[101] = () => {
      let pp = Xp();
      return (Oi[pp[0]] || Error)(pp[1], {
        cause: pp[2]
      })
    }, tp[105] = pp => {
      if (!1 === Up.structuredClone) throw new Error("Structured clone extension is disabled");
      let ip = Pp.getUint32(Sp - 4);
      Ap || (Ap = new Map);
      let cp, Op = op[Sp];
      cp = Op >= 144 && Op < 160 || 220 == Op || 221 == Op ? [] : {};
      let Ip = {
        target: cp
      };
      Ap.set(ip, Ip);
      let xp = Xp();
      return Ip.used ? Object.assign(cp, xp) : (Ip.target = xp, xp)
    }, tp[112] = pp => {
      if (!1 === Up.structuredClone) throw new Error("Structured clone extension is disabled");
      let ip = Pp.getUint32(Sp - 4),
        cp = Ap.get(ip);
      return cp.used = !0, cp.target
    }, tp[115] = () => new Set(Xp());
    const oi = ["Int8", "Uint8", "Uint8Clamped", "Int16", "Uint16", "Int32", "Uint32", "Float32", "Float64", "BigInt64", "BigUint64"].map((pp => pp + "Array"));
    let Ii = "object" === typeof globalThis ? globalThis : window;
    tp[116] = pp => {
      let ip = pp[0],
        cp = oi[ip];
      if (!cp) {
        if (16 === ip) {
          let ip = new ArrayBuffer(pp.length - 1);
          return new Uint8Array(ip).set(pp.subarray(1)), ip
        }
        throw new Error("Could not find typed array for code " + ip)
      }
      return new Ii[cp](Uint8Array.prototype.slice.call(pp, 1).buffer)
    }, tp[120] = () => {
      let pp = Xp();
      return new RegExp(pp[0], pp[1])
    };
    const Si = [];

    function xi(pp) {
      mp && mp();
      let ip = Ip,
        cp = Sp,
        Op = yp,
        xp = wp,
        tp = vp,
        Hp = Yp,
        dp = Wp,
        ep = Ap,
        jp = Dp,
        kp = new Uint8Array(op.slice(0, Ip)),
        qp = Lp,
        Mp = Lp.slice(0, Lp.length),
        Cp = Up,
        Ep = Rp,
        Xp = pp();
      return Ip = ip, Sp = cp, yp = Op, wp = xp, vp = tp, Yp = Hp, Wp = dp, Ap = ep, Dp = jp, op = kp, Rp = Ep, (Lp = qp).splice(0, Lp.length, ...Mp), Up = Cp, Pp = new DataView(op.buffer, op.byteOffset, op.byteLength), Xp
    }

    function Li() {
      op = null, Ap = null, Lp = null
    }
    tp[98] = pp => {
      let ip = (pp[0] << 24) + (pp[1] << 16) + (pp[2] << 8) + pp[3],
        cp = Sp;
      return Sp += ip - pp.length, Dp = Si, (Dp = [Zp(), Zp()]).position0 = 0, Dp.position1 = 0, Dp.postBundlePosition = Sp, Sp = cp, Xp()
    }, tp[255] = pp => 4 == pp.length ? new Date(1e3 * (16777216 * pp[0] + (pp[1] << 16) + (pp[2] << 8) + pp[3])) : 8 == pp.length ? new Date(((pp[0] << 22) + (pp[1] << 14) + (pp[2] << 6) + (pp[3] >> 2)) / 1e6 + 1e3 * (4294967296 * (3 & pp[3]) + 16777216 * pp[4] + (pp[5] << 16) + (pp[6] << 8) + pp[7])) : 12 == pp.length ? new Date(((pp[0] << 24) + (pp[1] << 16) + (pp[2] << 8) + pp[3]) / 1e6 + 1e3 * ((128 & pp[4] ? -281474976710656 : 0) + 1099511627776 * pp[6] + 4294967296 * pp[7] + 16777216 * pp[8] + (pp[9] << 16) + (pp[10] << 8) + pp[11])) : new Date("invalid");
    const Yi = new Array(147);
    for (let xc = 0; xc < 256; xc++) Yi[xc] = +("1e" + Math.floor(45.15 - .30103 * xc));
    const Di = Mp;
    var Ai = new Mp({
      useRecords: !1
    });
    const Pi = Ai.unpack,
      Wi = Ai.unpackMultiple,
      yi = Ai.unpack,
      Ui = {
        NEVER: 0,
        ALWAYS: 1,
        DECIMAL_ROUND: 3,
        DECIMAL_FIT: 4
      };
    let wi, vi, ti, Hi = new Float32Array(1),
      di = new Uint8Array(Hi.buffer, 0, 4);

    function ei(pp) {
      Hi[0] = pp;
      let ip = Yi[(127 & di[3]) << 1 | di[2] >> 7];
      return (ip * pp + (pp > 0 ? .5 : -.5) | 0) / ip
    }
    try {
      wi = new TextEncoder
    } catch (Sc) {}
    const ui = "undefined" !== typeof Buffer,
      ji = ui ? function(pp) {
        return Buffer.allocUnsafeSlow(pp)
      } : Uint8Array,
      ki = ui ? Buffer : Uint8Array,
      mi = ui ? 4294967296 : 2144337920;
    let Ri, qi, Mi, Ci, Ei, Xi = 0,
      li = null;
    const Qi = /[\u0080-\uFFFF]/,
      Ji = Symbol("record-id");
    class Bi extends Mp {
      constructor(pp) {
        let ip, cp, Op, op;
        super(pp), this.offset = 0;
        let Ip = ki.prototype.utf8Write ? function(pp, ip) {
            return Ri.utf8Write(pp, ip, Ri.byteLength - ip)
          } : !(!wi || !wi.encodeInto) && function(pp, ip) {
            return wi.encodeInto(pp, Ri.subarray(ip)).written
          },
          Sp = this;
        pp || (pp = {});
        let xp = pp && pp.sequential,
          Lp = pp.structures || pp.saveStructures,
          Yp = pp.maxSharedStructures;
        if (null == Yp && (Yp = Lp ? 32 : 0), Yp > 8160) throw new Error("Maximum maxSharedStructure is 8160");
        pp.structuredClone && void 0 == pp.moreTypes && (this.moreTypes = !0);
        let Dp = pp.maxOwnStructures;
        null == Dp && (Dp = Lp ? 32 : 64), this.structures || 0 == pp.useRecords || (this.structures = []);
        let Ap = Yp > 32 || Dp + Yp > 64,
          Pp = Yp + 64,
          Wp = Yp + Dp + 64;
        if (Wp > 8256) throw new Error("Maximum maxSharedStructure + maxOwnStructure is 8192");
        let yp = [],
          Up = 0,
          wp = 0;
        this.pack = this.encode = function(pp, Ip) {
          if (Ri || (Ri = new ji(8192), Mi = Ri.dataView || (Ri.dataView = new DataView(Ri.buffer, 0, 8192)), Xi = 0), Ci = Ri.length - 10, Ci - Xi < 2048 ? (Ri = new ji(Ri.length), Mi = Ri.dataView || (Ri.dataView = new DataView(Ri.buffer, 0, Ri.length)), Ci = Ri.length - 10, Xi = 0) : Xi = Xi + 7 & 2147483640, ip = Xi, Ip & ic && (Xi += 255 & Ip), op = Sp.structuredClone ? new Map : null, Sp.bundleStrings && "string" !== typeof pp ? (li = [], li.size = 1 / 0) : li = null, Op = Sp.structures, Op) {
            Op.uninitialized && (Op = Sp._mergeStructures(Sp.getStructures()));
            let pp = Op.sharedLength || 0;
            if (pp > Yp) throw new Error("Shared structures is larger than maximum shared structures, try increasing maxSharedStructures to " + Op.sharedLength);
            if (!Op.transitions) {
              Op.transitions = Object.create(null);
              for (let ip = 0; ip < pp; ip++) {
                let pp = Op[ip];
                if (!pp) continue;
                let cp, op = Op.transitions;
                for (let ip = 0, Op = pp.length; ip < Op; ip++) {
                  let Op = pp[ip];
                  cp = op[Op], cp || (cp = op[Op] = Object.create(null)), op = cp
                }
                op[Ji] = ip + 64
              }
              this.lastNamedStructuresLength = pp
            }
            xp || (Op.nextId = pp + 64)
          }
          let Lp;
          cp && (cp = !1);
          try {
            Sp.randomAccessStructure && pp && pp.constructor && pp.constructor === Object ? Mp(pp) : Hp(pp);
            let cp = li;
            if (li && bi(ip, Hp, 0), op && op.idsToInsert) {
              let pp = op.idsToInsert.sort(((pp, ip) => pp.offset > ip.offset ? 1 : -1)),
                Op = pp.length,
                Ip = -1;
              for (; cp && Op > 0;) {
                let op = pp[--Op].offset + ip;
                op < cp.stringsPosition + ip && -1 === Ip && (Ip = 0), op > cp.position + ip ? Ip >= 0 && (Ip += 6) : (Ip >= 0 && (Mi.setUint32(cp.position + ip, Mi.getUint32(cp.position + ip) + Ip), Ip = -1), cp = cp.previous, Op++)
              }
              Ip >= 0 && cp && Mi.setUint32(cp.position + ip, Mi.getUint32(cp.position + ip) + Ip), Xi += 6 * pp.length, Xi > Ci && mp(Xi), Sp.offset = Xi;
              let xp = function(pp, ip) {
                let cp, Op = 6 * ip.length,
                  op = pp.length - Op;
                for (; cp = ip.pop();) {
                  let ip = cp.offset,
                    Ip = cp.id;
                  pp.copyWithin(ip + Op, ip, op), Op -= 6;
                  let Sp = ip + Op;
                  pp[Sp++] = 214, pp[Sp++] = 105, pp[Sp++] = Ip >> 24, pp[Sp++] = Ip >> 16 & 255, pp[Sp++] = Ip >> 8 & 255, pp[Sp++] = 255 & Ip, op = ip
                }
                return pp
              }(Ri.subarray(ip, Xi), pp);
              return op = null, xp
            }
            return Sp.offset = Xi, Ip & Vi ? (Ri.start = ip, Ri.end = Xi, Ri) : Ri.subarray(ip, Xi)
          } catch (Sc) {
            throw Lp = Sc, Sc
          } finally {
            if (Op && (vp(), cp && Sp.saveStructures)) {
              let cp = Op.sharedLength || 0,
                op = Ri.subarray(ip, Xi),
                xp = ni(Op, Sp);
              if (!Lp) return !1 === Sp.saveStructures(xp, xp.isCompatible) ? Sp.pack(pp, Ip) : (Sp.lastNamedStructuresLength = cp, Ri.length > 1073741824 && (Ri = null), op)
            }
            Ri.length > 1073741824 && (Ri = null), Ip & pc && (Xi = ip)
          }
        };
        const vp = () => {
            wp < 10 && wp++;
            let pp = Op.sharedLength || 0;
            if (Op.length > pp && !xp && (Op.length = pp), Up > 1e4) Op.transitions = null, wp = 0, Up = 0, yp.length > 0 && (yp = []);
            else if (yp.length > 0 && !xp) {
              for (let pp = 0, ip = yp.length; pp < ip; pp++) yp[pp][Ji] = 0;
              yp = []
            }
          },
          tp = pp => {
            var ip = pp.length;
            ip < 16 ? Ri[Xi++] = 144 | ip : ip < 65536 ? (Ri[Xi++] = 220, Ri[Xi++] = ip >> 8, Ri[Xi++] = 255 & ip) : (Ri[Xi++] = 221, Mi.setUint32(Xi, ip), Xi += 4);
            for (let cp = 0; cp < ip; cp++) Hp(pp[cp])
          },
          Hp = pp => {
            Xi > Ci && (Ri = mp(Xi));
            var cp, Op = typeof pp;
            if ("string" === Op) {
              let Op, op = pp.length;
              if (li && op >= 4 && op < 4096) {
                if ((li.size += op) > 21760) {
                  let pp, cp, Op = (li[0] ? 3 * li[0].length + li[1].length : 0) + 10;
                  Xi + Op > Ci && (Ri = mp(Xi + Op)), li.position ? (cp = li, Ri[Xi] = 200, Xi += 3, Ri[Xi++] = 98, pp = Xi - ip, Xi += 4, bi(ip, Hp, 0), Mi.setUint16(pp + ip - 3, Xi - ip - pp)) : (Ri[Xi++] = 214, Ri[Xi++] = 98, pp = Xi - ip, Xi += 4), li = ["", ""], li.previous = cp, li.size = 0, li.position = pp
                }
                let cp = Qi.test(pp);
                return li[cp ? 0 : 1] += pp, Ri[Xi++] = 193, void Hp(cp ? -op : op)
              }
              Op = op < 32 ? 1 : op < 256 ? 2 : op < 65536 ? 3 : 5;
              let Sp = 3 * op;
              if (Xi + Sp > Ci && (Ri = mp(Xi + Sp)), op < 64 || !Ip) {
                let ip, Ip, Sp, xp = Xi + Op;
                for (ip = 0; ip < op; ip++) Ip = pp.charCodeAt(ip), Ip < 128 ? Ri[xp++] = Ip : Ip < 2048 ? (Ri[xp++] = Ip >> 6 | 192, Ri[xp++] = 63 & Ip | 128) : 55296 === (64512 & Ip) && 56320 === (64512 & (Sp = pp.charCodeAt(ip + 1))) ? (Ip = 65536 + ((1023 & Ip) << 10) + (1023 & Sp), ip++, Ri[xp++] = Ip >> 18 | 240, Ri[xp++] = Ip >> 12 & 63 | 128, Ri[xp++] = Ip >> 6 & 63 | 128, Ri[xp++] = 63 & Ip | 128) : (Ri[xp++] = Ip >> 12 | 224, Ri[xp++] = Ip >> 6 & 63 | 128, Ri[xp++] = 63 & Ip | 128);
                cp = xp - Xi - Op
              } else cp = Ip(pp, Xi + Op);
              cp < 32 ? Ri[Xi++] = 160 | cp : cp < 256 ? (Op < 2 && Ri.copyWithin(Xi + 2, Xi + 1, Xi + 1 + cp), Ri[Xi++] = 217, Ri[Xi++] = cp) : cp < 65536 ? (Op < 3 && Ri.copyWithin(Xi + 3, Xi + 2, Xi + 2 + cp), Ri[Xi++] = 218, Ri[Xi++] = cp >> 8, Ri[Xi++] = 255 & cp) : (Op < 5 && Ri.copyWithin(Xi + 5, Xi + 3, Xi + 3 + cp), Ri[Xi++] = 219, Mi.setUint32(Xi, cp), Xi += 4), Xi += cp
            } else if ("number" === Op)
              if (pp >>> 0 === pp) pp < 32 || pp < 128 && !1 === this.useRecords || pp < 64 && !this.randomAccessStructure ? Ri[Xi++] = pp : pp < 256 ? (Ri[Xi++] = 204, Ri[Xi++] = pp) : pp < 65536 ? (Ri[Xi++] = 205, Ri[Xi++] = pp >> 8, Ri[Xi++] = 255 & pp) : (Ri[Xi++] = 206, Mi.setUint32(Xi, pp), Xi += 4);
              else if ((pp | 0) === pp) pp >= -32 ? Ri[Xi++] = 256 + pp : pp >= -128 ? (Ri[Xi++] = 208, Ri[Xi++] = pp + 256) : pp >= -32768 ? (Ri[Xi++] = 209, Mi.setInt16(Xi, pp), Xi += 2) : (Ri[Xi++] = 210, Mi.setInt32(Xi, pp), Xi += 4);
            else {
              let ip;
              if ((ip = this.useFloat32) > 0 && pp < 4294967296 && pp >= -2147483648) {
                let cp;
                if (Ri[Xi++] = 202, Mi.setFloat32(Xi, pp), ip < 4 || ((cp = pp * Yi[(127 & Ri[Xi]) << 1 | Ri[Xi + 1] >> 7]) | 0) === cp) return void(Xi += 4);
                Xi--
              }
              Ri[Xi++] = 203, Mi.setFloat64(Xi, pp), Xi += 8
            } else if ("object" === Op || "function" === Op)
              if (pp) {
                if (op) {
                  let cp = op.get(pp);
                  if (cp) {
                    if (!cp.id) {
                      let pp = op.idsToInsert || (op.idsToInsert = []);
                      cp.id = pp.push(cp)
                    }
                    return Ri[Xi++] = 214, Ri[Xi++] = 112, Mi.setUint32(Xi, cp.id), void(Xi += 4)
                  }
                  op.set(pp, {
                    offset: Xi - ip
                  })
                }
                let Ip = pp.constructor;
                if (Ip === Object) kp(pp);
                else if (Ip === Array) tp(pp);
                else if (Ip === Map)
                  if (this.mapAsEmptyObject) Ri[Xi++] = 128;
                  else {
                    (cp = pp.size) < 16 ? Ri[Xi++] = 128 | cp : cp < 65536 ? (Ri[Xi++] = 222, Ri[Xi++] = cp >> 8, Ri[Xi++] = 255 & cp) : (Ri[Xi++] = 223, Mi.setUint32(Xi, cp), Xi += 4);
                    for (let [ip, cp] of pp) Hp(ip), Hp(cp)
                  }
                else {
                  for (let ip = 0, cp = vi.length; ip < cp; ip++) {
                    if (pp instanceof ti[ip]) {
                      let cp = vi[ip];
                      if (cp.write) {
                        cp.type && (Ri[Xi++] = 212, Ri[Xi++] = cp.type, Ri[Xi++] = 0);
                        let ip = cp.write.call(this, pp);
                        return void(ip === pp ? Array.isArray(pp) ? tp(pp) : kp(pp) : Hp(ip))
                      }
                      let Op, op = Ri,
                        Ip = Mi,
                        Sp = Xi;
                      Ri = null;
                      try {
                        Op = cp.pack.call(this, pp, (pp => (Ri = op, op = null, Xi += pp, Xi > Ci && mp(Xi), {
                          target: Ri,
                          targetView: Mi,
                          position: Xi - pp
                        })), Hp)
                      } finally {
                        op && (Ri = op, Mi = Ip, Xi = Sp, Ci = Ri.length - 10)
                      }
                      return void(Op && (Op.length + Xi > Ci && mp(Op.length + Xi), Xi = fi(Op, Ri, Xi, cp.type)))
                    }
                  }
                  if (Array.isArray(pp)) tp(pp);
                  else {
                    if (pp.toJSON) {
                      const ip = pp.toJSON();
                      if (ip !== pp) return Hp(ip)
                    }
                    if ("function" === Op) return Hp(this.writeFunction && this.writeFunction(pp));
                    kp(pp)
                  }
                }
              } else Ri[Xi++] = 192;
            else if ("boolean" === Op) Ri[Xi++] = pp ? 195 : 194;
            else if ("bigint" === Op) {
              if (pp < BigInt(1) << BigInt(63) && pp >= -(BigInt(1) << BigInt(63))) Ri[Xi++] = 211, Mi.setBigInt64(Xi, pp);
              else if (pp < BigInt(1) << BigInt(64) && pp > 0) Ri[Xi++] = 207, Mi.setBigUint64(Xi, pp);
              else {
                if (!this.largeBigIntToFloat) {
                  if (this.largeBigIntToString) return Hp(pp.toString());
                  if (this.useBigIntExtension && pp < BigInt(2) ** BigInt(1023) && pp > -(BigInt(2) ** BigInt(1023))) {
                    Ri[Xi++] = 199, Xi++, Ri[Xi++] = 66;
                    let ip, cp = [];
                    do {
                      let Op = pp & BigInt(255);
                      ip = (Op & BigInt(128)) === (pp < BigInt(0) ? BigInt(128) : BigInt(0)), cp.push(Op), pp >>= BigInt(8)
                    } while (pp !== BigInt(0) && pp !== BigInt(-1) || !ip);
                    Ri[Xi - 2] = cp.length;
                    for (let pp = cp.length; pp > 0;) Ri[Xi++] = Number(cp[--pp]);
                    return
                  }
                  throw new RangeError(pp + " was too large to fit in MessagePack 64-bit integer format, use useBigIntExtension, or set largeBigIntToFloat to convert to float-64, or set largeBigIntToString to convert to string")
                }
                Ri[Xi++] = 203, Mi.setFloat64(Xi, Number(pp))
              }
              Xi += 8
            } else {
              if ("undefined" !== Op) throw new Error("Unknown type: " + Op);
              this.encodeUndefinedAsNil ? Ri[Xi++] = 192 : (Ri[Xi++] = 212, Ri[Xi++] = 0, Ri[Xi++] = 0)
            }
          },
          dp = this.variableMapSize || this.coercibleKeyAsNumber || this.skipValues ? pp => {
            let ip;
            if (this.skipValues) {
              ip = [];
              for (let cp in pp) "function" === typeof pp.hasOwnProperty && !pp.hasOwnProperty(cp) || this.skipValues.includes(pp[cp]) || ip.push(cp)
            } else ip = Object.keys(pp);
            let cp, Op = ip.length;
            if (Op < 16 ? Ri[Xi++] = 128 | Op : Op < 65536 ? (Ri[Xi++] = 222, Ri[Xi++] = Op >> 8, Ri[Xi++] = 255 & Op) : (Ri[Xi++] = 223, Mi.setUint32(Xi, Op), Xi += 4), this.coercibleKeyAsNumber)
              for (let op = 0; op < Op; op++) {
                cp = ip[op];
                let Op = Number(cp);
                Hp(isNaN(Op) ? cp : Op), Hp(pp[cp])
              } else
                for (let op = 0; op < Op; op++) Hp(cp = ip[op]), Hp(pp[cp])
          } : pp => {
            Ri[Xi++] = 222;
            let cp = Xi - ip;
            Xi += 2;
            let Op = 0;
            for (let ip in pp)("function" !== typeof pp.hasOwnProperty || pp.hasOwnProperty(ip)) && (Hp(ip), Hp(pp[ip]), Op++);
            if (Op > 65535) throw new Error('Object is too large to serialize with fast 16-bit map size, use the "variableMapSize" option to serialize this object');
            Ri[cp++ + ip] = Op >> 8, Ri[cp + ip] = 255 & Op
          },
          ep = !1 === this.useRecords ? dp : pp.progressiveRecords && !Ap ? pp => {
            let cp, op, Ip = Op.transitions || (Op.transitions = Object.create(null)),
              Sp = Xi++ - ip;
            for (let xp in pp)
              if ("function" !== typeof pp.hasOwnProperty || pp.hasOwnProperty(xp)) {
                if (cp = Ip[xp], cp) Ip = cp;
                else {
                  let Lp = Object.keys(pp),
                    Yp = Ip;
                  Ip = Op.transitions;
                  let Dp = 0;
                  for (let pp = 0, ip = Lp.length; pp < ip; pp++) {
                    let ip = Lp[pp];
                    cp = Ip[ip], cp || (cp = Ip[ip] = Object.create(null), Dp++), Ip = cp
                  }
                  Sp + ip + 1 == Xi ? (Xi--, Rp(Ip, Lp, Dp)) : qp(Ip, Lp, Sp, Dp), op = !0, Ip = Yp[xp]
                }
                Hp(pp[xp])
              } if (!op) {
              let cp = Ip[Ji];
              cp ? Ri[Sp + ip] = cp : qp(Ip, Object.keys(pp), Sp, 0)
            }
          } : pp => {
            let ip, cp = Op.transitions || (Op.transitions = Object.create(null)),
              op = 0;
            for (let Op in pp)("function" !== typeof pp.hasOwnProperty || pp.hasOwnProperty(Op)) && (ip = cp[Op], ip || (ip = cp[Op] = Object.create(null), op++), cp = ip);
            let Ip = cp[Ji];
            Ip ? Ip >= 96 && Ap ? (Ri[Xi++] = 96 + (31 & (Ip -= 96)), Ri[Xi++] = Ip >> 5) : Ri[Xi++] = Ip : Rp(cp, cp.__keys__ || Object.keys(pp), op);
            for (let Op in pp)("function" !== typeof pp.hasOwnProperty || pp.hasOwnProperty(Op)) && Hp(pp[Op])
          },
          jp = "function" == typeof this.useRecords && this.useRecords,
          kp = jp ? pp => {
            jp(pp) ? ep(pp) : dp(pp)
          } : ep,
          mp = pp => {
            let cp;
            if (pp > 16777216) {
              if (pp - ip > mi) throw new Error("Packed buffer would be larger than maximum buffer size");
              cp = Math.min(mi, 4096 * Math.round(Math.max((pp - ip) * (pp > 67108864 ? 1.25 : 2), 4194304) / 4096))
            } else cp = 1 + (Math.max(pp - ip << 2, Ri.length - 1) >> 12) << 12;
            let Op = new ji(cp);
            return Mi = Op.dataView || (Op.dataView = new DataView(Op.buffer, 0, cp)), pp = Math.min(pp, Ri.length), Ri.copy ? Ri.copy(Op, 0, ip, pp) : Op.set(Ri.slice(ip, pp)), Xi -= ip, ip = 0, Ci = Op.length - 10, Ri = Op
          },
          Rp = (pp, ip, op) => {
            let Ip = Op.nextId;
            Ip || (Ip = 64), Ip < Pp && this.shouldShareStructure && !this.shouldShareStructure(ip) ? (Ip = Op.nextOwnId, Ip < Wp || (Ip = Pp), Op.nextOwnId = Ip + 1) : (Ip >= Wp && (Ip = Pp), Op.nextId = Ip + 1);
            let Sp = ip.highByte = Ip >= 96 && Ap ? Ip - 96 >> 5 : -1;
            pp[Ji] = Ip, pp.__keys__ = ip, Op[Ip - 64] = ip, Ip < Pp ? (ip.isShared = !0, Op.sharedLength = Ip - 63, cp = !0, Sp >= 0 ? (Ri[Xi++] = 96 + (31 & Ip), Ri[Xi++] = Sp) : Ri[Xi++] = Ip) : (Sp >= 0 ? (Ri[Xi++] = 213, Ri[Xi++] = 114, Ri[Xi++] = 96 + (31 & Ip), Ri[Xi++] = Sp) : (Ri[Xi++] = 212, Ri[Xi++] = 114, Ri[Xi++] = Ip), op && (Up += wp * op), yp.length >= Dp && (yp.shift()[Ji] = 0), yp.push(pp), Hp(ip))
          },
          qp = (pp, cp, Op, op) => {
            let Ip = Ri,
              Sp = Xi,
              xp = Ci,
              Lp = ip;
            Ri = qi, Xi = 0, ip = 0, Ri || (qi = Ri = new ji(8192)), Ci = Ri.length - 10, Rp(pp, cp, op), qi = Ri;
            let Yp = Xi;
            if (Ri = Ip, Xi = Sp, Ci = xp, ip = Lp, Yp > 1) {
              let pp = Xi + Yp - 1;
              pp > Ci && mp(pp);
              let cp = Op + ip;
              Ri.copyWithin(cp + Yp, cp + 1, Xi), Ri.set(qi.slice(0, Yp), cp), Xi = pp
            } else Ri[Op + ip] = qi[0]
          },
          Mp = pp => {
            let op = Ei(pp, Ri, ip, Xi, Op, mp, ((pp, ip, Op) => {
              if (Op) return cp = !0;
              Xi = ip;
              let op = Ri;
              return Hp(pp), vp(), op !== Ri ? {
                position: Xi,
                targetView: Mi,
                target: Ri
              } : Xi
            }), this);
            if (0 === op) return kp(pp);
            Xi = op
          }
      }
      useBuffer(pp) {
        Ri = pp, Mi = Ri.dataView || (Ri.dataView = new DataView(Ri.buffer, Ri.byteOffset, Ri.byteLength)), Xi = 0
      }
      set position(pp) {
        Xi = pp
      }
      get position() {
        return Xi
      }
      set buffer(pp) {
        Ri = pp
      }
      get buffer() {
        return Ri
      }
      clearSharedData() {
        this.structures && (this.structures = []), this.typedStructs && (this.typedStructs = [])
      }
    }

    function Ni(pp, ip, cp, Op) {
      let op = pp.byteLength;
      if (op + 1 < 256) {
        var {
          target: Ip,
          position: Sp
        } = cp(4 + op);
        Ip[Sp++] = 199, Ip[Sp++] = op + 1
      } else if (op + 1 < 65536) {
        var {
          target: Ip,
          position: Sp
        } = cp(5 + op);
        Ip[Sp++] = 200, Ip[Sp++] = op + 1 >> 8, Ip[Sp++] = op + 1 & 255
      } else {
        var {
          target: Ip,
          position: Sp,
          targetView: xp
        } = cp(7 + op);
        Ip[Sp++] = 201, xp.setUint32(Sp, op + 1), Sp += 4
      }
      Ip[Sp++] = 116, Ip[Sp++] = ip, pp.buffer || (pp = new Uint8Array(pp)), Ip.set(new Uint8Array(pp.buffer, pp.byteOffset, pp.byteLength), Sp)
    }

    function Ti(pp, ip) {
      let cp = pp.byteLength;
      var Op, op;
      if (cp < 256) {
        var {
          target: Op,
          position: op
        } = ip(cp + 2);
        Op[op++] = 196, Op[op++] = cp
      } else if (cp < 65536) {
        var {
          target: Op,
          position: op
        } = ip(cp + 3);
        Op[op++] = 197, Op[op++] = cp >> 8, Op[op++] = 255 & cp
      } else {
        var {
          target: Op,
          position: op,
          targetView: Ip
        } = ip(cp + 5);
        Op[op++] = 198, Ip.setUint32(op, cp), op += 4
      }
      Op.set(pp, op)
    }

    function fi(pp, ip, cp, Op) {
      let op = pp.length;
      switch (op) {
        case 1:
          ip[cp++] = 212;
          break;
        case 2:
          ip[cp++] = 213;
          break;
        case 4:
          ip[cp++] = 214;
          break;
        case 8:
          ip[cp++] = 215;
          break;
        case 16:
          ip[cp++] = 216;
          break;
        default:
          op < 256 ? (ip[cp++] = 199, ip[cp++] = op) : op < 65536 ? (ip[cp++] = 200, ip[cp++] = op >> 8, ip[cp++] = 255 & op) : (ip[cp++] = 201, ip[cp++] = op >> 24, ip[cp++] = op >> 16 & 255, ip[cp++] = op >> 8 & 255, ip[cp++] = 255 & op)
      }
      return ip[cp++] = Op, ip.set(pp, cp), cp += op
    }

    function bi(pp, ip, cp) {
      if (li.length > 0) {
        Mi.setUint32(li.position + pp, Xi + cp - li.position - pp), li.stringsPosition = Xi - pp;
        let Op = li;
        li = null, ip(Op[0]), ip(Op[1])
      }
    }

    function ai(pp) {
      if (pp.Class) {
        if (!pp.pack && !pp.write) throw new Error("Extension has no pack or write function");
        if (pp.pack && !pp.type) throw new Error("Extension has no type (numeric code to identify the extension)");
        ti.unshift(pp.Class), vi.unshift(pp)
      }! function(pp) {
        pp.unpack ? tp[pp.type] = pp.unpack : tp[pp.type] = pp
      }(pp)
    }

    function ni(pp, ip) {
      return pp.isCompatible = pp => {
        let cp = !pp || (ip.lastNamedStructuresLength || 0) === pp.length;
        return cp || ip._mergeStructures(pp), cp
      }, pp
    }
    ti = [Date, Set, Error, RegExp, ArrayBuffer, Object.getPrototypeOf(Uint8Array.prototype).constructor, dp], vi = [{
      pack(pp, ip, cp) {
        let Op = pp.getTime() / 1e3;
        if ((this.useTimestamp32 || 0 === pp.getMilliseconds()) && Op >= 0 && Op < 4294967296) {
          let {
            target: pp,
            targetView: cp,
            position: op
          } = ip(6);
          pp[op++] = 214, pp[op++] = 255, cp.setUint32(op, Op)
        } else if (Op > 0 && Op < 4294967296) {
          let {
            target: cp,
            targetView: op,
            position: Ip
          } = ip(10);
          cp[Ip++] = 215, cp[Ip++] = 255, op.setUint32(Ip, 4e6 * pp.getMilliseconds() + (Op / 1e3 / 4294967296 | 0)), op.setUint32(Ip + 4, Op)
        } else if (isNaN(Op)) {
          if (this.onInvalidDate) return ip(0), cp(this.onInvalidDate());
          let {
            target: pp,
            targetView: Op,
            position: op
          } = ip(3);
          pp[op++] = 212, pp[op++] = 255, pp[op++] = 255
        } else {
          let {
            target: cp,
            targetView: op,
            position: Ip
          } = ip(15);
          cp[Ip++] = 199, cp[Ip++] = 12, cp[Ip++] = 255, op.setUint32(Ip, 1e6 * pp.getMilliseconds()), op.setBigInt64(Ip + 4, BigInt(Math.floor(Op)))
        }
      }
    }, {
      pack(pp, ip, cp) {
        if (this.setAsEmptyObject) return ip(0), cp({});
        let Op = Array.from(pp),
          {
            target: op,
            position: Ip
          } = ip(this.moreTypes ? 3 : 0);
        this.moreTypes && (op[Ip++] = 212, op[Ip++] = 115, op[Ip++] = 0), cp(Op)
      }
    }, {
      pack(pp, ip, cp) {
        let {
          target: Op,
          position: op
        } = ip(this.moreTypes ? 3 : 0);
        this.moreTypes && (Op[op++] = 212, Op[op++] = 101, Op[op++] = 0), cp([pp.name, pp.message, pp.cause])
      }
    }, {
      pack(pp, ip, cp) {
        let {
          target: Op,
          position: op
        } = ip(this.moreTypes ? 3 : 0);
        this.moreTypes && (Op[op++] = 212, Op[op++] = 120, Op[op++] = 0), cp([pp.source, pp.flags])
      }
    }, {
      pack(pp, ip) {
        this.moreTypes ? Ni(pp, 16, ip) : Ti(ui ? Buffer.from(pp) : new Uint8Array(pp), ip)
      }
    }, {
      pack(pp, ip) {
        let cp = pp.constructor;
        cp !== ki && this.moreTypes ? Ni(pp, oi.indexOf(cp.name), ip) : Ti(pp, ip)
      }
    }, {
      pack(pp, ip) {
        let {
          target: cp,
          position: Op
        } = ip(1);
        cp[Op] = 193
      }
    }];
    let Fi = new Bi({
      useRecords: !1
    });
    const gi = Fi.pack,
      Gi = Fi.pack,
      ri = Bi,
      {
        NEVER: Zi,
        ALWAYS: zi,
        DECIMAL_ROUND: si,
        DECIMAL_FIT: Ki
      } = Ui,
      Vi = 512,
      pc = 1024,
      ic = 2048;
    const cc = function(pp) {
        let ip = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        if (!pp || "object" !== typeof pp) throw new Error("first argument must be an Iterable, Async Iterable, Iterator, Async Iterator, or a promise");
        const cp = new Mp(ip);
        let Op;
        const op = pp => {
          let ip;
          Op && (pp = Buffer.concat([Op, pp]), Op = void 0);
          try {
            ip = cp.unpackMultiple(pp)
          } catch (op) {
            if (!op.incomplete) throw op;
            Op = pp.slice(op.lastPosition), ip = op.values
          }
          return ip
        };
        return "function" === typeof pp[Symbol.iterator] ? function*() {
          for (const ip of pp) yield* op(ip)
        }() : "function" === typeof pp[Symbol.asyncIterator] ? async function*() {
          for await (const ip of pp) yield* op(ip)
        }(): void 0
      },
      Oc = function(pp) {
        let ip = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        if (pp && "object" === typeof pp) {
          if ("function" === typeof pp[Symbol.iterator]) return function*(pp, ip) {
            const cp = new Bi(ip);
            for (const Op of pp) yield cp.pack(Op)
          }(pp, ip);
          if ("function" === typeof pp.then || "function" === typeof pp[Symbol.asyncIterator]) return async function*(pp, ip) {
            const cp = new Bi(ip);
            for await (const Op of pp) yield cp.pack(Op)
          }(pp, ip);
          throw new Error("first argument must be an Iterable, Async Iterable, Iterator, Async Iterator, or a Promise")
        }
        throw new Error("first argument must be an Iterable, Async Iterable, or a Promise for an Async Iterable")
      },
      oc = !1,
      Ic = !0
  },
  9253: (pp, ip, cp) => {
    cp.r(ip), cp.d(ip, {
      $changes: () => Up,
      $childType: () => wp,
      $decoder: () => Dp,
      $deleteByIndex: () => Wp,
      $encoder: () => Yp,
      $filter: () => Ap,
      $getByIndex: () => Pp,
      $numFields: () => qp,
      $refId: () => xp,
      $track: () => Lp,
      $values: () => ep,
      ArraySchema: () => IO,
      Callbacks: () => Io,
      ChangeTree: () => lc,
      CollectionSchema: () => LO,
      Decoder: () => sO,
      Encoder: () => GO,
      FieldBuilder: () => AO,
      MapSchema: () => xO,
      Metadata: () => si,
      OPERATION: () => op,
      Reflection: () => io,
      ReflectionField: () => VO,
      ReflectionType: () => po,
      Root: () => QO,
      Schema: () => XO,
      SetSchema: () => YO,
      StateCallbackStrategy: () => oo,
      StateView: () => fO,
      StreamSchema: () => DO,
      TypeContext: () => ni,
      createPool: () => xo,
      decode: () => ei,
      decodeKeyValueOperation: () => Vc,
      decodeSchemaOperation: () => Kc,
      defineCustomTypes: () => mi,
      defineTypes: () => MO,
      deprecated: () => RO,
      dumpChanges: () => EO,
      encode: () => Oi,
      encodeArray: () => hc,
      encodeIndexedEntry: () => fc,
      encodeKeyValueOperation: () => bc,
      encodeMapEntry: () => Tc,
      encodeSchemaOperation: () => Nc,
      vy: () => tO,
      fullStateOnly: () => uO,
      getDecoderStateCallbacks: () => co,
      getEncodeDescriptor: () => Oc,
      getRawChangesCallback: () => Oo,
      isBuilder: () => PO,
      patchOnly: () => eO,
      registerType: () => ki,
      schema: () => CO,
      t: () => wO,
      type: () => jO,
      unreliable: () => dO,
      view: () => HO
    });
    const Op = 255;
    var op;

    function Ip(pp) {
      Object.defineProperty(pp, Symbol.metadata, {
        value: void 0,
        writable: !0,
        configurable: !0,
        enumerable: !1
      })
    }! function(pp) {
      pp[pp.ADD = 128] = "ADD", pp[pp.REPLACE = 0] = "REPLACE", pp[pp.DELETE = 64] = "DELETE", pp[pp.DELETE_AND_MOVE = 96] = "DELETE_AND_MOVE", pp[pp.MOVE_AND_ADD = 160] = "MOVE_AND_ADD", pp[pp.DELETE_AND_ADD = 192] = "DELETE_AND_ADD", pp[pp.CLEAR = 10] = "CLEAR", pp[pp.REVERSE = 15] = "REVERSE", pp[pp.MOVE = 32] = "MOVE", pp[pp.DELETE_BY_REFID = 33] = "DELETE_BY_REFID", pp[pp.ADD_BY_REFID = 129] = "ADD_BY_REFID"
    }(op || (op = {})), Symbol.metadata ??= Symbol.for("Symbol.metadata");
    const Sp = "undefined" !== typeof globalThis ? globalThis : "undefined" !== typeof global ? global : "undefined" !== typeof self ? self : "undefined" !== typeof window ? window : {};
    if ("function" === typeof Symbol && "function" !== typeof Symbol.for) {
      const pp = "colyseus.symbolRegistry",
        ip = Sp[pp] || (Sp[pp] = Object.create(null));
      Symbol.for = function(pp) {
        return ip[pp] || (ip[pp] = Symbol(pp))
      }, Symbol.keyFor = function(pp) {
        for (const cp in ip)
          if (ip[cp] === pp) return cp
      }
    }
    const xp = Symbol.for("$refId"),
      Lp = "~track",
      Yp = "~encoder",
      Dp = "~decoder",
      Ap = "~filter",
      Pp = "~getByIndex",
      Wp = "~deleteByIndex",
      yp = "~resyncPrune",
      Up = Symbol.for("$changes"),
      wp = Symbol.for("$childType"),
      vp = Symbol.for("$proxyTarget"),
      tp = "~onEncodeEnd",
      Hp = "~reset",
      dp = "~onDecodeEnd",
      ep = Symbol.for("$values"),
      jp = "~builder",
      kp = "~descriptors",
      mp = "~__encodeDescriptor",
      Rp = "~encoders",
      qp = "~__numFields",
      Mp = "~__refTypeFieldIndexes",
      Cp = "~__viewFieldIndexes",
      Ep = "$__fieldIndexesByViewTag",
      Xp = "~__unreliableFieldIndexes",
      lp = "~__patchOnlyFieldIndexes",
      Qp = "~__fullSyncSkipIndexes",
      Jp = "~__fullStateOnlyFieldIndexes",
      Bp = "~__streamFieldIndexes",
      Np = "~__streamPriorities";
    let Tp;
    try {
      Tp = new TextEncoder
    } catch (Lo) {}
    const fp = new ArrayBuffer(8),
      bp = new Int32Array(fp),
      hp = new Float32Array(fp),
      ap = new Float64Array(fp),
      np = new BigInt64Array(fp),
      Fp = "undefined" !== typeof Buffer && Buffer.byteLength ? Buffer.byteLength : function(pp, ip) {
        for (var cp = 0, Op = 0, op = 0, Ip = pp.length; op < Ip; op++)(cp = pp.charCodeAt(op)) < 128 ? Op += 1 : cp < 2048 ? Op += 2 : cp < 55296 || cp >= 57344 ? Op += 3 : (op++, Op += 4);
        return Op
      };

    function gp(pp, ip, cp) {
      for (var Op = 0, op = 0, Ip = ip.length; op < Ip; op++)(Op = ip.charCodeAt(op)) < 128 ? pp[cp.offset++] = Op : Op < 2048 ? (pp[cp.offset] = 192 | Op >> 6, pp[cp.offset + 1] = 128 | 63 & Op, cp.offset += 2) : Op < 55296 || Op >= 57344 ? (pp[cp.offset] = 224 | Op >> 12, pp[cp.offset + 1] = 128 | Op >> 6 & 63, pp[cp.offset + 2] = 128 | 63 & Op, cp.offset += 3) : (op++, Op = 65536 + ((1023 & Op) << 10 | 1023 & ip.charCodeAt(op)), pp[cp.offset] = 240 | Op >> 18, pp[cp.offset + 1] = 128 | Op >> 12 & 63, pp[cp.offset + 2] = 128 | Op >> 6 & 63, pp[cp.offset + 3] = 128 | 63 & Op, cp.offset += 4)
    }

    function Gp(pp, ip, cp) {
      pp[cp.offset++] = 255 & ip
    }

    function rp(pp, ip, cp) {
      pp[cp.offset++] = 255 & ip, pp[cp.offset++] = ip >> 8 & 255
    }

    function Zp(pp, ip, cp) {
      pp[cp.offset++] = 255 & ip, pp[cp.offset++] = ip >> 8 & 255
    }

    function zp(pp, ip, cp) {
      pp[cp.offset++] = 255 & ip, pp[cp.offset++] = ip >> 8 & 255, pp[cp.offset++] = ip >> 16 & 255, pp[cp.offset++] = ip >> 24 & 255
    }

    function sp(pp, ip, cp) {
      const Op = ip >> 24,
        op = ip >> 16,
        Ip = ip >> 8,
        Sp = ip;
      pp[cp.offset++] = 255 & Sp, pp[cp.offset++] = 255 & Ip, pp[cp.offset++] = 255 & op, pp[cp.offset++] = 255 & Op
    }

    function Kp(pp, ip, cp) {
      const Op = Math.floor(ip / Math.pow(2, 32));
      sp(pp, ip >>> 0, cp), sp(pp, Op, cp)
    }

    function Vp(pp, ip, cp) {
      const Op = ip / Math.pow(2, 32) | 0;
      sp(pp, ip >>> 0, cp), sp(pp, Op, cp)
    }

    function ii(pp, ip, cp) {
      hp[0] = ip, zp(pp, bp[0], cp)
    }

    function ci(pp, ip, cp) {
      ap[0] = ip, zp(pp, bp[0], cp), zp(pp, bp[1], cp)
    }
    const Oi = {
        int8: Gp,
        uint8: function(pp, ip, cp) {
          pp[cp.offset++] = 255 & ip
        },
        int16: rp,
        uint16: Zp,
        int32: zp,
        uint32: sp,
        int64: Kp,
        uint64: Vp,
        bigint64: function(pp, ip, cp) {
          np[0] = BigInt.asIntN(64, ip), zp(pp, bp[0], cp), zp(pp, bp[1], cp)
        },
        biguint64: function(pp, ip, cp) {
          np[0] = BigInt.asIntN(64, ip), zp(pp, bp[0], cp), zp(pp, bp[1], cp)
        },
        float32: ii,
        float64: ci,
        boolean: function(pp, ip, cp) {
          pp[cp.offset++] = ip ? 1 : 0
        },
        string: function(pp, ip, cp) {
          ip || (ip = "");
          let Op = Fp(ip, "utf8"),
            op = 0;
          if (Op < 32) pp[cp.offset++] = 160 | Op, op = 1;
          else if (Op < 256) pp[cp.offset++] = 217, pp[cp.offset++] = Op, op = 2;
          else if (Op < 65536) pp[cp.offset++] = 218, Zp(pp, Op, cp), op = 3;
          else {
            if (!(Op < 4294967296)) throw new Error("String too long");
            pp[cp.offset++] = 219, sp(pp, Op, cp), op = 5
          }
          return gp(pp, ip, cp), op + Op
        },
        number: function pp(ip, cp, Op) {
          return isNaN(cp) ? pp(ip, 0, Op) : isFinite(cp) ? cp !== (0 | cp) ? Math.abs(cp) <= 34028235e31 && (hp[0] = cp, Math.abs(Math.abs(hp[0]) - Math.abs(cp)) < 1e-4) ? (ip[Op.offset++] = 202, ii(ip, cp, Op), 5) : (ip[Op.offset++] = 203, ci(ip, cp, Op), 9) : cp >= 0 ? cp < 128 ? (ip[Op.offset++] = 255 & cp, 1) : cp < 256 ? (ip[Op.offset++] = 204, ip[Op.offset++] = 255 & cp, 2) : cp < 65536 ? (ip[Op.offset++] = 205, Zp(ip, cp, Op), 3) : cp < 4294967296 ? (ip[Op.offset++] = 206, sp(ip, cp, Op), 5) : (ip[Op.offset++] = 207, Vp(ip, cp, Op), 9) : cp >= -32 ? (ip[Op.offset++] = 224 | cp + 32, 1) : cp >= -128 ? (ip[Op.offset++] = 208, Gp(ip, cp, Op), 2) : cp >= -32768 ? (ip[Op.offset++] = 209, rp(ip, cp, Op), 3) : cp >= -2147483648 ? (ip[Op.offset++] = 210, zp(ip, cp, Op), 5) : (ip[Op.offset++] = 211, Kp(ip, cp, Op), 9) : pp(ip, cp > 0 ? Number.MAX_SAFE_INTEGER : -Number.MAX_SAFE_INTEGER, Op)
        },
        utf8Write: gp,
        utf8Length: Fp
      },
      oi = new ArrayBuffer(8),
      Ii = new Int32Array(oi),
      Si = new Float32Array(oi),
      xi = new Float64Array(oi),
      Li = new BigUint64Array(oi),
      Yi = new BigInt64Array(oi);

    function Di(pp, ip, cp) {
      cp > pp.length - ip.offset && (cp = pp.length - ip.offset);
      for (var Op = "", op = 0, Ip = ip.offset, Sp = ip.offset + cp; Ip < Sp; Ip++) {
        var xp = pp[Ip];
        if (0 !== (128 & xp))
          if (192 !== (224 & xp))
            if (224 !== (240 & xp)) {
              if (240 !== (248 & xp)) {
                console.error("decode.utf8Read(): Invalid byte " + xp + " at offset " + Ip + ". Skip to end of string: " + (ip.offset + cp));
                break
              }(op = (7 & xp) << 18 | (63 & pp[++Ip]) << 12 | (63 & pp[++Ip]) << 6 | 63 & pp[++Ip]) >= 65536 ? (op -= 65536, Op += String.fromCharCode(55296 + (op >>> 10), 56320 + (1023 & op))) : Op += String.fromCharCode(op)
            } else Op += String.fromCharCode((15 & xp) << 12 | (63 & pp[++Ip]) << 6 | 63 & pp[++Ip]);
        else Op += String.fromCharCode((31 & xp) << 6 | 63 & pp[++Ip]);
        else Op += String.fromCharCode(xp)
      }
      return ip.offset += cp, Op
    }

    function Ai(pp, ip) {
      return Pi(pp, ip) << 24 >> 24
    }

    function Pi(pp, ip) {
      return pp[ip.offset++]
    }

    function Wi(pp, ip) {
      return yi(pp, ip) << 16 >> 16
    }

    function yi(pp, ip) {
      return pp[ip.offset++] | pp[ip.offset++] << 8
    }

    function Ui(pp, ip) {
      return pp[ip.offset++] | pp[ip.offset++] << 8 | pp[ip.offset++] << 16 | pp[ip.offset++] << 24
    }

    function wi(pp, ip) {
      return Ui(pp, ip) >>> 0
    }

    function vi(pp, ip) {
      return Ii[0] = Ui(pp, ip), Si[0]
    }

    function ti(pp, ip) {
      return Ii[0] = Ui(pp, ip), Ii[1] = Ui(pp, ip), xi[0]
    }

    function Hi(pp, ip) {
      const cp = wi(pp, ip);
      return Ui(pp, ip) * Math.pow(2, 32) + cp
    }

    function di(pp, ip) {
      const cp = wi(pp, ip);
      return wi(pp, ip) * Math.pow(2, 32) + cp
    }
    const ei = {
        utf8Read: Di,
        int8: Ai,
        uint8: Pi,
        int16: Wi,
        uint16: yi,
        int32: Ui,
        uint32: wi,
        float32: vi,
        float64: ti,
        int64: Hi,
        uint64: di,
        bigint64: function(pp, ip) {
          return Ii[0] = Ui(pp, ip), Ii[1] = Ui(pp, ip), Yi[0]
        },
        biguint64: function(pp, ip) {
          return Ii[0] = Ui(pp, ip), Ii[1] = Ui(pp, ip), Li[0]
        },
        boolean: function(pp, ip) {
          return Pi(pp, ip) > 0
        },
        string: function(pp, ip) {
          const cp = pp[ip.offset++];
          let Op;
          return cp < 192 ? Op = 31 & cp : 217 === cp ? Op = Pi(pp, ip) : 218 === cp ? Op = yi(pp, ip) : 219 === cp && (Op = wi(pp, ip)), Di(pp, ip, Op)
        },
        number: function(pp, ip) {
          const cp = pp[ip.offset++];
          return cp < 128 ? cp : 202 === cp ? vi(pp, ip) : 203 === cp ? ti(pp, ip) : 204 === cp ? Pi(pp, ip) : 205 === cp ? yi(pp, ip) : 206 === cp ? wi(pp, ip) : 207 === cp ? di(pp, ip) : 208 === cp ? Ai(pp, ip) : 209 === cp ? Wi(pp, ip) : 210 === cp ? Ui(pp, ip) : 211 === cp ? Hi(pp, ip) : cp > 223 ? -1 * (255 - cp + 1) : void 0
        },
        stringCheck: function(pp, ip) {
          const cp = pp[ip.offset];
          return cp < 192 && cp > 160 || 217 === cp || 218 === cp || 219 === cp
        }
      },
      ui = {},
      ji = new Map;

    function ki(pp, ip) {
      ip.constructor && (Object.prototype.hasOwnProperty.call(ip, "constructor") && null == ip.constructor[Symbol.metadata] && Ip(ip.constructor), ji.set(ip.constructor, pp), ui[pp] = ip), ip.encode && (Oi[pp] = ip.encode), ip.decode && (ei[pp] = ip.decode)
    }

    function mi(pp) {
      for (const ip in pp) ki(ip, pp[ip]);
      return pp => jO(pp)
    }
    const Ri = "ArraySchema does not support streaming \u2014 positional ops (splice / unshift / reverse) shift subsequent indexes, so holding ADDs back for a later tick under `maxPerTick` would desync the decoder. Use `t.stream(X)` (stable monotonic positions) or `t.map(X).stream()` (stable keys) instead.";

    function qi() {
      return {
        pendingByView: new Map,
        sentByView: new Map,
        broadcastPending: new Set,
        sentBroadcast: new Set,
        broadcastDeletes: new Set,
        maxPerTick: 32
      }
    }

    function Mi(pp) {
      return pp._stream ??= qi()
    }

    function Ci(pp, ip, cp) {
      0 === ip.activeViews.size && Mi(pp).broadcastPending.add(cp)
    }

    function Ei(pp, ip, cp, Op) {
      const Ip = pp._stream;
      if (void 0 === Ip) return !0;
      let Sp = !1;
      return Ip.broadcastPending.delete(Op) ? Sp = !0 : Ip.sentBroadcast.delete(Op) && Ip.broadcastDeletes.add(Op), ip.forEachActiveView((pp => {
        const ip = Ip.pendingByView.get(pp.id);
        if (ip?.has(Op)) return ip.delete(Op), void(Sp = !0);
        const xp = Ip.sentByView.get(pp.id);
        if (xp?.has(Op)) {
          xp.delete(Op);
          let ip = pp.changes.get(cp);
          void 0 === ip && (ip = new Map, pp.changes.set(cp, ip)), ip.set(Op, op.DELETE)
        }
      })), Sp
    }

    function Xi(pp, ip) {
      const cp = pp._stream?.pendingByView;
      if (void 0 === cp) return !1;
      for (const [Op, op] of cp)
        if (op.size > 0 && void 0 !== ip.activeViews.get(Op)?.deref()) return !0;
      return !1
    }

    function li(pp) {
      const ip = pp._stream;
      return void 0 !== ip && (ip.broadcastPending.size > 0 || ip.broadcastDeletes.size > 0)
    }

    function Qi(pp, ip, cp) {
      const Op = Mi(pp);
      let op = Op.pendingByView.get(ip);
      void 0 === op && (op = new Set, Op.pendingByView.set(ip, op)), op.add(cp)
    }

    function Ji(pp, ip) {
      const cp = pp._stream;
      void 0 !== cp && (cp.pendingByView.delete(ip), cp.sentByView.delete(ip), cp.priorityByView?.delete(ip))
    }
    const Bi = {
      8: "uint8",
      16: "uint16",
      32: "uint32"
    };

    function Ni(pp) {
      if (null == pp || "object" !== typeof pp) throw new Error("t.quantized(): options object with { min, max } is required.");
      const {
        min: ip,
        max: cp
      } = pp;
      if ("number" !== typeof ip || "number" !== typeof cp || !(cp > ip) || !Number.isFinite(ip) || !Number.isFinite(cp)) throw new Error(`t.quantized(): require finite min < max (got min=${ip}, max=${cp}).`);
      const Op = pp.bits ?? 16;
      if (8 !== Op && 16 !== Op && 32 !== Op) throw new Error(`t.quantized(): bits must be 8, 16 or 32 (got ${Op}).`);
      const op = pp.mode ?? "clamp";
      if ("clamp" !== op && "wrap" !== op) throw new Error(`t.quantized(): mode must be "clamp" or "wrap" (got ${JSON.stringify(op)}).`);
      const Ip = "wrap" === op,
        Sp = Math.pow(2, Op);
      return {
        min: ip,
        max: cp,
        bits: Op,
        wrap: Ip,
        wire: Bi[Op],
        range: cp - ip,
        span: Ip ? Sp : ip === -cp ? Sp - 2 : Sp - 1
      }
    }

    function Ti(pp) {
      return null !== pp && "object" === typeof pp && void 0 !== pp.quantized
    }

    function fi(pp, ip) {
      if (pp.wrap) {
        if (!Number.isFinite(ip)) return 0;
        const cp = pp.range;
        let Op = (ip - pp.min) % cp;
        Op < 0 && (Op += cp);
        const op = pp.span;
        return Math.floor(Op / cp * op + .5) % op
      }
      if (ip !== ip) return 0;
      const cp = ip < pp.min ? pp.min : ip > pp.max ? pp.max : ip;
      return Math.floor((cp - pp.min) / pp.range * pp.span + .5)
    }

    function bi(pp, ip) {
      return pp.min + ip / pp.span * pp.range
    }

    function ai(pp) {
      const ip = Oi[pp.wire];
      return (cp, Op, op) => ip(cp, fi(pp, Op), op)
    }
    class ni {
      types = {};
      schemas = new Map;
      hasFilters = !1;
      static inheritedTypes = new WeakMap;
      static cachedContexts = new WeakMap;
      static register(pp) {
        const ip = Object.getPrototypeOf(pp);
        if (ip !== XO) {
          let cp = ni.inheritedTypes.get(ip);
          cp || (cp = new Set, ni.inheritedTypes.set(ip, cp)), cp.add(pp)
        }
      }
      static cache(pp) {
        let ip = ni.cachedContexts.get(pp);
        return ip || (ip = new ni(pp), ni.cachedContexts.set(pp, ip)), ip
      }
      constructor(pp) {
        pp && this.discoverTypes(pp)
      }
      has(pp) {
        return this.schemas.has(pp)
      }
      get(pp) {
        return this.types[pp]
      }
      add(pp) {
        let ip = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.schemas.size;
        return !this.schemas.has(pp) && (this.types[ip] = pp, null == pp[Symbol.metadata] && si.initialize(pp), this.schemas.set(pp, ip), !0)
      }
      getTypeId(pp) {
        return this.schemas.get(pp)
      }
      discoverTypes(pp) {
        if (!this.add(pp)) return;
        ni.inheritedTypes.get(pp)?.forEach((pp => {
          this.discoverTypes(pp)
        }));
        let ip = pp;
        for (;
          (ip = Object.getPrototypeOf(ip)) && ip !== XO && ip !== Function.prototype;) this.discoverTypes(ip);
        const cp = pp[Symbol.metadata];
        (cp[Cp] || cp[Bp]) && (this.hasFilters = !0);
        for (const Op in cp) {
          const pp = cp[Op].type;
          if ("string" !== typeof pp && !Ti(pp))
            if ("function" === typeof pp) this.discoverTypes(pp);
            else {
              const ip = Object.values(pp)[0];
              if ("string" === typeof ip) continue;
              this.discoverTypes(ip)
            }
        }
      }
      debug() {
        return `TypeContext ->\n\tSchema types: ${this.schemas.size}\n\thasFilters: ${this.hasFilters}`
      }
    }

    function Fi(pp) {
      const ip = Gi(pp);
      return ip ? {
        complexTypeKlass: ui[ip],
        childType: pp[ip]
      } : {
        complexTypeKlass: !1,
        childType: pp
      }
    }

    function gi(pp, ip) {
      const cp = ri(pp),
        Op = Gi(cp),
        op = Op && Gi(cp[Op]);
      if (op) throw new Error(`${ip?`${ip}: `:""}@colyseus/schema: nested collections are not supported ("${Op}" of "${op}"). Collections can only hold primitive types or Schema classes, wrap the inner ${op} in a Schema class.`);
      return cp
    }

    function Gi(pp) {
      return "object" === typeof pp && null !== pp ? Object.keys(pp).find((pp => void 0 !== ui[pp])) : void 0
    }

    function ri(pp) {
      if ("object" !== typeof pp || null === pp) return pp;
      if (Array.isArray(pp)) return {
        array: ri(pp[0])
      };
      const ip = function(pp) {
        const ip = Object.keys(pp),
          cp = ip.filter((pp => /\d+/.test(pp)));
        if (cp.length > 0 && cp.length === ip.length / 2 && pp[pp[cp[0]]] == cp[0]) return "number";
        if (ip.length > 0 && ip.every((ip => pp[ip] === ip))) return "string"
      }(pp);
      if (ip) return ip;
      if (Ti(pp)) return "string" === typeof pp.quantized.wire ? pp : {
        quantized: Ni(pp.quantized)
      };
      if (void 0 !== pp.type) return ri(pp.type);
      const cp = Gi(pp);
      return cp && (pp[cp] = ri(pp[cp])), pp
    }
    const Zi = [Mp, Xp, lp, Qp, Jp, Bp, Rp];

    function zi(pp, ip, cp) {
      pp[ip] || Object.defineProperty(pp, ip, {
        value: [],
        enumerable: !1,
        configurable: !0,
        writable: !0
      }), pp[ip].push(cp)
    }
    const si = {
        addField(pp, ip, cp, Op, op) {
          if (ip >= 63) throw new Error(`Can't define field '${cp}'.\nSchema instances may only have up to 63 fields.`);
          pp[ip] = Object.assign(pp[ip] || {}, {
            type: Op,
            index: ip,
            name: cp
          }), Object.defineProperty(pp, kp, {
            value: pp[kp] || {},
            enumerable: !1,
            configurable: !0
          }), pp[kp][cp] = op || {
            value: void 0,
            writable: !0,
            enumerable: !0,
            configurable: !0
          }, Object.defineProperty(pp, qp, {
            value: ip,
            enumerable: !1,
            configurable: !0
          }), Object.defineProperty(pp, cp, {
            value: ip,
            enumerable: !1,
            configurable: !0
          }), "string" === typeof pp[ip].type || Ti(pp[ip].type) || (void 0 === pp[Mp] && Object.defineProperty(pp, Mp, {
            value: [],
            enumerable: !1,
            configurable: !0
          }), pp[Mp].push(ip));
          const Ip = pp[ip].type;
          if (Ip && "object" === typeof Ip && void 0 !== Ip.stream) {
            if (void 0 !== Ip.array) throw new Error(Ri);
            pp[ip].stream = !0, pp[Bp] || Object.defineProperty(pp, Bp, {
              value: [],
              enumerable: !1,
              configurable: !0,
              writable: !0
            }), pp[Bp].includes(ip) || pp[Bp].push(ip);
            const op = Op?.priority;
            "function" === typeof op && si.setStreamPriority(pp, cp, op)
          }
        },
        setTag(pp, ip, cp) {
          const Op = pp[ip];
          if (pp[Op].tag = cp, pp[Cp] || (Object.defineProperty(pp, Cp, {
              value: [],
              enumerable: !1,
              configurable: !0
            }), Object.defineProperty(pp, Ep, {
              value: {},
              enumerable: !1,
              configurable: !0
            })), pp[Cp].push(Op), cp < 0) pp[Ep][cp] || (pp[Ep][cp] = []), pp[Ep][cp].push(Op);
          else
            for (let op = cp; op > 0; op &= op - 1) {
              const ip = op & -op;
              pp[Ep][ip] || (pp[Ep][ip] = []), pp[Ep][ip].push(Op)
            }
        },
        setUnreliable(pp, ip) {
          const cp = pp[ip];
          if ("string" !== typeof pp[cp].type) throw new Error(`@unreliable cannot be applied to ref-type field "${ip}". For ref-type fields, mark each primitive sub-field with @unreliable instead. See README "Limitations and best practices".`);
          pp[cp].unreliable = !0, pp[Xp] || Object.defineProperty(pp, Xp, {
            value: [],
            enumerable: !1,
            configurable: !0,
            writable: !0
          }), pp[Xp].push(cp)
        },
        setPatchOnly(pp, ip) {
          const cp = pp[ip];
          if (pp[cp].fullStateOnly) throw new Error(`field "${ip}" cannot be both patchOnly and fullStateOnly \u2014 those are the only two delivery channels, so the field would never reach a client.`);
          pp[cp].patchOnly = !0, zi(pp, lp, cp), zi(pp, Qp, cp)
        },
        setDeprecated(pp, ip) {
          const cp = pp[ip];
          pp[cp].deprecated = !0, zi(pp, Qp, cp), Object.defineProperty(pp, cp, {
            value: pp[cp],
            enumerable: !1,
            configurable: !0
          })
        },
        setFullStateOnly(pp, ip) {
          const cp = pp[ip];
          if (pp[cp].patchOnly) throw new Error(`field "${ip}" cannot be both patchOnly and fullStateOnly \u2014 those are the only two delivery channels, so the field would never reach a client.`);
          pp[cp].fullStateOnly = !0, zi(pp, Jp, cp)
        },
        setStream(pp, ip) {
          const cp = pp[ip];
          pp[cp].stream = !0, pp[Bp] || Object.defineProperty(pp, Bp, {
            value: [],
            enumerable: !1,
            configurable: !0,
            writable: !0
          }), pp[Bp].push(cp)
        },
        setStreamPriority(pp, ip, cp) {
          const Op = pp[ip];
          pp[Np] || Object.defineProperty(pp, Np, {
            value: {},
            enumerable: !1,
            configurable: !0,
            writable: !0
          }), pp[Np][Op] = cp
        },
        getStreamPriority: (pp, ip) => pp?.[Np]?.[ip],
        defineField(pp, ip, cp, Op, op) {
          const Ip = gi(op, `${pp.name}.${Op}`),
            {
              complexTypeKlass: Sp,
              childType: xp
            } = Fi(Ip);
          si.addField(ip, cp, Op, Ip, mO(Op, cp, xp, Sp)), ip[kp][Op] && Object.defineProperty(pp.prototype, Op, ip[kp][Op]), ("string" === typeof Ip || Ti(Ip)) && (ip[Rp] || Object.defineProperty(ip, Rp, {
            value: [],
            enumerable: !1,
            configurable: !0,
            writable: !0
          }), ip[Rp][cp] = "string" === typeof Ip ? Oi[Ip] : ai(Ip.quantized))
        },
        setFields(pp, ip) {
          const cp = pp.prototype.constructor;
          ni.register(cp);
          const Op = Object.getPrototypeOf(cp),
            op = Op && Op[Symbol.metadata],
            Ip = si.initialize(cp);
          cp[Lp] || (cp[Lp] = XO[Lp]), cp[Yp] || (cp[Yp] = XO[Yp]), cp[Dp] || (cp[Dp] = XO[Dp]), cp.prototype.toJSON || (cp.prototype.toJSON = XO.prototype.toJSON);
          let Sp = Ip[qp] ?? (op && op[qp]) ?? -1;
          Sp++, Ip[Rp] || Object.defineProperty(Ip, Rp, {
            value: op?.[Rp] ? [...op[Rp]] : [],
            enumerable: !1,
            configurable: !0,
            writable: !0
          });
          for (const xp in ip) {
            if (void 0 !== Ip[xp]) throw new Error(`@colyseus/schema: Duplicate '${xp}' definition on '${cp.name||"(anonymous)"}'.`);
            si.defineField(cp, Ip, Sp, xp, ip[xp]), Sp++
          }
          return pp
        },
        isDeprecated: (pp, ip) => !0 === pp[ip].deprecated,
        initialize(pp) {
          const ip = Object.getPrototypeOf(pp),
            cp = ip[Symbol.metadata];
          let Op = pp[Symbol.metadata] ?? Object.create(null);
          if (ip !== XO && Op === cp && (Op = Object.create(null), cp)) {
            Object.setPrototypeOf(Op, cp), Object.defineProperty(Op, qp, {
              value: cp[qp],
              enumerable: !1,
              configurable: !0,
              writable: !0
            }), void 0 !== cp[Cp] && (Object.defineProperty(Op, Cp, {
              value: [...cp[Cp]],
              enumerable: !1,
              configurable: !0,
              writable: !0
            }), Object.defineProperty(Op, Ep, {
              value: {
                ...cp[Ep]
              },
              enumerable: !1,
              configurable: !0,
              writable: !0
            }));
            for (const pp of Zi) {
              const ip = cp[pp];
              void 0 !== ip && Object.defineProperty(Op, pp, {
                value: [...ip],
                enumerable: !1,
                configurable: !0,
                writable: !0
              })
            }
            Object.defineProperty(Op, kp, {
              value: {
                ...cp[kp]
              },
              enumerable: !1,
              configurable: !0,
              writable: !0
            })
          }
          return Object.defineProperty(pp, Symbol.metadata, {
            value: Op,
            writable: !1,
            configurable: !0
          }), Op
        },
        isValidInstance: pp => pp.constructor[Symbol.metadata] && Object.prototype.hasOwnProperty.call(pp.constructor[Symbol.metadata], qp),
        getFields(pp) {
          const ip = pp[Symbol.metadata],
            cp = {};
          for (let Op = 0; Op <= ip[qp]; Op++) cp[ip[Op].name] = ip[Op].type;
          return cp
        },
        hasViewTagAtIndex: (pp, ip) => pp?.[Cp]?.includes(ip),
        hasUnreliableAtIndex: (pp, ip) => pp?.[Xp]?.includes(ip),
        hasPatchOnlyAtIndex: (pp, ip) => pp?.[lp]?.includes(ip),
        hasFullStateOnlyAtIndex: (pp, ip) => pp?.[Jp]?.includes(ip),
        hasStreamAtIndex: (pp, ip) => pp?.[Bp]?.includes(ip)
      },
      Ki = (pp, ip, cp) => pp(ip, cp);
    class Vi {
      dirtyLow = 0;
      dirtyHigh = 0;
      ops;
      constructor(pp) {
        this.ops = new Uint8Array(Math.max(pp + 1, 1))
      }
      record(pp, ip) {
        const cp = this.ops[pp];
        0 === cp ? this.ops[pp] = ip : (cp === op.DELETE || cp === op.ADD && ip === op.DELETE_AND_ADD) && (this.ops[pp] = op.DELETE_AND_ADD), pp < 32 ? this.dirtyLow |= 1 << pp : this.dirtyHigh |= 1 << pp - 32
      }
      recordDelete(pp, ip) {
        this.ops[pp] = ip, pp < 32 ? this.dirtyLow |= 1 << pp : this.dirtyHigh |= 1 << pp - 32
      }
      recordRaw(pp, ip) {
        this.record(pp, ip)
      }
      operationAt(pp) {
        const ip = this.ops[pp];
        return 0 === ip ? void 0 : ip
      }
      setOperationAt(pp, ip) {
        this.ops[pp] = ip
      }
      forEach(pp) {
        this.forEachWithCtx(pp, Ki)
      }
      forEachWithCtx(pp, ip) {
        let cp = this.dirtyLow,
          Op = this.dirtyHigh;
        const op = this.ops;
        for (; 0 !== cp;) {
          const Op = cp & -cp,
            Ip = 31 - Math.clz32(Op);
          cp ^= Op, ip(pp, Ip, op[Ip])
        }
        for (; 0 !== Op;) {
          const cp = Op & -Op,
            Ip = 31 - Math.clz32(cp) + 32;
          Op ^= cp, ip(pp, Ip, op[Ip])
        }
      }
      size() {
        return ic(this.dirtyLow) + ic(this.dirtyHigh)
      }
      has() {
        return 0 !== (this.dirtyLow | this.dirtyHigh)
      }
      reset() {
        this.dirtyLow = 0, this.dirtyHigh = 0, this.ops.fill(0)
      }
    }
    class pc {
      pU = new Map;
      pureOps = [];
      record(pp, ip) {
        const cp = this.pU.get(pp);
        void 0 === cp ? this.pU.set(pp, ip) : (cp === op.DELETE || cp === op.ADD && ip === op.DELETE_AND_ADD) && this.pU.set(pp, op.DELETE_AND_ADD)
      }
      recordDelete(pp, ip) {
        this.pU.set(pp, ip)
      }
      recordRaw(pp, ip) {
        this.pU.set(pp, ip)
      }
      recordPure(pp) {
        this.pureOps.push([this.pU.size, pp])
      }
      operationAt(pp) {
        return this.pU.get(pp)
      }
      setOperationAt(pp, ip) {
        this.pU.has(pp) && this.pU.set(pp, ip)
      }
      forEach(pp) {
        this.forEachWithCtx(pp, Ki)
      }
      forEachWithCtx(pp, ip) {
        const cp = this.pureOps;
        if (cp.length > 0) {
          let Op = 0,
            op = 0;
          for (const [Ip, Sp] of this.pU) {
            for (; Op < cp.length && cp[Op][0] <= op;) {
              const op = cp[Op++][1];
              ip(pp, -op, op)
            }
            ip(pp, Ip, Sp), op++
          }
          for (; Op < cp.length;) {
            const op = cp[Op++][1];
            ip(pp, -op, op)
          }
        } else
          for (const [Op, op] of this.pU) ip(pp, Op, op)
      }
      size() {
        return this.pU.size + this.pureOps.length
      }
      has() {
        return this.pU.size > 0 || this.pureOps.length > 0
      }
      reset() {
        this.pU.clear(), this.pureOps.length = 0
      }
      shift(pp) {
        const ip = new Map;
        for (const [cp, Op] of this.pU) ip.set(cp + pp, Op);
        this.pU = ip
      }
    }

    function ic(pp) {
      return 16843009 * ((pp = (858993459 & (pp -= pp >>> 1 & 1431655765)) + (pp >>> 2 & 858993459)) + (pp >>> 4) & 252645135) >>> 24
    }

    function cc(pp) {
      if (void 0 === pp) return 0;
      let ip = 0;
      for (let cp = 0, Op = pp.length; cp < Op; cp++) {
        const Op = pp[cp];
        Op < 32 && (ip |= 1 << Op)
      }
      return ip
    }

    function Oc(pp) {
      const ip = pp.constructor;
      if (Object.prototype.hasOwnProperty.call(ip, mp)) return ip[mp];
      const cp = ip[Symbol.metadata],
        Op = si.isValidInstance(pp),
        op = (cp?.[Cp]?.length ?? 0) > 0,
        Ip = function(pp) {
          const ip = [],
            cp = [],
            Op = [],
            op = [],
            Ip = pp?.[qp];
          if (void 0 === Ip) return {
            names: ip,
            types: cp,
            tags: Op,
            encoders: op
          };
          const Sp = pp[Rp];
          for (let xp = 0; xp <= Ip; xp++) {
            const Ip = pp[xp];
            void 0 !== Ip ? (ip[xp] = Ip.name, cp[xp] = Ip.type, Op[xp] = Ip.tag, op[xp] = Sp?.[xp]) : (ip[xp] = void 0, cp[xp] = void 0, Op[xp] = void 0, op[xp] = void 0)
          }
          return {
            names: ip,
            types: cp,
            tags: Op,
            encoders: op
          }
        }(cp),
        Sp = Op && !op ? void 0 : ip[Ap],
        xp = {
          encoder: ip[Yp],
          filter: Sp,
          metadata: cp,
          isSchema: Op,
          filterBitmask: Op ? cc(cp?.[Cp]) : 0,
          hasAnyFullStateOnly: (cp?.[Jp]?.length ?? 0) > 0,
          hasAnyUnreliable: (cp?.[Xp]?.length ?? 0) > 0,
          hasAnyStream: (cp?.[Bp]?.length ?? 0) > 0,
          hasAnyView: op,
          fullStateOnlyBitmask: cc(cp?.[Jp]),
          unreliableBitmask: cc(cp?.[Xp]),
          streamBitmask: cc(cp?.[Bp]),
          names: Ip.names,
          types: Ip.types,
          tags: Ip.tags,
          encoders: Ip.encoders
        };
      return Object.defineProperty(ip, mp, {
        value: xp,
        enumerable: !1,
        writable: !0,
        configurable: !0
      }), xp
    }

    function oc(pp, ip) {
      if (void 0 !== pp.parentRef && ip(pp.parentRef, pp._parentIndex)) return !0;
      for (let cp = pp.extraParents; void 0 !== cp; cp = cp.next)
        if (ip(cp.ref, cp.index)) return !0;
      return !1
    }
    const Ic = (pp, ip) => {
        pp.isFieldUnreliable(ip) ? pp.ensureUnreliableRecorder().record(ip, op.ADD) : pp.record(ip, op.ADD)
      },
      Sc = (pp, ip) => pp(ip);

    function xc(pp, ip, cp) {
      const Op = pp.refTarget;
      if (void 0 !== Op[wp]) {
        if (pp.isPatchOnly) return;
        if (Array.isArray(Op.items)) {
          const pp = Op.items;
          for (let Op = 0, op = pp.length; Op < op; Op++) void 0 !== pp[Op] && cp(ip, Op)
        } else if (void 0 !== Op.journal)
          for (const [pp, op] of Op.journal.keyByIndex) Op.$items.has(op) && cp(ip, pp);
        else if (void 0 !== Op.$items)
          for (const pp of Op.$items.keys()) cp(ip, pp)
      } else {
        const op = pp.metadata;
        if (!op) return;
        const Ip = op[qp] ?? -1,
          Sp = op[Qp],
          xp = pp.encDescriptor.names;
        for (let pp = 0; pp <= Ip; pp++) {
          const op = xp[pp];
          if (void 0 === op) continue;
          if (Sp && Sp.includes(pp)) continue;
          const Ip = Op[op];
          void 0 !== Ip && null !== Ip && cp(ip, pp)
        }
      }
    }

    function Lc(pp, ip, cp, Op) {
      ! function(pp, ip, cp) {
        if (!ip) return;
        const Op = ip[Up],
          op = !Op._isSchema;
        let Ip;
        op ? (ip = Op.parent, cp = Op.parentIndex, Ip = ip?.[Up].metadata) : Ip = Op.metadata;
        const Sp = (Ip?.[lp]?.includes(cp) ? qc : 0) | (Ip?.[Jp]?.includes(cp) ? Mc : 0),
          xp = Op.flags & Xc | Sp,
          Lp = pp.flags;
        pp.flags = Lp | xp;
        xp & ~Lp & Mc && (pp.reset(), pp.unreliableRecorder?.reset());
        const Yp = pp.root?.types;
        if (!Yp?.hasFilters) return;
        const Dp = Ip?.[Cp]?.includes(cp) ?? !1,
          Ap = Ip?.[Bp]?.includes(cp) ?? !1,
          Pp = Op.isFiltered || Dp || Ap;
        if (pp.isFiltered = Pp, Ap && !op) {
          pp.isStreamCollection = !0;
          const ip = Mi(pp.ref);
          if (void 0 === ip.priority) {
            const pp = si.getStreamPriority(Ip, cp);
            void 0 !== pp && (ip.priority = pp)
          }
          pp.root?.registerStream(pp.ref)
        }
        if (Pp) {
          const ip = Dc(pp);
          pp.isVisibilitySharedWithParent = Op.isFiltered && ip && !Ap && (!Dp || op && Ip[cp].tag !== vO)
        }
      }(pp, ip, cp), pp.isFullStateOnly || (pp.has() && pp.root?.enqueueChangeTree(pp), pp.unreliableRecorder?.has() && pp.root?.enqueueUnreliable(pp), pp.has() || pp.unreliableRecorder?.has() || pp.root?.enqueueChangeTree(pp))
    }

    function Yc(pp) {
      const ip = pp.pendingFilterRefresh;
      for (let cp = 0; cp < ip.length; cp++) {
        const pp = ip[cp];
        0 !== (pp.flags & Ec) && Ac(pp)
      }
      ip.length = 0
    }

    function Dc(pp) {
      return pp._isSchema || "string" !== typeof pp.refTarget[wp]
    }

    function Ac(pp) {
      pp.flags &= ~Ec;
      const ip = pp.root;
      if (void 0 === ip || void 0 === pp.parentRef) return;
      const cp = Dc(pp);
      let Op = wc(pp, pp.parentRef, pp._parentIndex, cp);
      for (let Ip = pp.extraParents; void 0 !== Ip && Op !== Uc; Ip = Ip.next) Op |= wc(pp, Ip.ref, Ip.index, cp);
      if (0 === Op) return;
      pp.isVisibilitySharedWithParent = 0 !== (Op & yc);
      const op = 0 === (Op & Wc);
      op !== pp.isFiltered && (pp.isFiltered = op, op || pp.isFullStateOnly || (pp.forEachLiveWithCtx(pp, Ic), pp.has() && ip.enqueueChangeTree(pp), pp.unreliableRecorder?.has() && ip.enqueueUnreliable(pp)), pp.forEachChildWithCtx(pp, vc))
    }
    const Pc = 1,
      Wc = 2,
      yc = 4,
      Uc = Pc | Wc | yc;

    function wc(pp, ip, cp, Op) {
      const op = ip[Up];
      if (op.root !== pp.root || ! function(pp, ip, cp) {
          const Op = ip.refTarget;
          if (ip.isArray) {
            const ip = Op.items,
              op = ip[cp];
            if (void 0 !== op && op[Up] === pp) return !0;
            for (let cp = 0, Op = ip.length; cp < Op; cp++) {
              const Op = ip[cp];
              if (void 0 !== Op && Op[Up] === pp) return !0
            }
            return !1
          }
          const op = ip.getValue(cp);
          return void 0 !== op && op[Up] === pp
        }(pp, op, cp)) return 0;
      op.flags & Ec && Ac(op);
      let Ip = Pc;
      if (op._isSchema) {
        void 0 !== op.encDescriptor.tags[cp] || op.isFieldStream(cp) || (op.isFiltered ? Op && (Ip |= yc) : Ip |= Wc)
      } else if (op.isFiltered) {
        if (Op && !op.isStreamCollection) {
          const pp = op.parent?.[Up];
          (pp?._isSchema ? pp.encDescriptor.tags[op.parentIndex] : void 0) !== vO && (Ip |= yc)
        }
      } else Ip |= Wc;
      return Ip
    }
    const vc = (pp, ip, cp) => {
      Ac(ip)
    };

    function tc(pp, ip, cp, Op) {
      if (pp.addParent(ip, Op), !cp) return;
      const op = cp.add(pp);
      cp !== pp.root && (pp.root = cp, Lc(pp, ip, Op));
      const Ip = ip?.[Up];
      if (void 0 !== Ip && void 0 !== Ip.subscribedViews && void 0 !== ip[wp] && function(pp, ip, cp, Op) {
          const op = pp.subscribedViews;
          if (void 0 === op) return;
          const Ip = pp.isStreamCollection,
            Sp = Ip ? pp.ref : void 0,
            xp = Ip ? void 0 : cp[Up];
          for (let Lp = 0, Yp = op.length; Lp < Yp; Lp++) {
            let pp = op[Lp];
            for (; 0 !== pp;) {
              const cp = pp & -pp;
              pp ^= cp;
              const Yp = 32 * Lp + (31 - Math.clz32(cp)),
                Dp = Op.activeViews.get(Yp),
                Ap = Dp?.deref();
              void 0 !== Ap ? Ip ? Qi(Sp, Yp, ip) : void 0 !== xp && Ap.markVisible(xp) : op[Lp] &= ~cp
            }
          }
        }(Ip, Op, pp.ref, cp), op) {
        let ip = uc[jc];
        void 0 === ip && (ip = {
          parentRef: void 0,
          root: void 0
        }, uc[jc] = ip), ip.parentRef = pp.ref, ip.root = cp, jc++, dc(pp, ip, kc), jc--
      }
    }

    function Hc(pp, ip, cp) {
      pp(ip, cp)
    }

    function dc(pp, ip, cp) {
      const Op = pp.refTarget;
      if (Op[wp]) {
        if ("string" !== typeof Op[wp]) {
          const pp = Op.items;
          if (void 0 !== pp)
            for (let Op = 0, op = pp.length; Op < op; Op++) {
              const op = pp[Op];
              op && cp(ip, op[Up], Op)
            } else {
              const pp = Op.$items,
                op = Op._collectionIndexes;
              for (const Op of pp.keys()) {
                const Ip = pp.get(Op);
                Ip && cp(ip, Ip[Up], op?.[Op] ?? Op)
              }
            }
        }
      } else {
        const op = pp.metadata,
          Ip = op?.[Mp];
        if (!Ip) return;
        const Sp = pp.encDescriptor.names;
        for (let pp = 0, xp = Ip.length; pp < xp; pp++) {
          const op = Ip[pp],
            xp = Op[Sp[op]];
          xp && cp(ip, xp[Up], op)
        }
      }
    }

    function ec(pp, ip, cp) {
      ip.root !== pp ? ip.setRoot(pp) : pp.add(ip)
    }
    const uc = [];
    let jc = 0;

    function kc(pp, ip, cp) {
      if (ip.root === pp.root) return pp.root.add(ip), void pp.root.moveNextToParent(ip);
      ip.setParent(pp.parentRef, pp.root, cp)
    }

    function mc(pp, ip, cp) {
      const Op = (3 & cp) << 3;
      return cp < 4 ? pp >>> Op & 255 : ip >>> Op & 255
    }
    const Rc = (pp, ip, cp) => pp(ip, cp);
    const qc = 16,
      Mc = 32,
      Cc = 128,
      Ec = 256,
      Xc = qc | Mc;
    class lc {
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
      set isFiltered(pp) {
        this.flags = pp ? 1 | this.flags : -2 & this.flags
      }
      get isVisibilitySharedWithParent() {
        return 0 !== (2 & this.flags)
      }
      set isVisibilitySharedWithParent(pp) {
        this.flags = pp ? 2 | this.flags : -3 & this.flags
      }
      get isNew() {
        return 0 !== (4 & this.flags)
      }
      set isNew(pp) {
        this.flags = pp ? 4 | this.flags : -5 & this.flags
      }
      get isUnreliable() {
        return 0 !== (8 & this.flags)
      }
      set isUnreliable(pp) {
        this.flags = pp ? 8 | this.flags : -9 & this.flags
      }
      get isPatchOnly() {
        return 0 !== (this.flags & qc)
      }
      set isPatchOnly(pp) {
        this.flags = pp ? this.flags | qc : this.flags & ~qc
      }
      get isFullStateOnly() {
        return 0 !== (this.flags & Mc)
      }
      set isFullStateOnly(pp) {
        this.flags = pp ? this.flags | Mc : this.flags & ~Mc
      }
      get isStreamCollection() {
        return 0 !== (64 & this.flags)
      }
      set isStreamCollection(pp) {
        this.flags = pp ? 64 | this.flags : -65 & this.flags
      }
      get needsRestage() {
        return 0 !== (this.flags & Cc)
      }
      set needsRestage(pp) {
        this.flags = pp ? this.flags | Cc : -129 & this.flags
      }
      get hasFilteredFields() {
        return this.isFiltered || this.encDescriptor.hasAnyView
      }
      ensureUnreliableRecorder() {
        return void 0 === this.unreliableRecorder && (this.unreliableRecorder = this._isSchema ? new Vi(this.metadata?.[qp] ?? 0) : new pc), this.unreliableRecorder
      }
      isFieldUnreliable(pp) {
        const ip = this.encDescriptor;
        return !!ip.hasAnyUnreliable && (pp < 32 ? 0 !== (ip.unreliableBitmask & 1 << pp) : si.hasUnreliableAtIndex(this.metadata, pp))
      }
      isFieldFullStateOnly(pp) {
        if (this.isFullStateOnly) return !0;
        const ip = this.encDescriptor;
        return !!ip.hasAnyFullStateOnly && (pp < 32 ? 0 !== (ip.fullStateOnlyBitmask & 1 << pp) : si.hasFullStateOnlyAtIndex(this.metadata, pp))
      }
      isFieldStream(pp) {
        const ip = this.encDescriptor;
        return !!ip.hasAnyStream && (pp < 32 ? 0 !== (ip.streamBitmask & 1 << pp) : si.hasStreamAtIndex(this.metadata, pp))
      }
      constructor(pp) {
        let ip = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : pp;
        this.ref = pp, this.refTarget = ip;
        const cp = Oc(pp);
        this.encDescriptor = cp, this.metadata = cp.metadata;
        const Op = cp.isSchema;
        if (this._isSchema = Op, this.ops = void 0, this.collDirty = void 0, this.collPureOps = void 0, Op) {
          const pp = this.metadata?.[qp] ?? 0;
          pp > 7 && (this.ops = new Uint8Array(pp + 1))
        } else this.collDirty = new Map
      }
      _opAt(pp) {
        const ip = this.ops;
        if (void 0 !== ip) return ip[pp];
        const cp = (3 & pp) << 3;
        return pp < 4 ? this.opsLow >>> cp & 255 : this.opsHigh >>> cp & 255
      }
      _opPut(pp, ip) {
        const cp = this.ops;
        if (void 0 !== cp) return void(cp[pp] = ip);
        const Op = (3 & pp) << 3,
          op = ~(255 << Op);
        pp < 4 ? this.opsLow = this.opsLow & op | ip << Op : this.opsHigh = this.opsHigh & op | ip << Op
      }
      _markDirty(pp) {
        pp < 32 ? this.dirtyLow |= 1 << pp : this.dirtyHigh |= 1 << pp - 32
      }
      record(pp, ip) {
        if (this._isSchema) {
          const cp = this._opAt(pp);
          0 === cp ? this._opPut(pp, ip) : (cp === op.DELETE || cp === op.ADD && ip === op.DELETE_AND_ADD) && this._opPut(pp, op.DELETE_AND_ADD), this._markDirty(pp)
        } else {
          const cp = this.collDirty,
            Op = cp.get(pp);
          let Ip;
          Ip = void 0 === Op ? ip : Op === op.DELETE || Op === op.ADD && ip === op.DELETE_AND_ADD ? op.DELETE_AND_ADD : Op, cp.set(pp, Ip)
        }
      }
      recordDelete(pp, ip) {
        this._isSchema ? (this._opPut(pp, ip), this._markDirty(pp)) : this.collDirty.set(pp, ip)
      }
      recordRaw(pp, ip) {
        this._isSchema ? (this._opPut(pp, ip), this._markDirty(pp)) : this.collDirty.set(pp, ip)
      }
      recordPure(pp) {
        if (this._isSchema) throw new Error("ChangeTree (Schema): pure operations are not supported");
        (this.collPureOps ??= []).push([this.collDirty.size, pp])
      }
      operationAt(pp) {
        if (this._isSchema) {
          const ip = this._opAt(pp);
          return 0 === ip ? void 0 : ip
        }
        return this.collDirty.get(pp)
      }
      setOperationAt(pp, ip) {
        if (this._isSchema) this._opPut(pp, ip);
        else {
          const cp = this.collDirty;
          cp.has(pp) && cp.set(pp, ip)
        }
      }
      forEach(pp) {
        this.forEachWithCtx(pp, Rc)
      }
      forEachWithCtx(pp, ip) {
        if (this._isSchema) {
          let cp = this.dirtyLow,
            Op = this.dirtyHigh;
          const op = this.ops;
          if (void 0 !== op) {
            for (; 0 !== cp;) {
              const Op = cp & -cp,
                Ip = 31 - Math.clz32(Op);
              cp ^= Op, ip(pp, Ip, op[Ip])
            }
            for (; 0 !== Op;) {
              const cp = Op & -Op,
                Ip = 31 - Math.clz32(cp) + 32;
              Op ^= cp, ip(pp, Ip, op[Ip])
            }
          } else {
            const Op = this.opsLow,
              op = this.opsHigh;
            for (; 0 !== cp;) {
              const Ip = cp & -cp,
                Sp = 31 - Math.clz32(Ip);
              cp ^= Ip, ip(pp, Sp, mc(Op, op, Sp))
            }
          }
          return
        }
        const cp = this.collDirty,
          Op = this.collPureOps;
        if (void 0 !== Op && Op.length > 0) {
          let op = 0,
            Ip = 0;
          for (const [Sp, xp] of cp) {
            for (; op < Op.length && Op[op][0] <= Ip;) {
              const cp = Op[op++][1];
              ip(pp, -cp, cp)
            }
            ip(pp, Sp, xp), Ip++
          }
          for (; op < Op.length;) {
            const cp = Op[op++][1];
            ip(pp, -cp, cp)
          }
        } else
          for (const [op, Ip] of cp) ip(pp, op, Ip)
      }
      size() {
        return this._isSchema ? ic(this.dirtyLow) + ic(this.dirtyHigh) : this.collDirty.size + (this.collPureOps?.length ?? 0)
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
      insertAt(pp, ip) {
        if (this._isSchema) throw new Error("ChangeTree (Schema): insertAt is not supported");
        const cp = this.collDirty,
          Op = new Map,
          Ip = !this.paused && !this.isFullStateOnly;
        if (pp > 0)
          for (const [op, Sp] of cp) op < pp && Op.set(op, Sp);
        if (Ip)
          for (let Sp = 0; Sp < ip; Sp++) Op.set(pp + Sp, op.ADD);
        for (const [op, Sp] of cp) op >= pp && Op.set(op + ip, Sp);
        this.collDirty = Op, Ip && this.root?.enqueueChangeTree(this)
      }
      removeAt(pp, ip) {
        if (this._isSchema) throw new Error("ChangeTree (Schema): removeAt is not supported");
        const cp = this.collDirty,
          Op = pp + ip;
        let op = !1;
        for (const Sp of cp.keys())
          if (Sp >= Op) {
            op = !0;
            break
          } if (!op) {
          for (let ip = pp; ip < Op; ip++) cp.delete(ip);
          return
        }
        const Ip = new Map;
        for (const [Sp, xp] of cp) Sp < pp ? Ip.set(Sp, xp) : Sp >= Op && Ip.set(Sp - ip, xp);
        this.collDirty = Ip
      }
      unshift(pp) {
        this.insertAt(0, pp)
      }
      setRoot(pp) {
        ! function(pp, ip) {
          pp.root = ip;
          const cp = ip.add(pp);
          Lc(pp, pp.parent, pp.parentIndex), cp && dc(pp, ip, ec)
        }(this, pp)
      }
      setParent(pp, ip, cp) {
        tc(this, pp, ip, cp)
      }
      forEachChild(pp) {
        dc(this, pp, Hc)
      }
      forEachChildWithCtx(pp, ip) {
        dc(this, pp, ip)
      }
      forEachLive(pp) {
        xc(this, pp, Sc)
      }
      forEachLiveWithCtx(pp, ip) {
        xc(this, pp, ip)
      }
      operation(pp) {
        this.paused || this.isFullStateOnly || (this.recordPure(pp), this.root?.enqueueChangeTree(this))
      }
      _routeAndRecord(pp, ip, cp) {
        if (!this.paused && !this.isFieldFullStateOnly(pp)) {
          if (this.isFieldUnreliable(pp) && !this.isNew) {
            const Op = this.ensureUnreliableRecorder();
            return cp ? Op.recordRaw(pp, ip) : Op.record(pp, ip), void this.root?.enqueueUnreliable(this)
          }
          cp ? this.recordRaw(pp, ip) : this.record(pp, ip), this.root?.enqueueChangeTree(this)
        }
      }
      change(pp) {
        let ip = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : op.ADD;
        this._routeAndRecord(pp, ip, !1)
      }
      indexedOperation(pp, ip) {
        this._routeAndRecord(pp, ip, !0)
      }
      getChange(pp) {
        return this.operationAt(pp)
      }
      pause() {
        this.paused = !0
      }
      resume() {
        this.paused = !1
      }
      untracked(pp) {
        const ip = this.paused;
        this.paused = !0;
        try {
          return pp()
        } finally {
          this.paused = ip
        }
      }
      markDirty(pp) {
        let ip = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : op.ADD;
        const cp = this.paused;
        this.paused = !1;
        try {
          this.change(pp, ip)
        } finally {
          this.paused = cp
        }
      }
      getValue(pp) {
        let ip = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return this.refTarget[Pp](pp, ip)
      }
      delete(pp, ip) {
        if (void 0 === pp) {
          try {
            throw new Error(`@colyseus/schema ${this.ref.constructor.name}: trying to delete non-existing index '${pp}'`)
          } catch (Lo) {
            console.warn(Lo)
          }
          return
        }
        if (this.paused || this.isFieldFullStateOnly(pp)) return this.getValue(pp);
        const cp = this.isFieldUnreliable(pp) && !this.isNew;
        cp ? this.ensureUnreliableRecorder().recordDelete(pp, ip ?? op.DELETE) : this.recordDelete(pp, ip ?? op.DELETE);
        const Op = this.getValue(pp);
        return Op && Op[Up] && this.root?.remove(Op[Up]), cp ? this.root?.enqueueUnreliable(this) : this.root?.enqueueChangeTree(this), Op
      }
      endEncode() {
        this.reset(), this.changesNode = void 0, this._isSchema || this.refTarget[tp]?.(), this.isNew = !1
      }
      endEncodeUnreliable() {
        this.unreliableRecorder?.reset(), this.unreliableChangesNode = void 0, this._isSchema || this.refTarget[tp]?.()
      }
      discard() {
        this._isSchema || this.refTarget[tp]?.(), this.reset(), this.unreliableRecorder?.reset()
      }
      discardAll() {
        const pp = pp => {
          if (pp < 0) return;
          const ip = this.getValue(pp);
          ip && ip[Up] && ip[Up].discardAll()
        };
        this.forEach(pp), this.unreliableRecorder?.forEach(pp), this.discard()
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
      addParent(pp, ip) {
        ! function(pp, ip, cp) {
          if (pp.parentRef) {
            if (pp.parentRef[Up] === ip[Up]) return void(pp._parentIndex = cp);
            if (oc(pp, ((pp, cp) => pp[Up] === ip[Up]))) return void(pp._parentIndex = cp)
          }
          void 0 === pp.parentRef ? (pp.parentRef = ip, pp._parentIndex = cp) : (pp.extraParents = {
            ref: pp.parentRef,
            index: pp._parentIndex,
            next: pp.extraParents
          }, pp.parentRef = ip, pp._parentIndex = cp)
        }(this, pp, ip)
      }
      setParentIndex(pp, ip) {
        ! function(pp, ip, cp) {
          if (void 0 !== pp.extraParents)
            if (pp.parentRef[Up] !== ip[Up]) {
              for (let Op = pp.extraParents; void 0 !== Op; Op = Op.next)
                if (Op.ref[Up] === ip[Up]) return void(Op.index = cp)
            } else pp._parentIndex = cp;
          else pp._parentIndex = cp
        }(this, pp, ip)
      }
      removeParent() {
        return function(pp, ip) {
          if (pp.parentRef && pp.parentRef[Up] === ip[Up]) return pp.extraParents ? (pp.parentRef = pp.extraParents.ref, pp._parentIndex = pp.extraParents.index, pp.extraParents = pp.extraParents.next) : (pp.parentRef = void 0, pp._parentIndex = void 0), !0;
          let cp = pp.extraParents,
            Op = null;
          for (; cp;) {
            if (cp.ref[Up] === ip[Up]) return Op ? Op.next = cp.next : pp.extraParents = cp.next, !0;
            Op = cp, cp = cp.next
          }
          return void 0 === pp.parentRef
        }(this, arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.parent)
      }
      findParent(pp) {
        return function(pp, ip) {
          if (void 0 !== pp.parentRef && ip(pp.parentRef, pp._parentIndex)) return {
            ref: pp.parentRef,
            index: pp._parentIndex
          };
          for (let cp = pp.extraParents; void 0 !== cp; cp = cp.next)
            if (ip(cp.ref, cp.index)) return {
              ref: cp.ref,
              index: cp.index
            }
        }(this, pp)
      }
      hasParent(pp) {
        return oc(this, pp)
      }
      indexInParent(pp) {
        return function(pp, ip) {
          if (pp.parentRef && pp.parentRef[Up] === ip[Up]) return pp._parentIndex;
          for (let cp = pp.extraParents; void 0 !== cp; cp = cp.next)
            if (cp.ref[Up] === ip[Up]) return cp.index
        }(this, pp)
      }
      getAllParents() {
        return function(pp) {
          const ip = [];
          pp.parentRef && ip.push({
            ref: pp.parentRef,
            index: pp._parentIndex
          });
          let cp = pp.extraParents;
          for (; cp;) ip.push({
            ref: cp.ref,
            index: cp.index
          }), cp = cp.next;
          return ip
        }(this)
      }
    }
    class Qc {
      ref;
      root = void 0;
      parentRef = void 0;
      paused = !1;
      isNew = !1;
      flags = 0;
      constructor(pp) {
        this.ref = pp
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
      untracked(pp) {
        return pp()
      }
      markDirty() {}
      forEachChild(pp) {
        const ip = this.ref;
        if (ip[wp]) {
          if ("string" !== typeof ip[wp])
            for (const [cp, Op] of ip.entries()) Op && pp(Op[Up], ip._collectionIndexes?.[cp] ?? cp);
          return
        }
        const cp = ip.constructor,
          Op = cp?.[Symbol.metadata];
        if (!Op) return;
        const op = Op[Mp] ?? [];
        for (let Ip = 0; Ip < op.length; Ip++) {
          const cp = op[Ip],
            Sp = ip[Op[cp].name];
          Sp && pp(Sp[Up], cp)
        }
      }
      forEachChildWithCtx(pp, ip) {
        this.forEachChild(((cp, Op) => ip(pp, cp, Op)))
      }
      forEachLive() {}
      forEachLiveWithCtx() {}
      forEach() {}
    }

    function Jc(pp) {
      let ip = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : pp;
      var cp;
      Object.defineProperty(pp, Up, {
        value: (cp = ip, new Qc(cp)),
        enumerable: !1,
        writable: !0
      })
    }

    function Bc(pp, ip, cp, Op, Ip, Sp, Lp) {
      void 0 !== Lp ? Lp(ip, Op, Sp) : "string" === typeof cp ? Oi[cp]?.(ip, Op, Sp) : null != cp[Symbol.metadata] ? (Oi.number(ip, Op[xp], Sp), (Ip & op.ADD) === op.ADD && pp.tryEncodeTypeId(ip, cp, Op.constructor, Sp)) : Oi.number(ip, Op[xp], Sp)
    }
    const Nc = function(pp, ip, cp, Op, Ip, Sp, xp, Lp) {
        if (ip[Sp.offset++] = 255 & (Op | Ip), Ip === op.DELETE) return;
        const Yp = cp.encDescriptor,
          Dp = cp.ref,
          Ap = Dp[ep][Op] ?? Dp[Yp.names[Op]];
        Bc(pp, ip, Yp.types[Op], Ap, Ip, Sp, Yp.encoders[Op])
      },
      Tc = function(pp, ip, cp, Op, Ip, Sp) {
        if (ip[Sp.offset++] = 255 & Ip, Oi.number(ip, Op, Sp), Ip === op.DELETE) return;
        const xp = cp.ref;
        if ((Ip & op.ADD) === op.ADD) {
          const pp = xp.$indexes.get(Op);
          Oi.string(ip, pp, Sp)
        }
        Bc(pp, ip, xp[wp], xp[Pp](Op), Ip, Sp)
      },
      fc = function(pp, ip, cp, Op, Ip, Sp) {
        if (ip[Sp.offset++] = 255 & Ip, Oi.number(ip, Op, Sp), Ip === op.DELETE) return;
        const xp = cp.ref;
        Bc(pp, ip, xp[wp], xp[Pp](Op), Ip, Sp)
      },
      bc = function(pp, ip, cp, Op, Ip, Sp) {
        const xp = cp.ref;
        (Ip & op.ADD) === op.ADD && "function" === typeof xp.set ? Tc(pp, ip, cp, Op, Ip, Sp) : fc(pp, ip, cp, Op, Ip, Sp)
      },
      hc = function(pp, ip, cp, Op, Ip, Sp, Lp, Yp) {
        const Dp = cp.refTarget,
          Ap = Dp[wp],
          Wp = "string" !== typeof Ap;
        let yp;
        if (Yp && cp.isFiltered && Wp) {
          const pp = Dp.tmpItems[Op];
          if (!pp) return;
          if (yp = pp[xp], Ip === op.DELETE) Ip = op.DELETE_BY_REFID;
          else if ((Ip & op.ADD) === op.ADD) Ip = op.ADD_BY_REFID;
          else if ((Ip & op.MOVE) === op.MOVE) return
        } else if (Ip === op.DELETE && Wp) {
          const pp = Dp.tmpItems[Op];
          if (!pp) return;
          yp = pp[xp], Ip = op.DELETE_BY_REFID
        } else yp = Op;
        if (ip[Sp.offset++] = 255 & Ip, Oi.number(ip, yp, Sp), Ip === op.DELETE || Ip === op.DELETE_BY_REFID) return;
        Bc(pp, ip, Ap, Dp[Pp](Op, Lp), Ip, Sp)
      };

    function ac(pp, ip, cp, Op, Ip, Sp, Lp) {
      const Yp = pp.resyncVisited;
      let Dp = Yp.get(pp.currentRefId);
      if (void 0 === Dp && Yp.set(pp.currentRefId, Dp = new Set), Dp.add(Op), void 0 !== Ip && cp === op.ADD && Ip !== Sp) {
        const cp = Ip[xp];
        void 0 !== cp && (pp.root.removeRef(cp), Lp?.push({
          ref: ip,
          refId: pp.currentRefId,
          op: op.DELETE,
          dynamicIndex: Op,
          value: void 0,
          previousValue: Ip
        }))
      }
    }

    function nc(pp, ip, cp, Op) {
      const op = ip[xp];
      if (void 0 === op || cp.has(op)) return;
      cp.add(op);
      const Ip = ip.constructor[Symbol.metadata],
        Sp = Ip?.[Mp];
      if (void 0 === Sp) return;
      const Lp = Ip[lp];
      for (let xp = 0; xp < Sp.length; xp++) {
        const op = Sp[xp];
        if (void 0 !== Lp && Lp.includes(op)) continue;
        const Yp = Ip[op],
          Dp = ip[Yp.name];
        Dp && (XO.is(Yp.type) ? nc(pp, Dp, cp, Op) : Fc(pp, Dp, cp, Op))
      }
    }

    function Fc(pp, ip, cp, Op) {
      const Ip = ip[vp] ?? ip,
        Sp = Ip[xp];
      if (void 0 === Sp || cp.has(Sp)) return;
      cp.add(Sp);
      const Lp = pp.resyncVisited.get(Sp);
      if (void 0 === Lp) return;
      const Yp = pp.root;
      Ip[yp](Lp, ((pp, cp) => {
        Op?.push({
          ref: ip,
          refId: Sp,
          op: op.DELETE,
          dynamicIndex: cp,
          value: void 0,
          previousValue: pp
        });
        const Ip = pp?.[xp];
        void 0 !== Ip && Yp.removeRef(Ip)
      }), (ip => {
        XO.isSchema(ip) && nc(pp, ip, cp, Op)
      }))
    }
    const gc = 1,
      Gc = 2,
      rc = 3,
      Zc = 4,
      zc = 5;

    function sc(pp, ip, cp, Op, Ip, Sp, Lp, Yp, Dp) {
      const Ap = pp.root;
      let Pp;
      if ((ip & op.DELETE) === op.DELETE) {
        const pp = Ip?.[xp];
        void 0 !== pp && Ap.removeRef(pp), ip !== op.DELETE_AND_ADD && cp[Wp](Op), Pp = void 0
      }
      if (ip === op.DELETE);
      else if ("string" === typeof Sp) Pp = ei[Sp](Lp, Yp);
      else if (Ti(Sp)) Pp = function(pp, ip, cp) {
        return bi(pp, (0, ei[pp.wire])(ip, cp))
      }(Sp.quantized, Lp, Yp);
      else if (XO.is(Sp)) {
        const cp = ei.number(Lp, Yp);
        if (Pp = Ap.refs.get(cp), (ip & op.ADD) === op.ADD) {
          const Op = pp.getInstanceType(Lp, Yp, Sp);
          Pp || (Pp = pp.createInstanceOfType(Op)), Ap.addRef(cp, Pp, Pp !== Ip || ip === op.DELETE_AND_ADD && Pp === Ip)
        }
      } else {
        const cp = (yp = Object.keys(Sp)[0], ui[yp]),
          Op = ei.number(Lp, Yp);
        null !== pp.resyncVisited && function(pp, ip) {
          const cp = pp.resyncVisited;
          cp.has(ip) || cp.set(ip, new Set)
        }(pp, Op);
        const Wp = Ap.refs.has(Op) ? Ip || Ap.refs.get(Op) : cp.constructor.initializeForDecoder();
        if (Pp = Wp.clone(!0), Pp[wp] = Object.values(Sp)[0], Ip) {
          let pp = Ip[xp];
          if (void 0 !== pp && Op !== pp) {
            (ip & op.DELETE) !== op.DELETE && Ap.removeRef(pp);
            const cp = Ip.entries();
            let Op;
            for (;
              (Op = cp.next()) && !Op.done;) {
              const [ip, cp] = Op.value;
              "object" === typeof cp && (pp = cp[xp]), Dp?.push({
                ref: Ip,
                refId: pp,
                op: op.DELETE,
                field: ip,
                value: void 0,
                previousValue: cp
              })
            }
          }
        }
        Ap.addRef(Op, Pp, Wp !== Ip || ip === op.DELETE_AND_ADD && Wp === Ip)
      }
      var yp;
      return Pp
    }
    const Kc = function(pp, ip, cp, Op, op) {
        const Ip = ip[cp.offset++],
          Sp = Op.constructor[Symbol.metadata],
          xp = Ip >> 6 << 6,
          Lp = Ip % (xp || 255),
          Yp = Sp[Lp];
        if (void 0 === Yp) return console.warn("@colyseus/schema: field not defined at", {
          index: Lp,
          ref: Op.constructor.name,
          metadata: Sp
        }), -1;
        const Dp = !0 === Yp.deprecated,
          Ap = Dp ? void 0 : Op[Pp](Lp),
          Wp = sc(pp, xp, Op, Lp, Ap, Yp.type, ip, cp, op);
        Dp || (null !== Wp && void 0 !== Wp && (Op[Yp.name] = Wp), Ap !== Wp && op?.push({
          ref: Op,
          refId: pp.currentRefId,
          op: xp,
          field: Yp.name,
          value: Wp,
          previousValue: Ap
        }))
      },
      Vc = function(pp, ip, cp, Op, Ip) {
        const Sp = Op[vp] ?? Op,
          xp = ip[cp.offset++];
        if (xp === op.CLEAR) return pp.removeChildRefs(Sp, Ip), void Sp.clear();
        const Lp = ei.number(ip, cp),
          Yp = Sp[wp],
          Dp = Sp.constructor.COLLECTION_KIND;
        let Ap;
        (xp & op.ADD) === op.ADD ? Dp === gc ? (Ap = ei.string(ip, cp), Sp.setIndex(Lp, Ap)) : Ap = Lp : Ap = Sp.getIndex(Lp);
        const Wp = Sp[Pp](Lp),
          yp = sc(pp, xp, Op, Lp, Wp, Yp, ip, cp, Ip);
        if (null !== pp.resyncVisited && ac(pp, Op, xp, Ap, Wp, yp, Ip), null !== yp && void 0 !== yp) switch (Dp) {
          case gc:
            Sp.$items.set(Ap, yp);
            break;
          case Gc:
            Sp.$setAt(Lp, yp, null !== pp.resyncVisited && xp === op.ADD ? op.REPLACE : xp);
            break;
          case rc:
          case Zc:
          case zc:
            Sp.$items.has(Lp) || (Sp.$items.set(Lp, yp), "number" === typeof Sp.$refId && Lp >= Sp.$refId && (Sp.$refId = Lp + 1));
            break;
          default:
            console.warn(`@colyseus/schema: missing COLLECTION_KIND on ${Sp.constructor?.name} \u2014 item at index ${Lp} was not stored.`)
        }
        Wp !== yp && Ip?.push({
          ref: Op,
          refId: pp.currentRefId,
          op: xp,
          dynamicIndex: Ap,
          value: yp,
          previousValue: Wp
        })
      },
      pO = function(pp, ip, cp, Op, Ip) {
        const Sp = Op[vp] ?? Op;
        let xp, Lp = ip[cp.offset++];
        if (Lp === op.CLEAR) return pp.removeChildRefs(Sp, Ip), void Sp.clear();
        if (Lp === op.REVERSE) return void Sp.items.reverse();
        if (Lp === op.DELETE_BY_REFID) {
          const Lp = ei.number(ip, cp),
            Yp = pp.root.refs.get(Lp);
          if (void 0 === Yp) return;
          if (pp.root.removeRef(Lp), xp = Sp.findIndex((pp => pp === Yp)), -1 === xp) return;
          return Sp[Wp](xp), void Ip?.push({
            ref: Op,
            refId: pp.currentRefId,
            op: op.DELETE,
            dynamicIndex: xp,
            value: void 0,
            previousValue: Yp
          })
        }
        if (Lp === op.ADD_BY_REFID) {
          const Op = ei.number(ip, cp),
            op = pp.root.refs.get(Op);
          op && (xp = Sp.findIndex((pp => pp === op))), -1 !== xp && void 0 !== xp || (xp = Sp.length)
        } else xp = ei.number(ip, cp);
        const Yp = Sp[wp];
        let Dp = xp;
        const Ap = Sp.items[xp],
          Pp = sc(pp, Lp, Op, xp, Ap, Yp, ip, cp, Ip);
        null !== pp.resyncVisited && ac(pp, Op, Lp, xp, Ap, Pp, Ip), null !== Pp && void 0 !== Pp && Pp !== Ap && Sp.$setAt(xp, Pp, null !== pp.resyncVisited && Lp === op.ADD ? op.REPLACE : Lp), Ap !== Pp && Ip?.push({
          ref: Op,
          refId: pp.currentRefId,
          op: Lp,
          dynamicIndex: Dp,
          value: Pp,
          previousValue: Ap
        })
      };
    class iO extends Error {}

    function cO(pp, ip, cp, Op) {
      if (!(pp instanceof ip)) throw new iO(`a '${ip.name}' was expected, but '${pp&&pp.constructor.name}' was provided in ${cp.constructor.name}#${Op}`)
    }
    const OO = (pp, ip) => {
        const cp = pp.toString(),
          Op = ip.toString();
        return cp < Op ? -1 : cp > Op ? 1 : 0
      },
      oO = {
        get: (pp, ip) => "symbol" === typeof ip || isNaN(ip) ? Reflect.get(pp, ip) : pp.items[ip],
        set: (pp, ip, cp) => {
          if ("symbol" !== typeof ip && !isNaN(ip)) {
            if (void 0 === cp || null === cp) pp.$deleteAt(ip);
            else {
              let Op;
              if (cp[Up]) {
                cO(cp, pp[wp], pp, ip);
                const Ip = pp.items[ip];
                pp.isMovingItems ? (Op = pp.$wireIndex(Number(ip)), void 0 !== Ip ? cp[Up].isNew ? pp[Up].indexedOperation(Op, op.MOVE_AND_ADD) : (pp[Up].getChange(Op) & op.DELETE) === op.DELETE ? pp[Up].indexedOperation(Op, op.DELETE_AND_MOVE) : pp[Up].indexedOperation(Op, op.MOVE) : cp[Up].isNew && pp[Up].indexedOperation(Op, op.ADD), cp[Up].setParent(pp, pp[Up].root, Op)) : Op = pp.$changeAt(Number(ip), cp), void 0 !== Ip && Ip[Up].root?.remove(Ip[Up])
              } else Op = pp.$changeAt(Number(ip), cp);
              pp.items[ip] = cp, void 0 !== Op && (pp.tmpItems[Op] = cp)
            }
            return !0
          }
          return Reflect.set(pp, ip, cp)
        },
        deleteProperty: (pp, ip) => ("number" === typeof ip ? pp.$deleteAt(ip) : delete pp[ip], !0),
        has: (pp, ip) => "symbol" === typeof ip || isNaN(Number(ip)) ? Reflect.has(pp, ip) : Reflect.has(pp.items, ip)
      };
    class IO {
      [Up];
      [xp];
      [vp];
      [wp];
      items = [];
      tmpItems = [];
      deletedIndexes = [];
      isMovingItems = !1;
      _needsCompaction = !1;
      static[Yp] = hc;
      static[Dp] = pO;
      static COLLECTION_KIND = Gc;
      static[Ap](pp, ip, cp) {
        if (!cp) return !0;
        const Op = pp[vp] ?? pp;
        return "string" === typeof Op[wp] || cp.isChangeTreeVisible(Op.tmpItems[ip]?.[Up])
      }
      static is(pp) {
        return Array.isArray(pp) || void 0 !== pp.array
      }
      static from(pp) {
        return new IO(...Array.from(pp))
      }
      constructor() {
        this[wp] = void 0, this[vp] = this;
        const pp = new Proxy(this, oO);
        return Object.defineProperty(this, Up, {
          value: new lc(pp, this),
          enumerable: !1,
          writable: !0
        }), arguments.length > 0 && this.push(...arguments), pp
      }
      static initializeForDecoder() {
        const pp = Object.create(IO.prototype);
        pp.items = [], pp.isMovingItems = !1, pp._needsCompaction = !1, pp[wp] = void 0, pp[vp] = pp;
        const ip = new Proxy(pp, oO);
        return Jc(pp, ip), ip
      }
      set length(pp) {
        0 === pp ? this.clear() : pp < this.items.length ? this.splice(pp, this.length - pp) : console.warn("ArraySchema: can't set .length to a higher value than its length.")
      }
      get length() {
        return this.items.length
      }
      pauseTracking() {
        this[Up].pause()
      }
      resumeTracking() {
        this[Up].resume()
      }
      untracked(pp) {
        return this[Up].untracked(pp)
      }
      get isTrackingPaused() {
        return this[Up].paused
      }
      push() {
        const pp = this[vp],
          ip = pp.items,
          cp = pp.tmpItems,
          Op = pp[Up],
          Ip = pp[wp];
        let Sp = cp.length;
        for (let xp = 0, Lp = arguments.length; xp < Lp; xp++, Sp++) {
          const Lp = xp < 0 || arguments.length <= xp ? void 0 : arguments[xp];
          if (void 0 === Lp || null === Lp) return;
          "object" === typeof Lp && Ip && cO(Lp, Ip, pp, xp), Op.indexedOperation(Sp, op.ADD), ip.push(Lp), cp.push(Lp), Lp[Up]?.setParent(this, Op.root, Sp)
        }
        return Sp
      }
      pop() {
        const pp = this[vp],
          ip = pp.tmpItems,
          cp = pp.deletedIndexes;
        let Op = -1;
        for (let Ip = ip.length - 1; Ip >= 0; Ip--)
          if (!0 !== cp[Ip]) {
            Op = Ip;
            break
          } if (Op < 0) return;
        const op = pp.$isUnsentAdd(Op);
        return pp[Up].delete(Op), op ? pp.$cancelAdd(Op) : cp[Op] = !0, pp.items.pop()
      }
      at(pp) {
        return pp < 0 && (pp += this.length), this.items[pp]
      }
      $wireIndex(pp) {
        const ip = this.deletedIndexes;
        if (0 === ip.length) return pp;
        const cp = this.tmpItems;
        let Op = 0;
        for (let op = 0; op < cp.length; op++)
          if (!0 !== ip[op]) {
            if (Op === pp) return op;
            Op++
          } return cp.length + (pp - Op)
      }
      $isUnsentAdd(pp) {
        const ip = this[Up];
        return 0 === (576 & ip.flags) && !ip.paused && "string" !== typeof this[wp] && ip.operationAt(pp) === op.ADD
      }
      $cancelAdd(pp) {
        let ip = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        const cp = this[Up],
          Op = this.tmpItems[pp];
        this.tmpItems.splice(pp, 1), this.deletedIndexes.length > 0 && this.deletedIndexes.splice(pp, 1), cp.removeAt(pp, 1);
        const op = Op?.[Up];
        void 0 !== op && void 0 === op.root && op.removeParent(this), ip && this.$reindexChildren(pp)
      }
      $reindexChildren(pp, ip) {
        if (!this[Up].hasFilteredFields) return;
        if ("string" === typeof this[wp]) return;
        const cp = this.tmpItems,
          Op = cp.length;
        if (void 0 !== ip)
          for (; pp < Op && cp[pp] === ip[pp];) pp++;
        for (let op = pp; op < Op; op++) cp[op]?.[Up]?.setParentIndex(this, op)
      }
      $changeAt(pp, ip) {
        if (void 0 === ip || null === ip) return void console.error("ArraySchema items cannot be null nor undefined; Use `splice(index, 1)` instead.");
        if (this.items[pp] === ip) return;
        const cp = void 0 !== this.items[pp] ? "object" === typeof ip ? op.DELETE_AND_ADD : op.REPLACE : op.ADD,
          Op = this.$wireIndex(pp),
          Ip = this[Up];
        return Ip.change(Op, cp), ip[Up]?.setParent(this, Ip.root, Op), Op
      }
      $deleteAt(pp, ip) {
        this[Up].delete(this.$wireIndex(pp), ip)
      }
      $setAt(pp, ip, cp) {
        cp === op.ADD && void 0 !== this.items[pp] ? this.items.splice(pp, 0, ip) : cp === op.DELETE_AND_MOVE ? (this.items.splice(pp, 1), this.items[pp] = ip) : (pp > this.items.length && (this._needsCompaction = !0), this.items[pp] = ip)
      }
      clear() {
        const pp = this[vp];
        if (0 === pp.items.length) return;
        const ip = pp[Up];
        ip.forEachChild(((pp, cp) => {
          ip.root?.remove(pp)
        })), ip.discard(), ip.operation(op.CLEAR), pp.items.length = 0, pp.tmpItems.length = 0
      } [Hp]() {
        const pp = this[vp] ?? this,
          ip = pp[Up];
        if (ip.isStreamCollection) throw new Error("@colyseus/schema: cannot reset a streamed ArraySchema (pooling not supported).");
        const cp = pp.items;
        for (let Op = 0; Op < cp.length; Op++) cp[Op]?.[Hp]?.();
        pp.items.length = 0, pp.tmpItems.length = 0, pp.deletedIndexes.length = 0, ip.recycle(), pp[xp] = void 0
      }
      concat() {
        return new IO(...this.items.concat(...arguments))
      }
      join(pp) {
        return this.items.join(pp)
      }
      reverse() {
        const pp = this[vp],
          ip = pp[Up];
        if (ip.has() || pp.deletedIndexes.length > 0) {
          const ip = pp.items.slice().reverse();
          return this.clear(), this.push(...ip), this
        }
        return ip.operation(op.REVERSE), pp.items.reverse(), pp.tmpItems.reverse(), pp.$reindexChildren(0), this
      }
      shift() {
        const pp = this[vp],
          ip = pp.items;
        if (0 === ip.length) return;
        const cp = pp[Up],
          Op = pp.deletedIndexes;
        let Ip = 0;
        for (; !0 === Op[Ip];) Ip++;
        const Sp = pp.$isUnsentAdd(Ip);
        return cp.delete(Ip, op.DELETE), Sp ? pp.$cancelAdd(Ip) : Op[Ip] = !0, ip.shift()
      }
      slice(pp, ip) {
        const cp = new IO;
        return cp.push(...this.items.slice(pp, ip)), cp
      }
      sort() {
        let pp = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : OO;
        const ip = this[vp];
        ip.isMovingItems = !0;
        const cp = ip[Up];
        return ip.items.sort(pp).forEach(((pp, ip) => cp.change(ip, op.REPLACE))), ip.tmpItems.sort(pp), ip.$reindexChildren(0), ip.isMovingItems = !1, this
      }
      splice(pp, ip) {
        const cp = this[vp],
          Op = cp[Up],
          Ip = cp.items,
          Sp = cp.tmpItems,
          xp = cp.deletedIndexes,
          Lp = Ip.length,
          Yp = Sp.length;
        for (var Dp = arguments.length, Ap = new Array(Dp > 2 ? Dp - 2 : 0), Pp = 2; Pp < Dp; Pp++) Ap[Pp - 2] = arguments[Pp];
        const Wp = Ap.length,
          yp = [];
        for (let op = 0; op < Yp; op++) !0 !== xp[op] && yp.push(op);
        let wp;
        if (Lp > pp) {
          void 0 === ip && (ip = Lp - pp);
          for (let Ip = pp; Ip < pp + ip; Ip++) {
            const pp = yp[Ip],
              ip = cp.$isUnsentAdd(pp);
            Op.delete(pp, op.DELETE), ip ? (wp ??= []).push(pp) : xp[pp] = !0
          }
        } else ip = 0;
        if (Wp > 0) {
          const Ip = yp[pp] ?? Lp,
            Yp = Math.min(Wp, ip);
          for (let pp = 0; pp < Yp; pp++) {
            const ip = Ip + pp;
            let cp;
            const Lp = void 0 !== wp ? wp.indexOf(ip) : -1; - 1 !== Lp ? (wp.splice(Lp, 1), cp = op.ADD) : cp = xp[ip] ? op.DELETE_AND_ADD : op.ADD, Op.indexedOperation(ip, cp), Sp[ip] = Ap[pp], xp[ip] = !1, Ap[pp][Up]?.setParent(this, Op.root, ip)
          }
          const Dp = Wp - Yp;
          if (Dp > 0) {
            const pp = Ip + Yp;
            Op.insertAt(pp, Dp);
            for (let ip = 0; ip < Dp; ip++) Ap[Yp + ip][Up]?.setParent(this, Op.root, pp + ip);
            xp.length > 0 && xp.splice(pp, 0, ...new Array(Dp).fill(!1)), Sp.splice(pp, 0, ...Ap.slice(Yp)), cp.$reindexChildren(pp + Dp)
          }
        }
        if (void 0 !== wp && wp.length > 0) {
          for (let pp = wp.length - 1; pp >= 0; pp--) cp.$cancelAdd(wp[pp], !1);
          cp.$reindexChildren(wp[0])
        }
        return Op.root?.enqueueChangeTree(Op), Ip.splice(pp, ip, ...Ap)
      }
      unshift() {
        const pp = this[vp],
          ip = pp[Up];
        ip.unshift(arguments.length);
        for (let Op = 0; Op < arguments.length; Op++)(Op < 0 || arguments.length <= Op ? void 0 : arguments[Op])?.[Up]?.setParent(this, ip.root, Op);
        const cp = pp.deletedIndexes;
        return cp.length > 0 && cp.unshift(...new Array(arguments.length).fill(!1)), pp.tmpItems.unshift(...arguments), pp.$reindexChildren(arguments.length), pp.items.unshift(...arguments)
      }
      indexOf(pp, ip) {
        return this.items.indexOf(pp, ip)
      }
      lastIndexOf(pp) {
        let ip = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.length - 1;
        return this.items.lastIndexOf(pp, ip)
      }
      every(pp, ip) {
        return this.items.every(pp, ip)
      }
      some(pp, ip) {
        return this.items.some(pp, ip)
      }
      forEach(pp, ip) {
        return this.items.forEach(pp, ip)
      }
      map(pp, ip) {
        return this.items.map(pp, ip)
      }
      filter(pp, ip) {
        return this.items.filter(pp, ip)
      }
      reduce(pp, ip) {
        return this.items.reduce.apply(this.items, arguments)
      }
      reduceRight(pp, ip) {
        return this.items.reduceRight.apply(this.items, arguments)
      }
      find(pp, ip) {
        return this.items.find(pp, ip)
      }
      findIndex(pp, ip) {
        return this.items.findIndex(pp, ip)
      }
      fill(pp, ip, cp) {
        throw new Error("ArraySchema#fill() not implemented")
      }
      copyWithin(pp, ip, cp) {
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
        return IO
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
      includes(pp, ip) {
        return this.items.includes(pp, ip)
      }
      flatMap(pp, ip) {
        throw new Error("ArraySchema#flatMap() is not supported.")
      }
      flat(pp) {
        throw new Error("ArraySchema#flat() is not supported.")
      }
      findLast() {
        return this.items.findLast.apply(this.items, arguments)
      }
      findLastIndex() {
        for (var pp = arguments.length, ip = new Array(pp), cp = 0; cp < pp; cp++) ip[cp] = arguments[cp];
        return this.items.findLastIndex.apply(this.items, arguments)
      }
      with(pp, ip) {
        const cp = this.items.slice();
        return pp < 0 && (pp += this.length), cp[pp] = ip, new IO(...cp)
      }
      toReversed() {
        return this.items.slice().reverse()
      }
      toSorted(pp) {
        return this.items.slice().sort(pp)
      }
      toSpliced(pp, ip) {
        for (var cp = arguments.length, Op = new Array(cp > 2 ? cp - 2 : 0), op = 2; op < cp; op++) Op[op - 2] = arguments[op];
        const Ip = this.items.slice();
        return Ip.splice.apply(Ip, arguments), Ip
      }
      shuffle() {
        return this.move((pp => {
          let ip = this.items.length;
          for (; 0 != ip;) {
            let pp = Math.floor(Math.random() * ip);
            ip--, [this[ip], this[pp]] = [this[pp], this[ip]]
          }
        }))
      }
      move(pp) {
        return this.isMovingItems = !0, pp(this), this.isMovingItems = !1, this
      } [Pp](pp) {
        let ip = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        const cp = this[vp] ?? this;
        return ip || cp.deletedIndexes[pp] ? cp.items[pp] : cp.tmpItems[pp] || cp.items[pp]
      } [Wp](pp) {
        const ip = this[vp] ?? this;
        ip.items[pp] = void 0, ip._needsCompaction = !0
      } [tp]() {
        const pp = this.tmpItems;
        this.tmpItems = this.items.slice(), this.deletedIndexes.length > 0 && (this.$reindexChildren(0, pp), this.deletedIndexes.length = 0)
      } [dp]() {
        const pp = this[vp] ?? this;
        pp._needsCompaction && (pp._needsCompaction = !1, pp.items = pp.items.filter((pp => void 0 !== pp)))
      } [yp](pp, ip, cp) {
        const Op = this[vp] ?? this,
          op = Op.items;
        let Ip = !1;
        for (let Sp = 0; Sp < op.length; Sp++) {
          const xp = op[Sp];
          pp.has(Sp) ? cp(xp) : (Ip = !0, ip(xp, Sp), Op[Wp](Sp))
        }
        Ip && Op[dp]()
      }
      toArray() {
        return this.items.slice(0)
      }
      toJSON() {
        return this.toArray().map((pp => "function" === typeof pp.toJSON ? pp.toJSON() : pp))
      }
      clone(pp) {
        let ip;
        return pp ? (ip = new IO, ip.push(...this.items)) : ip = new IO(...this.map((pp => pp[Up] ? pp.clone() : pp))), ip
      }
    }
    ki("array", {
      constructor: IO
    });
    class SO {
      keyByIndex = new Map;
      indexByKey = Object.create(null);
      nextIndex = 0;
      snapshots;
      indexOf(pp) {
        const ip = this.indexByKey[pp];
        return void 0 === ip ? void 0 : ip
      }
      assign(pp) {
        const ip = this.nextIndex++;
        return this.indexByKey[pp] = ip, this.keyByIndex.set(ip, pp), ip
      }
      snapshot(pp, ip) {
        (this.snapshots ??= new Map).set(pp, ip)
      }
      forgetSnapshot(pp) {
        this.snapshots?.delete(pp)
      }
      snapshotAt(pp) {
        return this.snapshots?.get(pp)
      }
      setIndex(pp, ip) {
        this.keyByIndex.set(pp, ip), this.indexByKey[ip] = pp
      }
      keyOf(pp) {
        return this.keyByIndex.get(pp)
      }
      cleanupAfterEncode() {
        if (void 0 !== this.snapshots) {
          for (const [pp] of this.snapshots) {
            const ip = this.keyByIndex.get(pp);
            void 0 !== ip && (delete this.indexByKey[ip], this.keyByIndex.delete(pp))
          }
          this.snapshots.clear()
        }
      }
      reset() {
        this.indexByKey = Object.create(null), this.keyByIndex.clear(), this.snapshots?.clear(), this.nextIndex = 0
      }
    }
    class xO {
      [Up];
      [xp];
      childType;
      [wp];
      $items = new Map;
      journal = new SO;
      _stream;
      get maxPerTick() {
        return this._stream?.maxPerTick ?? 32
      }
      set maxPerTick(pp) {
        (this._stream ??= qi()).maxPerTick = pp
      }
      get priority() {
        return this._stream?.priority
      }
      set priority(pp) {
        (this._stream ??= qi()).priority = pp
      }
      get $indexes() {
        return this.journal.keyByIndex
      }
      get _collectionIndexes() {
        return this.journal.indexByKey
      }
      static[Yp] = Tc;
      static[Dp] = Vc;
      static COLLECTION_KIND = gc;
      static[Ap](pp, ip, cp) {
        if (!cp || "string" === typeof pp[wp]) return !0;
        const Op = pp[Pp](ip) ?? pp.journal.snapshotAt(ip);
        return cp.isChangeTreeVisible(Op[Up])
      }
      static is(pp) {
        return void 0 !== pp.map
      }
      constructor(pp) {
        if (Object.defineProperty(this, Up, {
            value: new lc(this),
            enumerable: !1,
            writable: !0
          }), this[wp] = void 0, pp)
          if (pp instanceof Map || pp instanceof xO) pp.forEach(((pp, ip) => this.set(ip, pp)));
          else
            for (const ip in pp) this.set(ip, pp[ip])
      }
      static initializeForDecoder() {
        const pp = Object.create(xO.prototype);
        return pp.$items = new Map, pp.journal = new SO, pp[wp] = void 0, Jc(pp), pp
      } [Symbol.iterator]() {
        return this.$items[Symbol.iterator]()
      }
      get[Symbol.toStringTag]() {
        return this.$items[Symbol.toStringTag]
      }
      static get[Symbol.species]() {
        return xO
      }
      set(pp, ip) {
        if (void 0 === ip || null === ip) throw new Error(`MapSchema#set('${pp}', ${ip}): trying to set ${ip} value on '${pp}'.`);
        "object" === typeof ip && this[wp] && cO(ip, this[wp], this, pp), pp = pp.toString();
        const cp = this[Up],
          Op = void 0 !== ip[Up],
          Ip = this.journal;
        let Sp, xp = Ip.indexOf(pp);
        if (void 0 !== xp) {
          Sp = op.REPLACE;
          const cp = this.$items.get(pp);
          if (cp === ip) return;
          Op && (Sp = op.DELETE_AND_ADD, void 0 !== cp && cp[Up].root?.remove(cp[Up])), void 0 !== Ip.snapshotAt(xp) && Ip.forgetSnapshot(xp)
        } else xp = Ip.assign(pp), Sp = op.ADD;
        return this.$items.set(pp, ip), Sp === op.ADD && cp.isStreamCollection ? void 0 !== cp.root && Ci(this, cp.root, xp) : cp.change(xp, Sp), Op && ip[Up].setParent(this, cp.root, xp), this
      }
      get(pp) {
        return this.$items.get(pp)
      }
      getOrInsert(pp, ip) {
        return this.$items.has(pp) ? this.$items.get(pp) : (this.set(pp, ip), ip)
      }
      getOrInsertComputed(pp, ip) {
        if (this.$items.has(pp)) return this.$items.get(pp);
        const cp = ip(pp);
        return this.set(pp, cp), cp
      }
      delete(pp) {
        if (!this.$items.has(pp)) return !1;
        const ip = this.journal.indexOf(pp),
          cp = this.$items.get(pp),
          Op = this[Up];
        if (Op.isStreamCollection) {
          const op = Op.root;
          let Ip = !1;
          return void 0 !== op && (Ip = Ei(this, op, this[xp], ip)), void 0 !== cp?.[Up] && op?.remove(cp[Up]), this.$items.delete(pp), Ip || this.journal.snapshot(ip, cp), !0
        }
        return this.journal.snapshot(ip, cp), Op.delete(ip), this.$items.delete(pp)
      }
      clear() {
        const pp = this[Up];
        pp.discard(), pp.forEachChild(((ip, cp) => {
          pp.root?.remove(ip)
        })), this.journal.reset(), this.$items.clear(), pp.operation(op.CLEAR)
      } [Hp]() {
        const pp = this[Up];
        if (pp.isStreamCollection) throw new Error("@colyseus/schema: cannot reset a streamed MapSchema (pooling not supported).");
        this.$items.forEach((pp => pp?.[Hp]?.())), this.$items.clear(), this.journal.reset(), pp.recycle(), this[xp] = void 0
      }
      has(pp) {
        return this.$items.has(pp)
      }
      forEach(pp) {
        this.$items.forEach(pp)
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
        this[Up].pause()
      }
      resumeTracking() {
        this[Up].resume()
      }
      untracked(pp) {
        return this[Up].untracked(pp)
      }
      get isTrackingPaused() {
        return this[Up].paused
      }
      setIndex(pp, ip) {
        this.journal.setIndex(pp, ip)
      }
      getIndex(pp) {
        return this.journal.keyOf(pp)
      } [Pp](pp) {
        const ip = this.journal.keyOf(pp);
        return void 0 !== ip ? this.$items.get(ip) : void 0
      } [Wp](pp) {
        const ip = this.journal.keyOf(pp);
        void 0 !== ip && (this.$items.delete(ip), this.journal.keyByIndex.delete(pp))
      } [yp](pp, ip, cp) {
        let Op = null;
        if (this.$items.forEach(((op, Ip) => {
            pp.has(Ip) ? cp(op) : ((Op ??= new Set).add(Ip), ip(op, Ip))
          })), null !== Op) {
          Op.forEach((pp => {
            this.$items.delete(pp), delete this.journal.indexByKey[pp]
          }));
          const pp = [];
          this.journal.keyByIndex.forEach(((ip, cp) => {
            Op.has(ip) && pp.push(cp)
          }));
          for (let ip = 0; ip < pp.length; ip++) this.journal.keyByIndex.delete(pp[ip])
        }
      } [tp]() {
        this.journal.cleanupAfterEncode()
      }
      _dropView(pp) {
        Ji(this, pp)
      }
      _unregister() {}
      toJSON() {
        return Object.fromEntries(Array.from(this, (pp => {
          let [ip, cp] = pp;
          return [ip, "function" === typeof cp.toJSON ? cp.toJSON() : cp]
        })))
      }
      clone(pp) {
        let ip;
        return pp ? ip = Object.assign(new xO, this) : (ip = new xO, this.forEach(((pp, cp) => {
          pp[Up] ? ip.set(cp, pp.clone()) : ip.set(cp, pp)
        }))), ip
      }
    }
    ki("map", {
      constructor: xO
    });
    class LO {
      [Up];
      [xp];
      [wp];
      $items = new Map;
      deletedItems = {};
      $refId = 0;
      _stream;
      get maxPerTick() {
        return this._stream?.maxPerTick ?? 32
      }
      set maxPerTick(pp) {
        (this._stream ??= qi()).maxPerTick = pp
      }
      get priority() {
        return this._stream?.priority
      }
      set priority(pp) {
        (this._stream ??= qi()).priority = pp
      }
      static[Yp] = fc;
      static[Dp] = Vc;
      static COLLECTION_KIND = Zc;
      static[Ap](pp, ip, cp) {
        return !cp || "string" === typeof pp[wp] || cp.isChangeTreeVisible((pp[Pp](ip) ?? pp.deletedItems[ip])[Up])
      }
      static is(pp) {
        return void 0 !== pp.collection
      }
      constructor(pp) {
        Object.defineProperty(this, Up, {
          value: new lc(this),
          enumerable: !1,
          writable: !0
        }), this[wp] = void 0, pp && pp.forEach((pp => this.add(pp)))
      }
      static initializeForDecoder() {
        const pp = Object.create(LO.prototype);
        return pp.$items = new Map, pp.deletedItems = {}, pp.$refId = 0, pp[wp] = void 0, Jc(pp), pp
      }
      add(pp) {
        const ip = this.$refId++,
          cp = this[Up];
        return this.$items.set(ip, pp), cp.isStreamCollection ? void 0 !== cp.root && Ci(this, cp.root, ip) : cp.change(ip), void 0 !== pp[Up] && pp[Up].setParent(this, cp.root, ip), ip
      }
      at(pp) {
        const ip = Array.from(this.$items.keys())[pp];
        return this.$items.get(ip)
      }
      entries() {
        return this.$items.entries()
      }
      delete(pp) {
        const ip = this.$items.entries();
        let cp, Op;
        for (;
          (Op = ip.next()) && !Op.done;)
          if (pp === Op.value[1]) {
            cp = Op.value[0];
            break
          } if (void 0 === cp) return !1;
        const op = this[Up];
        if (op.isStreamCollection) {
          const pp = op.root,
            ip = this.$items.get(cp);
          return void 0 !== pp && Ei(this, pp, this[xp], cp), void 0 !== ip?.[Up] && pp?.remove(ip[Up]), this.deletedItems[cp] = ip, this.$items.delete(cp)
        }
        return this.deletedItems[cp] = op.delete(cp), this.$items.delete(cp)
      }
      clear() {
        const pp = this[Up];
        pp.discard(), pp.forEachChild(((ip, cp) => {
          pp.root?.remove(ip)
        })), this.$items.clear(), pp.operation(op.CLEAR)
      } [Hp]() {
        const pp = this[Up];
        if (pp.isStreamCollection) throw new Error("@colyseus/schema: cannot reset a streamed CollectionSchema (pooling not supported).");
        this.$items.forEach((pp => pp?.[Hp]?.())), this.$items.clear(), this.deletedItems = {}, this.$refId = 0, pp.recycle(), this[xp] = void 0
      }
      has(pp) {
        return Array.from(this.$items.values()).some((ip => ip === pp))
      }
      forEach(pp) {
        this.$items.forEach(((ip, cp, Op) => pp(ip, cp, this)))
      }
      values() {
        return this.$items.values()
      }
      get size() {
        return this.$items.size
      }
      pauseTracking() {
        this[Up].pause()
      }
      resumeTracking() {
        this[Up].resume()
      }
      untracked(pp) {
        return this[Up].untracked(pp)
      }
      get isTrackingPaused() {
        return this[Up].paused
      } [Symbol.iterator]() {
        return this.$items.values()
      }
      setIndex(pp, ip) {}
      getIndex(pp) {
        return pp
      } [Pp](pp) {
        return this.$items.get(pp)
      } [Wp](pp) {
        this.$items.delete(pp)
      } [yp](pp, ip, cp) {
        let Op = null;
        if (this.$items.forEach(((op, Ip) => {
            pp.has(Ip) ? cp(op) : ((Op ??= []).push(Ip), ip(op, Ip))
          })), null !== Op)
          for (let op = 0; op < Op.length; op++) this[Wp](Op[op])
      } [tp]() {
        for (const pp in this.deletedItems) delete this.deletedItems[pp]
      }
      _dropView(pp) {
        Ji(this, pp)
      }
      _unregister() {}
      toArray() {
        return Array.from(this.$items.values())
      }
      toJSON() {
        const pp = [];
        return this.forEach(((ip, cp) => {
          pp.push("function" === typeof ip.toJSON ? ip.toJSON() : ip)
        })), pp
      }
      clone(pp) {
        let ip;
        return pp ? ip = Object.assign(new LO, this) : (ip = new LO, this.forEach((pp => {
          pp[Up] ? ip.add(pp.clone()) : ip.add(pp)
        }))), ip
      }
    }
    ki("collection", {
      constructor: LO
    });
    class YO {
      [Up];
      [xp];
      [wp];
      $items = new Map;
      deletedItems = {};
      $refId = 0;
      _stream;
      get maxPerTick() {
        return this._stream?.maxPerTick ?? 32
      }
      set maxPerTick(pp) {
        (this._stream ??= qi()).maxPerTick = pp
      }
      get priority() {
        return this._stream?.priority
      }
      set priority(pp) {
        (this._stream ??= qi()).priority = pp
      }
      static[Yp] = fc;
      static[Dp] = Vc;
      static COLLECTION_KIND = rc;
      static[Ap](pp, ip, cp) {
        return !cp || "string" === typeof pp[wp] || cp.isVisible((pp[Pp](ip) ?? pp.deletedItems[ip])[Up])
      }
      static is(pp) {
        return void 0 !== pp.set
      }
      constructor(pp) {
        Object.defineProperty(this, Up, {
          value: new lc(this),
          enumerable: !1,
          writable: !0
        }), this[wp] = void 0, pp && pp.forEach((pp => this.add(pp)))
      }
      static initializeForDecoder() {
        const pp = Object.create(YO.prototype);
        return pp.$items = new Map, pp.deletedItems = {}, pp.$refId = 0, pp[wp] = void 0, Jc(pp), pp
      }
      add(pp) {
        if (this.has(pp)) return !1;
        const ip = this.$refId++,
          cp = this[Up];
        return this.$items.set(ip, pp), cp.isStreamCollection ? void 0 !== cp.root && Ci(this, cp.root, ip) : cp.change(ip, op.ADD), void 0 !== pp[Up] && pp[Up].setParent(this, cp.root, ip), ip
      }
      entries() {
        return this.$items.entries()
      }
      delete(pp) {
        const ip = this.$items.entries();
        let cp, Op;
        for (;
          (Op = ip.next()) && !Op.done;)
          if (pp === Op.value[1]) {
            cp = Op.value[0];
            break
          } if (void 0 === cp) return !1;
        const op = this[Up];
        if (op.isStreamCollection) {
          const pp = op.root,
            ip = this.$items.get(cp);
          return void 0 !== pp && Ei(this, pp, this[xp], cp), void 0 !== ip?.[Up] && pp?.remove(ip[Up]), this.deletedItems[cp] = ip, this.$items.delete(cp)
        }
        return this.deletedItems[cp] = op.delete(cp), this.$items.delete(cp)
      }
      clear() {
        const pp = this[Up];
        pp.discard(), this.$items.clear(), pp.operation(op.CLEAR)
      } [Hp]() {
        const pp = this[Up];
        if (pp.isStreamCollection) throw new Error("@colyseus/schema: cannot reset a streamed SetSchema (pooling not supported).");
        this.$items.forEach((pp => pp?.[Hp]?.())), this.$items.clear(), this.deletedItems = {}, this.$refId = 0, pp.recycle(), this[xp] = void 0
      }
      has(pp) {
        const ip = this.$items.values();
        let cp, Op = !1;
        for (;
          (cp = ip.next()) && !cp.done;)
          if (pp === cp.value) {
            Op = !0;
            break
          } return Op
      }
      forEach(pp) {
        this.$items.forEach(((ip, cp, Op) => pp(ip, cp, this)))
      }
      values() {
        return this.$items.values()
      }
      get size() {
        return this.$items.size
      }
      pauseTracking() {
        this[Up].pause()
      }
      resumeTracking() {
        this[Up].resume()
      }
      untracked(pp) {
        return this[Up].untracked(pp)
      }
      get isTrackingPaused() {
        return this[Up].paused
      } [Symbol.iterator]() {
        return this.$items.values()
      }
      setIndex(pp, ip) {}
      getIndex(pp) {
        return pp
      } [Pp](pp) {
        return this.$items.get(pp)
      } [Wp](pp) {
        this.$items.delete(pp)
      } [yp](pp, ip, cp) {
        let Op = null;
        if (this.$items.forEach(((op, Ip) => {
            pp.has(Ip) ? cp(op) : ((Op ??= []).push(Ip), ip(op, Ip))
          })), null !== Op)
          for (let op = 0; op < Op.length; op++) this[Wp](Op[op])
      } [tp]() {
        for (const pp in this.deletedItems) delete this.deletedItems[pp]
      }
      _dropView(pp) {
        Ji(this, pp)
      }
      _unregister() {}
      toArray() {
        return Array.from(this.$items.values())
      }
      toJSON() {
        const pp = [];
        return this.forEach(((ip, cp) => {
          pp.push("function" === typeof ip.toJSON ? ip.toJSON() : ip)
        })), pp
      }
      clone(pp) {
        let ip;
        return pp ? ip = Object.assign(new YO, this) : (ip = new YO, this.forEach((pp => {
          pp[Up] ? ip.add(pp.clone()) : ip.add(pp)
        }))), ip
      }
    }
    ki("set", {
      constructor: YO
    });
    class DO {
      [Up];
      [xp];
      [wp];
      $items = new Map;
      $nextPosition = 0;
      _itemIndex = new Map;
      _stream;
      get maxPerTick() {
        return this._stream?.maxPerTick ?? 32
      }
      set maxPerTick(pp) {
        (this._stream ??= qi()).maxPerTick = pp
      }
      get priority() {
        return this._stream?.priority
      }
      set priority(pp) {
        (this._stream ??= qi()).priority = pp
      }
      static $isStream = !0;
      static[Yp] = fc;
      static[Dp] = Vc;
      static COLLECTION_KIND = zc;
      static[Ap](pp, ip, cp) {
        if (!cp) return !0;
        const Op = pp[Pp](ip);
        return void 0 !== Op && cp.isVisible(Op[Up])
      }
      static is(pp) {
        return pp && void 0 !== pp.stream
      }
      constructor() {
        Object.defineProperty(this, Up, {
          value: new lc(this),
          enumerable: !1,
          writable: !0
        }), this[wp] = void 0
      }
      static initializeForDecoder() {
        const pp = Object.create(DO.prototype);
        return pp.$items = new Map, pp.$nextPosition = 0, pp._itemIndex = new Map, pp[wp] = void 0, Jc(pp), pp
      }
      add(pp) {
        if (this._itemIndex.has(pp)) return -1;
        const ip = this.$nextPosition++;
        this.$items.set(ip, pp), this._itemIndex.set(pp, ip);
        const cp = this[Up].root;
        return void 0 !== pp[Up] && pp[Up].setParent(this, cp, ip), void 0 !== cp && Ci(this, cp, ip), ip
      }
      remove(pp) {
        const ip = this._itemIndex.get(pp);
        if (void 0 === ip) return !1;
        this._itemIndex.delete(pp), this.$items.delete(ip);
        const cp = this[Up].root;
        return void 0 !== cp && (Ei(this, cp, this[xp], ip), void 0 !== pp[Up] && cp.remove(pp[Up])), !0
      }
      has(pp) {
        return this._itemIndex.has(pp)
      }
      clear() {
        const pp = this[Up].root;
        if (void 0 !== pp) {
          ! function(pp, ip, cp) {
            const Op = pp._stream;
            if (void 0 !== Op) {
              Op.broadcastPending.clear();
              for (const pp of Op.sentBroadcast) Op.broadcastDeletes.add(pp);
              Op.sentBroadcast.clear(), ip.forEachActiveView((pp => {
                Op.pendingByView.get(pp.id)?.clear();
                const ip = Op.sentByView.get(pp.id);
                if (void 0 !== ip && ip.size > 0) {
                  let Op = pp.changes.get(cp);
                  void 0 === Op && (Op = new Map, pp.changes.set(cp, Op));
                  for (const pp of ip) Op.set(pp, op.DELETE);
                  ip.clear()
                }
              }))
            }
          }(this, pp, this[xp]);
          for (const ip of this.$items.values()) void 0 !== ip[Up] && pp.remove(ip[Up])
        }
        this.$items.clear(), this._itemIndex.clear()
      }
      forEach(pp) {
        for (const [ip, cp] of this.$items) pp(cp, ip, this)
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
      setIndex(pp, ip) {}
      getIndex(pp) {
        return pp
      } [Pp](pp) {
        return this.$items.get(pp)
      } [Wp](pp) {
        const ip = this.$items.get(pp);
        void 0 !== ip && (this._itemIndex.delete(ip), this.$items.delete(pp))
      } [yp]() {} [tp]() {}
      toArray() {
        return Array.from(this.$items.values())
      }
      toJSON() {
        const pp = [];
        return this.forEach((ip => {
          pp.push("function" === typeof ip?.toJSON ? ip.toJSON() : ip)
        })), pp
      }
      clone(pp) {
        if (pp) {
          return Object.assign(new DO, this)
        }
        const ip = new DO;
        return ip.maxPerTick = this.maxPerTick, this.forEach((pp => {
          ip.add("function" === typeof pp?.clone ? pp.clone() : pp)
        })), ip
      }
      _dropView(pp) {
        Ji(this, pp)
      }
      _unregister() {}
    }
    ki("stream", {
      constructor: DO
    });
    class AO {
      [jp] = !0;
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
      constructor(pp) {
        this._type = pp
      }
      default (pp) {
        return this._default = pp, this._hasDefault = !0, this
      }
      view(pp) {
        return this._view = pp ?? -1, this
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
        const pp = this._type;
        if (pp && "object" === typeof pp && void 0 !== pp.array) throw new Error(Ri);
        return this._stream = !0, this
      }
      priority(pp) {
        return this._streamPriority = pp, this
      }
      deprecated() {
        let pp = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
        return this._deprecated = !0, this._deprecatedThrows = pp, this
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

    function PO(pp) {
      return null != pp && !0 === pp[jp]
    }

    function WO(pp) {
      return () => new AO(pp)
    }

    function yO(pp) {
      if (PO(pp)) {
        const ip = pp._type;
        throw new Error(`t.array/map/set/collection(): a t.* builder is not a valid element type \u2014 ${"string"===typeof ip?`use the type name instead: t.array("${ip}")`:'collections accept a Schema class or a primitive type name ("string", "number", \u2026)'}.`)
      }
      return pp
    }

    function UO(pp) {
      return new AO({
        quantized: Ni(pp)
      })
    }
    const wO = Object.freeze({
        string: WO("string"),
        number: WO("number"),
        boolean: WO("boolean"),
        int8: WO("int8"),
        uint8: WO("uint8"),
        int16: WO("int16"),
        uint16: WO("uint16"),
        int32: WO("int32"),
        uint32: WO("uint32"),
        int64: WO("int64"),
        uint64: WO("uint64"),
        float32: WO("float32"),
        float64: WO("float64"),
        bigint64: WO("bigint64"),
        biguint64: WO("biguint64"),
        ref: pp => new AO(pp),
        array: pp => new AO({
          array: yO(pp)
        }),
        map: pp => new AO({
          map: yO(pp)
        }),
        set: pp => new AO({
          set: yO(pp)
        }),
        collection: pp => new AO({
          collection: yO(pp)
        }),
        stream: pp => {
          const ip = new AO({
            stream: yO(pp)
          });
          return ip._stream = !0, ip
        },
        quantized: UO,
        angle: pp => UO({
          min: 0,
          max: 2 * Math.PI,
          mode: "wrap",
          bits: pp?.bits ?? 16
        })
      }),
      vO = -1;

    function tO(pp) {
      return ni.register(pp), pp
    }

    function HO() {
      let pp = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : vO;
      return function(ip, cp) {
        const Op = si.initialize(ip.constructor);
        si.setTag(Op, cp, pp)
      }
    }

    function dO(pp, ip) {
      const cp = si.initialize(pp.constructor);
      si.setUnreliable(cp, ip)
    }

    function eO(pp, ip) {
      const cp = si.initialize(pp.constructor);
      si.setPatchOnly(cp, ip)
    }

    function uO(pp, ip) {
      const cp = si.initialize(pp.constructor);
      si.setFullStateOnly(cp, ip)
    }

    function jO(pp, ip) {
      return function(cp, Op) {
        const op = cp.constructor;
        if (!pp) throw new Error(`${op.name}: @type() reference provided for "${Op}" is undefined. Make sure you don't have any circular dependencies.`);
        pp = gi(pp, `${op.name}.${Op}`), ni.register(op);
        const Ip = Object.getPrototypeOf(op)[Symbol.metadata],
          Sp = si.initialize(op);
        let xp = Sp[Op];
        if (void 0 !== Sp[xp]) {
          if (Sp[xp].deprecated) return;
          if (void 0 !== Sp[xp].type) {
            const pp = new Error(`@colyseus/schema: Duplicate '${Op}' definition on '${op.name}'.\nCheck @type() annotation`);
            throw new Error(`${pp.message} ${pp.stack.split("\n")[4].trim()}`)
          }
        } else xp = Sp[qp] ?? (Ip && Ip[qp]) ?? -1, xp++;
        if (ip && ip.manual) si.addField(Sp, xp, Op, pp, {
          enumerable: !0,
          configurable: !0,
          writable: !0
        });
        else {
          const {
            complexTypeKlass: ip,
            childType: cp
          } = Fi(pp);
          si.addField(Sp, xp, Op, pp, mO(Op, xp, cp, ip))
        }
        Sp[kp][Op] && Object.defineProperty(cp, Op, Sp[kp][Op]), ("string" === typeof pp || Ti(pp)) && (Sp[Rp] || Object.defineProperty(Sp, Rp, {
          value: [],
          enumerable: !1,
          configurable: !0,
          writable: !0
        }), Sp[Rp][xp] = "string" === typeof pp ? Oi[pp] : ai(pp.quantized))
      }
    }
    const kO = {
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

    function mO(pp, ip, cp, Op) {
      let Ip;
      return Ip = Op ? function(pp, ip, cp, Op) {
        const Ip = Op.constructor === IO,
          Sp = Op.constructor === xO;
        return function(pp) {
          const Op = this[ep],
            xp = Op[ip];
          if (pp !== xp) {
            if (void 0 !== pp && null !== pp) {
              if (!Ip || pp instanceof IO)
                if (!Sp || pp instanceof xO) pp[wp] = cp;
                else {
                  const ip = new xO;
                  if (ip[wp] = cp, pp instanceof Map) pp.forEach(((pp, cp) => ip.set(cp, pp)));
                  else
                    for (const cp in pp) ip.set(cp, pp[cp]);
                  pp = ip
                }
              else {
                const ip = new IO;
                ip[wp] = cp, ip.push(...pp), pp = ip
              }
              const Op = this[Up],
                Yp = this.constructor;
              void 0 !== xp && null !== xp && xp[Up] ? (Op.root?.remove(xp[Up]), Yp[Lp](Op, ip, op.DELETE_AND_ADD)) : Yp[Lp](Op, ip, op.ADD), pp[Up]?.setParent(this, Op.root, ip)
            } else void 0 !== xp && null !== xp && this[Up].delete(ip);
            Op[ip] = pp
          }
        }
      }(0, ip, cp, Op) : "string" === typeof cp ? function(pp, ip, cp) {
        const Op = kO[cp],
          Ip = "string" === cp,
          Sp = "boolean" === cp;
        return function(cp) {
          const xp = this[ep],
            Yp = xp[ip];
          if (cp !== Yp) {
            if (void 0 !== cp && null !== cp) {
              if (!Sp && void 0 !== Op && typeof cp !== Op && (!Ip || null !== cp)) {
                const ip = cp && cp.constructor ? ` (${cp.constructor.name})` : "";
                throw new iO(`a '${Op}' was expected, but '${JSON.stringify(cp)}'${ip} was provided in ${this.constructor.name}#${pp}`)
              }
              this.constructor[Lp](this[Up], ip, op.ADD)
            } else void 0 !== Yp && null !== Yp && this[Up].delete(ip);
            xp[ip] = cp
          }
        }
      }(pp, ip, cp) : Ti(cp) ? function(pp, ip, cp) {
        return function(Op) {
          const Ip = this[ep],
            Sp = Ip[ip];
          if (void 0 !== Op && null !== Op) {
            if ("number" !== typeof Op) throw new iO(`a 'number' was expected, but '${JSON.stringify(Op)}' was provided in ${this.constructor.name}#${pp}`);
            if ((Op = bi(cp, fi(cp, Op))) === Sp) return;
            this.constructor[Lp](this[Up], ip, op.ADD)
          } else {
            if (Op === Sp) return;
            void 0 !== Sp && null !== Sp && this[Up].delete(ip)
          }
          Ip[ip] = Op
        }
      }(pp, ip, cp.quantized) : function(pp, ip, cp) {
        return function(Op) {
          const Ip = this[ep],
            Sp = Ip[ip];
          if (Op !== Sp) {
            if (void 0 !== Op && null !== Op) {
              cO(Op, cp, this, pp);
              const Ip = this[Up],
                xp = this.constructor;
              void 0 !== Sp && null !== Sp && Sp[Up] ? (Ip.root?.remove(Sp[Up]), xp[Lp](Ip, ip, op.DELETE_AND_ADD)) : xp[Lp](Ip, ip, op.ADD), Op[Up]?.setParent(this, Ip.root, ip)
            } else void 0 !== Sp && null !== Sp && this[Up].delete(ip);
            Ip[ip] = Op
          }
        }
      }(pp, ip, cp), {
        get: function() {
          return this[ep][ip]
        },
        set: Ip,
        enumerable: !0,
        configurable: !0
      }
    }

    function RO() {
      let pp = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
      return function(ip, cp) {
        const Op = si.initialize(ip.constructor);
        si.setDeprecated(Op, cp), pp && (Op[kp] ??= {}, Op[kp][cp] = {
          get: function() {
            throw new Error(`${cp} is deprecated.`)
          },
          set: function(pp) {},
          enumerable: !1,
          configurable: !0
        }, Object.defineProperty(ip, cp, Op[kp][cp]))
      }
    }
    let qO = !1;

    function MO(pp, ip, cp) {
      qO || (qO = !0, console.warn("@colyseus/schema: defineTypes() is deprecated and will be removed in a future release. Use schema() with t.* field builders instead \u2192 https://docs.colyseus.io/state/schema"));
      for (let Op in ip) jO(ip[Op], cp)(pp.prototype, Op);
      return pp
    }

    function CO(pp, ip) {
      let cp = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : XO;
      if (null == pp || "object" !== typeof pp) throw new Error(`schema(): first argument must be a fields object (got ${typeof pp}).`);
      const Op = {},
        op = {},
        Ip = {},
        Sp = {},
        xp = (pp, ip) => {
          if (ip.hasDefault)((pp, ip) => {
            "function" === typeof ip ? Sp[pp] = ip : ip && "function" === typeof ip.clone ? Sp[pp] = () => ip.clone() : Ip[pp] = ip
          })(pp, ip.default);
          else if (!ip.optional) {
            const cp = function(pp) {
              if (pp && "object" === typeof pp) {
                if (void 0 !== pp.array) return () => new IO;
                if (void 0 !== pp.map) return () => new xO;
                if (void 0 !== pp.set) return () => new YO;
                if (void 0 !== pp.collection) return () => new LO;
                if (void 0 !== pp.stream) return () => new DO
              } else if ("function" === typeof pp && XO.is(pp) && (!pp.prototype.initialize || 0 === pp.prototype.initialize.length)) return () => new pp
            }(ip.type);
            cp && (Sp[pp] = cp)
          }
        },
        Lp = {},
        Yp = [],
        Dp = [],
        Ap = {},
        Pp = [],
        Wp = [],
        yp = {},
        Up = [];
      for (const ep in pp) {
        const cp = pp[ep],
          Ip = `schema(${ip?`'${ip}'`:""}): field '${ep}'`;
        if (PO(cp)) {
          const pp = cp.toDefinition();
          if (pp.noSync) {
            if (void 0 !== pp.view || pp.unreliable || pp.patchOnly || pp.fullStateOnly || pp.stream) throw new Error(`${Ip} uses .noSync() together with a sync-only modifier (.view/.unreliable/.patchOnly/.fullStateOnly/.stream). A local-only field cannot be synchronized.`);
            xp(ep, pp);
            continue
          }
          if (pp.patchOnly && pp.fullStateOnly) throw new Error(`${Ip} uses .patchOnly() together with .fullStateOnly(). Those are the only two delivery channels, so the field would never reach a client \u2014 use .noSync() if that is intended.`);
          const ip = gi(pp.type, Ip);
          if ("function" === typeof ip && !XO.is(ip)) throw new Error(`${Ip} is a synced ref to non-Schema class '${ip.name||"(anonymous)"}' \u2014 use .noSync(), or Metadata.setFields().`);
          Op[ep] = ip, void 0 !== pp.view && (Lp[ep] = pp.view), pp.unreliable && Yp.push(ep), pp.patchOnly && Dp.push(ep), pp.deprecated && (Ap[ep] = pp.deprecatedThrows), pp.fullStateOnly && Pp.push(ep), pp.stream && Wp.push(ep), void 0 !== pp.streamPriority && (yp[ep] = pp.streamPriority), pp.optional && Up.push(ep), xp(ep, pp)
        } else {
          if ("function" !== typeof cp) throw new Error(`${Ip} must be a t.* builder, Schema subclass, or method (got ${typeof cp}).`);
          XO.is(cp) ? (Op[ep] = cp, cp.prototype.initialize && 0 !== cp.prototype.initialize.length || (Sp[ep] = () => new cp)) : op[ep] = cp
        }
      }
      const wp = pp => {
          for (const ip in Ip) pp[ip] = Ip[ip];
          for (const ip in Sp) pp[ip] = Sp[ip]()
        },
        vp = () => {
          const pp = {};
          return wp(pp), pp
        },
        tp = "function" === typeof op.initialize,
        Hp = op.initialize ?? cp._initialize,
        dp = class extends cp {
          constructor() {
            for (var pp = arguments.length, ip = new Array(pp), cp = 0; cp < pp; cp++) ip[cp] = arguments[cp];
            const op = ip[0];
            void 0 === op ? (super(), wp(this)) : super(Object.assign(vp(), tp ? (pp => {
              const ip = Object.keys(Op),
                cp = {};
              for (const Op in pp) ip.includes(Op) || (cp[Op] = pp[Op]);
              return cp
            })(op) : op)), Hp && new.target === dp && Hp.apply(this, ip)
          }
        };
      ip && Object.defineProperty(dp, "name", {
        value: ip
      }), si.setFields(dp, Op), dp._getDefaultValues = vp, dp._initialize = Hp, Object.assign(dp.prototype, op);
      for (const ep in Lp) HO(Lp[ep])(dp.prototype, ep);
      for (const ep of Yp) dO(dp.prototype, ep);
      for (const ep of Dp) eO(dp.prototype, ep);
      for (const ep in Ap) RO(Ap[ep])(dp.prototype, ep);
      if (Pp.length > 0 || Wp.length > 0) {
        const pp = dp[Symbol.metadata];
        for (const ip of Pp) si.setFullStateOnly(pp, ip);
        for (const ip of Wp) si.setStream(pp, ip);
        for (const ip in yp) si.setStreamPriority(pp, ip, yp[ip])
      }
      if (Up.length > 0) {
        const pp = dp[Symbol.metadata];
        for (const ip of Up) pp[pp[ip]].optional = !0
      }
      return dp.extend = (pp, ip) => CO(pp, ip, dp), dp
    }

    function EO(pp) {
      const ip = pp[Up].root,
        cp = {
          ops: {},
          refs: []
        };
      let Op = ip.changes.next;
      for (; Op;) {
        const pp = Op.changeTree;
        void 0 !== pp ? (cp.refs.push(`refId#${pp.ref[xp]}`), pp.forEach(((pp, ip) => {
          if (pp < 0 || !ip) return;
          const Op = op[ip];
          cp.ops[Op] || (cp.ops[Op] = 0), cp.ops[Op]++
        })), Op = Op.next) : Op = Op.next
      }
      return cp
    }
    class XO {
      static[Yp] = Nc;
      static[Dp] = Kc;
      [xp];
      [ep];
      static initialize(pp) {
        Object.defineProperty(pp, Up, {
          value: new lc(pp),
          enumerable: !1,
          writable: !0
        }), pp[ep] = []
      }
      static initializeForDecoder() {
        const pp = Object.create(this.prototype);
        return Jc(pp), pp[ep] = [], pp
      }
      static reset(pp) {
        const ip = pp?.[Up];
        if (void 0 === ip || "function" !== typeof ip.recycle) throw new Error("@colyseus/schema: Schema.reset() requires a tracked (encoder-side) instance.");
        if (void 0 !== ip.extraParents) throw new Error(`@colyseus/schema: cannot reset a shared instance (${pp.constructor.name}) with multiple parents.`);
        pp[Hp]()
      } [Hp]() {
        const pp = this.constructor[Symbol.metadata],
          ip = pp?.[Mp] ?? [],
          cp = this[ep];
        for (let Op = 0; Op < ip.length; Op++) {
          const pp = cp[ip[Op]];
          pp?.[Hp]?.()
        }
        this[Up].recycle(), this[xp] = void 0
      }
      static is(pp) {
        const ip = pp[Symbol.metadata];
        return "object" === typeof ip && null !== ip
      }
      static isSchema(pp) {
        return "function" === typeof pp?.assign
      }
      static[Lp](pp, ip) {
        let cp = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : op.ADD;
        pp.change(ip, cp)
      }
      static[Ap](pp, ip, cp) {
        const Op = pp.constructor[Symbol.metadata],
          op = Op[ip]?.tag;
        return void 0 === cp ? void 0 === op : void 0 === op || (op === vO ? cp.isChangeTreeVisible(pp[Up]) : cp.hasTagOnTree(pp[Up], op))
      }
      constructor(pp) {
        XO.initialize(this), pp && XO.assignProps(this, pp)
      }
      assign(pp) {
        return XO.assignProps(this, pp), this
      }
      static assignProps(pp, ip) {
        const cp = pp.constructor[Symbol.metadata];
        if (cp && void 0 !== cp[qp])
          for (let op = 0; op <= cp[qp]; op++) {
            const Op = cp[op];
            if (!Op) continue;
            const Ip = ip[Op.name];
            void 0 !== Ip && (pp[Op.name] = Ip)
          }
        const Op = Object.keys(ip);
        for (let op = 0; op < Op.length; op++) {
          const Ip = Op[op];
          cp && void 0 !== cp[Ip] || (pp[Ip] = ip[Ip])
        }
      }
      restore(pp) {
        const ip = this.constructor[Symbol.metadata];
        for (const cp in ip) {
          const Op = ip[cp],
            op = Op.name,
            Ip = Op.type,
            Sp = pp[op];
          if (void 0 !== Sp && null !== Sp)
            if ("string" === typeof Ip) this[op] = Sp;
            else if (XO.is(Ip)) {
            const pp = new Ip;
            pp.restore(Sp), this[op] = pp
          } else if ("object" === typeof Ip) {
            const pp = Object.keys(Ip)[0],
              ip = Ip[pp];
            if ("map" === pp) {
              const pp = this[op];
              for (const cp in Sp)
                if (XO.is(ip)) {
                  const Op = new ip;
                  Op.restore(Sp[cp]), pp.set(cp, Op)
                } else pp.set(cp, Sp[cp])
            } else if ("array" === pp) {
              const pp = this[op];
              for (let cp = 0; cp < Sp.length; cp++)
                if (XO.is(ip)) {
                  const Op = new ip;
                  Op.restore(Sp[cp]), pp.push(Op)
                } else pp.push(Sp[cp])
            }
          }
        }
        return this
      }
      setDirty(pp, ip) {
        const cp = this.constructor[Symbol.metadata];
        this[Up].change(cp[cp[pp]].index, ip)
      }
      pauseTracking() {
        this[Up].pause()
      }
      resumeTracking() {
        this[Up].resume()
      }
      untracked(pp) {
        return this[Up].untracked(pp)
      }
      get isTrackingPaused() {
        return this[Up].paused
      }
      clone() {
        const pp = Object.create(this.constructor.prototype);
        XO.initialize(pp);
        const ip = this.constructor[Symbol.metadata];
        for (const cp in ip) {
          const Op = ip[cp].name;
          "object" === typeof this[Op] && "function" === typeof this[Op]?.clone ? pp[Op] = this[Op].clone() : pp[Op] = this[Op]
        }
        return pp
      }
      toJSON() {
        const pp = {},
          ip = this.constructor[Symbol.metadata];
        for (const cp in ip) {
          const Op = ip[cp],
            op = Op.name;
          Op.deprecated || null === this[op] || "undefined" === typeof this[op] || (pp[op] = "function" === typeof this[op].toJSON ? this[op].toJSON() : this[op])
        }
        return pp
      }
      discardAllChanges() {
        this[Up].discardAll()
      } [Pp](pp) {
        return this[this.constructor[Symbol.metadata][pp].name]
      } [Wp](pp) {
        this[this.constructor[Symbol.metadata][pp].name] = void 0
      }
      static debugRefIds(pp) {
        let ip = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          cp = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          Op = arguments.length > 3 ? arguments[3] : void 0,
          op = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "";
        const Ip = ip ? ` - ${JSON.stringify(pp.toJSON())}` : "",
          Sp = pp[Up],
          Lp = pp[xp],
          Yp = Op ? Op.root.refCount[Lp] : Sp.refCount,
          Dp = Yp > 1 ? ` [\xd7${Yp}]` : "";
        let Ap = `${function(pp){return new Array(pp).fill(0).map(((ip,cp)=>cp===pp-1?"\u2514\u2500 ":"   ")).join("")}(cp)}${op}${pp.constructor.name} (refId: ${Lp})${Dp}${Ip}\n`;
        return Sp.forEachChild(((op, Ip) => {
          let Sp = Ip;
          "number" === typeof Ip && pp.$indexes && (Sp = pp.$indexes.get(Ip) ?? Ip);
          const xp = void 0 !== pp.forEach && void 0 !== Sp ? `["${Sp}"]: ` : "";
          Ap += this.debugRefIds(op.ref, ip, cp + 1, Op, xp)
        })), Ap
      }
      static debugRefIdEncodingOrder(pp) {
        let ip = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "allChanges";
        const cp = [],
          Op = pp[Up];
        if ("changes" === ip) {
          let pp = Op.root.changes?.next;
          for (; pp;) pp.changeTree && cp.push(pp.changeTree.ref[xp]), pp = pp.next;
          return cp
        }
        const op = "allFilteredChanges" === ip,
          Ip = new Set,
          Sp = pp => {
            Ip.has(pp) || (Ip.add(pp), pp.isFiltered === op && cp.push(pp.ref[xp]), pp.forEachChild(((pp, ip) => Sp(pp))))
          };
        return Sp(Op), cp
      }
      static debugRefIdsFromDecoder(pp) {
        return this.debugRefIds(pp.state, !1, 0, pp)
      }
      static debugChanges(pp) {
        let ip = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        const cp = pp[Up],
          Op = ip ? "allChanges" : "changes";
        let Ip = `${pp.constructor.name} (${pp[xp]}) -> .${Op}:\n`;
        return ip ? cp.forEachLive((pp => {
          Ip += `- [${pp}]: ADD (${JSON.stringify(cp.getValue(Number(pp),!0))})\n`
        })) : cp.forEach(((pp, ip) => {
          pp < 0 || !ip || (Ip += `- [${pp}]: ${op[ip]} (${JSON.stringify(cp.getValue(Number(pp),!1))})\n`)
        })), Ip
      }
    }
    Ip(XO);
    const lO = {
      value: 0,
      enumerable: !1,
      writable: !0
    };
    class QO {
      types;
      nextUniqueId = 0;
      changeTrees = {};
      get refCount() {
        const pp = {};
        for (const ip in this.changeTrees) pp[ip] = this.changeTrees[ip].refCount;
        return pp
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
      enqueueFilterRefresh(pp) {
        this.types.hasFilters && (pp.flags & Ec || (pp.flags |= Ec, this.pendingFilterRefresh.push(pp)))
      }
      _nodePool = [];
      _nextViewId = 0;
      _freeViewIds = [];
      acquireViewId() {
        return this._freeViewIds.length > 0 ? this._freeViewIds.pop() : this._nextViewId++
      }
      releaseViewId(pp) {
        this._freeViewIds.push(pp)
      }
      activeViews = new Map;
      streamTrees = new Set;
      registerView(pp) {
        this.activeViews.set(pp.id, new WeakRef(pp))
      }
      unregisterView(pp) {
        this.activeViews.delete(pp.id);
        const ip = pp.id;
        for (const cp of this.streamTrees) cp._dropView(ip)
      }
      forEachActiveView(pp) {
        for (const [ip, cp] of this.activeViews) {
          const Op = cp.deref();
          if (void 0 !== Op) pp(Op);
          else {
            this.activeViews.delete(ip);
            for (const pp of this.streamTrees) pp._dropView(ip)
          }
        }
      }
      registerStream(pp) {
        this.streamTrees.add(pp)
      }
      unregisterStream(pp) {
        this.streamTrees.delete(pp)
      }
      constructor(pp) {
        let ip = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        this.types = pp, this.nextUniqueId = ip
      }
      add(pp) {
        const ip = pp.ref;
        void 0 === ip[xp] && (lO.value = this.nextUniqueId++, Object.defineProperty(ip, xp, lO));
        const cp = ip[xp],
          Op = void 0 === this.changeTrees[cp];
        Op && (this.changeTrees[cp] = pp), pp.needsRestage && (pp.needsRestage = !1, pp.forEachLiveWithCtx(pp, Ic));
        const op = Op ? 0 : pp.refCount;
        return pp.refCount = op + 1, op > 0 && this.enqueueFilterRefresh(pp), Op
      }
      remove(pp) {
        const ip = pp.refCount - 1;
        if (ip <= 0) {
          if (pp.root = void 0, delete this.changeTrees[pp.ref[xp]], pp.isStreamCollection) {
            const ip = pp.ref;
            ip._unregister?.(), this.unregisterStream(ip)
          }
          this.removeFromQueue(pp), this.removeFromUnreliableQueue(pp), pp.refCount = 0, pp.needsRestage = !0, pp.forEachChild(((ip, cp) => {
            ip.removeParent(pp.ref) && (void 0 === ip.parentRef || ip.refCount > 0 ? this.remove(ip) : this.moveNextToParent(ip))
          }))
        } else pp.refCount = ip, this.enqueueFilterRefresh(pp), this.recursivelyMoveNextToParent(pp);
        return ip
      }
      recursivelyMoveNextToParent(pp) {
        this.moveNextToParent(pp), pp.forEachChild(((pp, ip) => this.recursivelyMoveNextToParent(pp)))
      }
      moveNextToParent(pp) {
        pp.changesNode && this._moveNextToParentInList(this.changes, pp, pp.changesNode, "changesNode"), pp.unreliableChangesNode && this._moveNextToParentInList(this.unreliableChanges, pp, pp.unreliableChangesNode, "unreliableChangesNode")
      }
      _moveNextToParentInList(pp, ip, cp, Op) {
        const op = ip.parent;
        if (!op || !op[Up]) return;
        const Ip = op[Up][Op];
        Ip && Ip !== cp && (cp.position > Ip.position || (cp.prev ? cp.prev.next = cp.next : pp.next = cp.next, cp.next ? cp.next.prev = cp.prev : pp.tail = cp.prev, cp.prev = pp.tail, cp.next = void 0, pp.tail.next = cp, pp.tail = cp, cp.position = pp.nextPosition++))
      }
      enqueueChangeTree(pp) {
        (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : pp.changesNode) || (pp.changesNode = this._appendToList(this.changes, pp))
      }
      enqueueUnreliable(pp) {
        (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : pp.unreliableChangesNode) || (pp.unreliableChangesNode = this._appendToList(this.unreliableChanges, pp))
      }
      _appendToList(pp, ip) {
        const cp = this._nodePool;
        let Op;
        return cp.length > 0 ? (Op = cp.pop(), Op.changeTree = ip, Op.next = void 0, Op.prev = void 0) : Op = {
          changeTree: ip,
          next: void 0,
          prev: void 0,
          position: 0
        }, pp.next ? (Op.prev = pp.tail, pp.tail.next = Op, pp.tail = Op) : (pp.nextPosition = 0, pp.next = Op, pp.tail = Op), Op.position = pp.nextPosition++, Op
      }
      releaseNode(pp) {
        pp.changeTree = void 0, pp.prev = void 0, pp.next = void 0, this._nodePool.push(pp)
      }
      removeFromQueue(pp) {
        return this._removeNode(this.changes, pp, pp.changesNode, "changesNode")
      }
      removeFromUnreliableQueue(pp) {
        return this._removeNode(this.unreliableChanges, pp, pp.unreliableChangesNode, "unreliableChangesNode")
      }
      _removeNode(pp, ip, cp, Op) {
        return !(!cp || cp.changeTree !== ip) && (cp.prev ? cp.prev.next = cp.next : pp.next = cp.next, cp.next ? cp.next.prev = cp.prev : pp.tail = cp.prev, ip[Op] = void 0, this.releaseNode(cp), !0)
      }
    }

    function JO(pp, ip) {
      if (-1 === ip || ip >= pp.length) return !1;
      const cp = pp.length - 1;
      for (let Op = ip; Op < cp; Op++) pp[Op] = pp[Op + 1];
      return pp.length = cp, !0
    }

    function BO(pp, ip, cp) {
      const Op = ~cp,
        op = pp.changeTrees;
      for (const Ip in op) {
        const pp = op[Ip],
          cp = pp.visibleViews;
        void 0 !== cp && ip < cp.length && (cp[ip] &= Op);
        const Sp = pp.subscribedViews;
        void 0 !== Sp && ip < Sp.length && (Sp[ip] &= Op);
        const xp = pp.tagViews;
        void 0 !== xp && xp.forEach((pp => {
          ip < pp.length && (pp[ip] &= Op)
        }))
      }
    }
    const NO = new FinalizationRegistry((pp => {
      let {
        root: ip,
        id: cp,
        slot: Op,
        bit: op
      } = pp;
      BO(ip, Op, op), ip.activeViews.delete(cp);
      for (const Ip of ip.streamTrees) Ip._dropView(cp);
      ip.releaseViewId(cp)
    }));

    function TO(pp) {
      if (void 0 === pp) return "undefined";
      if (null === pp) return "null";
      const ip = typeof pp;
      return "string" === ip ? JSON.stringify(pp.length > 30 ? `${pp.slice(0,30)}\u2026` : pp) : "object" !== ip && "function" !== ip ? `${ip} ${String(pp)}` : Array.isArray(pp) ? `Array(${pp.length})` : pp.constructor?.name ?? "Object"
    }
    class fO {
      iterable;
      items;
      id = -1;
      _root;
      _slot = 0;
      _bit = 0;
      changes = new Map;
      constructor() {
        let pp = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        this.iterable = pp, pp && (this.items = [])
      }
      _bindRoot(pp) {
        void 0 === this._root && (this._root = pp, this.id = pp.acquireViewId(), this._slot = this.id >> 5, this._bit = 1 << (31 & this.id), pp.registerView(this), NO.register(this, {
          root: pp,
          id: this.id,
          slot: this._slot,
          bit: this._bit
        }, this))
      }
      dispose() {
        void 0 !== this._root && (this._root.unregisterView(this), BO(this._root, this._slot, this._bit), this._root.releaseViewId(this.id), NO.unregister(this), this._root = void 0, this.id = -1)
      }
      isVisible(pp) {
        const ip = pp.visibleViews,
          cp = this._slot;
        return void 0 !== ip && cp < ip.length && 0 !== (ip[cp] & this._bit)
      }
      markVisible(pp) {
        const ip = this._slot;
        let cp = pp.visibleViews;
        for (void 0 === cp && (cp = pp.visibleViews = []); cp.length <= ip;) cp.push(0);
        cp[ip] |= this._bit
      }
      unmarkVisible(pp) {
        const ip = pp.visibleViews;
        if (void 0 === ip) return;
        const cp = this._slot;
        cp < ip.length && (ip[cp] &= ~this._bit)
      }
      isSubscribed(pp) {
        const ip = pp.subscribedViews,
          cp = this._slot;
        return void 0 !== ip && cp < ip.length && 0 !== (ip[cp] & this._bit)
      }
      _setSubscribed(pp) {
        const ip = this._slot;
        let cp = pp.subscribedViews;
        for (void 0 === cp && (cp = pp.subscribedViews = []); cp.length <= ip;) cp.push(0);
        cp[ip] |= this._bit
      }
      _clearSubscribed(pp) {
        const ip = pp.subscribedViews;
        if (void 0 === ip) return;
        const cp = this._slot;
        cp < ip.length && (ip[cp] &= ~this._bit)
      }
      hasTagOnTree(pp, ip) {
        const cp = pp.tagViews;
        if (void 0 === cp) return !1;
        const Op = this._slot,
          op = this._bit;
        for (let Ip = ip; 0 !== Ip; Ip &= Ip - 1) {
          const pp = cp.get(Ip & -Ip);
          if (void 0 !== pp && Op < pp.length && 0 !== (pp[Op] & op)) return !0
        }
        return !1
      }
      addTag(pp, ip) {
        if (ip === vO) return;
        let cp = pp.tagViews;
        void 0 === cp && (cp = pp.tagViews = new Map);
        const Op = this._slot,
          op = this._bit;
        for (let Ip = ip; Ip > 0; Ip &= Ip - 1) {
          const pp = Ip & -Ip;
          let ip = cp.get(pp);
          for (void 0 === ip && (ip = [], cp.set(pp, ip)); ip.length <= Op;) ip.push(0);
          ip[Op] |= op
        }
      }
      removeTag(pp, ip) {
        if (ip === vO) return;
        const cp = pp.tagViews;
        if (void 0 === cp) return;
        const Op = this._slot,
          op = ~this._bit;
        for (let Ip = ip; Ip > 0; Ip &= Ip - 1) {
          const pp = cp.get(Ip & -Ip);
          void 0 !== pp && Op < pp.length && (pp[Op] &= op)
        }
      }
      removeAllTagsOnTree(pp) {
        const ip = pp.tagViews;
        if (void 0 === ip) return;
        const cp = this._slot,
          Op = ~this._bit;
        ip.forEach((pp => {
          cp < pp.length && (pp[cp] &= Op)
        }))
      }
      add(pp) {
        let ip = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : vO,
          cp = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        return this._add(pp, ip, cp, !1)
      }
      _addImmediate(pp) {
        let ip = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : vO;
        this._add(pp, ip, !0, !0)
      }
      _add(pp, ip, cp, Op) {
        const Ip = pp?.[Up];
        if (!Ip) return console.warn(`StateView#add(): expected a Schema instance or collection, received ${TO(pp)}`), !1;
        const Sp = Ip.parent;
        if (!Sp && 0 !== pp[xp]) throw new Error(`Cannot add a detached instance to the StateView. Make sure to assign the "${Ip.ref.constructor.name}" instance to the state before calling view.add()`);
        void 0 === this._root && void 0 !== Ip.root && this._bindRoot(Ip.root);
        const Lp = Sp?.[Up];
        if (!Op && Lp?.isStreamCollection) return Qi(Sp, this.id, Ip.parentIndex), !0;
        const Yp = pp.constructor[Symbol.metadata],
          Dp = this.isVisible(Ip);
        if (!this.iterable || !cp || Dp && -1 !== this.items.indexOf(pp) || this.items.push(pp), this.markVisible(Ip), cp && Sp && this.addParentOf(Ip, ip), !Op && Ip.isStreamCollection) return !0;
        if (ip === vO && Ip.isNew) return this._markSubtreeVisible(Ip, ip), !1;
        let Ap = this.changes.get(pp[xp]);
        void 0 === Ap && (Ap = new Map, this.changes.set(pp[xp], Ap));
        let Pp = !1;
        const Wp = Ip.encDescriptor.tags;
        if (Ip.forEachChild(((pp, cp) => {
            const Op = Wp[cp];
            if (void 0 !== Op) {
              if (!(Op === vO || ip !== vO && 0 !== (Op & ip))) return
            }
            this.add(pp.ref, ip, !1) && (Pp = !0)
          })), ip !== vO) {
          this.addTag(Ip, ip);
          const pp = Yp?.[Ep];
          if (void 0 !== pp)
            for (let cp = ip; cp > 0; cp &= cp - 1) pp[cp & -cp]?.forEach((pp => {
              Ip.getChange(pp) !== op.DELETE && Ap.set(pp, op.ADD)
            }))
        }
        if ((ip === vO || !Dp) && (!Ip.isNew || Pp))
          if (Ip.isArray && "string" !== typeof Ip.refTarget[wp]) Ip.refTarget.items.length > 0 && (Ap.set(-1, op.ADD), Pp = !0);
          else {
            const pp = Ip.encDescriptor.tags;
            Ip.forEachLive((cp => {
              const Op = pp[cp];
              (void 0 === Op || Op === vO || ip !== vO && 0 !== (Op & ip)) && (Ap.set(cp, op.ADD), Pp = !0)
            }))
          } return Pp
      }
      _markSubtreeVisible(pp, ip) {
        const cp = pp.encDescriptor.tags;
        pp.forEachChild(((pp, Op) => {
          const op = cp[Op];
          if (void 0 !== op) {
            if (!(op === vO || ip !== vO && 0 !== (op & ip))) return
          }
          pp.isNew ? (this.markVisible(pp), this._markSubtreeVisible(pp, ip)) : this._add(pp.ref, ip, !1, !1)
        }))
      }
      addParentOf(pp, ip) {
        const cp = pp.parent[Up],
          Op = pp.parentIndex;
        this.isVisible(cp) || this.markVisible(cp);
        const Ip = cp.parent?.[Up];
        if (Ip && this.addParentOf(cp, ip), cp.hasFilteredFields && cp.getChange(Op) !== op.DELETE) {
          let Ip = this.changes.get(cp.ref[xp]);
          void 0 === Ip && (Ip = new Map, this.changes.set(cp.ref[xp], Ip));
          const Sp = cp.encDescriptor.tags[Op];
          void 0 !== Sp && Sp !== vO && 0 !== (Sp & ip) && this.addTag(cp, ip), Ip.set(cp.isArray ? pp : Op, op.ADD)
        }
      }
      _touchAncestorsOf(pp) {
        let ip = pp.parent?.[Up];
        if (void 0 === ip) return;
        const cp = [];
        for (; void 0 !== ip;) {
          if (ip.hasFilteredFields) {
            const pp = ip.ref[xp];
            if (this.changes.has(pp)) break;
            cp.push(ip)
          }
          ip = ip.parent?.[Up]
        }
        for (let Op = cp.length - 1; Op >= 0; Op--) this.changes.set(cp[Op].ref[xp], new Map)
      }
      remove(pp) {
        let ip = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : vO,
          cp = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        const Op = pp?.[Up];
        if (!Op) return console.warn(`StateView#remove(): expected a Schema instance or collection, received ${TO(pp)}`), this;
        const Ip = Op.parent?.[Up];
        if (Ip?.isStreamCollection) return this.unmarkVisible(Op), this.iterable && !cp && JO(this.items, this.items.indexOf(pp)),
          function(pp, ip, cp, Op, Ip) {
            const Sp = pp._stream;
            if (void 0 === Sp) return !1;
            const xp = Sp.pendingByView.get(ip);
            if (xp?.has(Op)) return xp.delete(Op), !1;
            const Lp = Sp.sentByView.get(ip);
            if (Lp?.has(Op)) {
              Lp.delete(Op);
              let pp = Ip.get(cp);
              return void 0 === pp && (pp = new Map, Ip.set(cp, pp)), pp.set(Op, op.DELETE), !0
            }
          }(Op.parent, this.id, Op.parent[xp], Op.parentIndex, this.changes), this._recursiveDeleteVisibleChangeTree(Op), this;
        if (Op.isStreamCollection) {
          this.unmarkVisible(Op), this.iterable && !cp && JO(this.items, this.items.indexOf(pp));
          const ip = Op.ref,
            Ip = ip._stream;
          if (void 0 !== Ip) {
            Ip.pendingByView.get(this.id)?.clear();
            const pp = Ip.sentByView.get(this.id);
            if (void 0 !== pp && pp.size > 0) {
              const cp = ip[xp];
              let Op = this.changes.get(cp);
              void 0 === Op && (Op = new Map, this.changes.set(cp, Op));
              for (const ip of pp) Op.set(ip, op.DELETE);
              pp.clear()
            }
          }
          return this
        }
        this.unmarkVisible(Op), this.iterable && !cp && JO(this.items, this.items.indexOf(pp));
        const Sp = Op.ref,
          Lp = Sp.constructor[Symbol.metadata],
          Yp = Sp[xp];
        this._touchAncestorsOf(Op);
        let Dp = this.changes.get(Yp);
        if (void 0 === Dp && (Dp = new Map, this.changes.set(Yp, Dp)), ip === vO) {
          const pp = Op.parent;
          if (pp && !si.isValidInstance(pp) && Op.isFiltered) {
            const ip = Ip.isArray ? Op : Op.parentIndex,
              cp = pp[xp];
            let Sp = this.changes.get(cp);
            void 0 === Sp ? (Sp = new Map, this.changes.set(cp, Sp)) : Sp.get(ip) === op.ADD && this._dropPendingEntries(Op), Sp.set(ip, op.DELETE), this._recursiveDeleteVisibleChangeTree(Op)
          } else Lp?.[Cp]?.forEach((pp => this._removeViewField(Op, Dp, pp)))
        } else {
          const pp = Lp?.[Ep];
          if (void 0 !== pp)
            for (let cp = ip; cp > 0; cp &= cp - 1) pp[cp & -cp]?.forEach((pp => this._removeViewField(Op, Dp, pp)))
        }
        return void 0 === ip ? this.removeAllTagsOnTree(Op) : this.removeTag(Op, ip), this
      }
      has(pp) {
        return this.isVisible(pp[Up])
      }
      hasTag(pp) {
        let ip = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : vO;
        return this.hasTagOnTree(pp[Up], ip)
      }
      subscribe(pp, ip) {
        const cp = pp?.[Up];
        if (!cp) return console.warn(`StateView#subscribe(): expected a Schema collection, received ${TO(pp)}`), this;
        if (void 0 === this._root && void 0 !== cp.root && this._bindRoot(cp.root), void 0 !== ip)
          if (cp.isStreamCollection) {
            const cp = Mi(pp);
            null === ip ? cp.priorityByView?.delete(this.id) : (cp.priorityByView ??= new Map).set(this.id, ip)
          } else {
            const ip = pp?.constructor?.name ?? "collection",
              Op = cp.parent;
            if (void 0 === Op) console.warn(`StateView#subscribe(): \`priority\` ignored \u2014 this ${ip} is not attached to a state yet, so it cannot be identified as a stream. Subscribe after assigning it to the state.`);
            else {
              const pp = Op?.constructor?.[Symbol.metadata]?.[cp.parentIndex]?.name,
                op = pp ? `${Op.constructor.name}#${pp}` : ip;
              console.warn(`StateView#subscribe(): \`priority\` ignored \u2014 ${op} is a ${ip}, not a streaming collection. Declare the field with .stream() (e.g. t.map(X).stream()) or use t.stream(X) to enable priority batching.`)
            }
          } if (this.isSubscribed(cp)) return this;
        const Op = void 0 !== cp.parent && !this.isVisible(cp);
        if (Op ? (this.addParentOf(cp, vO), this._add(pp, vO, !1, !1)) : this.markVisible(cp), this._setSubscribed(cp), cp.isStreamCollection) {
          const ip = pp;
          cp.forEachChild(((pp, cp) => {
            Qi(ip, this.id, cp)
          }))
        } else Op || cp.forEachChild((pp => {
          this.markVisible(pp)
        }));
        return this
      }
      unsubscribe(pp) {
        const ip = pp?.[Up];
        if (!ip) return console.warn(`StateView#unsubscribe(): expected a Schema collection, received ${TO(pp)}`), this;
        if (!this.isSubscribed(ip)) return this;
        this._clearSubscribed(ip);
        const cp = ip.ref[xp];
        if (ip.isStreamCollection) {
          const ip = pp._stream;
          if (void 0 !== ip) {
            ip.pendingByView.get(this.id)?.clear();
            const pp = ip.sentByView.get(this.id);
            if (void 0 !== pp && pp.size > 0) {
              let ip = this.changes.get(cp);
              void 0 === ip && (ip = new Map, this.changes.set(cp, ip));
              for (const cp of pp) ip.set(cp, op.DELETE);
              pp.clear()
            }
          }
        } else {
          const pp = ip.isArray;
          let Op = this.changes.get(cp);
          ip.forEachChild(((ip, Ip) => {
            void 0 === Op && (Op = new Map, this.changes.set(cp, Op)), Op.set(pp ? ip : Ip, op.DELETE), this.unmarkVisible(ip)
          }))
        }
        return this.unmarkVisible(ip), this
      }
      clear() {
        if (!this.iterable) throw new Error("StateView#clear() is only available for iterable StateView's. Use StateView(iterable: true) constructor.");
        for (let pp = 0, ip = this.items.length; pp < ip; pp++) this.remove(this.items[pp], vO, !0);
        this.items.length = 0
      }
      isChangeTreeVisible(pp) {
        let ip = this.isVisible(pp);
        if (!ip && pp.isVisibilitySharedWithParent)
          if (this.isVisible(pp.parent[Up])) this.markVisible(pp), ip = !0;
          else
            for (let cp = pp.extraParents; void 0 !== cp; cp = cp.next) {
              const Op = cp.ref[Up];
              if (Op.isFiltered && this.isVisible(Op)) {
                this.markVisible(pp), ip = !0;
                break
              }
            }
        return ip
      }
      _recursiveDeleteVisibleChangeTree(pp) {
        pp.forEachChild((pp => {
          this.unmarkVisible(pp), this._recursiveDeleteVisibleChangeTree(pp)
        }))
      }
      _dropPendingEntries(pp) {
        this.changes.delete(pp.ref[xp]), pp.forEachChild((pp => this._dropPendingEntries(pp)))
      }
      _removeViewField(pp, ip, cp) {
        const Op = ip.get(cp) === op.ADD;
        ip.set(cp, op.DELETE);
        const Ip = pp.ref[pp.encDescriptor.names[cp]],
          Sp = Ip?.[Up];
        Sp && (this.unmarkVisible(Sp), this._recursiveDeleteVisibleChangeTree(Sp), Op && this._dropPendingEntries(Sp))
      }
    }

    function bO(pp) {
      pp.structSwitchEmitted || (pp.shouldEmitSwitch && (pp.buffer[pp.it.offset++] = 255, Oi.number(pp.buffer, pp.ref[xp], pp.it)), pp.structSwitchEmitted = !0)
    }

    function hO(pp, ip) {
      FO(pp, ip, op.ADD)
    }

    function aO(pp, ip) {
      if (ip._fullSyncGen === pp.gen) return;
      ip._fullSyncGen = pp.gen;
      if (!pp.hasView || pp.view.isChangeTreeVisible(ip)) {
        const cp = ip.encDescriptor;
        pp.changeTree = ip, pp.ref = ip.ref, pp.encoder = cp.encoder, pp.filter = cp.filter, pp.metadata = cp.metadata, pp.treeIsFiltered = ip.isFiltered, pp.isSchema = cp.isSchema, pp.filterBitmask = cp.filterBitmask, pp.tags = cp.tags, pp.structSwitchEmitted = !1, pp.shouldEmitSwitch = pp.hasView || pp.it.offset > pp.initialOffset || ip !== pp.rootChangeTree, ip.isArray && ip.collDirty.size > 0 && (ip.flags |= 512), xc(ip, pp, hO)
      }
      dc(ip, pp, nO)
    }

    function nO(pp, ip, cp) {
      aO(pp, ip)
    }

    function FO(pp, ip, cp) {
      if (ip < 0) {
        if (pp.treeIsFiltered !== pp.emitFiltered) return;
        return bO(pp), void(pp.buffer[pp.it.offset++] = 255 & Math.abs(ip))
      }
      if ((pp.isSchema ? pp.treeIsFiltered || (ip < 32 ? 0 !== (pp.filterBitmask & 1 << ip) : void 0 !== pp.tags[ip]) : pp.treeIsFiltered) !== pp.emitFiltered) return;
      const Op = pp.isEncodeAll ? op.ADD : cp;
      void 0 !== Op && (void 0 === pp.filter || pp.filter(pp.ref, ip, pp.view)) && (bO(pp), pp.encoder(pp.self, pp.buffer, pp.changeTree, ip, Op, pp.it, pp.isEncodeAll, pp.hasView, pp.metadata))
    }

    function gO(pp, ip) {
      const cp = new Uint8Array(pp.length + ip.length);
      return cp.set(pp, 0), cp.set(ip, pp.length), cp
    }
    class GO {
      static BUFFER_SIZE = 16384;
      sharedBuffer = new Uint8Array(GO.BUFFER_SIZE);
      context;
      state;
      root;
      constructor(pp, ip) {
        this.context = ni.cache(pp.constructor), this.root = ip ?? new QO(this.context), this.setState(pp)
      }
      setState(pp) {
        this.state = pp, this.state[Up].setRoot(this.root)
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
        let pp = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
            offset: 0
          },
          ip = arguments.length > 1 ? arguments[1] : void 0,
          cp = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : this.sharedBuffer,
          Op = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : pp.offset;
        return this._encodeChannel(pp, ip, cp, Op, !1)
      }
      encodeUnreliable() {
        let pp = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
            offset: 0
          },
          ip = arguments.length > 1 ? arguments[1] : void 0,
          cp = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : this.sharedBuffer,
          Op = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : pp.offset;
        return this._encodeChannel(pp, ip, cp, Op, !0)
      }
      _encodeChannel(pp, ip, cp, Op, op) {
        this.root.pendingFilterRefresh.length > 0 && Yc(this.root);
        const Ip = void 0 !== ip,
          Sp = this.state[Up],
          xp = this._encodeCtx;
        xp.self = this, xp.buffer = cp, xp.it = pp, xp.view = ip, xp.isEncodeAll = !1, xp.hasView = Ip, xp.emitFiltered = Ip;
        let Lp = op ? this.root.unreliableChanges : this.root.changes;
        for (; Lp = Lp.next;) {
          const cp = Lp.changeTree;
          if (Ip && !ip.isChangeTreeVisible(cp)) continue;
          const Yp = op ? cp.unreliableRecorder : cp;
          if (!Yp || !Yp.has()) continue;
          const Dp = cp.encDescriptor;
          xp.changeTree = cp, xp.ref = cp.ref, xp.encoder = Dp.encoder, xp.filter = Dp.filter, xp.metadata = Dp.metadata, xp.treeIsFiltered = cp.isFiltered, xp.isSchema = Dp.isSchema, xp.filterBitmask = Dp.filterBitmask, xp.tags = Dp.tags, xp.structSwitchEmitted = !1, xp.isRootTree = cp === Sp, xp.shouldEmitSwitch = Ip || pp.offset > Op || !xp.isRootTree, Yp.forEachWithCtx(xp, FO)
        }
        return op || Ip || !this._isStreamBroadcastMode || this._emitStreamBroadcast(cp, pp), pp.offset > cp.byteLength ? (cp = this._resizeBuffer(cp, pp.offset), pp.offset = Op, this._encodeChannel(pp, ip, cp, Op, op)) : cp.subarray(0, pp.offset)
      }
      encodeFullSync(pp, ip, cp, Op) {
        let op = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : pp.offset;
        this.root.pendingFilterRefresh.length > 0 && Yc(this.root);
        const Ip = void 0 !== Op,
          Sp = this.state[Up],
          xp = this._encodeCtx;
        return xp.self = this, xp.buffer = ip, xp.it = pp, xp.view = Op, xp.isEncodeAll = !0, xp.hasView = Ip, xp.emitFiltered = cp, xp.gen = ++this._fullSyncGen, xp.initialOffset = op, xp.rootChangeTree = Sp, aO(xp, Sp), pp.offset > ip.byteLength ? (ip = this._resizeBuffer(ip, pp.offset), pp.offset = op, this.encodeFullSync(pp, ip, cp, Op, op)) : ip.subarray(0, pp.offset)
      }
      _resizeBuffer(pp, ip) {
        const cp = Math.ceil(ip / GO.BUFFER_SIZE) * GO.BUFFER_SIZE,
          Op = new Uint8Array(cp);
        return Op.set(pp), pp === this.sharedBuffer && (this.sharedBuffer = Op), Op
      }
      encodeAll() {
        let pp = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
            offset: 0
          },
          ip = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.sharedBuffer;
        return this.encodeFullSync(pp, ip, !1)
      }
      encodeAllView(pp, ip, cp) {
        let Op = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : this.sharedBuffer;
        const op = cp.offset;
        return Op = this.encodeFullSync(cp, Op, !0, pp, op), gO(Op.subarray(0, ip), Op.subarray(op, cp.offset))
      }
      ensureCapacity(pp, ip) {
        if (ip + GO.BUFFER_SIZE <= pp.byteLength) return pp;
        const cp = Math.ceil((ip + GO.BUFFER_SIZE) / GO.BUFFER_SIZE) * GO.BUFFER_SIZE,
          Op = new Uint8Array(cp);
        return Op.set(pp.subarray(0, ip)), pp === this.sharedBuffer && (this.sharedBuffer = Op), Op
      }
      encodeView(pp, ip, cp) {
        let Op = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : this.sharedBuffer,
          Ip = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4];
        const Sp = cp.offset;
        this._emitStreamPriority(pp);
        for (const Lp of pp.changes.keys()) {
          const ip = pp.changes.get(Lp),
            Ip = this.root.changeTrees[Lp];
          if (void 0 === Ip) {
            pp.changes.delete(Lp);
            continue
          }
          if (0 === ip.size) continue;
          const Sp = Ip.encDescriptor,
            Yp = Sp.encoder,
            Dp = Sp.metadata,
            Ap = Ip.ref,
            Wp = Ip.refTarget;
          Op = this.ensureCapacity(Op, cp.offset), Op[cp.offset++] = 255, Oi.number(Op, Ap[xp], cp);
          for (const [Lp, yp] of ip) {
            let ip;
            if (-1 === Lp) {
              const pp = Wp.tmpItems,
                ip = Wp.deletedIndexes;
              for (let Sp = 0; Sp < pp.length; Sp++) void 0 !== pp[Sp] && !0 !== ip[Sp] && Yp(this, Op, Ip, Sp, op.ADD, cp, !1, !0, Dp);
              continue
            }
            if ("number" === typeof Lp) ip = Lp;
            else {
              const cp = Lp.indexInParent(Ap);
              if (void 0 === cp) continue;
              if (ip = cp, yp === op.ADD && Ip.getChange(ip) === op.DELETE) {
                pp.changes.delete(Lp.ref[xp]);
                continue
              }
            }
            Yp(this, Op, Ip, ip, void 0 !== Wp[Pp](ip) && yp || op.DELETE, cp, !1, !0, Dp)
          }
        }
        return pp.changes.clear(), Op = this.encode(cp, pp, Op), Ip ? gO(Op.subarray(0, ip), Op.subarray(Sp, cp.offset)) : Op.subarray(Sp, cp.offset)
      }
      encodeUnreliableView(pp, ip, cp) {
        let Op = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : this.sharedBuffer;
        const op = cp.offset;
        return Op = this.encodeUnreliable(cp, pp, Op, op), gO(Op.subarray(0, ip), Op.subarray(op, cp.offset))
      }
      _emitStreamBroadcast(pp, ip) {
        const cp = this.root.streamTrees;
        for (const Op of cp) {
          const cp = Op,
            Ip = cp[Up],
            Sp = cp[xp];
          if (void 0 === Sp) continue;
          const Lp = cp._stream,
            Yp = Lp.broadcastDeletes,
            Dp = Lp.broadcastPending,
            Ap = Lp.sentBroadcast,
            Wp = Yp.size > 0,
            yp = Dp.size > 0,
            wp = Ip.encDescriptor,
            vp = wp.encoder,
            tp = wp.metadata;
          if (Wp || yp) {
            if (pp[ip.offset++] = 255, Oi.number(pp, Sp, ip), Wp) {
              for (const cp of Yp) vp(this, pp, Ip, cp, op.DELETE, ip, !1, !1, tp);
              Yp.clear()
            }
            const Op = Lp.maxPerTick,
              yp = [];
            let wp = 0;
            const Hp = [];
            for (const Sp of Dp) {
              if (wp >= Op) break;
              const xp = cp[Pp](Sp);
              void 0 !== xp ? (vp(this, pp, Ip, Sp, op.ADD, ip, !1, !1, tp), Ap.add(Sp), yp.push(xp), Hp.push(Sp), wp++) : Hp.push(Sp)
            }
            for (const pp of Hp) Dp.delete(pp);
            for (const cp of yp) {
              const Op = cp[Up];
              if (void 0 === Op) continue;
              const Ip = cp[xp];
              if (void 0 === Ip) continue;
              pp[ip.offset++] = 255, Oi.number(pp, Ip, ip);
              const Sp = Op.encDescriptor,
                Lp = Sp.encoder,
                Yp = Sp.metadata;
              Op.forEachLive((cp => {
                si.hasUnreliableAtIndex(Yp, cp) || Lp(this, pp, Op, cp, op.ADD, ip, !1, !1, Yp)
              }))
            }
          }
          for (const Op of Ap) {
            const op = cp[Pp](Op);
            if (void 0 === op) continue;
            const Ip = op[Up];
            if (void 0 === Ip || !Ip.has()) continue;
            const Sp = op[xp];
            if (void 0 === Sp) continue;
            pp[ip.offset++] = 255, Oi.number(pp, Sp, ip);
            const Lp = Ip.encDescriptor,
              Yp = Lp.encoder,
              Dp = Lp.metadata;
            Ip.forEach(((cp, Op) => {
              cp < 0 || si.hasUnreliableAtIndex(Dp, cp) || Yp(this, pp, Ip, cp, Op, ip, !1, !1, Dp)
            }))
          }
        }
      }
      _emitStreamPriority(pp) {
        const ip = this.root.streamTrees;
        if (0 === ip.size) return;
        const cp = pp.id;
        for (const Op of ip) {
          const ip = Op,
            Ip = ip._stream,
            Sp = Ip.pendingByView.get(cp);
          if (void 0 === Sp || 0 === Sp.size) continue;
          const Lp = Ip.priorityByView?.get(cp),
            Yp = void 0 !== Lp,
            Dp = Ip.priority,
            Ap = Ip.maxPerTick,
            Wp = [],
            yp = [];
          if (Yp || void 0 !== Dp) {
            const cp = [],
              Op = [];
            let op = 0;
            for (const Ip of Sp) {
              const Sp = ip[Pp](Ip);
              if (void 0 === Sp) {
                yp.push(Ip);
                continue
              }
              const xp = Yp ? Lp(Sp) : Dp(pp, Sp);
              if (op < Ap) {
                let pp = op++;
                for (; pp > 0 && Op[pp - 1] < xp;) Op[pp] = Op[pp - 1], cp[pp] = cp[pp - 1], pp--;
                Op[pp] = xp, cp[pp] = Ip
              } else if (xp > Op[Ap - 1]) {
                let pp = Ap - 1;
                for (; pp > 0 && Op[pp - 1] < xp;) Op[pp] = Op[pp - 1], cp[pp] = cp[pp - 1], pp--;
                Op[pp] = xp, cp[pp] = Ip
              }
            }
            for (let pp = 0; pp < op; pp++) Wp.push(cp[pp])
          } else
            for (const pp of Sp) {
              if (Wp.length >= Ap) break;
              Wp.push(pp)
            }
          for (const pp of yp) Sp.delete(pp);
          const wp = Wp.length;
          let vp = Ip.sentByView.get(cp);
          void 0 === vp && (vp = new Set, Ip.sentByView.set(cp, vp));
          for (let cp = 0; cp < wp; cp++) {
            const Op = Wp[cp],
              Ip = ip[Pp](Op);
            if (void 0 === Ip) {
              Sp.delete(Op);
              continue
            }
            pp._addImmediate(Ip);
            const Lp = Ip[Up];
            if (void 0 !== Lp) {
              const ip = Ip[xp];
              let cp = pp.changes.get(ip);
              void 0 === cp && (cp = new Map, pp.changes.set(ip, cp));
              const Op = Lp.metadata;
              Lp.forEachLive((pp => {
                si.hasUnreliableAtIndex(Op, pp) || cp.set(pp, op.ADD)
              }))
            }
            Sp.delete(Op), vp.add(Op)
          }
        }
      }
      discardChanges() {
        const pp = this.root.changes;
        let ip = pp.next;
        const cp = this.root;
        for (; ip;) {
          const pp = ip.next;
          ip.changeTree.endEncode(), cp.releaseNode(ip), ip = pp
        }
        pp.next = void 0, pp.tail = void 0
      }
      discardUnreliableChanges() {
        const pp = this.root.unreliableChanges;
        let ip = pp.next;
        const cp = this.root;
        for (; ip;) {
          const pp = ip.next;
          ip.changeTree.endEncodeUnreliable(), cp.releaseNode(ip), ip = pp
        }
        pp.next = void 0, pp.tail = void 0
      }
      tryEncodeTypeId(pp, ip, cp, Op) {
        const op = this.context.getTypeId(ip),
          Ip = this.context.getTypeId(cp);
        void 0 !== Ip ? op !== Ip && (pp[Op.offset++] = 213, Oi.number(pp, Ip, Op)) : console.warn(`@colyseus/schema WARNING: Class "${cp.name}" is not registered on TypeRegistry - Please either tag the class with @entity or define a @type() field.`)
      }
      get hasChanges() {
        return void 0 !== this.root.changes.next || this._hasStreamBacklog()
      }
      get _isStreamBroadcastMode() {
        return 0 === this.root.activeViews.size && this.root.streamTrees.size > 0
      }
      _hasStreamBacklog() {
        const pp = this.root;
        if (0 === pp.streamTrees.size) return !1;
        const ip = 0 === pp.activeViews.size;
        for (const cp of pp.streamTrees)
          if (ip ? li(cp) : Xi(cp, pp)) return !0;
        return !1
      }
      get hasUnreliableChanges() {
        return void 0 !== this.root.unreliableChanges.next
      }
    }
    class rO extends Error {
      constructor(pp) {
        super(pp), this.name = "DecodingWarning"
      }
    }
    const ZO = {
      value: 0,
      enumerable: !1,
      writable: !0
    };
    class zO {
      refs = new Map;
      refCount = {};
      deletedRefs = new Set;
      callbacks = {};
      nextUniqueId = 0;
      getNextUniqueId() {
        return this.nextUniqueId++
      }
      addRef(pp, ip) {
        let cp = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        this.refs.set(pp, ip), void 0 === ip[xp] ? (ZO.value = pp, Object.defineProperty(ip, xp, ZO)) : ip[xp] !== pp && (ip[xp] = pp), cp && (this.refCount[pp] = (this.refCount[pp] || 0) + 1), this.deletedRefs.has(pp) && this.deletedRefs.delete(pp)
      }
      removeRef(pp) {
        const ip = this.refCount[pp];
        if (void 0 !== ip)
          if (0 !== ip)(this.refCount[pp] = ip - 1) <= 0 && this.deletedRefs.add(pp);
          else try {
            const ip = this.refs.get(pp);
            throw new rO(`trying to remove refId '${pp}' with 0 refCount (${ip.constructor.name}: ${JSON.stringify(ip)})`)
          } catch (Lo) {
            console.warn(Lo)
          } else try {
            throw new rO("trying to remove refId that doesn't exist: " + pp)
          } catch (Lo) {
            console.warn(Lo)
          }
      }
      clearRefs() {
        this.refs.clear(), this.deletedRefs.clear(), this.callbacks = {}, this.refCount = {}
      }
      garbageCollectDeletedRefs() {
        this.deletedRefs.forEach((pp => {
          if (this.refCount[pp] > 0) return;
          const ip = this.refs.get(pp),
            cp = ip.constructor[Symbol.metadata];
          if (null != cp)
            for (const Op in cp) {
              const pp = ip[cp[Op].name];
              if ("object" === typeof pp && pp) {
                const ip = pp[xp];
                void 0 === ip || this.deletedRefs.has(ip) || this.removeRef(ip)
              }
            } else "function" === typeof ip[wp] && Array.from(ip.values()).forEach((pp => {
              const ip = pp[xp];
              void 0 === ip || this.deletedRefs.has(ip) || this.removeRef(ip)
            }));
          this.refs.delete(pp), delete this.refCount[pp], delete this.callbacks[pp]
        })), this.deletedRefs.clear()
      }
      addCallback(pp, ip, cp) {
        if (void 0 === pp) {
          const pp = "number" === typeof ip ? op[ip] : ip;
          throw new Error(`Can't addCallback on '${pp}' (refId is undefined)`)
        }
        return this.callbacks[pp] || (this.callbacks[pp] = {}), this.callbacks[pp][ip] || (this.callbacks[pp][ip] = []), this.callbacks[pp][ip].push(cp), () => this.removeCallback(pp, ip, cp)
      }
      removeCallback(pp, ip, cp) {
        const Op = this.callbacks?.[pp]?.[ip]?.indexOf(cp);
        void 0 !== Op && -1 !== Op && JO(this.callbacks[pp][ip], Op)
      }
    }
    class sO {
      context;
      state;
      root;
      currentRefId = 0;
      ZE;
      resyncVisited = null;
      resyncDamaged = !1;
      constructor(pp, ip) {
        this.setState(pp), this.context = ip || new ni(pp.constructor)
      }
      setState(pp) {
        this.state = pp, this.root = new zO, this.root.addRef(0, pp)
      }
      decode(pp) {
        let ip = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
            offset: 0
          },
          cp = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : this.state;
        const op = void 0 !== this.ZE ? [] : null,
          Ip = this.root,
          Sp = pp.byteLength;
        let xp = cp.constructor[Dp];
        for (this.currentRefId = 0; ip.offset < Sp;) {
          if (pp[ip.offset] == Op) {
            ip.offset++, cp[dp]?.();
            const Op = ei.number(pp, ip),
              op = Ip.refs.get(Op);
            op ? (cp = op, xp = cp.constructor[Dp], this.currentRefId = Op) : (console.error(`"refId" not found: ${Op}`, {
              previousRef: cp,
              previousRefId: this.currentRefId
            }), console.warn("Please report this issue to the developers."), this.skipCurrentStructure(pp, ip, Sp));
            continue
          } - 1 !== xp(this, pp, ip, cp, op) || (console.warn("@colyseus/schema: definition mismatch"), this.skipCurrentStructure(pp, ip, Sp))
        }
        return cp[dp]?.(), null !== this.resyncVisited && function(pp, ip) {
          pp.resyncDamaged ? console.warn("@colyseus/schema: resync sweep skipped \u2014 parts of the payload could not be decoded. Stale entries may persist until the next resync.") : nc(pp, pp.state, new Set, ip)
        }(this, op), null !== op && this.ZE?.(op), Ip.garbageCollectDeletedRefs(), op
      }
      decodeResync(pp) {
        let ip = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
          offset: 0
        };
        this.resyncVisited = new Map, this.resyncDamaged = !1;
        try {
          return this.decode(pp, ip)
        } finally {
          this.resyncVisited = null
        }
      }
      skipCurrentStructure(pp, ip, cp) {
        null !== this.resyncVisited && (this.resyncDamaged = !0);
        const op = {
          offset: ip.offset
        };
        for (; ip.offset < cp && (pp[ip.offset] !== Op || (op.offset = ip.offset + 1, !this.root.refs.has(ei.number(pp, op))));) ip.offset++
      }
      getInstanceType(pp, ip, cp) {
        let Op;
        if (213 === pp[ip.offset]) {
          ip.offset++;
          const cp = ei.number(pp, ip);
          Op = this.context.get(cp)
        }
        return Op || cp
      }
      createInstanceOfType(pp) {
        return pp.initializeForDecoder()
      }
      removeChildRefs(pp, ip) {
        const cp = "string" !== typeof pp[wp],
          Op = pp[xp];
        pp.forEach(((Ip, Sp) => {
          ip?.push({
            ref: pp,
            refId: Op,
            op: op.DELETE,
            field: Sp,
            value: void 0,
            previousValue: Ip
          }), cp && this.root.removeRef(Ip[xp])
        }))
      }
    }
    const KO = CO({
        min: wO.float64(),
        max: wO.float64(),
        bits: wO.uint8(),
        mode: wO.uint8()
      }, "QuantizedDescriptor"),
      VO = CO({
        name: wO.string(),
        type: wO.string(),
        referencedType: wO.number(),
        childPrimitive: wO.string(),
        quantized: wO.ref(KO).optional()
      }, "ReflectionField"),
      po = CO({
        id: wO.number(),
        extendsId: wO.number(),
        fields: wO.array(VO)
      }, "ReflectionType"),
      io = CO({
        types: wO.array(po),
        rootType: wO.number()
      }, "Reflection");

    function co(pp) {
      const ip = pp.root,
        cp = ip.callbacks,
        Op = new WeakMap;
      let Ip;

      function Sp(pp, cp) {
        let Yp = cp.instance?.constructor[Symbol.metadata] || pp,
          Dp = cp.instance && "function" === typeof cp.instance.forEach || pp && !XO.is(pp);
        if (Yp && !Dp) {
          const pp = function(pp, op, Sp, Lp) {
            return Lp && void 0 !== cp.instance[op] && !Op.has(Ip) && Sp(cp.instance[op], void 0), ip.addCallback(pp[xp], op, Sp)
          };
          return new Proxy({
            listen: function(ip, op) {
              let Sp = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
              if (cp.instance) return pp(cp.instance, ip, op, Sp);
              {
                let xp = () => {};
                return cp.onInstanceAvailable(((cp, Lp) => {
                  xp = pp(cp, ip, op, Sp && Lp && !Op.has(Ip))
                })), () => xp()
              }
            },
            onChange: function(pp) {
              return ip.addCallback(cp.instance[xp], op.REPLACE, pp)
            },
            bindTo: function(pp, Op) {
              return Op || (Op = Object.keys(Yp).map((pp => Yp[pp].name))), ip.addCallback(cp.instance[xp], op.REPLACE, (() => {
                Op.forEach((ip => pp[ip] = cp.instance[ip]))
              }))
            }
          }, {
            get(pp, ip) {
              const Op = Yp[Yp[ip]];
              if (Op) {
                const pp = cp.instance?.[ip],
                  op = Op => {
                    const op = Lp(cp.instance).listen(ip, ((pp, ip) => {
                      Op(pp, !1), op?.()
                    }), !1);
                    void 0 !== pp?.[xp] && Op(pp, !0)
                  };
                return Sp(Op.type, {
                  instance: void 0 !== pp?.[xp] && pp,
                  parentInstance: cp.instance,
                  onInstanceAvailable: op
                })
              }
              return pp[ip]
            },
            has: (pp, ip) => void 0 !== Yp[ip],
            set(pp, ip, cp) {
              throw new Error("not allowed")
            },
            deleteProperty(pp, ip) {
              throw new Error("not allowed")
            }
          })
        } {
          const pp = function(pp, cp, Sp) {
              return Sp && pp.forEach(((pp, ip) => cp(pp, ip))), ip.addCallback(pp[xp], op.ADD, ((pp, ip) => {
                Op.set(cp, !0), Ip = cp, cp(pp, ip), Op.delete(cp), Ip = void 0
              }))
            },
            Sp = function(pp, cp) {
              return ip.addCallback(pp[xp], op.DELETE, cp)
            },
            Lp = function(pp, cp) {
              return ip.addCallback(pp[xp], op.REPLACE, cp)
            };
          return new Proxy({
            Lk: function(ip) {
              let op = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
              if (cp.instance) return pp(cp.instance, ip, op && !Op.has(Ip));
              if (cp.onInstanceAvailable) {
                let Sp = () => {};
                return cp.onInstanceAvailable(((cp, xp) => {
                  Sp = pp(cp, ip, op && xp && !Op.has(Ip))
                })), () => Sp()
              }
            },
            uE: function(pp) {
              if (cp.instance) return Sp(cp.instance, pp);
              if (cp.onInstanceAvailable) {
                let ip = () => {};
                return cp.onInstanceAvailable((cp => {
                  ip = Sp(cp, pp)
                })), () => ip()
              }
            },
            onChange: function(pp) {
              if (cp.instance) return Lp(cp.instance, pp);
              if (cp.onInstanceAvailable) {
                let ip = () => {};
                return cp.onInstanceAvailable((cp => {
                  ip = Lp(cp, pp)
                })), () => ip()
              }
            }
          }, {
            get(pp, ip) {
              if (!pp[ip]) throw new Error(`Can't access '${ip}' through callback proxy. access the instance directly.`);
              return pp[ip]
            },
            has: (pp, ip) => void 0 !== pp[ip],
            set(pp, ip, cp) {
              throw new Error("not allowed")
            },
            deleteProperty(pp, ip) {
              throw new Error("not allowed")
            }
          })
        }
      }

      function Lp(pp) {
        return Sp(void 0, {
          instance: pp
        })
      }
      return pp.ZE = function(pp) {
        const ip = new Set;
        for (let Op = 0, Ip = pp.length; Op < Ip; Op++) {
          const Ip = pp[Op],
            Sp = Ip.refId,
            Lp = Ip.ref,
            Yp = cp[Sp];
          if (Yp) {
            if ((Ip.op & op.DELETE) === op.DELETE && XO.isSchema(Ip.previousValue)) {
              const pp = cp[Ip.previousValue[xp]]?.[op.DELETE];
              for (let ip = pp?.length - 1; ip >= 0; ip--) pp[ip]()
            }
            if (XO.isSchema(Lp)) {
              if (!ip.has(Sp)) {
                const pp = Yp?.[op.REPLACE];
                for (let ip = pp?.length - 1; ip >= 0; ip--) pp[ip]()
              }
              if (Yp.hasOwnProperty(Ip.field)) {
                const pp = Yp[Ip.field];
                for (let ip = pp?.length - 1; ip >= 0; ip--) pp[ip](Ip.value, Ip.previousValue)
              }
            } else {
              if ((Ip.op & op.DELETE) === op.DELETE) {
                if (void 0 !== Ip.previousValue) {
                  const pp = Yp[op.DELETE];
                  for (let ip = pp?.length - 1; ip >= 0; ip--) pp[ip](Ip.previousValue, Ip.dynamicIndex ?? Ip.field)
                }
                if ((Ip.op & op.ADD) === op.ADD) {
                  const pp = Yp[op.ADD];
                  for (let ip = pp?.length - 1; ip >= 0; ip--) pp[ip](Ip.value, Ip.dynamicIndex ?? Ip.field)
                }
              } else if ((Ip.op & op.ADD) === op.ADD && Ip.previousValue !== Ip.value) {
                const pp = Yp[op.ADD];
                for (let ip = pp?.length - 1; ip >= 0; ip--) pp[ip](Ip.value, Ip.dynamicIndex ?? Ip.field)
              }
              if (Ip.value !== Ip.previousValue && (void 0 !== Ip.value || void 0 !== Ip.previousValue)) {
                const pp = Yp[op.REPLACE];
                for (let ip = pp?.length - 1; ip >= 0; ip--) pp[ip](Ip.value, Ip.dynamicIndex ?? Ip.field)
              }
            }
            ip.add(Sp)
          }
        }
      }, Lp
    }

    function Oo(pp, ip) {
      pp.ZE = ip
    }
    io.encode = function(pp) {
      let ip = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
        offset: 0
      };
      const cp = pp.context,
        Op = new io,
        op = new GO(Op),
        Ip = cp.schemas.get(pp.state.constructor);
      Ip > 0 && (Op.rootType = Ip);
      const Sp = new Set,
        xp = {},
        Lp = pp => {
          if (void 0 === pp.extendsId || Sp.has(pp.extendsId)) {
            Sp.add(pp.id), Op.types.push(pp);
            const ip = xp[pp.id];
            void 0 !== ip && (delete xp[pp.id], ip.forEach((pp => Lp(pp))))
          } else void 0 === xp[pp.extendsId] && (xp[pp.extendsId] = []), xp[pp.extendsId].push(pp)
        };
      cp.schemas.forEach(((pp, ip) => {
        const Op = new po;
        Op.id = Number(pp);
        const op = Object.getPrototypeOf(ip);
        op !== XO && (Op.extendsId = cp.schemas.get(op));
        const Ip = ip[Symbol.metadata];
        if (Ip !== op[Symbol.metadata]) {
          const pp = Ip[qp] ?? -1;
          for (let ip = 0; ip <= pp; ip++) {
            const pp = Ip[ip];
            if (void 0 === pp) continue;
            const op = pp.name;
            if (!Object.prototype.hasOwnProperty.call(Ip, op)) continue;
            const Sp = new VO;
            let xp;
            if (Sp.name = op, "string" === typeof pp.type) xp = pp.type;
            else if (Ti(pp.type)) {
              const ip = pp.type.quantized;
              xp = "quantized";
              const cp = new KO;
              cp.min = ip.min, cp.max = ip.max, cp.bits = ip.bits, cp.mode = ip.wrap ? 1 : 0, Sp.quantized = cp
            } else {
              let ip;
              XO.is(pp.type) ? (xp = "ref", ip = pp.type) : (xp = Object.keys(pp.type)[0], "string" === typeof pp.type[xp] ? Sp.childPrimitive = pp.type[xp] : ip = pp.type[xp]), Sp.referencedType = ip ? cp.getTypeId(ip) : -1
            }
            Sp.type = xp, Op.fields.push(Sp)
          }
        }
        Lp(Op)
      }));
      for (const Yp in xp) xp[Yp].forEach((pp => Op.types.push(pp)));
      return op.encodeAll(ip).slice(0, ip.offset)
    }, io.decode = function(pp, ip) {
      const cp = new io;
      new sO(cp).decode(pp, ip);
      const Op = new ni;
      cp.types.forEach((pp => {
        const ip = Op.get(pp.extendsId) ?? XO,
          cp = class extends ip {};
        ni.register(cp), Op.add(cp, pp.id)
      }), {});
      cp.types.forEach((pp => {
        const ip = Op.get(pp.id),
          op = si.initialize(ip),
          Ip = [];
        let Sp = pp;
        do {
          Ip.push(Sp), Sp = cp.types.find((pp => pp.id === Sp.extendsId))
        } while (Sp);
        let xp = 0;
        Ip.reverse().forEach((pp => {
          ((pp, ip, cp) => {
            ip.fields.forEach(((ip, op) => {
              const Ip = cp + op;
              if (void 0 !== ip.quantized) {
                const cp = ip.quantized;
                si.addField(pp, Ip, ip.name, {
                  quantized: Ni({
                    min: cp.min,
                    max: cp.max,
                    bits: cp.bits,
                    mode: 1 === cp.mode ? "wrap" : "clamp"
                  })
                })
              } else if (void 0 !== ip.referencedType) {
                const cp = ip.type,
                  op = Op.get(ip.referencedType) ?? ip.childPrimitive;
                "ref" === cp ? si.addField(pp, Ip, ip.name, op) : si.addField(pp, Ip, ip.name, {
                  [cp]: op
                })
              } else si.addField(pp, Ip, ip.name, ip.type)
            }))
          })(op, pp, xp), xp += pp.fields.length
        }))
      }));
      const op = new(Op.get(cp.rootType || 0));
      return new sO(op, Op)
    }, io.makeEncodable = function(pp) {
      const ip = pp[Symbol.metadata];
      if (!ip) return pp;
      const cp = ip[qp];
      if (void 0 === cp) return pp;
      for (let Op = 0; Op <= cp; Op++) {
        const cp = ip[Op];
        cp && si.defineField(pp, ip, Op, cp.name, cp.type)
      }
      return Object.prototype.hasOwnProperty.call(pp, mp) && delete pp[mp], pp
    };
    class oo {
      Wy;
      uniqueRefIds = new Set;
      isTriggering = !1;
      constructor(pp) {
        this.Wy = pp, this.Wy.ZE = this.ZE.bind(this)
      }
      get callbacks() {
        return this.Wy.root.callbacks
      }
      get state() {
        return this.Wy.state
      }
      addCallback(pp, ip, cp) {
        return this.Wy.root.addCallback(pp, ip, cp)
      }
      addCallbackOrWaitCollectionAvailable(pp, ip, cp, Op) {
        let Ip = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4],
          Sp = () => {};
        const Lp = () => Sp(),
          Yp = pp[ip];
        if (Yp && void 0 !== Yp[xp]) return Ip = Ip && !1 === this.isTriggering, cp === op.ADD && Ip && Yp.forEach(((pp, ip) => {
          Op(pp, ip)
        })), this.addCallback(Yp[xp], cp, Op);
        {
          let op;
          return op = this.addCallback(pp[xp], ip, ((pp, ip) => {
            null !== pp && void 0 !== pp && (op(), Sp = this.addCallback(pp[xp], cp, Op))
          })), Sp = op, Lp
        }
      }
      listen() {
        return "string" === typeof(arguments.length <= 0 ? void 0 : arguments[0]) ? this.listenInstance(this.state, arguments.length <= 0 ? void 0 : arguments[0], arguments.length <= 1 ? void 0 : arguments[1], arguments.length <= 2 ? void 0 : arguments[2]) : this.listenInstance(arguments.length <= 0 ? void 0 : arguments[0], arguments.length <= 1 ? void 0 : arguments[1], arguments.length <= 2 ? void 0 : arguments[2], arguments.length <= 3 ? void 0 : arguments[3])
      }
      listenInstance(pp, ip, cp) {
        let Op = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
        Op = Op && !1 === this.isTriggering;
        const op = pp[ip];
        return Op && null !== op && void 0 !== op && cp(op, void 0), this.addCallback(pp[xp], ip, cp)
      }
      onChange() {
        if (2 === arguments.length && "string" !== typeof(arguments.length <= 0 ? void 0 : arguments[0])) {
          const pp = arguments.length <= 0 ? void 0 : arguments[0],
            ip = arguments.length <= 1 ? void 0 : arguments[1];
          return this.addCallback(pp[xp], op.REPLACE, ip)
        }
        return "string" === typeof(arguments.length <= 0 ? void 0 : arguments[0]) ? this.addCallbackOrWaitCollectionAvailable(this.state, arguments.length <= 0 ? void 0 : arguments[0], op.REPLACE, arguments.length <= 1 ? void 0 : arguments[1]) : this.addCallbackOrWaitCollectionAvailable(arguments.length <= 0 ? void 0 : arguments[0], arguments.length <= 1 ? void 0 : arguments[1], op.REPLACE, arguments.length <= 2 ? void 0 : arguments[2])
      }
      Lk() {
        return "string" === typeof(arguments.length <= 0 ? void 0 : arguments[0]) ? this.addCallbackOrWaitCollectionAvailable(this.state, arguments.length <= 0 ? void 0 : arguments[0], op.ADD, arguments.length <= 1 ? void 0 : arguments[1], !1 !== (arguments.length <= 2 ? void 0 : arguments[2])) : this.addCallbackOrWaitCollectionAvailable(arguments.length <= 0 ? void 0 : arguments[0], arguments.length <= 1 ? void 0 : arguments[1], op.ADD, arguments.length <= 2 ? void 0 : arguments[2], !1 !== (arguments.length <= 3 ? void 0 : arguments[3]))
      }
      uE() {
        return "string" === typeof(arguments.length <= 0 ? void 0 : arguments[0]) ? this.addCallbackOrWaitCollectionAvailable(this.state, arguments.length <= 0 ? void 0 : arguments[0], op.DELETE, arguments.length <= 1 ? void 0 : arguments[1]) : this.addCallbackOrWaitCollectionAvailable(arguments.length <= 0 ? void 0 : arguments[0], arguments.length <= 1 ? void 0 : arguments[1], op.DELETE, arguments.length <= 2 ? void 0 : arguments[2])
      }
      bindTo(pp, ip, cp) {
        let Op = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
        const Ip = pp.constructor[Symbol.metadata];
        cp || (cp = Object.keys(Ip).filter((pp => !isNaN(Number(pp)))).map((pp => Ip[pp].name)));
        const Sp = () => {
          for (const Op of cp) {
            const cp = pp[Op];
            void 0 !== cp && (ip[Op] = cp)
          }
        };
        return Op && Sp(), this.addCallback(pp[xp], op.REPLACE, Sp)
      }
      ZE(pp) {
        this.uniqueRefIds.clear(), this.isTriggering = !0;
        for (let ip = 0, cp = pp.length; ip < cp; ip++) {
          const cp = pp[ip],
            Op = cp.refId,
            Ip = cp.ref,
            Sp = this.callbacks[Op];
          if (Sp) {
            if ((cp.op & op.DELETE) === op.DELETE && XO.isSchema(cp.previousValue)) {
              const pp = cp.previousValue[xp],
                ip = this.callbacks[pp]?.[op.DELETE];
              if (ip)
                for (let cp = ip.length - 1; cp >= 0; cp--) try {
                  ip[cp]()
                } catch (Lo) {
                  console.error(Lo)
                }
            }
            if (XO.isSchema(Ip)) {
              if (!this.uniqueRefIds.has(Op)) {
                const pp = Sp[op.REPLACE];
                if (pp)
                  for (let ip = pp.length - 1; ip >= 0; ip--) try {
                    pp[ip]()
                  } catch (Lo) {
                    console.error(Lo)
                  }
              }
              const pp = Sp[cp.field];
              if (pp)
                for (let ip = pp.length - 1; ip >= 0; ip--) try {
                  pp[ip](cp.value, cp.previousValue)
                } catch (Lo) {
                  console.error(Lo)
                }
            } else {
              const pp = cp.dynamicIndex ?? cp.field;
              if ((cp.op & op.DELETE) === op.DELETE) {
                if (void 0 !== cp.previousValue) {
                  const ip = Sp[op.DELETE];
                  if (ip)
                    for (let Op = ip.length - 1; Op >= 0; Op--) try {
                      ip[Op](cp.previousValue, pp)
                    } catch (Lo) {
                      console.error(Lo)
                    }
                }
                if ((cp.op & op.ADD) === op.ADD) {
                  const ip = Sp[op.ADD];
                  if (ip)
                    for (let Op = ip.length - 1; Op >= 0; Op--) try {
                      ip[Op](cp.value, pp)
                    } catch (Lo) {
                      console.error(Lo)
                    }
                }
              } else if ((cp.op & op.ADD) === op.ADD && cp.previousValue !== cp.value) {
                const ip = Sp[op.ADD];
                if (ip)
                  for (let Op = ip.length - 1; Op >= 0; Op--) try {
                    ip[Op](cp.value, pp)
                  } catch (Lo) {
                    console.error(Lo)
                  }
              }
              if (cp.value !== cp.previousValue) {
                const ip = Sp[op.REPLACE];
                if (ip)
                  for (let Op = ip.length - 1; Op >= 0; Op--) try {
                    ip[Op](pp, cp.value)
                  } catch (Lo) {
                    console.error(Lo)
                  }
              }
            }
            this.uniqueRefIds.add(Op)
          }
        }
        this.isTriggering = !1
      }
    }
    const Io = {
      get(pp) {
        if (pp instanceof sO) return new oo(pp);
        if ("Wy" in pp.DH) return new oo(pp.DH.Wy);
        throw new Error("Invalid room or decoder")
      },
      getLegacy(pp) {
        if (pp instanceof sO) return co(pp);
        if ("Wy" in pp.DH) return co(pp.DH.Wy);
        throw new Error("Invalid room or decoder")
      },
      getRawChanges: (pp, ip) => Oo(pp, ip)
    };
    class So {
      _free = [];
      _factory;
      _maxSize;
      constructor(pp) {
        let ip = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        this._factory = pp, this._maxSize = ip.maxSize ?? 1 / 0;
        const cp = ip.preallocate ?? 0;
        for (let Op = 0; Op < cp; Op++) this._free.push(pp())
      }
      acquire() {
        return this._free.length > 0 ? this._free.pop() : this._factory()
      }
      release(pp) {
        XO.reset(pp), this._free.length < this._maxSize && this._free.push(pp)
      }
      get size() {
        return this._free.length
      }
    }

    function xo(pp) {
      return new So((() => new pp), arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {})
    }
    ki("map", {
      constructor: xO
    }), ki("array", {
      constructor: IO
    }), ki("set", {
      constructor: YO
    }), ki("collection", {
      constructor: LO
    })
  },
  9230: (pp, ip, cp) => {
    cp.r(ip), cp.d(ip, {
      __addDisposableResource: () => Np,
      __assign: () => Ip,
      __asyncDelegator: () => Rp,
      __asyncGenerator: () => mp,
      __asyncValues: () => qp,
      __await: () => kp,
      __awaiter: () => yp,
      __classPrivateFieldGet: () => Qp,
      __classPrivateFieldIn: () => Bp,
      __classPrivateFieldSet: () => Jp,
      __createBinding: () => wp,
      __decorate: () => xp,
      __disposeResources: () => fp,
      __esDecorate: () => Yp,
      __exportStar: () => vp,
      __extends: () => op,
      __generator: () => Up,
      __importDefault: () => lp,
      __importStar: () => Xp,
      __makeTemplateObject: () => Mp,
      __metadata: () => Wp,
      __param: () => Lp,
      __propKey: () => Ap,
      __read: () => Hp,
      __rest: () => Sp,
      __rewriteRelativeImportExtension: () => bp,
      __runInitializers: () => Dp,
      __setFunctionName: () => Pp,
      __spread: () => dp,
      __spreadArray: () => jp,
      __spreadArrays: () => ep,
      __values: () => tp,
      default: () => hp
    });
    var Op = function(pp, ip) {
      return Op = Object.setPrototypeOf || {
        __proto__: []
      }
      instanceof Array && function(pp, ip) {
        pp.__proto__ = ip
      } || function(pp, ip) {
        for (var cp in ip) Object.prototype.hasOwnProperty.call(ip, cp) && (pp[cp] = ip[cp])
      }, Op(pp, ip)
    };

    function op(pp, ip) {
      if ("function" !== typeof ip && null !== ip) throw new TypeError("Class extends value " + String(ip) + " is not a constructor or null");

      function cp() {
        this.constructor = pp
      }
      Op(pp, ip), pp.prototype = null === ip ? Object.create(ip) : (cp.prototype = ip.prototype, new cp)
    }
    var Ip = function() {
      return Ip = Object.assign || function(pp) {
        for (var ip, cp = 1, Op = arguments.length; cp < Op; cp++)
          for (var op in ip = arguments[cp]) Object.prototype.hasOwnProperty.call(ip, op) && (pp[op] = ip[op]);
        return pp
      }, Ip.apply(this, arguments)
    };

    function Sp(pp, ip) {
      var cp = {};
      for (var Op in pp) Object.prototype.hasOwnProperty.call(pp, Op) && ip.indexOf(Op) < 0 && (cp[Op] = pp[Op]);
      if (null != pp && "function" === typeof Object.getOwnPropertySymbols) {
        var op = 0;
        for (Op = Object.getOwnPropertySymbols(pp); op < Op.length; op++) ip.indexOf(Op[op]) < 0 && Object.prototype.propertyIsEnumerable.call(pp, Op[op]) && (cp[Op[op]] = pp[Op[op]])
      }
      return cp
    }

    function xp(pp, ip, cp, Op) {
      var op, Ip = arguments.length,
        Sp = Ip < 3 ? ip : null === Op ? Op = Object.getOwnPropertyDescriptor(ip, cp) : Op;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) Sp = Reflect.decorate(pp, ip, cp, Op);
      else
        for (var xp = pp.length - 1; xp >= 0; xp--)(op = pp[xp]) && (Sp = (Ip < 3 ? op(Sp) : Ip > 3 ? op(ip, cp, Sp) : op(ip, cp)) || Sp);
      return Ip > 3 && Sp && Object.defineProperty(ip, cp, Sp), Sp
    }

    function Lp(pp, ip) {
      return function(cp, Op) {
        ip(cp, Op, pp)
      }
    }

    function Yp(pp, ip, cp, Op, op, Ip) {
      function Sp(pp) {
        if (void 0 !== pp && "function" !== typeof pp) throw new TypeError("Function expected");
        return pp
      }
      for (var xp, Lp = Op.kind, Yp = "getter" === Lp ? "get" : "setter" === Lp ? "set" : "value", Dp = !ip && pp ? Op.static ? pp : pp.prototype : null, Ap = ip || (Dp ? Object.getOwnPropertyDescriptor(Dp, Op.name) : {}), Pp = !1, Wp = cp.length - 1; Wp >= 0; Wp--) {
        var yp = {};
        for (var Up in Op) yp[Up] = "access" === Up ? {} : Op[Up];
        for (var Up in Op.access) yp.access[Up] = Op.access[Up];
        yp.addInitializer = function(pp) {
          if (Pp) throw new TypeError("Cannot add initializers after decoration has completed");
          Ip.push(Sp(pp || null))
        };
        var wp = (0, cp[Wp])("accessor" === Lp ? {
          get: Ap.get,
          set: Ap.set
        } : Ap[Yp], yp);
        if ("accessor" === Lp) {
          if (void 0 === wp) continue;
          if (null === wp || "object" !== typeof wp) throw new TypeError("Object expected");
          (xp = Sp(wp.get)) && (Ap.get = xp), (xp = Sp(wp.set)) && (Ap.set = xp), (xp = Sp(wp.init)) && op.unshift(xp)
        } else(xp = Sp(wp)) && ("field" === Lp ? op.unshift(xp) : Ap[Yp] = xp)
      }
      Dp && Object.defineProperty(Dp, Op.name, Ap), Pp = !0
    }

    function Dp(pp, ip, cp) {
      for (var Op = arguments.length > 2, op = 0; op < ip.length; op++) cp = Op ? ip[op].call(pp, cp) : ip[op].call(pp);
      return Op ? cp : void 0
    }

    function Ap(pp) {
      return "symbol" === typeof pp ? pp : "".concat(pp)
    }

    function Pp(pp, ip, cp) {
      return "symbol" === typeof ip && (ip = ip.description ? "[".concat(ip.description, "]") : ""), Object.defineProperty(pp, "name", {
        configurable: !0,
        value: cp ? "".concat(cp, " ", ip) : ip
      })
    }

    function Wp(pp, ip) {
      if ("object" === typeof Reflect && "function" === typeof Reflect.metadata) return Reflect.metadata(pp, ip)
    }

    function yp(pp, ip, cp, Op) {
      return new(cp || (cp = Promise))((function(op, Ip) {
        function Sp(pp) {
          try {
            Lp(Op.next(pp))
          } catch (ip) {
            Ip(ip)
          }
        }

        function xp(pp) {
          try {
            Lp(Op.throw(pp))
          } catch (ip) {
            Ip(ip)
          }
        }

        function Lp(pp) {
          var ip;
          pp.done ? op(pp.value) : (ip = pp.value, ip instanceof cp ? ip : new cp((function(pp) {
            pp(ip)
          }))).then(Sp, xp)
        }
        Lp((Op = Op.apply(pp, ip || [])).next())
      }))
    }

    function Up(pp, ip) {
      var cp, Op, op, Ip = {
          label: 0,
          sent: function() {
            if (1 & op[0]) throw op[1];
            return op[1]
          },
          trys: [],
          ops: []
        },
        Sp = Object.create(("function" === typeof Iterator ? Iterator : Object).prototype);
      return Sp.next = xp(0), Sp.throw = xp(1), Sp.return = xp(2), "function" === typeof Symbol && (Sp[Symbol.iterator] = function() {
        return this
      }), Sp;

      function xp(xp) {
        return function(Lp) {
          return function(xp) {
            if (cp) throw new TypeError("Generator is already executing.");
            for (; Sp && (Sp = 0, xp[0] && (Ip = 0)), Ip;) try {
              if (cp = 1, Op && (op = 2 & xp[0] ? Op.return : xp[0] ? Op.throw || ((op = Op.return) && op.call(Op), 0) : Op.next) && !(op = op.call(Op, xp[1])).done) return op;
              switch (Op = 0, op && (xp = [2 & xp[0], op.value]), xp[0]) {
                case 0:
                case 1:
                  op = xp;
                  break;
                case 4:
                  return Ip.label++, {
                    value: xp[1],
                    done: !1
                  };
                case 5:
                  Ip.label++, Op = xp[1], xp = [0];
                  continue;
                case 7:
                  xp = Ip.ops.pop(), Ip.trys.pop();
                  continue;
                default:
                  if (!(op = (op = Ip.trys).length > 0 && op[op.length - 1]) && (6 === xp[0] || 2 === xp[0])) {
                    Ip = 0;
                    continue
                  }
                  if (3 === xp[0] && (!op || xp[1] > op[0] && xp[1] < op[3])) {
                    Ip.label = xp[1];
                    break
                  }
                  if (6 === xp[0] && Ip.label < op[1]) {
                    Ip.label = op[1], op = xp;
                    break
                  }
                  if (op && Ip.label < op[2]) {
                    Ip.label = op[2], Ip.ops.push(xp);
                    break
                  }
                  op[2] && Ip.ops.pop(), Ip.trys.pop();
                  continue
              }
              xp = ip.call(pp, Ip)
            } catch (Lp) {
              xp = [6, Lp], Op = 0
            } finally {
              cp = op = 0
            }
            if (5 & xp[0]) throw xp[1];
            return {
              value: xp[0] ? xp[1] : void 0,
              done: !0
            }
          }([xp, Lp])
        }
      }
    }
    var wp = Object.create ? function(pp, ip, cp, Op) {
      void 0 === Op && (Op = cp);
      var op = Object.getOwnPropertyDescriptor(ip, cp);
      op && !("get" in op ? !ip.__esModule : op.writable || op.configurable) || (op = {
        enumerable: !0,
        get: function() {
          return ip[cp]
        }
      }), Object.defineProperty(pp, Op, op)
    } : function(pp, ip, cp, Op) {
      void 0 === Op && (Op = cp), pp[Op] = ip[cp]
    };

    function vp(pp, ip) {
      for (var cp in pp) "default" === cp || Object.prototype.hasOwnProperty.call(ip, cp) || wp(ip, pp, cp)
    }

    function tp(pp) {
      var ip = "function" === typeof Symbol && Symbol.iterator,
        cp = ip && pp[ip],
        Op = 0;
      if (cp) return cp.call(pp);
      if (pp && "number" === typeof pp.length) return {
        next: function() {
          return pp && Op >= pp.length && (pp = void 0), {
            value: pp && pp[Op++],
            done: !pp
          }
        }
      };
      throw new TypeError(ip ? "Object is not iterable." : "Symbol.iterator is not defined.")
    }

    function Hp(pp, ip) {
      var cp = "function" === typeof Symbol && pp[Symbol.iterator];
      if (!cp) return pp;
      var Op, op, Ip = cp.call(pp),
        Sp = [];
      try {
        for (;
          (void 0 === ip || ip-- > 0) && !(Op = Ip.next()).done;) Sp.push(Op.value)
      } catch (xp) {
        op = {
          error: xp
        }
      } finally {
        try {
          Op && !Op.done && (cp = Ip.return) && cp.call(Ip)
        } finally {
          if (op) throw op.error
        }
      }
      return Sp
    }

    function dp() {
      for (var pp = [], ip = 0; ip < arguments.length; ip++) pp = pp.concat(Hp(arguments[ip]));
      return pp
    }

    function ep() {
      for (var pp = 0, ip = 0, cp = arguments.length; ip < cp; ip++) pp += arguments[ip].length;
      var Op = Array(pp),
        op = 0;
      for (ip = 0; ip < cp; ip++)
        for (var Ip = arguments[ip], Sp = 0, xp = Ip.length; Sp < xp; Sp++, op++) Op[op] = Ip[Sp];
      return Op
    }

    function jp(pp, ip, cp) {
      if (cp || 2 === arguments.length)
        for (var Op, op = 0, Ip = ip.length; op < Ip; op++) !Op && op in ip || (Op || (Op = Array.prototype.slice.call(ip, 0, op)), Op[op] = ip[op]);
      return pp.concat(Op || Array.prototype.slice.call(ip))
    }

    function kp(pp) {
      return this instanceof kp ? (this.v = pp, this) : new kp(pp)
    }

    function mp(pp, ip, cp) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var Op, op = cp.apply(pp, ip || []),
        Ip = [];
      return Op = Object.create(("function" === typeof AsyncIterator ? AsyncIterator : Object).prototype), Sp("next"), Sp("throw"), Sp("return", (function(pp) {
        return function(ip) {
          return Promise.resolve(ip).then(pp, Yp)
        }
      })), Op[Symbol.asyncIterator] = function() {
        return this
      }, Op;

      function Sp(pp, ip) {
        op[pp] && (Op[pp] = function(ip) {
          return new Promise((function(cp, Op) {
            Ip.push([pp, ip, cp, Op]) > 1 || xp(pp, ip)
          }))
        }, ip && (Op[pp] = ip(Op[pp])))
      }

      function xp(pp, ip) {
        try {
          (cp = op[pp](ip)).value instanceof kp ? Promise.resolve(cp.value.v).then(Lp, Yp) : Dp(Ip[0][2], cp)
        } catch (Op) {
          Dp(Ip[0][3], Op)
        }
        var cp
      }

      function Lp(pp) {
        xp("next", pp)
      }

      function Yp(pp) {
        xp("throw", pp)
      }

      function Dp(pp, ip) {
        pp(ip), Ip.shift(), Ip.length && xp(Ip[0][0], Ip[0][1])
      }
    }

    function Rp(pp) {
      var ip, cp;
      return ip = {}, Op("next"), Op("throw", (function(pp) {
        throw pp
      })), Op("return"), ip[Symbol.iterator] = function() {
        return this
      }, ip;

      function Op(Op, op) {
        ip[Op] = pp[Op] ? function(ip) {
          return (cp = !cp) ? {
            value: kp(pp[Op](ip)),
            done: !1
          } : op ? op(ip) : ip
        } : op
      }
    }

    function qp(pp) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var ip, cp = pp[Symbol.asyncIterator];
      return cp ? cp.call(pp) : (pp = tp(pp), ip = {}, Op("next"), Op("throw"), Op("return"), ip[Symbol.asyncIterator] = function() {
        return this
      }, ip);

      function Op(cp) {
        ip[cp] = pp[cp] && function(ip) {
          return new Promise((function(Op, op) {
            (function(pp, ip, cp, Op) {
              Promise.resolve(Op).then((function(ip) {
                pp({
                  value: ip,
                  done: cp
                })
              }), ip)
            })(Op, op, (ip = pp[cp](ip)).done, ip.value)
          }))
        }
      }
    }

    function Mp(pp, ip) {
      return Object.defineProperty ? Object.defineProperty(pp, "raw", {
        value: ip
      }) : pp.raw = ip, pp
    }
    var Cp = Object.create ? function(pp, ip) {
        Object.defineProperty(pp, "default", {
          enumerable: !0,
          value: ip
        })
      } : function(pp, ip) {
        pp.default = ip
      },
      Ep = function(pp) {
        return Ep = Object.getOwnPropertyNames || function(pp) {
          var ip = [];
          for (var cp in pp) Object.prototype.hasOwnProperty.call(pp, cp) && (ip[ip.length] = cp);
          return ip
        }, Ep(pp)
      };

    function Xp(pp) {
      if (pp && pp.__esModule) return pp;
      var ip = {};
      if (null != pp)
        for (var cp = Ep(pp), Op = 0; Op < cp.length; Op++) "default" !== cp[Op] && wp(ip, pp, cp[Op]);
      return Cp(ip, pp), ip
    }

    function lp(pp) {
      return pp && pp.__esModule ? pp : {
        default: pp
      }
    }

    function Qp(pp, ip, cp, Op) {
      if ("a" === cp && !Op) throw new TypeError("Private accessor was defined without a getter");
      if ("function" === typeof ip ? pp !== ip || !Op : !ip.has(pp)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
      return "m" === cp ? Op : "a" === cp ? Op.call(pp) : Op ? Op.value : ip.get(pp)
    }

    function Jp(pp, ip, cp, Op, op) {
      if ("m" === Op) throw new TypeError("Private method is not writable");
      if ("a" === Op && !op) throw new TypeError("Private accessor was defined without a setter");
      if ("function" === typeof ip ? pp !== ip || !op : !ip.has(pp)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
      return "a" === Op ? op.call(pp, cp) : op ? op.value = cp : ip.set(pp, cp), cp
    }

    function Bp(pp, ip) {
      if (null === ip || "object" !== typeof ip && "function" !== typeof ip) throw new TypeError("Cannot use 'in' operator on non-object");
      return "function" === typeof pp ? ip === pp : pp.has(ip)
    }

    function Np(pp, ip, cp) {
      if (null !== ip && void 0 !== ip) {
        if ("object" !== typeof ip && "function" !== typeof ip) throw new TypeError("Object expected.");
        var Op, op;
        if (cp) {
          if (!Symbol.asyncDispose) throw new TypeError("Symbol.asyncDispose is not defined.");
          Op = ip[Symbol.asyncDispose]
        }
        if (void 0 === Op) {
          if (!Symbol.dispose) throw new TypeError("Symbol.dispose is not defined.");
          Op = ip[Symbol.dispose], cp && (op = Op)
        }
        if ("function" !== typeof Op) throw new TypeError("Object not disposable.");
        op && (Op = function() {
          try {
            op.call(this)
          } catch (pp) {
            return Promise.reject(pp)
          }
        }), pp.stack.push({
          value: ip,
          dispose: Op,
          async: cp
        })
      } else cp && pp.stack.push({
        async: !0
      });
      return ip
    }
    var Tp = "function" === typeof SuppressedError ? SuppressedError : function(pp, ip, cp) {
      var Op = new Error(cp);
      return Op.name = "SuppressedError", Op.error = pp, Op.suppressed = ip, Op
    };

    function fp(pp) {
      function ip(ip) {
        pp.error = pp.hasError ? new Tp(ip, pp.error, "An error was suppressed during disposal.") : ip, pp.hasError = !0
      }
      var cp, Op = 0;
      return function op() {
        for (; cp = pp.stack.pop();) try {
          if (!cp.async && 1 === Op) return Op = 0, pp.stack.push(cp), Promise.resolve().then(op);
          if (cp.dispose) {
            var Ip = cp.dispose.call(cp.value);
            if (cp.async) return Op |= 2, Promise.resolve(Ip).then(op, (function(pp) {
              return ip(pp), op()
            }))
          } else Op |= 1
        } catch (Sp) {
          ip(Sp)
        }
        if (1 === Op) return pp.hasError ? Promise.reject(pp.error) : Promise.resolve();
        if (pp.hasError) throw pp.error
      }()
    }

    function bp(pp, ip) {
      return "string" === typeof pp && /^\.\.?\//.test(pp) ? pp.replace(/\.(tsx)$|((?:\.d)?)((?:\.[^./]+?)?)\.([cm]?)ts$/i, (function(pp, cp, Op, op, Ip) {
        return cp ? ip ? ".jsx" : ".js" : !Op || op && Ip ? Op + op + "." + Ip.toLowerCase() + "js" : pp
      })) : pp
    }
    const hp = {
      __extends: op,
      __assign: Ip,
      __rest: Sp,
      __decorate: xp,
      __param: Lp,
      __esDecorate: Yp,
      __runInitializers: Dp,
      __propKey: Ap,
      __setFunctionName: Pp,
      __metadata: Wp,
      __awaiter: yp,
      __generator: Up,
      __createBinding: wp,
      __exportStar: vp,
      __values: tp,
      __read: Hp,
      __spread: dp,
      __spreadArrays: ep,
      __spreadArray: jp,
      __await: kp,
      __asyncGenerator: mp,
      __asyncDelegator: Rp,
      __asyncValues: qp,
      __makeTemplateObject: Mp,
      __importStar: Xp,
      __importDefault: lp,
      __classPrivateFieldGet: Qp,
      __classPrivateFieldSet: Jp,
      __classPrivateFieldIn: Bp,
      __addDisposableResource: Np,
      __disposeResources: fp,
      __rewriteRelativeImportExtension: bp
    }
  }
};
Object.freeze(modules);
for (const pp in modules) Object.freeze(modules[pp]);