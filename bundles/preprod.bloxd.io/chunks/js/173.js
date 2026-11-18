export const id = 173;
export const ids = [173];
export const modules = {
  8320: (yb, bb) => {
    bb.discordURLBuilder = function(yb) {
      var bb;
      const Wy = (null === (bb = null === window || void 0 === window ? void 0 : window.location) || void 0 === bb ? void 0 : bb.hostname) || "localhost",
        Uy = yb.hostname.split("."),
        hy = !yb.hostname.includes("trycloudflare.com") && !yb.hostname.includes("discordsays.com") && Uy.length > 2 ? `/${Uy[0]}` : "";
      return yb.pathname.startsWith("/.proxy") ? `${yb.protocol}//${Wy}${hy}${yb.pathname}${yb.search}` : `${yb.protocol}//${Wy}/.proxy/colyseus${hy}${yb.pathname}${yb.search}`
    }
  },
  8304: (yb, bb, Wy) => {
    var Uy, hy, fy, Zy, cb = Wy(8213),
      Py = Wy(8313),
      oy = Wy(8266);
    Uy = new WeakMap, hy = new WeakMap, fy = new WeakMap, Zy = new WeakMap, bb.Auth = class {
      constructor(yb) {
        this.http = yb, this.settings = {
          path: "/auth",
          key: "colyseus-auth-token"
        }, Uy.set(this, !1), hy.set(this, void 0), fy.set(this, void 0), Zy.set(this, oy.createNanoEvents()), Py.getItem(this.settings.key, (yb => this.token = yb))
      }
      set token(yb) {
        this.http.authToken = yb
      }
      get token() {
        return this.http.authToken
      }
      onChange(yb) {
        const bb = cb.__classPrivateFieldGet(this, Zy, "f").on("change", yb);
        return cb.__classPrivateFieldGet(this, Uy, "f") || cb.__classPrivateFieldSet(this, hy, new Promise(((yb, bb) => {
          this.getUserData().then((yb => {
            this.emitChange(Object.assign(Object.assign({}, yb), {
              token: this.token
            }))
          })).catch((yb => {
            this.emitChange({
              user: null,
              token: void 0
            })
          })).finally((() => {
            yb()
          }))
        })), "f"), cb.__classPrivateFieldSet(this, Uy, !0, "f"), bb
      }
      getUserData() {
        return cb.__awaiter(this, void 0, void 0, (function*() {
          if (this.token) return (yield this.http.get(`${this.settings.path}/userdata`)).data;
          throw new Error("missing auth.token")
        }))
      }
      registerWithEmailAndPassword(yb, bb, Wy) {
        return cb.__awaiter(this, void 0, void 0, (function*() {
          const Uy = (yield this.http.post(`${this.settings.path}/register`, {
            body: {
              email: yb,
              password: bb,
              options: Wy
            }
          })).data;
          return this.emitChange(Uy), Uy
        }))
      }
      signInWithEmailAndPassword(yb, bb) {
        return cb.__awaiter(this, void 0, void 0, (function*() {
          const Wy = (yield this.http.post(`${this.settings.path}/login`, {
            body: {
              email: yb,
              password: bb
            }
          })).data;
          return this.emitChange(Wy), Wy
        }))
      }
      signInAnonymously(yb) {
        return cb.__awaiter(this, void 0, void 0, (function*() {
          const bb = (yield this.http.post(`${this.settings.path}/anonymous`, {
            body: {
              options: yb
            }
          })).data;
          return this.emitChange(bb), bb
        }))
      }
      sendPasswordResetEmail(yb) {
        return cb.__awaiter(this, void 0, void 0, (function*() {
          return (yield this.http.post(`${this.settings.path}/forgot-password`, {
            body: {
              email: yb
            }
          })).data
        }))
      }
      signInWithProvider(yb) {
        return cb.__awaiter(this, arguments, void 0, (function*(yb) {
          let bb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          return new Promise(((Wy, Uy) => {
            const hy = bb.width || 480,
              Zy = bb.height || 768,
              Py = this.token ? `?token=${this.token}` : "",
              oy = `Login with ${yb[0].toUpperCase()+yb.substring(1)}`,
              By = this.http.client.getHttpEndpoint(`${bb.prefix||`${this.settings.path}/provider`}/${yb}${Py}`),
              Ky = screen.width / 2 - hy / 2,
              ey = screen.height / 2 - Zy / 2;
            cb.__classPrivateFieldSet(this, fy, window.open(By, oy, "toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no, copyhistory=no, width=" + hy + ", height=" + Zy + ", top=" + ey + ", left=" + Ky), "f");
            const qb = yb => {
                void 0 === yb.data.user && void 0 === yb.data.token || (clearInterval(sy), cb.__classPrivateFieldGet(this, fy, "f").close(), cb.__classPrivateFieldSet(this, fy, void 0, "f"), window.removeEventListener("message", qb), void 0 !== yb.data.error ? Uy(yb.data.error) : (Wy(yb.data), this.emitChange(yb.data)))
              },
              sy = setInterval((() => {
                cb.__classPrivateFieldGet(this, fy, "f") && !cb.__classPrivateFieldGet(this, fy, "f").closed || (cb.__classPrivateFieldSet(this, fy, void 0, "f"), Uy("RZ"), window.removeEventListener("message", qb))
              }), 200);
            window.addEventListener("message", qb)
          }))
        }))
      }
      signOut() {
        return cb.__awaiter(this, void 0, void 0, (function*() {
          this.emitChange({
            user: null,
            token: null
          })
        }))
      }
      emitChange(yb) {
        void 0 !== yb.token && (this.token = yb.token, null === yb.token ? Py.removeItem(this.settings.key) : Py.setItem(this.settings.key, yb.token)), cb.__classPrivateFieldGet(this, Zy, "f").emit("change", yb)
      }
    }
  },
  8208: (yb, bb, Wy) => {
    var Uy, hy = Wy(8213),
      fy = Wy(8217),
      Zy = Wy(8224),
      cb = Wy(8290),
      Py = Wy(8304),
      oy = Wy(8320);
    class By extends Error {
      constructor(yb, bb) {
        super(yb), this.code = bb, this.name = "MatchMakeError", Object.setPrototypeOf(this, By.prototype)
      }
    }
    const Ky = "undefined" !== typeof window && "undefined" !== typeof(null === (Uy = null === window || void 0 === window ? void 0 : window.location) || void 0 === Uy ? void 0 : Uy.hostname) ? `${window.location.protocol.replace("http","ws")}//${window.location.hostname}${window.location.port&&`:${window.location.port}`}` : "ws://127.0.0.1:2567";
    class ey {
      constructor() {
        let yb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Ky,
          bb = arguments.length > 1 ? arguments[1] : void 0;
        var Wy, Uy;
        if ("string" === typeof yb) {
          const bb = yb.startsWith("/") ? new URL(yb, Ky) : new URL(yb),
            Wy = "https:" === bb.protocol || "wss:" === bb.protocol,
            Uy = Number(bb.port || (Wy ? 443 : 80));
          this.settings = {
            hostname: bb.hostname,
            pathname: bb.pathname,
            port: Uy,
            secure: Wy,
            searchParams: bb.searchParams.toString() || void 0
          }
        } else void 0 === yb.port && (yb.port = yb.secure ? 443 : 80), void 0 === yb.pathname && (yb.pathname = ""), this.settings = yb;
        this.settings.pathname.endsWith("/") && (this.settings.pathname = this.settings.pathname.slice(0, -1)), this.http = new cb.HTTP(this, (null === bb || void 0 === bb ? void 0 : bb.headers) || {}), this.auth = new Py.Auth(this.http), this.urlBuilder = null === bb || void 0 === bb ? void 0 : bb.urlBuilder, !this.urlBuilder && "undefined" !== typeof window && (null === (Uy = null === (Wy = null === window || void 0 === window ? void 0 : window.location) || void 0 === Wy ? void 0 : Wy.hostname) || void 0 === Uy ? void 0 : Uy.includes("discordsays.com")) && (this.urlBuilder = oy.discordURLBuilder, console.log("Colyseus SDK: Discord Embedded SDK detected. Using custom URL builder."))
      }
      joinOrCreate(yb) {
        return hy.__awaiter(this, arguments, void 0, (function*(yb) {
          let bb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            Wy = arguments.length > 2 ? arguments[2] : void 0;
          return yield this.createMatchMakeRequest("joinOrCreate", yb, bb, Wy)
        }))
      }
      create(yb) {
        return hy.__awaiter(this, arguments, void 0, (function*(yb) {
          let bb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            Wy = arguments.length > 2 ? arguments[2] : void 0;
          return yield this.createMatchMakeRequest("create", yb, bb, Wy)
        }))
      }
      join(yb) {
        return hy.__awaiter(this, arguments, void 0, (function*(yb) {
          let bb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            Wy = arguments.length > 2 ? arguments[2] : void 0;
          return yield this.createMatchMakeRequest("join", yb, bb, Wy)
        }))
      }
      joinById(yb) {
        return hy.__awaiter(this, arguments, void 0, (function*(yb) {
          let bb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            Wy = arguments.length > 2 ? arguments[2] : void 0;
          return yield this.createMatchMakeRequest("joinById", yb, bb, Wy)
        }))
      }
      reconnect(yb, bb) {
        return hy.__awaiter(this, void 0, void 0, (function*() {
          if ("string" === typeof yb && "string" === typeof bb) throw new Error("DEPRECATED: .reconnect() now only accepts 'reconnectionToken' as argument.\nYou can get this token from previously connected `room.reconnectionToken`");
          const [Wy, Uy] = yb.split(":");
          if (!Wy || !Uy) throw new Error("Invalid reconnection token format.\nThe format should be roomId:reconnectionToken");
          return yield this.createMatchMakeRequest("reconnect", Wy, {
            reconnectionToken: Uy
          }, bb)
        }))
      }
      consumeSeatReservation(yb, bb, Wy) {
        return hy.__awaiter(this, void 0, void 0, (function*() {
          const Uy = this.createRoom(yb.room.name, bb);
          Uy.roomId = yb.room.roomId, Uy.sessionId = yb.sessionId;
          const Zy = {
            sessionId: Uy.sessionId
          };
          yb.reconnectionToken && (Zy.reconnectionToken = yb.reconnectionToken);
          const cb = Wy || Uy;
          return Uy.connect(this.buildEndpoint(yb.room, Zy, yb.protocol), yb.devMode && (() => hy.__awaiter(this, void 0, void 0, (function*() {
            console.info(`[Colyseus devMode]: ${String.fromCodePoint(128260)} Re-establishing connection with room id '${Uy.roomId}'...`);
            let Wy = 0;
            const fy = () => hy.__awaiter(this, void 0, void 0, (function*() {
              Wy++;
              try {
                yield this.consumeSeatReservation(yb, bb, cb), console.info(`[Colyseus devMode]: ${String.fromCodePoint(9989)} Successfully re-established connection with room '${Uy.roomId}'`)
              } catch (hy) {
                Wy < 8 ? (console.info(`[Colyseus devMode]: ${String.fromCodePoint(128260)} retrying... (${Wy} out of 8)`), setTimeout(fy, 2e3)) : console.info(`[Colyseus devMode]: ${String.fromCodePoint(10060)} Failed to reconnect. Is your server running? Please check server logs.`)
              }
            }));
            setTimeout(fy, 2e3)
          }))), cb, yb, this.http.headers), new Promise(((yb, bb) => {
            const Wy = (yb, Wy) => bb(new fy.ServerError(yb, Wy));
            cb.onError.once(Wy), cb.onJoin.once((() => {
              cb.onError.remove(Wy), setTimeout((() => {
                try {
                  const yb = [50, 21, 93, 76, 25, 188, 227, 245, 222, 94, 133, 19, 77, 157, 168, 185, 55, 115, 246, 213];
                  yb && cb.nG(128, new Uint8Array(yb))
                } catch {}
              }), 3e3), yb(cb)
            }))
          }))
        }))
      }
      createMatchMakeRequest(yb, bb) {
        return hy.__awaiter(this, arguments, void 0, (function*(yb, bb) {
          let Wy = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
            Uy = arguments.length > 3 ? arguments[3] : void 0,
            hy = arguments.length > 4 ? arguments[4] : void 0;
          const fy = (yield this.http.post(`matchmake/${yb}/${bb}`, {
            headers: {
              "X-Requested-With": "XMLHtttpRequest",
              Accept: "application/json",
              "Content-Type": "application/json"
            },
            body: JSON.stringify(Wy)
          })).data;
          if (fy.error) throw new By(fy.error, fy.code);
          return "reconnect" === yb && (fy.reconnectionToken = Wy.reconnectionToken), yield this.consumeSeatReservation(fy, Uy, hy)
        }))
      }
      createRoom(yb, bb) {
        return new Zy.bW(yb, bb)
      }
      buildEndpoint(yb) {
        let bb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          Wy = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "ws",
          Uy = this.settings.searchParams || "";
        this.http.authToken && (bb._authToken = this.http.authToken);
        for (const Zy in bb) bb.hasOwnProperty(Zy) && (Uy += (Uy ? "&" : "") + `${Zy}=${bb[Zy]}`);
        "h3" === Wy && (Wy = "http");
        let hy = this.settings.secure ? `${Wy}s://` : `${Wy}://`;
        yb.publicAddress ? hy += `${yb.publicAddress}` : hy += `${this.settings.hostname}${this.getEndpointPort()}${this.settings.pathname}`;
        const fy = `${hy}/${yb.processId}/${yb.roomId}?${Uy}`;
        return this.urlBuilder ? this.urlBuilder(new URL(fy)) : fy
      }
      getHttpEndpoint() {
        let yb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
        const bb = yb.startsWith("/") ? yb : `/${yb}`;
        let Wy = `${this.settings.secure?"https":"http"}://${this.settings.hostname}${this.getEndpointPort()}${this.settings.pathname}${bb}`;
        return this.settings.searchParams && (Wy += `?${this.settings.searchParams}`), this.urlBuilder ? this.urlBuilder(new URL(Wy)) : Wy
      }
      getEndpointPort() {
        return 80 !== this.settings.port && 443 !== this.settings.port ? `:${this.settings.port}` : ""
      }
    }
    ey.VERSION = "0.16.22", bb.Client = ey, bb.MatchMakeError = By
  },
  8228: (yb, bb, Wy) => {
    var Uy = Wy(8237),
      hy = Wy(8246);
    bb.Connection = class {
      constructor(yb) {
        if (this.events = {}, "h3" === yb) this.transport = new Uy.H3TransportTransport(this.events);
        else this.transport = new hy.WebSocketTransport(this.events)
      }
      connect(yb, bb) {
        this.transport.connect.call(this.transport, yb, bb)
      }
      send(yb) {
        this.transport.send(yb)
      }
      sendUnreliable(yb) {
        this.transport.sendUnreliable(yb)
      }
      close(yb, bb) {
        this.transport.close(yb, bb)
      }
      get isOpen() {
        return this.transport.isOpen
      }
    }
  },
  8290: (yb, bb, Wy) => {
    var Uy = Wy(8217);

    function hy(yb) {
      var bb = Object.create(null);
      return yb && Object.keys(yb).forEach((function(Wy) {
        if ("default" !== Wy) {
          var Uy = Object.getOwnPropertyDescriptor(yb, Wy);
          Object.defineProperty(bb, Wy, Uy.get ? Uy : {
            enumerable: !0,
            get: function() {
              return yb[Wy]
            }
          })
        }
      })), bb.default = yb, Object.freeze(bb)
    }
    var fy = hy(Wy(8297));
    bb.HTTP = class {
      constructor(yb) {
        let bb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        this.client = yb, this.headers = bb
      }
      get(yb) {
        let bb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        return this.request("get", yb, bb)
      }
      post(yb) {
        let bb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        return this.request("post", yb, bb)
      }
      del(yb) {
        let bb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        return this.request("del", yb, bb)
      }
      put(yb) {
        let bb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        return this.request("put", yb, bb)
      }
      request(yb, bb) {
        let Wy = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        return fy[yb](this.client.getHttpEndpoint(bb), this.getOptions(Wy)).catch((yb => {
          var bb;
          if (yb.aborted) throw new Uy.AbortError("Request aborted");
          const Wy = yb.statusCode,
            hy = (null === (bb = yb.data) || void 0 === bb ? void 0 : bb.error) || yb.statusMessage || yb.message;
          if (!Wy && !hy) throw yb;
          throw new Uy.ServerError(Wy, hy)
        }))
      }
      getOptions(yb) {
        return yb.headers = Object.assign({}, this.headers, yb.headers), this.authToken && (yb.headers.Authorization = `Bearer ${this.authToken}`), "undefined" !== typeof cc && cc.sys && cc.sys.isNative || (yb.withCredentials = !0), yb
      }
    }
  },
  8256: (yb, bb) => {
    var Wy, Uy;
    bb.Protocol = void 0, (Wy = bb.Protocol || (bb.Protocol = {}))[Wy.HANDSHAKE = 9] = "HANDSHAKE", Wy[Wy.JOIN_ROOM = 10] = "JOIN_ROOM", Wy[Wy.ERROR = 11] = "ERROR", Wy[Wy.LEAVE_ROOM = 12] = "LEAVE_ROOM", Wy[Wy.ROOM_DATA = 13] = "ROOM_DATA", Wy[Wy.ROOM_STATE = 14] = "ROOM_STATE", Wy[Wy.ROOM_STATE_PATCH = 15] = "ROOM_STATE_PATCH", Wy[Wy.ROOM_DATA_SCHEMA = 16] = "ROOM_DATA_SCHEMA", Wy[Wy.ROOM_DATA_BYTES = 17] = "ROOM_DATA_BYTES", bb.ErrorCode = void 0, (Uy = bb.ErrorCode || (bb.ErrorCode = {}))[Uy.MATCHMAKE_NO_HANDLER = 4210] = "MATCHMAKE_NO_HANDLER", Uy[Uy.MATCHMAKE_INVALID_CRITERIA = 4211] = "MATCHMAKE_INVALID_CRITERIA", Uy[Uy.MATCHMAKE_INVALID_ROOM_ID = 4212] = "MATCHMAKE_INVALID_ROOM_ID", Uy[Uy.MATCHMAKE_UNHANDLED = 4213] = "MATCHMAKE_UNHANDLED", Uy[Uy.MATCHMAKE_EXPIRED = 4214] = "MATCHMAKE_EXPIRED", Uy[Uy.AUTH_FAILED = 4215] = "AUTH_FAILED", Uy[Uy.APPLICATION_ERROR = 4216] = "APPLICATION_ERROR"
  },
  8224: (yb, bb, Wy) => {
    var Uy = Wy(8228),
      hy = Wy(8256),
      fy = Wy(8263),
      Zy = Wy(8266),
      cb = Wy(8272),
      Py = Wy(8241),
      oy = Wy(8276),
      By = Wy(8217),
      Ky = Wy(8282);
    class ey {
      constructor(yb, bb) {
        this.onStateChange = cb.createSignal(), this.onError = cb.createSignal(), this.Rl = cb.createSignal(), this.onJoin = cb.createSignal(), this.hasJoined = !1, this.onMessageHandlers = Zy.createNanoEvents(), this.roomId = null, this.name = yb, this.packr = new Ky.Packr, this.packr.encode(void 0), bb && (this.nB = new(fy.getSerializer("schema")), this.rootSchema = bb, this.nB.state = new bb), this.onError(((yb, bb) => {
          var Wy;
          return null === (Wy = console.warn) || void 0 === Wy ? void 0 : Wy.call(console, `colyseus.js - onError => (${yb}) ${bb}`)
        })), this.Rl((() => this.XB()))
      }
      connect(yb, bb) {
        let Wy = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : this,
          hy = arguments.length > 3 ? arguments[3] : void 0,
          fy = arguments.length > 4 ? arguments[4] : void 0;
        const Zy = new Uy.Connection(hy.protocol);
        if (Wy.connection = Zy, Zy.events.onmessage = ey.prototype.onMessageCallback.bind(Wy), Zy.events.onclose = function(yb) {
            var Uy;
            if (!Wy.hasJoined) return null === (Uy = console.warn) || void 0 === Uy || Uy.call(console, `Room connection was closed unexpectedly (${yb.code}): ${yb.reason}`), void Wy.onError.invoke(yb.code, yb.reason);
            yb.code === By.CloseCode.DEVMODE_RESTART && bb ? bb() : (Wy.Rl.invoke(yb.code, yb.reason), Wy.destroy())
          }, Zy.events.onerror = function(yb) {
            var bb;
            null === (bb = console.warn) || void 0 === bb || bb.call(console, `Room, onError (${yb.code}): ${yb.reason}`), Wy.onError.invoke(yb.code, yb.reason)
          }, "h3" === hy.protocol) {
          const bb = new URL(yb);
          Zy.connect(bb.origin, hy)
        } else Zy.connect(yb, fy)
      }
      qh() {
        let yb = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
        return new Promise((bb => {
          this.Rl((yb => bb(yb))), this.connection ? yb ? (this.packr.buffer[0] = hy.Protocol.LEAVE_ROOM, this.connection.send(this.packr.buffer.subarray(0, 1))) : this.connection.close() : this.Rl.invoke(By.CloseCode.CONSENTED)
        }))
      }
      Gl(yb, bb) {
        return this.onMessageHandlers.on(this.getMessageHandlerKey(yb), bb)
      }
      send(yb, bb) {
        const Wy = {
          offset: 1
        };
        this.packr.buffer[0] = hy.Protocol.ROOM_DATA, "string" === typeof yb ? Py.encode.string(this.packr.buffer, yb, Wy) : Py.encode.number(this.packr.buffer, yb, Wy), this.packr.position = 0;
        const Uy = void 0 !== bb ? this.packr.pack(bb, 2048 + Wy.offset) : this.packr.buffer.subarray(0, Wy.offset);
        this.connection.send(Uy)
      }
      sendUnreliable(yb, bb) {
        const Wy = {
          offset: 1
        };
        this.packr.buffer[0] = hy.Protocol.ROOM_DATA, "string" === typeof yb ? Py.encode.string(this.packr.buffer, yb, Wy) : Py.encode.number(this.packr.buffer, yb, Wy), this.packr.position = 0;
        const Uy = void 0 !== bb ? this.packr.pack(bb, 2048 + Wy.offset) : this.packr.buffer.subarray(0, Wy.offset);
        this.connection.sendUnreliable(Uy)
      }
      nG(yb, bb) {
        const Wy = {
          offset: 1
        };
        if (this.packr.buffer[0] = hy.Protocol.ROOM_DATA_BYTES, "string" === typeof yb ? Py.encode.string(this.packr.buffer, yb, Wy) : Py.encode.number(this.packr.buffer, yb, Wy), bb.byteLength + Wy.offset > this.packr.buffer.byteLength) {
          const yb = new Uint8Array(Wy.offset + bb.byteLength);
          yb.set(this.packr.buffer), this.packr.useBuffer(yb)
        }
        this.packr.buffer.set(bb, Wy.offset), this.connection.send(this.packr.buffer.subarray(0, Wy.offset + bb.byteLength))
      }
      get state() {
        return this.nB.getState()
      }
      XB() {
        this.onJoin.clear(), this.onStateChange.clear(), this.onError.clear(), this.Rl.clear(), this.onMessageHandlers.events = {}, this.nB instanceof oy.Lby && (this.nB.bP.root.callbacks = {})
      }
      onMessageCallback(yb) {
        const bb = new Uint8Array(yb.data),
          Wy = {
            offset: 1
          },
          Uy = bb[0];
        if (Uy === hy.Protocol.JOIN_ROOM) {
          const yb = Py.decode.utf8Read(bb, Wy, bb[Wy.offset++]);
          if (this.serializerId = Py.decode.utf8Read(bb, Wy, bb[Wy.offset++]), !this.nB) {
            const yb = fy.getSerializer(this.serializerId);
            this.nB = new yb
          }
          bb.byteLength > Wy.offset && this.nB.handshake && this.nB.handshake(bb, Wy), this.reconnectionToken = `${this.roomId}:${yb}`, this.hasJoined = !0, this.onJoin.invoke(), this.packr.buffer[0] = hy.Protocol.JOIN_ROOM, this.connection.send(this.packr.buffer.subarray(0, 1))
        } else if (Uy === hy.Protocol.ERROR) {
          const yb = Py.decode.number(bb, Wy),
            Uy = Py.decode.string(bb, Wy);
          this.onError.invoke(yb, Uy)
        } else if (Uy === hy.Protocol.LEAVE_ROOM) this.qh();
        else if (Uy === hy.Protocol.ROOM_STATE) this.nB.setState(bb, Wy), this.onStateChange.invoke(this.nB.getState());
        else if (Uy === hy.Protocol.ROOM_STATE_PATCH) this.nB.patch(bb, Wy), this.onStateChange.invoke(this.nB.getState());
        else if (Uy === hy.Protocol.ROOM_DATA) {
          const yb = Py.decode.stringCheck(bb, Wy) ? Py.decode.string(bb, Wy) : Py.decode.number(bb, Wy),
            Uy = bb.byteLength > Wy.offset ? Ky.unpack(bb, {
              start: Wy.offset
            }) : void 0;
          this.dispatchMessage(yb, Uy)
        } else if (Uy === hy.Protocol.ROOM_DATA_BYTES) {
          const yb = Py.decode.stringCheck(bb, Wy) ? Py.decode.string(bb, Wy) : Py.decode.number(bb, Wy);
          this.dispatchMessage(yb, bb.subarray(Wy.offset))
        }
      }
      dispatchMessage(yb, bb) {
        var Wy;
        const Uy = this.getMessageHandlerKey(yb);
        this.onMessageHandlers.events[Uy] ? this.onMessageHandlers.emit(Uy, bb) : this.onMessageHandlers.events["*"] ? this.onMessageHandlers.emit("*", yb, bb) : null === (Wy = console.warn) || void 0 === Wy || Wy.call(console, `colyseus.js: onMessage() not registered for type '${yb}'.`)
      }
      destroy() {
        this.nB && this.nB.teardown()
      }
      getMessageHandlerKey(yb) {
        switch (typeof yb) {
          case "string":
            return yb;
          case "number":
            return `i${yb}`;
          default:
            throw new Error("invalid message type.")
        }
      }
    }
    bb.bW = ey
  },
  8313: (yb, bb, Wy) => {
    var Uy = Wy(8213);
    let hy;

    function fy() {
      if (!hy) try {
        hy = "undefined" !== typeof cc && cc.sys && cc.sys.localStorage ? cc.sys.localStorage : window.localStorage
      } catch (yb) {}
      return hy || "undefined" === typeof globalThis.indexedDB || (hy = new Zy), hy || (hy = {
        cache: {},
        setItem: function(yb, bb) {
          this.cache[yb] = bb
        },
        getItem: function(yb) {
          this.cache[yb]
        },
        removeItem: function(yb) {
          delete this.cache[yb]
        }
      }), hy
    }
    class Zy {
      constructor() {
        this.dbPromise = new Promise((yb => {
          const bb = indexedDB.open("_colyseus_storage", 1);
          bb.onupgradeneeded = () => bb.result.createObjectStore("store"), bb.onsuccess = () => yb(bb.result)
        }))
      }
      tx(yb, bb) {
        return Uy.__awaiter(this, void 0, void 0, (function*() {
          const Wy = (yield this.dbPromise).transaction("store", yb).objectStore("store");
          return bb(Wy)
        }))
      }
      setItem(yb, bb) {
        return this.tx("readwrite", (Wy => Wy.put(bb, yb))).then()
      }
      getItem(yb) {
        return Uy.__awaiter(this, void 0, void 0, (function*() {
          const bb = yield this.tx("readonly", (bb => bb.get(yb)));
          return new Promise((yb => {
            bb.onsuccess = () => yb(bb.result)
          }))
        }))
      }
      removeItem(yb) {
        return this.tx("readwrite", (bb => bb.delete(yb))).then()
      }
    }
    bb.getItem = function(yb, bb) {
      const Wy = fy().getItem(yb);
      "undefined" !== typeof Promise && Wy instanceof Promise ? Wy.then((yb => bb(yb))) : bb(Wy)
    }, bb.removeItem = function(yb) {
      fy().removeItem(yb)
    }, bb.setItem = function(yb, bb) {
      fy().setItem(yb, bb)
    }
  },
  8266: (yb, bb) => {
    bb.createNanoEvents = () => ({
      emit(yb) {
        let bb = this.events[yb] || [];
        for (var Wy = arguments.length, Uy = new Array(Wy > 1 ? Wy - 1 : 0), hy = 1; hy < Wy; hy++) Uy[hy - 1] = arguments[hy];
        for (let fy = 0, Zy = bb.length; fy < Zy; fy++) bb[fy](...Uy)
      },
      events: {},
      on(yb, bb) {
        var Wy;
        return (null === (Wy = this.events[yb]) || void 0 === Wy ? void 0 : Wy.push(bb)) || (this.events[yb] = [bb]), () => {
          var Wy;
          this.events[yb] = null === (Wy = this.events[yb]) || void 0 === Wy ? void 0 : Wy.filter((yb => bb !== yb))
        }
      }
    })
  },
  8272: (yb, bb) => {
    class Wy {
      constructor() {
        this.handlers = []
      }
      register(yb) {
        return this.handlers.push(yb), this
      }
      invoke() {
        for (var yb = arguments.length, bb = new Array(yb), Wy = 0; Wy < yb; Wy++) bb[Wy] = arguments[Wy];
        this.handlers.forEach((yb => yb.apply(this, bb)))
      }
      invokeAsync() {
        for (var yb = arguments.length, bb = new Array(yb), Wy = 0; Wy < yb; Wy++) bb[Wy] = arguments[Wy];
        return Promise.all(this.handlers.map((yb => yb.apply(this, bb))))
      }
      remove(yb) {
        const bb = this.handlers.indexOf(yb);
        this.handlers[bb] = this.handlers[this.handlers.length - 1], this.handlers.pop()
      }
      clear() {
        this.handlers = []
      }
    }
    bb.EventEmitter = Wy, bb.createSignal = function() {
      const yb = new Wy;

      function bb(bb) {
        return yb.register(bb, null === this)
      }
      return bb.once = bb => {
        const Wy = function() {
          for (var Uy = arguments.length, hy = new Array(Uy), fy = 0; fy < Uy; fy++) hy[fy] = arguments[fy];
          bb.apply(this, hy), yb.remove(Wy)
        };
        yb.register(Wy)
      }, bb.remove = bb => yb.remove(bb), bb.invoke = function() {
        return yb.invoke(...arguments)
      }, bb.invokeAsync = function() {
        return yb.invokeAsync(...arguments)
      }, bb.clear = () => yb.clear(), bb
    }
  },
  8217: (yb, bb) => {
    var Wy;
    bb.CloseCode = void 0, (Wy = bb.CloseCode || (bb.CloseCode = {}))[Wy.CONSENTED = 4e3] = "CONSENTED", Wy[Wy.DEVMODE_RESTART = 4010] = "DEVMODE_RESTART";
    class Uy extends Error {
      constructor(yb, bb) {
        super(bb), this.name = "ServerError", this.code = yb
      }
    }
    class hy extends Error {
      constructor(yb) {
        super(yb), this.name = "AbortError"
      }
    }
    bb.AbortError = hy, bb.ServerError = Uy
  },
  8194: (yb, bb, Wy) => {
    Wy(8200);
    var Uy = Wy(8208),
      hy = Wy(8256),
      fy = Wy(8224),
      Zy = Wy(8304),
      cb = Wy(8217),
      Py = Wy(8276),
      oy = Wy(8329),
      By = Wy(8263);
    By.registerSerializer("schema", Py.Lby), By.registerSerializer("none", oy.NoneSerializer), bb.Client = Uy.Client, bb.MatchMakeError = Uy.MatchMakeError, Object.defineProperty(bb, "ErrorCode", {
      enumerable: !0,
      get: function() {
        return hy.ErrorCode
      }
    }), Object.defineProperty(bb, "Protocol", {
      enumerable: !0,
      get: function() {
        return hy.Protocol
      }
    }), bb.bW = fy.bW, bb.Auth = Zy.Auth, bb.ServerError = cb.ServerError, bb.Lby = Py.Lby, bb.getStateCallbacks = Py.getStateCallbacks, bb.registerSerializer = By.registerSerializer
  },
  8200: () => {
    ArrayBuffer.isView || (ArrayBuffer.isView = yb => null !== yb && "object" === typeof yb && yb.buffer instanceof ArrayBuffer), "undefined" === typeof globalThis && "undefined" !== typeof window && (window.globalThis = window), "undefined" === typeof FormData && (globalThis.FormData = class {})
  },
  8329: (yb, bb) => {
    bb.NoneSerializer = class {
      setState(yb) {}
      getState() {
        return null
      }
      patch(yb) {}
      teardown() {}
      handshake(yb) {}
    }
  },
  8276: (yb, bb, Wy) => {
    var Uy = Wy(8241);
    bb.Lby = class {
      setState(yb, bb) {
        this.bP.decode(yb, bb)
      }
      getState() {
        return this.state
      }
      patch(yb, bb) {
        return this.bP.decode(yb, bb)
      }
      teardown() {
        this.bP.root.clearRefs()
      }
      handshake(yb, bb) {
        this.state ? (Uy.Reflection.decode(yb, bb), this.bP = new Uy.Decoder(this.state)) : (this.bP = Uy.Reflection.decode(yb, bb), this.state = this.bP.state)
      }
    }, bb.getStateCallbacks = function(yb) {
      try {
        return Uy.getDecoderStateCallbacks(yb.nB.bP)
      } catch (bb) {
        return
      }
    }
  },
  8263: (yb, bb) => {
    const Wy = {};
    bb.getSerializer = function(yb) {
      const bb = Wy[yb];
      if (!bb) throw new Error("missing serializer: " + yb);
      return bb
    }, bb.registerSerializer = function(yb, bb) {
      Wy[yb] = bb
    }
  },
  8237: (yb, bb, Wy) => {
    var Uy = Wy(8213),
      hy = Wy(8241);
    bb.H3TransportTransport = class {
      constructor(yb) {
        this.events = yb, this.isOpen = !1, this.lengthPrefixBuffer = new Uint8Array(9)
      }
      connect(yb) {
        let bb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        const Wy = bb.fingerprint && {
          serverCertificateHashes: [{
            algorithm: "sha-256",
            value: new Uint8Array(bb.fingerprint).buffer
          }]
        } || void 0;
        this.wt = new WebTransport(yb, Wy), this.wt.ready.then((yb => {
          console.log("WebTransport ready!", yb), this.isOpen = !0, this.unreliableReader = this.wt.datagrams.readable.getReader(), this.unreliableWriter = this.wt.datagrams.writable.getWriter();
          this.wt.incomingBidirectionalStreams.getReader().read().then((yb => {
            this.reader = yb.value.readable.getReader(), this.writer = yb.value.writable.getWriter(), this.sendSeatReservation(bb.room.roomId, bb.sessionId, bb.reconnectionToken), this.readIncomingData(), this.readIncomingUnreliableData()
          })).catch((yb => {
            console.error("failed to read incoming stream", yb), console.error("TODO: close the connection")
          }))
        })).catch((yb => {
          console.log("WebTransport not ready!", yb), this._close()
        })), this.wt.closed.then((yb => {
          console.log("WebTransport closed w/ success", yb), this.events.onclose({
            code: yb.closeCode,
            reason: yb.reason
          })
        })).catch((yb => {
          console.log("WebTransport closed w/ error", yb), this.events.onerror(yb), this.events.onclose({
            code: yb.closeCode,
            reason: yb.reason
          })
        })).finally((() => {
          this._close()
        }))
      }
      send(yb) {
        const bb = hy.encode.number(this.lengthPrefixBuffer, yb.length, {
            offset: 0
          }),
          Wy = new Uint8Array(bb + yb.length);
        Wy.set(this.lengthPrefixBuffer.subarray(0, bb), 0), Wy.set(yb, bb), this.writer.write(Wy)
      }
      sendUnreliable(yb) {
        const bb = hy.encode.number(this.lengthPrefixBuffer, yb.length, {
            offset: 0
          }),
          Wy = new Uint8Array(bb + yb.length);
        Wy.set(this.lengthPrefixBuffer.subarray(0, bb), 0), Wy.set(yb, bb), this.unreliableWriter.write(Wy)
      }
      close(yb, bb) {
        try {
          this.wt.close({
            closeCode: yb,
            reason: bb
          })
        } catch (Wy) {
          console.error(Wy)
        }
      }
      readIncomingData() {
        return Uy.__awaiter(this, void 0, void 0, (function*() {
          let yb;
          for (; this.isOpen;) {
            try {
              yb = yield this.reader.read();
              const bb = yb.value,
                Wy = {
                  offset: 0
                };
              do {
                const yb = hy.decode.number(bb, Wy);
                this.events.onmessage({
                  data: bb.subarray(Wy.offset, Wy.offset + yb)
                }), Wy.offset += yb
              } while (Wy.offset < bb.length)
            } catch (bb) {
              -1 === bb.message.indexOf("session is closed") && console.error("H3Transport: failed to read incoming data", bb);
              break
            }
            if (yb.done) break
          }
        }))
      }
      readIncomingUnreliableData() {
        return Uy.__awaiter(this, void 0, void 0, (function*() {
          let yb;
          for (; this.isOpen;) {
            try {
              yb = yield this.unreliableReader.read();
              const bb = yb.value,
                Wy = {
                  offset: 0
                };
              do {
                const yb = hy.decode.number(bb, Wy);
                this.events.onmessage({
                  data: bb.subarray(Wy.offset, Wy.offset + yb)
                }), Wy.offset += yb
              } while (Wy.offset < bb.length)
            } catch (bb) {
              -1 === bb.message.indexOf("session is closed") && console.error("H3Transport: failed to read incoming data", bb);
              break
            }
            if (yb.done) break
          }
        }))
      }
      sendSeatReservation(yb, bb, Wy) {
        const Uy = {
            offset: 0
          },
          fy = [];
        hy.encode.string(fy, yb, Uy), hy.encode.string(fy, bb, Uy), Wy && hy.encode.string(fy, Wy, Uy), this.writer.write(new Uint8Array(fy).buffer)
      }
      _close() {
        this.isOpen = !1
      }
    }
  },
  8246: (yb, bb, Wy) => {
    var Uy = Wy(8254);
    const hy = globalThis.WebSocket || Uy;
    bb.WebSocketTransport = class {
      constructor(yb) {
        this.events = yb
      }
      send(yb) {
        this.ws.send(yb)
      }
      sendUnreliable(yb) {
        console.warn("colyseus.js: The WebSocket transport does not support unreliable messages")
      }
      connect(yb, bb) {
        try {
          this.ws = new hy(yb, {
            headers: bb,
            protocols: this.protocols
          })
        } catch (Wy) {
          this.ws = new hy(yb, this.protocols)
        }
        this.ws.binaryType = "arraybuffer", this.ws.onopen = this.events.onopen, this.ws.onmessage = this.events.onmessage, this.ws.onclose = this.events.onclose, this.ws.onerror = this.events.onerror
      }
      close(yb, bb) {
        this.ws.close(yb, bb)
      }
      get isOpen() {
        return this.ws.readyState === hy.OPEN
      }
    }
  },
  8254: yb => {
    yb.exports = function() {
      throw new Error("ws does not work in the browser. Browser clients must use the native WebSocket object")
    }
  },
  8297: (yb, bb, Wy) => {
    function Uy(yb, bb) {
      bb.headers = yb.headers || {}, bb.statusMessage = yb.statusText, bb.statusCode = yb.status, bb.data = yb.response
    }

    function hy(yb, bb, Wy) {
      return new Promise((function(hy, fy) {
        Wy = Wy || {};
        var Zy, cb, Py, oy = new XMLHttpRequest,
          By = Wy.body,
          Ky = Wy.headers || {};
        for (Zy in Wy.timeout && (oy.timeout = Wy.timeout), oy.ontimeout = oy.onerror = function(yb) {
            yb.timeout = "timeout" == yb.type, fy(yb)
          }, oy.onabort = function(yb) {
            yb.aborted = !0, fy(yb)
          }, oy.open(yb, bb.href || bb), oy.onload = function() {
            for (Py = oy.getAllResponseHeaders().trim().split(/[\r\n]+/), Uy(oy, oy); cb = Py.shift();) cb = cb.split(": "), oy.headers[cb.shift().toLowerCase()] = cb.join(": ");
            if ((cb = oy.headers["content-type"]) && ~cb.indexOf("application/json")) try {
              oy.data = JSON.parse(oy.data, Wy.reviver)
            } catch (yb) {
              return Uy(oy, yb), fy(yb)
            }(oy.status >= 400 ? fy : hy)(oy)
          }, typeof FormData < "u" && By instanceof FormData || By && "object" == typeof By && (Ky["content-type"] = "application/json", By = JSON.stringify(By)), oy.withCredentials = !!Wy.withCredentials, Ky) oy.setRequestHeader(Zy, Ky[Zy]);
        oy.send(By), Wy.signal && Wy.signal.addEventListener("abort", (function() {
          oy.abort()
        }))
      }))
    }
    Wy.r(bb), Wy.d(bb, {
      del: () => Py,
      get: () => fy,
      patch: () => cb,
      post: () => Zy,
      put: () => oy,
      send: () => hy
    });
    var fy = hy.bind(hy, "GET"),
      Zy = hy.bind(hy, "POST"),
      cb = hy.bind(hy, "PATCH"),
      Py = hy.bind(hy, "DELETE"),
      oy = hy.bind(hy, "PUT")
  },
  8282: (yb, bb, Wy) => {
    var Uy, hy, fy;
    Wy.r(bb), Wy.d(bb, {
      ALWAYS: () => kW,
      C1: () => Vy,
      DECIMAL_FIT: () => zW,
      DECIMAL_ROUND: () => Nb,
      Decoder: () => Pb,
      Encoder: () => tW,
      FLOAT32_OPTIONS: () => qW,
      NEVER: () => wb,
      Packr: () => ub,
      RESERVE_START_SPACE: () => Ab,
      RESET_BUFFER_MODE: () => xW,
      REUSE_BUFFER_MODE: () => Ib,
      Unpackr: () => vb,
      addExtension: () => pb,
      clearSource: () => Zb,
      decode: () => eb,
      decodeIter: () => db,
      encode: () => Db,
      encodeIter: () => yU,
      isNativeAccelerationEnabled: () => Ly,
      mapsAsObjects: () => WW,
      pack: () => jW,
      roundFloat32: () => Cb,
      unpack: () => Bb,
      unpackMultiple: () => Kb,
      useRecords: () => bU
    });
    try {
      Uy = new TextDecoder
    } catch (UW) {}
    var Zy = 0;
    const cb = [];
    var Py, oy, By, Ky, ey, qb = cb,
      sy = 0,
      Sy = {},
      Ey = 0,
      ly = 0,
      mb = [],
      Cy = {
        useRecords: !1,
        mapsAsObjects: !0
      };
    class Ty {}
    const Vy = new Ty;
    Vy.name = "MessagePack 0xC1";
    var Jy, gb, Gy, Oy = !1,
      Ry = 2;
    try {
      new Function("")
    } catch (UW) {
      Ry = 1 / 0
    }
    class vb {
      constructor(yb) {
        yb && (!1 === yb.useRecords && void 0 === yb.mapsAsObjects && (yb.mapsAsObjects = !0), yb.sequential && !1 !== yb.trusted && (yb.trusted = !0, yb.structures || 0 == yb.useRecords || (yb.structures = [], yb.maxSharedStructures || (yb.maxSharedStructures = 0))), yb.structures ? yb.structures.sharedLength = yb.structures.length : yb.getStructures && ((yb.structures = []).uninitialized = !0, yb.structures.sharedLength = 0), yb.int64AsNumber && (yb.int64AsType = "number")), Object.assign(this, yb)
      }
      unpack(yb, bb) {
        if (hy) return fb((() => (Zb(), this ? this.unpack(yb, bb) : vb.prototype.unpack.call(Cy, yb, bb))));
        yb.buffer || yb.constructor !== ArrayBuffer || (yb = "undefined" !== typeof Buffer ? Buffer.from(yb) : new Uint8Array(yb)), "object" === typeof bb ? (fy = bb.end || yb.length, Zy = bb.start || 0) : (Zy = 0, fy = bb > -1 ? bb : yb.length), sy = 0, ly = 0, oy = null, qb = cb, By = null, hy = yb;
        try {
          ey = yb.dataView || (yb.dataView = new DataView(yb.buffer, yb.byteOffset, yb.byteLength))
        } catch (UW) {
          if (hy = null, yb instanceof Uint8Array) throw UW;
          throw new Error("Source must be a Uint8Array or Buffer but was a " + (yb && "object" == typeof yb ? yb.constructor.name : typeof yb))
        }
        if (this instanceof vb) {
          if (Sy = this, this.structures) return Py = this.structures, ib(bb);
          (!Py || Py.length > 0) && (Py = [])
        } else Sy = Cy, (!Py || Py.length > 0) && (Py = []);
        return ib(bb)
      }
      unpackMultiple(yb, bb) {
        let Wy, Uy = 0;
        try {
          Oy = !0;
          let hy = yb.length,
            fy = this ? this.unpack(yb, hy) : ob.unpack(yb, hy);
          if (!bb) {
            for (Wy = [fy]; Zy < hy;) Uy = Zy, Wy.push(ib());
            return Wy
          }
          if (!1 === bb(fy, Uy, Zy)) return;
          for (; Zy < hy;)
            if (Uy = Zy, !1 === bb(ib(), Uy, Zy)) return
        } catch (UW) {
          throw UW.lastPosition = Uy, UW.values = Wy, UW
        } finally {
          Oy = !1, Zb()
        }
      }
      _mergeStructures(yb, bb) {
        gb && (yb = gb.call(this, yb)), yb = yb || [], Object.isFrozen(yb) && (yb = yb.map((yb => yb.slice(0))));
        for (let Wy = 0, Uy = yb.length; Wy < Uy; Wy++) {
          let bb = yb[Wy];
          bb && (bb.isShared = !0, Wy >= 32 && (bb.highByte = Wy - 32 >> 5))
        }
        yb.sharedLength = yb.length;
        for (let Wy in bb || [])
          if (Wy >= 0) {
            let Uy = yb[Wy],
              hy = bb[Wy];
            hy && (Uy && ((yb.restoreStructures || (yb.restoreStructures = []))[Wy] = Uy), yb[Wy] = hy)
          } return this.structures = yb
      }
      decode(yb, bb) {
        return this.unpack(yb, bb)
      }
    }

    function ib(yb) {
      try {
        if (!Sy.trusted && !Oy) {
          let yb = Py.sharedLength || 0;
          yb < Py.length && (Py.length = yb)
        }
        let bb;
        if (Sy.randomAccessStructure && hy[Zy] < 64 && hy[Zy] >= 32 && Jy ? (bb = Jy(hy, Zy, fy, Sy), hy = null, yb && yb.lazy || !bb || (bb = bb.toJSON()), Zy = fy) : bb = Yy(), By && (Zy = By.postBundlePosition, By = null), Oy && (Py.restoreStructures = null), Zy == fy) Py && Py.restoreStructures && My(), Py = null, hy = null, Ky && (Ky = null);
        else {
          if (Zy > fy) throw new Error("Unexpected end of MessagePack data");
          if (!Oy) {
            let yb;
            try {
              yb = JSON.stringify(bb, ((yb, bb) => "bigint" === typeof bb ? `${bb}n` : bb)).slice(0, 100)
            } catch (UW) {
              yb = "(JSON view not available " + UW + ")"
            }
            throw new Error("Data read, but end of buffer not reached " + yb)
          }
        }
        return bb
      } catch (UW) {
        throw Py && Py.restoreStructures && My(), Zb(), (UW instanceof RangeError || UW.message.startsWith("Unexpected end of buffer") || Zy > fy) && (UW.incomplete = !0), UW
      }
    }

    function My() {
      for (let yb in Py.restoreStructures) Py[yb] = Py.restoreStructures[yb];
      Py.restoreStructures = null
    }

    function Yy() {
      let yb = hy[Zy++];
      if (yb < 160) {
        if (yb < 128) {
          if (yb < 64) return yb;
          {
            let bb = Py[63 & yb] || Sy.getStructures && rb()[63 & yb];
            return bb ? (bb.read || (bb.read = ny(bb, 63 & yb)), bb.read()) : yb
          }
        }
        if (yb < 144) {
          if (yb -= 128, Sy.mapsAsObjects) {
            let bb = {};
            for (let Wy = 0; Wy < yb; Wy++) {
              let yb = Ay();
              "__proto__" === yb && (yb = "__proto_"), bb[yb] = Yy()
            }
            return bb
          } {
            let bb = new Map;
            for (let Wy = 0; Wy < yb; Wy++) bb.set(Yy(), Yy());
            return bb
          }
        } {
          yb -= 144;
          let bb = new Array(yb);
          for (let Wy = 0; Wy < yb; Wy++) bb[Wy] = Yy();
          return Sy.freezeData ? Object.freeze(bb) : bb
        }
      }
      if (yb < 192) {
        let bb = yb - 160;
        if (ly >= Zy) return oy.slice(Zy - Ey, (Zy += bb) - Ey);
        if (0 == ly && fy < 140) {
          let yb = bb < 16 ? kb(bb) : wy(bb);
          if (null != yb) return yb
        }
        return Hy(bb)
      } {
        let bb;
        switch (yb) {
          case 192:
            return null;
          case 193:
            return By ? (bb = Yy(), bb > 0 ? By[1].slice(By.position1, By.position1 += bb) : By[0].slice(By.position0, By.position0 -= bb)) : Vy;
          case 194:
            return !1;
          case 195:
            return !0;
          case 196:
            if (bb = hy[Zy++], void 0 === bb) throw new Error("Unexpected end of buffer");
            return zb(bb);
          case 197:
            return bb = ey.getUint16(Zy), Zy += 2, zb(bb);
          case 198:
            return bb = ey.getUint32(Zy), Zy += 4, zb(bb);
          case 199:
            return Iy(hy[Zy++]);
          case 200:
            return bb = ey.getUint16(Zy), Zy += 2, Iy(bb);
          case 201:
            return bb = ey.getUint32(Zy), Zy += 4, Iy(bb);
          case 202:
            if (bb = ey.getFloat32(Zy), Sy.useFloat32 > 2) {
              let yb = cW[(127 & hy[Zy]) << 1 | hy[Zy + 1] >> 7];
              return Zy += 4, (yb * bb + (bb > 0 ? .5 : -.5) | 0) / yb
            }
            return Zy += 4, bb;
          case 203:
            return bb = ey.getFloat64(Zy), Zy += 8, bb;
          case 204:
            return hy[Zy++];
          case 205:
            return bb = ey.getUint16(Zy), Zy += 2, bb;
          case 206:
            return bb = ey.getUint32(Zy), Zy += 4, bb;
          case 207:
            return "number" === Sy.int64AsType ? (bb = 4294967296 * ey.getUint32(Zy), bb += ey.getUint32(Zy + 4)) : "string" === Sy.int64AsType ? bb = ey.getBigUint64(Zy).toString() : "auto" === Sy.int64AsType ? (bb = ey.getBigUint64(Zy), bb <= BigInt(2) << BigInt(52) && (bb = Number(bb))) : bb = ey.getBigUint64(Zy), Zy += 8, bb;
          case 208:
            return ey.getInt8(Zy++);
          case 209:
            return bb = ey.getInt16(Zy), Zy += 2, bb;
          case 210:
            return bb = ey.getInt32(Zy), Zy += 4, bb;
          case 211:
            return "number" === Sy.int64AsType ? (bb = 4294967296 * ey.getInt32(Zy), bb += ey.getUint32(Zy + 4)) : "string" === Sy.int64AsType ? bb = ey.getBigInt64(Zy).toString() : "auto" === Sy.int64AsType ? (bb = ey.getBigInt64(Zy), bb >= BigInt(-2) << BigInt(52) && bb <= BigInt(2) << BigInt(52) && (bb = Number(bb))) : bb = ey.getBigInt64(Zy), Zy += 8, bb;
          case 212:
            if (bb = hy[Zy++], 114 == bb) return yW(63 & hy[Zy++]);
            {
              let yb = mb[bb];
              if (yb) return yb.read ? (Zy++, yb.read(Yy())) : yb.noBuffer ? (Zy++, yb()) : yb(hy.subarray(Zy, ++Zy));
              throw new Error("Unknown extension " + bb)
            }
          case 213:
            return bb = hy[Zy], 114 == bb ? (Zy++, yW(63 & hy[Zy++], hy[Zy++])) : Iy(2);
          case 214:
            return Iy(4);
          case 215:
            return Iy(8);
          case 216:
            return Iy(16);
          case 217:
            return bb = hy[Zy++], ly >= Zy ? oy.slice(Zy - Ey, (Zy += bb) - Ey) : ab(bb);
          case 218:
            return bb = ey.getUint16(Zy), ly >= (Zy += 2) ? oy.slice(Zy - Ey, (Zy += bb) - Ey) : Fy(bb);
          case 219:
            return bb = ey.getUint32(Zy), ly >= (Zy += 4) ? oy.slice(Zy - Ey, (Zy += bb) - Ey) : py(bb);
          case 220:
            return bb = ey.getUint16(Zy), Zy += 2, jb(bb);
          case 221:
            return bb = ey.getUint32(Zy), Zy += 4, jb(bb);
          case 222:
            return bb = ey.getUint16(Zy), Zy += 2, Dy(bb);
          case 223:
            return bb = ey.getUint32(Zy), Zy += 4, Dy(bb);
          default:
            if (yb >= 224) return yb - 256;
            if (void 0 === yb) {
              let yb = new Error("Unexpected end of MessagePack data");
              throw yb.incomplete = !0, yb
            }
            throw new Error("Unknown MessagePack token " + yb)
        }
      }
    }
    const Xy = /^[a-zA-Z_$][a-zA-Z\d_$]*$/;

    function ny(yb, bb) {
      function Wy() {
        if (Wy.count++ > Ry) {
          let Wy = yb.read = new Function("r", "return function(){return " + (Sy.freezeData ? "Object.freeze" : "") + "({" + yb.map((yb => "__proto__" === yb ? "__proto_:r()" : Xy.test(yb) ? yb + ":r()" : "[" + JSON.stringify(yb) + "]:r()")).join(",") + "})}")(Yy);
          return 0 === yb.highByte && (yb.read = uy(bb, yb.read)), Wy()
        }
        let Uy = {};
        for (let bb = 0, Wy = yb.length; bb < Wy; bb++) {
          let Wy = yb[bb];
          "__proto__" === Wy && (Wy = "__proto_"), Uy[Wy] = Yy()
        }
        return Sy.freezeData ? Object.freeze(Uy) : Uy
      }
      return Wy.count = 0, 0 === yb.highByte ? uy(bb, Wy) : Wy
    }
    const uy = (yb, bb) => function() {
      let Wy = hy[Zy++];
      if (0 === Wy) return bb();
      let Uy = yb < 32 ? -(yb + (Wy << 5)) : yb + (Wy << 5),
        fy = Py[Uy] || rb()[Uy];
      if (!fy) throw new Error("Record id is not defined for " + Uy);
      return fy.read || (fy.read = ny(fy, yb)), fy.read()
    };

    function rb() {
      let yb = fb((() => (hy = null, Sy.getStructures())));
      return Py = Sy._mergeStructures(yb, Py)
    }
    var Hy = Qy,
      ab = Qy,
      Fy = Qy,
      py = Qy;
    let Ly = !1;

    function Qy(yb) {
      let bb;
      if (yb < 16 && (bb = kb(yb))) return bb;
      if (yb > 64 && Uy) return Uy.decode(hy.subarray(Zy, Zy += yb));
      const Wy = Zy + yb,
        fy = [];
      for (bb = ""; Zy < Wy;) {
        const yb = hy[Zy++];
        if (0 === (128 & yb)) fy.push(yb);
        else if (192 === (224 & yb)) {
          const bb = 63 & hy[Zy++];
          fy.push((31 & yb) << 6 | bb)
        } else if (224 === (240 & yb)) {
          const bb = 63 & hy[Zy++],
            Wy = 63 & hy[Zy++];
          fy.push((31 & yb) << 12 | bb << 6 | Wy)
        } else if (240 === (248 & yb)) {
          let bb = (7 & yb) << 18 | (63 & hy[Zy++]) << 12 | (63 & hy[Zy++]) << 6 | 63 & hy[Zy++];
          bb > 65535 && (bb -= 65536, fy.push(bb >>> 10 & 1023 | 55296), bb = 56320 | 1023 & bb), fy.push(bb)
        } else fy.push(yb);
        fy.length >= 4096 && (bb += tb.apply(String, fy), fy.length = 0)
      }
      return fy.length > 0 && (bb += tb.apply(String, fy)), bb
    }

    function jb(yb) {
      let bb = new Array(yb);
      for (let Wy = 0; Wy < yb; Wy++) bb[Wy] = Yy();
      return Sy.freezeData ? Object.freeze(bb) : bb
    }

    function Dy(yb) {
      if (Sy.mapsAsObjects) {
        let bb = {};
        for (let Wy = 0; Wy < yb; Wy++) {
          let yb = Ay();
          "__proto__" === yb && (yb = "__proto_"), bb[yb] = Yy()
        }
        return bb
      } {
        let bb = new Map;
        for (let Wy = 0; Wy < yb; Wy++) bb.set(Yy(), Yy());
        return bb
      }
    }
    var tb = String.fromCharCode;

    function wy(yb) {
      let bb = Zy,
        Wy = new Array(yb);
      for (let Uy = 0; Uy < yb; Uy++) {
        const yb = hy[Zy++];
        if ((128 & yb) > 0) return void(Zy = bb);
        Wy[Uy] = yb
      }
      return tb.apply(String, Wy)
    }

    function kb(yb) {
      if (yb < 4) {
        if (yb < 2) {
          if (0 === yb) return "";
          {
            let yb = hy[Zy++];
            return (128 & yb) > 1 ? void(Zy -= 1) : tb(yb)
          }
        } {
          let bb = hy[Zy++],
            Wy = hy[Zy++];
          if ((128 & bb) > 0 || (128 & Wy) > 0) return void(Zy -= 2);
          if (yb < 3) return tb(bb, Wy);
          let Uy = hy[Zy++];
          return (128 & Uy) > 0 ? void(Zy -= 3) : tb(bb, Wy, Uy)
        }
      } {
        let bb = hy[Zy++],
          Wy = hy[Zy++],
          Uy = hy[Zy++],
          fy = hy[Zy++];
        if ((128 & bb) > 0 || (128 & Wy) > 0 || (128 & Uy) > 0 || (128 & fy) > 0) return void(Zy -= 4);
        if (yb < 6) {
          if (4 === yb) return tb(bb, Wy, Uy, fy);
          {
            let yb = hy[Zy++];
            return (128 & yb) > 0 ? void(Zy -= 5) : tb(bb, Wy, Uy, fy, yb)
          }
        }
        if (yb < 8) {
          let cb = hy[Zy++],
            Py = hy[Zy++];
          if ((128 & cb) > 0 || (128 & Py) > 0) return void(Zy -= 6);
          if (yb < 7) return tb(bb, Wy, Uy, fy, cb, Py);
          let oy = hy[Zy++];
          return (128 & oy) > 0 ? void(Zy -= 7) : tb(bb, Wy, Uy, fy, cb, Py, oy)
        } {
          let cb = hy[Zy++],
            Py = hy[Zy++],
            oy = hy[Zy++],
            By = hy[Zy++];
          if ((128 & cb) > 0 || (128 & Py) > 0 || (128 & oy) > 0 || (128 & By) > 0) return void(Zy -= 8);
          if (yb < 10) {
            if (8 === yb) return tb(bb, Wy, Uy, fy, cb, Py, oy, By);
            {
              let yb = hy[Zy++];
              return (128 & yb) > 0 ? void(Zy -= 9) : tb(bb, Wy, Uy, fy, cb, Py, oy, By, yb)
            }
          }
          if (yb < 12) {
            let Ky = hy[Zy++],
              ey = hy[Zy++];
            if ((128 & Ky) > 0 || (128 & ey) > 0) return void(Zy -= 10);
            if (yb < 11) return tb(bb, Wy, Uy, fy, cb, Py, oy, By, Ky, ey);
            let qb = hy[Zy++];
            return (128 & qb) > 0 ? void(Zy -= 11) : tb(bb, Wy, Uy, fy, cb, Py, oy, By, Ky, ey, qb)
          } {
            let Ky = hy[Zy++],
              ey = hy[Zy++],
              qb = hy[Zy++],
              sy = hy[Zy++];
            if ((128 & Ky) > 0 || (128 & ey) > 0 || (128 & qb) > 0 || (128 & sy) > 0) return void(Zy -= 12);
            if (yb < 14) {
              if (12 === yb) return tb(bb, Wy, Uy, fy, cb, Py, oy, By, Ky, ey, qb, sy);
              {
                let yb = hy[Zy++];
                return (128 & yb) > 0 ? void(Zy -= 13) : tb(bb, Wy, Uy, fy, cb, Py, oy, By, Ky, ey, qb, sy, yb)
              }
            } {
              let Sy = hy[Zy++],
                Ey = hy[Zy++];
              if ((128 & Sy) > 0 || (128 & Ey) > 0) return void(Zy -= 14);
              if (yb < 15) return tb(bb, Wy, Uy, fy, cb, Py, oy, By, Ky, ey, qb, sy, Sy, Ey);
              let ly = hy[Zy++];
              return (128 & ly) > 0 ? void(Zy -= 15) : tb(bb, Wy, Uy, fy, cb, Py, oy, By, Ky, ey, qb, sy, Sy, Ey, ly)
            }
          }
        }
      }
    }

    function Ny() {
      let yb, bb = hy[Zy++];
      if (bb < 192) yb = bb - 160;
      else switch (bb) {
        case 217:
          yb = hy[Zy++];
          break;
        case 218:
          yb = ey.getUint16(Zy), Zy += 2;
          break;
        case 219:
          yb = ey.getUint32(Zy), Zy += 4;
          break;
        default:
          throw new Error("Expected string")
      }
      return Qy(yb)
    }

    function zb(yb) {
      return Sy.copyBuffers ? Uint8Array.prototype.slice.call(hy, Zy, Zy += yb) : hy.subarray(Zy, Zy += yb)
    }

    function Iy(yb) {
      let bb = hy[Zy++];
      if (mb[bb]) {
        let Wy;
        return mb[bb](hy.subarray(Zy, Wy = Zy += yb), (yb => {
          Zy = yb;
          try {
            return Yy()
          } finally {
            Zy = Wy
          }
        }))
      }
      throw new Error("Unknown extension type " + bb)
    }
    var xb = new Array(4096);

    function Ay() {
      let yb = hy[Zy++];
      if (!(yb >= 160 && yb < 192)) return Zy--, dy(Yy());
      if (yb -= 160, ly >= Zy) return oy.slice(Zy - Ey, (Zy += yb) - Ey);
      if (!(0 == ly && fy < 180)) return Hy(yb);
      let bb, Wy = 4095 & (yb << 5 ^ (yb > 1 ? ey.getUint16(Zy) : yb > 0 ? hy[Zy] : 0)),
        Uy = xb[Wy],
        cb = Zy,
        Py = Zy + yb - 3,
        By = 0;
      if (Uy && Uy.bytes == yb) {
        for (; cb < Py;) {
          if (bb = ey.getUint32(cb), bb != Uy[By++]) {
            cb = 1879048192;
            break
          }
          cb += 4
        }
        for (Py += 3; cb < Py;)
          if (bb = hy[cb++], bb != Uy[By++]) {
            cb = 1879048192;
            break
          } if (cb === Py) return Zy = cb, Uy.string;
        Py -= 3, cb = Zy
      }
      for (Uy = [], xb[Wy] = Uy, Uy.bytes = yb; cb < Py;) bb = ey.getUint32(cb), Uy.push(bb), cb += 4;
      for (Py += 3; cb < Py;) bb = hy[cb++], Uy.push(bb);
      let Ky = yb < 16 ? kb(yb) : wy(yb);
      return Uy.string = null != Ky ? Ky : Hy(yb)
    }

    function dy(yb) {
      if ("string" === typeof yb) return yb;
      if ("number" === typeof yb || "boolean" === typeof yb || "bigint" === typeof yb) return yb.toString();
      if (null == yb) return yb + "";
      if (Sy.allowArraysInMapKeys && Array.isArray(yb) && yb.flat().every((yb => ["string", "number", "boolean", "bigint"].includes(typeof yb)))) return yb.flat().toString();
      throw new Error("Invalid property type for record: " + typeof yb)
    }
    const yW = (yb, bb) => {
      let Wy = Yy().map(dy),
        Uy = yb;
      void 0 !== bb && (yb = yb < 32 ? -((bb << 5) + yb) : (bb << 5) + yb, Wy.highByte = bb);
      let hy = Py[yb];
      return hy && (hy.isShared || Oy) && ((Py.restoreStructures || (Py.restoreStructures = []))[yb] = hy), Py[yb] = Wy, Wy.read = ny(Wy, Uy), Wy.read()
    };
    mb[0] = () => {}, mb[0].noBuffer = !0, mb[66] = yb => {
      let bb = yb.length,
        Wy = BigInt(128 & yb[0] ? yb[0] - 256 : yb[0]);
      for (let Uy = 1; Uy < bb; Uy++) Wy <<= BigInt(8), Wy += BigInt(yb[Uy]);
      return Wy
    };
    let bW = {
      Error: Error,
      TypeError: TypeError,
      ReferenceError: ReferenceError
    };
    mb[101] = () => {
      let yb = Yy();
      return (bW[yb[0]] || Error)(yb[1], {
        cause: yb[2]
      })
    }, mb[105] = yb => {
      if (!1 === Sy.structuredClone) throw new Error("Structured clone extension is disabled");
      let bb = ey.getUint32(Zy - 4);
      Ky || (Ky = new Map);
      let Wy, Uy = hy[Zy];
      Wy = Uy >= 144 && Uy < 160 || 220 == Uy || 221 == Uy ? [] : {};
      let fy = {
        target: Wy
      };
      Ky.set(bb, fy);
      let cb = Yy();
      return fy.used ? Object.assign(Wy, cb) : (fy.target = cb, cb)
    }, mb[112] = yb => {
      if (!1 === Sy.structuredClone) throw new Error("Structured clone extension is disabled");
      let bb = ey.getUint32(Zy - 4),
        Wy = Ky.get(bb);
      return Wy.used = !0, Wy.target
    }, mb[115] = () => new Set(Yy());
    const Wb = ["Int8", "Uint8", "Uint8Clamped", "Int16", "Uint16", "Int32", "Uint32", "Float32", "Float64", "BigInt64", "BigUint64"].map((yb => yb + "Array"));
    let Ub = "object" === typeof globalThis ? globalThis : window;
    mb[116] = yb => {
      let bb = yb[0],
        Wy = Wb[bb];
      if (!Wy) {
        if (16 === bb) {
          let bb = new ArrayBuffer(yb.length - 1);
          return new Uint8Array(bb).set(yb.subarray(1)), bb
        }
        throw new Error("Could not find typed array for code " + bb)
      }
      return new Ub[Wy](Uint8Array.prototype.slice.call(yb, 1).buffer)
    }, mb[120] = () => {
      let yb = Yy();
      return new RegExp(yb[0], yb[1])
    };
    const hb = [];

    function fb(yb) {
      Gy && Gy();
      let bb = fy,
        Wy = Zy,
        Uy = sy,
        cb = Ey,
        mb = ly,
        Cy = oy,
        Ty = qb,
        Vy = Ky,
        Jy = By,
        gb = new Uint8Array(hy.slice(0, fy)),
        Ry = Py,
        vb = Py.slice(0, Py.length),
        ib = Sy,
        My = Oy,
        Yy = yb();
      return fy = bb, Zy = Wy, sy = Uy, Ey = cb, ly = mb, oy = Cy, qb = Ty, Ky = Vy, By = Jy, hy = gb, Oy = My, (Py = Ry).splice(0, Py.length, ...vb), Sy = ib, ey = new DataView(hy.buffer, hy.byteOffset, hy.byteLength), Yy
    }

    function Zb() {
      hy = null, Ky = null, Py = null
    }
    mb[98] = yb => {
      let bb = (yb[0] << 24) + (yb[1] << 16) + (yb[2] << 8) + yb[3],
        Wy = Zy;
      return Zy += bb - yb.length, By = hb, (By = [Ny(), Ny()]).position0 = 0, By.position1 = 0, By.postBundlePosition = Zy, Zy = Wy, Yy()
    }, mb[255] = yb => 4 == yb.length ? new Date(1e3 * (16777216 * yb[0] + (yb[1] << 16) + (yb[2] << 8) + yb[3])) : 8 == yb.length ? new Date(((yb[0] << 22) + (yb[1] << 14) + (yb[2] << 6) + (yb[3] >> 2)) / 1e6 + 1e3 * (4294967296 * (3 & yb[3]) + 16777216 * yb[4] + (yb[5] << 16) + (yb[6] << 8) + yb[7])) : 12 == yb.length ? new Date(((yb[0] << 24) + (yb[1] << 16) + (yb[2] << 8) + yb[3]) / 1e6 + 1e3 * ((128 & yb[4] ? -281474976710656 : 0) + 1099511627776 * yb[6] + 4294967296 * yb[7] + 16777216 * yb[8] + (yb[9] << 16) + (yb[10] << 8) + yb[11])) : new Date("invalid");
    const cW = new Array(147);
    for (let hW = 0; hW < 256; hW++) cW[hW] = +("1e" + Math.floor(45.15 - .30103 * hW));
    const Pb = vb;
    var ob = new vb({
      useRecords: !1
    });
    const Bb = ob.unpack,
      Kb = ob.unpackMultiple,
      eb = ob.unpack,
      qW = {
        NEVER: 0,
        ALWAYS: 1,
        DECIMAL_ROUND: 3,
        DECIMAL_FIT: 4
      };
    let sb, Sb, Eb, lb = new Float32Array(1),
      mW = new Uint8Array(lb.buffer, 0, 4);

    function Cb(yb) {
      lb[0] = yb;
      let bb = cW[(127 & mW[3]) << 1 | mW[2] >> 7];
      return (bb * yb + (yb > 0 ? .5 : -.5) | 0) / bb
    }
    try {
      sb = new TextEncoder
    } catch (UW) {}
    const Tb = "undefined" !== typeof Buffer,
      Vb = Tb ? function(yb) {
        return Buffer.allocUnsafeSlow(yb)
      } : Uint8Array,
      Jb = Tb ? Buffer : Uint8Array,
      gW = Tb ? 4294967296 : 2144337920;
    let Gb, Ob, Rb, vW, iW, Mb = 0,
      Yb = null;
    const Xb = /[\u0080-\uFFFF]/,
      nb = Symbol("record-id");
    class ub extends vb {
      constructor(yb) {
        let bb, Wy, Uy, hy;
        super(yb), this.offset = 0;
        let fy = Jb.prototype.utf8Write ? function(yb, bb) {
            return Gb.utf8Write(yb, bb, Gb.byteLength - bb)
          } : !(!sb || !sb.encodeInto) && function(yb, bb) {
            return sb.encodeInto(yb, Gb.subarray(bb)).written
          },
          Zy = this;
        yb || (yb = {});
        let cb = yb && yb.sequential,
          Py = yb.structures || yb.saveStructures,
          oy = yb.maxSharedStructures;
        if (null == oy && (oy = Py ? 32 : 0), oy > 8160) throw new Error("Maximum maxSharedStructure is 8160");
        yb.structuredClone && void 0 == yb.moreTypes && (this.moreTypes = !0);
        let By = yb.maxOwnStructures;
        null == By && (By = Py ? 32 : 64), this.structures || 0 == yb.useRecords || (this.structures = []);
        let Ky = oy > 32 || By + oy > 64,
          ey = oy + 64,
          qb = oy + By + 64;
        if (qb > 8256) throw new Error("Maximum maxSharedStructure + maxOwnStructure is 8192");
        let sy = [],
          Sy = 0,
          Ey = 0;
        this.pack = this.encode = function(yb, fy) {
          if (Gb || (Gb = new Vb(8192), Rb = Gb.dataView || (Gb.dataView = new DataView(Gb.buffer, 0, 8192)), Mb = 0), vW = Gb.length - 10, vW - Mb < 2048 ? (Gb = new Vb(Gb.length), Rb = Gb.dataView || (Gb.dataView = new DataView(Gb.buffer, 0, Gb.length)), vW = Gb.length - 10, Mb = 0) : Mb = Mb + 7 & 2147483640, bb = Mb, fy & Ab && (Mb += 255 & fy), hy = Zy.structuredClone ? new Map : null, Zy.bundleStrings && "string" !== typeof yb ? (Yb = [], Yb.size = 1 / 0) : Yb = null, Uy = Zy.structures, Uy) {
            Uy.uninitialized && (Uy = Zy._mergeStructures(Zy.getStructures()));
            let yb = Uy.sharedLength || 0;
            if (yb > oy) throw new Error("Shared structures is larger than maximum shared structures, try increasing maxSharedStructures to " + Uy.sharedLength);
            if (!Uy.transitions) {
              Uy.transitions = Object.create(null);
              for (let bb = 0; bb < yb; bb++) {
                let yb = Uy[bb];
                if (!yb) continue;
                let Wy, hy = Uy.transitions;
                for (let bb = 0, Uy = yb.length; bb < Uy; bb++) {
                  let Uy = yb[bb];
                  Wy = hy[Uy], Wy || (Wy = hy[Uy] = Object.create(null)), hy = Wy
                }
                hy[nb] = bb + 64
              }
              this.lastNamedStructuresLength = yb
            }
            cb || (Uy.nextId = yb + 64)
          }
          let Py;
          Wy && (Wy = !1);
          try {
            Zy.randomAccessStructure && yb && yb.constructor && yb.constructor === Object ? vb(yb) : Cy(yb);
            let Wy = Yb;
            if (Yb && Fb(bb, Cy, 0), hy && hy.idsToInsert) {
              let yb = hy.idsToInsert.sort(((yb, bb) => yb.offset > bb.offset ? 1 : -1)),
                Uy = yb.length,
                fy = -1;
              for (; Wy && Uy > 0;) {
                let hy = yb[--Uy].offset + bb;
                hy < Wy.stringsPosition + bb && -1 === fy && (fy = 0), hy > Wy.position + bb ? fy >= 0 && (fy += 6) : (fy >= 0 && (Rb.setUint32(Wy.position + bb, Rb.getUint32(Wy.position + bb) + fy), fy = -1), Wy = Wy.previous, Uy++)
              }
              fy >= 0 && Wy && Rb.setUint32(Wy.position + bb, Rb.getUint32(Wy.position + bb) + fy), Mb += 6 * yb.length, Mb > vW && Gy(Mb), Zy.offset = Mb;
              let cb = function(yb, bb) {
                let Wy, Uy = 6 * bb.length,
                  hy = yb.length - Uy;
                for (; Wy = bb.pop();) {
                  let bb = Wy.offset,
                    fy = Wy.id;
                  yb.copyWithin(bb + Uy, bb, hy), Uy -= 6;
                  let Zy = bb + Uy;
                  yb[Zy++] = 214, yb[Zy++] = 105, yb[Zy++] = fy >> 24, yb[Zy++] = fy >> 16 & 255, yb[Zy++] = fy >> 8 & 255, yb[Zy++] = 255 & fy, hy = bb
                }
                return yb
              }(Gb.subarray(bb, Mb), yb);
              return hy = null, cb
            }
            return Zy.offset = Mb, fy & Ib ? (Gb.start = bb, Gb.end = Mb, Gb) : Gb.subarray(bb, Mb)
          } catch (UW) {
            throw Py = UW, UW
          } finally {
            if (Uy && (ly(), Wy && Zy.saveStructures)) {
              let Wy = Uy.sharedLength || 0,
                hy = Gb.subarray(bb, Mb),
                cb = Lb(Uy, Zy);
              if (!Py) return !1 === Zy.saveStructures(cb, cb.isCompatible) ? Zy.pack(yb, fy) : (Zy.lastNamedStructuresLength = Wy, Gb.length > 1073741824 && (Gb = null), hy)
            }
            Gb.length > 1073741824 && (Gb = null), fy & xW && (Mb = bb)
          }
        };
        const ly = () => {
            Ey < 10 && Ey++;
            let yb = Uy.sharedLength || 0;
            if (Uy.length > yb && !cb && (Uy.length = yb), Sy > 1e4) Uy.transitions = null, Ey = 0, Sy = 0, sy.length > 0 && (sy = []);
            else if (sy.length > 0 && !cb) {
              for (let yb = 0, bb = sy.length; yb < bb; yb++) sy[yb][nb] = 0;
              sy = []
            }
          },
          mb = yb => {
            var bb = yb.length;
            bb < 16 ? Gb[Mb++] = 144 | bb : bb < 65536 ? (Gb[Mb++] = 220, Gb[Mb++] = bb >> 8, Gb[Mb++] = 255 & bb) : (Gb[Mb++] = 221, Rb.setUint32(Mb, bb), Mb += 4);
            for (let Wy = 0; Wy < bb; Wy++) Cy(yb[Wy])
          },
          Cy = yb => {
            Mb > vW && (Gb = Gy(Mb));
            var Wy, Uy = typeof yb;
            if ("string" === Uy) {
              let Uy, hy = yb.length;
              if (Yb && hy >= 4 && hy < 4096) {
                if ((Yb.size += hy) > 21760) {
                  let yb, Wy, Uy = (Yb[0] ? 3 * Yb[0].length + Yb[1].length : 0) + 10;
                  Mb + Uy > vW && (Gb = Gy(Mb + Uy)), Yb.position ? (Wy = Yb, Gb[Mb] = 200, Mb += 3, Gb[Mb++] = 98, yb = Mb - bb, Mb += 4, Fb(bb, Cy, 0), Rb.setUint16(yb + bb - 3, Mb - bb - yb)) : (Gb[Mb++] = 214, Gb[Mb++] = 98, yb = Mb - bb, Mb += 4), Yb = ["", ""], Yb.previous = Wy, Yb.size = 0, Yb.position = yb
                }
                let Wy = Xb.test(yb);
                return Yb[Wy ? 0 : 1] += yb, Gb[Mb++] = 193, void Cy(Wy ? -hy : hy)
              }
              Uy = hy < 32 ? 1 : hy < 256 ? 2 : hy < 65536 ? 3 : 5;
              let Zy = 3 * hy;
              if (Mb + Zy > vW && (Gb = Gy(Mb + Zy)), hy < 64 || !fy) {
                let bb, fy, Zy, cb = Mb + Uy;
                for (bb = 0; bb < hy; bb++) fy = yb.charCodeAt(bb), fy < 128 ? Gb[cb++] = fy : fy < 2048 ? (Gb[cb++] = fy >> 6 | 192, Gb[cb++] = 63 & fy | 128) : 55296 === (64512 & fy) && 56320 === (64512 & (Zy = yb.charCodeAt(bb + 1))) ? (fy = 65536 + ((1023 & fy) << 10) + (1023 & Zy), bb++, Gb[cb++] = fy >> 18 | 240, Gb[cb++] = fy >> 12 & 63 | 128, Gb[cb++] = fy >> 6 & 63 | 128, Gb[cb++] = 63 & fy | 128) : (Gb[cb++] = fy >> 12 | 224, Gb[cb++] = fy >> 6 & 63 | 128, Gb[cb++] = 63 & fy | 128);
                Wy = cb - Mb - Uy
              } else Wy = fy(yb, Mb + Uy);
              Wy < 32 ? Gb[Mb++] = 160 | Wy : Wy < 256 ? (Uy < 2 && Gb.copyWithin(Mb + 2, Mb + 1, Mb + 1 + Wy), Gb[Mb++] = 217, Gb[Mb++] = Wy) : Wy < 65536 ? (Uy < 3 && Gb.copyWithin(Mb + 3, Mb + 2, Mb + 2 + Wy), Gb[Mb++] = 218, Gb[Mb++] = Wy >> 8, Gb[Mb++] = 255 & Wy) : (Uy < 5 && Gb.copyWithin(Mb + 5, Mb + 3, Mb + 3 + Wy), Gb[Mb++] = 219, Rb.setUint32(Mb, Wy), Mb += 4), Mb += Wy
            } else if ("number" === Uy)
              if (yb >>> 0 === yb) yb < 32 || yb < 128 && !1 === this.useRecords || yb < 64 && !this.randomAccessStructure ? Gb[Mb++] = yb : yb < 256 ? (Gb[Mb++] = 204, Gb[Mb++] = yb) : yb < 65536 ? (Gb[Mb++] = 205, Gb[Mb++] = yb >> 8, Gb[Mb++] = 255 & yb) : (Gb[Mb++] = 206, Rb.setUint32(Mb, yb), Mb += 4);
              else if ((yb | 0) === yb) yb >= -32 ? Gb[Mb++] = 256 + yb : yb >= -128 ? (Gb[Mb++] = 208, Gb[Mb++] = yb + 256) : yb >= -32768 ? (Gb[Mb++] = 209, Rb.setInt16(Mb, yb), Mb += 2) : (Gb[Mb++] = 210, Rb.setInt32(Mb, yb), Mb += 4);
            else {
              let bb;
              if ((bb = this.useFloat32) > 0 && yb < 4294967296 && yb >= -2147483648) {
                let Wy;
                if (Gb[Mb++] = 202, Rb.setFloat32(Mb, yb), bb < 4 || ((Wy = yb * cW[(127 & Gb[Mb]) << 1 | Gb[Mb + 1] >> 7]) | 0) === Wy) return void(Mb += 4);
                Mb--
              }
              Gb[Mb++] = 203, Rb.setFloat64(Mb, yb), Mb += 8
            } else if ("object" === Uy || "function" === Uy)
              if (yb) {
                if (hy) {
                  let Wy = hy.get(yb);
                  if (Wy) {
                    if (!Wy.id) {
                      let yb = hy.idsToInsert || (hy.idsToInsert = []);
                      Wy.id = yb.push(Wy)
                    }
                    return Gb[Mb++] = 214, Gb[Mb++] = 112, Rb.setUint32(Mb, Wy.id), void(Mb += 4)
                  }
                  hy.set(yb, {
                    offset: Mb - bb
                  })
                }
                let fy = yb.constructor;
                if (fy === Object) gb(yb);
                else if (fy === Array) mb(yb);
                else if (fy === Map)
                  if (this.mapAsEmptyObject) Gb[Mb++] = 128;
                  else {
                    (Wy = yb.size) < 16 ? Gb[Mb++] = 128 | Wy : Wy < 65536 ? (Gb[Mb++] = 222, Gb[Mb++] = Wy >> 8, Gb[Mb++] = 255 & Wy) : (Gb[Mb++] = 223, Rb.setUint32(Mb, Wy), Mb += 4);
                    for (let [bb, Wy] of yb) Cy(bb), Cy(Wy)
                  }
                else {
                  for (let bb = 0, Wy = Sb.length; bb < Wy; bb++) {
                    if (yb instanceof Eb[bb]) {
                      let Wy = Sb[bb];
                      if (Wy.write) {
                        Wy.type && (Gb[Mb++] = 212, Gb[Mb++] = Wy.type, Gb[Mb++] = 0);
                        let bb = Wy.write.call(this, yb);
                        return void(bb === yb ? Array.isArray(yb) ? mb(yb) : gb(yb) : Cy(bb))
                      }
                      let Uy, hy = Gb,
                        fy = Rb,
                        Zy = Mb;
                      Gb = null;
                      try {
                        Uy = Wy.pack.call(this, yb, (yb => (Gb = hy, hy = null, Mb += yb, Mb > vW && Gy(Mb), {
                          target: Gb,
                          targetView: Rb,
                          position: Mb - yb
                        })), Cy)
                      } finally {
                        hy && (Gb = hy, Rb = fy, Mb = Zy, vW = Gb.length - 10)
                      }
                      return void(Uy && (Uy.length + Mb > vW && Gy(Uy.length + Mb), Mb = aW(Uy, Gb, Mb, Wy.type)))
                    }
                  }
                  if (Array.isArray(yb)) mb(yb);
                  else {
                    if (yb.toJSON) {
                      const bb = yb.toJSON();
                      if (bb !== yb) return Cy(bb)
                    }
                    if ("function" === Uy) return Cy(this.writeFunction && this.writeFunction(yb));
                    gb(yb)
                  }
                }
              } else Gb[Mb++] = 192;
            else if ("boolean" === Uy) Gb[Mb++] = yb ? 195 : 194;
            else if ("bigint" === Uy) {
              if (yb < BigInt(1) << BigInt(63) && yb >= -(BigInt(1) << BigInt(63))) Gb[Mb++] = 211, Rb.setBigInt64(Mb, yb);
              else if (yb < BigInt(1) << BigInt(64) && yb > 0) Gb[Mb++] = 207, Rb.setBigUint64(Mb, yb);
              else {
                if (!this.largeBigIntToFloat) {
                  if (this.largeBigIntToString) return Cy(yb.toString());
                  if (this.useBigIntExtension && yb < BigInt(2) ** BigInt(1023) && yb > -(BigInt(2) ** BigInt(1023))) {
                    Gb[Mb++] = 199, Mb++, Gb[Mb++] = 66;
                    let bb, Wy = [];
                    do {
                      let Uy = yb & BigInt(255);
                      bb = (Uy & BigInt(128)) === (yb < BigInt(0) ? BigInt(128) : BigInt(0)), Wy.push(Uy), yb >>= BigInt(8)
                    } while (yb !== BigInt(0) && yb !== BigInt(-1) || !bb);
                    Gb[Mb - 2] = Wy.length;
                    for (let yb = Wy.length; yb > 0;) Gb[Mb++] = Number(Wy[--yb]);
                    return
                  }
                  throw new RangeError(yb + " was too large to fit in MessagePack 64-bit integer format, use useBigIntExtension, or set largeBigIntToFloat to convert to float-64, or set largeBigIntToString to convert to string")
                }
                Gb[Mb++] = 203, Rb.setFloat64(Mb, Number(yb))
              }
              Mb += 8
            } else {
              if ("undefined" !== Uy) throw new Error("Unknown type: " + Uy);
              this.encodeUndefinedAsNil ? Gb[Mb++] = 192 : (Gb[Mb++] = 212, Gb[Mb++] = 0, Gb[Mb++] = 0)
            }
          },
          Ty = this.variableMapSize || this.coercibleKeyAsNumber || this.skipValues ? yb => {
            let bb;
            if (this.skipValues) {
              bb = [];
              for (let Wy in yb) "function" === typeof yb.hasOwnProperty && !yb.hasOwnProperty(Wy) || this.skipValues.includes(yb[Wy]) || bb.push(Wy)
            } else bb = Object.keys(yb);
            let Wy, Uy = bb.length;
            if (Uy < 16 ? Gb[Mb++] = 128 | Uy : Uy < 65536 ? (Gb[Mb++] = 222, Gb[Mb++] = Uy >> 8, Gb[Mb++] = 255 & Uy) : (Gb[Mb++] = 223, Rb.setUint32(Mb, Uy), Mb += 4), this.coercibleKeyAsNumber)
              for (let hy = 0; hy < Uy; hy++) {
                Wy = bb[hy];
                let Uy = Number(Wy);
                Cy(isNaN(Uy) ? Wy : Uy), Cy(yb[Wy])
              } else
                for (let hy = 0; hy < Uy; hy++) Cy(Wy = bb[hy]), Cy(yb[Wy])
          } : yb => {
            Gb[Mb++] = 222;
            let Wy = Mb - bb;
            Mb += 2;
            let Uy = 0;
            for (let bb in yb)("function" !== typeof yb.hasOwnProperty || yb.hasOwnProperty(bb)) && (Cy(bb), Cy(yb[bb]), Uy++);
            if (Uy > 65535) throw new Error('Object is too large to serialize with fast 16-bit map size, use the "variableMapSize" option to serialize this object');
            Gb[Wy++ + bb] = Uy >> 8, Gb[Wy + bb] = 255 & Uy
          },
          Vy = !1 === this.useRecords ? Ty : yb.progressiveRecords && !Ky ? yb => {
            let Wy, hy, fy = Uy.transitions || (Uy.transitions = Object.create(null)),
              Zy = Mb++ - bb;
            for (let cb in yb)
              if ("function" !== typeof yb.hasOwnProperty || yb.hasOwnProperty(cb)) {
                if (Wy = fy[cb], Wy) fy = Wy;
                else {
                  let Py = Object.keys(yb),
                    oy = fy;
                  fy = Uy.transitions;
                  let By = 0;
                  for (let yb = 0, bb = Py.length; yb < bb; yb++) {
                    let bb = Py[yb];
                    Wy = fy[bb], Wy || (Wy = fy[bb] = Object.create(null), By++), fy = Wy
                  }
                  Zy + bb + 1 == Mb ? (Mb--, Oy(fy, Py, By)) : Ry(fy, Py, Zy, By), hy = !0, fy = oy[cb]
                }
                Cy(yb[cb])
              } if (!hy) {
              let Wy = fy[nb];
              Wy ? Gb[Zy + bb] = Wy : Ry(fy, Object.keys(yb), Zy, 0)
            }
          } : yb => {
            let bb, Wy = Uy.transitions || (Uy.transitions = Object.create(null)),
              hy = 0;
            for (let Uy in yb)("function" !== typeof yb.hasOwnProperty || yb.hasOwnProperty(Uy)) && (bb = Wy[Uy], bb || (bb = Wy[Uy] = Object.create(null), hy++), Wy = bb);
            let fy = Wy[nb];
            fy ? fy >= 96 && Ky ? (Gb[Mb++] = 96 + (31 & (fy -= 96)), Gb[Mb++] = fy >> 5) : Gb[Mb++] = fy : Oy(Wy, Wy.__keys__ || Object.keys(yb), hy);
            for (let Uy in yb)("function" !== typeof yb.hasOwnProperty || yb.hasOwnProperty(Uy)) && Cy(yb[Uy])
          },
          Jy = "function" == typeof this.useRecords && this.useRecords,
          gb = Jy ? yb => {
            Jy(yb) ? Vy(yb) : Ty(yb)
          } : Vy,
          Gy = yb => {
            let Wy;
            if (yb > 16777216) {
              if (yb - bb > gW) throw new Error("Packed buffer would be larger than maximum buffer size");
              Wy = Math.min(gW, 4096 * Math.round(Math.max((yb - bb) * (yb > 67108864 ? 1.25 : 2), 4194304) / 4096))
            } else Wy = 1 + (Math.max(yb - bb << 2, Gb.length - 1) >> 12) << 12;
            let Uy = new Vb(Wy);
            return Rb = Uy.dataView || (Uy.dataView = new DataView(Uy.buffer, 0, Wy)), yb = Math.min(yb, Gb.length), Gb.copy ? Gb.copy(Uy, 0, bb, yb) : Uy.set(Gb.slice(bb, yb)), Mb -= bb, bb = 0, vW = Uy.length - 10, Gb = Uy
          },
          Oy = (yb, bb, hy) => {
            let fy = Uy.nextId;
            fy || (fy = 64), fy < ey && this.shouldShareStructure && !this.shouldShareStructure(bb) ? (fy = Uy.nextOwnId, fy < qb || (fy = ey), Uy.nextOwnId = fy + 1) : (fy >= qb && (fy = ey), Uy.nextId = fy + 1);
            let Zy = bb.highByte = fy >= 96 && Ky ? fy - 96 >> 5 : -1;
            yb[nb] = fy, yb.__keys__ = bb, Uy[fy - 64] = bb, fy < ey ? (bb.isShared = !0, Uy.sharedLength = fy - 63, Wy = !0, Zy >= 0 ? (Gb[Mb++] = 96 + (31 & fy), Gb[Mb++] = Zy) : Gb[Mb++] = fy) : (Zy >= 0 ? (Gb[Mb++] = 213, Gb[Mb++] = 114, Gb[Mb++] = 96 + (31 & fy), Gb[Mb++] = Zy) : (Gb[Mb++] = 212, Gb[Mb++] = 114, Gb[Mb++] = fy), hy && (Sy += Ey * hy), sy.length >= By && (sy.shift()[nb] = 0), sy.push(yb), Cy(bb))
          },
          Ry = (yb, Wy, Uy, hy) => {
            let fy = Gb,
              Zy = Mb,
              cb = vW,
              Py = bb;
            Gb = Ob, Mb = 0, bb = 0, Gb || (Ob = Gb = new Vb(8192)), vW = Gb.length - 10, Oy(yb, Wy, hy), Ob = Gb;
            let oy = Mb;
            if (Gb = fy, Mb = Zy, vW = cb, bb = Py, oy > 1) {
              let yb = Mb + oy - 1;
              yb > vW && Gy(yb);
              let Wy = Uy + bb;
              Gb.copyWithin(Wy + oy, Wy + 1, Mb), Gb.set(Ob.slice(0, oy), Wy), Mb = yb
            } else Gb[Uy + bb] = Ob[0]
          },
          vb = yb => {
            let hy = iW(yb, Gb, bb, Mb, Uy, Gy, ((yb, bb, Uy) => {
              if (Uy) return Wy = !0;
              Mb = bb;
              let hy = Gb;
              return Cy(yb), ly(), hy !== Gb ? {
                position: Mb,
                targetView: Rb,
                target: Gb
              } : Mb
            }), this);
            if (0 === hy) return gb(yb);
            Mb = hy
          }
      }
      useBuffer(yb) {
        Gb = yb, Rb = Gb.dataView || (Gb.dataView = new DataView(Gb.buffer, Gb.byteOffset, Gb.byteLength)), Mb = 0
      }
      set position(yb) {
        Mb = yb
      }
      get position() {
        return Mb
      }
      set buffer(yb) {
        Gb = yb
      }
      get buffer() {
        return Gb
      }
      clearSharedData() {
        this.structures && (this.structures = []), this.typedStructs && (this.typedStructs = [])
      }
    }

    function rW(yb, bb, Wy, Uy) {
      let hy = yb.byteLength;
      if (hy + 1 < 256) {
        var {
          target: fy,
          position: Zy
        } = Wy(4 + hy);
        fy[Zy++] = 199, fy[Zy++] = hy + 1
      } else if (hy + 1 < 65536) {
        var {
          target: fy,
          position: Zy
        } = Wy(5 + hy);
        fy[Zy++] = 200, fy[Zy++] = hy + 1 >> 8, fy[Zy++] = hy + 1 & 255
      } else {
        var {
          target: fy,
          position: Zy,
          targetView: cb
        } = Wy(7 + hy);
        fy[Zy++] = 201, cb.setUint32(Zy, hy + 1), Zy += 4
      }
      fy[Zy++] = 116, fy[Zy++] = bb, yb.buffer || (yb = new Uint8Array(yb)), fy.set(new Uint8Array(yb.buffer, yb.byteOffset, yb.byteLength), Zy)
    }

    function Hb(yb, bb) {
      let Wy = yb.byteLength;
      var Uy, hy;
      if (Wy < 256) {
        var {
          target: Uy,
          position: hy
        } = bb(Wy + 2);
        Uy[hy++] = 196, Uy[hy++] = Wy
      } else if (Wy < 65536) {
        var {
          target: Uy,
          position: hy
        } = bb(Wy + 3);
        Uy[hy++] = 197, Uy[hy++] = Wy >> 8, Uy[hy++] = 255 & Wy
      } else {
        var {
          target: Uy,
          position: hy,
          targetView: fy
        } = bb(Wy + 5);
        Uy[hy++] = 198, fy.setUint32(hy, Wy), hy += 4
      }
      Uy.set(yb, hy)
    }

    function aW(yb, bb, Wy, Uy) {
      let hy = yb.length;
      switch (hy) {
        case 1:
          bb[Wy++] = 212;
          break;
        case 2:
          bb[Wy++] = 213;
          break;
        case 4:
          bb[Wy++] = 214;
          break;
        case 8:
          bb[Wy++] = 215;
          break;
        case 16:
          bb[Wy++] = 216;
          break;
        default:
          hy < 256 ? (bb[Wy++] = 199, bb[Wy++] = hy) : hy < 65536 ? (bb[Wy++] = 200, bb[Wy++] = hy >> 8, bb[Wy++] = 255 & hy) : (bb[Wy++] = 201, bb[Wy++] = hy >> 24, bb[Wy++] = hy >> 16 & 255, bb[Wy++] = hy >> 8 & 255, bb[Wy++] = 255 & hy)
      }
      return bb[Wy++] = Uy, bb.set(yb, Wy), Wy += hy
    }

    function Fb(yb, bb, Wy) {
      if (Yb.length > 0) {
        Rb.setUint32(Yb.position + yb, Mb + Wy - Yb.position - yb), Yb.stringsPosition = Mb - yb;
        let Uy = Yb;
        Yb = null, bb(Uy[0]), bb(Uy[1])
      }
    }

    function pb(yb) {
      if (yb.Class) {
        if (!yb.pack && !yb.write) throw new Error("Extension has no pack or write function");
        if (yb.pack && !yb.type) throw new Error("Extension has no type (numeric code to identify the extension)");
        Eb.unshift(yb.Class), Sb.unshift(yb)
      }! function(yb) {
        yb.unpack ? mb[yb.type] = yb.unpack : mb[yb.type] = yb
      }(yb)
    }

    function Lb(yb, bb) {
      return yb.isCompatible = yb => {
        let Wy = !yb || (bb.lastNamedStructuresLength || 0) === yb.length;
        return Wy || bb._mergeStructures(yb), Wy
      }, yb
    }
    Eb = [Date, Set, Error, RegExp, ArrayBuffer, Object.getPrototypeOf(Uint8Array.prototype).constructor, Ty], Sb = [{
      pack(yb, bb, Wy) {
        let Uy = yb.getTime() / 1e3;
        if ((this.useTimestamp32 || 0 === yb.getMilliseconds()) && Uy >= 0 && Uy < 4294967296) {
          let {
            target: yb,
            targetView: Wy,
            position: hy
          } = bb(6);
          yb[hy++] = 214, yb[hy++] = 255, Wy.setUint32(hy, Uy)
        } else if (Uy > 0 && Uy < 4294967296) {
          let {
            target: Wy,
            targetView: hy,
            position: fy
          } = bb(10);
          Wy[fy++] = 215, Wy[fy++] = 255, hy.setUint32(fy, 4e6 * yb.getMilliseconds() + (Uy / 1e3 / 4294967296 | 0)), hy.setUint32(fy + 4, Uy)
        } else if (isNaN(Uy)) {
          if (this.onInvalidDate) return bb(0), Wy(this.onInvalidDate());
          let {
            target: yb,
            targetView: Uy,
            position: hy
          } = bb(3);
          yb[hy++] = 212, yb[hy++] = 255, yb[hy++] = 255
        } else {
          let {
            target: Wy,
            targetView: hy,
            position: fy
          } = bb(15);
          Wy[fy++] = 199, Wy[fy++] = 12, Wy[fy++] = 255, hy.setUint32(fy, 1e6 * yb.getMilliseconds()), hy.setBigInt64(fy + 4, BigInt(Math.floor(Uy)))
        }
      }
    }, {
      pack(yb, bb, Wy) {
        if (this.setAsEmptyObject) return bb(0), Wy({});
        let Uy = Array.from(yb),
          {
            target: hy,
            position: fy
          } = bb(this.moreTypes ? 3 : 0);
        this.moreTypes && (hy[fy++] = 212, hy[fy++] = 115, hy[fy++] = 0), Wy(Uy)
      }
    }, {
      pack(yb, bb, Wy) {
        let {
          target: Uy,
          position: hy
        } = bb(this.moreTypes ? 3 : 0);
        this.moreTypes && (Uy[hy++] = 212, Uy[hy++] = 101, Uy[hy++] = 0), Wy([yb.name, yb.message, yb.cause])
      }
    }, {
      pack(yb, bb, Wy) {
        let {
          target: Uy,
          position: hy
        } = bb(this.moreTypes ? 3 : 0);
        this.moreTypes && (Uy[hy++] = 212, Uy[hy++] = 120, Uy[hy++] = 0), Wy([yb.source, yb.flags])
      }
    }, {
      pack(yb, bb) {
        this.moreTypes ? rW(yb, 16, bb) : Hb(Tb ? Buffer.from(yb) : new Uint8Array(yb), bb)
      }
    }, {
      pack(yb, bb) {
        let Wy = yb.constructor;
        Wy !== Jb && this.moreTypes ? rW(yb, Wb.indexOf(Wy.name), bb) : Hb(yb, bb)
      }
    }, {
      pack(yb, bb) {
        let {
          target: Wy,
          position: Uy
        } = bb(1);
        Wy[Uy] = 193
      }
    }];
    let Qb = new ub({
      useRecords: !1
    });
    const jW = Qb.pack,
      Db = Qb.pack,
      tW = ub,
      {
        NEVER: wb,
        ALWAYS: kW,
        DECIMAL_ROUND: Nb,
        DECIMAL_FIT: zW
      } = qW,
      Ib = 512,
      xW = 1024,
      Ab = 2048;
    const db = function(yb) {
        let bb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        if (!yb || "object" !== typeof yb) throw new Error("first argument must be an Iterable, Async Iterable, Iterator, Async Iterator, or a promise");
        const Wy = new vb(bb);
        let Uy;
        const hy = yb => {
          let bb;
          Uy && (yb = Buffer.concat([Uy, yb]), Uy = void 0);
          try {
            bb = Wy.unpackMultiple(yb)
          } catch (hy) {
            if (!hy.incomplete) throw hy;
            Uy = yb.slice(hy.lastPosition), bb = hy.values
          }
          return bb
        };
        return "function" === typeof yb[Symbol.iterator] ? function*() {
          for (const bb of yb) yield* hy(bb)
        }() : "function" === typeof yb[Symbol.asyncIterator] ? async function*() {
          for await (const bb of yb) yield* hy(bb)
        }(): void 0
      },
      yU = function(yb) {
        let bb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        if (yb && "object" === typeof yb) {
          if ("function" === typeof yb[Symbol.iterator]) return function*(yb, bb) {
            const Wy = new ub(bb);
            for (const Uy of yb) yield Wy.pack(Uy)
          }(yb, bb);
          if ("function" === typeof yb.then || "function" === typeof yb[Symbol.asyncIterator]) return async function*(yb, bb) {
            const Wy = new ub(bb);
            for await (const Uy of yb) yield Wy.pack(Uy)
          }(yb, bb);
          throw new Error("first argument must be an Iterable, Async Iterable, Iterator, Async Iterator, or a Promise")
        }
        throw new Error("first argument must be an Iterable, Async Iterable, or a Promise for an Async Iterable")
      },
      bU = !1,
      WW = !0
  },
  8241: (yb, bb, Wy) => {
    Wy.r(bb), Wy.d(bb, {
      $changes: () => Sy,
      $childType: () => Ey,
      $decoder: () => By,
      $deleteByIndex: () => qb,
      $encoder: () => oy,
      $filter: () => Ky,
      $getByIndex: () => ey,
      $numFields: () => Ry,
      $refId: () => cb,
      $track: () => Py,
      $values: () => Vy,
      ArraySchema: () => WU,
      Callbacks: () => Wh,
      ChangeTree: () => MW,
      CollectionSchema: () => fU,
      Decoder: () => NU,
      Encoder: () => DU,
      FieldBuilder: () => PU,
      MapSchema: () => hU,
      Metadata: () => Nb,
      OPERATION: () => hy,
      Reflection: () => AU,
      ReflectionField: () => IU,
      ReflectionType: () => xh,
      Root: () => YU,
      Schema: () => ih,
      SetSchema: () => ZU,
      StateCallbackStrategy: () => bf,
      StateView: () => HU,
      StreamSchema: () => ch,
      TypeContext: () => Lb,
      createPool: () => hh,
      decode: () => Cb,
      decodeKeyValueOperation: () => IW,
      decodeSchemaOperation: () => zU,
      defineCustomTypes: () => gW,
      defineTypes: () => OU,
      deprecated: () => gh,
      dumpChanges: () => vh,
      encode: () => bW,
      encodeArray: () => FW,
      encodeIndexedEntry: () => HW,
      encodeKeyValueOperation: () => aU,
      encodeMapEntry: () => rU,
      encodeSchemaOperation: () => uW,
      GU: () => SU,
      fullStateOnly: () => CU,
      getDecoderStateCallbacks: () => dU,
      getEncodeDescriptor: () => yU,
      getRawChangesCallback: () => yf,
      isBuilder: () => oU,
      patchOnly: () => mh,
      registerType: () => Jb,
      schema: () => RU,
      t: () => qh,
      type: () => TU,
      unreliable: () => lU,
      view: () => EU
    });
    const Uy = 255;
    var hy;

    function fy(yb) {
      Object.defineProperty(yb, Symbol.metadata, {
        value: void 0,
        writable: !0,
        configurable: !0,
        enumerable: !1
      })
    }! function(yb) {
      yb[yb.ADD = 128] = "ADD", yb[yb.REPLACE = 0] = "REPLACE", yb[yb.DELETE = 64] = "DELETE", yb[yb.DELETE_AND_MOVE = 96] = "DELETE_AND_MOVE", yb[yb.MOVE_AND_ADD = 160] = "MOVE_AND_ADD", yb[yb.DELETE_AND_ADD = 192] = "DELETE_AND_ADD", yb[yb.CLEAR = 10] = "CLEAR", yb[yb.REVERSE = 15] = "REVERSE", yb[yb.MOVE = 32] = "MOVE", yb[yb.DELETE_BY_REFID = 33] = "DELETE_BY_REFID", yb[yb.ADD_BY_REFID = 129] = "ADD_BY_REFID"
    }(hy || (hy = {})), Symbol.metadata ??= Symbol.for("Symbol.metadata");
    const Zy = "undefined" !== typeof globalThis ? globalThis : "undefined" !== typeof global ? global : "undefined" !== typeof self ? self : "undefined" !== typeof window ? window : {};
    if ("function" === typeof Symbol && "function" !== typeof Symbol.for) {
      const yb = "colyseus.symbolRegistry",
        bb = Zy[yb] || (Zy[yb] = Object.create(null));
      Symbol.for = function(yb) {
        return bb[yb] || (bb[yb] = Symbol(yb))
      }, Symbol.keyFor = function(yb) {
        for (const Wy in bb)
          if (bb[Wy] === yb) return Wy
      }
    }
    const cb = Symbol.for("$refId"),
      Py = "~track",
      oy = "~encoder",
      By = "~decoder",
      Ky = "~filter",
      ey = "~getByIndex",
      qb = "~deleteByIndex",
      sy = "~resyncPrune",
      Sy = Symbol.for("$changes"),
      Ey = Symbol.for("$childType"),
      ly = Symbol.for("$proxyTarget"),
      mb = "~onEncodeEnd",
      Cy = "~reset",
      Ty = "~onDecodeEnd",
      Vy = Symbol.for("$values"),
      Jy = "~builder",
      gb = "~descriptors",
      Gy = "~__encodeDescriptor",
      Oy = "~encoders",
      Ry = "~__numFields",
      vb = "~__refTypeFieldIndexes",
      ib = "~__viewFieldIndexes",
      My = "$__fieldIndexesByViewTag",
      Yy = "~__unreliableFieldIndexes",
      Xy = "~__patchOnlyFieldIndexes",
      ny = "~__fullSyncSkipIndexes",
      uy = "~__fullStateOnlyFieldIndexes",
      rb = "~__streamFieldIndexes",
      Hy = "~__streamPriorities";
    let ab;
    try {
      ab = new TextEncoder
    } catch (fh) {}
    const Fy = new ArrayBuffer(8),
      py = new Int32Array(Fy),
      Ly = new Float32Array(Fy),
      Qy = new Float64Array(Fy),
      jb = new BigInt64Array(Fy),
      Dy = "undefined" !== typeof Buffer && Buffer.byteLength ? Buffer.byteLength : function(yb, bb) {
        for (var Wy = 0, Uy = 0, hy = 0, fy = yb.length; hy < fy; hy++)(Wy = yb.charCodeAt(hy)) < 128 ? Uy += 1 : Wy < 2048 ? Uy += 2 : Wy < 55296 || Wy >= 57344 ? Uy += 3 : (hy++, Uy += 4);
        return Uy
      };

    function tb(yb, bb, Wy) {
      for (var Uy = 0, hy = 0, fy = bb.length; hy < fy; hy++)(Uy = bb.charCodeAt(hy)) < 128 ? yb[Wy.offset++] = Uy : Uy < 2048 ? (yb[Wy.offset] = 192 | Uy >> 6, yb[Wy.offset + 1] = 128 | 63 & Uy, Wy.offset += 2) : Uy < 55296 || Uy >= 57344 ? (yb[Wy.offset] = 224 | Uy >> 12, yb[Wy.offset + 1] = 128 | Uy >> 6 & 63, yb[Wy.offset + 2] = 128 | 63 & Uy, Wy.offset += 3) : (hy++, Uy = 65536 + ((1023 & Uy) << 10 | 1023 & bb.charCodeAt(hy)), yb[Wy.offset] = 240 | Uy >> 18, yb[Wy.offset + 1] = 128 | Uy >> 12 & 63, yb[Wy.offset + 2] = 128 | Uy >> 6 & 63, yb[Wy.offset + 3] = 128 | 63 & Uy, Wy.offset += 4)
    }

    function wy(yb, bb, Wy) {
      yb[Wy.offset++] = 255 & bb
    }

    function kb(yb, bb, Wy) {
      yb[Wy.offset++] = 255 & bb, yb[Wy.offset++] = bb >> 8 & 255
    }

    function Ny(yb, bb, Wy) {
      yb[Wy.offset++] = 255 & bb, yb[Wy.offset++] = bb >> 8 & 255
    }

    function zb(yb, bb, Wy) {
      yb[Wy.offset++] = 255 & bb, yb[Wy.offset++] = bb >> 8 & 255, yb[Wy.offset++] = bb >> 16 & 255, yb[Wy.offset++] = bb >> 24 & 255
    }

    function Iy(yb, bb, Wy) {
      const Uy = bb >> 24,
        hy = bb >> 16,
        fy = bb >> 8,
        Zy = bb;
      yb[Wy.offset++] = 255 & Zy, yb[Wy.offset++] = 255 & fy, yb[Wy.offset++] = 255 & hy, yb[Wy.offset++] = 255 & Uy
    }

    function xb(yb, bb, Wy) {
      const Uy = Math.floor(bb / Math.pow(2, 32));
      Iy(yb, bb >>> 0, Wy), Iy(yb, Uy, Wy)
    }

    function Ay(yb, bb, Wy) {
      const Uy = bb / Math.pow(2, 32) | 0;
      Iy(yb, bb >>> 0, Wy), Iy(yb, Uy, Wy)
    }

    function dy(yb, bb, Wy) {
      Ly[0] = bb, zb(yb, py[0], Wy)
    }

    function yW(yb, bb, Wy) {
      Qy[0] = bb, zb(yb, py[0], Wy), zb(yb, py[1], Wy)
    }
    const bW = {
        int8: wy,
        uint8: function(yb, bb, Wy) {
          yb[Wy.offset++] = 255 & bb
        },
        int16: kb,
        uint16: Ny,
        int32: zb,
        uint32: Iy,
        int64: xb,
        uint64: Ay,
        bigint64: function(yb, bb, Wy) {
          jb[0] = BigInt.asIntN(64, bb), zb(yb, py[0], Wy), zb(yb, py[1], Wy)
        },
        biguint64: function(yb, bb, Wy) {
          jb[0] = BigInt.asIntN(64, bb), zb(yb, py[0], Wy), zb(yb, py[1], Wy)
        },
        float32: dy,
        float64: yW,
        boolean: function(yb, bb, Wy) {
          yb[Wy.offset++] = bb ? 1 : 0
        },
        string: function(yb, bb, Wy) {
          bb || (bb = "");
          let Uy = Dy(bb, "utf8"),
            hy = 0;
          if (Uy < 32) yb[Wy.offset++] = 160 | Uy, hy = 1;
          else if (Uy < 256) yb[Wy.offset++] = 217, yb[Wy.offset++] = Uy, hy = 2;
          else if (Uy < 65536) yb[Wy.offset++] = 218, Ny(yb, Uy, Wy), hy = 3;
          else {
            if (!(Uy < 4294967296)) throw new Error("String too long");
            yb[Wy.offset++] = 219, Iy(yb, Uy, Wy), hy = 5
          }
          return tb(yb, bb, Wy), hy + Uy
        },
        number: function yb(bb, Wy, Uy) {
          return isNaN(Wy) ? yb(bb, 0, Uy) : isFinite(Wy) ? Wy !== (0 | Wy) ? Math.abs(Wy) <= 34028235e31 && (Ly[0] = Wy, Math.abs(Math.abs(Ly[0]) - Math.abs(Wy)) < 1e-4) ? (bb[Uy.offset++] = 202, dy(bb, Wy, Uy), 5) : (bb[Uy.offset++] = 203, yW(bb, Wy, Uy), 9) : Wy >= 0 ? Wy < 128 ? (bb[Uy.offset++] = 255 & Wy, 1) : Wy < 256 ? (bb[Uy.offset++] = 204, bb[Uy.offset++] = 255 & Wy, 2) : Wy < 65536 ? (bb[Uy.offset++] = 205, Ny(bb, Wy, Uy), 3) : Wy < 4294967296 ? (bb[Uy.offset++] = 206, Iy(bb, Wy, Uy), 5) : (bb[Uy.offset++] = 207, Ay(bb, Wy, Uy), 9) : Wy >= -32 ? (bb[Uy.offset++] = 224 | Wy + 32, 1) : Wy >= -128 ? (bb[Uy.offset++] = 208, wy(bb, Wy, Uy), 2) : Wy >= -32768 ? (bb[Uy.offset++] = 209, kb(bb, Wy, Uy), 3) : Wy >= -2147483648 ? (bb[Uy.offset++] = 210, zb(bb, Wy, Uy), 5) : (bb[Uy.offset++] = 211, xb(bb, Wy, Uy), 9) : yb(bb, Wy > 0 ? Number.MAX_SAFE_INTEGER : -Number.MAX_SAFE_INTEGER, Uy)
        },
        utf8Write: tb,
        utf8Length: Dy
      },
      Wb = new ArrayBuffer(8),
      Ub = new Int32Array(Wb),
      hb = new Float32Array(Wb),
      fb = new Float64Array(Wb),
      Zb = new BigUint64Array(Wb),
      cW = new BigInt64Array(Wb);

    function Pb(yb, bb, Wy) {
      Wy > yb.length - bb.offset && (Wy = yb.length - bb.offset);
      for (var Uy = "", hy = 0, fy = bb.offset, Zy = bb.offset + Wy; fy < Zy; fy++) {
        var cb = yb[fy];
        if (0 !== (128 & cb))
          if (192 !== (224 & cb))
            if (224 !== (240 & cb)) {
              if (240 !== (248 & cb)) {
                console.error("decode.utf8Read(): Invalid byte " + cb + " at offset " + fy + ". Skip to end of string: " + (bb.offset + Wy));
                break
              }(hy = (7 & cb) << 18 | (63 & yb[++fy]) << 12 | (63 & yb[++fy]) << 6 | 63 & yb[++fy]) >= 65536 ? (hy -= 65536, Uy += String.fromCharCode(55296 + (hy >>> 10), 56320 + (1023 & hy))) : Uy += String.fromCharCode(hy)
            } else Uy += String.fromCharCode((15 & cb) << 12 | (63 & yb[++fy]) << 6 | 63 & yb[++fy]);
        else Uy += String.fromCharCode((31 & cb) << 6 | 63 & yb[++fy]);
        else Uy += String.fromCharCode(cb)
      }
      return bb.offset += Wy, Uy
    }

    function ob(yb, bb) {
      return Bb(yb, bb) << 24 >> 24
    }

    function Bb(yb, bb) {
      return yb[bb.offset++]
    }

    function Kb(yb, bb) {
      return eb(yb, bb) << 16 >> 16
    }

    function eb(yb, bb) {
      return yb[bb.offset++] | yb[bb.offset++] << 8
    }

    function qW(yb, bb) {
      return yb[bb.offset++] | yb[bb.offset++] << 8 | yb[bb.offset++] << 16 | yb[bb.offset++] << 24
    }

    function sb(yb, bb) {
      return qW(yb, bb) >>> 0
    }

    function Sb(yb, bb) {
      return Ub[0] = qW(yb, bb), hb[0]
    }

    function Eb(yb, bb) {
      return Ub[0] = qW(yb, bb), Ub[1] = qW(yb, bb), fb[0]
    }

    function lb(yb, bb) {
      const Wy = sb(yb, bb);
      return qW(yb, bb) * Math.pow(2, 32) + Wy
    }

    function mW(yb, bb) {
      const Wy = sb(yb, bb);
      return sb(yb, bb) * Math.pow(2, 32) + Wy
    }
    const Cb = {
        utf8Read: Pb,
        int8: ob,
        uint8: Bb,
        int16: Kb,
        uint16: eb,
        int32: qW,
        uint32: sb,
        float32: Sb,
        float64: Eb,
        int64: lb,
        uint64: mW,
        bigint64: function(yb, bb) {
          return Ub[0] = qW(yb, bb), Ub[1] = qW(yb, bb), cW[0]
        },
        biguint64: function(yb, bb) {
          return Ub[0] = qW(yb, bb), Ub[1] = qW(yb, bb), Zb[0]
        },
        boolean: function(yb, bb) {
          return Bb(yb, bb) > 0
        },
        string: function(yb, bb) {
          const Wy = yb[bb.offset++];
          let Uy;
          return Wy < 192 ? Uy = 31 & Wy : 217 === Wy ? Uy = Bb(yb, bb) : 218 === Wy ? Uy = eb(yb, bb) : 219 === Wy && (Uy = sb(yb, bb)), Pb(yb, bb, Uy)
        },
        number: function(yb, bb) {
          const Wy = yb[bb.offset++];
          return Wy < 128 ? Wy : 202 === Wy ? Sb(yb, bb) : 203 === Wy ? Eb(yb, bb) : 204 === Wy ? Bb(yb, bb) : 205 === Wy ? eb(yb, bb) : 206 === Wy ? sb(yb, bb) : 207 === Wy ? mW(yb, bb) : 208 === Wy ? ob(yb, bb) : 209 === Wy ? Kb(yb, bb) : 210 === Wy ? qW(yb, bb) : 211 === Wy ? lb(yb, bb) : Wy > 223 ? -1 * (255 - Wy + 1) : void 0
        },
        stringCheck: function(yb, bb) {
          const Wy = yb[bb.offset];
          return Wy < 192 && Wy > 160 || 217 === Wy || 218 === Wy || 219 === Wy
        }
      },
      Tb = {},
      Vb = new Map;

    function Jb(yb, bb) {
      bb.constructor && (Object.prototype.hasOwnProperty.call(bb, "constructor") && null == bb.constructor[Symbol.metadata] && fy(bb.constructor), Vb.set(bb.constructor, yb), Tb[yb] = bb), bb.encode && (bW[yb] = bb.encode), bb.decode && (Cb[yb] = bb.decode)
    }

    function gW(yb) {
      for (const bb in yb) Jb(bb, yb[bb]);
      return yb => TU(yb)
    }
    const Gb = "ArraySchema does not support streaming \u2014 positional ops (splice / unshift / reverse) shift subsequent indexes, so holding ADDs back for a later tick under `maxPerTick` would desync the decoder. Use `t.stream(X)` (stable monotonic positions) or `t.map(X).stream()` (stable keys) instead.";

    function Ob() {
      return {
        pendingByView: new Map,
        sentByView: new Map,
        broadcastPending: new Set,
        sentBroadcast: new Set,
        broadcastDeletes: new Set,
        maxPerTick: 32
      }
    }

    function Rb(yb) {
      return yb._stream ??= Ob()
    }

    function vW(yb, bb, Wy) {
      0 === bb.activeViews.size && Rb(yb).broadcastPending.add(Wy)
    }

    function iW(yb, bb, Wy, Uy) {
      const fy = yb._stream;
      if (void 0 === fy) return !0;
      let Zy = !1;
      return fy.broadcastPending.delete(Uy) ? Zy = !0 : fy.sentBroadcast.delete(Uy) && fy.broadcastDeletes.add(Uy), bb.forEachActiveView((yb => {
        const bb = fy.pendingByView.get(yb.id);
        if (bb?.has(Uy)) return bb.delete(Uy), void(Zy = !0);
        const cb = fy.sentByView.get(yb.id);
        if (cb?.has(Uy)) {
          cb.delete(Uy);
          let bb = yb.changes.get(Wy);
          void 0 === bb && (bb = new Map, yb.changes.set(Wy, bb)), bb.set(Uy, hy.DELETE)
        }
      })), Zy
    }

    function Mb(yb, bb) {
      const Wy = yb._stream?.pendingByView;
      if (void 0 === Wy) return !1;
      for (const [Uy, hy] of Wy)
        if (hy.size > 0 && void 0 !== bb.activeViews.get(Uy)?.deref()) return !0;
      return !1
    }

    function Yb(yb) {
      const bb = yb._stream;
      return void 0 !== bb && (bb.broadcastPending.size > 0 || bb.broadcastDeletes.size > 0)
    }

    function Xb(yb, bb, Wy) {
      const Uy = Rb(yb);
      let hy = Uy.pendingByView.get(bb);
      void 0 === hy && (hy = new Set, Uy.pendingByView.set(bb, hy)), hy.add(Wy)
    }

    function nb(yb, bb) {
      const Wy = yb._stream;
      void 0 !== Wy && (Wy.pendingByView.delete(bb), Wy.sentByView.delete(bb), Wy.priorityByView?.delete(bb))
    }
    const ub = {
      8: "uint8",
      16: "uint16",
      32: "uint32"
    };

    function rW(yb) {
      if (null == yb || "object" !== typeof yb) throw new Error("t.quantized(): options object with { min, max } is required.");
      const {
        min: bb,
        max: Wy
      } = yb;
      if ("number" !== typeof bb || "number" !== typeof Wy || !(Wy > bb) || !Number.isFinite(bb) || !Number.isFinite(Wy)) throw new Error(`t.quantized(): require finite min < max (got min=${bb}, max=${Wy}).`);
      const Uy = yb.bits ?? 16;
      if (8 !== Uy && 16 !== Uy && 32 !== Uy) throw new Error(`t.quantized(): bits must be 8, 16 or 32 (got ${Uy}).`);
      const hy = yb.mode ?? "clamp";
      if ("clamp" !== hy && "wrap" !== hy) throw new Error(`t.quantized(): mode must be "clamp" or "wrap" (got ${JSON.stringify(hy)}).`);
      const fy = "wrap" === hy,
        Zy = Math.pow(2, Uy);
      return {
        min: bb,
        max: Wy,
        bits: Uy,
        wrap: fy,
        wire: ub[Uy],
        range: Wy - bb,
        span: fy ? Zy : bb === -Wy ? Zy - 2 : Zy - 1
      }
    }

    function Hb(yb) {
      return null !== yb && "object" === typeof yb && void 0 !== yb.quantized
    }

    function aW(yb, bb) {
      if (yb.wrap) {
        if (!Number.isFinite(bb)) return 0;
        const Wy = yb.range;
        let Uy = (bb - yb.min) % Wy;
        Uy < 0 && (Uy += Wy);
        const hy = yb.span;
        return Math.floor(Uy / Wy * hy + .5) % hy
      }
      if (bb !== bb) return 0;
      const Wy = bb < yb.min ? yb.min : bb > yb.max ? yb.max : bb;
      return Math.floor((Wy - yb.min) / yb.range * yb.span + .5)
    }

    function Fb(yb, bb) {
      return yb.min + bb / yb.span * yb.range
    }

    function pb(yb) {
      const bb = bW[yb.wire];
      return (Wy, Uy, hy) => bb(Wy, aW(yb, Uy), hy)
    }
    class Lb {
      types = {};
      schemas = new Map;
      hasFilters = !1;
      static inheritedTypes = new WeakMap;
      static cachedContexts = new WeakMap;
      static register(yb) {
        const bb = Object.getPrototypeOf(yb);
        if (bb !== ih) {
          let Wy = Lb.inheritedTypes.get(bb);
          Wy || (Wy = new Set, Lb.inheritedTypes.set(bb, Wy)), Wy.add(yb)
        }
      }
      static cache(yb) {
        let bb = Lb.cachedContexts.get(yb);
        return bb || (bb = new Lb(yb), Lb.cachedContexts.set(yb, bb)), bb
      }
      constructor(yb) {
        yb && this.discoverTypes(yb)
      }
      has(yb) {
        return this.schemas.has(yb)
      }
      get(yb) {
        return this.types[yb]
      }
      add(yb) {
        let bb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.schemas.size;
        return !this.schemas.has(yb) && (this.types[bb] = yb, null == yb[Symbol.metadata] && Nb.initialize(yb), this.schemas.set(yb, bb), !0)
      }
      getTypeId(yb) {
        return this.schemas.get(yb)
      }
      discoverTypes(yb) {
        if (!this.add(yb)) return;
        Lb.inheritedTypes.get(yb)?.forEach((yb => {
          this.discoverTypes(yb)
        }));
        let bb = yb;
        for (;
          (bb = Object.getPrototypeOf(bb)) && bb !== ih && bb !== Function.prototype;) this.discoverTypes(bb);
        const Wy = yb[Symbol.metadata];
        (Wy[ib] || Wy[rb]) && (this.hasFilters = !0);
        for (const Uy in Wy) {
          const yb = Wy[Uy].type;
          if ("string" !== typeof yb && !Hb(yb))
            if ("function" === typeof yb) this.discoverTypes(yb);
            else {
              const bb = Object.values(yb)[0];
              if ("string" === typeof bb) continue;
              this.discoverTypes(bb)
            }
        }
      }
      debug() {
        return `TypeContext ->\n\tSchema types: ${this.schemas.size}\n\thasFilters: ${this.hasFilters}`
      }
    }

    function Qb(yb) {
      const bb = Db(yb);
      return bb ? {
        complexTypeKlass: Tb[bb],
        childType: yb[bb]
      } : {
        complexTypeKlass: !1,
        childType: yb
      }
    }

    function jW(yb, bb) {
      const Wy = tW(yb),
        Uy = Db(Wy),
        hy = Uy && Db(Wy[Uy]);
      if (hy) throw new Error(`${bb?`${bb}: `:""}@colyseus/schema: nested collections are not supported ("${Uy}" of "${hy}"). Collections can only hold primitive types or Schema classes, wrap the inner ${hy} in a Schema class.`);
      return Wy
    }

    function Db(yb) {
      return "object" === typeof yb && null !== yb ? Object.keys(yb).find((yb => void 0 !== Tb[yb])) : void 0
    }

    function tW(yb) {
      if ("object" !== typeof yb || null === yb) return yb;
      if (Array.isArray(yb)) return {
        array: tW(yb[0])
      };
      const bb = function(yb) {
        const bb = Object.keys(yb),
          Wy = bb.filter((yb => /\d+/.test(yb)));
        if (Wy.length > 0 && Wy.length === bb.length / 2 && yb[yb[Wy[0]]] == Wy[0]) return "number";
        if (bb.length > 0 && bb.every((bb => yb[bb] === bb))) return "string"
      }(yb);
      if (bb) return bb;
      if (Hb(yb)) return "string" === typeof yb.quantized.wire ? yb : {
        quantized: rW(yb.quantized)
      };
      if (void 0 !== yb.type) return tW(yb.type);
      const Wy = Db(yb);
      return Wy && (yb[Wy] = tW(yb[Wy])), yb
    }
    const wb = [vb, Yy, Xy, ny, uy, rb, Oy];

    function kW(yb, bb, Wy) {
      yb[bb] || Object.defineProperty(yb, bb, {
        value: [],
        enumerable: !1,
        configurable: !0,
        writable: !0
      }), yb[bb].push(Wy)
    }
    const Nb = {
        addField(yb, bb, Wy, Uy, hy) {
          if (bb >= 63) throw new Error(`Can't define field '${Wy}'.\nSchema instances may only have up to 63 fields.`);
          yb[bb] = Object.assign(yb[bb] || {}, {
            type: Uy,
            index: bb,
            name: Wy
          }), Object.defineProperty(yb, gb, {
            value: yb[gb] || {},
            enumerable: !1,
            configurable: !0
          }), yb[gb][Wy] = hy || {
            value: void 0,
            writable: !0,
            enumerable: !0,
            configurable: !0
          }, Object.defineProperty(yb, Ry, {
            value: bb,
            enumerable: !1,
            configurable: !0
          }), Object.defineProperty(yb, Wy, {
            value: bb,
            enumerable: !1,
            configurable: !0
          }), "string" === typeof yb[bb].type || Hb(yb[bb].type) || (void 0 === yb[vb] && Object.defineProperty(yb, vb, {
            value: [],
            enumerable: !1,
            configurable: !0
          }), yb[vb].push(bb));
          const fy = yb[bb].type;
          if (fy && "object" === typeof fy && void 0 !== fy.stream) {
            if (void 0 !== fy.array) throw new Error(Gb);
            yb[bb].stream = !0, yb[rb] || Object.defineProperty(yb, rb, {
              value: [],
              enumerable: !1,
              configurable: !0,
              writable: !0
            }), yb[rb].includes(bb) || yb[rb].push(bb);
            const hy = Uy?.priority;
            "function" === typeof hy && Nb.setStreamPriority(yb, Wy, hy)
          }
        },
        setTag(yb, bb, Wy) {
          const Uy = yb[bb];
          if (yb[Uy].tag = Wy, yb[ib] || (Object.defineProperty(yb, ib, {
              value: [],
              enumerable: !1,
              configurable: !0
            }), Object.defineProperty(yb, My, {
              value: {},
              enumerable: !1,
              configurable: !0
            })), yb[ib].push(Uy), Wy < 0) yb[My][Wy] || (yb[My][Wy] = []), yb[My][Wy].push(Uy);
          else
            for (let hy = Wy; hy > 0; hy &= hy - 1) {
              const bb = hy & -hy;
              yb[My][bb] || (yb[My][bb] = []), yb[My][bb].push(Uy)
            }
        },
        setUnreliable(yb, bb) {
          const Wy = yb[bb];
          if ("string" !== typeof yb[Wy].type) throw new Error(`@unreliable cannot be applied to ref-type field "${bb}". For ref-type fields, mark each primitive sub-field with @unreliable instead. See README "Limitations and best practices".`);
          yb[Wy].unreliable = !0, yb[Yy] || Object.defineProperty(yb, Yy, {
            value: [],
            enumerable: !1,
            configurable: !0,
            writable: !0
          }), yb[Yy].push(Wy)
        },
        setPatchOnly(yb, bb) {
          const Wy = yb[bb];
          if (yb[Wy].fullStateOnly) throw new Error(`field "${bb}" cannot be both patchOnly and fullStateOnly \u2014 those are the only two delivery channels, so the field would never reach a client.`);
          yb[Wy].patchOnly = !0, kW(yb, Xy, Wy), kW(yb, ny, Wy)
        },
        setDeprecated(yb, bb) {
          const Wy = yb[bb];
          yb[Wy].deprecated = !0, kW(yb, ny, Wy), Object.defineProperty(yb, Wy, {
            value: yb[Wy],
            enumerable: !1,
            configurable: !0
          })
        },
        setFullStateOnly(yb, bb) {
          const Wy = yb[bb];
          if (yb[Wy].patchOnly) throw new Error(`field "${bb}" cannot be both patchOnly and fullStateOnly \u2014 those are the only two delivery channels, so the field would never reach a client.`);
          yb[Wy].fullStateOnly = !0, kW(yb, uy, Wy)
        },
        setStream(yb, bb) {
          const Wy = yb[bb];
          yb[Wy].stream = !0, yb[rb] || Object.defineProperty(yb, rb, {
            value: [],
            enumerable: !1,
            configurable: !0,
            writable: !0
          }), yb[rb].push(Wy)
        },
        setStreamPriority(yb, bb, Wy) {
          const Uy = yb[bb];
          yb[Hy] || Object.defineProperty(yb, Hy, {
            value: {},
            enumerable: !1,
            configurable: !0,
            writable: !0
          }), yb[Hy][Uy] = Wy
        },
        getStreamPriority: (yb, bb) => yb?.[Hy]?.[bb],
        defineField(yb, bb, Wy, Uy, hy) {
          const fy = jW(hy, `${yb.name}.${Uy}`),
            {
              complexTypeKlass: Zy,
              childType: cb
            } = Qb(fy);
          Nb.addField(bb, Wy, Uy, fy, JU(Uy, Wy, cb, Zy)), bb[gb][Uy] && Object.defineProperty(yb.prototype, Uy, bb[gb][Uy]), ("string" === typeof fy || Hb(fy)) && (bb[Oy] || Object.defineProperty(bb, Oy, {
            value: [],
            enumerable: !1,
            configurable: !0,
            writable: !0
          }), bb[Oy][Wy] = "string" === typeof fy ? bW[fy] : pb(fy.quantized))
        },
        setFields(yb, bb) {
          const Wy = yb.prototype.constructor;
          Lb.register(Wy);
          const Uy = Object.getPrototypeOf(Wy),
            hy = Uy && Uy[Symbol.metadata],
            fy = Nb.initialize(Wy);
          Wy[Py] || (Wy[Py] = ih[Py]), Wy[oy] || (Wy[oy] = ih[oy]), Wy[By] || (Wy[By] = ih[By]), Wy.prototype.toJSON || (Wy.prototype.toJSON = ih.prototype.toJSON);
          let Zy = fy[Ry] ?? (hy && hy[Ry]) ?? -1;
          Zy++, fy[Oy] || Object.defineProperty(fy, Oy, {
            value: hy?.[Oy] ? [...hy[Oy]] : [],
            enumerable: !1,
            configurable: !0,
            writable: !0
          });
          for (const cb in bb) {
            if (void 0 !== fy[cb]) throw new Error(`@colyseus/schema: Duplicate '${cb}' definition on '${Wy.name||"(anonymous)"}'.`);
            Nb.defineField(Wy, fy, Zy, cb, bb[cb]), Zy++
          }
          return yb
        },
        isDeprecated: (yb, bb) => !0 === yb[bb].deprecated,
        initialize(yb) {
          const bb = Object.getPrototypeOf(yb),
            Wy = bb[Symbol.metadata];
          let Uy = yb[Symbol.metadata] ?? Object.create(null);
          if (bb !== ih && Uy === Wy && (Uy = Object.create(null), Wy)) {
            Object.setPrototypeOf(Uy, Wy), Object.defineProperty(Uy, Ry, {
              value: Wy[Ry],
              enumerable: !1,
              configurable: !0,
              writable: !0
            }), void 0 !== Wy[ib] && (Object.defineProperty(Uy, ib, {
              value: [...Wy[ib]],
              enumerable: !1,
              configurable: !0,
              writable: !0
            }), Object.defineProperty(Uy, My, {
              value: {
                ...Wy[My]
              },
              enumerable: !1,
              configurable: !0,
              writable: !0
            }));
            for (const yb of wb) {
              const bb = Wy[yb];
              void 0 !== bb && Object.defineProperty(Uy, yb, {
                value: [...bb],
                enumerable: !1,
                configurable: !0,
                writable: !0
              })
            }
            Object.defineProperty(Uy, gb, {
              value: {
                ...Wy[gb]
              },
              enumerable: !1,
              configurable: !0,
              writable: !0
            })
          }
          return Object.defineProperty(yb, Symbol.metadata, {
            value: Uy,
            writable: !1,
            configurable: !0
          }), Uy
        },
        isValidInstance: yb => yb.constructor[Symbol.metadata] && Object.prototype.hasOwnProperty.call(yb.constructor[Symbol.metadata], Ry),
        getFields(yb) {
          const bb = yb[Symbol.metadata],
            Wy = {};
          for (let Uy = 0; Uy <= bb[Ry]; Uy++) Wy[bb[Uy].name] = bb[Uy].type;
          return Wy
        },
        hasViewTagAtIndex: (yb, bb) => yb?.[ib]?.includes(bb),
        hasUnreliableAtIndex: (yb, bb) => yb?.[Yy]?.includes(bb),
        hasPatchOnlyAtIndex: (yb, bb) => yb?.[Xy]?.includes(bb),
        hasFullStateOnlyAtIndex: (yb, bb) => yb?.[uy]?.includes(bb),
        hasStreamAtIndex: (yb, bb) => yb?.[rb]?.includes(bb)
      },
      zW = (yb, bb, Wy) => yb(bb, Wy);
    class Ib {
      dirtyLow = 0;
      dirtyHigh = 0;
      ops;
      constructor(yb) {
        this.ops = new Uint8Array(Math.max(yb + 1, 1))
      }
      record(yb, bb) {
        const Wy = this.ops[yb];
        0 === Wy ? this.ops[yb] = bb : (Wy === hy.DELETE || Wy === hy.ADD && bb === hy.DELETE_AND_ADD) && (this.ops[yb] = hy.DELETE_AND_ADD), yb < 32 ? this.dirtyLow |= 1 << yb : this.dirtyHigh |= 1 << yb - 32
      }
      recordDelete(yb, bb) {
        this.ops[yb] = bb, yb < 32 ? this.dirtyLow |= 1 << yb : this.dirtyHigh |= 1 << yb - 32
      }
      recordRaw(yb, bb) {
        this.record(yb, bb)
      }
      operationAt(yb) {
        const bb = this.ops[yb];
        return 0 === bb ? void 0 : bb
      }
      setOperationAt(yb, bb) {
        this.ops[yb] = bb
      }
      forEach(yb) {
        this.forEachWithCtx(yb, zW)
      }
      forEachWithCtx(yb, bb) {
        let Wy = this.dirtyLow,
          Uy = this.dirtyHigh;
        const hy = this.ops;
        for (; 0 !== Wy;) {
          const Uy = Wy & -Wy,
            fy = 31 - Math.clz32(Uy);
          Wy ^= Uy, bb(yb, fy, hy[fy])
        }
        for (; 0 !== Uy;) {
          const Wy = Uy & -Uy,
            fy = 31 - Math.clz32(Wy) + 32;
          Uy ^= Wy, bb(yb, fy, hy[fy])
        }
      }
      size() {
        return Ab(this.dirtyLow) + Ab(this.dirtyHigh)
      }
      has() {
        return 0 !== (this.dirtyLow | this.dirtyHigh)
      }
      reset() {
        this.dirtyLow = 0, this.dirtyHigh = 0, this.ops.fill(0)
      }
    }
    class xW {
      hh = new Map;
      pureOps = [];
      record(yb, bb) {
        const Wy = this.hh.get(yb);
        void 0 === Wy ? this.hh.set(yb, bb) : (Wy === hy.DELETE || Wy === hy.ADD && bb === hy.DELETE_AND_ADD) && this.hh.set(yb, hy.DELETE_AND_ADD)
      }
      recordDelete(yb, bb) {
        this.hh.set(yb, bb)
      }
      recordRaw(yb, bb) {
        this.hh.set(yb, bb)
      }
      recordPure(yb) {
        this.pureOps.push([this.hh.size, yb])
      }
      operationAt(yb) {
        return this.hh.get(yb)
      }
      setOperationAt(yb, bb) {
        this.hh.has(yb) && this.hh.set(yb, bb)
      }
      forEach(yb) {
        this.forEachWithCtx(yb, zW)
      }
      forEachWithCtx(yb, bb) {
        const Wy = this.pureOps;
        if (Wy.length > 0) {
          let Uy = 0,
            hy = 0;
          for (const [fy, Zy] of this.hh) {
            for (; Uy < Wy.length && Wy[Uy][0] <= hy;) {
              const hy = Wy[Uy++][1];
              bb(yb, -hy, hy)
            }
            bb(yb, fy, Zy), hy++
          }
          for (; Uy < Wy.length;) {
            const hy = Wy[Uy++][1];
            bb(yb, -hy, hy)
          }
        } else
          for (const [Uy, hy] of this.hh) bb(yb, Uy, hy)
      }
      size() {
        return this.hh.size + this.pureOps.length
      }
      has() {
        return this.hh.size > 0 || this.pureOps.length > 0
      }
      reset() {
        this.hh.clear(), this.pureOps.length = 0
      }
      shift(yb) {
        const bb = new Map;
        for (const [Wy, Uy] of this.hh) bb.set(Wy + yb, Uy);
        this.hh = bb
      }
    }

    function Ab(yb) {
      return 16843009 * ((yb = (858993459 & (yb -= yb >>> 1 & 1431655765)) + (yb >>> 2 & 858993459)) + (yb >>> 4) & 252645135) >>> 24
    }

    function db(yb) {
      if (void 0 === yb) return 0;
      let bb = 0;
      for (let Wy = 0, Uy = yb.length; Wy < Uy; Wy++) {
        const Uy = yb[Wy];
        Uy < 32 && (bb |= 1 << Uy)
      }
      return bb
    }

    function yU(yb) {
      const bb = yb.constructor;
      if (Object.prototype.hasOwnProperty.call(bb, Gy)) return bb[Gy];
      const Wy = bb[Symbol.metadata],
        Uy = Nb.isValidInstance(yb),
        hy = (Wy?.[ib]?.length ?? 0) > 0,
        fy = function(yb) {
          const bb = [],
            Wy = [],
            Uy = [],
            hy = [],
            fy = yb?.[Ry];
          if (void 0 === fy) return {
            names: bb,
            types: Wy,
            tags: Uy,
            encoders: hy
          };
          const Zy = yb[Oy];
          for (let cb = 0; cb <= fy; cb++) {
            const fy = yb[cb];
            void 0 !== fy ? (bb[cb] = fy.name, Wy[cb] = fy.type, Uy[cb] = fy.tag, hy[cb] = Zy?.[cb]) : (bb[cb] = void 0, Wy[cb] = void 0, Uy[cb] = void 0, hy[cb] = void 0)
          }
          return {
            names: bb,
            types: Wy,
            tags: Uy,
            encoders: hy
          }
        }(Wy),
        Zy = Uy && !hy ? void 0 : bb[Ky],
        cb = {
          encoder: bb[oy],
          filter: Zy,
          metadata: Wy,
          isSchema: Uy,
          filterBitmask: Uy ? db(Wy?.[ib]) : 0,
          hasAnyFullStateOnly: (Wy?.[uy]?.length ?? 0) > 0,
          hasAnyUnreliable: (Wy?.[Yy]?.length ?? 0) > 0,
          hasAnyStream: (Wy?.[rb]?.length ?? 0) > 0,
          hasAnyView: hy,
          fullStateOnlyBitmask: db(Wy?.[uy]),
          unreliableBitmask: db(Wy?.[Yy]),
          streamBitmask: db(Wy?.[rb]),
          names: fy.names,
          types: fy.types,
          tags: fy.tags,
          encoders: fy.encoders
        };
      return Object.defineProperty(bb, Gy, {
        value: cb,
        enumerable: !1,
        writable: !0,
        configurable: !0
      }), cb
    }

    function bU(yb, bb) {
      if (void 0 !== yb.parentRef && bb(yb.parentRef, yb._parentIndex)) return !0;
      for (let Wy = yb.extraParents; void 0 !== Wy; Wy = Wy.next)
        if (bb(Wy.ref, Wy.index)) return !0;
      return !1
    }
    const WW = (yb, bb) => {
        yb.isFieldUnreliable(bb) ? yb.ensureUnreliableRecorder().record(bb, hy.ADD) : yb.record(bb, hy.ADD)
      },
      UW = (yb, bb) => yb(bb);

    function hW(yb, bb, Wy) {
      const Uy = yb.refTarget;
      if (void 0 !== Uy[Ey]) {
        if (yb.isPatchOnly) return;
        if (Array.isArray(Uy.items)) {
          const yb = Uy.items;
          for (let Uy = 0, hy = yb.length; Uy < hy; Uy++) void 0 !== yb[Uy] && Wy(bb, Uy)
        } else if (void 0 !== Uy.journal)
          for (const [yb, hy] of Uy.journal.keyByIndex) Uy.$items.has(hy) && Wy(bb, yb);
        else if (void 0 !== Uy.$items)
          for (const yb of Uy.$items.keys()) Wy(bb, yb)
      } else {
        const hy = yb.metadata;
        if (!hy) return;
        const fy = hy[Ry] ?? -1,
          Zy = hy[ny],
          cb = yb.encDescriptor.names;
        for (let yb = 0; yb <= fy; yb++) {
          const hy = cb[yb];
          if (void 0 === hy) continue;
          if (Zy && Zy.includes(yb)) continue;
          const fy = Uy[hy];
          void 0 !== fy && null !== fy && Wy(bb, yb)
        }
      }
    }

    function fW(yb, bb, Wy, Uy) {
      ! function(yb, bb, Wy) {
        if (!bb) return;
        const Uy = bb[Sy],
          hy = !Uy._isSchema;
        let fy;
        hy ? (bb = Uy.parent, Wy = Uy.parentIndex, fy = bb?.[Sy].metadata) : fy = Uy.metadata;
        const Zy = (fy?.[Xy]?.includes(Wy) ? GW : 0) | (fy?.[uy]?.includes(Wy) ? OW : 0),
          cb = Uy.flags & iU | Zy,
          Py = yb.flags;
        yb.flags = Py | cb;
        cb & ~Py & OW && (yb.reset(), yb.unreliableRecorder?.reset());
        const oy = yb.root?.types;
        if (!oy?.hasFilters) return;
        const By = fy?.[ib]?.includes(Wy) ?? !1,
          Ky = fy?.[rb]?.includes(Wy) ?? !1,
          ey = Uy.isFiltered || By || Ky;
        if (yb.isFiltered = ey, Ky && !hy) {
          yb.isStreamCollection = !0;
          const bb = Rb(yb.ref);
          if (void 0 === bb.priority) {
            const yb = Nb.getStreamPriority(fy, Wy);
            void 0 !== yb && (bb.priority = yb)
          }
          yb.root?.registerStream(yb.ref)
        }
        if (ey) {
          const bb = cU(yb);
          yb.isVisibilitySharedWithParent = Uy.isFiltered && bb && !Ky && (!By || hy && fy[Wy].tag !== sU)
        }
      }(yb, bb, Wy), yb.isFullStateOnly || (yb.has() && yb.root?.enqueueChangeTree(yb), yb.unreliableRecorder?.has() && yb.root?.enqueueUnreliable(yb), yb.has() || yb.unreliableRecorder?.has() || yb.root?.enqueueChangeTree(yb))
    }

    function ZW(yb) {
      const bb = yb.pendingFilterRefresh;
      for (let Wy = 0; Wy < bb.length; Wy++) {
        const yb = bb[Wy];
        0 !== (yb.flags & vU) && PW(yb)
      }
      bb.length = 0
    }

    function cU(yb) {
      return yb._isSchema || "string" !== typeof yb.refTarget[Ey]
    }

    function PW(yb) {
      yb.flags &= ~vU;
      const bb = yb.root;
      if (void 0 === bb || void 0 === yb.parentRef) return;
      const Wy = cU(yb);
      let Uy = qU(yb, yb.parentRef, yb._parentIndex, Wy);
      for (let fy = yb.extraParents; void 0 !== fy && Uy !== eW; fy = fy.next) Uy |= qU(yb, fy.ref, fy.index, Wy);
      if (0 === Uy) return;
      yb.isVisibilitySharedWithParent = 0 !== (Uy & KW);
      const hy = 0 === (Uy & BW);
      hy !== yb.isFiltered && (yb.isFiltered = hy, hy || yb.isFullStateOnly || (yb.forEachLiveWithCtx(yb, WW), yb.has() && bb.enqueueChangeTree(yb), yb.unreliableRecorder?.has() && bb.enqueueUnreliable(yb)), yb.forEachChildWithCtx(yb, sW))
    }
    const oW = 1,
      BW = 2,
      KW = 4,
      eW = oW | BW | KW;

    function qU(yb, bb, Wy, Uy) {
      const hy = bb[Sy];
      if (hy.root !== yb.root || ! function(yb, bb, Wy) {
          const Uy = bb.refTarget;
          if (bb.isArray) {
            const bb = Uy.items,
              hy = bb[Wy];
            if (void 0 !== hy && hy[Sy] === yb) return !0;
            for (let Wy = 0, Uy = bb.length; Wy < Uy; Wy++) {
              const Uy = bb[Wy];
              if (void 0 !== Uy && Uy[Sy] === yb) return !0
            }
            return !1
          }
          const hy = bb.getValue(Wy);
          return void 0 !== hy && hy[Sy] === yb
        }(yb, hy, Wy)) return 0;
      hy.flags & vU && PW(hy);
      let fy = oW;
      if (hy._isSchema) {
        void 0 !== hy.encDescriptor.tags[Wy] || hy.isFieldStream(Wy) || (hy.isFiltered ? Uy && (fy |= KW) : fy |= BW)
      } else if (hy.isFiltered) {
        if (Uy && !hy.isStreamCollection) {
          const yb = hy.parent?.[Sy];
          (yb?._isSchema ? yb.encDescriptor.tags[hy.parentIndex] : void 0) !== sU && (fy |= KW)
        }
      } else fy |= BW;
      return fy
    }
    const sW = (yb, bb, Wy) => {
      PW(bb)
    };

    function SW(yb, bb, Wy, Uy) {
      if (yb.addParent(bb, Uy), !Wy) return;
      const hy = Wy.add(yb);
      Wy !== yb.root && (yb.root = Wy, fW(yb, bb, Uy));
      const fy = bb?.[Sy];
      if (void 0 !== fy && void 0 !== fy.subscribedViews && void 0 !== bb[Ey] && function(yb, bb, Wy, Uy) {
          const hy = yb.subscribedViews;
          if (void 0 === hy) return;
          const fy = yb.isStreamCollection,
            Zy = fy ? yb.ref : void 0,
            cb = fy ? void 0 : Wy[Sy];
          for (let Py = 0, oy = hy.length; Py < oy; Py++) {
            let yb = hy[Py];
            for (; 0 !== yb;) {
              const Wy = yb & -yb;
              yb ^= Wy;
              const oy = 32 * Py + (31 - Math.clz32(Wy)),
                By = Uy.activeViews.get(oy),
                Ky = By?.deref();
              void 0 !== Ky ? fy ? Xb(Zy, oy, bb) : void 0 !== cb && Ky.markVisible(cb) : hy[Py] &= ~Wy
            }
          }
        }(fy, Uy, yb.ref, Wy), hy) {
        let bb = CW[TW];
        void 0 === bb && (bb = {
          parentRef: void 0,
          root: void 0
        }, CW[TW] = bb), bb.parentRef = yb.ref, bb.root = Wy, TW++, lW(yb, bb, VW), TW--
      }
    }

    function EW(yb, bb, Wy) {
      yb(bb, Wy)
    }

    function lW(yb, bb, Wy) {
      const Uy = yb.refTarget;
      if (Uy[Ey]) {
        if ("string" !== typeof Uy[Ey]) {
          const yb = Uy.items;
          if (void 0 !== yb)
            for (let Uy = 0, hy = yb.length; Uy < hy; Uy++) {
              const hy = yb[Uy];
              hy && Wy(bb, hy[Sy], Uy)
            } else {
              const yb = Uy.$items,
                hy = Uy._collectionIndexes;
              for (const Uy of yb.keys()) {
                const fy = yb.get(Uy);
                fy && Wy(bb, fy[Sy], hy?.[Uy] ?? Uy)
              }
            }
        }
      } else {
        const hy = yb.metadata,
          fy = hy?.[vb];
        if (!fy) return;
        const Zy = yb.encDescriptor.names;
        for (let yb = 0, cb = fy.length; yb < cb; yb++) {
          const hy = fy[yb],
            cb = Uy[Zy[hy]];
          cb && Wy(bb, cb[Sy], hy)
        }
      }
    }

    function mU(yb, bb, Wy) {
      bb.root !== yb ? bb.setRoot(yb) : yb.add(bb)
    }
    const CW = [];
    let TW = 0;

    function VW(yb, bb, Wy) {
      if (bb.root === yb.root) return yb.root.add(bb), void yb.root.moveNextToParent(bb);
      bb.setParent(yb.parentRef, yb.root, Wy)
    }

    function JW(yb, bb, Wy) {
      const Uy = (3 & Wy) << 3;
      return Wy < 4 ? yb >>> Uy & 255 : bb >>> Uy & 255
    }
    const gU = (yb, bb, Wy) => yb(bb, Wy);
    const GW = 16,
      OW = 32,
      RW = 128,
      vU = 256,
      iU = GW | OW;
    class MW {
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
      set isFiltered(yb) {
        this.flags = yb ? 1 | this.flags : -2 & this.flags
      }
      get isVisibilitySharedWithParent() {
        return 0 !== (2 & this.flags)
      }
      set isVisibilitySharedWithParent(yb) {
        this.flags = yb ? 2 | this.flags : -3 & this.flags
      }
      get isNew() {
        return 0 !== (4 & this.flags)
      }
      set isNew(yb) {
        this.flags = yb ? 4 | this.flags : -5 & this.flags
      }
      get isUnreliable() {
        return 0 !== (8 & this.flags)
      }
      set isUnreliable(yb) {
        this.flags = yb ? 8 | this.flags : -9 & this.flags
      }
      get isPatchOnly() {
        return 0 !== (this.flags & GW)
      }
      set isPatchOnly(yb) {
        this.flags = yb ? this.flags | GW : this.flags & ~GW
      }
      get isFullStateOnly() {
        return 0 !== (this.flags & OW)
      }
      set isFullStateOnly(yb) {
        this.flags = yb ? this.flags | OW : this.flags & ~OW
      }
      get isStreamCollection() {
        return 0 !== (64 & this.flags)
      }
      set isStreamCollection(yb) {
        this.flags = yb ? 64 | this.flags : -65 & this.flags
      }
      get needsRestage() {
        return 0 !== (this.flags & RW)
      }
      set needsRestage(yb) {
        this.flags = yb ? this.flags | RW : -129 & this.flags
      }
      get hasFilteredFields() {
        return this.isFiltered || this.encDescriptor.hasAnyView
      }
      ensureUnreliableRecorder() {
        return void 0 === this.unreliableRecorder && (this.unreliableRecorder = this._isSchema ? new Ib(this.metadata?.[Ry] ?? 0) : new xW), this.unreliableRecorder
      }
      isFieldUnreliable(yb) {
        const bb = this.encDescriptor;
        return !!bb.hasAnyUnreliable && (yb < 32 ? 0 !== (bb.unreliableBitmask & 1 << yb) : Nb.hasUnreliableAtIndex(this.metadata, yb))
      }
      isFieldFullStateOnly(yb) {
        if (this.isFullStateOnly) return !0;
        const bb = this.encDescriptor;
        return !!bb.hasAnyFullStateOnly && (yb < 32 ? 0 !== (bb.fullStateOnlyBitmask & 1 << yb) : Nb.hasFullStateOnlyAtIndex(this.metadata, yb))
      }
      isFieldStream(yb) {
        const bb = this.encDescriptor;
        return !!bb.hasAnyStream && (yb < 32 ? 0 !== (bb.streamBitmask & 1 << yb) : Nb.hasStreamAtIndex(this.metadata, yb))
      }
      constructor(yb) {
        let bb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : yb;
        this.ref = yb, this.refTarget = bb;
        const Wy = yU(yb);
        this.encDescriptor = Wy, this.metadata = Wy.metadata;
        const Uy = Wy.isSchema;
        if (this._isSchema = Uy, this.ops = void 0, this.collDirty = void 0, this.collPureOps = void 0, Uy) {
          const yb = this.metadata?.[Ry] ?? 0;
          yb > 7 && (this.ops = new Uint8Array(yb + 1))
        } else this.collDirty = new Map
      }
      _opAt(yb) {
        const bb = this.ops;
        if (void 0 !== bb) return bb[yb];
        const Wy = (3 & yb) << 3;
        return yb < 4 ? this.opsLow >>> Wy & 255 : this.opsHigh >>> Wy & 255
      }
      _opPut(yb, bb) {
        const Wy = this.ops;
        if (void 0 !== Wy) return void(Wy[yb] = bb);
        const Uy = (3 & yb) << 3,
          hy = ~(255 << Uy);
        yb < 4 ? this.opsLow = this.opsLow & hy | bb << Uy : this.opsHigh = this.opsHigh & hy | bb << Uy
      }
      _markDirty(yb) {
        yb < 32 ? this.dirtyLow |= 1 << yb : this.dirtyHigh |= 1 << yb - 32
      }
      record(yb, bb) {
        if (this._isSchema) {
          const Wy = this._opAt(yb);
          0 === Wy ? this._opPut(yb, bb) : (Wy === hy.DELETE || Wy === hy.ADD && bb === hy.DELETE_AND_ADD) && this._opPut(yb, hy.DELETE_AND_ADD), this._markDirty(yb)
        } else {
          const Wy = this.collDirty,
            Uy = Wy.get(yb);
          let fy;
          fy = void 0 === Uy ? bb : Uy === hy.DELETE || Uy === hy.ADD && bb === hy.DELETE_AND_ADD ? hy.DELETE_AND_ADD : Uy, Wy.set(yb, fy)
        }
      }
      recordDelete(yb, bb) {
        this._isSchema ? (this._opPut(yb, bb), this._markDirty(yb)) : this.collDirty.set(yb, bb)
      }
      recordRaw(yb, bb) {
        this._isSchema ? (this._opPut(yb, bb), this._markDirty(yb)) : this.collDirty.set(yb, bb)
      }
      recordPure(yb) {
        if (this._isSchema) throw new Error("ChangeTree (Schema): pure operations are not supported");
        (this.collPureOps ??= []).push([this.collDirty.size, yb])
      }
      operationAt(yb) {
        if (this._isSchema) {
          const bb = this._opAt(yb);
          return 0 === bb ? void 0 : bb
        }
        return this.collDirty.get(yb)
      }
      setOperationAt(yb, bb) {
        if (this._isSchema) this._opPut(yb, bb);
        else {
          const Wy = this.collDirty;
          Wy.has(yb) && Wy.set(yb, bb)
        }
      }
      forEach(yb) {
        this.forEachWithCtx(yb, gU)
      }
      forEachWithCtx(yb, bb) {
        if (this._isSchema) {
          let Wy = this.dirtyLow,
            Uy = this.dirtyHigh;
          const hy = this.ops;
          if (void 0 !== hy) {
            for (; 0 !== Wy;) {
              const Uy = Wy & -Wy,
                fy = 31 - Math.clz32(Uy);
              Wy ^= Uy, bb(yb, fy, hy[fy])
            }
            for (; 0 !== Uy;) {
              const Wy = Uy & -Uy,
                fy = 31 - Math.clz32(Wy) + 32;
              Uy ^= Wy, bb(yb, fy, hy[fy])
            }
          } else {
            const Uy = this.opsLow,
              hy = this.opsHigh;
            for (; 0 !== Wy;) {
              const fy = Wy & -Wy,
                Zy = 31 - Math.clz32(fy);
              Wy ^= fy, bb(yb, Zy, JW(Uy, hy, Zy))
            }
          }
          return
        }
        const Wy = this.collDirty,
          Uy = this.collPureOps;
        if (void 0 !== Uy && Uy.length > 0) {
          let hy = 0,
            fy = 0;
          for (const [Zy, cb] of Wy) {
            for (; hy < Uy.length && Uy[hy][0] <= fy;) {
              const Wy = Uy[hy++][1];
              bb(yb, -Wy, Wy)
            }
            bb(yb, Zy, cb), fy++
          }
          for (; hy < Uy.length;) {
            const Wy = Uy[hy++][1];
            bb(yb, -Wy, Wy)
          }
        } else
          for (const [hy, fy] of Wy) bb(yb, hy, fy)
      }
      size() {
        return this._isSchema ? Ab(this.dirtyLow) + Ab(this.dirtyHigh) : this.collDirty.size + (this.collPureOps?.length ?? 0)
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
      insertAt(yb, bb) {
        if (this._isSchema) throw new Error("ChangeTree (Schema): insertAt is not supported");
        const Wy = this.collDirty,
          Uy = new Map,
          fy = !this.paused && !this.isFullStateOnly;
        if (yb > 0)
          for (const [hy, Zy] of Wy) hy < yb && Uy.set(hy, Zy);
        if (fy)
          for (let Zy = 0; Zy < bb; Zy++) Uy.set(yb + Zy, hy.ADD);
        for (const [hy, Zy] of Wy) hy >= yb && Uy.set(hy + bb, Zy);
        this.collDirty = Uy, fy && this.root?.enqueueChangeTree(this)
      }
      removeAt(yb, bb) {
        if (this._isSchema) throw new Error("ChangeTree (Schema): removeAt is not supported");
        const Wy = this.collDirty,
          Uy = yb + bb;
        let hy = !1;
        for (const Zy of Wy.keys())
          if (Zy >= Uy) {
            hy = !0;
            break
          } if (!hy) {
          for (let bb = yb; bb < Uy; bb++) Wy.delete(bb);
          return
        }
        const fy = new Map;
        for (const [Zy, cb] of Wy) Zy < yb ? fy.set(Zy, cb) : Zy >= Uy && fy.set(Zy - bb, cb);
        this.collDirty = fy
      }
      unshift(yb) {
        this.insertAt(0, yb)
      }
      setRoot(yb) {
        ! function(yb, bb) {
          yb.root = bb;
          const Wy = bb.add(yb);
          fW(yb, yb.parent, yb.parentIndex), Wy && lW(yb, bb, mU)
        }(this, yb)
      }
      setParent(yb, bb, Wy) {
        SW(this, yb, bb, Wy)
      }
      forEachChild(yb) {
        lW(this, yb, EW)
      }
      forEachChildWithCtx(yb, bb) {
        lW(this, yb, bb)
      }
      forEachLive(yb) {
        hW(this, yb, UW)
      }
      forEachLiveWithCtx(yb, bb) {
        hW(this, yb, bb)
      }
      operation(yb) {
        this.paused || this.isFullStateOnly || (this.recordPure(yb), this.root?.enqueueChangeTree(this))
      }
      _routeAndRecord(yb, bb, Wy) {
        if (!this.paused && !this.isFieldFullStateOnly(yb)) {
          if (this.isFieldUnreliable(yb) && !this.isNew) {
            const Uy = this.ensureUnreliableRecorder();
            return Wy ? Uy.recordRaw(yb, bb) : Uy.record(yb, bb), void this.root?.enqueueUnreliable(this)
          }
          Wy ? this.recordRaw(yb, bb) : this.record(yb, bb), this.root?.enqueueChangeTree(this)
        }
      }
      change(yb) {
        let bb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : hy.ADD;
        this._routeAndRecord(yb, bb, !1)
      }
      indexedOperation(yb, bb) {
        this._routeAndRecord(yb, bb, !0)
      }
      getChange(yb) {
        return this.operationAt(yb)
      }
      pause() {
        this.paused = !0
      }
      resume() {
        this.paused = !1
      }
      untracked(yb) {
        const bb = this.paused;
        this.paused = !0;
        try {
          return yb()
        } finally {
          this.paused = bb
        }
      }
      markDirty(yb) {
        let bb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : hy.ADD;
        const Wy = this.paused;
        this.paused = !1;
        try {
          this.change(yb, bb)
        } finally {
          this.paused = Wy
        }
      }
      getValue(yb) {
        let bb = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return this.refTarget[ey](yb, bb)
      }
      delete(yb, bb) {
        if (void 0 === yb) {
          try {
            throw new Error(`@colyseus/schema ${this.ref.constructor.name}: trying to delete non-existing index '${yb}'`)
          } catch (fh) {
            console.warn(fh)
          }
          return
        }
        if (this.paused || this.isFieldFullStateOnly(yb)) return this.getValue(yb);
        const Wy = this.isFieldUnreliable(yb) && !this.isNew;
        Wy ? this.ensureUnreliableRecorder().recordDelete(yb, bb ?? hy.DELETE) : this.recordDelete(yb, bb ?? hy.DELETE);
        const Uy = this.getValue(yb);
        return Uy && Uy[Sy] && this.root?.remove(Uy[Sy]), Wy ? this.root?.enqueueUnreliable(this) : this.root?.enqueueChangeTree(this), Uy
      }
      endEncode() {
        this.reset(), this.changesNode = void 0, this._isSchema || this.refTarget[mb]?.(), this.isNew = !1
      }
      endEncodeUnreliable() {
        this.unreliableRecorder?.reset(), this.unreliableChangesNode = void 0, this._isSchema || this.refTarget[mb]?.()
      }
      discard() {
        this._isSchema || this.refTarget[mb]?.(), this.reset(), this.unreliableRecorder?.reset()
      }
      discardAll() {
        const yb = yb => {
          if (yb < 0) return;
          const bb = this.getValue(yb);
          bb && bb[Sy] && bb[Sy].discardAll()
        };
        this.forEach(yb), this.unreliableRecorder?.forEach(yb), this.discard()
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
      addParent(yb, bb) {
        ! function(yb, bb, Wy) {
          if (yb.parentRef) {
            if (yb.parentRef[Sy] === bb[Sy]) return void(yb._parentIndex = Wy);
            if (bU(yb, ((yb, Wy) => yb[Sy] === bb[Sy]))) return void(yb._parentIndex = Wy)
          }
          void 0 === yb.parentRef ? (yb.parentRef = bb, yb._parentIndex = Wy) : (yb.extraParents = {
            ref: yb.parentRef,
            index: yb._parentIndex,
            next: yb.extraParents
          }, yb.parentRef = bb, yb._parentIndex = Wy)
        }(this, yb, bb)
      }
      setParentIndex(yb, bb) {
        ! function(yb, bb, Wy) {
          if (void 0 !== yb.extraParents)
            if (yb.parentRef[Sy] !== bb[Sy]) {
              for (let Uy = yb.extraParents; void 0 !== Uy; Uy = Uy.next)
                if (Uy.ref[Sy] === bb[Sy]) return void(Uy.index = Wy)
            } else yb._parentIndex = Wy;
          else yb._parentIndex = Wy
        }(this, yb, bb)
      }
      removeParent() {
        return function(yb, bb) {
          if (yb.parentRef && yb.parentRef[Sy] === bb[Sy]) return yb.extraParents ? (yb.parentRef = yb.extraParents.ref, yb._parentIndex = yb.extraParents.index, yb.extraParents = yb.extraParents.next) : (yb.parentRef = void 0, yb._parentIndex = void 0), !0;
          let Wy = yb.extraParents,
            Uy = null;
          for (; Wy;) {
            if (Wy.ref[Sy] === bb[Sy]) return Uy ? Uy.next = Wy.next : yb.extraParents = Wy.next, !0;
            Uy = Wy, Wy = Wy.next
          }
          return void 0 === yb.parentRef
        }(this, arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.parent)
      }
      findParent(yb) {
        return function(yb, bb) {
          if (void 0 !== yb.parentRef && bb(yb.parentRef, yb._parentIndex)) return {
            ref: yb.parentRef,
            index: yb._parentIndex
          };
          for (let Wy = yb.extraParents; void 0 !== Wy; Wy = Wy.next)
            if (bb(Wy.ref, Wy.index)) return {
              ref: Wy.ref,
              index: Wy.index
            }
        }(this, yb)
      }
      hasParent(yb) {
        return bU(this, yb)
      }
      indexInParent(yb) {
        return function(yb, bb) {
          if (yb.parentRef && yb.parentRef[Sy] === bb[Sy]) return yb._parentIndex;
          for (let Wy = yb.extraParents; void 0 !== Wy; Wy = Wy.next)
            if (Wy.ref[Sy] === bb[Sy]) return Wy.index
        }(this, yb)
      }
      getAllParents() {
        return function(yb) {
          const bb = [];
          yb.parentRef && bb.push({
            ref: yb.parentRef,
            index: yb._parentIndex
          });
          let Wy = yb.extraParents;
          for (; Wy;) bb.push({
            ref: Wy.ref,
            index: Wy.index
          }), Wy = Wy.next;
          return bb
        }(this)
      }
    }
    class YW {
      ref;
      root = void 0;
      parentRef = void 0;
      paused = !1;
      isNew = !1;
      flags = 0;
      constructor(yb) {
        this.ref = yb
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
      untracked(yb) {
        return yb()
      }
      markDirty() {}
      forEachChild(yb) {
        const bb = this.ref;
        if (bb[Ey]) {
          if ("string" !== typeof bb[Ey])
            for (const [Wy, Uy] of bb.entries()) Uy && yb(Uy[Sy], bb._collectionIndexes?.[Wy] ?? Wy);
          return
        }
        const Wy = bb.constructor,
          Uy = Wy?.[Symbol.metadata];
        if (!Uy) return;
        const hy = Uy[vb] ?? [];
        for (let fy = 0; fy < hy.length; fy++) {
          const Wy = hy[fy],
            Zy = bb[Uy[Wy].name];
          Zy && yb(Zy[Sy], Wy)
        }
      }
      forEachChildWithCtx(yb, bb) {
        this.forEachChild(((Wy, Uy) => bb(yb, Wy, Uy)))
      }
      forEachLive() {}
      forEachLiveWithCtx() {}
      forEach() {}
    }

    function XW(yb) {
      let bb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : yb;
      var Wy;
      Object.defineProperty(yb, Sy, {
        value: (Wy = bb, new YW(Wy)),
        enumerable: !1,
        writable: !0
      })
    }

    function nW(yb, bb, Wy, Uy, fy, Zy, Py) {
      void 0 !== Py ? Py(bb, Uy, Zy) : "string" === typeof Wy ? bW[Wy]?.(bb, Uy, Zy) : null != Wy[Symbol.metadata] ? (bW.number(bb, Uy[cb], Zy), (fy & hy.ADD) === hy.ADD && yb.tryEncodeTypeId(bb, Wy, Uy.constructor, Zy)) : bW.number(bb, Uy[cb], Zy)
    }
    const uW = function(yb, bb, Wy, Uy, fy, Zy, cb, Py) {
        if (bb[Zy.offset++] = 255 & (Uy | fy), fy === hy.DELETE) return;
        const oy = Wy.encDescriptor,
          By = Wy.ref,
          Ky = By[Vy][Uy] ?? By[oy.names[Uy]];
        nW(yb, bb, oy.types[Uy], Ky, fy, Zy, oy.encoders[Uy])
      },
      rU = function(yb, bb, Wy, Uy, fy, Zy) {
        if (bb[Zy.offset++] = 255 & fy, bW.number(bb, Uy, Zy), fy === hy.DELETE) return;
        const cb = Wy.ref;
        if ((fy & hy.ADD) === hy.ADD) {
          const yb = cb.$indexes.get(Uy);
          bW.string(bb, yb, Zy)
        }
        nW(yb, bb, cb[Ey], cb[ey](Uy), fy, Zy)
      },
      HW = function(yb, bb, Wy, Uy, fy, Zy) {
        if (bb[Zy.offset++] = 255 & fy, bW.number(bb, Uy, Zy), fy === hy.DELETE) return;
        const cb = Wy.ref;
        nW(yb, bb, cb[Ey], cb[ey](Uy), fy, Zy)
      },
      aU = function(yb, bb, Wy, Uy, fy, Zy) {
        const cb = Wy.ref;
        (fy & hy.ADD) === hy.ADD && "function" === typeof cb.set ? rU(yb, bb, Wy, Uy, fy, Zy) : HW(yb, bb, Wy, Uy, fy, Zy)
      },
      FW = function(yb, bb, Wy, Uy, fy, Zy, Py, oy) {
        const By = Wy.refTarget,
          Ky = By[Ey],
          qb = "string" !== typeof Ky;
        let sy;
        if (oy && Wy.isFiltered && qb) {
          const yb = By.tmpItems[Uy];
          if (!yb) return;
          if (sy = yb[cb], fy === hy.DELETE) fy = hy.DELETE_BY_REFID;
          else if ((fy & hy.ADD) === hy.ADD) fy = hy.ADD_BY_REFID;
          else if ((fy & hy.MOVE) === hy.MOVE) return
        } else if (fy === hy.DELETE && qb) {
          const yb = By.tmpItems[Uy];
          if (!yb) return;
          sy = yb[cb], fy = hy.DELETE_BY_REFID
        } else sy = Uy;
        if (bb[Zy.offset++] = 255 & fy, bW.number(bb, sy, Zy), fy === hy.DELETE || fy === hy.DELETE_BY_REFID) return;
        nW(yb, bb, Ky, By[ey](Uy, Py), fy, Zy)
      };

    function pW(yb, bb, Wy, Uy, fy, Zy, Py) {
      const oy = yb.resyncVisited;
      let By = oy.get(yb.currentRefId);
      if (void 0 === By && oy.set(yb.currentRefId, By = new Set), By.add(Uy), void 0 !== fy && Wy === hy.ADD && fy !== Zy) {
        const Wy = fy[cb];
        void 0 !== Wy && (yb.root.removeRef(Wy), Py?.push({
          ref: bb,
          refId: yb.currentRefId,
          op: hy.DELETE,
          dynamicIndex: Uy,
          value: void 0,
          previousValue: fy
        }))
      }
    }

    function LW(yb, bb, Wy, Uy) {
      const hy = bb[cb];
      if (void 0 === hy || Wy.has(hy)) return;
      Wy.add(hy);
      const fy = bb.constructor[Symbol.metadata],
        Zy = fy?.[vb];
      if (void 0 === Zy) return;
      const Py = fy[Xy];
      for (let cb = 0; cb < Zy.length; cb++) {
        const hy = Zy[cb];
        if (void 0 !== Py && Py.includes(hy)) continue;
        const oy = fy[hy],
          By = bb[oy.name];
        By && (ih.is(oy.type) ? LW(yb, By, Wy, Uy) : QW(yb, By, Wy, Uy))
      }
    }

    function QW(yb, bb, Wy, Uy) {
      const fy = bb[ly] ?? bb,
        Zy = fy[cb];
      if (void 0 === Zy || Wy.has(Zy)) return;
      Wy.add(Zy);
      const Py = yb.resyncVisited.get(Zy);
      if (void 0 === Py) return;
      const oy = yb.root;
      fy[sy](Py, ((yb, Wy) => {
        Uy?.push({
          ref: bb,
          refId: Zy,
          op: hy.DELETE,
          dynamicIndex: Wy,
          value: void 0,
          previousValue: yb
        });
        const fy = yb?.[cb];
        void 0 !== fy && oy.removeRef(fy)
      }), (bb => {
        ih.isSchema(bb) && LW(yb, bb, Wy, Uy)
      }))
    }
    const jU = 1,
      DW = 2,
      tU = 3,
      wW = 4,
      kU = 5;

    function NW(yb, bb, Wy, Uy, fy, Zy, Py, oy, By) {
      const Ky = yb.root;
      let ey;
      if ((bb & hy.DELETE) === hy.DELETE) {
        const yb = fy?.[cb];
        void 0 !== yb && Ky.removeRef(yb), bb !== hy.DELETE_AND_ADD && Wy[qb](Uy), ey = void 0
      }
      if (bb === hy.DELETE);
      else if ("string" === typeof Zy) ey = Cb[Zy](Py, oy);
      else if (Hb(Zy)) ey = function(yb, bb, Wy) {
        return Fb(yb, (0, Cb[yb.wire])(bb, Wy))
      }(Zy.quantized, Py, oy);
      else if (ih.is(Zy)) {
        const Wy = Cb.number(Py, oy);
        if (ey = Ky.refs.get(Wy), (bb & hy.ADD) === hy.ADD) {
          const Uy = yb.getInstanceType(Py, oy, Zy);
          ey || (ey = yb.createInstanceOfType(Uy)), Ky.addRef(Wy, ey, ey !== fy || bb === hy.DELETE_AND_ADD && ey === fy)
        }
      } else {
        const Wy = (sy = Object.keys(Zy)[0], Tb[sy]),
          Uy = Cb.number(Py, oy);
        null !== yb.resyncVisited && function(yb, bb) {
          const Wy = yb.resyncVisited;
          Wy.has(bb) || Wy.set(bb, new Set)
        }(yb, Uy);
        const qb = Ky.refs.has(Uy) ? fy || Ky.refs.get(Uy) : Wy.constructor.initializeForDecoder();
        if (ey = qb.clone(!0), ey[Ey] = Object.values(Zy)[0], fy) {
          let yb = fy[cb];
          if (void 0 !== yb && Uy !== yb) {
            (bb & hy.DELETE) !== hy.DELETE && Ky.removeRef(yb);
            const Wy = fy.entries();
            let Uy;
            for (;
              (Uy = Wy.next()) && !Uy.done;) {
              const [bb, Wy] = Uy.value;
              "object" === typeof Wy && (yb = Wy[cb]), By?.push({
                ref: fy,
                refId: yb,
                op: hy.DELETE,
                field: bb,
                value: void 0,
                previousValue: Wy
              })
            }
          }
        }
        Ky.addRef(Uy, ey, qb !== fy || bb === hy.DELETE_AND_ADD && qb === fy)
      }
      var sy;
      return ey
    }
    const zU = function(yb, bb, Wy, Uy, hy) {
        const fy = bb[Wy.offset++],
          Zy = Uy.constructor[Symbol.metadata],
          cb = fy >> 6 << 6,
          Py = fy % (cb || 255),
          oy = Zy[Py];
        if (void 0 === oy) return console.warn("@colyseus/schema: field not defined at", {
          index: Py,
          ref: Uy.constructor.name,
          metadata: Zy
        }), -1;
        const By = !0 === oy.deprecated,
          Ky = By ? void 0 : Uy[ey](Py),
          qb = NW(yb, cb, Uy, Py, Ky, oy.type, bb, Wy, hy);
        By || (null !== qb && void 0 !== qb && (Uy[oy.name] = qb), Ky !== qb && hy?.push({
          ref: Uy,
          refId: yb.currentRefId,
          op: cb,
          field: oy.name,
          value: qb,
          previousValue: Ky
        }))
      },
      IW = function(yb, bb, Wy, Uy, fy) {
        const Zy = Uy[ly] ?? Uy,
          cb = bb[Wy.offset++];
        if (cb === hy.CLEAR) return yb.removeChildRefs(Zy, fy), void Zy.clear();
        const Py = Cb.number(bb, Wy),
          oy = Zy[Ey],
          By = Zy.constructor.COLLECTION_KIND;
        let Ky;
        (cb & hy.ADD) === hy.ADD ? By === jU ? (Ky = Cb.string(bb, Wy), Zy.setIndex(Py, Ky)) : Ky = Py : Ky = Zy.getIndex(Py);
        const qb = Zy[ey](Py),
          sy = NW(yb, cb, Uy, Py, qb, oy, bb, Wy, fy);
        if (null !== yb.resyncVisited && pW(yb, Uy, cb, Ky, qb, sy, fy), null !== sy && void 0 !== sy) switch (By) {
          case jU:
            Zy.$items.set(Ky, sy);
            break;
          case DW:
            Zy.$setAt(Py, sy, null !== yb.resyncVisited && cb === hy.ADD ? hy.REPLACE : cb);
            break;
          case tU:
          case wW:
          case kU:
            Zy.$items.has(Py) || (Zy.$items.set(Py, sy), "number" === typeof Zy.$refId && Py >= Zy.$refId && (Zy.$refId = Py + 1));
            break;
          default:
            console.warn(`@colyseus/schema: missing COLLECTION_KIND on ${Zy.constructor?.name} \u2014 item at index ${Py} was not stored.`)
        }
        qb !== sy && fy?.push({
          ref: Uy,
          refId: yb.currentRefId,
          op: cb,
          dynamicIndex: Ky,
          value: sy,
          previousValue: qb
        })
      },
      xU = function(yb, bb, Wy, Uy, fy) {
        const Zy = Uy[ly] ?? Uy;
        let cb, Py = bb[Wy.offset++];
        if (Py === hy.CLEAR) return yb.removeChildRefs(Zy, fy), void Zy.clear();
        if (Py === hy.REVERSE) return void Zy.items.reverse();
        if (Py === hy.DELETE_BY_REFID) {
          const Py = Cb.number(bb, Wy),
            oy = yb.root.refs.get(Py);
          if (void 0 === oy) return;
          if (yb.root.removeRef(Py), cb = Zy.findIndex((yb => yb === oy)), -1 === cb) return;
          return Zy[qb](cb), void fy?.push({
            ref: Uy,
            refId: yb.currentRefId,
            op: hy.DELETE,
            dynamicIndex: cb,
            value: void 0,
            previousValue: oy
          })
        }
        if (Py === hy.ADD_BY_REFID) {
          const Uy = Cb.number(bb, Wy),
            hy = yb.root.refs.get(Uy);
          hy && (cb = Zy.findIndex((yb => yb === hy))), -1 !== cb && void 0 !== cb || (cb = Zy.length)
        } else cb = Cb.number(bb, Wy);
        const oy = Zy[Ey];
        let By = cb;
        const Ky = Zy.items[cb],
          ey = NW(yb, Py, Uy, cb, Ky, oy, bb, Wy, fy);
        null !== yb.resyncVisited && pW(yb, Uy, Py, cb, Ky, ey, fy), null !== ey && void 0 !== ey && ey !== Ky && Zy.$setAt(cb, ey, null !== yb.resyncVisited && Py === hy.ADD ? hy.REPLACE : Py), Ky !== ey && fy?.push({
          ref: Uy,
          refId: yb.currentRefId,
          op: Py,
          dynamicIndex: By,
          value: ey,
          previousValue: Ky
        })
      };
    class AW extends Error {}

    function dW(yb, bb, Wy, Uy) {
      if (!(yb instanceof bb)) throw new AW(`a '${bb.name}' was expected, but '${yb&&yb.constructor.name}' was provided in ${Wy.constructor.name}#${Uy}`)
    }
    const yh = (yb, bb) => {
        const Wy = yb.toString(),
          Uy = bb.toString();
        return Wy < Uy ? -1 : Wy > Uy ? 1 : 0
      },
      bh = {
        get: (yb, bb) => "symbol" === typeof bb || isNaN(bb) ? Reflect.get(yb, bb) : yb.items[bb],
        set: (yb, bb, Wy) => {
          if ("symbol" !== typeof bb && !isNaN(bb)) {
            if (void 0 === Wy || null === Wy) yb.$deleteAt(bb);
            else {
              let Uy;
              if (Wy[Sy]) {
                dW(Wy, yb[Ey], yb, bb);
                const fy = yb.items[bb];
                yb.isMovingItems ? (Uy = yb.$wireIndex(Number(bb)), void 0 !== fy ? Wy[Sy].isNew ? yb[Sy].indexedOperation(Uy, hy.MOVE_AND_ADD) : (yb[Sy].getChange(Uy) & hy.DELETE) === hy.DELETE ? yb[Sy].indexedOperation(Uy, hy.DELETE_AND_MOVE) : yb[Sy].indexedOperation(Uy, hy.MOVE) : Wy[Sy].isNew && yb[Sy].indexedOperation(Uy, hy.ADD), Wy[Sy].setParent(yb, yb[Sy].root, Uy)) : Uy = yb.$changeAt(Number(bb), Wy), void 0 !== fy && fy[Sy].root?.remove(fy[Sy])
              } else Uy = yb.$changeAt(Number(bb), Wy);
              yb.items[bb] = Wy, void 0 !== Uy && (yb.tmpItems[Uy] = Wy)
            }
            return !0
          }
          return Reflect.set(yb, bb, Wy)
        },
        deleteProperty: (yb, bb) => ("number" === typeof bb ? yb.$deleteAt(bb) : delete yb[bb], !0),
        has: (yb, bb) => "symbol" === typeof bb || isNaN(Number(bb)) ? Reflect.has(yb, bb) : Reflect.has(yb.items, bb)
      };
    class WU {
      [Sy];
      [cb];
      [ly];
      [Ey];
      items = [];
      tmpItems = [];
      deletedIndexes = [];
      isMovingItems = !1;
      _needsCompaction = !1;
      static[oy] = FW;
      static[By] = xU;
      static COLLECTION_KIND = DW;
      static[Ky](yb, bb, Wy) {
        if (!Wy) return !0;
        const Uy = yb[ly] ?? yb;
        return "string" === typeof Uy[Ey] || Wy.isChangeTreeVisible(Uy.tmpItems[bb]?.[Sy])
      }
      static is(yb) {
        return Array.isArray(yb) || void 0 !== yb.array
      }
      static from(yb) {
        return new WU(...Array.from(yb))
      }
      constructor() {
        this[Ey] = void 0, this[ly] = this;
        const yb = new Proxy(this, bh);
        return Object.defineProperty(this, Sy, {
          value: new MW(yb, this),
          enumerable: !1,
          writable: !0
        }), arguments.length > 0 && this.push(...arguments), yb
      }
      static initializeForDecoder() {
        const yb = Object.create(WU.prototype);
        yb.items = [], yb.isMovingItems = !1, yb._needsCompaction = !1, yb[Ey] = void 0, yb[ly] = yb;
        const bb = new Proxy(yb, bh);
        return XW(yb, bb), bb
      }
      set length(yb) {
        0 === yb ? this.clear() : yb < this.items.length ? this.splice(yb, this.length - yb) : console.warn("ArraySchema: can't set .length to a higher value than its length.")
      }
      get length() {
        return this.items.length
      }
      pauseTracking() {
        this[Sy].pause()
      }
      resumeTracking() {
        this[Sy].resume()
      }
      untracked(yb) {
        return this[Sy].untracked(yb)
      }
      get isTrackingPaused() {
        return this[Sy].paused
      }
      push() {
        const yb = this[ly],
          bb = yb.items,
          Wy = yb.tmpItems,
          Uy = yb[Sy],
          fy = yb[Ey];
        let Zy = Wy.length;
        for (let cb = 0, Py = arguments.length; cb < Py; cb++, Zy++) {
          const Py = cb < 0 || arguments.length <= cb ? void 0 : arguments[cb];
          if (void 0 === Py || null === Py) return;
          "object" === typeof Py && fy && dW(Py, fy, yb, cb), Uy.indexedOperation(Zy, hy.ADD), bb.push(Py), Wy.push(Py), Py[Sy]?.setParent(this, Uy.root, Zy)
        }
        return Zy
      }
      pop() {
        const yb = this[ly],
          bb = yb.tmpItems,
          Wy = yb.deletedIndexes;
        let Uy = -1;
        for (let fy = bb.length - 1; fy >= 0; fy--)
          if (!0 !== Wy[fy]) {
            Uy = fy;
            break
          } if (Uy < 0) return;
        const hy = yb.$isUnsentAdd(Uy);
        return yb[Sy].delete(Uy), hy ? yb.$cancelAdd(Uy) : Wy[Uy] = !0, yb.items.pop()
      }
      at(yb) {
        return yb < 0 && (yb += this.length), this.items[yb]
      }
      $wireIndex(yb) {
        const bb = this.deletedIndexes;
        if (0 === bb.length) return yb;
        const Wy = this.tmpItems;
        let Uy = 0;
        for (let hy = 0; hy < Wy.length; hy++)
          if (!0 !== bb[hy]) {
            if (Uy === yb) return hy;
            Uy++
          } return Wy.length + (yb - Uy)
      }
      $isUnsentAdd(yb) {
        const bb = this[Sy];
        return 0 === (576 & bb.flags) && !bb.paused && "string" !== typeof this[Ey] && bb.operationAt(yb) === hy.ADD
      }
      $cancelAdd(yb) {
        let bb = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        const Wy = this[Sy],
          Uy = this.tmpItems[yb];
        this.tmpItems.splice(yb, 1), this.deletedIndexes.length > 0 && this.deletedIndexes.splice(yb, 1), Wy.removeAt(yb, 1);
        const hy = Uy?.[Sy];
        void 0 !== hy && void 0 === hy.root && hy.removeParent(this), bb && this.$reindexChildren(yb)
      }
      $reindexChildren(yb, bb) {
        if (!this[Sy].hasFilteredFields) return;
        if ("string" === typeof this[Ey]) return;
        const Wy = this.tmpItems,
          Uy = Wy.length;
        if (void 0 !== bb)
          for (; yb < Uy && Wy[yb] === bb[yb];) yb++;
        for (let hy = yb; hy < Uy; hy++) Wy[hy]?.[Sy]?.setParentIndex(this, hy)
      }
      $changeAt(yb, bb) {
        if (void 0 === bb || null === bb) return void console.error("ArraySchema items cannot be null nor undefined; Use `splice(index, 1)` instead.");
        if (this.items[yb] === bb) return;
        const Wy = void 0 !== this.items[yb] ? "object" === typeof bb ? hy.DELETE_AND_ADD : hy.REPLACE : hy.ADD,
          Uy = this.$wireIndex(yb),
          fy = this[Sy];
        return fy.change(Uy, Wy), bb[Sy]?.setParent(this, fy.root, Uy), Uy
      }
      $deleteAt(yb, bb) {
        this[Sy].delete(this.$wireIndex(yb), bb)
      }
      $setAt(yb, bb, Wy) {
        Wy === hy.ADD && void 0 !== this.items[yb] ? this.items.splice(yb, 0, bb) : Wy === hy.DELETE_AND_MOVE ? (this.items.splice(yb, 1), this.items[yb] = bb) : (yb > this.items.length && (this._needsCompaction = !0), this.items[yb] = bb)
      }
      clear() {
        const yb = this[ly];
        if (0 === yb.items.length) return;
        const bb = yb[Sy];
        bb.forEachChild(((yb, Wy) => {
          bb.root?.remove(yb)
        })), bb.discard(), bb.operation(hy.CLEAR), yb.items.length = 0, yb.tmpItems.length = 0
      } [Cy]() {
        const yb = this[ly] ?? this,
          bb = yb[Sy];
        if (bb.isStreamCollection) throw new Error("@colyseus/schema: cannot reset a streamed ArraySchema (pooling not supported).");
        const Wy = yb.items;
        for (let Uy = 0; Uy < Wy.length; Uy++) Wy[Uy]?.[Cy]?.();
        yb.items.length = 0, yb.tmpItems.length = 0, yb.deletedIndexes.length = 0, bb.recycle(), yb[cb] = void 0
      }
      concat() {
        return new WU(...this.items.concat(...arguments))
      }
      join(yb) {
        return this.items.join(yb)
      }
      reverse() {
        const yb = this[ly],
          bb = yb[Sy];
        if (bb.has() || yb.deletedIndexes.length > 0) {
          const bb = yb.items.slice().reverse();
          return this.clear(), this.push(...bb), this
        }
        return bb.operation(hy.REVERSE), yb.items.reverse(), yb.tmpItems.reverse(), yb.$reindexChildren(0), this
      }
      shift() {
        const yb = this[ly],
          bb = yb.items;
        if (0 === bb.length) return;
        const Wy = yb[Sy],
          Uy = yb.deletedIndexes;
        let fy = 0;
        for (; !0 === Uy[fy];) fy++;
        const Zy = yb.$isUnsentAdd(fy);
        return Wy.delete(fy, hy.DELETE), Zy ? yb.$cancelAdd(fy) : Uy[fy] = !0, bb.shift()
      }
      slice(yb, bb) {
        const Wy = new WU;
        return Wy.push(...this.items.slice(yb, bb)), Wy
      }
      sort() {
        let yb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : yh;
        const bb = this[ly];
        bb.isMovingItems = !0;
        const Wy = bb[Sy];
        return bb.items.sort(yb).forEach(((yb, bb) => Wy.change(bb, hy.REPLACE))), bb.tmpItems.sort(yb), bb.$reindexChildren(0), bb.isMovingItems = !1, this
      }
      splice(yb, bb) {
        const Wy = this[ly],
          Uy = Wy[Sy],
          fy = Wy.items,
          Zy = Wy.tmpItems,
          cb = Wy.deletedIndexes,
          Py = fy.length,
          oy = Zy.length;
        for (var By = arguments.length, Ky = new Array(By > 2 ? By - 2 : 0), ey = 2; ey < By; ey++) Ky[ey - 2] = arguments[ey];
        const qb = Ky.length,
          sy = [];
        for (let hy = 0; hy < oy; hy++) !0 !== cb[hy] && sy.push(hy);
        let Ey;
        if (Py > yb) {
          void 0 === bb && (bb = Py - yb);
          for (let fy = yb; fy < yb + bb; fy++) {
            const yb = sy[fy],
              bb = Wy.$isUnsentAdd(yb);
            Uy.delete(yb, hy.DELETE), bb ? (Ey ??= []).push(yb) : cb[yb] = !0
          }
        } else bb = 0;
        if (qb > 0) {
          const fy = sy[yb] ?? Py,
            oy = Math.min(qb, bb);
          for (let yb = 0; yb < oy; yb++) {
            const bb = fy + yb;
            let Wy;
            const Py = void 0 !== Ey ? Ey.indexOf(bb) : -1; - 1 !== Py ? (Ey.splice(Py, 1), Wy = hy.ADD) : Wy = cb[bb] ? hy.DELETE_AND_ADD : hy.ADD, Uy.indexedOperation(bb, Wy), Zy[bb] = Ky[yb], cb[bb] = !1, Ky[yb][Sy]?.setParent(this, Uy.root, bb)
          }
          const By = qb - oy;
          if (By > 0) {
            const yb = fy + oy;
            Uy.insertAt(yb, By);
            for (let bb = 0; bb < By; bb++) Ky[oy + bb][Sy]?.setParent(this, Uy.root, yb + bb);
            cb.length > 0 && cb.splice(yb, 0, ...new Array(By).fill(!1)), Zy.splice(yb, 0, ...Ky.slice(oy)), Wy.$reindexChildren(yb + By)
          }
        }
        if (void 0 !== Ey && Ey.length > 0) {
          for (let yb = Ey.length - 1; yb >= 0; yb--) Wy.$cancelAdd(Ey[yb], !1);
          Wy.$reindexChildren(Ey[0])
        }
        return Uy.root?.enqueueChangeTree(Uy), fy.splice(yb, bb, ...Ky)
      }
      unshift() {
        const yb = this[ly],
          bb = yb[Sy];
        bb.unshift(arguments.length);
        for (let Uy = 0; Uy < arguments.length; Uy++)(Uy < 0 || arguments.length <= Uy ? void 0 : arguments[Uy])?.[Sy]?.setParent(this, bb.root, Uy);
        const Wy = yb.deletedIndexes;
        return Wy.length > 0 && Wy.unshift(...new Array(arguments.length).fill(!1)), yb.tmpItems.unshift(...arguments), yb.$reindexChildren(arguments.length), yb.items.unshift(...arguments)
      }
      indexOf(yb, bb) {
        return this.items.indexOf(yb, bb)
      }
      lastIndexOf(yb) {
        let bb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.length - 1;
        return this.items.lastIndexOf(yb, bb)
      }
      every(yb, bb) {
        return this.items.every(yb, bb)
      }
      some(yb, bb) {
        return this.items.some(yb, bb)
      }
      forEach(yb, bb) {
        return this.items.forEach(yb, bb)
      }
      map(yb, bb) {
        return this.items.map(yb, bb)
      }
      filter(yb, bb) {
        return this.items.filter(yb, bb)
      }
      reduce(yb, bb) {
        return this.items.reduce.apply(this.items, arguments)
      }
      reduceRight(yb, bb) {
        return this.items.reduceRight.apply(this.items, arguments)
      }
      find(yb, bb) {
        return this.items.find(yb, bb)
      }
      findIndex(yb, bb) {
        return this.items.findIndex(yb, bb)
      }
      fill(yb, bb, Wy) {
        throw new Error("ArraySchema#fill() not implemented")
      }
      copyWithin(yb, bb, Wy) {
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
        return WU
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
      includes(yb, bb) {
        return this.items.includes(yb, bb)
      }
      flatMap(yb, bb) {
        throw new Error("ArraySchema#flatMap() is not supported.")
      }
      flat(yb) {
        throw new Error("ArraySchema#flat() is not supported.")
      }
      findLast() {
        return this.items.findLast.apply(this.items, arguments)
      }
      findLastIndex() {
        for (var yb = arguments.length, bb = new Array(yb), Wy = 0; Wy < yb; Wy++) bb[Wy] = arguments[Wy];
        return this.items.findLastIndex.apply(this.items, arguments)
      }
      with(yb, bb) {
        const Wy = this.items.slice();
        return yb < 0 && (yb += this.length), Wy[yb] = bb, new WU(...Wy)
      }
      toReversed() {
        return this.items.slice().reverse()
      }
      toSorted(yb) {
        return this.items.slice().sort(yb)
      }
      toSpliced(yb, bb) {
        for (var Wy = arguments.length, Uy = new Array(Wy > 2 ? Wy - 2 : 0), hy = 2; hy < Wy; hy++) Uy[hy - 2] = arguments[hy];
        const fy = this.items.slice();
        return fy.splice.apply(fy, arguments), fy
      }
      shuffle() {
        return this.move((yb => {
          let bb = this.items.length;
          for (; 0 != bb;) {
            let yb = Math.floor(Math.random() * bb);
            bb--, [this[bb], this[yb]] = [this[yb], this[bb]]
          }
        }))
      }
      move(yb) {
        return this.isMovingItems = !0, yb(this), this.isMovingItems = !1, this
      } [ey](yb) {
        let bb = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        const Wy = this[ly] ?? this;
        return bb || Wy.deletedIndexes[yb] ? Wy.items[yb] : Wy.tmpItems[yb] || Wy.items[yb]
      } [qb](yb) {
        const bb = this[ly] ?? this;
        bb.items[yb] = void 0, bb._needsCompaction = !0
      } [mb]() {
        const yb = this.tmpItems;
        this.tmpItems = this.items.slice(), this.deletedIndexes.length > 0 && (this.$reindexChildren(0, yb), this.deletedIndexes.length = 0)
      } [Ty]() {
        const yb = this[ly] ?? this;
        yb._needsCompaction && (yb._needsCompaction = !1, yb.items = yb.items.filter((yb => void 0 !== yb)))
      } [sy](yb, bb, Wy) {
        const Uy = this[ly] ?? this,
          hy = Uy.items;
        let fy = !1;
        for (let Zy = 0; Zy < hy.length; Zy++) {
          const cb = hy[Zy];
          yb.has(Zy) ? Wy(cb) : (fy = !0, bb(cb, Zy), Uy[qb](Zy))
        }
        fy && Uy[Ty]()
      }
      toArray() {
        return this.items.slice(0)
      }
      toJSON() {
        return this.toArray().map((yb => "function" === typeof yb.toJSON ? yb.toJSON() : yb))
      }
      clone(yb) {
        let bb;
        return yb ? (bb = new WU, bb.push(...this.items)) : bb = new WU(...this.map((yb => yb[Sy] ? yb.clone() : yb))), bb
      }
    }
    Jb("array", {
      constructor: WU
    });
    class UU {
      keyByIndex = new Map;
      indexByKey = Object.create(null);
      nextIndex = 0;
      snapshots;
      indexOf(yb) {
        const bb = this.indexByKey[yb];
        return void 0 === bb ? void 0 : bb
      }
      assign(yb) {
        const bb = this.nextIndex++;
        return this.indexByKey[yb] = bb, this.keyByIndex.set(bb, yb), bb
      }
      snapshot(yb, bb) {
        (this.snapshots ??= new Map).set(yb, bb)
      }
      forgetSnapshot(yb) {
        this.snapshots?.delete(yb)
      }
      snapshotAt(yb) {
        return this.snapshots?.get(yb)
      }
      setIndex(yb, bb) {
        this.keyByIndex.set(yb, bb), this.indexByKey[bb] = yb
      }
      keyOf(yb) {
        return this.keyByIndex.get(yb)
      }
      cleanupAfterEncode() {
        if (void 0 !== this.snapshots) {
          for (const [yb] of this.snapshots) {
            const bb = this.keyByIndex.get(yb);
            void 0 !== bb && (delete this.indexByKey[bb], this.keyByIndex.delete(yb))
          }
          this.snapshots.clear()
        }
      }
      reset() {
        this.indexByKey = Object.create(null), this.keyByIndex.clear(), this.snapshots?.clear(), this.nextIndex = 0
      }
    }
    class hU {
      [Sy];
      [cb];
      childType;
      [Ey];
      $items = new Map;
      journal = new UU;
      _stream;
      get maxPerTick() {
        return this._stream?.maxPerTick ?? 32
      }
      set maxPerTick(yb) {
        (this._stream ??= Ob()).maxPerTick = yb
      }
      get priority() {
        return this._stream?.priority
      }
      set priority(yb) {
        (this._stream ??= Ob()).priority = yb
      }
      get $indexes() {
        return this.journal.keyByIndex
      }
      get _collectionIndexes() {
        return this.journal.indexByKey
      }
      static[oy] = rU;
      static[By] = IW;
      static COLLECTION_KIND = jU;
      static[Ky](yb, bb, Wy) {
        if (!Wy || "string" === typeof yb[Ey]) return !0;
        const Uy = yb[ey](bb) ?? yb.journal.snapshotAt(bb);
        return Wy.isChangeTreeVisible(Uy[Sy])
      }
      static is(yb) {
        return void 0 !== yb.map
      }
      constructor(yb) {
        if (Object.defineProperty(this, Sy, {
            value: new MW(this),
            enumerable: !1,
            writable: !0
          }), this[Ey] = void 0, yb)
          if (yb instanceof Map || yb instanceof hU) yb.forEach(((yb, bb) => this.set(bb, yb)));
          else
            for (const bb in yb) this.set(bb, yb[bb])
      }
      static initializeForDecoder() {
        const yb = Object.create(hU.prototype);
        return yb.$items = new Map, yb.journal = new UU, yb[Ey] = void 0, XW(yb), yb
      } [Symbol.iterator]() {
        return this.$items[Symbol.iterator]()
      }
      get[Symbol.toStringTag]() {
        return this.$items[Symbol.toStringTag]
      }
      static get[Symbol.species]() {
        return hU
      }
      set(yb, bb) {
        if (void 0 === bb || null === bb) throw new Error(`MapSchema#set('${yb}', ${bb}): trying to set ${bb} value on '${yb}'.`);
        "object" === typeof bb && this[Ey] && dW(bb, this[Ey], this, yb), yb = yb.toString();
        const Wy = this[Sy],
          Uy = void 0 !== bb[Sy],
          fy = this.journal;
        let Zy, cb = fy.indexOf(yb);
        if (void 0 !== cb) {
          Zy = hy.REPLACE;
          const Wy = this.$items.get(yb);
          if (Wy === bb) return;
          Uy && (Zy = hy.DELETE_AND_ADD, void 0 !== Wy && Wy[Sy].root?.remove(Wy[Sy])), void 0 !== fy.snapshotAt(cb) && fy.forgetSnapshot(cb)
        } else cb = fy.assign(yb), Zy = hy.ADD;
        return this.$items.set(yb, bb), Zy === hy.ADD && Wy.isStreamCollection ? void 0 !== Wy.root && vW(this, Wy.root, cb) : Wy.change(cb, Zy), Uy && bb[Sy].setParent(this, Wy.root, cb), this
      }
      get(yb) {
        return this.$items.get(yb)
      }
      getOrInsert(yb, bb) {
        return this.$items.has(yb) ? this.$items.get(yb) : (this.set(yb, bb), bb)
      }
      getOrInsertComputed(yb, bb) {
        if (this.$items.has(yb)) return this.$items.get(yb);
        const Wy = bb(yb);
        return this.set(yb, Wy), Wy
      }
      delete(yb) {
        if (!this.$items.has(yb)) return !1;
        const bb = this.journal.indexOf(yb),
          Wy = this.$items.get(yb),
          Uy = this[Sy];
        if (Uy.isStreamCollection) {
          const hy = Uy.root;
          let fy = !1;
          return void 0 !== hy && (fy = iW(this, hy, this[cb], bb)), void 0 !== Wy?.[Sy] && hy?.remove(Wy[Sy]), this.$items.delete(yb), fy || this.journal.snapshot(bb, Wy), !0
        }
        return this.journal.snapshot(bb, Wy), Uy.delete(bb), this.$items.delete(yb)
      }
      clear() {
        const yb = this[Sy];
        yb.discard(), yb.forEachChild(((bb, Wy) => {
          yb.root?.remove(bb)
        })), this.journal.reset(), this.$items.clear(), yb.operation(hy.CLEAR)
      } [Cy]() {
        const yb = this[Sy];
        if (yb.isStreamCollection) throw new Error("@colyseus/schema: cannot reset a streamed MapSchema (pooling not supported).");
        this.$items.forEach((yb => yb?.[Cy]?.())), this.$items.clear(), this.journal.reset(), yb.recycle(), this[cb] = void 0
      }
      has(yb) {
        return this.$items.has(yb)
      }
      forEach(yb) {
        this.$items.forEach(yb)
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
        this[Sy].pause()
      }
      resumeTracking() {
        this[Sy].resume()
      }
      untracked(yb) {
        return this[Sy].untracked(yb)
      }
      get isTrackingPaused() {
        return this[Sy].paused
      }
      setIndex(yb, bb) {
        this.journal.setIndex(yb, bb)
      }
      getIndex(yb) {
        return this.journal.keyOf(yb)
      } [ey](yb) {
        const bb = this.journal.keyOf(yb);
        return void 0 !== bb ? this.$items.get(bb) : void 0
      } [qb](yb) {
        const bb = this.journal.keyOf(yb);
        void 0 !== bb && (this.$items.delete(bb), this.journal.keyByIndex.delete(yb))
      } [sy](yb, bb, Wy) {
        let Uy = null;
        if (this.$items.forEach(((hy, fy) => {
            yb.has(fy) ? Wy(hy) : ((Uy ??= new Set).add(fy), bb(hy, fy))
          })), null !== Uy) {
          Uy.forEach((yb => {
            this.$items.delete(yb), delete this.journal.indexByKey[yb]
          }));
          const yb = [];
          this.journal.keyByIndex.forEach(((bb, Wy) => {
            Uy.has(bb) && yb.push(Wy)
          }));
          for (let bb = 0; bb < yb.length; bb++) this.journal.keyByIndex.delete(yb[bb])
        }
      } [mb]() {
        this.journal.cleanupAfterEncode()
      }
      _dropView(yb) {
        nb(this, yb)
      }
      _unregister() {}
      toJSON() {
        return Object.fromEntries(Array.from(this, (yb => {
          let [bb, Wy] = yb;
          return [bb, "function" === typeof Wy.toJSON ? Wy.toJSON() : Wy]
        })))
      }
      clone(yb) {
        let bb;
        return yb ? bb = Object.assign(new hU, this) : (bb = new hU, this.forEach(((yb, Wy) => {
          yb[Sy] ? bb.set(Wy, yb.clone()) : bb.set(Wy, yb)
        }))), bb
      }
    }
    Jb("map", {
      constructor: hU
    });
    class fU {
      [Sy];
      [cb];
      [Ey];
      $items = new Map;
      deletedItems = {};
      $refId = 0;
      _stream;
      get maxPerTick() {
        return this._stream?.maxPerTick ?? 32
      }
      set maxPerTick(yb) {
        (this._stream ??= Ob()).maxPerTick = yb
      }
      get priority() {
        return this._stream?.priority
      }
      set priority(yb) {
        (this._stream ??= Ob()).priority = yb
      }
      static[oy] = HW;
      static[By] = IW;
      static COLLECTION_KIND = wW;
      static[Ky](yb, bb, Wy) {
        return !Wy || "string" === typeof yb[Ey] || Wy.isChangeTreeVisible((yb[ey](bb) ?? yb.deletedItems[bb])[Sy])
      }
      static is(yb) {
        return void 0 !== yb.collection
      }
      constructor(yb) {
        Object.defineProperty(this, Sy, {
          value: new MW(this),
          enumerable: !1,
          writable: !0
        }), this[Ey] = void 0, yb && yb.forEach((yb => this.add(yb)))
      }
      static initializeForDecoder() {
        const yb = Object.create(fU.prototype);
        return yb.$items = new Map, yb.deletedItems = {}, yb.$refId = 0, yb[Ey] = void 0, XW(yb), yb
      }
      add(yb) {
        const bb = this.$refId++,
          Wy = this[Sy];
        return this.$items.set(bb, yb), Wy.isStreamCollection ? void 0 !== Wy.root && vW(this, Wy.root, bb) : Wy.change(bb), void 0 !== yb[Sy] && yb[Sy].setParent(this, Wy.root, bb), bb
      }
      at(yb) {
        const bb = Array.from(this.$items.keys())[yb];
        return this.$items.get(bb)
      }
      entries() {
        return this.$items.entries()
      }
      delete(yb) {
        const bb = this.$items.entries();
        let Wy, Uy;
        for (;
          (Uy = bb.next()) && !Uy.done;)
          if (yb === Uy.value[1]) {
            Wy = Uy.value[0];
            break
          } if (void 0 === Wy) return !1;
        const hy = this[Sy];
        if (hy.isStreamCollection) {
          const yb = hy.root,
            bb = this.$items.get(Wy);
          return void 0 !== yb && iW(this, yb, this[cb], Wy), void 0 !== bb?.[Sy] && yb?.remove(bb[Sy]), this.deletedItems[Wy] = bb, this.$items.delete(Wy)
        }
        return this.deletedItems[Wy] = hy.delete(Wy), this.$items.delete(Wy)
      }
      clear() {
        const yb = this[Sy];
        yb.discard(), yb.forEachChild(((bb, Wy) => {
          yb.root?.remove(bb)
        })), this.$items.clear(), yb.operation(hy.CLEAR)
      } [Cy]() {
        const yb = this[Sy];
        if (yb.isStreamCollection) throw new Error("@colyseus/schema: cannot reset a streamed CollectionSchema (pooling not supported).");
        this.$items.forEach((yb => yb?.[Cy]?.())), this.$items.clear(), this.deletedItems = {}, this.$refId = 0, yb.recycle(), this[cb] = void 0
      }
      has(yb) {
        return Array.from(this.$items.values()).some((bb => bb === yb))
      }
      forEach(yb) {
        this.$items.forEach(((bb, Wy, Uy) => yb(bb, Wy, this)))
      }
      values() {
        return this.$items.values()
      }
      get size() {
        return this.$items.size
      }
      pauseTracking() {
        this[Sy].pause()
      }
      resumeTracking() {
        this[Sy].resume()
      }
      untracked(yb) {
        return this[Sy].untracked(yb)
      }
      get isTrackingPaused() {
        return this[Sy].paused
      } [Symbol.iterator]() {
        return this.$items.values()
      }
      setIndex(yb, bb) {}
      getIndex(yb) {
        return yb
      } [ey](yb) {
        return this.$items.get(yb)
      } [qb](yb) {
        this.$items.delete(yb)
      } [sy](yb, bb, Wy) {
        let Uy = null;
        if (this.$items.forEach(((hy, fy) => {
            yb.has(fy) ? Wy(hy) : ((Uy ??= []).push(fy), bb(hy, fy))
          })), null !== Uy)
          for (let hy = 0; hy < Uy.length; hy++) this[qb](Uy[hy])
      } [mb]() {
        for (const yb in this.deletedItems) delete this.deletedItems[yb]
      }
      _dropView(yb) {
        nb(this, yb)
      }
      _unregister() {}
      toArray() {
        return Array.from(this.$items.values())
      }
      toJSON() {
        const yb = [];
        return this.forEach(((bb, Wy) => {
          yb.push("function" === typeof bb.toJSON ? bb.toJSON() : bb)
        })), yb
      }
      clone(yb) {
        let bb;
        return yb ? bb = Object.assign(new fU, this) : (bb = new fU, this.forEach((yb => {
          yb[Sy] ? bb.add(yb.clone()) : bb.add(yb)
        }))), bb
      }
    }
    Jb("collection", {
      constructor: fU
    });
    class ZU {
      [Sy];
      [cb];
      [Ey];
      $items = new Map;
      deletedItems = {};
      $refId = 0;
      _stream;
      get maxPerTick() {
        return this._stream?.maxPerTick ?? 32
      }
      set maxPerTick(yb) {
        (this._stream ??= Ob()).maxPerTick = yb
      }
      get priority() {
        return this._stream?.priority
      }
      set priority(yb) {
        (this._stream ??= Ob()).priority = yb
      }
      static[oy] = HW;
      static[By] = IW;
      static COLLECTION_KIND = tU;
      static[Ky](yb, bb, Wy) {
        return !Wy || "string" === typeof yb[Ey] || Wy.isVisible((yb[ey](bb) ?? yb.deletedItems[bb])[Sy])
      }
      static is(yb) {
        return void 0 !== yb.set
      }
      constructor(yb) {
        Object.defineProperty(this, Sy, {
          value: new MW(this),
          enumerable: !1,
          writable: !0
        }), this[Ey] = void 0, yb && yb.forEach((yb => this.add(yb)))
      }
      static initializeForDecoder() {
        const yb = Object.create(ZU.prototype);
        return yb.$items = new Map, yb.deletedItems = {}, yb.$refId = 0, yb[Ey] = void 0, XW(yb), yb
      }
      add(yb) {
        if (this.has(yb)) return !1;
        const bb = this.$refId++,
          Wy = this[Sy];
        return this.$items.set(bb, yb), Wy.isStreamCollection ? void 0 !== Wy.root && vW(this, Wy.root, bb) : Wy.change(bb, hy.ADD), void 0 !== yb[Sy] && yb[Sy].setParent(this, Wy.root, bb), bb
      }
      entries() {
        return this.$items.entries()
      }
      delete(yb) {
        const bb = this.$items.entries();
        let Wy, Uy;
        for (;
          (Uy = bb.next()) && !Uy.done;)
          if (yb === Uy.value[1]) {
            Wy = Uy.value[0];
            break
          } if (void 0 === Wy) return !1;
        const hy = this[Sy];
        if (hy.isStreamCollection) {
          const yb = hy.root,
            bb = this.$items.get(Wy);
          return void 0 !== yb && iW(this, yb, this[cb], Wy), void 0 !== bb?.[Sy] && yb?.remove(bb[Sy]), this.deletedItems[Wy] = bb, this.$items.delete(Wy)
        }
        return this.deletedItems[Wy] = hy.delete(Wy), this.$items.delete(Wy)
      }
      clear() {
        const yb = this[Sy];
        yb.discard(), this.$items.clear(), yb.operation(hy.CLEAR)
      } [Cy]() {
        const yb = this[Sy];
        if (yb.isStreamCollection) throw new Error("@colyseus/schema: cannot reset a streamed SetSchema (pooling not supported).");
        this.$items.forEach((yb => yb?.[Cy]?.())), this.$items.clear(), this.deletedItems = {}, this.$refId = 0, yb.recycle(), this[cb] = void 0
      }
      has(yb) {
        const bb = this.$items.values();
        let Wy, Uy = !1;
        for (;
          (Wy = bb.next()) && !Wy.done;)
          if (yb === Wy.value) {
            Uy = !0;
            break
          } return Uy
      }
      forEach(yb) {
        this.$items.forEach(((bb, Wy, Uy) => yb(bb, Wy, this)))
      }
      values() {
        return this.$items.values()
      }
      get size() {
        return this.$items.size
      }
      pauseTracking() {
        this[Sy].pause()
      }
      resumeTracking() {
        this[Sy].resume()
      }
      untracked(yb) {
        return this[Sy].untracked(yb)
      }
      get isTrackingPaused() {
        return this[Sy].paused
      } [Symbol.iterator]() {
        return this.$items.values()
      }
      setIndex(yb, bb) {}
      getIndex(yb) {
        return yb
      } [ey](yb) {
        return this.$items.get(yb)
      } [qb](yb) {
        this.$items.delete(yb)
      } [sy](yb, bb, Wy) {
        let Uy = null;
        if (this.$items.forEach(((hy, fy) => {
            yb.has(fy) ? Wy(hy) : ((Uy ??= []).push(fy), bb(hy, fy))
          })), null !== Uy)
          for (let hy = 0; hy < Uy.length; hy++) this[qb](Uy[hy])
      } [mb]() {
        for (const yb in this.deletedItems) delete this.deletedItems[yb]
      }
      _dropView(yb) {
        nb(this, yb)
      }
      _unregister() {}
      toArray() {
        return Array.from(this.$items.values())
      }
      toJSON() {
        const yb = [];
        return this.forEach(((bb, Wy) => {
          yb.push("function" === typeof bb.toJSON ? bb.toJSON() : bb)
        })), yb
      }
      clone(yb) {
        let bb;
        return yb ? bb = Object.assign(new ZU, this) : (bb = new ZU, this.forEach((yb => {
          yb[Sy] ? bb.add(yb.clone()) : bb.add(yb)
        }))), bb
      }
    }
    Jb("set", {
      constructor: ZU
    });
    class ch {
      [Sy];
      [cb];
      [Ey];
      $items = new Map;
      $nextPosition = 0;
      _itemIndex = new Map;
      _stream;
      get maxPerTick() {
        return this._stream?.maxPerTick ?? 32
      }
      set maxPerTick(yb) {
        (this._stream ??= Ob()).maxPerTick = yb
      }
      get priority() {
        return this._stream?.priority
      }
      set priority(yb) {
        (this._stream ??= Ob()).priority = yb
      }
      static $isStream = !0;
      static[oy] = HW;
      static[By] = IW;
      static COLLECTION_KIND = kU;
      static[Ky](yb, bb, Wy) {
        if (!Wy) return !0;
        const Uy = yb[ey](bb);
        return void 0 !== Uy && Wy.isVisible(Uy[Sy])
      }
      static is(yb) {
        return yb && void 0 !== yb.stream
      }
      constructor() {
        Object.defineProperty(this, Sy, {
          value: new MW(this),
          enumerable: !1,
          writable: !0
        }), this[Ey] = void 0
      }
      static initializeForDecoder() {
        const yb = Object.create(ch.prototype);
        return yb.$items = new Map, yb.$nextPosition = 0, yb._itemIndex = new Map, yb[Ey] = void 0, XW(yb), yb
      }
      add(yb) {
        if (this._itemIndex.has(yb)) return -1;
        const bb = this.$nextPosition++;
        this.$items.set(bb, yb), this._itemIndex.set(yb, bb);
        const Wy = this[Sy].root;
        return void 0 !== yb[Sy] && yb[Sy].setParent(this, Wy, bb), void 0 !== Wy && vW(this, Wy, bb), bb
      }
      remove(yb) {
        const bb = this._itemIndex.get(yb);
        if (void 0 === bb) return !1;
        this._itemIndex.delete(yb), this.$items.delete(bb);
        const Wy = this[Sy].root;
        return void 0 !== Wy && (iW(this, Wy, this[cb], bb), void 0 !== yb[Sy] && Wy.remove(yb[Sy])), !0
      }
      has(yb) {
        return this._itemIndex.has(yb)
      }
      clear() {
        const yb = this[Sy].root;
        if (void 0 !== yb) {
          ! function(yb, bb, Wy) {
            const Uy = yb._stream;
            if (void 0 !== Uy) {
              Uy.broadcastPending.clear();
              for (const yb of Uy.sentBroadcast) Uy.broadcastDeletes.add(yb);
              Uy.sentBroadcast.clear(), bb.forEachActiveView((yb => {
                Uy.pendingByView.get(yb.id)?.clear();
                const bb = Uy.sentByView.get(yb.id);
                if (void 0 !== bb && bb.size > 0) {
                  let Uy = yb.changes.get(Wy);
                  void 0 === Uy && (Uy = new Map, yb.changes.set(Wy, Uy));
                  for (const yb of bb) Uy.set(yb, hy.DELETE);
                  bb.clear()
                }
              }))
            }
          }(this, yb, this[cb]);
          for (const bb of this.$items.values()) void 0 !== bb[Sy] && yb.remove(bb[Sy])
        }
        this.$items.clear(), this._itemIndex.clear()
      }
      forEach(yb) {
        for (const [bb, Wy] of this.$items) yb(Wy, bb, this)
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
      setIndex(yb, bb) {}
      getIndex(yb) {
        return yb
      } [ey](yb) {
        return this.$items.get(yb)
      } [qb](yb) {
        const bb = this.$items.get(yb);
        void 0 !== bb && (this._itemIndex.delete(bb), this.$items.delete(yb))
      } [sy]() {} [mb]() {}
      toArray() {
        return Array.from(this.$items.values())
      }
      toJSON() {
        const yb = [];
        return this.forEach((bb => {
          yb.push("function" === typeof bb?.toJSON ? bb.toJSON() : bb)
        })), yb
      }
      clone(yb) {
        if (yb) {
          return Object.assign(new ch, this)
        }
        const bb = new ch;
        return bb.maxPerTick = this.maxPerTick, this.forEach((yb => {
          bb.add("function" === typeof yb?.clone ? yb.clone() : yb)
        })), bb
      }
      _dropView(yb) {
        nb(this, yb)
      }
      _unregister() {}
    }
    Jb("stream", {
      constructor: ch
    });
    class PU {
      [Jy] = !0;
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
      constructor(yb) {
        this._type = yb
      }
      default (yb) {
        return this._default = yb, this._hasDefault = !0, this
      }
      view(yb) {
        return this._view = yb ?? -1, this
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
        const yb = this._type;
        if (yb && "object" === typeof yb && void 0 !== yb.array) throw new Error(Gb);
        return this._stream = !0, this
      }
      priority(yb) {
        return this._streamPriority = yb, this
      }
      deprecated() {
        let yb = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
        return this._deprecated = !0, this._deprecatedThrows = yb, this
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

    function oU(yb) {
      return null != yb && !0 === yb[Jy]
    }

    function BU(yb) {
      return () => new PU(yb)
    }

    function KU(yb) {
      if (oU(yb)) {
        const bb = yb._type;
        throw new Error(`t.array/map/set/collection(): a t.* builder is not a valid element type \u2014 ${"string"===typeof bb?`use the type name instead: t.array("${bb}")`:'collections accept a Schema class or a primitive type name ("string", "number", \u2026)'}.`)
      }
      return yb
    }

    function eU(yb) {
      return new PU({
        quantized: rW(yb)
      })
    }
    const qh = Object.freeze({
        string: BU("string"),
        number: BU("number"),
        boolean: BU("boolean"),
        int8: BU("int8"),
        uint8: BU("uint8"),
        int16: BU("int16"),
        uint16: BU("uint16"),
        int32: BU("int32"),
        uint32: BU("uint32"),
        int64: BU("int64"),
        uint64: BU("uint64"),
        float32: BU("float32"),
        float64: BU("float64"),
        bigint64: BU("bigint64"),
        biguint64: BU("biguint64"),
        ref: yb => new PU(yb),
        array: yb => new PU({
          array: KU(yb)
        }),
        map: yb => new PU({
          map: KU(yb)
        }),
        set: yb => new PU({
          set: KU(yb)
        }),
        collection: yb => new PU({
          collection: KU(yb)
        }),
        stream: yb => {
          const bb = new PU({
            stream: KU(yb)
          });
          return bb._stream = !0, bb
        },
        quantized: eU,
        angle: yb => eU({
          min: 0,
          max: 2 * Math.PI,
          mode: "wrap",
          bits: yb?.bits ?? 16
        })
      }),
      sU = -1;

    function SU(yb) {
      return Lb.register(yb), yb
    }

    function EU() {
      let yb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : sU;
      return function(bb, Wy) {
        const Uy = Nb.initialize(bb.constructor);
        Nb.setTag(Uy, Wy, yb)
      }
    }

    function lU(yb, bb) {
      const Wy = Nb.initialize(yb.constructor);
      Nb.setUnreliable(Wy, bb)
    }

    function mh(yb, bb) {
      const Wy = Nb.initialize(yb.constructor);
      Nb.setPatchOnly(Wy, bb)
    }

    function CU(yb, bb) {
      const Wy = Nb.initialize(yb.constructor);
      Nb.setFullStateOnly(Wy, bb)
    }

    function TU(yb, bb) {
      return function(Wy, Uy) {
        const hy = Wy.constructor;
        if (!yb) throw new Error(`${hy.name}: @type() reference provided for "${Uy}" is undefined. Make sure you don't have any circular dependencies.`);
        yb = jW(yb, `${hy.name}.${Uy}`), Lb.register(hy);
        const fy = Object.getPrototypeOf(hy)[Symbol.metadata],
          Zy = Nb.initialize(hy);
        let cb = Zy[Uy];
        if (void 0 !== Zy[cb]) {
          if (Zy[cb].deprecated) return;
          if (void 0 !== Zy[cb].type) {
            const yb = new Error(`@colyseus/schema: Duplicate '${Uy}' definition on '${hy.name}'.\nCheck @type() annotation`);
            throw new Error(`${yb.message} ${yb.stack.split("\n")[4].trim()}`)
          }
        } else cb = Zy[Ry] ?? (fy && fy[Ry]) ?? -1, cb++;
        if (bb && bb.manual) Nb.addField(Zy, cb, Uy, yb, {
          enumerable: !0,
          configurable: !0,
          writable: !0
        });
        else {
          const {
            complexTypeKlass: bb,
            childType: Wy
          } = Qb(yb);
          Nb.addField(Zy, cb, Uy, yb, JU(Uy, cb, Wy, bb))
        }
        Zy[gb][Uy] && Object.defineProperty(Wy, Uy, Zy[gb][Uy]), ("string" === typeof yb || Hb(yb)) && (Zy[Oy] || Object.defineProperty(Zy, Oy, {
          value: [],
          enumerable: !1,
          configurable: !0,
          writable: !0
        }), Zy[Oy][cb] = "string" === typeof yb ? bW[yb] : pb(yb.quantized))
      }
    }
    const VU = {
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

    function JU(yb, bb, Wy, Uy) {
      let fy;
      return fy = Uy ? function(yb, bb, Wy, Uy) {
        const fy = Uy.constructor === WU,
          Zy = Uy.constructor === hU;
        return function(yb) {
          const Uy = this[Vy],
            cb = Uy[bb];
          if (yb !== cb) {
            if (void 0 !== yb && null !== yb) {
              if (!fy || yb instanceof WU)
                if (!Zy || yb instanceof hU) yb[Ey] = Wy;
                else {
                  const bb = new hU;
                  if (bb[Ey] = Wy, yb instanceof Map) yb.forEach(((yb, Wy) => bb.set(Wy, yb)));
                  else
                    for (const Wy in yb) bb.set(Wy, yb[Wy]);
                  yb = bb
                }
              else {
                const bb = new WU;
                bb[Ey] = Wy, bb.push(...yb), yb = bb
              }
              const Uy = this[Sy],
                oy = this.constructor;
              void 0 !== cb && null !== cb && cb[Sy] ? (Uy.root?.remove(cb[Sy]), oy[Py](Uy, bb, hy.DELETE_AND_ADD)) : oy[Py](Uy, bb, hy.ADD), yb[Sy]?.setParent(this, Uy.root, bb)
            } else void 0 !== cb && null !== cb && this[Sy].delete(bb);
            Uy[bb] = yb
          }
        }
      }(0, bb, Wy, Uy) : "string" === typeof Wy ? function(yb, bb, Wy) {
        const Uy = VU[Wy],
          fy = "string" === Wy,
          Zy = "boolean" === Wy;
        return function(Wy) {
          const cb = this[Vy],
            oy = cb[bb];
          if (Wy !== oy) {
            if (void 0 !== Wy && null !== Wy) {
              if (!Zy && void 0 !== Uy && typeof Wy !== Uy && (!fy || null !== Wy)) {
                const bb = Wy && Wy.constructor ? ` (${Wy.constructor.name})` : "";
                throw new AW(`a '${Uy}' was expected, but '${JSON.stringify(Wy)}'${bb} was provided in ${this.constructor.name}#${yb}`)
              }
              this.constructor[Py](this[Sy], bb, hy.ADD)
            } else void 0 !== oy && null !== oy && this[Sy].delete(bb);
            cb[bb] = Wy
          }
        }
      }(yb, bb, Wy) : Hb(Wy) ? function(yb, bb, Wy) {
        return function(Uy) {
          const fy = this[Vy],
            Zy = fy[bb];
          if (void 0 !== Uy && null !== Uy) {
            if ("number" !== typeof Uy) throw new AW(`a 'number' was expected, but '${JSON.stringify(Uy)}' was provided in ${this.constructor.name}#${yb}`);
            if ((Uy = Fb(Wy, aW(Wy, Uy))) === Zy) return;
            this.constructor[Py](this[Sy], bb, hy.ADD)
          } else {
            if (Uy === Zy) return;
            void 0 !== Zy && null !== Zy && this[Sy].delete(bb)
          }
          fy[bb] = Uy
        }
      }(yb, bb, Wy.quantized) : function(yb, bb, Wy) {
        return function(Uy) {
          const fy = this[Vy],
            Zy = fy[bb];
          if (Uy !== Zy) {
            if (void 0 !== Uy && null !== Uy) {
              dW(Uy, Wy, this, yb);
              const fy = this[Sy],
                cb = this.constructor;
              void 0 !== Zy && null !== Zy && Zy[Sy] ? (fy.root?.remove(Zy[Sy]), cb[Py](fy, bb, hy.DELETE_AND_ADD)) : cb[Py](fy, bb, hy.ADD), Uy[Sy]?.setParent(this, fy.root, bb)
            } else void 0 !== Zy && null !== Zy && this[Sy].delete(bb);
            fy[bb] = Uy
          }
        }
      }(yb, bb, Wy), {
        get: function() {
          return this[Vy][bb]
        },
        set: fy,
        enumerable: !0,
        configurable: !0
      }
    }

    function gh() {
      let yb = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
      return function(bb, Wy) {
        const Uy = Nb.initialize(bb.constructor);
        Nb.setDeprecated(Uy, Wy), yb && (Uy[gb] ??= {}, Uy[gb][Wy] = {
          get: function() {
            throw new Error(`${Wy} is deprecated.`)
          },
          set: function(yb) {},
          enumerable: !1,
          configurable: !0
        }, Object.defineProperty(bb, Wy, Uy[gb][Wy]))
      }
    }
    let GU = !1;

    function OU(yb, bb, Wy) {
      GU || (GU = !0, console.warn("@colyseus/schema: defineTypes() is deprecated and will be removed in a future release. Use schema() with t.* field builders instead \u2192 https://docs.colyseus.io/state/schema"));
      for (let Uy in bb) TU(bb[Uy], Wy)(yb.prototype, Uy);
      return yb
    }

    function RU(yb, bb) {
      let Wy = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : ih;
      if (null == yb || "object" !== typeof yb) throw new Error(`schema(): first argument must be a fields object (got ${typeof yb}).`);
      const Uy = {},
        hy = {},
        fy = {},
        Zy = {},
        cb = (yb, bb) => {
          if (bb.hasDefault)((yb, bb) => {
            "function" === typeof bb ? Zy[yb] = bb : bb && "function" === typeof bb.clone ? Zy[yb] = () => bb.clone() : fy[yb] = bb
          })(yb, bb.default);
          else if (!bb.optional) {
            const Wy = function(yb) {
              if (yb && "object" === typeof yb) {
                if (void 0 !== yb.array) return () => new WU;
                if (void 0 !== yb.map) return () => new hU;
                if (void 0 !== yb.set) return () => new ZU;
                if (void 0 !== yb.collection) return () => new fU;
                if (void 0 !== yb.stream) return () => new ch
              } else if ("function" === typeof yb && ih.is(yb) && (!yb.prototype.initialize || 0 === yb.prototype.initialize.length)) return () => new yb
            }(bb.type);
            Wy && (Zy[yb] = Wy)
          }
        },
        Py = {},
        oy = [],
        By = [],
        Ky = {},
        ey = [],
        qb = [],
        sy = {},
        Sy = [];
      for (const Vy in yb) {
        const Wy = yb[Vy],
          fy = `schema(${bb?`'${bb}'`:""}): field '${Vy}'`;
        if (oU(Wy)) {
          const yb = Wy.toDefinition();
          if (yb.noSync) {
            if (void 0 !== yb.view || yb.unreliable || yb.patchOnly || yb.fullStateOnly || yb.stream) throw new Error(`${fy} uses .noSync() together with a sync-only modifier (.view/.unreliable/.patchOnly/.fullStateOnly/.stream). A local-only field cannot be synchronized.`);
            cb(Vy, yb);
            continue
          }
          if (yb.patchOnly && yb.fullStateOnly) throw new Error(`${fy} uses .patchOnly() together with .fullStateOnly(). Those are the only two delivery channels, so the field would never reach a client \u2014 use .noSync() if that is intended.`);
          const bb = jW(yb.type, fy);
          if ("function" === typeof bb && !ih.is(bb)) throw new Error(`${fy} is a synced ref to non-Schema class '${bb.name||"(anonymous)"}' \u2014 use .noSync(), or Metadata.setFields().`);
          Uy[Vy] = bb, void 0 !== yb.view && (Py[Vy] = yb.view), yb.unreliable && oy.push(Vy), yb.patchOnly && By.push(Vy), yb.deprecated && (Ky[Vy] = yb.deprecatedThrows), yb.fullStateOnly && ey.push(Vy), yb.stream && qb.push(Vy), void 0 !== yb.streamPriority && (sy[Vy] = yb.streamPriority), yb.optional && Sy.push(Vy), cb(Vy, yb)
        } else {
          if ("function" !== typeof Wy) throw new Error(`${fy} must be a t.* builder, Schema subclass, or method (got ${typeof Wy}).`);
          ih.is(Wy) ? (Uy[Vy] = Wy, Wy.prototype.initialize && 0 !== Wy.prototype.initialize.length || (Zy[Vy] = () => new Wy)) : hy[Vy] = Wy
        }
      }
      const Ey = yb => {
          for (const bb in fy) yb[bb] = fy[bb];
          for (const bb in Zy) yb[bb] = Zy[bb]()
        },
        ly = () => {
          const yb = {};
          return Ey(yb), yb
        },
        mb = "function" === typeof hy.initialize,
        Cy = hy.initialize ?? Wy._initialize,
        Ty = class extends Wy {
          constructor() {
            for (var yb = arguments.length, bb = new Array(yb), Wy = 0; Wy < yb; Wy++) bb[Wy] = arguments[Wy];
            const hy = bb[0];
            void 0 === hy ? (super(), Ey(this)) : super(Object.assign(ly(), mb ? (yb => {
              const bb = Object.keys(Uy),
                Wy = {};
              for (const Uy in yb) bb.includes(Uy) || (Wy[Uy] = yb[Uy]);
              return Wy
            })(hy) : hy)), Cy && new.target === Ty && Cy.apply(this, bb)
          }
        };
      bb && Object.defineProperty(Ty, "name", {
        value: bb
      }), Nb.setFields(Ty, Uy), Ty._getDefaultValues = ly, Ty._initialize = Cy, Object.assign(Ty.prototype, hy);
      for (const Vy in Py) EU(Py[Vy])(Ty.prototype, Vy);
      for (const Vy of oy) lU(Ty.prototype, Vy);
      for (const Vy of By) mh(Ty.prototype, Vy);
      for (const Vy in Ky) gh(Ky[Vy])(Ty.prototype, Vy);
      if (ey.length > 0 || qb.length > 0) {
        const yb = Ty[Symbol.metadata];
        for (const bb of ey) Nb.setFullStateOnly(yb, bb);
        for (const bb of qb) Nb.setStream(yb, bb);
        for (const bb in sy) Nb.setStreamPriority(yb, bb, sy[bb])
      }
      if (Sy.length > 0) {
        const yb = Ty[Symbol.metadata];
        for (const bb of Sy) yb[yb[bb]].optional = !0
      }
      return Ty.extend = (yb, bb) => RU(yb, bb, Ty), Ty
    }

    function vh(yb) {
      const bb = yb[Sy].root,
        Wy = {
          ops: {},
          refs: []
        };
      let Uy = bb.changes.next;
      for (; Uy;) {
        const yb = Uy.changeTree;
        void 0 !== yb ? (Wy.refs.push(`refId#${yb.ref[cb]}`), yb.forEach(((yb, bb) => {
          if (yb < 0 || !bb) return;
          const Uy = hy[bb];
          Wy.ops[Uy] || (Wy.ops[Uy] = 0), Wy.ops[Uy]++
        })), Uy = Uy.next) : Uy = Uy.next
      }
      return Wy
    }
    class ih {
      static[oy] = uW;
      static[By] = zU;
      [cb];
      [Vy];
      static initialize(yb) {
        Object.defineProperty(yb, Sy, {
          value: new MW(yb),
          enumerable: !1,
          writable: !0
        }), yb[Vy] = []
      }
      static initializeForDecoder() {
        const yb = Object.create(this.prototype);
        return XW(yb), yb[Vy] = [], yb
      }
      static reset(yb) {
        const bb = yb?.[Sy];
        if (void 0 === bb || "function" !== typeof bb.recycle) throw new Error("@colyseus/schema: Schema.reset() requires a tracked (encoder-side) instance.");
        if (void 0 !== bb.extraParents) throw new Error(`@colyseus/schema: cannot reset a shared instance (${yb.constructor.name}) with multiple parents.`);
        yb[Cy]()
      } [Cy]() {
        const yb = this.constructor[Symbol.metadata],
          bb = yb?.[vb] ?? [],
          Wy = this[Vy];
        for (let Uy = 0; Uy < bb.length; Uy++) {
          const yb = Wy[bb[Uy]];
          yb?.[Cy]?.()
        }
        this[Sy].recycle(), this[cb] = void 0
      }
      static is(yb) {
        const bb = yb[Symbol.metadata];
        return "object" === typeof bb && null !== bb
      }
      static isSchema(yb) {
        return "function" === typeof yb?.assign
      }
      static[Py](yb, bb) {
        let Wy = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : hy.ADD;
        yb.change(bb, Wy)
      }
      static[Ky](yb, bb, Wy) {
        const Uy = yb.constructor[Symbol.metadata],
          hy = Uy[bb]?.tag;
        return void 0 === Wy ? void 0 === hy : void 0 === hy || (hy === sU ? Wy.isChangeTreeVisible(yb[Sy]) : Wy.hasTagOnTree(yb[Sy], hy))
      }
      constructor(yb) {
        ih.initialize(this), yb && ih.assignProps(this, yb)
      }
      assign(yb) {
        return ih.assignProps(this, yb), this
      }
      static assignProps(yb, bb) {
        const Wy = yb.constructor[Symbol.metadata];
        if (Wy && void 0 !== Wy[Ry])
          for (let hy = 0; hy <= Wy[Ry]; hy++) {
            const Uy = Wy[hy];
            if (!Uy) continue;
            const fy = bb[Uy.name];
            void 0 !== fy && (yb[Uy.name] = fy)
          }
        const Uy = Object.keys(bb);
        for (let hy = 0; hy < Uy.length; hy++) {
          const fy = Uy[hy];
          Wy && void 0 !== Wy[fy] || (yb[fy] = bb[fy])
        }
      }
      restore(yb) {
        const bb = this.constructor[Symbol.metadata];
        for (const Wy in bb) {
          const Uy = bb[Wy],
            hy = Uy.name,
            fy = Uy.type,
            Zy = yb[hy];
          if (void 0 !== Zy && null !== Zy)
            if ("string" === typeof fy) this[hy] = Zy;
            else if (ih.is(fy)) {
            const yb = new fy;
            yb.restore(Zy), this[hy] = yb
          } else if ("object" === typeof fy) {
            const yb = Object.keys(fy)[0],
              bb = fy[yb];
            if ("map" === yb) {
              const yb = this[hy];
              for (const Wy in Zy)
                if (ih.is(bb)) {
                  const Uy = new bb;
                  Uy.restore(Zy[Wy]), yb.set(Wy, Uy)
                } else yb.set(Wy, Zy[Wy])
            } else if ("array" === yb) {
              const yb = this[hy];
              for (let Wy = 0; Wy < Zy.length; Wy++)
                if (ih.is(bb)) {
                  const Uy = new bb;
                  Uy.restore(Zy[Wy]), yb.push(Uy)
                } else yb.push(Zy[Wy])
            }
          }
        }
        return this
      }
      setDirty(yb, bb) {
        const Wy = this.constructor[Symbol.metadata];
        this[Sy].change(Wy[Wy[yb]].index, bb)
      }
      pauseTracking() {
        this[Sy].pause()
      }
      resumeTracking() {
        this[Sy].resume()
      }
      untracked(yb) {
        return this[Sy].untracked(yb)
      }
      get isTrackingPaused() {
        return this[Sy].paused
      }
      clone() {
        const yb = Object.create(this.constructor.prototype);
        ih.initialize(yb);
        const bb = this.constructor[Symbol.metadata];
        for (const Wy in bb) {
          const Uy = bb[Wy].name;
          "object" === typeof this[Uy] && "function" === typeof this[Uy]?.clone ? yb[Uy] = this[Uy].clone() : yb[Uy] = this[Uy]
        }
        return yb
      }
      toJSON() {
        const yb = {},
          bb = this.constructor[Symbol.metadata];
        for (const Wy in bb) {
          const Uy = bb[Wy],
            hy = Uy.name;
          Uy.deprecated || null === this[hy] || "undefined" === typeof this[hy] || (yb[hy] = "function" === typeof this[hy].toJSON ? this[hy].toJSON() : this[hy])
        }
        return yb
      }
      discardAllChanges() {
        this[Sy].discardAll()
      } [ey](yb) {
        return this[this.constructor[Symbol.metadata][yb].name]
      } [qb](yb) {
        this[this.constructor[Symbol.metadata][yb].name] = void 0
      }
      static debugRefIds(yb) {
        let bb = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          Wy = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          Uy = arguments.length > 3 ? arguments[3] : void 0,
          hy = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "";
        const fy = bb ? ` - ${JSON.stringify(yb.toJSON())}` : "",
          Zy = yb[Sy],
          Py = yb[cb],
          oy = Uy ? Uy.root.refCount[Py] : Zy.refCount,
          By = oy > 1 ? ` [\xd7${oy}]` : "";
        let Ky = `${function(yb){return new Array(yb).fill(0).map(((bb,Wy)=>Wy===yb-1?"\u2514\u2500 ":"   ")).join("")}(Wy)}${hy}${yb.constructor.name} (refId: ${Py})${By}${fy}\n`;
        return Zy.forEachChild(((hy, fy) => {
          let Zy = fy;
          "number" === typeof fy && yb.$indexes && (Zy = yb.$indexes.get(fy) ?? fy);
          const cb = void 0 !== yb.forEach && void 0 !== Zy ? `["${Zy}"]: ` : "";
          Ky += this.debugRefIds(hy.ref, bb, Wy + 1, Uy, cb)
        })), Ky
      }
      static debugRefIdEncodingOrder(yb) {
        let bb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "allChanges";
        const Wy = [],
          Uy = yb[Sy];
        if ("changes" === bb) {
          let yb = Uy.root.changes?.next;
          for (; yb;) yb.changeTree && Wy.push(yb.changeTree.ref[cb]), yb = yb.next;
          return Wy
        }
        const hy = "allFilteredChanges" === bb,
          fy = new Set,
          Zy = yb => {
            fy.has(yb) || (fy.add(yb), yb.isFiltered === hy && Wy.push(yb.ref[cb]), yb.forEachChild(((yb, bb) => Zy(yb))))
          };
        return Zy(Uy), Wy
      }
      static debugRefIdsFromDecoder(yb) {
        return this.debugRefIds(yb.state, !1, 0, yb)
      }
      static debugChanges(yb) {
        let bb = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        const Wy = yb[Sy],
          Uy = bb ? "allChanges" : "changes";
        let fy = `${yb.constructor.name} (${yb[cb]}) -> .${Uy}:\n`;
        return bb ? Wy.forEachLive((yb => {
          fy += `- [${yb}]: ADD (${JSON.stringify(Wy.getValue(Number(yb),!0))})\n`
        })) : Wy.forEach(((yb, bb) => {
          yb < 0 || !bb || (fy += `- [${yb}]: ${hy[bb]} (${JSON.stringify(Wy.getValue(Number(yb),!1))})\n`)
        })), fy
      }
    }
    fy(ih);
    const MU = {
      value: 0,
      enumerable: !1,
      writable: !0
    };
    class YU {
      types;
      nextUniqueId = 0;
      changeTrees = {};
      get refCount() {
        const yb = {};
        for (const bb in this.changeTrees) yb[bb] = this.changeTrees[bb].refCount;
        return yb
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
      enqueueFilterRefresh(yb) {
        this.types.hasFilters && (yb.flags & vU || (yb.flags |= vU, this.pendingFilterRefresh.push(yb)))
      }
      _nodePool = [];
      _nextViewId = 0;
      _freeViewIds = [];
      acquireViewId() {
        return this._freeViewIds.length > 0 ? this._freeViewIds.pop() : this._nextViewId++
      }
      releaseViewId(yb) {
        this._freeViewIds.push(yb)
      }
      activeViews = new Map;
      streamTrees = new Set;
      registerView(yb) {
        this.activeViews.set(yb.id, new WeakRef(yb))
      }
      unregisterView(yb) {
        this.activeViews.delete(yb.id);
        const bb = yb.id;
        for (const Wy of this.streamTrees) Wy._dropView(bb)
      }
      forEachActiveView(yb) {
        for (const [bb, Wy] of this.activeViews) {
          const Uy = Wy.deref();
          if (void 0 !== Uy) yb(Uy);
          else {
            this.activeViews.delete(bb);
            for (const yb of this.streamTrees) yb._dropView(bb)
          }
        }
      }
      registerStream(yb) {
        this.streamTrees.add(yb)
      }
      unregisterStream(yb) {
        this.streamTrees.delete(yb)
      }
      constructor(yb) {
        let bb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        this.types = yb, this.nextUniqueId = bb
      }
      add(yb) {
        const bb = yb.ref;
        void 0 === bb[cb] && (MU.value = this.nextUniqueId++, Object.defineProperty(bb, cb, MU));
        const Wy = bb[cb],
          Uy = void 0 === this.changeTrees[Wy];
        Uy && (this.changeTrees[Wy] = yb), yb.needsRestage && (yb.needsRestage = !1, yb.forEachLiveWithCtx(yb, WW));
        const hy = Uy ? 0 : yb.refCount;
        return yb.refCount = hy + 1, hy > 0 && this.enqueueFilterRefresh(yb), Uy
      }
      remove(yb) {
        const bb = yb.refCount - 1;
        if (bb <= 0) {
          if (yb.root = void 0, delete this.changeTrees[yb.ref[cb]], yb.isStreamCollection) {
            const bb = yb.ref;
            bb._unregister?.(), this.unregisterStream(bb)
          }
          this.removeFromQueue(yb), this.removeFromUnreliableQueue(yb), yb.refCount = 0, yb.needsRestage = !0, yb.forEachChild(((bb, Wy) => {
            bb.removeParent(yb.ref) && (void 0 === bb.parentRef || bb.refCount > 0 ? this.remove(bb) : this.moveNextToParent(bb))
          }))
        } else yb.refCount = bb, this.enqueueFilterRefresh(yb), this.recursivelyMoveNextToParent(yb);
        return bb
      }
      recursivelyMoveNextToParent(yb) {
        this.moveNextToParent(yb), yb.forEachChild(((yb, bb) => this.recursivelyMoveNextToParent(yb)))
      }
      moveNextToParent(yb) {
        yb.changesNode && this._moveNextToParentInList(this.changes, yb, yb.changesNode, "changesNode"), yb.unreliableChangesNode && this._moveNextToParentInList(this.unreliableChanges, yb, yb.unreliableChangesNode, "unreliableChangesNode")
      }
      _moveNextToParentInList(yb, bb, Wy, Uy) {
        const hy = bb.parent;
        if (!hy || !hy[Sy]) return;
        const fy = hy[Sy][Uy];
        fy && fy !== Wy && (Wy.position > fy.position || (Wy.prev ? Wy.prev.next = Wy.next : yb.next = Wy.next, Wy.next ? Wy.next.prev = Wy.prev : yb.tail = Wy.prev, Wy.prev = yb.tail, Wy.next = void 0, yb.tail.next = Wy, yb.tail = Wy, Wy.position = yb.nextPosition++))
      }
      enqueueChangeTree(yb) {
        (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : yb.changesNode) || (yb.changesNode = this._appendToList(this.changes, yb))
      }
      enqueueUnreliable(yb) {
        (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : yb.unreliableChangesNode) || (yb.unreliableChangesNode = this._appendToList(this.unreliableChanges, yb))
      }
      _appendToList(yb, bb) {
        const Wy = this._nodePool;
        let Uy;
        return Wy.length > 0 ? (Uy = Wy.pop(), Uy.changeTree = bb, Uy.next = void 0, Uy.prev = void 0) : Uy = {
          changeTree: bb,
          next: void 0,
          prev: void 0,
          position: 0
        }, yb.next ? (Uy.prev = yb.tail, yb.tail.next = Uy, yb.tail = Uy) : (yb.nextPosition = 0, yb.next = Uy, yb.tail = Uy), Uy.position = yb.nextPosition++, Uy
      }
      releaseNode(yb) {
        yb.changeTree = void 0, yb.prev = void 0, yb.next = void 0, this._nodePool.push(yb)
      }
      removeFromQueue(yb) {
        return this._removeNode(this.changes, yb, yb.changesNode, "changesNode")
      }
      removeFromUnreliableQueue(yb) {
        return this._removeNode(this.unreliableChanges, yb, yb.unreliableChangesNode, "unreliableChangesNode")
      }
      _removeNode(yb, bb, Wy, Uy) {
        return !(!Wy || Wy.changeTree !== bb) && (Wy.prev ? Wy.prev.next = Wy.next : yb.next = Wy.next, Wy.next ? Wy.next.prev = Wy.prev : yb.tail = Wy.prev, bb[Uy] = void 0, this.releaseNode(Wy), !0)
      }
    }

    function XU(yb, bb) {
      if (-1 === bb || bb >= yb.length) return !1;
      const Wy = yb.length - 1;
      for (let Uy = bb; Uy < Wy; Uy++) yb[Uy] = yb[Uy + 1];
      return yb.length = Wy, !0
    }

    function nU(yb, bb, Wy) {
      const Uy = ~Wy,
        hy = yb.changeTrees;
      for (const fy in hy) {
        const yb = hy[fy],
          Wy = yb.visibleViews;
        void 0 !== Wy && bb < Wy.length && (Wy[bb] &= Uy);
        const Zy = yb.subscribedViews;
        void 0 !== Zy && bb < Zy.length && (Zy[bb] &= Uy);
        const cb = yb.tagViews;
        void 0 !== cb && cb.forEach((yb => {
          bb < yb.length && (yb[bb] &= Uy)
        }))
      }
    }
    const uU = new FinalizationRegistry((yb => {
      let {
        root: bb,
        id: Wy,
        slot: Uy,
        bit: hy
      } = yb;
      nU(bb, Uy, hy), bb.activeViews.delete(Wy);
      for (const fy of bb.streamTrees) fy._dropView(Wy);
      bb.releaseViewId(Wy)
    }));

    function rh(yb) {
      if (void 0 === yb) return "undefined";
      if (null === yb) return "null";
      const bb = typeof yb;
      return "string" === bb ? JSON.stringify(yb.length > 30 ? `${yb.slice(0,30)}\u2026` : yb) : "object" !== bb && "function" !== bb ? `${bb} ${String(yb)}` : Array.isArray(yb) ? `Array(${yb.length})` : yb.constructor?.name ?? "Object"
    }
    class HU {
      iterable;
      items;
      id = -1;
      _root;
      _slot = 0;
      _bit = 0;
      changes = new Map;
      constructor() {
        let yb = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        this.iterable = yb, yb && (this.items = [])
      }
      _bindRoot(yb) {
        void 0 === this._root && (this._root = yb, this.id = yb.acquireViewId(), this._slot = this.id >> 5, this._bit = 1 << (31 & this.id), yb.registerView(this), uU.register(this, {
          root: yb,
          id: this.id,
          slot: this._slot,
          bit: this._bit
        }, this))
      }
      dispose() {
        void 0 !== this._root && (this._root.unregisterView(this), nU(this._root, this._slot, this._bit), this._root.releaseViewId(this.id), uU.unregister(this), this._root = void 0, this.id = -1)
      }
      isVisible(yb) {
        const bb = yb.visibleViews,
          Wy = this._slot;
        return void 0 !== bb && Wy < bb.length && 0 !== (bb[Wy] & this._bit)
      }
      markVisible(yb) {
        const bb = this._slot;
        let Wy = yb.visibleViews;
        for (void 0 === Wy && (Wy = yb.visibleViews = []); Wy.length <= bb;) Wy.push(0);
        Wy[bb] |= this._bit
      }
      unmarkVisible(yb) {
        const bb = yb.visibleViews;
        if (void 0 === bb) return;
        const Wy = this._slot;
        Wy < bb.length && (bb[Wy] &= ~this._bit)
      }
      isSubscribed(yb) {
        const bb = yb.subscribedViews,
          Wy = this._slot;
        return void 0 !== bb && Wy < bb.length && 0 !== (bb[Wy] & this._bit)
      }
      _setSubscribed(yb) {
        const bb = this._slot;
        let Wy = yb.subscribedViews;
        for (void 0 === Wy && (Wy = yb.subscribedViews = []); Wy.length <= bb;) Wy.push(0);
        Wy[bb] |= this._bit
      }
      _clearSubscribed(yb) {
        const bb = yb.subscribedViews;
        if (void 0 === bb) return;
        const Wy = this._slot;
        Wy < bb.length && (bb[Wy] &= ~this._bit)
      }
      hasTagOnTree(yb, bb) {
        const Wy = yb.tagViews;
        if (void 0 === Wy) return !1;
        const Uy = this._slot,
          hy = this._bit;
        for (let fy = bb; 0 !== fy; fy &= fy - 1) {
          const yb = Wy.get(fy & -fy);
          if (void 0 !== yb && Uy < yb.length && 0 !== (yb[Uy] & hy)) return !0
        }
        return !1
      }
      addTag(yb, bb) {
        if (bb === sU) return;
        let Wy = yb.tagViews;
        void 0 === Wy && (Wy = yb.tagViews = new Map);
        const Uy = this._slot,
          hy = this._bit;
        for (let fy = bb; fy > 0; fy &= fy - 1) {
          const yb = fy & -fy;
          let bb = Wy.get(yb);
          for (void 0 === bb && (bb = [], Wy.set(yb, bb)); bb.length <= Uy;) bb.push(0);
          bb[Uy] |= hy
        }
      }
      removeTag(yb, bb) {
        if (bb === sU) return;
        const Wy = yb.tagViews;
        if (void 0 === Wy) return;
        const Uy = this._slot,
          hy = ~this._bit;
        for (let fy = bb; fy > 0; fy &= fy - 1) {
          const yb = Wy.get(fy & -fy);
          void 0 !== yb && Uy < yb.length && (yb[Uy] &= hy)
        }
      }
      removeAllTagsOnTree(yb) {
        const bb = yb.tagViews;
        if (void 0 === bb) return;
        const Wy = this._slot,
          Uy = ~this._bit;
        bb.forEach((yb => {
          Wy < yb.length && (yb[Wy] &= Uy)
        }))
      }
      add(yb) {
        let bb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : sU,
          Wy = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        return this._add(yb, bb, Wy, !1)
      }
      _addImmediate(yb) {
        let bb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : sU;
        this._add(yb, bb, !0, !0)
      }
      _add(yb, bb, Wy, Uy) {
        const fy = yb?.[Sy];
        if (!fy) return console.warn(`StateView#add(): expected a Schema instance or collection, received ${rh(yb)}`), !1;
        const Zy = fy.parent;
        if (!Zy && 0 !== yb[cb]) throw new Error(`Cannot add a detached instance to the StateView. Make sure to assign the "${fy.ref.constructor.name}" instance to the state before calling view.add()`);
        void 0 === this._root && void 0 !== fy.root && this._bindRoot(fy.root);
        const Py = Zy?.[Sy];
        if (!Uy && Py?.isStreamCollection) return Xb(Zy, this.id, fy.parentIndex), !0;
        const oy = yb.constructor[Symbol.metadata],
          By = this.isVisible(fy);
        if (!this.iterable || !Wy || By && -1 !== this.items.indexOf(yb) || this.items.push(yb), this.markVisible(fy), Wy && Zy && this.addParentOf(fy, bb), !Uy && fy.isStreamCollection) return !0;
        if (bb === sU && fy.isNew) return this._markSubtreeVisible(fy, bb), !1;
        let Ky = this.changes.get(yb[cb]);
        void 0 === Ky && (Ky = new Map, this.changes.set(yb[cb], Ky));
        let ey = !1;
        const qb = fy.encDescriptor.tags;
        if (fy.forEachChild(((yb, Wy) => {
            const Uy = qb[Wy];
            if (void 0 !== Uy) {
              if (!(Uy === sU || bb !== sU && 0 !== (Uy & bb))) return
            }
            this.add(yb.ref, bb, !1) && (ey = !0)
          })), bb !== sU) {
          this.addTag(fy, bb);
          const yb = oy?.[My];
          if (void 0 !== yb)
            for (let Wy = bb; Wy > 0; Wy &= Wy - 1) yb[Wy & -Wy]?.forEach((yb => {
              fy.getChange(yb) !== hy.DELETE && Ky.set(yb, hy.ADD)
            }))
        }
        if ((bb === sU || !By) && (!fy.isNew || ey))
          if (fy.isArray && "string" !== typeof fy.refTarget[Ey]) fy.refTarget.items.length > 0 && (Ky.set(-1, hy.ADD), ey = !0);
          else {
            const yb = fy.encDescriptor.tags;
            fy.forEachLive((Wy => {
              const Uy = yb[Wy];
              (void 0 === Uy || Uy === sU || bb !== sU && 0 !== (Uy & bb)) && (Ky.set(Wy, hy.ADD), ey = !0)
            }))
          } return ey
      }
      _markSubtreeVisible(yb, bb) {
        const Wy = yb.encDescriptor.tags;
        yb.forEachChild(((yb, Uy) => {
          const hy = Wy[Uy];
          if (void 0 !== hy) {
            if (!(hy === sU || bb !== sU && 0 !== (hy & bb))) return
          }
          yb.isNew ? (this.markVisible(yb), this._markSubtreeVisible(yb, bb)) : this._add(yb.ref, bb, !1, !1)
        }))
      }
      addParentOf(yb, bb) {
        const Wy = yb.parent[Sy],
          Uy = yb.parentIndex;
        this.isVisible(Wy) || this.markVisible(Wy);
        const fy = Wy.parent?.[Sy];
        if (fy && this.addParentOf(Wy, bb), Wy.hasFilteredFields && Wy.getChange(Uy) !== hy.DELETE) {
          let fy = this.changes.get(Wy.ref[cb]);
          void 0 === fy && (fy = new Map, this.changes.set(Wy.ref[cb], fy));
          const Zy = Wy.encDescriptor.tags[Uy];
          void 0 !== Zy && Zy !== sU && 0 !== (Zy & bb) && this.addTag(Wy, bb), fy.set(Wy.isArray ? yb : Uy, hy.ADD)
        }
      }
      _touchAncestorsOf(yb) {
        let bb = yb.parent?.[Sy];
        if (void 0 === bb) return;
        const Wy = [];
        for (; void 0 !== bb;) {
          if (bb.hasFilteredFields) {
            const yb = bb.ref[cb];
            if (this.changes.has(yb)) break;
            Wy.push(bb)
          }
          bb = bb.parent?.[Sy]
        }
        for (let Uy = Wy.length - 1; Uy >= 0; Uy--) this.changes.set(Wy[Uy].ref[cb], new Map)
      }
      remove(yb) {
        let bb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : sU,
          Wy = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        const Uy = yb?.[Sy];
        if (!Uy) return console.warn(`StateView#remove(): expected a Schema instance or collection, received ${rh(yb)}`), this;
        const fy = Uy.parent?.[Sy];
        if (fy?.isStreamCollection) return this.unmarkVisible(Uy), this.iterable && !Wy && XU(this.items, this.items.indexOf(yb)),
          function(yb, bb, Wy, Uy, fy) {
            const Zy = yb._stream;
            if (void 0 === Zy) return !1;
            const cb = Zy.pendingByView.get(bb);
            if (cb?.has(Uy)) return cb.delete(Uy), !1;
            const Py = Zy.sentByView.get(bb);
            if (Py?.has(Uy)) {
              Py.delete(Uy);
              let yb = fy.get(Wy);
              return void 0 === yb && (yb = new Map, fy.set(Wy, yb)), yb.set(Uy, hy.DELETE), !0
            }
          }(Uy.parent, this.id, Uy.parent[cb], Uy.parentIndex, this.changes), this._recursiveDeleteVisibleChangeTree(Uy), this;
        if (Uy.isStreamCollection) {
          this.unmarkVisible(Uy), this.iterable && !Wy && XU(this.items, this.items.indexOf(yb));
          const bb = Uy.ref,
            fy = bb._stream;
          if (void 0 !== fy) {
            fy.pendingByView.get(this.id)?.clear();
            const yb = fy.sentByView.get(this.id);
            if (void 0 !== yb && yb.size > 0) {
              const Wy = bb[cb];
              let Uy = this.changes.get(Wy);
              void 0 === Uy && (Uy = new Map, this.changes.set(Wy, Uy));
              for (const bb of yb) Uy.set(bb, hy.DELETE);
              yb.clear()
            }
          }
          return this
        }
        this.unmarkVisible(Uy), this.iterable && !Wy && XU(this.items, this.items.indexOf(yb));
        const Zy = Uy.ref,
          Py = Zy.constructor[Symbol.metadata],
          oy = Zy[cb];
        this._touchAncestorsOf(Uy);
        let By = this.changes.get(oy);
        if (void 0 === By && (By = new Map, this.changes.set(oy, By)), bb === sU) {
          const yb = Uy.parent;
          if (yb && !Nb.isValidInstance(yb) && Uy.isFiltered) {
            const bb = fy.isArray ? Uy : Uy.parentIndex,
              Wy = yb[cb];
            let Zy = this.changes.get(Wy);
            void 0 === Zy ? (Zy = new Map, this.changes.set(Wy, Zy)) : Zy.get(bb) === hy.ADD && this._dropPendingEntries(Uy), Zy.set(bb, hy.DELETE), this._recursiveDeleteVisibleChangeTree(Uy)
          } else Py?.[ib]?.forEach((yb => this._removeViewField(Uy, By, yb)))
        } else {
          const yb = Py?.[My];
          if (void 0 !== yb)
            for (let Wy = bb; Wy > 0; Wy &= Wy - 1) yb[Wy & -Wy]?.forEach((yb => this._removeViewField(Uy, By, yb)))
        }
        return void 0 === bb ? this.removeAllTagsOnTree(Uy) : this.removeTag(Uy, bb), this
      }
      has(yb) {
        return this.isVisible(yb[Sy])
      }
      hasTag(yb) {
        let bb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : sU;
        return this.hasTagOnTree(yb[Sy], bb)
      }
      subscribe(yb, bb) {
        const Wy = yb?.[Sy];
        if (!Wy) return console.warn(`StateView#subscribe(): expected a Schema collection, received ${rh(yb)}`), this;
        if (void 0 === this._root && void 0 !== Wy.root && this._bindRoot(Wy.root), void 0 !== bb)
          if (Wy.isStreamCollection) {
            const Wy = Rb(yb);
            null === bb ? Wy.priorityByView?.delete(this.id) : (Wy.priorityByView ??= new Map).set(this.id, bb)
          } else {
            const bb = yb?.constructor?.name ?? "collection",
              Uy = Wy.parent;
            if (void 0 === Uy) console.warn(`StateView#subscribe(): \`priority\` ignored \u2014 this ${bb} is not attached to a state yet, so it cannot be identified as a stream. Subscribe after assigning it to the state.`);
            else {
              const yb = Uy?.constructor?.[Symbol.metadata]?.[Wy.parentIndex]?.name,
                hy = yb ? `${Uy.constructor.name}#${yb}` : bb;
              console.warn(`StateView#subscribe(): \`priority\` ignored \u2014 ${hy} is a ${bb}, not a streaming collection. Declare the field with .stream() (e.g. t.map(X).stream()) or use t.stream(X) to enable priority batching.`)
            }
          } if (this.isSubscribed(Wy)) return this;
        const Uy = void 0 !== Wy.parent && !this.isVisible(Wy);
        if (Uy ? (this.addParentOf(Wy, sU), this._add(yb, sU, !1, !1)) : this.markVisible(Wy), this._setSubscribed(Wy), Wy.isStreamCollection) {
          const bb = yb;
          Wy.forEachChild(((yb, Wy) => {
            Xb(bb, this.id, Wy)
          }))
        } else Uy || Wy.forEachChild((yb => {
          this.markVisible(yb)
        }));
        return this
      }
      unsubscribe(yb) {
        const bb = yb?.[Sy];
        if (!bb) return console.warn(`StateView#unsubscribe(): expected a Schema collection, received ${rh(yb)}`), this;
        if (!this.isSubscribed(bb)) return this;
        this._clearSubscribed(bb);
        const Wy = bb.ref[cb];
        if (bb.isStreamCollection) {
          const bb = yb._stream;
          if (void 0 !== bb) {
            bb.pendingByView.get(this.id)?.clear();
            const yb = bb.sentByView.get(this.id);
            if (void 0 !== yb && yb.size > 0) {
              let bb = this.changes.get(Wy);
              void 0 === bb && (bb = new Map, this.changes.set(Wy, bb));
              for (const Wy of yb) bb.set(Wy, hy.DELETE);
              yb.clear()
            }
          }
        } else {
          const yb = bb.isArray;
          let Uy = this.changes.get(Wy);
          bb.forEachChild(((bb, fy) => {
            void 0 === Uy && (Uy = new Map, this.changes.set(Wy, Uy)), Uy.set(yb ? bb : fy, hy.DELETE), this.unmarkVisible(bb)
          }))
        }
        return this.unmarkVisible(bb), this
      }
      clear() {
        if (!this.iterable) throw new Error("StateView#clear() is only available for iterable StateView's. Use StateView(iterable: true) constructor.");
        for (let yb = 0, bb = this.items.length; yb < bb; yb++) this.remove(this.items[yb], sU, !0);
        this.items.length = 0
      }
      isChangeTreeVisible(yb) {
        let bb = this.isVisible(yb);
        if (!bb && yb.isVisibilitySharedWithParent)
          if (this.isVisible(yb.parent[Sy])) this.markVisible(yb), bb = !0;
          else
            for (let Wy = yb.extraParents; void 0 !== Wy; Wy = Wy.next) {
              const Uy = Wy.ref[Sy];
              if (Uy.isFiltered && this.isVisible(Uy)) {
                this.markVisible(yb), bb = !0;
                break
              }
            }
        return bb
      }
      _recursiveDeleteVisibleChangeTree(yb) {
        yb.forEachChild((yb => {
          this.unmarkVisible(yb), this._recursiveDeleteVisibleChangeTree(yb)
        }))
      }
      _dropPendingEntries(yb) {
        this.changes.delete(yb.ref[cb]), yb.forEachChild((yb => this._dropPendingEntries(yb)))
      }
      _removeViewField(yb, bb, Wy) {
        const Uy = bb.get(Wy) === hy.ADD;
        bb.set(Wy, hy.DELETE);
        const fy = yb.ref[yb.encDescriptor.names[Wy]],
          Zy = fy?.[Sy];
        Zy && (this.unmarkVisible(Zy), this._recursiveDeleteVisibleChangeTree(Zy), Uy && this._dropPendingEntries(Zy))
      }
    }

    function ah(yb) {
      yb.structSwitchEmitted || (yb.shouldEmitSwitch && (yb.buffer[yb.it.offset++] = 255, bW.number(yb.buffer, yb.ref[cb], yb.it)), yb.structSwitchEmitted = !0)
    }

    function FU(yb, bb) {
      QU(yb, bb, hy.ADD)
    }

    function pU(yb, bb) {
      if (bb._fullSyncGen === yb.gen) return;
      bb._fullSyncGen = yb.gen;
      if (!yb.hasView || yb.view.isChangeTreeVisible(bb)) {
        const Wy = bb.encDescriptor;
        yb.changeTree = bb, yb.ref = bb.ref, yb.encoder = Wy.encoder, yb.filter = Wy.filter, yb.metadata = Wy.metadata, yb.treeIsFiltered = bb.isFiltered, yb.isSchema = Wy.isSchema, yb.filterBitmask = Wy.filterBitmask, yb.tags = Wy.tags, yb.structSwitchEmitted = !1, yb.shouldEmitSwitch = yb.hasView || yb.it.offset > yb.initialOffset || bb !== yb.rootChangeTree, bb.isArray && bb.collDirty.size > 0 && (bb.flags |= 512), hW(bb, yb, FU)
      }
      lW(bb, yb, LU)
    }

    function LU(yb, bb, Wy) {
      pU(yb, bb)
    }

    function QU(yb, bb, Wy) {
      if (bb < 0) {
        if (yb.treeIsFiltered !== yb.emitFiltered) return;
        return ah(yb), void(yb.buffer[yb.it.offset++] = 255 & Math.abs(bb))
      }
      if ((yb.isSchema ? yb.treeIsFiltered || (bb < 32 ? 0 !== (yb.filterBitmask & 1 << bb) : void 0 !== yb.tags[bb]) : yb.treeIsFiltered) !== yb.emitFiltered) return;
      const Uy = yb.isEncodeAll ? hy.ADD : Wy;
      void 0 !== Uy && (void 0 === yb.filter || yb.filter(yb.ref, bb, yb.view)) && (ah(yb), yb.encoder(yb.self, yb.buffer, yb.changeTree, bb, Uy, yb.it, yb.isEncodeAll, yb.hasView, yb.metadata))
    }

    function jh(yb, bb) {
      const Wy = new Uint8Array(yb.length + bb.length);
      return Wy.set(yb, 0), Wy.set(bb, yb.length), Wy
    }
    class DU {
      static BUFFER_SIZE = 16384;
      sharedBuffer = new Uint8Array(DU.BUFFER_SIZE);
      context;
      state;
      root;
      constructor(yb, bb) {
        this.context = Lb.cache(yb.constructor), this.root = bb ?? new YU(this.context), this.setState(yb)
      }
      setState(yb) {
        this.state = yb, this.state[Sy].setRoot(this.root)
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
        let yb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
            offset: 0
          },
          bb = arguments.length > 1 ? arguments[1] : void 0,
          Wy = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : this.sharedBuffer,
          Uy = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : yb.offset;
        return this._encodeChannel(yb, bb, Wy, Uy, !1)
      }
      encodeUnreliable() {
        let yb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
            offset: 0
          },
          bb = arguments.length > 1 ? arguments[1] : void 0,
          Wy = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : this.sharedBuffer,
          Uy = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : yb.offset;
        return this._encodeChannel(yb, bb, Wy, Uy, !0)
      }
      _encodeChannel(yb, bb, Wy, Uy, hy) {
        this.root.pendingFilterRefresh.length > 0 && ZW(this.root);
        const fy = void 0 !== bb,
          Zy = this.state[Sy],
          cb = this._encodeCtx;
        cb.self = this, cb.buffer = Wy, cb.it = yb, cb.view = bb, cb.isEncodeAll = !1, cb.hasView = fy, cb.emitFiltered = fy;
        let Py = hy ? this.root.unreliableChanges : this.root.changes;
        for (; Py = Py.next;) {
          const Wy = Py.changeTree;
          if (fy && !bb.isChangeTreeVisible(Wy)) continue;
          const oy = hy ? Wy.unreliableRecorder : Wy;
          if (!oy || !oy.has()) continue;
          const By = Wy.encDescriptor;
          cb.changeTree = Wy, cb.ref = Wy.ref, cb.encoder = By.encoder, cb.filter = By.filter, cb.metadata = By.metadata, cb.treeIsFiltered = Wy.isFiltered, cb.isSchema = By.isSchema, cb.filterBitmask = By.filterBitmask, cb.tags = By.tags, cb.structSwitchEmitted = !1, cb.isRootTree = Wy === Zy, cb.shouldEmitSwitch = fy || yb.offset > Uy || !cb.isRootTree, oy.forEachWithCtx(cb, QU)
        }
        return hy || fy || !this._isStreamBroadcastMode || this._emitStreamBroadcast(Wy, yb), yb.offset > Wy.byteLength ? (Wy = this._resizeBuffer(Wy, yb.offset), yb.offset = Uy, this._encodeChannel(yb, bb, Wy, Uy, hy)) : Wy.subarray(0, yb.offset)
      }
      encodeFullSync(yb, bb, Wy, Uy) {
        let hy = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : yb.offset;
        this.root.pendingFilterRefresh.length > 0 && ZW(this.root);
        const fy = void 0 !== Uy,
          Zy = this.state[Sy],
          cb = this._encodeCtx;
        return cb.self = this, cb.buffer = bb, cb.it = yb, cb.view = Uy, cb.isEncodeAll = !0, cb.hasView = fy, cb.emitFiltered = Wy, cb.gen = ++this._fullSyncGen, cb.initialOffset = hy, cb.rootChangeTree = Zy, pU(cb, Zy), yb.offset > bb.byteLength ? (bb = this._resizeBuffer(bb, yb.offset), yb.offset = hy, this.encodeFullSync(yb, bb, Wy, Uy, hy)) : bb.subarray(0, yb.offset)
      }
      _resizeBuffer(yb, bb) {
        const Wy = Math.ceil(bb / DU.BUFFER_SIZE) * DU.BUFFER_SIZE,
          Uy = new Uint8Array(Wy);
        return Uy.set(yb), yb === this.sharedBuffer && (this.sharedBuffer = Uy), Uy
      }
      encodeAll() {
        let yb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
            offset: 0
          },
          bb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.sharedBuffer;
        return this.encodeFullSync(yb, bb, !1)
      }
      encodeAllView(yb, bb, Wy) {
        let Uy = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : this.sharedBuffer;
        const hy = Wy.offset;
        return Uy = this.encodeFullSync(Wy, Uy, !0, yb, hy), jh(Uy.subarray(0, bb), Uy.subarray(hy, Wy.offset))
      }
      ensureCapacity(yb, bb) {
        if (bb + DU.BUFFER_SIZE <= yb.byteLength) return yb;
        const Wy = Math.ceil((bb + DU.BUFFER_SIZE) / DU.BUFFER_SIZE) * DU.BUFFER_SIZE,
          Uy = new Uint8Array(Wy);
        return Uy.set(yb.subarray(0, bb)), yb === this.sharedBuffer && (this.sharedBuffer = Uy), Uy
      }
      encodeView(yb, bb, Wy) {
        let Uy = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : this.sharedBuffer,
          fy = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4];
        const Zy = Wy.offset;
        this._emitStreamPriority(yb);
        for (const Py of yb.changes.keys()) {
          const bb = yb.changes.get(Py),
            fy = this.root.changeTrees[Py];
          if (void 0 === fy) {
            yb.changes.delete(Py);
            continue
          }
          if (0 === bb.size) continue;
          const Zy = fy.encDescriptor,
            oy = Zy.encoder,
            By = Zy.metadata,
            Ky = fy.ref,
            qb = fy.refTarget;
          Uy = this.ensureCapacity(Uy, Wy.offset), Uy[Wy.offset++] = 255, bW.number(Uy, Ky[cb], Wy);
          for (const [Py, sy] of bb) {
            let bb;
            if (-1 === Py) {
              const yb = qb.tmpItems,
                bb = qb.deletedIndexes;
              for (let Zy = 0; Zy < yb.length; Zy++) void 0 !== yb[Zy] && !0 !== bb[Zy] && oy(this, Uy, fy, Zy, hy.ADD, Wy, !1, !0, By);
              continue
            }
            if ("number" === typeof Py) bb = Py;
            else {
              const Wy = Py.indexInParent(Ky);
              if (void 0 === Wy) continue;
              if (bb = Wy, sy === hy.ADD && fy.getChange(bb) === hy.DELETE) {
                yb.changes.delete(Py.ref[cb]);
                continue
              }
            }
            oy(this, Uy, fy, bb, void 0 !== qb[ey](bb) && sy || hy.DELETE, Wy, !1, !0, By)
          }
        }
        return yb.changes.clear(), Uy = this.encode(Wy, yb, Uy), fy ? jh(Uy.subarray(0, bb), Uy.subarray(Zy, Wy.offset)) : Uy.subarray(Zy, Wy.offset)
      }
      encodeUnreliableView(yb, bb, Wy) {
        let Uy = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : this.sharedBuffer;
        const hy = Wy.offset;
        return Uy = this.encodeUnreliable(Wy, yb, Uy, hy), jh(Uy.subarray(0, bb), Uy.subarray(hy, Wy.offset))
      }
      _emitStreamBroadcast(yb, bb) {
        const Wy = this.root.streamTrees;
        for (const Uy of Wy) {
          const Wy = Uy,
            fy = Wy[Sy],
            Zy = Wy[cb];
          if (void 0 === Zy) continue;
          const Py = Wy._stream,
            oy = Py.broadcastDeletes,
            By = Py.broadcastPending,
            Ky = Py.sentBroadcast,
            qb = oy.size > 0,
            sy = By.size > 0,
            Ey = fy.encDescriptor,
            ly = Ey.encoder,
            mb = Ey.metadata;
          if (qb || sy) {
            if (yb[bb.offset++] = 255, bW.number(yb, Zy, bb), qb) {
              for (const Wy of oy) ly(this, yb, fy, Wy, hy.DELETE, bb, !1, !1, mb);
              oy.clear()
            }
            const Uy = Py.maxPerTick,
              sy = [];
            let Ey = 0;
            const Cy = [];
            for (const Zy of By) {
              if (Ey >= Uy) break;
              const cb = Wy[ey](Zy);
              void 0 !== cb ? (ly(this, yb, fy, Zy, hy.ADD, bb, !1, !1, mb), Ky.add(Zy), sy.push(cb), Cy.push(Zy), Ey++) : Cy.push(Zy)
            }
            for (const yb of Cy) By.delete(yb);
            for (const Wy of sy) {
              const Uy = Wy[Sy];
              if (void 0 === Uy) continue;
              const fy = Wy[cb];
              if (void 0 === fy) continue;
              yb[bb.offset++] = 255, bW.number(yb, fy, bb);
              const Zy = Uy.encDescriptor,
                Py = Zy.encoder,
                oy = Zy.metadata;
              Uy.forEachLive((Wy => {
                Nb.hasUnreliableAtIndex(oy, Wy) || Py(this, yb, Uy, Wy, hy.ADD, bb, !1, !1, oy)
              }))
            }
          }
          for (const Uy of Ky) {
            const hy = Wy[ey](Uy);
            if (void 0 === hy) continue;
            const fy = hy[Sy];
            if (void 0 === fy || !fy.has()) continue;
            const Zy = hy[cb];
            if (void 0 === Zy) continue;
            yb[bb.offset++] = 255, bW.number(yb, Zy, bb);
            const Py = fy.encDescriptor,
              oy = Py.encoder,
              By = Py.metadata;
            fy.forEach(((Wy, Uy) => {
              Wy < 0 || Nb.hasUnreliableAtIndex(By, Wy) || oy(this, yb, fy, Wy, Uy, bb, !1, !1, By)
            }))
          }
        }
      }
      _emitStreamPriority(yb) {
        const bb = this.root.streamTrees;
        if (0 === bb.size) return;
        const Wy = yb.id;
        for (const Uy of bb) {
          const bb = Uy,
            fy = bb._stream,
            Zy = fy.pendingByView.get(Wy);
          if (void 0 === Zy || 0 === Zy.size) continue;
          const Py = fy.priorityByView?.get(Wy),
            oy = void 0 !== Py,
            By = fy.priority,
            Ky = fy.maxPerTick,
            qb = [],
            sy = [];
          if (oy || void 0 !== By) {
            const Wy = [],
              Uy = [];
            let hy = 0;
            for (const fy of Zy) {
              const Zy = bb[ey](fy);
              if (void 0 === Zy) {
                sy.push(fy);
                continue
              }
              const cb = oy ? Py(Zy) : By(yb, Zy);
              if (hy < Ky) {
                let yb = hy++;
                for (; yb > 0 && Uy[yb - 1] < cb;) Uy[yb] = Uy[yb - 1], Wy[yb] = Wy[yb - 1], yb--;
                Uy[yb] = cb, Wy[yb] = fy
              } else if (cb > Uy[Ky - 1]) {
                let yb = Ky - 1;
                for (; yb > 0 && Uy[yb - 1] < cb;) Uy[yb] = Uy[yb - 1], Wy[yb] = Wy[yb - 1], yb--;
                Uy[yb] = cb, Wy[yb] = fy
              }
            }
            for (let yb = 0; yb < hy; yb++) qb.push(Wy[yb])
          } else
            for (const yb of Zy) {
              if (qb.length >= Ky) break;
              qb.push(yb)
            }
          for (const yb of sy) Zy.delete(yb);
          const Ey = qb.length;
          let ly = fy.sentByView.get(Wy);
          void 0 === ly && (ly = new Set, fy.sentByView.set(Wy, ly));
          for (let Wy = 0; Wy < Ey; Wy++) {
            const Uy = qb[Wy],
              fy = bb[ey](Uy);
            if (void 0 === fy) {
              Zy.delete(Uy);
              continue
            }
            yb._addImmediate(fy);
            const Py = fy[Sy];
            if (void 0 !== Py) {
              const bb = fy[cb];
              let Wy = yb.changes.get(bb);
              void 0 === Wy && (Wy = new Map, yb.changes.set(bb, Wy));
              const Uy = Py.metadata;
              Py.forEachLive((yb => {
                Nb.hasUnreliableAtIndex(Uy, yb) || Wy.set(yb, hy.ADD)
              }))
            }
            Zy.delete(Uy), ly.add(Uy)
          }
        }
      }
      discardChanges() {
        const yb = this.root.changes;
        let bb = yb.next;
        const Wy = this.root;
        for (; bb;) {
          const yb = bb.next;
          bb.changeTree.endEncode(), Wy.releaseNode(bb), bb = yb
        }
        yb.next = void 0, yb.tail = void 0
      }
      discardUnreliableChanges() {
        const yb = this.root.unreliableChanges;
        let bb = yb.next;
        const Wy = this.root;
        for (; bb;) {
          const yb = bb.next;
          bb.changeTree.endEncodeUnreliable(), Wy.releaseNode(bb), bb = yb
        }
        yb.next = void 0, yb.tail = void 0
      }
      tryEncodeTypeId(yb, bb, Wy, Uy) {
        const hy = this.context.getTypeId(bb),
          fy = this.context.getTypeId(Wy);
        void 0 !== fy ? hy !== fy && (yb[Uy.offset++] = 213, bW.number(yb, fy, Uy)) : console.warn(`@colyseus/schema WARNING: Class "${Wy.name}" is not registered on TypeRegistry - Please either tag the class with @entity or define a @type() field.`)
      }
      get hasChanges() {
        return void 0 !== this.root.changes.next || this._hasStreamBacklog()
      }
      get _isStreamBroadcastMode() {
        return 0 === this.root.activeViews.size && this.root.streamTrees.size > 0
      }
      _hasStreamBacklog() {
        const yb = this.root;
        if (0 === yb.streamTrees.size) return !1;
        const bb = 0 === yb.activeViews.size;
        for (const Wy of yb.streamTrees)
          if (bb ? Yb(Wy) : Mb(Wy, yb)) return !0;
        return !1
      }
      get hasUnreliableChanges() {
        return void 0 !== this.root.unreliableChanges.next
      }
    }
    class th extends Error {
      constructor(yb) {
        super(yb), this.name = "DecodingWarning"
      }
    }
    const wU = {
      value: 0,
      enumerable: !1,
      writable: !0
    };
    class kh {
      refs = new Map;
      refCount = {};
      deletedRefs = new Set;
      callbacks = {};
      nextUniqueId = 0;
      getNextUniqueId() {
        return this.nextUniqueId++
      }
      addRef(yb, bb) {
        let Wy = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        this.refs.set(yb, bb), void 0 === bb[cb] ? (wU.value = yb, Object.defineProperty(bb, cb, wU)) : bb[cb] !== yb && (bb[cb] = yb), Wy && (this.refCount[yb] = (this.refCount[yb] || 0) + 1), this.deletedRefs.has(yb) && this.deletedRefs.delete(yb)
      }
      removeRef(yb) {
        const bb = this.refCount[yb];
        if (void 0 !== bb)
          if (0 !== bb)(this.refCount[yb] = bb - 1) <= 0 && this.deletedRefs.add(yb);
          else try {
            const bb = this.refs.get(yb);
            throw new th(`trying to remove refId '${yb}' with 0 refCount (${bb.constructor.name}: ${JSON.stringify(bb)})`)
          } catch (fh) {
            console.warn(fh)
          } else try {
            throw new th("trying to remove refId that doesn't exist: " + yb)
          } catch (fh) {
            console.warn(fh)
          }
      }
      clearRefs() {
        this.refs.clear(), this.deletedRefs.clear(), this.callbacks = {}, this.refCount = {}
      }
      garbageCollectDeletedRefs() {
        this.deletedRefs.forEach((yb => {
          if (this.refCount[yb] > 0) return;
          const bb = this.refs.get(yb),
            Wy = bb.constructor[Symbol.metadata];
          if (null != Wy)
            for (const Uy in Wy) {
              const yb = bb[Wy[Uy].name];
              if ("object" === typeof yb && yb) {
                const bb = yb[cb];
                void 0 === bb || this.deletedRefs.has(bb) || this.removeRef(bb)
              }
            } else "function" === typeof bb[Ey] && Array.from(bb.values()).forEach((yb => {
              const bb = yb[cb];
              void 0 === bb || this.deletedRefs.has(bb) || this.removeRef(bb)
            }));
          this.refs.delete(yb), delete this.refCount[yb], delete this.callbacks[yb]
        })), this.deletedRefs.clear()
      }
      addCallback(yb, bb, Wy) {
        if (void 0 === yb) {
          const yb = "number" === typeof bb ? hy[bb] : bb;
          throw new Error(`Can't addCallback on '${yb}' (refId is undefined)`)
        }
        return this.callbacks[yb] || (this.callbacks[yb] = {}), this.callbacks[yb][bb] || (this.callbacks[yb][bb] = []), this.callbacks[yb][bb].push(Wy), () => this.removeCallback(yb, bb, Wy)
      }
      removeCallback(yb, bb, Wy) {
        const Uy = this.callbacks?.[yb]?.[bb]?.indexOf(Wy);
        void 0 !== Uy && -1 !== Uy && XU(this.callbacks[yb][bb], Uy)
      }
    }
    class NU {
      context;
      state;
      root;
      currentRefId = 0;
      Qby;
      resyncVisited = null;
      resyncDamaged = !1;
      constructor(yb, bb) {
        this.setState(yb), this.context = bb || new Lb(yb.constructor)
      }
      setState(yb) {
        this.state = yb, this.root = new kh, this.root.addRef(0, yb)
      }
      decode(yb) {
        let bb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
            offset: 0
          },
          Wy = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : this.state;
        const hy = void 0 !== this.Qby ? [] : null,
          fy = this.root,
          Zy = yb.byteLength;
        let cb = Wy.constructor[By];
        for (this.currentRefId = 0; bb.offset < Zy;) {
          if (yb[bb.offset] == Uy) {
            bb.offset++, Wy[Ty]?.();
            const Uy = Cb.number(yb, bb),
              hy = fy.refs.get(Uy);
            hy ? (Wy = hy, cb = Wy.constructor[By], this.currentRefId = Uy) : (console.error(`"refId" not found: ${Uy}`, {
              previousRef: Wy,
              previousRefId: this.currentRefId
            }), console.warn("Please report this issue to the developers."), this.skipCurrentStructure(yb, bb, Zy));
            continue
          } - 1 !== cb(this, yb, bb, Wy, hy) || (console.warn("@colyseus/schema: definition mismatch"), this.skipCurrentStructure(yb, bb, Zy))
        }
        return Wy[Ty]?.(), null !== this.resyncVisited && function(yb, bb) {
          yb.resyncDamaged ? console.warn("@colyseus/schema: resync sweep skipped \u2014 parts of the payload could not be decoded. Stale entries may persist until the next resync.") : LW(yb, yb.state, new Set, bb)
        }(this, hy), null !== hy && this.Qby?.(hy), fy.garbageCollectDeletedRefs(), hy
      }
      decodeResync(yb) {
        let bb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
          offset: 0
        };
        this.resyncVisited = new Map, this.resyncDamaged = !1;
        try {
          return this.decode(yb, bb)
        } finally {
          this.resyncVisited = null
        }
      }
      skipCurrentStructure(yb, bb, Wy) {
        null !== this.resyncVisited && (this.resyncDamaged = !0);
        const hy = {
          offset: bb.offset
        };
        for (; bb.offset < Wy && (yb[bb.offset] !== Uy || (hy.offset = bb.offset + 1, !this.root.refs.has(Cb.number(yb, hy))));) bb.offset++
      }
      getInstanceType(yb, bb, Wy) {
        let Uy;
        if (213 === yb[bb.offset]) {
          bb.offset++;
          const Wy = Cb.number(yb, bb);
          Uy = this.context.get(Wy)
        }
        return Uy || Wy
      }
      createInstanceOfType(yb) {
        return yb.initializeForDecoder()
      }
      removeChildRefs(yb, bb) {
        const Wy = "string" !== typeof yb[Ey],
          Uy = yb[cb];
        yb.forEach(((fy, Zy) => {
          bb?.push({
            ref: yb,
            refId: Uy,
            op: hy.DELETE,
            field: Zy,
            value: void 0,
            previousValue: fy
          }), Wy && this.root.removeRef(fy[cb])
        }))
      }
    }
    const zh = RU({
        min: qh.float64(),
        max: qh.float64(),
        bits: qh.uint8(),
        mode: qh.uint8()
      }, "QuantizedDescriptor"),
      IU = RU({
        name: qh.string(),
        type: qh.string(),
        referencedType: qh.number(),
        childPrimitive: qh.string(),
        quantized: qh.ref(zh).optional()
      }, "ReflectionField"),
      xh = RU({
        id: qh.number(),
        extendsId: qh.number(),
        fields: qh.array(IU)
      }, "ReflectionType"),
      AU = RU({
        types: qh.array(xh),
        rootType: qh.number()
      }, "Reflection");

    function dU(yb) {
      const bb = yb.root,
        Wy = bb.callbacks,
        Uy = new WeakMap;
      let fy;

      function Zy(yb, Wy) {
        let oy = Wy.instance?.constructor[Symbol.metadata] || yb,
          By = Wy.instance && "function" === typeof Wy.instance.forEach || yb && !ih.is(yb);
        if (oy && !By) {
          const yb = function(yb, hy, Zy, Py) {
            return Py && void 0 !== Wy.instance[hy] && !Uy.has(fy) && Zy(Wy.instance[hy], void 0), bb.addCallback(yb[cb], hy, Zy)
          };
          return new Proxy({
            listen: function(bb, hy) {
              let Zy = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
              if (Wy.instance) return yb(Wy.instance, bb, hy, Zy);
              {
                let cb = () => {};
                return Wy.onInstanceAvailable(((Wy, Py) => {
                  cb = yb(Wy, bb, hy, Zy && Py && !Uy.has(fy))
                })), () => cb()
              }
            },
            onChange: function(yb) {
              return bb.addCallback(Wy.instance[cb], hy.REPLACE, yb)
            },
            bindTo: function(yb, Uy) {
              return Uy || (Uy = Object.keys(oy).map((yb => oy[yb].name))), bb.addCallback(Wy.instance[cb], hy.REPLACE, (() => {
                Uy.forEach((bb => yb[bb] = Wy.instance[bb]))
              }))
            }
          }, {
            get(yb, bb) {
              const Uy = oy[oy[bb]];
              if (Uy) {
                const yb = Wy.instance?.[bb],
                  hy = Uy => {
                    const hy = Py(Wy.instance).listen(bb, ((yb, bb) => {
                      Uy(yb, !1), hy?.()
                    }), !1);
                    void 0 !== yb?.[cb] && Uy(yb, !0)
                  };
                return Zy(Uy.type, {
                  instance: void 0 !== yb?.[cb] && yb,
                  parentInstance: Wy.instance,
                  onInstanceAvailable: hy
                })
              }
              return yb[bb]
            },
            has: (yb, bb) => void 0 !== oy[bb],
            set(yb, bb, Wy) {
              throw new Error("not allowed")
            },
            deleteProperty(yb, bb) {
              throw new Error("not allowed")
            }
          })
        } {
          const yb = function(yb, Wy, Zy) {
              return Zy && yb.forEach(((yb, bb) => Wy(yb, bb))), bb.addCallback(yb[cb], hy.ADD, ((yb, bb) => {
                Uy.set(Wy, !0), fy = Wy, Wy(yb, bb), Uy.delete(Wy), fy = void 0
              }))
            },
            Zy = function(yb, Wy) {
              return bb.addCallback(yb[cb], hy.DELETE, Wy)
            },
            Py = function(yb, Wy) {
              return bb.addCallback(yb[cb], hy.REPLACE, Wy)
            };
          return new Proxy({
            cC: function(bb) {
              let hy = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
              if (Wy.instance) return yb(Wy.instance, bb, hy && !Uy.has(fy));
              if (Wy.onInstanceAvailable) {
                let Zy = () => {};
                return Wy.onInstanceAvailable(((Wy, cb) => {
                  Zy = yb(Wy, bb, hy && cb && !Uy.has(fy))
                })), () => Zy()
              }
            },
            Yby: function(yb) {
              if (Wy.instance) return Zy(Wy.instance, yb);
              if (Wy.onInstanceAvailable) {
                let bb = () => {};
                return Wy.onInstanceAvailable((Wy => {
                  bb = Zy(Wy, yb)
                })), () => bb()
              }
            },
            onChange: function(yb) {
              if (Wy.instance) return Py(Wy.instance, yb);
              if (Wy.onInstanceAvailable) {
                let bb = () => {};
                return Wy.onInstanceAvailable((Wy => {
                  bb = Py(Wy, yb)
                })), () => bb()
              }
            }
          }, {
            get(yb, bb) {
              if (!yb[bb]) throw new Error(`Can't access '${bb}' through callback proxy. access the instance directly.`);
              return yb[bb]
            },
            has: (yb, bb) => void 0 !== yb[bb],
            set(yb, bb, Wy) {
              throw new Error("not allowed")
            },
            deleteProperty(yb, bb) {
              throw new Error("not allowed")
            }
          })
        }
      }

      function Py(yb) {
        return Zy(void 0, {
          instance: yb
        })
      }
      return yb.Qby = function(yb) {
        const bb = new Set;
        for (let Uy = 0, fy = yb.length; Uy < fy; Uy++) {
          const fy = yb[Uy],
            Zy = fy.refId,
            Py = fy.ref,
            oy = Wy[Zy];
          if (oy) {
            if ((fy.op & hy.DELETE) === hy.DELETE && ih.isSchema(fy.previousValue)) {
              const yb = Wy[fy.previousValue[cb]]?.[hy.DELETE];
              for (let bb = yb?.length - 1; bb >= 0; bb--) yb[bb]()
            }
            if (ih.isSchema(Py)) {
              if (!bb.has(Zy)) {
                const yb = oy?.[hy.REPLACE];
                for (let bb = yb?.length - 1; bb >= 0; bb--) yb[bb]()
              }
              if (oy.hasOwnProperty(fy.field)) {
                const yb = oy[fy.field];
                for (let bb = yb?.length - 1; bb >= 0; bb--) yb[bb](fy.value, fy.previousValue)
              }
            } else {
              if ((fy.op & hy.DELETE) === hy.DELETE) {
                if (void 0 !== fy.previousValue) {
                  const yb = oy[hy.DELETE];
                  for (let bb = yb?.length - 1; bb >= 0; bb--) yb[bb](fy.previousValue, fy.dynamicIndex ?? fy.field)
                }
                if ((fy.op & hy.ADD) === hy.ADD) {
                  const yb = oy[hy.ADD];
                  for (let bb = yb?.length - 1; bb >= 0; bb--) yb[bb](fy.value, fy.dynamicIndex ?? fy.field)
                }
              } else if ((fy.op & hy.ADD) === hy.ADD && fy.previousValue !== fy.value) {
                const yb = oy[hy.ADD];
                for (let bb = yb?.length - 1; bb >= 0; bb--) yb[bb](fy.value, fy.dynamicIndex ?? fy.field)
              }
              if (fy.value !== fy.previousValue && (void 0 !== fy.value || void 0 !== fy.previousValue)) {
                const yb = oy[hy.REPLACE];
                for (let bb = yb?.length - 1; bb >= 0; bb--) yb[bb](fy.value, fy.dynamicIndex ?? fy.field)
              }
            }
            bb.add(Zy)
          }
        }
      }, Py
    }

    function yf(yb, bb) {
      yb.Qby = bb
    }
    AU.encode = function(yb) {
      let bb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
        offset: 0
      };
      const Wy = yb.context,
        Uy = new AU,
        hy = new DU(Uy),
        fy = Wy.schemas.get(yb.state.constructor);
      fy > 0 && (Uy.rootType = fy);
      const Zy = new Set,
        cb = {},
        Py = yb => {
          if (void 0 === yb.extendsId || Zy.has(yb.extendsId)) {
            Zy.add(yb.id), Uy.types.push(yb);
            const bb = cb[yb.id];
            void 0 !== bb && (delete cb[yb.id], bb.forEach((yb => Py(yb))))
          } else void 0 === cb[yb.extendsId] && (cb[yb.extendsId] = []), cb[yb.extendsId].push(yb)
        };
      Wy.schemas.forEach(((yb, bb) => {
        const Uy = new xh;
        Uy.id = Number(yb);
        const hy = Object.getPrototypeOf(bb);
        hy !== ih && (Uy.extendsId = Wy.schemas.get(hy));
        const fy = bb[Symbol.metadata];
        if (fy !== hy[Symbol.metadata]) {
          const yb = fy[Ry] ?? -1;
          for (let bb = 0; bb <= yb; bb++) {
            const yb = fy[bb];
            if (void 0 === yb) continue;
            const hy = yb.name;
            if (!Object.prototype.hasOwnProperty.call(fy, hy)) continue;
            const Zy = new IU;
            let cb;
            if (Zy.name = hy, "string" === typeof yb.type) cb = yb.type;
            else if (Hb(yb.type)) {
              const bb = yb.type.quantized;
              cb = "quantized";
              const Wy = new zh;
              Wy.min = bb.min, Wy.max = bb.max, Wy.bits = bb.bits, Wy.mode = bb.wrap ? 1 : 0, Zy.quantized = Wy
            } else {
              let bb;
              ih.is(yb.type) ? (cb = "ref", bb = yb.type) : (cb = Object.keys(yb.type)[0], "string" === typeof yb.type[cb] ? Zy.childPrimitive = yb.type[cb] : bb = yb.type[cb]), Zy.referencedType = bb ? Wy.getTypeId(bb) : -1
            }
            Zy.type = cb, Uy.fields.push(Zy)
          }
        }
        Py(Uy)
      }));
      for (const oy in cb) cb[oy].forEach((yb => Uy.types.push(yb)));
      return hy.encodeAll(bb).slice(0, bb.offset)
    }, AU.decode = function(yb, bb) {
      const Wy = new AU;
      new NU(Wy).decode(yb, bb);
      const Uy = new Lb;
      Wy.types.forEach((yb => {
        const bb = Uy.get(yb.extendsId) ?? ih,
          Wy = class extends bb {};
        Lb.register(Wy), Uy.add(Wy, yb.id)
      }), {});
      Wy.types.forEach((yb => {
        const bb = Uy.get(yb.id),
          hy = Nb.initialize(bb),
          fy = [];
        let Zy = yb;
        do {
          fy.push(Zy), Zy = Wy.types.find((yb => yb.id === Zy.extendsId))
        } while (Zy);
        let cb = 0;
        fy.reverse().forEach((yb => {
          ((yb, bb, Wy) => {
            bb.fields.forEach(((bb, hy) => {
              const fy = Wy + hy;
              if (void 0 !== bb.quantized) {
                const Wy = bb.quantized;
                Nb.addField(yb, fy, bb.name, {
                  quantized: rW({
                    min: Wy.min,
                    max: Wy.max,
                    bits: Wy.bits,
                    mode: 1 === Wy.mode ? "wrap" : "clamp"
                  })
                })
              } else if (void 0 !== bb.referencedType) {
                const Wy = bb.type,
                  hy = Uy.get(bb.referencedType) ?? bb.childPrimitive;
                "ref" === Wy ? Nb.addField(yb, fy, bb.name, hy) : Nb.addField(yb, fy, bb.name, {
                  [Wy]: hy
                })
              } else Nb.addField(yb, fy, bb.name, bb.type)
            }))
          })(hy, yb, cb), cb += yb.fields.length
        }))
      }));
      const hy = new(Uy.get(Wy.rootType || 0));
      return new NU(hy, Uy)
    }, AU.makeEncodable = function(yb) {
      const bb = yb[Symbol.metadata];
      if (!bb) return yb;
      const Wy = bb[Ry];
      if (void 0 === Wy) return yb;
      for (let Uy = 0; Uy <= Wy; Uy++) {
        const Wy = bb[Uy];
        Wy && Nb.defineField(yb, bb, Uy, Wy.name, Wy.type)
      }
      return Object.prototype.hasOwnProperty.call(yb, Gy) && delete yb[Gy], yb
    };
    class bf {
      bP;
      uniqueRefIds = new Set;
      isTriggering = !1;
      constructor(yb) {
        this.bP = yb, this.bP.Qby = this.Qby.bind(this)
      }
      get callbacks() {
        return this.bP.root.callbacks
      }
      get state() {
        return this.bP.state
      }
      addCallback(yb, bb, Wy) {
        return this.bP.root.addCallback(yb, bb, Wy)
      }
      addCallbackOrWaitCollectionAvailable(yb, bb, Wy, Uy) {
        let fy = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4],
          Zy = () => {};
        const Py = () => Zy(),
          oy = yb[bb];
        if (oy && void 0 !== oy[cb]) return fy = fy && !1 === this.isTriggering, Wy === hy.ADD && fy && oy.forEach(((yb, bb) => {
          Uy(yb, bb)
        })), this.addCallback(oy[cb], Wy, Uy);
        {
          let hy;
          return hy = this.addCallback(yb[cb], bb, ((yb, bb) => {
            null !== yb && void 0 !== yb && (hy(), Zy = this.addCallback(yb[cb], Wy, Uy))
          })), Zy = hy, Py
        }
      }
      listen() {
        return "string" === typeof(arguments.length <= 0 ? void 0 : arguments[0]) ? this.listenInstance(this.state, arguments.length <= 0 ? void 0 : arguments[0], arguments.length <= 1 ? void 0 : arguments[1], arguments.length <= 2 ? void 0 : arguments[2]) : this.listenInstance(arguments.length <= 0 ? void 0 : arguments[0], arguments.length <= 1 ? void 0 : arguments[1], arguments.length <= 2 ? void 0 : arguments[2], arguments.length <= 3 ? void 0 : arguments[3])
      }
      listenInstance(yb, bb, Wy) {
        let Uy = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
        Uy = Uy && !1 === this.isTriggering;
        const hy = yb[bb];
        return Uy && null !== hy && void 0 !== hy && Wy(hy, void 0), this.addCallback(yb[cb], bb, Wy)
      }
      onChange() {
        if (2 === arguments.length && "string" !== typeof(arguments.length <= 0 ? void 0 : arguments[0])) {
          const yb = arguments.length <= 0 ? void 0 : arguments[0],
            bb = arguments.length <= 1 ? void 0 : arguments[1];
          return this.addCallback(yb[cb], hy.REPLACE, bb)
        }
        return "string" === typeof(arguments.length <= 0 ? void 0 : arguments[0]) ? this.addCallbackOrWaitCollectionAvailable(this.state, arguments.length <= 0 ? void 0 : arguments[0], hy.REPLACE, arguments.length <= 1 ? void 0 : arguments[1]) : this.addCallbackOrWaitCollectionAvailable(arguments.length <= 0 ? void 0 : arguments[0], arguments.length <= 1 ? void 0 : arguments[1], hy.REPLACE, arguments.length <= 2 ? void 0 : arguments[2])
      }
      cC() {
        return "string" === typeof(arguments.length <= 0 ? void 0 : arguments[0]) ? this.addCallbackOrWaitCollectionAvailable(this.state, arguments.length <= 0 ? void 0 : arguments[0], hy.ADD, arguments.length <= 1 ? void 0 : arguments[1], !1 !== (arguments.length <= 2 ? void 0 : arguments[2])) : this.addCallbackOrWaitCollectionAvailable(arguments.length <= 0 ? void 0 : arguments[0], arguments.length <= 1 ? void 0 : arguments[1], hy.ADD, arguments.length <= 2 ? void 0 : arguments[2], !1 !== (arguments.length <= 3 ? void 0 : arguments[3]))
      }
      Yby() {
        return "string" === typeof(arguments.length <= 0 ? void 0 : arguments[0]) ? this.addCallbackOrWaitCollectionAvailable(this.state, arguments.length <= 0 ? void 0 : arguments[0], hy.DELETE, arguments.length <= 1 ? void 0 : arguments[1]) : this.addCallbackOrWaitCollectionAvailable(arguments.length <= 0 ? void 0 : arguments[0], arguments.length <= 1 ? void 0 : arguments[1], hy.DELETE, arguments.length <= 2 ? void 0 : arguments[2])
      }
      bindTo(yb, bb, Wy) {
        let Uy = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
        const fy = yb.constructor[Symbol.metadata];
        Wy || (Wy = Object.keys(fy).filter((yb => !isNaN(Number(yb)))).map((yb => fy[yb].name)));
        const Zy = () => {
          for (const Uy of Wy) {
            const Wy = yb[Uy];
            void 0 !== Wy && (bb[Uy] = Wy)
          }
        };
        return Uy && Zy(), this.addCallback(yb[cb], hy.REPLACE, Zy)
      }
      Qby(yb) {
        this.uniqueRefIds.clear(), this.isTriggering = !0;
        for (let bb = 0, Wy = yb.length; bb < Wy; bb++) {
          const Wy = yb[bb],
            Uy = Wy.refId,
            fy = Wy.ref,
            Zy = this.callbacks[Uy];
          if (Zy) {
            if ((Wy.op & hy.DELETE) === hy.DELETE && ih.isSchema(Wy.previousValue)) {
              const yb = Wy.previousValue[cb],
                bb = this.callbacks[yb]?.[hy.DELETE];
              if (bb)
                for (let Wy = bb.length - 1; Wy >= 0; Wy--) try {
                  bb[Wy]()
                } catch (fh) {
                  console.error(fh)
                }
            }
            if (ih.isSchema(fy)) {
              if (!this.uniqueRefIds.has(Uy)) {
                const yb = Zy[hy.REPLACE];
                if (yb)
                  for (let bb = yb.length - 1; bb >= 0; bb--) try {
                    yb[bb]()
                  } catch (fh) {
                    console.error(fh)
                  }
              }
              const yb = Zy[Wy.field];
              if (yb)
                for (let bb = yb.length - 1; bb >= 0; bb--) try {
                  yb[bb](Wy.value, Wy.previousValue)
                } catch (fh) {
                  console.error(fh)
                }
            } else {
              const yb = Wy.dynamicIndex ?? Wy.field;
              if ((Wy.op & hy.DELETE) === hy.DELETE) {
                if (void 0 !== Wy.previousValue) {
                  const bb = Zy[hy.DELETE];
                  if (bb)
                    for (let Uy = bb.length - 1; Uy >= 0; Uy--) try {
                      bb[Uy](Wy.previousValue, yb)
                    } catch (fh) {
                      console.error(fh)
                    }
                }
                if ((Wy.op & hy.ADD) === hy.ADD) {
                  const bb = Zy[hy.ADD];
                  if (bb)
                    for (let Uy = bb.length - 1; Uy >= 0; Uy--) try {
                      bb[Uy](Wy.value, yb)
                    } catch (fh) {
                      console.error(fh)
                    }
                }
              } else if ((Wy.op & hy.ADD) === hy.ADD && Wy.previousValue !== Wy.value) {
                const bb = Zy[hy.ADD];
                if (bb)
                  for (let Uy = bb.length - 1; Uy >= 0; Uy--) try {
                    bb[Uy](Wy.value, yb)
                  } catch (fh) {
                    console.error(fh)
                  }
              }
              if (Wy.value !== Wy.previousValue) {
                const bb = Zy[hy.REPLACE];
                if (bb)
                  for (let Uy = bb.length - 1; Uy >= 0; Uy--) try {
                    bb[Uy](yb, Wy.value)
                  } catch (fh) {
                    console.error(fh)
                  }
              }
            }
            this.uniqueRefIds.add(Uy)
          }
        }
        this.isTriggering = !1
      }
    }
    const Wh = {
      get(yb) {
        if (yb instanceof NU) return new bf(yb);
        if ("bP" in yb.nB) return new bf(yb.nB.bP);
        throw new Error("Invalid room or decoder")
      },
      getLegacy(yb) {
        if (yb instanceof NU) return dU(yb);
        if ("bP" in yb.nB) return dU(yb.nB.bP);
        throw new Error("Invalid room or decoder")
      },
      getRawChanges: (yb, bb) => yf(yb, bb)
    };
    class Uh {
      _free = [];
      _factory;
      _maxSize;
      constructor(yb) {
        let bb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        this._factory = yb, this._maxSize = bb.maxSize ?? 1 / 0;
        const Wy = bb.preallocate ?? 0;
        for (let Uy = 0; Uy < Wy; Uy++) this._free.push(yb())
      }
      acquire() {
        return this._free.length > 0 ? this._free.pop() : this._factory()
      }
      release(yb) {
        ih.reset(yb), this._free.length < this._maxSize && this._free.push(yb)
      }
      get size() {
        return this._free.length
      }
    }

    function hh(yb) {
      return new Uh((() => new yb), arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {})
    }
    Jb("map", {
      constructor: hU
    }), Jb("array", {
      constructor: WU
    }), Jb("set", {
      constructor: ZU
    }), Jb("collection", {
      constructor: fU
    })
  },
  8213: (yb, bb, Wy) => {
    Wy.r(bb), Wy.d(bb, {
      __addDisposableResource: () => Hy,
      __assign: () => fy,
      __asyncDelegator: () => Oy,
      __asyncGenerator: () => Gy,
      __asyncValues: () => Ry,
      __await: () => gb,
      __awaiter: () => sy,
      __classPrivateFieldGet: () => ny,
      __classPrivateFieldIn: () => rb,
      __classPrivateFieldSet: () => uy,
      __createBinding: () => Ey,
      __decorate: () => cb,
      __disposeResources: () => Fy,
      __esDecorate: () => oy,
      __exportStar: () => ly,
      __extends: () => hy,
      __generator: () => Sy,
      __importDefault: () => Xy,
      __importStar: () => Yy,
      __makeTemplateObject: () => vb,
      __metadata: () => qb,
      __param: () => Py,
      __propKey: () => Ky,
      __read: () => Cy,
      __rest: () => Zy,
      __rewriteRelativeImportExtension: () => py,
      __runInitializers: () => By,
      __setFunctionName: () => ey,
      __spread: () => Ty,
      __spreadArray: () => Jy,
      __spreadArrays: () => Vy,
      __values: () => mb,
      default: () => Ly
    });
    var Uy = function(yb, bb) {
      return Uy = Object.setPrototypeOf || {
        __proto__: []
      }
      instanceof Array && function(yb, bb) {
        yb.__proto__ = bb
      } || function(yb, bb) {
        for (var Wy in bb) Object.prototype.hasOwnProperty.call(bb, Wy) && (yb[Wy] = bb[Wy])
      }, Uy(yb, bb)
    };

    function hy(yb, bb) {
      if ("function" !== typeof bb && null !== bb) throw new TypeError("Class extends value " + String(bb) + " is not a constructor or null");

      function Wy() {
        this.constructor = yb
      }
      Uy(yb, bb), yb.prototype = null === bb ? Object.create(bb) : (Wy.prototype = bb.prototype, new Wy)
    }
    var fy = function() {
      return fy = Object.assign || function(yb) {
        for (var bb, Wy = 1, Uy = arguments.length; Wy < Uy; Wy++)
          for (var hy in bb = arguments[Wy]) Object.prototype.hasOwnProperty.call(bb, hy) && (yb[hy] = bb[hy]);
        return yb
      }, fy.apply(this, arguments)
    };

    function Zy(yb, bb) {
      var Wy = {};
      for (var Uy in yb) Object.prototype.hasOwnProperty.call(yb, Uy) && bb.indexOf(Uy) < 0 && (Wy[Uy] = yb[Uy]);
      if (null != yb && "function" === typeof Object.getOwnPropertySymbols) {
        var hy = 0;
        for (Uy = Object.getOwnPropertySymbols(yb); hy < Uy.length; hy++) bb.indexOf(Uy[hy]) < 0 && Object.prototype.propertyIsEnumerable.call(yb, Uy[hy]) && (Wy[Uy[hy]] = yb[Uy[hy]])
      }
      return Wy
    }

    function cb(yb, bb, Wy, Uy) {
      var hy, fy = arguments.length,
        Zy = fy < 3 ? bb : null === Uy ? Uy = Object.getOwnPropertyDescriptor(bb, Wy) : Uy;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) Zy = Reflect.decorate(yb, bb, Wy, Uy);
      else
        for (var cb = yb.length - 1; cb >= 0; cb--)(hy = yb[cb]) && (Zy = (fy < 3 ? hy(Zy) : fy > 3 ? hy(bb, Wy, Zy) : hy(bb, Wy)) || Zy);
      return fy > 3 && Zy && Object.defineProperty(bb, Wy, Zy), Zy
    }

    function Py(yb, bb) {
      return function(Wy, Uy) {
        bb(Wy, Uy, yb)
      }
    }

    function oy(yb, bb, Wy, Uy, hy, fy) {
      function Zy(yb) {
        if (void 0 !== yb && "function" !== typeof yb) throw new TypeError("Function expected");
        return yb
      }
      for (var cb, Py = Uy.kind, oy = "getter" === Py ? "get" : "setter" === Py ? "set" : "value", By = !bb && yb ? Uy.static ? yb : yb.prototype : null, Ky = bb || (By ? Object.getOwnPropertyDescriptor(By, Uy.name) : {}), ey = !1, qb = Wy.length - 1; qb >= 0; qb--) {
        var sy = {};
        for (var Sy in Uy) sy[Sy] = "access" === Sy ? {} : Uy[Sy];
        for (var Sy in Uy.access) sy.access[Sy] = Uy.access[Sy];
        sy.addInitializer = function(yb) {
          if (ey) throw new TypeError("Cannot add initializers after decoration has completed");
          fy.push(Zy(yb || null))
        };
        var Ey = (0, Wy[qb])("accessor" === Py ? {
          get: Ky.get,
          set: Ky.set
        } : Ky[oy], sy);
        if ("accessor" === Py) {
          if (void 0 === Ey) continue;
          if (null === Ey || "object" !== typeof Ey) throw new TypeError("Object expected");
          (cb = Zy(Ey.get)) && (Ky.get = cb), (cb = Zy(Ey.set)) && (Ky.set = cb), (cb = Zy(Ey.init)) && hy.unshift(cb)
        } else(cb = Zy(Ey)) && ("field" === Py ? hy.unshift(cb) : Ky[oy] = cb)
      }
      By && Object.defineProperty(By, Uy.name, Ky), ey = !0
    }

    function By(yb, bb, Wy) {
      for (var Uy = arguments.length > 2, hy = 0; hy < bb.length; hy++) Wy = Uy ? bb[hy].call(yb, Wy) : bb[hy].call(yb);
      return Uy ? Wy : void 0
    }

    function Ky(yb) {
      return "symbol" === typeof yb ? yb : "".concat(yb)
    }

    function ey(yb, bb, Wy) {
      return "symbol" === typeof bb && (bb = bb.description ? "[".concat(bb.description, "]") : ""), Object.defineProperty(yb, "name", {
        configurable: !0,
        value: Wy ? "".concat(Wy, " ", bb) : bb
      })
    }

    function qb(yb, bb) {
      if ("object" === typeof Reflect && "function" === typeof Reflect.metadata) return Reflect.metadata(yb, bb)
    }

    function sy(yb, bb, Wy, Uy) {
      return new(Wy || (Wy = Promise))((function(hy, fy) {
        function Zy(yb) {
          try {
            Py(Uy.next(yb))
          } catch (bb) {
            fy(bb)
          }
        }

        function cb(yb) {
          try {
            Py(Uy.throw(yb))
          } catch (bb) {
            fy(bb)
          }
        }

        function Py(yb) {
          var bb;
          yb.done ? hy(yb.value) : (bb = yb.value, bb instanceof Wy ? bb : new Wy((function(yb) {
            yb(bb)
          }))).then(Zy, cb)
        }
        Py((Uy = Uy.apply(yb, bb || [])).next())
      }))
    }

    function Sy(yb, bb) {
      var Wy, Uy, hy, fy = {
          label: 0,
          sent: function() {
            if (1 & hy[0]) throw hy[1];
            return hy[1]
          },
          trys: [],
          ops: []
        },
        Zy = Object.create(("function" === typeof Iterator ? Iterator : Object).prototype);
      return Zy.next = cb(0), Zy.throw = cb(1), Zy.return = cb(2), "function" === typeof Symbol && (Zy[Symbol.iterator] = function() {
        return this
      }), Zy;

      function cb(cb) {
        return function(Py) {
          return function(cb) {
            if (Wy) throw new TypeError("Generator is already executing.");
            for (; Zy && (Zy = 0, cb[0] && (fy = 0)), fy;) try {
              if (Wy = 1, Uy && (hy = 2 & cb[0] ? Uy.return : cb[0] ? Uy.throw || ((hy = Uy.return) && hy.call(Uy), 0) : Uy.next) && !(hy = hy.call(Uy, cb[1])).done) return hy;
              switch (Uy = 0, hy && (cb = [2 & cb[0], hy.value]), cb[0]) {
                case 0:
                case 1:
                  hy = cb;
                  break;
                case 4:
                  return fy.label++, {
                    value: cb[1],
                    done: !1
                  };
                case 5:
                  fy.label++, Uy = cb[1], cb = [0];
                  continue;
                case 7:
                  cb = fy.ops.pop(), fy.trys.pop();
                  continue;
                default:
                  if (!(hy = (hy = fy.trys).length > 0 && hy[hy.length - 1]) && (6 === cb[0] || 2 === cb[0])) {
                    fy = 0;
                    continue
                  }
                  if (3 === cb[0] && (!hy || cb[1] > hy[0] && cb[1] < hy[3])) {
                    fy.label = cb[1];
                    break
                  }
                  if (6 === cb[0] && fy.label < hy[1]) {
                    fy.label = hy[1], hy = cb;
                    break
                  }
                  if (hy && fy.label < hy[2]) {
                    fy.label = hy[2], fy.ops.push(cb);
                    break
                  }
                  hy[2] && fy.ops.pop(), fy.trys.pop();
                  continue
              }
              cb = bb.call(yb, fy)
            } catch (Py) {
              cb = [6, Py], Uy = 0
            } finally {
              Wy = hy = 0
            }
            if (5 & cb[0]) throw cb[1];
            return {
              value: cb[0] ? cb[1] : void 0,
              done: !0
            }
          }([cb, Py])
        }
      }
    }
    var Ey = Object.create ? function(yb, bb, Wy, Uy) {
      void 0 === Uy && (Uy = Wy);
      var hy = Object.getOwnPropertyDescriptor(bb, Wy);
      hy && !("get" in hy ? !bb.__esModule : hy.writable || hy.configurable) || (hy = {
        enumerable: !0,
        get: function() {
          return bb[Wy]
        }
      }), Object.defineProperty(yb, Uy, hy)
    } : function(yb, bb, Wy, Uy) {
      void 0 === Uy && (Uy = Wy), yb[Uy] = bb[Wy]
    };

    function ly(yb, bb) {
      for (var Wy in yb) "default" === Wy || Object.prototype.hasOwnProperty.call(bb, Wy) || Ey(bb, yb, Wy)
    }

    function mb(yb) {
      var bb = "function" === typeof Symbol && Symbol.iterator,
        Wy = bb && yb[bb],
        Uy = 0;
      if (Wy) return Wy.call(yb);
      if (yb && "number" === typeof yb.length) return {
        next: function() {
          return yb && Uy >= yb.length && (yb = void 0), {
            value: yb && yb[Uy++],
            done: !yb
          }
        }
      };
      throw new TypeError(bb ? "Object is not iterable." : "Symbol.iterator is not defined.")
    }

    function Cy(yb, bb) {
      var Wy = "function" === typeof Symbol && yb[Symbol.iterator];
      if (!Wy) return yb;
      var Uy, hy, fy = Wy.call(yb),
        Zy = [];
      try {
        for (;
          (void 0 === bb || bb-- > 0) && !(Uy = fy.next()).done;) Zy.push(Uy.value)
      } catch (cb) {
        hy = {
          error: cb
        }
      } finally {
        try {
          Uy && !Uy.done && (Wy = fy.return) && Wy.call(fy)
        } finally {
          if (hy) throw hy.error
        }
      }
      return Zy
    }

    function Ty() {
      for (var yb = [], bb = 0; bb < arguments.length; bb++) yb = yb.concat(Cy(arguments[bb]));
      return yb
    }

    function Vy() {
      for (var yb = 0, bb = 0, Wy = arguments.length; bb < Wy; bb++) yb += arguments[bb].length;
      var Uy = Array(yb),
        hy = 0;
      for (bb = 0; bb < Wy; bb++)
        for (var fy = arguments[bb], Zy = 0, cb = fy.length; Zy < cb; Zy++, hy++) Uy[hy] = fy[Zy];
      return Uy
    }

    function Jy(yb, bb, Wy) {
      if (Wy || 2 === arguments.length)
        for (var Uy, hy = 0, fy = bb.length; hy < fy; hy++) !Uy && hy in bb || (Uy || (Uy = Array.prototype.slice.call(bb, 0, hy)), Uy[hy] = bb[hy]);
      return yb.concat(Uy || Array.prototype.slice.call(bb))
    }

    function gb(yb) {
      return this instanceof gb ? (this.v = yb, this) : new gb(yb)
    }

    function Gy(yb, bb, Wy) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var Uy, hy = Wy.apply(yb, bb || []),
        fy = [];
      return Uy = Object.create(("function" === typeof AsyncIterator ? AsyncIterator : Object).prototype), Zy("next"), Zy("throw"), Zy("return", (function(yb) {
        return function(bb) {
          return Promise.resolve(bb).then(yb, oy)
        }
      })), Uy[Symbol.asyncIterator] = function() {
        return this
      }, Uy;

      function Zy(yb, bb) {
        hy[yb] && (Uy[yb] = function(bb) {
          return new Promise((function(Wy, Uy) {
            fy.push([yb, bb, Wy, Uy]) > 1 || cb(yb, bb)
          }))
        }, bb && (Uy[yb] = bb(Uy[yb])))
      }

      function cb(yb, bb) {
        try {
          (Wy = hy[yb](bb)).value instanceof gb ? Promise.resolve(Wy.value.v).then(Py, oy) : By(fy[0][2], Wy)
        } catch (Uy) {
          By(fy[0][3], Uy)
        }
        var Wy
      }

      function Py(yb) {
        cb("next", yb)
      }

      function oy(yb) {
        cb("throw", yb)
      }

      function By(yb, bb) {
        yb(bb), fy.shift(), fy.length && cb(fy[0][0], fy[0][1])
      }
    }

    function Oy(yb) {
      var bb, Wy;
      return bb = {}, Uy("next"), Uy("throw", (function(yb) {
        throw yb
      })), Uy("return"), bb[Symbol.iterator] = function() {
        return this
      }, bb;

      function Uy(Uy, hy) {
        bb[Uy] = yb[Uy] ? function(bb) {
          return (Wy = !Wy) ? {
            value: gb(yb[Uy](bb)),
            done: !1
          } : hy ? hy(bb) : bb
        } : hy
      }
    }

    function Ry(yb) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var bb, Wy = yb[Symbol.asyncIterator];
      return Wy ? Wy.call(yb) : (yb = mb(yb), bb = {}, Uy("next"), Uy("throw"), Uy("return"), bb[Symbol.asyncIterator] = function() {
        return this
      }, bb);

      function Uy(Wy) {
        bb[Wy] = yb[Wy] && function(bb) {
          return new Promise((function(Uy, hy) {
            (function(yb, bb, Wy, Uy) {
              Promise.resolve(Uy).then((function(bb) {
                yb({
                  value: bb,
                  done: Wy
                })
              }), bb)
            })(Uy, hy, (bb = yb[Wy](bb)).done, bb.value)
          }))
        }
      }
    }

    function vb(yb, bb) {
      return Object.defineProperty ? Object.defineProperty(yb, "raw", {
        value: bb
      }) : yb.raw = bb, yb
    }
    var ib = Object.create ? function(yb, bb) {
        Object.defineProperty(yb, "default", {
          enumerable: !0,
          value: bb
        })
      } : function(yb, bb) {
        yb.default = bb
      },
      My = function(yb) {
        return My = Object.getOwnPropertyNames || function(yb) {
          var bb = [];
          for (var Wy in yb) Object.prototype.hasOwnProperty.call(yb, Wy) && (bb[bb.length] = Wy);
          return bb
        }, My(yb)
      };

    function Yy(yb) {
      if (yb && yb.__esModule) return yb;
      var bb = {};
      if (null != yb)
        for (var Wy = My(yb), Uy = 0; Uy < Wy.length; Uy++) "default" !== Wy[Uy] && Ey(bb, yb, Wy[Uy]);
      return ib(bb, yb), bb
    }

    function Xy(yb) {
      return yb && yb.__esModule ? yb : {
        default: yb
      }
    }

    function ny(yb, bb, Wy, Uy) {
      if ("a" === Wy && !Uy) throw new TypeError("Private accessor was defined without a getter");
      if ("function" === typeof bb ? yb !== bb || !Uy : !bb.has(yb)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
      return "m" === Wy ? Uy : "a" === Wy ? Uy.call(yb) : Uy ? Uy.value : bb.get(yb)
    }

    function uy(yb, bb, Wy, Uy, hy) {
      if ("m" === Uy) throw new TypeError("Private method is not writable");
      if ("a" === Uy && !hy) throw new TypeError("Private accessor was defined without a setter");
      if ("function" === typeof bb ? yb !== bb || !hy : !bb.has(yb)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
      return "a" === Uy ? hy.call(yb, Wy) : hy ? hy.value = Wy : bb.set(yb, Wy), Wy
    }

    function rb(yb, bb) {
      if (null === bb || "object" !== typeof bb && "function" !== typeof bb) throw new TypeError("Cannot use 'in' operator on non-object");
      return "function" === typeof yb ? bb === yb : yb.has(bb)
    }

    function Hy(yb, bb, Wy) {
      if (null !== bb && void 0 !== bb) {
        if ("object" !== typeof bb && "function" !== typeof bb) throw new TypeError("Object expected.");
        var Uy, hy;
        if (Wy) {
          if (!Symbol.asyncDispose) throw new TypeError("Symbol.asyncDispose is not defined.");
          Uy = bb[Symbol.asyncDispose]
        }
        if (void 0 === Uy) {
          if (!Symbol.dispose) throw new TypeError("Symbol.dispose is not defined.");
          Uy = bb[Symbol.dispose], Wy && (hy = Uy)
        }
        if ("function" !== typeof Uy) throw new TypeError("Object not disposable.");
        hy && (Uy = function() {
          try {
            hy.call(this)
          } catch (yb) {
            return Promise.reject(yb)
          }
        }), yb.stack.push({
          value: bb,
          dispose: Uy,
          async: Wy
        })
      } else Wy && yb.stack.push({
        async: !0
      });
      return bb
    }
    var ab = "function" === typeof SuppressedError ? SuppressedError : function(yb, bb, Wy) {
      var Uy = new Error(Wy);
      return Uy.name = "SuppressedError", Uy.error = yb, Uy.suppressed = bb, Uy
    };

    function Fy(yb) {
      function bb(bb) {
        yb.error = yb.hasError ? new ab(bb, yb.error, "An error was suppressed during disposal.") : bb, yb.hasError = !0
      }
      var Wy, Uy = 0;
      return function hy() {
        for (; Wy = yb.stack.pop();) try {
          if (!Wy.async && 1 === Uy) return Uy = 0, yb.stack.push(Wy), Promise.resolve().then(hy);
          if (Wy.dispose) {
            var fy = Wy.dispose.call(Wy.value);
            if (Wy.async) return Uy |= 2, Promise.resolve(fy).then(hy, (function(yb) {
              return bb(yb), hy()
            }))
          } else Uy |= 1
        } catch (Zy) {
          bb(Zy)
        }
        if (1 === Uy) return yb.hasError ? Promise.reject(yb.error) : Promise.resolve();
        if (yb.hasError) throw yb.error
      }()
    }

    function py(yb, bb) {
      return "string" === typeof yb && /^\.\.?\//.test(yb) ? yb.replace(/\.(tsx)$|((?:\.d)?)((?:\.[^./]+?)?)\.([cm]?)ts$/i, (function(yb, Wy, Uy, hy, fy) {
        return Wy ? bb ? ".jsx" : ".js" : !Uy || hy && fy ? Uy + hy + "." + fy.toLowerCase() + "js" : yb
      })) : yb
    }
    const Ly = {
      __extends: hy,
      __assign: fy,
      __rest: Zy,
      __decorate: cb,
      __param: Py,
      __esDecorate: oy,
      __runInitializers: By,
      __propKey: Ky,
      __setFunctionName: ey,
      __metadata: qb,
      __awaiter: sy,
      __generator: Sy,
      __createBinding: Ey,
      __exportStar: ly,
      __values: mb,
      __read: Cy,
      __spread: Ty,
      __spreadArrays: Vy,
      __spreadArray: Jy,
      __await: gb,
      __asyncGenerator: Gy,
      __asyncDelegator: Oy,
      __asyncValues: Ry,
      __makeTemplateObject: vb,
      __importStar: Yy,
      __importDefault: Xy,
      __classPrivateFieldGet: ny,
      __classPrivateFieldSet: uy,
      __classPrivateFieldIn: rb,
      __addDisposableResource: Hy,
      __disposeResources: Fy,
      __rewriteRelativeImportExtension: py
    }
  }
};
Object.freeze(modules);
for (const yb in modules) Object.freeze(modules[yb]);